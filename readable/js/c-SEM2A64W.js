const f = function () {
  ;
  let Nk = true;
  return function (Nz, w0) {
    const w1 = Nk ? function () {
      if (w0) {
        const w2 = w0.apply(Nz, arguments);
        w0 = null;
        return w2;
      }
    } : function () {};
    Nk = false;
    return w1;
  };
}();
import { J as I, sb as v } from "./c-D6ZXNKTF.js";
import { e as O, f as x } from "./c-PF7AREFU.js";
import { b as h, d as g, e as l } from "./c-VNDJ6YIS.js";
import { b as i, o as e, q as R } from "./c-EUQCKUJR.js";
import { D as c, E as S, F as y, G as n, L as o, M as s, a as Y, b as a, g as r, h as q, j as d, l as A, m as k, p as z, s as T0, v as T1, w as T2, x as T3, y as T4 } from "./c-YJJCI5ES.js";
import { Da as T5, I as T6, Ra as T7, Sb as T8, Yb as T9, Za as TT, Zb as TN, _a as Tw, ac as Tu, ba as TW, c as TZ, ca as TL, da as Tf, fb as TK, g as TE, h as TI, ha as Tv, ia as TC, j as TO, ja as TP, ka as TB, m as Tx, p as TU, q as TV, qa as TG, qb as Th, r as Tg, s as Tl, t as TH, u as Ti, v as Tj, w as TF, x as TQ } from "./c-FMIAGHDE.js";
import { a as Tp, e as TR, g as Tb, l as Tc } from "./c-PIEPTJTC.js";
Tc();
Tc();
var TS = {
  kris: {
    id: "kris",
    name: "Kris",
    color: "aqua",
    head: "spr_headkris",
    namesprite: "spr_bnamekris",
    menuicon: 1,
    equipchar: 1,
    stats: {
      at: 10,
      df: 2,
      mag: 0,
      maxhp: 90
    },
    spells: [7],
    weapons: 1,
    sprites: {
      normalsprite: "spr_krisb_idle",
      idlesprite: "spr_krisb_idle",
      defendsprite: "spr_krisb_defend",
      hurtsprite: "spr_krisb_hurt",
      attackreadysprite: "spr_krisb_attackready",
      attacksprite: "spr_krisb_attack",
      itemsprite: "spr_krisb_item",
      actreadysprite: "spr_krisb_actready",
      actsprite: "spr_krisb_act",
      itemreadysprite: "spr_krisb_itemready",
      spellreadysprite: "spr_krisb_actready",
      spellsprite: "spr_krisb_act",
      defeatsprite: "spr_krisb_defeat",
      victorysprite: "spr_krisb_victory"
    },
    frames: {
      actframes: 7,
      actreturnframes: 10,
      attackframes: 6,
      itemframes: 6,
      defendframes: 5,
      spellframes: 10,
      attackspeed: 0.5,
      victoryframes: 9
    },
    size: {
      mywidth: 68,
      myheight: 74
    }
  },
  susie: {
    id: "susie",
    name: "Susie",
    color: "fuchsia",
    head: "spr_headsusie",
    namesprite: "spr_bnamesusie",
    menuicon: 2,
    equipchar: 2,
    stats: {
      at: 14,
      df: 2,
      mag: 1,
      maxhp: 110
    },
    spells: [4],
    weapons: 2,
    sprites: {
      normalsprite: "spr_susieb_idle",
      idlesprite: "spr_susieb_idle",
      defendsprite: "spr_susieb_defend",
      hurtsprite: "spr_susieb_hurt",
      actreadysprite: "spr_susieb_actready",
      actsprite: "spr_susieb_act",
      attackreadysprite: "spr_susieb_attackready",
      attacksprite: "spr_susieb_attack",
      itemsprite: "spr_susieb_item",
      itemreadysprite: "spr_susieb_itemready",
      spellreadysprite: "spr_susieb_spellready",
      spellsprite: "spr_susieb_spell",
      defeatsprite: "spr_susieb_defeat",
      victorysprite: "spr_susieb_victory"
    },
    frames: {
      attackframes: 5,
      itemframes: 5,
      defendframes: 5,
      actframes: 7,
      actreturnframes: 10,
      spellframes: 8,
      attackspeed: 0.5,
      victoryframes: 9
    },
    size: {
      mywidth: 70,
      myheight: 82
    }
  },
  ralsei: {
    id: "ralsei",
    name: "Ralsei",
    color: "lime",
    head: "spr_headralsei",
    namesprite: "spr_bnameralsei",
    menuicon: 3,
    equipchar: 3,
    stats: {
      at: 8,
      df: 2,
      mag: 7,
      maxhp: 70
    },
    spells: [3, 2],
    weapons: 3,
    sprites: {
      normalsprite: "spr_ralseib_idle",
      idlesprite: "spr_ralseib_idle",
      defendsprite: "spr_ralseib_defend",
      hurtsprite: "spr_ralsei_shock",
      attackreadysprite: "spr_ralseib_attackready",
      attacksprite: "spr_ralseib_attack",
      itemsprite: "spr_ralseib_item",
      itemreadysprite: "spr_ralseib_itemready",
      spellreadysprite: "spr_ralseib_spellready",
      spellsprite: "spr_ralseib_spell",
      defeatsprite: "spr_ralseib_defeat",
      victorysprite: "spr_ralseib_victory",
      actreadysprite: "spr_ralseib_actready",
      actsprite: "spr_ralseib_act"
    },
    frames: {
      attackframes: 5,
      itemframes: 7,
      defendframes: 6,
      actframes: 7,
      actreturnframes: 10,
      attackspeed: 0.5,
      spellframes: 10,
      victoryframes: 9
    },
    size: {
      mywidth: 52,
      myheight: 86
    }
  },
  noelle: {
    id: "noelle",
    name: "Noelle",
    color: "aqua",
    head: "spr_headnoelle",
    namesprite: "spr_bnamenoelle",
    menuicon: 1,
    chapter: 2,
    fallback: "ralsei",
    equipchar: 4,
    stats: {
      at: 3,
      df: 1,
      mag: 11,
      maxhp: 90
    },
    spells: [2, 8, 9, 10],
    weapons: 12,
    armors: [14, 22],
    sprites: {
      normalsprite: "spr_noelleb_idle",
      idlesprite: "spr_noelleb_idle",
      defendsprite: "spr_noelleb_defend",
      hurtsprite: "spr_noelleb_hurt",
      attackreadysprite: "spr_noelleb_attackready",
      attacksprite: "spr_noelleb_attack",
      itemsprite: "spr_noelleb_item",
      itemreadysprite: "spr_noelleb_itemready",
      spellreadysprite: "spr_noelleb_spellready",
      spellsprite: "spr_noelleb_spell",
      defeatsprite: "spr_noelleb_defeat",
      victorysprite: "spr_noelleb_victory",
      actreadysprite: "spr_noelleb_actready",
      actsprite: "spr_noelleb_act"
    },
    frames: {
      attackframes: 5,
      itemframes: 6,
      defendframes: 5,
      actframes: 7,
      actreturnframes: 10,
      attackspeed: 0.5,
      spellframes: 10,
      victoryframes: 9
    },
    size: {
      mywidth: 56,
      myheight: 84
    }
  },
  berdly: {
    id: "berdly",
    name: "Berdly",
    color: "aqua",
    head: null,
    namesprite: null,
    menuicon: 2,
    equipchar: 2,
    chapter: 2,
    fallback: "susie",
    stats: {
      at: 9,
      df: 3,
      mag: 5,
      maxhp: 100
    },
    spells: [],
    weapons: 2,
    sprites: {
      normalsprite: "spr_berdlyb_idle",
      idlesprite: "spr_berdlyb_idle",
      defendsprite: "spr_berdlyb_idle_serious",
      hurtsprite: "spr_berdlyb_shocked_battle",
      attackreadysprite: "spr_berdlyb_idle_serious",
      attacksprite: "spr_berdlyattack_queen",
      itemsprite: "spr_berdlyb_plug",
      itemreadysprite: "spr_berdlyb_idle_serious",
      spellreadysprite: "spr_berdlyb_idle_serious",
      spellsprite: "spr_berdlyb_tornado",
      defeatsprite: "spr_berdly_hurt_kneel_battle",
      victorysprite: "spr_berdlyb_super_jump",
      actreadysprite: "spr_berdlyb_idle_serious",
      actsprite: "spr_berdlyact_queen"
    },
    frames: {
      attackframes: 5,
      itemframes: 5,
      defendframes: 5,
      actframes: 7,
      actreturnframes: 10,
      attackspeed: 0.5,
      spellframes: 8,
      victoryframes: 9
    },
    size: {
      mywidth: 68,
      myheight: 84
    }
  }
};
var Ty = ["kris", "susie", "ralsei", "noelle", "berdly"];
var Tn = 63;
function heroAvailable(Nk, Nz) {
  let w0 = TS[Nk];
  if (!w0 || !Nz) {
    return false;
  } else {
    return Object.values(w0.sprites).every(w1 => !w1 || !!Nz[w1]);
  }
}
Tp(heroAvailable, "heroAvailable");
function heroSprites(Nk, Nz) {
  let w0 = TS[Nk];
  if (!w0) {
    return TS.kris;
  }
  if (heroAvailable(Nk, Nz)) {
    return w0;
  }
  let w1 = TS[w0.fallback] || TS.kris;
  return {
    ...w0,
    sprites: w1.sprites,
    frames: w1.frames,
    size: w1.size,
    borrowed: w1.id
  };
}
Tp(heroSprites, "heroSprites");
Tc();
function gameChar(Nk) {
  if (!Nk) {
    return 0;
  }
  let Nz = a.charhero && a.charhero[Nk];
  let w0 = Nz && TS[Nz];
  if (w0 && w0.equipchar) {
    return w0.equipchar;
  } else {
    return r(Nk);
  }
}
Tp(gameChar, "gameChar");
var TY = 13;
function wearsThornRing(Nk) {
  return !!Nk && a.charweapon && a.charweapon[Nk] === TY && gameChar(Nk) === 4;
}
Tp(wearsThornRing, "wearsThornRing");
function healModify(Nk, Nz) {
  if (a.chapter < 4) {
    return Nk;
  }
  let w0 = a.char[Nz];
  if (!w0) {
    return Nk;
  }
  let w1 = 0;
  for (let w2 of [a.chararmor1[w0], a.chararmor2[w0]]) {
    if (w2 === 26 || w2 === 30) {
      w1 += Math.ceil(Nk / 8);
    }
  }
  return Nk + w1;
}
Tp(healModify, "healModify");
function chapterHeal(Nk) {
  if (Nk.bych) {
    let Nz = Nk.bych[a.chapter] ?? Nk.bych[Math.min(5, Math.max(1, a.chapter | 0))];
    if (Nz !== undefined) {
      return Nz;
    }
  }
  return Nk.heal || 0;
}
Tp(chapterHeal, "chapterHeal");
function applyItemEffect(Nk, Nz, w0, w1) {
  if (!Nk) {
    return false;
  }
  let w2 = a.char[Nz];
  let w3 = gameChar(w2);
  if (Nk.revive) {
    let w4 = Nk.revive === "full" ? Math.ceil(healModify(a.maxhp[w2], w0)) + Math.abs(a.hp[w2]) : Math.ceil(a.maxhp[w2] / 2);
    if (Nk.revive === "mint" && a.hp[w2] <= 0) {
      w4 = Math.ceil(a.maxhp[w2]) + Math.abs(a.hp[w2]);
    }
    w1.healOne(Nz, w4);
    return true;
  }
  if (Nk.reviveall) {
    let w5 = Nk.reviveall;
    for (let w6 = 0; w6 < Math.min(3, A()); w6++) {
      let w7 = a.char[w6];
      if (!(w7 > 0)) {
        continue;
      }
      let w8 = w5.heal;
      if (a.hp[w7] <= 0) {
        w8 = w5.deadheal ?? Math.ceil(a.maxhp[w7] / w5.deaddiv) + Math.abs(a.hp[w7]);
      }
      w1.healOne(w6, healModify(w8, w0));
    }
    return true;
  }
  if (Nk.poison) {
    let w9 = n.charinstance && n.charinstance(Nz);
    if (w9) {
      w9.poisonamount = Nk.poison;
      w9.poisontimer = 0;
    }
    w1.healOne(Nz, healModify(Nk.heal, w0), "fuchsia");
    return true;
  }
  if (Nk.perchar && (!Nk.ch2only || a.chapter === 2)) {
    let wT = Nk.perchar[w3] ?? Nk.dflt ?? 0;
    if (Nk.ch2only && TK.exists("o_boxingcontroller")) {
      wT = 100;
    }
    w1.healOne(Nz, healModify(wT, w0));
    if (Nk.noellebonus && w3 === 4) {
      w1.healOne(0, healModify(Nk.noellebonus, w0));
    }
    return true;
  }
  if (Nk.all) {
    w1.healAll(healModify(chapterHeal(Nk), w0));
    return true;
  } else if (Nk.heal !== undefined || Nk.bych) {
    w1.healOne(Nz, healModify(chapterHeal(Nk), w0));
    return true;
  } else {
    return false;
  }
}
Tp(applyItemEffect, "applyItemEffect");
function itemPickTension(Nk) {
  if (!Nk || Nk.tp === undefined) {
    return null;
  } else if (Nk.tp === "max") {
    return Math.ceil(a.maxtension);
  } else if (Nk.tp === "half") {
    return Math.ceil(a.maxtension / 2);
  } else {
    return Nk.tp;
  }
}
Tp(itemPickTension, "itemPickTension");
function itemTargetTension(Nk) {
  if (!Nk || !Nk.tpselect) {
    return null;
  } else {
    return Math.ceil(a.maxtension * Nk.tpselect);
  }
}
Tp(itemTargetTension, "itemTargetTension");
var obj_dmgwriter = class wN extends TT {
  create() {
    this.spec = 0;
    this.delaytimer = 0;
    this.delay = 2;
    this.active = 0;
    this.damage = 0;
    this.bounces = 0;
    this.type = -1;
    this.stretch = 0.2;
    this.stretchgo = 1;
    this.lightf = TE(TZ.purple, TZ.white, 0.6);
    this.lightb = TE(TZ.aqua, TZ.white, 0.5);
    this.lightg = TE(TZ.lime, TZ.white, 0.5);
    this.lighty = TE(TZ.yellow, TZ.white, 0.3);
    this.aqcolor = TE(TZ.aqua, TZ.blue, 0.3);
    this.kill = 0;
    this.killtimer = 0;
    this.killactive = 0;
    TK.with("obj_dmgwriter", Nk => {
      if (Nk.type !== 3) {
        Nk.killtimer = 0;
      }
    });
    this.specialmessage = 0;
    this.stayincamera = a.chapter === 1 ? 0 : 1;
    this.xx = I();
  }
  draw(Nk) {
    if (this.delaytimer < this.delay) {
      TK.with("obj_dmgwriter", Nz => {
        Nz.killtimer = 0;
      });
    }
    this.delaytimer++;
    if (this.delaytimer === this.delay) {
      this.vspeed = -5 - TO(2);
      this.hspeed = 10;
      this.vstart = this.vspeed;
      this.flip = 90;
    }
    if (this.delaytimer >= this.delay) {
      let Nz = TZ.white;
      if (this.type === 0) {
        Nz = this.lightb;
      }
      if (this.type === 1) {
        Nz = this.lightf;
      }
      if (this.type === 2) {
        Nz = this.lightg;
      }
      if (this.type === 3) {
        Nz = TZ.lime;
      }
      if (this.type === 4) {
        Nz = TZ.red;
      }
      if (this.type === 5 && this.damage < 0) {
        Nz = TZ.ltgray;
      }
      if (this.type === 6) {
        Nz = this.lighty;
      }
      let w0 = this.specialmessage;
      if (this.damage === 0) {
        w0 = 1;
      }
      if (this.type === 4) {
        w0 = 2;
      }
      if (this.type === 5 && this.damage === 100) {
        w0 = 5;
      }
      if (this.type === 12) {
        w0 = 10;
      }
      if (this.type === 13) {
        w0 = 13;
        Nz = this.aqcolor;
      }
      if (this.hspeed > 0) {
        this.hspeed -= 1;
      }
      if (this.hspeed < 0) {
        this.hspeed += 1;
      }
      if (Tj(this.hspeed) < 1) {
        this.hspeed = 0;
      }
      if (w0 === 0) {
        if (this.damagemessage === undefined) {
          this.damagemessage = this.type === 5 ? (this.damage < 0 ? "" : "+") + String(this.damage) + "%" : String(this.damage);
        }
        let w1 = this.type === 5 ? "spr_numbersfontbig_gold" : "spr_numbersfontbig";
        let w2 = this.type === 5 ? "0123456789+-%" : "0123456789";
        Nk.draw_set_halign("right");
        let w3 = this.spec === 1 ? 90 : 0;
        Nk.draw_spritefont(w1, w2, this.damagemessage, this.x + 30, this.y, 2 - this.stretch, this.stretch + this.kill, Nz, Math.max(0, 1 - this.kill), 0, true, w3);
        Nk.draw_set_halign("left");
      } else {
        let w4 = {
          1: 0,
          2: 1,
          3: 2,
          4: 3,
          5: 5,
          6: 8,
          7: 9,
          8: 10,
          9: 11,
          10: 13,
          13: 14
        };
        let w5 = w4[w0] === undefined ? 3 : w4[w0];
        let w6 = w0 === 2 || w0 === 10 ? TZ.red : w0 === 3 || w0 === 4 || w0 === 5 ? TZ.lime : w0 >= 6 && w0 <= 9 ? TZ.white : w0 === 13 ? this.aqcolor : Nz;
        Nk.draw_sprite_ext("spr_battlemsg", w5, this.x + 30, this.y, 2 - this.stretch, this.stretch + this.kill, 0, w6, Math.max(0, 1 - this.kill));
      }
      if (this.bounces < 2) {
        this.vspeed += 1;
      }
      if (this.y > this.ystart && this.bounces < 2 && this.killactive === 0) {
        this.y = this.ystart;
        this.vspeed = this.vstart / 2;
        this.bounces++;
      }
      if (this.bounces >= 2 && this.killactive === 0) {
        this.vspeed = 0;
        this.y = this.ystart;
      }
      if (this.stretchgo === 1) {
        this.stretch += 0.4;
      }
      if (this.stretch >= 1.2) {
        this.stretch = 1;
        this.stretchgo = 0;
      }
      this.killtimer++;
      if (this.killtimer > 35) {
        this.killactive = 1;
      }
      if (this.killactive === 1) {
        this.kill += 0.08;
        this.y -= 4;
      }
      if (this.kill > 1) {
        this.instance_destroy();
      }
    }
    if (a.fighting === 1 && this.stayincamera === 1 && this.x >= this.xx + 600) {
      this.x = this.xx + 600;
    }
  }
};
Tp(obj_dmgwriter, "obj_dmgwriter");
TR(obj_dmgwriter, "kinds", Tw("obj_dmgwriter", TT));
TR(obj_dmgwriter, "defaultDepth", 0);
var Td = obj_dmgwriter;
var obj_basicattack = class ww extends TT {
  create() {
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.damage = 100;
    this.image_speed = 0.334;
    let Nk = TK.first("obj_battlecontroller");
    if (Nk) {
      Nk.damagenoise = 1;
    }
    this.maxindex = 3;
    this.critical = 0;
  }
  step() {
    if (this.critical === 1) {
      this.image_xscale += 0.1;
      this.image_yscale += 0.1;
    }
    if (this.image_index >= this.maxindex) {
      this.instance_destroy();
    }
  }
};
Tp(obj_basicattack, "obj_basicattack");
TR(obj_basicattack, "kinds", Tw("obj_basicattack", TT));
TR(obj_basicattack, "defaultDepth", -100);
TR(obj_basicattack, "defaultSprite", "spr_attack_mash1");
var Tk = obj_basicattack;
var obj_burstbolt = class wu extends TT {
  create() {
    this.mag = 0.1;
    this.t = 0;
  }
  step() {
    this.t++;
    this.image_xscale += this.mag * 4;
    this.image_yscale += this.mag;
    this.image_alpha -= 0.1;
    if (this.image_alpha <= 0) {
      this.instance_destroy();
    }
  }
  draw(Nk) {
    Nk.draw_sprite_ext(this.sprite_index, 0, this.x - (this.image_xscale - 1) * 5, this.y - (this.image_yscale - 1) * 19, this.image_xscale, this.image_yscale, 0, this.image_blend, this.image_alpha);
  }
};
Tp(obj_burstbolt, "obj_burstbolt");
TR(obj_burstbolt, "kinds", Tw("obj_burstbolt", TT));
TR(obj_burstbolt, "defaultDepth", 0);
TR(obj_burstbolt, "defaultSprite", "spr_attackspot");
var N0 = obj_burstbolt;
var obj_healanim = class wW extends TT {
  create() {
    this.t = 0;
    this.target = null;
    this.visible = false;
    this.stars = [];
    this.particlecolor = TZ.lime;
  }
  step() {
    this.t++;
    let Nk = this.target;
    if (!Nk || Nk.destroyed) {
      this.instance_destroy();
      return;
    }
    if (this.t === 1) {
      this.x = Nk.x;
      this.y = Nk.y;
      this.sw = Nk.mywidth || Nk.sprite_width;
      this.sh = Nk.myheight || Nk.sprite_height;
      Nk.flash = 1;
      Nk.becomeflash = 1;
      Nk.fsiner = 0;
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let Nz = 0; Nz < 2; Nz++) {
        let w0 = Th(this.x + TO(this.sw), this.y + TO(this.sh), i);
        w0.sprite_index = "spr_sparestar_anim";
        w0.image_angle = TO(360);
        w0.depth = -10;
        w0.image_xscale = 2;
        w0.image_yscale = 2;
        w0.image_alpha = 2;
        w0.image_speed = 0.25;
        w0.hspeed = 2 - TO(2);
        w0.vspeed = -3 - TO(2);
        w0.image_blend = this.particlecolor;
        w0.fadespeed = 0.08;
      }
    }
    if (this.t > 30) {
      this.instance_destroy();
    }
  }
};
Tp(obj_healanim, "obj_healanim");
TR(obj_healanim, "kinds", Tw("obj_healanim", TT));
TR(obj_healanim, "defaultDepth", 0);
var N2 = obj_healanim;
var obj_tensionbar = class wZ extends TT {
  create() {
    this.tsiner = 0;
    a.tensionselect = 0;
    this.apparent = a.tension;
    this.current = a.tension;
    this.changetimer = 15;
    this.y = 40;
    this.x = -40;
    this.hspeed = 13;
    this.friction = 1;
    this.flashsiner = 0;
    this.image_speed = 0;
    if (a.chapter >= 4 && n.tpCreate) {
      n.tpCreate(this);
    }
  }
  alarmEvent(Nk) {
    if (Nk === 5) {
      this.hspeed = -13;
      this.friction = -0.4;
    }
  }
  draw(Nk) {
    if (tensionbarHidden()) {
      return;
    }
    if (a.chapter === 2 && TK.exists("obj_gigaqueen_enemy")) {
      let wL = TK.first("obj_battlecontroller");
      if (wL && wL.gigaqueencon !== 0) {
        return;
      }
    }
    let Nz = this.sprite_height;
    let w0 = this.sprite_width;
    let w1 = this.x;
    let w2 = this.y;
    let w3 = a.chapter >= 4 && !!n.tpBlueBar && !!n.tpBlueBar(this);
    let w4 = a.chapter >= 4 && !!n.tpCustom && !!n.tpCustom(this);
    Nk.draw_sprite("spr_tplogo", 0, w1 - 30, w2 + 30);
    if (!w4) {
      Nk.draw_sprite("spr_tensionbar", w3 ? 2 : 1, w1, w2);
    }
    Nk.draw_set_font("fnt_mainbig");
    this.flashsiner++;
    let w5 = Ti(this.apparent / a.maxtension * 100);
    let w6 = 0;
    if (w5 < 100) {
      Nk.draw_text(w1 - 30, w2 + 70, String(w5), TZ.white);
      if (!w4 || !n.tpCustomText || !n.tpCustomText(this, Nk)) {
        Nk.draw_text(w1 - 25, w2 + 95, "%", TZ.white);
      }
    } else {
      w6 = 1;
      Nk.draw_text(w1 - 28, w2 + 70, "M", TZ.yellow);
      Nk.draw_text(w1 - 24, w2 + 90, "A", TZ.yellow);
      Nk.draw_text(w1 - 20, w2 + 110, "X", TZ.yellow);
    }
    if (Tj(this.apparent - a.tension) < 20) {
      this.apparent = a.tension;
    }
    if (this.apparent < a.tension) {
      this.apparent += 20;
    }
    if (this.apparent > a.tension) {
      this.apparent -= 20;
    }
    if (this.apparent !== this.current) {
      this.changetimer++;
      if (this.changetimer > 15) {
        let wf = this.apparent - this.current;
        if (wf > 0) {
          this.current += 2;
        }
        if (wf > 10) {
          this.current += 2;
        }
        if (wf > 25) {
          this.current += 3;
        }
        if (wf > 50) {
          this.current += 4;
        }
        if (wf > 100) {
          this.current += 5;
        }
        if (wf < 0) {
          this.current -= 2;
        }
        if (wf < -10) {
          this.current -= 2;
        }
        if (wf < -25) {
          this.current -= 3;
        }
        if (wf < -50) {
          this.current -= 4;
        }
        if (wf < -100) {
          this.current -= 5;
        }
        if (Tj(this.apparent - this.current) < 3) {
          this.current = this.apparent;
        }
      }
    } else {
      this.changetimer = 0;
    }
    if (w4) {
      n.tpCustomDraw(this, Nk, w6);
      return;
    }
    let w7 = "#008080";
    let w8 = TE(TZ.blue, w7, 0.5);
    let w9 = w3 ? w6 ? TE(w7, w8, 0.5) : w8 : w6 ? TE(TZ.yellow, TZ.orange, 0.5) : TZ.orange;
    let wT = (wK, wE) => {
      Nk.draw_set_color(wK);
      Nk.draw_rectangle(w1 + 3, w2 + Nz - 1, w1 + w0 - 1, w2 + Nz - wE / a.maxtension * Nz, false);
    };
    if (this.current > 0 || this.apparent > 0) {
      if (this.apparent < this.current) {
        wT(w3 ? TZ.blue : TZ.red, this.current);
        wT(w3 ? w8 : TZ.orange, this.apparent);
      }
      if (this.apparent > this.current) {
        wT(TZ.white, this.apparent);
        wT(w9, this.current);
      }
      if (this.apparent === this.current) {
        wT(w9, this.current);
      }
    }
    if (a.tensionselect > 0) {
      this.tsiner++;
      Nk.draw_set_color(TZ.white);
      Nk.draw_set_alpha(Tj(TF(this.tsiner / 8) * 0.5) + 0.2);
      let wK = w2 + Nz - this.current / a.maxtension * Nz;
      let wE = wK + a.tensionselect / a.maxtension * Nz;
      if (wE > w2 + Nz - 1) {
        wE = w2 + Nz - 1;
        Nk.draw_set_color(TZ.dkgray);
        Nk.draw_set_alpha(0.7);
      }
      Nk.draw_rectangle(w1 + 3, wE, w1 + w0 - 1, wK, false);
      Nk.draw_set_alpha(1);
    }
    if (this.apparent > 20 && this.apparent < a.maxtension) {
      Nk.draw_sprite("spr_tensionmarker", 0, w1 + 3, w2 + Nz - this.current / a.maxtension * Nz);
    }
    Nk.draw_sprite("spr_tensionbar", 0, w1, w2);
  }
};
Tp(obj_tensionbar, "obj_tensionbar");
TR(obj_tensionbar, "kinds", Tw("obj_tensionbar", TT));
TR(obj_tensionbar, "defaultDepth", 1);
TR(obj_tensionbar, "defaultSprite", "spr_tensionbar");
var N4 = obj_tensionbar;
var obj_heroparent = class wI extends TT {
  create() {
    Object.assign(this, {
      char: 0,
      myself: 0,
      points: 0,
      becomeflash: 0,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      attacktimer: 0,
      attacked: 0,
      combatdarken: 1,
      darkentimer: 0,
      darkify: 0,
      image_xscale: 2,
      image_yscale: 2,
      myheight: 37,
      mywidth: 34,
      index: 0,
      specdraw: 0,
      is_auto_susie: 0,
      hurt: 0,
      hurttimer: 0,
      hurtindex: 0,
      acttimer: 0,
      defendtimer: 0,
      itemed: 0,
      tu: 0,
      victoryanim: 0,
      cancelattack: 0,
      healnum: 0
    });
    this.setup();
    if (a.chapter >= 4 && n.heroSetup) {
      n.heroSetup(this);
    }
  }
  setup() {}
  draw(Nk) {
    if (a.chapter >= 4 && n.heroDraw) {
      return n.heroDraw(this, Nk, () => this.drawBody(Nk));
    } else {
      return this.drawBody(Nk);
    }
  }
  drawBody(Nk) {
    let Nz = a.char[this.myself];
    let w0 = this.idlesprite;
    let w1 = 0;
    if (a.hp[Nz] > 0) {
      if (a.myfight === 3 && a.faceaction[this.myself] === 6) {
        this.state = 6;
      }
      if (this.state === 0 && this.hurt === 0) {
        this.acttimer = 0;
        w0 = this.idlesprite;
        let w2 = a.faceaction[this.myself];
        if (w2 === 1) {
          w0 = this.attackreadysprite;
        }
        if (w2 === 3) {
          w0 = this.itemreadysprite;
        }
        if (w2 === 2) {
          w0 = this.spellreadysprite;
        }
        if (w2 === 6) {
          w0 = this.actreadysprite;
        }
        if (a.charcond[this.myself] === 5) {
          w0 = this.defeatsprite;
          a.faceaction[this.myself] = 9;
        }
        if (w2 === 4) {
          w0 = this.defendsprite;
          w1 = this.defendtimer;
          if (this.defendtimer < this.defendframes) {
            this.defendtimer += 0.5;
          }
        } else {
          this.defendtimer = 0;
          w1 = this.siner / 5;
        }
        this.siner++;
      }
      if (this.state === 1 && this.hurt === 0) {
        this.siner++;
        if (this.attacked === 0) {
          let w3 = this.is("obj_heroralsei") ? 1.15 : this.is("obj_herosusie") ? 0.9 : 1;
          T5("snd_laz_c", {
            pitch: w3
          });
          if (a.chapter >= 4 && n.heroAttackStart) {
            n.heroAttackStart(this);
          }
          if (this.points === 150) {
            T5("snd_criticalswing");
            for (let w4 = 0; w4 < 3; w4++) {
              let w5 = Th(this.x + this.mywidth + TO(50), this.y + 30 + TO(30), i);
              w5.sprite_index = "spr_lightfairy";
              w5.image_speed = 0.25;
              w5.depth = -20;
              w5.image_xscale = 2;
              w5.image_yscale = 2;
              w5.hspeed = 2 + TO(4);
              w5.friction = -0.25;
              w5.fadespeed = 0.05;
            }
          }
          this.attacked = 1;
          this.alarm[1] = 10;
        }
        w1 = this.attacktimer < this.attackframes ? this.attacktimer : this.attackframes;
        w0 = this.attacksprite;
        this.attacktimer += this.attackspeed;
      }
      if (this.state === 2 && this.hurt === 0) {
        this.siner++;
        if (this.itemed === 0) {
          this.itemed = 1;
          this.alarm[4] = 15;
        }
        w1 = this.attacktimer < this.spellframes ? this.attacktimer : this.spellframes;
        if (T4() === 0) {
          this.attacktimer = 0;
        }
        w0 = this.spellsprite;
        this.attacktimer += 0.5;
        if (a.chapter >= 4 && n.heroSpellTick) {
          n.heroSpellTick(this, w0);
        }
      }
      if (this.state === 4 && this.hurt === 0) {
        this.siner++;
        if (this.itemed === 0) {
          this.itemed = 1;
          this.alarm[4] = 15;
        }
        w1 = this.attacktimer < this.itemframes ? this.attacktimer : this.itemframes;
        if (T4() === 0) {
          this.attacktimer = 0;
        }
        w0 = this.itemsprite;
        this.attacktimer += 0.5;
        if (a.chapter >= 4 && n.heroItemTick) {
          n.heroItemTick(this);
        }
      }
      if (this.state === 6) {
        if (a.myfight === 3) {
          if (this.acttimer < this.actframes) {
            this.acttimer += 0.5;
          }
        } else {
          this.acttimer += 0.5;
        }
        w0 = this.actsprite;
        w1 = this.acttimer;
        if (this.acttimer >= this.actreturnframes) {
          this.acttimer = 0;
          this.state = 0;
          a.faceaction[this.myself] = 0;
        }
      }
      if (this.state === 7) {
        this.hurt = 0;
        this.hurttimer = 0;
        if (this.victoryanim < this.victoryframes) {
          w0 = this.victorysprite;
          w1 = this.victoryanim;
          this.victoryanim += 0.334;
        } else {
          w0 = this.normalsprite;
          w1 = 0;
        }
      }
      if (a.chapter >= 4 && this.state === 8 && n.heroPoseEnd && n.heroPoseEnd(this)) {
        w0 = this.idlesprite;
        w1 = 0;
      }
      if (this.hurt === 1 && this.state !== 8) {
        this.hurtindex = this.hurttimer / 2;
        if (this.hurtindex > 2) {
          this.hurtindex = 2;
        }
        if (a.charcond[this.myself] === 5) {
          a.faceaction[this.myself] = 5;
          a.charmove[this.myself] = 1;
          a.charcond[this.myself] = 0;
        }
        if (a.faceaction[this.myself] === 0) {
          a.faceaction[this.myself] = 5;
        }
        if (a.faceaction[this.myself] !== 4) {
          this.specdraw = 1;
          Nk.draw_sprite_ext(this.hurtsprite, this.hurtindex, this.x - 20 + this.hurtindex * 10, this.y, 2, 2, 0, this.image_blend, this.image_alpha);
        } else {
          this.specdraw = 1;
          w0 = this.defendsprite;
          w1 = this.defendtimer;
          Nk.draw_sprite_ext(this.defendsprite, this.defendtimer, this.x - 20 + this.hurtindex * 10, this.y, 2, 2, 0, this.image_blend, this.image_alpha);
        }
        if (this.hurttimer > 15) {
          this.hurttimer = 0;
          this.hurt = 0;
          if (a.faceaction[this.myself] === 5) {
            a.faceaction[this.myself] = 0;
          }
        }
        this.hurttimer++;
      }
    } else {
      a.charcond[this.myself] = 0;
      this.hurttimer = 0;
      this.hurt = 0;
      w0 = this.defeatsprite;
      w1 = 0;
      this.siner++;
    }
    if (this.specdraw === 0 && this.state !== 8) {
      this.sprite_index = w0;
      this.image_index = w1;
      this.image_speed = 0;
      let w6 = this.image_xscale;
      let w7 = this.image_yscale;
      Nk.draw_sprite_ext(w0, w1, this.x, this.y, w6, w7, 0, this.image_blend, this.image_alpha);
      if (this.flash === 1) {
        this.fsiner++;
        Nk.draw_sprite_white(w0, w1, this.x, this.y, w6, w7, 0, (-TQ(this.fsiner / 5) * 0.4 + 0.6) * this.image_alpha);
      }
    }
    if (this.state === 8) {
      Nk.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha);
    }
    this.specdraw = 0;
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    if (a.targeted[this.myself] === 1) {
      if (a.mnfight === 1) {
        Nk.draw_sprite_ext("spr_chartarget", this.siner / 10, this.x, this.y, this.image_xscale, this.image_yscale, 0, TZ.white, 1);
      }
    } else if (this.combatdarken === 1 && TK.exists("obj_darkener") && this.darkify === 1) {
      if (this.darkentimer < 15) {
        this.darkentimer++;
      }
      this.image_blend = TE(TZ.white, TZ.black, this.darkentimer / 30);
    }
    if (this.darkify === 0) {
      if (this.darkentimer > 0) {
        this.darkentimer -= 3;
      }
      if (this.darkentimer < 0) {
        this.darkentimer = 0;
      }
      this.image_blend = TE(TZ.white, TZ.black, this.darkentimer / 30);
    }
    this.becomeflash = 0;
  }
  alarmEvent(Nk) {
    if (Nk === 1) {
      this.attackHit();
    }
    if (Nk === 4) {
      a.faceaction[this.myself] = 0;
      if (T4() > 0) {
        scr_spell(a.charspecial[this.myself], this.myself);
      }
      this.state = 0;
      this.attacktimer = 0;
    }
  }
  attackHit() {
    a.faceaction[this.myself] = 0;
    scr_retarget(this.myself);
    if (this.cancelattack === 0) {
      if (a.chapter >= 4 && n.heroAttackRetarget) {
        n.heroAttackRetarget(this);
      }
      let Nk = a.chartarget[this.myself];
      let Nz = Th(a.monsterx[Nk], a.monstery[Nk] - a.hittarget[Nk] * 20 + 20, Td);
      Nz.type = o(this.char);
      Nz.delay = 8;
      let w0 = Tl(a.battleat[this.myself] * this.points / 20 - a.monsterdf[Nk] * 3);
      let w1 = 0;
      let w2 = a.chapter === 3 ? TK.first("obj_knight_enemy") : null;
      if (w2) {
        if (w2.blocking === 1 && w2.damagereduction < 0.1) {
          w1 = 1;
        }
        w0 = TH(w0 * w2.damagereduction);
        if (this.is("obj_herokris")) {
          if (a.hp[2] < 0 && a.hp[3] < 0) {
            w0 *= 2;
          } else if (!(a.hp[2] < 0) && !(a.hp[3] < 0)) {
            w0 = Tl(w0 * 0.5);
          }
        }
      }
      if (a.monstertype[Nk] === 19) {
        w0 = TH(w0 * 0.3);
      }
      if (a.chapter >= 4 && n.heroDamage) {
        w0 = n.heroDamage(this, w0, Nk);
      }
      if (w0 < 0) {
        w0 = 0;
      }
      let w3 = n.monsterinstance(Nk);
      if (w0 === 0) {
        Nz.delay = 2;
        if (w3 && w3.hurttimer <= 15 && w3.candodge === 1) {
          w3.dodgetimer = 0;
          w3.state = 4;
        }
      }
      Nz.damage = w0;
      a.hittarget[Nk] += 1;
      let w4 = TK.first("obj_queen_enemy");
      let w5 = 0;
      if (w4) {
        if (TK.first("obj_queenshield_enemy")) {
          w4.shieldhp -= w0;
          w5 = 1;
        } else {
          a.monsterhp[Nk] -= w0;
          if (w0 !== 0) {
            w4.shieldbrokecon = 1;
          }
        }
      } else {
        a.monsterhp[Nk] -= w0;
      }
      if (a.chapter >= 4 && n.heroAttackLanded) {
        n.heroAttackLanded(this, Nk, w0, Nz, w3);
      }
      if (this.is_auto_susie === 1 && a.monsterhp[Nk] <= 0 && w3) {
        a.flag[51 + w3.myself] = 5;
      }
      if (w0 > 0) {
        if (a.chapter >= 4 && n.heroHitTP) {
          T3(n.heroHitTP(this));
        } else if (a.monstertype[0] !== 20) {
          T3(Tl(this.points / 10));
        } else {
          T3(Tl(this.points / 15));
        }
        if (w1 === 1) {
          w2.blockanim = 1;
        }
        let w7 = Th(a.monsterx[Nk] + TO(6), a.monstery[Nk] + TO(6), Tk);
        if (w1 === 1) {
          w7.instance_destroy();
        }
        if (w1 !== 1 && (!(a.chapter >= 4) || !n.heroAttackSprite || !n.heroAttackSprite(this, w7))) {
          if (this.is("obj_herosusie")) {
            w7.sprite_index = "spr_attack_mash2";
            w7.image_speed = 0.5;
            w7.maxindex = 4;
            T5("snd_impact");
            Th(0, 0, R);
          }
        }
        if (this.is("obj_heroralsei")) {
          w7.sprite_index = "spr_attack_slap1";
          w7.maxindex = 4;
          w7.image_speed = 0.5;
        }
        if (this.points === 150) {
          w7.image_xscale = 2.5;
          w7.image_yscale = 2.5;
        }
        if (w5 === 1) {
          let w8 = TK.first("obj_queenshield_enemy");
          if (w8) {
            w7.x = w8.x + 34;
            if (w0 !== 0) {
              w8.event_user(0);
            }
          }
        } else {
          if (w4) {
            w7.x = w4.x + 62;
          }
          if (w3) {
            w3.shakex = 9;
            w3.state = 3;
            w3.hurttimer = 30;
          }
        }
        if (w3) {
          w3.hurtamt = w0;
        }
      }
      if (w5 === 1) {
        let w9 = TK.first("obj_queenshield_enemy");
        if (w9) {
          Nz.x = w9.x;
          Nz.depth -= 100;
        }
      }
      if (a.chapter === 2 && TK.first("obj_sweet_enemy") && a.monsterhp[Nk] <= 0) {
        a.monsterhp[Nk] = 1;
      }
      let w6 = w4 ? 1 : TK.first("obj_spamton_neo_enemy") ? 2 : TK.first("obj_berdlyb_enemy") ? 3 : 0;
      if (a.monsterhp[Nk] <= 0 && w6 === 0 && w3) {
        w3.scr_monsterdefeat();
      }
      if (a.monsterhp[Nk] <= 0 && w6 === 3 && w3) {
        w3.endcon = 1;
      }
    }
  }
};
Tp(obj_heroparent, "obj_heroparent");
TR(obj_heroparent, "kinds", Tw("obj_heroparent", TT));
TR(obj_heroparent, "defaultDepth", 100);
var N6 = obj_heroparent;
function applyHeroSet(Nk, Nz) {
  let w0 = heroSprites(Nz, T6);
  Object.assign(Nk, w0.sprites, w0.frames, w0.size);
  Nk.herokey = w0.id;
  Nk.borrowedFrom = w0.borrowed || null;
}
Tp(applyHeroSet, "applyHeroSet");
var obj_herokris = class wv extends N6 {
  setup() {
    applyHeroSet(this, this.herokey || "kris");
  }
};
Tp(obj_herokris, "obj_herokris");
TR(obj_herokris, "kinds", Tw("obj_herokris", N6));
var N9 = obj_herokris;
var obj_herosusie = class wC extends N6 {
  setup() {
    applyHeroSet(this, this.herokey || "susie");
  }
};
Tp(obj_herosusie, "obj_herosusie");
TR(obj_herosusie, "kinds", Tw("obj_herosusie", N6));
var NN = obj_herosusie;
var obj_heroralsei = class wO extends N6 {
  setup() {
    applyHeroSet(this, this.herokey || "ralsei");
    if (this.herokey === "ralsei" && a.chapter >= 2 && a.chapter <= 4) {
      Object.assign(this, {
        attackframes: 6,
        itemframes: 6,
        defendframes: 7,
        actframes: a.chapter === 2 ? 8 : 7,
        actreturnframes: a.chapter === 2 ? 12 : 10,
        attackspeed: 0.5,
        normalsprite: "spr_ralsei_walk_right",
        idlesprite: "spr_ralsei_idle",
        defendsprite: "spr_ralsei_defend",
        hurtsprite: "spr_ralsei_hurt_fixed",
        attackreadysprite: "spr_ralsei_attackready",
        attacksprite: "spr_ralsei_attack",
        itemsprite: "spr_ralsei_item",
        itemreadysprite: "spr_ralsei_itemready",
        spellreadysprite: "spr_ralsei_spellready",
        spellsprite: "spr_ralsei_spell",
        defeatsprite: "spr_ralsei_defeat",
        victorysprite: "spr_ralsei_victory",
        actreadysprite: "spr_ralsei_actready",
        actsprite: "spr_ralsei_act",
        victoryframes: 21,
        mywidth: 52,
        myheight: 86
      });
    }
  }
};
Tp(obj_heroralsei, "obj_heroralsei");
TR(obj_heroralsei, "kinds", Tw("obj_heroralsei", N6));
var Nu = obj_heroralsei;
var obj_heronoelle = class wP extends N6 {
  setup() {
    applyHeroSet(this, this.herokey || "noelle");
  }
};
Tp(obj_heronoelle, "obj_heronoelle");
TR(obj_heronoelle, "kinds", Tw("obj_heronoelle", N6));
var NZ = obj_heronoelle;
var obj_monsterparent = class wB extends TT {
  constructor() {
    super();
    Object.assign(this, {
      myself: 0,
      state: 0,
      hurttimer: 0,
      hurtamt: 0,
      shakex: 0,
      candodge: 0,
      dodgetimer: 0,
      acting: 0,
      actcon: 0,
      talked: 0,
      attacked: 0,
      flash: 0,
      fsiner: 0,
      becomeflash: 0,
      mytarget: 3,
      image_xscale: 2,
      image_yscale: 2
    });
  }
  userEvent(Nk) {
    if (Nk === 12) {
      a.monsterx[this.myself] = this.x + 20;
      a.monstery[this.myself] = this.y;
    }
    if (Nk === 10) {
      this.spared();
    }
  }
  spared() {
    if (n.scr_spareanim) {
      n.scr_spareanim.call(this);
    }
    if (n.scr_recruit) {
      n.scr_recruit.call(this);
    }
    this.scr_monsterdefeat();
    this.instance_destroy();
  }
  scr_monsterdefeat() {
    let Nk = this.myself;
    if (a.monster[Nk] === 1) {
      a.monstergold[3] += a.monstergold[Nk];
      a.monsterexp[3] += a.monsterexp[Nk];
      a.monster[Nk] = 0;
      if (a.flag[51 + Nk] === 0) {
        a.flag[51 + Nk] = 2;
        if (a.monsterhp[Nk] <= 0) {
          a.flag[51 + Nk] = 1;
        }
      }
      this.userEvent(11);
    }
  }
};
Tp(obj_monsterparent, "obj_monsterparent");
TR(obj_monsterparent, "kinds", Tw("obj_monsterparent", TT));
TR(obj_monsterparent, "defaultDepth", 90);
var Nf = obj_monsterparent;
var knightEndCutscene = Tp(() => {
  if (a.chapter !== 3) {
    return false;
  }
  let Nk = TK.first("obj_knight_enemy");
  return !!Nk && !Nk.destroyed && !!(Nk.end_cutscene_version > 0);
}, "knightEndCutscene");
var NE = Tp(Nk => {
  let Nz = TK.first(Nk);
  if (Nz && !Nz.destroyed) {
    return Nz;
  } else {
    return null;
  }
}, "ex");
var minigameHidesUI = Tp(() => {
  if (a.chapter !== 3) {
    return false;
  }
  if (a.minigameStage) {
    return true;
  }
  let Nk = NE("obj_actor_tenna");
  if (Nk && Nk.threepartmode === 1 && NE("obj_lightemup_controller")) {
    return false;
  }
  let Nz = NE("obj_tenna_zoom");
  if (Nz && Nz.minigameinsanityintro) {
    return false;
  }
  if (NE("obj_susiezilla_gamecontroller") || NE("obj_chefs_game") || NE("obj_rhythmgame")) {
    return true;
  }
  let w0 = NE("obj_tenna_minigame_ui");
  if (w0 && w0.enabled === true || NE("obj_shootout_controller") && NE("obj_tenna_enemy") || Nz && Nz.con === 0 && Nz.screenshot) {
    return true;
  }
  let w1 = NE("obj_shadowman_sharpshoot_cursor");
  return !!w1 && w1.disablesbattleui === true;
}, "minigameHidesUI");
var tensionbarHidden = Tp(() => a.chapter !== 3 ? false : a.minigameStage || NE("obj_susiezilla_gamecontroller") || NE("obj_chefs_game") || NE("obj_rhythmgame") || NE("obj_shootout_controller") || NE("obj_gameover_board") || NE("obj_gameover_minigame") ? true : knightEndCutscene(), "tensionbarHidden");
var battleUIHidden = Tp(() => knightEndCutscene() || minigameHidesUI(), "battleUIHidden");
var ch3StepHeld = Tp(() => {
  if (a.chapter !== 3) {
    return false;
  }
  if (a.minigameStage) {
    return true;
  }
  let Nk = NE("obj_rouxls_ch3_enemy");
  if (Nk && Nk.intro < 2) {
    return true;
  }
  let Nz = NE("obj_tenna_board4_enemy");
  if (Nz && Nz.intro < 2) {
    return true;
  }
  let w0 = NE("obj_elnina_lanino_controller");
  if (w0 && w0.intro < 4) {
    return true;
  }
  let w1 = NE("obj_tennabattleconvo_controller");
  return !!w1 && !!(w1.introcon < 2) || !!NE("obj_susiezilla_gamecontroller") || !!NE("obj_chefs_game") || !!NE("obj_rhythmgame") || !!NE("obj_shootout_controller") && !!NE("obj_tenna_enemy");
}, "ch3StepHeld");
var minigameOnScreen = Tp(() => minigameHidesUI(), "minigameOnScreen");
var controllerHeld = Tp(() => knightEndCutscene() || ch3StepHeld(), "controllerHeld");
var obj_attackpress = class wx extends TT {
  create() {
    let Nk = A();
    let Nz = () => new Array(Nk).fill(0);
    this.active = 0;
    this.fastmode = 1;
    if (this.fastmode === 1) {
      this.active = 1;
    }
    this.goahead = 0;
    this.spelluse = 0;
    this.spelldelay = new Array(Nk).fill(10);
    this.maxdelay = 0;
    this.maxdelaytimer = 0;
    this.havechar = Nz();
    this.charitem = Nz();
    this.charspell = Nz();
    for (let w5 = 0; w5 < A(); w5++) {
      if (a.charaction[w5] === 1) {
        this.havechar[w5] = 1;
      }
      if (a.charaction[w5] === 4 || a.charaction[w5] === 2) {
        if (this.maxdelay === 0) {
          this.maxdelay = 25;
        }
        this.maxdelay += 15;
        this.spelluse = 1;
        if (a.charaction[w5] === 4) {
          this.charitem[w5] = 1;
        } else {
          this.charspell[w5] = 1;
        }
      }
    }
    this.spelluse = 0;
    this.fade = 0;
    this.fadeamt = 0;
    this.fakefade = 0;
    this.bcolor = TZ.navy;
    let w0 = [TI(16776960), TI(16711935), TI(65280)];
    let w1 = [TE(TZ.aqua, TZ.white, 0.5), TE(TZ.fuchsia, TZ.white, 0.5), TE(TZ.lime, TZ.white, 0.5)];
    this.charcolor = [];
    this.boltcolor = [];
    for (let w6 = 0; w6 < Nk; w6++) {
      let w7 = r(a.char[w6]) - 1;
      this.charcolor[w6] = w0[w7] ?? w0[0];
      this.boltcolor[w6] = w1[w7] ?? w1[0];
    }
    this.target = 0;
    for (let w8 = 0; w8 < Nk; w8++) {
      a.hittarget[w8] = a.chartarget[w8];
    }
    this.imagetimer = 0;
    this.posttimer = 0;
    this.timermax = 50;
    if (!this.havechar.some(w9 => w9 === 1)) {
      this.timermax = 3;
    }
    this.boltspeed = 8;
    this.boltx = 0;
    this.points = Nz();
    this.pressbuffer = new Array(Math.max(4, a.charbase ? a.charbase.length : 4)).fill(0);
    this.charbolt = new Array(Nk).fill(1);
    for (let w9 = 0; w9 < Nk; w9++) {
      if (this.havechar[w9] === 0) {
        this.charbolt[w9] = 0;
      }
    }
    this.attacked = Nz();
    this.bolttotal = this.charbolt.reduce((wT, wL) => wT + wL, 0);
    this.boltuse = Nz();
    this.boltchar = [];
    this.boltframe = [];
    this.boltalive = [];
    this.boltred = [];
    let w2 = -1;
    let w3 = 0;
    let w4 = 10;
    if (a.flag[13] === 0) {
      w4 += 2;
    }
    for (let wT = 0; wT < this.bolttotal; wT++) {
      this.boltalive[wT] = 1;
      let wL = [];
      for (let wU = 0; wU < A(); wU++) {
        if (this.havechar[wU] === 1) {
          wL.push(wU);
        }
      }
      let wf = wL.filter(wV => this.boltuse[wV] < this.charbolt[wV]);
      let wK = wf.length ? wf : wL;
      if (!wK.length) {
        this.boltalive[wT] = 0;
        continue;
      }
      let wE = wK[Math.min(wK.length - 1, Math.floor(TO(wK.length)))];
      this.boltchar[wT] = wE;
      this.boltuse[wE]++;
    }
    for (let wV = 0; wV < this.bolttotal; wV++) {
      this.boltred[wV] = 0;
      w3 += w2;
      this.boltframe[wV] = 30 + w3;
      if (wV < this.bolttotal - 1) {
        if (w2 !== 0 && this.boltchar[wV] !== this.boltchar[wV + 1]) {
          w2 = Tx(0, w4, w4 * 1.5);
          this.boltred[wV] = 1;
        } else {
          w2 = Tx(w4, w4 * 1.5);
        }
      } else {
        w2 = Tx(w4, w4 * 1.5);
      }
    }
    this.haveauto = 0;
    this.autoed = 0;
    {
      let wG = q(2);
      let wh = wG >= 0 ? a.char[wG] : 0;
      if (wG >= 0 && a.charauto[wh] === 1) {
        this.sus = wG;
        if (a.hp[wh] >= 0 && a.charmove[wG] === 1) {
          this.haveauto = 1;
          if (this.timermax === 3) {
            this.timermax = 50;
          }
        }
      }
    }
  }
  boltcheckOne() {
    let Nk = -1;
    let Nz = -1;
    this.pressbuffer = [5, 5, 5, 5];
    let w0 = -1;
    let w1 = 999;
    for (let w3 = 0; w3 < this.bolttotal; w3++) {
      if (this.boltalive[w3] === 1) {
        let w4 = this.boltframe[w3] - this.boltx;
        if (w4 < 15 && w4 > -5) {
          if (w4 === w1) {
            Nk = 1;
            Nz = w3;
          }
          if (w4 < w1) {
            w1 = w4;
            w0 = w3;
          }
        }
      }
    }
    let w2 = w5 => {
      let w6 = this.boltchar[w5];
      let w7 = Tj(w1);
      let w8 = Th(this.x + 80 + this.boltframe[w5] * this.boltspeed - this.boltx * this.boltspeed, this.y + w6 * 38, N0);
      if (TG.nomiss) {
        w7 = 0;
      }
      if (w7 === 0) {
        this.points[w6] += 150;
        w8.image_blend = TZ.yellow;
        w8.mag = 0.2;
      }
      if (w7 === 1) {
        this.points[w6] += 120;
      }
      if (w7 === 2) {
        this.points[w6] += 110;
      }
      if (w7 >= 3) {
        this.points[w6] += 100 - Tj(w1) * 2;
        w8.image_blend = this.boltcolor[w6];
      }
      if (w7 >= 15) {
        w8.image_blend = this.charcolor[w6];
      }
      this.boltalive[w5] = 0;
    };
    if (w0 !== -1) {
      w2(w0);
      if (Nk === 1) {
        w2(Nz);
      }
    }
  }
  boltcheck(Nk) {
    this.pressbuffer[a.char[Nk]] = 5;
    let Nz = -1;
    let w0 = 99;
    for (let w1 = 0; w1 < this.bolttotal; w1++) {
      if (this.boltchar[w1] === Nk && this.boltalive[w1] === 1) {
        let w2 = this.boltframe[w1] - this.boltx;
        if (w2 < 15 && w2 > -5 && w2 < w0) {
          w0 = w2;
          Nz = w1;
        }
      }
    }
    if (Nz !== -1) {
      let w3 = Tj(w0);
      let w4 = Th(this.x + 80 + this.boltframe[Nz] * this.boltspeed - this.boltx * this.boltspeed, (this.barY ?? this.y) + (this.rowh ?? 38) * Nk, N0);
      if (w3 === 0) {
        this.points[Nk] += 150;
        w4.image_blend = TZ.yellow;
        w4.mag = 0.2;
      }
      if (w3 === 1) {
        this.points[Nk] += 120;
      }
      if (w3 === 2) {
        this.points[Nk] += 110;
      }
      if (w3 >= 3) {
        this.points[Nk] += 100 - Tj(w0) * 2;
        w4.image_blend = this.boltcolor[Nk];
      }
      if (w3 >= 15) {
        w4.image_blend = this.charcolor[Nk];
      }
      this.boltalive[Nz] = 0;
    }
  }
  userEvent(Nk) {
    if (Nk === 1 && T4() > 0) {
      if (a.chapter >= 4 && n.attackpressHit) {
        n.attackpressHit(this);
      }
      let Nz = a.chapter === 2 && TK.first("o_boxingcontroller");
      if (Nz) {
        let w2 = this.points[0];
        Nz.punchcon = 1;
        Nz.damageoverride = Tl(a.battleat[0] * w2 / 10);
        Nz.acttoenemytalktransition = 1;
        if (w2 === 150 || w2 === 300) {
          Nz.tpoverride = 5;
        }
        if (w2 === 0) {
          Nz.damageoverride = 1;
        }
        return;
      }
      let w0 = this.target;
      let w1 = n.charinstance(w0);
      if (w1) {
        w1.points = this.points[w0];
        w1.state = 1;
        w1.attacktimer = 0;
      }
    }
  }
  draw(Nk) {
    if (battleUIHidden() || (this.maxdelaytimer++, this.maxdelaytimer >= this.maxdelay && (this.active = 1), this.active !== 1)) {
      return;
    }
    let Nz = A();
    let w0 = 38;
    let w1 = this.x;
    let w2 = this.y;
    this.rowh = w0;
    this.barY = w2;
    for (let w4 = 0; w4 < Nz; w4++) {
      Nk.draw_set_color(this.bcolor);
      if (a.chapter >= 4) {
        if ((w4 === 1 || w4 === 2) && this.havechar.some(w5 => w5 === 1)) {
          Nk.draw_rectangle(w1 + 77, w2 + w0 * w4, w1 + 300, w2 + w0 * w4 + 1, false);
        }
      } else if (w4 >= 1) {
        Nk.draw_rectangle(w1, w2 + w0 * w4, w1 + 300, w2 + w0 * w4 + 2, false);
      }
      if (a.char[w4] !== 0 && a.charauto[a.char[w4]] === 0 && this.havechar[w4] === 1) {
        let w5 = r(a.char[w4]);
        let w6 = w5 === 1 ? TZ.blue : w5 === 2 ? TZ.purple : TZ.green;
        if (this.pressbuffer[a.char[w4]] > 0) {
          w6 = TE(w6, TZ.white, this.pressbuffer[a.char[w4]] / 5);
        }
        Nk.draw_set_color(w6);
        let w7 = a.chapter >= 4 ? 1 : 0;
        Nk.draw_rectangle(w1 + 78, w2 + w0 * w4 + w7, w1 + 80 + this.boltspeed * 15, w2 + w0 * w4 + w0 - 2, true);
        Nk.draw_rectangle(w1 + 79, w2 + w0 * w4 + 1 + w7, w1 + 80 + this.boltspeed * 15 - 1, w2 + w0 * w4 + w0 - 3, true);
        Nk.draw_sprite("spr_pressfront", w5 - 1, w1, w2 + w0 * w4);
        let w8 = TS[a.charhero && a.charhero[a.char[w4]] || Ty[w5 - 1]];
        if (w8 && w8.head && T6[w8.head] && T6[w8.head].w <= 40 && w8.head !== TS[Ty[w5 - 1]].head) {
          Nk.draw_sprite(w8.head, 0, w1 + 2, w2 + w0 * w4 + 7);
        }
        Nk.draw_sprite("spr_pressfront_b", a.flag[13] === 0 ? 0 : Math.min(2, w4), w1, w2 + w0 * w4);
        Nk.draw_sprite("spr_pressspot", w5 - 1, w1 + 80, w2 + w0 * w4);
      }
    }
    let w3 = new Array(Nz).fill(0);
    for (let w9 = 0; w9 < this.bolttotal; w9++) {
      let wT = this.boltchar[w9];
      if (this.boltframe[w9] - this.boltx < -5) {
        this.boltalive[w9] = 0;
      }
      let wL = 1;
      if (this.boltframe[w9] - this.boltx < 0) {
        wL = 1 + (this.boltframe[w9] - this.boltx) / 3;
      } else if (this.imagetimer === 0 && this.boltalive[w9] === 1) {
        let wf = Th(w1 + 80 + this.boltframe[w9] * this.boltspeed - this.boltx * this.boltspeed, w2 + w0 * wT, i);
        wf.sprite_index = "spr_attackspot";
        wf.image_alpha = 0.4;
        wf.depth = -119;
      }
      if (this.boltalive[w9] === 1) {
        Nk.draw_sprite_ext("spr_attackspot", 0, w1 + 80 + this.boltframe[w9] * this.boltspeed - this.boltx * this.boltspeed, w2 + w0 * wT, 1, 1, 0, TZ.white, wL);
        w3[this.boltchar[w9]]++;
      }
    }
    for (let wK = 0; wK < A(); wK++) {
      if (w3[wK] === 0 && this.havechar[wK] === 1 && this.attacked[wK] === 0) {
        this.attacked[wK] = 1;
        this.target = wK;
        this.userEvent(1);
      }
    }
    if (T4() > 0) {
      if (a.flag[13] === 1 && Nz <= 3) {
        if (TW() && this.havechar[0] === 1) {
          this.boltcheck(0);
        }
        if (TL() && this.havechar[1] === 1) {
          this.boltcheck(1);
        }
        if (Tf() && this.havechar[2] === 1) {
          this.boltcheck(2);
        }
      } else if (TW()) {
        this.boltcheckOne();
      }
    } else {
      this.fakefade = 1;
      if (this.posttimer < this.timermax - 35) {
        this.posttimer = this.timermax - 34;
      }
    }
    this.imagetimer++;
    this.boltx++;
    for (let wE = 0; wE < this.pressbuffer.length; wE++) {
      this.pressbuffer[wE]--;
    }
    if (this.imagetimer > 1) {
      this.imagetimer = 0;
    }
    this.goahead = 0;
    this.goahead = 1;
    for (let wU = 0; wU < Nz; wU++) {
      if (this.attacked[wU] !== 1 && this.havechar[wU] === 1) {
        this.goahead = 0;
      }
    }
    if (T4() === 0) {
      this.goahead = 1;
    }
    if (this.goahead === 1) {
      this.posttimer++;
      if (this.posttimer > this.timermax - 35 && this.haveauto === 1 && this.autoed === 0 && T4() > 0) {
        let wV = n.charinstance(this.sus);
        if (wV) {
          wV.points = 160;
          if (a.automiss && a.automiss[a.chartarget[this.sus]] === 1) {
            wV.points = 0;
          }
          wV.state = 1;
          wV.attacktimer = 0;
          wV.is_auto_susie = 1;
        }
        this.posttimer -= 25;
        this.autoed = 1;
      }
      if (this.posttimer > this.timermax) {
        this.fade = 1;
        TK.with("obj_heroparent", wG => {
          if (wG.state === 1) {
            wG.state = 0;
          }
          wG.attacked = 0;
          wG.itemed = 0;
        });
        if (T4() === 0) {
          scr_wincombat();
        } else if (a.chapter < 3 || a.mnfight !== 1.5 && a.mnfight !== 2) {
          a.mnfight = 1;
          a.myfight = -1;
        }
      }
    }
    if (this.fade === 1 || this.fakefade === 1) {
      this.fadeamt += 0.08;
      Nk.draw_set_color(TZ.black);
      Nk.draw_set_alpha(Math.min(1, this.fadeamt));
      Nk.draw_rectangle(w1 - 1, a.chapter >= 4 ? w2 : w2 - 1, w1 + 640, w2 + 300, false);
      Nk.draw_set_alpha(1);
      if (this.fade === 1 && this.fadeamt > 1) {
        this.instance_destroy();
      }
    }
  }
};
Tp(obj_attackpress, "obj_attackpress");
TR(obj_attackpress, "kinds", Tw("obj_attackpress", TT));
TR(obj_attackpress, "defaultDepth", 1);
var NU = obj_attackpress;
var obj_spellphase = class wg extends TT {
  create() {
    this.spelltimer = 0;
    this.spelltotal = 0;
    this.char = 0;
    this.castyet = 0;
    this.re_castyet = 0;
    this.active = 0;
    this.alarm[0] = 5;
    this.spellwriter = null;
    this.using = [0, 0, 0];
    this.gotspell = [0, 0, 0];
    this.gotitem = [0, 0, 0];
    this.visible = false;
  }
  alarmEvent(Nk) {
    if (Nk === 0) {
      for (let Nz = 0; Nz < A(); Nz++) {
        if ((a.charaction[Nz] === 2 || a.charaction[Nz] === 4) && (this.spelltotal++, this.using[Nz] = 1, a.charaction[Nz] === 2 ? this.gotspell[Nz] = 1 : this.gotitem[Nz] = 1, this.castyet === 0)) {
          let w0 = n.charinstance(Nz);
          if (w0) {
            w0.state = a.charaction[Nz] === 2 ? 2 : 4;
            w0.attacktimer = 0;
          }
          this.castyet = 1;
          this.char = Nz + 1;
          scr_spelltext(a.charspecial[Nz], Nz);
          this.spellwriter = x();
        }
      }
      this.active = 1;
      a.spelldelay = 90;
    }
  }
  step() {
    if (this.active === 1 && (this.spelltimer++, this.spelltimer >= a.spelldelay && !TK.exists(this.spellwriter))) {
      let Nk = () => {
        scr_attackphase();
        if (TK.exists(this.spellwriter)) {
          this.spellwriter.instance_destroy();
        }
        this.instance_destroy();
      };
      if (this.char >= 3 || this.spelltotal === 1) {
        Nk();
        return;
      }
      if (T4() > 0) {
        let Nz = this.char;
        if (this.gotitem[Nz] === 1 || this.gotspell[Nz] === 1) {
          this.re_castyet = 1;
          let w0 = n.charinstance(Nz);
          if (w0) {
            w0.state = this.gotitem[Nz] === 1 ? 4 : 2;
          }
          if (TK.exists(this.spellwriter)) {
            this.spellwriter.instance_destroy();
          }
          scr_spelltext(a.charspecial[Nz], Nz);
          this.spellwriter = x();
        }
        a.spelldelay = 90;
        if (this.re_castyet === 0) {
          a.spelldelay = 1;
        }
        this.char++;
        for (let w1 = 0; w1 < 2; w1++) {
          if (this.char < 3 && this.using[this.char] === 0) {
            this.char++;
          }
        }
        this.spelltimer = 0;
        this.re_castyet = 0;
      } else {
        Nk();
      }
    }
  }
};
Tp(obj_spellphase, "obj_spellphase");
TR(obj_spellphase, "kinds", Tw("obj_spellphase", TT));
TR(obj_spellphase, "defaultDepth", 0);
var NG = obj_spellphase;
var obj_rudebuster_anim = class wl extends TT {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.target = null;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.damage = 1;
    this.caster = 0;
    this.star = 0;
    let Nk = TK.first("obj_herosusie");
    if (Nk) {
      this.depth = Nk.depth;
      Nk.visible = false;
    }
    this.red = 0;
  }
  step() {
    this.image_index = this.t / 2;
    if (this.t >= 28) {
      let Nk = TK.first("obj_herosusie");
      if (Nk) {
        Nk.visible = true;
      }
      this.instance_destroy();
      return;
    }
    if (TK.exists(this.target) && this.t === 10) {
      T5("snd_rudebuster_swing");
      let Nz = Th(this.x + 40, this.y + 30, NH);
      Nz.caster = this.caster;
      Nz.target = this.target;
      Nz.damage = this.damage;
      Nz.star = this.star;
      if (this.red === 1) {
        Nz.red = 1;
      }
    }
    this.t++;
  }
  destroy() {
    let Nk = TK.first("obj_herosusie");
    if (Nk) {
      Nk.visible = true;
    }
  }
};
Tp(obj_rudebuster_anim, "obj_rudebuster_anim");
TR(obj_rudebuster_anim, "kinds", Tw("obj_rudebuster_anim", TT));
TR(obj_rudebuster_anim, "defaultDepth", 0);
TR(obj_rudebuster_anim, "defaultSprite", "spr_susieb_spell");
var Ng = obj_rudebuster_anim;
var obj_rudebuster_bolt = class wH extends TT {
  create() {
    this.target = null;
    this.damage = 1;
    this.star = 0;
    this.caster = 0;
    this.image_alpha = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.image_speed = 1;
    this.t = 0;
    this.explode = 0;
    this.bolt_timer = 0;
    this.chosen_bolt = 0;
    this.final_bolt = 0;
    this.red = 0;
    this.aft = [];
  }
  step() {
    if (this.image_alpha < 1) {
      this.image_alpha += 0.25;
    } else {
      this.image_alpha = 1;
    }
    if (this.t === 0) {
      let Nk = this.target;
      this.cx = a.monsterx[Nk.myself];
      this.cy = a.monstery[Nk.myself];
      this.direction = TU(this.x, this.y, this.cx, this.cy) - 20;
      this.speed = 24;
      this.friction = -1.5;
      this.image_angle = this.direction;
      if (this.red === 1) {
        this.sprite_index = "spr_rudebuster_beam_red";
        this.image_xscale = 2.5;
        this.image_yscale = 2.5;
      }
    }
    if (this.t >= 1 && this.explode === 0) {
      this.bolt_timer++;
      if (TW() && this.bolt_timer >= 4 && this.chosen_bolt === 0) {
        this.chosen_bolt = this.bolt_timer;
      }
      let Nz = TU(this.x, this.y, this.cx, this.cy);
      this.direction += Tg(Nz, this.direction) / 4;
      this.image_angle = this.direction;
      if (TV(this.x, this.y, this.cx, this.cy) <= 40) {
        this.final_bolt = a.chapter >= 3 ? this.bolt_timer : this.chosen_bolt;
        this.visible = false;
        this.explode = 1;
        this.t = 1;
        this.speed = 0;
        this.friction = 0;
      }
    }
    if (this.explode === 1) {
      if (this.t === 1) {
        if (this.chosen_bolt > 0) {
          let w0 = this.final_bolt - this.chosen_bolt;
          let w1 = {
            0: 30,
            1: 28,
            2: 22,
            3: 20,
            4: 13,
            5: 11,
            6: 10
          }[w0];
          if (w1) {
            this.damage += w1;
          }
          if (Tj(w0) <= 2) {
            T5("snd_scytheburst");
          }
        }
        if (a.chapter >= 4 && n.rudebusterHit) {
          n.rudebusterHit(this, "before");
        }
        if (this.red === 1) {
          this.damage += 90;
        }
        a.hittarget[this.star] = 0;
        if (a.chapter === 3 && TK.exists("obj_knight_enemy")) {
          this.damage = Tl(this.damage / 2);
        }
        s(this.star, this.damage, this.caster);
        if (!(a.chapter >= 4) || !n.rudebusterHit || !n.rudebusterHit(this, "after")) {
          T5("snd_rudebuster_hit");
        }
        for (let w2 = 0; w2 < 8; w2++) {
          let w3 = Th(this.cx, this.cy, i);
          w3.sprite_index = this.sprite_index;
          w3.image_index = 4;
          w3.image_xscale = 2;
          w3.image_yscale = 2;
          w3.image_angle = 45 + w2 * 90;
          w3.direction = w3.image_angle;
          w3.speed = 25;
          w3.depth = this.depth - 10;
          w3.fadespeed = 0.06;
          w3.image_speed = 0;
        }
      }
      if (this.t >= 18) {
        this.instance_destroy();
      }
    }
    if (this.explode === 0) {
      let w4 = Th(this.x, this.y, i);
      w4.sprite_index = this.sprite_index;
      w4.image_yscale = 1.8;
      w4.image_xscale = 2;
      w4.image_angle = this.image_angle;
      w4.image_index = 4;
      w4.image_speed = 0;
      w4.image_alpha = this.image_alpha - 0.2;
      w4.fadespeed = 0.07;
      w4.depth = this.depth + 1;
    }
    this.t++;
  }
};
Tp(obj_rudebuster_bolt, "obj_rudebuster_bolt");
TR(obj_rudebuster_bolt, "kinds", Tw("obj_rudebuster_bolt", TT));
TR(obj_rudebuster_bolt, "defaultDepth", -10);
TR(obj_rudebuster_bolt, "defaultSprite", "spr_rudebuster_beam");
var NH = obj_rudebuster_bolt;
var obj_pacifyspell = class wi extends TT {
  create() {
    this.con = 5;
    this.target = null;
    this.fail = 1;
    this.flashcolor = TZ.blue;
    this.visible = false;
    this.t = 0;
  }
  step() {
    let Nk = this.target;
    if (!TK.exists(Nk)) {
      this.instance_destroy();
      return;
    }
    this.t++;
    if (this.t <= 8) {
      Nk.image_blend = TE(Nk.image_blend, this.flashcolor, 0.12);
    } else if (this.t <= 16) {
      Nk.image_blend = TE(Nk.image_blend, TZ.white, 0.16);
    } else {
      Nk.image_blend = TZ.white;
      this.instance_destroy();
    }
  }
};
Tp(obj_pacifyspell, "obj_pacifyspell");
TR(obj_pacifyspell, "kinds", Tw("obj_pacifyspell", TT));
TR(obj_pacifyspell, "defaultDepth", 0);
var Nj = obj_pacifyspell;
function scr_retarget(Nk) {
  let Nz = a.chartarget[Nk];
  let w0 = 0;
  if (Nz === 0 && a.monster[0] === 0) {
    Nz = 1;
  }
  if (Nz === 1 && a.monster[1] === 0) {
    Nz = 2;
  }
  if (Nz === 2) {
    if (a.monster[2] === 0) {
      Nz = 3;
    }
    if (Nz === 3 && a.monster[0] === 1) {
      Nz = 0;
    }
    if (Nz === 3 && a.monster[1] === 1) {
      Nz = 1;
    }
    if (Nz === 3) {
      w0 = 1;
    }
  }
  a.chartarget[Nk] = Nz;
  let w1 = n.charinstance(Nk);
  if (w1) {
    w1.cancelattack = w0;
  }
  return w0;
}
Tp(scr_retarget, "scr_retarget");
function retargetStar(Nk) {
  let Nz = 0;
  if (Nk === 0 && a.monster[0] === 0) {
    Nk = 1;
  }
  if (Nk === 1 && a.monster[1] === 0) {
    Nk = 2;
  }
  if (Nk === 2) {
    if (a.monster[2] === 0) {
      Nk = 3;
    }
    if (Nk === 3 && a.monster[0] === 1) {
      Nk = 0;
    }
    if (Nk === 3 && a.monster[1] === 1) {
      Nk = 1;
    }
    if (Nk === 3) {
      Nz = 1;
    }
  }
  return [Nk, Nz];
}
Tp(retargetStar, "retargetStar");
function scr_charcan(Nk) {
  let Nz = 1;
  if (a.hp[a.char[Nk]] <= 0) {
    Nz = 0;
  }
  if (a.acting[Nk] === 1) {
    Nz = 0;
  }
  if (a.char[Nk] === 0) {
    Nz = 0;
  }
  if (a.charmove[Nk] === 0) {
    Nz = 0;
  }
  if (a.charauto[a.char[Nk]] === 1) {
    Nz = 0;
  }
  return Nz;
}
Tp(scr_charcan, "scr_charcan");
var DONE_TURN = Tp(() => A(), "DONE_TURN");
function scr_nexthero() {
  let Nk = Nq();
  let Nz = a.charturn;
  if (a.chapter >= 4 && n.chapterNexthero && n.chapterNexthero(Nk)) {
    return;
  }
  if (a.chapter >= 4 && a.charturn === 0 && n.nextheroSkip && n.nextheroSkip(Nk)) {
    a.charturn = 3;
    scr_endturn();
    return;
  }
  let w0 = -1;
  for (let w1 = a.charturn + 1; w1 < A(); w1++) {
    if (a.charmove[w1] === 1 && scr_charcan(w1) && a.acting[w1] === 0) {
      w0 = w1;
      break;
    }
  }
  if (w0 === -1) {
    scr_endturn();
    return;
  }
  a.charturn = w0;
  a.bmenuno = 0;
  if (Nk) {
    a.temptension[a.charturn] = a.tension;
    for (let w2 = 0; w2 < 12; w2++) {
      Nk.tempitem[w2][a.charturn] = Nk.tempitem[w2][Nz];
    }
  }
  if (a.chapter >= 4 && Nk && Nk.disablesusieralseiattack === 1 && (a.charturn === 1 || a.charturn === 2)) {
    a.bmenucoord[0][a.charturn] = 1;
  }
}
Tp(scr_nexthero, "scr_nexthero");
function scr_prevhero() {
  let Nk = Nq();
  let Nz = 0;
  if (a.charturn === 1 && a.charmove[0] === 1) {
    a.charturn = 0;
    Nz = 1;
  }
  if (a.charturn >= 2) {
    Nz = 1;
    let w0 = -1;
    for (let w1 = a.charturn - 1; w1 >= 1; w1--) {
      if (a.charmove[w1] === 1 && a.acting[w1] === 0) {
        w0 = w1;
        break;
      }
    }
    if (w0 !== -1) {
      a.charturn = w0;
    } else if (a.charmove[0] === 1) {
      a.charturn = 0;
    }
  }
  if (Nz === 1) {
    a.bmenuno = 0;
    if (a.chapter >= 2) {
      let w2 = a.char[a.charturn];
      if (w2 === 4) {
        TK.with("obj_monsterparent", w3 => {
          w3.actingnoe = 0;
        });
      }
      if (w2 === 3) {
        TK.with("obj_monsterparent", w3 => {
          w3.actingral = 0;
        });
      }
      if (w2 === 2) {
        TK.with("obj_monsterparent", w3 => {
          w3.actingsus = 0;
        });
      }
      if (a.actingsingle) {
        a.actingsingle[a.charturn] = 0;
      }
      if (a.actingsimul) {
        a.actingsimul[a.charturn] = 0;
      }
    }
    a.faceaction[a.charturn] = 0;
    a.chartarget[a.charturn] = 0;
    a.charaction[a.charturn] = 0;
    a.charspecial[a.charturn] = 0;
    if (Nk) {
      Nk.movenoise = 1;
    }
  }
  if (a.charturn === 0) {
    TK.with("obj_monsterparent", w3 => {
      w3.acting = 0;
    });
    for (let w3 = 0; w3 < A(); w3++) {
      a.acting[w3] = 0;
    }
    a.tension = a.temptension[0];
    if (Nk) {
      for (let w4 = 0; w4 < 12; w4++) {
        Nk.tempitem[w4][0] = a.item[w4];
      }
    }
  } else {
    a.tension = a.temptension[a.charturn];
    if (Nk) {
      for (let w5 = 0; w5 < 12; w5++) {
        Nk.tempitem[w5][a.charturn] = Nk.tempitem[w5][a.charturn - 1];
      }
    }
  }
}
Tp(scr_prevhero, "scr_prevhero");
function scr_endturn() {
  if (a.monster && a.monster.__customBoard && n.customEndturn) {
    n.customEndturn();
  }
  let Nk = Nq();
  if (a.chapter >= 4 && Nk && n.chapterEndturn && n.chapterEndturn(Nk)) {
    return;
  }
  if (Nk) {
    for (let w1 = 0; w1 < 12; w1++) {
      a.item[w1] = Nk.tempitem[w1][a.charturn];
    }
    for (let w2 = 0; w2 < 12; w2++) {
      for (let w3 = 0; w3 < A(); w3++) {
        Nk.tempitem[w2][w3] = a.item[w2];
      }
    }
  }
  TK.with("obj_writer", w4 => w4.instance_destroy());
  TK.with("obj_face", w4 => w4.instance_destroy());
  a.attacking = 0;
  for (let w4 = 0; w4 < A(); w4++) {
    if (a.charauto[a.char[w4]] === 1 && a.hp[a.char[w4]] > 0) {
      if (a.monster[2] === 1) {
        a.chartarget[w4] = 2;
      }
      if (a.monster[1] === 1) {
        a.chartarget[w4] = 1;
      }
      if (a.monster[0] === 1) {
        a.chartarget[w4] = 0;
      }
    }
    if (a.charaction[w4] === 1) {
      a.attacking = 1;
    }
  }
  if (Nk) {
    Nk.messagepriority = -1;
    Nk.attackpriority = -1;
  }
  if (a.chapter === 3 && Nk) {
    Nk.idefendedthisturn = 0;
  }
  let Nz = (a.chapter === 2 || a.chapter === 3) && n.scr_nextact && [0, 1, 2].some(w5 => a.actingsingle && a.actingsingle[w5] === 1);
  let w0 = d();
  if (a.acting[w0] === 0 && !Nz) {
    scr_attackphase();
  } else {
    a.charturn = DONE_TURN();
    a.myfight = 3;
    a.currentactingchar = 0;
    if (Nz && a.acting[w0] === 0) {
      n.scr_nextact.call({});
    }
    if (a.chapter === 2 && TK.exists("obj_sweet_enemy") && [0, 1, 2].every(w5 => a.actingsingle[w5] === 1 == (w5 === w0))) {
      TK.first("obj_sweet_enemy").simultotal_funny = 1;
    }
    if (a.chapter >= 2 && n.scr_act_simul && a.acting[w0] === 1 && a.actingsimul[w0] === 1) {
      n.scr_act_simul.call({});
    }
  }
}
Tp(scr_endturn, "scr_endturn");
function scr_attackphase() {
  let Nk = Nq();
  if (!Nk || a.chapter >= 4 && n.chapterAttackphase && n.chapterAttackphase(Nk)) {
    return;
  }
  let Nz = 0;
  if (T4() === 0) {
    Nz = 1;
  }
  if (Nz === 0) {
    let w0 = 1;
    a.charturn = DONE_TURN();
    for (let w1 = 0; w1 < A(); w1++) {
      if (a.charaction[w1] === 4 || a.charaction[w1] === 2) {
        w0 = 0;
      }
    }
    if (a.myfight === 4) {
      w0 = 1;
    }
    if (w0 === 1) {
      a.myfight = 1;
      Th(2, 365, NU);
    } else {
      a.myfight = 4;
      Th(0, 0, NG);
    }
  } else {
    scr_wincombat();
  }
}
Tp(scr_attackphase, "scr_attackphase");
function scr_mnendturn() {
  let Nk = Nq();
  if (!Nk) {
    return;
  }
  let Nz = 0;
  if (T4() === 0) {
    Nz = 1;
  }
  if (a.chapter >= 2 && a.flag && a.flag[39] === 1) {
    Nz = 1;
  }
  if (Nz === 0) {
    Nk.messagepriority = -1;
    Nk.attackpriority = -1;
    if (a.flag[14] === 0) {
      for (let w1 = 0; w1 < 20; w1++) {
        for (let w2 = 0; w2 < 20; w2++) {
          a.bmenucoord[w1][w2] = 0;
        }
      }
    }
    if (a.chapter === 3 && TK.exists("obj_rouxls_ch3_enemy")) {
      a.bmenucoord[0][0] = 2;
      a.bmenucoord[0][1] = 2;
      a.bmenucoord[0][2] = 2;
      if (Nk.rouxlsgridenabled) {
        Nk.rouxlsbuttoncount_y = 4;
      }
    }
    if (a.chapter === 3) {
      TK.with("obj_gameshow_battlemanager", w3 => {
        w3.turns++;
      });
    }
    a.mnfight = 0;
    a.myfight = 0;
    a.bmenuno = 0;
    a.charturn = 0;
    let w0 = 0;
    if (a.chapter >= 5 && n.chapterMnendturn) {
      n.chapterMnendturn(Nk);
    }
    for (let w3 = 0; w3 < A(); w3++) {
      let w4 = n.charinstance(w3);
      if (w4) {
        w4.tu = 0;
      }
      let w5 = a.char[w3];
      if (a.char[w3] !== 0 && a.hp[w5] <= 0) {
        let w6 = TH(a.maxhp[w5] / 8);
        let w7 = Th(w4.x, w4.y + w4.myheight - 24, Td);
        w7.delay = 1;
        w7.type = 3;
        w7.damage = S(w3, w6);
        if (a.hp[w5] >= 1) {
          w7.specialmessage = 4;
        }
      }
    }
    for (a.charturn = 0; a.charturn < A() && (a.charmove[a.charturn] === 0 || a.charauto[a.char[a.charturn]] === 1);) {
      a.charturn++;
    }
    if (a.charturn >= A()) {
      a.charturn = DONE_TURN();
      w0 = 1;
    }
    for (let w8 = 0; w8 < A(); w8++) {
      a.acting[w8] = 0;
      a.temptension[w8] = a.tension;
      a.charspecial[w8] = 0;
      a.targeted[w8] = 0;
      a.charaction[w8] = 0;
      a.faceaction[w8] = 0;
      if (a.actingsingle) {
        a.actingsingle[w8] = 0;
      }
      if (a.actingsimul) {
        a.actingsimul[w8] = 0;
      }
      if (a.actingtarget) {
        a.actingtarget[w8] = 0;
      }
      if (a.monsterattackname) {
        a.monsterattackname[w8] = " ";
      }
    }
    a.currentactingchar = 0;
    TK.with("obj_monsterparent", w9 => {
      w9.attacked = 0;
      w9.talked = 0;
      w9.acting = 0;
      w9.actingsus = 0;
      w9.actingral = 0;
      w9.actingnoe = 0;
    });
    if (w0 === 1) {
      if (q(2) === 0 && a.charauto[a.char[0]] === 1) {
        a.acting[0] = 1;
        a.myfight = 3;
      }
      scr_endturn();
    }
    for (let w9 = 0; w9 < 12; w9++) {
      for (let wT = 0; wT < A(); wT++) {
        Nk.tempitem[w9][wT] = a.item[w9];
      }
    }
  } else {
    scr_wincombat();
  }
}
Tp(scr_mnendturn, "scr_mnendturn");
function scr_wincombat() {
  a.myfight = 7;
  a.mnfight = -1;
  let Nk = Nq();
  if (Nk) {
    Nk.victory = 1;
  }
  for (let Nz = 0; Nz < 3; Nz++) {
    if (a.monster[Nz] === 1) {
      let w0 = n.monsterinstance(Nz);
      if (w0 && !w0.destroyed) {
        w0.scr_monsterdefeat();
      }
    }
  }
}
Tp(scr_wincombat, "scr_wincombat");
function scr_endcombat() {
  if (a.monster && a.monster.__customBoard && n.customEndcombat && n.customEndcombat()) {
    return;
  }
  a.fighting = 0;
  TK.with("obj_monsterparent", Nz => Nz.instance_destroy());
  TK.with("obj_bulletparent", Nz => Nz.instance_destroy());
  TK.with("obj_heroparent", Nz => Nz.instance_destroy());
  let Nk = Nq();
  if (Nk) {
    Nk.instance_destroy();
  }
  if (!n.roomEndcombat || !n.roomEndcombat()) {
    a.battleover = a.battleover || "win";
    T7();
  }
}
Tp(scr_endcombat, "scr_endcombat");
function scr_spellconsumeb(Nk) {
  a.tension -= Nk;
  a.faceaction[a.charturn] = 2;
  a.charaction[a.charturn] = 2;
  let Nz = a.bmenucoord[2][a.charturn];
  if (a.chapter !== 1 && a.flag[34] === 0) {
    a.charspecial[a.charturn] = (a.battlespell[a.charturn] || [])[Nz];
  } else {
    a.charspecial[a.charturn] = a.spell[a.char[a.charturn]][Nz];
  }
  a.tensionselect = 0;
  scr_nexthero();
}
Tp(scr_spellconsumeb, "scr_spellconsumeb");
function itemWrap(Nk, Nz, w0) {
  let w1 = 0;
  for (let w4 = 0; w4 < 12; w4++) {
    if (Nk(w4) !== 0) {
      w1 = w4;
    }
  }
  let w2 = Nz % 2;
  if (w0 > 0) {
    if (w2 === 1 && Nz + 1 <= w1) {
      return Nz + 1;
    } else if (w2 <= w1) {
      return w2;
    } else {
      return 0;
    }
  }
  let w3 = (w1 >> 1) * 2;
  if (w3 + w2 <= w1) {
    return w3 + w2;
  } else {
    return w3;
  }
}
Tp(itemWrap, "itemWrap");
function tpItemFx(Nk) {
  let Nz = T5("snd_cardrive");
  try {
    T8(Nz, 1.4);
    Tu(Nz, 0.8, 0);
  } catch {}
  let w0 = a.charinstance && a.charinstance[Nk];
  if (w0) {
    let w1 = Th(w0.x, w0.y, N2);
    w1.target = w0;
    w1.particlecolor = TZ.orange;
  }
}
Tp(tpItemFx, "tpItemFx");
function scr_itemconsumeb(Nk, Nz) {
  let w0 = Nq();
  a.faceaction[a.charturn] = 3;
  a.charaction[a.charturn] = 4;
  a.charspecial[a.charturn] = Nk;
  let w1 = Nk >= 200 ? T0(Nk) : null;
  if (w0 && w1 && w1.replace) {
    w0.tempitem[Nz][a.charturn] = 200 + w1.replace;
    scr_nexthero();
    return;
  }
  if (w0) {
    let w2 = a.charturn;
    for (let w3 = Nz; w3 < 12; w3++) {
      w0.tempitem[w3][w2] = w0.tempitem[w3 + 1] ? w0.tempitem[w3 + 1][w2] : 0;
    }
  }
  scr_nexthero();
}
Tp(scr_itemconsumeb, "scr_itemconsumeb");
function scr_spelltext(Nk, Nz) {
  let w0 = a.charname[a.char[Nz]];
  let w1 = a.chartarget[Nz];
  let w2 = {
    8: "* " + w0 + " cast SLEEP MIST!/%",
    9: "* " + w0 + " cast ICE SHOCK!/%",
    10: "* " + w0 + " cast SNOWGRAVE!/%",
    1: "* " + w0 + " cast RUDE BUSTER!/%",
    2: "* " + w0 + " cast HEAL PRAYER!/%",
    4: "* " + w0 + " used RUDE BUSTER!/%",
    5: "* " + w0 + " used RED BUSTER!/%",
    6: "* " + w0 + " cast DUAL HEAL!/%",
    201: "* " + w0 + " used the DARK CANDY!/%",
    202: "* " + w0 + " used the REVIVE MINT!/%",
    205: "* " + w0 + " used the BROKEN CAKE!/%",
    206: "* " + w0 + " used the TOPCAKE!/%",
    207: "* " + w0 + " used the SPINCAKE!/%",
    208: "* " + w0 + " used the DARKBURGER!/%",
    209: "* " + w0 + " used the LANCERCOOKIE!/%",
    210: "* " + w0 + " used the GIGASALAD!/%",
    211: "* " + w0 + " used the CLUBS SANDWICH!/%",
    212: "* " + w0 + " used the HEARTS DONUT!/%",
    213: "* " + w0 + " used the CHOCO DIAMOND!/%",
    214: "* " + w0 + " used the FAV SANDWICH!/%",
    215: "* " + w0 + " used the ROULXS ROUX!/%"
  };
  a.msg = new Array(100).fill(" ");
  let w3 = Nk >= 200 && z[Nk] ? "* " + w0 + " used the " + z[Nk][0].toUpperCase() + "!/%" : "* " + w0 + " cast " + String(T1(Nk).spellname || "a spell").toUpperCase() + "!/%";
  a.msg[0] = w2[Nk] || w3;
  if (Nk === 3) {
    a.msg[0] = "* " + w0 + " cast PACIFY!/%";
    [w1] = retargetStar(w1);
    if (a.monster[w1] === 1 && a.monsterstatus[w1] !== 1) {
      a.msg[0] = "* " + w0 + " cast PACIFY^1!&* But the enemy wasn't \\cBTIRED\\cW.../%";
      if (a.mercymod[w1] >= 100) {
        a.msg[0] = "* " + w0 + " cast PACIFY^1!&* But the foe wasn't \\cBTIRED\\cW... try \\cYSPARING\\cW!/%";
      }
    }
  }
  if (Nk === 100) {
    let w4;
    [w1, w4] = retargetStar(w1);
    let w5 = a.monstername[w1] || "";
    a.msg[0] = "* " + w0 + " spared " + w5 + "!/%";
    if (!(a.mercymod[w1] >= 100)) {
      a.msg[0] = "* " + w0 + " spared " + w5 + "^2!&* But its name wasn't \\cYYELLOW\\cW.../%";
      if (a.monsterstatus[w1] === 1) {
        a.msg[0] = "* " + w0 + " spared " + w5 + "^2!&* But its name wasn't \\cYYELLOW\\cW.../";
        a.msg[1] = "* (Try using Ralsei's \\cBPACIFY\\cW!)/%";
      }
    }
    if (w4 === 1) {
      a.msg[0] = "* " + w0 + " spared!/%";
    }
  }
  if (Nk === 204) {
    a.msg[0] = "* " + w0 + " read the MANUAL!/";
    a.msg[1] = "* But nothing happened.../%";
  }
  if (Nk === 203 && (a.msg[0] = "* " + w0 + " used the GLOWSHARD!/", a.msg[1] = "* But nothing happened.../%", a.chapter <= 2)) {
    let w6 = [];
    for (let w7 = 0; w7 < 3; w7++) {
      if (a.monster[w7] === 1 && a.monstertype[w7] === 5) {
        a.mercymod[w7] = 200;
        w6.push(w7);
      }
    }
    if (w6.length) {
      a.msg[1] = w6.map(w8 => "* " + a.monstername[w8] + " became enraptured!&").join("") + "/";
      a.msg[2] = "* The GLOWSHARD disappeared!/%";
    }
  }
}
Tp(scr_spelltext, "scr_spelltext");
function healFx(Nk, Nz) {
  let w0 = n.charinstance(Nk);
  if (!w0) {
    return;
  }
  let w1 = Th(w0.x, w0.y, N2);
  w1.target = w0;
  let w2 = Th(w0.x, w0.y + w0.myheight - 24 - w0.tu * 20, Td);
  w2.delay = 8;
  w2.type = 3;
  w2.damage = Nz;
  if (a.hp[a.char[Nk]] >= a.maxhp[a.char[Nk]]) {
    w2.specialmessage = 3;
  }
  w0.tu++;
}
Tp(healFx, "healFx");
function scr_healitemspell(Nk, Nz) {
  S(Nk, Nz);
  healFx(Nk, Nz);
  a.spelldelay = 15;
}
Tp(scr_healitemspell, "scr_healitemspell");
function scr_healallitemspell(Nk) {
  y(Nk);
  for (let Nz = 0; Nz < A(); Nz++) {
    if (a.char[Nz] !== 0) {
      healFx(Nz, Nk);
    }
  }
  a.spelldelay = 20;
}
Tp(scr_healallitemspell, "scr_healallitemspell");
function scr_spell(Nk, Nz) {
  let w0 = a.chartarget[Nz];
  a.spelldelay = 10;
  let w1 = 0;
  if (!(a.chapter >= 4) || !n.chapterSpell || !n.chapterSpell(Nk, Nz)) {
    switch (Nk) {
      case 2:
        {
          let w2 = a.battlemag[Nz] * 5;
          S(w0, w2);
          healFx(w0, w2);
          a.spelldelay = 15;
          break;
        }
      case 3:
        {
          if (a.monster[w0] === 0) {
            [w0, w1] = retargetStar(w0);
          }
          if (a.monster[w0] === 1) {
            let w3 = n.monsterinstance(w0);
            if (a.monsterstatus[w0] === 1) {
              if (a.monstertype[w0] !== 19 && a.monstertype[w0] !== 3) {
                a.flag[51 + w0] = 3;
                w3.userEvent(10);
                w3.scr_monsterdefeat();
              } else {
                w3.pacifycon = 1;
                a.spelldelay = 999;
              }
            } else {
              let w4 = Th(0, 0, Nj);
              w4.target = w3;
              w4.fail = 1;
            }
          }
          a.spelldelay = 20;
          break;
        }
      case 4:
      case 5:
        {
          a.spelldelay = 30;
          if (a.monster[w0] === 0) {
            [w0, w1] = retargetStar(w0);
          }
          if (w1 === 0) {
            a.spelldelay = 70;
            let w5 = Nk === 4 ? TH(a.battlemag[Nz] * 5 + a.battleat[Nz] * 11 - a.monsterdf[w0] * 3) : TH(a.battlemag[Nz] * 6 + a.battleat[Nz] * 13 - a.monsterdf[w0] * 6);
            if (Nk === 4 && a.chapter === 3) {
              let w8 = TK.first("obj_knight_enemy");
              if (w8) {
                w5 = TH(w5 * (w8.damagereduction + 0.65));
              }
            }
            let w6 = TK.first("obj_herosusie");
            let w7 = Th(w6 ? w6.x : 90, w6 ? w6.y : 150, Ng);
            w7.damage = w5;
            w7.star = w0;
            w7.caster = Nz;
            w7.target = n.monsterinstance(w0);
            if (Nk === 5) {
              w7.red = 1;
            }
          }
          break;
        }
      case 6:
        {
          let w9 = a.battlemag[Nz] * 4;
          for (let wT = 0; wT < A(); wT++) {
            S(wT, w9);
            healFx(wT, w9);
          }
          a.spelldelay = 15;
          break;
        }
      case 8:
        {
          let wL = 0;
          for (let wf = 0; wf < 3; wf++) {
            if (a.monster[wf] !== 1) {
              continue;
            }
            let wK = Th(a.monsterx[wf], a.monstery[wf], l);
            wK.target = n.monsterinstance(wf);
            wK.myself = wf;
            wK.initdelay = wL * 10;
            wL++;
          }
          a.spelldelay = 20 + wL * 10;
          break;
        }
      case 9:
        {
          a.spelldelay = 30;
          if (a.monster[w0] === 0) {
            [w0, w1] = retargetStar(w0);
          }
          if (w1 === 0 && a.monster[w0] === 1) {
            a.spelldelay = 40;
            let wE = Math.max(1, Math.min(999, a.battlemag[Nz] - 10));
            let wU = TH(wE * 30 + 90 + TO(10));
            let wV = Th(a.monsterx[w0], a.monstery[w0], h);
            wV.damage = wU;
            wV.star = w0;
            wV.caster = Nz;
            wV.target = n.monsterinstance(w0);
          }
          break;
        }
      case 10:
        {
          a.spelldelay = 30;
          if (T4() > 0) {
            let wG = TH(a.battlemag[Nz] * 40 + 600);
            let wh = TK.exists("obj_berdlyb2_enemy") ? a.charinstance && a.charinstance[Nz] : null;
            let wj = Th(wh ? wh.x : 0, wh ? wh.y : 0, g);
            wj.caster = Nz;
            wj.damage = wG;
            a.spelldelay = 140;
            if (TK.exists("obj_berdlyb2_enemy")) {
              a.spelldelay = 999999;
              wj.textwait = 1;
            }
          }
          break;
        }
      case 100:
        {
          if (a.monster[w0] === 0) {
            [w0, w1] = retargetStar(w0);
          }
          if (a.monster[w0] === 1) {
            let wF = n.monsterinstance(w0);
            let wQ = a.monstertype[w0] === 3 || a.chapter >= 2 && a.monstertype[w0] === 52;
            if (a.mercymod[w0] >= 100) {
              if (wQ) {
                wF.sparecon = 1;
              } else {
                a.flag[51 + w0] = 2;
                wF.userEvent(10);
                wF.scr_monsterdefeat();
              }
            } else {
              c(w0, a.sparepoint[w0]);
              let wp = Th(0, 0, Nj);
              wp.target = wF;
              wp.fail = 1;
              wp.flashcolor = TZ.yellow;
            }
          }
          a.spelldelay = 0;
          break;
        }
      default:
        if (Nk >= 200) {
          applyItemEffect(T0(Nk), w0, Nz, {
            healOne: (wR, wb, wc) => {
              S(wR, wb);
              healFx(wR, wb);
              if (wc) {
                let wS = TK.all("obj_healanim").pop();
                if (wS) {
                  wS.particlecolor = TZ[wc];
                }
              }
              a.spelldelay = 15;
            },
            healAll: wR => scr_healallitemspell(wR)
          });
        }
    }
  }
}
Tp(scr_spell, "scr_spell");
function Nq() {
  return TK.first("obj_battlecontroller");
}
Tp(Nq, "BC");
var obj_battlecontroller = class wy extends TT {
  cleanUp() {
    a.fighting = 0;
    if (!TK.exists("__roomhost")) {
      if (!a.battleover) {
        a.battleover = "win";
        T7();
      }
    }
  }
  create() {
    Object.assign(this, {
      victory: 0,
      victoried: 0,
      skipvictory: 0,
      battlewriter: null,
      lbuffer: 0,
      rbuffer: 0,
      onebuffer: 0,
      twobuffer: 0,
      cantspare: [0, 0, 0],
      hidemercy: 0,
      gigaqueencon: 0,
      gigaqueentimer: 0,
      gigaqueeny: 0,
      attackpriority: -1,
      messagepriority: -1
    });
    Object.assign(this, {
      disablesusieact: 0,
      mercytotal: 0,
      idefendedthisturn: 0,
      ypostenna: 0,
      oopsallacts: 0,
      spadebuttonenabled: false,
      spadebuttoncount: 0,
      spadebuttontimer: 0,
      heartbuttoncount: 0,
      heartbuttontimer: 0,
      heartbuttondirection: 270,
      heartsuccesstimer: 0,
      heartsuccesscon: 0,
      recentlyhighlightingheart: 0,
      recentlyhighlightingheartvalue: 0,
      rouxlsbuttontimer: 0,
      rouxlsbuttoncount: -6,
      rouxlsbuttoncount2: -6,
      rouxlsbuttoncount_y: 0,
      rouxlsgridenabled: false,
      recentlyhighlightingspade: 0,
      recentlyhighlightingspadevalue: 0,
      gridchangedirections: true,
      spadebuttondirection: 0,
      rouxlsbuttondirection: 270,
      rouxlsbuttondirection2: 270,
      rouxlserrorcon: 0,
      rouxlserrortimer: 0,
      rouxlstelegraphtimer: 0,
      rouxlstelegraphcon: 0,
      spadetelegraphtimer: 0,
      spadetelegraphcon: 0,
      spadesuccesstimer: 0,
      spadesuccesscon: 0,
      rouxlsbuttonendcon: 0,
      buttonorder: 0,
      spadefail: false,
      buttonspeed: 0,
      norouxlsbutton: false,
      dogtimer: 0,
      dogcon: 0,
      dogselectedcount: 0
    });
    if (a.chapter >= 4 && n.bcCreate) {
      n.bcCreate(this);
    }
    a.battleend = 0;
    a.darkzone = 1;
    a.fighting = 1;
    a.fe = 0;
    a.fc = 0;
    a.typer = 4;
    a.battletyper = 4;
    a.myfight = 0;
    a.mnfight = 0;
    a.bmenuno = 0;
    a.attacking = 0;
    a.acting = [0, 0, 0];
    a.tension = 0;
    a.spelldelay = 10;
    T2();
    a.tensionselect = 0;
    a.temptension = [a.tension, a.tension, a.tension];
    this.tempitem = [];
    for (let Nk = 0; Nk < 13; Nk++) {
      this.tempitem[Nk] = [a.item[Nk], a.item[Nk], a.item[Nk]];
    }
    a.charcond = [0, 0, 0];
    a.automiss = [0, 0, 0];
    k(Math.max(3, A()));
    for (let Nz = 0; Nz < Math.max(3, A()); Nz++) {
      if (a.char[Nz]) {
        a.charmove[Nz] = 1;
        a.charcantarget[Nz] = 1;
        a.chardead[Nz] = 0;
      } else {
        a.charmove[Nz] = 0;
        a.charcantarget[Nz] = 0;
        a.chardead[Nz] = 0;
      }
    }
    a.flag[50] = 0;
    a.flag[51] = 0;
    a.flag[52] = 0;
    a.flag[53] = 0;
    a.monster = [0, 0, 0];
    a.monsterx = [0, 0, 0];
    a.monstery = [0, 0, 0];
    a.monstername = [" ", " ", " "];
    a.monsterat = [0, 0, 0];
    a.monsterdf = [0, 0, 0];
    a.monsterhp = [0, 0, 0];
    a.monstermaxhp = [0, 0, 0];
    a.monsterinstance = [null, null, null];
    a.monstergold = [0, 0, 0, 0];
    a.monsterexp = [0, 0, 0, 0];
    a.sparepoint = [0, 0, 0];
    a.hittarget = [0, 0, 0];
    a.mercymod = [0, 0, 0];
    a.mercymax = [0, 0, 0];
    a.monstercomment = [" ", " ", " "];
    a.monsterstatus = [0, 0, 0];
    a.canact = [[], [], []];
    a.actname = [[], [], []];
    a.actactor = [[], [], []];
    a.actdesc = [[], [], []];
    a.actcost = [[], [], []];
    for (let w0 = 0; w0 < 3; w0++) {
      for (let w1 = 0; w1 < 6; w1++) {
        a.canact[w0][w1] = 0;
        a.actname[w0][w1] = " ";
        a.actactor[w0][w1] = 1;
        a.actdesc[w0][w1] = " ";
        a.actcost[w0][w1] = 0;
      }
    }
    Object.assign(this, {
      intro: 1,
      chartotal: 0,
      charpos: new Array(A()).fill(-1),
      havechar: new Array(A()).fill(0),
      mmy: new Array(A()).fill(0)
    });
    a.charinstance = new Array(A()).fill(null);
    for (let w2 = 0; w2 < A(); w2++) {
      if (a.char[w2] !== 0) {
        this.chartotal++;
      }
      let w3 = a.char[w2];
      if (w3 >= 1) {
        let w4 = r(w3);
        let w5 = a.charhero && a.charhero[w3] || Ty[w4 - 1] || "kris";
        let w6 = heroSprites(w5, T6).id === w5 && TS[w5] && TS[w5].fallback || w5;
        let w7 = Math.max(0, Ty.indexOf(TS[w6] ? w6 : "kris"));
        let w8 = w5 === "noelle" && a.chapter === 2 ? NZ : [N9, NN, Nu][Math.min(2, w7)];
        let w9 = Th(a.heromakex[w2], a.heromakey[w2], w8);
        w9.herokey = w5;
        w9.setup();
        w9.myself = w2;
        w9.char = w3;
        w9.base = w4;
        w9.depth = 200 - w2 * 20;
        if (a.chapter >= 5 && n.heroSetup) {
          n.heroSetup(w9);
        }
        this.havechar[w2] = 1;
        this.charpos[w2] = w2;
        a.charinstance[w2] = w9;
      }
    }
    for (let wT = 0; wT < 3; wT++) {
      if (a.monstertype[wT] > 0) {
        a.monster[wT] = 1;
        let wL = Th(a.monstermakex[wT], a.monstermakey[wT], a.monsterinstancetype[wT]);
        wL.myself = wT;
        a.monsterinstance[wT] = wL;
        wL.userEvent(12);
      }
    }
    if (a.chapter === 2 && TK.exists("obj_gigaqueen_enemy")) {
      this.gigaqueencon = 3;
    }
    for (let wf of a.bystanders || []) {
      let wK = Th(wf.x, wf.y, wf.cls);
      wK.myself = -1;
      wK.visible = false;
      if (wK.thrash) {
        wK.thrash.visible = false;
      }
    }
    a.battleactcount = [0, 0, 0];
    a.battlespell = [[], [], []];
    a.battlespellname = [[], [], []];
    a.battlespelldesc = [[], [], []];
    a.battlespellcost = [[], [], []];
    a.battlespelltarget = [[], [], []];
    a.battlespellspecial = [[], [], []];
    for (let wE = 0; wE < 3; wE++) {
      for (let wU = 0; wU < 18; wU++) {
        a.battlespell[wE][wU] = 0;
        a.battlespellname[wE][wU] = " ";
        a.battlespelldesc[wE][wU] = " ";
        a.battlespellcost[wE][wU] = 0;
        a.battlespelltarget[wE][wU] = 2;
        a.battlespellspecial[wE][wU] = 0;
      }
    }
    if (n.spellmenu_setup) {
      n.spellmenu_setup.call(this);
    }
    a.charturn = 0;
    a.currentactingchar = 0;
    for (let wV of ["acting", "actingsingle", "actingsimul", "actingtarget", "actingchoice"]) {
      if (Array.isArray(a[wV])) {
        for (let wG = 0; wG < 3; wG++) {
          a[wV][wG] = 0;
        }
      }
    }
    a.charaction = [0, 0, 0];
    a.charspecial = [0, 0, 0];
    a.chartarget = [0, 0, 0];
    a.faceaction = [0, 0, 0];
    a.targeted = [0, 0, 0];
    a.battleat = [];
    a.battledf = [];
    a.battlemag = [];
    for (let wh = 0; wh < A(); wh++) {
      let wj = a.char[wh];
      a.battleat[wh] = a.at[wj] + a.itemat[wj][0] + a.itemat[wj][1] + a.itemat[wj][2];
      a.battledf[wh] = a.df[wj] + a.itemdf[wj][0] + a.itemdf[wj][1] + a.itemdf[wj][2];
      a.battlemag[wh] = a.mag[wj] + a.itemmag[wj][0] + a.itemmag[wj][1] + a.itemmag[wj][2];
    }
    if (a.chapter >= 5 && n.bcBattleStats) {
      n.bcBattleStats(this);
    }
    for (let wF = 0; wF < 20; wF++) {
      for (let wQ = 0; wQ < 20; wQ++) {
        a.bmenucoord[wF][wQ] = 0;
      }
    }
    Object.assign(this, {
      movenoise: 0,
      selnoise: 0,
      laznoise: 0,
      damagenoise: 0,
      grazenoise: 0,
      tp: 0,
      tpy: 50,
      bp: 0,
      bpy: 152,
      s_siner: 0,
      reset: 0,
      timeron: 1,
      noreturn: 0,
      shakeReq: 0,
      victortimer: 0
    });
    this.bcolor = TE(TE(TZ.purple, TZ.black, 0.7), TZ.dkgray, 0.5);
    Th(0, 0, N4);
    this.hpcolor = [TZ.aqua, TZ.fuchsia, TZ.lime, TZ.yellow];
    this.hpcolorsoft = this.hpcolor.map(wp => TE(wp, TZ.white, 0.5));
    n.charinstance = wp => a.charinstance[wp];
    n.monsterinstance = wp => a.monsterinstance[wp];
    n.dmgwriter = (wp, wR) => Th(wp, wR, Td);
    n.shake = () => {
      if (!TK.exists("obj_shake")) {
        Th(0, 0, R);
      }
    };
    n.gameover = () => {
      a.battleover = "lose";
      TN();
      T5("snd_hurt1");
      T9();
    };
  }
  alarmEvent(Nk) {
    if (Nk === 2) {
      this.reset = 0;
      scr_mnendturn();
    }
  }
  step() {
    this.t_siner = (this.t_siner || 0) + 1;
    if (a.chapter === 2) {
      if (this.gigaqueencon !== 0) {
        return;
      }
      let Nz = TK.first("o_boxingcontroller");
      if (Nz && Nz.dead === 1 && a.turntimer < 0 || TK.exists("obj_boxing_loss_controller") || TK.exists("o_bq_whitefade_persistent")) {
        return;
      }
    }
    if (a.chapter >= 2 && (this.t_siner - 1) % 6 === 0) {
      for (let w0 = 0; w0 < A(); w0++) {
        let w1 = a.char[w0];
        if (wearsThornRing(w1) && a.hp[w1] > Tl(a.maxhp[w1] / 3)) {
          a.hp[w1]--;
        }
      }
    }
    for (let w2 = 0; w2 < A(); w2++) {
      let w3 = a.charinstance[w2];
      if (!!w3 && !!(w3.poisonamount > 0) && (w3.poisontimer = (w3.poisontimer || 0) + 1, w3.poisontimer >= 10)) {
        let w4 = a.char[w2];
        if (a.hp[w4] > 1) {
          a.hp[w4]--;
          w3.poisonamount--;
        } else {
          w3.poisonamount = 0;
        }
        w3.poisontimer = 0;
      }
    }
    if (knightEndCutscene() || ch3StepHeld()) {
      return;
    }
    if (a.chapter === 3 && this.victory === 1 && this.victoried === 0) {
      let w5 = NE("obj_shutta_enemy");
      if (w5 && w5.amiabossfight) {
        a.battletyper = 4;
      }
    }
    if (a.chapter >= 4 && n.bcStepGate && n.bcStepGate(this)) {
      return;
    }
    if (this.shakeReq) {
      this.shakeReq = 0;
      if (!TK.exists("obj_shake")) {
        Th(0, 0, R);
      }
    }
    if (this.victory === 1 && this.victoried === 0) {
      a.faceaction = [0, 0, 0];
      a.battleend = 1;
      a.mnfight = -1;
      a.myfight = 7;
      if (TK.exists(this.battlewriter)) {
        this.battlewriter.instance_destroy();
      }
      TK.with("obj_face", w7 => w7.instance_destroy());
      for (let w7 = 0; w7 < 4; w7++) {
        if (a.hp[w7] < 1) {
          a.hp[w7] = Tl(a.maxhp[w7] / 8);
        }
      }
      this.lastbattlewriter = null;
      if (this.skipvictory === 0) {
        a.monstergold[3] += Ti(a.tension / 10) * (a.chapter >= 2 ? a.chapter : 1);
        if (a.charweapon[1] === 8) {
          a.monstergold[3] += Ti(a.monstergold[3] / 20);
        }
        if (a.chapter >= 5 && n.bcVictoryGold) {
          n.bcVictoryGold(this);
        }
        a.msg = new Array(100).fill(" ");
        a.msg[0] = "* You won^1!&* Got " + a.monsterexp[3] + " EXP and " + a.monstergold[3] + " D$./%";
        a.typer = a.battletyper;
        a.fc = 0;
        if (a.chapter >= 4 && n.bcVictoryMsg) {
          n.bcVictoryMsg(this);
        }
        this.lastbattlewriter = O();
        for (let w8 = 0; w8 < A(); w8++) {
          let w9 = a.charinstance[w8];
          if (w9) {
            w9.state = 7;
            w9.hurt = 0;
            w9.hurttimer = 0;
          }
        }
      }
      this.victoried = 1;
      this.victortimer = 0;
      if (this.skipvictory === 1) {
        this.victortimer = -20;
      }
      if (a.chapter >= 5 && this.skipvictory === 2) {
        this.victortimer = 9;
      }
      let w6 = TK.first("obj_tensionbar");
      if (w6) {
        w6.alarm[5] = 15;
        w6.hspeed = -10;
        w6.friction = -0.4;
      }
    }
    if (this.victoried === 1) {
      this.victortimer++;
      if (!TK.exists(this.lastbattlewriter) && this.victortimer >= 10 && (!(a.chapter >= 4) || !n.bcVictoryHold || !n.bcVictoryHold(this))) {
        this.intro = 2;
        if (this.bp <= 0) {
          scr_endcombat();
        }
      }
    }
    if (a.myfight === 0 && (!(a.chapter >= 4) || !n.bcSkipMenu || !n.bcSkipMenu(this))) {
      this.menuStep();
    }
    if (this.movenoise === 1) {
      T5("snd_menumove");
      this.movenoise = 0;
    }
    if (this.grazenoise === 1) {
      T5("snd_graze");
      this.grazenoise = 0;
    }
    if (this.selnoise === 1) {
      T5("snd_select");
      this.selnoise = 0;
    }
    if (this.damagenoise === 1) {
      if (!(a.chapter >= 4) || !n.bcDamageNoise || !n.bcDamageNoise(this)) {
        T5("snd_damage");
      }
      this.damagenoise = 0;
    }
    this.onebuffer--;
    this.twobuffer--;
    this.lbuffer--;
    this.rbuffer--;
    let Nk = a.mnfight === 2 && this.timeron === 1 || a.chapter >= 4 && n.bcTurnTimer && n.bcTurnTimer(this);
    if (!Nk) {
      this._turnScaled = 0;
    }
    if (Nk) {
      if (this._turnScaled !== 1) {
        this._turnScaled = 1;
        let wT = TG.turnscale ?? 1;
        if (wT !== 1 && a.turntimer > 0 && a.turntimer < 2000) {
          a.turntimer = Math.max(1, Math.round(a.turntimer * wT));
        }
      }
      a.turntimer -= 1;
      if (a.turntimer <= 0 && this.reset === 0) {
        TK.with("obj_bulletparent", wL => wL.instance_destroy());
        TK.with("obj_bulletgenparent", wL => wL.instance_destroy());
        TK.with("obj_darkener", wL => {
          wL.darken = 0;
        });
        TK.with("obj_heart", wL => {
          Th(wL.x, wL.y, e);
          wL.instance_destroy();
        });
        this.reset = 1;
        if (!(a.chapter >= 4) || !n.bcNoReturn || !n.bcNoReturn(this)) {
          if (this.noreturn === 0) {
            this.alarm[2] = 15;
          }
        }
      }
    }
    if (a.chapter >= 2 && a.myfight === 3 && T4() === 0 && !TK.exists("obj_writer")) {
      scr_wincombat();
      if (a.myfight === 3) {
        scr_endturn();
      }
    }
    a.time++;
  }
  actselect(Nk, Nz) {
    let w0 = a.monsterinstance[Nk];
    let w1 = a.char[a.charturn];
    let w2 = this.actinfo(Nk);
    if (w0 && !w0.destroyed) {
      if (w1 === 1) {
        w0.acting = Nz + 1;
      } else if (w1 === 2) {
        w0.actingsus = Nz + 1;
      } else if (w1 === 3) {
        w0.actingral = Nz + 1;
      } else if (w1 === 4) {
        w0.actingnoe = Nz + 1;
      }
    }
    if (w1 === 1) {
      let w3 = d();
      a.actingsimul[w3] = w2.simul.get(Nz);
      a.acting[w3] = 1;
      a.actingsingle[w3] = 1;
      a.actingtarget[a.charturn] = Nk;
      let w4 = (a.actactor[Nk] || [])[Nz];
      let w5 = w6 => q(w6);
      if (w4 === 2 && w5(2) >= 0) {
        a.acting[w5(2)] = 1;
      }
      if (w4 === 3 && w5(3) >= 0) {
        a.acting[w5(3)] = 1;
      }
      if (w4 === 4) {
        if (a.char[2]) {
          a.acting[2] = 1;
        }
        if (a.char[1]) {
          a.acting[1] = 1;
        }
      }
      if (w4 === 5 && w5(4) >= 0) {
        a.acting[w5(4)] = 1;
      }
      for (let w6 = 0; w6 < 3; w6++) {
        if (a.acting[w6] === 1) {
          a.faceaction[w6] = 6;
          a.charaction[w6] = 9;
        }
      }
    } else {
      a.actingtarget[a.charturn] = Nk;
      a.actingsingle[a.charturn] = 1;
      a.actingsimul[a.charturn] = w2.simul.get(Nz);
      a.faceaction[a.charturn] = 6;
      a.charaction[a.charturn] = 9;
    }
  }
  techUnlocked(Nk, Nz) {
    if (a.chapter !== 3) {
      return true;
    }
    let w0 = (a.battlespellname[Nk] || [])[Nz];
    if (w0 === undefined || w0 === " ") {
      return true;
    }
    let w1 = true;
    TK.with("obj_pippins_enemy", w5 => {
      if (w0 === (a.actname[w5.myself] || [])[3] && (a.flag[1044] || 0) < 150) {
        w1 = false;
      }
    });
    let w2 = [1, 2, 3].some(w5 => a.chararmor1[w5] === 7 || a.chararmor2[w5] === 7);
    let w3 = TK.first("obj_tenna_enemy_bg");
    let w4 = TK.first("obj_tenna_enemy");
    if (w3 && w4 && w0 === (a.actnamesus[w4.myself] || [])[1] && w3.myscore < (w2 ? 30 : 20)) {
      w1 = false;
    }
    return w1;
  }
  actinfo(Nk) {
    let Nz = a.chapter === 1 ? "" : {
      1: "",
      2: "sus",
      3: "ral",
      4: "noe"
    }[a.char[a.charturn]] ?? "";
    let w0 = (w1, w2) => {
      let w3 = a[w1 + Nz];
      let w4 = w3 && w3[Nk] || [];
      return {
        get: w5 => w4[w5] === undefined ? w2 : w4[w5]
      };
    };
    return {
      canact: w0("canact", 0),
      cost: w0("actcost", 0),
      simul: w0("actsimul", 0),
      name: w0("actname", " "),
      desc: w0("actdesc", " ")
    };
  }
  charAlive(Nk) {
    let Nz = q(Nk);
    if (Nz < 0) {
      return false;
    } else {
      return this.havechar[Nz] === 1 && a.hp[a.char[Nz]] > 0;
    }
  }
  partnerReady(Nk) {
    return this.charAlive(Nk) || a.customTeam === 1 && q(Nk) < 0;
  }
  rouxlsButtonStep() {
    let Nk = a.chapter === 3 ? TK.first("obj_rouxls_ch3_enemy") : null;
    if (!Nk || !(Nk.intro >= 2) || !this.spadebuttonenabled || a.bmenuno !== 0 || a.myfight !== 0) {
      this.rouxlserrortimer = 0;
      this.rouxlstelegraphcon = 0;
      return;
    }
    let Nz = a.bmenucoord;
    let w0 = () => Nz[0][a.charturn] + this.rouxlsbuttoncount_y * 5;
    let w1 = (w6, w7) => {
      for (let w8 = 1; w8 <= 5; w8++) {
        if (w6 !== w8) {
          continue;
        }
        let w9 = false;
        for (let wT = 0; wT < 6; wT++) {
          if (w7 === w8 + wT * 5) {
            w9 = true;
          }
        }
        if (w9) {
          w6 = w8 === 5 ? 1 : w8 + 1;
        }
      }
      return w6;
    };
    let w2 = () => {
      this.rouxlsbuttoncount = w1(this.rouxlsbuttoncount, this.heartbuttoncount);
      this.rouxlsbuttoncount = w1(this.rouxlsbuttoncount, this.spadebuttoncount);
    };
    let w3 = w6 => {
      if (this.rouxlsgridenabled) {
        this.rouxlsbuttoncount_y = 4;
        this.buttonorder = 0;
        this.rouxlsbuttoncount = Tx(0, -1, -3, -4);
        if (w6) {
          this.spadebuttoncount = -6;
        }
      }
    };
    let w4 = () => T5("snd_menumove", {
      pitch: 0.6 + TO(0.8)
    });
    let w5 = false;
    for (let w6 = 1; w6 <= 3; w6++) {
      if (a.hp[w6] < a.maxhp[w6] / 3) {
        w5 = true;
      }
    }
    if (a.hp[1] + a.hp[2] + a.hp[3] < (a.maxhp[1] + a.maxhp[2] + a.maxhp[3]) / 2) {
      w5 = true;
    }
    if (this.rouxlserrorcon === 0 && this.rouxlstelegraphcon === 0 && this.rouxlsbuttoncount > 0 && this.rouxlsbuttoncount - 1 === w0()) {
      this.rouxlserrorcon = 1;
      T5("snd_error");
    }
    if (this.rouxlserrorcon === 0 && this.rouxlstelegraphcon === 0 && this.rouxlsbuttoncount2 > 0 && this.rouxlsbuttoncount2 - 1 === w0()) {
      this.rouxlserrorcon = 1;
      T5("snd_error");
    }
    if (this.rouxlserrorcon === 1) {
      this.rouxlserrortimer++;
      if (this.rouxlserrortimer >= 10) {
        this.spadesuccesscon = 0;
        this.spadebuttontimer = 0;
        this.rouxlserrortimer = 0;
        this.rouxlserrorcon = 0;
        a.bmenuno = 0;
        scr_nexthero();
        Nz[0][0] = 2;
        Nz[0][1] = 2;
        Nz[0][2] = 2;
        w3(false);
        if (Nk.phase > 1) {
          this.rouxlsbuttondirection = 270;
          this.rouxlsbuttoncount = this.rouxlsbuttoncount === Tx(0, -1, -3, -4) ? 1 : 0;
        }
      }
      w2();
    }
    if (this.rouxlserrorcon === 0) {
      this.spadebuttontimer++;
      if (Nk.phase > 1) {
        this.rouxlsbuttontimer++;
      }
    }
    if (w5) {
      if (w5 === true && Nk.phase > 1) {
        this.heartbuttontimer++;
      }
    } else {
      this.heartbuttoncount = -6;
    }
    if (this.spadebuttontimer >= 10 && this.spadetelegraphcon === 1) {
      this.spadetelegraphcon = 0;
      this.spadebuttontimer = 0;
    } else if (this.spadebuttontimer >= 10 && this.spadesuccesscon === 1) {
      this.norouxlsbutton = false;
      this.rouxlserrortimer = 0;
      this.rouxlserrorcon = 0;
      this.spadesuccesscon = 0;
      this.spadesuccesstimer = 0;
      Nz[0][0] = 2;
      Nz[0][1] = 2;
      Nz[0][2] = 2;
      w3(true);
      this.spadefail = false;
      if (this.rouxlsbuttonendcon === 0) {
        scr_nexthero();
      } else {
        a.charturn = 0;
        a.bmenuno = 0;
      }
    } else if ((this.spadebuttontimer >= 7 && this.buttonspeed === 0 || this.spadebuttontimer >= 5 && this.buttonspeed === 1 || this.spadebuttontimer >= 3 && this.buttonspeed === 2) && this.spadetelegraphcon === 0 && this.spadesuccesscon === 0) {
      this.spadebuttontimer = 0;
      if (this.dogcon !== 2 && this.spadebuttoncount !== -6) {
        w4();
      }
      if (this.spadebuttondirection === 0) {
        this.spadebuttoncount++;
      }
      if (this.spadebuttondirection === 90) {
        this.spadebuttoncount -= 5;
      }
      if (this.spadebuttondirection === 180) {
        this.spadebuttoncount--;
      }
      if (this.spadebuttondirection === 270 && this.spadebuttoncount !== -6) {
        this.spadebuttoncount += 5;
      }
      let w7 = this.spadebuttoncount;
      if (!this.rouxlsgridenabled && w7 > 5) {
        this.spadebuttoncount = 1;
      } else if (this.spadebuttondirection === 0 && [6, 11, 16, 21, 26].includes(w7) || this.spadebuttondirection === 90 && [-4, -3, -2, -1, 0].includes(w7) || this.spadebuttondirection === 180 && [0, 5, 10, 15, 20].includes(w7) || this.spadebuttondirection === 270 && [26, 27, 28, 29, 30].includes(w7)) {
        this.buttonorder = 0;
        this.spadebuttoncount = -6;
        this.rouxlsbuttondirection = 270;
        this.rouxlsbuttoncount = Tx(1, 2, 3, 4, 5);
        this.rouxlsbuttontimer = 0;
      }
      w2();
    }
    if (this.heartbuttontimer >= 10 && this.heartsuccesscon === 1) {
      this.caster = 1;
      for (let w8 = 0; w8 < 3; w8++) {
        if (!n.charinstance(w8)) {
          continue;
        }
        let w9 = Tl(a.maxhp[a.char[w8]] / 2);
        S(w8, w9);
        healFx(w8, w9);
      }
      this.heartsuccesscon = 0;
      this.buttonorder = 0;
      this.spadebuttoncount = -6;
      this.rouxlsbuttondirection = 270;
      this.rouxlsbuttoncount = Tx(1, 2, 3, 4, 5);
      w2();
      this.heartsuccesstimer = 0;
      Nz[0][0] = 2;
      Nz[0][1] = 2;
      Nz[0][2] = 2;
      w3(true);
    } else if (this.heartbuttontimer >= 7 && this.spadetelegraphcon === 0 && this.spadesuccesscon === 0) {
      this.heartbuttontimer = 0;
      if (this.dogcon !== 2 && this.heartbuttoncount !== -6) {
        w4();
      }
      if (this.heartbuttondirection === 0) {
        this.heartbuttoncount++;
      }
      if (this.heartbuttondirection === 90) {
        this.heartbuttoncount -= 5;
      }
      if (this.heartbuttondirection === 180) {
        this.heartbuttoncount--;
      }
      if (this.heartbuttondirection === 270) {
        this.heartbuttoncount += 5;
      }
      let wT = this.heartbuttoncount;
      if (!this.rouxlsgridenabled && wT > 5) {
        this.heartbuttoncount = 1;
      } else if (this.heartbuttondirection === 0 && [6, 11, 16, 21, 26].includes(wT) || this.heartbuttondirection === 90 && [-4, -3, -2, -1, 0].includes(wT) || this.heartbuttondirection === 180 && [0, 5, 10, 15, 20].includes(wT) || this.heartbuttondirection === 270 && [26, 27, 28, 29, 30].includes(wT)) {
        this.heartbuttoncount = -6;
        this.heartbuttondirection = 270;
        this.heartbuttoncount = Tx(1, 2, 3, 4, 5);
      }
      this.heartbuttoncount = w1(this.heartbuttoncount, this.rouxlsbuttoncount);
      this.heartbuttoncount = w1(this.heartbuttoncount, this.spadebuttoncount);
      if (this.heartbuttoncount === this.rouxlsbuttoncount || this.heartbuttoncount === this.spadebuttoncount) {
        this.heartbuttoncount++;
      }
      if (this.heartbuttoncount > 30) {
        this.heartbuttoncount = 26;
      }
    }
    if (this.rouxlsbuttontimer >= 20 && this.rouxlstelegraphcon === 1) {
      this.rouxlstelegraphcon = 0;
      this.rouxlsbuttontimer = 0;
    } else if ((this.rouxlsbuttontimer >= 7 && this.buttonspeed === 0 || this.rouxlsbuttontimer >= 5 && this.buttonspeed === 1 || this.rouxlsbuttontimer >= 3 && this.buttonspeed === 2) && this.rouxlstelegraphcon === 0 && this.spadesuccesscon === 0) {
      this.rouxlsbuttontimer = 0;
      if (this.rouxlsbuttoncount !== -6) {
        w4();
      }
      if (this.rouxlsbuttondirection === 0) {
        this.rouxlsbuttoncount++;
      }
      if (this.rouxlsbuttondirection === 90) {
        this.rouxlsbuttoncount -= 5;
      }
      if (this.rouxlsbuttondirection === 180) {
        this.rouxlsbuttoncount--;
      }
      if (this.rouxlsbuttondirection === 270 && this.rouxlsbuttoncount !== -6) {
        this.rouxlsbuttoncount += 5;
      }
      if (this.rouxlsbuttondirection === 270 && [26, 27, 28, 29, 30].includes(this.rouxlsbuttoncount)) {
        this.buttonorder++;
        if (this.buttonorder < 2 && Nk.phase === 2 || this.buttonorder < 4 && Nk.phase === 3) {
          this.rouxlsbuttondirection = 270;
          this.rouxlsbuttoncount = Tx(1, 2, 3, 4, 5);
        } else {
          this.rouxlsbuttoncount = -6;
          this.spadebuttontimer = 0;
          this.spadebuttondirection = 270;
          this.spadebuttoncount = Tx(1, 2, 3, 4, 5);
        }
      }
      w2();
      this.spadebuttoncount = w1(this.spadebuttoncount, this.heartbuttoncount);
      this.spadebuttoncount = w1(this.spadebuttoncount, this.rouxlsbuttoncount);
    }
  }
  rouxlsConfirm() {
    let Nk = TK.first("obj_rouxls_ch3_enemy");
    let Nz = a.bmenucoord;
    let w0 = () => Nz[0][a.charturn] + this.rouxlsbuttoncount_y * 5;
    let w1 = () => {
      if (this.rouxlsgridenabled) {
        this.rouxlsbuttoncount_y = 4;
        this.buttonorder = 0;
        this.rouxlsbuttoncount = Tx(0, -1, -3, -4);
      }
    };
    this.norouxlsbutton = true;
    if (!this.spadebuttonenabled) {
      a.faceaction[a.charturn] = 6;
      Nz[0][0] = 2;
      Nz[0][1] = 2;
      Nz[0][2] = 2;
      if (this.rouxlsgridenabled) {
        this.rouxlsbuttoncount_y = 4;
        this.rouxlserrorcon = 0;
        this.rouxlstelegraphtimer = 0;
      }
      if (TK.exists("obj_tenna_board4_enemy")) {
        this.onebuffer = 1;
        a.bmenuno = 11;
      } else {
        scr_nexthero();
      }
      return true;
    }
    this.spadesuccesscon = 1;
    let w2 = false;
    let w3 = TK.first("obj_heroralsei");
    if (a.charturn === 2 && w3 && (w3.sprite_index === "spr_ralseib_yarn_1" || w3.sprite_index === "spr_ralseib_yarn_2") && Nk && Nk.yarnendturn === 0) {
      this.selnoise = 0;
      a.bmenuno = 0;
      Nk.yarnendturn = 1;
      if (this.dogcon < 1) {
        this.rouxlsbuttonendcon = 0;
        if (this.spadebuttoncount - 1 === w0() || this.recentlyhighlightingspade > 0) {
          T5("snd_coin");
          a.faceaction[a.charturn] = 6;
          this.spadesuccesscon = 1;
          if (this.recentlyhighlightingspade > 0 && this.spadebuttoncount - 1 !== w0()) {
            this.spadebuttoncount = this.recentlyhighlightingspadevalue;
          }
        } else {
          T5("snd_error");
          this.spadesuccesscon = 1;
          this.spadefail = true;
        }
      }
      if (this.dogcon > 0) {
        T5("snd_pombark");
        this.dogselectedcount++;
        this.spadesuccesscon = 0;
        if (a.charturn === 2 && this.dogselectedcount < 9) {
          a.charturn = 0;
          a.bmenuno = 0;
        } else {
          scr_nexthero();
          Nz[0][0] = 2;
          Nz[0][1] = 2;
          Nz[0][2] = 2;
          w1();
          if (a.charturn === 2 && this.dogselectedcount >= 9) {
            Nk.dogtrigger = 1;
          }
        }
      }
      return true;
    } else {
      if (this.spadebuttonenabled && w2 === false) {
        this.selnoise = 0;
        if (this.dogcon > 0) {
          if (this.spadebuttoncount - 1 === w0() || this.recentlyhighlightingspade > 0 || this.dogcon === 2) {
            this.buttonspeed++;
            T5("snd_pombark");
            this.dogselectedcount++;
            if (this.dogcon === 1) {
              this.dogcon = 2;
            }
            if (this.recentlyhighlightingspade > 0 && this.spadebuttoncount - 1 !== w0()) {
              this.spadebuttoncount = this.recentlyhighlightingspadevalue;
            }
          } else {
            T5("snd_error");
            this.dogcon = -1;
            this.spadefail = true;
          }
        } else if (this.spadebuttoncount - 1 === w0() || this.recentlyhighlightingspade > 0) {
          this.buttonspeed++;
          if (Nk) {
            Nk.spadepower++;
          }
          T5("snd_coin");
          a.faceaction[a.charturn] = 6;
          this.spadesuccesscon = 1;
          if (this.recentlyhighlightingspade > 0 && this.spadebuttoncount - 1 !== w0()) {
            this.spadebuttoncount = this.recentlyhighlightingspadevalue;
          }
        } else if (this.heartbuttoncount - 1 === w0()) {
          this.buttonspeed++;
          T5("snd_coin");
          this.heartsuccesscon = 1;
          this.spadebuttontimer = 0;
        } else {
          T5("snd_error");
          this.spadesuccesscon = 1;
          this.spadefail = true;
        }
      }
      this.rouxlsbuttonendcon = 0;
      if (this.dogcon > 0) {
        this.dogselectedcount++;
        if (a.charturn === 2 && this.dogselectedcount < 9) {
          this.rouxlsbuttonendcon = 1;
        } else if (a.charturn === 2 && this.dogselectedcount >= 9) {
          this.rouxlsbuttonendcon = 0;
          if (Nk) {
            Nk.dogtrigger = 1;
          }
        } else {
          this.rouxlsbuttonendcon = 0;
        }
      }
      return true;
    }
  }
  menuStep() {
    if (a.standaloneMinigame && a.myfight === 0 && a.mnfight === 0 && (TK.exists("obj_rhythmgame") || a.minigameStage)) {
      return;
    }
    if (a.minigameOnly && a.myfight === 0 && a.mnfight === 0) {
      let w3 = a.monsterinstance && a.monsterinstance[0];
      if (w3 && !w3.destroyed && typeof w3.minigameRearm == "function") {
        w3.minigameRearm();
      }
      a.charturn = DONE_TURN();
      for (let w4 = 0; w4 < A(); w4++) {
        a.acting[w4] = 0;
        a.charaction[w4] = 0;
        a.faceaction[w4] = 0;
      }
      scr_endturn();
      return;
    }
    let Nk = a.charturn;
    let Nz = a.bmenucoord;
    let w0 = a.bmenuno === 0 ? -100 : 10;
    if (this.battlewriter && !this.battlewriter.destroyed) {
      this.battlewriter.depth = w0;
    }
    TK.with("obj_face", w5 => {
      w5.depth = w0 - 1;
    });
    let w1 = () => {
      if (this.battlewriter && !this.battlewriter.destroyed) {
        this.battlewriter.depth = 10;
      }
      TK.with("obj_face", w5 => {
        w5.depth = 9;
      });
    };
    if (a.bmenuno === 0) {
      let w5 = true;
      let w6 = true;
      if (TK.exists("obj_board_battleintroduction")) {
        w5 = false;
      }
      TK.with("obj_knight_enemy", w8 => {
        if (w8.practicemode) {
          w5 = false;
        }
      });
      if (this.spadesuccesscon === 1 || this.rouxlserrorcon === 1) {
        w5 = false;
      }
      let w7 = a.chapter === 3 ? TK.first("obj_rouxls_ch3_enemy") : null;
      if (w7) {
        w7.dancecon = 1;
        if (w7.intro === 2) {
          w5 = false;
        }
        w6 = false;
        if (w7.intro === 3) {
          w6 = true;
        }
        if (this.oopsallacts === 1 && this.spadebuttonenabled && w7.phase !== 3 && a.charturn === 0 && this.dogcon === 0) {
          this.dogtimer++;
        } else {
          this.dogtimer = 0;
        }
        if (this.dogtimer === 1000) {
          this.dogcon = 1;
        }
      }
      if (!TK.exists(this.battlewriter) && w6 && (a.chapter !== 5 || a.battlemsg[0] !== "")) {
        a.msg[0] = a.battlemsg[0];
        a.typer = a.battletyper;
        if (a.chapter === 3) {
          let w8 = TK.first("obj_tenna_enemy");
          if (w8 && w8.turn === 0 || TK.exists("obj_tennabattleconvo_controller")) {
            a.fe = 0;
            a.fc = 22;
            a.typer = 80;
          }
          let w9 = a.encounterno === 123 ? TK.first("obj_pippins_enemy") : null;
          if (w9 && (w9.turns === 0 || w9.turns === 2 || w9.turns === 4)) {
            a.fe = 0;
            a.fc = 2;
            a.typer = 45;
          }
          if (w9 && (w9.turns === 1 || w9.turns === 3)) {
            a.fe = 0;
            a.fc = 1;
            a.typer = 47;
          }
        }
        this.battlewriter = O();
      }
      if (Tv() && this.lbuffer < 0 && w5) {
        Nz[0][Nk] = Nz[0][Nk] === 0 ? 4 : Nz[0][Nk] - 1;
        this.movenoise = 1;
        this.rbuffer = 1;
        if (this.disablesusieact === 1 && a.charturn === 1 && Nz[0][Nk] === 1) {
          Nz[0][Nk] = 0;
        }
        if (a.chapter >= 4 && this.disablesusieralseiattack === 1 && (a.charturn === 1 || a.charturn === 2) && Nz[0][Nk] === 0) {
          Nz[0][Nk] = 4;
        }
      }
      if (TC() && this.rbuffer < 0 && w5) {
        Nz[0][Nk] = Nz[0][Nk] === 4 ? 0 : Nz[0][Nk] + 1;
        this.movenoise = 1;
        this.lbuffer = 1;
        if (this.disablesusieact === 1 && a.charturn === 1 && Nz[0][Nk] === 1) {
          Nz[0][Nk] = 2;
        }
        if (a.chapter >= 4 && this.disablesusieralseiattack === 1 && (a.charturn === 1 || a.charturn === 2) && Nz[0][Nk] === 0) {
          Nz[0][Nk] = 1;
        }
      }
      if (!TW() || this.rouxlserrorcon !== 1 || !(this.dogcon < 1)) {
        if (TW() && this.twobuffer < 0 && w5) {
          this.onebuffer = 1;
          this.selnoise = 1;
          let wT = Nz[0][Nk];
          if (this.oopsallacts === 1 && this.rouxlsConfirm()) {
            return;
          }
          if (wT === 0) {
            a.bmenuno = 1;
          }
          if (wT === 1 && r(a.char[Nk]) !== 1) {
            a.bmenuno = 2;
          }
          if (wT === 1 && r(a.char[Nk]) === 1) {
            a.bmenuno = 11;
          }
          if (wT === 2 && this.tempitem[0][Nk] !== 0) {
            a.bmenuno = 4;
            for (let wL = 0; wL < 12; wL++) {
              if (this.tempitem[Nz[4][Nk]][Nk] === 0 && Nz[4][Nk] > 0) {
                Nz[4][Nk]--;
              }
            }
          }
          if (wT === 3) {
            a.bmenuno = 12;
          }
          if (wT === 4) {
            T3(a.chapter >= 4 && n.bcDefendTP ? n.bcDefendTP(this) : 40);
            if (a.chapter === 3) {
              this.idefendedthisturn++;
            }
            a.faceaction[Nk] = 4;
            a.charaction[Nk] = 10;
            scr_nexthero();
            if (a.chapter === 2) {
              TK.with("o_boxingcontroller", wf => {
                wf.defend = 1;
                wf.specialcon = 8;
              });
            }
          }
        }
      }
      if (TL() && this.onebuffer < 0 && a.charturn > 0 && !w7) {
        this.twobuffer = 1;
        this.movenoise = 1;
        scr_prevhero();
      }
    }
    if (a.bmenuno === 2 && a.flag[34] === 0 && a.chapter !== 1) {
      if (this.battlewriter) {
        this.battlewriter.skipme = 1;
      }
      w1();
      let wf = Nk;
      let wK = a.battlespell[wf] || [];
      if (TC() || Tv()) {
        let wU = 1;
        let wV = Nz[2][Nk];
        if (wV < 11) {
          if (wK[wV + 1] === 0) {
            wU = 0;
            if (wV % 2 === 1 && wV > 0) {
              Nz[2][Nk]--;
            }
          }
        } else {
          Nz[2][Nk]--;
          wU = 0;
        }
        if (wU === 1) {
          if (wV % 2 === 0) {
            Nz[2][Nk]++;
          } else {
            Nz[2][Nk]--;
          }
        }
      }
      if (TB()) {
        let wG = Nz[2][Nk];
        let wh = 1;
        if (wG >= 10) {
          wh = 0;
        } else {
          if (wK[wG + 2] === 0) {
            wh = 0;
          }
          if (wG === 5 && wK[6] !== 0 && wK[7] === 0) {
            wh = 2;
          }
        }
        if (wh === 1) {
          Nz[2][Nk] += 2;
        }
        if (wh === 2) {
          Nz[2][Nk] = 6;
        }
      }
      if (TP() && Nz[2][Nk] > 1) {
        Nz[2][Nk] -= 2;
      }
      a.tensionselect = (a.battlespellcost[wf] || [])[Nz[2][Nk]] || 0;
      let wE = this.techUnlocked(wf, Nz[2][Nk]) && (!(a.chapter >= 4) || !n.techBlocked || !n.techBlocked(this, wf, Nz[2][Nk]));
      if (TW() && wK[Nz[2][Nk]] !== 0 && this.onebuffer < 0 && wE && ((a.battlespellcost[wf] || [])[Nz[2][Nk]] || 0) <= a.tension) {
        if (a.chapter >= 4 && n.techConfirm && n.techConfirm(this, wf, Nz[2][Nk], "before") || (this.onebuffer = 2, a.bmenuno = 0, this.selnoise = 1, a.chapter >= 4 && n.techConfirm && n.techConfirm(this, wf, Nz[2][Nk], "after"))) {
          return;
        }
        if (wK[Nz[2][Nk]] !== -1) {
          let wj = a.chapter >= 4 && n.chapterSpellinfo ? n.chapterSpellinfo(wK[Nz[2][Nk]]) : T1(wK[Nz[2][Nk]]);
          this.cost = wj.cost;
          if (wj.spelltarget === 0) {
            scr_spellconsumeb(wj.cost);
          }
          if (wj.spelltarget === 1) {
            a.bmenuno = 8;
          }
          if (wj.spelltarget === 2) {
            a.bmenuno = 3;
          }
          if (wj.spelltarget === 3) {
            a.bmenuno = 99;
          }
        } else if (!(a.chapter >= 4) || !n.techActDirect || !n.techActDirect(this, wf, Nz[2][Nk])) {
          a.bmenuno = 13;
        }
      }
      if (TL() && this.onebuffer < 0) {
        a.tensionselect = 0;
        this.twobuffer = 1;
        a.bmenuno = 0;
        this.movenoise = 1;
      }
    } else if (a.bmenuno === 2) {
      if (this.battlewriter) {
        this.battlewriter.skipme = 1;
      }
      w1();
      let wF = a.char[Nk];
      let wQ = a.spell[wF];
      if (TC()) {
        let wp = 1;
        let wR = Nz[2][Nk];
        if (wR < 11) {
          if (wQ[wR + 1] === 0) {
            wp = 0;
            if (wR % 2 === 1 && wR > 0) {
              Nz[2][Nk]--;
            }
          }
        } else {
          Nz[2][Nk]--;
          wp = 0;
        }
        if (wp === 1) {
          if (wR % 2 === 0) {
            Nz[2][Nk]++;
          } else {
            Nz[2][Nk]--;
          }
        }
      }
      if (Tv()) {
        let wb = Nz[2][Nk];
        if (wQ[1] !== 0) {
          if (wb % 2 === 0) {
            Nz[2][Nk]++;
          } else {
            Nz[2][Nk]--;
          }
        }
      }
      if (TB()) {
        let wc = Nz[2][Nk];
        let wS = 1;
        if (wc >= 10) {
          wS = 0;
        } else {
          if (wQ[wc + 2] === 0) {
            wS = 0;
          }
          if (wc === 5 && wQ[6] !== 0 && wQ[7] === 0) {
            wS = 2;
          }
        }
        if (wS === 1) {
          Nz[2][Nk] += 2;
        }
        if (wS === 2) {
          Nz[2][Nk] = 6;
        }
      }
      if (TP() && Nz[2][Nk] > 1) {
        Nz[2][Nk] -= 2;
      }
      a.tensionselect = a.spellcost[wF][Nz[2][Nk]];
      if (TW() && wQ[Nz[2][Nk]] !== 0 && this.onebuffer < 0 && a.spellcost[wF][Nz[2][Nk]] <= a.tension) {
        this.onebuffer = 2;
        a.bmenuno = 0;
        this.selnoise = 1;
        let wn = T1(wQ[Nz[2][Nk]]);
        this.cost = wn.cost;
        if (wn.spelltarget === 0) {
          scr_spellconsumeb(wn.cost);
        }
        if (wn.spelltarget === 1) {
          a.bmenuno = 8;
        }
        if (wn.spelltarget === 2) {
          a.bmenuno = 3;
        }
      }
      if (TL() && this.onebuffer < 0) {
        a.tensionselect = 0;
        this.twobuffer = 1;
        a.bmenuno = 0;
        this.movenoise = 1;
      }
    }
    if (a.bmenuno === 4) {
      if (this.battlewriter) {
        this.battlewriter.skipme = 1;
      }
      w1();
      let wo = ws => this.tempitem[ws] ? this.tempitem[ws][Nk] : 0;
      if (wo(Nz[4][Nk]) === 0 && Nz[4][Nk] > 0) {
        Nz[4][Nk]--;
      }
      if (TC()) {
        let ws = 1;
        let wJ = Nz[4][Nk];
        if (wJ < 11) {
          if (wo(wJ + 1) === 0) {
            ws = 0;
            if (wJ % 2 === 1 && wJ > 0) {
              Nz[4][Nk]--;
            }
          }
        } else {
          Nz[4][Nk]--;
          ws = 0;
        }
        if (ws === 1) {
          if (wJ % 2 === 0) {
            Nz[4][Nk]++;
          } else {
            Nz[4][Nk]--;
          }
        }
      }
      if (Tv()) {
        let wY = Nz[4][Nk];
        if (wo(1) !== 0) {
          if (wY % 2 === 0) {
            Nz[4][Nk]++;
          } else {
            Nz[4][Nk]--;
          }
        }
      }
      if (TB()) {
        let wa = Nz[4][Nk];
        let wM = 1;
        if (wa >= 10) {
          wM = 0;
        } else {
          if (wo(wa + 2) === 0) {
            wM = 0;
          }
          if (wa === 5 && wo(6) !== 0 && wo(7) === 0) {
            wM = 2;
          }
        }
        if (wM === 1) {
          Nz[4][Nk] += 2;
        }
        if (wM === 2) {
          Nz[4][Nk] = 6;
        }
        if (wM === 0) {
          Nz[4][Nk] = itemWrap(wo, wa, 1);
        }
      }
      if (TP()) {
        if (Nz[4][Nk] > 1) {
          Nz[4][Nk] -= 2;
        } else {
          Nz[4][Nk] = itemWrap(wo, Nz[4][Nk], -1);
        }
      }
      if (wo(Nz[4][Nk]) === 0 && Nz[4][Nk] > 0) {
        Nz[4][Nk]--;
      }
      if (TW() && wo(Nz[4][Nk]) !== 0 && this.onebuffer < 0) {
        this.onebuffer = 2;
        a.bmenuno = 0;
        this.selnoise = 1;
        let wm = wo(Nz[4][Nk]);
        let wr = z[wm];
        this.itemsel = {
          id: wm,
          idx: Nz[4][Nk]
        };
        if (a.chapter >= 4 && n.itemMenuPick && n.itemMenuPick(this, wm, Nz[4][Nk])) {
          return;
        }
        let wX = !wr || wr[2] === 0 || wr[2] === 2 ? itemPickTension(T0(wm)) : null;
        if (wX !== null) {
          T3(wX);
          tpItemFx(Nk);
          let wD = Nk;
          for (let wq = Nz[4][Nk]; wq < 12; wq++) {
            this.tempitem[wq][wD] = this.tempitem[wq + 1] ? this.tempitem[wq + 1][wD] : 0;
          }
          scr_nexthero();
        } else if (!wr || wr[2] === 0 || wr[2] === 2) {
          scr_itemconsumeb(wm, Nz[4][Nk]);
        } else {
          a.bmenuno = 7;
        }
      }
      if (TL() && this.onebuffer < 0) {
        this.twobuffer = 1;
        a.bmenuno = 0;
        this.movenoise = 1;
        if (a.chapter >= 4 && n.itemMenuCancel) {
          n.itemMenuCancel(this);
        }
      }
    }
    if (a.bmenuno === 9) {
      let wd = Nz[11][Nk];
      let wA = this.actinfo(wd);
      if (TC()) {
        let u1 = 1;
        let u2 = Nz[9][Nk];
        if (u2 < 5) {
          if (wA.canact.get(u2 + 1) === 0) {
            u1 = 0;
            if (u2 % 2 === 1 && u2 > 0) {
              Nz[9][Nk]--;
            }
          }
        } else {
          Nz[9][Nk]--;
          u1 = 0;
        }
        if (u1 === 1) {
          if (u2 % 2 === 0) {
            Nz[9][Nk]++;
          } else {
            Nz[9][Nk]--;
          }
        }
      }
      if (Tv()) {
        let u3 = Nz[9][Nk];
        if (u3 % 2 === 0) {
          if (wA.canact.get(u3 + 1) !== 0) {
            Nz[9][Nk]++;
          }
        } else {
          Nz[9][Nk]--;
        }
      }
      if (TB()) {
        let u4 = Nz[9][Nk];
        let u5 = 1;
        if (u4 >= 4 || wA.canact.get(u4 + 2) === 0) {
          u5 = 0;
        }
        if (u5 === 1) {
          Nz[9][Nk] += 2;
        }
      }
      if (TP() && Nz[9][Nk] > 1) {
        Nz[9][Nk] -= 2;
      }
      a.tensionselect = wA.cost.get(Nz[9][Nk]);
      let wk = 1;
      let wz = a.chapter === 1 || a.char[Nk] === 1 ? a.actactor[wd][Nz[9][Nk]] : 0;
      if (wz === 2 || wz === 4) {
        if (!this.partnerReady(2)) {
          wk = 0;
        }
      }
      if (wz === 3 || wz === 4) {
        if (!this.partnerReady(3)) {
          wk = 0;
        }
      }
      if (wz === 5 && a.chapter !== 1) {
        if (!this.partnerReady(4)) {
          wk = 0;
        }
      }
      let u0 = true;
      if (a.chapter === 3) {
        let u6 = (a.actname[wd] || [])[Nz[9][Nk]];
        let u7 = TK.first("obj_pippins_enemy");
        if ((a.flag[1044] || 0) < 150 && u7 && u6 === (a.actname[u7.myself] || [])[3]) {
          u0 = false;
        }
        let u8 = [1, 2, 3].some(uN => a.chararmor1[uN] === 7 || a.chararmor2[uN] === 7);
        let u9 = TK.first("obj_tenna_enemy_bg");
        let uT = TK.first("obj_tenna_enemy");
        if (u9 && uT && u9.myscore < (u8 ? 30 : 20) && u6 === (a.actnamesus[uT.myself] || [])[1]) {
          u0 = false;
        }
      }
      if ((a.chapter === 2 || a.chapter === 3) && wk === 1 && u0 && TW() && (a.canact[wd] || [])[Nz[9][Nk]] === 1 && a.tension >= a.tensionselect && this.onebuffer < 0) {
        this.onebuffer = 2;
        a.bmenuno = 0;
        this.selnoise = 1;
        let uN = Nz[9][Nk];
        a.actingchoice[Nk] = uN;
        a.tension -= wA.cost.get(uN);
        a.tensionselect = 0;
        this.actselect(wd, uN);
        Nz[9][Nk] = 0;
        scr_nexthero();
      } else if (a.chapter !== 2 && a.chapter !== 3 && wk === 1 && TW() && (a.canact[wd] || [])[Nz[9][Nk]] === 1 && a.tension >= a.tensionselect && this.onebuffer < 0) {
        this.onebuffer = 2;
        a.bmenuno = 0;
        this.selnoise = 1;
        a.tension -= wA.cost.get(Nz[9][Nk]);
        a.tensionselect = 0;
        let uw = a.monsterinstance[wd];
        if (uw && !uw.destroyed) {
          uw.acting = Nz[9][Nk] + 1;
        }
        if (a.chapter >= 2) {
          a.actingchoice[Nk] = Nz[9][Nk];
          a.actingsimul[d()] = wA.simul.get(Nz[9][Nk]);
          a.actingsingle[d()] = 1;
          a.actingtarget[Nk] = wd;
        }
        a.acting[d()] = 1;
        if (wz === 2 && q(2) >= 0) {
          a.acting[q(2)] = 1;
        }
        if (wz === 3 && q(3) >= 0) {
          a.acting[q(3)] = 1;
        }
        if (wz === 4) {
          if (a.char[2]) {
            a.acting[2] = 1;
          }
          if (a.char[1]) {
            a.acting[1] = 1;
          }
        }
        for (let uu = 0; uu < A(); uu++) {
          if (a.acting[uu] === 1) {
            a.faceaction[uu] = 6;
            a.charaction[uu] = 9;
          }
        }
        scr_nexthero();
      }
      if (TL() && this.onebuffer < 0) {
        if (a.chapter === 2 || a.chapter === 3) {
          Nz[9][Nk] = 0;
        }
        a.tensionselect = 0;
        this.twobuffer = 1;
        a.bmenuno = 11;
        this.movenoise = 1;
      }
    }
    let w2 = a.chapter === 1 ? [7, 1, 8, 3, 11, 12] : [7, 1, 8, 3, 11, 12, 13];
    if (w2.includes(a.bmenuno) && (this.battlewriter && (this.battlewriter.skipme = 1), w1(), TL() && this.onebuffer < 0 && (this.twobuffer = 1, [1, 11, 12].includes(a.bmenuno) ? a.bmenuno = 0 : a.bmenuno === 7 ? a.bmenuno = 4 : (a.bmenuno === 8 || a.bmenuno === 3 || a.bmenuno === 13) && (a.bmenuno = 2), this.movenoise = 1), w2.includes(a.bmenuno))) {
      let uW = a.bmenuno;
      let uZ = [0, 0, 0];
      if (uW === 7 || uW === 8) {
        for (let uK = 0; uK < A(); uK++) {
          if (a.char[uK] > 0) {
            uZ[uK] = 1;
          }
        }
      } else {
        for (let uE = 0; uE < 3; uE++) {
          uZ[uE] = a.monster[uE];
        }
      }
      if (Nz[uW][Nk] === 2 && uZ[2] === 0) {
        Nz[uW][Nk] = 0;
      }
      if (Nz[uW][Nk] === 0 && uZ[0] === 0) {
        Nz[uW][Nk] = 1;
      }
      if (Nz[uW][Nk] === 1 && uZ[1] === 0) {
        Nz[uW][Nk] = 0;
      }
      if (Nz[uW][Nk] === 0 && uZ[0] === 0) {
        Nz[uW][Nk] = 2;
      }
      let uL = TB() ? 1 : TP() ? -1 : 0;
      if (uL !== 0 && uW !== 7 && uW !== 8 && a.monster.__customBoard && n.customScroll && n.customScroll(uW, Nk, uL)) {
        this.movenoise = 1;
      } else {
        if (TB()) {
          let uI = Nz[uW][Nk];
          let uv = uI === 0 ? [1, 2] : uI === 1 ? [2, 0] : [0, 1];
          for (let uC of uv) {
            if (uZ[uC] === 1) {
              this.movenoise = 1;
              Nz[uW][Nk] = uC;
              break;
            }
          }
        }
        if (TP()) {
          let uO = Nz[uW][Nk];
          let uP = uO === 0 ? [2, 1] : uO === 1 ? [0, 2] : [1, 0];
          for (let uB of uP) {
            if (uZ[uB] === 1) {
              this.movenoise = 1;
              Nz[uW][Nk] = uB;
              break;
            }
          }
        }
      }
      let uf = a.chapter >= 4 && this.skipmonsterselection ? (this.skipmonsterselection = 0, true) : false;
      if (TW() && this.onebuffer < 0 || uf) {
        if (uW !== 7 && uW !== 8 && a.monster.__customBoard && n.customTargetPicked) {
          n.customTargetPicked(uW, Nk, Nz[uW][Nk]);
        }
        this.onebuffer = 1;
        this.selnoise = 1;
        if (uW === 1) {
          a.chartarget[Nk] = Nz[uW][Nk];
          a.faceaction[Nk] = 1;
          a.charaction[Nk] = 1;
          scr_nexthero();
        }
        if (uW === 7) {
          a.chartarget[Nk] = Nz[uW][Nk];
          {
            let ux = this.itemsel && itemTargetTension(T0(this.itemsel.id));
            if (ux) {
              T3(ux);
              tpItemFx(Nk);
            }
          }
          if (a.chapter >= 4 && n.itemTargetSkip && n.itemTargetSkip(this)) {
            scr_nexthero();
          } else {
            scr_itemconsumeb(this.itemsel.id, this.itemsel.idx);
            if (a.chapter === 2) {
              TK.with("o_boxingcontroller", uU => {
                uU.specialcon = 7;
              });
            }
          }
        }
        if (uW === 8 || uW === 3) {
          a.chartarget[Nk] = Nz[uW][Nk];
          scr_spellconsumeb(this.cost);
        }
        if (uW === 11) {
          a.bmenuno = 9;
          let uU = Nz[9][Nk];
          let uV = Nz[11][Nk];
          let uG = this.actinfo(uV);
          for (let uh = 0; uh < 6; uh++) {
            if (uG.canact.get(uU) === 0 && uU > 0) {
              Nz[9][Nk]--;
              uU--;
            }
          }
          this.onebuffer = 1;
        }
        if (uW === 12) {
          a.faceaction[Nk] = 10;
          a.chartarget[Nk] = Nz[uW][Nk];
          a.charaction[Nk] = 2;
          a.charspecial[Nk] = 100;
          scr_nexthero();
        }
        if (uW === 13) {
          this.onebuffer = 2;
          a.bmenuno = 0;
          this.selnoise = 1;
          let ug = Nz[2][Nk];
          let ul = Nz[13][Nk];
          a.actingchoice[Nk] = ug;
          a.tension -= (a.battlespellcost[Nk] || [])[ug] || 0;
          a.tensionselect = 0;
          this.actselect(ul, ug);
          if (a.chapter >= 4 && n.techActPicked && n.techActPicked(this)) {
            return;
          }
          scr_nexthero();
        }
      }
    }
  }
  draw(Nk) {
    if (battleUIHidden()) {
      return;
    }
    let Nz = 0;
    let w0 = 0;
    if (a.chapter === 2 && TK.exists("obj_gigaqueen_enemy")) {
      if (this.gigaqueencon === 1) {
        this.gigaqueentimer++;
        this.gigaqueeny = v(0, 100, this.gigaqueentimer / 10);
        if (this.gigaqueentimer === 10) {
          this.gigaqueencon = 0;
        }
      }
      if (this.gigaqueencon === 2) {
        this.gigaqueentimer++;
        this.gigaqueeny = v(100, 0, this.gigaqueentimer / 10);
        if (this.gigaqueentimer === 10) {
          this.gigaqueencon = 0;
        }
      }
      if (this.gigaqueencon === 3) {
        this.gigaqueeny = 200;
      }
      if (this.gigaqueencon === 4) {
        this.gigaqueentimer++;
        this.gigaqueeny = v(200, 0, this.gigaqueentimer / 10);
        if (this.gigaqueentimer === 10) {
          this.gigaqueencon = 0;
        }
      }
      if (this.gigaqueencon === 5) {
        this.gigaqueentimer++;
        this.gigaqueeny = v(0, 200, this.gigaqueentimer / 10);
        if (this.gigaqueentimer === 10) {
          this.gigaqueencon = 0;
        }
      }
      w0 = this.gigaqueeny;
    }
    let w1 = -this.bp + this.bpy + w0;
    if (this.intro === 1) {
      if (this.bp < this.bpy - 1) {
        if (this.bpy - this.bp < 40) {
          this.bp += Tl((this.bpy - this.bp) / 2.5);
        } else {
          this.bp += 30;
        }
      } else {
        this.bp = this.bpy;
      }
      if (this.bp === this.bpy) {
        this.intro = 0;
      }
    }
    if (this.intro === 2) {
      if (this.bp > 0) {
        if (Tl((this.bpy - this.bp) / 5) > 15) {
          this.bp -= Tl((this.bpy - this.bp) / 2.5);
        } else {
          this.bp -= 30;
        }
      } else {
        this.bp = 0;
      }
    }
    if (a.chapter >= 4 && n.bcBp) {
      n.bcBp(this);
    }
    let w2 = this.bp;
    if (a.chapter >= 4 && n.bcDrawTop) {
      n.bcDrawTop(this, Nk);
    }
    this.rouxlsButtonStep();
    let w3 = a.chapter === 1;
    Nk.draw_set_color(TZ.black);
    Nk.draw_rectangle(Nz - 10, 481 + w0, Nz + 700, w3 ? 480 - w2 + w0 : 480 - w2 + w0 - 4, false);
    Nk.draw_set_color(this.bcolor);
    if (w3) {
      Nk.draw_rectangle(Nz - 10, 480 - w2 - 2 + w0, Nz + 700, 480 - w2 + w0, false);
    } else {
      Nk.draw_rectangle(Nz - 10, 480 - w2 - 3 + w0, Nz + 700, 480 - w2 - 2 + w0, false);
    }
    Nk.draw_rectangle(Nz - 10, 480 - w2 + 34 + w0, Nz + 700, 480 - w2 + 36 + w0, false);
    this.charbox(Nk, w1, w0);
    Nk.draw_set_font("fnt_mainbig");
    let w4 = a.charturn;
    let w5 = a.bmenucoord;
    if (([1, 3, 11, 12].includes(a.bmenuno) || a.bmenuno === 13 && a.chapter !== 1) && a.myfight === 0) {
      Nk.draw_sprite("spr_heart", 0, Nz + 55, w0 + 385 + w5[a.bmenuno][w4] * 30);
      let w6 = 0;
      for (let w8 = 0; w8 < 3; w8++) {
        let w9 = Nk.string_width(a.monstername[w8]);
        if (w9 > w6) {
          w6 = w9;
        }
      }
      let w7 = a.monsterinstance[w5[a.bmenuno][w4]];
      if (w7 && !w7.destroyed) {
        if (w7.flash === 0) {
          w7.fsiner = 0;
        }
        w7.flash = 1;
        w7.becomeflash = 1;
      }
      if (a.monster.__customBoard && n.customHidden && n.customHidden() > 0) {
        Nk.draw_sprite_ext("spr_morearrow", 0, Nz + 40, w0 + 382 - TF(this.s_siner / 10) * 2, 1, -1, 0, TZ.white, 1);
        Nk.draw_sprite("spr_morearrow", 0, Nz + 40, w0 + 446 + TF(this.s_siner / 10) * 2);
      }
      for (let wT = 0; wT < 3; wT++) {
        if (a.monster[wT] === 1) {
          let wL = TZ.white;
          let wf = TZ.white;
          let wK = TE(TZ.aqua, TZ.blue, 0.3);
          if (a.chapter === 3 && a.charturn === 2) {
            wK = TE(wK, TZ.white, 0.5 + TF((this.t_siner || 0) / 4) * 0.5);
          }
          let wE = a.monsterstatus[wT] === 1;
          let wU = a.mercymod[wT] >= a.mercymax[wT];
          let wV = Nk.string_width(a.monstername[wT]);
          if (wE) {
            if (a.encounterno !== 31) {
              wL = wK;
              wf = wK;
            }
            Nk.draw_sprite("spr_tiredmark", 0, Nz + 80 + wV + 40, w0 + 385 + wT * 30);
          }
          let wG = a.chapter !== 1 && this.hidemercy === 1;
          let wh = a.chapter >= 4 && this.hidestar === 1;
          if (!wU || !wh) {
            if (wU) {
              wL = TZ.yellow;
              if (!wE) {
                wf = TZ.yellow;
              }
              if (!wG) {
                Nk.draw_sprite("spr_sparestar", 0, Nz + 80 + wV + 20, w0 + 385 + wT * 30);
              }
            }
          }
          Nk.draw_text_colour(Nz + 80, w0 + 375 + wT * 30, a.monstername[wT], wL, wf, wf, wL, 1);
          let wj = a.bmenuno === 13 && a.chapter !== 1;
          if (wj) {
            let wF = a.char[w4];
            let wQ = w5[2][w4];
            let wp = wF === 2 ? a.actnamesus : wF === 3 ? a.actnameral : wF === 4 ? a.actnamenoe : null;
            let wR = "Standard";
            if (wp && wp[wT] && wp[wT][wQ] !== undefined) {
              wR = wp[wT][wQ];
            }
            if (wR === "S-Action" || wR === "R-Action" || wR === "N-Action") {
              wR = "Standard";
            }
            Nk.draw_set_color((this.hpcolorsoft || [])[r(wF) - 1] || TZ.white);
            let wb = 514 - (80 + w6 + 60);
            let wc = Nk.string_width(String(wR));
            Nk.draw_text_transformed(Nz + 80 + w6 + 60, w0 + 375 + wT * 30, String(wR), wc >= wb ? wb / wc : 1, 1, 0);
          }
          if (!wj) {
            Nk.draw_text(Nz + 80 + wV + 60, w0 + 375 + wT * 30, a.monstercomment[wT], TZ.gray);
            let wS = a.chapter === 1 ? 510 : 420;
            let wn = a.chapter === 1 ? 590 : 500;
            let wo = Math.max(0, a.monsterhp[wT] / a.monstermaxhp[wT]);
            Nk.draw_set_color(TZ.maroon);
            Nk.draw_rectangle(Nz + wS, w0 + 380 + wT * 30, Nz + wn, w0 + 380 + wT * 30 + 15, false);
            Nk.draw_set_color(TZ.lime);
            Nk.draw_rectangle(Nz + wS, w0 + 380 + wT * 30, Nz + wS + wo * 80, w0 + 380 + wT * 30 + 15, false);
            if (a.chapter !== 1) {
              Nk.draw_set_color(TZ.white);
              Nk.draw_text_transformed(Nz + 424, w0 + 364, "HP", 1, 0.5, 0);
              let ws = a.chapter === 3 && TK.exists("obj_knight_enemy") ? "???" : Math.ceil(wo * 100) + "%";
              Nk.draw_text_transformed(Nz + 424, w0 + 380 + wT * 30, ws, 1, 0.5, 0);
            }
          }
          if (a.chapter !== 1 && !wG) {
            let wJ = Math.ceil(a.mercymod[wT] / a.mercymax[wT] * 100);
            if (wJ > 100) {
              wJ = 100;
            }
            let wY = (this.cantspare || [])[wT] === 1;
            let wa = a.chapter >= 4 && (this.questionmercy || [])[wT] === 1;
            if (a.chapter >= 4) {
              wJ = Math.round(a.mercymod[wT] / a.mercymax[wT] * 100);
              if (wJ > 100) {
                wJ = 100;
              }
            }
            Nk.draw_set_color(TE(TZ.orange, TZ.red, 0.5));
            Nk.draw_rectangle(Nz + 520, w0 + 380 + wT * 30, Nz + 600, w0 + 380 + wT * 30 + 15, false);
            Nk.draw_set_color(TZ.yellow);
            if (a.mercymod[wT] > 0 && !wY && !wa) {
              Nk.draw_rectangle(Nz + 520, w0 + 380 + wT * 30, Nz + 520 + wJ * 0.8, w0 + 380 + wT * 30 + 15, false);
            }
            Nk.draw_set_color(TZ.white);
            Nk.draw_text_transformed(Nz + 524, w0 + 364, "MERCY", 1, 0.5, 0);
            Nk.draw_set_color(TZ.maroon);
            if (!wY && !wa) {
              Nk.draw_text_transformed(Nz + 524, w0 + 380 + wT * 30, wJ + "%", 1, 0.5, 0);
            } else if (wa && !wY) {
              Nk.draw_set_color(TZ.white);
              Nk.draw_text_transformed(Nz + 524, w0 + 364 + 15, "???", 1, 0.5, 0);
            } else {
              Nk.draw_line_width_color(Nz + 520 - 1, w0 + 380 + wT * 30, Nz + 600, w0 + 380 + wT * 30 + 15, 2, TZ.maroon, TZ.maroon);
              Nk.draw_line_width_color(Nz + 520 - 1, w0 + 380 + wT * 30 + 15, Nz + 600, w0 + 380 + wT * 30, 2, TZ.maroon, TZ.maroon);
            }
          }
        }
      }
    }
    if (a.bmenuno === 2 && a.myfight === 0 && a.flag[34] === 0 && a.chapter !== 1) {
      let wM = w4;
      let wm = w5[2][w4];
      let wr = 0;
      if (wm > 5) {
        wr = 1;
        wm -= 6;
      }
      let wX = 10;
      let wD = 385;
      if (wm % 2 === 1) {
        wX = 230;
      }
      if (wm > 1 && wm < 4) {
        wD = 415;
      }
      if (wm > 3) {
        wD = 445;
      }
      Nk.draw_sprite("spr_heart", 0, Nz + wX, w0 + wD);
      let wq = a.battlespellname[wM] || [];
      let wd = a.battlespellcost[wM] || [];
      let wA = a.battlespellspecial[wM] || [];
      let wk = a.battlespell[wM] || [];
      for (let wz = 0; wz < 3; wz++) {
        for (let u0 = 0; u0 < 2; u0++) {
          let u1 = wr * 6 + wz * 2 + u0;
          let u2 = TZ.white;
          if ((wA[u1] || 0) >= 1) {
            u2 = (this.hpcolorsoft || [])[r(a.char[wM]) - 1] || TZ.white;
          }
          let u3 = !this.techUnlocked(wM, u1);
          let u4 = a.chapter >= 4 && n.techMenuColor ? n.techMenuColor(this, wM, u1, u2) : null;
          if (u4 != null && u4 !== false) {
            u2 = u4;
          } else if (a.tension < (wd[u1] || 0) || u3) {
            u2 = TZ.gray;
          } else if (wk[u1] === 3 || wk[u1] === 8) {
            let u5 = 0;
            for (let u6 = 0; u6 < 3; u6++) {
              if (a.monster[u6] === 1 && a.monsterstatus[u6] === 1 && a.encounterno !== 31) {
                u5 = 1;
              }
            }
            if (u5) {
              let u7 = TE(TZ.aqua, TZ.blue, 0.3);
              u2 = TE(u7, TZ.white, 0.5 + TF((this.t_siner || 0) / 4) * 0.5);
            }
          }
          Nk.draw_text(Nz + 30 + u0 * 230, w0 + 375 + wz * 30, wq[u1] === undefined ? " " : wq[u1], u2);
        }
      }
      if (!(a.chapter >= 4) || !n.techMenuInfoHide || !n.techMenuInfoHide(this, wM, wr * 6 + wm)) {
        let u8 = String((a.battlespelldesc[wM] || [])[wr * 6 + wm] || " ").split("#");
        for (let uT = 0; uT < u8.length; uT++) {
          Nk.draw_text(Nz + 500, w0 + 375 + uT * 28, u8[uT], TZ.gray);
        }
        let u9 = Ti((wd[wr * 6 + wm] || 0) / a.maxtension * 100);
        if (u9 > 0) {
          Nk.draw_text(Nz + 500, w0 + 440, u9 + "% TP", TZ.orange);
        }
      }
    } else if (a.bmenuno === 2 && a.myfight === 0) {
      let uN = a.char[w4];
      let uw = w5[2][w4];
      let uu = 0;
      if (uw > 5) {
        uu = 1;
        uw -= 6;
      }
      let uW = 10;
      let uZ = 385;
      if (uw % 2 === 1) {
        uW = 230;
      }
      if (uw > 1 && uw < 4) {
        uZ = 415;
      }
      if (uw > 3) {
        uZ = 445;
      }
      Nk.draw_sprite("spr_heart", 0, Nz + uW, w0 + uZ);
      for (let uK = 0; uK < 3; uK++) {
        let uE = uu * 6 + uK * 2;
        let uI = TZ.white;
        if (a.tension < a.spellcost[uN][uE]) {
          uI = TZ.gray;
        } else if (a.spell[uN][uE] === 3) {
          let uv = 0;
          for (let uC = 0; uC < 3; uC++) {
            if (a.monster[uC] === 1 && a.monsterstatus[uC] === 1 && a.encounterno !== 31) {
              uv = 1;
            }
          }
          if (uv) {
            uI = TE(TZ.aqua, TZ.blue, 0.3);
          }
        }
        Nk.draw_text(Nz + 30, w0 + 375 + uK * 30, a.spellnameb[uN][uE], uI);
        Nk.draw_text(Nz + 260, w0 + 375 + uK * 30, a.spellnameb[uN][uE + 1], a.tension < a.spellcost[uN][uE + 1] ? TZ.gray : TZ.white);
      }
      let uL = (a.spelldescb[uN][uu * 6 + uw] || "").split("#");
      for (let uO = 0; uO < uL.length; uO++) {
        Nk.draw_text(Nz + 500, w0 + 375 + uO * 28, uL[uO], TZ.gray);
      }
      let uf = Tl(a.spellcost[uN][uu * 6 + uw] / a.maxtension * 100);
      Nk.draw_text(Nz + 500, w0 + 440, uf + "% TP", TZ.orange);
    }
    if (a.bmenuno === 4 && a.myfight === 0) {
      let uP = w5[4][w4];
      let uB = 0;
      if (uP > 5) {
        uB = 1;
        uP -= 6;
      }
      let ux = 10;
      let uU = 385;
      if (uP % 2 === 1) {
        ux = 230;
      }
      if (uP > 1 && uP < 4) {
        uU = 415;
      }
      if (uP > 3) {
        uU = 445;
      }
      Nk.draw_sprite("spr_heart", 0, Nz + ux, w0 + uU);
      let uV = ug => {
        let ul = this.tempitem[ug] ? this.tempitem[ug][w4] : 0;
        if (ul && z[ul]) {
          return z[ul][1];
        } else {
          return " ";
        }
      };
      for (let ug = 0; ug < 3; ug++) {
        Nk.draw_text(Nz + 30, w0 + 375 + ug * 30, uV(uB * 6 + ug * 2), TZ.white);
        Nk.draw_text(Nz + 260, w0 + 375 + ug * 30, uV(uB * 6 + ug * 2 + 1), TZ.white);
      }
      if (uB === 0 && a.item[6] !== 0) {
        Nk.draw_sprite("spr_morearrow", 0, Nz + 470, w0 + 445 + TF(this.s_siner / 10) * 2);
      }
      if (uB === 1) {
        Nk.draw_sprite_ext("spr_morearrow", 0, Nz + 470, w0 + 395 - TF(this.s_siner / 10) * 2, 1, -1, 0, TZ.white, 1);
      }
      let uG = this.tempitem[uB * 6 + uP] ? this.tempitem[uB * 6 + uP][w4] : 0;
      let uh = uG ? Y.items[uG - 200] : null;
      Nk.draw_text(Nz + 500, w0 + 375, uh ? uh.desc.replace(/#/g, "\n") : uG && z[uG] ? z[uG][3] : " ", TZ.gray);
    }
    if (a.bmenuno === 9 && a.myfight === 0) {
      let ul = w5[9][w4];
      let uH = w5[11][w4];
      let uj = 10;
      let uF = 385;
      if (ul % 2 === 1) {
        uj = 240;
      }
      if (ul > 1 && ul < 4) {
        uF = 415;
      }
      if (ul > 3) {
        uF = 445;
      }
      Nk.draw_sprite("spr_heart", 0, Nz + uj, w0 + uF);
      let uQ = this.actinfo(uH);
      let up = a.chapter === 1;
      for (let uc = 0; uc < 6; uc++) {
        let uS = 0;
        let uy = up || a.char[w4] === 1 ? a.actactor[uH][uc] : 0;
        let un = 0;
        let uo = uc % 2 === 1 ? 230 : 0;
        let us = uc >= 4 ? 60 : uc >= 2 ? 30 : 0;
        let uJ = up ? 36 : 30;
        let uY = TZ.white;
        let ua = TZ.white;
        let uM = TZ.white;
        if (uy === 2 || uy === 4) {
          if (!this.partnerReady(2)) {
            uY = TZ.gray;
            uS = 1;
          }
          un = uJ;
        }
        if (uy === 3 || uy === 4) {
          if (!this.partnerReady(3)) {
            ua = TZ.gray;
            uS = 1;
          }
          un = uJ;
        }
        if (uy === 5 && !up) {
          if (!this.partnerReady(4)) {
            uM = TZ.gray;
            uS = 1;
          }
          un = uJ;
        }
        if (a.tension < uQ.cost.get(uc)) {
          uS = 1;
        }
        if (uy === 4) {
          un = up ? Tl(un * 1.8) : un * 2;
        }
        if (uy === 2) {
          Nk.draw_sprite_ext("spr_headsusie", 0, Nz + 30 + uo, w0 + 375 + us, 1, 1, 0, uY, 1);
        }
        if (uy === 3) {
          Nk.draw_sprite_ext("spr_headralsei", 0, Nz + 30 + uo, w0 + 375 + us, 1, 1, 0, uY, 1);
        }
        if (uy === 4) {
          Nk.draw_sprite_ext("spr_headsusie", 0, Nz + 30 + uo, w0 + 375 + us, 1, 1, 0, uY, 1);
          Nk.draw_sprite_ext("spr_headralsei", 0, Nz + 60 + uo, w0 + 375 + us, 1, 1, 0, uY, 1);
        }
        if (uy === 5 && !up) {
          Nk.draw_sprite_ext("spr_headnoelle", 0, Nz + 30 + uo, w0 + 375 + us, 1, 1, 0, uM, 1);
        }
        if (a.chapter === 2) {
          TK.with("obj_spamton_neo_enemy", uX => {
            let uD = uX.savemeactcon || 0;
            if (uD <= 0) {
              return;
            }
            let uq = uD <= 2 ? "spr_headralsei" : uD <= 4 ? "spr_headsusie" : "spr_headnoelle";
            Nk.draw_sprite_ext(uq, 0, Nz + 30, w0 + 380, 1, 1, 0, uM, 1);
          });
        }
        let um = String(uQ.name.get(uc));
        let ur = uS ? TZ.gray : TZ.white;
        if (a.chapter >= 4 && n.actNameColor) {
          ur = n.actNameColor(uc, uS, ur);
        }
        if (up) {
          Nk.draw_text(Nz + 30 + un + uo, w0 + 375 + us, um, ur);
        } else {
          let uX = Math.max(1, Nk.string_width(um));
          let uD = Math.min(1, Math.max(0.5, (206 - un) / uX));
          Nk.draw_set_color(ur);
          Nk.draw_text_transformed(Nz + 30 + un + uo, w0 + 375 + us, um, uD, 1, 0);
        }
      }
      let uR = a.chapter >= 4 && n.actInfoHide ? n.actInfoHide(this, ul) || {} : {};
      if (!uR.desc) {
        let uq = String(uQ.desc.get(ul) || " ").split("#");
        for (let ud = 0; ud < uq.length; ud++) {
          Nk.draw_text(Nz + 500, w0 + 375 + ud * 28, uq[ud], TZ.gray);
        }
      }
      if (a.tensionselect > 0 && !uR.tp) {
        let uA = Tl(uQ.cost.get(ul) / a.maxtension * 100);
        Nk.draw_text(Nz + 500, w0 + 440, uA + "% TP", TZ.orange);
      }
      let ub = a.monsterinstance[uH];
      if (ub && !ub.destroyed) {
        if (ub.flash === 0) {
          ub.fsiner = 0;
        }
        ub.flash = 1;
        ub.becomeflash = 1;
      }
    }
    if ((a.bmenuno === 7 || a.bmenuno === 8) && a.myfight === 0) {
      Nk.draw_sprite("spr_heart", 0, Nz + 55, w0 + 385 + w5[a.bmenuno][w4] * 30);
      let uk = a.charinstance[w5[a.bmenuno][w4]];
      if (uk) {
        if (uk.flash === 0) {
          uk.fsiner = 0;
        }
        uk.flash = 1;
        uk.becomeflash = 1;
      }
      for (let uz = 0; uz < A(); uz++) {
        if (a.char[uz] !== 0) {
          Nk.draw_text(Nz + 80, w0 + 375 + uz * 30, a.charname[a.char[uz]], TZ.white);
          Nk.draw_set_color(TZ.maroon);
          Nk.draw_rectangle(Nz + 400, w0 + 380 + uz * 30, Nz + 500, w0 + 380 + uz * 30 + 15, false);
          Nk.draw_set_color(TZ.lime);
          Nk.draw_rectangle(Nz + 400, w0 + 380 + uz * 30, Nz + 400 + Math.max(0, a.hp[a.char[uz]] / a.maxhp[a.char[uz]]) * 100, w0 + 380 + uz * 30 + 15, false);
        }
      }
    }
    if (a.chapter >= 4 && n.bcDrawEnd) {
      n.bcDrawEnd(this, Nk);
    }
  }
  charbox(Nk, Nz, w0) {
    let w1 = w0 || 0;
    let w2 = this.bp;
    for (let w3 = 0; w3 < A(); w3++) {
      if (this.havechar[w3] !== 1) {
        continue;
      }
      let w4 = a.char[w3];
      let w5 = r(w4);
      let w6 = this.hpcolor[w5 - 1];
      let w7 = a.charturn;
      let w8 = 0;
      let w9 = w3;
      let wT = this.chartotal;
      let wL = 212;
      let wf = a.chapter === 1;
      if (wT === 3) {
        w8 = (wf ? [0, 212, 424] : [0, 213, 426])[w9];
      } else if (wT === 2) {
        w8 = (wf ? [106, 326] : [108, 322])[w9];
      } else {
        w8 = wf ? 212 : 213;
      }
      let wK = !!this.rouxlsgridenabled;
      if (w7 === w9) {
        if (wK) {
          if (this.mmy[w3] > -170) {
            this.mmy[w3] -= 2;
          }
          if (this.mmy[w3] > -160) {
            this.mmy[w3] -= 4;
          }
          if (this.mmy[w3] > -150) {
            this.mmy[w3] -= 6;
          }
          if (this.mmy[w3] > -140) {
            this.mmy[w3] -= 12;
          }
          if (this.mmy[w3] > -32) {
            this.mmy[w3] -= 32;
          }
        } else {
          if (this.mmy[w3] > -32) {
            this.mmy[w3] -= 2;
          }
          if (this.mmy[w3] > -24) {
            this.mmy[w3] -= 4;
          }
          if (this.mmy[w3] > -16) {
            this.mmy[w3] -= 6;
          }
          if (this.mmy[w3] > -8) {
            this.mmy[w3] -= 8;
          }
          if (this.mmy[w3] < -32) {
            this.mmy[w3] = -64;
          }
        }
      } else if (wK) {
        if (this.mmy[w3] < -14) {
          this.mmy[w3] += 32;
        }
        if (this.mmy[w3] > -14) {
          this.mmy[w3] = 0;
        }
      } else if (this.mmy[w3] < -14) {
        this.mmy[w3] += 15;
      } else {
        this.mmy[w3] = 0;
      }
      if (wK && this.mmy[w3] !== 0) {
        Nk.draw_set_color(TZ.black);
        Nk.draw_rectangle(0 + w8 + 2, 480 - w2 - 1 + w1 + this.mmy[w3], 0 + w8 + 210, 480 - w2 + w1 + 33, false);
      }
      if (w7 === w9 && a.myfight === 0) {
        if (!wK) {
          this.selectionmatrix(Nk, 0 + w8, 480 - w2 + w1, w6);
        } else {
          let wc = this.mmy[w3];
          let wS = 0 + w8;
          let wn = 480 - w2 + w1;
          Nk.draw_rectangle(wS, 480 - w2 - 3 + w1 + wc, wS + 212, 480 - w2, false);
          Nk.draw_set_color(TZ.black);
          Nk.draw_rectangle(wS + 2, 480 - w2 - 1 + w1 + wc, wS + 210, 480 - w2, false);
          this.s_siner += 2;
          Nk.draw_set_color(w6);
          Nk.draw_rectangle(wS, 480 - w2 + 40 + w1 + wc, wS + 212, 480 - w2 + 43 + w1 + wc, false);
          for (let wo = 0; wo < 12; wo++) {
            let ws = this.s_siner + wo * (Math.PI * 10);
            Nk.draw_set_alpha(Math.max(0, TF(ws / 60)));
            Nk.draw_line_width(wS, wn - 3 + wc * 0.75, wS, wn + 33, 2);
            Nk.draw_line_width(wS + 211, wn - 3 + wc * 0.75, wS + 211, wn + 33, 2);
            if (wc < -140 && TQ(ws / 60) < 0) {
              Nk.draw_set_alpha(Math.max(0, v(0, TF(ws / 60), (Tj(wc) - 140) / 30)));
              Nk.draw_line_width(wS - TF(ws / 60) * 30 + 30, wn + wc * 0.75, wS - TF(ws / 60) * 30 + 30, wn + 33, 2);
              Nk.draw_line_width(wS + 210 + TF(ws / 60) * 30 - 30, wn + wc * 0.75, wS + 210 + TF(ws / 60) * 30 - 30, wn + 33, 2);
            }
          }
          Nk.draw_set_alpha(1);
        }
      }
      let wE = this.mmy[w3];
      let wU = new Array(TK.exists("obj_rouxls_ch3_enemy") ? 25 : 5).fill(0);
      if (w7 === w9) {
        wU[a.bmenucoord[0][a.charturn] + this.rouxlsbuttoncount_y * 5] = 1;
      }
      if (a.fighting === 1) {
        let wJ = 0;
        for (let wM = 0; wM < 3; wM++) {
          if (a.monster[wM] === 1 && a.mercymod[wM] >= 100) {
            wJ = 1;
          }
        }
        let wY = 0;
        if (w5 === 3) {
          for (let wm = 0; wm < 3; wm++) {
            if (a.monster[wm] === 1 && a.monsterstatus[wm] === 1 && a.tension >= 40) {
              wY = 1;
            }
            if (a.encounterno === 31) {
              wY = 0;
            }
          }
        }
        let wa = wf ? 0 : 5;
        if (this.oopsallacts === 1 && (TK.exists("obj_rouxls_ch3_enemy") || TK.exists("obj_tenna_board4_enemy"))) {
          this.rouxlsCharbox(Nk, 0 + w8, wa, w2, w1, wE, w7 === w9, wU);
        } else {
          let wr = a.chapter >= 4 && this.disablesusieralseiattack === 1 && (a.charturn === 1 || a.charturn === 2);
          Nk.draw_sprite("spr_btfight", wr ? 2 : wU[0], 0 + w8 + 15 + wa, 485 - w2 + w1);
          if (w5 === 1) {
            Nk.draw_sprite("spr_btact", wU[1], 0 + w8 + 50 + wa, 485 - w2 + w1);
          } else if (this.disablesusieact === 1 && w5 === 2) {
            Nk.draw_sprite("spr_ja_bttech_grey", wU[1], 0 + w8 + 50 + wa, 485 - w2 + w1);
          } else {
            Nk.draw_sprite("spr_bttech", wU[1], 0 + w8 + 50 + wa, 485 - w2 + w1);
          }
          Nk.draw_sprite("spr_btitem", wU[2], 0 + w8 + 85 + wa, 485 - w2 + w1);
          Nk.draw_sprite("spr_btspare", wU[3], 0 + w8 + 120 + wa, 485 - w2 + w1);
          Nk.draw_sprite("spr_btdefend", wU[4], 0 + w8 + 155 + wa, 485 - w2 + w1);
          if (wJ === 1 && w7 === w9) {
            Nk.draw_sprite_ext("spr_btspare", 2, 0 + w8 + 120 + wa, 485 - w2 + w1, 1, 1, 0, TZ.white, 0.4 + TF(a.time / 6) * 0.4);
          }
          if (wY === 1 && w7 === w9) {
            Nk.draw_sprite_ext("spr_bttech", 2, 0 + w8 + 50 + wa, 485 - w2 + w1, 1, 1, 0, TZ.white, 0.4 + TF(a.time / 6) * 0.4);
          }
        }
      }
      let wV = w7 === w9 ? w6 : this.bcolor;
      if (a.charselect === w9 || a.charselect === 3) {
        wV = w6;
      }
      let wG = 480;
      if (a.fighting === 0) {
        wG = 430;
      }
      if (a.fighting === 1) {
        wG = 336;
      }
      Nk.draw_set_color(wV);
      if (wf) {
        Nk.draw_rectangle(0 + w8, 480 - w2 - 2 + w1 + wE, 0 + w8 + wL, 480 - w2 + w1, false);
        Nk.draw_set_color(TZ.black);
        Nk.draw_rectangle(0 + w8 + 2, 480 - w2 + w1 + wE, 0 + w8 + wL - 2, 480 - w2 + w1 + wE + 33, false);
      } else if (this.rouxlsgridenabled) {
        Nk.draw_rectangle(0 + w8, 480 - w2 - 3 + w1 + wE, 0 + w8 + wL, 480 - w2 - 2 + w1 + wE, false);
        if (wE < -32) {
          Nk.draw_rectangle(0 + w8, 480 - w2 - 3 + w1 + wE, 0 + w8 + 1, Nz + wG + 39 + wE, false);
          Nk.draw_rectangle(0 + w8 + wL - 1, 480 - w2 - 3 + w1 + wE, 0 + w8 + wL, Nz + wG + 39 + wE, false);
        }
        Nk.draw_set_color(TZ.black);
        if (w7 !== w9 && wE !== 0) {
          Nk.draw_rectangle(0 + w8 + 2, 480 - w2 - 1 + w1 + wE, 0 + w8 + wL - 2, 480 - w2 + w1 + 33, false);
        } else {
          Nk.draw_rectangle(0 + w8 + 2, 480 - w2 - 1 + w1 + wE, 0 + w8 + wL - 2, 480 - w2 + w1 + wE + 33, false);
        }
      } else {
        Nk.draw_rectangle(0 + w8, 480 - w2 - 3 + w1 + wE, 0 + w8 + wL, 480 - w2 + w1 - 2, false);
        Nk.draw_set_color(TZ.black);
        Nk.draw_rectangle(0 + w8 + 2, 480 - w2 - 1 + w1 + wE, 0 + w8 + wL - 2, 480 - w2 + w1 + wE + 33, false);
      }
      let wh = a.charhero && a.charhero[w4] || Ty[w5 - 1] || "kris";
      let wj = TS[wh] || TS.kris;
      let wF = wj.head && T6[wj.head] ? wj.head : wj.head === null ? null : ["spr_headkris", "spr_headsusie", "spr_headralsei"][w5 - 1];
      let wQ = wj.namesprite && T6[wj.namesprite] ? wj.namesprite : wj.namesprite === null ? null : ["spr_bnamekris", "spr_bnamesusie", "spr_bnameralsei"][w5 - 1];
      let wp = {
        spr_bhero_head_a: [1, 41, 2],
        spr_bhero_head_b: [3, 43, 2],
        spr_bhero_head_c: [2, 43, 2],
        spr_bhero_head_d: [0, 36, 1.6]
      };
      let wR = null;
      if (w3 === 0 && a.chapter === 2) {
        TK.with("o_boxingcontroller", wX => {
          wR = wp[wX.headsprite] || null;
        });
      }
      if (wR) {
        Nk.draw_sprite_ext("spr_headthrash", wR[0], 0 + wR[1] + w8, Nz + 8 + wG + wE, wR[2], wR[2], 0, TZ.white, 1);
        if (T6.spr_bnamethrash) {
          Nk.draw_sprite("spr_bnamethrash", 0, 51 + w8, Nz + wG + 3 + wE);
        } else {
          Nk.draw_set_font("fnt_mainbig");
          Nk.draw_text(46 + w8, Nz + wG + 2 + wE, String(a.charname[w4] || " ").toUpperCase(), TZ.white);
        }
      }
      if (!wR && !wQ) {
        Nk.draw_set_font("fnt_mainbig");
        Nk.draw_text(46 + w8, Nz + wG + 2 + wE, String(a.charname[w4] || wj.name).toUpperCase(), TZ.white);
      }
      if (!wR && wF) {
        Nk.draw_sprite(wF, a.faceaction[w9], 13 + w8, Nz + wG + wE);
      }
      if (!wR && wQ) {
        Nk.draw_sprite(wQ, 0, 51 + w8, Nz + wG + 3 + wE);
      }
      Nk.draw_sprite("spr_hpname", 0, 109 + w8, Nz + wG + 11 + wE);
      let wb = TZ.white;
      if (a.hp[w4] / a.maxhp[w4] <= 0.25) {
        wb = TZ.yellow;
      }
      if (a.hp[w4] <= 0) {
        wb = TZ.red;
      }
      Nk.draw_set_halign("right");
      Nk.draw_spritefont("spr_numbersfontsmall", "0123456789-+", String(a.hp[w4]), 160 + w8, Nz + wG - 2 + wE, 1, 1, wb, 1, 2);
      Nk.draw_sprite("spr_hpslash", 0, 159 + w8, Nz + wG - 4 + wE);
      Nk.draw_spritefont("spr_numbersfontsmall", "0123456789-+", String(a.maxhp[w4]), 205 + w8, Nz + wG - 2 + wE, 1, 1, wb, 1, 2);
      Nk.draw_set_halign("left");
      Nk.draw_set_color(TZ.maroon);
      Nk.draw_rectangle(128 + w8, Nz + wG + 11 + wE, 203 + w8, Nz + wG + 19 + wE, false);
      if (a.hp[w4] > 0 && a.maxhp[w4] > 0) {
        Nk.draw_set_color(w6);
        Nk.draw_rectangle(128 + w8, Nz + wG + 11 + wE, 0 + w8 + 128 + TH(a.hp[w4] / a.maxhp[w4] * 75), Nz + wG + 19 + wE, false);
      }
    }
  }
  rouxlsCharbox(Nk, Nz, w0, w1, w2, w3, w4, w5) {
    let w6 = TK.first("obj_rouxls_ch3_enemy");
    let w7 = TK.first("obj_tenna_board4_enemy");
    let w8 = 485 - w1 + w2;
    let w9 = wG => Nz + 15 + wG * 35 + w0;
    let wT = "spr_btrouxls";
    let wL = "spr_btspade";
    let wf = "spr_btheart";
    let wK = "spr_btact";
    if (this.dogcon === 1) {
      wL = "spr_btdog";
    }
    if (this.dogcon === 2) {
      wL = "spr_btdog";
      wf = "spr_btdog";
      wK = "spr_btdog";
    }
    if (this.rouxlserrorcon === 1 && this.dogcon < 1) {
      this.rouxlstelegraphtimer++;
      if (this.rouxlstelegraphtimer >= 1 && this.rouxlstelegraphtimer <= 4) {
        wT = "spr_btrouxls_select1";
      }
      if (this.rouxlstelegraphtimer >= 5 && this.rouxlstelegraphtimer <= 8) {
        wT = "spr_btrouxls_select2";
      }
      if (this.rouxlstelegraphtimer === 8) {
        this.rouxlstelegraphtimer = 0;
      }
    }
    if (this.rouxlstelegraphcon === 1 && this.dogcon < 1) {
      if (this.rouxlstelegraphtimer === 0) {
        T5("snd_bombfall");
      }
      this.rouxlstelegraphtimer++;
      if (this.rouxlstelegraphtimer >= 1 && this.rouxlstelegraphtimer <= 4) {
        wT = "spr_btexclamation1";
      }
      if (this.rouxlstelegraphtimer >= 5 && this.rouxlstelegraphtimer <= 8) {
        wT = "spr_btexclamation2";
      }
      if (this.rouxlstelegraphtimer === 8) {
        this.rouxlstelegraphtimer = 0;
      }
    }
    if (this.spadetelegraphcon === 1 && this.dogcon < 1) {
      this.spadetelegraphtimer++;
      if (this.spadetelegraphtimer >= 1 && this.spadetelegraphtimer <= 4) {
        wL = "spr_btexclamation1_spade";
      }
      if (this.spadetelegraphtimer >= 5 && this.spadetelegraphtimer <= 8) {
        wL = "spr_btexclamation2";
      }
      if (this.spadetelegraphtimer === 8) {
        this.spadetelegraphtimer = 0;
      }
    }
    if (this.spadesuccesscon === 1 && this.heartsuccesscon === 0) {
      this.spadetelegraphtimer++;
      let wG = this.spadetelegraphtimer >= 5 ? 2 : 1;
      if (this.spadetelegraphtimer >= 1 && this.spadetelegraphtimer <= 8) {
        if (this.spadefail) {
          wK = wG === 1 ? "spr_btact_fail1" : "spr_btact_fail2";
        } else {
          wL = wG === 1 ? "spr_btspade_success" : "spr_btspade_success2";
          if (this.dogcon === 1 || this.dogcon === 2) {
            wL = wG === 1 ? "spr_btdog_success" : "spr_btdog_success2";
            wK = wL;
          }
        }
      }
      if (this.spadetelegraphtimer === 8) {
        this.spadetelegraphtimer = 0;
      }
    }
    if (this.heartsuccesscon === 1) {
      this.heartsuccesstimer++;
      if (this.heartsuccesstimer >= 1 && this.heartsuccesstimer <= 4) {
        wf = "spr_btheart_success1";
      }
      if (this.heartsuccesstimer >= 5 && this.heartsuccesstimer <= 8) {
        wf = "spr_btheart_success2";
      }
      if (this.heartsuccesstimer === 8) {
        this.heartsuccesstimer = 0;
      }
    }
    let wE = (wh, wj, wF) => {
      wh.introtimer = (wh.introtimer || 0) + 1;
      if (wh.introtimer === 1) {
        T5("snd_petrify");
      }
      let wQ;
      if (wh.introtimer < 30) {
        Nk.draw_sprite("spr_btfight", 0, w9(0), w8);
        Nk.draw_sprite("spr_btact", 0, w9(1), w8);
        Nk.draw_sprite("spr_bttech", 0, w9(2), w8);
        Nk.draw_sprite("spr_btitem", 0, w9(3), w8);
        Nk.draw_sprite("spr_btspare", 0, w9(4), w8);
        wQ = v(0, 1.2, wh.introtimer / 29);
      } else {
        for (let wp = 0; wp < 5; wp++) {
          Nk.draw_sprite("spr_btact", 0, w9(wp), w8);
        }
        wQ = v(1, 0, (wh.introtimer - 30) / 30);
        if (wF) {
          a.bmenucoord[0][0] = 2;
          a.bmenucoord[0][1] = 2;
          a.bmenucoord[0][2] = 2;
        }
      }
      for (let wR = 0; wR < 5; wR++) {
        Nk.draw_sprite_ext("spr_btact_rouxls_white", 0, w9(wR), w8, 1, 1, 0, TZ.white, wQ);
      }
      if (wj && wh.introtimer === 60) {
        wh.intro = 3;
      }
    };
    if (w6 && w6.intro === 2) {
      wE(w6, true, false);
      return;
    }
    if (w7 && w7.intro === 1) {
      wE(w7, false, true);
      return;
    }
    let wU = 0;
    let wV = 1;
    if (this.rouxlsgridenabled) {
      wV = 5;
    }
    if (w4) {
      for (let wh = 0; wh < wV; wh++) {
        let wj = v(140, 0, Tj(w3 / 170));
        let wF = wU * 32 + w3 * 0.75 + wj;
        if (wV === 1) {
          wF += 32;
        }
        if (wF > 0) {
          wF = 0;
        }
        let wQ = wK;
        if (wU !== 4 && this.rouxlsgridenabled) {
          wQ = "spr_btact_ex";
        }
        for (let wp = 0; wp < 5; wp++) {
          let wR = wp + 1 + wU * 5;
          let wb = w5[wp + wU * 5] || 0;
          let wc = wQ;
          if (this.rouxlsbuttoncount === wR || this.rouxlsbuttoncount2 === wR) {
            wc = wT;
          } else if (this.spadebuttoncount === wR) {
            wc = wL;
          } else if (this.heartbuttoncount === wR) {
            wc = wf;
          }
          Nk.draw_sprite(wc, wb, w9(wp), w8 + wF);
        }
        wU++;
      }
    }
  }
  selectionmatrix(Nk, Nz, w0, w1) {
    this.s_siner += 2;
    Nk.draw_set_color(w1);
    Nk.draw_rectangle(Nz, w0, Nz + 210, w0 + 3, false);
    for (let w2 = 0; w2 < 12; w2++) {
      let w3 = this.s_siner + w2 * (Math.PI * 10);
      Nk.draw_set_alpha(Math.max(0, TF(w3 / 60)));
      Nk.draw_line_width(Nz, w0, Nz, w0 + 33, 2);
      Nk.draw_line_width(Nz + 210, w0, Nz + 210, w0 + 33, 2);
      if (TQ(w3 / 60) < 0) {
        Nk.draw_line_width(Nz - TF(w3 / 60) * 30 + 30, w0, Nz - TF(w3 / 60) * 30 + 30, w0 + 33, 2);
        Nk.draw_line_width(Nz + 210 + TF(w3 / 60) * 30 - 30, w0, Nz + 210 + TF(w3 / 60) * 30 - 30, w0 + 33, 2);
      }
    }
    Nk.draw_set_alpha(1);
  }
};
Tp(obj_battlecontroller, "obj_battlecontroller");
TR(obj_battlecontroller, "kinds", Tw("obj_battlecontroller", TT));
TR(obj_battlecontroller, "defaultDepth", 5);
TR(obj_battlecontroller, "screenSpace", true);
var NA = obj_battlecontroller;
Tb(NU, "G.mnfight = 1;");
Tb(NA, "G.myfight = 0;G.mnfight = 0;G.myfight = 7;");
export { TS as a, Ty as b, Tn as c, heroAvailable as d, heroSprites as e, Td as f, Tk as g, N0 as h, N2 as i, N4 as j, N6 as k, N9 as l, NN as m, Nu as n, NZ as o, Nf as p, minigameOnScreen as q, controllerHeld as r, NU as s, NG as t, Ng as u, NH as v, Nj as w, scr_retarget as x, scr_charcan as y, DONE_TURN as z, scr_nexthero as A, scr_prevhero as B, scr_endturn as C, scr_attackphase as D, scr_mnendturn as E, scr_wincombat as F, scr_endcombat as G, scr_spellconsumeb as H, scr_itemconsumeb as I, scr_spelltext as J, scr_healitemspell as K, scr_healallitemspell as L, scr_spell as M, NA as N };
