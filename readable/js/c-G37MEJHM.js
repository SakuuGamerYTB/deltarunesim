import { f as Z, j as B } from "./c-HXB3NHS7.js";
import { l as L } from "./c-B44KK4IY.js";
import { g as f } from "./c-DLYKGROY.js";
import { a as d, b as a, c as P } from "./c-SATHSCNU.js";
import { d as q } from "./c-3FE7QPYV.js";
import { n as r } from "./c-AWYBS4TS.js";
import { e as J } from "./c-TJDIJSLU.js";
import { c as p } from "./c-VD4WD5M6.js";
import { b as o } from "./c-YJJCI5ES.js";
import { Bb as z, Cb as Y, Kb as H, N as i, Qb as X, Rb as N0, fb as N1, qa as N2 } from "./c-FMIAGHDE.js";
import { a as N3, l as N4 } from "./c-PIEPTJTC.js";
N4();
var N5 = 30;
var N6 = ["b1", "b2", "b3", "left", "right", "up", "down"];
var setupOf = N3(Q => {
  if (!Q) {
    return {};
  }
  let K = Q.partystats !== undefined ? Q : {
    partystats: "CUSTOM",
    ...Q
  };
  return {
    utItems: [],
    utParty: null,
    ...(K.startitems !== undefined ? K : {
      ...K,
      startitems: "OFF"
    })
  };
}, "setupOf");
var N8 = ["font", "color", "alpha", "halign", "valign", "fog"];
function sigString() {
  const NB = function () {
    ;
    let NL = true;
    return function (NO, Nf) {
      const Nd = NL ? function () {
        if (Nf) {
          const Na = Nf.apply(NO, arguments);
          Nf = null;
          return Na;
        }
      } : function () {};
      NL = false;
      return Nd;
    };
  }();
  let Nt = N1.first("obj_heart") || N1.first("obj_purpleheart");
  let Nm = typeof o.hp == "number" ? o.hp : Array.isArray(o.hp) ? (o.hp[1] || 0) + (o.hp[2] || 0) + (o.hp[3] || 0) : 0;
  return (Nt ? (Nt.x | 0) + "," + (Nt.y | 0) : "none") + "|" + Nm + "|" + N1.list.length + "|" + (o.mnfight | 0);
}
N3(sigString, "sigString");
function fnv(Q) {
  let K = 2166136261;
  for (let NB = 0; NB < Q.length; NB++) {
    K ^= Q.charCodeAt(NB);
    K = Math.imul(K, 16777619) >>> 0;
  }
  return K >>> 0;
}
N3(fnv, "fnv");
var sigNow = N3(() => fnv(sigString()) || 1, "sigNow");
function makeNullG() {
  let Q = p(X);
  let K = Q.ctx;
  try {
    Object.defineProperty(Q, "ctx", {
      get: () => K,
      set: () => {},
      configurable: true
    });
  } catch {}
  return Q;
}
N3(makeNullG, "makeNullG");
function writeBits(Q) {
  for (let K = 0; K < N6.length; K++) {
    let NB = N6[K];
    i.held[NB] = !!(Q & 1 << K);
    i.pressed[NB] = !!(Q & 1 << K + 8);
    i.released[NB] = !!(Q & 1 << K + 16);
  }
}
N3(writeBits, "writeBits");
function applyNote(Q) {
  if (Q.k === "godmode") {
    o.godmode = !!Q.v;
  } else if (Q.k === "forceAttack") {
    o.forceAttack = Q.v;
  } else if (Q.k === "kill") {
    if (typeof o.hp == "number") {
      o.hp = 0;
    } else if (Array.isArray(o.char)) {
      for (let K = 0; K < o.char.length; K++) {
        let NB = o.char[K];
        if (NB) {
          o.hp[NB] = 0;
        }
      }
    }
  }
}
N3(applyNote, "applyNote");
function prepare(Q, K) {
  let NB = new Map();
  for (let Nm of Array.isArray(Q.notes) ? Q.notes : []) {
    if (!!Nm && !!Number.isInteger(Nm.f)) {
      if (!NB.has(Nm.f)) {
        NB.set(Nm.f, []);
      }
      NB.get(Nm.f).push(Nm);
    }
  }
  let NU = new Map();
  for (let NL of Array.isArray(Q.checks) ? Q.checks : []) {
    if (Array.isArray(NL) && Number.isInteger(NL[0]) && typeof NL[1] == "string") {
      NU.set(NL[0], parseInt(NL[1], 16) >>> 0 || 1);
    }
  }
  let Nt = K ? Object.assign(Object.create(Object.getPrototypeOf(K)), K) : null;
  if (Nt) {
    delete Nt._guestsIn;
    delete Nt._guestWait;
    delete Nt._guestCount;
  }
  return {
    notes: NB,
    checks: NU,
    fx: Nt
  };
}
N3(prepare, "prepare");
function stage(Q, K, NB) {
  let NU = makeNullG();
  Y(NU);
  a(Q, {
    seed: K.seed | 0,
    cfg: NB
  });
  if (d(Q)) {
    r(Q);
  } else {
    f(Q);
    P(Q, NB);
  }
  o.autoplay = false;
  o.godmode = !!K.godmode0;
  i.synthetic = null;
  return NU;
}
N3(stage, "stage");
function stepFrame(Q, K, NB, NU) {
  let Nt = Q.notes.get(NB - 1);
  if (Nt) {
    for (let Nf of Nt) {
      applyNote(Nf);
    }
  }
  let Nm = K[NB - 1] >>> 0;
  i.synthetic = () => writeBits(Nm);
  if (N2.freetp) {
    o.tension = o.maxtension;
  }
  o.autoplay = false;
  q();
  if (o.godmode) {
    if (typeof o.hp == "number") {
      o.hp = o.maxhp || 20;
    } else if (o.maxhp) {
      for (let Nd = 1; Nd <= 3; Nd++) {
        if (o.maxhp[Nd]) {
          o.hp[Nd] = o.maxhp[Nd];
        }
      }
    }
    o.karma = 0;
    if (o.fightRoom === "room_floweyx" && o.my_inv >= 19 && o.my_hp > 1 && o.my_hp < 50) {
      o.my_hp = 50;
    }
  }
  o.pressedDebugKeys = null;
  L();
  H(J, NU);
  let NL = Q.fx;
  if (NL.customEncounter && !NL._guestsIn) {
    NL._guestWait = (NL._guestWait || 0) + 1;
    if (NL._guestWait >= 3) {
      NL._guestsIn = true;
      NL._guestCount = B(NL);
    }
  }
  if (NL.customEncounter) {
    Z(NL);
  }
  let NO = Q.checks.get(NB);
  if (NO) {
    if (sigNow() === NO) {
      return 1;
    } else {
      return -1;
    }
  } else {
    return 0;
  }
}
N3(stepFrame, "stepFrame");
function takeOver(Q) {
  let K = new X(Q);
  for (let NB of N8) {
    if (z && NB in z) {
      K[NB] = z[NB];
    }
  }
  Y(K);
  return K;
}
N3(takeOver, "takeOver");
function fadeStep(Q) {
  if (!o.inGameOver && o.battleover) {
    Q.fade = Math.min(1, (Q.fade || 0) + 0.04);
  }
}
N3(fadeStep, "fadeStep");
function present(Q, K, NB, NU) {
  Q.setTransform(NB, 0, 0, NB, 0, 0);
  Q.globalAlpha = 1;
  Q.globalCompositeOperation = "source-over";
  Q.imageSmoothingEnabled = false;
  Q.fillStyle = "#000";
  Q.fillRect(0, 0, 640, 480);
  Q.save();
  if (o.roomScale === 2) {
    Q.scale(2, 2);
  }
  Q.translate(Math.round((o.shakex || 0) * (N2.shake ?? 1)), Math.round((o.shakey || 0) * (N2.shake ?? 1)));
  try {
    N0(K, 1);
  } catch {}
  Q.restore();
  if (!o.inGameOver && o.battleover) {
    fadeStep(NU);
    Q.fillStyle = "rgba(0,0,0," + NU.fade + ")";
    Q.fillRect(0, 0, 640, 480);
  }
}
N3(present, "present");
export { N5 as a, N6 as b, setupOf as c, sigString as d, sigNow as e, makeNullG as f, writeBits as g, applyNote as h, prepare as i, stage as j, stepFrame as k, takeOver as l, fadeStep as m, present as n };
