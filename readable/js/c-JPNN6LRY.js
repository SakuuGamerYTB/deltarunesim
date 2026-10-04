const U = function () {
  ;
  let J7 = true;
  return function (J8, J9) {
    const JJ = J7 ? function () {
      if (J9) {
        const Jz = J9.apply(J8, arguments);
        J9 = null;
        return Jz;
      }
    } : function () {};
    J7 = false;
    return JJ;
  };
}();
import { a as P } from "./c-VNO7ILLI.js";
import { k as L, rc as s } from "./c-5APM5PG3.js";
import { D as Q, E as B, p as K } from "./c-SEM2A64W.js";
import { q as W } from "./c-I2ROP6YV.js";
import { f as C, n as O } from "./c-EUQCKUJR.js";
import { G as t, b as R } from "./c-YJJCI5ES.js";
import { _a as r, fb as H, qb as A } from "./c-FMIAGHDE.js";
import { a, e as V, g as E, l as X } from "./c-PIEPTJTC.js";
X();
X();
var e = {
  chapter: 1,
  unusedMonsterTypes: [{
    type: 4,
    name: "Ralsei",
    carriedForward: false,
    why: "Defined in scr_monstersetup; no encounter case builds it."
  }, {
    type: 8,
    name: "Pippins",
    carriedForward: false,
    why: "Defined in scr_monstersetup; no encounter case builds it."
  }, {
    type: 17,
    name: "DoomTank",
    carriedForward: false,
    why: "Defined in scr_monstersetup; no encounter case builds it."
  }],
  unusedAttackPatterns: [6, 7, 8, 10, 11, 12, 13, 22, 36, 45, 55, 56, 57, 58, 60, 66, 67, 81, 82, 83, 84],
  unusedAttackDetail: [{
    type: 6,
    line: 132,
    why: "obj_dbulletcontroller can run pattern 6 (Step_0.gml line 132) but nothing assigns it. It spawns obj_dicebul."
  }, {
    type: 7,
    line: 147,
    why: "obj_dbulletcontroller can run pattern 7 (Step_0.gml line 147) but nothing assigns it. It spawns obj_dicebul."
  }, {
    type: 8,
    line: 166,
    why: "obj_dbulletcontroller can run pattern 8 (Step_0.gml line 166) but nothing assigns it. It spawns obj_dicebul."
  }, {
    type: 10,
    line: 188,
    why: "obj_dbulletcontroller can run pattern 10 (Step_0.gml line 188) but nothing assigns it. It spawns obj_dicebul."
  }, {
    type: 11,
    line: 214,
    why: "obj_dbulletcontroller can run pattern 11 (Step_0.gml line 214) but nothing assigns it. It spawns obj_dicebul."
  }, {
    type: 12,
    line: 241,
    why: "obj_dbulletcontroller can run pattern 12 (Step_0.gml line 241) but nothing assigns it. It spawns obj_dicebul."
  }, {
    type: 13,
    line: 255,
    why: "obj_dbulletcontroller can run pattern 13 (Step_0.gml line 255) but nothing assigns it. It spawns obj_dicebul."
  }, {
    type: 22,
    line: 301,
    why: "obj_dbulletcontroller can run pattern 22 (Step_0.gml line 301) but nothing assigns it. It spawns obj_regularbullet."
  }, {
    type: 36,
    line: 748,
    why: "obj_dbulletcontroller can run pattern 36 (Step_0.gml line 748) but nothing assigns it. It spawns obj_skychain."
  }, {
    type: 45,
    line: 987,
    why: "obj_dbulletcontroller can run pattern 45 (Step_0.gml line 987) but nothing assigns it. It spawns obj_suitbomb."
  }, {
    type: 55,
    line: 1137,
    why: "obj_dbulletcontroller can run pattern 55 (Step_0.gml line 1137) but nothing assigns it. It spawns obj_bigscythe."
  }, {
    type: 56,
    line: 1148,
    why: "obj_dbulletcontroller can run pattern 56 (Step_0.gml line 1148) but nothing assigns it. It spawns obj_bigscythe."
  }, {
    type: 57,
    line: 1169,
    why: "obj_dbulletcontroller can run pattern 57 (Step_0.gml line 1169) but nothing assigns it. It spawns obj_bigscythe."
  }, {
    type: 58,
    line: 1181,
    why: "obj_dbulletcontroller can run pattern 58 (Step_0.gml line 1181) but nothing assigns it. It spawns obj_bigscythe."
  }, {
    type: 60,
    line: 1192,
    why: "obj_dbulletcontroller can run pattern 60 (Step_0.gml line 1192) but nothing assigns it. It spawns obj_carouselbullet."
  }, {
    type: 66,
    line: 1284,
    why: "obj_dbulletcontroller can run pattern 66 (Step_0.gml line 1284) but nothing assigns it. It spawns obj_spadering."
  }, {
    type: 67,
    line: 1296,
    why: "obj_dbulletcontroller can run pattern 67 (Step_0.gml line 1296) but nothing assigns it. It spawns obj_spadering."
  }, {
    type: 81,
    line: 778,
    why: "obj_dbulletcontroller can run pattern 81 (Step_0.gml line 778) but nothing assigns it."
  }, {
    type: 82,
    line: 782,
    why: "obj_dbulletcontroller can run pattern 82 (Step_0.gml line 782) but nothing assigns it."
  }, {
    type: 83,
    line: 786,
    why: "obj_dbulletcontroller can run pattern 83 (Step_0.gml line 786) but nothing assigns it."
  }, {
    type: 84,
    line: 790,
    why: "obj_dbulletcontroller can run pattern 84 (Step_0.gml line 790) but nothing assigns it."
  }],
  unusedEncounters: [15, 21, 29],
  unusedEncounterWhy: {
    15: "Nothing in the chapter sets this encounter number. It builds Clover, Hathy. Its message is \"* Clover and Hathy grew close!\".",
    21: "Nothing in the chapter sets this encounter number. It builds Jigsawry. Its message is \"* Jigsawry drew near!\".",
    29: "Nothing in the chapter sets this encounter number. It builds Head Hathy. Its message is \"* Head Hathy blocked the way quietly!\"."
  },
  carriedForwardEncounters: [],
  unusedEnemyObjects: [{
    object: "obj_clubsenemy_old",
    parent: "obj_monsterparent",
    events: ["Alarm_4", "Create_0", "Draw_0", "Other_22", "Step_0"],
    lines: 498,
    type: 16,
    typeFrom: "chapter 1 scr_encountersetup gives monstertype 16 (via its shipped sibling obj_clubsenemy)",
    name: "Clover",
    gutted: false,
    attackTypes: [2, 4],
    needs: [],
    why: "5 events, 498 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: chapter 1 scr_encountersetup gives monstertype 16 (via its shipped sibling obj_clubsenemy)."
  }, {
    object: "obj_ralseienemy",
    parent: "obj_monsterparent",
    events: ["Alarm_4", "Alarm_5", "Create_0", "Destroy_0", "Draw_0", "Other_22", "Step_0"],
    lines: 702,
    type: 4,
    typeFrom: "its name matches scr_monstersetup type 4 \"Ralsei\"",
    name: "Ralsei",
    gutted: false,
    attackTypes: [],
    needs: [],
    why: "7 events, 702 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: its name matches scr_monstersetup type 4 \"Ralsei\"."
  }],
  unplaceable: [],
  unsound: {
    note: "flag-driven grants make these mostly false positives; not surfaced in the UI",
    unusedItems: [{
      id: 11,
      name: "ClubsSandwich"
    }, {
      id: 14,
      name: "Favwich"
    }],
    unusedWeapons: [{
      id: 1,
      name: "Wood Blade"
    }, {
      id: 2,
      name: "Mane Ax"
    }, {
      id: 3,
      name: "Red Scarf"
    }, {
      id: 4,
      name: "EverybodyWeapon"
    }, {
      id: 5,
      name: "Spookysword"
    }, {
      id: 6,
      name: "Brave Ax"
    }, {
      id: 8,
      name: "Trefoil"
    }, {
      id: 9,
      name: "Ragger"
    }, {
      id: 10,
      name: "DaintyScarf"
    }],
    unusedArmors: [{
      id: 1,
      name: "Amber Card"
    }, {
      id: 2,
      name: "Dice Brace"
    }, {
      id: 3,
      name: "Pink Ribbon"
    }, {
      id: 4,
      name: "White Ribbon"
    }, {
      id: 6,
      name: "MouseToken"
    }]
  },
  unusedItems: [{
    id: 11,
    name: "ClubsSandwich"
  }, {
    id: 14,
    name: "Favwich"
  }],
  unusedWeapons: [{
    id: 1,
    name: "Wood Blade"
  }, {
    id: 2,
    name: "Mane Ax"
  }, {
    id: 3,
    name: "Red Scarf"
  }, {
    id: 4,
    name: "EverybodyWeapon"
  }, {
    id: 5,
    name: "Spookysword"
  }, {
    id: 6,
    name: "Brave Ax"
  }, {
    id: 8,
    name: "Trefoil"
  }, {
    id: 9,
    name: "Ragger"
  }, {
    id: 10,
    name: "DaintyScarf"
  }],
  unusedArmors: [{
    id: 1,
    name: "Amber Card"
  }, {
    id: 2,
    name: "Dice Brace"
  }, {
    id: 3,
    name: "Pink Ribbon"
  }, {
    id: 4,
    name: "White Ribbon"
  }, {
    id: 6,
    name: "MouseToken"
  }],
  definedAttackPatterns: [0, 1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 20, 21, 22, 23, 24, 25, 26, 27, 30, 32, 33, 34, 35, 36, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 60, 61, 62, 65, 66, 67, 68, 70, 71, 72, 73, 74, 75, 76, 77, 81, 82, 83, 84, 85],
  definedMonsterTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25]
};
var Z = new Proxy({}, {
  get: a((J7, J8) => s[J8] || W[J8], "get")
});
var J0 = s;
var obj_cutenemy = class JM extends K {
  create() {
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.candodge = 0;
  }
  userEvent(J7) {
    if (J7 === 12) {
      L.call(this);
      R.monsterx[this.myself] = this.x + 20;
      R.monstery[this.myself] = this.y;
      return;
    }
    return super.userEvent(J7);
  }
  step() {
    let J7 = this.myself;
    if (R.monster[J7] === 1) {
      if (R.mnfight === 1 && this.talked === 0 && !H.exists("obj_attackpress")) {
        this.talked = 1;
        this.talktimer = 0;
        R.mnfight = 2;
      }
      if (R.mnfight === 2 && this.attacked === 0) {
        this.attacked = 1;
        R.turntimer = 120;
        if (!H.exists("obj_moveheart")) {
          O();
        }
        if (!H.exists("obj_growtangle")) {
          A(320, 170, C);
        }
      }
      if (R.mnfight === 2 && R.turntimer <= 1 && this.attacked === 1) {
        this.attacked = 2;
        if (!R.monster || !R.monster.__customBoard) {
          B();
        }
      }
      if (R.myfight === 3 && this.acting > 0 && this.actcon === 0) {
        this.actcon = 1;
      }
      if (this.actcon === 1 && !H.exists("obj_writer")) {
        this.actcon = 0;
        if (R.chapter >= 2 && t.scr_nextact) {
          t.scr_nextact.call(this);
        } else {
          this.acting = 0;
          R.acting = [0, 0, 0];
          Q();
        }
      }
      if (R.myfight === 3 && (this.actconsus === 1 || this.actconral === 1 || this.actconnoe === 1) && !H.exists("obj_writer") && t.scr_nextact) {
        this.actconsus = 0;
        this.actconral = 0;
        this.actconnoe = 0;
        t.scr_nextact.call(this);
      }
      if (this.state === 3) {
        this.hurttimer--;
        if (this.hurttimer < 0) {
          this.state = 0;
        }
      }
    }
  }
  draw(J7) {
    J7.draw_sprite_ext(this.sprite_index, 0, this.x, this.y, 2, 2, 0, this.image_blend, this.image_alpha);
    if (this.flash === 1) {
      this.fsiner++;
      J7.draw_sprite_white(this.sprite_index, 0, this.x, this.y, 2, 2, 0, -Math.cos(this.fsiner / 5) * 0.4 + 0.6);
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
a(obj_cutenemy, "obj_cutenemy");
V(obj_cutenemy, "kinds", r("obj_cutenemy", K));
V(obj_cutenemy, "defaultSprite", "spr_dummymonster");
var J2 = obj_cutenemy;
function wrapDesc(J7, J8 = 34) {
  let J9 = [];
  let JJ = "";
  for (let Jz of String(J7).split(/\s+/).filter(Boolean)) {
    if (JJ && JJ.length + 1 + Jz.length > J8) {
      J9.push(JJ);
      JJ = Jz;
    } else {
      JJ = JJ ? JJ + " " + Jz : Jz;
    }
  }
  if (JJ) {
    J9.push(JJ);
  }
  return J9.join("#");
}
a(wrapDesc, "wrapDesc");
var J4 = {};
for (let Jb of e.unusedEnemyObjects || []) {
  J4[Jb.type] = Jb.object;
}
function buildCutFights() {
  let J7 = [];
  for (let J9 of e.unusedMonsterTypes || []) {
    let JJ = J4[J9.type];
    let Jz = JJ && Z[JJ] || J2;
    J7.push({
      id: "cut" + J9.type,
      name: J9.name,
      chapter: 1,
      area: "CUT CONTENT",
      cut: true,
      generated: true,
      desc: J9.name + "#" + wrapDesc(J9.why || "Unused enemy: defined in the game's data but no encounter uses it.") + (JJ ? "#Runs its own object, " + JJ + "." : "#Data-only: the game never made an#object for it."),
      party: [1, 2, 3],
      heromakex: [80, 80, 80],
      heromakey: [50, 130, 210],
      monsters: [{
        cls: Jz,
        type: J9.type,
        x: 500,
        y: 160,
        setup: () => {}
      }],
      battlemsg: "* " + J9.name + " blocks the way!",
      encounterno: 0,
      music: "battle",
      background: P(null)
    });
  }
  let J8 = new Set(J7.map(Jn => Jn.monsters[0].type));
  for (let Jn of e.unusedEnemyObjects || []) {
    if (J8.has(Jn.type)) {
      continue;
    }
    let JG = Z[Jn.object] || J2;
    J7.push({
      id: "cut_" + Jn.object.replace(/^(obj|o)_/, ""),
      name: Jn.name + " (" + Jn.object + ")",
      chapter: 1,
      area: "CUT CONTENT",
      cut: true,
      generated: true,
      desc: Jn.name + "#" + Jn.object + "#" + wrapDesc(Jn.why),
      party: [1, 2, 3],
      heromakex: [80, 80, 80],
      heromakey: [50, 130, 210],
      monsters: [{
        cls: JG,
        type: Jn.type,
        x: 500,
        y: 160,
        setup: () => {}
      }],
      battlemsg: "* " + Jn.name + " blocks the way!",
      encounterno: 0,
      music: "battle",
      background: P(null)
    });
  }
  return J7;
}
a(buildCutFights, "buildCutFights");
var J6 = e;
E(J2, "G.mnfight = 2;");
export { e as a, J0 as b, J2 as c, wrapDesc as d, buildCutFights as e, J6 as f };
