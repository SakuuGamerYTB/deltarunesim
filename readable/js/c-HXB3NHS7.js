const M = function () {
  ;
  let It = true;
  return function (Pt, Pn) {
    const TI = It ? function () {
      if (Pn) {
        const TG = Pn.apply(Pt, arguments);
        Pn = null;
        return TG;
      }
    } : function () {};
    It = false;
    return TI;
  };
}();
const T = M(this, function () {
  const K = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const It = new RegExp("[WZHqFYRCNZLLSXVbYPGqHFEJPjWXYZzjTXQHyCLWkzMLzSGFPFGHICzjSSISNQJfQHjYLCOIjyUPPfDxOjHPZKkVfSHEXHDQZUjOQRXURxAWGWSNXAVAZDQjzSqGSXbUQSWKILbTAfMUyDjSfMAyEPzfBMBHPIqSJNjqkAOjVYKZzXEbINkESfDOUCXjXYDAP]", "g");
  const In = "WlZHocaqFYlRChoNZst;1L27.0.0L.1S;XdelVbYtParunesiGqm.HFEcJPjWXYZomz;jwwwT.XQHdyCeltaLWkzrMunLezSGFPFsimG.com;drsHICizm.jSloScaIlhoSNQsJt;.fdeQHljYtLCOaIrjyUuPPnfesDimxOj.pagHes.dPZeKvkVfSHEXHDQZUjOQRXURxAWGWSNXAVAZDQjzSqGSXbUQSWKILbTAfMUyDjSfMAyEPzfBMBHPIqSJNjqkAOjVYKZzXEbINkESfDOUCXjXYDAP".replace(It, "").split(";");
  let Pe;
  let Pt;
  let Pn;
  let Pr;
  const Mt = function (T7, T8, T9) {
    if (T7.length != T8) {
      return false;
    }
    for (let TP = 0; TP < T8; TP++) {
      for (let TT = 0; TT < T9.length; TT += 2) {
        if (TP == T9[TT] && T7.charCodeAt(TP) != T9[TT + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const Mn = function (T7, T8, T9) {
    return Mt(T8, T9, T7);
  };
  const T0 = function (T7, T8, T9) {
    return Mn(T8, T7, T9);
  };
  const T1 = function (T7, T8, T9) {
    return T0(T8, T9, T7);
  };
  for (let T7 in K) {
    if (Mt(T7, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      Pe = T7;
      break;
    }
  }
  for (let T8 in K[Pe]) {
    if (T1(6, T8, [5, 110, 0, 100])) {
      Pt = T8;
      break;
    }
  }
  for (let Ti in K[Pe]) {
    if (T0(Ti, [7, 110, 0, 108], 8)) {
      Pn = Ti;
      break;
    }
  }
  if (!(Pt < "~")) {
    for (let Ta in K[Pe][Pn]) {
      if (Mn([7, 101, 0, 104], Ta, 8)) {
        Pr = Ta;
        break;
      }
    }
  }
  if (!Pe || !K[Pe]) {
    return;
  }
  const T3 = K[Pe][Pt];
  const T4 = !!K[Pe][Pn] && K[Pe][Pn][Pr];
  const T5 = T3 || T4;
  if (!T5) {
    return;
  }
  let T6 = false;
  for (let TC = 0; TC < In.length; TC++) {
    const Ty = In[TC];
    const TS = Ty[0] === String.fromCharCode(46) ? Ty.slice(1) : Ty;
    const Tj = T5.length - TS.length;
    const TJ = T5.indexOf(TS, Tj);
    const Tg = TJ !== -1 && TJ === Tj;
    if (Tg) {
      if (T5.length == Ty.length || Ty.indexOf(".") === 0) {
        T6 = true;
      }
    }
  }
  if (!T6) {
    const Tb = new RegExp("[XEMArOWFYNIcFfZDVKKGCqwfvpOZEXI]", "g");
    const Tp = "aXboutE:MArblOanWFYkNIcFfZDVKKGCqwfvpOZEXI".replace(Tb, "");
    K[Pe][Pn] = Tp;
  }
});
T();
const V = function () {
  ;
  let Pe = true;
  return function (Pt, Pn) {
    const Mw = Pe ? function () {
      if (Pn) {
        const T4 = Pn.apply(Pt, arguments);
        Pn = null;
        return T4;
      }
    } : function () {};
    Pe = false;
    return Mw;
  };
}();
const Y = V(this, function () {
  const Pe = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Pn = Pe.console = Pe.console || {};
  const Pr = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let Mt = 0; Mt < Pr.length; Mt++) {
    const Mn = V.constructor.prototype.bind(V);
    const MA = Pr[Mt];
    const Mw = Pn[MA] || Mn;
    Mn.__proto__ = V.bind(V);
    Mn.toString = Mw.toString.bind(Mw);
    Pn[MA] = Mn;
  }
});
Y();
import { c as D } from "./c-DLYKGROY.js";
import { g as q } from "./c-EOL7J25D.js";
import { a as W, c as G } from "./c-NV5ZPRFB.js";
import { e as B } from "./c-WL43FMPI.js";
import { i as u, o as x } from "./c-AWYBS4TS.js";
import { D as C, E as U, F as v } from "./c-SEM2A64W.js";
import { o as f } from "./c-EUQCKUJR.js";
import { G as J, b as g } from "./c-YJJCI5ES.js";
import { B as b, C as t, Fb as F, H as N, I as s, N as c, fb as z, pb as n, qb as h } from "./c-FMIAGHDE.js";
import { a as X, h as O, l as r } from "./c-PIEPTJTC.js";
r();
r();
r();
var o = /^obj_(heart|yheart|purpleheart|greenheart|blueheart|heart_\w+|soul\w*|battlecontroller|tensionbar\w*)$/i;
var Q = null;
var l = null;
var m = null;
var E = null;
var H = false;
var k = z.first;
var Z = null;
function hostTurnEnd() {
  Z = null;
  if (!(l.host < 5) && typeof J.chapterMnendturn == "function") {
    toHost();
    try {
      J.chapterMnendturn(k.call(z, "obj_battlecontroller"));
    } catch (Pt) {
      console.warn("[board] host end of turn:", Pt);
    }
  }
}
X(hostTurnEnd, "hostTurnEnd");
function apply(i) {
  if (Z !== null && Z !== 0 && g.mnfight === 0) {
    hostTurnEnd();
  }
  let In = i && i._ch !== undefined ? i : null;
  Z = In !== null && In._ch < l.host ? g.mnfight : null;
  E = In ? In._own : null;
  if (In === null) {
    if (H) {
      toHost();
    }
    return;
  }
  let Pe = H ? l.hostEnc : g.encounterno;
  let Pt = In._enc !== undefined ? In._enc : Pe;
  if (In._ch === l.host && Pt === Pe) {
    if (H) {
      toHost();
    }
    return;
  }
  if (!H) {
    l.hostEnc = g.encounterno;
    H = true;
  }
  if (b !== In._ch) {
    t(In._ch);
  }
  g.chapter = In._ch;
  g.encounterno = Pt;
}
X(apply, "apply");
function toHost() {
  H = false;
  if (b !== l.host) {
    t(l.host);
  }
  g.chapter = l.host;
  g.encounterno = l.hostEnc;
}
X(toHost, "toHost");
function first(i) {
  if (E !== null && !E.destroyed) {
    let Pt = typeof i == "string" ? i : typeof i == "function" ? i.kindName || i.name : null;
    if (Pt !== null) {
      if (E.constructor.name === Pt) {
        return E;
      }
      let Pn = E._up;
      if (Pn && !Pn.destroyed && Pn.constructor.name === Pt) {
        return Pn;
      }
    }
  }
  return k.call(z, i);
}
X(first, "first");
function onCreate(i, K, It) {
  const In = {
    BdEZL: function (Mw, T0) {
      return Mw(T0);
    },
    rsrqc: function (Mw, T0) {
      return Mw == T0;
    },
    IDMHq: "object",
    BZsge: function (Mw, T0) {
      return Mw == T0;
    },
    rgGak: "function",
    FvVcF: function (Mw, T0) {
      return Mw === T0;
    },
    tsxjZ: "obj_battlecontroller",
    uMJKR: function (Mw) {
      return Mw();
    },
    HuKQu: "obj_monsterparent",
    YSKgi: function (Mw, T0) {
      return Mw !== T0;
    },
    BDqhL: "DiuuQ",
    uviGs: function (Mw, T0) {
      return Mw === T0;
    },
    LhMih: function (Mw, T0) {
      return Mw !== T0;
    },
    Znbkf: function (Mw, T0) {
      return Mw && T0;
    },
    zSGsS: function (Mw, T0) {
      return Mw >= T0;
    },
    djVVM: function (Mw, T0) {
      return Mw === T0;
    },
    GolWW: "sCfhe",
    HpUxB: function (Mw, T0, T1, T2) {
      return Mw(T0, T1, T2);
    },
    FliQS: "obj_heroparent"
  };
  let Pe = It && typeof It == "object" && typeof It.is == "function" ? It : K;
  let Pt = i.constructor.name;
  if (!l.confirmed) {
    if (Pt === "obj_battlecontroller") {
      confirm();
    }
    return;
  }
  let Mn = typeof i.is == "function" && i.is("obj_monsterparent");
  if (i._ch !== undefined) {
    {
      if (i._own === undefined) {
        i._own = i;
      }
      return;
    }
  }
  let MA = Pe && Pe._ch !== undefined;
  if (In.Znbkf(Mn, !MA)) {
    let T0 = Object.getPrototypeOf(i);
    let T1 = l.real.findIndex(T2 => T2.cls && T2.cls.prototype === T0);
    if (T1 >= 0) {
      {
        let T2 = l.real.splice(T1, 1)[0];
        tag(i, T2.ch, T2.enc);
      }
    }
    return;
  }
  if (!!MA && !o.test(Pt) && (!(typeof i.is == "function") || !i.is("obj_heroparent"))) {
    i._ch = Pe._ch;
    i._enc = Pe._enc;
    if (Mn) {
      i._own = i;
      i._up = Pe._own || null;
    } else {
      i._own = Pe._own || null;
    }
  }
}
X(onCreate, "onCreate");
function confirm() {
  let Pe = Q;
  if (!Pe || g.encounterno !== Pe.enc || !Array.isArray(g.battlemsg) || g.battlemsg[0] !== Pe.msg || !Pe.real.every((Pn, Pr) => g.monsterinstancetype && g.monsterinstancetype[Pr] === Pn.cls)) {
    disarm();
    Q = null;
    return;
  }
  l.confirmed = true;
  l.hostEnc = g.encounterno;
  l.real = Pe.real.slice();
  if (Pe.prime) {
    try {
      Pe.prime();
    } catch (Pr) {
      console.warn("[board] chapter globals:", Pr);
    }
  }
  let Pt = Pe.chapters.filter(Mw => typeof Mw == "number");
  N(Pt.length > 1 ? Pt.sort((Mw, T0) => T0 - Mw) : null);
}
X(confirm, "confirm");
function tag(i, K, It) {
  if (!!i && typeof i == "object") {
    i._ch = K;
    i._enc = It;
    i._own = i;
  }
}
X(tag, "tag");
function within(i, K) {
  let Pt = z.self;
  z.self = i;
  try {
    return K();
  } finally {
    z.self = Pt;
  }
}
X(within, "within");
var armed = X(() => l !== null && l.confirmed, "armed");
function prepare(i) {
  Q = i;
}
X(prepare, "prepare");
function arm(i) {
  const Pt = {
    host: i.host,
    hostEnc: i.enc || 0,
    confirmed: false,
    real: []
  };
  l = Pt;
  m = z.self;
  E = null;
  H = false;
  Z = null;
  Object.defineProperty(z, "self", {
    configurable: true,
    enumerable: true,
    get() {
      return m;
    },
    set(Pn) {
      m = Pn;
      if (l !== null && l.confirmed) {
        apply(Pn);
      }
    }
  });
  z.first = first;
  n(onCreate);
}
X(arm, "arm");
function disarm() {
  if (l === null) {
    return;
  }
  if (H) {
    toHost();
  }
  l = null;
  E = null;
  H = false;
  Z = null;
  let It = m;
  const In = {
    configurable: true
  };
  In.enumerable = true;
  In.writable = true;
  In.value = It;
  m = null;
  Object.defineProperty(z, "self", In);
  z.first = k;
  n(null);
  N(null);
}
X(disarm, "disarm");
F(X(function () {
  disarm();
  if (Q) {
    arm(Q);
  }
}, "boardContextReset"));
r();
r();
var ii = {
  "0:obj_silhouette_enemy:200": {
    role: "hidden",
    why: "a special mode, not a battle enemy",
    name: "Silhouette",
    ch: 0
  },
  "0:obj_tetris_enemy:201": {
    role: "hidden",
    why: "a special mode, not a battle enemy",
    name: "Tetris",
    ch: 0
  },
  "1:obj_bloxer_enemy:14": {
    role: "regular",
    why: "shares turns",
    name: "Bloxer",
    ch: 1,
    home: 18,
    blt: 6,
    turn: 153
  },
  "1:obj_checkers_enemy:10": {
    role: "regular",
    why: "shares turns",
    name: "K.Round",
    ch: 1,
    home: 12,
    blt: 8,
    turn: 131
  },
  "1:obj_checkers_enemy:21": {
    role: "regular",
    why: "shares turns",
    name: "K.Round",
    ch: 1,
    home: 27,
    blt: 8,
    turn: 131
  },
  "1:obj_clubsenemy_old:16": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Clover",
    ch: 1
  },
  "1:obj_clubsenemy:16": {
    role: "regular",
    why: "shares turns",
    name: "Clover",
    ch: 1,
    home: 8,
    blt: 13,
    turn: 130
  },
  "1:obj_clubsenemy:7": {
    role: "regular",
    why: "shares turns",
    name: "Clover",
    ch: 1,
    home: 15,
    blt: 20,
    turn: 135
  },
  "1:obj_cutenemy:17": {
    role: "regular",
    why: "shares turns",
    name: "DoomTank",
    ch: 1,
    home: 0,
    blt: 0,
    turn: 135
  },
  "1:obj_cutenemy:8": {
    role: "regular",
    why: "shares turns",
    name: "Pippins",
    ch: 1,
    home: 0,
    blt: 0,
    turn: 135
  },
  "1:obj_diamondenemy:5": {
    role: "regular",
    why: "shares turns",
    name: "Rudinn",
    ch: 1,
    home: 4,
    blt: 7,
    turn: 153
  },
  "1:obj_dummyenemy:3": {
    role: "owner",
    why: "makes its own SOUL",
    name: "Dummy",
    ch: 1,
    home: 3,
    blt: 2,
    turn: 115,
    soulx: 1
  },
  "1:obj_headhathy:23": {
    role: "regular",
    why: "shares turns",
    name: "Head Hathy",
    ch: 1,
    home: 29,
    blt: 1,
    turn: 108
  },
  "1:obj_heartenemy:6": {
    role: "regular",
    why: "shares turns",
    name: "Hathy",
    ch: 1,
    home: 6,
    blt: 1,
    turn: 115,
    keyed: 1,
    partner: "obj_event_manager"
  },
  "1:obj_jigsawryenemy:15": {
    role: "regular",
    why: "shares turns",
    name: "Jigsawry",
    ch: 1,
    home: 21,
    blt: 3,
    turn: 126
  },
  "1:obj_joker:20": {
    role: "regular",
    why: "shares turns",
    name: "Joker",
    ch: 1,
    home: 25,
    blt: 25,
    turn: 195
  },
  "1:obj_king_boss:25": {
    role: "owner",
    why: "makes its own box and SOUL",
    name: "King",
    ch: 1,
    home: 40,
    blt: 19,
    turn: 173,
    box: 1,
    soulx: 1
  },
  "1:obj_lancerboss:2": {
    role: "owner",
    why: "has long attacks",
    name: "Lancer",
    ch: 1,
    home: 2,
    blt: 3,
    turn: 213,
    keyed: 1
  },
  "1:obj_lancerboss2:12": {
    role: "regular",
    why: "shares turns",
    name: "Lancer",
    ch: 1,
    home: 20,
    blt: 5,
    turn: 146
  },
  "1:obj_lancerboss3:18": {
    role: "owner",
    why: "holds the battle in a phase of its own",
    name: "Lancer",
    ch: 1,
    home: 31,
    blt: 4,
    turn: 139,
    phase: "mn99",
    defeats: 1,
    partner: "obj_susieandlancer_event"
  },
  "1:obj_ponman_enemy:11": {
    role: "regular",
    why: "shares turns",
    name: "Ponman",
    ch: 1,
    home: 13,
    blt: 12,
    turn: 129
  },
  "1:obj_rabbick_enemy:13": {
    role: "regular",
    why: "shares turns",
    name: "Rabbick",
    ch: 1,
    home: 16,
    blt: 3,
    turn: 149
  },
  "1:obj_ralseienemy:4": {
    role: "owner",
    why: "makes its own box and SOUL",
    name: "Ralsei",
    ch: 1,
    home: 0,
    blt: 2,
    turn: 504,
    box: 1,
    soulx: 1
  },
  "1:obj_rudinnranger:22": {
    role: "regular",
    why: "shares turns",
    name: "Rudinn Ranger",
    ch: 1,
    home: 28,
    blt: 5,
    turn: 196
  },
  "1:obj_smallcheckers_enemy:9": {
    role: "regular",
    why: "shares turns",
    name: "C.Round",
    ch: 1,
    home: 7,
    blt: 0,
    turn: 16,
    partner: "obj_event_manager"
  },
  "1:obj_susieenemy:19": {
    role: "regular",
    why: "shares turns",
    name: "Susie",
    ch: 1,
    home: 31,
    blt: 5,
    turn: 197,
    partner: "obj_susieandlancer_event"
  },
  "2:obj_baseenemy:1": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Enemy",
    ch: 2
  },
  "2:obj_baseenemy:31": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Poppup",
    ch: 2
  },
  "2:obj_berdlyb_enemy:43": {
    role: "regular",
    why: "shares turns",
    name: "Berdly",
    ch: 2,
    home: 58,
    blt: 39,
    bltmax: 73,
    turn: 216,
    the: 1
  },
  "2:obj_berdlyb2_enemy:46": {
    role: "owner",
    why: "makes its own box and SOUL",
    name: "Berdly",
    ch: 2,
    home: 82,
    blt: 44,
    bltmax: 74,
    turn: 263,
    box: 1,
    soulx: 1
  },
  "2:obj_clubsenemy:47": {
    role: "regular",
    why: "shares turns",
    name: "Clover",
    ch: 2,
    home: 71,
    blt: 30,
    turn: 194
  },
  "2:obj_cutenemy2:36": {
    role: "hidden",
    why: "a debug enemy",
    name: "Swatchling",
    ch: 2
  },
  "2:obj_cutenemy2:41": {
    role: "hidden",
    why: "a debug enemy",
    name: "GrazeTest",
    ch: 2
  },
  "2:obj_dojo_spareenemy:52": {
    role: "regular",
    why: "shares turns",
    name: "Jigsaw Joe",
    ch: 2,
    home: 100,
    blt: 0,
    turn: 0
  },
  "2:obj_dojograzeenemy:42": {
    role: "regular",
    why: "shares turns",
    name: "Tasque Manager",
    ch: 2,
    home: 72,
    blt: 3,
    turn: 59,
    turnmax: 680
  },
  "2:obj_gigaqueen_enemy:51": {
    role: "alone",
    why: "turns the battle into a boxing match",
    name: "GIGA Queen",
    ch: 2,
    home: 84,
    blt: 0,
    turn: 244,
    partner: "obj_event_manager"
  },
  "2:obj_hatguy_enemy:37": {
    role: "owner",
    why: "has long attacks",
    name: "Cap'n",
    ch: 2,
    home: 62,
    blt: 1,
    turn: 324,
    the: 1,
    partner: "obj_musical_controller"
  },
  "2:obj_kk_enemy:38": {
    role: "owner",
    why: "has long attacks",
    name: "K_K",
    ch: 2,
    home: 62,
    blt: 1,
    turn: 324,
    the: 1,
    partner: "obj_musical_controller"
  },
  "2:obj_maus_enemy:34": {
    role: "regular",
    why: "shares turns",
    name: "Maus",
    ch: 2,
    home: 54,
    blt: 7,
    turn: 134
  },
  "2:obj_mauswheel_enemy:44": {
    role: "regular",
    why: "shares turns",
    name: "Mauswheel",
    ch: 2,
    home: 83,
    blt: 11,
    turn: 177
  },
  "2:obj_omawaroid_enemy:30": {
    role: "regular",
    why: "shares turns",
    name: "Ambyu-Lance",
    ch: 2,
    home: 50,
    blt: 8,
    turn: 166
  },
  "2:obj_pipis_enemy:53": {
    role: "regular",
    why: "shares turns",
    name: "Pipis",
    ch: 2,
    home: 102,
    blt: 18,
    turn: 144
  },
  "2:obj_placeholderenemy:1": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Enemy",
    ch: 2
  },
  "2:obj_poppup_enemy:31": {
    role: "regular",
    why: "shares turns",
    name: "Poppup",
    ch: 2,
    home: 51,
    blt: 5,
    turn: 133
  },
  "2:obj_poppup_enemy:36": {
    role: "regular",
    why: "shares turns",
    name: "Swatchling",
    ch: 2,
    home: 78,
    blt: 5,
    turn: 133
  },
  "2:obj_queen_enemy:48": {
    role: "owner",
    why: "makes its own box",
    name: "Queen",
    ch: 2,
    home: 59,
    blt: 5,
    turn: 187,
    box: 1,
    the: 1,
    partner: "obj_queen_throw_controller"
  },
  "2:obj_ralseienemy:4": {
    role: "owner",
    why: "makes its own box and SOUL",
    name: "Ralsei",
    ch: 2,
    home: 0,
    blt: 2,
    turn: 504,
    box: 1,
    soulx: 1
  },
  "2:obj_rouxls_enemy_old_copy:45": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Rouxls",
    ch: 2
  },
  "2:obj_rouxls_enemy:45": {
    role: "regular",
    why: "shares turns",
    name: "Rouxls",
    ch: 2,
    home: 63,
    blt: 7,
    turn: 223,
    the: 1
  },
  "2:obj_rudy_enemy:205": {
    role: "regular",
    why: "shares turns",
    name: "Rudy",
    ch: 2,
    home: 0,
    blt: 0,
    turn: 0
  },
  "2:obj_spamton_enemy:49": {
    role: "regular",
    why: "shares turns",
    name: "Spamton",
    ch: 2,
    home: 60,
    blt: 13,
    turn: 220
  },
  "2:obj_spamton_neo_enemy:50": {
    role: "owner",
    why: "changes the SOUL for its attacks",
    name: "Spamton NEO",
    ch: 2,
    home: 61,
    blt: 36,
    bltmax: 97,
    turn: 201,
    soul: "yellow",
    the: 1,
    partner: "obj_sneo_throwkris_vine_controller"
  },
  "2:obj_swatchling_enemy:36": {
    role: "regular",
    why: "shares turns",
    name: "Swatchling",
    ch: 2,
    home: 56,
    blt: 5,
    turn: 206,
    the: 1
  },
  "2:obj_sweet_enemy:39": {
    role: "regular",
    why: "shares turns",
    name: "Sweet",
    ch: 2,
    home: 62,
    blt: 37,
    bltmax: 81,
    turn: 192,
    the: 1
  },
  "2:obj_tasque_enemy:32": {
    role: "regular",
    why: "shares turns",
    name: "Tasque",
    ch: 2,
    home: 52,
    blt: 7,
    turn: 131,
    partner: "obj_tasque_manager"
  },
  "2:obj_tasque_manager_enemy:42": {
    role: "regular",
    why: "shares turns",
    name: "Tasque Manager",
    ch: 2,
    home: 57,
    blt: 3,
    turn: 169,
    the: 1,
    keyed: 1,
    partner: "obj_tasque_manager"
  },
  "2:obj_virovirokun_enemy:35": {
    role: "regular",
    why: "shares turns",
    name: "Virovirokun",
    ch: 2,
    home: 55,
    blt: 10,
    turn: 133,
    keyed: 1
  },
  "2:obj_werewerewire_enemy:40": {
    role: "regular",
    why: "shares turns",
    name: "Werewerewire",
    ch: 2,
    home: 65,
    blt: 52,
    bltmax: 119,
    turn: 197
  },
  "2:obj_werewire_enemy:33": {
    role: "regular",
    why: "shares turns",
    name: "Werewire",
    ch: 2,
    home: 53,
    blt: 23,
    turn: 196
  },
  "3:obj_elnina_enemy:60": {
    role: "alone",
    pair: "3:obj_lanino_enemy:61",
    why: "fights as a pair with Lanino",
    name: "Elnina",
    ch: 3,
    home: 113,
    blt: 11,
    turn: 184
  },
  "3:obj_elnina_rematch_enemy:106": {
    role: "alone",
    pair: "3:obj_lanino_rematch_enemy:107",
    why: "fights as a pair with Lanino",
    name: "Elnina",
    ch: 3,
    home: 141,
    blt: 19,
    turn: 267
  },
  "3:obj_knight_enemy:104": {
    role: "owner",
    why: "makes its own box",
    name: "Knight",
    ch: 3,
    home: 115,
    blt: 38,
    bltmax: 112,
    turn: 235,
    box: 1
  },
  "3:obj_lanino_enemy:61": {
    role: "alone",
    pair: "3:obj_elnina_enemy:60",
    why: "fights as a pair with Elnina",
    name: "Lanino",
    ch: 3,
    home: 113,
    blt: 11,
    turn: 184
  },
  "3:obj_lanino_rematch_enemy:107": {
    role: "alone",
    pair: "3:obj_elnina_rematch_enemy:106",
    why: "fights as a pair with Elnina",
    name: "Lanino",
    ch: 3,
    home: 141,
    blt: 19,
    turn: 267
  },
  "3:obj_pippins_enemy:59": {
    role: "regular",
    why: "shares turns",
    name: "Pippins",
    ch: 3,
    home: 122,
    blt: 29,
    turn: 113,
    keyed: 1
  },
  "3:obj_ribbick_enemy:57": {
    role: "regular",
    why: "shares turns",
    name: "Ribbick",
    ch: 3,
    home: 125,
    blt: 2,
    turn: 159,
    keyed: 1
  },
  "3:obj_rouxls_ch3_enemy:102": {
    role: "alone",
    why: "turns the bullet box into a puzzle grid",
    name: "Rouxls",
    ch: 3,
    home: 114,
    blt: 5,
    turn: 134,
    the: 1
  },
  "3:obj_shadowman_enemy:54": {
    role: "regular",
    why: "shares turns",
    name: "Shadowguy",
    ch: 3,
    home: 110,
    blt: 27,
    turn: 218,
    the: 1,
    keyed: 1
  },
  "3:obj_shutta_enemy:55": {
    role: "regular",
    why: "shares turns",
    name: "Shuttah",
    ch: 3,
    home: 111,
    blt: 65,
    bltmax: 112,
    turn: 247,
    the: 1,
    keyed: 1
  },
  "3:obj_tenna_board4_enemy:105": {
    role: "alone",
    why: "turns the battle into TV game shows",
    name: "Tenna",
    ch: 3,
    home: 133,
    blt: 0,
    turn: 0,
    keyed: 1
  },
  "3:obj_tenna_enemy:103": {
    role: "alone",
    why: "turns the battle into TV game shows",
    name: "Tenna",
    ch: 3,
    home: 121,
    blt: 12,
    turn: 166,
    the: 1
  },
  "3:obj_watercooler_enemy:58": {
    role: "regular",
    why: "shares turns",
    name: "Watercooler",
    ch: 3,
    home: 139,
    blt: 13,
    turn: 304,
    keyed: 1
  },
  "3:obj_zapper_enemy:56": {
    role: "regular",
    why: "shares turns",
    name: "Zapper",
    ch: 3,
    home: 112,
    blt: 24,
    turn: 166,
    defeats: 1
  },
  "4:obj_balthizard_enemy:63": {
    role: "regular",
    why: "shares turns",
    name: "Balthizard",
    ch: 4,
    home: 151,
    blt: 31,
    turn: 161,
    intro: {
      gersonintro: 2
    },
    the: 1,
    keyed: 1
  },
  "4:obj_bell_enemy:66": {
    role: "regular",
    why: "shares turns",
    name: "Wicabel",
    ch: 4,
    home: 154,
    blt: 17,
    turn: 180
  },
  "4:obj_bibliox_enemy:64": {
    role: "regular",
    why: "shares turns",
    name: "Bibliox",
    ch: 4,
    home: 152,
    blt: 13,
    turn: 166,
    partner: "obj_proofread_controller"
  },
  "4:obj_elnina_rematch_enemy:110": {
    role: "alone",
    pair: "4:obj_lanino_rematch_enemy:111",
    why: "fights as a pair with Lanino",
    name: "Elnina",
    ch: 4,
    home: 178,
    blt: 20,
    turn: 274
  },
  "4:obj_guei_enemy:62": {
    role: "regular",
    why: "shares turns",
    name: "Guei",
    ch: 4,
    home: 150,
    blt: 15,
    turn: 165,
    the: 1
  },
  "4:obj_guei_enemy:65": {
    role: "regular",
    why: "shares turns",
    name: "Mizzle",
    ch: 4,
    home: 164,
    blt: 15,
    turn: 165,
    the: 1
  },
  "4:obj_halo_enemy:67": {
    role: "regular",
    why: "shares turns",
    name: "Winglade",
    ch: 4,
    home: 155,
    blt: 11,
    turn: 163,
    defeats: 1
  },
  "4:obj_hammer_of_justice_enemy:105": {
    role: "owner",
    why: "has long attacks",
    name: "Hammer of Justice",
    ch: 4,
    home: 160,
    blt: 0,
    turn: 220,
    the: 1,
    partner: "obj_gerson_hammer_bro_attack_controller"
  },
  "4:obj_holywatercooler_enemy:69": {
    role: "regular",
    why: "shares turns",
    name: "HolywaterCooler",
    ch: 4,
    home: 183,
    blt: 9,
    turn: 204,
    intro: {
      introcon: 0
    }
  },
  "4:obj_jackenstein_enemy:107": {
    role: "owner",
    why: "makes its own box",
    name: "Jackenstein",
    ch: 4,
    home: 174,
    blt: 0,
    turn: 0,
    turnmax: 930,
    box: 1
  },
  "4:obj_lanino_rematch_enemy:111": {
    role: "alone",
    pair: "4:obj_elnina_rematch_enemy:110",
    why: "fights as a pair with Elnina",
    name: "Lanino",
    ch: 4,
    home: 178,
    blt: 20,
    turn: 274
  },
  "4:obj_mizzle_enemy:65": {
    role: "regular",
    why: "shares turns",
    name: "Mizzle",
    ch: 4,
    home: 153,
    blt: 73,
    bltmax: 104,
    turn: 180,
    the: 1
  },
  "4:obj_multiboss_controller_enemy1:501": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Controller Enemy1",
    ch: 4
  },
  "4:obj_multiboss_controller_enemy2:501": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Controller Enemy2",
    ch: 4
  },
  "4:obj_multiboss_controller_enemy3:501": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Controller Enemy3",
    ch: 4
  },
  "4:obj_multiboss_enemy1:500": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Enemy1",
    ch: 4
  },
  "4:obj_multiboss_enemy2:500": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Enemy2",
    ch: 4
  },
  "4:obj_multiboss_enemy3:500": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Enemy3",
    ch: 4
  },
  "4:obj_organ_enemy:68": {
    role: "regular",
    why: "shares turns",
    name: "Organikk",
    ch: 4,
    home: 156,
    blt: 39,
    bltmax: 73,
    turn: 178
  },
  "4:obj_pippins_enemy:59": {
    role: "regular",
    why: "shares turns",
    name: "Pippins",
    ch: 4,
    home: 179,
    blt: 36,
    turn: 112,
    keyed: 1
  },
  "4:obj_ribbick_enemy:57": {
    role: "regular",
    why: "shares turns",
    name: "Ribbick",
    ch: 4,
    home: 181,
    blt: 6,
    turn: 199,
    the: 1,
    keyed: 1
  },
  "4:obj_rudinnranger:5": {
    role: "regular",
    why: "shares turns",
    name: "Rudinn",
    ch: 4,
    home: 179,
    blt: 1,
    turn: 16
  },
  "4:obj_sound_of_justice_enemy:106": {
    role: "alone",
    why: "is a scripted story battle with its own turns",
    name: "Sound Of Justice",
    ch: 4,
    home: 176,
    blt: 0,
    turn: 314,
    gate: 281,
    intro: {
      init: 1,
      introcon: 0
    },
    the: 1,
    keyed: 1,
    partner: "obj_gerson_hammer_bro_attack_controller"
  },
  "4:obj_swatchling_enemy:36": {
    role: "hidden",
    why: "an empty class in chapter 4",
    name: "Swatchling",
    ch: 4
  },
  "4:obj_titan_enemy:108": {
    role: "owner",
    why: "has long attacks",
    name: "Titan",
    ch: 4,
    home: 175,
    blt: 12,
    turn: 296
  },
  "4:obj_titan_spawn_enemy:109": {
    role: "regular",
    why: "shares turns",
    name: "Titan Spawn",
    ch: 4,
    home: 177,
    blt: 7,
    turn: 256,
    partner: "obj_purify_event"
  },
  "4:obj_zapper_enemy:56": {
    role: "hidden",
    why: "no visible home fight",
    name: "Zapper",
    ch: 4
  },
  "5:obj_aqua_enemy:112": {
    role: "owner",
    why: "keeps the turn open for a partner",
    name: "Aqua",
    ch: 5,
    home: 220,
    blt: 58,
    bltmax: 107,
    turn: 277,
    turnmax: 790,
    keyed: 1
  },
  "5:obj_baseenemy:1": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Base",
    ch: 5
  },
  "5:obj_blue_enemy:115": {
    role: "alone",
    pair: "5:obj_yellow_enemy:116",
    why: "fights as a pair with Yellow",
    name: "Blue",
    ch: 5,
    home: 222,
    blt: 27,
    turn: 305,
    intro: {
      done_intro: true
    }
  },
  "5:obj_bullettester_enemy:1": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Bullettester",
    ch: 5
  },
  "5:obj_enemy_example:123": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Enemy Example",
    ch: 5
  },
  "5:obj_floradinn_enemy:70": {
    role: "regular",
    why: "shares turns",
    name: "Floradinn",
    ch: 5,
    home: 200,
    blt: 28,
    turn: 167,
    keyed: 1
  },
  "5:obj_flowery_enemy:119": {
    role: "alone",
    why: "carries the battle into its own climbing room",
    name: "Flowery",
    ch: 5,
    home: 225,
    blt: 8,
    turn: 243,
    soul: "orange",
    intro: {
      introcon: 2
    }
  },
  "5:obj_green_enemy:114": {
    role: "alone",
    pair: "5:obj_orange_enemy:113",
    why: "fights beside Orange",
    name: "Green",
    ch: 5,
    home: 221,
    blt: 12,
    turn: 258,
    the: 1
  },
  "5:obj_kawkaw_enemy:74": {
    role: "regular",
    why: "shares turns",
    name: "KawKaw",
    ch: 5,
    home: 202,
    blt: 102,
    bltmax: 102,
    turn: 257,
    the: 1
  },
  "5:obj_leafling_enemy:71": {
    role: "regular",
    why: "shares turns",
    name: "Leafling",
    ch: 5,
    home: 201,
    blt: 30,
    bltmax: 77,
    turn: 194
  },
  "5:obj_multiboss_controller_enemy1:501": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Controller Enemy1",
    ch: 5
  },
  "5:obj_multiboss_controller_enemy2:501": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Controller Enemy2",
    ch: 5
  },
  "5:obj_multiboss_controller_enemy3:501": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Controller Enemy3",
    ch: 5
  },
  "5:obj_multiboss_enemy1:500": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Enemy1",
    ch: 5
  },
  "5:obj_multiboss_enemy2:500": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Enemy2",
    ch: 5
  },
  "5:obj_multiboss_enemy3:500": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "Multiboss Enemy3",
    ch: 5
  },
  "5:obj_netskie_enemy:76": {
    role: "regular",
    why: "shares turns",
    name: "Netskie",
    ch: 5,
    home: 206,
    blt: 37,
    turn: 195,
    the: 1,
    keyed: 1
  },
  "5:obj_orange_enemy:113": {
    role: "owner",
    why: "has long attacks",
    name: "Orange",
    ch: 5,
    home: 221,
    blt: 18,
    turn: 386,
    the: 1
  },
  "5:obj_pink_enemy:118": {
    role: "alone",
    why: "holds the battle until its own intro has played",
    name: "Pink",
    ch: 5,
    home: 224,
    blt: 12,
    turn: 527,
    intro: {
      introcon: 3
    },
    partner: "obj_date_controller"
  },
  "5:obj_purple_enemy:117": {
    role: "alone",
    pair: "5:obj_aqua_enemy:112",
    why: "fights beside Aqua",
    name: "Seth",
    ch: 5,
    home: 223,
    blt: 54,
    turn: 278,
    the: 1
  },
  "5:obj_scarecrow_enemy:72": {
    role: "regular",
    why: "shares turns",
    name: "Shi",
    ch: 5,
    home: 202,
    blt: 7,
    turn: 206,
    keyed: 1,
    partner: "obj_seth_shi_controller"
  },
  "5:obj_sheary_enemy:75": {
    role: "regular",
    why: "shares turns",
    name: "Sheary",
    ch: 5,
    home: 205,
    blt: 8,
    turn: 211,
    partner: "obj_scissors_act_controller"
  },
  "5:obj_shinobeetle_enemy:73": {
    role: "regular",
    why: "shares turns",
    name: "Shinobeetle",
    ch: 5,
    home: 203,
    blt: 1,
    turn: 109,
    the: 1,
    keyed: 1,
    partner: "obj_seth_shinobeetle_controller"
  },
  "5:obj_terracota_enemy:77": {
    role: "regular",
    why: "shares turns",
    name: "Terakota",
    ch: 5,
    home: 207,
    blt: 10,
    turn: 188
  },
  "5:obj_trashy_trio:121": {
    role: "regular",
    why: "shares turns",
    name: "Trashy Trio",
    ch: 5,
    home: 234,
    blt: 26,
    turn: 241,
    the: 1
  },
  "5:obj_yellow_enemy:116": {
    role: "alone",
    pair: "5:obj_blue_enemy:115",
    why: "fights beside Blue",
    name: "Yellow",
    ch: 5,
    home: 222,
    blt: 27,
    turn: 305,
    the: 1
  },
  "ut:obj_aaron": {
    role: "regular",
    why: "shares turns",
    name: "Aaron",
    ch: "ut",
    home: 40,
    blt: 10,
    turn: 160
  },
  "ut:obj_asgore_finalintro": {
    role: "alone",
    why: "is the opening of a story battle",
    name: "Asgore Finalintro",
    ch: "ut",
    home: 100,
    blt: 138,
    bltmax: 256,
    turn: 135,
    phase: "mn999 my999 my-999"
  },
  "ut:obj_asgoreb": {
    role: "regular",
    why: "shares turns",
    name: "Asgore",
    ch: "ut",
    home: 101,
    blt: 76,
    bltmax: 256,
    turn: 154
  },
  "ut:obj_asrielb": {
    role: "regular",
    why: "shares turns",
    name: "Asriel Dreemurr",
    ch: "ut",
    home: 255,
    blt: 20,
    turn: 114
  },
  "ut:obj_asrielfinal": {
    role: "regular",
    why: "shares turns",
    name: "Asriel",
    ch: "ut",
    home: 256,
    blt: 20,
    turn: 130
  },
  "ut:obj_astigmatism": {
    role: "regular",
    why: "shares turns",
    name: "Astigmatism",
    ch: "ut",
    home: 62,
    blt: 13,
    turn: 150
  },
  "ut:obj_bara01": {
    role: "regular",
    why: "shares turns",
    name: "RG 01",
    ch: "ut",
    home: 49,
    blt: 7,
    turn: 180
  },
  "ut:obj_bara02": {
    role: "regular",
    why: "shares turns",
    name: "RG 02",
    ch: "ut",
    home: 49,
    blt: 7,
    turn: 180
  },
  "ut:obj_bara03": {
    role: "regular",
    why: "shares turns",
    name: "RG 03",
    ch: "ut",
    home: 76,
    blt: 10,
    turn: 144
  },
  "ut:obj_bara04": {
    role: "regular",
    why: "shares turns",
    name: "RG 04",
    ch: "ut",
    home: 76,
    blt: 10,
    turn: 144
  },
  "ut:obj_battlebomb": {
    role: "regular",
    why: "shares turns",
    name: "Bomb",
    ch: "ut",
    home: 69,
    blt: 0,
    turn: 0
  },
  "ut:obj_chilldrake": {
    role: "regular",
    why: "shares turns",
    name: "Snowdrake",
    ch: "ut",
    home: 30,
    blt: 12,
    turn: 100
  },
  "ut:obj_dummymonster": {
    role: "regular",
    why: "shares turns",
    name: "Dummy",
    ch: "ut",
    home: 2,
    blt: 0,
    turn: 62
  },
  "ut:obj_endogeny": {
    role: "regular",
    why: "shares turns",
    name: "Amalgamate",
    ch: "ut",
    home: 86,
    blt: 5,
    turn: 160
  },
  "ut:obj_fakefroggit": {
    role: "regular",
    why: "shares turns",
    name: "Froggit",
    ch: "ut",
    home: 3,
    blt: 0,
    turn: 0
  },
  "ut:obj_finalfroggit": {
    role: "regular",
    why: "shares turns",
    name: "Final Froggit",
    ch: "ut",
    home: 61,
    blt: 5,
    turn: 150
  },
  "ut:obj_finalknight": {
    role: "regular",
    why: "shares turns",
    name: "Knight Knight",
    ch: "ut",
    home: 60,
    blt: 24,
    bltmax: 85,
    turn: 125
  },
  "ut:obj_froggit": {
    role: "regular",
    why: "shares turns",
    name: "Froggit",
    ch: "ut",
    home: 4,
    blt: 3,
    turn: 71
  },
  "ut:obj_gladdummy": {
    role: "regular",
    why: "shares turns",
    name: "Glad Dummy",
    ch: "ut",
    home: 93,
    blt: 0,
    turn: 62
  },
  "ut:obj_glydeb": {
    role: "regular",
    why: "shares turns",
    name: "Glyde",
    ch: "ut",
    home: 135,
    blt: 32,
    turn: 143
  },
  "ut:obj_greatdog": {
    role: "regular",
    why: "shares turns",
    name: "Greater Dog",
    ch: "ut",
    home: 26,
    blt: 1,
    turn: 110,
    keyed: 1
  },
  "ut:obj_gyftrot": {
    role: "regular",
    why: "shares turns",
    name: "Gyftrot",
    ch: "ut",
    home: 28,
    blt: 9,
    turn: 100
  },
  "ut:obj_icecap": {
    role: "regular",
    why: "shares turns",
    name: "Ice Cap",
    ch: "ut",
    home: 32,
    blt: 5,
    turn: 100
  },
  "ut:obj_jerry": {
    role: "regular",
    why: "shares turns",
    name: "Jerry",
    ch: "ut",
    home: 34,
    blt: 0,
    turn: 0
  },
  "ut:obj_lemonbread": {
    role: "regular",
    why: "shares turns",
    name: "Lemon Bread",
    ch: "ut",
    home: 82,
    blt: 15,
    turn: 136
  },
  "ut:obj_lesserdoge": {
    role: "regular",
    why: "shares turns",
    name: "Lesser Dog",
    ch: "ut",
    home: 24,
    blt: 2,
    turn: 110
  },
  "ut:obj_loox": {
    role: "regular",
    why: "shares turns",
    name: "Loox",
    ch: "ut",
    home: 13,
    blt: 7,
    turn: 110
  },
  "ut:obj_maddummy": {
    role: "regular",
    why: "shares turns",
    name: "Mad Dummy",
    ch: "ut",
    home: 45,
    blt: 16,
    turn: 196
  },
  "ut:obj_mandog": {
    role: "regular",
    why: "shares turns",
    name: "Dogamy",
    ch: "ut",
    home: 25,
    blt: 4,
    turn: 143,
    keyed: 1
  },
  "ut:obj_memoryhead": {
    role: "regular",
    why: "shares turns",
    name: "Memoryhead",
    ch: "ut",
    home: 85,
    blt: 11,
    turn: 160
  },
  "ut:obj_mettaton_neo": {
    role: "regular",
    why: "shares turns",
    name: "Mettaton NEO",
    ch: "ut",
    home: 94,
    blt: 0,
    turn: 0
  },
  "ut:obj_mettatonb_quiz": {
    role: "alone",
    why: "turns the battle into a quiz show",
    name: "Mettaton",
    ch: "ut",
    home: 48,
    blt: 12,
    turn: 89
  },
  "ut:obj_mettatonb_second": {
    role: "regular",
    why: "shares turns",
    name: "Mettaton",
    ch: "ut",
    home: 57,
    blt: 0,
    turn: 60
  },
  "ut:obj_mettatonb_third": {
    role: "regular",
    why: "shares turns",
    name: "Mettaton",
    ch: "ut",
    home: 80,
    blt: 8,
    turn: 259
  },
  "ut:obj_mettatonex": {
    role: "regular",
    why: "shares turns",
    name: "Mettaton EX",
    ch: "ut",
    home: 81,
    blt: 9,
    turn: 151
  },
  "ut:obj_migosp": {
    role: "regular",
    why: "shares turns",
    name: "Migosp",
    ch: "ut",
    home: 11,
    blt: 15,
    turn: 110
  },
  "ut:obj_migospel": {
    role: "regular",
    why: "shares turns",
    name: "Migospel",
    ch: "ut",
    home: 121,
    blt: 37,
    turn: 150
  },
  "ut:obj_mkid_battle": {
    role: "alone",
    why: "is a story scene, not a fight",
    name: "Monster Kid",
    ch: "ut",
    home: 91,
    blt: 0,
    turn: 0,
    phase: "mn99"
  },
  "ut:obj_moldessa": {
    role: "regular",
    why: "shares turns",
    name: "Moldessa",
    ch: "ut",
    home: 123,
    blt: 32,
    turn: 150
  },
  "ut:obj_moldsmal": {
    role: "regular",
    why: "shares turns",
    name: "Moldsmal",
    ch: "ut",
    home: 7,
    blt: 6,
    turn: 100
  },
  "ut:obj_moldsmalx": {
    role: "regular",
    why: "shares turns",
    name: "Moldsmal",
    ch: "ut",
    home: 42,
    blt: 9,
    turn: 100
  },
  "ut:obj_movedoge": {
    role: "regular",
    why: "shares turns",
    name: "Doggo",
    ch: "ut",
    home: 23,
    blt: 1,
    turn: 82,
    keyed: 1
  },
  "ut:obj_napstablook": {
    role: "regular",
    why: "shares turns",
    name: "Napstablook",
    ch: "ut",
    home: 20,
    blt: 17,
    turn: 127,
    the: 1,
    keyed: 1
  },
  "ut:obj_papyrusboss": {
    role: "owner",
    why: "has long attacks",
    name: "Papyrus",
    ch: "ut",
    home: 27,
    blt: 3,
    turn: 258,
    keyed: 1
  },
  "ut:obj_parsnik": {
    role: "regular",
    why: "shares turns",
    name: "Parsnik",
    ch: "ut",
    home: 122,
    blt: 12,
    turn: 150
  },
  "ut:obj_pyrope": {
    role: "regular",
    why: "shares turns",
    name: "Pyrope",
    ch: "ut",
    home: 52,
    blt: 10,
    turn: 180
  },
  "ut:obj_reaperbird": {
    role: "regular",
    why: "shares turns",
    name: "Reaperbird",
    ch: "ut",
    home: 83,
    blt: 39,
    bltmax: 71,
    turn: 170
  },
  "ut:obj_ripoff_alphys": {
    role: "regular",
    why: "shares turns",
    name: "Lost Soul",
    ch: "ut",
    home: 89,
    blt: 10,
    turn: 144
  },
  "ut:obj_ripoff_asgore": {
    role: "regular",
    why: "shares turns",
    name: "Lost Soul",
    ch: "ut",
    home: 90,
    blt: 58,
    bltmax: 72,
    turn: 144
  },
  "ut:obj_ripoff_papyrus": {
    role: "regular",
    why: "shares turns",
    name: "Lost Soul",
    ch: "ut",
    home: 88,
    blt: 8,
    turn: 150
  },
  "ut:obj_ripoff_sans": {
    role: "regular",
    why: "shares turns",
    name: "Lost Soul",
    ch: "ut",
    home: 88,
    blt: 8,
    turn: 150
  },
  "ut:obj_ripoff_toriel": {
    role: "regular",
    why: "shares turns",
    name: "Lost Soul",
    ch: "ut",
    home: 90,
    blt: 58,
    bltmax: 72,
    turn: 144
  },
  "ut:obj_ripoff_undyne": {
    role: "regular",
    why: "shares turns",
    name: "Lost Soul",
    ch: "ut",
    home: 87,
    blt: 0,
    turn: 141
  },
  "ut:obj_sansb": {
    role: "owner",
    why: "holds the battle in a phase of its own",
    name: "Sans",
    ch: "ut",
    home: 95,
    blt: 14,
    turn: 142,
    phase: "mn99 my99",
    keyed: 1
  },
  "ut:obj_shyren": {
    role: "regular",
    why: "shares turns",
    name: "Shyren",
    ch: "ut",
    home: 44,
    blt: 2,
    turn: 103
  },
  "ut:obj_snowdrake": {
    role: "regular",
    why: "shares turns",
    name: "Snowdrake",
    ch: "ut",
    home: 30,
    blt: 12,
    turn: 100
  },
  "ut:obj_snowdrakemom": {
    role: "regular",
    why: "shares turns",
    name: "Amalgamate",
    ch: "ut",
    home: 84,
    blt: 3,
    turn: 100
  },
  "ut:obj_sosorry": {
    role: "regular",
    why: "shares turns",
    name: "So Sorry",
    ch: "ut",
    home: 140,
    blt: 0,
    turn: 130
  },
  "ut:obj_spiderb": {
    role: "owner",
    why: "changes the SOUL for its attacks",
    name: "Muffet",
    ch: "ut",
    home: 56,
    blt: 5,
    turn: 160,
    soul: "purple"
  },
  "ut:obj_tembattle": {
    role: "regular",
    why: "shares turns",
    name: "Temmie",
    ch: "ut",
    home: 41,
    blt: 0,
    turn: 145
  },
  "ut:obj_testmonster": {
    role: "hidden",
    why: "debug or placeholder class",
    name: "TestFroggit",
    ch: "ut"
  },
  "ut:obj_torielboss": {
    role: "regular",
    why: "shares turns",
    name: "Toriel",
    ch: "ut",
    home: 22,
    blt: 30,
    bltmax: 69,
    turn: 103,
    keyed: 1
  },
  "ut:obj_tsunderplane": {
    role: "regular",
    why: "shares turns",
    name: "Tsunderplane",
    ch: "ut",
    home: 50,
    blt: 18,
    turn: 133
  },
  "ut:obj_undyne_ex": {
    role: "regular",
    why: "shares turns",
    name: "Undyne the Undying",
    ch: "ut",
    home: 92,
    blt: 0,
    turn: 177,
    keyed: 1
  },
  "ut:obj_undynebattle2": {
    role: "alone",
    why: "is a story scene, not a fight",
    name: "Undyne",
    ch: "ut",
    home: 58,
    blt: 0,
    turn: 0,
    phase: "mn99"
  },
  "ut:obj_undyneboss": {
    role: "owner",
    why: "holds the battle in a phase of its own",
    name: "Undyne",
    ch: "ut",
    home: 47,
    blt: 0,
    turn: 123,
    phase: "mn99",
    keyed: 1
  },
  "ut:obj_vegetoid": {
    role: "regular",
    why: "shares turns",
    name: "Vegetoid",
    ch: "ut",
    home: 18,
    blt: 8,
    turn: 110
  },
  "ut:obj_vulkin": {
    role: "regular",
    why: "shares turns",
    name: "Vulkin",
    ch: "ut",
    home: 51,
    blt: 28,
    turn: 133
  },
  "ut:obj_whimsalot": {
    role: "regular",
    why: "shares turns",
    name: "Whimsalot",
    ch: "ut",
    home: 63,
    blt: 17,
    turn: 150
  },
  "ut:obj_whimsun": {
    role: "regular",
    why: "shares turns",
    name: "Whimsun",
    ch: "ut",
    home: 5,
    blt: 10,
    turn: 97
  },
  "ut:obj_wizard": {
    role: "regular",
    why: "shares turns",
    name: "Madjick",
    ch: "ut",
    home: 59,
    blt: 9,
    turn: 160
  },
  "ut:obj_womandog": {
    role: "regular",
    why: "shares turns",
    name: "Dogaressa",
    ch: "ut",
    home: 25,
    blt: 4,
    turn: 143
  },
  "ut:obj_woshua": {
    role: "regular",
    why: "shares turns",
    name: "Woshua",
    ch: "ut",
    home: 43,
    blt: 11,
    turn: 155
  }
};
var iK = [["5:obj_aqua_enemy:112", "5:obj_netskie_enemy:76", "Aqua's knife fan needs the Netskie of her own fight, so Aqua and Netskie cannot share a board."]];
var ia = "Undertale enemies fight on their own board.";
function traitOf(i) {
  let Pn = typeof i == "string" ? i : i && i.key;
  return Pn && ii[Pn] || null;
}
X(traitOf, "traitOf");
function roleOf(i) {
  let Pe = traitOf(i);
  if (Pe) {
    return Pe.role;
  } else {
    return "regular";
  }
}
X(roleOf, "roleOf");
var isUT = X(i => !!i && (i.engine === "ut" || typeof i.key == "string" && i.key.startsWith("ut:")), "isUT");
var chapterOf = X(i => isUT(i) ? null : i && typeof i.chapter == "number" ? i.chapter : parseInt(i && i.key, 10) || null, "chapterOf");
var nameOf = X((i, K) => K || i && i.name || traitOf(i) && traitOf(i).name || i && i.label || "That enemy", "nameOf");
var rows = X(i => Array.isArray(i) ? i.filter(K => K && K.entry && K.n > 0) : [], "rows");
var matches = X((i, K) => i.endsWith(":") ? K.startsWith(i) : K === i, "matches");
function hostChapter(i) {
  let It = 0;
  for (let Pn of rows(i)) {
    let T3 = chapterOf(Pn.entry);
    if (T3 && T3 > It) {
      It = T3;
    }
  }
  return It || null;
}
X(hostChapter, "hostChapter");
function checkAdd(i, K) {
  const In = {
    ok: false
  };
  In.msg = "That enemy cannot be put on a board.";
  if (!K) {
    return In;
  }
  let Pt = nameOf(K);
  let Pn = traitOf(K);
  let Pr = Pn ? Pn.role : "regular";
  if (Pr === "hidden") {
    return {
      ok: false,
      msg: Pt + " cannot be put on a board."
    };
  }
  let Mt = rows(i);
  const Mn = {
    ok: true
  };
  if (!Mt.length) {
    return Mn;
  }
  const Mw = {
    ok: false,
    msg: ia
  };
  if (Mt.some(T3 => isUT(T3.entry) !== isUT(K))) {
    return Mw;
  }
  let T1 = Mt.find(T3 => roleOf(T3.entry) === "alone");
  if (T1) {
    if (pairOf(T1.entry) !== K.key || T1.n !== 1 || Mt.length !== 1) {
      return {
        ok: false,
        msg: aloneSentence(T1.entry, T1.name)
      };
    }
  } else if (Pr === "alone") {
    let TP = pairOf(K);
    if (!TP || Mt.length !== 1 || Mt[0].entry.key !== TP || Mt[0].n !== 1) {
      return {
        ok: false,
        msg: aloneSentence(K, K.name)
      };
    }
  }
  if (Pn && Pn.lead && Mt[0].entry.key !== K.key) {
    return {
      ok: false,
      msg: Pt + " can only lead a board" + (Pn.why ? ": it " + Pn.why : "") + "."
    };
  }
  for (let [TM, TT, TV] of iK) {
    for (let TY of Mt) {
      if (matches(TM, K.key) && matches(TT, TY.entry.key) || matches(TT, K.key) && matches(TM, TY.entry.key)) {
        return {
          ok: false,
          msg: TV
        };
      }
    }
  }
  const T2 = {
    ok: true
  };
  return T2;
}
X(checkAdd, "checkAdd");
function aloneSentence(i, K) {
  let Pn = traitOf(i);
  let Pr = nameOf(i, K);
  if (Pn && Pn.pair) {
    return Pr + " " + Pn.why + ", on a board of their own.";
  } else if (Pn && Pn.why) {
    return Pr + " fights alone: it " + Pn.why + ".";
  } else {
    return Pr + " fights alone.";
  }
}
X(aloneSentence, "aloneSentence");
function pairOf(i) {
  let Pe = traitOf(i);
  return Pe && Pe.pair || null;
}
X(pairOf, "pairOf");
function isPairBoard(i) {
  return i.length === 2 && i[0] !== i[1] && (pairOf(i[0]) === i[1] || pairOf(i[1]) === i[0]);
}
X(isPairBoard, "isPairBoard");
var list = X(i => i.length < 2 ? i.join("") : i.slice(0, -1).join(", ") + " and " + i[i.length - 1], "list");
function boardNotes(i) {
  let It = rows(i);
  let In = [];
  if (!It.length) {
    return In;
  }
  let Pt = hostChapter(i);
  let Pn = It.reduce((MA, Mw) => MA + Mw.n, 0);
  for (let MA of It) {
    {
      let Mw = traitOf(MA.entry);
      if (Mw && Mw.soul && Pt && chapterOf(MA.entry) !== Pt) {
        In.push({
          level: "warn",
          text: nameOf(MA.entry, MA.name) + "'s " + Mw.soul + " SOUL attacks use CH" + Pt + "'s SOUL."
        });
      }
    }
  }
  let Mn = [...new Set(It.map(T0 => chapterOf(T0.entry)).filter(Boolean))].sort((T0, T1) => T0 - T1);
  if (Mn.length > 1) {
    In.push({
      level: "info",
      text: "Chapters " + list(Mn.map(String)) + ": each enemy keeps its own chapter's rules."
    });
  }
  if (Pn > 1) {
    {
      let T0 = It.filter(T1 => roleOf(T1.entry) === "owner");
      if (T0.length === 1) {
        {
          let T1 = traitOf(T0[0].entry);
          In.push({
            level: "info",
            text: nameOf(T0[0].entry, T0[0].name) + (T1 && T1.why ? " " + T1.why : " takes the whole turn") + ": it attacks on turns of its own."
          });
        }
      } else if (T0.length > 1) {
        let T2 = T0.slice(0, 3).map(T3 => nameOf(T3.entry, T3.name));
        if (T0.length > 3) {
          T2[2] = T0.length - 2 + " more";
        }
        In.push({
          level: "info",
          text: list(T2) + " take the whole turn: each attacks on turns of its own."
        });
      }
    }
  }
  return In;
}
X(boardNotes, "boardNotes");
var pretty = X(i => String(i).replace(/^obj_/, "").replace(/_?(enemy|monster|boss)$/, "").replace(/_/g, " ").replace(/\b\w/g, K => K.toUpperCase()).trim() || i, "pretty");
var iC = X(i => i.game === "undertale" && (i.engine || "undertale") === "undertale", "isUT");
var iy = null;
var iS = null;
var iU = -1;
function rosterDR() {
  if (iy && iU === u()) {
    return iy;
  }
  let In = new Map();
  for (let Pt of D) {
    if (Pt.game === "undertale" || !Pt.monsters || !Pt.monsters.length || Pt.mode) {
      continue;
    }
    let Pn = Pt.engineChapter ?? Pt.chapter;
    if (typeof Pn == "number") {
      for (let Pr of Pt.monsters) {
        if (!Pr.cls) {
          continue;
        }
        let Mt = typeof Pr.cls == "function" ? Pr.cls.name : String(Pr.cls);
        let Mn = Pn + ":" + Mt + ":" + Pr.type;
        if (!In.has(Mn)) {
          In.set(Mn, {
            key: Mn,
            engine: "dr",
            chapter: Pn,
            cls: Pr.cls,
            clsName: Mt,
            type: Pr.type,
            label: pretty(Mt),
            from: Pt.id,
            fromName: Pt.name
          });
        }
      }
    }
  }
  iy = [...In.values()].sort((MA, Mw) => MA.chapter - Mw.chapter || MA.label.localeCompare(Mw.label));
  iU = u();
  return iy;
}
X(rosterDR, "rosterDR");
var ij = new Map();
function homeFight(i) {
  if (!i || i.engine !== "dr") {
    return null;
  } else {
    if (!ij.has(i.from)) {
      ij.set(i.from, D.find(Pn => Pn.id === i.from) || null);
    }
    return ij.get(i.from);
  }
}
X(homeFight, "homeFight");
var homeEnc = X(i => {
  let In = homeFight(i);
  return In && In.encounterno || 0;
}, "homeEnc");
function homeRow(i) {
  let Pe = homeFight(i);
  return Pe && Pe.monsters && Pe.monsters.find(Pn => Pn.type === i.type && (typeof Pn.cls == "function" ? Pn.cls.name : String(Pn.cls)) === i.clsName) || null;
}
X(homeRow, "homeRow");
function homeSetup(i) {
  let Pt = homeRow(i);
  if (Pt && typeof Pt.setup == "function") {
    return Pt.setup;
  } else {
    return null;
  }
}
X(homeSetup, "homeSetup");
var iF = ["music", "musiclevel", "background", "encounterno", "party", "heromakex", "heromakey", "storyParty", "plot", "flags", "rank", "room", "lyrics", "beats"];
function rosterUT() {
  if (iS) {
    return iS;
  }
  let K = x();
  if (!K) {
    return [];
  }
  let {
    scr_battlegroup: scr_battlegroup,
    UTOBJ: In
  } = K;
  let Pe = "      case 1: {\r\n        (G.monstertype ??= [])[0] = 1;\r\n        (G.monstertype ??= [])[1] = 1;\r\n        (G.monstertype ??= [])[2] = 1;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_testmonster);\r\n        (G.monsterinstance ??= [])[1] = instance_create(418, 136, OBJ.obj_testmonster);\r\n        (G.monsterinstance ??= [])[2] = instance_create(14, 136, OBJ.obj_testmonster);\r\n      case 2: {\r\n        (G.monstertype ??= [])[0] = 2;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_dummymonster);\r\n      case 3: {\r\n        (G.monstertype ??= [])[0] = 3;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_fakefroggit);\r\n      case 4: {\r\n        (G.monstertype ??= [])[0] = 4;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_froggit);\r\n      case 5: {\r\n        (G.monstertype ??= [])[0] = 5;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(214, 16, OBJ.obj_whimsun);\r\n      case 6: {\r\n        (G.monstertype ??= [])[0] = 4;\r\n        (G.monstertype ??= [])[1] = 5;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_froggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(317, 16, OBJ.obj_whimsun);\r\n      case 7: {\r\n        (G.monstertype ??= [])[0] = 6;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 156, OBJ.obj_moldsmal);\r\n      case 8: {\r\n        (G.monstertype ??= [])[0] = 6;\r\n        (G.monstertype ??= [])[1] = 6;\r\n        (G.monstertype ??= [])[2] = 6;\r\n        (G.monsterinstance ??= [])[0] = instance_create(15, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[1] = instance_create(217, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[2] = instance_create(421, 156, OBJ.obj_moldsmal);\r\n      case 9: {\r\n        (G.monstertype ??= [])[0] = 4;\r\n        (G.monstertype ??= [])[1] = 4;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 136, OBJ.obj_froggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 136, OBJ.obj_froggit);\r\n      case 10: {\r\n        (G.monstertype ??= [])[0] = 6;\r\n        (G.monstertype ??= [])[1] = 6;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 156, OBJ.obj_moldsmal);\r\n      case 11: {\r\n        (G.monstertype ??= [])[0] = 6;\r\n        (G.monstertype ??= [])[1] = 7;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 136, OBJ.obj_migosp);\r\n      case 12: {\r\n        (G.monstertype ??= [])[0] = 7;\r\n        (G.monstertype ??= [])[1] = 8;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 136, OBJ.obj_migosp);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 136, OBJ.obj_vegetoid);\r\n      case 13: {\r\n        (G.monstertype ??= [])[0] = 9;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 124, OBJ.obj_loox);\r\n      case 14: {\r\n        (G.monstertype ??= [])[0] = 9;\r\n        (G.monstertype ??= [])[1] = 8;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 124, OBJ.obj_loox);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 136, OBJ.obj_vegetoid);\r\n      case 15: {\r\n        (G.monstertype ??= [])[0] = 9;\r\n        (G.monstertype ??= [])[1] = 8;\r\n        (G.monstertype ??= [])[2] = 7;\r\n        (G.monsterinstance ??= [])[0] = instance_create(14, 124, OBJ.obj_loox);\r\n        (G.monsterinstance ??= [])[1] = instance_create(218, 136, OBJ.obj_vegetoid);\r\n        (G.monsterinstance ??= [])[2] = instance_create(422, 136, OBJ.obj_migosp);\r\n      case 16: {\r\n        (G.monstertype ??= [])[0] = 8;\r\n        (G.monstertype ??= [])[1] = 8;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 136, OBJ.obj_vegetoid);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 136, OBJ.obj_vegetoid);\r\n      case 17: {\r\n        (G.monstertype ??= [])[0] = 9;\r\n        (G.monstertype ??= [])[1] = 9;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 124, OBJ.obj_loox);\r\n        (G.monsterinstance ??= [])[1] = instance_create(320, 124, OBJ.obj_loox);\r\n      case 18: {\r\n        (G.monstertype ??= [])[0] = 8;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 136, OBJ.obj_vegetoid);\r\n      case 19: {\r\n        (G.monstertype ??= [])[0] = 0;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n      case 20: {\r\n        (G.monstertype ??= [])[0] = 11;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(266, 106, OBJ.obj_napstablook);\r\n      case 21: {\r\n        (G.monstertype ??= [])[0] = 9;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 124, OBJ.obj_loox);\r\n      case 22: {\r\n        (G.monstertype ??= [])[0] = 10;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(250, 42, OBJ.obj_torielboss);\r\n      case 23: {\r\n        (G.monstertype ??= [])[0] = 13;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(196, 28, OBJ.obj_movedoge);\r\n      case 24: {\r\n        (G.monstertype ??= [])[0] = 14;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_lesserdoge);\r\n      case 25: {\r\n        (G.monstertype ??= [])[0] = 15;\r\n        (G.monstertype ??= [])[1] = 16;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(208, 38, OBJ.obj_mandog);\r\n        (G.monsterinstance ??= [])[1] = instance_create(208, 38, OBJ.obj_womandog);\r\n      case 26: {\r\n        (G.monstertype ??= [])[0] = 17;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(208, 38, OBJ.obj_greatdog);\r\n      case 27: {\r\n        (G.monstertype ??= [])[0] = 25;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(250, 42, OBJ.obj_papyrusboss);\r\n      case 28: {\r\n        (G.monstertype ??= [])[0] = 22;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(208, 38, OBJ.obj_gyftrot);\r\n      case 30: {\r\n        (G.monstertype ??= [])[0] = 18;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n          (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_chilldrake);\r\n          (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_snowdrake);\r\n      case 31: {\r\n        (G.monstertype ??= [])[0] = 18;\r\n        (G.monstertype ??= [])[1] = 18;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(114, 38, OBJ.obj_chilldrake);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 38, OBJ.obj_chilldrake);\r\n      case 32: {\r\n        (G.monstertype ??= [])[0] = 19;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_icecap);\r\n      case 33: {\r\n        (G.monstertype ??= [])[0] = 19;\r\n        (G.monstertype ??= [])[1] = 18;\r\n        (G.monstertype ??= [])[2] = 0;\r\n          (G.monsterinstance ??= [])[0] = instance_create(114, 38, OBJ.obj_icecap);\r\n          (G.monsterinstance ??= [])[1] = instance_create(318, 38, OBJ.obj_chilldrake);\r\n          (G.monsterinstance ??= [])[0] = instance_create(114, 38, OBJ.obj_icecap);\r\n          (G.monsterinstance ??= [])[1] = instance_create(318, 38, OBJ.obj_snowdrake);\r\n      case 34: {\r\n        (G.monstertype ??= [])[0] = 21;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 127, OBJ.obj_jerry);\r\n      case 35: {\r\n        (G.monstertype ??= [])[0] = 19;\r\n        (G.monstertype ??= [])[1] = 21;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(15, 38, OBJ.obj_icecap);\r\n        (G.monsterinstance ??= [])[1] = instance_create(216, 127, OBJ.obj_jerry);\r\n      case 36: {\r\n        (G.monstertype ??= [])[0] = 19;\r\n        (G.monstertype ??= [])[1] = 21;\r\n        (G.monstertype ??= [])[2] = 18;\r\n        (G.monsterinstance ??= [])[0] = instance_create(15, 38, OBJ.obj_icecap);\r\n        (G.monsterinstance ??= [])[1] = instance_create(216, 127, OBJ.obj_jerry);\r\n          (G.monsterinstance ??= [])[2] = instance_create(388, 38, OBJ.obj_chilldrake);\r\n          (G.monsterinstance ??= [])[2] = instance_create(388, 38, OBJ.obj_snowdrake);\r\n      case 40: {\r\n        (G.monstertype ??= [])[0] = 23;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_aaron);\r\n      case 41: {\r\n        (G.monstertype ??= [])[0] = 24;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 38, OBJ.obj_tembattle);\r\n      case 42: {\r\n        (G.monstertype ??= [])[0] = 12;\r\n        (G.monstertype ??= [])[1] = 26;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(114, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[1] = instance_create(316, 156, OBJ.obj_moldsmalx);\r\n      case 43: {\r\n        (G.monstertype ??= [])[0] = 28;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(114, 136, OBJ.obj_woshua);\r\n      case 44: {\r\n        (G.monstertype ??= [])[0] = 29;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 36, OBJ.obj_shyren);\r\n      case 45: {\r\n        (G.monstertype ??= [])[0] = 31;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(270, 80, OBJ.obj_maddummy);\r\n      case 46: {\r\n        (G.monstertype ??= [])[0] = 23;\r\n        (G.monstertype ??= [])[1] = 28;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(114, 38, OBJ.obj_aaron);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 136, OBJ.obj_woshua);\r\n      case 47: {\r\n        (G.monstertype ??= [])[0] = 32;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(210, 20, OBJ.obj_undyneboss);\r\n      case 48: {\r\n        (G.monstertype ??= [])[0] = 33;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(316, 190, OBJ.obj_mettatonb_quiz);\r\n        instance_create(412, 126, OBJ.obj_questionasker);\r\n      case 49: {\r\n        (G.monstertype ??= [])[0] = 34;\r\n        (G.monstertype ??= [])[1] = 35;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(18, 34, OBJ.obj_bara01);\r\n        (G.monsterinstance ??= [])[1] = instance_create(432, 34, OBJ.obj_bara02);\r\n      case 50: {\r\n        (G.monstertype ??= [])[0] = 36;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(46, 36, OBJ.obj_tsunderplane);\r\n      case 51: {\r\n        (G.monstertype ??= [])[0] = 37;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 125, OBJ.obj_vulkin);\r\n      case 52: {\r\n        (G.monstertype ??= [])[0] = 38;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(108, 7, OBJ.obj_pyrope);\r\n      case 53: {\r\n        (G.monstertype ??= [])[0] = 12;\r\n        (G.monstertype ??= [])[1] = 12;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(214, 156, OBJ.obj_moldsmal);\r\n        (G.monsterinstance ??= [])[1] = instance_create(418, 156, OBJ.obj_moldsmal);\r\n      case 54: {\r\n        (G.monstertype ??= [])[0] = 28;\r\n        (G.monstertype ??= [])[1] = 23;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 136, OBJ.obj_woshua);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 38, OBJ.obj_aaron);\r\n      case 55: {\r\n        (G.monstertype ??= [])[0] = 28;\r\n        (G.monstertype ??= [])[1] = 26;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 136, OBJ.obj_woshua);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 156, OBJ.obj_moldsmalx);\r\n      case 56: {\r\n        (G.monstertype ??= [])[0] = 39;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(214, 37, OBJ.obj_spiderb);\r\n      case 57: {\r\n        (G.monstertype ??= [])[0] = 40;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(316, 190, OBJ.obj_mettatonb_second);\r\n      case 58: {\r\n        (G.monstertype ??= [])[0] = 41;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(250, 75, OBJ.obj_undynebattle2);\r\n      case 59: {\r\n        (G.monstertype ??= [])[0] = 42;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(244, 50, OBJ.obj_wizard);\r\n      case 60: {\r\n        (G.monstertype ??= [])[0] = 43;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(56, 40, OBJ.obj_finalknight);\r\n      case 61: {\r\n        (G.monstertype ??= [])[0] = 44;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 110, OBJ.obj_finalfroggit);\r\n      case 62: {\r\n        (G.monstertype ??= [])[0] = 45;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 110, OBJ.obj_astigmatism);\r\n      case 63: {\r\n        (G.monstertype ??= [])[0] = 46;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(218, 110, OBJ.obj_whimsalot);\r\n      case 64: {\r\n        (G.monstertype ??= [])[0] = 46;\r\n        (G.monstertype ??= [])[1] = 44;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_whimsalot);\r\n        (G.monsterinstance ??= [])[1] = instance_create(416, 110, OBJ.obj_finalfroggit);\r\n      case 65: {\r\n        (G.monstertype ??= [])[0] = 46;\r\n        (G.monstertype ??= [])[1] = 45;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_whimsalot);\r\n        (G.monsterinstance ??= [])[1] = instance_create(416, 110, OBJ.obj_astigmatism);\r\n      case 66: {\r\n        (G.monstertype ??= [])[0] = 44;\r\n        (G.monstertype ??= [])[1] = 45;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_finalfroggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(416, 110, OBJ.obj_astigmatism);\r\n      case 67: {\r\n        (G.monstertype ??= [])[0] = 44;\r\n        (G.monstertype ??= [])[1] = 45;\r\n        (G.monstertype ??= [])[2] = 46;\r\n        (G.monsterinstance ??= [])[0] = instance_create(16, 110, OBJ.obj_finalfroggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(218, 110, OBJ.obj_astigmatism);\r\n        (G.monsterinstance ??= [])[2] = instance_create(420, 110, OBJ.obj_whimsalot);\r\n      case 68: {\r\n        (G.monstertype ??= [])[0] = 43;\r\n        (G.monstertype ??= [])[1] = 42;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(16, 50, OBJ.obj_finalknight);\r\n        (G.monsterinstance ??= [])[1] = instance_create(366, 50, OBJ.obj_wizard);\r\n      case 69: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 120, OBJ.obj_battlebomb);\r\n      case 70: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 180, OBJ.obj_battlebomb);\r\n      case 71: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 180, OBJ.obj_battlebomb);\r\n      case 72: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 100, OBJ.obj_battlebomb);\r\n      case 73: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 80, OBJ.obj_battlebomb);\r\n      case 74: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(250, 100, OBJ.obj_battlebomb);\r\n      case 75: {\r\n        (G.monstertype ??= [])[0] = 47;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(256, 100, OBJ.obj_battlebomb);\r\n      case 76: {\r\n        (G.monstertype ??= [])[0] = 49;\r\n        (G.monstertype ??= [])[1] = 48;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(46, 66, OBJ.obj_bara04);\r\n        (G.monsterinstance ??= [])[1] = instance_create(460, 66, OBJ.obj_bara03);\r\n      case 77: {\r\n        (G.monstertype ??= [])[0] = 36;\r\n        (G.monstertype ??= [])[1] = 37;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(46, 36, OBJ.obj_tsunderplane);\r\n        (G.monsterinstance ??= [])[1] = instance_create(306, 125, OBJ.obj_vulkin);\r\n      case 78: {\r\n        (G.monstertype ??= [])[0] = 38;\r\n        (G.monstertype ??= [])[1] = 38;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 10, OBJ.obj_pyrope);\r\n        (G.monsterinstance ??= [])[1] = instance_create(306, 10, OBJ.obj_pyrope);\r\n      case 79: {\r\n        (G.monstertype ??= [])[0] = 37;\r\n        (G.monstertype ??= [])[1] = 37;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 125, OBJ.obj_vulkin);\r\n        (G.monsterinstance ??= [])[1] = instance_create(306, 125, OBJ.obj_vulkin);\r\n      case 80: {\r\n        (G.monstertype ??= [])[0] = 50;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(300, 190, OBJ.obj_mettatonb_third);\r\n      case 81: {\r\n        (G.monstertype ??= [])[0] = 51;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(210, 60, OBJ.obj_mettatonex);\r\n      case 82: {\r\n        (G.monstertype ??= [])[0] = 53;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(280, 20, OBJ.obj_lemonbread);\r\n      case 83: {\r\n        (G.monstertype ??= [])[0] = 54;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(240, 20, OBJ.obj_reaperbird);\r\n      case 84: {\r\n        (G.monstertype ??= [])[0] = 55;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(240, 20, OBJ.obj_snowdrakemom);\r\n      case 85: {\r\n        (G.monstertype ??= [])[0] = 56;\r\n        (G.monstertype ??= [])[1] = 56;\r\n        (G.monstertype ??= [])[2] = 56;\r\n        (G.monsterinstance ??= [])[0] = instance_create(15, 146, OBJ.obj_memoryhead);\r\n        (G.monsterinstance ??= [])[1] = instance_create(217, 146, OBJ.obj_memoryhead);\r\n        (G.monsterinstance ??= [])[2] = instance_create(421, 146, OBJ.obj_memoryhead);\r\n      case 86: {\r\n        (G.monstertype ??= [])[0] = 57;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(180, 90, OBJ.obj_endogeny);\r\n      case 87: {\r\n        (G.monstertype ??= [])[0] = 58;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(296, 70, OBJ.obj_ripoff_undyne);\r\n      case 88: {\r\n        (G.monstertype ??= [])[0] = 60;\r\n        (G.monstertype ??= [])[1] = 61;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(76, 35, OBJ.obj_ripoff_papyrus);\r\n        (G.monsterinstance ??= [])[1] = instance_create(456, 148, OBJ.obj_ripoff_sans);\r\n      case 89: {\r\n        (G.monstertype ??= [])[0] = 59;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(266, 100, OBJ.obj_ripoff_alphys);\r\n      case 90: {\r\n        (G.monstertype ??= [])[0] = 62;\r\n        (G.monstertype ??= [])[1] = 63;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(26, 94, OBJ.obj_ripoff_toriel);\r\n        (G.monsterinstance ??= [])[1] = instance_create(356, 62, OBJ.obj_ripoff_asgore);\r\n      case 91: {\r\n        (G.monstertype ??= [])[0] = 64;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(260, 110, OBJ.obj_mkid_battle);\r\n      case 92: {\r\n        (G.monstertype ??= [])[0] = 65;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(210, 20, OBJ.obj_undyne_ex);\r\n      case 93: {\r\n        (G.monstertype ??= [])[0] = 66;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 136, OBJ.obj_gladdummy);\r\n      case 94: {\r\n        (G.monstertype ??= [])[0] = 67;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(210, 0, OBJ.obj_mettaton_neo);\r\n      case 95: {\r\n        (G.monstertype ??= [])[0] = 68;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(270, 110, OBJ.obj_sansb);\r\n      case 100: {\r\n        (G.monstertype ??= [])[0] = 52;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 16, OBJ.obj_asgore_finalintro);\r\n      case 101: {\r\n        (G.monstertype ??= [])[0] = 52;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(208, 8, OBJ.obj_asgoreb);\r\n        instance_create(0, 0, OBJ.obj_purplegradienter);\r\n        instance_create(0, 0, OBJ.obj_orangeparticlegen);\r\n      case 120: {\r\n        (G.monstertype ??= [])[0] = 70;\r\n        (G.monstertype ??= [])[1] = 71;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_finalfroggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(416, 110, OBJ.obj_astigmatism);\r\n      case 121: {\r\n        (G.monstertype ??= [])[0] = 70;\r\n        (G.monstertype ??= [])[1] = 73;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_finalfroggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(426, 130, OBJ.obj_migospel);\r\n      case 122: {\r\n        (G.monstertype ??= [])[0] = 75;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(111, 120, OBJ.obj_parsnik);\r\n      case 123: {\r\n        (G.monstertype ??= [])[0] = 74;\r\n        (G.monstertype ??= [])[1] = 74;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(118, 127, OBJ.obj_moldessa);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 127, OBJ.obj_moldessa);\r\n      case 124: {\r\n        (G.monstertype ??= [])[0] = 74;\r\n        (G.monstertype ??= [])[1] = 74;\r\n        (G.monstertype ??= [])[2] = 74;\r\n        (G.monsterinstance ??= [])[0] = instance_create(18, 127, OBJ.obj_moldessa);\r\n        (G.monsterinstance ??= [])[1] = instance_create(218, 127, OBJ.obj_moldessa);\r\n        (G.monsterinstance ??= [])[2] = instance_create(418, 127, OBJ.obj_moldessa);\r\n      case 125: {\r\n        (G.monstertype ??= [])[0] = 70;\r\n        (G.monstertype ??= [])[1] = 72;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(106, 110, OBJ.obj_finalfroggit);\r\n        (G.monsterinstance ??= [])[1] = instance_create(416, 120, OBJ.obj_whimsalot);\r\n      case 126: {\r\n        (G.monstertype ??= [])[0] = 70;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(208, 110, OBJ.obj_finalfroggit);\r\n      case 127: {\r\n        (G.monstertype ??= [])[0] = 72;\r\n        (G.monstertype ??= [])[1] = 75;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(110, 120, OBJ.obj_whimsalot);\r\n        (G.monsterinstance ??= [])[1] = instance_create(316, 120, OBJ.obj_parsnik);\r\n      case 128: {\r\n        (G.monstertype ??= [])[0] = 74;\r\n        (G.monstertype ??= [])[1] = 73;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(116, 127, OBJ.obj_moldessa);\r\n        (G.monsterinstance ??= [])[1] = instance_create(324, 130, OBJ.obj_migospel);\r\n      case 129: {\r\n        (G.monstertype ??= [])[0] = 75;\r\n        (G.monstertype ??= [])[1] = 73;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(111, 120, OBJ.obj_parsnik);\r\n        (G.monsterinstance ??= [])[1] = instance_create(324, 130, OBJ.obj_migospel);\r\n      case 130: {\r\n        (G.monstertype ??= [])[0] = 75;\r\n        (G.monstertype ??= [])[1] = 75;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(111, 120, OBJ.obj_parsnik);\r\n        (G.monsterinstance ??= [])[1] = instance_create(318, 120, OBJ.obj_parsnik);\r\n      case 131: {\r\n        (G.monstertype ??= [])[0] = 75;\r\n        (G.monstertype ??= [])[1] = 71;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(111, 120, OBJ.obj_parsnik);\r\n        (G.monsterinstance ??= [])[1] = instance_create(314, 110, OBJ.obj_astigmatism);\r\n      case 132: {\r\n        (G.monstertype ??= [])[0] = 71;\r\n        (G.monstertype ??= [])[1] = 71;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(108, 110, OBJ.obj_astigmatism);\r\n        (G.monsterinstance ??= [])[1] = instance_create(312, 110, OBJ.obj_astigmatism);\r\n      case 133: {\r\n        (G.monstertype ??= [])[0] = 71;\r\n        (G.monstertype ??= [])[1] = 73;\r\n        (G.monstertype ??= [])[2] = 74;\r\n        (G.monsterinstance ??= [])[0] = instance_create(8, 110, OBJ.obj_astigmatism);\r\n        (G.monsterinstance ??= [])[1] = instance_create(213, 130, OBJ.obj_migospel);\r\n        (G.monsterinstance ??= [])[2] = instance_create(418, 127, OBJ.obj_moldessa);\r\n      case 134: {\r\n        (G.monstertype ??= [])[0] = 71;\r\n        (G.monstertype ??= [])[1] = 75;\r\n        (G.monstertype ??= [])[2] = 74;\r\n        (G.monsterinstance ??= [])[0] = instance_create(18, 120, OBJ.obj_whimsalot);\r\n        (G.monsterinstance ??= [])[1] = instance_create(218, 120, OBJ.obj_parsnik);\r\n        (G.monsterinstance ??= [])[2] = instance_create(418, 127, OBJ.obj_moldessa);\r\n      case 135: {\r\n        (G.monstertype ??= [])[0] = 76;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(188, 16, OBJ.obj_glydeb);\r\n      case 140: {\r\n        (G.monstertype ??= [])[0] = 80;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(216, 78, OBJ.obj_sosorry);\r\n      case 255: {\r\n        (G.monstertype ??= [])[0] = 99;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(258, 8, OBJ.obj_asrielb);\r\n      case 256: {\r\n        (G.monstertype ??= [])[0] = 100;\r\n        (G.monstertype ??= [])[1] = 0;\r\n        (G.monstertype ??= [])[2] = 0;\r\n        (G.monsterinstance ??= [])[0] = instance_create(320, 48, OBJ.obj_asrielfinal);\r";
  let Pt = new Map();
  for (let MA of Pe.split(/case (\d+): \{/).slice(1)) {
    let Mw = {};
    for (let T0 of MA.matchAll(/monstertype \?\?= \[\]\)\[(\d)\] = (\d+);/g)) {
      Mw[T0[1]] = Number(T0[2]);
    }
    for (let T1 of MA.matchAll(/monsterinstance \?\?= \[\]\)\[(\d)\] = instance_create\([^,]+,[^,]+, OBJ\.(obj_[a-z0-9_]+)\)/g)) {
      let T2 = T1[2];
      if (!Pt.has(T2) && !!In[T2]) {
        Pt.set(T2, {
          key: "ut:" + T2,
          engine: "ut",
          cls: In[T2],
          clsName: T2,
          type: Mw[T1[1]] || 0,
          label: pretty(T2)
        });
      }
    }
  }
  let Pn = Pe.split(/case (\d+): \{/);
  for (let T3 = 1; T3 < Pn.length; T3 += 2) {
    let T4 = Number(Pn[T3]);
    let T5 = [...Pn[T3 + 1].matchAll(/OBJ\.(obj_[a-z0-9_]+)\)/g)].map(T6 => T6[1]);
    for (let T6 of T5) {
      let T7 = Pt.get(T6);
      if (T7 && (T7.battlegroup === undefined || T5.length < T7.groupSize)) {
        T7.battlegroup = T4;
        T7.groupSize = T5.length;
      }
    }
  }
  iS = [...Pt.values()].sort((T8, T9) => T8.label.localeCompare(T9.label));
  return iS;
}
X(rosterUT, "rosterUT");
var is = /^(monster(?!attackname)|mercy|sparepoint|canact|act(name|actor|desc|cost|simul)|xpreward|goldreward|hurtanim|automiss|hittarget$|monsteratk|monsterdef|mnpwr|bulletpwr)/;
var ic = /^(char|hero|control_|input_|acting|temptension|targeted|battle(at|df|mag|spell|actcount)|faceaction|hittarget2|item|spell|msg|flag|tempflag|bmenucoord|menucoord|asc_def|hp$|maxhp|at$|df$|mag$|weapon|armor|choicemsg|othername|cinstance|smxx|smyy|guts|keyitem|litem|phone|pocketitem|currentsong|monsterattackname|idealborder|areapop|attacker|bulletvariable|menuchoice)/;
var iz = new Set();
function perSlotArrays() {
  let In = [];
  for (let Pe of Object.keys(g)) {
    if (!!Array.isArray(g[Pe]) && !ic.test(Pe)) {
      if (is.test(Pe) || iz.has(Pe)) {
        In.push(Pe);
      }
    }
  }
  return In;
}
X(perSlotArrays, "perSlotArrays");
function diffArrays() {
  let It = [];
  for (let Pn of Object.keys(g)) {
    if (Array.isArray(g[Pn]) && g[Pn].length >= 3 && g[Pn].length <= 400 && !ic.test(Pn)) {
      It.push(Pn);
    }
  }
  return It;
}
X(diffArrays, "diffArrays");
function cloneShape(i) {
  if (Array.isArray(i)) {
    return i.map(Pe => typeof Pe == "number" ? 0 : typeof Pe == "string" ? "" : Pe === null ? null : cloneShape(Pe));
  } else {
    return i;
  }
}
X(cloneShape, "cloneShape");
function ensureSlot(i) {
  for (let Pt of perSlotArrays()) {
    let Pn = g[Pt];
    if (Pn[i] === undefined) {
      Pn[i] = Array.isArray(Pn[0]) ? cloneShape(Pn[0]) : typeof Pn[0] == "number" ? 0 : typeof Pn[0] == "string" ? "" : Pn[0] ?? 0;
    }
  }
}
X(ensureSlot, "ensureSlot");
function spawnGuest(i, K, It, In) {
  ensureSlot(K);
  let Pt = 2;
  let Pn = diffArrays();
  let Pr = {};
  for (let T2 of Pn) {
    Pr[T2] = g[T2][Pt];
  }
  let Mn = g.monster.slice(0, 3);
  if (K !== Pt) {
    for (let T3 of Pn) {
      let T4 = g[T3];
      if (Array.isArray(T4)) {
        T4[Pt] = Array.isArray(Pr[T3]) ? cloneShape(Pr[T3]) : undefined;
      }
    }
  }
  g.monstertype[Pt] = i.type;
  if (i.engine === "dr") {
    g.monsterinstancetype[Pt] = i.cls;
    g.monstermakex[Pt] = It;
    g.monstermakey[Pt] = In;
  }
  g.monster[0] = 1;
  g.monster[1] = 1;
  g.monster[2] = 0;
  let T0 = i.engine === "dr" && armed();
  let T1 = null;
  try {
    T1 = h(It, In, i.cls, T0 ? {
      _ch: i.chapter,
      _enc: homeEnc(i)
    } : undefined);
    T1.myself = Pt;
    if (i.engine === "dr" && T1.userEvent) {
      if (T0) {
        within(T1, () => T1.userEvent(12));
      } else {
        T1.userEvent(12);
      }
      let T5 = homeSetup(i);
      if (T5) {
        T5(Pt);
      }
    }
  } catch {
    T1 = null;
  }
  if (K !== Pt) {
    for (let T8 of Pn) {
      let T9 = g[T8];
      if (!Array.isArray(T9)) {
        continue;
      }
      let Ti = T9[Pt];
      if (Array.isArray(Pr[T8])) {
        if (Array.isArray(Ti)) {
          T9[K] = Ti;
        }
      } else if (Ti !== undefined) {
        T9[K] = Ti;
        iz.add(T8);
      }
      T9[Pt] = Pr[T8];
    }
  }
  g.monster[0] = Mn[0];
  g.monster[1] = Mn[1];
  g.monster[2] = Mn[2];
  if (T1) {
    T1.myself = K;
    g.monster[K] = 1;
    g.monstertype[K] = i.type;
    g.monsterinstance[K] = T1;
    if (i.engine === "dr") {
      g.monsterinstancetype[K] = i.cls;
      g.monstermakex[K] = It;
      g.monstermakey[K] = In;
    }
    T1._customGuest = 1;
    return T1;
  } else {
    return null;
  }
}
X(spawnGuest, "spawnGuest");
function guestPosition(i, K, It = i + 1) {
  if (K === "ut") {
    let T2 = Math.min(Math.max(It, 1), 8);
    let T3 = Math.ceil(It / T2);
    if (T2 === 1) {
      return {
        x: 260,
        y: 0
      };
    }
    let T5 = i % T2;
    let T6 = Math.floor(i / T2);
    let T7 = 470 / Math.max(1, T2 - 1 + (T3 > 1 ? 0.5 : 0));
    let T8 = T3 > 1 ? Math.min(60, 120 / (T3 - 1)) : 0;
    return {
      x: Math.round(10 + T5 * T7 + T6 % 2 * (T7 / 2)),
      y: Math.round(T6 * T8)
    };
  }
  let Pr = It <= 4 ? 2 : It <= 12 ? 3 : 4;
  let Mt = Math.ceil(It / Pr);
  let Mn = i % Pr;
  let MA = Math.floor(i / Pr);
  let Mw = Math.min(80, 220 / Mt);
  let T0 = 20 + Math.max(0, (220 - Mt * Mw) / 2);
  return {
    x: 400 - Mn * 58,
    y: Math.round(T0 + MA * Mw + Mn % 2 * (Mw / 2))
  };
}
X(guestPosition, "guestPosition");
function openingLine(i, K) {
  let Pr = new Map();
  for (let T2 of i) {
    if (T2 && T2 !== " ") {
      Pr.set(T2, (Pr.get(T2) || 0) + 1);
    }
  }
  let Mt = [...Pr.entries()].map(([T3, T4]) => T4 > 1 ? T4 + " " + T3 + (/s$/.test(T3) ? "" : "s") : T3);
  let Mn = i.length;
  let MA;
  if (Mt.length) {
    if (Mn === 1) {
      MA = Mt[0] + " blocks the way!";
    } else if (Mt.length === 1) {
      MA = Mt[0] + " block the way!";
    } else if (Mt.length === 2) {
      MA = Mt[0] + " and " + Mt[1] + " block the way!";
    } else if (Mt.length === 3) {
      MA = Mt[0] + ", " + Mt[1] + " and " + Mt[2] + " block the way!";
    } else {
      MA = "A crowd of " + Mn + " enemies blocks the way!";
    }
  } else {
    MA = "Enemies block the way!";
  }
  if (K === "dr") {
    return "* " + MA;
  }
  let Mw = MA.split(" ");
  let T0 = [];
  let T1 = "*";
  for (let T3 of Mw) {
    if ((T1 + " " + T3).length > 27 && T1.trim() !== "*") {
      T0.push(T1);
      T1 = "  " + T3;
    } else {
      T1 += " " + T3;
    }
  }
  T0.push(T1);
  return T0.join("&");
}
X(openingLine, "openingLine");
function setOpeningLine(i, K) {
  let In = [];
  for (let Mn = 0; Mn < g.monster.length; Mn++) {
    if (g.monster[Mn] === 1 && g.monstername) {
      In.push(g.monstername[Mn]);
    }
  }
  let Pe = openingLine(In, K);
  i.battlemsg = Pe;
  if (K === "dr") {
    let MA = Array.isArray(g.battlemsg) ? g.battlemsg[0] : undefined;
    if (Array.isArray(g.battlemsg)) {
      g.battlemsg[0] = Pe;
    } else {
      g.battlemsg = [Pe];
    }
    let Mw = z.first("obj_battlecontroller");
    if (MA !== Pe && Mw && Mw.battlewriter && z.exists(Mw.battlewriter) && g.myfight === 0 && g.mnfight === 0) {
      Mw.battlewriter.instance_destroy();
    }
    return;
  }
  let Pr = z.first("OBJ_WRITER");
  if (!!Pr && g.myfight === 0 && g.mnfight === 0) {
    if (Array.isArray(Pr.mystring)) {
      Pr.mystring[0] = Pe;
    }
    Pr.originalstring = Pe;
    Pr.stringpos = 0;
    Pr.halt = 0;
    if (Array.isArray(g.msg)) {
      g.msg[0] = Pe;
    }
  }
}
X(setOpeningLine, "setOpeningLine");
function makeCustomFight(i, K) {
  if (!K.length) {
    return null;
  }
  if (i === "dr") {
    for (let T6 of K.slice()) {
      {
        let T7 = pairOf(T6);
        if (T7 && !K.some(T8 => T8.key === T7)) {
          {
            let Ti = rosterDR().find(TK => TK.key === T7);
            if (Ti) {
              K = [...K, Ti];
            }
          }
        }
      }
    }
    if (isPairBoard(K.map(TK => TK.key))) {
      {
        let TK = homeFight(K.find(TI => pairOf(TI)) || K[0]);
        let Ta = TI => {
          {
            let TY = TK && TK.monsters ? TK.monsters.findIndex(TD => TD.type === TI.type && (typeof TD.cls == "function" ? TD.cls.name : String(TD.cls)) === TI.clsName) : -1;
            if (TY < 0) {
              return 99;
            } else {
              return TY;
            }
          }
        };
        K = K.slice().sort((TI, TP) => Ta(TI) - Ta(TP));
      }
    }
    let Pr = K[0];
    let Mt = homeFight(Pr) || {};
    let Mn = [...new Set(K.map(TD => TD.chapter))];
    let MA = Math.max(...Mn);
    let Mw = K.slice(0, 3);
    let T0 = [20, 120, 220];
    let T1 = [480, 500, 460];
    let T2 = [];
    for (let TD = 0; TD < Mw.length; TD++) {
      let TL = Mw[TD];
      let Te = TL.cls && TL.cls.defaultSprite;
      let Tq = Te ? s[Te + "@ch" + TL.chapter] || s[Te] : null;
      let TW = Tq ? Tq.w * 2 : 80;
      let TG = Tq ? Tq.h * 2 : 80;
      let TB = Math.max(TD ? T2[TD - 1].top + 40 : 0, Math.min(T0[TD], 300 - TG));
      let Tu = Math.max(380, Math.min(T1[TD], 636 - TW));
      let Tx = T2[TD - 1];
      if (Tx && TB < Tx.bottom - 24 && Tu < Tx.left + Tx.w - 16) {
        Tu = Math.max(260, Tx.left - TW - 8);
      }
      T2.push({
        top: TB,
        bottom: TB + TG,
        left: Tu,
        w: TW,
        oy: Tq ? Tq.oy * 2 : 0,
        x: Tu + (Tq ? (Tq.ox || 0) * 2 : 0)
      });
    }
    let T3 = K.length === 1 || isPairBoard(K.map(TC => TC.key)) && K.every(TC => homeRow(TC) && homeFight(TC) === Mt);
    let T4 = (TC, Ty) => {
      {
        let Tf = T3 ? homeRow(TC) : null;
        if (Tf) {
          return {
            x: Tf.x,
            y: Tf.y
          };
        } else {
          return {
            x: T2[Ty].x,
            y: T2[Ty].top + T2[Ty].oy
          };
        }
      }
    };
    let T5 = {
      ...(T3 ? {
        ...Mt
      } : Object.fromEntries(iF.filter(TC => Mt[TC] !== undefined).map(TC => [TC, Mt[TC]]))),
      id: "custom",
      name: "Custom (" + K.length + " enemies)",
      customEncounter: true,
      chapter: MA,
      engineChapter: MA,
      encounterno: Mt.encounterno || 0,
      monsters: Mw.map((TC, Ty) => ({
        cls: TC.cls,
        type: TC.type,
        ...T4(TC, Ty),
        setup: homeSetup(TC) || (() => {})
      })),
      guests: K.slice(3),
      customEngine: "dr",
      battlemsg: openingLine(K.map(TC => TC.label), "dr")
    };
    prepare({
      host: MA,
      enc: T5.encounterno,
      msg: T5.battlemsg,
      chapters: Mn,
      real: Mw.map(TC => ({
        cls: TC.cls,
        ch: TC.chapter,
        enc: homeEnc(TC)
      })),
      prime: () => {
        for (let TU of Mn) {
          if (TU !== MA) {
            if (TU === 2) {
              B();
            }
            if (TU === 3) {
              W();
            }
            if (G[TU]) {
              G[TU].ensureGlobals();
            }
          }
        }
      }
    });
    return T5;
  }
  prepare(null);
  let Pn = K[0];
  return {
    ...(D.find(TC => iC(TC) && TC.battlegroup === Pn.battlegroup) || D.find(TC => iC(TC) && TC.battlegroup)),
    id: "custom",
    name: "Custom (" + K.length + " enemies)",
    customEncounter: true,
    battlegroup: Pn.battlegroup,
    guests: K.slice(1),
    customEngine: "ut"
  };
}
X(makeCustomFight, "makeCustomFight");
function spawnGuests(i) {
  if (!i || !i.customEncounter || !i.guests) {
    return 0;
  }
  let Pe = 4;
  let Pt = 0;
  let Pn = i.customEngine;
  let Pr = i.guests.slice();
  if (Pn === "ut") {
    for (let MA = 0; MA < 3 && Pr.length; MA++) {
      {
        if (g.monster[MA] === 1) {
          continue;
        }
        const T1 = {
          x: [216, 418, 14][MA],
          y: 136
        };
        let T2 = Pr.shift();
        let T3 = T1;
        let T4 = null;
        try {
          {
            T4 = spawnGuest(T2, MA, T3.x, T3.y);
          }
        } catch (T7) {
          {
            console.warn("[custom] could not add " + T2.label + ":", T7);
          }
        }
        if (T4) {
          Pt++;
          delete T4._customGuest;
        }
      }
    }
  }
  let Mn = Math.max(...[0, 1, 2].map(T8 => {
    {
      let TI = g.monsterinstance[T8];
      if (TI && !TI.destroyed && typeof TI.depth == "number") {
        return TI.depth;
      } else {
        return -1 / 0;
      }
    }
  }));
  for (let T8 = 0; T8 < Pr.length; T8++) {
    {
      let Ti = guestPosition(T8, Pn, Pr.length);
      let TK = null;
      try {
        TK = spawnGuest(Pr[T8], Pe, Ti.x, Ti.y);
      } catch (TI) {
        {
          console.warn("[custom] could not add " + Pr[T8].label + ":", TI);
        }
      }
      if (!TK) {
        continue;
      }
      Pt++;
      Pe++;
      if (Number.isFinite(Mn) && typeof TK.depth == "number" && TK.depth <= Mn) {
        TK.depth = Mn + 1;
      }
      let Ta = TK.sprite_index && s[TK.sprite_index];
      if (Ta && Ta.w && Ta.h && (Ta.w * Math.abs(TK.image_xscale || 1) > 180 || Ta.h * Math.abs(TK.image_yscale || 1) > 180)) {
        TK.depth = (TK.depth || 0) + 50;
      }
    }
  }
  try {
    {
      setOpeningLine(i, Pn);
    }
  } catch {}
  armBoard(Pn);
  return Pt;
}
X(spawnGuests, "spawnGuests");
function isCustomBoard() {
  return !!g.monster && !!g.monster.__customBoard;
}
X(isCustomBoard, "isCustomBoard");
function customEndcombat() {
  let In = z.self;
  let Pe = [];
  for (let Pn = 0; Pn < g.monster.length; Pn++) {
    let Pr = g.monsterinstance[Pn];
    if (Pn !== 3 && g.monster[Pn] === 1 && Pr && typeof Pr == "object" && !Pr.destroyed && Pr !== In) {
      Pe.push(Pr);
    }
  }
  if (!Pe.length) {
    return false;
  }
  if (In && typeof In.is == "function" && In.is("obj_monsterparent")) {
    try {
      if (In.scr_monsterdefeat) {
        In.scr_monsterdefeat();
      }
    } catch {}
    if (!In.destroyed) {
      In.instance_destroy();
    }
  }
  if (g.battleover === "win") {
    g.battleover = null;
  }
  return true;
}
X(customEndcombat, "customEndcombat");
function armBoard(i) {
  J.customEndcombat = customEndcombat;
  J.customScroll = customScroll;
  J.customTargetPicked = customTargetPicked;
  J.customEndturn = customEndturn;
  J.customHidden = hiddenEnemies;
  iw = [];
  for (let Pr = 0; Pr < g.monster.length; Pr++) {
    {
      let Mt = g.monsterinstance[Pr];
      if (Mt && typeof Mt == "object" && !Mt.destroyed && Pr !== 3) {
        iw.push(Mt);
      }
    }
  }
  K0.clear();
  let Pe = g.monster;
  if (!Pe || Pe.__customBoard) {
    return;
  }
  let Pn = MA => MA && typeof MA.is == "function" && MA.is("obj_monsterparent");
  g.monster = new Proxy(Pe, {
    get(MA, Mw) {
      {
        if (Mw === "__customBoard") {
          return true;
        } else if (Mw === "__raw") {
          return MA;
        } else {
          return Reflect.get(MA, Mw);
        }
      }
    },
    set(MA, Mw, T0) {
      if (T0 === 0 && typeof Mw == "string" && /^\d+$/.test(Mw) && MA[Mw] === 1) {
        {
          let T5 = Number(Mw);
          let T6 = g.monsterinstance[T5];
          let T7 = z.self;
          let T8 = T6 && typeof T6 == "object" && !T6.destroyed && g.monsterhp[T5] > 0 && !(g.mercymod[T5] >= (g.mercymax[T5] || 100));
          let T9 = () => {
            for (let TP = 0; TP < MA.length; TP++) {
              {
                if (TP === 3 || TP === T5 || MA[TP] !== 1) {
                  continue;
                }
                let TM = g.monsterinstance[TP];
                if (TM && typeof TM == "object" && !TM.destroyed) {
                  return true;
                }
              }
            }
            return false;
          };
          if (T8 && T7 !== T6 && (Pn(T7) || g.myfight === 7 && g.mnfight === -1 && T9())) {
            Ki.push({
              slot: T5,
              by: T7 && T7.constructor ? T7.constructor.name : "?",
              frame: z.frame
            });
            return true;
          }
        }
      }
      return Reflect.set(MA, Mw, T0);
    }
  });
}
X(armBoard, "armBoard");
var iw = [];
var K0 = new Map();
var aliveEnemy = X(i => i && typeof i == "object" && !i.destroyed && typeof i.myself == "number" && g.monster[i.myself] === 1 && g.monsterinstance[i.myself] === i, "aliveEnemy");
function swapSlots(i, K) {
  if (i === K) {
    return;
  }
  let Pe = g.monsterinstance[i];
  let Pt = g.monsterinstance[K];
  let Pn = [];
  for (let Mn of z.list) {
    if (!Mn.destroyed && !(typeof Mn.myself != "number") && (!(Mn !== Pe) || !(Mn !== Pt) || !!(typeof Mn.is == "function") && !!Mn.is("obj_monsterparent"))) {
      if (Mn.myself === i) {
        Pn.push([Mn, K]);
      } else if (Mn.myself === K) {
        Pn.push([Mn, i]);
      }
    }
  }
  for (let MA of perSlotArrays()) {
    {
      let Mw = MA === "monster" ? rawMonster() : g[MA];
      if (!Array.isArray(Mw)) {
        continue;
      }
      let T0 = Mw[i];
      Mw[i] = Mw[K];
      Mw[K] = T0;
    }
  }
  for (let [T1, T2] of Pn) {
    T1.myself = T2;
  }
}
X(swapSlots, "swapSlots");
function livingOnBoard() {
  for (let Pe = 0; Pe < g.monster.length; Pe++) {
    let Pt = g.monsterinstance[Pe];
    if (aliveEnemy(Pt) && !iw.includes(Pt)) {
      iw.push(Pt);
    }
  }
  return iw.filter(aliveEnemy);
}
X(livingOnBoard, "livingOnBoard");
function hiddenEnemies() {
  if (!isCustomBoard()) {
    return 0;
  }
  let It = [0, 1, 2].filter(Pt => g.monster[Pt] === 1).length;
  return Math.max(0, livingOnBoard().length - It);
}
X(hiddenEnemies, "hiddenEnemies");
function scrollBoard(i) {
  let It = livingOnBoard();
  let In = [0, 1, 2].filter(T0 => g.monster[T0] === 1);
  if (!In.length || It.length <= In.length) {
    return false;
  }
  let Pe = In.map(T0 => g.monsterinstance[T0]);
  let Pt = It.length;
  let Pn = It.indexOf(i > 0 ? Pe[Pe.length - 1] : Pe[0]);
  let Pr = null;
  for (let T0 = 1; T0 <= Pt && !Pr; T0++) {
    let T1 = It[((Pn + i * T0) % Pt + Pt) % Pt];
    if (!Pe.includes(T1)) {
      Pr = T1;
    }
  }
  if (!Pr) {
    return false;
  }
  let Mt = i > 0 ? [...Pe.slice(1), Pr] : [Pr, ...Pe.slice(0, -1)];
  for (let T2 = 0; T2 < In.length; T2++) {
    if (g.monsterinstance[In[T2]] !== Mt[T2]) {
      swapSlots(In[T2], Mt[T2].myself);
    }
  }
  return true;
}
X(scrollBoard, "scrollBoard");
function customScroll(i, K, It) {
  let Pr = g.bmenucoord;
  let Mt = [0, 1, 2].filter(Mw => g.monster[Mw] === 1);
  if (!Mt.length || !Pr[i]) {
    return false;
  }
  let Mn = Pr[i][K];
  if (It > 0 && Mt.some(Mw => Mw > Mn) || It < 0 && Mt.some(Mw => Mw < Mn) || !scrollBoard(It)) {
    return false;
  }
  let MA = [0, 1, 2].filter(Mw => g.monster[Mw] === 1);
  Pr[i][K] = It > 0 ? MA[MA.length - 1] : MA[0];
  return true;
}
X(customScroll, "customScroll");
function customTargetPicked(i, K, It) {
  let Pt = g.monsterinstance[It];
  if (aliveEnemy(Pt)) {
    K0.set(K, {
      inst: Pt,
      bm: i
    });
  } else {
    K0.delete(K);
  }
}
X(customTargetPicked, "customTargetPicked");
function customEndturn() {
  let It = [...K0.entries()].filter(([, Pn]) => aliveEnemy(Pn.inst));
  let In = new Set(It.map(([, Pn]) => Pn.inst));
  for (let [Pn, Pr] of It) {
    let Mt = Pr.inst.myself;
    if (Mt > 2) {
      let Mn = [0, 1, 2].find(MA => !In.has(g.monsterinstance[MA]));
      if (Mn === undefined) {
        continue;
      }
      swapSlots(Mn, Mt);
      Mt = Mn;
    }
    if (Pr.bm === 11 || Pr.bm === 13) {
      if (Array.isArray(g.actingtarget)) {
        g.actingtarget[Pn] = Mt;
      }
    } else {
      g.chartarget[Pn] = Mt;
    }
  }
  K0.clear();
}
X(customEndturn, "customEndturn");
function rawMonster() {
  return g.monster && g.monster.__raw || g.monster;
}
X(rawMonster, "rawMonster");
var Ki = [];
r();
const obj_hatguy_enemy = {
  partner: "obj_musical_controller"
};
const Ka = {
  introcon: 3,
  phase4introcon: 0
};
const obj_pink_enemy = {
  intro: Ka
};
const KP = {
  done_intro: true
};
const obj_blue_enemy = {
  intro: KP
};
const KT = {
  introcon: 0
};
const obj_holywatercooler_enemy = {
  intro: KT
};
const KY = {
  gersonintro: 2
};
const obj_balthizard_enemy = {
  intro: KY
};
const KL = {
  obj_hatguy_enemy: obj_hatguy_enemy,
  obj_pink_enemy: obj_pink_enemy,
  obj_blue_enemy: obj_blue_enemy,
  obj_holywatercooler_enemy: obj_holywatercooler_enemy,
  obj_balthizard_enemy: obj_balthizard_enemy
};
var Ke = 0.25;
var Kq = KL;
var KW = /^obj_(heart|yheart|purpleheart|greenheart|blueheart)$/;
var alive = X(i => i && typeof i == "object" && !i.destroyed, "alive");
var isA = X((i, K) => i && typeof i.is == "function" && i.is(K), "isA");
var isWriter = X(i => isA(i, "obj_writer") || isA(i, "obj_base_writer") || /^OBJ_(INSTA|NOMSC)?WRITER$/.test(i.constructor.name), "isWriter");
var isBalloon = X(i => /^obj_(battle)?blcon/i.test(i.constructor.name) || isA(i, "obj_battleblcon"), "isBalloon");
var KC = new WeakMap();
function entryOf(i) {
  let It = i.constructor;
  if (KC.has(It)) {
    return KC.get(It);
  }
  let Pt = null;
  try {
    let Pr = g.monstertype && g.monstertype[i.myself];
    let Mt = i._ch ?? g.chapter;
    let Mn = rosterDR().filter(T0 => T0.cls === It || T0.clsName === It.name);
    let MA = Mn.filter(T0 => T0.cls === It || T0.chapter === Mt);
    let Mw = MA.length ? MA : Mn;
    Pt = Mw.find(T0 => T0.type === Pr) || Mw[0] || rosterUT().find(T0 => T0.cls === It || T0.clsName === It.name) || null;
  } catch {
    Pt = null;
  }
  KC.set(It, Pt);
  return Pt;
}
X(entryOf, "entryOf");
function rowOf(i) {
  let Pt = entryOf(i);
  let Pn = Pt && traitOf(Pt) || null;
  let Pr = Kq[i.constructor.name];
  if (Pn && Pr) {
    return {
      ...Pr,
      ...Pn
    };
  } else {
    return Pn || Pr || null;
  }
}
X(rowOf, "rowOf");
var KU = new WeakMap();
function Kv(i) {
  let Pe = entryOf(i);
  let Pt = Pe ? roleOf(Pe) : null;
  if (!Pt || Pt === "regular") {
    Pt = KU.get(i.constructor) || Pt || "regular";
  }
  if (Pt === "alone" || Pt === "owner") {
    return "owner";
  } else {
    return "regular";
  }
}
X(Kv, "roleOf");
function boardEnemies() {
  let It = g.__boardSched;
  let In = [];
  for (let Pn = 0; Pn < g.monster.length; Pn++) {
    if (Pn === 3 || g.monster[Pn] !== 1) {
      continue;
    }
    let Pr = g.monsterinstance[Pn];
    if (!!alive(Pr) && Pr.myself === Pn && !Pr._quarantined) {
      if (Pr._schedSeq === undefined) {
        Pr._schedSeq = It.seq++;
      }
      In.push(Pr);
    }
  }
  return In.sort((Mt, Mn) => Mt._schedSeq - Mn._schedSeq);
}
X(boardEnemies, "boardEnemies");
var Kj = -1;
var KJ = null;
var Kg = false;
function attackerStanding() {
  if (Kj !== z.frame || KJ !== g.__boardSched) {
    Kj = z.frame;
    KJ = g.__boardSched;
    Kg = boardEnemies().some(Pe => Pe._schedAtk === 1);
  }
  return Kg;
}
X(attackerStanding, "attackerStanding");
function othersStanding(i) {
  for (let Pt = 0; Pt < g.monster.length; Pt++) {
    {
      if (Pt === 3 || g.monster[Pt] !== 1) {
        continue;
      }
      let Pn = g.monsterinstance[Pt];
      if (alive(Pn) && Pn !== i && Pn._schedHelperOf !== i) {
        return true;
      }
    }
  }
  return false;
}
X(othersStanding, "othersStanding");
var inEnemyPhase = X(i => i ? g.mnfight === 1 || g.mnfight === 2 : g.mnfight >= 1 && g.mnfight <= 2, "inEnemyPhase");
function plan(i) {
  i.live = 1;
  i.turn++;
  i.bullets = 0;
  i.planFrame = z.frame;
  let It = i.ut === 1;
  let In = boardEnemies();
  let Pe = In.filter(MA => Kv(MA) === "owner");
  let Pt = In.filter(MA => Kv(MA) !== "owner");
  let Pn = [];
  if (isPairBoard(In.map(MA => (entryOf(MA) || {}).key))) {
    Pn = In;
    i.ownerTurn = 0;
  } else if (Pe.length && (!Pt.length || i.turn % 2 === 1)) {
    Pn = [Pe[i.owner % Pe.length]];
    i.owner++;
    i.ownerTurn = 1;
  } else if (Pt.length) {
    {
      let Mw = i.cap > 0 ? i.cap : Pt.length;
      for (let T0 = 0; T0 < Pt.length && Pn.length < Mw; T0++) {
        Pn.push(Pt[(i.reg + T0) % Pt.length]);
      }
      i.reg = (i.reg + Pn.length) % Pt.length;
      i.ownerTurn = 0;
    }
  }
  i.attackers = Pn.length;
  for (let T1 of In) {
    {
      let T2 = Pn.includes(T1);
      T1._schedAtk = T2 ? 1 : 0;
      T1._schedRest = T2 ? 0 : 1;
      if (T2) {
        {
          if (!It && T1.talked === 0) {
            T1.rtimer = 0;
          }
          continue;
        }
      }
      rest(T1, It);
    }
  }
}
X(plan, "plan");
function rest(i, K) {
  if (i.attacked === 0 || i.attacked === undefined) {
    i.attacked = 1;
    i._schedSetA = 1;
  }
  if (!K && (i.talked === 0 || i.talked === undefined)) {
    i.talked = Ke;
    i._schedSetT = Ke;
  }
}
X(rest, "rest");
function endPlan(i) {
  if (i.live) {
    i.live = 0;
    i.attackers = 0;
    for (let Pn of z.list) {
      if (!Pn.destroyed) {
        if (Pn._schedSetA) {
          if (Pn.attacked === 1) {
            Pn.attacked = 0;
          }
          Pn._schedSetA = undefined;
        }
        if (Pn._schedSetT) {
          if (Pn.talked === Pn._schedSetT) {
            Pn.talked = 0;
          }
          Pn._schedSetT = undefined;
        }
        if (Pn._schedAtk !== undefined) {
          Pn._schedAtk = undefined;
          Pn._schedRest = undefined;
        }
      }
    }
  }
}
X(endPlan, "endPlan");
function mergeTimer(i, K) {
  if (!(i.attackers < 2) && typeof K == "number" && typeof g.turntimer == "number" && !!(g.turntimer < K)) {
    g.turntimer = K;
    i.merged = (i.merged || 0) + 1;
  }
}
X(mergeTimer, "mergeTimer");
const Kn = {
  by: null,
  ending: false
};
var Kh = Symbol("boardStep");
var KX = Kn;
function wrapClass(i) {
  let Pe = i && i.prototype;
  if (!Pe || Object.prototype.hasOwnProperty.call(Pe, Kh) || typeof Pe.step != "function") {
    return;
  }
  let Pt = Pe.step;
  Pe[Kh] = 1;
  let Pn = Pe.alarmEvent;
  if (typeof Pn == "function") {
    Pe.alarmEvent = function (...Mt) {
      let Mw = g.__boardSched;
      if (!Mw || !isCustomBoard()) {
        return Pn.apply(this, Mt);
      }
      let T1 = z.spawns;
      let T2 = g.battleover;
      let T3 = g.fighting;
      let T4 = KX.by;
      let T5 = KX.ending;
      KX.by = this;
      KX.ending = false;
      try {
        return Pn.apply(this, Mt);
      } finally {
        let T6 = KX.ending;
        KX.by = T4;
        KX.ending = T5;
        if (Mw.ut !== 1 && T6 && othersStanding(this)) {
          localExit(this, T2, T3);
        }
        if (z.spawns > T1) {
          let T7 = this._schedHelperOf && alive(this._schedHelperOf) ? this._schedHelperOf : this;
          if (Mw.ut === 1 && Mw.live && T7._schedRest === 1) {
            hush(z.spawns - T1);
          }
          for (let T8 of z.list.slice(-(z.spawns - T1))) {
            if (T8 !== this && T8._schedBy === undefined) {
              T8._schedBy = T7;
              T8._schedBorn = z.frame;
            }
          }
        }
      }
    };
  }
  Pe.step = function (...Mt) {
    let Mw = g.__boardSched;
    if (!Mw || !isCustomBoard()) {
      return Pt.apply(this, Mt);
    }
    let T0 = Mw.ut === 1;
    let T1 = inEnemyPhase(T0);
    if (T1 && !Mw.live) {
      plan(Mw);
    }
    let T4 = this._schedHelperOf && alive(this._schedHelperOf) ? this._schedHelperOf : this;
    if (!T0) {
      armWinFlag();
    }
    if (T1 && Mw.live && T4._schedAtk !== 1) {
      if (T4._schedRest === undefined && T4 === this) {
        T4._schedRest = 1;
      }
      rest(this, T0);
    }
    let T5 = g.turntimer;
    let T6 = g.mnfight;
    let T7 = g.myfight;
    let T8 = z.spawns;
    let T9 = g.battleover;
    let Ti = g.fighting;
    let TK = KX.by;
    let Ta = KX.ending;
    KX.by = this;
    KX.ending = false;
    let TI = false;
    try {
      return Pt.apply(this, Mt);
    } finally {
      TI = KX.ending;
      KX.by = TK;
      KX.ending = Ta;
      if (Mw.live && g.mnfight === 2 && T4 === this && this._schedAtk === 1) {
        mergeTimer(Mw, T5);
      }
      if (!T0 && Mw.live && (T6 === 1 || T6 === 1.5) && g.mnfight === 2) {
        closeTalk(T4, Mw);
      }
      if (T0 && Mw.live && T6 === 2 && g.mnfight === 3 && T5 > 1 && T4._schedRest === 1 && attackerStanding()) {
        g.mnfight = 2;
        g.turntimer = T5;
        if (Mw.keptTurn !== Mw.turn) {
          Mw.keptTurn = Mw.turn;
          Mw.kept = (Mw.kept || 0) + 1;
        }
      }
      if (!T0 && Mw.live && T6 === 2 && g.mnfight === 2 && T4._schedRest === 1 && typeof T5 == "number" && g.turntimer !== T5 && attackerStanding()) {
        g.turntimer = T5;
      }
      if (z.spawns > T8) {
        if (T0 && Mw.live && T4._schedRest === 1) {
          hush(z.spawns - T8);
        }
        adoptSpawns(this, z.spawns - T8);
      }
      if (T0 && !T9 && g.battleover === "ut-win") {
        T4._schedLeave = 1;
      }
      if (!T0 && g.myfight === 7 && g.mnfight === -1 && (T7 !== 7 || T6 !== -1) && othersStanding(this)) {
        let Tx = z.first("obj_battlecontroller");
        if (Tx && Tx.victoried !== 1) {
          Tx.victory = 0;
          g.myfight = T7;
          g.mnfight = T6;
          Ki.length = 0;
          TI = true;
        }
      }
      if (!T0 && (TI || this._schedLeave === 1 || !T9 && g.battleover && !/lose/i.test(String(g.battleover))) && othersStanding(this)) {
        localExit(this, T9, Ti);
      }
    }
  };
}
X(wrapClass, "wrapClass");
function closeTalk(i, K) {
  for (let Pn of z.list.slice()) {
    if (!alive(Pn) || !isBalloon(Pn) || !Pn._schedBy || Pn._schedBy === i || !isA(Pn._schedBy, "obj_monsterparent")) {
      continue;
    }
    let Pr = alive(Pn.mywriter) ? Pn.mywriter : null;
    if (Pr) {
      Pr.instance_destroy();
    }
    Pn.instance_destroy();
    K.closed = (K.closed || 0) + 1;
  }
}
X(closeTalk, "closeTalk");
function hush(i) {
  let Pt = z.list.slice(-i).filter(alive);
  if (Pt.some(isBalloon)) {
    for (let Pn of Pt) {
      if (isBalloon(Pn) || isWriter(Pn)) {
        Pn.instance_destroy();
      }
    }
  }
}
X(hush, "hush");
function adoptSpawns(i, K) {
  let Pn = z.list;
  let Pr = Math.max(0, Pn.length - K);
  let Mt = false;
  for (let Mn = Pr; Mn < Pn.length; Mn++) {
    let T3 = Pn[Mn];
    if (!!alive(T3) && T3 !== i) {
      if (T3._schedBy === undefined) {
        T3._schedBy = i;
        T3._schedBorn = z.frame;
      }
      if (isA(T3, "obj_growtangle") || isA(T3, "obj_moveheart")) {
        Mt = true;
      }
      if (!!isA(T3, "obj_monsterparent") && !T3._schedHelperOf && T3._schedSeq === undefined) {
        if (typeof T3.myself != "number" || g.monsterinstance[T3.myself] !== T3) {
          T3._schedHelperOf = i;
          if (typeof i.myself == "number") {
            T3.myself = i.myself;
          }
          wrapClass(T3.constructor);
          guardDestroy(T3.constructor);
        }
      }
    }
  }
  if (Mt && !KU.has(i.constructor) && (z.number("obj_growtangle") > 1 || z.number("obj_moveheart") > 1)) {
    KU.set(i.constructor, "owner");
  }
}
X(adoptSpawns, "adoptSpawns");
var KQ = Symbol("boardDestroy");
function guardDestroy(i) {
  let Pe = i && i.prototype;
  if (!Pe || Object.prototype.hasOwnProperty.call(Pe, KQ) || typeof Pe.instance_destroy != "function") {
    return;
  }
  let Pn = Pe.instance_destroy;
  Pe[KQ] = 1;
  Pe.instance_destroy = function (...Pr) {
    let T0 = g.__boardSched;
    if (!T0 || Pr.length > 0 || !isCustomBoard()) {
      return Pn.apply(this, Pr);
    }
    let T1 = KX.by;
    let T2 = T0.ut === 1;
    if (T1 && T1 !== this && refuseDestroy(this, T1, T2)) {
      return;
    }
    if (!T2 || !isA(this, "obj_monsterparent")) {
      return Pn.apply(this, Pr);
    }
    let T3 = z.first("obj_battlecontroller");
    let T4 = T3 && T3.visible;
    let T5 = KX.by;
    KX.by = this;
    try {
      return Pn.apply(this, Pr);
    } finally {
      KX.by = T5;
      if (T3 && T4 && !T3.visible && othersStanding(this)) {
        T3.visible = T4;
      }
    }
  };
}
X(guardDestroy, "guardDestroy");
var Km = ["obj_hpname", "obj_battlebg", "obj_btparent", "obj_borderparent", "obj_heart"];
function refuseDestroy(i, K, It) {
  if (It) {
    return Km.some(Pr => isA(i, Pr)) && othersStanding(K);
  } else if (isA(i, "obj_battlecontroller")) {
    if (othersStanding(K)) {
      KX.ending = true;
      return true;
    } else {
      return false;
    }
  } else if (KX.ending) {
    if (isA(i, "obj_heroparent") || isA(i, "obj_tensionbar")) {
      return true;
    } else {
      return isA(i, "obj_monsterparent") && typeof i.myself == "number" && g.monster[i.myself] === 1 && g.monsterinstance[i.myself] === i;
    }
  } else {
    return false;
  }
}
X(refuseDestroy, "refuseDestroy");
function localExit(i, K, It) {
  let Pt = g.__boardSched;
  g.battleover = K;
  g.fighting = It;
  for (let Mn of Object.keys(i)) {
    let MA = i[Mn];
    if (alive(MA) && MA !== i && typeof MA.depth == "number" && MA.depth <= -1000 && !isA(MA, "obj_monsterparent")) {
      MA.instance_destroy();
    }
  }
  let Mt = i.myself;
  if (!i.destroyed) {
    {
      try {
        {
          if (typeof i.scr_monsterdefeat == "function") {
            i.scr_monsterdefeat();
          }
        }
      } catch {}
      if (!i.destroyed) {
        i.instance_destroy();
      }
    }
  }
  if (typeof Mt == "number" && g.monsterinstance[Mt] === i && g.monster[Mt] === 1) {
    rawMonster()[Mt] = 0;
  }
  i._schedLeave = undefined;
  Pt.exits = (Pt.exits || 0) + 1;
  Pt.exitFrame = z.frame;
}
X(localExit, "localExit");
var Kk = 0;
function winGet() {
  return Kk;
}
X(winGet, "winGet");
function winSet(i) {
  if (i === 1 && Kk !== 1 && isCustomBoard() && g.__boardSched && g.__boardSched.ut !== 1) {
    let Pt = ownerOf(z.self);
    if (Pt && othersStanding(Pt)) {
      Pt._schedLeave = 1;
      return;
    }
  }
  Kk = i;
}
X(winSet, "winSet");
function armWinFlag() {
  let Pe = g.flag;
  if (!Array.isArray(Pe) || Pe.length <= 39) {
    return;
  }
  let Pn = Object.getOwnPropertyDescriptor(Pe, 39);
  if (!Pn || Pn.set !== winSet) {
    Kk = Pe[39];
    Object.defineProperty(Pe, 39, {
      configurable: true,
      enumerable: true,
      get: winGet,
      set: winSet
    });
  }
}
X(armWinFlag, "armWinFlag");
function ownerOf(i) {
  for (let Pt = 0; i && Pt < 4; Pt++) {
    if (alive(i._schedHelperOf)) {
      return i._schedHelperOf;
    }
    if (isA(i, "obj_monsterparent") && typeof i.myself == "number" && g.monsterinstance[i.myself] === i) {
      return i;
    }
    i = alive(i._schedBy) ? i._schedBy : null;
  }
  return null;
}
X(ownerOf, "ownerOf");
function boardSchedule(i, K) {
  let In = K === "ut";
  const Pe = {
    turns: 0,
    ownerTurns: 0,
    maxAttackers: 0,
    merged: 0
  };
  Pe.released = 0;
  Pe.passed = 0;
  Pe.kept = 0;
  Pe.nudged = 0;
  Pe.folded = 0;
  Pe.exits = 0;
  Pe.helpers = 0;
  const Pr = {
    stats: Pe,
    lastTurn: 0
  };
  if (!i._sched) {
    i._sched = Pr;
    g.__boardSched = {
      ut: In ? 1 : 0,
      seq: 0,
      turn: 0,
      owner: 0,
      reg: 0,
      live: 0,
      attackers: 0,
      ownerTurn: 0,
      merged: 0,
      exits: 0,
      cap: Math.max(0, i.atkCap | 0)
    };
    aP = -1;
    armGate();
  }
  let Mt = g.__boardSched;
  let Mn = i._sched.stats;
  if (!Mt) {
    return;
  }
  let MA = z.first("obj_battlecontroller");
  if (MA) {
    guardDestroy(MA.constructor);
  }
  for (let T1 of boardEnemies()) {
    wrapClass(T1.constructor);
    guardDestroy(T1.constructor);
  }
  if (!In) {
    z.with("obj_heroparent", T2 => guardDestroy(T2.constructor));
    z.with("obj_tensionbar", T2 => guardDestroy(T2.constructor));
  } else {
    for (let T2 of Km) {
      z.with(T2, T3 => guardDestroy(T3.constructor));
    }
  }
  if (g.mnfight === 0) {
    endPlan(Mt);
  }
  if (!In) {
    armWinFlag();
    for (let T3 of boardEnemies()) {
      if (T3._schedLeave === 1) {
        if (othersStanding(T3)) {
          localExit(T3, g.battleover, g.fighting);
        } else {
          T3._schedLeave = undefined;
          Kk = 1;
        }
      }
    }
  }
  if (Mt.turn !== i._sched.lastTurn && Mt.live) {
    i._sched.lastTurn = Mt.turn;
    Mn.turns++;
    if (Mt.ownerTurn) {
      Mn.ownerTurns++;
    }
    Mn.maxAttackers = Math.max(Mn.maxAttackers, Mt.attackers);
  }
  Mn.merged = Mt.merged;
  Mn.exits = Mt.exits;
  Mn.kept = Mt.kept || 0;
  Mn.closed = Mt.closed || 0;
  if (!In && Mt.exitFrame === z.frame && g.myfight === 3) {
    C();
  }
  nudgeBalloons(Mn);
  foldHearts(Mn);
  if (In && g.mnfight === 1 && z.exists("obj_purpleheart")) {
    z.with("obj_heart", T6 => {
      if (T6.x > -100) {
        T6.x = -200;
        T6.movement = -1;
      }
    });
  }
  if (Mt.live && inEnemyPhase(In)) {
    fold("obj_growtangle", Mn);
    fold("obj_moveheart", Mn);
    if (!In && g.mnfight === 2) {
      releasePartners(MA, Mn);
    }
    if (g.mnfight === 2) {
      passTurn(Mt, Mn, In);
    }
    if (In && g.mnfight === 2) {
      utTurnOver(Mt, Mn);
    }
  }
  let Mw = 0;
  for (let T6 of z.list) {
    if (!T6.destroyed && T6._schedHelperOf) {
      Mw++;
    }
  }
  Mn.helpers = Math.max(Mn.helpers, Mw);
}
X(boardSchedule, "boardSchedule");
function passTurn(i, K, It) {
  i.bullets = (i.bullets || 0) + 1;
  if (i.bullets % 30 !== 0 || i.bullets > 150) {
    return;
  }
  let Pt = boardEnemies();
  let Pn = Pt.filter(MA => MA._schedAtk === 1 && MA.attacked === 0);
  let Pr = Pt.filter(MA => MA._schedRest === 1 && MA._schedSetA === 1 && MA.attacked === 1);
  for (let MA of Pn) {
    let Mw = Pr.shift();
    if (!Mw) {
      break;
    }
    MA._schedAtk = 0;
    MA._schedRest = 1;
    rest(MA, It);
    Mw._schedAtk = 1;
    Mw._schedRest = 0;
    Mw.attacked = 0;
    Mw._schedSetA = undefined;
    K.passed++;
  }
}
X(passTurn, "passTurn");
var a2 = new WeakMap();
function canEndTurn(i) {
  let In = i.constructor;
  if (!a2.has(In)) {
    let Pn = "";
    for (let Pr = In.prototype; Pr && Pr !== Object.prototype && !/^(Inst|obj_monsterparent)$/.test(Pr.constructor.name); Pr = Object.getPrototypeOf(Pr)) {
      for (let Mt of Object.getOwnPropertyNames(Pr)) {
        let Mn = Object.getOwnPropertyDescriptor(Pr, Mt);
        if (Mn && typeof Mn.value == "function") {
          Pn += Mn.value.toString();
        }
      }
    }
    a2.set(In, /G\.(turntimer|mnfight)/.test(Pn));
  }
  return a2.get(In);
}
X(canEndTurn, "canEndTurn");
function utTurnOver(i, K) {
  i.outFrames = g.turntimer < 1 ? (i.outFrames || 0) + 1 : 0;
  if (!(i.outFrames < 10) && !z.list.some(Pr => alive(Pr) && Pr._schedBy && Pr._schedBy._schedAtk === 1 && Pr._schedBorn >= i.planFrame && !isA(Pr, "obj_monsterparent") && canEndTurn(Pr))) {
    g.turntimer = -1;
    g.mnfight = 3;
    i.outFrames = 0;
    K.turnsOver = (K.turnsOver || 0) + 1;
  }
}
X(utTurnOver, "utTurnOver");
function fold(i, K) {
  let Pe = null;
  for (let Pr of z.list.slice()) {
    if (!Pr.destroyed && !!isA(Pr, i)) {
      if (!Pe) {
        Pe = Pr;
        continue;
      }
      repoint(Pr, Pe);
      Pr.destroyed = true;
      z.remove(Pr);
      K.folded++;
    }
  }
}
X(fold, "fold");
function foldHearts(i) {
  let Pt = new Map();
  for (let Pn of z.list.slice()) {
    if (Pn.destroyed || !isA(Pn, "obj_heart") && !KW.test(Pn.constructor.name)) {
      continue;
    }
    let Pr = Pn.constructor.name;
    let Mt = Pt.get(Pr);
    if (!Mt) {
      Pt.set(Pr, Pn);
      continue;
    }
    repoint(Pn, Mt);
    Pn.destroyed = true;
    z.remove(Pn);
    i.folded++;
  }
}
X(foldHearts, "foldHearts");
function repoint(i, K) {
  for (let Pn of z.list) {
    if (!Pn.destroyed && (!!isA(Pn, "obj_monsterparent") || !!isA(Pn, "obj_bulletgenparent"))) {
      for (let Pr of Object.keys(Pn)) {
        if (Pn[Pr] === i) {
          Pn[Pr] = K;
        }
      }
    }
  }
}
X(repoint, "repoint");
function nudgeBalloons(i) {
  const It = {
    gIFkQ: function (Mn, MA) {
      return Mn === MA;
    },
    SshbG: function (Mn, MA) {
      return Mn !== MA;
    },
    vkzut: function (Mn) {
      return Mn();
    },
    zoLZW: function (Mn, MA) {
      return Mn(MA);
    },
    RuymW: function (Mn, MA) {
      return Mn(MA);
    },
    zCaaK: function (Mn, MA) {
      return Mn === MA;
    },
    eNSQB: function (Mn, MA) {
      return Mn === MA;
    },
    PQHsl: function (Mn, MA) {
      return Mn === MA;
    },
    ZwXXX: function (Mn, MA) {
      return Mn(MA);
    },
    bcyrq: function (Mn, MA, Mw) {
      return Mn(MA, Mw);
    },
    tFXGv: function (Mn, MA) {
      return Mn + MA;
    },
    AtCZs: "AzXSk",
    ePPrG: "vsrUL",
    cDRjd: function (Mn, MA) {
      return Mn <= MA;
    },
    CqCmw: function (Mn, MA) {
      return Mn === MA;
    },
    GXzdy: "LDzfn",
    ZREmA: "cMZGE",
    UfjNR: function (Mn, MA) {
      return Mn * MA;
    },
    YIPAa: function (Mn, MA) {
      return Mn % MA;
    },
    dDTpE: function (Mn, MA) {
      return Mn / MA;
    },
    LtHkj: function (Mn, MA) {
      return Mn && MA;
    },
    yPXxp: function (Mn, MA) {
      return Mn(MA);
    },
    BnrMJ: function (Mn, MA) {
      return Mn && MA;
    },
    FlOZD: function (Mn, MA, Mw, T0, T1) {
      return Mn(MA, Mw, T0, T1);
    }
  };
  let In = [];
  let Pe = [];
  for (let Mn of z.list) {
    if (!Mn.destroyed && isBalloon(Mn) && !isPart(Mn)) {
      (Mn._schedPlaced ? In : Pe).push(Mn);
    }
  }
  if (!Pe.length) {
    return;
  }
  let Pr = (MA, Mw) => MA.x < Mw.x + Mw.w && Mw.x < MA.x + MA.w && MA.y < Mw.y + Mw.h && Mw.y < MA.y + MA.h;
  let Mt = In.map(balloonBox);
  for (let MA of Pe) {
    MA._schedPlaced = 1;
    let Mw = balloonBox(MA);
    let T0 = (T3, T4) => Mw.x + T3 >= 0 && Mw.x + T3 + Mw.w <= 640 && Mw.y + T4 >= 4 && Mw.y + T4 + Mw.h <= 476 && !Mt.some(T5 => Pr({
      ...Mw,
      x: Mw.x + T3,
      y: Mw.y + T4
    }, T5));
    let T1 = null;
    if (!T0(0, 0)) {
      for (let T3 of [0, -(Mw.w + 8)]) {
        {
          for (let T5 = 1, T6 = Mw.h + 4; T5 <= 12 && !T1; T5++) {
            {
              let T7 = (T5 % 2 ? 1 : -1) * Math.ceil(T5 / 2) * T6;
              if (T0(T3, T7)) {
                T1 = [T3, T7];
              }
            }
          }
          if (It.LtHkj(!T1, T3) && T0(T3, 0)) {
            T1 = [T3, 0];
          }
          if (T1) {
            break;
          }
        }
      }
    }
    let T2 = writerOf(MA);
    if (It.BnrMJ(T1, T2)) {
      moveBalloon(MA, T2, T1[0], T1[1]);
      i.nudged++;
      Mw.x += T1[0];
      Mw.y += T1[1];
    }
    Mt.push(Mw);
  }
}
X(nudgeBalloons, "nudgeBalloons");
var isPart = X(i => /^obj_blconwideslave$/.test(i.constructor.name), "isPart");
function balloonBox(i) {
  if (i.auto_length === 1) {
    let Mn = i.balloonwidth > 0 ? i.balloonwidth + 20 : 240;
    let MA = i.balloonheight > 0 ? i.balloonheight : 60;
    return {
      x: i.x - Mn,
      y: i.y - MA / 2,
      w: Mn,
      h: MA
    };
  }
  let In = i.sprite_index && s[i.sprite_index];
  let Pe = In && In.w ? In.w * Math.abs(i.image_xscale || 1) : 100;
  let Pt = In && In.h ? In.h * Math.abs(i.image_yscale || 1) : 50;
  return {
    x: i.x - (In && In.xoff ? In.xoff : 0),
    y: i.y - (In && In.yoff ? In.yoff : 0),
    w: Math.max(40, Pe),
    h: Math.max(30, Pt)
  };
}
X(balloonBox, "balloonBox");
function writerOf(i) {
  if (alive(i.mywriter) && isWriter(i.mywriter)) {
    return i.mywriter;
  }
  for (let Pt of z.list) {
    if (!Pt.destroyed && (Pt.myblcon === i || Pt.blcon === i)) {
      let Pn = alive(Pt.blconwd) ? Pt.blconwd : Pt.mywriter;
      if (alive(Pn) && isWriter(Pn)) {
        return Pn;
      } else {
        return null;
      }
    }
  }
  return null;
}
X(writerOf, "writerOf");
function moveBalloon(i, K, It, In) {
  i.x += It;
  i.y += In;
  if (typeof i.remx == "number") {
    i.remx += It;
  }
  if (typeof i.remy == "number") {
    i.remy += In;
  }
  if (typeof i.initwritingx == "number" && i.initwritingx >= 0) {
    i.initwritingx += It;
  }
  if (typeof i.initwritingy == "number" && i.initwritingy >= 0) {
    i.initwritingy += In;
  }
  K.x += It;
  K.y += In;
  if (typeof K.writingx == "number") {
    K.writingx += It;
  }
  if (typeof K.writingy == "number") {
    K.writingy += In;
  }
}
X(moveBalloon, "moveBalloon");
function releasePartners(i, K) {
  if (!!i && i.noreturn === 1 && i.reset === 1 && !!(g.turntimer <= 1) && !z.list.some(Pn => !Pn.destroyed && isWriter(Pn)) && !!boardEnemies().some(Pn => {
    let MA = rowOf(Pn);
    return MA && MA.partner && !z.exists(MA.partner);
  })) {
    i.noreturn = 0;
    if (!(i.alarm[2] > 0)) {
      i.alarm[2] = 1;
    }
    K.released++;
  }
}
X(releasePartners, "releasePartners");
var aP = -1;
function armGate() {
  let Pe = J.bcStepGate;
  if (typeof Pe != "function" || Pe.__board) {
    return;
  }
  let Pt = function (Pn) {
    let T2 = Pe(Pn);
    if (T2 && isCustomBoard()) {
      aP = z.frame;
    }
    return T2;
  };
  Pt.__board = 1;
  J.bcStepGate = Pt;
}
X(armGate, "armGate");
function controllerGated() {
  return aP >= 0 && z.frame >= aP && z.frame - aP <= 1;
}
X(controllerGated, "controllerGated");
function gatingEnemies() {
  let K = [];
  for (let Pt of boardEnemies()) {
    let Pn = rowOf(Pt);
    if (Pn && (Pn.intro || Pn.gate)) {
      K.push({
        m: Pt,
        done: Pn.intro || null
      });
    }
  }
  return K;
}
X(gatingEnemies, "gatingEnemies");
function state(i) {
  i._guard ||= {
    frame: 0,
    key: "",
    since: 0,
    lastTT: null,
    pinned: 0,
    ttOut: 0,
    resetFrames: 0,
    nrIdle: 0,
    emptyFrames: 0,
    prevKey: "",
    counts: {},
    guestAlive: new Map(),
    flagSnap: new Map(),
    said: new Set()
  };
  return i._guard;
}
X(state, "state");
function note(i, K, It) {
  i.counts[K] = (i.counts[K] || 0) + 1;
  if (!i.said.has(K)) {
    i.said.add(K);
    console.warn("[custom guard] " + K + (It ? ": " + It : ""));
  }
}
X(note, "note");
var ae = X(i => i && !i.destroyed, "alive");
var aq = X((i, K) => typeof i.is == "function" && i.is(K), "isA");
function monsters() {
  return z.list.filter(i => ae(i) && aq(i, "obj_monsterparent"));
}
X(monsters, "monsters");
function realPop() {
  return (g.monster[0] === 1 ? 1 : 0) + (g.monster[1] === 1 ? 1 : 0) + (g.monster[2] === 1 ? 1 : 0);
}
X(realPop, "realPop");
function destroyAll(i) {
  for (let K of z.list.slice()) {
    if (ae(K) && i(K)) {
      try {
        K.instance_destroy();
      } catch {
        silentRemove(K);
      }
    }
  }
}
X(destroyAll, "destroyAll");
function silentRemove(i) {
  if (!!i && !i.destroyed) {
    i.destroyed = true;
    z.remove(i);
  }
}
X(silentRemove, "silentRemove");
var ax = X(i => aq(i, "obj_writer") || aq(i, "obj_base_writer"), "isWriter");
var aC = X(i => /^obj_(battle)?blcon/i.test(i.constructor.name) || aq(i, "obj_battleblcon"), "isBalloon");
function clearText() {
  destroyAll(i => ax(i) || aC(i));
}
X(clearText, "clearText");
var aS = {
  dr: {
    mn: new Set([0, 1, 1.25, 1.5, 2, -1]),
    my: new Set([0, -1, 1, 2, 3, 4, 5, 7])
  },
  ut: {
    mn: new Set([0, 1, 2, 3]),
    my: new Set([0, 1, 2, 3, 4])
  }
};
var aU = new WeakMap();
function classSource(i) {
  if (aU.has(i)) {
    return aU.get(i);
  }
  let K = "";
  for (let It = i && i.prototype; It && It !== Object.prototype; It = Object.getPrototypeOf(It)) {
    for (let In of Object.getOwnPropertyNames(It)) {
      let Pe = Object.getOwnPropertyDescriptor(It, In);
      if (In === "constructor" && Pe && typeof Pe.value == "function") {
        K += O(Pe.value);
      }
    }
  }
  aU.set(i, K);
  return K;
}
X(classSource, "classSource");
var literal = X(i => i < 0 ? "-(" + -i + ")" : String(i), "literal");
function phaseOwners(i) {
  let K = [];
  if (!aS[i].mn.has(g.mnfight)) {
    K.push("G.mnfight = " + literal(g.mnfight) + ";");
  }
  if (!aS[i].my.has(g.myfight)) {
    K.push("G.myfight = " + literal(g.myfight) + ";");
  }
  if (!K.length) {
    return [];
  }
  let It = new Set(monsters());
  for (let In = 0; In < g.monster.length; In++) {
    let Pe = g.monsterinstance[In];
    if (ae(Pe) && typeof Pe == "object") {
      It.add(Pe);
    }
  }
  return [...It].filter(Pt => {
    let Pn = classSource(Pt.constructor);
    return K.some(Pr => Pn.includes(Pr));
  });
}
X(phaseOwners, "phaseOwners");
function retire(i, K, It, In = "retired an enemy that kept the battle in its own state") {
  let Pe = K.myself;
  if (typeof Pe == "number" && g.monster[Pe] === 1) {
    rawMonster()[Pe] = 0;
  }
  K._quarantined = 1;
  try {
    K.instance_destroy();
  } catch {
    silentRemove(K);
  }
  note(i, In, K.constructor.name + " (" + It + ")");
}
X(retire, "retire");
function unknownPhase(K, It) {
  let In = !K.unknownResets && K.since >= 300 && K.frame - K.since < 300 && phaseOwners(It).length < monsters().filter(Pn => g.monster[Pn.myself] === 1).length;
  let Pe = K.unknownResets ? 300 : In ? 300 : 1200;
  if (K.since < Pe) {
    return false;
  }
  let Pt = g.mnfight + "/" + g.myfight + " for " + K.since + " frames";
  if (K.unknownResets) {
    for (let Pn of phaseOwners(It)) {
      retire(K, Pn, Pt);
    }
  }
  K.unknownResets = (K.unknownResets || 0) + 1;
  return true;
}
X(unknownPhase, "unknownPhase");
var ab = ["beginStep", "step", "endStep", "alarmEvent"];
function watchGuest(i) {
  if (!i._guardWrapped || !ab.some(K => Object.prototype.hasOwnProperty.call(i, K))) {
    if (!i._guardWrapped) {
      i._guardFailFrames = 0;
      i._guardLastFail = -1;
    }
    i._guardWrapped = 1;
    for (let K of ab) {
      let It = i[K];
      if (typeof It != "function") {
        continue;
      }
      let In = Object.prototype.hasOwnProperty.call(i, K);
      let Pe = Object.getPrototypeOf(i);
      i[K] = function (...Pt) {
        try {
          return (In ? It : Pe[K]).apply(this, Pt);
        } catch (Pn) {
          if (i._guardLastFail !== z.frame) {
            i._guardLastFail = z.frame;
            i._guardFailFrames++;
          }
          throw Pn;
        }
      };
    }
  }
}
X(watchGuest, "watchGuest");
function quarantine(i) {
  for (let K of z.list) {
    if (!ae(K) || !K._customGuest || (watchGuest(K), K._guardFailFrames < 30)) {
      continue;
    }
    let It = K.myself;
    if (typeof It == "number" && It >= 4 && g.monster[It] === 1) {
      rawMonster()[It] = 0;
    }
    K._quarantined = 1;
    try {
      K.instance_destroy();
    } catch {
      silentRemove(K);
    }
    note(i, "quarantined a guest", K.constructor.name + " threw on " + K._guardFailFrames + " frames");
  }
}
X(quarantine, "quarantine");
function ghostSlots(i) {
  i.ghost = i.ghost || [0, 0, 0];
  for (let K = 0; K < 3; K++) {
    let It = g.monsterinstance && g.monsterinstance[K];
    let In = g.monster[K] === 1 && It && typeof It == "object" && It.destroyed;
    i.ghost[K] = In ? i.ghost[K] + 1 : 0;
    if (i.ghost[K] >= 30) {
      rawMonster()[K] = 0;
      i.ghost[K] = 0;
      note(i, "freed a slot whose enemy is gone", "slot " + K + " " + It.constructor.name);
    }
  }
}
X(ghostSlots, "ghostSlots");
function nextGuest() {
  for (let i = 4; i < g.monster.length; i++) {
    if (g.monster[i] !== 1) {
      continue;
    }
    let K = g.monsterinstance[i];
    if (ae(K) && K.myself === i && !K._quarantined) {
      return i;
    }
  }
  return -1;
}
X(nextGuest, "nextGuest");
function swapIntoSlot(i, K) {
  swapSlots(i, K);
  let It = g.monsterinstance[i];
  delete It._customGuest;
  It._promotedFrom = K;
  rawMonster()[K] = 0;
  return It;
}
X(swapIntoSlot, "swapIntoSlot");
function promote(K, It) {
  let In = 0;
  for (let Pe = 0; Pe < 3; Pe++) {
    if (g.monster[Pe] === 1) {
      continue;
    }
    let Pt = nextGuest();
    if (Pt < 0) {
      break;
    }
    let Pn = swapIntoSlot(Pe, Pt);
    In++;
    note(K, "promoted a guest into a real slot", Pn.constructor.name + " " + Pt + " -> " + Pe + (It ? " (after the win was declared)" : ""));
  }
  return In;
}
X(promote, "promote");
function guestFlags(i) {
  if (Array.isArray(g.flag)) {
    for (let K = 4; K < g.monster.length; K++) {
      let It = i.guestAlive.get(K);
      let In = g.monster[K] === 1;
      if (In && !i.flagSnap.has(K)) {
        i.flagSnap.set(K, g.flag[51 + K]);
      }
      if (It && !In && i.flagSnap.has(K)) {
        g.flag[51 + K] = i.flagSnap.get(K);
      }
      i.guestAlive.set(K, In);
    }
  }
}
X(guestFlags, "guestFlags");
function capBullets(K, It) {
  let In = It === "ut" ? "blt_parent" : "obj_bulletparent";
  let Pe = 0;
  for (let Pn of z.list) {
    if (!Pn.destroyed && aq(Pn, In)) {
      Pe++;
    }
  }
  if (Pe <= 400) {
    return;
  }
  let Pt = Pe - 400;
  for (let Pr of z.list.slice()) {
    if (Pt <= 0) {
      break;
    }
    if (!Pr.destroyed && aq(Pr, In)) {
      silentRemove(Pr);
      Pt--;
    }
  }
  note(K, "capped bullets", Pe + " alive, cap " + 400);
}
X(capBullets, "capBullets");
function aR() {
  return z.first("obj_battlecontroller");
}
X(aR, "BC");
function drRtimer() {
  let i = g.mnfight === 0 && g.myfight === 0;
  for (let K of z.list) {
    if (!!ae(K) && K.attacked === 0 && !!aq(K, "obj_monsterparent")) {
      if (K.rtimer === undefined || typeof K.rtimer == "number" && Number.isNaN(K.rtimer) || i && K.talked === 0 && typeof K.rtimer == "number" && K.rtimer !== 0) {
        K.rtimer = 0;
      }
    }
  }
}
X(drRtimer, "drRtimer");
function drEndEnemyTurn(i, K) {
  if (i.frame - (i.forcedAt || -999) < 45) {
    return;
  }
  let It = aR();
  clearText();
  if (i.forceCount > 0) {
    z.with("obj_bulletparent", In => In.instance_destroy());
    z.with("obj_bulletgenparent", In => In.instance_destroy());
    z.with("obj_darkener", In => {
      In.darken = 0;
    });
    z.with("obj_heart", In => {
      h(In.x, In.y, f);
      In.instance_destroy();
    });
    if (It) {
      It.reset = 0;
      It.noreturn = 0;
      It.timeron = 1;
      It.alarm[2] = -1;
    }
    U();
    note(i, "ended a stuck enemy turn (directly)", K);
  } else {
    g.mnfight = 2;
    g.turntimer = 0;
    if (It) {
      It.reset = 0;
      It.noreturn = 0;
      It.timeron = 1;
    }
    note(i, "ended a stuck enemy turn", K);
  }
  i.forcedAt = i.frame;
  i.forceCount = (i.forceCount || 0) + 1;
  i.pinned = 0;
  i.resetFrames = 0;
  i.nrIdle = 0;
}
X(drEndEnemyTurn, "drEndEnemyTurn");
var al = 30;
function trackTimer(i) {
  let K = g.turntimer;
  if (i.lastTT === null || !(K >= i.lastTT) || K >= i.lastTT + al) {
    i.lastTT = K;
    i.pinned = 0;
  } else {
    i.pinned++;
  }
}
X(trackTimer, "trackTimer");
function drBulletPhase(i, K) {
  trackTimer(i);
  if (i.pinned === 150) {
    let It = [];
    for (let In of monsters()) {
      if (In.attacked === 0 && g.monster[In.myself] === 1) {
        In.attacked = 1;
        It.push(In.constructor.name);
      }
    }
    if (It.length) {
      note(i, "enemies that never attacked gave up their attack", It.join(", ") + " at turntimer " + g.turntimer);
    }
  }
  if (i.pinned >= 600) {
    drEndEnemyTurn(i, "turntimer held at " + g.turntimer + " for " + i.pinned + " frames");
    return;
  }
  if (K) {
    if (K.reset === 1) {
      i.resetFrames++;
      if (K.noreturn === 1) {
        let Pe = z.list.some(Pt => ae(Pt) && ax(Pt));
        i.nrIdle = Pe ? 0 : i.nrIdle + 1;
        if (i.nrIdle >= 240 || i.resetFrames >= 900) {
          if (i.resetFrames >= 900) {
            clearText();
          }
          K.noreturn = 0;
          K.alarm[2] = 1;
          i.nrIdle = 0;
          i.resetFrames = 0;
          note(i, "released an orphaned noreturn", "nobody left to hand the turn back");
        }
      } else if (!(K.alarm[2] > 0) && i.resetFrames >= 60) {
        K.alarm[2] = 1;
        i.resetFrames = 0;
        note(i, "re-armed the end-of-turn alarm");
      }
    } else {
      i.resetFrames = 0;
      i.nrIdle = 0;
    }
    if (i.since >= 2700) {
      drEndEnemyTurn(i, "bullet phase " + i.since + " frames");
    }
  }
}
X(drBulletPhase, "drBulletPhase");
function drMenuCleanup(i) {
  let K = 0;
  for (let In of z.list.slice()) {
    if (!!ae(In) && (!!aq(In, "obj_bulletparent") || !!aq(In, "obj_bulletgenparent"))) {
      try {
        In.instance_destroy();
      } catch {
        silentRemove(In);
      }
      K++;
    }
  }
  let It = i.prevMn === 1 || i.prevMn === 1.5 || i.prevMn === 2;
  if (i.since === 0 && It) {
    for (let Pe of z.list.slice()) {
      if (!!ae(Pe) && !!aq(Pe, "obj_battleblcon")) {
        if (ae(Pe.mywriter)) {
          try {
            Pe.mywriter.instance_destroy();
          } catch {
            silentRemove(Pe.mywriter);
          }
        }
        try {
          Pe.instance_destroy();
        } catch {
          silentRemove(Pe);
        }
        K++;
      }
    }
  }
  if (i.since === 0 && It) {
    z.with("obj_darkener", Pt => {
      Pt.darken = 0;
    });
    z.with("obj_heart", Pt => {
      h(Pt.x, Pt.y, f);
      Pt.instance_destroy();
    });
  }
  if (K) {
    note(i, "cleared an enemy turn left on the menu", K + " bullets/generators/balloons");
  }
}
X(drMenuCleanup, "drMenuCleanup");
function drFrozenMenu(i) {
  if (!controllerGated()) {
    i.gated = 0;
    i.gatedQuiet = 0;
    return;
  }
  i.gated = (i.gated || 0) + 1;
  let K = aR();
  if (i.gated === 15 && K && ae(K.battlewriter) && g.myfight === 0) {
    K.battlewriter.instance_destroy();
    note(i, "made way for an intro");
  }
  i.gatedQuiet = z.list.some(It => ae(It) && ax(It)) ? 0 : (i.gatedQuiet || 0) + 1;
  if (i.gatedQuiet === 150) {
    let It = [];
    for (let In of gatingEnemies()) {
      if (In.done) {
        Object.assign(In.m, In.done);
        It.push(In.m.constructor.name);
      }
    }
    if (It.length && g.mnfight === 0 && g.myfight === 0 && Array.isArray(g.char) && !(g.charturn < g.char.length)) {
      g.charturn = 0;
    }
    note(i, "ended an intro the battle controller was waiting for", It.join(", ") || "no known intro");
  }
  if (i.gatedQuiet >= 300) {
    for (let Pe of gatingEnemies()) {
      retire(i, Pe.m, "the controller waited " + i.gated + " frames for its intro");
    }
    i.gated = 0;
    i.gatedQuiet = 0;
  }
}
X(drFrozenMenu, "drFrozenMenu");
function drWatch(K) {
  let It = aR();
  drRtimer();
  let In = g.mnfight;
  let Pe = g.myfight;
  if (It && It.victory === 1 && It.victoried === 0 && (realPop() > 0 || nextGuest() >= 0)) {
    promote(K, true);
    if (Ki.length) {
      note(K, "refused a win that would have defeated enemies at full health", Ki.map(Pt => "slot " + Pt.slot + " by " + Pt.by).join(", "));
      Ki.length = 0;
    }
    if (realPop() > 0) {
      It.victory = 0;
      if (K.prevMn === 2) {
        U();
      } else {
        g.mnfight = 1;
        g.myfight = -1;
      }
      note(K, "cancelled a win with guests still standing");
    }
    return;
  }
  if (In !== -1 || Pe !== 7) {
    drFrozenMenu(K);
    if (In === 0 && Pe === 0) {
      drMenuCleanup(K);
      if (realPop() === 0 && nextGuest() < 0) {
        if (++K.emptyFrames >= 30) {
          K.emptyFrames = 0;
          v();
          note(K, "won a board with no enemy left");
        }
      } else {
        K.emptyFrames = 0;
      }
      return;
    }
    K.emptyFrames = 0;
    if (In === 2) {
      drBulletPhase(K, It);
      return;
    }
    K.pinned = 0;
    K.lastTT = null;
    if (In === 1 || In === 1.25 || In === 1.5) {
      if (K.since <= 1) {
        K.quietTalk = 0;
      }
      K.quietTalk = z.list.some(Pt => ae(Pt) && /writer|blcon|balloon|choicer|^obj_face/i.test(Pt.constructor.name)) ? 0 : (K.quietTalk || 0) + 1;
      if (In === 1 && K.quietTalk >= 240) {
        K.quietTalk = 0;
        g.mnfight = 2;
        note(K, "moved on a talk phase with nothing to read");
        return;
      }
      if (K.since === 600) {
        q();
        note(K, "pressed Z at a talk phase that did not end");
      }
      if (K.since >= 900) {
        drEndEnemyTurn(K, "talk phase " + K.since + " frames");
      }
      return;
    }
    if (Pe === 3 && K.since >= 150 && K.since % 30 === 0) {
      let Pt = monsters().filter(Pr => Pr.acting > 0 || Pr.actingsus > 0 || Pr.actingral > 0 || Pr.actingnoe > 0).some(Pr => (Pr.actcon || 0) !== 0 || (Pr.actconsus || 0) !== 0 || (Pr.actconral || 0) !== 0 || (Pr.actconnoe || 0) !== 0);
      let Pn = z.list.some(Pr => ae(Pr) && (ax(Pr) || aC(Pr)));
      if (!Pt && !Pn) {
        C();
        note(K, "skipped an ACT that never started");
        return;
      }
    }
    if (Pe === 3 || Pe === 4) {
      if (K.since === 600) {
        q();
        note(K, "advanced the text of an ACT/spell phase that did not end");
      }
      if (K.since >= 750) {
        C();
        K.since = 0;
        note(K, "left a stuck ACT/spell phase");
      }
      return;
    }
    if (Pe === 1 && !z.exists("obj_attackpress")) {
      if (K.since >= 600) {
        g.mnfight = 1;
        g.myfight = -1;
        note(K, "left a stuck attack phase");
      }
      return;
    }
    if (unknownPhase(K, "dr")) {
      K.forcedAt = -999;
      drEndEnemyTurn(K, "phase " + In + "/" + Pe + " for " + K.since + " frames");
      K.since = 0;
    }
  }
}
X(drWatch, "drWatch");
function utWatch(i) {
  let K = g.mnfight;
  let It = g.myfight;
  let In = z.first("obj_battlecontroller");
  if (In && In.won === 1 && !i.utWonSeen && realPop() === 0 && nextGuest() >= 0 && (promote(i, true), realPop() > 0)) {
    In.won = 0;
    g.xp -= g.xpreward[3] || 0;
    g.gold -= g.goldreward[3] || 0;
    destroyAll(ax);
    g.myfight = 0;
    g.mnfight = 1;
    note(i, "cancelled a win with guests still standing");
    return;
  }
  if (In && In.won === 1) {
    i.utWonSeen = true;
    return;
  }
  if (K !== 0 || It !== 0) {
    if (K === 1) {
      if (i.since === 600) {
        q();
        note(i, "pressed Z at a talk phase that did not end");
      }
      if (i.since >= 900) {
        destroyAll(aC);
        i.since = 0;
        if ((i.talkForces = (i.talkForces || 0) + 1) === 1) {
          g.mnfight = 2;
          note(i, "moved a stuck talk phase on");
        } else {
          g.turntimer = -1;
          g.mnfight = 3;
          note(i, "ended a talk phase that kept coming back");
        }
      }
      return;
    }
    if (K === 2) {
      i.ttOut = g.turntimer < 1 ? i.ttOut + 1 : 0;
      trackTimer(i);
      if (i.ttOut >= 90 || i.pinned >= 600 || i.since >= 2700) {
        let Pe = i.ttOut >= 90 ? "turntimer out, no generator ended it" : i.pinned >= 600 ? "turntimer held at " + g.turntimer : "bullet phase " + i.since + " frames";
        g.turntimer = -1;
        g.mnfight = 3;
        i.ttOut = 0;
        i.pinned = 0;
        note(i, "ended a stuck enemy turn", Pe);
      }
      return;
    }
    i.pinned = 0;
    i.lastTT = null;
    i.ttOut = 0;
    if (K === 3) {
      if (i.since === 300) {
        z.with("obj_lborder", Pt => {
          Pt.x = g.idealborder[0];
        });
        z.with("obj_rborder", Pt => {
          Pt.x = g.idealborder[1];
        });
        z.with("obj_uborder", Pt => {
          Pt.y = g.idealborder[2];
        });
        z.with("obj_dborder", Pt => {
          Pt.y = g.idealborder[3];
        });
        note(i, "snapped the box back to the menu");
      }
      if (i.since >= 600) {
        g.bmenuno = 0;
        g.myfight = 0;
        g.mnfight = 0;
        g.turn = (g.turn || 0) + 1;
        g.mercyuse = -1;
        note(i, "returned to the menu");
      }
      return;
    }
    if (K === 0 && It >= 1 && It <= 4) {
      if (i.since === 600) {
        q();
        note(i, "advanced the text of an ACT/FIGHT phase that did not end");
      }
      if (i.since >= 750) {
        z.with("obj_base_writer", Pt => {
          Pt.halt = 3;
        });
        g.myfight = 0;
        g.mnfight = 1;
        note(i, "left a stuck ACT/FIGHT phase");
      }
      return;
    }
    if (unknownPhase(i, "ut")) {
      destroyAll(Pt => ax(Pt) || aC(Pt));
      g.turntimer = -1;
      g.myfight = 0;
      g.mnfight = 3;
      i.since = 0;
      note(i, "reset a phase nobody left", K + "/" + It + " for " + i.since + " frames");
    }
  }
}
X(utWatch, "utWatch");
function utEarlyExit(K) {
  let It = z.first("obj_battlecontroller");
  if (!It || It.won === 1 || It.runaway === 1 || K.utWonSeen || (K.exitUndos || 0) >= g.monster.length) {
    return;
  }
  let In = /^(obj_battlecontroller|obj_heart|obj_battler|OBJ_|obj_base_writer|blt_)/;
  let Pe = [...Array(g.monster.length).keys()].filter(Pn => g.monster[Pn] === 1 && ae(g.monsterinstance[Pn])).map(Pn => g.monsterinstance[Pn]).filter(Pn => Pn._schedLeave === 1);
  for (let Pn of z.list) {
    if (Pn._schedLeave === 1) {
      Pn._schedLeave = undefined;
    }
  }
  if (!Pe.length) {
    for (let Pr = 0; Pr < g.monster.length; Pr++) {
      let Mt = g.monsterinstance[Pr];
      if (g.monster[Pr] === 1 && ae(Mt) && typeof Mt == "object" && g.monsterhp[Pr] <= 0) {
        Pe.push(Mt);
      }
    }
  }
  if (!Pe.length) {
    let Mn = new Set([...Array(g.monster.length).keys()].filter(Mw => g.monster[Mw] === 1).map(Mw => g.monsterinstance[Mw]));
    let MA = z.list.find(Mw => ae(Mw) && Mn.has(Mw) && !In.test(Mw.constructor.name) && /room_goto(_next)?\(/.test(classSource(Mw.constructor)));
    if (MA) {
      Pe = [MA];
    }
  }
  let Pt = Pe.length ? [] : z.list.filter(Mw => ae(Mw) && Mw._schedBy && !ae(Mw._schedBy) && /room_goto(_next)?\(/.test(classSource(Mw.constructor)));
  if (!![...Array(g.monster.length).keys()].some(Mw => g.monster[Mw] === 1 && ae(g.monsterinstance[Mw]) && !Pe.includes(g.monsterinstance[Mw])) && (!!Pe.length || !!Pt.length)) {
    K.exitUndos = (K.exitUndos || 0) + 1;
    for (let Mw of Pt) {
      let T0 = z.list.slice(z.list.indexOf(Mw) + 1);
      for (let T1 of T0) {
        if (ae(T1) && typeof T1.depth == "number" && T1.depth <= -1000 && !aq(T1, "obj_monsterparent") && !ax(T1)) {
          silentRemove(T1);
        }
      }
      silentRemove(Mw);
    }
    for (let T2 of Pe) {
      retire(K, T2, "it ended the battle with enemies still standing", "let one enemy leave by its own exit");
    }
    g.battleover = null;
    destroyAll(T3 => ax(T3) || aC(T3));
    g.turntimer = -1;
    g.myfight = 0;
    g.mnfight = 3;
    promote(K, true);
    note(K, "let one enemy leave by its own exit", "the others stay");
  }
}
X(utEarlyExit, "utEarlyExit");
function utMenuScroll(K) {
  if (g.mnfight !== 0 || g.myfight !== 0 || g.bmenuno !== 1 && g.bmenuno !== 2 || !Array.isArray(g.bmenucoord)) {
    K.utCur = null;
    return;
  }
  let It = g.bmenucoord[1];
  let In = K.utCur;
  K.utCur = It;
  if (In == null || hiddenEnemies() === 0) {
    return;
  }
  let Pe = [0, 1, 2].filter(MA => g.monster[MA] === 1);
  if (!Pe.length) {
    return;
  }
  let Pt = Pe[0];
  let Pn = Pe[Pe.length - 1];
  let Pr = 0;
  if (c.pressed.down && In === Pn && It === Pt) {
    Pr = 1;
  } else if (c.pressed.up && In === Pt && It === Pn) {
    Pr = -1;
  }
  if (!Pr || !scrollBoard(Pr)) {
    return;
  }
  let Mt = [0, 1, 2].filter(MA => g.monster[MA] === 1);
  g.bmenucoord[1] = Pr > 0 ? Mt[Mt.length - 1] : Mt[0];
  K.utCur = g.bmenucoord[1];
  let Mn = z.list.find(MA => ae(MA) && MA.constructor.name === "OBJ_INSTAWRITER");
  if (Mn) {
    try {
      x().UTSCR.SCR_TEXT.call({}, 3);
      let MA = g.msg[0];
      if (Array.isArray(Mn.mystring)) {
        Mn.mystring[0] = MA;
      }
      Mn.originalstring = MA;
      Mn.stringpos = String(MA).length;
    } catch {}
  }
  note(K, "scrolled the target list");
}
X(utMenuScroll, "utMenuScroll");
function customWatchdog(i) {
  if (!i || !i.customEncounter || (g.battleover === "ut-win" && i.customEngine === "ut" && !g.inGameOver && utEarlyExit(state(i)), g.battleover || g.inGameOver) || !Array.isArray(g.monster) && typeof g.monster != "object") {
    return;
  }
  let K = state(i);
  K.frame++;
  let It = i.customEngine === "ut" ? "ut" : "dr";
  let In = g.mnfight + "/" + g.myfight;
  if (In !== K.key) {
    K.prevMn = K.curMn;
    K.key = In;
    K.since = 0;
  } else {
    K.since++;
  }
  if (In === "0/0") {
    K.forceCount = 0;
    K.talkForces = 0;
  }
  K.curMn = g.mnfight;
  quarantine(K);
  ghostSlots(K);
  if (It === "dr") {
    guestFlags(K);
  }
  if (It === "dr") {
    let Pe = aR();
    if (!Pe || Pe.victory !== 1 && Pe.victoried !== 1) {
      promote(K, false);
    }
  } else {
    let Pt = z.first("obj_battlecontroller");
    if (!Pt || Pt.won !== 1) {
      promote(K, false);
    }
  }
  boardSchedule(i, It);
  if (g.mnfight === 2) {
    capBullets(K, It);
  }
  if (It === "ut") {
    utMenuScroll(K);
  }
  if (It === "dr") {
    drWatch(K);
  } else {
    utWatch(K);
  }
  if (Ki.length) {
    note(K, "refused a collateral defeat", Ki.map(Pn => "slot " + Pn.slot + " by " + Pn.by).join(", "));
    Ki.length = 0;
  }
}
X(customWatchdog, "customWatchdog");
export { roleOf as a, hostChapter as b, checkAdd as c, pairOf as d, boardNotes as e, customWatchdog as f, rosterDR as g, rosterUT as h, makeCustomFight as i, spawnGuests as j };
