const l = function () {
  ;
  let di = true;
  return function (dm, dB) {
    const dp = di ? function () {
      if (dB) {
        const dk = dB.apply(dm, arguments);
        dB = null;
        return dk;
      }
    } : function () {};
    di = false;
    return dp;
  };
}();
import { c as i } from "./c-YST6GS7R.js";
import { D as Z, K, L as I, p as c } from "./c-SEM2A64W.js";
import { f as n, h as Q } from "./c-PF7AREFU.js";
import { b as e, d as r, f as X, n as s, p as d0 } from "./c-EUQCKUJR.js";
import { A as d1, H as d2, I as d3, b as d4 } from "./c-YJJCI5ES.js";
import { Da as d5, Za as d6, _a as d7, ba as d8, c as d9, fb as dd, j as dP, m, qb as dt, u as dv, v, w as dL, x as dW } from "./c-FMIAGHDE.js";
import { a as dY, e as da, g as dS, l as dq } from "./c-PIEPTJTC.js";
dq();
function setupJevilStats(di) {
  d4.monstername[di] = "JEVIL";
  d4.monstermaxhp[di] = 3500;
  d4.monsterhp[di] = 3500;
  d4.monsterat[di] = 10;
  d4.monsterdf[di] = 5;
  d4.monsterexp[di] = 0;
  d4.monstergold[di] = 0;
  d4.sparepoint[di] = 0;
  d4.mercymod[di] = 0;
  d4.mercymax[di] = 999;
  d4.canact[di][0] = 1;
  d4.actname[di][0] = "Check";
  d4.canact[di][1] = 1;
  d4.actactor[di][1] = 1;
  d4.actname[di][1] = "Pirouette";
  d4.actdesc[di][1] = "Random#Chaos";
  d4.actcost[di][1] = 50;
  d4.canact[di][2] = 1;
  d4.actactor[di][2] = 4;
  d4.actname[di][2] = "Hypnosis";
  d4.actdesc[di][2] = "Induce#TIRED";
  d4.actcost[di][2] = 125;
}
dY(setupJevilStats, "setupJevilStats");
var obj_joker_body = class dN extends d6 {
  create() {
    Object.assign(this, {
      siner: 0,
      ji: 0,
      maxchain: 6,
      maxdist: 0,
      size: 2,
      floatsiner: 0,
      floatsinerspeed: 1,
      sndcon: 0,
      condition: 0,
      timer: 0,
      spintimer: 0,
      s_xscale: 2,
      s_yscale: 2,
      s_sprite: "spr_joker_teleport",
      s_y: 0,
      s_vspeed: 0,
      s_alpha: 1,
      image_speed: 0.334,
      dancelv: 0,
      dancesiner: 0,
      fade: 0
    });
    this.offx = this.x + 20;
    this.offy = this.y + 18;
    this.fly = 0;
    this.flyx = 0;
    this.shadowx = [0, 0, 0, 0, 0, 0, 0];
    this.shadowy = [0, 0, 0, 0, 0, 0, 0];
    this.sfactor = [1, 1, 1, 1, 1, 1, 1];
    this.dalpha = [0, 0, 0, 0, 0, 0, 0];
  }
  draw(di) {
    this.floatsiner += this.floatsinerspeed;
    let dm = dL(this.floatsiner / 8) * 3 * (this.floatsinerspeed * 2 - 1);
    let dB = 0;
    if (this.dancelv >= 1) {
      dB = dW(this.floatsiner / 8) * 3 * (this.floatsinerspeed * 2 - 1);
    }
    if (this.dancelv === 4) {
      dB = 0;
      dm = 0;
    }
    let dp = this.x + 20;
    let dk = this.y + 18;
    this.offx = dp;
    this.offy = dk;
    this.fly = dm;
    this.flyx = dB;
    if (this.condition === 0) {
      let dU = this.fade === 0 ? 1 : v(dL(this.floatsiner / 13));
      if (this.dancelv === 0) {
        di.draw_sprite_ext("spr_joker_main", 0, dp + dB, dk + dm, 2, 2, 0, d9.white, dU);
      }
      if (this.dancelv === 1) {
        di.draw_sprite_ext("spr_joker_dance", this.floatsiner / 3, dp + dB, dk + dm, 2, 2, 0, d9.white, 1);
      }
      if (this.dancelv === 2) {
        di.draw_sprite_ext("spr_joker_tired", 0, dp + dB, dk + dm, 2, 2, 0, d9.white, 1);
      }
      if (this.dancelv === 3) {
        this.dancesiner++;
        for (let dV = 0; dV < 7; dV++) {
          if (dV >= 1) {
            this.shadowx[dV] += dL(dV + this.floatsiner / 5) * 8 * this.sfactor[dV];
            this.shadowy[dV] += dW(dV + this.floatsiner / 5) * 4 * this.sfactor[dV];
          }
          this.dalpha[dV] = dL(dV + this.dancesiner / 9);
          if (this.dalpha[dV] < 0 && dV >= 1) {
            this.shadowx[dV] = 60 - dP(120);
            this.shadowy[dV] = 60 - dP(120);
            this.sfactor[dV] = 1.5 - dP(3);
          }
          di.draw_sprite_ext("spr_joker_dance", this.dancesiner / 2 + dV / 4, this.x + this.shadowx[dV], this.y + this.shadowy[dV], 2, 2, 0, this.image_blend, Math.max(0, this.dalpha[dV]));
        }
      }
      if (this.dancelv === 4) {
        di.draw_sprite_ext("spr_joker_teleport", 1, dp + dB, dk + dm, 2, 2, 0, d9.white, 1);
      }
    }
    if (this.condition === 1) {
      if (this.maxdist >= 150) {
        this.maxdist = 150;
      }
      let dF = 0.8 + this.maxdist / 50;
      if (dF < 0.8) {
        dF = 0.8;
      }
      if (dF > 2) {
        dF = 2;
      }
      this.siner += dF;
      let dK = dL(this.siner / 4) * this.maxdist;
      let dz = -v(dL(this.siner / 4)) * (this.maxdist * 0.7);
      let dZ = 0;
      if (dK > this.maxdist / 2 && this.maxdist > 15) {
        dZ = 1;
      }
      if (dK < -this.maxdist / 2 && this.maxdist > 15) {
        dZ = 2;
      }
      if (this.maxdist < 4) {
        dZ = 3;
      }
      for (let dJ = 0; dJ < this.maxchain - 1; dJ++) {
        di.draw_sprite_ext("spr_jokerchain", dZ, dp + dK * (dJ / this.maxchain) - 2, dk + 6 + (dz - 32) * (dJ / this.maxchain) + dm, 2, 2, 0, d9.white, 1);
      }
      di.draw_sprite_ext("spr_jokerbody", 0, dp - 42, dk + dm - 2, 2, 2, 0, d9.white, 1);
      di.draw_sprite_ext("spr_jokerhead", dZ, dp + dK - 2, dk + dz + dm - 14, 2, 2, 0, d9.white, 1);
      this.maxdist -= 1;
      if (this.maxdist <= 0) {
        this.maxdist = 0;
        this.condition = 0;
      }
    }
    if (this.condition === 2) {
      dd.with("obj_heroparent", du => {
        du.image_alpha -= 0.25;
      });
      if (this.sndcon === 0) {
        d5("snd_spearappear");
        this.sndcon = 1;
      }
      di.draw_sprite_ext("spr_joker_main", 0, dp, dk + dm, this.size, 2, 0, d9.white, 1);
      this.size -= 0.5;
      if (this.size <= 0) {
        dd.with("obj_heroparent", du => {
          du.image_alpha = 0;
        });
        this.sndcon = 0;
        this.size = 2;
        this.condition = 4;
      }
    }
    if (this.condition === 3) {
      dd.with("obj_heroparent", du => {
        du.image_alpha += 0.25;
      });
      if (this.sndcon === 0) {
        d5("snd_spearappear");
        this.sndcon = 1;
      }
      di.draw_sprite_ext("spr_joker_main", 0, dp, dk + dm, this.size, 2, 0, d9.white, 1);
      this.size += 0.5;
      if (this.size >= 2) {
        dd.with("obj_heroparent", du => {
          du.image_alpha = 1;
        });
        this.size = 2;
        this.condition = 0;
        this.sndcon = 0;
      }
    }
    if (this.condition === 4 && d4.turntimer <= 10) {
      this.timer = 0;
      this.condition = 3;
      this.size = 0;
    }
    if (this.condition === 5) {
      this.timer++;
      if (this.timer === 1) {
        this.spintimer = 0;
        this.s_xscale = 2;
        this.s_yscale = 2;
        this.s_sprite = "spr_joker_teleport";
        this.s_y = 0;
        this.s_vspeed = 0;
        this.s_alpha = 1;
        d5("snd_joker_metamorphosis");
      }
      if (this.timer >= 1 && this.timer <= 3) {
        this.s_xscale *= 1.3;
        this.s_yscale *= 0.7;
      }
      if (this.timer >= 5 && this.timer <= 15) {
        this.s_xscale *= 0.7;
        this.s_yscale *= 1.3;
      }
      if (this.timer >= 15 && this.timer <= 30) {
        this.spintimer++;
        this.s_xscale = dL(this.spintimer / 3) * 2;
        this.s_sprite = "spr_joker_scythebody";
        this.s_yscale *= 0.7;
        if (this.s_xscale >= 2) {
          this.s_xscale = 2;
        }
        if (this.s_yscale <= 2) {
          this.s_yscale = 2;
        }
      }
      if (this.timer >= 30 && this.timer < 41) {
        this.spintimer++;
        this.s_xscale = dL(this.spintimer / 3) * 2;
        this.s_vspeed -= 3;
        this.s_y += this.s_vspeed;
        this.s_alpha -= 0.1;
      }
      if (this.timer >= 41 && dd.exists("obj_battlecontroller") && d4.turntimer > 10) {
        this.timer = 0;
        this.condition = 4;
      }
      di.draw_sprite_ext(this.s_sprite, 0, dp, dk + this.s_y, this.s_xscale, this.s_yscale, 0, this.image_blend, Math.max(0, this.s_alpha));
    }
    if ((this.condition === 0 || this.condition === 1) && this.dancelv <= 2) {
      di.draw_set_color(d9.black);
      let du = this.sprite_width / 2;
      di.draw_rectangle(this.x + du - 20 - dm + dB, this.y + 80 - dm / 2, this.x + du + 30 + dm + dB, this.y + 85 + dm / 2, false);
    }
  }
};
dY(obj_joker_body, "obj_joker_body");
da(obj_joker_body, "kinds", d7("obj_joker_body", d6));
da(obj_joker_body, "defaultDepth", 15);
da(obj_joker_body, "defaultSprite", "spr_joker_main");
var dx = obj_joker_body;
var obj_joker = class dy extends c {
  create() {
    Object.assign(this, {
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
      hurtamt: 0,
      hurttimer: 0,
      hurtshake: 0,
      acting: 0,
      actcon: 0,
      acttimer: 0,
      mercymod: -9999,
      maxmercy: 9999,
      tired: 0,
      pirouette: 0,
      pirouettecounter: 0,
      pfactor: 1,
      hypnosis: 0,
      hypnosiscounter: 0,
      chaosdance: 0,
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
      laughnoise: 0,
      beepnoise: 0,
      beepbuffer: 0,
      burstnoise: 0,
      jturn: 0,
      jattack: 0,
      rtimer: 0
    });
    this.reminvc = d4.invc;
    this.remmaxhp = [0, 1, 2, 3].map(di => d4.maxhp[di]);
    this.body = dt(this.x, this.y, dx);
    this.visible = false;
    d4.tempflag[4] = 1;
  }
  userEvent(di) {
    if (di === 12) {
      d4.monsterx[this.myself] = this.x + 20;
      d4.monstery[this.myself] = this.y + 20;
      return;
    }
    if (di === 5) {
      this.startAttack();
      return;
    }
    if (di === 10) {
      this.defeatEvent();
      return;
    }
  }
  defeatEvent() {
    for (let dB = 0; dB < 4; dB++) {
      d4.maxhp[dB] = this.remmaxhp[dB];
      if (d4.hp[dB] >= d4.maxhp[dB]) {
        d4.hp[dB] = d4.maxhp[dB];
      }
    }
    d4.invc = this.reminvc;
    let di = this.body;
    di.image_xscale = 2;
    di.image_yscale = 2;
    di.sprite_index = "spr_joker_teleport";
    di.image_index = 1;
    di.image_speed = 0;
    if (d4.monsterhp[this.myself] > 0) {
      d5("snd_spare");
      for (let dp = 0; dp < 12; dp++) {
        let dk = dt(di.x + 20 + dP(80), di.y + 18 + dP(80), e);
        dk.sprite_index = "spr_sparestar_anim";
        dk.image_xscale = 2;
        dk.image_yscale = 2;
        dk.image_speed = 0.25;
        dk.hspeed = -3;
        dk.gravity = 0.5;
        dk.gravity_direction = 0;
        dk.fadespeed = 0.05;
        dk.depth = -20;
      }
      d4.jevilResult = "pacified";
    } else {
      d4.jevilResult = "defeated";
    }
    let dm = dd.first("obj_battlecontroller");
    if (dm) {
      dm.skipvictory = 1;
    }
    di.dancelv = 4;
    di.condition = 0;
    dd.with("obj_jokerbg_triangle_real", dU => {
      dU.on = 0;
    });
    this.scr_monsterdefeat();
    d4.invc = this.reminvc;
    this.instance_destroy();
  }
  step() {
    let di = this.myself;
    if (d4.monster[di] === 1) {
      d4.flag[51 + di] = 4;
      if (d4.mnfight === 1 && this.talked === 0) {
        this.talk();
      }
      if (this.talked === 1 && d4.mnfight === 1) {
        this.rtimer = 0;
        if (d8() && this.talktimer > 15) {
          this.talktimer = this.talkmax;
        }
        this.talktimer++;
        if (this.talktimer >= this.talkmax) {
          dd.with("obj_writer", dm => dm.instance_destroy());
          dd.with("obj_battleblcon", dm => dm.instance_destroy());
          d4.mnfight = 2;
        }
        if (d4.mnfight === 2) {
          if (!dd.exists("obj_moveheart")) {
            s();
          }
          if (!dd.exists("obj_growtangle")) {
            dt(320, 170, X);
          }
        }
      }
      if (d4.mnfight === 2 && this.attacked === 0) {
        this.rtimer++;
        if (this.rtimer === 12) {
          d4.turntimer = 240;
          this.userEvent(5);
          this.attacked = 1;
          d4.typer = 6;
          d4.fc = 0;
          let dm = m(0, 1, 2, 3, 4);
          d4.battlemsg[0] = ["* The world is spinning, spinning.", "* The air crackles with freedom.", "* JEVIL is laughing incomprehensibly.", "* It feels like a whirlwind.", "* Smells like chaos."][dm];
          if (this.body.dancelv === 2) {
            d4.battlemsg[0] = "* JEVIL seems exhausted...?";
          }
          if (this.jturn === 16) {
            d4.battlemsg[0] = "* CHAOS BOMB was prepared FOR YOU.";
          }
          if (this.jturn === 18) {
            d4.battlemsg[0] = "* Something terrible is coming...!";
          }
          if (this.jturn >= 19) {
            d4.battlemsg[0] = "* JEVIL's pulling out all the stops!";
          }
          if (d4.monsterstatus[di] === 1) {
            d4.battlemsg[0] = "* JEVIL is truly exhausted!";
          }
        } else {
          d4.turntimer = 120;
        }
      }
      if (d4.mnfight === 2 && d4.turntimer <= 1 && (this.battlecancel === 1 && (d4.mercymod[di] = 999), this.battlecancel === 2)) {
        let dB = dd.first("obj_battlecontroller");
        if (dB) {
          dB.noreturn = 1;
        }
        this.con = 1;
        this.battlecancel = 3;
      }
    }
    if (d4.myfight === 3) {
      this.actStep();
    }
    this.beepbuffer--;
    if (this.beepnoise === 1 && this.beepbuffer < 0) {
      d5("snd_bombfall", {
        volume: 0.6
      });
      this.beepnoise = 0;
      this.beepbuffer = 5;
    }
    if (this.burstnoise === 1) {
      d5("snd_bomb");
      this.burstnoise = 0;
    }
    if (this.state === 3) {
      if (this.hurttimer > 0) {
        this.hurttimer = 0;
        let dp = this.body;
        dp.condition = 1;
        dp.siner = 0;
        dp.maxdist += 20 + this.hurtamt / 5;
        if (dp.maxdist < 30) {
          dp.maxdist = 30;
        }
        let dk = d4.monsterhp[di] / d4.monstermaxhp[di];
        dp.floatsinerspeed = 1 + (1 - dk);
        if (dk <= 0.8 && dp.dancelv === 0) {
          dp.dancelv = 1;
        }
        if (dk <= 0.4 && this.jturn < 17) {
          dp.dancelv = 3;
        }
        if (dk <= 0.2 && this.jturn === 17) {
          dp.dancelv = 2;
        }
        if (dk <= 0) {
          this.userEvent(10);
          d4.flag[241] = 6;
          return;
        }
        dd.with("obj_jokerbg_triangle_real", dU => {
          if (dk > 0) {
            dU.rotspeed = 1 + (1.5 - dk * 1.5);
          }
        });
        d5(m("snd_joker_laugh0", "snd_joker_ha1", "snd_joker_ha0"));
      }
      this.hurttimer--;
      if (this.hurttimer < 0) {
        this.state = 0;
      }
    }
  }
  talk() {
    let di = this.myself;
    if (this.pirouette !== 2) {
      d4.invc = this.reminvc;
    }
    let dm = d4.monsterhp[di] / d4.monstermaxhp[di];
    let dB = this.body;
    if (dm <= 0.8 && this.jturn === 4) {
      this.jturn = 5;
      dB.dancelv = 1;
    }
    if (dm <= 0.6 && this.jturn === 9) {
      this.jturn = 10;
    }
    if (dm <= 0.4 && this.jturn === 14) {
      this.jturn = 15;
      dB.dancelv = 3;
    }
    if (dm <= 0.15 && this.jturn < 17) {
      this.jturn = 17;
      dB.dancelv = 2;
    }
    if (this.jturn >= 18) {
      dB.dancelv = 3;
    }
    if (this.hypnosiscounter >= 2 && this.jturn === 4 && this.turns >= 5 - this.hypnosiscounter) {
      this.jturn = 5;
      dB.dancelv = 1;
    }
    if (this.hypnosiscounter >= 4 && this.jturn === 9 && this.turns >= 11 - this.hypnosiscounter) {
      this.jturn = 10;
      dB.dancelv = 1;
    }
    if (this.hypnosiscounter >= 6 && this.jturn === 14 && this.turns >= 17 - this.hypnosiscounter) {
      this.jturn = 15;
      dB.dancelv = 1;
    }
    if (this.jturn >= 19 && this.turns >= 29 - this.hypnosiscounter) {
      this.tired = 1;
      d4.monsterstatus[di] = 1;
      dB.dancelv = 2;
    }
    if (!dd.exists("obj_darkener")) {
      dt(0, 0, d0);
    }
    d4.typer = 50;
    d4.msg = new Array(100).fill(" ");
    let dp = this.jturn;
    let dk = {
      0: "CHAOS, CHAOS,&&CATCH ME&IF YOU CAN!",
      1: "SHALL WE&PLAY THE&RING-AROUND?",
      2: "MY HEARTS GO&OUT TO ALL&YOU SINNERS!",
      3: "HA, HA, LET'S&MAKE THE&DEVILSKNIFE.",
      5: "PIIP PIIP,&LET'S RIDE THE&CAROUSEL GAME.",
      6: "HEE HEE,&HAVING FUN!?&JOIN THE&CLUB!",
      7: "HEARTS,&DIAMONDS,&I CAN DO&ANYTHING!",
      8: "WHO KEEPS&SPINNING THE&WORLD&AROUND?",
      10: "YOU KIDS ARE&REALLY&KEEPING UP!",
      11: "NU-HA!!&I NEVER HAD&SUCH FUN,&FUN!!",
      12: "A BEAUTY IS&JOYING IN&MY HEART!",
      13: "EVEN&DEVILSKNIFE&IS SMILING!",
      15: "IT'S SO&EXCITING...&I CAN'T&TAKE IT!!!",
      16: "THIS IS IT,&BOISENGIRLS!&SEE YA!",
      17: "ENOUGH!!&YOU KIDS&TIRED ME UP!",
      18: "KIDDING!!&HERE'S MY&FINAL CHAOS!"
    };
    if (dk[dp] !== undefined) {
      d4.msg[0] = dk[dp];
    }
    if (dp === 0) {
      d5("snd_joker_chaos");
    }
    if (dp === 7) {
      d5("snd_joker_anything");
    }
    if (dp === 3 || dp === 13 || dp === 18) {
      dB.condition = 5;
    }
    if (dp === 17) {
      dB.dancelv = 2;
    }
    if (dp === 4 || dp === 9 || dp === 14 || dp === 19) {
      let dU = m(0, 1, 2, 3);
      if (dU === 0) {
        d4.msg[0] = m("A CHAOS,&CHAOS!", "PLEASE, IT'S&JUST A&SIMPLE&CHAOS.");
        d5("snd_joker_chaos");
      }
      if (dU === 1) {
        d4.msg[0] = "I CAN DO&ANYTHING!!";
        d5("snd_joker_anything");
      }
      if (dU === 2) {
        d4.msg[0] = m("THIS BODY&CANNOT BE&KILLED!", "THESE&CURTAINS&ARE REALLY&ON FIRE!");
      }
      if (dU === 3) {
        d4.msg[0] = "IT'S ALL&TOO MUCH&FUN!!!";
      }
    }
    Q(this.x - 160, this.y - 20, 3);
    this.talked = 1;
    this.talktimer = 0;
    if (this.jturn >= 19) {
      if (d4.monsterdf[di] > -10) {
        d4.monsterdf[di] -= 3;
      }
      if (d4.monsterat[di] < 11) {
        d4.monsterat[di] += 0.5;
      }
      this.jattack = m(0, 4, 7, 8, 10, 11, 12, 13, 13, 13);
    }
    if (this.jturn >= 15 && this.jturn <= 18) {
      this.jattack = this.jturn - 3;
      this.jturn++;
    }
    if (this.jturn === 14) {
      this.jattack = m(8, 9, 10, 11);
    }
    if (this.jturn >= 10 && this.jturn <= 13) {
      this.jattack = this.jturn - 2;
      this.jturn++;
    }
    if (this.jturn === 9) {
      this.jattack = m(4, 5, 6, 7);
    }
    if (this.jturn >= 5 && this.jturn <= 8) {
      this.jattack = this.jturn - 1;
      this.jturn++;
    }
    if (this.jturn === 4) {
      this.jattack = m(0, 1, 2, 3);
    }
    if (this.jturn <= 3) {
      this.jattack = this.jturn;
      this.jturn++;
    }
    if ([2, 5, 9, 13, 15].includes(this.jattack)) {
      d3(this);
    } else {
      d2(this);
    }
  }
  startAttack() {
    if (this.attacked !== 0) {
      return;
    }
    let di = this.myself;
    this.turns++;
    this.chaosdance++;
    if (this.chaosdance >= 9) {
      this.chaosdance = 0;
    }
    let dm = d4.monsterat[di];
    d4.monsterat[di] *= this.pfactor;
    let dB = d4.monsterat[di];
    let dp = dV => {
      let dF = dt(this.x, this.y, i);
      Object.assign(dF, dV);
      return dF;
    };
    let dk = this.body;
    let dU = this.jattack;
    if (dU === 0) {
      dp({
        type: 70,
        target: this.mytarget,
        grazepoints: 2,
        damage: dB * 5
      });
      dk.condition = 2;
    }
    if (dU === 1) {
      dp({
        grazepoints: 3,
        type: 65,
        target: this.mytarget,
        damage: dB * 5
      });
    }
    if (dU === 2) {
      dp({
        type: 49,
        target: 3,
        damage: dB * 4,
        grazepoints: 3
      });
      dk.condition = 2;
    }
    if (dU === 3) {
      if (dk.condition < 4) {
        dk.condition = 5;
      }
      dp({
        grazepoints: 3,
        type: 75,
        target: this.mytarget,
        damage: dB * 6
      });
    }
    if (dU === 4) {
      d5("snd_joker_anything");
      dp({
        type: 62,
        target: this.mytarget,
        inv: 20,
        damage: dB * 5,
        grazepoints: 2
      });
    }
    if (dU === 5) {
      dp({
        grazepoints: 3,
        type: 50,
        target: 3,
        damage: dB * 4
      });
      d4.turntimer = 300;
      dk.condition = 2;
    }
    if (dU === 6) {
      dp({
        type: 73,
        target: this.mytarget,
        damage: dB * 5
      });
    }
    if (dU === 7) {
      dp({
        type: 68,
        target: this.mytarget,
        grazepoints: 2,
        damage: dB * 5
      });
    }
    if (dU === 8) {
      d5("snd_joker_anything");
      dp({
        inv: 20,
        type: 61,
        target: this.mytarget,
        grazepoints: 3,
        damage: dB * 5
      });
      d4.turntimer = 240;
    }
    if (dU === 9) {
      dp({
        type: 48,
        target: 3,
        damage: dB * 4,
        grazepoints: 4
      });
      d4.turntimer = 270;
      dk.condition = 2;
    }
    if (dU === 10) {
      dp({
        type: 72,
        target: this.mytarget,
        damage: dB * 5
      });
    }
    if (dU === 11) {
      if (dk.condition < 4) {
        dk.condition = 5;
      }
      dp({
        type: 76,
        target: this.mytarget,
        grazepoints: 3,
        damage: dB * 6
      });
    }
    if (dU === 12) {
      dp({
        type: 71,
        target: this.mytarget,
        damage: dB * 5,
        grazepoints: 2
      });
      dk.condition = 2;
    }
    if (dU === 13) {
      dp({
        type: 46,
        target: 3,
        damage: dB * 4,
        grazepoints: 4
      });
      d4.turntimer = 330;
      dk.condition = 2;
    }
    if (dU === 14) {
      dp({
        type: 74,
        target: this.mytarget,
        damage: dB * 4
      });
    }
    if (dU === 15) {
      dp({
        type: 77,
        target: this.mytarget,
        damage: dB * 4
      });
      d4.turntimer = 1500;
      if (dk.condition < 4) {
        dk.condition = 5;
      }
    }
    dd.with("obj_dbulletcontroller", dV => {
      dV.joker = 1;
    });
    this.pfactor = 1;
    d4.monsterat[di] = dm;
    this.attacked = 1;
  }
  actStep() {
    let di = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      d4.msg = new Array(100).fill(" ");
      d4.msg[0] = "* JEVIL &* There is no strategy to defeat the enemy. Good luck!/%";
      n();
    }
    if (this.acting === 2 && this.actcon === 0) {
      this.actcon = 5;
      d4.msg = new Array(100).fill(" ");
      d4.msg[0] = "* Kris spun around^1!&* JEVIL got slightly more TIRED^1, and...!/%";
      d5("snd_pirouette");
      let dm = dd.first("obj_herokris");
      if (dm) {
        dm.visible = false;
        this.dancekris = r(dm.x, dm.y, "spr_krisb_pirouette");
        this.dancekris.image_speed = 0.3334;
        this.dancekris.depth = dm.depth;
        let dB = dt(this.dancekris.x + 28, this.dancekris.y + 40, e);
        dB.sprite_index = "spr_pirouette_fx";
        dB.image_xscale = 2;
        dB.image_yscale = 2;
        dB.fadespeed = 0.05;
      }
      n();
    }
    if (this.actcon === 5 && !dd.exists("obj_writer")) {
      if (this.dancekris) {
        this.dancekris.instance_destroy();
      }
      let dp = dd.first("obj_herokris");
      if (dp) {
        dp.visible = true;
      }
      d4.msg = new Array(100).fill(" ");
      d4.msg[0] = "* Something happened!/%";
      let dk = this.chaosdance;
      if (dk === 0) {
        d4.msg[0] = "* What^1!&* It was just foley!/%";
        d5(m("snd_badexplosion", "snd_carhonk", "snd_toilet"));
      }
      if (dk === 1) {
        d4.msg[0] = "* JEVIL felt at ease^1!&* JEVIL's defense dropped!/%";
        if (d4.monsterdf[di] >= -16) {
          d4.monsterdf[di] -= 4;
        }
        d5("snd_weirdeffect");
      }
      if (dk === 2) {
        d4.msg[0] = "* Awkward^1! Upcoming attack will hurt rapidly!/%";
        d5("snd_awkward");
        d4.invc = 0.4;
      }
      if (dk === 3) {
        d4.msg[0] = "* Tranquil^1!&* The dance defended the party!/%";
        this.pfactor = 0.7;
        d5("snd_shadowpendant");
      }
      if (dk === 4) {
        let dU = r(-40, 60, "spr_uselessbird");
        dU.hspeed = 12;
        dU.image_speed = 0.334;
        dU.depth = -30;
        d5("snd_birdtweet");
        d4.msg[0] = "* What^1!&* It's nothing but a useless bird!/%";
      }
      if (dk === 5) {
        d4.msg[0] = "* It felt comforting!/%";
        let dV = m(0, 1, 2);
        K(dV, dv(dP(31) + 25));
      }
      if (dk === 6) {
        d4.msg[0] = "* Everyone's HP got jumbled up!/%";
        let dF = m(2, 3);
        let dK = dF === 2 ? 3 : 2;
        let dz = d4.hp.slice();
        let dZ = d4.maxhp.slice();
        d4.maxhp[1] = dZ[dF];
        d4.maxhp[dF] = dZ[dK];
        d4.maxhp[dK] = dZ[1];
        d4.hp[1] = dz[dF];
        d4.hp[dF] = dz[dK];
        d4.hp[dK] = dz[1];
        let dJ = dd.first("obj_battlecontroller");
        if (dJ) {
          let du = dJ.hpcolor.slice();
          dJ.hpcolor[0] = du[dF - 1];
          dJ.hpcolor[dF - 1] = du[dK - 1];
          dJ.hpcolor[dK - 1] = du[0];
        }
        for (let dI = 1; dI <= 3; dI++) {
          if (d4.hp[dI] < 1) {
            d4.hp[1] += dv(d4.hp[dI] / 3);
            d4.hp[2] += dv(d4.hp[dI] / 3);
            d4.hp[3] += dv(d4.hp[dI] / 3);
            d4.hp[dI] = 1;
          }
        }
        for (let dc = 1; dc <= 3; dc++) {
          if (d4.hp[dc] < 1) {
            d4.hp[dc] = 1;
          }
        }
        d1(0);
        d1(1);
        d1(2);
        d5("snd_weirdeffect");
      }
      if (dk === 7) {
        d5("snd_boost");
        d4.msg[0] = "* JEVIL's upcoming move got powered up!/%";
        this.pfactor = 1.25;
      }
      if (dk === 8) {
        d5("snd_applause");
        d4.msg[0] = "* A perfect 10!/%";
        I(36 + dv(dP(15)));
      }
      n();
      this.hypnosiscounter += 0.5;
      if (this.hypnosiscounter >= 9) {
        d4.monsterstatus[di] = 1;
      }
      this.pirouette = dk;
      this.pirouettecounter++;
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      if (d4.monsterat[di] > 10) {
        d4.monsterat[di] -= 0.5;
      }
      d5("snd_hypnosis");
      this.actcon = 1;
      let dn = m("* Ralsei chanted something^1!", "* Susie spun something around^1!", "* Kris gazed strangely^1!");
      let dQ = "&* JEVIL became more TIRED!";
      if (this.hypnosiscounter >= 9) {
        dQ = "&* JEVIL's looking exhausted!";
        d4.monsterstatus[di] = 1;
      }
      d4.msg = new Array(100).fill(" ");
      d4.msg[0] = dn + "&* JEVIL's next attack weakened!" + dQ + "/%";
      this.pfactor = 0.7;
      this.hypnosis = 1;
      this.hypnosiscounter += 1;
      n();
    }
    if (this.actcon === 1 && !dd.exists("obj_writer")) {
      this.actcon = 0;
      Z();
    }
  }
  destroy() {
    if (this.body && !this.body.destroyed) {
      this.body.alarm[0] = 60;
      this.body.alarmEvent = function (di) {
        if (di === 0) {
          this.instance_destroy();
        }
      };
    }
  }
};
dY(obj_joker, "obj_joker");
da(obj_joker, "kinds", d7("obj_joker", c));
da(obj_joker, "defaultDepth", 10);
da(obj_joker, "defaultSprite", "spr_joker_main");
var dh = obj_joker;
dS(dh, "G.mnfight = 2;");
export { setupJevilStats as a, dx as b, dh as c };
