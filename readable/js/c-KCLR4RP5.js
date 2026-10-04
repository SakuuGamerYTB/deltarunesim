const i = function () {
  ;
  let F3 = true;
  return function (F4, F5) {
    const F6 = F3 ? function () {
      if (F5) {
        const F7 = F5.apply(F4, arguments);
        F5 = null;
        return F7;
      }
    } : function () {};
    F3 = false;
    return F6;
  };
}();
import { b as d, c as e } from "./c-YST6GS7R.js";
import { a as y0, c as y1, g as y2 } from "./c-ZF4DELGJ.js";
import { D as y3, p as y4 } from "./c-SEM2A64W.js";
import { e as y5, f as y6 } from "./c-PF7AREFU.js";
import { a as y7, f as y8, n as y9, p as yy } from "./c-EUQCKUJR.js";
import { D as yF, H as ys, b as yz, i as yh, y as yk } from "./c-YJJCI5ES.js";
import { Da as ym, Fa as yV, Za as yx, _a as yZ, ba as yJ, fb as yU, j as yb, m as yX, qb as yW, s as yM, w as ya, x as yl } from "./c-FMIAGHDE.js";
import { a as yY, c as yL, e as yw, g as yQ, l as yK } from "./c-PIEPTJTC.js";
var yH = {};
yL(yH, {
  FIGHTS: () => F2,
  SOUNDS: () => yi,
  SPRITES: () => yu,
  obj_defeatanim: () => obj_defeatanim,
  obj_headhathy: () => obj_headhathy,
  obj_heartblcon: () => obj_heartblcon,
  obj_heartenemy: () => obj_heartenemy,
  obj_heartshaper: () => obj_heartshaper,
  obj_spareanim: () => obj_spareanim,
  obj_spinheart: () => obj_spinheart,
  setupHathyStats: () => yT,
  setupHeadHathyStats: () => setupHeadHathyStats,
  setupStats: () => setupStats
});
yK();
var yu = ["spr_heartenemy_idle", "spr_heartenemy_hurt", "spr_heartenemy_spared", "spr_hathyx_idle", "spr_hathyx_hurt", "spr_hathyx_spared", "spr_heartblcon_0", "spr_heartblcon_1", "spr_heartblcon_2", "spr_heartblcon_3", "spr_heartblcon_4", "spr_heartblcon_5", "spr_battleblcon", "spr_spinheart", "spr_spinheartmask", "spr_heartbullet", "spr_sparestar_anim", "spr_defeatsweat"];
var yi = ["snd_spare", "snd_defeatrun"];
function setupStats(F3) {
  yz.monstername[F3] = "Hathy";
  yz.monstermaxhp[F3] = 150;
  yz.monsterhp[F3] = 150;
  yz.monsterat[F3] = 6;
  yz.monsterdf[F3] = 0;
  yz.monsterexp[F3] = 0;
  yz.monstergold[F3] = 28;
  yz.sparepoint[F3] = 10;
  yz.mercymod[F3] = 0;
  yz.mercymax[F3] = 100;
  yz.canact[F3][0] = 1;
  yz.actname[F3][0] = "Check";
  yz.canact[F3][1] = 1;
  yz.actname[F3][1] = "Flatter";
  yz.canact[F3][2] = 1;
  yz.actname[F3][2] = "X-Flatter";
  yz.actactor[F3][2] = 3;
  if (yz.encounterno === 7) {
    yz.actactor[F3][2] = 2;
    if (yz.plot < 40) {
      yz.plot = 40;
    }
  }
  if (yh(2) && yz.plot < 150) {
    yz.canact[F3][3] = 1;
    yz.actname[F3][3] = "Warning";
    yz.actactor[F3][3] = 3;
  }
  if (yh(2) && yz.plot >= 150) {
    yz.canact[F3][3] = 1;
    yz.actname[F3][3] = "S-Flatter";
    yz.actactor[F3][3] = 2;
  }
}
yY(setupStats, "setupStats");
var yT = setupStats;
function setupHeadHathyStats(F3) {
  yz.monstername[F3] = "Head Hathy";
  yz.monstermaxhp[F3] = 190;
  yz.monsterhp[F3] = 190;
  yz.monsterat[F3] = 8;
  yz.monsterdf[F3] = 0;
  yz.monsterexp[F3] = 0;
  yz.monstergold[F3] = 40;
  yz.sparepoint[F3] = 10;
  yz.mercymod[F3] = 0;
  yz.mercymax[F3] = 100;
  yz.canact[F3][0] = 1;
  yz.actname[F3][0] = "Check";
  yz.canact[F3][1] = 1;
  yz.actname[F3][1] = "Flirt";
  yz.canact[F3][2] = 1;
  yz.actname[F3][2] = "X-Flirt";
  yz.actactor[F3][2] = 2;
}
yY(setupHeadHathyStats, "setupHeadHathyStats");
function scr_ralface(F3, F4) {
  yz.msg[F3] = "\\TX \\F0 \\E" + F4 + " \\FR \\TR %";
}
yY(scr_ralface, "scr_ralface");
function scr_susface(F3, F4) {
  yz.msg[F3] = "\\TX \\F0 \\E" + F4 + " \\FS \\TS %";
}
yY(scr_susface, "scr_susface");
var yN = /^\\TX \\F0 \\E(\w) \\F[RS] \\T[RS] %$/;
function foldFaceLines() {
  let F3 = [];
  let F4 = "";
  for (let F5 = 0; F5 < yz.msg.length; F5++) {
    let F6 = yz.msg[F5];
    if (typeof F6 != "string") {
      F3.push(F6);
      continue;
    }
    let F7 = yN.exec(F6);
    if (F7) {
      F4 = "\\E" + F7[1];
      continue;
    }
    F3.push(F4 + F6);
    F4 = "";
  }
  while (F3.length < 100) {
    F3.push(" ");
  }
  yz.msg = F3;
}
yY(foldFaceLines, "foldFaceLines");
var yv = class F8 extends yx {
  create() {
    this.image_speed = 0.2;
    this.siner = 0;
  }
  draw(F3) {
    this.siner += 1;
    F3.draw_sprite("spr_battleblcon", 0, this.x, this.y);
    F3.draw_sprite(this.sprite_index, this.image_index, this.x + 15 + yM(ya(this.siner / 8)), this.y + 15 + yM(yl(this.siner / 8)));
  }
};
yY(yv, "obj_heartblcon");
yw(yv, "kinds", yZ("obj_heartblcon", yx));
yw(yv, "defaultDepth", 0);
yw(yv, "defaultSprite", "spr_heartblcon_0");
var obj_heartblcon = yv;
var yO = class F9 extends yx {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    yV("snd_spare");
    ym("snd_spare");
  }
  draw(F3) {
    let F4 = this.sprite_index;
    let F5 = this.image_index;
    let F6 = this.image_xscale;
    let F7 = this.image_yscale;
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage += 1;
      F3.draw_sprite_white(F4, F5, this.x + this.afterimage * 4, this.y, F6, F7, 0, 0.7 - this.afterimage / 25);
      F3.draw_sprite_white(F4, F5, this.x + this.afterimage * 8, this.y, F6, F7, 0, 0.4 - this.afterimage / 30);
    }
    if (this.t < 6) {
      if (this.t < 5) {
        F3.draw_sprite_ext(F4, F5, this.x, this.y, F6, F7, 0, this.image_blend, 1 - this.neotone / 4);
      }
      let Fy = this.t / 5;
      if (Fy > 1) {
        Fy = 1;
      }
      F3.draw_sprite_white(F4, F5, this.x, this.y, F6, F7, 0, Fy - this.tone / 5);
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let FF = 0; FF < 2; FF++) {
        let Fs = yW(this.x + yb(this.sprite_width), this.y + yb(this.sprite_height), y7);
        Fs.image_xscale = 2;
        Fs.image_yscale = 2;
        Fs.sprite_index = "spr_sparestar_anim";
        Fs.image_alpha = 2;
        Fs.image_speed = 0.25;
        Fs.hspeed = -3;
        Fs.gravity = 0.5;
        Fs.gravity_direction = 0;
        this.star[this.starcount] = Fs;
        this.starcount += 1;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let Fz = 0; Fz < this.starcount; Fz++) {
        let Fh = this.star[Fz];
        if (Fh && !Fh.destroyed) {
          Fh.image_angle += 10;
          Fh.image_alpha -= 0.1;
          if (Fh.image_alpha <= 0) {
            Fh.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone += 1;
    }
    if (this.t >= 9 && (this.neotone += 1, this.neotone >= 30)) {
      for (let Fk = 0; Fk < this.starcount; Fk++) {
        let Fm = this.star[Fk];
        if (Fm && !Fm.destroyed) {
          Fm.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
yY(yO, "obj_spareanim");
yw(yO, "kinds", yZ("obj_spareanim", yx));
yw(yO, "defaultDepth", 0);
var obj_spareanim = yO;
var yP = class FV extends yx {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    ym("snd_defeatrun");
  }
  step() {
    this.g += 1;
    if (this.g >= 15) {
      this.t += 1;
    }
  }
  draw(F3) {
    if (this.t === 0) {
      this.draw_self(F3);
    }
    let F4 = 0;
    if (this.g <= 5) {
      F4 = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      F4 = 1;
    }
    if (F4 === 1) {
      F3.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let F5 = 0; F5 <= 80; F5++) {
        F3.draw_sprite_ext(this.sprite_index, this.image_index, this.x + F5 * 4, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 0.4 - this.t / 8 + F5 / 200);
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
};
yY(yP, "obj_defeatanim");
yw(yP, "kinds", yZ("obj_defeatanim", yx));
yw(yP, "defaultDepth", 0);
var obj_defeatanim = yP;
var yq = class Fx extends y2 {
  create() {
    let F3 = yU.first("obj_heart");
    this.con = 0;
    this.htimer = 0;
    this.image_xscale = 4;
    this.image_yscale = 4;
    this.active = 0;
    this.image_alpha = 0;
    this.x = (F3 ? F3.x : 312) + 8;
    this.y = (F3 ? F3.y : 162) + 8;
    this.image_angle = -90;
    this.joker = 0;
    this.damage = 100;
    this.grazed = 0;
    this.grazepoints = 5;
    this.timepoints = 0;
    this.inv = 60;
    this.grazetimer = 0;
  }
  step() {
    if (this.con === 4) {
      this.htimer += 1;
      if (this.htimer >= 10) {
        this.friction = 0;
        this.speed = 0;
      }
      if (this.htimer >= 20) {
        this.active = 0;
        this.image_alpha -= 0.2;
      }
      if (this.htimer >= 25 && yz.turntimer >= 0) {
        yz.turntimer = -2;
      }
    }
    if (this.con === 3) {
      this.htimer += 1;
      if (this.htimer >= this.hmax) {
        this.direction = this.image_angle;
        this.speed = 2.5;
        this.friction = -0.5;
        if (this.joker === 1) {
          this.speed = 5;
        }
        this.con = 4;
        this.htimer = 0;
      }
    }
    if (this.con === 2) {
      this.htimer += 1;
      this.image_angle += 24;
      if (this.htimer >= this.spinmax) {
        this.hmax = 19;
        if (this.joker === 1) {
          this.hmax = 15;
        }
        this.image_angle = 270 + this.spinmax * 24;
        this.con = 3;
        this.htimer = 0;
      }
    }
    if (this.con === 1) {
      this.htimer += 1;
      if (this.htimer >= 10) {
        this.spinmax = yX(26.25, 30, 33.75, 37.5);
        if (this.joker === 1) {
          this.spinmax = 15 + yb(15);
        }
        this.con = 2;
        this.htimer = 0;
      }
    }
    if (this.con === 0) {
      this.image_alpha += 0.2;
      this.image_xscale -= 0.2;
      this.image_yscale -= 0.2;
      this.htimer += 1;
      if (this.htimer >= 5) {
        this.con = 1;
        this.htimer = 0;
        this.active = 1;
      }
    }
    if (this.grazed === 1) {
      this.grazetimer += 1;
    }
    if (this.grazetimer >= 15) {
      this.grazetimer = 0;
      this.grazed = 0;
    }
  }
};
yY(yq, "obj_spinheart");
yw(yq, "kinds", yZ("obj_spinheart", y2));
yw(yq, "defaultDepth", 0);
yw(yq, "defaultSprite", "spr_spinheart");
yw(yq, "defaultMask", "spr_spinheartmask");
var obj_spinheart = yq;
var yc = class FZ extends y1 {
  create() {
    let F3 = yU.first("obj_heart");
    this.siner = 0;
    this.radius = 160;
    this.dir = 0;
    this.norot = 0;
    this.actual = 1;
    this.thisx = F3 ? F3.x : 312;
    this.thisy = F3 ? F3.y : 162;
    this.made = 0;
    this.damage = 100;
    this.active = 1;
    this.type = 0;
    this.maxradius = 80;
    this.movespeed = 0.5;
    this.radcon = 0;
    this.bul = [];
  }
  step() {
    if (this.actual === 0 && (this.siner += 1, this.dir += 2, this.xdir = this.dir + 180, this.norot === 1)) {
      let F3 = yU.first("obj_heart");
      for (let F4 = 0; F4 < 20; F4++) {
        let F5 = F4 * 2 * Math.PI / 20 + this.siner / 60;
        let F6 = ya(F5) * ya(F5) * ya(F5) * 16;
        let F7 = yl(F5) * 13 - yl(F5 * 2) * 5 - yl(F5 * 3) * 2 - yl(F5 * 4);
        this.xxx = (F3 ? F3.x : 312) + 8 + F6 * this.radius;
        this.yyy = (F3 ? F3.y : 162) + 8 - F7 * this.radius;
      }
    }
    if (this.actual === 1) {
      if (this.made === 0) {
        for (let FF = 0; FF < 16; FF++) {
          let Fs = yW(-20, -20, y2);
          Fs.damage = this.damage;
          Fs.grazepoints = 2;
          Fs.timepoints = 1;
          Fs.depth = 0;
          Fs.image_alpha = 0;
          Fs.sprite_index = "spr_heartbullet";
          this.bul[FF] = Fs;
        }
        this.made = 1;
      }
      if (this.type === 0) {
        if (this.radius > this.maxradius) {
          this.radius -= 5;
        } else {
          this.radius += ya(this.siner / 10) / 2;
        }
      }
      if (this.type === 1) {
        if (this.radius > this.maxradius && this.radcon === 0) {
          this.radius -= 4;
        } else {
          this.radcon = 1;
          this.radius += 8;
          this.active = 0;
          this.image_alpha -= 0.1;
        }
      }
      this.dir += 2;
      this.siner += 1.5;
      let Fy = 0;
      for (let Fz = 0; Fz < 16; Fz++) {
        let Fh = this.bul[Fz];
        if (Fh && !Fh.destroyed) {
          Fy += 1;
          if (this.radcon === 0 && Fh.image_alpha < 1) {
            Fh.image_alpha += 0.1;
          }
          let Fk = ya(Math.PI * Fz / 8 + this.siner / 20) * this.radius;
          let Fm = yl(Math.PI * Fz / 8 + this.siner / 20) * this.radius;
          Fh.x = this.thisx + 8 + Fk;
          Fh.y = this.thisy + 8 - Fm;
          if (this.radcon === 1) {
            Fh.image_alpha -= 0.1;
            Fh.active = 0;
            if (Fh.image_alpha <= 0.1) {
              Fh.instance_destroy();
            }
          }
        }
      }
      if (Fy === 0) {
        this.instance_destroy();
      }
    }
  }
  draw(F3) {}
};
yY(yc, "obj_heartshaper");
yw(yc, "kinds", yZ("obj_heartshaper", y1));
yw(yc, "defaultDepth", 0);
yw(yc, "defaultSprite", "spr_heartbullet");
yw(yc, "defaultVisible", false);
var obj_heartshaper = yc;
d({
  33: (F3, F4) => {
    if (F3.btimer >= F3.ratio * 26) {
      let F5 = yW(F4.bsx, F4.bsy, obj_heartshaper);
      F5.maxradius = 50;
      F5.type = 1;
      F3.btimer = 0;
      F5.thisx = F4.bsx - 50 + yb(100);
      F5.thisy = F4.bsy - 50 + yb(100);
      y0(F3, F5);
    }
  }
});
var obj_hathyparent = class FJ extends y4 {
  create() {
    this.bikeflip = 0;
    this.becomeflash = 0;
    this.turnt = 0;
    this.turns = 0;
    this.talktimer = 0;
    this.talkmax = 90;
    this.state = 0;
    this.flash = 0;
    this.siner = 0;
    this.fsiner = 0;
    this.talked = 0;
    this.attacked = 0;
    this.hurt = 0;
    this.hurttimer = 0;
    this.hurtshake = 0;
    this.acting = 0;
    this.actcon = 0;
    this.acttimer = 0;
    this.mercymod = 0;
    this.maxmercy = 9999;
    this.warned = 0;
    this.compliment = 0;
    this.tired = 0;
    this.delete_n = 0;
    this.attacks = 0;
    this.dodgetimer = 0;
    this.candodge = 0;
    this.con = 0;
    this.battlecancel = 0;
    this.nexttry = 0;
    this.mytarget = 3;
    this.checkhp1 = yz.hp[1];
    this.checkhp2 = yz.hp[2];
    this.firstturn = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.rtimer = 0;
    this.shakex = 0;
  }
  userEvent(F3) {
    if (F3 === 12) {
      yz.monsterx[this.myself] = this.x + this.sprite_width / 2;
      yz.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (F3 === 10) {
      this.spared();
      return;
    }
  }
  spared() {
    let F3 = yW(this.x, this.y, obj_spareanim);
    F3.sprite_index = this.sparedsprite;
    F3.image_index = 0;
    F3.image_xscale = this.image_xscale;
    F3.image_yscale = this.image_yscale;
    this.scr_monsterdefeat();
    this.instance_destroy();
  }
  scr_defeatrun() {
    let F3 = yW(this.x, this.y, obj_defeatanim);
    F3.sprite_index = this.hurtsprite;
    F3.image_index = 0;
    F3.image_xscale = this.image_xscale;
    F3.image_yscale = this.image_yscale;
    this.instance_destroy();
  }
  alarmEvent(F3) {
    if (F3 === 4) {
      this.actcon += 1;
    }
  }
  step() {
    let F3 = this.myself;
    if (yz.monster[F3] === 1) {
      if (yz.mnfight === 1 && this.talked === 0) {
        ys(this);
        if (!yU.exists("obj_darkener")) {
          yW(0, 0, yy);
        }
        let F4 = yW(this.x - 100, this.y, obj_heartblcon);
        F4.sprite_index = this.blconSprite();
        if (this.acting === 2) {
          F4.sprite_index = "spr_heartblcon_2";
        }
        if (this.acting === 3) {
          F4.sprite_index = "spr_heartblcon_3";
        }
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && yz.mnfight === 1) {
        this.rtimer = 0;
        if (yJ() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          yU.with("obj_heartblcon", F5 => F5.instance_destroy());
          yz.mnfight = 2;
        }
        if (yz.mnfight === 2) {
          if (!yU.exists("obj_moveheart")) {
            y9();
          }
          if (!yU.exists("obj_growtangle")) {
            yW(320, 170, y8);
          }
        }
      }
      if (yz.mnfight === 2 && this.attacked === 0) {
        yU.with("obj_heartblcon", F5 => F5.instance_destroy());
        this.rtimer += 1;
        if (this.rtimer === 12) {
          this.makeAttack(F3);
          this.turns += 1;
          this.attacked = 1;
          yz.typer = 6;
          yz.fc = 0;
          this.attackMessages(F3);
        } else {
          yz.turntimer = 120;
        }
      }
      if (yz.mnfight === 2 && yz.turntimer <= 1) {
        this.firstturn = 1;
        if (this.battlecancel === 1) {
          yz.mercymod[F3] = 999;
        }
      }
    }
    if (yz.myfight === 3) {
      this.actStep(F3);
    }
    if (yz.myfight === 7) {
      this.hspeed = 15;
    }
  }
  draw(F3) {
    let F4 = this.myself;
    if (this.state === 3) {
      if (yz.monsterhp[F4] <= yz.monstermaxhp[F4] / 3) {
        yz.monsterstatus[F4] = 1;
        if (yz.monstercomment[F4] === " ") {
          yz.monstercomment[F4] = "(Tired)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (yz.monster[F4] === 0) {
          this.onDefeatRun(F4);
          this.scr_defeatrun();
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
        F3.draw_sprite_ext(this.hurtsprite, 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      let F5 = this.idlesprite;
      if (yz.mercymod[F4] >= yz.mercymax[F4]) {
        F5 = this.sparedsprite;
      }
      F3.draw_sprite_ext(F5, this.siner / 5, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        F3.draw_sprite_white(F5, this.siner / 5, this.x, this.y, 2, 2, 0, -yl(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
  onDefeatRun(F3) {}
};
yY(obj_hathyparent, "obj_hathyparent");
yw(obj_hathyparent, "kinds", yZ("obj_hathyparent", y4));
yw(obj_hathyparent, "defaultDepth", 90);
var yn = obj_hathyparent;
var yS = class Ft extends yn {
  create() {
    super.create();
    this.idlesprite = "spr_heartenemy_idle";
    this.hurtsprite = "spr_heartenemy_hurt";
    this.sparedsprite = "spr_heartenemy_spared";
  }
  blconSprite() {
    return yX("spr_heartblcon_0", "spr_heartblcon_1");
  }
  onDefeatRun(F3) {
    if (yz.flag[51 + F3] === 5) {
      yz.flag[524] += 1;
    }
    yz.flag[521] += 1;
  }
  makeAttack(F3) {
    let F4 = yk();
    yz.turntimer = 140;
    if (F4 === 1) {
      let F5 = yW(this.x, this.y, obj_spinheart);
      F5.type = 0;
      F5.target = this.mytarget;
      F5.damage = yz.monsterat[F3] * 5;
    } else {
      let F6 = yW(this.x, this.y, obj_heartshaper);
      F6.type = 0;
      F6.target = this.mytarget;
      F6.damage = yz.monsterat[F3] * 5;
      if (yz.encounterno === 9) {
        yz.turntimer = 100;
      }
    }
  }
  attackMessages(F3) {
    let F4 = yX(0, 1, 2, 3, 4);
    if (F4 === 0) {
      yz.battlemsg[0] = "* Hathy's body beats audibly.";
    }
    if (F4 === 1) {
      yz.battlemsg[0] = "* Hathy smiled a darling smile.";
    }
    if (F4 === 2) {
      yz.battlemsg[0] = "* Hathy is whispering a lovely spell.";
    }
    if (F4 === 3) {
      yz.battlemsg[0] = "* Hathy has a little secret.";
    }
    if (F4 === 4) {
      yz.battlemsg[0] = "* Smells like a soft kiss.";
    }
    if (yz.monsterstatus[F3] === 1) {
      yz.battlemsg[0] = "* Hathy's beat slows.";
    }
    if (yz.monsterhp[F3] <= yz.monstermaxhp[F3] / 3) {
      yz.battlemsg[0] = "* Hathy's beat seems to stutter.";
    }
    if (yz.mercymod[F3] >= yz.mercymax[F3]) {
      yz.msg[0] = "* Hathy is skipping beats.";
    }
  }
  actStep(F3) {
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      yz.msg[0] = "* HATHY - AT 7 DF 0&* I am a \\cYlittle kiss\\cW./%";
      y6();
    }
    if (this.acting === 2 && this.actcon === 0) {
      let F4 = yX(0, 1, 2);
      yz.msg[0] = "* You told Hathy it has cool tentacles^1.&* It began to think about this.../%";
      if (F4 === 1) {
        yz.msg[0] = "* You called Hathy a sweetheart^1.&* It began to think about this.../%";
      }
      if (F4 === 2) {
        yz.msg[0] = "* You told Hathy its teeth look like knives^1.&* It began to think about this.../%";
      }
      yF(F3, 100);
      y6();
      this.battlecancel = 1;
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      yz.msg[0] = "* You ordered Ralsei to flatter all the enemies!/";
      scr_ralface(1, 0);
      let F5 = yX(0, 1, 2);
      yz.msg[2] = "* Out of anyone^1, I'm glad we randomly encountered all of you./%";
      if (F5 === 1) {
        yz.msg[2] = "* I'm making tea later..^1.&* Umm^1, would you like any?/%";
      }
      if (F5 === 2) {
        yz.msg[2] = "* We don't need EXP^1.&* Just encountering your smile is reward enough./%";
      }
      yF(0, 100);
      yF(1, 100);
      yF(2, 100);
      this.actcon = 1;
      foldFaceLines();
      y6();
    }
    if (this.acting === 4 && this.actcon === 0) {
      this.actcon = 1;
      if (yz.plot < 150) {
        yz.msg[0] = "* You and Ralsei warned Hathy about Susie^1.&* The enemy went on guard./%";
        if (yk() > 1) {
          yz.msg[0] = "* You and Ralsei  warned the enemies about Susie^1.&* Everyone went on guard./%";
        }
        for (let F6 = 0; F6 < 3; F6++) {
          yz.monstercomment[F6] = "(Warned)";
          yz.automiss[F6] = 1;
        }
      } else {
        yz.msg[0] = "* You ordered Susie to flatter all the enemies!/";
        scr_susface(1, 2);
        let F7 = yX(0, 1, 2);
        yz.msg[2] = "* Can't believe my bozo teammates.../";
        yz.msg[3] = "\\E0* ... came back here just to see YOU guys./%";
        if (F7 === 1) {
          yz.msg[3] = "\\E0* ... wanted to fight someone like YOU so much./%";
        }
        if (F7 === 2) {
          yz.msg[3] = "\\E0* ... have a THING for weaklings like you./%";
        }
        yF(0, 100);
        yF(1, 100);
        yF(2, 100);
      }
      foldFaceLines();
      y6();
    }
    if (this.actcon === 1 && !yU.exists("obj_writer")) {
      this.actcon = 0;
      y3();
    }
    if (this.actcon === 5 && !yU.exists("obj_writer")) {
      yz.battleat[1] = 90;
      yz.battleat[2] = 90;
      this.actcon = 6;
      yU.with("obj_herosusie", Fy => {
        Fy.attacktimer = 0;
        Fy.state = 1;
        Fy.points = 100 + yM(yb(40));
        yz.faceaction[Fy.myself] = 0;
        if (yz.automiss[0] === 1) {
          Fy.points = 0;
        }
      });
      this.alarm[4] = 50;
    }
    if (this.actcon === 7) {
      yz.msg[0] = "* Where'd you get it^1?&* Heh heh heh heh./";
      scr_ralface(1, 3);
      yz.msg[2] = "* (Umm^1, Kris^1, maybe Susie shouldn't ACT anymore...)/%";
      if (yz.automiss[0] === 1) {
        yz.msg[0] = "\\E7* H-hey^1, what gives!?/";
        scr_ralface(1, 3);
        yz.msg[2] = "* (Wow^1, that was close^1, Kris...)/";
        yz.msg[3] = "* (Maybe Susie shouldn't ACT anymore...)/%";
      }
      foldFaceLines();
      y5();
      this.actcon = 1;
    }
  }
};
yY(yS, "obj_heartenemy");
yw(yS, "kinds", yZ("obj_heartenemy", yn));
yw(yS, "defaultDepth", 90);
yw(yS, "defaultSprite", "spr_heartenemy_idle");
var obj_heartenemy = yS;
var yp = class FU extends yn {
  create() {
    super.create();
    this.idlesprite = "spr_hathyx_idle";
    this.hurtsprite = "spr_hathyx_hurt";
    this.sparedsprite = "spr_hathyx_spared";
  }
  blconSprite() {
    return yX("spr_heartblcon_4", "spr_heartblcon_5");
  }
  makeAttack(F3) {
    let F4 = yk();
    yz.turntimer = 180;
    if (F4 === 1) {
      let F5 = yW(this.x, this.y, obj_spinheart);
      F5.joker = 1;
      F5.type = 0;
      F5.target = this.mytarget;
      F5.damage = yz.monsterat[F3] * 5;
    } else {
      let F6 = yW(this.x, this.y, e);
      F6.type = 33;
      F6.ratio = 1.3 - yU.number("obj_headhathy") / 10;
      F6.target = this.mytarget;
      F6.damage = yz.monsterat[F3] * 5;
      if (yU.number("obj_headhathy") > 1 && yU.number("obj_dbulletcontroller") > 1) {
        F6.instance_destroy();
      }
    }
  }
  attackMessages(F3) {
    let F4 = yX(0, 1, 2, 3, 4);
    if (F4 === 0) {
      yz.battlemsg[0] = "* Head Hathy's body moves silently.";
    }
    if (F4 === 1) {
      yz.battlemsg[0] = "* Head Hathy showed no emotion at all.";
    }
    if (F4 === 2) {
      yz.battlemsg[0] = "* Head Hathy whispered something unhearable.";
    }
    if (F4 === 3) {
      yz.battlemsg[0] = "* Head Hathy's mind is an enigma.";
    }
    if (F4 === 4) {
      yz.battlemsg[0] = "* Smells like a lonely kiss.";
    }
    if (yz.monsterstatus[F3] === 1) {
      yz.battlemsg[0] = "* Head Hathy's beat slows.";
    }
    if (yz.monsterhp[F3] <= yz.monstermaxhp[F3] / 3) {
      yz.battlemsg[0] = "* Head Hathy's beat seems to stutter.";
    }
    if (yz.mercymod[F3] >= yz.mercymax[F3]) {
      yz.msg[0] = "* Head Hathy is skipping beats.";
    }
  }
  actStep(F3) {
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      yz.msg[0] = "* HEAD HATHY - AT 8 DF 0&* It learned to hide its feelings..^1. is that strength?/%";
      y6();
    }
    if (this.acting === 2 && this.actcon === 0) {
      yX(0, 1, 2);
      yz.msg[0] = "* You flirted with Head Hathy^1.&* It was highly effective./%";
      yF(F3, 100);
      y6();
      this.battlecancel = 1;
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      yF(F3, 100);
      this.actcon = 1;
      if (yz.flag[504] === 0) {
        yz.msg[0] = "* You ordered SUSIE to flirt with the enemy!/";
        scr_susface(1, 0);
        yz.msg[2] = "* .../";
        yz.msg[3] = "\\E1* Annnnnnnnnd hell no./";
        scr_ralface(4, 6);
        yz.msg[5] = "* Aww^1, Susie^1, it's OK if you don't know how!/";
        scr_susface(6, 7);
        yz.msg[7] = "* What^1? Shut up^1, that's not the problem!/";
        scr_ralface(8, 6);
        yz.msg[9] = "* ... Are you sure?/";
        scr_susface(10, 7);
        yz.msg[11] = "* Alright^1, LOOK^1, wise guy! I'll show you! Watch this!/";
        yz.msg[12] = "\\E0* AHEM./%";
        this.actcon = 20;
        this.acttimer = 0;
      }
      if (yz.flag[504] === 1) {
        yz.msg[0] = "* You ordered SUSIE to flirt with the enemy!/";
        scr_susface(1, 2);
        yz.msg[2] = "* Hell nah^1. Let's see Ralsei do it./";
        scr_ralface(3, 1);
        yz.msg[4] = "* I suppose if it can't be helped...!/";
        yz.msg[5] = "\\E0* Hathy^1, your beauty is just... transcendent./";
        yz.msg[6] = "\\E8* Your hair is like a waterfall of.../";
        yz.msg[7] = "\\E1* ... wait^1, um^1, do you have hair^1, or.../%";
        this.actcon = 22;
      }
      if (yz.flag[504] === 2) {
        yz.msg[0] = "* You ordered SUSIE to flirt with the enemy!/";
        scr_susface(1, 7);
        yz.msg[2] = "* Oh my god^1, Kris!!^1! I can't!^1! Do it yourself!!/%";
        this.actcon = 25;
      }
      if (yz.flag[504] >= 3) {
        yz.msg[0] = "* You flirted with the enemies^1. It worked^1! (Susie did not help.)/%";
        yF(0, 100);
        yF(1, 100);
        yF(2, 100);
      }
      yz.flag[504] += 1;
      foldFaceLines();
      y6();
    }
    if (this.actcon === 1 && !yU.exists("obj_writer")) {
      this.actcon = 0;
      y3();
      if (this.delete_n === 1) {
        this.instance_destroy();
      }
    }
    if (this.actcon === 20 && !yU.exists("obj_writer")) {
      this.acttimer += 1;
      if (this.acttimer >= 60) {
        this.actcon = 21;
      }
    }
    if (this.actcon === 21) {
      yz.fe = 2;
      yz.msg[0] = "* So^1, uh.../";
      yz.msg[1] = "* Come here..^1. often?/%";
      y5();
      this.actcon = 22;
    }
    if (this.actcon === 22 && !yU.exists("obj_writer")) {
      this.hspeed = 6;
      yz.msg[0] = "* (Head Hathy felt awkward and left...)/";
      scr_susface(1, 7);
      yz.msg[2] = "* HEY^1, GET BACK HERE AND LET ME FLIRT WITH YOU!!!/%";
      if (yz.flag[504] === 2) {
        yz.msg[0] = "* (Head Hathy felt awkward and left...)/";
        scr_ralface(1, 3);
        yz.msg[2] = "* Oh^1, oh dear^1! Wait!!/";
        scr_susface(3, 2);
        yz.msg[4] = "* Not so easy^1, huh!?/%";
      }
      foldFaceLines();
      y6();
      this.delete_n = 1;
      this.actcon = 23;
      yz.monster[F3] = 0;
    }
    if (this.actcon === 23 && this.x >= 640) {
      this.actcon = 1;
    }
    if (this.actcon === 25 && !yU.exists("obj_writer")) {
      yz.msg[0] = "* You said some sweet lines. The enemies were deeply enamored!/%";
      y6();
      yF(0, 100);
      yF(1, 100);
      yF(2, 100);
      this.actcon = 1;
    }
  }
};
yY(yp, "obj_headhathy");
yw(yp, "kinds", yZ("obj_headhathy", yn));
yw(yp, "defaultDepth", 90);
yw(yp, "defaultSprite", "spr_hathyx_idle");
var obj_headhathy = yp;
var yB = {
  chapter: 1,
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  music: "battle"
};
var yf = yY((F3, F4) => ({
  cls: obj_heartenemy,
  type: 6,
  x: F3,
  y: F4,
  setup: setupStats
}), "H");
var F0 = yY((F3, F4) => ({
  cls: obj_headhathy,
  type: 23,
  x: F3,
  y: F4,
  setup: setupHeadHathyStats
}), "HH");
var MISSING = yY((F3, F4, F5, F6) => ({
  cls: null,
  type: 0,
  x: F5,
  y: F6,
  setup: () => {},
  missing: F3,
  missingType: F4
}), "MISSING");
var F2 = [{
  id: "hathy-rudinn",
  name: "Rudinn & Hathy",
  ...yB,
  area: "Field",
  desc: "Rudinn and Hathy.#(Rudinn is in its#own module.)",
  encounterno: 6,
  battlemsg: "* Rudinn and Hathy blocked the way!",
  monsters: [MISSING("obj_diamondenemy", 5, 480, 110), yf(500, 200)]
}, {
  id: "hathy3",
  name: "Hathy x3",
  ...yB,
  area: "Field",
  desc: "Three Hathys.#Rings of hearts.",
  encounterno: 9,
  battlemsg: "* Three Hathys blocked the way!",
  monsters: [yf(480, 20), yf(500, 120), yf(460, 220)]
}, {
  id: "hathy-clover",
  name: "Clover & Hathy",
  ...yB,
  area: "Field",
  desc: "Clover and Hathy.#(Clover is in its#own module.)",
  encounterno: 15,
  battlemsg: "* Clover and Hathy grew close!",
  monsters: [MISSING("obj_clubsenemy", 7, 400, 30), yf(420, 200)]
}, {
  id: "hathy-smorgasboard",
  name: "Smorgasboard",
  ...yB,
  area: "Field",
  desc: "Jigsawry, Rudinn#and Hathy.",
  encounterno: 23,
  battlemsg: "* Smorgasboard.",
  monsters: [MISSING("obj_jigsawryenemy", 15, 480, 20), MISSING("obj_diamondenemy", 5, 500, 120), yf(460, 220)]
}, {
  id: "headhathy2",
  name: "Head Hathy x2",
  ...yB,
  area: "Card Castle",
  desc: "Two Head Hathys.#Shrinking heart rings.",
  encounterno: 29,
  battlemsg: "* Head Hathy blocked the way quietly!",
  monsters: [F0(480, 110), F0(500, 200)]
}, {
  id: "headhathy3",
  name: "Head Hathy x3",
  ...yB,
  area: "Card Castle",
  desc: "Three Head Hathys.#Shrinking heart rings.",
  encounterno: 30,
  battlemsg: "* Head Hathy blocked the way quietly! (x3)",
  monsters: [F0(480, 20), F0(500, 120), F0(460, 220)]
}, {
  id: "hathy-various",
  name: "Various guys",
  ...yB,
  area: "Field",
  desc: "Rudinn, Hathy#and Rudinn.",
  encounterno: 33,
  battlemsg: "* Various guys appeared!",
  monsters: [MISSING("obj_diamondenemy", 5, 480, 20), yf(500, 120), MISSING("obj_diamondenemy", 5, 460, 220)]
}];
yQ(yn, "G.mnfight = 2;");
export { yu as a, yi as b, setupStats as c, yT as d, setupHeadHathyStats as e, obj_heartblcon as f, obj_spareanim as g, obj_defeatanim as h, obj_spinheart as i, obj_heartshaper as j, obj_heartenemy as k, obj_headhathy as l, F2 as m, yH as n };
