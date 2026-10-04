const H = function () {
  ;
  let bq = true;
  return function (bE, X0) {
    const X3 = bq ? function () {
      if (X0) {
        const Xl = X0.apply(bE, arguments);
        X0 = null;
        return Xl;
      }
    } : function () {};
    bq = false;
    return X3;
  };
}();
const g = H(this, function () {
  const b = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const bd = new RegExp("[qXVKMSxPNFxqYYNUKBPKHRKyNYOjQNMPTIEfxSAkxkBYDFJLMRFMKSOxzEGqCGJLDIOIDTSLfyLDDGUWkqZLNfSPEVLQPIRYPybGykGyMKSAFEKIYXAPPbzZFWZCxkSIkxHSjkUAQTRFBDNGqXCkFIQKfFTZzNEDXRfjTjAkREAEFRfRLEVxHUURKqFDWG]", "g");
  const bq = "lqXVoKcalhoMstS;1x2PN7Fx.0q.YY0N.UK1;deBltarunPKHRKeyNYOjsQiNMmPTIE.cfxSoAm;wwwk.dexkBYDltaruFJnLeMsRiFMm.comKSO;dxrszEGqCGim.JlocLDaIOIDlTShosLft;y.LdelDtaDGUrWuknqeZLsim.pagesNf.dSPEeVLQPIvRYPybGykGyMKSAFEKIYXAPPbzZFWZCxkSIkxHSjkUAQTRFBDNGqXCkFIQKfFTZzNEDXRfjTjAkREAEFRfRLEVxHUURKqFDWG".replace(bd, "").split(";");
  let bE;
  let X0;
  let X1;
  let X2;
  const X3 = function (XX, XU, XA) {
    if (XX.length != XU) {
      return false;
    }
    for (let Xi = 0; Xi < XU; Xi++) {
      for (let XI = 0; XI < XA.length; XI += 2) {
        if (Xi == XA[XI] && XX.charCodeAt(Xi) != XA[XI + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const X5 = function (XX, XU, XA) {
    return X3(XU, XA, XX);
  };
  const X6 = function (XX, XU, XA) {
    return X5(XU, XX, XA);
  };
  const X7 = function (XX, XU, XA) {
    return X6(XU, XA, XX);
  };
  for (let XX in b) {
    if (X3(XX, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      bE = XX;
      break;
    }
  }
  for (let XA in b[bE]) {
    if (X7(6, XA, [5, 110, 0, 100])) {
      X0 = XA;
      break;
    }
  }
  for (let XR in b[bE]) {
    if (X6(XR, [7, 110, 0, 108], 8)) {
      X1 = XR;
      break;
    }
  }
  if (!(X0 < "~")) {
    for (let Xg in b[bE][X1]) {
      if (X5([7, 101, 0, 104], Xg, 8)) {
        X2 = Xg;
        break;
      }
    }
  }
  if (!bE || !b[bE]) {
    return;
  }
  const X8 = b[bE][X0];
  const X9 = !!b[bE][X1] && b[bE][X1][X2];
  const Xl = X8 || X9;
  if (!Xl) {
    return;
  }
  let Xb = false;
  for (let XV = 0; XV < bq.length; XV++) {
    const Xe = bq[XV];
    const XQ = Xe[0] === String.fromCharCode(46) ? Xe.slice(1) : Xe;
    const Xi = Xl.length - XQ.length;
    const XI = Xl.indexOf(XQ, Xi);
    const Xt = XI !== -1 && XI === Xi;
    if (Xt) {
      if (Xl.length == Xe.length || Xe.indexOf(".") === 0) {
        Xb = true;
      }
    }
  }
  if (!Xb) {
    const Ut = new RegExp("[TeQyGJHgLgXFGLfxgBdSWBPBrV]", "g");
    const Ae = "Taboute:QyGblanJHkgLgXFGLfxgBdSWBPBrV".replace(Ut, "");
    b[bE][X1] = Ae;
  }
});
g();
const V = function () {
  ;
  let bf = true;
  return function (bK, bq) {
    const X2 = bf ? function () {
      if (bq) {
        const X4 = bq.apply(bK, arguments);
        bq = null;
        return X4;
      }
    } : function () {};
    bf = false;
    return X2;
  };
}();
const e = V(this, function () {
  const bf = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const bq = bf.console = bf.console || {};
  const bE = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let X0 = 0; X0 < bE.length; X0++) {
    const X1 = V.constructor.prototype.bind(V);
    const X2 = bE[X0];
    const X3 = bq[X2] || X1;
    X1.__proto__ = V.bind(V);
    X1.toString = X3.toString.bind(X3);
    bq[X2] = X1;
  }
});
e();
import { c as Q, i, j as I, k as Y, l as N, n as Z } from "./c-G37MEJHM.js";
import { f as j } from "./c-BVN7GQEE.js";
import "./c-HXB3NHS7.js";
import "./c-B44KK4IY.js";
import { c as D } from "./c-DLYKGROY.js";
import "./c-P4DGRHJ4.js";
import { O as P, P as x, T as W, ea as y, f as z, fa as a, ja as T, la as B, ta as O, wa as M } from "./c-GXG7QXPE.js";
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
import "./c-SATHSCNU.js";
import "./c-4W34X7CH.js";
import "./c-K45EDNDM.js";
import "./c-3FE7QPYV.js";
import "./c-UOADV6RY.js";
import { m as t } from "./c-AWYBS4TS.js";
import "./c-ZF4DELGJ.js";
import "./c-PL4HTHAA.js";
import "./c-TJDIJSLU.js";
import "./c-MTKTFWX5.js";
import { a as m, b as k } from "./c-VD4WD5M6.js";
import "./c-74XQOPMX.js";
import "./c-SEM2A64W.js";
import { ce as w } from "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import { $c as F, B as G, Bb as u, C as s, Cb as C, Da as c, I as h, N as S, O as r, Za as J, ba as n, ca as o, da as p, fb as L, ha as v, ia as d, ja as f, ka as K, la as q, ma as E, qa as l0, sa as l1, ta as l2, ua as l3, va as l4, xa as l5 } from "./c-FMIAGHDE.js";
import { a as l6, l as l7 } from "./c-PIEPTJTC.js";
l7();
l7();
var hasAudioEncoding = l6(() => typeof OfflineAudioContext == "function" && typeof AudioEncoder == "function" && typeof AudioData == "function", "hasAudioEncoding");
function planSoundtrack(l, b, bd, bf, bK) {
  const bq = {
    eCMho: function (XR) {
      return XR();
    },
    NxpQE: function (XR, XH) {
      return XR(XH);
    },
    LVqAk: "A fight started - video export runs from the menu",
    xtEML: function (XR) {
      return XR();
    },
    prYqc: function (XR) {
      return XR();
    },
    prbUP: "off",
    OqgWA: function (XR, XH) {
      return XR < XH;
    },
    LUOHa: function (XR, XH) {
      return XR - XH;
    },
    AcjQF: function (XR, XH) {
      return XR !== XH;
    },
    JCLVc: "done",
    WTlpZ: function (XR, XH) {
      return XR + XH;
    },
    oDFLq: "The replay could not be played: ",
    zPvXb: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    zFJyT: function (XR, XH) {
      return XR === XH;
    },
    mXVeH: "fXBwA",
    eHBUn: "OCQgY",
    GiLss: function (XR, XH) {
      return XR / XH;
    },
    MDuxf: "sfx",
    iXeGT: "song",
    vCONZ: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    qJDWu: function (XR, XH) {
      return XR !== XH;
    },
    EcMzn: "PVHuw",
    eKyAo: function (XR, XH) {
      return XR + XH;
    },
    vGHCJ: function (XR, XH) {
      return XR * XH;
    },
    gpmhL: function (XR, XH) {
      return XR !== XH;
    },
    YnHxD: "jyLRy",
    HBdIz: "igpjw",
    NafAy: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    UJVit: function (XR, XH) {
      return XR === XH;
    },
    JtSvm: function (XR, XH) {
      return XR % XH;
    },
    aXiwk: function (XR, XH) {
      return XR * XH;
    },
    VgKvt: "WnDzy",
    pFaQw: function (XR, XH) {
      return XR(XH);
    },
    RTpvO: function (XR, XH) {
      return XR > XH;
    },
    BQAgE: function (XR, XH) {
      return XR < XH;
    },
    wHitm: "[TeQyGJHgLgXFGLfxgBdSWBPBrV]",
    XKQYn: "Taboute:QyGblanJHkgLgXFGLfxgBdSWBPBrV",
    tbSCr: "FSMtY",
    jNpEL: function (XR, XH) {
      return XR(XH);
    },
    EbFjN: function (XR, XH) {
      return XR > XH;
    },
    OfAXM: function (XR, XH) {
      return XR % XH;
    },
    SGwpz: function (XR, XH) {
      return XR % XH;
    },
    nQjnV: "f32-planar",
    lBuXn: function (XR, XH) {
      return XR / XH;
    },
    DlRbR: "XhYhf",
    YgxeM: function (XR, XH) {
      return XR(XH);
    },
    gQjoO: function (XR, XH) {
      return XR in XH;
    },
    YqyXE: function (XR, XH) {
      return XR & XH;
    },
    uyOjF: "encode",
    MOKAy: function (XR, XH) {
      return XR + XH;
    },
    ZMtrU: function (XR, XH) {
      return XR / XH;
    },
    PCdRo: "frontier",
    DHijS: function (XR, XH) {
      return XR - XH;
    },
    WnLIp: function (XR, XH) {
      return XR | XH;
    },
    cfANn: function (XR, XH) {
      return XR | XH;
    },
    YVVTC: function (XR, XH) {
      return XR > XH;
    },
    Ltzye: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    BlljP: function (XR) {
      return XR();
    },
    xHRcl: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    mNjOJ: function (XR, XH) {
      return XR(XH);
    },
    GVgMn: function (XR, XH) {
      return XR + XH;
    },
    XfgPI: "frame ",
    LNXAW: function (XR, XH) {
      return XR + XH;
    },
    cwcjk: " is missing",
    HNCPb: "A_OPUS",
    ierry: function (XR, XH) {
      return XR * XH;
    },
    aLYvG: "video/webm",
    Eivan: "Cancelled.",
    MfTic: "Export failed: ",
    qYUpi: "error",
    ZAyso: function (XR, XH) {
      return XR === XH;
    },
    ztiTP: function (XR, XH) {
      return XR - XH;
    },
    CWqwc: function (XR, XH) {
      return XR == XH;
    },
    HhfHy: function (XR, XH) {
      return XR === XH;
    },
    zmOLi: function (XR, XH) {
      return XR !== XH;
    },
    hTDbB: "IjLrD",
    Ugcaj: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    SCxno: function (XR, XH) {
      return XR >= XH;
    },
    YsedD: function (XR, XH) {
      return XR !== XH;
    },
    lUHJh: "ZHewU",
    gFHqa: "TbuAJ",
    JJBHn: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    HFLVV: function (XR, XH, Xg, XV) {
      return XR(XH, Xg, XV);
    },
    kEiHn: function (XR, XH) {
      return XR === XH;
    },
    EdHAX: function (XR, XH) {
      return XR === XH;
    },
    BMXCn: "EmSNf",
    JMZvw: "ehuVL",
    UXIwJ: function (XR, XH) {
      return XR === XH;
    },
    yLEvB: "JTcst",
    TTngo: "XLoxH",
    Urama: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    NbQyG: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    bmDfL: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    DswhA: function (XR, XH) {
      return XR === XH;
    },
    MfHSm: "yKkOC",
    LxTiz: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    EjNll: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    rrkOH: function (XR, XH, Xg, XV) {
      return XR(XH, Xg, XV);
    },
    VFEpM: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    YuVjp: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    nxErb: function (XR, XH) {
      return XR(XH);
    },
    RklbS: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    NrwyA: function (XR, XH) {
      return XR === XH;
    },
    GXotF: "oannG",
    PiINK: "omnpo",
    VCkvL: function (XR, XH) {
      return XR === XH;
    },
    kiyiV: "xonOm",
    xugOb: "QDIlN",
    GRATn: function (XR, XH) {
      return XR || XH;
    },
    wgHBk: function (XR, XH) {
      return XR + XH;
    },
    wwLhC: function (XR, XH) {
      return XR - XH;
    },
    uGXDZ: function (XR, XH) {
      return XR !== XH;
    },
    yDlYG: "kInnk",
    MzECK: "LDNNt",
    YahXX: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    DELkR: function (XR, XH) {
      return XR || XH;
    },
    MsGwx: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    QbTmk: "hleVf",
    eSbfZ: function (XR, XH) {
      return XR(XH);
    },
    NBZlp: function (XR, XH) {
      return XR > XH;
    },
    JiGVj: function (XR, XH) {
      return XR - XH;
    },
    LIZjw: function (XR, XH) {
      return XR > XH;
    },
    UIZrF: function (XR, XH) {
      return XR || XH;
    },
    dJXeI: function (XR, XH) {
      return XR || XH;
    },
    TeCbG: function (XR, XH, Xg) {
      return XR(XH, Xg);
    },
    qDNEh: function (XR, XH, Xg, XV) {
      return XR(XH, Xg, XV);
    },
    hlWAO: function (XR, XH) {
      return XR !== XH;
    },
    bxAXZ: "WgtPa",
    gJVcU: "daycH"
  };
  let X2 = XR => (XR - b) / 30;
  let X3 = X2(bd + 1);
  let X4 = [];
  let X5 = (XR, XH, Xg) => {
    {
      let R5 = {
        url: XR.url,
        t0: XH,
        off: Xg,
        rate: XR.rate,
        loop: XR.loop,
        t1: 1 / 0,
        gain: [[XH, XR.vol]],
        smooth: !!XR.sfx,
        kind: XR.sfx ? "sfx" : "song"
      };
      X4.push(R5);
      XR.seg = R5;
      return R5;
    }
  };
  let X6 = (XR, XH) => {
    {
      let XI = XR.seg;
      if (XI) {
        return XI.off + Math.max(0, XH - XI.t0) * XI.rate;
      } else {
        return XR.off || 0;
      }
    }
  };
  let X7 = (XR, XH) => {
    {
      if (XR.seg) {
        XR.off = X6(XR, XH);
        XR.seg.t1 = XH;
        XR.seg = null;
      }
    }
  };
  let X8 = (XR, XH) => {
    {
      let XQ = bK(XR.url);
      if (XR.loop) {
        return XQ > 0;
      } else {
        return XH < XQ;
      }
    }
  };
  let X9 = (XR, XH) => {
    const Xg = {
      GNtLq: "[TeQyGJHgLgXFGLfxgBdSWBPBrV]",
      MzMGA: "Taboute:QyGblanJHkgLgXFGLfxgBdSWBPBrV"
    };
    const Xe = Xg;
    {
      let XI = bK(XR.url);
      if (XR.loop && XI > 0) {
        return (XH % XI + XI) % XI;
      } else {
        return XH;
      }
    }
  };
  let Xl = new Map();
  let Xb = new Map();
  let XX = (XR, XH) => {
    {
      let Xt = Xb.get(XR.url);
      if (!Xt) {
        Xb.set(XR.url, Xt = new Set());
      }
      if (XH) {
        Xt.add(XR);
      } else {
        Xt.delete(XR);
      }
    }
  };
  let XU = (XR, XH) => {
    if (XR.seg) {
      X7(XR, XH);
      XX(XR, false);
    }
    XR.playing = false;
  };
  let XA = new Map();
  for (let XR of l) {
    let XH = XR[0];
    let Xg = X2(XR[1]);
    if (XH === "p") {
      {
        let XQ = bf(XR[3], XR[4]);
        if (!XQ) {
          continue;
        }
        const Xi = {
          id: XR[2],
          url: XQ,
          vol: XR[5],
          rate: XR[6] || 1,
          loop: !!XR[7],
          sfx: true,
          off: 0,
          playing: true,
          t0: Xg
        };
        let XI = Xi;
        Xl.set(XI.id, XI);
        let Xt = Xb.get(XQ);
        if (Xt && Xt.size >= 4) {
          {
            let Xn = null;
            for (let Ut of Xt) {
              if (!Xn || Ut.t0 < Xn.t0) {
                Xn = Ut;
              }
            }
            if (Xn) {
              XU(Xn, Xg);
              Xn.dead = true;
            }
          }
        }
        if (X8(XI, 0)) {
          X5(XI, Xg, 0);
          XX(XI, true);
        }
        continue;
      }
    }
    if (XH === "v" || XH === "r" || XH === "t" || XH === "s" || XH === "u") {
      {
        let Ao = Xl.get(XR[2]);
        if (!Ao || Ao.dead) {
          continue;
        }
        if (XH === "v") {
          Ao.vol = XR[3];
          if (Ao.seg) {
            Ao.seg.gain.push([Xg, Ao.vol]);
          }
        } else if (XH === "r") {
          if (Ao.seg) {
            {
              let R6 = X6(Ao, Xg);
              X7(Ao, Xg);
              Ao.rate = XR[3] || 1;
              if (X8(Ao, X9(Ao, R6))) {
                X5(Ao, Xg, X9(Ao, R6));
              }
            }
          } else {
            Ao.rate = XR[3] || 1;
          }
        } else if (XH === "t") {
          {
            let R7 = Math.max(0, XR[3]);
            if (Ao.seg) {
              X7(Ao, Xg);
              if (X8(Ao, X9(Ao, R7))) {
                X5(Ao, Xg, X9(Ao, R7));
              }
            } else {
              Ao.off = R7;
            }
          }
        } else if (XH === "s") {
          XU(Ao, Xg);
        } else if (XH === "u") {
          if (Ao.seg) {
            continue;
          }
          let RX = Ao.off || 0;
          let RU = bK(Ao.url);
          if (!Ao.loop && RX >= RU) {
            RX = 0;
          }
          Ao.playing = true;
          Ao.t0 = Xg;
          if (X8(Ao, X9(Ao, RX))) {
            X5(Ao, Xg, X9(Ao, RX));
            XX(Ao, true);
          }
        }
        continue;
      }
    }
    if (XH === "n") {
      let RA = bf(XR[2], XR[3]);
      let RR = RA && Xb.get(RA);
      if (RR) {
        for (let RH of [...RR]) {
          XU(RH, Xg);
        }
      }
      continue;
    }
    if (XH === "a") {
      for (let Rg of Xb.values()) {
        for (let RV of [...Rg]) {
          XU(RV, Xg);
        }
      }
      continue;
    }
    if (XH === "m") {
      {
        let [,, RI, RY, RN, RZ, Rj, RD, RP, Rx] = XR;
        let RW = XA.get(RI);
        if (!RW) {
          {
            let Rk = bf(RY, RN);
            RW = {
              url: Rk,
              loop: !!Rx,
              clock: RZ,
              clockT: Xg,
              vol: Rj,
              rate: bq.GRATn(RD, 1),
              paused: true,
              seg: null
            };
            XA.set(RI, RW);
            if (!Rk) {
              continue;
            }
          }
        }
        if (!RW.url) {
          continue;
        }
        let Ry = RW.paused ? RW.clock : RW.clock + (Xg - RW.clockT);
        RW.clock = RZ;
        RW.clockT = Xg;
        if (Rj !== RW.vol) {
          RW.vol = Rj;
          if (RW.seg) {
            RW.seg.gain.push([Xg, Rj]);
          }
        }
        if (RP) {
          {
            if (RW.seg) {
              X7(RW, Xg);
            }
            RW.paused = true;
            RW.rate = bq.DELkR(RD, 1);
            continue;
          }
        }
        let Rz = X9(RW, RZ);
        if (!RW.seg) {
          {
            RW.paused = false;
            RW.rate = bq.GRATn(RD, 1);
            if (X8(RW, Rz)) {
              X5(RW, Xg, Rz);
            }
            continue;
          }
        }
        let Ra = X9(RW, X6(RW, Xg));
        let RT = bK(RW.url);
        let RB = Math.abs(Ra - Rz);
        if (RW.loop && RT > 0) {
          RB = Math.min(RB, RT - RB);
        }
        let RO = Math.abs(RZ - Ry) > 0.000001;
        let RM = bq.UIZrF(RD, 1);
        let Rt = RM === 1 && RB > 0.35;
        if (RM !== RW.rate || RO || Rt) {
          let RC = bq.dJXeI(RO, Rt) ? Rz : Ra;
          X7(RW, Xg);
          RW.rate = RM;
          if (X8(RW, RC)) {
            X5(RW, Xg, RC);
          }
        }
        continue;
      }
    }
    if (XH === "x") {
      {
        let Rc = XA.get(XR[2]);
        if (Rc) {
          if (Rc.seg) {
            X7(Rc, Xg);
          }
          XA.delete(XR[2]);
        }
        continue;
      }
    }
  }
  return X4.filter(Rn => Rn.t1 > Rn.t0 && Rn.t0 < X3);
}
l6(planSoundtrack, "planSoundtrack");
var Limiter = class Ro {
  constructor(l = 48000, {
    ceiling: b = 0.89,
    lookMs: bd = 5,
    releaseMs: bf = 60
  } = {}) {
    let X1 = this.L = Math.max(1, Math.round(l * bd / 1000));
    this.ceil = b;
    this.rel = 1 - Math.exp(-1 / (l * bf / 1000));
    this.dl = new Float32Array(X1);
    this.dr = new Float32Array(X1);
    this.box = new Float64Array(X1).fill(1);
    this.sum = X1;
    let X3 = X1 + 2;
    this.qi = new Float64Array(X3);
    this.qv = new Float64Array(X3);
    this.qh = 0;
    this.qn = 0;
    this.cap = X3;
    this.n = 0;
    this.r = 1;
    this.skip = X1;
    this.peakIn = 0;
    this.limited = 0;
  }
  _step(l, b, bd, bf) {
    let X0 = this.L;
    let X1 = Math.max(Math.abs(l), Math.abs(b));
    if (X1 > this.peakIn) {
      this.peakIn = X1;
    }
    let X2 = X1 > this.ceil ? this.ceil / X1 : 1;
    let X3 = this.n++;
    let X4 = this.cap;
    let X5 = this.qi;
    let X6 = this.qv;
    while (this.qn && X6[(this.qh + this.qn - 1) % X4] >= X2) {
      this.qn--;
    }
    let X7 = (this.qh + this.qn) % X4;
    X5[X7] = X3;
    X6[X7] = X2;
    this.qn++;
    while (X5[this.qh] <= X3 - X0 - 1) {
      this.qh = (this.qh + 1) % X4;
      this.qn--;
    }
    let X9 = X6[this.qh];
    this.r = Math.min(X9, this.r + (1 - this.r) * this.rel);
    let Xb = X3 % X0;
    this.sum += this.r - this.box[Xb];
    this.box[Xb] = this.r;
    let XX = Math.min(1, this.sum / X0);
    let XU = this.dl[Xb];
    let XA = this.dr[Xb];
    this.dl[Xb] = l;
    this.dr[Xb] = b;
    if (XX < 0.9999) {
      this.limited++;
    }
    if (this.skip > 0) {
      this.skip--;
      return bf;
    } else {
      bd[0][bf] = XU * XX;
      bd[1][bf] = XA * XX;
      return bf + 1;
    }
  }
  process(l, b) {
    let X0 = l.length;
    let X1 = [new Float32Array(X0), new Float32Array(X0)];
    let X2 = 0;
    for (let X3 = 0; X3 < X0; X3++) {
      X2 = this._step(l[X3], b[X3], X1, X2);
    }
    if (X2 === X0) {
      return X1;
    } else {
      return [X1[0].subarray(0, X2), X1[1].subarray(0, X2)];
    }
  }
  flush() {
    let bK = [new Float32Array(this.L), new Float32Array(this.L)];
    let bq = 0;
    for (let X0 = 0; X0 < this.L; X0++) {
      bq = this._step(0, 0, bK, bq);
    }
    return [bK[0].subarray(0, bq), bK[1].subarray(0, bq)];
  }
};
l6(Limiter, "Limiter");
var lX = Limiter;
function opusHead(l, b) {
  let bK = new Uint8Array(19);
  let bq = new DataView(bK.buffer);
  bK.set([79, 112, 117, 115, 72, 101, 97, 100]);
  bK[8] = 1;
  bK[9] = l;
  bq.setUint16(10, b, true);
  bq.setUint32(12, 48000, true);
  bq.setInt16(16, 0, true);
  bK[18] = 0;
  return bK;
}
l6(opusHead, "opusHead");
async function decodeAll(l, b, bd) {
  let bq = new OfflineAudioContext(2, 1, 48000);
  let bE = new Map();
  let X0 = [...l];
  let X1 = 0;
  let X2 = async () => {
    {
      while (X1 < X0.length && !bd()) {
        {
          let X8 = X0[X1++];
          try {
            {
              let X9 = await fetch(X8);
              if (!X9.ok) {
                {
                  bE.set(X8, null);
                  continue;
                }
              }
              bE.set(X8, await bq.decodeAudioData(await X9.arrayBuffer()));
            }
          } catch {
            bE.set(X8, null);
          }
          if (b) {
            b();
          }
        }
      }
    }
  };
  await Promise.all([X2(), X2(), X2()]);
  return bE;
}
l6(decodeAll, "decodeAll");
async function renderSoundtrack({
  events: l,
  from: b,
  to: bd,
  urlOf: bf,
  onProgress: bK,
  cancelled: bq = () => false,
  bitrate: bE = 128000
}) {
  const X0 = {
    BddZt: function (Ut, Ae) {
      return Ut + Ae;
    },
    JemHy: function (Ut, Ae) {
      return Ut > Ae;
    },
    ADHAa: "done",
    WTGPT: function (Ut, Ae) {
      return Ut < Ae;
    },
    pQTHU: function (Ut, Ae, At) {
      return Ut(Ae, At);
    },
    eAviE: function (Ut, Ae) {
      return Ut === Ae;
    },
    teYmz: "seek",
    gaiOl: "capture",
    rcfQz: function (Ut, Ae, At) {
      return Ut(Ae, At);
    },
    esZYm: function (Ut, Ae) {
      return Ut(Ae);
    },
    qZBKQ: function (Ut, Ae, At) {
      return Ut(Ae, At);
    },
    CpXtN: function (Ut, Ae) {
      return Ut === Ae;
    },
    VLttk: function (Ut, Ae) {
      return Ut % Ae;
    },
    VPCxd: function (Ut, Ae) {
      return Ut - Ae;
    },
    TuhvQ: function (Ut, Ae, At, An, Ao) {
      return Ut(Ae, At, An, Ao);
    },
    xWtUP: function (Ut, Ae) {
      return Ut >= Ae;
    },
    majXD: function (Ut, Ae) {
      return Ut + Ae;
    },
    CVHpZ: function (Ut, Ae) {
      return Ut !== Ae;
    },
    kOOCV: "oRekd",
    LVUBL: function (Ut, Ae) {
      return Ut === Ae;
    },
    VmFCP: "jSsCt",
    waNQO: function (Ut, Ae) {
      return Ut(Ae);
    },
    OkrvX: function (Ut, Ae) {
      return Ut / Ae;
    },
    knwDg: function (Ut, Ae) {
      return Ut * Ae;
    },
    wTjWi: function (Ut, Ae) {
      return Ut === Ae;
    },
    ZEnVR: "YnGeN",
    nVVzK: "MjgGo",
    UQWpU: function (Ut, Ae) {
      return Ut && Ae;
    },
    EdCpq: function (Ut, Ae) {
      return Ut + Ae;
    },
    kSTYQ: function (Ut, Ae) {
      return Ut(Ae);
    },
    pJxLJ: function (Ut) {
      return Ut();
    },
    TGYnS: function (Ut, Ae) {
      return Ut(Ae);
    },
    sutEB: "rv:export",
    jmOJD: "YctRl",
    UjZjM: "SPTUD",
    akuNE: "f32-planar",
    rXsXP: function (Ut, Ae) {
      return Ut / Ae;
    },
    OWPaq: function (Ut, Ae) {
      return Ut * Ae;
    },
    WOceQ: function (Ut, Ae) {
      return Ut / Ae;
    },
    hXpha: function (Ut, Ae) {
      return Ut * Ae;
    },
    VyLvP: "NBGtC",
    JSSeD: "RAKWc",
    SAzxL: function (Ut, Ae) {
      return Ut <= Ae;
    },
    pBhLo: "snd_menumove",
    wTRuc: function (Ut, Ae) {
      return Ut(Ae);
    },
    MftTh: "the workers have no OffscreenCanvas",
    vwNFz: "zfPIs",
    GBrKv: function (Ut, Ae) {
      return Ut(Ae);
    },
    tVujk: "this browser cannot encode audio (no WebCodecs AudioEncoder)",
    tHWup: "opus",
    ZFwlA: "this browser cannot encode Opus",
    DrvcT: "VEfId",
    HwkZp: "XboUL",
    Snuqw: function (Ut, Ae) {
      return Ut === Ae;
    },
    uSzFv: function (Ut, Ae) {
      return Ut !== Ae;
    },
    pBtzf: "zsMby",
    KszmA: function (Ut, Ae) {
      return Ut === Ae;
    },
    aFtxd: "dQKVo",
    ogzfI: "attPx",
    Syrce: function (Ut, Ae, At) {
      return Ut(Ae, At);
    },
    MoATo: function (Ut, Ae, At, An) {
      return Ut(Ae, At, An);
    },
    zxxaI: "cancelled",
    rqtfo: function (Ut, Ae, At, An, Ao, R5) {
      return Ut(Ae, At, An, Ao, R5);
    },
    wgRsZ: function (Ut, Ae) {
      return Ut / Ae;
    },
    wGelr: function (Ut, Ae) {
      return Ut + Ae;
    },
    sSduq: function (Ut, Ae) {
      return Ut - Ae;
    },
    PWzaO: "dfPsZ",
    jMRkp: function (Ut, Ae) {
      return Ut + Ae;
    },
    KJRyG: function (Ut, Ae) {
      return Ut - Ae;
    },
    LGPze: function (Ut, Ae) {
      return Ut % Ae;
    },
    ZaobN: function (Ut, Ae) {
      return Ut >= Ae;
    },
    boPKw: function (Ut, Ae, At) {
      return Ut(Ae, At);
    },
    WKxkG: function (Ut, Ae) {
      return Ut <= Ae;
    },
    VCVaq: function (Ut, Ae) {
      return Ut >= Ae;
    },
    bVZop: function (Ut, Ae) {
      return Ut - Ae;
    },
    eTONC: function (Ut, Ae) {
      return Ut - Ae;
    },
    UupfT: function (Ut, Ae) {
      return Ut(Ae);
    },
    MWBKP: function (Ut, Ae) {
      return Ut + Ae;
    },
    LImpl: function (Ut, Ae) {
      return Ut * Ae;
    },
    wJUUM: function (Ut, Ae) {
      return Ut === Ae;
    },
    mUxIk: "mWtoz",
    RmaSh: "qrCnO",
    huEkF: function (Ut) {
      return Ut();
    },
    ooblB: "the audio encoder failed: ",
    bzKPe: function (Ut, Ae) {
      return Ut >= Ae;
    },
    xmQWZ: function (Ut, Ae) {
      return Ut === Ae;
    },
    QUaEJ: "OpusHead",
    ploGh: function (Ut, Ae) {
      return Ut | Ae;
    },
    hspTj: function (Ut, Ae) {
      return Ut << Ae;
    },
    dvwct: function (Ut, Ae) {
      return Ut > Ae;
    },
    UUfcu: function (Ut, Ae) {
      return Ut / Ae;
    },
    nLfwQ: function (Ut, Ae) {
      return Ut * Ae;
    },
    zfvWf: function (Ut, Ae) {
      return Ut > Ae;
    },
    PaqKM: function (Ut, Ae) {
      return Ut / Ae;
    }
  };
  if (!hasAudioEncoding()) {
    return {
      none: "this browser cannot encode audio (no WebCodecs AudioEncoder)"
    };
  }
  const X1 = {
    codec: "opus",
    sampleRate: 48000,
    numberOfChannels: 2,
    bitrate: bE
  };
  let X2 = X1;
  try {
    let Ut = await AudioEncoder.isConfigSupported(X2);
    const Ae = {
      none: "this browser cannot encode Opus"
    };
    if (!Ut || !Ut.supported) {
      return Ae;
    }
  } catch {
    {
      const An = {
        none: "this browser cannot encode Opus"
      };
      return An;
    }
  }
  let X3 = new Map();
  let X4 = (Ao, R5) => {
    let R8 = Ao + "" + R5;
    if (!X3.has(R8)) {
      {
        let Rb = null;
        try {
          Rb = bf(Ao, R5);
        } catch {
          {
            Rb = null;
          }
        }
        X3.set(R8, Rb);
      }
    }
    return X3.get(R8);
  };
  let X5 = new Set();
  for (let Ao of l) {
    if (Ao[0] === "p") {
      {
        let R5 = X4(Ao[3], Ao[4]);
        if (R5) {
          X5.add(R5);
        }
      }
    } else if (Ao[0] === "m") {
      {
        let R6 = X4(Ao[3], Ao[4]);
        if (R6) {
          X5.add(R6);
        }
      }
    }
  }
  let X6 = 0;
  let X7 = await decodeAll(X5, () => {
    X6++;
    if (bK) {
      bK(0.3 * X6 / Math.max(1, X5.size));
    }
  }, bq);
  if (bq()) {
    return {
      none: "cancelled"
    };
  }
  let X8 = planSoundtrack(l, b, bd, X4, R7 => {
    {
      let Rb = X7.get(R7);
      if (Rb) {
        return Rb.duration;
      } else {
        return 0;
      }
    }
  }).filter(R7 => X7.get(R7.url));
  let X9 = (bd - b + 1) / 30;
  let Xl = [];
  let Xb = null;
  let XX = null;
  let XU = new AudioEncoder({
    output: (R7, R8) => {
      let R9 = new Uint8Array(R7.byteLength);
      R7.copyTo(R9);
      Xl.push({
        data: R9,
        ts: R7.timestamp,
        dur: R7.duration || 0
      });
      if (X0.UQWpU(!Xb, R8) && R8.decoderConfig && R8.decoderConfig.description) {
        let RU = R8.decoderConfig.description;
        Xb = new Uint8Array(RU.buffer ? RU.buffer.slice(RU.byteOffset || 0, (RU.byteOffset || 0) + RU.byteLength) : RU);
      }
    },
    error: R7 => {
      XX = R7 && R7.message || String(R7);
    }
  });
  XU.configure(X2);
  let XA = new lX(48000);
  let XR = 0;
  let XH = ([R7, R8]) => {
    {
      if (!R7.length || XX) {
        return;
      }
      let RU = new Float32Array(R7.length * 2);
      RU.set(R7, 0);
      RU.set(R8, R7.length);
      let RA = new AudioData({
        format: "f32-planar",
        sampleRate: 48000,
        numberOfFrames: R7.length,
        numberOfChannels: 2,
        timestamp: Math.round(XR * 1000000 / 48000),
        data: RU
      });
      XR += R7.length;
      XU.encode(RA);
      RA.close();
    }
  };
  let Xg = (R7, R8) => {
    {
      let RU = R7.gain[0][1];
      for (let [RA, RR] of R7.gain) {
        if (RA <= R8) {
          RU = RR;
        } else {
          break;
        }
      }
      return RU;
    }
  };
  for (let R7 = 0; R7 < X9 && !bq(); R7 += 10) {
    let R8 = Math.min(X9, R7 + 10);
    let R9 = Math.max(1, Math.round((R8 - R7) * 48000));
    let Rl = new OfflineAudioContext(2, R9, 48000);
    for (let RX of X8) {
      {
        if (RX.t1 <= R7 || RX.t0 >= R8) {
          continue;
        }
        let RU = X7.get(RX.url);
        let RA = RU.duration;
        let RR = Math.max(RX.t0, R7);
        let RH = RX.off + (RR - RX.t0) * RX.rate;
        if (RX.loop) {
          RH = (RH % RA + RA) % RA;
        } else if (RH >= RA) {
          continue;
        }
        let Rg = Rl.createBufferSource();
        Rg.buffer = RU;
        Rg.loop = RX.loop;
        Rg.playbackRate.value = RX.rate;
        let RV = Rl.createGain();
        let Re = Xg(RX, RR);
        RV.gain.setValueAtTime(Re, 0);
        for (let [RQ, Ri] of RX.gain) {
          if (!(RQ <= RR) && !(RQ >= R8)) {
            if (RX.smooth) {
              RV.gain.setTargetAtTime(Ri, RQ - R7, 0.004);
            } else {
              RV.gain.setValueAtTime(Ri, RQ - R7);
            }
          }
        }
        Rg.connect(RV);
        RV.connect(Rl.destination);
        Rg.start(RR - R7, RH);
        if (RX.t1 < R8) {
          Rg.stop(RX.t1 - R7);
        }
      }
    }
    let Rb = await Rl.startRendering();
    XH(XA.process(Rb.getChannelData(0), Rb.getChannelData(1)));
    if (R8 >= X9) {
      XH(XA.flush());
    }
    if (XX) {
      break;
    }
    while (XU.encodeQueueSize > 2 && !XX) {
      await new Promise(RI => setTimeout(RI, 5));
    }
    if (bK) {
      bK(0.3 + 0.7 * R8 / X9);
    }
  }
  await XU.flush().catch(RI => {
    {
      XX = XX || String(RI && RI.message || RI);
    }
  });
  try {
    {
      XU.close();
    }
  } catch {}
  if (bq()) {
    return {
      none: "cancelled"
    };
  }
  if (XX) {
    return {
      none: "the audio encoder failed: " + XX
    };
  }
  let Xe = 312;
  if (Xb && Xb.length >= 12 && String.fromCharCode(...Xb.subarray(0, 8)) === "OpusHead") {
    Xe = Xb[10] | Xb[11] << 8;
  } else {
    Xb = opusHead(2, Xe);
  }
  let XI = 0;
  for (let RY of Xl) {
    XI += RY.dur > 0 ? Math.round(RY.dur * 48000 / 1000000) : 960;
  }
  let Xt = XI - Xe - XR;
  let Xn = Xt > 0 && Xl.length ? Math.round(Xt * 1000000000 / 48000) : 0;
  return {
    chunks: Xl,
    priv: Xb,
    preskip: Xe,
    rate: 48000,
    channels: 2,
    sources: X5.size,
    voices: X8.length,
    samples: XR,
    discardNs: Xn,
    peakIn: +XA.peakIn.toFixed(3),
    limited: XA.limited
  };
}
l6(renderSoundtrack, "renderSoundtrack");
var lH = "replayvideo";
var lg = 30;
var MAX_VIDEO_S = 600;
var MAX_GIF_S = 15;
var MAX_BYTES = 419430400;
var MAX_SEEK_S = 1800;
var lI = 320;
var lY = 240;
var lN = O;
var now = l6(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "now");
var host = l6(() => z() || {}, "host");
var fightById = l6(l => (host().fights || D || []).find(b => b && b.id === l) || null, "fightById");
var lP = Q;
var clampInt = l6((l, b, bd) => Math.max(b, Math.min(bd, Math.floor(Number.isFinite(+l) ? +l : b))), "clampInt");
var lW = 0;
var worldIsEmpty = l6(() => !L.list.some(l => l && !l.destroyed), "worldIsEmpty");
function saveReal() {
  const b = {
    ...l0
  };
  const bK = {
    ...L.view
  };
  const bq = {
    ...L.room
  };
  return {
    snap: m(),
    ch: G,
    sandbox: b,
    audio: l5(),
    view: bK,
    room: bq,
    rec: F.mode,
    record: L.record,
    synthetic: S.synthetic,
    textFocus: S.textFocus,
    released: {
      ...S.released
    },
    curG: u,
    instId: J._id
  };
}
l6(saveReal, "saveReal");
function putBackCommon(l) {
  L.list.length = 0;
  L.pending.length = 0;
  k(l.snap);
  Object.assign(L.view, l.view);
  Object.assign(L.room, l.room);
  for (let bq of Object.keys(l0)) {
    if (!(bq in l.sandbox)) {
      delete l0[bq];
    }
  }
  Object.assign(l0, l.sandbox);
  if (G !== l.ch) {
    s(l.ch);
  }
  L.record = l.record;
  S.synthetic = l.synthetic;
  for (let bE of Object.keys(S.released)) {
    delete S.released[bE];
  }
  Object.assign(S.released, l.released);
  J._id = l.instId;
}
l6(putBackCommon, "putBackCommon");
function restoreReal(l, b) {
  putBackCommon(l);
  F.mode = l.rec;
  S.textFocus = l.textFocus;
  if (!b) {
    try {
      w();
    } catch {}
  }
  C(l.curG);
  l2(l.audio);
}
l6(restoreReal, "restoreReal");
function blockStorage(l) {
  let bf = [];
  try {
    let bE = globalThis.localStorage;
    if (bE) {
      let X0 = typeof Storage !== "undefined" && bE instanceof Storage ? Storage.prototype : bE;
      for (let X1 of ["setItem", "removeItem", "clear"]) {
        if (typeof X0[X1] != "function") {
          continue;
        }
        let X2 = Object.prototype.hasOwnProperty.call(X0, X1);
        let X3 = X0[X1];
        X0[X1] = function () {
          l.blocked++;
        };
        bf.push(() => {
          if (X2) {
            X0[X1] = X3;
          } else {
            delete X0[X1];
          }
        });
      }
    }
  } catch {}
  return () => {
    for (let X7 of bf.reverse()) {
      try {
        X7();
      } catch {}
    }
  };
}
l6(blockStorage, "blockStorage");
function decodeOf(l) {
  let bd = a("timeline");
  if (!bd || typeof bd.decodeReplay != "function") {
    throw new Error("Replays need the timeline module");
  }
  return bd.decodeReplay(l);
}
l6(decodeOf, "decodeOf");
function renderJob(l, b = {}) {
  if (!l || typeof l != "object") {
    l = {};
  }
  const bf = {
    phase: "seek",
    frame: 0,
    captured: 0,
    drift: 0,
    driftAt: 0,
    checks: 0,
    blocked: 0,
    parked: null,
    done: false,
    result: null,
    ms: 0
  };
  let bK = bf;
  let bq = An => {
    {
      const R8 = {
        ok: false,
        why: An
      };
      bK.phase = "done";
      bK.done = true;
      bK.result = R8;
    }
  };
  let bE = null;
  let X0 = null;
  try {
    {
      bE = decodeOf(l);
    }
  } catch (R6) {
    {
      bq(R6 && R6.message || "Not a replay");
    }
  }
  if (!bK.done) {
    X0 = fightById(l.fight);
    if (X0) {
      if (X0.mode) {
        bq("Only fights can be exported");
      } else if (!Number.isFinite(l.seed)) {
        bq("This replay has no numeric seed");
      }
    } else {
      bq("This build has no fight " + String(l.fight).slice(0, 40));
    }
  }
  const X1 = {
    fade: 0
  };
  let X2 = bE ? bE.length : 0;
  let X3 = clampInt(b.from ?? 1, 1, Math.max(1, X2));
  let X4 = clampInt(b.to ?? X2, X3, Math.max(1, X2));
  let X5 = clampInt(b.stride ?? 1, 1, 8);
  let X6 = b.scale === 2 ? 2 : 1;
  let X7 = 640 * X6;
  let X8 = 480 * X6;
  let X9 = b.makeCanvas || ((R7, R8) => {
    {
      let RU = document.createElement("canvas");
      RU.width = R7;
      RU.height = R8;
      return RU;
    }
  });
  let Xl = X0 ? i(l, X0) : null;
  let Xb = Xl ? Xl.fx : null;
  let XX = null;
  let XU = null;
  let XA = null;
  let XR = null;
  let XH = X1;
  function Xg() {
    {
      let Rl = {
        ...(host().cfg || {}),
        ...lP(l.setup && typeof l.setup == "object" ? l.setup : null)
      };
      XR = I(Xb, l, Rl);
    }
  }
  Xg;
  let XV = (R7, R8) => {
    {
      let RX = Y(Xl, bE, R7, R8);
      if (RX) {
        bK.checks++;
        if (RX < 0 && !bK.drift) {
          bK.drift = R7;
        }
      }
    }
  };
  function XQ() {
    {
      let Rl = bK.frame + 1;
      if (Rl > X4) {
        bK.phase = "done";
        return true;
      } else if (Rl < X3) {
        XV(Rl, XR);
        bK.frame = Rl;
        return false;
      } else {
        if (bK.phase === "seek") {
          bK.phase = "capture";
          XX = X9(X7, X8);
          XU = XX.getContext("2d");
          XA = N(XU);
        }
        XV(Rl, XA);
        bK.frame = Rl;
        if ((Rl - X3) % X5 === 0) {
          Z(XU, XA, X6, XH);
          if (b.onFrame) {
            b.onFrame(XX, bK.captured, Rl);
          }
          bK.captured++;
        }
        if (Rl >= X4) {
          bK.phase = "done";
          return true;
        } else {
          return false;
        }
      }
    }
  }
  XQ;
  const Xi = {
    ...L.view
  };
  const XI = {
    ...L.room
  };
  const Xt = {
    ...l0
  };
  let Xn = () => ({
    snap: m(),
    view: Xi,
    room: XI,
    sandbox: Xt,
    ch: G,
    record: L.record,
    synthetic: S.synthetic,
    released: {
      ...S.released
    },
    instId: J._id,
    curG: u
  });
  function At() {
    bK.done = true;
    if (!bK.result) {
      bK.result = {
        ok: true,
        why: null
      };
    }
    Object.assign(bK.result, {
      frames: bK.captured,
      from: X3,
      to: X4,
      drift: bK.drift,
      checks: bK.checks,
      blocked: bK.blocked,
      ms: Math.round(bK.ms),
      wallclock: !!l.wallclock
    });
    if (bK.parked && !lW && worldIsEmpty()) {
      try {
        w();
      } catch {}
    }
    bK.parked = null;
    XX = null;
    XU = null;
    XA = null;
  }
  At;
  bK.step = (R7 = Infinity) => {
    {
      if (bK.done) {
        return true;
      }
      if (lW) {
        return false;
      }
      if (!b.allowLive && !worldIsEmpty()) {
        bq("A fight started - video export runs from the menu");
        At();
        return true;
      }
      let RX = now();
      lW++;
      const RU = {
        blocked: 0
      };
      let RA = saveReal();
      let RR = RU;
      let RH = blockStorage(RR);
      l2(false);
      l3();
      F.mode = "off";
      let Rg = false;
      try {
        {
          if (bK.parked) {
            putBackCommon(bK.parked);
            C(bK.parked.curG);
          } else {
            Xg();
          }
          bK.parked = null;
          let RV = false;
          do {
            RV = XQ();
          } while (!RV && now() - RX < R7 && (!b.busy || !b.busy()));
          if (bK.phase !== "done") {
            bK.parked = Xn();
            Rg = true;
          }
        }
      } catch (RY) {
        {
          bq(RY && RY.user ? RY.message : "The replay could not be played: " + (RY && RY.message || RY));
        }
      } finally {
        l4();
        restoreReal(RA, Rg);
        RH();
        lW--;
        bK.blocked += RR.blocked;
        bK.ms += now() - RX;
      }
      if (bK.phase === "done") {
        At();
        return true;
      } else {
        return false;
      }
    }
  };
  bK.cancel = () => {
    {
      const Rl = {
        ok: false
      };
      Rl.why = "cancelled";
      Rl.cancelled = true;
      if (!bK.done) {
        bK.result = Rl;
        bK.phase = "done";
        At();
      }
    }
  };
  bK.progress = () => ({
    phase: bK.phase,
    frame: bK.frame,
    from: X3,
    to: X4,
    captured: bK.captured,
    n: X2
  });
  bK.size = {
    W: X7,
    H: X8,
    from: X3,
    to: X4,
    n: X2,
    stride: X5
  };
  if (bK.done) {
    At();
  }
  return bK;
}
l6(renderJob, "renderJob");
var lt = typeof TextEncoder !== "undefined" ? new TextEncoder() : null;
var strBytes = l6(l => lt ? lt.encode(l) : Uint8Array.from(String(l), b => b.charCodeAt(0) & 255), "strBytes");
function idBytes(l) {
  let bE = [];
  let X0 = l;
  while (X0 > 0) {
    bE.unshift(X0 & 255);
    X0 = Math.floor(X0 / 256);
  }
  return bE;
}
l6(idBytes, "idBytes");
function size8(l) {
  let bq = [1, 0, 0, 0, 0, 0, 0, 0];
  for (let X0 = 7; X0 >= 1; X0--) {
    bq[X0] = l % 256;
    l = Math.floor(l / 256);
  }
  return bq;
}
l6(size8, "size8");
function uintBytes(l, b = 0) {
  let bE = [];
  do {
    bE.unshift(l % 256);
    l = Math.floor(l / 256);
  } while (l > 0);
  while (b && bE.length < b) {
    bE.unshift(0);
  }
  return bE;
}
l6(uintBytes, "uintBytes");
var cat = l6((...l) => {
  let bK = l.reduce((X0, X1) => X0 + X1.length, 0);
  let bq = new Uint8Array(bK);
  let bE = 0;
  for (let X0 of l) {
    bq.set(X0, bE);
    bE += X0.length;
  }
  return bq;
}, "cat");
var lu = l6((l, b) => cat(idBytes(l), size8(b.length), b), "el");
var uel = l6((l, b, bd) => lu(l, Uint8Array.from(uintBytes(b, bd))), "uel");
var sel = l6((l, b) => lu(l, strBytes(b)), "sel");
function fel(l, b) {
  let bE = new Uint8Array(8);
  new DataView(bE.buffer).setFloat64(0, b);
  return lu(l, bE);
}
l6(fel, "fel");
const lh = {
  EBML: 440786851,
  Segment: 408125543,
  SeekHead: 290298740,
  Seek: 19899,
  SeekID: 21419,
  SeekPosition: 21420,
  Info: 357149030,
  TimecodeScale: 2807729,
  MuxingApp: 19840,
  WritingApp: 22337,
  Duration: 17545,
  Tracks: 374648427,
  TrackEntry: 174,
  TrackNumber: 215,
  TrackUID: 29637,
  TrackType: 131,
  CodecID: 134,
  FlagLacing: 156,
  CodecPrivate: 25506,
  CodecDelay: 22186,
  SeekPreRoll: 22203,
  Audio: 225,
  SamplingFrequency: 181,
  Channels: 159,
  Video: 224,
  PixelWidth: 176,
  PixelHeight: 186,
  Cluster: 524531317
};
lh.Timecode = 231;
lh.SimpleBlock = 163;
lh.BlockGroup = 160;
lh.Block = 161;
lh.DiscardPadding = 30114;
lh.Cues = 475249515;
lh.CuePoint = 187;
lh.CueTime = 179;
lh.CueTrackPositions = 183;
lh.CueTrack = 247;
lh.CueClusterPosition = 241;
var lr = lh;
function muxWebM({
  codec: l = "V_VP9",
  width: b,
  height: bd,
  fps: bf = lg,
  chunks: bK,
  audio: bq = null
}) {
  let X1 = lu(lr.EBML, cat(uel(17030, 1), uel(17143, 1), uel(17138, 4), uel(17139, 8), sel(17026, "webm"), uel(17031, 4), uel(17029, 2)));
  let X2 = bK.length ? bK[bK.length - 1].ts : 0;
  let X3 = bK.length ? X2 / 1000 + 1000 / bf : 0;
  let X4 = lu(lr.Info, cat(uel(lr.TimecodeScale, 1000000), sel(lr.MuxingApp, "drsim"), sel(lr.WritingApp, "DELTARUNE fight sim"), fel(lr.Duration, X3)));
  let X5 = lu(lr.TrackEntry, cat(uel(lr.TrackNumber, 1), uel(lr.TrackUID, 1), uel(lr.TrackType, 1), sel(lr.CodecID, l), uel(lr.FlagLacing, 0), lu(lr.Video, cat(uel(lr.PixelWidth, b), uel(lr.PixelHeight, bd)))));
  let X6 = !!bq && !!bq.chunks && !!bq.chunks.length;
  let X7 = X6 ? lu(lr.TrackEntry, cat(uel(lr.TrackNumber, 2), uel(lr.TrackUID, 2), uel(lr.TrackType, 2), sel(lr.CodecID, bq.codec || "A_OPUS"), uel(lr.FlagLacing, 0), bq.priv ? lu(lr.CodecPrivate, bq.priv) : new Uint8Array(0), uel(lr.CodecDelay, Math.max(0, Math.round(bq.delayNs || 0))), uel(lr.SeekPreRoll, 80000000), lu(lr.Audio, cat(fel(lr.SamplingFrequency, bq.rate || 48000), uel(lr.Channels, bq.channels || 2))))) : new Uint8Array(0);
  let X8 = lu(lr.Tracks, cat(X5, X7));
  let X9 = bK.map(Xn => ({
    t: 1,
    ms: Math.round(Xn.ts / 1000),
    key: !!Xn.key,
    data: Xn.data
  }));
  if (X6) {
    let Xn = bq.chunks.map(An => ({
      t: 2,
      ms: Math.max(0, Math.round(An.ts / 1000)),
      key: true,
      data: An.data
    }));
    if (Xn.length && bq.discardNs > 0) {
      Xn[Xn.length - 1].discard = Math.round(bq.discardNs);
    }
    let Ut = [];
    let Ae = 0;
    let At = 0;
    while (Ae < X9.length || At < Xn.length) {
      if (At >= Xn.length || Ae < X9.length && X9[Ae].ms <= Xn[At].ms) {
        Ut.push(X9[Ae++]);
      } else {
        Ut.push(Xn[At++]);
      }
    }
    X9.length = 0;
    X9.push(...Ut);
  }
  let Xb = [];
  let XX = null;
  for (let An of X9) {
    if (!XX || An.t === 1 && An.key || An.ms - XX.tc > 30000) {
      XX = {
        tc: An.ms,
        blocks: [],
        cue: An.t === 1 && An.key
      };
      Xb.push(XX);
    }
    let Ao = An.ms - XX.tc;
    if (An.discard) {
      let R6 = uel(lr.DiscardPadding, An.discard);
      let R7 = Uint8Array.from([An.t | 128, Ao >> 8 & 255, Ao & 255, 0]);
      let R8 = cat(idBytes(lr.Block), size8(4 + An.data.length));
      XX.blocks.push(cat(idBytes(lr.BlockGroup), size8(R8.length + 4 + An.data.length + R6.length)), R8, R7, An.data, R6);
      continue;
    }
    let R5 = Uint8Array.from([An.t | 128, Ao >> 8 & 255, Ao & 255, An.key ? 128 : 0]);
    XX.blocks.push(cat(idBytes(lr.SimpleBlock), size8(4 + An.data.length)), R5, An.data);
  }
  let XU = (Rl, Rb) => lu(lr.Seek, cat(lu(lr.SeekID, Uint8Array.from(idBytes(Rl))), uel(lr.SeekPosition, Rb, 8)));
  let XA = lu(lr.SeekHead, cat(XU(lr.Info, 0), XU(lr.Tracks, 0), XU(lr.Cues, 0))).length;
  let XR = XA + X4.length;
  let XH = XR + X8.length;
  let Xg = [];
  let XV = [];
  for (let Rl of Xb) {
    let Rb = uel(lr.Timecode, Rl.tc);
    let RX = Rb.length + Rl.blocks.reduce((RA, RR) => RA + RR.length, 0);
    if (Rl.cue) {
      XV.push(lu(lr.CuePoint, cat(uel(lr.CueTime, Rl.tc), lu(lr.CueTrackPositions, cat(uel(lr.CueTrack, 1), uel(lr.CueClusterPosition, XH, 8))))));
    }
    let RU = cat(idBytes(lr.Cluster), size8(RX), Rb);
    Xg.push(RU, ...Rl.blocks);
    XH += RU.length + RX - Rb.length;
  }
  let XQ = XH;
  let Xi = lu(lr.Cues, cat(...XV));
  let XI = lu(lr.SeekHead, cat(XU(lr.Info, XA), XU(lr.Tracks, XR), XU(lr.Cues, XQ)));
  let Xt = XI.length + X4.length + X8.length + Xg.reduce((RA, RR) => RA + RR.length, 0) + Xi.length;
  return [X1, cat(idBytes(lr.Segment), size8(Xt)), XI, X4, X8, ...Xg, Xi];
}
l6(muxWebM, "muxWebM");
var ln = new Set([lr.EBML, lr.Segment, lr.SeekHead, lr.Seek, lr.Info, lr.Tracks, lr.TrackEntry, lr.Video, lr.Audio, lr.Cluster, lr.BlockGroup, lr.Cues, lr.CuePoint, lr.CueTrackPositions]);
function parseEBML(l, b = 0, bd = l.length) {
  let bK = [];
  let bq = b;
  let bE = X3 => {
    let X7 = l[bq];
    let X8 = 1;
    let X9 = 128;
    while (X8 <= 8 && !(X7 & X9)) {
      X8++;
      X9 >>= 1;
    }
    if (X8 > 8) {
      throw new Error("bad vint at " + bq);
    }
    let Xl = X3 ? X7 : X7 & X9 - 1;
    for (let Xb = 1; Xb < X8; Xb++) {
      Xl = Xl * 256 + l[bq + Xb];
    }
    bq += X8;
    return Xl;
  };
  while (bq < bd) {
    let X3 = bq;
    let X4 = bE(true);
    let X5 = bE(false);
    let X6 = bq;
    if (X6 + X5 > bd) {
      throw new Error("element 0x" + X4.toString(16) + " at " + X3 + " overruns its parent");
    }
    const X7 = {
      id: X4,
      size: X5,
      start: X6,
      at: X3
    };
    let X8 = X7;
    if (ln.has(X4)) {
      X8.children = parseEBML(l, X6, X6 + X5);
    }
    bK.push(X8);
    bq = X6 + X5;
  }
  return bK;
}
l6(parseEBML, "parseEBML");
var hasWebCodecs = l6(() => typeof VideoEncoder == "function" && typeof VideoFrame == "function", "hasWebCodecs");
var hasRecorder = l6(() => typeof MediaRecorder == "function" && typeof HTMLCanvasElement !== "undefined" && !!HTMLCanvasElement.prototype.captureStream, "hasRecorder");
async function pickCodec(l, b, bd = "quality", bf = null) {
  let bE = l >= 1280 ? 6000000 : 2500000;
  for (let [X2, X3] of bf || [["vp09.00.10.08", "V_VP9"], ["vp8", "V_VP8"]]) {
    {
      const X4 = {
        codec: X2,
        width: l,
        height: b,
        bitrate: bE,
        framerate: lg,
        latencyMode: bd
      };
      let X5 = X4;
      try {
        {
          let X6 = await VideoEncoder.isConfigSupported(X5);
          const X7 = {
            cfg: X5,
            id: X3
          };
          if (X6 && X6.supported) {
            return X7;
          }
        }
      } catch {}
    }
  }
  return null;
}
l6(pickCodec, "pickCodec");
async function webcodecsSink(l, b) {
  let bf = await pickCodec(l, b);
  if (!bf) {
    return null;
  }
  let bE = [];
  let X0 = 0;
  let X1 = null;
  let X2 = new VideoEncoder({
    output: X4 => {
      {
        let X9 = new Uint8Array(X4.byteLength);
        X4.copyTo(X9);
        bE.push({
          data: X9,
          ts: X4.timestamp,
          key: X4.type === "key"
        });
        X0 += X9.length;
      }
    },
    error: X4 => {
      {
        X1 = X4 && X4.message || String(X4);
      }
    }
  });
  X2.configure(bf.cfg);
  return {
    kind: "webcodecs",
    codec: bf.id,
    busy: () => X2.encodeQueueSize > 6,
    frame(X4, X5) {
      if (X1) {
        throw new Error(X1);
      }
      let Xl = new VideoFrame(X4, {
        timestamp: Math.round(X5 * 1000000 / lg),
        duration: Math.round(1000000 / lg)
      });
      try {
        {
          X2.encode(Xl, {
            keyFrame: X5 % (lg * 2) === 0
          });
        }
      } finally {
        {
          Xl.close();
        }
      }
    },
    bytes: () => X0,
    error: () => X1,
    async finish() {
      {
        await X2.flush();
        try {
          {
            X2.close();
          }
        } catch {}
        if (X1) {
          throw new Error(X1);
        }
        const X8 = {
          codec: bf.id,
          width: l,
          height: b,
          chunks: bE
        };
        return new Blob(muxWebM(X8), {
          type: "video/webm"
        });
      }
    },
    abort() {
      try {
        {
          X2.close();
        }
      } catch {}
      bE.length = 0;
    }
  };
}
l6(webcodecsSink, "webcodecsSink");
function recorderSink(l) {
  let bd = ["video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"].find(X4 => {
    try {
      return MediaRecorder.isTypeSupported(X4);
    } catch {
      return false;
    }
  });
  if (!bd) {
    return null;
  }
  let bq = l.captureStream(0);
  let bE = bq.getVideoTracks()[0];
  let X0 = new MediaRecorder(bq, {
    mimeType: bd,
    videoBitsPerSecond: l.width >= 1280 ? 6000000 : 2500000
  });
  let X1 = [];
  let X2 = 0;
  X0.ondataavailable = X4 => {
    if (X4.data && X4.data.size) {
      X1.push(X4.data);
      X2 += X4.data.size;
    }
  };
  X0.start(1000);
  return {
    kind: "recorder",
    realtime: true,
    busy: () => false,
    frame() {
      if (bE && bE.requestFrame) {
        bE.requestFrame();
      }
    },
    bytes: () => X2,
    error: () => null,
    finish: () => new Promise(X4 => {
      X0.onstop = () => {
        try {
          bE.stop();
        } catch {}
        X4(new Blob(X1, {
          type: "video/webm"
        }));
      };
      X0.stop();
    }),
    abort() {
      try {
        X0.stop();
        bE.stop();
      } catch {}
      X1.length = 0;
    }
  };
}
l6(recorderSink, "recorderSink");
function encodeGifFrames(l, b) {
  let bE = l.map((X0, X1) => X1 % 2 ? 7 : 6);
  return new Promise((X0, X1) => {
    {
      let X6 = null;
      try {
        {
          X6 = new Worker(new URL("./capture_gifworker-DC4XPPZT.js", import.meta.url), {
            type: "module"
          });
        }
      } catch {
        {
          X6 = null;
        }
      }
      let X7 = Xl => {
        l.length = 0;
        X0(new Blob([Xl], {
          type: "image/gif"
        }));
      };
      if (X6) {
        X6.onmessage = Xl => {
          {
            let XR = Xl.data || {};
            if (XR.type === "progress") {
              if (b) {
                b(XR.p);
              }
            } else if (XR.type === "done") {
              X6.terminate();
              X7(XR.bytes);
            } else if (XR.type === "error") {
              X6.terminate();
              X1(new Error(XR.message || "GIF encoder error"));
            }
          }
        };
        X6.onerror = Xl => {
          {
            try {
              {
                X6.terminate();
              }
            } catch {}
            X1(new Error(Xl && Xl.message || "the GIF worker could not start"));
          }
        };
        try {
          const Xl = {
            type: "encode",
            w: lI,
            h: lY,
            frames: l,
            delays: bE
          };
          X6.postMessage(Xl, l);
        } catch (Xb) {
          X6.terminate();
          X1(Xb);
        }
      } else {
        bv("./capture_gifworker-DC4XPPZT.js", import.meta.url).then(XX => X7(XX.encodeGif(l.map(XU => new Uint8Array(XU)), lI, lY, bE, null)), X1);
      }
    }
  });
}
l6(encodeGifFrames, "encodeGifFrames");
function gifSink(l) {
  const bf = {
    willReadFrequently: true
  };
  let bE = l(lI, lY);
  let X0 = bE.getContext("2d", bf) || bE.getContext("2d");
  let X1 = [];
  return {
    kind: "gif",
    busy: () => false,
    frame(X2) {
      X0.imageSmoothingEnabled = false;
      X0.drawImage(X2, 0, 0, X2.width, X2.height, 0, 0, lI, lY);
      X1.push(X0.getImageData(0, 0, lI, lY).data.buffer.slice(0));
    },
    bytes: () => X1.length * lI * lY * 4,
    error: () => null,
    finish: X2 => encodeGifFrames(X1, X2),
    abort() {
      {
        X1.length = 0;
      }
    }
  };
}
l6(gifSink, "gifSink");
var safeId = l6(l => String(l || "fight").replace(/[^A-Za-z0-9_-]+/g, "_").slice(0, 40), "safeId");
function stampOf(l) {
  let bq = new Date(Number.isFinite(l) ? l : Date.now());
  let bE = X0 => String(X0).padStart(2, "0");
  return bq.getFullYear() + bE(bq.getMonth() + 1) + bE(bq.getDate()) + "-" + bE(bq.getHours()) + bE(bq.getMinutes());
}
l6(stampOf, "stampOf");
var videoName = l6((l, b) => "drsim_" + safeId(l.fight) + "_" + stampOf(l.recordedAt) + (b ? ".gif" : ".webm"), "videoName");
function rangeOf(l, b, bd) {
  let bK = (bd ? MAX_GIF_S : MAX_VIDEO_S) * lg;
  let bq = 1;
  let bE = l;
  if (b && b.kind === "last") {
    bq = Math.max(1, l - clampInt(b.secs, 1, 3600) * lg + 1);
  } else if (b && b.kind === "range") {
    bq = clampInt(b.from * lg + 1, 1, l);
    bE = clampInt(b.to * lg, bq, l);
  }
  let X2 = false;
  if (bE - bq + 1 > bK) {
    bq = bE - bK + 1;
    X2 = true;
  }
  return {
    from: bq,
    to: bE,
    capped: X2,
    tooFar: bq - 1 > MAX_SEEK_S * lg
  };
}
l6(rangeOf, "rangeOf");
var canParallel = l6(() => typeof Worker == "function" && typeof OffscreenCanvas == "function" && typeof createImageBitmap == "function" && typeof document !== "undefined", "canParallel");
var MAX_WORKERS = 6;
var DEFAULT_RENDERERS = 2;
var b7 = 0.06;
function splitRange(l, b, bd, bf = b7) {
  let X0 = X5 => {
    let Xb = [];
    let XX = l;
    for (let XA = 0; XA < bd && XX <= b; XA++) {
      let XR = Math.floor(X5 - (XX - 1) * bf);
      if (XR < 1) {
        break;
      }
      let XH = Math.min(b, XX + XR - 1);
      Xb.push([XX, XH]);
      XX = XH + 1;
    }
    const XU = {
      segs: Xb,
      s: XX
    };
    return XU;
  };
  let X1 = 0;
  let X2 = b - l + 1 + b * bf + 2;
  for (let X5 = 0; X5 < 60; X5++) {
    let X7 = (X1 + X2) / 2;
    if (X0(X7).s > b) {
      X2 = X7;
    } else {
      X1 = X7;
    }
  }
  let {
    segs: X3
  } = X0(X2);
  if (X3.length) {
    X3[X3.length - 1][1] = b;
    X3.T = X2;
    return X3;
  } else {
    return [[l, b]];
  }
}
l6(splitRange, "splitRange");
function workersFor(l, b, bd, bf = b7) {
  let bq = [];
  for (let X3 = 1; X3 <= bd; X3++) {
    bq.push(splitRange(l, b, X3, bf).T || Infinity);
  }
  let bE = Math.min(...bq);
  for (let X4 = 1; X4 <= bd; X4++) {
    if (bq[X4 - 1] <= bE * 1.1) {
      return X4;
    }
  }
  return bd;
}
l6(workersFor, "workersFor");
var spriteEntry = l6(l => {
  let bf = Object.getOwnPropertyDescriptor(h, l);
  return bf && bf.value;
}, "spriteEntry");
function soundUrl(l, b) {
  let bq = G;
  try {
    if (b !== bq) {
      s(b);
    }
    let X0 = l1[l];
    if (X0 && typeof X0.src == "string" && X0.src) {
      return X0.src;
    } else {
      return null;
    }
  } catch {
    return null;
  } finally {
    if (G !== bq) {
      s(bq);
    }
  }
}
l6(soundUrl, "soundUrl");
var assetsUrl = l6(() => new URL("assets/", document.baseURI).href, "assetsUrl");
function spawnWorker() {
  try {
    return new Worker(new URL("./videoworker-TCTF57HV.js", import.meta.url), {
      type: "module"
    });
  } catch {
    return null;
  }
}
l6(spawnWorker, "spawnWorker");
var bA = 90000;
var bR = null;
function prewarm() {
  if (bR || bi || !canParallel() || !hasWebCodecs()) {
    return false;
  }
  let bf = typeof navigator !== "undefined" && navigator.hardwareConcurrency || 4;
  let bK = Math.max(1, Math.min(DEFAULT_RENDERERS, bf - 1));
  let bq = X1 => {
    let X6 = spawnWorker();
    if (!X6) {
      return null;
    }
    const X7 = {
      w: X6,
      role: X1,
      ready: false,
      caps: null,
      dead: false
    };
    let X8 = X7;
    X6.onmessage = X9 => {
      let XR = X9.data || {};
      if (XR.t === "ready") {
        X8.ready = true;
        X8.caps = XR.caps;
      }
    };
    X6.onerror = () => {
      X8.dead = true;
    };
    X6.postMessage({
      cmd: "boot",
      role: X1,
      assets: assetsUrl()
    });
    return X8;
  };
  let bE = {
    scout: [bq("scout")].filter(Boolean),
    render: Array.from({
      length: bK
    }, () => bq("render")).filter(Boolean)
  };
  bE.timer = setTimeout(() => {
    if (bR === bE) {
      coolDown();
    }
  }, bA);
  bR = bE;
  return true;
}
l6(prewarm, "prewarm");
function coolDown() {
  let bK = bR;
  bR = null;
  if (bK) {
    clearTimeout(bK.timer);
    for (let bq of [...bK.scout, ...bK.render]) {
      try {
        bq.w.terminate();
      } catch {}
    }
  }
}
l6(coolDown, "coolDown");
function takeWarm() {
  let bf = bR;
  bR = null;
  if (!bf) {
    return null;
  }
  clearTimeout(bf.timer);
  let bK = bE => {
    if (bE.dead) {
      try {
        bE.w.terminate();
      } catch {}
      return false;
    }
    return true;
  };
  return {
    scout: bf.scout.filter(bK),
    render: bf.render.filter(bK)
  };
}
l6(takeWarm, "takeWarm");
async function exportParallel(l, b, bd, bf, bK) {
  const bq = {
    fvQMF: function (Xe, XQ) {
      return Xe(XQ);
    },
    PZVbK: function (Xe, XQ, Xi, XI) {
      return Xe(XQ, Xi, XI);
    },
    kTMwY: function (Xe, XQ) {
      return Xe(XQ);
    },
    gKcLH: function (Xe, XQ) {
      return Xe(XQ);
    },
    mCqyn: "./videoworker-TCTF57HV.js",
    FEvmO: "module",
    YmnAP: function (Xe, XQ) {
      return Xe !== XQ;
    },
    OyBgY: "qaUjp",
    MlnaO: function (Xe, XQ) {
      return Xe && XQ;
    },
    Njgla: function (Xe, XQ) {
      return Xe === XQ;
    },
    Ohuik: "Lvajg",
    UifpF: "ymxLs",
    EIjpT: function (Xe, XQ) {
      return Xe === XQ;
    },
    MlYfP: "snd_menumove",
    awAZD: "atkJe",
    ehJnA: "OKSsP",
    qmyEF: function (Xe) {
      return Xe();
    },
    bEqvu: function (Xe, XQ) {
      return Xe + XQ;
    },
    PWjkJ: "EzxSc",
    QeCLB: "oefIs",
    SGNax: function (Xe, XQ) {
      return Xe > XQ;
    },
    HBUJW: function (Xe, XQ) {
      return Xe > XQ;
    },
    oHKcb: function (Xe, XQ) {
      return Xe | XQ;
    },
    Tcrvo: function (Xe, XQ) {
      return Xe - XQ;
    },
    aIBPU: function (Xe) {
      return Xe();
    },
    SybLX: function (Xe) {
      return Xe();
    },
    xnBvI: function (Xe) {
      return Xe();
    },
    CDTLy: function (Xe) {
      return Xe();
    },
    CraBZ: function (Xe, XQ) {
      return Xe !== XQ;
    },
    vzzmD: "DgNiS",
    VMDMo: "vVovu",
    jHpbM: function (Xe, XQ) {
      return Xe - XQ;
    },
    sKbPm: function (Xe) {
      return Xe();
    },
    rbXCh: function (Xe, XQ) {
      return Xe > XQ;
    },
    VYVDy: function (Xe, XQ) {
      return Xe === XQ;
    },
    mLaMM: "FfcaZ",
    dEcja: "fiUba",
    JVDrw: "seek",
    GjPoE: function (Xe, XQ) {
      return Xe - XQ;
    },
    Cxlzg: function (Xe, XQ) {
      return Xe - XQ;
    },
    pXsCg: function (Xe, XQ) {
      return Xe >= XQ;
    },
    BjDHj: function (Xe, XQ) {
      return Xe <= XQ;
    },
    Ucmql: "task",
    HYRqp: function (Xe, XQ) {
      return Xe === XQ;
    },
    rqgtZ: "DetoI",
    kAmBM: function (Xe, XQ) {
      return Xe !== XQ;
    },
    pQZnf: "draw",
    DZLBR: function (Xe, XQ) {
      return Xe > XQ;
    },
    wUvqt: function (Xe, XQ) {
      return Xe < XQ;
    },
    CpMcU: function (Xe) {
      return Xe();
    },
    DwXOM: function (Xe, XQ) {
      return Xe / XQ;
    },
    rvxih: function (Xe, XQ) {
      return Xe + XQ;
    },
    Ixhqt: function (Xe, XQ) {
      return Xe * XQ;
    },
    VwQwB: function (Xe, XQ) {
      return Xe <= XQ;
    },
    ozVcu: function (Xe, XQ) {
      return Xe + XQ;
    },
    wBUyt: "wait",
    hqXkz: "shrink",
    KDZMM: "xHnFB",
    NBknp: "qPsRW",
    LcRCu: function (Xe, XQ) {
      return Xe === XQ;
    },
    xPSKx: "kHWhG",
    QTFaZ: function (Xe, XQ) {
      return Xe !== XQ;
    },
    eUVWC: "ruQOD",
    YUdvk: function (Xe, XQ, Xi) {
      return Xe(XQ, Xi);
    },
    CBJnJ: "idle",
    Tqdsd: function (Xe, XQ) {
      return Xe !== XQ;
    },
    iXckZ: "lFNzk",
    gvJCW: "Sgpbi",
    zntdH: function (Xe, XQ) {
      return Xe <= XQ;
    },
    mTglQ: function (Xe, XQ, Xi) {
      return Xe(XQ, Xi);
    },
    bOzZX: function (Xe, XQ) {
      return Xe > XQ;
    },
    TaYfu: function (Xe, XQ) {
      return Xe / XQ;
    },
    FuafI: function (Xe, XQ) {
      return Xe >= XQ;
    },
    VMDCZ: function (Xe, XQ) {
      return Xe % XQ;
    },
    oilZE: function (Xe, XQ) {
      return Xe + XQ;
    },
    XtFTe: function (Xe, XQ) {
      return Xe + XQ;
    },
    rzWEA: function (Xe, XQ) {
      return Xe <= XQ;
    },
    rHdAp: function (Xe, XQ) {
      return Xe - XQ;
    },
    dYkwj: function (Xe, XQ) {
      return Xe - XQ;
    },
    jTdWL: function (Xe, XQ) {
      return Xe < XQ;
    },
    Ldzca: function (Xe) {
      return Xe();
    },
    MHnec: function (Xe, XQ, Xi) {
      return Xe(XQ, Xi);
    },
    CJyuV: function (Xe, XQ) {
      return Xe - XQ;
    },
    rVKvs: "frontier",
    yiFVs: function (Xe, XQ, Xi) {
      return Xe(XQ, Xi);
    },
    kikNn: function (Xe, XQ) {
      return Xe(XQ);
    },
    mIoeq: "GIF encoder error",
    kInfL: function (Xe, XQ, Xi) {
      return Xe(XQ, Xi);
    },
    yMWDu: "boot",
    OpEGN: function (Xe, XQ) {
      return Xe === XQ;
    },
    Znevz: "ZRfOf",
    tvthh: function (Xe, XQ) {
      return Xe !== XQ;
    },
    WPyeo: "ckuoQ",
    gSdBY: "gZXCy",
    FTaYK: function (Xe, XQ) {
      return Xe > XQ;
    },
    KaRKM: "error",
    MfBrV: function (Xe, XQ) {
      return Xe(XQ);
    },
    ZXCrV: function (Xe, XQ) {
      return Xe + XQ;
    },
    PZiYX: "a video worker stopped: ",
    WzVxy: function (Xe, XQ) {
      return Xe === XQ;
    },
    cNGbQ: "ready",
    KbyJs: "ZXTvC",
    mjFzj: "BtXSa",
    tfhIG: function (Xe, XQ) {
      return Xe - XQ;
    },
    kBlvp: function (Xe, XQ) {
      return Xe === XQ;
    },
    olcbh: "render",
    cfpjk: "the workers have no video encoder",
    IiAMe: function (Xe, XQ) {
      return Xe === XQ;
    },
    kqmIa: "the workers have no OffscreenCanvas",
    kjOnj: function (Xe, XQ) {
      return Xe === XQ;
    },
    utqkl: function (Xe, XQ) {
      return Xe - XQ;
    },
    hBAwv: "job",
    ahDGw: "nofight",
    pMfLF: "XljnH",
    LqYug: "GwQgO",
    zpJpU: function (Xe, XQ) {
      return Xe(XQ);
    },
    DhKjz: "the workers do not have this fight",
    BJncw: "nocodec",
    Rhosn: "NTaNQ",
    MgNAt: "the workers cannot encode ",
    rOJeR: "video",
    VKAmH: function (Xe, XQ) {
      return Xe === XQ;
    },
    DhRqN: "jobok",
    dpIEL: "fPCah",
    rBrYC: function (Xe, XQ) {
      return Xe === XQ;
    },
    qBRpu: function (Xe, XQ) {
      return Xe === XQ;
    },
    PEsYO: "qKoCB",
    dPEfD: "jzicD",
    YOBjG: function (Xe) {
      return Xe();
    },
    TtVBq: function (Xe, XQ, Xi, XI, Xt) {
      return Xe(XQ, Xi, XI, Xt);
    },
    xNmhH: function (Xe, XQ) {
      return Xe < XQ;
    },
    YEiPr: function (Xe, XQ) {
      return Xe(XQ);
    },
    LxtHI: function (Xe, XQ) {
      return Xe === XQ;
    },
    PaEUu: "scout",
    kAPsT: function (Xe) {
      return Xe();
    },
    lAqqR: function (Xe, XQ) {
      return Xe | XQ;
    },
    lZSjl: function (Xe, XQ) {
      return Xe > XQ;
    },
    UPAPT: function (Xe, XQ) {
      return Xe / XQ;
    },
    uMLlU: function (Xe, XQ) {
      return Xe - XQ;
    },
    xdNIe: function (Xe) {
      return Xe();
    },
    spYWh: function (Xe, XQ) {
      return Xe === XQ;
    },
    DbfvE: "prog",
    Iylvm: "pLaqw",
    kzkyD: "wGVPf",
    RvqNe: function (Xe, XQ) {
      return Xe === XQ;
    },
    KTeqg: "probe",
    TgvxU: function (Xe, XQ) {
      return Xe !== XQ;
    },
    skoMH: "jzZWC",
    aEvQm: "OXhAT",
    sHCwo: function (Xe, XQ) {
      return Xe === XQ;
    },
    XCoUz: "gif",
    PDTcx: "dINSj",
    doAOU: "NGdjF",
    MyvQg: function (Xe, XQ) {
      return Xe === XQ;
    },
    dzArL: "hole",
    vMuFh: "GtVYA",
    VuTXH: function (Xe, XQ) {
      return Xe < XQ;
    },
    WIjME: "epiIM",
    PiViQ: function (Xe, XQ) {
      return Xe <= XQ;
    },
    KzyLm: function (Xe, XQ) {
      return Xe + XQ;
    },
    UKWqC: function (Xe, XQ, Xi) {
      return Xe(XQ, Xi);
    },
    IuRwB: function (Xe, XQ) {
      return Xe === XQ;
    },
    elSeD: "shrunk",
    gMjRm: "cCVJB",
    dwHNB: "QxALd",
    YjTYw: function (Xe, XQ) {
      return Xe === XQ;
    },
    mYNFT: function (Xe, XQ, Xi) {
      return Xe(XQ, Xi);
    },
    CcVpE: function (Xe, XQ) {
      return Xe + XQ;
    },
    uBFqz: function (Xe, XQ) {
      return Xe === XQ;
    },
    dzxan: "chunks",
    MWrWj: "bajJz",
    QzILn: "Lpqpx",
    zrBwH: function (Xe, XQ) {
      return Xe === XQ;
    },
    UqGml: "LWHyl",
    KwRuG: function (Xe, XQ) {
      return Xe >= XQ;
    },
    xQuxd: function (Xe, XQ) {
      return Xe < XQ;
    },
    MDJMp: function (Xe, XQ) {
      return Xe / XQ;
    },
    cloOq: function (Xe, XQ) {
      return Xe > XQ;
    },
    VXraA: "NyPpR",
    DWzbT: "OjmvW",
    UIANL: function (Xe, XQ) {
      return Xe + XQ;
    },
    CskFC: "The video passed ",
    rHQwk: function (Xe, XQ) {
      return Xe / XQ;
    },
    vsbeH: " MB - pick a shorter range",
    moOJF: function (Xe, XQ) {
      return Xe > XQ;
    },
    cWwnQ: function (Xe, XQ) {
      return Xe | XQ;
    },
    nvXPp: function (Xe, XQ) {
      return Xe / XQ;
    },
    QrdJe: function (Xe, XQ) {
      return Xe / XQ;
    },
    hPesh: function (Xe, XQ) {
      return Xe + XQ;
    },
    zeYug: function (Xe, XQ, Xi) {
      return Xe(XQ, Xi);
    },
    rRerB: function (Xe, XQ) {
      return Xe === XQ;
    },
    fHLvz: function (Xe) {
      return Xe();
    },
    mdsoQ: function (Xe, XQ, Xi) {
      return Xe(XQ, Xi);
    },
    VasUR: function (Xe, XQ) {
      return Xe(XQ);
    },
    uBBmr: "export: ",
    sWtbb: function (Xe, XQ) {
      return Xe / XQ;
    },
    BobaV: function (Xe, XQ) {
      return Xe * XQ;
    },
    AYKnO: function (Xe, XQ) {
      return Xe / XQ;
    },
    zEZTc: function (Xe, XQ) {
      return Xe * XQ;
    },
    ExgUW: function (Xe, XQ) {
      return Xe !== XQ;
    },
    fMfaP: "CGARZ",
    PIgDz: "jidfS",
    PUySe: "pSzSG",
    ltDkU: "lgyuX",
    PFwKY: "smGbP",
    INqWv: "cancel",
    ARVmq: "WKBKx",
    SPqbX: "Glcby",
    JOoLo: "dpyVM",
    eKPFf: function (Xe, XQ, Xi) {
      return Xe(XQ, Xi);
    },
    wZkSP: "this browser cannot encode Opus",
    JYLRM: "PKAaL",
    YrRyx: "TnhGS",
    CIZmz: function (Xe, XQ) {
      return Xe !== XQ;
    },
    FeCCG: "JOIBD",
    fhkOe: "Vtvev",
    FugNy: function (Xe, XQ) {
      return Xe(XQ);
    },
    WhNMA: function (Xe, XQ) {
      return Xe == XQ;
    },
    ymHxl: "string",
    fhegf: "ZluGC",
    NuhqE: "YRJKu",
    ScJFc: "KHuDY",
    xyjJQ: "zbNEv",
    TJNZU: function (Xe) {
      return Xe();
    },
    sukJd: "uxfFD",
    TBxwj: "hnvVb",
    obCiQ: function (Xe, XQ) {
      return Xe + XQ;
    },
    sNZFO: "FlZpc",
    JgwiK: "veoBn",
    NSrGc: function (Xe, XQ, Xi) {
      return Xe(XQ, Xi);
    },
    XAAbV: function (Xe, XQ) {
      return Xe + XQ;
    },
    jxvgf: "a video worker failed: ",
    QUbDH: function (Xe, XQ) {
      return Xe + XQ;
    },
    MRfwS: "a video worker could not start: ",
    dHhEc: function (Xe, XQ) {
      return Xe | XQ;
    },
    JfFIe: function (Xe, XQ) {
      return Xe <= XQ;
    },
    NNEwg: function (Xe, XQ) {
      return Xe + XQ;
    },
    yaBSp: "xHRcD",
    uzqNu: "RQFcx",
    GujBz: "sprites",
    STPCJ: "WFEKe",
    wZuTZ: "uROiO",
    zKefV: "bwhLd",
    QJsEn: "ICYyW",
    wBpMA: "sprites: ",
    OnEvj: "TDzpp",
    LEqHG: "qSfPX",
    Szzgu: function (Xe, XQ) {
      return Xe(XQ);
    },
    nxrhs: "cancelled",
    WdDQR: function (Xe, XQ) {
      return Xe / XQ;
    },
    wzPLO: function (Xe, XQ) {
      return Xe > XQ;
    },
    Lihwi: function (Xe, XQ) {
      return Xe > XQ;
    },
    NBZgI: function (Xe, XQ) {
      return Xe | XQ;
    },
    XbSIf: function (Xe, XQ) {
      return Xe * XQ;
    },
    TnMoW: function (Xe, XQ) {
      return Xe + XQ;
    },
    xVKIH: function (Xe) {
      return Xe();
    },
    jkzEI: function (Xe, XQ) {
      return Xe + XQ;
    },
    MHaIn: function (Xe, XQ) {
      return Xe + XQ;
    },
    mLphn: "the game code",
    JzJmP: function (Xe, XQ) {
      return Xe !== XQ;
    },
    NRdmY: "OsqUV",
    pVnYt: "JWZyQ",
    ypLfA: function (Xe, XQ) {
      return Xe || XQ;
    },
    rXcVR: function (Xe) {
      return Xe();
    },
    pzNQo: function (Xe, XQ) {
      return Xe === XQ;
    },
    TNymD: function (Xe, XQ) {
      return Xe - XQ;
    },
    GEPak: function (Xe, XQ, Xi, XI, Xt) {
      return Xe(XQ, Xi, XI, Xt);
    },
    RbStv: function (Xe, XQ) {
      return Xe !== XQ;
    },
    uCywV: "hKkwe",
    nsHox: "vknqw",
    UVIkX: "rendering",
    GquhA: function (Xe, XQ) {
      return Xe - XQ;
    },
    REKHI: "Escape",
    obLmL: function (Xe, XQ) {
      return Xe(XQ);
    },
    VIzCF: function (Xe, XQ) {
      return Xe(XQ);
    },
    XFSfs: "NzuGZ",
    ouKvu: "uqINK",
    tISgW: "object",
    MlhDD: "about ",
    ZPMaD: " MB",
    hQJWq: function (Xe, XQ) {
      return Xe === XQ;
    },
    ZQUYv: "up to ",
    vavhM: "oAIwL",
    jvWFd: "off",
    GyHgK: function (Xe) {
      return Xe();
    },
    JYnaE: "uKTef",
    Tvtjm: "JnUFd",
    svJSk: "audio",
    pEonB: function (Xe, XQ) {
      return Xe - XQ;
    },
    HDoOk: "no audio",
    kXNDt: "qHFUH",
    zSZFA: "kPSFw",
    YozoH: function (Xe, XQ) {
      return Xe(XQ);
    },
    wlOZH: "XhtBi",
    IMJoa: "encode",
    iyooy: "xpDCQ",
    xGIWQ: "FwCxT",
    ZbpFH: "sALek",
    ZmROL: function (Xe, XQ) {
      return Xe + XQ;
    },
    AEWtG: function (Xe, XQ) {
      return Xe + XQ;
    },
    QquKg: "frame ",
    fOBMY: function (Xe, XQ) {
      return Xe + XQ;
    },
    WCLCa: " is missing",
    BBoTQ: "A_OPUS",
    CmRdx: "video/webm",
    yXOxo: "workers",
    NdaLM: "timeline",
    CMsIH: "That replay is gone",
    kgHMf: "Not a replay",
    nlASI: "whole",
    ATFjR: "rv:export",
    ZCTnr: "Video export runs from the menu - leave the fight first",
    QunQX: "warn",
    mquiJ: "AwYfP",
    WlGhe: "nyuhq",
    ZPNpY: function (Xe, XQ) {
      return Xe === XQ;
    },
    pcaTg: "OZLMP",
    qVscS: "dEoiL",
    EltFc: function (Xe) {
      return Xe();
    },
    vUbZk: function (Xe, XQ, Xi) {
      return Xe(XQ, Xi);
    },
    GNEBa: function (Xe, XQ) {
      return Xe < XQ;
    },
    hvBTd: function (Xe, XQ, Xi) {
      return Xe(XQ, Xi);
    },
    sRXmf: "QYxyT",
    wjugd: "workers are not available",
    WqnxU: function (Xe) {
      return Xe();
    },
    WdxSH: function (Xe, XQ, Xi) {
      return Xe(XQ, Xi);
    },
    dVYqX: function (Xe, XQ, Xi) {
      return Xe(XQ, Xi);
    },
    WAWqs: function (Xe, XQ) {
      return Xe === XQ;
    },
    uqxPK: function (Xe, XQ) {
      return Xe * XQ;
    },
    Bqlxx: function (Xe, XQ) {
      return Xe * XQ;
    },
    XAvBY: function (Xe, XQ) {
      return Xe + XQ;
    },
    GPppL: function (Xe, XQ) {
      return Xe / XQ;
    },
    ITEsw: function (Xe, XQ) {
      return Xe < XQ;
    },
    wdqsP: function (Xe, XQ) {
      return Xe - XQ;
    },
    VOCts: function (Xe, XQ) {
      return Xe / XQ;
    },
    SSiTn: function (Xe, XQ, Xi, XI) {
      return Xe(XQ, Xi, XI);
    },
    QcsIi: "quality",
    uUTYG: "no VP9/VP8 encoder",
    TUPlW: function (Xe, XQ) {
      return Xe(XQ);
    },
    QNXsw: function (Xe, XQ) {
      return Xe == XQ;
    },
    kxWoG: "number",
    fnSap: function (Xe, XQ) {
      return Xe >= XQ;
    },
    tGABt: "./chapterpack-D45U4UKK.js",
    EwGOA: function (Xe, XQ) {
      return Xe === XQ;
    },
    tipgV: "bNZqB",
    iJAkT: function (Xe, XQ) {
      return Xe == XQ;
    },
    luAZN: "jWYOi",
    poSeV: function (Xe, XQ) {
      return Xe(XQ);
    },
    DpVOo: function (Xe, XQ) {
      return Xe !== XQ;
    },
    GrjmM: "waiting"
  };
  let {
    from: bE,
    to: X0
  } = bd;
  let X1 = !!bf.gif;
  let X2 = X1 ? 2 : 1;
  let X3 = X1 ? 1 : bf.scale === 2 ? 2 : 1;
  let X4 = 640 * X3;
  let X5 = 480 * X3;
  let X6 = Math.floor((X0 - bE) / X2) + 1;
  let X7 = typeof navigator < "u" && navigator.hardwareConcurrency || 4;
  let X8 = Math.max(1, Math.min(bf.workers ? Math.min(MAX_WORKERS, bf.workers) : DEFAULT_RENDERERS, X7 - 1));
  X8 = Math.max(1, Math.min(X8, Math.ceil((X0 - bE + 1) / 90)));
  if (!bf.workers) {
    X8 = workersFor(bE, X0, X8);
  }
  let Xl = null;
  if (!X1 && (Xl = await pickCodec(X4, X5, bf.latency || "quality", bf.codecs || null), !Xl)) {
    return {
      fallback: "no VP9/VP8 encoder"
    };
  }
  let Xb = fightById(l.fight);
  if (Xb && typeof Xb.chapter == "number" && Xb.chapter >= 4) {
    try {
      await (await bv("./chapterpack-D45U4UKK.js", import.meta.url)).loadChapterPack(Xb.chapter);
    } catch {}
  }
  let XX = {};
  try {
    {
      XX = JSON.parse(JSON.stringify({
        ...(host().cfg || {}),
        ...lP(l.setup && typeof l.setup == "object" ? l.setup : null)
      }));
    }
  } catch {
    {
      XX = {
        ...lP(l.setup)
      };
    }
  }
  let XR = {
    d: {
      fight: l.fight,
      seed: l.seed,
      godmode0: !!l.godmode0,
      notes: Array.isArray(l.notes) ? l.notes : [],
      checks: Array.isArray(l.checks) ? l.checks : []
    },
    bits: b,
    cfg: XX,
    sandbox: JSON.parse(JSON.stringify(l0)),
    from: bE,
    to: X0,
    scale: X3,
    stride: X2,
    gif: X1,
    codec: Xl ? Xl.cfg : null,
    probe: bf.probe || null
  };
  let XH = !X1 && bf.audio !== false;
  let Xg = now();
  let XV = {
    workers: [],
    prof: [],
    marks: {},
    frames: 0,
    total: X6,
    bytes: 0,
    audio: XH ? "waiting" : "off",
    audioP: 0,
    scout: 0,
    holes: 0,
    steals: 0,
    K: X8,
    t0: Xg,
    from: bE,
    to: X0,
    codec: Xl ? Xl.id : "gif",
    gif: X1
  };
  bK.stats = XV;
  return new Promise(Xe => {
    const XQ = {
      UAgWn: function (RF, RG) {
        return RF === RG;
      },
      eHDFh: function (RF) {
        return RF();
      },
      XYAeu: function (RF, RG, Ru) {
        return RF(RG, Ru);
      },
      bucPz: function (RF, RG) {
        return RF(RG);
      },
      YmpxZ: function (RF, RG) {
        return RF + RG;
      },
      urHmr: "export: ",
      HQHmr: function (RF, RG) {
        return RF - RG;
      },
      bZBUg: function (RF, RG) {
        return RF > RG;
      },
      HqFfy: function (RF, RG) {
        return RF / RG;
      },
      ruoNc: function (RF, RG) {
        return RF * RG;
      },
      LJxdy: function (RF, RG) {
        return RF / RG;
      },
      jVhce: function (RF, RG) {
        return RF * RG;
      },
      CcybM: function (RF, RG) {
        return RF !== RG;
      },
      VbaVh: "CGARZ",
      yXryI: "jidfS",
      VoMuL: function (RF, RG) {
        return RF !== RG;
      },
      Xnnrf: "pSzSG",
      qAUHW: "lgyuX",
      DqqHd: function (RF, RG) {
        return RF(RG);
      },
      fUbiN: "smGbP",
      tIzZw: "cancel",
      cLEJu: "WKBKx",
      lorUR: function (RF, RG) {
        return RF(RG);
      },
      ahQBq: "Glcby",
      grlIU: "dpyVM",
      qjolv: function (RF) {
        return RF();
      },
      ibBRW: "boot",
      mDcwr: function (RF, RG, Ru) {
        return RF(RG, Ru);
      },
      ApmcP: "this browser cannot encode Opus",
      TUiUp: "PKAaL",
      mpZbc: function (RF, RG) {
        return RF === RG;
      },
      FQwZB: "TnhGS",
      UhilI: function (RF) {
        return RF();
      },
      yFGNt: function (RF, RG) {
        return RF !== RG;
      },
      gfvIp: "JOIBD",
      MIAcX: "Vtvev",
      kOBmx: function (RF, RG) {
        return RF - RG;
      },
      FWkoN: function (RF) {
        return RF();
      },
      dLslm: function (RF, RG) {
        return RF !== RG;
      },
      CHevN: function (RF, RG) {
        return RF(RG);
      },
      ROAoe: function (RF, RG) {
        return RF == RG;
      },
      sbnzA: "string",
      bCJsS: function (RF, RG) {
        return RF < RG;
      },
      XtbSS: "ZluGC",
      tCQtY: "YRJKu",
      atTui: "KHuDY",
      rAPEu: "zbNEv",
      dZCoM: function (RF) {
        return RF();
      },
      GhARs: "uxfFD",
      JISss: "hnvVb",
      VhIVW: function (RF, RG) {
        return RF + RG;
      },
      xcEHw: function (RF, RG) {
        return RF === RG;
      },
      LbOFY: "FlZpc",
      yKNsR: "veoBn",
      fohFP: function (RF, RG, Ru) {
        return RF(RG, Ru);
      },
      iuAVA: function (RF, RG) {
        return RF + RG;
      },
      nerzg: "a video worker failed: ",
      kppra: function (RF, RG) {
        return RF(RG);
      },
      kfOQE: function (RF, RG) {
        return RF + RG;
      },
      sNLYR: "a video worker could not start: ",
      xzQUI: function (RF, RG) {
        return RF | RG;
      },
      OOnYp: function (RF, RG) {
        return RF <= RG;
      },
      YGYcr: function (RF, RG) {
        return RF + RG;
      },
      YhRmh: "xHRcD",
      jthtw: "RQFcx",
      TVPRu: "sprites",
      nAjoi: "WFEKe",
      kjFEq: "uROiO",
      EOpMF: function (RF, RG) {
        return bq.MlnaO(RF, RG);
      },
      kgRFe: "bwhLd",
      GsVqn: "ICYyW",
      tCmnP: function (RF, RG) {
        return RF(RG);
      },
      gVcXJ: function (RF, RG) {
        return RF + RG;
      },
      nsswV: "sprites: ",
      dlVKU: "TDzpp",
      iyzSF: "qSfPX",
      SCHsE: function (RF, RG) {
        return RF(RG);
      },
      Pnfvi: "cancelled",
      TQYwK: function (RF, RG) {
        return RF / RG;
      },
      CaMfF: function (RF, RG) {
        return RF >= RG;
      },
      vsJLK: function (RF, RG) {
        return RF < RG;
      },
      FuddR: function (RF, RG) {
        return RF / RG;
      },
      fjbxL: function (RF, RG) {
        return RF > RG;
      },
      nvJJH: function (RF, RG) {
        return RF + RG;
      },
      uOtbf: "The video passed ",
      AjpZl: " MB - pick a shorter range",
      SLmBv: function (RF, RG) {
        return RF > RG;
      },
      kQQTL: function (RF, RG) {
        return RF | RG;
      },
      cqYSu: function (RF, RG) {
        return RF + RG;
      },
      rMZaA: function (RF, RG) {
        return RF * RG;
      },
      exqTL: function (RF, RG) {
        return RF + RG;
      },
      JjRHS: function (RF, RG) {
        return RF + RG;
      },
      ScxgC: "idle",
      VuDnL: function (RF) {
        return RF();
      },
      NUtvK: function (RF, RG) {
        return RF + RG;
      },
      dzcjK: function (RF, RG) {
        return RF + RG;
      },
      jRIAb: function (RF, RG) {
        return RF + RG;
      },
      oIKGe: function (RF, RG) {
        return RF + RG;
      },
      VSDBN: function (RF, RG) {
        return RF(RG);
      },
      URbdG: function (RF, RG) {
        return RF + RG;
      },
      aSVuf: function (RF, RG) {
        return RF(RG);
      },
      ZboOE: "the game code",
      zvaVO: function (RF, RG) {
        return RF !== RG;
      },
      orJaR: "OsqUV",
      uTQeV: "JWZyQ",
      JvKCZ: function (RF, RG) {
        return bq.ypLfA(RF, RG);
      },
      cxdUr: function (RF, RG) {
        return RF < RG;
      },
      FYfue: function (RF) {
        return RF();
      },
      TRfgJ: function (RF, RG) {
        return RF === RG;
      },
      zeptC: function (RF, RG) {
        return RF - RG;
      },
      TApAL: function (RF, RG, Ru, Rs, RC) {
        return RF(RG, Ru, Rs, RC);
      },
      oPZBo: function (RF, RG) {
        return RF < RG;
      },
      MAGZf: function (RF, RG) {
        return RF(RG);
      },
      PNiMZ: "render",
      bVpID: function (RF, RG) {
        return RF !== RG;
      },
      OlJEr: "hKkwe",
      DYHON: "vknqw",
      hVdny: "rendering",
      NCFVZ: function (RF, RG) {
        return RF - RG;
      },
      rIOks: function (RF, RG) {
        return RF(RG);
      },
      hSXYp: "Escape",
      qcVoU: function (RF, RG) {
        return RF(RG);
      },
      SVTYP: function (RF, RG) {
        return RF(RG);
      },
      Cvjey: function (RF, RG) {
        return RF(RG);
      },
      Lgdtn: "snd_menumove",
      xacww: function (RF, RG) {
        return RF === RG;
      },
      jZgIu: "NzuGZ",
      bTYHD: "uqINK",
      BtQnL: "object",
      ScAMk: function (RF, RG, Ru, Rs) {
        return RF(RG, Ru, Rs);
      },
      ZWdmJ: function (RF, RG) {
        return RF + RG;
      },
      NgVOw: "about ",
      bWomk: function (RF, RG) {
        return RF * RG;
      },
      XmHEt: " MB",
      HHRUk: function (RF, RG) {
        return RF / RG;
      },
      VScLq: function (RF, RG) {
        return RF * RG;
      },
      SABMZ: function (RF, RG) {
        return RF === RG;
      },
      wxfZE: "up to ",
      SLzUW: function (RF, RG) {
        return bq.MlnaO(RF, RG);
      },
      CZvpq: function (RF) {
        return RF();
      },
      YePhd: "oAIwL",
      VObrl: function (RF, RG) {
        return bq.ypLfA(RF, RG);
      },
      LBGrk: function (RF) {
        return RF();
      },
      OjjCt: "off",
      tGFmK: function (RF) {
        return RF();
      },
      cxQwT: "uKTef",
      FhfyI: "JnUFd",
      dxzsK: "audio",
      SdCtL: function (RF, RG) {
        return RF - RG;
      },
      yZmMt: "no audio",
      wsHIP: "qHFUH",
      JRZmX: "kPSFw",
      iUNem: function (RF, RG) {
        return RF(RG);
      },
      gaLLB: function (RF, RG) {
        return RF === RG;
      },
      WilCU: "XhtBi",
      xYsYP: "encode",
      IOOiH: "xpDCQ",
      oCGZY: "FwCxT",
      VyUSG: function (RF, RG) {
        return RF(RG);
      },
      bRVnD: "GIF encoder error",
      nxiXn: function (RF, RG) {
        return RF === RG;
      },
      jJfnh: "sALek",
      cyQAq: function (RF, RG) {
        return RF + RG;
      },
      uFlPt: function (RF, RG) {
        return RF + RG;
      },
      RBRej: "frame ",
      OFmfd: function (RF, RG) {
        return RF + RG;
      },
      JnqIY: " is missing",
      dJXWk: "A_OPUS",
      mYaTS: "video/webm",
      liQBU: "gif",
      cSibY: "workers",
      LKsky: function (RF, RG) {
        return RF - RG;
      },
      LLgNc: function (RF) {
        return RF();
      },
      OUFvV: function (RF, RG) {
        return RF - RG;
      },
      jqWXp: function (RF) {
        return RF();
      },
      JOQLW: "timeline",
      GKbeh: "That replay is gone",
      holSO: "error",
      kpwOg: function (RF, RG) {
        return RF(RG);
      },
      cQABe: "Not a replay",
      pFZXF: function (RF) {
        return RF();
      },
      ZhLwE: "whole",
      hSFSd: function (RF, RG) {
        return RF(RG);
      },
      iGmPK: "rv:export",
      MqgrR: "Video export runs from the menu - leave the fight first",
      ismGe: "warn",
      jJQci: function (RF, RG) {
        return RF(RG);
      },
      WSjyu: function (RF, RG) {
        return RF === RG;
      },
      GIPlq: "AwYfP",
      ubHsx: "nyuhq",
      IYpvG: function (RF, RG) {
        return RF === RG;
      },
      sCGNs: "OZLMP",
      QwSKB: "dEoiL",
      ToVef: function (RF, RG) {
        return RF(RG);
      }
    };
    let Xi = false;
    let XI = [];
    let Xt = null;
    let Xn = RF => {
      {
        if (!Xi) {
          {
            Xi = true;
            if (Xt) {
              clearInterval(Xt);
            }
            for (let Rc of XI) {
              try {
                {
                  const RJ = {
                    cmd: "cancel"
                  };
                  Rc.w.postMessage(RJ);
                }
              } catch {}
              try {
                {
                  Rc.w.terminate();
                }
              } catch {}
            }
            Xe(RF);
          }
        }
      }
    };
    let Ut = RF => Xn({
      ok: false,
      why: RF
    });
    let Ae = X1 ? null : new Array(X6);
    let At = X1 ? new Array(X6) : null;
    let An = [];
    let Ao = [];
    let R5 = 1;
    let R6 = 0;
    let R7 = 0;
    let R8 = false;
    let R9 = false;
    let Rl = 0;
    let Rb = 0;
    let RX = 0;
    let RU = 0;
    let RA = 0;
    let RR = [];
    let RH = [];
    let Rg = Promise.resolve();
    let RV = new Set();
    let Re = 0;
    let RQ = takeWarm();
    let Ri = (RF, RG) => {
      {
        let Rc = RQ && RQ[RF].shift();
        let RJ = Rc ? Rc.w : spawnWorker();
        if (!RJ) {
          return null;
        }
        const Rn = {
          w: RJ,
          role: RF,
          i: RG,
          ready: false,
          busy: false,
          task: null,
          at: -1
        };
        Rn.phase = "boot";
        Rn.f = 0;
        Rn.shrinking = null;
        Rn.pre = Rc;
        Rn.retry = 0;
        let Rp = Rn;
        RY(Rp, RJ);
        XI.push(Rp);
        return Rp;
      }
    };
    let RI = RF => (RF && RF.message || RF && RF.type || "error") + (RF && RF.filename ? " (" + String(RF.filename).split("/").pop() + ":" + RF.lineno + ")" : "");
    function RY(RF, RG) {
      RF.w = RG;
      RG.onmessage = RJ => {
        const Rp = {
          uMtbe: "this browser cannot encode Opus"
        };
        const Rd = Rp;
        if (!Xi && RF.w === RG) {
          {
            let RK = now();
            try {
              RO(RF, RJ.data || {});
            } catch (RE) {
              {
                Ut("export: " + (RE && RE.message || RE));
              }
            }
            let Rq = now() - RK;
            if (Rq > (XV.maxMsg ? XV.maxMsg.ms : 0)) {
              XV.maxMsg = {
                t: (RJ.data || {}).t,
                ms: Math.round(Rq)
              };
            }
          }
        }
      };
      RG.onerror = RJ => {
        if (!Xi && !(RF.w !== RG)) {
          {
            if (!RF.ready && RF.retry < 2) {
              {
                let Rd = spawnWorker();
                if (Rd) {
                  {
                    RF.retry++;
                    XV.bootRetries = (XV.bootRetries || 0) + 1;
                    (XV.bootErrors ||= []).push(RI(RJ));
                    try {
                      {
                        RG.terminate();
                      }
                    } catch {}
                    RF.pre = null;
                    RY(RF, Rd);
                    Rd.postMessage({
                      cmd: "boot",
                      role: RF.role,
                      assets: assetsUrl()
                    });
                    return;
                  }
                }
              }
            }
            if (RF.ready) {
              Ut("a video worker failed: " + RI(RJ));
            } else {
              Xn({
                fallback: "a video worker could not start: " + RI(RJ)
              });
            }
          }
        }
      };
    }
    RY;
    let RN = Ri("scout", 0);
    let RZ = [];
    for (let RF = 0; RF < X8; RF++) {
      let RG = Ri("render", RF);
      if (RG) {
        RZ.push(RG);
      }
    }
    if (RQ) {
      for (let Ru of [...RQ.scout, ...RQ.render]) {
        try {
          Ru.w.terminate();
        } catch {}
      }
    }
    if (!RN || !RZ.length) {
      {
        Xn({
          fallback: "workers are not available"
        });
        return;
      }
    }
    XV.workers = RZ.map(() => ({
      phase: "boot",
      a: 0,
      b: 0,
      f: 0,
      seek: 0
    }));
    for (let RC of XI) {
      if (!RC.pre) {
        RC.w.postMessage({
          cmd: "boot",
          role: RC.role,
          assets: assetsUrl()
        });
      }
    }
    for (let Rc of XI) {
      if (Rc.pre && Rc.pre.ready) {
        RO(Rc, {
          t: "ready",
          caps: Rc.pre.caps
        });
      }
    }
    async function RP(RJ) {
      const Rp = {
        kEWaZ: function (Rd, Rf) {
          return Rd(Rf);
        },
        AkCTb: "./videoworker-TCTF57HV.js",
        YcAah: "module",
        RWLVa: function (Rd, Rf) {
          return Rd !== Rf;
        },
        Ptmfb: "qaUjp",
        yqJSJ: function (Rd, Rf) {
          return bq.MlnaO(Rd, Rf);
        },
        QPjbt: function (Rd, Rf) {
          return Rd === Rf;
        },
        vxCNA: "Lvajg",
        VvBLD: "ymxLs",
        lEnUR: function (Rd, Rf) {
          return Rd === Rf;
        },
        dmeqp: function (Rd, Rf) {
          return Rd(Rf);
        },
        IcmiL: "snd_menumove"
      };
      {
        let Rd = RZ.map(() => []);
        let Rf = RZ.map(() => []);
        let RK = [];
        let Rq = now();
        let RE = async () => {
          const H2 = {
            MUNjx: function (H6, H7) {
              return H6(H7);
            },
            AvocM: "./videoworker-TCTF57HV.js",
            NdRMW: "module",
            xPVWM: function (H6, H7) {
              return H6 !== H7;
            },
            dqehc: "qaUjp",
            mnCVC: function (H6, H7) {
              return Rp.yqJSJ(H6, H7);
            }
          };
          {
            let H7 = await Promise.all(RK);
            RK = [];
            for (let [H8, H9, Hl, Hb] of H7) {
              RZ.forEach((HX, HU) => {
                const HR = {
                  rrcYv: "./videoworker-TCTF57HV.js",
                  CoJuk: "module"
                };
                const Hg = HR;
                {
                  let He = Hl ? Hl[HU] : Hb;
                  Rd[HU].push([H8, H9, He]);
                  if (H2.mnCVC(Hl, He)) {
                    Rf[HU].push(He);
                  }
                }
              });
            }
          }
        };
        for (let H2 of RJ) {
          if (Xi) {
            break;
          }
          if (RV.has(H2)) {
            continue;
          }
          RV.add(H2);
          let H3 = H2.indexOf("");
          let H4 = H2.slice(0, H3);
          let H5 = +H2.slice(H3 + 1);
          let H6 = null;
          try {
            {
              let H7 = spriteEntry(H4);
              H6 = H7 && H7.img ? H7.img[H5] : null;
            }
          } catch {
            H6 = null;
          }
          if (H6 && H6.width > 0 && H6.height > 0) {
            RK.push(Promise.all(RZ.map(() => createImageBitmap(H6))).then(HX => [H4, H5, HX, null], () => [H4, H5, null, null]));
          } else {
            RK.push(Promise.resolve([H4, H5, null, H6 ? {
              w: H6.width | 0,
              h: H6.height | 0
            } : null]));
          }
          if (now() - Rq > 8) {
            await RE();
            await new Promise(HX => setTimeout(HX, 0));
            Rq = now();
          }
        }
        await RE();
        if (Xi) {
          for (let HX of Rf) {
            for (let HU of HX) {
              try {
                {
                  HU.close();
                }
              } catch {}
            }
          }
          return;
        }
        let H0 = now();
        RZ.forEach((HA, HR) => {
          if (Rd[HR].length) {
            try {
              {
                const He = {
                  cmd: "sprites",
                  list: Rd[HR]
                };
                HA.w.postMessage(He, Rf[HR]);
              }
            } catch {}
          }
        });
        let H1 = now() - H0;
        XV.postMs = (XV.postMs || 0) + H1;
        if (H1 > (XV.postMax || 0)) {
          XV.postMax = Math.round(H1);
          XV.postN = Rd[0].length;
        }
      }
    }
    RP;
    let Rx = (RJ, Rn) => {
      {
        Re++;
        Rg = Rg.then(() => RJ && RJ.length ? RP(RJ) : null).then(() => {
          {
            Re--;
            if (XQ.EOpMF(!Xi, Rn)) {
              Rn();
            }
          }
        }, RK => {
          {
            Re--;
            Ut("sprites: " + (RK && RK.message || RK));
          }
        });
      }
    };
    let RW = (RJ, Rn) => {
      {
        RJ.busy = true;
        RJ.task = Rn;
        RJ.phase = "seek";
        RJ.f = Rn.a - 1;
        Object.assign(XV.workers[RJ.i], {
          phase: "seek",
          a: Rn.a,
          b: Rn.b,
          f: Math.max(0, RJ.at),
          seek: Math.max(0, Rn.a - 1 - (RJ.at >= 0 && RJ.at <= Rn.a - 1 ? RJ.at : 0))
        });
        RJ.w.postMessage({
          cmd: "task",
          task: {
            id: Rn.id,
            a: Rn.a,
            b: Rn.b
          }
        });
      }
    };
    let Ry = () => RX > 0 && RU > 0 ? Math.min(0.95, RX / RU) : b7;
    function Rz(RJ) {
      let Rp = null;
      let RL = 0;
      for (let H1 of RZ) {
        {
          if (H1 === RJ || !H1.busy || !H1.task || H1.shrinking || H1.phase !== "draw") {
            continue;
          }
          let H2 = H1.task.b - H1.f;
          if (H2 > RL) {
            Rp = H1;
            RL = H2;
          }
        }
      }
      if (!Rp || RL < 60) {
        return false;
      }
      let Rd = Ry();
      let Rf = Rp.f;
      let RK = Rp.task.b;
      let Rq = RJ.at >= 0 ? RJ.at : 0;
      let RE = Math.floor((RK + Rf - Rq * Rd) / (2 - Rd));
      if (RK - RE < 30 || RE <= Rf + 15) {
        return false;
      } else {
        Rp.shrinking = {
          thief: RJ,
          oldB: RK
        };
        RJ.busy = true;
        XV.workers[RJ.i].phase = "wait";
        Rp.w.postMessage({
          cmd: "shrink",
          id: Rp.task.id,
          b: RE - 1
        });
        return true;
      }
    }
    Rz;
    function Ra(RJ) {
      {
        if (!Xi && !RJ.busy) {
          {
            if (Ao.length) {
              {
                RW(RJ, Ao.shift());
                return;
              }
            }
            if (!Rz(RJ)) {
              RJ.phase = "idle";
              XV.workers[RJ.i].phase = "idle";
            }
          }
        }
      }
    }
    Ra;
    let RT = (RJ, Rn) => {
      {
        let Rd = RJ.shrinking;
        if (!Rd) {
          return;
        }
        RJ.shrinking = null;
        let Rf = Rd.thief;
        Rf.busy = false;
        if (Rn !== null && Rn <= Rd.oldB) {
          XV.steals++;
          RW(Rf, {
            id: R5++,
            a: Rn,
            b: Rd.oldB
          });
        } else {
          Ra(Rf);
        }
      }
    };
    function RB() {
      const RJ = {
        JUxXN: "the game code"
      };
      const Rv = RJ;
      {
        if (!XQ.JvKCZ(Xi, !R8) && !(XV.frames < X6) && !!R9 && !Re && !Ao.length && !RZ.some(Rd => Rd.busy)) {
          Rw();
        }
      }
    }
    RB;
    function RO(RJ, Rn) {
      if (!bK.cancelled) {
        if (Rn.t === "error") {
          Ut("a video worker stopped: " + Rn.err);
          return;
        }
        if (Rn.t === "ready") {
          {
            RJ.ready = true;
            R6++;
            XV.bootMs = Math.max(XV.bootMs || 0, Math.round(now() - Xg));
            if (Rn.caps && Rn.caps.boot) {
              (XV.boot ||= []).push(Rn.caps.boot);
            }
            if (RJ.role === "render" && !X1 && (!Rn.caps || !Rn.caps.webcodecs)) {
              Xn({
                fallback: "the workers have no video encoder"
              });
              return;
            }
            if (RJ.role === "render" && (!Rn.caps || !Rn.caps.offscreen)) {
              Xn({
                fallback: "the workers have no OffscreenCanvas"
              });
              return;
            }
            if (R6 === XI.length) {
              XV.marks.ready = Math.round(now() - Xg);
              for (let Rq of XI) {
                Rq.w.postMessage({
                  cmd: "job",
                  job: XR
                });
              }
            }
            return;
          }
        }
        if (Rn.t === "nofight") {
          {
            Xn({
              fallback: "the workers do not have this fight"
            });
            return;
          }
        }
        if (Rn.t === "nocodec") {
          {
            Xn({
              fallback: "the workers cannot encode " + (Xl ? Xl.id : "video")
            });
            return;
          }
        }
        if (Rn.t === "jobok") {
          {
            if (++R7 === XI.length) {
              {
                R8 = true;
                XV.marks.started = Math.round(now() - Xg);
                let HU = splitRange(bE, X0, RZ.length, b7);
                HU.forEach(([HA, HR], HH) => RW(RZ[HH], {
                  id: R5++,
                  a: HA,
                  b: HR
                }));
                for (let HA = HU.length; HA < RZ.length; HA++) {
                  Ra(RZ[HA]);
                }
              }
            }
            return;
          }
        }
        if (Rn.t === "scout") {
          if (!XV.marks.scout1) {
            XV.marks.scout1 = Math.round(now() - Xg);
          }
          if (Rn.au && Rn.au.length) {
            for (let HH of Rn.au) {
              RH.push(HH);
            }
          }
          Rl = Rn.drift | 0;
          Rb = Rn.checks | 0;
          XV.scout = Rn.upto;
          if (Rn.upto > 0) {
            RX = Rn.ms / Rn.upto;
          }
          let HR = Rn.upto;
          Rx(Rn.keys, () => {
            for (let He of RZ) {
              try {
                He.w.postMessage({
                  cmd: "frontier",
                  f: HR
                });
              } catch {}
            }
          });
          if (Rn.final) {
            R9 = true;
            XV.scoutMs = Math.round(now() - Xg);
            Rt();
            Rx(null, RB);
          }
          return;
        }
        if (Rn.t === "prog") {
          {
            RJ.phase = Rn.phase;
            RJ.f = Rn.f;
            let Hg = XV.workers[RJ.i];
            Hg.phase = Rn.phase;
            Hg.f = Rn.f;
            return;
          }
        }
        if (Rn.t === "probe") {
          {
            const HV = {
              f: Rn.f,
              w: Rn.w,
              h: Rn.h,
              px: Rn.px
            };
            An.push(HV);
            return;
          }
        }
        if (Rn.t === "gif") {
          {
            let He = (Rn.f - bE) / X2;
            if (He >= 0 && He < X6) {
              if (!At[He]) {
                XV.frames++;
              }
              At[He] = Rn.px;
            }
            return;
          }
        }
        if (Rn.t === "hole") {
          {
            XV.holes++;
            if (!XV.holeKeys) {
              XV.holeKeys = [];
            }
            if (XV.holeKeys.length < 12) {
              XV.holeKeys.push(Rn.f + ":" + Rn.keys.slice(0, 4).map(HI => HI.replace("", "#") + (RV.has(HI) ? "(sent)" : "")).join(","));
            }
            let HQ = {
              id: R5++,
              a: Rn.f,
              b: Math.max(Rn.f, Rn.rest | 0),
              hole: true
            };
            let Hi = [];
            for (let HI of Rn.keys) {
              {
                let HY = HI.slice(0, HI.indexOf(""));
                let HN = spriteEntry(HY);
                let HZ = HN ? HN.frames | 0 : 0;
                if (HZ > 1 && HZ <= 64) {
                  for (let Hj = 0; Hj < HZ; Hj++) {
                    Hi.push(HY + "" + Hj);
                  }
                } else {
                  Hi.push(HI);
                }
              }
            }
            Rx(Hi, () => {
              {
                Ao.unshift(HQ);
                for (let HW of RZ) {
                  if (!HW.busy) {
                    {
                      Ra(HW);
                      break;
                    }
                  }
                }
              }
            });
            return;
          }
        }
        if (Rn.t === "shrunk") {
          {
            if (RJ.task && RJ.task.id === Rn.id) {
              RJ.task.b = Rn.b;
              XV.workers[RJ.i].b = Rn.b;
            }
            RT(RJ, Rn.b + 1);
            return;
          }
        }
        if (Rn.t === "chunks") {
          {
            for (let [Hy, Ha, HT] of Rn.chunks) {
              {
                let HB = (Hy - bE) / X2;
                if (HB >= 0 && HB < X6) {
                  if (Ae[HB]) {
                    XV.bytes -= Ae[HB].data.length;
                  } else {
                    XV.frames++;
                  }
                  Ae[HB] = {
                    data: HT,
                    key: !!Ha,
                    ts: Math.round(HB * 1000000 / lg)
                  };
                  XV.bytes += HT.length;
                }
              }
            }
            if (XV.bytes > MAX_BYTES) {
              {
                Ut("The video passed " + Math.round(MAX_BYTES / 1048576) + " MB - pick a shorter range");
                return;
              }
            }
            if (Rn.done) {
              if (Rn.drift > 0 && (!RA || Rn.drift < RA)) {
                RA = Rn.drift;
              }
              RR[RJ.i] = Rn.checks | 0;
              if (Rn.drawn > 8 && Rn.msDraw > 0) {
                RU = RU ? RU * 0.5 + 0.5 * (Rn.msDraw / Rn.drawn) : Rn.msDraw / Rn.drawn;
              }
              if (Rn.prof) {
                XV.prof[RJ.i] = {
                  ...Rn.prof,
                  drawn: (XV.prof[RJ.i] ? XV.prof[RJ.i].drawn : 0) + Rn.drawn,
                  seekMs: (XV.prof[RJ.i] ? XV.prof[RJ.i].seekMs : 0) + Rn.msSeek,
                  seekN: (XV.prof[RJ.i] ? XV.prof[RJ.i].seekN : 0) + Rn.seekN
                };
              }
              RJ.at = Number.isInteger(Rn.at) ? Rn.at : Rn.b;
              RJ.busy = false;
              RJ.task = null;
              RJ.phase = "idle";
              XV.workers[RJ.i].phase = "idle";
              if (RJ.shrinking) {
                RT(RJ, null);
              }
              Ra(RJ);
              RB();
            }
          }
        }
      }
    }
    RO;
    let RM = null;
    function Rt() {
      {
        if (!XQ.JvKCZ(!XH, RM)) {
          XV.audio = "rendering";
          XV.marks.audioStart = Math.round(now() - Xg);
          RM = renderSoundtrack({
            events: RH,
            from: bE,
            to: X0,
            urlOf: soundUrl,
            cancelled: () => Xi || bK.cancelled,
            onProgress: RL => {
              XV.audioP = RL;
            }
          }).then(RL => {
            XV.audio = RL && !RL.none ? "done" : "none";
            return RL;
          }, RL => {
            XV.audio = "none";
            return {
              none: String(RL && RL.message || RL)
            };
          });
        }
      }
    }
    Rt;
    let Rk = false;
    async function Rw() {
      {
        if (XQ.VObrl(Xi, Rk)) {
          return;
        }
        Rk = true;
        let Rv = now();
        for (let Rq of XI) {
          try {
            Rq.w.terminate();
          } catch {}
        }
        let Rd = null;
        let Rf = XH ? null : "off";
        XV.marks.videoDone = Math.round(now() - Xg);
        if (RM) {
          {
            bK.phase = "audio";
            let H0 = await RM;
            XV.marks.audioDone = Math.round(now() - Xg);
            if (H0 && !H0.none) {
              Rd = H0;
            } else {
              Rf = H0 && H0.none || "no audio";
            }
          }
        }
        if (Xi) {
          return;
        }
        if (bK.cancelled) {
          {
            Xn({
              ok: false,
              why: "cancelled",
              cancelled: true
            });
            return;
          }
        }
        let RK;
        if (X1) {
          {
            bK.phase = "encode";
            try {
              RK = await encodeGifFrames(At.slice(), H2 => {
                {
                  XV.gifP = H2;
                }
              });
            } catch (H2) {
              {
                Ut(H2 && H2.message || "GIF encoder error");
                return;
              }
            }
          }
        } else {
          for (let H6 = 0; H6 < X6; H6++) {
            if (!Ae[H6]) {
              Ut("frame " + (bE + H6) + " is missing");
              return;
            }
          }
          let H4 = Rd ? {
            codec: "A_OPUS",
            rate: Rd.rate,
            channels: Rd.channels,
            priv: Rd.priv,
            delayNs: Math.round(Rd.preskip * 1000000000 / Rd.rate),
            discardNs: Rd.discardNs || 0,
            chunks: Rd.chunks
          } : null;
          const H5 = {
            codec: Xl.id,
            width: X4,
            height: X5,
            chunks: Ae,
            audio: H4
          };
          RK = new Blob(muxWebM(H5), {
            type: "video/webm"
          });
        }
        Xn({
          ok: true,
          blob: RK,
          frames: X6,
          drift: XQ.EOpMF(Rl, RA) ? Math.min(Rl, RA) : XQ.VObrl(Rl, RA),
          checks: Rb,
          scoutDrift: Rl,
          renderDrift: RA,
          renderChecks: RR.reduce((H8, H9) => H8 + (H9 || 0), 0),
          codec: X1 ? "gif" : Xl.id,
          path: "workers",
          workers: RZ.length,
          audio: !!Rd,
          audioWhy: Rf,
          audioVoices: Rd ? Rd.voices : 0,
          audioPeak: Rd ? Rd.peakIn : null,
          bootRetries: XV.bootRetries || 0,
          bootErrors: XV.bootErrors,
          audioLimited: Rd ? Rd.limited : 0,
          boot: XV.boot,
          holes: XV.holes,
          holeKeys: XV.holeKeys,
          bootMs: XV.bootMs,
          scoutMs: XV.scoutMs,
          prof: XV.prof,
          maxMsg: XV.maxMsg,
          maxCut: XV.maxCut,
          marks: XV.marks,
          postMs: Math.round(XV.postMs || 0),
          postMax: XV.postMax,
          postN: XV.postN,
          spritesSent: RV.size,
          steals: XV.steals,
          ms: Math.round(now() - Xg),
          msMux: Math.round(now() - Rv),
          probes: An,
          scale: X3,
          beta: RX,
          delta: RU
        });
      }
    }
    Rw;
    Xt = setInterval(() => {
      if (!Xi) {
        if (bK.cancelled) {
          {
            Xn({
              ok: false,
              why: "cancelled",
              cancelled: true
            });
            return;
          }
        }
        if (bf.onTick) {
          bf.onTick(XV);
        }
      }
    }, 100);
  });
}
l6(exportParallel, "exportParallel");
function parallelProgress(l) {
  let bf = Math.max(0.001, (now() - l.t0) / 1000);
  let bK = 0;
  let bq = 0;
  for (let Xb of l.workers) {
    if (!Xb.b) {
      continue;
    }
    let XX = Xb.a - 1 - Xb.seek;
    let XU = Xb.phase === "seek" ? Math.max(0, Math.min(Xb.seek, Xb.f - XX)) : Xb.seek;
    bK += XU * b7;
    bq += Xb.seek * b7;
  }
  let X0 = (l.frames + bK) / Math.max(1, l.total + bq);
  let X1 = l.audio === "off" ? 0 : 0.12;
  let X2 = Math.min(0.99, X0 * (1 - X1) + (l.audio === "done" || l.audio === "none" ? X1 : X1 * (l.audioP || 0)));
  let X3 = l.frames * (l.gif ? 2 : 1) / lg;
  let X4 = X3 / bf;
  let X5 = X2 > 0.03 ? bf * (1 - X2) / X2 : null;
  let X6 = (l.to - l.from + 1) / lg;
  let X7 = l.gif ? null : l.frames > 15 ? l.bytes / l.frames * l.total : null;
  let X8 = X7 === null ? null : (X7 + (l.audio === "off" ? 0 : X6 * 16000)) / 1048576;
  let X9;
  if (l.frames < l.total) {
    X9 = "Rendering " + mmss(Math.round(X3 * lg)) + " / " + mmss(Math.round(X6 * lg)) + " on " + l.K + " workers";
  } else if (l.audio === "rendering") {
    X9 = "Mixing the sound " + Math.floor((l.audioP || 0) * 100) + "%";
  } else {
    X9 = l.gif ? "Making GIF..." : "Finishing video...";
  }
  return {
    p: X2,
    text: X9,
    speed: X4,
    eta: X5,
    mb: X8,
    workers: l.workers,
    K: l.K,
    holes: l.holes,
    audio: l.audio
  };
}
l6(parallelProgress, "parallelProgress");
var bi = null;
var busy = l6(() => !!bi, "busy");
function cancelExport() {
  if (bi) {
    bi.cancel();
  }
}
l6(cancelExport, "cancelExport");
async function exportReplayVideo(l, b = {}) {
  const bd = {
    WMThe: function (XA, XR) {
      return XA && XR;
    },
    ckMuL: function (XA, XR) {
      return XA + XR;
    },
    Dnvib: "canvas",
    EhsHq: function (XA, XR) {
      return XA(XR);
    },
    emmoT: "the workers have no video encoder",
    qtwQX: function (XA, XR) {
      return XA === XR;
    },
    nAmKD: "MlGwd",
    gwKzJ: function (XA) {
      return XA();
    },
    GrJri: function (XA, XR) {
      return XA(XR);
    },
    pqTnI: function (XA, XR) {
      return XA && XR;
    },
    cXKrd: function (XA, XR) {
      return XA(XR);
    },
    txuQi: "This browser cannot record WebM here - try GIF",
    UayYI: function (XA, XR) {
      return XA > XR;
    },
    KobOC: function (XA, XR) {
      return XA + XR;
    },
    IMKKG: function (XA, XR) {
      return XA + XR;
    },
    MsMgg: "The video passed ",
    DtYbD: function (XA, XR) {
      return XA / XR;
    },
    VrHNY: " MB - pick a shorter range",
    mafVw: function (XA, XR, XH) {
      return XA(XR, XH);
    },
    RPwtA: function (XA, XR) {
      return XA !== XR;
    },
    yprdV: "tHgol",
    fubUl: function (XA, XR) {
      return XA * XR;
    },
    HkFRk: function (XA, XR) {
      return XA / XR;
    },
    itQFe: function (XA, XR) {
      return XA === XR;
    },
    wVMDl: "seek",
    UwKRw: function (XA, XR) {
      return XA + XR;
    },
    QRBaW: "Finding ",
    AdRzZ: function (XA, XR) {
      return XA(XR);
    },
    AFUfn: function (XA, XR) {
      return XA + XR;
    },
    PXSXf: function (XA, XR) {
      return XA + XR;
    },
    tzzZF: "Rendering ",
    KpNhG: function (XA, XR) {
      return XA(XR);
    },
    tljhg: " / ",
    EwPBk: function (XA, XR, XH) {
      return XA(XR, XH);
    },
    ZbJyg: "rv-run",
    YGAlG: function (XA, XR) {
      return XA + XR;
    },
    CwZVi: "EXPORTING ",
    noekH: function (XA, XR) {
      return XA != XR;
    },
    FaWuA: function (XA, XR) {
      return XA + XR;
    },
    BuiKU: " - ETA ",
    hEwbi: "CANCEL",
    uZuMf: "rv-export",
    vNaOu: "EXPORT VIDEO",
    gOilb: function (XA, XR) {
      return XA + XR;
    },
    qhUuL: function (XA, XR) {
      return XA + XR;
    },
    fOXxJ: function (XA) {
      return XA();
    },
    mBWIx: " No sound.",
    WBqlp: function (XA) {
      return XA();
    },
    eSwaI: function (XA) {
      return XA();
    },
    SrqOO: " With sound.",
    xaKvT: function (XA, XR) {
      return XA + XR;
    },
    pMkqk: "rv:export",
    KpXYp: function (XA, XR) {
      return XA(XR);
    },
    qeAUj: "snd_menumove",
    umDlr: function (XA, XR) {
      return XA <= XR;
    },
    pJLlC: function (XA, XR) {
      return XA & XR;
    },
    wyznP: function (XA, XR) {
      return XA > XR;
    },
    BfLbH: function (XA, XR) {
      return XA + XR;
    },
    OPiQC: "bad vint at ",
    MgFOZ: function (XA, XR) {
      return XA & XR;
    },
    HzFXx: function (XA, XR) {
      return XA - XR;
    },
    Qvtpj: function (XA, XR) {
      return XA < XR;
    },
    KrEZY: function (XA, XR) {
      return XA + XR;
    },
    JelUE: function (XA, XR) {
      return XA * XR;
    },
    NhagJ: function (XA, XR) {
      return XA + XR;
    },
    qJjJR: function (XA, XR) {
      return XA < XR;
    },
    uFjwl: function (XA, XR) {
      return XA(XR);
    },
    cEhUP: function (XA, XR) {
      return XA + XR;
    },
    dNHQt: function (XA, XR) {
      return XA + XR;
    },
    sbBkv: "element 0x",
    tauPy: " at ",
    xoHHl: " overruns its parent",
    UvWlx: function (XA, XR, XH, Xg) {
      return XA(XR, XH, Xg);
    },
    MQyeH: function (XA, XR) {
      return XA + XR;
    },
    vHuUx: function (XA, XR) {
      return XA || XR;
    },
    bMpGP: "Another export is running",
    GijTJ: function (XA, XR) {
      return XA === XR;
    },
    RPApb: "QjSUp",
    IxVvf: "ixifd",
    dNXEC: function (XA, XR) {
      return XA(XR);
    },
    bHwtl: "Not a replay",
    ktnit: function (XA) {
      return XA();
    },
    ZjutV: "Video export runs from the menu - leave the fight first",
    vdJMK: function (XA, XR) {
      return XA + XR;
    },
    mZGpb: "That part starts more than ",
    iArmu: " min into the replay - export something in the first ",
    ZuhRn: function (XA, XR) {
      return XA / XR;
    },
    lAzxC: " min",
    DHAza: function (XA, XR) {
      return XA === XR;
    },
    VSxhu: function (XA, XR) {
      return XA * XR;
    },
    JIxhg: "prepare",
    DcVix: function (XA, XR) {
      return XA === XR;
    },
    XRvIU: "aNszc",
    OoWDT: "mzFka",
    ErEBx: function (XA, XR) {
      return XA(XR);
    },
    IdnWl: function (XA, XR) {
      return XA(XR);
    },
    kSyPd: function (XA, XR) {
      return XA !== XR;
    },
    ISWSM: function (XA) {
      return XA();
    },
    zthWr: "workers",
    ZmKTe: function (XA, XR, XH, Xg, XV, Xe) {
      return XA(XR, XH, Xg, XV, Xe);
    },
    kaVIi: function (XA, XR) {
      return XA(XR);
    },
    SkHrT: "cancelled",
    XmrWr: function (XA, XR) {
      return XA && XR;
    },
    MifXW: function (XA, XR) {
      return XA && XR;
    },
    ZRpKM: "This browser cannot record video (no WebCodecs or MediaRecorder) - try GIF",
    XKCta: function (XA, XR, XH) {
      return XA(XR, XH);
    },
    XyrGc: function (XA, XR) {
      return XA !== XR;
    },
    ILmTU: "lBRuR",
    ePwkn: "Vfwpm",
    VgTfS: "YQWpi",
    YSgAU: "nPFyM",
    kmKOT: function (XA, XR) {
      return XA === XR;
    },
    VUwIM: "capture",
    AxBKT: function (XA) {
      return XA();
    },
    rCpsU: function (XA, XR) {
      return XA === XR;
    },
    nfBXL: "the export stopped",
    ENNWO: "No frames were rendered",
    DyMYg: "encode",
    TmdXH: "Making GIF...",
    zpRNC: "Finishing video...",
    zLLZU: "realtime",
    AUHxG: "main",
    ezpyo: function (XA, XR) {
      return XA !== XR;
    },
    YNsEk: "CJnSj",
    YINhE: function (XA, XR) {
      return XA(XR);
    },
    BqMjN: function (XA, XR) {
      return XA !== XR;
    },
    xwZVt: "SWxDl",
    BdTcR: "ekRXo"
  };
  const bf = {
    ok: false
  };
  bf.why = "Another export is running";
  if (bi) {
    return bf;
  }
  let bq = !!b.gif;
  let bE = 0;
  try {
    {
      bE = decodeOf(l).length;
    }
  } catch (XH) {
    const Xg = {
      ok: false
    };
    Xg.why = XH && XH.message || "Not a replay";
    return Xg;
  }
  if (!worldIsEmpty() && !b.allowLive) {
    return {
      ok: false,
      why: "Video export runs from the menu - leave the fight first"
    };
  }
  let {
    from: X1,
    to: X2,
    capped: X3,
    tooFar: X4
  } = rangeOf(bE, b.range, bq);
  if (X4) {
    return {
      ok: false,
      why: "That part starts more than " + MAX_SEEK_S / 60 + " min into the replay - export something in the first " + MAX_SEEK_S / 60 + " min"
    };
  }
  let X5 = bq ? 1 : b.scale === 2 ? 2 : 1;
  let X6 = 640 * X5;
  let X7 = 480 * X5;
  let X8 = b.makeCanvas || ((XV, Xe) => {
    let XQ = document.createElement("canvas");
    XQ.width = XV;
    XQ.height = Xe;
    return XQ;
  });
  let X9 = null;
  let Xl = false;
  let Xb = bi = {
    cancelled: false,
    phase: "prepare",
    cancel() {
      {
        this.cancelled = true;
      }
    }
  };
  let XX = null;
  try {
    {
      let XI = fightById(l.fight);
      if (XI) {
        await t(XI);
      }
      if (!b.sink && b.parallel !== false && canParallel() && (bq || hasWebCodecs()) && XI && !XI.mode && Number.isFinite(l.seed)) {
        Xb.phase = "workers";
        const R8 = {
          from: X1,
          to: X2
        };
        let R9 = await exportParallel(l, decodeOf(l), R8, {
          gif: bq,
          scale: X5,
          audio: b.audio,
          workers: b.workers,
          probe: b.probe,
          latency: b.latency,
          codecs: b.codecs,
          onTick: Rb => {
            if (b.onProgress) {
              let RR = parallelProgress(Rb);
              b.onProgress(RR.p, RR.text, RR);
            }
          }
        }, Xb);
        if (!R9.fallback) {
          if (R9.ok) {
            return {
              ...R9,
              name: videoName(l, bq),
              from: X1,
              to: X2,
              capped: X3,
              wallclock: !!l.wallclock
            };
          } else {
            return {
              ...R9,
              frames: Xb.stats ? Xb.stats.frames : 0
            };
          }
        }
        const Rl = {
          ok: false
        };
        Rl.why = "cancelled";
        Rl.cancelled = true;
        XX = R9.fallback;
        Xb.stats = null;
        if (Xb.cancelled) {
          return Rl;
        }
      }
      if (b.sink) {
        X9 = b.sink;
      } else if (bq) {
        X9 = gifSink(X8);
      } else if (hasWebCodecs()) {
        X9 = await webcodecsSink(X6, X7);
      }
      if (bd.XmrWr(!X9, !bq) && hasRecorder()) {
        Xl = true;
      }
      if (bd.MifXW(!X9, !Xl)) {
        return {
          ok: false,
          why: "This browser cannot record video (no WebCodecs or MediaRecorder) - try GIF"
        };
      }
      let Xt = null;
      let Xn = renderJob(l, {
        from: X1,
        to: X2,
        scale: X5,
        stride: bq ? 2 : 1,
        makeCanvas: X8,
        allowLive: b.allowLive,
        busy: () => !!X9 && !!X9.busy(),
        onFrame: (Rb, RX) => {
          const RU = {
            user: true
          };
          if (bd.pqTnI(Xl, !X9) && (Xt = Rb, X9 = recorderSink(Rb), !X9)) {
            throw Object.assign(new Error("This browser cannot record WebM here - try GIF"), RU);
          }
          const RR = {
            user: true
          };
          X9.frame(Rb, RX);
          if (X9.bytes() > MAX_BYTES) {
            throw Object.assign(new Error("The video passed " + Math.round(MAX_BYTES / 1048576) + " MB - pick a shorter range"), RR);
          }
        }
      });
      Xb.job = Xn;
      let Ut = Math.max(1, X2);
      let Ae = Rb => {
        {
          let Rg = Xn.progress();
          if (b.onProgress) {
            b.onProgress(Math.min(1, Rg.frame / Ut) * (bq ? 0.7 : 0.97), Rb || (Rg.phase === "seek" ? "Finding " + mmss(X1) : "Rendering " + mmss(Rg.frame) + " / " + mmss(X2)));
          }
        }
      };
      let At = () => new Promise(Rb => setTimeout(Rb, 0));
      while (!Xn.done) {
        {
          if (Xb.cancelled) {
            {
              Xn.cancel();
              break;
            }
          }
          let Rb = Xl && Xn.progress().phase === "capture" ? 0 : 25;
          Xn.step(Rb);
          Ae();
          if (X9 && X9.error && X9.error()) {
            Xn.cancel();
            Xn.result = {
              ok: false,
              why: X9.error()
            };
            break;
          }
          if (Xl && Xn.progress().phase === "capture") {
            await new Promise(RU => setTimeout(RU, 1000 / lg));
          } else if (X9 && X9.busy()) {
            await new Promise(RU => setTimeout(RU, 4));
          } else {
            await At();
          }
        }
      }
      const An = {
        ok: false
      };
      An.why = "the export stopped";
      let Ao = Xn.result || An;
      if (!Ao.ok) {
        if (X9) {
          X9.abort();
        }
        return {
          ...Ao,
          frames: Xn.progress().captured
        };
      }
      const R5 = {
        ok: false
      };
      R5.why = "No frames were rendered";
      if (!X9 || !Ao.frames) {
        return R5;
      }
      Xb.phase = "encode";
      if (b.onProgress) {
        b.onProgress(bq ? 0.7 : 0.98, bq ? "Making GIF..." : "Finishing video...");
      }
      let R6 = await X9.finish(RU => b.onProgress && b.onProgress(0.7 + RU * 0.3, "Making GIF... " + Math.floor(RU * 100) + "%"));
      const R7 = {
        ok: false
      };
      R7.why = "cancelled";
      R7.cancelled = true;
      if (Xb.cancelled) {
        return R7;
      } else {
        return {
          ok: true,
          why: null,
          blob: R6,
          name: videoName(l, bq),
          frames: Ao.frames,
          from: X1,
          to: X2,
          capped: X3,
          drift: Ao.drift,
          checks: Ao.checks,
          blocked: Ao.blocked,
          codec: X9.codec || X9.kind,
          wallclock: Ao.wallclock,
          ms: Ao.ms,
          scale: X5,
          path: Xl ? "realtime" : "main",
          fellBack: XX,
          audio: false
        };
      }
    }
  } catch (RU) {
    {
      if (X9) {
        X9.abort();
      }
      if (Xb.job && !Xb.job.done) {
        Xb.job.cancel();
      }
      return {
        ok: false,
        why: RU && RU.message || String(RU)
      };
    }
  } finally {
    {
      bi = null;
    }
  }
}
l6(exportReplayVideo, "exportReplayVideo");
function mmss(l) {
  let bK = Math.max(0, Math.floor(l / lg));
  return Math.floor(bK / 60) + ":" + String(bK % 60).padStart(2, "0");
}
l6(mmss, "mmss");
const bj = {
  d: null,
  sel: 0
};
bj.range = "whole";
bj.last = 1;
bj.from = 0;
bj.to = 0;
bj.gif = false;
bj.scale = 1;
bj.sound = true;
bj.run = null;
bj.done = null;
bj.buf = 0;
var bD = ["whole", "last", "range"];
var bP = [5, 10, 15, 30, 60];
var bx = bj;
var secsOf = l6(l => Math.max(1, Math.ceil((l.n | 0) / lg)), "secsOf");
function uiRows() {
  let bq = [["range", "RANGE"], ["format", "FORMAT"]];
  if (!bx.gif) {
    bq.push(["size", "SIZE"], ["sound", "SOUND"]);
  }
  if (bx.range === "range") {
    bq.push(["from", "FROM"], ["to", "TO"]);
  }
  bq.push(["go", bx.gif ? "MAKE GIF" : "EXPORT VIDEO"]);
  return bq;
}
l6(uiRows, "uiRows");
function uiValue(l) {
  if (l === "range") {
    if (bx.range === "whole") {
      return "WHOLE REPLAY  " + mmss(bx.d.n);
    } else if (bx.range === "last") {
      return "LAST " + bP[bx.last] + " s";
    } else {
      return "A RANGE";
    }
  } else if (l === "format") {
    if (bx.gif) {
      return "GIF (320x240, 15 fps)";
    } else {
      return "VIDEO (WEBM)";
    }
  } else if (l === "size") {
    if (bx.scale === 2) {
      return "2x  1280x960";
    } else {
      return "1x  640x480";
    }
  } else if (l === "sound") {
    if (bx.sound) {
      return "ON";
    } else {
      return "OFF";
    }
  } else if (l === "from") {
    return mmss(bx.from * lg);
  } else if (l === "to") {
    return mmss(bx.to * lg);
  } else {
    return "";
  }
}
l6(uiValue, "uiValue");
function uiChoice() {
  if (bx.range === "last") {
    return {
      kind: "last",
      secs: bP[bx.last]
    };
  } else if (bx.range === "range") {
    return {
      kind: "range",
      from: bx.from,
      to: bx.to
    };
  } else {
    return {
      kind: "whole"
    };
  }
}
l6(uiChoice, "uiChoice");
function uiChange(l, b) {
  let bq = secsOf(bx.d);
  if (l === "range") {
    bx.range = bD[(bD.indexOf(bx.range) + b + 3) % 3];
    if (bx.range === "range" && bx.to <= bx.from) {
      bx.from = 0;
      bx.to = bq;
    }
  } else if (l === "format") {
    bx.gif = !bx.gif;
  } else if (l === "size") {
    bx.scale = bx.scale === 2 ? 1 : 2;
  } else if (l === "sound") {
    bx.sound = !bx.sound;
  } else if (l === "from") {
    bx.from = Math.max(0, Math.min(bx.to - 1, bx.from + b));
  } else if (l === "to") {
    bx.to = Math.max(bx.from + 1, Math.min(bq, bx.to + b));
  } else {
    return false;
  }
  return true;
}
l6(uiChange, "uiChange");
function sizeGuess(l) {
  if (bx.gif) {
    return "about " + Math.max(1, Math.round(l * 15 * 0.02)) + " MB";
  }
  let bE = ((bx.scale === 2 ? 6000000 : 2500000) + (bx.sound ? 128000 : 0)) * l / 8 / 1048576;
  return "up to " + (bE < 10 ? bE.toFixed(1) : Math.round(bE)) + " MB";
}
l6(sizeGuess, "sizeGuess");
function uiSummary() {
  let bf = rangeOf(bx.d.n | 0, uiChoice(), bx.gif);
  let bK = (bf.to - bf.from + 1) / lg;
  let bq = mmss(bf.from - 1) + " to " + mmss(bf.to) + " (" + bK.toFixed(bK < 10 ? 1 : 0) + " s)";
  if (bf.capped) {
    bq += " - capped at " + (bx.gif ? MAX_GIF_S + " s for a GIF" : MAX_VIDEO_S / 60 + " min");
  }
  if (bf.tooFar) {
    bq = "starts past " + MAX_SEEK_S / 60 + " min - too far in to export";
  } else {
    bq += " - " + sizeGuess(bK);
  }
  return bq;
}
l6(uiSummary, "uiSummary");
var sfx = l6(l => {
  try {
    c(l);
  } catch {}
}, "sfx");
function start() {
  if (bx.run) {
    return;
  }
  let bd = bx.d;
  bx.done = null;
  bx.run = {
    p: 0,
    text: "Starting...",
    t0: now()
  };
  exportReplayVideo(bd, {
    range: uiChoice(),
    gif: bx.gif,
    scale: bx.scale,
    audio: bx.sound,
    onProgress: (bq, bE, X0) => {
      if (bx.run) {
        bx.run.p = bq;
        bx.run.text = bE;
        bx.run.info = X0 || null;
      }
    }
  }).then(bq => {
    bx.run = null;
    if (W && W("rv:export")) {
      prewarm();
    }
    if (!bq.ok) {
      const X8 = {
        ok: false
      };
      X8.text = bq.cancelled ? "Cancelled." : bq.why;
      bx.done = X8;
      if (!bq.cancelled) {
        B("Export failed: " + bq.why, {
          kind: "error"
        });
      }
      return;
    }
    let X3 = T(bq.name, bq.blob, bq.blob.type);
    let X4 = (bq.blob.size / 1048576).toFixed(1) + " MB";
    let X5 = (X3 ? "Saved " : "Could not save ") + bq.name + " - " + X4;
    let X6 = (bq.ms || 0) / 1000;
    let X7 = (bq.to - bq.from + 1) / lg;
    if (bq.path === "workers" && X6 > 0) {
      X5 += ", " + (X7 / X6).toFixed(1) + "x real time";
    }
    if (bq.fellBack) {
      X5 += ". On one thread: " + bq.fellBack;
    }
    if (!bx.gif && bx.sound && !bq.audio) {
      X5 += ". No sound" + (bq.audioWhy ? ": " + bq.audioWhy : bq.path === "workers" ? "" : " on one thread");
    }
    if (bq.drift) {
      X5 += ". It drifts from the recorded run from " + mmss(bq.drift) + (bq.wallclock ? " (this fight follows the video clock)." : " (a different build?).");
    }
    bx.done = {
      ok: X3,
      text: X5,
      drift: bq.drift
    };
    if (X3) {
      B((bx.gif ? "GIF" : "Video") + " saved - " + X4, {
        kind: bq.drift ? "warn" : "ok"
      });
    }
  });
}
l6(start, "start");
var bk = cancelExport;
function close() {
  if (bx.run) {
    bk();
    return;
  }
  x("rv:export");
}
l6(close, "close");
function onKey(l, b) {
  if (b === "Escape") {
    close();
    return true;
  }
  if (!bx.run) {
    return false;
  }
  let bE = false;
  try {
    bE = [...r("b1"), ...r("b2")].some(X0 => X0.toLowerCase() === String(l.key || "").toLowerCase());
  } catch {}
  if (bE) {
    bk();
    sfx("snd_menumove");
    return true;
  } else {
    return false;
  }
}
l6(onKey, "onKey");
function act(l) {
  if (l === "go") {
    sfx("snd_select");
    start();
    return;
  }
  if (uiChange(l, 1)) {
    sfx("snd_menumove");
  }
}
l6(act, "act");
function step() {
  if (bx.buf > 0) {
    bx.buf--;
    return;
  }
  if (bx.run) {
    if (n() || o()) {
      bk();
      sfx("snd_menumove");
    }
    return;
  }
  let b = uiRows();
  let bd = b.length;
  if (o()) {
    x("rv:export");
    sfx("snd_menumove");
    return;
  }
  if (f()) {
    bx.sel = (bx.sel + bd - 1) % bd;
    sfx("snd_menumove");
  }
  if (K()) {
    bx.sel = (bx.sel + 1) % bd;
    sfx("snd_menumove");
  }
  bx.sel = Math.min(bx.sel, bd - 1);
  let bE = b[bx.sel][0];
  if (v() || d()) {
    if (uiChange(bE, d() ? 1 : -1)) {
      sfx("snd_menumove");
    }
  } else if ((bE === "from" || bE === "to") && (q() || E())) {
    bx.hold = (bx.hold || 0) + 1;
    if (bx.hold > 8 && bx.hold % 2 === 0) {
      uiChange(bE, E() ? 1 : -1);
    }
  } else {
    bx.hold = 0;
  }
  if (n()) {
    act(bE);
  }
}
l6(step, "step");
var bC = 110;
var bc = 90;
var bh = 530;
var bS = 420;
function text(l, b, bd, bf, bK = lN.text, bq = "fnt_main") {
  l.draw_set_font(bq);
  l.draw_text(b, bd, String(bf), bK);
}
l6(text, "text");
function draw(l) {
  j.rect("rv:bg", 0, 0, 640, 480, () => {
    {
      if (!bx.run) {
        x("rv:export");
      }
    }
  });
  let bf = host();
  l.ctx.fillStyle = lN.solid;
  l.ctx.fillRect(bC, bc, bh - bC, bS - bc);
  if (bf.darkbox) {
    bf.darkbox(l, bC, bc, bh, bS);
  } else {
    M(l, bC, bc, bh, bS);
  }
  j.rect("rv:frame", bC, bc, bh - bC, bS - bc, () => {});
  let bK = bx.d || {};
  text(l, bC + 30, bc + 22, String(bK.name || bK.fight || "REPLAY").slice(0, 30).toUpperCase(), lN.select, "fnt_mainbig");
  if (bx.run) {
    let X4 = Math.max(0, Math.min(1, bx.run.p || 0));
    text(l, bC + 30, bc + 76, bx.run.text, lN.text);
    let X5 = bC + 30;
    let X6 = bc + 104;
    let X7 = bh - bC - 60;
    l.ctx.fillStyle = lN.faint;
    l.ctx.fillRect(X5, X6, X7, 12);
    l.ctx.fillStyle = lN.select;
    l.ctx.fillRect(X5, X6, Math.round(X7 * X4), 12);
    let X8 = bx.run.info;
    let X9 = Math.floor(X4 * 100) + "%";
    if (X8) {
      if (X8.speed > 0.05) {
        X9 += "   " + X8.speed.toFixed(1) + "x real time";
      }
      if (X8.eta !== null && X8.eta !== undefined) {
        X9 += "   ETA " + mmss(Math.round(X8.eta * lg));
      }
      if (X8.mb !== null && X8.mb !== undefined) {
        X9 += "   ~" + X8.mb.toFixed(1) + " MB";
      }
    }
    text(l, bC + 30, bc + 126, X9, lN.dim);
    if (X8 && X8.workers && X8.workers.length) {
      {
        let Xl = X8.workers.length;
        let Xb = bc + 150;
        let XX = Math.min(12, Math.floor(70 / Xl));
        for (let XU = 0; XU < Xl; XU++) {
          {
            let XA = X8.workers[XU];
            let XR = Xb + XU * XX;
            l.ctx.fillStyle = lN.faint;
            l.ctx.fillRect(X5, XR, X7, XX - 3);
            if (!XA.b) {
              continue;
            }
            let XH = XA.a - 1 - XA.seek;
            let Xg = XA.seek && XA.phase === "seek" ? Math.max(0, Math.min(1, (XA.f - XH) / XA.seek)) : 1;
            let XV = XA.phase === "seek" ? 0 : Math.max(0, Math.min(1, XA.phase === "idle" ? 1 : (XA.f - XA.a + 1) / Math.max(1, XA.b - XA.a + 1)));
            l.ctx.fillStyle = lN.dim;
            l.ctx.fillRect(X5, XR, Math.round(X7 * 0.25 * Xg), XX - 3);
            l.ctx.fillStyle = lN.select;
            l.ctx.fillRect(X5 + Math.round(X7 * 0.25), XR, Math.round(X7 * 0.75 * XV), XX - 3);
          }
        }
      }
    }
    j.rect("rv:cancel", bC + 26, bS - 60, 120, 26, () => bk());
    if (l.draw_sprite) {
      try {
        l.draw_sprite("spr_heart", 0, bC + 30, bS - 54);
      } catch {}
    }
    text(l, bC + 52, bS - 56, "CANCEL", lN.select);
    return;
  }
  let bE = uiRows();
  for (let Xe = 0; Xe < bE.length; Xe++) {
    {
      let [XQ, Xi] = bE[Xe];
      let XI = bc + 62 + Xe * 26;
      let Xt = Xe === bx.sel;
      j.rect("rv:row" + Xe, bC + 20, XI - 3, bh - bC - 40, 24, ((Ut, Ae) => () => {
        if (bx.sel === Ut || Ae === "go") {
          bx.sel = Ut;
          act(Ae);
        } else {
          bx.sel = Ut;
          sfx("snd_menumove");
        }
      })(Xe, XQ));
      if (Xt && l.draw_sprite) {
        try {
          {
            l.draw_sprite("spr_heart", 0, bC + 26, XI + 2);
          }
        } catch {}
      }
      text(l, bC + 50, XI, Xi, Xt ? lN.select : lN.text);
      let Xn = uiValue(XQ);
      if (Xn) {
        text(l, bC + 170, XI, (Xt && XQ !== "go" ? "< " : "") + Xn + (Xt && XQ !== "go" ? " >" : ""), Xt ? lN.select : lN.dim);
      }
    }
  }
  let X1 = bc + 62 + bE.length * 26 + 6;
  let X2 = bh - bC - 60;
  let X3 = (Ut, Ae, At = 3) => {
    {
      for (let R6 of wrapText(l, Ut, X2).slice(0, At)) {
        text(l, bC + 30, X1, R6, Ae);
        X1 += 17;
      }
    }
  };
  X3(uiSummary(), lN.dim, 2);
  if (bx.done) {
    {
      let Ut = bx.done.ok ? bx.done.drift ? lN.warn : lN.ok : lN.error;
      X3(String(bx.done.text), Ut, 4);
    }
  } else if (canParallel() && hasWebCodecs()) {
    X3(bx.gif ? "Renders in the background, faster than real time. A GIF has no sound." : "Renders in the background, faster than real time" + (bx.sound ? ", with sound." : "."), lN.dim);
  } else if (bx.gif || hasWebCodecs()) {
    X3("No sound: it renders off-screen, faster than real time.", lN.dim);
  } else {
    X3("No sound. This browser records at real speed.", lN.warn);
  }
}
l6(draw, "draw");
function wrapText(l, b, bd, bf = "fnt_main") {
  let X1 = X4 => l && typeof l.string_width == "function" ? l.string_width(X4, bf) : X4.length * 8;
  let X2 = [];
  let X3 = "";
  for (let X4 of String(b).split(" ")) {
    while (X1(X4) > bd && X4.length > 1) {
      let X6 = X4.length;
      while (X6 > 1 && X1(X4.slice(0, X6)) > bd) {
        X6--;
      }
      if (X3) {
        X2.push(X3);
        X3 = "";
      }
      X2.push(X4.slice(0, X6));
      X4 = X4.slice(X6);
    }
    let X5 = X3 ? X3 + " " + X4 : X4;
    if (X3 && X1(X5) > bd) {
      X2.push(X3);
      X3 = X4;
    } else {
      X3 = X5;
    }
  }
  if (X3) {
    X2.push(X3);
  }
  return X2;
}
l6(wrapText, "wrapText");
function touchRows() {
  if (bx.run) {
    return {
      key: "rv-run",
      title: "EXPORTING " + Math.floor((bx.run.p || 0) * 100) + "%",
      note: bx.run.text + (bx.run.info && bx.run.info.eta != null ? " - ETA " + mmss(Math.round(bx.run.info.eta * lg)) : ""),
      rows: [{
        label: "CANCEL",
        sel: true,
        act: () => bk()
      }],
      close: false
    };
  } else {
    return {
      key: "rv-export",
      title: "EXPORT VIDEO",
      rows: uiRows().map(([bK, bq], bE) => ({
        label: bK === "go" ? bq : bq + "  " + uiValue(bK),
        sel: bE === bx.sel,
        act: () => {
          bx.sel = bE;
          act(bK);
        },
        btns: bK === "go" ? [] : [{
          label: "<",
          act: () => {
            bx.sel = bE;
            uiChange(bK, -1);
          }
        }, {
          label: ">",
          act: () => {
            bx.sel = bE;
            uiChange(bK, 1);
          }
        }]
      })),
      note: uiSummary() + "." + (bx.gif ? " No sound." : bx.sound && canParallel() && hasWebCodecs() ? " With sound." : " No sound.") + (bx.done ? " " + bx.done.text : "")
    };
  }
}
l6(touchRows, "touchRows");
function openExport(l) {
  let bf = a("timeline");
  let bK = typeof l == "object" && l ? l : bf && bf.replays ? bf.replays().find(X0 => X0.id === l) : null;
  if (!bK) {
    B("That replay is gone", {
      kind: "error"
    });
    return false;
  }
  try {
    decodeOf(bK);
  } catch (X1) {
    B(X1 && X1.message || "Not a replay", {
      kind: "error"
    });
    return false;
  }
  if (worldIsEmpty()) {
    Object.assign(bx, {
      d: bK,
      sel: 0,
      range: "whole",
      last: 1,
      from: 0,
      to: secsOf(bK),
      gif: false,
      scale: 1,
      sound: true,
      run: null,
      done: null,
      buf: 1,
      hold: 0
    });
    P({
      id: "rv:export",
      owner: lH,
      draw: draw,
      step: step,
      touchRows: touchRows,
      onKey: onKey,
      onClose: () => {
        bk();
        coolDown();
      }
    });
    prewarm();
    return true;
  } else {
    B("Video export runs from the menu - leave the fight first", {
      kind: "warn"
    });
    return false;
  }
}
l6(openExport, "openExport");
const bL = {
  openExport: openExport,
  exportReplayVideo: exportReplayVideo,
  renderJob: renderJob,
  muxWebM: muxWebM,
  parseEBML: parseEBML,
  rangeOf: rangeOf,
  busy: busy,
  hasWebCodecs: hasWebCodecs,
  canParallel: canParallel,
  splitRange: splitRange,
  workersFor: workersFor,
  prewarm: prewarm,
  coolDown: coolDown
};
y("replayvideo", bL);
export { DEFAULT_RENDERERS, MAX_BYTES, MAX_GIF_S, MAX_SEEK_S, MAX_VIDEO_S, MAX_WORKERS, busy, canParallel, cancelExport, coolDown, exportReplayVideo, hasWebCodecs, muxWebM, openExport, parallelProgress, parseEBML, prewarm, rangeOf, renderJob, splitRange, videoName, workersFor, worldIsEmpty, wrapText };
function bv(l, b) {
  var bE = new URL(l, b).href;
  var X0 = globalThis.__drWarm;
  return (X0 ? X0(bE) : Promise.resolve()).then(function () {
    return import(bE).catch(function (X5) {
      try {
        X5.reload = true;
        X5.what = "the game code";
      } catch (X9) {}
      throw X5;
    });
  });
}
