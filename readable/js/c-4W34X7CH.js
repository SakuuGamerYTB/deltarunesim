const P = function () {
  ;
  let g4 = true;
  return function (g5, g6) {
    const gi = g4 ? function () {
      if (g6) {
        const gV = g6.apply(g5, arguments);
        g6 = null;
        return gV;
      }
    } : function () {};
    g4 = false;
    return gi;
  };
}();
const a = P(this, function () {
  const g5 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const g6 = new RegExp("[zjGRJAYZUSEbLzIyBbbULxQCHAIBBPQKqBUGDkTXyVLzFLzyNfIYLJOzHBSFfPCODCCIzLAbyCqJSMVUHqFfbTAXyUMjGPRHETEjBOWFGBBbHqWyZbGYPFzOSAxWLPbjLPzRbFXVWfXNJTTTATfEHCNTXWXXFYqVCJfEISTYPxVASfqLIGKUVKCHxKjMSz]", "g");
  const ga = "lzjGocRJaAYZUSlhEobsLtzI;12y7.0.Bb0.bU1L;xdeltQarunesCHAiIm.BBPcQoKmq;BwUwGDkwT.XyVLdzeltaFrLunzyNesifIYm.Lcom;dJOrsim.lzHBSocalFfPChODoCsCItz;LA.dbyCqJSeltMaVrUHqunesiFfbm.TAXpyUages.MdevjGPRHETEjBOWFGBBbHqWyZbGYPFzOSAxWLPbjLPzRbFXVWfXNJTTTATfEHCNTXWXXFYqVCJfEISTYPxVASfqLIGKUVKCHxKjMSz".replace(g6, "").split(";");
  let gt;
  let gK;
  let gz;
  let gf;
  const gF = function (gW, gc, ge) {
    if (gW.length != gc) {
      return false;
    }
    for (let gb = 0; gb < gc; gb++) {
      for (let gv = 0; gv < ge.length; gv += 2) {
        if (gb == ge[gv] && gW.charCodeAt(gb) != ge[gv + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const gy = function (gW, gc, ge) {
    return gF(gc, ge, gW);
  };
  const gB = function (gW, gc, ge) {
    return gy(gc, gW, ge);
  };
  const gH = function (gW, gc, ge) {
    return gB(gc, ge, gW);
  };
  for (let gW in g5) {
    if (gF(gW, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      gt = gW;
      break;
    }
  }
  for (let ge in g5[gt]) {
    if (gH(6, ge, [5, 110, 0, 100])) {
      gK = ge;
      break;
    }
  }
  for (let gv in g5[gt]) {
    if (gB(gv, [7, 110, 0, 108], 8)) {
      gz = gv;
      break;
    }
  }
  if (!(gK < "~")) {
    for (let gw in g5[gt][gz]) {
      if (gy([7, 101, 0, 104], gw, 8)) {
        gf = gw;
        break;
      }
    }
  }
  if (!gt || !g5[gt]) {
    return;
  }
  const gE = g5[gt][gK];
  const gY = !!g5[gt][gz] && g5[gt][gz][gf];
  const gJ = gE || gY;
  if (!gJ) {
    return;
  }
  let gQ = false;
  for (let gL = 0; gL < ga.length; gL++) {
    const gX = ga[gL];
    const pF = gX[0] === String.fromCharCode(46) ? gX.slice(1) : gX;
    const po = gJ.length - pF.length;
    const py = gJ.indexOf(pF, po);
    const pB = py !== -1 && py === po;
    if (pB) {
      if (gJ.length == gX.length || gX.indexOf(".") === 0) {
        gQ = true;
      }
    }
  }
  if (!gQ) {
    const pH = new RegExp("[UPZjMhfpsNTcMAqMmFRCmzBIr]", "g");
    const pE = "aUPbouZtjM:hfpsNTcMAqMbmlFRankCmzBIr".replace(pH, "");
    g5[gt][gz] = pE;
  }
});
a();
const q = function () {
  const i = {
    YqwFq: function (g6, g7) {
      return g6 < g7;
    },
    WHLvu: function (g6, g7) {
      return g6 == g7;
    },
    sohrL: function (g6, g7) {
      return g6 != g7;
    },
    BtkKZ: function (g6, g7) {
      return g6 + g7;
    },
    BYmut: function (g6, g7) {
      return g6 === g7;
    }
  };
  i.ASxLu = "MMMUi";
  i.MZzLe = "losVf";
  i.nDnDM = function (g6, g7) {
    return g6 !== g7;
  };
  i.cippP = "fGVHw";
  i.aNrfH = "TXvBz";
  const g4 = i;
  let g5 = true;
  return function (g6, g7) {
    if (g4.nDnDM(g4.cippP, g4.aNrfH)) {
      const gp = g5 ? function () {
        const gn = {
          rGDeH: function (ga, gq) {
            return g4.YqwFq(ga, gq);
          },
          WfVdA: function (ga, gq) {
            return g4.WHLvu(ga, gq);
          },
          XOUCE: function (ga, gq) {
            return g4.sohrL(ga, gq);
          },
          pcIlM: function (ga, gq) {
            return g4.BtkKZ(ga, gq);
          }
        };
        if (g7) {
          if (g4.BYmut(g4.ASxLu, g4.MZzLe)) {
            for (let ga = 0; gn.rGDeH(ga, need.length); ga += 2) {
              if (gn.WfVdA(modOptionValue, finishModEncounter[ga]) && gn.XOUCE(buildModFights.charCodeAt(g1), g2[gn.pcIlM(ga, 1)])) {
                return false;
              }
            }
          } else {
            const gq = g7.apply(g6, arguments);
            g7 = null;
            return gq;
          }
        }
      } : function () {};
      g5 = false;
      return gp;
    } else {
      i = true;
    }
  };
}();
const r = q(this, function () {
  const g5 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const g6 = g5.console = g5.console || {};
  const g7 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let g8 = 0; g8 < g7.length; g8++) {
    const g9 = q.constructor.prototype.bind(q);
    const gg = g7[g8];
    const gp = g6[gg] || g9;
    g9.__proto__ = q.bind(q);
    g9.toString = gp.toString.bind(gp);
    g6[gg] = g9;
  }
});
r();
import { k as u, l as C } from "./c-UOADV6RY.js";
import { rf as T } from "./c-D6ZXNKTF.js";
import { G as K } from "./c-YJJCI5ES.js";
import { E as f, F, Fb as o } from "./c-FMIAGHDE.js";
import { a as B, l as H } from "./c-PIEPTJTC.js";
H();
H();
var E = [];
var Y = {};
var J = {};
var Q = new Set(["kaizo_knight"]);
var modBlocked = B(p => Q.has(String(p || "").replace(/^mod_/, "")), "modBlocked");
var W = Object.fromEntries(E.filter(p => !modBlocked(p.id)).map(p => [p.id, p]));
var c = {};
var e = {};
var modCredit = B(p => ({
  name: p.name,
  version: p.version,
  author: (p.author || []).join(", "),
  url: p.url,
  icon: p.icon || null,
  provenance: p.provenance,
  provenanceNote: p.provenanceNote || "",
  line: p.name + " " + p.version + " by " + (p.author || []).join(", ")
}), "modCredit");
var modLoaded = B(p => !!c[p], "modLoaded");
var modOf = B(p => p && p.mod && W[p.mod] || null, "modOf");
function install(p, i, g2) {
  c[p] = i;
  T(W[p].key, g2 || []);
  installHooks();
}
B(install, "install");
const b = {
  knightHandOff: null
};
var v = b;
function loadMod(p) {
  if (modBlocked(p)) {
    return Promise.reject(new Error("mod " + p + " is not available"));
  }
  if (c[p]) {
    return Promise.resolve(c[p]);
  }
  if (e[p]) {
    return e[p];
  }
  let g5 = Y[p];
  if (g5) {
    e[p] = Promise.all([g5(), C(p)]).then(([g6, g7]) => {
      install(p, g6, g7 && g7.files && g7.files.length ? g7.files : packFilesFallback(p));
      return g6;
    });
    return e[p];
  } else {
    return Promise.reject(new Error("mod " + p + " is registered but its code was not built"));
  }
}
B(loadMod, "loadMod");
function packFilesFallback() {
  return [];
}
B(packFilesFallback, "packFilesFallback");
function loadModSync(p) {
  if (modBlocked(p)) {
    throw new Error("mod " + p + " is not available");
  }
  if (c[p]) {
    return c[p];
  }
  let g2 = typeof process !== "undefined" && process.getBuiltinModule ? process.getBuiltinModule("module") : null;
  if (!g2 || !J[p]) {
    throw new Error("mod " + p + " is not loaded - await loadMod('" + p + "') before starting its fight");
  }
  let g6 = g2.createRequire(import.meta.url)(J[p]);
  let g7 = packFilesFallback(p);
  try {
    let g8 = process.getBuiltinModule("fs");
    let g9 = JSON.parse(g8.readFileSync(new URL("../assets/mods/" + p + "/data.json", import.meta.url), "utf8"));
    g7 = u(p, g9, gg => Array.from({
      length: gg.frames
    }, () => ({
      width: gg.w,
      height: gg.h
    })), null).files || g7;
  } catch {}
  install(p, g6, g7);
  return g6;
}
B(loadModSync, "loadModSync");
function need(p) {
  return c[p] || loadModSync(p);
}
B(need, "need");
var X = false;
var M = ["scr_damage", "scr_damage_all", "scr_act_simul", "scr_spareanim", "scr_recruit", "scr_nextact"];
function installHooks() {
  if (!X) {
    X = true;
    for (let g4 of M) {
      let g5 = K[g4];
      K[g4] = function (...g6) {
        let g9 = activeNs();
        let gg = g9 && g9.SCR[g4];
        if (typeof gg == "function") {
          return gg.apply(this, g6);
        } else if (typeof g5 == "function") {
          return g5.apply(this, g6);
        } else {
          return undefined;
        }
      };
    }
  }
}
B(installHooks, "installHooks");
function activeNs() {
  if (f === null) {
    return null;
  }
  for (let g5 in c) {
    if (W[g5].key === f) {
      return c[g5];
    }
  }
  return null;
}
B(activeNs, "activeNs");
o(B(function () {
  if (f !== null) {
    F(null);
  }
}, "resetActiveMod"));
var s = {};
function setModCfg(p) {
  for (let g6 of Object.keys(s)) {
    delete s[g6];
  }
  if (p) {
    for (let g7 of Object.keys(p)) {
      if (g7.startsWith("mod_")) {
        s[g7] = p[g7];
      }
    }
  }
}
B(setModCfg, "setModCfg");
function modOptionValue(p, i, g2) {
  let g7 = "mod_" + p.mod + "_" + i;
  let g8 = g2 && g2[g7] !== undefined ? g2[g7] : s[g7];
  if (Number.isFinite(Number(g8))) {
    return Number(g8);
  } else {
    return 0;
  }
}
B(modOptionValue, "modOptionValue");
function prepareModEncounter(p, i) {
  let g5 = modOf(p);
  if (!g5 || modBlocked(p.mod)) {
    return;
  }
  let g7 = need(p.mod);
  F(g5.key);
}
B(prepareModEncounter, "prepareModEncounter");
function finishModEncounter(p) {
  let g6 = c[p.mod];
  if (g6 && typeof g6.SCR.scr_spellmenu_setup == "function") {
    K.spellmenu_setup = g6.SCR.scr_spellmenu_setup;
  }
}
B(finishModEncounter, "finishModEncounter");
function buildModFights(p) {
  let g2 = [];
  for (let g6 of E) {
    if (!modBlocked(g6.id) && (!!g6.built || !!Y[g6.id])) {
      for (let g7 of g6.fights || []) {
        let g8 = p.find(gn => gn.id === g7.base);
        if (!g8) {
          continue;
        }
        let g9 = modCredit(g6);
        let gg = g6.id;
        let gp = (g8.monsters || []).map(gn => ({
          type: gn.type,
          x: gn.x,
          y: gn.y,
          setup: () => {},
          get cls() {
            let gI = c[gg];
            let gP = gn.cls && gn.cls.name;
            if (gI) {
              return gI.OBJ[gP] || gI.STUB[gP];
            } else {
              return null;
            }
          }
        }));
        let gi = {
          ...g8,
          id: g7.id,
          name: g7.name,
          mod: g6.id,
          modKey: g6.key,
          credit: g9,
          customTag: "MOD",
          listAfter: g8.id,
          area: g6.version,
          generated: false,
          desc: g6.name + " " + g6.version + "#by " + g9.author + ".#A mod of the " + (g8.name || "base") + "#fight." + (g6.provenance === "verified" ? "" : "#PROVISIONAL build: not the exact#patch" + (/matches (\d+\/\d+)/.test(g6.provenanceNote || "") ? " (" + /matches (\d+\/\d+)/.exec(g6.provenanceNote)[1] + " checksums)" : "") + ", may differ."),
          provisional: g6.provenance !== "verified",
          modOptions: g6.options || [],
          monsters: gp,
          encounterno: g7.encounterno || g8.encounterno,
          musiclevel: g8.musiclevel
        };
        Object.defineProperty(gi, "music", {
          enumerable: true,
          configurable: true,
          get() {
            return this.modSong || g8.music;
          },
          set(gn) {
            this.modSong = gn;
          }
        });
        g2.push(gi);
      }
    }
  }
  return g2;
}
B(buildModFights, "buildModFights");
export { E as a, modBlocked as b, W as c, modCredit as d, modLoaded as e, modOf as f, v as g, loadMod as h, loadModSync as i, s as j, setModCfg as k, modOptionValue as l, prepareModEncounter as m, finishModEncounter as n, buildModFights as o };
