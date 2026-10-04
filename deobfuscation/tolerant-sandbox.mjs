import {parse} from 'babel7-parser';import generateModule from 'babel7-generator';import * as t from 'babel7-types';import ivm from 'isolated-vm';
export const marker='__DR_UNREACHABLE_DECODE_';
export async function sandbox(code){
 const ast=parse(code),call=ast.program.body[0].expression,body=call.callee.body.body,ret=body.findLast(n=>t.isReturnStatement(n));
 if(!t.isArrayExpression(ret?.argument))throw new Error('Unexpected decoder sandbox shape');
 ret.argument.elements=ret.argument.elements.map((element,i)=>t.callExpression(t.arrowFunctionExpression([],t.blockStatement([t.tryStatement(t.blockStatement([t.returnStatement(element)]),t.catchClause(t.identifier('decodeFailure'),t.blockStatement([t.returnStatement(t.stringLiteral(marker+i+'__'))])))])),[]));
 const isolate=new ivm.Isolate(),context=await isolate.createContext();try{const result=await context.eval(generateModule.default(ast).code,{timeout:10000,copy:true,filename:'file:///decoder-sandbox.js'});const failures=result.flatMap((value,i)=>typeof value==='string'&&value.startsWith(marker)?[{index:i,expression:generateModule.default(ret.argument.elements[i]).code}]:[]);if(failures.length)console.error(JSON.stringify({guardedDecodeFailures:failures}));return result;}finally{context.release();isolate.dispose();}
}
