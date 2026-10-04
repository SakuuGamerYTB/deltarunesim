const A = function () {
  ;
  let iw = true;
  return function (iM, iy) {
    const iQ = iw ? function () {
      if (iy) {
        const ic = iy.apply(iM, arguments);
        iy = null;
        return ic;
      }
    } : function () {};
    iw = false;
    return iQ;
  };
}();
const G = A(this, function () {
  const h = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const iP = new RegExp("[JDWAHGqybGJJkqEHbSzSqQEDCQBPABzANkUzGqAqqJADxSMORJYQCWYUIUEbxWMEzKDybXWPLqfXJMPVILbYMOGVVkELICKBHkZXRQEXIjjXLGOFERzBMWZqVHGRVWTFCWMIfAKZQLFUjAHVLMRIEVEfjkzkxHIfESVkUEUMqWTbWHPBSbJfSfEWXfAAfXJFJZCxCFQVj]", "g");
  const ik = "locJDWalhosAHtGq;127ybG.J0Jkq.EH0b.1;deltaruSnezsSiqmQED.CcQomB;wPAwBzAwNkUzGqA.dqeqJltaADrxunSeMsiOmR.coJYQmC;drWsimY.localhUIUEobxsWtME;.dezlKtDaybrXuneWsiPLqm.fpageXsJ.MdPVIevLbYMOGVVkELICKBHkZXRQEXIjjXLGOFERzBMWZqVHGRVWTFCWMIfAKZQLFUjAHVLMRIEVEfjkzkxHIfESVkUEUMqWTbWHPBSbJfSfEWXfAAfXJFJZCxCFQVj".replace(iP, "").split(";");
  let iW;
  let iw;
  let iM;
  let iy;
  const ie = function (iT, il, it) {
    if (iT.length != il) {
      return false;
    }
    for (let hH = 0; hH < il; hH++) {
      for (let hg = 0; hg < it.length; hg += 2) {
        if (hH == it[hg] && iT.charCodeAt(hH) != it[hg + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const iQ = function (iT, il, it) {
    return ie(il, it, iT);
  };
  const ix = function (iT, il, it) {
    return iQ(il, iT, it);
  };
  const io = function (iT, il, it) {
    return ix(il, it, iT);
  };
  for (let iT in h) {
    if (ie(iT, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      iW = iT;
      break;
    }
  }
  for (let il in h[iW]) {
    if (io(6, il, [5, 110, 0, 100])) {
      iw = il;
      break;
    }
  }
  for (let it in h[iW]) {
    if (ix(it, [7, 110, 0, 108], 8)) {
      iM = it;
      break;
    }
  }
  if (!(iw < "~")) {
    for (let ho in h[iW][iM]) {
      if (iQ([7, 101, 0, 104], ho, 8)) {
        iy = ho;
        break;
      }
    }
  }
  if (!iW || !h[iW]) {
    return;
  }
  const id = h[iW][iw];
  const iZ = !!h[iW][iM] && h[iW][iM][iy];
  const ic = id || iZ;
  if (!ic) {
    return;
  }
  let iH = false;
  for (let hH = 0; hH < ik.length; hH++) {
    const hg = ik[hH];
    const hT = hg[0] === String.fromCharCode(46) ? hg.slice(1) : hg;
    const hl = ic.length - hT.length;
    const hb = ic.indexOf(hT, hl);
    const hz = hb !== -1 && hb === hl;
    if (hz) {
      if (ic.length == hg.length || hg.indexOf(".") === 0) {
        iH = true;
      }
    }
  }
  if (!iH) {
    const hL = new RegExp("[XwQJejpjQXLVxmPVgRCiGGOmyzpUPSH]", "g");
    const hV = "XwQabJoute:jpbjQXLlVanxmPkVgRCiGGOmyzpUPSH".replace(hL, "");
    h[iW][iM] = hV;
  }
});
G();
const a = function () {
  ;
  let ik = true;
  return function (iM, iy) {
    const io = ik ? function () {
      if (iy) {
        const id = iy.apply(iM, arguments);
        iy = null;
        return id;
      }
    } : function () {};
    ik = false;
    return io;
  };
}();
const F = a(this, function () {
  const iw = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const iM = iw.console = iw.console || {};
  const iy = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let ie = 0; ie < iy.length; ie++) {
    const io = a.constructor.prototype.bind(a);
    const iv = iy[ie];
    const id = iM[iv] || io;
    io.__proto__ = a.bind(a);
    io.toString = id.toString.bind(id);
    iM[iv] = io;
  }
});
F();
import { F as w, x as M, y } from "./c-PL4HTHAA.js";
import { e } from "./c-TJDIJSLU.js";
import { a as Q, b as n, c as x } from "./c-VD4WD5M6.js";
import { b as o } from "./c-YJJCI5ES.js";
import { I as v, Kb as d, N as Z, Qb as c, fb as q, ua as H, va as g } from "./c-FMIAGHDE.js";
import { a as T, l } from "./c-PIEPTJTC.js";
l();
l();
var b = 9;
var L = 17;
function clockTick() {
  if (o.mnfight === 2 && (o._clkTurn !== o.turn || o._clkFrame === undefined)) {
    o._clkTurn = o.turn;
    o._clkFrame = q.frame;
  }
}
T(clockTick, "clockTick");
const U = {
  name: "stay",
  keys: [],
  hold: undefined
};
const B = {
  name: "up",
  keys: ["up"]
};
var K = 14;
var C = (b - 1) / 2;
var i0 = b * b + 4 + 2 + 1 + 4 + 4 + 4 + 2 + 12 + L;
var i1 = [U, {
  name: "left",
  keys: ["left"]
}, {
  name: "right",
  keys: ["right"]
}, B, {
  name: "down",
  keys: ["down"]
}, {
  name: "up-left",
  keys: ["up", "left"]
}, {
  name: "up-right",
  keys: ["up", "right"]
}, {
  name: "down-left",
  keys: ["down", "left"]
}, {
  name: "down-right",
  keys: ["down", "right"]
}, {
  name: "hop",
  keys: ["up"],
  hold: 4
}, {
  name: "hop-left",
  keys: ["up", "left"],
  hold: 4
}, {
  name: "hop-right",
  keys: ["up", "right"],
  hold: 4
}];
var i2 = i1.length;
function isFreeFlight(i) {
  if (!i) {
    return false;
  }
  let iP = String(i.mask_index || i.sprite_index || "");
  return !/heartgreen|heartpurple/i.test(iP);
}
T(isFreeFlight, "isFreeFlight");
var i4 = 20;
function modeIndex(i) {
  let iW = String(i || "").replace(/^spr_/, "");
  if (/heartblue/.test(iW)) {
    return 1;
  } else if (/heartgreen/.test(iW)) {
    return 2;
  } else if (/heartpurple/.test(iW)) {
    return 3;
  } else {
    return 0;
  }
}
T(modeIndex, "modeIndex");
function encode(i, h, iQ, ix, io) {
  let iZ = ix || new Float32Array(i0);
  iZ.fill(0);
  if (!i) {
    return iZ;
  }
  let ic = v[i.mask_index] || v[i.sprite_index];
  let iq = ic && ic.bb ? (ic.bb[2] - ic.bb[0] + 1) / 2 : 8;
  let iH = ic && ic.bb ? (ic.bb[3] - ic.bb[1] + 1) / 2 : 8;
  let ig = i.x + iq;
  let iT = i.y + iH;
  let il = h ? h.length : 0;
  for (let hz = 0; hz < b; hz++) {
    for (let hL = 0; hL < b; hL++) {
      let hV = ig + (hL - C) * K;
      let hU = iT + (hz - C) * K;
      let hE = i4 + 1;
      for (let hs = 0; hs < il; hs++) {
        let hO = h[hs];
        for (let hB = 0; hB <= i4; hB += 4) {
          if (hO.t0 !== undefined && hB < hO.t0 || hO.ttl !== undefined && hB > hO.ttl) {
            continue;
          }
          let hI;
          let hf;
          if (hO.path) {
            let hX = hO.path(hB);
            hI = hX[0];
            hf = hX[1];
          } else {
            hI = hO.x + hO.vx * hB + (hO.ax || 0) * 0.5 * hB * hB;
            hf = hO.y + hO.vy * hB + (hO.ay || 0) * 0.5 * hB * hB;
          }
          if (Math.abs(hV - hI) < K / 2 + hO.hw && Math.abs(hU - hf) < K / 2 + hO.hh) {
            if (hB < hE) {
              hE = hB;
            }
            break;
          }
        }
      }
      iZ[hz * b + hL] = hE > i4 ? 0 : 1 - hE / i4;
    }
  }
  let hy = b * b;
  iZ[hy + modeIndex(i.mask_index || i.sprite_index)] = 1;
  hy += 4;
  iZ[hy++] = Math.max(-1, Math.min(1, (i.hspeed || 0) / 6));
  iZ[hy++] = Math.max(-1, Math.min(1, (i.vspeed || 0) / 8));
  iZ[hy++] = i.jumpstage === 1 ? 1 : 0;
  if (iQ) {
    iZ[hy++] = Math.max(0, Math.min(1, (ig - iQ[0]) / 160));
    iZ[hy++] = Math.max(0, Math.min(1, (iQ[2] - ig) / 160));
    iZ[hy++] = Math.max(0, Math.min(1, (iT - iQ[1]) / 160));
    iZ[hy++] = Math.max(0, Math.min(1, (iQ[3] - iT) / 160));
  } else {
    hy += 4;
  }
  let hn = o.idealborder;
  if (iQ && hn && hn.length >= 4) {
    iZ[hy++] = Math.max(-1, Math.min(1, (hn[0] - iQ[0]) / 40));
    iZ[hy++] = Math.max(-1, Math.min(1, (hn[1] - iQ[2]) / 40));
    iZ[hy++] = Math.max(-1, Math.min(1, (hn[2] - iQ[1]) / 40));
    iZ[hy++] = Math.max(-1, Math.min(1, (hn[3] - iQ[3]) / 40));
  } else {
    hy += 4;
  }
  let hx = 1000000000;
  let hq = 0;
  let hg = 0;
  let hT = 0;
  let hl = 0;
  for (let hp = 0; hp < il; hp++) {
    let hJ = h[hp];
    let hY = hJ.x - ig;
    let hN = hJ.y - iT;
    let hK = Math.hypot(hY, hN);
    if (hK < hx) {
      hx = hK;
      hq = hY;
      hg = hN;
      hT = hJ.vx;
      hl = hJ.vy;
    }
  }
  if (hx < 100000000) {
    iZ[hy++] = Math.max(-1, Math.min(1, hq / 120));
    iZ[hy++] = Math.max(-1, Math.min(1, hg / 120));
    iZ[hy++] = Math.max(-1, Math.min(1, hT / 10));
    iZ[hy++] = Math.max(-1, Math.min(1, hl / 10));
  } else {
    hy += 4;
  }
  iZ[hy++] = Math.min(1, il / 40);
  iZ[hy++] = 1;
  if (io != null && io >= 0 && io < 12) {
    iZ[hy + io] = 1;
  }
  hy += 12;
  clockTick();
  let hb = Math.max(0, o.turn | 0);
  iZ[hy + Math.min(11, hb)] = 1;
  hy += 12;
  iZ[hy++] = Math.min(1, hb / 24);
  iZ[hy++] = o.turntimer > 0 ? Math.min(1, o.turntimer / 300) : 0;
  iZ[hy++] = o._clkFrame !== undefined ? Math.min(1, (q.frame - o._clkFrame) / 400) : 0;
  if (iQ) {
    iZ[hy++] = Math.max(0, Math.min(1, (ig - iQ[0]) / Math.max(1, iQ[2] - iQ[0])));
    iZ[hy++] = Math.max(0, Math.min(1, (iT - iQ[1]) / Math.max(1, iQ[3] - iQ[1])));
  } else {
    hy += 2;
  }
  return iZ;
}
T(encode, "encode");
var i8 = null;
var i9 = null;
var getGfx = T(() => i8 ||= x(c), "getGfx");
var ih = {
  searches: 0,
  frames: 0,
  ms: 0,
  nodes: 0
};
function hpTotal() {
  if (typeof o.hp == "number") {
    return o.hp;
  }
  if (Array.isArray(o.hp)) {
    let i = 0;
    for (let h = 1; h <= 3; h++) {
      i += Number(o.hp[h]) || 0;
    }
    return i;
  }
  return 0;
}
T(hpTotal, "hpTotal");
function clearance() {
  let i = q.first("obj_heart") || q.first("obj_purpleheart");
  if (!i) {
    return 0;
  }
  let iP = 1000000000;
  for (let ik of q.list) {
    if (ik.destroyed || ik === i) {
      continue;
    }
    let iW = ik.constructor.name;
    if (!/bul|bone|spear|blast|arrow|flame|slash|knife|bullet/i.test(iW)) {
      continue;
    }
    let iw = Math.hypot((ik.x || 0) - i.x, (ik.y || 0) - i.y);
    if (iw < iP) {
      iP = iw;
    }
  }
  if (iP === 1000000000) {
    return 200;
  } else {
    return Math.min(200, iP);
  }
}
T(clearance, "clearance");
function actionsFor(i) {
  let iP = q.first("obj_heart") || q.first("obj_purpleheart");
  let ik = String(iP && (iP.mask_index || iP.sprite_index) || "");
  let iW = /heartblue/i.test(ik);
  let iw = (i || 0) >= 2;
  let iM = [];
  for (let iy = 0; iy < i1.length; iy++) {
    let ie = i1[iy];
    if ((!iw || !(ie.keys.length > 1) || ie.hold !== undefined) && (!!iW || ie.hold === undefined)) {
      iM.push(iy);
    }
  }
  return iM;
}
T(actionsFor, "actionsFor");
function soulKey() {
  let i = q.first("obj_heart") || q.first("obj_purpleheart");
  if (i) {
    return (i.x | 0) + "," + (i.y | 0) + "," + Math.round((i.vspeed || 0) * 2) + "," + (i.jumpstage || 0);
  } else {
    return "none";
  }
}
T(soulKey, "soulKey");
function playMacro(i, iP, ik) {
  let iW = 0;
  let iw = false;
  let iM = 0;
  for (let iy = 0; iy < iP; iy++) {
    for (let iQ of ["left", "right", "up", "down"]) {
      Z.held[iQ] = false;
    }
    for (let ix of i.keys) {
      if (ix !== "up" || i.hold === undefined || !(iy >= i.hold)) {
        Z.held[ix] = true;
      }
    }
    Z.pressed.up = iy === 0 && i.keys.indexOf("up") >= 0;
    try {
      d(e, getGfx());
    } catch {
      iW += 99;
      iw = true;
      break;
    }
    iM++;
    ih.frames++;
    let ie = hpTotal();
    if (ie < ik - iW) {
      iW = ik - ie;
    }
    if (ie <= 0 || o.battleover) {
      iw = true;
      break;
    }
  }
  return {
    lost: iW,
    dead: iw,
    ran: iM
  };
}
T(playMacro, "playMacro");
function beamBest(i) {
  let iP = i || {};
  let ik = iP.width || 6;
  let iW = iP.depth || 10;
  let iw = iP.near || 2;
  let iM = iP.far || iP.macro || 6;
  if (!q.list.length || !q.first("obj_heart") && !q.first("obj_purpleheart")) {
    return null;
  }
  let iy = typeof performance !== "undefined" && performance.now ? performance.now() : 0;
  let ie = Q();
  let iQ = hpTotal();
  H();
  let ix = iP.budgetMs || 0;
  let io = ix ? (typeof performance !== "undefined" ? performance.now() : Date.now()) + ix : 0;
  let iv = () => io && (typeof performance !== "undefined" ? performance.now() : Date.now()) > io;
  let id = (iH, ig) => {
    let iT = [{
      snap: ie,
      lost: 0,
      clear: clearance(),
      first: -1,
      dead: false,
      line: []
    }];
    for (let il = 0; il < ig && (!(il > 0) || !iv()); il++) {
      let it = il === 0 ? iw : iM;
      let hy = [];
      let he = new Map();
      for (let hx = 0; hx < iT.length; hx++) {
        let ho = iT[hx];
        if (ho.dead) {
          hy.push({
            keep: ho
          });
          continue;
        }
        n(ho.snap);
        let hv = actionsFor(il);
        if (il === 0 && iP.rootOnly && iP.rootOnly.length && (hv = hv.filter(hd => iP.rootOnly.indexOf(hd) >= 0), !hv.length)) {
          return null;
        }
        if (iP.guide && iP.topK && hv.length > iP.topK) {
          let hd = q.first("obj_heart") || q.first("obj_purpleheart");
          if (hd) {
            let hZ = [];
            try {
              hZ = y();
            } catch {}
            i9 = i9 || new Float32Array(i0);
            let hc = ho.line.length ? ho.line[ho.line.length - 1] : iP.prev ?? -1;
            encode(hd, hZ, M(), i9, hc);
            let hq = iP.guide.forward(i9);
            hv = hv.slice().sort((hH, hg) => hq[hg] - hq[hH]).slice(0, iP.topK);
          }
        }
        for (let hH of hv) {
          n(ho.snap);
          let hg = playMacro(i1[hH], it, iQ);
          ih.nodes++;
          let hT = {
            parent: ho,
            action: hH,
            frames: it,
            key: soulKey(),
            lost: Math.max(ho.lost, hg.lost),
            clear: hg.dead ? 0 : clearance(),
            first: ho.first < 0 ? hH : ho.first,
            dead: hg.dead
          };
          let hl = he.get(hT.key);
          if (!hl || !!(hT.lost < hl.lost) || hT.lost === hl.lost && !!(hT.clear > hl.clear)) {
            if (hl) {
              let hb = hy.indexOf(hl);
              if (hb >= 0) {
                hy.splice(hb, 1);
              }
            }
            he.set(hT.key, hT);
            hy.push(hT);
          }
        }
      }
      if (!hy.length) {
        break;
      }
      hy.sort((hz, hL) => {
        let hV = hz.keep ? hz.keep.lost : hz.lost;
        let hU = hL.keep ? hL.keep.lost : hL.lost;
        let hE = (hz.keep ? hz.keep.dead : hz.dead) ? 1 : 0;
        let hs = (hL.keep ? hL.keep.dead : hL.dead) ? 1 : 0;
        let hO = hz.keep ? hz.keep.clear : hz.clear;
        let hB = hL.keep ? hL.keep.clear : hL.clear;
        return hV - hU || hE - hs || hB - hO;
      });
      let hQ = hy.slice(0, iH);
      let hn = [];
      for (let hz of hQ) {
        if (hz.keep) {
          hn.push(hz.keep);
          continue;
        }
        n(hz.parent.snap);
        playMacro(i1[hz.action], hz.frames, iQ);
        hn.push({
          snap: Q(),
          lost: hz.lost,
          clear: hz.clear,
          first: hz.first,
          dead: hz.dead,
          line: hz.parent.line.concat(hz.action)
        });
      }
      iT = hn;
      if (iT.every(hL => hL.lost === 0) && il >= 2 && iT[0].clear > 90) {
        break;
      }
    }
    return ic(iT)[0];
  };
  let iZ = iP.tail === undefined ? 45 : iP.tail;
  let ic = iH => {
    if (!iZ) {
      return iH;
    }
    for (let ig of iH) {
      if (ig.dead) {
        ig.tailLost = 99;
        continue;
      }
      n(ig.snap);
      let iT = hpTotal();
      let il = 0;
      for (let it = 0; it < iZ; it++) {
        let hy = q.first("obj_heart") || q.first("obj_purpleheart");
        if (hy) {
          try {
            w(null, hy);
          } catch {}
        }
        try {
          d(e, getGfx());
        } catch {
          il += 99;
          break;
        }
        ih.frames++;
        let he = hpTotal();
        if (iT - he > il) {
          il = iT - he;
        }
        if (he <= 0 || o.battleover) {
          il += 50;
          break;
        }
      }
      ig.tailLost = il;
    }
    iH.sort((hQ, hn) => hQ.lost + (hQ.tailLost || 0) - (hn.lost + (hn.tailLost || 0)) || hQ.lost - hn.lost || hn.clear - hQ.clear);
    return iH;
  };
  let iq;
  try {
    iq = id(ik, iW);
    if (iq && (iq.lost > 0 || iq.tailLost > 0) && iP.escalate !== false && !iv()) {
      let iH = id(ik * 2, Math.min(iW + 6, 20));
      if (iH && iH.lost + (iH.tailLost || 0) < iq.lost + (iq.tailLost || 0)) {
        iq = iH;
      }
    }
  } finally {
    g();
  }
  n(ie);
  ih.searches++;
  if (iy) {
    ih.ms += performance.now() - iy;
  }
  if (!iq || iq.first < 0) {
    return null;
  } else {
    return {
      act: i1[iq.first],
      index: iq.first,
      lost: iq.lost,
      clear: iq.clear,
      line: iq.line
    };
  }
}
T(beamBest, "beamBest");
var BeamPlan = class r0 {
  constructor(i) {
    this.opts = i || {};
    this.near = this.opts.near || 2;
    this.far = this.opts.far || this.opts.macro || 8;
    this.queue = [];
    this.lastLost = 0;
    this.searches = 0;
    this.replanAt = this.opts.replan || 0;
  }
  flatten(i) {
    let iP = [];
    for (let ik = 0; ik < i.length; ik++) {
      let iW = i1[i[ik]];
      let iw = ik === 0 ? this.near : this.far;
      for (let iM = 0; iM < iw; iM++) {
        let iy = [];
        for (let ie of iW.keys) {
          if (ie !== "up" || iW.hold === undefined || !(iM >= iW.hold)) {
            iy.push(ie);
          }
        }
        iP.push({
          keys: iy,
          edge: iM === 0 && iW.keys.indexOf("up") >= 0,
          index: i[ik]
        });
      }
    }
    return iP;
  }
  step() {
    if (!this.queue.length) {
      let h = beamBest(this.opts);
      this.searches++;
      if (!h || !h.line || !h.line.length) {
        return -1;
      }
      this.lastLost = h.lost;
      this.queue = this.flatten(h.line);
      if (h.lost > 0) {
        this.queue = this.queue.slice(0, this.near);
      } else if (this.replanAt > 0) {
        this.queue = this.queue.slice(0, this.replanAt);
      }
    }
    let i = this.queue.shift();
    if (!i) {
      return -1;
    }
    for (let iP of ["left", "right", "up", "down"]) {
      Z.held[iP] = false;
    }
    for (let ik of i.keys) {
      Z.held[ik] = true;
    }
    Z.pressed.up = i.edge;
    return i.index;
  }
};
T(BeamPlan, "BeamPlan");
var iS = BeamPlan;
var BeamDriver = class r1 {
  constructor(i) {
    this.opts = i || {};
    this.macro = this.opts.near || this.opts.macro || 6;
    this.planAhead = Math.max(1, this.opts.planAhead || 1);
    this.queue = [];
    this.index = -1;
    this.lastLost = 0;
  }
  flatten(i) {
    let iP = [];
    let ik = Math.max(1, Math.min(this.planAhead, Math.ceil(i.length / 2)));
    for (let iW = 0; iW < ik; iW++) {
      let iw = i1[i[iW]];
      for (let iM = 0; iM < this.macro; iM++) {
        let iy = [];
        for (let ie of iw.keys) {
          if (ie !== "up" || iw.hold === undefined || !(iM >= iw.hold)) {
            iy.push(ie);
          }
        }
        iP.push({
          keys: iy,
          edge: iM === 0 && iw.keys.indexOf("up") >= 0,
          index: i[iW]
        });
      }
    }
    return iP;
  }
  step() {
    if (!this.queue.length) {
      let h = beamBest(this.opts);
      if (!h || (this.lastLost = h.lost, this.queue = h.line && h.line.length ? this.flatten(h.line) : [], !this.queue.length)) {
        return -1;
      }
      if (h.lost > 0) {
        this.queue = this.queue.slice(0, this.macro);
      }
    }
    let i = this.queue.shift();
    if (!i) {
      return -1;
    }
    for (let iP of ["left", "right", "up", "down"]) {
      Z.held[iP] = false;
    }
    for (let ik of i.keys) {
      Z.held[ik] = true;
    }
    Z.pressed.up = i.edge;
    this.index = i.index;
    return i.index;
  }
};
T(BeamDriver, "BeamDriver");
var iF = BeamDriver;
export { clockTick as a, i0 as b, i1 as c, i2 as d, isFreeFlight as e, encode as f, ih as g, beamBest as h, iS as i, iF as j };
