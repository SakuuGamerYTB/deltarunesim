const m = function () {
  ;
  let ad = true;
  return function (aW, as) {
    const am = ad ? function () {
      if (as) {
        const aK = as.apply(aW, arguments);
        as = null;
        return aK;
      }
    } : function () {};
    ad = false;
    return am;
  };
}();
import { a as r, d as j, f as i, h as F, j as t, l as f, m as U, n, o as H, p as Z, q as Q } from "./c-ZF4DELGJ.js";
import { a as B, d as c } from "./c-EUQCKUJR.js";
import { b as y, y as X } from "./c-YJJCI5ES.js";
import { Da as e, _a as a0, c as a1, fb as a2, j as a3, m as a4, n as a5, o as a6, qb as a7, u as a8 } from "./c-FMIAGHDE.js";
import { a as a9, e as aa, l as aE } from "./c-PIEPTJTC.js";
aE();
var aJ = {};
function registerControllerTypes(ad) {
  Object.assign(aJ, ad);
}
a9(registerControllerTypes, "registerControllerTypes");
var obj_dbulletcontroller = class ar extends j {
  create() {
    this.btimer = 99;
    this.timermax = 12;
    this.difficulty = 1;
    this.type = 1;
    this.joker = 0;
    this.side = 1;
    this.damage = 100;
    this.grazepoints = 1;
    this.timepoints = 1;
    this.inv = 60;
    this.grazed = 0;
    this.grazetimer = 0;
    this.target = 0;
    this.made = 0;
    this.special = 0;
    this.miny = 150;
    this.maxy = 280;
    let ad = a2.first("obj_growtangle");
    if (ad) {
      this.miny = ad.y - ad.sprite_height / 2;
      this.maxy = ad.y + ad.sprite_height / 2;
    }
    this.ratio = 1;
    if (X() === 2) {
      this.ratio = 1.6;
    }
    if (X() === 3) {
      this.ratio = 2.3;
    }
    this.visible = false;
  }
  step() {
    this.btimer++;
    let ad = a2.first("obj_heart");
    let aW = a2.first("obj_battlesolid");
    let as = aW ? aW.x : 320;
    let am = aW ? aW.y : 170;
    let aK = aJ[this.type];
    if (aK) {
      aK(this, {
        heart: ad,
        bs: aW,
        bsx: as,
        bsy: am
      });
      return;
    }
    if (this.type === 14 && this.btimer >= 10) {
      let aj = -20;
      if (this.side === 1) {
        aj = 660;
      }
      let ap = this.miny + a3(this.maxy - this.miny);
      let aL = a7(aj, ap, i);
      aL.sprite_index = "spr_smallbullet";
      aL.hspeed = -8;
      aL.damage = this.damage;
      aL.target = this.target;
      if (this.side === 1) {
        aL.direction = 180;
        aL.image_angle = 180;
      }
      this.btimer = 0;
    }
    if (this.joker !== 1) {
      return;
    }
    let al = ai => {
      let aF = a4(0, 1);
      let aN = as;
      let ag = aF === 0 ? aN - 180 - a3(100) : aN + 180 + a3(100);
      let aG = a7(ag, -20, t);
      r(this, aG);
      ai(aG);
      this.btimer = 0;
    };
    if (this.type === 45 && this.btimer >= 18) {
      al(ai => {
        if (ai.type === 2) {
          ai.type = a4(0, 1, 2, 3);
        }
      });
    }
    if (this.type === 46 && this.btimer >= 12) {
      al(ai => {
        if (ai.type === 2) {
          ai.type = a4(0, 1, 2, 3);
        }
      });
    }
    if (this.type === 47 && this.btimer >= 12) {
      al(ai => {
        ai.type = 1;
      });
    }
    if (this.type === 48 && this.btimer >= 12) {
      al(ai => {
        ai.type = 0;
      });
    }
    if (this.type === 49 && this.btimer >= 20) {
      al(ai => {
        ai.type = 2;
      });
    }
    if (this.type === 50 && this.btimer >= 12) {
      al(ai => {
        ai.type = 3;
      });
    }
    if (this.type === 61 && this.btimer >= 40 && this.made === 0) {
      this.btimer = 0;
      this.made = 1;
      let ai = a3(300);
      for (let aF = 0; aF < 3; aF++) {
        for (let aN = 0; aN < 3; aN++) {
          let ag = a7(as + 150, am - 80 + aN * 80, f);
          ag.siner = aF * 42;
          ag.vsin = ai;
          ag.image_index = 0;
          ag.altmode = 2;
          ag.sinspeed = 1.1;
          r(this, ag);
          ag = a7(as + 150, am - 80 + aN * 80, f);
          ag.siner = aF * 42 + 21;
          ag.vsin = ai;
          ag.image_index = 1;
          ag.altmode = 1;
          ag.sinspeed = 1.1;
          r(this, ag);
          if (a8(a3(50)) === 1) {
            ag.image_index = 2;
          }
        }
      }
    }
    if (this.type === 62 && this.btimer >= 40 && this.made === 0) {
      this.btimer = 0;
      this.made = 1;
      for (let aG = 0; aG < 3; aG++) {
        for (let ax = 0; ax < 7; ax++) {
          let aD = a7(as + 150, am - 80 + aG * 80, f);
          aD.siner = ax * 18;
          aD.vsin = ax * 9;
          aD.sinspeed = 1.15;
          aD.altmode = 3;
          r(this, aD);
        }
      }
    }
    if (this.type === 65 && this.btimer >= 60) {
      let at = a7(as, am, U);
      at.maxspade = 10;
      at.grav = 0.4;
      r(this, at);
      this.btimer = 0;
    }
    if (this.type === 68 && (ad && (ad.wspeed = 5), this.btimer >= 54)) {
      let ak = a7(as, am, U);
      ak.side = a4(0, 1);
      ak.grav = 0.45;
      ak.maxspade = 10;
      r(this, ak);
      this.btimer = 0;
    }
    if (this.type === 70 && this.btimer >= 20 && y.turntimer >= 30) {
      let af = a4(as - 100 - a3(100), as + 100 + a3(100));
      let aU = a4(am - a3(100), am + a3(100));
      let an = a7(af, aU, n);
      an.type = 1;
      r(this, an);
      an.active = 0;
      this.btimer = 0;
    }
    if (this.type === 71 && this.btimer >= 9 && y.turntimer >= 20) {
      let aH = a4(as - 100 - a3(100), as + 100 + a3(100));
      let aq = a4(am - a3(100), am + a3(100));
      let aO = a7(aH, aq, n);
      r(this, aO);
      aO.active = 0;
      this.btimer = 0;
    }
    if (this.type === 72 && this.btimer >= 18) {
      this.btimer = 0;
      let av = 0;
      if (this.side === 1) {
        av = a4(225, 315);
      }
      if (this.side === -1) {
        av = a4(45, 135);
      }
      let aR = 360;
      let au = a5(aR, av);
      let ab = a6(aR, av);
      let aS = ad ? ad.x : 310;
      let aZ = ad ? ad.y : 160;
      let az = a7(aS + 8 + au, aZ + 8 + ab, H);
      az.direction = av + 180;
      az.speed = 20;
      az.friction = 1;
      az.type = 2;
      az.damage = this.damage;
      az.target = this.target;
      az.image_angle = az.direction;
      this.side = this.side === 1 ? -1 : 1;
    }
    if (this.type === 73 && this.btimer >= 4) {
      this.btimer = 0;
      let aP = -100 + a3(200);
      if (a4(0, 1, 2, 3) === 3) {
        aP = -10 + a3(20);
      }
      if (aW && ad) {
        let aC = a7(ad.x + 8 + aP, am + 100, F);
        aC.type = 1;
        aC.damage = this.damage;
        aC.target = this.target;
        aC.timepoints = 2;
      }
    }
    if (this.type === 74 && this.btimer >= 9) {
      this.btimer = 0;
      let aQ = (140 + a3(40)) * this.side;
      let ah = -100 + a3(200);
      if (a4(0, 1, 2, 3) === 3) {
        ah = -10 + a3(20);
      }
      if (ad) {
        let aB = a7(ad.x + 8 + ah, ad.y + 8 + aQ, F);
        aB.grazepoints = 12;
        aB.timepoints = 2;
        aB.damage = this.damage;
        aB.target = this.target;
      }
    }
    if ((this.type === 75 || this.type === 76) && this.btimer >= 0 && this.special === 0) {
      e("snd_spearappear");
      a7(0, 0, Z);
      a2.with("obj_centerscythe", ac => {
        ac.damage = this.damage;
        ac.grazepoints = this.grazepoints;
        ac.timepoints = this.timepoints;
        ac.inv = this.inv;
        ac.target = this.target;
        ac.grazed = 0;
        ac.grazetimer = 0;
      });
      this.special = 1;
    }
    if (this.type === 77) {
      this.finalChaos(ad, aW);
    }
  }
  finalChaos(ad, aW) {
    y.sp = 10;
    if (ad) {
      ad.wspeed = 10;
    }
    if (this.special === 0) {
      e("snd_joker_byebye");
      this.prevmake = 0;
      this.special = 1;
      this.rank = 16;
      this.realtimer = 0;
      this.chase = 0;
      this.made = 0;
      this.amount = 0;
      this.jokertimer = 0;
      this.darkfader = c(320, -10, "spr_tallpx");
      Object.assign(this.darkfader, {
        depth: 2,
        image_alpha: 0,
        image_blend: a1.black,
        image_xscale: 200,
        image_yscale: 2
      });
    }
    let as = this.realtimer;
    if (as >= 0 && as < 10) {
      this.darkfader.image_alpha += 0.1;
      a2.with("obj_battlesolid", am => {
        am.image_alpha -= 0.1;
      });
      if (ad) {
        ad.y += 16;
        ad.boundaryup = 160;
      }
    }
    if (as === 10) {
      a2.with("obj_battlesolid", am => am.instance_destroy());
    }
    if (as === 20) {
      a7(40, -60, Q);
    }
    if (as === 40) {
      a7(570, -60, Q);
    }
    if (as >= 60 && this.amount < 30 && this.btimer >= this.rank) {
      if (this.rank > 7) {
        this.rank--;
      }
      let am = a8(a3(5));
      if (am === this.prevmake) {
        am = a8(a3(5));
      }
      if (this.chase === 3) {
        am = a8(((ad ? ad.x : 320) + 8) / 90);
        this.chase = 0;
      }
      a7(40 + am * 90, -60, Q);
      if (am === 1) {
        a7(490, -60, Q);
      }
      if (am === 0) {
        a7(580, -60, Q);
      }
      this.prevmake = am;
      this.btimer = 0;
      this.chase++;
      this.amount++;
    }
    if (this.amount >= 29 - this.made && this.special === 1) {
      this.jokertimer = 0;
      let aK = a7(320, 100, n);
      aK.type = 66;
      aK.depth = -30;
      this.special = 2;
    }
    if (this.special === 2) {
      this.jokertimer++;
      let al = this.jokertimer;
      if (al === 10) {
        e("snd_joker_neochaos");
      }
      if (al === 40 || al === 98) {
        a7(40, -60, Q);
        a7(580, -60, Q);
      }
      if (al === 46 || al === 86) {
        a7(130, -60, Q);
        a7(490, -60, Q);
      }
      if (al === 52 || al === 80) {
        a7(220, -60, Q);
        a7(400, -60, Q);
      }
      if (al === 66 || al === 98) {
        a7(310, -60, Q);
      }
      if (al === 130) {
        let aj = a7(320, -320, Q);
        this.lastscythe = aj;
        this.vol = 0;
        this.rumnoise = e("snd_rumble", {
          volume: 0
        });
        Object.assign(aj, {
          vspeed: 1,
          gravity: 0.02,
          image_xscale: 16,
          image_yscale: 16,
          scale: 16,
          rotspeed: 0,
          remrot: 160,
          image_angle: 160
        });
        let ap = a7(320, -40, B);
        ap.sprite_index = "spr_tallpx";
        ap.image_xscale = 400;
        ap.image_yscale = 2;
        ap.depth = -100;
        ap.image_alpha = -0.3;
        this.fadewhite = ap;
      }
      if (al >= 131) {
        let aL = this.lastscythe;
        let ai = this.fadewhite;
        if (aL && !aL.destroyed) {
          aL.x = aL.xstart + a3(8);
        }
        ai.image_alpha += 0.01;
        this.vol += 0.01;
        if (this.rumnoise) {
          this.rumnoise.volume = Math.min(1, this.vol);
        }
        if (ai.image_alpha >= 1) {
          if (this.darkfader && !this.darkfader.destroyed) {
            this.darkfader.instance_destroy();
          }
          if (aL && !aL.destroyed) {
            aL.instance_destroy();
          }
        }
        if (ai.image_alpha >= 1.3) {
          this.special = 3;
        }
      }
    }
    if (this.special === 3) {
      if (ad) {
        ad.x = 320;
        ad.y = 120;
      }
      this.vol -= 0.1;
      if (this.rumnoise) {
        this.rumnoise.volume = Math.max(0, Math.min(1, this.vol));
      }
      this.fadewhite.image_alpha -= 0.1;
      if (this.fadewhite.image_alpha <= 0) {
        if (this.rumnoise) {
          this.rumnoise.pause();
        }
        y.turntimer = 11;
        this.special = 4;
      }
    }
    this.realtimer++;
  }
  destroy() {
    if (this.rumnoise) {
      this.rumnoise.pause();
    }
    if (this.fadewhite && !this.fadewhite.destroyed) {
      this.fadewhite.instance_destroy();
    }
    if (this.darkfader && !this.darkfader.destroyed) {
      this.darkfader.instance_destroy();
    }
  }
};
a9(obj_dbulletcontroller, "obj_dbulletcontroller");
aa(obj_dbulletcontroller, "kinds", a0("obj_dbulletcontroller", j));
aa(obj_dbulletcontroller, "defaultDepth", 0);
var aV = obj_dbulletcontroller;
export { aJ as a, registerControllerTypes as b, aV as c };
