import {parse} from 'babel7-parser';
import traverseModule from 'babel7-traverse';const traverse=traverseModule.default;
import generateModule from 'babel7-generator';const generate=generateModule.default;
import * as t from 'babel7-types';
import fs from 'node:fs';
const [file]=process.argv.slice(2),code=fs.readFileSync(file,'utf8');
if(!code.includes('(((.+)+)+)+$')){console.log(JSON.stringify({file,guardsRemoved:0}));process.exit(0);}
const ast=parse(code,{sourceType:'unambiguous'});let removed=0;
traverse(ast,{VariableDeclarator(p){
 const n=p.node;if(!t.isIdentifier(n.id)||!t.isCallExpression(n.init)||n.init.arguments.length!==2)return;
 const callback=n.init.arguments[1];if(!t.isFunctionExpression(callback)||callback.params.length||callback.body.body.length!==2||!t.isIfStatement(callback.body.body[0])||!t.isReturnStatement(callback.body.body[1]))return;
 let pattern=false,newline=false;t.traverseFast(callback,node=>{if(t.isStringLiteral(node,{value:'(((.+)+)+)+$'}))pattern=true;if(t.isStringLiteral(node,{value:'\n'}))newline=true;});if(!pattern||!newline)return;
 const binding=p.scope.getBinding(n.id.name);if(!binding||binding.constantViolations.length)return;
 const outside=binding.referencePaths.filter(ref=>!ref.findParent(parent=>parent.node===callback));
 if(!outside.length||outside.some(ref=>!ref.parentPath.isCallExpression()||ref.key!=='callee'||ref.parent.arguments.length||!ref.parentPath.parentPath.isExpressionStatement()))return;
 for(const ref of outside)ref.parentPath.parentPath.remove();p.remove();removed++;
}});
if(removed)fs.writeFileSync(file,generate(ast,{comments:true,jsescOption:{minimal:true}}).code+'\n');
console.log(JSON.stringify({file,guardsRemoved:removed}));
