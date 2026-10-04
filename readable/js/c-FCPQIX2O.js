const h = function () {
  ;
  let T8 = true;
  return function (T9, TT) {
    const TZ = T8 ? function () {
      if (TT) {
        const TN = TT.apply(T9, arguments);
        TT = null;
        return TN;
      }
    } : function () {};
    T8 = false;
    return TZ;
  };
}();
import { a as s, l } from "./c-PIEPTJTC.js";
l();
var Y = null;
var n = null;
var d = false;
var w = [];
var y = {
  fight: null,
  seed: 0,
  frames: 0
};
function installShims() {
  let T8 = new Proxy({}, {
    get(TT, TZ) {
      if (TZ === "canvas") {
        return {
          width: 640,
          height: 480
        };
      } else if (TZ === "measureText") {
        return () => ({
          width: 0
        });
      } else if (TZ === "getImageData") {
        return () => ({
          data: new Uint8ClampedArray(4)
        });
      } else if (TZ === "createPattern" || TZ === "createLinearGradient") {
        return () => null;
      } else {
        return () => {};
      }
    },
    set() {
      return true;
    }
  });
  let T9 = () => T8;
  self.window = self;
  self.document = {
    createElement: () => ({
      getContext: T9,
      width: 0,
      height: 0,
      style: {},
      addEventListener() {},
      removeEventListener() {},
      remove() {}
    }),
    getElementById: () => ({
      getContext: T9,
      focus() {},
      appendChild() {},
      addEventListener() {}
    }),
    addEventListener() {},
    removeEventListener() {},
    body: {
      appendChild() {}
    }
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
  };
  self.localStorage = {
    getItem: () => null,
    setItem() {},
    removeItem() {}
  };
  self.requestAnimationFrame = () => 0;
}
s(installShims, "installShims");
async function boot(T8) {
  installShims();
  let T9 = await T7("./gm-DVHMTG3U.js", import.meta.url);
  for (let [Tn, Td] of Object.entries(T8.sprites)) {
    T9.Sprites[Tn] = {
      name: Tn,
      ...Td,
      img: {
        length: Td.frames
      }
    };
  }
  for (let [Tw, Ty] of Object.entries(T8.fonts)) {
    T9.Fonts[Tw] = {
      ...Ty,
      img: {
        width: 256,
        height: 256
      }
    };
  }
  let TT = await T7("./globals-Y7HSE7MN.js", import.meta.url);
  let TZ = await T7("./fights-7SUHM6IN.js", import.meta.url);
  let TN = await T7("./c-YW5GDMJD.js", import.meta.url);
  let Tm = await T7("./battle-BT4B2MQU.js", import.meta.url);
  let TQ = await T7("./collisions-PYGJA7YX.js", import.meta.url);
  let TF = await T7("./snapshot-XNSQF3I5.js", import.meta.url);
  let TS = await T7("./autoplay-BN5PY2E6.js", import.meta.url);
  let Ti = await T7("./beam-NXNPPO2V.js", import.meta.url);
  let TI = await T7("./fightsetup-MYY3L3NB.js", import.meta.url);
  let Th = await T7("./ut_karma-YZRTWBUW.js", import.meta.url);
  let TC = await T7("./oracle-JIZ4HJL7.js", import.meta.url);
  let Ts = await T7("./wiresnap-VSWJPGTH.js", import.meta.url);
  let TK = null;
  try {
    TK = (await T7("./c-PDMKFG45.js", import.meta.url)).forceAttackTick;
  } catch {}
  let Tl = null;
  try {
    Tl = (await T7("./c-VFC4CBUA.js", import.meta.url)).guardTick;
  } catch {}
  let TY = null;
  let TB = null;
  try {
    let Tp = await T7("./c-OLHKEXN2.js", import.meta.url);
    TY = Tp.pinAttack;
    TB = Tp.findAttack;
  } catch {}
  Y = {
    gm: T9,
    ...TT,
    ...TZ,
    ...TN,
    ...Tm,
    COLLISIONS: TQ.COLLISIONS,
    ...TF,
    AP: TS,
    ...Ti,
    ...TI,
    karmaStep: Th.karmaStep,
    oraclePlan: TC.oraclePlan,
    oracleStats: TC.oracleStats,
    oracleCovers: TC.oracleCovers,
    applyWorld: Ts.applyWorld,
    loadClassModules: Ts.loadClassModules,
    forceAttackTick: TK,
    pinAttack: TY,
    findAttack: TB,
    guardTick: Tl,
    deepDump: Ts.deepDump
  };
  Y.GFX = TF.nullGfx(T9.Gfx);
  return {
    obs: true
  };
}
s(boot, "boot");
function signature() {
  let {
    gm: T8,
    G: T9
  } = Y;
  let TT = T8.World.first("obj_heart") || T8.World.first("obj_purpleheart");
  let TZ = typeof T9.hp == "number" ? T9.hp : Array.isArray(T9.hp) ? (T9.hp[1] || 0) + (T9.hp[2] || 0) + (T9.hp[3] || 0) : 0;
  return (TT ? (TT.x | 0) + "," + (TT.y | 0) : "none") + "|" + TZ + "|" + T8.World.list.length + "|" + (T9.mnfight | 0);
}
s(signature, "signature");
var g = {};
function applyEnv(T8) {
  if (T8) {
    g = T8;
    Y.G.godmode = !!T8.god;
    Y.G.forceAttack = T8.force;
  }
}
s(applyEnv, "applyEnv");
function envBefore() {
  let {
    G: T8,
    gm: T9
  } = Y;
  if (g.pin && Y.pinAttack) {
    let TT = Y.FIGHTS.find(TN => TN.id === y.fight);
    let TZ = TT ? Y.findAttack(TT, g.pin) : null;
    if (TZ) {
      try {
        Y.pinAttack(T9.World, TZ);
      } catch {}
    }
  }
  if (g.refill) {
    if (typeof T8.hp == "number") {
      T8.hp = T8.maxhp || 20;
    } else if (T8.hp && T8.maxhp) {
      let TN = Array.isArray(T8.char) ? T8.char : [1, 2, 3];
      for (let Tm of TN) {
        if (Tm && T8.maxhp[Tm]) {
          T8.hp[Tm] = T8.maxhp[Tm];
        }
      }
    }
    if (typeof T8.karma == "number") {
      T8.karma = 0;
    }
  }
}
s(envBefore, "envBefore");
function envAfter() {
  let {
    G: T8
  } = Y;
  if (g.skip) {
    try {
      Y.skipDialogue();
    } catch {}
    if (Array.isArray(T8.monsterhp) && Array.isArray(T8.monstermaxhp)) {
      for (let T9 = 0; T9 < 3; T9++) {
        if ((!T8.monster || T8.monster[T9]) && T8.monstermaxhp[T9] > 0) {
          T8.monsterhp[T9] = T8.monstermaxhp[T9];
        }
      }
    }
  }
}
s(envAfter, "envAfter");
var o = ["b1", "b2", "b3", "left", "right", "up", "down"];
function manualInput(T8) {
  let T9 = Y.gm.Input;
  return () => {
    for (let TT = 0; TT < o.length; TT++) {
      let TZ = o[TT];
      T9.held[TZ] = !!(T8 & 1 << TT);
      T9.pressed[TZ] = !!(T8 & 1 << TT + 8);
      T9.released[TZ] = !!(T8 & 1 << TT + 16);
    }
  };
}
s(manualInput, "manualInput");
function inputBits(T8) {
  let T9 = 0;
  for (let TT = 0; TT < o.length; TT++) {
    let TZ = o[TT];
    if (T8.held[TZ]) {
      T9 |= 1 << TT;
    }
    if (T8.pressed[TZ]) {
      T9 |= 1 << TT + 8;
    }
    if (T8.released[TZ]) {
      T9 |= 1 << TT + 16;
    }
  }
  return T9 >>> 0;
}
s(inputBits, "inputBits");
function handPlan(T8, T9, TT) {
  let {
    gm: TZ,
    G: TN,
    AP: Tm
  } = Y;
  let TQ = TZ.Input;
  let TF = Y.snapshot();
  let TS = Tm.saveAutoplayState();
  let Ti = TQ.synthetic;
  let TI = {
    ...g
  };
  let Th = [];
  let TC = null;
  if (Tm.setRolloutBudget) {
    Tm.setRolloutBudget(TT || 0);
  }
  try {
    for (let Ts = 0; Ts < T8; Ts++) {
      let TK = TZ.World.first("obj_heart") || TZ.World.first("obj_purpleheart");
      if (!TK || !T9 && Y.oracleCovers(TK)) {
        break;
      }
      let Tl = TN.mnfight;
      envBefore();
      Tm.autoplayUI();
      Tm.autoplayStep(null, TK);
      let TY = 0;
      let TB = TQ.synthetic;
      TQ.synthetic = Tn => {
        if (TB) {
          TB(Tn);
        }
        TY = inputBits(TQ);
      };
      try {
        frameCore();
      } finally {
        TQ.synthetic = TB;
      }
      envAfter();
      Th.push(TY);
      if (TN.battleover || TN.mnfight !== Tl) {
        break;
      }
    }
    if (Th.length) {
      TC = Tm.saveAutoplayState();
    }
  } finally {
    Y.restore(TF);
    Tm.loadAutoplayState(TS);
    TQ.synthetic = Ti;
    g = TI;
    if (Tm.setRolloutBudget) {
      Tm.setRolloutBudget(0);
    }
  }
  return {
    bits: Th,
    ap: TC
  };
}
s(handPlan, "handPlan");
function stepMirror(T8) {
  let {
    gm: T9,
    G: TT,
    COLLISIONS: TZ,
    GFX: TN,
    AP: Tm
  } = Y;
  let TQ = T9.Input;
  applyEnv(T8.env);
  envBefore();
  if (T8.w !== undefined) {
    TQ.synthetic = manualInput(T8.w >>> 0);
    try {
      frameCore();
    } finally {
      TQ.synthetic = null;
    }
    if (T8.ap) {
      Tm.loadAutoplayState(T8.ap);
    }
    envAfter();
    if (d) {
      w.push({
        f: y.frames + 1,
        d: Y.deepDump()
      });
    }
    return;
  }
  let TF = T9.World.first("obj_heart") || T9.World.first("obj_purpleheart");
  Tm.autoplayUI();
  if (T8.a) {
    Tm.applyPlanKeys(T8.k, T8.e);
  } else {
    Tm.autoplayStep(null, TF || null);
  }
  frameCore();
  envAfter();
  if (d) {
    w.push({
      f: y.frames + 1,
      d: Y.deepDump()
    });
  }
}
s(stepMirror, "stepMirror");
function frameCore() {
  let {
    gm: T8,
    G: T9,
    COLLISIONS: TT,
    GFX: TZ
  } = Y;
  if (T8.Sandbox.freetp) {
    T9.tension = T9.maxtension;
  }
  try {
    Y.karmaStep();
  } catch {}
  if (T9.godmode) {
    if (typeof T9.hp == "number") {
      T9.hp = T9.maxhp || 20;
    } else {
      for (let TN = 1; TN <= 3; TN++) {
        if (T9.maxhp[TN]) {
          T9.hp[TN] = T9.maxhp[TN];
        }
      }
    }
    T9.karma = 0;
  }
  T9.pressedDebugKeys = null;
  if (Y.forceAttackTick) {
    try {
      Y.forceAttackTick();
    } catch {}
  }
  try {
    T8.runFrame(TT, TZ);
  } catch {}
  if (Y.guardTick && y.f) {
    try {
      Y.guardTick(y.f, {
        ut: !!Y.isUndertale(y.f),
        strict: !!y.cfg && !!y.cfg.guardstrict
      });
    } catch {}
  }
}
s(frameCore, "frameCore");
async function packReady(T8) {
  let T9 = Y.FIGHTS.find(TZ => TZ.id === T8);
  if (T9 && !Y.fightCodeReady(T9)) {
    try {
      await Y.loadFightCode(T9);
    } catch {}
  }
  if (T9 && T9.mod) {
    try {
      await (await T7("./c-KQJ2KXSW.js", import.meta.url)).loadMod(T9.mod);
    } catch {}
    return;
  }
  let TT = T9 && T9.chapter;
  if (typeof TT == "number" && !(TT < 4)) {
    try {
      await (await T7("./chapterpack-D45U4UKK.js", import.meta.url)).loadChapterPack(TT);
    } catch {}
  }
}
s(packReady, "packReady");
function rebuild(T8, T9, TT) {
  let {
    G: TZ,
    FIGHTS: TN,
    buildFight: Tm,
    isUndertale: TQ,
    startUndertaleFight: TF,
    applyEncounter: TS,
    startDeltaruneController: Ti
  } = Y;
  let TI = TN.find(Th => Th.id === T8);
  if (TI) {
    Tm(TI, {
      seed: T9,
      cfg: TT || {}
    });
    Y.AP.resetAutoplayState();
    if (TQ(TI)) {
      TF(TI);
    } else {
      TS(TI);
      Ti(TI, TT || {});
    }
    TZ.autoplay = true;
    g = {};
    y = {
      fight: T8,
      seed: T9,
      frames: 0,
      cfg: TT || {},
      epoch: 0,
      f: TI
    };
    return true;
  } else {
    return false;
  }
}
s(rebuild, "rebuild");
function rebuildAt(T8, T9, TT, TZ) {
  if (!rebuild(T8, T9, TT)) {
    return "no fight " + T8;
  }
  let TN = Y.applyWorld(TZ);
  return TN || (TZ.ap ? Y.AP.loadAutoplayState(TZ.ap) : Y.AP.resetAutoplayState(), null);
}
s(rebuildAt, "rebuildAt");
var T3 = null;
function takeCheckpoint() {
  let {
    gm: T8
  } = Y;
  T3 = {
    epoch: y.epoch,
    fight: y.fight,
    frames: y.frames,
    snap: Y.snapshot(),
    ap: Y.AP.saveAutoplayState(),
    env: {
      ...g
    },
    music: T8.music_name ? {
      name: T8.music_name(),
      pos: T8.music_position()
    } : null
  };
}
s(takeCheckpoint, "takeCheckpoint");
function restoreCheckpoint() {
  let {
    gm: T8
  } = Y;
  Y.restore(T3.snap);
  Y.AP.loadAutoplayState(T3.ap);
  g = {
    ...T3.env
  };
  if (T3.music && T3.music.name && T8.music_track) {
    let T9 = T8.music_track(T3.music.name);
    if (T9) {
      T8.audio_sound_set_track_position(T9, T3.music.pos);
    }
  }
  y.frames = T3.frames;
}
s(restoreCheckpoint, "restoreCheckpoint");
function advance(T8, T9, TT, TZ, TN, Tm, TQ) {
  if (y.fight !== T8 || y.seed !== T9 || y.epoch !== TN) {
    return false;
  }
  if (TQ) {
    if (!T3 || T3.epoch !== TN || T3.fight !== T8 || T3.frames !== TT) {
      return false;
    }
    restoreCheckpoint();
  }
  if (y.frames !== TT) {
    return false;
  }
  if (Tm === y.frames) {
    takeCheckpoint();
  }
  for (let TF of TZ) {
    stepMirror(TF);
    y.frames++;
    if (Tm === y.frames) {
      takeCheckpoint();
    }
  }
  return true;
}
s(advance, "advance");
self.onmessage = async T8 => {
  let T9 = T8.data;
  let TT = TZ => self.postMessage(Object.assign(TZ, {
    epoch: T9.epoch,
    rev: T9.rev,
    spec: !!T9.spec,
    specId: T9.specId,
    hand: !!T9.hand
  }, T9.cmd === "advance" ? {
    t: "adv"
  } : null));
  try {
    if (T9.cmd === "boot") {
      try {
        await boot(T9.assets);
      } catch (TZ) {
        self.postMessage({
          t: "booterr",
          id: T9.id,
          err: String(TZ && TZ.message || TZ)
        });
        return;
      }
      self.postMessage({
        t: "ready",
        id: T9.id
      });
      n = Y.loadClassModules().catch(() => {});
      return;
    }
    if (T9.cmd === "plan" || T9.cmd === "advance") {
      let TN = performance.now();
      if (!Y) {
        TT({
          t: "plan",
          id: T9.id,
          epoch: T9.epoch,
          line: null,
          err: "not booted"
        });
        return;
      }
      if (T9.full) {
        await packReady(T9.fight);
        if (T9.wire) {
          await Y.loadClassModules().catch(() => {});
          let TF = rebuildAt(T9.fight, T9.seed, T9.cfg, T9.wire);
          if (TF) {
            y = {
              fight: null
            };
            TT({
              t: "plan",
              id: T9.id,
              epoch: T9.epoch,
              err: "rebuild at jump: " + TF,
              wireFail: true
            });
            return;
          }
        } else {
          rebuild(T9.fight, T9.seed, T9.cfg);
        }
        y.epoch = T9.epoch;
      }
      d = !!T9.deep;
      w = [];
      let Tm = performance.now();
      if (!advance(T9.fight, T9.seed, T9.full ? 0 : T9.base, T9.delta || [], T9.epoch, T9.safe, !T9.full && T9.rewind)) {
        TT({
          t: "plan",
          id: T9.id,
          epoch: T9.epoch,
          rev: T9.rev,
          need: "full",
          have: y.frames
        });
        return;
      }
      if (T9.cmd === "advance") {
        TT({
          id: T9.id,
          at: y.frames,
          safe: T3 && T3.epoch === T9.epoch ? T3.frames : -1,
          sig: signature(),
          ms: performance.now() - TN
        });
        return;
      }
      applyEnv(T9.env);
      if (T9.opts && T9.opts.algo === "hand") {
        let TS = performance.now();
        let {
          bits: Ti,
          ap: TI
        } = handPlan(T9.opts.n || 12, !!T9.opts.ignoreCover, Number(T9.opts.budget) || 0);
        TT({
          t: "plan",
          id: T9.id,
          algo: "hand",
          at: y.frames,
          safe: T3 && T3.epoch === T9.epoch ? T3.frames : -1,
          sig: signature(),
          bits: Ti,
          ap: TI,
          ms: performance.now() - TN,
          prof: {
            full: !!T9.full,
            dl: (T9.delta || []).length,
            adv: TS - Tm,
            orc: performance.now() - TS,
            objs: Y.gm.World.list.length
          }
        });
        return;
      }
      if (T9.opts && T9.opts.algo === "oracle") {
        let Th = signature();
        let TC = performance.now();
        let Ts = Y.oracleStats.frames;
        let TK = Y.oracleStats.plans;
        let Tl = Y.oraclePlan(T9.opts);
        let TY = {
          full: !!T9.full,
          dl: (T9.delta || []).length,
          adv: TC - Tm,
          pre: Tm - TN,
          orc: performance.now() - TC,
          sim: Y.oracleStats.frames - Ts,
          once: Y.oracleStats.plans - TK,
          objs: Y.gm.World.list.length
        };
        let TB = signature();
        if (TB !== Th) {
          TT({
            t: "plan",
            id: T9.id,
            epoch: T9.epoch,
            rev: T9.rev,
            err: "plan changed the world: " + Th + " -> " + TB
          });
          y = {
            fight: null
          };
          return;
        }
        TT({
          t: "plan",
          id: T9.id,
          epoch: T9.epoch,
          rev: T9.rev,
          safe: T3 && T3.epoch === T9.epoch ? T3.frames : -1,
          at: y.frames,
          sig: signature(),
          algo: "oracle",
          deeps: d ? w : undefined,
          keys: Tl ? Tl.keys : null,
          lost: Tl ? Tl.hits : 0,
          ms: performance.now() - TN,
          prof: TY
        });
        return;
      }
      let TQ = Y.beamBest(T9.opts);
      self.postMessage({
        t: "plan",
        id: T9.id,
        epoch: T9.epoch,
        rev: T9.rev,
        safe: T3 && T3.epoch === T9.epoch ? T3.frames : -1,
        at: y.frames,
        sig: signature(),
        names: T9.wantNames ? Y.gm.World.list.filter(Tn => !Tn.destroyed).map(Tn => Tn.constructor.name).sort() : undefined,
        line: TQ ? TQ.line : null,
        lost: TQ ? TQ.lost : 0,
        ms: performance.now() - TN
      });
      return;
    }
  } catch (Tn) {
    TT({
      t: "plan",
      id: T9.id,
      epoch: T9.epoch,
      line: null,
      err: String(Tn && Tn.message || Tn)
    });
  }
};
function T7(T8, T9) {
  var TT = new URL(T8, T9).href;
  var TZ = globalThis.__drWarm;
  return (TZ ? TZ(TT) : Promise.resolve()).then(function () {
    return import(TT).catch(function (TN) {
      try {
        TN.reload = true;
        TN.what = "the game code";
      } catch (Tm) {}
      throw TN;
    });
  });
}
