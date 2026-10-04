const F = function () {
  ;
  let NW = true;
  return function (NO, Nu) {
    const NE = NW ? function () {
      if (Nu) {
        const Nf = Nu.apply(NO, arguments);
        Nu = null;
        return Nf;
      }
    } : function () {};
    NW = false;
    return NE;
  };
}();
const R = F(this, function () {
  const N = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const NJ = new RegExp("[CBYUUDXxyLXWOqXGQRRHJKLXOyBVCZAXHBffGGXqXfUGqfYjWWRAMVkyAUCQTPTbUWRDxDqxHINjNTzWbXAkRAGFUIIKMNxfVDbIbGKzEGjfMJHMRqOYjqYSWGJbUXUDBjfjCHSxOfkjUXjqWGGYRAkXfZxjHKCODSQZOJLWTJMVjHSZANTGM]", "g");
  const NF = "loCcalBYhUUDostX;1x27y.0.L0.1;XdeltWarOunqXesiGQRm.RHJcoKLXOm;yBVwww.dCZAXeltaHrBufnfGGXesiqXmfUGq.fcYjoWWRm;dAMVkrysAUiCmQ.loTcPalhTobsUWt;RD.dexlDqxtaHINjrNunTzWebsiXAmk.RAGFpUIIaKMNgexfVsDb.IdbevGKzEGjfMJHMRqOYjqYSWGJbUXUDBjfjCHSxOfkjUXjqWGGYRAkXfZxjHKCODSQZOJLWTJMVjHSZANTGM".replace(NJ, "").split(";");
  let NW;
  let NO;
  let Nu;
  let Nm;
  const Nx = function (NA, Nb, Nf) {
    if (NA.length != Nb) {
      return false;
    }
    for (let NT = 0; NT < Nb; NT++) {
      for (let No = 0; No < Nf.length; No += 2) {
        if (NT == Nf[No] && NA.charCodeAt(NT) != Nf[No + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const NV = function (NA, Nb, Nf) {
    return Nx(Nb, Nf, NA);
  };
  const NE = function (NA, Nb, Nf) {
    return NV(Nb, NA, Nf);
  };
  const Nn = function (NA, Nb, Nf) {
    return NE(Nb, Nf, NA);
  };
  for (let NA in N) {
    if (Nx(NA, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      NW = NA;
      break;
    }
  }
  for (let Na in N[NW]) {
    if (Nn(6, Na, [5, 110, 0, 100])) {
      NO = Na;
      break;
    }
  }
  for (let Ne in N[NW]) {
    if (NE(Ne, [7, 110, 0, 108], 8)) {
      Nu = Ne;
      break;
    }
  }
  if (!(NO < "~")) {
    for (let Nc in N[NW][Nu]) {
      if (NV([7, 101, 0, 104], Nc, 8)) {
        Nm = Nc;
        break;
      }
    }
  }
  if (!NW || !N[NW]) {
    return;
  }
  const Nk = N[NW][NO];
  const Nw = !!N[NW][Nu] && N[NW][Nu][Nm];
  const Nl = Nk || Nw;
  if (!Nl) {
    return;
  }
  let NZ = false;
  for (let Ns = 0; Ns < NF.length; Ns++) {
    const Nz = NF[Ns];
    const NI = Nz[0] === String.fromCharCode(46) ? Nz.slice(1) : Nz;
    const Ng = Nl.length - NI.length;
    const NP = Nl.indexOf(NI, Ng);
    const NC = NP !== -1 && NP === Ng;
    if (NC) {
      if (Nl.length == Nz.length || Nz.indexOf(".") === 0) {
        NZ = true;
      }
    }
  }
  if (!NZ) {
    const NX = new RegExp("[rPUVZiAvFFVEZwQBPLYVheRFSDG]", "g");
    const NK = "raboPUuVZiAt:bvFFlVaEZwnQkBPLYVheRFSDG".replace(NX, "");
    N[NW][Nu] = NK;
  }
});
R();
const W = function () {
  const D = function () {
    ;
    let Nu = true;
    return function (Nm, Nx) {
      const Nh = Nu ? function () {
        if (Nx) {
          const NV = Nx.apply(Nm, arguments);
          Nx = null;
          return NV;
        }
      } : function () {};
      Nu = false;
      return Nh;
    };
  }();
  let NO = true;
  return function (Nu, Nm) {
    const NE = NO ? function () {
      if (Nm) {
        const Nw = Nm.apply(Nu, arguments);
        Nm = null;
        return Nw;
      }
    } : function () {};
    NO = false;
    return NE;
  };
}();
const m = W(this, function () {
  const NR = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const NW = NR.console = NR.console || {};
  const NO = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let Nm = 0; Nm < NO.length; Nm++) {
    const Nx = W.constructor.prototype.bind(W);
    const Nh = NO[Nm];
    const NV = NW[Nh] || Nx;
    Nx.__proto__ = W.bind(W);
    Nx.toString = NV.toString.bind(NV);
    NW[Nh] = Nx;
  }
});
m();
import { e as x } from "./c-WL43FMPI.js";
import { De as h, Ed as V, F as E, f as k, la as w } from "./c-S7IQ44WH.js";
import { Ci as l, Tj as Z, Xu as A, bg as b, fs as f, le as i, me as a, qg as e, rp as c, tl as T, xr as o } from "./c-BMHJCKUP.js";
import { a as Y } from "./c-Y6LEVRWV.js";
import { Uc as v } from "./c-HXQA6GAY.js";
import { a as z } from "./c-VNO7ILLI.js";
import { Fa as I } from "./c-5APM5PG3.js";
import { g, j as P } from "./c-UOADV6RY.js";
import { N as C, k as X } from "./c-SEM2A64W.js";
import { Kc as K, Lh as j, e as y, f as p, i as B, j as U, v as Q } from "./c-D6ZXNKTF.js";
import { a as S } from "./c-PF7AREFU.js";
import { m as H } from "./c-EUQCKUJR.js";
import { G as t, b as d, t as q, u as M, w as D0 } from "./c-YJJCI5ES.js";
import { I as D1, Ob as D2, Za as D3, _a as D4, c as D5, cb as D6, fb as D7, m as D8, qb as D9, z as DD } from "./c-FMIAGHDE.js";
import { a as DN, e as DL, j as DJ, k as DF, l as DR } from "./c-PIEPTJTC.js";
DR();
DR();
var DW = new Proxy({}, {
  get: DN((D, N) => A[N] || v[N], "get")
});
var SCRIPT = DN(D => T[D] || Y[D] || j[D] || (() => {}), "SCRIPT");
var {
  instance_exists: instance_exists
} = j;
var Dm = new Proxy({}, {
  get: DN((D, N) => DW[N], "get")
});
function scr_encountersetup(D) {
  this.xx = 0;
  this.yy = 0;
  this.i = 0;
  for (; this.i < 3; this.i += 1) {
    y(d, "heromakex")[this.i] = this.xx + 80;
    y(d, "heromakey")[this.i] = this.yy + 50 + this.i * 80;
    y(d, "monsterinstancetype")[this.i] = DW.obj_baseenemy;
    y(d, "monstertype")[this.i] = 1;
    y(d, "monstermakex")[this.i] = this.xx + 500 + this.i * 20;
    y(d, "monstermakey")[this.i] = this.yy + 40 + this.i * 90;
  }
  y(d, "monstertype")[1] = 0;
  y(d, "monstertype")[2] = 0;
  if (d.char[0] !== 0 && d.char[1] === 0 && d.char[2] === 0) {
    y(d, "heromakey")[0] = this.yy + 140;
  }
  if (d.char[0] !== 0 && d.char[1] !== 0 && d.char[2] === 0) {
    y(d, "heromakey")[0] = this.yy + 100;
    y(d, "heromakey")[1] = this.yy + 180;
  }
  y(d, "battlemsg")[0] = "* It is known.";
  if (d.chapter === 3) {
    d.rank1time = 30;
    d.rank1turns = 4;
    d.rank1tp = 200;
    d.rank1hurtcount = 0;
  }
  let N = "";
  let NJ = D8(0, 1, 2, 3);
  if (NJ === 0) {
    N = "* Wanna be an ACT-er...? Here's my CARD!";
  }
  if (NJ === 1) {
    N = "* Now where the heck is my debit card?";
  }
  if (NJ === 2) {
    N = "* If you're gonna be so dramatic... then ACT!";
  }
  if (NJ === 3) {
    N = "* I Love TV. That's all you gotta say.";
  }
  switch (D) {
    case 0:
      break;
    case 1:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_baseenemy;
        y(d, "monstertype")[0] = 1;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 110;
        y(d, "monsterinstancetype")[1] = DW.obj_baseenemy;
        y(d, "monstertype")[1] = 1;
        y(d, "monstermakex")[1] = this.xx + 500;
        y(d, "monstermakey")[1] = this.yy + 200;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Test enemies showed up.";
        break;
      }
    case 2:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_lancerboss;
        y(d, "monstertype")[0] = 2;
        y(d, "monstermakex")[0] = this.xx + 540;
        y(d, "monstermakey")[0] = this.yy + 200;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        break;
      }
    case 3:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_dummyenemy;
        y(d, "monstertype")[0] = 3;
        y(d, "monstermakex")[0] = this.xx + 500;
        y(d, "monstermakey")[0] = this.yy + 160;
        if (DD(instance_exists(DW.obj_npc_room))) {
          y(d, "monstermakex")[0] = p("obj_npc_room").xstart;
          y(d, "monstermakey")[0] = p("obj_npc_room").ystart;
        }
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        break;
      }
    case 4:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_diamondenemy;
        y(d, "monstertype")[0] = 5;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 140;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Rudinn drew near!";
        if (d.flag[500] >= 1) {
          y(d, "battlemsg")[0] = "* A different Rudinn from last time drew near!";
        }
        if (d.flag[500] === 2) {
          y(d, "battlemsg")[0] = "* Assumedly another different Rudinn appeared!";
        }
        break;
      }
    case 5:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_diamondenemy;
        y(d, "monstertype")[0] = 5;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 110;
        y(d, "monsterinstancetype")[1] = DW.obj_diamondenemy;
        y(d, "monstertype")[1] = 5;
        y(d, "monstermakex")[1] = this.xx + 500;
        y(d, "monstermakey")[1] = this.yy + 200;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* A necklace of Rudinns blocks your path.";
        break;
      }
    case 6:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_diamondenemy;
        y(d, "monstertype")[0] = 5;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 110;
        y(d, "monsterinstancetype")[1] = DW.obj_heartenemy;
        y(d, "monstertype")[1] = 6;
        y(d, "monstermakex")[1] = this.xx + 500;
        y(d, "monstermakey")[1] = this.yy + 200;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Rudinn and Hathy blocked the way!";
        break;
      }
    case 7:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_smallcheckers_enemy;
        y(d, "monstertype")[0] = 9;
        y(d, "monstermakex")[0] = this.xx + 440;
        y(d, "monstermakey")[0] = this.yy + 150;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* C. Round attacked violently!&* (You recall Ralsei's advice to include Susie in an ACT.)";
        break;
      }
    case 8:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_clubsenemy;
        y(d, "monstertype")[0] = 16;
        y(d, "monstermakex")[0] = this.xx + 400;
        y(d, "monstermakey")[0] = this.yy + 120;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Clover grew close!";
        break;
      }
    case 9:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_heartenemy;
        y(d, "monstertype")[0] = 6;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 20;
        y(d, "monsterinstancetype")[1] = DW.obj_heartenemy;
        y(d, "monstertype")[1] = 6;
        y(d, "monstermakex")[1] = this.xx + 500;
        y(d, "monstermakey")[1] = this.yy + 120;
        y(d, "monsterinstancetype")[2] = DW.obj_heartenemy;
        y(d, "monstertype")[2] = 6;
        y(d, "monstermakex")[2] = this.xx + 460;
        y(d, "monstermakey")[2] = this.yy + 220;
        y(d, "battlemsg")[0] = "* Three Hathys blocked the way!";
        break;
      }
    case 12:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_checkers_enemy;
        y(d, "monstertype")[0] = 10;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 120;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Here it comes!";
        break;
      }
    case 13:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_ponman_enemy;
        y(d, "monstertype")[0] = 11;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 110;
        y(d, "monsterinstancetype")[1] = DW.obj_ponman_enemy;
        y(d, "monstertype")[1] = 11;
        y(d, "monstermakex")[1] = this.xx + 500;
        y(d, "monstermakey")[1] = this.yy + 200;
        y(d, "battlemsg")[0] = "* Ponman drew near!";
        y(d, "monstertype")[2] = 0;
        break;
      }
    case 14:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_ponman_enemy;
        y(d, "monstertype")[0] = 11;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 20;
        y(d, "monsterinstancetype")[1] = DW.obj_ponman_enemy;
        y(d, "monstertype")[1] = 11;
        y(d, "monstermakex")[1] = this.xx + 500;
        y(d, "monstermakey")[1] = this.yy + 120;
        y(d, "monsterinstancetype")[2] = DW.obj_ponman_enemy;
        y(d, "monstertype")[2] = 11;
        y(d, "monstermakex")[2] = this.xx + 460;
        y(d, "monstermakey")[2] = this.yy + 220;
        y(d, "battlemsg")[0] = "* Ponman drew near!";
        break;
      }
    case 15:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_clubsenemy;
        y(d, "monstertype")[0] = 7;
        y(d, "monstermakex")[0] = this.xx + 400;
        y(d, "monstermakey")[0] = this.yy + 30;
        y(d, "monsterinstancetype")[1] = DW.obj_heartenemy;
        y(d, "monstertype")[1] = 6;
        y(d, "monstermakex")[1] = this.xx + 420;
        y(d, "monstermakey")[1] = this.yy + 200;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Clover and Hathy grew close!";
        break;
      }
    case 16:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_rabbick_enemy;
        y(d, "monstertype")[0] = 13;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 140;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Rabbick slithered in the way!";
        break;
      }
    case 17:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_rabbick_enemy;
        y(d, "monstertype")[0] = 13;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 60;
        y(d, "monsterinstancetype")[1] = DW.obj_rabbick_enemy;
        y(d, "monstertype")[1] = 13;
        y(d, "monstermakex")[1] = this.xx + 460;
        y(d, "monstermakey")[1] = this.yy + 180;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 18:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_bloxer_enemy;
        y(d, "monstertype")[0] = 14;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 140;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Bloxer assembled!";
        break;
      }
    case 19:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_bloxer_enemy;
        y(d, "monstertype")[0] = 14;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 60;
        y(d, "monsterinstancetype")[1] = DW.obj_bloxer_enemy;
        y(d, "monstertype")[1] = 14;
        y(d, "monstermakex")[1] = this.xx + 460;
        y(d, "monstermakey")[1] = this.yy + 180;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Bloxers assembled!";
        break;
      }
    case 20:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_lancerboss2;
        y(d, "monstertype")[0] = 12;
        y(d, "heromakex")[0] = this.xx + 120;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 160;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Lancer blocked the way!";
        break;
      }
    case 21:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_jigsawryenemy;
        y(d, "monstertype")[0] = 15;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 140;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Jigsawry drew near!";
        if (d.flag[500] >= 1) {
          y(d, "battlemsg")[0] = "* A different Jigsawry from last time drew near!";
        }
        if (d.flag[500] === 2) {
          y(d, "battlemsg")[0] = "* Assumedly another different Jigsawry appeared!";
        }
        break;
      }
    case 22:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_jigsawryenemy;
        y(d, "monstertype")[0] = 15;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 20;
        y(d, "monsterinstancetype")[1] = DW.obj_jigsawryenemy;
        y(d, "monstertype")[1] = 15;
        y(d, "monstermakex")[1] = this.xx + 500;
        y(d, "monstermakey")[1] = this.yy + 120;
        y(d, "monsterinstancetype")[2] = DW.obj_jigsawryenemy;
        y(d, "monstertype")[2] = 15;
        y(d, "monstermakex")[2] = this.xx + 460;
        y(d, "monstermakey")[2] = this.yy + 220;
        y(d, "battlemsg")[0] = "* A board of Jigsawrys blocked the way!";
        break;
      }
    case 23:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_jigsawryenemy;
        y(d, "monstertype")[0] = 15;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 20;
        y(d, "monsterinstancetype")[1] = DW.obj_diamondenemy;
        y(d, "monstertype")[1] = 5;
        y(d, "monstermakex")[1] = this.xx + 500;
        y(d, "monstermakey")[1] = this.yy + 120;
        y(d, "monsterinstancetype")[2] = DW.obj_heartenemy;
        y(d, "monstertype")[2] = 6;
        y(d, "monstermakex")[2] = this.xx + 460;
        y(d, "monstermakey")[2] = this.yy + 220;
        y(d, "battlemsg")[0] = "* Smorgasboard.";
        break;
      }
    case 24:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_rabbick_enemy;
        y(d, "monstertype")[0] = 13;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 60;
        y(d, "monsterinstancetype")[1] = DW.obj_diamondenemy;
        y(d, "monstertype")[1] = 5;
        y(d, "monstermakex")[1] = this.xx + 460;
        y(d, "monstermakey")[1] = this.yy + 180;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Rabbick slithered in the way!";
        break;
      }
    case 25:
      {
        y(d, "heromakex")[0] = this.xx + 80;
        y(d, "heromakey")[0] = this.yy + 100;
        y(d, "heromakex")[1] = this.xx + 90;
        y(d, "heromakey")[1] = this.yy + 150;
        y(d, "heromakex")[2] = this.xx + 100;
        y(d, "heromakey")[2] = this.yy + 210;
        y(d, "monsterinstancetype")[0] = DW.obj_joker;
        y(d, "monstertype")[0] = 20;
        y(d, "monstermakex")[0] = this.xx + 500;
        y(d, "monstermakey")[0] = this.yy + 160;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* LET THE GAMES BEGIN!";
        break;
      }
    case 27:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_checkers_enemy;
        y(d, "monstertype")[0] = 21;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 120;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Here it comes^1. Again.";
        y(d, "heromakey")[0] = this.yy + 65;
        break;
      }
    case 28:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_rudinnranger;
        y(d, "monstertype")[0] = 22;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 110;
        y(d, "monsterinstancetype")[1] = DW.obj_rudinnranger;
        y(d, "monstertype")[1] = 22;
        y(d, "monstermakex")[1] = this.xx + 500;
        y(d, "monstermakey")[1] = this.yy + 200;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Rudinn Rangers came sparkling into view!";
        break;
      }
    case 29:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_headhathy;
        y(d, "monstertype")[0] = 23;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 110;
        y(d, "monsterinstancetype")[1] = DW.obj_headhathy;
        y(d, "monstertype")[1] = 23;
        y(d, "monstermakex")[1] = this.xx + 500;
        y(d, "monstermakey")[1] = this.yy + 200;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Head Hathy blocked the way quietly!";
        break;
      }
    case 30:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_headhathy;
        y(d, "monstertype")[0] = 23;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 20;
        y(d, "monsterinstancetype")[1] = DW.obj_headhathy;
        y(d, "monstertype")[1] = 23;
        y(d, "monstermakex")[1] = this.xx + 500;
        y(d, "monstermakey")[1] = this.yy + 120;
        y(d, "monsterinstancetype")[2] = DW.obj_headhathy;
        y(d, "monstertype")[2] = 23;
        y(d, "monstermakex")[2] = this.xx + 460;
        y(d, "monstermakey")[2] = this.yy + 220;
        y(d, "battlemsg")[0] = "* Head Hathy blocked the way quietly! (x3)";
        break;
      }
    case 31:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_susieenemy;
        y(d, "monstertype")[0] = 19;
        y(d, "monstermakex")[0] = this.xx + 520;
        y(d, "monstermakey")[0] = this.yy + 80;
        y(d, "monsterinstancetype")[1] = DW.obj_lancerboss3;
        y(d, "monstertype")[1] = 18;
        y(d, "monstermakex")[1] = this.xx + 540;
        y(d, "monstermakey")[1] = this.yy + 240;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Two bad guys blocked the way!";
        break;
      }
    case 32:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_rabbick_enemy;
        y(d, "monstertype")[0] = 13;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 20;
        y(d, "monsterinstancetype")[1] = DW.obj_rabbick_enemy;
        y(d, "monstertype")[1] = 13;
        y(d, "monstermakex")[1] = this.xx + 500;
        y(d, "monstermakey")[1] = this.yy + 120;
        y(d, "monsterinstancetype")[2] = DW.obj_rabbick_enemy;
        y(d, "monstertype")[2] = 13;
        y(d, "monstermakex")[2] = this.xx + 460;
        y(d, "monstermakey")[2] = this.yy + 220;
        y(d, "battlemsg")[0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 33:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_diamondenemy;
        y(d, "monstertype")[0] = 5;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 20;
        y(d, "monsterinstancetype")[1] = DW.obj_heartenemy;
        y(d, "monstertype")[1] = 6;
        y(d, "monstermakex")[1] = this.xx + 500;
        y(d, "monstermakey")[1] = this.yy + 120;
        y(d, "monsterinstancetype")[2] = DW.obj_diamondenemy;
        y(d, "monstertype")[2] = 5;
        y(d, "monstermakex")[2] = this.xx + 460;
        y(d, "monstermakey")[2] = this.yy + 220;
        y(d, "battlemsg")[0] = "* Various guys appeared!";
        break;
      }
    case 40:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_king_boss;
        y(d, "monstertype")[0] = 25;
        y(d, "monstermakex")[0] = this.xx + 460;
        y(d, "monstermakey")[0] = this.yy + 70;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* King blocked the way!";
        break;
      }
    case 71:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_clubsenemy;
        y(d, "monstertype")[0] = 47;
        y(d, "monstermakex")[0] = this.xx + 400;
        y(d, "monstermakey")[0] = this.yy + 80;
        y(d, "battlemsg")[0] = "* Clover joins the stage!";
        break;
      }
    case 72:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_dojograzeenemy;
        y(d, "monstertype")[0] = 42;
        y(d, "monstermakex")[0] = this.xx + 440;
        y(d, "monstermakey")[0] = this.yy + 100;
        y(d, "battlemsg")[0] = "* It's a grazing adventure.";
        break;
      }
    case 89:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_tasque_manager_enemy;
        y(d, "monstertype")[0] = 42;
        y(d, "monstermakex")[0] = this.xx + 487;
        y(d, "monstermakey")[0] = this.yy + 94;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Graze!";
        break;
      }
    case 90:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_werewire_enemy;
        y(d, "monstertype")[0] = 33;
        y(d, "monstermakex")[0] = this.xx + 476;
        y(d, "monstermakey")[0] = this.yy + 70;
        y(d, "monsterinstancetype")[1] = DW.obj_werewire_enemy;
        y(d, "monstertype")[1] = 33;
        y(d, "monstermakex")[1] = this.xx + 454;
        y(d, "monstermakey")[1] = this.yy + 168;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Round One!";
        break;
      }
    case 91:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_poppup_enemy;
        y(d, "monstertype")[0] = 31;
        y(d, "monstermakex")[0] = this.xx + 412;
        y(d, "monstermakey")[0] = this.yy + 40;
        y(d, "monsterinstancetype")[1] = DW.obj_omawaroid_enemy;
        y(d, "monstertype")[1] = 30;
        y(d, "monstermakex")[1] = this.xx + 466;
        y(d, "monstermakey")[1] = this.yy + 106;
        y(d, "monsterinstancetype")[2] = DW.obj_virovirokun_enemy;
        y(d, "monstertype")[2] = 35;
        y(d, "monstermakex")[2] = this.xx + 412;
        y(d, "monstermakey")[2] = this.yy + 184;
        y(d, "battlemsg")[0] = "* Round Two!";
        break;
      }
    case 92:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_tasque_enemy;
        y(d, "monstertype")[0] = 32;
        y(d, "monstermakex")[0] = this.xx + 432;
        y(d, "monstermakey")[0] = this.yy + 52;
        y(d, "monsterinstancetype")[1] = DW.obj_tasque_enemy;
        y(d, "monstertype")[1] = 32;
        y(d, "monstermakex")[1] = this.xx + 476;
        y(d, "monstermakey")[1] = this.yy + 140;
        y(d, "monsterinstancetype")[2] = DW.obj_maus_enemy;
        y(d, "monstertype")[2] = 34;
        y(d, "monstermakex")[2] = this.xx + 512;
        y(d, "monstermakey")[2] = this.yy + 236;
        y(d, "battlemsg")[0] = "* Round Three!";
        break;
      }
    case 93:
      {
        y(d, "flag")[426] = D8(0, 1, 2, 3);
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_swatchling_enemy;
        y(d, "monstertype")[0] = 36;
        y(d, "monstermakex")[0] = this.xx + 394;
        y(d, "monstermakey")[0] = this.yy + 8;
        y(d, "monsterinstancetype")[1] = DW.obj_swatchling_enemy;
        y(d, "monstertype")[1] = 36;
        y(d, "monstermakex")[1] = this.xx + 490;
        y(d, "monstermakey")[1] = this.yy + 74;
        y(d, "monsterinstancetype")[2] = DW.obj_swatchling_enemy;
        y(d, "monstertype")[2] = 36;
        y(d, "monstermakex")[2] = this.xx + 394;
        y(d, "monstermakey")[2] = this.yy + 160;
        y(d, "battlemsg")[0] = "* Round Four!";
        break;
      }
    case 94:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_werewerewire_enemy;
        y(d, "monstertype")[0] = 40;
        y(d, "monstermakex")[0] = this.xx + 464;
        y(d, "monstermakey")[0] = this.yy + 68;
        y(d, "monsterinstancetype")[1] = DW.obj_werewerewire_enemy;
        y(d, "monstertype")[1] = 40;
        y(d, "monstermakex")[1] = this.xx + 494;
        y(d, "monstermakey")[1] = this.yy + 184;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Final Round!";
        break;
      }
    case 100:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_dojo_spareenemy;
        y(d, "monstertype")[0] = 52;
        y(d, "monstermakex")[0] = this.xx + 440;
        y(d, "monstermakey")[0] = this.yy + 100;
        y(d, "battlemsg")[0] = "* Jigsaw Joe jigs in!";
        break;
      }
    case 110:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_shadowman_enemy;
        y(d, "monstertype")[0] = 54;
        y(d, "monstermakex")[0] = this.xx + 476;
        y(d, "monstermakey")[0] = this.yy + 70;
        y(d, "monsterinstancetype")[1] = DW.obj_shadowman_enemy;
        y(d, "monstertype")[1] = 54;
        y(d, "monstermakex")[1] = this.xx + 454;
        y(d, "monstermakey")[1] = this.yy + 168;
        y(d, "monstertype")[2] = 0;
        d.rank1time = 30;
        d.rank1turns = 3;
        d.rank1tp = 175;
        y(d, "battlemsg")[0] = "* Shadowguys play on in.";
        break;
      }
    case 111:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_shutta_enemy;
        y(d, "monstertype")[0] = 55;
        y(d, "monstermakex")[0] = this.xx + 476;
        y(d, "monstermakey")[0] = this.yy + 110;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        d.rank1time = 110;
        d.rank1turns = 7;
        d.rank1tp = 200;
        d.rank1hurtcount = 2;
        if (B === "room_board_1" || B === "room_board_2" || B === "room_board_3" || B === "room_battletest") {
          y(d, "battlemsg")[0] = "* I see you've met Shuttah, our camerathing! Now... Action!";
        } else {
          y(d, "battlemsg")[0] = "* Shuttah struttah-ed into view!";
        }
        break;
      }
    case 112:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_zapper_enemy;
        y(d, "monstertype")[0] = 56;
        y(d, "monstermakex")[0] = this.xx + 502;
        y(d, "monstermakey")[0] = this.yy + 70;
        y(d, "monsterinstancetype")[1] = DW.obj_zapper_enemy;
        y(d, "monstertype")[1] = 56;
        y(d, "monstermakex")[1] = this.xx + 464;
        y(d, "monstermakey")[1] = this.yy + 168;
        y(d, "monstertype")[2] = 0;
        d.rank1time = 46;
        d.rank1turns = 4;
        d.rank1tp = 200;
        y(d, "battlemsg")[0] = "* Zappers blocked the way!";
        break;
      }
    case 113:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_lanino_enemy;
        y(d, "monstertype")[0] = 61;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 46;
        y(d, "monsterinstancetype")[1] = DW.obj_elnina_enemy;
        y(d, "monstertype")[1] = 60;
        y(d, "monstermakex")[1] = this.xx + 510;
        y(d, "monstermakey")[1] = this.yy + 180;
        y(d, "monstertype")[2] = 0;
        d.rank1time = 124;
        d.rank1turns = 7;
        d.rank1tp = 200;
        d.rank1hurtcount = 2;
        SCRIPT("scr_speaker").call(this, "tenna");
        d.fc = 22;
        y(d, "battlemsg")[0] = "* Let's hear it!! \"I LOVE TV!!!\"!";
        break;
      }
    case 114:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_rouxls_ch3_enemy;
        y(d, "monstertype")[0] = 102;
        y(d, "monstermakex")[0] = this.xx + 512;
        y(d, "monstermakey")[0] = this.yy + 128;
        y(d, "monsterinstancetype")[1] = 0;
        y(d, "monstermakex")[1] = this.xx + 446;
        y(d, "monstermakey")[1] = this.yy + 38;
        y(d, "monsterinstancetype")[2] = 0;
        y(d, "monstermakex")[2] = this.xx + 446;
        y(d, "monstermakey")[2] = this.yy + 200;
        y(d, "battlemsg")[0] = "* (With the effect of the RULES CARD, you can only ACT!)";
        break;
      }
    case 115:
      {
        y(d, "heromakex")[0] = this.xx + 126;
        y(d, "heromakey")[0] = this.yy + 104;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 142;
        y(d, "heromakex")[2] = this.xx + 58;
        y(d, "heromakey")[2] = this.yy + 190;
        y(d, "monsterinstancetype")[0] = DW.obj_knight_enemy;
        y(d, "monstertype")[0] = 104;
        y(d, "monstermakex")[0] = this.xx + 425;
        y(d, "monstermakey")[0] = this.yy + 78;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* The Roaring Knight appeared.";
        break;
      }
    case 116:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_zapper_enemy;
        y(d, "monstertype")[0] = 56;
        y(d, "monstermakex")[0] = this.xx + 476;
        y(d, "monstermakey")[0] = this.yy + 65;
        y(d, "monsterinstancetype")[1] = DW.obj_shadowman_enemy;
        y(d, "monstertype")[1] = 54;
        y(d, "monstermakex")[1] = this.xx + 484;
        y(d, "monstermakey")[1] = this.yy + 178;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "";
        break;
      }
    case 117:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_shadowman_enemy;
        y(d, "monstertype")[0] = 54;
        y(d, "monstermakex")[0] = this.xx + 476;
        y(d, "monstermakey")[0] = this.yy + 70;
        y(d, "monsterinstancetype")[1] = DW.obj_shutta_enemy;
        y(d, "monstertype")[1] = 55;
        y(d, "monstermakex")[1] = this.xx + 464;
        y(d, "monstermakey")[1] = this.yy + 168;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Shadowguy and Shuttah shimmy in!";
        break;
      }
    case 118:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_zapper_enemy;
        y(d, "monstertype")[0] = 56;
        y(d, "monstermakex")[0] = this.xx + 464;
        y(d, "monstermakey")[0] = this.yy + 70;
        y(d, "monsterinstancetype")[1] = DW.obj_shutta_enemy;
        y(d, "monstertype")[1] = 55;
        y(d, "monstermakex")[1] = this.xx + 474;
        y(d, "monstermakey")[1] = this.yy + 168;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* It's an infrared photo shoot.";
        break;
      }
    case 119:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_zapper_enemy;
        y(d, "monstertype")[0] = 56;
        y(d, "monstermakex")[0] = this.xx + 446;
        y(d, "monstermakey")[0] = this.yy + 38;
        y(d, "monsterinstancetype")[1] = DW.obj_shutta_enemy;
        y(d, "monstertype")[1] = 55;
        y(d, "monstermakex")[1] = this.xx + 512;
        y(d, "monstermakey")[1] = this.yy + 128;
        y(d, "monsterinstancetype")[2] = DW.obj_shadowman_enemy;
        y(d, "monstertype")[2] = 54;
        y(d, "monstermakex")[2] = this.xx + 446;
        y(d, "monstermakey")[2] = this.yy + 200;
        y(d, "battlemsg")[0] = "";
        break;
      }
    case 120:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_zapper_enemy;
        y(d, "monstertype")[0] = 56;
        y(d, "monstermakex")[0] = this.xx + 446;
        y(d, "monstermakey")[0] = this.yy + 38;
        y(d, "monsterinstancetype")[1] = DW.obj_shadowman_enemy;
        y(d, "monstertype")[1] = 54;
        y(d, "monstermakex")[1] = this.xx + 512;
        y(d, "monstermakey")[1] = this.yy + 128;
        y(d, "monsterinstancetype")[2] = DW.obj_shadowman_enemy;
        y(d, "monstertype")[2] = 54;
        y(d, "monstermakex")[2] = this.xx + 446;
        y(d, "monstermakey")[2] = this.yy + 200;
        d.rank1time = 47;
        d.rank1turns = 4;
        d.rank1tp = 200;
        y(d, "battlemsg")[0] = "";
        break;
      }
    case 121:
      {
        y(d, "heromakex")[0] = this.xx + 140;
        y(d, "heromakey")[0] = this.yy + 80;
        y(d, "heromakex")[1] = this.xx + 100;
        y(d, "heromakey")[1] = this.yy + 137;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 190;
        y(d, "monsterinstancetype")[0] = DW.obj_tenna_enemy;
        y(d, "monstertype")[0] = 103;
        y(d, "monstermakex")[0] = this.xx + 420;
        y(d, "monstermakey")[0] = this.yy + 0;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* That's right folks! One last challenge!#1000 points or bust! Can you do it!?";
        break;
      }
    case 122:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_pippins_enemy;
        y(d, "monstertype")[0] = 59;
        y(d, "monstermakex")[0] = this.xx + 476;
        y(d, "monstermakey")[0] = this.yy + 70;
        y(d, "monsterinstancetype")[1] = DW.obj_pippins_enemy;
        y(d, "monstertype")[1] = 59;
        y(d, "monstermakex")[1] = this.xx + 464;
        y(d, "monstermakey")[1] = this.yy + 168;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Pippins rolls in your way!";
        break;
      }
    case 123:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_pippins_enemy;
        y(d, "monstertype")[0] = 59;
        y(d, "monstermakex")[0] = this.xx + 516;
        y(d, "monstermakey")[0] = this.yy + 40;
        y(d, "monsterinstancetype")[1] = DW.obj_pippins_enemy;
        y(d, "monstertype")[1] = 59;
        y(d, "monstermakex")[1] = this.xx + 460;
        y(d, "monstermakey")[1] = this.yy + 120;
        y(d, "monsterinstancetype")[2] = DW.obj_pippins_enemy;
        y(d, "monstertype")[2] = 59;
        y(d, "monstermakex")[2] = this.xx + 510;
        y(d, "monstermakey")[2] = this.yy + 202;
        d.rank1time = 47;
        d.rank1turns = 4;
        d.rank1tp = 200;
        SCRIPT("scr_speaker").call(this, "ralsei");
        d.fc = 2;
        y(d, "battlemsg")[0] = "\\EWSusie, you can't use Kris's controller!";
        break;
      }
    case 124:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_shutta_enemy;
        y(d, "monstertype")[0] = 55;
        y(d, "monstermakex")[0] = this.xx + 476;
        y(d, "monstermakey")[0] = this.yy + 70;
        y(d, "monsterinstancetype")[1] = DW.obj_shutta_enemy;
        y(d, "monstertype")[1] = 55;
        y(d, "monstermakex")[1] = this.xx + 454;
        y(d, "monstermakey")[1] = this.yy + 168;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Shuttah struttah-ed into view!";
        break;
      }
    case 125:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_ribbick_enemy;
        y(d, "monstertype")[0] = 57;
        y(d, "monstermakex")[0] = this.xx + 476;
        y(d, "monstermakey")[0] = this.yy + 126;
        y(d, "monsterinstancetype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Ribbick hopped into view!";
        break;
      }
    case 126:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_ribbick_enemy;
        y(d, "monstertype")[0] = 57;
        y(d, "monstermakex")[0] = this.xx + 476;
        y(d, "monstermakey")[0] = this.yy + 70;
        y(d, "monsterinstancetype")[1] = DW.obj_ribbick_enemy;
        y(d, "monstertype")[1] = 57;
        y(d, "monstermakex")[1] = this.xx + 454;
        y(d, "monstermakey")[1] = this.yy + 168;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "* Ribbicks hopped into view!";
        break;
      }
    case 127:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_ribbick_enemy;
        y(d, "monstertype")[0] = 57;
        y(d, "monstermakex")[0] = this.xx + 476;
        y(d, "monstermakey")[0] = this.yy + 70;
        y(d, "monsterinstancetype")[1] = DW.obj_shadowman_enemy;
        y(d, "monstertype")[1] = 54;
        y(d, "monstermakex")[1] = this.xx + 454;
        y(d, "monstermakey")[1] = this.yy + 168;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "";
        break;
      }
    case 128:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_ribbick_enemy;
        y(d, "monstertype")[0] = 57;
        y(d, "monstermakex")[0] = this.xx + 476;
        y(d, "monstermakey")[0] = this.yy + 70;
        y(d, "monsterinstancetype")[1] = DW.obj_shutta_enemy;
        y(d, "monstertype")[1] = 55;
        y(d, "monstermakex")[1] = this.xx + 454;
        y(d, "monstermakey")[1] = this.yy + 168;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "";
        break;
      }
    case 129:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_ribbick_enemy;
        y(d, "monstertype")[0] = 57;
        y(d, "monstermakex")[0] = this.xx + 476;
        y(d, "monstermakey")[0] = this.yy + 70;
        y(d, "monsterinstancetype")[1] = DW.obj_zapper_enemy;
        y(d, "monstertype")[1] = 56;
        y(d, "monstermakex")[1] = this.xx + 454;
        y(d, "monstermakey")[1] = this.yy + 168;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "";
        break;
      }
    case 130:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_ribbick_enemy;
        y(d, "monstertype")[0] = 57;
        y(d, "monstermakex")[0] = this.xx + 476;
        y(d, "monstermakey")[0] = this.yy + 70;
        y(d, "monsterinstancetype")[1] = DW.obj_pippins_enemy;
        y(d, "monstertype")[1] = 59;
        y(d, "monstermakex")[1] = this.xx + 454;
        y(d, "monstermakey")[1] = this.yy + 168;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = "";
        break;
      }
    case 131:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_ribbick_enemy;
        y(d, "monstertype")[0] = 57;
        y(d, "monstermakex")[0] = this.xx + 516;
        y(d, "monstermakey")[0] = this.yy + 40;
        y(d, "monsterinstancetype")[1] = DW.obj_ribbick_enemy;
        y(d, "monstertype")[1] = 57;
        y(d, "monstermakex")[1] = this.xx + 460;
        y(d, "monstermakey")[1] = this.yy + 120;
        y(d, "monsterinstancetype")[2] = DW.obj_ribbick_enemy;
        y(d, "monstertype")[2] = 57;
        y(d, "monstermakex")[2] = this.xx + 510;
        y(d, "monstermakey")[2] = this.yy + 202;
        y(d, "battlemsg")[0] = "* Ribbicks hopped into view!";
        break;
      }
    case 132:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_shadowman_enemy;
        y(d, "monstertype")[0] = 54;
        y(d, "monstermakex")[0] = this.xx + 446;
        y(d, "monstermakey")[0] = this.yy + 38;
        y(d, "monsterinstancetype")[1] = DW.obj_shadowman_enemy;
        y(d, "monstertype")[1] = 54;
        y(d, "monstermakex")[1] = this.xx + 512;
        y(d, "monstermakey")[1] = this.yy + 128;
        y(d, "monsterinstancetype")[2] = DW.obj_shadowman_enemy;
        y(d, "monstertype")[2] = 54;
        y(d, "monstermakex")[2] = this.xx + 446;
        y(d, "monstermakey")[2] = this.yy + 200;
        d.rank1time = 47;
        d.rank1turns = 4;
        d.rank1tp = 200;
        y(d, "battlemsg")[0] = "";
        break;
      }
    case 133:
      {
        y(d, "heromakex")[0] = this.xx + 140;
        y(d, "heromakey")[0] = this.yy + 80;
        y(d, "heromakex")[1] = this.xx + 100;
        y(d, "heromakey")[1] = this.yy + 137;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 190;
        y(d, "monsterinstancetype")[0] = DW.obj_tenna_board4_enemy;
        y(d, "monstertype")[0] = 105;
        y(d, "monstermakex")[0] = this.xx + 420;
        y(d, "monstermakey")[0] = this.yy + 0;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        y(d, "battlemsg")[0] = N;
        break;
      }
    case 134:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_shadowman_enemy;
        y(d, "monstertype")[0] = 54;
        y(d, "monstermakex")[0] = this.xx + 476 - 80;
        y(d, "monstermakey")[0] = this.yy + 70;
        y(d, "monsterinstancetype")[1] = DW.obj_tenna_board4_enemy;
        y(d, "monstertype")[1] = 105;
        y(d, "monstermakex")[1] = this.xx + 454 + 80;
        y(d, "monstermakey")[1] = this.yy + 168;
        y(d, "monstertype")[2] = 0;
        d.rank1time = 30;
        d.rank1turns = 3;
        d.rank1tp = 175;
        y(d, "battlemsg")[0] = N;
        break;
      }
    case 135:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_zapper_enemy;
        y(d, "monstertype")[0] = 56;
        y(d, "monstermakex")[0] = this.xx + 476 - 70 - 16;
        y(d, "monstermakey")[0] = this.yy + 70;
        y(d, "monsterinstancetype")[1] = DW.obj_tenna_board4_enemy;
        y(d, "monstertype")[1] = 105;
        y(d, "monstermakex")[1] = this.xx + 454 - 16;
        y(d, "monstermakey")[1] = this.yy + 168;
        y(d, "monstertype")[2] = 0;
        d.rank1time = 30;
        d.rank1turns = 3;
        y(d, "battlemsg")[0] = N;
        break;
      }
    case 136:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_shadowman_enemy;
        y(d, "monstertype")[0] = 54;
        y(d, "monstermakex")[0] = this.xx + 456;
        y(d, "monstermakey")[0] = this.yy + 108;
        y(d, "monsterinstancetype")[1] = DW.obj_pippins_enemy;
        y(d, "monstertype")[1] = 59;
        y(d, "monstermakex")[1] = this.xx + 526;
        y(d, "monstermakey")[1] = this.yy + 54;
        y(d, "monsterinstancetype")[2] = DW.obj_pippins_enemy;
        y(d, "monstertype")[2] = 59;
        y(d, "monstermakex")[2] = this.xx + 516;
        y(d, "monstermakey")[2] = this.yy + 208;
        y(d, "battlemsg")[0] = "* Shadowguy and Pippins dropped in!";
        break;
      }
    case 137:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_zapper_enemy;
        y(d, "monstertype")[0] = 56;
        y(d, "monstermakex")[0] = this.xx + 446 + 20;
        y(d, "monstermakey")[0] = this.yy + 38 + 20;
        y(d, "monsterinstancetype")[1] = DW.obj_pippins_enemy;
        y(d, "monstertype")[1] = 59;
        y(d, "monstermakex")[1] = this.xx + 464 + 30;
        y(d, "monstermakey")[1] = this.yy + 168 + 30;
        y(d, "monstertype")[2] = 0;
        d.rank1time = 47;
        d.rank1turns = 4;
        d.rank1tp = 200;
        y(d, "battlemsg")[0] = "";
        break;
      }
    case 138:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_zapper_enemy;
        y(d, "monstertype")[0] = 56;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 110;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        d.rank1time = 47;
        d.rank1turns = 4;
        d.rank1tp = 200;
        y(d, "battlemsg")[0] = "* Zapper blocked the way!";
        break;
      }
    case 139:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_watercooler_enemy;
        y(d, "monstertype")[0] = 58;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 110;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        d.rank1time = 47;
        d.rank1turns = 4;
        d.rank1tp = 200;
        y(d, "battlemsg")[0] = "* A strong aura emanates from the Watercooler.";
        break;
      }
    case 140:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_watercooler_enemy;
        y(d, "monstertype")[0] = 58;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 110;
        y(d, "monstertype")[1] = 0;
        y(d, "monstertype")[2] = 0;
        d.rank1time = 47;
        d.rank1turns = 4;
        d.rank1tp = 200;
        y(d, "battlemsg")[0] = "* A strong aura emanates from the Moonwarmer.";
        break;
      }
    case 141:
      {
        y(d, "heromakex")[0] = this.xx + 94;
        y(d, "heromakey")[0] = this.yy + 50;
        y(d, "heromakex")[1] = this.xx + 80;
        y(d, "heromakey")[1] = this.yy + 122;
        y(d, "heromakex")[2] = this.xx + 72;
        y(d, "heromakey")[2] = this.yy + 200;
        y(d, "monsterinstancetype")[0] = DW.obj_lanino_rematch_enemy;
        y(d, "monstertype")[0] = 107;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 46;
        y(d, "monsterinstancetype")[1] = DW.obj_elnina_rematch_enemy;
        y(d, "monstertype")[1] = 106;
        y(d, "monstermakex")[1] = this.xx + 510;
        y(d, "monstermakey")[1] = this.yy + 180;
        y(d, "monstertype")[2] = 0;
        d.rank1time = 124;
        d.rank1turns = 7;
        d.rank1tp = 200;
        d.rank1hurtcount = 2;
        y(d, "battlemsg")[0] = "* Its a rematch.";
        break;
      }
    case 777:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_bullettester_enemy;
        y(d, "monsterinstancetype")[1] = DW.obj_bullettester_enemy;
        y(d, "monsterinstancetype")[2] = DW.obj_bullettester_enemy;
        y(d, "monstertype")[0] = 1;
        y(d, "monstertype")[1] = 1;
        y(d, "monstertype")[2] = 1;
        y(d, "battlemsg")[0] = SCRIPT("stringset").call(this, " ");
        break;
      }
    default:
      {
        y(d, "monsterinstancetype")[0] = DW.obj_baseenemy;
        y(d, "monstertype")[0] = 1;
        y(d, "monstermakex")[0] = this.xx + 480;
        y(d, "monstermakey")[0] = this.yy + 110;
        y(d, "monsterinstancetype")[1] = DW.obj_baseenemy;
        y(d, "monstertype")[1] = 1;
        y(d, "monstermakex")[1] = this.xx + 500;
        y(d, "monstermakey")[1] = this.yy + 200;
        y(d, "monstertype")[2] = 0;
        break;
      }
  }
}
DN(scr_encountersetup, "scr_encountersetup");
DJ(scr_encountersetup, "case 0:\n;\ncase 1:\n;\ncase 2:\n;\ncase 3:\n;\ncase 4:\n;\ncase 5:\n;\ncase 6:\n;\ncase 7:\n;\ncase 8:\n;\ncase 9:\n;\ncase 12:\n;\ncase 13:\n;\ncase 14:\n;\ncase 15:\n;\ncase 16:\n;\ncase 17:\n;\ncase 18:\n;\ncase 19:\n;\ncase 20:\n;\ncase 21:\n;\ncase 22:\n;\ncase 23:\n;\ncase 24:\n;\ncase 25:\n;\ncase 27:\n;\ncase 28:\n;\ncase 29:\n;\ncase 30:\n;\ncase 31:\n;\ncase 32:\n;\ncase 33:\n;\ncase 40:\n;\ncase 71:\n;\ncase 72:\n;\ncase 89:\n;\ncase 90:\n;\ncase 91:\n;\ncase 92:\n;\ncase 93:\n;\ncase 94:\n;\ncase 100:\n;\ncase 110:\n;\ncase 111:\n;\ncase 112:\n;\ncase 113:\n;\ncase 114:\n;\ncase 115:\n;\ncase 116:\n;\ncase 117:\n;\ncase 118:\n;\ncase 119:\n;\ncase 120:\n;\ncase 121:\n;\ncase 122:\n;\ncase 123:\n;\ncase 124:\n;\ncase 125:\n;\ncase 126:\n;\ncase 127:\n;\ncase 128:\n;\ncase 129:\n;\ncase 130:\n;\ncase 131:\n;\ncase 132:\n;\ncase 133:\n;\ncase 134:\n;\ncase 135:\n;\ncase 136:\n;\ncase 137:\n;\ncase 138:\n;\ncase 139:\n;\ncase 140:\n;\ncase 141:\n;\ncase 777:");
DR();
var Dh = {
  0: "battle",
  12: "checkers",
  50: "battle",
  52: "battle",
  111: "rudebuster_boss",
  112: "battle",
  113: "battle",
  114: "rouxls_battle",
  115: "knight",
  118: "battle",
  121: "tenna_battle",
  125: "battle",
  126: "battle",
  132: "battle",
  133: "battle",
  134: "battle",
  135: "battle",
  136: "battle",
  137: "battle",
  138: "battle",
  139: "battle_vapor",
  140: "rudebuster_boss",
  500: "battle",
  777: "battle"
};
var DV = {
  0: "plain",
  115: "plain",
  500: "plain",
  777: "plain"
};
var DE = "battle";
DR();
var wrap = DN((D, N, NJ) => {
  if (!D || typeof D.prototype[N] != "function") {
    throw new Error("ch3_tenna: " + (D && D.name) + "." + N + " missing");
  }
  let Nu = D.prototype[N];
  D.prototype[N] = NJ(Nu);
}, "wrap");
var Dr = 10000;
var tenna_bg_layer = class Nj extends D3 {
  create() {
    this.spr = null;
    this.lx = 0;
    this.hs = 0;
    this.htile = 0;
    this.stretch = 0;
    this.visible = true;
  }
  step() {
    if (this.hs) {
      this.lx += this.hs;
    }
  }
  draw(D) {
    let NW = this.spr && D1[this.spr];
    if (!NW) {
      return;
    }
    let NO = D7.view.x || 0;
    let Nu = D7.view.y || 0;
    let Nm = this.stretch ? 640 / NW.w : 1;
    let Nx = this.stretch ? 480 / NW.h : 1;
    let Nh = NW.w * Nm;
    let NV = this.lx;
    if (this.htile) {
      NV = ((NV - NO) % Nh + Nh) % Nh + NO;
      if (NV > NO) {
        NV -= Nh;
      }
    }
    for (let Nn = NV; Nn < (this.htile ? NO + 640 : NV + 1); Nn += Nh) {
      D.draw_sprite_ext(this.spr, 0, Nn, Nu, Nm, Nx, 0, 16777215, 1);
    }
  }
};
DN(tenna_bg_layer, "tenna_bg_layer");
DL(tenna_bg_layer, "kinds", D4("tenna_bg_layer", D3));
var Dw = tenna_bg_layer;
var live = DN(D => D && D instanceof Dw && !D.destroyed ? D : null, "live");
var DZ = {
  __tenna: true,
  layer_create: DN(D => {
    let NR = D9(0, 0, Dw);
    NR.depth = D;
    return NR;
  }, "layer_create"),
  layer_background_create: DN((D, N) => {
    let NW = live(D);
    if (NW) {
      NW.spr = N;
    }
    return NW || -1;
  }, "layer_background_create"),
  layer_background_htiled: DN((D, N) => {
    let NW = live(D);
    if (NW) {
      NW.htile = N ? 1 : 0;
    }
  }, "layer_background_htiled"),
  layer_background_stretch: DN((D, N) => {
    let NF = live(D);
    if (NF) {
      NF.stretch = N ? 1 : 0;
    }
  }, "layer_background_stretch"),
  layer_background_speed: DN(() => {}, "layer_background_speed"),
  layer_background_destroy: DN(D => {
    let NW = live(D);
    if (NW) {
      NW.instance_destroy();
    }
  }, "layer_background_destroy"),
  layer_hspeed: DN((D, N) => {
    let NR = live(D);
    if (NR) {
      NR.hs = Number(N) || 0;
    }
  }, "layer_hspeed"),
  layer_get_hspeed: DN(D => {
    let NF = live(D);
    if (NF) {
      return NF.hs;
    } else {
      return 0;
    }
  }, "layer_get_hspeed")
};
var withLayers = DN((D, N, NJ) => {
  if (Q.impl || !D7.exists("obj_tenna_enemy")) {
    return N.apply(D, NJ);
  }
  Q.impl = DZ;
  try {
    return N.apply(D, NJ);
  } finally {
    if (Q.impl === DZ) {
      Q.impl = null;
    }
  }
}, "withLayers");
wrap(o, "userEvent1", D => function (...N) {
  let NO = new Set(D7.all().filter(Nm => Nm.is && Nm.is("obj_battleback")));
  let Nu = withLayers(this, D, N);
  for (let Nm of D7.all()) {
    if (Nm.is && Nm.is("obj_battleback") && !NO.has(Nm) && !Nm.destroyed) {
      Nm.depth = Dr;
    }
  }
  return Nu;
});
for (let NG of ["step", "userEvent0", "cleanUp"]) {
  wrap(f, NG, D => function (...N) {
    return withLayers(this, D, N);
  });
}
var Df = "spr_gameshow_drowningRalsei_ralsei_origin_edit";
wrap(X, "drawBody", D => function (N, ...NJ) {
  if (d.chapter !== 3 || this.normalsprite !== Df || !N) {
    return D.call(this, N, ...NJ);
  }
  let Nu = Object.prototype.hasOwnProperty.call(N, "draw_sprite_ext");
  let Nm = Object.prototype.hasOwnProperty.call(N, "draw_sprite_white");
  let Nx = N.draw_sprite_ext;
  let Nh = N.draw_sprite_white;
  N.draw_sprite_ext = function (NV, NE, Nn, Nr, Nk, Nw, ...Nl) {
    if (NV === Df) {
      return Nx.call(this, NV, NE, Nn, Nr, Nk / 2, Nw / 2, ...Nl);
    } else {
      return Nx.call(this, NV, NE, Nn, Nr, Nk, Nw, ...Nl);
    }
  };
  if (Nh) {
    N.draw_sprite_white = function (NV, NE, Nn, Nr, Nk, Nw, ...Nl) {
      if (NV === Df) {
        return Nh.call(this, NV, NE, Nn, Nr, Nk / 2, Nw / 2, ...Nl);
      } else {
        return Nh.call(this, NV, NE, Nn, Nr, Nk, Nw, ...Nl);
      }
    };
  }
  try {
    return D.call(this, N, ...NJ);
  } finally {
    if (Nu) {
      N.draw_sprite_ext = Nx;
    } else {
      delete N.draw_sprite_ext;
    }
    if (Nh) {
      if (Nm) {
        N.draw_sprite_white = Nh;
      } else {
        delete N.draw_sprite_white;
      }
    }
  }
});
var Di = DN(D => {
  let N = D7.first(D);
  if (N && !N.destroyed) {
    return N;
  } else {
    return null;
  }
}, "ex");
wrap(C, "draw", D => function (N, ...NJ) {
  if (d.chapter !== 3 || !N || !N.ctx) {
    return D.call(this, N, ...NJ);
  }
  let NO = Di("obj_tenna_zoom");
  let Nu = Di("obj_actor_tenna");
  let Nm = Nu && Nu.threepartmode == 1 && Di("obj_lightemup_controller") || NO && NO.minigameinsanityintro;
  let Nx = Di("obj_tenna_minigame_ui");
  if (!Nm && Nx && Nx.enabled == 1) {
    return;
  }
  if (!NO || !NO.minigameinsanityintro) {
    return D.call(this, N, ...NJ);
  }
  this.ypostenna = (this.ypostenna || 0) + (58 - (this.ypostenna || 0)) * 0.4;
  this.depth = -999999999;
  let NV = this.ypostenna;
  N.ctx.save();
  N.ctx.translate(0, NV);
  try {
    return D.call(this, N, ...NJ);
  } finally {
    N.ctx.restore();
  }
});
var byChapter = DN((D, N) => function (...NJ) {
  return (d.chapter >= 3 ? N : D).apply(this, NJ);
}, "byChapter");
t.scr_damage = byChapter(w, a);
t.scr_damage_all = byChapter(V, i);
t.scr_act_simul = byChapter(E, b);
t.scr_spareanim = function (...D) {
  return (d.chapter >= 3 ? e : d.chapter === 2 ? h : I).apply(this, D);
};
t.scr_recruit = function (...D) {
  if (!(d.chapter < 2)) {
    return (d.chapter >= 3 ? l : k).apply(this, D);
  }
};
var Dc = new Proxy({}, {
  get: DN((D, N) => A[N] || v[N], "get")
});
{
  let Nt = c;
  if (Nt && Nt.prototype && typeof Nt.prototype.create == "function" && !Nt.prototype.__bribePoints) {
    let Le = Nt.prototype.create;
    Nt.prototype.__bribePoints = true;
    Nt.prototype.create = function (...D) {
      let N = Le.apply(this, D);
      try {
        if (d.flag && !D7.exists("__roomhost")) {
          let NJ = 0;
          D7.with("obj_pippins_enemy", () => {
            NJ++;
          });
          let NF = Math.max(1, NJ) * 150;
          if (!((d.flag[1044] || 0) >= NF)) {
            d.flag[1044] = NF;
          }
        }
      } catch {}
      return N;
    };
  }
}
var DT = 110;
var Do = 141;
var DY = new Set();
var Dv = new Set((DF(scr_encountersetup) ?? String(scr_encountersetup)).match(/case (\d+):/g).map(D => Number(D.slice(5, -1))));
var Ds = {
  113: "",
  133: "board_4_challenge",
  134: "board_4_challenge",
  135: "board_4_challenge"
};
function snapshot() {
  return {
    t: d.monstertype.slice(),
    it: d.monsterinstancetype.slice(),
    mx: d.monstermakex.slice(),
    my: d.monstermakey.slice(),
    hx: d.heromakex.slice(),
    hy: d.heromakey.slice(),
    bm: (d.battlemsg || []).slice(),
    name: d.monstername.slice()
  };
}
DN(snapshot, "snapshot");
function restore(D) {
  d.monstertype = D.t;
  d.monsterinstancetype = D.it;
  d.monstermakex = D.mx;
  d.monstermakey = D.my;
  d.heromakex = D.hx;
  d.heromakey = D.hy;
  d.battlemsg = D.bm;
  d.monstername = D.name;
}
DN(restore, "restore");
function monsterName(D, N) {
  let NJ = {
    t: d.monstertype.slice(),
    n: d.monstername.slice()
  };
  d.monstertype[0] = D;
  let NF = {
    myself: 0
  };
  try {
    Z.call(NF);
  } catch {}
  let NR = d.monstername[0];
  d.monstertype = NJ.t;
  d.monstername = NJ.n;
  if (NR && NR.trim()) {
    return NR;
  } else {
    return bossTitle(N) || "Enemy " + D;
  }
}
DN(monsterName, "monsterName");
var DC = /scr_attack_override[\s\S]{0,120}?,\s*\d+\s*,\s*(['"])([^'"]+)\1/;
function bossTitle(D) {
  if (typeof D != "function") {
    return null;
  }
  let N = D.prototype && D.prototype.step;
  let NJ = N && DC.exec(D6(N));
  if (NJ) {
    return NJ[2];
  } else {
    return null;
  }
}
DN(bossTitle, "bossTitle");
var Dj = /encounterno === (\d+)\)[\s\S]{0,400}?monstername'\)\[[^\]]*\]\s*=\s*SCRIPT\('stringset'\)\.call\([^,]*,\s*"([^"]*)"/g;
function encounterRename(D, N) {
  if (typeof D != "function") {
    return null;
  }
  for (let NJ of [D.prototype && D.prototype.step, D.prototype && D.prototype.create]) {
    if (!NJ) {
      continue;
    }
    let NF = D6(NJ);
    Dj.lastIndex = 0;
    let NR;
    while (NR = Dj.exec(NF)) {
      if (Number(NR[1]) === N) {
        return NR[2];
      }
    }
  }
  return null;
}
DN(encounterRename, "encounterRename");
function ensureChapter3Globals() {
  x();
  if (d.boardbattleresult === undefined) {
    d.boardbattleresult = "";
  }
  if (d.entrance === undefined) {
    d.entrance = 0;
  }
  if (d.specialbattle === undefined) {
    d.specialbattle = 3;
  }
}
DN(ensureChapter3Globals, "ensureChapter3Globals");
var Dp = {
  111: "room_board_2"
};
function unparentTennaBg() {
  let D = D7.first("obj_tenna_enemy_bg");
  if (D && !D.destroyed) {
    D.image_xscale = 1;
    D.image_yscale = 1;
  }
}
DN(unparentTennaBg, "unparentTennaBg");
function buildChapter3Fights() {
  let D = [];
  let N = d.chapter;
  d.chapter = 3;
  for (let NJ = DT; NJ <= Do; NJ++) {
    if (DY.has(NJ) || !Dv.has(NJ)) {
      continue;
    }
    let NF = snapshot();
    d.monstertype = [0, 0, 0];
    d.monsterinstancetype = [null, null, null];
    d.battlemsg = [" "];
    let NR = true;
    U(Dp[NJ] || null);
    try {
      scr_encountersetup.call({}, NJ);
    } catch (NW) {
      NR = false;
      console.error("ch3 encounter " + NJ + " setup failed", NW);
    } finally {
      U(null);
    }
    if (NR && d.monstertype[0] > 0) {
      let NO = [];
      for (let Nu = 0; Nu < 3; Nu++) {
        let Nm = d.monstertype[Nu];
        let Nx = d.monsterinstancetype[Nu];
        if (Nm > 0 && Nx && typeof Nx == "function") {
          NO.push({
            cls: Nx,
            type: Nm,
            x: d.monstermakex[Nu],
            y: d.monstermakey[Nu],
            setup: NJ === 121 ? unparentTennaBg : () => {}
          });
        }
      }
      if (NO.length) {
        let Nh = NO.map(Nn => encounterRename(Nn.cls, NJ) || monsterName(Nn.type, Nn.cls));
        let NV = {};
        for (let Nn of Nh) {
          NV[Nn] = (NV[Nn] || 0) + 1;
        }
        let NE = Object.entries(NV).map(([Nr, Nk]) => Nk > 1 ? Nr + " x" + Nk : Nr).join(" & ");
        D.push({
          id: "ch3enc" + NJ,
          name: NE,
          chapter: 3,
          glow: NO.some(Nr => bossTitle(Nr.cls)) ? "red" : null,
          area: "Chapter 3",
          generated: true,
          desc: NE + "#Chapter 3, encounter " + NJ + ".",
          party: d.char.slice(),
          heromakex: d.heromakex.slice(),
          heromakey: d.heromakey.slice(),
          monstermakex: d.monstermakex.slice(0, 3),
          monstermakey: d.monstermakey.slice(0, 3),
          monsters: NO,
          battlemsg: d.battlemsg && d.battlemsg[0] || " ",
          encounterno: NJ,
          music: NJ in Ds ? Ds[NJ] : Dh[String(NJ)] || DE,
          room: Dp[NJ] || null,
          rank: {
            time: d.rank1time,
            turns: d.rank1turns,
            tp: d.rank1tp,
            hurtcount: d.rank1hurtcount
          },
          background: z(DV[String(NJ)])
        });
      }
    }
    restore(NF);
  }
  d.chapter = N;
  return D;
}
DN(buildChapter3Fights, "buildChapter3Fights");
DR();
var DQ = {};
var DS = ["scr_damage", "scr_damage_all", "scr_act_simul", "scr_spareanim", "scr_recruit"];
var DH = {};
for (let Jm of DS) {
  let Jx = t[Jm];
  t[Jm] = function (...D) {
    let NO = DH[Jm];
    let Nu = NO && typeof d.chapter == "number" ? NO[d.chapter] : undefined;
    if (typeof Nu == "function") {
      return Nu.apply(this, D);
    } else if (typeof Jx == "function") {
      return Jx.apply(this, D);
    } else {
      return undefined;
    }
  };
}
function registerChapter(D, {
  SCR: N,
  OBJ: NJ,
  ensureGlobals: NF,
  startStats: NR
}) {
  if (DQ[D]) {
    return DQ[D];
  }
  let NO = [];
  for (let Nh of DS) {
    let NV = N && N[Nh];
    if (typeof NV == "function") {
      (DH[Nh] ||= {})[D] = NV;
      NO.push(Nh);
    }
  }
  if (NJ && typeof NJ.obj_heart == "function") {
    H(D, NJ.obj_heart);
  }
  if (N) {
    K(D, N);
  }
  if (N && typeof N.scr_texttype == "function") {
    S[D] = typersFromTexttype(N.scr_texttype);
  }
  if (N && typeof N.scr_spellinfo == "function") {
    let NE = N.scr_spellinfo;
    M[D] = Nn => {
      let NZ = {};
      try {
        NE.call(NZ, Nn);
      } catch {
        return null;
      }
      const NA = {
        spellname: NZ.spellname,
        spellnameb: NZ.spellnameb,
        spelltarget: NZ.spelltarget,
        cost: NZ.cost,
        spelldescb: NZ.spelldescb,
        spelldesc: NZ.spelldesc,
        spellusable: NZ.spellusable
      };
      return NA;
    };
  }
  DQ[D] = {
    ch: D,
    wired: NO,
    spellmenu_setup: N && typeof N.scr_spellmenu_setup == "function" ? N.scr_spellmenu_setup : null,
    ensureGlobals: NF || (() => ensureChapter3Globals()),
    startStats: NR || null
  };
  try {
    if (typeof fetch == "function" && typeof Image !== "undefined") {
      g().then(() => P(D)).catch(() => {});
    }
  } catch {}
  return DQ[D];
}
DN(registerChapter, "registerChapter");
var Dq = {
  comicsans: "fnt_main",
  tinynoelle: "fnt_small"
};
var DM = /case (\d+): \{\s*(?:let rate = SCRIPT\('langopt'\)\.call\(this, (\d+), \d+\);\s*)?(?:if \(G\.darkzone === 1\) \{\s*)?SCRIPT\('scr_textsetup'\)\.call\(this, SCRIPT\('scr_84_get_font'\)\.call\(this, "(\w+)"\), c\.(\w+), this\.x, this\.y(?: \+ \d+)?, (\d+), (\d+), (\d+|rate), '(\w+)', (\d+), (\d+), (\d+)\)/g;
function typersFromTexttype(D) {
  let NJ = {};
  let NF = D6(D);
  for (let Nu of NF.matchAll(DM)) {
    let [, Nm, Nx, Nh, NV, NE, Nn, Nr, Nk, Nw, Nl, NZ] = Nu;
    let NA = Nr === "rate" ? Nx : Nr;
    if (NA === undefined) {
      continue;
    }
    let Nb = "fnt_" + Nh;
    if (Dq[Nh] && !D2[Nb]) {
      Nb = Dq[Nh];
    }
    let Nf = D5[NV] !== undefined ? D5[NV] : D5.white;
    NJ[Number(Nm)] = [Nb, Nf, Number(NA), Nk === "snd_nosound" ? null : Nk, Number(Nw), Number(Nl), Number(NZ), Number(Nn), Number(NE)];
  }
  return NJ;
}
DN(typersFromTexttype, "typersFromTexttype");
function applyChapterEncounter(D, N) {
  let NF = DQ[D];
  if (NF) {
    NF.ensureGlobals();
    t.spellmenu_setup = NF.spellmenu_setup;
    applyStartStats(NF.startStats);
  }
}
DN(applyChapterEncounter, "applyChapterEncounter");
const N2 = {
  maxhp: [90, 110, 70],
  at: [10, 14, 8],
  charweapon: [1, 2, 3],
  chararmor1: [0, 0, 0],
  chararmor2: [0, 0, 0]
};
var N3 = N2;
function isChapter1Party() {
  for (let [NW, NO] of Object.entries(N3)) {
    for (let Nu = 0; Nu < 3; Nu++) {
      if ((d[NW] && d[NW][Nu + 1]) !== NO[Nu]) {
        return false;
      }
    }
  }
  return true;
}
DN(isChapter1Party, "isChapter1Party");
function applyStartStats(D) {
  if (!!D && !!isChapter1Party()) {
    for (let [Nx, Nh] of Object.entries(D)) {
      if (Nx !== "spell" && Array.isArray(d[Nx])) {
        for (let [NV, NE] of Object.entries(Nh)) {
          d[Nx][Number(NV)] = NE;
        }
      }
    }
    if (D.maxhp) {
      for (let Nn of Object.keys(D.maxhp)) {
        d.hp[Number(Nn)] = d.maxhp[Number(Nn)];
      }
    }
    if (D.spell && Array.isArray(d.spell)) {
      for (let [Nk, Nw] of Object.entries(D.spell)) {
        let [Ne, Nc] = Nk.split(",").map(Number);
        if (!Array.isArray(d.spell[Ne])) {
          d.spell[Ne] = new Array(12).fill(0);
        }
        d.spell[Ne][Nc] = Nw;
      }
      D0();
    }
    q();
  }
}
DN(applyStartStats, "applyStartStats");
function N6() {
  return {
    t: d.monstertype.slice(),
    it: d.monsterinstancetype.slice(),
    mx: d.monstermakex.slice(),
    my: d.monstermakey.slice(),
    hx: d.heromakex.slice(),
    hy: d.heromakey.slice(),
    bm: (d.battlemsg || []).slice(),
    name: d.monstername.slice(),
    ch: d.chapter,
    r: [d.rank1time, d.rank1turns, d.rank1tp, d.rank1hurtcount],
    char: (d.char || [1, 2, 3]).slice()
  };
}
DN(N6, "snapshot");
function N7(D) {
  d.monstertype = D.t;
  d.monsterinstancetype = D.it;
  d.monstermakex = D.mx;
  d.monstermakey = D.my;
  d.heromakex = D.hx;
  d.heromakey = D.hy;
  d.battlemsg = D.bm;
  d.monstername = D.name;
  d.chapter = D.ch;
  [d.rank1time, d.rank1turns, d.rank1tp, d.rank1hurtcount] = D.r;
  d.char = D.char;
}
DN(N7, "restore");
var N8 = /scr_attack_override[\s\S]{0,120}?,\s*\d+\s*,\s*(['"])([^'"]+)\1/;
function N9(D) {
  if (typeof D != "function") {
    return null;
  }
  let NW = D.prototype && D.prototype.step;
  let NO = NW && N8.exec(D6(NW));
  if (NO) {
    return NO[2];
  } else {
    return null;
  }
}
DN(N9, "bossTitle");
function ND(D, N, NJ) {
  let Nu = {
    t: d.monstertype.slice(),
    n: d.monstername.slice()
  };
  d.monstertype[0] = N;
  try {
    const Nx = {
      myself: 0
    };
    D.call(Nx, 0);
  } catch {}
  let Nm = d.monstername[0];
  d.monstertype = Nu.t;
  d.monstername = Nu.n;
  if (Nm && String(Nm).trim()) {
    return String(Nm);
  } else {
    return N9(NJ) || "Enemy " + N;
  }
}
DN(ND, "monsterName");
function buildChapterFights({
  ch: D,
  cases: N,
  scr_encountersetup: NJ,
  scr_monstersetup: scr_monstersetup,
  ENC_MUSIC: NR = {},
  ENC_BG: NW = {},
  DEFAULT_MUSIC: NO = "battle",
  room: Nu = {},
  bosses: Nm = [],
  cut: Nx = {},
  area: Nh = null,
  verified: NV = null,
  party: NE = {},
  musiclevel: Nn = {},
  story: Nr = {}
}) {
  let Nl = [];
  let NZ = NV ? new Set(NV) : null;
  let NA = new Set(Nm);
  for (let Ni of N) {
    let Na = N6();
    d.chapter = D;
    d.monstertype = [0, 0, 0];
    d.monsterinstancetype = [null, null, null];
    d.battlemsg = [" "];
    d.char = (NE[Ni] || [1, 2, 3]).slice();
    let Ne = true;
    let Nc = Nu[Ni] || null;
    let NT = Array.isArray(Nc) ? Nc[0] : Nc;
    let No = Array.isArray(Nc) && Nc[1] || 0;
    let NY = Array.isArray(Nc) && Nc[2] || 0;
    let Nv = null;
    if (NT && (No || NY)) {
      try {
        U(null);
        NJ.call({}, Ni);
        Nv = {
          x: d.heromakex.slice(),
          y: d.heromakey.slice()
        };
      } catch {
        Nv = null;
      }
      d.monstertype = [0, 0, 0];
      d.monsterinstancetype = [null, null, null];
      d.battlemsg = [" "];
      d.char = (NE[Ni] || [1, 2, 3]).slice();
    }
    U(NT || null);
    try {
      NJ.call({}, Ni);
    } catch (Ns) {
      Ne = false;
      console.error("ch" + D + " encounter " + Ni + " setup failed", Ns);
    } finally {
      U(null);
    }
    if (Ne && Nv) {
      for (let NI = 0; NI < 3; NI++) {
        if (d.heromakex[NI] !== Nv.x[NI]) {
          d.heromakex[NI] -= No;
        }
        if (d.heromakey[NI] !== Nv.y[NI]) {
          d.heromakey[NI] -= NY;
        }
      }
    }
    if (Ne && d.monstertype[0] > 0) {
      let Ng = [];
      for (let NP = 0; NP < 3; NP++) {
        let NC = d.monstertype[NP];
        let NX = d.monsterinstancetype[NP];
        if (NC > 0 && NX && typeof NX == "function") {
          Ng.push({
            cls: NX,
            type: NC,
            x: d.monstermakex[NP],
            y: d.monstermakey[NP],
            setup: () => {}
          });
        }
      }
      if (Ng.length) {
        let NK = Ng.map(Jw => ND(scr_monstersetup, Jw.type, Jw.cls));
        let Jh = {};
        for (let Jw of NK) {
          Jh[Jw] = (Jh[Jw] || 0) + 1;
        }
        let JV = Object.entries(Jh).map(([Jl, JZ]) => JZ > 1 ? Jl + " x" + JZ : Jl).join(" & ");
        let JE = NA.has(Ni) || Ng.some(Jl => Jl.type >= 100 && Jl.type < 500);
        let Jn = Nx[Ni];
        let Jr = z(NW[String(Ni)]);
        let Jk = NE[Ni] ? {
          c: d.char.slice(),
          x: d.heromakex.slice(),
          y: d.heromakey.slice()
        } : null;
        Nl.push({
          id: "ch" + D + "enc" + Ni,
          name: JV,
          chapter: D,
          generated: true,
          boss: JE || undefined,
          hidden: NZ && !NZ.has(Ni) || undefined,
          glow: Ng.some(Jl => N9(Jl.cls)) ? "red" : null,
          cut: !!Jn || undefined,
          area: Jn ? "CUT CONTENT" : Nh || "Chapter " + D,
          desc: JV + "#Chapter " + D + ", encounter " + Ni + "." + (Jn ? "#" + Jn : ""),
          party: d.char.slice(),
          heromakex: d.heromakex.slice(),
          heromakey: d.heromakey.slice(),
          monsters: Ng,
          encounterno: Ni,
          battlemsg: D >= 5 && d.battlemsg && d.battlemsg[0] === "" ? "" : d.battlemsg && d.battlemsg[0] || " ",
          music: NR[String(Ni)] || NO,
          musiclevel: (Nn[String(Ni)] ?? Nn.default) !== undefined ? [Nn[String(Ni)] ?? Nn.default, 1] : undefined,
          room: typeof Nc == "string" ? Nc : null,
          rank: {
            time: d.rank1time,
            turns: d.rank1turns,
            tp: d.rank1tp,
            hurtcount: d.rank1hurtcount
          },
          background: Jk ? () => {
            d.char = Jk.c.slice();
            d.heromakex = Jk.x.slice();
            d.heromakey = Jk.y.slice();
            if (Jr) {
              Jr();
            }
          } : Jr
        });
      }
    }
    N7(Na);
  }
  for (let [JA, Jb] of Object.entries(Nr || {})) {
    let Jf = Nl.find(Ji => Ji.encounterno === Number(JA) && !Ji.story);
    if (Jf) {
      for (let Ji of Jb) {
        let Ja = Jf.background;
        let Je = Ji.plot;
        let Jc = Ji.flags || {};
        Nl.push({
          ...Jf,
          id: Jf.id + Ji.suffix,
          name: Jf.name + " (" + Ji.label + ")",
          story: Ji.label,
          desc: Jf.name + " (" + Ji.label + ")#Chapter " + D + ", encounter " + JA + ", as the story fights it" + (Ji.why ? "#" + Ji.why : "") + ".",
          background: () => {
            d.plot = Je;
            for (let [Jv, Js] of Object.entries(Jc)) {
              d.flag[Number(Jv)] = Js;
            }
            if (Ja) {
              Ja();
            }
          }
        });
      }
    }
  }
  return Nl;
}
DN(buildChapterFights, "buildChapterFights");
export { ensureChapter3Globals as a, buildChapter3Fights as b, DQ as c, registerChapter as d, typersFromTexttype as e, applyChapterEncounter as f, buildChapterFights as g };
