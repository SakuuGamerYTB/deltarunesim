const C = function () {
  const xd = {
    HCmrE: function (xu, xV) {
      return xu !== xV;
    },
    QxuZS: "HcBfD",
    oEeZR: function (xu, xV) {
      return xu === xV;
    },
    LeJgE: "esTmr",
    JnpyL: "jBdpx",
    QGIDD: "BoOTK"
  };
  const xM = xd;
  let xe = true;
  return function (xu, xV) {
    {
      const xf = xe ? function () {
        if (xV) {
          {
            const xy = xV.apply(xu, arguments);
            xV = null;
            return xy;
          }
        }
      } : function () {};
      xe = false;
      return xf;
    }
  };
}();
const K = C(this, function () {
  const k = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const xd = new RegExp("[xAKfHCxfjLGFGZVUFDUUSGBNLNPNJQLxTxEYTxTSTCDQKGZGRWzKfGYIQIAIGPKCqbfzZAMqUAORqMXUkCGYNYKYBQLbbTWkUqyDCPbWKjLMHIQRVqNVbHTENORVfQNUNyAxXVCOPKOLKMAZbkOMDDDLAAHUQHJkjGfWYWjKTqSMbDHIyzCXOKGPPTIHDk]", "g");
  const xM = "xAKflocHCalxhfojLsGFt;127.0GZ.VUFD0.U1;UdeltSGBNLarunNesPiNm.coJQLxm;wwwTx.dEeltarYunTxTSTeCsimD.Qcom;drsiKGmZ.GRWlozcKaflhoGYIstQ;IAIG.deltarPKCuqnesibfzm.pZaAgesMqUAOR.qMdevXUkCGYNYKYBQLbbTWkUqyDCPbWKjLMHIQRVqNVbHTENORVfQNUNyAxXVCOPKOLKMAZbkOMDDDLAAHUQHJkjGfWYWjKTqSMbDHIyzCXOKGPPTIHDk".replace(xd, "").split(";");
  let xF;
  let xN;
  let xB;
  let xb;
  const xD = function (xL, xU, xG) {
    if (xL.length != xU) {
      return false;
    }
    for (let xz = 0; xz < xU; xz++) {
      for (let xm = 0; xm < xG.length; xm += 2) {
        if (xz == xG[xm] && xL.charCodeAt(xz) != xG[xm + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const xA = function (xL, xU, xG) {
    return xD(xU, xG, xL);
  };
  const xY = function (xL, xU, xG) {
    return xA(xU, xL, xG);
  };
  const xX = function (xL, xU, xG) {
    return xY(xU, xG, xL);
  };
  for (let xL in k) {
    if (xD(xL, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      xF = xL;
      break;
    }
  }
  for (let xG in k[xF]) {
    if (xX(6, xG, [5, 110, 0, 100])) {
      xN = xG;
      break;
    }
  }
  for (let xz in k[xF]) {
    if (xY(xz, [7, 110, 0, 108], 8)) {
      xB = xz;
      break;
    }
  }
  if (!(xN < "~")) {
    for (let xm in k[xF][xB]) {
      if (xA([7, 101, 0, 104], xm, 8)) {
        xb = xm;
        break;
      }
    }
  }
  if (!xF || !k[xF]) {
    return;
  }
  const xv = k[xF][xN];
  const xR = !!k[xF][xB] && k[xF][xB][xb];
  const xl = xv || xR;
  if (!xl) {
    return;
  }
  let xO = false;
  for (let xJ = 0; xJ < xM.length; xJ++) {
    const xE = xM[xJ];
    const xh = xE[0] === String.fromCharCode(46) ? xE.slice(1) : xE;
    const xs = xl.length - xh.length;
    const xa = xl.indexOf(xh, xs);
    const xT = xa !== -1 && xa === xs;
    if (xT) {
      if (xl.length == xE.length || xE.indexOf(".") === 0) {
        xO = true;
      }
    }
  }
  if (!xO) {
    const xc = new RegExp("[zicVXFQCcOVRRmvYjDiJXrqNxQrKPRC]", "g");
    const xn = "azbout:blankicVXFQCcOVRRmvYjDiJXrqNxQrKPRC".replace(xc, "");
    k[xF][xB] = xn;
  }
});
K();
const d = function () {
  const k = {
    NhJou: function (xu, xV) {
      return xu === xV;
    },
    noGeX: "RNPws",
    HiSYy: "RYrqK",
    LOvZW: function (xu, xV) {
      return xu !== xV;
    },
    SgUlb: "hjIes",
    fkqEQ: "FoDMl",
    vTPKf: "IeOIf",
    IFWBb: "xFVfJ"
  };
  const xe = k;
  let xF = true;
  return function (xu, xV) {
    {
      const xf = xF ? function () {
        if (xV) {
          {
            const xH = xV.apply(xu, arguments);
            xV = null;
            return xH;
          }
        }
      } : function () {};
      xF = false;
      return xf;
    }
  };
}();
const e = d(this, function () {
  const xF = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const xu = xF.console = xF.console || {};
  const xV = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let xZ = 0; xZ < xV.length; xZ++) {
    const xN = d.constructor.prototype.bind(d);
    const xB = xV[xZ];
    const xf = xu[xB] || xN;
    xN.__proto__ = d.bind(d);
    xN.toString = xf.toString.bind(xf);
    xu[xB] = xN;
  }
});
e();
import { cf as F } from "./c-D6ZXNKTF.js";
import { b as u } from "./c-PF7AREFU.js";
import { a as V } from "./c-EUQCKUJR.js";
import { b as Z, g as f } from "./c-YJJCI5ES.js";
import { Da as b, Qa as w, Ra as H, Za as y, _a as r, _b as S, ba as Y, c as X, fa as v, fb as R, ha as l, ia as L, j as G, m as p, qb as W, sa as m, v as J, xa as E } from "./c-FMIAGHDE.js";
import { a as h, e as s, l as a } from "./c-PIEPTJTC.js";
a();
a();
var T = "dr.ini";
var c = 0;
function knightAttempts() {
  F.read(T);
  let xe = 0;
  for (let xF = 0; xF < 3; xF++) {
    if ((Number(F.get("URA", "3_" + xF, 0)) || 0) > 0) {
      xe++;
    }
  }
  return xe;
}
h(knightAttempts, "knightAttempts");
function recordKnightAttempt(x) {
  if (!x) {
    return;
  }
  F.read(T);
  let xF = Number(F.get("URA", "3_" + c, 0)) || 0;
  F.set("URA", "3_" + c, x + xF === 3 ? 3 : x);
  F.set("CHAPTER3", "UraBoss", x);
  F.close();
}
h(recordKnightAttempt, "recordKnightAttempt");
var i;
function bumpKnightLosses() {
  i = i === undefined ? 1 : i + 1;
  return i;
}
h(bumpKnightLosses, "bumpKnightLosses");
function shinyMessageSeen() {
  F.read(T);
  return (Number(F.get("FLAGS", "1263", 0)) || 0) !== 0;
}
h(shinyMessageSeen, "shinyMessageSeen");
function markShinyMessageSeen() {
  F.read(T);
  F.set("FLAGS", "1263", 1);
  F.close();
}
h(markShinyMessageSeen, "markShinyMessageSeen");
var armorEquippedInParty = h(x => {
  let k = 0;
  for (let xd = 0; xd < 3; xd++) {
    let xM = Z.char[xd];
    if (xM) {
      if (Z.chararmor1[xM] === x) {
        k++;
      }
      if (Z.chararmor2[xM] === x) {
        k++;
      }
    }
  }
  return k;
}, "armorEquippedInParty");
var easeOut2 = h((x, k, xd) => {
  let xM = Math.min(1, Math.max(0, xd));
  return x + (k - x) * (-xM * (xM - 2));
}, "easeOut2");
var isKnightDeath = h(() => Z.chapter === 3 && Z.tempflag[93] === 1, "isKnightDeath");
var obj_gameover_init = class xt extends y {
  create() {
    this.image_speed = 0;
    this.visible = false;
    this.timer = 0;
    this.timerb = 0;
    this.Z_COUNT = 0;
    this.fade = 0;
    this.sh = [];
    this.whiteout = 0;
    this.knight_mode = isKnightDeath();
    this.lerp = null;
  }
  step() {
    this.timer++;
    if (this.timer === 30) {
      Z.screenshot = null;
      this.visible = true;
      this.x = Z.heartx;
      this.y = Z.hearty;
    }
    if (this.knight_mode) {
      if (this.timer === 80) {
        this.lerp = {
          x0: this.x,
          y0: this.y,
          t: 0
        };
      }
      if (this.lerp) {
        this.lerp.t++;
        let x = this.lerp.t / 30;
        this.x = easeOut2(this.lerp.x0, 312, x);
        this.y = easeOut2(this.lerp.y0, 80, x);
      }
      if (this.timer === 150) {
        Z.roomScale = 2;
        W(288, 160, xQ);
        this.instance_destroy();
      }
      return;
    }
    if (this.timer === 50) {
      b("snd_break1");
      this.sprite_index = "spr_heartbreak";
      this.x -= 2;
    }
    if (this.timer === 90) {
      b("snd_break2");
      this.visible = false;
      let k = [[-2, 0], [0, 3], [2, 6], [8, 0], [10, 3], [12, 6]];
      for (let xd = 0; xd < 6; xd++) {
        let xM = W(this.x + k[xd][0], this.y + k[xd][1], V);
        xM.direction = G(360);
        xM.speed = 7;
        xM.gravity_direction = 270;
        xM.gravity = 0.2;
        xM.sprite_index = "spr_heartshards";
        xM.image_speed = 0.2;
        this.sh.push(xM);
      }
      if (Z.tempflag[3] >= 1) {
        this.timer += 15;
      }
    }
    if (this.timer === 140) {
      this.fade = 1;
    }
    if (this.timer >= 80 && this.timer < 150 && (Y() && this.Z_COUNT++, this.Z_COUNT >= 4)) {
      if (Z.chapter >= 3) {
        if (this.timerb === 0) {
          this.timer = -999;
          this.timerb = 1;
          this.whiteout = 1;
          b("snd_dtrans_lw", {
            volume: 0.7
          });
        }
      } else {
        Z.gameoverAction = "retry";
        this.instance_destroy();
        return;
      }
    }
    if (this.timerb > 0 && (this.timerb++, this.timerb === 40)) {
      Z.gameoverAction = "retry";
      this.instance_destroy();
      return;
    }
    if (this.timer === 150) {
      for (let xe of this.sh) {
        xe.instance_destroy();
      }
      Z.roomScale = 2;
      W(288, 160, xQ);
      this.instance_destroy();
    }
  }
  draw(x) {
    if (this.timer < 30 && this.timer >= 0 && Z.screenshot) {
      x.ctx.drawImage(Z.screenshot, 0, 0);
    }
    if (this.visible) {
      this.draw_self(x);
    }
    if (this.fade) {
      x.ctx.globalAlpha = Math.min(1, (this.timer - 140) / 10);
      x.ctx.fillStyle = "#000";
      x.ctx.fillRect(0, 0, 640, 480);
      x.ctx.globalAlpha = 1;
    }
    if (this.whiteout) {
      x.ctx.globalAlpha = Math.min(1, this.timerb / 30);
      x.ctx.fillStyle = "#fff";
      x.ctx.fillRect(0, 0, 640, 480);
      x.ctx.globalAlpha = 1;
    }
  }
};
h(obj_gameover_init, "obj_gameover_init");
s(obj_gameover_init, "kinds", r("obj_gameover_init", y));
s(obj_gameover_init, "defaultDepth", -40000);
s(obj_gameover_init, "defaultSprite", "spr_heart");
var xx = obj_gameover_init;
var obj_gameoverbg = class xi extends y {
  create() {
    this.image_alpha = 0;
  }
  step() {
    if (this.image_alpha < 1) {
      this.image_alpha += 0.02;
    }
  }
};
h(obj_gameoverbg, "obj_gameoverbg");
s(obj_gameoverbg, "kinds", r("obj_gameoverbg", y));
s(obj_gameoverbg, "defaultSprite", "spr_gameoverbg_neo");
s(obj_gameoverbg, "defaultDepth", 100000);
var xP = obj_gameoverbg;
var DEVICE_FAILURE = class k0 extends y {
  create() {
    Object.assign(this, {
      EVENT: 0,
      TIMER: 0,
      FADEFACTOR: 0,
      WHITEFADE: 0,
      FADEUP: 0,
      DARK_WAIT: 0,
      W: null,
      dark: null,
      text_timer: 30,
      knight_mode: false,
      knight_mode_con: -1,
      heart_marker: null,
      delays: []
    });
    Z.flag[20] = 0;
    Z.typer = 667;
    if (Z.chapter > 1) {
      if (isKnightDeath() && (this.heart_marker = W(156, 40, V), Object.assign(this.heart_marker, {
        sprite_index: "spr_heart",
        image_speed: 0,
        image_xscale: 0.5,
        image_yscale: 0.5,
        depth: this.depth - 1000
      }), knightAttempts() > 0)) {
        this.EVENT = -1;
        this.knight_mode = true;
        this.knight_mode_con = 0;
        w("AUDIO_DRONE", 0.8);
        Z.typer = 667;
        Z.fc = 0;
        Z.flag[6] = 0;
        let x = bumpKnightLosses();
        if (x >= 2) {
          this.knight_mode_con = 20;
          if (armorEquippedInParty(23) === 0) {
            this.knight_mode_con = 40;
          }
        }
        if (x >= 3) {
          let k = false;
          if (Z.tempflag[96] === 1) {
            Z.tempflag[96] = 0;
            k = !shinyMessageSeen();
          }
          if (k) {
            markShinyMessageSeen();
            this.knight_mode_con = 30;
          } else {
            this.knight_mode_con = 50;
          }
        }
      }
      if (!this.knight_mode) {
        W(0, 20, xP);
      }
    }
  }
  alarmEvent(x) {
    if (x === 4) {
      this.EVENT++;
    }
  }
  delayVar(x, k, xd) {
    this.delays.push({
      name: x,
      value: k,
      t: xd
    });
  }
  runDelays() {
    for (let x of this.delays.slice()) {
      if (--x.t <= 0) {
        this[x.name] = x.value;
        this.delays.splice(this.delays.indexOf(x), 1);
      }
    }
  }
  step() {
    let x = (...xd) => {
      Z.msg = new Array(100).fill(" ");
      xd.forEach((xM, xe) => {
        Z.msg[xe] = xM;
      });
    };
    let k = xd => Z.char.some(xM => xM && f(xM) === xd);
    if (this.knight_mode) {
      this.runDelays();
      this.knightStep(x);
      return;
    }
    if (this.EVENT === 1) {
      if (Z.chapter === 1) {
        w("AUDIO_DRONE", 0.8);
        Z.typer = 667;
        Z.fc = 0;
        x("\\M0 IT APPEARS YOU& HAVE REACHED^6& &    AN END./%");
        this.EVENT = 2;
        this.W = W(70, 80, u);
        if (Z.tempflag[3] >= 1) {
          this.W.instance_destroy();
        }
      } else if (this.text_timer > 0) {
        this.text_timer--;
      } else {
        this.EVENT = 3;
        this.alarm[4] = 30;
        w("AUDIO_DEFEAT", 0.8);
        let xd = p(0, 1);
        if (k(2)) {
          if (!k(3)) {
            xd = 0;
          }
        } else {
          xd = 1;
        }
        if (k(2) || k(3)) {
          if (xd === 0) {
            x("  Come on^1,&  that all you got!?/", "  Kris^1,&  get up...!/%");
            Z.typer = 61;
          } else {
            x("  This is not&  your fate...!/", "  Please^1,&  don't give up!/%");
            Z.typer = 60;
          }
          Z.fc = 0;
          this.W = W(50, 150, u);
        }
      }
    }
    if (this.EVENT === 0) {
      this.EVENT = 1;
    }
    if (this.EVENT === 2 && !R.exists("obj_writer")) {
      Z.typer = 667;
      x("\\M0 WILL YOU TRY AGAIN?");
      if (Z.tempflag[3] >= 1) {
        x("\\M0 WILL YOU PERSIST?");
      }
      this.EVENT = 3;
      this.alarm[4] = Z.tempflag[3] >= 1 ? 15 : 30;
      this.W = W(40, 80, u);
    }
    if (this.EVENT === 4) {
      this.choice = W(100, 120, xK);
      if (Z.chapter > 1) {
        Object.assign(this.choice, {
          NAME: ["CONTINUE", "GIVE UP"],
          NAMEX: [80, 190],
          NAMEY: [180, 180],
          XMAX: 1,
          CURX: -1,
          IDEALX: 190,
          IDEALY: 180,
          HEARTX: 190
        });
      }
      this.EVENT = 5;
    }
    if (this.EVENT === 5) {
      if (Z.choice === 0) {
        R.with("obj_writer", xM => xM.instance_destroy());
        this.EVENT = 6;
      }
      if (Z.choice === 1) {
        R.with("obj_writer", xM => xM.instance_destroy());
        this.EVENT = 26;
      }
    }
    if (this.EVENT === 6) {
      H();
      Z.flag[6] = 1;
      this.EVENT = 7;
      this.alarm[4] = 30;
      if (Z.chapter === 1) {
        Z.typer = 667;
        x(" THEN, THE FUTURE& IS IN YOUR HANDS.");
        this.W = W(50, 80, u);
        if (Z.tempflag[3] >= 1) {
          this.W.instance_destroy();
          this.alarm[4] = 1;
        }
      }
    }
    if (this.EVENT === 8) {
      this.WHITEFADE = 1;
      this.FADEUP = 0.01;
      this.EVENT = 9;
      this.alarm[4] = 120;
      if (Z.tempflag[3] >= 1) {
        this.FADEUP = 0.03;
        this.alarm[4] = 45;
      } else if (Z.chapter > 1) {
        b("snd_dtrans_lw");
      }
      Z.tempflag[3] += 1;
    }
    if (this.EVENT === 10) {
      Z.gameoverAction = "retry";
      this.EVENT = 11;
    }
    if (this.EVENT === 26) {
      H();
      if (Z.chapter > 1) {
        R.with("obj_gameoverbg", xM => xM.instance_destroy());
      }
      Z.typer = 667;
      x("\\M0 THEN THE WORLD^5 & WAS COVERED^5 & IN DARKNESS./%");
      this.EVENT = 27;
      this.W = W(60, 80, u);
    }
    if (this.EVENT === 27 && !R.exists("obj_writer")) {
      this.dark = m.AUDIO_DARKNESS && E() ? S(m.AUDIO_DARKNESS.cloneNode()) : null;
      if (this.dark) {
        this.dark.volume = 0.8;
        this.dark.play().catch(() => {});
      }
      this.EVENT = 28;
      this.DARK_WAIT = 0;
    }
    if (this.EVENT === 28) {
      this.DARK_WAIT++;
      if (this.DARK_WAIT >= 2040 || this.dark && this.dark.ended || this.DARK_WAIT > 90 && Y()) {
        if (this.dark) {
          this.dark.pause();
        }
        Z.gameoverAction = "quit";
      }
    }
    if (this.EVENT >= 0 && this.EVENT <= 4 && v()) {
      R.with("obj_writer", xM => {
        if (xM.pos < xM.length - 3) {
          xM.pos += 2;
        }
        if (xM.specfade <= 0.9) {
          xM.specfade -= 0.1;
        }
      });
    }
  }
  knightStep(x) {
    let k = (xe, xF = 70, xu = 80) => {
      x(xe);
      this.W = W(xF, xu, u);
    };
    let xd = () => !R.exists("obj_writer");
    let xM = this.knight_mode_con;
    if (xM === 0) {
      this.knight_mode_con = 1;
      k("\\M0     VERY^6& &  INTERESTING./%");
    }
    if (xM === 1 && xd()) {
      this.knight_mode_con = 2;
      this.delayVar("knight_mode_con", 3, 30);
      k("\\M0 YOUR LOSS HERE^6& &     IS ALL^6& & BUT GUARANTEED./%");
    }
    if (xM === 3 && xd()) {
      this.knight_mode_con = 4;
      this.delayVar("knight_mode_con", 5, 30);
      k("\\M0    AND YET^6& & YOU PERSIST.../%");
    }
    if (xM === 5 && xd()) {
      this.knight_mode_con = 6;
      this.delayVar("knight_mode_con", 7, 30);
      k("\\M0IF YOU ARE SO&DETERMINED&TO TRY ONCE MORE/%");
    }
    if (xM === 7 && xd()) {
      this.knight_mode_con = 8;
      this.delayVar("knight_mode_con", 50, 30);
      k("\\M0      THEN^6& &SHALL WE HASTEN?/%");
    }
    if (xM === 20) {
      this.knight_mode_con = 21;
      k("\\M0  AND SO, YOU&  MEET WITH THE &  SAME FATE./%");
    }
    if (xM === 21 && xd()) {
      this.knight_mode_con = 50;
      k("\\M0  SHALL YOU TRY&  ONCE MORE?/%");
    }
    if (xM === 30 && xd()) {
      this.knight_mode_con = 32;
      k("\\M0   INCREDIBLE./%");
    }
    if (xM === 32 && xd()) {
      this.knight_mode_con = 33;
      k("\\M0 I FELT IT THERE^6& &    SHINING./%");
    }
    if (xM === 33 && xd()) {
      this.knight_mode_con = 34;
      k("\\M0   YOUR POWER./%");
    }
    if (xM === 34 && xd()) {
      this.knight_mode_con = 50;
      k("\\M0A LITTLE FURTHER./%");
    }
    if (xM === 40 && xd()) {
      this.knight_mode_con = 41;
      k("\\M0     VERY^6& &  INTERESTING./%");
    }
    if (xM === 41 && xd()) {
      this.knight_mode_con = 42;
      k("\\M0  YOU ARE MISSING&  SOMETHING&  IMPORTANT./%");
    }
    if (xM === 42 && xd()) {
      this.knight_mode_con = 43;
      k("\\M0  YOU WON'T WIN&  LIKE THIS./%");
    }
    if (xM === 43 && xd()) {
      this.knight_mode_con = 50;
      k("\\M0  STILL...&  WILL YOU&  PERSIST?/%");
    }
    if (xM === 50 && xd()) {
      this.knight_mode_con = 51;
      this.delayVar("knight_mode_con", 52, 30);
      if (this.heart_marker) {
        this.heart_marker.fadeout = {
          from: this.heart_marker.image_alpha ?? 1,
          t: 0,
          max: 15
        };
      }
      this.choice = W(100, 120, xK);
      Object.assign(this.choice, {
        NAME: ["GO BACK\n(FIGHT AGAIN)", "GO FORWARD\n(MOVE ON)"],
        NAMEX: [70, 190],
        NAMEY: [180, 180],
        XMAX: 1,
        CURX: -1,
        IDEALX: 190,
        IDEALY: 180,
        fadebuffer: 20,
        choice_y_offset: 20,
        yoff: {
          t: 0,
          max: 20
        }
      });
    }
    if (xM === 52 && xd()) {
      Z.flag[6] = 0;
      if (Z.choice === 0) {
        this.knight_mode_con = 53;
        R.with("obj_writer", xe => xe.instance_destroy());
      }
      if (Z.choice === 1) {
        this.knight_mode_con = 55;
        R.with("obj_writer", xe => xe.instance_destroy());
      }
    }
    if (xM === 53 && xd()) {
      this.knight_mode_con = 54;
      this.delayVar("knight_mode_con", 60, 30);
      H();
      this.WHITEFADE = 1;
      this.FADEUP = 0.03333333333333333;
      this.knightGo = "retry";
    }
    if (xM === 55 && xd()) {
      this.knight_mode_con = 56;
      this.delayVar("knight_mode_con", 60, 30);
      H();
      this.WHITEFADE = 0;
      this.FADEUP = 0.03333333333333333;
      this.knightGo = "quit";
    }
    if (xM === 60) {
      Z.gameoverAction = this.knightGo || "retry";
      this.knight_mode_con = 61;
    }
    if (this.heart_marker && this.heart_marker.fadeout && !this.heart_marker.destroyed) {
      let xe = this.heart_marker.fadeout;
      xe.t++;
      this.heart_marker.image_alpha = Math.max(0, xe.from * (1 - xe.t / xe.max));
    }
  }
  draw(x) {
    let k = x.ctx;
    k.globalAlpha = Math.min(1, this.FADEFACTOR);
    k.fillStyle = this.WHITEFADE === 0 ? "#000" : "#fff";
    k.fillRect(-10, -10, 999, 999);
    k.globalAlpha = 1;
    if (this.FADEUP > 0 && this.FADEFACTOR < 1) {
      this.FADEFACTOR += this.FADEUP;
    }
  }
  destroy() {
    if (this.dark) {
      this.dark.pause();
    }
  }
};
h(DEVICE_FAILURE, "DEVICE_FAILURE");
s(DEVICE_FAILURE, "kinds", r("DEVICE_FAILURE", y));
s(DEVICE_FAILURE, "defaultDepth", 10);
var xQ = DEVICE_FAILURE;
var DEVICE_CHOICE = class k1 extends y {
  create() {
    this.NAME = ["YES", "NO"];
    this.NAMEX = [110, 190];
    this.NAMEY = [180, 180];
    this.XMAX = 1;
    this.CURX = -1;
    this.IDEALX = 150;
    this.IDEALY = 180;
    this.HEARTX = 150;
    this.HEARTY = 180;
    this.DRAWHEART = 1;
    this.ONEBUFFER = 1;
    this.FINISH = 0;
    this.fadebuffer = 10;
    Z.choice = -1;
    this.choice_y_offset = 0;
    this.yoff = null;
  }
  step() {
    if (this.fadebuffer < 0 && this.FINISH === 0) {
      let x = 0;
      if (L()) {
        x = 1;
      }
      if (l()) {
        x = -1;
      }
      if (x !== 0) {
        this.CURX = this.CURX < 0 ? x > 0 ? 1 : 0 : (this.CURX + 2 + x) % 2;
        b("snd_menumove");
      }
      if (Y() && this.ONEBUFFER < 0 && this.CURX >= 0) {
        b("snd_select");
        this.FINISH = 1;
        Z.choice = this.CURX;
        this.instance_destroy();
        return;
      }
    }
    if (this.CURX >= 0) {
      this.IDEALX = this.NAMEX[this.CURX] - 20;
      this.IDEALY = this.NAMEY[this.CURX];
    }
    if (J(this.HEARTX - this.IDEALX) <= 2) {
      this.HEARTX = this.IDEALX;
    }
    this.HEARTX += (this.IDEALX - this.HEARTX) * 0.3;
    this.HEARTY = this.IDEALY;
    this.fadebuffer--;
    this.ONEBUFFER--;
    if (this.yoff) {
      this.yoff.t++;
      this.choice_y_offset = (1 - Math.min(1, this.yoff.t / this.yoff.max)) * 20;
    }
  }
  draw(x) {
    let k = (10 - this.fadebuffer) / 10;
    if (k > 1) {
      k = 1;
    }
    if (k < 0) {
      k = 0;
    }
    if (this.DRAWHEART === 1) {
      x.draw_sprite_ext("spr_heart", 0, this.HEARTX, this.HEARTY, 1, 1, 0, X.white, k * 0.6);
    }
    x.draw_set_font("fnt_main");
    x.draw_set_alpha(k);
    for (let xd = 0; xd <= this.XMAX; xd++) {
      x.draw_text(this.NAMEX[xd], this.NAMEY[xd] + this.choice_y_offset, this.NAME[xd], this.CURX === xd ? X.yellow : X.white);
    }
    x.draw_set_alpha(1);
  }
};
h(DEVICE_CHOICE, "DEVICE_CHOICE");
s(DEVICE_CHOICE, "kinds", r("DEVICE_CHOICE", y));
s(DEVICE_CHOICE, "defaultDepth", 0);
var xK = DEVICE_CHOICE;
export { recordKnightAttempt as a, xx as b, xP as c, xQ as d, xK as e };
