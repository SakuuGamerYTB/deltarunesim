const J = function () {
  ;
  let Vl = true;
  return function (VQ, Ve) {
    const Vg = Vl ? function () {
      if (Ve) {
        const VR = Ve.apply(VQ, arguments);
        Ve = null;
        return VR;
      }
    } : function () {};
    Vl = false;
    return Vg;
  };
}();
import { d as m } from "./c-EUQCKUJR.js";
import { D as s, G as U, M as K, b as d } from "./c-YJJCI5ES.js";
import { Da as T, I, Sb as X, Za as t, _a as j, ac as G, c as Y, fb as N, hc as i, j as Z, qb as V0, s as V1, w as V2, x as V3 } from "./c-FMIAGHDE.js";
import { a as V4, e as V5, l as V6 } from "./c-PIEPTJTC.js";
V6();
var obj_icespell_hexagon = class Va extends t {
  create() {
    this.rotspeed = 4;
    this.timer = 0;
    this.con = 0;
    this.image_xscale = 1.5;
    this.image_yscale = 1.5;
  }
  step() {
    if (this.con === 1) {
      this.image_angle += this.rotspeed * 2;
      this.direction += this.rotspeed * 3;
      this.timer++;
      if (this.timer >= 10) {
        this.image_alpha -= 0.1;
      }
      if (this.image_alpha <= 0) {
        this.instance_destroy();
      }
    }
  }
};
V4(obj_icespell_hexagon, "obj_icespell_hexagon");
V5(obj_icespell_hexagon, "kinds", j("obj_icespell_hexagon", t));
V5(obj_icespell_hexagon, "defaultSprite", "spr_icespell_hexagon");
var V8 = obj_icespell_hexagon;
var obj_icespell = class VF extends t {
  create() {
    this.timer = 0;
    this.star = 0;
    this.damage = 0;
    this.hex = [];
    this.target = null;
  }
  draw(Vl) {
    this.timer++;
    let VQ = this.timer;
    if (VQ === 1) {
      T("snd_icespell");
      this.hex[0] = V0(this.x - 25, this.y - 20, V8);
    }
    if (VQ === 4) {
      this.hex[1] = V0(this.x + 25, this.y - 20, V8);
    }
    if (VQ === 7) {
      this.hex[2] = V0(this.x, this.y + 20, V8);
    }
    if (VQ === 10) {
      for (let Ve of this.hex) {
        if (!!Ve && !Ve.destroyed) {
          for (let Vg = 0; Vg < 6; Vg++) {
            let VR = V0(Ve.x, Ve.y, V8);
            VR.image_xscale = 0.75;
            VR.image_yscale = 0.75;
            VR.con = 1;
            VR.direction = Vg * 60;
            VR.speed = 8;
            VR.friction = 0.2;
          }
        }
      }
    }
    if (VQ === 11) {
      for (let VJ of this.hex) {
        if (VJ && !VJ.destroyed) {
          VJ.instance_destroy();
        }
      }
    }
    if (VQ === 15 && d.fighting === 1) {
      d.hittarget[this.star] = 0;
      K(this.star, this.damage, this.caster);
    }
    if (VQ >= 10 && VQ <= 30) {
      Vl.draw_set_alpha(Math.max(0, 2.2 - VQ / 10));
      Vl.draw_set_color(Y.white);
      for (let VE = 0; VE < 3; VE++) {
        Vl.draw_circle(this.x, this.y, 60 + VE - VQ * 6, true);
      }
      Vl.draw_set_alpha(1);
    }
    if (VQ === 60) {
      this.instance_destroy();
    }
  }
};
V4(obj_icespell, "obj_icespell");
V5(obj_icespell, "kinds", j("obj_icespell", t));
V5(obj_icespell, "defaultSprite", "spr_icespell_snowflake");
var VV = obj_icespell;
var obj_spell_snowgrave_snowflake = class Vh extends t {
  create() {
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.siner = 0;
    this.timer = 0;
    this.image_alpha = 1;
  }
  step() {
    this.image_xscale = V2(this.siner) * 2;
    this.siner++;
    this.timer++;
    if (this.timer >= 30) {
      this.instance_destroy();
    }
  }
  draw(Vl) {
    let VQ = this.sprite_index;
    let Ve = this.image_index;
    let Vg = this.image_alpha;
    Vl.draw_sprite_ext(VQ, Ve, this.x, this.y, this.image_xscale, this.image_yscale, 0, Y.white, Vg);
    Vl.draw_sprite_ext(VQ, Ve, this.x + V2(this.siner / 3) * 30, this.y, V2(this.siner / 3) * 2, 2, 0, Y.white, Vg);
    Vl.draw_sprite_ext(VQ, Ve, this.x - V2(this.siner / 3) * 30, this.y, V2(this.siner / 3) * 2, 2, 0, Y.white, Vg);
  }
};
V4(obj_spell_snowgrave_snowflake, "obj_spell_snowgrave_snowflake");
V5(obj_spell_snowgrave_snowflake, "kinds", j("obj_spell_snowgrave_snowflake", t));
V5(obj_spell_snowgrave_snowflake, "defaultSprite", "spr_icespell_snowflake");
var VO = obj_spell_snowgrave_snowflake;
var obj_spell_snowgrave = class Vr extends t {
  create() {
    this.bgalpha = 0;
    this.timer = 0;
    this.snowspeed = 0;
    this.stimer = 0;
    this.caster = 0;
    this.damage = 0;
    this.pattern = null;
    this.altpath = d.encounterno === 82 ? 1 : 0;
    this.fb = null;
    this.init = 0;
    this.fncon = 0;
    this.fn = null;
    this.fntimer = 0;
    this.amplitude = 0;
  }
  altpathCutscene(Vl) {
    let VQ = this.fn;
    if (!!VQ && !VQ.destroyed) {
      if (this.fncon === 0) {
        VQ.image_index += 0.25;
        if (VQ.image_index >= 8) {
          this.fntimer = 0;
          this.fncon = 0.5;
          if (d.batmusic) {
            i(d.batmusic[1], 0, 90);
          }
        }
      }
      if (this.fncon === 0.5 && (this.fntimer++, this.fntimer >= 120)) {
        if (U.ch2_scr_oflash) {
          U.ch2_scr_oflash.call(VQ);
        }
        VQ.sprite_index = "spr_noelleb_spell_special";
        VQ.image_speed = 0.5;
        this.fncon = 0.8;
        this.fntimer = 0;
        this.amplitude = 0;
        let Ve = N.first("obj_berdlyb2_enemy");
        if (Ve) {
          Ve.visible = false;
          this.fb = m(Ve.x, Ve.y, "spr_berdlyb_idle_shocked");
          this.fb.depth = Ve.depth;
        }
      }
      if (this.fncon === 0.8) {
        this.fntimer++;
        if (this.fntimer >= 30) {
          this.fntimer = 0;
          this.fncon = 1;
        }
      }
      if (this.fncon === 1 || this.fncon === 2) {
        if (this.amplitude < 1) {
          this.amplitude += 0.03;
        }
        if (VQ.y > VQ.ystart - 70) {
          VQ.y -= this.amplitude;
          VQ.x += this.amplitude * 2.94;
        }
        VQ.x += V2(Vl / 3) * this.amplitude;
        VQ.y += V3(Vl / 3) * this.amplitude;
        if (Vl % 4 === 0 && Vl < 70) {
          let Vg = T("snd_bell");
          G(Vg, 0.5, 0);
          X(Vg, 0.5 + Z(0.3));
          let VR = U.ch2Obj && U.ch2Obj("obj_afterimage_grow");
          if (VR) {
            let VJ = V0(VQ.x + 50, VQ.y + 10 + 10, VR);
            VJ.speed = Z(2) + 1;
            VJ.direction = Z(180);
            VJ.gravity = 0.2 + Z(0.3);
            VJ.gravity_direction = 70 + Z(40);
            VJ.image_xscale = 1;
            VJ.image_yscale = 1;
            VJ.sprite_index = "spr_shine";
            VJ.image_speed = 0.5;
            VJ.image_alpha = 3;
          }
        }
        if (Vl >= 210) {
          VQ.sprite_index = "spr_noelleb_spell";
          VQ.image_index = 2;
          VQ.image_speed = 0;
          VQ.gravity = 1;
          this.fncon = 3;
        }
      }
      if (this.fncon === 3 && VQ.y >= this.ystart - 6) {
        VQ.y = this.ystart;
        VQ.sprite_index = "spr_noelleb_defeat";
        VQ.speed = 0;
        VQ.gravity = 0;
        if (U.ch2_scr_shakeobj) {
          U.ch2_scr_shakeobj.call(VQ);
        }
        this.fncon = 4;
      }
    }
  }
  draw(Vl) {
    if (this.init === 0 && (this.init = 1, this.fncon = 0, this.altpath === 1)) {
      this.timer = -270;
      let Vg = N.first("obj_heronoelle");
      N.with("obj_heronoelle", VR => {
        VR.visible = false;
      });
      if (Vg) {
        this.fn = m(Vg.x, Vg.y, "spr_noelleb_spell");
        this.fn.depth = Vg.depth;
        this.fn.image_index = 0;
        this.fn.image_speed = 0;
      }
    }
    this.timer++;
    let VQ = this.timer;
    if (this.altpath === 1) {
      this.altpathCutscene(VQ);
    }
    if (this.bgalpha > 0) {
      let VR = Vl.ctx;
      VR.save();
      VR.globalAlpha = Math.min(1, this.bgalpha);
      let VJ = VR.createLinearGradient(0, -10, 0, 500);
      if (VJ) {
        VJ.addColorStop(0, "#ffffff");
        VJ.addColorStop(1, "#0000ff");
        VR.fillStyle = VJ;
        VR.fillRect(-10, -10, 710, 510);
      }
      VR.restore();
    }
    let Ve = I.bg_snowfall;
    if (Ve && Ve.img && Ve.img[0]) {
      this.pattern ||= Vl.ctx.createPattern(Ve.img[0], "repeat");
      let VE = (Vm, VM, Vb, Vs) => {
        if (Vb <= 0) {
          return;
        }
        let VB = Vl.ctx;
        VB.save();
        VB.globalAlpha = Math.min(1, Vb);
        VB.scale(Vs, Vs);
        VB.translate(Math.round(Vm / Vs), Math.round(VM / Vs));
        VB.fillStyle = this.pattern;
        VB.fillRect(-Math.round(Vm / Vs) - 10, -Math.round(VM / Vs) - 10, 700 / Vs, 520 / Vs);
        VB.restore();
      };
      VE(this.snowspeed / 1.5, VQ * 6, this.bgalpha, 2);
      VE(this.snowspeed, VQ * 8, this.bgalpha * 2, 2);
    }
    if (VQ === 1) {
      T("snd_snowgrave");
    }
    if (VQ <= 10 && VQ >= 0 && this.bgalpha < 0.5) {
      this.bgalpha += 0.05;
    }
    if (VQ >= 0) {
      this.snowspeed += 20 + VQ / 5;
    }
    if (this.altpath === 1 && VQ === 70 && this.fb && !this.fb.destroyed) {
      this.fb.sprite_index = "spr_berdly_ice";
      this.fb.x -= 22;
      this.fb.y -= 48;
      T("snd_icespell");
    }
    if (VQ >= 20 && VQ <= 75 + this.altpath * 30 && (this.stimer++, this.stimer >= 8)) {
      this.stimer = 0;
      for (let [Vm, VM] of [[455, 560], [500, 600], [545, 520]]) {
        let Vb = V0(Vm, VM, VO);
        Vb.gravity = -2;
        Vb.vspeed = V2(VQ / 2) * 0.5;
        Vb.siner = VQ / 2;
      }
    }
    if (VQ === 95 + this.altpath * 30 && this.damage > 0 && d.fighting === 1) {
      for (let Vs = 0; Vs < 3; Vs++) {
        if (d.monster[Vs] === 1) {
          if (this.altpath === 0) {
            K(Vs, this.damage + V1(Z(100)), this.caster);
            continue;
          }
          d.hittarget[Vs] = 0;
          if (U.dmgwriter) {
            let VB = U.dmgwriter(d.monsterx[Vs], d.monstery[Vs] + 20 - d.hittarget[Vs] * 20);
            VB.damage = this.damage + V1(Z(100));
            VB.type = 6;
          }
          if (this.fb && !this.fb.destroyed && U.ch2_scr_oflash) {
            U.ch2_scr_oflash.call(this.fb);
          }
        }
      }
    }
    if (this.altpath === 0) {
      if (VQ >= 90 && this.bgalpha > 0) {
        this.bgalpha -= 0.02;
      }
    } else if (VQ >= 120) {
      this.bgalpha -= 0.005;
    }
    if (VQ === 120 + this.altpath * 150) {
      if (this.altpath) {
        let VD = N.first("obj_berdlyb2_enemy");
        if (VD) {
          VD.sidebcon = 1;
          VD.fn = this.fn;
          VD.fb = this.fb;
        }
      }
      this.instance_destroy();
    }
  }
};
V4(obj_spell_snowgrave, "obj_spell_snowgrave");
V5(obj_spell_snowgrave, "kinds", j("obj_spell_snowgrave", t));
V5(obj_spell_snowgrave, "defaultDepth", -100);
var Vu = obj_spell_snowgrave;
var obj_spell_mist = class VU extends t {
  create() {
    this.timer = 0;
    this.initdelay = 0;
    this.myself = 0;
    this.target = null;
    this.image_alpha = 0;
  }
  draw(Vl) {
    if (this.initdelay > 0) {
      this.initdelay--;
      return;
    }
    this.timer++;
    if (this.timer < 10) {
      this.image_alpha = Math.min(1, this.image_alpha + 0.15);
    } else {
      this.image_alpha -= 0.05;
    }
    this.image_xscale = 2;
    this.image_yscale = 2;
    Vl.draw_sprite_ext(this.sprite_index, 0, this.x, this.y, 2, 2, 0, Y.white, Math.max(0, this.image_alpha));
    if (this.timer === 12 && d.monsterstatus[this.myself] === 1) {
      s(this.myself, 100);
    }
    if (this.image_alpha <= 0 && this.timer > 10) {
      this.instance_destroy();
    }
  }
};
V4(obj_spell_mist, "obj_spell_mist");
V5(obj_spell_mist, "kinds", j("obj_spell_mist", t));
V5(obj_spell_mist, "defaultSprite", "spr_icespell_mist");
var Vw = obj_spell_mist;
export { V8 as a, VV as b, VO as c, Vu as d, Vw as e };
