import {readFileSync, readdirSync,statSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import * as t from 'babel7-types';
import {parse} from 'babel7-parser';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const originalRoot=process.argv[2]??root+'/site';
const readableRoot=process.argv[3]??root+'/readable';
const report=process.argv[4]??root+'/readable-validation.json';
const walk=d=>readdirSync(d).flatMap(n=>{const p=path.join(d,n);return statSync(p).isDirectory()?walk(p):p.endsWith('.js')?[p]:[]});
const originals=walk(originalRoot);let results=[];let failures=[];
const exportsOf=a=>a.program.body.flatMap(n=>n.type==='ExportNamedDeclaration'?[...n.specifiers.map(s=>s.exported.name??s.exported.value),...(n.declaration?Object.keys(t.getBindingIdentifiers(n.declaration)):[])]:n.type==='ExportDefaultDeclaration'?['default']:n.type==='ExportAllDeclaration'?['*:'+n.source.value]:[]).sort();
const importsOf=a=>a.program.body.flatMap(n=>n.type==='ImportDeclaration'?[{src:n.source.value,names:n.specifiers.map(s=>s.type==='ImportNamespaceSpecifier'?'*':s.type==='ImportDefaultSpecifier'?'default':s.imported.name??s.imported.value).sort()}]:[]);
for(const p of originals){const rel=path.relative(originalRoot,p);const out=path.join(readableRoot,rel);try{const original=readFileSync(p,'utf8'),readable=readFileSync(out,'utf8');if(/\b__DECODE_\d+__\b/.test(readable)||readable.includes('__DR_UNREACHABLE_DECODE_'))throw new Error('unresolved decoder reference or recovery marker');if(readable.includes('(((.+)+)+)+$'))throw new Error('self-defending backtracking pattern survives');const a=parse(original,{sourceType:'unambiguous'}),b=parse(readable,{sourceType:'unambiguous'});const exportsMatch=JSON.stringify(exportsOf(a))===JSON.stringify(exportsOf(b));const importsMatch=JSON.stringify(importsOf(a))===JSON.stringify(importsOf(b));if(!exportsMatch||!importsMatch)failures.push(rel+': interface mismatch');results.push({file:rel,originalBytes:Buffer.byteLength(original),readableBytes:Buffer.byteLength(readable),lines:readable.split('\n').length,exportsMatch,importsMatch,exports:exportsOf(b),imports:importsOf(b)});}catch(e){failures.push(rel+': '+e.message);}}
writeFileSync(report,JSON.stringify({files:results.length,failures,originalBytes:results.reduce((s,r)=>s+r.originalBytes,0),readableBytes:results.reduce((s,r)=>s+r.readableBytes,0),lines:results.reduce((s,r)=>s+r.lines,0),results},null,2)+'\n');
console.log(JSON.stringify({files:results.length,failures,originalBytes:results.reduce((s,r)=>s+r.originalBytes,0),readableBytes:results.reduce((s,r)=>s+r.readableBytes,0)}));if(failures.length)process.exitCode=1;
