const B = function () {
  ;
  let ym = true;
  return function (yA, yP) {
    const yQ = ym ? function () {
      if (yP) {
        const Mn = yP.apply(yA, arguments);
        yP = null;
        return Mn;
      }
    } : function () {};
    ym = false;
    return yQ;
  };
}();
const q = B(this, function () {
  const ym = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const yc = new RegExp("[DfHzfOIKNZDkxfSJUkXLTOUWRRIEEXyVZQLqbODLXSJSOZWVLzxGYSkYUYjFfSzWBBWNzfWkJPQXxOCGMBMPDZLIRDJPOFxVJFNFIHXNGVMARVBKSXqWFAQjHJRyqOOMFXCFQDkRWWYQPyJQTQRJjVMUDMSDBRBMCSMIPkRVbAGMGZNffAEyxKZW]", "g");
  const yZ = "lDocafHzlfOIKNZhoDkxfSJsUktXL;1T27O.0.UW0.RR1;IEEdXelytaruneVZsQLqim.cobm;ODwwwLX.dSJSOZeWltVarunesimLzxGY.SckoYUYjmFf;dSrsimzWB.BWNlozcfaWklhJPQXoxsOCt;GM.deBlMtPDZarLIRDuneJsimPO.pageFxVJs.FdNFevIHXNGVMARVBKSXqWFAQjHJRyqOOMFXCFQDkRWWYQPyJQTQRJjVMUDMSDBRBMCSMIPkRVbAGMGZNffAEyxKZW".replace(yc, "").split(";");
  let yA;
  let yP;
  let yF;
  let yk;
  const yR = function (at, ae, an) {
    if (at.length != ae) {
      return false;
    }
    for (let Bp = 0; Bp < ae; Bp++) {
      for (let BK = 0; BK < an.length; BK += 2) {
        if (Bp == an[BK] && at.charCodeAt(Bp) != an[BK + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const yQ = function (at, ae, an) {
    return yR(ae, an, at);
  };
  const yO = function (at, ae, an) {
    return yQ(ae, at, an);
  };
  const ys = function (at, ae, an) {
    return yO(ae, an, at);
  };
  for (let at in ym) {
    if (yR(at, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      yA = at;
      break;
    }
  }
  for (let ae in ym[yA]) {
    if (ys(6, ae, [5, 110, 0, 100])) {
      yP = ae;
      break;
    }
  }
  for (let Ce in ym[yA]) {
    if (yO(Ce, [7, 110, 0, 108], 8)) {
      yF = Ce;
      break;
    }
  }
  if (!(yP < "~")) {
    for (let Cn in ym[yA][yF]) {
      if (yQ([7, 101, 0, 104], Cn, 8)) {
        yk = Cn;
        break;
      }
    }
  }
  if (!yA || !ym[yA]) {
    return;
  }
  const yn = ym[yA][yP];
  const Mt = !!ym[yA][yF] && ym[yA][yF][yk];
  const Mn = yn || Mt;
  if (!Mn) {
    return;
  }
  let ao = false;
  for (let B4 = 0; B4 < yZ.length; B4++) {
    const B6 = yZ[B4];
    const B7 = B6[0] === String.fromCharCode(46) ? B6.slice(1) : B6;
    const B8 = Mn.length - B7.length;
    const B9 = Mn.indexOf(B7, B8);
    const Bp = B9 !== -1 && B9 === B8;
    if (Bp) {
      if (Mn.length == B6.length || B6.indexOf(".") === 0) {
        ao = true;
      }
    }
  }
  if (!ao) {
    const BC = new RegExp("[ghNBZwfrGGfGAghdEJEzjDmcX]", "g");
    const BB = "ghabNoBZwfutrG:blGfaGnAgkhdEJEzjDmcX".replace(BC, "");
    ym[yA][yF] = BB;
  }
});
q();
const T = function () {
  ;
  let yc = true;
  return function (yA, yP) {
    const yQ = yc ? function () {
      if (yP) {
        const yn = yP.apply(yA, arguments);
        yP = null;
        return yn;
      }
    } : function () {};
    yc = false;
    return yQ;
  };
}();
const d = T(this, function () {
  const yZ = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const yA = yZ.console = yZ.console || {};
  const yF = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let yk = 0; yk < yF.length; yk++) {
    const yR = T.constructor.prototype.bind(T);
    const yQ = yF[yk];
    const yO = yA[yQ] || yR;
    yR.__proto__ = T.bind(T);
    yR.toString = yO.toString.bind(yO);
    yA[yQ] = yR;
  }
});
d();
import { $ as o, Q as t, S as b, T as X, X as z, fa as I, ga as E, ha as S } from "./c-GXG7QXPE.js";
import { b as G, g as u, l as m, p as c } from "./c-YJJCI5ES.js";
import { Ba as Z, I as A, N as P, Ob as F, U as k, fb as R, pa as Q } from "./c-FMIAGHDE.js";
import { a, i as O, l as s } from "./c-PIEPTJTC.js";
s();
const w = {
  geom: null,
  deckActive: false,
  menuDeck: false,
  topChips: false,
  pinTop: false,
  _frozen: null,
  _ekey: ""
};
var x = w;
var l = null;
function safeInsets() {
  if (!l) {
    l = document.createElement("div");
    l.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)";
    document.body.appendChild(l);
  }
  let yZ = getComputedStyle(l);
  return {
    t: parseFloat(yZ.paddingTop) || 0,
    r: parseFloat(yZ.paddingRight) || 0,
    b: parseFloat(yZ.paddingBottom) || 0,
    l: parseFloat(yZ.paddingLeft) || 0
  };
}
a(safeInsets, "safeInsets");
function isCoarse(p) {
  let yA = p && p.touchpad || "AUTO";
  if (yA === "ON") {
    return true;
  } else if (yA === "OFF") {
    return false;
  } else {
    return !!window.matchMedia && !!window.matchMedia("(pointer: coarse)").matches;
  }
}
a(isCoarse, "isCoarse");
function freezeGeometry(p) {
  if (!p) {
    x._frozen = null;
    return;
  }
  x._frozen = {
    W: window.innerWidth,
    H: window.innerHeight,
    portrait: window.innerHeight >= window.innerWidth,
    fs: inFullscreen()
  };
}
a(freezeGeometry, "freezeGeometry");
var inFullscreen = a(() => !!document.fullscreenElement || !!document.webkitFullscreenElement, "inFullscreen");
function viewport() {
  let K = window.innerWidth;
  let ym = window.innerHeight;
  let yc = x._frozen;
  if (yc && yc.fs !== inFullscreen()) {
    x._frozen = {
      W: K,
      H: ym,
      portrait: ym >= K,
      fs: inFullscreen()
    };
  } else if (yc && ym >= K === yc.portrait && Math.abs(K - yc.W) < 4 && Math.abs(ym - yc.H) < 140) {
    K = yc.W;
    ym = yc.H;
  }
  return {
    W: K,
    H: ym
  };
}
a(viewport, "viewport");
var r = a(p => Math.round(p) + "px", "px");
function layout(p, K, ym) {
  const yA = {
    t: 0,
    r: 0
  };
  yA.b = 0;
  yA.l = 0;
  let {
    W: yF,
    H: yk
  } = viewport();
  let yR = isCoarse(ym);
  let yQ = yk >= yF;
  let yO = yR ? safeInsets() : yA;
  let ys = yR ? yQ ? portraitGeom(yF, yk, yO) : landscapeGeom(yF, yk, yO) : desktopGeom(yF, yk, !ym || ym.showfps !== false);
  x.geom = ys;
  p.style.width = r(ys.canvas.w);
  p.style.height = r(ys.canvas.h);
  if (ys.mode === "desktop") {
    p.style.position = "";
    p.style.left = "";
    p.style.top = "";
    p.style.marginTop = "8px";
    document.body.classList.remove("shell-touch");
    if (K) {
      K.style.position = "";
      K.style.left = "";
      K.style.top = "";
      if (K.width !== 640 || K.height !== 48) {
        K.width = 640;
        K.height = 48;
      }
      K.style.display = ys.strip ? "" : "none";
      K.style.width = r(ys.scale * 640);
      K.style.height = r(ys.scale * 48);
    }
  } else {
    document.body.classList.add("shell-touch");
    p.style.position = "fixed";
    p.style.marginTop = "0";
    p.style.left = r(ys.canvas.x);
    p.style.top = r(ys.canvas.y);
    if (K) {
      if (!ym || ym.showfps !== false) {
        let yn = Math.min(380, Math.max(100, ys.info.w));
        let Mt = Math.max(56, Math.min(96, Math.round(ys.info.h || 72)));
        K.style.display = "";
        K.style.position = "fixed";
        K.style.width = r(yn);
        K.style.height = r(Mt);
        if (K.width !== yn || K.height !== Mt) {
          K.width = yn;
          K.height = Mt;
        }
        K.style.left = r(ys.info.x);
        K.style.top = r(ys.info.y);
      } else {
        K.style.display = "none";
      }
    }
  }
  return ys;
}
a(layout, "layout");
function desktopGeom(p, K, ym = true) {
  let yk = (p - 8) / 640;
  let yR = (K - 56) / (480 + (ym ? 48 : 0));
  let yQ = Math.max(0.2, Math.min(yk, yR, 3));
  let yO = Math.round(yQ * 640);
  let ys = Math.round(yQ * 480);
  return {
    mode: "desktop",
    W: p,
    H: K,
    safe: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    scale: yQ,
    canvas: {
      x: Math.round((p - yO) / 2),
      y: 8,
      w: yO,
      h: ys
    },
    deck: null,
    pillarL: null,
    pillarR: null,
    strip: ym,
    info: {
      x: 0,
      y: 0,
      w: yO,
      h: Math.round(yQ * 48)
    }
  };
}
a(desktopGeom, "desktopGeom");
var g = 300;
var J = 44;
function portraitGeom(p, K, ym) {
  let yF = p - ym.l - ym.r;
  let yk = x.menuDeck || x.pinTop;
  let yR = ym.t + (x.deckActive || yk && x.topChips ? J : yk ? 8 : 24);
  let yQ = yF / 640;
  let yO = (K - yR - ym.b - g) / 480;
  let ys = Math.max(0.2, Math.min(yQ, yO, 3));
  let ye = Math.round(ys * 640);
  let yn = Math.round(ys * 480);
  let Mt = ym.l + Math.round((yF - ye) / 2);
  let Me = K - yR - ym.b - yn;
  let Mn = x.deckActive || yk ? yR : yR + Math.max(0, Math.round(Me / 2));
  let ao = Mn + yn;
  const at = {
    x: Mt,
    y: Mn,
    w: ye
  };
  at.h = yn;
  return {
    mode: "portrait",
    W: p,
    H: K,
    safe: ym,
    scale: ys,
    canvas: at,
    deck: {
      x: ym.l,
      y: ao,
      w: yF,
      h: Math.max(0, K - ym.b - ao)
    },
    pillarL: null,
    pillarR: null,
    info: {
      x: ym.l + 4,
      y: ao + 2,
      w: yF - 8,
      h: 0
    }
  };
}
a(portraitGeom, "portraitGeom");
var V = 104;
function landscapeGeom(p, K, ym) {
  let yF = p - ym.l - ym.r;
  let yk = K - ym.t - ym.b;
  let yR = Math.max(0.2, Math.min(yk / 480, (yF - V * 2) / 640, 3));
  let yQ = Math.round(yR * 640);
  let yO = Math.round(yR * 480);
  let ys = Math.max(0, Math.floor((yF - yQ) / 2));
  let ye = ym.l + ys;
  let yn = ym.t + Math.round((yk - yO) / 2);
  const Mt = {
    x: ye,
    y: yn,
    w: yQ
  };
  Mt.h = yO;
  return {
    mode: "landscape",
    W: p,
    H: K,
    safe: ym,
    scale: yR,
    canvas: Mt,
    deck: null,
    pillarL: {
      x: ym.l,
      y: ym.t,
      w: ys,
      h: yk
    },
    pillarR: {
      x: ye + yQ,
      y: ym.t,
      w: Math.max(0, p - ym.r - (ye + yQ)),
      h: yk
    },
    info: {
      x: ym.l + 4,
      y: ym.t + 4 + (x.menuDeck ? 36 : 76) + 8,
      w: ys - 8,
      h: 0
    }
  };
}
a(landscapeGeom, "landscapeGeom");
function ensure(p, K, ym) {
  let {
    W: yA,
    H: yP
  } = viewport();
  let yF = (isCoarse(ym) ? yP >= yA ? "p" : "l" : "d") + ":" + yA + "x" + yP + ":" + (!ym || ym.showfps !== false ? 1 : 0) + ":" + (x.deckActive ? 1 : 0) + (x.menuDeck ? "m" : "") + (x.pinTop ? "p" : "") + (x.topChips ? "c" : "") + (inFullscreen() ? "F" : "");
  if (yF === x._ekey && x.geom) {
    return x.geom;
  } else {
    x._ekey = yF;
    return layout(p, K, ym);
  }
}
a(ensure, "ensure");
x.layout = layout;
x.ensure = ensure;
x.freeze = freezeGeometry;
x.isCoarse = isCoarse;
s();
s();
s();
const p0 = {
  bg: "#000000",
  fg: "#ffffff",
  sel: "#ffff00",
  dim: "#808080",
  box: "#1a1426",
  warn: "#ff8000"
};
var p1 = p0;
var p2 = new Map();
function spriteURL(p, K = 0) {
  let yA = p + ":" + K;
  let yP = p2.get(yA);
  if (yP !== undefined) {
    return yP;
  }
  let yk = A[p];
  let yR = yk && yk.img && yk.img[K];
  yP = yR ? yR.toDataURL() : null;
  p2.set(yA, yP);
  return yP;
}
a(spriteURL, "spriteURL");
var p4 = new Map();
var p5 = 0;
var p6 = new WeakMap();
var fontId = a(p => {
  if (!p || typeof p != "object") {
    return 0;
  }
  let yP = p6.get(p);
  if (!yP) {
    yP = ++p5;
    p6.set(p, yP);
  }
  return yP;
}, "fontId");
function textInfo(p, K = "fnt_mainbig", ym = 3, yc = "#ffffff") {
  let yA = F[K];
  let yP = p + ":" + K + "#" + fontId(yA) + ":" + ym + ":" + yc;
  let yF = p4.get(yP);
  if (yF !== undefined) {
    return yF;
  }
  if (!yA || !yA.img || !yA.img.width) {
    return null;
  }
  let yk = ae => yA.glyphs[ae.charCodeAt(0)] || yA.glyphs[63];
  let yR = 0;
  let yQ = 0;
  for (let ae of p) {
    let an = yk(ae);
    if (an) {
      yR += an[4];
      if (an[3] > yQ) {
        yQ = an[3];
      }
    }
  }
  if (!yR || !yQ) {
    p4.set(yP, null);
    return null;
  }
  let ye = document.createElement("canvas");
  ye.width = yA.img.width;
  ye.height = yA.img.height;
  let yn = ye.getContext("2d");
  yn.drawImage(yA.img, 0, 0);
  yn.globalCompositeOperation = "source-in";
  yn.fillStyle = yc;
  yn.fillRect(0, 0, ye.width, ye.height);
  let Mt = document.createElement("canvas");
  Mt.width = yR * ym;
  Mt.height = yQ * ym;
  let Me = Mt.getContext("2d");
  Me.imageSmoothingEnabled = false;
  let Mn = 0;
  for (let Ct of p) {
    let Ce = yk(Ct);
    if (!Ce) {
      continue;
    }
    let [Cn, B1, B2, B3, B4, B5] = Ce;
    if (B2 > 0 && B3 > 0) {
      Me.drawImage(ye, Cn, B1, B2, B3, Math.round((Mn + B5) * ym), 0, B2 * ym, B3 * ym);
    }
    Mn += B4;
  }
  let ao = {
    u: Mt.toDataURL(),
    w: Mt.width,
    h: Mt.height
  };
  p4.set(yP, ao);
  return ao;
}
a(textInfo, "textInfo");
function textURL(p, K = "fnt_mainbig", ym = 3, yc = "#ffffff") {
  let yP = textInfo(p, K, ym, yc);
  if (yP) {
    return yP.u;
  } else {
    return null;
  }
}
a(textURL, "textURL");
function drText(p, K, ym = "fnt_mainbig", yc = 3, yZ = "#ffffff") {
  let yR = textURL(K, ym, yc, yZ);
  if (yR) {
    p.textContent = "";
    p.style.backgroundImage = "url(" + yR + ")";
    p.style.backgroundRepeat = "no-repeat";
    p.style.backgroundPosition = "center";
    p.style.imageRendering = "pixelated";
    return true;
  } else {
    p.textContent = K;
    return false;
  }
}
a(drText, "drText");
function drLabel(p, K, {
  font: ym = "fnt_mainbig",
  col: yc = p1.fg,
  align: yZ = "left",
  max: yA = 0,
  scales: yP = [2, 1]
} = {}) {
  K = String(K ?? "");
  if (!K.trim()) {
    p.textContent = "";
    p.style.backgroundImage = "";
    p.style.width = "0px";
    p.style.height = "0px";
    return true;
  }
  let yO = null;
  for (let ys of yP) {
    let ye = textInfo(K, ym, ys, yc);
    if (!ye) {
      yO = null;
      break;
    }
    yO = ye;
    if (!yA || ye.w <= yA) {
      break;
    }
  }
  if (yO) {
    p.textContent = "";
    p.style.backgroundImage = "url(" + yO.u + ")";
    p.style.backgroundRepeat = "no-repeat";
    p.style.backgroundPosition = yZ + " center";
    p.style.imageRendering = "pixelated";
    p.style.width = (yA ? Math.min(yO.w, yA) : yO.w) + "px";
    p.style.height = yO.h + "px";
    return true;
  } else {
    p.textContent = K;
    p.style.backgroundImage = "";
    p.style.width = "";
    p.style.height = "";
    return false;
  }
}
a(drLabel, "drLabel");
function spriteSize(p) {
  let yc = A[p];
  let yZ = yc && yc.img && yc.img[0];
  if (yZ) {
    return {
      w: yZ.width,
      h: yZ.height
    };
  } else {
    return {
      w: 0,
      h: 0
    };
  }
}
a(spriteSize, "spriteSize");
function drSprite(p, K, ym, yc) {
  let yF = spriteURL(K, ym);
  let yk = spriteSize(K);
  if (!yF || !yk.w) {
    p.style.backgroundImage = "";
    return;
  }
  let yQ = Math.max(1, Math.round(yc));
  p.style.backgroundImage = "url(" + yF + ")";
  p.style.backgroundSize = yk.w * yQ + "px " + yk.h * yQ + "px";
  p.style.backgroundRepeat = "no-repeat";
  p.style.backgroundPosition = "center";
  p.style.imageRendering = "pixelated";
}
a(drSprite, "drSprite");
var pa = false;
function mountStyle() {
  if (pa) {
    return;
  }
  pa = true;
  let yA = document.createElement("style");
  yA.id = "dr-shell-style";
  yA.textContent = "\n:root {\n  --dr-bg:" + p1.bg + "; --dr-fg:" + p1.fg + "; --dr-sel:" + p1.sel + "; --dr-dim:" + p1.dim + ";\n  --dr-box:" + p1.box + "; --dr-warn:" + p1.warn + ";\n  --dr-body: -apple-system, BlinkMacSystemFont, \"Segoe UI\", system-ui, sans-serif;\n}\n/* The canvas leaves the flex column in touch mode and is placed by Shell. */\nbody.shell-touch { display:block; padding:0; min-height:100dvh; }\nbody.shell-touch #loading { display:none; }\n\n#dr-deck { position:fixed; left:0; top:0; width:100%; height:100%; z-index:10;\n           pointer-events:none; font-family:var(--dr-body); -webkit-user-select:none; user-select:none;\n           -webkit-tap-highlight-color:transparent; -webkit-touch-callout:none; }\n#dr-deck * { box-sizing:border-box; }\n#dr-deck .w { position:absolute; z-index:2; pointer-events:auto; touch-action:none; display:none;\n              align-items:center; justify-content:center;\n              background:var(--dr-bg); color:var(--dr-fg);\n              border:2px solid var(--dr-fg); border-radius:0;\n              font-family:var(--dr-body); font-size:17px; line-height:1.15;\n              transition:background-color 80ms linear, color 80ms linear, opacity 80ms linear; }\n#dr-deck .w.on { display:flex; }\n#dr-deck .w.hit { background:var(--dr-fg); color:var(--dr-bg); }\n#dr-deck .w.sel { border-color:var(--dr-sel); color:var(--dr-sel); }\n#dr-deck .w.off { color:var(--dr-dim); border-color:var(--dr-dim); }\n\n/* command cells carry the port's own spr_bt* art; no border, the sprite IS the button */\n#dr-deck .cmd { border:none; background-color:transparent; }\n#dr-deck .cmd.hit { background-color:#ffffff22; }\n\n/* grid cells and target rows: label left, meta right */\n#dr-deck .cell { justify-content:space-between; padding:0 12px; text-align:left; }\n#dr-deck .cell .lb { overflow:hidden; white-space:nowrap; }\n#dr-deck .cell .mt { color:var(--dr-warn); font-size:15px; margin-left:10px; flex:none; }\n#dr-deck .cell.off .mt { color:var(--dr-dim); }\n\n/* the spell/ACT description. At 0.5969 the port draws this starting past the right edge of a 390px\n   screen, so on a phone it is literally unreadable. Same string, shown where a thumb can read it -\n   the ported draw is not moved. */\n#dr-deck .desc { border:none; background:transparent; color:var(--dr-dim); font-size:16px;\n                 display:none; align-items:flex-start; justify-content:flex-start; padding:0 12px;\n                 white-space:pre-line; line-height:1.25; }\n#dr-deck .desc.on { display:flex; }\n\n/* attack-bar press strips: the one moment the port asks for a few-pixel timing window */\n#dr-deck .press { font-size:22px; letter-spacing:2px; background:var(--dr-box); }\n#dr-deck .press.hit { background:var(--dr-fg); color:var(--dr-bg); }\n\n/* the floating stick: a capture zone with no border, and a ring drawn where the thumb landed */\n#dr-deck .zone { border:none; background:transparent; }\n/* the utility row - ESC and F1 - deliberately quiet: they are not part of playing a round */\n#dr-deck .util { border:2px solid #ffffff40; background:#00000090; display:flex;\n                 align-items:center; justify-content:center; }\n#dr-deck .util.recede { opacity:.2; pointer-events:none; }\n#dr-deck .util.hit { background:#ffffff30; }\n#dr-deck .ring, #dr-deck .ghost { position:absolute; z-index:1; pointer-events:none;\n                                  border:2px solid var(--dr-fg); border-radius:50%; display:none; }\n#dr-deck .ring.on { display:block; }\n#dr-deck .ghost { opacity:.18; }\n#dr-deck .ghost.on { display:block; }\n#dr-deck .nub { position:absolute; z-index:1; pointer-events:none; border:2px solid var(--dr-fg);\n                border-radius:50%; width:26px; height:26px; display:none; }\n#dr-deck .nub.on { display:block; }\n\n#dr-deck .rnd { border-radius:50%; font-size:26px; letter-spacing:1px; background:#ffffff14; }\n/* the one documented recession: while a wave is live Z and X do nothing, so they get out of the way */\n#dr-deck .rnd.recede { opacity:.25; pointer-events:none; }\n";
  document.head.appendChild(yA);
}
a(mountStyle, "mountStyle");
s();
const pB = {
  tick: 6,
  select: 10,
  back: 8,
  press: 12,
  stick: 4,
  graze: 4,
  hurt: 28,
  heavy: [18, 30, 18],
  win: [12, 40, 12]
};
var pq = "touch";
var pi = pB;
var pT = null;
var canVibrate = a(() => {
  if (pT === null) {
    pT = typeof navigator !== "undefined" && typeof navigator.vibrate == "function";
  }
  return pT;
}, "canVibrate");
var coarse = a(() => {
  try {
    return t();
  } catch {
    return false;
  }
}, "coarse");
var hapticsOn = a(() => E(pq, "haptics", true) !== false, "hapticsOn");
var pb = 0;
var pX = "";
var now = a(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "now");
function haptic(p = "tick") {
  if (!canVibrate() || !hapticsOn() || !coarse()) {
    return;
  }
  let yA = pi[p] ?? pi.tick;
  let yP = now();
  if (p === "hurt" || p !== pX || !(yP - pb < 50)) {
    pb = yP;
    pX = p;
    try {
      navigator.vibrate(yA);
    } catch {}
  }
}
a(haptic, "haptic");
const pE = {
  snd_hurt1: "hurt",
  snd_menumove: "tick",
  snd_squeak: "tick",
  snd_select: "select",
  snd_graze: "graze",
  snd_criticalswing: "heavy",
  snd_damage: "select"
};
var pS = pE;
var pG = false;
function installHaptics() {
  if (!pG) {
    pG = true;
    if (Array.isArray(Z)) {
      Z.push(yZ => {
        let yk = pS[yZ];
        if (yk) {
          haptic(yk);
        }
      });
    }
    o({
      id: "touch.haptics",
      section: "TOUCH",
      label: "Vibration",
      owner: "touch",
      values: [true, false],
      get: () => hapticsOn(),
      set: yZ => {
        S(pq, "haptics", !!yZ);
        if (yZ) {
          haptic("select");
        }
      },
      desc: "Short vibrations on menu moves, confirms and taking damage (Android; iPhones have no vibration API)."
    });
  }
}
a(installHaptics, "installHaptics");
var pm = 24;
var pc = null;
var pZ = null;
var pA = null;
var pP = new Map();
function pF(p, K) {
  let yP = pP.get(p);
  if (yP) {
    if (yP._cls !== K) {
      yP.className = "w " + K;
    }
  } else {
    yP = document.createElement("div");
    yP.className = "w " + K;
    yP.dataset.k = p;
    pP.set(p, yP);
    pc.appendChild(yP);
  }
  yP._cls = K;
  return yP;
}
a(pF, "el");
function place(p, K, ym, yc, yZ) {
  let yR = Math.round(K) + "," + Math.round(ym) + "," + Math.round(yc) + "," + Math.round(yZ);
  if (p._pl !== yR) {
    p._pl = yR;
    p.style.left = Math.round(K) + "px";
    p.style.top = Math.round(ym) + "px";
    p.style.width = Math.round(yc) + "px";
    p.style.height = Math.round(yZ) + "px";
  }
}
a(place, "place");
function pR(p, K, ym) {
  ym = !!ym;
  if (p.classList.contains(K) !== ym) {
    p.classList.toggle(K, ym);
  }
}
a(pR, "tg");
function show(p) {
  pR(p, "on", true);
  p._live = true;
}
a(show, "show");
function lab(p, K) {
  K = String(K);
  if (p._lab !== K) {
    p._lab = K;
    p.setAttribute("aria-label", K);
  }
}
a(lab, "lab");
function fitText(p, K, ym, yc, yZ = "fnt_main", yA = [2, 1]) {
  let yQ = K + "|" + yZ + "|" + ym + "x" + yc;
  for (let yO of yA) {
    let ys = textInfo(K, yZ, yO, p1.fg);
    if (!ys) {
      p.textContent = K;
      p._ft = null;
      return;
    }
    if (ys.w <= ym - 8 && ys.h <= yc - 6 || yO === yA[yA.length - 1]) {
      if (p._ft === yQ + yO) {
        return;
      }
      p._ft = yQ + yO;
      drText(p, K, yZ, yO);
      p.style.backgroundSize = "auto";
      return;
    }
  }
}
a(fitText, "fitText");
const pl = {
  ["100%"]: 1,
  ["75%"]: 0.75,
  ["50%"]: 0.5,
  ["30%"]: 0.3
};
var pU = "touch";
var pj = {
  S: 0.85,
  M: 1,
  L: 1.2,
  XL: 1.4
};
var pL = pl;
var pf = false;
function ensureSettings() {
  if (!pf) {
    pf = true;
    try {
      o({
        id: "touch.size",
        section: "TOUCH",
        label: "Control size",
        owner: "touch",
        values: Object.keys(pj),
        get: () => E(pU, "size", "M"),
        set: yZ => S(pU, "size", yZ),
        desc: "Size of Z / X, the stick and the arrow pad on a touch screen."
      });
      o({
        id: "touch.opacity",
        section: "TOUCH",
        label: "Control opacity",
        owner: "touch",
        values: Object.keys(pL),
        get: () => E(pU, "opacity", "100%"),
        set: yZ => S(pU, "opacity", yZ),
        desc: "How solid Z / X, the stick and the arrow pad are drawn."
      });
      o({
        id: "touch.lefty",
        section: "TOUCH",
        label: "Left-handed controls",
        owner: "touch",
        values: [false, true],
        get: () => E(pU, "lefty", false) === true,
        set: yZ => S(pU, "lefty", !!yZ),
        desc: "Z / X on the left, the stick on the right."
      });
      o({
        id: "touch.dodge",
        section: "TOUCH",
        label: "Dodge control",
        owner: "touch",
        values: ["STICK", "DPAD"],
        get: () => E(pU, "dodge", "STICK"),
        set: yZ => S(pU, "dodge", yZ),
        desc: "STICK floats wherever your thumb lands; DPAD is a fixed cross in the corner."
      });
      installHaptics();
    } catch {
      pf = false;
    }
  }
}
a(ensureSettings, "ensureSettings");
function opts() {
  let ym = 1;
  try {
    let yA = Number(E("a11y", "touchScale", 1));
    if (yA === 1.25 || yA === 1.5) {
      ym = yA;
    }
  } catch {}
  return {
    k: Math.max(pj[E(pU, "size", "M")] || 1, ym),
    op: pL[E(pU, "opacity", "100%")] ?? 1,
    lefty: E(pU, "lefty", false) === true,
    dpad: E(pU, "dodge", "STICK") === "DPAD"
  };
}
a(opts, "opts");
function bindTap(p, K) {
  p._get = K;
  if (p._bound) {
    return;
  }
  p._bound = true;
  let yP = -1;
  let yF = 0;
  let yk = 0;
  const yR = {
    passive: false
  };
  p.addEventListener("pointerdown", yO => {
    {
      yO.preventDefault();
      yO.stopPropagation();
      try {
        {
          p.setPointerCapture(yO.pointerId);
        }
      } catch {}
      yP = yO.pointerId;
      yF = yO.clientX;
      yk = yO.clientY;
      p.classList.add("hit");
      haptic("tick");
    }
  }, yR);
  let yQ = yO => {
    {
      if (yO.pointerId !== yP || (yP = -1, p.classList.remove("hit"), yO.type !== "pointerup") || Math.abs(yO.clientX - yF) > pm || Math.abs(yO.clientY - yk) > pm) {
        return;
      }
      let Mt = p._get && p._get();
      if (!!Mt && !!Mt.act && !Mt.off) {
        Mt.act();
      }
    }
  };
  p.addEventListener("pointerup", yQ);
  p.addEventListener("pointercancel", yQ);
}
a(bindTap, "bindTap");
var pressLive = a(() => {
  let ym = R.first("obj_attackpress");
  if (ym && ym.active === 1) {
    return true;
  } else {
    return isUTBattle() && G.myfight === 1 && !!R.first("obj_target");
  }
}, "pressLive");
function bindPress(p, K) {
  p._get = K;
  if (p._bound) {
    return;
  }
  p._bound = true;
  p.addEventListener("pointerdown", yk => {
    yk.preventDefault();
    yk.stopPropagation();
    try {
      p.setPointerCapture(yk.pointerId);
    } catch {}
    if (!pressLive()) {
      return;
    }
    let ye = p._get && p._get();
    if (!!ye && !!ye.act) {
      p.classList.add("hit");
      haptic("press");
      ye.act();
    }
  }, {
    passive: false
  });
  let yF = () => p.classList.remove("hit");
  p.addEventListener("pointerup", yF);
  p.addEventListener("pointercancel", yF);
}
a(bindPress, "bindPress");
function bindHold(p, K) {
  p._key = K;
  if (p._bound) {
    return;
  }
  p._bound = true;
  let yA = -1;
  const yF = {
    passive: false
  };
  p.addEventListener("pointerdown", yR => {
    yR.preventDefault();
    yR.stopPropagation();
    try {
      p.setPointerCapture(yR.pointerId);
    } catch {}
    yA = yR.pointerId;
    p.classList.add("hit");
    haptic(p._key === "b2" ? "back" : "tick");
    k(p._key, true);
  }, yF);
  let yk = yR => {
    if (yR.pointerId === yA) {
      yA = -1;
      p.classList.remove("hit");
      k(p._key, false);
    }
  };
  p.addEventListener("pointerup", yk);
  p.addEventListener("pointercancel", yk);
  p.addEventListener("lostpointercapture", yk);
  window.addEventListener("pointerup", yk);
  window.addEventListener("pointercancel", yk);
  p._release = () => {
    if (yA !== -1) {
      yA = -1;
      p.classList.remove("hit");
      k(p._key, false);
    }
  };
}
a(bindHold, "bindHold");
var sendKey = a((p, K) => window.dispatchEvent(new KeyboardEvent(p, {
  key: K,
  code: K.length === 1 ? "Key" + K.toUpperCase() : K,
  bubbles: true
})), "sendKey");
function bindKeyTap(p, K) {
  if (p._tap === K) {
    return;
  }
  const yA = {
    passive: false
  };
  p._tap = K;
  p.addEventListener("pointerdown", yk => {
    yk.preventDefault();
    yk.stopPropagation();
    p.classList.add("hit");
    haptic("tick");
    sendKey("keydown", p._tap);
    sendKey("keyup", p._tap);
  }, yA);
  let yF = () => p.classList.remove("hit");
  p.addEventListener("pointerup", yF);
  p.addEventListener("pointercancel", yF);
  p.addEventListener("pointerleave", yF);
}
a(bindKeyTap, "bindKeyTap");
var pD = 600;
function bindEsc(p) {
  if (p._escB) {
    return;
  }
  p._escB = true;
  let ym = -1;
  let yc = 0;
  let yZ = () => {
    sendKey("keydown", "Escape");
    sendKey("keyup", "Escape");
  };
  const yk = {
    passive: false
  };
  p.addEventListener("pointerdown", yQ => {
    yQ.preventDefault();
    yQ.stopPropagation();
    try {
      {
        p.setPointerCapture(yQ.pointerId);
      }
    } catch {}
    ym = yQ.pointerId;
    p.classList.add("hit");
    haptic("tick");
    if (!p._holdMode) {
      {
        yZ();
        return;
      }
    }
    p.classList.add("arming");
    yc = setTimeout(() => {
      yc = 0;
      p.classList.remove("arming");
      haptic("heavy");
      yZ();
      if (O.__DR && O.__DR.state === "battle") {
        yZ();
      }
    }, pD);
  }, yk);
  let yR = yQ => {
    {
      if (yQ.pointerId === ym) {
        ym = -1;
        p.classList.remove("hit", "arming");
        if (yc) {
          clearTimeout(yc);
          yc = 0;
        }
      }
    }
  };
  p.addEventListener("pointerup", yR);
  p.addEventListener("pointercancel", yR);
  p.addEventListener("lostpointercapture", yR);
}
a(bindEsc, "bindEsc");
function bindKeyHold(p, K) {
  if (p._khold === K) {
    return;
  }
  p._khold = K;
  let yA = -1;
  const yF = {
    passive: false
  };
  p.addEventListener("pointerdown", yR => {
    yR.preventDefault();
    yR.stopPropagation();
    try {
      p.setPointerCapture(yR.pointerId);
    } catch {}
    yA = yR.pointerId;
    p.classList.add("hit");
    haptic("tick");
    sendKey("keydown", K);
  }, yF);
  let yk = yR => {
    if (yR.pointerId === yA) {
      yA = -1;
      p.classList.remove("hit");
      sendKey("keyup", K);
    }
  };
  p.addEventListener("pointerup", yk);
  p.addEventListener("pointercancel", yk);
  p.addEventListener("lostpointercapture", yk);
}
a(bindKeyHold, "bindKeyHold");
var pv = -1;
var K0 = 0;
var K1 = 0;
var K2 = 0;
var K3 = 0;
var K4 = false;
var K5 = null;
var K6 = 112;
var K7 = 44;
function bindStick(p, K, ym, yc) {
  const yP = {
    viKcj: function (ys, ye) {
      return ys + ye;
    },
    emuxy: function (ys, ye) {
      return ys - ye;
    },
    dxFML: function (ys, ye) {
      return ys / ye;
    },
    JeMlZ: function (ys, ye) {
      return ys - ye;
    },
    RdWmZ: function (ys, ye) {
      return ys + ye;
    },
    eBwIt: function (ys, ye, yn, Mt, Me) {
      return ys(ye, yn, Mt, Me);
    },
    UhdcI: function (ys, ye) {
      return ys(ye);
    },
    rkNsB: "fnt_mainbig",
    mbggg: function (ys, ye) {
      return ys > ye;
    },
    LGIdq: function (ys, ye) {
      return ys === ye;
    },
    UEPqY: "WvHQS",
    vDusE: "AMERW",
    kzHKC: function (ys, ye) {
      return ys | ye;
    },
    poDLy: function (ys, ye, yn) {
      return ys(ye, yn);
    },
    TXUMr: function (ys, ye) {
      return ys | ye;
    },
    PgXYU: function (ys, ye) {
      return ys !== ye;
    },
    qHMJe: "stick",
    kJrPA: function (ys, ye, yn, Mt) {
      return ys(ye, yn, Mt);
    },
    KNbof: function (ys, ye) {
      return ys < ye;
    },
    wlaSe: function (ys, ye) {
      return ys + ye;
    },
    cPGCE: function (ys, ye) {
      return ys * ye;
    },
    HqBiS: function (ys) {
      return ys();
    },
    Edezr: "hit",
    KNBYZ: function (ys, ye) {
      return ys(ye);
    },
    rKirA: "press",
    lKNBG: function (ys, ye) {
      return ys === ye;
    },
    KLGKA: "BxHbt",
    BTedd: "ezrAR",
    yTyRT: "RxkCd",
    msCSR: "kLPyg",
    OtsuL: "ZTyNW",
    EVofR: function (ys, ye) {
      return ys - ye;
    },
    StrrH: function (ys, ye) {
      return ys - ye;
    },
    nzcQv: function (ys, ye) {
      return ys - ye;
    },
    fLMiC: function (ys, ye) {
      return ys - ye;
    },
    Jsyfp: function (ys, ye) {
      return ys - ye;
    },
    udeca: function (ys, ye) {
      return ys * ye;
    },
    nQneV: function (ys, ye) {
      return ys * ye;
    },
    lgdpB: function (ys, ye) {
      return ys - ye;
    },
    GgZhB: function (ys, ye) {
      return ys / ye;
    },
    sSndU: function (ys) {
      return ys();
    },
    Urczx: function (ys, ye) {
      return ys - ye;
    },
    gcsBw: function (ys, ye) {
      return ys - ye;
    },
    FNMEa: function (ys, ye, yn) {
      return ys(ye, yn);
    },
    XLpAx: function (ys, ye) {
      return ys === ye;
    },
    ovfsi: function (ys, ye) {
      return ys && ye;
    },
    AZDta: function (ys, ye) {
      return ys / ye;
    },
    xKbkW: function (ys, ye) {
      return ys + ye;
    },
    TXKnb: function (ys, ye) {
      return ys + ye;
    },
    Cbqul: function (ys, ye) {
      return ys + ye;
    },
    Nfcus: "pointerdown",
    WSqul: "pointermove",
    raCrv: "pointerup",
    ujzrD: "pointercancel",
    VAGIg: "lostpointercapture"
  };
  if (p._bound) {
    return;
  }
  p._bound = true;
  let yk = () => {
    K.style.left = K0 - K6 / 2 + "px";
    K.style.top = K1 - K6 / 2 + "px";
    K.style.width = K6 + "px";
    K.style.height = K6 + "px";
  };
  let yR = (ys, ye) => {
    {
      let at = (P.held.left ? 1 : 0) | (P.held.right ? 2 : 0) | (P.held.up ? 4 : 0) | (P.held.down ? 8 : 0);
      setDirs(ys, ye);
      let ae = (P.held.left ? 1 : 0) | (P.held.right ? 2 : 0) | (P.held.up ? 4 : 0) | (P.held.down ? 8 : 0);
      if (ae && ae !== at) {
        haptic("stick");
      }
    }
  };
  const yQ = {
    passive: false
  };
  p.addEventListener("pointerdown", ys => {
    {
      ys.preventDefault();
      if (pv === -1) {
        {
          try {
            {
              p.setPointerCapture(ys.pointerId);
            }
          } catch {}
          pv = ys.pointerId;
          if (K5) {
            K0 = K5.x;
            K1 = K5.y;
          } else {
            let Mn = p.getBoundingClientRect();
            K0 = Math.min(Mn.right - 24, Math.max(Mn.left + 24, ys.clientX));
            K1 = Math.min(Mn.bottom - 24, Math.max(Mn.top + 24, ys.clientY));
          }
          K2 = K0;
          K3 = K1;
          K4 = true;
          yk();
          K.classList.add("on");
          yc.classList.remove("on");
          ym.classList.add("on");
          moveNub(ym, ys.clientX - K0, ys.clientY - K1);
          yR(ys.clientX - K0, ys.clientY - K1);
        }
      }
    }
  }, yQ);
  p.addEventListener("pointermove", ys => {
    if (ys.pointerId !== pv) {
      return;
    }
    ys.preventDefault();
    let Me = ys.clientX - K0;
    let Mn = ys.clientY - K1;
    let ao = Math.hypot(Me, Mn);
    let at = K7 + 16;
    if (!K5 && ao > at) {
      K0 += Me * (1 - at / ao);
      K1 += Mn * (1 - at / ao);
      K2 = K0;
      K3 = K1;
      yk();
      Me = ys.clientX - K0;
      Mn = ys.clientY - K1;
    }
    moveNub(ym, Me, Mn);
    yR(Me, Mn);
  }, {
    passive: false
  });
  let yO = ys => {
    if (ys.pointerId === pv) {
      pv = -1;
      K.classList.remove("on");
      ym.classList.remove("on");
      setDirs(0, 0);
      if (yP.ovfsi(K4, !K5)) {
        yc.style.left = K2 - K6 / 2 + "px";
        yc.style.top = K3 - K6 / 2 + "px";
        yc.style.width = K6 + "px";
        yc.style.height = K6 + "px";
        yc.classList.add("on");
      }
    }
  };
  p.addEventListener("pointerup", yO);
  p.addEventListener("pointercancel", yO);
  p.addEventListener("lostpointercapture", yO);
  window.addEventListener("pointerup", yO);
  window.addEventListener("pointercancel", yO);
}
a(bindStick, "bindStick");
function moveNub(p, K, ym) {
  let yk = Math.hypot(K, ym);
  let yR = yk > K7 ? K7 / yk : 1;
  p.style.left = K0 + K * yR - 13 + "px";
  p.style.top = K1 + ym * yR - 13 + "px";
}
a(moveNub, "moveNub");
function stickZone(p, K, ym, yc, yZ, yA) {
  if (yc < 60 || ym < 60) {
    return;
  }
  K6 = Math.round(yZ.k * 112);
  K7 = Math.round(yZ.k * 44);
  K5 = null;
  if (yZ.dpad && yA) {
    let Mt = Math.max(40, Math.min(Math.round(yZ.k * 66), yA.maxR || 1000000000));
    const Me = {
      x: yA.x,
      y: yA.y
    };
    K5 = Me;
    p = yA.x - Mt - 12;
    K = yA.y - Mt - 12;
    ym = yc = Mt * 2 + 24;
    let Mn = Math.round(Mt * 0.62);
    let ao = pF("dph", "dpx");
    place(ao, yA.x - Mt, yA.y - Mn / 2, Mt * 2, Mn);
    show(ao);
    let at = pF("dpv", "dpx");
    place(at, yA.x - Mn / 2, yA.y - Mt, Mn, Mt * 2);
    show(at);
  }
  let yR = pF("zone", "zone");
  place(yR, p, K, ym, yc);
  lab(yR, "move");
  show(yR);
  let yO = pF("ring", "ring");
  let ys = pF("nub", "nub");
  let ye = pF("ghost", "ghost");
  yO._live = ys._live = ye._live = true;
  bindStick(yR, yO, ys, ye);
}
a(stickZone, "stickZone");
function releaseAll() {
  for (let yZ of pP.values()) {
    if (yZ._release) {
      yZ._release();
    }
  }
  for (let yA of ["left", "right", "up", "down", "b1", "b2", "b3"]) {
    if (P.held[yA]) {
      k(yA, false);
    }
  }
}
a(releaseAll, "releaseAll");
function mountGuards() {
  let yc = document.createElement("style");
  yc.id = "dr-touch-style";
  yc.textContent = "\nbody.shell-touch { touch-action:none; -webkit-user-select:none; user-select:none; -webkit-touch-callout:none; }\n#dr-deck { --ctl-op:1; }\n#dr-deck .zone { z-index:1; }\n#dr-deck .rnd, #dr-deck .nav, #dr-deck .ring, #dr-deck .nub, #dr-deck .dpx { opacity:var(--ctl-op); }\n#dr-deck .ghost { opacity:calc(var(--ctl-op) * .18); }\n#dr-deck .rnd { font-size:20px; }\n#dr-deck .nav { background:#00000090; border:2px solid #ffffffa0; background-repeat:no-repeat; background-position:center; image-rendering:pixelated; }\n#dr-deck .nav.hit, #dr-deck .rnd.hit { background-color:var(--dr-fg); }\n#dr-deck .dpx { position:absolute; z-index:0; pointer-events:none; display:none; border:2px solid #ffffff80; background:#ffffff0c; }\n#dr-deck .dpx.on { display:block; }\n#dr-deck .cmd.off { opacity:.35; }\n#dr-deck .util.hold { opacity:.4; }\n#dr-deck .util.hold.arming { opacity:1; background-color:#ff000070; transition:background-color .6s linear; }\n";
  document.head.appendChild(yc);
  let yA = () => document.body.classList.contains("shell-touch");
  const yP = {
    passive: false
  };
  document.addEventListener("gesturestart", yF => {
    if (yA()) {
      yF.preventDefault();
    }
  }, yP);
  document.addEventListener("touchmove", yF => {
    if (yA() && yF.touches && yF.touches.length > 1) {
      yF.preventDefault();
    }
  }, {
    passive: false
  });
  document.addEventListener("dblclick", yF => {
    if (yA()) {
      yF.preventDefault();
    }
  }, {
    passive: false
  });
}
a(mountGuards, "mountGuards");
var Ka = {
  left: "M5 1h1v9H5V9H4V8H3V7H2V6H1V5h1V4h1V3h1V2h1z",
  right: "M1 1h1v1h1v1h1v1h1v1h1v1H5v1H4v1H3v1H2v1H1z",
  up: "M5 1h1v1h1v1h1v1h1v1h1v1H1V5h1V4h1V3h1V2h1z",
  down: "M1 4h9v1H9v1H8v1H7v1H6v1H5V8H4V7H3V6H2V5H1z"
};
var arrowURL = a(p => "url(\"data:image/svg+xml," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 11' width='22' height='22' shape-rendering='crispEdges'><path fill='#fff' d='" + Ka[p] + "'/></svg>") + "\")", "arrowURL");
var KB = null;
var Kq = false;
var Ki = false;
var KT = {
  tick(p, K) {
    if (!Kq) {
      mountStyle();
      mountGuards();
      pZ = document.getElementById("game");
      pA = document.getElementById("info");
      pc = document.createElement("div");
      pc.id = "dr-deck";
      document.body.appendChild(pc);
      Kq = true;
    }
    let yZ = x.isCoarse(K);
    if (yZ) {
      ensureSettings();
    }
    let yP = p === "battle";
    if (p !== KB) {
      x.freeze(yP && yZ);
      KB = p;
    }
    let yF = yZ && yP;
    x.deckActive = yF;
    x.menuDeck = yZ && p === "menu";
    x.pinTop = yZ && (p === "lab" || p === "spellcard" || p === "survivors");
    let yR = x.ensure(pZ, pA, K);
    for (let yO of pP.values()) {
      yO._live = false;
    }
    if (yZ && yR.mode !== "desktop") {
      let ys = opts();
      if (pc._op !== ys.op) {
        pc._op = ys.op;
        pc.style.setProperty("--ctl-op", String(ys.op));
      }
      if (yF) {
        render(yR, ys);
      } else if (p === "menu") {
        if (tutDodging()) {
          waveDeck(yR, ys, true);
        } else if (X()) {
          renderNav(yR, ys, {
            c: true
          });
        } else {
          renderMenu(yR, ys);
        }
      } else if (p === "title") {
        renderNav(yR, ys, {
          c: false
        });
      } else if (p === "lab") {
        renderLab(yR, ys);
      }
    }
    let yQ = false;
    for (let ye of pP.values()) {
      if (ye._live) {
        yQ = true;
      } else {
        pR(ye, "on", false);
        if (ye._release) {
          ye._release();
        }
      }
      if (ye._vis !== ye._live) {
        ye._vis = ye._live;
        ye.style.display = ye._live ? "" : "none";
      }
    }
    if (!yQ && Ki && pv === -1) {
      releaseAll();
    }
    Ki = yQ;
  }
};
function phaseOf(p) {
  if (p) {
    if (G.myfight === 1 && R.first("obj_target")) {
      return "press";
    } else if (G.myfight === 0 && G.mnfight === 0) {
      if (G.bmenuno === 0) {
        return "cmd";
      } else {
        return "grid";
      }
    } else if (G.mnfight === 2) {
      return "wave";
    } else {
      return "talk";
    }
  }
  if (G.minigameStage) {
    return "wave";
  }
  let yP = R.first("obj_attackpress");
  if (yP && yP.active === 1) {
    return "press";
  } else if (G.myfight !== 0) {
    if (R.first("obj_heart")) {
      return "wave";
    } else {
      return "talk";
    }
  } else if (G.bmenuno === 0) {
    return "cmd";
  } else {
    return "grid";
  }
}
a(phaseOf, "phaseOf");
function zxColumn(p, K) {
  let yF = p.mode === "landscape";
  let yk = Math.round(K.k * 32);
  let yR = Math.round(K.k * 26);
  let yQ = 18;
  if (yF) {
    let Mt = K.lefty ? p.pillarL : p.pillarR;
    let Me = Mt.x + Math.round(Mt.w / 2);
    let Mn = Mt.y + Mt.h - yQ - yk;
    return {
      zx: Me,
      zy: Mn,
      xx: Me,
      xy: Mn - yk - 14 - yR,
      zr: yk,
      xr: yR,
      x0: Mt.x,
      x1: Mt.x + Mt.w,
      top: Mn - yk - 14 - yR * 2 - 12
    };
  }
  let yO = p.deck;
  let ys = K.lefty ? yO.x + yQ + yk : yO.x + yO.w - yQ - yk;
  let ye = yO.y + yO.h - yQ - yk;
  let yn = ye - yk - 14 - yR;
  return {
    zx: ys,
    zy: ye,
    xx: ys,
    xy: yn,
    zr: yk,
    xr: yR,
    x0: ys - yk - 16,
    x1: ys + yk + 16,
    top: yn - yR - 12
  };
}
a(zxColumn, "zxColumn");
function zxButtons(p, K = false) {
  let yc = pF("bz", "rnd");
  place(yc, p.zx - p.zr, p.zy - p.zr, p.zr * 2, p.zr * 2);
  fitText(yc, "Z", p.xr * 2, p.xr * 2, "fnt_main", [2, 1]);
  lab(yc, "confirm");
  bindHold(yc, "b1");
  show(yc);
  if (K) {
    return;
  }
  let yA = pF("bx", "rnd");
  place(yA, p.xx - p.xr, p.xy - p.xr, p.xr * 2, p.xr * 2);
  fitText(yA, "X", p.xr * 2, p.xr * 2, "fnt_main", [2, 1]);
  lab(yA, "cancel");
  bindHold(yA, "b2");
  show(yA);
  cButton(p.xx, p.xy, p.xr);
}
a(zxButtons, "zxButtons");
function cButton(p, K, ym) {
  let yA = Math.round(ym * 0.85);
  let yP = K - ym - 12 - yA;
  let yF = pF("bc", "rnd");
  place(yF, p - yA, yP - yA, yA * 2, yA * 2);
  fitText(yF, "C", yA * 2, yA * 2, "fnt_main", [2, 1]);
  lab(yF, "menu");
  bindHold(yF, "b3");
  show(yF);
}
a(cButton, "cButton");
function render(p, K) {
  const yZ = {
    aSsPP: function (B4, B5) {
      return B4 == B5;
    },
    sAfiv: function (B4, B5) {
      return B4 === B5;
    },
    SYrKN: "LKVHD",
    JDgJL: function (B4, B5, B6) {
      return B4(B5, B6);
    },
    YCXZQ: function (B4, B5) {
      return B4 + B5;
    },
    staLz: "press",
    OkNWQ: function (B4, B5, B6, B7, B8, B9) {
      return B4(B5, B6, B7, B8, B9);
    },
    fzhbr: function (B4, B5) {
      return B4 + B5;
    },
    YCJaD: function (B4, B5) {
      return B4 * B5;
    },
    rfAzX: function (B4, B5, B6, B7, B8, B9, Bp) {
      return B4(B5, B6, B7, B8, B9, Bp);
    },
    BEAmL: function (B4, B5) {
      return B4(B5);
    },
    HFCtv: "PRESS",
    bROLb: "fnt_mainbig",
    KNTQL: function (B4, B5, B6) {
      return B4(B5, B6);
    },
    CaIGQ: function (B4, B5) {
      return B4 !== B5;
    },
    xIhOf: function (B4, B5) {
      return B4 / B5;
    },
    dEZFs: function (B4, B5) {
      return B4 - B5;
    },
    nzCsR: function (B4, B5) {
      return B4 - B5;
    },
    iOBpa: function (B4, B5) {
      return B4 + B5;
    },
    NwXaz: function (B4, B5) {
      return B4 / B5;
    },
    nvwAe: function (B4, B5) {
      return B4 - B5;
    },
    OLawt: function (B4, B5) {
      return B4 * B5;
    },
    KhGDx: function (B4, B5) {
      return B4(B5);
    },
    uVvXl: function (B4, B5) {
      return B4 || B5;
    },
    SMjib: function (B4, B5) {
      return B4 * B5;
    },
    qCUGp: function (B4, B5) {
      return B4 * B5;
    },
    Crnge: function (B4, B5, B6, B7) {
      return B4(B5, B6, B7);
    },
    epzZO: function (B4, B5) {
      return B4 - B5;
    },
    KkUuN: "desc",
    pCMya: function (B4, B5) {
      return B4 + B5;
    },
    lGQYc: function (B4, B5) {
      return B4 + B5;
    },
    LzQVy: function (B4, B5) {
      return B4 - B5;
    },
    UIrqg: function (B4, B5) {
      return B4 !== B5;
    },
    TIPWV: function (B4, B5, B6, B7) {
      return B4(B5, B6, B7);
    },
    ztkcc: function (B4, B5, B6) {
      return B4(B5, B6);
    },
    yFupo: function (B4, B5, B6, B7, B8, B9) {
      return B4(B5, B6, B7, B8, B9);
    },
    BaxxW: function (B4, B5) {
      return B4 + B5;
    },
    pfSIc: function (B4, B5) {
      return B4 + B5;
    },
    ETcCe: function (B4, B5) {
      return B4 - B5;
    },
    zcFfp: function (B4, B5) {
      return B4 - B5;
    },
    twLBd: function (B4, B5) {
      return B4 + B5;
    },
    POpSe: function (B4, B5, B6, B7) {
      return B4(B5, B6, B7);
    },
    ZOWZC: "touchpad",
    aGBot: function (B4, B5) {
      return B4 - B5;
    },
    OZlkK: function (B4, B5, B6, B7, B8, B9, Bp, BK) {
      return B4(B5, B6, B7, B8, B9, Bp, BK);
    },
    NQMFU: function (B4, B5) {
      return B4 - B5;
    },
    fFgSi: function (B4, B5) {
      return B4 * B5;
    },
    EnCIe: function (B4, B5) {
      return B4 * B5;
    },
    jZgRj: "landscape",
    cdSwp: function (B4) {
      return B4();
    },
    wVfHq: function (B4, B5) {
      return B4(B5);
    },
    xIHGZ: function (B4, B5, B6, B7) {
      return B4(B5, B6, B7);
    },
    qBZOi: "modal",
    nxAfQ: function (B4, B5) {
      return B4 + B5;
    },
    NHMsk: "fWGhK",
    NPiDU: "NWHXn",
    TGIGz: function (B4, B5) {
      return B4 / B5;
    },
    qjysy: function (B4, B5) {
      return B4 * B5;
    },
    Wwstd: function (B4, B5) {
      return B4 + B5;
    },
    QAGRS: function (B4, B5) {
      return B4 * B5;
    },
    xyhPb: function (B4, B5) {
      return B4 - B5;
    },
    opGtP: function (B4, B5) {
      return B4 === B5;
    },
    SmXtZ: "cmd",
    yXLLe: function (B4, B5) {
      return B4 - B5;
    },
    XNzJg: function (B4, B5) {
      return B4 * B5;
    },
    nyAVc: function (B4, B5) {
      return B4 - B5;
    },
    XHUYh: function (B4, B5) {
      return B4 + B5;
    },
    quaFT: function (B4, B5) {
      return B4 - B5;
    },
    dnYjn: function (B4, B5) {
      return B4 - B5;
    },
    OiyPm: function (B4, B5) {
      return B4 - B5;
    },
    JJUMV: function (B4, B5) {
      return B4 - B5;
    },
    wkaRV: function (B4, B5) {
      return B4 + B5;
    },
    FtTHT: "hFCTN",
    AkWNN: "cRoCp",
    ofLbv: function (B4, B5) {
      return B4 / B5;
    },
    GKzUo: function (B4, B5) {
      return B4 * B5;
    },
    AsKzJ: function (B4, B5) {
      return B4 + B5;
    },
    kRUwU: function (B4, B5) {
      return B4 * B5;
    },
    FPqVd: function (B4, B5) {
      return B4 + B5;
    },
    BXGuL: function (B4, B5) {
      return B4 / B5;
    },
    dpJlR: function (B4, B5) {
      return B4 - B5;
    },
    oVeEe: function (B4, B5) {
      return B4 + B5;
    },
    RGfsV: function (B4, B5) {
      return B4 - B5;
    },
    ofBOb: function (B4, B5) {
      return B4 + B5;
    },
    zBGFH: "rnd",
    ktOAm: function (B4, B5) {
      return B4 - B5;
    },
    iXiUv: function (B4, B5) {
      return B4 - B5;
    },
    KvBYb: function (B4, B5) {
      return B4 * B5;
    },
    YEpDL: function (B4, B5) {
      return B4 * B5;
    },
    rCZHn: function (B4, B5) {
      return B4 * B5;
    },
    gQJhl: function (B4, B5) {
      return B4 * B5;
    },
    oZZDT: "fnt_main",
    jvYDg: function (B4, B5, B6) {
      return B4(B5, B6);
    },
    ZMdbe: "back",
    qIvYD: function (B4, B5) {
      return B4(B5);
    },
    WaZzm: function (B4, B5, B6, B7) {
      return B4(B5, B6, B7);
    },
    bcEkH: function (B4, B5) {
      return B4 !== B5;
    },
    jXrCF: "pOBkT",
    cydbq: function (B4, B5) {
      return B4 * B5;
    },
    sEMtY: function (B4, B5) {
      return B4 - B5;
    },
    UyEDS: function (B4, B5) {
      return B4 + B5;
    },
    FXXec: function (B4, B5) {
      return B4 / B5;
    },
    MuKss: function (B4, B5) {
      return B4(B5);
    },
    ncWdN: function (B4, B5) {
      return B4 === B5;
    },
    BiPiD: "grid",
    ivubb: "FQqEi",
    BAzFF: "WiIad",
    PlDxm: "paPrM",
    QzdaC: function (B4, B5) {
      return B4 > B5;
    },
    yxyUQ: function (B4, B5) {
      return B4 - B5;
    },
    rDaBm: function (B4, B5) {
      return B4 - B5;
    },
    bUfJR: function (B4, B5) {
      return B4 + B5;
    },
    zDhkE: function (B4, B5) {
      return B4 / B5;
    },
    CbSGw: function (B4, B5) {
      return B4 + B5;
    },
    dNvJu: function (B4, B5) {
      return B4 * B5;
    },
    kokrV: function (B4, B5) {
      return B4 - B5;
    },
    LmOvf: function (B4, B5) {
      return B4 - B5;
    },
    xHxEf: function (B4, B5) {
      return B4 - B5;
    },
    lOwzz: function (B4, B5) {
      return B4 + B5;
    },
    kiusD: function (B4, B5) {
      return B4 * B5;
    },
    pZAuH: function (B4, B5, B6, B7) {
      return B4(B5, B6, B7);
    },
    dqAmt: function (B4, B5) {
      return B4 * B5;
    },
    gDZrB: function (B4, B5) {
      return B4 - B5;
    },
    lNdOy: "dNhDq",
    wItvK: "bbTDC",
    SSoAo: function (B4, B5) {
      return B4 / B5;
    },
    qgmjV: function (B4, B5) {
      return B4 - B5;
    },
    vcxUR: function (B4, B5) {
      return B4 / B5;
    },
    MoSFz: function (B4, B5) {
      return B4 / B5;
    },
    KHnCX: function (B4, B5) {
      return B4(B5);
    },
    TSQPL: function (B4, B5) {
      return B4 * B5;
    },
    RWqjg: function (B4, B5) {
      return B4 - B5;
    },
    VWukk: function (B4, B5) {
      return B4(B5);
    },
    wXHqR: function (B4, B5, B6, B7) {
      return B4(B5, B6, B7);
    },
    hYwlJ: function (B4, B5) {
      return B4 === B5;
    },
    UYJSV: "fZXbi",
    HfReV: function (B4, B5) {
      return B4 + B5;
    },
    LKjiO: function (B4, B5) {
      return B4 - B5;
    },
    KuSWF: function (B4, B5) {
      return B4 - B5;
    },
    jckwE: function (B4, B5) {
      return B4 - B5;
    },
    rVNHc: function (B4, B5) {
      return B4 + B5;
    },
    JTcfc: function (B4, B5) {
      return B4 !== B5;
    },
    MwEyz: function (B4, B5, B6, B7) {
      return B4(B5, B6, B7);
    },
    zfics: function (B4, B5, B6, B7, B8) {
      return B4(B5, B6, B7, B8);
    },
    UOZEj: function (B4, B5) {
      return B4(B5);
    }
  };
  let yA = p.mode === "landscape";
  let yP = p.pillarL;
  let yF = p.pillarR;
  let yk = p.deck;
  let yR = isUTBattle();
  let yQ = X();
  let yO = yQ ? null : phaseOf(yR);
  chips.phase = yO;
  let ye = chips(p, K, yQ ? "modal" : null);
  if (yQ) {
    const B4 = {
      c: true
    };
    navPad(p, K, B4);
    return;
  }
  let yn = battleRegions();
  let Mt = G.charturn;
  let Me = yn.filter(B5 => B5.id.startsWith("bt") && (yR || B5.slot === Mt));
  let Mn = yn.filter(B5 => B5.id.startsWith("cell") && String(B5.label || "").trim());
  let ao = yn.filter(B5 => B5.id.startsWith("tgt"));
  let at = yn.filter(B5 => /^press\d/.test(B5.id));
  let ae = yn.find(B5 => B5.id === "pressany");
  let an = zxColumn(p, K);
  let Ct = yA ? K.lefty ? yF : yP : null;
  let Ce = yA ? K.lefty ? yP : yF : null;
  let Cn = yA ? Ct === yP ? Math.max(Ct.y + 8, ye.bottom + 8) : Ct.y + 8 : 0;
  let B1 = yA ? 0 : an.top;
  let B2 = B5 => Math.max(yk.y + 8, B1 - B5);
  let B3 = true;
  if (yO === "press") {
    {
      B3 = false;
      let B5 = at.length ? at : ae ? [ae] : [];
      let B6 = yA ? Ce : yk;
      let B7 = B6.w - 16;
      let B8 = Math.max(48, Math.min(72, Math.floor((B6.h * 0.6 - (B5.length - 1) * 8) / Math.max(1, B5.length))));
      let B9 = B8 * B5.length + 8 * (B5.length - 1);
      let Bp = B6.y + B6.h - 18 - B9;
      B5.forEach((BK, By) => {
        {
          let Bq = pF("press" + By, "press");
          place(Bq, B6.x + 8, Bp + By * (B8 + 8), B7, B8);
          fitText(Bq, String(BK.label || "PRESS"), B7, B8, "fnt_mainbig", [2, 1]);
          lab(Bq, BK.label || "press");
          bindPress(Bq, () => battleRegions().find(Bi => Bi.id === BK.id) || BK);
          show(Bq);
        }
      });
    }
  } else if (yO === "cmd" && Me.length) {
    if (yR) {
      if (yA) {
        let BK = Math.min(Ct.w - 12, 150);
        let By = 48;
        let BM = 8;
        let Ba = Me.length * By + (Me.length - 1) * BM;
        let BC = Math.max(Cn, Ct.y + Ct.h - 18 - Ba);
        let BB = Ct.x + Math.round((Ct.w - BK) / 2);
        Me.forEach((Bq, Bi) => cmdCell(Bq, Bi, BB, BC + Bi * (By + BM), BK, By, 1));
      } else {
        let Bq = Math.min(170, Math.floor((yk.w - 24 - 8) / 2));
        let Bi = 48;
        let BT = yk.x + Math.round((yk.w - (2 * Bq + 8)) / 2);
        let Bd = B2(2 * Bi + 8);
        Me.forEach((Bo, Bt) => cmdCell(Bo, Bt, BT + Bt % 2 * (Bq + 8), Bd + (Bt / 2 | 0) * (Bi + 8), Bq, Bi, 1));
      }
    } else if (yA) {
      {
        B3 = false;
        let Bo = 62;
        let Bt = 64;
        let Bb = 8;
        let BX = Math.min(Bt, Math.floor((Ce.h - 16 - (Me.length - 1) * Bb) / Me.length));
        let Bz = Me.length * BX + (Me.length - 1) * Bb;
        let BI = Ce.y + Math.round((Ce.h - Bz) / 2);
        let BE = Ce.x + Math.round((Ce.w - Bo) / 2);
        Me.forEach((Bc, BZ) => cmdCell(Bc, BZ, BE, BI + BZ * (BX + Bb), Bo, BX, 2));
        let BS = an.xr;
        let BG = Ct.x + Math.round(Ct.w / 2);
        let Bu = Ct.y + Ct.h - 18 - BS;
        let Bm = pF("bx", "rnd");
        place(Bm, BG - BS, Bu - BS, 2 * BS, 2 * BS);
        fitText(Bm, "X", 2 * BS, 2 * BS, "fnt_main", [2, 1]);
        lab(Bm, "back");
        bindHold(Bm, "b2");
        show(Bm);
        cButton(BG, Bu, BS);
      }
    } else {
      let Bc = Me.length * 62 + (Me.length - 1) * 10;
      let BZ = yk.x + Math.round((yk.w - Bc) / 2);
      let BA = B2(64);
      Me.forEach((BP, BF) => cmdCell(BP, BF, BZ + BF * 72, BA, 62, 64, 2));
    }
  } else if (yO === "grid" && (Mn.length || ao.length)) {
    {
      let Be = ao.length ? ao : Mn;
      if (yA) {
        {
          let BY = Be.length > 6;
          let Bg = BY ? 4 : 6;
          let BJ = Ct.w - 8;
          let Bn = Ct.y + Ct.h - 12 - Cn;
          let BD = Math.max(BY ? 28 : 36, Math.min(48, Math.floor((Bn - (Be.length - 1) * Bg) / Be.length)));
          let BV = Be.length * BD + (Be.length - 1) * Bg;
          let BW = Math.max(Cn, Ct.y + Ct.h - 12 - BV);
          let BN = listScale(Be, BJ - 24, BD);
          Be.forEach((Bv, q0) => gridCell(Bv, q0, Ct.x + 4, BW + q0 * (BD + Bg), BJ, BD, false, BN));
        }
      } else if (ao.length) {
        let Bv = ao.length * 48 + (ao.length - 1) * 6;
        let q0 = B2(Bv);
        let q1 = listScale(ao, Math.round((yk.w - 16) * 0.58), 48);
        ao.forEach((q2, q3) => gridCell(q2, q3, yk.x + 8, q0 + q3 * 54, yk.w - 16, 48, true, q1));
      } else {
        let q2 = Math.min(180, Math.floor((yk.w - 16 - 6) / 2));
        let q3 = yk.x + Math.round((yk.w - (q2 * 2 + 6)) / 2);
        let q4 = Math.ceil(Mn.length / 2);
        let q5 = Be.find(qy => qy.sel) || Be[0];
        let q6 = q5 ? String(q5.desc || "").trim() : "";
        let q7 = q5 ? String(q5.meta || "").trim() : "";
        let q8 = yZ.uVvXl(q6, q7) ? 58 : 0;
        let q9 = q4 * 46 + (q4 - 1) * 6 + q8;
        let qp = B2(q9);
        let qK = listScale(Mn, q2 - 24, 46);
        Mn.forEach((qy, qM) => gridCell(qy, qM, q3 + qM % 2 * (q2 + 6), qp + (qM / 2 | 0) * 52, q2, 46, true, qK));
        if (q8) {
          {
            let qy = pF("desc", "desc");
            place(qy, yk.x + 8, qp + q9 - q8 + 4, yk.w - 16, q8 - 4);
            let qM = q6 + (q7 ? (q6 ? "\n" : "") + q7 : "");
            if (qy.textContent !== qM) {
              qy.textContent = qM;
            }
            pR(qy, "on", true);
            qy._live = true;
          }
        }
      }
    }
  } else {
    waveStick(p, K, an, ye.bottom);
  }
  if (B3) {
    zxButtons(an);
  }
}
a(render, "render");
function waveStick(p, K, ym, yc) {
  let yk = p.mode === "landscape";
  let yR = window.innerWidth;
  let yQ = window.innerHeight;
  let yO = Math.round(K.k * 66);
  let ys;
  let ye;
  let yn;
  if (yk) {
    let Mt = K.lefty ? p.pillarR : p.pillarL;
    let Me = K.lefty ? p.pillarL : p.pillarR;
    if (K.lefty) {
      ys = Me.x + Me.w;
      ye = yR - ys;
    } else {
      ys = 0;
      ye = Me.x;
    }
    let Mn = (Mt === p.pillarL && yc ? yc : Mt.y) + 8;
    let ao = Math.min(yO, Math.floor(Mt.w / 2) - 12, Math.floor((Mt.y + Mt.h - 24 - Mn) / 2));
    yn = {
      x: Mt.x + Math.round(Mt.w / 2),
      y: Mt.y + Mt.h - 24 - ao,
      maxR: ao
    };
  } else {
    if (K.lefty) {
      ys = ym.x1;
      ye = yR - ys;
    } else {
      ys = 0;
      ye = ym.x0;
    }
    let at = p.deck;
    let ae = K.lefty ? yR - ym.x1 : ym.x0;
    let an = Math.min(yO, Math.floor((ae - 38) / 2), Math.floor((at.h - 38) / 2));
    yn = {
      x: K.lefty ? yR - 18 - an - 12 : 18 + an + 12,
      y: at.y + at.h - 18 - an - 12,
      maxR: an
    };
  }
  stickZone(ys, 0, ye, yQ, K, yn);
}
a(waveStick, "waveStick");
function chips(p, K, ym) {
  let yZ = p.mode === "landscape";
  let yA = yZ ? p.pillarL : null;
  let yP = 44;
  let yF = 6;
  let yk = p.canvas ? p.canvas.y : 50;
  let yR = yZ ? yA.x + 6 : 6 + (p.safe ? p.safe.l : 0);
  let yQ = yZ ? yA.y + 6 : Math.max((p.safe ? p.safe.t : 0) + 2, yk - yP - 2);
  let yO = chips.phase === "wave";
  let ys = yR;
  let ye = yQ;
  let yn = Cn => {
    if (yZ && ys + Cn > yA.x + yA.w - 4) {
      ys = yR;
      ye += yP + yF;
    }
    const B2 = {
      x: ys,
      y: ye
    };
    let B3 = B2;
    ys += Cn + yF;
    return B3;
  };
  let Mt = pF("esc", "util");
  let Me = yn(64);
  place(Mt, Me.x, Me.y, 64, yP);
  fitText(Mt, "ESC", 64, yP);
  let ao = yO && ym !== "modal";
  lab(Mt, ao ? "hold to leave the fight" : "leave the fight");
  bindEsc(Mt);
  Mt._holdMode = ao;
  pR(Mt, "hold", ao);
  show(Mt);
  let at = () => {
    if (ym === "modal" || !I || !I("timeline")) {
      return;
    }
    let B1 = pF("rew", "util");
    Me = yn(56);
    place(B1, Me.x, Me.y, 56, yP);
    if (B1._bg !== 1) {
      B1._bg = 1;
      B1.textContent = "";
      B1.style.backgroundImage = arrowURL("left") + "," + arrowURL("left");
      B1.style.backgroundRepeat = "no-repeat";
      B1.style.backgroundPosition = "calc(50% - 7px) center, calc(50% + 7px) center";
      B1.style.backgroundSize = "16px 16px";
    }
    lab(B1, "hold to rewind");
    bindKeyHold(B1, "r");
    show(B1);
  };
  if (yZ) {
    at();
  }
  let ae = pF("tools", "util");
  Me = yn(92);
  place(ae, Me.x, Me.y, 92, yP);
  fitText(ae, "TOOLS", 92, yP);
  lab(ae, "toolbox");
  bindKeyTap(ae, "Tab");
  pR(ae, "recede", false);
  show(ae);
  if (!yZ) {
    at();
  }
  let Ce = false;
  try {
    let Cn = O.__DR && O.__DR.app;
    let B1 = Cn && Cn.getHost && Cn.getHost();
    Ce = !!B1 && !!B1.isDebugOpen && !!B1.isDebugOpen();
  } catch {}
  if (Ce) {
    let B4 = pF("dbg", "util");
    Me = yn(52);
    place(B4, Me.x, Me.y, 52, yP);
    fitText(B4, "F1", 52, yP);
    lab(B4, "debug overlay");
    bindKeyTap(B4, "F1");
    show(B4);
  }
  return {
    bottom: ye + yP
  };
}
a(chips, "chips");
chips.phase = null;
function navPad(p, K, {
  c: ym = false
} = {}) {
  let yA = p.mode === "landscape";
  let yP = 6;
  let yF = (Cn, B1, B2, B3, B4, B5) => {
    let B9 = pF("nv" + Cn, "nav");
    place(B9, B2, B3, B4, B5);
    if (B9._dir !== B1) {
      B9._dir = B1;
      B9.textContent = "";
      B9.style.backgroundImage = arrowURL(B1);
      B9.style.backgroundSize = "22px 22px";
    }
    lab(B9, B1);
    bindHold(B9, B1);
    show(B9);
  };
  let yk = (Cn, B1, B2, B3, B4, B5, B6) => {
    let B9 = pF("nk" + Cn, "rnd");
    place(B9, B3, B4, B5, B6);
    fitText(B9, B1, 40, 40, "fnt_main", [2, 1]);
    lab(B9, B1);
    bindHold(B9, B2);
    show(B9);
  };
  if (yA) {
    let Cn = K.lefty ? p.pillarR : p.pillarL;
    let B1 = K.lefty ? p.pillarL : p.pillarR;
    let B2 = Math.max(44, Math.min(Math.round(K.k * 50), Math.floor((Cn.w - 16 - yP * 2) / 3)));
    let B3 = Cn.x + Math.round(Cn.w / 2);
    let B4 = Cn.y + Cn.h - 18 - B2;
    yF("l", "left", B3 - B2 / 2 - yP - B2, B4, B2, B2);
    yF("d", "down", B3 - B2 / 2, B4, B2, B2);
    yF("r", "right", B3 + B2 / 2 + yP, B4, B2, B2);
    yF("u", "up", B3 - B2 / 2, B4 - yP - B2, B2, B2);
    let B5 = Math.round(K.k * 30);
    let B6 = Math.round(K.k * 25);
    let B7 = B1.x + Math.round(B1.w / 2);
    let B8 = B1.y + B1.h - 18 - B5;
    yk("z", "Z", "b1", B7 - B5, B8 - B5, B5 * 2, B5 * 2);
    let B9 = B8 - B5 - 12 - B6;
    yk("x", "X", "b2", B7 - B6, B9 - B6, B6 * 2, B6 * 2);
    if (ym) {
      let Bp = Math.round(K.k * 22);
      let BK = B9 - B6 - 12 - Bp;
      yk("c", "C", "b3", B7 - Bp, BK - Bp, Bp * 2, Bp * 2);
    }
    return;
  }
  let yR = p.deck;
  if (!yR) {
    return;
  }
  let yQ = yR.w - 16;
  let yO = ym ? 3.2 : 2.2;
  let ys = 1.2;
  let ye = () => Math.floor((yQ - 14 - yP * (ym ? 5 : 4)) / (4 + yO));
  if (ye() < 44) {
    yO -= 0.2;
    ys = 1;
  }
  let Me = Math.max(44, Math.min(Math.round(K.k * 52), ye()));
  let Mn = yR.y + yR.h - 18 - Me;
  let ao = Me * 4 + yP * 3;
  let at = Math.round(yO * Me) + yP * (ym ? 2 : 1);
  let ae = K.lefty ? yR.x + 8 + yQ - ao : yR.x + 8;
  let an = K.lefty ? yR.x + 8 : yR.x + 8 + yQ - at;
  ["left", "up", "down", "right"].forEach((BM, Ba) => yF(BM[0], BM, ae + Ba * (Me + yP), Mn, Me, Me));
  let Ct = an;
  let Ce = Math.round(ys * Me);
  if (ym) {
    yk("c", "C", "b3", Ct, Mn, Me, Me);
    Ct += Me + yP;
  }
  yk("x", "X", "b2", Ct, Mn, Me, Me);
  Ct += Me + yP;
  yk("z", "Z", "b1", Ct, Mn - Math.round((Ce - Me) / 2), Ce, Ce);
}
a(navPad, "navPad");
function renderNav(p, K, ym) {
  navPad(p, K, ym);
}
a(renderNav, "renderNav");
function renderLab(p, K) {
  if (!R.first("obj_heart") || X()) {
    const yP = {
      c: true
    };
    navPad(p, K, yP);
    return;
  }
  waveDeck(p, K);
}
a(renderLab, "renderLab");
function waveDeck(p, K, ym = false) {
  let yA = zxColumn(p, K);
  let yP = document.querySelector("#dr-fs.on");
  waveStick(p, K, yA, yP ? yP.getBoundingClientRect().bottom : 0);
  zxButtons(yA, ym);
}
a(waveDeck, "waveDeck");
var tutDodging = a(() => {
  try {
    let yA = I && I("tutorial");
    return !!yA && !!yA.dodging && !!yA.dodging();
  } catch {
    return false;
  }
}, "tutDodging");
function tapKey(p) {
  k(p, true);
  k(p, false);
}
a(tapKey, "tapKey");
function runsOffered(p) {
  let yZ = I("runs");
  if (!yZ || !yZ.openRun || !p || p.menuno !== 0 || p.listMode || typeof p.cOptions != "function") {
    return false;
  }
  let yP = null;
  try {
    yP = p.fightList()[p.fightsel];
  } catch {
    yP = null;
  }
  return !!yP && !yP.mode;
}
a(runsOffered, "runsOffered");
function renderMenu(p, K) {
  const ym = {
    ANAuw: function (B9, Bp) {
      return B9 >= Bp;
    },
    ANnVC: function (B9, Bp) {
      return B9 < Bp;
    },
    WGoQd: function (B9, Bp) {
      return B9 + Bp;
    },
    wVLKD: function (B9, Bp) {
      return B9 === Bp;
    },
    JKFRz: "LOaRE",
    cMKOS: "Fngmc",
    uOGyp: function (B9, Bp, BK) {
      return B9(Bp, BK);
    },
    SttCe: function (B9, Bp, BK, By, BM, Ba) {
      return B9(Bp, BK, By, BM, Ba);
    },
    FxxSD: function (B9, Bp, BK, By, BM, Ba, BC) {
      return B9(Bp, BK, By, BM, Ba, BC);
    },
    KwceE: "press",
    EccDC: "fnt_mainbig",
    gZCMB: "fnt_main",
    wnftc: function (B9, Bp, BK) {
      return B9(Bp, BK);
    },
    gjNWd: function (B9, Bp) {
      return B9(Bp);
    },
    NfCfB: "keydown",
    hABpU: "Escape",
    eVKcB: "keyup",
    EfAdg: "IvgAJ",
    NtGGZ: "bvqwi",
    Xobup: function (B9, Bp) {
      return B9 !== Bp;
    },
    GxuCo: "bKbfB",
    QDnRS: "HHpXr",
    eYoKm: "list",
    xXWZV: function (B9) {
      return B9();
    },
    lAkvS: "NwkIz",
    gjQra: "rGbcc",
    ekfpq: "dr-rows",
    eilhB: function (B9, Bp, BK) {
      return B9(Bp, BK);
    },
    hzeze: function (B9, Bp) {
      return B9 + Bp;
    },
    ydwKR: "nav",
    lBBXx: function (B9, Bp, BK, By, BM, Ba) {
      return B9(Bp, BK, By, BM, Ba);
    },
    jcKzd: "22px 22px",
    FOwLG: function (B9, Bp, BK) {
      return B9(Bp, BK);
    },
    mYYdQ: function (B9, Bp) {
      return B9 + Bp;
    },
    VOJhz: function (B9, Bp) {
      return B9 - Bp;
    },
    DKfZu: function (B9, Bp) {
      return B9 === Bp;
    },
    UengX: function (B9, Bp) {
      return B9 / Bp;
    },
    znYgM: function (B9, Bp) {
      return B9 / Bp;
    },
    jaNMX: function (B9, Bp) {
      return B9 - Bp;
    },
    ZfCLl: function (B9, Bp) {
      return B9 - Bp;
    },
    LoZwm: function (B9, Bp) {
      return B9 + Bp;
    },
    qPVxP: function (B9, Bp) {
      return B9 + Bp;
    },
    EAjxV: function (B9, Bp) {
      return B9 - Bp;
    },
    YEnKT: function (B9, Bp) {
      return B9 - Bp;
    },
    PbfsI: function (B9, Bp) {
      return B9 - Bp;
    },
    yFdxK: function (B9, Bp) {
      return B9 - Bp;
    },
    Fvtgr: function (B9, Bp) {
      return B9 + Bp;
    },
    BoqAF: function (B9, Bp) {
      return B9 + Bp;
    },
    rihjH: function (B9, Bp) {
      return B9 + Bp;
    },
    VepSF: function (B9, Bp) {
      return B9 + Bp;
    },
    mqzRt: function (B9, Bp) {
      return B9 >= Bp;
    },
    YBTMR: function (B9, Bp) {
      return B9 - Bp;
    },
    VNUeD: function (B9, Bp) {
      return B9 * Bp;
    },
    kDEbG: function (B9, Bp, BK, By, BM, Ba, BC, BB) {
      return B9(Bp, BK, By, BM, Ba, BC, BB);
    },
    dcWmB: "mgames",
    wWIsQ: "GAMES",
    rryto: function (B9, Bp) {
      return B9 | Bp;
    },
    QdJkq: function (B9, Bp) {
      return B9 | Bp;
    },
    YLHQt: function (B9, Bp, BK) {
      return B9(Bp, BK);
    },
    bitXj: function (B9, Bp) {
      return B9 | Bp;
    },
    SpuQF: function (B9, Bp) {
      return B9 | Bp;
    },
    BrUTn: function (B9, Bp) {
      return B9 | Bp;
    },
    oUVzC: function (B9, Bp) {
      return B9(Bp);
    },
    QIHOM: "stick",
    JXARP: "fixed",
    DjYJe: function (B9, Bp) {
      return B9(Bp);
    },
    VVHlt: function (B9, Bp) {
      return B9 !== Bp;
    },
    pVCQJ: function (B9, Bp) {
      return B9(Bp);
    },
    wHkoH: "landscape",
    rGfZs: function (B9, Bp) {
      return B9 === Bp;
    },
    WgmKp: function (B9, Bp) {
      return B9 === Bp;
    },
    uAYmW: function (B9, Bp) {
      return B9(Bp);
    },
    wDJUf: "games",
    QWWqE: "START",
    PlxJz: "ADD",
    yWZxI: function (B9, Bp) {
      return B9 || Bp;
    },
    Rbwys: function (B9, Bp) {
      return B9 === Bp;
    },
    Ztxhl: function (B9, Bp) {
      return B9 === Bp;
    },
    wEcUX: "mtools",
    PrqnM: "TOOLS",
    XbSRe: function (B9, Bp) {
      return B9 + Bp;
    },
    urDNI: function (B9, Bp) {
      return B9 + Bp;
    },
    zTvNs: function (B9, Bp) {
      return B9 && Bp;
    },
    USCRH: function (B9, Bp, BK, By, BM, Ba, BC, BB) {
      return B9(Bp, BK, By, BM, Ba, BC, BB);
    },
    thqeN: function (B9, Bp) {
      return B9 + Bp;
    },
    swWoT: function (B9, Bp) {
      return B9 + Bp;
    },
    fCSFq: function (B9, Bp) {
      return B9 + Bp;
    },
    GCZpq: function (B9, Bp) {
      return B9 - Bp;
    },
    GBTNw: function (B9, Bp) {
      return B9 + Bp;
    },
    xNZvU: function (B9, Bp) {
      return B9 - Bp;
    },
    HbayE: function (B9, Bp, BK, By, BM, Ba, BC, BB, Bq) {
      return B9(Bp, BK, By, BM, Ba, BC, BB, Bq);
    },
    GOzrq: "mstart",
    evsjE: function (B9, Bp) {
      return B9 - Bp;
    },
    cJbRb: function (B9, Bp) {
      return B9 && Bp;
    },
    RhmGc: function (B9, Bp, BK, By, BM, Ba, BC, BB) {
      return B9(Bp, BK, By, BM, Ba, BC, BB);
    },
    UFRir: "mopts",
    PElyn: "OPTIONS",
    rrOaT: function (B9, Bp) {
      return B9 - Bp;
    },
    hQtxk: function (B9, Bp, BK, By, BM, Ba, BC, BB) {
      return B9(Bp, BK, By, BM, Ba, BC, BB);
    },
    ahxre: "mback",
    omQby: "BACK",
    reQdk: function (B9, Bp) {
      return B9 - Bp;
    },
    lGVmS: "TyDVw",
    NDMcq: function (B9, Bp) {
      return B9 + Bp;
    },
    LjYNY: function (B9, Bp) {
      return B9 - Bp;
    },
    TSWag: function (B9, Bp) {
      return B9 - Bp;
    },
    QIGsV: function (B9, Bp) {
      return B9 + Bp;
    },
    XbZoD: "msearch",
    gZbUX: "SEARCH",
    DHHvf: function (B9, Bp) {
      return B9 - Bp;
    },
    YCaEg: function (B9, Bp, BK, By, BM, Ba, BC, BB) {
      return B9(Bp, BK, By, BM, Ba, BC, BB);
    },
    nrMoz: "mtabl",
    BSjXj: function (B9, Bp) {
      return B9 - Bp;
    },
    TcrEX: function (B9, Bp) {
      return B9 - Bp;
    },
    mokoz: function (B9, Bp, BK, By, BM, Ba, BC, BB) {
      return B9(Bp, BK, By, BM, Ba, BC, BB);
    },
    bqPfc: "mtabr",
    hsfOU: function (B9, Bp) {
      return B9 + Bp;
    },
    FNzIV: function (B9, Bp) {
      return B9 - Bp;
    },
    MERwG: function (B9, Bp) {
      return B9 - Bp;
    },
    zvfXv: function (B9, Bp) {
      return B9 - Bp;
    },
    GnsKi: "gOEzt",
    nFdAb: function (B9, Bp) {
      return B9 / Bp;
    },
    UIeRI: function (B9, Bp) {
      return B9 - Bp;
    },
    XsMXx: function (B9, Bp) {
      return B9 - Bp;
    },
    lxxCn: function (B9, Bp) {
      return B9 * Bp;
    },
    DwAON: function (B9, Bp) {
      return B9 + Bp;
    },
    rvoeK: function (B9, Bp) {
      return B9 - Bp;
    },
    lMBVv: function (B9, Bp, BK, By, BM, Ba) {
      return B9(Bp, BK, By, BM, Ba);
    },
    psgDI: "left",
    MBKHs: function (B9, Bp) {
      return B9 - Bp;
    },
    KAXIp: function (B9, Bp, BK, By, BM, Ba) {
      return B9(Bp, BK, By, BM, Ba);
    },
    BXOSb: "down",
    BvURI: function (B9, Bp) {
      return B9 - Bp;
    },
    ApkZq: function (B9, Bp) {
      return B9 / Bp;
    },
    sdixF: function (B9, Bp, BK, By, BM, Ba) {
      return B9(Bp, BK, By, BM, Ba);
    },
    tZNbU: "right",
    zwXUE: function (B9, Bp) {
      return B9 + Bp;
    },
    jlljo: function (B9, Bp) {
      return B9 / Bp;
    },
    eCEQf: function (B9, Bp) {
      return B9 - Bp;
    },
    PJCUH: function (B9, Bp) {
      return B9 - Bp;
    },
    JARzA: function (B9, Bp) {
      return B9 + Bp;
    },
    FISoV: function (B9, Bp) {
      return B9 + Bp;
    },
    kymDi: function (B9, Bp) {
      return B9 - Bp;
    },
    PYNuv: function (B9, Bp, BK, By, BM, Ba, BC, BB) {
      return B9(Bp, BK, By, BM, Ba, BC, BB);
    },
    ttFhk: function (B9, Bp) {
      return B9 - Bp;
    },
    DMQWR: function (B9, Bp) {
      return B9 || Bp;
    },
    JgtLz: function (B9, Bp, BK, By, BM, Ba, BC, BB) {
      return B9(Bp, BK, By, BM, Ba, BC, BB);
    },
    sLyzP: function (B9, Bp, BK, By, BM, Ba, BC, BB) {
      return B9(Bp, BK, By, BM, Ba, BC, BB);
    },
    RfOYR: function (B9, Bp) {
      return B9 + Bp;
    },
    CAKCN: function (B9, Bp) {
      return B9 + Bp;
    },
    NTffB: function (B9, Bp) {
      return B9 - Bp;
    },
    VwwkK: function (B9, Bp) {
      return B9 * Bp;
    },
    eZRAL: function (B9, Bp) {
      return B9 + Bp;
    },
    iEhAT: function (B9, Bp) {
      return B9 === Bp;
    },
    fOCRf: "cookt",
    nTaQg: "FQcxt",
    NSVOO: function (B9, Bp) {
      return B9 / Bp;
    },
    JOMDj: function (B9, Bp) {
      return B9 - Bp;
    },
    eDDJx: function (B9, Bp) {
      return B9 * Bp;
    },
    lMdJc: function (B9, Bp) {
      return B9 - Bp;
    },
    CHFMY: function (B9, Bp) {
      return B9 + Bp;
    },
    rPzVO: function (B9, Bp) {
      return B9 * Bp;
    },
    dcRuA: function (B9, Bp) {
      return B9 && Bp;
    },
    TwDHo: function (B9, Bp) {
      return B9(Bp);
    },
    IxUQV: function (B9, Bp) {
      return B9 - Bp;
    },
    Ohmfq: function (B9, Bp) {
      return B9 && Bp;
    },
    rOaAj: function (B9, Bp) {
      return B9 - Bp;
    },
    VzDVL: function (B9, Bp) {
      return B9 + Bp;
    },
    AabhJ: function (B9, Bp) {
      return B9 - Bp;
    },
    MYpQx: function (B9, Bp) {
      return B9 === Bp;
    },
    jRuUn: "pADFI",
    pSxAh: "APLoL",
    AetGl: function (B9, Bp) {
      return B9 - Bp;
    },
    EbFru: function (B9, Bp) {
      return B9 - Bp;
    },
    orjHR: function (B9, Bp) {
      return B9 - Bp;
    },
    uPeog: function (B9, Bp) {
      return B9 + Bp;
    },
    sIPCT: function (B9, Bp) {
      return B9 + Bp;
    },
    RVgHh: function (B9, Bp) {
      return B9 + Bp;
    },
    NddNK: function (B9, Bp) {
      return B9 + Bp;
    },
    pqJna: function (B9, Bp) {
      return B9 >= Bp;
    },
    jsYpU: function (B9, Bp) {
      return B9 - Bp;
    },
    Ssjcn: function (B9, Bp) {
      return B9 - Bp;
    },
    GotaF: function (B9, Bp) {
      return B9 * Bp;
    },
    ZRDtD: function (B9, Bp, BK, By, BM, Ba, BC, BB) {
      return B9(Bp, BK, By, BM, Ba, BC, BB);
    }
  };
  let yc = O.DR;
  let yZ = yc && yc.menu;
  if (!yZ) {
    return;
  }
  const yP = {
    key: "Tab",
    bubbles: true
  };
  let yF = p.mode === "landscape";
  let yk = yZ.menuno === 0;
  let yR = yZ.menuno === 6;
  let yQ = (B9, Bp, BK, By, BM, Ba, BC, BB = "util") => {
    {
      let Bt = pF(B9, BB);
      place(Bt, BK, By, BM, Ba);
      fitText(Bt, Bp, BM, Ba, BB === "press" ? "fnt_mainbig" : "fnt_main", [2, 1]);
      lab(Bt, Bp.toLowerCase());
      bindTap(Bt, () => ({
        act: BC
      }));
      show(Bt);
      return Bt;
    }
  };
  let yO = B9 => {
    if (yR && yZ.editor) {
      yZ.editor.cycleTab(B9);
    } else if (yk) {
      yZ.cycleFightTab(B9);
    }
  };
  let ys = () => {
    {
      if (yR && yZ.editor) {
        yZ.editor.searching = true;
        yZ.editor.zone = "list";
      } else {
        yZ.zone = "list";
        yZ.searching = true;
      }
      P.textFocus = true;
      focusText();
    }
  };
  let ye = () => {
    if (yk) {
      yZ.zone = "list";
      if (yZ.searching) {
        yZ.searching = false;
        P.textFocus = false;
      }
    }
    tapKey("b1");
  };
  let yn = () => window.dispatchEvent(new KeyboardEvent("keydown", yP));
  let Mt = I("games");
  let Me = Mt ? () => Mt.open() : null;
  let Mn = yk ? "START" : yR ? "ADD" : "OK";
  let ao = 48;
  let at = 8;
  let ae = (() => {
    {
      let By = document.getElementById("dr-rows");
      return !!By && !!By.classList.contains("on");
    }
  })();
  let an = ae && ym.yWZxI(yk, yR);
  let Ct = yZ.menuno === 1 || yZ.menuno === 2 || yZ.menuno === 3;
  let Ce = (B9, Bp, BK, By, BM) => {
    let BB = pF("ma" + B9[0], "nav");
    place(BB, Bp, BK, By, BM);
    if (BB._dir !== B9) {
      BB._dir = B9;
      BB.textContent = "";
      BB.style.backgroundImage = arrowURL(B9);
      BB.style.backgroundSize = "22px 22px";
    }
    lab(BB, B9);
    bindHold(BB, B9);
    show(BB);
  };
  if (yF) {
    let B9 = K.lefty ? p.pillarR : p.pillarL;
    let Bp = K.lefty ? p.pillarL : p.pillarR;
    yQ("mtools", "TOOLS", B9.x + 6, B9.y + 6, Math.min(96, B9.w - 12), 44, yn);
    if (ym.zTvNs(Me, yk)) {
      yQ("mgames", "GAMES", B9.x + 6, B9.y + 6 + 44 + at, Math.min(96, B9.w - 12), 44, Me);
    }
    let BK = Bp.w - 12;
    let By = Bp.x + 6;
    let BM = Bp.y + Bp.h - 18;
    yQ("mstart", Mn, By, BM - 56, BK, 56, ye, "press");
    if (ym.cJbRb(ae, yk)) {
      if (runsOffered(yZ)) {
        yQ("mopts", "OPTIONS", By, BM - 56 - at - ao, BK, ao, () => yZ.cOptions(yZ.fightList(), yZ.fightsel));
      }
    } else {
      yQ("mback", "BACK", By, BM - 56 - at - ao, BK, ao, () => tapKey("b2"));
    }
    if (ym.yWZxI(yk, yR) && !an) {
      {
        let Ba = B9.w - 12;
        let BC = B9.x + 6;
        let BB = Math.floor((Ba - at) / 2);
        let Bq = B9.y + B9.h - 18;
        yQ("msearch", "SEARCH", BC, Bq - ao, Ba, ao, ys);
        yQ("mtabl", "<", BC, Bq - ao - at - ao, BB, ao, () => yO(-1));
        yQ("mtabr", ">", BC + BB + at, Bq - ao - at - ao, BB, ao, () => yO(1));
      }
    }
    if (Ct) {
      {
        let Bt = Math.max(40, Math.min(50, Math.floor((B9.w - 12 - 2 * at) / 3)));
        let Bb = B9.x + Math.round(B9.w / 2);
        let BX = B9.y + B9.h - 18 - Bt;
        Ce("left", Bb - Bt / 2 - at - Bt, BX, Bt, Bt);
        Ce("down", Bb - Bt / 2, BX, Bt, Bt);
        Ce("right", Bb + Bt / 2 + at, BX, Bt, Bt);
        Ce("up", Bb - Bt / 2, BX - at - Bt, Bt, Bt);
      }
    }
    return;
  }
  let Cn = p.deck;
  if (!Cn) {
    return;
  }
  let B1 = Cn.x + 8;
  let B2 = Cn.w - 16;
  let B3 = Cn.y + Cn.h - 18;
  let B4 = K.lefty ? B1 : B1 + B2 - 120;
  let B5 = K.lefty ? B1 + B2 - 96 : B1;
  yQ("mstart", Mn, B4, B3 - 56, 120, 56, ye, "press");
  if (!ym.zTvNs(ae, yk)) {
    yQ("mback", "BACK", B5, B3 - ao, 96, ao, () => tapKey("b2"));
  }
  let B7 = ym.cJbRb(an, yk) ? B3 - ao : B3 - 56 - at - ao;
  if (ym.DMQWR(yk, yR) && !an) {
    yQ("mtabl", "<", B1, B7, 48, ao, () => yO(-1));
    yQ("mtabr", ">", B1 + 48 + at, B7, 48, ao, () => yO(1));
    yQ("msearch", "SEARCH", B1 + 2 * (48 + at), B7, B2 - 2 * (48 + at) - 96 - at, ao, ys);
  }
  if (Ct) {
    {
      let BS = Math.max(40, Math.min(52, Math.floor((B2 - 96 - 4 * at) / 4)));
      let BG = K.lefty ? B1 + B2 - 4 * BS - 3 * at : B1;
      ["left", "up", "down", "right"].forEach((Bu, Bm) => Ce(Bu, BG + Bm * (BS + at), B7 + ao - BS, BS, BS));
    }
  }
  if (ym.dcRuA(an, yk) && runsOffered(yZ)) {
    let Bu = [["mtools", "TOOLS", yn], ...(Me ? [["mgames", "GAMES", Me]] : []), ["mopts", "OPTIONS", () => yZ.cOptions(yZ.fightList(), yZ.fightsel)]];
    let Bm = Math.max(44, Math.min(96, Math.floor((B2 - 120 - at - (Bu.length - 1) * at) / Bu.length)));
    Bu.forEach(([Bc, BZ, BA], BP) => yQ(Bc, BZ, K.lefty ? B1 + B2 - Bm - BP * (Bm + at) : B1 + BP * (Bm + at), B3 - ao, Bm, ao, BA));
    return;
  }
  yQ("mtools", "TOOLS", ym.Ohmfq(an, yk) ? K.lefty ? B1 + B2 - 96 : B1 : Ct && K.lefty ? B1 : B1 + B2 - 96, B7, 96, ao, yn);
  if (ym.Ohmfq(Me, yk)) {
    {
      let BA = an ? K.lefty ? B1 + B2 - 96 - at - 96 : B1 + 96 + at : K.lefty ? B1 + 120 + at : B1 + 96 + at;
      if (an || B2 - 96 - 120 - 2 * at >= 96) {
        yQ("mgames", "GAMES", BA, B3 - ao, 96, ao, Me);
      }
    }
  }
}
a(renderMenu, "renderMenu");
function cmdCell(p, K, ym, yc, yZ, yA, yP) {
  let yQ = pF("cmd" + K, p.ut ? "cmd ut" : "cmd");
  place(yQ, ym, yc, yZ, yA);
  let ys = p.frame !== undefined ? p.frame : p.sel ? 1 : 0;
  let ye = p.spr + ":" + ys + ":" + yP;
  if (yQ._spr !== ye) {
    yQ._spr = ye;
    drSprite(yQ, p.spr, ys, yP);
  }
  pR(yQ, "sel", !!p.sel);
  pR(yQ, "off", !!p.off);
  lab(yQ, p.label || p.id);
  if (yQ._role !== 1) {
    yQ._role = 1;
    yQ.setAttribute("role", "button");
  }
  bindTap(yQ, () => battleRegions().find(yn => yn.id === p.id) || p);
  show(yQ);
}
a(cmdCell, "cmdCell");
function listScale(p, K, ym) {
  for (let yF of p) {
    let yk = textInfo(String(yF.label || ""), "fnt_mainbig", 2, p1.fg);
    if (!yk || yk.w > K || yk.h > ym - 8) {
      return 1;
    }
  }
  return 2;
}
a(listScale, "listScale");
function gridCell(p, K, ym, yc, yZ, yA, yP, yF) {
  let yQ = pF("cell" + K, "cell");
  place(yQ, ym, yc, yZ, yA);
  if (!yQ._lb) {
    yQ._lb = document.createElement("span");
    yQ._lb.className = "lb";
    yQ._mt = document.createElement("span");
    yQ._mt.className = "mt";
    yQ.appendChild(yQ._lb);
    yQ.appendChild(yQ._mt);
  }
  let ye = yP ? String(p.meta || "") : "";
  let yn = p.metaDim ? p1.dim : p1.warn;
  let Mt = ye ? Math.round(yZ * 0.38) : 0;
  let Me = p.off ? p1.dim : p.sel ? p1.sel : p1.fg;
  let Mn = (p.label || "") + "|" + ye + "|" + Me + "|" + yZ + "|" + yF;
  if (yQ._sig !== Mn) {
    yQ._sig = Mn;
    drLabel(yQ._lb, p.label || "", {
      col: Me,
      align: "left",
      max: Math.max(24, yZ - 24 - Mt),
      scales: [yF || 2, 1]
    });
    drLabel(yQ._mt, ye, {
      col: yn,
      align: "right",
      max: Mt,
      scales: [1]
    });
  }
  pR(yQ, "sel", !!p.sel);
  pR(yQ, "off", !!p.off);
  lab(yQ, (p.label || "") + (p.meta ? " " + p.meta : ""));
  bindTap(yQ, () => battleRegions().find(ao => ao.id === p.id) || p);
  show(yQ);
}
a(gridCell, "gridCell");
function toGame(p, K) {
  let yF = p.getBoundingClientRect();
  if (!yF.width || !yF.height) {
    return null;
  }
  let yk = p.width / Q;
  let yR = p.height / Q;
  let yQ = (K.clientX - yF.left) * (yk / yF.width);
  let yO = (K.clientY - yF.top) * (yR / yF.height);
  if (G.roomScale === 2) {
    yQ /= 2;
    yO /= 2;
  }
  return {
    x: yQ,
    y: yO,
    inside: yQ >= 0 && yO >= 0 && yQ < yk * (G.roomScale === 2 ? 0.5 : 1) && yO < yR
  };
}
a(toGame, "toGame");
const KQ = {
  x: 0,
  y: 0,
  inside: false,
  down: false
};
KQ.kind = "mouse";
KQ.id = -1;
KQ.downX = 0;
KQ.downY = 0;
KQ.moved = false;
KQ.wheel = 0;
KQ.dragY = 0;
KQ.fling = 0;
var KO = {
  cur: [],
  prev: [],
  mark: 0,
  prevMark: 0,
  marked: false,
  begin() {
    this.prev = this.cur;
    this.prevMark = this.mark;
    this.cur = [];
    this.mark = 0;
    this.marked = false;
  },
  rect(p, K, ym, yc, yZ, yA) {
    const yP = {
      id: p,
      x: K,
      y: ym,
      w: yc
    };
    yP.h = yZ;
    yP.on = yA;
    this.cur.push(yP);
  },
  markTop() {
    if (this.marked) {
      this.cur.length = this.mark;
    } else {
      this.mark = this.cur.length;
    }
    this.marked = true;
  },
  at(p, K, ym = false) {
    let yk = ym ? this.prevMark : 0;
    for (let yR = this.prev.length - 1; yR >= yk; yR--) {
      let yQ = this.prev[yR];
      if (p >= yQ.x && K >= yQ.y && p < yQ.x + yQ.w && K < yQ.y + yQ.h) {
        return yQ;
      }
    }
    return null;
  },
  hover(p) {
    return Ks.kind === "mouse" && Ks.inside && !!(this.at(Ks.x, Ks.y) || {}).id && this.at(Ks.x, Ks.y).id === p;
  }
};
var Ks = KQ;
var Kw = 0.9;
var Kx = 2;
var Kl = [];
var nowMs = a(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "nowMs");
var Kj = [];
var KL = null;
var tap = a(p => {
  k(p, true);
  k(p, false);
}, "tap");
var KH = 10;
function initPointer(p, K) {
  const yZ = {
    passive: false
  };
  let yA = (yR, yQ) => p.addEventListener(yR, yQ, yZ);
  yA("pointerdown", yR => {
    {
      let Mt = toGame(p, yR);
      if (Mt) {
        yR.preventDefault();
        try {
          {
            p.setPointerCapture(yR.pointerId);
          }
        } catch {}
        Ks.x = Mt.x;
        Ks.y = Mt.y;
        Ks.inside = Mt.inside;
        Ks.kind = yR.pointerType || "mouse";
        Ks.down = true;
        Ks.id = yR.pointerId;
        Ks.downX = Mt.x;
        Ks.downY = Mt.y;
        Ks.moved = false;
        Ks._lastY = Mt.y;
        Ks.dragY = 0;
        Ks.fling = 0;
        Kl = [{
          t: nowMs(),
          y: Mt.y
        }];
        if (yR.button === 2) {
          {
            tap("b2");
            return;
          }
        }
        if (textModalUp()) {
          if (document.activeElement !== KL) {
            focusText(false);
          }
          return;
        }
        try {
          {
            const Mn = {
              preventScroll: true
            };
            p.focus(Mn);
          }
        } catch {
          {
            p.focus();
          }
        }
      }
    }
  });
  yA("pointermove", yR => {
    {
      let yn = toGame(p, yR);
      if (yn) {
        Ks.x = yn.x;
        Ks.y = yn.y;
        Ks.inside = yn.inside;
        if (yR.pointerType) {
          Ks.kind = yR.pointerType;
        }
        if (Ks.down && yR.pointerId === Ks.id && (Math.abs(yn.x - Ks.downX) > KH || Math.abs(yn.y - Ks.downY) > KH)) {
          Ks.moved = true;
        }
        if (Ks.down && yR.pointerId === Ks.id) {
          {
            Ks.dragY += yn.y - (Ks._lastY === undefined ? yn.y : Ks._lastY);
            let Mt = nowMs();
            const Me = {
              t: Mt,
              y: yn.y
            };
            for (Kl.push(Me); Kl.length > 2 && Mt - Kl[0].t > 100;) {
              Kl.shift();
            }
          }
        }
        Ks._lastY = yn.y;
      }
    }
  });
  yA("pointerup", yR => {
    {
      let Mt = toGame(p, yR);
      if (Mt && (yR.preventDefault(), Ks.down && yR.pointerId === Ks.id)) {
        Ks.down = false;
        if (!Ks.moved && yR.button !== 2) {
          Kj.push({
            x: Mt.x,
            y: Mt.y,
            button: yR.button || 0,
            kind: yR.pointerType || "mouse"
          });
        }
        if (Ks.moved && yR.pointerType !== "mouse" && Kl.length > 1) {
          {
            let at = Kl[0];
            let ae = Kl[Kl.length - 1];
            let an = ae.t - at.t;
            if (an > 0 && nowMs() - ae.t < 100) {
              {
                let Ct = (ae.y - at.y) / an * 33.333333333333336;
                if (Math.abs(Ct) >= Kx) {
                  Ks.fling = Math.max(-120, Math.min(120, Ct));
                }
              }
            }
          }
        }
        Kl = [];
      }
    }
  });
  let yF = () => {
    Ks.down = false;
    Ks.moved = false;
    Ks.fling = 0;
    Kl = [];
    y5();
  };
  yA("pointercancel", yF);
  p.addEventListener("pointerleave", yR => {
    if (yR.pointerType === "mouse") {
      Ks.inside = false;
    }
  });
  p.addEventListener("contextmenu", yR => yR.preventDefault());
  window.addEventListener("blur", yF);
  yA("wheel", yR => {
    {
      yR.preventDefault();
      Ks.wheel += yR.deltaY;
    }
  });
  KL = document.getElementById("textin");
  if (KL) {
    {
      let yQ = () => {
        {
          let yn = KL.value;
          let Mt = y1;
          let Me = 0;
          while (Me < yn.length && Me < Mt.length && yn[Me] === Mt[Me]) {
            Me++;
          }
          if (Mt.length > Me) {
            P.backspaceCount = (P.backspaceCount || 0) + (Mt.length - Me);
          }
          for (let Mn of yn.slice(Me)) {
            if (/[ -~]/.test(Mn)) {
              P.typedQueue.push(Mn.toLowerCase());
            }
          }
          y1 = yn;
        }
      };
      KL.addEventListener("input", yO => {
        yQ();
        if (!yO.isComposing) {
          resetText();
        }
      });
      KL.addEventListener("compositionend", () => {
        {
          yQ();
          resetText();
        }
      });
      KL.addEventListener("keydown", yO => {
        {
          if (yO.key === "Enter" || yO.key === "Escape") {
            yO.preventDefault();
            blurText();
          }
        }
      });
      KL.addEventListener("blur", () => {
        if (!textModalUp()) {
          if (P.textFocus) {
            P.textFocus = false;
          }
        }
      });
    }
  }
  initTouchPad(p);
  initFocus(p);
}
a(initPointer, "initPointer");
var Kr = new Set(["r", "w", "t", "n", "l", "tab", "-", "=", "+", "0", "c", "v", "x", "pageup", "pagedown", ..."123456789"]);
var Kh = new Set(["t", "i", "j", "c", "r", "n", "w", "delete"]);
var KY = new Set(["Tab", " ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End", "Backspace", "/", "'", "F1", "F2", "F3", "F4", "F7", "F8", "F9", "F10", "Alt", "ContextMenu"]);
function appOwnsKey(p) {
  let yP = p.key || "";
  if (p.ctrlKey || p.metaKey) {
    let yF = yP.toLowerCase();
    if (yF === "control" || yF === "meta" || yF === "shift" || yF === "alt") {
      return false;
    } else if (p.shiftKey) {
      return !Kh.has(yF);
    } else {
      return !Kr.has(yF);
    }
  }
  if (p.altKey) {
    return yP === "Alt" || yP === "F10";
  } else {
    return KY.has(yP) || p.shiftKey && yP === "F10";
  }
}
a(appOwnsKey, "appOwnsKey");
var KJ = null;
var Kn = null;
function focusApp() {
  if (Kn) {
    if (textModalUp() && KL) {
      if (document.activeElement !== KL) {
        focusText(false);
      }
      return;
    }
    if (document.activeElement !== KL || !P.textFocus) {
      try {
        const yZ = {
          preventScroll: true
        };
        Kn.focus(yZ);
      } catch {
        Kn.focus();
      }
    }
  }
}
a(focusApp, "focusApp");
function initFocus(p) {
  if (!(typeof document > "u") && !!document.addEventListener) {
    Kn = p;
    window.addEventListener("keydown", yA => {
      let yk = yA.target;
      if ((!yk || !(yk.tagName === "INPUT") && !(yk.tagName === "TEXTAREA") || !(yk !== KL)) && (!(yk === KL) || !key1(yA) || !!yA.ctrlKey || !!yA.metaKey)) {
        if (appOwnsKey(yA)) {
          yA.preventDefault();
        }
      }
    }, true);
    window.addEventListener("keyup", yA => {
      {
        if (yA.key === "Alt" || yA.key === "F10") {
          yA.preventDefault();
        }
      }
    }, true);
    document.addEventListener("pointerdown", yA => {
      {
        let yR = yA.target;
        if (!(yR === p) && !(yR === KL) && (!yR || !(yR.tagName === "INPUT") && !(yR.tagName === "TEXTAREA") && !(yR.tagName === "BUTTON") && !(yR.tagName === "A")) && (!KJ || !(yR === KJ) && !KJ.contains(yR))) {
          setTimeout(focusApp, 0);
        }
      }
    });
    document.addEventListener("focusout", () => setTimeout(() => {
      if (document.hasFocus() && (!document.activeElement || document.activeElement === document.body)) {
        focusApp();
      }
      syncHint();
    }, 0));
    window.addEventListener("focus", () => {
      setTimeout(() => {
        if (!document.activeElement || document.activeElement === document.body) {
          focusApp();
        }
        syncHint();
      }, 0);
    });
    window.addEventListener("blur", () => setTimeout(syncHint, 0));
    KJ = document.getElementById("focushint");
    if (KJ) {
      {
        let yA = yP => {
          yP.preventDefault();
          yP.stopPropagation();
          focusApp();
          syncHint(true);
        };
        KJ.addEventListener("pointerdown", yA);
        KJ.addEventListener("click", yP => {
          {
            yP.preventDefault();
            yP.stopPropagation();
          }
        });
      }
    }
    focusApp();
    setTimeout(() => {
      focusApp();
      syncHint();
    }, 0);
    setInterval(syncHint, 500);
  }
}
a(initFocus, "initFocus");
var key1 = a(p => typeof p.key == "string" && p.key.length === 1, "key1");
function syncHint(p = false) {
  if (!KJ) {
    return;
  }
  let yP = !p && typeof document.hasFocus == "function" && !document.hasFocus();
  if (document.visibilityState === "hidden") {
    yP = false;
  }
  if (yP) {
    let yF = Kn && Kn.getBoundingClientRect();
    if (yF && yF.width) {
      KJ.style.left = Math.round(yF.left + yF.width / 2) + "px";
      KJ.style.top = Math.round(yF.top + Math.max(8, yF.height * 0.02)) + "px";
    }
  }
  KJ.hidden = !yP;
}
a(syncHint, "syncHint");
var textModalUp = a(() => {
  let yc = b && b();
  return !!yc && !!yc.text;
}, "textModalUp");
var y0 = "  ";
var y1 = y0;
function resetText() {
  if (KL) {
    KL.value = y0;
    y1 = y0;
    try {
      KL.setSelectionRange(y0.length, y0.length);
    } catch {}
  }
}
a(resetText, "resetText");
function focusText(p = true) {
  if (KL) {
    if (p || KL.value !== y0) {
      resetText();
    }
    try {
      const yA = {
        preventScroll: true
      };
      KL.focus(yA);
    } catch {
      KL.focus();
    }
  }
}
a(focusText, "focusText");
function blurText() {
  if (KL) {
    KL.blur();
  }
}
a(blurText, "blurText");
function y5() {
  for (let yZ of ["left", "right", "up", "down", "b1", "b2", "b3"]) {
    if (P.held[yZ]) {
      k(yZ, false);
    }
  }
}
a(y5, "releaseAll");
function pointerTick(p) {
  if (Ks.fling) {
    Ks.dragY += Ks.fling;
    Ks.fling *= Kw;
    if (Math.abs(Ks.fling) < 0.5) {
      Ks.fling = 0;
    }
  }
  dragFallback(p);
  let yc = Kj.splice(0, Kj.length);
  for (let yP of yc) {
    if (z(yP)) {
      continue;
    }
    let yF = X();
    if (p === "battle" && !yF) {
      battleClick(yP);
      continue;
    }
    let yk = KO.at(yP.x, yP.y, yF);
    if (yk && yk.on) {
      yk.on(yP);
    }
  }
  KO.begin();
}
a(pointerTick, "pointerTick");
var takeWheel = a(() => {
  let ym = Ks.wheel;
  Ks.wheel = 0;
  return ym;
}, "takeWheel");
var takeDrag = a(() => {
  yp = true;
  let ym = Ks.dragY;
  Ks.dragY = 0;
  return ym;
}, "takeDrag");
var y9 = 26;
var yp = false;
var yK = 0;
function dragFallback(p) {
  let ym = yp;
  yp = false;
  if (ym || Ks.kind === "mouse" || P.textFocus) {
    yK = 0;
    return;
  }
  let yc = X && X();
  if (p === "battle" && !yc) {
    yK = 0;
    return;
  }
  if (p !== "menu" && p !== "battle" && p !== "lab" && p !== "title") {
    yK = 0;
    return;
  }
  yK += Ks.dragY;
  Ks.dragY = 0;
  if (Math.abs(yK) < y9) {
    return;
  }
  let yP = yK < 0 ? "down" : "up";
  yK += yK < 0 ? y9 : -y9;
  if (Math.abs(yK) > y9 * 3) {
    yK = Math.sign(yK) * y9 * 3;
  }
  if (!P.held[yP]) {
    tap(yP);
  }
}
a(dragFallback, "dragFallback");
var yM = 31;
var ya = 32;
var yC = 35;
var yB = 15;
var yq = 375;
var yi = 30;
function battleRegions() {
  let K = R.first("obj_battlecontroller");
  if (!K) {
    return [];
  }
  if (!K.havechar) {
    return utRegions(K);
  }
  let ym = [];
  let yc = R.first("obj_attackpress");
  if (yc && yc.active === 1) {
    let yQ = m();
    let yO = yc.rowh ?? 38;
    let ys = yc.barY ?? yc.y;
    if (G.flag[13] === 1 && yQ <= 3) {
      for (let ye = 0; ye < yQ; ye++) {
        ym.push({
          id: "press" + ye,
          x: yc.x,
          y: ys + yO * ye,
          w: 300,
          h: yO,
          label: String(G.charname[G.char[ye]] || "").toUpperCase(),
          act: () => tap(["b1", "b2", "b3"][ye])
        });
      }
    }
    ym.push({
      id: "pressany",
      x: 0,
      y: 0,
      w: 640,
      h: 480,
      label: "PRESS",
      act: () => tap("b1")
    });
    return ym;
  }
  if (G.myfight !== 0 || !K.havechar || !G.bmenucoord) {
    return ym;
  }
  let yZ = G.charturn;
  let yA = G.bmenucoord;
  let yP = K.bp;
  if (G.bmenuno === 0) {
    let yn = K.chartotal;
    for (let Mt = 0; Mt < m(); Mt++) {
      if (K.havechar[Mt] !== 1) {
        continue;
      }
      let Me = yn === 3 ? [0, 212, 424][Mt] : yn === 2 ? [106, 326][Mt] : 212;
      let Mn = u(G.char[Mt]);
      let ao = ["spr_btfight", Mn === 1 ? "spr_btact" : "spr_bttech", "spr_btitem", "spr_btspare", "spr_btdefend"];
      let at = ["FIGHT", Mn === 1 ? "ACT" : "MAGIC", "ITEM", "SPARE", "DEFEND"];
      for (let ae = 0; ae < 5; ae++) {
        ym.push({
          id: "bt" + Mt + ae,
          x: Me + yB + yC * ae,
          y: 485 - yP,
          w: yM,
          h: ya,
          spr: ao[ae],
          label: at[ae],
          slot: Mt,
          sel: Mt === yZ && yA[0][yZ] === ae,
          act: () => {
            if (Mt === yZ) {
              yA[0][yZ] = ae;
              tap("b1");
            }
          }
        });
      }
    }
    return ym;
  }
  if ([1, 3, 11, 12].includes(G.bmenuno) || [7, 8].includes(G.bmenuno)) {
    let Ct = G.bmenuno === 7 || G.bmenuno === 8;
    for (let Ce = 0; Ce < 3; Ce++) {
      if (Ct ? G.char[Ce] > 0 : G.monster[Ce] === 1) {
        ym.push({
          id: "tgt" + Ce,
          x: 40,
          y: yq + Ce * yi,
          w: 560,
          h: yi,
          label: String(Ct ? G.charname[G.char[Ce]] || "" : G.monstername[Ce] || ""),
          meta: Ct ? G.hp[G.char[Ce]] + "/" + G.maxhp[G.char[Ce]] : String(G.monstercomment[Ce] || ""),
          metaDim: true,
          sel: yA[G.bmenuno][yZ] === Ce,
          act: () => {
            yA[G.bmenuno][yZ] = Ce;
            tap("b1");
          }
        });
      }
    }
    return ym;
  }
  if (G.bmenuno === 2 || G.bmenuno === 4 || G.bmenuno === 9) {
    let Bq = yA[G.bmenuno][yZ] > 5 ? 1 : 0;
    let Bi = Bt => G.bmenuno === 2 ? (G.spell[G.char[yZ]] || [])[Bt] !== 0 : G.bmenuno === 4 ? (K.tempitem[Bt] ? K.tempitem[Bt][yZ] : 0) !== 0 : Bt < 6 && !!(G.actname[yA[11][yZ]] || [])[Bt];
    let BT = G.char[yZ];
    let Bd = yA[11][yZ];
    let Bo = Bt => {
      if (G.bmenuno === 2) {
        let BS = (G.spellcost[BT] || [])[Bt] || 0;
        return {
          label: String((G.spellnameb[BT] || [])[Bt] || ""),
          meta: Math.round(BS / G.maxtension * 100) + "% TP",
          desc: String((G.spelldescb[BT] || [])[Bt] || "").split("#").join("\n"),
          off: G.tension < BS
        };
      }
      if (G.bmenuno === 4) {
        let BZ = K.tempitem[Bt] ? K.tempitem[Bt][yZ] : 0;
        let BA = BZ && c[BZ];
        return {
          label: String(BA ? BA[1] : ""),
          meta: "",
          desc: String(BA ? BA[3] : ""),
          off: false
        };
      }
      let BE = (G.actcost[Bd] || [])[Bt] || 0;
      return {
        label: String((G.actname[Bd] || [])[Bt] || ""),
        meta: G.tensionselect > 0 ? Math.round(BE / G.maxtension * 100) + "% TP" : "",
        desc: String((G.actdesc[Bd] || [])[Bt] || "").split("#").join("\n"),
        off: G.tension < BE
      };
    };
    for (let Bt of G.bmenuno === 4 ? [0, 1] : [Bq]) {
      for (let Bb = 0; Bb < 3; Bb++) {
        for (let BX = 0; BX < 2; BX++) {
          let Bz = Bt * 6 + Bb * 2 + BX;
          if (!Bi(Bz)) {
            continue;
          }
          let BI = Bt === Bq;
          ym.push({
            id: "cell" + Bz,
            x: BI ? BX === 0 ? 20 : 250 : -999,
            w: BI ? 220 : 0,
            y: BI ? yq + Bb * yi : -999,
            h: BI ? yi : 0,
            ...Bo(Bz),
            sel: yA[G.bmenuno][yZ] === Bz,
            act: () => {
              yA[G.bmenuno][yZ] = Bz;
              tap("b1");
            }
          });
        }
      }
    }
    if (G.bmenuno === 4 && (Bq === 1 || G.item[6] !== 0)) {
      ym.push({
        id: "more",
        x: 470,
        y: Bq ? 370 : 436,
        w: 36,
        h: 34,
        label: Bq ? "PAGE 1" : "PAGE 2",
        act: () => {
          yA[4][yZ] = Bq ? 0 : 6;
        }
      });
    }
    return ym;
  }
  return ym;
}
a(battleRegions, "battleRegions");
var yd = ["obj_fightbt", "obj_talkbt", "obj_itembt", "obj_sparebt"];
var yo = ["FIGHT", "ACT", "ITEM", "MERCY"];
var utClean = a(p => String(p ?? "").replace(/\\[A-Za-z0-9]/g, "").replace(/\^\d/g, "").replace(/[/%]/g, "").trim(), "utClean");
var isUTBattle = a(() => {
  let yZ = R.first("obj_battlecontroller");
  return !!yZ && !yZ.havechar;
}, "isUTBattle");
function utActNames() {
  let yZ = typeof (G.msg && G.msg[0]) == "string" ? G.msg[0] : "";
  let yA = new Array(6).fill("");
  yZ.split("&").forEach((yP, yF) => {
    if (!(yF > 2)) {
      yP.split("*").slice(1).forEach((ys, ye) => {
        if (ye < 2) {
          yA[ye * 3 + yF] = utClean(ys);
        }
      });
    }
  });
  return yA;
}
a(utActNames, "utActNames");
function utRegions(p) {
  let ym = [];
  let yc = G.bmenucoord;
  if (!yc) {
    return ym;
  }
  if (G.myfight === 1 && R.first("obj_target")) {
    ym.push({
      id: "pressany",
      x: 0,
      y: 0,
      w: 640,
      h: 480,
      label: "PRESS",
      act: () => tap("b1")
    });
    return ym;
  }
  if (G.myfight !== 0 || G.mnfight !== 0 || p.active !== 1) {
    return ym;
  }
  let yA = G.idealborder || [32, 602, 250, 385];
  let yP = yA[0];
  let yF = yA[2];
  let yk = yO => yF + 28 + yO * 32;
  if (G.bmenuno === 0) {
    yd.forEach((yO, ys) => {
      {
        let Me = R.first(yO);
        if (!Me) {
          return;
        }
        let Mn = G.mercy === 2 && ys === 3 || G.mercy === 3 && ys !== 1;
        ym.push({
          id: "bt0" + ys,
          x: Me.x,
          y: Me.y,
          w: 110,
          h: 42,
          spr: Me.sprite_index,
          frame: yc[0] === ys ? 1 : 0,
          label: yo[ys],
          slot: 0,
          sel: yc[0] === ys,
          off: Mn,
          ut: true,
          act: () => {
            if (!Mn) {
              yc[0] = ys;
              tap("b1");
            }
          }
        });
      }
    });
    return ym;
  }
  if (G.bmenuno === 1 || G.bmenuno === 2 || G.bmenuno === 11) {
    {
      for (let yO = 0; yO < 3; yO++) {
        if (G.monster[yO] === 1) {
          ym.push({
            id: "tgt" + yO,
            x: yP + 8,
            y: yk(yO) - 10,
            w: 560,
            h: 32,
            label: utClean((G.monstername || [])[yO]) || "Enemy",
            meta: "",
            sel: yc[1] === yO,
            act: () => {
              {
                yc[1] = yO;
                tap("b1");
              }
            }
          });
        }
      }
      return ym;
    }
  }
  if (G.bmenuno === 10) {
    let ys = utActNames();
    let ye = G.choices || [];
    for (let yn = 0; yn < 6; yn++) {
      {
        if (!ye[yn]) {
          continue;
        }
        let Mt = yn / 3 | 0;
        let Me = yn % 3;
        ym.push({
          id: "cell" + yn,
          x: Mt ? yP + 280 : yP + 20,
          y: yk(Me) - 10,
          w: 250,
          h: 32,
          label: ys[yn] || "ACT " + (yn + 1),
          meta: "",
          desc: "",
          sel: yc[2] === yn,
          act: () => {
            {
              yc[2] = yn;
              tap("b1");
            }
          }
        });
      }
    }
    return ym;
  }
  if (G.bmenuno >= 3 && G.bmenuno < 4) {
    let ae = G.bmenuno === 3.5 ? 1 : 0;
    let an = G.item || [];
    let Ct = G.itemnameb || [];
    for (let Ce = 0; Ce < 8; Ce++) {
      {
        if (!an[Ce]) {
          continue;
        }
        let Cn = Ce - ae * 4;
        let B1 = Cn >= 0 && Cn < 4;
        ym.push({
          id: "cell" + Ce,
          x: B1 ? Cn & 1 ? yP + 268 : yP + 20 : -999,
          y: B1 ? (Cn >> 1 ? yF + 60 : yF + 28) - 10 : -999,
          w: B1 ? 240 : 0,
          h: B1 ? 32 : 0,
          label: utClean(Ct[Ce]) || "ITEM " + (Ce + 1),
          meta: "",
          desc: "",
          sel: B1 && yc[3] === Cn,
          act: () => {
            G.bmenuno = Ce >= 4 ? 3.5 : 3;
            yc[3] = Ce % 4;
            tap("b1");
          }
        });
      }
    }
    if (an[4]) {
      ym.push({
        id: "more",
        x: yP + 300,
        y: yk(2) - 10,
        w: 240,
        h: 32,
        label: ae ? "PAGE 1" : "PAGE 2",
        act: () => {
          {
            yc[3] = ae ? 0 : 1;
            tap(ae ? "left" : "right");
          }
        }
      });
    }
    return ym;
  }
  if (G.bmenuno === 4) {
    (G.mercy < 1 ? ["Spare", "Flee"] : ["Spare"]).forEach((B2, B3) => ym.push({
      id: "tgt" + B3,
      x: yP + 8,
      y: yk(B3) - 10,
      w: 300,
      h: 32,
      label: B2,
      meta: "",
      sel: yc[4] === B3,
      act: () => {
        {
          yc[4] = B3;
          tap("b1");
        }
      }
    }));
  }
  return ym;
}
a(utRegions, "utRegions");
function battleClick(p) {
  let yA = battleRegions();
  for (let yP = 0; yP < yA.length; yP++) {
    let yF = yA[yP];
    if (p.x >= yF.x && p.y >= yF.y && p.x < yF.x + yF.w && p.y < yF.y + yF.h) {
      yF.act();
      return true;
    }
  }
  return false;
}
a(battleClick, "battleClick");
var yE = 14;
function setDirs(p, K) {
  const yc = {
    left: false
  };
  yc.right = false;
  yc.up = false;
  yc.down = false;
  let yF = Math.hypot(p, K);
  let yk = yc;
  if (yF > yE) {
    let yR = Math.atan2(-K, p) * 180 / Math.PI;
    if (yR > -67.5 && yR < 67.5) {
      yk.right = true;
    }
    if (yR > 112.5 || yR < -112.5) {
      yk.left = true;
    }
    if (yR > 22.5 && yR < 157.5) {
      yk.up = true;
    }
    if (yR < -22.5 && yR > -157.5) {
      yk.down = true;
    }
  }
  for (let yQ of ["left", "right", "up", "down"]) {
    if (!!P.held[yQ] !== yk[yQ]) {
      k(yQ, yk[yQ]);
    }
  }
}
a(setDirs, "setDirs");
function initTouchPad() {
  let yA = document.getElementById("touchpad");
  if (yA) {
    yA.remove();
  }
}
a(initTouchPad, "initTouchPad");
function updateTouchPad(p, K) {
  KT.tick(p, K);
}
a(updateTouchPad, "updateTouchPad");
export { p1 as a, textInfo as b, mountStyle as c, x as d, haptic as e, KO as f, Ks as g, initPointer as h, focusText as i, blurText as j, pointerTick as k, takeWheel as l, takeDrag as m, updateTouchPad as n };
