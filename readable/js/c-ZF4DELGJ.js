const t = function () {
  ;
  let xI = true;
  return function (xo, xP) {
    const xQ = xI ? function () {
      if (xP) {
        const xl = xP.apply(xo, arguments);
        xP = null;
        return xl;
      }
    } : function () {};
    xI = false;
    return xQ;
  };
}();
import { b as a } from "./c-EUQCKUJR.js";
import { G as o, J as m, K as x0, b as x1 } from "./c-YJJCI5ES.js";
import { Da as x2, Za as x3, _a as x4, c as x5, fb as x6, j as x7, m as x8, n as x9, o as xx, p as xF, qa as xc, qb as xA, t as xL, w as xr, x as xp } from "./c-FMIAGHDE.js";
import { a as xR, e, l as xg } from "./c-PIEPTJTC.js";
xg();
function scr_bullet_inherit(xI, xo) {
  if (!!xo && !xo.destroyed) {
    if (x1.chapter >= 2) {
      if (xI.damage !== -1) {
        xo.damage = xI.damage;
      }
      if (xI.grazepoints !== -1) {
        xo.grazepoints = xI.grazepoints;
      }
      if (xI.timepoints !== -1) {
        xo.timepoints = xI.timepoints;
      }
      if (xI.inv !== -1) {
        xo.inv = xI.inv;
      }
      if (xI.target !== -1) {
        xo.target = xI.target;
      }
      if (xI.grazed !== -1) {
        xo.grazed = 0;
      }
      if (xI.grazetimer !== -1) {
        xo.grazetimer = 0;
      }
      xo.element = xI.element;
      if (x1.chapter >= 5 && xI.constructor && xI.constructor.name === "obj_dbulletcontroller") {
        xo.creatorid = xI.creatorid;
        xo.creator = xI.creator;
      }
      return;
    }
    xo.damage = xI.damage;
    xo.grazepoints = xI.grazepoints;
    xo.timepoints = xI.timepoints;
    xo.inv = xI.inv;
    xo.target = xI.target;
    xo.grazed = 0;
    xo.grazetimer = 0;
    if (xI.element !== undefined) {
      xo.element = xI.element;
    }
  }
}
xR(scr_bullet_inherit, "scr_bullet_inherit");
function applyBulletDamage(xI, xo) {
  bulletDamage(xI, xo);
}
xR(applyBulletDamage, "applyBulletDamage");
function bulletDamage(xI, xo) {
  if (x1.chapter >= 2 && (xo ? o.scr_damage_all : o.scr_damage)) {
    if (x1.inv < 0 && (x1.debugInv || xc.invuln)) {
      x1.inv = x1.invc * 40;
      return;
    }
    (xo ? o.scr_damage_all : o.scr_damage).call(xI);
    return;
  }
  (xo ? x0 : m)(xI);
}
xR(bulletDamage, "bulletDamage");
var obj_bulletparent = class xU extends x3 {};
xR(obj_bulletparent, "obj_bulletparent");
e(obj_bulletparent, "kinds", x4("obj_bulletparent", x3));
e(obj_bulletparent, "defaultDepth", 0);
var xV = obj_bulletparent;
var obj_bulletgenparent = class xN extends x3 {};
xR(obj_bulletgenparent, "obj_bulletgenparent");
e(obj_bulletgenparent, "kinds", x4("obj_bulletgenparent", x3));
var xq = obj_bulletgenparent;
var obj_collidebullet = class xZ extends xV {
  constructor() {
    super();
    this.active = 0;
    this.damage = 0;
    this.target = 0;
    this.grazed = 0;
    this.grazepoints = 0;
    this.timepoints = 0;
    this.inv = 60;
    this.grazetimer = 0;
    this.destroyonhit = 1;
    this.element = 0;
  }
  userEvent(xI) {
    if (xI === 5 && this.active === 1) {
      if (x1.chapter === 5) {
        x6.with("obj_aqua_enemy", xo => {
          if (xo.fight_type === "solo") {
            if (xo.myattackchoice === 0) {
              xo.attack_chain_hits++;
            }
            if (xo.myattackchoice === 1) {
              xo.attack_fan_hits++;
            }
            if (xo.myattackchoice === 2) {
              xo.attack_petal_hits++;
            }
            if (xo.myattackchoice === 3) {
              xo.attack_omega_hits++;
            }
          }
          if (xo.fight_type === "seth") {
            xo.phasehit = 1;
          }
        });
      }
      bulletDamage(this, this.target === 3);
      if (x1.chapter < 2 || this.destroyonhit === 1) {
        this.instance_destroy();
      }
    }
  }
};
xR(obj_collidebullet, "obj_collidebullet");
e(obj_collidebullet, "kinds", x4("obj_collidebullet", xV));
e(obj_collidebullet, "defaultDepth", 0);
var xM = obj_collidebullet;
var obj_regularbullet = class xm extends xM {
  create() {
    if (x1.chapter >= 2) {
      this.scr_bullet_init();
      this.spin = 0;
      this.spinspeed = 0;
      this.image_alpha = 1;
      if (!x6.exists("obj_heart")) {
        this.instance_destroy();
      }
      this.wall_destroy = 1;
      this.bottomfade = 0;
      if (x1.chapter >= 5) {
        this.anglechange = 0;
      }
      return;
    }
    this.grazed = 0;
    this.grazepoints = 5;
    this.timepoints = 5;
    this.target = 0;
    this.dont = 1;
    this.inv = 60;
    this.damage = 124;
    this.active = 1;
    this.spec = 0;
    this.image_alpha = 1;
    this.wall_destroy = 1;
    if (!x6.exists("obj_heart")) {
      this.instance_destroy();
    }
  }
  scr_bullet_init() {
    this.grazed = 0;
    this.grazetimer = 0;
    this.destroyonhit = 1;
    this.target = 0;
    this.inv = 60;
    this.damage = 10;
    this.element = 0;
    this.grazepoints = 1;
    this.timepoints = 1;
    this.active = 1;
    this.updateimageangle = 0;
  }
  step() {
    if (x1.chapter >= 2) {
      if (this.wall_destroy === 1 && (this.x < -80 || this.x > 760 || this.y < -80 || this.y > 580)) {
        this.instance_destroy();
      }
      if (this.updateimageangle === 1) {
        this.image_angle = this.direction;
      }
      if (this.spin === 1) {
        this.image_angle += this.spinspeed;
      }
      if (x1.chapter >= 5 && this.anglechange) {
        this.direction += this.anglechange;
      }
      if (this.bottomfade !== 0 && this.bottomfade !== undefined && this.y > this.bottomfade) {
        this.image_alpha *= 0.8;
      }
      return;
    }
    if (this.wall_destroy === 1 && (this.x < -40 || this.x > 680 || this.y < -40 || this.y > 520)) {
      this.instance_destroy();
    }
  }
};
xR(obj_regularbullet, "obj_regularbullet");
e(obj_regularbullet, "kinds", x4("obj_regularbullet", xM));
e(obj_regularbullet, "defaultDepth", -10);
var xe = obj_regularbullet;
var obj_regularbullet_permanent = class xG extends xe {
  userEvent(xI) {
    if (xI === 5 && this.active === 1) {
      bulletDamage(this, this.target === 3);
    }
  }
};
xR(obj_regularbullet_permanent, "obj_regularbullet_permanent");
e(obj_regularbullet_permanent, "kinds", x4("obj_regularbullet_permanent", xe));
e(obj_regularbullet_permanent, "defaultDepth", 0);
var xt = obj_regularbullet_permanent;
var obj_dbullet_vert = class F0 extends xM {
  create() {
    if (this.y < 20) {
      this.y = 20;
    }
    if (this.y > 460) {
      this.y = 460;
    }
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
    if (!x6.exists("obj_heart")) {
      this.instance_destroy();
    }
    this.type = 0;
  }
  draw(xI) {
    if (this.dont === 0) {
      if (this.active === 0) {
        xI.draw_sprite_ext(this.sprite_index, 0, this.x, this.y, 3 - this.image_alpha * 2, 3 - this.image_alpha * 2, 0, x5.white, this.image_alpha);
        if (this.image_alpha < 1) {
          this.image_alpha += 0.1;
          if (this.type === 1) {
            this.vspeed = 3;
            this.gravity = -0.5;
          }
        } else {
          if (this.type === 0) {
            let xo = x6.first("obj_heart");
            if (xo && xo.y + 8 < this.y) {
              this.vspeed = 1;
              this.gravity = -0.2;
            } else {
              this.vspeed = -2;
              this.gravity = 1;
            }
          }
          this.active = 1;
        }
      }
      xI.draw_sprite_ext(this.sprite_index, 0, this.x, this.y, 2 - this.image_alpha, 2 - this.image_alpha, 0, x5.white, this.image_alpha);
      if (this.type === 0 && this.speed > 8) {
        this.speed = 8;
      }
      if (this.y > 500) {
        this.instance_destroy();
      }
      if (this.y < -20) {
        this.instance_destroy();
      }
    }
    this.dont = 0;
  }
};
xR(obj_dbullet_vert, "obj_dbullet_vert");
e(obj_dbullet_vert, "kinds", x4("obj_dbullet_vert", xM));
e(obj_dbullet_vert, "defaultDepth", -1);
e(obj_dbullet_vert, "defaultSprite", "spr_diamondbullet_vert");
var xH = obj_dbullet_vert;
var obj_dbullet_maker = class F1 extends xV {
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
    let xI = x6.first("obj_heart");
    if (xI) {
      this.futuredir = xF(this.x, this.y, xI.x + 8, xI.y + 8);
    } else {
      this.instance_destroy();
    }
  }
  draw(xI) {
    if (this.dont === 0) {
      let xo = x6.first("obj_heart");
      if (this.active === 0) {
        if (xo) {
          this.futuredir = xF(this.x, this.y, xo.x + 8, xo.y + 8);
        }
        xI.draw_sprite_ext("spr_diamondbullet_form", 0, this.x, this.y, 3 - this.image_alpha * 2, 3 - this.image_alpha * 2, this.futuredir, x5.white, 1 - this.image_alpha);
        if (this.image_alpha < 1) {
          this.image_alpha += 0.1;
        } else {
          if (xo) {
            this.move_towards_point(xo.x + 8, xo.y + 8, 2);
          }
          this.futuredir = this.direction;
          this.active = 1;
          this.speed = 0;
        }
      }
      xI.draw_sprite_ext(this.sprite_index, 0, this.x, this.y, 2 - this.image_alpha, 2 - this.image_alpha, this.futuredir, x5.white, this.image_alpha);
      if (this.active === 1) {
        this.activetimer++;
        if (this.activetimer >= 5 && this.times < this.difficulty) {
          let xP = xA(this.x, this.y, xe);
          if (!xP.destroyed) {
            if (x1.chapter >= 2) {
              xP.grazepoints = this.grazepoints;
            }
            xP.damage = this.damage;
            xP.target = this.target;
            xP.sprite_index = "spr_diamondbullet";
            xP.direction = this.futuredir;
            xP.speed = 6;
            xP.image_angle = xP.direction;
          }
          this.times++;
          this.activetimer = 0;
        }
        if (this.activetimer >= 5 && this.times >= this.difficulty) {
          this.image_alpha -= 0.2;
          if (this.image_alpha <= 0) {
            this.instance_destroy();
          }
        }
      }
    }
    this.dont = 0;
  }
};
xR(obj_dbullet_maker, "obj_dbullet_maker");
e(obj_dbullet_maker, "kinds", x4("obj_dbullet_maker", xV));
e(obj_dbullet_maker, "defaultDepth", -20);
e(obj_dbullet_maker, "defaultSprite", "spr_diamondbullet_form");
var xs = obj_dbullet_maker;
var obj_suitbomb = class F2 extends xV {
  constructor() {
    super();
    this.damage = 0;
    this.grazepoints = 0;
    this.timepoints = 0;
    this.inv = 60;
    this.target = 0;
    this.grazed = 0;
    this.grazetimer = 0;
  }
  create() {
    this.visible = false;
    this.type = x8(0, 1, 2, 3);
    this.y = -80;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.con = 0;
    this.timer = 0;
    this.image_speed = 0;
    this.vspeed = 10;
    this.maxtimer = 20 + x7(16);
    this.explodedraw = 0;
  }
  step() {
    let xI = x6.first("obj_joker");
    if (this.con === 0) {
      this.sprite_index = ["spr_bomb_spade", "spr_bomb_diamond", "spr_bomb_heart", "spr_bomb_club"][this.type];
      this.visible = true;
      this.con = 1;
    }
    if (this.con === 1) {
      this.timer++;
      if (this.timer >= 10) {
        if (xI) {
          xI.beepnoise = 1;
        }
        this.image_speed = this.timer / this.maxtimer;
      }
      if (this.timer >= this.maxtimer) {
        this.con = 2;
        this.timer = 0;
        this.speed = 0;
      }
    }
    if (this.con === 2) {
      if (xI) {
        xI.burstnoise = 1;
      }
      let xo = x6.first("obj_heart");
      let xP = xo ? xo.x + 8 : 320;
      let xQ = xo ? xo.y + 8 : 170;
      if (this.type === 0) {
        let xl = x7(360);
        let F3 = 12;
        for (let F4 = 0; F4 < 12; F4++) {
          let F5 = xA(this.x, this.y, xe);
          scr_bullet_inherit(this, F5);
          F5.active = 1;
          F5.direction = xl + F4 * (360 / F3);
          F5.speed = 8;
          F5.image_angle = F5.direction;
          F5.sprite_index = "spr_spadebullet";
        }
        this.con = 3;
      }
      if (this.type === 1) {
        for (let F6 = 0; F6 < 3; F6++) {
          let F7 = xA(this.x, this.y, xe);
          F7.damage = 100;
          scr_bullet_inherit(this, F7);
          F7.move_towards_point(xP, xQ, 11);
          F7.speed -= F6;
          F7.image_angle = F7.direction;
          F7.sprite_index = "spr_diamondbullet";
        }
        this.con = 3;
      }
      if (this.type === 2) {
        let F8 = xA(this.x, this.y, xv);
        scr_bullet_inherit(this, F8);
        this.con = 3;
      }
      if (this.type === 3) {
        let F9 = xF(this.x, this.y, xP, xQ);
        for (let Fx = 0; Fx < 3; Fx++) {
          let FF = xA(this.x, this.y, xe);
          FF.sprite_index = "spr_clubsbullet";
          FF.damage = 100;
          scr_bullet_inherit(this, FF);
          FF.active = 1;
          FF.direction = F9 - 20 + Fx * 20;
          FF.image_angle = FF.direction;
          FF.speed = 8;
        }
        this.con = 3;
      }
    }
    if (this.explodedraw >= 40) {
      this.instance_destroy();
    }
  }
  draw(xI) {
    if (this.con < 2) {
      this.draw_self(xI);
    }
    if (this.con >= 2) {
      this.explodedraw++;
      xI.draw_set_color(x5.white);
      xI.draw_set_alpha(Math.max(0, 1.5 - this.explodedraw / 10));
      xI.draw_circle(this.x, this.y, this.sprite_width / 2 + this.explodedraw * 2, false);
      xI.draw_set_alpha(1);
    }
  }
};
xR(obj_suitbomb, "obj_suitbomb");
e(obj_suitbomb, "kinds", x4("obj_suitbomb", xV));
e(obj_suitbomb, "defaultDepth", 0);
e(obj_suitbomb, "defaultSprite", "spr_suitsbomb");
var xj = obj_suitbomb;
var obj_heartbomb_blast = class Fc extends xV {
  constructor() {
    super();
    this.damage = 0;
    this.grazepoints = 0;
    this.timepoints = 0;
    this.inv = 60;
    this.target = 0;
  }
  create() {
    this.made = 0;
    this.active = 0;
    this.pausetimer = 0;
    this.con = 0;
    this.siner = 0;
    this.maxlength = 0;
    this.visible = false;
    this.son = [];
  }
  step() {
    if (this.made === 0) {
      for (let xI = 0; xI < 4; xI++) {
        let xo = xA(this.x, this.y, xe);
        xo.sprite_index = "spr_heartbullet";
        scr_bullet_inherit(this, xo);
        this.son[xI] = xo;
      }
      this.made = 1;
    }
    this.pausetimer++;
    if (this.pausetimer >= 10 && this.con === 0) {
      let xP = x6.first("obj_heart");
      this.move_towards_point(xP ? xP.x + 8 : 320, xP ? xP.y + 8 : 170, 7);
      this.con = 1;
    }
    this.siner++;
    if (this.maxlength < 40) {
      this.maxlength += 4;
    }
    for (let xQ = 0; xQ < 4; xQ++) {
      let xl = this.son[xQ];
      if (xl && !xl.destroyed) {
        xl.x = this.x + x9(this.maxlength, this.siner * 3 + xQ * 90);
        xl.y = this.y + xx(this.maxlength, this.siner * 3 + xQ * 90);
      }
    }
    if (this.x < -200 || this.x > 900 || this.y < -200 || this.y > 700) {
      this.instance_destroy();
    }
  }
};
xR(obj_heartbomb_blast, "obj_heartbomb_blast");
e(obj_heartbomb_blast, "kinds", x4("obj_heartbomb_blast", xV));
e(obj_heartbomb_blast, "defaultDepth", 0);
var xv = obj_heartbomb_blast;
var obj_carouselbullet = class FA extends xt {
  create() {
    this.siner = 0;
    this.siner2 = 0;
    this.t = 0;
    this.hspeed = 6;
    this.sinspeed = 1;
    this.altmode = 0;
    this.altsin = 0;
    this.timer = 0;
    this.difficulty = 1;
    this.times = 0;
    this.activetimer = 0;
    this.grazed = 0;
    this.grazepoints = 10;
    this.timepoints = 10;
    this.target = 0;
    this.inv = 120;
    this.damage = 124;
    this.active = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.image_alpha = 0;
    this.image_speed = 0;
    this.type = 0;
    this.con = 0;
    this.vsin = 0;
    this.wall_destroy = 0;
  }
  step() {
    if (this.t <= 25) {
      this.image_alpha += 0.04;
    }
    if (this.t === 25) {
      this.active = 1;
    }
    if (this.t === 0) {
      this.maxspeed = Math.abs(this.hspeed);
      this.hspeed = 0;
    }
    this.t++;
    this.siner += this.sinspeed;
    let xI = xr((this.siner - 1) / 20);
    let xo = xr(this.siner / 20);
    let xP = xo - xI;
    let xQ = x6.first("obj_battlesolid");
    let xl = xQ ? xQ.x : 320;
    this.x = xl - xo * 150;
    this.image_xscale = xP * 50;
    if (this.image_xscale > 2) {
      this.image_xscale = 2;
    }
    if (this.image_xscale < -2) {
      this.image_xscale = -2;
    }
    if (xP > 0) {
      this.depth = 21;
      this.active = 0;
      this.image_blend = x5.gray;
    }
    if (xP < 0) {
      this.depth = 0;
      if (this.image_alpha >= 1) {
        this.active = 1;
      }
      this.image_blend = x5.white;
    }
    this.vsin++;
    if (this.altmode === 0 || this.altmode === 2 || this.altmode === 3) {
      this.y += xr(this.vsin / 10) * 3.5;
    }
    if (this.altmode === 1) {
      this.y -= xr(this.vsin / 10) * 3.5;
    }
  }
};
xR(obj_carouselbullet, "obj_carouselbullet");
e(obj_carouselbullet, "kinds", x4("obj_carouselbullet", xt));
e(obj_carouselbullet, "defaultDepth", 0);
e(obj_carouselbullet, "defaultSprite", "spr_carousel");
var xa = obj_carouselbullet;
var obj_spadering = class FL extends xV {
  constructor() {
    super();
    this.damage = 0;
    this.grazepoints = 0;
    this.timepoints = 0;
    this.inv = 60;
    this.target = 0;
  }
  create() {
    this.visible = false;
    this.ringno = 0;
    this.maxspade = 8;
    this.t = 0;
    this.con = 0;
    this.startspade = 0;
    this.spadet = 0;
    this.startang = x7(360);
    this.grav = 0.2;
    this.size = 1;
    this.special = 0;
    this.side = 0;
    this.spade = [];
  }
  step() {
    let xI = x6.first("obj_battlesolid");
    let xo = xI ? xI.x : 320;
    let xP = xI ? xI.y : 170;
    if (this.t === 0) {
      if (this.size > 1) {
        this.startang = -x7(180);
      }
      for (let xQ = 0; xQ < this.maxspade; xQ++) {
        let xl = 360 / this.maxspade * xQ + this.startang;
        if (this.side === 1) {
          xl = -xl;
        }
        let F3 = x9(300, xl + 180);
        let F4 = xx(300, xl + 180);
        let F5 = xA(F3 + xo, F4 + xP, xM);
        scr_bullet_inherit(this, F5);
        F5.sprite_index = "spr_spadebullet";
        F5.image_alpha = 0;
        F5.active = 1;
        F5.image_blend = x5.ltgray;
        F5.direction = xl;
        F5.image_angle = xl;
        F5.speed = 26;
        F5.image_xscale = this.size;
        F5.image_yscale = this.size;
        this.spade[xQ] = F5;
      }
    }
    if (this.t >= 1 && this.t < 15) {
      for (let F6 of this.spade) {
        if (!F6.destroyed) {
          F6.speed *= 0.87;
          F6.image_alpha += 0.1;
        }
      }
    }
    if (this.t === 15) {
      for (let F7 of this.spade) {
        if (!F7.destroyed) {
          F7.speed = 0;
          F7.image_alpha += 0.1;
        }
      }
    }
    if (this.t >= 15 && this.con === 0 && (this.spadet++, this.special === 1 && (this.spadet += 6), this.spadet >= 4)) {
      let F8 = this.spade[this.startspade];
      if (F8 && !F8.destroyed) {
        F8.image_blend = x5.white;
        F8.gravity_direction = F8.direction;
        F8.speed = -3.4;
        F8.gravity = this.grav;
      }
      this.startspade++;
      if (this.startspade >= this.maxspade) {
        this.con = 1;
        this.instance_destroy();
      }
      this.spadet = 0;
    }
    this.t++;
  }
};
xR(obj_spadering, "obj_spadering");
e(obj_spadering, "kinds", x4("obj_spadering", xV));
e(obj_spadering, "defaultDepth", 0);
var xE = obj_spadering;
var obj_joker_teleport = class Fr extends xV {
  create() {
    this.fire = 0;
    this.special = 0;
    this.con = 0;
    this.image_xscale = 0;
    this.image_speed = 0;
    this.timer = 0;
    this.image_yscale = 2;
    this.type = 0;
    this.damage = 100;
    this.grazed = 0;
    this.grazepoints = 4;
    this.timepoints = 2;
    this.inv = 60;
    this.grazetimer = 0;
    this.target = 0;
    this.sndcon = 0;
    if (this.x < 320) {
      this.sprite_index = "spr_joker_teleport_r";
    }
  }
  step() {
    let xI = x6.first("obj_heart");
    if (this.con === 0) {
      if (this.sndcon === 0) {
        x2("snd_swing");
        this.sndcon = 1;
      }
      this.image_index = 0;
      if (this.image_xscale < 2) {
        this.image_xscale += 0.4;
      } else {
        this.image_xscale = 2;
        this.con = 1;
        this.timer = 0;
      }
    }
    if (this.con === 1 && (this.timer++, this.timer >= 8)) {
      if (this.sndcon === 1 && this.type < 3) {
        x2("snd_joker_oh");
        this.sndcon = 2;
      }
      this.image_index = 1;
      this.con = 2;
      this.timer = 0;
      if (this.type === 0) {
        let xo = xA(this.x, this.y, xM);
        xo.sprite_index = "spr_diamondbullet";
        xo.active = 1;
        scr_bullet_inherit(this, xo);
        xo.move_towards_point(xI ? xI.x + 10 : 320, xI ? xI.y + 10 : 170, 8);
        xo.image_angle = xo.direction;
        xo.image_xscale = 0.7;
        xo.image_yscale = 0.7;
      }
      if (this.type === 1) {
        for (let xP = 0; xP < 5; xP++) {
          let xQ = xA(this.x, this.y, xM);
          xQ.sprite_index = "spr_spadebullet";
          xQ.active = 1;
          xQ.offset = xP * 18;
          scr_bullet_inherit(this, xQ);
          xQ.move_towards_point(xI ? xI.x + 10 : 320, xI ? xI.y + 10 : 170, 4.5);
          xQ.direction = xQ.direction - 36 + xQ.offset;
          xQ.image_angle = xQ.direction;
          xQ.image_xscale = 0.4;
          xQ.image_yscale = 0.4;
        }
      }
    }
    if (this.con === 2) {
      this.timer++;
      if (this.timer >= 10) {
        this.con = 4;
        this.timer = 0;
      }
    }
    if (this.con === 4) {
      if (this.sndcon === 2) {
        x2("snd_swing");
        this.sndcon = 3;
      }
      if (this.image_xscale > 0) {
        this.image_xscale -= 0.4;
        this.image_yscale += 0.2;
      } else {
        this.image_xscale = 0;
        this.con = 0;
        this.instance_destroy();
      }
    }
  }
};
xR(obj_joker_teleport, "obj_joker_teleport");
e(obj_joker_teleport, "kinds", x4("obj_joker_teleport", xV));
e(obj_joker_teleport, "defaultDepth", 5);
e(obj_joker_teleport, "defaultSprite", "spr_joker_teleport");
var xu = obj_joker_teleport;
var obj_clubsbullet_dark = class Fp extends xV {
  create() {
    this.difficulty = 1;
    this.times = 0;
    this.activetimer = 0;
    this.grazed = 0;
    this.grazepoints = 1;
    this.timepoints = 1;
    this.target = 0;
    this.dont = 1;
    this.inv = 120;
    this.damage = 124;
    this.active = 0;
    this.dtimer = 0;
    this.type = 0;
    this.initangle = 0;
  }
  step() {
    this.dtimer++;
    let xI = x6.first("obj_heart");
    if (this.type === 2) {
      if (this.dtimer === 20 || this.dtimer === 22 || this.dtimer === 24) {
        this.move_towards_point(xI ? xI.x + 8 : 320, xI ? xI.y + 8 : 170, 0.1);
        let xo = (xP, xQ) => {
          let xl = xA(this.x, this.y, xe);
          if (!xl.destroyed) {
            xl.sprite_index = xP;
            xl.direction = this.direction + xQ - 2 + this.initangle;
            xl.speed = 5;
            xl.image_angle = this.direction;
            scr_bullet_inherit(this, xl);
          }
        };
        xo("spr_clubsball_b", 0);
        xo("spr_clubsball_c", -19);
        xo("spr_clubsball_a", 19);
        this.initangle += 2;
      }
      if (this.dtimer === 26) {
        let xP = xA(this.x, this.y, a);
        xP.sprite_index = this.sprite_index;
        xP.image_angle = this.image_angle;
        xP.fadespeed = 0.04;
        this.instance_destroy();
      }
    }
  }
};
xR(obj_clubsbullet_dark, "obj_clubsbullet_dark");
e(obj_clubsbullet_dark, "kinds", x4("obj_clubsbullet_dark", xV));
e(obj_clubsbullet_dark, "defaultDepth", -10);
e(obj_clubsbullet_dark, "defaultSprite", "spr_clubsbullet_dark");
var xO = obj_clubsbullet_dark;
var obj_centerscythe = class FR extends xt {
  create() {
    this.grazed = 0;
    this.grazepoints = 3;
    this.timepoints = 2;
    this.target = 0;
    this.inv = 120;
    this.damage = 124;
    this.grazetimer = 0;
    this.active = 0;
    this.image_alpha = 0;
    this.image_xscale = 1;
    this.image_yscale = 1;
    this.rotspeed = 0;
    this.insanity = 1;
    this.chasecon = 1;
    this.chasetimer = 0;
    this.centerx = 320;
    this.centery = 120;
    let xI = x6.first("obj_battlesolid");
    if (xI) {
      this.centerx = xI.x;
      this.centery = xI.y;
    }
    this.radius = 150;
    this.sine = 0;
    this.sinespeed = 1.4;
    this.dir = x7(70);
    this.dirspeed = x8(1, -1) * 1.5;
    this.un = 0;
    this.scythetimer = -5;
    this.scythesidex = 1;
    this.swingnoise = 0;
    this.noisebuffer = 0;
    this.type = 0;
    let xo = x6.first("obj_dbulletcontroller");
    if (xo && xo.type === 76) {
      this.type = 1;
    }
    this.king = 0;
    if (this.type === 1) {
      this.insanity = 0;
      this.sinespeed = 1.3;
      this.scythesidex = x8(1, -1);
    }
    if (x6.number("obj_centerscythe") === 1) {
      this.king = 1;
      this.x = this.centerx - this.radius;
      this.y = this.centery;
      let xP = xA(this.centerx + this.radius, this.centery, FR);
      xP.sine = 0;
      xP.dir = 180;
      xP.un = 1;
      let xQ = xA(this.centerx, this.centery - this.radius, FR);
      xQ.sine = 0;
      xQ.dir = 90;
      xQ.un = 0;
      let xl = xA(this.centerx, this.centery + this.radius, FR);
      xl.sine = 0;
      xl.dir = 270;
      xl.un = 1;
      let F3 = this.dir;
      x6.with("obj_centerscythe", F4 => {
        F4.mydir = F3;
        F4.sinespeed = this.sinespeed;
        F4.dirspeed = this.dirspeed;
        F4.insanity = this.insanity;
      });
      x6.with("obj_centerscythe", F4 => {
        if (F4.dir !== F4.mydir) {
          F4.dir += F4.mydir;
        }
        F4.x = F4.centerx - x9(F4.radius, F4.dir);
        F4.y = F4.centery - xx(F4.radius, F4.dir);
      });
    }
    this.wall_destroy = 0;
  }
  step() {
    if (this.chasecon === 1) {
      this.image_alpha += 0.04;
      if (this.image_alpha >= 1) {
        this.image_alpha = 1;
        this.chasecon = 2;
        this.active = 1;
      }
    }
    if (this.chasecon === 2) {
      if (this.un === 0 && this.rotspeed <= 10) {
        this.rotspeed++;
      }
      if (this.un === 1 && this.rotspeed >= -10) {
        this.rotspeed--;
      }
      this.sine += this.sinespeed;
      this.dir += this.dirspeed;
      if (this.insanity === 1) {
        if (this.dirspeed > 0 && this.dirspeed < 3) {
          this.dirspeed += 0.01;
        }
        if (this.dirspeed < 0 && this.dirspeed > -3) {
          this.dirspeed -= 0.01;
        }
      }
      let xI = xp(this.sine / 18) * this.radius;
      this.x = this.centerx - x9(xI, this.dir);
      this.y = this.centery - xx(xI, this.dir);
      if (this.king === 1) {
        this.noisebuffer--;
        if (Math.abs(xI) <= 8 && this.noisebuffer < 0) {
          x2("snd_swing");
          this.noisebuffer = 10;
        }
      }
    }
    if (this.king === 1 && this.type === 1) {
      this.scythetimer++;
      if (this.scythetimer === 60) {
        x2("snd_spearappear");
        let xP = xA(this.centerx + this.radius * this.scythesidex, this.centery + this.scythesidex * 60, xM);
        xP.image_xscale = 2;
        xP.image_yscale = 2;
        xP.image_alpha = 0;
        xP.sprite_index = "spr_joker_scythebody";
        xP.mask_index = "spr_joker_scythebody_mask";
        xP.image_blend = x5.red;
        xP.active = 1;
        scr_bullet_inherit(this, xP);
        this.sbul = xP;
      }
      let xo = this.sbul;
      if (this.scythetimer >= 60 && this.scythetimer < 70 && xo && !xo.destroyed) {
        xo.image_angle += this.scythesidex * 10;
        xo.image_alpha += 0.1;
      }
      if (this.scythetimer >= 85 && this.scythetimer < 90 && xo && !xo.destroyed) {
        xo.hspeed -= this.scythesidex * 3;
      }
      if (this.scythetimer >= 100 && this.scythetimer < 105 && xo && !xo.destroyed) {
        xo.image_alpha -= 0.2;
      }
      if (this.scythetimer >= 105) {
        if (xo && !xo.destroyed) {
          xo.instance_destroy();
        }
        this.scythesidex = this.scythesidex === -1 ? 1 : -1;
        this.scythetimer = 59;
      }
    }
    this.image_angle += this.rotspeed;
    if (this.grazed === 1) {
      this.grazetimer++;
      if (this.grazetimer >= 30) {
        this.grazed = 0;
        this.grazetimer = 0;
      }
    }
  }
};
xR(obj_centerscythe, "obj_centerscythe");
e(obj_centerscythe, "kinds", x4("obj_centerscythe", xt));
e(obj_centerscythe, "defaultDepth", 0);
e(obj_centerscythe, "defaultSprite", "spr_joker_scythebody");
e(obj_centerscythe, "defaultMask", "spr_joker_scythebody_mask");
var xy = obj_centerscythe;
var obj_laserscythe = class Fg extends xt {
  create() {
    this.grazed = 0;
    this.grazepoints = 15;
    this.timepoints = 0;
    this.target = 0;
    this.inv = 120;
    this.damage = 124;
    this.active = 1;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.image_angle = x7(360);
    this.rotspeed = 14;
    this.vspeed = 5;
    this.mask_index = "spr_joker_scythebody_mask";
    this.gravity = 1;
    this.explode = 0;
    this.explodetimer = 0;
    this.remrot = this.image_angle;
    this.remy = this.y;
    this.remx = this.x;
    this.scale = 2;
    this.wall_destroy = 0;
  }
  step() {
    if (this.explode === 0) {
      this.remx = this.x;
      this.remy = this.y;
      this.image_angle += this.rotspeed;
      this.remrot = this.image_angle;
    }
    if (this.y >= 380 && this.explode === 0) {
      x2("snd_scytheburst");
      this.remx = this.x;
      this.remy = this.y;
      this.explode = 1;
      this.explodetimer = 0;
      this.remrot = this.image_angle;
      this.image_angle = 0;
      this.speed = 0;
      this.gravity = 0;
      this.mask_index = "spr_tallpx";
      this.sprite_index = "spr_tallpx";
      this.grazed = 0;
      this.y = 0;
      this.depth += 1;
    }
    if (this.explode === 1) {
      this.active = 0;
      this.image_xscale += 8;
      if (this.image_xscale >= 16) {
        this.active = 1;
      }
      if (this.image_xscale >= 32) {
        this.explode = 2;
      }
    }
    if (this.explode === 2) {
      this.image_xscale -= 4;
      if (this.image_xscale <= 16) {
        this.image_alpha -= 0.25;
        this.active = 0;
      }
      if (this.image_xscale <= 0) {
        this.instance_destroy();
      }
    }
    if (this.grazed === 1) {
      x6.with("obj_dbulletcontroller", xI => {
        xI.made += 0.2;
      });
      this.grazed = 2;
    }
  }
  draw(xI) {
    if (this.explode < 2) {
      xI.draw_sprite_ext("spr_joker_scythebody", this.image_index, this.remx, this.remy, this.scale, this.scale, this.remrot, x5.white, 1);
    }
    if (this.explode >= 1) {
      this.draw_self(xI);
    }
  }
  userEvent(xI) {
    if (xI === 5 && this.active === 1 && x1.inv < 0) {
      if (x6.first("obj_battlecontroller")) {
        x6.first("obj_battlecontroller").shakeReq = 1;
      }
      x2("snd_hurt1");
      x1.inv = x1.invc * 40;
      let xo = [0, 1, 2].map(xP => Math.max(0, x1.hp[x1.char[xP]]));
      if (xL(xo[0] + xo[1] + xo[2]) / 3 >= 10) {
        for (let xP = 0; xP < 3; xP++) {
          if (xo[xP] > 0) {
            x1.hp[x1.char[xP]] = xL(x1.hp[x1.char[xP]] * 0.7);
          }
        }
      } else {
        x0(this);
      }
    }
  }
};
xR(obj_laserscythe, "obj_laserscythe");
e(obj_laserscythe, "kinds", x4("obj_laserscythe", xt));
e(obj_laserscythe, "defaultDepth", -5);
e(obj_laserscythe, "defaultSprite", "spr_joker_scythebody");
var xB = obj_laserscythe;
export { scr_bullet_inherit as a, applyBulletDamage as b, xV as c, xq as d, xM as e, xe as f, xt as g, xH as h, xs as i, xj as j, xv as k, xa as l, xE as m, xu as n, xO as o, xy as p, xB as q };
