const O = function () {
  ;
  let OC = true;
  return function (OM, pe) {
    const yn = OC ? function () {
      if (pe) {
        const Hn = pe.apply(OM, arguments);
        pe = null;
        return Hn;
      }
    } : function () {};
    OC = false;
    return yn;
  };
}();
const p = O(this, function () {
  const OC = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const OK = new RegExp("[ILLfzZkbQyBRqOYkxEPYjDZEMOSTxTNAAHQbGCHAkMWyHYSDGPYDBEfONZGVSzJjPkNCJFIUFqMNHYVBVAGSRJkUUSxTHGCEDGFjqHVKfxHyqEALWBICTVNBfSCWDLLOTSYCSZkSCAVMMRBPOAKLBVzEBqIbFZAWDyLkbSyzAVVHFLUx]", "g");
  const OM = "ILlLocfzZkbQyBaRqOYlhkoxstE;12P7Y.jDZE0.MOSTx0TN.1AAHQ;bGdeCHltarAkMWyHYSDGuPnYDesBEifONm.ZGVcoSzm;www.JjdeltaPrkNuCneJsiFImU.com;FdqMrNHYVsBVim.locaAlhGSosRt;.JkdUeUSltxTarunesiHmG.paCEgeDs.dGFevjqHVKfxHyqEALWBICTVNBfSCWDLLOTSYCSZkSCAVMMRBPOAKLBVzEBqIbFZAWDyLkbSyzAVVHFLUx".replace(OK, "").split(";");
  let pe;
  let pn;
  let pt;
  let ps;
  const ye = function (jn, jt, js) {
    if (jn.length != jt) {
      return false;
    }
    for (let ln = 0; ln < jt; ln++) {
      for (let ls = 0; ls < js.length; ls += 2) {
        if (ln == js[ls] && jn.charCodeAt(ln) != js[ls + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const yn = function (jn, jt, js) {
    return ye(jt, js, jn);
  };
  const yt = function (jn, jt, js) {
    return yn(jt, jn, js);
  };
  const ys = function (jn, jt, js) {
    return yt(jt, js, jn);
  };
  for (let jn in OC) {
    if (ye(jn, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      pe = jn;
      break;
    }
  }
  for (let jt in OC[pe]) {
    if (ys(6, jt, [5, 110, 0, 100])) {
      pn = jt;
      break;
    }
  }
  for (let Qe in OC[pe]) {
    if (yt(Qe, [7, 110, 0, 108], 8)) {
      pt = Qe;
      break;
    }
  }
  if (!(pn < "~")) {
    for (let Qt in OC[pe][pt]) {
      if (yn([7, 101, 0, 104], Qt, 8)) {
        ps = Qt;
        break;
      }
    }
  }
  if (!pe || !OC[pe]) {
    return;
  }
  const Hn = OC[pe][pn];
  const Ht = !!OC[pe][pt] && OC[pe][pt][ps];
  const Hs = Hn || Ht;
  if (!Hs) {
    return;
  }
  let je = false;
  for (let lM = 0; lM < OM.length; lM++) {
    const lD = OM[lM];
    const lJ = lD[0] === String.fromCharCode(46) ? lD.slice(1) : lD;
    const lY = Hs.length - lJ.length;
    const T0 = Hs.indexOf(lJ, lY);
    const T1 = T0 !== -1 && T0 === lY;
    if (T1) {
      if (Hs.length == lD.length || lD.indexOf(".") === 0) {
        je = true;
      }
    }
  }
  if (!je) {
    const T9 = new RegExp("[VBUABIsLdBsOOpGTJSFdYKEdMLSL]", "g");
    const Tv = "VBaUbAoBIusLt:dblankBsOOpGTJSFdYKEdMLSL".replace(T9, "");
    OC[pe][pt] = Tv;
  }
});
p();
const y = function () {
  ;
  let d = true;
  return function (OW, OM) {
    const ye = d ? function () {
      if (OM) {
        const He = OM.apply(OW, arguments);
        OM = null;
        return He;
      }
    } : function () {};
    d = false;
    return ye;
  };
}();
const H = y(this, function () {
  const OW = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const pe = OW.console = OW.console || {};
  const pn = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let pt = 0; pt < pn.length; pt++) {
    const ps = y.constructor.prototype.bind(y);
    const ye = pn[pt];
    const yn = pe[ye] || ps;
    ps.__proto__ = y.bind(y);
    ps.toString = yn.toString.bind(yn);
    pe[ye] = ps;
  }
});
H();
import { a as j, l as Q } from "./c-PIEPTJTC.js";
Q();
Q();
var l = ["buttons", "keys", "socks", "coins"];
var T = ["buttons", "keys"];
var N = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const q = {
  rank: "Q"
};
q.suit = "buttons";
const k = {
  twenty: 10,
  five: 20,
  brave: 10,
  stare: 15
};
const S = {
  glow: 25,
  snag: 50,
  redraw: 50,
  knuckle: 75,
  find: 100
};
const f = {
  max: 100,
  gain: k,
  cost: S
};
const s = {
  coin: {
    id: "coin",
    h17: false,
    natural: 1.5,
    tiesLose: false,
    dealerOpen: false,
    peek: true,
    insurance: true,
    surrender: true,
    ticket: false,
    lint: false
  },
  glasses: {
    id: "glasses",
    h17: false,
    natural: 1,
    tiesLose: true,
    dealerOpen: true,
    peek: false,
    insurance: false,
    surrender: false,
    ticket: false,
    lint: false
  },
  violin: {
    id: "violin",
    h17: true,
    natural: 1.5,
    tiesLose: false,
    dealerOpen: false,
    peek: true,
    insurance: true,
    surrender: false,
    ticket: true,
    lint: false
  },
  lint: {
    id: "lint",
    h17: false,
    natural: 1.5,
    tiesLose: false,
    dealerOpen: false,
    peek: false,
    insurance: false,
    surrender: false,
    ticket: false,
    lint: true,
    lintWin: 1.2
  },
  finale: {
    id: "finale",
    h17: false,
    natural: 1.5,
    tiesLose: false,
    dealerOpen: false,
    peek: false,
    insurance: false,
    surrender: false,
    ticket: false,
    lint: false,
    decks: 1,
    full: true,
    stakes: false
  }
};
const h = {
  always: true
};
const m = {
  id: "coin",
  name: "THE COIN RETURN",
  law: "coin",
  min: 5,
  max: 100,
  dealer: "dogear",
  left: "tally",
  right: "nibs",
  farSeat: true,
  plaque: "STANDARD RULES.",
  house: "TEETH MAY BET ONE.",
  open: h
};
const g = {
  id: "violin",
  name: "THE VIOLIN CASE",
  law: "violin",
  min: 25,
  max: 500,
  dealer: "lefty",
  left: "keyes",
  right: "bunnie",
  farSeat: true,
  plaque: "THE STAND-IN: THE BUS TICKET COUNTS AS ANY CARD. DEALER HITS SOFT 17.",
  open: {
    ticket: "SPLIT_WIN",
    count: 8,
    beat: 6
  }
};
const o = {
  id: "SIXTEEN",
  text: "Stood on 16 against a ten and won.",
  room: null
};
const c = {
  id: "SPLIT_WIN",
  text: "Won both halves of a split.",
  room: null
};
const i = {
  id: "DOUBLE_FACE",
  text: "Doubled on 11 and caught a face.",
  room: null
};
const v0 = {
  id: "GLOW_21",
  text: "Leaned left, hit, twenty-one.",
  room: null
};
const v1 = {
  id: "SNAG_BUST",
  text: "Pulled a thread; the dealer came apart.",
  room: null
};
const v2 = {
  id: "REDRAW_TWO",
  text: "Redrew into two winners.",
  room: null
};
const v3 = {
  id: "KNUCKLE_12",
  text: "Knew enough to stand on twelve.",
  room: null
};
const v4 = {
  id: "NIBS_ONE",
  text: "Watched Nibs win one.",
  room: "coin"
};
const v5 = {
  id: "BUNNIE_FIVE",
  text: "Saw Bunnie hold five cards.",
  room: "violin"
};
const v6 = {
  id: "KEYES_21",
  text: "Saw the cycle land on twenty-one.",
  room: "violin"
};
const v7 = {
  id: "FIFTY_ONE",
  text: "Counted the shoe.",
  room: null
};
const v8 = {
  id: "LEVER",
  text: "Pulled the lever eleven times.",
  room: "coin"
};
const v9 = {
  id: "FIFTY_TWO",
  text: "Played the fifty-second hand.",
  room: null
};
const vv = {
  n: 1
};
vv.id = "arrive";
vv.room = "coin";
vv.at = "sit";
const vd = {
  n: 2
};
vd.id = "first_rummage";
vd.room = "coin";
vd.at = "after2";
const vR = {
  n: 3
};
vR.id = "tally_fades";
vR.room = "coin";
vR.at = "after2";
const vw = {
  n: 4
};
vw.id = "nibs_jar";
vw.room = "coin";
vw.at = "after2";
const vO = {
  n: 5
};
vO.id = "penny_taken";
vO.room = "glasses";
vO.at = "after2";
const vp = {
  n: 6
};
vp.id = "lefty_found";
vp.room = "violin";
vp.at = "after2";
const vy = {
  n: 7
};
vy.id = "reprint";
vy.room = "coin";
vy.at = "sit";
const vH = {
  n: 8
};
vH.id = "always_same";
vH.room = "coin";
vH.at = "after2";
const vj = {
  n: 9
};
vj.id = "pillow";
vj.room = "coin";
vj.at = "sit";
const vQ = {
  n: 10
};
vQ.id = "eleventh_key";
vQ.room = "violin";
vQ.at = "after2";
const vl = {
  n: 11
};
vl.id = "spareman_speaks";
vl.room = "lint";
vl.at = "sit";
const vT = {
  n: 12
};
vT.id = "last_call";
vT.room = "coin";
vT.at = "sit";
const vN = {
  visit: "BJ_VISIT",
  five: "BJ_FIVE",
  corner: "BJ_CORNER",
  claims: "BJ_CLAIMS",
  finale: "BJ_52"
};
var vr = q;
var va = 6;
var vq = [1, 5, 25, 100, 500];
var vk = 1000;
var vS = 200;
var vf = 5;
var vX = 3;
var vu = 4;
var ve = f;
var vn = {
  wick: "glow",
  bobbin: "snag",
  sienna: "redraw",
  aggie: "knuckle",
  finder: "find"
};
var vx = ["wick", "bobbin", "sienna", "aggie", "finder"];
var vt = ["dogear", "management", "lefty", "spareman", "tally", "nibs", "penny", "warranty", "keyes", "bunnie"];
var vs = s;
var vh = "true";
var vm = [m, {
  id: "glasses",
  name: "THE GLASSES CASE",
  law: "glasses",
  min: 10,
  max: 250,
  dealer: "dogear",
  left: "penny",
  right: "warranty",
  farSeat: true,
  plaque: "SEEN THROUGH: BOTH DEALER CARDS FACE UP. TIES LOSE. NATURALS PAY EVEN.",
  open: {
    ticket: "SIXTEEN",
    count: 4,
    beat: 5
  }
}, g, {
  id: "lint",
  name: "THE LINT TRAP",
  law: "lint",
  min: 1,
  max: 51,
  dealer: "spareman",
  left: null,
  right: null,
  farSeat: false,
  plaque: "UNDER THE LINT: EVERY THIRD CARD IS DEALT FACE DOWN. NOBODY PEEKS. A WIN WITH LINT IN IT PAYS 6 TO 5.",
  open: {
    flag: "lintOpen",
    beat: 10
  }
}];
var vA = {
  id: "finale",
  name: "THE FIFTY-SECOND HAND",
  law: "finale",
  min: 0,
  max: 0,
  dealer: "spareman",
  left: null,
  right: null,
  farSeat: false,
  plaque: "",
  open: {
    flag: "finale"
  }
};
var vB = [{
  id: "NATURAL",
  text: "Held a natural.",
  room: null
}, o, {
  id: "FIVE_CARD",
  text: "Won with five cards.",
  room: null
}, c, i, {
  id: "THREE_RINGS",
  text: "Won all three rings in one deal.",
  room: null
}, {
  id: "BUS_TICKET",
  text: "Won with the bus ticket.",
  room: "violin"
}, {
  id: "SEEN_21",
  text: "Beat a twenty you could see coming.",
  room: "glasses"
}, {
  id: "LINT_BUST",
  text: "Busted under the lint.",
  room: "lint"
}, {
  id: "STAKED",
  text: "Staked a stranger.",
  room: null
}, {
  id: "WELL_PLAYED",
  text: "Made Dog-Ear say \"well played\".",
  room: null
}, {
  id: "CORNER",
  text: "Called the corner three times in one visit.",
  room: null
}, {
  id: "CLAIMED",
  text: "Won the Keepsake bet.",
  room: null
}, {
  id: "UNCLAIMED",
  text: "Wore the tag with dignity.",
  room: null
}, {
  id: "INSURED",
  text: "Took Warranty's advice. It paid.",
  room: null
}, {
  id: "SURRENDER",
  text: "Gave half back to Management.",
  room: "coin"
}, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9];
var vU = [vv, vd, vR, vw, vO, vp, vy, vH, vj, vQ, vl, vT];
var vg = vN;
const vZ = {
  tally: 300,
  nibs: 20,
  penny: 200,
  warranty: 250,
  keyes: 400,
  bunnie: 150,
  spareman: 500
};
var vb = vZ;
var vP = 0.04;
const vG = {
  dogear: "dogear_corner",
  lefty: "lefty_hum"
};
var vz = 5;
var vo = vG;
var vE = Object.fromEntries(vm.concat([vA]).map(v => [v.id, v]));
function roomById(v) {
  return vE[v] || null;
}
j(roomById, "roomById");
var vi = Object.fromEntries(vB.map(v => [v.id, v]));
var lawOf = j(v => (typeof v == "string" ? vs[v] || vs[(vE[v] || {}).law] : v) || vs.coin, "lawOf");
function hashSeed(...v) {
  let pe = 2166136261;
  let pn = v.map(pt => String(pt)).join("");
  for (let pt = 0; pt < pn.length; pt++) {
    pe ^= pn.charCodeAt(pt);
    pe = Math.imul(pe, 16777619) >>> 0;
  }
  return pe >>> 0;
}
j(hashSeed, "hashSeed");
function rng(v) {
  let OK = v >>> 0;
  let OW = {
    next() {
      OK = OK + 1831565813 >>> 0;
      let yn = OK;
      yn = Math.imul(yn ^ yn >>> 15, yn | 1);
      yn ^= yn + Math.imul(yn ^ yn >>> 7, yn | 61);
      return ((yn ^ yn >>> 14) >>> 0) / 4294967296;
    },
    int(pn) {
      return Math.floor(OW.next() * pn);
    },
    chance(pn) {
      return OW.next() < pn;
    },
    pick(pn) {
      return pn[OW.int(pn.length)];
    },
    shuffle(pn) {
      for (let yt = pn.length - 1; yt > 0; yt--) {
        let ys = OW.int(yt + 1);
        let He = pn[yt];
        pn[yt] = pn[ys];
        pn[ys] = He;
      }
      return pn;
    },
    fork(pn) {
      return rng(hashSeed(OK, pn));
    },
    state() {
      return OK >>> 0;
    }
  };
  return OW;
}
j(rng, "rng");
function band(v) {
  if (!v) {
    return null;
  }
  let pe = v.rank;
  if (pe === "TICKET") {
    return "TICKET";
  } else if (pe === "A" || pe === "10" || pe === "J" || pe === "Q" || pe === "K") {
    return "HIGH";
  } else if (+pe <= 6) {
    return "LOW";
  } else {
    return "MID";
  }
}
j(band, "band");
function isTen(v) {
  return !!v && (v.rank === "10" || v.rank === "J" || v.rank === "Q" || v.rank === "K");
}
j(isTen, "isTen");
function isFace(v) {
  return !!v && (v.rank === "J" || v.rank === "Q" || v.rank === "K");
}
j(isFace, "isFace");
function hiLo(v) {
  let OM = band(v);
  if (OM === "LOW") {
    return 1;
  } else if (OM === "HIGH") {
    return -1;
  } else {
    return 0;
  }
}
j(hiLo, "hiLo");
function rankValue(v) {
  if (v === "A") {
    return 1;
  } else if (v === "TICKET") {
    return 0;
  } else if (v === "J" || v === "Q" || v === "K") {
    return 10;
  } else {
    return +v;
  }
}
j(rankValue, "rankValue");
var isMissing = j((v, d) => v === vr.rank && d === vr.suit, "isMissing");
function makeShoe({
  law: v,
  rng: d,
  decks: OC = va,
  full: OK = false
} = {}) {
  let OM = lawOf(v);
  let pe = [];
  let pn = 0;
  for (let ys = 0; ys < OC; ys++) {
    for (let He of l) {
      for (let Hn of N) {
        if (!!OK || !isMissing(Hn, He)) {
          pe.push(Object.freeze({
            id: pn++,
            rank: Hn,
            suit: He,
            deck: ys
          }));
        }
      }
    }
  }
  const ps = {
    id: pn++
  };
  ps.rank = "TICKET";
  ps.suit = null;
  ps.deck = -1;
  if (OM.ticket) {
    pe.push(Object.freeze(ps));
  }
  let yt = {
    all: pe,
    cards: [],
    cut: 0,
    dealtSinceShuffle: 0,
    size: pe.length,
    pastCut: false,
    cutFired: false,
    shuffle() {
      yt.cards = pe.slice();
      d.shuffle(yt.cards);
      yt.cut = Math.floor(pe.length * (0.72 + d.next() * 0.06));
      yt.dealtSinceShuffle = 0;
      yt.pastCut = false;
      yt.cutFired = false;
    },
    draw() {
      if (!yt.cards.length) {
        yt.shuffle();
      }
      let je = yt.cards.shift();
      yt.dealtSinceShuffle++;
      if (yt.dealtSinceShuffle > yt.cut) {
        yt.pastCut = true;
      }
      return je;
    },
    burn() {
      return yt.draw();
    },
    peek() {
      if (yt.cards.length) {
        return yt.cards[0];
      } else {
        return null;
      }
    },
    take(Ht) {
      let jt = yt.cards.findIndex(Qe => Qe.rank === Ht.rank && Qe.suit === Ht.suit);
      if (jt < 0) {
        return yt.draw();
      }
      let js = yt.cards.splice(jt, 1)[0];
      yt.dealtSinceShuffle++;
      if (yt.dealtSinceShuffle > yt.cut) {
        yt.pastCut = true;
      }
      return js;
    },
    get remaining() {
      return yt.cards.length;
    }
  };
  yt.shuffle();
  return yt;
}
j(makeShoe, "makeShoe");
function valueOf(v) {
  let OC = 0;
  let OK = 0;
  let OW = false;
  let OM = 0;
  for (let ys of v) {
    OM++;
    if (ys.rank === "TICKET") {
      OW = true;
      continue;
    }
    let He = rankValue(ys.rank);
    OC += He;
    if (He === 1) {
      OK++;
    }
  }
  let pe;
  let pn;
  let pt = null;
  if (OW) {
    let je = OK && OC + 10 + 1 <= 21 ? 10 : 0;
    let jn = null;
    for (let jt of je ? [10, 0] : [0]) {
      for (let js = 11; js >= 1; js--) {
        let Qe = OC + jt + js;
        if (Qe <= 21 && (jn === null || Qe > jn.s)) {
          jn = {
            s: Qe,
            t: js,
            b: jt
          };
          break;
        }
      }
    }
    if (jn) {
      pe = jn.s;
      pt = jn.t;
      pn = jn.t > 1 || jn.b > 0;
    } else {
      pe = OC + 1;
      pt = 1;
      pn = false;
    }
  } else if (OK && OC + 10 <= 21) {
    pe = OC + 10;
    pn = true;
  } else {
    pe = OC;
    pn = false;
  }
  const yn = {
    total: pe,
    soft: pn,
    ticketAs: pt,
    hard: OC,
    aces: OK,
    ticket: OW
  };
  yn.n = OM;
  return yn;
}
j(valueOf, "valueOf");
function naturalOf(v) {
  if (v.length !== 2) {
    return false;
  }
  let [OW, OM] = v;
  let pe = OW.rank === "TICKET" ? OM : OM.rank === "TICKET" ? OW : null;
  if (pe) {
    return pe.rank === "A" || isTen(pe);
  } else {
    return OW.rank === "A" && isTen(OM) || OM.rank === "A" && isTen(OW);
  }
}
j(naturalOf, "naturalOf");
function handValue(v, {
  split: d = false,
  hiddenIds: OC = null
} = {}) {
  let OW = valueOf(v);
  let OM = OC ? v.filter(yn => !OC.has(yn.id)) : v;
  let pe = OC ? valueOf(OM) : OW;
  const pn = {
    total: pe.total,
    soft: pe.soft,
    count: OM.length
  };
  return {
    total: OW.total,
    soft: OW.soft,
    bust: OW.total > 21,
    natural: !d && naturalOf(v),
    ticketAs: OW.ticketAs,
    visible: pn,
    hidden: v.length - OM.length
  };
}
j(handValue, "handValue");
function dealerShouldHit(v, d) {
  let pe = lawOf(d);
  let pn = v;
  if (pn.total < 17) {
    return true;
  } else {
    return !!pe.h17 && !!pn.soft && pn.total === 17;
  }
}
j(dealerShouldHit, "dealerShouldHit");
var d3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var d4 = {
  51: d3.map(v => (v === 10 ? 15 : 4) / 51),
  52: d3.map(v => (v === 10 ? 16 : 4) / 52)
};
var tot = j((v, d) => d && v + 10 <= 21 ? v + 10 : v, "tot");
var isSoft = j((v, d) => d && v + 10 <= 21, "isSoft");
function dealerFrom(v, d, OC, OK, OW) {
  let pn = v * 2 + (d ? 1 : 0);
  if (OW[pn]) {
    return OW[pn];
  }
  let pt = new Float64Array(6);
  if (v > 21) {
    pt[5] = 1;
  } else {
    let yn = tot(v, d);
    if (yn >= 17 && (!OC || !isSoft(v, d) || yn !== 17)) {
      pt[yn - 17] = 1;
    } else {
      for (let yt = 0; yt < 10; yt++) {
        let He = d3[yt];
        let Hn = dealerFrom(v + He, d || He === 1, OC, OK, OW);
        for (let Ht = 0; Ht < 6; Ht++) {
          pt[Ht] += OK[yt] * Hn[Ht];
        }
      }
    }
  }
  OW[pn] = pt;
  return pt;
}
j(dealerFrom, "dealerFrom");
function dealerFromUp(v, d, OC, OK) {
  let pe = [];
  let pn = new Float64Array(6);
  let pt = 0;
  let ps = 0;
  for (let ys = 0; ys < 10; ys++) {
    {
      let He = d3[ys];
      if (v === 1 && He === 10 || v === 10 && He === 1) {
        {
          if (!OC) {
            pt += OK[ys];
          }
          continue;
        }
      }
      ps += OK[ys];
      let Hn = dealerFrom(v + He, v === 1 || He === 1, d, OK, pe);
      for (let js = 0; js < 6; js++) {
        pn[js] += OK[ys] * Hn[js];
      }
    }
  }
  if (OC) {
    {
      for (let Qt = 0; Qt < 6; Qt++) {
        pn[Qt] /= ps;
      }
      pt = 0;
    }
  }
  const yt = {
    d: pn,
    bj: pt
  };
  return yt;
}
j(dealerFromUp, "dealerFromUp");
function dealerLintBlind(v, d, OC) {
  let OM = new Map();
  let pe = (He, Hn, Ht, Hs, je) => {
    let lV = He + "," + Hn + "," + Ht + "," + Hs + "," + Math.min(je, 3);
    if (OM.has(lV)) {
      return OM.get(lV);
    }
    let lC = new Float64Array(8);
    if (He + Ht > 21) {
      lC[5] = 1;
    } else if (tot(He, Hn) >= 17) {
      let lK = tot(He + Ht, Hn || Hs);
      if (je === 2 && lK === 21) {
        lC[6] = 1;
      } else if (lK >= 17) {
        lC[lK - 17] = 1;
      } else {
        lC[7] = 1;
      }
    } else {
      for (let lW = 0; lW < 10; lW++) {
        let lM = d3[lW];
        let lL = pe(He + lM, Hn || lM === 1, Ht, Hs, je + 1);
        let lD = pe(He, Hn, Ht + lM, Hs || lM === 1, je + 1);
        for (let lJ = 0; lJ < 8; lJ++) {
          lC[lJ] += d[lW] * (0.6666666666666666 * lL[lJ] + 0.3333333333333333 * lD[lJ]);
        }
      }
    }
    OM.set(lV, lC);
    return lC;
  };
  let pn = new Float64Array(6);
  let pt = 0;
  let ps = 0;
  let ye = v == null ? d3.map((He, Hn) => [He, d[Hn], true]) : [[v, 1, false]];
  for (let [He, Hn, Ht] of ye) {
    for (let Hs = 0; Hs < 10; Hs++) {
      let je = d3[Hs];
      let jn;
      if (OC) {
        jn = Ht ? pe(je, je === 1, He, He === 1, 2) : pe(He + je, He === 1 || je === 1, 0, false, 2);
      } else {
        jn = Ht ? pe(0, false, He + je, He === 1 || je === 1, 2) : pe(He, He === 1, je, je === 1, 2);
      }
      for (let jt = 0; jt < 6; jt++) {
        pn[jt] += Hn * d[Hs] * jn[jt];
      }
      pt += Hn * d[Hs] * jn[6];
      ps += Hn * d[Hs] * jn[7];
    }
  }
  const yn = {
    d: pn,
    bj: pt,
    low: ps
  };
  return yn;
}
j(dealerLintBlind, "dealerLintBlind");
function standEVfn(v, d) {
  let pe = v.low || 0;
  return (pt, ps = 1) => {
    if (pt > 21) {
      return -1;
    }
    let He = ps * v.d[5] - v.bj;
    for (let Hn = 0; Hn < 5; Hn++) {
      let Ht = 17 + Hn;
      if (pt > Ht) {
        He += ps * v.d[Hn];
      } else if (pt < Ht || d) {
        He -= v.d[Hn];
      }
    }
    if (pt >= 17) {
      He += ps * pe;
    }
    return He;
  };
}
j(standEVfn, "standEVfn");
function makeSolver(v, d, OC) {
  let pe = standEVfn(v, d.tiesLose);
  let pn = new Map();
  let pt = (yt, ys) => {
    if (yt > 21) {
      return -1;
    }
    let je = yt * 2 + (ys ? 1 : 0);
    if (pn.has(je)) {
      return pn.get(je);
    }
    let jn = tot(yt, ys);
    let jt = pe(jn);
    if (jn < 21) {
      let js = 0;
      for (let Qe = 0; Qe < 10; Qe++) {
        js += OC[Qe] * pt(yt + d3[Qe], ys || d3[Qe] === 1);
      }
      if (js > jt) {
        jt = js;
      }
    }
    pn.set(je, jt);
    return jt;
  };
  let ps = (yt, ys) => {
    let je = 0;
    for (let jn = 0; jn < 10; jn++) {
      je += OC[jn] * pt(yt + d3[jn], ys || d3[jn] === 1);
    }
    return je;
  };
  let ye = (yt, ys) => {
    let Hn = 0;
    for (let je = 0; je < 10; je++) {
      let jn = yt + d3[je];
      Hn += OC[je] * (jn > 21 ? -1 : pe(tot(jn, ys || d3[je] === 1)));
    }
    return Hn * 2;
  };
  return {
    stand: (yt, ys) => pe(tot(yt, ys)),
    hs: pt,
    hit: ps,
    dbl: ye,
    split: yt => {
      let Hs = 0;
      for (let je = 0; je < 10; je++) {
        let jn = d3[je];
        let jt = yt + jn;
        let js = yt === 1 || jn === 1;
        if (yt === 1) {
          Hs += OC[je] * pe(tot(jt, js));
        } else {
          Hs += OC[je] * Math.max(pt(jt, js), ye(jt, js));
        }
      }
      return Hs * 2;
    }
  };
}
j(makeSolver, "makeSolver");
var dR = new Map();
function solverFor(v, d, OC) {
  let pe = v.id + "|" + d;
  let pn = dR.get(pe);
  if (!pn) {
    pn = OC();
    dR.set(pe, pn);
  }
  return pn;
}
j(solverFor, "solverFor");
function upValueOf(v) {
  if (v.rank === "TICKET") {
    return 11;
  } else {
    return rankValue(v.rank);
  }
}
j(upValueOf, "upValueOf");
function hiddenDist(v, d) {
  let pe = new Map([[0, 1]]);
  for (let pn = 0; pn < v; pn++) {
    let ye = new Map();
    for (let [yn, yt] of pe) {
      let ys = yn >> 1;
      let He = yn & 1;
      for (let Hn = 0; Hn < 10; Hn++) {
        let Ht = d3[Hn];
        let Hs = Math.min(ys + Ht, 31) << 1 | (He || Ht === 1 ? 1 : 0);
        ye.set(Hs, (ye.get(Hs) || 0) + yt * d[Hn]);
      }
    }
    pe = ye;
  }
  return pe;
}
j(hiddenDist, "hiddenDist");
function makeLintSolver(v, d, OC) {
  let pn = standEVfn(v, d.tiesLose);
  let pt = 1 + (d.lintWin || 1) - 1;
  let ps = [0, 1, 2, 3, 4].map(je => hiddenDist(je, OC));
  let ye = (je, jn, jt) => {
    if (je > 21) {
      return -1;
    }
    let le = 0;
    for (let [ln, ls] of ps[Math.min(jt, 4)]) {
      {
        let lV = je + (ln >> 1);
        let lC = jn || (ln & 1) === 1;
        le += ls * (lV > 21 ? -1 : pn(tot(lV, lC), jt > 0 ? pt : 1));
      }
    }
    return le;
  };
  let yn = new Map();
  let yt = new Map();
  let ys = (je, jn, jt) => {
    let Qt = je + "," + (jn ? 1 : 0) + "," + jt;
    let Qs = yn.get(Qt);
    if (Qs === undefined) {
      Qs = ye(je, jn, jt);
      yn.set(Qt, Qs);
    }
    return Qs;
  };
  let He = je => je === 0 ? 2 : je - 1;
  let Hn = (je, jn, jt, js) => {
    let Qe = 0;
    for (let ln = 0; ln < 10; ln++) {
      let ls = d3[ln];
      Qe += OC[ln] * (js === 0 ? Ht(je, jn, Math.min(jt + 1, 4), 2) : Ht(je + ls, jn || ls === 1, jt, js - 1));
    }
    return Qe;
  };
  let Ht = (je, jn, jt, js) => {
    if (je > 21) {
      return -1;
    }
    let Qt = je + "," + (jn ? 1 : 0) + "," + jt + "," + js;
    let Qs = yt.get(Qt);
    if (Qs !== undefined) {
      return Qs;
    }
    Qs = ys(je, jn, jt);
    if (tot(je, jn) < 21 && jt < 4) {
      let ls = Hn(je, jn, jt, js);
      if (ls > Qs) {
        Qs = ls;
      }
    }
    yt.set(Qt, Qs);
    return Qs;
  };
  let Hs = (je, jn, jt, js) => {
    {
      let ln = 0;
      for (let ls = 0; ls < 10; ls++) {
        {
          let lK = d3[ls];
          ln += OC[ls] * (js === 0 ? ys(je, jn, jt + 1) : ys(je + lK, jn || lK === 1, jt));
        }
      }
      return 2 * ln;
    }
  };
  return {
    stand: ys,
    hit: (je, jn, jt, js) => Hn(je, jn, jt, js),
    dbl: Hs,
    split: (je, jn) => {
      let js = 0;
      for (let Qs = 0; Qs < 10; Qs++) {
        let le = d3[Qs];
        if (jn === 0) {
          js += OC[Qs] * (je === 1 ? ys(1, true, 1) : Math.max(Ht(je, je === 1, 1, 2), Hs(je, je === 1, 1, 2)));
        } else if (je === 1) {
          js += OC[Qs] * ys(1 + le, true, 0);
        } else {
          js += OC[Qs] * Math.max(Ht(je + le, le === 1, 0, He(jn)), Hs(je + le, le === 1, 0, He(jn)));
        }
      }
      return 2 * js;
    },
    V: Ht
  };
}
j(makeLintSolver, "makeLintSolver");
function lintDealerDist(v, d, OC) {
  if (OC === "visible" || OC === "hole") {
    return dealerLintBlind(v, d, OC === "hole");
  }
  if (v != null) {
    return dealerFromUp(v, false, false, d);
  }
  let OW = new Float64Array(6);
  let OM = 0;
  for (let ye = 0; ye < 10; ye++) {
    let yn = dealerFromUp(d3[ye], false, false, d);
    for (let yt = 0; yt < 6; yt++) {
      OW[yt] += d[ye] * yn.d[yt];
    }
    OM += d[ye] * yn.bj;
  }
  const pn = {
    d: OW,
    bj: OM
  };
  return pn;
}
j(lintDealerDist, "lintDealerDist");
function basicStrategy(v, d, OC = {}) {
  let pe = lawOf(d || v.law);
  let pn = d4[v.full || pe.full ? 52 : 51];
  let pt = v.cards || [];
  let ps = v.value && v.value.total !== undefined ? v.value : handValue(pt);
  let ye = ps.visible ? ps.visible.total : ps.total;
  let yn = v.hidden || 0;
  let yt = js => js === "double" ? v.canDouble : js === "split" ? v.canSplit : js === "surrender" ? v.canSurrender : true;
  if (ye >= 21 && yn === 0) {
    return "stand";
  }
  if (pt.some(js => js.rank === "TICKET") && yn === 0) {
    return "hit";
  }
  let ys = 0;
  let He = false;
  for (let js of pt) {
    let le = rankValue(js.rank);
    ys += le;
    if (le === 1) {
      He = true;
    }
  }
  let Hn = pt.length === 2 && pt[0].rank === pt[1].rank ? rankValue(pt[0].rank) : 0;
  let Ht = {};
  if (pe.lint) {
    let ln = OC.lintRule || vh;
    let ls = v.dealerUp;
    let lV = ls ? Math.min(upValueOf(ls), 10) : null;
    let lC = solverFor(pe, "lint:" + ln + ":" + lV + ":" + (pn === d4[52] ? 52 : 51), () => makeLintSolver(lintDealerDist(lV === 11 ? 1 : lV, pn, ln), pe, pn));
    let lK = v.untilLint == null ? 1 : v.untilLint;
    Ht.stand = lC.stand(ys, He, yn);
    Ht.hit = lC.hit(ys, He, yn, lK);
    if (yt("double") && pt.length + yn === 2) {
      Ht.double = lC.dbl(ys, He, yn, lK);
    }
    if (yt("split") && Hn && yn === 0) {
      Ht.split = lC.split(Hn, lK);
    }
  } else {
    let lW;
    if (pe.dealerOpen) {
      let lM = v.dealerCards || (v.dealerUp ? [v.dealerUp] : []);
      let lL = 0;
      let lD = false;
      for (let lJ of lM) {
        let lY = rankValue(lJ.rank);
        lL += lY;
        if (lY === 1) {
          lD = true;
        }
      }
      lW = solverFor(pe, "open:" + lL + ":" + lD + ":" + (pn === d4[52] ? 52 : 51), () => makeSolver({
        d: dealerFrom(lL, lD, pe.h17, pn, []),
        bj: 0
      }, pe, pn));
    } else {
      let T0 = v.dealerUp;
      let T1 = T0 ? T0.rank === "TICKET" ? 1 : rankValue(T0.rank) : 10;
      lW = solverFor(pe, "up:" + T1 + ":" + (pn === d4[52] ? 52 : 51), () => makeSolver(dealerFromUp(T1, pe.h17, pe.peek, pn), pe, pn));
    }
    Ht.stand = lW.stand(ys, He);
    Ht.hit = lW.hit(ys, He);
    if (yt("double") && pt.length === 2) {
      Ht.double = lW.dbl(ys, He);
    }
    if (yt("split") && Hn) {
      Ht.split = lW.split(Hn);
    }
    if (yt("surrender") && pt.length === 2) {
      Ht.surrender = -0.5;
    }
  }
  let Hs = "stand";
  let je = -Infinity;
  for (let T2 of ["stand", "hit", "double", "split", "surrender"]) {
    if (Ht[T2] !== undefined && Ht[T2] > je + 1e-12) {
      je = Ht[T2];
      Hs = T2;
    }
  }
  const jn = {
    action: Hs,
    ev: Ht
  };
  if (OC.withEV) {
    return jn;
  } else {
    return Hs;
  }
}
j(basicStrategy, "basicStrategy");
function legalActions(v, d) {
  return v._legal(d);
}
j(legalActions, "legalActions");
const dl = {
  char: "wick",
  nerve: 0
};
const dT = {
  kind: "you"
};
var refEq = j((v, d) => !!v && !!d && v.seat === d.seat && v.ring === d.ring && v.hand === d.hand, "refEq");
var half = j(v => Math.round(v * 2) / 2, "half");
var Table = class Tw {
  constructor({
    room: v,
    seed: d,
    wallet: OC = vk,
    you: OK = dl,
    seats: OW = [dT],
    dealer: OM = null,
    tells: pe = {},
    script: pn = null,
    full: pt = false,
    canKeepsake: ps = true,
    lintRule: ye = vh
  } = {}) {
    const yt = {
      AKccY: function (Hn, Ht) {
        return Hn - Ht;
      },
      odHEK: function (Hn, Ht) {
        return Hn + Ht;
      },
      LYRMz: function (Hn, Ht) {
        return Hn <= Ht;
      },
      MdObK: function (Hn, Ht, Hs) {
        return Hn(Ht, Hs);
      },
      aUKqt: function (Hn, Ht) {
        return Hn * Ht;
      },
      omRPg: function (Hn, Ht) {
        return Hn / Ht;
      },
      Bmzrc: function (Hn, Ht) {
        return Hn !== Ht;
      },
      AonDr: "ltGHt",
      sFDWy: function (Hn, Ht) {
        return Hn === Ht;
      },
      qHlvH: "you",
      TgnDG: function (Hn, Ht) {
        return Hn(Ht);
      },
      zBRnN: function (Hn, Ht) {
        return Hn != Ht;
      },
      oBovX: function (Hn, Ht) {
        return Hn === Ht;
      },
      ndqtQ: "ai:",
      TMzFl: "coin",
      gxfwe: function (Hn, Ht) {
        return Hn >>> Ht;
      },
      MrDsZ: "shoe",
      gPPyC: "tell:",
      kyjDU: "penny",
      DHoCr: "wick",
      UzDQF: function (Hn, Ht) {
        return Hn || Ht;
      },
      SXqja: "bet"
    };
    this.roomCfg = roomById(v) || roomById("coin");
    this.room = this.roomCfg.id;
    this.law = vs[this.roomCfg.law];
    this.lintRule = ye;
    this.dealerId = OM || this.roomCfg.dealer;
    this.base = rng(d >>> 0);
    this.streams = {
      shoe: this.base.fork("shoe"),
      tell: this.base.fork("tell:" + this.dealerId),
      penny: this.base.fork("penny"),
      ai: {}
    };
    this.full = !!pt || !!this.law.full;
    this.shoe = makeShoe({
      law: this.law,
      rng: this.streams.shoe,
      decks: this.law.decks || va,
      full: this.full
    });
    this.wallet = half(OC);
    this.char = OK && OK.char || "wick";
    this.nerve = Math.max(0, Math.min(ve.max, OK && OK.nerve || 0));
    this.tells = yt.UzDQF(pe, {});
    this.script = pn;
    this.canKeepsake = ps;
    this.seats = OW.map((Hn, Ht) => {
      {
        let Qs = {
          i: Ht,
          kind: Hn.kind,
          id: Hn.kind === "you" ? "you" : Hn.id,
          cfg: Hn,
          bank: Hn.kind === "you" ? null : half(Hn.bank != null ? Hn.bank : vb[Hn.id] || 100),
          rings: [],
          face: null,
          sitout: false,
          insurance: 0
        };
        if (Hn.kind === "ai") {
          this.streams.ai[Hn.id] = this.base.fork("ai:" + Hn.id);
        }
        return Qs;
      }
    });
    this.youSeat = this.seats.findIndex(Hn => Hn.kind === "you");
    this.phase = "bet";
    this.bets = [0, 0, 0];
    this.stacks = [[], [], []];
    this.lastBets = [0, 0, 0];
    this.keepsakeRing = -1;
    this.keepsakeSpent = false;
    this.stareArmed = false;
    this.active = null;
    this.round = 0;
    this.seq = 0;
    this.seen = [];
    this.runningCount = 0;
    this.discard = 0;
    this.lastBigpot = -99;
    this.pendingShuffle = false;
    this._resetRound();
  }
  _resetRound() {
    this.dealer = {
      cards: [],
      hidden: new Set(),
      lint: new Set()
    };
    this.dealCount = 0;
    this.skillUsed = false;
    this.stare = null;
    this.skills = [];
    this.tellLog = [];
    this.fives = [];
    this.ticketSeenBy = null;
    this.insurance = {
      offered: false,
      amount: 0,
      won: false
    };
    this.dealerNatural = false;
    this.dealerDone = false;
    this.revealed = false;
    this.settleQueue = null;
    this.settled = [];
    this.roundBet = 0;
    this.redraw = null;
    this.knuckle = null;
    this.glow = null;
    this.bigpotFired = false;
    this._out = null;
    for (let OK of this.seats) {
      OK.rings = [];
      OK.sitout = false;
      OK.insurance = 0;
    }
  }
  _ev(v, d = {}) {
    const OK = {
      t: v,
      seq: ++this.seq,
      ...d
    };
    let OW = OK;
    if (this._out) {
      this._out.push(OW);
    }
    return OW;
  }
  _begin() {
    this._out = [];
    return this._out;
  }
  _illegal(v, d) {
    const pe = {
      t: "illegal",
      seq: ++this.seq,
      action: v,
      reason: d
    };
    return [pe];
  }
  get you() {
    if (this.youSeat >= 0) {
      return this.seats[this.youSeat];
    } else {
      return null;
    }
  }
  _hand(v) {
    if (!v || v === "dealer") {
      return null;
    }
    let pe = this.seats[v.seat];
    let pn = pe && pe.rings[v.ring];
    return pn && pn.hands[v.hand] || null;
  }
  _cover(v, d) {
    if (v.kind === "you") {
      return this.wallet >= d;
    } else {
      return v.bank >= d;
    }
  }
  _pay(v, d) {
    if (v.kind === "you") {
      this.wallet = half(this.wallet + d);
    } else {
      v.bank = half(v.bank + d);
    }
  }
  _charge(v, d) {
    this._pay(v, -d);
  }
  credit(v) {
    this.wallet = half(this.wallet + v);
  }
  addBank(v, d) {
    let OM = this.seats.find(pn => pn.id === v);
    if (OM) {
      OM.bank = half(OM.bank + d);
    }
    return !!OM;
  }
  _limits() {
    return this.roomCfg;
  }
  placeChip(v, d) {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase"
      };
    } else if (this.law.stakes === false) {
      return {
        ok: false,
        reason: "ring"
      };
    } else if (!(v >= 0) || !(v < vX) || v === this.keepsakeRing || !vq.includes(d)) {
      return {
        ok: false,
        reason: "ring"
      };
    } else if (this.bets[v] + d > this._limits().max) {
      return {
        ok: false,
        reason: "max"
      };
    } else if (d > this.wallet) {
      return {
        ok: false,
        reason: "wallet"
      };
    } else {
      this.stacks[v].push(d);
      this.bets[v] += d;
      this.wallet = half(this.wallet - d);
      return {
        ok: true
      };
    }
  }
  liftChip(v) {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase"
      };
    }
    let OC = this.stacks[v];
    const OM = {
      ok: false
    };
    OM.reason = "ring";
    if (!OC || !OC.length) {
      return OM;
    }
    let pn = OC.pop();
    this.bets[v] -= pn;
    this.wallet = half(this.wallet + pn);
    return {
      ok: true,
      value: pn
    };
  }
  clearBets() {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase"
      };
    }
    for (let pe = 0; pe < vX; pe++) {
      while (this.stacks[pe].length) {
        this.liftChip(pe);
      }
    }
    const OM = {
      ok: true
    };
    return OM;
  }
  _setBets(v) {
    this.clearBets();
    for (let OM = 0; OM < vX; OM++) {
      {
        let pe = v[OM] || 0;
        if (OM !== this.keepsakeRing) {
          {
            for (let pn = vq.length - 1; pn >= 0 && pe > 0; pn--) {
              while (pe >= vq[pn]) {
                this.stacks[OM].push(vq[pn]);
                pe -= vq[pn];
              }
            }
            this.bets[OM] = (v[OM] || 0) - pe;
            this.wallet = half(this.wallet - this.bets[OM]);
          }
        }
      }
    }
  }
  rebet() {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase"
      };
    }
    let OW = this.lastBets.map((ps, ye) => ye === this.keepsakeRing ? 0 : ps);
    let OM = OW.reduce((ps, ye) => ps + ye, 0);
    const pe = {
      ok: false
    };
    pe.reason = "nobet";
    if (!OM) {
      return pe;
    }
    let pt = this.bets.reduce((ps, ye) => ps + ye, 0);
    if (OM > this.wallet + pt) {
      return {
        ok: false,
        reason: "wallet"
      };
    } else if (OW.some(ps => ps > this._limits().max)) {
      return {
        ok: false,
        reason: "max"
      };
    } else {
      this._setBets(OW);
      return {
        ok: true
      };
    }
  }
  doubleBets() {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase"
      };
    }
    let OM = this.bets.map(pn => pn * 2);
    let pe = this.bets.reduce((pn, pt) => pn + pt, 0);
    if (pe) {
      if (pe > this.wallet) {
        return {
          ok: false,
          reason: "wallet"
        };
      } else if (OM.some(pn => pn > this._limits().max)) {
        return {
          ok: false,
          reason: "max"
        };
      } else {
        this._setBets(OM);
        return {
          ok: true
        };
      }
    } else {
      return {
        ok: false,
        reason: "nobet"
      };
    }
  }
  armKeepsake() {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase"
      };
    }
    const pn = {
      ok: false
    };
    pn.reason = "used";
    if (!this.canKeepsake || this.keepsakeSpent) {
      return pn;
    }
    if (this.law.stakes === false) {
      return {
        ok: false,
        reason: "ring"
      };
    }
    while (this.stacks[0].length) {
      this.liftChip(0);
    }
    this.keepsakeRing = 0;
    return {
      ok: true
    };
  }
  armStare() {
    if (this.phase !== "bet") {
      return {
        ok: false,
        reason: "phase"
      };
    } else if (this.law.dealerOpen || !this.tells[this.dealerId]) {
      return {
        ok: false,
        reason: "nodealer"
      };
    } else {
      this.stareArmed = true;
      return {
        ok: true
      };
    }
  }
  _newHand(v, d = {}) {
    return {
      cards: [],
      faceDown: new Set(),
      bet: v,
      doubled: false,
      done: false,
      bust: false,
      bustRevealed: false,
      surrendered: false,
      fromSplit: false,
      splitAces: false,
      keepsake: false,
      noNatural: false,
      actions: [],
      stoodOn: null,
      doubledOn: null,
      doubleCard: null,
      result: null,
      twentyOne: false,
      glow: null,
      glowHit: false,
      five: false,
      ...d
    };
  }
  _deal(v, {
    hole: d = false
  } = {}) {
    let pe;
    let pn = v === "dealer" ? this.dealer : this._hand(v);
    if (this.script && this.script.youSecond && v !== "dealer" && v.seat === this.youSeat && v.ring === 0 && v.hand === 0 && pn.cards.length === 1 && !this._scripted) {
      pe = this.shoe.take(this.script.youSecond);
      this._scripted = true;
    } else {
      pe = this.shoe.draw();
    }
    this.dealCount++;
    let ps = !!this.law.lint && this.dealCount % 3 === 0;
    let ye = ps || d && !this.law.dealerOpen;
    pn.cards.push(pe);
    if (v === "dealer") {
      if (ye) {
        this.dealer.hidden.add(pe.id);
      }
      if (ps) {
        this.dealer.lint.add(pe.id);
      }
    } else if (ye) {
      pn.faceDown.add(pe.id);
      if (ps) {
        pn.hadLint = true;
      }
    }
    if (!ye) {
      this._see(pe);
    }
    this._ev("deal", {
      to: v,
      card: ye ? null : pe,
      faceDown: ye,
      lint: ps,
      hole: !!d,
      index: pn.cards.length - 1
    });
    if (!this.shoe.cutFired && this.shoe.pastCut) {
      this.shoe.cutFired = true;
      this._ev("cutcard", {});
    }
    if (pe.rank === "TICKET") {
      this.ticketSeenBy = v === "dealer" ? "dealer" : this.seats[v.seat].id;
      this._ev("ticketDealt", {
        to: v
      });
    }
    return pe;
  }
  _see(v) {
    this.seen.push(v);
    this.runningCount += hiLo(v);
  }
  _handRefs() {
    const v = {
      RmwpA: function (pe, pn) {
        return pe >= pn;
      }
    };
    v.YFxiH = function (pe, pn) {
      return pe - pn;
    };
    v.gJFwA = function (pe, pn) {
      return pe * pn;
    };
    v.iZSRk = function (pe, pn) {
      return pe + pn;
    };
    v.gScGa = "bigpot";
    v.JoLOs = function (pe, pn) {
      return pe !== pn;
    };
    v.SgkTX = "AeKhj";
    const OK = v;
    let OM = [];
    this.seats.forEach((pe, pn) => pe.rings.forEach((pt, ps) => {
      const ys = {
        hGNbr: function (He, Hn) {
          return OK.RmwpA(He, Hn);
        },
        vJRlg: function (He, Hn) {
          return OK.YFxiH(He, Hn);
        },
        rgMDB: function (He, Hn) {
          return OK.gJFwA(He, Hn);
        },
        ysDoH: function (He, Hn) {
          return OK.iZSRk(He, Hn);
        },
        eiQMr: OK.gScGa
      };
      if (OK.JoLOs(OK.SgkTX, OK.SgkTX)) {
        this.revealed = true;
        if (this.you && !this.bigpotFired && ys.hGNbr(ys.vJRlg(this.round, this.lastBigpot), 4) && this.dealer.hidden.size) {
          let He = OK.max(100, ys.rgMDB(0.2, ys.ysDoH(this.wallet, this.roundBet)));
          if (ys.hGNbr(this.roundBet, He)) {
            this.bigpotFired = true;
            this.lastBigpot = this.round;
            this._ev(ys.eiQMr, {
              bet: this.roundBet
            });
          }
        }
        if (!this.law.lint) {
          if (this.dealer.hidden.size) {
            this._revealDealer();
          }
          this._stareResolve();
        }
        return;
      } else if (pt) {
        pt.hands.forEach((Hn, Ht) => OM.push({
          seat: pn,
          ring: ps,
          hand: Ht
        }));
      }
    }));
    return OM;
  }
  _aiBetView(v) {
    return {
      law: this.law,
      room: this.room,
      bank: v.bank,
      min: this.roomCfg.min,
      max: this.roomCfg.max,
      runningCount: this.runningCount,
      decksLeft: Math.max(0.5, this.shoe.remaining / 51),
      round: this.round,
      face: v.face,
      seen: this.seen
    };
  }
  deal() {
    const v = {
      KxNva: function (yt, ys) {
        return yt && ys;
      },
      McYEq: function (yt, ys) {
        return yt(ys);
      },
      VYANj: function (yt, ys) {
        return yt(ys);
      },
      QUMuK: "REDRAW_TWO",
      dorBQ: function (yt, ys) {
        return yt === ys;
      },
      KkBsJ: function (yt, ys, He, Hn) {
        return yt(ys, He, Hn);
      },
      KqVAc: function (yt, ys) {
        return yt !== ys;
      },
      kaWqC: "bet",
      mzKjr: "deal",
      oPnCr: "phase",
      TAyzI: function (yt, ys) {
        return yt !== ys;
      },
      KfIac: function (yt, ys) {
        return yt !== ys;
      },
      dAYzt: "tZcwi",
      fWTzO: "nobet",
      khGhA: "min",
      yrfKe: "shuffle",
      hDqcT: "flip",
      mKBHY: function (yt, ys) {
        return yt || ys;
      },
      cVUBs: function (yt, ys) {
        return yt > ys;
      },
      jcwBC: function (yt, ys) {
        return yt < ys;
      },
      qbsYR: function (yt, ys) {
        return yt === ys;
      },
      DKoch: "QrMuu",
      KMqIn: "ovqTB",
      IfecT: "sitout",
      zBWSZ: function (yt, ys) {
        return yt - ys;
      },
      mxGLz: function (yt, ys) {
        return yt === ys;
      },
      Hyyol: "KnDFo",
      XSQhB: "zNqYN",
      liwmE: function (yt, ys) {
        return yt < ys;
      },
      soEsJ: "dealer",
      INstJ: function (yt, ys) {
        return yt != ys;
      },
      BwOgU: "function",
      NqsZB: function (yt, ys) {
        return yt + ys;
      },
      MxbBl: "_tell",
      FohQI: "tell",
      XZbYR: function (yt, ys) {
        return yt === ys;
      },
      pNSBE: function (yt, ys) {
        return yt === ys;
      },
      uqXZx: "TICKET",
      EmGsm: function (yt, ys) {
        return yt !== ys;
      },
      bEyMX: "ALXGr",
      dfiEX: "LDjGV",
      YJnCi: "insure",
      fiMgE: "insureOffer",
      bvPTY: function (yt, ys) {
        return yt === ys;
      }
    };
    if (this.phase !== "bet") {
      return this._illegal("deal", "phase");
    }
    let d = this.roomCfg;
    let OC = this.you;
    if (OC && this.law.stakes !== false) {
      {
        if (!this.bets.some(yt => yt > 0) && !(this.keepsakeRing === 0) && !this.rebet().ok) {
          return this._illegal("deal", "nobet");
        }
        if (this.bets.some(yt => yt > 0 && yt < d.min)) {
          return this._illegal("deal", "min");
        }
      }
    }
    let OK = this._begin();
    this._resetRound();
    this._out = OK;
    if (this.pendingShuffle) {
      this.shoe.shuffle();
      this.seen = [];
      this.runningCount = 0;
      this.discard = 0;
      this.pendingShuffle = false;
      this._ev("shuffle", {
        size: this.shoe.size
      });
    }
    for (let yt of this.seats) {
      if (yt.kind !== "ai") {
        continue;
      }
      if (yt.cfg.flip) {
        yt.face = yt.cfg.flip(this.streams.penny);
        this._ev("flip", {
          seat: yt.i,
          id: yt.id,
          face: yt.face
        });
      }
      let ys = yt.cfg.bet ? yt.cfg.bet(this._aiBetView(yt), this.streams.ai[yt.id]) : 5;
      ys = Math.min(half(v.mKBHY(+ys, 0)), d.max);
      if (ys > 0 && ys < d.min) {
        ys = d.min;
      }
      if (!(ys > 0) || ys > yt.bank) {
        {
          yt.sitout = true;
          this._ev("sitout", {
            seat: yt.i,
            id: yt.id,
            need: ys
          });
          continue;
        }
      }
      yt.bank = half(yt.bank - ys);
      yt.rings = [{
        bet: ys,
        hands: [this._newHand(ys)]
      }];
      this._ev("bet", {
        seat: yt.i,
        id: yt.id,
        amount: ys
      });
    }
    if (OC) {
      {
        const Ht = {
          keepsake: true
        };
        OC.rings = [null, null, null];
        if (this.law.stakes === false) {
          OC.rings[0] = {
            bet: 0,
            hands: [this._newHand(0, Ht)]
          };
        } else {
          for (let Hs = 0; Hs < vX; Hs++) {
            if (Hs === this.keepsakeRing) {
              OC.rings[Hs] = {
                bet: 0,
                hands: [this._newHand(0, {
                  keepsake: true
                })]
              };
            } else if (this.bets[Hs] > 0) {
              OC.rings[Hs] = {
                bet: this.bets[Hs],
                hands: [this._newHand(this.bets[Hs])]
              };
            }
          }
        }
        this.roundBet = this.bets.reduce((je, jn) => je + jn, 0);
        this.lastBets = this.bets.slice();
        this.keepsakeThisRound = this.keepsakeRing === 0;
        if (this.keepsakeThisRound) {
          this.keepsakeSpent = true;
        }
      }
    }
    this.stareThisRound = this.stareArmed;
    this.stareArmed = false;
    let OW = this._handRefs();
    for (let je of OW) {
      this._deal(je);
    }
    this._deal("dealer");
    for (let jn of OW) {
      this._deal(jn);
    }
    const pe = {
      hole: true
    };
    this._deal("dealer", pe);
    let pn = this.dealer.cards[1];
    if (!this.law.dealerOpen) {
      for (let jt of Object.keys(this.tells)) {
        if (jt !== this.dealerId) {
          continue;
        }
        let js = this.tells[jt];
        if (!js || typeof js.test != "function") {
          continue;
        }
        let Qe = !!js.test(pn);
        let Qt = this.streams.tell.chance(Qe ? js.p : js.q);
        let Qs = js.id || js.tellId || vo[jt] || jt + "_tell";
        const le = {
          who: jt,
          tellId: Qs,
          shown: Qt,
          truth: Qe
        };
        this.tellLog.push(le);
        this._ev("tell", {
          who: jt,
          tellId: Qs,
          shown: Qt,
          truth: Qe
        });
      }
    }
    for (let ln of OW) {
      this._afterCard(ln, true);
    }
    let ps = this.dealer.cards[0];
    let ye = ps.rank === "A" || ps.rank === "TICKET";
    if (this.law.insurance && ye && !this.dealer.hidden.has(ps.id)) {
      {
        this.phase = "insure";
        let ls = this._yourInsureCost();
        const lV = {
          cost: ls
        };
        this.insurance.offered = true;
        this._ev("insureOffer", lV);
        if (!OC || ls === 0) {
          this._insureAI();
          return this._afterInsure(OK);
        } else {
          return OK;
        }
      }
    }
    return this._afterInsure(OK);
  }
  _yourInsureCost() {
    let OC = this.you;
    if (OC) {
      return OC.rings.reduce((OW, OM) => OW + (OM && !OM.hands[0].keepsake ? OM.bet / 2 : 0), 0);
    } else {
      return 0;
    }
  }
  _insureAI() {
    for (let OW of this.seats) {
      if (OW.kind !== "ai" || !OW.rings.length || !OW.cfg.insure) {
        continue;
      }
      let OM = OW.rings[0].bet / 2;
      if (OW.bank < OM) {
        continue;
      }
      const pe = {
        seat: OW.i,
        ring: 0,
        hand: 0
      };
      let pn = pe;
      if (OW.cfg.insure(this._view(pn), this.streams.ai[OW.id])) {
        OW.bank = half(OW.bank - OM);
        OW.insurance = OM;
        this._ev("insure", {
          seat: OW.i,
          amount: OM
        });
      }
    }
  }
  insure(v) {
    if (this.phase !== "insure") {
      return this._illegal("insure", "phase");
    }
    let OW = this._yourInsureCost();
    if (v && OW > this.wallet) {
      return this._illegal("insure", "wallet");
    }
    let OM = this._begin();
    if (v && OW > 0) {
      this.wallet = half(this.wallet - OW);
      this.you.insurance = OW;
      this.insurance.amount = OW;
      this._ev("insure", {
        seat: this.youSeat,
        amount: OW
      });
    }
    this._insureAI();
    return this._afterInsure(OM);
  }
  _afterInsure(v) {
    let OK = this.dealer.cards;
    let OW = OK[0];
    let OM = naturalOf(OK);
    const pe = {
      natural: OM
    };
    if (this.law.peek && (OW.rank === "A" || OW.rank === "TICKET" || isTen(OW))) {
      this._ev("peek", pe);
    }
    for (let ps of this.seats) {
      if (!ps.insurance) {
        continue;
      }
      let ye = OM ? ps.insurance * 3 : 0;
      this._pay(ps, ye);
      if (ps.kind === "you") {
        this.insurance.won = OM;
      }
      this._ev("settle", {
        ref: {
          seat: ps.i,
          ring: -1,
          hand: -1
        },
        outcome: "insurance",
        bet: ps.insurance,
        paid: ye,
        net: ye - ps.insurance,
        keepsake: false
      });
    }
    if (OM && (this.law.peek || this.law.dealerOpen)) {
      this.dealerNatural = true;
      if (this.dealer.hidden.size) {
        this._revealDealer();
      }
      for (let yt of this._handRefs()) {
        this._hand(yt).done = true;
      }
      const yn = {
        total: 21,
        soft: true,
        bust: false
      };
      this._ev("dealerTotal", yn);
      this.dealerDone = true;
      this.phase = "settle";
      this.active = null;
      return v;
    }
    if (this.stareThisRound && this.dealer.hidden.has(OK[1].id) && this.tells[this.dealerId]) {
      this.phase = "stare";
      return v;
    } else {
      this._startTurns();
      return v;
    }
  }
  call(v) {
    if (this.phase !== "stare") {
      return this._illegal("call", "phase");
    }
    let pe = this._begin();
    let pn = this.tellLog.find(ye => ye.who === this.dealerId);
    let pt = pn ? pn.truth : !!this.tells[this.dealerId].test(this.dealer.cards[1]);
    let ps = !!v === pt;
    this.stare = {
      saysTrue: !!v,
      right: ps,
      dealer: this.dealerId
    };
    this._ev("stareCall", {
      saysTrue: !!v,
      right: ps
    });
    this._startTurns();
    return pe;
  }
  _startTurns() {
    this.phase = "turn";
    this._nextActive();
  }
  _nextActive() {
    let d = this.active;
    this.active = null;
    for (let OM of this._handRefs()) {
      if (!this._hand(OM).done) {
        this.active = OM;
        break;
      }
    }
    if (this.active) {
      if (!refEq(d, this.active)) {
        this._ev("turn", {
          ref: this.active
        });
      }
    } else if (this.phase === "turn") {
      this.phase = "dealer";
    }
  }
  _afterCard(v, d = false) {
    let OW = this._hand(v);
    let OM = handValue(OW.cards, {
      split: OW.fromSplit || OW.noNatural,
      hiddenIds: OW.faceDown
    });
    if (OM.visible.total > 21) {
      const pt = {
        ref: v
      };
      pt.total = OM.visible.total;
      pt.revealed = false;
      OW.bust = true;
      OW.done = true;
      this._ev("bust", pt);
      return;
    }
    if (OW.cards.length >= 5 && !OW.five && OM.visible.total <= 21) {
      OW.five = true;
      this.fives.push(this.seats[v.seat].id);
      this._ev("five", {
        ref: v,
        alive: true
      });
    }
    if (d && OM.hidden === 0 && OM.natural) {
      {
        OW.done = true;
        OW.natural = true;
        return;
      }
    }
    if (OM.visible.total === 21) {
      {
        const lC = {
          ref: v
        };
        if (!OW.done) {
          OW.done = true;
          OW.twentyOne = true;
          OW.stoodOn = 21;
          this._ev("twentyone", lC);
        }
        return;
      }
    }
    if (OW.splitAces && OW.cards.length >= 2) {
      OW.done = true;
    }
  }
  _legal(v) {
    let OM = this._hand(v);
    if (!OM || OM.done || this.phase !== "turn") {
      return [];
    }
    let pn = this.seats[v.seat];
    let pt = pn.rings[v.ring];
    let ps = ["hit", "stand"];
    let ye = OM.cards.length === 2;
    let yn = ye && OM.faceDown.size === 0;
    if (ye && !OM.splitAces && !OM.keepsake && this._cover(pn, OM.bet)) {
      ps.push("double");
    }
    if (yn && !OM.keepsake && OM.cards[0].rank === OM.cards[1].rank && OM.cards[0].rank !== "TICKET" && pt.hands.length < vu && (!OM.fromSplit || OM.cards[0].rank !== "A") && this._cover(pn, OM.bet)) {
      ps.push("split");
    }
    if (this.law.surrender && ye && !OM.fromSplit && !OM.keepsake && OM.actions.length === 0) {
      ps.push("surrender");
    }
    return ps;
  }
  act(v) {
    if (this.phase !== "turn" || !this.active || this.active.seat !== this.youSeat) {
      return this._illegal(v, "phase");
    }
    if (!this._legal(this.active).includes(v)) {
      return this._illegal(v, "illegal");
    }
    let pe = this._begin();
    this._apply(this.active, v);
    return pe;
  }
  _apply(v, d) {
    let OK = this.seats[v.seat];
    let OW = this._hand(v);
    let OM = handValue(OW.cards, {
      hiddenIds: OW.faceDown
    });
    OW.actions.push(d);
    this._ev("action", {
      ref: v,
      action: d
    });
    if (OW.glow && OW.actions.length === OW.glowAt + 1 && d === "hit") {
      OW.glowHit = true;
    }
    if (d === "hit") {
      this._deal(v);
      this._afterCard(v);
    } else if (d === "stand") {
      OW.done = true;
      OW.stoodOn = OM.visible.total;
      OW.stoodSoft = OM.visible.soft;
    } else if (d === "double") {
      this._charge(OK, OW.bet);
      OW.doubledOn = {
        total: OM.visible.total,
        soft: OM.visible.soft
      };
      OW.bet *= 2;
      OW.doubled = true;
      if (OK.kind === "you") {
        this.roundBet += OW.bet / 2;
      }
      this._ev("double", {
        ref: v,
        bet: OW.bet
      });
      OW.doubleCard = this._deal(v);
      this._afterCard(v);
      OW.done = true;
    } else if (d === "split") {
      {
        this._charge(OK, OW.bet);
        if (OK.kind === "you") {
          this.roundBet += OW.bet;
        }
        let ps = OK.rings[v.ring];
        let ye = OW.cards[0].rank === "A";
        let yn = this._newHand(OW.bet, {
          fromSplit: true,
          splitAces: ye
        });
        yn.cards.push(OW.cards.pop());
        OW.fromSplit = true;
        OW.splitAces = ye;
        ps.hands.push(yn);
        let yt = {
          seat: v.seat,
          ring: v.ring,
          hand: ps.hands.length - 1
        };
        const ys = {
          ref: v,
          into: yt
        };
        this._ev("split", ys);
        this._deal(v);
        this._afterCard(v);
        this._deal(yt);
        this._afterCard(yt);
        if (ye) {
          OW.done = true;
          yn.done = true;
        }
      }
    } else if (d === "surrender") {
      {
        OW.surrendered = true;
        OW.done = true;
        let Hn = OW.bet / 2;
        const Ht = {
          ref: v,
          back: Hn
        };
        this._ev("surrender", Ht);
      }
    }
    this._nextActive();
  }
  skill(v = null) {
    let OK = vn[this.char];
    if (this.phase !== "turn" || !this.active || this.active.seat !== this.youSeat) {
      return this._illegal("skill", "phase");
    }
    if (this.skillUsed) {
      return this._illegal("skill", "used");
    }
    let OW = ve.cost[OK];
    if (this.nerve < OW) {
      return this._illegal("skill", "nerve");
    }
    let pe = null;
    let pn = this._hand(this.active);
    if (OK === "glow") {
      pe = band(this.shoe.peek()) || "MID";
    } else if (OK === "snag") {
      if (!this.shoe.remaining) {
        return this._illegal("skill", "empty");
      }
      this.shoe.burn();
      this.discard++;
      pe = {
        burned: true
      };
    } else if (OK === "knuckle") {
      if (this.law.dealerOpen || !this.dealer.hidden.has(this.dealer.cards[1].id)) {
        return this._illegal("skill", "open");
      }
      let ye = band(this.dealer.cards[1]);
      pe = ye === "TICKET" ? "HIGH" : ye;
    } else if (OK === "find") {
      let yn = v && v.cardId;
      let yt = null;
      if (this.dealer.hidden.has(yn)) {
        yt = {
          who: "dealer",
          card: this.dealer.cards.find(He => He.id === yn)
        };
      } else {
        for (let He of this._handRefs()) {
          let Hn = this._hand(He);
          if (Hn.faceDown.has(yn)) {
            yt = {
              who: He,
              card: Hn.cards.find(jt => jt.id === yn),
              h: Hn
            };
            break;
          }
        }
      }
      if (!yt) {
        return this._illegal("skill", "target");
      }
      let ys = this._begin();
      this._spend(OK, OW);
      if (yt.who === "dealer") {
        this.dealer.hidden.delete(yn);
      } else {
        yt.h.faceDown.delete(yn);
      }
      this._see(yt.card);
      pe = {
        card: yt.card
      };
      this.skillUsed = true;
      this.skills.push({
        kind: OK,
        result: "card"
      });
      this._ev("skill", {
        kind: OK,
        cost: OW,
        result: pe
      });
      this._ev("reveal", {
        who: yt.who,
        cards: [yt.card]
      });
      if (yt.who !== "dealer") {
        this._afterCard(yt.who);
      }
      this._nextActive();
      return ys;
    } else if (OK === "redraw") {
      let jt = v && v.a;
      let js = v && v.b;
      let Qe = jt && this._hand(jt.ref);
      let Qt = js && this._hand(js.ref);
      let Qs = (lW, lM) => lM && lW.seat === this.youSeat && !lM.done && !lM.doubled && !lM.splitAces;
      if (!Qs(jt.ref, Qe) || !Qs(js.ref, Qt) || refEq(jt.ref, js.ref)) {
        return this._illegal("skill", "target");
      }
      let le = Qe.cards.findIndex(lW => lW.id === jt.cardId);
      let ln = Qt.cards.findIndex(lW => lW.id === js.cardId);
      if (le < 0 || ln < 0 || Qe.faceDown.has(jt.cardId) || Qt.faceDown.has(js.cardId)) {
        return this._illegal("skill", "target");
      }
      let ls = this._begin();
      this._spend(OK, OW);
      let lV = Qe.cards[le];
      const lC = {
        a: jt.ref,
        b: js.ref
      };
      const lK = {
        kind: OK
      };
      lK.result = "swap";
      Qe.cards[le] = Qt.cards[ln];
      Qt.cards[ln] = lV;
      Qe.noNatural = true;
      Qt.noNatural = true;
      this.redraw = lC;
      this.skillUsed = true;
      this.skills.push(lK);
      this._ev("skill", {
        kind: OK,
        cost: OW,
        result: {
          a: jt,
          b: js
        }
      });
      this._afterCard(jt.ref);
      this._afterCard(js.ref);
      this._nextActive();
      return ls;
    } else {
      return this._illegal("skill", "none");
    }
    let ps = this._begin();
    this._spend(OK, OW);
    this.skillUsed = true;
    this.skills.push({
      kind: OK,
      result: pe
    });
    if (OK === "glow") {
      this.glow = pe;
      pn.glow = pe;
      pn.glowAt = pn.actions.length;
    }
    if (OK === "knuckle") {
      this.knuckle = pe;
    }
    this._ev("skill", {
      kind: OK,
      cost: OW,
      result: pe
    });
    return ps;
  }
  _spend(v, d) {
    this.nerve -= d;
    this._ev("nerve", {
      delta: -d,
      reason: "spend",
      value: this.nerve
    });
  }
  _gain(v) {
    let pe = ve.gain[v];
    let pn = this.nerve;
    this.nerve = Math.min(ve.max, this.nerve + pe);
    if (this.nerve !== pn) {
      this._ev("nerve", {
        delta: this.nerve - pn,
        reason: v,
        value: this.nerve
      });
    }
  }
  advance() {
    let OW = this._begin();
    let OM = 0;
    while (!OW.length && OM++ < 64) {
      if (this.phase === "turn") {
        if (this.active && this.seats[this.active.seat].kind === "you") {
          break;
        }
        this._step();
      } else if (this.phase === "dealer") {
        this._step();
      } else if (this.phase === "settle" && (!this.settleQueue || !!this.settleQueue.length)) {
        this._step();
      } else {
        break;
      }
      this._out = OW;
    }
    return OW;
  }
  _step() {
    let OW = this._out;
    if (this.phase === "turn") {
      if (!this.active) {
        this._nextActive();
        return OW;
      }
      let OM = this.seats[this.active.seat];
      if (OM.kind === "you") {
        return OW;
      }
      let pe = this.active;
      let pn = this._view(pe);
      let pt = OM.cfg.policy ? OM.cfg.policy(pn, this.streams.ai[OM.id]) : basicStrategy(pn, this.law, {
        lintRule: this.lintRule
      });
      let ps = this._legal(pe);
      if (!ps.includes(pt)) {
        let ye = pt;
        if (pt === "double") {
          pt = "hit";
        } else {
          const yn = {
            ...pn
          };
          yn.canDouble = false;
          yn.canSplit = false;
          yn.canSurrender = false;
          let yt = basicStrategy(yn, this.law, {
            lintRule: this.lintRule
          });
          pt = ps.includes(yt) ? yt : "stand";
        }
        if (!ps.includes(pt)) {
          pt = "stand";
        }
        this._ev("corrected", {
          ref: pe,
          from: ye,
          to: pt
        });
      }
      this._apply(pe, pt);
      return OW;
    }
    if (this.phase === "dealer") {
      this._dealerStep();
      return OW;
    } else {
      if (this.phase === "settle") {
        this._settleStep();
      }
      return OW;
    }
  }
  _live() {
    return this._handRefs().some(OM => {
      let ps = this._hand(OM);
      return !ps.surrendered && (!ps.bust || !!ps.faceDown.size) && (!ps.natural || !!this.law.lint);
    });
  }
  _revealDealer() {
    let OC = this.dealer.cards.filter(pe => this.dealer.hidden.has(pe.id));
    for (let pe of OC) {
      this._see(pe);
    }
    this.dealer.hidden.clear();
    this._ev("reveal", {
      who: "dealer",
      cards: this.dealer.cards.slice()
    });
  }
  _dealerValue(v) {
    return handValue(this.dealer.cards, {
      hiddenIds: v ? this.dealer.hidden : null
    });
  }
  _dealerDecisionValue() {
    if (!this.law.lint || this.lintRule === "true") {
      return this._dealerValue(false);
    }
    let OW = this.lintRule === "visible" ? this.dealer.hidden : this.dealer.lint;
    let OM = handValue(this.dealer.cards, {
      hiddenIds: OW
    }).visible;
    if (this.lintRule === "ten") {
      let pn = this.dealer.lint.size;
      return {
        total: OM.total + pn * 10,
        soft: OM.soft && OM.total + pn * 10 <= 21,
        count: OM.count
      };
    }
    return OM;
  }
  _dealerStep() {
    if (!this.revealed) {
      this.revealed = true;
      if (this.you && !this.bigpotFired && this.round - this.lastBigpot >= 4 && this.dealer.hidden.size) {
        let yt = Math.max(100, (this.wallet + this.roundBet) * 0.2);
        if (this.roundBet >= yt) {
          this.bigpotFired = true;
          this.lastBigpot = this.round;
          this._ev("bigpot", {
            bet: this.roundBet
          });
        }
      }
      if (!this.law.lint) {
        if (this.dealer.hidden.size) {
          this._revealDealer();
        }
        this._stareResolve();
      }
      return;
    }
    if (!this.dealerDone) {
      let ys = this._live();
      let He = this._dealerDecisionValue();
      if (ys && dealerShouldHit(He, this.law) && !(He.total > 21)) {
        this._deal("dealer");
        return;
      }
      this.dealerDone = true;
      if (this.law.lint) {
        this._showdown();
      }
      let Hn = this._dealerValue(false);
      if (Hn.bust) {
        this._ev("bust", {
          ref: "dealer",
          total: Hn.total,
          revealed: !!this.law.lint
        });
      }
      this._ev("dealerTotal", {
        total: Hn.total,
        soft: Hn.soft,
        bust: Hn.bust
      });
      this.phase = "settle";
      return;
    }
    this.phase = "settle";
  }
  _showdown() {
    if (this.dealer.hidden.size) {
      this._revealDealer();
    }
    this._stareResolve();
    for (let OW of this._handRefs()) {
      let OM = this._hand(OW);
      if (!OM.faceDown.size) {
        continue;
      }
      let pe = OM.cards.filter(pt => OM.faceDown.has(pt.id));
      for (let pt of pe) {
        this._see(pt);
      }
      OM.faceDown.clear();
      this._ev("reveal", {
        who: OW,
        cards: OM.cards.slice()
      });
      let pn = handValue(OM.cards);
      if (pn.bust && !OM.bust) {
        OM.bust = true;
        OM.bustRevealed = true;
        this._ev("bust", {
          ref: OW,
          total: pn.total,
          revealed: true
        });
      }
    }
  }
  _stareResolve() {
    if (this.stare && !this.stare.resolved) {
      this.stare.resolved = true;
      if (this.stare.right) {
        this._gain("stare");
      }
    }
  }
  _settleStep() {
    if (!this.settleQueue) {
      this.settleQueue = this._handRefs();
    }
    let OC = this.settleQueue.shift();
    if (!OC) {
      return;
    }
    let OM = this.seats[OC.seat];
    let pe = this._hand(OC);
    let pn = this._dealerValue(false);
    let pt = naturalOf(this.dealer.cards);
    let ps = handValue(pe.cards, {
      split: pe.fromSplit || pe.noNatural
    });
    let ye = ps.natural;
    let yn;
    let yt = 0;
    if (pe.surrendered) {
      yn = "surrender";
      yt = pe.bet / 2;
    } else if (ps.bust) {
      yn = "lose";
    } else if (pt) {
      yn = ye && !this.law.tiesLose ? "push" : "lose";
    } else if (ye) {
      yn = "natural";
    } else if (pn.bust || ps.total > pn.total) {
      yn = "win";
    } else if (ps.total < pn.total) {
      yn = "lose";
    } else {
      yn = this.law.tiesLose ? "lose" : "push";
    }
    let ys = yn === "win" && this.law.lintWin && pe.hadLint;
    if (yn === "natural") {
      yt = pe.bet * (1 + this.law.natural);
    } else if (ys) {
      yt = pe.bet + Math.floor(pe.bet * this.law.lintWin * 2) / 2;
    } else if (yn === "win") {
      yt = pe.bet * 2;
    } else if (yn === "push") {
      yt = pe.bet;
    }
    yt = half(yt);
    this._pay(OM, yt);
    pe.result = yn;
    pe.paid = yt;
    pe.total = ps.total;
    this.settled.push(OC);
    this._ev("settle", {
      ref: OC,
      outcome: yn,
      bet: pe.bet,
      paid: yt,
      net: yt - pe.bet,
      keepsake: !!pe.keepsake,
      lint: !!ys
    });
    if (OM.kind === "you") {
      let He = yn === "win" || yn === "natural";
      if ((He || yn === "push") && (ps.total === 20 || ps.total === 21)) {
        this._gain("twenty");
      }
      if (He && pe.cards.length >= 5) {
        this._gain("five");
      }
      if (He && pe.stoodOn != null && pe.stoodOn >= 12 && pe.stoodOn <= 16 && !pe.twentyOne) {
        this._gain("brave");
      }
    }
  }
  finishRound() {
    if (this.phase === "bet" || this.phase === "done") {
      return this._illegal("finishRound", "phase");
    }
    let OM = [];
    let pe = 0;
    while (true) {
      let ps = this.advance();
      if (!ps.length || pe++ > 2000) {
        break;
      }
      OM.push(...ps);
    }
    if (this.phase !== "settle") {
      return OM.concat(this._illegal("finishRound", this.phase));
    }
    this._out = OM;
    this.phase = "done";
    let pn = this._summary();
    const pt = {
      summary: pn
    };
    this._ev("roundEnd", pt);
    this.round++;
    for (let ye of this._handRefs()) {
      this.discard += this._hand(ye).cards.length;
    }
    this.discard += this.dealer.cards.length;
    if (this.shoe.pastCut) {
      this.pendingShuffle = true;
    }
    this.bets = [0, 0, 0];
    this.stacks = [[], [], []];
    this.keepsakeRing = -1;
    this.phase = "bet";
    this.active = null;
    return OM;
  }
  _summary() {
    let d = this._dealerValue(false);
    let OC = this.you;
    let OK = [];
    let OW = 0;
    let OM = null;
    if (OC) {
      OC.rings.forEach((yn, yt) => {
        if (yn) {
          yn.hands.forEach((Ht, Hs) => {
            let Qs = (Ht.paid || 0) - Ht.bet;
            OW += Qs;
            let le = Ht.result === "win" || Ht.result === "natural";
            if (Ht.keepsake && this.law.stakes !== false) {
              OM = le ? "win" : Ht.result === "push" ? "push" : "lose";
            }
            OK.push({
              ring: yt,
              hand: Hs,
              cards: Ht.cards.slice(),
              total: Ht.total,
              outcome: Ht.result,
              net: Qs,
              bet: Ht.bet,
              doubled: Ht.doubled,
              split: Ht.fromSplit,
              ringHands: yn.hands.length,
              stoodOn: Ht.stoodOn,
              stoodSoft: !!Ht.stoodSoft,
              doubledOn: Ht.doubledOn,
              doubleCard: Ht.doubleCard,
              lintBust: Ht.bustRevealed,
              natural: Ht.result === "natural" || Ht.result === "push" && handValue(Ht.cards, {
                split: Ht.fromSplit
              }).natural,
              ticket: Ht.cards.some(ln => ln.rank === "TICKET"),
              keepsake: Ht.keepsake,
              glow: Ht.glow,
              glowHit: Ht.glowHit,
              surrendered: Ht.surrendered,
              skill: this.skills.length ? this.skills[0].kind : null
            });
          });
        }
      });
      if (OC.insurance) {
        OW += this.insurance.won ? OC.insurance * 2 : -OC.insurance;
      }
    }
    let pe = {};
    for (let yn of this.seats) {
      if (yn.kind !== "ai") {
        continue;
      }
      if (!yn.rings.length) {
        pe[yn.id] = {
          outcome: "sitout",
          cards: [],
          total: 0,
          bank: yn.bank
        };
        continue;
      }
      let yt = yn.rings[0].hands[0];
      pe[yn.id] = {
        outcome: yt.result,
        cards: yt.cards.slice(),
        total: yt.total,
        bank: yn.bank,
        hands: yn.rings[0].hands.map(Qt => ({
          outcome: Qt.result,
          total: Qt.total,
          cards: Qt.cards.slice()
        }))
      };
    }
    let pt = this.seats.find(Qt => Qt.id === "penny");
    return {
      room: this.room,
      law: this.law.id,
      dealerId: this.dealerId,
      round: this.round,
      you: {
        hands: OK,
        net: OW,
        rings: OC ? OC.rings.filter(Qt => Qt && Qt.bet > 0).length : 0
      },
      dealer: {
        total: d.total,
        bust: d.bust,
        natural: naturalOf(this.dealer.cards),
        up: this.dealer.cards[0],
        cards: this.dealer.cards.slice(),
        twoCardTotal: handValue(this.dealer.cards.slice(0, 2)).total
      },
      ai: pe,
      ticketSeenBy: this.ticketSeenBy,
      keepsake: OM,
      stare: this.stare,
      pennyFace: pt ? pt.face : null,
      insurance: {
        amount: this.insurance.amount,
        won: this.insurance.won
      },
      skills: this.skills.slice(),
      redraw: this.redraw,
      knuckle: this.knuckle,
      tells: this.tellLog.slice(),
      fives: this.fives.slice(),
      wallet: this.wallet,
      nerve: this.nerve,
      roundBet: this.roundBet
    };
  }
  _view(v) {
    let OW = this._hand(v);
    let OM = this.seats[v.seat];
    let pe = OW.cards.filter(ye => !OW.faceDown.has(ye.id));
    let pn = this._legal(v);
    let pt = this.dealer.cards[0] && !this.dealer.hidden.has(this.dealer.cards[0].id) ? this.dealer.cards[0] : null;
    return {
      law: this.law,
      room: this.room,
      cards: pe,
      value: handValue(OW.cards, {
        split: OW.fromSplit,
        hiddenIds: OW.faceDown
      }).visible,
      hidden: OW.faceDown.size,
      canDouble: pn.includes("double"),
      canSplit: pn.includes("split"),
      canSurrender: pn.includes("surrender"),
      dealerUp: pt,
      dealerUpBand: pt ? band(pt) : null,
      dealerCards: this.dealer.cards.filter(ye => !this.dealer.hidden.has(ye.id)),
      seen: this.seen,
      runningCount: this.runningCount,
      decksLeft: Math.max(0.5, this.shoe.remaining / 51),
      cycle: null,
      face: OM.face,
      round: this.round,
      bank: OM.kind === "you" ? this.wallet : OM.bank,
      untilLint: this.law.lint ? (3 - (this.dealCount + 1) % 3) % 3 : null,
      full: this.full,
      id: OM.id,
      ref: v,
      handCards: OW.cards.length
    };
  }
  view(v) {
    if (v) {
      return this._view(v);
    } else {
      return {
        phase: this.phase,
        dealer: {
          id: this.dealerId,
          cards: this.dealer.cards.slice(),
          faceDown: [...this.dealer.hidden],
          value: this._dealerValue(true).visible
        },
        seats: this.seats.map(OW => ({
          id: OW.id,
          kind: OW.kind,
          bank: OW.kind === "you" ? this.wallet : OW.bank,
          face: OW.face,
          sitout: OW.sitout,
          rings: OW.rings.map(OM => OM ? {
            bet: OM.bet,
            hands: OM.hands.map(pe => ({
              cards: pe.cards.slice(),
              faceDown: [...pe.faceDown],
              value: handValue(pe.cards, {
                split: pe.fromSplit,
                hiddenIds: pe.faceDown
              }).visible,
              bet: pe.bet,
              doubled: pe.doubled,
              done: pe.done,
              result: pe.result,
              keepsake: pe.keepsake
            }))
          } : null)
        })),
        shoe: {
          remaining: this.shoe.remaining,
          dealtSinceShuffle: this.shoe.dealtSinceShuffle,
          pastCut: this.shoe.pastCut,
          size: this.shoe.size
        },
        discard: this.discard,
        wallet: this.wallet,
        nerve: this.nerve,
        bets: this.bets.slice(),
        stacks: this.stacks.map(OW => OW.slice()),
        active: this.active,
        law: this.law.id,
        room: this.room,
        round: this.round,
        keepsakeRing: this.keepsakeRing,
        stareArmed: this.stareArmed,
        skillUsed: this.skillUsed
      };
    }
  }
};
j(Table, "Table");
var dq = Table;
var dk = ["tallyFaded", "tallyReprinted", "leftyFound", "nibsGone", "lintOpen", "sparemanSpoke", "finale", "nibsDollar", "nibsJar"];
var num = j((v, d, OC, OK) => {
  let pt = typeof v == "number" && Number.isFinite(v) ? v : d;
  return Math.max(OC, Math.min(OK, pt));
}, "num");
var df = 1000000000;
function newProfile(v = 0) {
  const OC = {
    thankYouChip: false
  };
  OC.backs = [];
  OC.useChip = false;
  OC.useBack = null;
  return {
    v: 1,
    salt: hashSeed(v),
    visitNo: 0,
    wallet: vk,
    char: "wick",
    howto: false,
    finder: false,
    tickets: {},
    story: {
      beat: 0,
      visits: 0,
      flags: Object.fromEntries(dk.map(pn => [pn, false]))
    },
    journal: {},
    staked: {},
    stareRightLifetime: 0,
    opened: {
      coin: "always"
    },
    secrets: {},
    postcards: [],
    cosmetics: OC,
    stats: {
      rounds: 0,
      naturals: 0,
      bailouts: 0,
      bestWin: 0
    },
    settings: {
      chatter: "full",
      brisk: false,
      totals: true,
      confirmSurrender: true
    }
  };
}
j(newProfile, "newProfile");
function loadProfile(v) {
  let OW = v;
  try {
    if (typeof OW == "string") {
      OW = JSON.parse(OW);
    }
  } catch {
    OW = null;
  }
  if (!OW || typeof OW != "object" || Array.isArray(OW)) {
    return newProfile(0);
  }
  let pe = newProfile(0);
  try {
    if (typeof OW.salt == "number" && Number.isFinite(OW.salt)) {
      pe.salt = OW.salt >>> 0;
    }
    pe.visitNo = Math.floor(num(OW.visitNo, 0, 0, 10000000));
    let ye = OW.wallet;
    if (typeof ye != "number" && (!OW.v || OW.v < 1)) {
      ye = [OW.dollars, OW.bank, OW.dd, OW.money].find(Hn => typeof Hn == "number");
    }
    pe.wallet = half(num(ye, vk, 0, df));
    pe.finder = OW.finder === true;
    pe.char = vx.includes(OW.char) && (OW.char !== "finder" || pe.finder) ? OW.char : "wick";
    pe.howto = OW.howto === true;
    if (OW.tickets && typeof OW.tickets == "object") {
      for (let [Hn, Ht] of Object.entries(OW.tickets)) {
        if (vi[Hn]) {
          pe.tickets[Hn] = {
            at: Math.floor(num(Ht && Ht.at, 0, 0, 10000000)),
            char: vx.includes(Ht && Ht.char) ? Ht.char : "wick"
          };
        }
      }
    }
    let yn = OW.story && typeof OW.story == "object" ? OW.story : {};
    pe.story.beat = Math.floor(num(yn.beat, 0, 0, 12));
    pe.story.visits = Math.floor(num(yn.visits, 0, 0, 10000000));
    if (yn.flags && typeof yn.flags == "object") {
      for (let Hs of dk) {
        pe.story.flags[Hs] = yn.flags[Hs] === true;
      }
    }
    if (pe.story.flags.finale) {
      pe.finder = true;
    }
    if (OW.journal && typeof OW.journal == "object") {
      for (let [je, jn] of Object.entries(OW.journal)) {
        if (!jn || typeof jn != "object" || typeof je != "string" || je.length > 40) {
          continue;
        }
        let jt = Math.floor(num(jn.seen, 0, 0, 10000000));
        pe.journal[je] = {
          seen: jt,
          right: Math.floor(num(jn.right, 0, 0, jt)),
          noted: jn.noted === true
        };
      }
    }
    if (OW.staked && typeof OW.staked == "object") {
      for (let js of vt) {
        if (typeof OW.staked[js] == "number") {
          pe.staked[js] = half(num(OW.staked[js], 0, 0, df));
        }
      }
    }
    pe.stareRightLifetime = Math.floor(num(OW.stareRightLifetime, 0, 0, 10000000));
    if (OW.opened && typeof OW.opened == "object") {
      for (let Qe of vm) {
        if (typeof OW.opened[Qe.id] == "string") {
          pe.opened[Qe.id] = OW.opened[Qe.id];
        }
      }
    }
    if (OW.secrets && typeof OW.secrets == "object") {
      for (let Qt = 1; Qt <= 7; Qt++) {
        if (OW.secrets[Qt] === true) {
          pe.secrets[Qt] = true;
        }
      }
    }
    if (Array.isArray(OW.postcards)) {
      pe.postcards = OW.postcards.filter(Qs => typeof Qs == "string").slice(0, 10);
    }
    let yt = OW.cosmetics && typeof OW.cosmetics == "object" ? OW.cosmetics : {};
    pe.cosmetics.thankYouChip = yt.thankYouChip === true;
    pe.cosmetics.backs = Array.isArray(yt.backs) ? [...new Set(yt.backs.filter(Qs => vx.includes(Qs)))] : [];
    pe.cosmetics.useChip = yt.useChip === true && pe.cosmetics.thankYouChip;
    pe.cosmetics.useBack = yt.useBack === "52" && pe.story.flags.finale ? "52" : pe.cosmetics.backs.includes(yt.useBack) ? yt.useBack : null;
    let ys = OW.stats && typeof OW.stats == "object" ? OW.stats : {};
    pe.stats = {
      rounds: Math.floor(num(ys.rounds, 0, 0, 1000000000)),
      naturals: Math.floor(num(ys.naturals, 0, 0, 1000000000)),
      bailouts: Math.floor(num(ys.bailouts, 0, 0, 1000000000)),
      bestWin: half(num(ys.bestWin, 0, 0, df))
    };
    let He = OW.settings && typeof OW.settings == "object" ? OW.settings : {};
    pe.settings = {
      chatter: ["full", "less", "off"].includes(He.chatter) ? He.chatter : "full",
      brisk: He.brisk === true,
      totals: He.totals !== false,
      confirmSurrender: He.confirmSurrender !== false
    };
  } catch {
    return newProfile(0);
  }
  return pe;
}
j(loadProfile, "loadProfile");
function saveProfile(v) {
  return JSON.parse(JSON.stringify(v));
}
j(saveProfile, "saveProfile");
function newVisit(v) {
  v.visitNo = (v.visitNo || 0) + 1;
  let OK = hashSeed(v.salt, v.visitNo);
  let OW = rng(OK).fork("spareman");
  let OM = {};
  for (let [pt, ps] of Object.entries(vb)) {
    OM[pt] = {
      bank: ps
    };
  }
  return {
    seed: OK,
    rounds: 0,
    counted: false,
    beatFired: false,
    nerve: 0,
    keepsakeUsed: false,
    tag: false,
    tagRounds: 0,
    lever: 0,
    stareRight: 0,
    sparemanPresent: v.story.beat < 10 && OW.chance(0.25),
    regulars: OM,
    keyesCycle: 0,
    roomRounds: {},
    rummageCooldown: 0,
    requested: false,
    pennyTails: false,
    staked: {},
    drops: []
  };
}
j(newVisit, "newVisit");
function tableSeed(v, d, OC = 0) {
  return hashSeed(v.seed, "room:" + d, OC);
}
j(tableSeed, "tableSeed");
function reputation(v) {
  return Object.keys(v.tickets).length;
}
j(reputation, "reputation");
function roomOpen(v, d) {
  let OW = roomById(d);
  if (!OW) {
    return false;
  }
  let pe = OW.open;
  if (pe.always || pe.ticket && v.tickets[pe.ticket] || pe.count && reputation(v) >= pe.count || pe.flag && v.story.flags[pe.flag]) {
    return true;
  }
  if (pe.beat) {
    if (vU[pe.beat - 1].room === d) {
      if (v.story.beat >= pe.beat - 1 && v.story.visits >= pe.beat - 1) {
        return true;
      }
    } else if (v.story.beat >= pe.beat) {
      return true;
    }
  }
  return false;
}
j(roomOpen, "roomOpen");
function checkRooms(v, d = null) {
  let OK = [];
  if (!v.opened) {
    v.opened = {
      coin: "always"
    };
  }
  for (let pt of vm) {
    if (v.opened[pt.id] || !roomOpen(v, pt.id)) {
      continue;
    }
    let ye = pt.open;
    let yn = d;
    yn ||= ye.ticket && v.tickets[ye.ticket] ? "ticket" : ye.count && reputation(v) >= ye.count ? "count" : ye.flag && v.story.flags[ye.flag] ? "secret" : "story";
    v.opened[pt.id] = yn;
    OK.push({
      t: "roomOpened",
      room: pt.id,
      by: yn
    });
  }
  return OK;
}
j(checkRooms, "checkRooms");
function awardTicket(v, d, OC) {
  if (!vi[d] || v.tickets[d]) {
    return false;
  } else {
    v.tickets[d] = {
      at: v.visitNo || 0,
      char: vx.includes(OC) ? OC : v.char || "wick"
    };
    return true;
  }
}
j(awardTicket, "awardTicket");
function ticketEvents(v, d, OC) {
  let OW = vi[d];
  if (!OW || OW.room && OC && OW.room !== OC) {
    return [];
  }
  if (!awardTicket(v, d, v.char)) {
    return [];
  }
  const pe = {
    t: "ticket",
    id: d,
    text: OW.text,
    char: v.char
  };
  let ps = [pe];
  if (reputation(v) === 20) {
    ps.push({
      t: "achievement",
      id: vg.claims
    });
  }
  return ps;
}
j(ticketEvents, "ticketEvents");
function journalObserve(v, d, OC, OK) {
  const pt = {
    seen: 0,
    right: 0,
    noted: false
  };
  let ps = v.journal[d] ||= pt;
  if (OC) {
    ps.seen++;
    if (OK) {
      ps.right++;
    }
    if (!ps.noted && ps.seen >= 6 && ps.right / ps.seen >= 0.6) {
      ps.noted = true;
      return [{
        t: "journalNote",
        tellId: d,
        right: ps.right,
        seen: ps.seen
      }];
    } else {
      return [];
    }
  } else {
    return [];
  }
}
j(journalObserve, "journalObserve");
function onRoundEnd(v, d, OC) {
  let OW = [];
  let OM = OC.room;
  if (OC.law === "finale") {
    return OW;
  }
  let pn = Ht => OW.push(...ticketEvents(v, Ht, OM));
  d.rounds++;
  d.roomRounds[OM] = (d.roomRounds[OM] || 0) + 1;
  if (d.rummageCooldown > 0) {
    d.rummageCooldown--;
  }
  v.stats.rounds++;
  if (typeof OC.wallet == "number") {
    v.wallet = half(Math.max(0, Math.min(df, OC.wallet)));
  }
  if (typeof OC.nerve == "number") {
    d.nerve = OC.nerve;
  }
  let ps = OC.you.hands;
  let ye = Ht => Ht.outcome === "win" || Ht.outcome === "natural";
  let yn = OC.dealer;
  let yt = isTen(yn.up);
  if (OC.you.net > v.stats.bestWin) {
    v.stats.bestWin = OC.you.net;
  }
  for (let Ht of ps) {
    if (Ht.natural) {
      v.stats.naturals++;
      pn("NATURAL");
    }
    if (ye(Ht) && Ht.stoodOn === 16 && !Ht.stoodSoft && yt && Ht.cards.length >= 2) {
      pn("SIXTEEN");
    }
    if (ye(Ht) && Ht.cards.length >= 5) {
      let Hs = OW.length;
      pn("FIVE_CARD");
      if (OW.length > Hs) {
        OW.push({
          t: "achievement",
          id: vg.five
        });
      }
    }
    if (Ht.doubledOn && Ht.doubledOn.total === 11 && !Ht.doubledOn.soft && isFace(Ht.doubleCard)) {
      pn("DOUBLE_FACE");
    }
    if (ye(Ht) && Ht.ticket) {
      pn("BUS_TICKET");
    }
    if (OM === "glasses" && yn.twoCardTotal === 20 && Ht.total === 21) {
      pn("SEEN_21");
    }
    if (Ht.lintBust) {
      pn("LINT_BUST");
    }
    if (ye(Ht) && Ht.doubled && yt && OC.dealerId === "dogear") {
      pn("WELL_PLAYED");
    }
    if (Ht.surrendered) {
      pn("SURRENDER");
    }
    if (Ht.glow === "LOW" && Ht.glowHit && Ht.total === 21) {
      pn("GLOW_21");
    }
    if (OC.knuckle === "LOW" && Ht.stoodOn >= 12 && Ht.stoodOn <= 16 && ye(Ht)) {
      pn("KNUCKLE_12");
    }
  }
  let ys = {};
  for (let je of ps) {
    (ys[je.ring] = ys[je.ring] || []).push(je);
  }
  for (let jn of Object.values(ys)) {
    if (jn.length === 2 && jn.every(jt => jt.split) && jn.every(ye)) {
      pn("SPLIT_WIN");
    }
  }
  if (OC.you.rings === 3 && Object.keys(ys).length === 3 && ps.every(ye)) {
    pn("THREE_RINGS");
  }
  if (OC.insurance && OC.insurance.won) {
    pn("INSURED");
  }
  if (OC.skills.some(jt => jt.kind === "snag") && yn.bust) {
    pn("SNAG_BUST");
  }
  if (OC.redraw) {
    let jt = ps.find(Qe => Qe.ring === OC.redraw.a.ring && Qe.hand === OC.redraw.a.hand);
    let js = ps.find(Qe => Qe.ring === OC.redraw.b.ring && Qe.hand === OC.redraw.b.hand);
    if (jt && js && ye(jt) && ye(js)) {
      pn("REDRAW_TWO");
    }
  }
  let Hn = OC.ai || {};
  if (Hn.nibs && (Hn.nibs.outcome === "win" || Hn.nibs.outcome === "natural")) {
    pn("NIBS_ONE");
  }
  if ((OC.fives || []).includes("bunnie")) {
    pn("BUNNIE_FIVE");
  }
  if (Hn.keyes && (Hn.keyes.hands || []).some(Qs => Qs.total === 21)) {
    pn("KEYES_21");
  }
  if (OC.keepsake) {
    d.keepsakeUsed = true;
    if (OC.keepsake === "win") {
      pn("CLAIMED");
    }
    if (OC.keepsake === "lose") {
      d.tag = true;
      d.tagRounds = 0;
    }
  } else if (d.tag) {
    d.tagRounds++;
    if (d.tagRounds === 3) {
      pn("UNCLAIMED");
    }
  }
  if (OC.stare && OC.stare.right) {
    d.stareRight++;
    if (d.stareRight >= 3) {
      pn("CORNER");
    }
    if (OC.stare.dealer === "dogear") {
      v.stareRightLifetime++;
      if (v.stareRightLifetime === 10) {
        v.secrets[3] = true;
        OW.push({
          t: "secret",
          id: 3,
          kind: "stare"
        }, {
          t: "achievement",
          id: vg.corner
        });
      }
    }
  }
  for (let Qs of OC.tells || []) {
    OW.push(...journalObserve(v, Qs.tellId, Qs.shown, Qs.truth));
  }
  if (!d.counted && d.rounds >= vz) {
    d.counted = true;
    v.story.visits++;
    OW.push({
      t: "visitCounted",
      visits: v.story.visits
    });
    if (v.story.visits === 1) {
      OW.push({
        t: "achievement",
        id: vg.visit
      });
    }
  }
  OW.push(...checkRooms(v));
  return OW;
}
j(onRoundEnd, "onRoundEnd");
function beatDue(v, d, OC, OK) {
  let ps = v.story.beat + 1;
  if (ps > vU.length || d.beatFired || v.story.visits < ps - 1) {
    return null;
  }
  let ye = vU[ps - 1];
  if (ye.room !== OC) {
    if (OK === "sit" && !d.requested) {
      d.requested = true;
      return {
        request: ye.room,
        beat: ye
      };
    } else {
      return null;
    }
  } else if (ye.at !== OK || OK === "after2" && (d.roomRounds[OC] || 0) < 2) {
    return null;
  } else {
    return ye;
  }
}
j(beatDue, "beatDue");
function playBeat(v, d, OC, OK = {}) {
  let OM = v.story.beat + 1;
  let pe = vU[OM - 1];
  if (!pe || pe.id !== OC || d.beatFired) {
    return [{
      t: "illegal",
      action: "beat",
      reason: "notdue"
    }];
  }
  let ye = v.story.flags;
  let yn = [];
  d.beatFired = true;
  d.rummageCooldown = Math.max(d.rummageCooldown, 1);
  if (OC === "reprint" && OK.accept === false) {
    return [{
      t: "beatDeferred",
      id: OC,
      n: pe.n
    }];
  }
  v.story.beat = pe.n;
  yn.push({
    t: "beat",
    id: OC,
    n: pe.n
  });
  switch (OC) {
    case "tally_fades":
      ye.tallyFaded = true;
      break;
    case "nibs_jar":
      ye.nibsJar = true;
      break;
    case "penny_taken":
      d.pennyTails = true;
      break;
    case "lefty_found":
      ye.leftyFound = true;
      if (!v.postcards.includes("lefty")) {
        v.postcards.push("lefty");
      }
      break;
    case "reprint":
      ye.tallyReprinted = true;
      ye.tallyFaded = false;
      break;
    case "pillow":
      ye.nibsGone = true;
      if (ye.nibsDollar) {
        v.cosmetics.thankYouChip = true;
        v.secrets[6] = true;
        yn.push({
          t: "secret",
          id: 6,
          kind: "nibsDollar"
        });
      }
      break;
    case "eleventh_key":
      ye.lintOpen = true;
      break;
    case "spareman_speaks":
      ye.sparemanSpoke = true;
      break;
    case "last_call":
      ye.finale = true;
      v.finder = true;
      yn.push(...ticketEvents(v, "FIFTY_TWO", null));
      yn.push({
        t: "achievement",
        id: vg.finale
      });
      break;
    default:
      break;
  }
  yn.push(...checkRooms(v, "story"));
  return yn;
}
j(playBeat, "playBeat");
function needsBailout(v, d) {
  if (d) {
    if (d.phase !== "bet" || d.bets.some(pn => pn > 0)) {
      return false;
    } else {
      return d.wallet < vf;
    }
  } else {
    return v.wallet < vf;
  }
}
j(needsBailout, "needsBailout");
function bailout(v, d = null) {
  let pe = v.stats.bailouts === 0;
  v.stats.bailouts++;
  v.wallet = half(v.wallet + vS);
  if (d) {
    d.credit(vS);
  }
  return {
    amount: vS,
    first: pe,
    events: [{
      t: "bailout",
      amount: vS,
      first: pe
    }]
  };
}
j(bailout, "bailout");
function secretCheck(v, d, OC, OK = {}) {
  let pe = [];
  let pn = ye => {
    let Hn = !v.secrets[ye];
    v.secrets[ye] = true;
    pe.push({
      t: "secret",
      id: ye,
      kind: OC,
      first: Hn
    });
  };
  if (OC === "shoeClick") {
    if (OK.dealtSinceShuffle === 51) {
      pn(1);
      pe.push(...ticketEvents(v, "FIFTY_ONE", null));
    }
  } else if (OC === "lever") {
    if ((OK.room || "coin") !== "coin") {
      return pe;
    }
    d.lever++;
    pe.push({
      t: "lever",
      pulls: d.lever
    });
    if (d.lever === 11) {
      pn(2);
      v.story.flags.lintOpen = true;
      pe.push(...ticketEvents(v, "LEVER", "coin"));
      pe.push(...checkRooms(v, "secret"));
    }
  } else if (OC === "signHover") {
    if ((OK.seconds || 0) >= 30) {
      pn(4);
    }
  } else if (OC === "pennyEdge") {
    if (OK.face === "EDGE" && OK.natural) {
      pn(5);
    }
  } else if (OC === "keepsakeItem" && (OK.room || "lint") === "lint") {
    let yt = OK.char || v.char;
    if (vx.includes(yt) && !v.cosmetics.backs.includes(yt)) {
      v.cosmetics.backs.push(yt);
    }
    pn(7);
  }
  return pe;
}
j(secretCheck, "secretCheck");
var di = {
  ink: "#1b140f",
  shadow: "#0f0b09",
  box0: "#4a3526",
  box1: "#7a5a3e",
  box2: "#b08c62",
  lint: "#8f8a82",
  moss: "#3d5638",
  plush: "#62202a",
  brass: "#c29a45",
  ivory: "#efe6cf",
  inkred: "#b0302a",
  navy: "#2a3a64",
  fluoro: "#e6eedc",
  white: "#ffffff",
  sel: "#ffff00",
  void: "#000000",
  dw0: "#0b0614",
  dw1: "#170c26",
  dw2: "#2a1742",
  dw3: "#4a2a73",
  dw4: "#7b52b8",
  dw5: "#b89af0",
  gold0: "#5e3a0c",
  gold1: "#a8741c",
  gold2: "#e8b43c",
  gold3: "#ffe89a",
  rail0: "#0e0812",
  rail1: "#221430",
  rail2: "#3a2352",
  rail3: "#5c3a80",
  orange: "#ff7f27",
  grey: "#7f7f8a",
  paper: "#d9ccae",
  panel: "#f6e7bd",
  cardred: "#c8203a",
  cardblk: "#1f1830"
};
var dI = {
  ink: "shadow",
  shadow: "shadow",
  box0: "shadow",
  box1: "box0",
  box2: "box1",
  lint: "box0",
  moss: "#27371f",
  plush: "#3f1219",
  brass: "box1",
  ivory: "box2",
  inkred: "plush",
  navy: "#1b2544",
  fluoro: "lint",
  white: "ivory",
  sel: "gold2",
  void: "void",
  dw0: "void",
  dw1: "dw0",
  dw2: "dw1",
  dw3: "dw2",
  dw4: "dw3",
  dw5: "dw4",
  gold0: "#3a2306",
  gold1: "gold0",
  gold2: "gold1",
  gold3: "gold2",
  rail0: "void",
  rail1: "rail0",
  rail2: "rail1",
  rail3: "rail2",
  orange: "#a04a10",
  grey: "#4a4a52",
  paper: "box2",
  panel: "ivory",
  cardred: "inkred",
  cardblk: "shadow"
};
var hexOf = j((v, d) => d && d[0] === "#" ? d : v[d] || di[d] || "#ff00ff", "hexOf");
var dV = Object.fromEntries(Object.keys(di).map(v => [v, hexOf(di, dI[v])]));
var dC = {
  coin: ["#052620", "#093a2e", "#0e5040", "#166b55"],
  glasses: ["#06143a", "#0b2255", "#123272", "#1d4896"],
  violin: ["#280512", "#410a20", "#5a112f", "#7a1b43"],
  lint: ["#18142a", "#241e38", "#312a4b", "#453b63"]
};
dC.finale = dC.coin;
var dK = 39;
var dW = 55;
var dM = 14;
var dL = 26;
var dD = 36;
var dJ = l || ["buttons", "keys", "socks", "coins"];
var dY = N || ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var R0 = new Set(T || ["buttons", "keys"]);
var R1 = vq || [1, 5, 25, 100, 500];
var R2 = null;
function setCanvasFactory(v) {
  R2 = typeof v == "function" ? v : null;
  clearCaches();
}
j(setCanvasFactory, "setCanvasFactory");
function newCanvas(v, d) {
  if (R2) {
    return R2(v, d);
  }
  if (typeof document !== "undefined" && document.createElement) {
    let pe = document.createElement("canvas");
    pe.width = v;
    pe.height = d;
    return pe;
  }
  if (typeof OffscreenCanvas !== "undefined") {
    return new OffscreenCanvas(v, d);
  } else {
    return null;
  }
}
j(newCanvas, "newCanvas");
var R5 = new Map();
function rgb(v) {
  let OK = R5.get(v);
  if (OK) {
    return OK;
  }
  let pe = parseInt(v.slice(1), 16);
  OK = [pe >> 16 & 255, pe >> 8 & 255, pe & 255];
  R5.set(v, OK);
  return OK;
}
j(rgb, "rgb");
var R7 = class TO {
  constructor(v, d) {
    this.w = v;
    this.h = d;
    this.p = new Array(v * d).fill(null);
  }
  set(v, d, OC) {
    v |= 0;
    d |= 0;
    if (v >= 0 && d >= 0 && v < this.w && d < this.h) {
      this.p[d * this.w + v] = OC;
    }
  }
  get(v, d) {
    if (v >= 0 && d >= 0 && v < this.w && d < this.h) {
      return this.p[d * this.w + v];
    } else {
      return null;
    }
  }
  rect(v, d, OC, OK, OW) {
    for (let ye = 0; ye < OK; ye++) {
      for (let yn = 0; yn < OC; yn++) {
        this.set(v + yn, d + ye, OW);
      }
    }
  }
  stamp(v, d, OC, OK, {
    flip: OW = false,
    mirror: OM = false,
    only: pe = null
  } = {}) {
    let ps = v.length;
    for (let yt = 0; yt < ps; yt++) {
      let ys = v[OW ? ps - 1 - yt : yt];
      let He = ys.length;
      for (let Hn = 0; Hn < He; Hn++) {
        let Ht = ys[OW || OM ? He - 1 - Hn : Hn];
        if (Ht === "." || Ht === " ") {
          continue;
        }
        let Hs = OK[Ht];
        if (Hs) {
          if (!pe || !!pe(d + Hn, OC + yt)) {
            this.set(d + Hn, OC + yt, Hs);
          }
        }
      }
    }
  }
  toCanvas(v = di, d = 1) {
    let OK = newCanvas(this.w * d, this.h * d);
    if (!OK) {
      return null;
    }
    let pn = OK.getContext("2d");
    let pt = pn.createImageData(this.w * d, this.h * d);
    let ps = pt.data;
    let ye = this.w * d;
    for (let yn = 0; yn < this.h; yn++) {
      for (let yt = 0; yt < this.w; yt++) {
        let ys = this.p[yn * this.w + yt];
        if (!ys) {
          continue;
        }
        let [He, Hn, Ht] = rgb(hexOf(v, ys));
        for (let Hs = 0; Hs < d; Hs++) {
          for (let je = 0; je < d; je++) {
            let jn = ((yn * d + Hs) * ye + yt * d + je) * 4;
            ps[jn] = He;
            ps[jn + 1] = Hn;
            ps[jn + 2] = Ht;
            ps[jn + 3] = 255;
          }
        }
      }
    }
    pn.putImageData(pt, 0, 0);
    return OK;
  }
  toMap() {
    let OK = {};
    let OW = new Map();
    let OM = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let pe = [];
    for (let ps = 0; ps < this.h; ps++) {
      let ye = "";
      for (let yn = 0; yn < this.w; yn++) {
        let yt = this.p[ps * this.w + yn];
        if (!yt) {
          ye += ".";
          continue;
        }
        let ys = OW.get(yt);
        if (!ys) {
          ys = OM[OW.size] || "?";
          OW.set(yt, ys);
          OK[ys] = yt;
        }
        ye += ys;
      }
      pe.push(ye);
    }
    const pt = {
      w: this.w,
      h: this.h,
      pal: OK,
      rows: pe
    };
    return pt;
  }
};
j(R7, "PB");
var R8 = R7;
var R9 = new WeakMap();
var Rv = new WeakMap();
var Rd = 1;
function palId(v) {
  let OK = Rv.get(v);
  if (!OK) {
    OK = Rd++;
    Rv.set(v, OK);
  }
  return OK;
}
j(palId, "palId");
function frameRows(v, d = 0) {
  if (!v) {
    return null;
  }
  if (v.rows) {
    return v.rows;
  }
  let OW = v.frames;
  if (!OW) {
    return null;
  }
  if (Array.isArray(OW)) {
    return OW[(d | 0) % OW.length] || OW[0];
  }
  if (typeof d == "string") {
    let pt = d.indexOf(":");
    let ps = pt >= 0 ? d.slice(0, pt) : d;
    let ye = pt >= 0 ? +d.slice(pt + 1) : 0;
    let yn = OW[ps];
    if (!yn || !yn.length) {
      return null;
    } else {
      return yn[(ye | 0) % yn.length] || yn[0];
    }
  }
  let pe = OW.idle || OW[Object.keys(OW)[0]];
  if (!pe || !pe.length) {
    return null;
  } else {
    return pe[(d | 0) % pe.length];
  }
}
j(frameRows, "frameRows");
function bake(v, d = 0, OC = di, OK = 1) {
  if (!v) {
    return null;
  }
  let pe = R9.get(v);
  if (!pe) {
    pe = new Map();
    R9.set(v, pe);
  }
  let pn = d + "|" + palId(OC) + "|" + OK;
  if (pe.has(pn)) {
    return pe.get(pn);
  }
  let ps = frameRows(v, d);
  let ye = null;
  if (ps) {
    let yt = new R8(v.w || ps[0].length, v.h || ps.length);
    let ys = {};
    for (let He in v.pal) {
      ys[He] = v.pal[He];
    }
    yt.stamp(ps, 0, 0, ys);
    ye = yt.toCanvas(OC, OK);
  }
  pe.set(pn, ye);
  return ye;
}
j(bake, "bake");
var Ry = {
  A: [".#.", "#.#", "###", "#.#", "#.#"],
  "2": ["##.", "..#", ".#.", "#..", "###"],
  "3": ["##.", "..#", ".#.", "..#", "##."],
  "4": ["#.#", "#.#", "###", "..#", "..#"],
  "5": ["###", "#..", "##.", "..#", "##."],
  "6": [".##", "#..", "###", "#.#", "###"],
  "7": ["###", "..#", ".#.", ".#.", ".#."],
  "8": ["###", "#.#", ".#.", "#.#", "###"],
  "9": ["###", "#.#", "###", "..#", "##."],
  "10": ["#.###", "#.#.#", "#.#.#", "#.#.#", "#.###"],
  J: ["..#", "..#", "..#", "#.#", ".#."],
  Q: [".#.", "#.#", "#.#", "#.#", ".##"],
  K: ["#.#", "#.#", "##.", "#.#", "#.#"],
  "0": ["###", "#.#", "#.#", "#.#", "###"],
  "1": [".#.", "##.", ".#.", ".#.", "###"],
  "?": ["##.", "..#", ".#.", "...", ".#."],
  R: ["##.", "#.#", "##.", "#.#", "#.#"],
  O: [".#.", "#.#", "#.#", "#.#", ".#."],
  U: ["#.#", "#.#", "#.#", "#.#", "###"],
  T: ["###", ".#.", ".#.", ".#.", ".#."],
  E: ["###", "#..", "##.", "#..", "###"],
  N: ["#.#", "###", "###", "#.#", "#.#"],
  S: [".##", "#..", ".#.", "..#", "##."],
  L: ["#..", "#..", "#..", "#..", "###"],
  I: ["###", ".#.", ".#.", ".#.", "###"],
  C: [".##", "#..", "#..", "#..", ".##"],
  D: ["##.", "#.#", "#.#", "#.#", "##."],
  M: ["#.#", "###", "###", "#.#", "#.#"],
  F: ["###", "#..", "##.", "#..", "#.."],
  H: ["#.#", "#.#", "###", "#.#", "#.#"],
  Y: ["#.#", "#.#", ".#.", ".#.", ".#."],
  W: ["#.#", "#.#", "#.#", "###", "#.#"],
  P: ["##.", "#.#", "##.", "#..", "#.."],
  A2: [".#.", "#.#", "###", "#.#", "#.#"]
};
function micro(v, d, OC, OK, OW) {
  let pe = OC;
  for (let ye of String(d)) {
    if (ye === " ") {
      pe += 2;
      continue;
    }
    let yn = Ry[ye];
    if (!yn) {
      pe += 4;
      continue;
    }
    const yt = {
      "#": OW
    };
    v.stamp(yn, pe, OK, yt);
    pe += yn[0].length + 1;
  }
  return pe - OC - 1;
}
j(micro, "micro");
const Ru = {
  ["7:keys"]: {
    kind: "coffee",
    at: 2,
    name: "the coffee ring on the 7 of KEYS"
  },
  ["2:socks"]: {
    kind: "tooth",
    at: 1,
    name: "a tooth mark on the 2 of SOCKS"
  },
  ["K:coins"]: {
    kind: "crayon",
    at: 3,
    name: "a brown crayon moustache on the KING of COINS"
  },
  ["A:buttons"]: {
    kind: "price",
    at: 0,
    name: "a 5c price sticker on the ACE of BUTTONS"
  },
  ["10:socks"]: {
    kind: "crease",
    at: 1,
    name: "the long crease across the 10 of SOCKS"
  },
  ["J:keys"]: {
    kind: "pinhole",
    at: 2,
    name: "a pin hole through the JACK of KEYS"
  }
};
var microW = j(v => {
  let OW = 0;
  for (let pe of String(v)) {
    OW += pe === " " ? 2 : Ry[pe] ? Ry[pe][0].length + 1 : 4;
  }
  return Math.max(0, OW - 1);
}, "microW");
var Rn = {
  buttons: "heart",
  keys: "diamond",
  socks: "spade",
  coins: "club"
};
var shownOf = j(v => Rn[v] || v, "shownOf");
var Rt = {
  heart: [".#.#.", "#####", "#####", ".###.", "..#.."],
  diamond: ["..#..", ".###.", "#####", ".###.", "..#.."],
  spade: ["..#..", ".###.", "#####", "#####", ".#.#."],
  club: [".###.", ".###.", "##.##", "#####", ".#.#."]
};
var Rs = {
  heart: [".#.#.", "#####", "#####", ".###.", "..#..", "....."],
  diamond: ["..#..", ".###.", "#####", ".###.", "..#..", "....."],
  spade: ["..#..", ".###.", "#####", "#####", "..#..", ".###."],
  club: [".###.", ".###.", "##.##", "#####", "..#..", ".###."]
};
var Rh = {
  heart: [".##...##.", "####.####", "#########", "#########", "#########", ".#######.", "..#####..", "...###...", "....#...."],
  diamond: ["....#....", "...###...", "..#####..", ".#######.", "#########", ".#######.", "..#####..", "...###...", "....#...."],
  spade: ["....#....", "...###...", "..#####..", ".#######.", "#########", "#########", ".##.#.##.", "....#....", "...###..."],
  club: ["...###...", "..#####..", "..#####..", ".##.#.##.", "#########", "#########", ".##.#.##.", "....#....", "...###..."]
};
var Rm = Object.fromEntries(dJ.map(v => [v, Rh[shownOf(v)] || Rh.heart]));
var RA = 7;
var RB = 11;
var RU = 15;
var Rg = {
  2: [[RB, 4], [RB, 26]],
  3: [[RB, 4], [RB, 15], [RB, 26]],
  4: [[RA, 4], [RU, 4], [RA, 26], [RU, 26]],
  5: [[RA, 4], [RU, 4], [RB, 15], [RA, 26], [RU, 26]],
  6: [[RA, 4], [RU, 4], [RA, 15], [RU, 15], [RA, 26], [RU, 26]],
  7: [[RA, 4], [RU, 4], [RB, 9], [RA, 15], [RU, 15], [RA, 26], [RU, 26]],
  8: [[RA, 4], [RU, 4], [RB, 9], [RA, 15], [RU, 15], [RB, 21], [RA, 26], [RU, 26]],
  9: [[RA, 4], [RU, 4], [RA, 11], [RU, 11], [RB, 15], [RA, 19], [RU, 19], [RA, 26], [RU, 26]],
  10: [[RA, 4], [RU, 4], [RB, 8], [RA, 11], [RU, 11], [RA, 19], [RU, 19], [RB, 22], [RA, 26], [RU, 26]]
};
var RZ = Ry[10];
var Rb = {
  K: ["#.#.#.#.#", "#########", "#.#.#.#.#", "#########"],
  Q: ["....#....", ".#.###.#.", "#########", ".#######."],
  J: [".......##", ".....###.", "########.", "#########"]
};
var RP = {
  J: ["..###", "...#.", "...#.", "...#.", "#..#.", "#..#.", ".##.."],
  Q: [".###.", "#...#", "#...#", "#...#", "#.#.#", "#..#.", ".##.#"],
  K: ["#...#", "#..#.", "#.#..", "##...", "#.#..", "#..#.", "#...#"]
};
var bigGlyph = j((v, d, OC, OK, OW) => {
  let ye = RP[d];
  for (let yn = 0; yn < ye.length; yn++) {
    for (let yt = 0; yt < ye[yn].length; yt++) {
      if (ye[yn][yt] === "#") {
        v.rect(OC + yt * 2, OK + yn * 2, 2, 2, OW);
      }
    }
  }
}, "bigGlyph");
var Rz = {
  J: Rb.J,
  Q: Rb.Q,
  K: Rb.K
};
var Ro = {};
var RE = [];
var Rc = ["coffee", "tally", "nick", "residue", "crease", "ripple", "crayon", "thumb", "pinhole", "price"];
var Ri = Ru;
function flawOf(v) {
  if (!v || v.rank === "TICKET") {
    return null;
  }
  let pe = Ri[v.rank + ":" + v.suit];
  if (pe) {
    return {
      kind: pe.kind,
      at: pe.at,
      named: true
    };
  }
  let pn = Math.max(0, dY.indexOf(v.rank));
  let pt = Math.max(0, dJ.indexOf(v.suit));
  return {
    kind: Rc[(pt * 7 + pn * 3) % 10],
    at: (pn + pt * 5) % 4,
    named: false
  };
}
j(flawOf, "flawOf");
function cardOutline(v) {
  let OM = dL;
  let pe = dD;
  v.rect(1, 1, OM - 2, pe - 2, "ivory");
  for (let pt = 2; pt < OM - 2; pt++) {
    v.set(pt, 0, "ink");
    v.set(pt, pe - 1, "ink");
  }
  for (let ps = 2; ps < pe - 2; ps++) {
    v.set(0, ps, "ink");
    v.set(OM - 1, ps, "ink");
  }
  v.set(1, 1, "ink");
  v.set(OM - 2, 1, "ink");
  v.set(1, pe - 2, "ink");
  v.set(OM - 2, pe - 2, "ink");
  for (let ye = 2; ye < pe - 2; ye++) {
    v.set(OM - 2, ye, "paper");
  }
  for (let yn = 2; yn < OM - 2; yn++) {
    v.set(yn, pe - 2, "paper");
  }
  for (let yt = 2; yt < OM - 2; yt++) {
    v.set(yt, 1, "white");
  }
  for (let ys = 2; ys < pe - 2; ys++) {
    v.set(1, ys, "white");
  }
}
j(cardOutline, "cardOutline");
var inkOf = j(v => R0.has(v) ? "cardred" : "cardblk", "inkOf");
function stampPip(v, d, OC, OK, OW, OM) {
  const pe = {
    "#": OW
  };
  const pt = {
    flip: OM
  };
  v.stamp(Rs[d] || Rs.heart, OC, OK, pe, pt);
}
j(stampPip, "stampPip");
function faceBuffer(v, d, OC = {}) {
  let pe = new R8(dL, dD);
  cardOutline(pe);
  if (!v) {
    return pe;
  }
  if (v.rank === "TICKET") {
    return ticketBuffer();
  }
  let pn = shownOf(v.suit);
  let pt = inkOf(v.suit);
  let ps = v.rank;
  let ye = ps === "10" ? RZ : Ry[ps] || Ry["?"];
  let yn = ye[0].length;
  let yt = ps === "10" ? 1 : 2;
  const He = {
    "#": pt
  };
  pe.stamp(ye, yt, 3, He);
  pe.stamp(Rt[pn], 1, 9, {
    "#": pt
  });
  pe.stamp(ye, dL - yt - yn, dD - 8, {
    "#": pt
  }, {
    flip: true,
    mirror: true
  });
  pe.stamp(Rt[pn], dL - 6, dD - 14, {
    "#": pt
  }, {
    flip: true,
    mirror: true
  });
  if (ps === "J" || ps === "Q" || ps === "K") {
    for (let jn = 3; jn <= 32; jn++) {
      for (let jt = 6; jt <= 19; jt++) {
        pe.set(jt, jn, jt === 6 || jt === 19 || jn === 3 || jn === 32 ? "gold1" : "panel");
      }
    }
    pe.stamp(Rb[ps], 8, 5, {
      "#": "gold2"
    });
    for (let js = 0; js < 9; js++) {
      if (Rb[ps][0][js] === "#") {
        pe.set(8 + js, 5, "gold3");
      }
    }
    bigGlyph(pe, ps, 8, 10, pt);
    pe.stamp(Rt[pn], 10, 26, {
      "#": pt
    });
    if (ps === "Q" && v.suit === "buttons" && OC.dogear) {
      pe.set(24, 1, null);
      pe.set(23, 0, null);
      pe.set(24, 0, null);
      pe.set(25, 2, null);
      pe.set(22, 1, "paper");
      pe.set(23, 1, "paper");
      pe.set(23, 2, "paper");
      pe.set(24, 2, "ink");
      pe.set(24, 3, "ink");
      pe.set(22, 0, "ink");
    }
  } else if (ps === "A") {
    const Qe = {
      "#": pt
    };
    pe.stamp(Rh[pn], 8, 13, Qe);
    if (pn === "spade") {
      for (let [Qt, Qs] of [[12, 16], [11, 17], [13, 17]]) {
        pe.set(Qt, Qs, "gold2");
      }
    }
  } else {
    let le = +ps;
    for (let [ln, ls] of Rg[le] || []) {
      stampPip(pe, pn, ln, ls, pt, ls > 17);
    }
  }
  return pe;
}
j(faceBuffer, "faceBuffer");
function ticketBuffer() {
  let OK = new R8(dL, dD);
  cardOutline(OK);
  for (let OM = 2; OM < dL - 2; OM += 2) {
    OK.set(OM, 2, "navy");
    OK.set(OM, dD - 3, "navy");
  }
  micro(OK, "WILD", 5, 5, "navy");
  ((pe, pn, pt) => {
    let ye = Ry[pe];
    for (let ys = 0; ys < 5; ys++) {
      for (let He = 0; He < 3; He++) {
        if (ye[ys][He] === "#") {
          OK.rect(pn + He * 2, pt + ys * 2, 2, 2, "navy");
        }
      }
    }
  })("?", 10, 13);
  for (let pe = 2; pe < dL - 2; pe++) {
    for (let pn = 26; pn < 29; pn++) {
      if ((pe + pn & 3) < 2) {
        OK.set(pe, pn, "cardred");
      }
    }
  }
  return OK;
}
j(ticketBuffer, "ticketBuffer");
function backBuffer(v) {
  const d = {
    AtxhN: function (ps, ye) {
      return ps(ye);
    },
    sHczv: function (ps, ye) {
      return ps * ye;
    },
    EApxB: function (ps, ye) {
      return ps + ye;
    },
    kmSdN: function (ps, ye) {
      return ps >= ye;
    },
    pVsHe: "bigpot",
    oonlC: function (ps, ye) {
      return ps(ye);
    },
    NotFH: function (ps, ye) {
      return ps - ye;
    },
    yOVdm: function (ps, ye) {
      return ps - ye;
    },
    nOcFa: "dw2",
    cJvGM: function (ps, ye) {
      return ps < ye;
    },
    zVjgX: function (ps, ye) {
      return ps - ye;
    },
    UNbyT: "gold1",
    LYoap: function (ps, ye) {
      return ps - ye;
    },
    XRddr: function (ps, ye) {
      return ps < ye;
    },
    lycaY: function (ps, ye) {
      return ps < ye;
    },
    IePiz: function (ps, ye) {
      return ps - ye;
    },
    cPoHQ: function (ps, ye) {
      return ps < ye;
    },
    wtQzK: function (ps, ye) {
      return ps - ye;
    },
    UpNNn: function (ps, ye) {
      return ps === ye;
    },
    FyBYa: "TiNyU",
    RULBU: "TdFTd",
    zKXxD: function (ps, ye) {
      return ps === ye;
    },
    qtdTu: function (ps, ye) {
      return ps % ye;
    },
    yVAzU: function (ps, ye) {
      return ps + ye;
    },
    baSRQ: function (ps, ye) {
      return ps === ye;
    },
    gOBlK: function (ps, ye) {
      return ps % ye;
    },
    wcqqE: function (ps, ye) {
      return ps + ye;
    },
    eJTGu: function (ps, ye) {
      return ps - ye;
    },
    rOpxq: function (ps, ye) {
      return ps && ye;
    },
    FfnLl: "dw4",
    ZhGSv: function (ps, ye) {
      return ps || ye;
    },
    wdWKR: "dw3",
    ikHLE: "dw1",
    ZUCwe: function (ps, ye) {
      return ps <= ye;
    },
    jNSwI: function (ps, ye) {
      return ps + ye;
    },
    NYIGN: function (ps, ye) {
      return ps - ye;
    },
    hNtXw: "KOmZZ",
    UCWmf: function (ps, ye) {
      return ps / ye;
    },
    iSwjy: function (ps, ye) {
      return ps - ye;
    },
    nMHNn: function (ps, ye) {
      return ps + ye;
    },
    dWIvJ: function (ps, ye) {
      return ps / ye;
    },
    ANVjZ: function (ps, ye) {
      return ps > ye;
    },
    eYBxY: "ink",
    tiCFD: function (ps, ye) {
      return ps > ye;
    },
    SoiIM: function (ps, ye) {
      return ps == ye;
    },
    uTMCo: function (ps, ye) {
      return ps < ye;
    },
    yzZVD: function (ps, ye) {
      return ps < ye;
    },
    gcCgU: "gold3",
    yyRim: "gold2",
    yDYHj: function (ps, ye) {
      return ps <= ye;
    },
    yMpxY: function (ps, ye) {
      return ps === ye;
    },
    wKUaz: "white"
  };
  let OC = new R8(dL, dD);
  cardOutline(OC);
  OC.rect(2, 2, dL - 4, dD - 4, "dw2");
  for (let ps = 3; ps < dL - 3; ps++) {
    OC.set(ps, 3, "gold1");
    OC.set(ps, dD - 4, "gold1");
  }
  for (let ye = 3; ye < dD - 3; ye++) {
    OC.set(3, ye, "gold1");
    OC.set(dL - 4, ye, "gold1");
  }
  for (let yn = 5; yn < dD - 5; yn++) {
    for (let yt = 5; yt < dL - 5; yt++) {
      {
        let ys = (yt + yn) % 4 === 0;
        let He = (yt - yn + 64) % 4 === 0;
        OC.set(yt, yn, d.rOpxq(ys, He) ? "dw4" : d.ZhGSv(ys, He) ? "dw3" : "dw1");
      }
    }
  }
  let OW = 13;
  let OM = 18;
  for (let Hn = OM - 9; Hn <= OM + 9; Hn++) {
    for (let Ht = OW - 7; Ht <= OW + 7; Ht++) {
      {
        let Hs = Math.abs(Ht + 0.5 - OW) / 7 + Math.abs(Hn + 0.5 - OM) / 9;
        if (Hs <= 1.08 && Hs > 0.92) {
          OC.set(Ht, Hn, "ink");
        } else if (Hs <= 0.92 && Hs > 0.7) {
          OC.set(Ht, Hn, Ht < OW == Hn < OM ? "gold3" : "gold2");
        } else if (Hs <= 0.7) {
          OC.set(Ht, Hn, "dw1");
        }
      }
    }
  }
  let pt = v === "52" ? "white" : "gold2";
  OC.rect(12, 14, 2, 8, pt);
  OC.rect(9, 17, 8, 2, pt);
  OC.rect(11, 16, 4, 4, pt);
  return OC;
}
j(backBuffer, "backBuffer");
const w1 = {
  "1": {
    c: "#ecebf4",
    w: "#7b52b8",
    d: "#a9a4c2",
    l: "#ffffff",
    t: "#4a2a73"
  },
  "5": {
    c: "#d8283f",
    w: "#ffffff",
    d: "#8e1328",
    l: "#f06a7c",
    t: "#ffffff"
  },
  "25": {
    c: "#1fa45e",
    w: "#ffffff",
    d: "#0d6537",
    l: "#5bd594",
    t: "#ffffff"
  },
  ["100"]: {
    c: "#2c2540",
    w: "#e8b43c",
    d: "#16111f",
    l: "#4d4466",
    t: "#ffe89a"
  },
  ["500"]: {
    c: "#8a3fe0",
    w: "#ffe89a",
    d: "#4f1f94",
    l: "#b98af7",
    t: "#ffe89a"
  }
};
var w2 = w1;
w2[0.5] = w2[1];
const w3 = {
  "1": [".#", "##", ".#", ".#", ".#"],
  "2": Ry[2],
  "5": Ry[5],
  "0": Ry[0]
};
var w4 = w3;
function chipTopRows(v) {
  let OK = [];
  for (let ye = 0; ye < 18; ye++) {
    let yn = "";
    for (let yt = 0; yt < 18; yt++) {
      let He = yt + 0.5 - 9;
      let Hn = ye + 0.5 - 9;
      let Ht = Math.hypot(He, Hn);
      let Hs = (Math.atan2(Hn, He) / (Math.PI * 2) + 1) % 1;
      let je = ".";
      if (Ht <= 8.9) {
        if (Ht > 8) {
          je = "k";
        } else if (Ht > 6.6) {
          je = Math.floor(Hs * 16 + 0.5) % 2 === 0 ? "w" : He + Hn > 7 ? "d" : "c";
        } else if (Ht > 5.9) {
          je = "d";
        } else {
          je = He + Hn < -5.5 && Ht > 4 ? "l" : "c";
        }
      }
      yn += je;
    }
    OK.push(yn.split(""));
  }
  let OW = [...(v === 0.5 ? "" : String(v))].map(jt => w4[jt] || Ry[jt]);
  let OM = OW.reduce((jt, js) => jt + js[0].length, 0) + Math.max(0, OW.length - 1);
  let pe = Math.round(9 - OM / 2);
  let pn = 7;
  for (let jt of OW) {
    for (let js = 0; js < 5; js++) {
      for (let Qe = 0; Qe < jt[js].length; Qe++) {
        if (jt[js][Qe] === "#") {
          OK[pn + js][pe + Qe] = "t";
        }
      }
    }
    pe += jt[0].length + 1;
  }
  if (v === 0.5) {
    for (let Qt = 0; Qt < 18; Qt++) {
      for (let Qs = 10; Qs < 18; Qs++) {
        OK[Qt][Qs] = Qs === 10 && OK[Qt][Qs] !== "." ? "k" : ".";
      }
    }
  }
  return OK.map(le => le.join(""));
}
j(chipTopRows, "chipTopRows");
var w6 = [".kkkkkkkkkkkkkk.", "kllllllllllllllk", "kcwwccwwccwwccck", "kdwwddwwddwwdddk", ".kkkkkkkkkkkkkk."];
var w7 = [".kkkkkkkkkkkkkk.", "kllllllllllllllk", "kccwwccwwccwwcck", "kddwwddwwddwwddk", ".kkkkkkkkkkkkkk."];
var w8 = [".kkkkkkk........", "kllllllk........", "kcwwccck........", "kdwwdddk........", ".kkkkkkk........"];
function chipCapRows(v = false) {
  let OC = [];
  for (let pe = 0; pe < 7; pe++) {
    let pn = "";
    for (let pt = 0; pt < 16; pt++) {
      let ye = (pt + 0.5 - 8) / 8;
      let yn = (pe + 0.5 - 3.5) / 3.5;
      let yt = Math.hypot(ye, yn);
      let ys = (Math.atan2(yn, ye) / (Math.PI * 2) + 1) % 1;
      let He = ".";
      if (yt <= 1) {
        He = yt > 0.84 ? "k" : yt > 0.58 ? Math.floor(ys * 12 + 0.5) % 2 === 0 ? "w" : "c" : yt > 0.44 ? "d" : yn < -0.1 && ye < 0.2 ? "l" : "c";
      }
      if (v && pt > 7) {
        He = pt === 8 && He !== "." ? "k" : ".";
      }
      pn += He;
    }
    OC.push(pn);
  }
  return OC;
}
j(chipCapRows, "chipCapRows");
const wv = {
  k: "ink"
};
var chipPal = j(v => Object.assign(wv, w2[v]), "chipPal");
function shoeBuffer() {
  let d = new R8(30, 22);
  for (let OM = 4; OM < 20; OM++) {
    for (let pe = 6; pe < 29; pe++) {
      d.set(pe, OM, "rail1");
    }
  }
  for (let pn = 6; pn < 29; pn++) {
    d.set(pn, 4, "rail3");
    d.set(pn, 19, "rail0");
    d.set(pn, 20, "void");
  }
  for (let pt = 4; pt < 20; pt++) {
    d.set(28, pt, "rail0");
    d.set(6, pt, "rail2");
  }
  for (let ps = 6; ps < 19; ps++) {
    let He = 1 + (ps - 6 >> 2);
    for (let Hn = He; Hn < 9; Hn++) {
      d.set(Hn, ps, "rail0");
    }
  }
  for (let Ht = 7; Ht < 18; Ht++) {
    let Hs = 2 + (Ht - 6 >> 2);
    for (let je = Hs; je < Hs + 5; je++) {
      d.set(je, Ht, "dw2");
    }
    d.set(Hs + 5, Ht, Ht & 1 ? "ivory" : "box2");
    if (Ht === 12) {
      d.set(Hs + 2, Ht, "gold2");
    }
  }
  for (let jn = 6; jn < 19; jn++) {
    let jt = 1 + (jn - 6 >> 2);
    d.set(jt - 1, jn, "gold2");
  }
  for (let js = 1; js < 29; js++) {
    if (!d.get(js, 5)) {
      js < 9;
    }
  }
  for (let Qe = 9; Qe < 28; Qe++) {
    d.set(Qe, 5, "gold1");
  }
  d.rect(15, 11, 9, 5, "gold1");
  for (let Qt = 15; Qt < 24; Qt++) {
    d.set(Qt, 11, "gold2");
  }
  d.set(19, 13, "rail0");
  for (let Qs = 9; Qs < 27; Qs++) {
    d.set(Qs, 2, Qs & 1 ? "ivory" : "box2");
    d.set(Qs, 3, "dw2");
  }
  d.set(8, 3, "gold2");
  d.set(27, 3, "rail0");
  return d;
}
j(shoeBuffer, "shoeBuffer");
function trayBuffer() {
  let OW = new R8(28, 12);
  for (let pe = 2; pe < 10; pe++) {
    for (let pn = 1; pn < 27; pn++) {
      OW.set(pn, pe, "rail0");
    }
  }
  for (let pt = 1; pt < 27; pt++) {
    OW.set(pt, 1, "gold1");
    OW.set(pt, 2, "gold2");
    OW.set(pt, 10, "void");
  }
  for (let ps = 2; ps < 10; ps++) {
    OW.set(0, ps, "gold1");
    OW.set(27, ps, "gold1");
  }
  for (let ye = 4; ye < 9; ye++) {
    for (let yn = 3; yn < 25; yn++) {
      OW.set(yn, ye, "rail1");
    }
  }
  return OW;
}
j(trayBuffer, "trayBuffer");
function chairBuffer() {
  let OM = new R8(26, 30);
  for (let pe = 2; pe < 30; pe++) {
    for (let pn = 1; pn < 25; pn++) {
      if (!(pe < 5) || !(pn < 3 + (5 - pe)) && !(pn > 22 - (5 - pe))) {
        OM.set(pn, pe, "gold0");
      }
    }
  }
  for (let pt = 2; pt < 30; pt++) {
    for (let ps = 1; ps < 25; ps++) {
      if ((!(pt < 5) || !(ps < 3 + (5 - pt)) && !(ps > 22 - (5 - pt))) && (pt === 2 || ps === 1 || ps === 24)) {
        OM.set(ps, pt, "gold1");
      }
    }
  }
  for (let ye = 4; ye < 30; ye++) {
    for (let yn = 3; yn < 23; yn++) {
      if (!(ye < 7) || !(yn < 5 + (7 - ye)) && !(yn > 20 - (7 - ye))) {
        OM.set(yn, ye, yn < 5 ? "dw4" : yn > 20 || (yn + ye) % 7 === 0 ? "dw2" : "dw3");
      }
    }
  }
  for (let yt = 5; yt < 21; yt++) {
    OM.set(yt, 5, "dw5");
  }
  for (let [ys, He] of [[7, 10], [13, 10], [19, 10], [10, 16], [16, 16], [7, 22], [13, 22], [19, 22]]) {
    OM.set(ys, He, "gold2");
    OM.set(ys, He + 1, "dw1");
  }
  return OM;
}
j(chairBuffer, "chairBuffer");
function chairFrontBuffer() {
  let OK = new R8(30, 26);
  let OW = 14.5;
  for (let pn = 0; pn < 26; pn++) {
    for (let pt = 0; pt < 30; pt++) {
      let yn = (pt - OW) / 15;
      let yt = pn < 10 ? (10 - pn) / 10 : 0;
      if (yn * yn + yt * yt > 1) {
        continue;
      }
      let ys = yn * yn + yt * yt > 0.8 || pt === 0 || pt === 29;
      OK.set(pt, pn, ys ? "gold1" : "plush");
    }
  }
  for (let He = 0; He < 26; He++) {
    for (let Hn = 0; Hn < 30; Hn++) {
      if (OK.get(Hn, He) !== "plush") {
        continue;
      }
      if ([OK.get(Hn - 1, He), OK.get(Hn + 1, He), OK.get(Hn, He - 1)].includes("gold1")) {
        OK.set(Hn, He, Hn < OW ? "gold2" : "gold0");
      }
    }
  }
  for (let [Ht, Hs] of [[9, 8], [15, 6], [21, 8], [12, 13], [18, 13], [9, 18], [15, 18], [21, 18]]) {
    OK.set(Ht, Hs, "#3a0f16");
    OK.set(Ht - 1, Hs - 1, "#8a3040");
  }
  for (let je = 1; je < 29; je++) {
    OK.set(je, 23, "gold2");
    OK.set(je, 24, "gold0");
    OK.set(je, 25, "void");
  }
  return OK;
}
j(chairFrontBuffer, "chairFrontBuffer");
function chairBackBuffer() {
  let OM = new R8(34, 13);
  for (let pe = 0; pe < 13; pe++) {
    for (let pn = 0; pn < 34; pn++) {
      if (pe < 3 && (pn < 3 - pe || pn > 30 + pe)) {
        continue;
      }
      let pt = pn === 0 || pn === 33 || pe === 0 || pe < 3 && (pn === 3 - pe || pn === 30 + pe);
      OM.set(pn, pe, pt ? "gold1" : pe < 2 ? "rail3" : pe < 6 ? "rail2" : "rail1");
    }
  }
  for (let ps = 2; ps < 32; ps++) {
    if (OM.get(ps, 1) === "rail3") {
      OM.set(ps, 1, "gold2");
    }
  }
  for (let ye = 3; ye < 12; ye++) {
    for (let yn = 4; yn < 30; yn++) {
      OM.set(yn, ye, ye === 3 || yn === 4 ? "gold3" : ye === 11 || yn === 29 ? "gold0" : "gold1");
    }
  }
  return OM;
}
j(chairBackBuffer, "chairBackBuffer");
const wQ = {
  w: 14,
  h: 12,
  pal: {
    k: "ink",
    w: "ivory",
    b: "dw4",
    s: "box2"
  },
  frames: {
    open: [["..k.k.k.......", ".kwkwkwk......", ".kwkwkwk.k....", ".kwwwwwwkwk...", ".kwwwwwwwwk...", ".kwwwwwwwwk...", ".kswwwwwwk....", "..kwwwwwk.....", "..kbbbbbk.....", "..kbbbbbk.....", "...kkkkk......", ".............."]],
    hold: [["..............", "..kkkkkk......", ".kwwwwwwk.....", ".kwkwkwwwk....", ".kwwwwwwwk....", ".kswwwwwwk....", "..kwwwwwk.....", "..kbbbbbk.....", "..kbbbbbk.....", "...kkkkk......", "..............", ".............."]],
    flat: [["..............", "..............", ".kkkkkkkkk....", "kwwwwwwwwwk...", "kwwwwwwwwwwk..", "kswwwwwwwwwk..", ".kkkkkkkkkk...", "..kbbbbbk.....", "..kbbbbbk.....", "...kkkkk......", "..............", ".............."]],
    point: [[".....k........", "....kwk.......", "....kwk.......", "..kkkwkk......", ".kwkwwwwk.....", ".kwwwwwwk.....", ".kswwwwwk.....", "..kwwwwk......", "..kbbbbk......", "..kbbbbk......", "...kkkk.......", ".............."]]
  }
};
const wT = {
  w: 26,
  h: 4,
  pal: {
    k: "ink",
    r: "inkred"
  }
};
wT.rows = ["kkkkkkkkkkkkkkkkkkkkkkkkkk", "krrrrrrrrrrrrrrrrrrrrrrrrk", "krrrrrrrrrrrrrrrrrrrrrrrrk", "kkkkkkkkkkkkkkkkkkkkkkkkkk"];
const wr = {
  w: 24,
  h: 14,
  pal: {
    k: "ink",
    w: "ivory",
    b: "box2",
    r: "inkred"
  }
};
wr.rows = ["kkkkkkkkkkkkkkkkkkkkkkkk", "kwkwwwwwwwwwwwwwwwwwwkwk", "kwwkwwwwwwwwwwwwwwwwkwwk", "kwwwkwwwwwwwwwwwwwwkwwwk", "kwwwwkkwwwwwwwwwwkkwwwwk", "kwwwwwwkkwwwwwwkkwwwwwwk", "kwwwwwwwwkkrrkkwwwwwwwwk", "kwwwwwwwwwwrrwwwwwwwwwwk", "kwwwwwwwwwwwwwwwwwwwwwwk", "kbbbbwwwwwwwwwwwwwwwwwwk", "kwwwwwwwwwwwwwwwwwwwwwwk", "kbbbbbbwwwwwwwwwwwwwwwwk", "kwwwwwwwwwwwwwwwwwwwwwwk", "kkkkkkkkkkkkkkkkkkkkkkkk"];
var wk = wQ;
var wS = {
  shoe: shoeBuffer().toMap(),
  tray: trayBuffer().toMap(),
  chair: chairBuffer().toMap(),
  chairFront: chairFrontBuffer().toMap(),
  chairBack: chairBackBuffer().toMap(),
  glove: wk,
  cut: wT,
  envelope: wr
};
var wf = 31;
var wX = 24;
var wu = {
  hit: ["#########", "#.......#", "#...#...#", "#...#...#", "#.#####.#", "#...#...#", "#...#...#", "#.......#", "#########"],
  stand: ["..#.#.#..", "..#.#.#.#", "#.#.#.#.#", "#.#.#.#.#", "#.#######", "#########", ".########", "..######.", "...####.."],
  double: ["##...##.#####", ".##.##.....##", "..###...#####", ".##.##.##....", "##...##.#####"],
  split: ["####......####", "#..#......#..#", "#..#.#..#.#..#", "#..##....##..#", "#..#.#..#.#..#", "#..#......#..#", "####......####"],
  surrender: ["##.......", "#######..", "########.", "#######..", "##.......", "##.......", "##.......", "##.......", "##......."],
  skill: ["....#....", "....#....", "...###...", "#########", ".#######.", "..#####..", "..##.##..", ".##...##.", ".#.....#."],
  deal: [".######....", ".#....#....", ".#..######.", ".#..#....#.", ".#..#....#.", ".####....#.", "....#....#.", "....######."],
  rebet: ["..#####..", ".#.....#.", "#.......#", "#......##", "#.....###", "#........", ".#.....#.", "..#####.."],
  clear: ["#.....#", ".#...#.", "..#.#..", "...#...", "..#.#..", ".#...#.", "#.....#"],
  leave: ["######...", "#....#...", "#....#.#.", "#....####", "#....#.#.", "#....#...", "######..."],
  talk: [".#######.", "#.......#", "#.#.#.#.#", "#.......#", ".####.##.", "....##...", "....#...."]
};
var we = Object.keys(wu);
function buttonBuffer(v) {
  let pe = new R8(wf, wX);
  for (let ys = 0; ys < wf; ys++) {
    for (let He of [0, 1, wX - 2, wX - 1]) {
      pe.set(ys, He, "k");
    }
  }
  for (let Hn = 0; Hn < wX; Hn++) {
    for (let Ht of [0, 1, wf - 2, wf - 1]) {
      pe.set(Ht, Hn, "k");
    }
  }
  let pn = wu[v] || wu.hit;
  let pt = pn[0].length;
  let ps = pn.length;
  let ye = pt <= 9 && ps <= 9 ? 2 : 1;
  let yn = Math.floor((wf - pt * ye) / 2);
  let yt = Math.floor((wX - ps * ye) / 2);
  for (let Hs = 0; Hs < ps; Hs++) {
    for (let je = 0; je < pt; je++) {
      if (pn[Hs][je] === "#") {
        pe.rect(yn + je * ye, yt + Hs * ye, ye, ye, "k");
      }
    }
  }
  return pe;
}
j(buttonBuffer, "buttonBuffer");
var ws = {
  off: {
    k: "#ff7f27"
  },
  on: {
    k: "#ffff00"
  },
  dis: {
    k: "#5a5a66"
  }
};
var wh = ["..########..", "..#......##.", "..#.##...#.#", "..#.##...###", "..#........#", "..#...#....#", "..#..###...#", "..#...#....#", "..#........#", "..#.....##.#", "..#.....##.#", "..##########"];
var cardMap = j(v => ({
  w: dL,
  h: dD,
  pal: null,
  buf: v
}), "cardMap");
var wA = {
  glyphs: Ry,
  suits: Rt,
  pips: Rm,
  faces: Rz,
  faceMoods: Ro,
  aceTag: RE,
  pipLayouts: Rg,
  chips: Object.fromEntries(R1.concat([0.5]).map(v => [v, {
    w: 18,
    h: 18,
    pal: chipPal(v),
    rows: chipTopRows(v)
  }])),
  chipEdges: Object.fromEntries(R1.concat([0.5]).map(v => [v, {
    w: 16,
    h: 5,
    pal: chipPal(v),
    rows: v === 0.5 ? w8 : w6
  }])),
  chipEdgesB: Object.fromEntries(R1.concat([0.5]).map(v => [v, {
    w: 16,
    h: 5,
    pal: chipPal(v),
    rows: v === 0.5 ? w8 : w7
  }])),
  chipCaps: Object.fromEntries(R1.concat([0.5]).map(v => [v, {
    w: 16,
    h: 7,
    pal: chipPal(v),
    rows: chipCapRows(v === 0.5)
  }])),
  suitShown: Rn,
  suits9: Rh,
  props: wS,
  buttons: Object.fromEntries(we.map(v => [v, buttonBuffer(v).toMap()])),
  icon: wh,
  flip: [27, 15, 6, 2, 6, 15, 27, 39],
  backs: ["51", "52"],
  cardMap: cardMap
};
wA.thankYou = wA.chips[1];
const wB = {
  spade: 0,
  heart: 1,
  diamond: 2,
  club: 3
};
var wU = ["base", "ch1", "ch2", "ch3", "ch4", "ch5", "ut"];
var wg = wB;
var wZ = new Map();
var wb = "base";
function deckFor(v) {
  let OW = String(v ?? "").toLowerCase();
  if (/^ch[1-4]$/.test(OW)) {
    return OW;
  } else if (/^ch5/.test(OW)) {
    return "ch5";
  } else if (/^ut/.test(OW)) {
    return "ut";
  } else if (/^[1-5]$/.test(OW)) {
    return "ch" + OW;
  } else {
    return "base";
  }
}
j(deckFor, "deckFor");
var deckPath = j(v => "assets/blackjack/decks/F_" + (wU.includes(v) ? v : "base") + ".png", "deckPath");
function loadDeck(v) {
  if (!wU.includes(v)) {
    v = "base";
  }
  if (wZ.has(v)) {
    return wZ.get(v);
  }
  const OK = {
    img: null
  };
  OK.ready = false;
  OK.failed = false;
  let pe = OK;
  wZ.set(v, pe);
  if (typeof Image === "undefined") {
    pe.failed = true;
    return pe;
  }
  try {
    let pn = new Image();
    pe.img = pn;
    pn.onload = () => {
      pe.ready = true;
    };
    pn.onerror = () => {
      pe.failed = true;
      console.warn("[blackjack] deck sheet failed to load: " + v);
    };
    pn.src = new URL("../" + deckPath(v), import.meta.url).href;
  } catch {
    pe.failed = true;
  }
  return pe;
}
j(loadDeck, "loadDeck");
function setDeck(v) {
  wb = wU.includes(v) ? v : "base";
  loadDeck(wb);
}
j(setDeck, "setDeck");
function preloadDecks() {
  for (let OC of wU) {
    loadDeck(OC);
  }
}
j(preloadDecks, "preloadDecks");
function deckReady(v = wb) {
  let d = wZ.get(v);
  return !!d && !!d.ready;
}
j(deckReady, "deckReady");
function deckSettled(v = wb) {
  let OW = wZ.get(v);
  return !!OW && (!!OW.ready || !!OW.failed);
}
j(deckSettled, "deckSettled");
var currentDeck = j(() => wb, "currentDeck");
function setDeckImage(v, d) {
  const OC = {
    img: d,
    ready: !!d,
    failed: !d
  };
  wZ.set(v, OC);
  wV.clear();
}
j(setDeckImage, "setDeckImage");
var wV = new Map();
function cacheGet(v, d) {
  if (wV.has(v)) {
    return wV.get(v);
  }
  let OM = d();
  wV.set(v, OM);
  return OM;
}
j(cacheGet, "cacheGet");
function clearCaches() {
  wV.clear();
  OA.clear();
}
j(clearCaches, "clearCaches");
function cardKey(v) {
  if (v) {
    if (v.rank === "TICKET") {
      return "T";
    } else {
      return v.rank + ":" + v.suit;
    }
  } else {
    return "-";
  }
}
j(cardKey, "cardKey");
var sheetId = j(() => deckReady(wb) ? wb : deckReady("base") && deckSettled(wb) ? "base" : null, "sheetId");
var noImages = j(() => typeof Image === "undefined", "noImages");
var deckTag = j(() => sheetId() || (noImages() ? "p" : null), "deckTag");
function sheetCell(v, d, OC) {
  let pn = sheetId();
  let pt = pn && wZ.get(pn);
  if (!pt || !pt.ready || v < 0 || d == null) {
    return null;
  } else {
    return cacheGet("D" + pn + "|" + v + "," + d + "|" + (OC ? 1 : 0), () => {
      {
        let ys = newCanvas(dK, dW);
        if (!ys) {
          return null;
        }
        let He = ys.getContext("2d");
        He.imageSmoothingEnabled = false;
        He.drawImage(pt.img, v * dK, d * dW, dK, dW, 0, 0, dK, dW);
        if (OC) {
          He.globalCompositeOperation = "source-atop";
          He.fillStyle = "rgba(8,4,20,0.45)";
          He.fillRect(0, 0, dK, dW);
          He.globalCompositeOperation = "source-over";
        }
        return ys;
      }
    });
  }
}
j(sheetCell, "sheetCell");
function padded(v, d) {
  return cacheGet("P" + d, () => {
    if (!v) {
      return null;
    }
    let pt = newCanvas(dK, dW);
    if (pt) {
      pt.getContext("2d").drawImage(v, dK - dL >> 1, dW - dD >> 1);
      return pt;
    } else {
      return null;
    }
  });
}
j(padded, "padded");
function faceCanvas(v, d, OC, OK) {
  if (v) {
    let js = v.rank === "TICKET" ? sheetCell(1, 4, OC) : sheetCell(dY.indexOf(v.rank), wg[shownOf(v.suit)], OC);
    if (js) {
      return js;
    }
  }
  if (!noImages()) {
    return null;
  }
  let pt = "F" + cardKey(v) + "|" + (d | 0) + "|" + (OC ? 1 : 0) + "|" + (OK ? 1 : 0);
  const ps = {
    dogear: OK
  };
  return padded(cacheGet(pt, () => faceBuffer(v, d, ps).toCanvas(OC ? dV : di, 1)), pt);
}
j(faceCanvas, "faceCanvas");
function backCanvas(v, d) {
  let OK = sheetCell(0, 4, d);
  if (OK) {
    return OK;
  }
  if (!noImages()) {
    return null;
  }
  let OM = "B" + v + "|" + (d ? 1 : 0);
  return padded(cacheGet(OM, () => backBuffer(v).toCanvas(d ? dV : di, 1)), OM);
}
j(backCanvas, "backCanvas");
function narrow(v, d, OC) {
  return cacheGet("N" + d + "|" + OC, () => {
    if (!v) {
      return null;
    }
    let yt = newCanvas(Math.max(1, OC), dW);
    if (!yt) {
      return null;
    }
    let ys = yt.getContext("2d");
    if (OC <= 2) {
      for (let Hs = 0; Hs < OC; Hs++) {
        ys.drawImage(v, Hs === 0 ? 0 : dK - 1, 0, 1, dW, Hs, 0, 1, dW);
      }
      return yt;
    }
    for (let je = 0; je < OC; je++) {
      let jn = je === 0 ? 0 : je === OC - 1 ? dK - 1 : Math.min(dK - 2, 1 + Math.floor((je - 0.5) / (OC - 2) * (dK - 2)));
      ys.drawImage(v, jn, 0, 1, dW, je, 0, 1, dW);
    }
    return yt;
  });
}
j(narrow, "narrow");
var noSmooth = j(v => {
  v.imageSmoothingEnabled = false;
}, "noSmooth");
function drawCard(v, d, OC, OK, OW = {}) {
  let pt = Math.max(1, Math.round(OW.scale || 2));
  let ps = !!OW.dim;
  let ye = OW.back === "52" ? "52" : "51";
  let yn = OW.react === "grin" ? 1 : OW.react === "wince" ? 2 : 0;
  let yt = deckTag();
  if (!yt) {
    return false;
  }
  let ys = Number.isFinite(OW.flip) ? OW.flip : -1;
  let He = OW.flipFrame ?? -1;
  if (ys < 0 && He >= 0 && He < 7) {
    ys = (He + 0.5) / 8;
  }
  let Ht = ys >= 0 && ys < 1;
  let Hs = Ht ? ys < 0.5 : OW.faceDown || !d;
  let je = null;
  let jn = "";
  if (Hs) {
    jn = yt + "b" + ye + ps;
    je = backCanvas(ye, ps);
  } else {
    jn = yt + "f" + cardKey(d) + yn + ps + (OW.dogear ? "d" : "");
    je = faceCanvas(d, yn, ps, OW.dogear);
  }
  if (!je) {
    return false;
  }
  let jt = dK;
  if (Ht) {
    jt = Math.round(dK * Math.abs(Math.cos(Math.PI * ys)));
    if (jt < 1) {
      return true;
    }
    if (jt < dK) {
      je = narrow(je, jn, jt);
    }
    if (!je) {
      return false;
    }
  }
  OC = Math.round(OC);
  OK = Math.round(OK);
  let js = OC + Math.round((dK - jt) * pt / 2);
  noSmooth(v);
  if (OW.shadow !== false && jt > 4) {
    let Qt = Math.max(0, OW.lift | 0);
    v.fillStyle = "rgba(0,0,0,0.45)";
    v.fillRect(js + pt * (1 + (Qt >> 1)), OK + dW * pt + Qt * pt, (jt - 2) * pt, pt * (Qt ? 2 : 1));
  }
  v.drawImage(je, js, OK, jt * pt, dW * pt);
  return true;
}
j(drawCard, "drawCard");
function drawChip(v, d, OC, OK, {
  edge: OW = false,
  cap: OM = false,
  turned: pe = false,
  scale: pn = 2,
  dim: pt = false,
  shadow: ps = true
} = {}) {
  let He = d === 0.5 ? 0.5 : d;
  let Hn = (OM ? wA.chipCaps : OW ? pe ? wA.chipEdgesB : wA.chipEdges : wA.chips)[He];
  if (!Hn) {
    return;
  }
  let Ht = bake(Hn, 0, pt ? dV : di, 1);
  if (Ht) {
    noSmooth(v);
    OC = Math.round(OC);
    OK = Math.round(OK);
    if (!OW && !OM && ps) {
      v.fillStyle = "rgba(0,0,0,0.5)";
      v.fillRect(OC + pn * 3, OK + pn * 18, pn * 12, pn);
    }
    v.drawImage(Ht, OC, OK, Ht.width * pn, Ht.height * pn);
  }
}
j(drawChip, "drawChip");
var O6 = [0, 1, 0, -1, 0, 1, 1, 0, -1, 0, 0, 1];
function drawStack(v, d, OC, OK, {
  scale: OW = 2,
  dim: OM = false,
  max: pe = 36,
  per: pn = 12
} = {}) {
  if (!d || !d.length) {
    return;
  }
  OC = Math.round(OC);
  OK = Math.round(OK);
  let yn = Math.min(pe, d.length, pn * 3);
  let yt = Math.min(3, Math.ceil(yn / pn));
  v.fillStyle = "rgba(0,0,0,0.45)";
  v.fillRect(OC + OW, OK + OW * 5, (yt * 17 - 3) * OW, OW);
  for (let He = 0; He < yt; He++) {
    let Hn = [];
    for (let je = He * pn; je < Math.min(yn, He * pn + pn); je++) {
      Hn.push(d[je]);
    }
    let Ht = OC + He * 17 * OW;
    Hn.forEach((jn, jt) => drawChip(v, jn, Ht + O6[(jt + He * 5) % 12] * (OW >> 1), OK - jt * 3 * OW, {
      edge: true,
      turned: !!(jt & 1),
      scale: OW,
      dim: OM
    }));
    let Hs = Hn.length - 1;
    if (Hs >= 0) {
      drawChip(v, Hn[Hs], Ht + O6[(Hs + He * 5) % 12] * (OW >> 1), OK - Hs * 3 * OW - OW * 4, {
        cap: true,
        scale: OW,
        dim: OM
      });
    }
  }
}
j(drawStack, "drawStack");
var stackHeight = j((v, d = 2, OC = 12) => v <= 0 ? 0 : (Math.min(OC, v) - 1) * 3 * d + d * 9, "stackHeight");
function chipsFor(v) {
  let pe = Math.round(Math.max(0, +v || 0) * 2) / 2;
  let pn = [];
  let pt = R1.slice().sort((ps, ye) => ye - ps);
  for (let ps of pt) {
    while (pe >= ps - 1e-9) {
      pn.push(ps);
      pe = Math.round((pe - ps) * 2) / 2;
    }
  }
  if (pe >= 0.5) {
    pn.push(0.5);
  }
  return pn;
}
j(chipsFor, "chipsFor");
function fmtD(v) {
  v = Math.round((+v || 0) * 2) / 2;
  let OM = v < 0;
  v = Math.abs(v);
  let pe = Math.floor(v);
  return (OM ? "-" : "") + String(pe).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (v - pe ? ".5" : "");
}
j(fmtD, "fmtD");
function drawButton(v, d, OC, OK, OW = "off") {
  let pt = wA.buttons[d];
  if (!pt) {
    return;
  }
  let ye = bake(pt, 0, ws[OW] || ws.off, 1);
  if (ye) {
    noSmooth(v);
    v.drawImage(ye, Math.round(OC), Math.round(OK));
  }
}
j(drawButton, "drawButton");
const OR = {
  w: wf,
  h: wX
};
const Ow = {
  x: 320,
  feet: 162
};
const OO = {
  x: 320,
  y: 142,
  step: 16
};
const Oa = {
  cards: 228,
  tag: 286,
  circle: 314
};
const Oq = {
  x: 320,
  top: 330
};
const OS = {
  pays: 201,
  stands: 216
};
var OX = OR;
var Ou = 320;
var Oe = 240;
var On = 65;
var Ox = 160;
var Ot = 148;
var Os = 123;
var Oh = 8;
var Om = {
  far: On * 2,
  cx: Ox * 2,
  rx: Ot * 2,
  ry: Os * 2,
  rail: Oh * 2,
  rim: (On - 5) * 2,
  dealer: Ow,
  dealerCards: OO,
  shoe: {
    x: 410,
    y: 102
  },
  tray: {
    x: 184,
    y: 116
  },
  rack: {
    x: 256,
    y: 116,
    w: 128
  },
  rings: [{
    x: 246,
    y: 314
  }, {
    x: 320,
    y: 314
  }, {
    x: 394,
    y: 314
  }],
  ringR: 20,
  row: Oa,
  you: Oq,
  chairY: 376,
  wallet: {
    x: 364,
    y: 370
  },
  print: OS,
  emblem: {
    x: 320,
    y: 176
  },
  panel: 400
};
var OA = new Map();
var inFelt = j((v, d) => d >= On && ((v + 0.5 - Ox) / Ot) ** 2 + ((d + 0.5 - On) / Os) ** 2 <= 1, "inFelt");
var inOuter = j((v, d) => d >= On - 5 && ((v + 0.5 - Ox) / (Ot + Oh)) ** 2 + ((d + 0.5 - On) / (Os + Oh)) ** 2 <= 1, "inOuter");
var ditherOn = j((v, d, OC) => OC >= 4 || (OC === 3 ? !(v & 1) || !(d & 1) : OC === 2 ? (v + d & 1) === 0 : OC === 1 ? (v & 1) === 0 && (d & 1) === 0 : false), "ditherOn");
function tableBuffer(v) {
  let OC = new R8(Ou, Oe);
  let OK = dC[v] || dC.coin;
  for (let Hn = On; Hn < Oe; Hn++) {
    for (let Ht = 0; Ht < Ou; Ht++) {
      if (inOuter(Ht, Hn) || inOuter(Ht, Hn - 1)) {
        continue;
      }
      if ((inOuter(Ht, Hn - 3) || inOuter(Ht - 2, Hn - 2) || inOuter(Ht + 2, Hn - 2)) && (Ht + Hn & 1) === 0) {
        OC.set(Ht, Hn, "void");
      }
    }
  }
  for (let Hs = 0; Hs < Ou; Hs++) {
    let je = -1;
    for (let jn = Oe - 1; jn >= On; jn--) {
      if (inOuter(Hs, jn)) {
        je = jn;
        break;
      }
    }
    if (!(je < 0)) {
      OC.set(Hs, je + 1, "rail0");
      OC.set(Hs, je + 2, "void");
    }
  }
  for (let ls = On; ls < Oe; ls++) {
    for (let lV = 0; lV < Ou; lV++) {
      if (!inFelt(lV, ls)) {
        continue;
      }
      let lC = Math.hypot((lV + 0.5 - Ox) / Ot, (ls + 0.5 - On) / Os);
      let lK = (lV + 0.5 - Ox) / 118;
      let lW = (ls + 0.5 - On - 44) / 70;
      let lM = Math.hypot(lK, lW);
      let lL = OK[1];
      if (lM < 0.55) {
        lL = ditherOn(lV, ls, lM < 0.4 ? 4 : 2) ? OK[2] : OK[1];
      } else if (lM < 0.8) {
        lL = ditherOn(lV, ls, lM < 0.68 ? 2 : 1) ? OK[2] : OK[1];
      }
      if (lM < 0.3 && ditherOn(lV, ls, lM < 0.18 ? 2 : 1)) {
        lL = OK[3];
      }
      if (lC > 0.9) {
        lL = ditherOn(lV, ls, lC > 0.955 ? 4 : lC > 0.93 ? 3 : 2) ? OK[0] : lL;
      }
      if (ls < On + 3) {
        lL = ls === On || ditherOn(lV, ls, 2) ? OK[0] : lL;
      }
      OC.set(lV, ls, lL);
    }
  }
  for (let lD = On - 5; lD < Oe; lD++) {
    for (let lJ = 0; lJ < Ou; lJ++) {
      if (!inOuter(lJ, lD) || inFelt(lJ, lD)) {
        continue;
      }
      let lY = 1;
      if (lD >= On) {
        let T1 = Ox - lJ;
        let T2 = Math.max(On + 20, On + 60) - lD;
        let T3 = Math.hypot(T1, T2) || 1;
        for (lY = 1; lY <= 12 && !inFelt(Math.round(lJ + T1 / T3 * lY), Math.round(lD + T2 / T3 * lY)); lY++);
      } else {
        lY = On - lD;
      }
      let T0 = lY <= 1 ? "gold2" : lY === 2 ? "rail3" : lY <= 4 ? "rail2" : lY <= 6 ? "rail1" : "rail0";
      if (lD >= On && lY === 5 && (lJ * 3 + lD) % 9 === 0) {
        T0 = "rail3";
      }
      if (lD < On && lY === 5) {
        T0 = "rail0";
      }
      OC.set(lJ, lD, T0);
    }
  }
  for (let T4 = 0; T4 < Ou; T4++) {
    if (inOuter(T4, On - 5)) {
      OC.set(T4, On - 5, "rail3");
    }
  }
  let OM = Om.emblem.x / 2;
  let pe = Om.emblem.y / 2;
  for (let T5 = pe - 13; T5 <= pe + 13; T5++) {
    for (let T6 = OM - 24; T6 <= OM + 24; T6++) {
      let T7 = Math.abs(T6 + 0.5 - OM) / 24 + Math.abs(T5 + 0.5 - pe) / 13;
      if (T7 <= 1 && T7 > 0.92) {
        OC.set(T6, T5, "gold1");
      } else if (T7 <= 0.8 && T7 > 0.75) {
        OC.set(T6, T5, OK[3]);
      }
    }
  }
  const pn = {
    "#": "gold1"
  };
  ["heart", "spade", "diamond", "club"].forEach((T8, T9) => OC.stamp(Rt[T8], OM - 13 + T9 * 7, pe - 2, pn));
  let pt = Om.rack.x / 2;
  let ps = Om.rack.y / 2;
  let ye = Om.rack.w / 2;
  for (let T8 = ps; T8 < ps + 12; T8++) {
    for (let T9 = pt; T9 < pt + ye; T9++) {
      OC.set(T9, T8, "rail0");
    }
  }
  for (let Tv = pt; Tv < pt + ye; Tv++) {
    OC.set(Tv, ps, "gold1");
    OC.set(Tv, ps + 11, "gold2");
  }
  for (let Td = ps; Td < ps + 12; Td++) {
    OC.set(pt, Td, "gold1");
    OC.set(pt + ye - 1, Td, "gold1");
  }
  let ys = [500, 100, 25, 5, 1, 1, 5, 25, 100, 500];
  let He = Math.floor((ye - 4) / ys.length);
  ys.forEach((TR, Tp) => {
    let TH = w2[TR];
    let Tj = pt + 2 + Tp * He;
    for (let TT = ps + 2; TT < ps + 10; TT++) {
      for (let TN = Tj; TN < Tj + He - 1; TN++) {
        OC.set(TN, TT, TT & 1 ? TH.d : TN === Tj + 1 ? TH.l : TH.c);
      }
    }
  });
  return OC;
}
j(tableBuffer, "tableBuffer");
function tableCanvas(v, d) {
  let OK = "T" + v + "|" + (d ? 1 : 0);
  if (OA.has(OK)) {
    return OA.get(OK);
  }
  let pe = tableBuffer(v).toCanvas(d ? dV : di, 1);
  OA.set(OK, pe);
  return pe;
}
j(tableCanvas, "tableCanvas");
function drawFelt(v, d, OC, {
  dim: OK = false
} = {}) {
  let pe = tableCanvas(d || "coin", OK);
  if (pe) {
    noSmooth(v);
    v.drawImage(pe, 0, 0, Ou * 2, Oe * 2);
    drawProp(v, "tray", Om.tray.x, Om.tray.y, 0, {
      dim: OK
    });
    drawProp(v, "shoe", Om.shoe.x, Om.shoe.y, 0, {
      dim: OK
    });
  }
}
j(drawFelt, "drawFelt");
function drawRoom(v, d, OC, OK, {
  calm: OW = false
} = {}) {
  for (let [ye, yn, yt] of [[60, 280, 0.035], [44, 210, 0.035], [30, 150, 0.04]]) {
    v.fillStyle = "rgba(200,170,255," + yt + ")";
    v.beginPath();
    v.moveTo(320 - ye, 0);
    v.lineTo(320 + ye, 0);
    v.lineTo(320 + yn, Om.far);
    v.lineTo(320 - yn, Om.far);
    v.closePath();
    v.fill();
  }
}
j(drawRoom, "drawRoom");
function drawProp(v, d, OC, OK, OW = 0, {
  scale: OM = 2,
  dim: pe = false
} = {}) {
  let ps = wS[d];
  if (!ps) {
    return;
  }
  let yn = bake(ps, OW, pe ? dV : di, 1);
  if (yn) {
    noSmooth(v);
    v.drawImage(yn, Math.round(OC), Math.round(OK), yn.width * OM, yn.height * OM);
  }
}
j(drawProp, "drawProp");
function drawMicro(v, d, OC, OK, OW, OM = 2) {
  let pt = Math.round(OC);
  OK = Math.round(OK);
  v.fillStyle = OW;
  for (let yn of String(d)) {
    if (yn === " ") {
      pt += OM * 2;
      continue;
    }
    let He = Ry[yn];
    if (!He) {
      pt += OM * 4;
      continue;
    }
    for (let je = 0; je < 5; je++) {
      for (let jn = 0; jn < He[je].length; jn++) {
        if (He[je][jn] === "#") {
          v.fillRect(pt + jn * OM, OK + je * OM, OM, OM);
        }
      }
    }
    pt += (He[0].length + 1) * OM;
  }
  return pt - Math.round(OC);
}
j(drawMicro, "drawMicro");
var microWidth = j((v, d = 2) => microW(v) * d, "microWidth");
function selfTest() {
  const OW = {
    ok: false
  };
  OW.checks = [];
  OW.results = [];
  OW.reason = "not in the production build";
  return OW;
}
j(selfTest, "selfTest");
function roomBuffer(v) {
  return tableBuffer(v);
}
j(roomBuffer, "roomBuffer");
const OI = {
  faceBuffer: faceBuffer,
  backBuffer: backBuffer,
  ticketBuffer: ticketBuffer,
  roomBuffer: roomBuffer,
  tableBuffer: tableBuffer,
  buttonBuffer: buttonBuffer,
  PB: R8
};
var OV = OI;
export { vq as a, ve as b, vn as c, vs as d, vm as e, vA as f, vB as g, vg as h, roomById as i, hashSeed as j, rng as k, isTen as l, hiLo as m, handValue as n, basicStrategy as o, legalActions as p, dq as q, newProfile as r, loadProfile as s, saveProfile as t, newVisit as u, tableSeed as v, reputation as w, onRoundEnd as x, beatDue as y, playBeat as z, needsBailout as A, bailout as B, secretCheck as C, di as D, dI as E, dV as F, dC as G, dK as H, dW as I, dM as J, setCanvasFactory as K, frameRows as L, bake as M, Rn as N, Rc as O, Ri as P, flawOf as Q, we as R, wh as S, wA as T, wU as U, deckFor as V, deckPath as W, setDeck as X, preloadDecks as Y, deckReady as Z, deckSettled as _, currentDeck as $, setDeckImage as aa, drawCard as ba, drawChip as ca, drawStack as da, stackHeight as ea, chipsFor as fa, fmtD as ga, drawButton as ha, OX as ia, Om as ja, drawFelt as ka, drawRoom as la, drawProp as ma, drawMicro as na, microWidth as oa, selfTest as pa, OV as qa };
