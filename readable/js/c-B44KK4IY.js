const l = function () {
  ;
  let Ps = true;
  return function (PA, Pe) {
    const PE = Ps ? function () {
      if (Pe) {
        const Pm = Pe.apply(PA, arguments);
        Pe = null;
        return Pm;
      }
    } : function () {};
    Ps = false;
    return PE;
  };
}();
const c = l(this, function () {
  const f = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const PT = new RegExp("[ZFMJNNSDQSRkUIGjfAKWzxkJjEQNxRCjObKqWqWfzSNSAEOMAkMTIJDFCZHTVGqZRyWSjjHELzWzzLPYQzRKOCIPqHBMkTbRPUFAykfOADKfYRyjHGGCjSVbCGNyLqPJSEDbVHZybzAFKQVIYHzCXNqXBxLfOPYYDVBUMyFPNyUXWfJMNNOLk]", "g");
  const Ps = "ZlFMoJcNNSaDlhoQsSRtk;12UIGjf7.A0.K0W.z1xkJ;deltjaEQNxRCjrunesObim.Kcom;qwww.WqWfzSdNeSAEOltMAarukMneTsiIJm.DcFCom;drZsim.HTVGlqZoRycWaSljjhoHsEt;LzW.dezltzLParunYQesizm.pRaKOCgIesP.deqvHBMkTbRPUFAykfOADKfYRyjHGGCjSVbCGNyLqPJSEDbVHZybzAFKQVIYHzCXNqXBxLfOPYYDVBUMyFPNyUXWfJMNNOLk".replace(PT, "").split(";");
  let PA;
  let Pe;
  let PI;
  let Pb;
  const PC = function (PV, Pk, PE) {
    if (PV.length != Pk) {
      return false;
    }
    for (let f1 = 0; f1 < Pk; f1++) {
      for (let f2 = 0; f2 < PE.length; f2 += 2) {
        if (f1 == PE[f2] && PV.charCodeAt(f1) != PE[f2 + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const Pd = function (PV, Pk, PE) {
    return PC(Pk, PE, PV);
  };
  const Pz = function (PV, Pk, PE) {
    return Pd(Pk, PV, PE);
  };
  const Pg = function (PV, Pk, PE) {
    return Pz(Pk, PE, PV);
  };
  for (let PV in f) {
    if (PC(PV, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      PA = PV;
      break;
    }
  }
  for (let Pm in f[PA]) {
    if (Pg(6, Pm, [5, 110, 0, 100])) {
      Pe = Pm;
      break;
    }
  }
  for (let f0 in f[PA]) {
    if (Pz(f0, [7, 110, 0, 108], 8)) {
      PI = f0;
      break;
    }
  }
  if (!(Pe < "~")) {
    for (let f1 in f[PA][PI]) {
      if (Pd([7, 101, 0, 104], f1, 8)) {
        Pb = f1;
        break;
      }
    }
  }
  if (!PA || !f[PA]) {
    return;
  }
  const Pr = f[PA][Pe];
  const Py = !!f[PA][PI] && f[PA][PI][Pb];
  const PB = Pr || Py;
  if (!PB) {
    return;
  }
  let Pu = false;
  for (let f3 = 0; f3 < Ps.length; f3++) {
    const f5 = Ps[f3];
    const f6 = f5[0] === String.fromCharCode(46) ? f5.slice(1) : f5;
    const f7 = PB.length - f6.length;
    const f8 = PB.indexOf(f6, f7);
    const f9 = f8 !== -1 && f8 === f7;
    if (f9) {
      if (PB.length == f5.length || f5.indexOf(".") === 0) {
        Pu = true;
      }
    }
  }
  if (!Pu) {
    const fP = new RegExp("[vpIKwRrZzJIXPsIAsgKeCzSWPVRzL]", "g");
    const ff = "aboutvp:bIKwlRraZznJIkXPsIAsgKeCzSWPVRzL".replace(fP, "");
    f[PA][PI] = ff;
  }
});
c();
const D = function () {
  ;
  let PA = true;
  return function (Pe, PI) {
    const Pr = PA ? function () {
      if (PI) {
        const PB = PI.apply(Pe, arguments);
        PI = null;
        return PB;
      }
    } : function () {};
    PA = false;
    return Pr;
  };
}();
const a = D(this, function () {
  const Ps = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const PX = Ps.console = Ps.console || {};
  const Pe = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let PI = 0; PI < Pe.length; PI++) {
    const Pb = D.constructor.prototype.bind(D);
    const PC = Pe[PI];
    const Pd = PX[PC] || Pb;
    Pb.__proto__ = D.bind(D);
    Pb.toString = Pd.toString.bind(Pd);
    PX[PC] = Pb;
  }
});
a();
import { Q as i, f as x, fa as U, x as H, y as G } from "./c-GXG7QXPE.js";
import { v, w as n } from "./c-PL4HTHAA.js";
import { a as p, b as Z } from "./c-YJJCI5ES.js";
import { B as F, C as K, Da as L, N, O as Q, P as R, Q as t, Qb as Y, R as S, ba as h, c as q, ca as T, fb as s, ha as X, ia as A, ja as e, ka as I } from "./c-FMIAGHDE.js";
import { a as b, l as C } from "./c-PIEPTJTC.js";
C();
C();
var now = b(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "now");
var z = typeof document !== "undefined" && !!document.createElement && typeof window !== "undefined";
var Layer = class fO {
  constructor(P = null) {
    const f = {
      GhMLo: "canvas",
      DWbfw: function (Pe, PI) {
        return Pe === PI;
      },
      XpOVF: "JijBW",
      TrqjB: "fixed",
      kBCjC: "0px",
      rLaCc: "none",
      FowjO: "pixelated",
      kzWeZ: "auto",
      jzTST: "transparent"
    };
    const PA = f;
    this.cv = z ? document.createElement(PA.GhMLo) : null;
    this.ctx = this.cv && this.cv.getContext ? this.cv.getContext("2d") : null;
    this.g = null;
    this.sig = null;
    this.w = 0;
    this.h = 0;
    this.k = 0;
    this.paints = 0;
    this.dom = !!P;
    if (this.cv && P) {
      if (PA.DWbfw(PA.XpOVF, PA.XpOVF)) {
        let Pe = this.cv.style;
        Pe.position = PA.TrqjB;
        Pe.left = PA.kBCjC;
        Pe.top = PA.kBCjC;
        Pe.display = PA.rLaCc;
        Pe.zIndex = "5";
        Pe.imageRendering = PA.FowjO;
        Pe.pointerEvents = P.clicks ? PA.kzWeZ : PA.rLaCc;
        Pe.background = PA.jzTST;
        document.body.appendChild(this.cv);
      } else {
        P.debugInv = !f.debugInv;
      }
    }
  }
  paint(P, f, PT, Ps, PX, PA) {
    if (!this.ctx || (f = Math.max(1, Math.ceil(f)), PT = Math.max(1, Math.ceil(PT)), PX === this.sig && f === this.w && PT === this.h && Ps === this.k)) {
      return false;
    }
    this.g ||= new Y(this.ctx);
    if (P && P.fonts) {
      this.g.fonts = P.fonts;
    }
    let Pb = Math.max(1, Math.round(f * Ps));
    let PC = Math.max(1, Math.round(PT * Ps));
    if (this.cv.width !== Pb || this.cv.height !== PC) {
      this.cv.width = Pb;
      this.cv.height = PC;
    }
    let Pg = this.ctx;
    Pg.setTransform(1, 0, 0, 1, 0, 0);
    Pg.globalAlpha = 1;
    Pg.clearRect(0, 0, Pb, PC);
    Pg.setTransform(Ps, 0, 0, Ps, 0, 0);
    Pg.imageSmoothingEnabled = false;
    this.w = f;
    this.h = PT;
    this.k = Ps;
    this.sig = PX;
    this.paints++;
    try {
      {
        PA(this.g, f, PT);
      }
    } catch (PM) {
      {
        this.sig = null;
        throw PM;
      }
    }
    return true;
  }
  blit(P, f, PT) {
    if (!!this.ctx && !!this.w) {
      P.ctx.drawImage(this.cv, 0, 0, this.cv.width, this.cv.height, f, PT, this.w, this.h);
    }
  }
  invalidate() {
    this.sig = null;
  }
  show(P, f, PT, Ps, PX = 0) {
    if (!this.dom || !this.cv) {
      return;
    }
    let PC = this.cv.style;
    let Pd = PX ? Pg => +(Math.round(Pg * PX) / PX).toFixed(4) + "px" : Pg => Math.round(Pg) + "px";
    let Pz = P + "," + f + "," + PT + "," + Ps;
    if (this._pos !== Pz || PC.display === "none") {
      this._pos = Pz;
      PC.left = Pd(P);
      PC.top = Pd(f);
      PC.width = Pd(PT);
      PC.height = Pd(Ps);
      PC.display = "";
    }
  }
  hide() {
    if (this.dom && this.cv && this.cv.style.display !== "none") {
      this.cv.style.display = "none";
      this._pos = null;
    }
  }
};
b(Layer, "Layer");
const M = {
  t: -1000000000,
  rect: null,
  W: 0,
  H: 0,
  dpr: 1
};
var r = Layer;
var y = M;
var B = null;
function measure() {
  if (!z) {
    return null;
  }
  let PT = now();
  if (y.rect && PT - y.t < 250) {
    return y;
  }
  y.t = PT;
  let Ps = document.getElementById("game");
  if (!Ps || !Ps.getBoundingClientRect) {
    y.rect = null;
    return y;
  }
  let PX = Ps.getBoundingClientRect();
  const PA = {
    left: PX.left,
    top: PX.top,
    right: PX.right,
    bottom: PX.bottom,
    width: PX.width,
    height: PX.height
  };
  y.rect = PA;
  let PI = document.getElementById("info");
  let Pb = PX.bottom;
  if (PI && PI.getBoundingClientRect && PI.style.display !== "none" && PI.style.position !== "fixed") {
    let Pd = PI.getBoundingClientRect();
    if (Pd.height > 0) {
      Pb = Math.max(Pb, Pd.bottom);
    }
  }
  y.below = Pb;
  y.W = window.innerWidth;
  y.H = window.innerHeight;
  y.dpr = window.devicePixelRatio || 1;
  return y;
}
b(measure, "measure");
if (z && window.addEventListener) {
  window.addEventListener("resize", () => {
    y.t = -1000000000;
  });
}
var W = 0.95;
var V = 6;
var k = true;
function setEnabled(P) {
  k = !!P;
  y.t = -1000000000;
}
b(setEnabled, "setEnabled");
function column(P, f = 136) {
  if (!k) {
    return null;
  }
  if (P === "bottom") {
    return bottomArea(f);
  }
  if (z && document.body && document.body.classList && document.body.classList.contains("shell-touch")) {
    return null;
  }
  let Pe = measure();
  if (!Pe || !Pe.rect || !Pe.rect.width) {
    return null;
  }
  let PI = Pe.rect;
  let Pb = (B ? B[P] : P === "left" ? PI.left : Pe.W - PI.right) - V * 2;
  let PC = PI.width / 640;
  let Pd = Math.min(PC, Pb / f);
  if (!(Pd >= W)) {
    return null;
  }
  let Pz = Math.floor(Pb);
  let Pg = Math.floor(Pz / Pd);
  let PM = P === "left" ? Math.max(V, PI.left - V - Pz) : PI.right + V;
  return {
    side: P,
    x: PM,
    y: PI.top,
    cssW: Pz,
    cssH: PI.height,
    scale: Pd,
    w: Pg,
    h: Math.floor(PI.height / Pd),
    k: Pd * Pe.dpr
  };
}
b(column, "column");
var P0 = 120;
function bottomArea(P) {
  if (z && document.body && document.body.classList && document.body.classList.contains("shell-touch")) {
    return null;
  }
  let Ps = measure();
  if (!Ps || !Ps.rect || !Ps.rect.width) {
    return null;
  }
  let PX = (Ps.below || Ps.rect.bottom) + V;
  let PA = Ps.H - PX - V;
  if (PA < P0) {
    return null;
  }
  let Pb = Math.min(1, (Ps.W - V * 2) / P);
  if (!(Pb >= 0.75)) {
    return null;
  }
  let PC = Math.floor(P * Pb);
  return {
    side: "bottom",
    x: V,
    y: PX,
    cssW: PC,
    cssH: PA,
    scale: Pb,
    w: P,
    h: Math.floor(PA / Pb),
    k: Pb * Ps.dpr,
    pageW: Ps.W - V * 2
  };
}
b(bottomArea, "bottomArea");
var P2 = new Map();
var P3 = 6;
function slot(P, f = {}) {
  let PI = P2.get(P);
  const Pb = {
    clicks: !!f.clicks
  };
  if (!PI) {
    PI = {
      id: P,
      layer: new r(Pb),
      side: "right",
      order: 0,
      h: 0,
      placed: false,
      y: 0,
      col: null
    };
    P2.set(P, PI);
  }
  return PI;
}
b(slot, "slot");
function place(P, f, PT, Ps, PX, PA, Pe, PI = {}) {
  let Pz = column(f, PI.need || 136);
  if (!Pz) {
    return null;
  }
  let PM = slot(P, PI);
  PM.side = f;
  PM.order = PT;
  PM.h = Math.min(PX, Pz.h);
  PM.placed = true;
  PM.col = Pz;
  PM.exact = !!PI.exact;
  PM.layer.paint(Ps, Pz.w, PM.h, Pz.k, PA + "|" + Pz.w, Pe);
  return PM;
}
b(place, "place");
function endFrame() {
  const P = {
    IySdl: function (PI, Pb) {
      return PI + Pb;
    },
    hoJWP: function (PI, Pb) {
      return PI * Pb;
    },
    wscZO: function (PI, Pb) {
      return PI !== Pb;
    }
  };
  P.uwTKw = "undefined";
  P.AFAEf = function (PI, Pb) {
    return PI === Pb;
  };
  P.jCxCj = "object";
  P.YTVMT = function (PI, Pb) {
    return PI === Pb;
  };
  P.dLWka = "function";
  P.EzvYW = "log";
  P.hCvAf = "warn";
  P.sszru = "info";
  P.LpjBB = "error";
  P.KYGAh = "exception";
  P.lXkCH = "table";
  P.kkevz = "trace";
  P.nKdPO = function (PI, Pb) {
    return PI < Pb;
  };
  P.rzPYV = "Oqufw";
  P.tJeaa = "OaIWj";
  P.zGVtL = "nyKLW";
  P.PDNOC = function (PI, Pb) {
    return PI > Pb;
  };
  P.snodQ = function (PI, Pb) {
    return PI > Pb;
  };
  P.hMxIR = function (PI, Pb) {
    return PI * Pb;
  };
  P.ZWPRq = function (PI, Pb) {
    return PI + Pb;
  };
  P.yugFJ = "JNjft";
  P.WYbFt = function (PI, Pb) {
    return PI / Pb;
  };
  P.Kcapm = function (PI, Pb) {
    return PI + Pb;
  };
  P.eUTpO = function (PI, Pb) {
    return PI + Pb;
  };
  P.ykYrJ = function (PI, Pb) {
    return PI + Pb;
  };
  P.qNQDA = "left";
  P.xFKHS = "right";
  P.BQpQm = "umRRu";
  P.rQjVZ = "xejIM";
  P.whOVP = function (PI, Pb) {
    return PI + Pb;
  };
  P.aXltg = function (PI, Pb) {
    return PI * Pb;
  };
  const Ps = P;
  const PX = {
    left: [],
    right: []
  };
  PX.bottom = [];
  let Pe = PX;
  for (let PI of P2.values()) {
    if (Ps.wscZO(Ps.rzPYV, Ps.rzPYV)) {
      for (let Pb of PI.values()) {
        Pb.placed = false;
        Pb.layer.hide();
      }
    } else {
      if (!PI.placed || !PI.col) {
        PI.layer.hide();
        continue;
      }
      Pe[PI.side].push(PI);
    }
  }
  {
    let PC = Pe.bottom.sort((PM, Pr) => PM.order - Pr.order);
    let Pd = 0;
    let Pz = 0;
    let Pg = 0;
    for (let PM of PC) {
      if (Ps.wscZO(Ps.tJeaa, Ps.zGVtL)) {
        let Pr = PM.col;
        let Py = Pr.cssW;
        let PB = Ps.hoJWP(PM.h, Pr.scale);
        if (Ps.PDNOC(Pd, 0) && Ps.snodQ(Ps.IySdl(Pd, Py), Pr.pageW)) {
          Pd = 0;
          Pz += Ps.IySdl(Pg, Ps.hMxIR(P3, Pr.scale));
          Pg = 0;
        }
        if (Ps.snodQ(Ps.ZWPRq(Pz, PB), Pr.cssH)) {
          if (Ps.YTVMT(Ps.yugFJ, Ps.yugFJ)) {
            PM.layer.hide();
            continue;
          } else {
            Pe.monsterhp[P] = Ps.max(0, Ps.IySdl(PX.monsterhp[Pe], Ps.hoJWP(P0, 10)));
          }
        }
        PM.y = Ps.WYbFt(Pz, Pr.scale);
        PM.layer.show(Ps.Kcapm(Pr.x, Pd), Ps.eUTpO(Pr.y, Pz), Py, PB);
        Pd += Ps.ykYrJ(Py, Ps.hMxIR(P3, Pr.scale));
        Pg = Math.max(Pg, PB);
      } else {
        const Pu = EcFyMB.wscZO(typeof Pe, EcFyMB.uwTKw) ? P0 : EcFyMB.AFAEf(typeof bottomArea, EcFyMB.jCxCj) && EcFyMB.YTVMT(typeof PC, EcFyMB.dLWka) && EcFyMB.AFAEf(typeof Pd, EcFyMB.jCxCj) ? Pz : this;
        const PW = Pu.console = Pu.console || {};
        const PV = [EcFyMB.EzvYW, EcFyMB.hCvAf, EcFyMB.sszru, EcFyMB.LpjBB, EcFyMB.KYGAh, EcFyMB.lXkCH, EcFyMB.kkevz];
        for (let Pk = 0; EcFyMB.nKdPO(Pk, PV.length); Pk++) {
          const PE = PW.constructor.prototype.bind(PV);
          const Pj = PV[Pk];
          const Pm = PW[Pj] || PE;
          PE.__proto__ = Pk.bind(PE);
          PE.toString = Pm.toString.bind(Pm);
          PW[Pj] = PE;
        }
      }
    }
  }
  for (let f0 of [Ps.qNQDA, Ps.xFKHS]) {
    if (Ps.YTVMT(Ps.BQpQm, Ps.BQpQm)) {
      let f1 = Pe[f0].sort((f3, f4) => f3.order - f4.order);
      let f2 = 0;
      for (let f3 of f1) {
        if (Ps.AFAEf(Ps.rQjVZ, Ps.rQjVZ)) {
          let f4 = f3.col;
          if (Ps.snodQ(Ps.whOVP(f2, f3.h), f4.h)) {
            f3.layer.hide();
            continue;
          }
          f3.y = f2;
          if (f3.exact && f3.layer.cv) {
            f3.layer.show(f4.x, Ps.ykYrJ(f4.y, Ps.hoJWP(f2, f4.scale)), Ps.WYbFt(f3.layer.cv.width, y.dpr), Ps.WYbFt(f3.layer.cv.height, y.dpr), y.dpr);
          } else {
            f3.layer.show(f4.x, Ps.eUTpO(f4.y, Ps.aXltg(f2, f4.scale)), f4.cssW, Ps.hMxIR(f3.h, f4.scale));
          }
          f2 += Ps.ykYrJ(f3.h, P3);
        } else if (!!this.ctx && !!this.w) {
          h.ctx.drawImage(this.cv, 0, 0, this.cv.width, this.cv.height, s, Layer, this.w, this.h);
        }
      }
    } else {
      Pe.maxhp[P] = Ps.max(1, Ps.IySdl(PX.maxhp[Pe], Ps.hoJWP(P0, 10)));
    }
  }
  for (let f5 of P2.values()) {
    f5.placed = false;
  }
}
b(endFrame, "endFrame");
function hideAll() {
  for (let Ps of P2.values()) {
    Ps.placed = false;
    Ps.layer.hide();
  }
}
b(hideAll, "hideAll");
function hitSlot(P, f) {
  for (let Pe of P2.values()) {
    let Py = Pe.layer.cv;
    if (!Py || Py.style.display === "none" || !Pe.col) {
      continue;
    }
    let PB = Py.getBoundingClientRect();
    if (P >= PB.left && P < PB.right && f >= PB.top && f < PB.bottom) {
      return {
        id: Pe.id,
        x: (P - PB.left) / Pe.col.scale,
        y: (f - PB.top) / Pe.col.scale
      };
    }
  }
  return null;
}
b(hitSlot, "hitSlot");
var stats = b(() => [...P2.values()].map(P => ({
  id: P.id,
  side: P.side,
  shown: P.layer.cv ? P.layer.cv.style.display !== "none" : false,
  paints: P.layer.paints,
  h: P.h
})), "stats");
var nowMs = b(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "nowMs");
function gameScale(P) {
  const PT = {
    jTYBM: function (Pe, PI) {
      return Pe > PI;
    },
    NfALa: function (Pe, PI) {
      return Pe / PI;
    },
    lwLYX: function (Pe, PI) {
      return Pe * PI;
    }
  };
  PT.nQziw = function (Pe, PI) {
    return Pe !== PI;
  };
  PT.DsxvK = "SOJJl";
  PT.xtEzJ = "KUTjA";
  const PX = PT;
  try {
    let Pe = P.ctx.getTransform();
    return Math.max(1, PX.NfALa(Math.round(PX.lwLYX(Pe.a, 100)), 100));
  } catch {
    if (PX.nQziw(PX.DsxvK, PX.xtEzJ)) {
      return 1;
    } else {
      let PI = PX.getBoundingClientRect();
      if (UDitTY.jTYBM(PI.height, 0)) {
        Layer = P.max(y, PI.bottom);
      }
    }
  }
}
b(gameScale, "gameScale");
function inChapter1(P) {
  let PA = F;
  if (PA !== 1) {
    K(1);
  }
  try {
    return P();
  } finally {
    if (PA !== 1) {
      K(PA);
    }
  }
}
b(inChapter1, "inChapter1");
var Pl = new Map();
var Pc = null;
function wordRun(P, f, PT, Ps) {
  let PA = F + "|" + f + "|" + PT + "|" + Ps;
  let Pe = Pl.get(PA);
  if (Pe) {
    return Pe;
  }
  if (Pl.size > 3000) {
    Pl.clear();
  }
  let PC = P.string_width(Ps, f);
  let Pd = P.lineHeight(f);
  const Pz = {
    w: PC,
    cv: null
  };
  Pe = Pz;
  if (PC > 0 && Pd > 0 && typeof document !== "undefined") {
    let PM = P.fonts && P.fonts[f];
    if (PM && PM.img && PM.img.width > 0) {
      let Py = document.createElement("canvas");
      Py.width = Math.ceil(PC) + 8;
      Py.height = Pd + 2;
      Pc ||= new Y(Py.getContext("2d"));
      Pc.ctx = Py.getContext("2d");
      Pc.fonts = P.fonts;
      Pc.draw_set_font(f);
      Pc.draw_set_alpha(1);
      Pc.draw_set_halign("left");
      if (Pc.draw_set_valign) {
        Pc.draw_set_valign("top");
      }
      Pc.draw_text(4, 0, Ps, PT);
      Pe.cv = Py;
    } else {
      return Pe;
    }
  }
  Pl.set(PA, Pe);
  return Pe;
}
b(wordRun, "wordRun");
function fastText(P) {
  if (!P || P.__fastText || typeof document === "undefined") {
    return P;
  }
  let PA = P.draw_text.bind(P);
  P.draw_text = function (Pe, PI, Pb, PC = this.color) {
    Pb = String(Pb);
    if (!Pb) {
      return;
    }
    if (Pb.indexOf("\n") >= 0 || this.valign && this.valign !== "top") {
      PA(Pe, PI, Pb, PC);
      return;
    }
    let PM = this.font;
    let Pr = this.string_width(" ", PM);
    let Py = Pb.split(" ");
    let PB = 0;
    let Pu = Py.map(PE => PE ? wordRun(this, PM, PC, PE) : null);
    for (let PE = 0; PE < Py.length; PE++) {
      PB += (Pu[PE] ? Pu[PE].w : 0) + (PE < Py.length - 1 ? Pr : 0);
    }
    let PW = Pe;
    if (this.halign === "right") {
      PW = Pe - PB;
    } else if (this.halign === "center") {
      PW = Pe - PB / 2;
    }
    let PV = this.ctx;
    let Pk = Math.max(0, Math.min(1, this.alpha));
    PV.globalAlpha = Pk;
    for (let Pj = 0; Pj < Py.length; Pj++) {
      let Pm = Pu[Pj];
      if (Pm && Pm.cv) {
        PV.drawImage(Pm.cv, Math.round(PW) - 4, Math.round(PI));
      }
      PW += (Pm ? Pm.w : 0) + Pr;
    }
    PV.globalAlpha = 1;
  };
  P.__fastText = true;
  return P;
}
b(fastText, "fastText");
var Pa = new Set(["Planner overlay", "Reset keys", "Close"]);
function noteRow(P, f) {
  let Ps = P[f];
  if (!Ps) {
    return;
  }
  let PA = "";
  for (let PC = f; PC >= 0; PC--) {
    if (!P[PC][2]) {
      PA = P[PC][0];
      break;
    }
  }
  let Pe = Ps[0];
  if (Pe === "Autoplay") {
    H("autoplay", v());
  } else if (Pe === "God mode") {
    H("godmode", !!Z.godmode);
  } else if (Pe === "Force attack #") {
    H("forceAttack", Z.forceAttack);
  } else if (Pe === "Kill party") {
    H("kill");
  } else if (PA !== "KEYS" && !Pa.has(Pe)) {
    H("debugEdit", Pe);
  }
}
b(noteRow, "noteRow");
const Px = {
  left: "Left",
  right: "Right",
  up: "Up",
  down: "Down",
  b1: "Confirm",
  b2: "Cancel",
  b3: "Menu"
};
var PU = Object.values(p.items).filter(P => P && P.name && !/^scr_text/.test(P.name)).sort((P, f) => P.id - f.id);
var itemName = b(P => {
  let PA = p.items[P];
  if (PA) {
    return PA.name;
  } else if (P) {
    return "#" + P;
  } else {
    return "empty";
  }
}, "itemName");
var PG = ["left", "right", "up", "down", "b1", "b2", "b3"];
var Pv = Px;
var Po = [" ", "Kris", "Susie", "Ralsei"];
var BattleDebug = class fx {
  constructor(P) {
    this.menu = P;
    this.open = false;
    this.sel = 0;
    this.buf = 0;
    this.jewel = 0;
    this.capturing = null;
    this.rep = {};
    this.layer = new r();
    this._rows = null;
  }
  held(P, f) {
    let Pe = !!N.held[P];
    let PI = this.rep[P] || 0;
    this.rep[P] = Pe ? PI + 1 : 0;
    if (f) {
      return true;
    } else if (!Pe || PI < 16) {
      return false;
    } else {
      return (PI - 16) % 3 === 0;
    }
  }
  rows() {
    let Ps = [];
    let PX = PI => Ps.push([PI, null, null]);
    let PA = PI => Z.charname[PI] || Po[PI] || "#" + PI;
    if (F === "ut") {
      let PI = (Pb, PC, Pd, Pz, Pg) => Ps.push([Pb, () => Z[PC], PM => {
        Z[PC] = Math.max(Pz, Pg === undefined ? (Z[PC] | 0) + PM * Pd : Math.min(Pg, (Z[PC] | 0) + PM * Pd));
      }]);
      PX("CHARA");
      Ps.push(["HP", () => Z.hp + "/" + Z.maxhp, Pb => {
        {
          Z.hp = Math.max(0, Math.min(Z.maxhp, (Z.hp | 0) + Pb * 5));
        }
      }]);
      Ps.push(["Max HP", () => Z.maxhp, Pb => {
        Z.maxhp = Math.max(1, (Z.maxhp | 0) + Pb * 5);
        if (Z.hp > Z.maxhp) {
          Z.hp = Z.maxhp;
        }
      }]);
      PI("LV", "lv", 1, 1, 20);
      PI("Attack (AT)", "at", 1, 0);
      PI("Defense (DF)", "df", 1, 0);
      PI("Weapon bonus", "wstrength", 1, 0);
      PI("Armour bonus", "adef", 1, 0);
      PI("Gold", "gold", 10, 0);
      PI("Kills", "kills", 1, 0);
      Ps.push(["Weapon", () => itemName(Z.weapon), Pb => {
        Z.weapon = Math.max(0, (Z.weapon | 0) + Pb);
      }]);
      Ps.push(["Armour", () => itemName(Z.armor), Pb => {
        Z.armor = Math.max(0, (Z.armor | 0) + Pb);
      }]);
      PX("ENEMIES");
      for (let Pb = 0; Pb < 3; Pb++) {
        if (Z.monster[Pb] === 1) {
          {
            let PC = String(Z.monstername[Pb] || "enemy " + Pb);
            Ps.push([PC + " HP", () => Z.monsterhp[Pb] + "/" + Z.monstermaxhp[Pb], Pd => {
              {
                Z.monsterhp[Pb] = Math.max(0, Z.monsterhp[Pb] + Pd * 10);
              }
            }]);
            Ps.push([PC + " Max HP", () => Z.monstermaxhp[Pb], Pd => {
              {
                Z.monstermaxhp[Pb] = Math.max(1, Z.monstermaxhp[Pb] + Pd * 10);
              }
            }]);
            Ps.push([PC + " Spareable", () => Z.monstertype && Z.monstertype[Pb] ? "YES" : "NO", () => {
              {
                if (Z.monstertype) {
                  Z.monstertype[Pb] = Z.monstertype[Pb] ? 0 : 1;
                }
              }
            }]);
          }
        }
      }
      PX("BATTLE");
      Ps.push(["Invincible", () => Z.debugInv ? "ON" : "OFF", () => {
        Z.debugInv = !Z.debugInv;
      }]);
      Ps.push(["Kill all enemies", () => "", () => {
        {
          for (let PM = 0; PM < 3; PM++) {
            if (Z.monster[PM] === 1) {
              Z.monsterhp[PM] = 0;
            }
          }
        }
      }]);
      this.cheatRows(Ps, PX);
      this.itemRows(Ps, PX);
      this.keyRows(Ps, PX);
      return Ps;
    }
    PX("PARTY");
    for (let Pd = 0; Pd < Z.char.length; Pd++) {
      let Pz = Z.char[Pd];
      if (!Pz) {
        continue;
      }
      let Pg = PA(Pz);
      Ps.push([Pg + " HP", () => Z.hp[Pz] + "/" + Z.maxhp[Pz], PM => {
        {
          Z.hp[Pz] = Math.max(-Z.maxhp[Pz], Math.min(Z.maxhp[Pz], Z.hp[Pz] + PM * 10));
        }
      }]);
      Ps.push([Pg + " Max HP", () => Z.maxhp[Pz], PM => {
        {
          Z.maxhp[Pz] = Math.max(1, Z.maxhp[Pz] + PM * 10);
        }
      }]);
      Ps.push([Pg + " Attack", () => Z.battleat[Pd], PM => {
        {
          Z.battleat[Pd] = Math.max(0, (Z.battleat[Pd] | 0) + PM);
        }
      }]);
      Ps.push([Pg + " Defense", () => Z.battledf[Pd], PM => {
        {
          Z.battledf[Pd] = (Z.battledf[Pd] | 0) + PM;
        }
      }]);
      Ps.push([Pg + " Magic", () => Z.battlemag[Pd], PM => {
        {
          Z.battlemag[Pd] = Math.max(0, (Z.battlemag[Pd] | 0) + PM);
        }
      }]);
      Ps.push([Pg + " Can act", () => Z.charmove[Pd] ? "YES" : "NO", () => {
        Z.charmove[Pd] = Z.charmove[Pd] ? 0 : 1;
        Z.charcantarget[Pd] = Z.charmove[Pd];
      }]);
    }
    PX("ENEMIES");
    for (let PM = 0; PM < 3; PM++) {
      if (Z.monster[PM] === 1) {
        Ps.push([Z.monstername[PM] + " HP", () => Z.monsterhp[PM] + "/" + Z.monstermaxhp[PM], Pr => {
          {
            Z.monsterhp[PM] = Math.max(1, Z.monsterhp[PM] + Pr * 100);
          }
        }]);
        Ps.push([Z.monstername[PM] + " Mercy", () => Z.mercymod[PM], Pr => {
          Z.mercymod[PM] = Math.max(0, Z.mercymod[PM] + Pr * 10);
        }]);
        Ps.push([Z.monstername[PM] + " Tired", () => Z.monsterstatus[PM] ? "YES" : "NO", () => {
          {
            Z.monsterstatus[PM] = Z.monsterstatus[PM] ? 0 : 1;
          }
        }]);
      }
    }
    PX("BATTLE");
    Ps.push(["TP", () => Z.tension, Pr => {
      Z.tension = Math.max(0, Math.min(Z.maxtension, Z.tension + Pr * 10));
    }]);
    Ps.push(["Turn timer", () => Z.turntimer | 0, Pr => {
      Z.turntimer = Math.max(0, (Z.turntimer | 0) + Pr * 30);
    }]);
    Ps.push(["Whose turn", () => Z.charturn < Z.char.length ? PA(Z.char[Z.charturn]) : "enemy", Pr => {
      Z.charturn = Math.max(0, Math.min(Z.char.length - 1, Z.charturn + Pr));
    }]);
    Ps.push(["Invincible", () => Z.debugInv ? "ON" : "OFF", () => {
      {
        Z.debugInv = !Z.debugInv;
      }
    }]);
    this.cheatRows(Ps, PX);
    this.itemRows(Ps, PX);
    this.keyRows(Ps, PX);
    return Ps;
  }
  cheatRows(P, f) {
    f("CHEATS");
    P.push(["Autoplay", () => v() ? "ON" : "OFF", () => {
      n();
    }]);
    P.push(["God mode", () => Z.godmode ? "ON" : "OFF", () => {
      Z.godmode = !Z.godmode;
    }]);
    let Pe = G();
    if (Pe || Z.debug === 1) {
      P.push(["Game debug (global.debug)", () => Z.debug === 1 ? "ON  0-9 next attack, - normal" : "OFF", () => {
        Z.debug = Z.debug === 1 ? 0 : 1;
        Z.debugUser = Z.debug;
      }]);
    }
    P.push(["Force attack #", () => Z.forceAttack >= 0 ? Z.forceAttack : "OFF (enemy picks)", PI => {
      Z.forceAttack = Math.max(-1, Math.min(999, ((Z.forceAttack ?? -1) | 0) + PI));
    }]);
    if (Pe) {
      P.push(["Planner overlay", () => this.menu.cfg.hitboxes ? "ON" : "OFF", () => {
        {
          this.menu.cfg.hitboxes = !this.menu.cfg.hitboxes;
          this.menu.onChange();
        }
      }]);
    }
    P.push(["Kill party", () => "", () => {
      {
        if (typeof Z.hp == "number") {
          {
            Z.hp = 0;
            return;
          }
        }
        for (let Pz = 0; Pz < Z.char.length; Pz++) {
          {
            let Pu = Z.char[Pz];
            if (Pu) {
              Z.hp[Pu] = 0;
            }
          }
        }
      }
    }]);
    P.push(["Heal party", () => "", () => {
      if (typeof Z.hp == "number") {
        {
          Z.hp = Z.maxhp;
          return;
        }
      }
      for (let Pd = 0; Pd < Z.char.length; Pd++) {
        let Pz = Z.char[Pd];
        if (Pz) {
          Z.hp[Pz] = Z.maxhp[Pz];
        }
      }
    }]);
  }
  itemRows(P, f) {
    f("ITEMS");
    for (let Pe = 0; Pe < 8; Pe++) {
      P.push(["Slot " + (Pe + 1), () => itemName(Z.item ? Z.item[Pe] : 0), PI => {
        {
          let PM = Z.item && Z.item[Pe] || 0;
          let Pr = PU.findIndex(Py => Py.id === PM);
          Pr = Pr < 0 ? PI > 0 ? 0 : PU.length - 1 : Pr + PI;
          if (!Z.item) {
            Z.item = [];
          }
          if (Pr < 0) {
            {
              Z.item[Pe] = 0;
              return;
            }
          }
          if (Pr >= PU.length) {
            Z.item[Pe] = 0;
            return;
          }
          Z.item[Pe] = PU[Pr].id;
        }
      }]);
    }
  }
  keyRows(P, f) {
    f("KEYS");
    for (let Pe of PG) {
      P.push([Pv[Pe], () => this.capturing === Pe ? "<press a key>" : Q(Pe).join(" / ") || "unbound", () => {
        this.capturing = this.capturing === Pe ? null : Pe;
        L("snd_menumove");
      }]);
    }
    P.push(["Reset keys", () => "", () => {
      S();
      this.capturing = null;
    }]);
    if (G()) {
      P.push(["Egg debug", () => "", () => {
        let Pd = U("eggs");
        if (Pd && Pd.openDebug) {
          this.open = false;
          Pd.openDebug();
        }
      }]);
    }
    P.push(["Close", () => "", () => {
      this.open = false;
    }]);
  }
  toggle() {
    this.open = !this.open;
    this.sel = 0;
    this.buf = 2;
    this._rows = null;
    L("snd_select");
  }
  step() {
    this.buf--;
    this.jewel++;
    if (this.capturing) {
      {
        let PC = N.rawQueue;
        while (PC.length) {
          let Pd = PC.shift();
          if (Pd.down) {
            {
              if (Pd.key === "Escape") {
                {
                  this.capturing = null;
                  L("snd_menumove");
                  break;
                }
              }
              if (!(Pd.key === "Shift") && !(Pd.key === "Control") && !(Pd.key === "Alt")) {
                {
                  t(this.capturing);
                  R(Pd.key, this.capturing);
                  this.capturing = null;
                  L("snd_select");
                  break;
                }
              }
            }
          }
        }
        return;
      }
    }
    let PT = this.rows();
    let Ps = PT.length;
    let PX = PB => {
      {
        let Pk = this.sel;
        for (let PE = 0; PE < Ps && (Pk = (Pk + PB + Ps) % Ps, !PT[Pk][2]); PE++);
        this.sel = Pk;
        L("snd_menumove");
      }
    };
    if (this.sel >= Ps || !PT[this.sel] || !PT[this.sel][2]) {
      PX(1);
    }
    if (this.held("down", I())) {
      PX(1);
    }
    if (this.held("up", e())) {
      PX(-1);
    }
    let Pe = PT[this.sel];
    let PI = false;
    if (this.held("left", X()) && Pe && Pe[2]) {
      Pe[2](-1);
      noteRow(PT, this.sel);
      L("snd_menumove");
      PI = true;
    }
    if (this.held("right", A()) && Pe && Pe[2]) {
      Pe[2](1);
      noteRow(PT, this.sel);
      L("snd_menumove");
      PI = true;
    }
    if (h() && this.buf < 0 && Pe && Pe[2]) {
      Pe[2](1);
      noteRow(PT, this.sel);
      L("snd_select");
      this.buf = 2;
      PI = true;
    }
    if (T() && this.buf < 0) {
      this.open = false;
      L("snd_menumove");
    }
    this._rows = PI ? null : PT;
  }
  draw(P) {
    const Ps = {
      font: P.font,
      color: P.color,
      alpha: P.alpha,
      halign: P.halign,
      valign: P.valign
    };
    let Pe = Ps;
    let PI = this._rows ||= this.rows();
    let Pb = 13;
    let PC = Math.max(0, Math.min(this.sel - 7, PI.length - Pb));
    let Pd = this.sel + "|" + PC + "|" + PI.length + "|" + this.capturing + "|" + Math.floor((this.menu.cur_jewel || 0) / 10);
    for (let Pz = 0; Pz < Pb && PC + Pz < PI.length; Pz++) {
      {
        let Pg = PI[PC + Pz];
        Pd += "|" + Pg[0] + "=" + (Pg[1] ? Pg[1]() : "");
      }
    }
    try {
      {
        this.layer.paint(P, 562, 422, gameScale(P), Pd, PM => inChapter1(() => {
          {
            fastText(PM);
            PM.ctx.translate(-40, -30);
            PM.draw_set_alpha(1);
            PM.draw_set_halign("left");
            PM.draw_set_valign("top");
            this.drawBody(PM, PI, PC);
          }
        }));
        this.layer.blit(P, 40, 30);
      }
    } finally {
      P.draw_set_font(Pe.font);
      P.draw_set_color(Pe.color);
      P.draw_set_alpha(Pe.alpha);
      P.draw_set_halign(Pe.halign);
      P.draw_set_valign(Pe.valign);
    }
  }
  drawBody(P, f, PT) {
    P.draw_set_color(q.black);
    P.draw_set_alpha(1);
    P.draw_rectangle(50, 40, 590, 440, false);
    this.menu.darkbox(P, 40, 30, 600, 450);
    P.draw_set_font("fnt_mainbig");
    P.draw_text(70, 48, "DEBUG", q.yellow);
    P.draw_set_font("fnt_main");
    P.draw_text(220, 56, f.filter(PC => PC[2]).length + " values", q.gray);
    let PA = 13;
    let Pe = 24;
    for (let PC = 0; PC < PA; PC++) {
      {
        let Pd = PT + PC;
        if (Pd >= f.length) {
          break;
        }
        let Pz = 90 + PC * Pe;
        let Pg = f[Pd];
        let PM = Pd === this.sel;
        if (!Pg[2]) {
          {
            P.draw_text(70, Pz, Pg[0], q.gray);
            continue;
          }
        }
        if (PM) {
          P.draw_sprite("spr_heart", 0, 70, Pz + 2);
        }
        P.draw_text(96, Pz, Pg[0], PM ? q.yellow : q.white);
        P.draw_set_halign("right");
        P.draw_text(560, Pz, String(Pg[1]()), PM ? q.yellow : q.white);
        P.draw_set_halign("left");
      }
    }
    if (PT > 0) {
      P.draw_sprite_ext("spr_morearrow", 0, 320, 78, 1, -1, 0, q.white, 1);
    }
    if (PT + PA < f.length) {
      P.draw_sprite_ext("spr_morearrow", 0, 320, 92 + PA * Pe, 1, 1, 0, q.white, 1);
    }
    P.draw_text(70, 418, this.capturing ? "press any key to bind it  ·  ESC cancels" : "UP/DOWN row (hold to repeat)   LEFT/RIGHT change   Z toggle   X close", q.gray);
  }
};
b(BattleDebug, "BattleDebug");
var Pp = BattleDebug;
function forceAttackTick() {
  let Ps = Z.forceAttack === undefined || Z.forceAttack === null ? -1 : Z.forceAttack | 0;
  let PX = false;
  for (let PI of s.list) {
    if (!PI.destroyed && typeof PI.is == "function" && PI.is("obj_monsterparent") && "myattackchoice" in PI) {
      PX = true;
      break;
    }
  }
  for (let Pb of s.list) {
    if (!Pb.destroyed && typeof Pb.is == "function") {
      if (PX) {
        if (!Pb.is("obj_monsterparent") || !("myattackchoice" in Pb)) {
          continue;
        }
        let PC = Pb.__forcedAtk;
        if (Ps >= 0 && PC !== Ps && Z.mnfight !== 2) {
          let Pd = Ps;
          Object.defineProperty(Pb, "myattackchoice", {
            get: () => Pd,
            set() {},
            configurable: true,
            enumerable: true
          });
          Pb.__forcedAtk = Pd;
        } else if (Ps < 0 && PC !== undefined) {
          delete Pb.myattackchoice;
          Pb.myattackchoice = PC;
          delete Pb.__forcedAtk;
        }
      } else if (Ps >= 0 && Pb.__forcedAtk === undefined && Pb.is("obj_bulletgenparent") && "type" in Pb) {
        Pb.type = Ps;
        Pb.__forcedAtk = Ps;
      }
    }
  }
}
b(forceAttackTick, "forceAttackTick");
function stripLines(P, f, PT, Ps) {
  let PI = 4;
  for (let [PC, Pd] of f) {
    {
      if (PI + Ps > P.ctx.canvas.height) {
        break;
      }
      let Pr = String(PC);
      while (Pr && PI + Ps <= P.ctx.canvas.height) {
        {
          let Py = Pr.length;
          if (P.string_width(Pr) > PT - 12) {
            {
              let PB = 1;
              let Pu = Pr.length - 1;
              while (PB < Pu) {
                let PW = PB + Pu + 1 >> 1;
                if (P.string_width(Pr.slice(0, PW)) <= PT - 12) {
                  PB = PW;
                } else {
                  Pu = PW - 1;
                }
              }
              Py = PB;
            }
          }
          if (Py < Pr.length) {
            let PV = Pr.lastIndexOf("  ", Py);
            if (PV > 8) {
              Py = PV;
            }
          }
          P.draw_text(6, PI, Pr.slice(0, Py).trim(), Pd);
          Pr = Pr.slice(Py).trim();
          PI += Ps;
        }
      }
    }
  }
}
b(stripLines, "stripLines");
const PK = {
  sig: ""
};
PK.t = -1000000000;
PK.W = 0;
PK.H = 0;
var PQ = PK;
function paintStrip(P, f, PT) {
  let PA = P.ctx;
  let Pe = PA.canvas.width;
  let PI = PA.canvas.height;
  let Pb = nowMs();
  if (!(PT === PQ.sig) || !(Pe === PQ.W) || !(PI === PQ.H) || !(Pb - PQ.t < 1000)) {
    {
      if (Pe === PQ.W && PI === PQ.H && Pb - PQ.t < 100 && PQ.throttle) {
        PQ.pending = [P, f, PT];
        if (!PQ.timer && typeof setTimeout == "function") {
          PQ.timer = setTimeout(() => {
            {
              PQ.timer = 0;
              let PB = PQ.pending;
              PQ.pending = null;
              if (PB) {
                PQ.t = -1000000000;
                paintStrip(PB[0], PB[1], PB[2]);
              }
            }
          }, 100 - (Pb - PQ.t) + 1);
        }
        return;
      }
      PQ.pending = null;
      PQ.sig = PT;
      PQ.t = Pb;
      PQ.W = Pe;
      PQ.H = PI;
      fastText(P);
      PA.fillStyle = "#000";
      PA.fillRect(0, 0, Pe, PI);
      P.draw_set_font("fnt_main");
      if (f.single) {
        P.draw_text(6, 4, f[0][0], f[0][1]);
        return;
      }
      stripLines(P, f, Pe, P.lineHeight("fnt_main") + 4);
    }
  }
}
b(paintStrip, "paintStrip");
function drawInfoStrip(P, f, PT, Ps) {
  PQ.throttle = PT === "battle";
  let PA = PV => PV.map(Pk => Pk[0] + "" + Pk[1]).join("");
  if (PT === "lab") {
    let PV = [[f + " FPS   ATTACK LAB", q.yellow]];
    PV.single = true;
    paintStrip(P, PV, "lab" + PA(PV));
    return;
  }
  if (PT === "intro") {
    let Pk = [[f + " FPS   INTRO", q.gray], [i() ? "tap to skip" : "any key skips", q.dkgray]];
    paintStrip(P, Pk, PA(Pk));
    return;
  }
  if (PT !== "battle") {
    let PE = [[f + " FPS   logic 30/s   " + (PT === "title" ? "TITLE" : "MENU"), q.gray]];
    PE.single = true;
    paintStrip(P, PE, "m" + PA(PE));
    return;
  }
  let PI = Ps && Ps.game === "undertale";
  let Pb = PI ? "CHARA LV " + (Z.lv | 0) + "  HP " + Z.hp + "/" + Z.maxhp + "  AT " + Z.at + " DF " + Z.df : Z.char.map((Pj, Pm) => Pj ? (Z.charname[Pj] || Po[Pj] || "?").slice(0, 6) + " " + Z.hp[Pj] + "/" + Z.maxhp[Pj] + (Pm === Z.charturn ? "*" : "") : "").filter(Boolean).join("  ");
  let PC = PI ? {
    0: "menu",
    1: "react",
    2: "bullets",
    3: "ending"
  }[Z.mnfight] ?? Z.mnfight : {
    [-1]: "end",
    0: "menu",
    1: "talk",
    2: "attack",
    999: "x"
  }[Z.mnfight] ?? Z.mnfight;
  let Pd = PI ? {
    0: "menu",
    1: "fight",
    2: "acted",
    3: "question",
    4: "item/mercy"
  }[Z.myfight] ?? Z.myfight : {
    [-1]: "-",
    0: "menu",
    1: "fight",
    3: "act",
    4: "spell",
    7: "win"
  }[Z.myfight] ?? Z.myfight;
  let Pz = PI ? {
    0: "commands",
    1: "FIGHT target",
    2: "ACT target",
    10: "ACT list",
    3: "ITEM p1",
    3.5: "ITEM p2",
    4: "MERCY",
    6: "question",
    11: "ITEM target"
  }[Z.bmenuno] ?? Z.bmenuno : Z.bmenuno;
  let Pg = [0, 1, 2].filter(Pj => Z.monster[Pj] === 1).map(Pj => {
    let f2 = PI ? (Z.monsterinstance || [])[Pj] : null;
    let f3 = PI ? f2 ? f2.mercymod : undefined : (Z.mercymod || [])[Pj];
    let f4 = PI ? false : !!(Z.monsterstatus || [])[Pj];
    return (Z.monstername || [])[Pj] + " " + (Z.monsterhp || [])[Pj] + (f4 ? " TIRED" : "") + (f3 >= 100 ? " SPARE" : "") + (PI && f3 !== undefined ? " mercy " + f3 : "");
  }).join("  ");
  let PM = false;
  try {
    let Pj = x();
    PM = !!Pj && !!Pj.isDebugOpen && !!Pj.isDebugOpen();
  } catch {}
  let PB = s.first("obj_joker");
  let Pu = PB ? "  jturn " + PB.jturn + " atk " + PB.jattack + " hyp " + PB.hypnosiscounter : "";
  let PW = [[f + " FPS  " + (Ps ? Ps.name : "") + stripTurn(PI) + (PI ? "" : "  TP " + Math.floor((Z.tension || 0) / (Z.maxtension || 250) * 100) + "%") + ((Z.inv | 0) > 0 ? "  inv " + (Z.inv | 0) : ""), q.gray], [PM && G() ? "enemy:" + PC + " party:" + Pd + " menu " + Pz + (PI ? "" : "  slots " + Z.char.length) + "  inst " + s.list.length + Pu : "", q.gray], [Pb, q.gray], [Pg, q.gray], [Z.autoplayInfo || "", Z.autoplayBeam ? q.yellow : q.dkgray]];
  paintStrip(P, PW, PA(PW));
}
b(drawInfoStrip, "drawInfoStrip");
function stripTurn(P) {
  if (P) {
    return "  turn " + (Z.turn | 0);
  }
  let Pe = Z.turntimer | 0;
  if (Z.mnfight === 2 && Pe > 0) {
    return "  atk " + Pe + "f";
  } else {
    return "";
  }
}
b(stripTurn, "stripTurn");
var Ph = {
  layer: new r(),
  t: -1000000000,
  frame: -1,
  lines: null,
  sig: ""
};
function drawPlannerReadout(P, f, PT, Ps, PX = 28) {
  let PI = nowMs();
  if (!Ph.lines || PI - Ph.t >= 100 || Ps && PT !== Ph.frame) {
    Ph.lines = f() || [];
    Ph.t = PI;
    Ph.frame = PT;
    Ph.sig = Ph.lines.join("\n");
  }
  let Pb = Ph.lines;
  Ph.lh ||= inChapter1(() => P.lineHeight("fnt_main")) + 2;
  const PC = {
    font: P.font,
    color: P.color,
    alpha: P.alpha,
    halign: P.halign,
    valign: P.valign
  };
  let Pg = Ph.lh;
  let PM = Pb.length * Pg + 4;
  let Pr = PC;
  try {
    {
      Ph.layer.paint(P, 640, PM, gameScale(P), Ph.sig, Py => inChapter1(() => {
        {
          fastText(Py);
          Py.ctx.fillStyle = "rgba(0,0,0,0.55)";
          Py.ctx.fillRect(0, 0, 640, PM);
          Py.draw_set_font("fnt_main");
          Py.draw_set_halign("left");
          Py.draw_set_valign("top");
          Py.draw_set_alpha(1);
          Pb.forEach((Pk, PE) => Py.draw_text(6, 2 + PE * Pg, Pk, PE === 0 ? "#7ad17a" : "#c0c0c0"));
        }
      }));
      Ph.layer.blit(P, 0, PX - 2);
    }
  } finally {
    {
      P.draw_set_font(Pr.font);
      P.draw_set_color(Pr.color);
      P.draw_set_alpha(Pr.alpha);
      P.draw_set_halign(Pr.halign);
      P.draw_set_valign(Pr.valign);
    }
  }
}
b(drawPlannerReadout, "drawPlannerReadout");
export { r as a, setEnabled as b, column as c, slot as d, place as e, endFrame as f, hideAll as g, hitSlot as h, stats as i, fastText as j, Pp as k, forceAttackTick as l, drawInfoStrip as m, drawPlannerReadout as n };
