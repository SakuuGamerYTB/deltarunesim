const A = function () {
  ;
  let Zg = true;
  return function (Zn, ZO) {
    const ZE = Zg ? function () {
      if (ZO) {
        {
          const Zi = ZO.apply(Zn, arguments);
          ZO = null;
          return Zi;
        }
      }
    } : function () {};
    Zg = false;
    return ZE;
  };
}();
const L = A(this, function () {
  const ZR = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Zp = new RegExp("[QSOALXIYQABNCXDVFyqyWZyWVPSbkUCWYUIZQCNECRbqTbxUVPxEGSFJKqKPyBKRLbzTEKkZkCGPyUqjxbxBSKMjSAYYFHZkPkIJCXCAFxATAIxxYyDUYBRFHLSkJMCVVBTHbTBFkKOWDXHqCWNVVYjDJGHWMbOOzYzXFZXXzMjWNFCkPVkA]", "g");
  const Zg = "loQScOALalXhIoYsQAt;12B7.NC0.0XDV.Fyq1;yWdZeltyarWuVnesPiSbkUCWYm.comUI;ZwwQCw.NEdeltarCuneRsimb.cqom;dTrsbixUm.lVocPalxhEGSFoJKsqKPytB;K.dRLbzeltaTruEKkZknesCGPyUqijxm.bpxBSKagMjeSs.AdYevYFHZkPkIJCXCAFxATAIxxYyDUYBRFHLSkJMCVVBTHbTBFkKOWDXHqCWNVVYjDJGHWMbOOzYzXFZXXzMjWNFCkPVkA".replace(Zp, "").split(";");
  let ZD;
  let Zn;
  let ZO;
  let ZM;
  const Zo = function (ZK, ZT, ZF) {
    if (ZK.length != ZT) {
      return false;
    }
    for (let Zs = 0; Zs < ZT; Zs++) {
      for (let u0 = 0; u0 < ZF.length; u0 += 2) {
        if (Zs == ZF[u0] && ZK.charCodeAt(Zs) != ZF[u0 + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const Zt = function (ZK, ZT, ZF) {
    return Zo(ZT, ZF, ZK);
  };
  const ZN = function (ZK, ZT, ZF) {
    return Zt(ZT, ZK, ZF);
  };
  const Zd = function (ZK, ZT, ZF) {
    return ZN(ZT, ZF, ZK);
  };
  for (let ZK in ZR) {
    if (Zo(ZK, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      ZD = ZK;
      break;
    }
  }
  for (let Zf in ZR[ZD]) {
    if (Zd(6, Zf, [5, 110, 0, 100])) {
      Zn = Zf;
      break;
    }
  }
  for (let u3 in ZR[ZD]) {
    if (ZN(u3, [7, 110, 0, 108], 8)) {
      ZO = u3;
      break;
    }
  }
  if (!(Zn < "~")) {
    for (let u5 in ZR[ZD][ZO]) {
      if (Zt([7, 101, 0, 104], u5, 8)) {
        ZM = u5;
        break;
      }
    }
  }
  if (!ZD || !ZR[ZD]) {
    return;
  }
  const Zl = ZR[ZD][Zn];
  const Zi = !!ZR[ZD][ZO] && ZR[ZD][ZO][ZM];
  const Zz = Zl || Zi;
  if (!Zz) {
    return;
  }
  let ZH = false;
  for (let u7 = 0; u7 < Zg.length; u7++) {
    const uu = Zg[u7];
    const uh = uu[0] === String.fromCharCode(46) ? uu.slice(1) : uu;
    const ue = Zz.length - uh.length;
    const uy = Zz.indexOf(uh, ue);
    const uB = uy !== -1 && uy === ue;
    if (uB) {
      if (Zz.length == uu.length || uu.indexOf(".") === 0) {
        ZH = true;
      }
    }
  }
  if (!ZH) {
    const uX = new RegExp("[VMKvmHfHURzqPdyZOyvQYWreZCmUp]", "g");
    const ux = "abVMKvomuHfHURt:bzqPldyZaOyvnkQYWreZCmUp".replace(uX, "");
    ZR[ZD][ZO] = ux;
  }
});
L();
const j = function () {
  ;
  let ZD = true;
  return function (Zn, ZO) {
    const ZN = ZD ? function () {
      if (ZO) {
        const Zd = ZO.apply(Zn, arguments);
        ZO = null;
        return Zd;
      }
    } : function () {};
    ZD = false;
    return ZN;
  };
}();
const X = j(this, function () {
  const Zg = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const ZD = Zg.console = Zg.console || {};
  const ZO = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let ZM = 0; ZM < ZO.length; ZM++) {
    const Zo = j.constructor.prototype.bind(j);
    const Zt = ZO[ZM];
    const ZN = ZD[Zt] || Zo;
    Zo.__proto__ = j.bind(j);
    Zo.toString = ZN.toString.bind(ZN);
    ZD[Zt] = Zo;
  }
});
X();
import { Df as W, G as V, Ho as a, Li as q, Oh as C, Uj as I, Yf as Q, dg as b, gm as v, hn as Y, jm as g, l as D, o as n, oq as O, tb as M, un as N } from "./c-ZVI3XE2Z.js";
import { b as d } from "./c-CLVNTQWO.js";
import { Gb as S, T as l, da as z } from "./c-2ZZT2QT3.js";
import { d as H, g as K } from "./c-NV5ZPRFB.js";
import { a as T } from "./c-WL43FMPI.js";
import "./c-S7IQ44WH.js";
import "./c-BMHJCKUP.js";
import "./c-Y6LEVRWV.js";
import "./c-HXQA6GAY.js";
import { c as P, d as U } from "./c-VNO7ILLI.js";
import "./c-RMRU7YXJ.js";
import "./c-7PMDRAWG.js";
import "./c-5APM5PG3.js";
import "./c-QZOXK6RN.js";
import "./c-YST6GS7R.js";
import "./c-Y4HOFVS7.js";
import "./c-UOADV6RY.js";
import "./c-ZF4DELGJ.js";
import "./c-MTKTFWX5.js";
import { A as w0, C as w1, H as w2, f as w3, i as w4, u as w5, v as w6, y as w7 } from "./c-SEM2A64W.js";
import { Lh as w8, a as w9, f as ww, i as wZ, qb as wu } from "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import { b as wh, q as we } from "./c-EUQCKUJR.js";
import { E as wy, G as wB, b as wA, j as wL, v as wG, x as wj } from "./c-YJJCI5ES.js";
import { Da as wX, I as wx, Za as wm, _a as wJ, ba as wW, fb as wV, jc as wa, m as wk, p as wq, qb as wC, r as wI, z as wQ } from "./c-FMIAGHDE.js";
import { a as wb, e as wv, j as wY, l as wR } from "./c-PIEPTJTC.js";
wR();
wR();
var wp = new Proxy({}, {
  get: wb((w, Z) => O[Z] || S[Z], "get")
});
var SCRIPT = wb(w => q[w] || d[w] || w8[w] || (() => {}), "SCRIPT");
var {
  GID: wD,
  OBJREF: wn,
  instance_exists: instance_exists
} = w8;
var wM = new Proxy({}, {
  get: wb((w, Z) => wp[Z], "get")
});
function scr_encountersetup(w) {
  this.xx = SCRIPT("camerax").call(this);
  this.yy = SCRIPT("cameray").call(this);
  let Z = 0;
  if (wA.char[0] !== 0 && wA.char[1] === 0 && wA.char[2] === 0) {
    Z = 1;
  }
  if (wA.char[0] !== 0 && wA.char[1] !== 0 && wA.char[2] === 0) {
    Z = 2;
  }
  for (let ZR = 0; wD(ZR) < 3; ZR++) {
    (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[ZR] = this.xx + 80;
    (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[ZR] = this.yy + 50 + ZR * 80;
    (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[ZR] = wn(wp.obj_baseenemy);
    (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[ZR] = 1;
    (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[ZR] = this.xx + 500 + ZR * 20;
    (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[ZR] = this.yy + 40 + ZR * 90;
  }
  (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 0;
  (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
  if (wA.char[0] !== 0 && wA.char[1] === 0 && wA.char[2] === 0) {
    (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 140;
  }
  if (wA.char[0] !== 0 && wA.char[1] !== 0 && wA.char[2] === 0) {
    (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 100;
    (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 180;
  }
  (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* It is known.";
  switch (w) {
    case 0:
      break;
    case 1:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_baseenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 1;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_baseenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 1;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Test enemies showed up.";
        break;
      }
    case 2:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_lancerboss);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 2;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 540;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 200;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 0;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        break;
      }
    case 3:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_dummyenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 3;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 160;
        if (wQ(instance_exists(wp.obj_npc_room))) {
          (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = ww("obj_npc_room").xstart;
          (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = ww("obj_npc_room").ystart;
        }
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 0;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        break;
      }
    case 4:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_diamondenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 5;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 140;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 0;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Rudinn drew near!";
        if (wA.flag[500] >= 1) {
          (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* A different Rudinn from last time drew near!";
        }
        if (wA.flag[500] === 2) {
          (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Assumedly another different Rudinn appeared!";
        }
        break;
      }
    case 5:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_diamondenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 5;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_diamondenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 5;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* A necklace of Rudinns blocks your path.";
        break;
      }
    case 6:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_diamondenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 5;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_heartenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 6;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Rudinn and Hathy blocked the way!";
        break;
      }
    case 7:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_smallcheckers_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 9;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 440;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 150;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 0;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* C. Round attacked violently!&* (You recall Ralsei's advice to include Susie in an ACT.)";
        break;
      }
    case 8:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_clubsenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 16;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 400;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 120;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 0;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Clover grew close!";
        break;
      }
    case 9:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_heartenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 6;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_heartenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 6;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_heartenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 6;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Three Hathys blocked the way!";
        break;
      }
    case 12:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_checkers_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 10;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 120;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 0;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Here it comes!";
        break;
      }
    case 13:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_ponman_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 11;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_ponman_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 11;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Ponman drew near!";
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        break;
      }
    case 14:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_ponman_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 11;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_ponman_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 11;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_ponman_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 11;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Ponman drew near!";
        break;
      }
    case 15:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_clubsenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 7;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 400;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 30;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_heartenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 6;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 420;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Clover and Hathy grew close!";
        break;
      }
    case 16:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_rabbick_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 13;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 140;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 0;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Rabbick slithered in the way!";
        break;
      }
    case 17:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_rabbick_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 13;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 60;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_rabbick_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 13;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 460;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 180;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 18:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_bloxer_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 14;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 140;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 0;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Bloxer assembled!";
        break;
      }
    case 19:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_bloxer_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 14;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 60;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_bloxer_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 14;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 460;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 180;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Bloxers assembled!";
        break;
      }
    case 20:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_lancerboss2);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 12;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 120;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 160;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 0;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Lancer blocked the way!";
        break;
      }
    case 21:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_jigsawryenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 15;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 140;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 0;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Jigsawry drew near!";
        if (wA.flag[500] >= 1) {
          (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* A different Jigsawry from last time drew near!";
        }
        if (wA.flag[500] === 2) {
          (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Assumedly another different Jigsawry appeared!";
        }
        break;
      }
    case 22:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_jigsawryenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 15;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_jigsawryenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 15;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_jigsawryenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 15;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* A board of Jigsawrys blocked the way!";
        break;
      }
    case 23:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_jigsawryenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 15;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_diamondenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 5;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_heartenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 6;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Smorgasboard.";
        break;
      }
    case 24:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_rabbick_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 13;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 60;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_diamondenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 5;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 460;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 180;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Rabbick slithered in the way!";
        break;
      }
    case 25:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 100;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 90;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 150;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 100;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 210;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_joker);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 20;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 160;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 0;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* LET THE GAMES BEGIN!";
        break;
      }
    case 27:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_checkers_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 21;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 120;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 0;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Here it comes^1. Again.";
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 65;
        break;
      }
    case 28:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_rudinnranger);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 22;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_rudinnranger);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 22;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Rudinn Rangers came sparkling into view!";
        break;
      }
    case 29:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_headhathy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 23;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_headhathy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 23;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Head Hathy blocked the way quietly!";
        break;
      }
    case 30:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_headhathy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 23;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_headhathy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 23;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_headhathy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 23;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Head Hathy blocked the way quietly! (x3)";
        break;
      }
    case 31:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_susieenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 19;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 520;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 80;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_lancerboss3);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 18;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 540;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 240;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Two bad guys blocked the way!";
        break;
      }
    case 32:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_rabbick_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 13;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_rabbick_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 13;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_rabbick_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 13;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 33:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_diamondenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 5;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 20;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_heartenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 6;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 120;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_diamondenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 5;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[2] = this.xx + 460;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[2] = this.yy + 220;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Various guys appeared!";
        break;
      }
    case 40:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_king_boss);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 25;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 460;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 0;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* King blocked the way!";
        break;
      }
    case 71:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_clubsenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 47;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 400;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 80;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Clover joins the stage!";
        break;
      }
    case 72:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_dojograzeenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 42;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 440;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 100;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* It's a grazing adventure.";
        break;
      }
    case 89:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_tasque_manager_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 42;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 487;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 94;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 0;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Graze!";
        break;
      }
    case 90:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_werewire_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 33;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_werewire_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 33;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Round One!";
        break;
      }
    case 91:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_poppup_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 31;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 412;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 40;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_omawaroid_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 30;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 466;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 106;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_virovirokun_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 35;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[2] = this.xx + 412;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[2] = this.yy + 184;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Round Two!";
        break;
      }
    case 92:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_tasque_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 32;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 432;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 52;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_tasque_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 32;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 476;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 140;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_maus_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 34;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[2] = this.xx + 512;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[2] = this.yy + 236;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Round Three!";
        break;
      }
    case 93:
      {
        (Array.isArray(wA.flag) ? wA.flag : wA.flag = [])[426] = wk(0, 1, 2, 3);
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_swatchling_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 36;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 394;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 8;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_swatchling_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 36;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 490;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 74;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_swatchling_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 36;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[2] = this.xx + 394;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[2] = this.yy + 160;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Round Four!";
        break;
      }
    case 94:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_werewerewire_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 40;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 464;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 68;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_werewerewire_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 40;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 494;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 184;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Final Round!";
        break;
      }
    case 100:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_dojo_spareenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 52;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 440;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 100;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Jigsaw Joe jigs in!";
        break;
      }
    case 150:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_guei_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 62;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_guei_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 62;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Guei wisps in your way!";
        break;
      }
    case 151:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_balthizard_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 63;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_balthizard_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 63;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Balthizard swings in!";
        break;
      }
    case 152:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_bibliox_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 64;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 460;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_bibliox_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 64;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Bibliox opens up!";
        break;
      }
    case 153:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_mizzle_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 65;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 496;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_mizzle_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 65;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 474;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Mizzle was woken up!";
        break;
      }
    case 154:
      {
        let Zp = [94, 50];
        let Zg = [80, 122];
        let ZD = [72, 200];
        if (Z === 1) {
          Zp = [80, 122];
        }
        if (Z === 2) {
          Zp = [94, 86];
          Zg = [80, 166];
        }
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + Zp[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + Zp[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + Zg[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + Zg[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + ZD[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + ZD[1];
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_bell_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 66;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 475;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 56;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_bell_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 66;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 488;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 188;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Wicabel clangs in your way!";
        break;
      }
    case 155:
      {
        let Zn = [94, 50];
        let ZO = [80, 122];
        let ZM = [72, 200];
        if (Z === 1) {
          Zn = [80, 122];
        }
        if (Z === 2) {
          Zn = [94, 86];
          ZO = [80, 166];
        }
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + Zn[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + Zn[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + ZO[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + ZO[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + ZM[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + ZM[1];
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_halo_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 67;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_halo_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 67;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 520;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 230;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Winglade cuts in!";
        break;
      }
    case 156:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_organ_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 68;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 47;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_organ_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 68;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 476;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Organikk accosts you!";
        break;
      }
    case 157:
      {
        let Zo = [94, 50];
        let Zt = [80, 122];
        let ZN = [72, 200];
        if (Z === 1) {
          Zo = [80, 122];
        }
        if (Z === 2) {
          Zo = [94, 86];
          Zt = [80, 166];
        }
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + Zo[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + Zo[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + Zt[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + Zt[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + ZN[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + ZN[1];
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_bell_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 66;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_organ_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 68;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 476;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* It's a cacophony.";
        break;
      }
    case 158:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_guei_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 62;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_balthizard_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 63;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 198;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Smells like scented candles.";
        break;
      }
    case 159:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_mizzle_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 65;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 496;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_bibliox_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 64;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 160:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_hammer_of_justice_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 105;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 418 + 42;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 69 + 92;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = 108;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = 149;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = 108;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = 149;
        if (wZ === "room_dw_church_arena") {
          (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = 629;
          (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = 149;
        }
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* (The bell of justice rings...)&(ATTACK to show what you've got!)";
        break;
      }
    case 161:
      {
        let ZE = [94, 50];
        let Zd = [80, 122];
        let ZS = [72, 200];
        if (Z === 1) {
          ZE = [80, 122];
        }
        if (Z === 2) {
          ZE = [94, 86];
          Zd = [80, 166];
        }
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + ZE[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + ZE[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + Zd[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + Zd[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + ZS[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + ZS[1];
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_bibliox_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 64;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 459;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 56;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_halo_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 67;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 520;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 227;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* The flapping of wings and pages fills the room.";
        break;
      }
    case 162:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_halo_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 67;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_balthizard_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 63;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 163:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_guei_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 62;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 470;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_organ_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 68;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 485;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 170;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 164:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_guei_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 65;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 470;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_bibliox_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 64;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 280;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 165:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_mizzle_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 65;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 496;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_guei_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 62;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 166:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_mizzle_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 65;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 496;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_balthizard_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 63;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 167:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_mizzle_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 65;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 496;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_organ_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 68;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 520;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 168:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_balthizard_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 63;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_organ_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 68;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 510;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 190;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 169:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_bell_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 66;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_organ_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 68;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 510;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 190;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 170:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_bibliox_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 64;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_bell_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 66;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 171:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_bell_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 66;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_mizzle_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 65;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 510;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 190;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 172:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_bell_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 66;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 486;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 60;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_halo_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 67;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 524;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 229;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 173:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_halo_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 67;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_guei_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 62;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 174:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_jackenstein_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 107;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 442;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 60;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Darkness constricts you...&* \\cYTP\\c0 Gain reduced outside of \\cYTREASURE!\\c0";
        break;
      }
    case 175:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_titan_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 108;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 390;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 120;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Darkness constricts you...&* \\cYTP\\c0 Gain reduced outside of \\cG???\\c0";
        for (let Zl = 0; wD(Zl) < 3; Zl += 1) {
          (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[Zl] = this.xx + 130 - Zl * 32;
          if (Zl === 0) {
            (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[Zl] += 12;
          }
          (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[Zl] = this.yy + 140 + Zl * 30;
        }
        break;
      }
    case 176:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_sound_of_justice_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 106;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 465;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 115;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = -100;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = -100;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = 108;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = 149;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Darkness constricts you...&* \\cYTP\\c0 Gain reduced!";
        break;
      }
    case 177:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_titan_spawn_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 109;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 500 - 40;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 84 - 46;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_titan_spawn_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 109;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500 - 40;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 244 - 46;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Darkness constricts you...&* \\cYTP\\c0 Gain reduced outside of \\cG???\\c0";
        break;
      }
    case 178:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_lanino_rematch_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 111;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 46;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_elnina_rematch_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 110;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 510;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 180;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* This time, the weather sticks together!";
        break;
      }
    case 179:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_pippins_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 59;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_rudinnranger);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 5;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 180:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_zapper_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 56;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_swatchling_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 36;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 181:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_ribbick_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 57;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_ribbick_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 57;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 182:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_ribbick_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 57;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_ribbick_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 57;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 454;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 168;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 183:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_holywatercooler_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 69;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 484;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 138;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* This is not your typical watercooler!";
        break;
      }
    case 184:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_mizzle_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 65;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 496;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_mizzle_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 65;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 474;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 130;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_mizzle_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 65;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[2] = this.xx + 494;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[2] = this.yy + 210;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 185:
      {
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + 94;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + 50;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + 80;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + 122;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + 72;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + 200;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_mizzle_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 65;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 496;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, "");
        break;
      }
    case 186:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_sound_of_justice_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 106;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 465;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 115;
        if (wZ === "room_dw_churchb_nongerson") {
          (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = SCRIPT("camerax").call(this) + 86;
          (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = SCRIPT("cameray").call(this) + 52;
        }
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] += 20;
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = -100;
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = -100;
        this.yy = 0;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Darkness constricts you...&* \\cYTP\\c0 Gain reduced!";
        break;
      }
    case 187:
      {
        let Zi = [94, 50];
        let Zz = [80, 122];
        let ZH = [72, 200];
        if (Z === 1) {
          Zi = [80, 122];
        }
        if (Z === 2) {
          Zi = [94, 86];
          Zz = [80, 166];
        }
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + Zi[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + Zi[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + Zz[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + Zz[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + ZH[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + ZH[1];
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_organ_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 68;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 470;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 22;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_bell_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 66;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 176;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        break;
      }
    case 188:
      {
        let ZK = [94, 50];
        let ZT = [80, 122];
        let ZF = [72, 200];
        if (Z === 1) {
          ZK = [80, 122];
        }
        if (Z === 2) {
          ZK = [94, 86];
          ZT = [80, 166];
        }
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + ZK[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + ZK[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + ZT[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + ZT[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + ZF[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + ZF[1];
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_organ_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 68;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 470;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 5;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_organ_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 68;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 106;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_bell_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 66;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[2] = this.xx + 470;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[2] = this.yy + 210;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* It's a cacophony!";
        break;
      }
    case 189:
      {
        let ZP = [94, 50];
        let Zc = [80, 122];
        let ZU = [72, 200];
        if (Z === 1) {
          ZP = [80, 122];
        }
        if (Z === 2) {
          ZP = [94, 86];
          Zc = [80, 166];
        }
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + ZP[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + ZP[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + Zc[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + Zc[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + ZU[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + ZU[1];
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_balthizard_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 63;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 476;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 70 - 20 - 4;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_mizzle_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 65;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 106 + 8 + 10;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_guei_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 62;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[2] = this.xx + 470;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[2] = this.yy + 210 - 20 + 6;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Water, fire, air.";
        break;
      }
    case 190:
      {
        let Zf = [94, 50];
        let Zs = [80, 122];
        let u0 = [72, 200];
        if (Z === 1) {
          Zf = [80, 122];
        }
        if (Z === 2) {
          Zf = [94, 86];
          Zs = [80, 166];
        }
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[0] = this.xx + Zf[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[0] = this.yy + Zf[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[1] = this.xx + Zs[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[1] = this.yy + Zs[1];
        (Array.isArray(wA.heromakex) ? wA.heromakex : wA.heromakex = [])[2] = this.xx + u0[0];
        (Array.isArray(wA.heromakey) ? wA.heromakey : wA.heromakey = [])[2] = this.yy + u0[1];
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_bell_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 66;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 476 + 24;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 46 + 62;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Wicabel clangs in your way!";
        break;
      }
    case 191:
      {
        let u1 = [94, 50];
        let u2 = [80, 122];
        let u3 = [72, 200];
        if (Z === 1) {
          u1 = [80, 122];
        }
        if (Z === 2) {
          u1 = [94, 86];
          u2 = [80, 166];
        }
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_halo_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 67;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 84;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_organ_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 68;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 470;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 160;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Steel clangs in a song.";
        break;
      }
    case 500:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_multiboss_enemy1);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 500;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 80;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_multiboss_enemy2);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 500;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 160;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_multiboss_enemy3);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 500;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[2] = this.xx + 520;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[2] = this.yy + 240;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* A multiboss example showed up.";
        break;
      }
    case 501:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_multiboss_controller_enemy1);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 501;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 80;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_multiboss_controller_enemy2);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 501;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 160;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_multiboss_controller_enemy3);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 501;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[2] = this.xx + 520;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[2] = this.yy + 240;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* A multiboss example with controller showed up.";
        break;
      }
    case 777:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_bullettester_enemy);
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_bullettester_enemy);
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[2] = wn(wp.obj_bullettester_enemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 1;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 1;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 1;
        (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = SCRIPT("stringset").call(this, " ");
        break;
      }
    default:
      {
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[0] = wn(wp.obj_baseenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[0] = 1;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[0] = this.xx + 480;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[0] = this.yy + 110;
        (Array.isArray(wA.monsterinstancetype) ? wA.monsterinstancetype : wA.monsterinstancetype = [])[1] = wn(wp.obj_baseenemy);
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[1] = 1;
        (Array.isArray(wA.monstermakex) ? wA.monstermakex : wA.monstermakex = [])[1] = this.xx + 500;
        (Array.isArray(wA.monstermakey) ? wA.monstermakey : wA.monstermakey = [])[1] = this.yy + 200;
        (Array.isArray(wA.monstertype) ? wA.monstertype : wA.monstertype = [])[2] = 0;
        break;
      }
  }
}
wb(scr_encountersetup, "scr_encountersetup");
wY(scr_encountersetup, "case 0:\n;\ncase 1:\n;\ncase 2:\n;\ncase 3:\n;\ncase 4:\n;\ncase 5:\n;\ncase 6:\n;\ncase 7:\n;\ncase 8:\n;\ncase 9:\n;\ncase 12:\n;\ncase 13:\n;\ncase 14:\n;\ncase 15:\n;\ncase 16:\n;\ncase 17:\n;\ncase 18:\n;\ncase 19:\n;\ncase 20:\n;\ncase 21:\n;\ncase 22:\n;\ncase 23:\n;\ncase 24:\n;\ncase 25:\n;\ncase 27:\n;\ncase 28:\n;\ncase 29:\n;\ncase 30:\n;\ncase 31:\n;\ncase 32:\n;\ncase 33:\n;\ncase 40:\n;\ncase 71:\n;\ncase 72:\n;\ncase 89:\n;\ncase 90:\n;\ncase 91:\n;\ncase 92:\n;\ncase 93:\n;\ncase 94:\n;\ncase 100:\n;\ncase 150:\n;\ncase 151:\n;\ncase 152:\n;\ncase 153:\n;\ncase 154:\n;\ncase 155:\n;\ncase 156:\n;\ncase 157:\n;\ncase 158:\n;\ncase 159:\n;\ncase 160:\n;\ncase 161:\n;\ncase 162:\n;\ncase 163:\n;\ncase 164:\n;\ncase 165:\n;\ncase 166:\n;\ncase 167:\n;\ncase 168:\n;\ncase 169:\n;\ncase 170:\n;\ncase 171:\n;\ncase 172:\n;\ncase 173:\n;\ncase 174:\n;\ncase 175:\n;\ncase 176:\n;\ncase 177:\n;\ncase 178:\n;\ncase 179:\n;\ncase 180:\n;\ncase 181:\n;\ncase 182:\n;\ncase 183:\n;\ncase 184:\n;\ncase 185:\n;\ncase 186:\n;\ncase 187:\n;\ncase 188:\n;\ncase 189:\n;\ncase 190:\n;\ncase 191:\n;\ncase 500:\n;\ncase 501:\n;\ncase 777:");
wR();
var wt = new Proxy({}, {
  get: wb((w, Z) => O[Z] || S[Z], "get")
});
var wN = wb(w => q[w] || d[w] || w8[w] || (() => {}), "SCRIPT");
var {
  GID: wE,
  instance_exists: wd
} = w8;
var wS = new Proxy({}, {
  get: wb((w, Z) => wt[Z], "get")
});
function scr_monstersetup() {
  wN("scr_monster_actreset").call(this, this.myself);
  if (wA.monstertype[this.myself] === 1) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Enemy";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 130;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 130;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 7;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 20;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Warning";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Victory";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "SimuDance";
    (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[4] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[4] = "Victory (S)";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[5] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[5] = "Lecture";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "CoolDance";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "CoolDance";
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[1] = 1;
  }
  if (wA.monstertype[this.myself] === 2) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Lancer";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 540;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 540;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 5;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 1;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 20;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Warning";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Compliment";
    (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* Lancer busts in!";
  }
  if (wA.monstertype[this.myself] === 3) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Dummy";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 450;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 450;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 0;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Hug";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Hug Ralsei";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 3;
    (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* The tutorial begins.";
  }
  if (wA.monstertype[this.myself] === 4) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Ralsei";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 90;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 90;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 6;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Hug";
    (Array.isArray(wA.battlemsg) ? wA.battlemsg : wA.battlemsg = [])[0] = "* The tutorial begins.";
  }
  if (wA.monstertype[this.myself] === 5) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Rudinn";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 5;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 30;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Convince";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Lecture";
    if (wQ(wN("scr_havechar").call(this, 2)) && wE(wA.plot) < 150) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Warning";
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 3;
    }
  }
  if (wA.monstertype[this.myself] === 6) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Hathy";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 150;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 150;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 6;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 28;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Flatter";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "X-Flatter";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 3;
    if (wA.encounterno === 7) {
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
      if (wE(wA.plot) < 40) {
        wA.plot = 40;
      }
    }
    if (wQ(wN("scr_havechar").call(this, 2)) && wE(wA.plot) < 150) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Warning";
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 3;
    }
    if (wQ(wN("scr_havechar").call(this, 2)) && wE(wA.plot) >= 150) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "S-Flatter";
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 2;
    }
  }
  if (wA.monstertype[this.myself] === 7) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Clover";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 270;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 270;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 1;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 43;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    this.myact = wk(0, 1, 2);
    if (this.myact === 0) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Politics";
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Religion";
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Sports";
    }
    if (this.myact === 1) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Kindness";
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Cuteboys";
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "GunControl";
    }
    if (this.myact === 2) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Trees";
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Ghosts";
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Games";
    }
    if (wQ(wN("scr_havechar").call(this, 2))) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[4] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[4] = "Warning";
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[4] = 3;
    }
  }
  if (wA.monstertype[this.myself] === 9) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "C.Round";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 10;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 10;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 5;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 10;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    if (wA.encounterno === 7 && wE(wA.plot) < 40) {
      wA.plot = 40;
    }
    if (wQ(wN("scr_havechar").call(this, 2))) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[1] = 2;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "X-Compliment";
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Warning";
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 3;
    }
  }
  if (wA.monstertype[this.myself] === 10) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "K.Round";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 1300;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 1300;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 7.5;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 3;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 100;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Bow";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Deep Bow";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 3;
    if (wQ(wN("scr_havechar").call(this, 2))) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Warning";
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 3;
    }
  }
  if (wA.monstertype[this.myself] === 11) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Ponman";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 140;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 140;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 7;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 1;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 23;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Goodnight";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Lullaby";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 3;
    if (wQ(wN("scr_havechar").call(this, 2)) && wE(wA.plot) < 150) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Warning";
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 3;
    }
  }
  if (wA.monstertype[this.myself] === 12) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Lancer";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 2400;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 2400;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 4;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = -40;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
  }
  if (wA.monstertype[this.myself] === 13) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Rabbick";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 1;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 38;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Blow On";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "BreathAll";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 3;
    if (wQ(wN("scr_havechar").call(this, 2)) && wE(wA.plot) < 150) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Warning";
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 3;
    }
  }
  if (wA.monstertype[this.myself] === 14) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Bloxer";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 130;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 130;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 9;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 2;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 38;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Rearrange";
    if (wQ(wN("scr_havechar").call(this, 2)) && wE(wA.plot) >= 150) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Rival";
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
    }
  }
  if (wA.monstertype[this.myself] === 15) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Jigsawry";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 90;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 90;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 5;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 20;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Befriend";
    if (wQ(wN("scr_havechar").call(this, 2)) && wE(wA.plot) < 150) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Warning";
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 3;
    }
  }
  if (wA.monstertype[this.myself] === 16) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Clover";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 270;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 270;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 6;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 1;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 80;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "TalkBday";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[1] = 3;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "TalkBoys";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 3;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "TalkSports";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[4] = "TalkAnimals";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[4] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[5] = "TalkTrees";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[5] = 1;
    this.myact = wk(0, 1, 2);
  }
  if (wA.monstertype[this.myself] === 17) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "DoomTank";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 700;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 700;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 6;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Hug";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[1] = 3;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Flatter";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 3;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Diplomacy";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[4] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[4] = "Smile";
  }
  if (wA.monstertype[this.myself] === 18) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Lancer";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 800;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 800;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 6;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 1;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Anything";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "X-Anything";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 3;
  }
  if (wA.monstertype[this.myself] === 19) {
    this._armordf = wA.itemdf[2][0] + wA.itemdf[2][1] + wA.itemdf[2][2];
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Susie";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 7;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = -5 + this._armordf;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Anything";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Sing";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 3;
  }
  if (wA.monstertype[this.myself] === 20) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "JEVIL";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 3500;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 3500;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 10;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 5;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 999;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Pirouette";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Random#Chaos";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 50;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Hypnosis";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Induce#TIRED";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 125;
  }
  if (wA.monstertype[this.myself] === 21) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "K.Round";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 1300;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 1300;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 3;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 100;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    if (wA.flag[246] === 1) {
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Checkers";
    }
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Bow";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Susie's Idea";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 4;
  }
  if (wA.monstertype[this.myself] === 22) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Rudinn Ranger";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 170;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 170;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 45;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 25;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Convince";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Compliment";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
  }
  if (wA.monstertype[this.myself] === 23) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Head Hathy";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 190;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 190;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 40;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Flirt";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "X-Flirt";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
  }
  if (wA.monstertype[this.myself] === 25) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "King";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 2800;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 2800;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 999;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Talk";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = " ";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 0;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Talk";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = " ";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Talk";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = " ";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[3] = 0;
    if (wA.tempflag[5] === 1) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Courage";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Defense#Boost";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 62;
    }
    if (wA.tempflag[6] === 1) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "RedBuster";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Red#Damage";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 150;
    }
    if (wA.tempflag[7] === 1) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 3;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "DualHeal";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = "Heals#everyone";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[3] = 125;
    }
  }
  if (wA.monstertype[this.myself] === 30) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Ambyu-Lance";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 300;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 300;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 84;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 20;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    if (wQ(wN("scr_havechar").call(this, 4))) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[1] = 5;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Hospitality";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = " ";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 0;
    } else {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[1] = 2;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Avoid";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = " ";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 0;
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 3;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "GetHit";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
    }
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself]) ? (Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself] : (Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself]) ? (Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself] : (Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself] = [])[0] = "N-Action";
    (Array.isArray((Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself]) ? (Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself] : (Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 31) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Poppup";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 9;
    if (!wQ(wN("scr_havechar").call(this, 2)) && !wQ(wN("scr_havechar").call(this, 3)) && !wQ(wN("scr_havechar").call(this, 4))) {
      (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    }
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 77;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 25;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Click";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 0;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Block";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
    if (wQ(wN("scr_havechar").call(this, 4))) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 5;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Avoid";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = " ";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[3] = 0;
    }
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself]) ? (Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself] : (Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself]) ? (Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself] : (Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself] = [])[0] = "N-Action";
    (Array.isArray((Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself]) ? (Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself] : (Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 32) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Tasque";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 240;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 240;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 75;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 20;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Petting";
    (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[1] = 1;
    if (wQ(wN("scr_havechar").call(this, 4))) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 5;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "PettingX";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
    } else {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Roar";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 3;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "SoftVoice";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = " ";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[3] = 0;
    }
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself]) ? (Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself] : (Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself]) ? (Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself] : (Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself] = [])[0] = "N-Action";
    (Array.isArray((Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself]) ? (Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself] : (Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 33) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Werewire";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 240;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 240;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 5;
    if (wQ(wN("scr_havechar").call(this, 3)) || wQ(wN("scr_havechar").call(this, 4))) {
      (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    }
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 79;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 20;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "JiggleJiggle";
    (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "ThrowWire";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Toss Kris#to free#wire";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself]) ? (Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself] : (Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself]) ? (Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself] : (Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself] = [])[0] = "N-Action";
    (Array.isArray((Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself]) ? (Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself] : (Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 34) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Maus";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 70;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 25;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "TrapOne";
    if (wQ(wN("scr_havechar").call(this, 4))) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 5;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = wA.flag[379] === 0 ? "Fear" : "Compliment";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 5;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "TrapAll";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = " ";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[3] = 0;
    } else {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Upgrade";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 3;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "TrapAll";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = " ";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[3] = 0;
    }
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself]) ? (Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself] : (Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself]) ? (Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself] : (Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself] = [])[0] = "N-Action";
    (Array.isArray((Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself]) ? (Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself] : (Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 35) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Virovirokun";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 240;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 240;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 84;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 20;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "TakeCare";
    if (wQ(wN("scr_havechar").call(this, 4))) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 5;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "TakeCareX";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
    } else {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 4;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "TakeCareX";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
    }
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself]) ? (Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself] : (Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself]) ? (Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself] : (Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself] = [])[0] = "N-Action";
    (Array.isArray((Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself]) ? (Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself] : (Array.isArray(wA.actsimulnoe) ? wA.actsimulnoe : wA.actsimulnoe = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 36) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Swatchling";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 300;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 300;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 9;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 100;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Warmify";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Redder#2 stages";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Coldify";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Bluer#2 stages";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "Half-Warm";
    (Array.isArray((Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself]) ? (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] : (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] = [])[0] = "Redder#1 stage";
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "Half-Cold";
    (Array.isArray((Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself]) ? (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] : (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] = [])[0] = "Bluer#1 stage";
  }
  if (wA.monstertype[this.myself] === 37) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Cap'n";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 1;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Dance";
    if (wA.lang !== "ja") {
      (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[1] = 1;
    }
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Dance X";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "Dance";
    if (wA.lang !== "ja") {
      (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    }
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "Dance";
    if (wA.lang !== "ja") {
      (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
    }
  }
  if (wA.monstertype[this.myself] === 38) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "K_K";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 100;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Dance";
    if (wA.lang !== "ja") {
      (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[1] = 1;
    }
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Dance X";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "Dance";
    if (wA.lang !== "ja") {
      (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    }
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "Dance";
    if (wA.lang !== "ja") {
      (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
    }
  }
  if (wA.monstertype[this.myself] === 39) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Sweet";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 120;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 50;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Dance";
    if (wA.lang !== "ja") {
      (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[1] = 1;
    }
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Dance X";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "Dance";
    if (wA.lang !== "ja") {
      (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    }
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "Dance";
    if (wA.lang !== "ja") {
      (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
    }
  }
  if (wA.monstertype[this.myself] === 40) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Werewerewire";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 1753;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 1753;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 11;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 300;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 5;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "BeCold";
    (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "BeTough";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = " ";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "BeSweet";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = " ";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[3] = 0;
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 41) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "GrazeTest";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 1;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 100;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 100;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
  }
  if (wA.monstertype[this.myself] === 42) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Tasque Manager";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 1367;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 1367;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 10;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 200;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 5;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Order";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = " ";
    (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "OrderX";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = " ";
    (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 43) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Berdly";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 1985;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 1985;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 10;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 100;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Bump";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Ride#coaster";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 0;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "BumpX";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Everyone#rides#coaster";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "Bump";
    (Array.isArray((Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself]) ? (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] : (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] = [])[0] = "Ride#coaster";
    (Array.isArray((Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself]) ? (Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself] : (Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "Bump";
    (Array.isArray((Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself]) ? (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] : (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] = [])[0] = "Ride#coaster";
    (Array.isArray((Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself]) ? (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] : (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] = [])[0] = 0;
  }
  if (wA.monstertype[this.myself] === 44) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Mauswheel";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 1753;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 1753;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 10;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 200;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Catch";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "CatchX";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself]) ? (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] : (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] = [])[0] = " ";
    (Array.isArray((Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself]) ? (Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself] : (Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself]) ? (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] : (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] = [])[0] = " ";
    (Array.isArray((Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself]) ? (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] : (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] = [])[0] = 0;
  }
  if (wA.monstertype[this.myself] === 45) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Rouxls";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 600;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 600;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 9;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 200;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Take House";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = " ";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 0;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Take House 2";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = " ";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 34;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Take House 3";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = " ";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[3] = 59;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[4] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[4] = 3;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[4] = "Take House 4";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[4] = " ";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[4] = 80;
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = wN("stringset").call(this, "S-Action");
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "Distract";
    (Array.isArray((Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself]) ? (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] : (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] = [])[0] = " ";
    (Array.isArray((Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself]) ? (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] : (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] = [])[0] = 0;
  }
  if (wA.monstertype[this.myself] === 46) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Berdly";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 900;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 900;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 9;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 100;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = wN("scr_sideb_get_phase").call(this) > 0 ? "Glare" : "Play Dumb";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 5;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = wN("scr_sideb_get_phase").call(this) > 0 ? "Wake" : "Play Smart";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = " ";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself]) ? (Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself] : (Array.isArray(wA.canactnoe) ? wA.canactnoe : wA.canactnoe = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself]) ? (Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself] : (Array.isArray(wA.actnamenoe) ? wA.actnamenoe : wA.actnamenoe = [])[this.myself] = [])[0] = "N-Action";
  }
  if (wA.monstertype[this.myself] === 47) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Clover";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 1500;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 1500;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 11;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 5;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Topic";
    (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[1] = 0;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Guess#favorite#thing";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Topic(Long)";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Longer#time to#guess";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 48) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Queen";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 1510;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 1510;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 10;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    if (wQ(wd(wt.obj_berdlyplug_enemy))) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Loosen";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[0] = 0;
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[1] = 4;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "GroupLoosen";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = " ";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 0;
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Throw";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = " ";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 2;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "RedBuster";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = "Red#Damage";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[3] = 150;
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[4] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[4] = 3;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[4] = "DualHeal";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[4] = "Heals#everyone";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[4] = 125;
      (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
      (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "Loosen";
      (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
      (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "Loosen";
    } else {
      (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
      (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    }
  }
  if (wA.monstertype[this.myself] === 49) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Spamton";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 600;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 600;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = -50;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Deal";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "HealDeal";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "DEAL &#HEAL 60";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 125;
  }
  if (wA.monstertype[this.myself] === 50) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Spamton NEO";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 4809;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 4809;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 13;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    if (wN("scr_sideb_get_phase").call(this) > 2) {
      (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = -27;
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "X-Slash";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Physical#damage";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 62;
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "FriedPipis";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Heals#120 HP";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 80;
    } else {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Snap";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 0;
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 4;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "SnapAll";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
      (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
      (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "Snap";
      (Array.isArray((Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself]) ? (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] : (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] = [])[0] = "";
      (Array.isArray((Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself]) ? (Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself] : (Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself] = [])[0] = 0;
      (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[1] = "Supercharge";
      (Array.isArray((Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself]) ? (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] : (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] = [])[1] = "Charge#faster";
      (Array.isArray((Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself]) ? (Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself] : (Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself] = [])[1] = 80;
      (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
      (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "Snap";
      (Array.isArray((Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself]) ? (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] : (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] = [])[0] = "";
      (Array.isArray((Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself]) ? (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] : (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] = [])[0] = 0;
      (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[1] = 1;
      (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[1] = "FluffyGuard";
      (Array.isArray((Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself]) ? (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] : (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] = [])[1] = "Orbiting#shield";
      (Array.isArray((Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself]) ? (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] : (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] = [])[1] = 40;
    }
  }
  if (wA.monstertype[this.myself] === 51) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "GIGA Queen";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 4500;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 4500;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 7.5;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    if (wA.flag[220] === 2) {
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "FireMode";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Power#Attacks";
    }
    if (wA.flag[220] === 1) {
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "SwordMode";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Power up#each hit";
    }
    if (wA.flag[220] === 0) {
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "LaserMode";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Fast#Attacks";
    }
    if (wA.flag[220] === 3) {
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "DuckMode";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Sucky#Attacks";
    }
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[0] = 125;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "TurboDodge";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Better#dodge";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 62;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "SELF-FIX";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Heals#100HP";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 50;
  }
  if (wA.monstertype[this.myself] === 52) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Jigsaw Joe";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 1;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 1;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Shave";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = " ";
    (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[1] = 1;
  }
  if (wA.monstertype[this.myself] === 53) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Pipis";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 200;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 200;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 56) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Zapper";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 421;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 421;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 11;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 80;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "VolumeUp";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Bullets#give big#TP...";
    if (wA.encounterno === 135) {
      (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[1] = 4;
    }
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Mute";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 80;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Tire#enemies";
    if (wA.encounterno === 135) {
      (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[1] = 4;
    }
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "OffButton";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 4;
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[3] = 250;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = "Turn#it off";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 0;
  }
  if (wA.monstertype[this.myself] === 57) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Ribbick";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 421;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 421;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 11;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 72;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "CroakOn";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Mercy#by#mashing";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "CroakOnX";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 3;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Targets#all but#weaker";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself]) ? (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] : (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] = [])[0] = "50%#Mercy";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself]) ? (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] : (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] = [])[0] = "25%#and#Tired";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 59) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Pippins";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 421;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 421;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 8;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 30;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Bet";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Touch#Green#4 Mercy";
    (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Cheat";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "TIRE#Enemies,#but...";
    (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 62) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Guei";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 470;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 470;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 13;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 120;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Exercism";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "20% &#Delayed#TIRED";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Xercism";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "60% &#Delayed#TIRED";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 3;
    if (wE(wA.plot) >= 140 && wE(wA.plot) < 160 && wA.flag[868] === 0) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
      let w = "OldMan";
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "     " + w;
      if (wA.lang === "ja") {
        (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "  " + w;
      }
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = "I'm#old!";
    }
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 63) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Balthizard";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 470;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 470;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 14;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 130;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Shake";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Left &#Right=#Mercy";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "ShakeX";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Left &#Right=#Mercy";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "LightUp";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = "50% &#TIRE#others";
    if (wA.plot === 141) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[4] = 1;
      let Z = "OldMan";
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[4] = "     " + Z;
      if (wA.lang === "ja") {
        (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[4] = "  " + Z;
      }
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[4] = "I'm#old!";
    }
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 64) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Bibliox";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 470;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 470;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 14;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 125;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Proofread";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Fix typo#for#MERCY";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "EasyProof";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 3;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "More#time to#fix";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 65) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Mizzle";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 470;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 470;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 13;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 110;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Dazzle";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "35%#Mercy";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Embezzle";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "TIRE,#steal#item";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Nuzzle";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = "TIRE by#fluffy#move";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[4] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[4] = "LullabyX";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[4] = 4;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[4] = "Sing to#everyone#...?";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 66) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Wicabel";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 470;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 470;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 9;
    if (wA.char[2] === 3) {
      (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 13;
    }
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 160;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Tuning";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Good#timing=#mercy";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Tuningx2";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Tuning#twice";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 67) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Winglade";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 470;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 470;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 14;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 155;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Spin";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 0;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Spin#50%#mercy";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "SpinS";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "60%#Mercy#to all";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Whirl";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 4;
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[3] = 160;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = "SPARE#all!";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 68) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Organikk";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 470;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 470;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 11;
    if (wA.char[2] === 3) {
      (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 14;
    }
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 150;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Perform";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Musical#mercy";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Harmonize";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 2;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Musical,#touch#GREEN";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Harmonize";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 3;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = "Musical,#touch#GREEN";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 0;
  }
  if (wA.monstertype[this.myself] === 69) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "HolywaterCooler";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 1740;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 1740;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 14;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 500;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 4;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Flirt";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "???";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "BegForMercy";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "???";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 4;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Chat";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = "???";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 105) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Hammer of Justice";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 1350;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 1350;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 14;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 0;
  }
  if (wA.monstertype[this.myself] === 106) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "???";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 1350;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 1350;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 14;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Talk";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "???";
  }
  if (wA.monstertype[this.myself] === 107) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Jackenstein";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 1350;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 1350;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 14;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Consider#strategy";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Unleash";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Reveal#weakness";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 150;
    if (wQ(wN("scr_debug").call(this)) && wZ === "room_battletest") {
      (Array.isArray(wA.tempflag) ? wA.tempflag : wA.tempflag = [])[100] = 0;
    }
    if (wA.tempflag[100] > 0) {
      (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
      (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "ScaredyCat";
      (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Def.Down#Speed Up";
      (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 5;
    }
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "TreasureHunt";
    (Array.isArray((Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself]) ? (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] : (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] = [])[0] = "Easier#pickup";
    (Array.isArray((Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself]) ? (Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself] : (Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself] = [])[0] = 5;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "LightUp";
    (Array.isArray((Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself]) ? (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] : (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] = [])[0] = "Increase#light";
    (Array.isArray((Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself]) ? (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] : (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] = [])[0] = 2.5;
  }
  if (wA.monstertype[this.myself] === 108) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Titan";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 21000;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 21000;
    wV.with("obj_titan_enemy", ZR => {
      ZR.hpprev = wA.monsterhp[ZR.myself];
    });
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 18;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Consider#strategy";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Brighten";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Powerup#light";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 10;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[1] = 4;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "DualHeal";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 40;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Heal#party";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Unleash";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 0;
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[3] = 200;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = "Reveal#weakness";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "WakeKris";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself]) ? (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] : (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] = [])[0] = "Revive#Kris";
    (Array.isArray((Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself]) ? (Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself] : (Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself] = [])[0] = 40;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "ReviveKris";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself]) ? (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] : (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] = [])[0] = "Revive#Kris";
    (Array.isArray((Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself]) ? (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] : (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] = [])[0] = 40;
  }
  if (wA.monstertype[this.myself] === 109) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Titan Spawn";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 3000;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 3000;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 18;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Consider#strategy";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Brighten";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Powerup#light";
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[1] = 10;
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[1] = 4;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "DualHeal";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[2] = 4;
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[2] = 40;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Heal#party";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[3] = "Banish";
    (Array.isArray((Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself]) ? (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] : (Array.isArray(wA.actactor) ? wA.actactor : wA.actactor = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself]) ? (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] : (Array.isArray(wA.actcost) ? wA.actcost : wA.actcost = [])[this.myself] = [])[3] = 160;
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[3] = "Defeat#enemy";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "WakeKris";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself]) ? (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] : (Array.isArray(wA.actdescsus) ? wA.actdescsus : wA.actdescsus = [])[this.myself] = [])[0] = "Revive#Kris";
    (Array.isArray((Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself]) ? (Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself] : (Array.isArray(wA.actcostsus) ? wA.actcostsus : wA.actcostsus = [])[this.myself] = [])[0] = 40;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "ReviveKris";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 0;
    (Array.isArray((Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself]) ? (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] : (Array.isArray(wA.actdescral) ? wA.actdescral : wA.actdescral = [])[this.myself] = [])[0] = "Revive#Kris";
    (Array.isArray((Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself]) ? (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] : (Array.isArray(wA.actcostral) ? wA.actcostral : wA.actcostral = [])[this.myself] = [])[0] = 40;
  }
  if (wA.monstertype[this.myself] === 110) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Elnina";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 4440;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 4440;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 16;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Umbrella";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Blocks#bullets";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "WarmHat";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Blocks#bullets";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 111) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Lanino";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 4440;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 4440;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 16;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 0;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 0;
    (Array.isArray(wA.mercymod) ? wA.mercymod : wA.mercymod = [])[this.myself] = 0;
    (Array.isArray(wA.mercymax) ? wA.mercymax : wA.mercymax = [])[this.myself] = 100;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Check";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[0] = "Useless#analysis";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "Telescope";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[1] = "Blocks#bullets";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "Sunglasses";
    (Array.isArray((Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself]) ? (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] : (Array.isArray(wA.actdesc) ? wA.actdesc : wA.actdesc = [])[this.myself] = [])[2] = "Blocks#bullets";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "S-Action";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "R-Action";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[0] = 1;
  }
  if (wA.monstertype[this.myself] === 500) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = wN("stringset").call(this, "Multiboss Example");
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 130;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 130;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 7;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 20;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Taunt";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "SimuFlatter";
    (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "CoolDance";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[2] = "SimuFlatter";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[3] = "Loner";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "CoolDance";
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[2] = "SimuFlatter";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[2] = 0;
  }
  if (wA.monstertype[this.myself] === 501) {
    (Array.isArray(wA.monstername) ? wA.monstername : wA.monstername = [])[this.myself] = "Multiboss C Example";
    (Array.isArray(wA.monstermaxhp) ? wA.monstermaxhp : wA.monstermaxhp = [])[this.myself] = 130;
    (Array.isArray(wA.monsterhp) ? wA.monsterhp : wA.monsterhp = [])[this.myself] = 130;
    (Array.isArray(wA.monsterat) ? wA.monsterat : wA.monsterat = [])[this.myself] = 7;
    (Array.isArray(wA.monsterdf) ? wA.monsterdf : wA.monsterdf = [])[this.myself] = 0;
    (Array.isArray(wA.monsterexp) ? wA.monsterexp : wA.monsterexp = [])[this.myself] = 0;
    (Array.isArray(wA.monstergold) ? wA.monstergold : wA.monstergold = [])[this.myself] = 20;
    (Array.isArray(wA.sparepoint) ? wA.sparepoint : wA.sparepoint = [])[this.myself] = 10;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[0] = "Taunt";
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself]) ? (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] : (Array.isArray(wA.canact) ? wA.canact : wA.canact = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself]) ? (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] : (Array.isArray(wA.actname) ? wA.actname : wA.actname = [])[this.myself] = [])[2] = "SimuFlatter";
    (Array.isArray((Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself]) ? (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] : (Array.isArray(wA.actsimul) ? wA.actsimul : wA.actsimul = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[0] = "CoolDance";
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[2] = "SimuFlatter";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[2] = 0;
    (Array.isArray((Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself]) ? (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] : (Array.isArray(wA.canactsus) ? wA.canactsus : wA.canactsus = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself]) ? (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] : (Array.isArray(wA.actnamesus) ? wA.actnamesus : wA.actnamesus = [])[this.myself] = [])[3] = "Loner";
    (Array.isArray((Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself]) ? (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] : (Array.isArray(wA.actsimulsus) ? wA.actsimulsus : wA.actsimulsus = [])[this.myself] = [])[3] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[0] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[0] = "CoolDance";
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[1] = "SimuDance";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[1] = 1;
    (Array.isArray((Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself]) ? (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] : (Array.isArray(wA.canactral) ? wA.canactral : wA.canactral = [])[this.myself] = [])[2] = 1;
    (Array.isArray((Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself]) ? (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] : (Array.isArray(wA.actnameral) ? wA.actnameral : wA.actnameral = [])[this.myself] = [])[2] = "SimuFlatter";
    (Array.isArray((Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself]) ? (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] : (Array.isArray(wA.actsimulral) ? wA.actsimulral : wA.actsimulral = [])[this.myself] = [])[2] = 0;
  }
}
wb(scr_monstersetup, "scr_monstersetup");
wR();
var wi = {
  12: "checkers",
  175: "titan_battle"
};
var wz = {
  160: "plain",
  777: "plain"
};
var wH = "battle";
wR();
w9(O, 4);
var wK = 4;
var first = wb(w => wV.first(w), "first");
var wF = wb(w => wV.exists(w), "ex");
var wP = {
  bcDefendTP: wb(() => 40, "bcDefendTP"),
  heroDamage: wb((w, Z) => Z, "heroDamage"),
  heroHitTP: wb(w => Math.round(w.points / 10), "heroHitTP"),
  heroDraw: wb((w, Z, ZR) => ZR(), "heroDraw"),
  tensionCap: wb(() => null, "tensionCap"),
  actNameColor: wb((w, Z, ZR) => ZR, "actNameColor")
};
function chain(w, Z) {
  let ZR = wB[w];
  wB[w] = function (...Zp) {
    if (wA.chapter === wK) {
      return Z(...Zp);
    } else if (typeof ZR == "function") {
      return ZR(...Zp);
    } else if (wP[w]) {
      return wP[w](...Zp);
    } else {
      return false;
    }
  };
}
wb(chain, "chain");
chain("bcCreate", w => {
  w.questionmercy = [0, 0, 0];
  w.soundbattle = wA.encounterno === 176 || wA.encounterno === 186;
  w.hidestar = 0;
  if (wA.encounterno === 160 || wA.encounterno === 176 || wA.encounterno === 186) {
    w.questionmercy[0] = 1;
  }
  Object.assign(w, {
    disablesusieattack: 0,
    disableitembutton: false,
    incenseturtlegersoncon: 0,
    gueigersoncon: 0,
    skipsusieturn: false,
    skipmonsterselection: false,
    facevar: 0,
    dancing_jackolantern_con: 0,
    dancing_jackolantern_alpha: 1,
    dancing_jackolantern_index: 0,
    dancing_jackolantern_timer: 0,
    gersonend: false,
    autoselect: false,
    rabbickvar: wk(0, 1, 2)
  });
  if (wA.encounterno === 160 && v && !wF("obj_dw_church_arena_bg")) {
    wC(0, 0, v);
  }
  if (wA.encounterno === 160 && l && !wF("obj_dw_church_arena")) {
    let Z = wC(0, 0, l);
    if (Z) {
      Z.visible = false;
    }
  }
  return false;
});
chain("bcStepGate", w => {
  for (let ZD of wV.list) {
    if (!ZD.destroyed && !!ZD.constructor && ZD.constructor.name === "obj_balthizard_enemy" && (ZD.gersonevent === true || ZD.gersonevent === 1) && ZD.gersonintro < 2) {
      return true;
    }
  }
  let Z = first("obj_holywatercooler_enemy");
  if (Z && Z.introcon > 0) {
    return true;
  }
  if (w.soundbattle === true) {
    let Zn = first("obj_sound_of_justice_enemy");
    if (Zn && Zn.init === 0) {
      return true;
    }
    if (wA.myfight === 0 && wA.bmenuno === 0 && !wF("obj_herokris") && Zn && Zn.phase === 1) {
      if (wA.hp[2] <= wA.maxhp[2] * 0.5 && wA.tension >= ((wA.spellcost[2] || [])[1] ?? 999)) {
        wA.bmenuno = 0;
        wA.bmenucoord[2][wA.charturn] = 1;
        wA.chartarget[wA.charturn] = wA.bmenucoord[wA.bmenuno][wA.charturn];
        w2(wG(11).cost);
        return true;
      }
      w0();
    }
    if (wA.hp[2] < 1 || Zn && w.victory === 0 && (w.selnoise === 1 && (wX("snd_select"), w.selnoise = 0), Zn.kris_phase2_try_attack_con > 0 || Zn.susie_phase2_try_attack_con > 0 || Zn.intermission1_con > 0 || Zn.endingcon > 0 || Zn.introcon > 0)) {
      return true;
    }
  }
  let ZR = first("obj_hammer_of_justice_enemy");
  if (!ZR || ZR.endcon !== 5 || !(ZR.endtimer >= 105)) {
    if (ZR && ZR.endcon > 0 && ZR.endtimer > 0 && ZR.end_cutscene_version === 1) {
      return true;
    }
    if (ZR && ZR.endcon > 1 && ZR.end_cutscene_version === 1) {
      return true;
    }
  }
  let Zp = first("obj_elnina_lanino_rematch_controller");
  if (Zp && Zp.endcon > 0) {
    return true;
  }
  if (Zp && Zp.endcon === 0 && wA.myfight === 0 && wA.mnfight === 0) {
    let ZO = first("obj_lanino_rematch_enemy");
    if (ZO && wF("obj_elnina_rematch_enemy") && wA.mercymod[ZO.myself] === 100) {
      return true;
    }
  }
  let Zg = first("obj_titan_enemy");
  return !!Zg && !!Zg.gerson && Zg.gerson.sprite_index === "spr_gerson_item" && wA.mnfight !== 2;
});
chain("bcDefendTP", () => wF("obj_titan_spawn_enemy") || wF("obj_titan_enemy") || wF("obj_jackenstein_enemy") || wF("obj_sound_of_justice_enemy") ? 5 : 40);
function healAmountModify(w, Z) {
  let ZR = wA.char[Z];
  let Zp = 0;
  if ((wA.chararmor1 || [])[ZR] === 26) {
    Zp += Math.ceil(w / 8);
  }
  if ((wA.chararmor2 || [])[ZR] === 26) {
    Zp += Math.ceil(w / 8);
  }
  return w + Zp;
}
wb(healAmountModify, "healAmountModify");
function healFx4(w, Z) {
  let ZR = wA.charinstance && wA.charinstance[w];
  if (!ZR || ZR.destroyed) {
    return;
  }
  ZR.healnum = Z;
  let Zp = wC(ZR.x, ZR.y, w4);
  Zp.target = ZR;
  let Zg = wC(ZR.x, ZR.y + ZR.myheight - 24 - ZR.tu * 20, w3);
  Zg.delay = 8;
  Zg.type = 3;
  Zg.damage = Z;
  if (wA.hp[wA.char[w]] >= wA.maxhp[wA.char[w]]) {
    Zg.specialmessage = 3;
  }
  ZR.tu++;
}
wb(healFx4, "healFx4");
function retargetSpell(w) {
  let Z = 0;
  if (w === 0 && wA.monster[0] === 0) {
    w = 1;
  }
  if (w === 1 && wA.monster[1] === 0) {
    w = 2;
  }
  if (w === 2) {
    if (wA.monster[2] === 0) {
      w = 3;
    }
    if (w === 3 && wA.monster[0] === 1) {
      w = 0;
    }
    if (w === 3 && wA.monster[1] === 1) {
      w = 1;
    }
    if (w === 3) {
      Z = 1;
    }
  }
  return [w, Z];
}
wb(retargetSpell, "retargetSpell");
var dualhealScale = wb(w => w === 1 ? 1.5 : w === 2 ? 1 : w === 3 ? 0.8 : w === 4 ? 0.3 : 0.2, "dualhealScale");
{
  let uJ = wB.chapterSpell;
  wB.chapterSpell = (w, Z) => {
    if (wA.chapter !== wK) {
      if (typeof uJ == "function") {
        return uJ(w, Z);
      } else {
        return false;
      }
    }
    let ZR = wA.chartarget[Z];
    let Zp = first("obj_hammer_of_justice_enemy");
    if (Zp && w !== 4 && w !== 5 && w !== 11 && w !== 100) {
      wA.spelldelay = 10;
      if (Zp.justice_item < 1) {
        Zp.justice_item++;
      }
      wA.spelldelay = 300;
      return true;
    }
    if (w === 2) {
      wA.spelldelay = 10;
      let ZD = Math.ceil(healAmountModify(wA.battlemag[Z] * 5, Z));
      wy(ZR, ZD);
      healFx4(ZR, ZD);
      wA.spelldelay = 15;
      return true;
    }
    if (w === 4) {
      let Zn = 0;
      wA.spelldelay = 30;
      if (wA.monster[ZR] === 0) {
        [ZR, Zn] = retargetSpell(ZR);
      }
      if (Zn === 0) {
        wA.spelldelay = 70;
        let ZO = Math.ceil(wA.battlemag[Z] * 5 + wA.battleat[Z] * 11 - wA.monsterdf[ZR] * 3);
        let ZM = first("obj_titan_enemy");
        if (ZM) {
          if (ZM.unleashed && ZM.drawstate !== "defense end" && ZM.drawstate !== "defense" && ZM.starshootcon > 0 || ZM.drawstate === "crack") {
            ZO = Math.ceil(ZO * 5 * ZM.unleashmultiplier);
          } else if (ZM.drawstate === "defense end" || ZM.drawstate === "defense") {
            ZO = Math.ceil(ZO * 0.1);
          } else {
            ZO = Math.ceil(ZO * 0.5);
          }
        } else if (wF("obj_titan_spawn_enemy")) {
          ZO = Math.ceil(ZO * 0.5);
        }
        if (wA.automiss && wA.automiss[ZR] === 1) {
          ZO = 0;
        }
        let Zo = first("obj_herosusie");
        let Zt = wC(Zo ? Zo.x : 90, Zo ? Zo.y : 150, w5);
        Zt.damage = ZO;
        Zt.star = ZR;
        Zt.caster = Z;
        Zt.target = wA.monsterinstance[ZR];
        if (Zp && Zp.justice_rudebuster < 1) {
          Zp.justice_rudebuster++;
        }
      }
      return true;
    }
    if (w === 6) {
      wA.spelldelay = 10;
      let ZN = Math.round(healAmountModify((wA.battlemag[1] + wA.battlemag[2]) * 3.5, Z));
      if (wA.flag[1569] === 1) {
        ZN = Math.round((wA.battlemag[1] + wA.battlemag[2]) * 6);
      }
      for (let ZE of ["obj_titan_enemy", "obj_titan_spawn_enemy"]) {
        let Zd = first(ZE);
        if (Zd) {
          Zd.dualhealcount = (Zd.dualhealcount || 0) + 1;
          ZN = Math.round(ZN * dualhealScale(Zd.dualhealcount));
        }
      }
      for (let ZS = 0; ZS < 3; ZS++) {
        if (wA.charinstance && wA.charinstance[ZS]) {
          wy(ZS, ZN);
          healFx4(ZS, ZN);
        }
      }
      wA.spelldelay = 15;
      return true;
    }
    if (!(w > 10) || !(w < 100) || typeof b != "function") {
      return false;
    }
    let Zg = wA.charinstance && wA.charinstance[Z] || {};
    b.call(Zg, w, Z);
    return true;
  };
}
chain("bcDrawTop", (w, Z) => {
  if (!(w.dancing_jackolantern_con > 0)) {
    return false;
  }
  w.dancing_jackolantern_timer++;
  w.dancing_jackolantern_index += 0.3333333333333333;
  let ZR = first("obj_ghosthouse_jackolantern_merciful");
  if (wA.turntimer > 0 && w.dancing_jackolantern_alpha > 0 || ZR && ZR.end_con === 1) {
    w.dancing_jackolantern_alpha -= 0.1;
    let Zg = first("obj_jackenstein_enemy");
    if (Math.abs(w.dancing_jackolantern_alpha) < 0.00001 && Zg && Zg.phaseturn >= 6) {
      w.dancing_jackolantern_con = 2;
    }
    if (Math.abs(w.dancing_jackolantern_alpha) < 0.00001 && Zg && Zg.phaseturn >= 8) {
      w.dancing_jackolantern_con = 3;
    }
  }
  if (wA.turntimer < 1 && w.dancing_jackolantern_alpha < 1) {
    w.dancing_jackolantern_alpha += 0.1;
  }
  let Zp = {
    1: [768, 128, 6],
    2: [711, 71, 10],
    3: [686, 46, 15]
  }[w.dancing_jackolantern_con];
  if (Zp) {
    let [ZD, Zn, ZO] = Zp;
    if (w.dancing_jackolantern_timer > ZD) {
      w.dancing_jackolantern_timer -= Zn;
    }
    for (let ZM = 0; ZM < ZO; ZM++) {
      Z.draw_sprite_ext("spr_dancing_lantern", w.dancing_jackolantern_index, 640 + ZM * Zn - w.dancing_jackolantern_timer, 272, 2, 2, 0, "#ffffff", w.dancing_jackolantern_alpha);
    }
  }
  return false;
});
{
  let uW = wB.chapterSpellinfo;
  wB.chapterSpellinfo = w => wA.chapter !== wK ? typeof uW == "function" ? uW(w) : null : wG(w);
}
chain("techConfirm", (w, Z, ZR, Zp) => {
  if (Zp === "before") {
    if ((wF("obj_titan_spawn_enemy") || wF("obj_titan_enemy") || wF("obj_sound_of_justice_enemy")) && wA.charturn > 0 && ZR === 0) {
      w.skipmonsterselection = 1;
    }
    return false;
  }
  let Zg = first("obj_sound_of_justice_enemy");
  if (Zg) {
    if (ZR === 0) {
      Zg.susie_phase2_try_attack_con = 1;
    }
    if (ZR === 1) {
      Zg.endingcon = 1;
    }
    w0();
    return true;
  } else {
    return false;
  }
});
var armorCount = wb(w => {
  let Z = 0;
  for (let ZR = 0; ZR < 3; ZR++) {
    let Zp = wA.char[ZR];
    if (Zp) {
      if ((wA.chararmor1 || [])[Zp] === w) {
        Z++;
      }
      if ((wA.chararmor2 || [])[Zp] === w) {
        Z++;
      }
    }
  }
  return Z;
}, "armorCount");
chain("bcVictoryMsg", w => {
  let Z = wA.monstergold[3];
  if (wA.charweapon[1] === 53) {
    Z += Math.floor(Z / 20);
  }
  Z *= 1 + armorCount(8) * 0.05;
  Z *= 1 + armorCount(21) * 0.3;
  Z -= Z * (armorCount(54) * 0.1);
  Z = Math.floor(Z);
  if (wA.flag[37] === 1) {
    Z = 0;
  }
  if (Z !== wA.monstergold[3]) {
    wA.monstergold[3] = Z;
    wA.msg[0] = "* You won^1!&* Got " + wA.monsterexp[3] + " EXP and " + wA.monstergold[3] + " D$./%";
  }
  if (w.gersonend === true) {
    wA.msg[0] = "* You won^1!&* Got " + wA.monsterexp[3] + " EXP and " + wA.monstergold[3] + " D$.&* Susie's heal power increased!/%";
  }
  return false;
});
chain("attackpressHit", w => {
  if (wF("obj_jackenstein_enemy")) {
    w.points[0] = 0;
    w.points[1] = 0;
    w.points[2] = 0;
    wj(5);
  }
  let Z = first("obj_hammer_of_justice_enemy");
  if (Z) {
    w.points[0] = 0;
    Z.state = 13;
    Z.sprite_index = "spr_gerson_teleport";
    Z.image_xscale = 3;
    Z.image_yscale = 3;
    Z.image_speed = 1;
    Z.x += 40;
    Z.y += 30;
    W("motor_swing_down", 1.4);
  }
  let ZR = first("obj_sound_of_justice_enemy");
  if (ZR) {
    w.points[0] = 0;
    w.points[1] = 0;
    if (ZR.state !== 13) {
      ZR.state = 13;
      ZR.sprite_index = "spr_gerson_teleport";
      ZR.image_xscale = 3;
      ZR.image_yscale = 3;
      ZR.image_speed = 1;
      ZR.x = ZR.xstart + 56;
      ZR.y = ZR.ystart + 70;
      W("motor_swing_down", 1.4);
    }
  }
  return false;
});
var krisSword = wb(w => w.is && w.is("obj_herokris") && (wA.charweapon[1] === 26 || wA.charweapon[1] === 11), "krisSword");
chain("heroDamage", (w, Z) => {
  let ZR = first("obj_titan_enemy");
  let Zp = ZR && (ZR.unleashed && ZR.drawstate !== "defense end" && ZR.drawstate !== "defense" && ZR.starshootcon > 0 || ZR.drawstate === "crack");
  let Zg = ZR && (ZR.drawstate === "defense end" || ZR.drawstate === "defense");
  if (krisSword(w)) {
    if (ZR) {
      return Math.ceil(Zp ? Z * 10 * ZR.unleashmultiplier : Zg ? Z * 0.1 : Z * 3);
    } else if (wF("obj_titan_spawn_enemy")) {
      return Math.ceil(Z * 10);
    } else {
      return Z;
    }
  } else if (ZR) {
    return Math.ceil(Zp ? Z * 5 * ZR.unleashmultiplier : Zg ? Z * 0.1 : Z * 0.5);
  } else {
    return Z;
  }
});
chain("heroHitTP", w => {
  let Z = wF("obj_titan_enemy") || wF("obj_titan_spawn_enemy") || wF("obj_jackenstein_enemy") || wF("obj_sound_of_justice_enemy");
  return Math.round(w.points / (Z ? 26 : 10));
});
chain("tpBlueBar", () => wF("obj_jackenstein_enemy") || wF("obj_sound_of_justice_enemy") || wF("obj_titan_enemy") || wF("obj_titan_spawn_enemy"));
var inFight = wb((...w) => (wA.monsterinstancetype || []).some(Z => Z && w.includes(Z.name)), "inFight");
chain("heroSetup", w => {
  w.showdarkness = true;
  if (w.is && w.is("obj_herosusie") && inFight("obj_titan_enemy", "obj_titan_spawn_enemy")) {
    w.normalsprite = "spr_susier_dark_unhappy";
    w.idlesprite = wA.charweapon[2] === 0 ? "spr_susieb_idle_unarmed_unhappy" : "spr_susieb_idle_serious";
    w.defendsprite = "spr_susieb_defend_unhappy";
    w.actreadysprite = "spr_susieb_actready";
    w.attacksprite = "spr_susieb_attack_serious";
    w.itemsprite = "spr_susieb_item_unhappy";
    w.itemreadysprite = "spr_susieb_itemready_unhappy";
    w.spellreadysprite = "spr_susieb_spellready_unhappy";
    w.spellsprite = "spr_susieb_spell_unhappy";
    w.defeatsprite = "spr_susie_dw_fell";
  }
  return false;
});
chain("heroDraw", (w, Z, ZR) => {
  let Zp = w.showdarkness && (wA.encounterno === 176 || wA.encounterno === 186);
  if (Zp) {
    wa(true, "#000000");
  }
  try {
    ZR();
  } finally {
    if (Zp) {
      wa(false, "#000000");
    }
  }
});
chain("bcDamageNoise", () => {
  let w = first("obj_titan_enemy");
  if (w) {
    if (w.drawstate === "defense" || w.drawstate === "defense end") {
      wX("snd_bump");
      return true;
    } else if (w.drawstate === "idle" && w.starshootcon > 0 || w.drawstate === "crack") {
      w.redflashtimer = 10;
      wX("snd_damage");
      wX("snd_queen_punched_lower_heavy");
      C();
      wV.with("obj_shake", Z => {
        Z.shakex = 4;
        Z.shakey = 4;
      });
      return true;
    } else if ((w.drawstate === "idle" || w.drawstate === "crack2") && w.starshootcon === 0) {
      V("snd_metal_hit_reverb", 1, 0.5);
      w.playmeatsoundcon = 1;
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
chain("bcDrawEnd", (w, Z) => {
  if (wA.bmenuno !== 9 || wA.myfight !== 0) {
    return false;
  }
  if (wF("obj_balthizard_enemy") && wA.charturn === 0 && w.incenseturtlegersoncon === 1 && wA.plot === 141) {
    Z.draw_sprite_ext("spr_gerson_acticon", 0, 44, 450, 1, 1, 0, "#ffffff", 1);
  }
  if (wF("obj_guei_enemy") && wA.plot >= 140 && wA.plot <= 160 && wA.flag[868] === 0 && w.gueigersoncon === 1) {
    Z.draw_sprite_ext("spr_gerson_acticon", 0, 274, 422, 1, 1, 0, "#ffffff", 1);
  }
  let ZR = first("obj_titan_enemy");
  if (ZR && ZR.dualbusterenabled && !ZR.susiesideaenabled) {
    Z.draw_sprite_ext("spr_gerson_acticon", 0, 82, 386, 1, 1, 0, "#ffffff", 1);
  }
  return false;
});
chain("tensionCap", () => null);
chain("actNameColor", (w, Z, ZR) => ZR);
chain("heroAttackStart", w => {
  if (wF("obj_sound_of_justice_enemy") && N) {
    let ZR = w.is("obj_herokris");
    let Zp = w.is("obj_herosusie");
    if (ZR || Zp) {
      let Zg = wC(ZR ? w.x + 30 : 140, ZR ? w.y + 48 : 198, N);
      Zg.type = 2;
      Zg.version = 1;
      Zg.color = ZR ? "#00ffff" : "#ff00ff";
      Zg.colorstart = ZR ? 16776960 : 16711935;
    }
  }
  let Z = first("obj_hammer_of_justice_enemy");
  if (Z) {
    Z.haveattacked = true;
  }
  return false;
});
chain("heroItemTick", w => {
  if (wF("obj_hammer_of_justice_enemy") && w.attacktimer === 2 && g) {
    let Z = first("obj_heroparent");
    wC((Z ? Z.x : w.x) + 63, (Z ? Z.y : w.y) + 60, g);
  }
  return false;
});
chain("chapterNexthero", w => {
  w.moveswapped = 0;
  let Z = wA.charturn;
  let ZR = 0;
  if (wA.charturn === 0) {
    ZR = 1;
    if (wA.charmove[1] === 1 && w7(1) && !w.skipsusieturn || wF("obj_sound_of_justice_enemy") && wF("obj_herokris")) {
      wA.charturn = 1;
    } else if (wA.charmove[2] === 1 && w7(2)) {
      wA.charturn = 2;
    } else {
      w1();
    }
  }
  if (wA.charturn === 1 && ZR === 0) {
    ZR = 1;
    if (w7(2) && (wA.acting[1] === 0 || wL() === 1)) {
      wA.charturn = 2;
    } else {
      w1();
    }
  }
  if (wA.charturn === 2 && ZR === 0) {
    w1();
  }
  if (ZR === 1) {
    wA.bmenuno = 0;
  }
  if (wA.charturn > 0 && wA.charturn < 3 && (wA.temptension[wA.charturn] = wA.tension, w.tempitem)) {
    for (let Zp = 0; Zp < 12; Zp++) {
      w.tempitem[Zp][wA.charturn] = w.tempitem[Zp][Z];
    }
  }
  if (w.disablesusieattack === 1 && wA.charturn === 1) {
    wA.bmenucoord[0][wA.charturn] = 1;
  }
  return true;
});
chain("chapterEndturn", w => typeof D != "function" ? false : (D.call(w), true));
chain("chapterAttackphase", w => typeof n != "function" ? false : (n.call(w), true));
chain("heroPoseEnd", w => {
  let Z = w.sprite_index && wx[w.sprite_index];
  let ZR = Z && Z.frames === 1 ? w.image_index % 1 : w.image_index;
  if (!w.maxframes || ZR + w.image_speed < w.maxframes) {
    return false;
  } else {
    w.state = 0;
    w.hurt = 0;
    w.attacktimer = 0;
    w.maxframes = 0;
    wA.faceaction[w.myself] = 0;
    return true;
  }
});
chain("heroSpellTick", (w, Z) => {
  let ZR = first("obj_titan_enemy");
  if (Z === "spr_susieb_spell" && ZR && ZR.gerson && wF("obj_rudebuster_anim")) {
    ZR.gerson.sprite_index = "spr_gerson_rudebuster_ready2";
    ZR.gerson.image_index = 0;
  }
  return false;
});
chain("heroAttackSprite", (w, Z) => {
  let ZR = first("obj_titan_enemy");
  if (!ZR || ZR.drawstate !== "defense" && ZR.drawstate !== "defense end" || !w.is("obj_herokris") && !w.is("obj_herosusie")) {
    return false;
  } else {
    Z.sprite_index = "spr_attack_slap1_purple";
    Z.maxindex = 4;
    Z.image_speed = 0.5;
    return true;
  }
});
chain("bcSkipMenu", w => {
  if (w.disablesusieattack !== 1 || wA.charturn !== 1) {
    return false;
  }
  if (wA.autoplay && wA.bmenuno === 2) {
    let ZR = wA.battlespell[1] || [];
    let Zp = wA.battlespellcost[1] || [];
    let Zg = -1;
    for (let ZD = 0; ZD < 12; ZD++) {
      if (ZR[ZD] !== 0 && ZR[ZD] !== undefined && (Zp[ZD] ?? 0) <= wA.tension) {
        Zg = ZD;
      }
    }
    if (Zg >= 0) {
      wA.bmenucoord[2][1] = Zg;
    } else {
      wA.tensionselect = 0;
      wA.bmenuno = 0;
      wA.bmenucoord[0][1] = 4;
      return true;
    }
  }
  if (wA.bmenuno !== 0) {
    return false;
  }
  let Z = wA.bmenucoord[0][1];
  w.menuStep();
  if (wA.charturn === 1 && wA.bmenuno === 0 && wA.bmenucoord[0][1] === 0 && Z !== 0) {
    wA.bmenucoord[0][1] = Z === 4 ? 1 : 4;
  }
  return true;
});
chain("itemTargetSkip", () => {
  let w = first("obj_titan_enemy");
  if (w && w.acting === 1) {
    return true;
  }
  let Z = false;
  let ZR = false;
  wV.with("obj_balthizard_enemy", Zg => {
    if (Zg.acting === 5 && wA.charturn === 1) {
      Z = true;
    }
  });
  let Zp = first("obj_guei_enemy");
  wV.with("obj_guei_enemy", Zg => {
    if (Zg.acting === 4 && Zp && Zp.gersonactcount === 1) {
      ZR = true;
    }
  });
  if (Z && wA.plot === 141) {
    return true;
  } else {
    return ZR;
  }
});
{
  let uV = new Set(["constructor", "create", "cleanUp"]);
  let clockFrom = wb(() => Math.round((wV.frame || 0) * 1000 / 30), "clockFrom");
  if (typeof wu == "function") {
    for (let uk of Object.values(O)) {
      if (typeof uk != "function" || !uk.prototype) {
        continue;
      }
      let uq = uk.prototype;
      for (let uC of Object.getOwnPropertyNames(uq)) {
        if (uV.has(uC)) {
          continue;
        }
        let uI = Object.getOwnPropertyDescriptor(uq, uC);
        if (!uI || typeof uI.value != "function" || !String(uI.value).includes("current_time")) {
          continue;
        }
        let uQ = uI.value;
        uq[uC] = function (...w) {
          wu(clockFrom());
          try {
            return uQ.apply(this, w);
          } finally {
            wu(0);
          }
        };
      }
    }
  }
}
if (Y) {
  let ub = Y.prototype.step;
  if (typeof ub != "function") {
    throw new Error("ch4_engine: obj_titan_enemy has no step() to wrap");
  }
  Y.prototype.step = function () {
    ub.call(this);
    if (!wA.battleover && this.acting === 1.25 && !!(this.endingtimer >= 210)) {
      if (!(wV.number("obj_dw_churchc_insidetitan") > 0)) {
        wA.battleover = "win";
      }
    }
  };
}
{
  let hjOf = wb(() => first("obj_hammer_of_justice_enemy"), "hjOf");
  let live = wb(() => wA.chapter === wK && !!hjOf(), "live");
  let uR = w6.prototype;
  let up = uR.create;
  let ug = uR.step;
  let uD = uR.draw;
  uR.create = function (...w) {
    let Z = up.apply(this, w);
    this.hurtflashalpha = 0;
    this.gersonswingtimer = 0;
    this.gersonoffset = 0;
    this.speedmax = 24;
    let ZR = live() ? hjOf() : null;
    if (ZR) {
      if (ZR.rudebusterhitcount !== ZR.rudebusterhitcountmax) {
        this.speedmax = 6;
      }
      this.gersonoffset = -10;
      this.x += 20;
      this.y -= 20;
    }
    return Z;
  };
  uR.step = function (...w) {
    let Z = live() ? hjOf() : null;
    if (!Z) {
      return ug.apply(this, w);
    }
    if (typeof this.target == "number" || !this.target) {
      this.target = Z;
    }
    let ZR = this.target;
    if (this.image_alpha < 1) {
      this.image_alpha += 0.25;
    } else {
      this.image_alpha = 1;
    }
    if (this.t === 0) {
      let Zp = ZR.sprite_width || 0;
      let Zg = ZR.sprite_height || 0;
      this.targetx = 200 + ZR.x + Zp / 2;
      this.targety = ZR.y + Zg / 2;
      this.cx = this.targetx;
      this.cy = this.targety;
      this.direction = wq(this.x, this.y, this.cx, this.cy) - 20 + this.gersonoffset;
      this.speed = this.speedmax;
      this.friction = -1.5;
      if (Z.rudebusterhitcount === Z.rudebusterhitcountmax) {
        this.friction = -5;
        this.targety = ZR.y - 60 + Zg / 2;
      }
      this.image_angle = this.direction;
      if (this.red === 1) {
        this.sprite_index = "spr_rudebuster_beam_red";
        this.image_xscale = 2.5;
        this.image_yscale = 2.5;
      }
    }
    if (Z.rudebusterhitcount < Z.rudebusterhitcountmax && this.explode === 0) {
      this.gersonswingtimer++;
      if (this.gersonswingtimer === 10) {
        {
          let ZD = wx.spr_gerson_smash_stop;
          if (ZD) {
            ZD.ox = 25;
            ZD.oy = 40;
          }
        }
        Z.sprite_index = "spr_gerson_smash_stop";
        Z.image_index = 0;
        Z.state = 10;
        wA.spelldelay += 40;
      }
      if (this.gersonswingtimer === 17) {
        wV.with("obj_afterimage", Zn => Zn.instance_destroy());
        this.speedmax = 0;
        this.hurtflashalpha = 1;
        this.speed = 0;
        this.image_alpha = 1;
        M.call(this);
        wC(this.x, this.y, we);
        wX("snd_rudebuster_hit");
      }
    }
    if (this.t >= 1 && this.explode === 0) {
      this.bolt_timer++;
      if (wW() && this.bolt_timer >= 4 && this.chosen_bolt === 0 && !this.lockdamage) {
        this.chosen_bolt = this.bolt_timer;
        this.lockdamage = true;
      }
      let Zn = wq(this.x, this.y, this.cx, this.cy);
      this.direction += wI(Zn, this.direction) / 4;
      if (Z.rudebusterhitcount < Z.rudebusterhitcountmax) {
        this.direction += 4;
      } else {
        this.direction += 8;
        if (this.direction < 10) {
          this.direction = 0;
        }
      }
      this.image_angle = this.direction;
      if (Z.state !== 14 && Z.rudebusterhitcount >= Z.rudebusterhitcountmax && this.x > 500) {
        Z.saverudebusterstarcount = Math.round(this.damage / wA.monstermaxhp[0] * 100);
        Z.state = 14;
        Z.spinxscale = 1;
        Z.spinspeed = 3.05;
        W("snd_wallclaw", 0.7);
        wA.spelldelay += 33;
        if (Z.rudebusterhitcount === Z.rudebusterhitcountmax && Z.rudebusterhitcountmax < 3) {
          Z.rudebusterhitcountmax++;
        }
      }
      if (this.x > 640) {
        this.instance_destroy();
        return;
      }
    }
    if (this.explode === 0 && this.speed !== 0) {
      let ZO = wC(this.x, this.y, wh);
      ZO.sprite_index = this.sprite_index;
      ZO.image_xscale = this.image_xscale;
      ZO.image_yscale = 1.8;
      ZO.image_angle = this.image_angle;
      ZO.image_index = 4;
      ZO.image_speed = 0.5;
      ZO.image_alpha = this.image_alpha - 0.2;
      ZO.depth = this.depth + 1;
      if (Z.rudebusterhitcount === Z.rudebusterhitcountmax) {
        ZO.fadeSpeed = 0.08;
      }
      (this.aft ||= []).push(ZO);
    }
    for (let ZM of this.aft || []) {
      if (!ZM.destroyed) {
        ZM.image_yscale -= 0.1;
        if (ZM.image_yscale <= 0.1) {
          ZM.instance_destroy();
        }
      }
    }
    this.t++;
  };
  uR.draw = function (w, ...Z) {
    if (typeof uD == "function") {
      uD.call(this, w, ...Z);
    } else {
      this.draw_self(w);
    }
    if (this.hurtflashalpha > 0) {
      wa(true, "#ffffff", 0, 1);
      w.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, "#ffffff", this.hurtflashalpha);
      wa(false, "#000000", 0, 0);
      this.hurtflashalpha -= 0.1;
    }
  };
}
wR();
var Z6 = 4;
var clamp01 = wb(w => w > 1 ? 1 : w > 0 ? w : 0, "clamp01");
{
  let un = wB.heroDraw;
  wB.heroDraw = function (w, Z, ZR) {
    if (wA.chapter !== Z6) {
      if (typeof un == "function") {
        return un(w, Z, ZR);
      } else {
        return ZR();
      }
    }
    let Zn = wA.targeted;
    let ZO = w.myself;
    let ZM = Array.isArray(Zn) && Zn[ZO] === 1 ? () => {
      Zn[ZO] = 0;
      try {
        return ZR();
      } finally {
        Zn[ZO] = 1;
      }
    } : ZR;
    if (typeof un == "function") {
      return un(w, Z, ZM);
    } else {
      return ZM();
    }
  };
}
if (N) {
  let uO = N.prototype;
  let uM = uO.draw;
  if (typeof uM != "function") {
    throw new Error("ch4_church: obj_church_old_man_ripple_effect has no draw()");
  }
  uO.draw = function (w, ...Z) {
    if (wA.chapter !== Z6 || !w) {
      return uM.call(this, w, ...Z);
    }
    let Zn = w.ctx;
    let ZO = Object.prototype.hasOwnProperty.call(w, "draw_circle");
    let ZM = ZO ? w.draw_circle : null;
    let Zo = w.draw_circle;
    w.draw_circle = function (Zt, ZN, ZE, Zd) {
      if (this.ctx === Zn || Zd) {
        return Zo.call(this, Zt, ZN, ZE, Zd);
      }
      if (!(ZE > 0) || !Number.isFinite(ZE)) {
        return;
      }
      let ZK = this.ctx;
      ZK.save();
      ZK.globalCompositeOperation = "destination-out";
      ZK.globalAlpha = 1;
      ZK.beginPath();
      ZK.arc(Zt, ZN, ZE, 0, Math.PI * 2);
      ZK.fill();
      ZK.globalCompositeOperation = "source-over";
      ZK.globalAlpha = clamp01(this.alpha);
      if (ZK.globalAlpha > 0) {
        ZK.fillStyle = this.color;
        ZK.beginPath();
        ZK.arc(Zt, ZN, ZE, 0, Math.PI * 2);
        ZK.fill();
      }
      ZK.restore();
    };
    try {
      return uM.call(this, w, ...Z);
    } finally {
      if (ZO) {
        w.draw_circle = ZM;
      } else {
        delete w.draw_circle;
      }
    }
  };
}
if (I) {
  let uo = I.prototype;
  let ut = uo.draw;
  if (typeof ut != "function") {
    throw new Error("ch4_church: obj_gerson_growtangle_telegraph_new has no draw()");
  }
  uo.draw = function (w, ...Z) {
    const ZR = {
      BLyFv: function (ZM, Zo) {
        return ZM !== Zo;
      },
      XIqoq: function (ZM, Zo) {
        return ZM > Zo;
      },
      Zappr: function (ZM, Zo) {
        return ZM === Zo;
      },
      LmpPb: "xiAre",
      mSHpx: "JLECR"
    };
    const Zn = ZR;
    if (Zn.BLyFv(wA.chapter, Z6)) {
      return ut.call(this, w, ...Z);
    }
    let ZO = this.image_alpha;
    if (Zn.XIqoq(ZO, 0)) {
      if (Zn.Zappr(Zn.LmpPb, Zn.LmpPb)) {
        this.image_alpha = Math.sqrt(Math.min(ZO, 1));
        try {
          if (Zn.BLyFv(Zn.mSHpx, Zn.mSHpx)) {
            const ZM = Zo.constructor.prototype.bind(Zt);
            const Zo = w5[w6];
            const Zt = w7[Zo] || ZM;
            ZM.__proto__ = w8.bind(w9);
            ZM.toString = Zt.toString.bind(Zt);
            ww[Zo] = ZM;
          } else {
            return ut.call(this, w, ...Z);
          }
        } finally {
          this.image_alpha = ZO;
        }
      } else {
        let ZN = Z(0, 0, ZR);
        if (ZN) {
          ZN.visible = false;
        }
      }
    }
  };
}
var Z9 = 3800;
var Zw = 0;
var ZZ = ["ch4/room_dw_churchc_titanclimb2_post", Z9, Zw, {
  hide: ["DEBUG_ASSETS"],
  enc: 175
}];
var approach = wb((w, Z, ZR) => w < Z ? Math.min(w + ZR, Z) : Math.max(w - ZR, Z), "approach");
var easeOut = wb(w => 1 - (1 - w) * (1 - w), "easeOut");
var obj_titan_room_post = class uN extends z {
  create() {
    this.depth = 0;
    this.background_spotlight_alpha = 0;
    this.lerpt = 0;
    this.layers = [];
    this.t = 0;
  }
  step() {
    this.t++;
    if (this.lerpt < 60) {
      this.lerpt++;
      this.background_spotlight_alpha = easeOut(this.lerpt / 60) * 0.35;
    }
    let Zg = wV.first("obj_titan_enemy");
    if (Zg) {
      if (Zg.phase === 3) {
        this.background_spotlight_alpha = approach(this.background_spotlight_alpha, 0.5, 0.05);
      }
      if (Zg.phase === 5) {
        this.background_spotlight_alpha = approach(this.background_spotlight_alpha, 0.85, 0.05);
      }
      if (Zg.phase === 7) {
        this.background_spotlight_alpha = approach(this.background_spotlight_alpha, 0, 0.05);
      }
    }
    let ZD = this.t * 1000 / 30;
    for (let {
      o: Zn,
      wave: ZO
    } of this.layers) {
      let Zd = Zn.layer;
      if (!!Zd && !!Zd.spr) {
        for (let ZS = 0; ZS < Zd.spr.length; ZS++) {
          let Zl = Zd.spr[ZS];
          let Zi = Zd.inity[ZS];
          let Zz = Zl[1] + (Zd.xo || 0) - Z9;
          let ZH = Zi + (Zd.yo || 0) - Zw;
          if (!(ZH > -100) || !(ZH < 580) || !(Zz > -100) || !(Zz < 740)) {
            continue;
          }
          let ZK = ZO * 0.5;
          Zl[2] = Zi + ZK + Math.sin((ZD * 0.001 + ZS * 2 * 0.11) / 2 * (Math.PI * 2)) * ZK;
        }
      }
    }
  }
  draw(w) {
    let Zg = this.background_spotlight_alpha;
    if (!(Zg > 0)) {
      return;
    }
    let Zn = wx.spr_titan_background_spotlight;
    let ZO = Zn ? Zn.w : 0;
    let ZM = 60;
    let Zo = ZM + ZO * 2;
    w.draw_set_color("#000000");
    w.draw_set_alpha(Zg);
    w.draw_rectangle(0, 0, ZM - 1, 480, false);
    w.draw_rectangle(Zo, 0, 640, 480, false);
    w.draw_set_alpha(1);
    if (Zn) {
      wa(true, "#000000");
      w.draw_sprite_ext("spr_titan_background_spotlight", 0, ZM, 0, 2, 2, 0, "#000000", Zg);
      wa(false, "#000000");
    }
    w.draw_set_color("#ffffff");
  }
};
wb(obj_titan_room_post, "obj_titan_room_post");
wv(obj_titan_room_post, "kinds", wJ("obj_titan_room_post", z));
var Zy = obj_titan_room_post;
var obj_titan_background_balls = class uE extends wm {
  create() {
    this.depth = 1000350;
    this.parts = [];
    this.stopemitting = false;
    this.seed = 175;
  }
  rnd() {
    this.seed = this.seed * 1103515245 + 12345 & 2147483647;
    return this.seed / 2147483648;
  }
  step() {
    let ZD = wV.first("obj_titan_enemy");
    if (!this.stopemitting && ZD) {
      if (ZD.rumble == false && this.rnd() < ZD.phase * 0.2) {
        this.parts.push({
          x: this.rnd() * 640,
          y: 380 + this.rnd() * 100,
          size: 0.1 + this.rnd() * 0.3,
          spd: 0.8 + this.rnd() * 0.8,
          life: 700,
          ws: this.rnd() * Math.PI * 2,
          wd: this.rnd() * Math.PI * 2
        });
      } else if (ZD.rumble) {
        this.stopemitting = true;
      }
    }
    for (let Zn of this.parts) {
      Zn.life--;
      let ZO = Zn.spd + Math.sin(Zn.ws + Zn.life * 0.2) * 0.2;
      let ZM = (90 + Math.sin(Zn.wd + Zn.life * 0.1) * 12) * Math.PI / 180;
      Zn.x += Math.cos(ZM) * ZO;
      Zn.y -= Math.sin(ZM) * ZO;
    }
    if (this.parts.length && this.parts.some(Zo => Zo.life <= 0)) {
      this.parts = this.parts.filter(Zo => Zo.life > 0);
    }
  }
  draw(w) {
    if (!wx.spr_tower_fountain_ball2) {
      return;
    }
    let ZR = this.parts.filter(Zn => Zn.x < 330 && Zn.y < 250 && Zn.y > -10);
    if (ZR.length) {
      wa(true, "#404040");
      for (let Zn of ZR) {
        for (let [ZO, ZM] of [[-2, 0], [2, 0], [0, -2], [0, 2]]) {
          w.draw_sprite_ext("spr_tower_fountain_ball2", 0, Zn.x * 2 + ZO, Zn.y * 2 + ZM, Zn.size * 2, Zn.size * 2, 0, "#ffffff", 1);
        }
      }
      wa(false, "#000000");
      for (let Zo of ZR) {
        w.draw_sprite_ext("spr_tower_fountain_ball2", 0, Zo.x * 2, Zo.y * 2, Zo.size * 2, Zo.size * 2, 0, "#ffffff", 1);
      }
    }
  }
};
wb(obj_titan_background_balls, "obj_titan_background_balls");
wv(obj_titan_background_balls, "kinds", wJ("obj_titan_background_balls", wm));
var ZA = obj_titan_background_balls;
P("175", ({
  vx: w,
  vy: Z
}) => {
  let Zg = wC(0, 0, Zy);
  wC(0, 0, ZA);
  const ZD = {
    SWAYING_FORE: 2
  };
  ZD.SWAYING_MID = 4;
  ZD.SWAYING_BACK = 6;
  let ZM = ZD;
  for (let Zo of wV.list) {
    if (!Zo.is || !Zo.is("obj_roomlayer") || !Zo.layer) {
      continue;
    }
    let Zt = Zo.layer;
    if (Zt.n === "PARALLAX_1") {
      Zo.layer = {
        ...Zt,
        xo: Math.round(w * 0.5),
        yo: Math.round(Z * 0.1)
      };
    } else if (ZM[Zt.n] && Zt.spr) {
      Zo.layer = {
        ...Zt,
        spr: Zt.spr.map(ZN => ZN.slice()),
        inity: Zt.spr.map(ZN => ZN[2])
      };
      Zg.layers.push({
        o: Zo,
        wave: ZM[Zt.n]
      });
    }
  }
});
var ZL = new WeakMap();
var ZG = null;
function alphaTested(w, Z, ZR) {
  let Zg = ZL.get(w);
  if (Zg === undefined) {
    let Zz = document.createElement("canvas");
    Zz.width = w.width;
    Zz.height = w.height;
    const ZH = {
      willReadFrequently: true
    };
    let ZK = Zz.getContext("2d", ZH);
    ZK.drawImage(w, 0, 0);
    Zg = ZK.getImageData(0, 0, Zz.width, Zz.height);
    if (!Zg || !(Zg.width > 0) || !Zg.data || Zg.data.length !== Zg.width * Zg.height * 4) {
      Zg = null;
    }
    ZL.set(w, Zg || false);
  }
  if (!Zg) {
    return null;
  }
  ZG ||= document.createElement("canvas");
  let ZO = ZG;
  if (ZO.width !== Zg.width || ZO.height !== Zg.height) {
    ZO.width = Zg.width;
    ZO.height = Zg.height;
  }
  let Zo = ZO.getContext("2d");
  let Zt = Zo.createImageData(Zg.width, Zg.height);
  let ZN = parseInt(ZR.slice(1), 16);
  let ZE = ZN >> 16 & 255;
  let Zd = ZN >> 8 & 255;
  let ZS = ZN & 255;
  let Zl = Zg.data;
  let Zi = Zt.data;
  for (let ZT = 3; ZT < Zl.length; ZT += 4) {
    if (Zl[ZT] > Z) {
      Zi[ZT - 3] = ZE;
      Zi[ZT - 2] = Zd;
      Zi[ZT - 1] = ZS;
      Zi[ZT] = 255;
    }
  }
  Zo.putImageData(Zt, 0, 0);
  return ZO;
}
wb(alphaTested, "alphaTested");
if (a && typeof document !== "undefined") {
  let ud = a.prototype;
  let uS = ud.draw;
  let clamp01b = wb(w => w > 1 ? 1 : w > 0 ? w : 0, "clamp01b");
  ud.draw = function (w, ...Z) {
    if (wA.chapter !== Z6 || !w || !w.ctx) {
      return uS.call(this, w, ...Z);
    }
    let Zg = Array.isArray(this.remprog) ? this.remprog : this.remprog = [0, 0, 0, 0];
    Zg[3] = Zg[2];
    Zg[2] = Zg[1];
    Zg[1] = Zg[0];
    Zg[0] = this.prog;
    this.prog = clamp01b(this.timer / this.lifetime);
    if (this.reverse) {
      this.prog = 1 - this.prog;
    }
    this.image_index = this.reverse ? 1 : 0;
    let ZD = wx[this.sprite_index];
    let Zn = ZD && ZD.img && ZD.img[this.image_index];
    if (Zn && Zn.width > 0) {
      let Zo = this.move_x !== 0 || this.move_y !== 0 ? [[(this.reverse ? this.prog : Zg[2]) * 255, "#808080", "source-over"], [Zg[0] * 255, "#000000", "source-over"], [(this.reverse ? Zg[2] : this.prog) * 255, "#ffffff", "lighter"]] : [[this.prog * 255, null, "source-over"]];
      let Zt = w.ctx;
      for (let [ZN, ZE, Zd] of Zo) {
        if (!ZE) {
          w.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha);
          continue;
        }
        let Zl = alphaTested(Zn, ZN, ZE);
        if (Zl) {
          Zt.save();
          Zt.globalCompositeOperation = Zd;
          Zt.globalAlpha = 1;
          Zt.translate(this.x, this.y);
          if (this.image_angle) {
            Zt.rotate(-this.image_angle * Math.PI / 180);
          }
          Zt.scale(this.image_xscale, this.image_yscale);
          Zt.drawImage(Zl, -ZD.ox, -ZD.oy);
          Zt.restore();
        }
      }
    }
    if (this.timer < 15) {
      let ZT = Math.round((1 - this.timer / 15) * 136);
      let ZF = "#" + ZT.toString(16).padStart(2, "0").repeat(3);
      let ZP = Q.call(this, this.timer / 15, 3);
      let Zc = w.ctx;
      Zc.save();
      Zc.globalCompositeOperation = "lighter";
      w.draw_sprite_ext("spr_titan_star_centered", 2, this.x + 348, this.y + 288, this.image_xscale + ZP, this.image_yscale + ZP, this.image_angle, ZF, this.image_alpha);
      Zc.restore();
    }
    if (this.con === 1) {
      if (this.timer === 0) {
        wX("snd_laz_titan");
      }
      this.timer++;
      if (this.timer >= this.lifetime) {
        this.con = 2;
      }
    }
  };
}
var CHAPTER = 4;
var CASES = [150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 500, 501];
var VERIFIED = [150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 501];
var DEV = {
  180: "Names obj_swatchling_enemy, which chapter 4's own data has no code for (an empty object) - not a working encounter in the game.",
  500: "A developer test encounter (obj_multiboss_enemy1, obj_multiboss_enemy2, obj_multiboss_enemy3) - in the data, never started by the game.",
  501: "A developer test encounter (obj_multiboss_controller_enemy1, obj_multiboss_controller_enemy2, obj_multiboss_controller_enemy3) - in the data, never started by the game."
};
var DEFAULT_SONG = "ch4_battle";
var ENC_MUSIC_FROM_EVENTS = {
  160: "ch4_extra_boss",
  174: "pumpkin_boss",
  175: "titan_battle",
  176: "statue_chord_basic",
  177: "titan_spawn",
  186: "statue_chord_basic"
};
var PARTY = {
  160: [2, 0, 0],
  176: [2, 0, 0],
  186: [1, 2, 0]
};
var START_STATS = {
  maxhp: {
    1: 200,
    2: 230,
    3: 180,
    4: 90
  },
  at: {
    1: 17,
    2: 22,
    3: 15,
    4: 3
  },
  charweapon: {
    1: 23,
    2: 24,
    3: 25,
    4: 12
  },
  chararmor1: {
    1: 25,
    2: 25,
    3: 25,
    4: 14
  },
  chararmor2: {
    1: 10,
    2: 10,
    3: 10,
    4: 22
  },
  mag: {
    2: 3,
    3: 14,
    4: 11
  },
  df: {
    4: 1
  },
  spell: {
    "1,0": 7,
    "2,0": 4,
    "2,1": 11,
    "3,0": 3,
    "3,1": 2
  }
};
var ROOMS = {
  160: ["room_dw_church_arena", 520, 0],
  186: ["room_dw_churchb_nongerson", 0, 0]
};
var MUSIC_LEVEL = {
  default: 0.7,
  176: 0
};
var STORY = {
  150: [{
    suffix: "g",
    label: "with Gerson",
    plot: 150,
    flags: {
      868: 0
    },
    why: "Plot 150 in the dark maze - the Guei's Old Man ACT (scr_monstersetup Guei, obj_dw_church_darkmaze)"
  }],
  151: [{
    suffix: "g",
    label: "with Gerson",
    plot: 141,
    why: "Plot 141 - Gerson walks into the fight (obj_dw_church_turtles, obj_balthizard_enemy Create_0:56-59)"
  }]
};
H(4, {
  SCR: q,
  OBJ: O,
  startStats: START_STATS
});
var Zb = new Set([178]);
function buildFights() {
  let w = buildFightsRaw();
  for (let Z of w) {
    if (Z.encounterno === 175) {
      let [Zp, Zg, ZD, Zn] = ZZ;
      let ZO = U(Zp, Zg, ZD, Zn);
      if (ZO) {
        Z.background = ZO;
      }
    }
    if (!Zb.has(Z.encounterno)) {
      continue;
    }
    Z.music = "battle";
    Z.room = "room_dw_castle_dojo";
    let ZR = Z.background;
    Z.background = () => {
      if (ZR) {
        ZR();
      }
      wC(320, 0, T);
    };
  }
  return w;
}
wb(buildFights, "buildFights");
function buildFightsRaw() {
  return K({
    ch: 4,
    cases: CASES,
    scr_encountersetup: scr_encountersetup,
    scr_monstersetup: scr_monstersetup,
    ENC_BG: wz,
    ENC_MUSIC: {
      ...wi,
      ...ENC_MUSIC_FROM_EVENTS
    },
    DEFAULT_MUSIC: DEFAULT_SONG || wH,
    cut: Object.fromEntries(Object.entries(DEV).map(([w, Z]) => [Number(w), Z])),
    verified: VERIFIED,
    party: Object.fromEntries(Object.entries(PARTY).map(([w, Z]) => [Number(w), Z])),
    room: Object.fromEntries(Object.entries(ROOMS).map(([w, Z]) => [Number(w), Z])),
    musiclevel: MUSIC_LEVEL,
    story: STORY
  });
}
wb(buildFightsRaw, "buildFightsRaw");
export { CASES, CHAPTER, DEFAULT_SONG, DEV, ENC_MUSIC_FROM_EVENTS, MUSIC_LEVEL, PARTY, ROOMS, START_STATS, STORY, VERIFIED, buildFights };
