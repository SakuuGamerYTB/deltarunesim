import {parse} from 'babel7-parser';
import traverseModule from 'babel7-traverse';const traverse=traverseModule.default;
import generateModule from 'babel7-generator';const generate=generateModule.default;
import * as t from 'babel7-types';
import fs from 'node:fs';
import path from 'node:path';
const [file,helperIndex]=process.argv.slice(2);
const indexedHelpers=helperIndex?JSON.parse(fs.readFileSync(helperIndex,'utf8')):null;
const ast=parse(fs.readFileSync(file,'utf8'),{sourceType:'unambiguous'});
const proposals=new Map(),reserved=new Map(),globalNames=new Set();
const propose=(scope,old,name,reason)=>{if(!t.isValidIdentifier(name)||name.length<3||old===name)return;const b=scope.getBinding(old);if(!b||proposals.has(b))return;if(b.scope.hasBinding(name)||b.scope.hasGlobal(name)||b.referencePaths.some(r=>r.scope.hasBinding(name)||r.scope.hasGlobal(name)))return;let names=reserved.get(b.scope);if(!names){names=new Set();reserved.set(b.scope,names);}if(names.has(name)||globalNames.has(name))return;names.add(name);globalNames.add(name);proposals.set(b,{old,name,reason});};
const helperCache=new Map();
function isDefinePropertyCall(call,resolve){
 const c=call.callee;if(t.isMemberExpression(c)&&t.isIdentifier(c.object,{name:'Object'})&&t.isIdentifier(c.property,{name:'defineProperty'}))return true;
 if(t.isIdentifier(c)){const init=resolve(c.name);return t.isMemberExpression(init)&&t.isIdentifier(init.object,{name:'Object'})&&t.isIdentifier(init.property,{name:'defineProperty'});}return false;
}
function nameHelperFunction(f,resolve){
 if(!t.isArrowFunctionExpression(f)&&!t.isFunctionExpression(f)||f.params.length!==2||!f.params.every(p=>t.isIdentifier(p)))return false;
 const expr=t.isBlockStatement(f.body)?f.body.body.length===1&&t.isReturnStatement(f.body.body[0])?f.body.body[0].argument:null:f.body;
 if(!t.isCallExpression(expr)||!isDefinePropertyCall(expr,resolve)||expr.arguments.length!==3||!t.isIdentifier(expr.arguments[0],{name:f.params[0].name})||!t.isStringLiteral(expr.arguments[1],{value:'name'})||!t.isObjectExpression(expr.arguments[2]))return false;
 return expr.arguments[2].properties.some(p=>t.isObjectProperty(p)&&!p.computed&&(p.key.name??p.key.value)==='value'&&t.isIdentifier(p.value,{name:f.params[1].name}));
}
function importedNameHelpers(moduleFile){
 if(indexedHelpers)return new Set(indexedHelpers[moduleFile]??[]);
 if(helperCache.has(moduleFile))return helperCache.get(moduleFile);const exports=new Set();helperCache.set(moduleFile,exports);
 if(!fs.existsSync(moduleFile))return exports;
 const tree=parse(fs.readFileSync(moduleFile,'utf8'),{sourceType:'unambiguous'}),declarations=new Map();
 for(const node of tree.program.body)if(t.isVariableDeclaration(node))for(const d of node.declarations)if(t.isIdentifier(d.id))declarations.set(d.id.name,d.init);
 const helpers=new Set([...declarations].filter(([name,init])=>nameHelperFunction(init,name=>declarations.get(name))).map(([name])=>name));
 for(const node of tree.program.body)if(t.isExportNamedDeclaration(node))for(const spec of node.specifiers)if(t.isExportSpecifier(spec)&&helpers.has(spec.local.name))exports.add(spec.exported.name??spec.exported.value);
 return exports;
}
const isNameHelper=p=>{
 if(!t.isIdentifier(p.node.callee))return false;const b=p.scope.getBinding(p.node.callee.name);
 if(b?.path.isImportSpecifier())return importedNameHelpers(path.resolve(path.dirname(file),b.path.parent.source.value)).has(b.path.node.imported.name??b.path.node.imported.value);
 const f=b?.path.node.init;return nameHelperFunction(f,name=>b?.path.scope.getBinding(name)?.path.node.init);
};

traverse(ast,{ObjectProperty(p){const n=p.node,name=t.isIdentifier(n.key)?n.key.name:t.isStringLiteral(n.key)?n.key.value:null;const target=t.isIdentifier(n.value)?n.value:t.isArrowFunctionExpression(n.value)&&n.value.params.length===0&&t.isIdentifier(n.value.body)?n.value.body:null;if(target&&name&&/^(obj_|scr_|SCR_|caster_|draw_|audio_|ds_|font_|sprite_|room_|event_|instance_|surface_|texture_|shader_|buffer_|keyboard_|mouse_|gamepad_)/.test(name))propose(p.scope,target.name,name,'public dictionary');},ExportNamedDeclaration(p){for(const s of p.node.specifiers)if(t.isExportSpecifier(s)&&t.isIdentifier(s.local)&&t.isIdentifier(s.exported))propose(p.scope,s.local.name,s.exported.name,'export');},CallExpression(p){const n=p.node;if(n.arguments.length!==2||!t.isStringLiteral(n.arguments[1])||!isNameHelper(p))return;const target=t.isIdentifier(n.arguments[0])?n.arguments[0]:p.parentPath.isVariableDeclarator()&&p.parentPath.node.init===n&&t.isIdentifier(p.parentPath.node.id)?p.parentPath.node.id:null;if(target)propose(p.scope,target.name,n.arguments[1].value,'function name helper');}});
// Cache every resolution before mutating names so sibling and shadowed scopes keep their binding.
const refs=[];
traverse(ast,{Identifier(p){if(p.parentPath.isExportSpecifier()&&p.key==='exported'||p.parentPath.isImportSpecifier()&&p.key==='imported')return;if(!p.isReferencedIdentifier()&&!p.isBindingIdentifier())return;const b=p.scope.getBinding(p.node.name);const r=proposals.get(b);if(r)refs.push({p,r});},AssignmentExpression(p){const ids=t.getAssignmentIdentifiers(p.node);for(const [old,id]of Object.entries(ids)){const b=p.scope.getBinding(old),r=proposals.get(b);if(r)refs.push({node:id,r});}}});
for(const {p,node,r}of refs){if(p?.parentPath.isObjectProperty()&&p.key==='value'&&p.parentPath.node.shorthand){p.parentPath.node.shorthand=false;if(p.parentPath.node.extra?.shorthand)p.parentPath.node.extra.shorthand=false;}if(p?.parentPath.isExportSpecifier()&&p.key==='local'&&p.parentPath.node.exported===p.node)p.parentPath.node.exported=t.cloneNode(p.node);(node??p.node).name=r.name;}
if(proposals.size)fs.writeFileSync(file,generate(ast,{comments:true,jsescOption:{minimal:true}}).code+'\n');
console.log(JSON.stringify({file,renamed:proposals.size,names:[...proposals.values()]}));
