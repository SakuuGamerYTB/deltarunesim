const c = function () {
  ;
  let Pv = true;
  return function (PZ, Pl) {
    const PF = Pv ? function () {
      if (Pl) {
        const Pg = Pl.apply(PZ, arguments);
        Pl = null;
        return Pg;
      }
    } : function () {};
    Pv = false;
    return PF;
  };
}();
import { C as x, b as f } from "./c-YJJCI5ES.js";
import { Da as i, Fa as l, Za as b, _a as t, c as K, fa as a, fb as P0, g as P1, la as P2, ma as P3, na as P4, oa as P5, q as P6, qb as P7, s as P8, t as P9, wb as PP } from "./c-FMIAGHDE.js";
import { a as Pq, e as Pm, l as PO } from "./c-PIEPTJTC.js";
PO();
var obj_marker = class Pb extends b {};
Pq(obj_marker, "obj_marker");
Pm(obj_marker, "kinds", t("obj_marker", b));
Pm(obj_marker, "defaultDepth", 0);
var PJ = obj_marker;
var obj_afterimage = class Pt extends PJ {
  create() {
    this.fadeSpeed = 0.04;
    if (f.chapter >= 5) {
      this.parentid = -1;
    }
  }
  get fadespeed() {
    return this.fadeSpeed;
  }
  set fadespeed(Pv) {
    this.fadeSpeed = Pv;
  }
  endStep() {
    this.image_alpha -= this.fadeSpeed;
    if (this.image_alpha < 0) {
      this.instance_destroy();
    }
  }
};
Pq(obj_afterimage, "obj_afterimage");
Pm(obj_afterimage, "kinds", t("obj_afterimage", PJ));
Pm(obj_afterimage, "defaultDepth", 0);
var Pz = obj_afterimage;
function scr_afterimage(Pv) {
  let PZ = P7(Pv.x, Pv.y, Pz);
  PZ.sprite_index = Pv.sprite_index;
  PZ.image_index = Pv.image_index;
  PZ.image_xscale = Pv.image_xscale;
  PZ.image_yscale = Pv.image_yscale;
  PZ.image_angle = Pv.image_angle;
  PZ.image_blend = Pv.image_blend;
  PZ.image_alpha = Pv.image_alpha;
  PZ.depth = Pv.depth + 1;
  PZ.image_speed = 0;
  return PZ;
}
Pq(scr_afterimage, "scr_afterimage");
function scr_dark_marker(Pv, PZ, Pl) {
  let PF = P7(Pv, PZ, PJ);
  PF.sprite_index = Pl;
  PF.image_xscale = 2;
  PF.image_yscale = 2;
  return PF;
}
Pq(scr_dark_marker, "scr_dark_marker");
var obj_battlesolid = class PK extends b {};
Pq(obj_battlesolid, "obj_battlesolid");
Pm(obj_battlesolid, "kinds", t("obj_battlesolid", b));
var Pr = obj_battlesolid;
var obj_growtangle = class Pa extends Pr {
  create() {
    this.image_xscale = 0;
    this.image_yscale = 0;
    this.image_alpha = 0.3;
    this.timer = 0;
    this.maxtimer = 15;
    this.growcon = 1;
    this.image_speed = 0;
    this.image_blend = P1(K.green, K.lime, 0.5);
    this.fullgrow = 0;
    this.keep = 0;
    this.megakeep = 0;
    this.maxxscale = 2;
    this.maxyscale = 2;
    this.target_angle = 0;
    this.customBox = false;
    this.init = 0;
    this.spr_custom_box = this.sprite_index;
    this.customScaleX = 1;
    this.customScaleY = 1;
    this.growth = 0;
  }
  step() {
    if (!this.init) {
      if (this.visible && (this.maxxscale !== 2 || this.maxyscale !== 2) && this.sprite_index === "spr_battlebg_0") {
        this.customBox = true;
        if (this.maxxscale % 1 !== 0) {
          this.maxxscale = P8(this.maxxscale * 37.5) / 37.5;
        }
        if (this.maxyscale % 1 !== 0) {
          this.maxyscale = P8(this.maxyscale * 37.5) / 37.5;
        }
        this.spr_custom_box = "spr_battlebg_stretch";
        this.customScaleX = this.maxxscale / 2;
        this.customScaleY = this.maxyscale / 2;
        this.sprite_index = "spr_battlebg_stretch_hitbox";
      }
      this.init = 1;
    }
    let Pv = 0;
    if (this.timer < this.maxtimer && this.growcon === 1) {
      Pv = 1;
    }
    if (this.timer > 0 && this.growcon === 3) {
      Pv = 1;
    }
    this.growth = Pv;
    if (Pv === 1) {
      if (this.growcon === 1) {
        this.timer++;
      }
      if (this.growcon === 3) {
        this.timer--;
      }
      this.image_xscale = this.maxxscale * (this.timer / this.maxtimer);
      this.image_yscale = this.maxyscale * (this.timer / this.maxtimer);
      this.image_angle = 180 + this.timer / this.maxtimer * 180 + this.target_angle;
      this.image_alpha = 0.5 + this.timer / this.maxtimer * 0.5;
      if (this.visible) {
        let PZ = P7(this.x, this.y, Pz);
        PZ.sprite_index = this.spr_custom_box || this.sprite_index;
        PZ.image_xscale = this.image_xscale / (this.maxxscale / 2) * this.customScaleX;
        PZ.image_yscale = this.image_yscale / (this.maxyscale / 2) * this.customScaleY;
        PZ.image_angle = this.image_angle;
        PZ.depth = this.depth - 1;
        PZ.image_blend = this.image_blend;
        PZ.image_alpha = 1 - this.image_alpha + 0.1;
        PZ.image_speed = 0;
      }
      if (this.timer >= this.maxtimer && this.growcon === 1) {
        this.growcon = 2;
        this.image_angle = this.target_angle;
      }
      if (this.timer <= 0 && this.growcon === 3) {
        this.instance_destroy();
      }
    }
  }
  endStep() {
    if (this.keep !== 1) {
      return;
    }
    let Pv = P0.first("obj_heart");
    if (!Pv || this.path_speed === 0 && this.speed === 0 && this.megakeep !== 1) {
      return;
    }
    let PZ = this.x - this.sprite_width / 2;
    let Pl = this.x + this.sprite_width / 2;
    let PF = this.y - this.sprite_height / 2;
    let Pg = this.y + this.sprite_height / 2;
    if (Pv.x < PZ + 5) {
      Pv.x = PZ + 5;
    }
    if (Pv.x > Pl - 22) {
      Pv.x = Pl - 22;
    }
    if (Pv.y < PF + 5) {
      Pv.y = PF + 5;
    }
    if (Pv.y > Pg - 22) {
      Pv.y = Pg - 22;
    }
  }
  draw(Pv) {
    if (!this.noborder) {
      Pv.draw_sprite_ext(this.sprite_index, 1, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha);
      if (this.customBox && this.growth && this.growcon !== 2) {
        Pv.draw_sprite_ext(this.spr_custom_box, 0, this.x, this.y, this.image_xscale / (this.maxxscale / 2) * this.customScaleX, this.image_yscale / (this.maxyscale / 2) * this.customScaleY, this.image_angle, this.image_blend, this.image_alpha);
      } else {
        Pv.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha);
      }
    }
  }
};
Pq(obj_growtangle, "obj_growtangle");
Pm(obj_growtangle, "kinds", t("obj_growtangle", Pr));
Pm(obj_growtangle, "defaultDepth", 5);
Pm(obj_growtangle, "defaultSprite", "spr_battlebg_0");
var PW = obj_growtangle;
var obj_grazebox = class PV extends b {
  create() {
    let Pv = P0.first("obj_heart");
    if (Pv) {
      this.x = Pv.x + 10;
      this.y = Pv.y + 10;
    }
    this.grazetimer = 0;
    this.grazetpfactor = 1;
    this.grazetimefactor = 1;
    this.grazesizefactor = 1;
    if (f.chapter >= 2) {
      this.grazecount = 0;
      this.grazetpfactor += x(15) * 0.1;
      if (f.chapter >= 3) {
        this.grazetpfactor += x(24) * 0.05;
        this.grazetpfactor -= x(3) * 0.2;
        this.grazetpfactor -= x(9) * 0.25;
      }
      this.grazetimefactor += x(14) * 0.1;
      if (f.chapter >= 3) {
        this.grazetimefactor -= x(3) * 0.2;
        this.grazetimefactor -= x(9) * 0.25;
      }
      this.grazesizefactor += x(3) * 0.2;
      this.grazesizefactor += x(9) * 0.25;
      if (this.grazetimefactor > 3) {
        this.grazetimefactor = 3;
      }
      if (this.grazetpfactor > 3) {
        this.grazetpfactor = 3;
      }
      if (this.grazesizefactor > 3) {
        this.grazesizefactor = 3;
      }
      this.image_xscale = this.grazesizefactor;
      this.image_yscale = this.grazesizefactor;
      this.sizexoff = 0;
      this.sizeyoff = 0;
    }
  }
  endStep() {
    let Pv = P0.first("obj_heart");
    if (Pv) {
      if (f.chapter >= 2) {
        this.sizexoff = 0;
        this.sizeyoff = 0;
        this.x = Pv.x + 10 + this.sizexoff;
        this.y = Pv.y + 10 + this.sizeyoff;
      } else {
        this.x = Pv.x + 10;
        this.y = Pv.y + 10;
      }
    } else {
      this.instance_destroy();
    }
  }
  draw(Pv) {
    if (this.grazetimer > 0) {
      let PZ = this.sprite_index || "spr_grazeappear";
      Pv.draw_sprite_ext(PZ, 0, this.x, this.y, 1, 1, 0, K.white, this.grazetimer / 6);
      Pv.draw_sprite_ext(PZ, 3, this.x, this.y, 1, 1, 0, K.white, this.grazetimer / 6 - 0.2);
      if (f.chapter >= 2 && this.image_xscale > 1) {
        Pv.draw_sprite_ext(PZ, 0, this.x, this.y, this.image_xscale, this.image_yscale, 0, K.white, this.grazetimer / 6);
        Pv.draw_sprite_ext(PZ, 3, this.x, this.y, this.image_xscale, this.image_yscale, 0, K.white, this.grazetimer / 6 - 0.2);
      }
    }
    this.grazetimer -= 1;
  }
};
Pq(obj_grazebox, "obj_grazebox");
Pm(obj_grazebox, "kinds", t("obj_grazebox", b));
Pm(obj_grazebox, "defaultDepth", 2);
Pm(obj_grazebox, "defaultSprite", "spr_grazeappear");
Pm(obj_grazebox, "defaultMask", "spr_grazemask");
var PQ = obj_grazebox;
var obj_heartburst = class PB extends b {
  create() {
    this.burst = 0;
  }
  draw(Pv) {
    this.burst++;
    let PZ = this.burst;
    let Pl = this.xstart + 9;
    let PF = this.ystart + 9;
    Pv.draw_sprite_ext("spr_heartoutline2", 0, Pl, PF, 0.25 + PZ, 0.25 + PZ / 2, 0, K.white, 0.8 - PZ / 6);
    Pv.draw_sprite_ext("spr_heartoutline", 0, Pl, PF, 0.25 + PZ / 1.5, 0.25 + PZ / 3, 0, K.white, 1 - PZ / 6);
    Pv.draw_sprite_ext("spr_heartoutline", 0, Pl, PF, 0.2 + PZ / 2.5, 0.2 + PZ / 5, 0, K.white, 1.2 - PZ / 6);
    if (PZ > 10) {
      this.instance_destroy();
    }
  }
};
Pq(obj_heartburst, "obj_heartburst");
Pm(obj_heartburst, "kinds", t("obj_heartburst", b));
Pm(obj_heartburst, "defaultDepth", 0);
var PY = obj_heartburst;
var obj_heart = class Po extends b {
  create() {
    f.sp = 4;
    this.wspeed = f.sp;
    this.image_speed = 0;
    this.fly = 0;
    this.dmgnoise = 0;
    P7(this.x + 10, this.y + 10, PQ);
    this.boundaryup = 0;
    this.disableslow = 0;
    if (a()) {
      this.disableslow = 1;
    }
  }
  step() {
    let Pv = P2() ? 1 : 0;
    let PZ = P3() ? 1 : 0;
    let Pl = P4() ? 1 : 0;
    let PF = P5() ? 1 : 0;
    let Pg = 0;
    let PM = 0;
    let PI = this.wspeed;
    if (PZ) {
      Pg = PI;
    }
    if (Pv) {
      Pg = -PI;
    }
    if (PF) {
      PM = PI;
    }
    if (Pl) {
      PM = -PI;
    }
    if (a()) {
      if (this.disableslow === 0) {
        Pg = P9(Pg * 0.5);
        PM = P9(PM * 0.5);
      }
    } else {
      this.disableslow = 0;
    }
    let PS = (q1, q2) => PP(this, q1, q2, "obj_battlesolid");
    if (PS(this.x + Pg, this.y)) {
      for (let q2 = PI; q2 > 0; q2--) {
        let q3 = 0;
        if (PF === 0 && !PS(this.x + Pg, this.y - q2)) {
          this.y -= q2;
          PM = 0;
          break;
        }
        if (Pl === 0 && q3 === 0 && !PS(this.x + Pg, this.y + q2)) {
          this.y += q2;
          PM = 0;
          break;
        }
      }
      let q1 = 0;
      if (Pg > 0) {
        for (let q4 = Pg; q4 >= 0; q4--) {
          if (!PS(this.x + q4, this.y)) {
            Pg = q4;
            q1 = 1;
            break;
          }
        }
      }
      if (Pg < 0) {
        for (let q5 = Pg; q5 <= 0; q5++) {
          if (!PS(this.x + q5, this.y)) {
            Pg = q5;
            q1 = 1;
            break;
          }
        }
      }
      if (q1 === 0) {
        Pg = 0;
      }
    }
    if (PS(this.x, this.y + PM)) {
      for (let q7 = PI; q7 > 0; q7--) {
        let q8 = 0;
        if (PZ === 0 && !PS(this.x - q7, this.y + PM)) {
          this.x -= q7;
          Pg = 0;
          break;
        }
        if (q8 === 0 && Pv === 0 && !PS(this.x + q7, this.y + PM)) {
          this.x += q7;
          Pg = 0;
          break;
        }
      }
      let q6 = 0;
      if (PM > 0) {
        for (let q9 = PM; q9 >= 0; q9--) {
          if (!PS(this.x, this.y + q9)) {
            PM = q9;
            q6 = 1;
            break;
          }
        }
      }
      if (PM < 0) {
        for (let qP = PM; qP <= 0; qP++) {
          if (!PS(this.x, this.y + qP)) {
            PM = qP;
            q6 = 1;
            break;
          }
        }
      }
      if (q6 === 0) {
        PM = 0;
      }
    }
    if (PS(this.x + Pg, this.y + PM)) {
      let qq = 0;
      let qm = Pg;
      let qO = PM;
      while (qO !== 0 || qm !== 0) {
        if (!PS(this.x + qm, this.y + qO)) {
          Pg = qm;
          PM = qO;
          qq = 1;
          break;
        }
        if (Math.abs(qO) >= 1) {
          if (qO > 0) {
            qO--;
          }
          if (qO < 0) {
            qO++;
          }
        } else {
          qO = 0;
        }
        if (Math.abs(qm) >= 1) {
          if (qm > 0) {
            qm--;
          }
          if (qm < 0) {
            qm++;
          }
        } else {
          qm = 0;
        }
      }
      if (qq === 0) {
        Pg = 0;
        PM = 0;
      }
    }
    let Pp = this.sprite_width;
    let q0 = this.sprite_height;
    if (this.x + Pg >= 640 - Pp) {
      Pg = 640 - Pp - this.x;
    }
    if (this.x + Pg <= 0) {
      Pg = -this.x;
    }
    if (this.y + PM <= 0) {
      PM = -this.y;
    }
    if (this.y + PM >= 320 - q0 + this.boundaryup) {
      PM = 320 - q0 - this.y + this.boundaryup;
    }
    this.x += Pg;
    this.y += PM;
    if (this.dmgnoise === 1) {
      this.dmgnoise = 0;
      l("snd_hurt1");
      i("snd_hurt1");
    }
    f.inv -= 1;
    if (f.inv > 0) {
      this.image_speed = 0.25;
    } else {
      this.image_speed = 0;
      this.image_index = 0;
    }
    f.heartx = this.x + 2;
    f.hearty = this.y + 2;
  }
};
Pq(obj_heart, "obj_heart");
Pm(obj_heart, "kinds", t("obj_heart", b));
Pm(obj_heart, "defaultDepth", 1);
Pm(obj_heart, "defaultSprite", "spr_dodgeheart");
Pm(obj_heart, "defaultMask", "spr_dodgeheartmask");
var Py = obj_heart;
var obj_moveheart = class qX extends b {
  create() {
    this.burst = 0;
    this.shift = 1;
    this.image_alpha = 0;
    this.flytime = 8;
    this.distx = 310;
    this.disty = 160;
    let Pv = P0.first("obj_heartmarker");
    let PZ = P0.first("obj_growtangle");
    if (Pv) {
      this.distx = Pv.x;
      this.disty = Pv.y;
    } else if (f.chapter >= 2 && PZ) {
      this.distx = PZ.x - 10;
      this.disty = PZ.y - 10;
    }
    this.dist = P6(this.x, this.y, this.distx, this.disty);
    this.move_towards_point(this.distx, this.disty, this.dist / this.flytime);
    this.alarm[0] = this.flytime;
    this.image_speed = 0;
    P7(this.x, this.y, PY);
  }
  step() {
    this.image_alpha += 0.334;
  }
  alarmEvent(Pv) {
    if (Pv === 0) {
      this.x = this.distx;
      this.y = this.disty;
      if (f.chapter < 2 || !P0.exists("obj_heart")) {
        let PZ = P7(this.x, this.y, soulClass());
        if (f.chapter >= 3 && PZ) {
          PZ.sprite_index = this.sprite_index;
          PZ.mask_index = this.mask_index;
        }
      }
      this.instance_destroy();
    }
  }
};
Pq(obj_moveheart, "obj_moveheart");
Pm(obj_moveheart, "kinds", t("obj_moveheart", b));
Pm(obj_moveheart, "defaultDepth", 0);
Pm(obj_moveheart, "defaultSprite", "spr_dodgeheart");
var Pu = obj_moveheart;
var PG = null;
function setCh2Heart(Pv) {
  PG = Pv;
  Pv.prototype.interpSelf = true;
}
Pq(setCh2Heart, "setCh2Heart");
var PA = null;
function setCh3Heart(Pv) {
  PA = Pv;
  Pv.prototype.interpSelf = true;
}
Pq(setCh3Heart, "setCh3Heart");
var PT = {};
function setChapterHeart(Pv, PZ) {
  PT[Pv] = PZ;
  PZ.prototype.interpSelf = true;
}
Pq(setChapterHeart, "setChapterHeart");
function soulClass() {
  let Pv = PT[f.chapter];
  return Pv || (f.chapter >= 3 && PA ? PA : f.chapter >= 2 && PG ? PG : Py);
}
Pq(soulClass, "soulClass");
function scr_moveheart() {
  if (f.chapter >= 2) {
    f.inv = 0;
  }
  let Pv = P0.first("obj_herokris");
  if (f.chapter === 2 && P0.exists("obj_gigaqueen_enemy")) {
    let PZ = P0.first("o_boxingcontroller");
    if (PZ) {
      return P7(PZ.x + 4, PZ.y - 120, Pu);
    }
  }
  return P7(Pv ? Pv.x + 10 : 90, Pv ? Pv.y + 40 : 140, Pu);
}
Pq(scr_moveheart, "scr_moveheart");
var obj_returnheart = class qJ extends b {
  create() {
    let Pv = P0.first("obj_herokris");
    this.burst = 0;
    this.shift = 1;
    this.image_alpha = 1;
    this.flytime = 8;
    this.distx = (Pv ? Pv.x : 80) + 10;
    this.disty = (Pv ? Pv.y : 100) + 40;
    if (f.chapter === 2 && P0.exists("obj_gigaqueen_enemy")) {
      let PZ = P0.first("o_boxingcontroller");
      if (PZ) {
        this.distx = PZ.x;
        this.disty = PZ.y - 110;
      }
    }
    this.dist = P6(this.x, this.y, this.distx, this.disty);
    this.move_towards_point(this.distx, this.disty, this.dist / this.flytime);
    this.alarm[0] = this.flytime;
    this.image_speed = 0;
  }
  alarmEvent(Pv) {
    if (Pv === 0) {
      this.x = this.distx;
      this.y = this.disty;
      P7(this.x, this.y, PY);
      this.instance_destroy();
    }
  }
};
Pq(obj_returnheart, "obj_returnheart");
Pm(obj_returnheart, "kinds", t("obj_returnheart", b));
Pm(obj_returnheart, "defaultDepth", 0);
Pm(obj_returnheart, "defaultSprite", "spr_dodgeheart");
var Pk = obj_returnheart;
var obj_darkener = class qL extends b {
  create() {
    if (f.chapter >= 2) {
      this.depth = 205;
    }
    if (P0.number("obj_darkener") > 1) {
      this.instance_destroy();
      return;
    }
    this.darken = 1;
    this.darkamt = 0;
  }
  draw(Pv) {
    if (this.darken === 1) {
      P0.with("obj_heroparent", Pl => {
        Pl.darkify = 1;
      });
      let PZ = P0.first("obj_tenna_enemy");
      if (f.chapter === 3 && PZ && (PZ.phaseturn === 11 || PZ.testlightemup === 1)) {
        if (this.darkamt < 8) {
          this.darkamt++;
        }
      } else if (this.darkamt < 15) {
        this.darkamt++;
      }
      P0.with("obj_whiteedge", Pl => {
        Pl.image_alpha = this.darkamt / 15;
      });
    }
    if (this.darken === 0 && (P0.with("obj_growtangle", Pl => {
      Pl.growcon = 3;
    }), P0.with("obj_heroparent", Pl => {
      Pl.darkify = 0;
    }), this.darkamt > 0 && this.darkamt--, P0.with("obj_whiteedge", Pl => {
      Pl.image_alpha = this.darkamt / 15;
    }), this.darkamt <= 0)) {
      this.instance_destroy();
      return;
    }
    Pv.draw_set_alpha(this.darkamt / 20);
    Pv.draw_set_color(K.black);
    Pv.draw_rectangle(-40, -40, 680, 520, false);
    Pv.draw_set_alpha(1);
  }
  destroy() {
    P0.with("obj_whiteedge", Pv => {
      Pv.image_alpha = 0;
    });
  }
};
Pq(obj_darkener, "obj_darkener");
Pm(obj_darkener, "kinds", t("obj_darkener", b));
Pm(obj_darkener, "defaultDepth", 200);
var Pj = obj_darkener;
var obj_shake = class qz extends b {
  create() {
    if (P0.number("obj_shake") > 1) {
      this.instance_destroy();
      return;
    }
    this.shakespeed = 1;
    this.shakesign = 1;
    this.shakex = 4;
    this.shakey = 4;
    this.permashake = 0;
    this.active = 0;
    this.beenset = 0;
  }
  step() {
    if (this.active === 0) {
      this.beenset = 1;
      if (f.flag[12] === 0) {
        f.shakex = this.shakex;
        f.shakey = this.shakey;
      }
      this.shakesign = -this.shakesign;
      this.active = 1;
      this.alarm[0] = this.shakespeed;
    }
  }
  alarmEvent(Pv) {
    if (Pv === 0) {
      if (f.flag[12] === 0) {
        f.shakex = this.shakex * this.shakesign;
        f.shakey = this.shakey * this.shakesign;
      }
      if (this.permashake === 0) {
        if (this.shakex > 0) {
          this.shakex--;
        }
        if (this.shakey > 0) {
          this.shakey--;
        }
      }
      this.shakesign = -this.shakesign;
      this.alarm[0] = this.shakespeed;
      if (this.shakex === 0 && this.shakey === 0) {
        this.instance_destroy();
      }
    }
  }
  destroy() {
    if (f.chapter < 2 || this.beenset) {
      f.shakex = 0;
      f.shakey = 0;
    }
  }
};
Pq(obj_shake, "obj_shake");
Pm(obj_shake, "kinds", t("obj_shake", b));
Pm(obj_shake, "defaultDepth", 0);
var Pn = obj_shake;
export { PJ as a, Pz as b, scr_afterimage as c, scr_dark_marker as d, Pr as e, PW as f, PQ as g, PY as h, Py as i, Pu as j, setCh2Heart as k, setCh3Heart as l, setChapterHeart as m, scr_moveheart as n, Pk as o, Pj as p, Pn as q };
