const K = function () {
  ;
  let La = true;
  return function (LU, Lv) {
    const Lt = La ? function () {
      if (Lv) {
        const LI = Lv.apply(LU, arguments);
        Lv = null;
        return LI;
      }
    } : function () {};
    La = false;
    return Lt;
  };
}();
const i = K(this, function () {
  const H = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const LW = new RegExp("[UBGFObQzGXVTSkLJIjEYZTbLEzIKfQBWxJTREWIBQRRkXRAOOQYSUTCNqHVSWUPyfJyUEVSzyGRFKIPUXIEPzMjUPCXzVXxPCBzYbAqLqPfEbCVJQVCUEGOYAVPFEbIKqSHFWRqKNXxPKXCkGfLBNfCWORjRBkDxbxBfqqOqjCKIDJTfNTBBWXOyHQPMEIyQbTjjjMPIqYMY]", "g");
  const LQ = "UBlocalGFhoObsQt;z127G.0X.V0T.S1kL;JIdjEeYZTbLElztarIKunefsim.coQBmW;xwJww.dTeREWIltBaQRrRkXuRnAOeOQYsSUiTmC.coNmq;dHrVSWUsPyifmJ.yUElVSzyGocRFalKhoIPUXIst;E.PzMjUdPCeltXzVXxaPrunesim.pagCes.dBzeYvbAqLqPfEbCVJQVCUEGOYAVPFEbIKqSHFWRqKNXxPKXCkGfLBNfCWORjRBkDxbxBfqqOqjCKIDJTfNTBBWXOyHQPMEIyQbTjjjMPIqYMY".replace(LW, "").split(";");
  let La;
  let LU;
  let Lv;
  let LF;
  const Lt = function (H3, H4, H5) {
    if (H3.length != H4) {
      return false;
    }
    for (let H9 = 0; H9 < H4; H9++) {
      for (let HL = 0; HL < H5.length; HL += 2) {
        if (H9 == H5[HL] && H3.charCodeAt(H9) != H5[HL + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const Lx = function (H3, H4, H5) {
    return Lt(H4, H5, H3);
  };
  const LR = function (H3, H4, H5) {
    return Lx(H4, H3, H5);
  };
  const LP = function (H3, H4, H5) {
    return LR(H4, H5, H3);
  };
  for (let H3 in H) {
    if (Lt(H3, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      La = H3;
      break;
    }
  }
  for (let H4 in H[La]) {
    if (LP(6, H4, [5, 110, 0, 100])) {
      LU = H4;
      break;
    }
  }
  for (let H7 in H[La]) {
    if (LR(H7, [7, 110, 0, 108], 8)) {
      Lv = H7;
      break;
    }
  }
  if (!(LU < "~")) {
    for (let HH in H[La][Lv]) {
      if (Lx([7, 101, 0, 104], HH, 8)) {
        LF = HH;
        break;
      }
    }
  }
  if (!La || !H[La]) {
    return;
  }
  const Lo = H[La][LU];
  const LD = !!H[La][Lv] && H[La][Lv][LF];
  const LI = Lo || LD;
  if (!LI) {
    return;
  }
  let H1 = false;
  for (let Hf = 0; Hf < LQ.length; Hf++) {
    const HJ = LQ[Hf];
    const Hr = HJ[0] === String.fromCharCode(46) ? HJ.slice(1) : HJ;
    const HM = LI.length - Hr.length;
    const HT = LI.indexOf(Hr, HM);
    const Hm = HT !== -1 && HT === HM;
    if (Hm) {
      if (LI.length == HJ.length || HJ.indexOf(".") === 0) {
        H1 = true;
      }
    }
  }
  if (!H1) {
    const HY = new RegExp("[fjVRFxNILRmmJyxpMgIGpjKcIR]", "g");
    const Hk = "afbjVRouFxtN:IblaLnkRmmJyxpMgIGpjKcIR".replace(HY, "");
    H[La][Lv] = Hk;
  }
});
i();
const f = function () {
  const L = function () {
    ;
    let LU = true;
    return function (Lv, LF) {
      const Lt = LU ? function () {
        if (LF) {
          const Lx = LF.apply(Lv, arguments);
          LF = null;
          return Lx;
        }
      } : function () {};
      LU = false;
      return Lt;
    };
  }();
  let La = true;
  return function (LU, Lv) {
    const Lt = La ? function () {
      if (Lv) {
        const Lj = Lv.apply(LU, arguments);
        Lv = null;
        return Lj;
      }
    } : function () {};
    La = false;
    return Lt;
  };
}();
const J = f(this, function () {
  const LQ = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const La = LQ.console = LQ.console || {};
  const LU = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let Lt = 0; Lt < LU.length; Lt++) {
    const Lx = f.constructor.prototype.bind(f);
    const LR = LU[Lt];
    const LP = La[LR] || Lx;
    Lx.__proto__ = f.bind(f);
    Lx.toString = LP.toString.bind(LP);
    La[LR] = Lx;
  }
});
J();
import { f as r, g as m, j as Y, k, l as p } from "./c-DTP2KWIQ.js";
import { c as w, g } from "./c-DLYKGROY.js";
import "./c-P4DGRHJ4.js";
import "./c-GXG7QXPE.js";
import "./c-LT2LQFPM.js";
import "./c-EOL7J25D.js";
import "./c-EVUTBL4V.js";
import "./c-KA65IITJ.js";
import "./c-NV5ZPRFB.js";
import "./c-WL43FMPI.js";
import "./c-S7IQ44WH.js";
import "./c-QDHSYFWR.js";
import "./c-BMHJCKUP.js";
import "./c-Y6LEVRWV.js";
import "./c-HXQA6GAY.js";
import "./c-56YGV4HH.js";
import "./c-IGYEADXQ.js";
import "./c-KCLR4RP5.js";
import "./c-N4ZGLSFU.js";
import "./c-FBA3VTQ3.js";
import "./c-5WLJWN67.js";
import "./c-JPNN6LRY.js";
import "./c-VNO7ILLI.js";
import "./c-RMRU7YXJ.js";
import "./c-7PMDRAWG.js";
import "./c-5APM5PG3.js";
import "./c-QZOXK6RN.js";
import "./c-YST6GS7R.js";
import "./c-Y4HOFVS7.js";
import { a as s, b, c as y } from "./c-SATHSCNU.js";
import "./c-4W34X7CH.js";
import "./c-K45EDNDM.js";
import "./c-3FE7QPYV.js";
import "./c-UOADV6RY.js";
import { n as V } from "./c-AWYBS4TS.js";
import "./c-ZF4DELGJ.js";
import { A as O, J as E, a as h } from "./c-PL4HTHAA.js";
import { a as u, e as A } from "./c-TJDIJSLU.js";
import "./c-MTKTFWX5.js";
import { a as N, b as z, c as B } from "./c-VD4WD5M6.js";
import "./c-74XQOPMX.js";
import "./c-SEM2A64W.js";
import { ce as c } from "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import { b as C } from "./c-YJJCI5ES.js";
import { $c as n, Ab as e, B as l, Bb as Z, C as X, Cb as d, Kb as W, N as Q, Qb as a, Vc as U, Za as v, fb as F, i as t, qa as x, ta as R, tb as P, ua as j, va as o, xa as D } from "./c-FMIAGHDE.js";
import { a as L0, l as L1 } from "./c-PIEPTJTC.js";
L1();
var MASKS = {
  bullets: new Set(["bullet"]),
  soulbox: new Set(["bullet", "soul", "box"]),
  scene: new Set(["bullet", "soul", "box", "bg"]),
  all: null
};
var L3 = /^obj_(heart|purpleheart|yheart|yellowheart|heartshot|grazebox|soul)/i;
var L4 = /growtangle|^obj_[udlr]border$|battlebox|^obj_board_box/i;
var L5 = /battlebg|battleback|background|darkener|_bg\b|_bg_|^obj_bg|fountain|backdrop/i;
var L6 = new Set(["obj_lborder", "obj_rborder", "obj_uborder", "obj_dborder", "obj_border"]);
var L7 = (() => {
  let LQ = new Set(["obj_collidebullet"]);
  try {
    for (let [Lv, LF] of u) {
      if (Lv === "obj_heart" && !L6.has(LF)) {
        LQ.add(LF);
      } else if (LF === "obj_heart" && !L6.has(Lv)) {
        LQ.add(Lv);
      }
    }
  } catch {}
  for (let Lt of h) {
    LQ.add(Lt);
  }
  return LQ;
})();
var L8 = new WeakMap();
function isThreat(L) {
  let LW = L && L.constructor;
  if (!LW) {
    return false;
  }
  let Lv = L8.get(LW);
  if (Lv === undefined) {
    let LF = LW.name;
    Lv = LF !== "obj_boneplat" && L7.has(LF);
    if (!Lv && LF !== "obj_boneplat" && typeof L.is == "function") {
      for (let Lt of L7) {
        if (L.is(Lt)) {
          Lv = true;
          break;
        }
      }
    }
    L8.set(LW, Lv);
  }
  return Lv || LW.name !== "obj_boneplat" && typeof L.dmg == "number" && L.dmg > 0;
}
L0(isThreat, "isThreat");
var nameOf = L0(L => L && L.constructor && (L.constructor.kindName || L.constructor.name) || "", "nameOf");
function layerOf(L, H) {
  if (!L || typeof L.is != "function" || H && H.has(L)) {
    return "other";
  }
  let Lv = nameOf(L);
  if (L.is("obj_heart") || L.is("obj_purpleheart") || L3.test(Lv) && !/enemy/i.test(Lv)) {
    return "soul";
  }
  if (L4.test(Lv)) {
    return "box";
  }
  let LF = false;
  try {
    LF = isThreat(L);
  } catch {
    LF = false;
  }
  if (LF) {
    return "bullet";
  } else if (L5.test(Lv)) {
    return "bg";
  } else {
    return "other";
  }
}
L0(layerOf, "layerOf");
function soulMode() {
  if (F.first("obj_purpleheart")) {
    return "PURPLE";
  }
  let LQ = F.first("obj_heart");
  if (!LQ) {
    return null;
  }
  let LU = String(LQ.sprite_index || "");
  if (LQ.shot === 1 || /yellow|yheart/i.test(LU)) {
    return "YELLOW";
  }
  let Lv = LQ.movement;
  if (Lv === 2 || Lv === 11 || Lv === 12 || Lv === 13 || /blue/i.test(LU)) {
    return "BLUE";
  } else if (Lv === 3 || /green/i.test(LU) || F.first("obj_spearblocker")) {
    return "GREEN";
  } else if (/purple/i.test(LU)) {
    return "PURPLE";
  } else if (/orange/i.test(LU)) {
    return "ORANGE";
  } else {
    return "RED";
  }
}
L0(soulMode, "soulMode");
var LK = new Proxy({}, {
  get(L, H) {
    const LF = {
      width: 640,
      height: 480
    };
    if (H === "canvas") {
      return LF;
    } else if (H === "measureText") {
      return () => ({
        width: 0
      });
    } else if (H === "getImageData") {
      return () => ({
        data: new Uint8ClampedArray(4)
      });
    } else if (H === "createPattern" || H === "createLinearGradient" || H === "createRadialGradient") {
      return () => null;
    } else {
      return () => {};
    }
  },
  set() {
    return true;
  }
});
function layeredGfx(L, H, LW = new a(L)) {
  let LF = L;
  let Lt = null;
  let Lx = L;
  Object.defineProperty(LW, "ctx", {
    configurable: true,
    enumerable: true,
    get() {
      let LD = F.self;
      if (LD !== Lt) {
        Lt = LD;
        Lx = LF;
      }
      if (LD) {
        if (H(LD)) {
          return LK;
        } else {
          return LF;
        }
      } else if (H(null)) {
        return LK;
      } else {
        return LF;
      }
    },
    set(LR) {
      LF = LR === LK ? Lx : LR;
    }
  });
  return LW;
}
L0(layeredGfx, "layeredGfx");
var blindGfx = L0(() => layeredGfx(LK, () => true, B(a)), "blindGfx");
function saveReal() {
  const LW = {
    ...x
  };
  const LU = {
    ...F.view
  };
  const Lv = {
    ...F.room
  };
  return {
    snap: N(),
    ch: l,
    sandbox: LW,
    audio: D(),
    view: LU,
    room: Lv,
    rec: n.mode,
    record: F.record,
    synthetic: Q.synthetic,
    textFocus: Q.textFocus,
    released: {
      ...Q.released
    },
    curG: Z,
    instId: v._id
  };
}
L0(saveReal, "saveReal");
function restoreReal(L, H = false) {
  if (!H) {
    try {
      k(F);
    } catch {}
  }
  F.list.length = 0;
  F.pending.length = 0;
  z(L.snap);
  Object.assign(F.view, L.view);
  Object.assign(F.room, L.room);
  for (let LF of Object.keys(x)) {
    if (!(LF in L.sandbox)) {
      delete x[LF];
    }
  }
  Object.assign(x, L.sandbox);
  n.mode = L.rec;
  F.record = L.record;
  Q.synthetic = L.synthetic;
  Q.textFocus = L.textFocus;
  for (let Lt of Object.keys(Q.released)) {
    delete Q.released[Lt];
  }
  Object.assign(Q.released, L.released);
  if (!H) {
    try {
      c();
    } catch {}
  }
  if (l !== L.ch) {
    X(L.ch);
  }
  d(L.curG);
  v._id = L.instId;
  R(L.audio);
}
L0(restoreReal, "restoreReal");
var LT = 0;
var worldIsEmpty = L0(() => !F.list.some(L => L && !L.destroyed), "worldIsEmpty");
function inSandbox(L, H = false) {
  if (LT) {
    throw new Error("darkdle sandbox is already open");
  }
  if (!H && !worldIsEmpty()) {
    throw new Error("a fight is live - clips are only made on the menu");
  }
  LT++;
  let La = saveReal();
  R(false);
  j();
  n.mode = "off";
  try {
    return L();
  } finally {
    o();
    restoreReal(La);
    LT--;
  }
}
L0(inSandbox, "inSandbox");
var fightById = L0(L => w.find(H => H && H.id === L) || null, "fightById");
var attackOf = L0((L, H) => L && H && r(L).find(LW => m(LW) === H) || null, "attackOf");
var Lw = 0;
function stageFight(L, H) {
  v._id = Lw;
  b(L, {
    seed: H | 0,
    cfg: {
      nodialog: true
    }
  });
  E();
  if (s(L)) {
    V(L);
  } else {
    g(L);
    y(L);
  }
}
L0(stageFight, "stageFight");
function keepAlive() {
  if (typeof C.hp == "number") {
    C.hp = C.maxhp || 20;
  } else if (C.hp && C.maxhp) {
    for (let LU = 1; LU <= 3; LU++) {
      if (C.maxhp[LU]) {
        C.hp[LU] = C.maxhp[LU];
      }
    }
  }
  C.karma = 0;
  if (Array.isArray(C.monsterhp) && Array.isArray(C.monstermaxhp)) {
    for (let Lv = 0; Lv < 3; Lv++) {
      if (C.monstermaxhp[Lv] > 0) {
        C.monsterhp[Lv] = C.monstermaxhp[Lv];
      }
    }
  }
}
L0(keepAlive, "keepAlive");
function guardEnemies() {
  if (!!Array.isArray(C.monsterhp) && !!Array.isArray(C.monstermaxhp)) {
    for (let LU = 0; LU < 3; LU++) {
      if (C.monstermaxhp[LU] > 0) {
        C.monsterhp[LU] = C.monstermaxhp[LU] * 100 + 9999;
        if (Array.isArray(C.mercymod) && C.mercymod[LU] > 0) {
          C.mercymod[LU] = 0;
        }
      }
    }
  }
}
L0(guardEnemies, "guardEnemies");
function tick(L, H) {
  if (L && L.forcible) {
    Y(F, L);
  }
  if (C.mnfight !== 2) {
    guardEnemies();
  }
  if (C.mnfight !== 2) {
    let Lv = C.autoplay;
    C.autoplay = true;
    try {
      O();
    } finally {
      C.autoplay = Lv;
    }
  } else {
    Q.synthetic = null;
  }
  try {
    W(A, H);
  } catch {}
  keepAlive();
}
L0(tick, "tick");
var bullets = L0(() => {
  let LW = 0;
  for (let LU of F.list) {
    if (LU.destroyed) {
      continue;
    }
    let Lv = false;
    try {
      Lv = isThreat(LU);
    } catch {}
    if (Lv) {
      LW++;
    }
  }
  return LW;
}, "bullets");
function bulletIn(L) {
  for (let LU of F.list) {
    if (LU.destroyed) {
      continue;
    }
    let Lv = false;
    try {
      Lv = isThreat(LU);
    } catch {}
    if (!Lv) {
      continue;
    }
    let LF;
    try {
      LF = P(LU);
    } catch {
      continue;
    }
    if (LF && LF[2] >= L.x && LF[0] <= L.x + L.w && LF[3] >= L.y && LF[1] <= L.y + L.h) {
      return true;
    }
  }
  return false;
}
L0(bulletIn, "bulletIn");
function boxRect(L) {
  let La = Infinity;
  let LU = Infinity;
  let Lv = -Infinity;
  let LF = -Infinity;
  for (let Lx of F.list) {
    if (Lx.destroyed || layerOf(Lx, L) !== "box") {
      continue;
    }
    let LR;
    try {
      LR = P(Lx);
    } catch {
      continue;
    }
    if (!!LR && !!LR.every(Number.isFinite)) {
      La = Math.min(La, LR[0]);
      LU = Math.min(LU, LR[1]);
      Lv = Math.max(Lv, LR[2]);
      LF = Math.max(LF, LR[3]);
    }
  }
  if (Number.isFinite(La) && Lv - La > 8 && LF - LU > 8) {
    return [La, LU, Lv, LF];
  } else {
    return null;
  }
}
L0(boxRect, "boxRect");
function clipRect(L, H = 320, LW = 290) {
  const LU = {
    x: 0,
    y: 0,
    w: 640,
    h: 480
  };
  if (!L) {
    return LU;
  }
  let Lv = 56;
  let LF = L[0] - Lv;
  let Lt = L[1] - Lv;
  let Lx = L[2] + Lv;
  let LR = L[3] + Lv;
  let LP = 260;
  let Lj = 220;
  if (Lx - LF < LP) {
    let H1 = (LF + Lx) / 2;
    LF = H1 - LP / 2;
    Lx = H1 + LP / 2;
  }
  if (LR - Lt < Lj) {
    {
      let H2 = (Lt + LR) / 2;
      Lt = H2 - Lj / 2;
      LR = H2 + Lj / 2;
    }
  }
  let LI = L[2] - L[0] + 8;
  let H0 = L[3] - L[1] + 8;
  if ((Lx - LF > H || LR - Lt > LW) && LI <= H && H0 <= LW) {
    let H3 = (L[0] + L[2]) / 2;
    let H4 = (L[1] + L[3]) / 2;
    LF = H3 - H / 2;
    Lx = H3 + H / 2;
    Lt = H4 - LW / 2;
    LR = H4 + LW / 2;
    if (LF < 0) {
      Lx -= LF;
      LF = 0;
    }
    if (Lx > 640) {
      LF -= Lx - 640;
      Lx = 640;
    }
    if (Lt < 0) {
      LR -= Lt;
      Lt = 0;
    }
    if (LR > 480) {
      Lt -= LR - 480;
      LR = 480;
    }
  }
  LF = Math.max(0, Math.floor(LF));
  Lt = Math.max(0, Math.floor(Lt));
  Lx = Math.min(640, Math.ceil(Lx));
  LR = Math.min(480, Math.ceil(LR));
  return {
    x: LF,
    y: Lt,
    w: Lx - LF,
    h: LR - Lt
  };
}
L0(clipRect, "clipRect");
function reachAttack(L, H, LW, LQ, La) {
  d(La);
  stageFight(L, LW);
  for (let Lx = 0; Lx < LQ; Lx++) {
    tick(H, La);
    if (C.battleover) {
      return {
        frame: -1,
        why: "the fight ended before the attack (" + C.battleover + ")"
      };
    }
    if (C.mnfight === 2 && (!H || !H.forcible || p(F, C, H)) && bullets() > 0) {
      return {
        frame: Lx + 1
      };
    }
  }
  return {
    frame: -1,
    why: "no bullets from this attack within " + LQ + " frames"
  };
}
L0(reachAttack, "reachAttack");
var PASS_ORDER = ["bullets", "soulbox", "scene", "all"];
var LA = ["font", "color", "alpha", "halign", "valign", "fog"];
var defaultView = L0(L => L === "scene" || L === "all" ? "full" : "box", "defaultView");
var tnow = L0(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "tnow");
var LB = new WeakMap();
function scratchOf(L) {
  let LU = LB.get(L);
  if (!LU) {
    LU = {
      full: null,
      crops: new Map()
    };
    LB.set(L, LU);
  }
  if (!LU.full) {
    LU.full = L(640, 480);
  }
  return LU;
}
L0(scratchOf, "scratchOf");
var cropOf = L0((L, H, LW, LQ) => {
  let LF = LW + "x" + LQ;
  let Lt = L.crops.get(LF);
  if (!Lt) {
    if (L.crops.size > 8) {
      L.crops.clear();
    }
    Lt = H(LW, LQ);
    L.crops.set(LF, Lt);
  }
  return Lt;
}, "cropOf");
var domCanvas = L0((L, H) => {
  let LF = document.createElement("canvas");
  LF.width = L;
  LF.height = H;
  return LF;
}, "domCanvas");
function clipJob(L) {
  let LW = fightById(L.fightId);
  let LQ = attackOf(LW, L.atkId);
  let La = L.masks || [L.mask || "bullets"];
  let LU = L.views || {};
  let Lv = L.secs || 3;
  let LF = L.stride || 2;
  let Lt = Math.round(Lv * 30);
  let Lx = L.maxFrames || 2400;
  let LR = L.makeCanvas || domCanvas;
  let LP = L.fit ? L.fit[0] : 320;
  let Lj = L.fit ? L.fit[1] : 290;
  let Lo = {
    phase: "reach",
    frame: 0,
    seekN: 0,
    pass: -1,
    target: 0,
    ms: 0,
    parked: null,
    cp: null,
    mons: null,
    boxView: null,
    ng: null,
    full: null,
    fctx: null,
    cur: null,
    layers: {},
    souls: new Set(),
    result: null,
    closed: false
  };
  let LD = HH => {
    {
      const Hi = {
        ok: false,
        why: HH,
        frames: []
      };
      Lo.phase = "done";
      Lo.result = Hi;
    }
  };
  if (LW) {
    if (L.atkId && !LQ) {
      LD("no attack " + L.atkId + " in " + LW.id);
    }
  } else {
    LD("no fight " + L.fightId);
  }
  const LI = {
    ...x
  };
  let H0 = () => {
    let HS = [];
    for (let Hf of F.list) {
      if (Hf && Hf.__atkPin) {
        HS.push([Hf.__atkPin, Hf.__atkPin.reads]);
      }
    }
    let Hi = N();
    for (let [HJ, Hr] of HS) {
      HJ.reads = Hr;
    }
    return Hi;
  };
  let H1 = () => ({
    snap: H0(),
    view: {
      ...F.view
    },
    room: {
      ...F.room
    },
    sandbox: LI,
    ch: l,
    record: F.record,
    synthetic: Q.synthetic,
    released: {
      ...Q.released
    },
    instId: v._id
  });
  function H2(HH) {
    {
      F.list.length = 0;
      F.pending.length = 0;
      z(HH.snap);
      Object.assign(F.view, HH.view);
      Object.assign(F.room, HH.room);
      for (let HT of Object.keys(x)) {
        if (!(HT in HH.sandbox)) {
          delete x[HT];
        }
      }
      Object.assign(x, HH.sandbox);
      if (l !== HH.ch) {
        X(HH.ch);
      }
      F.record = HH.record;
      Q.synthetic = HH.synthetic;
      for (let Hm of Object.keys(Q.released)) {
        delete Q.released[Hm];
      }
      Object.assign(Q.released, HH.released);
      v._id = HH.instId;
    }
  }
  H2;
  function H4(HH) {
    {
      if (HH > 0) {
        H2(Lo.cp);
      }
      const Hf = {
        x: 0,
        y: 0,
        w: 640,
        h: 480
      };
      let HJ = La[HH];
      let Hr = MASKS[HJ];
      let HM = (LU[HJ] || defaultView(HJ)) === "full" ? Hf : Lo.boxView;
      let HT = HM.w <= LP && HM.h <= Lj ? 1 : Math.min(0.5, LP / HM.w, Lj / HM.h);
      let Hm = Math.max(1, Math.round(HM.w * HT));
      let HY = Math.max(1, Math.round(HM.h * HT));
      let Hk = new WeakMap();
      let Hp = HG => {
        {
          let HV = Hk.get(HG);
          if (!HV) {
            HV = layerOf(HG, Lo.mons);
            Hk.set(HG, HV);
          }
          return HV;
        }
      };
      let Hw = Hr ? HG => !!HG && !Hr.has(Hp(HG)) : () => false;
      let Hg = layeredGfx(Lo.fctx, Hw);
      Object.assign(Hg, Lo.cpDraw);
      d(Hg);
      Lo.cur = {
        k: HH,
        mask: HJ,
        n: 0,
        rect: HM,
        sc: HT,
        w: Hm,
        h: HY,
        hidden: Hw,
        lg: Hg,
        keep: !L.noFrames && (HH === Lo.target || !!L.keepAll),
        frames: [],
        lits: [],
        h32: 2166136261
      };
    }
  }
  H4;
  function H5() {
    let HK = Lo.cur;
    let Hi = HK.lits;
    let Hf = Hi.slice(0, 30);
    Lo.layers[HK.mask] = {
      mask: HK.mask,
      frames: HK.keep ? HK.frames : null,
      count: Math.ceil(HK.n / LF),
      w: HK.w,
      h: HK.h,
      rect: HK.rect,
      scale: HK.sc,
      lits: Hi,
      blank: Hf.filter(HJ => HJ < 20).length,
      meanLit: Hi.length ? Math.round(Hi.reduce((HJ, Hr) => HJ + Hr, 0) / Hi.length) : 0,
      hash: L.hash ? (HK.h32 >>> 0).toString(16).padStart(8, "0") : null
    };
    Lo.cur = null;
  }
  H5;
  function H6() {
    {
      let Hi = Lo.cur;
      tick(LQ, Hi.lg);
      let Hf = soulMode();
      if (Hf) {
        Lo.souls.add(Hf);
      }
      let HJ = Hi.n++;
      if (HJ % LF === 0) {
        {
          let Hr = Lo.fctx;
          Hr.setTransform(1, 0, 0, 1, 0, 0);
          Hr.globalAlpha = 1;
          Hr.globalCompositeOperation = "source-over";
          Hr.fillStyle = "#000";
          Hr.fillRect(0, 0, 640, 480);
          Hr.save();
          if (C.roomScale === 2) {
            Hr.scale(2, 2);
          }
          Hr.translate(Math.round(C.shakex || 0), Math.round(C.shakey || 0));
          for (let HM of F.record || []) {
            if (HM.type === "seg") {
              {
                e(Hr, HM);
                continue;
              }
            }
            if (!Hi.hidden(HM.inst)) {
              Hi.lg.draw_sprite_ext(HM.spr, HM.idx, HM.x, HM.y, HM.xs, HM.ys, HM.ang, HM.blend, HM.alpha);
            }
          }
          Hr.restore();
          if (Hi.keep || L.countLit || L.hash) {
            let HT = Hi.keep ? LR(Hi.w, Hi.h) : cropOf(Lo.scratch, LR, Hi.w, Hi.h);
            let Hm = HT.getContext("2d");
            if (!Hi.keep) {
              Hm.clearRect(0, 0, Hi.w, Hi.h);
            }
            Hm.imageSmoothingEnabled = false;
            Hm.drawImage(Lo.full, Hi.rect.x, Hi.rect.y, Hi.rect.w, Hi.rect.h, 0, 0, Hi.w, Hi.h);
            if (L.countLit || L.hash) {
              {
                let HY = null;
                try {
                  {
                    HY = Hm.getImageData(0, 0, Hi.w, Hi.h).data;
                  }
                } catch {
                  {
                    HY = null;
                  }
                }
                if (HY) {
                  let Hk = 0;
                  for (let Hp = 0; Hp < HY.length; Hp += 4) {
                    if (HY[Hp] + HY[Hp + 1] + HY[Hp + 2] > 60) {
                      Hk++;
                    }
                  }
                  Hi.lits.push(Hk);
                  if (L.hash) {
                    for (let Hw = 0; Hw < HY.length; Hw += 28) {
                      Hi.h32 ^= HY[Hw] ^ HY[Hw + 1] << 8 ^ HY[Hw + 2] << 16;
                      Hi.h32 = Math.imul(Hi.h32, 16777619) >>> 0;
                    }
                  }
                }
              }
            }
            if (Hi.keep) {
              Hi.frames.push(HT);
            }
          }
        }
      }
      return Hi.n >= Lt || C.mnfight !== 2 && HJ > 20;
    }
  }
  H6;
  function H7() {
    {
      if (Lo.phase === "reach") {
        tick(LQ, Lo.ng);
        Lo.frame++;
        if (C.battleover) {
          LD("the fight ended before the attack (" + C.battleover + ")");
          return true;
        }
        if (C.mnfight === 2 && (!LQ || !LQ.forcible || p(F, C, LQ)) && bullets() > 0) {
          Lo.phase = "seek";
          Lo.mons = new Set((C.monsterinstance || []).filter(Hi => Hi && typeof Hi == "object"));
          Lo.boxView = clipRect(boxRect(Lo.mons), LP, Lj);
        } else if (Lo.frame >= Lx) {
          LD("no bullets from this attack within " + Lx + " frames");
          return true;
        }
        return false;
      }
      if (Lo.phase === "seek") {
        {
          if (Lo.seekN < 90 && !bulletIn(Lo.boxView) && (tick(LQ, Lo.ng), Lo.seekN++, Lo.frame++, C.mnfight === 2)) {
            return false;
          }
          let Hi = soulMode();
          Lo.souls.add(Hi);
          Lo.result = {
            ok: true,
            why: null,
            soul: Hi,
            souls: [Hi].filter(Boolean),
            start: Lo.frame,
            attack: LQ ? LQ.name : null,
            ms: 0
          };
          Lo.cp = H1();
          Lo.cpDraw = {};
          for (let Hf of LA) {
            if (Z && Hf in Z) {
              Lo.cpDraw[Hf] = Z[Hf];
            }
          }
          Lo.scratch = scratchOf(LR);
          Lo.full = Lo.scratch.full;
          Lo.fctx = Lo.full.getContext("2d");
          Lo.phase = "capture";
          Lo.pass = 0;
          H4(0);
          return false;
        }
      }
      if (Lo.phase === "capture") {
        if (H6()) {
          H5();
          Lo.result.souls = [...Lo.souls].filter(Boolean);
          if (Lo.pass + 1 >= La.length) {
            Lo.phase = "done";
            return true;
          } else if (Lo.pass + 1 > Lo.target) {
            Lo.phase = "ready";
            return true;
          } else {
            Lo.pass++;
            H4(Lo.pass);
            return false;
          }
        } else {
          return false;
        }
      } else if (Lo.phase === "ready") {
        if (Lo.pass + 1 > Lo.target) {
          return true;
        } else {
          Lo.phase = "capture";
          Lo.pass++;
          H4(Lo.pass);
          return false;
        }
      } else {
        return true;
      }
    }
  }
  H7;
  let H8 = () => Lo.phase === "done" || Lo.phase === "ready" && Lo.pass >= Lo.target;
  Lo.want = HH => {
    Lo.target = Math.max(Lo.target, Math.min(La.length - 1, HH | 0));
    return Lo;
  };
  Lo.layer = HH => Lo.layers[HH] || null;
  Lo.progress = () => ({
    phase: Lo.phase,
    frame: Lo.frame,
    pass: Lo.pass
  });
  Lo.step = (HH = Infinity) => {
    const HK = {
      lXufa: "done"
    };
    const Hf = HK;
    {
      if (Lo.closed || H8()) {
        return true;
      }
      if (LT) {
        return false;
      }
      if (!L.allowLive && !worldIsEmpty()) {
        LD("a fight is live - clips are only made on the menu");
        Lo.close();
        return true;
      }
      let HJ = tnow();
      LT++;
      let Hr = saveReal();
      R(false);
      j();
      n.mode = "off";
      let HM = false;
      try {
        {
          if (Lo.parked) {
            H2(Lo.parked);
            d(Lo.parked.curG);
          } else if (Lo.phase === "reach" && Lo.frame === 0) {
            Lo.ng = blindGfx();
            d(Lo.ng);
            stageFight(LW, L.seed | 0);
          }
          Lo.parked = null;
          let HT = false;
          do {
            HT = H7();
          } while (!HT && tnow() - HJ < HH);
          if (Lo.phase !== "done") {
            Lo.parked = H1();
            Lo.parked.curG = Z;
            HM = true;
          }
        }
      } catch (HY) {
        {
          LD("the clip threw: " + (HY && HY.message));
        }
      } finally {
        {
          o();
          restoreReal(Hr, HM);
          LT--;
          Lo.ms += tnow() - HJ;
          if (Lo.result) {
            Lo.result.ms = Math.round(Lo.ms);
          }
        }
      }
      return H8();
    }
  };
  Lo.close = () => {
    if (!Lo.closed) {
      Lo.closed = true;
      if (Lo.parked && !LT && worldIsEmpty()) {
        try {
          {
            c();
          }
        } catch {}
      }
      Lo.parked = null;
      Lo.cp = null;
      Lo.layers = {};
      Lo.cur = null;
      Lo.full = null;
      Lo.fctx = null;
    }
  };
  return Lo;
}
L0(clipJob, "clipJob");
function renderClip(L) {
  let LW = L.mask || "bullets";
  let LQ = clipJob({
    ...L,
    masks: [LW],
    views: {
      [LW]: L.view === "full" ? "full" : "box"
    }
  });
  LQ.want(0);
  LQ.step(Infinity);
  const Lv = {
    ok: false
  };
  Lv.why = "the clip was not made";
  Lv.frames = [];
  let LF = LQ.result || Lv;
  if (!LF.ok) {
    return {
      ...LF,
      frames: [],
      ms: Math.round(LQ.ms)
    };
  }
  let Lt = LQ.layer(LW) || {};
  return {
    ...LF,
    frames: Lt.frames || [],
    rect: Lt.rect,
    scale: Lt.scale,
    w: Lt.w,
    h: Lt.h,
    lit: Lt.meanLit || 0,
    blank: Lt.blank || 0,
    lits: Lt.lits || [],
    hash: Lt.hash,
    ms: Math.round(LQ.ms)
  };
}
L0(renderClip, "renderClip");
function probeSoul(L, H, LW = 4242, LQ = 2400) {
  let LU = fightById(L);
  if (!LU) {
    return {
      ok: false,
      why: "no fight"
    };
  }
  let Lx = attackOf(LU, H);
  return inSandbox(() => {
    let LI = blindGfx();
    let H0 = reachAttack(LU, Lx, LW, LQ, LI);
    if (H0.frame < 0) {
      return {
        ok: false,
        why: H0.why
      };
    }
    let H1 = new Set([soulMode()]);
    for (let H2 = 0; H2 < 45; H2++) {
      tick(Lx, LI);
      let H3 = soulMode();
      if (H3) {
        H1.add(H3);
      }
      if (C.mnfight !== 2) {
        break;
      }
    }
    return {
      ok: true,
      soul: [...H1].filter(Boolean),
      start: H0.frame
    };
  });
}
L0(probeSoul, "probeSoul");
function stateDigest() {
  let H = 2166136261;
  let LW = Lx => {
    H ^= Lx;
    H = Math.imul(H, 16777619) >>> 0;
  };
  let LQ = Lx => Number.isFinite(Lx) ? Math.round(Lx * 16) | 0 : 7;
  let La = Lx => {
    Lx = String(Lx);
    for (let LD = 0; LD < Lx.length; LD++) {
      LW(Lx.charCodeAt(LD));
    }
  };
  LW(F.list.length);
  LW(F.frame | 0);
  for (let Lx of F.list) {
    LW(LQ(Lx.x));
    LW(LQ(Lx.y));
    La(Lx.sprite_index);
    LW(Lx.destroyed ? 1 : 0);
  }
  La(JSON.stringify(C.hp));
  LW(LQ(C.mnfight));
  LW(LQ(C.turntimer));
  LW(t.state >>> 0);
  LW(t.calls | 0);
  LW(l === "ut" ? 99 : Number(l) | 0);
  let Lt = U ? U() : null;
  if (Lt) {
    La(JSON.stringify(Lt));
  }
  return H.toString(16).padStart(8, "0");
}
L0(stateDigest, "stateDigest");
export { MASKS, PASS_ORDER, attackOf, blindGfx, clipJob, clipRect, defaultView, fightById, inSandbox, isThreat, layerOf, probeSoul, renderClip, soulMode, stateDigest, worldIsEmpty };
