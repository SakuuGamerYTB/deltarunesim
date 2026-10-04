const G = function () {
  ;
  let Sh = true;
  return function (Sm, a0) {
    const a1 = Sh ? function () {
      if (a0) {
        const a2 = a0.apply(Sm, arguments);
        a0 = null;
        return a2;
      }
    } : function () {};
    Sh = false;
    return a1;
  };
}();
import { b as i, c as O } from "./c-YST6GS7R.js";
import { a as S0, c as S1, e as S2 } from "./c-ZF4DELGJ.js";
import { D as S3, p as S4 } from "./c-SEM2A64W.js";
import { f as S5, h as S6 } from "./c-PF7AREFU.js";
import { a as S7, f as S8, n as S9, p as SS } from "./c-EUQCKUJR.js";
import { D as Sa, H as SY, b as SN, i as SD, y as Sg } from "./c-YJJCI5ES.js";
import { Da as SI, Fa as SH, Za as Sz, _a as Sd, ba as SX, c as SP, fb as Sc, j as SW, m as SA, qb as SM, u as St, v as Sl, w as SJ, x as SQ } from "./c-FMIAGHDE.js";
import { a as SB, c as Sn, e as SL, g as Sr, l as Sp } from "./c-PIEPTJTC.js";
var SZ = {};
Sn(SZ, {
  FIGHTS: () => SE,
  SOUNDS: () => SC,
  SPRITES: () => SG,
  obj_animation: () => obj_animation,
  obj_carrotthrower: () => obj_carrotthrower,
  obj_defeatanim: () => obj_defeatanim,
  obj_rabbick_bush: () => obj_rabbick_bush,
  obj_rabbick_enemy: () => obj_rabbick_enemy,
  obj_rabbitbullet: () => obj_rabbitbullet,
  obj_spareanim: () => obj_spareanim,
  setupStats: () => setupStats
});
Sp();
var SG = ["spr_rabbick_enemy", "spr_rabbick_enemy_hurt", "spr_rabbick_enemy_spared", "spr_rabbick_dustorb", "spr_rabbick_bushhole", "spr_rabbitbullet", "spr_rabbitthrower", "spr_carrotbullet", "spr_sparestar_anim", "spr_defeatsweat", "spr_battleblcon_long"];
var SC = ["snd_whistlebreath", "snd_wing", "snd_spare", "snd_defeatrun"];
function setupStats(Sh) {
  SN.monstername[Sh] = "Rabbick";
  SN.monstermaxhp[Sh] = 120;
  SN.monsterhp[Sh] = 120;
  SN.monsterat[Sh] = 8;
  SN.monsterdf[Sh] = 1;
  SN.monsterexp[Sh] = 0;
  SN.monstergold[Sh] = 38;
  SN.sparepoint[Sh] = 10;
  SN.mercymod[Sh] = 0;
  SN.mercymax[Sh] = 100;
  SN.canact[Sh][0] = 1;
  SN.actname[Sh][0] = "Check";
  SN.canact[Sh][1] = 1;
  SN.actname[Sh][1] = "Blow On";
  SN.canact[Sh][2] = 1;
  SN.actname[Sh][2] = "BreathAll";
  SN.actactor[Sh][2] = 3;
  if (SD(2) === 1 && SN.plot < 150) {
    SN.canact[Sh][3] = 1;
    SN.actname[Sh][3] = "Warning";
    SN.actactor[Sh][3] = 3;
  }
}
SB(setupStats, "setupStats");
function scr_get_input_name(Sh) {
  return "[Z]";
}
SB(scr_get_input_name, "scr_get_input_name");
function scr_84_get_subst_string(Sh, ...Sm) {
  for (let a0 = 0; a0 < Sm.length; a0++) {
    Sh = Sh.split("~" + (a0 + 1)).join(Sm[a0]);
  }
  return Sh;
}
SB(scr_84_get_subst_string, "scr_84_get_subst_string");
var Sf = class a3 extends Sz {
  animationEnd() {
    this.instance_destroy();
  }
};
SB(Sf, "obj_animation");
SL(Sf, "kinds", Sd("obj_animation", Sz));
SL(Sf, "defaultDepth", 0);
var obj_animation = Sf;
var Sk = class a4 extends Sz {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    SH("snd_spare");
    SI("snd_spare");
  }
  draw(Sh) {
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage++;
      Sh.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 4, this.y, this.image_xscale, this.image_yscale, 0, Math.max(0, 0.7 - this.afterimage / 25));
      Sh.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 8, this.y, this.image_xscale, this.image_yscale, 0, Math.max(0, 0.4 - this.afterimage / 30));
    }
    if (this.t < 6) {
      if (this.t < 5) {
        Sh.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 1 - this.neotone / 4);
      }
      let Sm = this.t / 5;
      if (Sm > 1) {
        Sm = 1;
      }
      Sh.draw_sprite_white(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, Math.max(0, Sm - this.tone / 5));
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let a0 = 0; a0 < 2; a0++) {
        let a1 = SM(this.x + SW(this.sprite_width), this.y + SW(this.sprite_height), S7);
        a1.image_xscale = 2;
        a1.image_yscale = 2;
        a1.sprite_index = "spr_sparestar_anim";
        a1.image_alpha = 2;
        a1.image_speed = 0.25;
        a1.hspeed = -3;
        a1.gravity = 0.5;
        a1.gravity_direction = 0;
        this.star[this.starcount] = a1;
        this.starcount++;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let a2 = 0; a2 < this.starcount; a2++) {
        let a5 = this.star[a2];
        if (a5 && !a5.destroyed) {
          a5.image_angle += 10;
          a5.image_alpha -= 0.1;
          if (a5.image_alpha <= 0) {
            a5.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone++;
    }
    if (this.t >= 9 && (this.neotone++, this.neotone >= 30)) {
      for (let a6 = 0; a6 < this.starcount; a6++) {
        let a7 = this.star[a6];
        if (a7 && !a7.destroyed) {
          a7.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t++;
  }
};
SB(Sk, "obj_spareanim");
SL(Sk, "kinds", Sd("obj_spareanim", Sz));
SL(Sk, "defaultDepth", 0);
var obj_spareanim = Sk;
var SU = class a8 extends Sz {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    SI("snd_defeatrun");
  }
  step() {
    this.g += 1;
    if (this.g >= 15) {
      this.t += 1;
    }
  }
  draw(Sh) {
    if (this.t === 0) {
      this.draw_self(Sh);
    }
    let Sm = 0;
    if (this.g <= 5) {
      Sm = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      Sm = 1;
    }
    if (Sm === 1) {
      Sh.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let a0 = 0; a0 <= 80; a0++) {
        Sh.draw_sprite_ext(this.sprite_index, this.image_index, this.x + a0 * 4, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, Math.max(0, 0.4 - this.t / 8 + a0 / 200));
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
};
SB(SU, "obj_defeatanim");
SL(SU, "kinds", Sd("obj_defeatanim", Sz));
SL(SU, "defaultDepth", 0);
var obj_defeatanim = SU;
var Sy = class a9 extends S2 {
  create() {
    this.difficulty = 1;
    this.times = 0;
    this.activetimer = 0;
    this.grazed = 0;
    this.grazepoints = 5;
    this.timepoints = 5;
    this.target = 0;
    this.dont = 1;
    this.inv = 120;
    this.damage = 124;
    this.active = 0;
    this.image_alpha = 0;
    this.image_speed = 0;
    if (!Sc.exists("obj_heart")) {
      this.instance_destroy();
    }
    this.jumpsiner = SW(100);
    this.hspeed = -3 - SW(1);
    this.jumpspeed = 8 + SW(4);
    this.jumpheight = 50 + SW(10);
    this.image_xscale = 2;
    this.image_yscale = 2;
  }
  step() {
    this.jumpsiner++;
    if (this.image_alpha < 1 && this.active === 0) {
      this.image_alpha += 0.1;
    } else {
      this.active = 1;
    }
    let Sh = Sc.first("obj_battlesolid");
    let Sm = Sh ? Sh.x : 320;
    let a0 = Sh ? Sh.y : 170;
    let a1 = Sh ? Sh.sprite_width : 0;
    let a2 = Sh ? Sh.sprite_height : 0;
    let a5 = a0 + a2 / 2 - 20;
    let a6 = SJ(this.jumpsiner / this.jumpspeed) * this.jumpheight;
    this.y = a5 + a6 - this.jumpheight;
    this.image_speed = 0;
    this.image_index = 1;
    if (a6 > 0) {
      this.image_index = 2;
    }
    if (a6 > this.jumpheight / 2) {
      this.image_index = 0;
    }
    if (this.x <= Sm - a1 / 2 - 40) {
      this.image_alpha -= 0.1;
    }
  }
};
SB(Sy, "obj_rabbitbullet");
SL(Sy, "kinds", Sd("obj_rabbitbullet", S2));
SL(Sy, "defaultDepth", -20);
SL(Sy, "defaultSprite", "spr_rabbitbullet");
var obj_rabbitbullet = Sy;
var Sw = class aS extends S1 {
  create() {
    this.image_speed = 0;
    this.con = 0;
    this.throw_n = 0;
    this.buffer = 0;
    this.throwtimer = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.dir = SA(1, -1);
    this.gravity = 1;
    this.vspeed = -14;
    this.hspeed = this.dir * SW(2);
  }
  alarmEvent(Sh) {
    if (Sh === 4) {
      this.con += 1;
    }
  }
  step() {
    this.buffer++;
    if (this.buffer === 19) {
      this.gravity = 0;
      this.vspeed = 0;
      this.hspeed = this.dir * 4;
      this.depth = -10;
    }
    if (this.buffer >= 19) {
      let Sh = Sc.first("obj_battlesolid");
      let Sm = Sh ? Sh.x : 320;
      let a0 = Sh ? Sh.y : 170;
      let a1 = Sh ? Sh.sprite_width : 0;
      let a2 = Sh ? Sh.sprite_height : 0;
      this.y = a0 - a2 / 2;
      if (this.x <= Sm - a1 / 2 + 20) {
        this.x += 4;
        if (this.hspeed < 0) {
          this.hspeed = -this.hspeed;
        }
      }
      if (this.x <= Sm - a1 / 2 + 20) {
        this.x += 4;
        if (this.hspeed < 0) {
          this.hspeed = -this.hspeed;
        }
      }
      if (this.x >= Sm + a1 / 2 - 20) {
        this.x -= 4;
        if (this.hspeed > 0) {
          this.hspeed = -this.hspeed;
        }
      }
      let a5 = Sc.first("obj_heart");
      if (this.buffer >= 20 && this.con === 0 && a5 && Sl(this.x - (a5.x + 10)) < 30) {
        this.con = 5;
      }
      if (this.con === 5) {
        this.image_speed = 0.5;
        this.con = 6;
      }
      if (this.con === 6) {
        if (this.image_index >= 2 && this.throw_n === 0) {
          this.throw_n = 1;
          let a6 = SM(this.x, this.y, S2);
          S0(this, a6);
          let a7 = 7;
          if (Sg() === 2) {
            a7 = 6;
          }
          if (Sg() === 3) {
            a7 = 5;
          }
          a6.active = 1;
          a6.image_xscale = 2;
          a6.image_yscale = 2;
          a6.vspeed = a7;
          a6.image_speed = 0.25;
          a6.sprite_index = "spr_carrotbullet";
        }
        if (this.image_index >= 3) {
          this.throw_n = 0;
          this.image_speed = 0;
          this.con = 7;
          this.alarm[4] = 15;
          if (Sg() === 2) {
            this.alarm[4] = 22;
          }
          if (Sg() === 3) {
            this.alarm[4] = 30;
          }
        }
      }
      if (this.con === 8) {
        this.image_index = 0;
        this.con = 0;
      }
    }
  }
};
SB(Sw, "obj_carrotthrower");
SL(Sw, "kinds", Sd("obj_carrotthrower", S1));
SL(Sw, "defaultDepth", 50);
SL(Sw, "defaultSprite", "spr_rabbitthrower");
var obj_carrotthrower = Sw;
i({
  30: (Sh, Sm) => {
    let a0 = 34;
    if (Sg() === 2) {
      a0 = 46;
    }
    if (Sg() === 3) {
      a0 = 60;
    }
    if (Sh.btimer >= a0) {
      let a1 = Sm.bs;
      let a2 = SM(Sm.bsx + (a1 ? a1.sprite_width : 0), Sm.bsy, obj_rabbitbullet);
      S0(Sh, a2);
      Sh.btimer = 0;
    }
  },
  32: (Sh, Sm) => {
    let a0 = 0;
    if (Sc.exists("obj_carrotthrower")) {
      a0 = 1;
      Sh.type = 30;
    }
    if (Sh.made === 0 && a0 === 0) {
      Sh.made = 1;
      let a1 = SM(Sm.bsx, Sm.bsy, obj_carrotthrower);
      S0(Sh, a1);
      Sh.instance_destroy();
    }
  }
});
var Se = class aa extends S4 {
  create() {
    Object.assign(this, {
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
      blowall: 0,
      blowing: 0,
      animsiner: 0,
      blowamt: 0,
      xx: 0,
      yy: 0,
      blowtimer: 180,
      blowbuffer: 3,
      blown: 0,
      blowanimtimer: 0,
      blow_wait: 0,
      image_xscale: 2,
      image_yscale: 2,
      onoff: 0,
      shakeamt: 0,
      rtimer: 0,
      ashake: 0,
      xoff: 0,
      bunnycount: 0,
      bunnyid: null
    });
    this.originalwidth = this.sprite_width;
    this.image_speed = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.idlesprite = "spr_rabbick_enemy";
    this.hurtsprite = "spr_rabbick_enemy_hurt";
    this.sparedsprite = "spr_rabbick_enemy_spared";
  }
  alarmEvent(Sh) {
    if (Sh === 4) {
      this.con += 1;
    }
  }
  userEvent(Sh) {
    if (Sh === 12) {
      SN.monsterx[this.myself] = this.x + this.sprite_width / 2;
      SN.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (Sh === 2) {
      this.dust();
      return;
    }
    if (Sh === 10) {
      this.spared();
      return;
    }
  }
  dust() {
    let Sh = SM(this.x + SW(this.sprite_width - 10) + 10, this.y + 20 + SW(this.sprite_height - 20), obj_animation);
    Sh.sprite_index = "spr_rabbick_dustorb";
    Sh.speed = 6;
    Sh.image_index = 1;
    Sh.direction = 10 + SW(70);
    Sh.image_speed = 0.5;
    Sh.image_xscale = 2;
    Sh.image_yscale = 2;
    Sh.gravity_direction = 0;
    Sh.gravity = 0.7;
    Sh.friction = 0.4;
    Sh.image_alpha = 0.5;
    Sh.depth = 15;
    if (this.blown === 1) {
      Sh.image_alpha = 1;
      Sh.depth = -10;
    }
  }
  spared() {
    let Sh = SM(this.x, this.y, obj_spareanim);
    Sh.sprite_index = this.sparedsprite;
    Sh.image_index = 0;
    Sh.image_xscale = this.image_xscale;
    Sh.image_yscale = this.image_yscale;
    this.scr_monsterdefeat();
    this.instance_destroy();
  }
  scr_defeatrun() {
    let Sh = SM(this.x, this.y, obj_defeatanim);
    Sh.sprite_index = this.hurtsprite;
    Sh.image_index = 0;
    Sh.image_xscale = this.image_xscale;
    Sh.image_yscale = this.image_yscale;
    this.instance_destroy();
  }
  step() {
    let Sh = this.myself;
    if (SN.monster[Sh] === 1) {
      if (SN.mnfight === 1 && this.talked === 0) {
        SY(this);
        if (!Sc.exists("obj_darkener")) {
          SM(0, 0, SS);
        }
        SN.typer = 50;
        SN.msg = new Array(100).fill(" ");
        let Sm = SA(0, 1, 2, 3);
        if (St(SW(50)) === 0) {
          Sm = 4;
        }
        if (Sm === 0) {
          SN.msg[0] = "Snitter&snatter&what's the&matter";
        }
        if (Sm === 1) {
          SN.msg[0] = "Duruuuu---";
        }
        if (Sm === 2) {
          SN.msg[0] = "Hop^1, hop";
        }
        if (Sm === 3) {
          SN.msg[0] = "Meow.";
        }
        if (Sm === 4) {
          SN.msg[0] = "Bunnies are&the sequel&to frogs.";
        }
        if (this.blown === 1) {
          if (Sm === 0 || Sm === 4) {
            SN.msg[0] = "A soft and&clean boy.";
          }
          if (Sm === 1) {
            SN.msg[0] = "A refreshing&boy.";
          }
          if (Sm === 2) {
            SN.msg[0] = "A sweet and&fresh girl.";
          }
          if (Sm === 3) {
            SN.msg[0] = "A nice and&tidy girl.";
          }
        }
        S6(this.x - 160, this.y, 3);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && SN.mnfight === 1) {
        this.rtimer = 0;
        if (SX() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer++;
        if (this.talktimer >= this.talkmax) {
          Sc.with("obj_writer", a0 => a0.instance_destroy());
          Sc.with("obj_battleblcon", a0 => a0.instance_destroy());
          SN.mnfight = 2;
        }
        if (SN.mnfight === 2) {
          if (!Sc.exists("obj_moveheart")) {
            S9();
          }
          if (!Sc.exists("obj_growtangle")) {
            SM(320, 170, S8);
          }
        }
      }
      if (SN.mnfight === 2 && this.attacked === 0) {
        this.rtimer++;
        if (this.rtimer === 12) {
          let a0 = SM(this.x, this.y, O);
          let a1 = SA(0, 1);
          a0.type = a1 === 0 ? 30 : 32;
          a0.target = this.mytarget;
          a0.damage = SN.monsterat[Sh] * 5;
          a0.grazepoints = 9;
          a0.timepoints = 3;
          this.turns++;
          SN.turntimer = 170;
          this.attacked = 1;
          SN.typer = 6;
          SN.fc = 0;
          let a2 = SA(0, 1, 2, 3);
          if (a2 === 0) {
            SN.battlemsg[0] = "* Rabbick is looking for a couch to get stuck under.";
          }
          if (a2 === 1) {
            SN.battlemsg[0] = "* Rabbick emits a musty groan.";
          }
          if (a2 === 2) {
            SN.battlemsg[0] = "* Rabbick ambiently damages the soil.";
          }
          if (a2 === 3) {
            SN.battlemsg[0] = "* The battlefield is filled with the smell of dusty mustard.";
          }
          if (SN.monsterhp[Sh] <= SN.monstermaxhp[Sh] / 3) {
            SN.battlemsg[0] = "* Rabbick is starting to look wispy.";
          }
          if (SN.mercymod[Sh] >= SN.mercymax[Sh]) {
            SN.msg[0] = "* Rabbick is now nice and clean.";
          }
        } else {
          SN.turntimer = 120;
        }
      }
      if (SN.mnfight === 2 && SN.turntimer <= 1 && (this.battlecancel === 1 && (SN.mercymod[Sh] = 999), this.battlecancel === 2)) {
        let a5 = Sc.first("obj_battlecontroller");
        if (a5) {
          a5.noreturn = 1;
        }
        this.con = 1;
        this.battlecancel = 3;
      }
    }
    if (SN.myfight === 3) {
      this.actStep();
    }
  }
  actStep() {
    let Sh = this.myself;
    this.xx = 0;
    this.yy = 0;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      SN.msg = new Array(100).fill(" ");
      SN.msg[0] = "* RABBICK - AT 8 DF 1&* This dusty bunny needs a bit&  of spring cleaning./%";
      S5();
    }
    if (this.acting === 2 && this.actcon === 0) {
      this.blowall = 0;
      let Sm = scr_get_input_name(4);
      SN.msg = new Array(100).fill(" ");
      SN.msg[0] = scr_84_get_subst_string("* Press ~1 repeatedly to blow air!", Sm);
      if (this.blown === 0) {
        this.actcon = 10;
        this.blowing = 1;
        this.blowtimer = 90;
        S5();
      }
      if (this.blown === 1) {
        SN.msg[0] = "* Kris breathed on the Rabbick^1.&* It blew away entirely.../%";
        S5();
        this.actcon = 20;
      }
    }
    if (this.acting === 3 && this.actcon === 0) {
      this.blowall = 1;
      let a0 = scr_get_input_name(4);
      SN.msg = new Array(100).fill(" ");
      SN.msg[0] = scr_84_get_subst_string("* Press ~1 repeatedly to blow air!", a0);
      this.actcon = 10;
      this.blowing = 1;
      this.blowtimer = 90;
      Sc.with("obj_rabbick_enemy", a1 => {
        a1.bunnycount = 0;
        a1.bunnyid = this;
      });
      Sc.with("obj_rabbick_enemy", a1 => {
        if (a1.blown === 0) {
          a1.bunnyid.bunnycount += 1;
        }
        a1.blowbuffer = 2;
        a1.blow_wait = 0;
        a1.blowall = 1;
        a1.blowing = 1;
        a1.blowtimer = 90;
      });
      if (this.bunnycount === 0) {
        Sc.with("obj_rabbick_enemy", a1 => {
          a1.blowing = 0;
          a1.blowtimer = -1;
          a1.actcon = 30;
          SN.msg[0] = "* The bunnies were blown away!/%";
        });
      }
      S5();
    }
    if (this.acting === 4 && this.actcon === 0) {
      this.actcon = 1;
      SN.msg = new Array(100).fill(" ");
      SN.msg[0] = "* You and Ralsei warned Rabbick about Susie^1.&* The enemy went on guard.../%";
      if (Sg() > 1) {
        SN.msg[0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%";
      }
      for (let a1 = 0; a1 < 3; a1++) {
        SN.monstercomment[a1] = "(Warned)";
        SN.automiss[a1] = 1;
      }
      S5();
    }
    if (this.actcon === 10 && this.blowing === 0) {
      Sc.with("obj_writer", a2 => a2.instance_destroy());
      this.actcon = 1;
    }
    if (this.actcon === 20 && !Sc.exists("obj_writer")) {
      this.userEvent(10);
      this.actcon = 1;
    }
    if (this.actcon === 30 && !Sc.exists("obj_writer")) {
      Sc.with("obj_rabbick_enemy", a2 => a2.userEvent(10));
      this.actcon = 1;
    }
    if (this.actcon === 1 && !Sc.exists("obj_writer")) {
      this.actcon = 0;
      S3();
    }
    if (this.blowing === 1) {
      if (this.blow_wait === 1) {
        this.blowtimer--;
      }
      this.blowbuffer--;
      if (this.blowamt > 0 && this.blowanimtimer <= 0) {
        this.blowamt--;
      }
      if (this.blowbuffer <= 0 && SX()) {
        this.blow_wait = 1;
        SH("snd_whistlebreath");
        SI("snd_whistlebreath", {
          pitch: 1 + this.blowamt / 100
        });
        this.onoff = 0;
        this.shakeamt = 5;
        this.blowamt += 12;
        this.blowbuffer = 2;
        this.blowanimtimer = 20;
        for (let a2 = 0; a2 < 6; a2++) {
          this.userEvent(2);
        }
      }
      if (this.blowtimer <= 0) {
        this.blowing = 0;
      }
      if (this.blowamt >= 100 && this.blown === 0) {
        Sa(Sh, 100);
        this.blown = 1;
        this.blowing = 0;
        this.blowanimtimer = 0;
        for (let a5 = 0; a5 < 15; a5++) {
          this.userEvent(2);
        }
      }
    }
  }
  draw(Sh) {
    let Sm = this.myself;
    this.animsiner++;
    this.image_xscale = 2 - this.blowamt / 100;
    if (this.blown === 1) {
      this.image_xscale = 2;
    }
    this.xoff = 0;
    if (this.image_xscale < 2) {
      this.xoff = (this.originalwidth - this.sprite_width) / 2;
    }
    this.blowanimtimer--;
    if (this.blowanimtimer > 6 && this.blown === 0) {
      if (this.onoff === 2) {
        this.onoff = 0;
      }
      if (this.onoff === 1.5) {
        this.onoff = 2;
      }
      if (this.onoff === 0.5) {
        this.onoff = 1;
      }
      if (this.onoff === 0) {
        this.ashake = -this.shakeamt;
        this.onoff = 0.5;
      }
      if (this.onoff === 1) {
        this.ashake = this.shakeamt;
        if (this.shakeamt > 0) {
          this.shakeamt--;
        }
        this.onoff = 1.5;
      }
      if (this.image_xscale > 1.5) {
        Sh.draw_sprite_ext("spr_rabbick_enemy_hurt", 0, this.x + this.xoff + this.ashake, this.y, this.image_xscale, this.image_yscale, 0, SP.white, 1);
      } else {
        Sh.draw_sprite_ext("spr_rabbick_enemy_hurt", 1, this.x + this.xoff + this.ashake - 8, this.y, this.image_xscale + 0.5, this.image_yscale, 0, SP.white, 1);
      }
    } else {
      if (this.state === 3) {
        if (SN.monsterhp[Sm] <= SN.monstermaxhp[Sm] / 3) {
          SN.monsterstatus[Sm] = 1;
          if (SN.monstercomment[Sm] === " ") {
            SN.monstercomment[Sm] = "(Tired)";
          }
        }
        this.hurttimer--;
        if (this.hurttimer < 0) {
          this.state = 0;
        } else {
          if (SN.monster[Sm] === 0) {
            this.scr_defeatrun();
            return;
          }
          this.hurtshake++;
          if (this.hurtshake > 1) {
            if (this.shakex > 0) {
              this.shakex--;
            }
            if (this.shakex < 0) {
              this.shakex++;
            }
            this.shakex = -this.shakex;
            this.hurtshake = 0;
          }
          let a0 = this.hurtsprite;
          if (this.image_xscale > 1.5) {
            Sh.draw_sprite_ext(a0, 0, this.x + this.xoff + this.shakex, this.y, this.image_xscale, this.image_yscale, 0, SP.white, 1);
          } else {
            Sh.draw_sprite_ext(a0, 1, this.x + this.xoff + this.shakex - 8, this.y, this.image_xscale + 0.5, this.image_yscale, 0, SP.white, 1);
          }
        }
      }
      if (this.state === 0) {
        let a1 = this.idlesprite;
        if (SN.mercymod[Sm] >= SN.mercymax[Sm] || this.blown === 1) {
          a1 = this.sparedsprite;
        }
        Sh.draw_sprite_ext(a1, this.animsiner / 5, this.x + this.xoff, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 1);
        if (this.flash === 1) {
          this.fsiner++;
          Sh.draw_sprite_white(a1, this.animsiner / 5, this.x + this.xoff, this.y, this.image_xscale, this.image_yscale, 0, -SQ(this.fsiner / 5) * 0.4 + 0.6);
        }
      }
      if (this.becomeflash === 0) {
        this.flash = 0;
      }
      this.becomeflash = 0;
    }
  }
};
SB(Se, "obj_rabbick_enemy");
SL(Se, "kinds", Sd("obj_rabbick_enemy", S4));
SL(Se, "defaultDepth", 90);
SL(Se, "defaultSprite", "spr_rabbick_enemy");
var obj_rabbick_enemy = Se;
var Si = null;
try {
  Si = (await SO("./c-JIJZKEBP.js", import.meta.url)).obj_chaseenemy || null;
} catch {
  Si = null;
}
var ST = class aY extends Sz {
  create() {
    this.visible = false;
    this.radius = 90;
    this.con = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
  }
  step() {
    let Sh = Sc.first("obj_mainchara");
    if (Sh) {
      let Sm = Sh.x + Sh.sprite_width / 2;
      let a0 = this.x + this.sprite_width / 2;
      if (Sl(Sm - a0) <= this.radius && Sh.y >= this.y && this.con === 0) {
        SI("snd_wing");
        SI("snd_wing", {
          pitch: 0.8
        });
        this.con = 1;
        this.visible = true;
        let a1 = SM(this.x, this.y, Si);
        a1.vspeed = 16;
      }
    }
  }
};
SB(ST, "obj_rabbick_bush");
SL(ST, "kinds", Sd("obj_rabbick_bush", Sz));
SL(ST, "defaultDepth", 800000);
SL(ST, "defaultSprite", "spr_rabbick_bushhole");
var obj_rabbick_bush = ST;
var Sv = null;
try {
  let aN = await SO("./c-7KTSNHPG.js", import.meta.url);
  if (aN && aN.obj_diamondenemy) {
    Sv = aN;
  }
} catch {
  Sv = null;
}
var SK = Sv ? {
  cls: Sv.obj_diamondenemy,
  type: 5,
  x: 460,
  y: 180,
  setup: Sv.setupStats
} : {
  cls: null,
  type: 0,
  x: 460,
  y: 180,
  setup: SB(() => {}, "setup"),
  missing: "obj_diamondenemy",
  missingType: 5
};
var SE = [{
  id: "rabbick",
  name: "Rabbick",
  chapter: 1,
  area: "Field",
  desc: "Rabbick.#Hopping bunnies and#carrot drops.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: obj_rabbick_enemy,
    type: 13,
    x: 480,
    y: 140,
    setup: setupStats
  }],
  battlemsg: "* Rabbick slithered in the way!",
  encounterno: 16,
  music: "battle"
}, {
  id: "rabbick2",
  name: "Rabbick x2",
  chapter: 1,
  area: "Field",
  desc: "Two Rabbicks.#Blow them all away.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: obj_rabbick_enemy,
    type: 13,
    x: 480,
    y: 60,
    setup: setupStats
  }, {
    cls: obj_rabbick_enemy,
    type: 13,
    x: 460,
    y: 180,
    setup: setupStats
  }],
  battlemsg: "* Rabbicks slithered in the way!",
  encounterno: 17,
  music: "battle"
}, {
  id: "rabbick_rudinn",
  name: "Rabbick + Rudinn",
  chapter: 1,
  area: "Field",
  desc: "Rabbick and Rudinn.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: obj_rabbick_enemy,
    type: 13,
    x: 480,
    y: 60,
    setup: setupStats
  }, SK],
  battlemsg: "* Rabbick slithered in the way!",
  encounterno: 24,
  music: "battle"
}];
Sr(obj_rabbick_enemy, "G.mnfight = 2;");
export { SG as a, SC as b, setupStats as c, obj_animation as d, obj_spareanim as e, obj_defeatanim as f, obj_rabbitbullet as g, obj_carrotthrower as h, obj_rabbick_enemy as i, obj_rabbick_bush as j, SE as k, SZ as l };
function SO(Sh, Sm) {
  var a0 = new URL(Sh, Sm).href;
  var a1 = globalThis.__drWarm;
  return (a1 ? a1(a0) : Promise.resolve()).then(function () {
    return import(a0).catch(function (a2) {
      try {
        a2.reload = true;
        a2.what = "the game code";
      } catch (a5) {}
      throw a2;
    });
  });
}
