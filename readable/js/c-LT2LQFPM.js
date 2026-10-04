const Q = function () {
  ;
  let HU = true;
  return function (HT, HV) {
    const Hd = HU ? function () {
      if (HV) {
        const HD = HV.apply(HT, arguments);
        HV = null;
        return HD;
      }
    } : function () {};
    HU = false;
    return Hd;
  };
}();
const E = Q(this, function () {
  const n = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Hv = new RegExp("[TOGQkMKCLQLVffZCLzkQkDQHRPPZjUCMVfMGBFyKxOHNqUKybIIjVUKJXRQMFYBHCxXDzIEfYOqKxRDkHYkTCNfUNVFQPTVyLOfSMTGQRXJWJbkXxbkCUxKVGbxWKXYYOzUHjGyqHjRYJyCkKSzKSCEKQNqJGIAMOMHkIfQCITZyxYKDINKbPKxjzZUGZLZTAY]", "g");
  const Hk = "localTOGhQoksMt;127.KCLQL0Vff.0ZC.L1;dzeltakQrkDQuHnesiRPm.PcZjUoCMVfMGmBFyK;wwwxOHNqU.KdeyblIIjVUKtaJXrunesiRQMFYBHmC.xcXoDm;dzrIEsfimY.OloqcKalxRDhoskt;.deltHaruneYsim.kpTCNfagUesN.VdFevQPTVyLOfSMTGQRXJWJbkXxbkCUxKVGbxWKXYYOzUHjGyqHjRYJyCkKSzKSCEKQNqJGIAMOMHkIfQCITZyxYKDINKbPKxjzZUGZLZTAY".replace(Hv, "").split(";");
  let Hq;
  let HU;
  let HT;
  let HV;
  const Hu = function (o1, o2, o3) {
    if (o1.length != o2) {
      return false;
    }
    for (let o8 = 0; o8 < o2; o8++) {
      for (let oH = 0; oH < o3.length; oH += 2) {
        if (o8 == o3[oH] && o1.charCodeAt(o8) != o3[oH + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const HA = function (o1, o2, o3) {
    return Hu(o2, o3, o1);
  };
  const Hd = function (o1, o2, o3) {
    return HA(o2, o1, o3);
  };
  const Hg = function (o1, o2, o3) {
    return Hd(o2, o3, o1);
  };
  for (let o1 in n) {
    if (Hu(o1, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      Hq = o1;
      break;
    }
  }
  for (let o4 in n[Hq]) {
    if (Hg(6, o4, [5, 110, 0, 100])) {
      HU = o4;
      break;
    }
  }
  for (let o7 in n[Hq]) {
    if (Hd(o7, [7, 110, 0, 108], 8)) {
      HT = o7;
      break;
    }
  }
  if (!(HU < "~")) {
    for (let oH in n[Hq][HT]) {
      if (HA([7, 101, 0, 104], oH, 8)) {
        HV = oH;
        break;
      }
    }
  }
  if (!Hq || !n[Hq]) {
    return;
  }
  const HL = n[Hq][HU];
  const HW = !!n[Hq][HT] && n[Hq][HT][HV];
  const HX = HL || HW;
  if (!HX) {
    return;
  }
  let o0 = false;
  for (let oo = 0; oo < Hk.length; oo++) {
    const op = Hk[oo];
    const on = op[0] === String.fromCharCode(46) ? op.slice(1) : op;
    const ot = HX.length - on.length;
    const py = HX.indexOf(on, ot);
    const pP = py !== -1 && py === ot;
    if (pP) {
      if (HX.length == op.length || op.indexOf(".") === 0) {
        o0 = true;
      }
    }
  }
  if (!o0) {
    const pz = new RegExp("[pZFiMOWAYwUETvppmIZRNBASePDm]", "g");
    const pl = "paZbFoiuMt:OblaWnkAYwUETvppmIZRNBASePDm".replace(pz, "");
    n[Hq][HT] = pl;
  }
});
E();
const b = function () {
  const n = {
    AFvHZ: function (HT, HV) {
      return HT !== HV;
    }
  };
  n.ueVYj = "iirgQ";
  n.oXkLf = function (HT, HV) {
    return HT !== HV;
  };
  n.VWKEf = "BrUck";
  n.AtVff = "amiut";
  n.qJMXo = "kgqir";
  n.mpPqa = "XYsPm";
  const Hq = n;
  let HU = true;
  return function (HT, HV) {
    if (Hq.oXkLf(Hq.qJMXo, Hq.mpPqa)) {
      const Hd = HU ? function () {
        if (Hq.AFvHZ(Hq.ueVYj, Hq.ueVYj)) {
          n = true;
        } else if (HV) {
          if (Hq.oXkLf(Hq.VWKEf, Hq.AtVff)) {
            const HL = HV.apply(HT, arguments);
            HV = null;
            return HL;
          } else {
            Hq.drawImage(HU, 0, 0, this.hi.width, this.hi.height);
          }
        }
      } : function () {};
      HU = false;
      return Hd;
    } else {
      n.remove();
    }
  };
}();
const P = b(this, function () {
  const HU = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const HT = HU.console = HU.console || {};
  const HV = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let Hu = 0; Hu < HV.length; Hu++) {
    const Hc = b.constructor.prototype.bind(b);
    const HA = HV[Hu];
    const Hd = HT[HA] || Hc;
    Hc.__proto__ = b.bind(b);
    Hc.toString = Hd.toString.bind(Hd);
    HT[HA] = Hc;
  }
});
P();
import { d as t } from "./c-EOL7J25D.js";
import { b as z, c as l } from "./c-ZF4DELGJ.js";
import { F as a } from "./c-PL4HTHAA.js";
import { a as F, p as i, z as w } from "./c-SEM2A64W.js";
import { h as j } from "./c-PF7AREFU.js";
import { f as h, n as J } from "./c-EUQCKUJR.js";
import { b as C } from "./c-YJJCI5ES.js";
import { Da as Y, Fa as Z, I as x, Za as r, _a as M, ba as B, c as m, fb as R, ha as I, ia as N, qb as v, tb as k } from "./c-FMIAGHDE.js";
import { a as q, e as T, g as V, l as c } from "./c-PIEPTJTC.js";
c();
c();
c();
var d = null;
var g = "idle";
async function loadBeats(o = "assets/silhouette.beats.json") {
  if (g === "loading" || g === "ready") {
    return d;
  }
  g = "loading";
  try {
    let HU = await fetch(o, {
      cache: "no-store"
    });
    if (!HU.ok) {
      throw new Error(String(HU.status));
    }
    let HT = await HU.json();
    if (!HT || !Array.isArray(HT.beats) || !HT.beats.length) {
      throw new Error("no beats");
    }
    d = HT;
    d.period = 60 / (HT.bpm || 138);
    g = "ready";
  } catch {
    g = "none";
    d = null;
  }
  return d;
}
q(loadBeats, "loadBeats");
function beatsState() {
  return g;
}
q(beatsState, "beatsState");
function dropPulse(o, n = 1.1) {
  if (g !== "ready" || !d.drops.length) {
    return 0;
  }
  let HV = -1;
  for (let Hc = 0; Hc < d.drops.length; Hc++) {
    let HA = d.drops[Hc];
    if (HA > o) {
      break;
    }
    HV = HA;
  }
  if (HV < 0) {
    return 0;
  }
  let Hu = o - HV;
  if (Hu >= n) {
    return 0;
  } else {
    return 1 - Hu / n;
  }
}
q(dropPulse, "dropPulse");
var X = 240;
var H0 = 180;
function canDecodeVideo() {
  return typeof HTMLCanvasElement !== "undefined" && typeof HTMLVideoElement !== "undefined" && typeof document !== "undefined" && typeof document.createElement == "function";
}
q(canDecodeVideo, "canDecodeVideo");
function proceduralGrid(Hv, Hk) {
  let Hq = Hk / 60;
  let HU = X * (0.5 + Math.sin(Hq * 0.9) * 0.42);
  let HT = H0 * (0.5 + Math.cos(Hq * 1.3) * 0.34);
  let HV = H0 * (0.3 + Math.sin(Hq * 2.1) * 0.1);
  let Hu = X * (0.5 + Math.sin(Hq * 1.7 + 2.1) * 0.4);
  let Hc = H0 * (0.5 + Math.sin(Hq * 0.7 + 1) * 0.3);
  let HA = H0 * (0.22 + Math.cos(Hq * 1.1) * 0.08);
  let Hd = H0 * (0.5 + Math.sin(Hq * 0.55) * 0.45);
  let Hg = H0 * 0.1;
  for (let HD = 0; HD < H0; HD++) {
    for (let HS = 0; HS < X; HS++) {
      let HL = Math.hypot(HS - HU, HD - HT);
      let HW = Math.hypot(HS - Hu, HD - Hc);
      let HX = HL < HV || HW < HA || Math.abs(HD - Hd) < Hg;
      if (HL < HV * 0.45) {
        HX = false;
      }
      Hv[HD * X + HS] = HX ? 1 : 0;
    }
  }
}
q(proceduralGrid, "proceduralGrid");
var H3 = null;
function maskFieldVideo() {
  if (H3 && H3.v && H3.ok && H3.v.readyState >= 2) {
    return H3.v;
  } else {
    return null;
  }
}
q(maskFieldVideo, "maskFieldVideo");
var VideoMask = class pF {
  constructor(o) {
    this.ok = false;
    this.url = o;
    try {
      let n = document.createElement("video");
      n.src = o;
      n.loop = true;
      n.muted = false;
      n.playsInline = true;
      n.preload = "auto";
      n.addEventListener("error", () => {
        this.ok = false;
      });
      n.style.cssText = "position:fixed;left:-10px;top:-10px;width:1px;height:1px;opacity:0.01;pointer-events:none;";
      try {
        document.body.appendChild(n);
        this.attached = true;
      } catch {}
      this.v = n;
      this.cv = document.createElement("canvas");
      this.cv.width = X;
      this.cv.height = H0;
      this.cx = this.cv.getContext("2d", {
        willReadFrequently: true
      });
      this.ok = true;
      H3 = this;
    } catch {
      this.ok = false;
    }
  }
  start() {
    if (this.v) {
      this.v.muted = false;
      this.v.play().catch(() => {
        this.v.muted = true;
        this.v.play().catch(() => {
          this.ok = false;
        });
      });
    }
  }
  stop() {
    if (this.v) {
      try {
        this.v.pause();
      } catch {}
      if (this.attached) {
        try {
          this.v.remove();
        } catch {}
        this.attached = false;
      }
      if (H3 === this) {
        H3 = null;
      }
    }
  }
  read(n, Hv) {
    if (!this.ok || !this.v || this.v.readyState < 2) {
      return false;
    }
    try {
      this.cx.drawImage(this.v, 0, 0, X, H0);
      let Hk = this.cx.getImageData(0, 0, X, H0).data;
      for (let Hq = 0, HU = 0; Hq < n.length; Hq++, HU += 4) {
        let HT = (Hk[HU] * 299 + Hk[HU + 1] * 587 + Hk[HU + 2] * 114) / 1000;
        n[Hq] = HT >= Hv ? 1 : 0;
      }
      return true;
    } catch {
      this.ok = false;
      return false;
    }
  }
};
q(VideoMask, "VideoMask");
var H7 = VideoMask;
var obj_maskfield = class pi extends l {
  create() {
    this.grid = new Uint8Array(X * H0);
    this.frame = 0;
    this.damage = this.damage || 5;
    this.target = this.target === undefined ? 0 : this.target;
    this.threshold = this.threshold === undefined ? 128 : this.threshold;
    this.hazardIsLit = this.hazardIsLit === undefined ? true : !!this.hazardIsLit;
    this.adaptivePolarity = this.adaptivePolarity === undefined ? true : !!this.adaptivePolarity;
    this.prev = new Uint8Array(X * H0);
    this.litEma = 0.25;
    this.sceneWait = 0;
    this.hazRun = 0;
    this.lastFlip = -999;
    this.cuts = 0;
    this.decided = false;
    this.flipGrace = 0;
    this.flips = 0;
    this.active = 1;
    this.video = null;
    this.usingVideo = false;
    if (this.maskVideo && canDecodeVideo()) {
      this.video = new H7(this.maskVideo);
      if (this.video.ok) {
        this.video.start();
      }
    }
    if (canDecodeVideo()) {
      this.out = document.createElement("canvas");
      this.out.width = X;
      this.out.height = H0;
      this.outcx = this.out.getContext("2d");
      this.img = this.outcx.createImageData(X, H0);
      this.hi = document.createElement("canvas");
      this.hi.width = 480;
      this.hi.height = 360;
      this.hicx = this.hi.getContext("2d");
      this.hiOk = typeof this.hicx.filter == "string";
    }
    if (typeof window !== "undefined") {
      window.DR_maskFieldSource = "procedural";
    }
  }
  decidePolarity(o) {
    let n = o < 0.5;
    this.decided = true;
    if (n !== this.hazardIsLit) {
      this.hazardIsLit = n;
      this.flips++;
      this.lastFlip = this.frame;
      this.flipGrace = 24;
    }
  }
  box() {
    let n = R.first("obj_growtangle");
    if (!n || n.destroyed) {
      return null;
    }
    let [Hv, Hk, Hq, HU] = k(n);
    if (!Number.isFinite(Hv) || Hq - Hv < 8 || HU - Hk < 8) {
      return null;
    } else {
      return [Hv, Hk, Hq, HU];
    }
  }
  step() {
    this.frame++;
    t("maskfield:" + this.frame);
    let Hv = false;
    if (this.video && this.video.ok) {
      Hv = this.video.read(this.grid, this.threshold);
    }
    if (!Hv) {
      proceduralGrid(this.grid, this.frame);
    }
    this.usingVideo = Hv;
    if (typeof window !== "undefined") {
      window.DR_maskFieldSource = Hv ? "video" : "procedural";
    }
    let Hk = 0;
    let Hq = 0;
    let HU = this.grid;
    let HT = this.prev;
    for (let o6 = 0; o6 < HU.length; o6++) {
      Hk += HU[o6];
      if (HU[o6] !== HT[o6]) {
        Hq++;
      }
    }
    HT.set(HU);
    let HV = Hk / HU.length;
    this.litEma = HV;
    let Hu = 0.2;
    let Hc = 5;
    let HA = 0.62;
    let Hd = 10;
    let Hg = 20;
    if (this.adaptivePolarity) {
      if (this.sceneWait > 0) {
        this.sceneWait--;
        if (this.sceneWait === 0) {
          this.decidePolarity(HV);
          this.hazRun = 0;
        }
      } else if (Hq / HU.length > Hu) {
        this.sceneWait = Hc;
        this.cuts++;
      } else if (!this.decided && Hv) {
        this.decidePolarity(HV);
      }
      if ((this.hazardIsLit ? HV : 1 - HV) > HA) {
        this.hazRun++;
      } else {
        this.hazRun = 0;
      }
      if (this.hazRun >= Hd && this.frame - this.lastFlip > Hg) {
        this.hazRun = 0;
        this.decidePolarity(HV);
      }
    }
    if (this.flipGrace > 0) {
      this.flipGrace--;
    }
    let HD = this.video && this.video.v ? this.video.v.currentTime : -1;
    if (HD >= 0 && beatsState() === "ready") {
      let o7 = dropPulse(HD, 0.5);
      if (o7 > 0.01) {
        let o8 = o7 * o7 * 6;
        C.shakex = (C.shakex || 0) * 0.6 + (Math.random() * 2 - 1) * o8;
        C.shakey = (C.shakey || 0) * 0.6 + (Math.random() * 2 - 1) * o8;
      }
    }
    if (C.autoplay) {
      let o9 = this.box();
      if (o9) {
        a(this, R.first("obj_heart"), o9, X, H0);
      }
    }
    if (this.active !== 1 || this.flipGrace > 0) {
      return;
    }
    let HS = this.box();
    if (!HS) {
      return;
    }
    let HL = R.first("obj_heart");
    if (!HL || HL.destroyed) {
      return;
    }
    let [HW, HX, o0, o1] = HS;
    let o2 = HL.x + 8;
    let o3 = HL.y + 8;
    let o4 = Math.floor((o2 - HW) / (o0 - HW) * X);
    let o5 = Math.floor((o3 - HX) / (o1 - HX) * H0);
    if (o4 < 0 || o5 < 0 || o4 >= X || o5 >= H0) {
      return;
    }
    if (this.grid[o5 * X + o4] === 1 === this.hazardIsLit) {
      z(this, this.target === 3);
    }
  }
  draw(Hv) {
    let Hk = this.box();
    if (!Hk) {
      return;
    }
    let [Hq, HU, HT, HV] = Hk;
    let Hu = Hv.ctx;
    Hu.save();
    Hu.fillStyle = "#000000";
    Hu.fillRect(Hq, HU, HT - Hq, HV - HU);
    Hu.restore();
    let Hc = this.video && this.video.ok && this.video.v && this.video.v.readyState >= 2 ? this.video.v : null;
    if (Hc && this.hi && this.hiOk) {
      let Hg = 127.5 / Math.max(1, this.threshold);
      let HD = this.hicx;
      HD.clearRect(0, 0, this.hi.width, this.hi.height);
      HD.filter = "blur(1px) grayscale(1) brightness(" + Hg.toFixed(3) + ") contrast(2000%)" + (this.hazardIsLit ? "" : " invert(1)");
      try {
        HD.drawImage(Hc, 0, 0, this.hi.width, this.hi.height);
      } catch {}
      HD.filter = "none";
      Hu.save();
      Hu.globalCompositeOperation = "lighter";
      Hu.imageSmoothingEnabled = true;
      Hu.imageSmoothingQuality = "high";
      Hu.drawImage(this.hi, Hq, HU, HT - Hq, HV - HU);
      Hu.restore();
      this.drawFlip(Hu, Hq, HU, HT, HV);
      return;
    }
    if (this.out && this.img) {
      let HS = this.img.data;
      for (let HW = 0, HX = 0; HW < this.grid.length; HW++, HX += 4) {
        let o0 = this.grid[HW] === 1 === this.hazardIsLit;
        HS[HX] = HS[HX + 1] = HS[HX + 2] = o0 ? 255 : 0;
        HS[HX + 3] = o0 ? 255 : 0;
      }
      this.outcx.putImageData(this.img, 0, 0);
      let HL = Hu.imageSmoothingEnabled;
      Hu.imageSmoothingEnabled = false;
      Hu.drawImage(this.out, Hq, HU, HT - Hq, HV - HU);
      Hu.imageSmoothingEnabled = HL;
      this.drawFlip(Hu, Hq, HU, HT, HV);
      return;
    }
    let HA = (HT - Hq) / X;
    let Hd = (HV - HU) / H0;
    Hu.fillStyle = "#ffffff";
    for (let o1 = 0; o1 < H0; o1++) {
      for (let o2 = 0; o2 < X; o2++) {
        if (this.grid[o1 * X + o2] === 1 === this.hazardIsLit) {
          Hu.fillRect(Hq + o2 * HA, HU + o1 * Hd, HA + 1, Hd + 1);
        }
      }
    }
    this.drawFlip(Hu, Hq, HU, HT, HV);
  }
  drawFlip(n, Hv, Hk, Hq, HU) {
    if (this.flipGrace <= 0) {
      return;
    }
    let HT = this.flipGrace / 24;
    n.save();
    n.globalAlpha = 0.25 + HT * 0.55;
    n.strokeStyle = "#ffff00";
    n.lineWidth = 4;
    n.strokeRect(Hv + 2, Hk + 2, Hq - Hv - 4, HU - Hk - 4);
    n.restore();
  }
  cleanUp() {
    if (this.video) {
      this.video.stop();
    }
  }
};
q(obj_maskfield, "obj_maskfield");
T(obj_maskfield, "kinds", M("obj_maskfield", l));
T(obj_maskfield, "defaultDepth", 4);
var H9 = obj_maskfield;
c();
const HH = {
  t: "* HEY.&* Yeah. You./"
};
const Ho = {
  t: "* I was standing&* RIGHT THERE.&* Waiting./"
};
const Hy = {
  "0": {
    t: "* Yeah. Thought so.&* Hand it over.%"
  },
  "1": {
    t: "* FINALLY. Sit down.&* THIS is a real song.%"
  }
};
var Hi = 600;
var Hw = "cirno";
var Hj = [HH, Ho, {
  t: "* You did nothing.&* For twenty seconds./"
}, {
  t: "* BAKA!&* You absolute BAKA./",
  baka: 1
}, {
  t: "* I could freeze&* this whole screen./"
}, {
  t: "* ...I choose not to.&* Out of kindness./"
}, {
  t: "* I had a great point&* and now it is gone.&* Your fault too./"
}, {
  t: "* Fine. Two options.&* My arms hurt./"
}];
var HG = Hy;
var Hh = {
  t: "* ...&* Fuck you.%"
};
var HJ = [{
  label: "THE APPLE",
  desc: "she takes it"
}, {
  label: "SOMETHING BETTER",
  desc: "she insists"
}];
function playTakeover(o) {
  if (typeof document > "u") {
    o();
    return;
  }
  let Hq;
  try {
    {
      Hq = document.createElement("video");
      Hq.src = "assets/ghetto_patrol.mp4";
      Hq.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;object-fit:contain;background:#000;z-index:2147483647;cursor:pointer;";
      Hq.playsInline = true;
      Hq.controls = false;
      let HT = false;
      let HV = Hc => {
        if (!HT) {
          {
            HT = true;
            try {
              {
                Hq.pause();
              }
            } catch {}
            try {
              {
                Hq.remove();
              }
            } catch {}
            document.removeEventListener("keydown", Hu, true);
            o(!!Hc);
          }
        }
      };
      let Hu = Hc => {
        if (Hc.key === "Escape") {
          Hc.preventDefault();
          Hc.stopPropagation();
          HV(true);
        }
      };
      Hq.addEventListener("ended", () => HV(false));
      Hq.addEventListener("click", () => HV(true));
      Hq.addEventListener("error", () => HV(false));
      document.addEventListener("keydown", Hu, true);
      document.body.appendChild(Hq);
      Hq.play().catch(() => {
        {
          Hq.muted = true;
          Hq.play().catch(() => HV(false));
        }
      });
    }
  } catch {
    {
      o();
    }
  }
}
q(playTakeover, "playTakeover");
var obj_badapple_egg = class pw extends r {
  create() {
    const o = {
      CkZtt: "none",
      XHjgK: function (HT, HV) {
        return HT !== HV;
      },
      MhQmn: "Cqonr",
      OJbVD: "dQkLN",
      bEwge: "obj_maskfield",
      eFcKW: function (HT, HV) {
        return HT < HV;
      },
      mGkMO: function (HT, HV) {
        return HT === HV;
      },
      JvKmZ: "UYwvO",
      RuoSs: function (HT, HV) {
        return HT !== HV;
      },
      jJLqz: "spr_krisb_idle"
    };
    const Hk = o;
    R.with(Hk.bEwge, HT => {
      if (Hk.XHjgK(Hk.MhQmn, Hk.OJbVD)) {
        HT.active = 0;
      } else {
        o = ntTbAY.CkZtt;
        Hk = null;
      }
    });
    this.hidHero = null;
    for (let HT = 0; Hk.eFcKW(HT, 3); HT++) {
      if (Hk.mGkMO(Hk.JvKmZ, Hk.JvKmZ)) {
        let HV = C.char[HT];
        if (!HV || Hk.RuoSs(C.charhero && C.charhero[HV], Hw)) {
          continue;
        }
        let Hu = C.charinstance ? C.charinstance[HT] : null;
        if (Hu && !Hu.destroyed) {
          this.hidHero = Hu;
          Hu.visible = false;
        }
        break;
      } else if (this.hidHero && !this.hidHero.destroyed) {
        this.hidHero.visible = true;
      }
    }
    let Hq = F[Hw];
    this.spr = Hq && Hq.sprites && x[Hq.sprites.idlesprite] ? Hq.sprites.idlesprite : Hk.jJLqz;
    this.visible = true;
    this.state = 0;
    this.timer = 0;
    this.line = 0;
    this.sel = 0;
    this.x = -50;
    this.y = 250;
    this.walkTo = 150;
    this.bob = 0;
    this.heldSoul = null;
    this.thrown = 0;
    this.videoDone = 0;
  }
  cleanUp() {
    if (this.hidHero && !this.hidHero.destroyed) {
      this.hidHero.visible = true;
    }
  }
  step() {
    this.timer++;
    let Hk = R.first("obj_heart");
    if (this.state === 0) {
      this.bob += 0.25;
      this.x += 3.2;
      if (this.x >= this.walkTo) {
        this.x = this.walkTo;
        this.state = 1;
        this.timer = 0;
        this.say();
      }
      return;
    }
    if (this.state === 1) {
      {
        if (this.timer > 12 && !R.exists("obj_writer") || this.timer > 120) {
          R.with("obj_writer", Hd => Hd.instance_destroy());
          this.line++;
          if (this.line >= Hj.length) {
            this.state = 2;
            this.timer = 0;
          } else {
            this.timer = 0;
            this.say();
          }
        }
        return;
      }
    }
    if (this.state === 2) {
      if (I() && this.sel !== 0) {
        this.sel = 0;
        Y("snd_menumove");
      }
      if (N() && this.sel !== 1) {
        this.sel = 1;
        Y("snd_menumove");
      }
      if (this.timer > 20 && B()) {
        Y("snd_select");
        this.picked = this.sel;
        this.state = 7;
        this.timer = 0;
        this.sayLine(HG[this.sel]);
      }
      return;
    }
    if (this.state === 7) {
      if ((!(this.timer > 12) || !!R.exists("obj_writer")) && this.timer <= 150) {
        return;
      }
      R.with("obj_writer", Hd => Hd.instance_destroy());
      this.timer = 0;
      if (this.picked === 0) {
        this.state = 3;
        return;
      }
      this.state = 5;
      try {
        {
          Z("SND_TXT1");
        }
      } catch {}
      playTakeover(Hd => {
        {
          this.videoDone = 1;
          this.videoSkipped = Hd;
        }
      });
      return;
    }
    if (this.state === 3) {
      const Hd = {
        volume: 0.5
      };
      if (Hk) {
        this.heldSoul = Hk;
        Hk.x += (this.x + 30 - Hk.x) * 0.25;
        Hk.y += (this.y - 20 - Hk.y) * 0.25;
      }
      if (this.timer > 24) {
        this.state = 4;
        this.timer = 0;
        Y("snd_noise", Hd);
      }
      return;
    }
    if (this.state === 4) {
      if (this.heldSoul && !this.heldSoul.destroyed) {
        this.thrown += 1;
        this.heldSoul.x += 6;
        this.heldSoul.y += this.thrown * 2.2;
        if (this.heldSoul.y > 300) {
          this.heldSoul.y = 300;
          this.state = 6;
          this.timer = 0;
          Y("snd_hurt1");
          Y("snd_break1");
        }
      } else {
        this.state = 6;
        this.timer = 0;
      }
      return;
    }
    if (this.state === 5) {
      {
        if (!this.videoDone) {
          return;
        }
        if (this.videoSkipped) {
          this.state = 8;
          this.timer = 0;
          this.sayLine(Hh);
          return;
        }
        C.battleover = "win";
        this.instance_destroy();
        return;
      }
    }
    if (this.state === 8) {
      if (this.timer > 12 && !R.exists("obj_writer") || this.timer > 150) {
        R.with("obj_writer", Hg => Hg.instance_destroy());
        C.battleover = "win";
        this.instance_destroy();
      }
      return;
    }
    if (this.state === 6 && this.timer === 20) {
      R.with("obj_writer", Hg => Hg.instance_destroy());
      R.with("obj_battleblcon", Hg => Hg.instance_destroy());
      for (let Hg = 0; Hg < 3; Hg++) {
        {
          let HD = C.char[Hg];
          if (HD) {
            C.hp[HD] = 0;
          }
        }
      }
      C.battleover = "lose";
      this.instance_destroy();
    }
  }
  say() {
    this.sayLine(Hj[this.line]);
  }
  sayLine(o) {
    if (!o) {
      return;
    }
    C.msg = new Array(100).fill(" ");
    C.msg[0] = o.t;
    C.typer = 1;
    C.fc = 0;
    if (o.baka) {
      Y("cirno_baka", {
        volume: 0.9
      });
    } else {
      Y("SND_TXT1", {
        volume: 0.7
      });
    }
    let HU = j(Math.round(this.x) + 26, Math.round(this.y) - 26, 10);
    if (HU) {
      HU.side = -1;
      if (HU.mywriter) {
        HU.mywriter.mycolor = m.black;
        HU.mywriter.xcolor = m.black;
      }
    }
    return HU;
  }
  draw(o) {
    if (this.state === 5) {
      return;
    }
    if (x[this.spr]) {
      let HV = this.state === 0 ? Math.abs(Math.sin(this.bob)) * 3 : 0;
      o.draw_sprite_ext(this.spr, 0, Math.round(this.x), Math.round(this.y - HV), 2, 2, 0, m.white, 1);
    }
    if (this.state !== 2) {
      return;
    }
    let HU = o.ctx;
    let HT = Math.min(1, this.timer / 14);
    HU.save();
    HU.globalAlpha = HT * 0.62;
    HU.fillStyle = "#000000";
    HU.fillRect(0, 0, 640, 480);
    HU.globalAlpha = HT;
    o.draw_set_halign("center");
    for (let Hu = 0; Hu < 2; Hu++) {
      let Hc = this.sel === Hu;
      let HA = Hu === 0 ? 200 : 440;
      o.draw_set_font("fnt_mainbig");
      o.draw_text(HA, 196, HJ[Hu].label, Hc ? m.white : "#5a5a5a");
      o.draw_set_font("fnt_main");
      o.draw_text(HA, 228, HJ[Hu].desc, Hc ? "#b0b0b0" : "#4a4a4a");
    }
    o.draw_set_halign("left");
    HU.restore();
  }
};
q(obj_badapple_egg, "obj_badapple_egg");
T(obj_badapple_egg, "kinds", M("obj_badapple_egg", r));
T(obj_badapple_egg, "defaultDepth", -500);
var HO = obj_badapple_egg;
function watchForEgg(o) {
  if (o.eggDone) {
    return;
  }
  let HU = R.first("obj_heart");
  if (!HU) {
    o.eggIdle = 0;
    return;
  }
  let HT = o.eggX === undefined || Math.abs(HU.x - o.eggX) > 0.5 || Math.abs(HU.y - o.eggY) > 0.5;
  o.eggX = HU.x;
  o.eggY = HU.y;
  if (HT) {
    o.eggIdle = 0;
    return;
  }
  o.eggIdle = (o.eggIdle || 0) + 1;
  if (!(o.eggIdle < Hi)) {
    o.eggDone = 1;
    o.eggIdle = 0;
    R.with("obj_maskfield", Hu => {
      if (Hu.video && Hu.video.v) {
        try {
          Hu.video.v.pause();
        } catch {}
      }
    });
    v(-50, 250, HO);
  }
}
q(watchForEgg, "watchForEgg");
c();
var HZ = 20;
var Hx = 20;
function paint(o) {
  let Hq = document.createElement("canvas");
  Hq.width = HZ;
  Hq.height = Hx;
  let HU = Hq.getContext("2d");
  let HT = "#ffffff";
  let HV = o ? "#d8d8d8" : "#c4c4c4";
  let Hu = HA => {
    HU.save();
    HU.translate(10, 11);
    HU.scale(HA, HA);
    HU.translate(-10, -11);
    HU.beginPath();
    HU.arc(7.2, 12, 5.7, 0, Math.PI * 2);
    HU.fill();
    HU.beginPath();
    HU.arc(12.8, 12, 5.7, 0, Math.PI * 2);
    HU.fill();
    HU.beginPath();
    HU.moveTo(3, 10);
    HU.quadraticCurveTo(10, 7, 17, 10);
    HU.quadraticCurveTo(17.5, 18.5, 10, 19.5);
    HU.quadraticCurveTo(2.5, 18.5, 3, 10);
    HU.closePath();
    HU.fill();
    HU.lineCap = "round";
    HU.lineJoin = "round";
    HU.lineWidth = 2;
    HU.strokeStyle = HU.fillStyle;
    HU.beginPath();
    HU.moveTo(10, 8.5);
    HU.quadraticCurveTo(11, 4.5, 13.2, 2.8);
    HU.stroke();
    HU.beginPath();
    HU.ellipse(6.3, 6, 3.6, 2.1, -0.5, 0, Math.PI * 2);
    HU.fill();
    HU.restore();
  };
  HU.fillStyle = "#000000";
  Hu(1.22);
  HU.fillStyle = HT;
  Hu(1);
  if (!o) {
    HU.fillStyle = HV;
    HU.beginPath();
    HU.ellipse(13.1, 14, 1.9, 3, 0.3, 0, Math.PI * 2);
    HU.fill();
    HU.strokeStyle = "rgba(0,0,0,0.5)";
    HU.lineWidth = 1;
    HU.beginPath();
    HU.moveTo(6.4, 10.8);
    HU.quadraticCurveTo(5.4, 13.8, 6.6, 16.6);
    HU.stroke();
  }
  HU.strokeStyle = "rgba(0,0,0,0.75)";
  HU.lineWidth = 1;
  HU.beginPath();
  HU.moveTo(3.6, 6.9);
  HU.quadraticCurveTo(6.4, 5.4, 9, 5.1);
  HU.stroke();
  return Hq;
}
q(paint, "paint");
var HM = false;
function registerAppleSoul() {
  if (HM) {
    return "spr_apple_soul";
  }
  if (typeof document === "undefined" || typeof HTMLCanvasElement === "undefined") {
    return null;
  }
  try {
    x.spr_apple_soul = {
      name: "spr_apple_soul",
      w: HZ,
      h: Hx,
      ox: 0,
      oy: 0,
      frames: 2,
      bb: [2, 2, HZ - 3, Hx - 3],
      precise: false,
      img: [paint(false), paint(true)]
    };
    HM = true;
    return "spr_apple_soul";
  } catch {
    return null;
  }
}
q(registerAppleSoul, "registerAppleSoul");
function setupSilhouetteStats(o) {
  C.monstername[o] = "Bad Apple";
  C.monstermaxhp[o] = 1200;
  C.monsterhp[o] = 1200;
  C.monsterat[o] = 12;
  C.monsterdf[o] = 0;
  C.monsterexp[o] = 0;
  C.monstergold[o] = 0;
  C.sparepoint[o] = 0;
  C.mercymod[o] = 0;
  C.mercymax[o] = 100;
  C.canact[o][0] = 1;
  C.actname[o][0] = "Check";
  C.actdesc[o][0] = "A film.#Stand in whichever#colour there is more of.";
  C.canact[o][1] = 1;
  C.actname[o][1] = "Squint";
  C.actdesc[o][1] = "Read the#shapes.";
  C.canact[o][2] = 1;
  C.actname[o][2] = "Applaud";
  C.actdesc[o][2] = "For the#performance.";
  C.battlemsg[0] = "* The film begins.";
}
q(setupSilhouetteStats, "setupSilhouetteStats");
var obj_silhouette_enemy = class pj extends i {
  create() {
    Object.assign(this, {
      turns: 0,
      talked: 0,
      talktimer: 0,
      talkmax: 60,
      attacked: 0,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      hurt: 0,
      hurttimer: 0,
      acting: 0,
      actcon: 0,
      con: 0,
      mercymod: 0,
      mytarget: 0,
      field: null
    });
    this.image_xscale = 2;
    this.image_yscale = 2;
    if (!this.spriteOk()) {
      this.sprite_index = "spr_dummymonster";
    }
  }
  spriteOk() {
    return !!x[this.sprite_index];
  }
  draw(Hv) {
    let Hk = maskFieldVideo();
    if (!Hk) {
      if (super.draw) {
        return super.draw(Hv);
      } else {
        return undefined;
      }
    }
    let Hq = 100;
    let HU = 75;
    let HT = Math.round(this.x - Hq / 2);
    let HV = Math.round(this.y - HU / 2);
    let Hu = Hv.ctx;
    Hu.save();
    Hu.fillStyle = "#000000";
    Hu.fillRect(HT - 4, HV - 4, Hq + 8, HU + 8);
    Hu.imageSmoothingEnabled = true;
    Hu.imageSmoothingQuality = "high";
    Hu.globalAlpha = this.hurt > 0 && this.hurttimer % 4 < 2 ? 0.45 : 1;
    try {
      Hu.drawImage(Hk, HT, HV, Hq, HU);
    } catch {}
    Hu.globalAlpha = 1;
    Hu.strokeStyle = "#ffffff";
    Hu.lineWidth = 2;
    Hu.strokeRect(HT - 3, HV - 3, Hq + 6, HU + 6);
    Hu.restore();
  }
  userEvent(o) {
    if (o === 12) {
      C.monsterx[this.myself] = this.x;
      C.monstery[this.myself] = this.y;
    }
  }
  step() {
    let o = this.myself;
    if (C.monster[o] === 1) {
      if (C.mnfight !== 2) {
        C.mnfight = 2;
        C.myfight = -1;
        C.charturn = w();
      }
      if (!R.exists("obj_moveheart") && !R.exists("obj_heart") && !this.soulSent) {
        this.soulSent = 1;
        J();
      }
      if (!R.exists("obj_growtangle")) {
        let n = v(320, 165, h);
        if (n) {
          n.maxxscale = 4.8;
          n.maxyscale = 3.6;
          n.noborder = true;
        }
      }
      if (this.attacked === 0 && R.exists("obj_growtangle")) {
        let Hv = C.badAppleMode || "auto";
        this.field = v(320, 170, H9, {
          maskVideo: "assets/silhouette.mp4",
          damage: 1,
          target: 0,
          hazardIsLit: Hv !== "black",
          adaptivePolarity: Hv === "auto"
        });
        this.attacked = 1;
        let Hk = registerAppleSoul();
        if (Hk) {
          R.with("obj_heart", Hq => {
            Hq.sprite_index = Hk;
          });
        }
      }
      if (C.turntimer < 300) {
        C.turntimer = 600;
      }
      watchForEgg(this);
      if (this.attacked === 1 && this.applecheck !== 1) {
        let Hq = registerAppleSoul();
        if (Hq) {
          R.with("obj_heart", HU => {
            if (HU.sprite_index !== Hq) {
              HU.sprite_index = Hq;
            }
          });
        }
        if (R.exists("obj_heart")) {
          this.applecheck = 1;
        }
      }
    }
  }
};
q(obj_silhouette_enemy, "obj_silhouette_enemy");
T(obj_silhouette_enemy, "kinds", M("obj_silhouette_enemy", i));
T(obj_silhouette_enemy, "defaultDepth", 90);
T(obj_silhouette_enemy, "defaultSprite", "spr_tvhead");
var HN = obj_silhouette_enemy;
V(HN, "G.mnfight = 2;");
export { loadBeats as a, maskFieldVideo as b, registerAppleSoul as c, setupSilhouetteStats as d, HN as e };
