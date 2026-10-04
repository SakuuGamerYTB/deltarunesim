const g = function () {
  ;
  let ww = true;
  return function (wS, wE) {
    const we = ww ? function () {
      if (wE) {
        const wK = wE.apply(wS, arguments);
        wE = null;
        return wK;
      }
    } : function () {};
    ww = false;
    return we;
  };
}();
import { b as R0, c as R1 } from "./c-YST6GS7R.js";
import { a as R2, c as R3, f as R4, h as R5, i as R6 } from "./c-ZF4DELGJ.js";
import { D as R7, p as R8 } from "./c-SEM2A64W.js";
import { e as R9, f as RR, h as Rw } from "./c-PF7AREFU.js";
import { a as RS, f as RE, n as Re, p as RK } from "./c-EUQCKUJR.js";
import { D as Rs, H as RF, b as Rj, i as RJ, y as RI } from "./c-YJJCI5ES.js";
import { Da as RA, Fa as Rr, Za as Ra, _a as Rm, ba as RG, fb as Ro, j as Rk, m as Rz, n as RP, o as RX, qb as Rd, w as RW, x as RH } from "./c-FMIAGHDE.js";
import { a as RC, c as Rx, e as RT, g as Ri, l as Rf } from "./c-PIEPTJTC.js";
var RB = {};
Rx(RB, {
  FIGHTS: () => w8,
  SOUNDS: () => Rl,
  SPRITES: () => Ry,
  obj_defeatanim: () => obj_defeatanim,
  obj_diamondenemy: () => obj_diamondenemy,
  obj_dknight_slasher: () => obj_dknight_slasher,
  obj_rudinnranger: () => obj_rudinnranger,
  obj_spareanim: () => obj_spareanim,
  setupRangerStats: () => setupRangerStats,
  setupStats: () => setupStats
});
Rf();
var Ry = ["spr_diamondm_idle", "spr_diamondm_hurt", "spr_diamondm_spared", "spr_daimond_knight_idle", "spr_diamond_knight_hurt", "spr_diamond_knight_spared", "spr_diamond_knight_slash", "spr_diamondswordbullet", "spr_diamondbullet", "spr_diamondbullet_form", "spr_diamondbullet_vert", "spr_defeatsweat", "spr_sparestar_anim", "spr_battleblcon_long"];
var Rl = ["snd_defeatrun", "snd_spare"];
var newmsg = RC(() => {
  Rj.msg = new Array(100).fill(" ");
}, "newmsg");
var scr_susface = RC((ww, wS) => {
  Rj.msg[ww] = "\\TX \\F0 \\E" + wS + " \\FS \\TS %";
}, "scr_susface");
var scr_ralface = RC((ww, wS) => {
  Rj.msg[ww] = "\\TX \\F0 \\E" + wS + " \\FR \\TR %";
}, "scr_ralface");
function packFaces() {
  let ww = [];
  let wS = "";
  for (let wE = 0; wE < 100; wE++) {
    let we = Rj.msg[wE];
    if (we === undefined || we === " " || we === "") {
      break;
    }
    if (/^\\TX .*%$/.test(we)) {
      let wK = /\\E([0-9A-Fa-f])/.exec(we);
      wS = wK ? "\\E" + wK[1] : "";
      continue;
    }
    ww.push(wS + we);
    wS = "";
  }
  newmsg();
  ww.forEach((ws, wF) => {
    Rj.msg[wF] = ws;
  });
}
RC(packFaces, "packFaces");
function setupStats(ww) {
  Rj.monstername[ww] = "Rudinn";
  Rj.monstermaxhp[ww] = 120;
  Rj.monsterhp[ww] = 120;
  Rj.monsterat[ww] = 5;
  Rj.monsterdf[ww] = 0;
  Rj.monsterexp[ww] = 0;
  Rj.monstergold[ww] = 30;
  Rj.sparepoint[ww] = 10;
  Rj.mercymod[ww] = 0;
  Rj.mercymax[ww] = 100;
  Rj.canact[ww][0] = 1;
  Rj.actname[ww][0] = "Check";
  Rj.canact[ww][1] = 1;
  Rj.actname[ww][1] = "Convince";
  Rj.canact[ww][2] = 1;
  Rj.actname[ww][2] = "Lecture";
  if (RJ(2) && Rj.plot < 150) {
    Rj.canact[ww][3] = 1;
    Rj.actname[ww][3] = "Warning";
    Rj.actactor[ww][3] = 3;
  }
}
RC(setupStats, "setupStats");
function setupRangerStats(ww) {
  Rj.monstername[ww] = "Rudinn Ranger";
  Rj.monstermaxhp[ww] = 170;
  Rj.monsterhp[ww] = 170;
  Rj.monsterat[ww] = 8;
  Rj.monsterdf[ww] = 0;
  Rj.monsterexp[ww] = 0;
  Rj.monstergold[ww] = 45;
  Rj.sparepoint[ww] = 25;
  Rj.mercymod[ww] = 0;
  Rj.mercymax[ww] = 100;
  Rj.canact[ww][0] = 1;
  Rj.actname[ww][0] = "Check";
  Rj.canact[ww][1] = 1;
  Rj.actname[ww][1] = "Convince";
  Rj.canact[ww][2] = 1;
  Rj.actname[ww][2] = "Compliment";
  Rj.actactor[ww][2] = 2;
}
RC(setupRangerStats, "setupRangerStats");
var RO = class wj extends Ra {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    Rr("snd_spare");
    RA("snd_spare");
  }
  draw(ww) {
    let wS = this.sprite_index;
    let wE = this.image_index;
    let we = this.image_xscale;
    let wK = this.image_yscale;
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage += 1;
      ww.draw_sprite_white(wS, wE, this.x + this.afterimage * 4, this.y, we, wK, 0, 0.7 - this.afterimage / 25);
      ww.draw_sprite_white(wS, wE, this.x + this.afterimage * 8, this.y, we, wK, 0, 0.4 - this.afterimage / 30);
    }
    if (this.t < 6) {
      if (this.t < 5) {
        ww.draw_sprite_ext(wS, wE, this.x, this.y, we, wK, 0, this.image_blend, 1 - this.neotone / 4);
      }
      let ws = this.t / 5;
      if (ws > 1) {
        ws = 1;
      }
      ww.draw_sprite_white(wS, wE, this.x, this.y, we, wK, 0, ws - this.tone / 5);
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let wF = 0; wF < 2; wF += 1) {
        let wJ = Rd(this.x + Rk(this.sprite_width), this.y + Rk(this.sprite_height), RS);
        wJ.image_xscale = 2;
        wJ.image_yscale = 2;
        wJ.sprite_index = "spr_sparestar_anim";
        wJ.image_alpha = 2;
        wJ.image_speed = 0.25;
        wJ.hspeed = -3;
        wJ.gravity = 0.5;
        wJ.gravity_direction = 0;
        this.star[this.starcount] = wJ;
        this.starcount += 1;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let wI = 0; wI < this.starcount; wI += 1) {
        let wA = this.star[wI];
        if (wA && !wA.destroyed) {
          wA.image_angle += 10;
          wA.image_alpha -= 0.1;
          if (wA.image_alpha <= 0) {
            wA.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone += 1;
    }
    if (this.t >= 9 && (this.neotone += 1, this.neotone >= 30)) {
      for (let wr = 0; wr < this.starcount; wr += 1) {
        let wa = this.star[wr];
        if (wa && !wa.destroyed) {
          wa.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
RC(RO, "obj_spareanim");
RT(RO, "kinds", Rm("obj_spareanim", Ra));
RT(RO, "defaultDepth", 0);
var obj_spareanim = RO;
var Rq = class wm extends Ra {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    RA("snd_defeatrun");
  }
  step() {
    this.g += 1;
    if (this.g >= 15) {
      this.t += 1;
    }
  }
  draw(ww) {
    if (this.t === 0) {
      this.draw_self(ww);
    }
    let wS = 0;
    if (this.g <= 5) {
      wS = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      wS = 1;
    }
    if (wS === 1) {
      ww.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let wE = 0; wE <= 80; wE += 1) {
        ww.draw_sprite_ext(this.sprite_index, this.image_index, this.x + wE * 4, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 0.4 - this.t / 8 + wE / 200);
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
};
RC(Rq, "obj_defeatanim");
RT(Rq, "kinds", Rm("obj_defeatanim", Ra));
RT(Rq, "defaultDepth", 0);
var obj_defeatanim = Rq;
function scr_defeatrun(ww) {
  let wS = Rd(ww.x, ww.y, obj_defeatanim);
  wS.sprite_index = ww.sprite_index;
  wS.sprite_index = ww.hurtsprite;
  wS.image_index = 0;
  wS.image_xscale = ww.image_xscale;
  wS.image_yscale = ww.image_yscale;
  ww.instance_destroy();
}
RC(scr_defeatrun, "scr_defeatrun");
var obj_rudinnbase = class wG extends R8 {
  create() {
    Object.assign(this, {
      bikeflip: 0,
      becomeflash: 0,
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 90,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      talked: 0,
      attacked: 0,
      hurt: 0,
      hurttimer: 0,
      hurtshake: 0,
      mywriter: 343249823,
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: 0,
      maxmercy: 9999,
      warned: 0,
      compliment: 0,
      tired: 0,
      attacks: 0,
      dodgetimer: 0,
      candodge: 0,
      con: 0,
      battlecancel: 0,
      nexttry: 0,
      mytarget: 3,
      rtimer: 0,
      shakex: 0
    });
    this.image_speed = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
  }
  setupFn(ww) {}
  defeatedEvent() {}
  talk() {}
  attack() {}
  actStep() {}
  actDone() {}
  onDefeatRun() {}
  get tiredDiv() {
    return 3;
  }
  userEvent(ww) {
    if (ww === 12) {
      Rj.monsterx[this.myself] = this.x + this.sprite_width / 2;
      Rj.monstery[this.myself] = this.y + this.sprite_height / 2;
      this.setupFn(this.myself);
      return;
    }
    if (ww === 11) {
      this.defeatedEvent();
      return;
    }
    if (ww === 10) {
      this.spared();
      return;
    }
    super.userEvent(ww);
  }
  spared() {
    let ww = Rd(this.x, this.y, obj_spareanim);
    ww.sprite_index = this.sparedsprite;
    ww.image_index = 0;
    ww.image_xscale = this.image_xscale;
    ww.image_yscale = this.image_yscale;
    this.scr_monsterdefeat();
    this.instance_destroy();
  }
  step() {
    let ww = this.myself;
    if (Rj.monster[ww] === 1) {
      if (Rj.mnfight === 1 && this.talked === 0) {
        RF(this);
        if (!Ro.exists("obj_darkener")) {
          Rd(0, 0, RK);
        }
        Rj.typer = 50;
        newmsg();
        this.talk();
        Rw(this.x - 160, this.y, 3);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && Rj.mnfight === 1) {
        this.rtimer = 0;
        if (RG() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          Ro.with("obj_writer", wS => wS.instance_destroy());
          Rj.mnfight = 2;
        }
        if (Rj.mnfight === 2) {
          if (!Ro.exists("obj_moveheart")) {
            Re();
          }
          if (!Ro.exists("obj_growtangle")) {
            Rd(320, 170, RE);
          }
        }
      }
      if (Rj.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          this.attack();
        } else {
          Rj.turntimer = 120;
        }
      }
      if (Rj.mnfight === 2 && Rj.turntimer <= 1) {
        if (this.battlecancel === 1) {
          Rj.mercymod[ww] = 999;
        }
        if (this.battlecancel === 2) {
          Ro.with("obj_battlecontroller", wS => {
            wS.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (this.con === 1) {
      this.con = 2;
      this.alarm[4] = 10;
    }
    if (this.con === 3) {
      Rj.typer = 50;
      Rj.mercymod[ww] = 999;
      newmsg();
      Rj.msg[0] = "Alright^1,&you convinced&me!!/%";
      Rw(this.x - 160, this.y, 3);
      this.con = 4;
    }
    if (this.con === 4 && !Ro.exists("obj_writer")) {
      this.hspeed = 15;
      this.con = 5;
      this.alarm[4] = 15;
      Ro.with("obj_battlecontroller", wS => {
        wS.alarm[2] = 17;
      });
    }
    if (this.con === 6) {
      Ro.with("obj_battlecontroller", wS => {
        wS.noreturn = 0;
      });
      this.scr_monsterdefeat();
      this.instance_destroy();
      this.con = 7;
    }
    if (Rj.myfight === 3) {
      this.actStep();
      this.actTail();
    }
    if (Rj.myfight === 7) {
      this.hspeed = 15;
    }
  }
  alarmEvent(ww) {
    if (ww === 4) {
      this.con += 1;
    }
  }
  actTail() {
    if (this.actcon === 1 && !Ro.exists("obj_writer")) {
      this.actDone();
      this.actcon = 0;
      R7();
    }
    if (this.actcon === 10 && !Ro.exists("obj_writer")) {
      Rj.typer = 50;
      newmsg();
      Rj.msg[0] = "You kidding?&I can't quit.&Stopping you&is my job!/%";
      Rw(this.x - 160, this.y, 3);
      this.actcon = 11;
    }
    if (this.actcon === 11 && !Ro.exists("obj_writer")) {
      Rj.typer = 45;
      Rj.fc = 2;
      Rj.fe = 8;
      newmsg();
      Rj.msg[0] = "* Really^1?&* What do you spend your money on?/%";
      R9();
      this.actcon = 12;
    }
    if (this.actcon === 12 && !Ro.exists("obj_writer")) {
      Rj.typer = 50;
      newmsg();
      Rj.msg[0] = "I'm a normal&person./";
      Rj.msg[1] = "I spend all&my money on&RENT and&MYSTIC GEMs./%";
      Rw(this.x - 160, this.y, 3);
      this.actcon = 14;
    }
    if (this.actcon === 14 && !Ro.exists("obj_writer")) {
      Rj.typer = 45;
      Rj.fc = 2;
      Rj.fe = 3;
      newmsg();
      Rj.msg[0] = "* (Kris^1, let's try CONVINCING them again...)/%";
      R9();
      this.nexttry = 1;
      this.actcon = 1;
    }
  }
  draw(ww) {
    let wS = this.myself;
    if (this.state === 3) {
      if (Rj.monsterhp[wS] <= Rj.monstermaxhp[wS] / this.tiredDiv) {
        Rj.monsterstatus[wS] = 1;
        if (Rj.monstercomment[wS] === " ") {
          Rj.monstercomment[wS] = "(Tired)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (Rj.monster[wS] === 0) {
          this.onDefeatRun();
          scr_defeatrun(this);
        }
        this.hurtshake += 1;
        if (this.hurtshake > 1) {
          if (this.shakex > 0) {
            this.shakex -= 1;
          }
          if (this.shakex < 0) {
            this.shakex += 1;
          }
          this.shakex = -this.shakex;
          this.hurtshake = 0;
        }
        ww.draw_sprite_ext(this.hurtsprite, 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      let wE = this.idlesprite;
      if (Rj.mercymod[wS] >= Rj.mercymax[wS]) {
        wE = this.sparedsprite;
      }
      ww.draw_sprite_ext(wE, this.siner / 6, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        ww.draw_sprite_white(wE, this.siner / 6, this.x, this.y, 2, 2, 0, -RH(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
RC(obj_rudinnbase, "obj_rudinnbase");
RT(obj_rudinnbase, "kinds", Rm("obj_rudinnbase", R8));
RT(obj_rudinnbase, "defaultDepth", 90);
var Rg = obj_rudinnbase;
var Rb = class wo extends Rg {
  create() {
    super.create();
    this.idlesprite = "spr_diamondm_idle";
    this.hurtsprite = "spr_diamondm_hurt";
    this.sparedsprite = "spr_diamondm_spared";
  }
  get tiredDiv() {
    return 3;
  }
  setupFn(ww) {
    setupStats(ww);
  }
  defeatedEvent() {}
  onDefeatRun() {
    let ww = this.myself;
    if (Rj.flag[51 + ww] === 5) {
      Rj.flag[523] += 1;
    }
    Rj.flag[520] += 1;
  }
  talk() {
    let ww = Rz(0, 1, 2, 3);
    if (ww === 0) {
      Rj.msg[0] = "Long live&the guy&who pays us!";
    }
    if (ww === 1) {
      Rj.msg[0] = "Shine,&shine";
    }
    if (ww === 2) {
      Rj.msg[0] = "I'm just a&normal&person.";
    }
    if (ww === 3) {
      Rj.msg[0] = "Face my&Diamond&Cutter!";
    }
    if (this.acting === 2) {
      Rj.msg[0] = "Yeah I&guess that&makes&sense.";
    }
    if (this.acting === 3) {
      Rj.msg[0] = "(Yawn)...&What? OK...";
    }
  }
  attack() {
    let ww = this.myself;
    let wS = Rz(0, 1);
    if (wS === 0) {
      let wE = Rd(this.x, this.y, R1);
      wE.type = 0;
      wE.target = this.mytarget;
      wE.damage = Rj.monsterat[ww] * 5;
    } else {
      let we = Rd(this.x, this.y, R1);
      we.type = 1;
      we.target = this.mytarget;
      we.damage = Rj.monsterat[ww] * 5;
    }
    this.turns += 1;
    Rj.turntimer = 140;
    this.attacked = 1;
    Rj.typer = 6;
    Rj.fc = 0;
    wS = Rz(0, 1, 2, 3, 4);
    if (wS === 0) {
      Rj.battlemsg[0] = "* Rudinn is glimmering plainly.";
    }
    if (wS === 1) {
      Rj.battlemsg[0] = "* Rudinn has no strong opinions one way or the other.";
    }
    if (wS === 2) {
      Rj.battlemsg[0] = "* Rudinn thinks about elaborate stones.";
    }
    if (wS === 3) {
      Rj.battlemsg[0] = "* Rudinn dislikes its boss^1, but doesn't care enough to quit.";
    }
    if (wS === 4) {
      Rj.battlemsg[0] = "* Smells like jewelry.";
    }
    if (Rj.monsterstatus[ww] === 1) {
      Rj.battlemsg[0] = "* Rudinn is starting to fall asleep.";
    }
    if (Rj.monsterhp[ww] <= Rj.monstermaxhp[ww] / 3) {
      Rj.battlemsg[0] = "* Rudinn's luster begins to fade.";
    }
    if (Rj.mercymod[ww] >= Rj.mercymax[ww]) {
      Rj.msg[0] = "* Rudinn is alright with not fighting.";
    }
  }
  actStep() {
    let ww = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      newmsg();
      Rj.msg[0] = "* RUDINN - AT 6 DF 0&* This ambivalent diamond isn't any girl's best friend./%";
      RR();
    }
    if (this.acting === 2 && this.actcon === 0) {
      if (this.nexttry === 1) {
        Rj.flag[208] = 1;
      }
      newmsg();
      Rj.msg[0] = "* You told Rudinn to quit fighting^1.&* It was utterly swayed./%";
      Rs(ww, 100);
      RR();
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      newmsg();
      Rj.msg[0] = "* You lectured the enemies on the importance of kindness./";
      Rj.msg[1] = "* The enemies became \\cBTIRED\\cW.../%";
      for (let wS = 0; wS < 3; wS += 1) {
        Rj.monstercomment[wS] = "(Tired)";
        Rj.monsterstatus[wS] = 1;
      }
      Rs(ww, 50);
      RR();
      this.actcon = 1;
    }
    if (this.acting === 4 && this.actcon === 0) {
      this.actcon = 1;
      newmsg();
      Rj.msg[0] = "* You and Ralsei warned Rudinn about Susie^1.&* The enemy went on guard.../%";
      if (RI() > 1) {
        Rj.msg[0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%";
      }
      for (let wE = 0; wE < 3; wE += 1) {
        Rj.monstercomment[wE] = "(Warned)";
        Rj.automiss[wE] = 1;
      }
      RR();
    }
  }
};
RC(Rb, "obj_diamondenemy");
RT(Rb, "kinds", Rm("obj_diamondenemy", Rg));
RT(Rb, "defaultDepth", 90);
RT(Rb, "defaultSprite", "spr_diamondm_idle");
var obj_diamondenemy = Rb;
var RZ = class wk extends Rg {
  create() {
    super.create();
    this.convinced = 0;
    this.complimented = 0;
    this.idlesprite = "spr_daimond_knight_idle";
    this.hurtsprite = "spr_diamond_knight_hurt";
    this.sparedsprite = "spr_diamond_knight_spared";
  }
  get tiredDiv() {
    return 2;
  }
  setupFn(ww) {
    setupRangerStats(ww);
  }
  defeatedEvent() {}
  talk() {
    let ww = Rz(0, 1, 2, 3);
    if (ww === 0) {
      Rj.msg[0] = "Long live&the king!";
    }
    if (ww === 1) {
      Rj.msg[0] = "Glimmer&glammor";
    }
    if (ww === 2) {
      Rj.msg[0] = "Perish,&Lightners!";
    }
    if (ww === 3) {
      Rj.msg[0] = "I'm the,&diamond,&here's the&rough!";
    }
    if (this.acting === 2) {
      Rj.msg[0] = "Enough!&You can't&convince&me!";
    }
    if (this.acting === 3) {
      if (ww === 0 || ww === 1) {
        Rj.msg[0] = "No one ever&said THAT to&me before&...";
      }
      if (ww === 2 || ww === 3) {
        Rj.msg[0] = "The King&never said&THAT to me&before...";
      }
      if (this.complimented >= 2) {
        Rj.msg[0] = "Yeah it&would be&weird.";
      }
    }
  }
  attack() {
    let ww = this.myself;
    let wS = Ro.number("obj_rudinnranger");
    if (wS === 99) {
      let wE = Rd(this.x, this.y, R1);
      wE.type = 1;
      wE.target = this.mytarget;
      wE.damage = Rj.monsterat[ww] * 5;
      wE.ratio = 1;
    } else {
      this.visible = false;
      let we = Rd(this.x, this.y, obj_dknight_slasher);
      we.inv = 60;
      we.target = this.mytarget;
      we.grazepoints = 6;
      we.timepoints = 2;
      we.active = 0;
      we.creator = this;
      we.damage = Rj.monsterat[ww] * 5;
    }
    this.turns += 1;
    Rj.turntimer = 180;
    this.attacked = 1;
    Rj.typer = 6;
    Rj.fc = 0;
    wS = Rz(0, 1, 2, 3, 4);
    if (wS === 0) {
      Rj.battlemsg[0] = "* Rudinn Ranger gleams gallantly.";
    }
    if (wS === 1) {
      Rj.battlemsg[0] = "* Rudinn Ranger puts a power limiter on its feelings.";
    }
    if (wS === 2) {
      Rj.battlemsg[0] = "* Rudinn Ranger fantasizes about divine gems.";
    }
    if (wS === 3) {
      Rj.battlemsg[0] = "* Rudinn Ranger pledges allegiance.";
    }
    if (wS === 4) {
      Rj.battlemsg[0] = "* Smells like crystal.";
    }
    if (Rj.monsterstatus[ww] === 1) {
      Rj.battlemsg[0] = "* Rudinn Ranger is starting to fall asleep.";
    }
    if (Rj.monsterhp[ww] <= Rj.monstermaxhp[ww] / 3) {
      Rj.battlemsg[0] = "* Rudinn Ranger's luster begins to fade.";
    }
    if (Rj.mercymod[ww] >= Rj.mercymax[ww]) {
      Rj.msg[0] = "* Rudinn Ranger seems totally flattered.";
    }
  }
  actDone() {
    if (this.acting === 3) {
      Rs(this.myself, 100);
    }
  }
  actStep() {
    let ww = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      newmsg();
      Rj.msg[0] = "* RUDINN RANGER - AT 8 DF 0&* Ideally multicolored, but they all wanted to be red./%";
      RR();
    }
    if (this.acting === 2 && this.actcon === 0) {
      newmsg();
      Rj.msg[0] = "* You tried to explain why fighting is bad./";
      Rj.msg[1] = "* But Rudinn Ranger just became \\cBTIRED\\cW.../%";
      Rj.monstercomment[ww] = "(Tired)";
      Rj.monsterstatus[ww] = 1;
      Rs(ww, 50);
      RR();
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      newmsg();
      Rj.msg[0] = "* Susie COMPLIMENTed the enemy...?/";
      scr_susface(1, 2);
      let wS = Rz(0, 1, 2);
      if (wS === 0) {
        Rj.msg[2] = "* \"Your outfit is NOT disgusting.\"/%";
      }
      if (wS === 1) {
        Rj.msg[2] = "* \"Please keep body tackling the soda machine.\"/%";
      }
      if (wS === 2) {
        Rj.msg[2] = "* Nice^1, you guys look like you're gonna kill me./%";
      }
      if (Rj.flag[503] === 0) {
        Rj.msg[0] = "* You told Susie to COMPLIMENT the enemy!/";
        scr_susface(1, 0);
        Rj.msg[2] = "* ... uhhh^1, are you serious?/";
        Rj.msg[3] = "\\E2* What good can I say about someone trying to kill us?/";
        scr_ralface(4, 6);
        Rj.msg[5] = "* Aww^1, Susie..^1. if you're stuck^1, why not try.../";
        Rj.msg[6] = "* ... saying something you wish someone'd say to you?/";
        scr_susface(7, 0);
        Rj.msg[8] = "* .../";
        Rj.msg[9] = "\\E2* \"You are unbanned from free ham sandwich day\"/%";
        Rj.flag[503] = 1;
      }
      if (this.complimented >= 1) {
        Rj.msg[0] = "* Susie actively didn't COMPLIMENT the enemy!/";
        scr_susface(1, 0);
        Rj.msg[2] = "* Look^1, it's just gonna be weird if I keep going./%";
        this.complimented = 2;
      }
      packFaces();
      RR();
      this.actcon = 1;
      if (this.complimented === 0) {
        this.complimented = 1;
      }
    }
  }
};
RC(RZ, "obj_rudinnranger");
RT(RZ, "kinds", Rm("obj_rudinnranger", Rg));
RT(RZ, "defaultDepth", 90);
RT(RZ, "defaultSprite", "spr_daimond_knight_idle");
var obj_rudinnranger = RZ;
var Rp = class wz extends R3 {
  create() {
    Object.assign(this, {
      con: 0,
      movecon: 0,
      movetimer: 0,
      timer: 0,
      image_speed: 0,
      image_index: 0,
      image_xscale: 2,
      image_yscale: 2,
      movesiner: 0,
      movefactor: 0,
      type: 0,
      creator: null,
      damage: 0,
      grazepoints: 0,
      timepoints: 0,
      inv: 60,
      target: 0,
      active: 0,
      throwernumber: 1,
      thrown: 0
    });
  }
  step() {
    if (this.con === 0) {
      this.throwernumber = Ro.number("obj_dknight_slasher");
      this.con = 12;
      this.movecon = 4;
      this.timer = 0;
      this.thrown = 0;
      this.image_index = 0;
    }
    if (this.movecon === 4) {
      this.movesiner += 1;
      if (Rj.turntimer >= 30 && this.movefactor < 1) {
        this.movefactor += 0.1;
      }
      this.y = this.ystart + RW(this.movesiner / 16) * 40 * this.movefactor;
      if (Rj.turntimer <= 30) {
        if (this.movefactor > 0) {
          this.movefactor -= 0.1;
        } else {
          this.movefactor = 0;
        }
      }
    }
    if (this.con === 10) {
      this.timer = 0;
      this.thrown = 0;
      this.image_index = 0;
      if (Rj.turntimer > 15) {
        this.con = 11;
      }
    }
    if (this.con === 11) {
      this.image_index += 0.334;
      if (this.image_index >= 4 && this.thrown === 0) {
        let ww = Rd(this.x + 6, this.y + 34, R4);
        ww.siner = this.movesiner;
        R2(this, ww);
        ww.throwernumber = this.throwernumber;
        if (!ww.destroyed) {
          ww.active = 1;
          ww.sprite_index = "spr_diamondswordbullet";
          ww.image_xscale = 2;
          ww.image_yscale = 2;
          let wS = Ro.first("obj_heart");
          ww.move_towards_point(wS ? wS.x + 8 : 320, wS ? wS.y + 8 : 170, 9 + RW(ww.siner / 10) * 4);
          if (ww.throwernumber === 2) {
            ww.speed *= 0.85;
          }
          if (ww.throwernumber === 3) {
            ww.speed *= 0.7;
          }
          ww.direction += 5 - Rk(10);
          ww.image_angle = ww.direction;
          ww.depth = this.depth + 1;
        }
        this.thrown = 1;
      }
      if (this.image_index >= 6) {
        this.con = 12;
        this.timer = 0;
      }
    }
    if (this.con === 12) {
      this.timer += 1;
      if (this.timer >= this.throwernumber * 3) {
        this.con = 10;
      }
    }
  }
  destroy() {
    if (this.creator && !this.creator.destroyed) {
      this.creator.visible = true;
    }
  }
};
RC(Rp, "obj_dknight_slasher");
RT(Rp, "kinds", Rm("obj_dknight_slasher", R3));
RT(Rp, "defaultDepth", 0);
RT(Rp, "defaultSprite", "spr_diamond_knight_slash");
var obj_dknight_slasher = Rp;
R0({
  0: (ww, {
    heart: wS
  }) => {
    if (ww.btimer >= ww.timermax * ww.ratio) {
      ww.btimer = 0;
      let wE = 30 + Rk(120);
      let we = 140 + Rk(80);
      let wK = RP(we, wE);
      let ws = RX(we, wE);
      let wF = wS ? wS.x : 320;
      let wJ = wS ? wS.y : 170;
      let wI = Rd(wF + 8 + wK, wJ + 8 + ws, R6);
      if (wI.y < 40) {
        wI.y = 40;
      }
      wI.damage = ww.damage;
      wI.target = ww.target;
    }
  },
  1: (ww, {
    heart: wS
  }) => {
    if (ww.btimer >= ww.ratio * 9) {
      ww.btimer = 0;
      let wE = (140 + Rk(40)) * ww.side;
      let we = -100 + Rk(200);
      if (Rz(0, 1, 2, 3) === 3) {
        we = -10 + Rk(20);
      }
      let wK = wS ? wS.x : 320;
      let ws = wS ? wS.y : 170;
      let wF = Rd(wK + 8 + we, ws + 8 + wE, R5);
      wF.damage = ww.damage;
      wF.target = ww.target;
    }
  }
});
var w0 = {};
for (let [wP, wX] of [["hathy", "./hathy.js"], ["jigsawry", "./jigsawry.js"], ["rabbick", "./rabbick.js"]]) {
  Promise.resolve().then(() => __dr_imp(wX)).then(ww => {
    w0[wP] = ww;
  }).catch(() => {});
}
var w1 = RC((ww, wS) => ({
  cls: obj_diamondenemy,
  type: 5,
  x: ww,
  y: wS,
  setup: setupStats
}), "R");
var w2 = RC((ww, wS) => ({
  cls: obj_rudinnranger,
  type: 22,
  x: ww,
  y: wS,
  setup: setupRangerStats
}), "RR");
function sib(ww, wS, wE, we, wK, ws) {
  let wF = w0[ww];
  if (!wF || !wF[wS] || !wF[wE]) {
    return null;
  } else {
    return {
      cls: wF[wS],
      type: we,
      x: wK,
      y: ws,
      setup: wF[wE]
    };
  }
}
RC(sib, "sib");
var HATHY = RC((ww, wS) => sib("hathy", "obj_heartenemy", "setupStats", 6, ww, wS), "HATHY");
var JIGSAW = RC((ww, wS) => sib("jigsawry", "obj_jigsawryenemy", "setupStats", 15, ww, wS), "JIGSAW");
var RABBICK = RC((ww, wS) => sib("rabbick", "obj_rabbick_enemy", "setupStats", 13, ww, wS), "RABBICK");
var w7 = {
  chapter: 1,
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  music: "battle"
};
var w8 = [{
  ...w7,
  id: "rudinn",
  name: "Rudinn",
  area: "Field",
  desc: "Rudinn.#Diamond bullets.",
  monsters: [w1(480, 140)],
  encounterno: 4,
  get battlemsg() {
    let ww = "* Rudinn drew near!";
    if (Rj.flag[500] >= 1) {
      ww = "* A different Rudinn from last time drew near!";
    }
    if (Rj.flag[500] === 2) {
      ww = "* Assumedly another different Rudinn appeared!";
    }
    return ww;
  }
}, {
  ...w7,
  id: "rudinn2",
  name: "Rudinn x2",
  area: "Field",
  desc: "A necklace of#Rudinns.",
  monsters: [w1(480, 110), w1(500, 200)],
  battlemsg: "* A necklace of Rudinns blocks your path.",
  encounterno: 5
}, {
  ...w7,
  id: "rudinn_hathy",
  name: "Rudinn & Hathy",
  area: "Field",
  desc: "Rudinn and Hathy.",
  get monsters() {
    return [w1(480, 110), HATHY(500, 200)].filter(Boolean);
  },
  battlemsg: "* Rudinn and Hathy blocked the way!",
  encounterno: 6
}, {
  ...w7,
  id: "smorgasboard",
  name: "Smorgasboard",
  area: "Field",
  desc: "Jigsawry, Rudinn#and Hathy.",
  get monsters() {
    return [JIGSAW(480, 20), w1(500, 120), HATHY(460, 220)].filter(Boolean);
  },
  battlemsg: "* Smorgasboard.",
  encounterno: 23
}, {
  ...w7,
  id: "rabbick_rudinn",
  name: "Rabbick & Rudinn",
  area: "Field",
  desc: "Rabbick and Rudinn.",
  get monsters() {
    return [RABBICK(480, 60), w1(460, 180)].filter(Boolean);
  },
  battlemsg: "* Rabbick slithered in the way!",
  encounterno: 24
}, {
  ...w7,
  id: "rudinnranger2",
  name: "Rudinn Ranger x2",
  area: "Card Castle",
  desc: "Two Rudinn Rangers.#Sword throwers.",
  monsters: [w2(480, 110), w2(500, 200)],
  battlemsg: "* Rudinn Rangers came sparkling into view!",
  encounterno: 28
}, {
  ...w7,
  id: "various_guys",
  name: "Various Guys",
  area: "Field",
  desc: "Rudinn, Hathy#and Rudinn.",
  get monsters() {
    return [w1(480, 20), HATHY(500, 120), w1(460, 220)].filter(Boolean);
  },
  battlemsg: "* Various guys appeared!",
  encounterno: 33
}];
function __dr_imp(ww) {
  switch (ww) {
    case "../battle.js":
      return wR("./battle-BT4B2MQU.js", import.meta.url);
    case "../bullets.js":
      return wR("./bullets-OIROYDZK.js", import.meta.url);
    case "../controller.js":
      return wR("./c-K2UEFTKG.js", import.meta.url);
    case "../globals.js":
      return wR("./globals-Y7HSE7MN.js", import.meta.url);
    case "../gm.js":
      return wR("./gm-DVHMTG3U.js", import.meta.url);
    case "../heart.js":
      return wR("./heart-3C2QCZDY.js", import.meta.url);
    case "../text.js":
      return wR("./c-7ALSIY2V.js", import.meta.url);
    case "./hathy.js":
      return wR("./c-UX5ODO2V.js", import.meta.url);
    case "./jigsawry.js":
      return wR("./c-6L7G2UVM.js", import.meta.url);
    case "./rabbick.js":
      return wR("./c-3CJN6VAC.js", import.meta.url);
    case "./rudinn.js":
      return Promise.resolve().then(() => require_rudinn());
    default:
      return Promise.reject(new Error("module not in build"));
  }
}
RC(__dr_imp, "__dr_imp");
Ri(Rg, "G.mnfight = 2;");
export { Ry as a, Rl as b, setupStats as c, setupRangerStats as d, obj_spareanim as e, obj_defeatanim as f, obj_diamondenemy as g, obj_rudinnranger as h, obj_dknight_slasher as i, w8 as j, RB as k };
function wR(ww, wS) {
  var wE = new URL(ww, wS).href;
  var we = globalThis.__drWarm;
  return (we ? we(wE) : Promise.resolve()).then(function () {
    return import(wE).catch(function (wK) {
      try {
        wK.reload = true;
        wK.what = "the game code";
      } catch (ws) {}
      throw wK;
    });
  });
}
