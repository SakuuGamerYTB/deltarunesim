import {readFile,writeFile,mkdir} from 'node:fs/promises';
import path from 'node:path';
import {webcrack} from 'webcrack';
const [src,dst,mode]=process.argv.slice(2);
const customSandbox=mode==='--guarded-decode-errors'?(await import('./tolerant-sandbox.mjs')).sandbox:null;
const code=await readFile(src,'utf8');
function flattenArrays({types:t}) {return {visitor:{CallExpression:{exit(p){const n=p.node;if(t.isMemberExpression(n.callee)&&t.isIdentifier(n.callee.property,{name:'concat'})&&t.isArrayExpression(n.callee.object)&&n.arguments.every(a=>t.isArrayExpression(a)))p.replaceWith(t.arrayExpression([...n.callee.object.elements,...n.arguments.flatMap(a=>a.elements)]));}}}}}
function protectOnceWrappers({types:t}) {return {visitor:{VariableDeclarator(p){const init=p.node.init;if(!t.isCallExpression(init)||!t.isFunctionExpression(init.callee)||init.arguments.length)return;const body=init.callee.body.body;if(body.length!==2||!t.isVariableDeclaration(body[0])||body[0].declarations.length!==1||!t.isBooleanLiteral(body[0].declarations[0].init)||!t.isReturnStatement(body[1])||!t.isFunctionExpression(body[1].argument)||body[1].argument.params.length!==2)return;body.unshift(t.emptyStatement());}}};}

function removeDecoderGuards({types:t}) {return {visitor:{FunctionDeclaration(p){
 const body=p.node.body.body;
 if(p.node.params.length<2||![3,4].includes(body.length)||!t.isVariableDeclaration(body[body.length-3])||body[body.length-3].declarations.length!==1||!t.isExpressionStatement(body[body.length-2])||!t.isReturnStatement(body[body.length-1])||!t.isCallExpression(body[body.length-1].argument)||!t.isIdentifier(body[body.length-1].argument.callee))return;
 const decl=body[body.length-3].declarations[0],call=body[body.length-2].expression;
 if(!t.isIdentifier(decl.id)||!t.isCallExpression(decl.init)||!t.isCallExpression(call)||!t.isIdentifier(call.callee,{name:decl.id.name})||call.arguments.length)return;
 const callback=decl.init.arguments[1];if(!t.isFunctionExpression(callback)||callback.params.length||callback.body.body.length!==2||!t.isIfStatement(callback.body.body[0])||!t.isReturnStatement(callback.body.body[1]))return;
 let hasPattern=false,hasNewline=false;t.traverseFast(callback,node=>{if(t.isStringLiteral(node,{value:'(((.+)+)+)+$'}))hasPattern=true;if(t.isStringLiteral(node,{value:'\n'}))hasNewline=true;});
 if(!hasPattern||!hasNewline)return;
 if(body.length===4){const local=body[0];if(!t.isVariableDeclaration(local)||local.declarations.length!==1)return;const d=local.declarations[0],init=d.init;if(!t.isIdentifier(d.id)||!t.isIdentifier(decl.init.callee,{name:d.id.name})||!t.isCallExpression(init)||!t.isFunctionExpression(init.callee)||init.arguments.length)return;const b=init.callee.body.body.filter(n=>!t.isEmptyStatement(n));if(b.length!==2||!t.isVariableDeclaration(b[0])||b[0].declarations.length!==1||!t.isBooleanLiteral(b[0].declarations[0].init)||!t.isReturnStatement(b[1])||!t.isFunctionExpression(b[1].argument)||b[1].argument.params.length!==2)return;}
 body.splice(0,body.length-1);console.error('Removed decoder self-defending guard:',p.node.id?.name);
 }}};}

const start=Date.now();
let current=code,result;
for(let pass=1;pass<=5;pass++){
 const runOptions={jsx:false,unpack:false,...(customSandbox?{sandbox:customSandbox}:{}),plugins:{...(pass>1?{afterParse:[flattenArrays]}:{}),afterUnminify:[removeDecoderGuards,protectOnceWrappers]}};
 try{result=await webcrack(current,runOptions);}catch(error){if(customSandbox||!String(error).includes("Cannot read properties of undefined (reading 'charAt')"))throw error;console.error('Guarded recovery: invalid decoder call in opaque branch');result=await webcrack(current,{...runOptions,sandbox:(await import('./tolerant-sandbox.mjs')).sandbox});}
 await mkdir(path.dirname(dst),{recursive:true});
 console.log('PASS',pass,path.basename(src),current.length,result.code.length);
 if(result.code===current&&pass>1)break;current=result.code;
}
await mkdir(path.dirname(dst),{recursive:true});
if(/\b__DECODE_\d+__\b/.test(result.code))console.error('Intermediate decoder reference remains; final cleanup and validation must eliminate it');
if(result.code.includes('__DR_UNREACHABLE_DECODE_'))throw new Error('Decoder failure marker survived: reject transformation');
await writeFile(dst,result.code+'\n');
console.log(JSON.stringify({src,dst,before:code.length,after:result.code.length,ms:Date.now()-start}));
