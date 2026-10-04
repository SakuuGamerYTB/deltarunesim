const a = function () {
  ;
  let Nz = true;
  return function (NF, NY) {
    const Nl = Nz ? function () {
      if (NY) {
        const NP = NY.apply(NF, arguments);
        NY = null;
        return NP;
      }
    } : function () {};
    Nz = false;
    return Nl;
  };
}();
import { k as s } from "./c-4W34X7CH.js";
import { e as j, f as l, g as t, l as o, r as f } from "./c-K45EDNDM.js";
import { a as N0 } from "./c-3FE7QPYV.js";
import { N as N1, a as N2, b as N3, c as N4, r as N5 } from "./c-SEM2A64W.js";
import { ce as N6 } from "./c-D6ZXNKTF.js";
import { b as N7, c as N8, d as N9, f as NN, k as NV, t as NI, w } from "./c-YJJCI5ES.js";
import { Eb as NM, Gb as NA, I as NU, N as Nc, Y as Nh, fb as NH, i as Nx, qa as NE, qb as Nw } from "./c-FMIAGHDE.js";
import { a as NS, l as ND } from "./c-PIEPTJTC.js";
ND();
ND();
var NJ = [{
  key: "cirno",
  name: "Cirno",
  file: "cirno.png",
  sw: 315,
  sh: 495,
  color: "aqua",
  from: "kris"
}, {
  key: "reimu",
  name: "Reimu",
  file: "reimu.png",
  sw: 266,
  sh: 495,
  color: "fuchsia",
  from: "susie"
}, {
  key: "flandre",
  name: "Flandre",
  file: "flandre.png",
  sw: 495,
  sh: 495,
  color: "lime",
  from: "ralsei"
}];
var Nv = 46;
var Nr = 6;
var NO = false;
function registerTouhouParty() {
  if (NO) {
    return true;
  }
  if (typeof document === "undefined" || typeof Image === "undefined") {
    return false;
  }
  for (let Nz of NJ) {
    let NF = Nv;
    let NY = Math.max(1, Math.round(Nz.sw / Nz.sh * NF));
    let Nl = document.createElement("canvas");
    Nl.width = NY * Nr;
    Nl.height = NF * Nr;
    let NP = new Image();
    NP.onload = () => {
      try {
        let Nu = Nl.getContext("2d");
        Nu.clearRect(0, 0, NY * Nr, NF * Nr);
        Nu.imageSmoothingEnabled = true;
        Nu.imageSmoothingQuality = "high";
        Nu.drawImage(NP, 0, 0, NY * Nr, NF * Nr);
      } catch {}
    };
    NP.src = "assets/" + Nz.file;
    let Ng = "spr_" + Nz.key + "_b";
    NU[Ng] = {
      name: Ng,
      w: NY,
      h: NF,
      ox: Math.round(NY / 2) - 15,
      oy: 0,
      frames: 1,
      bb: [0, 0, NY - 1, NF - 1],
      precise: false,
      hd: Nr,
      img: [Nl]
    };
    let Nq = N2[Nz.from];
    let Nt = {};
    for (let Nu of Object.keys(Nq.sprites)) {
      Nt[Nu] = Ng;
    }
    N2[Nz.key] = {
      id: Nz.key,
      name: Nz.name,
      color: Nz.color,
      head: null,
      namesprite: null,
      menuicon: Nq.menuicon,
      stats: {
        ...Nq.stats
      },
      spells: [...Nq.spells],
      weapons: Nq.weapons,
      sprites: Nt,
      frames: {
        ...Nq.frames,
        actframes: 1,
        actreturnframes: 1,
        attackframes: 1,
        itemframes: 1,
        defendframes: 1,
        spellframes: 1,
        victoryframes: 1
      },
      size: {
        mywidth: NY * 2,
        myheight: NF * 2
      }
    };
  }
  NO = true;
  return true;
}
NS(registerTouhouParty, "registerTouhouParty");
function isUndertale(Nz) {
  return Nz.game === "undertale" && (Nz.engine || "undertale") === "undertale";
}
NS(isUndertale, "isUndertale");
function buildFight(Nz, NF) {
  let NY = NF.cfg || {};
  Nx.reseed(NF.seed | 0);
  s(NY);
  N7.fightSeed = NF.seed | 0;
  let Nl = N7.tempflag ? N7.tempflag[3] : 0;
  NH.clear();
  NA();
  N8();
  N9();
  N6();
  Nh();
  N7.battleover = null;
  N7.jevilResult = null;
  N7.inGameOver = false;
  N7.roomScale = 1;
  N7.gameoverAction = null;
  N7.tempflag[3] = Nl || 0;
  N7.shakex = 0;
  N7.shakey = 0;
  N7.bgSpeed = 1;
  N7.endfade = 0;
  for (let Ng of ["sus", "ral", "noe"]) {
    for (let Nq of ["canact", "actname", "actdesc", "actcost", "actsimul"]) {
      let Nt = Nq === "actname" || Nq === "actdesc" ? " " : 0;
      N7[Nq + Ng] = [0, 1, 2].map(() => new Array(6).fill(Nt));
    }
  }
  j(NY);
  let NP = t(NY);
  for (let [Nu, No] of Object.entries(NP.roster || {})) {
    N7.charbase[Number(Nu)] = No.base;
    N7.charhero[Number(Nu)] = No.hero || N3[No.base - 1] || "kris";
  }
  NN(NV);
  for (let NL of new Set([1, 2, 3, ...(NP.slots || [])])) {
    if (!NL) {
      continue;
    }
    let NG = N7.charbase[NL] || NL;
    let NC = NP.weapon || {};
    let Ny = NP.armor1 || {};
    let Np = NP.armor2 || {};
    let Nm = NP.maxhp || {};
    let Nf = NP.stats || {};
    let NB = (V1, V2) => (V1 && (V1[NL] ?? V1[NG])) ?? V2;
    N7.charweapon[NL] = NB(NC, N7.charweapon[NL]);
    N7.chararmor1[NL] = NB(Ny, N7.chararmor1[NL]);
    N7.chararmor2[NL] = NB(Np, N7.chararmor2[NL]);
    N7.maxhp[NL] = NB(Nm, N7.maxhp[NL]);
    N7.hp[NL] = N7.maxhp[NL];
    N7.at[NL] = NB(Nf.at, N7.at[NL]);
    N7.df[NL] = NB(Nf.df, N7.df[NL]);
    N7.mag[NL] = NB(Nf.mag, N7.mag[NL]);
    N7.charname[NL] = NP.roster && NP.roster[NL] && NP.roster[NL].name || N7.charname[NG];
    let V0 = N2[N7.charhero[NL] || N3[NG - 1]];
    if (V0) {
      for (N7.spell[NL] = [...V0.spells]; N7.spell[NL].length < 12;) {
        N7.spell[NL].push(0);
      }
    }
  }
  if (NY.items) {
    for (N7.item = NY.items.filter(V1 => V1 > 0); N7.item.length < 13;) {
      N7.item.push(0);
    }
  }
  f(N7, Nz, NY, isUndertale(Nz));
  NI();
  w();
  N0();
  Object.assign(NE, {
    invuln: !!NY.invuln,
    nomiss: !!NY.nomiss,
    freetp: !!NY.freetp,
    slowbullets: !!NY.slowbullets,
    hpscale: NY.hpscale ?? 1,
    turnscale: NY.turnscale ?? 1,
    shake: NY.shake ?? 1,
    musicvol: NY.musicvol ?? 0.6,
    sfxvol: NY.sfxvol ?? 1,
    nodialog: !!NY.nodialog
  });
  NW = isUndertale(Nz) ? "undertale" : "deltarune";
  return NW;
}
NS(buildFight, "buildFight");
function startDeltaruneController(Nz, NF) {
  let NY = t(NF);
  N7.customTeam = 0;
  if (NY && typeof NY == "object") {
    let Ng = NY.slots && NY.slots.length === 3 && NY.slots[0] === 1 && NY.slots[1] === 2 && NY.slots[2] === 3 && !Object.values(NY.roster || {}).some(Nq => !Nq || !Nq.story);
    if (Nz.storyParty && Ng) {
      let Nq = NY.roster && NY.roster[N4];
      if (Nq && Nq.story && N7.char.includes(4) && N7.charhero && N7.charhero[4] === "noelle") {
        let Nt = Nu => NY[Nu] && NY[Nu][N4] != null ? NY[Nu][N4] : null;
        if (Nt("weapon") != null) {
          N7.charweapon[4] = Nt("weapon");
        }
        if (Nt("armor1") != null) {
          N7.chararmor1[4] = Nt("armor1");
        }
        if (Nt("armor2") != null) {
          N7.chararmor2[4] = Nt("armor2");
        }
      }
    } else if (NY.slots && NY.slots.some(Nu => Nu)) {
      let Nu = NY.slots.filter(No => No).slice(0, 3);
      N7.char = [Nu[0] || 0, Nu[1] || 0, Nu[2] || 0];
      N7.customTeam = 1;
      if (Nu.length === 1) {
        N7.heromakex = [80, 80, 80];
        N7.heromakey = [140, 140, 140];
      }
      if (Nu.length === 2) {
        N7.heromakex = [80, 80, 80];
        N7.heromakey = [100, 180, 180];
      }
    }
    if (Nz.partyhp) {
      for (let No = 0; No < 3; No++) {
        let NL = N7.char[No];
        if (NL) {
          N7.maxhp[NL] = Nz.partyhp;
          N7.hp[NL] = Nz.partyhp;
        }
      }
    }
    if (Nz.heroes) {
      registerTouhouParty();
      for (let NG = 0; NG < 3; NG++) {
        let NC = N7.char[NG];
        let Ny = Nz.heroes[NG];
        if (!!NC && !!Ny && !!N2[Ny]) {
          N7.charhero[NC] = Ny;
          N7.charname[NC] = N2[Ny].name;
        }
      }
    }
    NI();
    w();
    if (Nz.background) {
      Nz.background();
    }
  }
  if (l()) {
    o(Nz);
  }
  let Nl = Nw(0, 0, N1);
  if (Nz.skipvictory && Nl) {
    Nl.skipvictory = Nz.skipvictory;
  }
  (Nz.monsters || []).forEach((Np, Nm) => Np.setup(Nm));
  if (NY && typeof NY == "object" && (NE.hpscale ?? 1) !== 1) {
    for (let Np = 0; Np < 3; Np++) {
      if (N7.monster[Np] === 1) {
        N7.monstermaxhp[Np] = Math.max(1, Math.round(N7.monstermaxhp[Np] * NE.hpscale));
        N7.monsterhp[Np] = N7.monstermaxhp[Np];
      }
    }
  }
  let NP = NF && typeof NF == "object" && NF.tpstart > 0 ? NF : null;
  if (NP) {
    N7.tension = Math.min(N7.maxtension, Math.round(N7.maxtension * Math.min(1, Number(NP.tpstart))));
  }
  if (NF && typeof NF == "object" && NF.runhp && typeof NF.runhp == "object") {
    applyRunHp(NF.runhp);
  }
}
NS(startDeltaruneController, "startDeltaruneController");
var shareOf = NS(Nz => {
  let NF = Number(Nz);
  if (Number.isFinite(NF)) {
    return Math.max(0, Math.min(1, NF));
  } else {
    return 1;
  }
}, "shareOf");
function applyRunHp(Nz) {
  if (!Nz || typeof Nz != "object") {
    return false;
  }
  let NF = Math.max(1, Math.min(1.44, Number.isFinite(Number(Nz.s)) ? Number(Nz.s) : 1));
  if (typeof N7.hp == "number") {
    let Nl = Number(N7.maxhp) > 0 ? Number(N7.maxhp) : 20;
    let NP = Math.min(Nl + 15, Math.round(Nl * NF));
    N7.hp = Math.max(1, Math.min(NP, Math.round(Nl * NF * shareOf(Nz.u))));
    return true;
  }
  if (!Array.isArray(N7.char) || !N7.maxhp || !N7.hp) {
    return false;
  }
  let NY = Nz.h && typeof Nz.h == "object" ? Nz.h : {};
  for (let Ng = 0; Ng < 3; Ng++) {
    let Nq = N7.char[Ng];
    if (!Nq || !(N7.maxhp[Nq] > 0)) {
      continue;
    }
    let Nt = Math.round(N7.maxhp[Nq] * NF);
    let Nu = Object.prototype.hasOwnProperty.call(NY, String(Nq)) ? shareOf(NY[String(Nq)]) : 1;
    N7.maxhp[Nq] = Nt;
    N7.hp[Nq] = Math.max(1, Math.min(Nt, Math.round(Nt * Nu)));
  }
  return true;
}
NS(applyRunHp, "applyRunHp");
var NW = "deltarune";
var atCommandMenu = NS(() => N7.mnfight === 0 && !N7.myfight, "atCommandMenu");
function fastForwardDialogue() {
  let Nz = atCommandMenu() && (NW !== "deltarune" || !heldSafe());
  let NF = NY => String(NY.mystring ?? NY.originalstring ?? "").includes("/") || NY.halt !== 0;
  for (let NY of NH.all("obj_base_writer")) {
    if (!NY.destroyed && (!Nz || !!NF(NY))) {
      if (NY.halt === 0) {
        let Nl = String(NY.originalstring ?? "").length;
        if ((NY.stringpos | 0) < Nl) {
          NY.stringpos = Nl;
        }
      } else if (NY.halt === 1 || NY.halt === 2 || NY.halt === 4) {
        NY.event_user(0);
      }
    }
  }
  for (let NP of NH.all("obj_writer")) {
    if (NP.destroyed || Nz && !NF(NP)) {
      continue;
    }
    let Ng = typeof NP.nextmsg == "function";
    if (NP.halt === 0) {
      if (NP.skippable === 1) {
        NP.skipme = 1;
      }
    } else if ((NP.halt === 1 || NP.halt === 2) && NP.siner > 0) {
      if (Ng) {
        if (NP.disablebutton1) {
          continue;
        }
        if (NP.halt === 1) {
          NP.nextmsg();
        } else {
          NP.instance_destroy();
        }
      } else {
        NP.forcebutton1 = 1;
      }
    }
  }
}
NS(fastForwardDialogue, "fastForwardDialogue");
function skipDialogue() {
  fastForwardDialogue();
}
NS(skipDialogue, "skipDialogue");
var NX = /press|\[z\]|\[c\]|~\d|repeatedly|rapidly|timing|time it|direction|\baim\b|choose|select|hold|photo|take a|as many|catch|shoot|mash/i;
function typedOutWaiting() {
  let Nz = NH.all("obj_writer").filter(NF => !NF.destroyed);
  return Nz.length > 0 && Nz.every(NF => NF.reachedend === 1 && NF.halt === 0 && NF.siner > 1 && !NX.test(String(NF.mystring ?? "")));
}
NS(typedOutWaiting, "typedOutWaiting");
function heldSafe() {
  try {
    return !!N5();
  } catch {
    return false;
  }
}
NS(heldSafe, "heldSafe");
function simulActWaiting() {
  let Nz = false;
  for (let NY = 0; NY < 3 && !Nz; NY++) {
    let Nl = N7.monsterinstance && N7.monsterinstance[NY];
    if (Nl && !Nl.destroyed && (Nl.actcon === 20 || Nl.actconsus === 20 || Nl.actconral === 20 || Nl.actconnoe === 20)) {
      Nz = true;
    }
  }
  if (!Nz) {
    return false;
  }
  let NF = NH.all("obj_writer").filter(NP => !NP.destroyed);
  return NF.length > 0 && NF.every(NP => NP.reachedend === 1 && NP.halt === 0);
}
NS(simulActWaiting, "simulActWaiting");
NM.input = () => {
  if (NE.nodialog) {
    fastForwardDialogue();
    if ((!N7.control_state || !N7.control_state[0] || !NH.exists("obj_time")) && nodialogWantsZ()) {
      Nc.pressed.b1 = true;
    }
  }
};
function nodialogWantsZ() {
  if (N7.minigameStage) {
    return false;
  } else if (NW === "deltarune") {
    if (NH.exists("obj_choicer_neo") || NH.all("obj_writer").some(Nz => !Nz.destroyed && Nz.halt === 5)) {
      return false;
    } else if (N7.mnfight === 1) {
      return true;
    } else if (N7.myfight === 3) {
      return simulActWaiting() || typedOutWaiting();
    } else if (N7.myfight === 0 && N7.mnfight === 0) {
      return heldSafe() && typedOutWaiting();
    } else {
      return false;
    }
  } else {
    return N7.mnfight === 1 && !NH.all("obj_base_writer").some(Nz => !Nz.destroyed && Nz.halt === 5);
  }
}
NS(nodialogWantsZ, "nodialogWantsZ");
export { isUndertale as a, buildFight as b, startDeltaruneController as c, applyRunHp as d, fastForwardDialogue as e, skipDialogue as f, NX as g };
