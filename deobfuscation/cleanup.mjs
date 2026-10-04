import {parse} from 'babel7-parser';
import traverseModule from 'babel7-traverse'; const traverse=traverseModule.default;
import generateModule from 'babel7-generator'; const generate=generateModule.default;
import * as t from 'babel7-types';
import fs from 'node:fs';
import path from 'node:path';
const [src,dst]=process.argv.slice(2);
const ast=parse(fs.readFileSync(src,'utf8'),{sourceType:'unambiguous'});
let changesTotal=0,branches=0,renamed=0;
const key=n=>n.computed?(t.isStringLiteral(n.property)?n.property.value:null):n.property.name;
const primitive=n=>t.isStringLiteral(n)||t.isNumericLiteral(n)||t.isBooleanLiteral(n)||t.isNullLiteral(n);
const bin=(op,a,b)=>{switch(op){case'===':return a===b;case'!==':return a!==b;case'==':return a==b;case'!=':return a!=b;case'<':return a<b;case'>':return a>b;case'<=':return a<=b;case'>=':return a>=b;case'+':return a+b;case'-':return a-b;case'*':return a*b;case'/':return a/b;case'%':return a%b;case'|':return a|b;case'&':return a&b;case'^':return a^b;case'<<':return a<<b;case'>>':return a>>b;case'>>>':return a>>>b;default:throw 0;}};
for(let pass=0;pass<8;pass++){
 let changes=0;const candidates=new Map();
 traverse(ast,{VariableDeclarator(p){if(!t.isIdentifier(p.node.id)||!t.isObjectExpression(p.node.init))return;const b=p.scope.getBinding(p.node.id.name);if(!b||b.path!==p)return;const props=new Map();for(const prop of p.node.init.properties){if(!t.isObjectProperty(prop)||prop.computed)return;props.set(t.isIdentifier(prop.key)?prop.key.name:prop.key.value,prop.value);}candidates.set(b,{p,props});}});
 const read=(n,scope,params=new Map(),depth=0)=>{
  if(depth>20)throw 0;if(primitive(n))return n.value??null;
  if(t.isIdentifier(n)&&params.has(n.name))return params.get(n.name);
  if(t.isMemberExpression(n)&&t.isIdentifier(n.object)){const obj=candidates.get(scope.getBinding(n.object.name));const v=obj?.props.get(key(n));if(v)return read(v,obj.p.scope,new Map(),depth+1);throw 0;}
  if(t.isBinaryExpression(n))return bin(n.operator,read(n.left,scope,params,depth+1),read(n.right,scope,params,depth+1));
  if(t.isUnaryExpression(n)&&n.operator==='!')return !read(n.argument,scope,params,depth+1);
  if(t.isLogicalExpression(n)){const v=read(n.left,scope,params,depth+1);return n.operator==='&&'?(v&&read(n.right,scope,params,depth+1)):n.operator==='||'?(v||read(n.right,scope,params,depth+1)):throwUnknown();}
  if(t.isCallExpression(n)&&t.isMemberExpression(n.callee)&&t.isIdentifier(n.callee.object)){
   const obj=candidates.get(scope.getBinding(n.callee.object.name)),f=obj?.props.get(key(n.callee));
   if(t.isFunctionExpression(f)&&!f.async&&!f.generator&&f.body.body.length===1&&t.isReturnStatement(f.body.body[0])&&f.params.every(t.isIdentifier)&&f.params.length===n.arguments.length){const args=n.arguments.map(a=>read(a,scope,params,depth+1));return read(f.body.body[0].argument,obj.p.scope,new Map(f.params.map((p,i)=>[p.name,args[i]])),depth+1);}
  }throw 0;
 };
 const dead=p=>{let c=p;while(c.parentPath){const parent=c.parentPath;if(parent.isIfStatement()||parent.isConditionalExpression()){try{const v=!!read(parent.node.test,parent.scope);if((c.key==='consequent'&&!v)||(c.key==='alternate'&&v))return true;}catch{}}c=parent;}return false;};
 const unsafe=r=>!r.parentPath.isMemberExpression()||r.key!=='object'||key(r.parentPath.node)===null||r.parentPath.parentPath.isAssignmentExpression({left:r.parentPath.node})||r.parentPath.parentPath.isUpdateExpression()||r.parentPath.parentPath.isUnaryExpression({operator:'delete'});
 let rejected;do{rejected=0;for(const [b,c]of candidates){if(b.constantViolations.some(p=>!dead(p))||b.referencePaths.some(p=>unsafe(p)&&!dead(p))){candidates.delete(b);rejected++;}}}while(rejected);
 // Conditions are evaluated only after the object was established not to escape or mutate in live code.
 traverse(ast,{IfStatement:{exit(p){try{const chosen=read(p.node.test,p.scope)?p.node.consequent:p.node.alternate;if(chosen)p.replaceWith(chosen);else p.remove();branches++;changes++;}catch{}}},ConditionalExpression:{exit(p){try{p.replaceWith(read(p.node.test,p.scope)?p.node.consequent:p.node.alternate);changes++;}catch{}}}});
 traverse(ast,{Program(p){p.scope.crawl();}});
 const tables=new Map([...candidates.values()].map(c=>[c.p.node,c.props]));
 traverse(ast,{MemberExpression:{exit(mp){
  if(!mp.container||!t.isIdentifier(mp.node.object))return;const b=mp.scope.getBinding(mp.node.object.name);const props=tables.get(b?.path.node);if(!props)return;const value=props.get(key(mp.node));if(!value)return;
  if(primitive(value)){mp.replaceWith(t.cloneNode(value));changes++;return;}
  const cp=mp.parentPath;if(!cp.container)return;
  if(!t.isFunctionExpression(value)||value.async||value.generator||!cp.isCallExpression()||cp.node.callee!==mp.node||value.body.body.length!==1||!t.isReturnStatement(value.body.body[0])||!value.params.every(t.isIdentifier))return;
  const args=cp.node.arguments,params=value.params.map(p=>p.name),expr=value.body.body[0].argument;if(args.length!==params.length||args.some(t.isSpreadElement))return;let replacement;
  if(t.isBinaryExpression(expr)&&params.length===2&&t.isIdentifier(expr.left,{name:params[0]})&&t.isIdentifier(expr.right,{name:params[1]}))replacement=t.binaryExpression(expr.operator,t.cloneNode(args[0],true),t.cloneNode(args[1],true));
  if(t.isLogicalExpression(expr)&&params.length===2&&args.every(primitive)&&t.isIdentifier(expr.left,{name:params[0]})&&t.isIdentifier(expr.right,{name:params[1]}))replacement=t.logicalExpression(expr.operator,t.cloneNode(args[0],true),t.cloneNode(args[1],true));
  if(t.isCallExpression(expr)&&t.isIdentifier(expr.callee,{name:params[0]})&&expr.arguments.length===params.length-1&&expr.arguments.every((a,i)=>t.isIdentifier(a,{name:params[i+1]}))){let callee=t.cloneNode(args[0],true);if(t.isMemberExpression(callee))callee=t.sequenceExpression([t.numericLiteral(0),callee]);replacement=t.callExpression(callee,args.slice(1).map(a=>t.cloneNode(a,true)));}
  if(replacement){cp.replaceWith(replacement);changes++;}
 }}});
 traverse(ast,{BinaryExpression:{exit(p){if(!primitive(p.node.left)||!primitive(p.node.right))return;try{const v=bin(p.node.operator,p.node.left.value??null,p.node.right.value??null);if(['string','number','boolean'].includes(typeof v)&&!(typeof v==='number'&&!Number.isFinite(v))){p.replaceWith(t.valueToNode(v));changes++;}}catch{}}},MemberExpression:{exit(p){if(p.node.computed&&t.isStringLiteral(p.node.property)&&t.isValidIdentifier(p.node.property.value)){p.node.computed=false;p.node.property=t.identifier(p.node.property.value);}}}});
 traverse(ast,{Program(p){p.scope.crawl();},VariableDeclarator(p){if(!t.isIdentifier(p.node.id)||!t.isObjectExpression(p.node.init))return;const b=p.scope.getBinding(p.node.id.name);if(b&&!b.referenced&&b.constant&&p.get('init').isPure()){p.remove();changes++;}}});
 changesTotal+=changes;console.log('CLEAN',pass,changes);if(!changes)break;
}
fs.mkdirSync(path.dirname(dst),{recursive:true});fs.writeFileSync(dst,generate(ast,{comments:true,jsescOption:{minimal:true}}).code+'\n');
console.log(JSON.stringify({changesTotal,branches,renamed,bytes:fs.statSync(dst).size}));
function throwUnknown(){throw 0;}
