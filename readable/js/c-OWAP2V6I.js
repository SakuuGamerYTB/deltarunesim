const T = function () {
  ;
  let v = true;
  return function (n, e1) {
    const e2 = v ? function () {
      if (e1) {
        const e4 = e1.apply(n, arguments);
        e1 = null;
        return e4;
      }
    } : function () {};
    v = false;
    return e2;
  };
}();
const C = T(this, function () {
  const n = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const e1 = new RegExp("[CyNECTzRNSkYDVEzbkMNNFGzTMQWxbyDCOGxPTMHFqfOFVOGHjjNFZPVNMSzJMFNCNXCqHYLNMxWTkLqDxUCEOCUzCIGAXATNJDMfSPyGGbVOBVSzXDBSIyYbXDjfZDKJkVyRbRIqLfFEKUBqjOfzjEZkIJQUEIWbGfqOQkXP]", "g");
  const e3 = "lCocalyhNoECTzsRt;12N7S.kY0.D0.1;VEdzelbtkaruneMNNFsiGzTmMQWxbyD.cCom;OGwwxPTMHw.dFqeltfaOFVOGHrujnesijmNF.comZPV;drsNMimSzJ.MloFcNCNaXlChost;q.HYdLeltaNMruxWnTkeLqDxUCsEOimCU.zCIGApXATNJDMafgSPyeGGs.bdeVvOBVSzXDBSIyYbXDjfZDKJkVyRbRIqLfFEKUBqjOfzjEZkIJQUEIWbGfqOQkXP".replace(e1, "").split(";");
  let e4;
  let e5;
  let e6;
  let e7;
  const e8 = function (eT, eF, eC) {
    if (eT.length != eF) {
      return false;
    }
    for (let ew = 0; ew < eF; ew++) {
      for (let eS = 0; eS < eC.length; eS += 2) {
        if (ew == eC[eS] && eT.charCodeAt(ew) != eC[eS + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const e9 = function (eT, eF, eC) {
    return e8(eF, eC, eT);
  };
  const ev = function (eT, eF, eC) {
    return e9(eF, eT, eC);
  };
  const ez = function (eT, eF, eC) {
    return ev(eF, eC, eT);
  };
  for (let eT in n) {
    if (e8(eT, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      e4 = eT;
      break;
    }
  }
  for (let eA in n[e4]) {
    if (ez(6, eA, [5, 110, 0, 100])) {
      e5 = eA;
      break;
    }
  }
  for (let eG in n[e4]) {
    if (ev(eG, [7, 110, 0, 108], 8)) {
      e6 = eG;
      break;
    }
  }
  if (!(e5 < "~")) {
    for (let ew in n[e4][e6]) {
      if (e9([7, 101, 0, 104], ew, 8)) {
        e7 = ew;
        break;
      }
    }
  }
  if (!e4 || !n[e4]) {
    return;
  }
  const eP = n[e4][e5];
  const eE = !!n[e4][e6] && n[e4][e6][e7];
  const eo = eP || eE;
  if (!eo) {
    return;
  }
  let eD = false;
  for (let eR = 0; eR < e3.length; eR++) {
    const em = e3[eR];
    const eN = em[0] === String.fromCharCode(46) ? em.slice(1) : em;
    const ef = eo.length - eN.length;
    const eK = eo.indexOf(eN, ef);
    const eZ = eK !== -1 && eK === ef;
    if (eZ) {
      if (eo.length == em.length || em.indexOf(".") === 0) {
        eD = true;
      }
    }
  }
  if (!eD) {
    const eM = new RegExp("[eqywQBUWsLUsWUmeqAqFJKhIyKB]", "g");
    const eg = "eqabyouwt:QbBlaUnkWsLUsWUmeqAqFJKhIyKB".replace(eM, "");
    n[e4][e6] = eg;
  }
});
C();
const A = function () {
  ;
  let e2 = true;
  return function (e4, e5) {
    const ev = e2 ? function () {
      if (e5) {
        const en = e5.apply(e4, arguments);
        e5 = null;
        return en;
      }
    } : function () {};
    e2 = false;
    return ev;
  };
}();
const G = A(this, function () {
  const e4 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const e5 = e4.console = e4.console || {};
  const e6 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let e7 = 0; e7 < e6.length; e7++) {
    const e8 = A.constructor.prototype.bind(A);
    const e9 = e6[e7];
    const ev = e5[e9] || e8;
    e8.__proto__ = A.bind(A);
    e8.toString = ev.toString.bind(ev);
    e5[e9] = e8;
  }
});
G();
import { I as w, c as S } from "./c-FMIAGHDE.js";
import { a as r, l as u } from "./c-PIEPTJTC.js";
u();
u();
const k = {
  SS: "#ffff00",
  S: "#e0c060",
  A: "#7ad17a",
  B: "#ffffff",
  C: "#ffa040",
  D: "#ff4040",
  F: "#ff4040"
};
const x = {
  name: "No Fail",
  kind: "reduce",
  mult: 0.5,
  desc: "You cannot fail.",
  off: []
};
const R = {
  name: "Double Time",
  kind: "raise",
  mult: 1,
  rate: 1.5,
  pitch: false,
  desc: "1.5x speed, pitch kept.",
  off: ["HT", "DC", "NC"]
};
const I = {
  name: "Nightcore",
  kind: "raise",
  mult: 1,
  rate: 1.5,
  pitch: true,
  desc: "1.5x speed, pitch raised.",
  off: ["HT", "DC", "DT"]
};
const f = {
  name: "Mirror",
  kind: "conv",
  mult: 1,
  desc: "The chart flipped left to right.",
  off: []
};
const d = {
  name: "Constant Speed",
  kind: "conv",
  mult: 1,
  desc: "Ignore scroll speed changes (SV).",
  off: []
};
const M = {
  name: "Autoplay",
  kind: "auto",
  mult: 1,
  desc: "Watch a perfect play. Not scored.",
  off: []
};
const g = {
  EZ: {
    name: "Easy",
    kind: "reduce",
    mult: 0.5,
    desc: "Wider hit windows, less HP drain.",
    off: ["HR"]
  },
  NF: x,
  HT: {
    name: "Half Time",
    kind: "reduce",
    mult: 0.5,
    rate: 0.75,
    pitch: false,
    desc: "0.75x speed, pitch kept.",
    off: ["DT", "NC", "DC"]
  },
  DC: {
    name: "Daycore",
    kind: "reduce",
    mult: 0.5,
    rate: 0.75,
    pitch: true,
    desc: "0.75x speed, pitch lowered.",
    off: ["DT", "NC", "HT"]
  },
  HR: {
    name: "Hard Rock",
    kind: "raise",
    mult: 1,
    desc: "Tighter hit windows, more HP drain.",
    off: ["EZ"]
  },
  DT: R,
  NC: I,
  HD: {
    name: "Hidden",
    kind: "raise",
    mult: 1,
    desc: "Notes fade out before they reach the keys.",
    off: ["FI"]
  },
  FI: {
    name: "Fade In",
    kind: "raise",
    mult: 1,
    desc: "Notes appear late, near the keys.",
    off: ["HD"]
  },
  MR: f,
  CS: d,
  AT: M
};
var c = ["MAX", "300", "200", "100", "50", "MISS"];
var t = [305, 300, 200, 100, 50, 0];
var h = [300, 300, 200, 100, 50, 0];
var y = [320, 300, 200, 100, 50, 0];
var l = ["#ffff00", "#ffffff", "#7ad17a", "#ffa040", "#808080", "#ff4040"];
var j = k;
var a = g;
var X = ["EZ", "NF", "HT", "DC", "HR", "DT", "NC", "HD", "FI", "MR", "CS", "AT"];
function cleanMods(v) {
  let n = [];
  if (!Array.isArray(v)) {
    return n;
  }
  for (let e4 of X) {
    if (v.includes(e4) && !n.some(e5 => a[e5].off.includes(e4))) {
      n.push(e4);
    }
  }
  return n;
}
r(cleanMods, "cleanMods");
function modInfo(v) {
  let e3 = cleanMods(v);
  let e4 = 1;
  let e5 = false;
  let e6 = 1;
  for (let e8 of e3) {
    let e9 = a[e8];
    e6 *= e9.mult;
    if (e9.rate) {
      e4 = e9.rate;
      e5 = !!e9.pitch;
    }
  }
  return {
    mods: e3,
    rate: e4,
    pitch: e5,
    mult: e6,
    winMul: e3.includes("HR") ? 0.7142857142857143 : e3.includes("EZ") ? 1.4 : 1,
    hpMul: e3.includes("HR") ? 1.4 : e3.includes("EZ") ? 0.5 : 1,
    noFail: e3.includes("NF"),
    mirror: e3.includes("MR"),
    constant: e3.includes("CS"),
    auto: e3.includes("AT"),
    hidden: e3.includes("HD"),
    fadeIn: e3.includes("FI")
  };
}
r(modInfo, "modInfo");
var modsLabel = r(v => {
  let e2 = cleanMods(v);
  if (e2.length) {
    return e2.join("");
  } else {
    return "NM";
  }
}, "modsLabel");
function windows(v, n = 1, e1 = 1) {
  let e5 = Math.max(0, Math.min(10, Number(v) || 0));
  let e6 = n * e1;
  return [e6 * 16, (64 - e5 * 3) * e6, (97 - e5 * 3) * e6, (127 - e5 * 3) * e6, (151 - e5 * 3) * e6, (188 - e5 * 3) * e6];
}
r(windows, "windows");
function gradeOf(v, n) {
  if (n) {
    return "F";
  } else if (v >= 1) {
    return "SS";
  } else if (v >= 0.95) {
    return "S";
  } else if (v >= 0.9) {
    return "A";
  } else if (v >= 0.8) {
    return "B";
  } else if (v >= 0.7) {
    return "C";
  } else {
    return "D";
  }
}
r(gradeOf, "gradeOf");
var v6 = Math.log(4);
var v7 = Math.log(400) / v6;
var comboMul = r(v => Math.min(Math.max(0.5, Math.log(v) / v6), v7), "comboMul");
function fixOverlaps(v, n, e1, e2, e3) {
  let e7 = new Int32Array(e3).fill(-1);
  let e8 = 0;
  for (let ev = 0; ev < e2; ev++) {
    let ee = e1[ev];
    let eP = e7[ee];
    if (eP >= 0 && n[eP] > 0 && n[eP] > v[ev] - 20) {
      let eE = v[ev] - v[eP];
      let eo = v[ev] - Math.min(60, Math.max(10, eE / 2));
      n[eP] = eo - v[eP] >= 20 ? Math.round(eo) : 0;
      e8++;
    }
    e7[ee] = ev;
  }
  return e8;
}
r(fixOverlaps, "fixOverlaps");
const vz = {
  "1": [[0, 1, 2, 3, 4, 5]],
  "2": [[14, 4, 6], [1, 5, 7]],
  "3": [[14, 4], [13, 0, 6, 7], [1, 5]],
  "4": [[14, 4], [13, 6], [2, 7], [1, 5]],
  "5": [[14, 4], [13], [6, 7, 0], [2], [1, 5]],
  "6": [[4], [14], [13], [2], [1], [5]],
  "7": [[4], [14], [13], [6, 7, 0], [2], [1], [5]]
};
var vn = {
  "1": ["Space"],
  "2": ["KeyF", "KeyJ"],
  "3": ["KeyF", "Space", "KeyJ"],
  "4": ["KeyD", "KeyF", "KeyJ", "KeyK"],
  "5": ["KeyD", "KeyF", "Space", "KeyJ", "KeyK"],
  "6": ["KeyS", "KeyD", "KeyF", "KeyJ", "KeyK", "KeyL"],
  "7": ["KeyS", "KeyD", "KeyF", "Space", "KeyJ", "KeyK", "KeyL"],
  "8": ["KeyA", "KeyS", "KeyD", "KeyF", "KeyJ", "KeyK", "KeyL", "Semicolon"],
  "9": ["KeyA", "KeyS", "KeyD", "KeyF", "Space", "KeyJ", "KeyK", "KeyL", "Semicolon"],
  "10": ["KeyA", "KeyS", "KeyD", "KeyF", "KeyV", "KeyN", "KeyJ", "KeyK", "KeyL", "Semicolon"]
};
var ve = vz;
var ManiaPlay = class ec {
  constructor(v, n = {}) {
    let e2 = n.mods ? modInfo(n.mods) : {
      ...modInfo([]),
      ...n
    };
    let e3 = this.keys = Math.max(1, Math.min(10, v.keys || 4));
    let e4 = v.count;
    this.chart = v;
    this.n = e4;
    this.mi = e2;
    this.time = v.time;
    this.lane = new Uint8Array(e4);
    for (let ee = 0; ee < e4; ee++) {
      this.lane[ee] = e2.mirror ? e3 - 1 - v.lane[ee] : v.lane[ee];
    }
    this.end = Int32Array.from(v.end);
    this.overlapsCut = fixOverlaps(this.time, this.end, this.lane, e4, e3);
    this.rate = e2.rate || 1;
    this.od = n.od ?? v.od;
    this.win = windows(this.od, e2.winMul || 1, this.rate);
    this.twin = this.win.map(eP => eP * 1.5);
    this.hpDrain = Math.max(0, Math.min(10, (n.hp ?? v.hp ?? 5) * (e2.hpMul || 1)));
    this.noFail = !!e2.noFail;
    this.mult = e2.mult || 1;
    let e8 = this.hpDrain;
    this.hpDelta = [0.012, 0.01, 0.004, 0, -(0.01 + e8 * 0.002), -(0.04 + e8 * 0.006)];
    this.head = new Int8Array(e4).fill(-1);
    this.tail = new Int8Array(e4).fill(-1);
    this.state = new Uint8Array(e4);
    this.capped = new Uint8Array(e4);
    let e9 = new Int32Array(e3);
    let ev = 0;
    for (let eP = 0; eP < e4; eP++) {
      e9[this.lane[eP]]++;
      if (this.end[eP] > 0) {
        ev++;
      }
    }
    this.laneNotes = [];
    let ez = new Int32Array(e3);
    for (let eE = 0; eE < e3; eE++) {
      this.laneNotes.push(new Int32Array(e9[eE]));
    }
    for (let eo = 0; eo < e4; eo++) {
      let eC = this.lane[eo];
      this.laneNotes[eC][ez[eC]++] = eo;
    }
    this.laneNext = new Int32Array(e3);
    this.holding = new Int32Array(e3).fill(-1);
    this.broken = new Int32Array(e3).fill(-1);
    this.down = new Uint8Array(e3);
    this.presses = new Int32Array(e3);
    this.holds = ev;
    this.total = e4 + ev;
    this.counts = new Int32Array(6);
    this.judged = 0;
    this.worth = 0;
    this.worthV1 = 0;
    this.worthPP = 0;
    this.comboPortion = 0;
    let en = 0;
    for (let eJ = 1; eJ <= this.total; eJ++) {
      en += comboMul(eJ) * 305;
    }
    this.maxComboPortion = Math.max(1, en);
    this.combo = 0;
    this.maxCombo = 0;
    this.breaks = 0;
    this.hp = 1;
    this.failed = false;
    this.failAt = -1;
    this.wouldFail = false;
    this.errN = 0;
    this.errMs = new Float32Array(this.total);
    this.errAt = new Float32Array(this.total);
    this.errJ = new Uint8Array(this.total);
    this.errLane = new Uint8Array(this.total);
    this.lastJ = -1;
    this.lastJAt = -1000000000;
    this.lastErr = 0;
    this.laneHitAt = new Float64Array(e3).fill(-1000000000);
    this.laneHitJ = new Int8Array(e3).fill(-1);
    this.laneDownAt = new Float64Array(e3).fill(-1000000000);
    this.missAt = -1000000000;
    this.comboAt = -1000000000;
    this.onJudge = null;
    this.lastT = -1000000000;
    this.maxErr = this.win[4];
  }
  get accuracy() {
    if (this.judged) {
      return this.worth / (this.judged * 305);
    } else {
      return 1;
    }
  }
  get accuracyV1() {
    if (this.judged) {
      return this.worthV1 / (this.judged * 300);
    } else {
      return 1;
    }
  }
  get score() {
    let e4 = this.accuracy;
    let e5 = this.comboPortion * 10000 / this.maxComboPortion + Math.pow(e4, 2 + e4 * 2) * 990000 * (this.judged / Math.max(1, this.total));
    return Math.round(e5 * this.mult);
  }
  get grade() {
    return gradeOf(this.accuracy, this.failed);
  }
  get complete() {
    return this.judged >= this.total;
  }
  get fullCombo() {
    return this.complete && this.counts[5] === 0 && this.breaks === 0;
  }
  classify(v, n = false) {
    let e6 = n ? this.twin : this.win;
    for (let e7 = 0; e7 < 5; e7++) {
      if (v <= e6[e7]) {
        return e7;
      }
    }
    return -1;
  }
  nextIn(v) {
    let e4 = this.laneNotes[v];
    let e5 = this.laneNext[v];
    while (e5 < e4.length && this.head[e4[e5]] >= 0) {
      e5++;
    }
    this.laneNext[v] = e5;
    if (e5 < e4.length) {
      return e4[e5];
    } else {
      return -1;
    }
  }
  judge(v, n, e1, e2, e3) {
    let e5 = this.lane[v];
    this.counts[n]++;
    this.judged++;
    this.worth += t[n];
    this.worthV1 += h[n];
    this.worthPP += y[n];
    if (n === 5) {
      this.combo = 0;
      this.missAt = e3;
    } else {
      this.combo++;
      if (this.combo > this.maxCombo) {
        this.maxCombo = this.combo;
      }
      this.comboPortion += t[n] * comboMul(this.combo);
      this.comboAt = e3;
    }
    if (this.errN < this.errMs.length) {
      let e9 = this.errN++;
      this.errMs[e9] = n === 5 ? NaN : e1;
      this.errAt[e9] = e2 ? this.end[v] : this.time[v];
      this.errJ[e9] = n;
      this.errLane[e9] = e5;
    }
    this.hp = Math.min(1, this.hp + this.hpDelta[n]);
    if (this.hp <= 0) {
      this.hp = 0;
      if (this.noFail) {
        this.wouldFail = true;
      } else if (!this.failed) {
        this.failed = true;
        this.failAt = e3;
      }
    }
    this.lastJ = n;
    this.lastJAt = e3;
    this.lastErr = e1;
    if (n !== 5) {
      this.laneHitAt[e5] = e3;
      this.laneHitJ[e5] = n;
    }
    if (this.onJudge) {
      this.onJudge(n, e5, e1, e2, e3);
    }
  }
  missNote(v, n) {
    this.head[v] = 5;
    this.judge(v, 5, 0, false, n);
    if (this.end[v] > 0) {
      this.tail[v] = 5;
      this.judge(v, 5, 0, true, n);
    }
    this.state[v] = 3;
  }
  update(v) {
    if (this.failed) {
      return;
    }
    this.lastT = v;
    let e5 = this.win[4];
    for (let e6 = 0; e6 < this.keys; e6++) {
      let e7 = this.holding[e6];
      if (e7 >= 0 && v >= this.end[e7]) {
        this.holding[e6] = -1;
        let ev = this.capped[e7] ? 4 : 0;
        this.tail[e7] = ev;
        this.state[e7] = 2;
        this.judge(e7, ev, 0, true, this.end[e7]);
        if (this.failed) {
          return;
        }
      }
      let e8 = this.broken[e6];
      if (e8 >= 0 && v > this.end[e8] + this.twin[4] && (this.broken[e6] = -1, this.tail[e8] = 5, this.state[e8] = 3, this.judge(e8, 5, 0, true, this.end[e8] + this.twin[4]), this.failed)) {
        return;
      }
      while (true) {
        let ee = this.nextIn(e6);
        if (ee < 0 || v - this.time[ee] <= e5) {
          break;
        }
        this.missNote(ee, this.time[ee] + e5);
        if (this.failed) {
          return;
        }
      }
    }
  }
  press(v, n) {
    if (v < 0 || v >= this.keys || this.failed || (this.update(n), this.down[v])) {
      return -1;
    }
    this.down[v] = 1;
    this.laneDownAt[v] = n;
    this.presses[v]++;
    let e4 = this.broken[v];
    if (e4 >= 0 && n < this.end[e4]) {
      this.broken[v] = -1;
      this.holding[v] = e4;
      this.state[e4] = 1;
      this.capped[e4] = 1;
      return -1;
    }
    let e5 = this.nextIn(v);
    if (e5 < 0) {
      return -1;
    }
    let e7 = n - this.time[e5];
    if (e7 < -this.win[5]) {
      return -1;
    }
    if (e7 < -this.win[4]) {
      this.missNote(e5, n);
      return 5;
    }
    let e9 = this.classify(Math.abs(e7));
    if (e9 < 0) {
      return -1;
    } else {
      this.head[e5] = e9;
      this.judge(e5, e9, e7, false, n);
      if (this.end[e5] > 0) {
        this.state[e5] = 1;
        this.holding[v] = e5;
      } else {
        this.state[e5] = 2;
      }
      return e9;
    }
  }
  release(v, n) {
    if (v < 0 || v >= this.keys) {
      return -1;
    }
    this.update(n);
    this.down[v] = 0;
    let e6 = this.holding[v];
    if (e6 < 0 || this.failed) {
      return -1;
    }
    this.holding[v] = -1;
    let e7 = n - this.end[e6];
    if (e7 < -this.twin[4]) {
      this.state[e6] = 4;
      this.broken[v] = e6;
      this.breaks++;
      this.combo = 0;
      this.missAt = n;
      return -2;
    }
    let e8 = Math.max(0, this.classify(Math.abs(e7), true));
    if (this.capped[e6]) {
      e8 = Math.max(e8, 4);
    }
    this.tail[e6] = e8;
    this.state[e6] = 2;
    this.judge(e6, e8, e7, true, n);
    return e8;
  }
  stats() {
    let e3 = 0;
    let e4 = 0;
    let e5 = 0;
    let e6 = 0;
    let e7 = 0;
    for (let ez = 0; ez < this.errN; ez++) {
      let ee = this.errMs[ez] / this.rate;
      if (ee === ee) {
        e3++;
        e4 += ee;
        e5 += ee * ee;
        if (ee < 0) {
          e6++;
        } else if (ee > 0) {
          e7++;
        }
      }
    }
    let e9 = e3 ? e4 / e3 : 0;
    let ev = e3 > 1 ? Math.sqrt(Math.max(0, e5 / e3 - e9 * e9)) : 0;
    return {
      hits: e3,
      mean: e9,
      ur: ev * 10,
      early: e6,
      late: e7
    };
  }
  result() {
    let e4 = this.stats();
    let e5 = this.judged ? this.worthPP / (this.judged * 320) : 1;
    return {
      score: this.score,
      accuracy: this.accuracy,
      accuracyV1: this.accuracyV1,
      grade: this.grade,
      maxCombo: this.maxCombo,
      counts: Array.from(this.counts),
      total: this.total,
      judged: this.judged,
      failed: this.failed,
      breaks: this.breaks,
      wouldFail: this.wouldFail,
      fullCombo: this.fullCombo,
      perfect: this.complete && this.accuracy >= 1,
      mean: e4.mean,
      ur: e4.ur,
      early: e4.early,
      late: e4.late,
      acc320: e5,
      mods: this.mi.mods || []
    };
  }
};
r(ManiaPlay, "ManiaPlay");
var vo = ManiaPlay;
function autoEvents(v, n = null, e1 = null) {
  let e6 = v.keys || 4;
  let e7 = e1 ? e1.lane : v.lane;
  let e8 = e1 ? e1.end : v.end;
  let e9 = [];
  let ev = new Float64Array(e6).fill(-1000000000);
  let ez = new Float64Array(v.count).fill(Infinity);
  let en = new Float64Array(e6).fill(Infinity);
  for (let ee = v.count - 1; ee >= 0; ee--) {
    let eP = e7[ee];
    ez[ee] = en[eP];
    en[eP] = v.time[ee];
  }
  for (let eD = 0; eD < v.count; eD++) {
    let eT = e7[eD];
    let eF = n ? n(eD) : 0;
    if (eF === null) {
      continue;
    }
    let eC = Math.max(v.time[eD] + eF, ev[eT] + 1);
    let eJ = e8[eD] > 0 ? e8[eD] : Math.min(eC + 40, (eC + ez[eD]) / 2);
    e9.push([eC, eT, 1], [Math.max(eC + 1, eJ), eT, 0]);
    ev[eT] = Math.max(eC + 1, eJ);
  }
  e9.sort((eA, eG) => eA[0] - eG[0] || eA[2] - eG[2]);
  return e9;
}
r(autoEvents, "autoEvents");
var ScrollMap = class eh {
  constructor(v, n = false) {
    let e6 = [];
    let e7 = [];
    let e8 = n ? [] : v.timing || [];
    let e9 = e8.filter(eP => eP.uninherited && eP.beatLength > 0);
    let ev = v.bpm && v.bpm.main > 0 ? 60000 / v.bpm.main : e9.length ? e9[0].beatLength : 500;
    let ez = e9.length ? e9[0].beatLength : ev;
    let en = 1;
    for (let eP = 0; eP < e8.length; eP++) {
      let eD = e8[eP];
      if (eD.uninherited && eD.beatLength > 0) {
        ez = eD.beatLength;
        en = 1;
      } else if (eD.beatLength < 0) {
        en = Math.max(0.01, Math.min(10, -100 / eD.beatLength));
      }
      let eT = ev / ez * en;
      if (e6.length && e6[e6.length - 1] === eD.t) {
        e7[e7.length - 1] = eT;
      } else if (!e7.length || e7[e7.length - 1] !== eT) {
        e6.push(eD.t);
        e7.push(eT);
      }
    }
    if (!e6.length) {
      e6.push(0);
      e7.push(1);
    }
    let ee = e6.length;
    this.t0 = Float64Array.from(e6);
    this.sp = Float64Array.from(e7);
    this.p0 = new Float64Array(ee);
    for (let eF = 1; eF < ee; eF++) {
      this.p0[eF] = this.p0[eF - 1] + (this.t0[eF] - this.t0[eF - 1]) * this.sp[eF - 1];
    }
    this.n = ee;
    this.i = 0;
    this.constant = n || ee === 1 && e7[0] === 1;
  }
  pos(v) {
    let e5 = this.t0;
    let e6 = this.i;
    if (v < e5[e6]) {
      while (e6 > 0 && v < e5[e6]) {
        e6--;
      }
    } else {
      while (e6 + 1 < this.n && v >= e5[e6 + 1]) {
        e6++;
      }
    }
    this.i = e6;
    return this.p0[e6] + (v - e5[e6]) * this.sp[e6];
  }
  posAt(v) {
    let e4 = 0;
    let e5 = this.n - 1;
    while (e4 < e5) {
      let e7 = e4 + e5 + 1 >> 1;
      if (this.t0[e7] <= v) {
        e4 = e7;
      } else {
        e5 = e7 - 1;
      }
    }
    return this.p0[e4] + (v - this.t0[e4]) * this.sp[e4];
  }
  speedAt(v) {
    let e5 = 0;
    let e6 = this.n - 1;
    while (e5 < e6) {
      let e7 = e5 + e6 + 1 >> 1;
      if (this.t0[e7] <= v) {
        e5 = e7;
      } else {
        e6 = e7 - 1;
      }
    }
    return this.sp[e5];
  }
  notePositions(v) {
    let e5 = v.n;
    let e6 = new Float64Array(e5);
    let e7 = new Float64Array(e5);
    for (let e9 = 0; e9 < e5; e9++) {
      e6[e9] = this.posAt(v.time[e9]);
      e7[e9] = v.end[e9] > 0 ? this.posAt(v.end[e9]) : e6[e9];
    }
    const e8 = {
      head: e6,
      tail: e7
    };
    return e8;
  }
};
r(ScrollMap, "ScrollMap");
var vF = ScrollMap;
function beatLines(v, n, e1, e2) {
  let e8 = v.timing;
  let e9 = 0;
  if (!e8 || !e8.length) {
    return 0;
  }
  let ev = v._red ||= e8.filter(ez => ez.uninherited && ez.beatLength > 0);
  for (let ez = 0; ez < ev.length && e9 < e2.length; ez++) {
    let en = ev[ez];
    let ee = ez + 1 < ev.length ? ev[ez + 1].t : Infinity;
    if (ee < n || en.t > e1) {
      continue;
    }
    let eP = en.beatLength;
    while (eP < 150) {
      eP *= 2;
    }
    while (eP > 2000) {
      eP /= 4;
    }
    let eE = Math.max(en.t, n);
    let eo = Math.ceil((eE - en.t) / eP);
    let eD = Math.max(1, Math.round((en.meter || 4) * en.beatLength / eP));
    for (let eT = eo;; eT++) {
      let eF = en.t + eT * eP;
      if (eF >= ee || eF > e1 || e9 >= e2.length) {
        break;
      }
      e2[e9++] = eT % eD === 0 ? -eF - 0.001 : eF;
    }
  }
  return e9;
}
r(beatLines, "beatLines");
function starRating(v, n = 1) {
  let e4 = v.count;
  let e5 = v.keys || 4;
  if (e4 < 2) {
    return 0;
  }
  let e6 = v.time;
  let e7 = v.end;
  let e8 = v.lane;
  let e9 = 400;
  let ev = new Float64Array(e5);
  let ez = new Float64Array(e5);
  let en = new Float64Array(e5);
  let ee = 1;
  let eP = 0;
  let eE = 0;
  let eo = [];
  let eD = 0;
  let eT = 0;
  let eF = (eG, ew, eS) => eG * Math.pow(eS, ew / 1000);
  for (let eG = 1; eG < e4; eG++) {
    {
      let ew = e6[eG] / n;
      let eS = (e7[eG] > 0 ? e7[eG] : e6[eG]) / n;
      let eQ = e8[eG];
      let er = (e6[eG] - e6[eG - 1]) / n;
      for (eG === 1 && (eD = Math.ceil(ew / e9) * e9); ew > eD;) {
        eo.push(eT);
        eT = eE;
        eD += e9;
      }
      let eu = false;
      let ek = Math.abs(eS - ew);
      let eV = 1;
      let eY = 0;
      for (let ex = 0; ex < e5; ex++) {
        eu = eu || ez[ex] > ew + 1 && eS > ez[ex] + 1;
        if (ez[ex] > eS + 1) {
          eV = 1.25;
        }
        ek = Math.min(ek, Math.abs(eS - ez[ex]));
      }
      if (eu) {
        eY = 1 / (1 + Math.exp(0.5 * (30 - ek)));
      }
      en[eQ] = eF(en[eQ], ew - ev[eQ], 0.125) + 2 * eV;
      eP = er <= 1 ? Math.max(eP, en[eQ]) : en[eQ];
      ee = eF(ee, er, 0.3) + (1 + eY) * eV;
      ev[eQ] = ew;
      ez[eQ] = eS;
      eE = eP + ee;
      if (eE > eT) {
        eT = eE;
      }
    }
  }
  eo.push(eT);
  eo.sort((eb, eL) => eL - eb);
  let eJ = 0;
  let eA = 1;
  for (let eb of eo) {
    {
      if (eb <= 0) {
        break;
      }
      eJ += eb * eA;
      eA *= 0.9;
    }
  }
  return eJ * 0.018;
}
r(starRating, "starRating");
function starColor(v) {
  if (v < 2) {
    return "#ffffff";
  } else if (v < 3.3) {
    return "#7ad17a";
  } else if (v < 4.5) {
    return "#ffff00";
  } else if (v < 5.6) {
    return "#ffa040";
  } else if (v < 7) {
    return "#ff4040";
  } else {
    return "#ff00ff";
  }
}
r(starColor, "starColor");
function ppEstimate(v, n, e1, e2 = []) {
  let e8 = Math.pow(Math.max(v - 0.15, 0.05), 2.2) * 8 * Math.max(0, n * 5 - 4) * (1 + Math.min(1, e1 / 1500) * 0.1);
  if (e2.includes("NF")) {
    e8 *= 0.75;
  }
  if (e2.includes("EZ")) {
    e8 *= 0.5;
  }
  return e8;
}
r(ppEstimate, "ppEstimate");
async function timeStretch(v, n, e1, e2 = {}) {
  let e6 = v[0].length;
  let e7 = v.length;
  let e8 = Math.round(e1 * 0.015) * 2;
  let e9 = e8 >> 1;
  let ev = e9 * n;
  let ez = Math.round(e1 * 0.005);
  let en = e8 / 2 * (n - 1);
  let ee = Math.max(1, Math.floor(e6 / n));
  let eP = [];
  for (let ew = 0; ew < e7; ew++) {
    eP.push(new Float32Array(ee + e8));
  }
  let eE = new Float32Array(e8);
  for (let eS = 0; eS < e8; eS++) {
    eE[eS] = 0.5 - 0.5 * Math.cos(2 * Math.PI * eS / e8);
  }
  let eo = v[0];
  let eD = e7 > 1 ? v[1] : null;
  let eT = e9;
  let eF = 0;
  let eC = Math.ceil(ee / e9) + 1;
  let eJ = e2.slice || 400;
  let eA = (eQ, er, eu) => {
    {
      let ep = 0;
      let eR = 0;
      let eO = 0;
      for (let eI = 0; eI < eT; eI += eu) {
        let eU = eQ + eI;
        let em = er + eI;
        let eN = eU < e6 && eU >= 0 ? eD ? eo[eU] + eD[eU] : eo[eU] : 0;
        let ef = em < e6 && em >= 0 ? eD ? eo[em] + eD[em] : eo[em] : 0;
        ep += eN * ef;
        eR += eN * eN;
        eO += ef * ef;
      }
      return ep / Math.sqrt(eR * eO + 1e-9);
    }
  };
  for (let eQ = 0; eQ < eC; eQ++) {
    let er = Math.round(eQ * ev + en);
    let eu = er;
    if (eQ > 0) {
      let eV = eF + e9;
      let eY = 0;
      let ex = -2;
      for (let eb = -ez; eb <= ez; eb += 8) {
        {
          let eK = eA(er + eb, eV, 8);
          if (eK > ex) {
            ex = eK;
            eY = eb;
          }
        }
      }
      let ei = eY;
      for (let eZ = ei - 7; eZ <= ei + 7; eZ++) {
        {
          if (eZ < -ez || eZ > ez) {
            continue;
          }
          let eW = eA(er + eZ, eV, 2);
          if (eW > ex) {
            ex = eW;
            eY = eZ;
          }
        }
      }
      eu = er + eY;
    }
    eu = Math.max(0, Math.min(e6 - 1, eu));
    let ek = eQ * e9;
    for (let eM = 0; eM < e7; eM++) {
      {
        let eg = v[eM];
        let ey = eP[eM];
        let eB = Math.min(e8, e6 - eu, ey.length - ek);
        for (let el = 0; el < eB; el++) {
          ey[ek + el] += eg[eu + el] * eE[el];
        }
      }
    }
    eF = eu;
    if (e2.onProgress && eQ % 200 === 0) {
      e2.onProgress(eQ / eC);
    }
    if (eQ % eJ === eJ - 1) {
      await new Promise(ea => setTimeout(ea, 0));
    }
  }
  return eP.map(ea => ea.subarray(0, ee));
}
r(timeStretch, "timeStretch");
const vS = {
  O: "#01ea9e",
  E: "#17eeff",
  S: "#ffff00"
};
const vu = {
  DELTARUNE: vS,
  PARTY: {
    O: "#00ffff",
    E: "#ff00ff",
    S: "#ffff00"
  },
  MONO: {
    O: "#ffffff",
    E: "#a0a0a0",
    S: "#ffff00"
  }
};
var vV = ["DELTARUNE", "BARS", "CIRCLE", "DIAMOND", "ARROWS"];
var vY = ["DELTARUNE", "PARTY", "SOUL", "MONO"];
var vx = vu;
var vb = ["#ff0000", "#fca600", "#ffff00", "#00c000", "#42fcff", "#3c6cff", "#d535d9"];
var vL = {
  white: "#ffffff",
  gray: "#808080",
  dk: "#404040",
  faint: "#303030",
  yellow: "#ffff00",
  orange: "#ffa040",
  maroon: "#800000",
  purple: "#332033",
  red: "#ff4040",
  cyan: "#00ffff",
  green: "#7ad17a",
  gold: "#e0c060",
  light: "#c0c0c0"
};
function txt(v, n, e1, e2, e3 = vL.white, e4 = "fnt_main", e5 = "left") {
  v.draw_set_font(e4);
  v.draw_set_halign(e5);
  v.draw_text(Math.round(n), Math.round(e1), e2, e3);
  v.draw_set_halign("left");
}
r(txt, "txt");
var vp = new Map();
function fit(v, n, e1, e2 = "fnt_main") {
  n = String(n);
  let e5 = e2 + "|" + e1 + "|" + n;
  let e6 = vp.get(e5);
  if (e6 !== undefined) {
    return e6;
  }
  if (v.string_width(n, e2) <= e1) {
    e6 = n;
  } else {
    let e9 = 0;
    let ev = n.length;
    while (e9 < ev) {
      let ez = e9 + ev + 1 >> 1;
      if (v.string_width(n.slice(0, ez) + "...", e2) <= e1) {
        e9 = ez;
      } else {
        ev = ez - 1;
      }
    }
    e6 = n.slice(0, e9) + "...";
  }
  if (vp.size > 3000) {
    vp.clear();
  }
  vp.set(e5, e6);
  return e6;
}
r(fit, "fit");
function darkbox(v, n, e1, e2, e3, e4 = 0, e5 = 1) {
  let ez = v.ctx;
  ez.globalAlpha = e5;
  ez.fillStyle = "#000000";
  ez.fillRect(n + 6, e1 + 6, e2 - n - 12, e3 - e1 - 12);
  ez.globalAlpha = 1;
  let en = Math.max(0, e2 - n - 63);
  let ee = Math.max(0, e3 - e1 - 63);
  let eP = "#ffffff";
  if (en > 0) {
    v.draw_sprite_ext("spr_textbox_top", 0, n + 32, e1, en, 2, 0, eP, 1);
    v.draw_sprite_ext("spr_textbox_top", 0, n + 32, e3 + 1, en, -2, 0, eP, 1);
  }
  if (ee > 0) {
    v.draw_sprite_ext("spr_textbox_left", 0, e2 + 1, e1 + 32, -2, ee, 0, eP, 1);
    v.draw_sprite_ext("spr_textbox_left", 0, n, e1 + 32, 2, ee, 0, eP, 1);
  }
  let eE = Math.floor(e4 / 100) % 8;
  v.draw_sprite_ext("spr_textbox_topleft", eE, n, e1, 2, 2, 0, eP, 1);
  v.draw_sprite_ext("spr_textbox_topleft", eE, e2 + 1, e1, -2, 2, 0, eP, 1);
  v.draw_sprite_ext("spr_textbox_topleft", eE, n, e3 + 1, 2, -2, 0, eP, 1);
  v.draw_sprite_ext("spr_textbox_topleft", eE, e2 + 1, e3 + 1, -2, -2, 0, eP, 1);
}
r(darkbox, "darkbox");
function plainBox(v, n, e1, e2, e3, e4 = vL.dk, e5 = "#000000", e6 = 1) {
  n = Math.round(n);
  e1 = Math.round(e1);
  e2 = Math.round(e2);
  e3 = Math.round(e3);
  if (e5) {
    v.globalAlpha = e6;
    v.fillStyle = e5;
    v.fillRect(n, e1, e2, e3);
    v.globalAlpha = 1;
  }
  if (e4) {
    v.fillStyle = e4;
    v.fillRect(n, e1, e2, 1);
    v.fillRect(n, e1 + e3 - 1, e2, 1);
    v.fillRect(n, e1, 1, e3);
    v.fillRect(n + e2 - 1, e1, 1, e3);
  }
}
r(plainBox, "plainBox");
function soul(v, n, e1) {
  v.draw_sprite_ext("spr_heart", 0, Math.round(n), Math.round(e1), 1, 1, 0, "#ffffff", 1);
}
r(soul, "soul");
function hudBar(v, n, e1, e2, e3, e4, e5, e6 = vL.maroon) {
  n = Math.round(n);
  e1 = Math.round(e1);
  v.fillStyle = e6;
  v.fillRect(n, e1, e2, e3);
  let en = Math.round(e2 * Math.max(0, Math.min(1, e4)));
  if (en > 0) {
    v.fillStyle = e5;
    v.fillRect(n, e1, en, e3);
  }
}
r(hudBar, "hudBar");
function laneType(v, n) {
  if (n % 2 === 1 && v === (n - 1) / 2) {
    return "S";
  } else if (Math.min(v, n - 1 - v) % 2 === 0) {
    return "O";
  } else {
    return "E";
  }
}
r(laneType, "laneType");
function shade(v, n) {
  let e5 = parseInt(v.slice(1), 16);
  let e6 = e5 >> 16;
  let e7 = e5 >> 8 & 255;
  let e8 = e5 & 255;
  let e9 = ev => Math.round(n >= 0 ? ev + (255 - ev) * n : ev * (1 + n));
  return "#" + [e9(e6), e9(e7), e9(e8)].map(ev => ev.toString(16).padStart(2, "0")).join("");
}
r(shade, "shade");
var rgba = r((v, n) => {
  let e2 = parseInt(v.slice(1), 16);
  return "rgba(" + (e2 >> 16) + "," + (e2 >> 8 & 255) + "," + (e2 & 255) + "," + n + ")";
}, "rgba");
function laneColors(v, n = "DELTARUNE") {
  let e4 = [];
  for (let e6 = 0; e6 < v; e6++) {
    let e7;
    if (n === "SOUL") {
      e7 = vb[(v <= 7 ? Math.round(e6 * 6 / Math.max(1, v - 1)) : e6) % vb.length];
    } else {
      e7 = (vx[n] || vx.DELTARUNE)[laneType(e6, v)];
    }
    e4.push({
      base: e7,
      light: shade(e7, 0.5),
      dark: shade(e7, -0.5),
      deep: shade(e7, -0.8),
      type: laneType(e6, v)
    });
  }
  return e4;
}
r(laneColors, "laneColors");
function computeLayout(v, n = {}, e1 = 1) {
  let e7 = v;
  let e8 = Math.round(Math.min(56, Math.max(26, 380 / e7)));
  let e9 = n.colW > 0 ? Math.max(20, Math.min(80, n.colW)) : e8;
  let ev = Math.min(620, e9 * e7);
  let ez = ev / e7;
  let en = Math.round(320 - ev / 2);
  let ee = n.scrollDir === "UP";
  let eP = Math.max(20, Math.min(240, n.hitPos ?? 70));
  let eE = ee ? eP : 480 - eP;
  let eo = ee ? 480 : 0;
  let eD = n.speedMode === "MS" ? Math.max(150, Math.min(6000, n.scrollMs || 900)) : 11485 / Math.max(1, Math.min(40, n.speed || 22));
  let eT = eD * e1;
  let eF = Math.abs(eE - eo);
  let eC = {
    keys: e7,
    colW: ez,
    x0: en,
    x1: en + ev,
    width: ev,
    cx: 320,
    up: ee,
    dir: ee ? 1 : -1,
    hitY: eE,
    far: eo,
    top: 0,
    bottom: 480,
    span: eF,
    visMs: eT,
    visReal: eD,
    pxPerMs: eF / eT,
    noteSize: Math.max(0.4, Math.min(2, n.noteSize || 1)),
    laneX: new Float32Array(e7),
    judgeY: ee ? eE + (n.judgePos ?? 120) : eE - (n.judgePos ?? 120),
    sudden: Math.max(0, Math.min(0.9, (n.sudden || 0) / 100)),
    hidden: Math.max(0, Math.min(0.9, (n.hidden || 0) / 100))
  };
  for (let eJ = 0; eJ < e7; eJ++) {
    eC.laneX[eJ] = en + ez * (eJ + 0.5);
  }
  return eC;
}
r(computeLayout, "computeLayout");
function diamond(v, n, e1, e2, e3, e4 = 0) {
  if (e4 <= 0 || !v.arcTo) {
    v.beginPath();
    v.moveTo(n, e1 - e3 / 2);
    v.lineTo(n + e2 / 2, e1);
    v.lineTo(n, e1 + e3 / 2);
    v.lineTo(n - e2 / 2, e1);
    v.closePath();
    return;
  }
  let e9 = n;
  let ev = e1 - e3 / 2;
  let ez = n + e2 / 2;
  let en = e1;
  let ee = n;
  let eP = e1 + e3 / 2;
  let eE = n - e2 / 2;
  let eo = e1;
  v.beginPath();
  v.moveTo((eE + e9) / 2, (eo + ev) / 2);
  v.arcTo(e9, ev, ez, en, e4);
  v.arcTo(ez, en, ee, eP, e4);
  v.arcTo(ee, eP, eE, eo, e4);
  v.arcTo(eE, eo, e9, ev, e4);
  v.closePath();
}
r(diamond, "diamond");
var vW = [[0, 1], [1, 0.02], [0.42, 0.02], [0.42, -1], [-0.42, -1], [-0.42, 0.02], [-1, 0.02]];
function arrow(v, n, e1, e2, e3) {
  let e9 = Math.cos(e3);
  let ev = Math.sin(e3);
  let ez = e2 / 2;
  v.beginPath();
  for (let en = 0; en < vW.length; en++) {
    let ee = vW[en][0] * ez;
    let eP = vW[en][1] * ez;
    let eE = n + ee * e9 - eP * ev;
    let eo = e1 + ee * ev + eP * e9;
    if (en) {
      v.lineTo(eE, eo);
    } else {
      v.moveTo(eE, eo);
    }
  }
  v.closePath();
}
r(arrow, "arrow");
var vg = [Math.PI / 2, 0, Math.PI, -Math.PI / 2];
var arrowRot = r((v, n) => vg[n === 4 ? v : v % 4], "arrowRot");
function roundBar(v, n, e1, e2, e3, e4) {
  e4 = Math.max(0, Math.min(e4, e2 / 2, e3 / 2));
  v.beginPath();
  if (e4 <= 0 || !v.arcTo) {
    v.rect(n, e1, e2, e3);
    return;
  }
  v.moveTo(n + e4, e1);
  v.arcTo(n + e2, e1, n + e2, e1 + e3, e4);
  v.arcTo(n + e2, e1 + e3, n, e1 + e3, e4);
  v.arcTo(n, e1 + e3, n, e1, e4);
  v.arcTo(n, e1, n + e2, e1, e4);
  v.closePath();
}
r(roundBar, "roundBar");
var easeOut3 = r(v => {
  let e5 = 1 - Math.max(0, Math.min(1, v));
  return 1 - e5 * e5 * e5;
}, "easeOut3");
function noteBox(v, n) {
  let e6 = n.colW;
  let e7 = n.noteSize;
  let e8 = Math.max(6, e6 - 2);
  switch (v) {
    case "CIRCLE":
      {
        let ev = Math.min(e8, Math.min(e6 - 4, 34) * e7);
        return [ev, ev];
      }
    case "DIAMOND":
      {
        let ez = Math.min(e8, Math.min(e6 - 4, 44) * e7);
        return [ez, ez * 0.62];
      }
    case "ARROWS":
      {
        let eP = Math.min(e8, Math.min(e6 - 4, 38) * e7);
        return [eP, eP];
      }
    case "DELTARUNE":
      return [Math.min(e6 - 4, 34) * e7, e7 * 10];
    default:
      return [e6 - 4, Math.max(6, e7 * 12)];
  }
}
r(noteBox, "noteBox");
var vj = {
  base: "#6a6a6a",
  light: "#9a9a9a",
  dark: "#383838",
  deep: "#202020"
};
var va = {
  base: "#606060",
  light: "#909090",
  dark: "#303030",
  deep: "#202020"
};
var vX = "rgba(0,0,0,0.6)";
function bodyFill(v, n, e1, e2) {
  if (!v.createLinearGradient) {
    return n.base;
  }
  let e5 = v.createLinearGradient(0, e1 - e2 / 2, 0, e1 + e2 / 2);
  e5.addColorStop(0, n.light);
  e5.addColorStop(0.45, n.base);
  e5.addColorStop(1, shade(n.base, -0.28));
  return e5;
}
r(bodyFill, "bodyFill");
function headPath(v, n, e1, e2, e3, e4, e5, e6, e7 = 0) {
  if (n === "CIRCLE") {
    v.beginPath();
    v.arc(e1, e2, Math.max(0.5, e3 / 2 - e7), 0, Math.PI * 2);
  } else if (n === "DIAMOND") {
    diamond(v, e1, e2, Math.max(1, e3 - e7 * 2), Math.max(1, e4 - e7 * 2 * (e4 / e3)), Math.max(0.5, e4 * 0.14));
  } else {
    arrow(v, e1, e2, Math.max(1, e3 - e7 * 2), arrowRot(e5, e6));
  }
}
r(headPath, "headPath");
function paintNote(v, n, e1, e2, e3, e4, e5, e6, e7, e8) {
  let ez = e8 ? n === "BARS" ? va : vj : e5;
  if (n === "BARS") {
    let eP = Math.round(e1 - e3 / 2);
    let eE = Math.round(e2 - e4 / 2);
    let eo = Math.round(e3);
    let eD = Math.round(e4);
    v.fillStyle = "#000000";
    v.fillRect(eP - 1, eE - 1, eo + 2, eD + 2);
    v.fillStyle = ez.base;
    v.fillRect(eP, eE, eo, eD);
    v.fillStyle = ez.light;
    v.fillRect(eP, eE, eo, 2);
    v.fillStyle = ez.dark;
    v.fillRect(eP, eE + eD - 2, eo, 2);
    return;
  }
  v.lineJoin = "round";
  v.lineCap = "round";
  headPath(v, n, e1, e2, e3, e4, e6, e7, 0);
  v.lineWidth = 2.5;
  v.strokeStyle = vX;
  v.stroke();
  headPath(v, n, e1, e2, e3, e4, e6, e7, 1.25);
  v.fillStyle = bodyFill(v, ez, e2, e4);
  v.fill();
  v.lineWidth = 1.5;
  v.strokeStyle = e8 ? "#a0a0a0" : "#ffffff";
  v.stroke();
  if (n === "CIRCLE" && e3 >= 16) {
    v.beginPath();
    v.arc(e1, e2, e3 * 0.26, 0, Math.PI * 2);
    v.lineWidth = 1;
    v.strokeStyle = "rgba(255,255,255,0.32)";
    v.stroke();
  }
}
r(paintNote, "paintNote");
function paintTail(v, n, e1, e2, e3, e4, e5, e6, e7, e8, e9) {
  let eE = e8 ? "#707070" : e5.light;
  if (n === "BARS") {
    v.fillStyle = eE;
    v.fillRect(Math.round(e1 - e3 * 0.42), Math.round(e2 - e4 * 0.25), Math.round(e3 * 0.84), Math.max(3, Math.round(e4 * 0.5)));
    return;
  }
  let eo = Math.max(2, e9 / 2 + 1.5);
  v.beginPath();
  v.arc(e1, e2, eo, 0, Math.PI * 2);
  v.fillStyle = e8 ? "#505050" : e5.base;
  v.fill();
  v.lineWidth = 1.5;
  v.strokeStyle = eE;
  v.stroke();
}
r(paintTail, "paintTail");
function paintReceptor(v, n, e1, e2, e3, e4, e5, e6, e7, e8, e9) {
  if (n === "BARS") {
    let eP = e8 ? "#ffffff" : "#808080";
    let eE = Math.round(e1 - e9 / 2 + 2);
    let eo = Math.round(e9 - 4);
    v.fillStyle = e8 ? e5.dark : "#101010";
    v.fillRect(eE, e2 + 4, eo, 28);
    v.fillStyle = eP;
    v.fillRect(eE, e2 + 4, eo, 1);
    v.fillRect(eE, e2 + 31, eo, 1);
    v.fillRect(eE, e2 + 4, 1, 28);
    v.fillRect(eE + eo - 1, e2 + 4, 1, 28);
    if (e8) {
      v.fillStyle = e5.base;
      v.fillRect(eE + 3, e2 + 7, eo - 6, 3);
    }
    return;
  }
  v.lineJoin = "round";
  if (e8) {
    headPath(v, n, e1, e2, e3, e4, e6, e7, 1.25);
    if (v.createLinearGradient) {
      let eD = v.createLinearGradient(0, e2 - e4 / 2, 0, e2 + e4 / 2);
      eD.addColorStop(0, e5.base);
      eD.addColorStop(1, e5.dark);
      v.fillStyle = eD;
    } else {
      v.fillStyle = e5.dark;
    }
    v.globalAlpha = 0.85;
    v.fill();
    v.globalAlpha = 1;
    v.lineWidth = 2;
    v.strokeStyle = "#ffffff";
    v.stroke();
  } else {
    headPath(v, n, e1, e2, e3, e4, e6, e7, 0);
    v.lineWidth = 2.5;
    v.strokeStyle = vX;
    v.stroke();
    headPath(v, n, e1, e2, e3, e4, e6, e7, 1.25);
    v.fillStyle = "rgba(255,255,255,0.05)";
    v.fill();
    v.lineWidth = 1.5;
    v.strokeStyle = "#8a8a8a";
    v.stroke();
    if (e3 >= 14) {
      headPath(v, n, e1, e2, e3, e4, e6, e7, 4);
      v.lineWidth = 1;
      v.strokeStyle = shade(e5.base, -0.35);
      v.stroke();
    }
  }
}
r(paintReceptor, "paintReceptor");
function paintBurst(v, n, e1, e2, e3, e4, e5, e6, e7, e8) {
  if (n === "BARS") {
    v.lineWidth = 2;
    v.strokeStyle = e5.light;
    v.strokeRect(Math.round(e1 - e8 / 2 + 3) + 0.5, Math.round(e2 - e4 / 2) + 0.5, Math.round(e8 - 6) - 1, Math.round(e4) - 1);
    return;
  }
  v.lineJoin = "round";
  headPath(v, n, e1, e2, e3, e4, e6, e7, 1);
  v.fillStyle = rgba(e5.light, 0.18);
  v.fill();
  v.lineWidth = 2;
  v.strokeStyle = e5.light;
  v.stroke();
}
r(paintBurst, "paintBurst");
var z6 = 2;
var z7 = new Map();
var z8 = 1200;
var quantScale = r(v => Math.max(1, Math.min(4, Math.round((v > 0 && v < 100 ? v : z6) * 4) / 4)), "quantScale");
function deviceScale(v) {
  try {
    if (v && v.getTransform) {
      let e5 = v.getTransform();
      let e6 = Math.max(Math.hypot(e5.a, e5.b), Math.hypot(e5.c, e5.d));
      if (e6 > 0 && e6 < 100) {
        return e6;
      }
    }
  } catch {}
  return z6;
}
r(deviceScale, "deviceScale");
var Sprite = class P1 {
  constructor(v, n, e1, e2, e3 = "", e4 = false) {
    this.doc = v;
    this.w = n;
    this.h = e1;
    this.paint = e2;
    this.key = e3;
    this.crisp = e4;
    this.q = 0;
    this.cv = null;
  }
  canvasAt(v) {
    let e1 = this.crisp ? z6 : quantScale(v);
    if (e1 === this.q) {
      return this.cv;
    }
    this.q = e1;
    let e5 = this.key ? this.key + "@" + e1 : "";
    let e6 = e5 ? z7.get(e5) : undefined;
    if (e6 === undefined) {
      e6 = null;
      try {
        let e8 = this.doc;
        let e9 = e8 && e8.createElement ? e8.createElement("canvas") : null;
        if (e9 && e9.getContext) {
          e9.width = Math.max(1, Math.ceil(this.w * e1));
          e9.height = Math.max(1, Math.ceil(this.h * e1));
          let ev = e9.getContext("2d");
          if (ev) {
            ev.scale(e1, e1);
            this.paint(ev, this.w / 2, this.h / 2);
            e6 = e9;
          }
        }
      } catch {
        e6 = null;
      }
      if (e5) {
        for (z7.set(e5, e6); z7.size > z8;) {
          z7.delete(z7.keys().next().value);
        }
      }
    }
    this.cv = e6;
    return e6;
  }
  draw(v, n, e1, e2 = 1, e3 = 1, e4 = z6) {
    let ev = this.canvasAt(e4);
    let ez = this.w * e2;
    let en = this.h * e3;
    let ee = n - ez / 2;
    let eP = e1 - en / 2;
    if (ev) {
      let eE = e2 !== 1 || e3 !== 1 || Math.abs(this.q - e4) > 0.01;
      if (!this.crisp && !eE) {
        ee = Math.round(ee * e4) / e4;
        eP = Math.round(eP * e4) / e4;
      }
      if (eE && !this.crisp) {
        v.imageSmoothingEnabled = true;
        v.drawImage(ev, ee, eP, ez, en);
        v.imageSmoothingEnabled = false;
      } else {
        v.drawImage(ev, ee, eP, ez, en);
      }
    } else {
      v.save();
      v.translate(ee, eP);
      v.scale(e2, e3);
      this.paint(v, this.w / 2, this.h / 2);
      v.restore();
    }
  }
};
r(Sprite, "Sprite");
var zn = Sprite;
var ze = new Map();
function numText(v) {
  let e2 = ze.get(v);
  if (e2 === undefined) {
    if (ze.size > 6000) {
      ze.clear();
    }
    e2 = String(v);
    ze.set(v, e2);
  }
  return e2;
}
r(numText, "numText");
var zE = -1;
var zo = "";
function pad7(v) {
  if (v !== zE) {
    zE = v;
    zo = String(v).padStart(7, "0");
  }
  return zo;
}
r(pad7, "pad7");
var zT = new Map();
function pct(v) {
  let e5 = Math.round(v * 10000);
  let e6 = zT.get(e5);
  if (!e6) {
    e6 = (e5 / 100).toFixed(2) + "%";
    if (zT.size > 4000) {
      zT.clear();
    }
    zT.set(e5, e6);
  }
  return e6;
}
r(pct, "pct");
var zC = [];
var hpText = r(v => zC[v] ||= String(v).padStart(3, " ") + "/ 100", "hpText");
var zA = new Float32Array(4);
function dmgMotion(v) {
  let e5 = 0;
  let e6 = 1;
  let e7 = 1;
  let e8 = 1;
  if (v < 260) {
    let e9 = v / 260;
    e5 = e9 * -64 * (1 - e9);
  } else if (v < 380) {
    let ev = (v - 260) / 120;
    e5 = ev * -16 * (1 - ev);
  }
  if (v > 560) {
    let ez = Math.min(1, (v - 560) / 180);
    e7 = 1 + ez * 1.6;
    e6 = 1 - ez * 0.55;
    e8 = 1 - ez;
  }
  zA[0] = e5;
  zA[1] = e6;
  zA[2] = e7;
  zA[3] = e8;
  return zA;
}
r(dmgMotion, "dmgMotion");
var zw = ["", "300", "200", "100", "50", ""];
function drawJudgeWord(v, e1, e2, e3, e4 = 1, e5 = 1, e6 = 1) {
  const e7 = {
    QrFXB: function (eP, eE) {
      return eP === eE;
    },
    PtdaN: function (eP, eE) {
      return eP === eE;
    },
    HhiMb: function (eP, eE) {
      return eP === eE;
    }
  };
  e7.AOhzg = "KPhJC";
  e7.RQqfE = "spr_battlemsg";
  e7.evqot = function (eP, eE) {
    return eP + eE;
  };
  e7.xdRvE = function (eP, eE) {
    return eP * eE;
  };
  e7.UpzJD = function (eP, eE) {
    return eP - eE;
  };
  e7.Hepwf = function (eP, eE) {
    return eP === eE;
  };
  e7.QLuPn = "#ffff00";
  e7.Inohc = "#c0c0c0";
  e7.UHkmD = "fnt_dmg";
  e7.iEjuU = "center";
  e7.ozRpE = "left";
  const ev = e7;
  if (ev.QrFXB(e1, 0) || ev.PtdaN(e1, 5)) {
    if (ev.HhiMb(ev.AOhzg, ev.AOhzg)) {
      v.draw_sprite_ext(ev.RQqfE, ev.QrFXB(e1, 0) ? 2 : 0, Math.round(ev.evqot(e2, ev.xdRvE(37, e4))), Math.round(ev.UpzJD(e3, ev.xdRvE(20, e5))), e4, e5, 0, ev.Hepwf(e1, 0) ? ev.QLuPn : ev.Inohc, e6);
      return;
    } else {
      let eP = this.P;
      eP.graze += ev;
      eP.score += e4 * (200 + en.floor(eP.graze / 10) * 10);
      this.addTP(ee * 2.5);
      for (let eE = 0; eE < c.min(e1, 3); eE++) {
        let eo = this.rand() * cleanMods;
        this.part(modInfo.SQUARE, eP.x, eP.y, v2.cos(eo) * 3, modsLabel.sin(eo) * 3, 9, 0, 1);
      }
      this.P.grazeFlash = 6;
      this.snd("snd_graze", 0.45, 3);
    }
  }
  let en = zw[e1];
  let ee = v.alpha;
  v.draw_set_alpha(e6);
  v.draw_set_font(ev.UHkmD);
  v.draw_set_halign(ev.iEjuU);
  v.draw_set_color(l[e1]);
  v.draw_text_transformed(Math.round(e2), Math.round(ev.UpzJD(e3, ev.xdRvE(28, e5))), en, e4, e5, 0);
  v.draw_set_halign(ev.ozRpE);
  v.draw_set_alpha(ee);
}
r(drawJudgeWord, "drawJudgeWord");
var ManiaRenderer = class P2 {
  constructor(v = globalThis.document) {
    this.doc = v;
    this.key = "";
    this.beatBuf = new Float64Array(256);
    this.heN = 48;
    this.heErr = new Float32Array(48);
    this.heAt = new Float64Array(48);
    this.heJ = new Uint8Array(48);
    this.heW = 0;
    this.heMean = 0;
    this.laneUpAt = null;
    this.jAt = -1000000000;
    this.jSeen = -1000000000;
    this.jj = -1;
  }
  warm(v, n, e1 = 1) {
    this.buildSprites(v, n, computeLayout(v, n, e1));
  }
  setup(v, n, e1, e2 = {}) {
    let e7 = v.keys;
    let e8 = computeLayout(e7, e1, v.rate);
    this.play = v;
    this.view = n;
    this.cfg = e1;
    this.L = e8;
    this.buildSprites(e7, e1, e8);
    this.gradL = null;
    this.laneUpAt = new Float64Array(e7).fill(-1000000000);
    this.prevDown = new Uint8Array(e7);
    this.pressK = new Float32Array(e7);
    this.lastTr = -1;
    this.heW = 0;
    this.heMean = 0;
    this.heAt.fill(-1000000000);
    this.jAt = -1000000000;
    this.jSeen = -1000000000;
    this.jj = -1;
  }
  buildSprites(v, e1, e2) {
    let e5 = vV.includes(e1.skin) ? e1.skin : "DELTARUNE";
    let e6 = vY.includes(e1.scheme) ? e1.scheme : "DELTARUNE";
    this.skin = e5;
    this.scheme = e6;
    this.cols = laneColors(v, e6);
    let e9 = [v, e5, e6, e2.colW, e2.noteSize].join("|");
    if (e9 !== this.key) {
      this.key = e9;
      let [ev, ez] = noteBox(e5, e2);
      this.nw = ev;
      this.nh = ez;
      let en = this.doc;
      this.notes = [];
      this.deadNotes = [];
      this.tails = [];
      this.deadTails = [];
      this.rec = [];
      this.recLit = [];
      this.burst = [];
      this.bodyW = e5 === "DELTARUNE" ? 8 : e5 === "BARS" ? Math.round(e2.colW - 10) : Math.max(4, Math.round(e5 === "CIRCLE" ? ev * 0.56 : e5 === "DIAMOND" ? ev * 0.42 : ev * 0.46));
      if (e5 !== "DELTARUNE") {
        let ee = e5 === "BARS";
        let eP = this.bodyW;
        for (let eE = 0; eE < v; eE++) {
          let eo = this.cols[eE];
          let eD = [e5, eE % 4, v === 4 ? 4 : 0, eo.base, ev.toFixed(2), ez.toFixed(2), e2.colW.toFixed(2)].join("|");
          this.notes.push(new zn(en, ev + 4, ez + 4, (eA, eG, ew) => paintNote(eA, e5, eG, ew, ev, ez, eo, eE, v, false), eD + "|note", ee));
          this.deadNotes.push(new zn(en, ev + 4, ez + 4, (eA, eG, ew) => paintNote(eA, e5, eG, ew, ev, ez, eo, eE, v, true), eD + "|dead", ee));
          this.tails.push(new zn(en, ev + 4, ez + 4, (eA, eG, ew) => paintTail(eA, e5, eG, ew, ev, ez, eo, eE, v, false, eP), eD + "|tail", ee));
          this.deadTails.push(new zn(en, ev + 4, ez + 4, (eA, eG, ew) => paintTail(eA, e5, eG, ew, ev, ez, eo, eE, v, true, eP), eD + "|deadtail", ee));
          let eT = e5 === "BARS" ? e2.colW : ev;
          let eF = e5 === "BARS" ? 40 : ez;
          let eC = e5 === "BARS" ? -20 : 0;
          this.rec.push(new zn(en, eT + 4, eF + 4, (eA, eG, ew) => paintReceptor(eA, e5, eG, ew + eC, ev, ez, eo, eE, v, false, e2.colW), eD + "|rec", ee));
          this.recLit.push(new zn(en, eT + 4, eF + 4, (eA, eG, ew) => paintReceptor(eA, e5, eG, ew + eC, ev, ez, eo, eE, v, true, e2.colW), eD + "|reclit", ee));
          let eJ = e5 === "BARS" ? Math.max(14, ez + 6) : ez;
          this.burst.push(new zn(en, eT + 6, eJ + 6, (eA, eG, ew) => paintBurst(eA, e5, eG, ew, ev, eJ, eo, eE, v, e2.colW), eD + "|burst", ee));
        }
        for (let eY of [this.notes, this.deadNotes, this.tails, this.deadTails, this.rec, this.recLit, this.burst]) {
          for (let ex of eY) {
            ex.canvasAt(z6);
          }
        }
      }
    }
  }
  grads(v) {
    let e4 = this.L;
    if (this.gradL === e4 && this.gradCtx === v) {
      return;
    }
    this.gradL = e4;
    this.gradCtx = v;
    let e5 = e4.hitY;
    let e6 = e4.hitY + e4.dir * 120;
    this.laneLight = this.cols.map(e7 => {
      let eJ = v.createLinearGradient(0, e5, 0, e6);
      eJ.addColorStop(0, rgba(e7.base, 0.32));
      eJ.addColorStop(1, rgba(e7.base, 0));
      return eJ;
    });
  }
  yOf(v, n) {
    let e6 = this.L;
    return e6.hitY + e6.dir * (v - n) * e6.pxPerMs;
  }
  draw(v, n, e1) {
    let e3 = v.ctx;
    let e4 = this.L;
    let e5 = this.play;
    let e6 = this.view;
    let e7 = e5.keys;
    let e8 = this.skin;
    let e9 = this.cfg;
    let ev = e8 === "DELTARUNE";
    this.grads(e3);
    let ez = e6.scroll.pos(n);
    let en = e4.x0;
    let ee = e4.width;
    e3.globalAlpha = e9.stageAlpha ?? 0.86;
    e3.fillStyle = "#000000";
    e3.fillRect(en, 0, ee, 480);
    e3.globalAlpha = 1;
    e3.fillStyle = ev ? "#202020" : "#1c1c1c";
    for (let eS = 1; eS < e7; eS++) {
      e3.fillRect(Math.round(en + e4.colW * eS), 0, 1, 480);
    }
    if (e9.barlines !== false) {
      let eQ = e4.span / e4.pxPerMs;
      let er = beatLines(e5.chart, n - 400, n + eQ * 4 + 400, this.beatBuf);
      for (let eu = 0; eu < er; eu++) {
        {
          let ek = this.beatBuf[eu] < 0;
          let eV = ek ? -this.beatBuf[eu] : this.beatBuf[eu];
          let eY = Math.round(this.yOf(e6.scroll.posAt(eV), ez));
          if (!(e4.up ? eY < e4.hitY || eY > 480 : eY > e4.hitY || eY < 0)) {
            e3.fillStyle = ek ? "#404040" : "#1c1c1c";
            e3.fillRect(en, eY, ee, 1);
          }
        }
      }
    }
    if (e1.flash > 0 && !e9.lowSpec) {
      e3.globalAlpha = 0.16 * e1.flash;
      e3.fillStyle = "#ff0000";
      e3.fillRect(en, 0, ee, 480);
      e3.globalAlpha = 1;
    }
    let eP = e1.tReal;
    let eE = this.lastTr < 0 ? 16 : Math.max(0, Math.min(100, eP - this.lastTr));
    this.lastTr = eP;
    let eo = 1 - Math.exp(-eE / 22);
    let eD = 1 - Math.exp(-eE / 55);
    for (let eq = 0; eq < e7; eq++) {
      {
        let es = e5.down[eq] ? 1 : 0;
        let ep = this.pressK[eq];
        this.pressK[eq] = ep + (es - ep) * (es > ep ? eo : eD);
        if (this.pressK[eq] < 0.002) {
          this.pressK[eq] = 0;
        }
      }
    }
    let eF = ev || e8 === "BARS";
    let eC = eF ? z6 : deviceScale(e3);
    this.dev = eC;
    for (let eR = 0; eR < e7; eR++) {
      let eO = e5.down[eR];
      if (this.prevDown[eR] && !eO) {
        this.laneUpAt[eR] = eP;
      }
      this.prevDown[eR] = eO;
      let eI;
      if (eF) {
        eI = eO ? 1 : Math.max(0, 1 - (eP - this.laneUpAt[eR]) / 120);
      } else {
        let em = eO ? 0 : Math.min(1, (eP - this.laneUpAt[eR]) / 170);
        eI = eO ? Math.max(0.35, this.pressK[eR]) : (1 - em) * (1 - em);
      }
      if (eI <= 0) {
        continue;
      }
      e3.globalAlpha = eI;
      e3.fillStyle = this.laneLight[eR];
      let eU = Math.round(en + e4.colW * eR);
      if (e4.up) {
        e3.fillRect(eU, e4.hitY, Math.round(e4.colW), 120);
      } else {
        e3.fillRect(eU, e4.hitY - 120, Math.round(e4.colW), 120);
      }
    }
    e3.globalAlpha = 1;
    if (ev) {
      for (let eN = 0; eN < e7; eN++) {
        let ef = e4.laneX[eN];
        let eK = e4.colW / 40;
        v.draw_sprite_ext("spr_rhythmgame_button", laneType(eN, e7) === "O" ? 0 : 1, ef, e4.hitY, eK, 1, 0, "#ffffff", 1);
        if (e5.down[eN]) {
          v.draw_sprite_ext("spr_rhythmgame_button", 3, ef, e4.hitY, eK, 1, 0, "#ffffff", 0.85);
        }
      }
    } else {
      e3.fillStyle = "#ffffff";
      e3.fillRect(en, e4.hitY - 1, ee, 1);
      if (e8 === "BARS") {
        for (let eZ = 0; eZ < e7; eZ++) {
          (e5.down[eZ] ? this.recLit[eZ] : this.rec[eZ]).draw(e3, e4.laneX[eZ], e4.hitY + (e4.up ? -20 : 20), 1, e4.up ? -1 : 1, eC);
        }
      } else {
        for (let eH = 0; eH < e7; eH++) {
          let ed = this.pressK[eH];
          let eW = 1 - 0.07 * ed;
          if (ed < 0.98) {
            this.rec[eH].draw(e3, e4.laneX[eH], e4.hitY, eW, eW, eC);
          }
          if (ed > 0.02) {
            e3.globalAlpha = ed;
            this.recLit[eH].draw(e3, e4.laneX[eH], e4.hitY, eW, eW, eC);
            e3.globalAlpha = 1;
          }
        }
      }
    }
    e3.save();
    e3.beginPath();
    e3.rect(en, 0, ee, 480);
    e3.clip();
    this.drawNotes(v, e3, n, ez);
    e3.restore();
    let eG = Math.min(0.9, e4.sudden + (e5.mi.fadeIn ? 0.45 : 0));
    let ew = Math.min(0.9, e4.hidden + (e5.mi.hidden ? 0.45 : 0));
    if (eG > 0 || ew > 0) {
      this.drawCover(e3, eG, ew);
    }
    if (e9.hitLight !== false) {
      {
        let ey = !eF;
        if (ey) {
          e3.save();
          e3.beginPath();
          e3.rect(en, 0, ee, 480);
          e3.clip();
        }
        for (let eB = 0; eB < e7; eB++) {
          {
            let ej = e5.holding[eB] >= 0;
            let ea = n - e5.laneHitAt[eB];
            let eX = 0;
            let P0 = 1;
            if (eF) {
              if (ej) {
                eX = 0.7;
                P0 = 1.05;
              } else if (ea >= 0 && ea < 160 * e5.rate) {
                {
                  let P6 = 1 - ea / (160 * e5.rate);
                  eX = P6;
                  P0 = 1 + 0.35 * (1 - P6);
                  if (e5.laneHitJ[eB] > 1) {
                    eX *= 0.6;
                  }
                }
              }
            } else if (ej) {
              let P7 = eP % 900 / 900;
              eX = 0.55 + 0.15 * Math.sin(P7 * Math.PI * 2);
              P0 = 1.04 + 0.02 * Math.sin(P7 * Math.PI * 2);
            } else {
              let P8 = 220 * e5.rate;
              if (ea >= 0 && ea < P8) {
                {
                  let P9 = ea / P8;
                  eX = (1 - P9) * (1 - P9);
                  P0 = 1 + 0.45 * easeOut3(P9);
                  if (e5.laneHitJ[eB] > 1) {
                    eX *= 0.6;
                  }
                }
              }
            }
            if (!(eX <= 0)) {
              if (ev) {
                v.draw_sprite_ext("spr_whitegradientdown_rhythm", e5.laneHitJ[eB] <= 1 ? 1 : 0, e4.laneX[eB], e4.hitY, eX * e4.colW / 40, 1, 0, "#ffffff", Math.min(1, eX));
              } else {
                e3.globalAlpha = Math.min(1, eX);
                this.burst[eB].draw(e3, e4.laneX[eB], e4.hitY, P0, P0, eC);
                e3.globalAlpha = 1;
              }
            }
          }
        }
        if (ey) {
          e3.restore();
        }
      }
    }
    e3.fillStyle = e1.flash > 0.05 ? "#ff4040" : ev ? "#17eeff" : "#808080";
    e3.fillRect(en - 1, 0, 1, 480);
    e3.fillRect(en + ee, 0, 1, 480);
    if (ev) {
      e3.fillRect(en - 2, 0, 1, 480);
      e3.fillRect(en + ee + 1, 0, 1, 480);
    }
    if (!e1.hideHud) {
      this.drawJudgement(v, n, eP);
    }
    if (e1.showSoul !== false && e8 !== "BARS") {
      let PP = e1.soulX ?? e4.cx;
      let PE = e4.up ? e4.hitY - 30 : e4.hitY + 30;
      if ((!(e1.soulHurt > 0) || !(Math.floor(e1.soulHurt / 60) % 2 === 0)) && PE > 0 && PE < 470) {
        v.draw_sprite_ext(e1.broken ? "spr_heartbreak" : "spr_heart", 0, Math.round(PP - (e1.broken ? 10 : 8)), PE - 8, 1, 1, 0, "#ffffff", 1);
      }
    }
  }
  drawCover(v, e1, e2) {
    let e8 = this.L;
    let e9 = e8.x0;
    let ev = e8.width;
    v.fillStyle = "#000000";
    let ez = 24;
    if (e1 > 0) {
      let en = e8.span * e1;
      if (e8.up) {
        v.fillRect(e9, 480 - en + ez, ev, Math.max(0, en - ez));
        for (let ee = 0; ee < ez; ee += 4) {
          v.globalAlpha = 1 - ee / ez;
          v.fillRect(e9, 480 - en + ez - ee - 4, ev, 4);
        }
      } else {
        v.fillRect(e9, 0, ev, Math.max(0, en - ez));
        for (let eo = 0; eo < ez; eo += 4) {
          v.globalAlpha = 1 - eo / ez;
          v.fillRect(e9, en - ez + eo, ev, 4);
        }
      }
      v.globalAlpha = 1;
    }
    if (e2 > 0) {
      let eJ = e8.span * e2;
      let eA = this.skin === "BARS" || this.skin === "DELTARUNE" ? 4 : this.nh / 2 + 3;
      if (e8.up) {
        let eG = e8.hitY + eA;
        v.fillRect(e9, eG, ev, Math.max(0, eJ - ez));
        for (let ew = 0; ew < ez; ew += 4) {
          v.globalAlpha = 1 - ew / ez;
          v.fillRect(e9, eG + eJ - ez + ew, ev, 4);
        }
      } else {
        let eQ = e8.hitY - eA;
        v.fillRect(e9, eQ - eJ + ez, ev, Math.max(0, eJ - ez));
        for (let er = 0; er < ez; er += 4) {
          v.globalAlpha = 1 - er / ez;
          v.fillRect(e9, eQ - eJ + ez - er - 4, ev, 4);
        }
      }
      v.globalAlpha = 1;
    }
  }
  drawNotes(v, e1, e2, e3) {
    const e6 = {
      iuGgI: function (eD, eT) {
        return eD(eT);
      },
      MwpYC: function (eD, eT) {
        return eD - eT;
      },
      Cdwiy: function (eD, eT) {
        return eD * eT;
      },
      HkGCo: function (eD, eT) {
        return eD * eT;
      },
      zaPzF: function (eD, eT) {
        return eD + eT;
      },
      hAaqq: function (eD, eT) {
        return eD / eT;
      },
      wGEWs: function (eD, eT) {
        return eD === eT;
      },
      fNvNm: "DELTARUNE",
      gThPf: function (eD, eT) {
        return eD < eT;
      },
      UuNoD: function (eD, eT) {
        return eD < eT;
      },
      TKLVk: function (eD, eT) {
        return eD > eT;
      },
      Wmkbd: function (eD, eT) {
        return eD === eT;
      },
      pywvm: function (eD, eT) {
        return eD === eT;
      },
      FBxhk: "ITefp",
      mfqLf: "LjRCW",
      iWiGr: function (eD, eT) {
        return eD === eT;
      },
      Ikfcq: function (eD, eT) {
        return eD === eT;
      },
      hdGSv: function (eD, eT) {
        return eD || eT;
      },
      AuARa: function (eD, eT) {
        return eD - eT;
      },
      nOFOE: function (eD, eT) {
        return eD === eT;
      },
      LdtEK: "hVKum",
      TTvVq: "MrMEH",
      BkmHV: "#ffa040",
      sGpPV: "#808080",
      jarqC: function (eD, eT) {
        return eD - eT;
      },
      DRofD: "BARS",
      caXKa: function (eD, eT) {
        return eD !== eT;
      },
      UDYQi: "JWKpO",
      pYHUx: "ermsB",
      ULwBo: function (eD, eT) {
        return eD - eT;
      },
      QTYci: "#303030",
      vTBZu: function (eD, eT) {
        return eD - eT;
      },
      SGpwA: "#606060",
      xKxsK: "#ffffff",
      SggHu: function (eD, eT) {
        return eD - eT;
      },
      GxwWe: function (eD, eT) {
        return eD - eT;
      },
      oAMLH: function (eD, eT) {
        return eD - eT;
      },
      hrYao: function (eD, eT) {
        return eD === eT;
      },
      FRSuD: "khqQc",
      EopRm: "wVXhe",
      SKjMo: function (eD, eT) {
        return eD - eT;
      },
      kwIzu: function (eD, eT, eF, eC, eJ, eA, eG) {
        return eD(eT, eF, eC, eJ, eA, eG);
      },
      FYekj: function (eD, eT) {
        return eD - eT;
      },
      BiGUY: function (eD, eT) {
        return eD / eT;
      },
      BxLau: "#2e2e2e",
      rtoOj: "#5a5a5a",
      FsNpa: function (eD, eT) {
        return eD >= eT;
      },
      ISMtp: function (eD, eT, eF, eC, eJ, eA, eG) {
        return eD(eT, eF, eC, eJ, eA, eG);
      },
      hpnGd: function (eD, eT) {
        return eD * eT;
      },
      hfBQR: function (eD, eT) {
        return eD - eT;
      },
      ZVrDL: function (eD, eT) {
        return eD - eT;
      },
      rhfZd: "spr_rhythmgame_heldnote",
      cLWmL: function (eD, eT) {
        return eD < eT;
      },
      eaRng: "spr_rhythmgame_note",
      NcLEA: "#ffff00",
      VvyIK: function (eD, eT) {
        return eD < eT;
      },
      kxDuT: function (eD, eT) {
        return eD > eT;
      }
    };
    let e8 = this.L;
    let e9 = this.play;
    let ev = this.view;
    let ez = e9.keys;
    let en = this.skin;
    let ee = ev.head;
    let eP = ev.tail;
    let eE = e3 + e8.span / e8.pxPerMs + 60;
    let eo = en === "DELTARUNE";
    for (let eD = 0; eD < ez; eD++) {
      let eT = e8.laneX[eD];
      let eF = e9.laneNotes[eD];
      let eC = this.cols[eD];
      let eJ = Math.max(0, e9.laneNext[eD] - 8);
      let eA = this.bodyW;
      let eG = this.dev || z6;
      for (; eJ < eF.length; eJ++) {
        let ew = eF[eJ];
        if (ee[ew] > eE) {
          break;
        }
        let eS = e9.state[ew];
        let eQ = e9.end[ew] > 0;
        if (eS === 2) {
          continue;
        }
        let er = this.yOf(ee[ew], e3);
        let eu = eS === 3;
        if (eQ) {
          {
            let es = this.yOf(eP[ew], e3);
            let ep = eS === 1;
            let eR = eS === 4;
            if (ep) {
              er = e8.hitY;
            }
            if (e8.up ? es < -20 : es > 500) {
              continue;
            }
            let eO = Math.min(er, es);
            let eI = Math.max(er, es);
            let eU = e6.hdGSv(eu, eR);
            if (eI - eO > 0) {
              {
                if (eo) {
                  e1.fillStyle = ep ? "#ffa040" : eU ? "#808080" : eC.base;
                  e1.globalAlpha = eU ? 0.5 : 1;
                  e1.fillRect(Math.round(eT - 4), eO, 8, eI - eO);
                } else if (en === "BARS") {
                  {
                    let eN = Math.round(eT - eA / 2);
                    e1.fillStyle = eU ? "#303030" : ep ? eC.base : eC.dark;
                    e1.fillRect(eN, eO, eA, eI - eO);
                    e1.fillStyle = eU ? "#606060" : ep ? "#ffffff" : eC.base;
                    e1.fillRect(eN, eO, 2, eI - eO);
                    e1.fillRect(eN + eA - 2, eO, 2, eI - eO);
                  }
                } else {
                  let ef = Math.max(-40, eO);
                  let eK = Math.min(520, eI);
                  if (eK > ef) {
                    {
                      let eZ = eT - eA / 2;
                      roundBar(e1, eZ, ef, eA, eK - ef, eA / 2);
                      e1.fillStyle = eU ? "#2e2e2e" : ep ? eC.dark : eC.deep;
                      e1.globalAlpha = eU ? 0.8 : 0.92;
                      e1.fill();
                      e1.globalAlpha = 1;
                      e1.lineWidth = 1.5;
                      e1.strokeStyle = eU ? "#5a5a5a" : ep ? "#ffffff" : eC.base;
                      e1.stroke();
                      if (!eU && eA >= 8) {
                        e1.fillStyle = ep ? eC.base : eC.dark;
                        e1.globalAlpha = ep ? 0.55 : 0.8;
                        roundBar(e1, eT - eA * 0.18, ef + 2, eA * 0.36, Math.max(0, eK - ef - 4), eA * 0.18);
                        e1.fill();
                        e1.globalAlpha = 1;
                      }
                    }
                  }
                }
                e1.globalAlpha = 1;
                if (eo) {
                  v.draw_sprite_ext("spr_rhythmgame_heldnote", 0, eT, es, 1, 1, 0, eU ? "#808080" : ep ? "#ffa040" : eC.base, eU ? 0.5 : 1);
                } else {
                  (eU ? this.deadTails[eD] : this.tails[eD]).draw(e1, eT, es, 1, 1, eG);
                }
              }
            }
            if (e8.up ? er < -20 : er > 500) {
              continue;
            }
            if (eo) {
              v.draw_sprite_ext("spr_rhythmgame_note", 0, eT, er, e8.colW / 40, 1, 0, eU ? "#808080" : ep ? "#ffff00" : eC.base, eU ? 0.5 : 1);
            } else {
              (eU ? this.deadNotes[eD] : this.notes[eD]).draw(e1, eT, er, 1, 1, eG);
            }
          }
        } else {
          if (e8.up ? er < -20 : er > 500) {
            continue;
          }
          if (eo) {
            v.draw_sprite_ext("spr_rhythmgame_note", 0, eT, er, e8.colW / 40, 1, 0, eu ? "#808080" : eC.base, eu ? 0.5 : 1);
          } else {
            if (eu) {
              e1.globalAlpha = 0.6;
            }
            (eu ? this.deadNotes[eD] : this.notes[eD]).draw(e1, eT, er, 1, 1, eG);
            e1.globalAlpha = 1;
          }
        }
      }
    }
  }
  drawJudgement(v, n, e1) {
    let e3 = this.play;
    let e4 = this.L;
    if (e3.lastJ < 0) {
      return;
    }
    if (e3.lastJAt !== this.jSeen) {
      this.jSeen = e3.lastJAt;
      this.jAt = e1;
      this.jj = e3.lastJ;
    }
    let e7 = this.jj;
    if (this.cfg.judgeHide300 && e7 <= 1) {
      return;
    }
    let e8 = e1 - this.jAt;
    if (e8 < 0 || e8 > 740) {
      return;
    }
    let e9 = dmgMotion(e8);
    drawJudgeWord(v, e7, e4.cx, e4.judgeY + e9[0], e9[1], e9[2], e9[3]);
  }
  drawHud(v, n, e1) {
    let e3 = v.ctx;
    let e4 = this.play;
    let e5 = this.L;
    let e6 = this.cfg;
    if (e6.showCombo !== false) {
      let eD = Math.max(40, e5.x0 - 34);
      let eT = 130;
      let eF = 196;
      let eC = e4.judged > 0 && e4.counts[5] === 0 && e4.combo >= e4.judged;
      let eJ = e4.judged ? Math.min(1, e4.combo / e4.judged) : 0;
      e3.fillStyle = vL.maroon;
      e3.fillRect(eD, eT, 20, eF);
      let eA = Math.round(eF * eJ);
      if (eA > 0) {
        e3.fillStyle = eC ? vL.yellow : vL.orange;
        e3.fillRect(eD, eT + eF - eA, 20, eA);
      }
      e3.fillStyle = "#ffffff";
      e3.fillRect(eD, eT + eF - eA, 20, eA > 0 ? 1 : 0);
      v.draw_sprite_ext("spr_tplogo", 0, eD - 26, eT + 20, 1, 1, 0, "#ffffff", 1);
      if (e4.combo > 0) {
        txt(v, eD - 4, eT + 70, numText(e4.combo), "#ffffff", "fnt_mainbig", "right");
        if (eC && e4.combo >= 10) {
          txt(v, eD - 4, eT + 100, "MAX", vL.yellow, "fnt_main", "right");
        }
      }
    }
    {
      let eG = e5.x1 + 12 + 112 <= 636 ? e5.x1 + 12 : Math.max(4, e5.x0 - 124);
      let ew = 438;
      let eS = Math.max(0, Math.min(1, e4.hp));
      let eQ = Math.round(eS * 100);
      let er = eS < 0.25;
      v.draw_sprite_ext("spr_hpname", 0, eG, ew + 4, 1, 1, 0, "#ffffff", 1);
      let eu = eS <= 0 ? vL.red : er ? vL.yellow : "#ffffff";
      txt(v, eG + 112, ew - 12, hpText(eQ), eu, "fnt_main", "right");
      hudBar(e3, eG + 22, ew + 5, 90, 9, eS, er && Math.floor(e1.tReal / 180) % 2 === 0 ? vL.red : vL.cyan);
    }
    let ev = pad7(e4.score);
    txt(v, 632, 4, ev, "#ffffff", "fnt_mainbig", "right");
    let ez = pct(e4.accuracy);
    txt(v, 632, 36, ez, e4.accuracy >= 0.95 ? vL.yellow : "#ffffff", "fnt_main", "right");
    let en = e4.chart;
    let ee = en.first;
    let eP = Math.max(ee + 1, en.last);
    let eE = n < ee ? 0 : Math.max(0, Math.min(1, (n - ee) / (eP - ee)));
    e3.fillStyle = vL.dk;
    e3.fillRect(534, 56, 98, 2);
    e3.fillStyle = "#ffffff";
    e3.fillRect(534, 56, Math.round(eE * 98), 2);
    if (e6.hitError !== "OFF") {
      this.drawHitError(e3, n, e1.tReal);
    }
    if (e6.keyOverlay) {
      this.drawKeyOverlay(v, e1.keyLabels);
    }
  }
  noteHit(v, n, e1) {
    let e7 = this.heW;
    this.heW = (this.heW + 1) % this.heN;
    this.heErr[e7] = v;
    this.heAt[e7] = e1;
    this.heJ[e7] = n;
    this.heMean = this.heMean * 0.85 + v * 0.15;
  }
  drawHitError(v, n, e1) {
    let e6 = this.play;
    let e7 = this.L;
    let e8 = e6.win;
    let e9 = e6.rate;
    let ev = e8[4] / e9;
    let ez = Math.min(110, e7.width / 2 + 30);
    let en = ez / ev;
    let ee = e7.cx;
    let eP = e7.up ? Math.max(8, e7.hitY - 52) : Math.min(472, e7.hitY + 56);
    for (let eF = 4; eF >= 0; eF--) {
      let eC = Math.round(Math.min(ez, e8[eF] / e9 * en));
      v.fillStyle = zu[eF];
      v.fillRect(ee - eC, eP - 1, eC * 2, 3);
    }
    v.fillStyle = "#ffffff";
    v.fillRect(ee, eP - 6, 1, 13);
    let eE = this.cfg.hitError === "DOTS";
    for (let eJ = 0; eJ < this.heN; eJ++) {
      let eA = e1 - this.heAt[eJ];
      if (eA < 0 || eA > 3500) {
        continue;
      }
      let eG = Math.max(-ev, Math.min(ev, this.heErr[eJ] / e9));
      v.globalAlpha = 1 - eA / 3500;
      v.fillStyle = l[this.heJ[eJ]];
      if (eE) {
        v.fillRect(Math.round(ee + eG * en) - 1, eP - 9, 2, 2);
      } else {
        v.fillRect(Math.round(ee + eG * en), eP - 7, 1, 15);
      }
    }
    v.globalAlpha = 1;
    let eD = Math.max(-ev, Math.min(ev, this.heMean / e9));
    let eT = Math.round(ee + eD * en);
    v.fillStyle = vL.yellow;
    v.fillRect(eT - 3, eP - 13, 7, 2);
    v.fillRect(eT - 2, eP - 11, 5, 2);
    v.fillRect(eT - 1, eP - 9, 3, 1);
  }
  drawKeyOverlay(v, n) {
    let e4 = v.ctx;
    let e5 = this.play;
    let e6 = e5.keys;
    let e7 = 40;
    let e8 = 20;
    let e9 = 640 - e7 - 6;
    let ev = 240 - e6 * (e8 + 2) / 2;
    for (let en = 0; en < e6; en++) {
      let ee = Math.round(ev + en * (e8 + 2));
      let eP = e5.down[en];
      plainBox(e4, e9, ee, e7, e8, eP ? "#ffffff" : vL.dk, eP ? this.cols[en].dark : "#000000", 0.9);
      txt(v, e9 + 4, ee + 2, n ? n[en] : "", eP ? vL.yellow : "#ffffff");
      txt(v, e9 + e7 - 3, ee + 2, numText(e5.presses[en] % 1000), vL.gray, "fnt_main", "right");
    }
  }
};
r(ManiaRenderer, "ManiaRenderer");
var zr = ManiaRenderer;
var zu = ["#ffff00", "#606060", "#4a7a4a", "#7a5020", "#404040"];
function drawHitGraph(v, n, e1, e2, e3, e4) {
  let e6 = v.ctx;
  let e7 = n.win;
  let e8 = e7[4] / n.rate;
  let e9 = e2 + e4 / 2;
  let ev = (e4 / 2 - 3) / e8;
  e6.save();
  e6.fillStyle = "#000000";
  e6.fillRect(e1, e2, e3, e4);
  let en = [[e7[4], "#101010"], [e7[3], "#161616"], [e7[2], "#1c1c1c"], [e7[1], "#242424"], [e7[0], "#2c2c10"]];
  for (let [eD, eT] of en) {
    let eF = Math.round(Math.min(e4 / 2, eD / n.rate * ev));
    e6.fillStyle = eT;
    e6.fillRect(e1, Math.round(e9) - eF, e3, eF * 2);
  }
  e6.fillStyle = vL.gray;
  e6.fillRect(e1, Math.round(e9), e3, 1);
  let eE = n.chart.first;
  let eo = Math.max(eE + 1, n.chart.last);
  for (let eC = 0; eC < n.errN; eC++) {
    let eJ = e1 + (n.errAt[eC] - eE) / (eo - eE) * (e3 - 4) + 2;
    let eA = n.errMs[eC] / n.rate;
    let eG = n.errJ[eC];
    if (eA !== eA) {
      e6.fillStyle = "rgba(255,64,64,0.5)";
      e6.fillRect(Math.round(eJ), e2 + 2, 1, e4 - 4);
      continue;
    }
    let ew = e9 + Math.max(-e8, Math.min(e8, eA)) * ev;
    e6.fillStyle = l[eG];
    e6.fillRect(Math.round(eJ) - 1, Math.round(ew) - 1, 2, 2);
  }
  e6.restore();
  txt(v, e1 + 4, e2 + 1, "EARLY", vL.gray);
  txt(v, e1 + 4, e2 + e4 - 17, "LATE", vL.gray);
}
r(drawHitGraph, "drawHitGraph");
function drawHistogram(v, n, e1, e2, e3, e4) {
  let e7 = v.ctx;
  let e8 = n.win[4] / n.rate;
  let e9 = 41;
  let ev = new Int32Array(e9);
  let ez = 1;
  for (let eE = 0; eE < n.errN; eE++) {
    {
      let eo = n.errMs[eE] / n.rate;
      if (eo !== eo) {
        continue;
      }
      let eD = Math.max(0, Math.min(e9 - 1, Math.round(eo / e8 * (e9 - 1) / 2 + (e9 - 1) / 2)));
      if (++ev[eD] > ez) {
        ez = ev[eD];
      }
    }
  }
  e7.save();
  e7.fillStyle = "#000000";
  e7.fillRect(e1, e2, e3, e4);
  let ee = e3 / e9;
  for (let eF = 0; eF < e9; eF++) {
    let eC = Math.abs((eF - (e9 - 1) / 2) / ((e9 - 1) / 2) * e8);
    let eJ = 4;
    for (let eG = 0; eG < 5; eG++) {
      if (eC <= n.win[eG] / n.rate) {
        {
          eJ = eG;
          break;
        }
      }
    }
    let eA = Math.round(ev[eF] / ez * (e4 - 20));
    e7.fillStyle = l[eJ];
    e7.fillRect(Math.round(e1 + eF * ee + 1), e2 + e4 - 2 - eA, Math.max(1, Math.round(ee - 2)), eA);
  }
  e7.fillStyle = vL.gray;
  e7.fillRect(Math.round(e1 + e3 / 2), e2 + 2, 1, e4 - 4);
  e7.restore();
  txt(v, e1 + 4, e2 + 1, "EARLY", vL.gray);
  txt(v, e1 + e3 - 4, e2 + 1, "LATE", vL.gray, "fnt_main", "right");
}
r(drawHistogram, "drawHistogram");
u();
u();
var zY = {
  x: 32,
  y: 16,
  w: 384,
  h: 448,
  x2: 416,
  y2: 464,
  cx: 224
};
var zx = zY.y + 112;
var zi = 30;
var zb = ["EASY", "NORMAL", "HARD", "LUNATIC"];
var zL = [0.5, 1, 1.2, 1.5];
var zq = ["susie", "noelle", "ralsei"];
var zs = [10000000, 25000000, 50000000, 80000000];
var zp = 14;
var zR = {
  W: 0,
  RED: 1,
  ORANGE: 2,
  YELLOW: 3,
  GREEN: 4,
  CYAN: 5,
  BLUE: 6,
  PURPLE: 7,
  PINK: 8
};
var zO = ["#ffffff", "#ff5050", "#ffa040", "#ffff48", "#58ff78", "#48ffff", "#6a94ff", "#c878ff", "#ff78d8"];
var zI = [];
function defType(v) {
  let n = Object.assign({
    frame: 0,
    frames: 1,
    anim: 4,
    scale: 1,
    r: 3,
    orient: 0,
    spin: 6,
    rot0: 0,
    halo: 0,
    face: 0,
    center: false
  }, v);
  n.id = zI.length;
  zI.push(n);
  return n.id;
}
r(defType, "defType");
var zm = Math.PI / 180;
var zN = Math.PI * 2;
var zf = 4096;
var zK = 256;
var zZ = 1536;
var zH = 2048;
var zd = 40;
var zW = 1;
var zM = 4;
var zg = 8;
var zc = {
  AIM: 1,
  TURN: 2,
  BURST: 3,
  STOP: 4,
  CALL: 5,
  SPEED: 6,
  AIMBURST: 7
};
var zh = {
  SPARK: 0,
  SQUARE: 1,
  RING: 2,
  SHARD: 3,
  SPRITE: 4,
  TEXT: 5,
  FLAKE: 6,
  GLINT: 7,
  SLASH: 8
};
function xorshift(v) {
  let n = v >>> 0 || 2654435769;
  return () => {
    n ^= n << 13;
    n >>>= 0;
    n ^= n >>> 17;
    n ^= n << 5;
    n >>>= 0;
    return n / 4294967296;
  };
}
r(xorshift, "xorshift");
var Sim = class Po {
  constructor() {
    this.bx = new Float32Array(zf);
    this.by = new Float32Array(zf);
    this.bpx = new Float32Array(zf);
    this.bpy = new Float32Array(zf);
    this.bvx = new Float32Array(zf);
    this.bvy = new Float32Array(zf);
    this.bdir = new Float32Array(zf);
    this.bspd = new Float32Array(zf);
    this.bacc = new Float32Array(zf);
    this.blim = new Float32Array(zf);
    this.bw = new Float32Array(zf);
    this.bgrav = new Float32Array(zf);
    this.bage = new Int32Array(zf);
    this.btype = new Uint16Array(zf);
    this.bcol = new Uint8Array(zf);
    this.bflag = new Uint8Array(zf);
    this.bbnc = new Uint8Array(zf);
    this.bdelay = new Uint8Array(zf);
    this.brot = new Float32Array(zf);
    this.bprot = new Float32Array(zf);
    this.bevT = new Int32Array(zf);
    this.bevK = new Uint8Array(zf);
    this.bevA = new Float32Array(zf);
    this.bevB = new Float32Array(zf);
    this.bevC = new Float32Array(zf);
    this.bevD = new Float32Array(zf);
    this.btag = new Int32Array(zf);
    this.blive = new Int32Array(zf);
    this.bpos = new Int32Array(zf);
    this.bn = 0;
    this.bfree = new Int32Array(zf);
    this.bfn = 0;
    this.sx = new Float32Array(zK);
    this.sy = new Float32Array(zK);
    this.spx = new Float32Array(zK);
    this.spy = new Float32Array(zK);
    this.svx = new Float32Array(zK);
    this.svy = new Float32Array(zK);
    this.sdmg = new Float32Array(zK);
    this.skind = new Uint8Array(zK);
    this.slive = new Int32Array(zK);
    this.spos = new Int32Array(zK);
    this.sn = 0;
    this.sfree = new Int32Array(zK);
    this.sfn = 0;
    this.ix = new Float32Array(zZ);
    this.iy = new Float32Array(zZ);
    this.ipx = new Float32Array(zZ);
    this.ipy = new Float32Array(zZ);
    this.ivx = new Float32Array(zZ);
    this.ivy = new Float32Array(zZ);
    this.ikind = new Uint8Array(zZ);
    this.ihome = new Uint8Array(zZ);
    this.iage = new Int32Array(zZ);
    this.ilive = new Int32Array(zZ);
    this.ipos = new Int32Array(zZ);
    this.inn = 0;
    this.ifree = new Int32Array(zZ);
    this.ifn = 0;
    this.qx = new Float32Array(zH);
    this.qy = new Float32Array(zH);
    this.qpx = new Float32Array(zH);
    this.qpy = new Float32Array(zH);
    this.qvx = new Float32Array(zH);
    this.qvy = new Float32Array(zH);
    this.qlife = new Int32Array(zH);
    this.qmax = new Int32Array(zH);
    this.qkind = new Uint8Array(zH);
    this.qcol = new Uint8Array(zH);
    this.qsize = new Float32Array(zH);
    this.qrot = new Float32Array(zH);
    this.qvr = new Float32Array(zH);
    this.qdrag = new Float32Array(zH);
    this.qspr = new Int32Array(zH);
    this.qlive = new Int32Array(zH);
    this.qpos = new Int32Array(zH);
    this.qn = 0;
    this.qfree = new Int32Array(zH);
    this.qfn = 0;
    this.lasers = [];
    for (let v = 0; v < zd; v++) {
      this.lasers.push({
        on: false,
        x: 0,
        y: 0,
        ang: 0,
        pang: 0,
        w: 0,
        len: 0,
        width: 0,
        warn: 0,
        life: 0,
        t: 0,
        col: 0,
        grazeT: 0,
        follow: null,
        fx: 0,
        fy: 0,
        fade: 6
      });
    }
    this.markers = [];
    for (let n = 0; n < 32; n++) {
      this.markers.push({
        on: false,
        kind: "",
        x: 0,
        y: 0,
        t: 0,
        life: 0,
        a: 0,
        b: 0
      });
    }
    this.sndAt = Object.create(null);
    this.hooks = {
      snd: null,
      shake: null,
      event: null
    };
    this.inputZero = {
      l: 0,
      r: 0,
      u: 0,
      d: 0,
      shoot: 0,
      focus: 0,
      bomb: 0,
      tdx: 0,
      tdy: 0,
      touch: 0
    };
    this.reset();
  }
  reset() {
    this.bn = 0;
    this.bfn = 0;
    for (let v = zf - 1; v >= 0; v--) {
      this.bfree[this.bfn++] = v;
    }
    this.sn = 0;
    this.sfn = 0;
    for (let n = zK - 1; n >= 0; n--) {
      this.sfree[this.sfn++] = n;
    }
    this.inn = 0;
    this.ifn = 0;
    for (let e1 = zZ - 1; e1 >= 0; e1--) {
      this.ifree[this.ifn++] = e1;
    }
    this.qn = 0;
    this.qfn = 0;
    for (let e2 = zH - 1; e2 >= 0; e2--) {
      this.qfree[this.qfn++] = e2;
    }
    for (let e3 of this.lasers) {
      e3.on = false;
    }
    for (let e4 of this.markers) {
      e4.on = false;
    }
    this.t = 0;
    this.state = "idle";
    this.flashT = 0;
    this.flashMax = 1;
    this.flashCol = 0;
    this.shakeAmp = 0;
    this.shakeT = 0;
    this.banner = null;
    this.popups = [];
    this.peakBullets = 0;
  }
  start(v) {
    this.reset();
    this.opts = v;
    this.mode = v.mode || "rush";
    this.diff = Math.max(0, Math.min(3, v.diff | 0));
    this.partner = zq.includes(v.partner) ? v.partner : "susie";
    this.bosses = v.bosses;
    this.rand = xorshift(v.seed || 12345);
    let n = this.mode === "practice";
    this.P = {
      x: zY.cx,
      y: zY.y2 - 48,
      px: zY.cx,
      py: zY.y2 - 48,
      focus: 0,
      alive: 1,
      invuln: 60,
      deadT: 0,
      hitT: 0,
      power: n ? 4 : Math.max(2, Math.min(4, +v.power || 2)),
      lives: n ? 9 : this.diff === 0 ? 4 : 3,
      bombs: 3,
      tp: 0,
      graze: 0,
      score: 0,
      shotT: 0,
      optAng: 0,
      deaths: 0,
      bombsUsed: 0,
      focusT: 0,
      tilt: 0,
      lean: 0
    };
    this.extendIdx = 0;
    this.stats = {
      captured: 0,
      cards: 0,
      bosses: 0,
      maxBullets: 0,
      capturedIds: []
    };
    this.hiScoreSeen = 0;
    this.bombT = 0;
    this.bombMax = 1;
    this.bombKind = null;
    this.bombX = 0;
    this.bombY = 0;
    this.boss = {
      x: zY.cx,
      y: zY.y - 80,
      px: zY.cx,
      py: zY.y - 80,
      sx: 0,
      sy: 0,
      tx: 0,
      ty: 0,
      mt: 0,
      md: 0,
      hp: 1,
      hpMax: 1,
      show: 0,
      flashT: 0,
      def: null,
      spr: null,
      sprFrame: 0,
      anim: 0,
      hitR: 26,
      invuln: 0,
      dmgT: 0,
      trail: 0,
      face: 1,
      lastDmgT: -99,
      scale: 2,
      alpha: 1
    };
    this.bi = -1;
    this.pi = -1;
    this.phase = null;
    this.S = null;
    this.pt = 0;
    this.declT = 0;
    this.gapT = 0;
    this.cardFailed = false;
    this.cardBonus = 0;
    this.cardBonusMax = 0;
    this.timer = 0;
    this.timerMax = 0;
    this.itemsHomeT = 0;
    this.endT = 0;
    this.result = null;
    this.state = "play";
    if (n && v.card) {
      this.enterBoss(v.card.boss, true);
      this.beginPhase(v.card.phase);
    } else {
      this.enterBoss(v.startBoss | 0, false);
    }
  }
  lv(v, e1, e2, e3) {
    let e4 = this.diff;
    if (e4 === 0) {
      return v;
    } else if (e4 === 1) {
      return e1;
    } else if (e4 === 2 || e3 === undefined) {
      return e2;
    } else {
      return e3;
    }
  }
  rr(v, n) {
    return v + (n - v) * this.rand();
  }
  aim(v, n) {
    return Math.atan2(this.P.y - n, this.P.x - v);
  }
  snd(v, e1 = 1, e2 = 2, e3 = 1) {
    let e4 = this.sndAt[v];
    if (e4 === undefined || !(this.t - e4 < e2)) {
      this.sndAt[v] = this.t;
      if (this.hooks.snd) {
        this.hooks.snd(v, e1, e3);
      }
    }
  }
  shake(v, n) {
    if (v >= this.shakeAmp || this.shakeT <= 0) {
      this.shakeAmp = v;
      this.shakeT = n;
      this.shakeMax = n;
    }
  }
  flash(v, n) {
    this.flashCol = v;
    this.flashT = n;
    this.flashMax = n;
  }
  emit(v, e1, e2) {
    if (this.hooks.event) {
      this.hooks.event(v, e1, e2);
    }
  }
  shot(v, e1, e2, e3, e4, e5 = 0) {
    if (this.bfn === 0 || v - v !== 0 || e1 - e1 !== 0 || e2 - e2 !== 0 || e3 - e3 !== 0) {
      return -1;
    }
    let e6 = this.bfree[--this.bfn];
    this.bpos[e6] = this.bn;
    this.blive[this.bn++] = e6;
    this.bx[e6] = v;
    this.by[e6] = e1;
    this.bpx[e6] = v;
    this.bpy[e6] = e1;
    this.bdir[e6] = e2;
    this.bspd[e6] = e3;
    this.bvx[e6] = Math.cos(e2) * e3;
    this.bvy[e6] = Math.sin(e2) * e3;
    this.bacc[e6] = 0;
    this.blim[e6] = 0;
    this.bw[e6] = 0;
    this.bgrav[e6] = 0;
    this.bage[e6] = 0;
    this.btype[e6] = e4;
    this.bcol[e6] = e5;
    this.bflag[e6] = 0;
    this.bbnc[e6] = 0;
    this.bdelay[e6] = 0;
    let e7 = zI[e4];
    this.brot[e6] = e7.orient === 1 ? e2 : e7.rot0 * zm;
    this.bprot[e6] = this.brot[e6];
    this.bevT[e6] = -1;
    this.bevK[e6] = 0;
    this.btag[e6] = 0;
    return e6;
  }
  bAcc(v, e1, e2) {
    if (v >= 0) {
      this.bacc[v] = e1;
      this.blim[v] = e2;
    }
    return v;
  }
  bCurve(v, n) {
    if (v >= 0) {
      this.bw[v] = n * zm;
    }
    return v;
  }
  bGrav(v, n) {
    if (v >= 0) {
      this.bgrav[v] = n;
    }
    return v;
  }
  bBounce(v, n) {
    if (v >= 0) {
      this.bbnc[v] = n;
    }
    return v;
  }
  bDelay(v, n) {
    if (v >= 0) {
      this.bdelay[v] = n;
      this.bflag[v] |= zM;
    }
    return v;
  }
  bKeep(v) {
    if (v >= 0) {
      this.bflag[v] |= zg;
    }
    return v;
  }
  bTag(v, n) {
    if (v >= 0) {
      this.btag[v] = n;
    }
    return v;
  }
  bEv(v, e1, e2, e3 = 0, e4 = 0, e5 = 0, e6 = 0) {
    if (v >= 0) {
      this.bevT[v] = e1;
      this.bevK[v] = e2;
      this.bevA[v] = e3;
      this.bevB[v] = e4;
      this.bevC[v] = e5;
      this.bevD[v] = e6;
    }
    return v;
  }
  bSetDir(v, e1, e2) {
    this.bdir[v] = e1;
    if (e2 !== undefined) {
      this.bspd[v] = e2;
    }
    this.bvx[v] = Math.cos(e1) * this.bspd[v];
    this.bvy[v] = Math.sin(e1) * this.bspd[v];
    if (zI[this.btype[v]].orient === 1) {
      this.brot[v] = e1;
    }
  }
  ring(v, e1, e2, e3, e4, e5, e6 = 0) {
    let e7 = zN / e2;
    let e8 = -1;
    for (let e9 = 0; e9 < e2; e9++) {
      let ev = this.shot(v, e1, e3 + e9 * e7, e4, e5, e6);
      if (e9 === 0) {
        e8 = ev;
      }
    }
    return e8;
  }
  fan(v, e1, e2, e3, e4, e5, e6, e7 = 0) {
    if (e2 <= 1) {
      return this.shot(v, e1, e3, e5, e6, e7);
    }
    let e8 = -1;
    for (let e9 = 0; e9 < e2; e9++) {
      let ev = this.shot(v, e1, e3 - e4 / 2 + e4 * e9 / (e2 - 1), e5, e6, e7);
      if (e9 === 0) {
        e8 = ev;
      }
    }
    return e8;
  }
  lastN(v, e1) {
    for (let e2 = this.bn - v; e2 < this.bn; e2++) {
      if (e2 >= 0) {
        e1(this.blive[e2]);
      }
    }
  }
  killBullet(v) {
    let e1 = this.bpos[v];
    let e2 = this.blive[--this.bn];
    this.blive[e1] = e2;
    this.bpos[e2] = e1;
    this.bfree[this.bfn++] = v;
  }
  clearBullets(v, e1 = true, e2 = 0, e3 = 0, e4 = 0) {
    let e5 = e4 * e4;
    for (let e6 = this.bn - 1; e6 >= 0; e6--) {
      let e7 = this.blive[e6];
      if (!e1) {
        let e8 = this.bx[e7] - e2;
        let e9 = this.by[e7] - e3;
        if (e8 * e8 + e9 * e9 > e5) {
          continue;
        }
      }
      if (v && this.bx[e7] > zY.x && this.bx[e7] < zY.x2 && this.by[e7] > zY.y && this.by[e7] < zY.y2) {
        let ev = this.item(this.bx[e7], this.by[e7], 2);
        if (ev >= 0) {
          this.ivx[ev] = 0;
          this.ivy[ev] = -1;
          this.ihome[ev] = 1;
        }
      } else if ((e6 & 3) === 0) {
        this.part(zh.GLINT, this.bx[e7], this.by[e7], 0, -0.5, 10, this.bcol[e7], 1);
      }
      this.killBullet(e7);
    }
  }
  laser(v, e1, e2, e3, e4, e5, e6, e7 = 0, e8 = 0, e9 = null) {
    for (let ev of this.lasers) {
      if (!ev.on) {
        ev.on = true;
        ev.x = v;
        ev.y = e1;
        ev.ang = e2;
        ev.pang = e2;
        ev.w = e8 * zm;
        ev.len = e3;
        ev.width = e4;
        ev.warn = e5;
        ev.life = e6;
        ev.t = 0;
        ev.col = e7;
        ev.grazeT = 0;
        ev.follow = e9;
        ev.fx = e9 ? v - e9.x : 0;
        ev.fy = e9 ? e1 - e9.y : 0;
        ev.fade = 6;
        return ev;
      }
    }
    return null;
  }
  mark(v, e1, e2, e3, e4 = 0, e5 = 0) {
    for (let e6 of this.markers) {
      if (!e6.on) {
        e6.on = true;
        e6.kind = v;
        e6.x = e1;
        e6.y = e2;
        e6.t = 0;
        e6.life = e3;
        e6.a = e4;
        e6.b = e5;
        return e6;
      }
    }
    return null;
  }
  bAlive(v, n) {
    return v >= 0 && this.bpos[v] < this.bn && this.blive[this.bpos[v]] === v && this.btag[v] === n;
  }
  item(v, e1, e2) {
    if (this.ifn === 0) {
      return -1;
    }
    let e3 = this.ifree[--this.ifn];
    this.ipos[e3] = this.inn;
    this.ilive[this.inn++] = e3;
    this.ix[e3] = v;
    this.iy[e3] = e1;
    this.ipx[e3] = v;
    this.ipy[e3] = e1;
    this.ivx[e3] = (this.rand() - 0.5) * 2;
    this.ivy[e3] = -3.5 - this.rand() * 1.5;
    this.ikind[e3] = e2;
    this.ihome[e3] = 0;
    this.iage[e3] = 0;
    return e3;
  }
  killItem(v) {
    let e1 = this.ipos[v];
    let e2 = this.ilive[--this.inn];
    this.ilive[e1] = e2;
    this.ipos[e2] = e1;
    this.ifree[this.ifn++] = v;
  }
  drop(v, e1, e2, e3, e4 = 0) {
    for (let e5 = 0; e5 < e2; e5++) {
      let e6 = this.item(v + this.rr(-40, 40), e1 + this.rr(-30, 20), 0);
      if (e6 >= 0) {
        this.ivy[e6] -= this.rand() * 2;
      }
    }
    for (let e7 = 0; e7 < e3; e7++) {
      let e8 = this.item(v + this.rr(-48, 48), e1 + this.rr(-30, 20), 1);
      if (e8 >= 0) {
        this.ivy[e8] -= this.rand() * 2;
      }
    }
    for (let e9 = 0; e9 < e4; e9++) {
      let ev = this.item(v + this.rr(-30, 30), e1 + this.rr(-20, 10), 3);
      if (ev >= 0) {
        this.ivy[ev] -= 1;
      }
    }
  }
  part(v, e1, e2, e3, e4, e5, e6 = 0, e7 = 1, e8 = -1) {
    if (this.qfn === 0) {
      return -1;
    }
    let e9 = this.qfree[--this.qfn];
    this.qpos[e9] = this.qn;
    this.qlive[this.qn++] = e9;
    this.qx[e9] = e1;
    this.qy[e9] = e2;
    this.qpx[e9] = e1;
    this.qpy[e9] = e2;
    this.qvx[e9] = e3;
    this.qvy[e9] = e4;
    this.qlife[e9] = e5;
    this.qmax[e9] = e5;
    this.qkind[e9] = v;
    this.qcol[e9] = e6;
    this.qsize[e9] = e7;
    this.qrot[e9] = this.rand() * zN;
    this.qvr[e9] = 0;
    this.qdrag[e9] = 0.9;
    this.qspr[e9] = e8;
    return e9;
  }
  burst(v, e1, e2, e3, e4, e5, e6 = zh.SPARK, e7 = 1) {
    for (let e8 = 0; e8 < e2; e8++) {
      let e9 = this.rand() * zN;
      let ev = e3 * (0.3 + this.rand() * 0.7);
      this.part(e6, v, e1, Math.cos(e9) * ev, Math.sin(e9) * ev, e4 + (this.rand() * e4 * 0.5 | 0), e5, e7);
    }
  }
  popup(v, e1, e2, e3 = 0, e4 = 0) {
    if (this.popups.length > 24) {
      this.popups.shift();
    }
    this.popups.push({
      x: v,
      y: e1,
      text: e2,
      col: e3,
      t: 0,
      big: e4
    });
  }
  bossMove(v, e1, e2) {
    let e3 = this.boss;
    e3.sx = e3.x;
    e3.sy = e3.y;
    e3.tx = Math.max(zY.x + 40, Math.min(zY.x2 - 40, v));
    e3.ty = Math.max(zY.y + 40, Math.min(zY.y + 200, e1));
    e3.mt = 0;
    e3.md = Math.max(1, e2);
    if (Math.abs(e3.tx - e3.sx) > 4) {
      e3.face = e3.tx > e3.sx ? 1 : -1;
    }
  }
  bossWander(v, e1 = 70, e2 = 70, e3 = 130) {
    let e4 = this.boss;
    let e5 = e4.x + this.rr(-e1, e1) + (this.P.x - e4.x) * 0.25;
    e5 = Math.max(zY.x + 70, Math.min(zY.x2 - 70, e5));
    this.bossMove(e5, zY.y + this.rr(e2, e3), v);
  }
  bossMoving() {
    return this.boss.mt < this.boss.md;
  }
  damageBoss(v) {
    let e1 = this.boss;
    if (!this.phase || e1.invuln > 0 || this.declT > 0 || this.gapT > 0 || this.phase.survival || e1.hp <= 0) {
      return false;
    }
    let e2 = this.bossDmgMult();
    e1.hp -= v * e2;
    this.P.score += Math.round(v * 10) * 10 * zL[this.diff] / 1;
    e1.dmgT = 2;
    e1.lastDmgT = this.t;
    return true;
  }
  bossDmgMult() {
    if (this.pt < 30) {
      return 0.25;
    } else {
      return 1;
    }
  }
  enterBoss(v, e1) {
    this.bi = v;
    let e2 = this.bosses[v];
    let e3 = this.boss;
    e3.def = e2;
    e3.spr = e2.spr;
    e3.scale = e2.scale || 2;
    e3.hitR = e2.hitR || 26;
    e3.x = zY.cx;
    e3.y = e1 ? zY.y + 100 : zY.y - 90;
    e3.px = e3.x;
    e3.py = e3.y;
    e3.show = 1;
    e3.alpha = 1;
    e3.dying = 0;
    e3.mt = e3.md = 1;
    if (!e1) {
      this.bossMove(zY.cx, zY.y + 100, 50);
    }
    this.pi = -1;
    this.phase = null;
    this.gapT = e1 ? 22 : 6;
    this.introT = e1 ? 0 : e2.line ? 100 : 64;
    if (e1) {
      this.emit("boss", v);
    } else {
      this.banner = {
        kind: "boss",
        text: e2.name,
        sub: e2.title,
        t: 0,
        line: e2.line || null,
        chars: 0
      };
      this.emit("boss", v);
    }
  }
  beginPhase(v) {
    let e1 = this.boss.def;
    this.pi = v;
    let e2 = e1.phases[v];
    this.phase = e2;
    let e3 = this.boss;
    let e4 = this.diff === 0 ? 0.8 : 1;
    e3.hpMax = Math.max(1, e2.hp * e4);
    e3.hp = e3.hpMax;
    e3.invuln = 0;
    this.gapT = 0;
    this.S = {};
    this.pt = 0;
    this.timerMax = e2.time * zi;
    this.timer = this.timerMax;
    this.cardFailed = false;
    this.declT = e2.spell ? 48 : 16;
    let e5 = (this.bi + 1) * 1000000 * zL[this.diff];
    this.cardBonusMax = e2.spell ? e5 : 0;
    this.cardBonus = this.cardBonusMax;
    if (e2.spell) {
      this.stats.cards++;
      this.banner = {
        kind: "spell",
        text: e2.name,
        sub: "",
        t: 0
      };
      this.snd("snd_spellcast", 0.8, 1);
      if (e1.voice) {
        this.snd(e1.voice, 0.7, 1);
      }
      this.flash(0, 8);
      for (let e6 = 0; e6 < 28; e6++) {
        let e7 = this.rand() * zN;
        let e8 = 90 + this.rand() * 60;
        let e9 = this.part(zh.SPARK, e3.x + Math.cos(e7) * e8, e3.y + Math.sin(e7) * e8, -Math.cos(e7) * e8 / 16, -Math.sin(e7) * e8 / 16, 16, e1.col || 0, 1.4);
        if (e9 >= 0) {
          this.qdrag[e9] = 1;
        }
      }
    }
    this.emit("phase", this.bi, v);
    if (e2.init) {
      e2.init(this, this.S);
    }
  }
  endPhase(v) {
    let e1 = this.phase;
    let e2 = this.boss;
    let e3 = e1.spell && !this.cardFailed && (!v || e1.survival);
    this.clearBullets(true);
    for (let e7 of this.lasers) {
      if (e7.on && e7.t < e7.warn + e7.life) {
        e7.t = Math.max(e7.t, e7.warn + e7.life);
      }
    }
    this.itemsHomeT = 45;
    let e4 = 0;
    if (e1.spell) {
      if (e3) {
        e4 = Math.round(this.cardBonus / 10) * 10;
        this.P.score += e4;
        this.stats.captured++;
        this.stats.capturedIds.push(this.cardId(this.bi, this.pi));
        this.banner = {
          kind: "capture",
          text: "SPELL CARD BONUS!!",
          sub: String(e4),
          t: 0
        };
        this.snd("snd_great_shine", 0.9, 1);
      } else {
        this.banner = {
          kind: "failed",
          text: "BONUS FAILED...",
          sub: "",
          t: 0
        };
      }
      this.emit("card", this.cardId(this.bi, this.pi), e3);
    }
    let e5 = this.pi >= e2.def.phases.length - 1;
    let e6 = this.mode === "practice";
    if (!e6) {
      if (!v || e1.spell) {
        this.drop(e2.x, e2.y, e5 ? 10 : 6, e5 ? 14 : 8, e1.spell ? 1 : 0);
      } else {
        this.drop(e2.x, e2.y, 4, 3, 0);
      }
    }
    this.snd(e5 ? "snd_badexplosion" : "snd_bomb", e5 ? 1 : 0.6, 1);
    this.burst(e2.x, e2.y, e5 ? 40 : 18, e5 ? 9 : 6, 16, e2.def.col || 0, zh.SPARK, 1.6);
    this.part(zh.RING, e2.x, e2.y, 0, 0, e5 ? 24 : 14, 0, e5 ? 6 : 3);
    this.shake(e5 ? 7 : 3, e5 ? 24 : 8);
    if (e5) {
      this.flash(0, 16);
    }
    this.phase = null;
    if (e6) {
      this.finish("practice", e3);
      return;
    }
    if (e5) {
      this.stats.bosses++;
      let e8 = (this.bi + 1) * 500000 * zL[this.diff];
      this.P.score += e8;
      this.popup(e2.x, e2.y + 40, String(e8), 3, 1);
      e2.dying = 50;
      this.emit("bossDown", this.bi);
    } else {
      this.gapT = 40;
    }
  }
  finish(v, e1) {
    this.state = "ending";
    this.endT = v === "over" ? 50 : 70;
    if (v === "clear") {
      let e2 = this.P;
      let e3 = (Math.max(0, e2.lives) * 3000000 + e2.bombs * 1000000) * zL[this.diff];
      e2.score += e3;
    }
    this.result = {
      kind: v,
      captured: !!e1
    };
  }
  cardId(v, n) {
    return this.bosses[v].id + ":" + n;
  }
  typeLine(v) {
    if (v.t - zp <= 0) {
      return;
    }
    let e1 = 0;
    for (let e3 = 0; e3 < v.line.length; e3++) {
      e1 += v.line[e3].length;
    }
    if (v.chars >= e1) {
      return;
    }
    v.chars++;
    let e2 = this.boss.def;
    if (e2 && e2.txt && v.chars & 1) {
      this.snd(e2.txt, 0.5, 2);
    }
  }
  bomb() {
    let v = this.P;
    if (this.bombT > 0 || v.bombs <= 0 || !v.alive || this.state !== "play") {
      return false;
    }
    v.bombs--;
    v.bombsUsed++;
    let e1 = this.partner;
    this.bombKind = e1;
    this.bombMax = e1 === "susie" ? 60 : e1 === "noelle" ? 84 : 72;
    this.bombT = this.bombMax;
    this.bombX = v.x;
    this.bombY = v.y;
    v.invuln = Math.max(v.invuln, this.bombMax + (e1 === "ralsei" ? 45 : 25));
    if (this.phase && this.phase.spell) {
      this.cardFailed = true;
    }
    this.clearBullets(e1 === "ralsei" || e1 === "noelle", true);
    for (let e2 of this.lasers) {
      if (e2.on) {
        e2.t = Math.max(e2.t, e2.warn + e2.life);
      }
    }
    this.itemsHomeT = Math.max(this.itemsHomeT, this.bombMax);
    if (e1 === "susie") {
      this.snd("snd_rudebuster_swing", 1, 1);
      this.shake(3, 10);
    } else if (e1 === "noelle") {
      this.snd("snd_snowgrave", 0.9, 1);
      this.flash(5, 20);
    } else {
      this.snd("snd_spell_pacify", 1, 1);
      this.flash(3, 12);
    }
    this.emit("bomb", e1);
    return true;
  }
  kill() {
    let v = this.P;
    v.alive = 0;
    v.deadT = 34;
    v.deaths++;
    v.hitT = 0;
    this.cardFailed = true;
    this.snd("snd_break2", 1, 1);
    this.shake(5, 14);
    this.flash(1, 6);
    for (let e1 = 0; e1 < 6; e1++) {
      let e2 = -Math.PI / 2 + (e1 - 2.5) * 0.5;
      this.part(zh.SHARD, v.x, v.y, Math.cos(e2) * 3.2, Math.sin(e2) * 3.2 - 1, 40, 1, 1);
    }
    this.burst(v.x, v.y, 16, 7, 14, 1, zh.SPARK, 1.3);
    this.part(zh.RING, v.x, v.y, 0, 0, 18, 1, 4);
    this.clearBullets(false, true);
    for (let e3 of this.lasers) {
      if (e3.on) {
        e3.t = Math.max(e3.t, e3.warn + e3.life);
      }
    }
    if (this.mode !== "practice") {
      let e4 = Math.min(1, v.power);
      v.power = Math.max(0, v.power - 1);
      let e5 = Math.round(e4 / 0.25);
      for (let e6 = 0; e6 < e5; e6++) {
        let e7 = this.item(v.x + this.rr(-24, 24), v.y - 10, 3);
        if (e7 >= 0) {
          this.ivy[e7] = -5 - e6 * 0.6;
          this.ivx[e7] = (e6 - (e5 - 1) / 2) * 1.2;
        }
      }
      v.lives--;
    }
    this.emit("death");
  }
  respawn() {
    let v = this.P;
    v.alive = 1;
    v.x = zY.cx;
    v.y = zY.y2 + 20;
    v.px = v.x;
    v.py = v.y;
    v.invuln = 100;
    v.entering = 16;
    v.bombs = Math.max(v.bombs, 3);
  }
  addPower(v) {
    let e1 = this.P;
    let e2 = Math.floor(e1.power);
    if (e1.power >= 4) {
      e1.score += 2000;
      return;
    }
    e1.power = Math.min(4, e1.power + v);
    if (Math.floor(e1.power) > e2) {
      this.popup(e1.x, e1.y - 24, e1.power >= 4 ? "MAX" : "POWER UP", 2);
      this.snd("snd_power", 0.6, 4);
    }
  }
  addTP(v) {
    let n = this.P;
    n.tp += v;
    if (n.tp >= 100) {
      n.tp -= 100;
      if (n.bombs < 8) {
        n.bombs++;
        this.popup(n.x, n.y - 28, "+1 SPELL", 5);
        this.snd("snd_boost", 0.7, 2);
      } else {
        n.score += 100000;
      }
    }
  }
  pointValue() {
    return 10000 + this.P.graze * 20;
  }
  tick(v) {
    v ||= this.inputZero;
    this.t++;
    if (this.state === "idle" || this.state === "done") {
      return;
    }
    let e1 = this.P;
    if (this.flashT > 0) {
      this.flashT--;
    }
    if (this.shakeT > 0) {
      this.shakeT--;
    }
    if (this.banner) {
      let e2 = this.banner;
      e2.t++;
      if (e2.t > (e2.kind === "spell" ? 1000000000 : e2.kind === "boss" ? e2.line ? 108 : 76 : 90)) {
        this.banner = null;
      } else if (e2.line) {
        this.typeLine(e2);
      }
    }
    for (let e3 = this.popups.length - 1; e3 >= 0; e3--) {
      let e4 = this.popups[e3];
      e4.t++;
      e4.y -= e4.big ? 0.4 : 0.8;
      if (e4.t > (e4.big ? 70 : 40)) {
        this.popups.splice(e3, 1);
      }
    }
    this.tickPlayer(v);
    this.tickBoss();
    this.tickPhase();
    this.tickBullets();
    this.tickLasers();
    this.tickShots();
    this.tickItems();
    this.tickParticles();
    this.tickBomb();
    for (let e5 of this.markers) {
      if (e5.on && ++e5.t >= e5.life) {
        e5.on = false;
      }
    }
    if (this.mode !== "practice" && this.extendIdx < zs.length && e1.score >= zs[this.extendIdx] * zL[this.diff]) {
      this.extendIdx++;
      e1.lives++;
      this.popup(e1.x, e1.y - 34, "SOUL UP!", 1, 1);
      this.snd("snd_power", 1, 1);
      this.flash(1, 6);
    }
    if (this.bn > this.stats.maxBullets) {
      this.stats.maxBullets = this.bn;
    }
    if (this.state === "ending" && --this.endT <= 0) {
      this.state = "done";
      this.emit("done", this.result.kind);
    }
  }
  tickPlayer(v) {
    let e1 = this.P;
    e1.px = e1.x;
    e1.py = e1.y;
    if (e1.invuln > 0) {
      e1.invuln--;
    }
    e1.optAng += 0.12;
    if (!e1.alive) {
      if (this.state === "play" && --e1.deadT <= 0) {
        if (e1.lives < 0 || this.mode === "practice") {
          this.finish("over");
        } else {
          this.respawn();
        }
      }
      return;
    }
    if (e1.hitT > 0) {
      if (v.bomb && e1.bombs > 0 && this.bombT <= 0) {
        e1.hitT = 0;
        this.bomb();
      } else if (--e1.hitT <= 0) {
        this.kill();
        return;
      }
    }
    if (e1.entering > 0) {
      e1.entering--;
      e1.y -= 4.2;
      e1.py = e1.y + 4.2;
      return;
    }
    let e2 = v.focus ? 1 : 0;
    e1.focus = e2;
    e1.focusT = e2 ? Math.min(8, e1.focusT + 1) : Math.max(0, e1.focusT - 1);
    let e3 = e2 ? 3.6 : 8;
    let e4 = (v.r ? 1 : 0) - (v.l ? 1 : 0);
    let e5 = (v.d ? 1 : 0) - (v.u ? 1 : 0);
    if (e4 && e5) {
      e4 *= 0.7071;
      e5 *= 0.7071;
    }
    let e6 = e4 * e3;
    let e7 = e5 * e3;
    if (v.tdx || v.tdy) {
      let e8 = Math.hypot(v.tdx, v.tdy);
      let e9 = e8 > 20 ? 20 / e8 : 1;
      e6 += v.tdx * e9;
      e7 += v.tdy * e9;
    }
    e1.x = Math.max(zY.x + 10, Math.min(zY.x2 - 10, e1.x + e6));
    e1.y = Math.max(zY.y + 16, Math.min(zY.y2 - 14, e1.y + e7));
    e1.lean += ((e6 > 0.5 ? 1 : e6 < -0.5 ? -1 : 0) - e1.lean) * 0.35;
    if (v.bomb) {
      this.bomb();
    }
    if ((v.shoot || v.touch) && this.state === "play" && e1.shotT <= 0) {
      this.fire(e2);
      e1.shotT = 2;
    }
    if (e1.shotT > 0) {
      e1.shotT--;
    }
  }
  optionPos(v, e1, e2, e3) {
    let e4 = this.P;
    let e5 = e4.focusT / 8;
    let e6 = v & 1 ? 1 : -1;
    let e7 = (v >> 1) + 1;
    let e8 = e6 * (18 + (e7 - 1) * 16);
    let e9 = 6 - (e7 - 1) * 10;
    let ev = e6 * (10 + (e7 - 1) * 8);
    let ez = -14 - (e7 - 1) * 8;
    let en = Math.sin(e4.optAng + v) * 1.5;
    e3.x = e4.x + e8 + (ev - e8) * e5;
    e3.y = e4.y + e9 + (ez - e9) * e5 + en;
    return e3;
  }
  fire(v) {
    let e1 = this.P;
    this.pshot(e1.x - 5, e1.y - 8, 0, -22, 1.6, 0);
    this.pshot(e1.x + 5, e1.y - 8, 0, -22, 1.6, 0);
    let e2 = Math.min(4, Math.floor(e1.power));
    let e3 = this._opt ||= {
      x: 0,
      y: 0
    };
    for (let e4 = 0; e4 < e2; e4++) {
      this.optionPos(e4, e2, v, e3);
      let e5 = e4 & 1 ? 1 : -1;
      let e6 = (e4 >> 1) + 1;
      let e7 = v ? 0 : e5 * (0.1 + e6 * 0.12);
      this.pshot(e3.x, e3.y - 4, Math.sin(e7) * 20, -Math.cos(e7) * 20, v ? 1.25 : 1, 1);
    }
    this.snd("snd_heartshot_dr_b", 0.16, 4);
  }
  pshot(v, e1, e2, e3, e4, e5) {
    if (this.sfn === 0) {
      return;
    }
    let e6 = this.sfree[--this.sfn];
    this.spos[e6] = this.sn;
    this.slive[this.sn++] = e6;
    this.sx[e6] = v;
    this.sy[e6] = e1;
    this.spx[e6] = v;
    this.spy[e6] = e1;
    this.svx[e6] = e2;
    this.svy[e6] = e3;
    this.sdmg[e6] = e4;
    this.skind[e6] = e5;
  }
  killShot(v) {
    let e1 = this.spos[v];
    let e2 = this.slive[--this.sn];
    this.slive[e1] = e2;
    this.spos[e2] = e1;
    this.sfree[this.sfn++] = v;
  }
  tickShots() {
    let v = this.boss;
    let e1 = v.show && this.phase && v.hp > 0;
    for (let e2 = this.sn - 1; e2 >= 0; e2--) {
      let e3 = this.slive[e2];
      this.spx[e3] = this.sx[e3];
      this.spy[e3] = this.sy[e3];
      this.sx[e3] += this.svx[e3];
      this.sy[e3] += this.svy[e3];
      if (this.sy[e3] < zY.y - 20 || this.sx[e3] < zY.x - 20 || this.sx[e3] > zY.x2 + 20) {
        this.killShot(e3);
        continue;
      }
      if (e1) {
        let e4 = this.sx[e3] - v.x;
        let e5 = this.sy[e3] - v.y;
        let e6 = v.hitR + 6;
        if (Math.abs(e4) < e6 && e5 < e6 && e5 + -this.svy[e3] > -e6) {
          if (this.damageBoss(this.sdmg[e3])) {
            if ((e2 & 1) === 0) {
              let e7 = this.part(zh.SPRITE, this.sx[e3], Math.max(this.sy[e3], v.y + 4), 0, -1, 10, 0, 1, 0);
              if (e7 >= 0) {
                this.qrot[e7] = -Math.PI / 2;
              }
            }
            this.snd("snd_damage", 0.22, 5);
          } else if ((e2 & 3) === 0) {
            this.part(zh.GLINT, this.sx[e3], this.sy[e3], 0, -1, 6, 3, 1);
          }
          this.killShot(e3);
        }
      }
    }
  }
  tickBoss() {
    let v = this.boss;
    v.px = v.x;
    v.py = v.y;
    v.anim++;
    if (v.dmgT > 0) {
      v.dmgT--;
    }
    if (v.invuln > 0) {
      v.invuln--;
    }
    if (v.mt < v.md) {
      v.mt++;
      let e1 = v.mt / v.md;
      let e2 = 1 - (1 - e1) * (1 - e1);
      v.x = v.sx + (v.tx - v.sx) * e2;
      v.y = v.sy + (v.ty - v.sy) * e2;
      if (Math.abs(v.tx - v.sx) + Math.abs(v.ty - v.sy) > 40 && v.mt & 1) {
        v.trail = 6;
      }
    }
    if (v.trail > 0) {
      v.trail--;
    }
    if (v.dying > 0) {
      v.dying--;
      if (v.dying % 6 === 0) {
        this.burst(v.x + this.rr(-30, 30), v.y + this.rr(-30, 30), 10, 6, 14, v.def.col || 0, zh.SPARK, 1.4);
        this.snd("snd_bomb", 0.5, 5);
        this.shake(3, 5);
      }
      v.alpha = Math.max(0, v.dying / 50);
      if (v.dying === 0) {
        v.show = 0;
        this.part(zh.RING, v.x, v.y, 0, 0, 30, 0, 9);
        this.flash(0, 14);
        this.shake(8, 20);
        this.snd("snd_badexplosion", 1, 1);
        if (this.bi + 1 >= this.bosses.length || this.mode === "boss") {
          this.finish("clear");
        } else {
          this.nextBossT = 70;
        }
      }
    }
    if (this.nextBossT > 0 && --this.nextBossT === 0) {
      this.enterBoss(this.bi + 1, false);
    }
  }
  tickPhase() {
    if (this.state !== "play") {
      return;
    }
    let v = this.boss;
    if (!v.def || v.dying > 0 || !v.show) {
      return;
    }
    if (this.introT > 0) {
      this.introT--;
      return;
    }
    if (!this.phase) {
      if (this.gapT > 0) {
        this.gapT--;
        if (this.gapT === 20 && this.pi + 1 < v.def.phases.length) {
          this.bossMove(zY.cx, zY.y + 100, 20);
        }
        return;
      }
      if (this.pi + 1 < v.def.phases.length) {
        this.beginPhase(this.pi + 1);
      }
      return;
    }
    if (this.declT > 0) {
      this.declT--;
      if (this.declT === 0 && this.banner && this.banner.kind === "spell") {
        this.banner.settled = 1;
      }
      return;
    }
    let n = this.phase;
    this.pt++;
    this.timer--;
    if (n.spell && !this.cardFailed && !n.survival) {
      this.cardBonus = this.cardBonusMax * (0.4 + Math.max(0, this.timer) * 0.6 / this.timerMax);
    }
    if (this.timer <= zi * 10 && this.timer > 0 && this.timer % zi === 0) {
      this.snd(this.timer <= zi * 5 ? "snd_bell" : "snd_menumove", this.timer <= zi * 5 ? 0.35 : 0.5, 1);
    }
    if (n.tick) {
      n.tick(this, this.S, this.pt);
    }
    if (v.hp <= 0) {
      this.endPhase(false);
      return;
    }
    if (this.timer <= 0) {
      this.endPhase(true);
      return;
    }
  }
  tickBullets() {
    let e1 = this.P;
    let e2 = e1.x;
    let e3 = e1.y;
    let e4 = e1.px;
    let e5 = e1.py;
    let e6 = e1.alive && e1.invuln <= 0 && e1.hitT <= 0 && this.state === "play" && !(e1.entering > 0);
    let e7 = e1.alive && this.state === "play";
    let e8 = 2.5;
    let e9 = 18;
    let ev = 0;
    for (let ez = this.bn - 1; ez >= 0; ez--) {
      let en = this.blive[ez];
      this.bpx[en] = this.bx[en];
      this.bpy[en] = this.by[en];
      this.bprot[en] = this.brot[en];
      let ee = ++this.bage[en];
      let eP = zI[this.btype[en]];
      if (this.bdelay[en] > 0 && --this.bdelay[en] === 0) {
        this.bflag[en] &= ~zM;
      }
      if (this.bevT[en] === ee && this.bulletEvent(en)) {
        continue;
      }
      let eE = this.bacc[en];
      let eo = this.bw[en];
      let eD = this.bgrav[en];
      if (eE !== 0 || eo !== 0) {
        let ew = this.bspd[en] + eE;
        if (eE > 0 && ew > this.blim[en]) {
          ew = this.blim[en];
        } else if (eE < 0 && ew < this.blim[en]) {
          ew = this.blim[en];
        }
        this.bspd[en] = ew;
        let eS = this.bdir[en] + eo;
        this.bdir[en] = eS;
        this.bvx[en] = Math.cos(eS) * ew;
        this.bvy[en] = Math.sin(eS) * ew;
        if (eP.orient === 1) {
          this.brot[en] = eS;
        }
      }
      if (eD !== 0) {
        this.bvy[en] += eD;
        if (this.bvy[en] > 7) {
          this.bvy[en] = 7;
        }
        if (eP.orient === 1) {
          this.brot[en] = Math.atan2(this.bvy[en], this.bvx[en]);
        }
      }
      let eT = this.bx[en] + this.bvx[en];
      let eF = this.by[en] + this.bvy[en];
      if (eP.orient === 2) {
        this.brot[en] += eP.spin * zm;
      }
      if (this.bbnc[en] > 0) {
        let eQ = false;
        if (eT < zY.x + 6 && this.bvx[en] < 0) {
          this.bvx[en] = -this.bvx[en];
          eQ = true;
        } else if (eT > zY.x2 - 6 && this.bvx[en] > 0) {
          this.bvx[en] = -this.bvx[en];
          eQ = true;
        }
        if (eF < zY.y + 6 && this.bvy[en] < 0) {
          this.bvy[en] = -this.bvy[en];
          eQ = true;
        }
        if (eQ) {
          this.bbnc[en]--;
          this.bdir[en] = Math.atan2(this.bvy[en], this.bvx[en]);
          if (eP.orient === 1) {
            this.brot[en] = this.bdir[en];
          }
        }
      }
      this.bx[en] = eT;
      this.by[en] = eF;
      let eC = 24 + eP.r * 2;
      if ((eT < zY.x - eC || eT > zY.x2 + eC || eF < zY.y - eC - (ee < 90 ? 120 : 0) || eF > zY.y2 + eC) && (!(this.bflag[en] & zg) || !(ee < 400))) {
        this.killBullet(en);
        continue;
      }
      let eJ = eT - e2;
      let eA = eF - e3;
      if (eJ > 24 + eP.r || eJ < -24 - eP.r || eA > 24 + eP.r || eA < -24 - eP.r || this.bflag[en] & zM) {
        continue;
      }
      let eG = eP.r + e8;
      if (e6) {
        let er = this.bpx[en] - e4;
        let eu = this.bpy[en] - e5;
        let ek = eJ - er;
        let eV = eA - eu;
        let eY = ek * ek + eV * eV;
        let ex = eY > 0 ? -(er * ek + eu * eV) / eY : 1;
        if (ex < 0) {
          ex = 0;
        } else if (ex > 1) {
          ex = 1;
        }
        let ei = er + ek * ex;
        let eb = eu + eV * ex;
        if (ei * ei + eb * eb < eG * eG) {
          e1.hitT = 4;
          this.snd("snd_hurt1", 0.9, 1);
          this.flash(1, 3);
          this.killBullet(en);
          continue;
        }
      }
      if (e7 && !(this.bflag[en] & zW)) {
        let eL = e9 + eP.r;
        if (eJ * eJ + eA * eA < eL * eL) {
          this.bflag[en] |= zW;
          ev++;
        }
      }
    }
    if (ev) {
      this.grazeN(ev);
    }
    if (this.bn > this.peakBullets) {
      this.peakBullets = this.bn;
    }
  }
  grazeN(v) {
    let e1 = this.P;
    e1.graze += v;
    e1.score += v * (200 + Math.floor(e1.graze / 10) * 10);
    this.addTP(v * 2.5);
    for (let e2 = 0; e2 < Math.min(v, 3); e2++) {
      let e3 = this.rand() * zN;
      this.part(zh.SQUARE, e1.x, e1.y, Math.cos(e3) * 3, Math.sin(e3) * 3, 9, 0, 1);
    }
    this.P.grazeFlash = 6;
    this.snd("snd_graze", 0.45, 3);
  }
  bulletEvent(v) {
    let e1 = this.bevK[v];
    this.bevT[v] = -1;
    let e2 = this.bevA[v];
    let e3 = this.bevB[v];
    let e4 = this.bevC[v];
    let e5 = this.bevD[v];
    switch (e1) {
      case zc.AIM:
        this.bacc[v] = 0;
        this.bw[v] = 0;
        this.bSetDir(v, this.aim(this.bx[v], this.by[v]) + e2, e3);
        return false;
      case zc.TURN:
        this.bSetDir(v, this.bdir[v] + e2, e3 >= 0 ? e3 : this.bspd[v]);
        return false;
      case zc.SPEED:
        this.bspd[v] = e2;
        this.bacc[v] = e3;
        this.blim[v] = e4;
        this.bSetDir(v, this.bdir[v]);
        return false;
      case zc.STOP:
        this.bacc[v] = 0;
        this.bw[v] = 0;
        this.bgrav[v] = 0;
        this.bSetDir(v, this.bdir[v], 0);
        return false;
      case zc.BURST:
      case zc.AIMBURST:
        {
          let e6 = this.bx[v];
          let e7 = this.by[v];
          let e8 = e2 | 0;
          let e9 = e1 === zc.AIMBURST ? this.aim(e6, e7) : this.rand() * zN;
          this.killBullet(v);
          this.ring(e6, e7, e8, e9, e3, e4 | 0, e5 | 0);
          this.part(zh.RING, e6, e7, 0, 0, 10, e5 | 0, 1.2);
          return true;
        }
      case zc.CALL:
        {
          let ev = this.phase && this.phase.ev;
          if (ev) {
            return ev(this, this.S, v, e2, e3) === true;
          } else {
            return false;
          }
        }
    }
    return false;
  }
  tickLasers() {
    let v = this.P;
    let e1 = v.alive && v.invuln <= 0 && v.hitT <= 0 && this.state === "play" && !(v.entering > 0);
    for (let e2 of this.lasers) {
      if (!e2.on) {
        continue;
      }
      e2.t++;
      e2.pang = e2.ang;
      e2.ang += e2.w;
      if (e2.follow) {
        e2.x = e2.follow.x + e2.fx;
        e2.y = e2.follow.y + e2.fy;
      }
      let e3 = e2.warn + e2.life + e2.fade;
      if (e2.t >= e3) {
        e2.on = false;
        continue;
      }
      if (e2.t <= e2.warn + 2 || e2.t > e2.warn + e2.life) {
        continue;
      }
      let e4 = Math.cos(e2.ang);
      let e5 = Math.sin(e2.ang);
      let e6 = v.x - e2.x;
      let e7 = v.y - e2.y;
      let e8 = e6 * e4 + e7 * e5;
      if (e8 < 0 || e8 > e2.len) {
        continue;
      }
      let e9 = Math.abs(-e6 * e5 + e7 * e4);
      let ev = e2.width * 0.5 * 0.72;
      if (e1 && e9 < ev + 1.5) {
        v.hitT = 4;
        this.snd("snd_hurt1", 0.9, 1);
        this.flash(1, 3);
        continue;
      }
      if (v.alive && e9 < ev + 20 && e2.grazeT <= 0) {
        e2.grazeT = 6;
        this.grazeN(1);
      }
      if (e2.grazeT > 0) {
        e2.grazeT--;
      }
    }
  }
  tickItems() {
    let v = this.P;
    let e1 = v.alive && (v.y < zx || this.itemsHomeT > 0 || this.bombT > 0);
    if (this.itemsHomeT > 0) {
      this.itemsHomeT--;
    }
    for (let e2 = this.inn - 1; e2 >= 0; e2--) {
      let e3 = this.ilive[e2];
      this.ipx[e3] = this.ix[e3];
      this.ipy[e3] = this.iy[e3];
      this.iage[e3]++;
      let e4 = this.ikind[e3];
      if (v.alive && (this.ihome[e3] || e1)) {
        this.ihome[e3] ||= 2;
        let e8 = v.x - this.ix[e3];
        let e9 = v.y - this.iy[e3];
        let ev = Math.hypot(e8, e9) || 1;
        let ez = e4 === 2 ? Math.min(14, 3 + this.iage[e3] * 0.6) : 13;
        this.ix[e3] += e8 / ev * Math.min(ez, ev);
        this.iy[e3] += e9 / ev * Math.min(ez, ev);
      } else {
        if (e4 === 2) {
          this.iy[e3] += this.ivy[e3];
          this.ivy[e3] = Math.min(this.ivy[e3] + 0.1, 2);
        } else {
          this.ivx[e3] *= 0.92;
          this.ivy[e3] = Math.min(this.ivy[e3] + 0.2, 2.8);
          this.ix[e3] += this.ivx[e3];
          this.iy[e3] += this.ivy[e3];
        }
        if (this.iy[e3] > zY.y2 + 16) {
          this.killItem(e3);
          continue;
        }
      }
      let e5 = this.ix[e3] - v.x;
      let e6 = this.iy[e3] - v.y;
      let e7 = e5 * e5 + e6 * e6;
      if (v.alive && e7 < 1600 && !this.ihome[e3]) {
        this.ihome[e3] = 1;
      }
      if (v.alive && e7 < 400) {
        this.collect(e3, e4);
        this.killItem(e3);
      }
    }
  }
  collect(v, e1) {
    let e2 = this.P;
    if (e1 === 0) {
      this.addPower(0.05);
      e2.score += 100;
      this.snd("snd_coin", 0.14, 3, 1.3);
    } else if (e1 === 3) {
      this.addPower(0.25);
      e2.score += 500;
      this.snd("snd_coin", 0.2, 3, 1.1);
    } else if (e1 === 1) {
      let e3 = this.ihome[v] === 2 || this.iy[v] < zx;
      let e4 = e3 ? this.pointValue() : Math.round(this.pointValue() * Math.max(0.2, 1 - (this.iy[v] - zx) / (zY.y2 - zx)) / 10) * 10;
      e2.score += e4;
      if (e3 || e4 > 4000) {
        this.popup(this.ix[v], this.iy[v] - 8, String(e4), e3 ? 3 : 0);
      }
      this.snd("snd_coin", 0.14, 3, 1.5);
    } else if (e1 === 2) {
      e2.score += 100 + Math.floor(e2.graze / 20) * 10;
    }
  }
  tickParticles() {
    for (let v = this.qn - 1; v >= 0; v--) {
      let e1 = this.qlive[v];
      this.qpx[e1] = this.qx[e1];
      this.qpy[e1] = this.qy[e1];
      if (--this.qlife[e1] <= 0) {
        let e3 = this.qpos[e1];
        let e4 = this.qlive[--this.qn];
        this.qlive[e3] = e4;
        this.qpos[e4] = e3;
        this.qfree[this.qfn++] = e1;
        continue;
      }
      this.qx[e1] += this.qvx[e1];
      this.qy[e1] += this.qvy[e1];
      let e2 = this.qdrag[e1];
      this.qvx[e1] *= e2;
      this.qvy[e1] *= e2;
      if (this.qkind[e1] === zh.SHARD) {
        this.qvy[e1] += 0.25;
      }
      if (this.qkind[e1] === zh.FLAKE) {
        this.qvy[e1] += 0.03;
        this.qx[e1] += Math.sin((this.t + e1) * 0.1) * 0.6;
      }
      this.qrot[e1] += this.qvr[e1];
    }
  }
  tickBomb() {
    if (this.bombT <= 0) {
      return;
    }
    let v = this.bombKind;
    let e1 = this.P;
    let e2 = this.boss;
    let e3 = this.bombMax - this.bombT;
    this.bombT--;
    let e4 = e2.show && this.phase && e2.hp > 0;
    if (v === "susie") {
      let e5 = e1.y - e3 * 12;
      this.bombY = e5;
      this.bombX = e1.x;
      this.clearBullets(false, false, e1.x, e5, 90);
      if (e3 % 3 === 0) {
        this.part(zh.SPRITE, e1.x + this.rr(-30, 30), e5 + this.rr(-10, 30), this.rr(-1, 1), -2, 12, 0, 1, 1);
      }
      if (e4 && Math.abs(e2.x - e1.x) < 110 && e5 < e2.y + 60 && e5 > e2.y - 120 && this.damageBossBomb(3.2) && e3 % 4 === 0) {
        this.snd("snd_rudebuster_hit", 0.8, 6);
        this.shake(4, 6);
        this.burst(e2.x, e2.y, 6, 8, 10, 7, zh.SPARK, 1.4);
      }
      if (this.bombT === 0) {
        this.bombY = 0;
      }
      if (e5 < zY.y - 60 && e3 % 10 === 0) {
        this.clearBullets(false, true);
      }
    } else if (v === "noelle") {
      if (e3 % 2 === 0) {
        let e6 = this.part(zh.FLAKE, this.rr(zY.x, zY.x2), zY.y - 10, this.rr(-1, 1), this.rr(2, 5), 60, 5, this.rr(0.6, 1.4));
        if (e6 >= 0) {
          this.qvr[e6] = 0.05;
        }
      }
      if (e3 % 6 === 0) {
        this.clearBullets(true, true);
      }
      if (e4 && e3 > 20) {
        this.damageBossBomb(1.8);
      }
      if (e3 === 24) {
        this.snd("snd_icespell", 0.8, 1);
        this.shake(3, 16);
      }
    } else {
      if (e3 % 4 === 0) {
        this.clearBullets(true, true);
      }
      if (e3 % 5 === 0) {
        let e7 = this.part(zh.SPRITE, e1.x + this.rr(-120, 120), e1.y + this.rr(-160, 20), 0, -1.2, 24, 0, 1, 2);
        if (e7 >= 0) {
          this.qdrag[e7] = 1;
        }
      }
      if (e4 && e3 > 12) {
        this.damageBossBomb(0.9);
      }
    }
  }
  damageBossBomb(v) {
    let n = this.boss;
    if (!this.phase || this.declT > 0 || this.phase.survival || n.hp <= 0) {
      return false;
    } else {
      n.hp -= v * this.bossDmgMult();
      n.dmgT = 2;
      this.P.score += Math.round(v * 10) * 10;
      return true;
    }
  }
  counts() {
    return {
      bullets: this.bn,
      shots: this.sn,
      items: this.inn,
      parts: this.qn,
      lasers: this.lasers.filter(v => v.on).length
    };
  }
};
r(Sim, "Sim");
var zl = Sim;
var zj = Math.PI * 2;
var za = Math.PI / 180;
var zX = 2;
var n0 = "#00c000";
var n1 = new Map();
function n2(v, n) {
  if (typeof document === "undefined") {
    return new OffscreenCanvas(v, n);
  }
  let e1 = document.createElement("canvas");
  e1.width = v;
  e1.height = n;
  return e1;
}
r(n2, "mk");
var n3 = 1024;
var n4 = 12;
var n5 = [];
var n6 = 0;
var n7 = 0;
var n8 = 0;
function pack(v) {
  let e1 = v.width;
  let e2 = v.height;
  if (e1 > n3 || e2 > n3) {
    return false;
  }
  if (!n5.length || n6 + e1 + 2 > n3) {
    n6 = 0;
    n7 += n8 + 2;
    n8 = 0;
  }
  if (!n5.length || n7 + e2 + 2 > n3) {
    if (n5.length >= n4) {
      return false;
    }
    n5.push(n2(n3, n3));
    n6 = 0;
    n7 = 0;
    n8 = 0;
  }
  let e3 = n5[n5.length - 1];
  let e4 = e3.getContext("2d");
  e4.imageSmoothingEnabled = false;
  e4.drawImage(v, n6, n7);
  let e5 = {
    pg: e3,
    sx: n6,
    sy: n7,
    sw: e1,
    sh: e2
  };
  n6 += e1 + 2;
  if (e2 > n8) {
    n8 = e2;
  }
  return e5;
}
r(pack, "pack");
function packInto(v, n) {
  let e1 = pack(n);
  if (e1) {
    v.pg = e1.pg;
    v.sx = e1.sx;
    v.sy = e1.sy;
    v.sw = e1.sw;
    v.sh = e1.sh;
  } else {
    v.pg = n;
    v.sx = 0;
    v.sy = 0;
    v.sw = n.width;
    v.sh = n.height;
  }
  return v;
}
r(packInto, "packInto");
function vis(v, e1, e2, e3, e4, e5) {
  let e6 = n1.get(e5);
  if (e6 !== undefined) {
    return e6;
  }
  let e7 = w[v];
  let e8 = e7 ? Math.max(1, e7.frames) : 1;
  let e9 = e7 && e7.img && e7.img[(e1 % e8 + e8) % e8];
  if (!e9 || !e9.width) {
    return null;
  }
  let ev = Math.max(1, Math.ceil(e7.w * e2 * zX));
  let ez = Math.max(1, Math.ceil(e7.h * e2 * zX));
  let en = n2(ev, ez);
  let ee = en.getContext("2d");
  ee.imageSmoothingEnabled = false;
  ee.drawImage(e9, 0, 0, e7.w * e2 * zX, e7.h * e2 * zX);
  if (e3) {
    ee.globalCompositeOperation = "multiply";
    ee.fillStyle = zO[e3];
    ee.fillRect(0, 0, ev, ez);
    ee.globalCompositeOperation = "destination-in";
    ee.drawImage(e9, 0, 0, e7.w * e2 * zX, e7.h * e2 * zX);
  }
  e6 = {
    cv: en,
    w: ev / zX,
    h: ez / zX,
    ox: (e4 ? e7.w / 2 : e7.ox) * e2,
    oy: (e4 ? e7.h / 2 : e7.oy) * e2,
    pg: null,
    sx: 0,
    sy: 0,
    sw: ev,
    sh: ez
  };
  if (e5.charCodeAt(0) === 98) {
    packInto(e6, en);
  } else {
    e6.pg = en;
  }
  n1.set(e5, e6);
  return e6;
}
r(vis, "vis");
var nn = [];
function ne(v, e1, e2) {
  let e3 = nn[v];
  e3 ||= nn[v] = [];
  let e4 = e3[e1];
  e4 ||= e3[e1] = [];
  let e5 = e4[e2];
  if (e5 == null) {
    let e6 = zI[v];
    e5 = vis(e6.spr, e6.frame + e2, e6.scale, e1, e6.center, "b" + v + ":" + e1 + ":" + e2);
    e4[e2] = e5;
  }
  return e5;
}
r(ne, "tv");
var nP = 48;
var nE = zj / nP;
var no = 2.5;
var nD = [];
var nT = 0;
var clock = r(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "clock");
function tvr(v, e1, e2, e3) {
  if (e3 - e3 !== 0) {
    return null;
  }
  let e4 = Math.round(e3 / nE) % nP;
  if (e4 < 0) {
    e4 += nP;
  }
  let e5 = ((v * 16 + e1) * 16 + e2) * nP + e4;
  let e6 = nD[e5];
  if (e6 !== undefined) {
    return e6;
  }
  if (clock() > nT) {
    return null;
  }
  let e7 = ne(v, e1, e2);
  if (!e7) {
    return null;
  }
  let e8 = e4 * nE;
  let e9 = Math.abs(Math.cos(e8));
  let ev = Math.abs(Math.sin(e8));
  let ez = Math.max(e7.ox, e7.w - e7.ox);
  let en = Math.max(e7.oy, e7.h - e7.oy);
  let ee = Math.ceil(ez * e9 + en * ev > ez * ev + en * e9 ? ez * e9 + en * ev : ez * ev + en * e9) + 1;
  let eP = ee * 2 * zX;
  let eE = n2(eP, eP);
  let eo = eE.getContext("2d");
  eo.imageSmoothingEnabled = false;
  eo.translate(eP / 2, eP / 2);
  eo.rotate(e8);
  eo.drawImage(e7.cv, -e7.ox * zX, -e7.oy * zX, e7.w * zX, e7.h * zX);
  e6 = packInto({
    cv: null,
    w: ee * 2,
    h: ee * 2,
    ox: ee,
    oy: ee,
    pg: null,
    sx: 0,
    sy: 0,
    sw: eP,
    sh: eP
  }, eE);
  nD[e5] = e6;
  return e6;
}
r(tvr, "tvr");
var nJ = new Map();
function nA(v, e1, e2, e3 = 0, e4 = true) {
  let e5 = nJ.get(v);
  if (e5 === undefined) {
    e5 = new Map();
    nJ.set(v, e5);
  }
  let e6 = ((e1 * 16 + e3) * 2 + (e4 ? 1 : 0)) * 8192 + Math.round(e2 * 100);
  let e7 = e5.get(e6);
  if (e7 === undefined) {
    e7 = vis(v, e1, e2, e3, e4, v + ":" + e1 + ":" + e2 + ":" + e3 + ":" + (e4 ? 1 : 0));
    if (e7) {
      e5.set(e6, e7);
    }
  }
  return e7;
}
r(nA, "sv");
var nG = null;
function halo() {
  if (nG) {
    return nG;
  }
  let v = 64;
  nG = n2(v, v);
  let n = nG.getContext("2d");
  let e1 = n.createRadialGradient(v / 2, v / 2, 0, v / 2, v / 2, v / 2);
  e1.addColorStop(0, "rgba(255,255,255,0.55)");
  e1.addColorStop(0.5, "rgba(255,255,255,0.18)");
  e1.addColorStop(1, "rgba(255,255,255,0)");
  n.fillStyle = e1;
  n.fillRect(0, 0, v, v);
  return nG;
}
r(halo, "halo");
function text(v, e1, e2, e3, e4 = "#ffffff", e5 = "fnt_main", e6 = "left", e7 = 1, e8 = false) {
  v.draw_set_font(e5);
  v.draw_set_halign(e6);
  v.draw_set_alpha(e7);
  if (e8) {
    v.draw_text(e1 + 1, e2 + 1, e3, "#000000");
  }
  v.draw_text(e1, e2, e3, e4);
  v.draw_set_halign("left");
  v.draw_set_alpha(1);
}
r(text, "text");
function nQ(v, n, e1 = "fnt_main") {
  return v.string_width(n, e1);
}
r(nQ, "tw");
function nr(v, e1, e2, e3, e4, e5 = 0) {
  let e6 = Math.max(0, e3 - e1 - 63);
  let e7 = Math.max(0, e4 - e2 - 63);
  let e8 = S.white;
  if (e6 > 0) {
    v.draw_sprite_ext("spr_textbox_top", 0, e1 + 32, e2, e6, 2, 0, e8, 1);
    v.draw_sprite_ext("spr_textbox_top", 0, e1 + 32, e4 + 1, e6, -2, 0, e8, 1);
  }
  if (e7 > 0) {
    v.draw_sprite_ext("spr_textbox_left", 0, e3 + 1, e2 + 32, -2, e7, 0, e8, 1);
    v.draw_sprite_ext("spr_textbox_left", 0, e1, e2 + 32, 2, e7, 0, e8, 1);
  }
  v.draw_sprite_ext("spr_textbox_topleft", e5, e1, e2, 2, 2, 0, e8, 1);
  v.draw_sprite_ext("spr_textbox_topleft", e5, e3 + 1, e2, -2, 2, 0, e8, 1);
  v.draw_sprite_ext("spr_textbox_topleft", e5, e1, e4 + 1, 2, -2, 0, e8, 1);
  v.draw_sprite_ext("spr_textbox_topleft", e5, e3 + 1, e4 + 1, -2, -2, 0, e8, 1);
}
r(nr, "darkbox");
var nu = {
  jevil: {
    a: "#3b0f5c",
    b: "#1c0930",
    motif: "spr_bomb_spade",
    mcol: 7
  },
  queen: {
    a: "#0c3d58",
    b: "#07202f",
    motif: "spr_queen_winebubble",
    mcol: 5
  },
  sneo: {
    a: "#524000",
    b: "#3a0a2c",
    motif: "spr_sneo_heart",
    mcol: 0
  },
  tenna: {
    a: "#56101c",
    b: "#2c0810",
    motif: "spr_tenna_allstars_star",
    mcol: 3
  },
  knight: {
    a: "#2a2a2a",
    b: "#101010",
    motif: "spr_knight_bullet_star",
    mcol: 0
  }
};
function drawBackground(v, e1, e2, e3) {
  let e4 = e2.boss.def;
  let e5 = nu[e4 && e4.bg || "jevil"];
  v.fillStyle = "#000000";
  v.fillRect(zY.x, zY.y, zY.w, zY.h);
  let e6 = e2.phase && e2.phase.spell;
  let e7 = e3.time;
  v.lineWidth = 2;
  for (let e8 = 0; e8 < 2; e8++) {
    let e9 = e7 * (e8 ? 0.5 : 0.9) % 50;
    v.strokeStyle = e8 ? e5.b : e5.a;
    v.globalAlpha = e6 ? 0.45 : 0.8;
    v.beginPath();
    for (let ev = zY.x - 50 + e9 + e8 * 25; ev < zY.x2 + 50; ev += 50) {
      v.moveTo(ev, zY.y);
      v.lineTo(ev, zY.y2);
    }
    for (let ez = zY.y - 50 + e9 + e8 * 25; ez < zY.y2 + 50; ez += 50) {
      v.moveTo(zY.x, ez);
      v.lineTo(zY.x2, ez);
    }
    v.stroke();
  }
  v.globalAlpha = 1;
  if (e6 && e2.declT < 44) {
    let en = Math.min(1, (48 - e2.declT) / 20);
    let ee = nA(e5.motif, 0, 6, e5.mcol);
    if (ee) {
      let eP = e3.M;
      let eE = e7 * 0.004;
      v.globalAlpha = en * 0.13;
      v.setTransform(eP.a * Math.cos(eE), eP.a * Math.sin(eE), -eP.a * Math.sin(eE), eP.a * Math.cos(eE), eP.e + eP.a * zY.cx, eP.f + eP.a * (zY.y + 190));
      v.drawImage(ee.cv, -ee.w / 2, -ee.h / 2, ee.w, ee.h);
      v.setTransform(eP);
      v.globalAlpha = 1;
    }
  }
}
r(drawBackground, "drawBackground");
function drawBullets(v, e1, e2, e3) {
  let e4 = e3.M;
  let e5 = e4.a;
  let e6 = halo();
  let e7 = false;
  let e8 = e1.bn;
  let e9 = e1.blive;
  for (let ev = 0; ev < e8; ev++) {
    let ez = e9[ev];
    let en = zI[e1.btype[ez]];
    let ee = e1.bage[ez];
    let eP = en.frames > 1 ? (ee / en.anim | 0) % en.frames : 0;
    let eE = ne(e1.btype[ez], e1.bcol[ez], eP);
    if (!eE) {
      continue;
    }
    let eo = e1.bpx[ez] + (e1.bx[ez] - e1.bpx[ez]) * e2;
    let eD = e1.bpy[ez] + (e1.by[ez] - e1.bpy[ez]) * e2;
    if (eo < zY.x - 60 || eo > zY.x2 + 60 || eD < zY.y - 60 || eD > zY.y2 + 60) {
      continue;
    }
    let eT = 1;
    let eF = 1;
    if (e1.bflag[ez] & 4) {
      eT = ee & 2 ? 0.35 : 0.6;
    } else if (ee < 9) {
      eT = 0.22 + ee * 0.087;
      if (ee < 4) {
        eF = 1.6 - ee * 0.15;
      }
    }
    if (en.halo) {
      if (e7) {
        v.setTransform(e4);
        e7 = false;
      }
      v.globalAlpha = eT * 0.9;
      let eJ = en.r * 3.2 * eF;
      v.drawImage(e6, eo - eJ, eD - eJ, eJ * 2, eJ * 2);
    }
    v.globalAlpha = eT;
    let eC = eE;
    if (eF === 1 && en.orient) {
      let eA = e1.brot[ez] - e1.bprot[ez];
      if (eA > Math.PI || eA < -Math.PI) {
        eA = 0;
      }
      eC = tvr(e1.btype[ez], e1.bcol[ez], eP, e1.bprot[ez] + eA * e2 + en.face * za);
    }
    if (eF === 1 && eC) {
      if (e7) {
        v.setTransform(e4);
        e7 = false;
      }
      v.drawImage(eC.pg, eC.sx, eC.sy, eC.sw, eC.sh, Math.round((eo - eC.ox) * zX) / zX, Math.round((eD - eC.oy) * zX) / zX, eC.w, eC.h);
    } else {
      let eG = en.orient ? e1.bprot[ez] + (e1.brot[ez] - e1.bprot[ez]) * e2 + en.face * za : 0;
      let ew = Math.cos(eG) * e5 * eF;
      let eS = Math.sin(eG) * e5 * eF;
      v.setTransform(ew, eS, -eS, ew, e4.e + e5 * eo, e4.f + e5 * eD);
      e7 = true;
      v.drawImage(eE.cv, -eE.ox, -eE.oy, eE.w, eE.h);
    }
  }
  if (e7) {
    v.setTransform(e4);
  }
  v.globalAlpha = 1;
}
r(drawBullets, "drawBullets");
var nY = [6, 6];
var nx = [];
function drawLasers(v, e1, e2) {
  let e3 = e2.M;
  for (let e4 of e1.lasers) {
    if (!e4.on) {
      continue;
    }
    let e5 = zO[e4.col];
    let e6 = e4.ang;
    let e7 = e4.x + Math.cos(e6) * e4.len;
    let e8 = e4.y + Math.sin(e6) * e4.len;
    v.lineCap = "butt";
    if (e4.t < e4.warn) {
      let e9 = e4.t / e4.warn;
      v.globalAlpha = 0.25 + e9 * 0.5 * (e4.t >> 1 & 1 ? 1 : 0.7);
      v.strokeStyle = e5;
      v.lineWidth = 1 + (1 - e9) * 2;
      v.beginPath();
      v.moveTo(e4.x, e4.y);
      v.lineTo(e7, e8);
      v.stroke();
      if (e4.w !== 0) {
        let ev = e6 + e4.w * (e4.warn - e4.t + e4.life);
        v.globalAlpha *= 0.45;
        v.setLineDash(nY);
        v.beginPath();
        v.moveTo(e4.x, e4.y);
        v.lineTo(e4.x + Math.cos(ev) * e4.len, e4.y + Math.sin(ev) * e4.len);
        v.stroke();
        v.setLineDash(nx);
      }
    } else {
      let ez = e4.t - e4.warn;
      let en = e4.width;
      if (ez < 3) {
        en *= (ez + 1) / 4;
      } else if (ez > e4.life) {
        en *= Math.max(0, 1 - (ez - e4.life) / e4.fade);
      }
      let ee = 1 + Math.sin(e2.time * 0.9 + e4.x) * 0.08;
      v.globalAlpha = 0.35;
      v.strokeStyle = e5;
      v.lineWidth = en * 1.4 * ee;
      v.beginPath();
      v.moveTo(e4.x, e4.y);
      v.lineTo(e7, e8);
      v.stroke();
      v.globalAlpha = 0.9;
      v.lineWidth = en * 0.8;
      v.beginPath();
      v.moveTo(e4.x, e4.y);
      v.lineTo(e7, e8);
      v.stroke();
      v.globalAlpha = 1;
      v.strokeStyle = "#ffffff";
      v.lineWidth = Math.max(1, en * 0.35);
      v.beginPath();
      v.moveTo(e4.x, e4.y);
      v.lineTo(e7, e8);
      v.stroke();
      v.fillStyle = "#ffffff";
      v.beginPath();
      v.arc(e4.x, e4.y, en * 0.6, 0, zj);
      v.fill();
    }
  }
  v.globalAlpha = 1;
  v.setTransform(e3);
}
r(drawLasers, "drawLasers");
function drawItems(v, e1, e2) {
  for (let e3 = 0; e3 < e1.inn; e3++) {
    let e4 = e1.ilive[e3];
    let e5 = e1.ikind[e4];
    let e6 = e1.ipx[e4] + (e1.ix[e4] - e1.ipx[e4]) * e2;
    let e7 = e1.ipy[e4] + (e1.iy[e4] - e1.ipy[e4]) * e2;
    let e8;
    if (e5 === 0) {
      e8 = nA("spr_board_candy", 0, 0.8, 1);
    } else if (e5 === 3) {
      e8 = nA("spr_board_candy", 0, 1.35, 1);
    } else if (e5 === 1) {
      e8 = nA("spr_sparestar", 0, 0.8, 0);
    } else {
      e8 = nA("spr_stardrop", 0, 0.55, 3);
    }
    if (e8) {
      if (e7 < zY.y - 4) {
        v.globalAlpha = 0.7;
        v.drawImage(e8.cv, e6 - e8.ox * 0.7, zY.y + 2, e8.w * 0.7, e8.h * 0.7);
        v.globalAlpha = 1;
        continue;
      }
      if (e5 === 2) {
        v.globalAlpha = 0.8;
      }
      v.drawImage(e8.cv, e6 - e8.ox, e7 - e8.oy, e8.w, e8.h);
      v.globalAlpha = 1;
    }
  }
}
r(drawItems, "drawItems");
function drawParticles(v, e1, e2, e3, e4) {
  let e5 = e4.M;
  let e6 = e5.a;
  for (let e7 = 0; e7 < e2.qn; e7++) {
    let e8 = e2.qlive[e7];
    let e9 = e2.qpx[e8] + (e2.qx[e8] - e2.qpx[e8]) * e3;
    let ev = e2.qpy[e8] + (e2.qy[e8] - e2.qpy[e8]) * e3;
    let ez = e2.qlife[e8];
    let en = e2.qmax[e8];
    let ee = ez / en;
    let eP = e2.qkind[e8];
    let eE = zO[e2.qcol[e8]];
    let eo = e2.qsize[e8];
    if (eP === zh.SPARK) {
      v.globalAlpha = Math.min(1, ee * 1.6);
      v.fillStyle = eE;
      let eD = eo * 2;
      v.fillRect(e9 - eD / 2, ev - eD / 2, eD, eD);
    } else if (eP === zh.SQUARE) {
      v.globalAlpha = ee;
      v.fillStyle = "#ffffff";
      v.fillRect(e9 - 1.5, ev - 1.5, 3, 3);
    } else if (eP === zh.RING) {
      v.globalAlpha = ee * 0.9;
      v.strokeStyle = eE;
      v.lineWidth = 2 + ee * 2;
      v.beginPath();
      v.arc(e9, ev, (1 - ee) * 30 * eo + 4, 0, zj);
      v.stroke();
    } else if (eP === zh.GLINT) {
      let eT = nA("spr_tinysparkle", 0, 0.7, e2.qcol[e8]);
      if (eT) {
        v.globalAlpha = ee;
        v.drawImage(eT.cv, e9 - eT.ox, ev - eT.oy, eT.w, eT.h);
      }
    } else if (eP === zh.SHARD) {
      let eF = nA("spr_heartshards", e8 & 3, 1, 3, true);
      if (eF) {
        v.globalAlpha = Math.min(1, ee * 2);
        v.drawImage(eF.cv, e9 - eF.ox, ev - eF.oy, eF.w, eF.h);
      }
    } else if (eP === zh.FLAKE) {
      let eC = nA("spr_icespell_snowflake", 0, 0.35, 0);
      if (eC) {
        let eJ = e2.qrot[e8];
        let eA = Math.cos(eJ) * e6 * eo;
        let eG = Math.sin(eJ) * e6 * eo;
        v.globalAlpha = Math.min(1, ee * 2);
        v.setTransform(eA, eG, -eG, eA, e5.e + e6 * e9, e5.f + e6 * ev);
        v.drawImage(eC.cv, -eC.ox, -eC.oy, eC.w, eC.h);
        v.setTransform(e5);
      }
    } else if (eP === zh.SLASH) {
      let ew = nA("spr_knight_slash_mark", 0, 1.2, 0);
      if (ew) {
        let eS = e2.qrot[e8];
        let eQ = 1 + (1 - ee) * 2;
        let er = Math.cos(eS) * e6;
        let eu = Math.sin(eS) * e6;
        v.globalAlpha = ee;
        v.setTransform(er * eQ, eu * eQ, -eu * ee, er * ee, e5.e + e6 * e9, e5.f + e6 * ev);
        v.drawImage(ew.cv, -ew.ox, -ew.oy, ew.w, ew.h);
        v.setTransform(e5);
      }
    } else if (eP === zh.SPRITE) {
      let ek = e2.qspr[e8];
      if (ek === 0) {
        let eV = nA("spr_yheart_shot_hit", Math.min(4, (1 - ee) * 5 | 0), 0.8, 0);
        if (eV) {
          v.globalAlpha = 1;
          v.drawImage(eV.cv, e9 - eV.ox, ev - eV.oy, eV.w, eV.h);
        }
      } else if (ek === 1) {
        let eY = nA("spr_rudebuster_beam", (en - ez) % 7, 1, 0);
        if (eY) {
          v.globalAlpha = ee * 0.7;
          v.setTransform(0, -e6, e6, 0, e5.e + e6 * e9, e5.f + e6 * ev);
          v.drawImage(eY.cv, -eY.ox, -eY.oy, eY.w, eY.h);
          v.setTransform(e5);
        }
      } else {
        let ex = nA("spr_spare_z", 0, 1, 0);
        let ei = 0.6 + (1 - ee) * 0.4;
        if (ex) {
          v.globalAlpha = Math.min(1, ee * 2);
          v.drawImage(ex.cv, e9 - ex.ox * ei, ev - ex.oy * ei, ex.w * ei, ex.h * ei);
        }
      }
    }
  }
  v.globalAlpha = 1;
}
r(drawParticles, "drawParticles");
function drawMarkers(v, e1, e2) {
  for (let e3 of e2.markers) {
    if (!e3.on) {
      continue;
    }
    let e4 = e3.t / e3.life;
    if (e3.kind === "window") {
      let e5 = Math.min(1, e3.t / 8);
      let e6 = e3.t > e3.life - 8 ? (e3.life - e3.t) / 8 : 1;
      let e7 = nA("spr_queen_search_window", 0, 0.55, 0);
      if (e7) {
        v.globalAlpha = (e3.t < 22 && e3.t >> 1 & 1 ? 0.5 : 0.9) * e6;
        v.drawImage(e7.cv, e3.x - e7.w / 2 * e5, e3.y - e7.h / 2, e7.w * e5, e7.h);
      }
    } else if (e3.kind === "dice") {
      v.globalAlpha = 1;
      text(e1, e3.x, e3.y - 30 - e4 * 10, String(e3.a), e4 < 0.7 ? "#ffff00" : "#ffffff", "fnt_mainbig", "center", 1 - e4 * 0.6, true);
    } else if (e3.kind === "charge") {
      v.globalAlpha = 0.8;
      v.strokeStyle = "#ffff40";
      v.lineWidth = 2;
      v.beginPath();
      v.arc(e3.x, e3.y, (1 - e4) * 70 + 6, 0, zj);
      v.stroke();
    }
  }
  v.globalAlpha = 1;
}
r(drawMarkers, "drawMarkers");
function drawBoss(v, e1, e2, e3, e4) {
  let e5 = e2.boss;
  let e6 = e5.def;
  if (!e6 || !e5.show) {
    return;
  }
  let e7 = e5.px + (e5.x - e5.px) * e3;
  let e8 = e5.py + (e5.y - e5.py) * e3;
  let e9 = w[e6.spr];
  if (!e9) {
    return;
  }
  let ev = e6.frames > 1 ? (e4.time / (e6.anim * 2) | 0) % e6.frames : 0;
  let ez = e5.scale;
  let en = e6.ofx !== undefined ? e6.ofx : e9.ox;
  let ee = e6.ofy !== undefined ? e6.ofy : e9.oy;
  let eP = Math.sin(e4.time * 0.05) * 3;
  let eE = e7 - (en - e9.ox) * ez;
  let eo = e8 - (ee - e9.oy) * ez + eP;
  if (e5.dying > 0) {
    eE += (Math.random() - 0.5) * 6;
    eo += (Math.random() - 0.5) * 6;
  }
  let eD = e4.trail;
  eD.at = (eD.at + 2) % 12;
  eD.v[eD.at] = eE;
  eD.v[eD.at + 1] = eo;
  if (eD.n < 6) {
    eD.n++;
  }
  if (e5.trail > 0) {
    for (let eT = eD.n - 1; eT >= 1; eT--) {
      let eF = (eD.at - eT * 2 + 24) % 12;
      e1.draw_sprite_ext(e6.spr, ev, eD.v[eF], eD.v[eF + 1], ez, ez, 0, S.white, 0.12 + (5 - eT) * 0.04);
    }
  }
  if (e2.phase && e2.phase.spell && e2.declT === 0) {
    v.strokeStyle = zO[e6.col || 0];
    v.lineWidth = 1.5;
    for (let eC = 0; eC < 2; eC++) {
      let eJ = 46 + eC * 12 + Math.sin(e4.time * 0.07 + eC) * 3;
      let eA = e4.time * (eC ? -0.03 : 0.02);
      v.globalAlpha = 0.35;
      v.beginPath();
      for (let eG = 0; eG < 12; eG++) {
        let ew = eA + eG * zj / 12;
        v.moveTo(e7 + Math.cos(ew) * eJ, e8 + Math.sin(ew) * eJ);
        v.arc(e7, e8, eJ, ew, ew + zj / 24);
      }
      v.stroke();
    }
    v.globalAlpha = 1;
  }
  e1.draw_sprite_ext(e6.spr, ev, eE, eo, ez, ez, 0, S.white, e5.alpha);
  if (e5.dmgT > 0 && e4.frame & 1) {
    e1.draw_sprite_flash(e6.spr, ev, eE, eo, ez, ez, 0, "#ffffff", e5.alpha * 0.35);
  }
}
r(drawBoss, "drawBoss");
function drawShots(v, e1, e2, e3) {
  let e4 = e3.M;
  let e5 = e4.a;
  let e6 = nA("spr_yheart_shot", 0, 1, 0, false);
  if (e6) {
    for (let e7 = 0; e7 < e1.sn; e7++) {
      let e8 = e1.slive[e7];
      let e9 = e1.spx[e8] + (e1.sx[e8] - e1.spx[e8]) * e2;
      let ev = e1.spy[e8] + (e1.sy[e8] - e1.spy[e8]) * e2;
      let ez = Math.atan2(e1.svy[e8], e1.svx[e8]);
      let en = Math.cos(ez) * e5;
      let ee = Math.sin(ez) * e5;
      let eP = e1.skind[e8] ? 0.75 : 1;
      v.globalAlpha = e1.skind[e8] ? 0.35 : 0.5;
      v.setTransform(en * eP, ee * eP, -ee * eP, en * eP, e4.e + e5 * e9, e4.f + e5 * ev);
      v.drawImage(e6.cv, -e6.ox, -e6.oy, e6.w, e6.h);
    }
    v.setTransform(e4);
    v.globalAlpha = 1;
  }
}
r(drawShots, "drawShots");
function drawPlayer(v, e1, e2, e3, e4) {
  let e5 = e2.P;
  let e6 = e4.M;
  let e7 = e6.a;
  if (!e5.alive) {
    return;
  }
  let e8 = e5.px + (e5.x - e5.px) * e3;
  let e9 = e5.py + (e5.y - e5.py) * e3;
  let ev = e5.invuln > 0 && e4.frame >> 2 & 1;
  let ez = Math.min(4, Math.floor(e5.power));
  let en = nA("spr_yellowheart", 0, 0.5, 0, true);
  let ee = e4.opt;
  if (en) {
    for (let eo = 0; eo < ez; eo++) {
      e2.optionPos(eo, ez, e5.focus, ee);
      let eD = ee.x + (e8 - e5.x);
      let eT = ee.y + (e9 - e5.y);
      v.globalAlpha = ev ? 0.3 : 0.6;
      v.setTransform(0, -e7, e7, 0, e6.e + e7 * eD, e6.f + e7 * eT);
      v.drawImage(en.cv, -en.ox, -en.oy, en.w, en.h);
    }
  }
  v.setTransform(e6);
  if (e5.grazeFlash > 0) {
    v.globalAlpha = e5.grazeFlash / 6 * 0.7;
    v.strokeStyle = "#ffffff";
    v.lineWidth = 1;
    v.beginPath();
    v.arc(e8, e9, 18, 0, zj);
    v.stroke();
    v.globalAlpha = 1;
    if (e4.ticked) {
      e5.grazeFlash--;
    }
  }
  let eP = nA("spr_yellowheart", 0, 1, 0, true);
  if (eP) {
    let eF = -Math.PI / 2 + e5.lean * 0.18;
    let eC = Math.cos(eF) * e7;
    let eJ = Math.sin(eF) * e7;
    v.globalAlpha = ev ? 0.35 : 1;
    v.setTransform(eC, eJ, -eJ, eC, e6.e + e7 * e8, e6.f + e7 * e9);
    v.drawImage(eP.cv, -eP.ox, -eP.oy, eP.w, eP.h);
    v.setTransform(e6);
    v.globalAlpha = 1;
  }
  let eE = e5.focusT / 8;
  if (eE > 0) {
    v.globalAlpha = eE * 0.5;
    v.strokeStyle = "#ffff60";
    v.lineWidth = 1;
    let eA = e4.time * 0.05;
    v.beginPath();
    for (let eG = 0; eG < 8; eG++) {
      let ew = eA + eG * zj / 8;
      v.moveTo(e8 + Math.cos(ew) * 22, e9 + Math.sin(ew) * 22);
      v.arc(e8, e9, 22, ew, ew + zj / 16);
    }
    v.stroke();
    v.globalAlpha = eE;
    v.fillStyle = "#ff2020";
    v.beginPath();
    v.arc(e8, e9, 3.6, 0, zj);
    v.fill();
    v.fillStyle = "#ffffff";
    v.beginPath();
    v.arc(e8, e9, 2.4, 0, zj);
    v.fill();
    v.globalAlpha = 1;
  }
}
r(drawPlayer, "drawPlayer");
function drawBomb(v, e1, e2, e3, e4) {
  if (e2.bombT <= 0) {
    return;
  }
  let e5 = e2.bombKind;
  let e6 = e2.bombT / e2.bombMax;
  let e7 = e2.bombMax - e2.bombT;
  let e8 = e4.M;
  let e9 = e8.a;
  if (e5 === "susie") {
    let ev = nA("spr_rudebuster_beam", (e7 >> 1) % 7, 3.2, 0);
    v.globalAlpha = e6 * 0.25;
    v.fillStyle = "#b040ff";
    v.fillRect(zY.x, zY.y, zY.w, zY.h);
    if (ev) {
      for (let ez = 0; ez < 4; ez++) {
        let en = e2.bombY + ez * 34;
        v.globalAlpha = (1 - ez * 0.22) * Math.min(1, e6 * 3);
        v.setTransform(0, -e9, e9, 0, e8.e + e9 * e2.bombX, e8.f + e9 * en);
        v.drawImage(ev.cv, -ev.ox, -ev.oy, ev.w, ev.h);
      }
    }
    v.setTransform(e8);
  } else if (e5 === "noelle") {
    v.globalAlpha = Math.min(1, e6 * 2) * 0.45 * (e7 < 6 ? e7 / 6 : 1);
    v.fillStyle = "#c8e8ff";
    v.fillRect(zY.x, zY.y, zY.w, zY.h);
    let ee = nA("spr_icespell_snowflake", 0, 2.4, 0);
    if (ee) {
      let eP = e7 * 0.03;
      let eE = Math.min(1, e7 / 16);
      let eo = Math.cos(eP) * e9 * eE;
      let eD = Math.sin(eP) * e9 * eE;
      v.globalAlpha = Math.min(1, e6 * 2.5) * 0.6;
      v.setTransform(eo, eD, -eD, eo, e8.e + e9 * zY.cx, e8.f + e9 * (zY.y + zY.h / 2));
      v.drawImage(ee.cv, -ee.ox, -ee.oy, ee.w, ee.h);
      v.setTransform(e8);
    }
  } else {
    v.globalAlpha = Math.min(1, e6 * 2) * 0.22;
    v.fillStyle = "#ffd0f0";
    v.fillRect(zY.x, zY.y, zY.w, zY.h);
  }
  v.globalAlpha = 1;
}
r(drawBomb, "drawBomb");
function drawBossHud(v, e1, e2, e3) {
  let e4 = e2.boss;
  let e5 = e4.def;
  if (!e5 || !e4.show || e4.dying > 0) {
    return;
  }
  let e6 = e2.phase;
  text(e1, zY.x + 6, zY.y + 3, e5.name, "#ffffff", "fnt_small", "left", 1, true);
  let e7 = 0;
  for (let eP = Math.max(0, e2.pi + 1); eP < e5.phases.length; eP++) {
    if (e5.phases[eP].spell) {
      e7++;
    }
  }
  let e8 = nA("spr_sparestar", 0, 0.55, 0, false);
  let e9 = nQ(e1, e5.name, "fnt_small") + 10;
  if (e8) {
    for (let eE = 0; eE < e7; eE++) {
      v.drawImage(e8.cv, zY.x + 6 + e9 + eE * 10, zY.y + 4, e8.w, e8.h);
    }
  }
  let ev = zY.x + 6;
  let ez = zY.x2 - 50;
  let en = zY.y + 17;
  if (e6 && !e6.survival) {
    let eo = Math.max(0, e4.hp / e4.hpMax);
    v.fillStyle = "#800000";
    v.fillRect(ev, en, ez - ev, 4);
    v.fillStyle = e6.spell ? "#ffff00" : "#ffa040";
    v.fillRect(ev, en, (ez - ev) * eo, 4);
  } else if (e6 && e6.survival) {
    v.fillStyle = "#404040";
    v.fillRect(ev, en, ez - ev, 4);
  }
  if (e6 && e2.declT === 0 && !e6.hideTimer) {
    let eD = Math.max(0, Math.ceil(e2.timer / 30));
    text(e1, zY.x2 - 6, zY.y + 2, (eD < 10 ? "0" : "") + eD, eD <= 10 ? "#ff4040" : "#ffffff", "fnt_mainbig", "right", 1, true);
  }
  let ee = e4.x;
  v.fillStyle = "#ff3030";
  v.beginPath();
  v.moveTo(ee - 5, zY.y2 + 9);
  v.lineTo(ee + 5, zY.y2 + 9);
  v.lineTo(ee, zY.y2 + 3);
  v.fill();
}
r(drawBossHud, "drawBossHud");
var nm = new Map();
function fontFor(v, e1, e2) {
  let e3 = nm.get(e1);
  if (e3 === undefined) {
    let e4 = 0;
    for (let e5 of e1) {
      e4 = Math.max(e4, nQ(v, e5, "fnt_mainbig"));
    }
    e3 = e4 <= e2 ? "fnt_mainbig" : "fnt_main";
    nm.set(e1, e3);
  }
  return e3;
}
r(fontFor, "fontFor");
function drawBanners(v, e1, e2, e3) {
  let e4 = e2.banner;
  if (e4) {
    if (e4.kind === "spell") {
      let e5 = e4.t;
      let e6 = zY.y2 - 64;
      let e7 = zY.y + 40;
      let e8 = e5 < 22 ? 0 : Math.min(1, (e5 - 22) / 16);
      let e9 = 1 - (1 - e8) * (1 - e8);
      let ev = e6 + (e7 - e6) * e9;
      let ez = e5 < 10 ? (10 - e5) * 24 : 0;
      let en = zY.x2 - 8 + ez;
      let ee = nQ(e1, e4.text, "fnt_main");
      v.globalAlpha = 0.75;
      v.fillStyle = "#000000";
      v.fillRect(en - ee - 10, ev - 2, ee + 14, 20);
      v.fillStyle = zO[e2.boss.def && e2.boss.def.col || 0];
      v.fillRect(en - ee - 10, ev + 17, ee + 14, 2);
      v.globalAlpha = 1;
      text(e1, en, ev, e4.text, "#ffffff", "fnt_main", "right", 1, true);
      if (e8 >= 1 || e5 > 38) {
        let eP = e2.cardFailed;
        let eE = e2.phase && e2.phase.survival ? "SURVIVE" : eP ? "BONUS FAILED" : "BONUS " + Math.round(e2.cardBonus / 10) * 10;
        let eo = "";
        if (e3.history) {
          eo = "   HISTORY " + e3.history.cap + "/" + e3.history.att;
        }
        text(e1, en, ev + 22, eE + eo, eP ? "#808080" : "#c0c0c0", "fnt_small", "right", 1, true);
      }
      if (!e2.phase) {
        e2.banner = null;
      }
    } else if (e4.kind === "boss") {
      let eD = e4.t < 16 ? e4.t / 16 : e4.t > 56 ? Math.max(0, (76 - e4.t) / 20) : 1;
      let eT = e4.line ? e4.t > 92 ? Math.max(0, (108 - e4.t) / 16) : 1 : eD;
      text(e1, zY.cx, zY.y + 170, e4.text, "#ffffff", "fnt_mainbig", "center", e4.line ? eT : eD, true);
      text(e1, zY.cx, zY.y + 202, e4.sub, "#c0c0c0", "fnt_main", "center", e4.line ? eT : eD, true);
      if (e4.line && e4.t > zp - 6) {
        let eF = zY.x + 12;
        let eC = zY.y2 - 108;
        let eJ = zY.x2 - 12;
        let eA = zY.y2 - 12;
        v.globalAlpha = eT;
        v.fillStyle = "#000000";
        v.fillRect(eF + 6, eC + 6, eJ - eF - 12, eA - eC - 12);
        v.globalAlpha = 1;
        if (eT > 0.5) {
          nr(e1, eF, eC, eJ, eA);
        }
        let eG = e4.chars;
        let ew = fontFor(e1, e4.line, eJ - eF - 40);
        let eS = ew === "fnt_mainbig" ? 30 : 22;
        for (let eQ = 0; eQ < e4.line.length && eG > 0; eQ++) {
          let er = e4.line[eQ];
          let eu = Math.min(eG, er.length);
          eG -= eu;
          text(e1, eF + 22, eC + 22 + eQ * eS, eu < er.length ? er.slice(0, eu) : er, "#ffffff", ew, "left", eT);
        }
      }
    } else if (e4.kind === "capture" || e4.kind === "failed") {
      let ek = e4.t > 70 ? Math.max(0, (90 - e4.t) / 20) : 1;
      let eV = e4.kind === "capture";
      let eY = zY.y + 120;
      text(e1, zY.cx, eY, e4.text, eV ? e4.t >> 2 & 1 ? "#ffff00" : "#ffffff" : "#a0a0a0", "fnt_mainbig", "center", ek, true);
      if (e4.sub) {
        text(e1, zY.cx, eY + 30, e4.sub, "#ffff00", "fnt_main", "center", ek, true);
      }
    }
  }
  if (e2.phase && e2.phase.spell && e2.declT > 0) {
    let ex = e2.boss.def;
    let ei = 1 - e2.declT / 48;
    let eb = zY.x2 + 60 - ei * (zY.w + 60);
    let eL = zY.y + 250 - ei * 60;
    e1.draw_sprite_ext(ex.portrait || ex.spr, 0, eb, eL, 3.2, 3.2, 0, S.white, Math.sin(ei * Math.PI) * 0.28);
  }
  for (let eq of e2.popups) {
    let es = eq.t > (eq.big ? 50 : 26) ? 1 - (eq.t - (eq.big ? 50 : 26)) / 20 : 1;
    text(e1, eq.x, eq.y, eq.text, zO[eq.col] || "#ffffff", eq.big ? "fnt_main" : "fnt_small", "center", Math.max(0, es), true);
  }
}
r(drawBanners, "drawBanners");
var nK = {
  susie: "spr_headsusie",
  noelle: "spr_headnoelle",
  ralsei: "spr_headralsei"
};
var nZ = {
  susie: "spr_bnamesusie",
  noelle: "spr_bnamenoelle",
  ralsei: "spr_bnameralsei"
};
var nH = {
  susie: "spr_susieb_idle",
  noelle: "spr_noelleb_idle",
  ralsei: "spr_ralseib_idle"
};
var nd = {
  susie: "RUDE BUSTER",
  noelle: "SNOWGRAVE",
  ralsei: "PACIFY"
};
var nW = ["#80ff80", "#80c0ff", "#ffc040", "#ff60ff"];
function pad(v, n) {
  let e1 = String(Math.floor(v));
  while (e1.length < n) {
    e1 = "0" + e1;
  }
  return e1;
}
r(pad, "pad");
var ng = {
  x: 436,
  touch: {
    focus: {
      x: 440,
      y: 290,
      w: 96,
      h: 178
    },
    spell: {
      x: 542,
      y: 290,
      w: 94,
      h: 178
    },
    pause: {
      x: 580,
      y: 12,
      w: 54,
      h: 38
    },
    pauseZone: {
      x: 436,
      y: 40,
      w: 204,
      h: 80
    }
  }
};
var nc = ["focus", "spell"];
var nh = ["FOCUS", "SPELL"];
function drawPanel(e1, e2, e3, e4) {
  let e5 = e3.P;
  let e6 = 444;
  let e7 = 620;
  e1.fillStyle = "#000000";
  e1.fillRect(0, 0, 640, zY.y);
  e1.fillRect(0, zY.y2, 640, 480 - zY.y2);
  e1.fillRect(0, 0, zY.x, 480);
  e1.fillRect(zY.x2, 0, 640 - zY.x2, 480);
  e1.strokeStyle = n0;
  e1.lineWidth = 3;
  e1.strokeRect(zY.x - 1.5, zY.y - 1.5, zY.w + 3, zY.h + 3);
  text(e2, e6, 22, zb[e3.diff], nW[e3.diff], "fnt_main");
  if (e3.mode === "practice" && !e4.touch) {
    text(e2, e7, 22, "PRACTICE", "#808080", "fnt_small", "right");
  }
  text(e2, e6, 52, "HISCORE", "#808080", "fnt_small");
  text(e2, e7, 64, pad(Math.max(e4.hiscore || 0, e5.score), 10), "#c0c0c0", "fnt_main", "right");
  text(e2, e6, 88, "SCORE", "#808080", "fnt_small");
  text(e2, e7, 100, pad(e5.score, 10), "#ffffff", "fnt_main", "right");
  text(e2, e6, 132, "SOULS", "#808080", "fnt_small");
  let e8 = nA("spr_heartsmall", 0, 1.2, 0, false);
  if (e8) {
    for (let eo = 0; eo < Math.min(8, Math.max(0, e5.lives)); eo++) {
      e1.drawImage(e8.cv, e6 + 56 + eo * 14, 132, e8.w, e8.h);
    }
  }
  if (e5.lives > 8) {
    text(e2, e7, 130, "+" + (e5.lives - 8), "#ff4040", "fnt_small", "right");
  }
  text(e2, e6, 158, "SPELLS", "#808080", "fnt_small");
  let e9 = nA(nK[e3.partner], 2, 0.5, 0, false);
  if (e9) {
    for (let eD = 0; eD < Math.min(8, e5.bombs); eD++) {
      e1.drawImage(e9.cv, e6 + 56 + eD * 15, 154, e9.w, e9.h);
    }
  }
  text(e2, e6, 186, "POWER", "#808080", "fnt_small");
  text(e2, e7, 184, e5.power >= 4 ? "MAX" : e5.power.toFixed(2), e5.power >= 4 ? "#ffff00" : "#ffffff", "fnt_main", "right");
  text(e2, e6, 210, "GRAZE", "#808080", "fnt_small");
  text(e2, e7, 208, String(e5.graze), "#ffffff", "fnt_main", "right");
  text(e2, e6, 240, "TP", "#ffa040", "fnt_main");
  let ev = e6 + 28;
  let ez = 244;
  let en = e7 - ev;
  let ee = 10;
  e1.fillStyle = "#800000";
  e1.fillRect(ev, ez, en, ee);
  e1.fillStyle = "#ffa040";
  e1.fillRect(ev, ez, en * Math.min(1, e5.tp / 100), ee);
  e1.strokeStyle = "#ffffff";
  e1.lineWidth = 1;
  e1.strokeRect(ev - 0.5, ez - 0.5, en + 1, ee + 1);
  text(e2, e7, 258, Math.floor(e5.tp) + "%", "#ffa040", "fnt_small", "right");
  let eP = nH[e3.partner];
  let eE = nZ[e3.partner];
  if (!e4.touch) {
    e2.draw_sprite_ext(eP, e4.time / 10 | 0, e6 + 34, 330, 2, 2, 0, S.white, 1);
    e2.draw_sprite_ext(eE, 0, e6 + 116, 350, 1, 1, 0, S.white, 1);
    text(e2, e6 + 116, 372, nd[e3.partner], "#808080", "fnt_small");
  } else {
    let eT = ng.touch;
    for (let eC = 0; eC < 2; eC++) {
      let eJ = nc[eC];
      let eA = nh[eC];
      let eG = eT[eJ];
      let ew = !!e4.touchHeld && !!e4.touchHeld[eJ];
      let eS = eG.x + 2;
      let eQ = eG.y + 2;
      let er = eG.x + eG.w - 2;
      let eu = eG.y + eG.h - 2;
      let ek = (eS + er) / 2;
      let eV = eQ + (eu - eQ) * 0.42 - (ew ? 3 : 0);
      e1.fillStyle = "#000000";
      e1.fillRect(eS + 6, eQ + 6, er - eS - 12, eu - eQ - 12);
      nr(e2, eS, eQ, er, eu);
      if (eJ === "focus") {
        let eY = nA("spr_yellowheart", 0, 1.6, 0, true);
        if (eY) {
          e1.save();
          e1.globalAlpha = ew ? 1 : 0.8;
          e1.translate(ek, eV);
          e1.rotate(-Math.PI / 2);
          e1.drawImage(eY.cv, -eY.ox, -eY.oy, eY.w, eY.h);
          e1.restore();
        }
        e1.fillStyle = "#ff2020";
        e1.beginPath();
        e1.arc(ek, eV, 4.5, 0, zj);
        e1.fill();
        e1.fillStyle = "#ffffff";
        e1.beginPath();
        e1.arc(ek, eV, 3, 0, zj);
        e1.fill();
      } else {
        let ex = nA(nK[e3.partner], 2, 1.2, 0, true);
        if (ex) {
          e1.globalAlpha = ew ? 1 : e5.bombs > 0 ? 0.85 : 0.35;
          e1.drawImage(ex.cv, ek - ex.ox, eV - ex.oy, ex.w, ex.h);
          e1.globalAlpha = 1;
        }
        text(e2, ek, eV + 24, "x" + e5.bombs, e5.bombs > 0 ? "#ffffff" : "#606060", "fnt_small", "center");
      }
      text(e2, ek, eu - 44, eA, ew ? "#ffff00" : "#ffffff", "fnt_main", "center");
    }
    let eF = eT.pause;
    e1.fillStyle = "#000000";
    e1.fillRect(eF.x + eF.w / 2 - 10, eF.y + 8, 22, eF.h - 14);
    e1.fillStyle = "#ffffff";
    e1.fillRect(eF.x + eF.w / 2 - 8, eF.y + 10, 5, eF.h - 20);
    e1.fillRect(eF.x + eF.w / 2 + 3, eF.y + 10, 5, eF.h - 20);
  }
}
r(drawPanel, "drawPanel");
function drawSim(v, e1, e2, e3) {
  let e4 = v.ctx;
  e3.M = e4.getTransform();
  let e5 = 0;
  let e6 = 0;
  if (e1.shakeT > 0) {
    let e9 = e1.shakeAmp * (e1.shakeT / (e1.shakeMax || 1));
    e5 = (Math.random() * 2 - 1) * e9;
    e6 = (Math.random() * 2 - 1) * e9;
  }
  nT = clock() + no;
  let e7 = e3.M;
  e4.save();
  try {
    e4.beginPath();
    e4.rect(zY.x, zY.y, zY.w, zY.h);
    e4.clip();
    if (e5 || e6) {
      e4.translate(e5, e6);
      e3.M = e4.getTransform();
    }
    drawBackground(e4, v, e1, e3);
    drawItems(e4, e1, e2);
    drawBoss(e4, v, e1, e2, e3);
    drawBomb(e4, v, e1, e2, e3);
    drawShots(e4, e1, e2, e3);
    drawLasers(e4, e1, e3);
    drawBullets(e4, e1, e2, e3);
    drawParticles(e4, v, e1, e2, e3);
    drawMarkers(e4, v, e1);
    drawPlayer(e4, v, e1, e2, e3);
    if (e1.flashT > 0) {
      e4.globalAlpha = e1.flashT * 0.55 / e1.flashMax;
      e4.fillStyle = zO[e1.flashCol] || "#ffffff";
      e4.fillRect(zY.x - 10, zY.y - 10, zY.w + 20, zY.h + 20);
      e4.globalAlpha = 1;
    }
    if (e1.P.alive && e1.P.y < zx + 30 && e1.P.y > zx - 30) {
      e4.globalAlpha = 0.2;
      e4.fillStyle = "#ffffff";
      e4.fillRect(zY.x, zx, zY.w, 1);
      e4.globalAlpha = 1;
    }
    drawBanners(e4, v, e1, e3);
    drawBossHud(e4, v, e1, e3);
  } finally {
    e4.setLineDash(nx);
    e4.globalAlpha = 1;
    e4.restore();
    e3.M = e7;
  }
  drawPanel(e4, v, e1, e3);
  let e8 = e1.boss;
  if (e8.def && e8.show && !(e8.dying > 0)) {
    e4.fillStyle = "#ff3030";
    e4.beginPath();
    e4.moveTo(e8.x - 6, zY.y2 + 12);
    e4.lineTo(e8.x + 6, zY.y2 + 12);
    e4.lineTo(e8.x, zY.y2 + 4);
    e4.fill();
  }
  if (v.resetDrawState) {
    v.resetDrawState();
  }
}
r(drawSim, "drawSim");
var nj = 4;
function drawKeyStrip(v, e1, e2) {
  let e3;
  if (e1.note) {
    text(v, zY.cx, nj, e1.note, "#ffff00", "fnt_small", "center");
    return;
  }
  if (e1.auto) {
    let e7 = (e2.time / 20 | 0) & 1;
    text(v, zY.x + 2, nj, e1.watch ? "WATCHING" : "AUTOPLAY", e7 ? "#ffff00" : "#c0c0c0", "fnt_small");
    e3 = e1.mode === "touch" ? [["II", "then TAKE OVER"]] : e1.mode === "pad" ? [[e1.pad && e1.pad.pause || "START", "then TAKE OVER"]] : [["P", "take over"], ["ESC", "pause"]];
    stripRight(v, e3);
    return;
  }
  let e4 = e1.tut ? "skip" : "pause";
  if (e1.mode === "touch") {
    e3 = [["DRAG", "move"], ["FINGER DOWN", "shoot"], ["2ND FINGER", "focus"], ["II", e4]];
  } else if (e1.mode === "pad") {
    let e8 = e1.pad || {};
    e3 = [["STICK", "move"], [e8.shoot || "A", "shoot"], [e8.focus || "B", "focus"], [e8.spell || "Y", "spell"], [e8.pause || "START", e4]];
  } else {
    e3 = [["ARROWS", "move"], ["Z", "shoot"], ["SHIFT", "focus"], ["C", "spell"], ["ESC", e4]];
    if (!e1.tut) {
      e3.push(["P", "auto"]);
    }
  }
  let e5 = 0;
  for (let [e9, ev] of e3) {
    e5 += nQ(v, e9, "fnt_small") + 4 + nQ(v, ev, "fnt_small") + 12;
  }
  let e6 = zY.cx - (e5 - 12) / 2;
  for (let [ez, en] of e3) {
    text(v, e6, nj, ez, "#ffff00", "fnt_small");
    e6 += nQ(v, ez, "fnt_small") + 4;
    text(v, e6, nj, en, "#808080", "fnt_small");
    e6 += nQ(v, en, "fnt_small") + 12;
  }
}
r(drawKeyStrip, "drawKeyStrip");
function stripRight(v, e1) {
  let e2 = zY.x2 - 2;
  for (let e3 = e1.length - 1; e3 >= 0; e3--) {
    let [e4, e5] = e1[e3];
    text(v, e2, nj, e5, "#808080", "fnt_small", "right");
    e2 -= nQ(v, e5, "fnt_small") + 4;
    text(v, e2, nj, e4, "#ffff00", "fnt_small", "right");
    e2 -= nQ(v, e4, "fnt_small") + 12;
  }
}
r(stripRight, "stripRight");
function drawBotPath(v, e1, e2, e3) {
  let e4 = v.ctx;
  let e5 = e2.P;
  if (!e5.alive) {
    return;
  }
  let e6 = e1.px.length - 1;
  let e7 = e1.px[0];
  let e8 = e1.py[0];
  let e9 = e1.px[e6];
  let ev = e1.py[e6];
  e4.save();
  e4.beginPath();
  e4.rect(zY.x, zY.y, zY.w, zY.h);
  e4.clip();
  e4.lineCap = "round";
  e4.lineJoin = "round";
  if (Math.hypot(e9 - e7, ev - e8) < 6) {
    let en = e5.px + (e5.x - e5.px) * e3.a;
    let ee = e5.py + (e5.y - e5.py) * e3.a;
    for (let eP = 0; eP < 2; eP++) {
      e4.globalAlpha = eP ? 0.8 : 0.5;
      e4.strokeStyle = eP ? "#ffffff" : "#000000";
      e4.lineWidth = eP ? 1.5 : 4;
      e4.beginPath();
      e4.arc(en, ee, 15, 0, zj);
      e4.stroke();
    }
    e4.restore();
    return;
  }
  let ez = 1;
  while (ez < e6 && Math.hypot(e1.px[ez] - e7, e1.py[ez] - e8) < 11) {
    ez++;
  }
  for (let eE = 0; eE < 2; eE++) {
    e4.globalAlpha = eE ? 0.85 : 0.55;
    e4.strokeStyle = eE ? "#ffffff" : "#000000";
    e4.lineWidth = eE ? 1.5 : 4.5;
    e4.beginPath();
    e4.moveTo(e1.px[ez], e1.py[ez]);
    for (let eD = ez + 1; eD <= e6; eD++) {
      e4.lineTo(e1.px[eD], e1.py[eD]);
    }
    e4.stroke();
    let eo = eE ? 4 : 5.5;
    e4.beginPath();
    e4.moveTo(e9, ev - eo);
    e4.lineTo(e9 + eo, ev);
    e4.lineTo(e9, ev + eo);
    e4.lineTo(e9 - eo, ev);
    e4.closePath();
    e4.stroke();
  }
  e4.restore();
}
r(drawBotPath, "drawBotPath");
export { c as a, l as b, j as c, a as d, cleanMods as e, modInfo as f, modsLabel as g, vn as h, ve as i, vo as j, autoEvents as k, vF as l, starRating as m, starColor as n, ppEstimate as o, timeStretch as p, vV as q, vY as r, vL as s, txt as t, fit as u, darkbox as v, plainBox as w, soul as x, hudBar as y, laneColors as z, pad7 as A, pct as B, dmgMotion as C, zr as D, drawHitGraph as E, drawHistogram as F, zY as G, zb as H, zq as I, zR as J, zI as K, defType as L, zc as M, zh as N, zl as O, text as P, nQ as Q, nr as R, nd as S, nW as T, ng as U, drawSim as V, drawKeyStrip as W, drawBotPath as X };
