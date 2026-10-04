import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
const [root,report]=process.argv.slice(2);
const files=fs.readdirSync(path.join(root,'js')).filter(n=>/^boot[012]-.*\.js$/.test(n)).sort();
const elements=new Map(),events=[],timers=[];
function element(){return {style:{setProperty(){}},classList:{add(){},remove(){},contains(){return false;}},dataset:{},children:[],appendChild(x){this.children.push(x);return x;},append(){},remove(){},setAttribute(k,v){this[k]=v;},getAttribute(k){return this[k]??null;},addEventListener(){},getBoundingClientRect(){return {left:0,top:0,width:320,height:240};},getContext(){return null;},textContent:'',innerHTML:'',className:'',src:''};}
const loc={href:'http://localhost:8768/',origin:'http://localhost:8768',protocol:'http:',hostname:'localhost',host:'localhost:8768',pathname:'/',search:'',hash:'',reload(){}};
const document={domain:'localhost',location:loc,baseURI:loc.href,readyState:'loading',documentElement:element(),body:element(),head:element(),write(){},createElement(){return element();},getElementById(id){if(!elements.has(id))elements.set(id,element());return elements.get(id);},querySelector(){return null;},querySelectorAll(){return [];},getElementsByTagName(){return [];},addEventListener(){},currentScript:{src:loc.href+'js/'+files[2]}};
const noop=()=>{};
const storage={getItem(){return null;},setItem(){},removeItem(){}};
class XHR {open(){}send(){}abort(){}setRequestHeader(){}}
const sandbox={document,location:loc,navigator:{hardwareConcurrency:4,userAgent:'Chrome bootstrap smoke'},console:Object.fromEntries(['log','warn','info','error','exception','table','trace'].map(n=>[n,noop])),localStorage:storage,sessionStorage:storage,innerWidth:1280,innerHeight:720,devicePixelRatio:1,addEventListener(...args){events.push(args[0]);},removeEventListener(){},setTimeout(fn){timers.push(fn);return timers.length;},clearTimeout(){},setInterval(){return 1;},clearInterval(){},requestAnimationFrame(){return 1;},cancelAnimationFrame(){},fetch(){return new Promise(()=>{});},XMLHttpRequest:XHR,Image:class {},URL,URLSearchParams,performance:{now(){return 0;},getEntriesByType(){return [];}},PerformanceObserver:class {observe(){}},AbortController,TextEncoder,TextDecoder,Uint8Array};
sandbox.window=sandbox;sandbox.self=sandbox;sandbox.top=sandbox;
const context=vm.createContext(sandbox),results=[];
for(const file of files){const start=performance.now();try{new vm.Script(fs.readFileSync(path.join(root,'js',file),'utf8'),{filename:file}).runInContext(context,{timeout:2000});results.push({file:'js/'+file,ok:true,milliseconds:Math.round(performance.now()-start)});}catch(e){results.push({file:'js/'+file,ok:false,error:String(e),milliseconds:Math.round(performance.now()-start)});break;}}
const result={kind:'synchronous-bootstrap-smoke',timeoutPerFileMs:2000,results,brandPresent:!!sandbox.__brand,bootPresent:!!sandbox.__drBoot,limits:'DOM simulé, callbacks réseau/événements non exécutés. Le comportement en navigateur se vérifie séparément.'};
if(report)fs.writeFileSync(report,JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result));if(results.length!==3||results.some(r=>!r.ok))process.exitCode=1;
