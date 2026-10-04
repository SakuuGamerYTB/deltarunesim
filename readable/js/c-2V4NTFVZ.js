const n = function () {
  ;
  let cb = true;
  return function (cm, cT) {
    const cC = cb ? function () {
      if (cT) {
        const cY = cT.apply(cm, arguments);
        cT = null;
        return cY;
      }
    } : function () {};
    cb = false;
    return cC;
  };
}();
import { f as o, k as s } from "./c-AWYBS4TS.js";
import { G as x } from "./c-PL4HTHAA.js";
import { b as f } from "./c-VD4WD5M6.js";
import { $c as w, Qg as g, Rg as y } from "./c-D6ZXNKTF.js";
import { b as M } from "./c-YJJCI5ES.js";
import { Dc as r, I as u, N as i, Na as l, Oa as t, Ob as h, Ta as b, Ua as Y, Vc as a, Xa as c0, Za as c1, ab as c2, fb as c3, gb as c4, i as c5, nb as c6 } from "./c-FMIAGHDE.js";
import { a as c7, l as c8 } from "./c-PIEPTJTC.js";
c8();
var c9 = r().constructor;
var cc = null;
try {
  cc = w(1, 1).constructor;
} catch {}
var isPath = c7(cb => cb instanceof c9, "isPath");
var NOOP = c7(() => {}, "NOOP");
var cP = ["CanvasPattern", "CanvasGradient", "CanvasRenderingContext2D", "OffscreenCanvasRenderingContext2D", "HTMLCanvasElement", "OffscreenCanvas", "ImageBitmap", "HTMLImageElement", "HTMLVideoElement", "HTMLAudioElement", "Path2D", "AudioBuffer", "AudioNode"].map(cb => globalThis[cb]).filter(cb => typeof cb == "function");
var isSfxVoice = c7(cb => {
  let cm = cb && cb.constructor;
  return !!cm && cm.name === "SfxVoice" && typeof cb._halt == "function" && "entry" in cb;
}, "isSfxVoice");
var isHostRender = c7(cb => {
  for (let cm of cP) {
    if (cb instanceof cm) {
      return true;
    }
  }
  return isSfxVoice(cb);
}, "isHostRender");
var cB = ["./gm.js", "./globals.js", "./generated/runtime.js", "./battle.js", "./bullets.js", "./heart.js", "./text.js", "./backgrounds.js", "./jevil.js", "./ut_runtime.js", "./ch2spells.js"];
var cR = new Map();
var cD = new Map();
var chapterModules = c7(cb => ["./generated/ch" + cb + "_objects.js", "./generated/ch" + cb + "_scripts.js", "./generated/ch" + cb + "_shims.js", "./generated/ch" + cb + "_stubs.js"], "chapterModules");
function prepareWire(cb = M.chapter) {
  let cm = cB.concat(typeof cb == "number" && cb >= 2 ? chapterModules(cb) : []);
  return Promise.all(cm.map(cT => cR.has(cT) ? null : __dr_imp(cT).then(cC => {
    cR.set(cT, cC);
    cD.delete(cb);
  }, () => {})));
}
c7(prepareWire, "prepareWire");
function chapterScope(cb) {
  let cm = cD.get(cb);
  if (cm) {
    return cm;
  }
  let cT = V9 => cR.get(V9);
  let cC = cT("./generated/ch" + cb + "_objects.js");
  let cY = cT("./generated/ch" + cb + "_scripts.js");
  let ca = cT("./generated/ch" + cb + "_shims.js");
  let V0 = cT("./generated/ch" + cb + "_stubs.js");
  let V1 = cT("./generated/runtime.js");
  if (!cC || !cY || !V1) {
    return null;
  }
  cm = Object.create(null);
  let V2 = V9 => {
    for (let Vc of Object.keys(V9)) {
      Object.defineProperty(cm, Vc, {
        get: () => V9[Vc],
        configurable: true,
        enumerable: true
      });
    }
  };
  for (let V9 of cB) {
    let Vc = cT(V9);
    if (Vc) {
      V2(Vc);
    }
  }
  if (V0) {
    V2(V0);
  }
  V2(cC);
  let instance_destroy = () => {};
  let V4 = VV => cY[VV] || ca && ca[VV] || V1[VV] || instance_destroy;
  let V5 = new Proxy({}, {
    get: (VV, Ve) => cC[Ve] || V0 && V0[Ve]
  });
  let V6 = (VV, Ve) => {
    if (typeof VV == "number") {
      VV = V1.objectByIndex(VV);
    }
    if (typeof VV == "function" || typeof VV == "string") {
      return c3.with(VV, Ve);
    }
    if (VV && typeof VV == "object" && !VV.destroyed) {
      Ve(VV);
    }
  };
  let V7 = cT("./gm.js");
  let V8 = {
    SCRIPT: V4,
    OBJ: V5,
    withInst: V6,
    instance_destroy: instance_destroy,
    S: ca,
    SCR: cY,
    RT: V1,
    __SELF: cY,
    __SHIM: ca,
    __OBJ_ALL: cC,
    __OBJ_STUB: V0,
    scr_monsterdefeat_of: V1.scr_monsterdefeat_of,
    trigger_event: V1.trigger_event
  };
  for (let VV of Object.keys(V8)) {
    Object.defineProperty(cm, VV, {
      value: V8[VV],
      configurable: true,
      enumerable: true
    });
  }
  if (V7) {
    Object.defineProperty(cm, "g", {
      get: () => V7.curG,
      configurable: true,
      enumerable: true
    });
  }
  cD.set(cb, cm);
  return cm;
}
c7(chapterScope, "chapterScope");
var cp = new Set("break case catch class const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield async await of true false null undefined NaN Infinity arguments get set static".split(" "));
var co = new Map();
function freeNames(cb) {
  let cm = co.get(cb);
  if (cm) {
    return cm;
  }
  let cT = cb.replace(/\/\*[\s\S]*?\*\//g, " ").replace(/\/\/[^\n]*/g, " ").replace(/'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/g, "\"\"");
  let cC = new Set();
  for (let V1 of cT.matchAll(/\b(?:let|const|var)\s+([A-Za-z_$][\w$]*)/g)) {
    cC.add(V1[1]);
  }
  for (let V2 of cT.matchAll(/\b(?:let|const|var)\s*[[{]([^\]}]*)[\]}]/g)) {
    for (let V3 of V2[1].split(",")) {
      let V4 = V3.trim().split(/[\s:=]/)[0];
      if (V4) {
        cC.add(V4);
      }
    }
  }
  for (let V5 of cT.matchAll(/\(([^()]*)\)\s*=>/g)) {
    for (let V6 of V5[1].split(",")) {
      let V7 = V6.trim().split(/[\s=]/)[0];
      if (/^[A-Za-z_$][\w$]*$/.test(V7)) {
        cC.add(V7);
      }
    }
  }
  for (let V8 of cT.matchAll(/([A-Za-z_$][\w$]*)\s*=>/g)) {
    cC.add(V8[1]);
  }
  for (let V9 of cT.matchAll(/\bfunction\s*[A-Za-z_$]?[\w$]*\s*\(([^()]*)\)/g)) {
    for (let Vc of V9[1].split(",")) {
      let VV = Vc.trim().split(/[\s=]/)[0];
      if (VV) {
        cC.add(VV);
      }
    }
  }
  for (let Ve of cT.matchAll(/\bcatch\s*\(\s*([A-Za-z_$][\w$]*)/g)) {
    cC.add(Ve[1]);
  }
  let cY = new Set();
  let ca = /[A-Za-z_$][\w$]*/g;
  let V0;
  while (V0 = ca.exec(cT)) {
    let VP = V0[0];
    let VO = V0.index - 1;
    while (VO >= 0 && (cT[VO] === " " || cT[VO] === "\n" || cT[VO] === "\t" || cT[VO] === "\r")) {
      VO--;
    }
    if (VO >= 0 && (cT[VO] === "." || /[0-9]/.test(cT[VO]))) {
      continue;
    }
    let Vj = ca.lastIndex;
    while (Vj < cT.length && (cT[Vj] === " " || cT[Vj] === "\n" || cT[Vj] === "\t" || cT[Vj] === "\r")) {
      Vj++;
    }
    if ((cT[Vj] !== ":" || !(VO >= 0) || cT[VO] !== "{" && cT[VO] !== ",") && !cp.has(VP) && !cC.has(VP)) {
      cY.add(VP);
    }
  }
  cm = {
    free: cY,
    usesThis: /\bthis\b/.test(cT)
  };
  co.set(cb, cm);
  return cm;
}
c7(freeNames, "freeNames");
var cH = new Map();
function homeClass(cb, cm) {
  let cT = cH.get(cb);
  if (cT) {
    return cT;
  }
  let cC = null;
  let cY = new Set();
  for (let ca of cm) {
    for (let V0 = ca && ca.constructor; V0 && V0 !== c1 && V0 !== Object && !cY.has(V0); V0 = Object.getPrototypeOf(V0)) {
      cY.add(V0);
      let V1 = "";
      try {
        V1 = Function.prototype.toString.call(V0);
      } catch {}
      if (V1.includes(cb)) {
        cC = V0;
        break;
      }
    }
    if (cC) {
      break;
    }
  }
  if (cC) {
    cH.set(cb, cC);
  }
  return cC;
}
c7(homeClass, "homeClass");
function methodPlan(cb, cm, cT, cC, cY) {
  if (cb !== null) {
    return "no source in the production build";
  }
  let ca = chapterScope(M.chapter);
  if (!ca) {
    return "no chapter scope";
  }
  let {
    free: V0,
    usesThis: V1
  } = freeNames(cb);
  let V2 = null;
  let V3;
  for (let V5 of V0) {
    if (/^_w\d+$/.test(V5)) {
      if (V2 && V2 !== V5) {
        return "binds " + V5;
      }
      V2 = V5;
      if (!cm) {
        let V6 = withTarget(cb, V5, cT);
        if (typeof V6 == "string") {
          return "binds " + V5 + " (" + V6 + ")";
        }
        V3 = V6;
      }
      continue;
    }
    if (!(V5 in ca) && !(V5 in globalThis)) {
      return "captures " + V5;
    }
  }
  let V4 = null;
  if (V1 && cC) {
    V4 = cC;
  } else if (V1) {
    let V7 = homeClass(cb, cT);
    if (!V7) {
      return "this: no home class";
    }
    if (cm && cm instanceof V7) {
      V4 = cm;
    } else if (cY && cY.filter(V8 => V8 instanceof V7).length === 1) {
      V4 = cY.find(V8 => V8 instanceof V7);
    } else {
      for (let V8 of cT) {
        if (V8 && !V8.destroyed && V8.constructor === V7) {
          if (V4) {
            return "this: two " + V7.name;
          }
          V4 = V8;
        }
      }
      if (!V4) {
        return "this: no " + V7.name;
      }
    }
  }
  return {
    wn: V2,
    wv: V3,
    self: V4,
    sc: ca
  };
}
c7(methodPlan, "methodPlan");
var cN = new Map();
function withTarget(cb, cm, cT) {
  let cC = cN.get(cb + "|" + cm);
  if (cC === undefined) {
    cC = null;
    let ca = homeClass(cb, cT);
    let V0 = "";
    try {
      V0 = ca ? Function.prototype.toString.call(ca) : "";
    } catch {}
    let V1 = V0.indexOf(cb);
    if (V1 >= 0) {
      let V2 = V0.slice(0, V1);
      let V3 = new RegExp("World\\.with\\('([A-Za-z_]\\w*)',\\s*\\(" + cm + "\\)\\s*=>", "g");
      let V4;
      let V5 = null;
      while (V4 = V3.exec(V2)) {
        V5 = V4;
      }
      if (V5 && V2.indexOf("(" + cm + ") =>", V5.index + V5[0].length) < 0) {
        cC = V5[1];
      }
    }
    cN.set(cb + "|" + cm, cC);
  }
  if (!cC) {
    return "no with";
  }
  let cY = null;
  for (let V6 of cT) {
    if (V6 && !V6.destroyed && typeof V6.is == "function" && V6.is(cC)) {
      if (cY) {
        return "two " + cC;
      }
      cY = V6;
    }
  }
  return cY || "no " + cC;
}
c7(withTarget, "withTarget");
var cs = new Map();
function remake(cb, cm, cT) {
  let cC = cs.get(cb);
  if (!cC) {
    cC = new Function("__scope", "return function () { with (__scope) { return (" + cb + "\n); } };");
    cs.set(cb, cC);
  }
  let cY = cm.wn ? {
    [cm.wn]: cm.wv !== undefined ? cm.wv : cT
  } : null;
  let ca = cm.sc;
  let V0 = new Proxy(ca, {
    has: (V1, V2) => cY !== null && V2 in cY || V2 in ca,
    get: (V1, V2) => V2 === Symbol.unscopables ? undefined : cY !== null && V2 in cY ? cY[V2] : ca[V2]
  });
  return cC(V0).call(cm.self);
}
c7(remake, "remake");
var cf = new Map();
function ownSource(cb, cm) {
  let cT = cf.get(cb);
  if (!cT) {
    cf.set(cb, cT = new Map());
  }
  let cC = cT.get(cm);
  if (cC === undefined) {
    cC = false;
    for (let cY = cb; cY && cY !== c1 && cY !== Object; cY = Object.getPrototypeOf(cY)) {
      let ca = "";
      try {
        ca = Function.prototype.toString.call(cY);
      } catch {}
      if (ca.includes(cm)) {
        cC = true;
        break;
      }
    }
    cT.set(cm, cC);
  }
  return cC;
}
c7(ownSource, "ownSource");
var cg = /^(\([^)]*\)|[A-Za-z_$][\w$]*)\s*=>/;
function methodWhy(cb, cm, cT) {
  let cC = "";
  try {
    cC = Function.prototype.toString.call(cb);
  } catch {
    return "no source";
  }
  if (!cg.test(cC)) {
    return "not an arrow";
  }
  let cY = methodPlan(cC, cm, cT);
  if (typeof cY == "string") {
    return cY;
  } else {
    return null;
  }
}
c7(methodWhy, "methodWhy");
function remakeMethod(cb, cm, cT, cC, cY) {
  if (typeof cb != "string" || !cg.test(cb)) {
    return "no source" + (typeof cb == "string" ? ": " + cb.slice(0, 40) : "");
  }
  let ca = methodPlan(cb, cm, cT, cC, cY);
  if (typeof ca == "string") {
    return ca;
  }
  let V0 = null;
  try {
    V0 = remake(cb, ca, cm);
  } catch (V1) {
    return "remake: " + (V1 && V1.message || V1);
  }
  if (typeof V0 == "function") {
    return V0;
  } else {
    return "remake: not a function";
  }
}
c7(remakeMethod, "remakeMethod");
var cM = new WeakMap();
function fnv(cb) {
  let cm = 2166136261;
  for (let cT = 0; cT < cb.length; cT++) {
    cm ^= cb.charCodeAt(cT);
    cm = Math.imul(cm, 16777619) >>> 0;
  }
  return cm >>> 0;
}
c7(fnv, "fnv");
function classKey(cb) {
  let cm = cM.get(cb);
  if (!cm) {
    let cT = "";
    try {
      cT = Function.prototype.toString.call(cb);
    } catch {}
    cm = cb.name + "#" + fnv(cT).toString(36);
    cM.set(cb, cm);
  }
  return cm;
}
c7(classKey, "classKey");
function encodeWorld() {
  if (typeof M.chapter == "number" && M.chapter >= 2 && !chapterScope(M.chapter)) {
    prepareWire(M.chapter);
  }
  let cb = [];
  let cm = new Map();
  let cT = new Map();
  let cC = [];
  let cY = null;
  let ca = null;
  let V0 = V5 => {
    let V6 = cm.get(V5);
    if (V6 === undefined) {
      V6 = cb.length;
      cm.set(V5, V6);
      cb.push(null);
      cC.push(V5);
    }
    return {
      $i: V6
    };
  };
  let V1 = (V5, V6, V7) => {
    if (V5 === null || typeof V5 != "object") {
      if (typeof V5 == "function" && V5.prototype instanceof c1 && V5.prototype.constructor !== V5) {
        return {
          $or: classKey(V5.prototype.constructor)
        };
      }
      if (typeof V5 == "function" && (V5 === c1 || V5.prototype instanceof c1)) {
        return {
          $c: classKey(V5)
        };
      }
      if (typeof V5 == "function" && /^\(\)\s*=>\s*\{\s*\}$/.test(Function.prototype.toString.call(V5))) {
        return {
          $noop: 1
        };
      }
      if (typeof V5 == "function" && V5.name && c1.prototype[V5.name] === V5) {
        return {
          $im: V5.name
        };
      }
      if (typeof V5 == "function" && V5.name && !/^bound /.test(V5.name)) {
        return {
          $fn: classKey(V5)
        };
      }
      if (typeof V5 == "function" && /\.__atkPin\b/.test(V6)) {
        return null;
      }
      if (typeof V5 == "function" && g.has(V5)) {
        let [VP, VO] = g.get(V5);
        if (typeof VP == "function" && VO instanceof c1) {
          if (VP.name && !/^bound /.test(VP.name) && c1.prototype[VP.name] !== VP && !(VP.prototype instanceof c1)) {
            return {
              $bind: {
                $fn: classKey(VP)
              },
              c: V0(VO)
            };
          }
          let Vj = Function.prototype.toString.call(VP);
          let VB = cg.test(Vj) ? typeof methodPlan(Vj, V7 ? ca : null, c3.list, VO) == "string" ? methodPlan(Vj, V7 ? ca : null, c3.list, VO) : null : "not an arrow";
          if (VB === null) {
            return Object.assign({
              $meth: fnv(Vj),
              src: Vj,
              $free: 1,
              $self: V0(VO)
            }, V7 && ca ? {
              $own: V0(ca)
            } : null);
          } else {
            cY ||= "method " + V6 + " (bound: " + VB + ")";
            return null;
          }
        }
      }
      if (typeof V5 == "function" && V7) {
        let VR = Function.prototype.toString.call(V5);
        if (ca && !ownSource(ca.constructor, VR)) {
          let VD = Object.values(ca).filter(Vd => Vd instanceof c1);
          let VG = cg.test(VR) ? methodPlan(VR, ca, c3.list, undefined, VD) : "not an arrow";
          if (typeof VG == "string") {
            cY ||= "method " + V6 + " (" + VG + ")";
            return null;
          }
        }
        return {
          $meth: fnv(VR),
          src: VR
        };
      }
      if (typeof V5 == "function") {
        let Vd = methodWhy(V5, null, c3.list);
        if (Vd === null) {
          let Vn = Function.prototype.toString.call(V5);
          return {
            $meth: fnv(Vn),
            src: Vn,
            $free: 1
          };
        }
        cY ||= "method " + V6 + " (" + Vd + ")";
        return null;
      }
      if (typeof V5 == "symbol" || typeof V5 == "bigint") {
        cY ||= typeof V5 + " " + V6;
        return null;
      } else {
        return V5;
      }
    }
    if (V5 instanceof c1) {
      return V0(V5);
    }
    let V8 = cT.get(V5);
    if (V8) {
      return V8;
    }
    if (isHostRender(V5)) {
      return null;
    }
    if (Array.isArray(V5)) {
      let Vp = new Array(V5.length);
      cT.set(V5, Vp);
      for (let Vo = 0; Vo < V5.length; Vo++) {
        Vp[Vo] = V1(V5[Vo], V6);
      }
      return Vp;
    }
    if (ArrayBuffer.isView(V5)) {
      let VX = V5.slice();
      cT.set(V5, VX);
      return VX;
    }
    if (V5 instanceof Map) {
      let VH = new Map();
      cT.set(V5, VH);
      for (let [VQ, Vz] of V5) {
        VH.set(V1(VQ, V6), V1(Vz, V6));
      }
      return VH;
    }
    if (V5 instanceof Set) {
      let VN = new Set();
      cT.set(V5, VN);
      for (let VJ of V5) {
        VN.add(V1(VJ, V6));
      }
      return VN;
    }
    if (Object.getPrototypeOf(V5) === t) {
      let Vs = {
        $m: {
          name: V5.name,
          level: V5.level,
          paused: V5.paused,
          ended: V5.ended,
          clock: V5._clock,
          rate: V5._rate,
          vol: V5._vol
        }
      };
      cT.set(V5, Vs);
      return Vs;
    }
    if (cc && V5 instanceof cc) {
      let Vx = {
        $surf: [V5.canvas ? V5.canvas.width : 1, V5.canvas ? V5.canvas.height : 1, !!V5.ctx]
      };
      cT.set(V5, Vx);
      return Vx;
    }
    if (isPath(V5)) {
      let Vf = {};
      let Vw = {
        $p: Vf
      };
      cT.set(V5, Vw);
      for (let Vg of Object.keys(V5)) {
        Vf[Vg] = V1(V5[Vg], V6 + ".path");
      }
      return Vw;
    }
    let V9 = Object.getPrototypeOf(V5);
    let Vc = V9 && V9.constructor;
    let VV = V9 && V9 !== Object.prototype && typeof Vc == "function" && Vc.prototype === V9 && !(V9 instanceof c1) && Vc.name ? Function.prototype.toString.call(Vc) : "";
    if (VV.startsWith("function") && !VV.includes("[native code]")) {
      let Vy = {};
      let VA = {
        $new: classKey(Vc),
        f: Vy
      };
      cT.set(V5, VA);
      for (let VM of Object.keys(V5)) {
        let VW = V5[VM];
        if (typeof VW == "function") {
          if (VV.includes(Function.prototype.toString.call(VW))) {
            continue;
          }
          cY ||= "method " + V6 + "." + VM + " (not made by " + Vc.name + ")";
          return null;
        }
        Vy[VM] = V1(VW, V6 + "." + VM);
      }
      return VA;
    }
    if (V9 !== Object.prototype && V9 !== null) {
      cY ||= "object " + (V5.constructor && V5.constructor.name || "?") + " at " + V6;
      return null;
    }
    if (typeof V5.name == "string" && u[V5.name] === V5) {
      return {
        $s: V5.name
      };
    }
    if (typeof V5.name == "string" && h[V5.name] === V5) {
      return {
        $f: V5.name
      };
    }
    let Ve = {};
    cT.set(V5, Ve);
    for (let VZ of Object.keys(V5)) {
      Ve[VZ] = V1(V5[VZ], V6 + "." + VZ);
    }
    return Ve;
  };
  let V2 = c3.list.map(V5 => V0(V5).$i);
  let V3 = c3.pending.map(V5 => V5 instanceof c1 ? V0(V5).$i : -1);
  let V4 = {};
  for (let V5 of Object.keys(M)) {
    if (typeof M[V5] != "function") {
      V4[V5] = V1(M[V5], "G." + V5);
    }
  }
  while (cC.length) {
    let V6 = cC.shift();
    let V7 = cm.get(V6);
    let V8 = V6.constructor && V6.constructor.name || "?";
    let V9 = {};
    ca = V6;
    for (let Vc of Object.keys(V6)) {
      V9[Vc] = V1(V6[Vc], V8 + "." + Vc, true);
    }
    ca = null;
    cb[V7] = {
      c: classKey(V6.constructor),
      f: V9
    };
    if (cY) {
      break;
    }
  }
  if (cY) {
    return {
      ok: false,
      why: cY
    };
  } else {
    return {
      ok: true,
      data: {
        insts: cb,
        list: V2,
        pending: V3,
        g: V4,
        frame: c3.frame,
        spawns: c3.spawns,
        self: c3.self instanceof c1 ? V0(c3.self) : null,
        rng: {
          seed: c5.seed,
          state: c5.state,
          calls: c5.calls
        },
        held: {
          ...i.held
        },
        pressed: {
          ...i.pressed
        },
        counters: a(),
        instId: c1._id,
        music: {
          name: b(),
          pos: Y()
        }
      }
    };
  }
}
c7(encodeWorld, "encodeWorld");
function deepDump() {
  let cb = cT => Number.isFinite(cT) ? Math.round(cT * 100) / 100 : String(cT);
  let cm = [x(), "rng " + c5.calls + " hp " + JSON.stringify(M.hp) + " mn " + M.mnfight + " my " + M.myfight + " tt " + cb(M.turntimer)];
  for (let cT of c3.list) {
    if (!cT.destroyed) {
      cm.push(cT.constructor.name + " " + cb(cT.x) + "," + cb(cT.y) + " v" + cb(cT._hs) + "," + cb(cT._vs) + " " + cT.sprite_index + " " + cb(cT.image_index) + " a" + (cT.alarm ? cT.alarm.filter(cC => cC >= 0).join("/") : ""));
    }
  }
  return cm.join("\n");
}
c7(deepDump, "deepDump");
var cr = new Map();
var cu = new Map();
function registerClassModules(cb) {
  for (let cm of cb) {
    if (cm) {
      for (let cT of Object.values(cm)) {
        if (Array.isArray(cT) && cT.length && cT.every(ca => ca && typeof ca == "object")) {
          registerClassModules(cT);
          continue;
        }
        if (typeof cT != "function") {
          continue;
        }
        let cC = cT.prototype instanceof c1 ? cr : cu;
        let cY = cC.get(cT.name) || [];
        if (!cY.includes(cT)) {
          cY.push(cT);
        }
        cC.set(cT.name, cY);
      }
    }
  }
}
c7(registerClassModules, "registerClassModules");
var cK = ["./battle.js", "./bullets.js", "./ch2spells.js", "./ch3_rhythm.js", "./controller.js", "./dummy.js", "./gameover.js", "./heart.js", "./jevil.js", "./text.js", "./ut_runtime.js", "./backgrounds.js", "./silhouette.js", "./enemies/index.js", "./generated/ch1_objects.js", "./generated/ch2_objects.js", "./generated/ch2_cut.js", "./generated/ch2_stubs.js", "./generated/ch3_objects.js", "./generated/ch3_stubs.js", "./generated/ch4_objects.js", "./generated/ch4_stubs.js", "./generated/ch5_objects.js", "./generated/ch5_stubs.js", "./generated/cut.js", "./generated/stubs.js", "./generated/ut_objects.js", "./generated/ch1_scripts.js", "./generated/ch2_scripts.js", "./generated/ch3_scripts.js", "./generated/ch4_scripts.js", "./generated/ch5_scripts.js", "./generated/ut_scripts.js", "./generated/runtime.js"];
var groupOfModule = c7(cb => {
  if (/\/ut_(objects|scripts)\.js$/.test(cb)) {
    return "ut";
  }
  let cm = /\/ch(\d+)_/.exec(cb);
  if (cm && Number(cm[1]) >= 4) {
    return "ch" + cm[1];
  } else {
    return null;
  }
}, "groupOfModule");
var cE = null;
async function takeUp(cb) {
  let cm = [];
  for (let cT of cK) {
    if (!!cb(cT) && !cR.has(cT)) {
      try {
        let cC = await __dr_imp(cT);
        cm.push(cC);
        cR.set(cT, cC);
      } catch {}
    }
  }
  for (let cY of cB.concat(chapterModules(2), chapterModules(3), chapterModules(4), chapterModules(5))) {
    if (!!cb(cY) && !cR.has(cY)) {
      try {
        cR.set(cY, await __dr_imp(cY));
      } catch {}
    }
  }
  registerClassModules(cm);
}
c7(takeUp, "takeUp");
function loadClassModules() {
  return cE || (cE = takeUp(cb => {
    let cm = groupOfModule(cb);
    return !cm || o(cm);
  }), s(cb => {
    cE = cE.then(() => takeUp(cm => groupOfModule(cm) === cb));
  }), cE);
}
c7(loadClassModules, "loadClassModules");
function findFn(cb) {
  let cm = cb.slice(0, cb.lastIndexOf("#"));
  for (let cT of cu.get(cm) || []) {
    if (classKey(cT) === cb) {
      return cT;
    }
  }
  return null;
}
c7(findFn, "findFn");
function resolver() {
  let cb = new Map();
  let cm = cT => {
    if (typeof cT == "function" && (cT === c1 || cT.prototype instanceof c1)) {
      cb.set(classKey(cT), cT);
    }
  };
  cm(c1);
  for (let cT of c3.list) {
    for (let cC = cT && cT.constructor; cC && cC !== c1 && cC !== Object; cC = Object.getPrototypeOf(cC)) {
      cm(cC);
    }
  }
  return cY => {
    let ca = cb.get(cY);
    if (ca) {
      return ca;
    }
    let V0 = cY.slice(0, cY.lastIndexOf("#"));
    cm(c6(V0));
    for (let V1 of Object.values(c4)) {
      if (V1 && V1.name === V0) {
        cm(V1);
      }
    }
    for (let V2 of cr.get(V0) || []) {
      cm(V2);
    }
    for (let V3 of cu.get(V0) || []) {
      cm(V3);
    }
    ca = cb.get(cY);
    return ca || null;
  };
}
c7(resolver, "resolver");
function applyWorld(cb, cm = {}) {
  let cT = resolver();
  let cC = null;
  let cY = new Array(cb.insts.length);
  let ca = new Map();
  if (!cm.fresh) {
    for (let V8 of c3.list) {
      if (V8 instanceof c1 && Number.isFinite(V8._ord)) {
        ca.set(V8._ord, V8);
      }
    }
  }
  if (!cm.fresh) {
    for (let V9 of c3.pending) {
      if (V9 instanceof c1 && Number.isFinite(V9._ord)) {
        ca.set(V9._ord, V9);
      }
    }
  }
  for (let Vc = 0; Vc < cb.insts.length; Vc++) {
    let VV = cT(cb.insts[Vc].c);
    if (!VV) {
      return "unknown class " + cb.insts[Vc].c;
    }
    let Ve = ca.get(cb.insts[Vc].f._ord);
    cY[Vc] = Ve && Ve.constructor === VV ? Ve : Object.create(VV.prototype);
    if (cY[Vc] === Ve) {
      ca.delete(cb.insts[Vc].f._ord);
    }
  }
  let V0 = c9.prototype;
  let V1 = new Map();
  let V2 = cb.list.filter(VP => !cb.insts[VP] || !cb.insts[VP].f || !cb.insts[VP].f.destroyed).map(VP => cY[VP]);
  let V3 = VP => {
    if (VP === null || typeof VP != "object") {
      return VP;
    }
    let VO = V1.get(VP);
    if (VO) {
      return VO;
    }
    if (Array.isArray(VP)) {
      let VB = new Array(VP.length);
      V1.set(VP, VB);
      for (let VR = 0; VR < VP.length; VR++) {
        VB[VR] = V3(VP[VR]);
      }
      return VB;
    }
    if (ArrayBuffer.isView(VP)) {
      return VP;
    }
    if (VP instanceof Map) {
      let VD = new Map();
      V1.set(VP, VD);
      for (let [VG, Vd] of VP) {
        VD.set(V3(VG), V3(Vd));
      }
      return VD;
    }
    if (VP instanceof Set) {
      let Vn = new Set();
      V1.set(VP, Vn);
      for (let Vp of VP) {
        Vn.add(V3(Vp));
      }
      return Vn;
    }
    if (VP.$i !== undefined && Object.keys(VP).length === 1) {
      return cY[VP.$i];
    }
    if (VP.$c !== undefined && Object.keys(VP).length === 1) {
      let Vo = cT(VP.$c);
      if (!Vo && !cC) {
        cC = VP.$c;
      }
      return Vo;
    }
    if (VP.$or !== undefined && Object.keys(VP).length === 1) {
      let VX = cT(VP.$or);
      if (!VX && !cC) {
        cC = VP.$or;
      }
      if (VX) {
        return c2(VX);
      } else {
        return null;
      }
    }
    if (VP.$meth !== undefined && typeof VP.$meth == "number") {
      if (!VP.$free) {
        return null;
      }
      let VH = VP.$self ? cY[VP.$self.$i] : undefined;
      let VQ = VP.$own ? cY[VP.$own.$i] : null;
      let Vz = remakeMethod(VP.src, VQ, V2, VH);
      if (typeof Vz == "string") {
        cC ||= "method (" + Vz + ")";
        return null;
      } else {
        if (VH) {
          Vz = y(VH, Vz);
        }
        V1.set(VP, Vz);
        return Vz;
      }
    }
    if (VP.$bind !== undefined && VP.c !== undefined) {
      let VN = VP.$bind && VP.$bind.$fn ? findFn(VP.$bind.$fn) : null;
      if (!VN) {
        cC ||= "function " + (VP.$bind && VP.$bind.$fn);
        return null;
      }
      let VJ = y(cY[VP.c.$i], VN);
      V1.set(VP, VJ);
      return VJ;
    }
    if (VP.$new !== undefined && VP.f && Object.keys(VP).length === 2) {
      let Vs = findFn(VP.$new);
      if (!Vs) {
        cC ||= "constructor " + VP.$new;
        return null;
      }
      let Vx;
      try {
        Vx = new Vs();
      } catch {
        Vx = Object.create(Vs.prototype);
      }
      V1.set(VP, Vx);
      for (let Vf of Object.keys(VP.f)) {
        Vx[Vf] = V3(VP.f[Vf]);
      }
      return Vx;
    }
    if (VP.$noop !== undefined && Object.keys(VP).length === 1) {
      return NOOP;
    }
    if (VP.$im !== undefined && Object.keys(VP).length === 1) {
      if (typeof c1.prototype[VP.$im] == "function") {
        return c1.prototype[VP.$im];
      } else {
        return null;
      }
    }
    if (VP.$fn !== undefined && Object.keys(VP).length === 1) {
      let Vw = findFn(VP.$fn);
      if (!Vw && !cC) {
        cC = "function " + VP.$fn;
      }
      return Vw;
    }
    if (VP.$surf !== undefined && Object.keys(VP).length === 1) {
      let Vg = w(VP.$surf[0], VP.$surf[1]);
      if (!VP.$surf[2]) {
        Vg.ctx = null;
      }
      V1.set(VP, Vg);
      return Vg;
    }
    if (VP.$s !== undefined && Object.keys(VP).length === 1) {
      return u[VP.$s] || null;
    }
    if (VP.$f !== undefined && Object.keys(VP).length === 1) {
      return h[VP.$f] || null;
    }
    if (VP.$m !== undefined && Object.keys(VP).length === 1) {
      let Vy = VP.$m;
      let VA = l(Vy.name) || Object.create(t);
      Object.assign(VA, {
        name: Vy.name,
        level: Vy.level,
        paused: Vy.paused,
        ended: Vy.ended,
        _clock: Vy.clock,
        _rate: Vy.rate,
        _vol: Vy.vol
      });
      if (!("el" in VA)) {
        VA.el = null;
      }
      V1.set(VP, VA);
      return VA;
    }
    if (VP.$p !== undefined && Object.keys(VP).length === 1) {
      let VM = Object.create(V0);
      V1.set(VP, VM);
      for (let VW of Object.keys(VP.$p)) {
        VM[VW] = V3(VP.$p[VW]);
      }
      return VM;
    }
    let Vj = {};
    V1.set(VP, Vj);
    for (let VZ of Object.keys(VP)) {
      Vj[VZ] = V3(VP[VZ]);
    }
    return Vj;
  };
  let V4 = cb.insts.map(VP => {
    let VO = {};
    for (let Vj of Object.keys(VP.f)) {
      VO[Vj] = V3(VP.f[Vj]);
    }
    return VO;
  });
  let V5 = new Map();
  for (let VP = 0; VP < cb.insts.length; VP++) {
    let VO = Object.keys(cb.insts[VP].f).filter(Vd => {
      let Vn = cb.insts[VP].f[Vd];
      return Vn && typeof Vn == "object" && Vn.$meth !== undefined && !Vn.$free;
    });
    if (!VO.length) {
      continue;
    }
    let Vj = cY[VP];
    let VB = {};
    let VR = () => {
      let Vd = new Map();
      for (let Vn of Object.keys(Vj)) {
        let Vp = Vj[Vn];
        if (typeof Vp == "function") {
          let Vo = fnv(Function.prototype.toString.call(Vp));
          if (!Vd.has(Vo)) {
            Vd.set(Vo, Vp);
          }
        }
      }
      for (let VX of VO) {
        if (!VB[VX]) {
          let VH = Vd.get(cb.insts[VP].f[VX].$meth);
          if (VH) {
            VB[VX] = VH;
          }
        }
      }
    };
    VR();
    if (VO.every(Vd => VB[Vd])) {
      V5.set(Vj, VB);
      continue;
    }
    try {
      Vj.create();
    } catch {}
    VR();
    if (VO.some(Vd => !VB[Vd])) {
      let Vd = new Map(V1);
      V1.clear();
      for (let Vn of Object.keys(cb.insts[VP].f)) {
        Vj[Vn] = V3(cb.insts[VP].f[Vn]);
      }
      V1.clear();
      for (let [Vp, Vo] of Vd) {
        V1.set(Vp, Vo);
      }
      try {
        Vj.create();
      } catch {}
      VR();
    }
    let VD = Object.values(cb.insts[VP].f).filter(VX => VX && typeof VX == "object" && VX.$i !== undefined && Object.keys(VX).length === 1).map(VX => cY[VX.$i]);
    for (let VX of VO) {
      if (!VB[VX]) {
        let VH = remakeMethod(cb.insts[VP].f[VX].src, Vj, V2, undefined, VD);
        if (typeof VH == "function") {
          VB[VX] = VH;
        } else {
          VB["?" + VX] = VH;
        }
      }
    }
    let VG = VO.find(VQ => !VB[VQ]);
    if (VG) {
      return "method " + (Vj.constructor && Vj.constructor.name || "?") + "." + VG + " not made again" + (VB["?" + VG] ? " (" + VB["?" + VG] + ")" : "");
    }
    for (let VQ of Object.keys(VB)) {
      if (VQ.charCodeAt(0) === 63) {
        delete VB[VQ];
      }
    }
    V5.set(Vj, VB);
  }
  let V6 = {};
  for (let Vz of Object.keys(cb.g)) {
    V6[Vz] = V3(cb.g[Vz]);
  }
  if (cC) {
    return "unknown " + cC;
  }
  for (let VN of Object.keys(M)) {
    if (typeof M[VN] == "function" && !(VN in V6)) {
      V6[VN] = M[VN];
    }
  }
  f({
    list: cb.list.map(VJ => cY[VJ]),
    insts: cb.list.map(VJ => V4[VJ]),
    pending: cb.pending.filter(VJ => VJ >= 0).map(VJ => cY[VJ]),
    frame: cb.frame,
    spawns: cb.spawns,
    self: cb.self ? cY[cb.self.$i] : null,
    g: V6,
    rng: cb.rng,
    held: cb.held,
    pressed: cb.pressed,
    counters: cb.counters,
    paths: null
  });
  let V7 = new Set(cb.list);
  for (let VJ = 0; VJ < cY.length; VJ++) {
    if (!V7.has(VJ)) {
      Object.assign(cY[VJ], V4[VJ]);
    }
  }
  for (let [Vs, Vx] of V5) {
    Object.assign(Vs, Vx);
  }
  for (let Vf of cY) {
    if (Vf.__forcedAtk !== undefined && "myattackchoice" in Vf) {
      let Vw = Vf.__forcedAtk;
      Object.defineProperty(Vf, "myattackchoice", {
        get: () => Vw,
        set() {},
        configurable: true,
        enumerable: true
      });
    }
  }
  if (Number.isFinite(cb.instId)) {
    c1._id = cb.instId;
  }
  if (cb.music && cb.music.name && cb.music.name === b()) {
    let Vg = l(cb.music.name);
    if (Vg) {
      c0(Vg, cb.music.pos);
    }
  }
  return null;
}
c7(applyWorld, "applyWorld");
function __dr_imp(cb) {
  switch (cb) {
    case "./autoplay.js":
      return cS("./autoplay-BN5PY2E6.js", import.meta.url);
    case "./backgrounds.js":
      return cS("./c-LMUAGGOT.js", import.meta.url);
    case "./battle.js":
      return cS("./battle-BT4B2MQU.js", import.meta.url);
    case "./bullets.js":
      return cS("./bullets-OIROYDZK.js", import.meta.url);
    case "./ch2spells.js":
      return cS("./c-RZB5IYPC.js", import.meta.url);
    case "./ch3_rhythm.js":
      return cS("./c-JWDRMKTH.js", import.meta.url);
    case "./controller.js":
      return cS("./c-K2UEFTKG.js", import.meta.url);
    case "./dummy.js":
      return cS("./c-D25OTDJR.js", import.meta.url);
    case "./enemies/index.js":
      return cS("./c-GSXZ7ZAD.js", import.meta.url);
    case "./fightcode.js":
      return cS("./c-YW5GDMJD.js", import.meta.url);
    case "./gameover.js":
      return cS("./c-C73DX24Y.js", import.meta.url);
    case "./generated/ch1_objects.js":
      return cS("./c-JIJZKEBP.js", import.meta.url);
    case "./generated/ch1_scripts.js":
      return cS("./c-ZMRRAIXG.js", import.meta.url);
    case "./generated/ch2_cut.js":
      return cS("./c-UCWYAF7F.js", import.meta.url);
    case "./generated/ch2_objects.js":
      return cS("./c-DG6727IA.js", import.meta.url);
    case "./generated/ch2_scripts.js":
      return cS("./c-WHJ44MEB.js", import.meta.url);
    case "./generated/ch2_shims.js":
      return cS("./c-IAIZGKIB.js", import.meta.url);
    case "./generated/ch2_stubs.js":
      return cS("./c-HK2I5I5O.js", import.meta.url);
    case "./generated/ch3_objects.js":
      return cS("./c-L4BUOJC2.js", import.meta.url);
    case "./generated/ch3_scripts.js":
      return cS("./c-7WTHUZT5.js", import.meta.url);
    case "./generated/ch3_shims.js":
      return cS("./c-EEGGVV7T.js", import.meta.url);
    case "./generated/ch3_stubs.js":
      return cS("./c-VZ7XJPJD.js", import.meta.url);
    case "./generated/ch4_objects.js":
      return cS("./c-OHAPZHQZ.js", import.meta.url);
    case "./generated/ch4_scripts.js":
      return cS("./c-QBK63GC6.js", import.meta.url);
    case "./generated/ch4_shims.js":
      return cS("./c-2HIERSMS.js", import.meta.url);
    case "./generated/ch4_stubs.js":
      return cS("./c-226JUMCZ.js", import.meta.url);
    case "./generated/ch5_objects.js":
      return cS("./c-DMFSAC6H.js", import.meta.url);
    case "./generated/ch5_scripts.js":
      return cS("./c-VOXW6GSU.js", import.meta.url);
    case "./generated/ch5_shims.js":
      return cS("./c-DQ2OU22B.js", import.meta.url);
    case "./generated/ch5_stubs.js":
      return cS("./c-4VFUSDHI.js", import.meta.url);
    case "./generated/cut.js":
      return cS("./c-G7GV27R6.js", import.meta.url);
    case "./generated/runtime.js":
      return cS("./c-5XRXNPLP.js", import.meta.url);
    case "./generated/stubs.js":
      return cS("./c-HNY5HQH6.js", import.meta.url);
    case "./generated/ut_objects.js":
      return cS("./c-DDV4MDJY.js", import.meta.url);
    case "./generated/ut_scripts.js":
      return cS("./c-M4FFNAFW.js", import.meta.url);
    case "./globals.js":
      return cS("./globals-Y7HSE7MN.js", import.meta.url);
    case "./gm.js":
      return cS("./gm-DVHMTG3U.js", import.meta.url);
    case "./heart.js":
      return cS("./heart-3C2QCZDY.js", import.meta.url);
    case "./jevil.js":
      return cS("./c-RCESYQVO.js", import.meta.url);
    case "./silhouette.js":
      return cS("./c-LBPMJTDY.js", import.meta.url);
    case "./snapshot.js":
      return cS("./snapshot-XNSQF3I5.js", import.meta.url);
    case "./text.js":
      return cS("./c-7ALSIY2V.js", import.meta.url);
    case "./ut_runtime.js":
      return cS("./ut_runtime-PHYHNINC.js", import.meta.url);
    default:
      return Promise.reject(new Error("module not in build"));
  }
}
c7(__dr_imp, "__dr_imp");
export { prepareWire as a, classKey as b, encodeWorld as c, deepDump as d, registerClassModules as e, loadClassModules as f, applyWorld as g };
function cS(cb, cm) {
  var cT = new URL(cb, cm).href;
  var cC = globalThis.__drWarm;
  return (cC ? cC(cT) : Promise.resolve()).then(function () {
    return import(cT).catch(function (cY) {
      try {
        cY.reload = true;
        cY.what = "the game code";
      } catch (ca) {}
      throw cY;
    });
  });
}
