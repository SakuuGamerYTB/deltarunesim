const j = function () {
  ;
  let vZ = true;
  return function (vT, vx) {
    const vO = vZ ? function () {
      if (vx) {
        const vN = vx.apply(vT, arguments);
        vx = null;
        return vN;
      }
    } : function () {};
    vZ = false;
    return vO;
  };
}();
import { e as y, g as t } from "./c-SATHSCNU.js";
import { D as d, E as g, F as N } from "./c-SEM2A64W.js";
import { o as k } from "./c-EUQCKUJR.js";
import { b as s } from "./c-YJJCI5ES.js";
import { Eb as h, N as v0, fb as v1, qa as v2, qb as v3 } from "./c-FMIAGHDE.js";
import { a as v4, l as v5 } from "./c-PIEPTJTC.js";
v5();
var v6 = {
  stall: 450,
  dialogPresses: 6,
  dialogStall: 300,
  noEnd: 300,
  retry: 150,
  nudge: 45,
  nudgePage: 45,
  nudgeLong: 1350,
  turnHard: 2700
};
var v7 = {
  key: "",
  same: 0,
  spawns: -1,
  presses: 0,
  rung: 0,
  lastAct: -1000000000,
  noEnd: 0,
  frame: 0,
  log: [],
  said: new Set(),
  fightId: null,
  ttLow: null,
  ttPinned: 0
};
var v8 = null;
var v9 = null;
function guardHooks(vZ) {
  v8 = vZ && vZ.toast || null;
  v9 = vZ && vZ.note || null;
}
v4(guardHooks, "guardHooks");
function guardReset(vZ) {
  v7.key = "";
  v7.same = 0;
  v7.spawns = -1;
  v7.presses = 0;
  v7.rung = 0;
  v7.lastAct = -1000000000;
  v7.noEnd = 0;
  v7.frame = 0;
  v7.log = [];
  v7.said = new Set();
  v7.fightId = vZ ?? null;
  v7.ttLow = null;
  v7.ttPinned = 0;
  v7.pinPresses = 0;
  v7.prevCore = "";
  v7.prog = vq.token;
  vb.frames = 0;
}
v4(guardReset, "guardReset");
var vq = {
  token: undefined
};
function guardProgress(vZ) {
  vq.token = vZ;
}
v4(guardProgress, "guardProgress");
function guardLog() {
  return v7.log.slice();
}
v4(guardLog, "guardLog");
var alive = v4(vZ => vZ && !vZ.destroyed, "alive");
var isA = v4((vZ, vT) => vZ && typeof vZ.is == "function" && vZ.is(vT), "isA");
function utChoiceAnswerable() {
  for (let vZ of v1.list) {
    if (!!alive(vZ) && !!/^(OBJ_WRITER|OBJ_INSTAWRITER|OBJ_NOMSCWRITER)$/.test(vZ.constructor.name) && (vZ.halt > 0 || /[/]|\\C/.test(String(vZ.originalstring ?? vZ.mystring ?? "")))) {
      return true;
    }
  }
  return false;
}
v4(utChoiceAnswerable, "utChoiceAnswerable");
function isWriter(vZ) {
  let vT = vZ.constructor.name;
  return isA(vZ, "obj_writer") || isA(vZ, "obj_base_writer") || vT === "OBJ_WRITER" || vT === "OBJ_INSTAWRITER" || vT === "OBJ_NOMSCWRITER";
}
v4(isWriter, "isWriter");
var isBalloon = v4(vZ => /^obj_(battle)?blcon/i.test(vZ.constructor.name) || isA(vZ, "obj_battleblcon"), "isBalloon");
function writers() {
  let vZ = [];
  for (let vT of v1.list) {
    if (alive(vT) && isWriter(vT)) {
      vZ.push(vT);
    }
  }
  return vZ;
}
v4(writers, "writers");
function balloons() {
  let vZ = [];
  for (let vT of v1.list) {
    if (alive(vT) && isBalloon(vT)) {
      vZ.push(vT);
    }
  }
  return vZ;
}
v4(balloons, "balloons");
var choiceUp = v4(() => v1.list.some(vZ => alive(vZ) && (/choicer/i.test(vZ.constructor.name) || isWriter(vZ) && vZ.halt === 5)), "choiceUp");
var strh = v4(vZ => {
  let vT = 0;
  vZ = String(vZ ?? "");
  for (let vx = 0; vx < vZ.length; vx++) {
    vT = Math.imul(vT ^ vZ.charCodeAt(vx), 31) >>> 0;
  }
  return vT;
}, "strh");
function textKey() {
  let vZ = [];
  for (let vT of writers()) {
    vZ.push(vT.constructor.name + ":" + (vT.msgno ?? "") + ":" + strh(vT.originalstring ?? vT.mystring));
  }
  for (let vx of balloons()) {
    vZ.push(vx.constructor.name);
  }
  return vZ.sort().join("|");
}
v4(textKey, "textKey");
var vb = {
  frames: 0,
  mn: 0,
  my: 0,
  z: true,
  from: -1,
  text: ""
};
function startNudge(vZ = true) {
  vb.frames = v6.nudgeLong;
  vb.mn = s.mnfight;
  vb.my = s.myfight;
  vb.z = vZ;
  vb.from = v1.frame;
  vb.text = textKey();
}
v4(startNudge, "startNudge");
function guardInput() {
  if (vb.frames <= 0) {
    return;
  }
  let vZ = v1.frame - vb.from;
  if (!(vZ < 0) && !(vZ >= vb.frames) && s.mnfight === vb.mn && s.myfight === vb.my && !s.battleover && !s.inGameOver && !choiceUp()) {
    if (textKey() === vb.text) {
      if (vZ >= v6.nudge) {
        return;
      }
    } else if (vZ % v6.nudgePage !== 0) {
      return;
    }
    y();
    if (vb.z) {
      if (!s.control_state || !s.control_state[0] || !v1.exists("obj_time")) {
        if (vZ % 2 === 0) {
          v0.pressed.b1 = true;
        }
      }
    }
  }
}
v4(guardInput, "guardInput");
h.guard = guardInput;
function guardNudge(vZ = true) {
  startNudge(vZ);
}
v4(guardNudge, "guardNudge");
function guardNudging() {
  let vZ = v1.frame - vb.from;
  return vb.frames > 0 && vZ >= 0 && vZ < vb.frames;
}
v4(guardNudging, "guardNudging");
var vG = new WeakMap();
var vH = 0;
var idOf = v4(vZ => {
  if (!vG.has(vZ)) {
    vG.set(vZ, ++vH);
  }
  return vG.get(vZ);
}, "idOf");
var live3 = v4(() => (s.monster[0] === 1 ? 1 : 0) + (s.monster[1] === 1 ? 1 : 0) + (s.monster[2] === 1 ? 1 : 0), "live3");
function drMenu() {
  return s.fighting === 1 && s.mnfight === 0 && s.myfight === 0;
}
v4(drMenu, "drMenu");
function utMenu() {
  return s.mnfight === 0 && s.myfight === 0;
}
v4(utMenu, "utMenu");
function ttClock() {
  let vZ = Number(s.turntimer) || 0;
  if (vZ > 0) {
    return vZ;
  } else {
    return 0;
  }
}
v4(ttClock, "ttClock");
function signature(vZ) {
  let vT = s.bmenucoord;
  let vx = s.mnfight + "|" + s.myfight + "|" + s.charturn + "|" + s.bmenuno + "|" + Math.floor(ttClock() / 15);
  let vO = vZ && s.bmenuno === 6 && !utChoiceAnswerable() ? "q" : vT && vT[6];
  if (vZ) {
    vx += "|" + (vT && vT[0]) + "," + (vT && vT[1]) + "," + (vT && vT[2]) + "," + (vT && vT[4]) + "," + vO;
  } else if (vT && Array.isArray(vT[0])) {
    vx += "|" + vT[0][s.charturn] + "," + (vT[s.bmenuno] && vT[s.bmenuno][s.charturn]);
  }
  for (let vN = 0; vN < 3; vN++) {
    vx += "|" + s.monster[vN] + "," + (s.monsterhp ? s.monsterhp[vN] : "") + "," + (s.mercymod ? s.mercymod[vN] : "");
  }
  for (let vi of writers()) {
    vx += "|w" + idOf(vi) + ":" + (vi.pos ?? "") + ":" + (vi.stringpos ?? "") + ":" + (vi.msgno ?? "") + ":" + (vi.halt ?? "");
  }
  return vx;
}
v4(signature, "signature");
function record(vZ, vT, vx, vO) {
  let vN = "mn " + s.mnfight + " my " + s.myfight + " bm " + s.bmenuno + " tt " + Math.round(Number(s.turntimer) || 0) + " monsters " + [0, 1, 2].map(vW => s.monster[vW]).join(",");
  let vi = {
    frame: v1.frame,
    kind: vZ,
    rung: vT,
    action: vO ? "detected (strict: not recovered)" : vx,
    where: vN
  };
  v7.log.push(vi);
  if (!v7.said.has(vZ + vT)) {
    v7.said.add(vZ + vT);
    console.warn("[guard] " + (v7.fightId || "") + " " + vZ + " stall: " + vi.action + " (" + vN + ")");
  }
  if (v9) {
    try {
      v9("guard", {
        kind: vZ,
        rung: vT,
        strict: !!vO
      });
    } catch {}
  }
  if (v8) {
    try {
      v8(vO ? "Guard: the fight is stuck (" + vZ + ") - strict mode, not recovering" : "Guard: the fight was stuck (" + vZ + ") - " + vx, {
        kind: "warn",
        id: "guard",
        ms: 5000
      });
    } catch {}
  }
}
v4(record, "record");
function drEndTurnDirect() {
  let vZ = v1.first("obj_battlecontroller");
  v1.with("obj_bulletparent", vT => vT.instance_destroy());
  v1.with("obj_bulletgenparent", vT => vT.instance_destroy());
  v1.with("obj_darkener", vT => {
    vT.darken = 0;
  });
  v1.with("obj_heart", vT => {
    v3(vT.x, vT.y, k);
    vT.instance_destroy();
  });
  if (vZ) {
    vZ.reset = 0;
    vZ.noreturn = 0;
    vZ.timeron = 1;
    vZ.alarm[2] = -1;
  }
  g();
}
v4(drEndTurnDirect, "drEndTurnDirect");
function drRescue(vZ, vT) {
  let vx = v1.first("obj_battlecontroller");
  if (vZ === "dialog") {
    if (vT === 0) {
      startNudge();
      return "advanced the text box with its own Z";
    } else if (s.mnfight === 1 || s.mnfight === 1.5) {
      return drRescue("talk", vT);
    } else if (s.myfight === 3 || s.myfight === 4 && !v1.exists("obj_spellphase")) {
      d();
      return "finished the ACT and went on (scr_attackphase)";
    } else if (s.myfight === 4) {
      startNudge();
      return "advanced the spell text with its own Z";
    } else {
      return drRescue("phase", vT - 1);
    }
  }
  if (vZ === "talk") {
    if (vT === 0) {
      startNudge();
      return "pressed Z for the enemy speech";
    }
    if (vT === 1) {
      let vO = 0;
      for (let vN = 0; vN < 3; vN++) {
        let vi = s.monsterinstance && s.monsterinstance[vN];
        if (alive(vi) && typeof vi.talkmax == "number" && vi.talkmax > 0) {
          vi.talktimer = vi.talkmax;
          vO++;
        }
      }
      if (vO) {
        return "ran the enemy speech timer out (scr_blconskip)";
      }
    }
    s.mnfight = 2;
    s.turntimer = 0;
    if (vx) {
      vx.reset = 0;
      vx.noreturn = 0;
      vx.timeron = 1;
    }
    return "moved the enemy turn on";
  }
  if (vZ === "turn" || vZ === "phase") {
    if (vT === 0 && s.mnfight === 2) {
      s.turntimer = 0;
      if (vx) {
        vx.timeron = 1;
        if (vx.reset === 1 && !(vx.alarm[2] > 0)) {
          vx.alarm[2] = 1;
        }
      }
      return "ran the turn timer out";
    } else if (vT <= 1 && vx && !vx.destroyed) {
      s.mnfight = 2;
      s.turntimer = 0;
      vx.reset = 0;
      vx.noreturn = 0;
      vx.timeron = 1;
      vx.alarm[2] = -1;
      return "handed the end of the turn back to the battle controller";
    } else {
      drEndTurnDirect();
      return "ended the enemy turn";
    }
  }
  if (vZ === "act") {
    d();
    return "finished the ACT and went on to the enemy turn";
  }
  if (vZ === "attack") {
    s.mnfight = 1;
    s.myfight = -1;
    return "finished the attack and went on to the enemy turn";
  }
  if (vZ === "end") {
    if (vx && vx.victory !== 1) {
      if (s.mnfight === 0 && s.myfight === 0) {
        N();
        return "ended the battle (no enemy left)";
      }
      if (vT > 0) {
        N();
        return "ended the battle (no enemy left)";
      }
    }
    return null;
  }
  return null;
}
v4(drRescue, "drRescue");
function utHalt3() {
  let vZ = 0;
  for (let vT of writers()) {
    if (vT.halt !== 3) {
      vT.halt = 3;
      vZ++;
    }
  }
  return vZ;
}
v4(utHalt3, "utHalt3");
function utRescue(vZ, vT) {
  if (vZ === "dialog") {
    if (vT === 0) {
      startNudge();
      return "advanced the text box with its own Z";
    }
    if (vT === 1) {
      let vx = utHalt3();
      if (s.mnfight === 0 && (s.myfight === 2 || s.myfight === 3 || s.myfight === 4)) {
        s.myfight = 0;
        s.mnfight = 1;
        return "closed the text box (halt 3) and ended the ACT as its last page does";
      }
      if (vx) {
        return "closed the text box (halt 3)";
      }
    }
    return utRescue(s.mnfight === 1 ? "talk" : "turn", vT - 1);
  }
  if (vZ === "talk") {
    if (vT === 0) {
      startNudge();
      return "pressed Z for the enemy speech";
    } else {
      s.mnfight = 2;
      return "moved the enemy turn on";
    }
  } else if (vZ === "turn" || vZ === "phase" || vZ === "end") {
    s.turntimer = -1;
    s.myfight = 0;
    s.mnfight = 3;
    return "ended the enemy turn";
  } else if (vZ === "act") {
    s.myfight = 0;
    s.mnfight = 1;
    return "finished the ACT and went on to the enemy turn";
  } else if (vZ === "attack") {
    s.myfight = 0;
    s.mnfight = 1;
    return "finished the attack and went on to the enemy turn";
  } else {
    return null;
  }
}
v4(utRescue, "utRescue");
function classify(vZ) {
  if (live3() === 0) {
    return "end";
  }
  let vT = writers().length > 0 || balloons().length > 0;
  if (s.mnfight === 2) {
    if (vT) {
      return "turn-text";
    } else {
      return "turn";
    }
  }
  if (s.mnfight === 1 || s.mnfight === 1.5) {
    if (vT) {
      return "talk-text";
    } else {
      return "talk";
    }
  }
  if (vZ) {
    if (s.mnfight === 0 && (s.myfight === 2 || s.myfight === 3 || s.myfight === 4)) {
      if (vT) {
        return "dialog";
      } else {
        return "act";
      }
    }
    if (s.mnfight === 0 && s.myfight === 1) {
      return "attack";
    }
    if (s.mnfight === 3) {
      return "phase";
    }
  } else {
    if (s.myfight === 3 || s.myfight === 4) {
      if (vT) {
        return "dialog";
      } else {
        return "act";
      }
    }
    if (s.myfight === 1 && !v1.exists("obj_attackpress")) {
      return "attack";
    }
    if (s.myfight === 1) {
      return null;
    }
  }
  if (vT) {
    return "dialog";
  } else {
    return "phase";
  }
}
v4(classify, "classify");
function guardTick(vZ, vT = {}) {
  if (!vZ || vZ.customEncounter || vZ.room || vT.ut && s.fightRoom && s.fightRoom !== "room_battle" || v1.exists("__roomhost")) {
    return null;
  }
  if (s.battleover || s.inGameOver) {
    v7.same = 0;
    return null;
  }
  if (!s.monster || typeof s.mnfight != "number") {
    return null;
  }
  if (v7.fightId !== vZ.id || v1.frame < (v7.worldFrame || 0)) {
    guardReset(vZ.id);
  }
  v7.worldFrame = v1.frame;
  v7.frame++;
  let vx = !!vT.ut;
  let vO = vx ? utMenu() : drMenu();
  let vN = signature(vx);
  let vi = v1.spawns !== v7.spawns;
  v7.spawns = v1.spawns;
  if (vN !== v7.key || vi) {
    v7.key = vN;
    v7.same = 0;
    v7.presses = 0;
    if (vN.split("|w")[0] !== (v7.prevCore || "")) {
      v7.prevCore = vN.split("|w")[0];
      v7.rung = 0;
    }
  } else {
    v7.same++;
  }
  if (v0.pressed && (v0.pressed.b1 || v0.pressed.b3)) {
    v7.presses++;
  }
  let vW = vq.token !== v7.prog;
  v7.prog = vq.token;
  if (vW) {
    v7.same = 0;
    v7.presses = 0;
  }
  if (s.mnfight === 2) {
    let vf = ttClock();
    if (v7.ttLow === null || vf < v7.ttLow || vW) {
      v7.ttLow = vf;
      v7.ttPinned = 0;
      v7.pinPresses = 0;
    } else {
      v7.ttPinned++;
    }
  } else {
    v7.ttLow = null;
    v7.ttPinned = 0;
    v7.pinPresses = 0;
  }
  if (v0.pressed && (v0.pressed.b1 || v0.pressed.b3)) {
    v7.pinPresses = (v7.pinPresses || 0) + 1;
  }
  v7.noEnd = live3() === 0 && v7.same > 0 ? v7.noEnd + 1 : 0;
  if (vO && live3() > 0) {
    return null;
  }
  if (vx && s.bmenuno === 6 && utChoiceAnswerable() || v1.list.some(vF => alive(vF) && /choicer/i.test(vF.constructor.name)) || !vx && v1.list.some(vF => alive(vF) && vF.constructor.name === "obj_rouxls_simtown" && vF.MyTurn === 1)) {
    v7.same = 0;
    v7.presses = 0;
    return null;
  }
  if (!vx && v1.list.some(vF => alive(vF) && vF.constructor.name === "obj_lightemup_controller" && !vF.starttimer) || !vx && s.chapter === 5 && v1.list.some(vF => alive(vF) && (vF.constructor.name === "obj_date_controller" || vF.constructor.name === "obj_purplecontrols" && vF.mode === 8 || vF.constructor.name === "obj_yellow_trial_manager" && (vF.can_control || vF.evidence_mode))) || vx && v1.list.some(vF => alive(vF) && vF.constructor.name === "obj_questionasker" && vF.phase === 2) || vx && v1.list.some(vF => alive(vF) && vF.constructor.name === "obj_fakeheart") || vx && v1.list.some(vF => alive(vF) && vF.constructor.name === "obj_sansb_body" && (vF.sleep_c >= 1 || vF.death_c >= 1))) {
    v7.same = 0;
    v7.presses = 0;
    v7.ttPinned = 0;
    return null;
  }
  let vL = classify(vx);
  if (!vL) {
    return null;
  }
  if (vL === "talk-text") {
    vL = "dialog";
  }
  let vk = vL;
  let vs;
  let vp = (!!v2.nodialog || !!s.autoplay) && !writers().some(vF => t.test(String(vF.mystring ?? vF.originalstring ?? "")));
  if (vL === "turn-text") {
    vs = v7.same >= v6.dialogStall && (v7.presses >= v6.dialogPresses || vp) || v7.ttPinned >= v6.turnHard && (v7.pinPresses >= v6.dialogPresses || vp);
    vL = v7.rung === 0 ? "dialog" : "turn";
  } else if (vL === "end") {
    vs = v7.noEnd >= v6.noEnd;
  } else if (vL === "dialog") {
    vs = v7.same >= v6.dialogStall && v7.presses >= v6.dialogPresses;
  } else if (vL === "turn") {
    vs = v7.same >= v6.stall || v7.ttPinned >= v6.turnHard;
  } else {
    vs = v7.same >= v6.stall;
  }
  if (!vs && v7.rung > 0) {
    if (vL === "end") {
      vs = v7.noEnd >= v6.retry;
    } else if (vL === "dialog" || vL === "turn" && vk === "turn-text") {
      vs = v7.same >= v6.retry && (v7.presses >= 2 || v7.pinPresses >= 2 || vk === "turn-text" && vp);
    } else if (vL === "turn") {
      vs = v7.same >= v6.retry || v7.ttPinned >= v6.retry;
    } else {
      vs = v7.same >= v6.retry;
    }
  }
  if (!vs || v7.frame - v7.lastAct < v6.retry) {
    return null;
  }
  v7.lastAct = v7.frame;
  let vS = !!vT.strict;
  let vC = v7.rung;
  let vh = null;
  if (!vS) {
    try {
      vh = vx ? utRescue(vL, vC) : drRescue(vL, vC);
    } catch (vF) {
      vh = "rescue threw: " + (vF && vF.message);
    }
  }
  if (!vS && !vh) {
    return null;
  } else {
    record(vL, vC, vh, vS);
    v7.rung++;
    v7.same = 0;
    v7.presses = 0;
    v7.noEnd = 0;
    v7.ttPinned = 0;
    return vh;
  }
}
v4(guardTick, "guardTick");
export { v6 as a, guardHooks as b, guardReset as c, guardProgress as d, guardLog as e, guardInput as f, guardNudge as g, guardNudging as h, guardTick as i };
