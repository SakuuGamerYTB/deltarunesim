const L = function () {
  const iU = function () {
    ;
    let ia = true;
    return function (iE, iT) {
      const iq = ia ? function () {
        if (iT) {
          const iv = iT.apply(iE, arguments);
          iT = null;
          return iv;
        }
      } : function () {};
      ia = false;
      return iq;
    };
  }();
  let iS = true;
  return function (ia, iE) {
    const iT = iS ? function () {
      if (iE) {
        const iv = iE.apply(ia, arguments);
        iE = null;
        return iv;
      }
    } : function () {};
    iS = false;
    return iT;
  };
}();
const s = L(this, function () {
  const c = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const iU = new RegExp("[FHWOXYzLGUKbUDPPLjjCXKFSFVzNOOzUzxxzbxDjYRWxPDYOVMRQGZEHUNjGWXXIZEyzXNKQDOCUGkTfSLNRQWHAJBGZSRkYHWzZWOCHJNZyRGSTzjTbXPARHPLTEJbLYYJBOKLxjNyCURSqZJGkEVfzIOSHRIBNbNUVDCPHzXFXEQY]", "g");
  const iV = "locaFlHWOXhYozLGUKbst;12U7D.0.0P.P1;LdjeljCXKtFSaFrVzNunOesiOzUzxmx.czboxm;DjwwwYR.dWxePlDYOtVaMRruQGnZesEHUNjiGmWXXIZ.EcyzoXm;NdrKsiQm.DlOCUGkocTfSaLlhostN;R.QWHdAJeltBGaruZSRkYHnWzeZsiWOCHJm.NZpyagesRG.STzdjTbXevPARHPLTEJbLYYJBOKLxjNyCURSqZJGkEVfzIOSHRIBNbNUVDCPHzXFXEQY".replace(iU, "").split(";");
  let iS;
  let ia;
  let iE;
  let iq;
  const iv = function (c1, c2, c3) {
    if (c1.length != c2) {
      return false;
    }
    for (let c7 = 0; c7 < c2; c7++) {
      for (let c8 = 0; c8 < c3.length; c8 += 2) {
        if (c7 == c3[c8] && c1.charCodeAt(c7) != c3[c8 + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const iD = function (c1, c2, c3) {
    return iv(c2, c3, c1);
  };
  const ij = function (c1, c2, c3) {
    return iD(c2, c1, c3);
  };
  const ie = function (c1, c2, c3) {
    return ij(c2, c3, c1);
  };
  for (let c1 in c) {
    if (iv(c1, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      iS = c1;
      break;
    }
  }
  for (let c2 in c[iS]) {
    if (ie(6, c2, [5, 110, 0, 100])) {
      ia = c2;
      break;
    }
  }
  for (let c3 in c[iS]) {
    if (ij(c3, [7, 110, 0, 108], 8)) {
      iE = c3;
      break;
    }
  }
  if (!(ia < "~")) {
    for (let c4 in c[iS][iE]) {
      if (iD([7, 101, 0, 104], c4, 8)) {
        iq = c4;
        break;
      }
    }
  }
  if (!iS || !c[iS]) {
    return;
  }
  const iu = c[iS][ia];
  const iz = !!c[iS][iE] && c[iS][iE][iq];
  const ir = iu || iz;
  if (!ir) {
    return;
  }
  let c0 = false;
  for (let c7 = 0; c7 < iV.length; c7++) {
    const c8 = iV[c7];
    const c9 = c8[0] === String.fromCharCode(46) ? c8.slice(1) : c8;
    const ci = ir.length - c9.length;
    const cc = ir.indexOf(c9, ci);
    const cO = cc !== -1 && cc === ci;
    if (cO) {
      if (ir.length == c8.length || c8.indexOf(".") === 0) {
        c0 = true;
      }
    }
  }
  if (!c0) {
    const cp = new RegExp("[hdgfrQIzOOGPYAVYcPhGrU]", "g");
    const cW = "hdaboutg:bflrQIaznkOOGPYAVYcPhGrU".replace(cp, "");
    c[iS][iE] = cW;
  }
});
s();
const W = function () {
  const c = {
    SNAHW: function (iE, iT) {
      return iE !== iT;
    }
  };
  c.yqKvr = "KIlKm";
  c.iCaSJ = "ukIQZ";
  c.oWXqd = function (iE, iT) {
    return iE === iT;
  };
  c.dlZgp = "XRjwD";
  const iV = c;
  let iS = true;
  return function (iE, iT) {
    const iq = {
      HKwQc: function (iy, iu) {
        return iV.SNAHW(iy, iu);
      },
      OZTkp: iV.yqKvr,
      ijnwb: iV.iCaSJ,
      UoNJx: function (iy, iu) {
        return iV.oWXqd(iy, iu);
      },
      DDYxV: iV.dlZgp
    };
    const iv = iS ? function () {
      if (iq.HKwQc(iq.OZTkp, iq.ijnwb)) {
        if (iT) {
          if (iq.UoNJx(iq.DDYxV, iq.DDYxV)) {
            const ir = iT.apply(iE, arguments);
            iT = null;
            return ir;
          } else {
            c();
            return;
          }
        }
      } else {
        c.__ut = true;
      }
    } : function () {};
    iS = false;
    return iv;
  };
}();
const X = W(this, function () {
  const ia = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const iE = ia.console = ia.console || {};
  const iT = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let iq = 0; iq < iT.length; iq++) {
    const iv = W.constructor.prototype.bind(W);
    const iD = iT[iq];
    const ij = iE[iD] || iv;
    iv.__proto__ = W.bind(W);
    iv.toString = ij.toString.bind(ij);
    iE[iD] = iv;
  }
});
X();
import { a as H, b as t, c as UT_DATA, d as buildUndertaleFights, f as startUndertaleFight } from "./c-H2IJMUFG.js";
import { Kb as UTSCR, Ma as F, Qm as UTOBJ, ae as J, hb as scr_battlegroup, ma as A, w as G } from "./c-OAN44ZPE.js";
import "./c-K45EDNDM.js";
import { va as o } from "./c-74XQOPMX.js";
import { D as x, F as l, p as a } from "./c-SEM2A64W.js";
import "./c-D6ZXNKTF.js";
import { h as v } from "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import { f as D, n as e } from "./c-EUQCKUJR.js";
import { b as y } from "./c-YJJCI5ES.js";
import { Eb as u, Fb as r, Za as n, _a as P, fb as i0, qb as i1 } from "./c-FMIAGHDE.js";
import { a as i2, e as i3, l as i4 } from "./c-PIEPTJTC.js";
i4();
i4();
var i5 = false;
function ensureText() {
  if (!i5) {
    for (let i of t) {
      if (!Array.isArray(y[i])) {
        y[i] = [];
      }
    }
    y.language = "en";
    F.call({});
    i5 = true;
  }
}
i2(ensureText, "ensureText");
var i7 = null;
function ensureUtFlags() {
  if (i7) {
    return i7;
  }
  let i = new Map(Object.entries(y));
  for (let iU of t) {
    y[iU] = [];
  }
  let c = [];
  try {
    G.call({});
    c = Array.isArray(y.flag) ? y.flag.slice() : [];
  } catch (iV) {
    console.warn("undertale flag snapshot failed; ACT lists that branch on a flag will read DELTARUNE state", iV && iV.message);
  }
  for (let iS of Object.keys(y)) {
    if (!i.has(iS)) {
      delete y[iS];
    }
  }
  for (let [ia, iE] of i) {
    y[ia] = iE;
  }
  i7 = c;
  return i7;
}
i2(ensureUtFlags, "ensureUtFlags");
function utActTable(iU) {
  ensureText();
  let iV = y.msg;
  let iS = y.choices;
  let ia = y.flag;
  y.flag = ensureUtFlags().slice();
  y.msg = new Array(20).fill(" ");
  y.choices = [0, 0, 0, 0, 0, 0];
  let iE = "";
  let iT = [0, 0, 0, 0, 0, 0];
  let iq = null;
  try {
    A.call({}, 1000 + iU);
    iE = typeof y.msg[0] == "string" ? y.msg[0] : "";
    iT = [0, 1, 2, 3, 4, 5].map(iD => y.choices[iD] ? 1 : 0);
  } catch (iD) {
    iq = String(iD && iD.message).slice(0, 100);
  }
  y.msg = iV;
  y.choices = iS;
  y.flag = ia;
  let iv = new Array(6).fill(null);
  iE.split("&").forEach((ij, ie) => {
    if (!(ie > 2)) {
      ij.split("*").slice(1).forEach((iy, iu) => {
        if (iu < 2) {
          iv[iu * 3 + ie] = iy.trim();
        }
      });
    }
  });
  return {
    canact: iT,
    name: iv,
    raw: iE,
    threw: iq,
    mapped: iT.some(ij => ij)
  };
}
i2(utActTable, "utActTable");
var ii = new Map();
function utAdapter(i) {
  var c;
  if (ii.has(i)) {
    return ii.get(i);
  }
  let iU = UTOBJ[i];
  if (!iU) {
    ii.set(i, null);
    return null;
  }
  c = class extends iU {
    constructor() {
      super();
      Object.assign(this, {
        myself: 0,
        state: 0,
        hurttimer: 0,
        hurtamt: 0,
        shakex: 0,
        candodge: 0,
        dodgetimer: 0,
        acting: 0,
        actcon: 0,
        actingsus: 0,
        actingral: 0,
        actingnoe: 0,
        talked: 0,
        attacked: 0,
        flash: 0,
        fsiner: 0,
        becomeflash: 0,
        mytarget: 3,
        endcon: 0,
        sparecon: 0,
        pacifycon: 0,
        _utact: -1,
        _utactcon: 0,
        _utboxmade: 0,
        _utsaid: null
      });
    }
    create() {
      let iS = Array.isArray(y.monster) ? y.monster.slice() : [0, 0, 0];
      y.monster = [0, 0, 0];
      for (let ia = 0; ia < 3; ia++) {
        if (y.monsterinstance && y.monsterinstance[ia]) {
          y.monster[ia] = 1;
        }
      }
      try {
        super.create();
      } finally {
        let iE = this.myself;
        y.monster = iS.slice();
        if (iE >= 0 && iE < 3) {
          y.monster[iE] = 1;
        }
      }
    }
    userEvent(iS) {
      if (iS === 12) {
        y.monsterx[this.myself] = this.x + (this.sprite_width || 40) / 2;
        y.monstery[this.myself] = this.y + (this.sprite_height || 40) / 2;
        return;
      }
      if (iS === 10) {
        this.spared();
        return;
      }
      if (typeof super.userEvent == "function") {
        super.userEvent(iS);
      }
    }
    spared() {
      a.prototype.spared.call(this);
    }
    scr_monsterdefeat() {
      a.prototype.scr_monsterdefeat.call(this);
    }
    step() {
      utStepBridge(this, () => {
        if (typeof super.step == "function") {
          super.step();
        }
      });
    }
  };
  c;
  i3(c, "kinds", new Set([...iU.kinds, ...a.kinds, "ut_dr_adapter"]));
  i3(c, "kindName", i);
  i3(c, "defaultDepth", iU.defaultDepth);
  let iV = c;
  try {
    Object.defineProperty(iV, "name", {
      value: i,
      configurable: true
    });
  } catch {}
  ii.set(i, iV);
  return iV;
}
i2(utAdapter, "utAdapter");
function utStepBridge(iU, iV) {
  let iS = iU.myself;
  if (iS === firstLiveSlot()) {
    armBridges();
    utSoulBridge();
    utBorderBridge();
  }
  if (y.monster[iS] !== 1) {
    iV();
    return;
  }
  let ia = false;
  if (iU.acting > 0 && iU._utact !== iU.acting && y.myfight === 3) {
    iU._utact = iU.acting;
    let ie = y.utActSlot && y.utActSlot[iS];
    iU.whatiheard = ie && ie[iU.acting - 1] !== undefined ? ie[iU.acting - 1] : iU.acting - 1;
    y.heard = 0;
    ia = true;
  }
  let iE = y.myfight;
  let iT = y.mnfight;
  let iq = y.msg;
  let iv = 64;
  y.msg = new Array(iv).fill("%%%");
  if (ia) {
    y.myfight = 2;
  }
  iV();
  let iD = [];
  for (let iy = 0; iy < iv; iy++) {
    let iu = y.msg[iy];
    if (typeof iu != "string" || iu === "%%%" || iu === " " || iu === "") {
      break;
    }
    iD.push(iu);
  }
  y.myfight = iE;
  y.msg = iq;
  if (ia) {
    y.mnfight = iT;
  }
  let ij = iD.join("");
  if (iD.length && ij !== iU._utsaid) {
    iU._utsaid = ij;
    i0.with("OBJ_WRITER", iz => {
      if (!iz.placeholder) {
        iz.instance_destroy();
      }
    });
    i0.with("OBJ_INSTAWRITER", iz => {
      if (!iz.placeholder) {
        iz.instance_destroy();
      }
    });
    if (!i0.exists("obj_battleblcon") && !i0.exists("obj_writer")) {
      y.typer = 50;
      y.msg = new Array(100).fill(" ");
      iD.forEach((iz, ir) => {
        y.msg[ir] = utTextToDeltarune(iz);
      });
      v(iU.x - 160, iU.y, 3);
    }
  }
  if (!iD.length) {
    iU._utsaid = null;
  }
  if (ia) {
    iU._utactcon = 1;
  }
  if (iU._utactcon === 1 && !i0.exists("obj_writer") && !i0.exists("obj_battleblcon")) {
    iU._utactcon = 0;
    iU.acting = 0;
    iU._utact = -1;
    y.acting = [0, 0, 0];
    x();
  }
  if (y.mnfight === 2 && iU._utboxmade === 0) {
    iU._utboxmade = 1;
    i0.with("obj_battleblcon", iz => iz.instance_destroy());
    i0.with("obj_writer", iz => {
      if (!iz.placeholder) {
        iz.instance_destroy();
      }
    });
    if (!i0.exists("obj_moveheart") && !hasRealHeart()) {
      e();
    }
    if (!i0.exists("obj_growtangle")) {
      i1(320, 170, D);
    }
  }
  if (y.mnfight !== 2) {
    iU._utboxmade = 0;
  }
}
i2(utStepBridge, "utStepBridge");
var ig = new Map();
function placeholderClass(i) {
  var c;
  if (!ig.has(i)) {
    ig.set(i, (c = class extends n {
      create() {
        this.visible = false;
        this.sprite_index = null;
        this.mask_index = null;
        this.movement = 0;
        this.halt = 0;
        this.placeholder = true;
      }
    }, i3(c, "kinds", P(i, n)), i3(c, "kindName", "ut_dr_placeholder_" + i), i3(c, "defaultDepth", 1000), c));
  }
  return ig.get(i);
}
i2(placeholderClass, "placeholderClass");
function hasRealHeart() {
  return i0.all("obj_heart").some(i => !i.destroyed && !i.placeholder);
}
i2(hasRealHeart, "hasRealHeart");
function standIn(i, c = []) {
  let iU = i0.all(i);
  let iV = iU.filter(ia => !ia.placeholder);
  let iS = iU.filter(ia => ia.placeholder);
  if (iV.length || c.some(ia => i0.exists(ia))) {
    for (let ia of iS) {
      ia.instance_destroy();
    }
    return;
  }
  if (iS.length) {
    for (let iE = 1; iE < iS.length; iE++) {
      iS[iE].instance_destroy();
    }
  } else {
    let iT = i1(-200, -200, placeholderClass(i));
    if (iT) {
      iT.visible = false;
    }
  }
}
i2(standIn, "standIn");
function utSoulBridge() {
  standIn("obj_heart", ["obj_moveheart"]);
  standIn("OBJ_WRITER");
  standIn("OBJ_INSTAWRITER");
}
i2(utSoulBridge, "utSoulBridge");
var firstLiveSlot = i2(() => y.monster[0] === 1 ? 0 : y.monster[1] === 1 ? 1 : 2, "firstLiveSlot");
var iW = ["obj_lborder", "obj_rborder", "obj_uborder", "obj_dborder"];
var iX = false;
function tagUtClasses() {
  if (!iX) {
    iX = true;
    for (let i of Object.values(UTOBJ)) {
      if (typeof i == "function" && i.prototype) {
        try {
          i.__ut = true;
        } catch {}
      }
    }
  }
}
i2(tagUtClasses, "tagUtClasses");
var inUtCode = i2(() => {
  let i = i0.self;
  return !!i && !!i.constructor && !!i.constructor.__ut;
}, "inUtCode");
var iB = false;
var ib = {
  invc: 0,
  inv: 20
};
function bridgeDamage() {
  if (iB) {
    return;
  }
  tagUtClasses();
  let i = y.invc;
  let c = y.inv;
  let iU = y.hp;
  let iV = y.df;
  let iS = y.adef;
  let ia = y.maxhp;
  let iE = () => {
    for (let iT = 0; iT < 3; iT++) {
      let iq = y.char[iT];
      if (iq && Array.isArray(iU) && iU[iq] > 0) {
        return iq;
      }
    }
    return y.char[0] || 1;
  };
  try {
    Object.defineProperty(y, "invc", {
      configurable: true,
      get() {
        if (inUtCode() && i0.first("ut_dr_adapter")) {
          return ib.invc;
        } else {
          return i;
        }
      },
      set(iT) {
        if (inUtCode() && i0.first("ut_dr_adapter")) {
          ib.invc = iT;
        } else {
          i = iT;
        }
      }
    });
    Object.defineProperty(y, "inv", {
      configurable: true,
      get() {
        if (inUtCode() && i0.first("ut_dr_adapter")) {
          return ib.inv;
        } else {
          return c;
        }
      },
      set(iT) {
        if (inUtCode() && i0.first("ut_dr_adapter")) {
          ib.inv = iT;
        } else {
          c = iT;
        }
      }
    });
    Object.defineProperty(y, "df", {
      configurable: true,
      get() {
        if (inUtCode() && i0.first("ut_dr_adapter")) {
          let iT = Array.isArray(iV) ? iV[iE()] : iV;
          if (Number.isFinite(iT)) {
            return iT;
          } else {
            return 0;
          }
        }
        return iV;
      },
      set(iT) {
        if (!inUtCode() || !i0.first("ut_dr_adapter")) {
          iV = iT;
        }
      }
    });
    Object.defineProperty(y, "adef", {
      configurable: true,
      get() {
        if (inUtCode() && i0.first("ut_dr_adapter")) {
          return 0;
        } else {
          return iS;
        }
      },
      set(iT) {
        if (!inUtCode() || !i0.first("ut_dr_adapter")) {
          iS = iT;
        }
      }
    });
    Object.defineProperty(y, "maxhp", {
      configurable: true,
      get() {
        if (inUtCode() && i0.first("ut_dr_adapter")) {
          let iT = Array.isArray(ia) ? ia[iE()] : ia;
          if (Number.isFinite(iT)) {
            return iT;
          } else {
            return 0;
          }
        }
        return ia;
      },
      set(iT) {
        if (!inUtCode() || !i0.first("ut_dr_adapter")) {
          ia = iT;
        }
      }
    });
    Object.defineProperty(y, "hp", {
      configurable: true,
      get() {
        if (inUtCode() && i0.first("ut_dr_adapter")) {
          let iT = iE();
          if (Array.isArray(iU)) {
            return iU[iT];
          } else {
            return iU;
          }
        }
        return iU;
      },
      set(iT) {
        if (inUtCode() && i0.first("ut_dr_adapter") && typeof iT == "number" && Array.isArray(iU)) {
          let iq = iE();
          let iv = iU[iq];
          if (typeof iv == "number" && Number.isFinite(iT)) {
            let iD = Array.isArray(ia) && Number.isFinite(ia[iq]) ? ia[iq] : iv;
            iU[iq] = Math.max(0, Math.min(iD, iT));
          }
          return;
        }
        iU = iT;
      }
    });
    iB = true;
  } catch {}
}
i2(bridgeDamage, "bridgeDamage");
function utTimeBridge() {
  if (i0.first("obj_time")) {
    return;
  }
  let i = undefined || o;
  if (i) {
    i1(0, 0, i);
  }
}
i2(utTimeBridge, "utTimeBridge");
function utTickInvc() {
  if (ib.invc > 0) {
    ib.invc--;
  }
}
i2(utTickInvc, "utTickInvc");
function resetUtDrForFight() {
  for (let i of ["hp", "maxhp", "df", "adef", "inv", "invc", "mnfight", "msg"]) {
    let c = Object.getOwnPropertyDescriptor(y, i);
    if (c && c.get) {
      let iU = y[i];
      delete y[i];
      if (iU !== undefined) {
        y[i] = iU;
      }
    }
  }
  iB = false;
  iY = false;
  iN = false;
  ib.invc = 0;
  ib.inv = 20;
  i5 = false;
}
i2(resetUtDrForFight, "resetUtDrForFight");
r(resetUtDrForFight);
var iY = false;
function bridgeTurnState() {
  if (iY) {
    return;
  }
  let i = y.mnfight;
  try {
    Object.defineProperty(y, "mnfight", {
      configurable: true,
      get() {
        return i;
      },
      set(c) {
        if (c === 3 && i0.first("ut_dr_adapter")) {
          if (!(y.turntimer <= 0)) {
            y.turntimer = -1;
          }
          i = 2;
          return;
        }
        i = c;
      }
    });
    iY = true;
  } catch {}
}
i2(bridgeTurnState, "bridgeTurnState");
var iN = false;
function bridgeMsgArray() {
  if (iN) {
    return;
  }
  let i = Array.isArray(y.msg) ? y.msg : new Array(100).fill(" ");
  let c = null;
  let iU = null;
  let iV = new WeakMap();
  let iS = ia => {
    let iE = new Proxy(ia, {
      get(iT, iq) {
        let iv = iT[iq];
        if (typeof iq == "string" && /^\d+$/.test(iq) && i0.first("ut_dr_adapter") && (iv === undefined || iv === " ")) {
          return "%%%";
        } else {
          return iv;
        }
      }
    });
    iV.set(iE, ia);
    return iE;
  };
  try {
    Object.defineProperty(y, "msg", {
      configurable: true,
      get() {
        if (iU !== i) {
          c = iS(i);
          iU = i;
        }
        return c;
      },
      set(ia) {
        i = ia && typeof ia == "object" && iV.get(ia) || ia;
        iU = null;
      }
    });
    iN = true;
  } catch {}
}
i2(bridgeMsgArray, "bridgeMsgArray");
var iR = false;
function armBridges() {
  if (!iR) {
    iR = true;
    u.pre = () => {
      if (i0.first("ut_dr_adapter")) {
        utTimeBridge();
        utTickInvc();
        utSoulBridge();
        utBorderBridge();
        utWonBridge();
      }
    };
  }
}
i2(armBridges, "armBridges");
function utWonBridge() {
  if (y.mnfight !== 1 && y.mnfight !== 1.5 || !Array.isArray(y.monster) || y.monster[0] === 1 || y.monster[1] === 1 || y.monster[2] === 1) {
    return;
  }
  let i = i0.first("obj_battlecontroller");
  if (!!i && !i.destroyed && i.victory !== 1 && y.myfight !== 7) {
    l();
  }
}
i2(utWonBridge, "utWonBridge");
function utBorderBridge() {
  let i = i0.first("obj_growtangle");
  if (!i || i.destroyed) {
    if (!i0.first("ut_dr_adapter")) {
      i0.with("obj_borderparent", ia => ia.instance_destroy());
      for (let ia of iW) {
        i0.with(ia, iE => iE.instance_destroy());
      }
      return;
    }
    if (!y.idealborder || !Number.isFinite(y.idealborder[0]) || !(y.idealborder[1] > y.idealborder[0])) {
      y.idealborder = [245, 395, 95, 245];
    }
    makeBorders();
    return;
  }
  let c = i.bbox_left;
  let iU = i.bbox_right;
  let iV = i.bbox_top;
  let iS = i.bbox_bottom;
  if (!isFinite(c) || !isFinite(iU) || !(iU > c)) {
    c = i.x - 75;
    iU = i.x + 75;
    iV = i.y - 75;
    iS = i.y + 75;
  }
  y.idealborder[0] = Math.round(c);
  y.idealborder[1] = Math.round(iU);
  y.idealborder[2] = Math.round(iV);
  y.idealborder[3] = Math.round(iS);
  makeBorders();
}
i2(utBorderBridge, "utBorderBridge");
function makeBorders() {
  for (let i of iW) {
    if (i0.exists(i)) {
      continue;
    }
    let c = UTOBJ[i];
    if (!c) {
      continue;
    }
    let iU = i1(y.idealborder[0], y.idealborder[2], c);
    if (iU) {
      iU.instaborder = 1;
      iU.instant = 1;
      iU.visible = false;
      iU.depth = 100;
    }
  }
}
i2(makeBorders, "makeBorders");
function utTextToDeltarune(i) {
  return String(i).replace(/\\[RXYWpZ]/g, "").replace(/\\M[0-9A-Z]/g, "").replace(/\\z[0-9]/g, "").replace(/\s+$/, "");
}
i2(utTextToDeltarune, "utTextToDeltarune");
var iG = [160, 240, 320];
function utBackground() {
  let i = J;
  if (i && !i0.exists("obj_battlebg")) {
    let c = i1(0, 0, i);
    if (c) {
      c.visible = false;
      c.depth = 2000;
    }
  }
  utSoulBridge();
}
i2(utBackground, "utBackground");
function buildUndertaleDeltaruneFights() {
  let iU = [];
  for (let [iV, iS] of Object.entries(H.encounters)) {
    let ia = Number(iV);
    let iE = (iS.objs || []).filter(Boolean);
    let iT = [];
    for (let ij = 0; ij < Math.min(3, iE.length); ij++) {
      let ie = utAdapter(iE[ij]);
      if (!ie) {
        continue;
      }
      let iy = (iS.types || [])[ij] || 0;
      iT.push({
        cls: ie,
        type: iy,
        x: 540,
        y: iG[iT.length],
        setup: makeSetup(iy)
      });
    }
    if (!iT.length) {
      continue;
    }
    let iq = (iS.names || []).filter(Boolean);
    let iv = [];
    for (let iu of iq) {
      let iz = iv[iv.length - 1];
      if (iz && iz.name === iu) {
        iz.n++;
      } else {
        iv.push({
          name: iu,
          n: 1
        });
      }
    }
    let iD = iv.map(ir => ir.n > 1 ? ir.name + " x" + ir.n : ir.name).join(" & ");
    iD ||= iE.join(" & ").replace(/obj_/g, "") || "Encounter " + ia;
    iU.push({
      id: "utdr" + ia,
      name: iD,
      game: "undertale",
      engine: "deltarune",
      chapter: "utdr",
      engineChapter: 1,
      area: "UNDERTALE (DELTARUNE engine)",
      desc: "Undertale battlegroup " + ia + ", fought with DELTARUNE's engine.#" + iE.join(", "),
      hidden: true,
      battlegroup: ia,
      encounterno: 0,
      music: iS.music || null,
      monsters: iT,
      party: [1, 2, 3],
      heromakex: [80, 90, 100],
      heromakey: [100, 150, 210],
      background: utBackground,
      battlemsg: "* " + iD + " draws near!",
      utEngineTwin: "ut" + ia
    });
  }
  iU.sort((ir, iP) => ir.battlegroup - iP.battlegroup);
  return iU;
}
i2(buildUndertaleDeltaruneFights, "buildUndertaleDeltaruneFights");
function makeSetup(i) {
  return function (c) {
    armBridges();
    bridgeMsgArray();
    bridgeTurnState();
    bridgeDamage();
    y.monsterat[c] = Number(y.monsteratk[c]) || 0;
    y.monsterdf[c] = Number(y.monsterdef[c]) || 0;
    y.monsterexp[c] = Number(y.xpreward[c]) || 0;
    y.monstergold[c] = Number(y.goldreward[c]) || 0;
    y.monstername[c] ||= (H.monsters[i] || {}).name || "Monster";
    y.mercymod[c] = 0;
    y.mercymax[c] = 100;
    y.sparepoint[c] = 0;
    let iU = utActTable(i);
    let iV = [0, 3, 1, 4, 2, 5].filter(iS => iU.canact[iS] && iU.name[iS]);
    y.utActSlot ||= [];
    y.utActSlot[c] = iV.slice();
    for (let iS = 0; iS < 6; iS++) {
      let ia = iV[iS];
      y.canact[c][iS] = ia !== undefined ? 1 : 0;
      y.actname[c][iS] = ia !== undefined ? iU.name[ia] : " ";
      y.actactor[c][iS] = 1;
      y.actdesc[c][iS] = " ";
      y.actcost[c][iS] = 0;
    }
  };
}
i2(makeSetup, "makeSetup");
export { UTOBJ, UTSCR, UT_DATA, buildUndertaleDeltaruneFights, buildUndertaleFights, scr_battlegroup, startUndertaleFight };
