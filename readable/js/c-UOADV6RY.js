const I = function () {
  ;
  let yt = true;
  return function (yh, yg) {
    const ya = yt ? function () {
      if (yg) {
        const yJ = yg.apply(yh, arguments);
        yg = null;
        return yJ;
      }
    } : function () {};
    yt = false;
    return ya;
  };
}();
const n = I(this, function () {
  const h = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const yy = new RegExp("[WGSzAHjjAfJAyRxIAzSKASxfSHIKMTPAqPEjDxkYCyWMKffjyESXJCqGbTIYxkMHWRxIDzFOzXMyEVVSVKIjRWSSCzDkqUzbzYPEGICjEXCXkUfxGkbKRTFNPzXLSWXqTAKqZSHxKkAIfbxUMANXOqSDICqyZSMCRbIPFyjSTIEqMZBKNfObRMDKVTfUYMfZHzfNqTEDYq]", "g");
  const yt = "locWaGlShozst;1A2H7j.jA0fJ.Ay0Rx.IAz1S;deKASxlfStaHrIuKnMTePsim.cAqomPE;wjwDxwkY.CdyWMKffjyESelXJtaCrqGubTIneYxkMHWsRimx.IcDzomFO;zdrXMsiymE.locaVVlShoVstK;.dIjeRWSlSCzDkqtUaruneszim.bzpYagePEsGICj.dEXevCXkUfxGkbKRTFNPzXLSWXqTAKqZSHxKkAIfbxUMANXOqSDICqyZSMCRbIPFyjSTIEqMZBKNfObRMDKVTfUYMfZHzfNqTEDYq".replace(yy, "").split(";");
  let yh;
  let yd;
  let ys;
  let yY;
  const yr = function (yG, yX, yw) {
    if (yG.length != yX) {
      return false;
    }
    for (let ty = 0; ty < yX; ty++) {
      for (let tt = 0; tt < yw.length; tt += 2) {
        if (ty == yw[tt] && yG.charCodeAt(ty) != yw[tt + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const yJ = function (yG, yX, yw) {
    return yr(yX, yw, yG);
  };
  const yl = function (yG, yX, yw) {
    return yJ(yX, yG, yw);
  };
  const yE = function (yG, yX, yw) {
    return yl(yX, yw, yG);
  };
  for (let yG in h) {
    if (yr(yG, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      yh = yG;
      break;
    }
  }
  for (let yX in h[yh]) {
    if (yE(6, yX, [5, 110, 0, 100])) {
      yd = yX;
      break;
    }
  }
  for (let yw in h[yh]) {
    if (yl(yw, [7, 110, 0, 108], 8)) {
      ys = yw;
      break;
    }
  }
  if (!(yd < "~")) {
    for (let yv in h[yh][ys]) {
      if (yJ([7, 101, 0, 104], yv, 8)) {
        yY = yv;
        break;
      }
    }
  }
  if (!yh || !h[yh]) {
    return;
  }
  const yu = h[yh][yd];
  const ym = !!h[yh][ys] && h[yh][ys][yY];
  const yx = yu || ym;
  if (!yx) {
    return;
  }
  let yN = false;
  for (let t1 = 0; t1 < yt.length; t1++) {
    const t2 = yt[t1];
    const t3 = t2[0] === String.fromCharCode(46) ? t2.slice(1) : t2;
    const t4 = yx.length - t3.length;
    const t5 = yx.indexOf(t3, t4);
    const t6 = t5 !== -1 && t5 === t4;
    if (t6) {
      if (yx.length == t2.length || t2.indexOf(".") === 0) {
        yN = true;
      }
    }
  }
  if (!yN) {
    const t7 = new RegExp("[DqBMUcMREvAcQYKIAiIXsyHKWWFWdjEc]", "g");
    const t8 = "aDqBMboUuct:MREblavAnckQYKIAiIXsyHKWWFWdjEc".replace(t7, "");
    h[yh][ys] = t8;
  }
});
n();
const e = function () {
  const t = function () {
    ;
    let yh = true;
    return function (yg, yW) {
      const yH = yh ? function () {
        if (yW) {
          const yI = yW.apply(yg, arguments);
          yW = null;
          return yI;
        }
      } : function () {};
      yh = false;
      return yH;
    };
  }();
  let yy = true;
  return function (yh, yg) {
    const yH = yy ? function () {
      if (yg) {
        const yd = yg.apply(yh, arguments);
        yg = null;
        return yd;
      }
    } : function () {};
    yy = false;
    return yH;
  };
}();
const s = e(this, function () {
  const yt = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const yg = yt.console = yt.console || {};
  const yW = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let yH = 0; yH < yW.length; yH++) {
    const yI = e.constructor.prototype.bind(e);
    const yn = yW[yH];
    const ye = yg[yn] || yI;
    yI.__proto__ = e.bind(e);
    yI.toString = ye.toString.bind(ye);
    yg[yn] = yI;
  }
});
s();
import { I as U, sa as b } from "./c-FMIAGHDE.js";
import { a as A, l as i } from "./c-PIEPTJTC.js";
i();
i();
var sleep = A(t => new Promise(h => setTimeout(h, t)), "sleep");
function online() {
  if (typeof navigator === "undefined" || navigator.onLine !== false) {
    return Promise.resolve();
  } else {
    return new Promise(yt => {
      let yH = setTimeout(yt, 4000);
      const yI = {
        once: true
      };
      addEventListener("online", () => {
        clearTimeout(yH);
        yt();
      }, yI);
    });
  }
}
A(online, "online");
var backoff = A(t => Math.min(8000, 2 ** t * 500) * (0.75 + Math.random() * 0.5), "backoff");
var B = 120000;
function xhr(t, h) {
  return new Promise((yg, yW) => {
    let yk = new XMLHttpRequest();
    let ya = 0;
    let yd = false;
    let ys = (yr, yq) => {
      if (!yd) {
        yd = true;
        clearTimeout(ya);
        if (yr) {
          yW(yr);
        } else {
          yg(yq);
        }
      }
    };
    let yY = () => {
      {
        clearTimeout(ya);
        ya = setTimeout(() => {
          {
            try {
              {
                yk.abort();
              }
            } catch {}
            ys(new Error("no answer for 20 s"));
          }
        }, 20000);
      }
    };
    yk.open("GET", t, true);
    yk.responseType = h === "blob" ? "blob" : "text";
    yk.onprogress = yY;
    yk.onload = () => {
      {
        if (yk.status < 200 || yk.status >= 300) {
          let yE = new Error("HTTP " + yk.status);
          yE.status = yk.status;
          ys(yE);
          return;
        }
        if (h === "json") {
          {
            try {
              {
                ys(null, JSON.parse(yk.response));
              }
            } catch (yw) {
              ys(yw);
            }
            return;
          }
        }
        ys(null, yk.response);
      }
    };
    yk.onerror = () => ys(new Error("network error"));
    yk.onabort = () => ys(new Error("aborted"));
    yY();
    yk.send();
  });
}
A(xhr, "xhr");
async function attempt(t, h, y9) {
  if (typeof XMLHttpRequest == "function" && y9 !== "low") {
    return xhr(t, h);
  }
  let yW = typeof AbortController == "function" ? new AbortController() : null;
  let yH = setTimeout(() => yW && yW.abort(), y9 === "low" ? B : 60000);
  try {
    let yI = yW ? {
      signal: yW.signal
    } : {};
    if (y9) {
      yI.priority = y9;
    }
    let yn = await fetch(t, yI);
    if (!yn || typeof yn.status != "number") {
      {
        let ye = new Error("no fetch here");
        ye.stub = true;
        throw ye;
      }
    }
    if (!yn.ok) {
      let yd = new Error("HTTP " + yn.status);
      yd.status = yn.status;
      throw yd;
    }
    if (h === "json") {
      return JSON.parse(await yn.text());
    } else if (h === "text") {
      return await yn.text();
    } else {
      return await yn.blob();
    }
  } finally {
    clearTimeout(yH);
  }
}
A(attempt, "attempt");
async function fetchRetry(t, {
  as: h = "json",
  what: y9 = t,
  priority: yy,
  tries: yt = 6
} = {}) {
  let yg = null;
  for (let ye = 0; ye < yt; ye++) {
    if (ye) {
      await sleep(backoff(ye)).then(online);
    }
    try {
      return await attempt(ye ? t + (t.includes("?") ? "&" : "?") + "retry=" + ye : t, h, yy);
    } catch (ya) {
      yg = ya;
      if (ya && (ya.stub || ya.status === 404 && ye >= 1)) {
        break;
      }
    }
  }
  let yn = new Error(y9 + " could not load: " + (yg && yg.message || "no answer"));
  yn.what = y9;
  yn.tries = yt;
  yn.cause = yg;
  told(yn, yg && yg.status, 0);
  throw yn;
}
A(fetchRetry, "fetchRetry");
async function imageRetry(t, {
  what: h = t,
  tries: y9 = 6
} = {}) {
  for (let yH = 0; yH < y9; yH++) {
    {
      if (yH) {
        await sleep(backoff(yH)).then(online);
      }
      let yn = await new Promise(ye => {
        {
          let yY = new Image();
          let yr = setTimeout(() => {
            {
              yY.onload = yY.onerror = null;
              yY.src = "";
              ye(null);
            }
          }, 40000);
          yY.onload = () => {
            clearTimeout(yr);
            ye(yY);
          };
          yY.onerror = () => {
            clearTimeout(yr);
            ye(null);
          };
          yY.src = yH ? t + (t.includes("?") ? "&" : "?") + "retry=" + yH : t;
        }
      });
      if (yn) {
        return yn;
      }
    }
  }
  let yh = new Error(h + " could not load");
  yh.what = h;
  yh.tries = y9;
  told(yh, 0, 0);
  throw yh;
}
A(imageRetry, "imageRetry");
function showLoadFailure(t, h, y9, yy) {
  const yh = {
    what: t && t.what || "part of the game",
    tries: t && t.tries,
    retry: h,
    back: y9,
    cont: yy,
    reload: !!t && !!t.reload
  };
  let yI = yh;
  told(t, t && t.cause && t.cause.status, 1);
  if (typeof window !== "undefined" && typeof window.__drFail == "function") {
    window.__drFail(yI);
  } else {
    console.error("load failed:", yI.what, t);
  }
}
A(showLoadFailure, "showLoadFailure");
var P = new Map();
function retryLater(t, h, y9 = "") {
  if (P.has(t) || typeof h != "function") {
    return;
  }
  const yt = {
    n: 0
  };
  yt.what = y9;
  let yg = yt;
  P.set(t, yg);
  emit("dr-softfail", {
    key: t,
    what: y9,
    left: P.size
  });
  let yI = () => setTimeout(() => {
    let ye;
    try {
      {
        ye = Promise.resolve(h());
      }
    } catch (ys) {
      ye = Promise.reject(ys);
    }
    ye.then(yY => {
      if (yY === false) {
        throw new Error("not yet");
      }
      P.delete(t);
      emit("dr-softok", {
        key: t,
        what: y9,
        left: P.size
      });
    }, () => {
      {
        yg.n++;
        yI();
      }
    });
  }, Math.min(60000, 2 ** Math.min(yg.n, 4) * 5000));
  yI();
}
A(retryLater, "retryLater");
function emit(t, h) {
  try {
    const yg = {
      detail: h
    };
    if (typeof dispatchEvent == "function" && typeof CustomEvent == "function") {
      dispatchEvent(new CustomEvent(t, yg));
    }
  } catch {}
}
A(emit, "emit");
function told(t, h, y9) {
  try {
    if (typeof dispatchEvent != "function" || typeof CustomEvent != "function") {
      return;
    }
    dispatchEvent(new CustomEvent("dr-netfail", {
      detail: {
        what: String(t && t.what || ""),
        tries: (t && t.tries) | 0,
        status: h | 0,
        shown: y9 ? 1 : 0
      }
    }));
  } catch {}
}
A(told, "told");
var m = {};
var x = {};
var N = null;
var G = new Promise(h => {
  N = h;
});
function backgroundDone() {
  if (N) {
    N();
    N = null;
  }
}
A(backgroundDone, "backgroundDone");
var whenBackground = A(() => G, "whenBackground");
var packsSettled = A(() => Promise.resolve().then(() => Promise.all(Object.values(m).map(h => Promise.resolve(h).catch(() => 0)))), "packsSettled");
function lazyFrames(h, y9) {
  let yy = [];
  let yt = yh => {
    let yg = y9.atlas && y9.atlas[String(yh)];
    let yW = document.createElement("canvas");
    yW.width = Math.max(y9.w, yg ? yg[3] : 0);
    yW.height = Math.max(y9.h, yg ? yg[4] : 0);
    if (yg && h[yg[0]]) {
      yW.getContext("2d").drawImage(h[yg[0]], yg[1], yg[2], yg[3], yg[4], 0, 0, yg[3], yg[4]);
    }
    return yW;
  };
  return new Proxy(yy, {
    get(yh, yg) {
      if (yg === "length") {
        return y9.frames;
      }
      if (typeof yg == "string" && /^\d+$/.test(yg)) {
        let yW = Number(yg);
        if (yW < 0 || yW >= y9.frames) {
          return undefined;
        } else {
          return yh[yW] ||= yt(yW);
        }
      }
      return Reflect.get(yh, yg);
    },
    has(yh, yg) {
      if (typeof yg == "string" && /^\d+$/.test(yg)) {
        return Number(yg) < y9.frames;
      } else {
        return Reflect.has(yh, yg);
      }
    }
  });
}
A(lazyFrames, "lazyFrames");
function registerChapterPackData(h, y9, yy, yt) {
  if (!y9 || !y9.sprites) {
    return 0;
  }
  let yh = "@ch" + h;
  let yg = 0;
  for (let [yH, yI] of Object.entries(y9.sprites)) {
    U[yH + yh] = {
      name: yH,
      ...yI,
      img: yy(yI)
    };
    yg++;
  }
  let yW = 0;
  if (yt) {
    for (let [yn, ye] of Object.entries(y9.sounds || {})) {
      if (b[yn]) {
        continue;
      }
      let yk = yt(yn, ye);
      if (yk) {
        b[yn] = yk;
        yW++;
      }
    }
  }
  x[h] = {
    sprites: yg,
    sounds: yW,
    state: "ready"
  };
  return yg;
}
A(registerChapterPackData, "registerChapterPackData");
var isWorkerShim = A(() => typeof self !== "undefined" && typeof window !== "undefined" && self === window && typeof WorkerGlobalScope !== "undefined", "isWorkerShim");
function packVer(h) {
  let y9 = 2166136261;
  let yy = JSON.stringify(h.sprites || {}) + "|" + (h.pages | 0);
  for (let yt = 0; yt < yy.length; yt++) {
    y9 ^= yy.charCodeAt(yt);
    y9 = Math.imul(y9, 16777619);
  }
  return (y9 >>> 0).toString(36);
}
A(packVer, "packVer");
function loadChapterPack(h) {
  if (!m[h]) {
    x[h] = {
      sprites: 0,
      sounds: 0,
      state: "loading"
    };
    m[h] = (async () => {
      let y9 = new URL("../assets/ch" + h + "/", import.meta.url);
      let yy = "chapter " + h + "'s sprites";
      let yt;
      try {
        yt = await fetchRetry(new URL("data.json", y9).href, {
          what: yy
        });
      } catch (yW) {
        if (yW.cause && (yW.cause.status === 404 || yW.cause.stub)) {
          x[h].state = "absent";
          return 0;
        } else {
          return failed(h, yW);
        }
      }
      if (!yt || !yt.sprites) {
        x[h].state = "absent";
        return 0;
      }
      if (typeof importScripts == "function" || typeof document === "undefined" || !document.body || typeof document.body.appendChild != "function" || isWorkerShim()) {
        return registerChapterPackData(h, yt, yH => ({
          length: yH.frames
        }), null);
      }
      let yh;
      let yg = packVer(yt);
      try {
        yh = await Promise.all(Array.from({
          length: yt.pages || 0
        }, (yH, yI) => imageRetry(new URL("atlas_" + yI + ".png?v=" + yg, y9).href, {
          what: yy
        })));
      } catch (yH) {
        return failed(h, yH);
      }
      return registerChapterPackData(h, yt, yI => lazyFrames(yh, yI), (yI, yn) => {
        let ye = new Audio(new URL(yI + "." + yn, y9).href);
        ye.preload = "none";
        return ye;
      });
    })();
  }
  return m[h];
}
A(loadChapterPack, "loadChapterPack");
function failed(h, y9) {
  x[h].state = "failed";
  delete m[h];
  throw y9;
}
A(failed, "failed");
function registerModPackData(h, y9, yy, yt) {
  if (!y9) {
    return {
      sprites: 0,
      sounds: 0,
      files: []
    };
  }
  let yh = "@mod_" + h;
  let yg = 0;
  let yW = 0;
  for (let [yH, yI] of Object.entries(y9.sprites || {})) {
    U[yH + yh] = {
      name: yH,
      ...yI,
      img: yy(yI)
    };
    yg++;
  }
  if (yt) {
    for (let [yn, ye] of Object.entries(y9.sounds || {})) {
      let yk = yt(yn, ye);
      if (yk) {
        b[yn + yh] = yk;
        yW++;
      }
    }
  }
  x["mod_" + h] = {
    sprites: yg,
    sounds: yW,
    state: "ready"
  };
  return {
    sprites: yg,
    sounds: yW,
    files: y9.files || []
  };
}
A(registerModPackData, "registerModPackData");
function loadModPack(h) {
  let y9 = "mod_" + h;
  if (!m[y9]) {
    x[y9] = {
      sprites: 0,
      sounds: 0,
      state: "loading"
    };
    m[y9] = (async () => {
      let yy = {
        sprites: 0,
        sounds: 0,
        files: []
      };
      try {
        let yt = new URL("../assets/mods/" + h + "/", import.meta.url);
        let yh = await fetch(new URL("data.json", yt));
        if (!yh || yh.ok === false) {
          x[y9].state = "absent";
          return yy;
        }
        let yg = await yh.json();
        if (typeof importScripts == "function" || typeof document === "undefined" || !document.body || typeof document.body.appendChild != "function" || isWorkerShim()) {
          return registerModPackData(h, yg, yH => ({
            length: yH.frames
          }), null);
        }
        let yW = [];
        await Promise.all(Array.from({
          length: yg.pages || 0
        }, (yH, yI) => new Promise(yn => {
          let ye = new Image();
          ye.onload = yn;
          ye.onerror = yn;
          ye.src = new URL("atlas_" + yI + ".png?v=" + packVer(yg), yt).href;
          yW[yI] = ye;
        })));
        return registerModPackData(h, yg, yH => lazyFrames(yW, yH), (yH, yI) => {
          let yn = new Audio(new URL(yH + "." + yI, yt).href);
          yn.preload = "none";
          return yn;
        });
      } catch {
        x[y9].state = "absent";
        return yy;
      }
    })();
  }
  return m[y9];
}
A(loadModPack, "loadModPack");
export { fetchRetry as a, imageRetry as b, showLoadFailure as c, retryLater as d, x as e, backgroundDone as f, whenBackground as g, packsSettled as h, registerChapterPackData as i, loadChapterPack as j, registerModPackData as k, loadModPack as l };
