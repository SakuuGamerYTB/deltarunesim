const d = function () {
  ;
  let gZ = true;
  return function (gT, ga) {
    const gd = gZ ? function () {
      if (ga) {
        const gO = ga.apply(gT, arguments);
        ga = null;
        return gO;
      }
    } : function () {};
    gZ = false;
    return gd;
  };
}();
import { n as h } from "./c-KCLR4RP5.js";
import { k as u } from "./c-N4ZGLSFU.js";
import { k as f } from "./c-FBA3VTQ3.js";
import { l as k } from "./c-5WLJWN67.js";
import { b as i, c as v } from "./c-YST6GS7R.js";
import { a as s, c as H, e as c0, f as c1, g as c2, o as c3 } from "./c-ZF4DELGJ.js";
import { D as c4, G as c5, f as c6, i as c7, p as c8, z as c9 } from "./c-SEM2A64W.js";
import { e as cc, f as cx, h as cr } from "./c-PF7AREFU.js";
import { a as cB, b as cg, c as cG, d as cC, f as cX, j as cI, n as cn, p as cZ, q as cT } from "./c-EUQCKUJR.js";
import { D as ca, H as cd, I as cO, J as cq, b as co, g as cQ, i as ch, y as cu } from "./c-YJJCI5ES.js";
import { Da as cp, Fa as cf, I as cj, Tb as ck, Yb as cS, Za as cw, _a as cM, ba as cy, c as cW, da as cP, fb as cv, g as cR, h as cK, j as cU, m as cN, n as cH, o as cb, p as cz, q as cl, qb as cL, s as cJ, t as cm, u as cF, v as cV, vb as cE, w as cY, wb as cA, x as cD } from "./c-FMIAGHDE.js";
import { a as x0, c as x1, e as x2, g as x3, l as x4 } from "./c-PIEPTJTC.js";
x4();
var x5 = {};
x1(x5, {
  FIGHTS: () => xd,
  SOUNDS: () => x7,
  SPRITES: () => x6,
  obj_blockbullet_fall: () => obj_blockbullet_fall,
  obj_bloxer_enemy: () => obj_bloxer_enemy,
  obj_spareanim: () => obj_spareanim,
  setupStats: () => setupStats
});
x4();
var x6 = ["spr_blockguy_overworld", "spr_blockguy_spared", "spr_blockguy_part", "spr_blockguy_part_hurt", "spr_blockbullet", "spr_blockbullet_mini", "spr_sparestar_anim", "spr_battleblcon_long"];
var x7 = ["snd_spare"];
var scr_get_input_name = x0(gZ => "[C]", "scr_get_input_name");
var x9 = cK(8421504);
var xc = cK(65535);
var xx = cK(16777215);
function setupStats(gZ) {
  co.monstername[gZ] = "Bloxer";
  co.monstermaxhp[gZ] = 130;
  co.monsterhp[gZ] = 130;
  co.monsterat[gZ] = 9;
  co.monsterdf[gZ] = 2;
  co.monsterexp[gZ] = 0;
  co.monstergold[gZ] = 38;
  co.sparepoint[gZ] = 10;
  co.mercymod[gZ] = 0;
  co.mercymax[gZ] = 100;
  co.canact[gZ][0] = 1;
  co.actname[gZ][0] = "Check";
  co.canact[gZ][1] = 1;
  co.actname[gZ][1] = "Rearrange";
  if (ch(2) && co.plot >= 150) {
    co.canact[gZ][2] = 1;
    co.actname[gZ][2] = "Rival";
    co.actactor[gZ][2] = 2;
  }
}
x0(setupStats, "setupStats");
var xB = {
  spr_blockbullet_mini: {
    w: 34,
    h: 28,
    bb: [4, 4, 29, 23]
  },
  spr_blockguy_spared: {
    w: 38,
    h: 54,
    bb: [0, 0, 37, 53]
  }
};
function sprDims(gZ) {
  let gT = cj[gZ];
  return gT || xB[gZ] || {
    w: 0,
    h: 0,
    bb: [0, 0, 0, 0]
  };
}
x0(sprDims, "sprDims");
function collision_point(gZ, gT, ga, gd) {
  for (let gO of cv.list) {
    if (gO.destroyed || gO === gd || !gO.is(ga)) {
      continue;
    }
    let gq = sprDims(gO.sprite_index);
    if (!gq || gq.w === 0) {
      continue;
    }
    let go = gq.ox || 0;
    let gQ = gq.oy || 0;
    let gh = gq.bb;
    let gu = gO.x + (gh[0] - go) * gO.image_xscale;
    let gp = gO.x + (gh[2] + 1 - go) * gO.image_xscale;
    let gf = gO.y + (gh[1] - gQ) * gO.image_yscale;
    let gj = gO.y + (gh[3] + 1 - gQ) * gO.image_yscale;
    if (gZ >= Math.min(gu, gp) && gZ < Math.max(gu, gp) && gT >= Math.min(gf, gj) && gT < Math.max(gf, gj)) {
      return gO;
    }
  }
  return null;
}
x0(collision_point, "collision_point");
function draw_arrow(gZ, gT, ga, gd, gO, gq) {
  let go = gZ.ctx;
  go.save();
  go.globalAlpha = gZ.alpha;
  go.strokeStyle = go.fillStyle = gZ.color;
  go.lineWidth = 1;
  let gQ = gd - gT;
  let gh = gO - ga;
  let gu = Math.hypot(gQ, gh);
  go.beginPath();
  go.moveTo(gT, ga);
  go.lineTo(gd, gO);
  go.stroke();
  if (gu !== 0) {
    if (gq > gu) {
      gq = gu;
    }
    let gp = gQ / gu;
    let gf = gh / gu;
    let gj = gd - gp * gq;
    let gk = gO - gf * gq;
    go.beginPath();
    go.moveTo(gd, gO);
    go.lineTo(gj + gf * gq / 3, gk - gp * gq / 3);
    go.lineTo(gj - gf * gq / 3, gk + gp * gq / 3);
    go.closePath();
    go.fill();
  }
  go.restore();
}
x0(draw_arrow, "draw_arrow");
var xX = class gS extends cw {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    cf("snd_spare");
    cp("snd_spare");
  }
  draw(gZ) {
    let gT = this.t;
    if (gT >= 6 && gT <= 26) {
      this.afterimage += 1;
      gZ.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 4, this.y, this.image_xscale, this.image_yscale, 0, 0.7 - this.afterimage / 25);
      gZ.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 8, this.y, this.image_xscale, this.image_yscale, 0, 0.4 - this.afterimage / 30);
    }
    if (gT < 6) {
      if (gT < 5) {
        gZ.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 1 - this.neotone / 4);
      }
      let ga = gT / 5;
      if (ga > 1) {
        ga = 1;
      }
      gZ.draw_sprite_white(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, ga - this.tone / 5);
    }
    if (gT >= 1 && gT <= 5) {
      for (let gd = 0; gd < 2; gd++) {
        let gO = cL(this.x + cU(this.sprite_width), this.y + cU(this.sprite_height), cB);
        gO.image_xscale = 2;
        gO.image_yscale = 2;
        gO.sprite_index = "spr_sparestar_anim";
        gO.image_alpha = 2;
        gO.image_speed = 0.25;
        gO.hspeed = -3;
        gO.gravity = 0.5;
        gO.gravity_direction = 0;
        this.star[this.starcount] = gO;
        this.starcount += 1;
      }
    }
    if (gT >= 5 && gT <= 30) {
      for (let gq = 0; gq < this.starcount; gq++) {
        let go = this.star[gq];
        if (go && !go.destroyed) {
          go.image_angle += 10;
          go.image_alpha -= 0.1;
          if (go.image_alpha <= 0) {
            go.instance_destroy();
          }
        }
      }
    }
    if (gT >= 5 && gT < 10) {
      this.tone += 1;
    }
    if (gT >= 9 && (this.neotone += 1, this.neotone >= 30)) {
      for (let gQ = 0; gQ < this.starcount; gQ++) {
        let gh = this.star[gQ];
        if (gh && !gh.destroyed) {
          gh.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
x0(xX, "obj_spareanim");
x2(xX, "kinds", cM("obj_spareanim", cw));
x2(xX, "defaultDepth", 0);
var obj_spareanim = xX;
var xn = class gw extends c0 {
  get sprite_width() {
    return sprDims(this.sprite_index).w * Math.abs(this.image_xscale);
  }
  get sprite_height() {
    return sprDims(this.sprite_index).h * Math.abs(this.image_yscale);
  }
  create() {
    this.active = 0;
    this.visible = false;
    this.image_alpha = 0;
    this.con = 0;
    this.xpos = cN(0, 1, 2, 3);
    this.ypos = -8;
    this.fallspeed = 5;
    this.falltimer = 0;
    this.halt = 0;
  }
  step() {
    if (this.con === 1) {
      this.active = 1;
      this.visible = true;
      this.image_alpha += 0.15;
      if (this.image_alpha >= 1) {
        this.con = 2;
      }
    }
    if (this.con === 2) {
      this.falltimer += 1;
      if (this.falltimer >= this.fallspeed) {
        if (this.ypos < 0 && !collision_point(this.x + this.sprite_width / 2, this.y + this.sprite_height * 1.5, "obj_blockbullet_fall", this)) {
          this.ypos += 1;
        } else {
          this.halt = 1;
        }
        this.falltimer = 0;
      }
    }
    if (this.con === 0) {
      this.con = 1;
    }
    if (this.con === 3) {
      if (this.image_alpha <= 0.2) {
        this.instance_destroy();
      }
      this.active = 0;
      this.image_alpha -= 0.2;
    }
    let gZ = cv.first("obj_battlesolid");
    if (gZ) {
      let gT = gZ.x - gZ.sprite_width / 2 + 8;
      this.x = gT + this.xpos * this.sprite_width;
      let ga = gZ.y + gZ.sprite_height / 2 - 3 - this.sprite_height;
      this.y = ga + this.ypos * this.sprite_height;
    }
    if (this.grazed === 1) {
      this.grazepoints = 0;
      this.timepoints = 0;
    }
  }
};
x0(xn, "obj_blockbullet_fall");
x2(xn, "kinds", cM("obj_blockbullet_fall", c0));
x2(xn, "defaultDepth", 0);
x2(xn, "defaultSprite", "spr_blockbullet_mini");
var obj_blockbullet_fall = xn;
i({
  26: (gZ, gT) => {
    cv.with("obj_regularbullet", gd => {
      if (gd.sprite_index === "spr_blockbullet") {
        gd.image_alpha += 0.1;
      }
    });
    let ga = 35;
    if (cu() === 2) {
      ga = 52.5;
    }
    if (cu() === 3) {
      ga = 77;
    }
    if (gZ.btimer >= ga) {
      let gd = -60;
      let gO = -80 + cU(160);
      gd += gO;
      let gq = -gO / 160;
      let go = -2;
      for (let gQ = 0; gQ < 2; gQ++) {
        let gh = cN(0, 1, 2);
        let gu = cN(0, 1, 2);
        for (let gp = 0; gp < 2; gp++) {
          let gf = cL(500 + gQ * 80, 140 + gd + gp * 80, c1);
          s(gZ, gf);
          if (gp === gh) {
            gf.y += cN(0, 40);
          }
          if (gQ === 1 && gp === 1) {
            gf.x += cN(0, -40);
            gf.y = 140 + gd + cN(0, 40) + gp * 80;
          }
          gf.hspeed = go;
          gf.vspeed = gq;
          gf.friction = -0.07;
          if (cu() >= 2) {
            gf.friction = -0.1;
          }
          gf.sprite_index = "spr_blockbullet";
          gf.image_alpha = 0;
        }
      }
      gZ.btimer = 0;
    }
  },
  27: (gZ, gT) => {
    let ga = 15;
    if (cu() === 2) {
      ga = 25.5;
    }
    if (cu() === 3) {
      ga = 34.5;
    }
    let gd = gT.bs;
    if (!gd) {
      return;
    }
    let gO = gd.x - gd.sprite_width / 2 + 8;
    let gq = gd.y + gd.sprite_height / 2 - 15;
    if (gZ.btimer >= ga) {
      let gp = gZ.made;
      gZ.made = cN(0, 1, 2, 3);
      if (gZ.made === gp) {
        gZ.made = cN(0, 1, 2, 3);
      }
      gZ.btimer = 0;
      let gf = cL(100, 100, obj_blockbullet_fall);
      gf.xpos = gZ.made;
      s(gZ, gf);
      let gj = collision_point(gO + gZ.made * gf.sprite_width + 8, gq - gf.sprite_height * 3 - 10, "obj_blockbullet_fall", null);
      if (gj && gj.halt === 1) {
        gf.instance_destroy();
      }
    }
    let go = collision_point(gO + 15, gq, "obj_blockbullet_fall", null);
    let gQ = collision_point(gO + 15 + 34, gq, "obj_blockbullet_fall", null);
    let gh = collision_point(gO + 15 + 68, gq, "obj_blockbullet_fall", null);
    let gu = collision_point(gO + 15 + 102, gq, "obj_blockbullet_fall", null);
    if (go && gQ && gh && gu) {
      go.con = 3;
      gQ.con = 3;
      gh.con = 3;
      gu.con = 3;
    }
  }
});
var xT = class gM extends c8 {
  get sprite_width() {
    return sprDims(this.sprite_index).w * Math.abs(this.image_xscale);
  }
  get sprite_height() {
    return sprDims(this.sprite_index).h * Math.abs(this.image_yscale);
  }
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
      shakex: 0,
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: 0,
      maxmercy: 9999,
      warned: 0,
      compliment: 0,
      tired: 0,
      fixed: 0,
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
      idlesprite: "spr_blockguy_overworld",
      hurtsprite: "spr_blockguy_overworld",
      sparedsprite: "spr_blockguy_spared"
    });
    let gZ = cN(0, 1, 2, 3);
    this.headpart = 1;
    this.part = [0, 0, 0, 0, 0];
    if (gZ === 0) {
      this.headpart = 3;
      this.part[1] = 2;
      this.part[2] = 3;
      this.part[3] = 1;
    }
    if (gZ === 1) {
      this.headpart = 3;
      this.part[1] = 3;
      this.part[2] = 2;
      this.part[3] = 1;
    }
    if (gZ === 2) {
      this.headpart = 1;
      this.part[1] = 1;
      this.part[2] = 3;
      this.part[3] = 2;
    }
    if (gZ === 3) {
      this.headpart = 2;
      this.part[1] = 2;
      this.part[2] = 1;
      this.part[3] = 3;
    }
    this.part[4] = 4;
    this.maxpart = 5;
    this.siner = 0;
    this.floatsin = 0;
    this.party = [28, 54, 70];
    this.floating = 0;
    this.swaptime = 10;
    this.bodyfade = 0;
    this.bodyalpha = 1;
    this.swapx = 0;
    this.sinmomentum = 0;
    this.custom = [4.5, 3, 1.5];
    this.select = [-1, -1, -1];
    this.selectpart = [0, 0, 0];
    this.partyb = [0, 0, 0];
    this.selecty = 0;
    this.selected = 0;
    this.selecttotal = 0;
    this.selectx = [0];
    this.movex = [0, 0, 0];
    this.threebuffer = 0;
    this.finishtimer = 0;
    this.hurk = 0;
    this.xspeed = 0;
    this.scolor = [x9, x9, x9];
    this.introtimer = 0;
    this.idealy = [0, 0, 0, 0, 0];
    this.cury = [0, 0, 0, 0, 0];
    this.yfactor = [0, 0, 0, 0, 0];
  }
  userEvent(gZ) {
    if (gZ === 12) {
      co.monsterx[this.myself] = this.x + this.sprite_width / 2;
      co.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (gZ !== 11 && gZ === 10) {
      let gT = cL(this.x, this.y, obj_spareanim);
      gT.sprite_index = this.sparedsprite;
      gT.image_index = 0;
      gT.image_xscale = this.image_xscale;
      gT.image_yscale = this.image_yscale;
      this.scr_monsterdefeat();
      this.instance_destroy();
      return;
    }
  }
  alarmEvent(gZ) {
    if (gZ === 4) {
      this.con += 1;
    }
  }
  step() {
    let gZ = this.myself;
    if (co.monster[gZ] === 1) {
      if (co.mnfight === 1 && this.talked === 0) {
        cd(this);
        if (!cv.exists("obj_darkener")) {
          cL(0, 0, cZ);
        }
        co.typer = 50;
        co.msg = new Array(100).fill(" ");
        let gT = cN(0, 1, 2, 3);
        if (gT === 0) {
          co.msg[0] = "HOOH...! You&interrupted my&training...!";
        }
        if (gT === 1) {
          co.msg[0] = "GOOH...! I'm&gonna knock&your block&off...!";
        }
        if (gT === 2) {
          co.msg[0] = "Let's see how&you stack&up...! HIYA!!";
        }
        if (gT === 3) {
          co.msg[0] = "Let me show&you my&training!&YIHA!!";
        }
        if (this.acting === 2) {
          co.msg[0] = "ARRGH!!";
          if (this.part[2] === 3) {
            co.msg[0] = "ARRGH!! NO!!&MY BUTT IS&MY ABS!";
          }
          if (this.part[1] === 3) {
            co.msg[0] = "ARRGH!! NO!!&MY BUTT IS&MY FACE!!";
          }
          if (this.part[1] === 2) {
            co.msg[0] = "ARRGH!! NO!!&MY ABS ARE&MY FACE!!";
          }
          if (this.part[1] === 1) {
            co.msg[0] = "ARRGH!! NO!!&MY FACE IS&MY FACE!!&Wait...";
          }
          if (co.mercymod[gZ] >= 100) {
            co.msg[0] = "Oh, you mixed&me up all&nice~";
          }
        }
        if (this.acting === 3) {
          co.msg[0] = "My momentum&is totally&blocked&up...";
        }
        cr(this.x - 160, this.y, 3);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && co.mnfight === 1) {
        this.rtimer = 0;
        if (cy() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer++;
        if (this.talktimer >= this.talkmax) {
          cv.with("obj_writer", ga => ga.instance_destroy());
          cv.with("obj_battleblcon", ga => ga.instance_destroy());
          co.mnfight = 2;
        }
        if (co.mnfight === 2) {
          if (!cv.exists("obj_moveheart")) {
            cn();
          }
          if (!cv.exists("obj_growtangle")) {
            cL(320, 170, cX);
          }
        }
      }
      if (co.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          let ga = cN(0, 1);
          let gd = 1;
          if (cu() >= 2 && gZ >= 1) {
            gd = 0;
          }
          if (ga === 0 && gd === 1) {
            let gq = cL(this.x, this.y, v);
            gq.type = 26;
            gq.target = this.mytarget;
            gq.damage = co.monsterat[gZ] * 5;
            gq.grazepoints = 5;
            gq.timepoints = 2;
          } else {
            let go = cL(this.x, this.y, v);
            go.type = 27;
            go.target = this.mytarget;
            go.damage = co.monsterat[gZ] * 5;
            go.grazepoints = 5;
          }
          this.turns += 1;
          co.turntimer = 170;
          this.attacked = 1;
          co.typer = 6;
          co.fc = 0;
          let gO = cN(0, 1, 2, 3, 4);
          if (gO === 0) {
            co.battlemsg[0] = "* Bloxer is thinking about training.";
          }
          if (gO === 1) {
            co.battlemsg[0] = "* Bloxer is thinking about trains.";
          }
          if (gO === 2) {
            co.battlemsg[0] = "* Bloxer is thinking about training wheels.";
          }
          if (gO === 3) {
            co.battlemsg[0] = "* Bloxer considers building a house out of its own body.";
          }
          if (gO === 4) {
            co.battlemsg[0] = "* Smells like freshly-printed plastic.";
          }
          if (co.monsterstatus[gZ] === 1) {
            co.battlemsg[0] = "* Bloxer is starting to break apart with exhaustion.";
          }
          if (co.mercymod[gZ] >= co.mercymax[gZ]) {
            co.battlemsg[0] = "* Bloxer radiates with the spirit of joy.";
          }
        } else {
          co.turntimer = 120;
        }
      }
      if (co.mnfight === 2 && co.turntimer <= 1) {
        if (this.battlecancel === 1) {
          co.mercymod[gZ] = 999;
        }
        if (this.battlecancel === 2) {
          cv.with("obj_battlecontroller", gQ => {
            gQ.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (co.myfight === 3) {
      if (this.acting === 1 && this.actcon === 0) {
        this.actcon = 1;
        co.msg = new Array(100).fill(" ");
        co.msg[0] = "* BLOXER - AT 9 DF 2&* Loves: Training^1. Hates: Body being the wrong shape/%";
        cx();
      }
      if (this.acting === 2 && this.actcon === 0) {
        co.msg = new Array(100).fill(" ");
        co.msg[0] = "* Press " + scr_get_input_name(6) + " to choose:&  #1 HEAD, #2 BODY, #3 LEGS.";
        co.mercymod[gZ] = 0;
        cx();
        this.actcon = 10;
        this.swaptime = 1;
        this.floatsin = 0;
        this.swapx = 0;
        this.sinmomentum = 0;
        this.party[0] = 28;
        this.party[1] = 54;
        this.party[2] = 70;
        this.select[0] = -1;
        this.select[1] = -1;
        this.select[2] = -1;
        this.selecttotal = 0;
        this.movex[0] = 0;
        this.movex[1] = 0;
        this.movex[2] = 0;
        this.finishtimer = 0;
      }
      if (this.acting === 3 && this.actcon === 0) {
        this.actcon = 1;
        co.msg = new Array(100).fill(" ");
        co.msg[0] = "* Susie became antagonistic!/";
        let gQ = cN(0, 1, 2);
        co.msg[1] = "* Why bother training^1? You'll NEVER beat me./";
        if (gQ === 1) {
          co.msg[1] = "* Why train^1? You're still 100 years too early to beat me./";
        }
        if (gQ === 2) {
          co.msg[1] = "* Training^1? Yeah^1, like I need that to beat you down./";
        }
        co.msg[2] = "* The enemies became \\cBTIRED\\cW.../%";
        for (let gh = 0; gh < 3; gh++) {
          co.monstercomment[gh] = "(Tired)";
          co.monsterstatus[gh] = 1;
        }
        cx();
      }
      if (this.actcon === 1 && !cv.exists("obj_writer")) {
        this.actcon = 0;
        c4();
      }
      if (this.actcon === 10 && this.swaptime === 0) {
        cv.with("obj_writer", gu => gu.instance_destroy());
        co.msg = new Array(100).fill(" ");
        if (co.mercymod[gZ] >= 100) {
          co.msg[0] = "* Bloxer is pleased with its new self!/%";
          this.fixed = 1;
        } else {
          co.msg[0] = "* Bloxer is still unhappy with its self.../%";
        }
        cx();
        this.actcon = 1;
      }
    }
    if (co.myfight === 7) {
      this.hspeed = 15;
    }
  }
  draw(gZ) {
    let gT = this.myself;
    let ga = this.part;
    let gd = this.movex;
    let gO = this.partyb;
    let gq = this.select;
    this.threebuffer -= 1;
    let go = cY(this.siner / 4);
    let gQ = cD(this.siner / 4);
    if (this.swaptime === 5) {
      let gh = 0;
      for (let gu = 0; gu < 3; gu++) {
        gd[gu] += this.xspeed;
        if (gd[gu] <= 0) {
          gd[gu] = 0;
          gh += 1;
        }
      }
      if (gh >= 3) {
        this.swaptime = 6;
        ga[1] = this.selectpart[0];
        ga[2] = this.selectpart[1];
        ga[3] = this.selectpart[2];
        if (ga[1] === 1 && ga[2] === 2 && ga[3] === 3) {
          ga[1] = 6;
          ca(gT, 100);
        }
      } else {
        this.xspeed -= 2;
        gZ.draw_sprite_ext("spr_blockguy_part", ga[3], this.x + gd[2], gO[2], 2, 2, 0, cW.white, 1);
        gZ.draw_sprite_ext("spr_blockguy_part", ga[2], this.x + gd[1], gO[1], 2, 2, 0, cW.white, 1);
        gZ.draw_sprite_ext("spr_blockguy_part", ga[1], this.x + gd[0], gO[0], 2, 2, 0, cW.white, 1);
      }
    }
    if (this.swaptime === 2 || this.swaptime === 3) {
      if (this.sinmomentum < 0.8) {
        this.sinmomentum += 0.05;
      }
      this.floatsin += this.sinmomentum;
      if (this.threebuffer <= 0) {
        this.selecty = this.y + 30 + this.selecttotal * 26;
      }
      if (gq[0] < 0) {
        gO[0] = this.y + 53 + cY(this.floatsin / 8 + this.custom[0]) * 25;
      }
      if (gq[1] < 0) {
        gO[1] = this.y + 53 + cY(this.floatsin / 8 + this.custom[1]) * 25;
      }
      if (gq[2] < 0) {
        gO[2] = this.y + 53 + cY(this.floatsin / 8 + this.custom[2]) * 25;
      }
      let gp = -1;
      let gf = 99;
      for (let gW = 0; gW < 3; gW++) {
        this.scolor[gW] = x9;
        if (gq[gW] < 0) {
          let gP = cV(gO[gW] - this.selecty);
          if (gP < gf && gP < 24) {
            gf = gP;
            gp = gW;
          }
        } else {
          if (gd[gW] < 60) {
            gd[gW] += 6;
          }
          this.scolor[gW] = xc;
          let gv = this.y + 28 + gq[gW] * 25;
          if (cV(gO[gW] - gv) < 6) {
            gO[gW] = gv;
          }
          if (gO[gW] < gv) {
            gO[gW] += 6;
          }
          if (gO[gW] > gv) {
            gO[gW] -= 6;
          }
        }
      }
      let gj = cW.white;
      for (let gR = 0; gR < 3; gR++) {
        if (gp === gR) {
          this.scolor[gR] = xx;
          gj = cW.yellow;
        }
      }
      gZ.draw_sprite_ext("spr_blockguy_part", ga[3], this.x + gd[2], gO[2], 2, 2, 0, this.scolor[2], 1);
      gZ.draw_sprite_ext("spr_blockguy_part", ga[2], this.x + gd[1], gO[1], 2, 2, 0, this.scolor[1], 1);
      gZ.draw_sprite_ext("spr_blockguy_part", ga[1], this.x + gd[0], gO[0], 2, 2, 0, this.scolor[0], 1);
      let gk = this.threebuffer * 4;
      if (gk < 0) {
        gk = 0;
      }
      let gy = 0;
      if (this.threebuffer === 1) {
        gy = 15;
      }
      gZ.draw_set_color(gj);
      if (this.finishtimer < 8 && this.selecttotal < this.maxpart - 2) {
        draw_arrow(gZ, this.x - 50 + cY(this.floatsin / 6) * 2 + gk, this.selecty + 10 + gy, this.x - 10 + cY(this.floatsin / 6) * 2 + gk, this.selecty + 10 + gy, 16);
      }
      if (cP() && this.threebuffer < 0 && this.selecttotal < this.maxpart - 2) {
        if (gp >= 0) {
          this.selectpart[this.selecttotal] = ga[1 + gp];
          gq[gp] = this.selecttotal;
          this.selecttotal += 1;
          this.threebuffer = 6;
        }
        if (this.selecttotal >= this.maxpart - 2) {
          this.swaptime = 3;
        }
      }
      if (this.swaptime === 3) {
        this.finishtimer += 1;
      }
      if (this.finishtimer >= 13) {
        this.swaptime = 5;
        this.xspeed = 4;
      }
    }
    if (this.swaptime === 0 || this.swaptime === 1 || this.swaptime === 6) {
      this.hurk = 0;
      if (this.state === 3) {
        this.hurk = 1;
        if (co.monsterhp[gT] <= co.monstermaxhp[gT] / 3) {
          co.monsterstatus[gT] = 1;
          if (co.monstercomment[gT] === " ") {
            co.monstercomment[gT] = "(Tired)";
          }
        }
        this.hurttimer -= 1;
        if (this.hurttimer < 0) {
          this.state = 0;
        } else {
          if (co.monster[gT] === 0) {
            this.hspeed = 10;
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
        }
      }
      if (this.swaptime === 0) {
        this.siner += 1;
      }
      if (this.swaptime === 1) {
        this.swapx += 2;
      }
      if (this.swaptime === 6) {
        if (this.swapx > 0) {
          this.swapx -= 2;
        }
        if (this.swapx <= 0) {
          this.swaptime = 0;
        }
      }
      if (this.swapx >= 16 && this.swaptime === 1) {
        this.swaptime = 2;
      }
      if (this.swaptime === 0 && ga[1] === 1 && ga[2] === 2 && ga[3] === 3) {
        ga[1] = 6;
      }
      if (this.swaptime === 1 && ga[1] === 6) {
        ga[1] = 1;
      }
      let gK = "spr_blockguy_part";
      if (this.hurk === 1) {
        gK = "spr_blockguy_part_hurt";
      }
      let gU = this.x;
      let gN = this.y;
      let gH = this.swapx;
      let gb = this.shakex;
      gZ.draw_sprite_ext(gK, 5, gU - 24 + go * 2 + gH * 1.5 + gb, gN + 54 + gQ * 2, 2, 2, 0, cW.white, 1);
      gZ.draw_sprite_ext(gK, ga[4], gU - go + gb, gN + 100 - gH, 2, 2, 0, cW.white, 1);
      if (this.swaptime === 1 || this.swaptime === 6) {
        gZ.draw_sprite_ext(gK, ga[0], gU + go * 2 + gb, gN + gH, 2, 2, 0, cW.white, 1);
      }
      gZ.draw_sprite_ext(gK, ga[3], gU - 4 + go * 2 + gb, gN + 78, 2, 2, 0, cW.white, 1);
      gZ.draw_sprite_ext(gK, ga[2], gU + 4 - go * 2 + gb, gN + 54, 2, 2, 0, cW.white, 1);
      gZ.draw_sprite_ext(gK, ga[1], gU + go * 2 + gb, gN + 28, 2, 2, 0, cW.white, 1);
      if (this.swaptime === 0) {
        gZ.draw_sprite_ext(gK, ga[0], gU + go * 2 + gb, gN + gH, 2, 2, 0, cW.white, 1);
      }
      if (this.state === 0 && this.flash === 1) {
        this.fsiner += 1;
        let gz = -cD(this.fsiner / 5) * 0.4 + 0.6;
        gZ.draw_sprite_white(gK, 5, gU - 24 + go * 2 + gH * 1.5 + gb, gN + 54 + gQ * 2, 2, 2, 0, gz);
        gZ.draw_sprite_white(gK, ga[4], gU - go + gb, gN + 100 - gH, 2, 2, 0, gz);
        if (this.swaptime === 1 || this.swaptime === 6) {
          gZ.draw_sprite_white(gK, ga[0], gU + go * 2 + gb, gN + gH, 2, 2, 0, gz);
        }
        gZ.draw_sprite_white(gK, ga[3], gU - 4 + go * 2 + gb, gN + 78, 2, 2, 0, gz);
        gZ.draw_sprite_white(gK, ga[2], gU + 4 - go * 2 + gb, gN + 54, 2, 2, 0, gz);
        gZ.draw_sprite_white(gK, ga[1], gU + go * 2 + gb, gN + 28, 2, 2, 0, gz);
      }
    }
    if (this.swaptime === 10) {
      this.introtimer = 0;
      this.idealy = [0, 28, 54, 78, 100];
      for (let gl = 0; gl < 5; gl++) {
        this.cury[gl] = 100;
        this.yfactor[gl] = (100 - this.idealy[gl]) / 16;
      }
      this.cury[0] = 78;
      this.yfactor[0] = 4.875;
      this.swaptime = 11;
    }
    if (this.swaptime === 11) {
      gZ.draw_sprite_ext("spr_blockguy_part", 5, this.x - this.introtimer * 2 + 6, this.y + this.cury[2], 2, 2, 0, cW.white, 1);
      for (let gL = 4; gL >= 0; gL--) {
        this.cury[gL] -= this.yfactor[gL];
        gZ.draw_sprite_ext("spr_blockguy_part", ga[gL], this.x, this.y + this.cury[gL], 2, 2, 0, cW.white, 1);
      }
      gZ.draw_sprite_ext("spr_blockguy_part", ga[this.headpart], this.x, this.y + this.cury[this.headpart], 2, 2, 0, cW.white, 1);
      gZ.draw_sprite_ext("spr_blockguy_part", ga[0], this.x, this.y + this.cury[0], 2, 2, 0, cW.white, 1);
      this.introtimer += 1;
      if (this.introtimer >= 16) {
        this.swaptime = 0;
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
x0(xT, "obj_bloxer_enemy");
x2(xT, "kinds", cM("obj_bloxer_enemy", c8));
x2(xT, "defaultDepth", 90);
x2(xT, "defaultSprite", "spr_blockguy_spared");
var obj_bloxer_enemy = xT;
var xd = [{
  id: "bloxer",
  name: "Bloxer",
  chapter: 1,
  area: "Card Castle",
  desc: "Bloxer.#Rearrange its blocks.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: obj_bloxer_enemy,
    type: 14,
    x: 480,
    y: 140,
    setup: setupStats
  }],
  battlemsg: "* Bloxer assembled!",
  encounterno: 18,
  music: "battle"
}, {
  id: "bloxer2",
  name: "Bloxer x2",
  chapter: 1,
  area: "Card Castle",
  desc: "Two Bloxers.#Falling bricks.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: obj_bloxer_enemy,
    type: 14,
    x: 480,
    y: 60,
    setup: setupStats
  }, {
    cls: obj_bloxer_enemy,
    type: 14,
    x: 460,
    y: 180,
    setup: setupStats
  }],
  battlemsg: "* Bloxers assembled!",
  encounterno: 19,
  music: "battle"
}];
x3(obj_bloxer_enemy, "G.mnfight = 2;");
var xO = {};
x1(xO, {
  FIGHTS: () => xb,
  SOUNDS: () => xo,
  SPRITES: () => xq,
  obj_clubsbullet: () => obj_clubsbullet,
  obj_clubsbullet_dark_t0: () => obj_clubsbullet_dark_t0,
  obj_clubsenemy: () => obj_clubsenemy,
  obj_defeatanim: () => obj_defeatanim,
  obj_spareanim: () => xk,
  setupStats: () => xf,
  setupStats16: () => setupStats16,
  setupStats7: () => setupStats7
});
x4();
var xq = ["spr_clubs_idle", "spr_clubs_hurt", "spr_clubs_spared", "spr_battleblcon_clubs", "spr_clubsbullet", "spr_clubsbullet_dark", "spr_clubsball_a", "spr_clubsball_b", "spr_clubsball_c", "spr_defeatsweat", "spr_sparestar_anim"];
var xo = ["snd_defeatrun", "snd_spare"];
var clearmsg = x0(() => {
  co.msg = new Array(100).fill(" ");
}, "clearmsg");
function setupStats7(gZ) {
  co.monstername[gZ] = "Clover";
  co.monstermaxhp[gZ] = 270;
  co.monsterhp[gZ] = 270;
  co.monsterat[gZ] = 8;
  co.monsterdf[gZ] = 1;
  co.monsterexp[gZ] = 0;
  co.monstergold[gZ] = 43;
  co.sparepoint[gZ] = 10;
  co.mercymod[gZ] = 0;
  co.mercymax[gZ] = 100;
  co.canact[gZ][0] = 1;
  co.actname[gZ][0] = "Check";
  let gT = cN(0, 1, 2);
  if (gT === 0) {
    co.canact[gZ][1] = 1;
    co.actname[gZ][1] = "Politics";
    co.canact[gZ][2] = 1;
    co.actname[gZ][2] = "Religion";
    co.canact[gZ][3] = 1;
    co.actname[gZ][3] = "Sports";
  }
  if (gT === 1) {
    co.canact[gZ][1] = 1;
    co.actname[gZ][1] = "Kindness";
    co.canact[gZ][2] = 1;
    co.actname[gZ][2] = "Cuteboys";
    co.canact[gZ][3] = 1;
    co.actname[gZ][3] = "GunControl";
  }
  if (gT === 2) {
    co.canact[gZ][1] = 1;
    co.actname[gZ][1] = "Trees";
    co.canact[gZ][2] = 1;
    co.actname[gZ][2] = "Ghosts";
    co.canact[gZ][3] = 1;
    co.actname[gZ][3] = "Games";
  }
  if (ch(2)) {
    co.canact[gZ][4] = 1;
    co.actname[gZ][4] = "Warning";
    co.actactor[gZ][4] = 3;
  }
}
x0(setupStats7, "setupStats7");
function setupStats16(gZ) {
  co.monstername[gZ] = "Clover";
  co.monstermaxhp[gZ] = 270;
  co.monsterhp[gZ] = 270;
  co.monsterat[gZ] = 6;
  co.monsterdf[gZ] = 1;
  co.monsterexp[gZ] = 0;
  co.monstergold[gZ] = 80;
  co.sparepoint[gZ] = 10;
  co.mercymod[gZ] = 0;
  co.mercymax[gZ] = 100;
  co.canact[gZ][0] = 1;
  co.actname[gZ][0] = "Check";
  co.canact[gZ][1] = 1;
  co.actname[gZ][1] = "TalkBday";
  co.actactor[gZ][1] = 3;
  co.actname[gZ][2] = "TalkBoys";
  co.canact[gZ][2] = 1;
  co.actactor[gZ][2] = 3;
  co.actname[gZ][3] = "TalkSports";
  co.canact[gZ][3] = 1;
  co.actactor[gZ][3] = 3;
  co.actname[gZ][4] = "TalkAnimals";
  co.canact[gZ][4] = 1;
  co.actname[gZ][5] = "TalkTrees";
  co.canact[gZ][5] = 1;
  cN(0, 1, 2);
}
x0(setupStats16, "setupStats16");
var xf = setupStats16;
var xj = class gJ extends cw {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    cf("snd_spare");
    cp("snd_spare");
  }
  draw(gZ) {
    let gT = this.sprite_index;
    let ga = this.image_index;
    let gd = this.image_xscale;
    let gO = this.image_yscale;
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage += 1;
      gZ.draw_sprite_white(gT, ga, this.x + this.afterimage * 4, this.y, gd, gO, 0, 0.7 - this.afterimage / 25);
      gZ.draw_sprite_white(gT, ga, this.x + this.afterimage * 8, this.y, gd, gO, 0, 0.4 - this.afterimage / 30);
    }
    if (this.t < 6) {
      if (this.t < 5) {
        gZ.draw_sprite_ext(gT, ga, this.x, this.y, gd, gO, 0, this.image_blend, 1 - this.neotone / 4);
      }
      let gq = this.t / 5;
      if (gq > 1) {
        gq = 1;
      }
      gZ.draw_sprite_white(gT, ga, this.x, this.y, gd, gO, 0, gq - this.tone / 5);
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let go = 0; go < 2; go += 1) {
        let gQ = cL(this.x + cU(this.sprite_width), this.y + cU(this.sprite_height), cB);
        gQ.image_xscale = 2;
        gQ.image_yscale = 2;
        gQ.sprite_index = "spr_sparestar_anim";
        gQ.image_alpha = 2;
        gQ.image_speed = 0.25;
        gQ.hspeed = -3;
        gQ.gravity = 0.5;
        gQ.gravity_direction = 0;
        this.star[this.starcount] = gQ;
        this.starcount += 1;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let gh = 0; gh < this.starcount; gh += 1) {
        let gu = this.star[gh];
        if (gu && !gu.destroyed) {
          gu.image_angle += 10;
          gu.image_alpha -= 0.1;
          if (gu.image_alpha <= 0) {
            gu.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone += 1;
    }
    if (this.t >= 9 && (this.neotone += 1, this.neotone >= 30)) {
      for (let gp = 0; gp < this.starcount; gp += 1) {
        let gf = this.star[gp];
        if (gf && !gf.destroyed) {
          gf.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
x0(xj, "obj_spareanim");
x2(xj, "kinds", cM("obj_spareanim", cw));
x2(xj, "defaultDepth", 0);
var xk = xj;
var xt = class gm extends cw {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    cp("snd_defeatrun");
  }
  step() {
    this.g += 1;
    if (this.g >= 15) {
      this.t += 1;
    }
  }
  draw(gZ) {
    if (this.t === 0) {
      this.draw_self(gZ);
    }
    let gT = 0;
    if (this.g <= 5) {
      gT = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      gT = 1;
    }
    if (gT === 1) {
      gZ.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let ga = 0; ga <= 80; ga += 1) {
        gZ.draw_sprite_ext(this.sprite_index, this.image_index, this.x + ga * 4, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 0.4 - this.t / 8 + ga / 200);
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
};
x0(xt, "obj_defeatanim");
x2(xt, "kinds", cM("obj_defeatanim", cw));
x2(xt, "defaultDepth", 0);
var obj_defeatanim = xt;
function scr_defeatrun(gZ) {
  let gT = cL(gZ.x, gZ.y, obj_defeatanim);
  gT.sprite_index = gZ.sprite_index;
  gT.sprite_index = gZ.hurtsprite;
  gT.image_index = 0;
  gT.image_xscale = gZ.image_xscale;
  gT.image_yscale = gZ.image_yscale;
  gZ.instance_destroy();
}
x0(scr_defeatrun, "scr_defeatrun");
var xM = class gF extends H {
  create() {
    this.damage = 0;
    this.target = 0;
  }
  endStep() {
    if (this.destroyed || !cA(this, this.x, this.y, "obj_battlesolid")) {
      return;
    }
    let gZ = (gT, ga, gd) => {
      let gO = cL(this.x, this.y, c1);
      if (!gO.destroyed) {
        gO.sprite_index = gT;
        gO.direction = this.direction + ga;
        gO.speed = this.speed + gd;
        gO.image_angle = this.image_angle;
        gO.damage = this.damage;
        gO.target = this.target;
        gO.grazepoints = 3;
        gO.timepoints = 2;
      }
    };
    gZ("spr_clubsball_b", 0, -6);
    gZ("spr_clubsball_c", -25, -8);
    gZ("spr_clubsball_a", 25, -8);
    this.instance_destroy();
  }
};
x0(xM, "obj_clubsbullet");
x2(xM, "kinds", cM("obj_clubsbullet", H));
x2(xM, "defaultDepth", -20);
x2(xM, "defaultSprite", "spr_clubsbullet");
var obj_clubsbullet = xM;
var xW = class gV extends c3 {
  step() {
    if (this.type !== 0) {
      super.step();
      return;
    }
    this.dtimer += 1;
    let gZ = cv.first("obj_heart");
    if (this.dtimer === 15 || this.dtimer === 19 || this.dtimer === 23) {
      this.move_towards_point(gZ ? gZ.x + 8 : 320, gZ ? gZ.y + 8 : 170, 0.1);
      let gT = (ga, gd) => {
        let gO = cL(this.x, this.y, c1);
        if (!gO.destroyed) {
          gO.sprite_index = ga;
          gO.direction = this.direction + gd;
          gO.speed = 4;
          gO.image_angle = this.direction;
          gO.damage = this.damage;
          gO.target = this.target;
          gO.grazepoints = 2;
          gO.timepoints = 1;
        }
      };
      gT("spr_clubsball_b", 0);
      gT("spr_clubsball_c", -17);
      gT("spr_clubsball_a", 17);
    }
    if (this.dtimer === 25) {
      let ga = cL(this.x, this.y, cg);
      ga.sprite_index = this.sprite_index;
      ga.image_angle = this.image_angle;
      this.instance_destroy();
    }
  }
};
x0(xW, "obj_clubsbullet_dark_t0");
x2(xW, "kinds", cM("obj_clubsbullet_dark_t0", c3));
var obj_clubsbullet_dark_t0 = xW;
i({
  2: gZ => {
    if (gZ.btimer >= gZ.ratio * 20) {
      let gT = -20;
      if (gZ.side === 1) {
        gT = 660;
      }
      let ga = gZ.miny + cU(gZ.maxy - gZ.miny);
      let gd = cL(gT, ga, obj_clubsbullet);
      gd.speed = 12;
      gd.damage = gZ.damage;
      gd.target = gZ.target;
      if (gZ.side === 1) {
        gd.direction = 180;
        gd.image_angle = 180;
      }
      gZ.btimer = 0;
    }
  },
  4: (gZ, gT) => {
    if (gZ.btimer >= gZ.ratio * 30) {
      gZ.btimer = 0;
      let ga = 225;
      if (gZ.side === -1) {
        ga = 225;
      }
      if (gZ.side === 1) {
        ga = 315;
      }
      let gd = 400;
      let gO = cH(gd, ga);
      let gq = cb(gd, ga);
      let go = gT.heart;
      let gQ = go ? go.x : 320;
      let gh = go ? go.y : 170;
      let gu = cL(gQ + 8 + gO, gh + 8 + gq, obj_clubsbullet_dark_t0);
      gu.damage = gZ.damage;
      gu.target = gZ.target;
      gu.direction = ga + 180;
      gu.speed = 20;
      gu.friction = 1;
      gu.image_angle = gu.direction;
      if (gZ.side === 1) {
        gZ.side = -1;
      } else {
        gZ.side = 1;
      }
    }
  }
});
var xv = class gE extends c8 {
  create() {
    Object.assign(this, {
      bikeflip: 0,
      becomeflash: 0,
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 150,
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
      manual: 0,
      attacks: 0,
      dodgetimer: 0,
      candodge: 0,
      con: 0,
      battlecancel: 0,
      nexttry: 0,
      mytarget: 3,
      image_speed: 0,
      betray: 0,
      argue: 0,
      image_xscale: 2,
      image_yscale: 2,
      idlesprite: "spr_clubs_idle",
      hurtsprite: "spr_clubs_hurt",
      sparedsprite: "spr_clubs_spared",
      rtimer: 0
    });
    this.acted = [0, 0, 0, 0, 0, 0];
  }
  setupFn(gZ) {
    if (co.monstertype[gZ] === 7) {
      setupStats7(gZ);
    } else {
      setupStats16(gZ);
    }
  }
  userEvent(gZ) {
    if (gZ === 12) {
      co.monsterx[this.myself] = this.x + this.sprite_width / 2 + 50;
      co.monstery[this.myself] = this.y + this.sprite_height / 2 + 40;
      this.setupFn(this.myself);
      return;
    }
    if (gZ === 10) {
      this.spared();
      return;
    }
    super.userEvent(gZ);
  }
  spared() {
    let gZ = cL(this.x, this.y, xk);
    gZ.sprite_index = this.sparedsprite;
    gZ.image_index = 0;
    gZ.image_xscale = this.image_xscale;
    gZ.image_yscale = this.image_yscale;
    this.scr_monsterdefeat();
    this.instance_destroy();
  }
  alarmEvent(gZ) {
    if (gZ === 4) {
      this.con += 1;
    }
  }
  blcon3(gZ, gT, ga) {
    let gd = (gO, gq, go, gQ) => {
      clearmsg();
      co.msg[0] = gQ;
      let gh = cr(gO, gq, go);
      if (gh) {
        gh.sprite_index = "spr_battleblcon_clubs";
        gh.image_index = go - 4;
        gh.image_speed = 0;
      }
    };
    gd(this.x - 110, this.y - 10, 4, gZ);
    gd(this.x - 125, this.y + 70, 5, gT);
    gd(this.x + 125, this.y - 10, 6, ga);
  }
  step() {
    let gZ = this.myself;
    if (co.monster[gZ] === 1) {
      if (co.mnfight === 1 && this.talked === 0) {
        cd(this);
        if (!cv.exists("obj_darkener")) {
          cL(0, 0, cZ);
        }
        co.typer = 50;
        let gT = cN(0, 1, 2);
        let ga = "Nice mouth";
        let gd = "Anger mouth";
        let gO = "Smart Mouth";
        if (gT === 0) {
          ga = "Nice to&meet you!";
          gd = "Die!&Die!&Die!";
          gO = "Please&ignore&them.";
        }
        if (gT === 1) {
          ga = "Let's get&to know&you~";
          gd = "GET OUT&OF HERE!!";
          gO = "Sorry&about&this...";
        }
        if (gT === 2) {
          ga = "Nice&weather&today.";
          gd = "What?&It's just&awful!";
          gO = "Please&stop, you&two...";
        }
        if (this.acting === 2) {
          ga = "It's my&birthday~";
          gd = "WHAT!? NO!&It's MY&birthday!";
          gO = "We're&triplets...";
        }
        if (this.acting === 3) {
          ga = "Glasses&are cute,&I think...";
          gd = "Fluffy!&Glasses!&That's it!";
          gO = "HIM???&... err,&sure.";
        }
        if (this.acting === 4) {
          ga = "Spaghetti&and tennis&balls.";
          gd = "That's&GENIUS!";
          gO = "We really&agree&on it.";
        }
        if (this.acting === 5) {
          ga = "Animals&are kind&of nasty.";
          gd = "Just AWFUL&in&concept.";
          gO = "(Never&seen one,&but...)";
        }
        if (this.acting === 6) {
          ga = "I love&the smell&of trees.";
          gd = "Oh!&Me too!";
          gO = "Pollen&makes me...&Uh, sure!";
        }
        if (this.manual === 1) {
          ga = "Aww, he&MADE that!?&So caring!";
          gd = "It's SOOO&cute!&I want it!";
          gO = "(Isn't it&a bit...&boring?)";
        }
        this.blcon3(ga, gd, gO);
        cv.with("obj_monsterparent", gq => {
          gq.talkmax = 210;
        });
        this.talked = 1;
        this.talktimer = 0;
        this.manual = 0;
      }
      if (this.talked === 1 && co.mnfight === 1) {
        this.rtimer = 0;
        if (cy() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          cv.with("obj_writer", gq => gq.instance_destroy());
          co.mnfight = 2;
        }
        if (co.mnfight === 2) {
          if (!cv.exists("obj_moveheart")) {
            cn();
          }
          if (!cv.exists("obj_growtangle")) {
            cL(320, 170, cX);
          }
        }
      }
      if (co.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          let gq = cN(0, 1);
          let go = cL(this.x, this.y, v);
          go.type = gq === 0 ? 2 : 4;
          go.target = this.mytarget;
          go.damage = co.monsterat[gZ] * 5;
          this.turns += 1;
          co.turntimer = 150;
          this.attacked = 1;
          co.typer = 6;
          co.fc = 0;
          let gQ = cN(0, 1, 2, 3, 4, 5);
          if (gQ === 0) {
            co.battlemsg[0] = "* Clover flashes a trio of terrible smiles.";
          }
          if (gQ === 1) {
            co.battlemsg[0] = "* Clover is bickering with herselves.";
          }
          if (gQ === 2) {
            co.battlemsg[0] = "* Clover is whispering about cute boys.";
          }
          if (gQ === 3) {
            co.battlemsg[0] = "* Clover is arguing about whose toothbrush is whose.";
          }
          if (gQ === 4) {
            co.battlemsg[0] = "* Clover hums like an out-of-tune choir.";
          }
          if (gQ === 5) {
            co.battlemsg[0] = "* Smells like clover and dew.";
          }
          if (co.monsterstatus[gZ] === 1) {
            co.battlemsg[0] = "* Clover seems TIRED of discussing so much.";
          }
          if (co.monsterhp[gZ] <= co.monstermaxhp[gZ] / 3) {
            co.battlemsg[0] = "* Clover starts to look wilted.";
          }
          if (co.mercymod[gZ] >= co.mercymax[gZ]) {
            co.msg[0] = "* Clover seems to be getting along with herselves.";
          }
          if (this.betray === 1) {
            co.battlemsg[0] = "* Clover's harmony was shattered by violence.";
          }
          this.betray = 0;
        } else {
          co.turntimer = 150;
        }
      }
    }
    if (co.myfight === 3) {
      this.actStep();
    }
  }
  actStep() {
    let gZ = this.myself;
    let gT = () => cv.exists("obj_writer");
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      clearmsg();
      co.msg[0] = "* CLOVER - AT 8 DF 2&* Two heads are better than one^1!&* Three..^1. maybe not./%";
      cx();
    }
    if (this.acting === 2 && this.actcon === 0) {
      co.typer = 45;
      co.fc = 2;
      co.fe = 0;
      clearmsg();
      co.msg[0] = "* Ummm^1, what would you like for your birthday?/%";
      this.argue += 1;
      cc();
      this.actcon = 20;
    }
    if (this.actcon === 20 && !gT()) {
      co.typer = 50;
      this.blcon3("Let's just&have a nice&chat~/%", "You IDIOT!&Ask for a&GIFT!!!/%", "(Just&discuss&our likes.)/%");
      this.actcon = 21;
    }
    if (this.actcon === 21 && !gT()) {
      clearmsg();
      co.msg[0] = "* (Seems like you should talk about something else...)/%";
      cx();
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      co.typer = 45;
      co.fc = 2;
      co.fe = 0;
      clearmsg();
      co.msg[0] = "* Ummm..^1. What kind of \"Boys\" do you like?/%";
      this.argue += 1;
      cc();
      this.actcon = 22;
    }
    if (this.actcon === 22 && !gT()) {
      co.typer = 50;
      if (this.acted[2] === 0) {
        ca(gZ, 40);
        this.acted[2] = 1;
      }
      this.blcon3("Cute ones!&Hmm hmm~&/%", "NICE ONES,&like I AM!/%", "None...&Um, I mean,&all./%");
      this.actcon = 23;
    }
    if (this.actcon === 23 && !gT()) {
      clearmsg();
      co.msg[0] = "* (Seems like Clover enjoyed talking about that...)/%";
      cx();
      this.actcon = 1;
    }
    if (this.acting === 4 && this.actcon === 0) {
      co.typer = 45;
      co.fc = 2;
      co.fe = 0;
      clearmsg();
      co.msg[0] = "* Do you like^1, um..^1. Sports?/%";
      this.argue += 1;
      cc();
      this.actcon = 24;
    }
    if (this.actcon === 24 && !gT()) {
      co.typer = 50;
      if (this.acted[3] === 0) {
        ca(gZ, 40);
        this.acted[3] = 1;
      }
      this.blcon3("I wanna&eat a&football./%", "Sports!&My favorite&food!/%", "Oh!&I love you&two!/%");
      this.actcon = 25;
    }
    if (this.actcon === 25 && !gT()) {
      clearmsg();
      co.msg[0] = "* (Seems like Clover enjoyed talking about that...)/%";
      cx();
      this.actcon = 1;
    }
    if (this.acting === 5 && this.actcon === 0) {
      clearmsg();
      co.msg[0] = "* You brought up the topic of Animals./";
      co.msg[1] = "* Clover didn't seem to care.../%";
      this.argue += 1;
      cx();
      this.actcon = 1;
    }
    if (this.acting === 6 && this.actcon === 0) {
      if (this.acted[5] === 0) {
        ca(gZ, 40);
        this.acted[5] = 1;
      }
      clearmsg();
      co.msg[0] = "* You brought up the topic of Trees^1. Clover seemed happy.../%";
      this.argue += 1;
      cx();
      this.actcon = 1;
    }
    if (this.actcon === 1 && !gT()) {
      if (this.argue >= 3) {
        co.monstercomment[gZ] = "(Tired)";
        co.monsterstatus[gZ] = 1;
      }
      this.actcon = 0;
      c4();
    }
  }
  draw(gZ) {
    let gT = this.myself;
    if (this.state === 3) {
      if (co.monsterhp[gT] <= co.monstermaxhp[gT] / 2) {
        co.monsterstatus[gT] = 1;
        if (co.monstercomment[gT] === " ") {
          co.monstercomment[gT] = "(Tired)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (co.monster[gT] === 0) {
          co.flag[522] += 1;
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
        gZ.draw_sprite_ext("spr_clubs_hurt", 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      let ga = "spr_clubs_idle";
      if (co.mercymod[gT] >= co.mercymax[gT]) {
        ga = "spr_clubs_spared";
      }
      gZ.draw_sprite_ext(ga, this.siner / 6, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        gZ.draw_sprite_white(ga, this.siner / 6, this.x, this.y, 2, 2, 0, -cD(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
x0(xv, "obj_clubsenemy");
x2(xv, "kinds", cM("obj_clubsenemy", c8));
x2(xv, "defaultDepth", 90);
x2(xv, "defaultSprite", "spr_clubs_idle");
var obj_clubsenemy = xv;
var none = x0(() => {}, "none");
var MISSING = x0((gZ, gT, ga, gd) => ({
  cls: null,
  type: 0,
  x: ga,
  y: gd,
  setup: none,
  missing: gZ,
  missingType: gT
}), "MISSING");
var xN = null;
try {
  let gY = await gn("./c-UX5ODO2V.js", import.meta.url);
  if (gY && gY.obj_heartenemy) {
    xN = gY;
  }
} catch {
  xN = null;
}
var xH = xN ? {
  cls: xN.obj_heartenemy,
  type: 6,
  x: 420,
  y: 200,
  setup: xN.setupStats
} : MISSING("obj_heartenemy", 6, 420, 200);
var xb = [{
  id: "clover",
  name: "Clover",
  chapter: 1,
  area: "Field",
  desc: "Clover.#Three heads,#one flower.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: obj_clubsenemy,
    type: 16,
    x: 400,
    y: 120,
    setup: setupStats16
  }],
  battlemsg: "* Clover grew close!",
  encounterno: 8,
  music: "battle"
}, {
  id: "clover-hathy",
  name: "Clover & Hathy",
  chapter: 1,
  area: "Field",
  desc: "Clover and Hathy.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: obj_clubsenemy,
    type: 7,
    x: 400,
    y: 30,
    setup: setupStats7
  }, xH],
  battlemsg: "* Clover and Hathy grew close!",
  encounterno: 15,
  music: "battle"
}];
x3(obj_clubsenemy, "G.mnfight = 2;");
var xz = {};
x1(xz, {
  FIGHTS: () => rS,
  SOUNDS: () => xL,
  SPRITES: () => xl,
  obj_animation: () => obj_animation,
  obj_chainking: () => obj_chainking,
  obj_chainpiece: () => obj_chainpiece,
  obj_fadechain: () => obj_fadechain,
  obj_finalchain: () => obj_finalchain,
  obj_growtangle_bouncer: () => obj_growtangle_bouncer,
  obj_heartmarker: () => obj_heartmarker,
  obj_king_body: () => obj_king_body,
  obj_king_boss: () => obj_king_boss,
  obj_nonsolid_growtangle: () => obj_nonsolid_growtangle,
  obj_oflash: () => obj_oflash,
  obj_skychain: () => obj_skychain,
  obj_wavechain: () => obj_wavechain,
  setupStats: () => xJ
});
x4();
var xl = ["spr_chainking_idle", "spr_chainking_hurt", "spr_chainking_spin", "spr_chainking_toss", "spr_chainking_toss_idle", "spr_chainking_pullback", "spr_chainking_receive", "spr_chainpiece", "spr_chainfront", "spr_spadebullet", "spr_battlebg_wavechain", "spr_battlebg_1", "spr_battlebg_2", "spr_battlebg_spikes", "spr_bouncebox_spike", "spr_heartoutline", "spr_soulshining", "spr_susieb_idle_serious", "spr_susieb_attack_serious", "spr_diamondbullet_form"];
var xL = ["snd_dadblast", "snd_dadlaugh", "snd_criticalswing", "snd_chain_extend", "snd_chain_wave", "snd_locker", "snd_screenshake", "snd_bump", "snd_menumove", "snd_spearrise", "snd_power", "snd_boost"];
function xJ(gZ) {
  co.monstername[gZ] = "King";
  co.monstermaxhp[gZ] = 2800;
  co.monsterhp[gZ] = 2800;
  co.monsterat[gZ] = 8;
  co.monsterdf[gZ] = 0;
  co.monsterexp[gZ] = 0;
  co.monstergold[gZ] = 0;
  co.sparepoint[gZ] = 0;
  co.mercymod[gZ] = 0;
  co.mercymax[gZ] = 999;
  co.canact[gZ][0] = 1;
  co.actname[gZ][0] = "Check";
  co.canact[gZ][1] = 1;
  co.actactor[gZ][1] = 1;
  co.actname[gZ][1] = "Talk";
  co.actdesc[gZ][1] = " ";
  co.actcost[gZ][1] = 0;
  co.canact[gZ][2] = 1;
  co.actactor[gZ][2] = 2;
  co.actname[gZ][2] = "Talk";
  co.actdesc[gZ][2] = " ";
  co.actcost[gZ][2] = 0;
  co.canact[gZ][3] = 1;
  co.actactor[gZ][3] = 3;
  co.actname[gZ][3] = "Talk";
  co.actdesc[gZ][3] = " ";
  co.actcost[gZ][3] = 0;
  if (co.tempflag[5] === 1) {
    co.canact[gZ][1] = 1;
    co.actactor[gZ][1] = 1;
    co.actname[gZ][1] = "Courage";
    co.actdesc[gZ][1] = "Defense#Boost";
    co.actcost[gZ][1] = 62;
  }
  if (co.tempflag[6] === 1) {
    co.canact[gZ][2] = 1;
    co.actactor[gZ][2] = 2;
    co.actname[gZ][2] = "RedBuster";
    co.actdesc[gZ][2] = "Red#Damage";
    co.actcost[gZ][2] = 150;
  }
  if (co.tempflag[7] === 1) {
    co.canact[gZ][3] = 1;
    co.actactor[gZ][3] = 3;
    co.actname[gZ][3] = "DualHeal";
    co.actdesc[gZ][3] = "Heals#everyone";
    co.actcost[gZ][3] = 125;
  }
}
x0(xJ, "setupStats");
var scr_kingface = x0((gZ, gT) => {
  co.msg[gZ] = co.plot >= 235 ? "\\TX \\F0 \\E" + gT + " \\FK \\TK %" : "\\TX \\F0 \\E" + gT + " \\TK %";
}, "scr_kingface");
var scr_susface = x0((gZ, gT) => {
  co.msg[gZ] = "\\TX \\F0 \\E" + gT + " \\FS \\TS %";
}, "scr_susface");
var scr_ralface = x0((gZ, gT) => {
  co.msg[gZ] = "\\TX \\F0 \\E" + gT + " \\FR \\TR %";
}, "scr_ralface");
var scr_noface = x0(gZ => {
  co.msg[gZ] = "\\TX \\F0 \\T0 %";
}, "scr_noface");
var xY = 0;
var xA = 0;
var heart = x0(() => cv.first("obj_heart"), "heart");
var r0 = class gA extends cw {};
x0(r0, "obj_heartmarker");
x2(r0, "kinds", cM("obj_heartmarker", cw));
x2(r0, "defaultDepth", 0);
x2(r0, "defaultSprite", "spr_diamondbullet_form");
x2(r0, "defaultVisible", false);
var obj_heartmarker = r0;
function scr_moveheart_k() {
  let gZ = cv.first("obj_herokris");
  let gT = cL(gZ ? gZ.x + 10 : 90, gZ ? gZ.y + 40 : 140, cI);
  let ga = cv.first("obj_heartmarker");
  if (ga) {
    gT.distx = ga.x;
    gT.disty = ga.y;
    let gd = cl(gT.x, gT.y, gT.distx, gT.disty);
    gT.move_towards_point(gT.distx, gT.disty, gd / gT.flytime);
  }
  return gT;
}
x0(scr_moveheart_k, "scr_moveheart_k");
var r3 = class gD extends cw {
  create() {
    this.flashspeed = 1;
    this.siner = 0;
    this.target = null;
    this.image_speed = 0;
    this.flashcolor = cW.white;
  }
  draw(gZ) {
    if (cv.exists(this.target)) {
      this.image_index = this.target.image_index;
      this.sprite_index = this.target.sprite_index;
    }
    this.siner += this.flashspeed;
    let gT = cj[this.sprite_index];
    if (gT) {
      let ga = gZ.ctx;
      ga.save();
      ga.globalAlpha = Math.max(0, Math.min(1, cY(this.siner / 3)));
      ga.translate(this.x, this.y);
      ga.scale(this.image_xscale, this.image_yscale);
      ga.drawImage(gZ.tinted(gT, gZ.frame(this.sprite_index, this.image_index), this.flashcolor, true), -gT.ox, -gT.oy);
      ga.restore();
    }
    if (this.siner > 4 && cY(this.siner / 3) < 0) {
      this.instance_destroy();
    }
  }
};
x0(r3, "obj_oflash");
x2(r3, "kinds", cM("obj_oflash", cw));
x2(r3, "defaultDepth", 0);
var obj_oflash = r3;
function scr_oflash(gZ) {
  let gT = cL(gZ.x, gZ.y, obj_oflash);
  gT.image_xscale = gZ.image_xscale;
  gT.image_speed = 0;
  gT.image_index = gZ.image_index;
  gT.image_yscale = gZ.image_yscale;
  gT.sprite_index = gZ.sprite_index;
  gT.depth = gZ.depth - 1;
  gT.target = gZ;
  return gT;
}
x0(scr_oflash, "scr_oflash");
var r6 = class e0 extends cw {
  animationEnd() {
    this.instance_destroy();
  }
};
x0(r6, "obj_animation");
x2(r6, "kinds", cM("obj_animation", cw));
x2(r6, "defaultDepth", 0);
var obj_animation = r6;
function snd_loop(gZ) {
  let gT = cp(gZ);
  if (gT) {
    gT.loop = true;
  }
  return gT;
}
x0(snd_loop, "snd_loop");
function snd_stop_h(gZ) {
  if (gZ) {
    try {
      gZ.pause();
    } catch {}
  }
}
x0(snd_stop_h, "snd_stop_h");
function snd_pitch(gZ, gT) {
  if (gZ) {
    gZ.playbackRate = gT;
  }
}
x0(snd_pitch, "snd_pitch");
var rx = class e1 extends H {
  create() {
    this.siner = 0;
  }
  draw(gZ) {
    this.siner += 0.5;
    gZ.draw_sprite_ext(this.sprite_index, this.image_index, this.x + cY(this.siner / 4), this.y + cD(this.siner / 4), this.image_xscale + cY(this.siner / 8) * 0.2, this.image_yscale + cY(this.siner / 8) * 0.2, this.image_angle, this.image_blend, this.image_alpha);
  }
};
x0(rx, "obj_chainpiece");
x2(rx, "kinds", cM("obj_chainpiece", H));
x2(rx, "defaultDepth", 15);
x2(rx, "defaultSprite", "spr_chainpiece");
var obj_chainpiece = rx;
var rB = class e2 extends c0 {
  create() {
    this.active = 1;
    this.timer = 0;
    this.bdir = cU(360);
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 3;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
  }
  step() {
    this.timer += 1;
    if (this.timer >= 30) {
      this.active = 0;
      this.image_alpha -= 0.1;
      if (this.image_alpha <= 0) {
        this.instance_destroy();
        return;
      }
      this.hspeed += cH(0.2, this.bdir);
      this.vspeed += cb(0.2, this.bdir);
    }
  }
};
x0(rB, "obj_fadechain");
x2(rB, "kinds", cM("obj_fadechain", c0));
x2(rB, "defaultDepth", 0);
x2(rB, "defaultSprite", "spr_chainpiece");
var obj_fadechain = rB;
var rG = class e3 extends c0 {
  create() {
    this.sons = -1;
    this.son = [];
    this.damage = 100;
    this.active = 1;
    let gZ = heart();
    this.move_towards_point(gZ ? gZ.x + 8 : 320, gZ ? gZ.y + 8 : 170, 1);
    this.friction = -0.3;
    this.timer = 0;
    this.con = 0;
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 3;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
    this.soundcon = 0;
    cp("snd_menumove");
  }
  step() {
    this.image_angle = this.direction;
    if (this.con === 0 && (this.timer += 1, this.timer >= 2)) {
      this.sons += 1;
      let gZ = cL(this.x, this.y, obj_fadechain);
      this.son[this.sons] = gZ;
      gZ.image_angle = this.image_angle;
      gZ.direction = this.direction;
      gZ.speed = this.speed / 2.5;
      gZ.active = 1;
      gZ.damage = 10;
      s(this, gZ);
      this.timer = 0;
    }
    if (this.sons >= 30) {
      this.instance_destroy();
    }
  }
  draw(gZ) {
    this.draw_self(gZ);
    let gT = 0;
    if (this.y < -20) {
      gT = 1;
    }
    if (this.x < xY - 20) {
      gT = 1;
    }
    if (this.x > xY + 660) {
      gT = 1;
    }
    if (gT === 1) {
      gZ.draw_set_color(cW.red);
      gZ.draw_line_width(this.x, this.y, this.x + cH(1000, this.direction), this.y + cb(1000, this.direction), 1);
    }
    if (gT === 0 && this.soundcon === 0) {
      cp("snd_spearrise");
      this.soundcon = 1;
    }
  }
};
x0(rG, "obj_skychain");
x2(rG, "kinds", cM("obj_skychain", c0));
x2(rG, "defaultDepth", 0);
x2(rG, "defaultSprite", "spr_chainfront");
var obj_skychain = rG;
var rX = class e4 extends cw {
  create() {
    this.image_xscale = 0;
    this.image_yscale = 0;
    this.image_alpha = 0.3;
    this.timer = 0;
    this.maxtimer = 15;
    this.growcon = 1;
    this.fullgrow = 0;
    this.keep = 0;
    this.megakeep = 0;
    this.image_speed = 0;
    this.image_blend = cR(cW.green, cW.lime, 0.5);
  }
  step() {
    let gZ = 0;
    if (this.timer < this.maxtimer && this.growcon === 1) {
      gZ = 1;
    }
    if (this.timer > 0 && this.growcon === 3) {
      gZ = 1;
    }
    if (gZ === 1) {
      if (this.growcon === 1) {
        this.timer += 1;
      }
      if (this.growcon === 3) {
        this.timer -= 1;
      }
      this.image_xscale = this.timer / this.maxtimer * 2;
      this.image_yscale = this.timer / this.maxtimer * 2;
      this.image_angle = 180 + this.timer / this.maxtimer * 180;
      this.image_alpha = 0.5 + this.timer / this.maxtimer * 0.5;
      let gT = cL(this.x, this.y, cg);
      gT.sprite_index = this.sprite_index;
      gT.image_xscale = this.image_xscale;
      gT.image_yscale = this.image_yscale;
      gT.image_angle = this.image_angle;
      gT.depth = this.depth - 1;
      gT.image_blend = this.image_blend;
      gT.image_alpha = 1 - this.image_alpha + 0.1;
      gT.image_speed = 0;
      if (this.timer >= this.maxtimer && this.growcon === 1) {
        this.growcon = 2;
        this.keep = 1;
      }
      if (this.timer <= 0 && this.growcon === 3) {
        this.instance_destroy();
      }
    }
  }
  endStep() {
    let gZ = heart();
    if (!gZ) {
      return;
    }
    let gT = this.x - this.sprite_width / 2;
    let ga = this.x + this.sprite_width / 2;
    let gd = this.y - this.sprite_height / 2;
    let gO = this.y + this.sprite_height / 2;
    if (gZ.x < gT + 5) {
      gZ.x = gT + 5;
    }
    if (gZ.x > ga - 22) {
      gZ.x = ga - 22;
    }
    if (gZ.y < gd + 5) {
      gZ.y = gd + 5;
    }
    if (gZ.y > gO - 22) {
      gZ.y = gO - 22;
    }
  }
  draw(gZ) {
    gZ.draw_sprite_ext(this.sprite_index, 1, this.x, this.y, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha);
    this.draw_self(gZ);
  }
};
x0(rX, "obj_nonsolid_growtangle");
x2(rX, "kinds", cM("obj_nonsolid_growtangle", cw));
x2(rX, "defaultDepth", 5);
x2(rX, "defaultSprite", "spr_battlebg_wavechain");
var obj_nonsolid_growtangle = rX;
var rn = class e5 extends c2 {
  create() {
    this.image_speed = 0;
    this.image_xscale = 1.96;
    this.image_yscale = 1.96;
    this.initdir = cN(45, 135, 225, 315);
    this.direction = this.initdir;
    this.speed = 0.1;
    this.active = 1;
    let gZ = cv.first("obj_growtangle");
    if (gZ) {
      this.x = gZ.x;
      this.y = gZ.y;
      gZ.megakeep = 1;
    }
    this.timer = 0;
    this.type = 0;
    this.con = 0;
    this.xx = xY;
    this.yy = xA;
    this.lx = 140 + this.xx;
    this.rx = 480 + this.xx;
    this.ux = 0 + this.yy;
    this.dx = 320 + this.yy;
    this.fadein = 0;
    this.spikecount = 0;
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 3;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
    this.minitimer = 0;
    this.bumpnoise = 0;
    this.timerbonus = 0;
    this.wall_destroy = 0;
  }
  userEvent(gZ) {
    if (gZ === 5) {
      super.userEvent(5);
      return;
    }
    if (gZ === 2) {
      cv.with("obj_king_body", gT => {
        gT.active = 1;
      });
      cv.with("obj_growtangle", gT => {
        gT.growcon = 3;
      });
      co.turntimer = 3;
      this.instance_destroy();
    }
  }
  endStep() {
    if (this.type === 0 && (this.con === 0 && (this.ux += 30, this.dx -= 30, this.lx += 30, this.rx -= 30, this.con = 0.4), this.con === 0.4 && (this.minitimer += 1, this.minitimer >= 14 && (this.con = 0.5)), this.con === 0.5 && this.speed < 4.6 && (this.speed += 0.2), this.con === 0.5 && this.speed >= 4.6 && (this.timer += 1, this.timer >= 170 && (this.con = 1)), this.con === 1 && (this.speed -= 0.2, this.speed <= 0.1))) {
      this.userEvent(2);
      return;
    }
    if (this.type === 1 && (this.con === 0 && (this.direction += cU(20) - cU(20), this.con = 0.5), this.con === 0.5 && this.speed < 5.2 && (this.speed += 0.2), this.hspeed >= 4.2 && (this.vspeed > 0 ? (this.vspeed += 0.1, this.hspeed -= 0.1) : (this.vspeed -= 0.1, this.hspeed -= 0.1)), this.hspeed <= -4.2 && (this.vspeed > 0 ? (this.vspeed += 0.1, this.hspeed += 0.1) : (this.vspeed -= 0.1, this.hspeed += 0.1)), this.vspeed >= 4.2 && (this.hspeed > 0 ? (this.hspeed += 0.1, this.vspeed -= 0.1) : (this.hspeed -= 0.1, this.vspeed -= 0.1)), this.vspeed <= -4.2 && (this.hspeed > 0 ? (this.hspeed += 0.1, this.vspeed += 0.1) : (this.hspeed -= 0.1, this.vspeed += 0.1)), this.con === 0.5 && this.speed >= 5.2 && (this.timer += 1, this.timer >= 90 && (this.con = 1)), this.con === 1 && (this.speed -= 0.4, this.speed <= 0.1))) {
      this.userEvent(2);
      return;
    }
    if (this.type === 2 && (this.con === 0 && (this.direction += cU(20) - cU(20), this.con = 0.5, this.ux += 50, this.dx -= 50, this.lx += 50, this.rx -= 50), this.con === 0.5 && this.speed < 5.2 && (this.speed += 0.2), this.con === 0.5 && this.speed >= 5.2 && (this.timer += 1, this.timer >= 70 && (this.con = 1)), this.con === 1 && (this.speed -= 0.5, this.speed <= 0.1))) {
      this.userEvent(2);
      return;
    }
    if (this.type === 3 && (this.con === 0 && (this.direction += cU(20) - cU(20), this.con = 0.4, this.ux += 50, this.dx -= 50, this.lx += 50, this.rx -= 50), this.con === 0.4 && (this.minitimer += 1, this.minitimer >= 14 && (this.con = 0.5)), this.con === 0.5 && this.speed < 4.4 && (this.speed += 0.2), this.con === 0.5 && this.speed >= 4.4 && (this.timer += 1, this.timer >= 170 && (this.con = 1)), this.con === 1 && (this.speed -= 0.5, this.speed <= 0.1))) {
      this.userEvent(2);
      return;
    }
    if (this.type === 4 && (this.con === 0 && (this.direction += cU(10) - cU(10), this.con = 0.5, this.ux += 50, this.dx -= 50, this.lx += 50, this.rx -= 50), this.con === 0.5 && this.speed < 7 && (this.speed += 0.2), this.con === 0.5 && this.speed >= 7 && (this.timer += 1, this.timer >= 90 && (this.con = 1)), this.con === 1 && (this.speed -= 0.5, this.speed <= 0.1))) {
      this.active = 0;
      this.userEvent(2);
      return;
    }
    if (this.type === 5 && (this.con === 0 && (this.ux += 30, this.dx -= 30, this.lx += 30, this.rx -= 30, this.con = 0.4), this.con === 0.4 && (this.minitimer += 1, this.minitimer >= 14 && (this.con = 0.5)), this.con === 0.5 && this.speed < 4 && (this.speed += 0.2), this.con === 0.5 && this.speed >= 4 && (this.timer += 1, this.timer >= 170 && (this.con = 1)), this.con === 1 && (this.speed -= 0.2, this.speed <= 0.1))) {
      this.userEvent(2);
      return;
    }
    let gZ = cv.first("obj_growtangle");
    if (gZ) {
      gZ.x = this.x;
      gZ.y = this.y;
      let gT = this.x - this.sprite_width / 2;
      let ga = this.x + this.sprite_width / 2;
      let gd = this.y - this.sprite_height / 2;
      let gO = this.y + this.sprite_height / 2;
      if (gT < this.lx && this.hspeed < 0) {
        this.hspeed = -this.hspeed;
        this.bumpnoise = 1;
      }
      if (ga > this.rx && this.hspeed > 0) {
        this.hspeed = -this.hspeed;
        this.bumpnoise = 1;
      }
      if (gd < this.ux && this.vspeed < 0) {
        this.vspeed = -this.vspeed;
        this.bumpnoise = 1;
      }
      if (gO > this.dx && this.vspeed > 0) {
        this.vspeed = -this.vspeed;
        this.bumpnoise = 1;
      }
      if (this.bumpnoise === 1) {
        cp("snd_bump");
        cp("snd_screenshake");
        this.bumpnoise = 0;
        if (!cv.exists("obj_shake")) {
          cL(0, 0, cT);
        }
      }
    }
    if (this.grazed === 1) {
      if (this.timerbonus === 0) {
        this.timer += 2;
        this.timerbonus = 1;
      }
      this.grazetimer += 1;
      if (this.grazetimer >= 15) {
        this.timerbonus = 0;
        this.grazetimer = 0;
        this.grazed = 0;
      }
    }
  }
  draw(gZ) {
    this.draw_self(gZ);
    if (this.fadein < 10) {
      this.fadein += 1;
    }
    gZ.draw_set_alpha(this.fadein / 10);
    gZ.draw_set_color(cW.white);
    gZ.draw_rectangle(this.lx, this.ux, this.rx, this.dx, true);
    gZ.draw_rectangle(this.lx + 1, this.ux + 1, this.rx - 1, this.dx - 1, true);
    gZ.draw_set_alpha(1);
    let gT = this.sprite_width;
    let ga = this.sprite_height;
    let gd = Math.floor(gT / 11);
    let gO = this.x;
    let gq = this.y;
    let go = this.fadein / 10;
    for (let gQ = 0; gQ < gd; gQ += 1) {
      gZ.draw_sprite_ext("spr_bouncebox_spike", 0, gO - gT / 2 + 3, gq - ga / 2 + gQ * 11, 1, 1, 0, cW.white, go);
      gZ.draw_sprite_ext("spr_bouncebox_spike", 0, gO + gT / 2 - gQ * 11, gq - ga / 2 + 3, 1, 1, 270, cW.white, go);
      gZ.draw_sprite_ext("spr_bouncebox_spike", 0, gO - gT / 2 + gQ * 11, gq + ga / 2 - 2, 1, 1, 90, cW.white, go);
      gZ.draw_sprite_ext("spr_bouncebox_spike", 0, gO + gT / 2 - 2, gq - ga / 2 + gQ * 11, -1, 1, 0, cW.white, go);
    }
  }
};
x0(rn, "obj_growtangle_bouncer");
x2(rn, "kinds", cM("obj_growtangle_bouncer", c2));
x2(rn, "defaultDepth", 4);
x2(rn, "defaultSprite", "spr_battlebg_2");
var obj_growtangle_bouncer = rn;
var rT = class e6 extends H {
  create() {
    this.kingcon = 0;
    this.contimer = 0;
    this.image_speed = 0.334;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.t = 0;
    this.tmax = 180;
    this.subtype = 0;
    this.type = 1;
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 3;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
    this.soundplayed = 0;
    this.chain = null;
  }
  step() {
    if (this.t === 0 && this.kingcon === 0) {
      this.sprite_index = "spr_chainking_toss";
      this.image_index = 0;
      this.image_speed = 0.5;
      this.kingcon = 1;
      this.soundplayed = 0;
      if (this.type === 2 && this.subtype === 1) {
        cp("snd_dadlaugh");
      } else {
        cp("snd_dadblast");
      }
    }
    if (this.kingcon === 1 && this.image_index >= 3) {
      if (this.image_index >= 2 && this.soundplayed === 0) {
        cp("snd_criticalswing");
        this.soundplayed = 1;
      }
      this.sprite_index = "spr_chainking_toss_idle";
      this.image_index = 0;
      this.image_speed = 0.334;
      this.kingcon = 2;
      if (this.type === 1) {
        this.chain = cL(this.x - 24, this.y + 104, obj_wavechain);
      }
      if (this.type === 2) {
        this.chain = cL(this.x - 24, this.y + 104, obj_finalchain);
      }
      if (this.chain) {
        s(this, this.chain);
        this.chain.type = this.subtype;
      }
    }
    this.t += 1;
  }
  destroy() {
    cv.with("obj_king_boss", gZ => {
      gZ.visible = true;
      gZ.active = 1;
    });
    cv.with("obj_growtangle", gZ => {
      gZ.growcon = 3;
    });
    cv.with("obj_nonsolid_growtangle", gZ => {
      gZ.growcon = 3;
    });
  }
};
x0(rT, "obj_chainking");
x2(rT, "kinds", cM("obj_chainking", H));
x2(rT, "defaultDepth", 6);
x2(rT, "defaultSprite", "spr_chainking_spin");
var obj_chainking = rT;
var rO = class e7 extends H {
  create() {
    this.direction = 180;
    this.speed = 10;
    this.image_angle = 180;
    this.chaincon = 0;
    this.sons = -1;
    this.son = [];
    this.timer = 0;
    this.t = 0;
    this.tmax = 220;
    let gZ = cv.first("obj_chainking");
    let gT = cv.first("obj_nonsolid_growtangle");
    this.initkingx = gZ ? gZ.x : this.x;
    this.initkingy = gZ ? gZ.y : this.y;
    this.initboxx = gT ? gT.x : 200;
    this.initboxy = gT ? gT.y : 175;
    this.kingx = new Array(41).fill(0);
    this.kingy = new Array(41).fill(0);
    this.siner = 0;
    this.btimer = 20;
    this.bgap = 0;
    this.type = 0;
    this.wavefactor = 1;
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 6;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
    this.chain_noise = 0;
    this.chainsnd = null;
    this.wavenoise = null;
  }
  step() {
    let gZ = cv.first("obj_nonsolid_growtangle");
    let gT = cv.first("obj_chainking");
    let ga = heart();
    if (this.chaincon === 0) {
      if (this.chain_noise === 0) {
        this.chain_noise = 1;
        this.chainsnd = snd_loop("snd_chain_extend");
      }
      this.sons += 1;
      this.son[this.sons] = cL(this.x, this.y, obj_chainpiece);
      if (gZ && this.x <= gZ.x) {
        snd_stop_h(this.chainsnd);
        cp("snd_locker");
        cp("snd_screenshake");
        this.speed = 0;
        this.chaincon = 1;
        this.shakeamt = 12;
        this.remx = ga ? ga.x : 0;
        this.remy = ga ? ga.y : 0;
        this.remx_box = gZ.x;
        this.remy_box = gZ.y;
        this.chaincon = 2.1;
        cv.with("obj_growtangle", gd => {
          gd.megakeep = 1;
        });
      }
    }
    if (this.chaincon === 2.1) {
      if (ga) {
        ga.x = this.remx;
        ga.y = this.remy;
      }
      if (gZ) {
        gZ.x = this.remx_box;
        gZ.y = this.remy_box;
      }
      let gd = cU(360);
      let gO = cH(this.shakeamt, gd);
      let gq = cb(this.shakeamt, gd);
      if (ga) {
        ga.x += gO;
        ga.y += gq;
      }
      if (gZ) {
        gZ.x += gO;
        gZ.y += gq;
      }
      this.shakeamt -= 2;
      if (this.shakeamt < 0) {
        this.chaincon = 3;
      }
    }
    if (this.chaincon === 3) {
      if (this.chain_noise === 1) {
        this.chain_noise = 2;
        this.wavenoise = snd_loop("snd_chain_wave");
      }
      let go = (gQ, gh, gu) => {
        this.siner += 1;
        if (gT) {
          gT.y = this.initkingy + cY(this.siner / gQ) * 80 * gu;
        }
        this.btimer += 1;
        if (this.btimer >= gh) {
          let gp = cL(xY - 20, this.initboxy, c1);
          gp.sprite_index = "spr_spadebullet";
          gp.hspeed = 4;
          s(this, gp);
          this.btimer = 0;
        }
      };
      if (this.type === 0) {
        go(12, 20, 1);
        if (this.chain_noise === 2) {
          snd_pitch(this.wavenoise, 0.8 - cY(this.siner / 12) / 2);
        }
      }
      if (this.type === 1) {
        go(10, 18, 1);
        if (this.chain_noise === 2) {
          snd_pitch(this.wavenoise, 0.9 - cY(this.siner / 10) / 2);
        }
      }
      if (this.type === 2) {
        go(9, 16, 1);
        if (this.chain_noise === 2) {
          snd_pitch(this.wavenoise, 1 - cY(this.siner / 9) / 2);
        }
      }
      if (this.type === 3) {
        go(7, 14, this.wavefactor);
        if (this.chain_noise === 2) {
          snd_pitch(this.wavenoise, 1 - cY(this.siner / 7) / 2);
        }
      }
    }
    if (gT) {
      this.kingx[0] = gT.x - this.initkingx;
      this.kingy[0] = gT.y - this.initkingy;
      for (let gQ = 40; gQ > 0; gQ -= 1) {
        this.kingx[gQ] = this.kingx[gQ - 1];
        this.kingy[gQ] = this.kingy[gQ - 1];
      }
      for (let gh = 0; gh <= this.sons; gh += 1) {
        let gu = this.son[gh];
        if (gu && !gu.destroyed) {
          gu.x = (this.kingx[gh] || 0) + gu.xstart;
          gu.y = (this.kingy[gh] || 0) + gu.ystart;
        }
      }
      if (this.chaincon >= 3) {
        let gp = this.son[this.sons];
        if (gp) {
          this.x = gp.x;
          this.y = gp.y;
        }
        if (gZ) {
          gZ.x = (this.kingx[this.sons] || 0) + this.initboxx;
          gZ.y = (this.kingy[this.sons] || 0) + this.initboxy;
        }
      }
    }
    this.t += 1;
    if (this.t >= this.tmax - 10) {
      this.wavefactor *= 0.8;
      cv.with("obj_chainpiece", gf => {
        gf.image_alpha -= 0.1;
      });
      cv.with("obj_regularbullet", gf => {
        gf.active = 0;
        gf.image_alpha -= 0.1;
      });
    }
    if (this.t >= this.tmax) {
      if (this.chain_noise === 2) {
        this.chain_noise = 3;
        snd_stop_h(this.wavenoise);
      }
      co.turntimer = 3;
      cv.with("obj_regularbullet", gf => gf.instance_destroy());
      cv.with("obj_chainking", gf => {
        gf.sprite_index = "spr_chainking_receive";
      });
      cv.with("obj_chainking", gf => gf.instance_destroy());
      this.instance_destroy();
    }
  }
  destroy() {
    snd_stop_h(this.chainsnd);
    snd_stop_h(this.wavenoise);
  }
};
x0(rO, "obj_wavechain");
x2(rO, "kinds", cM("obj_wavechain", H));
x2(rO, "defaultDepth", 10);
x2(rO, "defaultSprite", "spr_chainfront");
var obj_wavechain = rO;
var ro = class e8 extends H {
  create() {
    this.direction = 180;
    this.speed = 10;
    this.image_angle = 180;
    this.chaincon = 0;
    this.sons = -1;
    this.son = [];
    this.timer = 0;
    this.gotimer = 0;
    let gZ = cv.first("obj_chainking");
    let gT = cv.first("obj_nonsolid_growtangle");
    this.initkingx = gZ ? gZ.x : this.x;
    this.initkingy = gZ ? gZ.y : this.y;
    this.initboxx = gT ? gT.x : 205;
    this.initboxy = gT ? gT.y : 170;
    this.kingx = new Array(41).fill(0);
    this.kingy = new Array(41).fill(0);
    this.siner = 0;
    this.btimer = 20;
    this.bgap = 0;
    this.type = 1;
    this.movecon = 0;
    this.movetime = 25;
    this.mytimer = 0;
    this.maxtimer = 200;
    if (this.type === 1) {
      this.maxtimer = 300;
    }
    this.image_blend = cW.red;
    this.bulletpoint = 0;
    this.spikemake = 0;
    this.ended = 0;
    this.endtimer = 0;
    this.xx = xY;
    this.yy = xA;
    this.inv = 60;
    this.timepoints = 0;
    this.grazepoints = 3;
    this.target = 0;
    this.damage = 50;
    this.grazed = 0;
    this.grazetimer = 0;
    this.chain_noise = 0;
    this.timerbonus = 0;
    this.chainsound = null;
    this.chainnoise = null;
    this.spike = null;
    this.box = null;
    this.movetimer = 0;
    this.pointx = 0;
    this.pointy = 0;
    this.mark = null;
  }
  step() {
    let gZ = cv.first("obj_nonsolid_growtangle");
    let gT = heart();
    if (this.chaincon === 0) {
      if (this.chain_noise === 0) {
        this.chainsound = snd_loop("snd_chain_extend");
        this.chain_noise = 1;
      }
      if (this.sons < 40) {
        this.sons += 1;
        let ga = cL(this.x, this.y, obj_chainpiece);
        ga.image_blend = cW.red;
        this.son[this.sons] = ga;
      }
      if (gZ && this.x <= gZ.x) {
        if (this.chain_noise === 1) {
          this.chain_noise = 2;
          snd_stop_h(this.chainsound);
          cp("snd_locker");
          cp("snd_screenshake");
        }
        this.box = gZ;
        this.x = gZ.x;
        this.y = gZ.y;
        this.speed = 0;
        this.chaincon = 1;
        this.shakeamt = 16;
        this.remx = gT ? gT.x : 0;
        this.remy = gT ? gT.y : 0;
        this.remx_box = gZ.x;
        this.remy_box = gZ.y;
        this.chaincon = 2.1;
        cv.with("obj_growtangle", gd => {
          gd.megakeep = 1;
        });
      }
    }
    if (this.chaincon === 2.1) {
      if (gZ) {
        gZ.x = this.remx_box;
        gZ.y = this.remy_box;
      }
      let gd = cU(360);
      let gO = cH(this.shakeamt, gd);
      let gq = cb(this.shakeamt, gd);
      if (gZ) {
        gZ.x += gO;
        gZ.y += gq;
      }
      this.shakeamt -= 2;
      if (this.shakeamt <= 0) {
        this.chaincon = 2.2;
        if (gZ) {
          gZ.x = this.remx_box;
          gZ.y = this.remy_box;
        }
      }
    }
    if (this.chaincon === 2.2) {
      this.xx = xY + 320;
      this.yy = xA + 160;
      let go = xA;
      this.chaincon = 2.3;
      if (this.type >= 1) {
        let gQ = cL(this.x, this.y, c2);
        this.spike = gQ;
        s(this, gQ);
        gQ.image_speed = 0;
        gQ.active = 0;
        cv.with("obj_regularbullet", gh => {
          gh.basealpha = 0;
        });
        gQ.image_alpha = 0;
        gQ.mask_index = this.box ? this.box.sprite_index : "spr_battlebg_1";
        gQ.sprite_index = "spr_battlebg_spikes";
        this.spikemake = 1;
        gQ.image_xscale = (this.box ? this.box.image_xscale : 2) * 0.96;
        gQ.image_yscale = (this.box ? this.box.image_yscale : 2) * 0.96;
      }
      if (this.type <= 1) {
        for (let gh = 0; gh < 5; gh += 1) {
          for (let gu = 0; gu < 5; gu += 1) {
            let gp = cL(this.xx - 150 + gh * 70, go + 20 + gu * 70, c2);
            gp.sprite_index = "spr_spadebullet";
            gp.basealpha = 0;
            gp.active = 0;
            gp.image_angle = 90;
            gp.image_xscale = 0.5;
            gp.image_yscale = 0.5;
            gp.neveractive = 1;
            s(this, gp);
          }
        }
        this.bulletpoint = 1;
      }
    }
    if (this.chaincon === 2.3) {
      cv.with("obj_regularbullet", gf => {
        gf.basealpha = (gf.basealpha || 0) + 0.04;
      });
      if (this.spikemake === 1 && this.box && this.spike) {
        this.box.image_xscale += 0.005;
        this.box.image_yscale += 0.005;
        this.spike.image_xscale += 0.005;
        this.spike.image_yscale += 0.005;
        if (this.type === 1) {
          this.box.image_xscale += 0.01;
          this.box.image_yscale += 0.01;
          this.spike.image_xscale += 0.01;
          this.spike.image_yscale += 0.01;
        }
      }
      this.gotimer += 1;
      if (this.gotimer >= 30) {
        this.chaincon = 3;
        this.gotimer = 0;
        this.xx = xY + 320;
        this.yy = xA + 160;
        this.pointx = this.xx;
        this.pointy = this.yy;
        cv.with("obj_regularbullet", gf => {
          gf.active = 1;
        });
      }
    }
    if (this.chaincon === 3) {
      if (this.movecon === 0 && this.ended === 0 && this.mytimer > this.maxtimer - 10) {
        this.ended = 1;
      }
      if (this.movecon === 0 && this.ended === 0) {
        this.speed = 0;
        let gf = 0;
        let gj = 100;
        let gk = 130;
        if (this.type === 0) {
          gk = 110;
          this.movetime = 30;
        }
        if (this.type >= 1) {
          gk = 140;
        }
        if (this.type === 3 || this.type === 4) {
          gk = 120;
        }
        if (this.type === 5) {
          gk = 130;
          this.movetime = 30;
        }
        let gy = 0;
        while ((gf < gj || gf > gk) && gy++ < 10000) {
          this.pointx = this.xx + cU(140) - cU(140);
          this.pointy = this.yy + cU(120) - cU(120);
          gf = cl(this.x, this.y, this.pointx, this.pointy);
        }
        this.target = cL(this.pointx, this.pointy, obj_chainpiece);
        this.target.sprite_index = "spr_heartoutline";
        this.target.depth = 30;
        this.move_towards_point(this.pointx, this.pointy, gf / this.movetime);
        this.movetimer = 0;
        this.movecon = 1;
        this.chainnoise = snd_loop("snd_chain_extend");
      }
      if (this.movecon === 1 && this.ended === 0) {
        this.movetimer += 1;
        if (this.movetimer > this.movetime) {
          this.x = this.pointx;
          this.y = this.pointy;
          this.movecon = 2;
          this.speed = 0;
          this.movetimer = 0;
        }
      }
      if (this.movecon === 2 && this.ended === 0) {
        let gW = 20;
        if (this.type === 1) {
          gW = 22;
        }
        if (this.type === 2) {
          gW = 16;
        }
        if (this.type === 3) {
          gW = 7;
        }
        if (this.type === 4) {
          gW = 3;
        }
        if (this.type === 5) {
          gW = 22;
        }
        this.movetimer += 1;
        if (this.movetimer >= gW) {
          if (this.target && this.target.instance_destroy) {
            this.target.instance_destroy();
          }
          this.movecon = 0;
          snd_stop_h(this.chainnoise);
        }
      }
    }
    if (this.chaincon >= 0) {
      this.kingx[0] = this.x;
      this.kingy[0] = this.y;
      for (let gP = 40; gP > 0; gP -= 1) {
        this.kingx[gP] = this.kingx[gP - 1];
        this.kingy[gP] = this.kingy[gP - 1];
      }
      for (let gv = 0; gv <= this.sons; gv += 1) {
        let gR = this.son[gv];
        if (gR && !gR.destroyed) {
          gR.x = this.kingx[gv];
          gR.y = this.kingy[gv];
          gR.image_angle = this.direction;
        }
      }
      if (this.chaincon >= 3 && gZ) {
        gZ.x = this.kingx[this.sons];
        gZ.y = this.kingy[this.sons];
      }
    }
    if (this.bulletpoint === 1) {
      let gK = gT ? gT.x + 8 : 320;
      let gU = gT ? gT.y + 8 : 170;
      cv.with("obj_regularbullet", gN => {
        if (gN.sprite_index === "spr_spadebullet") {
          gN.image_angle = cz(gN.x, gN.y, gK, gU);
          let gH = cl(gN.x, gN.y, gK, gU);
          if (gH > 80) {
            gN.neveractive -= 0.02;
          }
          if (gN.neveractive > 0) {
            gN.active = 0;
          } else {
            gN.active = 1;
          }
          let gb = 0.7;
          let gz = 1 - gN.neveractive;
          if (gz > 1) {
            gz = 1;
          }
          if (gH > 80) {
            gb = 1.7 - gH * 1 / 80;
            if (gb < 0) {
              gb = 0;
            }
          }
          gN.image_alpha = (0.3 + gb) * gN.basealpha * gz;
          if (gN.image_xscale < 0.68 && this.ended === 0) {
            gN.image_xscale += 0.0005;
            gN.image_yscale += 0.0005;
          } else {
            gN.active = 0;
            gN.basealpha -= 0.1;
            this.ended = 1;
          }
        }
      });
    }
    if (this.spikemake === 1 && this.spike && !this.spike.destroyed) {
      this.spike.image_alpha += 0.04;
      if (this.box) {
        this.spike.x = this.box.x;
        this.spike.y = this.box.y;
      }
      if (this.ended === 1) {
        if (this.spike.image_alpha >= 1) {
          this.spike.image_alpha = 1;
        }
        this.spike.image_alpha -= 0.14;
      }
    }
    if (this.ended === 1 && (this.endtimer += 1, this.endtimer >= 10)) {
      cf("snd_chain_extend");
      cv.with("obj_chainpiece", gN => gN.instance_destroy());
      cv.with("obj_regularbullet", gN => gN.instance_destroy());
      cv.with("obj_chainking", gN => gN.instance_destroy());
      co.turntimer = 3;
      this.instance_destroy();
      return;
    }
    if (this.spikemake === 1 && this.spike && !this.spike.destroyed && this.spike.grazed === 1) {
      if (this.timerbonus === 0) {
        this.mytimer += 2;
        this.timerbonus = 1;
      }
      this.grazetimer += 1;
      if (this.grazetimer >= 15) {
        this.timerbonus = 0;
        this.grazetimer = 0;
        this.spike.grazed = 0;
      }
    }
    this.mytimer += 1;
    this.image_angle = this.direction;
  }
  draw(gZ) {
    this.draw_self(gZ);
  }
  destroy() {
    snd_stop_h(this.chainsound);
    snd_stop_h(this.chainnoise);
  }
};
x0(ro, "obj_finalchain");
x2(ro, "kinds", cM("obj_finalchain", H));
x2(ro, "defaultDepth", 10);
x2(ro, "defaultSprite", "spr_chainfront");
var obj_finalchain = ro;
function sideSpades(gZ, gT) {
  cv.with("obj_regularbullet", ga => {
    ga.image_alpha += 0.2;
  });
  if (gZ.btimer >= gT) {
    let ga = gZ.side === 0 ? 80 : 560;
    let gd = cv.first("obj_growtangle");
    let gO = gd ? gd.y : 170;
    let gq = gd ? gd.sprite_height : 0;
    let go = cL(xY + ga, gO - gq / 2 + cU(gq), c1);
    if (gZ.side === 0) {
      go.direction = 0;
    }
    if (gZ.side === 1) {
      go.direction = 180;
    }
    go.image_alpha = 0;
    go.damage = gZ.damage;
    go.target = gZ.target;
    go.sprite_index = "spr_spadebullet";
    go.speed = 5;
    go.friction = -0.1;
    go.image_angle = go.direction;
    gZ.side = gZ.side === 1 ? 0 : 1;
    gZ.btimer = 0;
  }
}
x0(sideSpades, "sideSpades");
function skyChains(gZ, gT, ga) {
  if (gZ.btimer >= gT) {
    let gd = cN(0, 1, 2, 3);
    let gO = 0;
    let gq = 0;
    if (gd === 0 || gd === 3) {
      gO = xY + 320 + cU(300) - cU(300);
      gq = -60;
    }
    if (gd === 1) {
      gO = xY - 60;
      gq = cU(320);
    }
    if (gd === 2) {
      gO = xY + 700;
      gq = cU(320);
    }
    let go = cL(gO, gq, obj_skychain);
    if (ga) {
      cv.with("obj_skychain", gQ => s(gZ, gQ));
    } else {
      s(gZ, go);
    }
    gZ.btimer = 0;
  }
}
x0(skyChains, "skyChains");
i({
  21: gZ => sideSpades(gZ, 9),
  23: gZ => sideSpades(gZ, 7),
  34: gZ => skyChains(gZ, 28, true),
  35: gZ => skyChains(gZ, 22, false)
});
var rp = class e9 extends c8 {
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
      idlesprite: "spr_chainking_idle",
      hurtsprite: "spr_chainking_hurt",
      sparedsprite: "spr_chainking_idle",
      kturn: 0,
      xx: xY,
      yy: xA,
      tempattack: 1,
      hurtbuffer: 0,
      susinit: 0,
      remxx: xY,
      remyy: xA,
      chain_dragging: 0,
      wall_bouncing: 0,
      talk_all_message: 0,
      attack: 0,
      rtimer: 0,
      shakex: 0,
      active: 1,
      blcontype: 3
    });
    this.reminvc = co.invc;
  }
  userEvent(gZ) {
    if (gZ === 12) {
      co.monsterx[this.myself] = this.x + this.sprite_width / 2 - 10;
      co.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (gZ === 5) {
      this.startAttack();
      return;
    }
    if (gZ === 10) {
      this.defeatEvent();
      return;
    }
  }
  alarmEvent(gZ) {
    if (gZ === 4) {
      this.con += 1;
    }
  }
  defeatEvent() {
    let gZ = cv.first("obj_battlecontroller");
    if (gZ) {
      gZ.skipvictory = 1;
    }
    co.invc = 1;
    this.instance_destroy();
  }
  startAttack() {
    if (this.attacked !== 0) {
      return;
    }
    let gZ = this.myself;
    let gT = this.xx;
    let ga = this.yy;
    let gd = co.monsterat[gZ];
    let gO = this.tempattack;
    co.invc = this.reminvc;
    let gq = this.attack;
    let go = (gj, gk) => cL(gT + gj, ga + gk, cX);
    let gQ = gj => {
      let gk = cL(0, 0, v);
      Object.assign(gk, gj);
      return gk;
    };
    let gh = gj => {
      let gk = cL(gj.x - 10, gj.y - 10, obj_heartmarker);
      scr_moveheart_k();
      gk.instance_destroy();
    };
    let gu = (gj, gk, gy) => {
      this.visible = false;
      let gW = cL(this.x, this.y, obj_chainking);
      gW.type = 1;
      gW.subtype = gj;
      gW.grazepoints = 6;
      let gP = cL(gT + 200, ga + 175, obj_nonsolid_growtangle);
      gP.sprite_index = "spr_battlebg_wavechain";
      gh(gP);
      gW.damage = gd * gk * gO;
      gW.target = gy;
      co.turntimer = 999;
    };
    let gp = (gj, gk, gy) => {
      co.invc *= 1.5;
      this.visible = false;
      this.timeruse = 0;
      let gW = cL(this.x, this.y, obj_chainking);
      gW.type = 2;
      gW.subtype = gj;
      let gP = cL(gT + 205, ga + 170, obj_nonsolid_growtangle);
      gP.sprite_index = "spr_battlebg_1";
      gW.damage = gd * gk * gO;
      gW.target = gy;
      co.turntimer = 999;
      gh(gP);
      return gW;
    };
    let gf = gj => {
      co.invc *= 1.5;
      let gk = go(310, 165);
      gk.sprite_index = "spr_battlebg_2";
      gk.keep = 1;
      gh(gk);
      let gy = cL(gk.x, gk.y, obj_growtangle_bouncer);
      gy.type = gj;
      gy.damage = gd * 5 * gO;
      gy.target = this.mytarget;
      co.turntimer = 999;
    };
    if (gq === 1) {
      go(320, 170);
      scr_moveheart_k();
      gQ({
        type: 21,
        damage: gd * 5 * gO,
        target: this.mytarget,
        side: 1,
        btimer: -8
      });
      co.turntimer = 190;
    }
    if (gq === 2) {
      gu(0, 4, 3);
    }
    if (gq === 3) {
      go(320, 170);
      scr_moveheart_k();
      gQ({
        type: 34,
        damage: gd * 5 * gO,
        target: this.mytarget,
        btimer: 10
      });
      co.turntimer = 210;
    }
    if (gq === 4) {
      gf(5);
    }
    if (gq === 5) {
      gu(1, 4, 3);
    }
    if (gq === 6) {
      co.invc *= 1.5;
      this.visible = false;
      this.timeruse = 0;
      let gj = cL(this.x, this.y, obj_chainking);
      gj.type = 2;
      gj.subtype = 5;
      if (this.chain_dragging >= 1) {
        gj.subtype = 2;
      }
      this.chain_dragging += 1;
      let gk = cL(gT + 205, ga + 170, obj_nonsolid_growtangle);
      gk.sprite_index = "spr_battlebg_1";
      gj.damage = gd * 5 * gO;
      gj.target = this.mytarget;
      co.turntimer = 999;
      gh(gk);
    }
    if (gq === 7) {
      go(320, 170);
      scr_moveheart_k();
      gQ({
        type: 35,
        damage: gd * 5 * gO,
        target: this.mytarget,
        btimer: 10
      });
      co.turntimer = 220;
    }
    if (gq === 8) {
      gf(3);
    }
    if (gq === 9) {
      go(320, 170);
      scr_moveheart_k();
      gQ({
        type: 23,
        damage: gd * 5 * gO,
        target: this.mytarget,
        btimer: -8,
        side: 1
      });
      co.turntimer = 200;
    }
    if (gq === 10) {
      gu(2, 4, 3);
    }
    if (gq === 11) {
      gp(1, 3, 3);
    }
    this.tempattack = 1;
    this.attacked = 1;
  }
  talk() {
    let gZ = this.myself;
    if (!cv.exists("obj_darkener")) {
      cL(0, 0, cZ);
    }
    co.typer = 50;
    co.msg = new Array(100).fill(" ");
    co.msg[0] = "Fall before&the chain&of justice!/%";
    let gT = 3;
    let ga = this.kturn;
    if (ga === 0) {
      co.msg[0] = "How dare you&come here,&Lightners...?/%";
    }
    if (ga === 1) {
      co.msg[0] = "You, that&left us in&the shadows,&stripped of&meaning.../%";
      gT = 8;
    }
    if (ga === 2) {
      co.msg[0] = "You DARE&return&to torment us&once again?/%";
    }
    if (ga === 3) {
      co.msg[0] = "Begone!&We have found&fresh&purpose./%";
    }
    if (ga === 4) {
      co.msg[0] = "For the&KNIGHT&has appeared./%";
    }
    if (ga === 5) {
      co.msg[0] = "The KNIGHT&that pulls&the Fountains&from the&Earth./%";
      gT = 8;
    }
    if (ga === 6) {
      gT = 8;
      co.msg[0] = "Holy&Fountains,&whose shadows&are creating&a new&world.../";
      co.msg[1] = "OUR world./%";
    }
    if (ga === 7) {
      co.msg[0] = "Hahaha...&Do you see&now our NEW&purpose...?/%";
    }
    if (ga === 8) {
      co.msg[0] = "Soon, this&world&shall be&blanketed&in darkness.../";
      co.msg[1] = "And DARKNERS&shall RULE&it!/%";
      gT = 8;
    }
    if (ga === 9) {
      co.msg[0] = "Then, you may&see what it is&like to live&in DESPAIR!/%";
    }
    if (ga === 10) {
      co.msg[0] = "Now, enough&talk!/";
      co.msg[1] = "Fall before&the chain of&justice!/%";
    }
    if (ga === 11) {
      co.msg[0] = "... ha,&you're&quite strong,&aren't you!?/%";
    }
    if (ga === 12) {
      co.msg[0] = "If I keep&fighting you&like this,&then.../%";
    }
    if (ga === 13) {
      co.msg[0] = "It seems...&that.../%";
    }
    if (ga >= 14) {
      co.msg[0] = "My KNIGHT...&I shall not&fail you.../%";
      this.battlecancel = 2;
    }
    this.kturn += 1;
    if (this.kturn <= 11) {
      this.attack = this.kturn;
    } else {
      if (this.kturn === 12) {
        this.attack = 7;
      }
      if (this.kturn === 13) {
        this.attack = 8;
      }
      if (this.kturn === 14) {
        this.attack = 10;
      }
      if (this.kturn === 15) {
        this.attack = 9;
      }
      if (this.kturn === 16) {
        this.attack = 7;
      }
      if (this.kturn === 17) {
        this.attack = 11;
      }
      if (this.kturn >= 18) {
        this.attack = 11;
      }
      if (co.monsterdf[gZ] > -25) {
        co.monsterdf[gZ] -= 5;
      }
    }
    this.target_randomly = 1;
    if (this.attack === 2 || this.attack === 5 || this.attack === 10 || this.attack === 11) {
      cO(this);
    } else {
      cd(this);
    }
    this.blcontype = gT;
    cr(this.x - 160, this.y, gT);
    this.talked = 1;
    this.talktimer = 0;
  }
  step() {
    let gZ = this.myself;
    if (this.susinit === 0) {
      cv.with("obj_herosusie", gT => {
        gT.idlesprite = "spr_susieb_idle_serious";
        gT.attacksprite = "spr_susieb_attack_serious";
      });
      this.susinit = 1;
    }
    if (co.monster[gZ] === 1) {
      co.flag[51 + gZ] = 4;
      if (co.mnfight === 1 && this.talked === 0) {
        this.talk();
      }
      if (this.talked === 1 && co.mnfight === 1) {
        this.rtimer = 0;
        if (!cv.exists("obj_writer")) {
          co.mnfight = 2;
        }
      }
      if (co.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          this.talktimer = 0;
          co.turntimer = 180;
          this.userEvent(5);
          this.turns += 1;
          this.attacked = 1;
          co.typer = 6;
          co.fc = 0;
          let gT = cN(0, 1, 2, 3);
          if (gT === 0) {
            co.battlemsg[0] = "* Darkness pours from the fountain.";
          }
          if (gT === 1) {
            co.battlemsg[0] = "* KING's mouths gave a berserk smile.";
          }
          if (gT === 2) {
            co.battlemsg[0] = "* The battlefield is rumbling.";
          }
          if (gT === 3) {
            co.battlemsg[0] = "* KING's mouths babble indecipherably.";
          }
          if (co.monsterhp[gZ] <= co.monstermaxhp[gZ] / 4) {
            co.battlemsg[0] = "* KING's cape flutters weakly.";
          }
        } else {
          co.turntimer = 120;
        }
      }
      if (co.mnfight === 2 && co.turntimer <= 1) {
        if (this.battlecancel === 1) {
          co.mercymod[gZ] = 999;
        }
        if (this.battlecancel === 2) {
          cv.with("obj_battlecontroller", ga => {
            ga.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (this.con === 1) {
      this.con = 4;
    }
    if (this.con === 4 && !cv.exists("obj_writer")) {
      this.con = 5;
      this.alarm[4] = 15;
      cv.with("obj_battlecontroller", ga => {
        ga.alarm[2] = 17;
      });
    }
    if (this.con === 6) {
      cv.with("obj_battlecontroller", ga => {
        ga.noreturn = 0;
      });
      co.flag[247] = 1;
      this.scr_monsterdefeat();
      this.userEvent(10);
      this.instance_destroy();
      this.con = 7;
      return;
    }
    if (co.myfight === 3) {
      this.actStep();
    }
    if (co.myfight === 7) {
      this.hspeed = 15;
    }
  }
  actStep() {
    let gZ = this.myself;
    this.xx = xY;
    this.yy = xA;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* KING - Abandoned by the Lightners^1, his heart became cracked with hatred./";
      co.msg[1] = "* He cannot be reasoned with^1, but don't give up...!/%";
      cx();
    }
    if (this.acting === 2 && this.actcon === 0) {
      co.msg = new Array(100).fill(" ");
      if (co.tempflag[5] === 0) {
        co.msg[0] = "* You tried to reason with the King.../";
        scr_kingface(1, 5);
        co.msg[2] = "* Silence^1, Lightbringer!/";
        co.msg[3] = "* Your very existence goes against our own.../";
        co.msg[4] = "\\E0* By the Knight's will^1, I shall shatter your heart to pieces!/";
        scr_noface(5);
        co.msg[6] = "* Your will is changing..^1.&* \\cYTALK\\cW became \\cYCOURAGE\\cW!/%";
        co.tempflag[5] = 1;
        co.canact[gZ][1] = 1;
        co.actactor[gZ][1] = 1;
        co.actname[gZ][1] = "Courage";
        co.actdesc[gZ][1] = "Defense#Boost";
        co.actcost[gZ][1] = 62;
      } else {
        cp("snd_power");
        cv.with("obj_heroparent", ga => {
          let gd = scr_oflash(ga);
          gd.flashcolor = cW.orange;
        });
        co.msg[0] = "* You encouraged the party^1!&* The party's DEFENSE raised for this turn!/%";
        this.tempattack = 0.8;
      }
      cx();
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      co.msg = new Array(100).fill(" ");
      if (co.tempflag[6] === 0) {
        co.msg[0] = "* Susie tried to reason with the King.../";
        scr_susface(1, 1);
        co.msg[2] = "* Arright^1, listen up./";
        co.msg[3] = "\\E2* Lancer's my friend./";
        co.msg[4] = "\\EC* So if we can get by without hurting you^1, then.../";
        scr_kingface(5, 0);
        co.msg[6] = "* If I perish^1, so be it!/";
        co.msg[7] = "\\E4* Show my son the monster you REALLY are!/";
        scr_susface(8, "C");
        co.msg[9] = "* .../";
        co.msg[10] = "\\E3* Arright^1, you wanna see what I can do^1, huh?/";
        scr_noface(11);
        co.msg[12] = "* Susie's will is changing..^1.&* \\cYTALK\\cW became \\cYRED BUSTER\\cW!/%";
        co.tempflag[6] = 1;
        co.canact[gZ][2] = 1;
        co.actactor[gZ][2] = 2;
        co.actname[gZ][2] = "RedBuster";
        co.actdesc[gZ][2] = "Red#Damage";
        co.actcost[gZ][2] = 150;
        this.actcon = 1;
      } else {
        co.msg[0] = "* Your SOUL shined its power on Susie!/%";
        this.actcon = 10;
      }
      cx();
      this.acttimer = 0;
    }
    if (this.acting === 4 && this.actcon === 0) {
      co.msg = new Array(100).fill(" ");
      if (co.tempflag[7] === 0) {
        co.msg[0] = "* Ralsei tried to reason with the King.../";
        scr_ralface(1, "B");
        co.msg[2] = "* You might not realize it^1, but.../";
        co.msg[3] = "\\E6* This is a world where you don't have to fight./";
        co.msg[4] = "\\E8* I know if we try^1, we can all find another way.../";
        scr_kingface(5, 6);
        co.msg[6] = "\\E6* Such simple-minded platitudes.../";
        co.msg[7] = "\\E0* A shame you will not live to realize your naivety./";
        co.msg[8] = "\\E4* Now^1, perish with the pathetic LIGHTNERs you worship!/";
        scr_ralface(9, 8);
        co.msg[10] = "* Sorry^1, my friends and I aren't going anywhere!/";
        scr_noface(11);
        co.msg[12] = "* Ralsei's will is changing..^1.&* \\cYTALK\\cW became \\cYDUAL HEAL\\cW!/%";
        cx();
        co.tempflag[7] = 1;
        co.canact[gZ][3] = 1;
        co.actactor[gZ][3] = 3;
        co.actname[gZ][3] = "DualHeal";
        co.actdesc[gZ][3] = "Heals#everyone";
        co.actcost[gZ][3] = 125;
        this.actcon = 1;
      } else {
        co.msg[0] = "* Your SOUL shined its power on RALSEI!/%";
        cx();
        this.actcon = 20;
      }
      this.acttimer = 0;
    }
    let gT = (ga, gd, gO) => {
      co.faceaction[ga] = 2;
      co.charaction[ga] = 2;
      co.charspecial[ga] = gd;
      co.chartarget[ga] = 0;
      co.acting[ga] = 0;
      cp("snd_boost");
      let gq = cv.first("obj_herokris");
      let go = cL((gq ? gq.x : 80) + 30, (gq ? gq.y : 50) + 50, obj_animation);
      go.depth = -20;
      go.image_index = 0;
      go.image_xscale = 2;
      go.image_yscale = 2;
      go.image_speed = 1;
      go.sprite_index = "spr_soulshining";
      cv.with(gO, gQ => scr_oflash(gQ));
      cv.with("obj_herokris", gQ => scr_oflash(gQ));
    };
    if (this.actcon === 10) {
      this.acttimer += 1;
      if (this.acttimer >= 10 || !cv.exists("obj_writer")) {
        this.acttimer = 0;
        this.actcon = 11;
      }
    }
    if (this.actcon === 11) {
      gT(1, 5, "obj_herosusie");
      this.actcon = 12;
    }
    if (this.actcon === 12) {
      this.acttimer += 1;
      if (this.acttimer >= 20) {
        this.actcon = 1;
        cv.with("obj_herosusie", ga => {
          ga.state = 0;
        });
      }
    }
    if (this.actcon === 20) {
      this.acttimer += 1;
      if (this.acttimer >= 10 || !cv.exists("obj_writer")) {
        this.acttimer = 0;
        this.actcon = 21;
      }
    }
    if (this.actcon === 21) {
      gT(2, 6, "obj_heroralsei");
      this.actcon = 22;
    }
    if (this.actcon === 22) {
      this.acttimer += 1;
      if (this.acttimer >= 20) {
        this.actcon = 1;
        cv.with("obj_heroralsei", ga => {
          ga.state = 0;
        });
      }
    }
    if (this.actcon === 1 && !cv.exists("obj_writer")) {
      this.actcon = 0;
      c4();
    }
  }
  draw(gZ) {
    let gT = this.myself;
    if (this.state === 3) {
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (co.monster[gT] === 0) {
          this.userEvent(10);
          return;
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
        gZ.draw_sprite_ext(this.hurtsprite, 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      let ga = this.idlesprite;
      if (co.mercymod[gT] >= co.mercymax[gT]) {
        ga = this.idlesprite;
      }
      gZ.draw_sprite_ext(ga, this.siner / 6, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        gZ.draw_sprite_white(ga, this.siner / 6, this.x, this.y, 2, 2, 0, -cD(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
x0(rp, "obj_king_boss");
x2(rp, "kinds", cM("obj_king_boss", c8));
x2(rp, "defaultDepth", 90);
x2(rp, "defaultSprite", "spr_chainking_idle");
var obj_king_boss = rp;
var rj = class ec extends cw {
  create() {
    this.xx = xY;
    this.yy = xA;
    this.condition = 0;
    this.attackno = 0;
    this.attack = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.x = this.xx + 470;
    this.y = this.yy + 70;
    this.active = 1;
    this.faketimer = 0;
    this.faketimermax = 180;
    this.timeruse = 0;
    this.image_speed = 0.334;
  }
  scr_debug() {
    return co.debug === 1;
  }
  nextAttack() {
    let gZ = this.xx;
    let gT = this.yy;
    this.attackno += 1;
    this.active = 0;
    if (this.attackno <= 11) {
      this.attack = this.attackno;
    } else {
      this.attack = cN(7, 8, 9, 10, 11);
    }
    let ga = this.attack;
    let gd = gh => {
      let gu = cL(0, 0, v);
      gu.type = gh;
      return gu;
    };
    let gO = gh => {
      this.visible = false;
      let gu = cL(this.x, this.y, obj_chainking);
      gu.type = 1;
      gu.subtype = gh;
      let gp = cL(gZ + 200, gT + 175, obj_nonsolid_growtangle);
      gp.sprite_index = "spr_battlebg_wavechain";
      scr_moveheart_k();
    };
    let gq = gh => {
      this.visible = false;
      this.timeruse = 0;
      let gu = cL(this.x, this.y, obj_chainking);
      gu.type = 2;
      gu.subtype = gh;
      let gp = cL(gZ + 205, gT + 170, obj_nonsolid_growtangle);
      gp.sprite_index = "spr_battlebg_1";
      scr_moveheart_k();
    };
    let go = gh => {
      let gu = cL(gZ + 310, gT + 165, cX);
      gu.sprite_index = "spr_battlebg_2";
      scr_moveheart_k();
      let gp = cL(gu.x, gu.y, obj_growtangle_bouncer);
      gp.type = gh;
    };
    let gQ = (gh, gu) => {
      cL(gZ + 340, gT + 170, cX);
      scr_moveheart_k();
      gd(gh);
      this.timeruse = 1;
      this.faketimermax = gu;
      this.faketimer = 0;
    };
    if (ga === 1) {
      gQ(21, 190);
    }
    if (ga === 2) {
      gO(0);
    }
    if (ga === 3) {
      gQ(34, 200);
    }
    if (ga === 4) {
      go(0);
    }
    if (ga === 5) {
      gO(1);
    }
    if (ga === 6) {
      gq(2);
    }
    if (ga === 7) {
      gQ(35, 220);
    }
    if (ga === 8) {
      go(3);
    }
    if (ga === 9) {
      gQ(23, 190);
    }
    if (ga === 10) {
      gO(2);
    }
    if (ga === 11) {
      gq(1);
    }
  }
  step() {
    if (this.active === 1 && this.scr_debug()) {
      this.nextAttack();
    }
    if (this.timeruse === 1) {
      this.faketimer += 1;
      if (this.faketimer >= this.faketimermax) {
        cv.with("obj_bulletparent", gZ => gZ.instance_destroy());
        cv.with("obj_dbulletcontroller", gZ => gZ.instance_destroy());
        cv.with("obj_growtangle", gZ => {
          gZ.growcon = 3;
        });
        cv.with("obj_heart", gZ => gZ.instance_destroy());
        this.active = 1;
        this.timeruse = 0;
        this.faketimer = 0;
      }
    }
  }
  draw(gZ) {
    this.draw_self(gZ);
    gZ.draw_set_color(cW.green);
    gZ.draw_text(0, 0, String(this.attackno));
    let gT = cv.first("obj_chainking");
    if (gT) {
      gZ.draw_set_color(cW.yellow);
      gZ.draw_text(0, 40, String(gT.x));
      gZ.draw_text(0, 60, String(gT.y));
    }
  }
};
x0(rj, "obj_king_body");
x2(rj, "kinds", cM("obj_king_body", cw));
x2(rj, "defaultDepth", 0);
x2(rj, "defaultSprite", "spr_chainking_spin");
var obj_king_body = rj;
var rS = [{
  id: "king",
  name: "King",
  chapter: 1,
  area: "Card Castle",
  desc: "King.#Chains, spades and#a bouncing spiked box.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: obj_king_boss,
    type: 25,
    x: 460,
    y: 70,
    setup: xJ
  }],
  battlemsg: "* King blocked the way!",
  encounterno: 40,
  music: "battle"
}];
x3(obj_king_boss, "G.mnfight = 2;");
var rw = {};
x1(rw, {
  FIGHTS: () => Br,
  SOUNDS: () => ry,
  SPRITES: () => rM,
  obj_checker_animtest: () => obj_checker_animtest,
  obj_checkers_enemy: () => obj_checkers_enemy,
  obj_checkers_leap: () => obj_checkers_leap,
  obj_oflash: () => rl,
  obj_ralseithrown: () => obj_ralseithrown,
  obj_smallcheckers_enemy: () => obj_smallcheckers_enemy,
  obj_spinheart: () => obj_spinheart,
  obj_throwralsei: () => obj_throwralsei,
  obj_throwtarget: () => obj_throwtarget,
  setupStats: () => rV,
  setupStatsCRound: () => setupStatsCRound,
  setupStatsKRound: () => setupStatsKRound,
  setupStatsKRound2: () => setupStatsKRound2
});
x4();
var rM = ["spr_checkers_idle", "spr_checkers_crouch", "spr_checkers_leap", "spr_checkers_magnificent", "spr_checkers_leg", "spr_checkers_bow", "spr_checkers_milk", "spr_checkers_crown", "spr_checkers_idle_crownless", "spr_checkershrapnel", "spr_smallchecker_idle", "spr_smallchecker_hurt", "spr_smallchecker_run", "spr_smallchecker_transform3", "spr_smallchecker_legtuck", "spr_smallchecker_crown", "spr_krisb_bow", "spr_ralseib_bow", "spr_susieb_throwralseiready", "spr_susieb_attack_unarmed", "spr_ralsei_thrown", "spr_ralseib_idle", "spr_throwarrow", "spr_spinheart", "spr_spinheartmask", "spr_attack_cut1", "spr_attack_slap1"];
var ry = ["snd_impact", "snd_jump", "snd_boost", "snd_ultraswing", "snd_magicsprinkle", "snd_swing", "snd_power", "snd_item", "snd_grab", "snd_coin", "snd_noise", "snd_whistlebreath", "snd_crownshrink"];
var rW = 0;
var rP = 0;
var rv = x0(gZ => "[C]", "scr_get_input_name");
var scr_84_get_subst_string = x0((gZ, ...gT) => {
  let ga = gZ;
  gT.forEach((gd, gO) => {
    ga = ga.split("~" + (gO + 1)).join(String(gd));
  });
  return ga;
}, "scr_84_get_subst_string");
var ralface = x0(gZ => ({
  face: gZ
}), "ralface");
var susface = x0(gZ => ({
  face: gZ
}), "susface");
function setMsgs(...gZ) {
  co.msg = new Array(100).fill(" ");
  let gT = "";
  let ga = 0;
  for (let gd of gZ) {
    if (typeof gd == "string") {
      co.msg[ga++] = gT + gd;
      gT = "";
    } else {
      gT += "\\E" + String(gd.face);
    }
  }
}
x0(setMsgs, "setMsgs");
var writerExists = x0(() => cv.exists("obj_writer"), "writerExists");
var killWriters = x0(() => cv.with("obj_writer", gZ => gZ.instance_destroy()), "killWriters");
var rz = class ex extends cw {
  create() {
    this.flashspeed = 1;
    this.siner = 0;
    this.target = null;
    this.image_speed = 0;
    this.flashcolor = cW.white;
  }
  draw(gZ) {
    if (cv.exists(this.target)) {
      this.image_index = this.target.image_index;
      this.sprite_index = this.target.sprite_index;
    }
    this.siner += this.flashspeed;
    gZ.draw_sprite_white(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, Math.max(0, cY(this.siner / 3)));
    if (this.siner > 4 && cY(this.siner / 3) < 0) {
      this.instance_destroy();
    }
  }
};
x0(rz, "obj_oflash");
x2(rz, "kinds", cM("obj_oflash", cw));
x2(rz, "defaultDepth", 0);
var rl = rz;
function rL(gZ) {
  let gT = cL(gZ.x, gZ.y, rl);
  gT.image_xscale = gZ.image_xscale;
  gT.image_speed = 0;
  gT.image_index = gZ.image_index;
  gT.image_yscale = gZ.image_yscale;
  gT.sprite_index = gZ.sprite_index;
  gT.depth = gZ.depth - 1;
  gT.target = gZ;
  return gT;
}
x0(rL, "scr_oflash");
function setupStatsCRound(gZ) {
  co.monstername[gZ] = "C.Round";
  co.monstermaxhp[gZ] = 10;
  co.monsterhp[gZ] = 10;
  co.monsterat[gZ] = 5;
  co.monsterdf[gZ] = 0;
  co.monsterexp[gZ] = 0;
  co.monstergold[gZ] = 10;
  co.sparepoint[gZ] = 0;
  co.mercymod[gZ] = 0;
  co.mercymax[gZ] = 100;
  co.canact[gZ][0] = 1;
  co.actname[gZ][0] = "Check";
  if (co.encounterno === 7 && co.plot < 40) {
    co.plot = 40;
  }
  if (ch(2)) {
    co.canact[gZ][1] = 1;
    co.actactor[gZ][1] = 2;
    co.actname[gZ][1] = "X-Compliment";
    co.canact[gZ][2] = 1;
    co.actname[gZ][2] = "Warning";
    co.actactor[gZ][2] = 3;
  }
}
x0(setupStatsCRound, "setupStatsCRound");
function setupStatsKRound(gZ) {
  co.monstername[gZ] = "K.Round";
  co.monstermaxhp[gZ] = 1300;
  co.monsterhp[gZ] = 1300;
  co.monsterat[gZ] = 7.5;
  co.monsterdf[gZ] = 3;
  co.monsterexp[gZ] = 0;
  co.monstergold[gZ] = 100;
  co.sparepoint[gZ] = 0;
  co.mercymod[gZ] = 0;
  co.mercymax[gZ] = 100;
  co.canact[gZ][0] = 1;
  co.actname[gZ][0] = "Check";
  co.canact[gZ][1] = 1;
  co.actname[gZ][1] = "Bow";
  co.canact[gZ][2] = 1;
  co.actname[gZ][2] = "Deep Bow";
  co.actactor[gZ][2] = 3;
  if (ch(2)) {
    co.canact[gZ][3] = 1;
    co.actname[gZ][3] = "Warning";
    co.actactor[gZ][3] = 3;
  }
}
x0(setupStatsKRound, "setupStatsKRound");
function setupStatsKRound2(gZ) {
  co.monstername[gZ] = "K.Round";
  co.monstermaxhp[gZ] = 1300;
  co.monsterhp[gZ] = 1300;
  co.monsterat[gZ] = 8;
  co.monsterdf[gZ] = 3;
  co.monsterexp[gZ] = 0;
  co.monstergold[gZ] = 100;
  co.sparepoint[gZ] = 0;
  co.mercymod[gZ] = 0;
  co.mercymax[gZ] = 100;
  co.canact[gZ][0] = 1;
  co.actname[gZ][0] = "Check";
  if (co.flag[246] === 1) {
    co.actname[gZ][0] = "Checkers";
  }
  co.canact[gZ][1] = 1;
  co.actname[gZ][1] = "Bow";
  co.canact[gZ][2] = 1;
  co.actname[gZ][2] = "Susie's Idea";
  co.actactor[gZ][2] = 4;
}
x0(setupStatsKRound2, "setupStatsKRound2");
var rV = setupStatsKRound;
var rE = class er extends c0 {
  create() {
    Object.assign(this, {
      jumpcon: 0,
      jumptimer: 0,
      s_timer: 0,
      image_xscale: 2,
      image_yscale: 2,
      leapmode: 0,
      active: 1,
      image_speed: 0,
      image_index: 0,
      damage: 100,
      grazed: 0,
      grazepoints: 6,
      timepoints: 2,
      inv: 120,
      grazetimer: 0,
      target: 0,
      boss: 0,
      amt: 0,
      floory: 0,
      targetx: 0,
      magamt: 0,
      siner: 0
    });
  }
  userEvent(gZ) {
    if (gZ === 5 && this.active === 1) {
      cq(this);
    }
  }
  step() {
    let gZ = cv.first("obj_growtangle");
    let gT = gZ ? gZ.y : 170;
    let ga = gZ ? gZ.sprite_height : 0;
    let gd = cv.first("obj_heart");
    let gO = gd ? gd.x : 320;
    let gq = gd ? gd.y : 170;
    let go = () => cv.with("obj_checkers_enemy", gQ => {
      gQ.visible = true;
    });
    if (this.leapmode === 0) {
      if (this.jumpcon === 1 && this.vspeed >= 0 && this.y >= gT + ga / 2 - this.sprite_height) {
        cp("snd_impact");
        cL(0, 0, cT);
        this.y = gT + ga / 2 - this.sprite_height;
        this.jumptimer = 0;
        this.vspeed = 0;
        this.gravity = 0;
        this.hspeed = 0;
        this.sprite_index = "spr_checkers_crouch";
        this.jumpcon = 0;
      }
      if (this.jumpcon === 3 && this.vspeed >= 0 && this.y >= this.floory - 2) {
        cp("snd_impact");
        cL(0, 0, cT);
        this.y = this.floory;
        this.x = this.xstart;
        this.vspeed = 0;
        this.gravity = 0;
        this.hspeed = 0;
        this.sprite_index = "spr_checkers_crouch";
        this.jumpcon = 4;
      }
      if (this.jumpcon === 0) {
        this.sprite_index = "spr_checkers_crouch";
        this.jumptimer += 1;
        let gQ = 20;
        if (this.amt >= 1) {
          gQ = 10;
        }
        if (this.jumptimer >= gQ) {
          cp("snd_jump");
          this.floory = this.y;
          this.jumptimer = 0;
          this.jumpcon = 1;
          this.amt += 1;
          this.sprite_index = "spr_checkers_leap";
          this.targetx = gO + 8 - this.sprite_width / 2;
          this.vspeed = -15;
          if (this.amt === 1) {
            this.vspeed = -17;
          }
          this.gravity = 1;
          this.hspeed = (this.targetx - this.x) / 28;
          if (this.amt >= 4) {
            this.active = 0;
            this.jumpcon = 3;
            this.targetx = this.xstart;
            this.gravity = 2;
            this.hspeed = (this.targetx - this.x) / 16;
          }
        }
      }
      if (this.jumpcon === 4) {
        this.jumptimer += 1;
        if (this.jumptimer >= 10) {
          co.turntimer = -1;
          go();
          this.instance_destroy();
        }
      }
    }
    if (this.leapmode === 1 && (this.jumpcon === 7 && (this.jumptimer += 1, this.jumptimer >= 10 && cv.with("obj_regularbullet", gh => {
      gh.active = 0;
      gh.image_alpha -= 0.1;
    }), this.jumptimer >= 20 && (co.turntimer = -1, go(), this.instance_destroy())), this.jumpcon === 6 && this.y >= this.floory - 2 && (this.y = this.floory, this.x = this.xstart, this.vspeed = 0, this.gravity = 0, this.hspeed = 0, this.sprite_index = "spr_checkers_crouch", this.jumpcon = 7), this.jumpcon === 0 && (this.sprite_index = "spr_checkers_crouch", this.jumptimer += 1, this.jumptimer >= 20 && (this.floory = this.y, this.jumptimer = 0, this.jumpcon = 1, this.sprite_index = "spr_checkers_leap", this.targetx = gO + 8 - this.sprite_width / 2, this.hspeed = (this.targetx - this.x) / 17, this.vspeed = -17, cp("snd_jump"), this.gravity = 1, this.amt += 1, this.amt >= 3 && (this.active = 0, this.jumpcon = 6, this.targetx = this.xstart, this.gravity = 2, this.hspeed = (this.targetx - this.x) / 16))), this.jumpcon === 1 && this.vspeed >= 0 && (this.gravity = 0, this.vspeed = 0, this.hspeed = 0, this.jumpcon = 2, cp("snd_boost")), this.jumpcon === 2 && (this.image_speed = 0.25, this.jumptimer += 1, this.jumptimer >= 15 && (cp("snd_ultraswing"), this.image_speed = 0, this.image_index = 0, this.vspeed = 32, this.jumpcon = 3, this.jumptimer = 0)), this.jumpcon === 3)) {
      let gh = cG(this);
      gh.image_alpha = 0.7;
      if (this.y >= gT + ga / 2 - this.sprite_height) {
        cp("snd_impact");
        cL(0, 0, cT);
        for (let gu = 0; gu < 6; gu += 1) {
          let gp = cL(this.x + this.sprite_width / 2 - 15 + gu * 5, gT + ga / 2, c1);
          gp.image_xscale = 1.5;
          gp.image_yscale = 1.5;
          gp.direction = 130 - cU(10) - gu / 5 * 70;
          gp.sprite_index = "spr_checkershrapnel";
          gp.speed = 6 + cU(1);
          gp.gravity = 0.25;
          gp.target = this.target;
          gp.damage = this.damage;
        }
        this.y = gT + ga / 2 - this.sprite_height;
        this.vspeed = 0;
        this.gravity = 0;
        this.hspeed = 0;
        this.sprite_index = "spr_checkers_crouch";
        this.jumpcon = 0;
      }
    }
    if (this.leapmode === 2) {
      if (this.jumpcon === 0) {
        this.sprite_index = "spr_checkers_magnificent";
        this.image_speed = 0.5;
        this.jumpcon = 1;
        this.magamt = 0;
      }
      if (this.jumpcon === 1) {
        if (this.image_index === 2) {
          cp("snd_ultraswing");
        }
        if (this.image_index >= 4) {
          this.image_index = 4;
          this.image_speed = 0;
          this.hspeed = -4;
          this.gravity = -0.12;
          this.jumpcon = 2;
          this.siner = 0;
        }
      }
      if (this.jumpcon === 2) {
        this.siner += 1;
        this.y += cY(this.siner / 3) * 4;
        this.s_timer += 1;
        if (this.s_timer === 20) {
          cp("snd_magicsprinkle");
        }
        if (this.s_timer >= 24) {
          let gf = cL(this.x + cU(this.sprite_width / 2), this.y + this.sprite_height - 50, c1);
          gf.sprite_index = "spr_checkershrapnel";
          gf.vspeed = 3;
          gf.image_xscale = 1.5;
          gf.image_yscale = 1.5;
          gf.depth = this.depth + 1;
          gf.gravity_direction = 135 + cU(180);
          gf.gravity = 0.06;
          gf.target = this.target;
          gf.damage = this.damage;
          if (this.magamt === 6 || this.magamt === 12) {
            gf.gravity = 0;
            gf.move_towards_point(gO + 8, gq + 8, 3);
          }
          this.s_timer = 21;
          this.magamt += 1;
        }
        if (this.y < rP - 200) {
          this.speed = 0;
          this.gravity = 0;
          this.y = this.ystart - 100;
          this.x = this.xstart + 300;
          this.hspeed = -30;
          this.vspeed = 10;
          this.jumpcon = 3;
        }
      }
      if (this.jumpcon === 3) {
        this.magamt = 0;
        this.jumptimer += 1;
        if (this.jumptimer >= 10) {
          cp("snd_impact");
          cL(0, 0, cT);
          this.amt += 1;
          this.s_timer = 0;
          this.x = this.xstart;
          this.y = this.ystart;
          this.hspeed = 0;
          this.vspeed = 0;
          this.jumpcon = 0;
          this.jumpcon = 4;
          this.jumptimer = 0;
          this.sprite_index = "spr_checkers_idle";
          this.image_index = 0;
          this.image_speed = 0;
        }
      }
      if (this.jumpcon === 4) {
        this.jumptimer += 1;
        if (this.jumptimer >= 20) {
          cv.with("obj_regularbullet", gj => {
            gj.active = 0;
            gj.image_alpha -= 0.1;
          });
        }
        if (this.jumptimer >= 30) {
          co.turntimer = -1;
          this.instance_destroy();
          go();
        }
      }
    }
    if (this.leapmode === 3) {
      cv.with("obj_regularbullet", gj => {
        gj.image_xscale += 0.01;
        gj.image_yscale += 0.01;
      });
      if (this.jumpcon === 0) {
        this.sprite_index = "spr_checkers_leg";
        this.image_index = 0;
        this.image_speed = 0.5;
        this.jumpcon = 1;
      }
      if (this.jumpcon === 1) {
        if (this.image_index === 3) {
          cp("snd_swing");
          cp("snd_magicsprinkle");
          for (let gj = 0; gj < 4; gj += 1) {
            let gk = cL(this.x - 40, this.y + 100, c1);
            gk.sprite_index = "spr_checkershrapnel";
            gk.direction = cz(gk.x, gk.y, gO + 8, gq + 8) - gj * 10 + cU(gj * 20);
            gk.speed = 3.5 + cU(1.8);
            gk.target = this.target;
            gk.damage = this.damage;
          }
        }
        if (this.image_index >= 5) {
          this.image_index = 5;
          this.image_speed = 0;
          this.jumpcon = 2;
        }
      }
      if (this.jumpcon === 2) {
        this.jumptimer += 1;
        if (this.jumptimer >= 10) {
          this.sprite_index = "spr_checkers_idle";
          this.image_index = 0;
        }
        if (this.jumptimer >= 20) {
          this.jumptimer = 0;
          this.jumpcon = 0;
          this.amt += 1;
          if (this.amt >= 4) {
            this.jumpcon = 3;
            this.jumptimer = 0;
          }
        }
      }
      if (this.jumpcon === 3) {
        this.jumptimer += 1;
        if (this.jumptimer >= 20) {
          cv.with("obj_regularbullet", gy => {
            gy.image_alpha -= 0.1;
            gy.active = 0;
          });
        }
        if (this.jumptimer >= 30) {
          co.turntimer = -1;
          this.instance_destroy();
          go();
        }
      }
    }
    if (this.leapmode === 4) {
      if (this.jumpcon === 1 && this.y >= this.floory - 2) {
        this.y = this.floory;
        this.vspeed = 0;
        this.gravity = 0;
        this.hspeed = 0;
        this.sprite_index = "spr_checkers_crouch";
        this.jumpcon = 0;
        this.jumptimer = 10;
      }
      if (this.jumpcon === 3 && this.y >= this.floory - 2) {
        this.y = this.floory;
        this.x = this.xstart;
        this.vspeed = 0;
        this.gravity = 0;
        this.hspeed = 0;
        this.sprite_index = "spr_checkers_crouch";
        this.jumpcon = 4;
      }
      if (this.jumpcon === 0) {
        this.jumptimer += 1;
        if (this.jumptimer >= 16) {
          this.floory = this.y;
          this.jumptimer = 0;
          this.jumpcon = 1;
          this.sprite_index = "spr_checkers_leap";
          this.targetx = gO + 8 - this.sprite_width / 2;
          this.vspeed = -12;
          this.gravity = 1;
          this.hspeed = (this.targetx - this.x) / 24;
          this.amt += 1;
          if (this.amt >= 4) {
            this.active = 0;
            this.jumpcon = 3;
            this.jumptimer = 0;
            this.targetx = this.xstart;
            this.gravity = 2;
            this.hspeed = (this.targetx - this.x) / 12;
          }
        }
      }
      if (this.jumpcon === 4) {
        this.jumptimer += 1;
        if (this.jumptimer >= 10) {
          co.turntimer = -1;
          go();
          this.instance_destroy();
        }
      }
    }
    if (this.grazed === 1) {
      this.grazetimer += 1;
      if (this.grazetimer >= 10) {
        this.grazetimer = 0;
        this.grazed = 0;
      }
    }
  }
};
x0(rE, "obj_checkers_leap");
x2(rE, "kinds", cM("obj_checkers_leap", c0));
x2(rE, "defaultDepth", 1);
x2(rE, "defaultSprite", "spr_checkers_idle");
var obj_checkers_leap = rE;
var rA = class eB extends c2 {
  create() {
    let gZ = cv.first("obj_heart");
    Object.assign(this, {
      con: 0,
      htimer: 0,
      image_xscale: 4,
      image_yscale: 4,
      active: 0,
      image_alpha: 0,
      image_angle: -90,
      joker: 0,
      damage: 100,
      grazed: 0,
      grazepoints: 5,
      timepoints: 0,
      inv: 60,
      grazetimer: 0,
      spinmax: 0,
      hmax: 0,
      type: 0,
      target: 0
    });
    this.x = (gZ ? gZ.x : 320) + 8;
    this.y = (gZ ? gZ.y : 170) + 8;
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
      if (this.htimer >= 25 && co.turntimer >= 0) {
        co.turntimer = -2;
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
        this.spinmax = cN(26.25, 30, 33.75, 37.5);
        if (this.joker === 1) {
          this.spinmax = 15 + cU(15);
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
x0(rA, "obj_spinheart");
x2(rA, "kinds", cM("obj_spinheart", c2));
x2(rA, "defaultDepth", 0);
x2(rA, "defaultSprite", "spr_spinheart");
x2(rA, "defaultMask", "spr_spinheartmask");
var obj_spinheart = rA;
var B0 = class eg extends cw {
  create() {
    this.type = 0;
    this.con = 1;
    this.subcon = 0;
    this.secondtime = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.windsound = 0;
    this.crown = null;
    this.maxy = 0;
  }
  alarmEvent(gZ) {
    if (gZ === 4) {
      this.con += 1;
    }
  }
  step() {
    if (this.type !== 1) {
      return;
    }
    let gZ = this.crown;
    if (this.con === 1) {
      this.image_speed = 0;
      this.image_index = 0;
      this.crown = cL(this.x + 24, this.y + 10, cB);
      this.crown.image_xscale = 2;
      this.crown.image_yscale = 2;
      this.crown.sprite_index = "spr_smallchecker_crown";
      this.crown.depth = this.depth - 1;
      this.sprite_index = "spr_smallchecker_transform3";
      this.con = 0.4;
      this.windsound = 0;
      this.alarm[4] = 30;
    }
    if (this.con === 1.4) {
      if (this.windsound === 0) {
        cp("snd_whistlebreath");
        this.windsound = 1;
      }
      if (this.secondtime === 0) {
        gZ.hspeed += 0.2;
      } else {
        gZ.hspeed += 0.4;
      }
      if (gZ.hspeed >= 3) {
        this.con = 1.5;
      }
    }
    if (this.con === 1.5) {
      gZ.maxy = this.y + this.sprite_height;
      gZ.image_angle = -45;
      gZ.y -= 10;
      gZ.gravity = 0.5;
      gZ.hspeed = 5;
      gZ.friction = 0.2;
      this.con = 1.6;
    }
    if (this.con === 1.6 && gZ.y >= gZ.maxy - gZ.sprite_height - 10) {
      gZ.y += 10;
      gZ.image_angle = 0;
      gZ.gravity = 0;
      gZ.vspeed = 0;
      gZ.friction = 0;
      gZ.hspeed = 1;
      this.con = 0.9;
      this.alarm[4] = 30;
      if (this.secondtime === 1) {
        this.alarm[4] = 10;
      }
    }
    if (this.con === 1.9) {
      this.image_speed = 0.25;
      cp("snd_crownshrink");
      this.con = 2.1;
    }
    if (this.con === 2.1) {
      this.image_speed += 0.01;
      if (this.secondtime === 1) {
        this.image_speed += 0.01;
      }
      if (this.image_speed >= 0.4) {
        this.image_index = 1;
        this.image_speed = 0;
        this.con = 3;
        this.maxy = this.y + this.sprite_height - 30;
        this.alarm[4] = 30;
        if (this.secondtime === 1) {
          this.alarm[4] = 10;
        }
      }
    }
    if (this.con === 4) {
      this.x += 40;
      this.y += 46;
      this.sprite_index = "spr_smallchecker_legtuck";
      this.image_index = 0;
      this.image_speed = 0.25;
      this.vspeed = -3;
      this.gravity = 1;
      if (this.secondtime === 1) {
        this.vspeed = -6;
        this.gravity = 2;
        this.image_speed = 0.5;
      }
      this.con = 5;
    }
    if (this.con === 5) {
      if (this.image_index >= 2) {
        this.image_speed = 0;
      }
      if (this.y >= this.maxy - 4) {
        this.y = this.maxy;
        this.gravity = 0;
        this.vspeed = 0;
        this.con = 6;
        this.alarm[4] = 30;
        if (this.secondtime === 1) {
          this.alarm[4] = 10;
        }
      }
    }
    if (this.con === 7) {
      this.image_angle -= 5;
      this.hspeed = 3;
      if (this.secondtime === 1) {
        this.hspeed = 6;
        this.image_angle -= 5;
      }
      if (this.x >= rW + 720) {
        this.con = 8;
        co.monster[0] = 0;
        co.monster[1] = 0;
        co.monster[2] = 0;
        c4();
        cv.with("obj_monsterparent", gT => gT.instance_destroy());
        this.instance_destroy();
      }
    }
  }
};
x0(B0, "obj_checker_animtest");
x2(B0, "kinds", cM("obj_checker_animtest", cw));
x2(B0, "defaultDepth", 0);
x2(B0, "defaultSprite", "spr_smallchecker_idle");
var obj_checker_animtest = B0;
var B2 = class eG extends cw {
  create() {
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.image_speed = 0.2;
    this.good = 1;
    this.offing = 0;
    if (cv.number("obj_throwtarget") === 1) {
      let gZ = cL(this.x, this.y, eG);
      gZ.depth = this.depth + 1;
      gZ.offing = 0;
      gZ.good = 0;
      gZ.sprite_index = "spr_checkers_idle_crownless";
    }
    this.con = 0;
  }
  step() {
    if (this.con === 1) {
      this.image_angle += 10;
    }
    if (this.con === 5) {
      if (this.x < this.xstart + 40) {
        this.x += 10;
      }
      this.con = 6;
    }
    if (this.con === 6 && this.x > this.xstart) {
      this.x -= 2;
    }
    if (this.con === 7) {
      if (this.x < this.xstart + 40) {
        this.x += 8;
      }
      this.con = 6;
    }
  }
};
x0(B2, "obj_throwtarget");
x2(B2, "kinds", cM("obj_throwtarget", cw));
x2(B2, "defaultDepth", 4);
x2(B2, "defaultSprite", "spr_checkers_crown");
var obj_throwtarget = B2;
var B4 = class eC extends cw {
  create() {
    this.con = 0;
    this.yy = rP;
    this.xx = rW;
    this.timer = 0;
    this.collided = 0;
    this.mypower = 10;
  }
  step() {
    let gZ = cv.first("obj_heroralsei");
    let gT = gZ ? gZ.y : 180;
    let ga = gZ ? gZ.x : 80;
    if (this.con === 0 || this.con === 2) {
      this.image_angle = this.direction;
    }
    if ((this.x > this.xx + 700 || this.y < this.yy - 40) && this.con === 0) {
      this.gravity = 0;
      this.speed = 0;
      this.x = this.xx - 40;
      this.y = gT;
      this.sprite_index = "spr_ralseib_idle";
      this.image_angle = 0;
      this.hspeed = 20;
      this.con = 10;
    }
    if (this.con === 10) {
      this.timer += 1;
      if (this.x >= ga - 10) {
        if (this.collided === 0) {
          co.msg = new Array(100).fill(" ");
          co.msg[0] = "* Missed!/%";
          cx();
        }
        cv.with("obj_heroralsei", gd => {
          gd.visible = true;
        });
        cv.with("obj_herosusie", gd => {
          gd.visible = true;
        });
        cv.with("obj_checkers_enemy", gd => {
          gd.actcon = 1;
          gd.visible = true;
        });
        cv.with("obj_throwtarget", gd => gd.instance_destroy());
        cv.with("obj_throwralsei", gd => gd.instance_destroy());
        this.instance_destroy();
      }
    }
    if (this.con === 2 && (this.x < this.xx - 40 || this.y > this.yy + 520)) {
      this.timer = 0;
      this.gravity = 0;
      this.speed = 0;
      this.x = this.xx - 40;
      this.y = gT;
      this.sprite_index = "spr_ralseib_idle";
      this.image_angle = 0;
      this.hspeed = 20;
      this.con = 10;
    }
  }
  endStep() {
    if (!this.destroyed) {
      for (let gZ of cv.all("obj_throwtarget")) {
        if (cE(this, gZ)) {
          this.hitTarget(gZ);
        }
      }
    }
  }
  hitTarget(gZ) {
    if (this.collided === 0) {
      co.msg = new Array(100).fill(" ");
      if (gZ.good === 1) {
        cv.with("obj_checkers_enemy", gT => {
          gT.crown += 35;
        });
        co.msg[0] = "* The crown greatly loosened!/%";
        cp("snd_coin");
        if (gZ.offing === 1) {
          gZ.con = 1;
          gZ.vspeed = -8;
        } else {
          gZ.con = 5;
        }
      } else {
        cp("snd_noise");
        gZ.con = 7;
        cv.with("obj_checkers_enemy", gT => {
          gT.crown += 20;
        });
        co.msg[0] = "* The crown loosened a little!/%";
        this.hspeed = -12;
        this.vspeed = -4;
        this.gravity = 0.5;
        this.con = 2;
      }
      cx();
      this.collided = 1;
    }
  }
};
x0(B4, "obj_ralseithrown");
x2(B4, "kinds", cM("obj_ralseithrown", cw));
x2(B4, "defaultDepth", 1);
x2(B4, "defaultSprite", "spr_ralsei_thrown");
var obj_ralseithrown = B4;
var B6 = class eX extends cw {
  create() {
    Object.assign(this, {
      angle: 0,
      throwcon: 1,
      angledraw: 1,
      image_xscale: 2,
      image_yscale: 2,
      radius: 300,
      anglespeed: 2,
      ralspeed: 26,
      ralgrav: 1,
      fro: 0,
      mypower: 15,
      maxpower: 30,
      minpower: 15,
      powerdir: 1,
      powerspeed: 0.6,
      throwready: 0,
      throwalpha: 0,
      activatethrow: 0,
      lx: 0,
      ly: 0
    });
    this.rx = this.x + 70;
    this.ry = this.y + 30;
    this.ralyoff = new Array(42).fill(0);
  }
  step() {
    if (this.throwcon === 1) {
      if (this.throwready === 0) {
        this.angle += this.anglespeed;
      }
      if (this.angle >= 30) {
        this.anglespeed = -2;
      }
      if (this.angle <= -15) {
        this.anglespeed = 2;
      }
      if (cP() && this.throwalpha >= 0.9 && this.throwready === 1) {
        this.activatethrow = 1;
        killWriters();
      }
      if (cP() && this.throwready === 0) {
        this.throwready = 1;
        killWriters();
        co.msg = new Array(100).fill(" ");
        co.msg[0] = "* Press " + rv(6) + " to determine the POWER!";
        cx();
      }
      if (this.activatethrow === 1) {
        this.activatethrow = 0;
        this.throwready = 0;
        this.image_index = 0;
        this.image_speed = 0.5;
        this.sprite_index = "spr_susieb_attack_unarmed";
        this.angledraw = 0;
        this.throwcon = 2;
        cp("snd_ultraswing");
        let gZ = cL(this.rx, this.ry, obj_ralseithrown);
        gZ.speed = this.mypower;
        gZ.mypower = this.mypower;
        gZ.image_xscale = 2;
        gZ.image_yscale = 2;
        gZ.direction = this.angle;
        gZ.image_angle = this.angle;
        gZ.gravity = this.ralgrav;
      }
      if (this.throwready === 1) {
        this.mypower += this.powerdir * this.powerspeed;
        if (this.mypower >= this.maxpower) {
          this.powerdir = -1;
        }
        if (this.mypower <= this.minpower) {
          this.powerdir = 1;
        }
      }
    }
    if (this.throwcon === 2 && this.image_index >= 5) {
      this.image_speed = 0;
    }
    if (this.angledraw === 1) {
      this.lx = cH(this.mypower, this.angle);
      this.ly = cb(this.mypower, this.angle);
      for (let gT = 0; gT < 42; gT += 1) {
        let ga = this.ralgrav + this.ralgrav * gT;
        if (gT > 0) {
          this.ralyoff[gT] = this.ralyoff[gT - 1] + ga;
        } else {
          this.ralyoff[0] = ga;
        }
      }
    }
  }
  draw(gZ) {
    this.draw_self(gZ);
    if (this.angledraw === 1) {
      let gT = this.rx;
      let ga = this.ry;
      let gd = this.lx;
      let gO = this.ly;
      let gq = this.fro;
      let go = this.ralyoff;
      if (this.throwready === 1) {
        if (this.throwalpha < 1) {
          this.throwalpha += 0.125;
        }
        gZ.draw_set_alpha(this.throwalpha);
        gZ.draw_set_color(cR(cW.blue, cW.white, 0.5));
        for (let gQ = 0; gQ < 12; gQ += 1) {
          gZ.draw_circle(gT + gd * (gQ * 2 + gq), ga + gO * (gQ * 2 + gq) + go[gQ * 2 + gq] - 20, 4, false);
          gZ.draw_line_width(gT + gd * (gQ * 2 + gq), ga + gO * (gQ * 2 + gq) + go[gQ * 2 + gq] - 20, gT + gd * ((gQ + 1) * 2 + gq), ga + gO * ((gQ + 1) * 2 + gq) + go[(gQ + 1) * 2 + gq] - 20, 2);
          gZ.draw_sprite_ext("spr_throwarrow", 0, gT, ga - 20, 2, 2, this.angle, cW.red, 1);
        }
        gZ.draw_set_alpha(1);
      }
      if (this.throwready === 0) {
        gZ.draw_set_color(cW.red);
        gZ.draw_sprite_ext("spr_throwarrow", 0, gT, ga - 20, 2, 2, this.angle, cW.white, 1);
      }
    }
  }
};
x0(B6, "obj_throwralsei");
x2(B6, "kinds", cM("obj_throwralsei", cw));
x2(B6, "defaultDepth", 0);
x2(B6, "defaultSprite", "spr_susieb_throwralseiready");
var obj_throwralsei = B6;
var B8 = class eI extends c8 {
  create() {
    Object.assign(this, {
      bikeflip: 0,
      becomeflash: 0,
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 5,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      talked: 0,
      attacked: 0,
      hurt: 0,
      hurttimer: 0,
      hurtshake: 0,
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
      checked: 0,
      crown: 0,
      attacktype: 0,
      thrown: 0,
      thissprite: "spr_checkers_idle",
      scon: 0,
      secondtime: 0,
      bowcounter: 0,
      ralsei_lecture: 0,
      milk_counter: 0,
      rtimer: 0,
      milkmax: 1000,
      milktimer: 0,
      milk: null,
      bowkris: null,
      bowral: null,
      bowcheck: null,
      trsus: null,
      throwsus: null,
      animtest: null
    });
  }
  userEvent(gZ) {
    if (gZ === 12) {
      co.monsterx[this.myself] = this.x + this.sprite_width / 4;
      co.monstery[this.myself] = this.y + this.sprite_height / 4;
      return;
    }
    if (gZ !== 11) {
      super.userEvent(gZ);
    }
  }
  alarmEvent(gZ) {
    if (gZ === 4) {
      this.actcon += 1;
    }
  }
  step() {
    let gZ = this.myself;
    if (co.monstertype[gZ] === 21) {
      this.secondtime = 1;
    }
    if (co.monster[gZ] === 1) {
      co.flag[51 + gZ] = 4;
      if (this.secondtime === 1) {
        this.milk_counter = 99;
      }
      if (this.secondtime === 1) {
        this.ralsei_lecture = 99;
      }
      if (co.mnfight === 1 && this.talked === 0) {
        cd(this);
        if (!cv.exists("obj_darkener")) {
          cL(0, 0, cZ);
        }
        this.milkmax = 1000;
        if (this.milk_counter > 0) {
          this.milkmax = 600;
        }
        if (co.monsterhp[gZ] > this.milkmax) {
          if (!cv.exists("obj_moveheart") && !cv.exists("obj_heart")) {
            cn();
          }
          if (!cv.exists("obj_growtangle")) {
            cL(rW + 320, rP + 170, cX);
          }
        }
        co.mnfight = 2;
        this.rtimer = 0;
        co.typer = 50;
        this.talked = 2;
        this.attacked = 0;
        this.talktimer = 0;
      }
      if (this.talked === 2) {
        co.mnfight = 2;
      }
      if (co.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          this.talked = 0;
          this.milkmax = 1000;
          if (this.milk_counter > 0) {
            this.milkmax = 600;
          }
          if (co.monsterhp[gZ] <= this.milkmax) {
            if (this.scon === 0) {
              this.scon = 1;
            }
          } else {
            if (!cv.exists("obj_checkers_leap")) {
              let gT = 0;
              if (this.attacktype === 0) {
                gT = 0;
              }
              if (this.attacktype === 1) {
                gT = 3;
              }
              if (this.attacktype === 2) {
                gT = 1;
              }
              if (this.attacktype === 3) {
                gT = 2;
              }
              let ga = cL(this.x, this.y, obj_checkers_leap);
              ga.leapmode = gT;
              ga.target = this.mytarget;
              ga.damage = co.monsterat[gZ] * 5;
              this.attacktype += 1;
              if (this.attacktype > 3) {
                this.attacktype = 0;
              }
            }
            this.siner = 0;
            this.visible = false;
            this.turns += 1;
          }
          co.turntimer = 999;
          this.attacked = 1;
          co.typer = 6;
          co.fc = 0;
          cN(0);
          co.battlemsg[0] = "* K.Round shuffles furiously.";
          if (co.monsterstatus[gZ] === 1) {
            co.battlemsg[0] = "* K.Round looks weak.";
          }
          if (co.monsterhp[gZ] <= co.monstermaxhp[gZ] / 3) {
            co.battlemsg[0] = "* K.Round's shuffle becomes lethargic.";
          }
          if (this.crown > 0) {
            co.battlemsg[0] = scr_84_get_subst_string("* The crown is \\cY~1-percent\\cW loose!", String(this.crown));
          }
        } else {
          co.turntimer = 120;
        }
      }
      if (co.mnfight === 2 && co.turntimer <= 1) {
        if (this.battlecancel === 1) {
          co.mercymod[gZ] = 999;
        }
        if (this.battlecancel === 2) {
          cv.with("obj_battlecontroller", gd => {
            gd.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (this.scon === 1) {
      if (this.milk_counter > 0) {
        this.scon = 1.5;
      } else {
        killWriters();
        co.msg = new Array(100).fill(" ");
        co.msg[0] = "* K. ROUND felt stressed out and attacked!/%";
        cx();
        this.scon = 1.5;
      }
    }
    if (this.scon === 1.5 && !writerExists()) {
      cp("snd_magicsprinkle");
      killWriters();
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* K. ROUND practiced self-care!";
      co.turntimer = 999;
      cx();
      this.milk = cC(this.x - 100, this.y + 60, "spr_checkers_milk");
      this.milk.image_speed = 0;
      this.milk.image_xscale = 4;
      this.milk.image_yscale = 4;
      this.milk.image_alpha = 0;
      this.milk.depth = this.depth - 1;
      this.scon = 2;
      this.milktimer = 0;
    }
    if (this.scon === 2) {
      let gd = this.milk;
      gd.image_xscale -= 0.2;
      gd.image_yscale -= 0.2;
      gd.image_alpha += 0.1;
      this.milktimer += 1;
      if (this.milktimer >= 10) {
        this.scon = 3;
        this.milktimer = 0;
        gd.image_alpha = 1.4;
      }
    }
    if (this.scon === 3) {
      this.milktimer += 1;
      if (this.milktimer >= 25) {
        this.scon = 4;
        this.milktimer = 0;
      }
    }
    if (this.scon === 4) {
      let gO = this.milk;
      gO.hspeed += 2;
      gO.image_alpha -= 0.1;
      this.milktimer += 1;
      if (this.milktimer === 10) {
        if (co.monsterat[gZ] < 10) {
          co.monsterat[gZ] += 0.5;
        }
        cp("snd_power");
        let gq = 700;
        if (this.milk_counter === 0) {
          gq = 300;
        }
        co.monsterhp[gZ] += gq;
        let go = cL(co.monsterx[gZ], co.monstery[gZ], c6);
        go.delay = 8;
        go.type = 3;
        go.damage = 700;
        go.damage = gq;
        let gQ = cL(this.x, this.y, c7);
        gQ.target = this;
      }
      if (this.milktimer >= 15) {
        gO.instance_destroy();
        this.scon = 5;
        this.milktimer = 0;
      }
    }
    if (this.scon === 5) {
      this.milktimer += 1;
      if (this.milktimer >= 30) {
        if (this.milk_counter > 0) {
          killWriters();
          this.scon = 0;
          this.milktimer = 0;
          co.turntimer = 0;
        } else {
          killWriters();
          this.scon = 6;
          setMsgs("* K. ROUND's HP and ATTACK went up!/", ralface(3), "* Susie^1! Stop attacking it^1! You're making it stronger!/", susface(3), "* Pssh^1, and let it think I'm AFRAID^1? No way!/%");
          cx();
        }
        this.milk_counter += 1;
      }
    }
    if (this.scon === 6) {
      if (writerExists()) {
        co.turntimer = 999;
      } else {
        co.fc = 0;
        this.scon = 0;
        this.milktimer = 0;
        co.turntimer = 0;
      }
    }
    if (co.myfight === 3) {
      this.actStep();
    }
    if (co.myfight === 7) {
      this.hspeed = 15;
    }
  }
  actStep() {
    let gZ = this.myself;
    let gT = () => cv.first("obj_herokris");
    let ga = () => cv.first("obj_herosusie");
    let gd = () => cv.first("obj_heroralsei");
    let gO = (gq, go) => cv.with(gq, gQ => {
      gQ.visible = go;
    });
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      co.msg = new Array(100).fill(" ");
      if (this.secondtime === 0) {
        co.msg[0] = "* K.ROUND - AT 9 DF 3&* Check^1?&* That's chess^1, not checkers!/%";
        co.actname[gZ][0] = "Checkers";
        co.flag[246] = 1;
        if (this.checked === 1) {
          co.msg[0] = "* K.ROUND - AT 9 DF 3&* That's better./%";
        }
        this.checked = 1;
      } else {
        if (co.flag[246] === 1) {
          co.msg[0] = "* K.ROUND - AT 9 DF 3&* Watch out for its Flying King attack!/";
          co.msg[1] = "* (Also^1, you need to get the CROWN off of its head.)/%";
        } else {
          co.msg[0] = "* K.ROUND - AT 9 DF 3&* It's being controlled into attacking...!/";
          co.msg[1] = "* (Though^1, wouldn't it just attack anyway...?)/%";
        }
        this.checked = 1;
      }
      cx();
    }
    if (this.acting === 2 && this.actcon === 0) {
      if (this.secondtime === 0) {
        this.crown += 15;
      }
      if (this.secondtime === 1) {
        this.crown += 18;
      }
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* You bowed to K. ROUND./%";
      gO("obj_herokris", false);
      co.faceaction[0] = 0;
      co.charaction[0] = 0;
      let gq = gT();
      this.bowkris = cC(gq ? gq.x : 80, gq ? gq.y : 100, "spr_krisb_bow");
      rL(this.bowkris);
      let go = cG(this.bowkris);
      go.hspeed = 5;
      go.depth = this.bowkris.depth + 1;
      cp("snd_item");
      cx();
      this.actcon = 20;
    }
    if (this.actcon === 20 && !writerExists()) {
      this.visible = false;
      this.bowcheck = cC(this.x, this.y, "spr_checkers_bow");
      this.bowcheck.image_speed = 0.334;
      co.fc = 0;
      co.typer = 4;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* It bowed back^1.&* Its crown loosened a little./%";
      if (this.ralsei_lecture === 0 && this.secondtime === 0) {
        setMsgs("* It bowed back^1.&* Its crown loosened a little./", ralface(0), "* That's it^1, Kris^1! If we can get its crown off.../", "\\E8* It should turn back into a little guy...!/", "\\E0* Susie^1! Help us bow at it!/", susface(0), "* Nah^1, it's crown'll come off.../", "\\E4* When I smash this guy into the GROUND!/", ralface(1), "* .../%");
        this.ralsei_lecture = 1;
      }
      if (this.thrown === 0 && this.secondtime === 1) {
        if (this.bowcounter === 0) {
          co.fc = 2;
          co.fe = 3;
          co.typer = 45;
          setMsgs("* Huh!? That hardly did anything!/", "\\E1* How can we push off that CROWN...?/", susface(1), "* ... Hmm./%");
        }
        if (this.bowcounter === 1) {
          co.fc = 2;
          co.fe = 3;
          co.typer = 45;
          setMsgs("* It's still hardly working!/", "\\E6* Whatever can we do^1, Kris...?/", susface(2), "* ... Hey./%");
        }
        if (this.bowcounter === 2) {
          co.fc = 2;
          co.fe = 8;
          co.typer = 45;
          setMsgs("* Sometimes persistence is key^1, Kris!!/", "\\E6* It'll be hard^1, but we can do it!!/", susface(7), "* HEY YOU GUYS!!!/%");
        }
      }
      this.bowcounter += 1;
      cc();
      this.actcon = 21;
    }
    if (this.actcon === 21 && !writerExists()) {
      if (this.bowkris) {
        this.bowkris.instance_destroy();
      }
      if (this.bowcheck) {
        this.bowcheck.instance_destroy();
      }
      this.visible = true;
      gO("obj_herokris", true);
      this.actcon = 1;
    }
    if (this.secondtime === 0 && this.acting === 3 && this.actcon === 0) {
      this.crown += 20;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* You and Ralsei bowed./%";
      gO("obj_herokris", false);
      gO("obj_heroralsei", false);
      co.faceaction[0] = 0;
      co.charaction[0] = 0;
      co.faceaction[1] = 0;
      co.charaction[1] = 0;
      let gQ = gT();
      let gh = gd();
      this.bowkris = cC(gQ ? gQ.x : 80, gQ ? gQ.y : 100, "spr_krisb_bow");
      rL(this.bowkris);
      let gu = cG(this.bowkris);
      gu.hspeed = 5;
      gu.depth = this.bowkris.depth + 1;
      this.bowral = cC(gh ? gh.x : 80, gh ? gh.y : 180, "spr_ralseib_bow");
      rL(this.bowral);
      gu = cG(this.bowral);
      gu.hspeed = 5;
      gu.depth = this.bowral.depth + 1;
      cp("snd_item");
      cx();
      this.actcon = 30;
    }
    if (this.actcon === 30 && !writerExists()) {
      this.visible = false;
      this.bowcheck = cC(this.x, this.y, "spr_checkers_bow");
      this.bowcheck.image_speed = 0.5;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* K. ROUND bowed back^1.&* Its crown loosened!/%";
      if (this.ralsei_lecture === 0 && this.secondtime === 0) {
        setMsgs("* K. ROUND bowed back^1.&* Its crown loosened!/", ralface(0), "* That's it^1, Kris^1! If we can get its crown off.../", "\\E8* It should turn back into a little guy...!/", "\\E0* Susie^1! Help us bow at it!/", susface(0), "* Nah^1, its crown'll come off.../", "\\E4* When I smash this guy to the GROUND!/", ralface(1), "* .../%");
        this.ralsei_lecture = 1;
      }
      cx();
      this.actcon = 31;
    }
    if (this.actcon === 31 && !writerExists()) {
      if (this.bowral) {
        this.bowral.instance_destroy();
      }
      if (this.bowkris) {
        this.bowkris.instance_destroy();
      }
      if (this.bowcheck) {
        this.bowcheck.instance_destroy();
      }
      this.visible = true;
      gO("obj_heroralsei", true);
      gO("obj_herokris", true);
      this.actcon = 1;
    }
    if (this.secondtime === 1 && this.acting === 3 && this.actcon === 0) {
      if (this.thrown === 1) {
        if (this.trsus) {
          this.trsus.instance_destroy();
        }
        this.thrown = 2;
      }
      if (this.thrown > 0) {
        co.actname[gZ][2] = "Throw";
        co.msg = new Array(100).fill(" ");
        co.msg[0] = "* Press " + rv(6) + " to determine the ANGLE!";
        this.flash = 0;
        this.becomeflash = 0;
        cx();
        this.actcon = 90;
        cL(this.x, this.y, obj_throwtarget);
        let gp = ga();
        this.throwsus = cL(gp ? gp.x : 90, gp ? gp.y : 130, obj_throwralsei);
        this.visible = false;
        co.faceaction[1] = 0;
        co.charaction[1] = 0;
        co.faceaction[2] = 0;
        co.charaction[2] = 0;
        gO("obj_herosusie", false);
        gO("obj_heroralsei", false);
        cp("snd_grab");
      } else {
        co.typer = 31;
        co.fc = 2;
        co.fe = 6;
        setMsgs("* Susie^1? You want to ACT^1? Aww, what's your idea?/", susface(0), "* Umm..^1. well..^1. how do I say this./", "* I kind of..^1.&* Need you for this one./", ralface(8), "* That's fine^1, Susie^1!&* I'll help!/", "\\E0* You want to apologize to it for earlier^1, right?/", susface(2), "* Nah^1, I just need you to stay still./%");
        this.actcon = 10;
        cc();
      }
    }
    if (this.acting === 4 && this.actcon === 0) {
      this.actcon = 1;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* You explained to K. Round about the importance of dodging Susie's attacks./";
      co.msg[1] = "* But it didn't seem to understand.../%";
      if (this.warned === 1) {
        co.msg[0] = "* You started making siren noises with your mouth and looking at Susie./";
        co.msg[1] = "* K. Round still didn't understand.../%";
      }
      if (this.warned === 2) {
        co.msg[0] = "* You started explaining that Susie is really dangerous and strong./";
        co.msg[1] = "* Susie got a large boost to her morale./";
        co.msg[2] = "* Susie's ATTACK went up massively...!/%";
        co.battleat[2] *= 1.5;
      }
      this.warned += 1;
      cx();
    }
    if (this.actcon === 1 && !writerExists()) {
      this.actcon = 0;
      if (this.crown >= 100) {
        co.mercymod[gZ] = 999;
        this.actcon = 50;
      } else {
        c4();
      }
    }
    if (this.actcon === 10 && !writerExists()) {
      this.actcon = 11;
      this.alarm[4] = 30;
      gO("obj_herosusie", false);
      gO("obj_heroralsei", false);
      this.thrown = 1;
      let gf = ga();
      this.trsus = cC(gf ? gf.x : 90, gf ? gf.y : 130, "spr_susieb_throwralseiready");
      cp("snd_grab");
    }
    if (this.actcon === 12) {
      co.fe = 7;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* Kris^1! We gotta get that CROWN off its head!/";
      co.msg[1] = "* Help me throw Ralsei at it!/%";
      cc();
      this.actcon = 13;
    }
    if (this.actcon === 13 && !writerExists()) {
      this.actcon = 0;
    }
    if (this.actcon === 50) {
      this.visible = false;
      this.animtest = cL(this.x, this.y, obj_checker_animtest);
      this.animtest.sprite_index = "spr_smallchecker_transform3";
      this.animtest.image_xscale = 2;
      this.animtest.image_yscale = 2;
      this.animtest.type = 1;
      this.animtest.secondtime = this.secondtime;
      this.actcon = 51;
    }
  }
  draw(gZ) {
    let gT = this.myself;
    if (this.state === 3) {
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (co.monster[gT] === 0) {
          this.hspeed = 12;
          this.turnt -= 8;
          this.vspeed = -4;
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
        this.siner = 0;
        gZ.draw_sprite_ext("spr_checkers_idle", 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      this.thissprite = "spr_checkers_idle";
      if (co.mercymod[gT] >= co.mercymax[gT]) {
        this.thissprite = "spr_checkers_idle";
      }
      gZ.draw_sprite_ext(this.thissprite, this.siner / 3, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        gZ.draw_sprite_white(this.thissprite, this.siner / 3, this.x, this.y, 2, 2, 0, -cD(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
    this.sprite_index = this.thissprite;
    this.image_index = this.siner / 3;
  }
};
x0(B8, "obj_checkers_enemy");
x2(B8, "kinds", cM("obj_checkers_enemy", c8));
x2(B8, "defaultDepth", 90);
x2(B8, "defaultSprite", "spr_checkers_idle");
var obj_checkers_enemy = B8;
var Bc = class en extends c8 {
  create() {
    Object.assign(this, {
      bikeflip: 0,
      becomeflash: 0,
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 5,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      talked: 0,
      attacked: 0,
      hurt: 0,
      hurttimer: 0,
      hurtshake: 0,
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
      thissprite: "spr_smallchecker_idle"
    });
    this.checkhp1 = co.hp[1];
    this.checkhp2 = co.hp[2];
    this.firstturn = 0;
  }
  userEvent(gZ) {
    if (gZ === 12) {
      co.monsterx[this.myself] = this.x + this.sprite_width / 2;
      co.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    super.userEvent(gZ);
  }
  alarmEvent(gZ) {
    if (gZ === 4) {
      this.actcon += 1;
    }
  }
  step() {
    let gZ = this.myself;
    let gT = cv.first("obj_basicattack");
    if (gT) {
      if (gT.sprite_index === "spr_attack_cut1") {
        co.flag[211] = 3;
      }
      if (gT.sprite_index === "spr_attack_slap1") {
        co.flag[211] = 3;
      }
    }
    if (co.monster[gZ] === 1) {
      co.flag[51 + gZ] = 4;
      if (co.mnfight === 1 && this.talked === 0) {
        cd(this);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && co.mnfight === 1) {
        this.rtimer = 0;
        if (cy() && this.talktimer > 5) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          co.mnfight = 2;
        }
      }
      if (co.mnfight === 2 && this.attacked === 0) {
        cv.with("obj_heartblcon", ga => ga.instance_destroy());
        this.rtimer += 1;
        if (this.rtimer === 12) {
          let ga = cu();
          co.turntimer = 1;
          if (ga === 999) {
            let gd = cL(this.x, this.y, obj_spinheart);
            gd.type = 0;
            gd.target = this.mytarget;
            gd.damage = co.monsterat[gZ] * 5;
          }
          this.turns += 1;
          this.attacked = 1;
          co.typer = 6;
          co.fc = 0;
          ga = cN(0);
          if (ga === 0) {
            co.battlemsg[0] = "* C.Round continues to act extremely violent.";
          }
        } else {
          co.turntimer = 1;
        }
      }
      if (co.mnfight === 2 && co.turntimer <= 1) {
        if (cv.exists("obj_hathyfightevent") && this.firstturn === 0 && this.checkhp1 <= co.hp[1] && this.checkhp2 <= co.hp[2]) {
          cv.with("obj_battlecontroller", gO => {
            gO.noreturn = 1;
          });
          cv.with("obj_hathyfightevent", gO => {
            gO.con = 15;
          });
        }
        this.firstturn = 1;
        if (this.battlecancel === 1) {
          co.mercymod[gZ] = 999;
        }
      }
    }
    if (co.myfight === 3) {
      this.actStep();
    }
    if (co.myfight === 7) {
      this.hspeed = 15;
    }
  }
  actStep() {
    let gZ = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* C.ROUND - AT 1 DF 0&* Despite appearances^1, it's trying its best to defeat you./%";
      cx();
    }
    if (this.acting === 2 && this.actcon === 0) {
      setMsgs("* You ordered Susie to flatter the enemy!/", susface(0), "* ... what^1? Why the HELL would I do that?/", "\\E1* IT attacked US^1.&* Let's smash it before it moves./", ralface(0), "* Aww^1, look^1, Susie^1!&* It seems harmless!/", "\\E8* If you act nice^1, we might win without hurting it!/", susface(0), "* .../", "\\E2* ... okay^1, okay./", "\\E1* Hey^1, little guy./", "\\E4* I really like the ax in your face./%");
      this.actcon = 5;
      cx();
    }
    if (this.acting === 3 && this.actcon === 0) {
      this.actcon = 5;
      setMsgs("* You warned C.Round about Susie^1.&* It seems barely cognizant of what that means./", susface(0), "* Hey^1, wait^1.&* Why the hell are you giving the ENEMY advice?/", ralface(6), "* Umm^1, so we don't accidentally hurt it...?/", susface(0), "\\E0* .../", "\\E8* HURTING IT's the point^1, you MORON./", "\\E1* It attacked us^1.&* So it dies^1.&* Simple^1, right?/", ralface(8), "* B-but Susie^1, what if the enemy might be^1, um^1, nice?/", susface(0), "* .../", "\\E2* Okay^1, yeah^1, there's a word for that./", ralface(0), "* Oh^1?&* What is it?/", susface(4), "\\E4* Striking first./%");
      co.monstercomment[gZ] = "(Warned)";
      co.automiss[0] = 1;
      cx();
    }
    if (this.actcon === 1 && !writerExists()) {
      this.actcon = 0;
      c4();
    }
    if (this.actcon === 5 && !writerExists()) {
      co.battleat[1] = 90;
      co.battleat[2] = 90;
      this.actcon = 6;
      cv.with("obj_herosusie", gT => {
        gT.attacktimer = 0;
        gT.state = 1;
        gT.points = 100 + cJ(cU(40));
        co.faceaction[gT.myself] = 0;
        if (co.automiss[0] === 1) {
          gT.points = 0;
        }
      });
      if (co.automiss[0] === 1) {
        this.hspeed = 5;
        co.mercymod[gZ] = 200;
      }
      this.alarm[4] = 50;
    }
    if (this.actcon === 7) {
      co.monster[gZ] = 0;
      setMsgs("* Where'd you get it^1?&* Heh heh heh heh./", ralface(3), "* (Umm^1, Kris^1, maybe I should talk to her...)/%");
      co.flag[211] = 1;
      if (co.automiss[0] === 1) {
        co.flag[211] = 2;
        setMsgs("\\E7* Urgh^1, you IDIOTS^1!&* It got away!/", ralface(3), "* (Wow^1, that was close^1, Kris...)/", "* (M-maybe I should talk to her...)/%");
      }
      cc();
      this.actcon = 1;
    }
  }
  draw(gZ) {
    let gT = this.myself;
    if (this.state === 3) {
      if (co.monsterhp[gT] <= co.monstermaxhp[gT] / 3) {
        co.monsterstatus[gT] = 1;
        if (co.monstercomment[gT] === " ") {
          co.monstercomment[gT] = "(Tired)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (co.monster[gT] === 0) {
          this.hspeed = 12;
          this.turnt -= 8;
          this.vspeed = -4;
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
        gZ.draw_sprite_ext("spr_smallchecker_hurt", 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      this.thissprite = "spr_smallchecker_idle";
      if (co.mercymod[gT] >= co.mercymax[gT]) {
        this.thissprite = "spr_smallchecker_run";
      }
      gZ.draw_sprite_ext(this.thissprite, this.siner / 3, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        gZ.draw_sprite_white(this.thissprite, this.siner / 3, this.x, this.y, 2, 2, 0, -cD(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
x0(Bc, "obj_smallcheckers_enemy");
x2(Bc, "kinds", cM("obj_smallcheckers_enemy", c8));
x2(Bc, "defaultDepth", 90);
x2(Bc, "defaultSprite", "spr_smallchecker_idle");
var obj_smallcheckers_enemy = Bc;
var Br = [{
  id: "cround",
  name: "C.Round",
  chapter: 1,
  area: "Field",
  desc: "C.Round.#Include Susie#in an ACT.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: obj_smallcheckers_enemy,
    type: 9,
    x: 440,
    y: 150,
    setup: setupStatsCRound
  }],
  battlemsg: "* C. Round attacked violently!&* (You recall Ralsei's advice to include Susie in an ACT.)",
  encounterno: 7,
  music: "battle"
}, {
  id: "kround",
  name: "K.Round",
  chapter: 1,
  area: "Field",
  desc: "K.Round.#Bow to loosen#the crown.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: obj_checkers_enemy,
    type: 10,
    x: 480,
    y: 120,
    setup: setupStatsKRound
  }],
  battlemsg: "* Here it comes!",
  encounterno: 12,
  music: "battle"
}, {
  id: "kround2",
  name: "K.Round (Card Castle)",
  chapter: 1,
  area: "Card Castle",
  desc: "K.Round again.#Throw Ralsei at#the crown.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [65, 130, 210],
  monsters: [{
    cls: obj_checkers_enemy,
    type: 21,
    x: 480,
    y: 120,
    setup: setupStatsKRound2
  }],
  battlemsg: "* Here it comes^1. Again.",
  encounterno: 27,
  music: "battle"
}];
x3(obj_checkers_enemy, "G.mnfight = 2;G.mnfight = 2;");
x3(obj_smallcheckers_enemy, "G.mnfight = 2;");
var BB = {};
x1(BB, {
  FIGHTS: () => g6,
  SOUNDS: () => Bw,
  SPRITES: () => BS,
  obj_defeatanim: () => Bl,
  obj_lancerbattle2_event: () => obj_lancerbattle2_event,
  obj_lancerbike: () => obj_lancerbike,
  obj_lancerboss: () => obj_lancerboss,
  obj_lancerboss2: () => obj_lancerboss2,
  obj_lancerboss3: () => obj_lancerboss3,
  setupStats: () => BW,
  setupStats12: () => setupStats12,
  setupStats18: () => setupStats18
});
x4();
var Bg = {};
x1(Bg, {
  FIGHTS: () => Bk,
  SOUNDS: () => BC,
  SPRITES: () => BG,
  obj_afterimage_grow: () => obj_afterimage_grow,
  obj_axebullet: () => obj_axebullet,
  obj_lancerbike_neo: () => obj_lancerbike_neo,
  obj_oflash: () => Bd,
  obj_susieenemy: () => obj_susieenemy,
  setupStats: () => BT
});
x4();
var BG = ["spr_susie_enemy", "spr_susie_enemy_hurt", "spr_susie_enemy_defeat", "spr_susie_enemy_attack", "spr_susiel_dark", "spr_lancerbike", "spr_lancerbike_l", "spr_lancernoise", "spr_axebullet_b", "spr_spadebullet", "spr_ralseib_sing", "spr_battleblcon_long"];
var BC = ["snd_sussurprise", "snd_ralseising1", "snd_ralseising2", "snd_lancerwhistle", "snd_jump", "snd_splat", "snd_laz_c", "snd_lancerhonk", "snd_drive"];
function BX(gZ, ...gT) {
  return gZ.replace(/~(\d)/g, (ga, gd) => String(gT[parseInt(gd) - 1]));
}
x0(BX, "scr_84_get_subst_string");
function scr_lanface(gZ, gT) {
  co.msg[gZ] = BX("\\TX \\F0 \\E~1 \\FL \\TL %", String(gT));
}
x0(scr_lanface, "scr_lanface");
function Bn(gZ) {
  co.msg[gZ] = "\\TX \\F0 \\T0 %";
}
x0(Bn, "scr_noface");
function packFaces() {
  let gZ = [];
  let gT = "";
  for (let ga = 0; ga < 100; ga++) {
    let gd = co.msg[ga];
    if (gd === undefined || gd === " " || gd === "") {
      break;
    }
    if (/^\\TX .*%$/.exec(gd)) {
      let gO = /\\E([0-9A-F])/.exec(gd);
      gT = gO ? "\\E" + gO[1] : "";
      continue;
    }
    gZ.push(gT + gd);
    gT = "";
  }
  co.msg = gZ.concat(new Array(Math.max(0, 100 - gZ.length)).fill(" "));
}
x0(packFaces, "packFaces");
function BT(gZ) {
  let gT = co.itemdf[2][0] + co.itemdf[2][1] + co.itemdf[2][2];
  co.monstername[gZ] = "Susie";
  co.monstermaxhp[gZ] = 120;
  co.monsterhp[gZ] = 120;
  co.monsterat[gZ] = 7;
  co.monsterdf[gZ] = -5 + gT;
  co.monsterexp[gZ] = 0;
  co.monstergold[gZ] = 0;
  co.sparepoint[gZ] = 0;
  co.mercymod[gZ] = 0;
  co.mercymax[gZ] = 100;
  co.canact[gZ][0] = 1;
  co.actname[gZ][0] = "Check";
  co.canact[gZ][1] = 1;
  co.actname[gZ][1] = "Anything";
  co.canact[gZ][2] = 1;
  co.actname[gZ][2] = "Sing";
  co.actactor[gZ][2] = 3;
}
x0(BT, "setupStats");
var Ba = class eZ extends cw {
  create() {
    this.flashspeed = 1;
    this.siner = 0;
    this.target = null;
    this.image_speed = 0;
    this.flashcolor = cW.white;
  }
  draw(gZ) {
    if (cv.exists(this.target)) {
      this.image_index = this.target.image_index;
      this.sprite_index = this.target.sprite_index;
    }
    this.siner += this.flashspeed;
    let gT = cj[this.sprite_index];
    if (gT) {
      let ga = gZ.ctx;
      ga.save();
      ga.globalAlpha = Math.max(0, Math.min(1, cY(this.siner / 3)));
      ga.translate(this.x, this.y);
      ga.scale(this.image_xscale, this.image_yscale);
      ga.drawImage(gZ.tinted(gT, gZ.frame(this.sprite_index, this.image_index), this.flashcolor, true), -gT.ox, -gT.oy);
      ga.restore();
    }
    if (this.siner > 4 && cY(this.siner / 3) < 0) {
      this.instance_destroy();
    }
  }
};
x0(Ba, "obj_oflash");
x2(Ba, "kinds", cM("obj_oflash", cw));
x2(Ba, "defaultDepth", 0);
var Bd = Ba;
function BO(gZ) {
  let gT = cL(gZ.x, gZ.y, Bd);
  gT.image_xscale = gZ.image_xscale;
  gT.image_speed = 0;
  gT.image_index = gZ.image_index;
  gT.image_yscale = gZ.image_yscale;
  gT.sprite_index = gZ.sprite_index;
  gT.depth = gZ.depth - 1;
  gT.target = gZ;
  return gT;
}
x0(BO, "scr_oflash");
var Bq = class eT extends cw {
  create() {
    this.xrate = 0.2;
    this.yrate = 0.2;
    this.fade = 0.1;
  }
  step() {
    this.image_alpha -= this.fade;
    this.image_xscale += this.xrate;
    this.image_yscale += this.yrate;
    if (this.image_alpha < 0) {
      this.instance_destroy();
    }
  }
};
x0(Bq, "obj_afterimage_grow");
x2(Bq, "kinds", cM("obj_afterimage_grow", cw));
x2(Bq, "defaultDepth", 0);
var obj_afterimage_grow = Bq;
var BQ = class ed extends c0 {
  create() {
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.counter = 0;
    this.image_angle = 0;
    this.seizure = 0;
    this.hspeed = -7.6 - cU(1.5);
    this.vspeed = -2 + cU(4);
    this.gravity = 0.13;
    this.gravity_direction = 0;
    this.active = 1;
    this.timepoints = 4;
    this.grazepoints = 4;
    this.damage = 30;
    this.grazed = 0;
  }
  step() {
    if (this.seizure === 0) {
      this.counter += 1;
      if (this.counter >= 3) {
        this.image_angle += 45;
        this.counter = 0;
      }
    }
    if (this.seizure === 1) {
      this.image_angle += 10;
    }
    if (this.x >= 700) {
      this.instance_destroy();
    }
  }
};
x0(BQ, "obj_axebullet");
x2(BQ, "kinds", cM("obj_axebullet", c0));
x2(BQ, "defaultDepth", 2);
x2(BQ, "defaultSprite", "spr_axebullet_b");
var obj_axebullet = BQ;
var Bu = class eO extends c1 {
  create() {
    this.grazed = 0;
    this.grazepoints = 4;
    this.timepoints = 0;
    this.target = 0;
    this.dont = 1;
    this.inv = 60;
    this.damage = 20;
    this.spec = 0;
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.loop = 0;
    this.lcon = 0;
    this.flip = 0;
    this.ltimer = 0;
    this.btimer = 0;
    this.racecon = 0;
    this.topy = 100;
    this.bottomy = 300;
    this.susiex = this.x - 100;
    this.susiey = this.y - 180;
    let gZ = cv.first("obj_susieenemy");
    if (gZ) {
      this.susiex = gZ.x;
      this.susiey = gZ.y;
    }
    this.s_tracking = 0;
    this.s_attack = 0;
    this.s_timer = 0;
    this.type = 0;
  }
  userEvent(gZ) {
    if (gZ === 5) {
      cq(this);
    }
  }
  step() {
    let gZ = cv.first("obj_heart");
    if (this.racecon === 0) {
      this.orx = this.x;
      this.ory = this.y;
      this.ang = 0;
      this.vdir = cN(1, -1);
      this.racecon = 1;
      this.rtimer = 0;
      cv.with("obj_susieenemy", gd => {
        gd.visible = false;
      });
      let ga = cL(this.susiex, this.susiey, c2);
      this.s = ga;
      s(this, ga);
      ga.wall_destroy = 0;
      ga.sprite_index = "spr_susiel_dark";
      ga.image_xscale = 2;
      ga.image_yscale = 2;
      ga.active = 1;
      ga.depth = this.depth - 1;
      ga.image_speed = 0;
      ga.image_index = 1;
      ga.lx = this.x;
      ga.ly = this.y - 108;
      cp("snd_jump");
      ga.hspeed = -2;
      ga.vspeed -= 7;
      ga.gravity = 1;
    }
    let gT = this.s;
    if (this.racecon === 1) {
      this.siner = 0;
      this.rtimer += 1;
      if (this.rtimer === 13) {
        cf("snd_jump");
        cp("snd_splat");
      }
      if (this.rtimer >= 13) {
        this.image_xscale += 0.1;
        this.image_yscale -= 0.15;
      }
      if (this.rtimer === 16) {
        gT.speed = 0;
        gT.gravity = 0;
        gT.image_index = 0;
        this.sfitx = gT.x - this.x;
        this.sfity = gT.y - this.y;
        this.s_tracking = 1;
        this.ax_timer = 0;
        this.s_timer = 0;
        this.racecon = 2;
        this.rtimer = 0;
      }
    }
    if (this.s_attack === 1) {
      this.ax_timer += 1;
      this.s_timer += 1;
      if (this.s_timer === 1) {
        let gd = cL(gT.x - 40, gT.y - 15, obj_axebullet);
        s(this, gd);
        gd.depth = this.depth + 2;
        gd.hspeed = -16;
        if ((gZ ? gZ.y : 170) >= gd.y) {
          gd.gravity_direction = -15 + cU(10);
          gd.vspeed = 2;
        } else {
          gd.gravity_direction = 5 + cU(10);
          gd.vspeed = -2;
        }
        gd.gravity = 0.5;
        gd.hspeed += this.ax_timer * 0.3;
        cp("snd_laz_c");
        gT.sprite_index = "spr_susie_enemy_attack";
        gT.active = 0;
        gT.image_index = 0;
        gT.image_speed = 0.5;
      }
      if (this.s_timer === 4) {
        gT.active = 0;
      }
      if (this.s_timer === 8) {
        gT.image_speed = 0;
      }
      if (this.s_timer === 8 && this.ax_timer <= 60) {
        this.s_timer = 0;
      }
    }
    if (this.racecon === 2) {
      this.rtimer += 1;
      if (this.rtimer >= 1 && (this.y <= this.ory - 120 || this.y >= this.ory + 120)) {
        if (this.y <= this.ory - 120 && this.vspeed < 0) {
          this.vspeed = -this.vspeed;
        }
        if (this.y >= this.ory + 120 && this.vspeed > 0) {
          this.vspeed = -this.vspeed;
        }
      }
      if (this.rtimer === 5 || this.rtimer === 10) {
        this.vspeed = 0;
        cp("snd_lancerhonk");
        let gO = cL(this.x - 60, this.y - 40, obj_afterimage_grow);
        gO.sprite_index = "spr_lancernoise";
      }
      if (this.rtimer === 30) {
        this.active = 1;
        this.s_attack = 1;
        this.racecon = 3;
        this.rtimer = 0;
        this.ang = 0;
        cp("snd_drive");
        this.hspeed = -10;
        this.vspeed = -11;
        this.gravity = 0.5;
      }
    }
    if (this.racecon === 3) {
      this.rtimer += 1;
      if (this.x <= -40) {
        this.speed = 0;
        this.gravity = 0;
        this.friction = 0;
        this.s_attack = 0;
        this.s_tracking = 0;
        this.image_xscale = 2;
        this.image_yscale = 2;
        this.x = 740;
        this.y = this.ory;
        gT.x = this.susiex + 200;
        gT.hspeed = -8;
        gT.y = this.susiey;
        gT.sprite_index = "spr_susie_enemy";
        this.hspeed = -6;
        this.racecon = 4;
      }
    }
    if (this.racecon === 4) {
      let gq = 0;
      if (gT.x <= this.susiex) {
        gq += 1;
        gT.hspeed = 0;
        gT.x = this.susiex;
      }
      if (this.x <= this.orx + 5) {
        gq += 1;
        this.hspeed = 0;
        this.x = this.orx;
      }
      if (gq >= 2) {
        co.turntimer = 5;
        cv.with("obj_susieenemy", go => {
          go.visible = true;
        });
        cv.with("obj_lancerboss3", go => {
          go.visible = true;
        });
        this.racecon = -1;
      }
    }
    if (this.s_tracking === 1) {
      gT.x = this.x + this.sfitx;
      gT.y = this.y + this.sfity;
    }
  }
};
x0(Bu, "obj_lancerbike_neo");
x2(Bu, "kinds", cM("obj_lancerbike_neo", c1));
x2(Bu, "defaultDepth", -20);
x2(Bu, "defaultSprite", "spr_lancerbike");
var obj_lancerbike_neo = Bu;
i({
  20: (gZ, {
    heart: gT
  }) => {
    if (cv.exists("obj_lancerboss3")) {
      if (gZ.made === 0) {
        cp("snd_lancerwhistle");
        gZ.whistletimer = 0;
        gZ.made = 1;
        cv.with("obj_lancerboss3", ga => {
          ga.idlesprite = "spr_lancerbike_l";
        });
      }
      if (gZ.made === 1) {
        gZ.whistletimer += 1;
        if (gZ.whistletimer >= 30) {
          cv.with("obj_lancerboss3", ga => {
            ga.idlesprite = "spr_lancerbike";
          });
          gZ.made = 2;
        }
      }
    }
    if (gZ.btimer >= 8) {
      let ga = -80 + cU(160) + 8;
      let gd = cL((gT ? gT.x : 320) + ga, -20, c1);
      if (!gd.destroyed) {
        gd.damage = gZ.damage;
        gd.target = gZ.target;
        gd.sprite_index = "spr_spadebullet";
        gd.image_angle = 270;
        gd.gravity = 0.3;
        gd.speed = 0;
        gd.vspeed = 3;
        gd.hspeed = -0.6 + cU(1.2);
      }
      if (gZ.side === 1) {
        gZ.side = -1;
      } else {
        gZ.side = 1;
      }
      gZ.btimer = 0;
    }
  },
  85: (gZ, {
    bsy: gT
  }) => {
    if (gZ.made === 0) {
      gZ.cheer = 0;
      gZ.cheertimer = 0;
      gZ.remhp = [co.hp[co.char[0]], co.hp[co.char[1]]];
      cv.with("obj_susieenemy", gO => {
        gO.visible = false;
      });
      cv.with("obj_lancerboss3", gO => {
        gO.visible = false;
      });
      let ga = cL(580, gT + 160, H);
      gZ.fakelan = ga;
      ga.depth += 1;
      ga.image_xscale = 2;
      ga.image_yscale = 2;
      ga.visible = true;
      ga.sprite_index = "spr_lancerbike";
      ga.active = 0;
      ga.image_speed = 0.2;
      let gd = cL(530, gT - 40, H);
      gZ.fakesus = gd;
      gd.image_xscale = 2;
      gd.image_yscale = 2;
      gd.visible = true;
      gd.sprite_index = "spr_susie_enemy_attack";
      gd.active = 0;
      gd.image_speed = 0;
      gZ.made = 1;
    }
    if (gZ.made === 1) {
      if (cv.exists(gZ.fakelan)) {
        if (gZ.cheer === 0 && co.inv > 10) {
          gZ.cheer = 1;
          cp("snd_lancerwhistle");
          gZ.fakelan.sprite_index = "spr_lancerbike_l";
        }
        if (gZ.cheer === 1) {
          gZ.cheertimer += 1;
          if (gZ.cheertimer >= 30) {
            gZ.cheertimer = 0;
            gZ.fakelan.sprite_index = "spr_lancerbike";
            gZ.cheer = 0;
          }
        }
      }
      if (cv.exists(gZ.fakesus) && gZ.fakesus.image_index < 5) {
        gZ.fakesus.image_index += 0.334;
      }
    }
    if (gZ.made === 1 && co.turntimer <= 10) {
      if (cv.exists(gZ.fakesus)) {
        gZ.fakesus.visible = false;
      }
      if (cv.exists(gZ.fakelan)) {
        gZ.fakelan.visible = false;
      }
      cv.with("obj_susieenemy", gO => {
        gO.visible = true;
      });
      cv.with("obj_lancerboss3", gO => {
        gO.visible = true;
      });
    }
    if (gZ.btimer >= 27 && cv.exists("obj_battlesolid") && co.turntimer > 10) {
      if (cv.exists(gZ.fakesus)) {
        gZ.fakesus.image_index = 0;
        cp("snd_laz_c");
      }
      for (let gO = 0; gO < 1; gO += 1) {
        let gq = cL(540, gT, obj_axebullet);
        s(gZ, gq);
      }
      gZ.btimer = 0;
    }
  }
});
var Bf = class eq extends c8 {
  create() {
    co.turntimer = 0;
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
      idlesprite: "spr_susie_enemy",
      hurtsprite: "spr_susie_enemy_hurt",
      sparedsprite: "spr_susie_enemy",
      attacktype: 0,
      sleeping: 0,
      sleepcounter: 99,
      lullabied: 0,
      lancer_act: 0,
      susie_act: 0,
      lancer_hurt: 0,
      pacifycon: 0,
      defeated: 0,
      lancerhurt: 0,
      anythingcounter: 0,
      anythingxcounter: 0,
      tirespare: 0,
      ears_blocked: 0,
      susie_anythingcounter: 0,
      rtimer: 0,
      shakex: 0,
      pacifytimer: 0,
      lullatimer: 0
    });
  }
  alarmEvent(gZ) {
    if (gZ === 4) {
      this.con += 1;
    }
  }
  userEvent(gZ) {
    if (gZ === 1) {
      this.talk();
      return;
    }
    if (gZ !== 11) {
      if (gZ === 12) {
        co.monsterx[this.myself] = this.x + 20;
        co.monstery[this.myself] = this.y + (this.sprite_height || 90) / 2;
        return;
      }
      super.userEvent(gZ);
    }
  }
  talk() {
    let gZ = this.myself;
    if (co.mnfight === 1 && this.talked === 0) {
      let gT = 0;
      this.sleepcounter += 1;
      if (this.sleepcounter >= 3 && this.sleeping === 1) {
        this.sleeping = 0;
        this.idlesprite = "spr_susie_enemy";
        co.monstercomment[gZ] = "(Awake)";
        co.monsterstatus[gZ] = 0;
        this.sleepcounter = 99;
        gT = 1;
      }
      if (this.sleeping === 0) {
        cd(this);
      }
      if (!cv.exists("obj_darkener")) {
        cL(0, 0, cZ);
      }
      co.typer = 53;
      co.msg = new Array(100).fill(" ");
      let ga = cN(0, 1, 2, 3);
      if (ga === 0) {
        co.msg[0] = "Heh,&scared?";
      }
      if (ga === 1) {
        co.msg[0] = "Weasel&out of&THIS!";
      }
      if (ga === 2) {
        co.msg[0] = "Talk your&way out of&THIS!";
      }
      if (ga === 3) {
        co.msg[0] = "Think&fast!";
      }
      if (this.lancer_hurt === 0 && co.monsterhp[1] <= co.monstermaxhp[1] * 0.5) {
        this.lancer_hurt = 1;
        if (co.monsterhp[gZ] === co.monstermaxhp[gZ]) {
          co.msg[0] = "Hey^1, stop&ganging up&on him!";
        } else {
          co.msg[0] = "Hey^1, stop&hitting&him!";
        }
      }
      if (this.acting === 2) {
        if (this.anythingcounter === 1) {
          co.msg[0] = "No way!&Shut up and&fight!!!";
        }
        if (this.anythingcounter === 2) {
          co.msg[0] = "Really?&...&Shut up and&fight!!!";
        }
        if (this.anythingcounter === 3) {
          co.msg[0] = "What are&you even&doing?";
        }
        if (this.anythingcounter === 4) {
          co.msg[0] = " Really...?&No way, I&don't see&anything!";
        }
        if (this.anythingcounter >= 5) {
          co.msg[0] = "Yeah, it's&hopeless.";
        }
      }
      if (this.lancer_act === 3) {
        if (this.anythingxcounter === 1) {
          co.msg[0] = "Flattery&won't&work on&US!!!";
        }
        if (this.anythingxcounter === 2) {
          co.msg[0] = "THAT'S&THE&POINT!!!";
        }
        if (this.anythingxcounter === 3) {
          co.msg[0] = "Huh...?&I mean...&NO!!!";
        }
        if (this.anythingxcounter >= 4) {
          co.msg[0] = "Heh,&score for&the BAD&GUYS!";
        }
      }
      if (this.sleeping === 1) {
        co.msg[0] = "(Zzzz...)";
      }
      if (gT === 1) {
        co.msg[0] = "(Yawn)&I'm awake,&did I miss&anything?";
      }
      gT = 0;
      this.lancer_act = 0;
      cr(this.x - 160, this.y, 3);
      this.talked = 1;
      this.talktimer = 0;
    }
  }
  step() {
    let gZ = this.myself;
    if (co.monster[gZ] === 1 && this.defeated === 0) {
      co.flag[51 + gZ] = 4;
      this.userEvent(1);
      if (this.talked === 1 && co.mnfight === 1) {
        this.rtimer = 0;
        if (cy() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer++;
        if (this.talktimer >= this.talkmax) {
          cv.with("obj_writer", gT => gT.instance_destroy());
          co.mnfight = 2;
        }
        if (co.mnfight === 2) {
          if (!cv.exists("obj_moveheart")) {
            cn();
          }
          if (!cv.exists("obj_growtangle")) {
            cL(320, 170, cX);
          }
        }
      }
      if (co.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          co.turntimer = 180;
          if (this.attacktype === 2) {
            let ga = cL(this.x + this.sprite_width / 2, this.y + this.sprite_height / 2, v);
            ga.type = 85;
            ga.target = this.mytarget;
            ga.damage = co.monsterat[gZ] * 5;
            ga.timepoints = 3;
            ga.grazepoints = 5;
            if (this.sleeping === 1) {
              ga.instance_destroy();
            }
          }
          if (this.attacktype === 1) {
            let gd = cL(this.x, this.y, v);
            gd.type = 20;
            gd.target = this.mytarget;
            gd.damage = co.monsterat[gZ] * 5;
            gd.timepoints = 3;
            gd.grazepoints = 3;
            if (this.sleeping === 1) {
              gd.instance_destroy();
            }
          }
          if (this.attacktype === 0 && this.sleeping === 0) {
            let gO = cv.first("obj_lancerboss3");
            let gq = cL(gO ? gO.x : this.x + 20, gO ? gO.y : this.y + 160, obj_lancerbike_neo);
            cv.with("obj_lancerboss3", go => {
              go.visible = false;
            });
            gq.target = this.mytarget;
            gq.damage = co.monsterat[gZ] * 5;
            co.turntimer = 999;
          }
          this.attacktype += 1;
          if (this.attacktype >= 3) {
            this.attacktype = 0;
          }
          this.turns += 1;
          this.attacked = 1;
          co.typer = 6;
          co.fc = 0;
          let gT = cN(0, 1, 2, 3, 4);
          co.battlemsg[0] = "* Susie and Lancer are making fun of you.";
          if (gT === 1) {
            co.battlemsg[0] = "* Susie and Lancer are gloating about how great their team is.";
          }
          if (gT === 2) {
            co.battlemsg[0] = "* Susie and Lancer are having an evil laugh contest.";
          }
          if (gT === 3) {
            co.battlemsg[0] = "* Susie and Lancer are coming up with victory celebration plans.";
          }
          if (gT === 4) {
            co.battlemsg[0] = "* Smells like teamwork.";
          }
        } else {
          co.turntimer = 120;
        }
      }
      if (co.mnfight === 2 && co.turntimer <= 1) {
        if (this.battlecancel === 1) {
          co.mercymod[gZ] = 999;
        }
        if (this.battlecancel === 2) {
          cv.with("obj_battlecontroller", go => {
            go.noreturn = 1;
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
      co.typer = 50;
      co.mercymod[gZ] = 999;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "Alright^1,&you convinced&me!!/%";
      cr(this.x - 160, this.y, 3);
      this.con = 4;
    }
    if (this.con === 4 && !cv.exists("obj_writer")) {
      this.hspeed = 15;
      this.con = 5;
      this.alarm[4] = 15;
      cv.with("obj_battlecontroller", go => {
        go.alarm[2] = 17;
      });
    }
    if (this.con === 6) {
      cv.with("obj_battlecontroller", go => {
        go.noreturn = 0;
      });
      this.scr_monsterdefeat();
      this.instance_destroy();
      this.con = 7;
    }
    if (co.myfight === 3) {
      this.actStep();
    }
    if (this.pacifycon > 0) {
      co.spelldelay = 999;
      cv.with("obj_spellphase", go => {
        if (go.spelltimer > 30) {
          go.spelltimer = 30;
        }
      });
    }
    if (this.pacifycon === 1) {
      let go = cv.first("obj_spellphase");
      if (go && go.spelltimer >= 15) {
        this.pacifytimer = 0;
        this.pacifycon = 2;
        cv.with("obj_lancerboss3", gQ => {
          gQ.visible = false;
        });
        this.temp_l = cC(this.x - 40, this.y + this.sprite_height, "spr_lancerbike");
        this.temp_l.depth = this.depth - 2;
      }
    }
    if (this.pacifycon === 2) {
      cp("snd_lancerwhistle");
      if (cv.exists(this.temp_l)) {
        let gQ = BO(this.temp_l);
        gQ.flashcolor = cW.blue;
      }
      this.pacifycon = 3;
    }
    if (this.pacifycon === 3) {
      this.pacifytimer += 1;
      if (this.pacifytimer >= 30 && !cv.exists("obj_writer")) {
        if (cv.exists(this.temp_l)) {
          this.temp_l.instance_destroy();
        }
        cv.with("obj_lancerboss3", gh => {
          gh.visible = true;
        });
        this.pacifycon = 4;
        cv.with("obj_monsterparent", gh => {
          gh.susie_act = 9;
        });
        co.msg = new Array(100).fill(" ");
        co.msg[0] = "* (The PACIFY spell was absorbed by Lancer's bike!)/";
        scr_lanface(1, 3);
        co.msg[2] = "* I'll never let you SPARE my friends!!!/";
        Bn(3);
        co.msg[4] = "* (Lancer's BIKE began to get tired??????????????)/%";
        if (this.tirespare === 1) {
          co.msg[0] = "* (The PACIFY spell was absorbed by Lancer's bike!)/";
          co.msg[1] = "* (The WHEEL of the BIKE became SPARED!)/";
          co.msg[2] = "* (It turned into a SPARED TIRE!)/";
          co.msg[3] = "* (... that didn't do anything though.)/";
          co.msg[4] = "* (Seems that PACIFYing won't work!)/%";
        }
        if (this.tirespare >= 2) {
          co.msg[0] = "* (The PACIFY spell was absorbed by Lancer's bike!)/";
          co.msg[1] = "* (Seems that nothing else interesting will happen!)/%";
        }
        packFaces();
        cx();
        this.pacifycon = 5;
        this.tirespare += 1;
      }
    }
    if (this.pacifycon === 5 && !cv.exists("obj_writer")) {
      co.spelldelay = 20;
      cv.with("obj_spellphase", gh => {
        gh.spelltimer = 18;
      });
      this.pacifycon = 0;
    }
  }
  actStep() {
    let gZ = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      let gT = co.itemdf[2][0] + co.itemdf[2][1] + co.itemdf[2][2];
      let ga = co.itemat[2][0] + co.itemat[2][1] + co.itemat[2][2];
      let gd = String(co.df[2] + gT);
      let gO = String(co.at[2] + ga);
      let gq = String(co.maxhp[2]);
      co.msg = new Array(100).fill(" ");
      co.msg[0] = BX("* SUSIE - AT:~1 DF:~2 HP:~3&* If you read the status screen^1, you already knew that./%", gO, gd, gq);
      if (gT > 0) {
        co.msg[0] = BX("* SUSIE - AT:~1 DF:~2 HP:~3&* The armor you equipped her with just made her tougher!/%", gO, gd, gq);
      }
      cx();
    }
    if (this.acting === 2 && this.actcon === 0) {
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* You tried convincing Susie not to fight./";
      if (this.anythingcounter === 1) {
        co.msg[0] = "* You tried telling Susie you like her hair./";
      }
      if (this.anythingcounter === 2) {
        co.msg[0] = "* You growled at Susie like a bear./";
      }
      if (this.anythingcounter === 3) {
        co.msg[0] = "* You told Susie you'd give her a picnic basket of worms./";
      }
      if (this.anythingcounter >= 4) {
        co.msg[0] = "* You have no idea what to do what to Susie anymore./";
      }
      co.msg[1] = "* There was no effect!/%";
      if (this.anythingcounter >= 1) {
        co.msg[1] = "* It seems this command is a total waste of time!/%";
      }
      cx();
      this.anythingcounter += 1;
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      cv.with("obj_monsterparent", gQ => {
        gQ.susie_act = 3;
      });
      if (this.lullabied === 0) {
        this.singy = "snd_ralseising1";
        cp("snd_ralseising1");
        cv.with("obj_susieenemy", gQ => {
          gQ.lullabied = 1;
        });
      } else {
        this.singy = "snd_ralseising2";
        cp("snd_ralseising2");
        cv.with("obj_susieenemy", gQ => {
          gQ.lullabied = 0;
        });
      }
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* Ralsei sang a soft and entrancing lullaby!/%";
      let go = cv.first("obj_heroralsei");
      if (go) {
        go.visible = false;
      }
      this.ralsing = cC(go ? go.x : 80, go ? go.y : 180, "spr_ralseib_sing");
      this.ralsing.image_speed = 0.2;
      this.lullatimer = 0;
      cx();
      this.actcon = 10;
    }
    if (this.actcon === 10) {
      this.lullatimer += 1;
      if (this.lullatimer >= 30) {
        this.actcon = 11;
      }
    }
    if (this.actcon === 11 && !cv.exists("obj_writer")) {
      if (cv.exists(this.ralsing)) {
        this.ralsing.instance_destroy();
      }
      cv.with("obj_heroralsei", gQ => {
        gQ.visible = true;
      });
      cf(this.singy);
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* SUSIE fell asleep!/%";
      if (this.sleeping === 1) {
        co.msg[0] = "* But SUSIE was already asleep...!/%";
      }
      this.idlesprite = "spr_susie_enemy_defeat";
      this.sleepcounter = 0;
      this.sleeping = 1;
      co.monstercomment[gZ] = "(Asleep)";
      co.monsterstatus[gZ] = 1;
      cx();
      this.actcon = 1;
    }
    if (this.actcon === 1 && !cv.exists("obj_writer")) {
      this.actcon = 0;
      c4();
    }
  }
  draw(gZ) {
    let gT = this.myself;
    if (this.state === 3) {
      this.sleepcounter = 99;
      this.sleeping = 0;
      co.monstercomment[gT] = "(Awake)";
      co.monsterstatus[gT] = 0;
      this.idlesprite = "spr_susie_enemy";
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (co.monster[gT] === 0) {
          cp("snd_sussurprise");
          this.visible = false;
          this.instance_destroy();
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
        gZ.draw_sprite_ext(this.hurtsprite, 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.siner += 1;
      let ga = this.idlesprite;
      if (co.mercymod[gT] >= co.mercymax[gT]) {
        ga = this.idlesprite;
      }
      gZ.draw_sprite_ext(ga, this.siner / 6, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner += 1;
        gZ.draw_sprite_white(ga, this.siner / 6, this.x, this.y, 2, 2, 0, -cD(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
x0(Bf, "obj_susieenemy");
x2(Bf, "kinds", cM("obj_susieenemy", c8));
x2(Bf, "defaultDepth", 95);
x2(Bf, "defaultSprite", "spr_susie_enemy");
var obj_susieenemy = Bf;
var Bk = [{
  id: "susie",
  name: "Susie",
  chapter: 1,
  area: "Field",
  desc: "Two bad guys#blocked the way!#(Susie only)",
  party: [1, 3, 0],
  heromakex: [80, 80, 80],
  heromakey: [100, 180, 210],
  monsters: [{
    cls: obj_susieenemy,
    type: 19,
    x: 520,
    y: 80,
    setup: BT
  }],
  battlemsg: "* Two bad guys blocked the way!",
  encounterno: 31,
  music: "lancerfight"
}];
x3(obj_susieenemy, "G.mnfight = 2;");
var BS = ["spr_lancerbike", "spr_lancerbike_l", "spr_lancerbike_hurt", "spr_lancerbike_earcover", "spr_lancernoise", "spr_lancer_battle", "spr_lancer_battle_hurt", "spr_spadebullet", "spr_susieb_idle_serious", "spr_susieb_attack_serious", "spr_defeatsweat", "spr_susieb_idle", "spr_susieb_attack", "spr_pixel_white"];
var Bw = ["snd_cardrive", "snd_spearrise", "snd_lancerhonk", "snd_drive", "snd_laz_c", "snd_bell", "snd_power", "snd_lancerwhistle", "snd_defeatrun", "snd_txtlan", "snd_txtsus"];
var BM = {
  32: ["fnt_mainbig", cW.white, 1, "snd_txtlan", 16, 36],
  46: ["fnt_mainbig", cW.white, 1, "snd_txtlan", 16, 28],
  53: ["fnt_dotumche", cW.black, 1, "snd_txtsus", 9, 20],
  54: ["fnt_dotumche", cW.black, 2, "snd_txtsus", 9, 20]
};
function scr_texttype_fix(gZ) {
  let gT = BM[co.typer];
  if (!!gZ && !!gT) {
    [gZ.myfont, gZ.mycolor, gZ.rate, gZ.textsound, gZ.hspace, gZ.vspace] = gT;
    gZ.xcolor = gZ.mycolor;
  }
  return gZ;
}
x0(scr_texttype_fix, "scr_texttype_fix");
function BW(gZ) {
  co.monstername[gZ] = "Lancer";
  co.monstermaxhp[gZ] = 540;
  co.monsterhp[gZ] = 540;
  co.monsterat[gZ] = 5;
  co.monsterdf[gZ] = 1;
  co.monsterexp[gZ] = 0;
  co.monstergold[gZ] = 20;
  co.sparepoint[gZ] = 10;
  co.mercymod[gZ] = 0;
  co.mercymax[gZ] = 100;
  co.canact[gZ][0] = 1;
  co.actname[gZ][0] = "Check";
  co.canact[gZ][1] = 1;
  co.actname[gZ][1] = "Warning";
  co.canact[gZ][2] = 1;
  co.actname[gZ][2] = "Compliment";
  co.battlemsg[0] = "* Lancer busts in!";
}
x0(BW, "setupStats");
function setupStats12(gZ) {
  co.monstername[gZ] = "Lancer";
  co.monstermaxhp[gZ] = 2400;
  co.monsterhp[gZ] = 2400;
  co.monsterat[gZ] = 4;
  co.monsterdf[gZ] = -40;
  co.monsterexp[gZ] = 0;
  co.monstergold[gZ] = 0;
  co.sparepoint[gZ] = 0;
  co.mercymod[gZ] = 0;
  co.mercymax[gZ] = 100;
  co.canact[gZ][0] = 1;
  co.actname[gZ][0] = "Check";
}
x0(setupStats12, "setupStats12");
function setupStats18(gZ) {
  co.monstername[gZ] = "Lancer";
  co.monstermaxhp[gZ] = 800;
  co.monsterhp[gZ] = 800;
  co.monsterat[gZ] = 6;
  co.monsterdf[gZ] = 1;
  co.monsterexp[gZ] = 0;
  co.monstergold[gZ] = 0;
  co.sparepoint[gZ] = 0;
  co.mercymod[gZ] = 0;
  co.mercymax[gZ] = 100;
  co.canact[gZ][0] = 1;
  co.actname[gZ][0] = "Check";
  co.canact[gZ][1] = 1;
  co.actname[gZ][1] = "Anything";
  co.canact[gZ][2] = 1;
  co.actname[gZ][2] = "X-Anything";
  co.actactor[gZ][2] = 3;
}
x0(setupStats18, "setupStats18");
var BR = x0((gZ, gT) => {
  co.msg[gZ] = "\\TX \\F0 \\E" + gT + " \\FS \\TS %";
}, "scr_susface");
var BK = x0((gZ, gT) => {
  co.msg[gZ] = "\\TX \\F0 \\E" + gT + " \\FL \\TL %";
}, "scr_lanface");
var BU = x0((gZ, gT) => {
  co.msg[gZ] = "\\TX \\F0 \\E" + gT + " \\FR \\TR %";
}, "scr_ralface");
var BN = x0(gZ => {
  co.msg[gZ] = "\\TX \\F0 \\T0 %";
}, "scr_noface");
function BH() {
  let gZ = [];
  let gT = "";
  for (let ga = 0; ga < 100; ga++) {
    let gd = co.msg[ga];
    if (gd === undefined || gd === " " || gd === "") {
      break;
    }
    if (/^\\TX .*%$/.exec(gd)) {
      let gO = /\\E([0-9A-F])/.exec(gd);
      gT = gO ? "\\E" + gO[1] : "";
      continue;
    }
    gZ.push(gT + gd);
    gT = "";
  }
  co.msg = new Array(100).fill(" ");
  gZ.forEach((gq, go) => {
    co.msg[go] = gq;
  });
}
x0(BH, "packFaces");
var Bb = ["* Lancer's riding it out.", "* Lancer is thinking about chips.", "* Lancer's motorcycle is actually just a bike that's on fire.", "* Lancer switches gears randomly to appear competent.", "* Lancer revs viciously."];
var Bz = class eo extends cw {
  create() {
    this.t = 0;
    this.g = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.redup = 0;
    this.bsize = 6;
    cp("snd_defeatrun");
  }
  draw(gZ) {
    if (this.t === 0) {
      this.draw_self(gZ);
    }
    let gT = 0;
    if (this.g <= 5) {
      gT = 1;
    }
    if (this.g >= 9 && this.g <= 13) {
      gT = 1;
    }
    if (gT === 1) {
      gZ.draw_sprite("spr_defeatsweat", 0, this.x - 6, this.y - 6);
    }
    if (this.t >= 1) {
      for (let ga = 0; ga <= 80; ga++) {
        gZ.draw_sprite_ext(this.sprite_index, this.image_index, this.x + ga * 4, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, Math.max(0, 0.4 - this.t / 8 + ga / 200));
      }
      if (this.t >= 15) {
        this.instance_destroy();
      }
    }
  }
  step() {
    this.g++;
    if (this.g >= 15) {
      this.t++;
    }
  }
};
x0(Bz, "obj_defeatanim");
x2(Bz, "kinds", cM("obj_defeatanim", cw));
x2(Bz, "defaultDepth", 0);
var Bl = Bz;
function BL(gZ) {
  let gT = cL(gZ.x, gZ.y, Bl);
  gT.sprite_index = gZ.hurtsprite;
  gT.image_index = 0;
  gT.image_xscale = gZ.image_xscale;
  gT.image_yscale = gZ.image_yscale;
  gZ.instance_destroy();
}
x0(BL, "scr_defeatrun");
var BJ = class eQ extends c1 {
  create() {
    this.grazed = 0;
    this.grazepoints = 10;
    this.timepoints = 0;
    this.target = 0;
    this.dont = 1;
    this.inv = 60;
    this.damage = 20;
    this.spec = 0;
    if (co.hp[1] <= co.maxhp[1] / 2) {
      this.damage = 10;
    }
    if (co.hp[1] <= co.maxhp[1] / 4) {
      this.damage = 5;
    }
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.loop = 0;
    this.lcon = 0;
    this.flip = 0;
    this.ltimer = 0;
    this.btimer = 0;
    this.endcon = 0;
    this.racecon = 0;
    this.topy = 120;
    this.bottomy = 250;
  }
  userEvent(gZ) {
    if (gZ === 5) {
      if (this.target === 0 && co.hp[1] <= co.maxhp[1] / 2) {
        this.damage = cm(co.hp[1] / 3);
      }
      cq(this);
    }
  }
  step() {
    let gZ = cv.first("obj_heart");
    if (this.lcon === 1) {
      this.orx = this.x;
      this.ory = this.y;
      this.ang = 0;
      this.ltimer = 0;
      this.shrinktimer = 0;
      this.lcon = 1.5;
    }
    if (this.lcon === 1.5) {
      this.ltimer++;
      if (this.ltimer >= 10) {
        this.ltimer = 0;
        this.lcon = 2;
        cp("snd_cardrive");
      }
    }
    if (this.lcon >= 6 && this.lcon < 10 && (this.btimer++, this.btimer >= 10)) {
      let gT = cH(40, this.image_angle - 20);
      let ga = cb(40, this.image_angle - 20);
      cp("snd_spearrise");
      let gd = cL(this.x - gT, this.y - ga, c1);
      if (!gd.destroyed) {
        gd.target = this.target;
        gd.damage = this.damage;
        if (gd.target === 0 && co.hp[1] <= co.maxhp[1] / 2) {
          gd.damage = cm(co.hp[1] / 3);
        }
        gd.timepoints = 0;
        gd.sprite_index = "spr_spadebullet";
        gd.move_towards_point(gZ ? gZ.x + 8 : 320, gZ ? gZ.y + 8 : 170, 4);
        gd.image_angle = gd.direction;
        gd.friction = -0.4;
        gd.depth = this.depth + 1;
      }
      this.btimer = 0;
    }
    if (this.lcon === 2) {
      this.ltimer++;
      this.shrinktimer++;
      this.hspeed = cY(this.ltimer / 3) * 5;
      this.image_yscale = 2 - cY(this.ltimer / 5) * 1;
      if (this.shrinktimer > 4) {
        this.image_yscale = 2 - cY(this.ltimer / 5) * 1 * (8 / this.shrinktimer);
      }
      if (this.ltimer > 7) {
        this.image_angle -= cV(cY(this.ltimer / 5)) * 4;
        this.ang = -this.image_angle;
      }
      if (this.ltimer > 4 && cV(cY(this.ltimer / 5)) <= 0.06) {
        this.lcon = 5;
        this.image_yscale = 2;
        this.direction = 180;
        this.speed = 4;
      }
    }
    if (this.lcon === 5) {
      if (this.speed < 16) {
        this.speed += 2;
      }
      if (this.ang < 45) {
        this.ang += 4;
      }
      this.image_angle = -this.ang;
      if (this.x < 80) {
        this.lcon = 6;
      }
    }
    if (this.lcon === 6) {
      if (this.ang < 135) {
        this.ang += 10;
      }
      this.image_angle = -this.ang;
      if (this.x <= 5) {
        this.lcon = 7;
        this.direction = 90;
      }
    }
    if (this.lcon === 7) {
      if (this.y < 80) {
        if (this.ang < 225) {
          this.ang += 10;
        }
        if (this.y <= 5) {
          this.direction = 0;
          this.lcon = 8;
        }
      } else if (this.ang < 135) {
        this.ang += 10;
      }
      this.image_angle = -this.ang;
    }
    if (this.lcon === 8) {
      if (this.x >= 540) {
        if (this.ang < 315) {
          this.ang += 10;
        }
        if (this.x >= 630) {
          this.direction = 270;
          this.lcon = 9;
        }
      } else if (this.ang < 225) {
        this.ang += 10;
      }
      this.image_angle = -this.ang;
    }
    if (this.lcon === 9) {
      if (this.y > this.ory - 70) {
        if (this.ang < 360) {
          this.ang += 10;
        }
        if (this.y >= this.ory - 5) {
          this.y = this.ory;
          this.direction = 180;
          this.lcon = 10;
        }
      } else if (this.ang < 315) {
        this.ang += 10;
      }
      this.image_angle = -this.ang;
    }
    if (this.lcon === 10) {
      this.ang = 0;
      this.image_angle = 0;
      if (this.x <= this.orx) {
        this.speed = 0;
        this.x = this.orx;
        this.lcon = 11;
        this.ltimer = 0;
      }
    }
    if (this.lcon === 11) {
      this.sprite_index = "spr_lancerbike_l";
      this.ltimer++;
      if (this.ltimer >= 25) {
        cv.with("obj_regularbullet", gO => {
          gO.active = 0;
          gO.image_alpha -= 0.2;
        });
        this.image_alpha = 1;
      }
      if (this.ltimer >= 30) {
        this.lcon = 0;
        this.endcon = 1;
      }
    }
    if (this.racecon === 1) {
      this.sy = 0;
      this.s_moveup = 0;
      cv.with("obj_susieandlancer_event", gO => {
        if (gO.s) {
          this.s = gO.s;
          this.sy = gO.s.y;
          this.s_moveup = 1;
        }
      });
      this.orx = this.x;
      this.ory = this.y;
      this.ang = 0;
      this.racecon = 2;
      this.vspeed = cN(1, -1) * -14;
      this.rtimer = 0;
      this.maxr = 15 + cU(25);
    }
    if (this.racecon === 2) {
      if (this.s_moveup === 1 && this.s.y > -20) {
        this.s.y -= 10;
      }
      if (this.y < this.topy + 10) {
        this.vspeed = 12;
      }
      if (this.y > this.bottomy - 10) {
        this.vspeed = -12;
      }
      this.rtimer++;
      if (this.rtimer > this.maxr) {
        this.vspeed = 0;
        this.racecon = 3;
        this.rtimer = 0;
      }
    }
    if (this.racecon === 3) {
      this.rtimer++;
      if (this.rtimer === 5 || this.rtimer === 10) {
        cp("snd_lancerhonk");
        let gO = cL(this.x - 60, this.y - 40, obj_afterimage_grow);
        gO.sprite_index = "spr_lancernoise";
      }
      if (this.rtimer >= 25) {
        cp("snd_drive");
        this.racecon = 4;
        this.hspeed = -20;
        this.rtimer = 0;
        this.ang = 0;
      }
    }
    if (this.racecon === 4) {
      if (this.s_moveup === 1) {
        this.s.y += 10;
        if (this.s.y >= this.sy) {
          this.s.y = this.sy;
          this.s_moveup = 0;
        }
      }
      this.rtimer++;
      this.ang += this.rtimer * 2 + 4;
      if (this.ang > 50) {
        this.ang = 50;
      }
      this.image_angle = -this.ang;
      if (this.x <= -40) {
        this.ang = 0;
        this.image_angle = 0;
        this.x = 740;
        this.y = this.ory;
        this.hspeed = -12;
        this.racecon = 5;
      }
    }
    if (this.racecon === 5 && this.x <= this.orx + 5) {
      this.hspeed = 0;
      this.x = this.orx;
      this.racecon = 0;
      this.endcon = 1;
    }
    if (this.endcon === 1) {
      co.turntimer = 2;
      cv.with("obj_lancerboss", gq => {
        gq.visible = true;
        if (gq.turns >= 4) {
          gq.con = 1;
          cv.with("obj_battlecontroller", go => {
            go.noreturn = 1;
          });
        }
      });
      cv.with("obj_lancerboss3", gq => {
        gq.visible = true;
      });
      this.instance_destroy();
    }
    cv.with("obj_lancerboss", gq => {
      if (gq.compliment >= 3) {
        cv.with("obj_dmgwriter", go => {
          go.spec = 1;
        });
      }
    });
  }
};
x0(BJ, "obj_lancerbike");
x2(BJ, "kinds", cM("obj_lancerbike", c1));
x2(BJ, "defaultDepth", -20);
x2(BJ, "defaultSprite", "spr_lancerbike");
var obj_lancerbike = BJ;
function fallspade(gZ, gT, ga) {
  let gd = -80 + cU(160) + 8;
  let gO = cL((gT ? gT.x : 320) + gd, ga, c1);
  if (!gO.destroyed) {
    gO.damage = gZ.damage;
    gO.target = gZ.target;
    gO.sprite_index = "spr_spadebullet";
    gO.image_angle = 270;
    gO.gravity = 0.3;
    gO.speed = 0;
    gO.vspeed = 3;
    gO.hspeed = -0.6 + cU(1.2);
  }
}
x0(fallspade, "fallspade");
function type20_22(gZ, {
  heart: gT
}) {
  if (cv.exists("obj_lancerboss3")) {
    if (gZ.made === 0) {
      cp("snd_lancerwhistle");
      gZ.whistletimer = 0;
      gZ.made = 1;
      cv.with("obj_lancerboss3", gd => {
        gd.idlesprite = "spr_lancerbike_l";
      });
    }
    if (gZ.made === 1) {
      gZ.whistletimer++;
      if (gZ.whistletimer >= 30) {
        cv.with("obj_lancerboss3", gd => {
          gd.idlesprite = "spr_lancerbike";
        });
        gZ.made = 2;
      }
    }
  }
  let ga = 8;
  if (gZ.type === 22) {
    ga = 6;
  }
  if (gZ.btimer >= ga) {
    fallspade(gZ, gT, -20);
    gZ.side = gZ.side === 1 ? -1 : 1;
    gZ.btimer = 0;
  }
}
x0(type20_22, "type20_22");
function type21_23_25(gZ) {
  let gT = 9;
  if (gZ.type === 23) {
    gT = 7;
  }
  if (gZ.type === 25) {
    gT = 4;
  }
  cv.with("obj_regularbullet", ga => {
    ga.image_alpha += 0.2;
  });
  if (gZ.btimer >= gT) {
    let ga = gZ.side === 0 ? 80 : 560;
    let gd = cv.first("obj_growtangle");
    let gO = gd ? gd.y : 170;
    let gq = gd ? gd.sprite_height : 130;
    let go = cL(ga, gO - gq / 2 + cU(gq), c1);
    if (!go.destroyed) {
      go.direction = gZ.side === 0 ? 0 : 180;
      go.image_alpha = 0;
      go.damage = gZ.damage;
      go.target = gZ.target;
      go.sprite_index = "spr_spadebullet";
      go.speed = 5;
      go.friction = -0.1;
      go.image_angle = go.direction;
    }
    gZ.side = gZ.side === 1 ? 0 : 1;
    gZ.btimer = 0;
  }
}
x0(type21_23_25, "type21_23_25");
function type24(gZ, {
  heart: gT
}) {
  let ga = gZ.difficulty + 5;
  cv.with("obj_regularbullet", gd => {
    if (!gT) {
      return;
    }
    let gO = gd.x - (gT.x + 8);
    if (gd.y >= gT.y - 240 && cV(gO) <= 30) {
      if (gO >= 0 && gd.hspeed < 5) {
        gd.hspeed += 0.4;
      }
      if (gO < 0 && gd.hspeed > -5) {
        gd.hspeed -= 0.4;
      }
    }
    if (gd.y >= gT.y - 100 && cV(gO) <= 60) {
      if (gO >= 0) {
        if (gd.hspeed < 2) {
          gd.hspeed += 0.25;
        }
        if (gO < 10) {
          gd.x += 3;
        }
        if (gO < 20) {
          gd.x += 3;
        }
        if (gO < 30) {
          gd.x += 3;
        }
        if (gO < 40) {
          gd.x += 2;
        }
        if (gO < 60) {
          gd.x += 1;
        }
      } else {
        if (gd.hspeed > -2) {
          gd.hspeed -= 0.25;
        }
        if (gO > -10) {
          gd.x -= 3;
        }
        if (gO > -20) {
          gd.x -= 3;
        }
        if (gO > -30) {
          gd.x -= 3;
        }
        if (gO > -40) {
          gd.x -= 2;
        }
        if (gO > -60) {
          gd.x -= 1;
        }
      }
    }
  });
  if (gZ.btimer >= ga) {
    fallspade(gZ, gT, -20);
    gZ.side = gZ.side === 1 ? -1 : 1;
    gZ.btimer = 0;
  }
}
x0(type24, "type24");
i({
  20: type20_22,
  22: type20_22,
  21: type21_23_25,
  23: type21_23_25,
  25: type21_23_25,
  24: type24
});
var BA = class eh extends c8 {
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
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: 0,
      maxmercy: 9999,
      warned: 0,
      compliment: 0,
      compliment_just: 0,
      attacks: 0,
      dodgetimer: 0,
      candodge: 1,
      con: 0,
      shakex: 0
    });
    this.image_xscale = 2;
    this.image_yscale = 2;
    co.automiss ||= [0, 0, 0];
  }
  userEvent(gZ) {
    if (gZ === 12) {
      co.monsterx[this.myself] = this.x;
      co.monstery[this.myself] = this.y - this.sprite_height / 2 - 30;
    }
  }
  alarmEvent(gZ) {
    if (gZ === 4) {
      this.con++;
    }
  }
  step() {
    let gZ = this.myself;
    if (co.monster[gZ] === 1 && (co.mnfight === 1 && this.talked === 0 && (cd(this), co.flag[51 + gZ] = 4, co.targeted[this.mytarget] = 1, cv.exists("obj_darkener") || cL(0, 0, cZ), co.typer = 50, co.msg = new Array(100).fill(" "), this.turns === 0 && (co.msg[0] = "Halt, clowns!&This bike is&fueled by&victory!!!"), this.turns === 1 && (co.msg[0] = "I love to get&thrashed...&Just kidding!&That's you!!"), this.turns === 2 && (co.msg[0] = "So what are&you guys doing&after this???"), this.turns >= 3 && (co.msg[0] = "Hohoho!!!&I'm the bad&guy!"), this.compliment_just === 1 && (this.compliment === 1 && (co.msg[0] = "Oh! You make&my feelings&do wheelies!&Sweet wheelys"), this.compliment === 2 && (co.msg[0] = "Did you not&realize I can&mask my self-&esteem levels?"), this.compliment === 3 && (co.msg[0] = "Stop!! My&personality's&getting too&deep!!!"), this.compliment_just = 0), cr(this.x - 235, this.y - 65, 3), this.talked = 1, this.talktimer = 0), this.talked === 1 && co.mnfight === 1 && (cy() && this.talktimer > 15 && (this.talktimer = this.talkmax), this.talktimer++, this.talktimer >= this.talkmax && (cv.exists("obj_moveheart") || cn(), cv.exists("obj_growtangle") || cL(320, 170, cX), cv.with("obj_writer", gT => gT.instance_destroy()), co.mnfight = 2)), co.mnfight === 2 && this.attacked === 0)) {
      let gT = cL(this.x, this.y, obj_lancerbike);
      this.bike = gT;
      this.visible = false;
      if (this.attacks === 0) {
        gT.racecon = 1;
        gT.target = this.mytarget;
        gT.damage = co.monsterat[gZ] * 5;
        this.attacks = 1;
      } else {
        gT.lcon = 1;
        gT.target = this.mytarget;
        gT.damage = co.monsterat[gZ] * 5;
        this.attacks = 0;
      }
      this.turns++;
      co.turntimer = 999;
      this.attacked = 1;
      let ga = cF(cU(5));
      co.typer = 6;
      co.fc = 0;
      co.battlemsg[0] = Bb[ga];
      if (this.turns === 1) {
        co.typer = 47;
        co.fc = 1;
        co.fe = 2;
        co.battlemsg[0] = "* Dunno how I got an ax but^1, like^1, that's cool.";
      }
    }
    if (co.myfight === 3) {
      if (this.acting === 1 && this.actcon === 0) {
        this.actcon = 1;
        co.msg = new Array(100).fill(" ");
        co.msg[0] = "* LANCER - AT 7 DF 1&* Not to call a spade a spade^1, but he's a spade./";
        co.msg[1] = "* Not old enough to ride a motorcycle^1, so he set his bike on fire./%";
        cx();
      }
      if (this.acting === 2 && this.actcon === 0) {
        this.actcon = 1;
        co.msg = new Array(100).fill(" ");
        if (co.automiss[gZ] === 0) {
          co.msg[0] = "* You tell Lancer to watch out for Susie's attack^1.&* He readies himself./%";
          co.automiss[gZ] = 1;
        } else {
          co.msg[0] = "* Lancer laughs at the idea he would need your help!/%";
        }
        cx();
      }
      if (this.acting === 3 && this.actcon === 0) {
        co.msg = new Array(100).fill(" ");
        if (this.compliment >= 3) {
          co.msg[0] = "* You say some kind words^1.&* Lancer absorbs them into his skin./%";
        }
        if (this.compliment === 2) {
          co.msg[0] = "* You compliment LANCER^1.&* He gets confused as to your sincerity./";
          co.msg[1] = "* Instead of going up or down^1, his ATTACK power goes sideways...?/%";
          ca(gZ, 20);
        }
        if (this.compliment === 1) {
          co.msg[0] = "* You try to compliment LANCER again.../";
          co.msg[1] = "* But he sees it as insincere^1.&* His ATTACK POWER goes back up!/%";
          ca(gZ, 20);
          co.monsterat[gZ] += 1;
        }
        if (this.compliment === 0) {
          co.msg[0] = "* You tell Lancer you can't tell the difference between his clothes and his body./";
          co.msg[1] = "* He seems flattered..^1.&* His ATTACK POWER went down!/%";
          ca(gZ, 20);
          co.monsterat[gZ] -= 1;
        }
        this.compliment_just = 1;
        this.compliment++;
        cx();
        this.actcon = 1;
      }
      if (this.actcon === 1 && !cv.exists("obj_writer")) {
        this.actcon = 0;
        c4();
      }
    }
    if (this.con === 1) {
      this.alarm[4] = 5;
      this.con = 2;
    }
    if (this.con === 3) {
      co.typer = 50;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "Wait^1!&Wait a second!/";
      co.msg[1] = "My bike's&running&out of&fuel...!/";
      co.msg[2] = "Alright,&you punk-&a-roos!/";
      co.msg[3] = "You had the&luck of the&draw this&time^1, but.../";
      co.msg[4] = "Next time^1,&the losers&will be&YOU!!!/";
      co.msg[5] = "Hahaha!!^1!&Bye^1, losers!!/";
      co.msg[6] = "I gotta get&home before&dinner!!!/%";
      this.con = 4;
      cr(this.x - 235, this.y - 65, 3);
    }
    if (this.con === 4 && !cv.exists("obj_writer")) {
      this.hspeed = 20;
      this.con = 5;
      this.alarm[4] = 15;
      cv.with("obj_battlecontroller", gd => {
        gd.noreturn = 0;
        gd.alarm[2] = 17;
      });
    }
    if (this.con === 6) {
      co.monsterexp[gZ] -= 0;
      co.monstergold[gZ] += 10;
      if (co.plot < 22) {
        co.plot = 22;
      }
      this.scr_monsterdefeat();
      this.instance_destroy();
      this.con = 7;
    }
  }
  draw(gZ) {
    let gT = this.myself;
    if (this.state === 3) {
      this.hurttimer--;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (co.monster[gT] === 0) {
          if (co.plot < 22) {
            co.plot = 22;
          }
          this.hspeed = 12;
          this.turnt -= 8;
          this.vspeed = -4;
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
        gZ.draw_sprite_ext("spr_lancerbike_hurt", this.hurttimer / 2, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 4) {
      this.dodgetimer++;
      let ga = Math.cos(this.dodgetimer * 2 * Math.PI / 15) * 2;
      gZ.draw_sprite_ext("spr_lancerbike_l", 0, this.x, this.y, ga, 2, 0, this.image_blend, 1);
      if (this.dodgetimer >= 15) {
        this.state = 0;
      }
    }
    if (this.state === 0) {
      this.siner++;
      let gd = "spr_lancerbike";
      if (co.mercymod[gT] >= co.mercymax[gT]) {
        gd = "spr_lancerbike";
      }
      gZ.draw_sprite_ext(gd, this.siner / 5, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner++;
        gZ.draw_sprite_white(gd, this.siner / 5, this.x, this.y, 2, 2, 0, -cD(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
x0(BA, "obj_lancerboss");
x2(BA, "kinds", cM("obj_lancerboss", c8));
x2(BA, "defaultDepth", 90);
x2(BA, "defaultSprite", "spr_lancerbike");
var obj_lancerboss = BA;
var g0 = class eu extends cw {
  create() {
    this.con = 51;
    this.image_speed = 0;
    this.visible = false;
    this.image_xscale = 2;
    this.image_yscale = 2;
  }
  alarmEvent(gZ) {
    if (gZ === 4) {
      this.con++;
    }
  }
  step() {
    if (this.con === 53) {
      let gZ = cv.first("obj_herosusie");
      this.s = cC(gZ ? gZ.x : 120, gZ ? gZ.y : 140, "spr_susieb_attack_serious");
      this.s.image_index = 5;
      this.s.depth = gZ ? gZ.depth : 100;
      this.visible = true;
      this.sprite_index = "spr_lancer_battle_hurt";
      co.fighting = 0;
      cv.with("obj_battlecontroller", ga => ga.instance_destroy());
      cv.with("obj_herosusie", ga => ga.instance_destroy());
      cv.with("obj_herokris", ga => ga.instance_destroy());
      cv.with("obj_tensionbar", ga => ga.instance_destroy());
      cv.with("obj_lancerboss2", ga => ga.instance_destroy());
      cv.with("obj_bulletparent", ga => ga.instance_destroy());
      if (this.black && !this.black.destroyed) {
        this.black.instance_destroy();
      }
      let gT = cL(this.x + 30, this.y + 40, c6);
      gT.type = 1;
      gT.damage = 0;
      this.con = 54;
      this.alarm[4] = 120;
    }
    if (this.con === 55) {
      this.sprite_index = "spr_lancer_battle";
      this.image_index = 0;
      co.typer = 32;
      co.fc = 5;
      co.fe = 12;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* S..^1. Susie...?/";
      co.msg[1] = "* Y..^1. you missed.../%";
      scr_texttype_fix(cc());
      this.con = 56;
    }
    if (this.con === 56 && !cv.exists("obj_writer")) {
      this.con = 57;
      co.battleover = "win";
      c5();
    }
  }
};
x0(g0, "obj_lancerbattle2_event");
x2(g0, "kinds", cM("obj_lancerbattle2_event", cw));
x2(g0, "defaultDepth", 1000);
x2(g0, "defaultSprite", "spr_lancer_battle");
var obj_lancerbattle2_event = g0;
var g2 = class ep extends c8 {
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
      idlesprite: "spr_lancer_battle",
      hurtsprite: "spr_lancer_battle_hurt",
      sparedsprite: "spr_lancer_battle",
      hurtlevel: 0,
      hmake: 0,
      firstskip: 1,
      shakesine: 0,
      rtimer: 0,
      shakex: 0
    });
    if (!cv.exists("obj_lancerbattle2_event")) {
      let gZ = cL(this.x, this.y, obj_lancerbattle2_event);
      gZ.depth = this.depth;
    }
  }
  userEvent(gZ) {
    if (gZ === 12) {
      co.monsterx[this.myself] = this.x + this.sprite_width / 2;
      co.monstery[this.myself] = this.y + this.sprite_height / 2;
    }
  }
  alarmEvent(gZ) {
    if (gZ === 4) {
      this.con++;
    }
  }
  step() {
    let gZ = this.myself;
    if (this.firstskip === 1) {
      co.acting[0] = 1;
      this.acting = 1;
      cv.with("obj_writer", gT => gT.instance_destroy());
      cv.with("obj_face", gT => gT.instance_destroy());
      cv.with("obj_smallface", gT => gT.instance_destroy());
      if (co.charaction[0] === 1) {
        co.attacking = 1;
      }
      co.charturn = c9();
      co.myfight = 3;
    }
    if (co.monster[gZ] === 1) {
      co.flag[51 + gZ] = 4;
      co.acting[0] = 1;
      this.acting = 1;
      if (co.mnfight === 1 && this.talked === 0) {
        this.actcon = 0;
        cd(this);
        if (!cv.exists("obj_darkener")) {
          cL(0, 0, cZ);
        }
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && co.mnfight === 1) {
        this.rtimer = 0;
        if (!cv.exists("obj_writer")) {
          co.mnfight = 2;
        }
        if (co.mnfight === 2) {
          if (!cv.exists("obj_moveheart") && this.hmake === 0) {
            cn();
            this.hmake = 1;
          }
          if (!cv.exists("obj_growtangle")) {
            cL(320, 170, cX);
          }
        }
      }
      if (co.mnfight === 2 && this.attacked === 0) {
        this.rtimer++;
        if (this.rtimer === 12) {
          co.turntimer = 140;
          if (this.turns === 0 || this.turns === 2) {
            let gT = cL(this.x, this.y, v);
            gT.type = 20;
            gT.target = this.mytarget;
            gT.damage = co.monsterat[gZ] * 5;
            if (co.hp[co.char[0]] <= 70) {
              gT.damage = co.monsterat[gZ] * 3;
            }
            co.turntimer = 180;
          }
          if (this.turns === 1) {
            let ga = cL(this.x, this.y, v);
            ga.type = 21;
            ga.target = this.mytarget;
            ga.damage = co.monsterat[gZ] * 5;
            if (co.hp[co.char[0]] <= 70) {
              ga.damage = co.monsterat[gZ] * 3;
            }
            co.turntimer = 180;
          }
          if (this.turns >= 3) {
            let gd = cL(this.x, this.y, v);
            gd.difficulty = this.turns * 2;
            if (this.turns === 6) {
              gd.difficulty = 30;
            }
            if (this.turns === 7) {
              gd.difficulty = 90;
            }
            gd.type = 24;
            gd.target = this.mytarget;
            gd.damage = co.monsterat[gZ] * 5;
          }
          this.turns++;
          this.attacked = 1;
          co.typer = 6;
          co.fc = 0;
          co.battlemsg[0] = "* ...";
        } else {
          co.turntimer = 150;
        }
      }
      if (co.mnfight === 2 && co.turntimer <= 10) {
        this.hmake = 0;
      }
    }
    if (co.myfight === 3) {
      if (this.acting === 1 && this.actcon === 0) {
        this.firstskip = 0;
        co.typer = 53;
        this.rr = cN(0, 1, 2, 3);
        this.actcon = 1;
        co.msg = new Array(100).fill(" ");
        let gO = this.turns;
        if (gO === 0) {
          co.msg[0] = "Hey, wanna&see what&happens to&traitors?/%";
        }
        if (gO === 1) {
          co.msg[0] = "They.&Get.&Crushed./%";
        }
        if (gO === 2) {
          co.msg[0] = "If you don't&get out of&the way.../";
          co.msg[1] = "...I'll&kill you./%";
        }
        if (gO === 3) {
          co.msg[0] = "Get it?&I'll KILL&you./%";
        }
        if (gO === 4) {
          co.msg[0] = "Heh...&You missed,&idiot!/%";
        }
        if (gO === 5) {
          co.msg[0] = "... wait, why&aren't you&fighting&back...?/%";
          cv.with("obj_herosusie", gQ => {
            gQ.idlesprite = "spr_susieb_idle_serious";
            gQ.attacksprite = "spr_susieb_attack_serious";
          });
        }
        if (gO === 6) {
          co.msg[0] = "... Heh, you&think I&CARE?/";
          co.msg[1] = "If you just&wanna lie&down and&die?/";
          co.msg[2] = "You're just&making it&easier for&me!/%";
          cv.with("obj_herosusie", gQ => {
            gQ.idlesprite = "spr_susieb_idle";
            gQ.attacksprite = "spr_susieb_attack";
          });
        }
        if (gO === 7) {
          co.typer = 54;
          co.msg[0] = "........&Alright,&that's&enough./";
          co.msg[1] = "If you&wanna die&so much.../";
          co.msg[2] = "THEN DIE!/%";
          this.actcon = 2;
        }
        co.monsterdf[gZ] -= 5;
        let gq = cv.first("obj_herosusie");
        let go = cr((gq ? gq.x : 120) + 100, gq ? gq.y : 140, 7);
        scr_texttype_fix(go.mywriter);
        cv.with("obj_writer", gQ => {
          gQ.skippable = 0;
        });
      }
      if (this.actcon === 1 && !cv.exists("obj_writer")) {
        this.actcon = 0;
        c4();
      }
      if (this.actcon === 2 && !cv.exists("obj_writer")) {
        cS();
        cp("snd_laz_c");
        this.black = cC(-20, -20, "spr_pixel_white");
        this.black.image_blend = cW.black;
        this.black.depth = -10000;
        this.black.image_xscale = 900;
        this.black.image_yscale = 900;
        this.actcon = 3;
        this.acttimer = 0;
        let gQ = cv.first("obj_lancerbattle2_event");
        if (gQ) {
          gQ.black = this.black;
          gQ.con = 52;
          gQ.alarm[4] = 80;
        }
      }
    }
  }
  draw(gZ) {
    let gT = this.myself;
    if (this.state === 3) {
      this.shakesine = 0;
      this.siner = 0;
      this.hurttimer--;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (co.monster[gT] === 0) {
          BL(this);
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
        if (co.monsterhp[gT] / co.monstermaxhp[gT] <= 0.65) {
          this.hurtlevel = 1;
        }
        if (co.monsterhp[gT] / co.monstermaxhp[gT] <= 0.2) {
          this.hurtlevel = 2;
        }
        gZ.draw_sprite_ext(this.hurtsprite, 0, this.x + this.shakex * 2, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 0) {
      this.shakesine++;
      this.siner++;
      let ga = cU(cY(this.shakesine / 6) * this.hurtlevel / 1.5);
      let gd = this.idlesprite;
      if (co.mercymod[gT] >= co.mercymax[gT]) {
        gd = this.sparedsprite;
      }
      gZ.draw_sprite_ext(gd, this.hurtlevel, this.x + ga, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner++;
        gZ.draw_sprite_white(gd, this.hurtlevel, this.x, this.y, 2, 2, 0, -cD(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
x0(g2, "obj_lancerboss2");
x2(g2, "kinds", cM("obj_lancerboss2", c8));
x2(g2, "defaultDepth", 90);
x2(g2, "defaultSprite", "spr_lancer_battle");
var obj_lancerboss2 = g2;
var g4 = class ef extends c8 {
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
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: 0,
      maxmercy: 9999,
      warned: 0,
      compliment: 0,
      attacks: 0,
      dodgetimer: 0,
      candodge: 1,
      con: 0,
      susie_act: 0,
      lancer_act: 0,
      defeated: 0,
      anythingcounter: 0,
      lancer_hurt: 0,
      susie_revive_count: 0,
      ears_blocked: 0,
      shakex: 0,
      attack_qual: 0
    });
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.idlesprite = this.sprite_index;
  }
  userEvent(gZ) {
    if (gZ === 12) {
      co.monsterx[this.myself] = this.x - 30;
      co.monstery[this.myself] = this.y - this.sprite_height / 2 - 30;
    }
  }
  alarmEvent(gZ) {
    if (gZ === 4) {
      this.con++;
    }
  }
  attackQual() {
    let gZ = 0;
    if (cu() === 1) {
      gZ = 1;
    }
    cv.with("obj_susieenemy", gT => {
      if (gT.sleeping === 1) {
        gZ = 1;
      }
    });
    return gZ;
  }
  step() {
    let gZ = this.myself;
    if (this.defeated === 1 && co.mnfight === 1) {
      co.mnfight = 99;
      this.con = 1;
    }
    if (co.monster[gZ] === 1 && this.defeated === 0) {
      co.flag[51 + gZ] = 4;
      if (co.mnfight === 1 && this.talked === 0) {
        if (cu() === 1 && (this.susie_revive_count++, this.susie_revive_count >= 3)) {
          if (this.myself !== 0 && co.monsterinstancetype[0] && co.monster[0] === 0) {
            cv.with("obj_susieandlancer_event", gO => {
              if (gO.s) {
                gO.s.visible = false;
              }
            });
            co.monster[0] = 1;
            let gd = cL(co.monstermakex[0], co.monstermakey[0], co.monsterinstancetype[0]);
            gd.myself = 0;
            co.monsterinstance[0] = gd;
            gd.userEvent(12);
            gd.userEvent(1);
            if (co.turntimer < 150) {
              co.turntimer = 150;
            }
            co.monsterhp[0] = 40;
            cp("snd_power");
          }
          this.susie_revive_count = 0;
        }
        this.attack_qual = 1;
        cv.with("obj_susieenemy", gO => {
          if (gO.sleeping === 0 && co.monster[gO.myself] === 1) {
            this.attack_qual = 0;
          }
        });
        if (this.attack_qual === 1) {
          cd(this);
          co.targeted[this.mytarget] = 1;
        }
        if (!cv.exists("obj_darkener")) {
          cL(0, 0, cZ);
        }
        co.typer = 50;
        co.msg = new Array(100).fill(" ");
        let gT = cN(0, 1, 2, 3);
        co.msg[0] = "Hey!!&Hey Susie!!&Watch me,&watch me!!";
        if (gT === 1) {
          co.msg[0] = "Prepare for&smashing, you&luxurious&melons!!!";
        }
        if (gT === 2) {
          co.msg[0] = "Horror! Pain!&The power of&REAL bad guys!&(Nice, huh?)";
        }
        if (gT === 3) {
          co.msg[0] = "This bike is&fueled by&EVIL! ...and&friendship!";
        }
        if (this.lancer_hurt === 0 && co.monsterhp[gZ] <= co.monstermaxhp[gZ] * 0.5) {
          this.lancer_hurt = 1;
          co.msg[0] = "Ow^1, my&guts hurt!";
        }
        if (this.susie_act === 3) {
          co.msg[0] = "Oh^1, what a&beautiful&song!!!";
        }
        if (this.susie_act === 9) {
          co.msg[0] = "Don't worry&Bikey, I'll&put you to&bed soon...";
        }
        let ga = this.anythingcounter;
        if (this.acting === 2) {
          if (ga === 1) {
            co.msg[0] = "Oh!!!&It's&working&on me!!!";
          }
          if (ga === 2) {
            co.msg[0] = "Thanks,&it's all&natural!";
          }
          if (ga === 3) {
            co.msg[0] = "Really!?&It's just&what I&wanted!!!";
          }
          if (ga >= 4) {
            co.msg[0] = "Hee hee!&I'm bliss-&-fully&ignorant!";
          }
        }
        if (this.acting === 3) {
          if (ga === 1) {
            co.msg[0] = "Oh!!!&It's&working&on me!!!";
          }
          if (ga === 2) {
            co.msg[0] = "Really!^1?&That's bad!";
          }
          if (ga === 3) {
            co.msg[0] = "Wow, I'll&look&amazing!!";
          }
          if (ga >= 4) {
            co.msg[0] = "Hee hee!&I'm bliss-&-fully&ignorant!";
          }
        }
        this.susie_act = 0;
        this.lancer_act = 0;
        cr(this.x - 235, this.y - 65, 3);
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && co.mnfight === 1) {
        if (cy() && this.talktimer > 17) {
          this.talktimer = this.talkmax;
        }
        this.talktimer++;
        if (this.talktimer >= this.talkmax) {
          if (!cv.exists("obj_moveheart")) {
            cn();
          }
          if (!cv.exists("obj_growtangle")) {
            cL(320, 170, cX);
          }
          cv.with("obj_writer", gO => gO.instance_destroy());
          co.mnfight = 2;
        }
      }
      if (co.mnfight === 2 && this.attacked === 0) {
        this.attack_qual = this.attackQual();
        if (this.attack_qual === 1) {
          let gq = cL(this.x, this.y, obj_lancerbike);
          this.bike = gq;
          this.visible = false;
          if (this.attacks === 0) {
            gq.racecon = 1;
            gq.target = this.mytarget;
            gq.damage = co.monsterat[gZ] * 5;
            this.attacks = 1;
          } else {
            gq.lcon = 1;
            gq.target = this.mytarget;
            gq.damage = co.monsterat[gZ] * 5;
            this.attacks = 0;
          }
          co.turntimer = 999;
        }
        this.turns++;
        this.attacked = 1;
        let gO = cF(cU(5));
        co.typer = 6;
        co.fc = 0;
        co.battlemsg[0] = Bb[gO];
      }
    }
    if (co.myfight === 3) {
      this.actStep();
    }
    if (this.con === 1) {
      this.alarm[4] = 5;
      this.con = 2;
    }
    if (this.con === 3) {
      cv.with("obj_susieenemy", go => {
        go.idlesprite = "spr_susie_enemy";
      });
      co.typer = 46;
      co.fe = 4;
      co.fc = 5;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* Ow.../";
      BR(1, 9);
      co.msg[2] = "* Hey^1, HEY^1! Enough's enough already!/";
      co.msg[3] = "* If you hit him any more^1, you might really hurt him!/";
      co.msg[4] = "\\E0* ... Lancer^1, you OK...?/";
      BK(5, 2);
      co.msg[6] = "* I..^1. I'm fine^1, Susie!/";
      co.msg[7] = "\\E7* My insides are just..^1. a little mixed up./";
      BR(8, 0);
      co.msg[9] = "* Alright^1, fine^1! You guys win!/";
      BU(10, 6);
      co.msg[11] = "* (Kris^1, maybe we should have taken it easier...)/%";
      if (co.flag[249] === 1) {
        co.msg = new Array(100).fill(" ");
        co.msg[0] = "* Uh oh./";
        BR(1, 0);
        co.msg[2] = "* What's wrong^1, dude?/";
        BK(3, 4);
        co.msg[4] = "* I accidentally started liking the enemies...!/";
        co.msg[5] = "\\E3* Now seeing them just makes me feel round and soft./";
        co.msg[6] = "\\E4* Bad atmosphere for battle^1, though./";
        BR(7, 0);
        co.msg[8] = "* .../";
        co.msg[9] = "\\E1* Well^1, if you don't wanna fight,/";
        co.msg[10] = "\\E0* There's no point^1, I guess./";
        co.msg[11] = "\\E2* Battle's over!/%";
      }
      this.con = 4;
      BH();
      scr_texttype_fix(cc());
    }
    if (this.con === 4 && !cv.exists("obj_writer")) {
      this.con = 5;
      this.alarm[4] = 2;
      cv.with("obj_battlecontroller", go => {
        go.noreturn = 0;
        go.alarm[2] = 4;
      });
    }
    if (this.con === 6) {
      cv.with("obj_susieandlancer_event", go => {
        if (go.l) {
          go.l.visible = true;
        }
      });
      cv.with("obj_monsterparent", go => {
        go.scr_monsterdefeat();
      });
      this.instance_destroy();
      this.con = 7;
    }
  }
  actStep() {
    let gZ = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* LANCER - AT 7 DF 1&* Watch out!!^1! He's boosted by friendship!/%";
      cx();
    }
    if (this.acting === 2 && this.actcon === 0) {
      this.actcon = 1;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* You tried convincing Lancer not to fight./";
      co.msg[1] = "* Lancer started to become convinced!/%";
      if (this.anythingcounter === 1) {
        co.msg[0] = "* You tried telling Lancer you like his hair.../";
        co.msg[1] = "* Lancer became even more convinced!/%";
      }
      if (this.anythingcounter === 2) {
        co.msg[0] = "* You told Lancer you'd give him a picnic basket of worms./";
        co.msg[1] = "* Lancer became almost fully convinced!/%";
      }
      if (this.anythingcounter >= 3) {
        co.msg[0] = "* You told Lancer you just want to get along!/";
        co.msg[1] = "* It's the decisive kindness!/%";
        if (this.ears_blocked >= 2) {
          co.msg[0] = "* You told Lancer you want to get along really fast!/";
          co.msg[1] = "* The soundwaves reached Lancer instantly!/%";
        }
        this.attack_qual = this.attackQual();
        if (this.attack_qual === 0) {
          this.actcon = 20;
          cv.with("obj_monsterparent", gT => {
            gT.ears_blocked = (gT.ears_blocked || 0) + 1;
          });
        } else {
          this.anythingcounter = 10;
        }
        if (this.ears_blocked >= 3) {
          this.anythingcounter = 10;
          this.actcon = 1;
          this.attack_qual = 1;
        }
      }
      if (this.anythingcounter < 4) {
        this.anythingcounter++;
      }
      cx();
    }
    if (this.acting === 3 && this.actcon === 0) {
      this.actcon = 1;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* You told Ralsei to compliment the enemies!/";
      BU(1, 8);
      co.msg[2] = "* You two look like a really great team! I'm proud!/";
      BN(3);
      co.msg[4] = "* (Lancer started to become a little convinced!)/%";
      if (this.anythingcounter === 1) {
        co.msg = new Array(100).fill(" ");
        co.msg[0] = "* You told Ralsei to logically best Lancer and Susie./";
        BU(1, 1);
        co.msg[2] = "* You two^1, if we don't stop fighting, then.../";
        co.msg[3] = "\\E6* ... Someone might get hurt!/";
        BN(4);
        co.msg[5] = "* (Lancer became more convinced^1! It's working!)/%";
      }
      if (this.anythingcounter === 2) {
        co.msg = new Array(100).fill(" ");
        co.msg[0] = "* You told Ralsei to offer his services to the enemies!/";
        BU(1, 1);
        co.msg[2] = "* You two^1, if we stop fighting^1, then I could^1, um.../";
        co.msg[3] = "\\E8* I could braid your hair!/";
        BN(4);
        co.msg[5] = "* (Lancer became almost fully convinced!)/%";
      }
      if (this.anythingcounter >= 3) {
        co.msg = new Array(100).fill(" ");
        co.msg[0] = "* You told Ralsei to deal the final blow of kindness!/";
        BU(1, 6);
        co.msg[2] = "* In summary^1, I like you two^1, and.../";
        co.msg[3] = "\\E8* I think we should all just get along!/%";
        if (this.ears_blocked >= 2) {
          co.msg = new Array(100).fill(" ");
          co.msg[0] = "* You told Ralsei to compliment Lancer really fast!/";
          BU(1, 0);
          co.msg[2] = "* You'rereallyaswellpersonyouknowthat?!/";
          BN(3);
          co.msg[4] = "* The soundwaves reached Lancer instantly!/%";
        }
        this.attack_qual = this.attackQual();
        if (this.attack_qual === 0) {
          this.actcon = 20;
          cv.with("obj_monsterparent", ga => {
            ga.ears_blocked = (ga.ears_blocked || 0) + 1;
          });
        } else {
          this.anythingcounter = 10;
        }
        if (this.ears_blocked >= 3) {
          this.anythingcounter = 10;
          this.actcon = 1;
          this.attack_qual = 1;
        }
      }
      if (this.anythingcounter < 4) {
        this.anythingcounter++;
      }
      let gT = cv.first("obj_susieenemy");
      if (gT) {
        gT.anythingxcounter = this.anythingcounter;
        gT.lancer_act = 3;
      }
      BH();
      cx();
    }
    if (this.actcon === 1 && !cv.exists("obj_writer")) {
      this.actcon = 0;
      if (this.anythingcounter < 10) {
        c4();
      } else {
        this.defeated = 1;
        co.mnfight = 99;
        co.myfight = 99;
        this.con = 1;
        co.flag[249] = 1;
      }
    }
    if (this.actcon === 20 && !cv.exists("obj_writer")) {
      this.visible = false;
      cv.with("obj_susieenemy", ga => {
        ga.visible = false;
      });
      if (cu() === 1) {
        cv.with("obj_susieandlancer_event", ga => {
          if (ga.s) {
            ga.s.visible = false;
          }
        });
      }
      this.blocklan = cC(this.x, this.y, "spr_lancerbike_earcover");
      this.blocklan.depth = this.depth;
      cp("snd_bell");
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* (But Susie blocked the soundwaves before they reached Lancer!)/";
      BR(1, 2);
      co.msg[2] = "* Try convincing someone that can't HEAR YOU!/%";
      BH();
      cx();
      this.actcon = 21;
    }
    if (this.actcon === 21 && !cv.exists("obj_writer")) {
      if (this.blocklan) {
        this.blocklan.instance_destroy();
      }
      this.visible = true;
      cv.with("obj_susieenemy", ga => {
        ga.visible = true;
      });
      if (cu() === 1) {
        cv.with("obj_susieandlancer_event", ga => {
          if (ga.s) {
            ga.s.visible = true;
          }
        });
      }
      this.actcon = 1;
    }
  }
  draw(gZ) {
    let gT = this.myself;
    if (this.state === 3) {
      if (co.monsterhp[gT] < co.monstermaxhp[gT] / 4) {
        cv.with("obj_monsterparent", ga => {
          ga.defeated = 1;
        });
        co.monsterhp[gT] = co.monstermaxhp[gT] / 4;
      }
      this.hurttimer--;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (co.monster[gT] === 0) {
          this.hspeed = 12;
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
        gZ.draw_sprite_ext("spr_lancerbike_hurt", this.hurttimer / 2, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
      }
    }
    if (this.state === 4) {
      this.dodgetimer++;
      let ga = Math.cos(this.dodgetimer * 2 * Math.PI / 15) * 2;
      gZ.draw_sprite_ext("spr_lancerbike_l", 0, this.x, this.y, ga, 2, 0, this.image_blend, 1);
      if (this.dodgetimer >= 15) {
        this.state = 0;
      }
    }
    if (this.state === 0) {
      this.siner++;
      let gd = this.idlesprite;
      if (co.mercymod[gT] >= co.mercymax[gT]) {
        gd = this.idlesprite;
      }
      gZ.draw_sprite_ext(gd, this.siner / 5, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.flash === 1) {
        this.fsiner++;
        gZ.draw_sprite_white(gd, this.siner / 5, this.x, this.y, 2, 2, 0, -cD(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
x0(g4, "obj_lancerboss3");
x2(g4, "kinds", cM("obj_lancerboss3", c8));
x2(g4, "defaultDepth", 90);
x2(g4, "defaultSprite", "spr_lancerbike");
var obj_lancerboss3 = g4;
var g6 = [{
  id: "lancer",
  name: "Lancer",
  chapter: 1,
  area: "Field",
  desc: "Lancer busts in!#Bike attacks, ACTs.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: obj_lancerboss,
    type: 2,
    x: 540,
    y: 200,
    setup: BW
  }],
  battlemsg: "* Lancer busts in!",
  encounterno: 2,
  music: "battle"
}, {
  id: "lancer2",
  name: "Lancer (vs Susie)",
  chapter: 1,
  area: "Card Castle",
  desc: "Susie alone#against Lancer.#Scripted fight.",
  party: [2, 0, 0],
  heromakex: [120, 80, 80],
  heromakey: [140, 130, 210],
  monsters: [{
    cls: obj_lancerboss2,
    type: 12,
    x: 480,
    y: 160,
    setup: setupStats12
  }],
  battlemsg: "* Lancer blocked the way!",
  encounterno: 20,
  music: "battle"
}, {
  id: "lancer3",
  name: "Susie & Lancer",
  chapter: 1,
  area: "Card Castle",
  desc: "Two bad guys#blocked the way!#Susie and Lancer.",
  party: [1, 3, 0],
  heromakex: [80, 80, 80],
  heromakey: [100, 180, 210],
  monsters: [{
    cls: obj_susieenemy,
    type: 19,
    x: 520,
    y: 80,
    setup: BT
  }, {
    cls: obj_lancerboss3,
    type: 18,
    x: 540,
    y: 240,
    setup: setupStats18
  }],
  battlemsg: "* Two bad guys blocked the way!",
  encounterno: 31,
  music: "lancerfight"
}];
x3(obj_lancerboss, "G.mnfight = 2;");
x3(obj_lancerboss2, "G.myfight = 3;G.mnfight = 2;");
x3(obj_lancerboss3, "G.mnfight = 99;G.mnfight = 2;G.mnfight = 99;G.myfight = 99;");
var g7 = {};
x1(g7, {
  FIGHTS: () => gC,
  SOUNDS: () => g9,
  SPRITES: () => g8,
  obj_ponman_enemy: () => obj_ponman_enemy,
  obj_spareanim: () => gx,
  scr_spareanim: () => scr_spareanim,
  setupStats: () => gB
});
x4();
var g8 = ["spr_ponman_idle", "spr_ponman_eye", "spr_ponman_appear", "spr_diamondbullet", "spr_ralseib_sing", "spr_sparestar_anim"];
var g9 = ["snd_hurt1", "snd_ralseising1", "snd_ralseising2", "snd_spare"];
var gc = class ej extends cw {
  create() {
    this.t = 0;
    this.image_speed = 0;
    this.starcount = 0;
    this.afterimage = 0;
    this.tone = 0;
    this.neotone = 0;
    this.star = [];
    cf("snd_spare");
    cp("snd_spare");
  }
  draw(gZ) {
    if (this.t >= 6 && this.t <= 26) {
      this.afterimage += 1;
      gZ.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 4, this.y, this.image_xscale, this.image_yscale, 0, 0.7 - this.afterimage / 25);
      gZ.draw_sprite_white(this.sprite_index, this.image_index, this.x + this.afterimage * 8, this.y, this.image_xscale, this.image_yscale, 0, 0.4 - this.afterimage / 30);
    }
    if (this.t < 6) {
      if (this.t < 5) {
        gZ.draw_sprite_ext(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, this.image_blend, 1 - this.neotone / 4);
      }
      let gT = this.t / 5;
      if (gT > 1) {
        gT = 1;
      }
      gZ.draw_sprite_white(this.sprite_index, this.image_index, this.x, this.y, this.image_xscale, this.image_yscale, 0, gT - this.tone / 5);
    }
    if (this.t >= 1 && this.t <= 5) {
      for (let ga = 0; ga < 2; ga += 1) {
        let gd = cL(this.x + cU(this.sprite_width), this.y + cU(this.sprite_height), cB);
        gd.image_xscale = 2;
        gd.image_yscale = 2;
        gd.sprite_index = "spr_sparestar_anim";
        gd.image_alpha = 2;
        gd.image_speed = 0.25;
        gd.hspeed = -3;
        gd.gravity = 0.5;
        gd.gravity_direction = 0;
        this.star[this.starcount] = gd;
        this.starcount += 1;
      }
    }
    if (this.t >= 5 && this.t <= 30) {
      for (let gO = 0; gO < this.starcount; gO += 1) {
        let gq = this.star[gO];
        if (gq && !gq.destroyed) {
          gq.image_angle += 10;
          gq.image_alpha -= 0.1;
          if (gq.image_alpha <= 0) {
            gq.instance_destroy();
          }
        }
      }
    }
    if (this.t >= 5 && this.t < 10) {
      this.tone += 1;
    }
    if (this.t >= 9 && (this.neotone += 1, this.neotone >= 30)) {
      for (let go = 0; go < this.starcount; go += 1) {
        let gQ = this.star[go];
        if (gQ && !gQ.destroyed) {
          gQ.instance_destroy();
        }
      }
      this.instance_destroy();
    }
    this.t += 1;
  }
};
x0(gc, "obj_spareanim");
x2(gc, "kinds", cM("obj_spareanim", cw));
x2(gc, "defaultDepth", 0);
var gx = gc;
function scr_spareanim(gZ) {
  let gT = cL(gZ.x, gZ.y, gx);
  gT.sprite_index = gZ.sprite_index;
  gT.sprite_index = gZ.sparedsprite;
  gT.image_index = 0;
  gT.image_xscale = gZ.image_xscale;
  gT.image_yscale = gZ.image_yscale;
}
x0(scr_spareanim, "scr_spareanim");
function gB(gZ) {
  co.monstername[gZ] = "Ponman";
  co.monstermaxhp[gZ] = 140;
  co.monsterhp[gZ] = 140;
  co.monsterat[gZ] = 7;
  co.monsterdf[gZ] = 1;
  co.monsterexp[gZ] = 0;
  co.monstergold[gZ] = 23;
  co.sparepoint[gZ] = 10;
  co.mercymod[gZ] = 0;
  co.mercymax[gZ] = 100;
  co.canact[gZ][0] = 1;
  co.actname[gZ][0] = "Check";
  co.canact[gZ][1] = 1;
  co.actname[gZ][1] = "Goodnight";
  co.canact[gZ][2] = 1;
  co.actname[gZ][2] = "Lullaby";
  co.actactor[gZ][2] = 3;
  if (ch(2) && co.plot < 150) {
    co.canact[gZ][3] = 1;
    co.actname[gZ][3] = "Warning";
    co.actactor[gZ][3] = 3;
  }
}
x0(gB, "setupStats");
var gg = class ek extends c8 {
  create() {
    Object.assign(this, {
      bikeflip: 0,
      becomeflash: 0,
      turnt: 0,
      turns: 0,
      talktimer: 0,
      talkmax: 60,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      talked: 0,
      attacked: 0,
      hurt: 0,
      hurttimer: 0,
      hurtshake: 0,
      mywriter: null,
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
      eyex: 0,
      eyey: 0,
      eye_angle: 0,
      eye_radius: 0,
      ponman_eye: 0,
      image_xscale: 2,
      image_yscale: 2,
      addup: 0,
      eyecon: 0,
      spinspeed: 0,
      shotrefresh: 0,
      x_angle: 0,
      spintype: 0,
      shotbuffer: 0,
      grandbuffer: 0,
      shotcount: 0,
      totalshotcount: 0,
      pontotal: 1,
      maxtimer: 0,
      activetimer: 0,
      testtimer: 0,
      sleeping: 0,
      sleep_index: 5,
      becomesleep: 0,
      this_index: 0,
      lullabied: 0,
      idlesprite: "spr_ponman_idle",
      hurtsprite: "spr_ponman_idle",
      sparedsprite: "spr_ponman_appear",
      rtimer: 0,
      maxshot: 0,
      lullatimer: 0,
      ralsing: null,
      singy: null,
      shakex: 0
    });
  }
  userEvent(gZ) {
    if (gZ === 12) {
      co.monsterx[this.myself] = this.x + this.sprite_width / 2;
      co.monstery[this.myself] = this.y + this.sprite_height / 2;
      return;
    }
    if (gZ !== 11 && gZ === 10) {
      scr_spareanim(this);
      this.scr_monsterdefeat();
      this.instance_destroy();
    }
  }
  alarmEvent(gZ) {
    if (gZ === 4) {
      this.actcon += 1;
    }
  }
  step() {
    let gZ = this.myself;
    if (co.monster[gZ] === 1) {
      if (co.mnfight === 1 && this.talked === 0) {
        if (co.mercymod[gZ] < 100) {
          cd(this);
        }
        if (!cv.exists("obj_darkener")) {
          cL(0, 0, cZ);
        }
        co.typer = 50;
        co.msg = new Array(100).fill(" ");
        co.msg[0] = " ";
        let gT = cr(this.x - 160, this.y, 3);
        if (gT.mywriter) {
          gT.mywriter.instance_destroy();
        }
        gT.instance_destroy();
        this.talked = 1;
        this.talktimer = 0;
      }
      if (this.talked === 1 && co.mnfight === 1) {
        this.rtimer = 0;
        if (cy() && this.talktimer > 5) {
          this.talktimer = this.talkmax;
        }
        this.talktimer += 1;
        if (this.talktimer >= this.talkmax) {
          cv.with("obj_writer", ga => ga.instance_destroy());
          co.mnfight = 2;
        }
        if (co.mnfight === 2) {
          if (!cv.exists("obj_moveheart")) {
            cn();
          }
          if (!cv.exists("obj_growtangle")) {
            cL(320, 170, cX);
          }
        }
      }
      if (co.mnfight === 2 && this.attacked === 0) {
        this.rtimer += 1;
        if (this.rtimer === 12) {
          co.turntimer = 150;
          this.pontotal = cu();
          for (let gd = 0; gd < 3; gd += 1) {
            if (co.monster[gd] === 1 && co.mercymod[gd] >= 100) {
              this.pontotal -= 1;
            }
          }
          if (this.pontotal === 3) {
            this.maxshot = 3;
          }
          if (this.pontotal === 2) {
            this.maxshot = 4;
          }
          if (this.pontotal === 1) {
            this.maxshot = 5;
          }
          if (this.pontotal <= 0) {
            co.turntimer = 10;
            this.maxshot = 6;
          }
          this.shotcount = 0;
          this.totalshotcount = 0;
          this.activetimer = 1;
          this.shotbuffer = 8;
          if (co.mercymod[gZ] < 100) {
            this.eyecon = 20;
          }
          this.turns += 1;
          this.attacked = 1;
          co.typer = 6;
          co.fc = 0;
          let ga = cN(0, 1, 2, 3, 4);
          if (ga === 0) {
            co.battlemsg[0] = "* Ponman advances one step at a time.";
          }
          if (ga === 1) {
            co.battlemsg[0] = "* Ponman listens politely^1, despite having no ears.";
          }
          if (ga === 2) {
            co.battlemsg[0] = "* Ponman seems hypnotized by your idle animation.";
          }
          if (ga === 3) {
            co.battlemsg[0] = "* Ponman gazes enigmatically.";
          }
          if (ga === 4) {
            co.battlemsg[0] = "* Smells like a pawn shop.";
          }
          if (co.monsterstatus[gZ] === 1) {
            co.battlemsg[0] = "* Ponman can't keep its eye open.";
          }
          if (co.monsterhp[gZ] <= co.monstermaxhp[gZ] / 3) {
            co.battlemsg[0] = "* Ponman looks dilated.";
          }
          if (co.mercymod[gZ] >= co.mercymax[gZ]) {
            co.msg[0] = "* Ponman is sleeping soundly.";
          }
          if (co.monstercomment[gZ] === "(Sleepy)") {
            co.msg[0] = "* The enemies became SLEEPY from Ralsei's lullaby!";
          }
        } else {
          co.turntimer = 120;
        }
      }
      if (co.mnfight === 2 && co.turntimer <= 1) {
        if (this.battlecancel === 1) {
          ca(gZ, 100);
        }
        if (this.battlecancel === 2) {
          cv.with("obj_battlecontroller", gO => {
            gO.noreturn = 1;
          });
          this.con = 1;
          this.battlecancel = 3;
        }
      }
    }
    if (co.myfight === 3) {
      this.actStep();
    }
    if (co.myfight === 7) {
      this.hspeed = 15;
    }
    if (this.sleeping === 1) {
      this.eyecon = 999;
    }
    if (this.eyecon === 0) {
      this.eye_angle = 180 + cY(this.siner / 8) * 30;
      if (this.eye_radius < 8) {
        this.eye_radius += 2;
      } else {
        this.eye_radius = 8;
      }
      if (this.addup === 0) {
        this.image_index = 1;
      } else {
        this.image_index = 3;
      }
      if (this.eye_angle > 200) {
        this.image_index = 0;
        this.addup = 1;
      }
      if (this.eye_angle < 160) {
        this.image_index = 2;
        this.addup = 0;
      }
    }
    if (this.eyecon === 10) {
      this.activetimer = 0;
      cv.with("obj_regularbullet", gO => {
        gO.active = 0;
        gO.image_alpha -= 0.1;
      });
      this.image_index = 0;
      this.eye_radius *= 0.7;
      if (cV(this.eye_radius) < 0.5) {
        this.eye_radius = 0;
        this.eye_angle = 0;
      }
      if (co.turntimer <= 1) {
        this.eyecon = 0;
      }
    }
    if (this.eyecon === 20) {
      if (this.spinspeed < 10) {
        this.spinspeed += 1;
      }
      if (this.pontotal > 1) {
        this.siner += this.spinspeed / 8;
      } else {
        this.siner += this.spinspeed / 20;
      }
      this.eye_angle = 180 + cY(this.siner / 8) * 70;
      if (this.eye_radius < 8) {
        this.eye_radius += 1;
      }
      this.grandbuffer -= 1;
      let gO = cv.first("obj_heart");
      if (gO) {
        this.x_angle = cz(this.eyex + 28 + this.x, this.eyey + 32 + this.y, gO.x + 8, gO.y + 8);
      } else {
        this.x_angle = 0;
      }
      if (cV(this.x_angle - this.eye_angle) < 25 && this.eye_angle >= 120 && this.eye_angle <= 240 && this.shotbuffer < 0 && this.shotcount < 3 && this.totalshotcount < this.maxshot) {
        this.shotcount += 1;
        if (this.pontotal === 2) {
          this.shotcount += 1;
        }
        if (this.pontotal === 3) {
          this.shotcount += 1;
        }
        if (this.shotcount >= 3) {
          this.totalshotcount += 1;
          this.shotcount = 0;
          if (this.pontotal === 1) {
            this.shotbuffer = 10;
          }
          if (this.pontotal === 2) {
            this.shotbuffer = 13;
          }
          if (this.pontotal === 3) {
            this.shotbuffer = 22;
          }
        }
        if (this.totalshotcount >= this.maxshot) {
          this.maxtimer = 1;
        }
        cp("snd_hurt1");
        let gq = cL(this.eyex + 28 + this.x, this.eyey + 32 + this.y, c1);
        if (!gq.destroyed) {
          gq.speed = 2;
          gq.timepoints = 2.5;
          gq.target = this.mytarget;
          gq.damage = co.monsterat[gZ] * 5;
          gq.friction = -0.11;
          if (this.pontotal === 1) {
            gq.friction = -0.12;
          }
          gq.direction = this.eye_angle;
          gq.sprite_index = "spr_diamondbullet";
          gq.image_angle = gq.direction;
        }
      }
      if (this.maxtimer > 0) {
        this.maxtimer += 1;
      }
      if (co.turntimer < 10) {
        this.eyecon = 10;
      }
    }
    this.siner += 1;
    this.shotbuffer -= 1;
    if (this.becomesleep === 1) {
      this.eyecon = 999;
      this.sleeping = 1;
      this.becomesleep = 0;
      this.sleep_index = 5;
    }
    if (this.eye_angle < 0) {
      this.eye_angle += 360;
    }
    if (this.eye_angle > 360) {
      this.eye_angle -= 360;
    }
    this.eyex = cH(this.eye_radius, this.eye_angle);
    this.eyey = cb(this.eye_radius, this.eye_angle);
  }
  actStep() {
    let gZ = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* PONMAN - AT 8 DF 0&* Its nucleus doubles as an eyespot./%";
      cx();
    }
    if (this.acting === 2 && this.actcon === 0) {
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* You whispered goodnight to Ponman^1.&* It fell asleep.../%";
      this.sleeping = 1;
      ca(gZ, 100);
      cx();
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      if (this.lullabied === 0) {
        this.singy = cp("snd_ralseising1");
        cv.with("obj_ponman_enemy", ga => {
          ga.lullabied = 1;
        });
      } else {
        this.singy = cp("snd_ralseising2");
        cv.with("obj_ponman_enemy", ga => {
          ga.lullabied = 0;
        });
      }
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* Ralsei sang a soft and entrancing lullaby!/%";
      let gT = cv.first("obj_heroralsei");
      cv.with("obj_heroralsei", ga => {
        ga.visible = false;
      });
      if (gT) {
        this.ralsing = cC(gT.x, gT.y, "spr_ralseib_sing");
        this.ralsing.image_speed = 0.2;
      }
      this.lullatimer = 0;
      cx();
      this.actcon = 10;
    }
    if (this.acting === 4 && this.actcon === 0) {
      this.actcon = 1;
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* You and Ralsei warned Ponman about Susie^1.&* The enemy went on guard.../%";
      if (cu() > 1) {
        co.msg[0] = "* You and Ralsei warned the enemies about Susie^1.&* Everyone went on guard./%";
      }
      for (let ga = 0; ga < 3; ga += 1) {
        co.monstercomment[ga] = "(Warned)";
        co.automiss[ga] = 1;
      }
      cx();
    }
    if (this.actcon === 1 && !cv.exists("obj_writer")) {
      this.actcon = 0;
      c4();
    }
    if (this.actcon === 10) {
      this.lullatimer += 1;
      if (this.lullatimer >= 30) {
        this.actcon = 11;
      }
    }
    if (this.actcon === 11 && cv.exists("obj_writer") === false) {
      if (this.ralsing && !this.ralsing.destroyed) {
        this.ralsing.instance_destroy();
      }
      cv.with("obj_heroralsei", gd => {
        gd.visible = true;
      });
      if (this.singy) {
        ck(this.singy);
        try {
          this.singy.currentTime = 0;
        } catch {}
        this.singy = null;
      }
      co.msg = new Array(100).fill(" ");
      co.msg[0] = "* PONMAN fell asleep^1!&* The enemies became TIRED!/%";
      if (cu() > 1 && ch(2)) {
        for (let gd = 0; gd < 3; gd += 1) {
          if (co.char[gd] && cQ(co.char[gd]) === 2 && co.charcond[gd] !== 5) {
            co.charcond[gd] = 5;
            co.faceaction[gd] = 9;
            co.charmove[gd] = 0;
            co.msg[0] = "* PONMAN fell asleep^1!&* SUSIE fell asleep^1!&* The enemies became TIRED!/%";
          }
        }
      }
      this.sleeping = 1;
      ca(gZ, 100);
      cv.with("obj_monsterparent", gO => {
        co.monstercomment[gO.myself] = "(Sleepy)";
        co.monsterstatus[gO.myself] = 1;
      });
      cx();
      this.actcon = 1;
    }
  }
  draw(gZ) {
    let gT = this.myself;
    if (this.state === 3) {
      if (co.monsterhp[gT] <= co.monstermaxhp[gT] / 3) {
        co.monsterstatus[gT] = 1;
        if (co.monstercomment[gT] === " ") {
          co.monstercomment[gT] = "(Weak)";
        }
      }
      this.hurttimer -= 1;
      if (this.hurttimer < 0) {
        this.state = 0;
      } else {
        if (co.monster[gT] === 0) {
          this.hspeed = 12;
          this.turnt -= 8;
          this.vspeed = -4;
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
        gZ.draw_sprite_ext("spr_ponman_idle", 0, this.x + this.shakex, this.y, 2, 2, 0, this.image_blend, 1);
        if (this.sleeping === 0) {
          gZ.draw_sprite_ext("spr_ponman_eye", 0, this.x + 28 + this.eyex, this.y + 32 + this.eyey, 2, 2, 0, cW.white, 1);
        }
        if (this.sleeping === 1) {
          ca(gT, -100);
          this.sprite_index = "spr_ponman_idle";
          this.image_index = 0;
          this.sleeping = 0;
        }
      }
    }
    if (this.state === 0) {
      let ga = "spr_ponman_idle";
      this.this_index = this.image_index;
      if (this.sleeping === 1) {
        ga = "spr_ponman_appear";
        this.this_index = this.sleep_index;
        if (this.sleep_index > 0.5) {
          this.sleep_index -= 0.25;
        }
      }
      gZ.draw_sprite_ext(ga, this.this_index, this.x, this.y, 2, 2, 0, this.image_blend, 1);
      if (this.sleeping === 0) {
        gZ.draw_sprite_ext("spr_ponman_eye", 0, this.x + 28 + this.eyex, this.y + 32 + this.eyey, 2, 2, 0, cW.white, 1);
      }
      if (this.flash === 1) {
        this.fsiner += 1;
        gZ.draw_sprite_white(ga, this.this_index, this.x, this.y, 2, 2, 0, -cD(this.fsiner / 5) * 0.4 + 0.6);
      }
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
x0(gg, "obj_ponman_enemy");
x2(gg, "kinds", cM("obj_ponman_enemy", c8));
x2(gg, "defaultDepth", 90);
x2(gg, "defaultSprite", "spr_ponman_idle");
var obj_ponman_enemy = gg;
var gC = [{
  id: "ponman2",
  name: "Ponman x2",
  chapter: 1,
  area: "Field",
  desc: "Two Ponmen.#Eye-aimed diamonds.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: obj_ponman_enemy,
    type: 11,
    x: 480,
    y: 110,
    setup: gB
  }, {
    cls: obj_ponman_enemy,
    type: 11,
    x: 500,
    y: 200,
    setup: gB
  }],
  battlemsg: "* Ponman drew near!",
  encounterno: 13,
  music: "battle"
}, {
  id: "ponman3",
  name: "Ponman x3",
  chapter: 1,
  area: "Field",
  desc: "Three Ponmen.#Eye-aimed diamonds.",
  party: [1, 2, 3],
  heromakex: [80, 80, 80],
  heromakey: [50, 130, 210],
  monsters: [{
    cls: obj_ponman_enemy,
    type: 11,
    x: 480,
    y: 20,
    setup: gB
  }, {
    cls: obj_ponman_enemy,
    type: 11,
    x: 500,
    y: 120,
    setup: gB
  }, {
    cls: obj_ponman_enemy,
    type: 11,
    x: 460,
    y: 220,
    setup: gB
  }],
  battlemsg: "* Ponman drew near!",
  encounterno: 14,
  music: "battle"
}];
x3(obj_ponman_enemy, "G.mnfight = 2;");
var gX = [x5, xO, h, u, xz, rw, BB, g7, k, f, Bg];
var gI = {
  cirno_baka: "mp3",
  cyber_battle_backing: "wav",
  cyber_battle_backing_solo: "wav",
  motor_swing_down: "wav",
  motor_swing_down_bc: "wav",
  motor_upper_2: "wav",
  motor_upper_2_bc: "wav",
  motor_upper_quick: "wav",
  motor_upper_quick_bc: "wav",
  motor_upper_quick_high: "wav",
  motor_upper_quick_high_bc: "wav",
  motor_upper_quick_mid: "wav",
  motor_upper_quick_mid_bc: "wav",
  mus_a2: "ogg",
  mus_alphysfix: "ogg",
  mus_amalgam: "ogg",
  mus_ambientwater: "ogg",
  mus_anothermedium: "ogg",
  mus_bad: "ogg",
  mus_badnote1: "wav",
  mus_badnote2: "wav",
  mus_badnote3: "wav",
  mus_barrier: "ogg",
  mus_battle1: "ogg",
  mus_battle2: "ogg",
  mus_bergentruckung: "ogg",
  mus_bgflameA: "ogg",
  mus_birdsong: "ogg",
  mus_boss1: "ogg",
  mus_cast_1: "ogg",
  mus_cast_2: "ogg",
  mus_cast_3: "ogg",
  mus_cast_4: "ogg",
  mus_cast_5: "ogg",
  mus_cast_6: "ogg",
  mus_cast_7: "ogg",
  mus_chime: "wav",
  mus_chokedup: "ogg",
  mus_churchbell: "ogg",
  mus_computer: "ogg",
  mus_coolbeat: "ogg",
  mus_core: "ogg",
  mus_core_ambience: "ogg",
  mus_create: "wav",
  mus_creepy_ambience: "ogg",
  mus_crickets: "ogg",
  mus_cymbal: "ogg",
  mus_dance_of_dog: "ogg",
  mus_date: "ogg",
  mus_date_fight: "ogg",
  mus_date_tense: "ogg",
  mus_deeploop2: "ogg",
  mus_dialup_0: "wav",
  mus_dialup_1: "wav",
  mus_dialup_2: "wav",
  mus_dialup_3: "wav",
  mus_dialup_4: "wav",
  mus_dialup_5: "wav",
  mus_disturbing: "ogg",
  mus_dogappear: "ogg",
  mus_dogmeander: "ogg",
  mus_dogroom: "ogg",
  mus_dogsong: "ogg",
  mus_dontgiveup: "ogg",
  mus_doorclose: "ogg",
  mus_dooropen: "ogg",
  mus_drone: "ogg",
  mus_drumcuica: "wav",
  mus_drumcuica2: "wav",
  mus_drumcymbal: "wav",
  mus_drumkick: "wav",
  mus_drumsnare: "wav",
  mus_dummybattle: "ogg",
  mus_dununnn: "ogg",
  mus_elevator: "ogg",
  mus_elevator_last: "ogg",
  mus_endarea_parta: "ogg",
  mus_endarea_partb: "ogg",
  mus_endingexcerpt1: "ogg",
  mus_endingexcerpt2: "ogg",
  mus_explosion: "wav",
  mus_express_myself: "ogg",
  mus_fallendown2: "ogg",
  mus_fearsting: "ogg",
  mus_flowey: "ogg",
  mus_f_6s_1: "ogg",
  mus_f_6s_2: "ogg",
  mus_f_6s_3: "ogg",
  mus_f_6s_4: "ogg",
  mus_f_6s_5: "ogg",
  mus_f_6s_6: "ogg",
  mus_f_alarm: "ogg",
  mus_f_destroyed: "ogg",
  mus_f_destroyed2: "ogg",
  mus_f_destroyed3: "ogg",
  mus_f_endnote: "wav",
  mus_f_finale_1: "ogg",
  mus_f_finale_1_l: "ogg",
  mus_f_finale_2: "ogg",
  mus_f_finale_3: "ogg",
  mus_f_glock: "wav",
  mus_f_intro: "ogg",
  mus_f_laugh: "wav",
  mus_f_newlaugh: "ogg",
  mus_f_newlaugh_low: "ogg",
  mus_f_noise: "wav",
  mus_f_orchhit: "wav",
  mus_f_orchhit_l: "wav",
  mus_f_part1: "ogg",
  mus_f_part2: "ogg",
  mus_f_part3: "ogg",
  mus_f_saved: "ogg",
  mus_f_wind1: "ogg",
  mus_f_wind2: "ogg",
  mus_gameover: "ogg",
  mus_ghostbattle: "ogg",
  mus_harpnoise: "ogg",
  mus_hereweare: "ogg",
  mus_hotel: "ogg",
  mus_hotel_battle: "ogg",
  mus_house1: "ogg",
  mus_house2: "ogg",
  mus_intronoise: "ogg",
  mus_kingdescription: "ogg",
  mus_lab: "ogg",
  mus_leave: "ogg",
  mus_menu1: "ogg",
  mus_menu2: "ogg",
  mus_menu3: "ogg",
  mus_menu4: "ogg",
  mus_mettafly: "ogg",
  mus_mettatonbattle: "ogg",
  mus_mettaton_ex: "ogg",
  mus_mettaton_neo: "ogg",
  mus_mettaton_pretransform: "ogg",
  mus_mettmusical1: "ogg",
  mus_mettmusical2: "ogg",
  mus_mettmusical3: "ogg",
  mus_mettmusical4: "ogg",
  mus_mettsad: "ogg",
  mus_mettsmash: "wav",
  mus_mett_applause: "ogg",
  mus_mett_cheer: "ogg",
  mus_mode: "ogg",
  mus_mtgameshow: "ogg",
  mus_mt_yeah: "wav",
  mus_muscle: "ogg",
  mus_musicbox: "ogg",
  mus_myemeow: "ogg",
  mus_mysteriousroom2: "ogg",
  mus_mystery: "ogg",
  mus_napstachords: "ogg",
  mus_napstahouse: "ogg",
  mus_news: "ogg",
  mus_news_battle: "ogg",
  mus_note1: "wav",
  mus_note2: "wav",
  mus_note3: "wav",
  mus_note4: "wav",
  mus_note5: "wav",
  mus_note6: "wav",
  mus_ohyes: "ogg",
  mus_oogloop: "ogg",
  mus_operatile: "ogg",
  mus_options_fall: "ogg",
  mus_options_summer: "ogg",
  mus_options_winter: "ogg",
  mus_papyrus: "ogg",
  mus_papyrusboss: "ogg",
  mus_piano: "ogg",
  mus_piano1: "wav",
  mus_piano2: "wav",
  mus_piano3: "wav",
  mus_piano4: "wav",
  mus_piano5: "wav",
  mus_piano6: "wav",
  mus_piano7: "wav",
  mus_piano8: "wav",
  mus_piano9: "wav",
  mus_pianoA: "wav",
  mus_prebattle1: "ogg",
  mus_predummy: "ogg",
  mus_race: "ogg",
  mus_rain: "ogg",
  mus_rain_deep: "ogg",
  mus_repeat_1: "ogg",
  mus_repeat_2: "ogg",
  mus_reunited: "ogg",
  mus_rimshot: "ogg",
  mus_rotate: "wav",
  mus_ruins: "ogg",
  mus_ruinspiano: "ogg",
  mus_sansdate: "ogg",
  mus_sfx_abreak: "wav",
  mus_sfx_abreak2: "wav",
  mus_sfx_ahh: "wav",
  mus_sfx_a_bullet: "wav",
  mus_sfx_a_gigatalk: "wav",
  mus_sfx_a_grab: "ogg",
  mus_sfx_a_lithit: "wav",
  mus_sfx_a_lithit2: "wav",
  mus_sfx_a_pullback: "wav",
  mus_sfx_a_swipe: "wav",
  mus_sfx_a_swordappear: "wav",
  mus_sfx_a_target: "wav",
  mus_sfx_bookspin: "wav",
  mus_sfx_chainsaw: "ogg",
  mus_sfx_cinematiccut: "wav",
  mus_sfx_eyeflash: "wav",
  mus_sfx_frypan: "wav",
  mus_sfx_generate: "wav",
  mus_sfx_gigapunch: "wav",
  mus_sfx_gunshot: "wav",
  mus_sfx_hypergoner_charge: "ogg",
  mus_sfx_hypergoner_laugh: "ogg",
  mus_sfx_oh: "wav",
  mus_sfx_rainbowbeam_1: "wav",
  mus_sfx_rainbowbeam_hold: "ogg",
  mus_sfx_segapower: "wav",
  mus_sfx_segapower2: "wav",
  mus_sfx_sparkles: "wav",
  mus_sfx_spellcast: "wav",
  mus_sfx_star: "wav",
  mus_sfx_swipe: "wav",
  mus_sfx_ted: "wav",
  mus_sfx_voice_jafe: "wav",
  mus_sfx_voice_ted: "wav",
  mus_sfx_voice_triple: "wav",
  mus_sfx_yowl: "wav",
  mus_shop: "ogg",
  mus_sigh_of_dog: "ogg",
  mus_silence: "ogg",
  mus_singF: "wav",
  mus_singG: "wav",
  mus_singvoice: "wav",
  mus_smallshock: "ogg",
  mus_snoresymphony: "ogg",
  mus_snowwalk: "ogg",
  mus_snowy: "ogg",
  mus_spider: "ogg",
  mus_spoopy: "ogg",
  mus_spoopy_holiday: "ogg",
  mus_spoopy_wave: "ogg",
  mus_star: "ogg",
  mus_sticksnap: "ogg",
  mus_story: "ogg",
  mus_story_stuck: "ogg",
  mus_temshop: "ogg",
  mus_temvillage: "ogg",
  mus_tension: "ogg",
  mus_tone2: "ogg",
  mus_tone3: "ogg",
  mus_toomuch: "ogg",
  mus_toriel: "ogg",
  mus_town: "ogg",
  mus_tv: "ogg",
  mus_undyneboss: "ogg",
  mus_undynefast: "ogg",
  mus_undynepiano: "ogg",
  mus_undynescary: "ogg",
  mus_undynetheme: "ogg",
  mus_undynetruetheme: "ogg",
  mus_vsasgore: "ogg",
  mus_waterfall: "ogg",
  mus_waterquiet: "ogg",
  mus_wawa: "ogg",
  mus_whoopee: "ogg",
  mus_wind: "ogg",
  mus_woofenstein: "ogg",
  mus_woofenstein_loop: "ogg",
  mus_wrongworld: "ogg",
  mus_xpart: "ogg",
  mus_xpart_2: "ogg",
  mus_xpart_a: "ogg",
  mus_xpart_b: "ogg",
  mus_xpart_back: "ogg",
  mus_x_undyne: "ogg",
  mus_x_undyne_pre: "ogg",
  mus_yourbestfriend_3: "ogg",
  mus_zzz_c: "ogg",
  mus_zzz_c2: "ogg",
  mus_zz_megalovania: "ogg",
  mus_z_ending: "ogg",
  punch_ish_1: "wav",
  punch_ish_1_bc: "wav",
  rhythm_battle_snare: "wav",
  sfx_coin_chefs: "wav",
  shadowman_sax_long_1: "wav",
  shadowman_sax_long_2: "wav",
  shadowman_sax_long_3: "wav",
  shadowman_sax_long_4: "wav",
  shadowman_sax_long_solo_note: "wav",
  snd_acquire_lancer: "wav",
  snd_applause: "wav",
  snd_applause_single: "wav",
  snd_arrow: "wav",
  snd_audience_aww: "wav",
  snd_awkward: "wav",
  snd_b: "wav",
  "snd_b@chut": "wav",
  snd_badexplosion: "wav",
  snd_bageldefeat: "wav",
  snd_barrel_jump: "wav",
  snd_battleenter: "wav",
  snd_battlefall: "wav",
  snd_bell: "wav",
  "snd_bell@chut": "wav",
  snd_bell_bc: "wav",
  snd_bell_bounce_short: "wav",
  snd_bigscore: "wav",
  snd_birdtweet: "wav",
  snd_block2: "wav",
  snd_bluh: "wav",
  snd_board_bomb: "wav",
  snd_board_bosshit: "wav",
  snd_board_damage: "wav",
  snd_board_door_close: "wav",
  snd_board_kill: "wav",
  snd_board_lift: "wav",
  snd_board_mantle_dash_fast: "wav",
  snd_board_mantle_dash_prepare: "wav",
  snd_board_mantle_dash_slow: "wav",
  snd_board_mantle_laugh_mid: "wav",
  snd_board_mantle_move: "wav",
  snd_board_mantle_unknown_a: "wav",
  snd_board_mantle_unknown_b: "wav",
  snd_board_playerhurt: "wav",
  snd_board_splash: "wav",
  snd_board_summon: "wav",
  snd_board_sword1: "wav",
  snd_board_sword2: "wav",
  snd_board_sword3: "wav",
  snd_board_sword_metal: "wav",
  snd_board_text_main: "wav",
  snd_board_text_main_end: "wav",
  snd_board_throw: "wav",
  snd_board_torch: "wav",
  snd_board_torch_high: "wav",
  snd_board_unsummon: "wav",
  snd_bomb: "wav",
  "snd_bomb@chut": "wav",
  snd_bombfall: "wav",
  snd_boost: "wav",
  snd_boxing_fight: "wav",
  snd_boxing_fight_bc: "wav",
  snd_boxing_round1: "wav",
  snd_boxing_round1_bc: "wav",
  snd_boxing_round2: "wav",
  snd_boxing_round3: "wav",
  snd_break1: "wav",
  "snd_break1@chut": "wav",
  snd_break2: "wav",
  "snd_break2@chut": "wav",
  snd_breaka: "wav",
  snd_breakb: "wav",
  snd_breakc: "wav",
  snd_bump: "wav",
  snd_bwaap: "wav",
  snd_camera_flash: "wav",
  snd_cardrive: "wav",
  snd_cardrive_bc: "wav",
  snd_carhonk: "wav",
  snd_catsalad: "wav",
  snd_chain_extend: "wav",
  snd_chain_extend_bc: "wav",
  snd_chain_wave: "wav",
  snd_chargeshot_charge: "wav",
  snd_chargeshot_fire: "wav",
  snd_chug: "wav",
  snd_coaster_kiss: "wav",
  snd_coin: "wav",
  snd_credit_s: "wav",
  snd_creepyjingle: "wav",
  snd_criticalswing: "wav",
  snd_criticalswing_bc: "wav",
  snd_crow: "wav",
  snd_crowd: "wav",
  snd_crowd_aah: "wav",
  snd_crowd_cheer_single: "wav",
  snd_crowd_laughter_loop: "wav",
  snd_crowd_laughter_single: "wav",
  snd_crowd_ooh: "wav",
  snd_crowngrowth: "wav",
  snd_crownshrink: "wav",
  snd_dadblast: "wav",
  snd_dadlaugh: "wav",
  snd_dadtxt: "wav",
  snd_damage: "wav",
  "snd_damage@chut": "wav",
  snd_damage_bc: "wav",
  snd_deathnoise: "wav",
  snd_defeatrun: "wav",
  snd_dimbox: "wav",
  snd_doghurt1: "wav",
  snd_dogresidue: "wav",
  snd_dogsalad: "wav",
  snd_doorclose: "wav",
  snd_dooropen: "wav",
  snd_drake_dodge: "wav",
  snd_drive: "wav",
  snd_drumroll: "wav",
  snd_dumbvictory: "wav",
  snd_egg: "wav",
  snd_ehurt1: "wav",
  "snd_ehurt1@chut": "wav",
  snd_electric_meow: "wav",
  snd_electric_talk: "wav",
  snd_equip: "wav",
  snd_error: "wav",
  snd_escaped: "wav",
  "snd_escaped@chut": "wav",
  snd_explosion: "wav",
  snd_explosion_8bit: "wav",
  snd_explosion_firework: "wav",
  snd_explosion_firework_bc: "wav",
  snd_explosion_mmx: "wav",
  snd_explosion_mmx3: "wav",
  snd_face_hit: "wav",
  snd_fall: "wav",
  snd_fall_cool_deep: "wav",
  snd_floweylaugh: "wav",
  snd_floweytalk1: "wav",
  snd_floweytalk2: "wav",
  snd_foodscore: "wav",
  snd_ftext_bounce: "wav",
  snd_ftext_brother: "wav",
  snd_ftext_dark_fountain: "wav",
  snd_ftext_enter: "wav",
  snd_ftext_gunshot: "wav",
  snd_ftext_names: "wav",
  snd_ftext_prize: "wav",
  snd_ftext_susiezilla: "wav",
  snd_ftext_toriel: "wav",
  snd_ftext_vibraphones: "wav",
  snd_ftext_woodblock: "wav",
  snd_glassbreak: "wav",
  snd_grab: "wav",
  "snd_grab@chut": "wav",
  snd_grandpatemi: "wav",
  snd_graze: "wav",
  snd_graze_bc: "wav",
  snd_guitarerror: "wav",
  snd_guitarerror2: "wav",
  snd_guitarpickup1: "wav",
  snd_guitarpickup2: "wav",
  snd_guitarpickup3: "wav",
  snd_guitarpickup4: "wav",
  snd_gunshot: "wav",
  snd_gunshot_b: "wav",
  snd_heal_c: "wav",
  snd_heartshot: "wav",
  snd_heartshot_dr: "wav",
  snd_heartshot_dr_b: "wav",
  snd_heavyswing: "wav",
  snd_heavyswing_bc: "wav",
  snd_heavy_passing: "wav",
  snd_hero: "wav",
  snd_hit: "wav",
  "snd_hit@chut": "wav",
  snd_howl: "wav",
  snd_hurt1: "wav",
  "snd_hurt1@chut": "wav",
  snd_hurt1_bc: "wav",
  snd_hurtbeef: "wav",
  snd_hurtbig: "wav",
  snd_hurtbuzz: "wav",
  snd_hurtdragon: "wav",
  snd_hurtgirl: "wav",
  snd_hurtlaugh: "wav",
  snd_hypnosis: "wav",
  snd_impact: "wav",
  "snd_impact@chut": "wav",
  snd_impact_bc: "wav",
  snd_item: "wav",
  "snd_item@chut": "wav",
  snd_joker_anything: "wav",
  snd_joker_byebye: "wav",
  snd_joker_chaos: "wav",
  snd_joker_ha0: "wav",
  snd_joker_ha1: "wav",
  snd_joker_laugh0: "wav",
  snd_joker_laugh1: "wav",
  snd_joker_metamorphosis: "wav",
  snd_joker_neochaos: "wav",
  snd_joker_oh: "wav",
  snd_jump: "wav",
  snd_jump_bc: "wav",
  snd_knight_boxbreak: "wav",
  snd_knight_cut: "wav",
  snd_knight_cut2: "wav",
  snd_knight_drawpower: "wav",
  snd_knight_fallingsword_big: "wav",
  snd_knight_hurt: "wav",
  snd_knight_hurtb: "wav",
  snd_knight_jump: "wav",
  snd_knight_jump_quick: "wav",
  snd_knight_powerup_white: "wav",
  snd_knight_puff: "wav",
  snd_knight_roar: "wav",
  snd_knight_rotatingslash_line: "wav",
  snd_knight_star_explosion_close: "wav",
  snd_knight_stretch: "wav",
  snd_knight_teleport: "wav",
  snd_knock: "wav",
  "snd_knock@chut": "wav",
  snd_lancerhonk: "wav",
  snd_lancerlaugh: "wav",
  snd_lancerwhistle: "wav",
  snd_laughtrack_short_temp: "wav",
  snd_laz: "wav",
  snd_laz_c: "wav",
  snd_levelup: "wav",
  "snd_levelup@chut": "wav",
  snd_link_secret_bad: "wav",
  snd_locker: "wav",
  snd_magicmarker: "wav",
  snd_magicsprinkle: "wav",
  snd_menumove: "wav",
  snd_mercyadd: "wav",
  snd_metalhit: "wav",
  snd_metalhit_bc: "wav",
  snd_metal_hit: "wav",
  snd_metal_hit_guard: "wav",
  snd_metal_hit_reverb: "wav",
  snd_motor_swing_down: "wav",
  snd_motor_upper_2: "wav",
  snd_mtt1: "wav",
  snd_mtt2: "wav",
  snd_mtt3: "wav",
  snd_mtt4: "wav",
  snd_mtt5: "wav",
  snd_mtt6: "wav",
  snd_mtt7: "wav",
  snd_mtt8: "wav",
  snd_mtt9: "wav",
  snd_mtt_burst: "wav",
  snd_mtt_hit: "wav",
  snd_mtt_prebomb: "wav",
  snd_noise: "wav",
  "snd_noise@chut": "wav",
  snd_nosound: "wav",
  "snd_nosound@chut": "wav",
  snd_object_passing: "wav",
  snd_orchhit: "wav",
  snd_petrify: "wav",
  snd_phone: "wav",
  "snd_phone@chut": "wav",
  snd_pianonoise: "wav",
  snd_pinball: "wav",
  snd_pirouette: "wav",
  snd_pombark: "wav",
  "snd_pombark@chut": "wav",
  snd_power: "wav",
  "snd_power@chut": "wav",
  snd_punchheavythunder: "wav",
  snd_punchheavythunder_bc: "wav",
  snd_punchmed: "wav",
  snd_punchmed_bc: "wav",
  snd_punchstrong: "wav",
  snd_punchweak: "wav",
  "snd_punchweak@chut": "wav",
  snd_punch_ish_1: "wav",
  snd_quake_nes: "wav",
  snd_queenhowl_b: "wav",
  snd_queenhowl_b_bc: "wav",
  snd_queen_bitcrushlaugh: "wav",
  snd_queen_gasp: "wav",
  snd_queen_hoot_0: "wav",
  snd_queen_hoot_1: "wav",
  snd_queen_hoot_2: "wav",
  snd_queen_laugh_0: "wav",
  snd_queen_laugh_0_bc: "wav",
  snd_queen_punched_lower: "wav",
  snd_queen_punched_lower_heavy: "wav",
  snd_ralseising1: "wav",
  snd_ralseising2: "wav",
  snd_reverse_spare: "wav",
  snd_rimshot: "wav",
  snd_rocket: "wav",
  snd_rocket_bc: "wav",
  snd_rocket_long: "wav",
  snd_rocket_sneo: "wav",
  snd_rudebuster_hit: "wav",
  snd_rudebuster_swing: "wav",
  snd_rumble: "wav",
  snd_saber3: "wav",
  snd_scissorbell: "wav",
  snd_screenshake: "wav",
  snd_screenshake_bc: "wav",
  snd_scytheburst: "wav",
  snd_scytheburst_bc: "wav",
  snd_select: "wav",
  "snd_select@chut": "wav",
  snd_shadowpendant: "wav",
  snd_shakerbreaker: "wav",
  snd_shineselect: "wav",
  snd_shinka_ambience: "wav",
  snd_shock: "wav",
  snd_slidewhist: "wav",
  snd_slidewhistle: "wav",
  snd_smallswing: "wav",
  snd_smashreveal: "wav",
  snd_snd_motor_upper_quick_high: "wav",
  snd_sneo_laugh_long: "wav",
  snd_sneo_overpower: "wav",
  snd_sonar: "wav",
  snd_spamton_laugh: "wav",
  snd_spare: "wav",
  snd_sparkle1: "wav",
  snd_sparkle_gem: "wav",
  snd_sparkle_glock: "wav",
  snd_spearappear: "wav",
  "snd_spearappear@chut": "wav",
  snd_spearappear_choppy: "wav",
  snd_spearrise: "wav",
  "snd_spearrise@chut": "wav",
  snd_speedup: "wav",
  snd_spellcast: "wav",
  snd_spell_cure_slight_smaller: "wav",
  snd_splat: "wav",
  snd_spooky: "wav",
  snd_squeak: "wav",
  snd_squeaky: "wav",
  snd_squeaky_bc: "wav",
  snd_stardrop: "wav",
  snd_step1: "wav",
  snd_step2: "wav",
  snd_suslaugh: "wav",
  snd_sussurprise: "wav",
  snd_swallow: "wav",
  "snd_swallow@chut": "wav",
  snd_swing: "wav",
  snd_switchpull_n: "wav",
  snd_tearcard: "wav",
  snd_tem: "wav",
  snd_tem2: "wav",
  snd_tem3: "wav",
  snd_tem4: "wav",
  snd_tem5: "wav",
  snd_tem6: "wav",
  snd_tensionhorn: "wav",
  snd_text: "wav",
  snd_tm_quiz_a: "wav",
  snd_tm_quiz_b: "wav",
  snd_tm_quiz_c: "wav",
  snd_tm_quiz_d: "wav",
  snd_toilet: "wav",
  snd_tvturnoff: "wav",
  snd_tvturnoff2: "wav",
  snd_tv_alarm: "wav",
  snd_tv_static: "wav",
  snd_tv_voice_short: "wav",
  snd_tv_voice_short_10: "wav",
  snd_tv_voice_short_2: "wav",
  snd_tv_voice_short_3: "wav",
  snd_tv_voice_short_4: "wav",
  snd_tv_voice_short_5: "wav",
  snd_tv_voice_short_6: "wav",
  snd_tv_voice_short_7: "wav",
  snd_tv_voice_short_8: "wav",
  snd_tv_voice_short_9: "wav",
  SND_TXT1: "wav",
  SND_TXT2: "wav",
  snd_txtal: "wav",
  "snd_txtal@chut": "wav",
  snd_txtasg: "wav",
  "snd_txtasg@chut": "wav",
  snd_txtasr: "wav",
  snd_txtasr2: "wav",
  snd_txtber: "wav",
  snd_txtecho: "wav",
  snd_txtjok: "wav",
  snd_txtlan: "wav",
  snd_txtnoe: "wav",
  snd_txtpap: "wav",
  "snd_txtpap@chut": "wav",
  snd_txtq: "wav",
  snd_txtq_2: "wav",
  snd_txtral: "wav",
  snd_txtrud: "wav",
  snd_txtrx1: "wav",
  snd_txtsans: "wav",
  snd_txtsans2: "wav",
  "snd_txtsans@chut": "wav",
  snd_txtspam: "wav",
  snd_txtspam2: "wav",
  snd_txtsus: "wav",
  snd_txtsusral: "wav",
  snd_txttor: "wav",
  snd_txttor2: "wav",
  "snd_txttor@chut": "wav",
  snd_txtund: "wav",
  snd_txtund2: "wav",
  snd_txtund3: "wav",
  snd_txtund4: "wav",
  "snd_txtund@chut": "wav",
  snd_txtund_hyper: "wav",
  snd_ultraswing: "wav",
  snd_ultraswing_bc: "wav",
  snd_vaporized: "wav",
  snd_victor: "wav",
  snd_vulkinhurt: "wav",
  snd_wallclaw: "wav",
  snd_weaponpull_fast: "wav",
  snd_weirdeffect: "wav",
  snd_whip_crack_only: "wav",
  snd_whip_hard: "wav",
  snd_whip_throw_only: "wav",
  snd_whistlebreath: "wav",
  snd_wideslash_low: "wav",
  snd_wing: "wav",
  snd_wngdng1: "wav",
  snd_wngdng2: "wav",
  snd_wngdng3: "wav",
  snd_wngdng4: "wav",
  snd_wngdng5: "wav",
  snd_wngdng6: "wav",
  snd_wngdng7: "wav",
  snd_won: "wav",
  snd_wrongvictory: "wav",
  snd_yeah: "wav",
  a2: "ogg",
  acid_tunnel: "ogg",
  alarm_titlescreen: "ogg",
  alley_ambience: "ogg",
  alphysfix: "ogg",
  amalgam: "ogg",
  ambientwater: "ogg",
  ambientwater_weird: "ogg",
  anothermedium: "ogg",
  april_2012: "ogg",
  AUDIO_ANOTHERHIM: "ogg",
  AUDIO_DARKNESS: "ogg",
  AUDIO_DEFEAT: "ogg",
  AUDIO_DRONE: "ogg",
  AUDIO_STORY: "ogg",
  baci_distort: "ogg",
  baci_perugina: "ogg",
  bad: "ogg",
  barrier: "ogg",
  basement: "ogg",
  battle: "ogg",
  battle1: "ogg",
  battle2: "ogg",
  battle_vapor: "ogg",
  berdly_audience: "ogg",
  berdly_battle_heartbeat_true: "ogg",
  berdly_chase: "ogg",
  berdly_descend: "ogg",
  berdly_flashback: "ogg",
  berdly_theme: "ogg",
  bergentruckung: "ogg",
  bgflameA: "ogg",
  bird: "ogg",
  birdnoise: "ogg",
  birdsong: "ogg",
  board4_rhythm: "ogg",
  board_4: "ogg",
  board_4_challenge: "ogg",
  board_lancer_dig: "ogg",
  board_ocean: "ogg",
  board_sword_music: "ogg",
  board_zelda: "ogg",
  boss1: "ogg",
  boxing_boss: "ogg",
  boxing_game: "ogg",
  card_castle: "ogg",
  castletown: "ogg",
  castletown_empty: "ogg",
  cast_1: "ogg",
  cast_2: "ogg",
  cast_3: "ogg",
  cast_4: "ogg",
  cast_5: "ogg",
  cast_6: "ogg",
  cast_7: "ogg",
  ch2_credits: "ogg",
  "ch3-practice_song_combined": "ogg",
  "ch3-practice_song_noguit": "ogg",
  ch3_board2: "ogg",
  ch3_board3: "ogg",
  ch3_karaoke_example_guit_only: "ogg",
  ch3_karaoke_example_noguit: "ogg",
  ch3_karaoke_full: "ogg",
  ch3_karaoke_no_guitar: "ogg",
  ch3_south_of_the_border: "ogg",
  ch3_tvtime: "ogg",
  ch3_tvtime_guitar: "ogg",
  charjoined: "ogg",
  checkers: "ogg",
  chokedup: "ogg",
  churchbell: "ogg",
  computer: "ogg",
  confession: "ogg",
  coolbeat: "ogg",
  "coolbeat@chut": "ogg",
  core: "ogg",
  core_ambience: "ogg",
  creepychase: "ogg",
  creepydoor: "ogg",
  creepylandscape: "ogg",
  creepy_ambience: "ogg",
  crickets: "ogg",
  cyber: "ogg",
  cybercity: "ogg",
  cybercity_alt: "ogg",
  cyberhouse: "ogg",
  cybershop_christmas: "ogg",
  cyber_battle_end: "ogg",
  cyber_battle_prelude: "ogg",
  cyber_shop: "ogg",
  cymbal: "ogg",
  d: "ogg",
  dance_of_dog: "ogg",
  date: "ogg",
  date_fight: "ogg",
  date_tense: "ogg",
  deeploop2: "ogg",
  deep_noise: "ogg",
  deltarune_logo_ch5_itoki: "ogg",
  dogappear: "ogg",
  dogcheck: "ogg",
  dogmeander: "ogg",
  dogroom: "ogg",
  "dogroom@chut": "ogg",
  dogsong: "ogg",
  dontforget: "ogg",
  dontgiveup: "ogg",
  doorclose: "ogg",
  dooropen: "ogg",
  drone: "ogg",
  dummybattle: "ogg",
  dununnn: "ogg",
  elevator: "ogg",
  "elevator@chut": "ogg",
  elevator_last: "ogg",
  endarea_parta: "ogg",
  endarea_partb: "ogg",
  endingexcerpt1: "ogg",
  endingexcerpt2: "ogg",
  express_myself: "ogg",
  fallendown2: "ogg",
  fanfare: "ogg",
  fearsting: "ogg",
  field_of_hopes: "ogg",
  findher: "ogg",
  flashback_excerpt: "ogg",
  flowey: "ogg",
  forest: "ogg",
  friendship: "ogg",
  f_6s_1: "ogg",
  f_6s_2: "ogg",
  f_6s_3: "ogg",
  f_6s_4: "ogg",
  f_6s_5: "ogg",
  f_6s_6: "ogg",
  f_alarm: "ogg",
  f_destroyed: "ogg",
  f_destroyed2: "ogg",
  f_destroyed3: "ogg",
  f_finale_1: "ogg",
  f_finale_1_l: "ogg",
  f_finale_2: "ogg",
  f_finale_3: "ogg",
  f_intro: "ogg",
  f_newlaugh: "ogg",
  f_newlaugh_low: "ogg",
  f_part1: "ogg",
  f_part2: "ogg",
  f_part3: "ogg",
  f_saved: "ogg",
  f_wind1: "ogg",
  f_wind2: "ogg",
  GALLERY: "ogg",
  gameover: "ogg",
  gameover_short: "ogg",
  ghostbattle: "ogg",
  giant_queen_appears: "ogg",
  gigaqueen_pre: "ogg",
  glacier: "ogg",
  greenroom_detune: "ogg",
  harpnoise: "ogg",
  hereweare: "ogg",
  hip_shop: "ogg",
  home: "ogg",
  honksong: "ogg",
  hotel: "ogg",
  hotel_battle: "ogg",
  house1: "ogg",
  house2: "ogg",
  intronoise: "ogg",
  joker: "ogg",
  KEYGEN: "ogg",
  kingboss: "ogg",
  kingdescription: "ogg",
  knight: "ogg",
  knight_appears: "ogg",
  lab: "ogg",
  lancer: "ogg",
  lancerfight: "ogg",
  lancer_susie: "ogg",
  leave: "ogg",
  legend: "ogg",
  man: "ogg",
  mansion: "ogg",
  mansion_entrance: "ogg",
  menu: "ogg",
  menu1: "ogg",
  menu2: "ogg",
  menu3: "ogg",
  menu4: "ogg",
  mettafly: "ogg",
  mettatonbattle: "ogg",
  mettaton_ex: "ogg",
  mettaton_neo: "ogg",
  mettaton_pretransform: "ogg",
  mettmusical1: "ogg",
  mettmusical2: "ogg",
  mettmusical3: "ogg",
  mettmusical4: "ogg",
  mettsad: "ogg",
  mett_applause: "ogg",
  mett_cheer: "ogg",
  minigame_kart: "ogg",
  mode: "ogg",
  mtgameshow: "ogg",
  muscle: "ogg",
  "muscle@chut": "ogg",
  musicbox: "ogg",
  music_guys: "ogg",
  music_guys_intro: "ogg",
  mus_birdnoise: "ogg",
  "mus_birdnoise@chut": "ogg",
  mus_confession: "ogg",
  "mus_confession@chut": "ogg",
  mus_introcar: "ogg",
  mus_school: "ogg",
  myemeow: "ogg",
  mysteriousroom2: "ogg",
  mystery: "ogg",
  napstachords: "ogg",
  napstahouse: "ogg",
  napsta_alarm: "ogg",
  nes_intro_extended_part2: "ogg",
  news: "ogg",
  newscast: "ogg",
  news_battle: "ogg",
  nightmare_boss_heavy: "ogg",
  nightmare_nes: "ogg",
  night_ambience: "ogg",
  noelle_ferriswheel: "ogg",
  noelle_normal: "ogg",
  noelle_school: "ogg",
  northernlight: "ogg",
  ocean: "ogg",
  ohyes: "ogg",
  ominous_message: "ogg",
  oogloop: "ogg",
  operatile: "ogg",
  options_fall: "ogg",
  options_summer: "ogg",
  options_winter: "ogg",
  papyrus: "ogg",
  papyrusboss: "ogg",
  piano: "ogg",
  prebattle1: "ogg",
  predummy: "ogg",
  prejoker: "ogg",
  queen: "ogg",
  queen_boss: "ogg",
  queen_car_radio: "ogg",
  queen_intro: "ogg",
  quiet_autumn: "ogg",
  race: "ogg",
  rain: "ogg",
  "rain@chut": "ogg",
  rain_deep: "ogg",
  repeat_1: "ogg",
  repeat_2: "ogg",
  reunited: "ogg",
  rimshot: "ogg",
  root_8bit: "ogg",
  rouxls_battle: "ogg",
  rtenna_zoom: "ogg",
  rudebuster_boss: "ogg",
  ruins: "ogg",
  ruinspiano: "ogg",
  ruruskaado: "ogg",
  sansdate: "ogg",
  sfx_a_grab: "ogg",
  sfx_chainsaw: "ogg",
  sfx_disturbing: "ogg",
  sfx_hypergoner_charge: "ogg",
  sfx_hypergoner_laugh: "ogg",
  sfx_rainbowbeam_hold: "ogg",
  sfx_star: "ogg",
  sfx_woofenstein: "ogg",
  sfx_woofenstein_loop: "ogg",
  shinkansen: "ogg",
  shop: "ogg",
  shop1: "ogg",
  sigh_of_dog: "ogg",
  silence: "ogg",
  sink_noise: "ogg",
  smallshock: "ogg",
  snd_bigcar_yelp: "ogg",
  snd_closet_impact: "ogg",
  snd_dtrans_drone: "ogg",
  snd_dtrans_flip: "ogg",
  snd_dtrans_lw: "ogg",
  snd_dtrans_square: "ogg",
  snd_dtrans_twinkle: "ogg",
  snd_fountain_make: "ogg",
  snd_ghostappear: "ogg",
  snd_great_shine: "ogg",
  snd_him_quick: "ogg",
  snd_hitcar: "ogg",
  snd_hitcar_little: "ogg",
  snd_icespell: "ogg",
  snd_knight_fallingsword: "ogg",
  snd_smallcar_yelp: "ogg",
  snd_snowgrave: "ogg",
  snd_spell_pacify: "ogg",
  snoresymphony: "ogg",
  snowwalk: "ogg",
  snowy: "ogg",
  spamton_basement: "ogg",
  spamton_battle: "ogg",
  spamton_happy: "ogg",
  spamton_laugh_noise: "ogg",
  spamton_meeting: "ogg",
  spamton_meeting_intro: "ogg",
  spamton_neo_after: "ogg",
  spamton_neo_meeting: "ogg",
  spamton_neo_mix_ex_wip: "ogg",
  spider: "ogg",
  spoopy: "ogg",
  spoopy_holiday: "ogg",
  spoopy_wave: "ogg",
  star: "ogg",
  stealth: "ogg",
  sticksnap: "ogg",
  story: "ogg",
  story_stuck: "ogg",
  s_neo: "ogg",
  s_neo_clip: "ogg",
  temshop: "ogg",
  temvillage: "ogg",
  tenna_battle: "ogg",
  tenna_battle_guitar: "ogg",
  tenna_battle_old: "ogg",
  tenna_island: "ogg",
  tense: "ogg",
  tension: "ogg",
  the_dark_truth: "ogg",
  THE_HOLY: "ogg",
  thrashmachine: "ogg",
  tone2: "ogg",
  tone3: "ogg",
  toomuch: "ogg",
  toriel: "ogg",
  town: "ogg",
  "town@chut": "ogg",
  tv: "ogg",
  tvromance: "ogg",
  tv_changingroom: "ogg",
  TV_GAME: "ogg",
  tv_hall_of_fame: "ogg",
  tv_noise: "ogg",
  tv_results_screen: "ogg",
  tv_world: "ogg",
  undyneboss: "ogg",
  undynefast: "ogg",
  undynepiano: "ogg",
  undynescary: "ogg",
  undynetheme: "ogg",
  undynetruetheme: "ogg",
  vsasgore: "ogg",
  vs_susie: "ogg",
  w: "ogg",
  waterfall: "ogg",
  waterquiet: "ogg",
  wawa: "ogg",
  whoopee: "ogg",
  wind: "ogg",
  "wind@chut": "ogg",
  wind_highplace: "ogg",
  xpart: "ogg",
  xpart_2: "ogg",
  xpart_a: "ogg",
  xpart_b: "ogg",
  xpart_back: "ogg",
  x_undyne: "ogg",
  x_undyne_pre: "ogg",
  yourbestfriend_3: "ogg",
  zzz_c: "ogg",
  zzz_c2: "ogg",
  zz_megalovania: "ogg",
  z_ending: "ogg",
  "snd_bombsplosion@chut": "wav",
  "snd_break1_c@chut": "wav",
  "snd_break2_c@chut": "wav",
  "snd_buzzing@chut": "ogg",
  "snd_damage_c@chut": "wav",
  "snd_elecdoor_close@chut": "wav",
  "snd_elecdoor_open@chut": "wav",
  "snd_flameloop@chut": "ogg",
  "snd_gameover_broken@chut": "wav",
  "snd_heavydamage@chut": "ogg",
  "snd_hurt1_c@chut": "wav",
  "snd_instanoise@chut": "wav",
  "snd_undynestep@chut": "wav"
};
export { gx as a, gX as b, gI as c };
function gn(gZ, gT) {
  var ga = new URL(gZ, gT).href;
  var gd = globalThis.__drWarm;
  return (gd ? gd(ga) : Promise.resolve()).then(function () {
    return import(ga).catch(function (gO) {
      try {
        gO.reload = true;
        gO.what = "the game code";
      } catch (gq) {}
      throw gO;
    });
  });
}
