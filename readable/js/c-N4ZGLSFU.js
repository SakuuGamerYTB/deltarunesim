const G = function () {
  ;
  let Ms = true;
  return function (MP, ML) {
    const ME = Ms ? function () {
      if (ML) {
        const Mx = ML.apply(MP, arguments);
        ML = null;
        return Mx;
      }
    } : function () {};
    Ms = false;
    return ME;
  };
}();
import { b as E, c as n } from "./c-YST6GS7R.js";
import { a as e, e as h } from "./c-ZF4DELGJ.js";
import { D as r, p as c } from "./c-SEM2A64W.js";
import { f as M0, h as M1 } from "./c-PF7AREFU.js";
import { a as M2, f as M3, n as M4, p as M5 } from "./c-EUQCKUJR.js";
import { D as M6, H as M7, b as M8, y as M9 } from "./c-YJJCI5ES.js";
import { Da as MM, Fa as MK, Za as MC, _a as Ml, ba as Mv, fb as MJ, j as Mw, m as Mf, qb as MR, vb as MU, x as Mg } from "./c-FMIAGHDE.js";
import { a as Mz, c as Mj, e as MQ, g as Mi, i as Mo, l as Mp } from "./c-PIEPTJTC.js";
var MB = {};
Mj(MB, {
  FIGHTS: () => MG,
  SOUNDS: () => MN,
  SPRITES: () => Mm,
  obj_defeatanim: () => obj_defeatanim,
  obj_jigsawbullet: () => obj_jigsawbullet,
  obj_jigsawryenemy: () => obj_jigsawryenemy,
  obj_spareanim: () => obj_spareanim,
  scr_defeatrun: () => scr_defeatrun,
  scr_spareanim: () => scr_spareanim,
  setupStats: () => setupStats
});
Mp();
var Mm = ["spr_jigsawry_idle", "spr_jigsawry_hurt", "spr_jigsawry_spared", "spr_jigsawbullet", "spr_defeatsweat", "spr_sparestar_anim", "spr_battleblcon_long"];
var MN = ["snd_defeatrun", "snd_spare"];
function setupStats(Ms) {
  M8.monstername[Ms] = "Jigsawry";
  M8.monstermaxhp[Ms] = 90;
  M8.monsterhp[Ms] = 90;
  M8.monsterat[Ms] = 5;
  M8.monsterdf[Ms] = 0;
  M8.monsterexp[Ms] = 0;
  M8.monstergold[Ms] = 20;
  M8.sparepoint[Ms] = 10;
  M8.mercymod[Ms] = 0;
  M8.mercymax[Ms] = 100;
  M8.canact[Ms][0] = 1;
  M8.actname[Ms][0] = "Check";
  M8.canact[Ms][1] = 1;
  M8.actname[Ms][1] = "Befriend";
  if (Array.isArray(M8.char) && M8.char.includes(2) && M8.plot < 150) {
    M8.canact[Ms][2] = 1;
    M8.actname[Ms][2] = "Warning";
    M8.actactor[Ms][2] = 3;
  }
}
Mz(setupStats, "setupStats");
var MI = class MH extends MC {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    MM("snd_defeatrun");
  }
  step() {
    this.g += 1;
    if (this.g >= 15) {
      this.t += 1;
    }
  }
  draw(Ms) {
    if (this.t === 0) {
      this.draw_self(Ms);
    }
    let MP = 0;
    if (this.g <= 5) {
      MP = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      MP = 1;
    }
    if (MP === 1) {
      Ms.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let ML = 0; ML <= 80; ML += 1) {
        Ms.draw_sprite_ext(this.sprite_index, this.image_index, this.x + ML * 4, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 0.4 - this.t / 8 + ML / 200);
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
};
Mz(MI, "obj_defeatanim");
MQ(MI, "kinds", Ml("obj_defeatanim", MC));
MQ(MI, "defaultDepth", 0);
var obj_defeatanim = MI;
function scr_defeatrun(Ms) {
  let MP = MR(Ms.x, Ms.y, obj_defeatanim);
  MP.sprite_index = Ms.sprite_index;
  MP.sprite_index = Ms.hurtsprite;
  MP.image_index = 0;
  MP.image_xscale = Ms.image_xscale;
  MP.image_yscale = Ms.image_yscale;
  Ms.instance_destroy();
}
Mz(scr_defeatrun, "scr_defeatrun");
var MY = class MO extends MC {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    MK("snd_spare");
    MM("snd_spare");
  }
  draw(Ms) {
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage += 1;
      Ms.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 4, this.y, this.image_xscale, this.image_yscale, 0, 0.7 - this.afterimage / 25);
      Ms.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 8, this.y, this.image_xscale, this.image_yscale, 0, 0.4 - this.afterimage / 30);
    }
    if (this.t < 6) {
      if (this.t < 5) {
        Ms.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 1 - this.neotone / 4);
      }
      let MP = this.t / 5;
      if (MP > 1) {
        MP = 1;
      }
      Ms.draw_sprite_white(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, MP - this.tone / 5);
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let ML = 0; ML < 2; ML += 1) {
        let ME = MR(this.x + Mw(this.sprite_width), this.y + Mw(this.sprite_height), M2);
        ME.image_xscale = 2;
        ME.image_yscale = 2;
        ME.sprite_index = "spr_sparestar_anim";
        ME.image_alpha = 2;
        ME.image_speed = 0.25;
        ME.hspeed = -3;
        ME.gravity = 0.5;
        ME.gravity_direction = 0;
        this.star[this.starcount] = ME;
        this.starcount += 1;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let Mx = 0; Mx < this.starcount; Mx += 1) {
        let MA = this.star[Mx];
        if (MA && !MA.destroyed) {
          MA.image_angle += 10;
          MA.image_alpha -= 0.1;
          if (MA.image_alpha <= 0) {
            MA.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone += 1;
    }
    if (this.t >= 9 && (this.neotone += 1, this.neotone >= 30)) {
      for (let Mn = 0; Mn < this.starcount; Mn += 1) {
        let MT = this.star[Mn];
        if (MT && !MT.destroyed) {
          MT.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
Mz(MY, "obj_spareanim");
MQ(MY, "kinds", Ml("obj_spareanim", MC));
MQ(MY, "defaultDepth", 0);
var obj_spareanim = MY;
function scr_spareanim(Ms) {
  let MP = MR(Ms.x, Ms.y, obj_spareanim);
  MP.sprite_index = Ms.sprite_index;
  MP.sprite_index = Ms.sparedsprite;
  MP.image_index = 0;
  MP.image_xscale = Ms.image_xscale;
  MP.image_yscale = Ms.image_yscale;
}
Mz(scr_spareanim, "scr_spareanim");
var MV = class Me extends h {
  create() {
    this.damage = 0;
    this.grazepoints = 0;
    this.grazed = 0;
    this.timepoints = 0;
    this.active = 0;
    this.image_alpha = 0;
    this.init = 0;
    this.tracking = 1;
    this.timer = 0;
    this.con = 0;
    this.side = 0;
    this.fade = 0;
    this.locked = 0;
    this.ltimer = 0;
    this.joker = 0;
  }
  step() {
    if (this.init === 0 && this.image_alpha < 1) {
      this.image_alpha += 0.1;
      if (this.image_alpha >= 1) {
        this.init = 1;
        this.active = 1;
      }
    }
    if (this.tracking === 1) {
      let Ms = MJ.first("obj_heart");
      if (Ms) {
        if (this.side === 1 || this.side === 3) {
          if (Ms.x + 10 - this.x >= 10) {
            this.x += 3;
          }
          if (Ms.x + 10 - this.x <= -10) {
            this.x -= 3;
          }
        }
        if (this.side === 0 || this.side === 2) {
          if (Ms.y + 10 - this.y >= 10) {
            this.y += 3;
          }
          if (Ms.y + 10 - this.y <= -10) {
            this.y -= 3;
          }
        }
      }
    }
    this.timer += 1;
    if (this.timer >= 30 && this.con === 0) {
      this.tracking = 0;
      this.direction = this.side * 90 + 180;
      this.speed = 4;
      this.gravity_direction = this.side * 90;
      this.gravity = 1.2;
      if (this.joker === 1) {
        this.gravity = 1.6;
        this.speed = 6;
      }
      this.con = 1;
    }
    if (this.timer >= 40) {
      this.gravity = 0;
    }
    if (this.locked === 1) {
      this.ltimer += 1;
      if (this.ltimer >= 12) {
        this.image_alpha -= 0.2;
        this.active = 0;
      }
      if (this.ltimer >= 17) {
        this.instance_destroy();
      }
    }
  }
  endStep() {
    if (!this.destroyed) {
      for (let Ms of MJ.list.slice()) {
        if (Ms !== this && !Ms.destroyed && !this.destroyed && !!Ms.is("obj_jigsawbullet")) {
          if (MU(this, Ms)) {
            this.collideWith(Ms);
          }
        }
      }
    }
  }
  collideWith(Ms) {
    if (this.con === 1 && Ms.con === 1 && this.active === 1 && Ms.active === 1 && this.locked === 0) {
      this.speed = 0;
      this.locked = 1;
      Ms.speed = 0;
      Ms.locked = 1;
      for (let MP = 0; MP < 16; MP++) {
        if (this.side === 0) {
          if (this.x >= Ms.x - 28) {
            this.x -= 1;
          }
          if (this.x >= Ms.x - 28) {
            Ms.x += 1;
          }
        }
        if (this.side === 3) {
          if (this.y >= Ms.y - 28) {
            this.y -= 1;
          }
          if (this.y >= Ms.y - 28) {
            Ms.y += 1;
          }
        }
        if (this.side === 2) {
          if (this.x <= Ms.x + 28) {
            this.x += 1;
          }
          if (this.x <= Ms.x + 28) {
            Ms.x -= 1;
          }
        }
        if (this.side === 1) {
          if (this.y <= Ms.y + 28) {
            this.y += 1;
          }
          if (this.y <= Ms.y + 28) {
            Ms.y -= 1;
          }
        }
      }
    }
  }
};
Mz(MV, "obj_jigsawbullet");
MQ(MV, "kinds", Ml("obj_jigsawbullet", h));
MQ(MV, "defaultDepth", 0);
MQ(MV, "defaultSprite", "spr_jigsawbullet");
var obj_jigsawbullet = MV;
function jigsawType(Ms, MP) {
  let ML = Ms.type;
  let ME = 40;
  if (ML === 81) {
    ME = 30;
  }
  if (ML === 82) {
    ME = 26;
  }
  if (ML === 83) {
    ME = 19;
  }
  if (ML === 84) {
    ME = 14;
  }
  if (Ms.btimer >= ME) {
    Ms.btimer = 0;
    let Mx = MP.bsx;
    let MA = MP.bsy;
    let Mn = MP.heart;
    let MT = Mn ? Mn.x : 310;
    let Mh = Mn ? Mn.y : 160;
    let Mt = Mf(0, 1);
    if (ML === 81 || ML === 84) {
      Mt = Ms.made;
      if (Ms.made === 0) {
        Ms.made = 1;
      } else {
        Ms.made = 0;
      }
    }
    if (Mt === 0) {
      let Mr = MR(MT + 8, MA - 150, obj_jigsawbullet);
      Mr.side = 3;
      let Mc = MR(MT + 8, MA + 150, obj_jigsawbullet);
      Mc.side = 1;
      if (ML === 82) {
        Mr.timer = 10;
      }
      if (ML === 82) {
        Mc.timer = 10;
      }
      if (ML === 83 || ML === 84) {
        Mr.timer = 15;
      }
      if (ML === 83 || ML === 84) {
        Mc.timer = 15;
      }
      e(Ms, Mr);
      e(Ms, Mc);
    }
    if (Mt === 1) {
      let MS = MR(Mx + 150, Mh + 8, obj_jigsawbullet);
      MS.side = 2;
      let K0 = MR(Mx - 150, Mh + 8, obj_jigsawbullet);
      K0.side = 0;
      if (ML === 82) {
        MS.timer = 10;
      }
      if (ML === 82) {
        K0.timer = 10;
      }
      if (ML === 83) {
        MS.timer = 15;
      }
      if (ML === 83) {
        K0.timer = 15;
      }
      e(Ms, MS);
      e(Ms, K0);
    }
    if (ML === 83) {
      MJ.with("obj_jigsawbullet", K1 => {
        K1.joker = 1;
      });
    }
  }
}
Mz(jigsawType, "jigsawType");
E({
  80: jigsawType,
  81: jigsawType,
  82: jigsawType,
  83: jigsawType,
  84: jigsawType
});
var Ma = class K2 extends c {
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
      image_speed: 0,
      image_xscale: 2,
      image_yscale: 2,
      rtimer: 0,
      shakex: 0,
      tellme: 0,
      thissprite: "spr_jigsawry_idle"
    });
    this.idlesprite = "spr_jigsawry_idle";
    this.hurtsprite = "spr_jigsawry_hurt";
    this.sparedsprite = "spr_jigsawry_spared";
    M8.flag[20] = 0;
    this.traitorp = 0;
  }
  alarmEvent(Ms) {
    if (Ms === 4) {
      this.con += 1;
    }
  }
  userEvent(Ms) {
    if (Ms === 12) {
      M8.monsterx[this.myself] = this.x + this.sprite_width / 2;
      M8.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (Ms === 11) {
      if (M8.room === "room_field1") {
        M8.flag[500] += 1;
      }
      if (M8.room === "room_field2" && M8.flag[50] !== 0) {
        M8.flag[501] = M8.flag[50];
      }
      return;
    }
    if (Ms === 10) {
      scr_spareanim(this);
      this.scr_monsterdefeat();
      this.instance_destroy();
      return;
    }
  }
  step() {
    let Ms = this.myself;
    if (M8.monster[Ms] === 1) {
      if (M8.mnfight === 1 && this.talked === 0) {
        M7(this);
        if (!MJ.exists("obj_darkener")) {
          MR(0, 0, M5);
        }
        M8.typer = 50;
        M8.msg = new Array(100).fill(" ");
        let MP = Mf(0, 1, 2, 3);
        if (MP === 0) {
          M8.msg[0] = "H... hurting&people is&cool..";
        }
        if (MP === 1) {
          M8.msg[0] = "P... Put up&your d-dukes,&bubbo...";
        }
        if (MP === 2) {
          M8.msg[0] = "F... Fighting?&I love&fighting...";
        }
        if (MP === 3) {
          M8.msg[0] = "I... I have&a rent&payment&to make...";
        }
        if (M8.mercymod[Ms] >= 100) {
          if (MP === 0 || MP === 1) {
            M8.msg[0] = "I always&wanted a&friend just&like you.";
          }
          if (MP === 2 || MP === 3) {
            M8.msg[0] = "We're friends&now, la la~";
          }
        }
        if (this.traitorp === 1) {
          if (MP === 0 || MP === 1) {
            M8.msg[0] = "WHADDA WORLD!";
          }
          if (MP === 2 || MP === 3) {
            M8.msg[0] = "I'M TOO YOUNG&TO DIE!!!";
          }
        }
        if (this.traitorp === 2) {
          if (MP === 0 || MP === 1) {
            M8.msg[0] = "BARRY!!!&THEY GOT&BARRY!!!";
          }
          if (MP === 2 || MP === 3) {
            M8.msg[0] = "BARRY!!&HANG IN&THERE BARRY!";
          }
        }
        this.traitorp = 0;
        M1(this.x - 160, this.y, 3);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && M8.mnfight === 1) {
        this.rtimer = 0;
        if (Mv() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          MJ.with("obj_writer", ML => ML.instance_destroy());
          M8.mnfight = 2;
        }
        if (M8.mnfight === 2) {
          if (!MJ.exists("obj_moveheart")) {
            M4();
          }
          if (!MJ.exists("obj_growtangle")) {
            MR(320, 170, M3);
          }
        }
      }
      if (M8.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          M8.flag[20] = 0;
          if (Mf(0) === 0 && (this.tellme = 0, MJ.with("obj_dbulletcontroller", ME => {
            if (ME.type >= 80 && ME.type <= 84) {
              MJ.with("obj_jigsawryenemy", Mx => {
                Mx.tellme = 1;
              });
            }
          }), this.tellme === 0)) {
            let ME = MR(this.x, this.y, n);
            ME.grazepoints = 4;
            ME.timepoints = 2;
            let Mx = 0;
            for (let MA = 0; MA < 3; MA += 1) {
              if (M8.monstertype[MA] === 15 && M8.monster[MA] === 1) {
                Mx += 1;
              }
            }
            ME.type = 80 + Mx;
            ME.target = this.mytarget;
            ME.damage = M8.monsterat[Ms] * 5;
          }
          this.turns += 1;
          M8.turntimer = 140;
          this.attacked = 1;
          M8.typer = 6;
          M8.fc = 0;
          let ML = Mf(0, 1, 2, 3, 4);
          if (ML === 0) {
            M8.battlemsg[0] = "* Jigsawry is pretending to march.";
          }
          if (ML === 1) {
            M8.battlemsg[0] = "* Jigsawry is trying to calculate this month's rent.";
          }
          if (ML === 2) {
            M8.battlemsg[0] = "* Jigsawry thought of its boss and felt afraid.";
          }
          if (ML === 3) {
            M8.battlemsg[0] = "* Jigsawry is wishing it could quit its job.";
          }
          if (ML === 4) {
            M8.battlemsg[0] = "* Smells like cardboard.";
          }
          if (M8.monsterstatus[Ms] === 1) {
            M8.battlemsg[0] = "* Jigsawry looks exhausted.";
          }
          if (M8.monsterhp[Ms] <= M8.monstermaxhp[Ms] / 3) {
            M8.battlemsg[0] = "* Jigsawry's edges are fraying.";
          }
          if (M8.mercymod[Ms] >= M8.mercymax[Ms]) {
            M8.msg[0] = "* Jigsawry looks happy about its life.";
          }
        } else {
          M8.turntimer = 120;
        }
      }
      if (M8.mnfight === 2 && M8.turntimer <= 1) {
        if (this.battlecancel === 1) {
          M8.mercymod[Ms] = 999;
        }
        if (this.battlecancel === 2) {
          MJ.with("obj_battlecontroller", Mn => {
            Mn.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (M8.myfight === 3) {
      if (this.acting === 1 && this.actcon === 0) {
        this.actcon = 1;
        M8.msg = new Array(100).fill(" ");
        M8.msg[0] = "* JIGSAWRY - AT 5 DF 0&* This mousenary is only fighting to make ends meet.../%";
        M0();
      }
      if (this.acting === 2 && this.actcon === 0) {
        M8.msg = new Array(100).fill(" ");
        M8.msg[0] = "* You barely lifted a finger^1, and.../%";
        M0();
        this.actcon = 3;
      }
      if (this.actcon === 3 && !MJ.exists("obj_writer")) {
        MJ.with("obj_jigsawryenemy", MT => {
          M6(MT.myself, 100);
        });
        let Mn = Mf(0, 1, 2, 3);
        M8.typer = 50;
        M8.msg = new Array(100).fill(" ");
        if (Mn === 0) {
          M8.msg[0] = "Of course&I'll be&your friend!/%";
        }
        if (Mn === 1) {
          M8.msg[0] = "Alright!&You win!&Let's be&friends!/%";
        }
        if (Mn === 2) {
          M8.msg[0] = "Friends?&I was thinking&the same&thing!/%";
        }
        if (Mn === 3) {
          M8.msg[0] = "... well,&if we HAVE&to be&friends.../%";
        }
        M1(this.x - 160, this.y, 3);
        this.actcon = 1;
      }
      if (this.acting === 3 && this.actcon === 0) {
        this.actcon = 1;
        M8.msg = new Array(100).fill(" ");
        M8.msg[0] = "* You and Ralsei warned Jigsawry about Susie^1.&* The enemy went on guard.../%";
        if (M9() > 1) {
          M8.msg[0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%";
        }
        for (let MT = 0; MT < 3; MT += 1) {
          M8.monstercomment[MT] = "(Warned)";
          M8.automiss[MT] = 1;
        }
        M0();
      }
      if (this.actcon === 1 && !MJ.exists("obj_writer")) {
        this.actcon = 0;
        r();
      }
    }
  }
  draw(Ms) {
    let MP = this.myself;
    if (this.state === 3) {
      M8.mercymod[MP] = 0;
      this.traitorp = 1;
      M8.flag[20] = 1;
      MJ.with("obj_jigsawryenemy", ML => {
        if (ML.traitorp === 0) {
          ML.traitorp = 2;
        }
        M8.mercymod[ML.myself] = 0;
      });
      if (M8.monsterhp[MP] <= M8.monstermaxhp[MP] - 20) {
        M8.monsterstatus[MP] = 1;
        if (M8.monstercomment[MP] === " ") {
          M8.monstercomment[MP] = "(Tired)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (M8.monster[MP] === 0) {
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
        Ms.draw_sprite_ext(this.hurtsprite, 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      this.thissprite = this.idlesprite;
      if (M8.mercymod[MP] >= M8.mercymax[MP]) {
        this.thissprite = this.sparedsprite;
      }
      if (M8.flag[20] === 1) {
        this.thissprite = this.hurtsprite;
      }
      Ms.draw_sprite_ext(this.thissprite, this.siner / 6, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        Ms.draw_sprite_white(this.thissprite, this.siner / 6, this.x, this.y, 2, 2, 0, -Mg(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
Mz(Ma, "obj_jigsawryenemy");
MQ(Ma, "kinds", Ml("obj_jigsawryenemy", c));
MQ(Ma, "defaultDepth", 90);
MQ(Ma, "defaultSprite", "spr_jigsawry_idle");
var obj_jigsawryenemy = Ma;
var My = 0;
function resolveMonster(Ms) {
  if (typeof window === "undefined" || !Mo.DR || !Array.isArray(Mo.DR.FIGHTS) || My) {
    return null;
  }
  My = 1;
  try {
    for (let MP of Mo.DR.FIGHTS) {
      let ML = null;
      try {
        ML = MP && MP.monsters;
      } catch {
        ML = null;
      }
      if (Array.isArray(ML)) {
        for (let ME of ML) {
          if (ME && ME.type === Ms && ME.cls && typeof ME.setup == "function") {
            return ME;
          }
        }
      }
    }
  } finally {
    My = 0;
  }
  return null;
}
Mz(resolveMonster, "resolveMonster");
var Md = {
  id: "jigsawry_smorgasboard",
  name: "Smorgasboard",
  chapter: 1,
  area: "Field",
  desc: "Smorgasboard.#Jigsawry + Rudinn + Hathy.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  battlemsg: "* Smorgasboard.",
  encounterno: 23,
  music: "battle",
  get monsters() {
    let Ms = [{
      cls: obj_jigsawryenemy,
      type: 15,
      x: 480,
      y: 20,
      setup: setupStats
    }];
    let MP = resolveMonster(5);
    if (MP) {
      Ms.push({
        cls: MP.cls,
        type: 5,
        x: 500,
        y: 120,
        setup: MP.setup
      });
    }
    let ML = resolveMonster(6);
    if (ML) {
      Ms.push({
        cls: ML.cls,
        type: 6,
        x: 460,
        y: 220,
        setup: ML.setup
      });
    }
    return Ms;
  }
};
var MG = [{
  id: "jigsawry",
  name: "Jigsawry",
  chapter: 1,
  area: "Field",
  desc: "Jigsawry.#Puzzle-piece pincers.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: obj_jigsawryenemy,
    type: 15,
    x: 480,
    y: 140,
    setup: setupStats
  }],
  battlemsg: "* Jigsawry drew near!",
  encounterno: 21,
  music: "battle"
}, {
  id: "jigsawry_board",
  name: "Jigsawry x3",
  chapter: 1,
  area: "Field",
  desc: "A board of Jigsawrys.#Three at once.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: obj_jigsawryenemy,
    type: 15,
    x: 480,
    y: 20,
    setup: setupStats
  }, {
    cls: obj_jigsawryenemy,
    type: 15,
    x: 500,
    y: 120,
    setup: setupStats
  }, {
    cls: obj_jigsawryenemy,
    type: 15,
    x: 460,
    y: 220,
    setup: setupStats
  }],
  battlemsg: "* A board of Jigsawrys blocked the way!",
  encounterno: 22,
  music: "battle"
}, Md];
Mi(obj_jigsawryenemy, "G.mnfight = 2;");
export { Mm as a, MN as b, setupStats as c, obj_defeatanim as d, scr_defeatrun as e, obj_spareanim as f, scr_spareanim as g, obj_jigsawbullet as h, obj_jigsawryenemy as i, MG as j, MB as k };
