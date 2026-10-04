const r = function () {
  ;
  let jH = true;
  return function (jS, jI) {
    const jt = jH ? function () {
      if (jI) {
        const jk = jI.apply(jS, arguments);
        jI = null;
        return jk;
      }
    } : function () {};
    jH = false;
    return jt;
  };
}();
import { a as O, l as y } from "./c-PIEPTJTC.js";
y();
var e = null;
var a = "render";
var P = null;
var F = 640;
var S = 480;
var t = new Map();
var d = new Set();
var m = [];
var i = null;
var j0 = 0;
var j1 = null;
var j2 = null;
var j3 = false;
var j4 = null;
var j5 = (() => {
  let jH = new MessageChannel();
  let jS = [];
  jH.port1.onmessage = () => {
    let jI = jS.shift();
    if (jI) {
      jI();
    }
  };
  return () => new Promise(jI => {
    jS.push(jI);
    jH.port2.postMessage(0);
  });
})();
var now = O(() => performance.now(), "now");
function installShims() {
  let jH = () => ({
    style: {
      setProperty() {}
    },
    addEventListener() {},
    removeEventListener() {},
    remove() {},
    appendChild() {},
    setAttribute() {},
    focus() {},
    blur() {},
    classList: {
      add() {},
      remove() {},
      toggle() {}
    }
  });
  let jS = new Proxy({}, {
    get(jt, jk) {
      if (jk === "canvas") {
        return {
          width: 640,
          height: 480
        };
      } else if (jk === "measureText") {
        return () => ({
          width: 0
        });
      } else if (jk === "getImageData") {
        return () => ({
          data: new Uint8ClampedArray(4)
        });
      } else if (jk === "createImageData") {
        return (jd, jq) => ({
          data: new Uint8ClampedArray(4),
          width: jd | 0,
          height: jq | 0
        });
      } else if (jk === "createPattern" || jk === "createLinearGradient") {
        return () => null;
      } else {
        return () => {};
      }
    },
    set() {
      return true;
    }
  });
  j4 = jS;
  let jI = a === "scout" ? () => ({
    getContext: () => jS,
    width: 0,
    height: 0,
    style: {},
    addEventListener() {},
    removeEventListener() {},
    remove() {}
  }) : () => {
    let jt = new OffscreenCanvas(1, 1);
    jt.style = {};
    jt.addEventListener = () => {};
    jt.removeEventListener = () => {};
    jt.remove = () => {};
    return jt;
  };
  self.window = self;
  self.document = {
    createElement: jt => jt === "canvas" ? jI() : jH(),
    getElementById: () => ({
      getContext: () => jI().getContext("2d"),
      focus() {},
      appendChild() {},
      addEventListener() {}
    }),
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener() {},
    removeEventListener() {},
    body: jH(),
    head: jH(),
    documentElement: jH()
  };
  self.Image = class {};
  self.Audio = class {
    play() {
      return Promise.resolve();
    }
    pause() {}
    cloneNode() {
      return this;
    }
    load() {}
  };
  self.localStorage = {
    getItem: () => null,
    setItem() {},
    removeItem() {},
    clear() {}
  };
  self.requestAnimationFrame = () => 0;
}
O(installShims, "installShims");
function frameSize(jH, jS, jI) {
  let jt = jH.atlas && jH.atlas[String(jS)];
  return [Math.max(jH.w | 0, jt ? jt[jI ? 3 : 2] | 0 : 0), Math.max(jH.h | 0, jt ? jt[jI ? 4 : 3] | 0 : 0)];
}
O(frameSize, "frameSize");
function lazyImg(jH, jS, jI) {
  let jt = jS.frames | 0;
  let jk = [];
  let jd = jq => {
    if (jk[jq]) {
      return jk[jq];
    }
    let [jm, jJ] = frameSize(jS, jq, jI);
    if (a === "scout") {
      return jk[jq] = {
        width: jm,
        height: jJ,
        getContext: () => j4
      };
    }
    let jN = new OffscreenCanvas(jm, jJ);
    if (jm && jJ) {
      jN.getContext("2d");
    }
    return jk[jq] = jN;
  };
  return new Proxy([], {
    get(jq, jm) {
      if (jm === "length") {
        return jt;
      }
      if (typeof jm == "string" && jm.length < 6 && jm.charCodeAt(0) >= 48 && jm.charCodeAt(0) <= 57) {
        let jJ = +jm;
        if (!(jJ >= 0) || !(jJ < jt)) {
          return;
        }
        let jN = t.get(jH);
        if (jN && jJ in jN) {
          jk[jJ] &&= null;
          return jN[jJ] || undefined;
        }
        let jV = jH + "" + jJ;
        if (a === "scout") {
          if (!d.has(jV)) {
            d.add(jV);
            m.push(jV);
          }
        } else if (i) {
          i.add(jV);
        }
        return jd(jJ);
      }
      return Reflect.get(jq, jm);
    },
    has(jq, jm) {
      if (typeof jm == "string" && /^\d+$/.test(jm)) {
        return Number(jm) < jt;
      } else {
        return Reflect.has(jq, jm);
      }
    }
  });
}
O(lazyImg, "lazyImg");
function proxySprites(jH, jS) {
  let jI = e.gm.Sprites;
  for (let jt of Object.keys(jI)) {
    if (jH && !jH(jt)) {
      continue;
    }
    let jk = Object.getOwnPropertyDescriptor(jI, jt);
    let jd = jk && jk.value;
    if (jd && typeof jd == "object" && !jd._rv) {
      jd.img = lazyImg(jt, jd, jS);
      jd._rv = 1;
    }
  }
}
O(proxySprites, "proxySprites");
async function boot(jH) {
  a = jH.role === "scout" ? "scout" : "render";
  installShims();
  let jS = now();
  let jI = {};
  let jt = await jA("./gm-DVHMTG3U.js", import.meta.url);
  jI.gm = Math.round(now() - jS);
  let jk = new URL(jH.assets, self.location.href);
  let jd = await (await fetch(new URL("data.json", jk))).json();
  jI.data = Math.round(now() - jS);
  for (let [ji, jh] of Object.entries(jd.sprites)) {
    jt.Sprites[ji] = {
      name: ji,
      ...jh,
      img: lazyImg(ji, jh, false),
      _rv: 1
    };
  }
  let jq = [];
  for (let [p0, p1] of Object.entries(jd.fonts)) {
    if (a === "scout") {
      jt.Fonts[p0] = {
        ...p1,
        img: {
          width: 256,
          height: 256
        }
      };
      continue;
    }
    jq.push((async () => {
      let p2 = null;
      try {
        let p3 = await fetch(new URL(p0 + ".png", jk));
        if (p3.ok) {
          p2 = await createImageBitmap(await p3.blob());
        }
      } catch {
        p2 = null;
      }
      jt.Fonts[p0] = {
        img: p2 || {
          width: 0,
          height: 0
        },
        glyphs: p1.glyphs,
        size: p1.size
      };
    })());
  }
  await Promise.all(jq);
  jI.fonts = Math.round(now() - jS);
  let jm = await jA("./globals-Y7HSE7MN.js", import.meta.url);
  let jJ = await jA("./fights-7SUHM6IN.js", import.meta.url);
  await jA("./battle-BT4B2MQU.js", import.meta.url);
  await jA("./collisions-PYGJA7YX.js", import.meta.url);
  let jN = await jA("./fightsetup-MYY3L3NB.js", import.meta.url);
  let jV = await jA("./c-FKDNMQDJ.js", import.meta.url);
  try {
    await jA("./c-VFC4CBUA.js", import.meta.url);
  } catch {}
  e = {
    gm: jt,
    G: jm.G,
    FIGHTS: jJ.FIGHTS,
    setup: jN,
    RC: jV
  };
  jI.engine = Math.round(now() - jS);
  return {
    webcodecs: typeof VideoEncoder == "function" && typeof VideoFrame == "function",
    offscreen: typeof OffscreenCanvas == "function",
    boot: jI
  };
}
O(boot, "boot");
async function packFor(jH) {
  try {
    await (await jA("./c-YW5GDMJD.js", import.meta.url)).loadFightCode(jH);
  } catch {}
  let jS = jH && jH.chapter;
  if (typeof jS == "number" && !(jS < 4)) {
    try {
      await (await jA("./chapterpack-D45U4UKK.js", import.meta.url)).loadChapterPack(jS);
    } catch {}
    proxySprites(jI => jI.endsWith("@ch" + jS), true);
  }
}
O(packFor, "packFor");
var jW = null;
var jK = -1;
var jf = null;
var jo = null;
var jz = null;
var jn = null;
var jl = null;
var jL = null;
var jM = {
  fade: 0
};
var jU = 0;
var jr = 0;
function rebuild() {
  let {
    gm: jH,
    RC: jS
  } = e;
  Object.assign(jH.Sandbox, P.sandbox || {});
  jH.Input.synthetic = null;
  jf = jS.stage(jW.fx, P.d, P.cfg);
  jn = null;
  jM.fade = 0;
  jK = 0;
}
O(rebuild, "rebuild");
function step(jH, jS) {
  let jI = e.RC.stepFrame(jW, P.bits, jH, jS);
  if (jI) {
    jr++;
    if (jI < 0 && !jU) {
      jU = jH;
    }
  }
  jK = jH;
}
O(step, "step");
async function seekTo(jH, jS) {
  let {
    RC: jI
  } = e;
  if (jK < 0 || jK > jH) {
    rebuild();
  }
  if (jK < jH) {
    e.gm.setCurG(jf);
    jn = null;
  }
  let jt = 0;
  while (jK < jH) {
    let jk = jK + 1;
    step(jk, jf);
    if (jk >= P.from && (jk - P.from) % P.stride === 0) {
      jI.fadeStep(jM);
    }
    if (++jt % 64 === 0 && (jS && jS(jk), await j5(), j3)) {
      return false;
    }
  }
  return true;
}
O(seekTo, "seekTo");
var jQ = [];
var jG = 0;
var jw = 0;
var TapVoice = class p4 {
  constructor(jH, jS, jI) {
    this._id = jH;
    this._vol = jS;
    this._rate = jI;
    this.paused = true;
    this.ended = true;
    this.loop = false;
    this.duration = 0;
  }
  get volume() {
    return this._vol;
  }
  set volume(jH) {
    let jS = Number(jH);
    if (!!Number.isFinite(jS) && jS !== this._vol) {
      this._vol = jS;
      jQ.push(["v", jG, this._id, jS]);
    }
  }
  get playbackRate() {
    return this._rate;
  }
  set playbackRate(jH) {
    let jS = Number(jH);
    if (!!Number.isFinite(jS) && jS !== this._rate) {
      this._rate = jS;
      jQ.push(["r", jG, this._id, jS]);
    }
  }
  get currentTime() {
    return 0;
  }
  set currentTime(jH) {
    let jS = Number(jH);
    if (Number.isFinite(jS)) {
      jQ.push(["t", jG, this._id, jS]);
    }
  }
  pause() {
    jQ.push(["s", jG, this._id]);
  }
  play() {
    jQ.push(["u", jG, this._id]);
    return Promise.resolve();
  }
};
O(TapVoice, "TapVoice");
var jY = TapVoice;
function tapOn() {
  let jH = e.gm;
  jH.AudioTap.sfx = (jS, jI) => {
    let jt = jI && typeof jI == "object" ? jI : {};
    let jk = Math.max(0, Math.min(1, (jt.volume ?? 1) * (jH.Sandbox.sfxvol ?? 1)));
    let jd = ++jw;
    jQ.push(["p", jG, jd, String(jS), jH.CurrentChapter, jk, jt.pitch || 1, !!jt.loop]);
    return new jY(jd, jk, jt.pitch || 1);
  };
  jH.AudioTap.stop = jS => {
    if (jS == null) {
      jQ.push(["a", jG]);
    } else {
      jQ.push(["n", jG, String(jS), jH.CurrentChapter]);
    }
  };
}
O(tapOn, "tapOn");
var jC = new WeakMap();
var jX = 0;
var jy = new Map();
function sampleMusic(jH) {
  let jS = e.gm;
  let jI = new Set();
  for (let jt of jS.music_stems()) {
    let jk = jS.music_track(jt.name);
    if (!jk) {
      continue;
    }
    let jd = jC.get(jk);
    if (!jd) {
      jd = ++jX;
      jC.set(jk, jd);
    }
    jI.add(jd);
    let jq = Number.isFinite(jk._clock) ? jk._clock : jk.currentTime || 0;
    let jm = {
      clock: jq,
      vol: jk.volume,
      rate: jk.playbackRate || 1,
      paused: !!jk.paused || !!jk.ended
    };
    let jJ = jy.get(jd);
    let jN = jJ ? jJ.clock + (jJ.paused ? 0 : 0.03333333333333333) : null;
    if (!jJ || Math.abs(jN - jq) > 0.000001 || jJ.vol !== jm.vol || jJ.rate !== jm.rate || jJ.paused !== jm.paused) {
      jQ.push(["m", jH, jd, jk.name, jS.CurrentChapter, jq, jm.vol, jm.rate, jm.paused, !!jk.loop]);
    }
    jy.set(jd, jm);
  }
  for (let jV of jy.keys()) {
    if (!jI.has(jV)) {
      jQ.push(["x", jH, jV]);
      jy.delete(jV);
    }
  }
}
O(sampleMusic, "sampleMusic");
async function runScout() {
  let {
    gm: jH,
    RC: jS
  } = e;
  tapOn();
  rebuild();
  let jI = P.to;
  let jt = now();
  let jk = null;
  let jd = 0;
  let jq = 0;
  let jm = (jJ, jN) => {
    let jV = m.splice(0);
    let ji = jQ;
    jQ = [];
    self.postMessage({
      t: "scout",
      upto: jJ,
      keys: jV,
      au: ji,
      drift: jU,
      checks: jr,
      ms: now() - jt,
      final: !!jN
    });
  };
  while (jK < jI) {
    let jJ = jK + 1;
    jG = jJ;
    if (jJ >= P.from && !jk) {
      jk = jS.takeOver(j4);
    }
    step(jJ, jk || jf);
    if (jk) {
      try {
        jH.presentFrame(jk, 1);
      } catch {}
    }
    sampleMusic(jJ);
    jq++;
    if (jJ < P.from - 1) {
      for (let jN of m) {
        d.delete(jN);
      }
      m.length = 0;
    }
    if (m.length || jJ - jd >= 30) {
      jm(jJ);
      jd = jJ;
    }
    if (jq % 32 === 0 && (await j5(), j3)) {
      return;
    }
  }
  jm(jI, true);
}
O(runScout, "runScout");
var je = null;
var ju = null;
var jR = [];
var jB = [];
var ja = {
  step: 0,
  present: 0,
  frame: 0,
  encode: 0,
  wait: 0
};
function newEncoder() {
  ju = null;
  let jH = new VideoEncoder({
    output: jS => {
      let jI = new Uint8Array(jS.byteLength);
      jS.copyTo(jI);
      jR.push([Math.round(jS.timestamp * 30 / 1000000) + P.from, jS.type === "key" ? 1 : 0, jI]);
      jB.push(jI.buffer);
    },
    error: jS => {
      ju = jS && jS.message || String(jS);
    }
  });
  jH.configure(P.codec);
  return jH;
}
O(newEncoder, "newEncoder");
function flushOut(jH) {
  if (!jR.length && !jH) {
    return;
  }
  let jS = jR;
  let jI = jB;
  jR = [];
  jB = [];
  self.postMessage(Object.assign({
    t: "chunks",
    chunks: jS
  }, jH || null), jI);
}
O(flushOut, "flushOut");
async function waitFrontier(jH) {
  while (j0 < jH && !j3) {
    await new Promise(jS => {
      j1 = jS;
    });
  }
}
O(waitFrontier, "waitFrontier");
async function runTask(jH) {
  let {
    gm: jS,
    RC: jI
  } = e;
  let jt = jH.a;
  let jk = jH.b;
  if (j2 && j2.id !== jH.id) {
    j2 = null;
  }
  let jd = now();
  let jq = Math.max(0, jt - 1 - (jK < 0 || jK > jt - 1 ? 0 : jK));
  let jm = (jh, p0) => self.postMessage({
    t: "prog",
    id: jH.id,
    phase: p0,
    f: jh,
    a: jt,
    b: jk,
    seekN: jq,
    ms: now() - jd
  });
  if (!(await seekTo(jt - 1, jh => jm(jh, "seek")))) {
    return;
  }
  let jJ = now();
  if (!jo) {
    jo = new OffscreenCanvas(F, S);
    jz = jo.getContext("2d");
    if (P.gif) {
      jl = new OffscreenCanvas(320, 240);
      jL = jl.getContext("2d", {
        willReadFrequently: true
      });
    }
  }
  if (jn) {
    jS.setCurG(jn);
  } else {
    jn = jI.takeOver(jz);
  }
  if (!P.gif && !je) {
    je = newEncoder();
  }
  let jN = true;
  let jV = 0;
  let ji = [];
  for (let jh = jt; jh <= jk && (!j2 || j2.id !== jH.id || !(jk = Math.max(jh - 1, Math.min(jk, j2.b)), self.postMessage({
    t: "shrunk",
    id: jH.id,
    b: jk
  }), j2 = null, jh > jk)); jh++) {
    await waitFrontier(jh);
    if (j3) {
      return;
    }
    i = new Set();
    let p0 = now();
    step(jh, jn);
    let p1 = now();
    let p2 = (jh - P.from) % P.stride === 0;
    if (p2) {
      jI.present(jz, jn, P.scale, jM);
    }
    ja.step += p1 - p0;
    ja.present += now() - p1;
    let p3 = i.size ? [...i] : null;
    i = null;
    if (p2) {
      if (p3) {
        ji.push(jh);
        self.postMessage({
          t: "hole",
          id: jH.id,
          f: jh,
          rest: jk,
          keys: p3
        });
        jk = jh - 1;
        jK = -1;
        jn = null;
        break;
      }
      if (P.probe && P.probe.includes(jh)) {
        let p5 = jz.getImageData(0, 0, F, S).data;
        self.postMessage({
          t: "probe",
          f: jh,
          w: F,
          h: S,
          px: p5.buffer
        }, [p5.buffer]);
      }
      if (P.gif) {
        jL.imageSmoothingEnabled = false;
        jL.drawImage(jo, 0, 0, F, S, 0, 0, 320, 240);
        let p6 = jL.getImageData(0, 0, 320, 240).data;
        self.postMessage({
          t: "gif",
          f: jh,
          px: p6.buffer
        }, [p6.buffer]);
      } else {
        if (ju) {
          throw new Error(ju);
        }
        let p7 = jh - P.from;
        let p8 = jN || jh % 60 === 0;
        let p9 = now();
        let pj = new VideoFrame(jo, {
          timestamp: Math.round(p7 * 1000000 / 30),
          duration: Math.round(33333.333333333336)
        });
        let pp = now();
        try {
          je.encode(pj, {
            keyFrame: p8
          });
        } finally {
          pj.close();
        }
        jN = false;
        let pc = now();
        while (je.encodeQueueSize > 3 && !ju && !j3) {
          await new Promise(pW => {
            let pK = setTimeout(pW, 20);
            je.addEventListener("dequeue", () => {
              clearTimeout(pK);
              pW();
            }, {
              once: true
            });
          });
        }
        ja.frame += pp - p9;
        ja.encode += pc - pp;
        ja.wait += now() - pc;
      }
      jV++;
      if (jV % 8 === 0 && (flushOut(), jm(jh, "draw"), await j5(), j3)) {
        return;
      }
    }
  }
  if (je && (await je.flush(), ju)) {
    throw new Error(ju);
  }
  if (je) {
    try {
      je.close();
    } catch {}
    je = null;
  }
  flushOut({
    done: jH.id,
    a: jt,
    b: jk,
    at: jK,
    holes: ji,
    drift: jU,
    checks: jr,
    msSeek: jJ - jd,
    msDraw: now() - jJ,
    seekN: jq,
    drawn: jV,
    prof: {
      ...ja
    }
  });
}
O(runTask, "runTask");
var jZ = Promise.resolve();
self.onmessage = jH => {
  let jS = jH.data || {};
  if (jS.cmd === "sprites") {
    for (let [jI, jt, jk] of jS.list) {
      let jd = t.get(jI);
      if (!jd) {
        t.set(jI, jd = []);
      }
      jd[jt] = jk && typeof jk == "object" && !("close" in jk) && "w" in jk ? new OffscreenCanvas(Math.max(0, jk.w | 0), Math.max(0, jk.h | 0)) : jk || null;
    }
    for (let jq of [jn, jf]) {
      if (jq) {
        try {
          jq.tintCache.clear();
          jq.palCache.clear();
          jq.palTables.clear();
          if (jq.spriteTints) {
            jq.spriteTints.clear();
          }
          if (jq.tintBySize) {
            jq.tintBySize.clear();
          }
        } catch {}
      }
    }
    return;
  }
  if (jS.cmd === "frontier") {
    j0 = Math.max(j0, jS.f | 0);
    let jm = j1;
    j1 = null;
    if (jm) {
      jm();
    }
    return;
  }
  if (jS.cmd === "shrink") {
    j2 = {
      id: jS.id,
      b: jS.b | 0
    };
    return;
  }
  if (jS.cmd === "cancel") {
    j3 = true;
    let jJ = j1;
    j1 = null;
    if (jJ) {
      jJ();
    }
    return;
  }
  jZ = jZ.then(async () => {
    try {
      if (jS.cmd === "boot") {
        let jN = await boot(jS);
        self.postMessage({
          t: "ready",
          caps: jN,
          role: a
        });
        return;
      }
      if (jS.cmd === "job") {
        P = jS.job;
        let jV = e.FIGHTS.find(ji => ji && ji.id === P.d.fight);
        if (!jV || jV.mode) {
          self.postMessage({
            t: "nofight"
          });
          return;
        }
        await packFor(jV);
        if (a === "render" && !P.gif) {
          let ji = false;
          try {
            ji = typeof VideoEncoder == "function" && !!(await VideoEncoder.isConfigSupported(P.codec)).supported;
          } catch {
            ji = false;
          }
          if (!ji) {
            self.postMessage({
              t: "nocodec"
            });
            return;
          }
        }
        jW = e.RC.prepare(P.d, jV);
        jK = -1;
        F = (P.scale === 2 ? 2 : 1) * 640;
        S = (P.scale === 2 ? 2 : 1) * 480;
        self.postMessage({
          t: "jobok"
        });
        if (a === "scout") {
          await runScout();
        }
        return;
      }
      if (jS.cmd === "task") {
        await runTask(jS.task);
        return;
      }
    } catch (jh) {
      self.postMessage({
        t: "error",
        err: String(jh && jh.message || jh),
        stack: String(jh && jh.stack || "").slice(0, 600)
      });
    }
  });
};
function jA(jH, jS) {
  var jI = new URL(jH, jS).href;
  var jt = globalThis.__drWarm;
  return (jt ? jt(jI) : Promise.resolve()).then(function () {
    return import(jI).catch(function (jk) {
      try {
        jk.reload = true;
        jk.what = "the game code";
      } catch (jd) {}
      throw jk;
    });
  });
}
