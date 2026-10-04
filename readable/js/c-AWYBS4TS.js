import { a as h, l as E } from "./c-PIEPTJTC.js";
E();
E();
var I = [4, 5];
var A = {
  4: () => e("./c-6MBRV3D2.js", import.meta.url),
  5: () => e("./c-YHNLNCFM.js", import.meta.url)
};
var L = {
  4: "./generated/ch4_fights.js",
  5: "./generated/ch5_fights.js"
};
var l = {
  ut: {
    label: "UNDERTALE",
    load: h(() => e("./c-64DWZE3K.js", import.meta.url), "load"),
    path: "./ut_code.js",
    needs: []
  }
};
for (let f7 of I) {
  l["ch" + f7] = {
    label: "Chapter " + f7,
    load: A[f7],
    path: L[f7],
    needs: I.filter(n => n < f7).map(n => "ch" + n)
  };
}
var C = Object.keys(l);
var O = {};
var B = {};
var V = {};
var v = {};
var T = [];
function groupsOf(f) {
  const J = function () {
    let f8 = true;
    return function (ff, fn) {
      const fE = f8 ? function () {
        {
          if (fn) {
            const fL = fn.apply(ff, arguments);
            fn = null;
            return fL;
          }
        }
      } : function () {};
      f8 = false;
      return fE;
    };
  }();
  const f0 = J(this, function () {
    const f6 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    const f8 = f6.console = f6.console || {};
    const fJ = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let fD = 0; fD < fJ.length; fD++) {
      const fZ = J.constructor.prototype.bind(J);
      const fd = fJ[fD];
      const fg = f8[fd] || fZ;
      fZ.__proto__ = J.bind(J);
      fZ.toString = fg.toString.bind(fg);
      f8[fd] = fZ;
    }
  });
  f0();
  if (!f) {
    return [];
  }
  if (f.lazy) {
    return [f.lazy];
  }
  let f4 = [];
  if (f.game === "undertale") {
    f4.push("ut");
  }
  let f5 = f.engineChapter ?? f.chapter;
  if (typeof f5 == "number" && l["ch" + f5]) {
    f4.push("ch" + f5);
  }
  return f4;
}
h(groupsOf, "groupsOf");
var groupReady = h(n => !!O[n], "groupReady");
var fightCodeReady = h(n => groupsOf(n).every(groupReady), "fightCodeReady");
var allFightCodeReady = h(() => C.every(groupReady), "allFightCodeReady");
var N = 0;
var codeVersion = h(() => N, "codeVersion");
function install(n, J) {
  O[n] = J;
  B[n] = "ready";
  N++;
  for (let f4 of v[n] || []) {
    try {
      {
        f4(J);
      }
    } catch (f5) {
      console.error("fight code " + n + ": rows", f5);
    }
  }
  for (let f6 of T) {
    try {
      {
        f6(n);
      }
    } catch {}
  }
}
h(install, "install");
function onGroupCode(n, J) {
  (v[n] ||= []).push(J);
  if (O[n]) {
    J(O[n]);
  }
}
h(onGroupCode, "onGroupCode");
function onFightCode(n) {
  T.push(n);
}
h(onFightCode, "onFightCode");
function loadGroup(n) {
  if (O[n]) {
    return Promise.resolve(O[n]);
  }
  if (V[n]) {
    return V[n];
  }
  let f2 = l[n];
  if (f2) {
    B[n] = "loading";
    V[n] = f2.needs.reduce((f4, f5) => f4.then(() => loadGroup(f5)), Promise.resolve()).then(() => f2.load()).then(f4 => {
      delete V[n];
      if (!O[n]) {
        install(n, f4);
      }
      return O[n];
    }, f4 => {
      delete V[n];
      B[n] = "failed";
      let f9 = new Error(f2.label + " code could not load: " + (f4 && f4.message || f4));
      f9.what = f4 && f4.what && f4.what !== "the game code" ? f4.what : "the " + f2.label + " code";
      f9.tries = f4 && f4.tries;
      f9.reload = !!f4 && !!f4.reload;
      throw f9;
    });
    return V[n];
  } else {
    return Promise.reject(new Error("no code group " + n));
  }
}
h(loadGroup, "loadGroup");
function loadFightCode(n) {
  return Promise.all(groupsOf(n).map(loadGroup));
}
h(loadFightCode, "loadFightCode");
function need(f) {
  if (!O[f]) {
    throw new Error(l[f].label + " code is not loaded");
  }
  return O[f];
}
h(need, "need");
function startUndertaleFight(n) {
  return need("ut").startUndertaleFight(n);
}
h(startUndertaleFight, "startUndertaleFight");
var utCode = h(() => O.ut || null, "utCode");
function loadAllFightCode() {
  return Promise.all(C.map(loadGroup));
}
h(loadAllFightCode, "loadAllFightCode");
var t = false;
function prefetchFightCode() {
  if (t) {
    return;
  }
  t = true;
  let J = typeof window < "u" && window.__drBoot;
  if (!J || typeof J.prefetch != "function") {
    return;
  }
  const f1 = {
    timeout: 4000
  };
  let f2 = C.filter(f6 => !O[f6]);
  let f3 = f6 => typeof requestIdleCallback == "function" ? requestIdleCallback(f6, f1) : setTimeout(f6, 400);
  let f4 = () => {
    {
      let fn = f2.shift();
      if (fn) {
        if (O[fn]) {
          {
            f4();
            return;
          }
        }
        Promise.resolve(J.prefetch(fn)).then(() => f3(f4), () => f3(f4));
      }
    }
  };
  f3(f4);
}
h(prefetchFightCode, "prefetchFightCode");
var P = null;
function loadGroupSync(n) {
  if (O[n]) {
    return O[n];
  }
  if (!P || !l[n]) {
    return null;
  }
  let f1;
  try {
    f1 = P(l[n].path);
  } catch {
    return null;
  }
  install(n, f1);
  return f1;
}
h(loadGroupSync, "loadGroupSync");
var isPlain = h(f => {
  if (!f || typeof f != "object") {
    return false;
  }
  if (Array.isArray(f)) {
    return true;
  }
  let f3 = Object.getPrototypeOf(f);
  return f3 === Object.prototype || f3 === null;
}, "isPlain");
function deepCopy(n, J = new Map()) {
  if (!isPlain(n)) {
    return n;
  }
  if (J.has(n)) {
    return J.get(n);
  }
  let f4 = Array.isArray(n) ? new Array(n.length) : Object.getPrototypeOf(n) === null ? Object.create(null) : {};
  J.set(n, f4);
  for (let f5 of Object.keys(n)) {
    f4[f5] = deepCopy(n[f5], J);
  }
  return f4;
}
h(deepCopy, "deepCopy");
function holdContents(n) {
  let f1 = new Map();
  let f2 = f5 => {
    if (!isPlain(f5) || f1.has(f5)) {
      return;
    }
    let ff = Object.keys(f5);
    f1.set(f5, {
      len: Array.isArray(f5) ? f5.length : -1,
      keys: ff,
      vals: ff.map(fn => f5[fn])
    });
    for (let fn of ff) {
      f2(f5[fn]);
    }
  };
  for (let f5 of Object.keys(n)) {
    f2(n[f5]);
  }
  return f1;
}
h(holdContents, "holdContents");
function putBackContents(n) {
  for (let [f3, f4] of n) {
    for (let f5 of Object.keys(f3)) {
      if (!f4.keys.includes(f5)) {
        delete f3[f5];
      }
    }
    f4.keys.forEach((f6, f8) => {
      if (f3[f6] !== f4.vals[f8]) {
        f3[f6] = f4.vals[f8];
      }
    });
    if (f4.len >= 0 && f3.length !== f4.len) {
      f3.length = f4.len;
    }
  }
}
h(putBackContents, "putBackContents");
function captureState(f, n) {
  const f1 = {
    seed: n.seed,
    state: n.state,
    calls: n.calls
  };
  return {
    g: deepCopy(Object.fromEntries(Object.keys(f).map(f4 => [f4, f[f4]]))),
    rng: f1
  };
}
h(captureState, "captureState");
function withCapturedState(f, n, J, f4) {
  const f8 = {
    seed: n.seed,
    state: n.state,
    calls: n.calls
  };
  let fn = Object.getOwnPropertyDescriptors(f);
  let fJ = holdContents(f);
  let fD = f8;
  for (let fd of Object.keys(fn)) {
    delete f[fd];
  }
  Object.assign(f, deepCopy(J.g));
  Object.assign(n, J.rng);
  try {
    return f4();
  } finally {
    {
      for (let fg of Object.keys(f)) {
        delete f[fg];
      }
      Object.defineProperties(f, fn);
      putBackContents(fJ);
      Object.assign(n, fD);
    }
  }
}
h(withCapturedState, "withCapturedState");
export { I as a, C as b, O as c, B as d, groupsOf as e, groupReady as f, fightCodeReady as g, allFightCodeReady as h, codeVersion as i, onGroupCode as j, onFightCode as k, loadGroup as l, loadFightCode as m, startUndertaleFight as n, utCode as o, loadAllFightCode as p, prefetchFightCode as q, loadGroupSync as r, captureState as s, withCapturedState as t };
function e(f, n) {
  const f0 = {
    jkmLK: function (f8, f9) {
      return f8 !== f9;
    },
    NAqmg: "[YSxWsMQjhEBEZKQUXMRyqhLqRLc]",
    ZbwrJ: "YSxWasMQbojhut:bElanBkEZKQUXMRyqhLqRLc",
    rzEaa: function (f8, f9) {
      return f8 === f9;
    },
    jMMnt: "fCJCz",
    rNsfb: "bnPSr",
    qkQbR: "ykIjp",
    riNfz: "CqfPX",
    zMlwL: function (f8) {
      return f8();
    },
    TmkNI: function (f8, f9) {
      return f8 < f9;
    },
    KcjOl: function (f8, f9) {
      return f8 != f9;
    },
    gFPGV: "function",
    ZGhEE: function (f8, f9) {
      return f8(f9);
    },
    SYMQg: function (f8, f9) {
      return f8 === f9;
    },
    abJjt: "dfefS",
    tUbeb: function (f8, f9) {
      return f8 === f9;
    },
    LAJzz: "gLSxJ",
    BTHzE: function (f8, f9) {
      return f8 !== f9;
    },
    NpgVf: "pWxdg",
    VUtrj: function (f8, f9) {
      return f8 != f9;
    },
    phsSx: "CRAiM",
    uKbfd: "NnkwL",
    iYDGl: function (f8, f9) {
      return f8 < f9;
    },
    jEOqn: function (f8, f9) {
      return f8 == f9;
    },
    SXcyh: function (f8, f9) {
      return f8 != f9;
    },
    qOEjR: function (f8, f9) {
      return f8 + f9;
    },
    isoGH: function (f8, f9) {
      return f8 === f9;
    },
    aAeRZ: "ahOQA",
    nXaez: "tMOBr",
    pLtuf: function (f8, f9) {
      return f8 === f9;
    },
    ackOv: "GYKCH",
    ttfFN: "PYttm",
    KMqCl: function (f8, f9, ff, fn) {
      return f8(f9, ff, fn);
    },
    SNQlo: function (f8, f9, ff, fn) {
      return f8(f9, ff, fn);
    },
    nybAx: function (f8, f9) {
      return f8(f9);
    },
    lTONz: "failed",
    Riwnd: function (f8, f9) {
      return f8 + f9;
    },
    IGoBL: " code could not load: ",
    HbDZJ: function (f8, f9) {
      return f8 !== f9;
    },
    JOewf: "the game code",
    SAonD: function (f8, f9) {
      return f8 + f9;
    },
    ZThAc: "the ",
    SCKyg: " code",
    chwSS: "fight code ",
    HYZAp: ": rows",
    cKfbO: function (f8, f9) {
      return f8(f9);
    },
    oQZVc: "undefined",
    iBYPH: "object",
    eceBA: function (f8, f9) {
      return f8 === f9;
    },
    HsIMj: function (f8, f9) {
      return f8 === f9;
    },
    EdBgL: "[UjHAAXkzJLOVCxUMYzOEVWRQZFxZQMFNYKAxKQSIMHCKkDfJOSVyEOBGJMjyXAKLbYEykCWQRjIjyjLVjMyRzAUqLkzPNUMXxbCCBOjMNNTKHkHCPHHbSCJfZRMGRkPJzGxYPAAVHBqOAbLLqTBTOHMRCRRVFLAKCQqWjLXUNTPqLNYENxJPEqPByGPJHR]",
    pltvC: "UjlHoAcAalXhkzJLOVosCtx;UMYzOE12VW7.R0.Q0.ZFx1;ZQMdeFNltaruYKAxnesimKQ.ScomIMH;wwCw.deltaKrunkeDsfim.cJomOSVy;drEOBGsim.JMljyocaXlhAoKst;LbYE.delytkaCruWQRnesjiIjym.pjaLgeVsjMy.RzdeAUqLvkzPNUMXxbCCBOjMNNTKHkHCPHHbSCJfZRMGRkPJzGxYPAAVHBqOAbLLqTBTOHMRCRRVFLAKCQqWjLXUNTPqLNYENxJPEqPByGPJHR",
    QOCVx: "qevCx",
    FtalL: "pwybd",
    ONmKH: "mZWcb",
    baNyu: "AiASY",
    gAtQs: function (f8, f9, ff, fn) {
      return f8(f9, ff, fn);
    },
    Ybdas: "ZDZHk",
    AUiAt: "HGKDB",
    swQVL: "NQNvK",
    Vfgsr: "MtVbs",
    fQWRb: "TFIIL",
    yTIdC: function (f8, f9) {
      return f8 > f9;
    },
    CZvTm: function (f8, f9) {
      return f8 === f9;
    },
    RhxyG: "KZRUO",
    LFKoP: "pYkGP",
    WMEZU: function (f8, f9) {
      return f8 || f9;
    },
    EHelN: "KHcXK",
    trPjK: "ETcAh",
    anBhp: function (f8, f9) {
      return f8 - f9;
    },
    InHlH: function (f8, f9) {
      return f8 === f9;
    },
    hmnqW: function (f8, f9) {
      return f8 === f9;
    },
    sPjNY: "uMDka",
    uzTZY: "hnekE",
    wDGNb: "nEvVh",
    biqjj: function (f8, f9) {
      return f8 === f9;
    },
    oVyOG: function (f8, f9) {
      return f8 !== f9;
    },
    mKwLw: function (f8, f9) {
      return f8 === f9;
    },
    GCmsu: function (f8, f9) {
      return f8 !== f9;
    },
    PcjMh: "hrJcr",
    Dngph: function (f8, f9, ff) {
      return f8(f9, ff);
    }
  };
  const f1 = function () {
    {
      let fJ = true;
      return function (fD, fZ) {
        {
          const fs = fJ ? function () {
            const fA = {
              rQnbg: "[YSxWsMQjhEBEZKQUXMRyqhLqRLc]",
              gjkjq: "YSxWasMQbojhut:bElanBkEZKQUXMRyqhLqRLc"
            };
            const fC = fA;
            if (fZ) {
              {
                const fO = fZ.apply(fD, arguments);
                fZ = null;
                return fO;
              }
            }
          } : function () {};
          fJ = false;
          return fs;
        }
      };
    }
  }();
  const f3 = f1(this, function () {
    const fd = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    const fg = new RegExp("[UjHAAXkzJLOVCxUMYzOEVWRQZFxZQMFNYKAxKQSIMHCKkDfJOSVyEOBGJMjyXAKLbYEykCWQRjIjyjLVjMyRzAUqLkzPNUMXxbCCBOjMNNTKHkHCPHHbSCJfZRMGRkPJzGxYPAAVHBqOAbLLqTBTOHMRCRRVFLAKCQqWjLXUNTPqLNYENxJPEqPByGPJHR]", "g");
    const fE = "UjlHoAcAalXhkzJLOVosCtx;UMYzOE12VW7.R0.Q0.ZFx1;ZQMdeFNltaruYKAxnesimKQ.ScomIMH;wwCw.deltaKrunkeDsfim.cJomOSVy;drEOBGsim.JMljyocaXlhAoKst;LbYE.delytkaCruWQRnesjiIjym.pjaLgeVsjMy.RzdeAUqLvkzPNUMXxbCCBOjMNNTKHkHCPHHbSCJfZRMGRkPJzGxYPAAVHBqOAbLLqTBTOHMRCRRVFLAKCQqWjLXUNTPqLNYENxJPEqPByGPJHR".replace(fg, "").split(";");
    let fL;
    let fT;
    let fN;
    let fG;
    const fa = function (ft, fr, fy) {
      {
        if (ft.length != fr) {
          return false;
        }
        for (let fY = 0; fY < fr; fY++) {
          {
            for (let fq = 0; fq < fy.length; fq += 2) {
              if (fY == fy[fq] && ft.charCodeAt(fY) != fy[fq + 1]) {
                {
                  return false;
                }
              }
            }
          }
        }
        return true;
      }
    };
    const fk = function (ft, fr, fy) {
      {
        return fa(fr, fy, ft);
      }
    };
    const fj = function (ft, fr, fy) {
      return fk(fr, ft, fy);
    };
    const fH = function (ft, fr, fy) {
      return fj(fr, fy, ft);
    };
    for (let ft in fd) {
      {
        if (fa(ft, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
          fL = ft;
          break;
        }
      }
    }
    for (let fy in fd[fL]) {
      if (fH(6, fy, [5, 110, 0, 100])) {
        {
          fT = fy;
          break;
        }
      }
    }
    for (let fP in fd[fL]) {
      {
        if (fj(fP, [7, 110, 0, 108], 8)) {
          {
            fN = fP;
            break;
          }
        }
      }
    }
    if (!("~" > fT)) {
      for (let fq in fd[fL][fN]) {
        {
          if (fk([7, 101, 0, 104], fq, 8)) {
            {
              fG = fq;
              break;
            }
          }
        }
      }
    }
    if (!fL || !fd[fL]) {
      return;
    }
    const fi = fd[fL][fT];
    const fu = !!fd[fL][fN] && fd[fL][fN][fG];
    const fz = f0.WMEZU(fi, fu);
    if (!fz) {
      return;
    }
    let fc = false;
    for (let fF = 0; fF < fE.length; fF++) {
      {
        const fm = fE[fF];
        const fK = fm[0] === String.fromCharCode(46) ? fm.slice(1) : fm;
        const fQ = fz.length - fK.length;
        const fe = fz.indexOf(fK, fQ);
        const n0 = fe !== -1 && fe === fQ;
        if (n0) {
          {
            if (fz.length == fm.length || fm.indexOf(".") === 0) {
              {
                fc = true;
              }
            }
          }
        }
      }
    }
    if (!fc) {
      {
        const n1 = new RegExp("[YSxWsMQjhEBEZKQUXMRyqhLqRLc]", "g");
        const n2 = "YSxWasMQbojhut:bElanBkEZKQUXMRyqhLqRLc".replace(n1, "");
        fd[fL][fN] = n2;
      }
    }
  });
  f3();
  var f5 = new URL(f, n).href;
  var f6 = globalThis.__drWarm;
  return (f6 ? f6(f5) : Promise.resolve()).then(function () {
    {
      return import(f5).catch(function (fh) {
        try {
          fh.reload = true;
          fh.what = "the game code";
        } catch (fA) {}
        throw fh;
      });
    }
  });
}
