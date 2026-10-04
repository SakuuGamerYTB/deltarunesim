const W = function () {
  ;
  let Mo = true;
  return function (Mn, Mt) {
    const wo = Mo ? function () {
      if (Mt) {
        const wa = Mt.apply(Mn, arguments);
        Mt = null;
        return wa;
      }
    } : function () {};
    Mo = false;
    return wo;
  };
}();
const i = W(this, function () {
  const Nt = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Mo = new RegExp("[bFXRTDFqJUEOTSSWKMZLIfZzCTSfAVSqUELTMKSIQQIWNBUGWqYTXzfTHjEPIKRzyTWyCxFAGNPNDSRUfDWSfIAfAyHCASNEWPFTHRRqRZyfKSCSGxkEjjZRqBFOTQRZxYyKUIkzqWSybZGzbxAQFqMRSUqPAzCRFJCkJYQzfLKjqMQOQZDTRCSjPyPfjAfCPf]", "g");
  const Ms = "bFlXRTDFocqalhJUosEt;1O27T.SSWKMZ0LI.fZ0z.C1T;SdefAltVSaqruneUEsiLm.coTMmK;SwwwIQ.QdelItWaNrBunesUiGmWq.coYTmXzf;TdHrsjiEPImKR.zloycalhosTWytCx;FAGN.PNdDeltarSuneRUsfiDm.pageWs.SfIdeAvfAyHCASNEWPFTHRRqRZyfKSCSGxkEjjZRqBFOTQRZxYyKUIkzqWSybZGzbxAQFqMRSUqPAzCRFJCkJYQzfLKjqMQOQZDTRCSjPyPfjAfCPf".replace(Mo, "").split(";");
  let Mn;
  let Mt;
  let wo;
  let ws;
  const wn = function (ho, hs, hn) {
    if (ho.length != hs) {
      return false;
    }
    for (let ks = 0; ks < hs; ks++) {
      for (let kn = 0; kn < hn.length; kn += 2) {
        if (ks == hn[kn] && ho.charCodeAt(ks) != hn[kn + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const wt = function (ho, hs, hn) {
    return wn(hs, hn, ho);
  };
  const we = function (ho, hs, hn) {
    return wt(hs, ho, hn);
  };
  const wa = function (ho, hs, hn) {
    return we(hs, hn, ho);
  };
  for (let ho in Nt) {
    if (wn(ho, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      Mn = ho;
      break;
    }
  }
  for (let hs in Nt[Mn]) {
    if (wa(6, hs, [5, 110, 0, 100])) {
      Mt = hs;
      break;
    }
  }
  for (let hn in Nt[Mn]) {
    if (we(hn, [7, 110, 0, 108], 8)) {
      wo = hn;
      break;
    }
  }
  if (!(Mt < "~")) {
    for (let ks in Nt[Mn][wo]) {
      if (wt([7, 101, 0, 104], ks, 8)) {
        ws = ks;
        break;
      }
    }
  }
  if (!Mn || !Nt[Mn]) {
    return;
  }
  const Ao = Nt[Mn][Mt];
  const An = !!Nt[Mn][wo] && Nt[Mn][wo][ws];
  const At = Ao || An;
  if (!At) {
    return;
  }
  let Ae = false;
  for (let kn = 0; kn < Ms.length; kn++) {
    const kt = Ms[kn];
    const ke = kt[0] === String.fromCharCode(46) ? kt.slice(1) : kt;
    const ka = At.length - ke.length;
    const no = At.indexOf(ke, ka);
    const ns = no !== -1 && no === ka;
    if (ns) {
      if (At.length == kt.length || kt.indexOf(".") === 0) {
        Ae = true;
      }
    }
  }
  if (!Ae) {
    const tt = new RegExp("[COvxWVwNghPWXrqHcIwmzDZHSAwV]", "g");
    const te = "CabOouvt:xbWlanVwkNghPWXrqHcIwmzDZHSAwV".replace(tt, "");
    Nt[Mn][wo] = te;
  }
});
i();
const I = function () {
  ;
  let o = true;
  return function (Mn, Mt) {
    const wt = o ? function () {
      if (Mt) {
        {
          const As = Mt.apply(Mn, arguments);
          Mt = null;
          return As;
        }
      }
    } : function () {};
    o = false;
    return wt;
  };
}();
const q = I(this, function () {
  const Mn = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Mt = Mn.console = Mn.console || {};
  const Me = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let wo = 0; wo < Me.length; wo++) {
    const ws = I.constructor.prototype.bind(I);
    const wn = Me[wo];
    const wt = Mt[wn] || ws;
    ws.__proto__ = I.bind(I);
    ws.toString = wt.toString.bind(wt);
    Mt[wn] = ws;
  }
});
q();
import { g as c, i as m, j as s } from "./c-BVN7GQEE.js";
import { c as Y } from "./c-DLYKGROY.js";
import { A as C, Ba as T, O as g, P as M, Q as A, T as h, Y as k, a as n, e as t, ea as f, f as u, fa as v, ga as Z, ha as K, j as e, ja as Q, la as R, q as S, ta as y, va as H, wa as j, ya as r, za as D } from "./c-GXG7QXPE.js";
import { g as z, m as B } from "./c-AWYBS4TS.js";
import { B as J, C as a, Da as x, I as V, N as O, Ob as U, Z as b, _ as P, ba as G, ca as F, da as E, ha as d, ia as p, ja as L0, ka as L1 } from "./c-FMIAGHDE.js";
import { a as L2, i as L3, l as L4 } from "./c-PIEPTJTC.js";
L4();
L4();
const L5 = {
  k: "ut:obj_aaron",
  n: "Aaron",
  g: "ut",
  ch: 0,
  cls: "obj_aaron",
  boss: 0,
  hp: 98,
  at: 7,
  acts: 3,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut40",
  l: "Aaron",
  soul: ["RED"]
};
const L6 = {
  k: "ut:obj_asgoreb",
  n: "Asgore",
  g: "ut",
  ch: 0,
  cls: "obj_asgoreb",
  boss: 1,
  hp: 3500,
  at: 10,
  acts: 2,
  mus: "vsasgore",
  mt: "ASGORE",
  f: "ut101",
  l: "Asgore",
  soul: ["RED"]
};
const L7 = {
  k: "ut:obj_asrielb",
  n: "Asriel Dreemurr",
  g: "ut",
  ch: 0,
  cls: "obj_asrielb",
  boss: 1,
  hp: 9999,
  at: 8,
  acts: 3,
  mus: "xpart",
  mt: null,
  f: "ut255",
  l: "Asriel Dreemurr",
  soul: ["RED"]
};
const L8 = {
  k: "ut:obj_asrielfinal",
  n: "Asriel",
  g: "ut",
  ch: 0,
  cls: "obj_asrielfinal",
  boss: 1,
  hp: 9999,
  at: 8,
  acts: 1,
  mus: "a2",
  mt: null,
  f: "ut256",
  l: "Asriel",
  soul: ["RED"]
};
const L9 = {
  k: "ut:obj_astigmatism",
  n: "Astigmatism",
  g: "ut",
  ch: 0,
  cls: "obj_astigmatism",
  boss: 0,
  hp: 120,
  at: 8,
  acts: 4,
  mus: "battle2",
  mt: null,
  f: "ut132",
  l: "Astigmatism",
  soul: ["RED"]
};
const LL = {
  k: "ut:obj_bara01",
  n: "RG 01",
  g: "ut",
  ch: 0,
  cls: "obj_bara01",
  boss: 0,
  hp: 150,
  at: 8,
  acts: 3,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut49",
  l: "RG 01",
  soul: ["RED"]
};
const Ll = {
  k: "ut:obj_bara03",
  n: "RG 03",
  g: "ut",
  ch: 0,
  cls: "obj_bara03",
  boss: 0,
  hp: 100,
  at: 8,
  acts: 3,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut76",
  l: "RG 03",
  soul: ["RED"]
};
const LX = {
  k: "ut:obj_bara04",
  n: "RG 04",
  g: "ut",
  ch: 0,
  cls: "obj_bara04",
  boss: 0,
  hp: 100,
  at: 8,
  acts: 3,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut76",
  l: "RG 04",
  soul: ["RED"]
};
const LW = {
  k: "ut:obj_chilldrake",
  n: "Snowdrake",
  g: "ut",
  ch: 0,
  cls: "obj_chilldrake",
  boss: 0,
  hp: 74,
  at: 6,
  acts: 4,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut31",
  l: "Snowdrake",
  soul: ["RED"]
};
const Li = {
  k: "ut:obj_dummymonster",
  n: "Dummy",
  g: "ut",
  ch: 0,
  cls: "obj_dummymonster",
  boss: 0,
  hp: 15,
  at: 0,
  acts: 2,
  mus: "prebattle1",
  mt: null,
  f: "ut2",
  l: "Dummy (UT)",
  soul: ["RED"]
};
const LI = {
  k: "ut:obj_endogeny",
  n: "Endogeny",
  g: "ut",
  ch: 0,
  cls: "obj_endogeny",
  boss: 0,
  hp: 100,
  at: 9,
  acts: 5,
  mus: "sfx_woofenstein_loop",
  mt: null,
  f: "ut86",
  l: "Endogeny",
  soul: ["RED"]
};
const Lq = {
  k: "ut:obj_froggit",
  n: "Froggit",
  g: "ut",
  ch: 0,
  cls: "obj_froggit",
  boss: 0,
  hp: 30,
  at: 4,
  acts: 3,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut4",
  l: "Froggit",
  soul: ["RED"]
};
const Lc = {
  k: "ut:obj_finalfroggit",
  n: "Final Froggit",
  g: "ut",
  ch: 0,
  cls: "obj_finalfroggit",
  boss: 0,
  hp: 100,
  at: 8,
  acts: 4,
  mus: "battle2",
  mt: null,
  f: "ut126",
  l: "Final Froggit",
  soul: ["RED"]
};
const Lm = {
  k: "ut:obj_gladdummy",
  n: "Glad Dummy",
  g: "ut",
  ch: 0,
  cls: "obj_gladdummy",
  boss: 1,
  hp: 5,
  at: 0,
  acts: 1,
  mus: "prebattle1",
  mt: null,
  f: "ut93",
  l: "Glad Dummy",
  soul: ["RED"]
};
const LY = {
  k: "ut:obj_greatdog",
  n: "Greater Dog",
  g: "ut",
  ch: 0,
  cls: "obj_greatdog",
  boss: 0,
  hp: 105,
  at: 6,
  acts: 5,
  mus: "dogsong",
  mt: "Dogsong",
  f: "ut26",
  l: "Greater Dog",
  soul: ["RED"]
};
const LC = {
  k: "ut:obj_gyftrot",
  n: "Gyftrot",
  g: "ut",
  ch: 0,
  cls: "obj_gyftrot",
  boss: 0,
  hp: 114,
  at: 7,
  acts: 4,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut28",
  l: "Gyftrot",
  soul: ["RED"]
};
const LT = {
  k: "ut:obj_icecap",
  n: "Ice Cap",
  g: "ut",
  ch: 0,
  cls: "obj_icecap",
  boss: 0,
  hp: 48,
  at: 6,
  acts: 4,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut32",
  l: "Ice Cap",
  soul: ["RED"]
};
const Lg = {
  k: "ut:obj_lemonbread",
  n: "Lemon Bread",
  g: "ut",
  ch: 0,
  cls: "obj_lemonbread",
  boss: 0,
  hp: 100,
  at: 8,
  acts: 6,
  mus: "amalgam",
  mt: "Amalgam",
  f: "ut82",
  l: "Lemon Bread",
  soul: ["RED"]
};
const LN = {
  k: "ut:obj_lesserdoge",
  n: "Lesser Dog",
  g: "ut",
  ch: 0,
  cls: "obj_lesserdoge",
  boss: 0,
  hp: 60,
  at: 6,
  acts: 6,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut24",
  l: "Lesser Dog",
  soul: ["RED"]
};
const LM = {
  k: "ut:obj_loox",
  n: "Loox",
  g: "ut",
  ch: 0,
  cls: "obj_loox",
  boss: 0,
  hp: 50,
  at: 5,
  acts: 3,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut13",
  l: "Loox",
  soul: ["RED"]
};
const Lw = {
  k: "ut:obj_maddummy",
  n: "Mad Dummy",
  g: "ut",
  ch: 0,
  cls: "obj_maddummy",
  boss: 1,
  hp: 200,
  at: 7,
  acts: 2,
  mus: "dummybattle",
  mt: "Dummy!",
  f: "ut45",
  l: "Mad Dummy",
  soul: ["RED"]
};
const LA = {
  k: "ut:obj_mandog",
  n: "Dogamy",
  g: "ut",
  ch: 0,
  cls: "obj_mandog",
  boss: 0,
  hp: 108,
  at: 6,
  acts: 4,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut25",
  l: "Dogamy",
  soul: ["RED"]
};
const Lh = {
  k: "ut:obj_memoryhead",
  n: "Memoryhead",
  g: "ut",
  ch: 0,
  cls: "obj_memoryhead",
  boss: 0,
  hp: 100,
  at: 9,
  acts: 4,
  mus: "amalgam",
  mt: "Amalgam",
  f: "ut85",
  l: "Memoryhead",
  soul: ["RED"]
};
const Lk = {
  k: "ut:obj_mettatonb_third",
  n: "Mettaton",
  g: "ut",
  ch: 0,
  cls: "obj_mettatonb_third",
  boss: 1,
  hp: 9999,
  at: 8,
  acts: 2,
  mus: "mettatonbattle",
  mt: "Metal Crusher",
  f: "ut80",
  l: "Mettaton",
  soul: ["YELLOW"]
};
const Lf = {
  k: "ut:obj_migospel",
  n: "Migospel",
  g: "ut",
  ch: 0,
  cls: "obj_migospel",
  boss: 0,
  hp: 45,
  at: 7,
  acts: 2,
  mus: "battle2",
  mt: null,
  f: "ut121",
  l: "Migospel",
  soul: ["RED"]
};
const Lu = {
  k: "ut:obj_mkid_battle",
  n: "Monster Kid",
  g: "ut",
  ch: 0,
  cls: "obj_mkid_battle",
  boss: 0,
  hp: 10,
  at: 1,
  acts: 1,
  mus: "prebattle1",
  mt: null,
  f: "ut91",
  l: "Monster Kid",
  soul: ["GREEN"]
};
const Lv = {
  k: "ut:obj_moldessa",
  n: "Moldessa",
  g: "ut",
  ch: 0,
  cls: "obj_moldessa",
  boss: 0,
  hp: 52,
  at: 7,
  acts: 4,
  mus: "battle2",
  mt: null,
  f: "ut123",
  l: "Moldessa",
  soul: ["RED"]
};
const LZ = {
  k: "ut:obj_moldsmalx",
  n: "Moldsmal",
  g: "ut",
  ch: 0,
  cls: "obj_moldsmalx",
  boss: 0,
  hp: 70,
  at: 7,
  acts: 3,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut42",
  l: "Moldsmal",
  soul: ["RED"]
};
const LK = {
  k: "ut:obj_movedoge",
  n: "Doggo",
  g: "ut",
  ch: 0,
  cls: "obj_movedoge",
  boss: 0,
  hp: 70,
  at: 6,
  acts: 2,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut23",
  l: "Doggo",
  soul: ["RED"]
};
const LQ = {
  k: "ut:obj_papyrusboss",
  n: "Papyrus",
  g: "ut",
  ch: 0,
  cls: "obj_papyrusboss",
  boss: 1,
  hp: 680,
  at: 8,
  acts: 3,
  mus: "papyrusboss",
  mt: "Bonetrousle",
  f: "ut27",
  l: "Papyrus",
  soul: ["RED"]
};
const LR = {
  k: "ut:obj_parsnik",
  n: "Parsnik",
  g: "ut",
  ch: 0,
  cls: "obj_parsnik",
  boss: 0,
  hp: 72,
  at: 7,
  acts: 4,
  mus: "battle2",
  mt: null,
  f: "ut122",
  l: "Parsnik",
  soul: ["RED"]
};
const LS = {
  k: "ut:obj_pyrope",
  n: "Pyrope",
  g: "ut",
  ch: 0,
  cls: "obj_pyrope",
  boss: 0,
  hp: 110,
  at: 8,
  acts: 4,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut52",
  l: "Pyrope",
  soul: ["RED"]
};
const Ly = {
  k: "ut:obj_reaperbird",
  n: "Reaper Bird",
  g: "ut",
  ch: 0,
  cls: "obj_reaperbird",
  boss: 0,
  hp: 100,
  at: 9,
  acts: 6,
  mus: "amalgam",
  mt: "Amalgam",
  f: "ut83",
  l: "Reaper Bird",
  soul: ["RED"]
};
const LH = {
  k: "ut:obj_ripoff_alphys",
  n: "Lost Soul",
  g: "ut",
  ch: 0,
  cls: "obj_ripoff_alphys",
  boss: 1,
  hp: 999,
  at: 7,
  acts: 4,
  mus: "xpart",
  mt: null,
  f: "ut89",
  l: "Lost Soul",
  soul: ["YELLOW"]
};
const Lj = {
  k: "ut:obj_sansb",
  n: "Sans",
  g: "ut",
  ch: 0,
  cls: "obj_sansb",
  boss: 1,
  hp: 1,
  at: 1,
  acts: 1,
  mus: "zz_megalovania",
  mt: "MEGALOVANIA",
  f: "ut95",
  l: "Sans",
  soul: ["BLUE", "RED"]
};
const Lr = {
  k: "ut:obj_shyren",
  n: "Shyren",
  g: "ut",
  ch: 0,
  cls: "obj_shyren",
  boss: 0,
  hp: 66,
  at: 7,
  acts: 4,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut44",
  l: "Shyren",
  soul: ["RED"]
};
const LD = {
  k: "ut:obj_snowdrakemom",
  n: "Snowdrake's Mother",
  g: "ut",
  ch: 0,
  cls: "obj_snowdrakemom",
  boss: 0,
  hp: 400,
  at: 0,
  acts: 4,
  mus: "snowy",
  mt: "Snowy",
  f: "ut84",
  l: "Snowdrake's Mother",
  soul: ["RED"]
};
const Lz = {
  k: "ut:obj_spiderb",
  n: "Muffet",
  g: "ut",
  ch: 0,
  cls: "obj_spiderb",
  boss: 1,
  hp: 1250,
  at: 8,
  acts: null,
  mus: "spider",
  mt: "Spider Dance",
  f: "ut56",
  l: "Muffet",
  soul: ["PURPLE", "RED"]
};
const LB = {
  k: "ut:obj_tembattle",
  n: "Temmie",
  g: "ut",
  ch: 0,
  cls: "obj_tembattle",
  boss: 0,
  hp: 5,
  at: 7,
  acts: 4,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut41",
  l: "Temmie",
  soul: ["RED"]
};
const LJ = {
  k: "ut:obj_torielboss",
  n: "Toriel",
  g: "ut",
  ch: 0,
  cls: "obj_torielboss",
  boss: 1,
  hp: 440,
  at: 6,
  acts: 2,
  mus: "boss1",
  mt: "Heartache",
  f: "ut22",
  l: "Toriel",
  soul: ["RED"]
};
const La = {
  k: "ut:obj_tsunderplane",
  n: "Tsunderplane",
  g: "ut",
  ch: 0,
  cls: "obj_tsunderplane",
  boss: 0,
  hp: 80,
  at: 8,
  acts: 3,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut50",
  l: "Tsunderplane",
  soul: ["RED"]
};
const Lx = {
  k: "ut:obj_undyneboss",
  n: "Undyne",
  g: "ut",
  ch: 0,
  cls: "obj_undyneboss",
  boss: 1,
  hp: 1500,
  at: 7,
  acts: 3,
  mus: "undyneboss",
  mt: "Spear of Justice",
  f: "ut47",
  l: "Undyne",
  soul: ["GREEN", "RED"]
};
const LV = {
  k: "ut:obj_undyne_ex",
  n: "Undyne the Undying",
  g: "ut",
  ch: 0,
  cls: "obj_undyne_ex",
  boss: 1,
  hp: 23000,
  at: 12,
  acts: 1,
  mus: "x_undyne",
  mt: "Battle Against a True Hero",
  f: "ut92",
  l: "Undyne the Undying",
  soul: ["GREEN", "RED"]
};
const LO = {
  k: "ut:obj_vegetoid",
  n: "Vegetoid",
  g: "ut",
  ch: 0,
  cls: "obj_vegetoid",
  boss: 0,
  hp: 72,
  at: 5,
  acts: 4,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut16",
  l: "Vegetoid",
  soul: ["RED"]
};
const LU = {
  k: "ut:obj_vulkin",
  n: "Vulkin",
  g: "ut",
  ch: 0,
  cls: "obj_vulkin",
  boss: 0,
  hp: 20,
  at: 8,
  acts: 4,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut51",
  l: "Vulkin",
  soul: ["RED"]
};
const o3 = {
  k: "1:obj_heartenemy:6",
  n: "Hathy",
  g: "dr",
  ch: 1,
  cls: "obj_heartenemy",
  boss: 0,
  hp: 150,
  at: 6,
  acts: 4,
  mus: "battle",
  mt: "Rude Buster",
  f: "enc9",
  l: "Hathy",
  soul: ["RED"]
};
const o5 = {
  k: "1:obj_jigsawryenemy:15",
  n: "Jigsawry",
  g: "dr",
  ch: 1,
  cls: "obj_jigsawryenemy",
  boss: 0,
  hp: 90,
  at: 5,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "enc21",
  l: "Jigsawry",
  soul: ["RED"]
};
const o6 = {
  k: "1:obj_joker:20",
  n: "Jevil",
  g: "dr",
  ch: 1,
  cls: "obj_joker",
  boss: 1,
  hp: 3500,
  at: 10,
  acts: 3,
  mus: "joker",
  mt: "THE WORLD REVOLVING",
  f: "jevil",
  l: "Jevil",
  soul: ["RED"]
};
const o7 = {
  k: "1:obj_king_boss:25",
  n: "King",
  g: "dr",
  ch: 1,
  cls: "obj_king_boss",
  boss: 1,
  hp: 2800,
  at: 8,
  acts: 4,
  mus: "kingboss",
  mt: "Chaos King",
  f: "enc40",
  l: "King",
  soul: ["RED"]
};
const ol = {
  k: "1:obj_rudinnranger:22",
  n: "Rudinn Ranger",
  g: "dr",
  ch: 1,
  cls: "obj_rudinnranger",
  boss: 0,
  hp: 170,
  at: 8,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "enc28",
  l: "Rudinn Ranger",
  soul: ["RED"]
};
const oX = {
  k: "1:obj_susieenemy:19",
  n: "Susie",
  g: "dr",
  ch: 1,
  cls: "obj_susieenemy",
  boss: 1,
  hp: 120,
  at: 7,
  acts: 3,
  mus: "lancerfight",
  mt: "Vs. Lancer",
  f: "enc31",
  l: "Susie",
  soul: ["RED"]
};
var iV = [L5, L6, L7, L8, L9, LL, {
  k: "ut:obj_bara02",
  n: "RG 02",
  g: "ut",
  ch: 0,
  cls: "obj_bara02",
  boss: 0,
  hp: 150,
  at: 8,
  acts: 3,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut49",
  l: "RG 02",
  soul: ["RED"]
}, Ll, LX, LW, Li, LI, Lq, Lc, Lm, {
  k: "ut:obj_glydeb",
  n: "Glyde",
  g: "ut",
  ch: 0,
  cls: "obj_glydeb",
  boss: 0,
  hp: 220,
  at: 9,
  acts: 4,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut135",
  l: "Glyde",
  soul: ["RED"]
}, LY, LC, LT, Lg, LN, LM, Lw, LA, Lh, Lk, {
  k: "ut:obj_mettatonex",
  n: "Mettaton EX",
  g: "ut",
  ch: 0,
  cls: "obj_mettatonex",
  boss: 1,
  hp: 1600,
  at: 8,
  acts: 4,
  mus: "mettaton_ex",
  mt: "Death by Glamour",
  f: "ut81",
  l: "Mettaton EX",
  soul: ["YELLOW"]
}, {
  k: "ut:obj_migosp",
  n: "Migosp",
  g: "ut",
  ch: 0,
  cls: "obj_migosp",
  boss: 0,
  hp: 40,
  at: 5,
  acts: 2,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut11",
  l: "Migosp",
  soul: ["RED"]
}, Lf, Lu, Lv, LZ, LK, {
  k: "ut:obj_napstablook",
  n: "Napstablook",
  g: "ut",
  ch: 0,
  cls: "obj_napstablook",
  boss: 1,
  hp: 88,
  at: 5,
  acts: 4,
  mus: "ghostbattle",
  mt: "Ghost Fight",
  f: "ut20",
  l: "Napstablook",
  soul: ["RED"]
}, LQ, LR, LS, Ly, LH, Lj, Lr, LD, Lz, LB, LJ, La, Lx, LV, LO, LU, {
  k: "ut:obj_whimsalot",
  n: "Whimsalot",
  g: "ut",
  ch: 0,
  cls: "obj_whimsalot",
  boss: 0,
  hp: 95,
  at: 8,
  acts: 4,
  mus: "battle2",
  mt: null,
  f: "ut125",
  l: "Whimsalot",
  soul: ["RED"]
}, {
  k: "ut:obj_whimsun",
  n: "Whimsun",
  g: "ut",
  ch: 0,
  cls: "obj_whimsun",
  boss: 0,
  hp: 10,
  at: 4,
  acts: 3,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut5",
  l: "Whimsun",
  soul: ["RED"]
}, {
  k: "ut:obj_womandog",
  n: "Dogaressa",
  g: "ut",
  ch: 0,
  cls: "obj_womandog",
  boss: 0,
  hp: 108,
  at: 6,
  acts: 4,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut25",
  l: "Dogaressa",
  soul: ["RED"]
}, {
  k: "ut:obj_woshua",
  n: "Woshua",
  g: "ut",
  ch: 0,
  cls: "obj_woshua",
  boss: 0,
  hp: 70,
  at: 7,
  acts: 4,
  mus: "battle1",
  mt: "Enemy Approaching",
  f: "ut43",
  l: "Woshua",
  soul: ["RED"]
}, {
  k: "1:obj_bloxer_enemy:14",
  n: "Bloxer",
  g: "dr",
  ch: 1,
  cls: "obj_bloxer_enemy",
  boss: 0,
  hp: 130,
  at: 9,
  acts: 2,
  mus: "battle",
  mt: "Rude Buster",
  f: "enc18",
  l: "Bloxer",
  soul: ["RED"]
}, {
  k: "1:obj_checkers_enemy:10",
  n: "K.Round",
  g: "dr",
  ch: 1,
  cls: "obj_checkers_enemy",
  boss: 1,
  hp: 1300,
  at: 7.5,
  acts: 4,
  mus: "checkers",
  mt: "Checker Dance",
  f: "enc12",
  l: "K.Round",
  soul: ["RED"]
}, {
  k: "1:obj_clubsenemy:16",
  n: "Clover",
  g: "dr",
  ch: 1,
  cls: "obj_clubsenemy",
  boss: 1,
  hp: 270,
  at: 6,
  acts: 6,
  mus: "battle",
  mt: "Rude Buster",
  f: "enc8",
  l: "Clover (CH1)",
  soul: ["RED"]
}, {
  k: "1:obj_diamondenemy:5",
  n: "Rudinn",
  g: "dr",
  ch: 1,
  cls: "obj_diamondenemy",
  boss: 0,
  hp: 120,
  at: 5,
  acts: 4,
  mus: "battle",
  mt: "Rude Buster",
  f: "enc4",
  l: "Rudinn (CH1)",
  soul: ["RED"]
}, {
  k: "1:obj_dummyenemy:3",
  n: "Dummy",
  g: "dr",
  ch: 1,
  cls: "obj_dummyenemy",
  boss: 0,
  hp: 450,
  at: 0,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "dummy",
  l: "Dummy (CH1)",
  soul: ["RED"]
}, {
  k: "1:obj_headhathy:23",
  n: "Head Hathy",
  g: "dr",
  ch: 1,
  cls: "obj_headhathy",
  boss: 0,
  hp: 190,
  at: 8,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "enc29",
  l: "Head Hathy",
  soul: ["RED"]
}, o3, o5, o6, o7, {
  k: "1:obj_lancerboss2:12",
  n: "Lancer",
  g: "dr",
  ch: 1,
  cls: "obj_lancerboss2",
  boss: 1,
  hp: 2400,
  at: 4,
  acts: 1,
  mus: "vs_susie",
  mt: "Vs. Susie",
  f: "enc20",
  l: "Lancer",
  soul: ["RED"]
}, {
  k: "1:obj_ponman_enemy:11",
  n: "Ponman",
  g: "dr",
  ch: 1,
  cls: "obj_ponman_enemy",
  boss: 0,
  hp: 140,
  at: 7,
  acts: 4,
  mus: "battle",
  mt: "Rude Buster",
  f: "enc13",
  l: "Ponman",
  soul: ["RED"]
}, {
  k: "1:obj_rabbick_enemy:13",
  n: "Rabbick",
  g: "dr",
  ch: 1,
  cls: "obj_rabbick_enemy",
  boss: 0,
  hp: 120,
  at: 8,
  acts: 4,
  mus: "battle",
  mt: "Rude Buster",
  f: "enc16",
  l: "Rabbick",
  soul: ["RED"]
}, ol, oX, {
  k: "2:obj_berdlyb_enemy:43",
  n: "Berdly",
  g: "dr",
  ch: 2,
  cls: "obj_berdlyb_enemy",
  boss: 1,
  hp: 1985,
  at: 10,
  acts: 3,
  mus: "berdly_chase",
  mt: null,
  f: "ch2enc58",
  l: "Berdly",
  soul: ["RED"]
}, {
  k: "2:obj_clubsenemy:47",
  n: "Clover",
  g: "dr",
  ch: 2,
  cls: "obj_clubsenemy",
  boss: 1,
  hp: 1500,
  at: 11,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch2enc71",
  l: "Clover (CH2)",
  soul: ["RED"]
}, {
  k: "2:obj_tasque_manager_enemy:42",
  n: "Tasque Manager",
  g: "dr",
  ch: 2,
  cls: "obj_tasque_manager_enemy",
  boss: 1,
  hp: 1367,
  at: 10,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch2enc89",
  l: "Tasque Manager",
  soul: ["RED"]
}, {
  k: "2:obj_hatguy_enemy:37",
  n: "Cap'n",
  g: "dr",
  ch: 2,
  cls: "obj_hatguy_enemy",
  boss: 0,
  hp: 120,
  at: 8,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch2enc62",
  l: "Cap'n",
  soul: ["RED"]
}, {
  k: "2:obj_kk_enemy:38",
  n: "K_K",
  g: "dr",
  ch: 2,
  cls: "obj_kk_enemy",
  boss: 0,
  hp: 120,
  at: 8,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch2enc62",
  l: "K_K",
  soul: ["RED"]
}, {
  k: "2:obj_maus_enemy:34",
  n: "Maus",
  g: "dr",
  ch: 2,
  cls: "obj_maus_enemy",
  boss: 0,
  hp: 120,
  at: 8,
  acts: 4,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch2enc54",
  l: "Maus",
  soul: ["RED"]
}, {
  k: "2:obj_mauswheel_enemy:44",
  n: "Mauswheel",
  g: "dr",
  ch: 2,
  cls: "obj_mauswheel_enemy",
  boss: 0,
  hp: 1753,
  at: 10,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch2enc83",
  l: "Mauswheel",
  soul: ["RED"]
}, {
  k: "2:obj_omawaroid_enemy:30",
  n: "Ambyu-Lance",
  g: "dr",
  ch: 2,
  cls: "obj_omawaroid_enemy",
  boss: 0,
  hp: 300,
  at: 8,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch2enc50",
  l: "Ambyu-Lance",
  soul: ["RED"]
}, {
  k: "2:obj_pipis_enemy:53",
  n: "Pipis",
  g: "dr",
  ch: 2,
  cls: "obj_pipis_enemy",
  boss: 0,
  hp: 200,
  at: 8,
  acts: 1,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch2enc102",
  l: "Pipis",
  soul: ["RED"]
}, {
  k: "2:obj_poppup_enemy:31",
  n: "Poppup",
  g: "dr",
  ch: 2,
  cls: "obj_poppup_enemy",
  boss: 0,
  hp: 120,
  at: 9,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch2enc51",
  l: "Poppup",
  soul: ["RED"]
}, {
  k: "2:obj_queen_enemy:48",
  n: "Queen",
  g: "dr",
  ch: 2,
  cls: "obj_queen_enemy",
  boss: 1,
  hp: 1510,
  at: 10,
  acts: 1,
  mus: "queen_boss",
  mt: null,
  f: "ch2enc59",
  l: "Queen",
  soul: ["RED"]
}, {
  k: "2:obj_rouxls_enemy:45",
  n: "Rouxls",
  g: "dr",
  ch: 2,
  cls: "obj_rouxls_enemy",
  boss: 1,
  hp: 600,
  at: 9,
  acts: 5,
  mus: "rouxls_battle",
  mt: null,
  f: "ch2enc63",
  l: "Rouxls (CH2)",
  soul: ["RED"]
}, {
  k: "2:obj_spamton_enemy:49",
  n: "Spamton",
  g: "dr",
  ch: 2,
  cls: "obj_spamton_enemy",
  boss: 1,
  hp: 600,
  at: 8,
  acts: 3,
  mus: "spamton_battle",
  mt: "NOW'S YOUR CHANCE TO BE A",
  f: "ch2enc60",
  l: "Spamton",
  soul: ["RED"]
}, {
  k: "2:obj_spamton_neo_enemy:50",
  n: "Spamton NEO",
  g: "dr",
  ch: 2,
  cls: "obj_spamton_neo_enemy",
  boss: 1,
  hp: 4809,
  at: 13,
  acts: 3,
  mus: "spamton_neo_mix_ex_wip",
  mt: "BIG SHOT",
  f: "ch2enc61",
  l: "Spamton NEO",
  soul: ["YELLOW"]
}, {
  k: "2:obj_swatchling_enemy:36",
  n: "Swatchling",
  g: "dr",
  ch: 2,
  cls: "obj_swatchling_enemy",
  boss: 0,
  hp: 300,
  at: 9,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch2enc56",
  l: "Swatchling",
  soul: ["RED"]
}, {
  k: "2:obj_sweet_enemy:39",
  n: "Sweet",
  g: "dr",
  ch: 2,
  cls: "obj_sweet_enemy",
  boss: 0,
  hp: 120,
  at: 8,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch2enc62",
  l: "Sweet",
  soul: ["RED"]
}, {
  k: "2:obj_tasque_enemy:32",
  n: "Tasque",
  g: "dr",
  ch: 2,
  cls: "obj_tasque_enemy",
  boss: 0,
  hp: 240,
  at: 8,
  acts: 4,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch2enc52",
  l: "Tasque",
  soul: ["RED"]
}, {
  k: "2:obj_virovirokun_enemy:35",
  n: "Virovirokun",
  g: "dr",
  ch: 2,
  cls: "obj_virovirokun_enemy",
  boss: 0,
  hp: 240,
  at: 8,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch2enc55",
  l: "Virovirokun",
  soul: ["RED"]
}, {
  k: "2:obj_werewerewire_enemy:40",
  n: "Werewerewire",
  g: "dr",
  ch: 2,
  cls: "obj_werewerewire_enemy",
  boss: 0,
  hp: 1753,
  at: 11,
  acts: 4,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch2enc81",
  l: "Werewerewire",
  soul: ["RED"]
}, {
  k: "2:obj_werewire_enemy:33",
  n: "Werewire",
  g: "dr",
  ch: 2,
  cls: "obj_werewire_enemy",
  boss: 0,
  hp: 240,
  at: 8,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch2enc53",
  l: "Werewire",
  soul: ["RED"]
}, {
  k: "3:obj_elnina_enemy:60",
  n: "Elnina",
  g: "dr",
  ch: 3,
  cls: "obj_elnina_enemy",
  boss: 1,
  hp: 8880,
  at: 12,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch3enc141",
  l: "Elnina (CH3)",
  soul: ["RED"]
}, {
  k: "3:obj_knight_enemy:104",
  n: "Knight",
  g: "dr",
  ch: 3,
  cls: "obj_knight_enemy",
  boss: 1,
  hp: 7300,
  at: 40,
  acts: 2,
  mus: "knight",
  mt: "Black Knife",
  f: "ch3enc115",
  l: "Knight",
  soul: ["RED"]
}, {
  k: "3:obj_lanino_enemy:61",
  n: "Lanino",
  g: "dr",
  ch: 3,
  cls: "obj_lanino_enemy",
  boss: 1,
  hp: 8880,
  at: 12,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch3enc141",
  l: "Lanino (CH3)",
  soul: ["RED"]
}, {
  k: "3:obj_pippins_enemy:59",
  n: "Pippins",
  g: "dr",
  ch: 3,
  cls: "obj_pippins_enemy",
  boss: 0,
  hp: 421,
  at: 11,
  acts: 4,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch3enc122",
  l: "Pippins (CH3)",
  soul: ["RED"]
}, {
  k: "3:obj_ribbick_enemy:57",
  n: "Ribbick",
  g: "dr",
  ch: 3,
  cls: "obj_ribbick_enemy",
  boss: 0,
  hp: 421,
  at: 14,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch3enc125",
  l: "Ribbick (CH3)",
  soul: ["RED"]
}, {
  k: "3:obj_rouxls_ch3_enemy:102",
  n: "Rouxls",
  g: "dr",
  ch: 3,
  cls: "obj_rouxls_ch3_enemy",
  boss: 1,
  hp: 1,
  at: 10,
  acts: 1,
  mus: "rouxls_battle",
  mt: null,
  f: "ch3enc114",
  l: "Rouxls (CH3)",
  soul: ["RED"]
}, {
  k: "3:obj_shadowman_enemy:54",
  n: "Shadowguy",
  g: "dr",
  ch: 3,
  cls: "obj_shadowman_enemy",
  boss: 0,
  hp: 421,
  at: 11,
  acts: 3,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch3enc110",
  l: "Shadowguy",
  soul: ["RED"]
}, {
  k: "3:obj_shutta_enemy:55",
  n: "Shuttah",
  g: "dr",
  ch: 3,
  cls: "obj_shutta_enemy",
  boss: 0,
  hp: 421,
  at: 8,
  acts: 4,
  mus: "rudebuster_boss",
  mt: "Ruder Buster",
  f: "ch3enc111",
  l: "Shuttah",
  soul: ["RED"]
}, {
  k: "3:obj_tenna_enemy:103",
  n: "Tenna",
  g: "dr",
  ch: 3,
  cls: "obj_tenna_enemy",
  boss: 1,
  hp: 5500,
  at: 13,
  acts: 6,
  mus: "tenna_battle",
  mt: "It's TV Time!",
  f: "ch3enc121",
  l: "Tenna",
  soul: ["RED"]
}, {
  k: "3:obj_watercooler_enemy:58",
  n: "Watercooler",
  g: "dr",
  ch: 3,
  cls: "obj_watercooler_enemy",
  boss: 0,
  hp: 1879,
  at: 8,
  acts: 2,
  mus: "battle_vapor",
  mt: "Vapor Buster",
  f: "ch3enc139",
  l: "Watercooler",
  soul: ["RED"]
}, {
  k: "3:obj_zapper_enemy:56",
  n: "Zapper",
  g: "dr",
  ch: 3,
  cls: "obj_zapper_enemy",
  boss: 0,
  hp: 421,
  at: 11,
  acts: 4,
  mus: "battle",
  mt: "Rude Buster",
  f: "ch3enc112",
  l: "Zapper",
  soul: ["RED"]
}, {
  k: "4:obj_balthizard_enemy:63",
  n: "Balthizard",
  g: "dr",
  ch: 4,
  cls: "obj_balthizard_enemy",
  boss: 0,
  hp: 470,
  at: 14,
  acts: 4,
  mus: "ch4_battle",
  mt: "From Now On (Battle 2)",
  f: "ch4enc151",
  l: "Balthizard",
  soul: ["RED"]
}, {
  k: "4:obj_bell_enemy:66",
  n: "Wicabel",
  g: "dr",
  ch: 4,
  cls: "obj_bell_enemy",
  boss: 0,
  hp: 470,
  at: 13,
  acts: 3,
  mus: "ch4_battle",
  mt: "From Now On (Battle 2)",
  f: "ch4enc154",
  l: "Wicabel",
  soul: ["RED"]
}, {
  k: "4:obj_bibliox_enemy:64",
  n: "Bibliox",
  g: "dr",
  ch: 4,
  cls: "obj_bibliox_enemy",
  boss: 0,
  hp: 470,
  at: 14,
  acts: 3,
  mus: "ch4_battle",
  mt: "From Now On (Battle 2)",
  f: "ch4enc152",
  l: "Bibliox",
  soul: ["RED"]
}, {
  k: "4:obj_elnina_rematch_enemy:110",
  n: "Elnina",
  g: "dr",
  ch: 4,
  cls: "obj_elnina_rematch_enemy",
  boss: 1,
  hp: 4440,
  at: 16,
  acts: 3,
  mus: "ch4_battle",
  mt: "From Now On (Battle 2)",
  f: "ch4enc178",
  l: "Elnina (CH4)",
  soul: ["RED"]
}, {
  k: "4:obj_guei_enemy:62",
  n: "Guei",
  g: "dr",
  ch: 4,
  cls: "obj_guei_enemy",
  boss: 0,
  hp: 470,
  at: 13,
  acts: 3,
  mus: "ch4_battle",
  mt: "From Now On (Battle 2)",
  f: "ch4enc150",
  l: "Guei",
  soul: ["RED"]
}, {
  k: "4:obj_mizzle_enemy:65",
  n: "Mizzle",
  g: "dr",
  ch: 4,
  cls: "obj_mizzle_enemy",
  boss: 0,
  hp: 470,
  at: 13,
  acts: 5,
  mus: "ch4_battle",
  mt: "From Now On (Battle 2)",
  f: "ch4enc153",
  l: "Mizzle",
  soul: ["RED"]
}, {
  k: "4:obj_halo_enemy:67",
  n: "Winglade",
  g: "dr",
  ch: 4,
  cls: "obj_halo_enemy",
  boss: 0,
  hp: 470,
  at: 14,
  acts: 4,
  mus: "ch4_battle",
  mt: "From Now On (Battle 2)",
  f: "ch4enc155",
  l: "Winglade",
  soul: ["RED"]
}, {
  k: "4:obj_hammer_of_justice_enemy:105",
  n: "Hammer of Justice",
  g: "dr",
  ch: 4,
  cls: "obj_hammer_of_justice_enemy",
  boss: 1,
  hp: 1350,
  at: 14,
  acts: null,
  mus: "ch4_extra_boss",
  mt: "Hammer of Justice",
  f: "ch4enc160",
  l: "Hammer of Justice",
  soul: ["RED"]
}, {
  k: "4:obj_holywatercooler_enemy:69",
  n: "HolywaterCooler",
  g: "dr",
  ch: 4,
  cls: "obj_holywatercooler_enemy",
  boss: 0,
  hp: 1740,
  at: 14,
  acts: 4,
  mus: "ch4_battle",
  mt: "From Now On (Battle 2)",
  f: "ch4enc183",
  l: "HolywaterCooler",
  soul: ["RED"]
}, {
  k: "4:obj_jackenstein_enemy:107",
  n: "Jackenstein",
  g: "dr",
  ch: 4,
  cls: "obj_jackenstein_enemy",
  boss: 1,
  hp: 1350,
  at: 14,
  acts: 2,
  mus: "pumpkin_boss",
  mt: null,
  f: "ch4enc174",
  l: "Jackenstein",
  soul: ["RED"]
}, {
  k: "4:obj_lanino_rematch_enemy:111",
  n: "Lanino",
  g: "dr",
  ch: 4,
  cls: "obj_lanino_rematch_enemy",
  boss: 1,
  hp: 4440,
  at: 16,
  acts: 3,
  mus: "ch4_battle",
  mt: "From Now On (Battle 2)",
  f: "ch4enc178",
  l: "Lanino (CH4)",
  soul: ["RED"]
}, {
  k: "4:obj_organ_enemy:68",
  n: "Organikk",
  g: "dr",
  ch: 4,
  cls: "obj_organ_enemy",
  boss: 0,
  hp: 470,
  at: 14,
  acts: 4,
  mus: "ch4_battle",
  mt: "From Now On (Battle 2)",
  f: "ch4enc156",
  l: "Organikk",
  soul: ["RED"]
}, {
  k: "4:obj_pippins_enemy:59",
  n: "Pippins",
  g: "dr",
  ch: 4,
  cls: "obj_pippins_enemy",
  boss: 0,
  hp: 421,
  at: 8,
  acts: 3,
  mus: "ch4_battle",
  mt: "From Now On (Battle 2)",
  f: "ch4enc179",
  l: "Pippins (CH4)",
  soul: ["RED"]
}, {
  k: "4:obj_ribbick_enemy:57",
  n: "Ribbick",
  g: "dr",
  ch: 4,
  cls: "obj_ribbick_enemy",
  boss: 0,
  hp: 421,
  at: 11,
  acts: 3,
  mus: "ch4_battle",
  mt: "From Now On (Battle 2)",
  f: "ch4enc181",
  l: "Ribbick (CH4)",
  soul: ["RED"]
}, {
  k: "4:obj_rudinnranger:5",
  n: "Rudinn",
  g: "dr",
  ch: 4,
  cls: "obj_rudinnranger",
  boss: 0,
  hp: 120,
  at: 5,
  acts: 4,
  mus: "ch4_battle",
  mt: "From Now On (Battle 2)",
  f: "ch4enc179",
  l: "Rudinn (CH4)",
  soul: ["RED"]
}, {
  k: "4:obj_titan_enemy:108",
  n: "Titan",
  g: "dr",
  ch: 4,
  cls: "obj_titan_enemy",
  boss: 1,
  hp: 21000,
  at: 18,
  acts: 4,
  mus: "titan_battle",
  mt: "GUARDIAN",
  f: "ch4enc175",
  l: "Titan",
  soul: ["RED"]
}, {
  k: "4:obj_titan_spawn_enemy:109",
  n: "Titan Spawn",
  g: "dr",
  ch: 4,
  cls: "obj_titan_spawn_enemy",
  boss: 1,
  hp: 3000,
  at: 18,
  acts: 4,
  mus: "titan_spawn",
  mt: "SPAWN",
  f: "ch4enc177",
  l: "Titan Spawn",
  soul: ["RED"]
}, {
  k: "5:obj_aqua_enemy:112",
  n: "Aqua",
  g: "dr",
  ch: 5,
  cls: "obj_aqua_enemy",
  boss: 1,
  hp: 3060,
  at: 16,
  acts: 6,
  mus: "miniboss_new_section_idea_wip",
  mt: null,
  f: "ch5enc223",
  l: "Aqua",
  soul: ["RED"]
}, {
  k: "5:obj_blue_enemy:115",
  n: "Blue",
  g: "dr",
  ch: 5,
  cls: "obj_blue_enemy",
  boss: 1,
  hp: 2060,
  at: 16,
  acts: null,
  mus: "miniboss_new_section_idea_wip",
  mt: null,
  f: "ch5enc222",
  l: "Blue",
  soul: ["RED"]
}, {
  k: "5:obj_floradinn_enemy:70",
  n: "Floradinn",
  g: "dr",
  ch: 5,
  cls: "obj_floradinn_enemy",
  boss: 0,
  hp: 515,
  at: 16,
  acts: 4,
  mus: "rakuichi_buster_wip",
  mt: "Rakuichi Buster",
  f: "ch5enc200",
  l: "Floradinn",
  soul: ["RED"]
}, {
  k: "5:obj_green_enemy:114",
  n: "Green",
  g: "dr",
  ch: 5,
  cls: "obj_green_enemy",
  boss: 1,
  hp: 2060,
  at: 16,
  acts: 2,
  mus: "miniboss_new_section_idea_wip",
  mt: null,
  f: "ch5enc221",
  l: "Green",
  soul: ["RED"]
}, {
  k: "5:obj_kawkaw_enemy:74",
  n: "KawKaw",
  g: "dr",
  ch: 5,
  cls: "obj_kawkaw_enemy",
  boss: 0,
  hp: 515,
  at: 16,
  acts: 3,
  mus: "rakuichi_buster_wip",
  mt: "Rakuichi Buster",
  f: "ch5enc204",
  l: "KawKaw",
  soul: ["RED"]
}, {
  k: "5:obj_leafling_enemy:71",
  n: "Leafling",
  g: "dr",
  ch: 5,
  cls: "obj_leafling_enemy",
  boss: 0,
  hp: 515,
  at: 16,
  acts: 4,
  mus: "rakuichi_buster_wip",
  mt: "Rakuichi Buster",
  f: "ch5enc201",
  l: "Leafling",
  soul: ["RED"]
}, {
  k: "5:obj_netskie_enemy:76",
  n: "Netskie",
  g: "dr",
  ch: 5,
  cls: "obj_netskie_enemy",
  boss: 0,
  hp: 1545,
  at: 16,
  acts: 3,
  mus: "rakuichi_buster_wip",
  mt: "Rakuichi Buster",
  f: "ch5enc206",
  l: "Netskie",
  soul: ["RED"]
}, {
  k: "5:obj_orange_enemy:113",
  n: "Orange",
  g: "dr",
  ch: 5,
  cls: "obj_orange_enemy",
  boss: 1,
  hp: 2060,
  at: 16,
  acts: 2,
  mus: "miniboss_new_section_idea_wip",
  mt: null,
  f: "ch5enc221",
  l: "Orange",
  soul: ["RED"]
}, {
  k: "5:obj_pink_enemy:118",
  n: "Pink",
  g: "dr",
  ch: 5,
  cls: "obj_pink_enemy",
  boss: 1,
  hp: 7000,
  at: 16,
  acts: 5,
  mus: "pink",
  mt: "Cutie Mew Mew Magic",
  f: "ch5enc224",
  l: "Pink",
  soul: ["PURPLE", "RED"]
}, {
  k: "5:obj_purple_enemy:117",
  n: "Seth",
  g: "dr",
  ch: 5,
  cls: "obj_purple_enemy",
  boss: 1,
  hp: 3600,
  at: 16,
  acts: 2,
  mus: "miniboss_new_section_idea_wip",
  mt: null,
  f: "ch5enc223",
  l: "Seth",
  soul: ["RED"]
}, {
  k: "5:obj_scarecrow_enemy:72",
  n: "Shi",
  g: "dr",
  ch: 5,
  cls: "obj_scarecrow_enemy",
  boss: 0,
  hp: 515,
  at: 16,
  acts: 3,
  mus: "rakuichi_buster_wip",
  mt: "Rakuichi Buster",
  f: "ch5enc211",
  l: "Shi",
  soul: ["RED"]
}, {
  k: "5:obj_sheary_enemy:75",
  n: "Sheary",
  g: "dr",
  ch: 5,
  cls: "obj_sheary_enemy",
  boss: 0,
  hp: 515,
  at: 16,
  acts: 4,
  mus: "rakuichi_buster_wip",
  mt: "Rakuichi Buster",
  f: "ch5enc205",
  l: "Sheary",
  soul: ["RED"]
}, {
  k: "5:obj_shinobeetle_enemy:73",
  n: "Shinobeetle",
  g: "dr",
  ch: 5,
  cls: "obj_shinobeetle_enemy",
  boss: 0,
  hp: 515,
  at: 16,
  acts: 2,
  mus: "rakuichi_buster_wip",
  mt: "Rakuichi Buster",
  f: "ch5enc203",
  l: "Shinobeetle",
  soul: ["RED"]
}, {
  k: "5:obj_terracota_enemy:77",
  n: "Terakota",
  g: "dr",
  ch: 5,
  cls: "obj_terracota_enemy",
  boss: 0,
  hp: 1545,
  at: 16,
  acts: 3,
  mus: "rakuichi_buster_wip",
  mt: "Rakuichi Buster",
  f: "ch5enc207",
  l: "Terakota",
  soul: ["RED"]
}, {
  k: "5:obj_trashy_trio:121",
  n: "Trashy Trio",
  g: "dr",
  ch: 5,
  cls: "obj_trashy_trio",
  boss: 1,
  hp: 1200,
  at: 21,
  acts: null,
  mus: "inappropriate_recycling",
  mt: "Inappropriate Recycling",
  f: "ch5enc234",
  l: "Trashy Trio",
  soul: ["RED"]
}, {
  k: "5:obj_yellow_enemy:116",
  n: "Yellow",
  g: "dr",
  ch: 5,
  cls: "obj_yellow_enemy",
  boss: 1,
  hp: 2060,
  at: 16,
  acts: 1,
  mus: "miniboss_new_section_idea_wip",
  mt: null,
  f: "ch5enc222",
  l: "Yellow",
  soul: ["RED"]
}];
var iO = [{
  e: "ut:obj_aaron",
  f: "ut40",
  a: "obj_aaron#51",
  n: "Sweat drops",
  seed: 4242,
  start: 124,
  soul: "RED",
  lit: 353,
  w: 296,
  h: 266,
  h32: "909a90ec"
}, {
  e: "ut:obj_aaron",
  f: "ut40",
  a: "obj_aaron#0",
  n: "Muscle flex",
  seed: 4242,
  start: 117,
  soul: "RED",
  lit: 4354,
  w: 296,
  h: 266,
  h32: "b4044d46"
}, {
  e: "ut:obj_astigmatism",
  f: "ut62",
  a: "obj_astigmatism#0",
  n: "Stromboli",
  seed: 4242,
  start: 119,
  soul: "RED",
  lit: 800,
  w: 276,
  h: 251,
  h32: "372401df"
}, {
  e: "ut:obj_astigmatism",
  f: "ut62",
  a: "obj_astigmatism#50",
  n: "Eye beams",
  seed: 4242,
  start: 124,
  soul: "RED",
  lit: 2088,
  w: 276,
  h: 251,
  h32: "000e83b0"
}, {
  e: "ut:obj_chilldrake",
  f: "ut31",
  a: "obj_chilldrake#51",
  n: "Icicles",
  seed: 4242,
  start: 117,
  soul: "RED",
  lit: 3216,
  w: 296,
  h: 281,
  h32: "5925874f"
}, {
  e: "ut:obj_endogeny",
  f: "ut86",
  a: "obj_endogeny#0",
  n: "Laser dogs",
  seed: 4242,
  start: 118,
  soul: "RED",
  lit: 556,
  w: 160,
  h: 146,
  h32: "be8aab4a"
}, {
  e: "ut:obj_endogeny",
  f: "ut86",
  a: "obj_endogeny#50",
  n: "Rocket dogs",
  seed: 4242,
  start: 118,
  soul: "RED",
  lit: 485,
  w: 160,
  h: 146,
  h32: "7c593e40"
}, {
  e: "ut:obj_froggit",
  f: "ut4",
  a: "obj_froggit#0",
  n: "Leapfrog",
  seed: 4242,
  start: 124,
  soul: "RED",
  lit: 482,
  w: 276,
  h: 251,
  h32: "718af9a0"
}, {
  e: "ut:obj_finalfroggit",
  f: "ut61",
  a: "obj_finalfroggit#50",
  n: "Frog flies",
  seed: 4242,
  start: 118,
  soul: "RED",
  lit: 571,
  w: 276,
  h: 251,
  h32: "35cb9f7e"
}, {
  e: "ut:obj_greatdog",
  f: "ut26",
  a: "obj_greatdog#51",
  n: "Blue puppies",
  seed: 4242,
  start: 113,
  soul: "RED",
  lit: 414,
  w: 296,
  h: 266,
  h32: "c6ab6ef1"
}, {
  e: "ut:obj_greatdog",
  f: "ut26",
  a: "obj_greatdog#0",
  n: "Puppy leap",
  seed: 4242,
  start: 113,
  soul: "RED",
  lit: 829,
  w: 296,
  h: 266,
  h32: "308cdd97"
}, {
  e: "ut:obj_gyftrot",
  f: "ut28",
  a: "obj_gyftrot#61",
  n: "Ornaments",
  seed: 4242,
  start: 116,
  soul: "RED",
  lit: 3790,
  w: 296,
  h: 266,
  h32: "33fe27c1"
}, {
  e: "ut:obj_icecap",
  f: "ut32",
  a: "obj_icecap#50",
  n: "Ice caps",
  seed: 4242,
  start: 119,
  soul: "RED",
  lit: 1450,
  w: 276,
  h: 251,
  h32: "f332dafc"
}, {
  e: "ut:obj_lemonbread",
  f: "ut82",
  a: "obj_lemonbread#0",
  n: "Biters",
  seed: 4242,
  start: 144,
  soul: "RED",
  lit: 1660,
  w: 160,
  h: 146,
  h32: "40894b8b"
}, {
  e: "ut:obj_lemonbread",
  f: "ut82",
  a: "obj_lemonbread#60",
  n: "Melon bullets",
  seed: 4242,
  start: 133,
  soul: "RED",
  lit: 1340,
  w: 160,
  h: 146,
  h32: "15bc5294"
}, {
  e: "ut:obj_lesserdoge",
  f: "ut24",
  a: "obj_lesserdoge#0",
  n: "Pomeranian leap",
  seed: 4242,
  start: 116,
  soul: "RED",
  lit: 838,
  w: 296,
  h: 251,
  h32: "c3ce865b"
}, {
  e: "ut:obj_lesserdoge",
  f: "ut24",
  a: "obj_lesserdoge#50",
  n: "Blue spear",
  seed: 4242,
  start: 116,
  soul: "RED",
  lit: 790,
  w: 296,
  h: 251,
  h32: "d78a89d3"
}, {
  e: "ut:obj_loox",
  f: "ut13",
  a: "obj_loox#0",
  n: "Eye shots",
  seed: 4242,
  start: 121,
  soul: "RED",
  lit: 613,
  w: 296,
  h: 251,
  h32: "4f2dd3de"
}, {
  e: "ut:obj_maddummy",
  f: "ut45",
  a: "obj_maddummy#only",
  n: "Dummy bullets",
  seed: 4242,
  start: 205,
  soul: "RED",
  lit: 1145,
  w: 296,
  h: 266,
  h32: "b5116b98"
}, {
  e: "ut:obj_memoryhead",
  f: "ut85",
  a: "obj_memoryhead#0",
  n: "Freak bullets",
  seed: 4242,
  start: 121,
  soul: "RED",
  lit: 1000,
  w: 160,
  h: 146,
  h32: "14c39637"
}, {
  e: "ut:obj_mettatonex",
  f: "ut81",
  a: "obj_mettatonex#1",
  n: "Mettaton EX show",
  seed: 4242,
  start: 133,
  soul: "YELLOW",
  lit: 371,
  w: 298,
  h: 126,
  h32: "0bfd0387"
}, {
  e: "ut:obj_movedoge",
  f: "ut23",
  a: "obj_movedoge#100",
  n: "Sword sweep",
  seed: 4242,
  start: 117,
  soul: "RED",
  lit: 1976,
  w: 296,
  h: 251,
  h32: "25dc5363"
}, {
  e: "ut:obj_movedoge",
  f: "ut23",
  a: "obj_movedoge#0",
  n: "Blue sword",
  seed: 4242,
  start: 116,
  soul: "RED",
  lit: 552,
  w: 296,
  h: 251,
  h32: "e9eea8fd"
}, {
  e: "ut:obj_napstablook",
  f: "ut20",
  a: "obj_napstablook#51",
  n: "Tear rain",
  seed: 4242,
  start: 123,
  soul: "RED",
  lit: 935,
  w: 276,
  h: 251,
  h32: "a6f4badc"
}, {
  e: "ut:obj_napstablook",
  f: "ut20",
  a: "obj_napstablook#0",
  n: "Tears",
  seed: 4242,
  start: 122,
  soul: "RED",
  lit: 485,
  w: 276,
  h: 251,
  h32: "beac6f60"
}, {
  e: "ut:obj_parsnik",
  f: "ut122",
  a: "obj_parsnik#0",
  n: "Snakes",
  seed: 4242,
  start: 125,
  soul: "RED",
  lit: 692,
  w: 276,
  h: 251,
  h32: "3ceee67b"
}, {
  e: "ut:obj_parsnik",
  f: "ut122",
  a: "obj_parsnik#50",
  n: "Green snakes",
  seed: 4242,
  start: 125,
  soul: "RED",
  lit: 603,
  w: 276,
  h: 251,
  h32: "e643ba8d"
}, {
  e: "ut:obj_pyrope",
  f: "ut52",
  a: "obj_pyrope#0",
  n: "Rope fire",
  seed: 4242,
  start: 104,
  soul: "RED",
  lit: 616,
  w: 213,
  h: 126,
  h32: "f0403c96"
}, {
  e: "ut:obj_reaperbird",
  f: "ut83",
  a: "obj_reaperbird#1",
  n: "Butterfly heads",
  seed: 4242,
  start: 120,
  soul: "RED",
  lit: 1252,
  w: 160,
  h: 146,
  h32: "365bce5f"
}, {
  e: "ut:obj_reaperbird",
  f: "ut83",
  a: "obj_reaperbird#0",
  n: "Strange intro",
  seed: 4242,
  start: 120,
  soul: "RED",
  lit: 885,
  w: 160,
  h: 146,
  h32: "97af0d66"
}, {
  e: "ut:obj_reaperbird",
  f: "ut83",
  a: "obj_reaperbird#2",
  n: "Butterfly heads II",
  seed: 4242,
  start: 120,
  soul: "RED",
  lit: 1151,
  w: 160,
  h: 146,
  h32: "d310ff1f"
}, {
  e: "ut:obj_ripoff_alphys",
  f: "ut89",
  a: "obj_ripoff_alphys#0",
  n: "Mettaton legs",
  seed: 4242,
  start: 180,
  soul: "YELLOW",
  lit: 1260,
  w: 260,
  h: 251,
  h32: "0a691019"
}, {
  e: "ut:obj_ripoff_alphys",
  f: "ut89",
  a: "obj_ripoff_alphys#1",
  n: "Mettaton arms",
  seed: 4242,
  start: 157,
  soul: "YELLOW",
  lit: 3792,
  w: 286,
  h: 251,
  h32: "8ba2af09"
}, {
  e: "ut:obj_sansb",
  f: "ut95",
  a: "obj_sansb#0",
  n: "Bone gap run",
  seed: 4242,
  start: 461,
  soul: "BLUE",
  lit: 871,
  w: 243,
  h: 126,
  h32: "293a7aa8"
}, {
  e: "ut:obj_sansb",
  f: "ut95",
  a: "obj_sansb#6",
  n: "Bone loops",
  seed: 4242,
  start: 461,
  soul: "BLUE",
  lit: 1264,
  w: 273,
  h: 136,
  h32: "127ddd95"
}, {
  e: "ut:obj_sansb",
  f: "ut95",
  a: "obj_sansb#7",
  n: "Platform lanes II",
  seed: 4242,
  start: 463,
  soul: "BLUE",
  lit: 1335,
  w: 243,
  h: 126,
  h32: "a0e9dce3"
}, {
  e: "ut:obj_tembattle",
  f: "ut41",
  a: "obj_tembattle#0",
  n: "Tem hands",
  seed: 4242,
  start: 124,
  soul: "RED",
  lit: 1979,
  w: 296,
  h: 266,
  h32: "aa7be730"
}, {
  e: "ut:obj_torielboss",
  f: "ut22",
  a: "obj_torielboss#0",
  n: "Fireball rain",
  seed: 4242,
  start: 115,
  soul: "RED",
  lit: 1247,
  w: 296,
  h: 266,
  h32: "6623267c"
}, {
  e: "ut:obj_torielboss",
  f: "ut22",
  a: "obj_torielboss#21",
  n: "Fireball spiral",
  seed: 4242,
  start: 115,
  soul: "RED",
  lit: 2897,
  w: 296,
  h: 266,
  h32: "0528cf72"
}, {
  e: "ut:obj_torielboss",
  f: "ut22",
  a: "obj_torielboss#41",
  n: "Fire wave",
  seed: 4242,
  start: 115,
  soul: "RED",
  lit: 1795,
  w: 296,
  h: 251,
  h32: "5463fa82"
}, {
  e: "ut:obj_torielboss",
  f: "ut22",
  a: "obj_torielboss#61",
  n: "Fire hands (both)",
  seed: 4242,
  start: 114,
  soul: "RED",
  lit: 1207,
  w: 296,
  h: 251,
  h32: "d6b25625"
}, {
  e: "ut:obj_torielboss",
  f: "ut22",
  a: "obj_torielboss#81",
  n: "Fire hand sweep",
  seed: 4242,
  start: 114,
  soul: "RED",
  lit: 749,
  w: 296,
  h: 251,
  h32: "ecb618b4"
}, {
  e: "ut:obj_tsunderplane",
  f: "ut50",
  a: "obj_tsunderplane#only",
  n: "Plane dive",
  seed: 4242,
  start: 108,
  soul: "RED",
  lit: 592,
  w: 213,
  h: 133,
  h32: "efe5e27a"
}, {
  e: "ut:obj_undyne_ex",
  f: "ut92",
  a: "obj_undyne_ex#2",
  n: "Spear circle",
  seed: 4242,
  start: 1106,
  soul: "RED",
  lit: 1102,
  w: 320,
  h: 201,
  h32: "d194482b"
}, {
  e: "ut:obj_undyne_ex",
  f: "ut92",
  a: "obj_undyne_ex#4",
  n: "Homing spears",
  seed: 4242,
  start: 1105,
  soul: "RED",
  lit: 1225,
  w: 320,
  h: 201,
  h32: "d3e7406e"
}, {
  e: "ut:obj_undyne_ex",
  f: "ut92",
  a: "obj_undyne_ex#5",
  n: "Spear circle II",
  seed: 4242,
  start: 1106,
  soul: "RED",
  lit: 1375,
  w: 320,
  h: 201,
  h32: "db5dac84"
}, {
  e: "ut:obj_vegetoid",
  f: "ut16",
  a: "obj_vegetoid#0",
  n: "Carrots",
  seed: 4242,
  start: 121,
  soul: "RED",
  lit: 751,
  w: 276,
  h: 251,
  h32: "a4ca2c63"
}, {
  e: "ut:obj_vegetoid",
  f: "ut16",
  a: "obj_vegetoid#50",
  n: "Green carrots",
  seed: 4242,
  start: 121,
  soul: "RED",
  lit: 620,
  w: 276,
  h: 251,
  h32: "f7aa8dec"
}, {
  e: "ut:obj_whimsalot",
  f: "ut63",
  a: "obj_whimsalot#50",
  n: "Butterfly spears",
  seed: 4242,
  start: 119,
  soul: "RED",
  lit: 1719,
  w: 276,
  h: 251,
  h32: "cad448ec"
}, {
  e: "ut:obj_whimsun",
  f: "ut5",
  a: "obj_whimsun#51",
  n: "Butterflies",
  seed: 4242,
  start: 125,
  soul: "RED",
  lit: 1222,
  w: 276,
  h: 251,
  h32: "83206d63"
}, {
  e: "ut:obj_woshua",
  f: "ut43",
  a: "obj_woshua#0",
  n: "Water drops",
  seed: 4242,
  start: 116,
  soul: "RED",
  lit: 1274,
  w: 296,
  h: 266,
  h32: "6c05ab6d"
}, {
  e: "1:obj_bloxer_enemy:14",
  f: "enc18",
  a: "obj_bloxer_enemy#0",
  n: "Falling blocks",
  seed: 4242,
  start: 171,
  soul: "RED",
  lit: 4611,
  w: 278,
  h: 278,
  h32: "52c71cd7"
}, {
  e: "1:obj_checkers_enemy:10",
  f: "enc12",
  a: "obj_checkers_enemy#only",
  n: "K.Round leap",
  seed: 4242,
  start: 193,
  soul: "RED",
  lit: 6672,
  w: 278,
  h: 278,
  h32: "a710b624"
}, {
  e: "1:obj_dummyenemy:3",
  f: "dummy",
  a: "obj_dummyenemy#only",
  n: "Training pellets",
  seed: 4242,
  start: 45,
  soul: "RED",
  lit: 339,
  w: 260,
  h: 260,
  h32: "76090595"
}, {
  e: "1:obj_headhathy:23",
  f: "enc29",
  a: "obj_headhathy#0",
  n: "Heart tentacles",
  seed: 4242,
  start: 188,
  soul: "RED",
  lit: 3470,
  w: 282,
  h: 282,
  h32: "591b9944"
}, {
  e: "1:obj_heartenemy:6",
  f: "enc9",
  a: "obj_heartenemy#0",
  n: "Heart shaper",
  seed: 4242,
  start: 159,
  soul: "RED",
  lit: 3431,
  w: 278,
  h: 278,
  h32: "7b3968e8"
}, {
  e: "1:obj_joker:20",
  f: "jevil",
  a: "obj_joker#0",
  n: "Teleport ambush",
  seed: 4242,
  start: 206,
  soul: "RED",
  lit: 948,
  w: 260,
  h: 260,
  h32: "e880a25e"
}, {
  e: "1:obj_joker:20",
  f: "jevil",
  a: "obj_joker#1",
  n: "Spade ring",
  seed: 4242,
  start: 193,
  soul: "RED",
  lit: 5776,
  w: 282,
  h: 282,
  h32: "9b38c6ab"
}, {
  e: "1:obj_joker:20",
  f: "jevil",
  a: "obj_joker#2",
  n: "Heart bombs",
  seed: 4242,
  start: 232,
  soul: "RED",
  lit: 1236,
  w: 260,
  h: 260,
  h32: "c94b16f6"
}, {
  e: "1:obj_joker:20",
  f: "jevil",
  a: "obj_joker#3",
  n: "Devilsknife",
  seed: 4242,
  start: 187,
  soul: "RED",
  lit: 2008,
  w: 278,
  h: 278,
  h32: "69ffa9f6"
}, {
  e: "1:obj_joker:20",
  f: "jevil",
  a: "obj_joker#4",
  n: "Carousel rush",
  seed: 4242,
  start: 188,
  soul: "RED",
  lit: 22879,
  w: 278,
  h: 278,
  h32: "e2fef1e7"
}, {
  e: "1:obj_joker:20",
  f: "jevil",
  a: "obj_joker#5",
  n: "Club bombs",
  seed: 4242,
  start: 223,
  soul: "RED",
  lit: 3126,
  w: 260,
  h: 260,
  h32: "16c1df61"
}, {
  e: "1:obj_joker:20",
  f: "jevil",
  a: "obj_joker#7",
  n: "Spade rings (fast soul)",
  seed: 4242,
  start: 193,
  soul: "RED",
  lit: 6031,
  w: 282,
  h: 282,
  h32: "af82bd3b"
}, {
  e: "1:obj_king_boss:25",
  f: "enc40",
  a: "obj_king_boss#1",
  n: "Spades from the side",
  seed: 4242,
  start: 216,
  soul: "RED",
  lit: 1706,
  w: 260,
  h: 260,
  h32: "92b843de"
}, {
  e: "1:obj_king_boss:25",
  f: "enc40",
  a: "obj_king_boss#2",
  n: "Chain whip",
  seed: 4242,
  start: 239,
  soul: "RED",
  lit: 1336,
  w: 260,
  h: 220,
  h32: "7ac4c543"
}, {
  e: "1:obj_king_boss:25",
  f: "enc40",
  a: "obj_king_boss#3",
  n: "Falling chains",
  seed: 4242,
  start: 221,
  soul: "RED",
  lit: 1322,
  w: 260,
  h: 260,
  h32: "921b70da"
}, {
  e: "1:obj_king_boss:25",
  f: "enc40",
  a: "obj_king_boss#6",
  n: "Chain drag",
  seed: 4242,
  start: 220,
  soul: "RED",
  lit: 2226,
  w: 260,
  h: 220,
  h32: "8310df49"
}, {
  e: "1:obj_king_boss:25",
  f: "enc40",
  a: "obj_king_boss#7",
  n: "Falling chains II",
  seed: 4242,
  start: 214,
  soul: "RED",
  lit: 1478,
  w: 278,
  h: 278,
  h32: "26d38878"
}, {
  e: "1:obj_king_boss:25",
  f: "enc40",
  a: "obj_king_boss#9",
  n: "Spades from the side II",
  seed: 4242,
  start: 214,
  soul: "RED",
  lit: 2214,
  w: 260,
  h: 260,
  h32: "aed3c497"
}, {
  e: "1:obj_lancerboss2:12",
  f: "enc20",
  a: "obj_lancerboss2#0",
  n: "Spade wave",
  seed: 4242,
  start: 150,
  soul: "RED",
  lit: 1639,
  w: 260,
  h: 260,
  h32: "dadef788"
}, {
  e: "1:obj_lancerboss2:12",
  f: "enc20",
  a: "obj_lancerboss2#1",
  n: "Spade spiral",
  seed: 4242,
  start: 137,
  soul: "RED",
  lit: 1511,
  w: 260,
  h: 260,
  h32: "21f2ef0f"
}, {
  e: "1:obj_lancerboss2:12",
  f: "enc20",
  a: "obj_lancerboss2#3",
  n: "Spade storm",
  seed: 4242,
  start: 133,
  soul: "RED",
  lit: 1207,
  w: 260,
  h: 260,
  h32: "36a0c1da"
}, {
  e: "1:obj_ponman_enemy:11",
  f: "enc13",
  a: "obj_ponman_enemy#only",
  n: "Ponman eye shots",
  seed: 4242,
  start: 206,
  soul: "RED",
  lit: 1634,
  w: 260,
  h: 260,
  h32: "e6be7321"
}, {
  e: "1:obj_rabbick_enemy:13",
  f: "enc16",
  a: "obj_rabbick_enemy#0",
  n: "Dust bunnies",
  seed: 4242,
  start: 159,
  soul: "RED",
  lit: 2552,
  w: 278,
  h: 278,
  h32: "16d1f938"
}, {
  e: "2:obj_berdlyb_enemy:43",
  f: "ch2enc58",
  a: "obj_berdlyb_enemy#0",
  n: "Tornado",
  seed: 4242,
  start: 193,
  soul: "RED",
  lit: 4746,
  w: 260,
  h: 260,
  h32: "b437aa9f"
}, {
  e: "2:obj_berdlyb_enemy:43",
  f: "ch2enc58",
  a: "obj_berdlyb_enemy#1",
  n: "Spear blast",
  seed: 4242,
  start: 221,
  soul: "RED",
  lit: 1715,
  w: 260,
  h: 260,
  h32: "8e98777c"
}, {
  e: "2:obj_berdlyb_enemy:43",
  f: "ch2enc58",
  a: "obj_berdlyb_enemy#2",
  n: "Feather scatter",
  seed: 4242,
  start: 201,
  soul: "RED",
  lit: 3135,
  w: 260,
  h: 260,
  h32: "9cf4bead"
}, {
  e: "2:obj_clubsenemy:47",
  f: "ch2enc71",
  a: "obj_clubsenemy#2",
  n: "Club wheel",
  seed: 4242,
  start: 210,
  soul: "RED",
  lit: 1085,
  w: 260,
  h: 260,
  h32: "82cad858"
}, {
  e: "2:obj_tasque_manager_enemy:42",
  f: "ch2enc89",
  a: "obj_tasque_manager_enemy#0",
  n: "Whip",
  seed: 4242,
  start: 211,
  soul: "RED",
  lit: 302,
  w: 260,
  h: 260,
  h32: "b5471e60"
}, {
  e: "2:obj_maus_enemy:34",
  f: "ch2enc54",
  a: "obj_maus_enemy#0",
  n: "Maus holes",
  seed: 4242,
  start: 196,
  soul: "RED",
  lit: 1300,
  w: 260,
  h: 260,
  h32: "27875478"
}, {
  e: "2:obj_omawaroid_enemy:30",
  f: "ch2enc50",
  a: "obj_omawaroid_enemy#0",
  n: "Vaccine",
  seed: 4242,
  start: 191,
  soul: "RED",
  lit: 775,
  w: 260,
  h: 260,
  h32: "03f67b9f"
}, {
  e: "2:obj_queen_enemy:48",
  f: "ch2enc59",
  a: "obj_queen_enemy#0",
  n: "Image search",
  seed: 4242,
  start: 244,
  soul: "RED",
  lit: 1994,
  w: 260,
  h: 260,
  h32: "4f3336b4"
}, {
  e: "2:obj_queen_enemy:48",
  f: "ch2enc59",
  a: "obj_queen_enemy#3",
  n: "Stomp",
  seed: 4242,
  start: 169,
  soul: "RED",
  lit: 2209,
  w: 260,
  h: 260,
  h32: "8c9e507d"
}, {
  e: "2:obj_queen_enemy:48",
  f: "ch2enc59",
  a: "obj_queen_enemy#4",
  n: "New social media",
  seed: 4242,
  start: 187,
  soul: "RED",
  lit: 4096,
  w: 260,
  h: 260,
  h32: "8e0b8820"
}, {
  e: "2:obj_queen_enemy:48",
  f: "ch2enc59",
  a: "obj_queen_enemy#5",
  n: "Buffering",
  seed: 4242,
  start: 188,
  soul: "RED",
  lit: 2313,
  w: 260,
  h: 260,
  h32: "b9ee00cb"
}, {
  e: "2:obj_queen_enemy:48",
  f: "ch2enc59",
  a: "obj_queen_enemy#6",
  n: "Explosion",
  seed: 4242,
  start: 206,
  soul: "RED",
  lit: 1543,
  w: 260,
  h: 260,
  h32: "347cc4f2"
}, {
  e: "2:obj_queen_enemy:48",
  f: "ch2enc59",
  a: "obj_queen_enemy#7",
  n: "Berdly tornado / feathers",
  seed: 4242,
  start: 198,
  soul: "RED",
  lit: 2376,
  w: 260,
  h: 224,
  h32: "a6a96687"
}, {
  e: "2:obj_rouxls_enemy:45",
  f: "ch2enc63",
  a: "obj_rouxls_enemy#0",
  n: "Thrash head",
  seed: 4242,
  start: 214,
  soul: "RED",
  lit: 1128,
  w: 260,
  h: 260,
  h32: "3611164d"
}, {
  e: "2:obj_rouxls_enemy:45",
  f: "ch2enc63",
  a: "obj_rouxls_enemy#1",
  n: "Thrash foot",
  seed: 4242,
  start: 212,
  soul: "RED",
  lit: 736,
  w: 278,
  h: 278,
  h32: "07ffd84c"
}, {
  e: "2:obj_rouxls_enemy:45",
  f: "ch2enc63",
  a: "obj_rouxls_enemy#2",
  n: "Puzzle blocks",
  seed: 4242,
  start: 195,
  soul: "RED",
  lit: 3896,
  w: 260,
  h: 260,
  h32: "0297a66c"
}, {
  e: "2:obj_spamton_enemy:49",
  f: "ch2enc60",
  a: "obj_spamton_enemy#0",
  n: "Minitons",
  seed: 4242,
  start: 157,
  soul: "RED",
  lit: 1320,
  w: 260,
  h: 260,
  h32: "980e3ba1"
}, {
  e: "2:obj_spamton_enemy:49",
  f: "ch2enc60",
  a: "obj_spamton_enemy#1",
  n: "Word bullets",
  seed: 4242,
  start: 173,
  soul: "RED",
  lit: 631,
  w: 260,
  h: 260,
  h32: "f42d7e1e"
}, {
  e: "2:obj_spamton_enemy:49",
  f: "ch2enc60",
  a: "obj_spamton_enemy#2",
  n: "Money vacuum",
  seed: 4242,
  start: 147,
  soul: "RED",
  lit: 1028,
  w: 320,
  h: 290,
  h32: "be06343d"
}, {
  e: "2:obj_spamton_neo_enemy:50",
  f: "ch2enc61",
  a: "obj_spamton_neo_enemy#1",
  n: "Pipis football",
  seed: 4242,
  start: 235,
  soul: "YELLOW",
  lit: 374,
  w: 260,
  h: 260,
  h32: "af4487a8"
}, {
  e: "2:obj_spamton_neo_enemy:50",
  f: "ch2enc61",
  a: "obj_spamton_neo_enemy#2",
  n: "Heart attack (wire heart)",
  seed: 4242,
  start: 196,
  soul: "YELLOW",
  lit: 2686,
  w: 260,
  h: 260,
  h32: "15306321"
}, {
  e: "2:obj_spamton_neo_enemy:50",
  f: "ch2enc61",
  a: "obj_spamton_neo_enemy#4",
  n: "Phone hands",
  seed: 4242,
  start: 189,
  soul: "YELLOW",
  lit: 6101,
  w: 320,
  h: 290,
  h32: "742760c4"
}, {
  e: "2:obj_spamton_neo_enemy:50",
  f: "ch2enc61",
  a: "obj_spamton_neo_enemy#6",
  n: "REC-CREW columns",
  seed: 4242,
  start: 183,
  soul: "YELLOW",
  lit: 7483,
  w: 320,
  h: 290,
  h32: "fa0e9ad6"
}, {
  e: "2:obj_spamton_neo_enemy:50",
  f: "ch2enc61",
  a: "obj_spamton_neo_enemy#7",
  n: "Face attack",
  seed: 4242,
  start: 240,
  soul: "YELLOW",
  lit: 3216,
  w: 260,
  h: 260,
  h32: "9aed2b21"
}, {
  e: "2:obj_spamton_neo_enemy:50",
  f: "ch2enc61",
  a: "obj_spamton_neo_enemy#8",
  n: "Phone call",
  seed: 4242,
  start: 432,
  soul: "YELLOW",
  lit: 482,
  w: 260,
  h: 260,
  h32: "81ac49fe"
}, {
  e: "2:obj_swatchling_enemy:36",
  f: "ch2enc56",
  a: "obj_swatchling_enemy#only",
  n: "Bounce",
  seed: 4242,
  start: 177,
  soul: null,
  lit: 2136,
  w: 260,
  h: 220,
  h32: "42dba9a8"
}, {
  e: "2:obj_tasque_enemy:32",
  f: "ch2enc52",
  a: "obj_tasque_enemy#1",
  n: "Meow wow",
  seed: 4242,
  start: 194,
  soul: "RED",
  lit: 1038,
  w: 260,
  h: 260,
  h32: "7eae36de"
}, {
  e: "2:obj_virovirokun_enemy:35",
  f: "ch2enc55",
  a: "obj_virovirokun_enemy#0",
  n: "Space invader",
  seed: 4242,
  start: 191,
  soul: "RED",
  lit: 2333,
  w: 260,
  h: 260,
  h32: "fd491da2"
}, {
  e: "2:obj_virovirokun_enemy:35",
  f: "ch2enc55",
  a: "obj_virovirokun_enemy#1",
  n: "Viruses",
  seed: 4242,
  start: 191,
  soul: "RED",
  lit: 341,
  w: 260,
  h: 260,
  h32: "f1e0c77a"
}, {
  e: "2:obj_werewerewire_enemy:40",
  f: "ch2enc81",
  a: "obj_werewerewire_enemy#1",
  n: "Wire lasers",
  seed: 4242,
  start: 197,
  soul: "RED",
  lit: 2224,
  w: 278,
  h: 278,
  h32: "19ac00c1"
}, {
  e: "2:obj_werewire_enemy:33",
  f: "ch2enc53",
  a: "obj_werewire_enemy#only",
  n: "Zzt balloons",
  seed: 4242,
  start: 183,
  soul: "RED",
  lit: 2074,
  w: 260,
  h: 260,
  h32: "12634a39"
}, {
  e: "3:obj_knight_enemy:104",
  f: "ch3enc115",
  a: "obj_knight_enemy#0",
  n: "Sword slash",
  seed: 4242,
  start: 216,
  soul: "RED",
  lit: 3866,
  w: 260,
  h: 260,
  h32: "a9daae1b"
}, {
  e: "3:obj_knight_enemy:104",
  f: "ch3enc115",
  a: "obj_knight_enemy#2",
  n: "Sword flurry",
  seed: 4242,
  start: 172,
  soul: "RED",
  lit: 2725,
  w: 282,
  h: 282,
  h32: "f12e5b5a"
}, {
  e: "3:obj_knight_enemy:104",
  f: "ch3enc115",
  a: "obj_knight_enemy#3",
  n: "Sword tunnel",
  seed: 4242,
  start: 183,
  soul: "RED",
  lit: 2389,
  w: 260,
  h: 260,
  h32: "c8ef317d"
}, {
  e: "3:obj_knight_enemy:104",
  f: "ch3enc115",
  a: "obj_knight_enemy#6",
  n: "Under-box attack",
  seed: 4242,
  start: 216,
  soul: "RED",
  lit: 2853,
  w: 260,
  h: 260,
  h32: "83c721cb"
}, {
  e: "3:obj_knight_enemy:104",
  f: "ch3enc115",
  a: "obj_knight_enemy#7",
  n: "Combination attack",
  seed: 4242,
  start: 173,
  soul: "RED",
  lit: 1414,
  w: 276,
  h: 276,
  h32: "281eabaa"
}, {
  e: "3:obj_rouxls_ch3_enemy:102",
  f: "ch3enc114",
  a: "obj_rouxls_ch3_enemy#2",
  n: "Laser pointer",
  seed: 4242,
  start: 207,
  soul: "RED",
  lit: 2485,
  w: 278,
  h: 278,
  h32: "012b4f1a"
}, {
  e: "3:obj_rouxls_ch3_enemy:102",
  f: "ch3enc114",
  a: "obj_rouxls_ch3_enemy#3",
  n: "Laser pointer II",
  seed: 4242,
  start: 207,
  soul: "RED",
  lit: 1889,
  w: 278,
  h: 278,
  h32: "6f7beb9f"
}, {
  e: "3:obj_shadowman_enemy:54",
  f: "ch3enc110",
  a: "obj_shadowman_enemy#2",
  n: "Tommy gun",
  seed: 4242,
  start: 186,
  soul: "RED",
  lit: 3031,
  w: 260,
  h: 260,
  h32: "3f040880"
}, {
  e: "3:obj_shutta_enemy:55",
  f: "ch3enc111",
  a: "obj_shutta_enemy#0",
  n: "Snapshot I",
  seed: 4242,
  start: 178,
  soul: "RED",
  lit: 631,
  w: 260,
  h: 260,
  h32: "ff50ebcd"
}, {
  e: "3:obj_shutta_enemy:55",
  f: "ch3enc111",
  a: "obj_shutta_enemy#1",
  n: "Snapshot II",
  seed: 4242,
  start: 165,
  soul: "RED",
  lit: 1421,
  w: 278,
  h: 278,
  h32: "ac6bd890"
}, {
  e: "3:obj_shutta_enemy:55",
  f: "ch3enc111",
  a: "obj_shutta_enemy#2",
  n: "Snapshot III",
  seed: 4242,
  start: 167,
  soul: "RED",
  lit: 1229,
  w: 276,
  h: 276,
  h32: "758aff50"
}, {
  e: "3:obj_tenna_enemy:103",
  f: "ch3enc121",
  a: "obj_tenna_enemy#0",
  n: "All-Star Cast",
  seed: 4242,
  start: 197,
  soul: "RED",
  lit: 2702,
  w: 260,
  h: 260,
  h32: "3fe283e1"
}, {
  e: "3:obj_tenna_enemy:103",
  f: "ch3enc121",
  a: "obj_tenna_enemy#1",
  n: "Smash cut",
  seed: 4242,
  start: 189,
  soul: "RED",
  lit: 2615,
  w: 260,
  h: 260,
  h32: "98dfae1b"
}, {
  e: "3:obj_tenna_enemy:103",
  f: "ch3enc121",
  a: "obj_tenna_enemy#2",
  n: "Rimshot lens flare",
  seed: 4242,
  start: 182,
  soul: "RED",
  lit: 2634,
  w: 260,
  h: 260,
  h32: "94b86abd"
}, {
  e: "3:obj_tenna_enemy:103",
  f: "ch3enc121",
  a: "obj_tenna_enemy#20",
  n: "Light 'Em Up",
  seed: 4242,
  start: 326,
  soul: null,
  lit: 686,
  w: 320,
  h: 240,
  h32: "a322f0b1"
}, {
  e: "3:obj_zapper_enemy:56",
  f: "ch3enc112",
  a: "obj_zapper_enemy#0",
  n: "Zapper laser",
  seed: 4242,
  start: 229,
  soul: "RED",
  lit: 2794,
  w: 260,
  h: 260,
  h32: "23023e54"
}, {
  e: "3:obj_zapper_enemy:56",
  f: "ch3enc112",
  a: "obj_zapper_enemy#1",
  n: "Zapper cannon",
  seed: 4242,
  start: 216,
  soul: "RED",
  lit: 2153,
  w: 260,
  h: 260,
  h32: "6bccce56"
}, {
  e: "4:obj_bibliox_enemy:64",
  f: "ch4enc152",
  a: "obj_bibliox_enemy#only",
  n: "Book attack",
  seed: 4242,
  start: 176,
  soul: "RED",
  lit: 6057,
  w: 282,
  h: 282,
  h32: "61e2538b"
}, {
  e: "4:obj_mizzle_enemy:65",
  f: "ch4enc153",
  a: "obj_mizzle_enemy#0",
  n: "Newholywatereye",
  seed: 4242,
  start: 181,
  soul: "RED",
  lit: 1020,
  w: 278,
  h: 278,
  h32: "b866ad4a"
}, {
  e: "4:obj_halo_enemy:67",
  f: "ch4enc155",
  a: "obj_halo_enemy#0",
  n: "Hoop attack",
  seed: 4242,
  start: 211,
  soul: "RED",
  lit: 1186,
  w: 260,
  h: 260,
  h32: "86cceb17"
}, {
  e: "4:obj_halo_enemy:67",
  f: "ch4enc155",
  a: "obj_halo_enemy#1",
  n: "Vvvvvattack",
  seed: 4242,
  start: 221,
  soul: "RED",
  lit: 2334,
  w: 260,
  h: 260,
  h32: "9b3a6ad7"
}, {
  e: "4:obj_jackenstein_enemy:107",
  f: "ch4enc174",
  a: "obj_jackenstein_enemy#1",
  n: "Jack 2",
  seed: 4242,
  start: 149,
  soul: "RED",
  lit: 332,
  w: 215,
  h: 153,
  h32: "cc5af078"
}, {
  e: "4:obj_jackenstein_enemy:107",
  f: "ch4enc174",
  a: "obj_jackenstein_enemy#2",
  n: "Jack 3",
  seed: 4242,
  start: 149,
  soul: "RED",
  lit: 403,
  w: 220,
  h: 168,
  h32: "65269b4b"
}, {
  e: "4:obj_jackenstein_enemy:107",
  f: "ch4enc174",
  a: "obj_jackenstein_enemy#3",
  n: "Jack 4",
  seed: 4242,
  start: 149,
  soul: "RED",
  lit: 471,
  w: 214,
  h: 149,
  h32: "ae1b1b7e"
}, {
  e: "4:obj_jackenstein_enemy:107",
  f: "ch4enc174",
  a: "obj_jackenstein_enemy#5",
  n: "Jack 6",
  seed: 4242,
  start: 149,
  soul: "RED",
  lit: 2366,
  w: 320,
  h: 290,
  h32: "5932c946"
}, {
  e: "4:obj_jackenstein_enemy:107",
  f: "ch4enc174",
  a: "obj_jackenstein_enemy#6",
  n: "Jack 7",
  seed: 4242,
  start: 153,
  soul: "RED",
  lit: 2726,
  w: 320,
  h: 290,
  h32: "2dbdaef1"
}, {
  e: "4:obj_jackenstein_enemy:107",
  f: "ch4enc174",
  a: "obj_jackenstein_enemy#7",
  n: "Jack 8",
  seed: 4242,
  start: 149,
  soul: "RED",
  lit: 815,
  w: 320,
  h: 290,
  h32: "0da83a4a"
}, {
  e: "4:obj_organ_enemy:68",
  f: "ch4enc156",
  a: "obj_organ_enemy#0",
  n: "Organnotes",
  seed: 4242,
  start: 184,
  soul: "RED",
  lit: 1395,
  w: 260,
  h: 260,
  h32: "bad87490"
}, {
  e: "4:obj_titan_enemy:108",
  f: "ch4enc175",
  a: "obj_titan_enemy#1",
  n: "Shape centipede (harder)",
  seed: 4242,
  start: 133,
  soul: "RED",
  lit: 1646,
  w: 278,
  h: 278,
  h32: "83402bf2"
}, {
  e: "4:obj_titan_enemy:108",
  f: "ch4enc175",
  a: "obj_titan_enemy#5",
  n: "Shape centipede (hardest)",
  seed: 4242,
  start: 133,
  soul: "RED",
  lit: 1969,
  w: 278,
  h: 278,
  h32: "a3499ac4"
}, {
  e: "4:obj_titan_spawn_enemy:109",
  f: "ch4enc177",
  a: "obj_titan_spawn_enemy#1",
  n: "Shape centipede",
  seed: 4242,
  start: 133,
  soul: "RED",
  lit: 1454,
  w: 278,
  h: 278,
  h32: "2b71e29c"
}, {
  e: "4:obj_titan_spawn_enemy:109",
  f: "ch4enc177",
  a: "obj_titan_spawn_enemy#5",
  n: "Shape centipede (hard)",
  seed: 4242,
  start: 133,
  soul: "RED",
  lit: 1873,
  w: 278,
  h: 278,
  h32: "7568e6ed"
}, {
  e: "5:obj_floradinn_enemy:70",
  f: "ch5enc200",
  a: "obj_floradinn_enemy#1",
  n: "Mane thorn",
  seed: 4242,
  start: 201,
  soul: "RED",
  lit: 2526,
  w: 261,
  h: 261,
  h32: "f9684c01"
}, {
  e: "5:obj_kawkaw_enemy:74",
  f: "ch5enc204",
  a: "obj_kawkaw_enemy#0",
  n: "Falling feathers",
  seed: 4242,
  start: 233,
  soul: "RED",
  lit: 1013,
  w: 261,
  h: 261,
  h32: "f71887dd"
}, {
  e: "5:obj_kawkaw_enemy:74",
  f: "ch5enc204",
  a: "obj_kawkaw_enemy#1",
  n: "Pchoo",
  seed: 4242,
  start: 216,
  soul: "RED",
  lit: 3175,
  w: 279,
  h: 279,
  h32: "d18f98ac"
}, {
  e: "5:obj_leafling_enemy:71",
  f: "ch5enc201",
  a: "obj_leafling_enemy#0",
  n: "Petal burst",
  seed: 4242,
  start: 189,
  soul: "RED",
  lit: 2681,
  w: 278,
  h: 278,
  h32: "4e986353"
}, {
  e: "5:obj_leafling_enemy:71",
  f: "ch5enc201",
  a: "obj_leafling_enemy#1",
  n: "Petal wind",
  seed: 4242,
  start: 195,
  soul: "RED",
  lit: 1167,
  w: 261,
  h: 261,
  h32: "187d676c"
}, {
  e: "5:obj_netskie_enemy:76",
  f: "ch5enc206",
  a: "obj_netskie_enemy#1",
  n: "Netskie floradinn",
  seed: 4242,
  start: 209,
  soul: "RED",
  lit: 588,
  w: 261,
  h: 261,
  h32: "d97748e9"
}, {
  e: "5:obj_netskie_enemy:76",
  f: "ch5enc206",
  a: "obj_netskie_enemy#2",
  n: "Netskie shadowman",
  seed: 4242,
  start: 207,
  soul: "RED",
  lit: 1582,
  w: 261,
  h: 261,
  h32: "4c54be25"
}, {
  e: "5:obj_netskie_enemy:76",
  f: "ch5enc206",
  a: "obj_netskie_enemy#3",
  n: "Netskie rabbick",
  seed: 4242,
  start: 201,
  soul: "RED",
  lit: 2501,
  w: 279,
  h: 279,
  h32: "0cdffb00"
}, {
  e: "5:obj_netskie_enemy:76",
  f: "ch5enc206",
  a: "obj_netskie_enemy#0",
  n: "Pawprint",
  seed: 4242,
  start: 223,
  soul: "RED",
  lit: 2450,
  w: 261,
  h: 261,
  h32: "74c4fbef"
}, {
  e: "5:obj_pink_enemy:118",
  f: "ch5enc224",
  a: "obj_pink_enemy#1",
  n: "Cat",
  seed: 4242,
  start: 285,
  soul: "PURPLE",
  lit: 1383,
  w: 261,
  h: 261,
  h32: "548d4e05"
}, {
  e: "5:obj_pink_enemy:118",
  f: "ch5enc224",
  a: "obj_pink_enemy#2",
  n: "Bomb",
  seed: 4242,
  start: 301,
  soul: "PURPLE",
  lit: 2438,
  w: 261,
  h: 261,
  h32: "b6007610"
}, {
  e: "5:obj_pink_enemy:118",
  f: "ch5enc224",
  a: "obj_pink_enemy#6",
  n: "Bomb",
  seed: 4242,
  start: 270,
  soul: "PURPLE",
  lit: 2127,
  w: 284,
  h: 283,
  h32: "5f2a8299"
}, {
  e: "5:obj_pink_enemy:118",
  f: "ch5enc224",
  a: "obj_pink_enemy#7",
  n: "Vertical lanes",
  seed: 4242,
  start: 236,
  soul: "PURPLE",
  lit: 1174,
  w: 161,
  h: 146,
  h32: "d51ee1bf"
}, {
  e: "5:obj_pink_enemy:118",
  f: "ch5enc224",
  a: "obj_pink_enemy#8",
  n: "Vertical lanes",
  seed: 4242,
  start: 236,
  soul: "PURPLE",
  lit: 2031,
  w: 161,
  h: 146,
  h32: "c683cd88"
}, {
  e: "5:obj_scarecrow_enemy:72",
  f: "ch5enc211",
  a: "obj_scarecrow_enemy#-1",
  n: "Splitting shuriken",
  seed: 4242,
  start: 195,
  soul: "RED",
  lit: 1503,
  w: 261,
  h: 261,
  h32: "0bb227cc"
}, {
  e: "5:obj_scarecrow_enemy:72",
  f: "ch5enc211",
  a: "obj_scarecrow_enemy#0",
  n: "Scythe toss (easy)",
  seed: 4242,
  start: 187,
  soul: "RED",
  lit: 1103,
  w: 279,
  h: 279,
  h32: "4d6da607"
}, {
  e: "5:obj_scarecrow_enemy:72",
  f: "ch5enc211",
  a: "obj_scarecrow_enemy#1",
  n: "Scythe bomb",
  seed: 4242,
  start: 196,
  soul: "RED",
  lit: 1835,
  w: 261,
  h: 261,
  h32: "9e275dfb"
}, {
  e: "5:obj_sheary_enemy:75",
  f: "ch5enc205",
  a: "obj_sheary_enemy#0",
  n: "Scissor attack 1",
  seed: 4242,
  start: 256,
  soul: "RED",
  lit: 4491,
  w: 261,
  h: 261,
  h32: "0a7226c3"
}, {
  e: "5:obj_shinobeetle_enemy:73",
  f: "ch5enc203",
  a: "obj_shinobeetle_enemy#0",
  n: "Jumpingshuriken",
  seed: 4242,
  start: 169,
  soul: "RED",
  lit: 1115,
  w: 279,
  h: 279,
  h32: "b604fe9c"
}, {
  e: "5:obj_terracota_enemy:77",
  f: "ch5enc207",
  a: "obj_terracota_enemy#0",
  n: "Terracota pots",
  seed: 4242,
  start: 187,
  soul: "RED",
  lit: 1829,
  w: 279,
  h: 279,
  h32: "64c6be0c"
}, {
  e: "5:obj_trashy_trio:121",
  f: "ch5enc234",
  a: "obj_trashy_trio#0",
  n: "Trashy rush",
  seed: 4242,
  start: 97,
  soul: "RED",
  lit: 2162,
  w: 320,
  h: 240,
  h32: "077df159"
}, {
  e: "5:obj_trashy_trio:121",
  f: "ch5enc234",
  a: "obj_trashy_trio#1",
  n: "Ball toss",
  seed: 4242,
  start: 76,
  soul: "RED",
  lit: 825,
  w: 320,
  h: 240,
  h32: "7f77b89d"
}];
var iU = [{
  id: "amalgam",
  file: "amalgam.ogg",
  t: "Amalgam",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0,
  dur: 80
}, {
  id: "vsasgore",
  file: "vsasgore.ogg",
  t: "ASGORE",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0,
  dur: 154.1
}, {
  id: "x_undyne",
  file: "x_undyne.ogg",
  t: "Battle Against a True Hero",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0,
  dur: 153.6
}, {
  id: "papyrusboss",
  file: "papyrusboss.ogg",
  t: "Bonetrousle",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0,
  dur: 57.7
}, {
  id: "mettaton_ex",
  file: "mettaton_ex.ogg",
  t: "Death by Glamour",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0,
  dur: 133
}, {
  id: "dogsong",
  file: "dogsong.ogg",
  t: "Dogsong",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0.08,
  dur: 36.3
}, {
  id: "dummybattle",
  file: "dummybattle.ogg",
  t: "Dummy!",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0,
  dur: 145.9
}, {
  id: "battle1",
  file: "battle1.ogg",
  t: "Enemy Approaching",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0,
  dur: 55.1
}, {
  id: "ghostbattle",
  file: "ghostbattle.ogg",
  t: "Ghost Fight",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0,
  dur: 51.2
}, {
  id: "boss1",
  file: "boss1.ogg",
  t: "Heartache",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0,
  dur: 108.4
}, {
  id: "zz_megalovania",
  file: "zz_megalovania.ogg",
  t: "MEGALOVANIA",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0,
  dur: 156
}, {
  id: "mettatonbattle",
  file: "mettatonbattle.ogg",
  t: "Metal Crusher",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0,
  dur: 62.1
}, {
  id: "mettaton_neo",
  file: "mettaton_neo.ogg",
  t: "Power of NEO",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0,
  dur: 26.5
}, {
  id: "snowy",
  file: "snowy.ogg",
  t: "Snowy",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0,
  dur: 102.3
}, {
  id: "undyneboss",
  file: "undyneboss.ogg",
  t: "Spear of Justice",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0,
  dur: 113.6
}, {
  id: "spider",
  file: "spider.ogg",
  t: "Spider Dance",
  g: "ut",
  ch: 0,
  cat: "battle",
  start: 0,
  dur: 100.2
}, {
  id: "core",
  file: "core.ogg",
  t: "CORE",
  g: "ut",
  ch: 0,
  cat: "music",
  start: 0,
  dur: 164.6
}, {
  id: "fallendown2",
  file: "fallendown2.ogg",
  t: "Fallen Down (Reprise)",
  g: "ut",
  ch: 0,
  cat: "music",
  start: 0,
  dur: 150.6
}, {
  id: "hereweare",
  file: "hereweare.ogg",
  t: "Here We Are",
  g: "ut",
  ch: 0,
  cat: "music",
  start: 0,
  dur: 125
}, {
  id: "hotel",
  file: "hotel.ogg",
  t: "Hotel",
  g: "ut",
  ch: 0,
  cat: "music",
  start: 0,
  dur: 82.6
}, {
  id: "papyrus",
  file: "papyrus.ogg",
  t: "Nyeh Heh Heh!",
  g: "ut",
  ch: 0,
  cat: "music",
  start: 0,
  dur: 32
}, {
  id: "story",
  file: "story.ogg",
  t: "Once Upon a Time",
  g: "ut",
  ch: 0,
  cat: "music",
  start: 0,
  dur: 80
}, {
  id: "ruins",
  file: "ruins.ogg",
  t: "Ruins",
  g: "ut",
  ch: 0,
  cat: "music",
  start: 0,
  dur: 91.3
}, {
  id: "shop",
  file: "shop.ogg",
  t: "Shop",
  g: "ut",
  ch: 0,
  cat: "music",
  start: 0,
  dur: 49.6
}, {
  id: "temvillage",
  file: "temvillage.ogg",
  t: "Temmie Village",
  g: "ut",
  ch: 0,
  cat: "music",
  start: 0,
  dur: 57.1
}, {
  id: "undynetheme",
  file: "undynetheme.ogg",
  t: "Undyne",
  g: "ut",
  ch: 0,
  cat: "music",
  start: 0,
  dur: 37.6
}, {
  id: "waterfall",
  file: "waterfall.ogg",
  t: "Waterfall",
  g: "ut",
  ch: 0,
  cat: "music",
  start: 0,
  dur: 123.5
}, {
  id: "kingboss",
  file: "kingboss.ogg",
  t: "Chaos King",
  g: "dr",
  ch: 1,
  cat: "battle",
  start: 0,
  dur: 106.1
}, {
  id: "checkers",
  file: "checkers.ogg",
  t: "Checker Dance",
  g: "dr",
  ch: 1,
  cat: "battle",
  start: 0,
  dur: 78
}, {
  id: "battle",
  file: "battle.ogg",
  t: "Rude Buster",
  g: "dr",
  ch: 1,
  cat: "battle",
  start: 0,
  dur: 75.4
}, {
  id: "joker",
  file: "joker.ogg",
  t: "THE WORLD REVOLVING",
  g: "dr",
  ch: 1,
  cat: "battle",
  start: 0,
  dur: 101.1
}, {
  id: "lancerfight",
  file: "lancerfight.ogg",
  t: "Vs. Lancer",
  g: "dr",
  ch: 1,
  cat: "battle",
  start: 0.17,
  dur: 41.3
}, {
  id: "vs_susie",
  file: "vs_susie.ogg",
  t: "Vs. Susie",
  g: "dr",
  ch: 1,
  cat: "battle",
  start: 0,
  dur: 81.1
}, {
  id: "card_castle",
  file: "card_castle.ogg",
  t: "Card Castle",
  g: "dr",
  ch: 1,
  cat: "music",
  start: 0,
  dur: 61.4
}, {
  id: "dontforget",
  file: "dontforget.ogg",
  t: "Don't Forget",
  g: "dr",
  ch: 1,
  cat: "music",
  start: 0.22,
  dur: 51.4
}, {
  id: "field_of_hopes",
  file: "field_of_hopes.ogg",
  t: "Field of Hopes and Dreams",
  g: "dr",
  ch: 1,
  cat: "music",
  start: 0,
  dur: 161.3
}, {
  id: "hip_shop",
  file: "hip_shop.ogg",
  t: "Hip Shop",
  g: "dr",
  ch: 1,
  cat: "music",
  start: 0,
  dur: 39.6
}, {
  id: "lancer",
  file: "lancer.ogg",
  t: "Lancer",
  g: "dr",
  ch: 1,
  cat: "music",
  start: 0.24,
  dur: 48
}, {
  id: "forest",
  file: "forest.ogg",
  t: "Scarlet Forest",
  g: "dr",
  ch: 1,
  cat: "music",
  start: 0,
  dur: 128
}, {
  id: "legend",
  file: "legend.ogg",
  t: "The Legend",
  g: "dr",
  ch: 1,
  cat: "music",
  start: 0,
  dur: 111.3
}, {
  id: "spamton_neo_mix_ex_wip",
  file: "spamton_neo_mix_ex_wip.ogg",
  t: "BIG SHOT",
  g: "dr",
  ch: 2,
  cat: "battle",
  start: 0,
  dur: 140.6
}, {
  id: "boxing_boss",
  file: "boxing_boss.ogg",
  t: "Knock You Down !!",
  g: "dr",
  ch: 2,
  cat: "battle",
  start: 0,
  dur: 142.8
}, {
  id: "spamton_battle",
  file: "spamton_battle.ogg",
  t: "NOW'S YOUR CHANCE TO BE A",
  g: "dr",
  ch: 2,
  cat: "battle",
  start: 0,
  dur: 65.5
}, {
  id: "cyber",
  file: "cyber.ogg",
  t: "A CYBER'S WORLD?",
  g: "dr",
  ch: 2,
  cat: "music",
  start: 0,
  dur: 164.1
}, {
  id: "knight",
  file: "knight.ogg",
  t: "Black Knife",
  g: "dr",
  ch: 3,
  cat: "battle",
  start: 0,
  dur: 117.2
}, {
  id: "tenna_battle",
  file: "tenna_battle.ogg",
  t: "It's TV Time!",
  g: "dr",
  ch: 3,
  cat: "battle",
  start: 0,
  dur: 165.4
}, {
  id: "rudebuster_boss",
  file: "rudebuster_boss.ogg",
  t: "Ruder Buster",
  g: "dr",
  ch: 3,
  cat: "battle",
  start: 0,
  dur: 103.4
}, {
  id: "battle_vapor",
  file: "battle_vapor.ogg",
  t: "Vapor Buster",
  g: "dr",
  ch: 3,
  cat: "battle",
  start: 0,
  dur: 115.3
}, {
  id: "tv_world",
  file: "tv_world.ogg",
  t: "TV WORLD",
  g: "dr",
  ch: 3,
  cat: "music",
  start: 0,
  dur: 129.1
}, {
  id: "ch4_battle",
  file: "ch4/ch4_battle.ogg",
  t: "From Now On (Battle 2)",
  g: "dr",
  ch: 4,
  cat: "battle",
  start: 0,
  dur: 108.7
}, {
  id: "titan_battle",
  file: "ch4/titan_battle.ogg",
  t: "GUARDIAN",
  g: "dr",
  ch: 4,
  cat: "battle",
  start: 0,
  dur: 226.3
}, {
  id: "ch4_extra_boss",
  file: "ch4/ch4_extra_boss.ogg",
  t: "Hammer of Justice",
  g: "dr",
  ch: 4,
  cat: "battle",
  start: 0,
  dur: 133.3
}, {
  id: "titan_spawn",
  file: "ch4/titan_spawn.ogg",
  t: "SPAWN",
  g: "dr",
  ch: 4,
  cat: "battle",
  start: 0,
  dur: 71.1
}, {
  id: "pink",
  file: "ch5/pink.ogg",
  t: "Cutie Mew Mew Magic",
  g: "dr",
  ch: 5,
  cat: "battle",
  start: 0,
  dur: 184.7
}, {
  id: "Flowerman_Arrangement",
  file: "ch5/Flowerman_Arrangement.ogg",
  t: "Flower Man",
  g: "dr",
  ch: 5,
  cat: "battle",
  start: 0,
  dur: 192
}, {
  id: "inappropriate_recycling",
  file: "ch5/inappropriate_recycling.ogg",
  t: "Inappropriate Recycling",
  g: "dr",
  ch: 5,
  cat: "battle",
  start: 0,
  dur: 96
}, {
  id: "rakuichi_buster_wip",
  file: "ch5/rakuichi_buster_wip.ogg",
  t: "Rakuichi Buster",
  g: "dr",
  ch: 5,
  cat: "battle",
  start: 0,
  dur: 102.9
}, {
  id: "flower_castle",
  file: "ch5/flower_castle.ogg",
  t: "Flower Castle",
  g: "dr",
  ch: 5,
  cat: "music",
  start: 0,
  dur: 270.2
}];
L4();
L4();
var ib = new WeakMap();
function sheet(L, o) {
  let Ms = ib.get(L);
  if (!Ms) {
    Ms = new Map();
    ib.set(L, Ms);
  }
  let Mt = Ms.get(o);
  if (Mt) {
    return Mt;
  }
  Mt = document.createElement("canvas");
  Mt.width = L.img.width;
  Mt.height = L.img.height;
  let ws = Mt.getContext("2d");
  ws.drawImage(L.img, 0, 0);
  ws.globalCompositeOperation = "source-in";
  ws.fillStyle = o;
  ws.fillRect(0, 0, Mt.width, Mt.height);
  Ms.set(o, Mt);
  return Mt;
}
L2(sheet, "sheet");
function font(L) {
  let Mo = J;
  if (Mo === 1) {
    return U[L];
  }
  a(1);
  try {
    return U[L];
  } finally {
    a(Mo);
  }
}
L2(font, "font");
var glyphOf = L2((L, o) => L.glyphs[o.charCodeAt(0)], "glyphOf");
function clean(L, o = "fnt_main") {
  let Ms = font(o);
  if (!Ms) {
    return "";
  }
  let Me = "";
  for (let wo of String(L ?? "")) {
    if (glyphOf(Ms, wo)) {
      Me += wo;
    }
  }
  return Me;
}
L2(clean, "clean");
function width(L, o) {
  let Ms = font(L);
  if (!Ms) {
    return 0;
  }
  let Mt = 0;
  for (let wo of String(o ?? "")) {
    let ws = glyphOf(Ms, wo);
    if (ws) {
      Mt += ws[4];
    }
  }
  return Mt;
}
L2(width, "width");
function height(L) {
  let Ms = font(L);
  if (Ms) {
    return Ms._lh ||= Math.max(...Object.values(Ms.glyphs).map(Mt => Mt[3]));
  } else {
    return 0;
  }
}
L2(height, "height");
function draw(L, o, Nt, Mo, Ms, Mn, Mt = 1) {
  let ws = font(o);
  if (!ws || !ws.img) {
    return 0;
  }
  Mt = Math.max(1, Math.round(Mt));
  let wt = sheet(ws, Mn);
  let we = L.imageSmoothingEnabled;
  L.imageSmoothingEnabled = false;
  let Ao = 0;
  for (let As of String(Ms ?? "")) {
    let An = glyphOf(ws, As);
    if (!An) {
      continue;
    }
    let [At, Ae, ho, hs, hn, ht] = An;
    if (ho > 0 && hs > 0) {
      L.drawImage(wt, At, Ae, ho, hs, Math.round(Nt + (Ao + ht) * Mt), Math.round(Mo), ho * Mt, hs * Mt);
    }
    Ao += hn;
  }
  L.imageSmoothingEnabled = we;
  return Ao * Mt;
}
L2(draw, "draw");
L4();
const I1 = {
  W: 600,
  H: 315,
  out: 2
};
I1.label = "LINK";
I1.file = "link";
const I2 = {
  W: 540,
  H: 540,
  out: 2
};
I2.label = "SQUARE";
I2.file = "square";
const I3 = {
  LINK: I1,
  SQUARE: I2
};
const I7 = {
  x: [32, 128, 224],
  label: 176,
  value: 192,
  w: 88
};
const IL = {
  soul: [336, 250],
  name: [358, 248],
  url: [358, 264]
};
const IW = {
  x: [32, 200, 368],
  label: 176,
  value: 192,
  w: 160
};
const Iq = {
  soul: [336, 250],
  name: [358, 248],
  url: [358, 264]
};
const Ic = {
  verdict: {
    x: 32,
    y: 32,
    w: 536
  },
  subject: {
    x: 32,
    y: 104,
    w: 536
  },
  chapter: {
    x: 32,
    y: 144,
    w: 536
  },
  stats: IW,
  mods: {
    x: 32,
    y: 232,
    w: 300
  },
  seed: {
    x: 32,
    y: 256,
    w: 300
  },
  footer: Iq,
  sparkles: [[520, 48], [484, 270], [536, 176], [456, 112]]
};
const IC = {
  x: [24, 192, 360],
  label: 384,
  value: 400,
  w: 156
};
const IM = {
  soul: [24, 474],
  name: [46, 472],
  url: {
    r: 516,
    y: 472
  }
};
const In = {
  x: [72, 232, 392],
  label: 232,
  value: 248,
  w: 120
};
const Iv = {
  soul: [24, 474],
  name: [46, 472],
  url: {
    r: 516,
    y: 472
  }
};
const IK = {
  verdict: {
    x: 24,
    y: 24,
    w: 492
  },
  subject: {
    x: 24,
    y: 104,
    w: 492
  },
  chapter: {
    x: 24,
    y: 144,
    w: 492
  },
  readout: [24, 192, 516, 320],
  stats: In,
  mods: {
    x: 24,
    y: 352,
    w: 492
  },
  seed: {
    x: 24,
    y: 376,
    w: 492
  },
  footer: Iv,
  fan: {
    x: 24,
    y: 496
  },
  sparkles: [[470, 40], [468, 144], [468, 416], [40, 424]]
};
const IS = {
  x: [336, 432],
  label: 184,
  value: 200,
  w: 88
};
const Iy = {
  soul: [336, 250],
  name: [358, 248],
  url: [358, 264]
};
const ID = {
  x: [24, 192],
  label: 408,
  value: 424,
  w: 156
};
const IB = {
  soul: [24, 474],
  name: [46, 472],
  url: {
    r: 516,
    y: 472
  }
};
const Ix = {
  gap: 16,
  y: 48
};
const IU = {
  x: [32, 160],
  name: 160,
  score: 176,
  time: 216,
  hits: 232,
  w: 120
};
const IP = {
  soul: [336, 250],
  name: [358, 248],
  url: [358, 264]
};
const IF = {
  gap: 16,
  y: 40
};
const Ip = {
  x: [24, 280],
  name: 368,
  score: 384,
  time: 424,
  hits: 440,
  w: 236
};
const q2 = {
  soul: [24, 474],
  name: [46, 472],
  url: {
    r: 516,
    y: 472
  }
};
var q4 = I3;
var frameOf = L2((L, o) => ({
  frame: [8, 8, L - 9, o - 9],
  inner: [24, 24, L - 25, o - 25]
}), "frameOf");
var q6 = {
  C1: {
    LINK: {
      ...frameOf(600, 315),
      verdict: {
        x: 32,
        y: 32,
        w: 280
      },
      subject: {
        x: 32,
        y: 104,
        w: 280
      },
      chapter: {
        x: 32,
        y: 144,
        w: 280
      },
      stats: I7,
      mods: {
        x: 32,
        y: 232,
        w: 280
      },
      seed: {
        x: 32,
        y: 256,
        w: 280
      },
      picture: [336, 32, 568, 232],
      footer: IL,
      sparkles: [[536, 266], [300, 40], [540, 36], [288, 152]],
      nomap: Ic
    },
    SQUARE: {
      ...frameOf(540, 540),
      verdict: {
        x: 24,
        y: 24,
        w: 492
      },
      subject: {
        x: 24,
        y: 96,
        w: 300
      },
      chapter: {
        r: 516,
        y: 104,
        w: 180
      },
      picture: [94, 144, 446, 368],
      stats: IC,
      mods: {
        x: 24,
        y: 440,
        w: 300
      },
      seed: {
        r: 516,
        y: 440,
        w: 180
      },
      footer: IM,
      fan: {
        x: 24,
        y: 496
      },
      sparkles: [[470, 40], [40, 184], [468, 312], [40, 336]],
      nomap: IK
    }
  },
  C2: {
    LINK: {
      ...frameOf(600, 315),
      picture: [32, 32, 296, 272],
      cell: 28,
      gap: 6,
      title: {
        x: 336,
        y: 32,
        w: 232
      },
      mode: {
        x: 336,
        y: 72,
        w: 232
      },
      verdict: {
        x: 336,
        y: 104,
        w: 232
      },
      stats: IS,
      footer: Iy,
      sparkles: [[540, 44], [536, 266], [520, 192]]
    },
    SQUARE: {
      ...frameOf(540, 540),
      title: {
        x: 24,
        y: 24,
        w: 360
      },
      mode: {
        x: 24,
        y: 64,
        w: 360
      },
      verdict: {
        r: 516,
        y: 24,
        w: 200
      },
      picture: [94, 104, 446, 392],
      cell: 40,
      gap: 8,
      stats: ID,
      footer: IB,
      fan: {
        x: 24,
        y: 496
      },
      sparkles: [[40, 128], [472, 380], [472, 136]]
    }
  },
  C3: {
    LINK: {
      ...frameOf(600, 315),
      verdict: {
        x: 32,
        y: 32,
        w: 180
      },
      result: Ix,
      subject: {
        x: 32,
        y: 104,
        w: 280
      },
      mods: {
        x: 32,
        y: 144,
        w: 280
      },
      cols: IU,
      seed: {
        x: 32,
        y: 256,
        w: 280
      },
      picture: [336, 32, 568, 232],
      footer: IP,
      sparkles: [[536, 266], [296, 208], [540, 36], [300, 40], [176, 270]]
    },
    SQUARE: {
      ...frameOf(540, 540),
      verdict: {
        x: 24,
        y: 24,
        w: 300
      },
      result: IF,
      subject: {
        x: 24,
        y: 96,
        w: 492
      },
      mods: {
        x: 24,
        y: 136,
        w: 492
      },
      picture: [94, 160, 446, 360],
      cols: Ip,
      seed: {
        r: 516,
        y: 440,
        w: 200
      },
      footer: q2,
      fan: {
        x: 24,
        y: 496
      },
      sparkles: [[40, 176], [472, 300], [470, 96]]
    }
  }
};
L4();
var q7 = 18000;
var q8 = 1900;
function vput(L, o) {
  for (o = Math.max(0, Math.floor(o)) >>> 0; o >= 128;) {
    L.push(o & 127 | 128);
    o >>>= 7;
  }
  L.push(o);
}
L2(vput, "vput");
function vget(L, o) {
  let Me = 0;
  let wo = 0;
  let ws = 0;
  let wn;
  do {
    if (o.i >= L.length) {
      throw new Error("inputs truncated");
    }
    if (++ws > 5) {
      throw new Error("varint too long");
    }
    wn = L[o.i++];
    Me += (wn & 127) * 2 ** wo;
    wo += 7;
  } while (wn & 128);
  return Me;
}
L2(vget, "vget");
var pack21 = L2(L => L & 127 | (L >>> 8 & 127) << 7 | (L >>> 16 & 127) << 14, "pack21");
var unpack21 = L2(L => L & 127 | (L >>> 7 & 127) << 8 | (L >>> 14 & 127) << 16, "unpack21");
function pack(L, o = L ? L.length : 0) {
  o = Math.min(o | 0, L ? L.length : 0);
  if (o > q7) {
    throw new Error("too long for a link");
  }
  let Ms = [];
  for (let wo = 0; wo < o;) {
    let ws = pack21(L[wo] >>> 0);
    let wn = 1;
    while (wo + wn < o && pack21(L[wo + wn] >>> 0) === ws) {
      wn++;
    }
    Ms.push(ws, wn);
    wo += wn;
  }
  let Mt = [];
  vput(Mt, o);
  vput(Mt, Ms.length / 2);
  for (let wt = 0; wt < Ms.length; wt++) {
    vput(Mt, Ms[wt]);
  }
  vput(Mt, 0);
  return Uint8Array.from(Mt);
}
L2(pack, "pack");
function unpack(L) {
  const Nt = {
    i: 0
  };
  let Mo = Nt;
  let Ms = vget(L, Mo);
  let Mn = vget(L, Mo);
  if (Ms > q7 || Mn > Ms) {
    throw new Error("inputs out of range");
  }
  let Mt = new Uint32Array(Ms);
  let Me = 0;
  for (let we = 0; we < Mn; we++) {
    let wa = vget(L, Mo);
    let Ao = vget(L, Mo);
    if (wa > 2097151 || Ao < 1 || Me + Ao > Ms) {
      throw new Error("inputs out of range");
    }
    Mt.fill(unpack21(wa), Me, Me + Ao);
    Me += Ao;
  }
  if (Me !== Ms) {
    throw new Error("inputs are " + Me + " frames, header says " + Ms);
  }
  let wo = vget(L, Mo);
  for (let As = 0; As < wo; As++) {
    let An = vget(L, Mo);
    if (Mo.i >= L.length) {
      throw new Error("inputs truncated");
    }
    let At = L[Mo.i++] & 127;
    if (An >= Ms) {
      throw new Error("tap out of range");
    }
    Mt[An] |= At << 8 | At << 16;
  }
  if (Mo.i !== L.length) {
    throw new Error("trailing input bytes");
  }
  return Mt;
}
L2(unpack, "unpack");
async function measure(L, o) {
  let Mo = v("runs");
  let Ms = pack(L);
  let Mn = 0;
  for (let we = 1; we < L.length; we++) {
    if (pack21(L[we]) !== pack21(L[we - 1])) {
      Mn++;
    }
  }
  let Mt = 0;
  if (Mo && Mo.encodeCode && o) {
    const wa = {
      spec: o
    };
    wa.outcome = "win";
    wa.score = 99990;
    wa.hits = 3;
    wa.frames = L.length;
    wa.endSig = 4294967295;
    let Ao = wa;
    Mt = ("https://deltarunesim.com/#share=" + (await Mo.encodeCode(Ao, {
      inputs: Ms,
      sign: "ABCDEFGHIJKL"
    }))).length;
  }
  let wo = unpack(Ms);
  let ws = wo.length === L.length;
  for (let As = 0; ws && As < wo.length; As++) {
    if ((wo[As] & 8355711) !== (L[As] & 8355711)) {
      ws = false;
    }
  }
  return {
    frames: L.length,
    changes: Mn,
    taps: countTaps(Ms),
    bytes: Ms.length,
    chars: Mt,
    roundTrip: ws
  };
}
L2(measure, "measure");
function countTaps(L) {
  let Mn = {
    i: 0
  };
  vget(L, Mn);
  let Mt = vget(L, Mn);
  for (let wo = 0; wo < Mt * 2; wo++) {
    vget(L, Mn);
  }
  return vget(L, Mn);
}
L2(countTaps, "countTaps");
var status = L2(() => "score only", "status");
function check(L, o, Nt) {
  if (typeof Nt == "function") {
    Nt("score only");
  }
  return null;
}
L2(check, "check");
const qm = {
  pack: pack,
  unpack: unpack,
  measure: measure,
  status: status,
  check: check,
  MAX_LINK: q8,
  MAX_FRAMES: q7
};
f("ghostlink", qm);
var qs = "sharecard";
var qY = y;
var qC = "#261630";
var qT = [10, 7];
var qg = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
var qN = 48;
var qM = "deltarunesim.com";
var qw = "DELTARUNE FIGHT SIMULATOR";
var qA = "Fan-made. DELTARUNE and UNDERTALE (C) Toby Fox.";
var qh = ["C1", "C2", "C3"];
function fitText(L, o, Nt, Mo) {
  let Me = Nt === "fnt_mainbig" ? [["fnt_mainbig", Mo], ["fnt_mainbig", 1], ["fnt_main", 1]] : [[Nt, Mo]];
  let wo = new Set();
  for (let [wa, Ao] of Me) {
    let As = wa + Ao;
    if (wo.has(As)) {
      continue;
    }
    wo.add(As);
    let An = clean(L, wa);
    if (width(wa, An) * Ao <= o) {
      return {
        font: wa,
        k: Ao,
        str: An,
        fell: wa !== Nt || Ao !== Mo,
        clipped: false
      };
    }
  }
  let ws = Me[Me.length - 1][0];
  let wn = Me[Me.length - 1][1];
  let wt = clean(L, ws);
  while (wt.length > 1 && width(ws, wt) * wn > o) {
    wt = wt.slice(0, -1);
  }
  return {
    font: ws,
    k: wn,
    str: wt.replace(/\s+$/, ""),
    fell: true,
    clipped: true
  };
}
L2(fitText, "fitText");
var qn = L2((L, o, Nt = 1) => width(L, clean(o, L)) * Nt, "tw");
var qt = L2((L, o = 1) => height(L) * o, "th");
var Card = class ft {
  constructor(L, o) {
    this.fmt = L;
    this.L = o;
    this.ops = [];
  }
  text(L, o, Nt, Mo = "fnt_main", Ms = 1, Mn = "text", Mt = {}) {
    if (o == null || o === "") {
      return null;
    }
    let ws = L.w || (L.r != null ? L.r - 24 : this.fmt.W - 32 - L.x);
    let wn = Mt.nofit ? {
      font: Mo,
      k: Ms,
      str: clean(o, Mo),
      fell: false,
      clipped: false
    } : fitText(String(o), ws, Mo, Ms);
    let wt = width(wn.font, wn.str) * wn.k;
    let we = qt(wn.font, wn.k);
    let wa = L.r != null ? L.r - wt : L.x;
    let Ao = {
      t: "text",
      role: Mn,
      font: wn.font,
      k: wn.k,
      str: wn.str,
      col: Nt,
      x: wa,
      y: L.y,
      rect: [wa, L.y, wt, we],
      fell: wn.fell,
      clipped: wn.clipped,
      want: {
        font: Mo,
        k: Ms
      }
    };
    this.ops.push(Ao);
    return Ao;
  }
  panel(L, o = "panel") {
    let Me = {
      t: "panel",
      role: o,
      rect: [L[0], L[1], L[2] - L[0], L[3] - L[1]]
    };
    this.ops.push(Me);
    return Me;
  }
  add(L) {
    this.ops.push(L);
    return L;
  }
};
L2(Card, "Card");
var qu = Card;
function ground(L, o, Nt) {
  L.fillStyle = "#000000";
  L.fillRect(0, 0, o, Nt);
}
L2(ground, "ground");
function grid(L, o, Nt, Mo, Ms, Mn = "outside") {
  let [wn, wt, we, wa] = Mo.inner;
  let Ao = L.getImageData(0, 0, o, Nt);
  let As = Ao.data;
  let An = parseInt(qC.slice(1, 3), 16);
  let At = parseInt(qC.slice(3, 5), 16);
  let Ae = parseInt(qC.slice(5, 7), 16);
  let ho = (hn, ht) => {
    {
      let kt = 1000000000;
      for (let ke of Ms) {
        {
          let fo = Math.max(ke[0] - hn, 0, hn - (ke[0] + ke[2] - 1));
          let fs = Math.max(ke[1] - ht, 0, ht - (ke[1] + ke[3] - 1));
          let fn = Math.max(fo, fs);
          if (fn < kt) {
            kt = fn;
          }
          if (!kt) {
            return 0;
          }
        }
      }
      return kt;
    }
  };
  let hs = (hn, ht) => {
    if (Mn === "inside") {
      if (hn < wn || hn > we || ht < wt || ht > wa) {
        return;
      }
      if (Ms && Ms.length) {
        let kn = ho(hn, ht);
        if (kn === 0 || kn < qN && (qg[(ht & 3) << 2 | hn & 3] + 0.5) / 16 >= kn / qN) {
          return;
        }
      }
    }
    let ko = (ht * o + hn) * 4;
    As[ko] = An;
    As[ko + 1] = At;
    As[ko + 2] = Ae;
    As[ko + 3] = 255;
  };
  for (let hn = qT[0]; hn < o; hn += 20) {
    for (let ht = 0; ht < Nt; ht++) {
      hs(hn, ht);
    }
  }
  for (let he = qT[1]; he < Nt; he += 20) {
    for (let ha = 0; ha < o; ha++) {
      hs(ha, he);
    }
  }
  L.putImageData(Ao, 0, 0);
}
L2(grid, "grid");
function spr(L, o = 0) {
  let Mn = V[L];
  if (Mn && Mn.img && Mn.img[o]) {
    return Mn.img[o];
  } else {
    return null;
  }
}
L2(spr, "spr");
function frame(L, o, Nt, Mo, Ms) {
  const Mn = {
    bXNVw: function (As, An) {
      return As * An;
    },
    XtsXk: function (As, An) {
      return As + An;
    },
    uatXW: function (As, An) {
      return As + An;
    },
    oVhLa: function (As, An) {
      return As < An;
    },
    qVBkH: function (As, An) {
      return As + An;
    },
    loOvd: function (As, An, At) {
      return As(An, At);
    },
    tpaUD: "spr_textbox_topleft",
    ODxHw: function (As, An) {
      return As(An);
    },
    rDQOt: "spr_textbox_top",
    hvOIk: "spr_textbox_left",
    vgYlx: "#000000",
    KTjVi: function (As, An) {
      return As + An;
    },
    Xuraa: function (As, An) {
      return As - An;
    },
    hYQvU: function (As, An) {
      return As - An;
    },
    xGGva: function (As, An) {
      return As - An;
    },
    CIvVG: function (As, An) {
      return As || An;
    },
    CIdrY: function (As, An) {
      return As !== An;
    },
    eMdzc: "RcTIz",
    VfuwB: "rAlGL",
    vWkMX: function (As, An) {
      return As - An;
    },
    hGFnX: function (As, An) {
      return As - An;
    },
    yXMGN: function (As, An) {
      return As + An;
    },
    fvIGr: function (As, An) {
      return As - An;
    },
    iFnVo: function (As, An) {
      return As + An;
    },
    mgkgd: function (As, An) {
      return As + An;
    },
    CySvs: function (As, An) {
      return As - An;
    },
    mPvRq: function (As, An) {
      return As > An;
    },
    QPOUK: function (As, An) {
      return As + An;
    },
    qjGxu: function (As, An, At, Ae, ho, hs, hn, ht) {
      return As(An, At, Ae, ho, hs, hn, ht);
    },
    VqNPe: function (As, An) {
      return As + An;
    },
    UqrZh: function (As, An) {
      return As - An;
    },
    lmlOS: function (As, An) {
      return As > An;
    },
    SeZdy: function (As, An) {
      return As + An;
    },
    SjgBA: function (As, An, At, Ae, ho, hs, hn, ht) {
      return As(An, At, Ae, ho, hs, hn, ht);
    },
    RgmwT: function (As, An) {
      return As - An;
    },
    LbprD: function (As, An, At, Ae, ho, hs, hn, ht) {
      return As(An, At, Ae, ho, hs, hn, ht);
    },
    SpNdv: function (As, An) {
      return As - An;
    },
    HHmkG: function (As, An, At, Ae, ho, hs, hn, ht) {
      return As(An, At, Ae, ho, hs, hn, ht);
    },
    MAdVp: function (As, An) {
      return As - An;
    }
  };
  let Mt = spr("spr_textbox_topleft", 0);
  let Me = spr("spr_textbox_top");
  let wo = spr("spr_textbox_left");
  L.fillStyle = "#000000";
  L.fillRect(o + 5, Nt + 5, Mo - o - 9, Ms - Nt - 9);
  if (Mn.CIvVG(!Mt, !Me) || !wo) {
    {
      L.fillStyle = qY.text;
      L.fillRect(o, Nt, Mo - o + 1, 2);
      L.fillRect(o, Ms - 1, Mo - o + 1, 2);
      L.fillRect(o, Nt, 2, Ms - Nt + 1);
      L.fillRect(Mo - 1, Nt, 2, Ms - Nt + 1);
      return;
    }
  }
  let wt = Mo - o + 1;
  let we = Ms - Nt + 1;
  L.imageSmoothingEnabled = false;
  let Ao = (An, At, Ae, ho, hs, hn, ht) => {
    L.save();
    L.translate(ho + (At < 0 ? hn : 0), hs + (Ae < 0 ? ht : 0));
    L.scale(At, Ae);
    L.drawImage(An, 0, 0, hn, ht);
    L.restore();
  };
  if (wt > 32) {
    L.drawImage(Me, o + 16, Nt, wt - 32, 16);
    Ao(Me, 1, -1, o + 16, Ms - 15, wt - 32, 16);
  }
  if (we > 32) {
    L.drawImage(wo, o, Nt + 16, 16, we - 32);
    Ao(wo, -1, 1, Mo - 15, Nt + 16, 16, we - 32);
  }
  L.drawImage(Mt, o, Nt);
  Ao(Mt, -1, 1, Mo - 15, Nt, 16, 16);
  Ao(Mt, 1, -1, o, Ms - 15, 16, 16);
  Ao(Mt, -1, -1, Mo - 15, Ms - 15, 16, 16);
}
L2(frame, "frame");
function panel(L, o) {
  let [Me, wo, ws, wn] = o;
  L.fillStyle = qY.frame;
  L.fillRect(Me, wo, ws, wn);
  L.fillStyle = qY.hover;
  L.fillRect(Me + 1, wo + 1, ws - 2, wn - 2);
}
L2(panel, "panel");
var qR = null;
function sparkleImg() {
  if (qR) {
    return qR;
  }
  let Nt = spr("spr_diamondbullet");
  if (!Nt) {
    return null;
  }
  let Ms = document.createElement("canvas");
  Ms.width = Nt.width;
  Ms.height = Nt.height;
  let Me = Ms.getContext("2d", {
    willReadFrequently: true
  });
  Me.drawImage(Nt, 0, 0);
  let wo = Me.getImageData(0, 0, Nt.width, Nt.height).data;
  let ws = Nt.width;
  let wn = Nt.height;
  let wt = -1;
  let we = -1;
  for (let As = 0; As < Nt.height; As++) {
    for (let An = 0; An < Nt.width; An++) {
      if (wo[(As * Nt.width + An) * 4 + 3] > 0) {
        if (An < ws) {
          ws = An;
        }
        if (An > wt) {
          wt = An;
        }
        if (As < wn) {
          wn = As;
        }
        if (As > we) {
          we = As;
        }
      }
    }
  }
  if (wt < 0) {
    return null;
  }
  let wa = document.createElement("canvas");
  wa.width = wt - ws + 1;
  wa.height = we - wn + 1;
  let Ao = wa.getContext("2d");
  Ao.imageSmoothingEnabled = false;
  Ao.drawImage(Nt, -ws, -wn);
  qR = wa;
  return qR;
}
L2(sparkleImg, "sparkleImg");
function sparkle(L, o, Nt) {
  let Ms = sparkleImg();
  if (Ms) {
    L.drawImage(Ms, o, Nt);
  }
  if (Ms) {
    return [o, Nt, Ms.width, Ms.height];
  } else {
    return [o, Nt, 0, 0];
  }
}
L2(sparkle, "sparkle");
function soul(L, o, Nt) {
  let Mn = spr("spr_heart", 0);
  if (Mn) {
    L.imageSmoothingEnabled = false;
    L.drawImage(Mn, o, Nt);
  }
}
L2(soul, "soul");
function normLook(L) {
  if (L) {
    if (L.edge && !L.edge.rect && L.inner) {
      return {
        ...L,
        edge: {
          ...L.edge,
          rect: L.inner
        }
      };
    } else {
      return L;
    }
  } else {
    return null;
  }
}
L2(normLook, "normLook");
function heatFit(L, o) {
  let Mn = v("lookback");
  let Mt = o.w * o.cell;
  let Me = o.h * o.cell;
  let wo = 1;
  if (Mn && Mn.fitK) {
    wo = Mn.fitK(o, L[2], L[3], 1);
  } else {
    while (wo < 8 && (Math.ceil(Mt / wo) > L[2] || Math.ceil(Me / wo) > L[3])) {
      wo++;
    }
  }
  let wn = Math.ceil(Mt / wo);
  let wt = Math.ceil(Me / wo);
  return {
    s: 1 / wo,
    k: wo,
    x: Math.round(L[0] + (L[2] - wn) / 2),
    y: Math.round(L[1] + (L[3] - wt) / 2),
    w: wn,
    h: wt
  };
}
L2(heatFit, "heatFit");
function levelsOf(L) {
  let Ms = [];
  for (let Me of L) {
    if (Me > 0) {
      Ms.push(Me);
    }
  }
  Ms.sort((wo, ws) => wo - ws);
  let Mt = wo => Ms.length ? Ms[Math.min(Ms.length - 1, Math.floor(wo * Ms.length))] : 0;
  return [Mt(0.5), Mt(0.75), Mt(0.9), Mt(0.97)];
}
L2(levelsOf, "levelsOf");
var qz = [0, 2, 4, 8, 12];
function drawHeat(L, o, Nt, Mo = {}) {
  let Me = normLook(Nt);
  let wo = v("lookback");
  if (wo && wo.drawHeat) {
    let hn = wo.drawHeat(L, [o[0], o[1], o[0] + o[2], o[1] + o[3]], Me, 1, {
      levels: Mo.reveal,
      crosses: Mo.hits,
      soul: Mo.soul === false ? false : (ht, he, ha) => soul(L, he, ha),
      text: (ht, he, ha, ko, ks) => draw(L, "fnt_main", he, ha, ko, ks, 1)
    });
    if (hn) {
      return {
        x: hn.x,
        y: hn.y,
        w: hn.w,
        h: hn.h,
        s: 1 / (hn.k || 1)
      };
    }
  }
  let ws = heatFit(o, Me);
  let {
    s: wn
  } = ws;
  let wt = Me.cell || 4;
  let we = Mo.reveal ?? 4;
  L.fillStyle = "#000000";
  L.fillRect(ws.x, ws.y, ws.w, ws.h);
  let Ao = levelsOf(Me.dwell);
  let As = ha => ha <= 0 || ha < Ao[0] ? 0 : ha < Ao[1] ? 1 : ha < Ao[2] ? 2 : ha < Ao[3] ? 3 : 4;
  let An = L.getImageData(ws.x, ws.y, ws.w, ws.h);
  let At = An.data;
  for (let ha = 0; ha < ws.h; ha++) {
    let ko = Math.floor(ha / (wt * wn));
    if (!(ko >= Me.h)) {
      for (let ks = 0; ks < ws.w; ks++) {
        let kn = Math.floor(ks / (wt * wn));
        if (kn >= Me.w) {
          continue;
        }
        let kt = Math.min(we, As(Me.dwell[ko * Me.w + kn]));
        if (!kt) {
          continue;
        }
        let ke = ws.x + ks;
        let ka = ws.y + ha;
        if (qg[(ka & 3) << 2 | ke & 3] < qz[kt]) {
          let no = (ha * ws.w + ks) * 4;
          At[no] = 255;
          At[no + 1] = 255;
          At[no + 2] = 255;
          At[no + 3] = 255;
        }
      }
    }
  }
  L.putImageData(An, ws.x, ws.y);
  let Ae = (ns, nn) => [ws.x + Math.round((ns - Me.box[0]) * wn), ws.y + Math.round((nn - Me.box[1]) * wn)];
  if (Me.edge && Me.edge.rect && !Me.boxMoved) {
    let [ns, nn] = Ae(Me.edge.rect[0], Me.edge.rect[1]);
    let [nt, ne] = Ae(Me.edge.rect[2], Me.edge.rect[3]);
    let na = Math.max(1, Math.round((Me.edge.w || 2) * wn));
    L.fillStyle = Me.edge.col || qY.text;
    L.fillRect(ns - na, nn - na, nt - ns + na * 2, na);
    L.fillRect(ns - na, ne, nt - ns + na * 2, na);
    L.fillRect(ns - na, nn, na, ne - nn);
    L.fillRect(nt, nn, na, ne - nn);
  }
  if (Mo.soul !== false) {
    let to = -1;
    let ts = 0;
    for (let tn = 0; tn < Me.dwell.length; tn++) {
      if (Me.dwell[tn] > ts) {
        ts = Me.dwell[tn];
        to = tn;
      }
    }
    if (to >= 0) {
      let tt = Me.box[0] + to % Me.w * wt + wt / 2;
      let te = Me.box[1] + Math.floor(to / Me.w) * wt + wt / 2;
      let [ta, fo] = Ae(tt, te);
      soul(L, Math.round(ta - 8), Math.round(fo - 8));
    }
  }
  let ho = Mo.hits ?? (Me.hits || []).length;
  let hs = [];
  for (let fs of (Me.hits || []).slice(0, ho)) {
    if (fs.x < Me.box[0] || fs.y < Me.box[1] || fs.x >= Me.box[2] || fs.y >= Me.box[3]) {
      continue;
    }
    let fn = hs.find(fa => Math.abs(fa.x - fs.x) <= 6 && Math.abs(fa.y - fs.y) <= 6);
    if (fn) {
      fn.n++;
      continue;
    }
    const fe = {
      x: fs.x,
      y: fs.y,
      n: 1
    };
    hs.push(fe);
  }
  for (let fa of hs) {
    let [uo, us] = Ae(fa.x, fa.y);
    let un = uo - 2;
    let ut = us - 2;
    if (!(uo < ws.x + 2) && !(us < ws.y + 2) && !(uo > ws.x + ws.w - 3) && !(us > ws.y + ws.h - 3)) {
      L.fillStyle = "#000000";
      for (let ua = 0; ua < 5; ua++) {
        L.fillRect(un + ua - 1, ut + ua - 1, 3, 3);
        L.fillRect(un + 4 - ua - 1, ut + ua - 1, 3, 3);
      }
      L.fillStyle = qY.hit;
      for (let uP = 0; uP < 5; uP++) {
        L.fillRect(un + uP, ut + uP, 1, 1);
        L.fillRect(un + 4 - uP, ut + uP, 1, 1);
      }
      if (fa.n > 1) {
        draw(L, "fnt_main", un + 7, ut - 5, "x" + fa.n, qY.hit, 1);
      }
    }
  }
  return ws;
}
L2(drawHeat, "drawHeat");
const qJ = {
  hit: qY.ok
};
qJ.near = qY.select;
qJ.miss = qY.faint;
qJ.unk = qY.faint;
qJ.skip = qY.text;
var qa = qJ;
function ddGridSize(L, o, Nt) {
  let wo = Math.max(1, ...L.map(ws => ws.length));
  return {
    cols: wo,
    w: wo * o + (wo - 1) * Nt,
    h: L.length * o + (L.length - 1) * Nt
  };
}
L2(ddGridSize, "ddGridSize");
var qV = 6;
function padBoard(L) {
  if (L.length <= 1) {
    let Me = (L[0] || []).slice(0, qV);
    while (Me.length < qV) {
      Me.push("empty");
    }
    return [Me];
  }
  let Ms = Math.max(...L.map(wt => wt.length));
  let Mn = L.slice(0, qV).map(wt => wt.slice());
  while (Mn.length < qV) {
    Mn.push(Array(Ms).fill("empty"));
  }
  return Mn;
}
L2(padBoard, "padBoard");
function drawDdGrid(L, o, Nt, Mo, Ms) {
  let ws = ddGridSize(Nt, Mo, Ms);
  let wn = o[0] + Math.floor((o[2] - ws.w) / 2);
  let wt = o[1] + Math.floor((o[3] - ws.h) / 2);
  let we = Math.max(2, Math.round(Mo / 10));
  let wa = Math.floor(Mo / 2);
  Nt.forEach((Ao, As) => Ao.forEach((An, At) => {
    let ko = wn + At * (Mo + Ms);
    let ks = wt + As * (Mo + Ms);
    if (An === "empty") {
      L.fillStyle = qY.faint;
      L.fillRect(ko, ks, Mo, 1);
      L.fillRect(ko, ks + Mo - 1, Mo, 1);
      L.fillRect(ko, ks, 1, Mo);
      L.fillRect(ko + Mo - 1, ks, 1, Mo);
      return;
    }
    L.fillStyle = qa[An] || qY.faint;
    L.fillRect(ko, ks, Mo, Mo);
    if (An === "near") {
      L.fillStyle = "#000000";
      L.fillRect(ko + wa - we, ks + wa - we, we * 2, we * 2);
    } else if (An === "miss" || An === "unk") {
      L.fillStyle = qY.dim;
      L.fillRect(ko + wa - we * 2, ks + wa - Math.floor(we / 2), we * 4, we);
    }
  }));
  return [wn, wt, ws.w, ws.h];
}
L2(drawDdGrid, "drawDdGrid");
function drawScoreBars(L, o, Nt, Mo) {
  let [wo, ws, wn, wt] = o;
  let we = 20;
  let wa = wn - 2 * we;
  let Ao = Math.max(1, Nt.score, Mo.score);
  let As = [[Nt, qY.text], [Mo, qY.dim]];
  let An = 24;
  let At = 40;
  let Ae = ws + Math.floor((wt - (2 * An + At)) / 2);
  As.forEach(([ho, hs], hn) => {
    {
      let ks = Ae + hn * (An + At);
      let kn = Math.max(2, Math.round(wa * (ho.score / Ao)));
      draw(L, "fnt_main", wo + we, ks - 20, ho.name, qY.dim, 1);
      L.fillStyle = "#000000";
      L.fillRect(wo + we, ks, wa, An);
      L.fillStyle = hs;
      L.fillRect(wo + we, ks, kn, An);
    }
  });
}
L2(drawScoreBars, "drawScoreBars");
var qP = L2(L => String(L ?? "").toUpperCase(), "up");
function footer(L, o, Nt) {
  let Me = o.footer;
  const wo = {
    t: "soul",
    role: "footer",
    x: Me.soul[0],
    y: Me.soul[1],
    rect: [Me.soul[0], Me.soul[1], 16, 16]
  };
  L.add(wo);
  L.text({
    x: Me.name[0],
    y: Me.name[1],
    w: 260
  }, qw, qY.text, "fnt_main", 1, "footer");
  let wn = Me.url;
  L.text(Array.isArray(wn) ? {
    x: wn[0],
    y: wn[1],
    w: 260
  } : {
    r: wn.r,
    y: wn.y,
    w: 200
  }, qM, qY.select, "fnt_main", 1, "footer");
  if (Nt && o.fan) {
    L.text({
      x: o.fan.x,
      y: o.fan.y,
      w: L.fmt.W - 48
    }, qA, qY.dim, "fnt_main", 1, "fan");
  }
}
L2(footer, "footer");
function stat(L, o, Nt, Mo, Ms, Mn, Mt) {
  const wo = {
    x: o,
    y: Nt,
    w: Ms
  };
  L.text(wo, qP(Mn), qY.dim, "fnt_main", 1, "label");
  L.text({
    x: o,
    y: Mo,
    w: Ms
  }, Mt, qY.text, "fnt_mainbig", 1, "value");
}
L2(stat, "stat");
function composeC1(L, o) {
  let Mt = !!o.look && !!o.look.w && !!o.look.h;
  let Me = Mt ? L.L : {
    ...L.L,
    ...L.L.nomap
  };
  let wo = o.win ? qY.select : qY.warn;
  let ws = L.text(Me.verdict, o.verdict, wo, "fnt_mainbig", 2, "verdict");
  if (ws && ws.k === 1 && ws.font === "fnt_mainbig") {
    ws.y += 16;
    ws.rect[1] += 16;
  }
  let wn = L.text(Me.subject, qP(o.subject), qY.text, "fnt_mainbig", 1, "subject");
  let wt = Me.chapter.r != null && wn ? {
    ...Me.chapter,
    w: Math.max(40, Me.chapter.r - (wn.rect[0] + wn.rect[2] + 24))
  } : Me.chapter;
  L.text(wt, qP(o.chapter), qY.dim, "fnt_main", 1, "chapter");
  if (!Mt && Me.readout) {
    L.panel(Me.readout, "readout");
  }
  o.stats.slice(0, 3).forEach(([wa, Ao], As) => stat(L, Me.stats.x[As], Me.stats.label, Me.stats.value, Me.stats.w, wa, Ao));
  if (o.mods) {
    let wa = L.text(Me.mods, o.mods, qY.warn, "fnt_main", 1, "mods");
    if (wa && o.mult) {
      L.text({
        x: wa.rect[0] + wa.rect[2] + 8,
        y: Me.mods.y,
        w: 64
      }, o.mult, qY.text, "fnt_main", 1, "mods");
    }
  }
  let we = [o.sign ? "by " + o.sign : "", o.seed != null ? "seed " + o.seed : "", o.date || ""].filter(Boolean).join("   ");
  if (we) {
    L.text(Me.seed, we, qY.dim, "fnt_main", 1, "seed");
  }
  if (Mt) {
    picturePanel(L, L.L.picture, o.look);
  }
  footer(L, Me, true);
  return Me;
}
L2(composeC1, "composeC1");
function composeC2(L, o) {
  let Mo = L.L;
  L.text(Mo.title, o.title, qY.text, "fnt_mainbig", 1, "subject");
  L.text(Mo.mode, qP(o.mode) + (o.sign ? "   by " + o.sign : ""), qY.dim, "fnt_main", 1, "chapter");
  let Mn = L.text(Mo.verdict, o.verdict, o.won ? qY.select : qY.warn, "fnt_mainbig", 2, "verdict");
  if (Mn && Mo.verdict.r != null && Mn.k === 1) {
    Mn.y += 8;
    Mn.rect[1] += 8;
  }
  let Me = Mo.stats;
  (o.stats || [["STREAK", String(o.streak)], ["BEST", String(o.best)]]).slice(0, 2).forEach(([An, At], Ae) => stat(L, Me.x[Ae], Me.label, Me.value, Me.w, An, At));
  let ws = padBoard(o.rows || []);
  let wn = rectOf(Mo.picture);
  let wt = ddGridSize(ws, Mo.cell, Mo.gap);
  let we = Math.min(wn[2], wt.w + 40);
  let wa = Math.min(wn[3], wt.h + 40);
  let Ao = [wn[0] + Math.floor((wn[2] - we) / 2), wn[1] + Math.floor((wn[3] - wa) / 2), we, wa];
  const As = {
    t: "panel",
    role: "picture",
    rect: Ao
  };
  L.add(As);
  L.add({
    t: "dd",
    role: "dd",
    rows: ws,
    cell: Mo.cell,
    gap: Mo.gap,
    rect: Ao
  });
  footer(L, Mo, true);
  return Mo;
}
L2(composeC2, "composeC2");
function composeC3(L, o) {
  let Mo = L.L;
  let Ms = L.text(Mo.verdict, o.margin, o.won ? qY.select : qY.warn, "fnt_mainbig", 2, "verdict");
  if (Ms) {
    let wt = Ms.rect[0] + Ms.rect[2] + Mo.result.gap;
    if (L.text({
      x: wt,
      y: Ms.k === 2 ? Mo.result.y : Ms.y,
      w: (L.fmt.W === 600 ? 312 : L.fmt.W - 24) - wt
    }, o.result, qY.text, "fnt_mainbig", 1, "subject")) {
      Ms.k;
    }
  }
  let Mn = L.text(Mo.subject, qP(o.subject), qY.text, "fnt_mainbig", 1, "subject");
  if (o.mods) {
    let we = o.mods + "  " + o.mult;
    let wa = Mn ? Mn.rect[0] + Mn.rect[2] + 16 : Mo.subject.x;
    let Ao = Mo.subject.x + Mo.subject.w - wa;
    if (Mn && Mn.font === "fnt_mainbig" && qn("fnt_main", we) <= Ao) {
      L.text({
        x: wa,
        y: Mo.subject.y + 8,
        w: Ao
      }, we, qY.warn, "fnt_main", 1, "mods");
    } else {
      L.text(Mo.mods, we, qY.warn, "fnt_main", 1, "mods");
    }
  }
  let wo = Mo.cols;
  [o.you, o.them].forEach((An, At) => {
    const ht = {
      x: wo.x[At]
    };
    ht.y = wo.name;
    ht.w = wo.w;
    L.text(ht, qP(An.name), qY.dim, "fnt_main", 1, "label");
    L.text({
      x: wo.x[At],
      y: wo.score,
      w: wo.w
    }, An.score, qY.text, "fnt_mainbig", 1, "value");
    L.text({
      x: wo.x[At],
      y: wo.time,
      w: wo.w
    }, An.time, qY.text, "fnt_main", 1, "value");
    L.text({
      x: wo.x[At],
      y: wo.hits,
      w: wo.w
    }, An.hits, qY.text, "fnt_main", 1, "value");
  });
  let wn = [o.sign ? "by " + o.sign : "", o.seed != null ? "seed " + o.seed : ""].filter(Boolean).join("   ");
  if (wn) {
    L.text(Mo.seed, wn, qY.dim, "fnt_main", 1, "seed");
  }
  if (o.look && o.look.w) {
    picturePanel(L, Mo.picture, o.look);
  } else {
    L.panel(Mo.picture, "picture");
    L.add({
      t: "bars",
      role: "bars",
      you: o.bars.you,
      them: o.bars.them,
      rect: rectOf(Mo.picture)
    });
  }
  footer(L, Mo, true);
  return Mo;
}
L2(composeC3, "composeC3");
var rectOf = L2(L => [L[0], L[1], L[2] - L[0], L[3] - L[1]], "rectOf");
var c1 = 12;
function picturePanel(L, o, Nt) {
  let Ms = normLook(Nt);
  let Mn = rectOf(o);
  let Mt = heatFit(inset(Mn, 1), Ms);
  let Me = Math.max(Mn[0], Mt.x - c1);
  let wo = Math.max(Mn[1], Mt.y - c1);
  let ws = Math.min(Mn[0] + Mn[2], Mt.x + Mt.w + c1);
  let wn = Math.min(Mn[1] + Mn[3], Mt.y + Mt.h + c1);
  let wt = [Me, wo, ws - Me, wn - wo];
  const we = {
    t: "panel",
    role: "picture",
    rect: wt
  };
  L.add(we);
  L.add({
    t: "heat",
    role: "heat",
    look: Ms,
    rect: wt
  });
}
L2(picturePanel, "picturePanel");
var inset = L2((L, o) => [L[0] + o, L[1] + o, L[2] - o * 2, L[3] - o * 2], "inset");
function render(L, o, Nt = "LINK", Mo = {}) {
  const Ms = {
    rEjFd: function (hs, hn) {
      return hs > hn;
    },
    gQPei: "textarea",
    IGJlD: "fixed",
    PxoJC: "copy",
    iXVYE: function (hs, hn) {
      return hs + hn;
    },
    KWESk: "sharecard: unknown kind ",
    MmMAV: function (hs, hn) {
      return hs + hn;
    },
    AdxOm: "sharecard: unknown format ",
    wUjkL: function (hs, hn) {
      return hs === hn;
    },
    cDbRJ: function (hs, hn, ht) {
      return hs(hn, ht);
    },
    LMcVS: function (hs, hn) {
      return hs === hn;
    },
    TYuKP: "canvas",
    TnkMu: function (hs, hn, ht, he) {
      return hs(hn, ht, he);
    },
    gLfyU: function (hs, hn, ht, he, ha, ko, ks) {
      return hs(hn, ht, he, ha, ko, ks);
    },
    HnfNl: "outside",
    snPOt: function (hs, hn, ...ht) {
      return hs(hn, ...ht);
    },
    PwQSH: function (hs, hn, ht, he, ha, ko, ks) {
      return hs(hn, ht, he, ha, ko, ks);
    },
    oXmpW: "inside",
    bfMUB: function (hs) {
      return hs();
    },
    DpGSO: function (hs, hn) {
      return hs === hn;
    },
    olQlK: "dvLrJ",
    NYRgE: "iIDAO",
    UhNWs: function (hs, hn) {
      return hs >= hn;
    },
    rnIPY: function (hs, hn, ht) {
      return hs(hn, ht);
    },
    nlrnZ: function (hs, hn) {
      return hs < hn;
    },
    WZqpt: function (hs, hn) {
      return hs > hn;
    },
    aQDwO: function (hs, hn) {
      return hs + hn;
    },
    gdVuh: function (hs, hn) {
      return hs + hn;
    },
    HuguR: "text",
    HnFnJ: function (hs, hn, ht, he, ha, ko, ks, kn) {
      return hs(hn, ht, he, ha, ko, ks, kn);
    },
    rVJWg: "panel",
    Tnfcr: "soul",
    DPDmO: function (hs, hn) {
      return hs === hn;
    },
    mevFH: "heat",
    yBKXJ: function (hs, hn, ht, he, ha) {
      return hs(hn, ht, he, ha);
    },
    Zwmbv: "heatmap",
    LLjgg: "ddgrid",
    GGQGR: function (hs, hn, ht, he, ha, ko) {
      return hs(hn, ht, he, ha, ko);
    },
    EwGvN: function (hs, hn) {
      return hs === hn;
    },
    fLlFJ: "bars"
  };
  if (!qh.includes(L)) {
    throw new Error("sharecard: unknown kind " + L);
  }
  let Mt = q4[Nt];
  if (!Mt) {
    throw new Error("sharecard: unknown format " + Nt);
  }
  let Me = Mo.layout || q6[L][Nt];
  let wo = new qu(Mt, Me);
  let ws = L === "C1" ? composeC1(wo, o) : L === "C2" ? composeC2(wo, o) : composeC3(wo, o);
  let wn = Mo.canvas || document.createElement("canvas");
  wn.width = Mt.W;
  wn.height = Mt.H;
  const we = {
    willReadFrequently: true
  };
  let wa = wn.getContext("2d", we);
  wa.imageSmoothingEnabled = false;
  ground(wa, Mt.W, Mt.H);
  let Ao = wo.ops.map(hs => inflate(hs.rect, hs.t === "text" ? 4 : 2));
  grid(wa, Mt.W, Mt.H, Me, null, "outside");
  Ms.snPOt(frame, wa, ...Me.frame);
  grid(wa, Mt.W, Mt.H, Me, Ao, "inside");
  let As = sparkleImg();
  let An = [];
  for (let [hs, hn] of ws.sparkles || Me.sparkles || []) {
    {
      if (!As || An.length >= 3) {
        break;
      }
      let ha = [hs, hn, As.width, As.height];
      let ko = inflate(ha, 8);
      let [ks, kn, kt, ke] = Me.inner;
      if (!(ha[0] < ks) && !(ha[1] < kn) && !(ha[0] + ha[2] > kt) && !(ha[1] + ha[3] > ke) && !wo.ops.some(ka => ka.rect && ko[0] < ka.rect[0] + ka.rect[2] && ka.rect[0] < ko[0] + ko[2] && ko[1] < ka.rect[1] + ka.rect[3] && ka.rect[1] < ko[1] + ko[3])) {
        An.push(ha);
      }
    }
  }
  let At = An.map(ka => ({
    t: "sparkle",
    role: "sparkle",
    rect: sparkle(wa, ka[0], ka[1])
  }));
  let Ae = [];
  for (let ka of wo.ops) {
    if (ka.t === "text") {
      draw(wa, ka.font, ka.x, ka.y, ka.str, ka.col, ka.k);
    } else if (ka.t === "panel") {
      panel(wa, ka.rect);
    } else if (ka.t === "soul") {
      soul(wa, ka.x, ka.y);
    } else if (ka.t === "heat") {
      let no = drawHeat(wa, inset(ka.rect, 1), ka.look, Mo.heat || {});
      Ae.push({
        role: "heatmap",
        rect: [no.x, no.y, no.w, no.h],
        scale: no.s
      });
    } else if (ka.t === "dd") {
      Ae.push({
        role: "ddgrid",
        rect: drawDdGrid(wa, ka.rect, ka.rows, ka.cell, ka.gap)
      });
    } else if (ka.t === "bars") {
      drawScoreBars(wa, inset(ka.rect, 1), ka.you, ka.them);
      Ae.push({
        role: "bars",
        rect: ka.rect
      });
    }
  }
  wn.parts = [...wo.ops.filter(ns => ns.t !== "heat" && ns.t !== "dd" && ns.t !== "bars").map(ns => ({
    t: ns.t,
    role: ns.role,
    rect: ns.rect,
    font: ns.font,
    k: ns.k,
    str: ns.str,
    fell: ns.fell,
    clipped: ns.clipped,
    want: ns.want
  })), ...At, ...Ae];
  wn.layout = Me;
  wn.kind = L;
  wn.format = Nt;
  return wn;
}
L2(render, "render");
var inflate = L2((L, o) => [L[0] - o, L[1] - o, L[2] + o * 2, L[3] + o * 2], "inflate");
function scaled(L, o = 2) {
  let Mn = document.createElement("canvas");
  Mn.width = L.width * o;
  Mn.height = L.height * o;
  let wo = Mn.getContext("2d");
  wo.imageSmoothingEnabled = false;
  wo.drawImage(L, 0, 0, Mn.width, Mn.height);
  return Mn;
}
L2(scaled, "scaled");
function exportPng(L) {
  return new Promise((Mn, Mt) => {
    try {
      scaled(L, 2).toBlob(we => we ? Mn(we) : Mt(new Error("toBlob gave nothing")), "image/png");
    } catch (An) {
      Mt(An);
    }
  });
}
L2(exportPng, "exportPng");
var canExport = L2(() => {
  try {
    let Mn = document.createElement("canvas");
    Mn.width = Mn.height = 1;
    return typeof Mn.toBlob == "function";
  } catch {
    return false;
  }
}, "canExport");
var fightById = L2(L => typeof L == "string" && Y.find(o => o.id === L) || null, "fightById");
var cL = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
var runsSvc = L2(() => v("runs") || {}, "runsSvc");
var fmtScore = L2(L => runsSvc().fmtScore ? runsSvc().fmtScore(L) : String(Math.round(L || 0)), "fmtScore");
var fmtTime = L2(L => runsSvc().fmtTime ? runsSvc().fmtTime(L) : String(L), "fmtTime");
var utcDay = L2(() => new Date().toISOString().slice(0, 10), "utcDay");
function whereOf(L) {
  if (!L) {
    return "";
  }
  if (L.mod) {
    return "MOD FIGHT";
  }
  if (L.custom || L.customEncounter) {
    return "CUSTOM BOARD";
  }
  let Mn = L.area ? String(L.area) : "";
  if (L.game === "undertale") {
    return "UNDERTALE" + (Mn && !/^undertale$/i.test(Mn) ? "  " + Mn : "");
  } else {
    return (L.chapter != null ? "CH." + L.chapter : "") + (Mn ? "  " + Mn : "");
  }
}
L2(whereOf, "whereOf");
function verdictOf(L) {
  if (typeof L.verdict == "string" && L.verdict) {
    return L.verdict;
  }
  let Mo = L.spec || {};
  let Ms = (Mo.fights || []).length;
  let Mn = (L.fights || []).filter(wo => wo.outcome === "win").length;
  if (L.outcome === "lose" || L.over) {
    if (Ms > 1) {
      return "RUN OVER " + Mn + "/" + Ms;
    } else {
      return "RUN OVER";
    }
  }
  if (L.outcome === "quit") {
    return "RUN";
  }
  if (Mo.kind === "daily") {
    let wo = Mo.date || utcDay();
    return "DAILY " + cL[Number(wo.slice(5, 7)) - 1] + " " + Number(wo.slice(8, 10));
  }
  if (Mo.kind === "draft") {
    return "DRAFT CLEAR";
  } else if (Mo.kind === "playlist") {
    return "PLAYLIST CLEAR";
  } else if (Mo.kind === "gauntlet") {
    return "GAUNTLET CLEAR";
  } else if (L.hits) {
    return "YOU WON";
  } else {
    return "NO HIT";
  }
}
L2(verdictOf, "verdictOf");
var isWin = L2(L => L.outcome === "win" || L.outcome === "done", "isWin");
function subjectOf(L) {
  let Nt = L.spec && L.spec.fights || [];
  let Mo = fightById(Nt[0]);
  let Ms = qP(Mo && (Mo.name || Mo.id) || Nt[0] || "RUN");
  if (Nt.length > 1) {
    return Ms + " +" + (Nt.length - 1);
  } else {
    return Ms;
  }
}
L2(subjectOf, "subjectOf");
function chapterOf(L) {
  let Mo = L.spec || {};
  let Ms = Mo.fights || [];
  if (Ms.length > 1) {
    return qP(Mo.kind === "draft" ? "DRAFT" : Mo.kind === "playlist" ? "PLAYLIST" : Mo.kind) + "  " + Ms.length + " FIGHTS";
  } else {
    return whereOf(fightById(Ms[0]));
  }
}
L2(chapterOf, "chapterOf");
function slugOf(L) {
  let Mn = verdictOf(L);
  if (L.race) {
    return "challenge";
  } else if (Mn === "NO HIT") {
    return "nohit";
  } else if (Mn === "YOU WON") {
    return "win";
  } else {
    return Mn.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 16) || "run";
  }
}
L2(slugOf, "slugOf");
function fileOf(L) {
  if (!L.spec) {
    let Mt = plainOf(L, {});
    let Me = L.plain && L.plain.id;
    return "drsim_" + (Me && /^[a-z]{1,16}$/.test(Me) ? Me : Mt.fight && /^[a-z0-9_]{1,32}$/.test(Mt.fight.id) ? Mt.fight.id : "fight") + "_" + (Mt.data.verdict.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 16) || "result") + ".png";
  }
  let Mn = L.spec && L.spec.fights || [];
  return "drsim_" + (Mn.length === 1 && /^[a-z0-9_]{1,32}$/.test(Mn[0]) ? Mn[0] : L.spec && /^[a-z]+$/.test(L.spec.kind) ? L.spec.kind : "run") + "_" + slugOf(L) + ".png";
}
L2(fileOf, "fileOf");
function plainOf(L, o) {
  let Mt = S || {};
  let Me = L.fight || Mt.fight || null;
  let wo = L.frames ?? Math.max(0, (Mt.endFrame || 0) - (Mt.startFrame || 0));
  let ws = L.hits ?? Mt.hits | 0;
  let wn = qP(L.card && L.card.title || L.verdict || (ws ? "YOU WON" : "NO HIT"));
  let wt = L.look && L.look.w && L.look.h && L.look.dwell ? L.look : null;
  let we = L.plain && typeof L.plain == "object" ? L.plain : null;
  return {
    kind: "C1",
    data: {
      verdict: wn,
      win: !/OVER|LOST/.test(wn),
      subject: qP(we && we.subject ? we.subject : Me && (Me.name || Me.id) || "FIGHT"),
      chapter: we && we.chapter != null ? qP(we.chapter) : whereOf(Me),
      stats: [["TIME", fmtTime(wo)], ["HITS", String(ws)]],
      mods: "",
      mult: "",
      seed: null,
      date: o.date || utcDay(),
      look: wt,
      sign: cleanSign(o.sign)
    },
    fight: Me,
    hits: ws,
    frames: wo
  };
}
L2(plainOf, "plainOf");
function cardOf(L, o = {}) {
  if (!L.spec) {
    return plainOf(L, o);
  }
  let Mt = runsSvc();
  let Me = Mt.modsText ? Mt.modsText(L.modsPlayed || L.spec && L.spec.mods || {}) : "";
  let wo = Me && Mt.multText ? Mt.multText(L.mult || 1) : "";
  let ws = L.look && L.look.w && L.look.h && L.look.dwell ? L.look : null;
  let wn = cleanSign(o.sign);
  if (L.race) {
    let wt = L.race.margin | 0;
    let we = L.race.sign || "THEM";
    return {
      kind: "C3",
      data: {
        margin: (wt > 0 ? "+" : wt < 0 ? "-" : "") + fmtScore(Math.abs(wt)),
        result: wt > 0 ? "YOU WIN" : wt < 0 ? "THEY WIN" : "A TIE",
        won: wt >= 0,
        subject: subjectOf(L),
        mods: Me,
        mult: wo,
        you: {
          name: "YOU",
          score: fmtScore(L.score),
          time: fmtTime(L.frames),
          hits: plural(L.hits, "hit")
        },
        them: {
          name: we,
          score: fmtScore(L.race.them),
          time: L.race.frames != null ? fmtTime(L.race.frames) : "",
          hits: L.race.hits != null ? plural(L.race.hits, "hit") : ""
        },
        seed: L.spec ? L.spec.seed : null,
        look: ws,
        sign: wn,
        bars: {
          you: {
            name: "YOU",
            score: L.score | 0
          },
          them: {
            name: we,
            score: L.race.them | 0
          }
        }
      }
    };
  }
  return {
    kind: "C1",
    data: {
      verdict: verdictOf(L),
      win: isWin(L) && !L.over,
      subject: subjectOf(L),
      chapter: chapterOf(L),
      stats: [["SCORE", fmtScore(L.score)], ["TIME", fmtTime(L.frames)], ["HITS", String(L.hits | 0)]],
      mods: Me,
      mult: wo,
      seed: L.spec ? L.spec.seed : null,
      date: L.spec && L.spec.date || o.date || utcDay(),
      look: ws,
      sign: wn
    }
  };
}
L2(cardOf, "cardOf");
var plural = L2((L, o) => (L | 0) + " " + o + ((L | 0) === 1 ? "" : "s"), "plural");
var cleanSign = L2(L => clean(String(L || "").toUpperCase().replace(/[^A-Z0-9 _-]/g, "").slice(0, 12), "fnt_main").replace(/^\s+|\s+$/g, ""), "cleanSign");
function copyLineOf(L, o = {}) {
  let Mo = runsSvc();
  if (!L.spec) {
    let Ao = plainOf(L, o);
    return {
      text: ["DELTARUNE SIM", Ao.data.subject, Ao.data.verdict, fmtTime(Ao.frames), plural(Ao.hits, "hit"), "https://" + qM].join(" - "),
      link: "",
      why: "not a run"
    };
  }
  let Me = cardOf(L, o);
  let wo = Me.data;
  let ws = wo.mods ? " (" + wo.mult + " " + wo.mods + ")" : "";
  let wn = Me.kind === "C3" ? "vs " + wo.them.name + " " + wo.margin : wo.verdict;
  let wt = ["DELTARUNE SIM", wo.subject, wn || verdictOf(L), fmtScore(L.score) + ws];
  let we = "";
  let wa = "";
  try {
    {
      wa = Mo.canLink ? Mo.canLink(L) : "no runs";
      if (!wa) {
        we = "https://" + qM + "/#share=" + Mo.encodeCodeSync(L, {
          sign: cleanSign(o.sign)
        }).toUpperCase();
      }
    }
  } catch (As) {
    wa = As.message || "no link";
    we = "";
  }
  if (we.length > 1900) {
    we = "";
  }
  return {
    text: wt.join(" - ") + (we ? " - " + we : ""),
    link: we,
    why: wa
  };
}
L2(copyLineOf, "copyLineOf");
const cw = {
  size: 342,
  sign: 362,
  buttons: 386
};
var cA = "share:view";
var ch = [24, 24, 616, 456];
var ck = [12, 12, 628, 468];
var cn = 20;
var ct = 18;
var cf = 44;
var cu = 124;
var cv = 26;
var cZ = cw;
var cK = 408;
var ce = 430;
var cQ = ["size", "sign", "buttons"];
var cR = null;
var host = L2(() => u() || {}, "host");
var motion = L2(() => {
  let Ms = host().cfg;
  return !Ms || Ms.uimotion !== false;
}, "motion");
var sfx = L2((L, o) => {
  try {
    let Me = host().cfg;
    if (!Me || Me.audio !== false) {
      x(L, o != null ? {
        volume: o
      } : undefined);
    }
  } catch {}
}, "sfx");
var outCubic = L2(L => 1 - Math.pow(1 - Math.max(0, Math.min(1, L)), 3), "outCubic");
var hovering = L2((L, o, Nt, Mo) => c && c.kind === "mouse" && c.inside && c.x >= L && c.y >= o && c.x < L + Nt && c.y < o + Mo, "hovering");
var signPref = L2(() => cleanSign(Z("share", "name", "")), "signPref");
function canShareFiles() {
  try {
    return !!A() && !!navigator.canShare && typeof File !== "undefined" && !!navigator.canShare({
      files: [new File([new Uint8Array(1)], "x.png", {
        type: "image/png"
      })]
    });
  } catch {
    return false;
  }
}
L2(canShareFiles, "canShareFiles");
function view(L, o = {}) {
  if (!L || !L.spec && !L.card) {
    R("Nothing to share yet", {
      kind: "warn"
    });
    return false;
  } else {
    if (!L.spec) {
      L = {
        ...L,
        fight: L.fight || S && S.fight,
        hits: L.hits ?? S.hits,
        frames: L.frames ?? Math.max(0, (S.endFrame || 0) - (S.startFrame || 0))
      };
    }
    return openView({
      kind: "run",
      result: L,
      grow: o.grow !== false,
      copyFirst: !!o.copyFirst
    });
  }
}
L2(view, "view");
function openStandalone(L, o) {
  if (L !== "darkdle" || !o || !o.card) {
    return false;
  } else {
    return openView({
      kind: "darkdle",
      data: o,
      grow: false,
      copyFirst: true
    });
  }
}
L2(openStandalone, "openStandalone");
function openView(L) {
  cR = {
    src: L,
    fmt: Z("share", "size", "LINK") === "SQUARE" ? "SQUARE" : "LINK",
    sel: 2,
    btn: L.copyFirst ? 1 : 0,
    typing: false,
    text: "",
    sign: signPref(),
    frame: 0,
    buf: 4,
    cv: null,
    key: "",
    rects: [],
    grow: L.grow && motion() ? 0 : 4,
    line: null,
    err: ""
  };
  g({
    id: cA,
    owner: qs,
    draw: drawView,
    step: stepView,
    onKey: keyView,
    onPointer: pointerView,
    touchRows: touchView,
    onClose: () => {
      if (cR && cR.typing) {
        stopSign(false);
      }
      cR = null;
    }
  });
  sfx("snd_menumove");
  return true;
}
L2(openView, "openView");
var closeView = L2(() => {
  M(cA);
  sfx("snd_menumove");
}, "closeView");
function cardNow() {
  let o = cR.fmt + "|" + cR.sign;
  if (cR.key === o) {
    return cR.cv;
  }
  try {
    if (cR.src.kind === "run") {
      let Mn = cardOf(cR.src.result, {
        sign: cR.sign
      });
      cR.cv = render(Mn.kind, Mn.data, cR.fmt);
    } else {
      cR.cv = render("C2", {
        ...cR.src.data.card,
        sign: cR.sign
      }, cR.fmt);
    }
    cR.err = "";
  } catch (Mt) {
    console.error("[sharecard] render failed", Mt);
    cR.cv = null;
    cR.err = "This card could not be drawn.";
  }
  cR.key = o;
  cR.line = null;
  return cR.cv;
}
L2(cardNow, "cardNow");
function lineNow() {
  if (!cR.line) {
    if (cR.src.kind === "darkdle") {
      cR.line = {
        text: cR.src.data.text || "",
        link: "",
        why: ""
      };
    } else {
      cR.line = copyLineOf(cR.src.result, {
        sign: cR.sign
      });
    }
  }
  return cR.line;
}
L2(lineNow, "lineNow");
var fileNow = L2(() => cR.src.kind === "run" ? fileOf(cR.src.result) : cR.src.data.file || "drsim_darkdle.png", "fileNow");
var saveLabel = L2(() => canShareFiles() ? "SHARE..." : "SAVE IMAGE", "saveLabel");
function greyLine() {
  let Nt = cQ[cR.sel];
  if (cR.typing) {
    return "Letters, numbers, space, - and _. ENTER keeps it.";
  } else if (cR.err) {
    return cR.err;
  } else if (Nt === "size") {
    if (cR.fmt === "LINK") {
      return "LINK: 1200 x 630, the shape chats and posts show.";
    } else {
      return "SQUARE: 1080 x 1080, for feeds.";
    }
  } else if (Nt === "sign") {
    if (cR.sign) {
      return "Your name on the card" + (cR.src.kind === "run" ? " and in the link." : ".");
    } else {
      return "No name on the card. Z types one.";
    }
  } else if (cR.btn === 0) {
    if (canExport()) {
      if (canShareFiles()) {
        return "Shares the card and the line.";
      } else {
        return "Saves the card as a PNG.";
      }
    } else {
      return "This browser can't save images from the page.";
    }
  } else if (cR.src.kind === "darkdle") {
    return "The DARKDLE grid.";
  } else if (lineNow().link) {
    return "The line and the challenge link.";
  } else {
    return "The line only - this run can't be a link.";
  }
}
L2(greyLine, "greyLine");
async function save() {
  if (!canExport()) {
    sfx("snd_error");
    return;
  }
  let Nt = cardNow();
  if (!Nt) {
    sfx("snd_error");
    return;
  }
  let Ms = fileNow();
  let Mn;
  try {
    Mn = await exportPng(Nt);
  } catch {
    R("This browser can't save images from the page.", {
      kind: "error"
    });
    return;
  }
  if (canShareFiles()) {
    try {
      await navigator.share({
        files: [new File([Mn], Ms, {
          type: "image/png"
        })],
        text: lineNow().text
      });
      sfx("snd_select");
      return;
    } catch (ws) {
      if (ws && ws.name === "AbortError") {
        return;
      }
    }
  }
  const Me = {
    kind: "ok"
  };
  if (Q(Ms, Mn, "image/png")) {
    R("Saved " + Ms, Me);
    sfx("snd_select");
  }
}
L2(save, "save");
function copyText(L) {
  const Nt = {
    kind: "info",
    ms: 9000
  };
  let Ms = () => {
    const wo = {
      kind: "ok"
    };
    R("Copied", wo);
    sfx("snd_select");
  };
  let Mn = () => R(L, Nt);
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(L).then(Ms, Mn);
      return;
    }
  } catch {}
  Mn();
}
L2(copyText, "copyText");
function press(L) {
  cR.sel = 2;
  cR.btn = L;
  if (L === 0) {
    save();
  } else {
    copyText(lineNow().text);
  }
}
L2(press, "press");
var otherFmt = L2(() => cR.fmt === "LINK" ? "SQUARE" : "LINK", "otherFmt");
function setFmt(L) {
  if (L !== cR.fmt) {
    cR.fmt = L;
    K("share", "size", L);
    sfx("snd_menumove");
  }
}
L2(setFmt, "setFmt");
function startSign() {
  cR.typing = true;
  cR.text = cR.sign;
  O.textFocus = true;
  b();
  P();
  m();
  sfx("snd_select");
}
L2(startSign, "startSign");
function stopSign(L) {
  cR.typing = false;
  cR.buf = 2;
  O.textFocus = false;
  s();
  b();
  P();
  if (L) {
    cR.sign = cleanSign(cR.text);
    K("share", "name", cR.sign);
  }
}
L2(stopSign, "stopSign");
function stepView() {
  if (!cR) {
    return;
  }
  cR.frame++;
  if (cR.grow < 4) {
    cR.grow++;
  }
  if (cR.buf > 0) {
    cR.buf--;
    b();
    P();
    return;
  }
  if (cR.typing && !O.textFocus) {
    stopSign(true);
    return;
  }
  if (cR.typing) {
    let wo = b().join("").toUpperCase().replace(/[^A-Z0-9 _-]/g, "");
    let ws = P();
    if (wo) {
      cR.text = (cR.text + wo).slice(0, 12);
    }
    for (let wn = 0; wn < ws; wn++) {
      cR.text = cR.text.slice(0, -1);
    }
    return;
  }
  let Mo = cQ[cR.sel];
  if (L0() && cR.sel > 0) {
    cR.sel--;
    sfx("snd_menumove");
    return;
  }
  if (L1() && cR.sel < cQ.length - 1) {
    cR.sel++;
    sfx("snd_menumove");
    return;
  }
  if (d() || p()) {
    if (Mo === "size") {
      setFmt(otherFmt());
    } else if (Mo === "buttons") {
      cR.btn = 1 - cR.btn;
      sfx("snd_menumove");
    }
    return;
  }
  if (G()) {
    if (Mo === "size") {
      setFmt(otherFmt());
    } else if (Mo === "sign") {
      startSign();
    } else {
      press(cR.btn);
    }
    return;
  }
  if (F()) {
    closeView();
  }
}
L2(stepView, "stepView");
function keyView(L, o) {
  if (cR) {
    if (cR.typing) {
      if (o === "Enter") {
        stopSign(true);
        sfx("snd_select");
        return true;
      } else if (o === "Escape") {
        stopSign(false);
        sfx("snd_menumove");
        return true;
      } else {
        return false;
      }
    } else if (o === "Escape") {
      closeView();
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
L2(keyView, "keyView");
function pointerView(L) {
  if (!cR) {
    return true;
  }
  let Ms = cR.rects.find(Mt => L.x >= Mt.x && L.y >= Mt.y && L.x < Mt.x + Mt.w && L.y < Mt.y + Mt.h);
  if (Ms) {
    Ms.fn();
    return true;
  } else {
    if (L.x < ck[0] || L.x > ck[2] || L.y < ck[1] || L.y > ck[3]) {
      closeView();
    }
    return true;
  }
}
L2(pointerView, "pointerView");
function chipsRow(L, o, Nt, Mo) {
  for (let [wo, ws] of Mo) {
    o += D(L, o, Nt, wo) + 4;
    if (ws) {
      L.draw_text(o, Nt + 1, ws, qY.dim);
      o += L.string_width(ws, "fnt_main") + 14;
    }
  }
  return o;
}
L2(chipsRow, "chipsRow");
function drawView(L) {
  const o = {
    RLVTg: function (As, An) {
      return As === An;
    },
    zXicB: "spr_heart",
    LmcwR: function (As, An) {
      return As + An;
    },
    XXnuz: function (As, An) {
      return As(An);
    },
    PaIhy: function (As, An) {
      return As !== An;
    },
    pGAyq: function (As, An, At) {
      return As(An, At);
    },
    LWGbb: function (As, An) {
      return As + An;
    },
    ZTDep: function (As, An, At, Ae, ho) {
      return As(An, At, Ae, ho);
    },
    igadB: "fnt_main",
    ixnkK: function (As, An) {
      return As !== An;
    },
    wDNto: "oqdfj",
    wdGIi: function (As) {
      return As();
    },
    lHqTP: function (As, An) {
      return As && An;
    },
    rqZQN: function (As, An) {
      return As === An;
    },
    ChEHX: "aghYZ",
    xVltK: function (As, An) {
      return As(An);
    },
    ScUVy: "buttons",
    MzWdH: function (As) {
      return As();
    },
    VGuSm: function (As, An, At, Ae, ho) {
      return As(An, At, Ae, ho);
    },
    YyXYW: function (As, An) {
      return As - An;
    },
    ZzpTm: function (As, An) {
      return As - An;
    },
    rriAO: function (As, An) {
      return As + An;
    },
    kxpbt: function (As, An) {
      return As + An;
    },
    ATEHQ: function (As, An) {
      return As + An;
    },
    PHXLC: function (As, An) {
      return As(An);
    },
    feRwp: function (As, An) {
      return As / An;
    },
    qPHCE: function (As, An) {
      return As >= An;
    },
    UslyB: function (As, An, ...At) {
      return As(An, ...At);
    },
    qNalu: function (As, An) {
      return As < An;
    },
    Akesj: function (As) {
      return As();
    },
    uwicw: function (As) {
      return As();
    },
    fmNHl: function (As, An) {
      return As / An;
    },
    XeLUK: "LINK",
    MzVkQ: function (As, An) {
      return As + An;
    },
    PJchZ: function (As, An) {
      return As < An;
    },
    mpglH: "high",
    aVkgc: function (As, An) {
      return As + An;
    },
    AmJAz: function (As, An) {
      return As + An;
    },
    fZGkg: function (As, An) {
      return As + An;
    },
    fxZkp: "Half size here.",
    hUUiA: function (As, An) {
      return As + An;
    },
    PNHqn: function (As, An) {
      return As + An;
    },
    KLaRy: "This card could not be drawn.",
    DhTeH: function (As, An, At, Ae) {
      return As(An, At, Ae);
    },
    xpOgz: "size",
    LDRTD: "Size",
    ErECz: "SQUARE",
    alTVr: "LnLkc",
    uEpEs: function (As, An) {
      return As === An;
    },
    jNmZA: function (As, An) {
      return As - An;
    },
    xEuZv: function (As, An) {
      return As - An;
    },
    DzjAX: function (As, An) {
      return As + An;
    },
    GEdHD: function (As, An) {
      return As - An;
    },
    eedoY: function (As, An) {
      return As === An;
    },
    KQzQa: function (As, An) {
      return As - An;
    },
    Dwbku: function (As, An) {
      return As + An;
    },
    WKHOd: function (As, An, At, Ae) {
      return As(An, At, Ae);
    },
    RxJqr: "sign",
    uaAzm: "Sign",
    rNylv: function (As, An) {
      return As + An;
    },
    Nchqy: function (As, An) {
      return As % An;
    },
    ekPoD: function (As, An) {
      return As >> An;
    },
    UaEWM: "none",
    NZkXa: function (As, An) {
      return As - An;
    },
    JBcFj: function (As, An) {
      return As + An;
    },
    fBqVo: function (As, An) {
      return As === An;
    },
    ulYWy: function (As, An) {
      return As - An;
    },
    uLdlq: function (As) {
      return As();
    },
    sQTvl: "COPY",
    jwYms: function (As) {
      return As();
    },
    TShke: function (As) {
      return As();
    },
    rtXTW: function (As, An, At, Ae, ho) {
      return As(An, At, Ae, ho);
    },
    HSIbA: "TAP",
    JNjIf: "choose",
    hiTYT: "TAP OUTSIDE",
    iSgKG: "back",
    WFHOL: function (As, An, At, Ae, ho) {
      return As(An, At, Ae, ho);
    },
    zjbdg: "ENTER",
    AFNZl: "keep",
    keWcz: "ESC",
    XyLmk: "cancel",
    gNDra: "UP/DOWN",
    zEdEM: "row",
    sCMkY: "LEFT/RIGHT",
    UMGDb: function (As, An) {
      return As === An;
    },
    fnAAg: "type"
  };
  if (!cR) {
    return;
  }
  cR.rects = [];
  let Nt = outCubic(cR.grow / 4);
  let Mo = cR.grow >= 4 ? ck : ch.map((As, An) => Math.round(As + (ck[An] - As) * Nt));
  o.UslyB(j, L, ...Mo);
  if (cR.grow < 4) {
    return;
  }
  let Mn = cardNow();
  let Mt = L.ctx;
  let Me = host().canvas ? host().canvas.width / 640 : 1;
  if (Mn) {
    Mt.save();
    Mt.globalAlpha = 1;
    if (cR.fmt === "LINK") {
      Mt.imageSmoothingEnabled = false;
      Mt.drawImage(Mn, cn, ct);
    } else {
      let As = cn + Math.round(165);
      Mt.imageSmoothingEnabled = Me < 2;
      Mt.imageSmoothingQuality = "high";
      Mt.drawImage(Mn, As, ct + 22, 270, 270);
      L.draw_text(As + 270 + 16, ct + 22 + 254, "Half size here.", qY.dim);
    }
    Mt.restore();
  } else {
    L.draw_text(cn + 20, ct + 140, cR.err || "This card could not be drawn.", qY.error);
  }
  let ws = cQ[cR.sel];
  let wn = (An, At, Ae) => {
    let ho = ws === An;
    if (ho) {
      L.draw_sprite("spr_heart", 0, cv, At + 1);
    }
    L.draw_text(cf, At, Ae, ho ? qY.select : qY.text);
  };
  wn("size", cZ.size, "Size");
  let wt = cu;
  for (let An of ["LINK", "SQUARE"]) {
    {
      let At = L.string_width(An, "fnt_main");
      let Ae = cR.fmt === An;
      if (hovering(wt - 3, cZ.size - 3, At + 6, 21) && !Ae) {
        Mt.fillStyle = qY.hover;
        Mt.fillRect(wt - 3, cZ.size - 3, At + 6, 21);
      }
      if (Ae) {
        Mt.strokeStyle = ws === "size" ? qY.select : qY.text;
        Mt.lineWidth = 1;
        Mt.strokeRect(wt - 2.5, cZ.size - 2.5, At + 5, 20);
      }
      L.draw_text(wt, cZ.size, An, Ae ? ws === "size" ? qY.select : qY.text : qY.dim);
      cR.rects.push({
        x: wt - 4,
        y: cZ.size - 4,
        w: At + 8,
        h: 24,
        fn: () => {
          cR.sel = 0;
          setFmt(An);
        }
      });
      wt += At + 16;
    }
  }
  wn("sign", cZ.sign, "Sign");
  let wa = cR.typing ? cR.text + ((cR.frame >> 3) % 2 ? "_" : " ") : cR.sign || "none";
  if (cR.typing) {
    let ho = Math.max(60, L.string_width(wa, "fnt_main"));
    Mt.strokeStyle = qY.select;
    Mt.lineWidth = 1;
    Mt.strokeRect(cu - 4.5, cZ.sign - 2.5, ho + 9, 20);
  }
  L.draw_text(cu, cZ.sign, wa, cR.typing ? qY.select : cR.sign ? ws === "sign" ? qY.text : qY.dim : qY.faint);
  cR.rects.push({
    x: cf - 4,
    y: cZ.sign - 4,
    w: 260,
    h: 24,
    fn: () => {
      {
        cR.sel = 1;
        if (!cR.typing) {
          startSign();
        }
      }
    }
  });
  let Ao = cf - 18;
  [saveLabel(), "COPY"].forEach((hs, hn) => {
    let he = L.string_width(hs, "fnt_main") + 30;
    let ha = ws === "buttons" && cR.btn === hn;
    let ko = hn === 0 && !canExport();
    if (hovering(Ao, cZ.buttons - 4, he, 24) && !ko) {
      Mt.fillStyle = qY.hover;
      Mt.fillRect(Ao, cZ.buttons - 4, he, 24);
    }
    if (ha) {
      L.draw_sprite("spr_heart", 0, Ao + 2, cZ.buttons + 1);
    }
    L.draw_text(Ao + 22, cZ.buttons, hs, ko ? qY.faint : ha ? qY.select : qY.text);
    cR.rects.push({
      x: Ao,
      y: cZ.buttons - 4,
      w: he,
      h: 24,
      fn: () => {
        {
          if (!ko) {
            press(hn);
          }
        }
      }
    });
    Ao += he + 8;
  });
  L.draw_text(cf, cK, greyLine(), qY.dim);
  if (A()) {
    chipsRow(L, cf, ce, [["TAP", "choose"], ["TAP OUTSIDE", "back"]]);
  } else if (cR.typing) {
    chipsRow(L, cf, ce, [["ENTER", "keep"], ["ESC", "cancel"]]);
  } else {
    chipsRow(L, cf, ce, [["UP/DOWN", "row"], ["LEFT/RIGHT", "choose"], ["Z", ws === "sign" ? "type" : "ok"], ["X", "back"]]);
  }
}
L2(drawView, "drawView");
function touchView() {
  if (cR) {
    return {
      key: cA + ":" + cR.src.kind,
      title: "SHARE",
      close: () => closeView(),
      note: greyLine() + "\n" + lineNow().text,
      rows: [{
        label: "Size",
        meta: cR.fmt,
        sel: cQ[cR.sel] === "size",
        act: () => {
          cR.sel = 0;
          setFmt(otherFmt());
        }
      }, {
        label: "Sign",
        meta: cR.typing ? cR.text : cR.sign || "none",
        sel: cQ[cR.sel] === "sign",
        act: () => {
          cR.sel = 1;
          if (cR.typing) {
            stopSign(true);
          } else {
            startSign();
          }
        }
      }],
      acts: [{
        label: saveLabel(),
        sel: cR.btn === 0,
        off: canExport() ? false : "dead",
        act: () => press(0)
      }, {
        label: "COPY",
        sel: cR.btn === 1,
        act: () => press(1)
      }]
    };
  } else {
    return null;
  }
}
L2(touchView, "touchView");
f("sharecard", {
  view: view,
  openStandalone: openStandalone,
  render: render,
  exportPng: exportPng,
  cardOf: cardOf,
  copyLineOf: copyLineOf,
  fileOf: fileOf,
  drawHeat: drawHeat,
  isOpen: L2(() => h(cA), "isOpen"),
  state: L2(() => cR, "state")
});
var m8 = "DARKDLE";
var mc = "DARKDLE";
var mm = "darkdle";
var ms = "darkdle";
var mY = y;
var mC = [20, 16, 620, 464];
var mT = 6;
var mg = ["darkner", "bullet", "sound"];
var mN = {
  darkner: "DARKNER",
  bullet: "BULLET HELL",
  sound: "SOUNDTEST"
};
var mM = {
  darkner: "Guess the enemy. Each guess is compared with the answer, stat by stat.",
  bullet: "Guess whose attack this is. Every miss shows more of the fight.",
  sound: "Guess the track by its real soundtrack title. Every miss plays more of it."
};
var mw = [0.5, 1, 2, 4, 8, 16];
var mA = [{
  label: "2 s of bullets",
  mask: "bullets",
  view: "box",
  secs: 2
}, {
  label: "3 s of bullets",
  mask: "bullets",
  view: "box",
  secs: 3
}, {
  label: "+ the box and the SOUL",
  mask: "soulbox",
  view: "box",
  secs: 3
}, {
  label: "+ the whole screen",
  mask: "scene",
  view: "full",
  secs: 3
}, {
  label: "+ the attack's name",
  mask: "scene",
  view: "full",
  secs: 3,
  name: true
}, {
  label: "everything",
  mask: "all",
  view: "full",
  secs: 3,
  name: true
}];
var mh = {
  label: "the answer",
  mask: "all",
  view: "full",
  secs: 3,
  name: true
};
n.darkdle = ["............", ".##.##.##.#.", ".##.##.##.#.", "............", ".##.##.##.#.", ".##.##.##.#.", "............", ".##.##.##.#.", ".##.##.##.#.", "............", ".#########..", "............"];
var mk = L2(() => u() || {}, "host");
var cfg = L2(() => mk().cfg || {}, "cfg");
var mt = L2(L => {
  try {
    if (cfg().audio !== false) {
      x(L);
    }
  } catch {}
}, "sfx");
var safe = L2((L, o = null) => {
  try {
    let wo = L();
    if (wo === undefined) {
      return o;
    } else {
      return wo;
    }
  } catch {
    return o;
  }
}, "safe");
var now = L2(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "now");
var mv = new Map(iV.map(L => [L.k, L]));
var mZ = new Map(iU.map(L => [L.id, L]));
var mK = new Map();
for (let uG of iO) {
  if (!mv.has(uG.e)) {
    continue;
  }
  let uF = mK.get(uG.e) || [];
  uF.push(uG);
  mK.set(uG.e, uF);
}
var tileSig = L2(L => [gameTag(L), L.boss, L.hp, L.at, L.acts, (L.soul || []).join("+"), L.mus].join("|"), "tileSig");
var mQ = new Map();
for (let uE of iV) {
  mQ.set(tileSig(uE), (mQ.get(tileSig(uE)) || 0) + 1);
}
var mR = {
  darkner: iV.filter(L => mQ.get(tileSig(L)) === 1 && L.acts != null).map(L => L.k).sort(),
  bullet: [...mK.keys()].sort(),
  sound: iU.map(L => L.id).sort()
};
function guessList(L) {
  if (L === "sound") {
    return iU.map(Mt => ({
      key: Mt.id,
      label: Mt.t,
      tag: gameTag(Mt)
    })).sort((Mt, Me) => Mt.label.localeCompare(Me.label));
  } else {
    return iV.map(Mt => ({
      key: Mt.k,
      label: Mt.l,
      tag: gameTag(Mt)
    })).sort((Mt, Me) => Mt.label.localeCompare(Me.label));
  }
}
L2(guessList, "guessList");
function gameTag(L) {
  if (L.g === "ut") {
    return "UT";
  } else {
    return "CH" + L.ch;
  }
}
L2(gameTag, "gameTag");
var ORDER = L2(L => L.g === "ut" ? 0 : L.ch, "ORDER");
var labelOf = L2((L, o) => (L === "sound" ? (mZ.get(o) || {}).t : (mv.get(o) || {}).l) || "?", "labelOf");
var utcDate = L2((L = new Date()) => L.toISOString().slice(0, 10), "utcDate");
var mD = "2026-09-25";
function dayNumber(L) {
  return Math.round((Date.parse(L + "T00:00:00Z") - Date.parse(mD + "T00:00:00Z")) / 86400000) + 1;
}
L2(dayNumber, "dayNumber");
function fnv1a(L) {
  let Ms = 2166136261;
  for (let Me = 0; Me < L.length; Me++) {
    Ms ^= L.charCodeAt(Me);
    Ms = Math.imul(Ms, 16777619) >>> 0;
  }
  return Ms >>> 0;
}
L2(fnv1a, "fnv1a");
function mulberry32(L) {
  return () => {
    {
      L = L + 1831565813 | 0;
      let ws = Math.imul(L ^ L >>> 15, 1 | L);
      ws = ws + Math.imul(ws ^ ws >>> 7, 61 | ws) ^ ws;
      return ((ws ^ ws >>> 14) >>> 0) / 4294967296;
    }
  };
}
L2(mulberry32, "mulberry32");
function shuffled(L, o) {
  let Mn = L.slice();
  let Mt = mulberry32(o);
  for (let wo = Mn.length - 1; wo > 0; wo--) {
    {
      let wn = Math.floor(Mt() * (wo + 1));
      [Mn[wo], Mn[wn]] = [Mn[wn], Mn[wo]];
    }
  }
  return Mn;
}
L2(shuffled, "shuffled");
function dailyAnswer(L, o) {
  let Mo = mR[L];
  if (!Mo || !Mo.length) {
    return null;
  }
  let Ms = Math.max(1, dayNumber(o)) - 1;
  let Mn = Mo.length;
  let Mt = Math.floor(Ms / Mn);
  return shuffled(Mo, fnv1a(mc + ":" + L + ":cycle" + Mt))[Ms % Mn];
}
L2(dailyAnswer, "dailyAnswer");
function clipFor(L, o) {
  let Ms = mK.get(L) || [];
  if (Ms.length) {
    return Ms[fnv1a(String(o) + ":" + L) % Ms.length];
  } else {
    return null;
  }
}
L2(clipFor, "clipFor");
const mb = {
  id: "hp",
  label: "HP"
};
const mP = {
  id: "at",
  label: "AT"
};
var md = [{
  id: "game",
  label: "GAME"
}, {
  id: "boss",
  label: "BOSS"
}, mb, mP, {
  id: "acts",
  label: "ACTS"
}, {
  id: "soul",
  label: "SOUL"
}, {
  id: "mus",
  label: "MUSIC"
}];
var musicName = L2(L => L && L.mt || "untitled", "musicName");
var soulShown = L2(L => (L.soul || []).find(o => o !== "RED") || (L.soul || [])[0] || "?", "soulShown");
var num = L2((L, o, Nt) => ({
  s: L === o ? "hit" : Nt ? "near" : "miss",
  dir: o > L ? 1 : o < L ? -1 : 0
}), "num");
function judgeDarkner(L, o) {
  let Mo = mv.get(L);
  let Ms = mv.get(o);
  if (!Mo || !Ms) {
    return null;
  }
  let wo = ORDER(Mo);
  let ws = ORDER(Ms);
  let wn = new Set(Mo.soul || []);
  let wt = new Set(Ms.soul || []);
  let we = wn.size === wt.size && [...wn].every(Ao => wt.has(Ao));
  let wa = (Ao, As, An) => Math.abs(Ao - As) <= Math.max(1, Math.abs(As) * An);
  return {
    game: {
      v: gameTag(Mo),
      ...num(wo, ws, Math.abs(wo - ws) === 1)
    },
    boss: {
      v: Mo.boss ? "BOSS" : "NO",
      s: Mo.boss === Ms.boss ? "hit" : "miss",
      dir: 0
    },
    hp: {
      v: Mo.hp,
      ...num(Mo.hp, Ms.hp, wa(Mo.hp, Ms.hp, 0.25))
    },
    at: {
      v: Mo.at,
      ...num(Mo.at, Ms.at, Math.abs(Mo.at - Ms.at) <= 2)
    },
    acts: Mo.acts == null || Ms.acts == null ? {
      v: "?",
      s: "unk",
      dir: 0
    } : {
      v: Mo.acts,
      ...num(Mo.acts, Ms.acts, Math.abs(Mo.acts - Ms.acts) === 1)
    },
    soul: {
      v: soulShown(Mo),
      s: we ? "hit" : [...wn].some(Ao => wt.has(Ao) && Ao !== "RED") || wn.size && [...wn].some(Ao => wt.has(Ao)) ? "near" : "miss",
      dir: 0
    },
    mus: {
      v: Mo.mt || "-",
      s: Mo.mus === Ms.mus ? "hit" : "miss",
      dir: 0
    }
  };
}
L2(judgeDarkner, "judgeDarkner");
function judgeSimple(L, o, Nt) {
  if (o === s4) {
    return {
      s: "skip"
    };
  }
  if (o === Nt) {
    return {
      s: "hit"
    };
  }
  let Mt = L === "sound" ? mZ.get(o) : mv.get(o);
  let Me = L === "sound" ? mZ.get(Nt) : mv.get(Nt);
  return {
    s: Mt && Me && gameTag(Mt) === gameTag(Me) ? "near" : "miss"
  };
}
L2(judgeSimple, "judgeSimple");
var s4 = "_skip";
function newBoard(L, o, Nt = Math.random) {
  let Me = o ? utcDate() : null;
  let wo;
  if (o) {
    wo = dailyAnswer(L, Me);
  } else {
    let wt = mR[L];
    wo = wt[Math.floor(Nt() * wt.length)];
  }
  let ws = {
    mode: L,
    daily: Me,
    n: o ? dayNumber(Me) : 0,
    answer: wo,
    guesses: [],
    done: false,
    won: false
  };
  if (L === "bullet") {
    let we = clipFor(wo, o ? Me : Math.floor(Nt() * 1000000000));
    ws.clip = we ? {
      f: we.f,
      a: we.a,
      n: we.n,
      seed: we.seed
    } : null;
  }
  return ws;
}
L2(newBoard, "newBoard");
function guess(L, o) {
  if (!L || L.done || o !== s4 && L.guesses.includes(o)) {
    return null;
  } else {
    L.guesses.push(o);
    if (o === L.answer) {
      L.done = true;
      L.won = true;
    } else if (L.guesses.length >= mT) {
      L.done = true;
      L.won = false;
    }
    return L;
  }
}
L2(guess, "guess");
var blankStats = L2(() => ({
  played: 0,
  won: 0,
  streak: 0,
  best: 0,
  lastWin: null,
  lastPlayed: null,
  dist: [0, 0, 0, 0, 0, 0],
  endless: 0,
  endlessWon: 0
}), "blankStats");
var prevDate = L2(L => utcDate(new Date(Date.parse(L + "T00:00:00Z") - 86400000)), "prevDate");
function liveStreak(L, o = utcDate()) {
  if (L && L.lastWin && (L.lastWin === o || L.lastWin === prevDate(o))) {
    return L.streak;
  } else {
    return 0;
  }
}
L2(liveStreak, "liveStreak");
function recordResult(L, o) {
  L = {
    ...blankStats(),
    ...(L || {})
  };
  L.dist = (L.dist || []).slice();
  while (L.dist.length < 6) {
    L.dist.push(0);
  }
  if (o.daily) {
    if (L.lastPlayed !== o.daily) {
      L.played++;
      L.lastPlayed = o.daily;
      if (o.won) {
        L.won++;
        L.dist[o.guesses.length - 1]++;
        L.streak = L.lastWin === prevDate(o.daily) ? L.streak + 1 : 1;
        L.lastWin = o.daily;
        L.best = Math.max(L.best, L.streak);
      } else {
        L.streak = 0;
      }
    }
    return L;
  } else {
    L.endless++;
    if (o.won) {
      L.endlessWon++;
    }
    return L;
  }
}
L2(recordResult, "recordResult");
const so = {
  hit: "🟩",
  near: "🟨",
  miss: "⬛",
  skip: "⬜",
  unk: "⬛"
};
var sl = so;
function shareText(L) {
  let Nt = [m8 + " " + (L.daily ? "#" + L.n : "ENDLESS") + " " + mN[L.mode] + " " + (L.won ? L.guesses.length : "X") + "/" + mT];
  if (L.mode === "darkner") {
    for (let Mt of L.guesses) {
      let Me = judgeDarkner(Mt, L.answer);
      if (Me) {
        Nt.push(md.map(wo => sl[Me[wo.id].s]).join(""));
      }
    }
  } else {
    Nt.push(L.guesses.map(wo => sl[judgeSimple(L.mode, wo, L.answer).s]).join(""));
  }
  return Nt.join("\n");
}
L2(shareText, "shareText");
function sW(L) {
  let Mn = () => {
    const wn = {
      kind: "ok"
    };
    R("Copied - paste it anywhere", wn);
    mt("snd_select");
  };
  let Mt = () => {
    R("Could not copy - the browser blocked the clipboard", {
      kind: "warn"
    });
  };
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(L).then(Mn, () => legacyCopy(L) ? Mn() : Mt());
      return true;
    }
  } catch {}
  if (legacyCopy(L)) {
    Mn();
    return true;
  } else {
    Mt();
    return false;
  }
}
L2(sW, "copyText");
function shareCardOf(L) {
  let Mn = statsOf(L.mode);
  let Mt = L.mode === "darkner" ? L.guesses.map(wo => {
    let wt = judgeDarkner(wo, L.answer);
    if (wt) {
      return md.map(wa => wt[wa.id].s);
    } else {
      return null;
    }
  }).filter(Boolean) : [L.guesses.map(wo => judgeSimple(L.mode, wo, L.answer).s)];
  let Me = L.daily ? [["STREAK", String(liveStreak(Mn))], ["BEST", String(Mn.best)]] : [["WON", String(Mn.endlessWon)], ["PLAYED", String(Mn.endless)]];
  return {
    card: {
      title: m8 + " " + (L.daily ? "#" + L.n : "ENDLESS"),
      mode: mN[L.mode],
      verdict: (L.won ? L.guesses.length : "X") + " / " + mT,
      won: L.won,
      rows: Mt,
      stats: Me
    },
    text: shareText(L),
    file: "drsim_darkdle_" + L.mode + ".png"
  };
}
L2(shareCardOf, "shareCardOf");
function openShare(L) {
  let Mo = v("sharecard");
  if (!L || !Mo || !Mo.openStandalone || !Mo.openStandalone("darkdle", shareCardOf(L))) {
    sW(shareText(L));
  }
}
L2(openShare, "openShare");
function legacyCopy(L) {
  try {
    if (typeof document === "undefined" || !document.createElement || !document.execCommand) {
      return false;
    }
    let Mt = document.createElement("textarea");
    Mt.value = L;
    Mt.style.position = "fixed";
    Mt.style.opacity = "0";
    document.body.appendChild(Mt);
    Mt.select();
    let Me = document.execCommand("copy");
    Mt.remove();
    return !!Me;
  } catch {
    return false;
  }
}
L2(legacyCopy, "legacyCopy");
var sc = "darkdle";
var getStats = L2(() => {
  let Mo = Z(sc, "stats", null);
  if (Mo && typeof Mo == "object") {
    return Mo;
  } else {
    return {};
  }
}, "getStats");
var statsOf = L2(L => ({
  ...blankStats(),
  ...(getStats()[L] || {})
}), "statsOf");
var getBoards = L2(() => {
  let Nt = Z(sc, "boards", null);
  if (Nt && typeof Nt == "object") {
    return Nt;
  } else {
    return {};
  }
}, "getBoards");
function saveBoard(L) {
  let Mo = {
    ...getBoards()
  };
  Mo[(L.daily ? "d:" : "e:") + L.mode] = {
    mode: L.mode,
    daily: L.daily,
    n: L.n,
    answer: L.answer,
    clip: L.clip || null,
    guesses: L.guesses.slice(),
    done: L.done,
    won: L.won
  };
  K(sc, "boards", Mo);
}
L2(saveBoard, "saveBoard");
function loadBoard(L, o) {
  let Mn = getBoards()[(o ? "d:" : "e:") + L];
  if (!Mn || !Array.isArray(Mn.guesses) || o && Mn.daily !== utcDate() || !(L === "sound" ? mZ.has(Mn.answer) : mv.has(Mn.answer)) || L === "bullet" && (!Mn.clip || !sK.has(Mn.clip.f + "|" + Mn.clip.a))) {
    return null;
  } else {
    return {
      ...Mn,
      guesses: Mn.guesses.filter(Me => Me === s4 || (L === "sound" ? mZ.has(Me) : mv.has(Me)))
    };
  }
}
L2(loadBoard, "loadBoard");
function finish(L) {
  let Nt = {
    ...getStats()
  };
  Nt[L.mode] = recordResult(Nt[L.mode], L);
  K(sc, "stats", Nt);
  let Mn = v("achievements");
  if (L.won) {
    mt("snd_spare");
    if (Mn) {
      Mn.unlock("DARKDLE_WIN");
      if (L.daily && L.guesses.length === 1) {
        Mn.unlock("DARKDLE_ONE");
      }
      if (L.daily && Nt[L.mode].streak >= 7) {
        Mn.unlock("DARKDLE_7");
      }
    }
  } else {
    mt("snd_break2");
  }
}
L2(finish, "finish");
const sN = {
  el: null,
  track: null,
  len: 0,
  t0: 0,
  playing: false,
  loading: false
};
var sM = sN;
function snippetPlan(L) {
  let Mt = L && mZ.get(L.answer);
  if (!Mt) {
    return null;
  }
  let Me = L.done ? Math.min(30, (Mt.dur || 30) - Mt.start) : mw[Math.min(mw.length - 1, L.guesses.length)];
  return {
    file: Mt.file,
    src: "assets/" + Mt.file,
    start: Mt.start || 0,
    len: Me
  };
}
L2(snippetPlan, "snippetPlan");
function playSnippet(L) {
  stopSnippet();
  let Ms = snippetPlan(L);
  if (!Ms) {
    return false;
  }
  if (cfg().audio === false) {
    R("Sound is OFF - turn it on in CONFIG (Audio) to hear the track", {
      kind: "warn",
      ms: 4000
    });
    return false;
  }
  let Mn = v("jukebox");
  if (Mn && Mn.stop) {
    safe(() => Mn.stop(true));
  }
  try {
    let wt = new Audio(Ms.src);
    wt.preload = "auto";
    wt.volume = Math.max(0, Math.min(1, cfg().musicvol ?? 0.6));
    sM.el = wt;
    sM.len = Ms.len;
    sM.start = Ms.start;
    sM.loading = true;
    sM.playing = false;
    sM.t0 = 0;
    let we = () => {
      if (sM.el !== wt) {
        return;
      }
      try {
        wt.currentTime = Ms.start;
      } catch {}
      let An = wt.play();
      if (An && An.catch) {
        An.catch(hs => {
          if (sM.el === wt && hs && hs.name === "NotAllowedError") {
            R("The browser blocked audio - click the page once, then ENTER again", {
              kind: "warn"
            });
          }
        });
      }
    };
    wt.addEventListener("playing", () => {
      if (sM.el === wt) {
        sM.loading = false;
        sM.playing = true;
        sM.t0 = now() - Math.max(0, ((wt.currentTime || Ms.start) - Ms.start) * 1000);
      }
    });
    wt.addEventListener("error", () => {
      if (sM.el === wt) {
        sM.el = null;
        sM.loading = false;
        R("Could not play " + Ms.file + " - the file is missing or the browser cannot decode it", {
          kind: "error"
        });
      }
    });
    if (wt.readyState >= 1) {
      we();
    } else {
      wt.addEventListener("loadedmetadata", we, {
        once: true
      });
    }
    return true;
  } catch (wa) {
    R("Could not play the snippet: " + wa.message, {
      kind: "error"
    });
    return false;
  }
}
L2(playSnippet, "playSnippet");
function stopSnippet() {
  if (sM.el) {
    try {
      sM.el.pause();
      sM.el.src = "";
    } catch {}
  }
  sM.el = null;
  sM.playing = false;
  sM.loading = false;
}
L2(stopSnippet, "stopSnippet");
function stepSnippet() {
  let o = sM.el;
  if (!o) {
    return;
  }
  let Mo = o.currentTime != null ? o.currentTime - sM.start : (now() - sM.t0) / 1000;
  if (sM.playing && Mo >= sM.len || o.ended) {
    stopSnippet();
  }
}
L2(stepSnippet, "stepSnippet");
const sn = {
  bullets: 0,
  soulbox: 1,
  scene: 2,
  all: 3
};
const st = {
  key: null,
  job: null,
  frames: null,
  w: 0,
  h: 0,
  t0: 0,
  busy: false,
  err: null,
  mod: null,
  want: null,
  loading: false,
  stale: null
};
var snippetPos = L2(() => sM.el && sM.playing ? Math.max(0, Math.min(sM.len, (sM.el.currentTime ?? sM.start) - sM.start)) : 0, "snippetPos");
var su = 10;
var sv = sn;
var sZ = st;
var sK = new Map(iO.map(L => [L.f + "|" + L.a, L]));
function stageOf(L) {
  if (L.done) {
    return mh;
  } else {
    return mA[Math.min(mA.length - 1, L.guesses.length)];
  }
}
L2(stageOf, "stageOf");
var jobKey = L2(L => L.clip ? L.clip.f + "|" + L.clip.a + "|" + L.clip.seed : null, "jobKey");
function clipKey(L) {
  let Ms = jobKey(L);
  if (Ms) {
    return Ms + "|" + sv[stageOf(L).mask];
  } else {
    return null;
  }
}
L2(clipKey, "clipKey");
function wantClip(L) {
  let Mn = clipKey(L);
  if (!Mn) {
    sZ.err = "This puzzle has no clip.";
    return;
  }
  if (sZ.key !== Mn || !sZ.frames) {
    sZ.want = Mn;
    sZ.err = null;
    sZ.busy = true;
  }
}
L2(wantClip, "wantClip");
function stepClip(L) {
  if (!sZ.want || !L || L.mode !== "bullet" || !L.clip) {
    return;
  }
  if (!sZ.mod) {
    if (!sZ.loading) {
      sZ.loading = true;
      Nn("./c-KKNLUQT5.js", import.meta.url).then(wa => {
        {
          sZ.mod = wa;
          sZ.loading = false;
        }
      }).catch(wa => {
        {
          sZ.loading = false;
          sZ.err = "Could not load the clip renderer: " + wa.message;
          sZ.want = null;
          sZ.busy = false;
        }
      });
    }
    return;
  }
  if (e().state !== "menu") {
    {
      sZ.busy = false;
      sZ.want = null;
      sZ.err = "Clips are made on the menu - leave the fight first.";
      return;
    }
  }
  let Mo = (u() && u().fights || []).find(Ao => Ao && Ao.id === L.clip.f);
  if (Mo && !z(Mo)) {
    if (!sZ.codeWait) {
      sZ.codeWait = true;
      B(Mo).then(() => {
        {
          sZ.codeWait = false;
        }
      }, Ao => {
        {
          sZ.codeWait = false;
          sZ.err = "Could not load the fight: " + (Ao && Ao.message || Ao);
          sZ.want = null;
          sZ.busy = false;
        }
      });
    }
    return;
  }
  let Ms = jobKey(L);
  if (!sZ.job || sZ.job.key !== Ms) {
    {
      if (sZ.job) {
        sZ.job.close();
      }
      let Ao = sK.get(L.clip.f + "|" + L.clip.a) || {};
      sZ.job = sZ.mod.clipJob({
        fightId: L.clip.f,
        atkId: L.clip.a,
        seed: L.clip.seed,
        secs: 3,
        stride: 2,
        masks: sZ.mod.PASS_ORDER,
        maxFrames: (Ao.start || 2100) + 300
      });
      sZ.job.key = Ms;
      sZ.job.expect = Ao.start != null ? Ao.start : null;
    }
  }
  let Mt = sZ.job;
  let Me = sv[stageOf(L).mask];
  Mt.want(Me);
  let wo = false;
  try {
    wo = Mt.step(su);
  } catch {
    {
      wo = true;
    }
  }
  if (!wo) {
    return;
  }
  let ws = sZ.want;
  sZ.want = null;
  sZ.busy = false;
  let wn = Mt.result;
  let wt = wn && wn.ok ? Mt.layer(sZ.mod.PASS_ORDER[Me]) : null;
  if (!wt || !wt.frames || !wt.frames.length) {
    sZ.err = "The clip could not be made" + (wn && wn.why ? ": " + wn.why : ".");
    sZ.key = ws;
    sZ.frames = null;
    return;
  }
  if (Mt.expect != null && wn.start !== Mt.expect && sZ.stale !== Ms) {
    {
      sZ.stale = Ms;
      try {
        {
          console.warn("[darkdle] clip " + Ms + " now starts at frame " + wn.start + ", the data says " + Mt.expect + "");
        }
      } catch {}
    }
  }
  sZ.key = ws;
  sZ.frames = wt.frames;
  sZ.w = wt.w;
  sZ.h = wt.h;
  sZ.t0 = now();
}
L2(stepClip, "stepClip");
function clipProgress() {
  let Mn = sZ.job && sZ.job.progress ? sZ.job.progress() : null;
  if (!Mn || Mn.phase !== "reach" || !sZ.job.expect) {
    return "";
  } else {
    return "  " + Math.min(99, Math.floor(Mn.frame * 100 / sZ.job.expect)) + "%";
  }
}
L2(clipProgress, "clipProgress");
function dropClip() {
  if (sZ.job) {
    sZ.job.close();
  }
  sZ.job = null;
  sZ.key = null;
  sZ.frames = null;
  sZ.want = null;
  sZ.busy = false;
  sZ.err = null;
}
L2(dropClip, "dropClip");
var sr = new Set(["final", "royal", "guard", "greater", "lesser", "mother", "ranger", "undying", "spawn", "trio", "shadow", "sweet", "first", "giga", "head", "blue", "green", "yellow", "orange", "pink", "aqua", "red", "purple", "enemy", "boss", "battle"]);
var sD = ["gerson"];
var fold = L2(L => String(L || "").toLowerCase().replace(/[^a-z0-9 ]+/g, "").replace(/\s+/g, " ").trim(), "fold");
var sB = new Set();
var sJ = new Set(sD);
for (let ud of iV) {
  let up = fold(ud.n).replace(/ /g, "");
  if (!sr.has(up)) {
    sB.add(up);
  }
  let v0 = fold(ud.n).split(" ");
  if (v0.length > 1) {
    for (let v2 of v0) {
      if (v2.length >= 5 && !sr.has(v2)) {
        sJ.add(v2);
      }
    }
  }
  let v1 = String(ud.cls || "").replace(/^obj_/, "").replace(/_(enemy|boss|battle|ch\d)$/g, "").replace(/_(enemy|boss)$/, "");
  if (/^[a-z]{5,}$/.test(v1) && !sr.has(v1)) {
    sJ.add(v1);
  }
}
var isName = L2(L => !!L && (sB.has(L) || sB.has(L.replace(/s$/, "")) || sJ.has(L) || sJ.has(L.replace(/s$/, ""))), "isName");
function clueName(L) {
  let Ms = String(L || "").split(/\s+/).filter(Boolean);
  let Mn = [];
  for (let Me = 0; Me < Ms.length; Me++) {
    let wo = 0;
    for (let ws = Ms.length; ws > Me; ws--) {
      if (isName(fold(Ms.slice(Me, ws).join("")))) {
        wo = ws - Me;
        break;
      }
    }
    if (wo) {
      if (Mn[Mn.length - 1] !== "???") {
        Mn.push("???");
      }
      Me += wo - 1;
    } else {
      Mn.push(Ms[Me]);
    }
  }
  return Mn.join(" ");
}
L2(clueName, "clueName");
var sO = {
  mode: "darkner",
  daily: true,
  board: null,
  q: "",
  sel: 0,
  rects: [],
  buf: 0,
  typing: true,
  blink: 0,
  flash: 0,
  shake: 0,
  lastJudge: null
};
var sU = null;
var boardFor = L2((L, o) => loadBoard(L, o) || newBoard(L, o), "boardFor");
function setBoard(L, o) {
  sO.mode = L;
  sO.daily = o;
  sO.board = boardFor(L, o);
  sO.q = "";
  sO.sel = 0;
  K(sc, "mode", L);
  K(sc, "daily", o);
  stopSnippet();
  dropClip();
  if (L === "bullet") {
    wantClip(sO.board);
  }
  setTyping(!sO.board.done);
}
L2(setBoard, "setBoard");
function setTyping(L) {
  sO.typing = L;
  if (sU) {
    sU.text = L;
  }
  O.textFocus = !!L && !!sU;
  if (L && sU) {
    m();
  } else {
    s();
  }
  b();
  P();
}
L2(setTyping, "setTyping");
function suggest(L, o, Nt = []) {
  let Mn = fold(o);
  if (!Mn) {
    return [];
  }
  let Mt = Mn.split(" ");
  let Me = new Set(Nt);
  let wo = we => {
    let At = fold(we.label + " " + we.tag);
    return [At, At.replace(/ /g, "")];
  };
  let ws = we => {
    let An = fold(we.label);
    return An.startsWith(Mn) || An.replace(/ /g, "").startsWith(Mn.replace(/ /g, ""));
  };
  return guessList(L).filter(we => {
    if (Me.has(we.key)) {
      return false;
    }
    let [At, Ae] = wo(we);
    return Mt.every(ho => At.includes(ho) || Ae.includes(ho));
  }).sort((we, wa) => ws(wa) - ws(we) || we.label.localeCompare(wa.label));
}
L2(suggest, "suggest");
function menuRows() {
  let Ms = sO.board;
  if (!Ms || Ms.done) {
    return [];
  }
  if (sO.q.trim()) {
    return suggest(sO.mode, sO.q, Ms.guesses).slice(0, 6).map(Mt => ({
      kind: "guess",
      key: Mt.key,
      label: Mt.label,
      tag: Mt.tag
    }));
  }
  let Mn = [];
  if (sO.mode === "sound") {
    Mn.push({
      kind: "play",
      label: "PLAY " + fmtSecs(mw[Math.min(5, Ms.guesses.length)])
    });
  }
  if (sO.mode === "bullet") {
    Mn.push({
      kind: "replay",
      label: "REPLAY THE CLIP"
    });
  }
  if (sO.mode !== "darkner") {
    Mn.push({
      kind: "skip",
      label: "SKIP - show me more"
    });
  }
  return Mn;
}
L2(menuRows, "menuRows");
var fmtSecs = L2(L => (L < 1 ? L.toFixed(1) : String(L)) + " s", "fmtSecs");
function act(L) {
  if (L) {
    if (L.kind === "guess") {
      submit(L.key);
    } else if (L.kind === "skip") {
      submit(s4);
    } else if (L.kind === "play") {
      if (playSnippet(sO.board)) {
        mt("snd_select");
      }
    } else if (L.kind === "replay") {
      sZ.t0 = now();
      mt("snd_menumove");
    }
  }
}
L2(act, "act");
function submit(L) {
  let Nt = sO.board;
  if (!Nt || Nt.done) {
    return false;
  }
  if (!guess(Nt, L)) {
    mt("snd_error");
    return false;
  }
  sO.q = "";
  sO.sel = 0;
  let Mn = L === s4 ? {
    s: "skip"
  } : Nt.mode === "darkner" ? L === Nt.answer ? {
    s: "hit"
  } : {
    s: "miss"
  } : judgeSimple(Nt.mode, L, Nt.answer);
  sO.lastJudge = Mn;
  sO.flash = now();
  if (Nt.done) {
    finish(Nt);
    setTyping(false);
  } else if (Mn.s !== "hit") {
    mt(L === s4 ? "snd_menumove" : "snd_hurt1");
    sO.shake = now();
  }
  saveBoard(Nt);
  if (Nt.mode === "bullet") {
    wantClip(Nt);
  }
  if (Nt.mode === "sound") {
    stopSnippet();
    if (!Nt.done) {
      setTimeoutSafe(() => {
        if (sO.board === Nt && sU) {
          playSnippet(Nt);
        }
      }, 350);
    }
  }
  return true;
}
L2(submit, "submit");
var setTimeoutSafe = L2((L, o) => {
  try {
    setTimeout(L, o);
  } catch {}
}, "setTimeoutSafe");
function switchMode(L) {
  let Mn = (mg.indexOf(sO.mode) + L + mg.length) % mg.length;
  setBoard(mg[Mn], sO.daily);
  mt("snd_menumove");
}
L2(switchMode, "switchMode");
function toggleDaily() {
  setBoard(sO.mode, !sO.daily);
  mt("snd_menumove");
}
L2(toggleDaily, "toggleDaily");
function nextEndless() {
  if (sO.daily) {
    setBoard(sO.mode, false);
  } else {
    let Ms = newBoard(sO.mode, false);
    sO.board = Ms;
    saveBoard(Ms);
    sO.q = "";
    stopSnippet();
    dropClip();
    if (Ms.mode === "bullet") {
      wantClip(Ms);
    }
    setTyping(true);
  }
  mt("snd_select");
}
L2(nextEndless, "nextEndless");
function close() {
  M(ms);
}
L2(close, "close");
function openDarkdle(L = {}) {
  if (e().state !== "menu") {
    R(m8 + " lives on the menu - finish or leave this first", {
      kind: "warn"
    });
    return null;
  }
  let Mn = mg.includes(L.mode) ? L.mode : Z(sc, "mode", "darkner");
  let Mt = L.daily != null ? !!L.daily : Z(sc, "daily", true) !== false;
  if (h("hub:toolbox")) {
    M("hub:toolbox");
  }
  b();
  P();
  sU = g({
    id: ms,
    owner: mm,
    pauses: true,
    text: true,
    step: stepScreen,
    draw: Co,
    touchRows: touchRows,
    onPointer: pointer,
    onKey(Me, wo) {
      if (wo === "Escape") {
        close();
        return true;
      }
      if (wo === "Tab") {
        toggleDaily();
        return true;
      }
      if (sO.typing) {
        if (wo === "Enter") {
          return false;
        }
        if (Me && Me.key && Me.key.length === 1 && !Me.ctrlKey && !Me.metaKey && !Me.altKey) {
          return true;
        }
      }
      return false;
    },
    onClose() {
      stopSnippet();
      dropClip();
      s();
      O.textFocus = false;
      b();
      P();
      sU = null;
    }
  });
  setBoard(mg.includes(Mn) ? Mn : "darkner", Mt);
  sO.buf = 2;
  mt("snd_select");
  return sU;
}
L2(openDarkdle, "openDarkdle");
function stepScreen() {
  sO.blink++;
  stepSnippet();
  if (sO.board && sO.board.mode === "bullet") {
    stepClip(sO.board);
  }
  if (sO.buf > 0) {
    sO.buf--;
    b();
    P();
    return;
  }
  let Ms = sO.board;
  if (Ms) {
    if (sO.typing) {
      let Mn = b();
      let Mt = P();
      if (Mn.length || Mt) {
        for (let wo = 0; wo < Mt; wo++) {
          sO.q = sO.q.slice(0, -1);
        }
        if (Mn.length) {
          sO.q = (sO.q + Mn.join("")).slice(0, 32);
        }
        sO.sel = 0;
      }
      let Me = menuRows();
      if (sO.sel >= Me.length) {
        sO.sel = Math.max(0, Me.length - 1);
      }
      if (L0()) {
        if (sO.sel > 0) {
          sO.sel--;
          mt("snd_menumove");
        }
      } else if (L1()) {
        if (sO.sel < Me.length - 1) {
          sO.sel++;
          mt("snd_menumove");
        }
      } else if (d() && !sO.q) {
        switchMode(-1);
      } else if (p() && !sO.q) {
        switchMode(1);
      } else if (G()) {
        if (Me[sO.sel]) {
          act(Me[sO.sel]);
        } else if (sO.q.trim()) {
          mt("snd_error");
        }
      }
      return;
    }
    if (d()) {
      switchMode(-1);
    } else if (p()) {
      switchMode(1);
    } else if (G()) {
      openShare(Ms);
    } else if (E()) {
      nextEndless();
    } else if (F()) {
      close();
    }
  }
}
L2(stepScreen, "stepScreen");
function pointer(L) {
  let Mo = L.x;
  let Ms = L.y;
  if (Mo < mC[0] || Ms < mC[1] || Mo > mC[2] || Ms > mC[3]) {
    close();
    return true;
  }
  for (let Me of sO.rects) {
    if (!(Mo < Me.x) && !(Ms < Me.y) && !(Mo >= Me.x + Me.w) && !(Ms >= Me.y + Me.h)) {
      if (Me.kind === "mode") {
        if (mg[Me.i] !== sO.mode) {
          setBoard(mg[Me.i], sO.daily);
          mt("snd_menumove");
        }
      } else if (Me.kind === "daily") {
        if (sO.daily !== Me.v) {
          toggleDaily();
        }
      } else if (Me.kind === "row") {
        sO.sel = Me.i;
        act(menuRows()[Me.i]);
      } else if (Me.kind === "input") {
        if (!sO.typing && !sO.board.done) {
          setTyping(true);
        } else {
          m(false);
        }
      } else if (Me.kind === "share") {
        openShare(sO.board);
      } else if (Me.kind === "next") {
        nextEndless();
      } else if (Me.kind === "play") {
        if (playSnippet(sO.board)) {
          mt("snd_select");
        }
      } else if (Me.kind === "replay") {
        sZ.t0 = now();
      }
      return true;
    }
  }
  return true;
}
L2(pointer, "pointer");
function touchRows() {
  let Nt = sO.board;
  if (!Nt) {
    return null;
  }
  let Mn = [];
  if (!Nt.done) {
    for (let [wo, ws] of menuRows().entries()) {
      Mn.push({
        label: ws.label,
        meta: ws.tag || "",
        sel: wo === sO.sel,
        act: () => {
          sO.sel = wo;
          act(ws);
        }
      });
    }
  }
  const Mt = {
    head: true
  };
  Mt.label = "GUESSES";
  if (!sO.q) {
    if (Mn.length) {
      Mn.push(Mt);
    }
    Nt.guesses.forEach((wn, wt) => {
      let Ao = wn === s4 ? {
        s: "skip"
      } : Nt.mode === "darkner" ? {
        s: wn === Nt.answer ? "hit" : "miss"
      } : judgeSimple(Nt.mode, wn, Nt.answer);
      Mn.push({
        label: wt + 1 + "  " + (wn === s4 ? "SKIPPED" : labelOf(Nt.mode, wn)),
        meta: Ao.s === "hit" ? "RIGHT" : Ao.s === "near" ? "SAME " + (Nt.mode === "sound" ? "GAME" : "CHAPTER") : Ao.s === "skip" ? "" : "NO",
        act: () => {}
      });
    });
  }
  let Me = [];
  if (Nt.done) {
    Me.push({
      label: "SHARE",
      act: () => openShare(Nt)
    });
    Me.push({
      label: sO.daily ? "PLAY ENDLESS" : "NEXT",
      act: nextEndless
    });
  } else if (Nt.mode !== "darkner") {
    Me.push({
      label: "SKIP",
      act: () => submit(s4)
    });
  }
  if (Nt.mode === "sound") {
    Me.unshift({
      label: "PLAY",
      act: () => playSnippet(Nt)
    });
  }
  return {
    key: ms + ":" + Nt.mode + ":" + (sO.daily ? "d" : "e") + ":" + Nt.guesses.length + (sO.q ? ":q" : ""),
    title: m8 + "  " + mN[Nt.mode],
    search: Nt.done ? null : {
      value: sO.q,
      active: sO.typing,
      hint: Nt.mode === "sound" ? "Type a track title" : "Type an enemy",
      act: () => {
        if (sO.typing) {
          m(false);
        } else {
          setTyping(true);
        }
      }
    },
    tabs: [...mg.map(wn => ({
      label: mN[wn],
      sel: wn === sO.mode,
      act: () => {
        if (wn !== sO.mode) {
          setBoard(wn, sO.daily);
        }
      }
    })), {
      label: sO.daily ? "DAILY" : "ENDLESS",
      sel: false,
      act: toggleDaily
    }],
    rows: Mn,
    acts: Me,
    note: Nt.done ? resultLine(Nt) : mM[Nt.mode]
  };
}
L2(touchRows, "touchRows");
function fit(L, o, Nt, Mo = "fnt_main") {
  o = String(o ?? "");
  if (L.string_width(o, Mo) <= Nt) {
    return o;
  }
  while (o.length > 1 && L.string_width(o + "..", Mo) > Nt) {
    o = o.slice(0, -1);
  }
  return o + "..";
}
L2(fit, "fit");
function chips(L, o, Nt, Mo) {
  for (let [wo, ws] of Mo) {
    o += D(L, o, Nt, wo) + 4;
    if (ws) {
      L.draw_text(o, Nt + 1, ws, mY.dim);
      o += L.string_width(ws, "fnt_main") + 12;
    }
  }
  return o;
}
L2(chips, "chips");
const Yl = {
  hit: mY.ok
};
Yl.near = mY.select;
Yl.miss = mY.faint;
Yl.skip = mY.faint;
Yl.unk = mY.faint;
const YX = {
  hit: mY.ok
};
YX.near = mY.select;
YX.miss = mY.dim;
YX.skip = mY.dim;
YX.unk = mY.faint;
var fillR = L2((L, o, Nt, Mo, Ms, Mn) => {
  L.ctx.fillStyle = Mn;
  L.ctx.fillRect(o, Nt, Mo, Ms);
}, "fillR");
var strokeR = L2((L, o, Nt, Mo, Ms, Mn, Mt = 1) => {
  L.ctx.strokeStyle = Mn;
  L.ctx.lineWidth = Mt;
  L.ctx.strokeRect(o + Mt / 2, Nt + Mt / 2, Mo - Mt, Ms - Mt);
}, "strokeR");
var YI = Yl;
var Ys = YX;
function tri(L, o, Nt, Mo, Ms) {
  L.ctx.fillStyle = Ms;
  for (let wn = 0; wn < 4; wn++) {
    let wt = Mo ? 1 + wn * 2 : 7 - wn * 2;
    L.ctx.fillRect(o + (7 - wt) / 2, Nt + wn, wt, 1);
  }
}
L2(tri, "tri");
var short = L2(L => typeof L != "number" ? String(L) : Math.abs(L) >= 10000 ? Math.round(L / 1000) + "K" : String(Math.round(L * 10) / 10), "short");
function resultLine(L) {
  if (L.mode === "sound") {
    let wo = mZ.get(L.answer);
    return (L.won ? "Right - " : "It was ") + (wo ? wo.t + " (" + (wo.g === "ut" ? "UNDERTALE" : "DELTARUNE CH" + wo.ch) + ")" : "?") + ".";
  }
  let Mt = mv.get(L.answer);
  let Me = Mt ? Mt.l + " (" + (Mt.g === "ut" ? "UNDERTALE" : "CH" + Mt.ch) + ")" : "?";
  if (L.mode === "bullet") {
    return (L.won ? "Right - " : "It was ") + Me + (L.clip ? ": " + L.clip.n : "") + ".";
  } else {
    return (L.won ? "Right - " : "It was ") + Me + ".";
  }
}
L2(resultLine, "resultLine");
function Co(L) {
  let [Mo, Ms, Mn, Mt] = mC;
  sO.rects = [];
  j(L, Mo, Ms, Mn, Mt);
  let Me = sO.board;
  if (!Me) {
    return;
  }
  L.draw_set_font("fnt_mainbig");
  L.draw_text(Mo + 24, Ms + 10, m8, mY.select);
  L.draw_set_font("fnt_main");
  let wo = statsOf(Me.mode);
  L.draw_set_halign("right");
  L.draw_text(Mn - 24, Ms + 12, sO.daily ? "DAILY #" + Me.n + "  " + Me.daily : "ENDLESS", mY.text);
  let ws = liveStreak(wo);
  L.draw_text(Mn - 24, Ms + 30, sO.daily ? wo.played ? "streak " + ws + "  best " + wo.best + "  won " + wo.won + "/" + wo.played : "first one today" : "won " + wo.endlessWon + " of " + wo.endless, mY.dim);
  L.draw_set_halign("left");
  let wn = Mo + 24;
  let wt = Ms + 50;
  for (let An = 0; An < mg.length; An++) {
    let At = mN[mg[An]];
    let Ae = L.string_width(At, "fnt_main");
    let ho = mg[An] === sO.mode;
    L.draw_text(wn, wt, At, ho ? mY.select : mY.dim);
    if (ho) {
      fillR(L, wn, wt + 18, Ae, 2, mY.select);
    }
    sO.rects.push({
      kind: "mode",
      i: An,
      x: wn - 4,
      y: wt - 4,
      w: Ae + 8,
      h: 26
    });
    wn += Ae + 18;
  }
  let we = Mn - 24;
  for (let [hs, hn] of [["ENDLESS", false], ["DAILY", true]]) {
    {
      let ht = L.string_width(hs, "fnt_main");
      we -= ht;
      L.draw_text(we, wt, hs, sO.daily === hn ? mY.select : mY.dim);
      if (sO.daily === hn) {
        fillR(L, we, wt + 18, ht, 2, mY.select);
      }
      sO.rects.push({
        kind: "daily",
        v: hn,
        x: we - 4,
        y: wt - 4,
        w: ht + 8,
        h: 26
      });
      we -= 14;
    }
  }
  if (!A()) {
    we -= r(L, "Tab") + 2;
    D(L, we, wt, "Tab");
  }
  fillR(L, Mo + 16, Ms + 74, Mn - Mo - 32, 1, mY.faint);
  if (Me.mode === "darkner") {
    drawDarkner(L, Me);
  } else if (Me.mode === "bullet") {
    drawBullet(L, Me);
  } else {
    drawSound(L, Me);
  }
  drawInput(L, Me);
  let As = Mt - 30;
  fillR(L, Mo + 16, As - 8, Mn - Mo - 32, 1, mY.faint);
  if (A()) {
    chips(L, Mo + 24, As, Me.done ? [["TAP", "share / next"], ["TAP OUTSIDE", "close"]] : [["TAP", "the box to type"], ["TAP OUTSIDE", "close"]]);
  } else if (Me.done) {
    chips(L, Mo + 24, As, [["Z", "share"], ["C", sO.daily ? "endless" : "next"], ["LEFT", ""], ["RIGHT", "mode"], ["X", "close"]]);
  } else if (sO.q.trim() || Me.mode === "darkner") {
    chips(L, Mo + 24, As, [["ENTER", "guess"], ["UP", ""], ["DOWN", "pick"], ["LEFT", ""], ["RIGHT", "mode"], ["ESC", "close"]]);
  } else {
    chips(L, Mo + 24, As, [["ENTER", Me.mode === "sound" ? "play / skip" : "replay / skip"], ["UP", ""], ["DOWN", "pick"], ["LEFT", ""], ["RIGHT", "mode"], ["ESC", "close"]]);
  }
}
L2(Co, "draw");
function drawInput(L, o) {
  let [Ms,, Mn] = mC;
  let Mt = 390;
  let Me = Ms + 22;
  let wo = Mn - Ms - 44;
  if (o.done) {
    let no = o.won ? mY.ok : mY.warn;
    L.draw_text(Me, Mt + 3, fit(L, "* " + resultLine(o), wo - 150), no);
    let ns = Mn - 22;
    for (let [nn, nt, ne] of [[sO.daily ? "ENDLESS" : "NEXT", "next", "C"], ["SHARE", "share", "Z"]]) {
      let tn = L.string_width(nn, "fnt_main") + (A() ? 16 : r(L, ne) + 20);
      ns -= tn;
      strokeR(L, ns, Mt, tn, 22, mY.select);
      L.draw_text(ns + 8, Mt + 3, nn, mY.select);
      if (!A()) {
        D(L, ns + tn - r(L, ne) - 4, Mt + 2, ne);
      }
      sO.rects.push({
        kind: nt,
        x: ns,
        y: Mt,
        w: tn,
        h: 22
      });
      ns -= 8;
    }
    return;
  }
  let wt = menuRows();
  let we = sO.q.trim() ? [] : wt;
  let wa = Me + wo;
  if (we.length) {
    for (let tt = we.length - 1; tt >= 0; tt--) {
      let te = we[tt].kind === "skip" ? "SKIP" : we[tt].kind === "play" ? "PLAY" : "REPLAY";
      let ta = L.string_width(te, "fnt_main") + 30;
      wa -= ta;
      let fo = tt === sO.sel;
      strokeR(L, wa, Mt, ta, 22, fo ? mY.select : mY.dim);
      if (fo) {
        L.draw_sprite_ext("spr_heart", 0, wa + 5, Mt + 3, 1, 1, 0, "#ffffff", 1);
      }
      L.draw_text(wa + 22, Mt + 3, te, fo ? mY.select : mY.text);
      sO.rects.push({
        kind: "row",
        i: tt,
        x: wa,
        y: Mt,
        w: ta,
        h: 22
      });
      wa -= 6;
    }
  }
  let Ao = wa - Me;
  strokeR(L, Me, Mt, Ao, 22, sO.typing ? mY.select : mY.faint);
  sO.rects.push({
    kind: "input",
    x: Me,
    y: Mt,
    w: Ao,
    h: 22
  });
  let As = sO.typing && sO.blink % 30 < 15 ? "_" : "";
  let An = o.mode === "darkner" ? "GUESS " + (o.guesses.length + 1) + " / " + mT : "";
  let At = An ? L.string_width(An, "fnt_main") + 16 : 0;
  if (sO.q) {
    L.draw_text(Me + 8, Mt + 3, fit(L, "> " + sO.q + As, Ao - At - 16), mY.text);
  } else {
    L.draw_text(Me + 8, Mt + 3, fit(L, "> " + (o.mode === "sound" ? "type a track title" : "type an enemy") + As, Ao - At - 16), mY.faint);
  }
  if (An) {
    L.draw_set_halign("right");
    L.draw_text(Me + Ao - 8, Mt + 3, An, mY.dim);
    L.draw_set_halign("left");
  }
  if (!sO.q.trim()) {
    return;
  }
  if (!wt.length) {
    H(L, Me, Mt - 24, Me + wo, Mt - 2);
    L.draw_text(Me + 8, Mt - 22, fit(L, "Nothing called \"" + sO.q + "\" - BACKSPACE edits", wo - 16), mY.dim);
    return;
  }
  let Ae = 20;
  let ho = wt.length * Ae + 6;
  let hs = Mt - ho - 2;
  H(L, Me, hs, Me + wo, hs + ho);
  wt.forEach((fs, fn) => {
    let us = hs + 3 + fn * Ae;
    let un = fn === sO.sel;
    if (un) {
      fillR(L, Me + 18, us, wo - 22, Ae - 2, mY.hover);
      L.draw_sprite_ext("spr_heart", 0, Me + 4, us + 2, 1, 1, 0, "#ffffff", 1);
    }
    L.draw_text(Me + 24, us + 1, fit(L, fs.label, wo - 90), un ? mY.select : mY.text);
    if (fs.tag) {
      L.draw_set_halign("right");
      L.draw_text(Me + wo - 8, us + 1, fs.tag, mY.dim);
      L.draw_set_halign("left");
    }
    sO.rects.push({
      kind: "row",
      i: fn,
      x: Me,
      y: us,
      w: wo,
      h: Ae
    });
  });
}
L2(drawInput, "drawInput");
var Cn = 40;
var Ct = 172;
var To = 59;
var Ts = 2;
var Tn = 112;
var Tt = 40;
var Te = 34;
function drawDarkner(L, o) {
  L.draw_text(Cn + 4, 92, "GUESS", mY.dim);
  md.forEach((ws, wn) => {
    {
      L.draw_set_halign("center");
      L.draw_text(Ct + wn * (To + Ts) + To / 2, 92, ws.label, mY.dim);
      L.draw_set_halign("left");
    }
  });
  let Mo = now() - sO.shake;
  for (let ws = 0; ws < mT; ws++) {
    {
      let wa = Tn + ws * Tt;
      let Ao = o.guesses[ws];
      if (!Ao) {
        strokeR(L, Cn, wa, Ct - Cn - 6, Te, ws === o.guesses.length && !o.done ? mY.dim : mY.faint);
        for (let ho = 0; ho < md.length; ho++) {
          strokeR(L, Ct + ho * (To + Ts), wa, To, Te, mY.faint);
        }
        continue;
      }
      let As = judgeDarkner(Ao, o.answer);
      if (!As) {
        continue;
      }
      let An = ws === o.guesses.length - 1;
      let At = An && Mo < 300 && cfg().uimotion !== false ? Math.round(Math.sin(Mo / 25) * 3) : 0;
      let Ae = Ao === o.answer;
      strokeR(L, Cn + At, wa, Ct - Cn - 6, Te, Ae ? mY.ok : mY.dim);
      L.draw_text(Cn + 6 + At, wa + 9, fit(L, labelOf("darkner", Ao), Ct - Cn - 18), Ae ? mY.ok : mY.text);
      md.forEach((hs, hn) => {
        {
          let ko = As[hs.id];
          let ks = Ct + hn * (To + Ts) + At;
          if ((An && cfg().uimotion !== false ? (now() - sO.flash) / 90 - hn : 99) < 0) {
            strokeR(L, ks, wa, To, Te, mY.faint);
            return;
          }
          fillR(L, ks, wa, To, Te, ko.s === "hit" ? "#16301a" : ko.s === "near" ? "#33300a" : "#000");
          strokeR(L, ks, wa, To, Te, YI[ko.s], ko.s === "miss" || ko.s === "unk" ? 1 : 2);
          let kn = hs.id === "hp" || hs.id === "at" ? short(ko.v) : String(ko.v);
          L.draw_set_halign("center");
          L.draw_text(ks + To / 2, wa + (ko.dir ? 4 : 9), fit(L, kn, To - 6), Ys[ko.s]);
          L.draw_set_halign("left");
          if (ko.dir) {
            tri(L, ks + To / 2 - 3, wa + 25, ko.dir > 0, Ys[ko.s]);
          }
        }
      });
    }
  }
  let Mt = o.guesses[o.guesses.length - 1];
  let Me = Tn + mT * Tt + 2;
  if (Mt && !o.done) {
    {
      let hs = mv.get(Mt);
      L.draw_text(Cn, Me, fit(L, "MUSIC: " + musicName(hs) + "    SOUL: " + (hs.soul || []).join(" / "), 560), mY.dim);
    }
  } else if (!o.guesses.length) {
    L.draw_text(Cn, Me, fit(L, "* " + mM.darkner + " Arrows: the answer is higher / lower.", 560), mY.dim);
  }
}
L2(drawDarkner, "drawDarkner");
var gs = [40, 90, 320, 290];
function drawBullet(L, o) {
  let [Ms, Mn, Mt, Me] = gs;
  fillR(L, Ms, Mn, Mt, Me, "#000");
  strokeR(L, Ms - 1, Mn - 1, Mt + 2, Me + 2, mY.faint);
  let wo = stageOf(o);
  if (!o.clip) {
    L.draw_text(Ms + 12, Mn + 12, "No clip for this puzzle.", mY.dim);
  } else if (sZ.frames && sZ.key === clipKey(o)) {
    let Ao = Math.min(sZ.frames.length, Math.round(wo.secs * 15));
    let As = now() - sZ.t0;
    let An = Ao * 66.66666666666667 + 600;
    let At = Math.floor(As % An / 66.66666666666667);
    let Ae = sZ.frames[Math.min(Ao - 1, At)];
    if (At < Ao && Ae) {
      {
        let hs = Math.min(1, Mt / sZ.w, Me / sZ.h);
        let hn = Math.round(sZ.w * hs);
        let ht = Math.round(sZ.h * hs);
        let he = L.ctx.imageSmoothingEnabled;
        L.ctx.imageSmoothingEnabled = false;
        L.ctx.drawImage(Ae, Ms + Math.floor((Mt - hn) / 2), Mn + Math.floor((Me - ht) / 2), hn, ht);
        L.ctx.imageSmoothingEnabled = he;
      }
    }
    fillR(L, Ms, Mn + Me + 1, Math.round(Mt * Math.min(1, As % An / (Ao * 1000 / 15))), 2, mY.faint);
    sO.rects.push({
      kind: "replay",
      x: Ms,
      y: Mn,
      w: Mt,
      h: Me
    });
  } else if (sZ.err) {
    let ha = Mn + 12;
    for (let ko of wrapText(L, sZ.err, Mt - 24)) {
      L.draw_text(Ms + 12, ha, ko, mY.warn);
      ha += 16;
    }
  } else {
    L.draw_set_halign("center");
    L.draw_text(Ms + Mt / 2, Mn + Me / 2 - 8, "* The sim is playing it..." + clipProgress(), mY.dim);
    L.draw_set_halign("left");
  }
  if (wo.name && o.clip) {
    H(L, Ms, Mn + Me - 22, Ms + Mt, Mn + Me);
    L.draw_text(Ms + 8, Mn + Me - 20, fit(L, "* " + (o.done ? o.clip.n : clueName(o.clip.n)), Mt - 16), mY.select);
  }
  let wt = 376;
  let we = 224;
  L.draw_text(wt, 90, "EACH MISS SHOWS", mY.dim);
  let wa = o.done ? mA.length : Math.min(mA.length - 1, o.guesses.length);
  mA.forEach((ks, kn) => {
    let ke = 108 + kn * 18;
    let ka = kn === wa;
    let no = kn < wa;
    if (ka) {
      L.draw_sprite_ext("spr_heart", 0, wt, ke + 2, 1, 1, 0, "#ffffff", 1);
    }
    L.draw_text(wt + 18, ke, fit(L, ks.label, we - 18), ka ? mY.select : no ? mY.text : mY.faint);
  });
  drawGuessList(L, o, wt, 222, we);
}
L2(drawBullet, "drawBullet");
function drawGuessList(L, o, Nt, Mo, Ms) {
  L.draw_text(Nt, Mo, "GUESSES  " + o.guesses.length + " / " + mT, mY.dim);
  for (let ws = 0; ws < mT; ws++) {
    let wn = Mo + 18 + ws * 22;
    let wt = o.guesses[ws];
    strokeR(L, Nt, wn, Ms, 20, wt ? mY.faint : ws === o.guesses.length && !o.done ? mY.dim : "#1a1426");
    if (!wt) {
      continue;
    }
    let we = judgeSimple(o.mode, wt, o.answer);
    let wa = we.s === "hit" ? "RIGHT" : we.s === "near" ? o.mode === "sound" ? "SAME GAME" : "SAME CH" : we.s === "skip" ? "" : "NO";
    let Ao = wa ? L.string_width(wa, "fnt_main") + 8 : 0;
    L.draw_text(Nt + 6, wn + 1, fit(L, wt === s4 ? "SKIPPED" : labelOf(o.mode, wt), Ms - Ao - 12), wt === s4 ? mY.dim : we.s === "hit" ? mY.ok : mY.text);
    if (wa) {
      L.draw_set_halign("right");
      L.draw_text(Nt + Ms - 5, wn + 1, wa, Ys[we.s]);
      L.draw_set_halign("left");
    }
  }
}
L2(drawGuessList, "drawGuessList");
function wrapText(L, o, Nt) {
  let Mn = [];
  let Mt = "";
  for (let ws of String(o).split(/\s+/)) {
    let wn = Mt ? Mt + " " + ws : ws;
    if (!Mt || L.string_width(wn, "fnt_main") <= Nt) {
      Mt = wn;
    } else {
      Mn.push(Mt);
      Mt = ws;
    }
  }
  if (Mt) {
    Mn.push(Mt);
  }
  return Mn;
}
L2(wrapText, "wrapText");
function drawSound(L, o) {
  let Ms = mw[mw.length - 1];
  let Mn = o.done ? Ms : mw[Math.min(mw.length - 1, o.guesses.length)];
  fillR(L, 44, 96, Math.round(Mn * 552 / Ms), 14, "#241a33");
  strokeR(L, 44, 96, 552, 14, mY.faint);
  for (let Ao of mw) {
    let As = 44 + Math.round(Ao * 552 / Ms);
    fillR(L, As, 96, 1, 14, mY.faint);
  }
  let Mt = snippetPos();
  if (sM.playing) {
    fillR(L, 44, 99, Math.round(Math.min(Ms, Mt) * 552 / Ms), 8, mY.select);
  }
  L.draw_text(44, 114, "0", mY.faint);
  L.draw_set_halign("right");
  L.draw_text(596, 114, Ms + " s", mY.faint);
  L.draw_set_halign("left");
  let ws = 44;
  let wn = 134;
  let wt = 180;
  let we = 30;
  strokeR(L, ws, wn, wt, we, sM.playing || sM.loading ? mY.select : mY.dim, 2);
  T(L, "heart", ws + 10, wn + 7, 2, sM.playing ? mY.soul : mY.select);
  let wa = o.done ? "the whole track" : fmtSecs(mw[Math.min(5, o.guesses.length)]);
  L.draw_text(ws + 34, wn + 7, sM.loading ? "LOADING..." : sM.playing ? "PLAYING " + Mt.toFixed(1) + " s" : "PLAY " + wa, sM.playing ? mY.select : mY.text);
  sO.rects.push({
    kind: "play",
    x: ws,
    y: wn,
    w: wt,
    h: we
  });
  if (!A() && !sO.q) {
    D(L, ws + wt + 10, wn + 6, "Enter");
    L.draw_text(ws + wt + 16 + r(L, "Enter"), wn + 7, "on an empty line", mY.dim);
  }
  drawGuessList(L, o, 44, 180, 552);
  if (!o.guesses.length) {
    L.draw_text(44, 344, fit(L, "* " + mM.sound, 552), mY.dim);
  }
}
L2(drawSound, "drawSound");
C({
  id: "darkdle",
  name: m8,
  group: "practice",
  states: ["menu"],
  icon: "darkdle",
  palette: false,
  keywords: "darkdle wordle daily puzzle guess enemy bullet hell soundtest music heardle game",
  desc: "A daily guessing game: the enemy by its stats, the attack by its bullets, the song by its first half second.",
  onUse: L2(() => openDarkdle(), "onUse")
});
k({
  id: "darkdle:open",
  owner: mm,
  title: m8,
  group: "TOOL",
  keywords: "wordle daily puzzle guess game",
  states: ["menu"],
  run: L2(() => openDarkdle(), "run")
});
for (let v3 of mg) {
  k({
    id: "darkdle:" + v3,
    owner: mm,
    title: m8 + ": " + mN[v3],
    group: "TOOL",
    keywords: "wordle daily puzzle guess " + v3,
    states: ["menu"],
    run: L2(() => openDarkdle({
      mode: v3
    }), "run")
  });
}
var No = {
  open: openDarkdle,
  board: L2(() => sO.board, "board"),
  submit: submit,
  shareText: L2(() => sO.board && shareText(sO.board), "shareText"),
  selfTest: selfTest
};
f("darkdle", No);
t(() => {
  if (typeof window !== "undefined" && L3.__DR) {
    L3.__DR.darkdle = No;
  }
}, mm);
function selfTest() {
  const Ms = {
    ok: false
  };
  Ms.checks = [];
  Ms.results = [];
  Ms.reason = "not in the production build";
  return Ms;
}
L2(selfTest, "selfTest");
export { m8 as a };
function Nn(L, o) {
  var Mt = new URL(L, o).href;
  var Me = globalThis.__drWarm;
  return (Me ? Me(Mt) : Promise.resolve()).then(function () {
    {
      return import(Mt).catch(function (we) {
        try {
          {
            we.reload = true;
            we.what = "the game code";
          }
        } catch (At) {}
        throw we;
      });
    }
  });
}
