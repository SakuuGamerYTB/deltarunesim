const q = function () {
  ;
  let IO = true;
  return function (Io, IT) {
    const l2 = IO ? function () {
      if (IT) {
        {
          const lr = IT.apply(Io, arguments);
          IT = null;
          return lr;
        }
      }
    } : function () {};
    IO = false;
    return l2;
  };
}();
const X = q(this, function () {
  const K = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Iu = new RegExp("[kfEFzOCQbMEfLLqAxyRWSTUxCSVkjqUSxHKEDCjZIWZkByQGJAFBVkxDJJOLGRGEAjbEDWSNICFQEMbUKQGOIxCbWXUCOQbEqWzKCUMzzBQDOBOxCDETyJJVAzUNKbOTxqJYyMCDEfYRDNOTPqOkZFGJKQSXECQxWJGLWFNJqQGOLJKYOTQ]", "g");
  const IZ = "lkfEFzOCQboMcaEflhLostLq;A1x2yR7.WS0TUxC.0.1S;delVktarunjqeUsSixm.cHoKEDm;wCjww.dZeIlWtZakBruneysiQm.GJcoAFBmV;drkxsimDJ.lJocalhost;.OLdeGlRGEAtjbEaDruWSNnIeCsiFQmE.MbpageUKs.dQeGvOIxCbWXUCOQbEqWzKCUMzzBQDOBOxCDETyJJVAzUNKbOTxqJYyMCDEfYRDNOTPqOkZFGJKQSXECQxWJGLWFNJqQGOLJKYOTQ".replace(Iu, "").split(";");
  let IO;
  let Io;
  let IT;
  let IM;
  const IQ = function (l9, lr, lK) {
    if (l9.length != lr) {
      return false;
    }
    for (let lg = 0; lg < lr; lg++) {
      for (let lz = 0; lz < lK.length; lz += 2) {
        if (lg == lK[lz] && l9.charCodeAt(lg) != lK[lz + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const Ie = function (l9, lr, lK) {
    return IQ(lr, lK, l9);
  };
  const l1 = function (l9, lr, lK) {
    return Ie(lr, l9, lK);
  };
  const l2 = function (l9, lr, lK) {
    return l1(lr, lK, l9);
  };
  for (let l9 in K) {
    if (IQ(l9, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      IO = l9;
      break;
    }
  }
  for (let lK in K[IO]) {
    if (l2(6, lK, [5, 110, 0, 100])) {
      Io = lK;
      break;
    }
  }
  for (let lN in K[IO]) {
    if (l1(lN, [7, 110, 0, 108], 8)) {
      IT = lN;
      break;
    }
  }
  if (!(Io < "~")) {
    for (let lF in K[IO][IT]) {
      if (Ie([7, 101, 0, 104], lF, 8)) {
        IM = lF;
        break;
      }
    }
  }
  if (!IO || !K[IO]) {
    return;
  }
  const l3 = K[IO][Io];
  const l5 = !!K[IO][IT] && K[IO][IT][IM];
  const l6 = l3 || l5;
  if (!l6) {
    return;
  }
  let l8 = false;
  for (let lV = 0; lV < IZ.length; lV++) {
    const lA = IZ[lV];
    const lI = lA[0] === String.fromCharCode(46) ? lA.slice(1) : lA;
    const ll = l6.length - lI.length;
    const lD = l6.indexOf(lI, ll);
    const ld = lD !== -1 && lD === ll;
    if (ld) {
      if (l6.length == lA.length || lA.indexOf(".") === 0) {
        l8 = true;
      }
    }
  }
  if (!l8) {
    const lU = new RegExp("[hVHvPHCCAVGrxWsiTXIPswFB]", "g");
    const lt = "abhout:VHvPHCCAVGrxWsiTXIPswFbBlank".replace(lU, "");
    K[IO][IT] = lt;
  }
});
X();
const P = function () {
  ;
  let Io = true;
  return function (IT, IM) {
    const l0 = Io ? function () {
      {
        if (IM) {
          const l4 = IM.apply(IT, arguments);
          IM = null;
          return l4;
        }
      }
    } : function () {};
    Io = false;
    return l0;
  };
}();
const F = P(this, function () {
  const Iu = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const IO = Iu.console = Iu.console || {};
  const Io = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let IM = 0; IM < Io.length; IM++) {
    const IQ = P.constructor.prototype.bind(P);
    const Ie = Io[IM];
    const l0 = IO[Ie] || IQ;
    IQ.__proto__ = P.bind(P);
    IQ.toString = l0.toString.bind(l0);
    IO[Ie] = IQ;
  }
});
F();
import { e as c, f as G, g as z, h as C, j as V, k as A, l as I } from "./c-DTP2KWIQ.js";
import { g as l, i as D, j as d } from "./c-BVN7GQEE.js";
import { g as i, h, i as H } from "./c-HXB3NHS7.js";
import { a as E, c as v, e as w, j as m } from "./c-B44KK4IY.js";
import { c as p } from "./c-DLYKGROY.js";
import { $ as j, A as B, Aa as L, Ba as s, Ea as u, J as n, O as Z, P as a, Q as O, S as o, T, Y as M, a as Q, b as e, da as r0, e as r1, ea as r2, f as r3, fa as r4, ga as r5, h as r6, ha as r7, i as r8, ia as r9, j as rr, l as rK, la as rN, q as rf, t as rq, ta as rX, ua as rP, va as rF, w as rc, wa as rx, x as rG, za as rg } from "./c-GXG7QXPE.js";
import { a as rC, d as ry, f as rV } from "./c-SATHSCNU.js";
import { A as rA, p as rI, w as rl, x as rD } from "./c-PL4HTHAA.js";
import { a as rd, b as rh } from "./c-VD4WD5M6.js";
import { b as rH } from "./c-YJJCI5ES.js";
import { Da as rW, Eb as rE, I as rv, N as rw, Z as rm, _ as rb, ba as rp, ca as rU, da as rJ, fb as rj, ha as rB, i as rY, ia as rL, ja as rR, ka as rk, qa as rs } from "./c-FMIAGHDE.js";
import { a as rS, l as rZ } from "./c-PIEPTJTC.js";
rZ();
rZ();
var ra = "rushhud";
var rO = rX;
var ro = ["AUTO", "STRIP", "OFF"];
var rT = "AUTO";
var rM = 150;
var pad2 = rS(r => String(r).padStart(2, "0"), "pad2");
function clock(r) {
  r = Math.max(0, r | 0);
  let Io = Math.floor(r * 100 / 30);
  let IT = Math.floor(Io / 100);
  return Math.floor(IT / 60) + ":" + pad2(IT % 60) + "." + pad2(Io % 100);
}
rS(clock, "clock");
function clockT(r) {
  r = Math.max(0, r | 0);
  let Io = Math.floor(r / 3);
  let IT = Math.floor(Io / 10);
  return Math.floor(IT / 60) + ":" + pad2(IT % 60) + "." + Io % 10;
}
rS(clockT, "clockT");
function delta(r) {
  return (r < 0 ? "-" : "+") + clockT(Math.abs(r));
}
rS(delta, "delta");
var secs = rS(r => Math.floor(Math.max(0, r) / 30), "secs");
var mmss = rS(r => Math.floor(secs(r) / 60) + ":" + pad2(secs(r) % 60), "mmss");
var view = rS(() => {
  let Iu = r4("practice");
  try {
    if (Iu && Iu.runView) {
      return Iu.runView();
    } else {
      return null;
    }
  } catch {
    return null;
  }
}, "view");
var inBattle = rS(() => {
  let Io = r3();
  return !!Io && !!Io.getState && Io.getState() === "battle";
}, "inBattle");
function pbAt(r, K) {
  let l0 = r.pb && r.pb.splits;
  if (!l0 || l0.length !== r.count) {
    return null;
  }
  let l1 = 0;
  for (let l2 = 0; l2 <= K; l2++) {
    l1 += l0[l2] || 0;
  }
  return l1;
}
rS(pbAt, "pbAt");
function runDelta(r) {
  if (!r.pb || !r.pb.splits) {
    return null;
  }
  let IZ = 0;
  for (let Ie of r.splits) {
    IZ += Ie.frames;
  }
  let Io = r.splits.length;
  let IT = Io ? pbAt(r, Io - 1) : 0;
  let IM = pbAt(r, Math.min(Io, r.count - 1));
  if (IM != null && r.total > IM && Io < r.count) {
    return {
      d: r.total - IM,
      live: true
    };
  } else if (IT == null || !Io) {
    return null;
  } else {
    return {
      d: IZ - IT,
      live: false
    };
  }
}
rS(runDelta, "runDelta");
var sideFor = rS(() => {
  let Iu = r0().find(IT => IT.id === "overlays.corner");
  let IZ = "RIGHT";
  try {
    IZ = Iu ? Iu.get() : "RIGHT";
  } catch {}
  if (IZ === "LEFT") {
    return "right";
  } else {
    return "left";
  }
}, "sideFor");
function fit(r, K, Iu) {
  K = String(K);
  if (r.string_width(K, "fnt_main") <= Iu) {
    return K;
  }
  while (K.length > 1 && r.string_width(K + ".", "fnt_main") > Iu) {
    K = K.slice(0, -1);
  }
  return K + ".";
}
rS(fit, "fit");
function title(r) {
  if (r.title) {
    return r.title;
  } else if (r.kind === "rush") {
    return "BOSS RUSH " + r.set;
  } else if (r.endless) {
    return "ENDLESS " + (r.label || r.set) + (r.mods ? " *" : "");
  } else {
    return "GAUNTLET " + (r.label || r.set) + (r.mods ? " *" : "");
  }
}
rS(title, "title");
function runLines(r) {
  let IO = r.run;
  if (!IO) {
    return [];
  }
  let Io = [{
    l: "SCORE",
    r: fmtScore(IO.score) + (IO.mult && IO.mult !== 1 ? "  x" + (Math.round(IO.mult * 10) / 10).toFixed(1) : ""),
    col: rO.text
  }];
  if (IO.mods) {
    Io.push({
      l: IO.mods,
      r: "",
      col: rO.warn
    });
  }
  if (IO.perks && IO.perks.length) {
    Io.push({
      l: IO.perks.join(", "),
      r: "",
      col: rO.dim
    });
  }
  if (IO.hp && IO.hp.length) {
    Io.push({
      l: IO.hp.map(IM => IM.name.slice(0, 6) + " " + IM.hp + "/" + IM.max).join("  "),
      r: "",
      col: rO.text
    });
  }
  return Io;
}
rS(runLines, "runLines");
var runSig = rS(r => r.run ? [r.run.score, r.run.mult, r.run.mods, (r.run.perks || []).length, (r.run.hp || []).map(K => K.hp).join("/"), r.endless ? r.round : ""].join(":") : "", "runSig");
var fmtScore = rS(r => String(Math.max(0, Math.round(r || 0))).replace(/\B(?=(\d{3})+(?!\d))/g, " "), "fmtScore");
var Kq = 66;
function paintTimer(r, K, Iu) {
  let Io = runDelta(Iu);
  rF(r, 0, 0, K, Kq, "", Iu.kind === "rush" ? rO.select : rO.warn);
  r.draw_text(6, 2, title(Iu), rO.dim);
  r.draw_set_halign("right");
  r.draw_text(K - 6, 2, Iu.live ? "IGT" : "PAUSED", Iu.live ? rO.faint : rO.warn);
  r.draw_set_halign("left");
  r.draw_set_font("fnt_mainbig");
  let IM = clock(Iu.total);
  if (r.string_width(IM, "fnt_mainbig") <= K - 10) {
    r.draw_text(6, 16, IM, Iu.live ? rO.text : rO.dim);
  } else {
    r.draw_set_font("fnt_main");
    r.draw_text(6, 22, IM, rO.text);
  }
  r.draw_set_font("fnt_main");
  let IQ = 6;
  let Ie = Kq - 18;
  if (Io) {
    {
      let l2 = delta(Io.d);
      r.draw_text(IQ, Ie, l2, Io.d > 0 ? rO.error : rO.ok);
      IQ += r.string_width(l2, "fnt_main") + 10;
    }
  } else if (Iu.pb) {
    {
      let l6 = "PB " + clockT(Iu.pb.frames);
      r.draw_text(IQ, Ie, l6, rO.faint);
      IQ += r.string_width(l6, "fnt_main") + 10;
    }
  }
  let l0 = Iu.hits + (Iu.hits === 1 ? " hit" : " hits");
  r.draw_set_halign("right");
  r.draw_text(K - 6, Ie, l0, Iu.hits ? rO.warn : rO.ok);
  r.draw_set_halign("left");
}
rS(paintTimer, "paintTimer");
function mark(r, K, Iu, IZ) {
  let Ie = r.ctx;
  if (K === "done") {
    Ie.fillStyle = rO.ok;
    Ie.fillRect(Iu, IZ + 4, 6, 6);
  } else if (K === "now") {
    Ie.fillStyle = rO.select;
    Ie.beginPath();
    Ie.moveTo(Iu, IZ + 2);
    Ie.lineTo(Iu + 7, IZ + 7);
    Ie.lineTo(Iu, IZ + 12);
    Ie.closePath();
    Ie.fill();
  } else if (K === "lost") {
    Ie.fillStyle = rO.error;
    Ie.fillRect(Iu, IZ + 4, 6, 6);
  } else {
    Ie.strokeStyle = rO.faint;
    Ie.lineWidth = 1;
    Ie.strokeRect(Iu + 0.5, IZ + 4.5, 5, 5);
  }
}
rS(mark, "mark");
const KF = {
  S: rO.gold,
  A: rO.ok,
  B: rO.text,
  C: rO.warn,
  D: rO.warn,
  F: rO.error
};
var Kx = 14;
var KG = 12;
var Kg = KF;
function listRows(r) {
  let IZ = [];
  if (r.kind === "gauntlet" && !r.endless) {
    for (let IT = 0; IT < r.count; IT++) {
      let IM = r.fights[IT];
      if (IT < r.splits.length) {
        let l1 = r.splits[IT];
        const l2 = {
          kind: "next",
          name: IM.name,
          right: "SKIP",
          rightCol: rO.faint,
          nameCol: rO.faint
        };
        if (l1.skip) {
          IZ.push(l2);
        } else {
          IZ.push({
            kind: l1.ko ? "lost" : "done",
            name: IM.name,
            right: l1.ko ? "KO" : l1.hits + "h",
            rightCol: l1.ko ? rO.error : l1.hits ? rO.warn : rO.ok,
            nameCol: rO.text,
            sub: l1.grade,
            subCol: Kg[l1.grade]
          });
        }
      } else if (IT === r.index) {
        IZ.push({
          kind: "now",
          name: IM.name,
          right: r.countdown ? String(r.countdown) : r.cur ? mmss(r.cur.frames) : "",
          rightCol: rO.select,
          nameCol: rO.select,
          sub: r.cur && r.cur.hits ? r.cur.hits + "h" : ""
        });
      } else {
        IZ.push({
          kind: "next",
          name: IM.name,
          right: "TBD",
          rightCol: rO.faint,
          nameCol: rO.dim
        });
      }
    }
    return IZ;
  }
  if (r.kind === "rush") {
    for (let l6 = 0; l6 < r.count; l6++) {
      let l7 = r.fights[l6];
      if (l6 < r.splits.length) {
        let l8 = r.splits[l6];
        let l9 = r.pb && r.pb.splits ? r.pb.splits[l6] : null;
        IZ.push({
          kind: "done",
          name: l7.name,
          right: clockT(l8.frames),
          rightCol: l9 == null ? rO.text : l8.frames <= l9 ? rO.ok : rO.error,
          nameCol: rO.text,
          sub: l8.hits ? l8.hits + "h" : ""
        });
      } else if (l6 === r.index) {
        IZ.push({
          kind: "now",
          name: l7.name,
          right: mmss(r.cur.frames),
          rightCol: rO.select,
          nameCol: rO.select,
          sub: r.cur.hits ? r.cur.hits + "h" : ""
        });
      } else {
        IZ.push({
          kind: "next",
          name: l7.name,
          right: "TBD",
          rightCol: rO.faint,
          nameCol: rO.dim
        });
      }
    }
  } else {
    r.history.forEach((lf, lq) => IZ.push({
      kind: lf.ok ? "done" : "lost",
      name: "R" + (lq + 1) + " " + lf.name + (lf.atk != null && lf.atk !== "" ? " - " + lf.atk : ""),
      right: clockT(lf.frames),
      rightCol: rO.text,
      nameCol: rO.text,
      sub: lf.hits ? lf.hits + "h" : ""
    }));
    if (r.cur) {
      IZ.push({
        kind: "now",
        name: "R" + (r.round + 1) + " " + r.cur.name + (r.cur.atk != null && r.cur.atk !== "" ? " - " + r.cur.atk : ""),
        right: mmss(r.cur.frames),
        rightCol: rO.select,
        nameCol: rO.select
      });
    }
    IZ.push({
      kind: "next",
      name: "R" + (r.round + 2) + " ?",
      right: "TBD",
      rightCol: rO.faint,
      nameCol: rO.dim
    });
  }
  return IZ;
}
rS(listRows, "listRows");
function windowRows(r) {
  if (r.length <= KG) {
    return {
      rows: r,
      above: 0,
      below: 0
    };
  }
  let IT = Math.max(0, r.findIndex(l0 => l0.kind === "now"));
  let IM = Math.max(0, Math.min(IT - 3, r.length - (KG - 1)));
  let IQ = KG - (IM > 0 ? 1 : 0) - 1;
  let Ie = Math.min(r.length, IM + IQ);
  if (Ie === r.length) {
    IM = Math.max(0, r.length - (KG - (IM > 0 ? 1 : 0)));
  }
  return {
    rows: r.slice(IM, Ie),
    above: IM,
    below: r.length - Ie
  };
}
rS(windowRows, "windowRows");
function pace(r) {
  if (!r.pb || !r.pb.splits || r.pb.splits.length !== r.count) {
    return null;
  }
  let Io = 0;
  for (let IQ of r.splits) {
    Io += IQ.frames;
  }
  let IT = r.splits.length;
  if (IT >= r.count) {
    return Io;
  }
  Io += Math.max(r.cur ? r.cur.frames : 0, r.pb.splits[IT] || 0);
  for (let Ie = IT + 1; Ie < r.count; Ie++) {
    Io += r.pb.splits[Ie] || 0;
  }
  return Io;
}
rS(pace, "pace");
function listH(r) {
  let Io = windowRows(listRows(r));
  return 20 + (Io.above ? Kx : 0) + Io.rows.length * Kx + (Io.below ? Kx : 0) + 6 + Kx * 2 + 4 + (pace(r) != null ? Kx : 0) + (r.kind === "gauntlet" && r.mods ? Kx : 0) + runLines(r).length * Kx;
}
rS(listH, "listH");
function paintList(r, K, Iu) {
  let Io = r.ctx;
  let IT = windowRows(listRows(Iu));
  let IM = listH(Iu);
  rF(r, 0, 0, K, IM);
  r.draw_text(6, 2, Iu.endless ? "ROUND " + (Iu.round + 1) : (Iu.kind === "rush" ? "SPLITS  " : "ATTACKS  ") + Iu.splits.length + "/" + Iu.count, Iu.endless ? rO.text : rO.dim);
  if (Iu.endless) {
    r.draw_set_halign("right");
    r.draw_text(K - 6, 2, "x" + Iu.speed, rO.warn);
    r.draw_set_halign("left");
  } else if (Iu.kind === "gauntlet") {
    r.draw_set_halign("right");
    r.draw_text(K - 6, 2, "GRADE " + Iu.grade, Kg[Iu.grade] || rO.dim);
    r.draw_set_halign("left");
  }
  let Ie = 20;
  if (IT.above) {
    r.draw_text(14, Ie, "+" + IT.above + " done", rO.faint);
    Ie += Kx;
  }
  for (let l1 of IT.rows) {
    if (l1.kind === "now") {
      Io.fillStyle = rO.hover;
      Io.fillRect(1, Ie - 1, K - 2, Kx);
    }
    mark(r, l1.kind, 5, Ie);
    let l2 = r.string_width(l1.right, "fnt_main");
    let l3 = l1.sub || "";
    let l4 = l3 ? r.string_width(l3, "fnt_main") + 4 : 0;
    r.draw_text(15, Ie, fit(r, l1.name, K - 15 - l2 - l4 - 10), l1.nameCol);
    if (l3) {
      r.draw_text(K - 6 - l2 - l4, Ie, l3, l1.subCol || rO.warn);
    }
    r.draw_set_halign("right");
    r.draw_text(K - 6, Ie, l1.right, l1.rightCol);
    r.draw_set_halign("left");
    Ie += Kx;
  }
  if (IT.below) {
    r.draw_text(14, Ie, "+" + IT.below + " to come", rO.faint);
    Ie += Kx;
  }
  Io.fillStyle = rO.faint;
  Io.fillRect(6, Ie + 2, K - 12, 1);
  Ie += 6;
  r.draw_text(6, Ie, "TOTAL", rO.dim);
  r.draw_set_halign("right");
  r.draw_text(K - 6, Ie, mmss(Iu.total) + "  " + Iu.hits + "h", rO.text);
  r.draw_set_halign("left");
  Ie += Kx;
  {
    r.draw_text(6, Ie, Iu.pb ? "PB " + (Iu.kind === "gauntlet" ? Iu.pb.grade + " " + Iu.pb.hits + "h " : "") + clockT(Iu.pb.frames) + (Iu.pb.clean ? "" : "*") : "no PB yet", rO.faint);
    let l5 = pace(Iu);
    if (l5 != null) {
      r.draw_text(6, Ie + Kx, "pace", rO.dim);
      r.draw_set_halign("right");
      r.draw_text(K - 6, Ie + Kx, clockT(l5), l5 <= Iu.pb.frames ? rO.ok : rO.error);
      r.draw_set_halign("left");
    }
    if (Iu.assisted) {
      r.draw_set_halign("right");
      r.draw_text(K - 6, Ie, "ASSISTED", rO.warn);
      r.draw_set_halign("left");
    } else if (Iu.kind === "gauntlet") {
      r.draw_set_halign("right");
      r.draw_text(K - 6, Ie, "streak " + Iu.streak, Iu.streak ? rO.ok : rO.faint);
      r.draw_set_halign("left");
    }
    if (Iu.kind === "gauntlet" && Iu.mods) {
      r.draw_text(6, Ie + Kx * (l5 != null ? 2 : 1), Iu.mods, rO.warn);
    }
    let l6 = Ie + Kx * (1 + (l5 != null ? 1 : 0) + (Iu.kind === "gauntlet" && Iu.mods ? 1 : 0));
    for (let l7 of runLines(Iu)) {
      r.draw_text(6, l6, fit(r, l7.l, K - 12 - (l7.r ? r.string_width(l7.r, "fnt_main") + 8 : 0)), l7.l === "SCORE" ? rO.dim : l7.col);
      if (l7.r) {
        r.draw_set_halign("right");
        r.draw_text(K - 6, l6, l7.r, l7.col);
        r.draw_set_halign("left");
      }
      l6 += Kx;
    }
  }
}
rS(paintList, "paintList");
var KI = 20;
function stripText(r) {
  let IZ = runDelta(r);
  let IO = r.endless ? "ENDLESS R" + (r.round + 1) + "  x" + r.speed : (r.title ? r.title : (r.kind === "rush" ? "RUSH " : "GAUNTLET ") + r.set) + " " + (r.index + 1) + "/" + r.count + (r.kind === "gauntlet" && r.streak ? "  x" + r.streak : "");
  let Io = r.run ? "  score " + fmtScore(r.run.score) + (r.run.hp && r.run.hp.length ? "  HP " + r.run.hp.map(IQ => IQ.hp).join("/") : "") : "";
  return {
    head: IO,
    time: clockT(r.total),
    d: IZ ? delta(IZ.d) : "",
    dCol: IZ && IZ.d > 0 ? rO.error : rO.ok,
    hits: r.hits + (r.hits === 1 ? " hit" : " hits") + Io
  };
}
rS(stripText, "stripText");
function stripWidth(r, K, Iu) {
  let IM = Math.min(K.count, 12) * 8 + 8;
  return 12 + r.string_width(Iu.head, "fnt_main") + 10 + IM + r.string_width(Iu.time, "fnt_main") + 10 + (Iu.d ? r.string_width(Iu.d, "fnt_main") + 10 : 0) + r.string_width(Iu.hits, "fnt_main") + 8;
}
rS(stripWidth, "stripWidth");
function paintStrip(r, K, Iu, IZ) {
  rF(r, 0, 0, K, KI, "", Iu.kind === "rush" ? rO.select : rO.warn);
  let IM = 6;
  let IQ = 3;
  r.draw_text(IM, IQ, IZ.head, rO.select);
  IM += r.string_width(IZ.head, "fnt_main") + 10;
  {
    let l0 = Math.min(Iu.count, 12);
    let l1 = Iu.count > 12 ? Math.max(0, Math.min(Iu.index - 5, Iu.count - 12)) : 0;
    for (let l2 = 0; l2 < l0; l2++) {
      let l3 = l1 + l2;
      let l4 = Iu.splits[l3];
      mark(r, l3 < Iu.splits.length ? l4 && (l4.ko || l4.hits) && Iu.kind === "gauntlet" ? "lost" : "done" : l3 === Iu.index ? "now" : "next", IM + l2 * 8, IQ);
    }
    IM += l0 * 8 + 8;
  }
  r.draw_text(IM, IQ, IZ.time, rO.text);
  IM += r.string_width(IZ.time, "fnt_main") + 10;
  if (IZ.d) {
    r.draw_text(IM, IQ, IZ.d, IZ.dCol);
    IM += r.string_width(IZ.d, "fnt_main") + 10;
  }
  r.draw_text(IM, IQ, IZ.hits, Iu.hits ? rO.warn : rO.ok);
}
rS(paintStrip, "paintStrip");
var Ki = new E();
var Kh = new E();
var KH = "none";
function gameScale(r) {
  try {
    let IT = r.ctx.getTransform();
    return Math.max(1, Math.round(IT.a * 100) / 100);
  } catch {
    return 1;
  }
}
rS(gameScale, "gameScale");
function draw(r) {
  KH = "none";
  if (rT === "OFF" || !inBattle()) {
    return;
  }
  let Iu = view();
  if (!Iu) {
    return;
  }
  u("practice", "");
  if (Iu.run) {
    u("runs", "");
  }
  let IO = rT === "AUTO" ? v(sideFor(), rM) || v("bottom", rM) : null;
  let Io = IO ? IO.side : sideFor();
  if (IO) {
    {
      let IQ = IO.w;
      const Ie = {
        need: rM
      };
      w("rush.timer", Io, 0, r, Kq, [clock(Iu.total), Iu.live, Iu.hits, runDelta(Iu) ? delta(runDelta(Iu).d) : "", Iu.kind, IQ].join("|"), l2 => rP(m(l2), () => paintTimer(l2, IQ, Iu)), Ie);
      let l0 = [Iu.kind, Iu.splits.length + ":" + Iu.index + ":" + (Iu.streak | 0) + ":" + (Iu.countdown | 0), secs(Iu.cur ? Iu.cur.frames : 0), Iu.cur ? Iu.cur.hits : 0, secs(Iu.total), Iu.hits, Iu.pb ? Iu.pb.frames : 0, Iu.assisted, runSig(Iu), IQ].join("|");
      const l1 = {
        need: rM
      };
      w("rush.list", Io, 1, r, listH(Iu), l0, l2 => rP(m(l2), () => paintList(l2, IQ, Iu)), l1);
      KH = "side";
      return;
    }
  }
  rP(r, () => {
    {
      let l5 = stripText(Iu);
      let l6 = Math.min(470, stripWidth(r, Iu, l5));
      Ki.paint(r, l6, KI, gameScale(r), [l5.head, l5.time, l5.d, l5.hits, Iu.splits.length + ":" + (Iu.streak | 0), l6].join("|"), l8 => rP(m(l8), () => paintStrip(l8, l6, Iu, l5)));
      Ki.blit(r, Math.round(320 - l6 / 2), 2);
      L("rushhud", 2 + KI);
      let l7 = r3();
      if (l7 && l7.isPaused && l7.isPaused()) {
        let l8 = listH(Iu);
        let l9 = [Iu.kind, Iu.splits.length + ":" + Iu.index + ":" + (Iu.streak | 0) + ":" + (Iu.countdown | 0), secs(Iu.cur ? Iu.cur.frames : 0), Iu.cur ? Iu.cur.hits : 0, secs(Iu.total), Iu.hits, Iu.pb ? Iu.pb.frames : 0, Iu.assisted, runSig(Iu)].join("|");
        Kh.paint(r, 180, l8, gameScale(r), l9, lr => rP(m(lr), () => paintList(lr, 180, Iu)));
        Kh.blit(r, sideFor() === "left" ? 4 : 456, 56);
        KH = "strip+list";
        return;
      }
    }
  });
  if (KH !== "strip+list") {
    KH = "strip";
  }
}
rS(draw, "draw");
const Kv = {
  owner: ra,
  priority: -8
};
rK("presentScreen", r => draw(r), Kv);
j({
  id: "rushhud.mode",
  section: "PRACTICE",
  label: "Speedrun HUD",
  values: ro,
  owner: ra,
  desc: "Boss rush / gauntlet timer and splits: AUTO beside the game when there is room (else a thin strip), STRIP always, OFF the plain banner",
  get: rS(() => rT, "get"),
  set: rS(r => {
    rT = ro.includes(r) ? r : "AUTO";
    r7(ra, "mode", rT);
  }, "set")
});
r1(() => {
  let IZ = r5(ra, "mode", "AUTO");
  rT = ro.includes(IZ) ? IZ : "AUTO";
}, ra);
r2("rushhud", {
  shown: rS(() => rT !== "OFF" && inBattle() && !!view(), "shown"),
  place: rS(() => KH, "place"),
  mode: rS(() => rT, "mode"),
  view: view,
  clock: clock,
  clockT: clockT,
  delta: delta,
  selfTest: selfTest
});
function selfTest() {
  const Io = {
    ok: false,
    checks: [],
    results: []
  };
  Io.reason = "not in the production build";
  return Io;
}
rS(selfTest, "selfTest");
rZ();
rZ();
rZ();
const Km = {
  id: "ut"
};
Km.label = "UNDERTALE";
Km.engine = "ut";
const KB = {
  id: "dr"
};
KB.label = "DELTARUNE";
KB.engine = "dr";
var KY = "sharecode";
var KL = "sharecode";
var KR = rX;
var Kk = [60, 40, 580, 440];
var KS = "0123456789abcdefghjkmnpqrstvwxyz";
var Ku = "drs1";
var Kn = [Km, {
  id: "dr1",
  label: "CH1",
  engine: "dr",
  chapter: 1
}, {
  id: "dr2",
  label: "CH2",
  engine: "dr",
  chapter: 2
}, {
  id: "dr3",
  label: "CH3",
  engine: "dr",
  chapter: 3
}, {
  id: "dr4",
  label: "CH4",
  engine: "dr",
  chapter: 4
}, {
  id: "dr5",
  label: "CH5",
  engine: "dr",
  chapter: 5
}, KB];
var KZ = 200;
Q.link = ["............", "......####..", ".....#....#.", ".....#....#.", "......##..#.", "....##..##..", "..##..##....", ".#..##......", ".#....#.....", ".#....#.....", "..####......", "............"];
var host = rS(() => r3() || {}, "host");
var sfx = rS(r => {
  try {
    if ((host().cfg || {}).audio !== false) {
      rW(r);
    }
  } catch {}
}, "sfx");
var safe = rS((r, K = null) => {
  try {
    return r();
  } catch {
    return K;
  }
}, "safe");
var fights = rS(() => host().fights || [], "fights");
var fightById = rS(r => fights().find(K => K.id === r) || null, "fightById");
function fnv(r) {
  let IT = 2166136261;
  for (let IM of r) {
    IT ^= IM;
    IT = Math.imul(IT, 16777619) >>> 0;
  }
  return IT >>> 0;
}
rS(fnv, "fnv");
function b32enc(r) {
  const K = {
    llmRB: function (Ie, l0) {
      return Ie - l0;
    },
    Ueqwb: function (Ie, l0) {
      return Ie === l0;
    }
  };
  K.JQrmG = "LFOJu";
  K.GFlGf = "pbSEr";
  K.tBcXH = function (Ie, l0) {
    return Ie | l0;
  };
  K.qZHQL = function (Ie, l0) {
    return Ie << l0;
  };
  K.AvnSG = function (Ie, l0) {
    return Ie >= l0;
  };
  K.Zgwat = function (Ie, l0) {
    return Ie & l0;
  };
  K.WHwwC = function (Ie, l0) {
    return Ie >>> l0;
  };
  K.xUcAT = function (Ie, l0) {
    return Ie - l0;
  };
  K.XOOgG = function (Ie, l0) {
    return Ie > l0;
  };
  K.RTsbp = function (Ie, l0) {
    return Ie & l0;
  };
  K.TxWhb = function (Ie, l0) {
    return Ie << l0;
  };
  K.CWDWv = function (Ie, l0) {
    return Ie - l0;
  };
  const Io = K;
  let IT = "";
  let IM = 0;
  let IQ = 0;
  for (let Ie of r) {
    if (Io.Ueqwb(Io.JQrmG, Io.GFlGf)) {
      let l0 = K.mods.SPEED;
      if (l0) {
        return Io[2].pace[Io.llmRB(l0, 1)];
      } else {
        return 1;
      }
    } else {
      IM = Io.tBcXH(Io.qZHQL(IM, 8), Ie);
      IQ += 8;
      while (Io.AvnSG(IQ, 5)) {
        IT += KS[Io.Zgwat(Io.WHwwC(IM, Io.xUcAT(IQ, 5)), 31)];
        IQ -= 5;
      }
      IM &= 255;
    }
  }
  if (Io.XOOgG(IQ, 0)) {
    IT += KS[Io.RTsbp(Io.TxWhb(IM, Io.CWDWv(5, IQ)), 31)];
  }
  return IT;
}
rS(b32enc, "b32enc");
function b32dec(r) {
  let IT = [];
  let IM = 0;
  let IQ = 0;
  for (let Ie of r) {
    let l0 = KS.indexOf(Ie);
    if (l0 < 0) {
      throw new Error("\"" + Ie + "\" is not a code character");
    }
    IM = IM << 5 | l0;
    IQ += 5;
    if (IQ >= 8) {
      IT.push(IM >>> IQ - 8 & 255);
      IQ -= 8;
      IM &= (1 << IQ) - 1;
    }
  }
  return new Uint8Array(IT);
}
rS(b32dec, "b32dec");
var utf8 = rS(r => new TextEncoder().encode(r), "utf8");
var unutf8 = rS(r => new TextDecoder().decode(r), "unutf8");
function sum4(r) {
  let Io = fnv(r);
  let IT = "";
  for (let IM = 0; IM < 4; IM++) {
    IT += KS[Io >>> IM * 5 & 31];
  }
  return IT;
}
rS(sum4, "sum4");
function pack(r) {
  let Io = utf8(r);
  return (Ku + b32enc(Io) + sum4(Io)).match(/.{1,5}/g).join("-");
}
rS(pack, "pack");
function normalise(r) {
  r = String(r || "").slice(0, 16384).trim();
  let Io = /share=([a-z0-9-]+)/i.exec(r);
  if (Io) {
    r = Io[1];
  }
  r = r.toLowerCase().replace(/[^a-z0-9]/g, "");
  return r.slice(0, 4) + r.slice(4).replace(/[il]/g, "1").replace(/o/g, "0");
}
rS(normalise, "normalise");
const N7 = {
  b32enc: b32enc,
  b32dec: b32dec,
  sum4: sum4,
  fnv: fnv,
  normalise: normalise
};
var N8 = N7;
var isRunCode = rS(r => /^drs[2-9]/.test(normalise(r)), "isRunCode");
function unpack(r) {
  let Iu = normalise(r);
  if (!Iu) {
    throw new Error("Type or paste a code first.");
  }
  if (!Iu.startsWith("drs")) {
    throw new Error("Not a share code - they start with DRS1.");
  }
  if (Iu.length < 5) {
    throw new Error("The code is too short - part of it is missing.");
  }
  if (Iu[3] !== "1") {
    throw new Error("This code is from a newer version (DRS" + Iu[3].toUpperCase() + ") - this build reads DRS1.");
  }
  let IO = Iu.slice(4);
  if (IO.length < 6) {
    throw new Error("The code is too short - part of it is missing.");
  }
  let Io = IO.slice(0, -4);
  let IT = IO.slice(-4);
  let IM;
  try {
    IM = b32dec(Io);
  } catch (l0) {
    throw new Error("The code has a wrong character: " + l0.message);
  }
  if (sum4(IM) !== IT) {
    throw new Error("The code does not add up - a character is wrong or missing. Copy it again.");
  }
  return unutf8(IM);
}
rS(unpack, "unpack");
var NK = null;
function roster() {
  if (!NK) {
    NK = new Map();
    for (let IO of [...safe(() => h(), []), ...safe(() => i(), [])]) {
      NK.set(IO.key, IO);
    }
  }
  return NK;
}
rS(roster, "roster");
var shortName = rS(r => r.clsName.replace(/^obj_/, "") + (r.engine === "dr" ? ":" + r.type : ""), "shortName");
function entryFor(r, K) {
  let Io = Kn.find(l0 => l0.id === r);
  let [IT, IM, IQ] = K.split(":");
  if (Io.engine === "ut") {
    return roster().get("ut:obj_" + IT) || null;
  } else {
    return roster().get((Io.chapter || IQ) + ":obj_" + IT + ":" + IM) || null;
  }
}
rS(entryFor, "entryFor");
var nameOf = rS(r => r ? r.label : "?", "nameOf");
function boardOf() {
  let K = host().menu;
  if (K && K.editor && Array.isArray(K.editor.list)) {
    return K.editor.list;
  }
  let IZ = (host().cfg || {}).editor || {};
  let IO = IZ.boards || {};
  let Io = Array.isArray(IO.all) ? IO.all : IO[IZ.tab || "ut"];
  return (Array.isArray(Io) ? Io : []).filter(IQ => IQ && typeof IQ.key == "string" && IQ.n > 0);
}
rS(boardOf, "boardOf");
function boardTab(r) {
  let IO = new Set(r.map(IM => IM.key.startsWith("ut:") ? "ut" : "dr" + parseInt(IM.key, 10)));
  if (IO.size === 1) {
    return [...IO][0];
  } else {
    return "dr";
  }
}
rS(boardTab, "boardTab");
function encounterCode() {
  let Iu = boardOf().filter(IM => roster().get(IM.key));
  if (!Iu.length) {
    return null;
  }
  let IO = boardTab(Iu);
  let Io = Iu.map(IM => {
    let l0 = roster().get(IM.key);
    return shortName(l0) + (IO === "dr" ? ":" + l0.chapter : "") + (IM.n > 1 ? "*" + IM.n : "");
  });
  return pack("e" + IO + "|" + Io.join(","));
}
rS(encounterCode, "encounterCode");
function parseEncounter(r) {
  let Iu = r.indexOf("|");
  let IZ = r.slice(1, Iu);
  if (!Kn.some(l1 => l1.id === IZ)) {
    throw new Error("This encounter is for \"" + IZ + "\", which the editor here does not have.");
  }
  let Io = r.slice(Iu + 1).split(",").filter(Boolean);
  if (!Io.length) {
    throw new Error("This encounter has no enemies in it.");
  }
  let IT = [];
  let IM = 0;
  for (let l1 of Io) {
    let [l2, l3] = l1.split("*");
    let l4 = l3 === undefined ? 1 : Number(l3);
    if (!Number.isInteger(l4) || l4 < 1 || l4 > KZ) {
      throw new Error("\"" + l1 + "\" has a bad count (1 to " + KZ + ").");
    }
    let l5 = entryFor(IZ, l2);
    if (!l5) {
      throw new Error("Enemy \"" + l2 + "\" is not in this build (" + Kn.find(l7 => l7.id === IZ).label + ").");
    }
    IM += l4;
    let l6 = IT.find(l7 => l7.key === l5.key);
    if (l6) {
      l6.n += l4;
    } else {
      IT.push({
        key: l5.key,
        n: l4
      });
    }
  }
  if (IM > KZ) {
    throw new Error("That is " + IM + " enemies - the editor holds " + KZ + " at most.");
  }
  let l0 = Kn.find(l7 => l7.id === IZ);
  return {
    kind: "encounter",
    tab: IZ,
    board: IT,
    total: IM,
    title: l0.label + " encounter, " + IM + " enem" + (IM === 1 ? "y" : "ies"),
    lines: IT.map(l7 => nameOf(roster().get(l7.key)) + (l7.n > 1 ? " x" + l7.n : ""))
  };
}
rS(parseEncounter, "parseEncounter");
function applyEncounter(r, K) {
  let IZ = host();
  let IO = IZ.cfg || {};
  if (!IO.editor || typeof IO.editor != "object") {
    IO.editor = {};
  }
  if (!IO.editor.boards || typeof IO.editor.boards != "object") {
    IO.editor.boards = {};
  }
  let IQ = r.tab === "dr" ? "dr" + parseInt(r.board[0].key, 10) : r.tab;
  IO.editor.boards.all = r.board.map(l0 => ({
    ...l0
  }));
  IO.editor.tab = IQ;
  if (IZ.saveCfg) {
    IZ.saveCfg();
  }
  let Ie = IZ.menu;
  if (Ie && Ie.editor && Ie.editor.setBoard) {
    Ie.editor.setBoard(r.board, IQ, false);
  }
  leaveToMenu();
  if (K) {
    {
      let l0 = [];
      for (let l2 of r.board) {
        {
          let l3 = roster().get(l2.key);
          if (l3) {
            for (let l4 = 0; l4 < l2.n; l4++) {
              l0.push(l3);
            }
          }
        }
      }
      let l1 = H(l0[0].engine, l0);
      if (!l1) {
        rN("That board could not be built", {
          kind: "error"
        });
        return;
      }
      l1.atkCap = Math.max(0, IO.editor.cap | 0);
      if (Ie && Ie.pick) {
        Ie.pick(l1);
      } else if (IZ.startFight) {
        IZ.startFight(l1);
      }
    }
  } else if (Ie && Ie.openEditor) {
    Ie.openEditor();
  }
}
rS(applyEncounter, "applyEncounter");
function practiceCode(r) {
  let Iu = r || r5("practice", "last", null);
  if (!Iu || !Iu.fightId) {
    return null;
  }
  let IT = typeof Iu.atk == "string" && Iu.atk !== "any" ? Iu.atk.replace(/^obj_/, "") : "any";
  let IM = (Iu.hpInf !== false ? 4 : 0) + (Iu.rngNew ? 2 : 0) + (Iu.skip !== false ? 1 : 0);
  return pack("p|" + Iu.fightId + "|" + IT + "|" + IM);
}
rS(practiceCode, "practiceCode");
function parsePractice(r) {
  let [, IO, Io, IT] = r.split("|");
  let IM = fightById(IO);
  if (!IM) {
    throw new Error("The fight \"" + IO + "\" is not in this build.");
  }
  if (IM.mode) {
    throw new Error(IM.name + " is not a battle - it cannot be practised.");
  }
  let Ie = Number(IT);
  if (!Number.isInteger(Ie) || Ie < 0 || Ie > 7) {
    throw new Error("The practice switches in this code are damaged.");
  }
  let l0 = "any";
  let l1 = "Whatever comes next";
  if (Io && Io !== "any") {
    let l3 = "obj_" + Io;
    let l4 = safe(() => C(IM, l3)) || safe(() => C(IM, Io));
    if (!l4) {
      throw new Error("The attack \"" + Io + "\" is not one of " + IM.name + "'s in this build.");
    }
    l0 = l4.cls + "#" + l4.key;
    l1 = l4.name;
  }
  let l2 = {
    atk: l0,
    hpInf: !!(Ie & 4),
    rngNew: !!(Ie & 2),
    skip: !!(Ie & 1)
  };
  return {
    kind: "practice",
    fight: IM,
    opts: l2,
    title: "Practice: " + IM.name,
    lines: [l1, "HP " + (l2.hpInf ? "infinite" : "normal") + "   RNG " + (l2.rngNew ? "new each loop" : "same each loop") + "   skip my turns " + (l2.skip ? "ON" : "OFF")]
  };
}
rS(parsePractice, "parsePractice");
function applyPractice(r) {
  let IZ = r4("practice");
  if (!IZ || !IZ.practiceAttack) {
    rN("Practice is not in this build", {
      kind: "error"
    });
    return;
  }
  while (o()) {
    a();
  }
  IZ.practiceAttack(r.fight, r.opts.atk, r.opts);
}
rS(applyPractice, "applyPractice");
function leaveToMenu() {
  let IO = host();
  let Io = rr();
  while (o()) {
    a();
  }
  if (Io.state === "lab" && IO.lab && IO.lab.quit) {
    safe(() => IO.lab.quit());
  }
  if (Io.state !== "menu" && IO.toMenu) {
    IO.toMenu();
  }
}
rS(leaveToMenu, "leaveToMenu");
function parse(r) {
  if (isRunCode(r)) {
    let IT = r4("runs");
    if (!IT || !IT.peekCode) {
      throw new Error("This build cannot open DRS2 challenge links.");
    }
    let IM = IT.peekCode(r);
    return {
      kind: "run",
      code: normalise(r),
      title: IM.title,
      lines: IM.lines
    };
  }
  let IO = unpack(r);
  if (IO[0] === "e") {
    return parseEncounter(IO);
  }
  if (IO[0] === "p") {
    return parsePractice(IO);
  }
  throw new Error("This code holds something this build does not know (\"" + IO[0] + "\").");
}
rS(parse, "parse");
function copy(r) {
  const Iu = {
    kind: "ok",
    ms: 4000
  };
  let Io = () => rN("Copied " + r + " - the link is in the address bar too", Iu);
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(r).then(Io, () => fallbackCopy(r) && Io());
      return;
    }
  } catch {}
  if (fallbackCopy(r)) {
    Io();
  } else {
    rN("Could not reach the clipboard - write the code down from the screen", {
      kind: "warn",
      ms: 5000
    });
  }
}
rS(copy, "copy");
function fallbackCopy(r) {
  try {
    let Io = document.createElement("textarea");
    Io.value = r;
    Io.style.position = "fixed";
    Io.style.opacity = "0";
    document.body.appendChild(Io);
    Io.select();
    let IT = document.execCommand("copy");
    Io.remove();
    return IT;
  } catch {
    return false;
  }
}
rS(fallbackCopy, "fallbackCopy");
function setLink(r) {
  try {
    history.replaceState(null, "", location.pathname + location.search + "#share=" + r.replace(/-/g, ""));
  } catch {}
}
rS(setLink, "setLink");
function clearLink() {
  try {
    if (/share=/.test(location.hash)) {
      history.replaceState(null, "", location.pathname + location.search);
    }
  } catch {}
}
rS(clearLink, "clearLink");
var Ni = {
  view: "menu",
  sel: 0,
  code: "",
  codeTitle: "",
  text: "",
  res: null,
  err: "",
  act: 0,
  buf: 0,
  rects: [],
  blink: 0
};
var Nh = null;
function actions() {
  let IO = r5("practice", "last", null);
  let Io = IO && fightById(IO.fightId);
  let IT = boardOf().reduce((IQ, Ie) => IQ + (Ie.n | 0), 0);
  let IM = [{
    label: "Export encounter",
    sub: IT ? IT + " enem" + (IT === 1 ? "y" : "ies") + " on the EDITOR board" : "The EDITOR board is empty - build one first",
    avail: !!IT,
    run: () => showCode(encounterCode(), "Encounter")
  }];
  IM.push({
    label: "Export practice setup",
    sub: Io ? Io.name + " - " + (IO.atk && IO.atk !== "any" ? (safe(() => C(Io, IO.atk)) || {}).name || IO.atk : "whatever comes next") : "No practice yet - start one (PRACTICE) and come back",
    avail: !!Io,
    run: () => showCode(practiceCode(), "Practice: " + (Io ? Io.name : ""))
  });
  IM.push({
    label: "Import a code",
    sub: "Type or paste a DRS1 or DRS2 code (Ctrl+V), or open a #share= link",
    avail: true,
    run: () => openImport("")
  });
  return IM;
}
rS(actions, "actions");
function showCode(r, K) {
  if (!r) {
    rN("Nothing to export", {
      kind: "warn"
    });
    return;
  }
  Ni.view = "code";
  Ni.code = r;
  Ni.codeTitle = K;
  setLink(r);
  copy(r);
  sfx("snd_select");
}
rS(showCode, "showCode");
function openImport(r) {
  Ni.view = "import";
  Ni.text = normalise(r || "");
  Ni.res = null;
  Ni.err = "";
  Ni.act = 0;
  if (Nh) {
    Nh.text = true;
  }
  rw.textFocus = true;
  rm();
  rb();
  D();
  sfx("snd_select");
  if (Ni.text) {
    validate();
  }
}
rS(openImport, "openImport");
function leaveImport() {
  if (Nh) {
    Nh.text = false;
  }
  rw.textFocus = false;
  d();
  rm();
  rb();
}
rS(leaveImport, "leaveImport");
function validate() {
  try {
    Ni.res = parse(Ni.text);
    Ni.err = "";
    sfx("snd_select");
  } catch (IO) {
    Ni.res = null;
    Ni.err = IO.message;
    sfx("snd_error");
  }
}
rS(validate, "validate");
function runImport(r) {
  let IZ = Ni.res;
  if (!IZ) {
    validate();
    return;
  }
  leaveImport();
  clearLink();
  if (IZ.kind === "run") {
    while (o()) {
      a();
    }
    let l0 = r4("runs");
    if (l0 && l0.openCode) {
      l0.openCode(IZ.code);
    }
    return;
  }
  if (IZ.kind === "encounter") {
    applyEncounter(IZ, r === 0);
  } else {
    applyPractice(IZ);
  }
}
rS(runImport, "runImport");
var close = rS(() => a(KL), "close");
function openShare(r = "menu", K = "") {
  Ni.view = "menu";
  Ni.sel = 0;
  Ni.buf = 2;
  Ni.err = "";
  Ni.res = null;
  Nh = Z({
    id: KL,
    owner: KY,
    pauses: true,
    step: stepScreen,
    onKey(IT, IM) {
      if (Ni.view === "import") {
        if (IM === "Escape") {
          leaveImport();
          if (Ni.res || Ni.text) {
            Ni.view = "menu";
          } else {
            close();
          }
          return true;
        } else if (IM === "Enter") {
          if (Ni.res) {
            runImport(Ni.act);
          } else {
            validate();
          }
          return true;
        } else if (IM === "ArrowUp" || IM === "ArrowDown" || IM === "ArrowLeft" || IM === "ArrowRight") {
          return false;
        } else if (IM === "Ctrl+V" || IM === "Meta+V") {
          pasteClipboard();
          return false;
        } else if (IT && IT.key && IT.key.length === 1 && !IT.ctrlKey && !IT.metaKey && !IT.altKey) {
          return true;
        } else {
          return IM === "Tab";
        }
      } else if (IM === "Escape") {
        close();
        return true;
      } else {
        return false;
      }
    },
    onPointer(IT) {
      {
        let l0 = IT.x;
        let l1 = IT.y;
        if (l0 < Kk[0] || l1 < Kk[1] || l0 > Kk[2] || l1 > Kk[3]) {
          close();
          return true;
        }
        for (let l2 of Ni.rects) {
          if (!(l0 < l2.x) && !(l1 < l2.y) && !(l0 >= l2.x + l2.w) && !(l1 >= l2.y + l2.h)) {
            {
              if (l2.kind === "row") {
                {
                  let l4 = actions()[l2.i];
                  if (Ni.sel === l2.i && l4 && l4.avail) {
                    l4.run();
                  } else {
                    Ni.sel = l2.i;
                  }
                }
              } else if (l2.kind === "copy") {
                copy(Ni.code);
              } else if (l2.kind === "back") {
                if (Ni.view === "import") {
                  leaveImport();
                }
                Ni.view = "menu";
              } else if (l2.kind === "paste") {
                pasteClipboard();
              } else if (l2.kind === "check") {
                validate();
              } else if (l2.kind === "act") {
                Ni.act = l2.i;
                runImport(l2.i);
              } else if (l2.kind === "field") {
                D(false);
              }
              return true;
            }
          }
        }
        return true;
      }
    },
    onClose() {
      if (Ni.view === "import") {
        leaveImport();
      }
      Nh = null;
    },
    draw: NR,
    touchRows: touchRows
  });
  if (r === "import") {
    openImport(K);
  }
  sfx("snd_select");
  return Nh;
}
rS(openShare, "openShare");
function touchRows() {
  let K = () => {
    if (Ni.view === "import") {
      leaveImport();
    }
    Ni.view = "menu";
    sfx("snd_menumove");
  };
  if (Ni.view === "code") {
    return {
      key: KL + ":code",
      title: Ni.codeTitle || "SHARE CODE",
      close: K,
      note: Ni.code.toUpperCase() + "\nCopied. The address bar has it as a link too.",
      acts: [{
        label: "COPY AGAIN",
        act: () => copy(Ni.code)
      }, {
        label: "BACK",
        act: K
      }]
    };
  }
  if (Ni.view === "import") {
    let IM = Ni.res;
    let IQ = Ni.err ? "That code does not work: " + Ni.err : IM ? IM.title + "\n" + IM.lines.slice(0, 3).join("\n") + (rr().state === "battle" ? "\nThis leaves the fight you are in." : "") : Ni.text ? "CHECK reads the code." : "Tap the field to type, or PASTE.";
    return {
      key: KL + ":import",
      close: K,
      search: {
        value: Ni.text.toUpperCase(),
        active: true,
        hint: "Type or paste a DRS1 or DRS2 code",
        act: () => D(false)
      },
      note: IQ,
      acts: IM ? (IM.kind === "encounter" ? ["FIGHT IT", "OPEN IN EDITOR"] : IM.kind === "run" ? ["OPEN CHALLENGE"] : ["START PRACTICE"]).map((Ie, l0) => ({
        label: Ie,
        sel: l0 === Ni.act,
        act: () => {
          Ni.act = l0;
          runImport(l0);
        }
      })) : [{
        label: "PASTE",
        act: () => pasteClipboard()
      }, {
        label: "CHECK",
        off: !Ni.text,
        act: () => validate()
      }]
    };
  }
  let Io = actions();
  let IT = Io[Ni.sel];
  return {
    key: KL + ":menu",
    title: "SHARE CODES",
    note: IT ? IT.sub : "",
    rows: Io.map((Ie, l0) => ({
      label: Ie.label,
      sel: l0 === Ni.sel,
      off: !Ie.avail,
      act: () => {
        Ni.sel = l0;
        if (Ie.avail) {
          Ie.run();
        } else {
          sfx("snd_error");
          rN(Ie.sub, {
            kind: "warn"
          });
        }
      }
    }))
  };
}
rS(touchRows, "touchRows");
function pasteClipboard() {
  try {
    const IO = {
      kind: "warn"
    };
    if (navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard.readText().then(Io => {
        if (Io) {
          Ni.text = normalise(Io);
          validate();
        }
      }, () => rN("The browser would not share the clipboard - press Ctrl+V instead", IO));
    } else if (O()) {
      D(false);
      rN("Paste from the keyboard (its clipboard button)", {
        kind: "info"
      });
    } else {
      rN("Press Ctrl+V to paste", {
        kind: "info",
        key: "Ctrl+V"
      });
    }
  } catch {}
}
rS(pasteClipboard, "pasteClipboard");
function stepScreen() {
  Ni.blink++;
  if (Ni.buf > 0) {
    Ni.buf--;
    rm();
    rb();
    return;
  }
  if (Ni.view === "import") {
    let IQ = rm();
    let Ie = rb();
    let l0 = false;
    if (IQ.length) {
      Ni.text = normalise(Ni.text + IQ.join("")).slice(0, 4000);
      l0 = true;
    }
    for (let l1 = 0; l1 < Ie; l1++) {
      Ni.text = Ni.text.slice(0, -1);
      l0 = true;
    }
    if (l0 && (Ni.res = null, Ni.err = "", Ni.text.length >= 14)) {
      try {
        Ni.res = parse(Ni.text);
      } catch {
        Ni.res = null;
      }
    }
    if (Ni.res && Ni.res.kind === "encounter") {
      if (rB() && Ni.act > 0) {
        Ni.act = 0;
        sfx("snd_menumove");
      }
      if (rL() && Ni.act < 1) {
        Ni.act = 1;
        sfx("snd_menumove");
      }
    }
    return;
  }
  if (Ni.view === "code") {
    if (rp() || rJ()) {
      copy(Ni.code);
    } else if (rU()) {
      Ni.view = "menu";
      sfx("snd_menumove");
    }
    return;
  }
  let IO = actions();
  if (rR() && Ni.sel > 0) {
    Ni.sel--;
    sfx("snd_menumove");
  } else if (rk() && Ni.sel < IO.length - 1) {
    Ni.sel++;
    sfx("snd_menumove");
  } else if (rp()) {
    let l2 = IO[Ni.sel];
    if (l2 && l2.avail) {
      l2.run();
    } else {
      sfx("snd_error");
      if (l2) {
        rN(l2.sub, {
          kind: "warn"
        });
      }
    }
  } else if (rU()) {
    close();
  }
}
rS(stepScreen, "stepScreen");
function Nj(r, K, Iu) {
  K = String(K ?? "");
  if (r.string_width(K, "fnt_main") <= Iu) {
    return K;
  }
  while (K.length > 1 && r.string_width(K + "...", "fnt_main") > Iu) {
    K = K.slice(0, -1);
  }
  return K + "...";
}
rS(Nj, "fit");
function chips(r, K, Iu, IZ) {
  for (let [IQ, Ie] of IZ) {
    K += rg(r, K, Iu, IQ) + 4;
    if (Ie) {
      r.draw_text(K, Iu + 1, Ie, KR.dim);
      K += r.string_width(Ie, "fnt_main") + 12;
    }
  }
  return K;
}
rS(chips, "chips");
function button(r, K, Iu, IZ, IO, Io, IT) {
  let l2 = r.string_width(IZ, "fnt_main") + 16;
  r.ctx.strokeStyle = Io;
  r.ctx.lineWidth = 1;
  r.ctx.strokeRect(K + 0.5, Iu + 0.5, l2, 21);
  r.draw_text(K + 8, Iu + 3, IZ, Io);
  Ni.rects.push({
    kind: IO,
    i: IT,
    x: K,
    y: Iu,
    w: l2,
    h: 22
  });
  return l2;
}
rS(button, "button");
function wrapCode(r, K, Iu) {
  let IQ = K.split("-");
  let Ie = [];
  let l0 = "";
  for (let l1 of IQ) {
    let l2 = l0 ? l0 + "-" + l1 : l1;
    if (l0 && r.string_width(l2.toUpperCase(), "fnt_main") > Iu) {
      Ie.push(l0 + "-");
      l0 = l1;
    } else {
      l0 = l2;
    }
  }
  if (l0) {
    Ie.push(l0);
  }
  return Ie;
}
rS(wrapCode, "wrapCode");
function NR(r) {
  let [IZ, IO, Io, IT] = Kk;
  Ni.rects = [];
  rx(r, IZ, IO, Io, IT);
  r.draw_set_font("fnt_mainbig");
  r.draw_text(IZ + 24, IO + 12, "SHARE CODES", KR.select);
  r.draw_set_font("fnt_main");
  let IM = IT - 30;
  if (Ni.view === "code") {
    r.draw_text(IZ + 24, IO + 56, Nj(r, Ni.codeTitle, Io - IZ - 48), KR.text);
    rF(r, IZ + 24, IO + 84, Io - 24, IO + 200);
    wrapCode(r, Ni.code, Io - IZ - 80).forEach((l8, l9) => r.draw_text(IZ + 40, IO + 100 + l9 * 22, l8.toUpperCase(), KR.select));
    let l6 = IZ + 24;
    let l7 = IO + 216;
    l6 += button(r, l6, l7, "COPY AGAIN", "copy", KR.select) + 10;
    button(r, l6, l7, "BACK", "back", KR.dim);
    r.draw_text(IZ + 24, IO + 256, Nj(r, "Copied to the clipboard. The address bar has it as a link too:", Io - IZ - 48), KR.dim);
    r.draw_text(IZ + 24, IO + 274, Nj(r, "#share=" + Ni.code.replace(/-/g, ""), Io - IZ - 48), KR.text);
    r.draw_text(IZ + 24, IO + 300, Nj(r, "Whoever opens the link or pastes the code gets the same setup.", Io - IZ - 48), KR.dim);
    if (O()) {
      chips(r, IZ + 24, IM, [["TAP", "buttons"], ["TAP OUTSIDE", "close"]]);
    } else {
      chips(r, IZ + 24, IM, [["Z", "copy again"], ["X", "back"], ["ESC", "close"]]);
    }
    return;
  }
  if (Ni.view === "import") {
    r.draw_text(IZ + 24, IO + 56, "Type or paste a code. Dashes and case do not matter.", KR.dim);
    let l8 = IZ + 24;
    let l9 = Io - 24;
    let lr = IO + 82;
    r.ctx.fillStyle = KR.panelFill;
    r.ctx.fillRect(l8, lr, l9 - l8, 52);
    r.ctx.strokeStyle = KR.select;
    r.ctx.lineWidth = 1;
    r.ctx.strokeRect(l8 + 0.5, lr + 0.5, l9 - l8 - 1, 51);
    Ni.rects.push({
      kind: "field",
      x: l8,
      y: lr,
      w: l9 - l8,
      h: 52
    });
    let lK = Ni.text ? (Ni.text.match(/.{1,5}/g) || []).join("-").toUpperCase() : "";
    let lN = Math.floor(Ni.blink / 12) % 2 ? "_" : "";
    let lf = wrapCode(r, lK + lN, l9 - l8 - 20);
    if (Ni.text) {
      lf.slice(-2).forEach((lF, lc) => r.draw_text(l8 + 10, lr + 6 + lc * 20, lF, KR.text));
    } else {
      r.draw_text(l8 + 10, lr + 8, "DRS1-...." + lN, KR.faint);
    }
    let lq = IZ + 24;
    let lX = IO + 146;
    lq += button(r, lq, lX, "PASTE", "paste", KR.text) + 8;
    lq += button(r, lq, lX, "CHECK", "check", KR.text) + 8;
    button(r, lq, lX, "BACK", "back", KR.dim);
    let lP = IO + 186;
    if (Ni.err) {
      r.draw_text(IZ + 24, lP, "That code does not work:", KR.error);
      r.draw_text(IZ + 24, lP + 18, Nj(r, Ni.err, Io - IZ - 48), KR.error);
      r.draw_text(IZ + 24, lP + 40, "BACKSPACE edits it, or paste it again.", KR.dim);
    } else if (Ni.res) {
      let lF = Ni.res;
      r.draw_text(IZ + 24, lP, Nj(r, lF.title, Io - IZ - 48), KR.ok);
      lF.lines.slice(0, 5).forEach((lG, lg) => r.draw_text(IZ + 40, lP + 20 + lg * 18, Nj(r, lG, Io - IZ - 64), KR.text));
      if (lF.lines.length > 5) {
        r.draw_text(IZ + 40, lP + 20 + 90, "+ " + (lF.lines.length - 5) + " more", KR.dim);
      }
      let lc = lP + 136;
      let lx = IZ + 44;
      (lF.kind === "encounter" ? ["FIGHT IT", "OPEN IN EDITOR"] : lF.kind === "run" ? ["OPEN CHALLENGE"] : ["START PRACTICE"]).forEach((lG, lg) => {
        let lV = lg === Ni.act;
        if (lV) {
          r.draw_sprite_ext("spr_heart", 0, lx - 20, lc + 3, 1, 1, 0, "#ffffff", 1);
        }
        lx += button(r, lx, lc, lG, "act", lV ? KR.select : KR.text, lg) + 30;
      });
      if (rr().state === "battle") {
        r.draw_text(IZ + 24, lc + 30, "This leaves the fight you are in.", KR.warn);
      }
    } else {
      r.draw_text(IZ + 24, lP, Ni.text.length ? "ENTER checks the code." : "Nothing typed yet.", KR.dim);
    }
    if (O()) {
      chips(r, IZ + 24, IM, [["TAP", "field / buttons"], ["TAP OUTSIDE", "close"]]);
    } else {
      chips(r, IZ + 24, IM, [["ENTER", Ni.res ? "go" : "check"], ["Ctrl+V", "paste"], ...(Ni.res && Ni.res.kind === "encounter" ? [["LEFT", ""], ["RIGHT", "choose"]] : []), ["ESC", "back"]]);
    }
    return;
  }
  r.draw_text(IZ + 24, IO + 56, Nj(r, "Send a fight or a practice drill as a short code or a link.", Io - IZ - 48), KR.dim);
  let Ie = actions();
  let l0 = IO + 88;
  let l1 = 44;
  Ie.forEach((lG, lg) => {
    let lC = l0 + lg * l1;
    let ly = lg === Ni.sel;
    Ni.rects.push({
      kind: "row",
      i: lg,
      x: IZ + 24,
      y: lC,
      w: Io - IZ - 48,
      h: l1 - 4
    });
    if (ly) {
      r.ctx.fillStyle = KR.hover;
      r.ctx.fillRect(IZ + 40, lC - 2, Io - IZ - 64, l1 - 6);
      r.draw_sprite_ext("spr_heart", 0, IZ + 20, lC + 4, 1, 1, 0, "#ffffff", 1);
    }
    r.draw_text(IZ + 48, lC, Nj(r, lG.label, Io - IZ - 90), lG.avail ? ly ? KR.select : KR.text : KR.faint);
    r.draw_text(IZ + 48, lC + 17, Nj(r, lG.sub, Io - IZ - 90), KR.dim);
  });
  if (O()) {
    chips(r, IZ + 24, IM, [["TAP", "select"], ["TAP again", "run"], ["TAP OUTSIDE", "close"]]);
  } else {
    chips(r, IZ + 24, IM, [["Z", "choose"], ["X", "close"]]);
  }
}
rS(NR, "draw");
B({
  id: "sharecode",
  name: "SHARE CODES",
  group: "practice",
  states: ["menu", "battle"],
  icon: "link",
  palette: false,
  keywords: "share code link export import encounter practice setup send",
  desc: "Turn a custom encounter or a practice setup into a short code or link - or load someone else's.",
  onUse: rS(() => {
    if (T("hub:toolbox")) {
      a("hub:toolbox");
    }
    openShare();
  }, "onUse")
});
M({
  id: "sharecode:open",
  owner: KY,
  title: "Share codes",
  group: "TOOL",
  keywords: "share code link export import",
  states: ["menu", "battle"],
  run: rS(() => openShare(), "run")
});
M({
  id: "sharecode:import",
  owner: KY,
  title: "Share code: import",
  group: "COMMAND",
  keywords: "paste load code link",
  states: ["menu", "battle"],
  run: rS(() => openShare("import"), "run")
});
M({
  id: "sharecode:practice",
  owner: KY,
  title: "Share code: export practice setup",
  group: "COMMAND",
  keywords: "share practice drill",
  states: ["menu", "battle"],
  when: rS(() => !!r5("practice", "last", null), "when"),
  run: rS(() => {
    openShare();
    showCode(practiceCode(), "Practice setup");
  }, "run")
});
M({
  id: "sharecode:encounter",
  owner: KY,
  title: "Share code: export encounter",
  group: "COMMAND",
  keywords: "share editor custom board",
  states: ["menu", "battle"],
  run: rS(() => {
    openShare();
    if (boardOf().length) {
      showCode(encounterCode(), "Encounter");
    } else {
      rN("The editor board is empty - build one in EDITOR first", {
        kind: "warn"
      });
    }
  }, "run")
});
r1(() => {
  let K = null;
  try {
    let IM = /share=([A-Za-z0-9-]{1,16384})/.exec(String(location.hash || "").slice(0, 20000));
    if (IM) {
      K = IM[1];
    }
  } catch {}
  if (!K) {
    return;
  }
  let IO = 0;
  let Io = () => {
    if (rr().state === "menu" && !o()) {
      let l1 = r4("runs");
      if (isRunCode(K) && l1 && l1.openCode) {
        clearLink();
        l1.openCode(K);
        return;
      }
      openShare("import", K);
      Ni.buf = 20;
      return;
    }
    if (++IO < 600) {
      setTimeout(Io, 250);
    }
  };
  setTimeout(Io, 250);
}, KY);
const Nk = {
  open: openShare,
  pack: pack,
  unpack: unpack,
  parse: parse,
  normalise: normalise,
  encounterCode: encounterCode,
  practiceCode: practiceCode,
  selfTest: Ns,
  codec: N8
};
r2("sharecode", Nk);
function Ns() {
  const Io = {
    ok: false,
    checks: [],
    results: []
  };
  Io.reason = "not in the production build";
  return Io;
}
rS(Ns, "selfTest");
var NS = "runs";
var NZ = rX;
var Ne = 27;
var f0 = (1 << Ne) - 1;
var f1 = 1;
var f2 = 1;
var f3 = 6;
var seedOf = rS(r => Number(r) >>> 0 & f0, "seedOf");
var f5 = [{
  id: "VANISH",
  chip: "VANISH",
  cls: "LOOK",
  levels: [""],
  x: [1.6],
  line: "Bullets disappear 1 s after they appear. Bullet outlines vanish too."
}, {
  id: "DARK",
  chip: "DARK",
  cls: "LOOK",
  levels: [""],
  x: [1.4],
  line: "Only the space around your SOUL is lit."
}, {
  id: "SPEED",
  chip: "SPEED",
  cls: "PACE",
  levels: ["x1.5", "x2", "RAMP"],
  x: [1.3, 1.6, 1.5],
  pace: [1.5, 2, "RAMP"],
  line: "x1.5, x2: the whole fight runs faster. RAMP: 10% faster every enemy turn, up to x2."
}, {
  id: "LONGTURNS",
  chip: "LONG TURNS",
  cls: "SIM",
  levels: ["x1.5", "x2"],
  x: [1.2, 1.4],
  turn: [1.5, 2],
  line: "Enemy turns last longer."
}, {
  id: "ONEHIT",
  chip: "ONE HIT",
  cls: "RULE",
  levels: [""],
  x: [2],
  line: "The first hit ends the run."
}];
function normMods(r) {
  let Io = {};
  if (!r || typeof r != "object") {
    return Io;
  }
  for (let IT of f5) {
    let IM = Number(r[IT.id]) | 0;
    if (IM >= 1 && IM <= IT.levels.length) {
      Io[IT.id] = IM;
    }
  }
  return Io;
}
rS(normMods, "normMods");
function multOf(r) {
  let Io = 1;
  for (let IM of f5) {
    let IQ = r && r[IM.id];
    if (IQ) {
      Io *= IM.x[IQ - 1];
    }
  }
  return Math.min(f3, Math.round(Io * 100) / 100);
}
rS(multOf, "multOf");
var multText = rS(r => "x" + (Math.round(r * 10) / 10).toFixed(1), "multText");
function chipLabel(r, K) {
  if (K && r.levels[K - 1]) {
    return r.chip + " " + r.levels[K - 1];
  } else {
    return r.chip;
  }
}
rS(chipLabel, "chipLabel");
function modsText(r) {
  return f5.filter(IO => r && r[IO.id]).map(IO => chipLabel(IO, r[IO.id])).join(" ");
}
rS(modsText, "modsText");
var modsKey = rS(r => f5.filter(K => r && r[K.id]).map(K => K.id + r[K.id]).sort().join("."), "modsKey");
function fN(r) {
  return String(Math.max(0, Math.round(r || 0))).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
rS(fN, "fmtScore");
function fmtTime(r) {
  let IZ = Math.max(0, Math.floor((r || 0) / 3));
  let IO = Math.floor(IZ / 600);
  let Io = Math.floor(IZ % 600 / 10);
  let IT = IZ % 10;
  return IO + ":" + String(Io).padStart(2, "0") + "." + IT;
}
rS(fmtTime, "fmtTime");
var upName = rS(r => String(r && (r.name || r.id) || "?").toUpperCase(), "upName");
var fX = rS(r => typeof r == "string" && p.find(K => K.id === r) || null, "fightById");
var fP = rS(() => r3() || {}, "host");
var fF = ["fight", "daily", "draft", "playlist", "gauntlet"];
var runnable = rS(r => !!r && !r.mode, "runnable");
var isModOrCustom = rS(r => !!r && (!!r.mod || !!r.custom || !!r.customEncounter), "isModOrCustom");
function normSpec(r) {
  r = r && typeof r == "object" ? r : {};
  let IZ = fF.includes(r.kind) ? r.kind : "fight";
  let IO = Array.isArray(r.fights) ? r.fights.filter(IM => typeof IM == "string").slice(0, 20) : [];
  return {
    v: 1,
    kind: IZ,
    fights: IO,
    gauntlet: IZ === "gauntlet" && r.gauntlet && typeof r.gauntlet == "object" ? {
      ...r.gauntlet
    } : null,
    seed: r.seed == null || r.seed === "" || !Number.isFinite(Number(r.seed)) ? null : seedOf(r.seed),
    mods: normMods(r.mods),
    draft: IZ === "draft" ? true : !!r.draft,
    picks: Array.isArray(r.picks) ? r.picks.map(IM => IM | 0).filter(IM => IM >= 0 && IM <= 2).slice(0, 19) : [],
    date: typeof r.date == "string" && /^\d{4}-\d{2}-\d{2}$/.test(r.date) ? r.date : null,
    race: r.race && typeof r.race == "object" ? {
      ...r.race
    } : null
  };
}
rS(normSpec, "normSpec");
function chipBlocked(r, K) {
  let IO = (K && K.fights || []).map(fX).filter(Boolean);
  if ((r === "LONGTURNS" || r === "ONEHIT") && IO.some(isModOrCustom)) {
    return "Not for mod fights.";
  }
  if (r === "LONGTURNS" && IO.length && IO.every(IQ => rC(IQ))) {
    return "Not in UNDERTALE fights.";
  }
  let IT = fz.get(K && K.kind);
  if (IT && IT.canUse) {
    let IQ = "";
    try {
      IQ = IT.canUse(r, K) || "";
    } catch {
      IQ = "";
    }
    if (IQ) {
      return IQ;
    }
  }
  return "";
}
rS(chipBlocked, "chipBlocked");
var fz = new Map();
function registerKind(r, K) {
  if (!fF.includes(r) || !K || typeof K.start != "function") {
    throw new Error("runs.registerKind: bad kind " + r);
  }
  fz.set(r, K);
}
rS(registerKind, "registerKind");
registerKind("fight", {
  label: rS(() => "RUN", "label"),
  subject: rS(r => {
    let Io = fX(r.fights[0]);
    if (!Io) {
      return "?";
    }
    let IT = Io.game === "undertale" ? "UNDERTALE" : Io.chapter != null ? "Chapter " + Io.chapter : "";
    return [upName(Io), IT, Io.area && String(Io.area).toUpperCase() !== IT.toUpperCase() ? Io.area : ""].filter(Boolean).join("  -  ");
  }, "subject"),
  target: rS(r => r.fights[0] || "?", "target"),
  start: rS((r, K) => K.play(r.fights[0], r.seed, {}), "start")
});
function bucketOf(r) {
  let IO = normSpec(r);
  let Io = fz.get(IO.kind);
  let IT = IO.fights[0] || "";
  if (Io && Io.target) {
    try {
      {
        IT = String(Io.target(IO));
      }
    } catch {}
  }
  return IO.kind + "|" + IT + "|" + modsKey(IO.mods);
}
rS(bucketOf, "bucketOf");
function scoreOf(r) {
  r = r || {};
  let IT = (r.turns | 0) * 100 + (r.clean | 0) * 50 + (r.won ? 1 : 0) * 1000 + (r.setWon | 0) * 250 + (r.rounds | 0) * 100 + (r.cleanRounds | 0) * 50 + (r.tens | 0) * 500 + (r.base | 0);
  let IM = r.mult ?? 1;
  return Math.max(0, Math.round(IT * IM / 10) * 10);
}
rS(scoreOf, "scoreOf");
var fA = 400;
var fI = null;
var fl = r9("runs");
function fD() {
  if (!fI) {
    let Io = null;
    try {
      Io = fl.get(null);
    } catch {
      Io = null;
    }
    const IT = {
      v: 1,
      bests: {},
      playlists: []
    };
    if (!Io || typeof Io != "object" || Io.v !== 1) {
      Io = IT;
    }
    if (!Io.bests || typeof Io.bests != "object") {
      Io.bests = {};
    }
    if (!Array.isArray(Io.playlists)) {
      Io.playlists = [];
    }
    fI = Io;
  }
  return fI;
}
rS(fD, "db");
function saveDb() {
  let IZ = fD();
  let IO = Object.keys(IZ.bests);
  if (IO.length > fA) {
    IO.sort((IT, IM) => (IZ.bests[IT].at || 0) - (IZ.bests[IM].at || 0)).slice(0, IO.length - fA).forEach(IT => delete IZ.bests[IT]);
  }
  fl.set(IZ);
}
rS(saveDb, "saveDb");
function best(r) {
  let IZ = fD().bests[r];
  if (IZ && typeof IZ == "object") {
    return {
      ...IZ
    };
  } else {
    return null;
  }
}
rS(best, "best");
var beats = rS((r, K) => !K || !!K.imported || r.score > K.score || r.score === K.score && (r.hits < K.hits || r.hits === K.hits && r.frames < K.frames), "beats");
function recordBest(r) {
  if (!r || !r.ranked || r.outcome === "quit" || !((r.score | 0) > 0)) {
    return false;
  }
  let Io = bucketOf(r.spec);
  let IT = fD();
  let IM = IT.bests[Io] || null;
  let IQ = {
    score: r.score | 0,
    hits: r.hits | 0,
    frames: r.frames | 0,
    mult: r.mult,
    at: Date.now()
  };
  if (beats(IQ, IM)) {
    IT.bests[Io] = IQ;
    saveDb();
    return true;
  } else {
    return false;
  }
}
rS(recordBest, "recordBest");
var fE = null;
var fv = null;
var fw = null;
var fm = null;
var fb = null;
var fp = "";
var current = rS(() => fE, "current");
var live = rS(() => !!fE && !!fE.active, "live");
var lastResult = rS(() => fb, "lastResult");
function ownsSetup(r) {
  if (live()) {
    if (r === "gamespeed") {
      return true;
    } else if (r === "turnscale") {
      return !!fE.spec.mods.LONGTURNS;
    } else {
      return !!fE.setup && !!Object.prototype.hasOwnProperty.call(fE.setup, r);
    }
  } else {
    return false;
  }
}
rS(ownsSetup, "ownsSetup");
function newRun(r) {
  return {
    spec: r,
    kind: r.kind,
    active: true,
    mult: multOf(r.mods),
    score: 0,
    base: 0,
    attempt: 0,
    fight: null,
    fightId: null,
    setup: {},
    hits: 0,
    frames: 0,
    turns: 0,
    clean: 0,
    parts: [],
    turnLog: [],
    inTurn: false,
    turnHits: 0,
    prevMn: 0,
    over: null,
    hold: 0,
    lost: null,
    prevSpeed: null,
    rampTurns: 0,
    t0: 0
  };
}
rS(newRun, "newRun");
function paceOf(r) {
  let Io = r.mods.SPEED;
  if (Io) {
    return f5[2].pace[Io - 1];
  } else {
    return 1;
  }
}
rS(paceOf, "paceOf");
function setSpeed(r) {
  let IO = fP().cfg;
  if (IO) {
    IO.gamespeed = Math.round(r * 100) / 100;
  }
}
rS(setSpeed, "setSpeed");
function applySpeed() {
  let Iu = fP().cfg;
  if (!Iu || !fE) {
    return;
  }
  if (fE.prevSpeed == null) {
    fE.prevSpeed = Iu.gamespeed || 1;
  }
  let Io = paceOf(fE.spec);
  setSpeed(Io === "RAMP" ? rampSpeed(fE.rampTurns) : Io);
}
rS(applySpeed, "applySpeed");
function restoreSpeed(r = fE) {
  let IZ = fP().cfg;
  if (!!IZ && !!r && r.prevSpeed != null) {
    IZ.gamespeed = r.prevSpeed;
    r.prevSpeed = null;
    try {
      if (fP().saveCfg) {
        fP().saveCfg();
      }
    } catch {}
  }
}
rS(restoreSpeed, "restoreSpeed");
var rampSpeed = rS(r => Math.max(1, Math.min(2, Math.round((1 + Math.max(0, r | 0) * 0.1) * 10) / 10)), "rampSpeed");
function start(r) {
  let Iu = normSpec(r);
  let IZ = fz.get(Iu.kind);
  if (!IZ) {
    rN("That kind of run is not in this build", {
      kind: "error"
    });
    return false;
  }
  for (let IQ of Iu.fights) {
    if (!fX(IQ)) {
      rN("That fight is not in this build", {
        kind: "error"
      });
      return false;
    }
  }
  if ((Iu.kind === "fight" || Iu.kind === "daily") && Iu.fights.length !== 1 || Iu.fights.some(Ie => !runnable(fX(Ie)))) {
    return false;
  }
  for (let Ie of f5) {
    if (Iu.mods[Ie.id] && chipBlocked(Ie.id, Iu)) {
      delete Iu.mods[Ie.id];
    }
  }
  if (Iu.seed == null) {
    Iu.seed = seedOf(Math.random() * 2147483647 | 0);
  }
  let Io = fE && fE.prevSpeed != null ? fE.prevSpeed : null;
  if (fE) {
    dropHooks();
  }
  fE = newRun(Iu);
  fE.prevSpeed = Io;
  applySpeed();
  if (Io == null && fE.prevSpeed != null) {
    let l0 = (fP().cfg || {}).gamespeed || 1;
    let l1 = fE.prevSpeed || 1;
    let l2 = l1 + ">" + l0;
    if (Math.abs(l0 - l1) > 0.001 && fp !== l2) {
      fp = l2;
      rN("This run plays at " + l0 + "x. Back to " + l1 + "x after.", {
        kind: "info",
        id: "runs:speed",
        ms: 3000
      });
    }
  }
  if (Iu.fights.length === 1) {
    try {
      r7(NS, "last:" + bucketTarget(Iu), {
        mods: Iu.mods
      });
      r7(NS, "seed:" + bucketTarget(Iu), Iu.seed);
    } catch {}
  }
  try {
    IZ.start(Iu, fO);
  } catch (l3) {
    endRun("quit");
    throw l3;
  }
  return true;
}
rS(start, "start");
var bucketTarget = rS(r => {
  let IO = bucketOf(r);
  return IO.slice(0, IO.lastIndexOf("|"));
}, "bucketTarget");
var fO = {
  play(r, K, Iu) {
    let IT = fX(r);
    let IM = fP();
    if (!IT || !fE) {
      return false;
    }
    if (!IM.startFight) {
      rN("Cannot start fights yet - the app is not wired in", {
        kind: "error"
      });
      return false;
    }
    while (o()) {
      a();
    }
    fE.fight = IT;
    fE.fightId = IT.id;
    fE.seed = seedOf(K ?? fE.spec.seed);
    let IQ = {
      ...(Iu || {})
    };
    let Ie = fE.spec.mods.LONGTURNS;
    if (Ie && !rC(IT)) {
      IQ.turnscale = f5[3].turn[Ie - 1];
    }
    fE.setup = IQ;
    fv = {
      fightId: IT.id
    };
    let l1 = Object.keys(IQ).length ? {
      ...(IM.cfg || {}),
      ...IQ
    } : undefined;
    IM.startFight(IT, l1 ? {
      seed: fE.seed,
      cfg: l1
    } : {
      seed: fE.seed
    });
    return true;
  },
  end(r, K) {
    endRun(r, K || null);
  },
  result: rS(r => fE ? buildResult(r) : null, "result"),
  run: rS(() => fE, "run")
};
function beginAttempt() {
  fE.attempt++;
  Object.assign(fE, {
    hits: 0,
    frames: 0,
    turns: 0,
    clean: 0,
    turnLog: [],
    inTurn: rH.mnfight === 2,
    turnHits: 0,
    prevMn: rH.mnfight | 0,
    over: null,
    hold: 0,
    lost: null,
    rampTurns: 0,
    t0: rj.frame
  });
  fE.score = scoreNow();
  rE.drawWith = fE.spec.mods.VANISH ? vanishFilter : null;
  qr = new WeakMap();
  applySpeed();
  banner();
}
rS(beginAttempt, "beginAttempt");
function dropHooks() {
  rE.drawWith = qf && qf.VANISH ? vanishFilter : null;
  qr = new WeakMap();
  u(NS, "");
}
rS(dropHooks, "dropHooks");
function endRun(r, K = null) {
  let IO = fE;
  if (IO) {
    fE = null;
    fv = null;
    fw = null;
    dropHooks();
    restoreSpeed(IO);
    IO.active = false;
    if (K) {
      fb = K;
      if (r !== "quit") {
        fm = K;
      }
    }
    return K;
  } else {
    return null;
  }
}
rS(endRun, "endRun");
function scoreNow(r = false) {
  let IZ = fE.turnLog.length;
  let IO = fE.turnLog.filter(IQ => IQ.clean).length;
  const Io = {
    turns: IZ,
    clean: IO,
    won: r
  };
  Io.base = fE.base;
  Io.mult = fE.mult;
  return scoreOf(Io);
}
rS(scoreNow, "scoreNow");
function buildResult(r, K = true) {
  let IZ = rf;
  let IO = [...(IZ.assisted || [])];
  let Io = {
    ...fE.spec,
    mods: {
      ...fE.spec.mods
    },
    picks: fE.spec.picks.slice(),
    seed: fE.spec.seed
  };
  let IT = Math.max(0, (IZ.endFrame || rj.frame) - (IZ.startFrame || fE.t0));
  let IM = scoreNow(r === "win");
  let IQ = r4("timeline");
  let Ie = r4("lookback");
  let l0 = 0;
  try {
    {
      l0 = IQ && IQ.sig ? IQ.sig() >>> 0 : 0;
    }
  } catch {
    {
      l0 = 0;
    }
  }
  let l1 = null;
  try {
    {
      l1 = Ie && Ie.last ? Ie.last() : null;
    }
  } catch {
    {
      l1 = null;
    }
  }
  const l2 = {
    prev: null,
    isNew: false
  };
  let l3 = {
    spec: Io,
    outcome: r,
    score: IM,
    mult: fE.mult,
    hits: fE.hits,
    frames: IT,
    fights: fE.parts.slice(),
    ranked: IO.length === 0,
    reasons: IO,
    best: l2,
    medals: [],
    look: l1,
    endSig: l0,
    replayId: null,
    over: fE.over || null,
    attempt: fE.attempt,
    sid: IZ.id
  };
  let l4 = fz.get(fE.kind);
  if (l4 && l4.amend) {
    try {
      {
        l4.amend(l3, fE, r);
      }
    } catch (lf) {
      {
        console.error("[runs] amend failed", lf);
      }
    }
  }
  if (Io.race && Number.isFinite(Io.race.score)) {
    l3.race = {
      them: Io.race.score | 0,
      sign: Io.race.sign || "",
      margin: l3.score - (Io.race.score | 0),
      hits: Number.isFinite(Io.race.hits) ? Io.race.hits | 0 : null,
      frames: Number.isFinite(Io.race.frames) ? Io.race.frames | 0 : null
    };
  }
  if (K) {
    judgeBest(l3);
  }
  return l3;
}
rS(buildResult, "buildResult");
function judgeBest(r) {
  if (!r || r.judged) {
    return r;
  }
  r.judged = true;
  let IZ = best(bucketOf(r.spec));
  r.best.prev = IZ;
  r.best.isNew = recordBest(r);
  return r;
}
rS(judgeBest, "judgeBest");
const q1 = {
  owner: NS,
  priority: 40
};
rK("fightStart", (r, K) => {
  let IO = K && K.fight;
  if (fv && IO && IO.id === fv.fightId && fE) {
    fv = null;
    beginAttempt();
    return;
  }
  fv = null;
  if (fE) {
    if (IO && fE.lost && IO.id === fE.fightId) {
      let IM = fE;
      fw = () => {
        if (fE === IM) {
          fO.play(IM.fightId, IM.seed, IM.setup);
        }
      };
      return;
    }
    endRun("quit");
  }
}, q1);
const q2 = {
  owner: NS,
  priority: 150
};
rK("beforeTick", () => {
  if (fw) {
    let IO = fw;
    fw = null;
    IO();
    return true;
  }
  if (fE && fE.hold > 0) {
    if (--fE.hold === 0) {
      let l3 = fE;
      let l4 = buildResult("lose");
      l3.lost = null;
      endRun("lose", l4);
      try {
        if (fP().toMenu) {
          fP().toMenu();
        }
      } catch {}
    }
    return true;
  }
  return false;
}, q2);
const q3 = {
  owner: NS
};
rK("frameAfter", () => {
  if (!live() || fv) {
    return;
  }
  let IZ = rf;
  if (!IZ.active || IZ.result) {
    return;
  }
  {
    let IT = fP().cfg;
    if (IT && (IT.gamespeed || 1) < 1) {
      rq("slow-mo");
    }
  }
  let Io = rH.mnfight | 0;
  if (Io === 2 && fE.prevMn !== 2) {
    fE.inTurn = true;
    fE.turnHits = 0;
    if (paceOf(fE.spec) === "RAMP") {
      setSpeed(rampSpeed(fE.turnLog.length));
      fE.rampTurns = fE.turnLog.length;
    }
  } else if (fE.inTurn && fE.prevMn === 2 && Io !== 2) {
    fE.inTurn = false;
    if (!rH.inGameOver && rH.battleover !== "lose" && rH.battleover !== "ut-lose") {
      fE.turnLog.push({
        f: rj.frame,
        clean: fE.turnHits === 0
      });
      fE.score = scoreNow();
      banner();
    }
  }
  fE.prevMn = Io;
}, q3);
rK("hit", () => {
  if (!!live() && !fv) {
    fE.hits++;
    if (fE.inTurn) {
      fE.turnHits++;
    }
    if (fE.spec.mods.ONEHIT && !fE.over) {
      fE.over = "ONE HIT";
      fE.hold = 30;
      u(NS, "ONE HIT", NZ.warn);
    }
  }
}, {
  owner: NS
});
const q4 = {
  owner: NS
};
rK("timeJump", () => {
  if (live()) {
    fE.turnLog = fE.turnLog.filter(IO => IO.f <= rj.frame);
    fE.inTurn = rH.mnfight === 2;
    fE.prevMn = rH.mnfight | 0;
    fE.turnHits = 0;
    if (fE.over && fE.hold > 0) {
      fE.over = null;
      fE.hold = 0;
    }
    if (paceOf(fE.spec) === "RAMP") {
      setSpeed(rampSpeed(fE.turnLog.length));
    }
    fE.score = scoreNow();
    banner();
  }
}, q4);
const q5 = {
  owner: NS
};
rK("fightEnd", (r, K) => {
  const IO = {
    bUxyK: function (l1, l2) {
      return l1 || l2;
    },
    QqkVp: function (l1, l2) {
      return l1 === l2;
    },
    zekCf: "restart",
    YwbHC: function (l1, l2) {
      return l1 === l2;
    },
    QgSoM: "quit",
    oiFJI: function (l1, l2) {
      return l1 !== l2;
    },
    JtiIY: "VBsZs",
    KTSrK: function (l1, l2) {
      return l1(l2);
    },
    jcRGY: function (l1, l2) {
      return l1 === l2;
    },
    BLUEX: "win",
    yFIzf: function (l1, l2) {
      return l1 === l2;
    },
    TmzVL: "lose",
    PLEBg: function (l1, l2) {
      return l1 | l2;
    },
    jwZQx: function (l1, l2) {
      return l1 === l2;
    },
    PUshG: "QVFHd",
    MUCve: "psRxN",
    sfvXv: function (l1, l2) {
      return l1 === l2;
    },
    rTttH: "UrOuI",
    RdWGj: "EaCmA",
    wZgSJ: function (l1, l2) {
      return l1 !== l2;
    },
    SrkBv: "dtuKR",
    DTbeV: "eLvbK",
    rjYHG: function (l1, l2, l3) {
      return l1(l2, l3);
    },
    JwVlL: function (l1, l2) {
      return l1(l2);
    }
  };
  if (IO.bUxyK(!fE, fv)) {
    return;
  }
  let IT = K && K.result;
  if (IT === "restart" || fE.over && IT === "quit") {
    return;
  }
  let IM = K.session && K.session.fight;
  if (!IM || IM.id !== fE.fightId) {
    {
      endRun("quit");
      return;
    }
  }
  let IQ = IT === "win" ? "win" : IT === "lose" ? "lose" : "quit";
  let Ie = {
    id: IM.id,
    outcome: IQ,
    hits: fE.hits,
    frames: Math.max(0, K.frames | 0),
    score: scoreNow(IQ === "win")
  };
  let l0 = fz.get(fE.kind);
  if (l0 && l0.fightEnded) {
    {
      let l2 = false;
      try {
        {
          l2 = !!l0.fightEnded(IQ, Ie, fO);
        }
      } catch {
        l2 = false;
      }
      if (l2) {
        return;
      }
    }
  }
  if (IQ === "quit") {
    {
      endRun("quit");
      return;
    }
  }
  if (IQ === "lose") {
    fE.lost = buildResult("lose", false);
    return;
  }
  fE.parts.push(Ie);
  endRun("win", buildResult("win"));
}, q5);
const q6 = {
  owner: NS,
  priority: -5
};
rK("menuDraw", () => {
  if (fP().getState && fP().getState() !== "menu") {
    return;
  }
  if (fE && !fv && !fw) {
    let Io = fz.get(fE.kind);
    let IT = false;
    if (!fE.lost && Io && Io.between) {
      try {
        IT = !!Io.between(fE);
      } catch {
        IT = false;
      }
    }
    if (!IT) {
      if (fE.lost) {
        let l1 = judgeBest(fE.lost);
        endRun("lose", l1);
      } else {
        endRun("quit");
      }
    }
  }
  if (!fm || T()) {
    return;
  }
  let IZ = fm;
  fm = null;
  finish(IZ);
}, q6);
if (typeof window !== "undefined" && window.addEventListener) {
  let bail = rS(() => {
    if (fE) {
      restoreSpeed(fE);
    }
  }, "bail");
  try {
    window.addEventListener("pagehide", bail);
    window.addEventListener("beforeunload", bail);
  } catch {}
}
function finish(r) {
  fb = r;
  let Io = r4("results");
  if (Io && Io.open) {
    try {
      {
        Io.open(r);
        return;
      }
    } catch (IM) {
      console.error("[runs] results.open failed", IM);
    }
  }
  let IT = r4("runcard");
  if (IT && IT.plainCard) {
    IT.plainCard(r);
  }
}
rS(finish, "finish");
function banner() {
  if (!fE) {
    return;
  }
  let IO = fz.get(fE.kind);
  let Io = "RUN";
  try {
    Io = IO && IO.label ? IO.label(fE.spec) : "RUN";
  } catch {}
  let IT = modsText(fE.spec.mods);
  let IM = fE.spec.race && Number.isFinite(fE.spec.race.score) ? "   vs " + (fE.spec.race.sign || "THEM") + " " + fN(fE.spec.race.score) : "";
  u(NS, Io + (IT ? "  " + IT + "  " + multText(fE.mult) : "") + "  " + fN(fE.score) + IM, NZ.select);
}
rS(banner, "banner");
var speedMsg = rS(() => {
  rN("Speed is set by the run", {
    kind: "warn",
    ms: 1600
  });
}, "speedMsg");
for (let lB of ["-", "=", "Plus"]) {
  n({
    id: "runs:speed" + lB,
    combo: lB,
    label: "game speed (set by the run)",
    states: ["battle"],
    override: true,
    owner: NS,
    when: rS(() => live(), "when"),
    onDown: speedMsg
  });
}
n({
  id: "runs:restart",
  combo: "T",
  label: "restart the run",
  states: ["battle"],
  owner: NS,
  when: rS(() => live() && !r8() && !fE.over, "when"),
  onDown: rS(() => {
    let Iu = fE.spec;
    fw = () => {
      start(Iu);
    };
    rN("Run restarted", {
      key: "T",
      ms: 900
    });
  }, "onDown")
});
var qr = new WeakMap();
function vanishFilter(r) {
  let IZ = false;
  try {
    IZ = rI(r);
  } catch {
    IZ = false;
  }
  if (!IZ) {
    return null;
  }
  let IT = qr.get(r);
  if (IT === undefined) {
    qr.set(r, rj.frame);
    return null;
  } else if (rj.frame - IT >= 30) {
    return "nowhere";
  } else {
    return null;
  }
}
rS(vanishFilter, "vanishFilter");
function vanished(r) {
  if (!lookOn("VANISH") || !r) {
    return false;
  }
  let Io = qr.get(r);
  return Io !== undefined && rj.frame - Io >= 30;
}
rS(vanished, "vanished");
var qf = null;
function viewLookSet(r) {
  let Iu = r && typeof r == "object" && (r.VANISH || r.DARK) ? {
    VANISH: r.VANISH ? 1 : 0,
    DARK: r.DARK ? 1 : 0
  } : null;
  qf = Iu;
  qr = new WeakMap();
  if (!live()) {
    rE.drawWith = Iu && Iu.VANISH ? vanishFilter : null;
  }
  return !!Iu;
}
rS(viewLookSet, "viewLookSet");
function lookOn(r) {
  if (live()) {
    return !!fE.spec.mods[r];
  } else {
    return !!qf && !!qf[r] && r8() === "replay";
  }
}
rS(lookOn, "lookOn");
function lookOf(r) {
  let IT = fE;
  if (!IT || !IT.spec || !IT.active || fv || IT.fightId !== r) {
    return null;
  }
  let IM = IT.spec.mods;
  if (IM.VANISH || IM.DARK) {
    return {
      VANISH: IM.VANISH ? 1 : 0,
      DARK: IM.DARK ? 1 : 0
    };
  } else {
    return null;
  }
}
rS(lookOf, "lookOf");
var qF = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
var qx = null;
function soulCenter(r) {
  let IT = rv[r.mask_index] || rv[r.sprite_index];
  let IM = r.image_xscale ?? 1;
  let IQ = r.image_yscale ?? 1;
  if (IT && IT.bb) {
    return [r.x + ((IT.bb[0] + IT.bb[2] + 1) / 2 - (IT.ox || 0)) * IM, r.y + ((IT.bb[1] + IT.bb[3] + 1) / 2 - (IT.oy || 0)) * IQ];
  } else {
    return [r.x + 8, r.y + 8];
  }
}
rS(soulCenter, "soulCenter");
function darkMask(r, K, Iu, IZ = 40, IO = 6, Io = null) {
  let IM = Math.floor(r[0]);
  let IQ = Math.floor(r[1]);
  let Ie = Math.ceil(r[2]);
  let l0 = Math.ceil(r[3]);
  let l1 = Ie - IM;
  let l2 = l0 - IQ;
  if (!(l1 > 0) || !(l2 > 0) || !(l1 <= 640) || !(l2 <= 480)) {
    return null;
  }
  if (!qx || qx.length < l1 * l2 * 4) {
    qx = new Uint8ClampedArray(l1 * l2 * 4);
  }
  let l3 = qx.subarray(0, l1 * l2 * 4);
  for (let lf = 3; lf < l3.length; lf += 4) {
    l3[lf - 3] = 0;
    l3[lf - 2] = 0;
    l3[lf - 1] = 0;
    l3[lf] = 255;
  }
  let l4 = IZ - IO;
  let l5 = Math.max(0, Math.floor(Iu - IZ) - IQ);
  let l6 = Math.min(l2, Math.ceil(Iu + IZ) - IQ);
  let l7 = Math.max(0, Math.floor(K - IZ) - IM);
  let l8 = Math.min(l1, Math.ceil(K + IZ) - IM);
  for (let lq = l5; lq < l6; lq++) {
    let lX = lq + IQ;
    let lP = lX + 0.5 - Iu;
    for (let lF = l7; lF < l8; lF++) {
      let lc = lF + IM;
      let lx = lc + 0.5 - K;
      let lG = Math.sqrt(lx * lx + lP * lP);
      if (lG >= IZ) {
        continue;
      }
      let lg = lG < l4 || (qF[(lX & 3) << 2 | lc & 3] + 0.5) / 16 >= (lG - l4) / IO;
      let lz = (lq * l1 + lF) * 4;
      if (lg) {
        l3[lz + 3] = 0;
      } else if (Io && lG >= l4) {
        l3[lz] = Io[0];
        l3[lz + 1] = Io[1];
        l3[lz + 2] = Io[2];
      }
    }
  }
  const l9 = {
    x: IM,
    y: IQ,
    w: l1,
    h: l2,
    data: l3
  };
  return l9;
}
rS(darkMask, "darkMask");
function boxInterior() {
  let IZ = rj.first("obj_lborder");
  let IO = rj.first("obj_rborder");
  let Io = rj.first("obj_uborder");
  let IT = rj.first("obj_dborder");
  if (IZ && IO && Io && IT) {
    return [IZ.x + Math.abs(IZ.sprite_width || 0), Io.y + Math.abs(Io.sprite_height || 0), IO.x, IT.y];
  }
  let IM = rj.first("obj_growtangle");
  if (IM && !IM.destroyed && IM.sprite_index === "spr_battlebg_0") {
    let l3 = Math.abs(IM.image_xscale || 2);
    let l4 = Math.abs(IM.image_yscale || 2);
    if (l3 * 37 > 8 && l4 * 37 > 8) {
      return [IM.x - l3 * 35, IM.y - l4 * 35, IM.x + l3 * 36, IM.y + l4 * 36];
    }
  }
  try {
    return rD();
  } catch {
    return null;
  }
}
rS(boxInterior, "boxInterior");
var qC = null;
function edgeRgb() {
  if (!qC) {
    let IO = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(String(NZ.faint || ""));
    qC = IO ? [parseInt(IO[1], 16), parseInt(IO[2], 16), parseInt(IO[3], 16)] : [64, 64, 64];
  }
  return qC;
}
rS(edgeRgb, "edgeRgb");
function drawDark(r) {
  if (!lookOn("DARK") || rH.inGameOver || rH.mnfight !== 2) {
    return false;
  }
  let Iu = rj.first("obj_heart");
  if (!Iu) {
    return false;
  }
  let IZ = boxInterior();
  if (!IZ) {
    return false;
  }
  let [IO, Io] = soulCenter(Iu);
  if (typeof document === "undefined" || typeof ImageData === "undefined" || !r || !r.ctx) {
    return !!darkMask(IZ, IO, Io, 40, 6, edgeRgb());
  }
  let IM = Math.floor(IZ[0]);
  let IQ = Math.floor(IZ[1]);
  let Ie = Math.ceil(IZ[2]);
  let l0 = Math.ceil(IZ[3]);
  if (!(Ie > IM) || !(l0 > IQ)) {
    return false;
  }
  let l1 = 40;
  let l2 = Math.round(IO) - l1;
  let l3 = Math.round(Io) - l1;
  let l4 = holeCanvas(l2 & 3, l3 & 3, l1, 6, edgeRgb());
  if (!l4) {
    return false;
  }
  let l6 = r.ctx;
  let l7 = fP();
  let l8 = l7.canvas ? l7.canvas.width / 640 : 1;
  l6.save();
  try {
    l6.setTransform(l8, 0, 0, l8, 0, 0);
    l6.globalAlpha = 1;
    l6.imageSmoothingEnabled = false;
    if (rH.roomScale === 2) {
      l6.scale(2, 2);
    }
    l6.translate(Math.round(rH.shakex || 0), Math.round(rH.shakey || 0));
    l6.beginPath();
    l6.rect(IM, IQ, Ie - IM, l0 - IQ);
    l6.clip();
    l6.fillStyle = "#000";
    let lr = l1 * 2;
    l6.fillRect(IM, IQ, Ie - IM, Math.max(0, l3 - IQ));
    l6.fillRect(IM, l3 + lr, Ie - IM, Math.max(0, l0 - (l3 + lr)));
    l6.fillRect(IM, l3, Math.max(0, l2 - IM), lr);
    l6.fillRect(l2 + lr, l3, Math.max(0, Ie - (l2 + lr)), lr);
    l6.drawImage(l4, l2, l3);
  } finally {
    l6.restore();
  }
  return true;
}
rS(drawDark, "drawDark");
var qI = new Map();
function holeCanvas(r, K, Iu, IZ, IO) {
  let Ie = r * 4 + K + ":" + Iu + ":" + IZ + ":" + IO.join(",");
  let l0 = qI.get(Ie);
  if (l0) {
    return l0;
  }
  let l1 = Iu * 2;
  let l2 = Iu - IZ;
  l0 = document.createElement("canvas");
  l0.width = l1;
  l0.height = l1;
  let l4 = l0.getContext("2d");
  if (!l4) {
    return null;
  }
  let l5 = l4.createImageData(l1, l1);
  let l6 = l5.data;
  for (let l7 = 0; l7 < l1; l7++) {
    let l8 = l7 + 0.5 - Iu;
    let l9 = K + l7;
    for (let lr = 0; lr < l1; lr++) {
      let lK = lr + 0.5 - Iu;
      let lN = r + lr;
      let lf = Math.sqrt(lK * lK + l8 * l8);
      let lq = (l7 * l1 + lr) * 4;
      if (lf < Iu && (lf < l2 || (qF[(l9 & 3) << 2 | lN & 3] + 0.5) / 16 >= (lf - l2) / IZ)) {
        l6[lq + 3] = 0;
        continue;
      }
      let lX = lf < Iu && lf >= l2;
      l6[lq] = lX ? IO[0] : 0;
      l6[lq + 1] = lX ? IO[1] : 0;
      l6[lq + 2] = lX ? IO[2] : 0;
      l6[lq + 3] = 255;
    }
  }
  l4.putImageData(l5, 0, 0);
  qI.set(Ie, l0);
  return l0;
}
rS(holeCanvas, "holeCanvas");
const qD = {
  owner: NS,
  priority: 450
};
rK("presentScreen", (r, K) => {
  if (K.state === "battle") {
    drawDark(r);
  }
}, qD);
function openRun(r, K = {}) {
  if (r && typeof r == "object" && !r.id && r.kind) {
    let l1 = r4("runcard");
    if (l1) {
      return l1.open({
        spec: normSpec(r),
        ...K
      });
    } else {
      return false;
    }
  }
  let IO = typeof r == "string" ? fX(r) : r;
  if (!runnable(IO) || (fP().getState ? fP().getState() : "menu") !== "menu") {
    return false;
  }
  let Io = r4("runcard");
  if (!Io || !Io.open) {
    return false;
  }
  let IQ = normSpec({
    kind: "fight",
    fights: [IO.id]
  });
  let Ie = r5(NS, "last:" + bucketTarget(IQ), null);
  if (Ie && Ie.mods) {
    IQ.mods = normMods(Ie.mods);
  }
  for (let l2 of f5) {
    if (IQ.mods[l2.id] && chipBlocked(l2.id, IQ)) {
      delete IQ.mods[l2.id];
    }
  }
  const l0 = {
    spec: IQ,
    ...K
  };
  return Io.open(l0);
}
rS(openRun, "openRun");
const qi = {
  fight: 1,
  daily: 2,
  draft: 3,
  playlist: 4,
  gauntlet: 5
};
const qh = {
  win: 1,
  lose: 2,
  quit: 3,
  done: 4
};
const qH = {
  MAX_HASH: 16384,
  MAX_INFLATE: 65536,
  MAX_VARINT: 5,
  MAX_FRAMES: 18000,
  MAX_RESULT_FRAMES: 432000,
  MAX_FIGHTS: 20,
  MAX_SIGN: 12,
  MAX_INPUT_BYTES: 16384,
  MAX_LINK: 1900
};
var lastSeed = rS(r => {
  let IZ = r5(NS, "seed:" + bucketTarget(normSpec(r)), null);
  if (Number.isFinite(IZ)) {
    return seedOf(IZ);
  } else {
    return null;
  }
}, "lastSeed");
var subjectOf = rS(r => {
  let Io = fz.get(r.kind);
  try {
    if (Io && Io.subject) {
      return Io.subject(r);
    } else {
      return "";
    }
  } catch {
    return "";
  }
}, "subjectOf");
var qw = qi;
var qm = ["", "fight", "daily", "draft", "playlist", "gauntlet"];
var qb = qh;
var qp = ["", "win", "lose", "quit", "done"];
var qU = [0, 10, 25, "ENDLESS"];
var qt = Date.UTC(2026, 0, 1);
var qJ = qH;
var qj = /^[a-z0-9_]{1,32}$/;
var qB = /^[A-Z0-9_]{1,16}$/;
var qY = /^[A-Z0-9 _-]{0,12}$/;
var qL = {
  damaged: "This link is damaged - part of it is missing. Ask for it again.",
  newer: "This link is from a newer version.",
  nofight: "This link's fight isn't in this version.",
  modfight: "Mod fights and custom boards can't be links."
};
function refuse(r, K) {
  let Io = new Error(qL[r] || qL.damaged);
  Io.code = r;
  Io.why = K || r;
  return Io;
}
rS(refuse, "refuse");
var qk = class lY {
  constructor() {
    this.b = [];
  }
  u8(r) {
    this.b.push(r & 255);
  }
  u16(r) {
    this.u8(r >> 8);
    this.u8(r);
  }
  u32(r) {
    r >>>= 0;
    this.u8(r >>> 24);
    this.u8(r >>> 16);
    this.u8(r >>> 8);
    this.u8(r);
  }
  vi(r) {
    r = Math.max(0, Math.floor(r));
    if (r > 4294967295) {
      r = 4294967295;
    }
    do {
      let IT = r % 128;
      r = Math.floor(r / 128);
      if (r) {
        IT |= 128;
      }
      this.u8(IT);
    } while (r);
  }
  str(r) {
    this.u8(r.length);
    for (let IT = 0; IT < r.length; IT++) {
      this.u8(r.charCodeAt(IT));
    }
  }
  bytes() {
    return Uint8Array.from(this.b);
  }
};
rS(qk, "W");
var qS = qk;
var qu = class lL {
  constructor(r) {
    this.b = r;
    this.i = 0;
  }
  need(r) {
    if (this.i + r > this.b.length) {
      throw refuse("damaged", "truncated");
    }
  }
  u8() {
    this.need(1);
    return this.b[this.i++];
  }
  u16() {
    return this.u8() << 8 | this.u8();
  }
  u32() {
    return (this.u8() << 24 | this.u8() << 16 | this.u8() << 8 | this.u8()) >>> 0;
  }
  vi() {
    let Iu = 0;
    let IZ = 1;
    for (let IT = 0; IT < qJ.MAX_VARINT; IT++) {
      let IM = this.u8();
      Iu += (IM & 127) * IZ;
      if (!(IM & 128)) {
        if (Iu > 4294967295) {
          throw refuse("damaged", "varint range");
        }
        return Iu;
      }
      IZ *= 128;
    }
    throw refuse("damaged", "varint too long");
  }
  str(r) {
    let IZ = this.u8();
    this.need(IZ);
    let Io = "";
    for (let IM = 0; IM < IZ; IM++) {
      Io += String.fromCharCode(this.b[this.i++]);
    }
    if (r && !r.test(Io)) {
      throw refuse("damaged", "bad text " + JSON.stringify(Io.slice(0, 40)));
    }
    return Io;
  }
};
rS(qu, "R");
var qn = qu;
function modsByte(r) {
  let IT = 0;
  if (r.VANISH) {
    IT |= 1;
  }
  if (r.DARK) {
    IT |= 2;
  }
  IT |= ((r.SPEED | 0) & 3) << 2;
  IT |= ((r.LONGTURNS | 0) & 3) << 4;
  if (r.ONEHIT) {
    IT |= 64;
  }
  return IT;
}
rS(modsByte, "modsByte");
function modsOfByte(r) {
  if (r & 128) {
    throw refuse("damaged", "mods bit7");
  }
  let IZ = r >> 4 & 3;
  if (IZ === 3) {
    throw refuse("damaged", "long turns level 3");
  }
  let Io = {};
  if (r & 1) {
    Io.VANISH = 1;
  }
  if (r & 2) {
    Io.DARK = 1;
  }
  let IT = r >> 2 & 3;
  if (IT) {
    Io.SPEED = IT;
  }
  if (IZ) {
    Io.LONGTURNS = IZ;
  }
  if (r & 64) {
    Io.ONEHIT = 1;
  }
  return Io;
}
rS(modsOfByte, "modsOfByte");
var dayOf = rS(r => {
  if (!r) {
    return 0;
  }
  let Io = Date.parse(r + "T00:00:00Z");
  if (!Number.isFinite(Io)) {
    return 0;
  }
  let IM = Math.round((Io - qt) / 86400000);
  if (IM > 0) {
    return IM;
  } else {
    return 0;
  }
}, "dayOf");
var isoOfDay = rS(r => r ? new Date(qt + r * 86400000).toISOString().slice(0, 10) : null, "isoOfDay");
function canLink(r) {
  if (!r || !r.spec) {
    return "Nothing to link.";
  }
  let Io = normSpec(r.spec);
  if (!Io.fights.length && Io.kind !== "gauntlet") {
    return "Nothing to link.";
  }
  for (let IT of Io.fights) {
    let IM = fX(IT);
    if (!IM || !qj.test(IT)) {
      return "This fight can't be a link.";
    }
    if (isModOrCustom(IM)) {
      return qL.modfight;
    }
  }
  if (Io.seed == null) {
    return "This run has no seed.";
  } else {
    return "";
  }
}
rS(canLink, "canLink");
function encodePayload(r, K = {}) {
  let IZ = canLink(r);
  if (IZ) {
    throw new Error(IZ);
  }
  let IO = normSpec(r.spec);
  let Io = new qS();
  Io.u8(f2);
  Io.u8(qw[IO.kind]);
  Io.u16(f1);
  Io.vi(IO.seed);
  Io.u8(modsByte(IO.mods));
  Io.vi(dayOf(IO.date));
  if (IO.kind !== "gauntlet" && (IO.fights.length < 1 || IO.fights.length > qJ.MAX_FIGHTS)) {
    throw new Error("A run links 1 to 20 fights.");
  }
  Io.u8(IO.fights.length);
  for (let l2 of IO.fights) {
    Io.str(l2);
  }
  if (IO.kind === "gauntlet") {
    let l3 = IO.gauntlet || {};
    let l4 = String(l3.set || "CUSTOM");
    if (!qB.test(l4)) {
      throw new Error("Bad gauntlet set.");
    }
    Io.str(l4);
    let l5 = qU.indexOf(l3.len === "ENDLESS" ? "ENDLESS" : l3.len | 0);
    Io.u8(l5 < 0 ? 0 : l5);
    Io.u8(l3.ko === "END" ? 1 : 0);
  }
  if (IO.kind === "draft" || IO.kind === "playlist") {
    if (IO.draft || IO.kind === "draft") {
      Io.u8(IO.picks.length + 1);
      for (let l9 of IO.picks) {
        Io.u8(l9);
      }
    } else {
      Io.u8(0);
    }
  }
  let IQ = r.outcome != null && Number.isFinite(r.score);
  Io.u8(IQ ? 1 : 0);
  if (IQ) {
    Io.vi(r.score | 0);
    Io.vi(r.hits | 0);
    Io.vi(Math.min(qJ.MAX_RESULT_FRAMES, r.frames | 0));
    Io.u32(r.endSig >>> 0);
    Io.u8(qb[r.outcome] || 3);
  }
  let Ie = String(K.sign ?? "").toUpperCase().replace(/[^A-Z0-9 _-]/g, "").slice(0, qJ.MAX_SIGN);
  Io.str(Ie);
  let l0 = K.inputs instanceof Uint8Array && K.inputs.length ? K.inputs : null;
  if (l0 && l0.length > qJ.MAX_INPUT_BYTES) {
    throw new Error("The inputs are too long for a link.");
  }
  Io.u8(l0 ? 1 : 0);
  if (l0) {
    Io.vi(l0.length);
    for (let lr of l0) {
      Io.u8(lr);
    }
  }
  return Io.bytes();
}
rS(encodePayload, "encodePayload");
function wrap(r, K, Iu) {
  let IM = new Uint8Array(K.length + 1);
  IM[0] = r;
  IM.set(K, 1);
  return "drs2" + N8.b32enc(IM) + N8.sum4(Iu);
}
rS(wrap, "wrap");
function encodeCodeSync(r, K = {}) {
  let IO = encodePayload(r, K);
  return wrap(0, IO, IO);
}
rS(encodeCodeSync, "encodeCodeSync");
async function streamBytes(r, K) {
  let IZ = r.getReader();
  let IO = [];
  let Io = 0;
  while (true) {
    let {
      value: l1,
      done: l2
    } = await IZ.read();
    if (l2) {
      break;
    }
    Io += l1.length;
    if (K && Io > K) {
      try {
        await IZ.cancel();
      } catch {}
      throw refuse("damaged", "inflate over cap");
    }
    IO.push(l1);
  }
  let IQ = new Uint8Array(Io);
  let Ie = 0;
  for (let l3 of IO) {
    IQ.set(l3, Ie);
    Ie += l3.length;
  }
  return IQ;
}
rS(streamBytes, "streamBytes");
async function deflateRaw(r) {
  if (typeof CompressionStream > "u") {
    return null;
  }
  try {
    {
      let Io = new CompressionStream("deflate-raw");
      let IT = Io.writable.getWriter();
      IT.write(r);
      IT.close();
      return await streamBytes(Io.readable, 0);
    }
  } catch {
    {
      return null;
    }
  }
}
rS(deflateRaw, "deflateRaw");
async function inflateRaw(r, K = qJ.MAX_INFLATE) {
  if (typeof DecompressionStream === "undefined") {
    throw refuse("damaged", "no inflate");
  }
  let Io = new DecompressionStream("deflate-raw");
  let IT = Io.writable.getWriter();
  IT.write(r).catch(() => {});
  IT.close().catch(() => {});
  try {
    return await streamBytes(Io.readable, K);
  } catch (IQ) {
    throw IQ && IQ.code ? IQ : refuse("damaged", "inflate failed");
  }
}
rS(inflateRaw, "inflateRaw");
async function encodeCode(r, K = {}) {
  let IZ = encodePayload(r, K);
  if (K.inputs) {
    let IM = await deflateRaw(IZ);
    if (IM && IM.length < IZ.length) {
      return wrap(1, IM, IZ);
    }
  }
  return wrap(0, IZ, IZ);
}
rS(encodeCode, "encodeCode");
function splitCode(r) {
  let IZ = String(r || "");
  let IO = /share=([a-z0-9-]+)/i.exec(IZ.slice(0, 20000));
  if ((IO ? IO[1] : IZ).replace(/[^a-z0-9]/gi, "").length > qJ.MAX_HASH) {
    throw refuse("damaged", "too long");
  }
  let Io = N8.normalise(IZ);
  if (!Io.startsWith("drs")) {
    throw refuse("damaged", "not a code");
  }
  if (Io[3] !== "2") {
    throw /[3-9]/.test(Io[3]) ? refuse("newer", "codec " + Io[3]) : refuse("damaged", "codec " + Io[3]);
  }
  let IT = Io.slice(4);
  if (IT.length < 8) {
    throw refuse("damaged", "too short");
  }
  if (IT.length > qJ.MAX_HASH) {
    throw refuse("damaged", "too long");
  }
  let IM;
  try {
    IM = N8.b32dec(IT.slice(0, -4));
  } catch {
    throw refuse("damaged", "bad character");
  }
  if (!IM.length) {
    throw refuse("damaged", "empty");
  }
  return {
    flags: IM[0],
    body: IM.subarray(1),
    sum: IT.slice(-4)
  };
}
rS(splitCode, "splitCode");
function decodePayload(r) {
  let Iu = new qn(r);
  let IZ = Iu.u8();
  if (IZ !== f2) {
    throw IZ > f2 ? refuse("newer", "schema " + IZ) : refuse("damaged", "schema 0");
  }
  let IO = qm[Iu.u8()];
  if (!IO) {
    throw refuse("damaged", "kind");
  }
  let Io = Iu.u16();
  let IT = Iu.vi();
  if (IT > f0) {
    throw refuse("damaged", "seed bits");
  }
  let IM = modsOfByte(Iu.u8());
  let IQ = Iu.vi();
  if (IQ > 36500) {
    throw refuse("damaged", "day");
  }
  let Ie = Iu.u8();
  if (Ie > qJ.MAX_FIGHTS || Ie === 0 && IO !== "gauntlet" || (IO === "fight" || IO === "daily") && Ie !== 1) {
    throw refuse("damaged", "fight count " + Ie);
  }
  let l0 = [];
  for (let lK = 0; lK < Ie; lK++) {
    l0.push(Iu.str(qj));
  }
  let l1 = null;
  if (IO === "gauntlet") {
    let lN = Iu.str(qB);
    let lf = Iu.u8();
    if (lf > 3) {
      throw refuse("damaged", "length code");
    }
    let lq = Iu.u8();
    if (lq > 1) {
      throw refuse("damaged", "ko code");
    }
    const lX = {
      set: lN,
      len: qU[lf]
    };
    lX.ko = lq ? "END" : "NEXT";
    l1 = lX;
  }
  let l2 = false;
  let l3 = [];
  if (IO === "draft" || IO === "playlist") {
    let lP = Iu.u8();
    if (IO === "draft" && lP === 0) {
      throw refuse("damaged", "draft without picks section");
    }
    if (lP) {
      l2 = true;
      if (lP - 1 > 19) {
        throw refuse("damaged", "too many picks");
      }
      for (let lF = 0; lF < lP - 1; lF++) {
        let lx = Iu.u8();
        if (lx > 2) {
          throw refuse("damaged", "pick " + lx);
        }
        l3.push(lx);
      }
    }
  }
  let l4 = null;
  if (Iu.u8()) {
    let lG = Iu.vi();
    let lg = Iu.vi();
    let lz = Iu.vi();
    let lC = Iu.u32();
    let ly = Iu.u8();
    if (!qp[ly]) {
      throw refuse("damaged", "outcome");
    }
    if (lz > qJ.MAX_RESULT_FRAMES) {
      throw refuse("damaged", "result frames");
    }
    if (lG > 2147483647 || lg > 100000) {
      throw refuse("damaged", "result range");
    }
    const lV = {
      score: lG,
      hits: lg,
      frames: lz,
      endSig: lC,
      outcome: qp[ly]
    };
    l4 = lV;
  }
  let l5 = Iu.str(qY);
  if (l5.length > qJ.MAX_SIGN) {
    throw refuse("damaged", "sign length");
  }
  let l8 = null;
  let l9 = Iu.u8();
  if (l9 > 1) {
    throw refuse("damaged", "inputs flag");
  }
  if (l9) {
    let lA = Iu.vi();
    if (lA < 2 || lA > qJ.MAX_INPUT_BYTES) {
      throw refuse("damaged", "inputs length");
    }
    Iu.need(lA);
    l8 = r.slice(Iu.i, Iu.i + lA);
    Iu.i += lA;
    let lI = new qn(l8);
    let ll = lI.vi();
    let lD = lI.vi();
    if (ll > qJ.MAX_FRAMES) {
      throw refuse("damaged", "input frames");
    }
    if (lD > ll) {
      throw refuse("damaged", "input runs");
    }
  }
  if (Iu.i !== r.length) {
    throw refuse("damaged", "trailing bytes");
  }
  return {
    spec: normSpec({
      kind: IO,
      fights: l0,
      gauntlet: l1,
      seed: IT,
      mods: IM,
      draft: l2,
      picks: l3,
      date: isoOfDay(IQ)
    }),
    result: l4,
    sign: l5,
    inputs: l8,
    epoch: Io,
    oldEpoch: Io !== f1
  };
}
rS(decodePayload, "decodePayload");
function checkFights(r) {
  for (let IT of r.spec.fights) {
    let IM = fX(IT);
    if (!IM || IM.hidden) {
      throw refuse("nofight", "no fight " + IT);
    }
    if (isModOrCustom(IM) || IM.mode) {
      throw refuse("nofight", "mod or custom " + IT);
    }
  }
  let Iu = fz.get(r.spec.kind);
  if (Iu && Iu.check) {
    let Ie = "";
    try {
      Ie = Iu.check(r.spec) || "";
    } catch {
      Ie = "damaged";
    }
    if (Ie) {
      throw refuse(Ie === "nofight" ? "nofight" : "damaged", "kind rule: " + r.spec.kind);
    }
  }
  return r;
}
rS(checkFights, "checkFights");
async function decodeCode(r) {
  let {
    flags: Iu,
    body: IZ,
    sum: IO
  } = splitCode(r);
  if (Iu & 254) {
    throw refuse("damaged", "flags");
  }
  let IT = Iu & 1 ? await inflateRaw(IZ) : IZ;
  if (N8.sum4(IT) !== IO) {
    throw refuse("damaged", "checksum");
  }
  return checkFights(decodePayload(IT));
}
rS(decodeCode, "decodeCode");
function peekCode(r) {
  let {
    flags: Iu,
    body: IZ,
    sum: IO
  } = splitCode(r);
  if (Iu & 254) {
    throw refuse("damaged", "flags");
  }
  if (Iu & 1) {
    return {
      title: "A challenge link",
      lines: ["Z opens it."]
    };
  }
  if (N8.sum4(IZ) !== IO) {
    throw refuse("damaged", "checksum");
  }
  let IQ = checkFights(decodePayload(IZ));
  return {
    title: "CHALLENGE: " + subjectOf(IQ.spec),
    lines: [IQ.result ? "Beat " + fN(IQ.result.score) + "   " + IQ.result.hits + (IQ.result.hits === 1 ? " hit" : " hits") + "   " + fmtTime(IQ.result.frames) + (IQ.sign ? "   from " + IQ.sign : "") : "No score in it - just the setup.", "Seed " + IQ.spec.seed + (modsText(IQ.spec.mods) ? "   " + modsText(IQ.spec.mods) + "  " + multText(multOf(IQ.spec.mods)) : "")]
  };
}
rS(peekCode, "peekCode");
async function openCode(r) {
  let IO;
  try {
    IO = await decodeCode(r);
  } catch (IM) {
    rN(IM.message, {
      kind: "error",
      ms: 6000
    });
    return false;
  }
  let IT = r4("runcard");
  if (!IT || !IT.openChallenge) {
    rN("Challenges are not in this build", {
      kind: "error"
    });
    return false;
  } else {
    if (fP().getState && fP().getState() === "battle" && fP().toMenu) {
      fP().toMenu();
    }
    IT.openChallenge(IO);
    return true;
  }
}
rS(openCode, "openCode");
function raceSpec(r) {
  let Io = normSpec(r.spec);
  Io.race = r.result ? {
    score: r.result.score,
    hits: r.result.hits,
    frames: r.result.frames,
    endSig: r.result.endSig,
    sign: r.sign || ""
  } : null;
  return Io;
}
rS(raceSpec, "raceSpec");
r2("runs", {
  MODS: f5,
  SEED_BITS: Ne,
  DET_EPOCH: f1,
  SCHEMA: f2,
  LIMITS: qJ,
  start: start,
  registerKind: registerKind,
  openRun: openRun,
  current: current,
  live: live,
  ownsSetup: ownsSetup,
  scoreOf: scoreOf,
  multOf: multOf,
  bucketOf: bucketOf,
  best: best,
  recordBest: recordBest,
  encodeCode: encodeCode,
  encodeCodeSync: encodeCodeSync,
  canLink: canLink,
  decodeCode: decodeCode,
  peekCode: peekCode,
  openCode: openCode,
  finish: finish,
  lastResult: lastResult,
  vanished: vanished,
  fmtScore: fN,
  fmtTime: fmtTime,
  modsText: modsText,
  multText: multText,
  chipLabel: chipLabel,
  chipBlocked: chipBlocked,
  normSpec: normSpec,
  raceSpec: raceSpec,
  lastSeed: lastSeed,
  subjectOf: subjectOf,
  seedOf: seedOf,
  viewLook: viewLookSet,
  lookOf: lookOf,
  store: rS(() => fD(), "store"),
  saveStore: rS(() => saveDb(), "saveStore")
});
var XK = "runmodes";
var XN = rX;
var Xf = rS(() => r3() || {}, "host");
var Xq = rS(() => r4("practice"), "pr");
var motion = rS(() => {
  let Iu = Xf().cfg;
  return !Iu || Iu.uimotion !== false;
}, "motion");
var XP = rS((r, K) => {
  try {
    let IT = Xf().cfg;
    if (!IT || IT.audio !== false) {
      rW(r, K != null ? {
        volume: K
      } : undefined);
    }
  } catch {}
}, "sfx");
var outCubic = rS(r => 1 - Math.pow(1 - Math.max(0, Math.min(1, r)), 3), "outCubic");
var hovering = rS((r, K, Iu, IZ) => l && l.kind === "mouse" && l.inside && l.x >= r && l.y >= K && l.x < r + Iu && l.y < K + IZ, "hovering");
var XG = rS(r => typeof r == "string" && p.find(K => K.id === r) || null, "fightById");
var Xg = rS(r => String(r && (r.name || r.id) || "?").toUpperCase(), "upName");
var plural = rS((r, K) => r + " " + K + (r === 1 ? "" : "s"), "plural");
function fnv1a(r) {
  let Io = 2166136261;
  for (let IM = 0; IM < r.length; IM++) {
    Io ^= r.charCodeAt(IM);
    Io = Math.imul(Io, 16777619) >>> 0;
  }
  return Io >>> 0;
}
rS(fnv1a, "fnv1a");
function mulberry32(r) {
  return () => {
    r = r + 1831565813 | 0;
    let lr = Math.imul(r ^ r >>> 15, r | 1);
    lr = lr + Math.imul(lr ^ lr >>> 7, lr | 61) ^ lr;
    return ((lr ^ lr >>> 14) >>> 0) / 4294967296;
  };
}
rS(mulberry32, "mulberry32");
var seed31 = rS(r => r >>> 0 & 134217727, "seed31");
var setSeed = rS((r, K) => seed31(fnv1a(r + ":" + K)), "setSeed");
function XI(r, K, Iu, IZ = "fnt_main") {
  K = String(K ?? "");
  if (r.string_width(K, IZ) <= Iu) {
    return K;
  }
  let IM = /^(.*?:\s)(.*)$/.exec(K);
  if (IM && IM[2].includes(", ")) {
    let l0 = IM[2].split(", ");
    for (let l1 = l0.length - 1; l1 >= 1; l1--) {
      let l2 = IM[1] + l0.slice(0, l1).join(", ") + " +" + (l0.length - l1);
      if (r.string_width(l2, IZ) <= Iu) {
        return l2;
      }
    }
  }
  let IQ = K;
  while (IQ.length > 1 && r.string_width(IQ, IZ) > Iu) {
    let l3 = IQ.lastIndexOf(" ", IQ.length - 2);
    IQ = l3 > 0 ? IQ.slice(0, l3) : IQ.slice(0, -1);
  }
  return IQ.replace(/[\s,.:-]+$/, "");
}
rS(XI, "fit");
function Xl(r, K, Iu, IZ = 3) {
  let IM = [];
  let IQ = "";
  for (let l0 of String(K || "").split(/\s+/)) {
    if (!l0) {
      continue;
    }
    let l1 = IQ ? IQ + " " + l0 : l0;
    if (!IQ || r.string_width(l1, "fnt_main") <= Iu) {
      IQ = l1;
    } else {
      IM.push(IQ);
      IQ = l0;
    }
  }
  if (IQ) {
    IM.push(IQ);
  }
  if (IM.length > IZ) {
    IM.length = IZ;
    IM[IZ - 1] = XI(r, IM[IZ - 1], Iu);
  }
  return IM;
}
rS(Xl, "wrap");
function XD(r, K, Iu, IZ) {
  for (let [IQ, Ie] of IZ) {
    if (IQ) {
      K += rg(r, K, Iu, IQ) + 4;
    }
    if (Ie) {
      r.draw_text(K, Iu + 1, Ie, XN.dim);
      K += r.string_width(Ie, "fnt_main") + 14;
    }
  }
  return K;
}
rS(XD, "chips");
var heart = rS((r, K, Iu) => r.draw_sprite("spr_heart", 0, K, Iu), "heart");
var playable = rS(r => !!r && !r.hidden && !r.cut && !r.mode, "playable");
var encounter = rS(r => !!r && !r.hidden && !r.mode && !r.custom && !r.customEncounter, "encounter");
var turnRaw = rS(r => {
  let K = 0;
  for (let IZ of r || []) {
    K += IZ.clean ? 150 : 100;
  }
  return K;
}, "turnRaw");
var XW = 4;
function dealDraft(r) {
  let Iu = Xq();
  let IZ = (Iu && Iu.dailyPool ? Iu.dailyPool() : []).map(XG).filter(playable);
  let IO = mulberry32(fnv1a(r + ":deal"));
  let Io = IZ.slice();
  for (let l1 = Io.length - 1; l1 > 0; l1--) {
    let l2 = Math.floor(IO() * (l1 + 1));
    let l3 = Io[l1];
    Io[l1] = Io[l2];
    Io[l2] = l3;
  }
  let IQ = Io.slice(0, XW);
  let Ie = new Map(p.map((l9, lr) => [l9, lr]));
  return IQ.sort((l9, lr) => Ie.get(l9) - Ie.get(lr)).map(l9 => l9.id);
}
rS(dealDraft, "dealDraft");
var XU = [{
  id: "PATCHUP",
  name: "PATCH UP",
  line: "Heal 60% of your HP now.",
  icon: "heart"
}, {
  id: "THICK",
  name: "THICK SKIN",
  line: "+20% max HP for the run.",
  icon: "shield"
}, {
  id: "CHARGED",
  name: "CHARGED",
  line: "Start every fight with half TP.",
  icon: "star"
}, {
  id: "HARDER",
  name: "HARDER",
  line: "Score x1.5, and one more modifier.",
  icon: "skull"
}, {
  id: "CLEAN",
  name: "CLEAN SLATE",
  line: "Take one modifier off.",
  icon: "restart"
}];
var perkById = rS(r => XU.find(K => K.id === r) || null, "perkById");
var XJ = 1.44;
function addableChips(r, K) {
  let Io = {
    kind: "draft",
    fights: K.slice(),
    mods: r
  };
  return f5.filter(IQ => IQ.id !== "ONEHIT" && !r[IQ.id] && !chipBlocked(IQ.id, Io)).map(IQ => IQ.id);
}
rS(addableChips, "addableChips");
function offerFor(r, K) {
  let IZ = XG(r.ids[K + 1]);
  let IO = r.ids.slice(K + 1);
  let Io = Object.keys(r.mods).filter(l6 => r.mods[l6]);
  let IT = addableChips(r.mods, IO);
  let IM = [];
  IM.push("PATCHUP");
  if (r.maxScale < XJ - 1e-9) {
    IM.push("THICK");
  }
  if (!r.charged && IZ && !rC(IZ)) {
    IM.push("CHARGED");
  }
  if (IT.length) {
    IM.push("HARDER");
  }
  if (Io.length) {
    IM.push("CLEAN");
  }
  if (IM.length < 3 && !IM.includes("THICK")) {
    IM.splice(1, 0, "THICK");
  }
  let Ie = mulberry32(fnv1a(r.seed + ":perk:" + K));
  let l0 = IM.slice();
  for (let l6 = l0.length - 1; l6 > 0; l6--) {
    let l7 = Math.floor(Ie() * (l6 + 1));
    let l8 = l0[l6];
    l0[l6] = l0[l7];
    l0[l7] = l8;
  }
  let l2 = l0.slice(0, 3).sort((l9, lr) => XU.findIndex(lK => lK.id === l9) - XU.findIndex(lK => lK.id === lr));
  let l3 = IT.length ? IT[Math.floor(Ie() * IT.length)] : null;
  const l4 = {
    i: K,
    cards: l2
  };
  l4.harderChip = l3;
  return l4;
}
rS(offerFor, "offerFor");
function readHp(r) {
  if (typeof rH.hp == "number") {
    let Ie = Math.max(1, (rH.maxhp || 20) * r.maxScale);
    let l0 = Math.max(0, Math.min(1, rH.hp / Ie));
    r.hp.soul = l0;
    for (let l1 of Object.keys(r.hp.byId)) {
      r.hp.byId[l1] = Math.min(r.hp.byId[l1], l0);
    }
    r.hpView = [{
      name: "YOU",
      hp: Math.max(0, rH.hp | 0),
      max: Math.round(Ie)
    }];
    return;
  }
  let IZ = (Array.isArray(rH.char) ? rH.char : []).filter(l2 => l2 && rH.maxhp && rH.maxhp[l2] > 0);
  let IO = 0;
  let Io = 0;
  let IT = [];
  for (let l2 of IZ) {
    let l3 = rH.maxhp[l2];
    let l4 = Math.max(0, rH.hp[l2] | 0);
    r.hp.byId[String(l2)] = Math.max(0, Math.min(1, l4 / l3));
    IO += l4;
    Io += l3;
    IT.push({
      name: String(rH.charname && rH.charname[l2] || "P" + l2).toUpperCase(),
      hp: l4,
      max: l3
    });
  }
  if (Io > 0) {
    r.hp.soul = Math.max(0, Math.min(1, IO / Io));
  }
  r.hpView = IT;
}
rS(readHp, "readHp");
var XL = rS(r => Math.round(r * 10000) / 10000, "r4");
function runHpOf(r) {
  let IZ = {};
  let IO = r.maxScale > 1;
  for (let [IM, IQ] of Object.entries(r.hp.byId)) {
    IZ[IM] = XL(IQ);
    if (IQ < 1) {
      IO = true;
    }
  }
  if (r.hp.soul < 1) {
    IO = true;
  }
  if (IO) {
    return {
      s: r.maxScale,
      h: IZ,
      u: XL(r.hp.soul)
    };
  } else {
    return null;
  }
}
rS(runHpOf, "runHpOf");
var Xk = null;
var setLive = rS(() => !!Xk && !!Xk.run && current() === Xk.run && !!Xk.run.active, "setLive");
function rushSetOf(r) {
  let IO = Xq();
  let Io = [];
  try {
    Io = IO && IO.rushes ? IO.rushes() : [];
  } catch {
    Io = [];
  }
  let IT = r.join(",");
  return Io.find(l0 => l0.fights.map(l1 => l1.id).join(",") === IT) || null;
}
rS(rushSetOf, "rushSetOf");
function setLabel(r) {
  if (r.kind === "draft") {
    return "DRAFT";
  }
  let IO = rushSetOf(r.fights);
  if (IO) {
    return "RUSH " + IO.id;
  }
  let IT = playlistByIds(r.fights);
  if (IT) {
    return IT.name;
  } else {
    return "PLAYLIST";
  }
}
rS(setLabel, "setLabel");
function setSubject(r) {
  let IZ = r.kind === "draft" && !r.fights.length ? r.seed != null ? dealDraft(r.seed) : [] : r.fights;
  if (!IZ.length) {
    return "Four bosses, dealt by the seed";
  }
  let IT = IZ.map(IQ => Xg(XG(IQ)));
  let IM = plural(IZ.length, "fight") + ": " + IT.slice(0, 4).join(", ");
  if (IT.length > 4) {
    IM += " +" + (IT.length - 4);
  }
  return IM;
}
rS(setSubject, "setSubject");
function newSet(r, K) {
  if (r.kind === "draft") {
    r.fights = dealDraft(r.seed);
  }
  return {
    run: K.run(),
    api: K,
    kind: r.kind,
    spec0: normSpec({
      ...r,
      mods: {
        ...r.mods
      },
      fights: r.fights.slice(),
      picks: [],
      race: r.race
    }),
    ids: r.fights.slice(),
    i: 0,
    seed: r.seed,
    draft: r.kind === "draft" || !!r.draft,
    startMods: {
      ...r.mods
    },
    mods: {
      ...r.mods
    },
    harders: 0,
    perks: [],
    perkLog: [],
    picks: [],
    cleaned: [],
    charged: false,
    maxScale: 1,
    hp: {
      byId: {},
      soul: 1
    },
    hpView: [],
    baseRaw: 0,
    parts: [],
    splits: [],
    frames: 0,
    hits: 0,
    carryFrames: 0,
    carryHits: 0,
    between: false,
    retried: false,
    offer: null,
    idx0: -1,
    dead: null,
    label: setLabel(r)
  };
}
rS(newSet, "newSet");
var setMult = rS(r => Math.min(f3 || 6, Math.round(multOf(r.mods) * Math.pow(1.5, r.harders) * 100) / 100), "setMult");
function playIdx() {
  let IO = Xk;
  let Io = XG(IO.ids[IO.i]);
  if (!Io) {
    IO.api.end("quit");
    Xk = null;
    return false;
  }
  let IT = {};
  if (IO.draft) {
    let IQ = runHpOf(IO);
    if (IQ) {
      IT.runhp = IQ;
    }
    if (IO.charged && !rC(Io)) {
      IT.tpstart = 0.5;
    }
  }
  IO.between = false;
  IO.idx0 = IO.i;
  IO.run.base = IO.baseRaw;
  IO.run.mult = setMult(IO);
  IO.run.spec.mods = {
    ...IO.mods
  };
  return IO.api.play(Io.id, setSeed(IO.seed, IO.i), IT);
}
rS(playIdx, "playIdx");
function setFightEnded(r, K, Iu) {
  let Io = Xk;
  if (!Io || Iu.run() !== Io.run) {
    return false;
  }
  let IQ = Io.run;
  if (r === "win") {
    let Ie = turnRaw(IQ.turnLog) + 1000 + 250;
    Io.baseRaw += Ie;
    IQ.base = Io.baseRaw;
    let l0 = Io.carryFrames + (K.frames | 0);
    let l1 = Io.carryHits + (K.hits | 0);
    const l2 = {
      id: K.id,
      frames: l0,
      hits: l1
    };
    Io.splits.push(l2);
    Io.frames += K.frames | 0;
    Io.hits += K.hits | 0;
    Io.carryFrames = 0;
    Io.carryHits = 0;
    Io.parts.push({
      ...K,
      frames: l0,
      hits: l1,
      score: scoreOf({
        base: Ie,
        mult: setMult(Io)
      })
    });
    if (Io.draft) {
      readHp(Io);
    }
    Io.i++;
    if (Io.i >= Io.ids.length) {
      Io.i = Io.ids.length;
      let l3 = Iu.result("win");
      Iu.end("win", l3);
      if (Io.draft && l3 && l3.ranked) {
        let l4 = r4("achievements");
        try {
          if (l4 && l4.unlock) {
            l4.unlock("DRAFT_CLEAR");
          }
        } catch {}
      }
      Xk = null;
      return true;
    }
    Io.between = true;
    Io.offer = Io.draft ? offerFor(Io, Io.i - 1) : null;
    IQ.score = scoreOf({
      base: Io.baseRaw,
      mult: setMult(Io)
    });
    return true;
  }
  if (r === "lose") {
    if (Io.draft) {
      let l5 = Iu.result("lose");
      Iu.end("lose", l5);
      PG = {
        fightId: K.id
      };
      Xk = null;
      return true;
    }
    Io.lostPart = {
      i: Io.i,
      frames: K.frames | 0,
      hits: K.hits | 0
    };
    return false;
  }
  return false;
}
rS(setFightEnded, "setFightEnded");
function setAmend(r, K, Iu) {
  let IO = Xk && Xk.run === K ? Xk : null;
  if (!IO) {
    return;
  }
  let IT = Iu === "win";
  let IM = IT && IO.i >= IO.ids.length;
  let IQ = IM ? IO.baseRaw : IO.baseRaw + turnRaw(K.turnLog) + (IT ? 1250 : 0);
  r.score = scoreOf({
    base: IQ,
    mult: setMult(IO)
  });
  r.mult = setMult(IO);
  let Ie = r.frames | 0;
  let l0 = r.hits | 0;
  if (IM) {
    r.frames = IO.frames;
    r.hits = IO.hits;
  } else {
    r.frames = IO.frames + IO.carryFrames + Ie;
    r.hits = IO.hits + IO.carryHits + l0;
  }
  r.fights = IO.parts.slice();
  r.spec.fights = IO.ids.slice();
  r.spec.mods = {
    ...IO.startMods
  };
  r.spec.picks = IO.picks.slice();
  r.spec.draft = IO.draft;
  r.modsPlayed = {
    ...IO.mods
  };
  r.perks = IO.perks.map(l6 => perkById(l6).name);
  r.splits = IO.splits.map(l6 => l6.frames);
  if (IO.retried) {
    if (!r.reasons.includes("retried")) {
      r.reasons.push("retried");
    }
    r.ranked = false;
  }
  let l1 = IO.ids.length;
  let l2 = Math.min(l1, IO.i + (IM ? 0 : 1));
  let l3 = IO.kind === "draft" ? "DRAFT CLEAR" : /^RUSH /.test(IO.label) ? "RUSH CLEAR" : "PLAYLIST CLEAR";
  r.verdict = IM ? l3 : "RUN OVER " + l2 + "/" + l1;
  r.subject = IO.label;
  r.chapterLine = setSubject({
    kind: IO.kind,
    fights: IO.ids,
    seed: IO.seed
  });
  r.lines = [];
  if (IO.draft && !IM) {
    r.lines.push({
      text: "A draft is one life.",
      col: XN.dim
    });
  }
  if (IO.perkLog.length) {
    r.lines.push({
      text: "Perks: " + IO.perkLog.map(l6 => perkById(l6.id).name + (l6.chip && l6.id === "HARDER" ? " +" + chipLabel(f5.find(l7 => l7.id === l6.chip), 1) : l6.chip ? " -" + chipLabel(f5.find(l7 => l7.id === l6.chip), 1) : "")).join(", "),
      col: XN.dim
    });
  }
  for (let l6 of IO.extra || []) {
    r.lines.push(l6);
  }
  if (IO.cleaned.length) {
    r.cleaned = IO.cleaned.slice();
  }
}
rS(setAmend, "setAmend");
const Xe = {
  owner: XK,
  priority: -2
};
rK("menuDraw", () => {
  if (!Xf().getState || Xf().getState() === "menu") {
    PG = null;
    if (Xk && !setLive()) {
      Xk = null;
      return;
    }
    if (!!Xk && !!Xk.between && !T()) {
      if (Xk.draft) {
        openPickOne();
      } else {
        openNextCard();
      }
    }
  }
}, Xe);
function openNextCard() {
  let IZ = Xk;
  let IO = Xq();
  let Io = XG(IZ.ids[IZ.i]);
  let IT = [{
    text: IZ.i + " / " + IZ.ids.length + " CLEARED    " + fmtTime(IZ.frames) + "    " + plural(IZ.hits, "hit"),
    col: XN.text
  }, {
    text: "score " + fN(IZ.run.score) + (modsText(IZ.mods) ? "   " + modsText(IZ.mods) + "  " + multText(setMult(IZ)) : ""),
    col: modsText(IZ.mods) ? XN.warn : XN.dim
  }, {
    text: "NEXT: " + Xg(Io),
    col: XN.select
  }];
  let IM = () => {
    if (Xk === IZ && setLive()) {
      playIdx();
    }
  };
  let IQ = () => {
    if (Xk === IZ) {
      IZ.api.end("quit");
      Xk = null;
    }
  };
  IZ.between = "card";
  if (IO && IO.openCard) {
    IO.openCard({
      id: "runmodes:next",
      title: IZ.label,
      lines: IT,
      autoMs: 3000,
      buttons: [{
        label: "CONTINUE",
        run: IM
      }, {
        label: "QUIT",
        run: IQ
      }],
      cancel: 1
    });
  } else {
    IM();
  }
}
rS(openNextCard, "openNextCard");
const P1 = {
  sel: 1,
  buf: 3,
  frame: 0,
  rects: [],
  strip: false,
  chip: 0
};
var P2 = P1;
function perkApply(r, K, Iu) {
  if (K === "PATCHUP") {
    for (let IQ of Object.keys(r.hp.byId)) {
      r.hp.byId[IQ] = Math.min(1, r.hp.byId[IQ] + 0.6);
    }
    r.hp.soul = Math.min(1, r.hp.soul + 0.6);
  } else if (K === "THICK") {
    r.maxScale = Math.min(XJ, Math.round(r.maxScale * 1.2 * 100) / 100);
  } else if (K === "CHARGED") {
    r.charged = true;
  } else if (K === "HARDER") {
    r.harders++;
    if (Iu) {
      r.mods[Iu] = 1;
    }
  } else if (K === "CLEAN" && Iu) {
    delete r.mods[Iu];
    r.cleaned.push(Iu);
  }
  r.perks.push(K);
  r.perkLog.push({
    id: K,
    chip: (K === "HARDER" || K === "CLEAN") && Iu || null
  });
}
rS(perkApply, "perkApply");
function takePerk(r, K) {
  let Io = Xk;
  if (!Io || !Io.offer) {
    return;
  }
  let IT = Io.offer.cards[r];
  if (IT === "CLEAN" && !K && f5.filter(IQ => Io.mods[IQ.id]).map(IQ => IQ.id).length) {
    P2.strip = true;
    P2.chip = 0;
    XP("snd_select");
    return;
  }
  XP("snd_select");
  Io.picks.push(r);
  perkApply(Io, IT, IT === "HARDER" ? Io.offer.harderChip : K);
  Io.offer = null;
  a("runmodes:pickone");
  playIdx();
}
rS(takePerk, "takePerk");
function pickOneLines(r) {
  return r.offer.cards.map(Io => {
    let Ie = perkById(Io);
    return Ie.name + " - " + (Ie.line.charAt(0).toLowerCase() + Ie.line.slice(1)).replace(/\.$/, "") + (Io === "HARDER" && r.offer.harderChip ? " (" + chipLabel(f5.find(l0 => l0.id === r.offer.harderChip), 1) + ")" : "");
  });
}
rS(pickOneLines, "pickOneLines");
function openPickOne() {
  let IZ = Xk;
  if (!IZ.offer) {
    IZ.offer = offerFor(IZ, IZ.i - 1);
  }
  P2.sel = 1;
  P2.buf = 3;
  P2.frame = 0;
  P2.strip = false;
  P2.chip = 0;
  IZ.between = "pick";
  Z({
    id: "runmodes:pickone",
    owner: XK,
    draw: drawPickOne,
    step: stepPickOne,
    onPointer: pointerPickOne,
    touchRows: touchPickOne,
    onKey: (Io, IT) => IT === "Escape" ? (P2.strip && (P2.strip = false, XP("snd_menumove")), true) : false
  });
  XP("snd_menumove", 0.15);
}
rS(openPickOne, "openPickOne");
function stripChips(r) {
  return f5.filter(IZ => r.mods[IZ.id]);
}
rS(stripChips, "stripChips");
function stepPickOne() {
  P2.frame++;
  if (P2.buf > 0) {
    P2.buf--;
    return;
  }
  let IO = Xk;
  if (!IO || !IO.offer) {
    a("runmodes:pickone");
    return;
  }
  if (P2.strip) {
    let Ie = stripChips(IO);
    if (rB()) {
      P2.chip = (P2.chip + Ie.length - 1) % Ie.length;
      XP("snd_menumove");
    } else if (rL()) {
      P2.chip = (P2.chip + 1) % Ie.length;
      XP("snd_menumove");
    } else if (rp()) {
      takePerk(P2.sel, Ie[P2.chip].id);
    } else if (rU()) {
      P2.strip = false;
      XP("snd_menumove");
    }
    return;
  }
  let Io = IO.offer.cards.length;
  if (rB()) {
    P2.sel = (P2.sel + Io - 1) % Io;
    XP("snd_menumove");
  } else if (rL()) {
    P2.sel = (P2.sel + 1) % Io;
    XP("snd_menumove");
  } else if (rp()) {
    takePerk(P2.sel);
  }
}
rS(stepPickOne, "stepPickOne");
function pointerPickOne(r) {
  let IZ = P2.rects.find(IO => r.x >= IO.x && r.y >= IO.y && r.x < IO.x + IO.w && r.y < IO.y + IO.h);
  if (IZ) {
    IZ.fn();
  }
  return true;
}
rS(pointerPickOne, "pointerPickOne");
var Pr = 168;
var PK = 172;
var PN = 16;
var Pf = 120;
function drawPickOne(r) {
  let IZ = Xk;
  if (!IZ || !IZ.offer) {
    return;
  }
  P2.rects = [];
  let IO = 24;
  let Io = 24;
  let IT = 616;
  let IM = 456;
  rx(r, IO, Io, IT, IM);
  r.draw_set_font("fnt_mainbig");
  r.draw_text(56, Io + 16, "PICK ONE", XN.select);
  r.draw_set_font("fnt_main");
  let IQ = XG(IZ.ids[IZ.i]);
  r.draw_set_halign("right");
  r.draw_text(584, Io + 26, "next  " + (IZ.i + 1) + "/" + IZ.ids.length + "  " + XI(r, Xg(IQ), 190), XN.text);
  r.draw_set_halign("left");
  let Ie = 56;
  let l0 = Io + 62;
  for (let l8 of IZ.hpView.slice(0, 4)) {
    let l9 = l8.name + " " + l8.hp + "/" + l8.max;
    r.draw_text(Ie, l0, l9, l8.hp * 4 < l8.max ? XN.warn : XN.text);
    Ie += r.string_width(l9, "fnt_main") + 18;
  }
  r.draw_set_halign("right");
  r.draw_text(584, l0, "score " + fN(IZ.run.score), XN.dim);
  r.draw_set_halign("left");
  let l3 = IZ.offer.cards;
  let l4 = l3.length;
  let l5 = Math.round(320 - (l4 * Pr + (l4 - 1) * PN) / 2);
  for (let lr = 0; lr < l4; lr++) {
    let lK = perkById(l3[lr]);
    let lN = l5 + lr * (Pr + PN);
    let lf = lr * 1.35;
    if (!!motion() && !(P2.frame >= lf)) {
      continue;
    }
    let lq = motion() ? Math.round((1 - outCubic((P2.frame - lf) / 4)) * 8) : 0;
    let lX = lr === P2.sel;
    let lP = Pf + lq - (lX ? 4 : 0);
    if (lX) {
      rx(r, lN - 6, lP - 6, lN + Pr + 6, lP + PK + 6);
    } else {
      rF(r, lN, lP, lN + Pr, lP + PK);
      if (hovering(lN, lP, Pr, PK)) {
        r.ctx.fillStyle = XN.hover;
        r.ctx.fillRect(lN + 1, lP + 1, Pr - 2, PK - 2);
      }
    }
    let lF = lN + 18;
    let lc = lP + 18;
    s(r, lK.icon, lF, lc, 3, lX ? XN.select : XN.text);
    r.draw_text(lF, lc + 40, lK.name, lX ? XN.select : XN.text);
    Xl(r, lK.line, Pr - 36, 3).forEach((lx, lG) => r.draw_text(lF, lc + 66 + lG * 18, lx, XN.dim));
    if (lK.id === "HARDER" && IZ.offer.harderChip) {
      let lx = f5.find(lG => lG.id === IZ.offer.harderChip);
      r.draw_text(lF, lc + 66 + 54 + 2, "+ " + chipLabel(lx, 1), XN.warn);
    }
    if (lK.id === "CLEAN" && lX && P2.strip) {
      drawStrip(r, IZ, lN, lP);
    }
    P2.rects.push({
      x: lN,
      y: lP,
      w: Pr,
      h: PK,
      fn: () => {
        if (!P2.strip || lr !== P2.sel) {
          P2.strip = false;
          if (P2.sel !== lr) {
            P2.sel = lr;
            XP("snd_menumove");
          } else {
            takePerk(lr);
          }
        }
      }
    });
  }
  let l6 = l5 + P2.sel * (Pr + PN) + Pr / 2 - 8;
  heart(r, Math.round(l6), Pf + PK + 12);
  if (IZ.perks.length) {
    r.draw_text(56, 348, "Perks so far:", XN.dim);
    r.draw_text(56 + r.string_width("Perks so far:  ", "fnt_main"), 348, XI(r, IZ.perks.map(lG => perkById(lG).name).join(", "), 440), XN.text);
  }
  let l7 = modsText(IZ.mods);
  if (l7) {
    r.draw_text(56, 370, XI(r, l7, 440), XN.warn);
    r.draw_text(56 + Math.min(440, r.string_width(l7, "fnt_main")) + 12, 370, multText(setMult(IZ)), XN.text);
  }
  if (O()) {
    XD(r, 56, IM - 44, [["TAP", P2.strip ? "the modifier to take off" : "a card, TAP it again to take it"]]);
  } else if (P2.strip) {
    XD(r, 56, IM - 44, [["LEFT/RIGHT", "modifier"], ["Z", "take it off"], ["X", "back"]]);
  } else {
    XD(r, 56, IM - 44, [["LEFT/RIGHT", "choose"], ["Z", "take"]]);
  }
}
rS(drawPickOne, "drawPickOne");
function drawStrip(r, K, Iu, IZ) {
  let IM = stripChips(K);
  let IQ = IZ + PK - 30;
  r.ctx.fillStyle = XN.solid;
  r.ctx.fillRect(Iu + 12, IQ - 4, Pr - 24, 24);
  let Ie = Iu + 16;
  IM.forEach((l1, l2) => {
    let l3 = chipLabel(l1, K.mods[l1.id]);
    let l4 = r.string_width(l3, "fnt_main");
    if (Ie + l4 > Iu + Pr - 14) {
      return;
    }
    let l8 = l2 === P2.chip;
    if (l8) {
      r.ctx.strokeStyle = XN.select;
      r.ctx.lineWidth = 1;
      r.ctx.strokeRect(Ie - 2.5, IQ - 2.5, l4 + 5, 20);
    }
    r.draw_text(Ie, IQ, l3, l8 ? XN.select : XN.warn);
    P2.rects.unshift({
      x: Ie - 3,
      y: IQ - 4,
      w: l4 + 6,
      h: 24,
      fn: () => {
        P2.chip = l2;
        takePerk(P2.sel, l1.id);
      }
    });
    Ie += l4 + 10;
  });
}
rS(drawStrip, "drawStrip");
function touchPickOne() {
  let Iu = Xk;
  if (!Iu || !Iu.offer) {
    return null;
  }
  if (P2.strip) {
    let IT = stripChips(Iu);
    return {
      key: "runmodes:pickone:strip",
      title: "CLEAN SLATE",
      close: () => {
        P2.strip = false;
      },
      note: "Take one modifier off.",
      rows: IT.map((IM, IQ) => ({
        label: chipLabel(IM, Iu.mods[IM.id]),
        sel: IQ === P2.chip,
        act: () => {
          P2.chip = IQ;
          takePerk(P2.sel, IM.id);
        }
      }))
    };
  }
  let IZ = XG(Iu.ids[Iu.i]);
  return {
    key: "runmodes:pickone",
    title: "PICK ONE",
    close: false,
    note: "Pick one: " + pickOneLines(Iu).join("; ") + ".\nnext " + (Iu.i + 1) + "/" + Iu.ids.length + " " + Xg(IZ) + "   score " + fN(Iu.run.score) + (Iu.hpView.length ? "\n" + Iu.hpView.map(IM => IM.name + " " + IM.hp + "/" + IM.max).join("   ") : ""),
    rows: Iu.offer.cards.map((IM, IQ) => {
      let l3 = perkById(IM);
      return {
        label: l3.name,
        meta: l3.line,
        sel: IQ === P2.sel,
        act: () => {
          P2.sel = IQ;
          takePerk(IQ);
        }
      };
    })
  };
}
rS(touchPickOne, "touchPickOne");
function setKind(r) {
  return {
    label: Io => r === "draft" ? "DRAFT" : setLabel(Io),
    subject: Io => setSubject(Io),
    target: Io => r === "draft" ? "DRAFT" : Io.fights.join("+"),
    start: (Io, IT) => {
      Xk = newSet(Io, IT);
      if (!Xk.ids.length) {
        IT.end("quit");
        Xk = null;
        rN("No fights to play", {
          kind: "error"
        });
        return;
      }
      rememberOpts(Io);
      playIdx();
    },
    fightEnded: setFightEnded,
    between: Io => !!Xk && Xk.run === Io && !!Xk.between,
    amend: setAmend,
    check: Io => {
      if (r !== "draft") {
        return "";
      }
      let Ie = dealDraft(Io.seed);
      if (!Ie.length || Ie.join(",") !== Io.fights.join(",")) {
        return "damaged";
      } else if (Io.picks.length <= Ie.length - 1) {
        return "";
      } else {
        return "damaged";
      }
    }
  };
}
rS(setKind, "setKind");
registerKind("draft", setKind("draft"));
registerKind("playlist", setKind("playlist"));
registerKind("daily", {
  label: rS(r => "DAILY", "label"),
  subject: rS(r => {
    let Io = XG(r.fights[0]);
    return [Xg(Io), Io && Io.game === "undertale" ? "UNDERTALE" : Io && Io.chapter != null ? "Chapter " + Io.chapter : "", r.date || ""].filter(Boolean).join("  -  ");
  }, "subject"),
  target: rS(r => r.date || r.fights[0] || "?", "target"),
  start: rS((r, K) => {
    let IO = Xq();
    if (IO && IO.dailyBegin) {
      IO.dailyBegin(r);
    }
    K.play(r.fights[0], r.seed, {});
  }, "start"),
  canUse: rS(r => r === "LONGTURNS" || r === "ONEHIT" ? "The daily keeps its own twist." : "", "canUse")
});
registerKind("gauntlet", {
  label: rS(r => r.gauntlet && r.gauntlet.len === "ENDLESS" ? "ENDLESS" : "GAUNTLET", "label"),
  subject: rS(r => {
    let IO = Xq();
    let Io = r.gauntlet || {};
    return "GAUNTLET  " + (IO && IO.gauntletSetLabel ? IO.gauntletSetLabel(Io.set) : Io.set) + (r.fights[0] ? "  -  " + Xg(XG(r.fights[0])) : "") + (Io.len === "ENDLESS" ? "  -  ENDLESS" : "");
  }, "subject"),
  target: rS(r => {
    let IO = r.gauntlet || {};
    return (IO.set || "CUSTOM") + (r.fights[0] ? ":" + r.fights[0] : "") + "|" + (IO.len || "ALL");
  }, "target"),
  start: rS((r, K) => {
    let IT = Xq();
    if (!IT || !IT.startGauntletRun || !IT.startGauntletRun(r, K)) {
      K.end("quit");
    }
  }, "start"),
  fightEnded: rS(() => true, "fightEnded"),
  canUse: rS((r, K) => r === "SPEED" && K.gauntlet && K.gauntlet.len === "ENDLESS" ? "Endless already speeds up." : r === "ONEHIT" && K.gauntlet && K.gauntlet.len === "ENDLESS" ? "Endless is already one life." : "", "canUse"),
  amend: rS((r, K, Iu) => {
    let IT = Xq();
    if (IT && IT.gauntletAmend) {
      IT.gauntletAmend(r, K, Iu);
    }
  }, "amend"),
  check: rS(r => {
    let IZ = Xq();
    let IO = r.gauntlet || {};
    let Io = [];
    try {
      Io = IZ && IZ.gauntletSets ? IZ.gauntletSets() : [];
    } catch {
      Io = [];
    }
    if (Io.some(l2 => l2.id === IO.set)) {
      if (IO.set === "CUSTOM" ? r.fights.length !== 1 : r.fights.length !== 0) {
        return "damaged";
      } else {
        return "";
      }
    } else {
      return "nofight";
    }
  }, "check")
});
const Px = {
  owner: XK,
  priority: 30
};
rK("fightStart", (r, K) => {
  if (!Xk || !setLive() || !K || !K.fight) {
    return;
  }
  let Io = Xk.lostPart;
  if (Io && Io.i === Xk.i && K.fight.id === Xk.ids[Xk.i]) {
    Xk.lostPart = null;
    Xk.retried = true;
    Xk.carryFrames += Io.frames;
    Xk.carryHits += Io.hits;
  }
}, Px);
var PG = null;
var Pg = false;
const Pz = {
  owner: XK,
  priority: 60
};
rK("fightStart", (r, K) => {
  let IT = PG;
  PG = null;
  if (IT && K && K.fight && K.fight.id === IT.fightId && !live()) {
    Pg = true;
  }
}, Pz);
const PC = {
  owner: XK,
  priority: 300
};
rK("beforeTick", () => {
  if (!Pg) {
    return false;
  }
  Pg = false;
  try {
    if (Xf().toMenu) {
      Xf().toMenu();
    }
  } catch {}
  return true;
}, PC);
const Py = {
  owner: XK,
  priority: 90
};
rK("fightStart", (r, K) => {
  let IO = K && K.fight;
  if (!IO || !rC(IO)) {
    return;
  }
  let Io = Xf().getSetup ? Xf().getSetup() : null;
  let IT = Io && Io.cfg && Io.cfg.runhp;
  if (IT && typeof IT == "object") {
    ry(IT);
  }
}, Py);
function PV() {
  if (!Xk || !setLive()) {
    return null;
  }
  let IO = Xk;
  let Io = rf;
  let IT = !!Io && !!Io.active && !Io.result && !!Xf().getState && Xf().getState() === "battle" && !IO.between;
  let IM = IT ? Math.max(0, rj.frame - Io.startFrame) : 0;
  let IQ = IT ? Io.hits | 0 : 0;
  let Ie = best(bucketOf({
    kind: IO.kind,
    fights: IO.kind === "draft" ? [] : IO.ids,
    mods: IO.startMods,
    draft: IO.draft
  }));
  let l0 = IO.hpView;
  if (IT && IO.draft) {
    if (typeof rH.hp == "number") {
      l0 = [{
        name: "YOU",
        hp: rH.hp | 0,
        max: rH.maxhp | 0
      }];
    } else {
      l0 = (rH.char || []).filter(l1 => l1 && rH.maxhp && rH.maxhp[l1] > 0).map(l1 => ({
        name: String(rH.charname && rH.charname[l1] || "P" + l1).toUpperCase(),
        hp: Math.max(0, rH.hp[l1] | 0),
        max: rH.maxhp[l1]
      }));
    }
  }
  return {
    kind: "rush",
    set: IO.label,
    label: IO.label,
    title: IO.label,
    index: Math.min(IO.i, IO.ids.length - 1),
    count: IO.ids.length,
    fights: IO.ids.map(l1 => ({
      id: l1,
      name: Xg(XG(l1))
    })),
    splits: IO.splits.map(l1 => ({
      ...l1
    })),
    live: IT,
    cur: {
      frames: IO.carryFrames + IM,
      hits: IO.carryHits + IQ,
      retried: IO.retried
    },
    total: IO.frames + IO.carryFrames + IM,
    hits: IO.hits + IO.carryHits + IQ,
    pb: Ie ? {
      frames: Ie.frames,
      hits: Ie.hits,
      splits: null,
      clean: true
    } : null,
    assisted: IO.retried || Io && Io.assisted && Io.assisted.size > 0,
    run: {
      score: IO.run.score,
      mult: setMult(IO),
      mods: modsText(IO.mods),
      perks: IO.perks.map(l1 => perkById(l1).name),
      hp: IO.draft ? l0 : null
    }
  };
}
rS(PV, "view");
var PA = 8;
var PI = 20;
var rdb = rS(() => {
  let K = r4("runs");
  if (K && K.store) {
    return K.store();
  } else {
    return {
      playlists: []
    };
  }
}, "rdb");
var rsave = rS(() => {
  let IO = r4("runs");
  if (IO && IO.saveStore) {
    IO.saveStore();
  }
}, "rsave");
function playlists() {
  let Iu = rdb();
  return (Array.isArray(Iu.playlists) ? Iu.playlists : []).filter(Io => Io && Array.isArray(Io.ids)).slice(0, PA);
}
rS(playlists, "playlists");
var playlistById = rS(r => playlists().find(K => K.id === r) || null, "playlistById");
function playlistByIds(r) {
  let Iu = r.join(",");
  return playlists().find(IT => IT.ids.join(",") === Iu) || null;
}
rS(playlistByIds, "playlistByIds");
function autoName(r, K = null) {
  let IZ = XG(r[0]);
  let IO = Xg(IZ) + (r.length > 1 ? " +" + (r.length - 1) : "");
  let Io = new Set(playlists().filter(Ie => Ie.id !== K).map(Ie => Ie.name));
  if (!Io.has(IO)) {
    return IO;
  }
  for (let Ie = 2; Ie < 99; Ie++) {
    if (!Io.has(IO + " " + Ie)) {
      return IO + " " + Ie;
    }
  }
  return IO;
}
rS(autoName, "autoName");
function newId() {
  let Iu = new Set(playlists().map(Io => Io.id));
  for (let Io = 0; Io < 50; Io++) {
    let IT = Math.floor(Math.random() * 2176782336).toString(36).padStart(6, "0").slice(-6);
    if (!Iu.has(IT)) {
      return IT;
    }
  }
  return String(Date.now() % 2176782336).padStart(6, "0").slice(-6);
}
rS(newId, "newId");
function savePlaylist(r, K = null) {
  let IO = rdb();
  if (!Array.isArray(IO.playlists)) {
    IO.playlists = [];
  }
  r = r.filter(IQ => XG(IQ)).slice(0, PI);
  let IM = K ? IO.playlists.find(IQ => IQ.id === K) : null;
  if (IM) {
    IM.ids = r;
    IM.name = autoName(r, IM.id);
    IM.at = Date.now();
  } else {
    if (IO.playlists.length >= PA) {
      return null;
    }
    const IQ = {
      mods: {},
      draft: false
    };
    IM = {
      id: newId(),
      name: autoName(r),
      ids: r,
      opts: IQ,
      at: Date.now()
    };
    IO.playlists.push(IM);
  }
  rsave();
  return IM;
}
rS(savePlaylist, "savePlaylist");
function deletePlaylist(r) {
  let Iu = rdb();
  let IZ = (Iu.playlists || []).length;
  Iu.playlists = (Iu.playlists || []).filter(IM => IM.id !== r);
  if (Iu.playlists.length !== IZ) {
    rsave();
    return true;
  } else {
    return false;
  }
}
rS(deletePlaylist, "deletePlaylist");
function rememberOpts(r) {
  const Iu = {
    ...r.mods
  };
  const IZ = {
    mods: Iu
  };
  IZ.draft = !!r.draft;
  let Io = IZ;
  if (r.kind === "draft") {
    const l0 = {
      mods: Io.mods
    };
    r7(XK, "draft", l0);
    return;
  }
  let IT = playlistByIds(r.fights);
  if (IT) {
    {
      IT.opts = Io;
      rsave();
      return;
    }
  }
  let Ie = rushSetOf(r.fights);
  if (Ie) {
    r7(XK, "rush:" + Ie.id, Io);
  }
}
rS(rememberOpts, "rememberOpts");
function linkedIds(r) {
  let IO = r.filter(IM => XG(IM));
  let Io = r.filter(IM => !XG(IM));
  if (Io.length) {
    rN(IO.length ? "Not in this version: " + Io.slice(0, 3).join(", ") + (Io.length > 3 ? " +" + (Io.length - 3) : "") : "None of these fights are in this version.", {
      kind: IO.length ? "warn" : "error",
      ms: 5000
    });
  }
  return IO;
}
rS(linkedIds, "linkedIds");
function draftRow() {
  let Iu = () => {
    let IQ = runcardSpec();
    if (IQ) {
      IQ.draft = !IQ.draft;
    }
  };
  return {
    label: "Draft picks",
    value: () => {
      let Ie = runcardSpec();
      if (Ie && Ie.draft) {
        return "ON";
      } else {
        return "OFF";
      }
    },
    step: Iu,
    onZ: Iu,
    line: "Pick 1 of 3 perks between fights. HP carries over."
  };
}
rS(draftRow, "draftRow");
var runcardSpec = rS(() => {
  let K = r4("runcard");
  let Iu = K && K.state ? K.state() : null;
  if (Iu && Iu.spec) {
    return Iu.spec;
  } else {
    return null;
  }
}, "runcardSpec");
function openSetRun(r, K = {}) {
  let Io = r4("runs");
  if (!Io || !Io.openRun) {
    return false;
  }
  let IM = K.playlistId || null;
  let IQ = IM ? (playlistById(IM) || {}).opts : K.rushId ? r5(XK, "rush:" + K.rushId, null) : null;
  let Ie = {
    kind: "playlist",
    fights: r.slice(),
    mods: IQ && IQ.mods ? {
      ...IQ.mods
    } : {},
    draft: !!IQ && !!IQ.draft,
    seed: null
  };
  let l0 = [];
  if (IM) {
    l0.push({
      label: "Fights",
      value: () => {
        let l5 = playlistById(IM);
        if (l5) {
          return l5.ids.map(l6 => Xg(XG(l6))).join(", ");
        } else {
          return "";
        }
      },
      onZ: () => {
        a("runs:run");
        openPickFights(IM);
      },
      line: "Z changes the fights."
    });
  }
  l0.push(draftRow());
  return Io.openRun(Ie, {
    rows: l0
  });
}
rS(openSetRun, "openSetRun");
function openDraftRun() {
  let IZ = r4("runs");
  if (!IZ || !IZ.openRun) {
    return false;
  }
  let Io = r5(XK, "draft", null);
  const IT = {
    kind: "draft",
    fights: [],
    mods: Io && Io.mods ? {
      ...Io.mods
    } : {},
    seed: null
  };
  const IM = {
    rows: []
  };
  return IZ.openRun(IT, IM);
}
rS(openDraftRun, "openDraftRun");
function startDraft() {
  let IO = r4("runs");
  if (!IO) {
    return false;
  }
  let Io = r5(XK, "draft", null);
  closeHubs();
  return IO.start({
    kind: "draft",
    fights: [],
    mods: Io && Io.mods ? Io.mods : {},
    seed: null
  });
}
rS(startDraft, "startDraft");
function playPlaylist(r) {
  let IO = playlistById(r);
  let Io = r4("runs");
  if (!IO || !Io) {
    return false;
  }
  let IT = linkedIds(IO.ids);
  if (IT.length) {
    closeHubs();
    return Io.start({
      kind: "playlist",
      fights: IT,
      mods: IO.opts && IO.opts.mods || {},
      draft: !!IO.opts && !!IO.opts.draft,
      seed: null
    });
  } else {
    return false;
  }
}
rS(playPlaylist, "playPlaylist");
function closeHubs() {
  let IO = r4("hub");
  try {
    if (IO && IO.closeAll) {
      IO.closeAll();
    }
  } catch {}
}
rS(closeHubs, "closeHubs");
var PL = null;
function openPickFights(r = null) {
  let Iu = Xf();
  let IZ = Iu.menu;
  if (!IZ) {
    rN("PICK FIGHTS needs the fight list", {
      kind: "error"
    });
    return false;
  }
  let IO = r ? playlistById(r) : null;
  if (!IO && playlists().length >= PA) {
    rN("8 is the most - empty one to delete it.", {
      kind: "warn"
    });
    return false;
  }
  for (closeHubs(); o();) {
    a();
  }
  if (Iu.getState && Iu.getState() === "battle" && Iu.toMenu) {
    Iu.toMenu();
  }
  PL = {
    editId: IO ? IO.id : null,
    ids: IO ? IO.ids.slice() : [],
    confirm: false
  };
  IZ.listMode = {
    title: "PICK FIGHTS",
    count: () => plural(PL ? PL.ids.length : 0, "fight"),
    glyph: IQ => {
      if (!PL) {
        return "";
      }
      let l2 = [];
      PL.ids.forEach((l3, l4) => {
        if (l3 === IQ.id) {
          l2.push(l4 + 1);
        }
      });
      return l2.join(" ");
    },
    onPick: IQ => pfPick(IQ),
    onEnter: () => pfDone(),
    onBack: () => pfBack(),
    get footer() {
      if (PL && PL.confirm) {
        return [["", "Delete " + PL.confirm + "?"], ["Z", "yes"], ["X", "no"]];
      } else {
        return [["Z", "add/remove"], ["ENTER", "done"], ["X", "cancel"]];
      }
    },
    lines: () => pfLines()
  };
  IZ.menuno = 0;
  IZ.submenu = 0;
  IZ.zone = "list";
  IZ.buf = 3;
  IZ.fightsel = 0;
  IZ.ftop = 0;
  IZ.searching = false;
  IZ.search = "";
  XP("snd_select");
  return true;
}
rS(openPickFights, "openPickFights");
function pfLines() {
  if (!PL) {
    return [];
  }
  if (PL.confirm) {
    return ["Every fight is out: ENTER deletes " + PL.confirm + ".", "Z yes, X no."];
  }
  if (!PL.ids.length) {
    return [PL.editId ? "No fights left. ENTER deletes this playlist." : "Z adds the fight under the SOUL.", "ENTER saves the playlist and opens RUN."];
  }
  let IO = PL.ids.map((IQ, Ie) => Ie + 1 + " " + Xg(XG(IQ)));
  let Io = [];
  let IT = "";
  for (let IQ of IO) {
    let l0 = IT ? IT + "  " + IQ : IQ;
    if (l0.length > 58 && IT) {
      Io.push(IT);
      IT = IQ;
    } else {
      IT = l0;
    }
  }
  if (IT) {
    Io.push(IT);
  }
  if (Io.length > 3) {
    Io.length = 3;
    Io[2] = Io[2].slice(0, 54) + " ...";
  }
  return Io;
}
rS(pfLines, "pfLines");
function pfPick(r) {
  if (!PL) {
    return;
  }
  if (PL.confirm) {
    let IT = PL.editId;
    let IM = PL.confirm;
    deletePlaylist(IT);
    pfExit();
    rN("Deleted " + IM, {
      kind: "info"
    });
    return;
  }
  if (!encounter(r)) {
    XP("snd_error");
    rN("Only encounters go in a playlist.", {
      kind: "warn"
    });
    return;
  }
  let Io = PL.ids.lastIndexOf(r.id);
  if (Io >= 0) {
    PL.ids.splice(Io, 1);
    XP("snd_menumove");
    if (O()) {
      rN("Took out " + r.name, {
        ms: 1200
      });
    }
    return;
  }
  if (PL.ids.length >= PI) {
    XP("snd_error");
    rN("A playlist holds 20 fights.", {
      kind: "warn"
    });
    return;
  }
  PL.ids.push(r.id);
  XP("snd_select");
  if (O()) {
    rN("Added " + r.name + " as number " + PL.ids.length, {
      ms: 1200
    });
  }
}
rS(pfPick, "pfPick");
function pfDone() {
  if (!PL || PL.confirm) {
    return;
  }
  if (!PL.ids.length) {
    {
      if (PL.editId) {
        {
          let IM = playlistById(PL.editId);
          PL.confirm = IM ? IM.name : "this playlist";
          XP("snd_menumove");
          return;
        }
      }
      pfExit();
      return;
    }
  }
  let IZ = savePlaylist(PL.ids, PL.editId);
  pfExit();
  if (!IZ) {
    rN("8 is the most - empty one to delete it.", {
      kind: "warn"
    });
    return;
  }
  const Io = {
    kind: "ok",
    ms: 1500
  };
  rN("Saved " + IZ.name, Io);
  openSetRun(IZ.ids, {
    playlistId: IZ.id
  });
}
rS(pfDone, "pfDone");
function pfBack() {
  if (PL) {
    if (PL.confirm) {
      PL.confirm = false;
      XP("snd_menumove");
      return;
    }
    pfExit();
  }
}
rS(pfBack, "pfBack");
function pfExit() {
  let Iu = Xf().menu;
  if (Iu) {
    Iu.listMode = null;
    Iu.buf = 3;
  }
  PL = null;
}
rS(pfExit, "pfExit");
var pickFightsOpen = rS(() => !!PL, "pickFightsOpen");
function rushTiles(r) {
  let IO = r && r.state === "battle";
  let Io = r4("runs");
  let IT = IO ? " Leaves this fight." : "";
  let IM = [];
  let IQ = r5(XK, "draft", null);
  let Ie = IQ && IQ.mods ? modsText(normMods(IQ.mods)) : "";
  IM.push({
    id: "rush:draft",
    name: "DRAFT",
    icon: "dice",
    avail: !!Io,
    value: Ie || "4 bosses",
    desc: "Four bosses dealt by the seed. Between fights, pick one of three perks. HP carries, one life." + IT,
    use: () => startDraft(),
    alt: () => openDraftRun(),
    altLabel: "options"
  });
  let l0 = playlists().length >= PA;
  IM.push({
    id: "rush:newplaylist",
    name: "NEW PLAYLIST",
    icon: "list",
    avail: !!Io && !l0,
    value: l0 ? "8 of 8" : "",
    desc: l0 ? "8 is the most - empty one to delete it." : "Pick your own fights from the list, in your order." + IT,
    use: () => openPickFights(),
    keepOpen: false
  });
  for (let l2 of playlists()) {
    IM.push({
      id: "rush:pl:" + l2.id,
      name: l2.name,
      icon: "play",
      avail: !!Io,
      value: plural(l2.ids.length, "fight") + (l2.opts && l2.opts.draft ? "  draft" : ""),
      desc: l2.ids.map(l3 => Xg(XG(l3))).join(", ") + "." + IT,
      use: () => playPlaylist(l2.id),
      alt: () => openSetRun(l2.ids, {
        playlistId: l2.id
      }),
      altLabel: "options"
    });
  }
  return IM;
}
rS(rushTiles, "rushTiles");
function openRushSetRun(r) {
  let Iu = Xq();
  let IZ = Iu && Iu.rushes ? (Iu.rushes() || []).find(IM => IM.id === r) : null;
  if (IZ) {
    return openSetRun(IZ.fights.map(IM => IM.id), {
      rushId: IZ.id
    });
  } else {
    return false;
  }
}
rS(openRushSetRun, "openRushSetRun");
e["practice.showme"] = e["practice.showme"] || "soul";
B({
  id: "practice.showme",
  name: "SHOW ME",
  group: "practice",
  icon: "soul",
  states: ["practice"],
  keywords: "autoplay watch demo how dodge",
  desc: "Autoplay plays the next loop of this attack, then it is yours again.",
  available: rS(() => {
    let IZ = Xq();
    return !!IZ && !!IZ.showMeNext && !!IZ.active && IZ.active() === "practice";
  }, "available"),
  onUse: rS(() => {
    let Iu = Xq();
    if (Iu && Iu.showMeNext) {
      Iu.showMeNext();
    }
  }, "onUse")
});
M({
  id: "runmodes:draft",
  title: "Draft rush",
  group: "CHALLENGE",
  keywords: "draft perks bosses pick one run",
  states: ["menu", "battle"],
  owner: XK,
  when: rS(() => !!r4("runs"), "when"),
  run: rS(() => startDraft(), "run")
});
M({
  id: "runmodes:newplaylist",
  title: "New playlist",
  group: "CHALLENGE",
  keywords: "playlist pick fights list custom rush",
  states: ["menu", "battle"],
  owner: XK,
  when: rS(() => !!Xf().menu && playlists().length < PA, "when"),
  run: rS(() => openPickFights(), "run")
});
for (let lR = 0; lR < PA; lR++) {
  let lk = M({
    id: "runmodes:pl:" + lR,
    title: "Playlist",
    group: "CHALLENGE",
    keywords: "playlist",
    states: ["menu", "battle"],
    owner: XK,
    when: rS(() => !!playlists()[lR], "when"),
    run: rS(() => {
      let IZ = playlists()[lR];
      if (IZ) {
        playPlaylist(IZ.id);
      }
    }, "run")
  });
  if (lk) {
    Object.defineProperty(lk, "title", {
      get: rS(() => {
        let IZ = playlists()[lR];
        return "Playlist: " + (IZ ? IZ.name : "-");
      }, "get"),
      configurable: true
    });
    Object.defineProperty(lk, "keywords", {
      get: rS(() => {
        let IZ = playlists()[lR];
        return "playlist " + (IZ ? IZ.ids.map(Io => (XG(Io) || {}).name || Io).join(" ") : "");
      }, "get"),
      configurable: true
    });
  }
}
j({
  id: "runmodes.dailyrow",
  section: "PRACTICE",
  label: "Daily row in the list",
  values: [true, false],
  owner: XK,
  desc: "The DAILY row pinned at the top of the fight list (after your first finished fight). The Hub tile and Ctrl+K stay.",
  get: rS(() => r5(XK, "dailyRow", true) !== false, "get"),
  set: rS(r => r7(XK, "dailyRow", r !== false), "set")
});
var dailyRowOn = rS(() => r5(XK, "dailyRow", true) !== false, "dailyRowOn");
n({
  id: "runmodes:restart",
  combo: "T",
  label: "restart the run",
  states: ["battle"],
  owner: XK,
  when: rS(() => setLive() && !r8() && !Xk.run.over, "when"),
  onDown: rS(() => {
    let K = Xk.spec0;
    let Iu = r4("runs");
    if (Iu) {
      Xk = null;
      u("runs", "");
      Iu.start(K);
      rN("Run restarted", {
        key: "T",
        ms: 900
      });
    }
  }, "onDown")
});
r2("runmodes", {
  view: PV,
  dealDraft: dealDraft,
  offerFor: offerFor,
  PERKS: XU,
  setSeed: setSeed,
  playlists: playlists,
  savePlaylist: savePlaylist,
  deletePlaylist: deletePlaylist,
  autoName: autoName,
  playPlaylist: playPlaylist,
  openPickFights: openPickFights,
  pickFightsOpen: pickFightsOpen,
  rushTiles: rushTiles,
  openRushSetRun: openRushSetRun,
  openSetRun: openSetRun,
  openDraftRun: openDraftRun,
  startDraft: startDraft,
  dailyRowOn: dailyRowOn,
  setState: rS(() => Xk, "setState"),
  _take: rS((r, K) => takePerk(r, K), "_take"),
  _reset: rS(() => {
    Xk = null;
    PL = null;
    PG = null;
    Pg = false;
  }, "_reset")
});
var F0 = rX;
var F1 = 30;
var F2 = "practice";
var F3 = [{
  id: "CH1",
  label: "CHAPTER 1",
  ids: ["enc12", "enc20", "enc27", "enc31", "enc40", "jevil"]
}, {
  id: "CH2",
  label: "CHAPTER 2",
  ids: ["ch2enc58", "ch2enc57", "ch2enc63", "ch2enc60", "ch2enc82", "ch2enc59", "ch2enc84", "ch2enc61"]
}, {
  id: "CH3",
  label: "CHAPTER 3",
  ids: ["ch3enc113", "ch3enc114", "ch3enc121", "ch3enc115"]
}, {
  id: "CH4",
  label: "CHAPTER 4",
  ids: ["ch4enc178", "ch4enc174", "ch4enc160", "ch4enc175"]
}, {
  id: "CH5",
  label: "CHAPTER 5",
  ids: ["ch5enc221", "ch5enc222", "ch5enc224", "ch5enc223", "ch5enc234"]
}, {
  id: "UT",
  label: "UNDERTALE",
  ids: ["ut22", "ut27", "ut47", "ut56", "ut81", "ut92", "ut94", "ut95", "ut100", "ut256"]
}, {
  id: "ALL",
  label: "EVERY DELTARUNE BOSS",
  from: ["CH1", "CH2", "CH3", "CH4", "CH5"]
}];
var F4 = ["jevil", "enc12", "enc20", "enc27", "enc31", "enc40", "ch2enc57", "ch2enc58", "ch2enc59", "ch2enc60", "ch2enc61", "ch2enc63", "ch2enc82", "ch2enc84", "ch3enc114", "ch3enc115", "ch3enc121", "ut22", "ut27", "ut47", "ut56", "ut81", "ut92", "ut94", "ut95", "ut100", "ut256"];
var F5 = [1, 2, 3, 4, 5, "ut"];
var F6 = [{
  id: "UT",
  label: "UNDERTALE",
  games: ["ut"]
}, {
  id: "CH1",
  label: "CHAPTER 1",
  games: [1]
}, {
  id: "CH2",
  label: "CHAPTER 2",
  games: [2]
}, {
  id: "CH3",
  label: "CHAPTER 3",
  games: [3]
}, {
  id: "CH4",
  label: "CHAPTER 4",
  games: [4]
}, {
  id: "CH5",
  label: "CHAPTER 5",
  games: [5]
}, {
  id: "BOSSES",
  label: "BOSSES ONLY",
  games: F5,
  bosses: true
}, {
  id: "ALL",
  label: "EVERYTHING",
  games: F5,
  shuffle: true
}, {
  id: "DAILY",
  label: "DAILY",
  games: F5,
  daily: 10
}, {
  id: "CUSTOM",
  label: "CUSTOM"
}];
var F7 = [{
  id: "ALL",
  label: "ALL GAMES",
  games: F5
}, {
  id: "DR",
  label: "DELTARUNE",
  games: [1, 2, 3, 4, 5]
}, {
  id: "UT",
  label: "UNDERTALE",
  games: ["ut"]
}, {
  id: "CH1",
  label: "CHAPTER 1",
  games: [1]
}, {
  id: "CH2",
  label: "CHAPTER 2",
  games: [2]
}, {
  id: "CH3",
  label: "CHAPTER 3",
  games: [3]
}, {
  id: "CH4",
  label: "CHAPTER 4",
  games: [4]
}, {
  id: "CH5",
  label: "CHAPTER 5",
  games: [5]
}, {
  id: "BOSSES",
  label: "BOSSES",
  games: F5,
  bosses: true
}];
var F8 = [{
  id: "NONE",
  label: "NONE",
  turn: 1,
  speed: 1,
  chips: {}
}, {
  id: "T15",
  label: "TURNS x1.5",
  turn: 1.5,
  speed: 1,
  chips: {
    LONGTURNS: 1
  }
}, {
  id: "T2",
  label: "TURNS x2",
  turn: 2,
  speed: 1,
  chips: {
    LONGTURNS: 2
  }
}, {
  id: "S15",
  label: "SPEED x1.5",
  turn: 1,
  speed: 1.5,
  chips: {
    SPEED: 1
  }
}, {
  id: "S2",
  label: "SPEED x2",
  turn: 1,
  speed: 2,
  chips: {
    SPEED: 2
  }
}, {
  id: "T15S15",
  label: "TURNS x1.5 + SPEED x1.5",
  turn: 1.5,
  speed: 1.5,
  chips: {
    LONGTURNS: 1,
    SPEED: 1
  }
}, {
  id: "T2S2",
  label: "TURNS x2 + SPEED x2",
  turn: 2,
  speed: 2,
  chips: {
    LONGTURNS: 2,
    SPEED: 2
  }
}];
var gauntletModChips = rS(r => ({
  ...(F8.find(K => K.id === r) || F8[0]).chips
}), "gauntletModChips");
var modOfChips = rS(r => r && r.LONGTURNS === 2 ? "T2" : r && r.LONGTURNS === 1 ? "T15" : "NONE", "modOfChips");
var FK = [0, 10, 25, "ENDLESS"];
var FN = ["NONE", "T15", "T2"];
var endlessSpeed = rS(r => Math.min(2, Math.round((1 + Math.max(0, r - 1) * 0.05) * 100) / 100), "endlessSpeed");
var Fq = {
  "enc21 obj_jigsawryenemy#0": "never starts",
  "enc22 obj_jigsawryenemy#0": "never starts",
  "enc23 obj_jigsawryenemy#0": "never starts",
  "enc31 obj_lancerboss3#0": "never starts",
  "ch2enc57 obj_tasque_manager_enemy#2": "never starts",
  "ch2enc89 obj_tasque_manager_enemy#0": "its turn never ends (2 min)",
  "ch2enc89 obj_tasque_manager_enemy#2": "never starts",
  "ch3enc111 obj_shutta_enemy#3": "never starts",
  "ch3enc121 obj_tenna_enemy#20": "its turn never ends (2 min)",
  "ch3enc124 obj_shutta_enemy#3": "never starts",
  "ch3enc128 obj_shutta_enemy#3": "never starts",
  "ch3tv_cooking obj_tenna_enemy#20": "its turn never ends (2 min)",
  "ch3tv_music obj_tenna_enemy#20": "its turn never ends (2 min)",
  "ch3tv_lightemup obj_tenna_enemy#20": "its turn never ends (2 min)",
  "ch3tv_cowboy obj_tenna_enemy#20": "its turn never ends (2 min)",
  "ch3tv_cowboy_hard obj_tenna_enemy#20": "its turn never ends (2 min)",
  "ch3tv_kaiju obj_tenna_enemy#20": "its turn never ends (2 min)",
  "ch4enc174 obj_jackenstein_enemy#0": "its turn never ends (2 min)",
  "ch4enc174 obj_jackenstein_enemy#1": "its turn never ends (2 min)",
  "ch4enc174 obj_jackenstein_enemy#2": "its turn never ends (2 min)",
  "ch4enc174 obj_jackenstein_enemy#3": "its turn never ends (2 min)",
  "ch4enc174 obj_jackenstein_enemy#4": "its turn never ends (2 min)",
  "ch4enc174 obj_jackenstein_enemy#5": "its turn never ends (2 min)",
  "ch4enc174 obj_jackenstein_enemy#6": "its turn never ends (2 min)",
  "ch4enc174 obj_jackenstein_enemy#7": "its turn never ends (2 min)",
  "ch4enc174 obj_jackenstein_enemy#8": "its turn never ends (2 min)",
  "ch5enc213 obj_shinobeetle_enemy#0": "never starts",
  "ch5enc220 obj_aqua_enemy#4": "never starts",
  "ch5enc220 obj_aqua_enemy#5": "never starts",
  "ch5enc226 obj_floradinn_enemy#1": "the fight ends first",
  "ch5enc229 obj_netskie_enemy#1": "the fight ends first",
  "ch5enc229 obj_netskie_enemy#2": "the fight ends first",
  "ch5enc229 obj_netskie_enemy#3": "the fight ends first",
  "ch5enc229 obj_netskie_enemy#0": "the fight ends first",
  "ch5enc233 obj_scarecrow_enemy#-1": "never starts",
  "ch5enc233 obj_scarecrow_enemy#0": "never starts",
  "ch5enc233 obj_scarecrow_enemy#1": "never starts",
  "ut46 obj_aaron#51": "the fight ends first",
  "ut46 obj_aaron#0": "the fight ends first",
  "ut46 obj_woshua#1": "the fight ends first",
  "ut46 obj_woshua#0": "the fight ends first",
  "ut47 obj_undyneboss#51": "never starts",
  "ut47 obj_undyneboss#0": "never starts",
  "ut64 obj_finalfroggit#50": "never starts",
  "ut66 obj_finalfroggit#50": "never starts",
  "ut67 obj_finalfroggit#50": "never starts",
  "ut68 obj_finalknight#76": "never starts",
  "ut78 obj_pyrope#0": "never starts",
  "ut80 obj_mettatonb_third#1": "never starts",
  "ut80 obj_mettatonb_third#2": "never starts",
  "ut80 obj_mettatonb_third#3": "never starts",
  "ut80 obj_mettatonb_third#4": "never starts",
  "ut80 obj_mettatonb_third#5": "never starts",
  "ut91 obj_mkid_battle#0": "never starts",
  "ut91 obj_mkid_battle#50": "never starts",
  "ut94 obj_mettaton_neo#0": "the fight ends first",
  "ut94 obj_mettaton_neo#50": "the fight ends first",
  "ut120 obj_finalfroggit#50": "never starts",
  "ut121 obj_finalfroggit#50": "never starts",
  "ut125 obj_finalfroggit#50": "never starts",
  "ut255 obj_asrielb#0": "never starts",
  "ut255 obj_asrielb#1": "never starts",
  "ut256 obj_asrielfinal#2": "never starts"
};
var FX = /jevil|king|lancer|susie|ralsei|spamton|queen|berdly|rouxls|tasque manager|giga|clover|k\.?round|jigsaw joe/i;
var isBoss = rS(r => r.boss === true || FX.test(r.name || ""), "isBoss");
var FF = rS(r => r && !r.hidden && !r.cut && !r.mode, "playable");
var fightOf = rS(r => p.find(K => K.id === r) || null, "fightOf");
function FG(r) {
  let K = 2166136261;
  for (let Iu = 0; Iu < r.length; Iu++) {
    K ^= r.charCodeAt(Iu);
    K = Math.imul(K, 16777619) >>> 0;
  }
  return K >>> 0;
}
rS(FG, "fnv1a");
function Fg(r) {
  return () => {
    r = r + 1831565813 | 0;
    let K = Math.imul(r ^ r >>> 15, r | 1);
    K = K + Math.imul(K ^ K >>> 7, K | 61) ^ K;
    return ((K ^ K >>> 14) >>> 0) / 4294967296;
  };
}
rS(Fg, "mulberry32");
var Fz = rS(r => r >>> 0 & 134217727, "seed31");
var randSeed = rS(() => Fz(Math.random() * 2147483647 | 0), "randSeed");
function Fy(r) {
  let K = Math.max(0, Math.floor((r || 0) / F1));
  return Math.floor(K / 60) + ":" + String(K % 60).padStart(2, "0");
}
rS(Fy, "fmtTime");
var FV = rS((r, K) => r + " " + K + (r === 1 ? "" : "s"), "plural");
var FA = rS(r => String(r && (r.name || r.id) || "?").toUpperCase(), "upName");
var utcDate = rS((r = new Date()) => r.toISOString().slice(0, 10), "utcDate");
var Fl = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var shortDate = rS(r => Fl[Number(r.slice(5, 7)) - 1] + " " + Number(r.slice(8, 10)), "shortDate");
var Fd = rS(r => {
  try {
    rW(r);
  } catch {}
}, "sfx");
var Fi = rS(() => r3() || {}, "host");
var Fh = {};
function FH(r, K) {
  if (!Fh[r]) {
    let Iu = r9(r);
    Fh[r] = {
      s: Iu,
      v: Iu.get(null)
    };
    if (!Fh[r].v || typeof Fh[r].v != "object") {
      Fh[r].v = K;
    }
  }
  return Fh[r].v;
}
rS(FH, "db");
function save(r) {
  if (Fh[r]) {
    Fh[r].s.set(Fh[r].v);
  }
}
rS(save, "save");
function _resetCache() {
  for (let r of Object.keys(Fh)) {
    delete Fh[r];
  }
}
rS(_resetCache, "_resetCache");
function attackList(r) {
  if (!r) {
    return [];
  }
  try {
    return G(r);
  } catch {
    return [];
  }
}
rS(attackList, "attackList");
function attackEnemies(r) {
  try {
    return c(r).filter(K => K.attacks.length);
  } catch {
    return [];
  }
}
rS(attackEnemies, "attackEnemies");
function attackLong(r, K) {
  if (r === "any" || !r) {
    return "WHATEVER COMES NEXT";
  } else if (attackEnemies(K).length > 1) {
    return r.enemy + ": " + r.name;
  } else {
    return r.name;
  }
}
rS(attackLong, "attackLong");
var atkKey = rS(r => z(r), "atkKey");
function refillParty() {
  if (typeof rH.hp == "number") {
    rH.hp = rH.maxhp || 20;
  } else if (rH.hp && rH.maxhp) {
    let r = Array.isArray(rH.char) ? rH.char : [1, 2, 3];
    for (let K of r) {
      if (K && rH.maxhp[K]) {
        rH.hp[K] = rH.maxhp[K];
      }
    }
  }
  if (typeof rH.karma == "number") {
    rH.karma = 0;
  }
}
rS(refillParty, "refillParty");
function keepEnemyHp() {
  if (!!Array.isArray(rH.monsterhp) && !!Array.isArray(rH.monstermaxhp)) {
    for (let r = 0; r < 3; r++) {
      if ((!rH.monster || rH.monster[r]) && rH.monstermaxhp[r] > 0) {
        rH.monsterhp[r] = rH.monstermaxhp[r];
      }
    }
  }
}
rS(keepEnemyHp, "keepEnemyHp");
function skipTurn() {
  if (!rH.autoplay && rH.mnfight !== 2) {
    rH.autoplay = true;
    try {
      rA();
    } finally {
      rH.autoplay = false;
    }
  }
}
rS(skipTurn, "skipTurn");
function releaseSkip() {
  if (!rH.autoplay) {
    rw.synthetic = null;
  }
}
rS(releaseSkip, "releaseSkip");
var practiceDb = rS(() => FH("practice", {}), "practiceDb");
var badgeDb = rS(() => FH("badges", {}), "badgeDb");
var chDb = rS(() => {
  let r = FH("challenges", {});
  r.rush = r.rush || {};
  r.gauntlet = r.gauntlet || {};
  r.daily = r.daily || {};
  return r;
}, "chDb");
var gDb = rS(() => {
  let r = FH("gauntlet", {});
  r.atk = r.atk || {};
  r.runs = r.runs || {};
  return r;
}, "gDb");
var statKey = rS(r => r && typeof r == "object" ? z(r) : String(r), "statKey");
function attackStats(r, K) {
  let Iu = practiceDb()[r];
  let IZ = Iu && Iu[statKey(K)];
  if (IZ) {
    return {
      ...IZ
    };
  } else {
    return {
      loops: 0,
      clean: 0,
      hits: 0,
      bestStreak: 0
    };
  }
}
rS(attackStats, "attackStats");
function statsLine(r, K) {
  let Iu = attackStats(r, K);
  if (Iu.loops) {
    return FV(Iu.loops, "loop") + "  " + Math.round(Iu.clean * 100 / Iu.loops) + "% clean  best " + Iu.bestStreak;
  } else {
    return "not practised yet";
  }
}
rS(statsLine, "statsLine");
function recordLoop(r, K, Iu, IZ) {
  let IO = practiceDb();
  let Io = IO[r] = IO[r] || {};
  let IT = statKey(K);
  let IM = Io[IT] = Io[IT] || {
    loops: 0,
    clean: 0,
    hits: 0,
    bestStreak: 0
  };
  IM.loops++;
  IM.hits += Iu;
  if (!Iu) {
    IM.clean++;
  }
  if (IZ > IM.bestStreak) {
    IM.bestStreak = IZ;
  }
  save("practice");
  return IM;
}
rS(recordLoop, "recordLoop");
function badges(r) {
  let K = badgeDb()[r];
  if (!K) {
    return {
      nohit: false,
      spare: false,
      fastest: null,
      hits: null,
      wins: 0,
      glyphs: []
    };
  }
  let Iu = [];
  if (K.nohit) {
    Iu.push("star");
  }
  if (K.spare) {
    Iu.push("heart");
  }
  if (K.bestFrames) {
    Iu.push("clock");
  }
  let IZ = Array.isArray(K.imp) ? K.imp.filter(IO => IO === "nohit" || IO === "spare" || IO === "best") : [];
  return {
    nohit: !!K.nohit,
    spare: !!K.spare,
    fastest: K.bestFrames || null,
    hits: K.bestHits ?? null,
    wins: K.wins || 0,
    glyphs: Iu,
    imported: IZ
  };
}
rS(badges, "badges");
function allBadges() {
  let r = badgeDb();
  let K = [];
  for (let IZ of p) {
    if (r[IZ.id]) {
      K.push({
        id: IZ.id,
        name: IZ.name,
        chapter: IZ.chapter,
        ...badges(IZ.id)
      });
    }
  }
  let Iu = {
    nohit: K.filter(IO => IO.nohit).length,
    spare: K.filter(IO => IO.spare).length,
    timed: K.filter(IO => IO.fastest).length,
    fights: K.length
  };
  return {
    list: K,
    totals: Iu
  };
}
rS(allBadges, "allBadges");
function judgeWin(r, K, Iu, IZ) {
  let IO = [...(K.assisted || [])];
  let Io = {
    assisted: IO,
    earned: [],
    newBest: false,
    frames: Iu,
    hits: K.hits | 0
  };
  if (!r || IO.length) {
    return Io;
  }
  let IT = badgeDb();
  let IM = IT[r.id] = IT[r.id] || {
    wins: 0
  };
  IM.wins = (IM.wins || 0) + 1;
  let IQ = new Set(Array.isArray(IM.imp) ? IM.imp : []);
  let Ie = l0 => {
    IQ.delete(l0);
  };
  if (!Io.hits && (!IM.nohit || IQ.has("nohit"))) {
    IM.nohit = Date.now();
    Ie("nohit");
    Io.earned.push("nohit");
  }
  if (!IZ && (!IM.spare || IQ.has("spare"))) {
    IM.spare = Date.now();
    Ie("spare");
    Io.earned.push("spare");
  }
  if (!IM.bestFrames || IQ.has("best") || !(IM.bestFrames > 0) || Iu < IM.bestFrames) {
    Io.prevBest = IQ.has("best") ? null : IM.bestFrames || null;
    IM.bestFrames = Iu;
    IM.bestHits = Io.hits;
    Ie("best");
    Io.newBest = true;
  }
  if (IQ.size) {
    IM.imp = [...IQ];
  } else {
    delete IM.imp;
  }
  save("badges");
  return Io;
}
rS(judgeWin, "judgeWin");
var cr = {
  nohit: {
    icon: "star",
    col: F0.gold,
    text: "NO-HIT"
  },
  spare: {
    icon: "heart",
    col: F0.soul,
    text: "SPARE-ONLY"
  }
};
function resolveSet(r) {
  let K = F3.find(IZ => IZ.id === r);
  if (!K) {
    return [];
  }
  if (K.from) {
    return K.from.flatMap(resolveSet);
  }
  let Iu = K.ids.map(fightOf).filter(FF);
  if (!Iu.length && /^CH\d$/.test(r)) {
    Iu = p.filter(IZ => FF(IZ) && IZ.chapter === Number(r.slice(2)) && isBoss(IZ));
  }
  return Iu;
}
rS(resolveSet, "resolveSet");
function rushes() {
  let r = chDb().rush;
  return F3.map(K => ({
    id: K.id,
    label: K.label,
    fights: resolveSet(K.id),
    best: r[K.id] || {}
  })).filter(K => K.fights.length);
}
rS(rushes, "rushes");
function dailyInfo(r = utcDate()) {
  let K = F4;
  let Iu = FG(r);
  let IZ = null;
  for (let Io = 0; Io < K.length && !IZ; Io++) {
    let IT = fightOf(K[(Iu + Io) % K.length]);
    if (FF(IT)) {
      IZ = IT;
    }
  }
  let IO = chDb().daily[r] || null;
  return {
    date: r,
    fight: IZ,
    fightId: IZ && IZ.id,
    seed: Fz(FG(r + ":seed")),
    best: IO && IO.best,
    attempts: IO ? IO.attempts : 0,
    record: IO,
    twist: twistOf(r, IZ)
  };
}
rS(dailyInfo, "dailyInfo");
var cs = [{
  id: "VANISH",
  label: "VANISH",
  mods: {
    VANISH: 1
  },
  line: "VANISH: bullets disappear 1 s after they appear."
}, {
  id: "DARK",
  label: "DARK",
  mods: {
    DARK: 1
  },
  line: "DARK: only the space around your SOUL is lit."
}, {
  id: "SPEED15",
  label: "SPEED x1.5",
  mods: {
    SPEED: 1
  },
  line: "SPEED x1.5: the whole fight runs faster."
}, {
  id: "RAMP",
  label: "SPEED RAMP",
  mods: {
    SPEED: 3
  },
  line: "SPEED RAMP: 10% faster every enemy turn, up to x2."
}];
function twistOf(r, K) {
  let Iu = r4("runs");
  let IZ = FG(r + ":twist");
  for (let IO = 0; IO < cs.length; IO++) {
    let Io = cs[(IZ + IO) % cs.length];
    let IT = {
      kind: "daily",
      fights: K ? [K.id] : [],
      mods: Io.mods
    };
    if (!Iu || !Iu.chipBlocked || !Object.keys(Io.mods).some(IM => Iu.chipBlocked(IM, IT))) {
      return Io;
    }
  }
  return null;
}
rS(twistOf, "twistOf");
var dayBefore = rS(r => new Date(Date.parse(r + "T00:00:00Z") - 86400000).toISOString().slice(0, 10), "dayBefore");
function liveStreak(r = utcDate()) {
  let K = chDb().streak;
  if (!K || !K.last || !(K.n > 0)) {
    return 0;
  } else if (K.last === r || K.last === dayBefore(r)) {
    return K.n | 0;
  } else {
    return 0;
  }
}
rS(liveStreak, "liveStreak");
function countStreak(r) {
  let K = chDb();
  let Iu = K.streak && typeof K.streak == "object" ? K.streak : {
    n: 0,
    best: 0,
    last: null
  };
  if (Iu.last !== r) {
    Iu.n = Iu.last && Iu.last === dayBefore(r) ? (Iu.n | 0) + 1 : 1;
    Iu.best = Math.max(Iu.best | 0, Iu.n);
    Iu.last = r;
    delete Iu.imported;
    K.streak = Iu;
  }
  return Iu.n;
}
rS(countStreak, "countStreak");
var xc = 400;
function trimDays() {
  let r = chDb().daily;
  let K = Object.keys(r);
  if (K.length > xc) {
    K.sort().slice(0, K.length - xc).forEach(Iu => delete r[Iu]);
  }
}
rS(trimDays, "trimDays");
function finishedAFight() {
  if (chDb().firstFight) {
    return true;
  }
  let r = null;
  try {
    let K = r4("hub");
    r = K && K.stats ? K.stats() : null;
  } catch {
    r = null;
  }
  return !!r && !!((r.won | 0) + (r.lost | 0) > 0);
}
rS(finishedAFight, "finishedAFight");
function dailyRow() {
  let r = r4("runmodes");
  if (!finishedAFight() || r && r.dailyRowOn && !r.dailyRowOn()) {
    return null;
  }
  let K = dailyInfo();
  if (!K.fight) {
    return null;
  }
  let Iu = K.record || {};
  let IZ = r4("runs");
  let IO = l1 => IZ && IZ.fmtTime ? IZ.fmtTime(l1) : Fy(l1);
  let Io = !!Iu.best || !!Iu.bestUnranked;
  let IT = liveStreak(K.date);
  let IM = Date.now();
  let IQ = Date.parse(K.date + "T00:00:00Z") + 86400000;
  let Ie = Math.max(0, Math.ceil((IQ - IM) / 60000));
  let l0 = Math.floor(Ie / 60) + " h " + Ie % 60 + " min";
  return {
    date: K.date,
    fight: K.fight,
    twist: K.twist,
    streak: IT,
    cleared: Io,
    unranked: !Iu.best && !!Iu.bestUnranked,
    clearedTime: Iu.best ? IO(Iu.best.frames) : "",
    score: Iu.score || 0,
    nextIn: l0,
    sig: [K.date, K.fightId, K.twist ? K.twist.id : "", IT, Io ? 1 : 0, Iu.score | 0].join("|")
  };
}
rS(dailyRow, "dailyRow");
var gameOf = rS(r => r && r.chapter === "ut" ? "ut" : r && F5.includes(r.chapter) ? r.chapter : null, "gameOf");
var gameLabel = rS(r => r === "ut" ? "UNDERTALE" : "CHAPTER " + r, "gameLabel");
var atkSeed = rS((r, K) => Fz(FG("gauntlet:" + r + ":" + K)), "atkSeed");
var Gl = null;
function bossFightIds() {
  let r = new Set();
  for (let K of F3) {
    if (!K.from) {
      for (let Iu of resolveSet(K.id)) {
        r.add(Iu.id);
      }
    }
  }
  for (let IZ of p) {
    if (FF(IZ) && isBoss(IZ)) {
      r.add(IZ.id);
    }
  }
  return r;
}
rS(bossFightIds, "bossFightIds");
function fightGauntletAttacks(r) {
  if (!r || !FF(r) || r.custom || gameOf(r) == null) {
    return [];
  } else {
    return attackList(r).filter(K => K.forcible && !Fq[r.id + " " + z(K)]);
  }
}
rS(fightGauntletAttacks, "fightGauntletAttacks");
function gauntletAttacks() {
  if (Gl) {
    return Gl;
  }
  let r = bossFightIds();
  let K = new Map();
  for (let Iu of p) {
    let IZ = gameOf(Iu);
    let IO = r.has(Iu.id);
    let Io = fightGauntletAttacks(Iu);
    if (!Io.length) {
      continue;
    }
    let IT = attackEnemies(Iu).length;
    for (let IM of Io) {
      let IQ = z(IM);
      let Ie = IZ + ":" + IQ;
      let l0 = K.get(Ie);
      if (l0) {
        if (IO) {
          l0.boss = true;
        }
        if (IT < l0.n) {
          l0.fightId = Iu.id;
          l0.n = IT;
          l0.enemy = IM.enemy;
        }
      } else {
        K.set(Ie, {
          key: Ie,
          game: IZ,
          fightId: Iu.id,
          atk: IQ,
          name: IM.name,
          enemy: IM.enemy,
          boss: IO,
          n: IT
        });
      }
    }
  }
  Gl = [...K.values()].sort((l1, l2) => F5.indexOf(l1.game) - F5.indexOf(l2.game));
  for (let l1 of Gl) {
    l1.seed = atkSeed(l1.fightId, l1.atk);
  }
  return Gl;
}
rS(gauntletAttacks, "gauntletAttacks");
function customFights(r) {
  let K = F7.find(IZ => IZ.id === r) || F7[0];
  let Iu = K.bosses ? bossFightIds() : null;
  return p.filter(IZ => K.games.includes(gameOf(IZ)) && (!Iu || Iu.has(IZ.id)) && fightGauntletAttacks(IZ).length);
}
rS(customFights, "customFights");
function shuffled(r, K) {
  let Iu = Fg(K | 0);
  let IZ = r.slice();
  for (let IO = IZ.length - 1; IO > 0; IO--) {
    let Io = Math.floor(Iu() * (IO + 1));
    let IT = IZ[IO];
    IZ[IO] = IZ[Io];
    IZ[Io] = IT;
  }
  return IZ;
}
rS(shuffled, "shuffled");
function normGauntlet(r = {}) {
  let K = r.custom || {};
  let Iu = F6.some(Io => Io.id === r.set) ? r.set : "CH1";
  let IZ = r.len === "ENDLESS" && Iu !== "DAILY";
  let IO = F8.some(Io => Io.id === r.mod) ? r.mod : "NONE";
  return {
    set: Iu,
    seed: r.seed != null && Number.isFinite(Number(r.seed)) ? Fz(Number(r.seed)) : null,
    len: IZ ? "ENDLESS" : FK.includes(r.len) && r.len !== "ENDLESS" ? r.len : 0,
    mod: IZ ? FN.includes(IO) ? IO : modOfChips(gauntletModChips(IO)) : IO,
    ko: IZ || r.ko === "END" ? "END" : "NEXT",
    date: typeof r.date == "string" ? r.date : null,
    custom: {
      from: F7.some(Io => Io.id === K.from) ? K.from : "ALL",
      fight: typeof K.fight == "string" ? K.fight : null,
      atk: typeof K.atk == "string" && K.atk !== "any" ? K.atk : null,
      order: K.order === "SHUFFLED" ? "SHUFFLED" : "STORY"
    }
  };
}
rS(normGauntlet, "normGauntlet");
function gauntletList(r) {
  let K = normGauntlet(r);
  let Iu = F6.find(IO => IO.id === K.set);
  let IZ;
  if (Iu.id === "CUSTOM") {
    let IO = K.custom;
    let Io = F7.find(IM => IM.id === IO.from);
    let IT = IO.fight ? fightOf(IO.fight) : null;
    if (IT) {
      IZ = fightGauntletAttacks(IT).map(IM => ({
        key: gameOf(IT) + ":" + z(IM),
        game: gameOf(IT),
        fightId: IT.id,
        atk: z(IM),
        name: IM.name,
        enemy: IM.enemy,
        boss: false,
        seed: atkSeed(IT.id, z(IM))
      }));
      if (IO.atk) {
        IZ = IZ.filter(IM => IM.atk === IO.atk);
      }
    } else {
      IZ = gauntletAttacks().filter(IM => Io.games.includes(IM.game) && (!Io.bosses || IM.boss));
    }
    if (IO.order === "SHUFFLED") {
      IZ = shuffled(IZ, K.seed || 0);
    }
  } else {
    IZ = gauntletAttacks().filter(IM => Iu.games.includes(IM.game) && (!Iu.bosses || IM.boss));
    if (Iu.daily) {
      IZ = shuffled(IZ, FG("gauntlet:" + (K.date || utcDate()))).slice(0, Iu.daily);
    } else if (Iu.shuffle) {
      IZ = shuffled(IZ, K.seed || 0);
    }
  }
  if (typeof K.len == "number" && K.len && !Iu.daily) {
    IZ = IZ.slice(0, K.len);
  }
  return IZ;
}
rS(gauntletList, "gauntletList");
function gauntletBucket(r) {
  let K = r.custom;
  return [r.set, r.set === "DAILY" ? r.date || utcDate() : "", r.set === "CUSTOM" ? [K.from, K.fight || "", K.atk || "", K.order].join("/") : "", r.len || "ALL", r.mod, r.ko].join(":");
}
rS(gauntletBucket, "gauntletBucket");
var atkPbKey = rS((r, K) => r.fightId + " " + r.atk + (K && K !== "NONE" ? "|" + K : ""), "atkPbKey");
function gauntletAttackBest(r, K) {
  let Iu = gDb().atk[atkPbKey(r, K)];
  if (Iu) {
    return {
      ...Iu
    };
  } else {
    return null;
  }
}
rS(gauntletAttackBest, "gauntletAttackBest");
var zr = {
  S: 5,
  A: 4,
  B: 3,
  C: 2,
  D: 1,
  F: 0
};
function gradeOf(r) {
  if (r.ko) {
    return "F";
  }
  let K = r.hits | 0;
  if (K === 0) {
    return "S";
  } else if (K === 1) {
    return "A";
  } else if (K === 2) {
    return "B";
  } else if (K <= 4) {
    return "C";
  } else {
    return "D";
  }
}
rS(gradeOf, "gradeOf");
function runGrade(r) {
  let K = (r || []).filter(IZ => !IZ.skip);
  if (!K.length) {
    return "-";
  }
  let Iu = K.reduce((IZ, IO) => IZ + zr[IO.grade || gradeOf(IO)], 0) / K.length;
  if (Iu >= 4.75) {
    return "S";
  } else if (Iu >= 4) {
    return "A";
  } else if (Iu >= 3) {
    return "B";
  } else if (Iu >= 2) {
    return "C";
  } else if (Iu >= 1) {
    return "D";
  } else {
    return "F";
  }
}
rS(runGrade, "runGrade");
var gradeCol = rS(r => ({
  S: F0.gold,
  A: F0.ok,
  B: F0.text,
  C: F0.warn,
  D: F0.warn,
  F: F0.error
})[r] || F0.dim, "gradeCol");
function bests() {
  return {
    rush: {
      ...chDb().rush
    },
    gauntlet: {
      ...gDb().runs
    },
    daily: dailyInfo().best || null
  };
}
rS(bests, "bests");
function bestText(r) {
  if (r) {
    return Fy(r.frames) + " (" + FV(r.hits, "hit") + ")" + (r.imported ? " IMPORTED" : "");
  } else {
    return "--";
  }
}
rS(bestText, "bestText");
var ze = null;
var Cr = null;
var Cc = null;
var Cl = null;
var Ci = null;
var Ct = null;
var Cs = null;
var Co = {
  fought: false,
  slowmo: false
};
function startFightWith(r, K, Iu) {
  let IZ = Fi();
  if (!r) {
    rN("That fight is not in this build", {
      kind: "error"
    });
    return false;
  }
  if (!IZ.startFight) {
    rN("Cannot start fights yet - the app is not wired in", {
      kind: "error"
    });
    return false;
  }
  while (o()) {
    a();
  }
  ze = Iu ? {
    ...Iu,
    fightId: r.id
  } : null;
  IZ.startFight(r, K || {});
  return true;
}
rS(startFightWith, "startFightWith");
function highlightedFight() {
  let r = Fi().menu;
  try {
    if (r && r.fightList) {
      return r.fightList()[r.fightsel] || null;
    }
  } catch {}
  return null;
}
rS(highlightedFight, "highlightedFight");
function endAllRuns(r) {
  if (Cc) {
    endPractice(true);
  }
  if (Cl) {
    Cl = null;
    u(F2, "");
    if (r) {
      rN("Boss rush abandoned", {
        kind: "warn"
      });
    }
  }
  if (Ci) {
    let K = Ci;
    Ci = null;
    u(F2, "");
    A(rj);
    unlockEnemyHp();
    AB(K);
  }
  Ct = null;
  if (r8() && ["rush", "gauntlet", "daily", "practice"].includes(r8())) {
    r6(null);
  }
}
rS(endAllRuns, "endAllRuns");
function beginPractice(r, K) {
  let Iu = ["any", ...attackList(r)];
  let IZ = typeof K.atk == "string" ? K.atk : null;
  Cc = {
    fight: r,
    attacks: Iu,
    idx: Math.max(0, Iu.findIndex(IO => atkKey(IO) === IZ)),
    hpInf: K.hpInf !== false,
    rngNew: !!K.rngNew,
    skip: K.skip !== false,
    loop: 0,
    loopHits: 0,
    streak: 0,
    best: 0,
    clean: 0,
    snap: null,
    prevMn: rH.mnfight,
    seed: rf.seed || randSeed(),
    prevForce: rH.forceAttack,
    waited: 0,
    confirmed: false,
    noList: Iu.length === 1,
    showMe: K.showMe ? "armed" : null,
    showMeOwn: false
  };
  Cc.best = attackStats(r.id, Cc.attacks[Cc.idx]).bestStreak;
  applyForce();
  r6("practice");
  rq("practice");
  r7(F2, "last", {
    fightId: r.id,
    atk: atkKey(Cc.attacks[Cc.idx]),
    hpInf: Cc.hpInf,
    rngNew: Cc.rngNew,
    skip: Cc.skip
  });
  rN("Practice: " + attackLong(Cc.attacks[Cc.idx], r) + " - every enemy turn loops", {
    kind: "ok",
    key: "T",
    ms: 3500
  });
  if (rH.autoplay && !K.showMe) {
    rN("Autoplay is on - loops it plays are not counted. P turns it off.", {
      kind: "warn",
      key: "P",
      ms: 6000
    });
  }
  practiceBanner();
}
rS(beginPractice, "beginPractice");
function applyForce() {
  if (!Cc) {
    return;
  }
  let r = Cc.attacks[Cc.idx];
  rH.forceAttack = -1;
  A(rj);
  if (r !== "any") {
    V(rj, r);
  }
}
rS(applyForce, "applyForce");
function practiceBanner() {
  if (!Cc) {
    return;
  }
  let r = Cc.attacks[Cc.idx];
  if (Cc.showMe) {
    u(F2, "SHOW ME  " + attackLong(r, Cc.fight) + "  - watch, then it's yours", F0.select, "[-] slower");
    return;
  }
  let K = rH.autoplay ? "AUTOPLAY ON - not counted (P)" : rH.godmode ? "GOD MODE - not counted" : null;
  let Iu = Cc.switching ? "  (starts next turn)" : "";
  u(F2, "PRACTICE  " + attackLong(r, Cc.fight) + Iu + "  loop " + (Cc.loop + 1) + "  " + (K || "hits " + Cc.loopHits + "  streak " + Cc.streak + " (best " + Cc.best + ")"), K ? F0.warn : undefined, (Cc.noList ? "" : "Q/E attack   ") + "T restart   R rewind   ESC leave");
}
rS(practiceBanner, "practiceBanner");
function endPractice(r) {
  if (!Cc) {
    return;
  }
  let K = Cc;
  Cc = null;
  if (K.showMeOwn && rH.autoplay) {
    rl();
    rG("autoplay", false);
  }
  A(rj);
  rH.forceAttack = K.prevForce === undefined ? -1 : K.prevForce;
  releaseSkip();
  u(F2, "");
  if (r8() === "practice") {
    r6(null);
  }
  if (!r || K.loop) {
    rN("Practice over - " + FV(K.loop - (K.assisted | 0), "loop") + ", " + K.clean + " clean" + (K.assisted ? " (" + K.assisted + " autoplayed, not counted)" : ""), {
      kind: "info",
      ms: 4000
    });
  }
}
rS(endPractice, "endPractice");
function endLoop(r) {
  let K = Cc;
  let Iu = K.attacks[K.idx];
  let IZ = K.loopHits + (r && !K.loopHits ? 1 : 0);
  K.loop++;
  if (K.showMe === "playing") {
    K.showMe = null;
    if (K.showMeOwn && rH.autoplay) {
      rl();
      rG("autoplay", false);
    }
    K.showMeOwn = false;
    if (IZ) {
      rN("Autoplay took " + FV(IZ, "hit") + " - it isn't perfect either.", {
        kind: "info",
        ms: 3500
      });
    }
  }
  if (K.loopAssist) {
    K.assisted = (K.assisted | 0) + 1;
    restart(r ? "died" : "loop");
    return;
  }
  if (IZ) {
    K.streak = 0;
  } else {
    K.clean++;
    K.streak++;
  }
  let IO = recordLoop(K.fight.id, Iu, IZ, K.streak);
  if (K.streak > K.best) {
    K.best = K.streak;
    if (K.streak >= 3) {
      rN("New best streak: " + K.streak, {
        kind: "ok"
      });
    }
  } else {
    K.best = Math.max(K.best, IO.bestStreak);
  }
  restart(r ? "died" : "loop");
}
rS(endLoop, "endLoop");
var yo = ["autoplay", "autoplayBeam", "autoplayNet", "godmode", "debug"];
function restart(r) {
  let K = Cc;
  if (!K || !K.snap) {
    return false;
  }
  let Iu = Object.fromEntries(yo.map(IZ => [IZ, rH[IZ]]));
  rh(K.snap);
  for (let IZ of yo) {
    rH[IZ] = Iu[IZ];
  }
  K.loopAssist = !!rH.autoplay || !!rH.godmode;
  if (K.rngNew) {
    rY.reseed(Fz(K.seed + K.loop + 1));
  }
  applyForce();
  K.prevMn = rH.mnfight;
  K.loopHits = 0;
  rc({
    reason: "practice",
    loop: K.loop,
    why: r
  });
  practiceBanner();
  return true;
}
rS(restart, "restart");
function cycleAttack(r) {
  if (Cc) {
    if (Cc.noList) {
      rN("This fight has no attack list - it loops whatever comes next", {
        kind: "warn"
      });
      return;
    }
    Cc.idx = (Cc.idx + r + Cc.attacks.length) % Cc.attacks.length;
    setPick(Cc.idx, r < 0 ? "Q" : "E");
  }
}
rS(cycleAttack, "cycleAttack");
function setPick(r, K) {
  let Iu = Cc;
  if (!Iu) {
    return;
  }
  Iu.idx = r;
  Iu.best = attackStats(Iu.fight.id, Iu.attacks[Iu.idx]).bestStreak;
  Iu.streak = 0;
  Iu.waited = 0;
  Iu.confirmed = false;
  applyForce();
  Fd("snd_menumove");
  let IZ = Iu.attacks[Iu.idx];
  r7(F2, "last", {
    fightId: Iu.fight.id,
    atk: atkKey(IZ),
    hpInf: Iu.hpInf,
    rngNew: Iu.rngNew,
    skip: Iu.skip
  });
  if (Iu.snap) {
    Iu.snap = null;
    Iu.switching = true;
    if (rH.mnfight === 2 && rH.turntimer > 2) {
      rH.turntimer = 2;
    }
  }
  rN(attackLong(IZ, Iu.fight), {
    kind: "info",
    key: K
  });
  practiceBanner();
}
rS(setPick, "setPick");
function practiceFrameAfter() {
  let r = Cc;
  let K = rH.mnfight;
  if (r.skip) {
    try {
      rV();
    } catch {}
    keepEnemyHp();
  }
  if (K === 2 && r.prevMn !== 2) {
    if (r.showMe === "armed") {
      r.showMe = "playing";
      r.showMeOwn = !rH.autoplay;
      if (!rH.autoplay) {
        rl();
        rG("autoplay", true);
      }
    }
    r.snap = rd();
    r.switching = false;
    r.loopHits = 0;
    r.loopAssist = !!rH.autoplay || !!rH.godmode;
    if (r.skip) {
      releaseSkip();
    }
    practiceBanner();
  }
  if (rH.autoplay || rH.godmode) {
    r.loopAssist = true;
  }
  let Iu = !!rH.autoplay || !!rH.godmode;
  if (Iu !== !!r.apShown) {
    r.apShown = Iu;
    practiceBanner();
  }
  let IZ = r.attacks[r.idx];
  if (IZ !== "any" && !r.confirmed) {
    if (K === 2 && I(rj, rH, IZ)) {
      r.confirmed = true;
    }
    if (!r.confirmed && (K === 2 || r.skip)) {
      r.waited++;
    }
    if (!r.confirmed && r.waited > F1 * 30) {
      rN(IZ.name + " did not start in 30 seconds - " + (IZ.forcible ? "this fight is not in a state where " + IZ.enemy + " can use it." : IZ.enemy + " uses it on its own turns only.") + " Back to WHATEVER COMES NEXT.", {
        kind: "error",
        ms: 7000
      });
      r.idx = 0;
      r.waited = 0;
      applyForce();
      practiceBanner();
    }
  }
  let IO = rH.battleover === "lose";
  if (r.snap && (r.prevMn === 2 && K !== 2 || IO)) {
    endLoop(IO);
    return;
  }
  if (rH.battleover === "win") {
    rN("You won the fight - practice over", {
      kind: "ok"
    });
    endPractice(true);
    return;
  }
  r.prevMn = K;
}
rS(practiceFrameAfter, "practiceFrameAfter");
function keepPinned() {
  let r = Cc ? Cc.attacks[Cc.idx] : Ci && Ci.cur ? Ci.curAtk : null;
  if (r && r !== "any") {
    V(rj, r);
  }
}
rS(keepPinned, "keepPinned");
function startRush(r) {
  let K;
  if (Array.isArray(r)) {
    let Iu = r.map(fightOf).filter(FF).slice(0, 20);
    if (!Iu.length) {
      rN("None of these fights are in this version.", {
        kind: "error"
      });
      return false;
    }
    K = {
      id: "LIST",
      label: "PLAYLIST",
      fights: Iu
    };
  } else {
    K = rushes().find(IZ => IZ.id === r);
  }
  if (K) {
    endAllRuns(false);
    Cl = {
      set: K.id,
      label: K.label,
      ids: K.fights.map(IZ => IZ.id),
      seed: randSeed(),
      i: 0,
      frames: 0,
      hits: 0,
      retried: false,
      reasons: new Set(),
      badges: [],
      splits: [],
      carry: 0,
      carryHits: 0
    };
    return rushFight();
  } else {
    rN("No boss rush called " + r + " in this build", {
      kind: "error"
    });
    return false;
  }
}
rS(startRush, "startRush");
function rushSeed(r) {
  return Fz(FG(Cl.seed + ":" + r));
}
rS(rushSeed, "rushSeed");
function rushFight() {
  let r = fightOf(Cl.ids[Cl.i]);
  return startFightWith(r, {
    seed: rushSeed(Cl.i),
    mode: "rush"
  }, {
    kind: "rush",
    apply: () => {
      r6("rush");
      rushBanner();
    }
  });
}
rS(rushFight, "rushFight");
function rushBanner(r = 0, K = 0) {
  if (!Cl) {
    return;
  }
  let Iu = r4("rushhud");
  if (Iu && Iu.shown()) {
    u(F2, "");
    return;
  }
  u(F2, "BOSS RUSH " + Cl.set + "  " + (Cl.i + 1) + "/" + Cl.ids.length + "  " + Fy(Cl.frames + r) + "  hits " + (Cl.hits + K));
}
rS(rushBanner, "rushBanner");
function rushEnd(r, K, Iu, IZ) {
  Cl.frames += K;
  Cl.hits += Iu.hits | 0;
  Cl.carry += K;
  Cl.carryHits += Iu.hits | 0;
  if (r === "win") {
    Cl.splits.push({
      id: Cl.ids[Cl.i],
      frames: Cl.carry,
      hits: Cl.carryHits
    });
    Cl.carry = 0;
    Cl.carryHits = 0;
  }
  for (let Io of Iu.assisted) {
    Cl.reasons.add(Io);
  }
  let IO = fightOf(Cl.ids[Cl.i]);
  if (IZ) {
    for (let IT of IZ.earned) {
      Cl.badges.push(cr[IT].text + " " + FA(IO));
    }
  }
  if (r === "win") {
    Cl.i++;
    if (Cl.i >= Cl.ids.length) {
      Cs = rushCompleteCard;
      return;
    }
    Cs = rushNextCard;
    return;
  }
  Cl.lost = r;
  Cs = rushOverCard;
}
rS(rushEnd, "rushEnd");
function rushNextCard() {
  let r = fightOf(Cl.ids[Cl.i]);
  let K = [{
    text: Cl.i + " / " + Cl.ids.length + " CLEARED    " + Fy(Cl.frames) + "    " + FV(Cl.hits, "hit"),
    col: F0.text
  }];
  for (let Iu of Cl.badges.splice(0)) {
    K.push({
      text: "NEW  " + Iu,
      col: F0.gold,
      icon: "star",
      iconCol: F0.gold
    });
  }
  K.push({
    text: "NEXT: " + FA(r),
    col: F0.select
  });
  openCard({
    id: "practice:rushnext",
    title: "BOSS RUSH " + Cl.set,
    lines: K,
    autoMs: 3000,
    buttons: [{
      label: "CONTINUE",
      run: () => rushFight()
    }, {
      label: "QUIT",
      run: () => quitRush()
    }],
    cancel: 1
  });
}
rS(rushNextCard, "rushNextCard");
function rushOverCard() {
  let r = fightOf(Cl.ids[Cl.i]);
  openCard({
    id: "practice:rushover",
    title: "RUSH OVER",
    titleCol: F0.warn,
    lines: [{
      text: "at " + (Cl.i + 1) + "/" + Cl.ids.length + " - " + FA(r) + "   " + Fy(Cl.frames),
      col: F0.text
    }, {
      text: Cl.lost === "quit" ? "You left the fight." : "The party fell.",
      col: F0.dim
    }, {
      text: "Retrying keeps the clock - the run is marked RETRIED.",
      col: F0.dim
    }],
    buttons: [{
      label: "RETRY THIS FIGHT",
      run: () => {
        Cl.retried = true;
        rushFight();
      }
    }, {
      label: "QUIT",
      run: () => quitRush()
    }],
    cancel: 1,
    result: {
      outcome: "lose",
      frames: Cl.frames,
      hits: Cl.hits | 0,
      plain: {
        subject: Cl.label || "BOSS RUSH " + Cl.set,
        chapter: "at " + (Cl.i + 1) + "/" + Cl.ids.length + "  " + FA(r),
        id: "rush"
      }
    }
  });
}
rS(rushOverCard, "rushOverCard");
function quitRush() {
  Cl = null;
  u(F2, "");
  if (r8() === "rush") {
    r6(null);
  }
}
rS(quitRush, "quitRush");
function rushCompleteCard() {
  let r = Cl;
  Cl = null;
  u(F2, "");
  if (r8() === "rush") {
    r6(null);
  }
  let K = !r.reasons.size && !r.retried;
  let Iu = K ? "clean" : "assisted";
  let IZ = r.set === "LIST";
  let IO = chDb().rush;
  let Io = IZ ? {} : IO[r.set] = IO[r.set] || {};
  let IT = Io[Iu];
  let IM = !IZ && (!IT || !!IT.imported || r.frames < IT.frames || r.frames === IT.frames && r.hits < IT.hits);
  if (IM) {
    Io[Iu] = {
      frames: r.frames,
      hits: r.hits,
      at: Date.now(),
      splits: (r.splits || []).map(Ie => Ie.frames)
    };
    save("challenges");
  }
  let IQ = [{
    text: r.label + " - " + FV(r.ids.length, "fight"),
    col: F0.dim
  }, {
    text: "TIME " + Fy(r.frames) + "    HITS " + r.hits,
    col: F0.text
  }];
  if (IM) {
    IQ.push({
      text: "NEW BEST" + (K ? "" : " (assisted)"),
      col: F0.select,
      icon: "trophy",
      iconCol: F0.gold
    });
  } else if (!IZ) {
    IQ.push({
      text: "best " + bestText(IT),
      col: F0.dim
    });
  }
  if (!K) {
    IQ.push({
      text: "Assisted: " + [...r.reasons, ...(r.retried ? ["retried"] : [])].join(", "),
      col: F0.dim
    });
  }
  for (let Ie of r.badges) {
    IQ.push({
      text: "NEW  " + Ie,
      col: F0.gold,
      icon: "star",
      iconCol: F0.gold
    });
  }
  Fd("snd_won");
  openCard({
    id: "practice:rushdone",
    title: IZ ? "PLAYLIST CLEAR" : "BOSS RUSH CLEAR",
    titleCol: F0.gold,
    lines: IQ,
    buttons: [{
      label: "CONTINUE",
      run: () => {}
    }, {
      label: "RUSH AGAIN",
      run: () => startRush(IZ ? r.ids.slice() : r.set)
    }],
    cancel: 0,
    result: {
      outcome: "win",
      frames: r.frames,
      hits: r.hits | 0,
      plain: {
        subject: r.label,
        chapter: FV(r.ids.length, "fight"),
        id: "rush"
      }
    }
  });
}
rS(rushCompleteCard, "rushCompleteCard");
var Aw = 45;
var Am = F1 * 120;
var Ab = Symbol("gauntlet.enemyHpLock");
var Ap = 0;
function lockEnemyHp() {
  let r = rH.monsterhp;
  if (!!r && typeof r == "object" && !r[Ab]) {
    rH.monsterhp = new Proxy(r, {
      get(K, Iu) {
        if (Iu === Ab) {
          return K;
        } else {
          return K[Iu];
        }
      },
      set(K, Iu, IZ) {
        if (typeof Iu == "string" && typeof IZ == "number" && /^\d+$/.test(Iu)) {
          let IO = K[Iu];
          if (typeof IO == "number" && IZ < IO) {
            Ap += IO - IZ;
            return true;
          }
        }
        K[Iu] = IZ;
        return true;
      }
    });
  }
}
rS(lockEnemyHp, "lockEnemyHp");
function unlockEnemyHp() {
  let r = rH.monsterhp;
  if (r && typeof r == "object" && r[Ab]) {
    rH.monsterhp = r[Ab];
  }
}
rS(unlockEnemyHp, "unlockEnemyHp");
var enemyHpLocked = rS(() => !!rH.monsterhp && typeof rH.monsterhp == "object" && !!rH.monsterhp[Ab], "enemyHpLocked");
function Aj(r) {
  let K = Fi().cfg;
  if (!!K && r.mods.speed !== 1) {
    r.prevSpeed = K.gamespeed || 1;
    K.gamespeed = r.mods.speed;
  }
}
rS(Aj, "applySpeed");
function AB(r) {
  let K = Fi().cfg;
  if (!!K && !!r && r.prevSpeed != null) {
    K.gamespeed = r.prevSpeed;
    r.prevSpeed = null;
    try {
      if (Fi().saveCfg) {
        Fi().saveCfg();
      }
    } catch {}
  }
}
rS(AB, "restoreSpeed");
function startGauntlet(r = {}) {
  if (!r || !Object.keys(r).length) {
    let IM = r5(F2, "gauntlet", null);
    r = IM ? {
      ...IM,
      seed: null,
      date: null
    } : {};
  }
  let K = normGauntlet(r);
  if (K.len === "ENDLESS") {
    return startEndless(K);
  }
  let Iu = F6.find(IQ => IQ.id === K.set);
  if (Iu.daily) {
    K.date = K.date || utcDate();
  }
  if ((Iu.shuffle || Iu.id === "CUSTOM" && K.custom.order === "SHUFFLED") && K.seed == null) {
    K.seed = randSeed();
  }
  let IZ = gauntletList(K);
  if (!IZ.length) {
    rN("No attacks to play in " + Iu.label, {
      kind: "error"
    });
    return false;
  }
  endAllRuns(false);
  let IO = F8.find(IQ => IQ.id === K.mod);
  let Io = gauntletBucket(K);
  let IT = gDb().runs[Io] || null;
  Ci = {
    set: K.set,
    label: Iu.id === "DAILY" ? "DAILY " + K.date : Iu.label,
    opts: K,
    seed: K.seed || 0,
    list: IZ,
    i: 0,
    results: [],
    shuffled: !!Iu.shuffle || !!Iu.daily || K.custom.order === "SHUFFLED",
    mods: IO,
    ko: K.ko,
    bucket: Io,
    pb: IT,
    streak: 0,
    bestStreak: 0,
    reasons: new Set(),
    skipsInRow: 0,
    cur: null,
    curAtk: null,
    last: null,
    phase: false,
    phases: 0,
    confirmed: false,
    cdDone: false,
    hold: 0,
    prevMn: 0,
    waited: 0,
    t0: 0,
    h0: 0,
    prevSpeed: null
  };
  Aj(Ci);
  r7(F2, "gauntlet", K);
  return gauntletRound();
}
rS(startGauntlet, "startGauntlet");
function gauntletRound() {
  if (!Ci) {
    return false;
  }
  let r = Ci;
  let K = r.endless;
  let Iu = K ? endlessNext(r) : r.list[r.i];
  let IZ = fightOf(Iu.fightId);
  Object.assign(r, {
    cur: Iu,
    curAtk: C(IZ, Iu.atk),
    phase: false,
    phases: 0,
    confirmed: false,
    cdDone: false,
    hold: 0,
    waited: 0,
    t0: 0,
    h0: 0
  });
  unlockEnemyHp();
  let IO = () => {
    r6("gauntlet");
    rq("gauntlet");
    rH.forceAttack = -1;
    A(rj);
    if (r.curAtk) {
      V(rj, r.curAtk);
    }
    lockEnemyHp();
    r.prevMn = rH.mnfight;
    if (K) {
      K.speedDue = true;
    }
    gauntletBanner();
  };
  if (r.run) {
    let IT = r.run.run();
    if (IT && K && K.pts) {
      IT.base += K.pts;
      K.pts = 0;
    } else if (IT && !K && IT.turnLog && IT.turnLog.length) {
      IT.base += turnPts(IT.turnLog);
    }
    let IM = {};
    if (K) {
      let Ie = endlessRunHp(K);
      if (Ie) {
        IM.runhp = Ie;
      }
    }
    ze = {
      kind: "gauntlet",
      fightId: IZ.id,
      apply: IO
    };
    let IQ = K ? Fz(FG(r.seed + ":" + K.round)) : Iu.seed;
    if (r.run.play(IZ.id, IQ, IM)) {
      return true;
    } else {
      ze = null;
      return false;
    }
  }
  let Io = r.mods.turn !== 1 ? {
    ...(Fi().cfg || {}),
    turnscale: r.mods.turn
  } : undefined;
  return startFightWith(IZ, {
    seed: Iu.seed,
    mode: "gauntlet",
    cfg: Io
  }, {
    kind: "gauntlet",
    apply: IO
  });
}
rS(gauntletRound, "gauntletRound");
function gauntletBanner() {
  if (!Ci || !Ci.cur) {
    return;
  }
  let r = r4("rushhud");
  if (r && r.shown()) {
    u(F2, "");
    return;
  }
  let K = Ci.endless;
  if (K) {
    u(F2, "ENDLESS " + Ci.label + "  ROUND " + K.round + "  x" + endlessSpeed(K.round) + "  " + Ci.cur.name + "  next breather: round " + (Math.floor((K.round - 1) / 5) * 5 + 5));
    return;
  }
  u(F2, "GAUNTLET " + Ci.label + "  " + (Ci.i + 1) + "/" + Ci.list.length + "  " + Ci.cur.name + "  streak " + Ci.streak);
}
rS(gauntletBanner, "gauntletBanner");
var Ak = null;
var runsApi = rS(() => {
  let r = r4("runs");
  if (r && r.start) {
    return r;
  } else {
    return null;
  }
}, "runsApi");
var runOwns = rS(r => {
  let K = r4("runs");
  try {
    return !!K && !!K.ownsSetup && !!K.ownsSetup(r);
  } catch {
    return false;
  }
}, "runOwns");
function startEndless(r) {
  let K = runsApi();
  if (!K) {
    rN("Endless needs the run module, which is not in this build", {
      kind: "error"
    });
    return false;
  }
  let Iu = F6.find(IO => IO.id === r.set);
  if (!gauntletList({
    ...r,
    seed: 1
  }).length) {
    rN("No attacks to play in " + Iu.label, {
      kind: "error"
    });
    return false;
  }
  endAllRuns(false);
  r7(F2, "gauntlet", {
    ...r,
    seed: null
  });
  Ak = r;
  let IZ = K.start({
    kind: "gauntlet",
    fights: r.set === "CUSTOM" && r.custom.fight ? [r.custom.fight] : [],
    gauntlet: {
      set: r.set,
      len: "ENDLESS",
      ko: "END"
    },
    seed: r.seed,
    mods: gauntletModChips(r.mod)
  });
  Ak = null;
  return IZ;
}
rS(startEndless, "startEndless");
function startGauntletRun(r, K) {
  let Iu = r && r.gauntlet || {};
  let IZ = Ak && Ak.set === Iu.set ? {
    ...Ak
  } : normGauntlet({
    set: Iu.set,
    len: Iu.len,
    ko: Iu.ko,
    mod: modOfChips(r.mods),
    custom: {
      fight: (r.fights || [])[0] || null
    }
  });
  IZ.seed = Fz(r.seed | 0);
  let IO = F6.find(IQ => IQ.id === IZ.set);
  if (IO.daily) {
    IZ.date = r.date || utcDate();
  }
  let Io = gauntletList(IZ);
  if (!Io.length) {
    rN("No attacks to play in " + IO.label, {
      kind: "error"
    });
    return false;
  }
  endAllRuns(false);
  let IT = F8.find(IQ => IQ.id === IZ.mod) || F8[0];
  let IM = IZ.len === "ENDLESS";
  Ci = {
    set: IZ.set,
    label: IO.id === "DAILY" ? "DAILY " + IZ.date : IO.label,
    opts: IZ,
    seed: IZ.seed,
    list: Io,
    i: 0,
    results: [],
    shuffled: !!IM || !!IO.shuffle || !!IO.daily || IZ.custom.order === "SHUFFLED",
    mods: IT,
    ko: IM ? "END" : IZ.ko,
    bucket: gauntletBucket(IZ),
    pb: null,
    streak: 0,
    bestStreak: 0,
    reasons: new Set(),
    skipsInRow: 0,
    cur: null,
    curAtk: null,
    last: null,
    phase: false,
    phases: 0,
    confirmed: false,
    cdDone: false,
    hold: 0,
    prevMn: 0,
    waited: 0,
    t0: 0,
    h0: 0,
    prevSpeed: null,
    run: K,
    spec: r,
    endless: IM ? {
      round: 1,
      bag: [],
      k: 0,
      pts: 0,
      byId: {},
      soul: 1,
      speedDue: false,
      clean: 0
    } : null
  };
  return gauntletRound();
}
rS(startGauntletRun, "startGauntletRun");
function endlessNext(r) {
  let K = r.endless;
  if (!K.bag.length) {
    K.bag = shuffled(r.list, FG(r.seed + ":bag:" + K.k));
    K.k++;
  }
  return K.bag.shift();
}
rS(endlessNext, "endlessNext");
function endlessReadHp(r) {
  if (typeof rH.hp == "number") {
    let IZ = Math.max(0, Math.min(1, rH.hp / Math.max(1, rH.maxhp || 20)));
    r.soul = IZ;
    for (let IO of Object.keys(r.byId)) {
      r.byId[IO] = Math.min(r.byId[IO], IZ);
    }
    return;
  }
  let K = 0;
  let Iu = 0;
  for (let Io of Array.isArray(rH.char) ? rH.char : []) {
    if (!Io || !rH.maxhp || !(rH.maxhp[Io] > 0)) {
      continue;
    }
    let IT = Math.max(0, rH.hp[Io] | 0);
    let IM = rH.maxhp[Io];
    r.byId[String(Io)] = Math.max(0, Math.min(1, IT / IM));
    K += IT;
    Iu += IM;
  }
  if (Iu > 0) {
    r.soul = Math.max(0, Math.min(1, K / Iu));
  }
}
rS(endlessReadHp, "endlessReadHp");
function endlessBreather(r) {
  for (let K of Object.keys(r.byId)) {
    r.byId[K] = Math.min(1, r.byId[K] + 0.25);
  }
  r.soul = Math.min(1, r.soul + 0.25);
}
rS(endlessBreather, "endlessBreather");
function endlessRunHp(r) {
  let K = {};
  let Iu = r.soul < 1;
  for (let [IZ, IO] of Object.entries(r.byId)) {
    K[IZ] = Math.round(IO * 10000) / 10000;
    if (IO < 1) {
      Iu = true;
    }
  }
  if (Iu) {
    return {
      s: 1,
      h: K,
      u: Math.round(r.soul * 10000) / 10000
    };
  } else {
    return null;
  }
}
rS(endlessRunHp, "endlessRunHp");
rK("frameBefore", () => {
  let r = Ci && Ci.endless;
  if (!r || !r.speedDue) {
    return;
  }
  r.speedDue = false;
  let K = Fi().cfg;
  if (K) {
    K.gamespeed = endlessSpeed(r.round);
  }
}, {
  owner: F2,
  priority: 5
});
function gauntletFrameAfter() {
  let r = Ci;
  let K = rH.mnfight;
  try {
    rV();
  } catch {}
  keepEnemyHp();
  lockEnemyHp();
  let Iu = rH.battleover === "lose" || rH.battleover === "ut-lose";
  if (K === 2 && r.prevMn !== 2) {
    r.phase = true;
    r.phases++;
    r.t0 = rj.frame;
    r.h0 = rf.hits | 0;
    releaseSkip();
    if (!r.cdDone) {
      r.cdDone = true;
      r.hold = Aw;
    }
  }
  if (r.phase && !r.confirmed && r.curAtk && I(rj, rH, r.curAtk)) {
    r.confirmed = true;
  }
  r.waited++;
  let IZ = r.phase && r.prevMn === 2 && K !== 2;
  r.prevMn = K;
  if (r.phase && (IZ || Iu || rH.battleover || rj.frame - r.t0 > Am)) {
    r.phase = false;
    if (r.confirmed) {
      gauntletAttackDone(Iu);
      return;
    }
    if (Iu || rH.battleover) {
      skipAttack(Iu ? "KO before it came" : "the fight ended before it came");
      return;
    }
  }
  if (!r.phase && (Iu || rH.battleover)) {
    skipAttack("the fight ended before it came");
    return;
  }
  if (!r.phase && r.waited > F1 * 45) {
    skipAttack("it never started");
  }
}
rS(gauntletFrameAfter, "gauntletFrameAfter");
function nextRound() {
  let r = Ci;
  rH.battleover = null;
  A(rj);
  r.i++;
  if (!r.endless && r.i >= r.list.length) {
    gauntletFinish("done");
    return;
  }
  Cr = {
    run: () => gauntletRound()
  };
}
rS(nextRound, "nextRound");
function skipAttack(r) {
  let K = Ci;
  let Iu = K.cur;
  K.results.push({
    key: Iu.key,
    fightId: Iu.fightId,
    atk: Iu.atk,
    name: Iu.name,
    game: Iu.game,
    seed: Iu.seed,
    frames: 0,
    hits: 0,
    ko: false,
    skip: true,
    why: r,
    grade: "-"
  });
  if (!/^KO/.test(r)) {
    K.skipsInRow++;
  }
  rN(Iu.name + " skipped - " + r, {
    kind: "warn",
    ms: 2500
  });
  if (K.skipsInRow > 5) {
    rN("Gauntlet stopped - six attacks in a row never came", {
      kind: "error"
    });
    rH.battleover = null;
    gauntletFinish("stuck");
    return;
  }
  nextRound();
}
rS(skipAttack, "skipAttack");
function gauntletAttackDone(r) {
  let K = Ci;
  let Iu = K.cur;
  let IZ = rf;
  for (let IQ of IZ.assisted) {
    if (IQ !== "gauntlet") {
      K.reasons.add(IQ);
    }
  }
  let IO = [...IZ.assisted].some(Ie => Ie !== "gauntlet");
  let Io = {
    key: Iu.key,
    fightId: Iu.fightId,
    atk: Iu.atk,
    name: Iu.name,
    game: Iu.game,
    seed: Iu.seed,
    frames: Math.max(0, rj.frame - K.t0),
    hits: Math.max(0, (IZ.hits | 0) - K.h0),
    ko: !!r,
    skip: false
  };
  Io.grade = gradeOf(Io);
  K.skipsInRow = 0;
  if (!Io.hits && !Io.ko) {
    K.streak++;
    if (K.streak > K.bestStreak) {
      K.bestStreak = K.streak;
    }
  } else {
    K.streak = 0;
  }
  if (!IO && !K.endless) {
    let Ie = gDb();
    let l0 = atkPbKey(Iu, K.mods.id);
    let l1 = Ie.atk[l0] ||= {
      n: 0,
      c: 0
    };
    let l2 = l3 => l3.ko ? 1000000 : l3.h ?? l3.hits;
    Io.prevBest = l1.g ? {
      g: l1.g,
      h: l1.h,
      f: l1.f,
      ko: !!l1.ko
    } : null;
    Io.newBest = l1.g == null || !!l1.imported || l2(Io) < l2(l1) || l2(Io) === l2(l1) && Io.frames < l1.f;
    l1.n++;
    if (!Io.hits && !Io.ko) {
      l1.c++;
    }
    if (Io.newBest) {
      Object.assign(l1, {
        h: Io.hits,
        ko: Io.ko,
        f: Io.frames,
        g: Io.grade,
        at: Date.now()
      });
      delete l1.imported;
    }
    save("gauntlet");
    if (K.streak >= 25 && !K.reasons.size) {
      gauntletUnlock("GAUNTLET_STREAK");
    }
  }
  K.results.push(Io);
  K.last = Io;
  let IT = K.endless;
  let IM = false;
  if (IT && !r) {
    IT.pts += 100 + (Io.hits ? 0 : 50) + (IT.round % 10 === 0 ? 500 : 0);
    if (!Io.hits) {
      IT.clean++;
    }
    endlessReadHp(IT);
    if (IT.round % 5 === 0) {
      endlessBreather(IT);
      IM = true;
    }
    if (IT.round === 25 && !K.reasons.size) {
      gauntletUnlock("ENDLESS_25");
    }
    IT.round++;
  }
  rN(Io.name + "  " + Io.grade + "  " + (Io.ko ? "KO" : FV(Io.hits, "hit")) + (Io.newBest && Io.prevBest ? "  NEW BEST" : "") + (IM ? "  - breather, +25% HP" : ""), {
    kind: Io.ko ? "error" : Io.hits ? "info" : "ok",
    ms: 1600
  });
  if (r && K.ko === "END") {
    rH.battleover = null;
    A(rj);
    gauntletFinish("ko");
    return;
  }
  nextRound();
}
rS(gauntletAttackDone, "gauntletAttackDone");
function gauntletUnlock(r) {
  let K = r4("achievements");
  try {
    return !!K && !!K.unlock && !!K.unlock(r);
  } catch {
    return false;
  }
}
rS(gauntletUnlock, "gauntletUnlock");
function gauntletFinish(r) {
  let K = Ci;
  if (!K) {
    return null;
  }
  Ci = null;
  u(F2, "");
  A(rj);
  unlockEnemyHp();
  AB(K);
  let Iu = r !== "quit" && Fi().getState && Fi().getState() === "battle" && Fi().toMenu;
  if (!Iu && r8() === "gauntlet") {
    r6(null);
  }
  let IZ = K.results.filter(IM => !IM.skip);
  let IO = {
    set: K.set,
    label: K.label,
    opts: K.opts,
    why: r,
    count: K.list.length,
    played: IZ.length,
    skipped: K.results.length - IZ.length,
    hits: IZ.reduce((IM, IQ) => IM + IQ.hits, 0),
    frames: IZ.reduce((IM, IQ) => IM + IQ.frames, 0),
    grade: runGrade(IZ),
    clean: IZ.filter(IM => !IM.hits && !IM.ko).length,
    kos: IZ.filter(IM => IM.ko).length,
    bestStreak: K.bestStreak,
    reasons: [...K.reasons],
    mods: K.mods,
    results: K.results,
    newBests: IZ.filter(IM => IM.newBest && IM.prevBest).length
  };
  IO.complete = r === "done";
  IO.ranked = IO.complete && !IO.reasons.length && IO.played > 0;
  if (K.run) {
    let IM = r === "ko" ? "lose" : r === "quit" ? "quit" : "done";
    I5 = IO;
    I6 = {
      g0: K,
      R: IO
    };
    let IQ = null;
    try {
      IQ = K.run.result(IM);
    } finally {
      I6 = null;
    }
    K.run.end(IM, IQ);
    if (Iu) {
      Cr = {
        run: () => {
          if (r8() === "gauntlet") {
            r6(null);
          }
          Fi().toMenu();
        }
      };
    }
    return IO;
  }
  let Io = gDb();
  let IT = Io.runs[K.bucket] || null;
  IO.prev = IT;
  if (IO.ranked) {
    IO.better = !IT || !!IT.imported || IO.hits < IT.hits || IO.hits === IT.hits && IO.frames < IT.frames;
    if (IO.better) {
      Io.runs[K.bucket] = {
        hits: IO.hits,
        frames: IO.frames,
        grade: IO.grade,
        count: IO.played,
        streak: IO.bestStreak,
        splits: K.results.map(l0 => l0.frames),
        at: Date.now()
      };
    } else if (IT && IO.bestStreak > (IT.streak | 0)) {
      IT.streak = IO.bestStreak;
    }
    save("gauntlet");
    let Ie = [];
    if (gauntletUnlock("GAUNTLET_CLEAN")) {
      Ie.push("GAUNTLET_CLEAN");
    }
    if (!IO.hits && ["UT", "CH1", "CH2", "CH3", "CH4", "CH5"].includes(K.set) && !K.opts.len && gauntletUnlock("GAUNTLET_NOHIT")) {
      Ie.push("GAUNTLET_NOHIT");
    }
    if (IO.grade === "S" && IO.played >= 10 && gauntletUnlock("GAUNTLET_S")) {
      Ie.push("GAUNTLET_S");
    }
    if (K.set === "ALL" && !K.opts.len && gauntletUnlock("GAUNTLET_ALL")) {
      Ie.push("GAUNTLET_ALL");
    }
    IO.achievements = Ie;
  }
  I5 = IO;
  Cs = () => gauntletResultCard(IO);
  if (Iu) {
    Cr = {
      run: () => {
        if (r8() === "gauntlet") {
          r6(null);
        }
        Fi().toMenu();
      }
    };
  }
  return IO;
}
rS(gauntletFinish, "gauntletFinish");
var I5 = null;
var I6 = null;
var turnPts = rS(r => (r || []).reduce((K, Iu) => K + (Iu.clean ? 150 : 100), 0), "turnPts");
function gauntletAmend(r, K, Iu) {
  let IZ = I6;
  if (!IZ) {
    return;
  }
  let {
    g0: IO,
    R: Io
  } = IZ;
  let IT = IO.endless;
  let IM = r4("runs");
  r.frames = Io.frames;
  r.hits = Io.hits;
  let IQ = K.base + (IT ? IT.pts : turnPts(K.turnLog));
  if (IM && IM.scoreOf) {
    r.score = IM.scoreOf({
      base: IQ,
      mult: K.mult
    });
  }
  r.reasons = [...IO.reasons];
  r.ranked = !r.reasons.length && Io.played > 0;
  r.fights = IO.results.filter(Ie => !Ie.skip).map(Ie => ({
    id: Ie.fightId,
    atk: Ie.atk,
    name: Ie.name,
    outcome: Ie.ko ? "lose" : "win",
    hits: Ie.hits,
    frames: Ie.frames
  }));
  r.lines = [];
  {
    let Ie = (r.spec.fights || [])[0] ? fightOf(r.spec.fights[0]) : null;
    r.subject = Ie ? FA(Ie) : IO.label;
    r.chapterLine = (IT ? "Endless gauntlet" : "Gauntlet") + (Ie ? "  -  " + IO.label : "");
  }
  if (IT) {
    r.round = IT.round;
    r.verdict = "ROUND " + IT.round;
    let l0 = gDb();
    if (!l0.endless || typeof l0.endless != "object") {
      l0.endless = {};
    }
    let l1 = IM && IM.bucketOf ? IM.bucketOf(r.spec) : IO.bucket;
    let l2 = l0.endless[l1] || null;
    let l3 = r.ranked && Iu !== "quit" && (!l2 || !!l2.imported || IT.round > (l2.round | 0));
    if (l3) {
      l0.endless[l1] = {
        round: IT.round,
        at: Date.now()
      };
      save("gauntlet");
    }
    r.bestRound = {
      prev: l2 ? l2.round | 0 : null,
      isNew: l3
    };
    if (l3) {
      r.lines.push({
        text: "NEW BEST ROUND" + (l2 && !l2.imported ? " (was " + l2.round + ")" : ""),
        col: F0.select,
        icon: "trophy",
        iconCol: F0.gold
      });
    } else if (l2) {
      r.lines.push({
        text: "best round " + l2.round,
        col: F0.dim
      });
    }
    r.lines.push({
      text: "no-hit rounds " + IT.clean + "/" + Math.max(0, IT.round - 1),
      col: F0.text
    });
  } else {
    r.verdict = Io.complete ? "GAUNTLET CLEAR" : "GAUNTLET OVER";
  }
  if (Io.skipped) {
    r.lines.push({
      text: FV(Io.skipped, "attack") + " never came (skipped)",
      col: F0.dim
    });
  }
  if (Io.why === "stuck") {
    r.lines.push({
      text: "Stopped - six attacks in a row never came.",
      col: F0.dim
    });
  }
}
rS(gauntletAmend, "gauntletAmend");
function endlessBestRound(r) {
  let K = gDb();
  let Iu = K.endless && K.endless[r];
  if (Iu) {
    return {
      ...Iu
    };
  } else {
    return null;
  }
}
rS(endlessBestRound, "endlessBestRound");
function gauntletShareText(r) {
  return "DELTARUNE SIM GAUNTLET " + r.label + " - " + r.grade + " - " + FV(r.hits, "hit") + " - " + clockT(r.frames) + " - " + r.played + " attacks" + (r.mods.id !== "NONE" ? " - " + r.mods.label : "") + (r.ranked ? "" : " (unranked)");
}
rS(gauntletShareText, "gauntletShareText");
function gauntletResultCard(r) {
  let K = [{
    text: r.label + "  -  " + r.played + "/" + r.count + " attacks" + (r.why === "quit" ? "  (left)" : r.why === "ko" ? "  (KO)" : r.why === "stuck" ? "  (stopped)" : ""),
    col: F0.dim
  }, {
    text: "GRADE " + r.grade + "    " + FV(r.hits, "hit") + "    " + clockT(r.frames),
    col: gradeCol(r.grade)
  }, {
    text: "no-hit " + r.clean + "/" + r.played + "    best streak " + r.bestStreak + (r.kos ? "    KO " + r.kos : ""),
    col: F0.text
  }];
  if (r.better) {
    K.push({
      text: "NEW BEST" + (r.prev ? "  (was " + r.prev.grade + " " + FV(r.prev.hits, "hit") + ")" : ""),
      col: F0.select,
      icon: "trophy",
      iconCol: F0.gold
    });
  } else if (r.prev) {
    K.push({
      text: "best " + r.prev.grade + "  " + FV(r.prev.hits, "hit") + "  " + clockT(r.prev.frames),
      col: F0.dim
    });
  }
  if (r.mods.id !== "NONE") {
    K.push({
      text: "MODIFIERS  " + r.mods.label,
      col: F0.warn
    });
  }
  if (r.reasons.length) {
    K.push({
      text: "Unranked - " + r.reasons.join(", "),
      col: F0.dim
    });
  } else if (!r.complete) {
    K.push({
      text: "Unranked - the run did not finish",
      col: F0.dim
    });
  }
  if (r.newBests) {
    K.push({
      text: "NEW BEST on " + FV(r.newBests, "attack"),
      col: F0.gold,
      icon: "star",
      iconCol: F0.gold
    });
  }
  if (r.skipped) {
    K.push({
      text: FV(r.skipped, "attack") + " never came (skipped)",
      col: F0.dim
    });
  }
  let Iu = gauntletWorst(r);
  if (Iu.length) {
    K.push({
      text: "WORST  " + Iu.slice(0, 2).map(IO => IO.name + " " + IO.grade).join("   "),
      col: F0.warn
    });
  }
  let IZ = [{
    label: "CONTINUE",
    run: () => {}
  }];
  if (Iu.length) {
    IZ.push({
      label: "PRACTICE WORST",
      run: () => openGauntletWorst(r)
    });
  }
  IZ.push({
    label: "AGAIN",
    run: () => startGauntlet(r.opts)
  });
  if (r.set === "DAILY") {
    IZ.push({
      label: "COPY",
      run: () => copyText(gauntletShareText(r)),
      keep: true
    });
  }
  Fd(r.complete ? "snd_won" : "snd_select");
  openCard({
    id: "practice:gauntletresult",
    title: "GAUNTLET " + (r.complete ? "CLEAR" : "OVER"),
    titleCol: r.complete ? F0.gold : F0.warn,
    lines: K,
    buttons: IZ,
    cancel: 0,
    result: {
      outcome: r.complete ? "win" : "lose",
      frames: r.frames,
      hits: r.hits | 0,
      plain: {
        subject: r.label,
        chapter: "GAUNTLET  " + r.played + "/" + r.count + " attacks",
        id: "gauntlet"
      }
    }
  });
}
rS(gauntletResultCard, "gauntletResultCard");
function gauntletWorst(r) {
  return r.results.filter(K => !K.skip && (K.hits || K.ko)).sort((K, Iu) => Iu.ko - K.ko || Iu.hits - K.hits || Iu.frames - K.frames).slice(0, 5);
}
rS(gauntletWorst, "gauntletWorst");
function openGauntletWorst(r) {
  let K = gauntletWorst(r);
  openForm({
    id: "practice:gauntletworst",
    box: [90, 64, 550, 416],
    title: "WORST ATTACKS",
    sub: () => "Z opens it in the Attack Lab, on the gauntlet's seed",
    rows: () => K.map(Iu => ({
      label: "> " + Iu.name,
      info: () => FA(fightOf(Iu.fightId)) + "  " + gameLabel(Iu.game) + "    " + Iu.grade + "  " + (Iu.ko ? "KO" : FV(Iu.hits, "hit")),
      run: () => practiceInLab(Iu)
    }))
  });
}
rS(openGauntletWorst, "openGauntletWorst");
function practiceInLab(r) {
  let K = fightOf(r.fightId);
  let Iu = Fi();
  if (!K) {
    return false;
  }
  if (Iu.getState && Iu.getState() === "battle" && Iu.toMenu) {
    Iu.toMenu();
  }
  let IZ = Iu.lab;
  if (Iu.openLab && IZ) {
    Iu.openLab(K);
    try {
      IZ.scoped = true;
      IZ.enemySel = -1;
      let IO = IZ.atks().findIndex(Io => z(Io) === r.atk);
      if (IO >= 0) {
        IZ.ai = IO;
      }
      if (IZ.cfg) {
        IZ.cfg.seed = r.seed || atkSeed(r.fightId, r.atk);
      }
    } catch {}
    rN("Attack Lab: " + r.name + " - PLAY IN THE FIGHT runs it on the gauntlet's seed", {
      kind: "info",
      ms: 4000
    });
    return true;
  }
  return practiceAttack(K, r.atk, {
    seed: r.seed || atkSeed(r.fightId, r.atk)
  });
}
rS(practiceInLab, "practiceInLab");
function drawGauntletIntro(r) {
  let K = Ci;
  if (!K || !K.cur) {
    return;
  }
  let Iu = K.hold > 0;
  if (K.cdDone && !Iu) {
    return;
  }
  let IZ = K.cur;
  let IO = fightOf(IZ.fightId);
  let Io = K.last;
  let IT = 140;
  let IM = 500;
  let IQ = 30;
  let Ie = Io ? 164 : 146;
  let l0 = IT + 26;
  let l1 = IM - IT - 52;
  rx(r, IT, IQ, IM, Ie);
  r.draw_set_font("fnt_main");
  r.draw_text(l0, IQ + 20, ID(r, gameLabel(IZ.game) + "  -  " + FA(IO), l1 - 50), F0.dim);
  let l2 = K.endless;
  r.draw_set_halign("right");
  r.draw_text(IM - 26, IQ + 20, l2 ? "ROUND " + l2.round : K.i + 1 + "/" + K.list.length, l2 ? F0.text : F0.dim);
  r.draw_set_halign("left");
  r.draw_set_font("fnt_mainbig");
  let l3 = String(IZ.name).toUpperCase();
  while (l3.length > 3 && r.string_width(l3, "fnt_mainbig") > l1) {
    l3 = l3.slice(0, -2);
  }
  r.draw_text(l0, IQ + 38, l3, F0.select);
  r.draw_set_font("fnt_main");
  if (l2) {
    let l4 = Math.floor((l2.round - 1) / 5) * 5 + 5;
    r.draw_text(l0, IQ + 74, ID(r, "x" + endlessSpeed(l2.round) + "   next breather: round " + l4 + (K.mods.id !== "NONE" ? "   " + K.mods.label : ""), l1), F0.warn);
  } else {
    let l5 = gauntletAttackBest(IZ, K.mods.id);
    let l6 = l5 && l5.g ? "best " + l5.g + "  " + (l5.ko ? "KO" : FV(l5.h, "hit")) + "  " + clockT(l5.f) + "   " + (l5.n === 1 ? "1 try" : l5.n + " tries") : "first try";
    r.draw_text(l0, IQ + 74, ID(r, l6 + (K.mods.id !== "NONE" ? "   " + K.mods.label : ""), l1), K.mods.id !== "NONE" ? F0.warn : F0.dim);
  }
  if (Io) {
    r.draw_text(l0, IQ + 94, ID(r, "last  " + Io.name + "  " + Io.grade + "  " + (Io.ko ? "KO" : FV(Io.hits, "hit")) + "    streak " + K.streak, l1), Io.ko ? F0.error : Io.hits ? F0.text : F0.ok);
  }
  if (Iu) {
    let l7 = Math.min(3, Math.ceil(K.hold / (Aw / 3)));
    r.draw_set_font("fnt_mainbig");
    r.draw_set_halign("center");
    r.draw_set_color(F0.select);
    r.draw_text_transformed(320, 196, String(l7), 2, 2, 0);
    r.draw_set_halign("left");
    r.draw_set_font("fnt_main");
  }
}
rS(drawGauntletIntro, "drawGauntletIntro");
function startDaily() {
  let r = dailyInfo();
  if (!r.fight) {
    rN("No daily fight in this build", {
      kind: "error"
    });
    return false;
  }
  endAllRuns(false);
  let K = runsApi();
  Ct = {
    date: r.date,
    fightId: r.fightId,
    seed: r.seed,
    twist: r.twist ? r.twist.id : null,
    run: !!K
  };
  if (K) {
    ze = {
      kind: "daily",
      fightId: r.fightId,
      apply: () => {}
    };
    if (K.start({
      kind: "daily",
      fights: [r.fightId],
      seed: r.seed,
      mods: r.twist ? {
        ...r.twist.mods
      } : {},
      date: r.date
    })) {
      return true;
    }
    ze = null;
    Ct.run = false;
  }
  return startFightWith(r.fight, {
    seed: r.seed,
    mode: "daily"
  }, {
    kind: "daily",
    apply: () => {
      r6("daily");
      u(F2, "DAILY " + r.date + "  " + FA(r.fight));
    }
  });
}
rS(startDaily, "startDaily");
function dailyEnd(r, K, Iu) {
  let IZ = chDb().daily;
  let IO = IZ[Ct.date] = IZ[Ct.date] || {
    fight: Ct.fightId,
    attempts: 0
  };
  if (Ct.twist && !IO.twist) {
    IO.twist = Ct.twist;
  }
  trimDays();
  IO.attempts++;
  let Io = Iu.assisted.size > 0;
  let IT = IO.attempts === 1;
  let IM = {
    result: r,
    frames: K,
    hits: Iu.hits | 0,
    assisted: Io
  };
  if (IT) {
    IO.first = IM;
  }
  let IQ = false;
  if (r === "win") {
    let l1 = Io ? "bestUnranked" : "best";
    let l2 = IO[l1];
    IQ = !l2 || !!l2.imported || K < l2.frames || K === l2.frames && IM.hits < l2.hits;
    if (IQ) {
      IO[l1] = {
        frames: K,
        hits: IM.hits,
        at: Date.now()
      };
    }
  }
  let Ie = r === "win" ? countStreak(Ct.date) : liveStreak(Ct.date);
  save("challenges");
  let l0 = {
    ...Ct,
    first: IT,
    better: IQ,
    entry: IM,
    assisted: [...Iu.assisted],
    attempts: IO.attempts,
    streak: Ie
  };
  if (r === "win") {
    Ct = null;
    u(F2, "");
    if (r8() === "daily") {
      r6(null);
    }
    return l0;
  } else {
    if (r === "quit") {
      Ct = null;
      u(F2, "");
      if (r8() === "daily") {
        r6(null);
      }
    }
    rN("Daily attempt " + IO.attempts + ": " + r.toUpperCase() + (r === "lose" ? " - CONTINUE on the game over keeps today's seed" : ""), {
      kind: "info",
      ms: 4000
    });
    return l0;
  }
}
rS(dailyEnd, "dailyEnd");
function dailyScore(r, K) {
  if (!K || K.outcome !== "win" || !K.ranked) {
    return false;
  }
  let Iu = chDb().daily[r];
  if (Iu && (!(Iu.score > 0) || K.score > Iu.score || Iu.scoreImported)) {
    Iu.score = K.score | 0;
    delete Iu.scoreImported;
    save("challenges");
    return true;
  } else {
    return false;
  }
}
rS(dailyScore, "dailyScore");
function dailyShareText(r) {
  let K = fightOf(r.fightId);
  let Iu = r.entry;
  return "DELTARUNE SIM DAILY " + r.date + " - " + FA(K) + " - " + (Iu.result === "win" ? "WIN " + Fy(Iu.frames) : Iu.result.toUpperCase()) + " - " + FV(Iu.hits, "hit") + (Iu.assisted ? " (unranked)" : "");
}
rS(dailyShareText, "dailyShareText");
function copyText(r) {
  let K = () => rN("Copied", {
    kind: "ok"
  });
  let Iu = () => rN(r, {
    kind: "info",
    ms: 9000
  });
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(r).then(K, Iu);
    } else {
      Iu();
    }
  } catch {
    Iu();
  }
}
rS(copyText, "copyText");
function watchReplayButton(r) {
  let K = r4("timeline");
  if (!K || !K.replays || !K.play) {
    return null;
  } else {
    return {
      label: "WATCH REPLAY",
      run: () => {
        let Iu = [];
        try {
          Iu = K.replays() || [];
        } catch {}
        let IZ = Iu.find(IO => IO && (IO.fight === r || IO.fightId === r || IO.fight && IO.fight.id === r));
        if (!IZ) {
          rN("No replay of this fight was kept", {
            kind: "warn"
          });
          return;
        }
        K.play(IZ.id);
      }
    };
  }
}
rS(watchReplayButton, "watchReplayButton");
function resultCard(r, K, Iu) {
  let IZ = [{
    text: FA(r) + "    " + Fy(K.frames) + "    " + FV(K.hits, "hit"),
    col: F0.text
  }];
  if (Iu && Iu.daily) {
    let IT = Iu.daily;
    if (IT.first) {
      IZ.push({
        text: "FIRST TRY",
        col: F0.select,
        icon: "flag",
        iconCol: F0.select
      });
    }
    if (IT.assisted.length) {
      IZ.push({
        text: "UNRANKED - " + IT.assisted.join(", "),
        col: F0.dim
      });
    } else if (IT.better) {
      IZ.push({
        text: "NEW DAILY BEST",
        col: F0.select,
        icon: "trophy",
        iconCol: F0.gold
      });
    }
    IZ.push({
      text: "attempt " + IT.attempts + " today",
      col: F0.dim
    });
  }
  for (let IM of K.earned) {
    IZ.push({
      text: cr[IM].text,
      col: cr[IM].col,
      icon: cr[IM].icon,
      iconCol: cr[IM].col
    });
  }
  if (K.newBest) {
    IZ.push({
      text: "FASTEST " + Fy(K.frames) + "  NEW BEST" + (K.prevBest ? "  (was " + Fy(K.prevBest) + ")" : ""),
      col: F0.select,
      icon: "clock",
      iconCol: F0.select
    });
  }
  if (K.assisted.length && (!Iu || !Iu.daily)) {
    IZ.push({
      text: "No medal - " + K.assisted.join(", "),
      col: F0.dim
    });
  }
  let IO = [{
    label: "CONTINUE",
    run: () => {}
  }];
  if (Iu && Iu.daily) {
    IO.push({
      label: "COPY RESULT",
      run: () => copyText(dailyShareText(Iu.daily)),
      keep: true
    });
  }
  let Io = watchReplayButton(r.id);
  if (Io) {
    IO.push(Io);
  }
  IO.push({
    label: "RETRY",
    run: () => Iu && Iu.daily ? startDaily() : startFightWith(r, {}, null)
  });
  Fd("snd_won");
  openCard({
    id: "practice:result",
    title: Iu && Iu.daily ? "DAILY " + Iu.daily.date : "YOU WON",
    titleCol: F0.select,
    lines: IZ,
    buttons: IO,
    cancel: 0,
    result: {
      fight: r,
      outcome: "win",
      frames: K.frames,
      hits: K.hits | 0
    }
  });
}
rS(resultCard, "resultCard");
rK("fightStart", (r, K) => {
  let Iu = K.fight;
  Co.fought = false;
  Co.slowmo = false;
  {
    let IO = runsApi() && runsApi().current ? runsApi().current() : null;
    Co.runFight = !!Iu && !!IO && !!IO.active && IO.fightId === Iu.id;
  }
  if (ze && Iu && Iu.id === ze.fightId) {
    let Io = ze;
    ze = null;
    if (Io.apply) {
      Io.apply(r);
    }
    return;
  }
  ze = null;
  let IZ = Cl ? Cl.ids[Cl.i] : Ct ? Ct.fightId : Cc ? Cc.fight.id : null;
  if (Iu && IZ && Iu.id === IZ) {
    if (Cl) {
      Cl.retried = true;
      Cs = null;
      Cr = {
        run: () => rushFight()
      };
      return;
    }
    if (Ct) {
      if (!Ct.run) {
        Cr = {
          run: () => startDaily()
        };
      }
      return;
    }
    if (Cc) {
      let IT = {
        atk: Cc.attacks[Cc.idx],
        hpInf: Cc.hpInf,
        rngNew: Cc.rngNew,
        skip: Cc.skip
      };
      endPractice(true);
      beginPractice(Iu, IT);
      return;
    }
  }
  if (Cl || Ct || Cc || Ci) {
    endAllRuns(!!Cl);
  }
}, {
  owner: F2,
  priority: 50
});
rK("beforeTick", () => {
  if (Cr) {
    let r = Cr;
    Cr = null;
    r.run();
    return true;
  }
  if (Ci && Ci.hold > 0) {
    Ci.hold--;
    return true;
  } else {
    return false;
  }
}, {
  owner: F2,
  priority: 200
});
rK("frameBefore", () => {
  if (Cc || Ci) {
    keepPinned();
  }
  if (Cc) {
    if (Cc.skip) {
      skipTurn();
    }
    if (Cc.hpInf) {
      refillParty();
    }
  } else if (Ci) {
    skipTurn();
    lockEnemyHp();
  }
}, {
  owner: F2
});
rK("frameAfter", r => {
  let K = rf;
  if (!!K.active && !K.result) {
    if (rH.myfight === 1 || K.fight && K.fight.game !== "undertale" && rH.flag && [51, 52, 53].some(Iu => rH.flag[Iu] === 1 || rH.flag[Iu] === 6)) {
      Co.fought = true;
    }
    if (rH.autoplay) {
      rq("autoplay");
    }
    if (rH.godmode) {
      rq("god mode");
    }
    if (rs.invuln) {
      rq("invincible");
    }
    if (rs.slowbullets) {
      rq("slow bullets");
    }
    if (rs.nomiss) {
      rq("no-miss");
    }
    if (rs.freetp) {
      rq("free TP");
    }
    if ((rs.hpscale ?? 1) < 1 && !runOwns("hpscale")) {
      rq("weaker enemies");
    }
    if ((rs.turnscale ?? 1) < 1 && !runOwns("turnscale")) {
      rq("shorter turns");
    }
    if (rH.debug === 1) {
      rq("game debug");
    }
    if (Co.slowmo) {
      rq("slow-mo");
    }
    if (!Cc && !Ci && rH.forceAttack >= 0) {
      rq("forced attack");
    }
    if (Cc) {
      practiceFrameAfter();
    } else if (Ci) {
      gauntletFrameAfter();
    } else if (Cl) {
      rushBanner(rj.frame - K.startFrame, K.hits);
    }
  }
}, {
  owner: F2
});
rK("hit", () => {
  if (Cc) {
    Cc.loopHits++;
    if (Cc.hpInf) {
      refillParty();
    }
    practiceBanner();
  } else if (Ci) {
    gauntletBanner();
  }
}, {
  owner: F2
});
rK("note", (r, K) => {
  if (!!K && K.kind === "speed" && typeof K.data == "number") {
    if (K.data < 1) {
      Co.slowmo = true;
    }
    if (Ci && K.data < Ci.mods.speed) {
      Ci.reasons.add("speed below " + Ci.mods.speed + "x");
    }
  }
}, {
  owner: F2
});
rK("timeJump", (r, K) => {
  if (!K || K.reason !== "practice") {
    if (Cc) {
      Cc.prevMn = rH.mnfight;
      applyForce();
    }
    if (Ci) {
      Ci.prevMn = rH.mnfight;
    }
  }
}, {
  owner: F2
});
rK("fightEnd", (r, K) => {
  let {
    result: Iu,
    session: IZ,
    frames: IO
  } = K;
  let Io = IZ.fight;
  if (Iu === "restart") {
    return;
  }
  if (Ci) {
    for (let IM of IZ.assisted) {
      if (IM !== "gauntlet") {
        Ci.reasons.add(IM);
      }
    }
    if (Iu === "quit") {
      gauntletFinish("quit");
    } else if (Iu === "lose" || Iu === "win") {
      if (Ci.confirmed) {
        gauntletAttackDone(Iu === "lose");
      } else {
        skipAttack("the fight ended before it came");
      }
    }
    return;
  }
  if (Cc) {
    endPractice(false);
    return;
  }
  if ((Iu === "win" || Iu === "lose") && !chDb().firstFight && (!IZ.mode || !/^(replay|practice)$/.test(IZ.mode))) {
    chDb().firstFight = true;
    save("challenges");
  }
  let IT = Iu === "win" ? judgeWin(Io, IZ, IO, Co.fought) : null;
  if (Cl) {
    rushEnd(Iu, IO, IZ, IT);
    return;
  }
  if (Co.runFight) {
    let IQ = Ct ? dailyEnd(Iu, IO, IZ) : null;
    let Ie = runResultOf(IZ);
    if (Ie) {
      if (IT) {
        Ie.medals = IT.earned.slice();
      }
      let l0 = IT && IT.newBest ? [fastestLine(IT)] : [];
      if (IQ && IQ.run) {
        l0.push(...dailyLines(IQ, Iu));
        Ie.streak = IQ.streak | 0;
        Ie.attemptsToday = IQ.attempts | 0;
        if (Iu === "win") {
          Ie.verdict = "DAILY " + shortDate(IQ.date).toUpperCase();
          dailyScore(IQ.date, Ie);
        }
      }
      Ie.lines = [...l0, ...(Array.isArray(Ie.lines) ? Ie.lines : [])];
    } else {
      let l1 = r4("runmodes");
      let l2 = l1 && l1.setState ? l1.setState() : null;
      let l3 = IT ? verdictLines(IT) : [];
      if (l2 && l3.length) {
        l2.extra = l2.extra || [];
        for (let l4 of l3) {
          l2.extra.push({
            ...l4,
            text: l4.text + "  " + FA(Io)
          });
        }
      }
    }
    return;
  }
  if (Ct) {
    let l5 = dailyEnd(Iu, IO, IZ);
    if (l5 && Iu === "win") {
      Cs = () => resultCard(Io, IT, {
        daily: l5
      });
    }
    return;
  }
  if (IT) {
    if (IT.earned.length || IT.newBest) {
      Cs = () => resultCard(Io, IT, null);
    } else if (IT.assisted.length) {
      rN("No medal - " + IT.assisted.join(", "), {
        kind: "info",
        ms: 4000
      });
    }
  }
}, {
  owner: F2
});
function runResultOf(r) {
  let K = runsApi();
  if (!K) {
    return null;
  }
  let Iu = K.current ? K.current() : null;
  if (Iu && Iu.lost && Iu.lost.sid === r.id) {
    return Iu.lost;
  }
  let IZ = K.lastResult ? K.lastResult() : null;
  if (IZ && IZ.sid === r.id) {
    return IZ;
  } else {
    return null;
  }
}
rS(runResultOf, "runResultOf");
var fastestLine = rS(r => ({
  text: "FASTEST " + Fy(r.frames) + "  NEW BEST" + (r.prevBest ? "  (was " + Fy(r.prevBest) + ")" : ""),
  col: F0.select,
  icon: "clock",
  iconCol: F0.select
}), "fastestLine");
function verdictLines(r) {
  let K = [];
  for (let Iu of r.earned) {
    K.push({
      text: cr[Iu].text,
      col: cr[Iu].col,
      icon: cr[Iu].icon,
      iconCol: cr[Iu].col
    });
  }
  if (r.newBest) {
    K.push(fastestLine(r));
  }
  return K;
}
rS(verdictLines, "verdictLines");
function dailyLines(r, K) {
  let Iu = [];
  if (K === "win" && r.first) {
    Iu.push({
      text: "FIRST TRY",
      col: F0.select,
      icon: "flag",
      iconCol: F0.select
    });
  }
  return Iu;
}
rS(dailyLines, "dailyLines");
rK("menuDraw", () => {
  if (Fi().getState && Fi().getState() !== "menu" || (Ct && (Ct = null, u(F2, ""), r8() === "daily" && r6(null)), !Cs || T())) {
    return;
  }
  let r = Cs;
  Cs = null;
  r();
}, {
  owner: F2
});
rK("presentScreen", r => {
  if (Ci) {
    rP(r, () => drawGauntletIntro(r));
  }
}, {
  owner: F2
});
function openForm(r) {
  let K = {
    sel: 0,
    buf: 3,
    rects: []
  };
  let Iu = () => r.rows().filter(Boolean);
  let IZ = IQ => {
    Fd("snd_select");
    a(r.id);
    IQ.run();
  };
  let IO = () => Iu().find(IQ => IQ.primary);
  let Io = (IQ, Ie) => {
    if (!IQ.values) {
      return;
    }
    let l0 = IQ.values();
    if (l0.length) {
      if (l0.length === 1) {
        Fd("snd_noise");
        if (IQ.locked) {
          rN(IQ.locked, {
            kind: "warn"
          });
        }
        return;
      }
      IQ.set((IQ.get() + Ie + l0.length) % l0.length);
      Fd("snd_menumove");
    }
  };
  let IT = () => {
    a(r.id);
    if (r.onCancel) {
      r.onCancel();
    }
  };
  let IM = () => {
    let IQ = Iu();
    let Ie = K.expand != null ? IQ[K.expand] : null;
    if (Ie && Ie.values) {
      let l1 = Ie.values();
      return {
        key: r.id + ":pick" + K.expand,
        title: String(Ie.label).toUpperCase(),
        close: () => {
          K.expand = null;
        },
        rows: l1.map((l2, l3) => ({
          label: l2,
          sel: l3 === Ie.get(),
          act: () => {
            Ie.set(l3);
            K.expand = null;
            Fd("snd_select");
          }
        }))
      };
    }
    let l0 = IQ[K.sel];
    return {
      key: r.id,
      title: r.title,
      close: IT,
      note: [r.sub ? r.sub() : "", l0 && l0.info ? l0.info() : ""].filter(Boolean).join("\n"),
      rows: IQ.filter(l2 => !l2.run).map(l2 => {
        let l3 = IQ.indexOf(l2);
        let l4 = l2.values ? l2.values() : [];
        return {
          label: l2.label,
          meta: l4.length ? l4[l2.get()] : "",
          sel: l3 === K.sel,
          off: l2.disabled,
          act: () => {
            K.sel = l3;
            if (l4.length > 4) {
              K.expand = l3;
              Fd("snd_select");
            } else {
              Io(l2, 1);
            }
          },
          btns: l4.length > 1 && l4.length <= 4 ? [{
            label: "<",
            aria: "previous value",
            act: () => {
              K.sel = l3;
              Io(l2, -1);
            }
          }] : []
        };
      }),
      acts: IQ.filter(l2 => l2.run).map(l2 => ({
        label: String(l2.label).replace(/^>\s*/, ""),
        sel: !!l2.primary,
        off: l2.disabled,
        act: () => IZ(l2)
      }))
    };
  };
  Z({
    id: r.id,
    owner: F2,
    touchRows: IM,
    step() {
      if (K.buf > 0) {
        K.buf--;
        return;
      }
      let IQ = Iu();
      if (K.sel >= IQ.length) {
        K.sel = IQ.length - 1;
      }
      if (rR()) {
        K.sel = (K.sel - 1 + IQ.length) % IQ.length;
        Fd("snd_menumove");
      } else if (rk()) {
        K.sel = (K.sel + 1) % IQ.length;
        Fd("snd_menumove");
      } else if (rB()) {
        Io(IQ[K.sel], -1);
      } else if (rL()) {
        Io(IQ[K.sel], 1);
      } else if (rp()) {
        let Ie = IQ[K.sel];
        if (Ie.run) {
          IZ(Ie);
        } else if (IO()) {
          IZ(IO());
        }
      } else if (rU()) {
        IT();
      }
    },
    onKey(IQ, Ie) {
      if (Ie === "Escape") {
        IT();
        return true;
      } else {
        return false;
      }
    },
    onPointer(IQ) {
      let Ie = K.rects.find(l4 => IQ.x >= l4.x && IQ.y >= l4.y && IQ.x < l4.x + l4.w && IQ.y < l4.y + l4.h);
      if (Ie) {
        Ie.fn(IQ);
        return true;
      }
      let [l0, l1, l2, l3] = r.box;
      if (IQ.x < l0 || IQ.x > l2 || IQ.y < l1 || IQ.y > l3) {
        IT();
      }
      return true;
    },
    draw(IQ) {
      let [Ie, l0, l1, l2] = r.box;
      K.rects = [];
      rx(IQ, Ie, l0, l1, l2);
      IQ.draw_set_font("fnt_mainbig");
      IQ.draw_text(Ie + 30, l0 + 16, r.title, F0.select);
      IQ.draw_set_font("fnt_main");
      if (r.sub) {
        IQ.draw_text(Ie + 32, l0 + 50, ID(IQ, r.sub(), l1 - Ie - 64), F0.dim);
      }
      let l3 = l0 + 76;
      Iu().forEach((l5, l6) => {
        let l7 = l6 === K.sel;
        let l8 = l5.info ? 38 : 26;
        if (Il(Ie + 20, l3 - 3, l1 - Ie - 40, l8)) {
          IQ.ctx.fillStyle = F0.hover;
          IQ.ctx.fillRect(Ie + 20, l3 - 3, l1 - Ie - 40, l8);
        }
        if (l7) {
          IQ.draw_sprite("spr_heart", 0, Ie + 26, l3 + 1);
        }
        let l9 = l5.disabled ? F0.faint : l7 ? F0.select : F0.text;
        IQ.draw_text(Ie + 50, l3, l5.label, l9);
        if (l5.values) {
          let lr = l5.values();
          let lK = lr.length ? lr[l5.get()] : "";
          let lN = Ie + 190;
          let lf = l1 - 40 - lN;
          let lq = ID(IQ, lK, lf - 28);
          IQ.draw_set_halign("right");
          IQ.draw_text(l1 - 50, l3, lq, l7 ? F0.text : F0.dim);
          if (l7 && lr.length > 1) {
            IQ.draw_text(l1 - 36, l3, ">", F0.select);
            IQ.draw_text(l1 - 56 - IQ.string_width(lq, "fnt_main"), l3, "<", F0.select);
          }
          IQ.draw_set_halign("left");
          K.rects.push({
            x: lN,
            y: l3 - 3,
            w: (l1 - 30 - lN) / 2,
            h: l8,
            fn: () => {
              K.sel = l6;
              Io(l5, -1);
            }
          });
          K.rects.push({
            x: lN + (l1 - 30 - lN) / 2,
            y: l3 - 3,
            w: (l1 - 30 - lN) / 2,
            h: l8,
            fn: () => {
              K.sel = l6;
              Io(l5, 1);
            }
          });
        }
        if (l5.info) {
          IQ.draw_text(Ie + 64, l3 + 17, ID(IQ, l5.info(), l1 - Ie - 110), F0.dim);
        }
        K.rects.push({
          x: Ie + 20,
          y: l3 - 3,
          w: l5.values ? 170 : l1 - Ie - 40,
          h: l8,
          fn: () => {
            if (l5.run) {
              IZ(l5);
            } else {
              K.sel = l6;
              Fd("snd_menumove");
            }
          }
        });
        l3 += l8 + 4;
      });
      let l4 = IO() ? IO().label.replace(/^>\s*/, "").toLowerCase() : "ok";
      Id(IQ, Ie + 32, l2 - 36, [["Z", l4], ["X", "cancel"], ["LEFT", ""], ["RIGHT", "change"]]);
    }
  });
}
rS(openForm, "openForm");
function Il(r, K, Iu, IZ) {
  return l && l.kind === "mouse" && l.inside && l.x >= r && l.y >= K && l.x < r + Iu && l.y < K + IZ;
}
rS(Il, "hovering");
function ID(r, K, Iu) {
  K = String(K ?? "");
  if (r.string_width(K, "fnt_main") <= Iu) {
    return K;
  }
  while (K.length > 1 && r.string_width(K + "...", "fnt_main") > Iu) {
    K = K.slice(0, -1);
  }
  return K + "...";
}
rS(ID, "fit");
function Id(r, K, Iu, IZ) {
  for (let [IO, Io] of IZ) {
    K += rg(r, K, Iu, IO) + 4;
    if (Io) {
      r.draw_text(K, Iu + 1, Io, F0.dim);
      K += r.string_width(Io, "fnt_main") + 14;
    }
  }
  return K;
}
rS(Id, "chips");
var Ii = new Set(["practice:result", "practice:gauntletresult", "practice:rushover", "practice:rushdone"]);
function openCard(r) {
  if (Ii.has(r.id)) {
    let IQ = r4("results");
    if (IQ && IQ.fromCard) {
      try {
        if (IQ.fromCard(r, {
          result: r.result || {}
        })) {
          return;
        }
      } catch (Ie) {
        console.error("[practice] RESULTS failed; the card instead", Ie);
      }
    }
  }
  let K = {
    sel: 0,
    buf: 4,
    rects: [],
    born: now()
  };
  let Iu = r.lines || [];
  let IZ = 420;
  let IO = 142 + Iu.length * 22;
  let Io = [320 - IZ / 2, Math.max(40, 240 - IO / 2), 320 + IZ / 2, Math.max(40, 240 - IO / 2) + IO];
  let IT = l0 => {
    Fd("snd_select");
    if (!l0.keep) {
      a(r.id);
    }
    l0.run();
  };
  let IM = () => IT(r.buttons[r.cancel ?? r.buttons.length - 1]);
  Z({
    id: r.id,
    owner: F2,
    touchRows: () => ({
      key: r.id,
      title: r.title,
      close: IM,
      note: Iu.map(l0 => l0.text).join("\n"),
      acts: r.buttons.map((l0, l1) => ({
        label: l0.label,
        sel: l1 === K.sel,
        act: () => {
          K.sel = l1;
          r.autoMs = 0;
          IT(l0);
        }
      }))
    }),
    step() {
      if (r.autoMs && now() - K.born >= r.autoMs) {
        IT(r.buttons[0]);
        return;
      }
      if (K.buf > 0) {
        K.buf--;
        return;
      }
      let l0 = r.buttons.length;
      if (rB() || rR()) {
        K.sel = (K.sel - 1 + l0) % l0;
        Fd("snd_menumove");
        r.autoMs = 0;
      } else if (rL() || rk()) {
        K.sel = (K.sel + 1) % l0;
        Fd("snd_menumove");
        r.autoMs = 0;
      } else if (rp()) {
        IT(r.buttons[K.sel]);
      } else if (rU()) {
        IM();
      }
    },
    onKey(l0, l1) {
      if (l1 === "Escape") {
        IM();
        return true;
      } else {
        return false;
      }
    },
    onPointer(l0) {
      let l1 = K.rects.find(l2 => l0.x >= l2.x && l0.y >= l2.y && l0.x < l2.x + l2.w && l0.y < l2.y + l2.h);
      if (l1) {
        l1.fn();
      }
      return true;
    },
    draw(l0) {
      let [l1, l2, l3, l4] = Io;
      K.rects = [];
      rx(l0, l1, l2, l3, l4);
      l0.draw_set_font("fnt_mainbig");
      l0.draw_set_halign("center");
      l0.draw_text(320, l2 + 16, r.title, r.titleCol || F0.select);
      l0.draw_set_font("fnt_main");
      l0.draw_set_halign("left");
      let l5 = l2 + 58;
      for (let lK of Iu) {
        let lN = 320 - (l0.string_width(lK.text, "fnt_main") + (lK.icon ? 22 : 0)) / 2;
        if (lK.icon) {
          s(l0, lK.icon, lN, l5 + 1, 2, lK.iconCol || lK.col);
          lN += 22;
        }
        l0.draw_text(lN, l5, ID(l0, lK.text, IZ - 60), lK.col || F0.text);
        l5 += 22;
      }
      let l6 = r.buttons.map(lf => lf.label);
      let l7 = l6.map(lf => l0.string_width(lf, "fnt_main") + 30);
      let l8 = 320 - l7.reduce((lf, lq) => lf + lq, 0) / 2;
      let l9 = l4 - 70;
      l6.forEach((lf, lq) => {
        let lX = lq === K.sel;
        if (Il(l8, l9 - 4, l7[lq], 24)) {
          l0.ctx.fillStyle = F0.hover;
          l0.ctx.fillRect(l8, l9 - 4, l7[lq], 24);
        }
        if (lX) {
          l0.draw_sprite("spr_heart", 0, l8 + 2, l9 + 1);
        }
        l0.draw_text(l8 + 22, l9, lf, lX ? F0.select : F0.text);
        K.rects.push({
          x: l8,
          y: l9 - 4,
          w: l7[lq],
          h: 24,
          fn: () => {
            K.sel = lq;
            IT(r.buttons[lq]);
          }
        });
        l8 += l7[lq];
      });
      if (r.autoMs) {
        let lf = Math.max(0, 1 - (now() - K.born) / r.autoMs);
        l0.ctx.fillStyle = F0.faint;
        l0.ctx.fillRect(l1 + 30, l4 - 44, l3 - l1 - 60, 2);
        l0.ctx.fillStyle = F0.select;
        l0.ctx.fillRect(l1 + 30, l4 - 44, Math.round((l3 - l1 - 60) * lf), 2);
      }
      let lr = Id(l0, l1 + 30, l4 - 36, [["LEFT", ""], ["RIGHT", "choose"], ["Z", "ok"], ["X", r.buttons[r.cancel ?? r.buttons.length - 1].label.toLowerCase()]]);
    }
  });
}
rS(openCard, "openCard");
var now = rS(() => typeof performance !== "undefined" ? performance.now() : Date.now(), "now");
function openPicker(r, K) {
  let Iu = Fi().getState && Fi().getState() === "battle";
  let IZ = Iu ? Fi().getFight && Fi().getFight() : null;
  let IO = r || IZ || highlightedFight();
  if (!IO || IO.mode) {
    rN("Pick a fight first - highlight one in the list", {
      kind: "warn"
    });
    return false;
  }
  let Io = attackList(IO);
  let IT = attackEnemies(IO);
  let IM = r5(F2, "last", {}) || {};
  let IQ = Cc && Cc.fight === IO;
  let Ie = K && K.atk ? K.atk : IQ ? atkKey(Cc.attacks[Cc.idx]) : IM.fightId === IO.id ? IM.atk : null;
  let l0 = typeof Ie == "string" ? Io.find(l5 => atkKey(l5) === Ie) : null;
  let l1 = {
    en: IT.length > 1 && l0 ? 1 + IT.findIndex(l5 => l5.cls === l0.cls) : 0,
    idx: 0,
    hp: (IQ ? Cc.hpInf : IM.hpInf !== false) ? 0 : 1,
    rng: (IQ ? Cc.rngNew : IM.rngNew) ? 1 : 0,
    skip: (IQ ? Cc.skip : IM.skip !== false) ? 0 : 1
  };
  let l2 = () => ["any", ...(l1.en > 0 ? IT[l1.en - 1].attacks : Io)];
  l1.idx = Math.max(0, l2().findIndex(l5 => l5 === l0));
  let l3 = Io.length === 0;
  let l4 = () => {
    let l5 = {
      atk: atkKey(l2()[l1.idx]),
      hpInf: l1.hp === 0,
      rngNew: l1.rng === 1,
      skip: l1.skip === 0
    };
    if (IZ === IO) {
      endPractice(true);
      beginPractice(IO, l5);
      while (o()) {
        a();
      }
      return;
    }
    endAllRuns(false);
    startFightWith(IO, {
      seed: randSeed(),
      mode: "practice"
    }, {
      kind: "practice",
      apply: () => beginPractice(IO, l5)
    });
  };
  openForm({
    id: "practice:picker",
    box: [90, 64, 550, 416],
    title: "PRACTICE",
    sub: () => FA(IO) + "  -  " + (l3 ? "no attack list" : FV(Io.length, "attack")) + (Iu && IZ !== IO ? "  (leaves this fight)" : ""),
    rows: () => [IT.length > 1 ? {
      label: "Enemy",
      values: () => ["ALL (" + Io.length + ")", ...IT.map(l5 => l5.label + " (" + l5.attacks.length + ")")],
      get: () => l1.en,
      set: l5 => {
        l1.en = l5;
        l1.idx = 0;
      }
    } : null, {
      label: "Attack",
      values: () => l2().map(l5 => l5 === "any" ? "WHATEVER COMES NEXT" : l1.en === 0 && IT.length > 1 ? l5.enemy + ": " + l5.name : l5.name),
      get: () => l1.idx,
      set: l5 => {
        l1.idx = l5;
      },
      locked: l3 ? "This fight has no attack list - practice loops whatever attack comes next" : null,
      info: () => {
        let l5 = l2()[l1.idx];
        if (l3) {
          return "No attack list - each enemy turn loops as it comes.";
        } else if (l5 === "any") {
          return "Each enemy turn loops, whichever attack it is.";
        } else {
          return l5.id + (l5.forcible ? "" : "  (comes on its own)") + (attackStats(IO.id, l5).loops ? "    " + statsLine(IO.id, l5) : "");
        }
      }
    }, {
      label: "HP",
      values: () => ["INFINITE", "NORMAL"],
      get: () => l1.hp,
      set: l5 => {
        l1.hp = l5;
      }
    }, {
      label: "RNG",
      values: () => ["SAME EACH LOOP", "NEW EACH LOOP"],
      get: () => l1.rng,
      set: l5 => {
        l1.rng = l5;
      }
    }, {
      label: "Skip my turns",
      values: () => ["ON", "OFF"],
      get: () => l1.skip,
      set: l5 => {
        l1.skip = l5;
      }
    }, {
      label: IQ ? "> APPLY" : "> START",
      run: l4,
      primary: true
    }, IQ ? {
      label: "> END PRACTICE",
      run: () => endPractice(false)
    } : null]
  });
  return true;
}
rS(openPicker, "openPicker");
function practiceAttack(r, K, Iu = {}) {
  if (!r || r.mode) {
    return false;
  }
  let IZ = {
    atk: K,
    hpInf: Iu.hpInf !== false,
    rngNew: !!Iu.rngNew,
    skip: Iu.skip !== false,
    showMe: !!Iu.showMe
  };
  if ((Fi().getState && Fi().getState() === "battle" && Fi().getFight && Fi().getFight()) === r && (!Iu.seed || Iu.seed === rf.seed)) {
    endPractice(true);
    beginPractice(r, IZ);
    while (o()) {
      a();
    }
    return true;
  }
  endAllRuns(false);
  return startFightWith(r, {
    seed: Iu.seed || randSeed(),
    mode: "practice"
  }, {
    kind: "practice",
    apply: () => beginPractice(r, IZ)
  });
}
rS(practiceAttack, "practiceAttack");
function openRushPicker() {
  let r = rushes();
  if (!r.length) {
    rN("No boss fights in this build", {
      kind: "error"
    });
    return false;
  }
  let K = {
    i: Math.max(0, r.findIndex(IZ => IZ.id === r5(F2, "rushSet", "CH1")))
  };
  let Iu = Fi().getState && Fi().getState() === "battle";
  openForm({
    id: "practice:rushpicker",
    box: [100, 100, 540, 380],
    title: "BOSS RUSH",
    sub: () => "Bosses back to back, one clock." + (Iu ? "  (leaves this fight)" : ""),
    rows: () => [{
      label: "Set",
      values: () => r.map(IZ => IZ.label + "  (" + IZ.fights.length + ")"),
      get: () => K.i,
      set: IZ => {
        K.i = IZ;
      },
      info: () => r[K.i].fights.map(IZ => IZ.name).join(", ")
    }, {
      label: "Best",
      values: () => ["clean " + bestText(r[K.i].best.clean) + "   assisted " + bestText(r[K.i].best.assisted)],
      get: () => 0,
      set: () => {}
    }, {
      label: "> START",
      primary: true,
      run: () => {
        r7(F2, "rushSet", r[K.i].id);
        startRush(r[K.i].id);
      }
    }]
  });
  return true;
}
rS(openRushPicker, "openRushPicker");
function openGauntletPicker() {
  let r = normGauntlet(r5(F2, "gauntlet", null) || {});
  let K = (l4, l5) => Math.max(0, l4.findIndex(l5));
  let Iu = runsApi() ? FK : FK.filter(l4 => l4 !== "ENDLESS");
  let IZ = {
    i: K(F6, l4 => l4.id === r.set),
    len: K(Iu, l4 => l4 === r.len),
    mod: K(F8, l4 => l4.id === r.mod),
    ko: r.ko === "END" ? 1 : 0,
    from: K(F7, l4 => l4.id === r.custom.from),
    fight: 0,
    atk: 0,
    order: r.custom.order === "SHUFFLED" ? 1 : 0
  };
  let IO = () => F6[IZ.i];
  let Io = () => customFights(F7[IZ.from].id);
  let IT = () => {
    let l4 = Io()[IZ.fight - 1];
    if (l4) {
      return fightGauntletAttacks(l4);
    } else {
      return [];
    }
  };
  {
    let l4 = Io().findIndex(l5 => l5.id === r.custom.fight);
    if (l4 >= 0) {
      IZ.fight = l4 + 1;
      let l5 = IT().findIndex(l6 => z(l6) === r.custom.atk);
      if (l5 >= 0) {
        IZ.atk = l5 + 1;
      }
    }
  }
  let IM = () => {
    let l6 = Io()[IZ.fight - 1];
    let l7 = IT()[IZ.atk - 1];
    return normGauntlet({
      set: IO().id,
      len: Iu[IZ.len],
      mod: F8[IZ.mod].id,
      ko: IZ.ko ? "END" : "NEXT",
      date: utcDate(),
      custom: {
        from: F7[IZ.from].id,
        fight: l6 ? l6.id : null,
        atk: l7 ? z(l7) : null,
        order: IZ.order ? "SHUFFLED" : "STORY"
      }
    });
  };
  let IQ = Fi().getState && Fi().getState() === "battle";
  let Ie = () => IO().id === "CUSTOM";
  let l0 = () => !IO().daily && Iu[IZ.len] === "ENDLESS";
  let l1 = () => l0() ? FN : F8.map(l6 => l6.id);
  let l2 = () => {
    let l6 = F8[IZ.mod].id;
    if (l0()) {
      return modOfChips(gauntletModChips(l6));
    } else {
      return l6;
    }
  };
  let l3 = () => {
    let l6 = IM();
    let l7 = gauntletList({
      ...l6,
      seed: 1
    }).length;
    if (l6.len === "ENDLESS") {
      let l9 = runsApi();
      let lr = l9 && l9.bucketOf ? l9.bucketOf({
        kind: "gauntlet",
        fights: l6.set === "CUSTOM" && l6.custom.fight ? [l6.custom.fight] : [],
        gauntlet: {
          set: l6.set,
          len: "ENDLESS",
          ko: "END"
        },
        mods: gauntletModChips(l6.mod)
      }) : "";
      let lK = endlessBestRound(lr);
      return (l7 ? "One life, faster each round." : "No attacks") + "    " + (lK ? "best round " + lK.round : "no run yet");
    }
    let l8 = gDb().runs[gauntletBucket(l6)];
    return FV(l7, "attack") + (IO().id === "DAILY" ? " for " + shortDate(utcDate()) : "") + "    " + (l8 ? "best " + l8.grade + "  " + FV(l8.hits, "hit") + "  " + clockT(l8.frames) : "no run yet");
  };
  openForm({
    id: "practice:gauntletpicker",
    box: [80, 40, 560, 440],
    title: "GAUNTLET",
    sub: () => "Every attack, one at a time. Your attacks deal no damage." + (IQ ? "  (leaves)" : ""),
    rows: () => [{
      label: "Gauntlet",
      values: () => F6.map(l6 => l6.label),
      get: () => IZ.i,
      set: l6 => {
        IZ.i = l6;
      },
      info: l3
    }, Ie() ? {
      label: "From",
      values: () => F7.map(l6 => l6.label),
      get: () => IZ.from,
      set: l6 => {
        IZ.from = l6;
        IZ.fight = 0;
        IZ.atk = 0;
      }
    } : null, Ie() ? {
      label: "Fight",
      values: () => ["ANY", ...Io().map(l6 => FA(l6))],
      get: () => IZ.fight,
      set: l6 => {
        IZ.fight = l6;
        IZ.atk = 0;
      }
    } : null, Ie() && IZ.fight ? {
      label: "Attack",
      values: () => ["ANY", ...IT().map(l6 => l6.name)],
      get: () => IZ.atk,
      set: l6 => {
        IZ.atk = l6;
      }
    } : null, Ie() ? {
      label: "Order",
      values: () => ["STORY", "SHUFFLED"],
      get: () => IZ.order,
      set: l6 => {
        IZ.order = l6;
      }
    } : null, IO().daily ? null : {
      label: "Length",
      values: () => Iu.map(l6 => l6 === "ENDLESS" ? "ENDLESS" : l6 ? l6 + " ATTACKS" : "ALL"),
      get: () => IZ.len,
      set: l6 => {
        IZ.len = l6;
      }
    }, {
      label: "Modifiers",
      values: () => l1().map(l6 => F8.find(l7 => l7.id === l6).label),
      get: () => Math.max(0, l1().indexOf(l2())),
      set: l6 => {
        IZ.mod = F8.findIndex(l7 => l7.id === l1()[l6]);
      }
    }, l0() ? {
      label: "On KO",
      values: () => ["END RUN"],
      get: () => 0,
      set: () => {},
      locked: "Endless is one life.",
      disabled: true
    } : {
      label: "On KO",
      values: () => ["NEXT ATTACK", "END RUN"],
      get: () => IZ.ko,
      set: l6 => {
        IZ.ko = l6;
      }
    }, {
      label: "> START",
      primary: true,
      run: () => startGauntlet(IM())
    }]
  });
  return true;
}
rS(openGauntletPicker, "openGauntletPicker");
function openBadges() {
  let r = r4("achievements");
  if (r && r.openGallery) {
    r.openGallery({
      tab: "medals"
    });
    return;
  }
  let K = {
    top: 0,
    buf: 3
  };
  let Iu = [60, 40, 580, 440];
  let IZ = () => a("practice:badges");
  Z({
    id: "practice:badges",
    owner: F2,
    touchRows: () => {
      let {
        list: IO,
        totals: Io
      } = allBadges();
      return {
        key: "practice:badges",
        title: "BADGES  " + Io.nohit + " NO-HIT  " + Io.spare + " SPARE",
        note: IO.length ? "" : "No badges yet. Win any fight without rewind, autoplay or god mode to earn one.",
        rows: IO.map(IT => ({
          label: (typeof IT.chapter == "number" ? "CH" + IT.chapter : String(IT.chapter).toUpperCase()) + "  " + IT.name,
          off: "dead",
          meta: [IT.nohit ? "NO-HIT" : "", IT.spare ? "SPARE" : "", IT.fastest ? Fy(IT.fastest) : ""].filter(Boolean).join(" ") || "--",
          metaCol: "gold"
        }))
      };
    },
    step() {
      if (K.buf > 0) {
        K.buf--;
        return;
      }
      let IO = allBadges().list.length;
      if (rR()) {
        K.top = Math.max(0, K.top - 1);
      } else if (rk()) {
        K.top = Math.min(Math.max(0, IO - 12), K.top + 1);
      } else if (rU() || rp()) {
        IZ();
      }
    },
    onKey(IO, Io) {
      if (Io === "Escape") {
        IZ();
        return true;
      } else {
        return false;
      }
    },
    onPointer() {
      IZ();
      return true;
    },
    draw(IO) {
      rx(IO, ...Iu);
      drawBadgeGrid(IO, Iu[0] + 30, Iu[1] + 16, Iu[2] - 30, Iu[3] - 40, K.top);
      Id(IO, Iu[0] + 32, Iu[3] - 36, [["UP", ""], ["DOWN", "scroll"], ["X", "close"]]);
    }
  });
}
rS(openBadges, "openBadges");
function drawBadgeGrid(r, K, Iu, IZ, IO, Io = 0) {
  let {
    list: IT,
    totals: IM
  } = allBadges();
  r.draw_set_font("fnt_mainbig");
  r.draw_text(K, Iu, "BADGES", F0.select);
  r.draw_set_font("fnt_main");
  let IQ = K + 130;
  for (let [l1, l2, l3, l4] of [["star", F0.gold, IM.nohit, "NO-HIT"], ["heart", F0.soul, IM.spare, "SPARE-ONLY"], ["clock", F0.text, IM.timed, "TIMED"]]) {
    s(r, l1, IQ, Iu + 12, 2, l2);
    r.draw_text(IQ + 20, Iu + 10, l3 + " " + l4, F0.text);
    IQ += r.string_width(l3 + " " + l4, "fnt_main") + 40;
  }
  if (!IT.length) {
    r.draw_text(K, Iu + 60, "No badges yet. Win any fight without rewind, autoplay or god mode", F0.dim);
    r.draw_text(K, Iu + 78, "to earn one - NO-HIT, SPARE-ONLY and your FASTEST time.", F0.dim);
    return;
  }
  let Ie = Math.max(1, Math.floor((IO - Iu - 50) / 24));
  let l0 = Iu + 46;
  for (let l5 of IT.slice(Io, Io + Ie)) {
    r.draw_text(K, l0, ID(r, (typeof l5.chapter == "number" ? "CH" + l5.chapter : String(l5.chapter).toUpperCase()) + "  " + l5.name, IZ - K - 190), F0.text);
    let l6 = IZ - 170;
    s(r, "star", l6, l0 + 1, 2, l5.nohit ? F0.gold : F0.faint);
    l6 += 22;
    s(r, "heart", l6, l0 + 1, 2, l5.spare ? F0.soul : F0.faint);
    l6 += 22;
    s(r, "clock", l6, l0 + 1, 2, l5.fastest ? F0.text : F0.faint);
    l6 += 22;
    r.draw_text(l6 + 4, l0, l5.fastest ? Fy(l5.fastest) + " " + (l5.hits ? l5.hits + "h" : "0h") : "--", l5.fastest ? F0.text : F0.dim);
    l0 += 24;
  }
  if (Io + Ie < IT.length) {
    r.draw_text(IZ - 20, IO - 18, "v", F0.select);
  }
}
rS(drawBadgeGrid, "drawBadgeGrid");
function menuOrBattle() {
  let r = Fi().getState ? Fi().getState() : "";
  return r === "menu" || r === "battle";
}
rS(menuOrBattle, "menuOrBattle");
B({
  id: "practice.here",
  name: "PRACTICE",
  group: "practice",
  icon: "target",
  states: ["battle"],
  keywords: "loop attack infinite hp train practice this fight",
  desc: "Loop one attack of this fight - infinite HP, your turns skipped. Pick the attack, then Z.",
  available: rS(() => {
    let r = Fi().getFight && Fi().getFight();
    return !!r && !r.mode && !Ci && !T("practice:picker");
  }, "available"),
  value: rS(() => Cc ? "LOOPING" : "THIS FIGHT", "value"),
  onUse: rS(() => openPicker(), "onUse")
});
B({
  id: "practice.prev",
  name: "PREV ATTACK",
  group: "practice",
  icon: "rewind",
  key: "Q",
  states: ["practice"],
  desc: "Loop the previous attack in this fight's list.",
  onUse: rS(() => cycleAttack(-1), "onUse")
});
B({
  id: "practice.next",
  name: "NEXT ATTACK",
  group: "practice",
  icon: "play",
  key: "E",
  states: ["practice"],
  desc: "Loop the next attack in this fight's list.",
  onUse: rS(() => cycleAttack(1), "onUse")
});
B({
  id: "practice.restart",
  name: "RESTART ATTACK",
  group: "practice",
  icon: "step",
  key: "T",
  states: ["practice"],
  desc: "Back to the start of this attack now (the loop is not counted).",
  onUse: rS(() => {
    if (!Cc || !Cc.snap) {
      rN("Nothing to restart yet - wait for the enemy's turn", {
        kind: "warn"
      });
      return;
    }
    restart("manual");
    rN("Restarted", {
      key: "T",
      ms: 900
    });
  }, "onUse")
});
B({
  id: "practice.end",
  name: "END PRACTICE",
  group: "practice",
  icon: "flag",
  states: ["practice"],
  desc: "Stop looping and play the fight on from here.",
  onUse: rS(() => endPractice(false), "onUse")
});
var Ij = B({
  id: "practice.pick",
  name: "PRACTICE",
  group: "practice",
  icon: "target",
  states: ["menu"],
  keywords: "loop attack train",
  desc: "Loop one attack of the highlighted fight.",
  available: rS(() => {
    let r = highlightedFight();
    return !!r && !r.mode;
  }, "available"),
  onUse: rS(() => openPicker(), "onUse")
});
var IB = B({
  id: "challenge.rush",
  name: "BOSS RUSH",
  group: "practice",
  icon: "trophy",
  states: ["menu", "battle"],
  keywords: "challenge bosses marathon",
  desc: "Every boss of a chapter back to back, one clock.",
  available: menuOrBattle,
  onUse: rS(() => openRushPicker(), "onUse")
});
var IY = B({
  id: "challenge.gauntlet",
  name: "GAUNTLET",
  group: "practice",
  icon: "dice",
  states: ["menu", "battle"],
  keywords: "challenge attacks dodge every chapter undertale bosses daily",
  desc: "Every attack of chapters 1-5 and UNDERTALE, one at a time.",
  available: menuOrBattle,
  onUse: rS(() => openGauntletPicker(), "onUse")
});
var IL = B({
  id: "challenge.daily",
  name: "DAILY",
  group: "practice",
  icon: "flag",
  states: ["menu", "battle"],
  keywords: "challenge seed today",
  desc: "One fight and one seed a day, the same for everyone.",
  available: menuOrBattle,
  onUse: rS(() => startDaily(), "onUse")
});
var IR = rS((r, K) => {
  if (r) {
    Object.defineProperty(r, "desc", {
      get: () => {
        try {
          return K();
        } catch {
          return "";
        }
      },
      configurable: true
    });
  }
}, "live");
IR(IL, () => {
  let r = dailyInfo();
  if (r.fight) {
    return shortDate(r.date) + ": " + FA(r.fight) + "   your best " + (r.best ? bestText(r.best) : "--") + (r.attempts ? "   " + FV(r.attempts, "try") : "");
  } else {
    return "No daily fight in this build";
  }
});
IR(IB, () => {
  let r = rushes().map(K => K.best.clean && K.id + " " + Fy(K.best.clean.frames)).filter(Boolean);
  return "Every boss of a chapter back to back, one clock." + (r.length ? "  Bests: " + r.join("  ") : "");
});
IR(IY, () => {
  let r = I5;
  return "Every attack of chapters 1-5 and UNDERTALE, one at a time - " + FV(gauntletAttacks().length, "attack") + "." + (r ? "  Last: " + r.label + " " + r.grade + ", " + FV(r.hits, "hit") : "");
});
IR(Ij, () => {
  let r = highlightedFight();
  if (r && !r.mode) {
    return "Loop one attack of " + FA(r) + " - infinite HP, your turns skipped.";
  } else {
    return "Highlight a fight in the list first.";
  }
});
for (let ls of F3) {
  M({
    id: "practice:rush:" + ls.id,
    title: "Boss rush: " + ls.label,
    group: "CHALLENGE",
    keywords: "boss rush " + ls.id + " marathon",
    states: ["menu", "battle"],
    owner: F2,
    when: rS(() => resolveSet(ls.id).length > 0, "when"),
    run: rS(() => startRush(ls.id), "run")
  });
}
M({
  id: "practice:gauntlet",
  title: "Gauntlet",
  group: "CHALLENGE",
  keywords: "attacks dodge every chapter undertale bosses",
  states: ["menu", "battle"],
  owner: F2,
  run: rS(() => openGauntletPicker(), "run")
});
M({
  id: "practice:gauntlet:again",
  title: "Gauntlet: again (same settings)",
  group: "CHALLENGE",
  keywords: "retry repeat same seed",
  states: ["menu", "battle"],
  owner: F2,
  when: rS(() => !!r5(F2, "gauntlet", null), "when"),
  run: rS(() => startGauntlet(r5(F2, "gauntlet", null)), "run")
});
M({
  id: "practice:gauntlet:daily",
  title: "Gauntlet: daily",
  group: "CHALLENGE",
  keywords: "daily today attacks",
  states: ["menu", "battle"],
  owner: F2,
  run: rS(() => startGauntlet({
    set: "DAILY"
  }), "run")
});
M({
  id: "practice:daily",
  title: "Daily seed",
  group: "CHALLENGE",
  keywords: "daily today",
  states: ["menu", "battle"],
  owner: F2,
  run: rS(() => startDaily(), "run")
});
M({
  id: "practice:resume",
  title: "Practice: resume last",
  group: "PRACTICE",
  keywords: "again loop",
  states: ["menu", "battle"],
  owner: F2,
  when: rS(() => {
    let r = r5(F2, "last", null);
    return !!r && !!fightOf(r.fightId);
  }, "when"),
  run: rS(() => {
    let r = r5(F2, "last", null);
    openPicker(fightOf(r.fightId));
  }, "run")
});
function runView() {
  let r = rf;
  let K = !!r && !!r.active && !r.result && !!Fi().getState && Fi().getState() === "battle";
  if (Cl) {
    let IZ = K && r.fight && r.fight.id === Cl.ids[Cl.i] ? Math.max(0, rj.frame - r.startFrame) : 0;
    let IO = K ? r.hits | 0 : 0;
    let Io = chDb().rush[Cl.set] || {};
    let IT = Io.clean || Io.assisted || null;
    return {
      kind: "rush",
      set: Cl.set,
      label: Cl.label,
      index: Cl.i,
      count: Cl.ids.length,
      fights: Cl.ids.map(IM => ({
        id: IM,
        name: FA(fightOf(IM))
      })),
      splits: Cl.splits.map(IM => ({
        ...IM
      })),
      live: K,
      cur: {
        frames: Cl.carry + IZ,
        hits: Cl.carryHits + IO,
        retried: Cl.carry > 0
      },
      total: Cl.frames + IZ,
      hits: Cl.hits + IO,
      pb: IT ? {
        frames: IT.frames,
        hits: IT.hits,
        splits: IT.splits || null,
        clean: IT === Io.clean
      } : null,
      assisted: Cl.reasons.size > 0 || Cl.retried
    };
  }
  if (Ci && Ci.endless) {
    let IM = Ci.endless;
    let IQ = K && Ci.phase;
    let Ie = IQ ? Math.max(0, rj.frame - Ci.t0) : 0;
    let l0 = IQ ? Math.max(0, (r.hits | 0) - Ci.h0) : 0;
    let l1 = Ci.results.filter(l3 => !l3.skip);
    let l2 = Ci.run && Ci.run.run ? Ci.run.run() : null;
    return {
      kind: "gauntlet",
      endless: true,
      set: Ci.set,
      label: Ci.label,
      seed: Ci.seed,
      round: IM.round - 1,
      index: l1.length,
      count: l1.length + 1,
      live: IQ,
      fights: [...l1.map(l3 => ({
        id: l3.key,
        name: l3.name
      })), {
        id: Ci.cur ? Ci.cur.key : "",
        name: Ci.cur ? Ci.cur.name : "?"
      }],
      splits: l1.map(l3 => ({
        frames: l3.frames,
        hits: l3.hits,
        ko: l3.ko,
        skip: false,
        grade: l3.grade
      })),
      history: l1.map(l3 => ({
        ok: !l3.ko,
        name: l3.name,
        atk: "",
        frames: l3.frames,
        hits: l3.hits
      })),
      cur: Ci.cur ? {
        frames: Ie,
        hits: l0,
        retried: false,
        fightId: Ci.cur.fightId,
        atkId: Ci.cur.atk,
        name: Ci.cur.name
      } : null,
      total: l1.reduce((l3, l4) => l3 + l4.frames, 0) + Ie,
      hits: l1.reduce((l3, l4) => l3 + l4.hits, 0) + l0,
      pb: null,
      assisted: Ci.reasons.size > 0,
      streak: Ci.streak,
      bestStreak: Ci.bestStreak,
      grade: runGrade(Ci.results),
      mods: Ci.mods.id === "NONE" ? "" : Ci.mods.label,
      speed: endlessSpeed(IM.round),
      breather: Math.floor((IM.round - 1) / 5) * 5 + 5,
      countdown: Ci.hold > 0 ? Math.ceil(Ci.hold / (Aw / 3)) : 0,
      locked: enemyHpLocked(),
      run: l2 ? {
        score: l2.score,
        mult: l2.mult,
        mods: "",
        perks: [],
        hp: null
      } : null
    };
  }
  if (Ci) {
    let l3 = K && Ci.phase;
    let l4 = l3 ? Math.max(0, rj.frame - Ci.t0) : 0;
    let l5 = l3 ? Math.max(0, (r.hits | 0) - Ci.h0) : 0;
    let l6 = Ci.pb;
    return {
      kind: "gauntlet",
      set: Ci.set,
      label: Ci.label,
      seed: Ci.seed,
      index: Ci.i,
      count: Ci.list.length,
      live: l3,
      fights: Ci.list.map(l7 => ({
        id: l7.key,
        name: l7.name,
        fight: FA(fightOf(l7.fightId)),
        game: l7.game
      })),
      splits: Ci.results.map(l7 => ({
        frames: l7.frames,
        hits: l7.hits,
        ko: l7.ko,
        skip: !!l7.skip,
        grade: l7.grade
      })),
      cur: Ci.cur ? {
        frames: l4,
        hits: l5,
        retried: false,
        fightId: Ci.cur.fightId,
        atkId: Ci.cur.atk,
        name: Ci.cur.name
      } : null,
      total: Ci.results.reduce((l7, l8) => l7 + l8.frames, 0) + l4,
      hits: Ci.results.reduce((l7, l8) => l7 + l8.hits, 0) + l5,
      pb: l6 ? {
        frames: l6.frames,
        hits: l6.hits,
        grade: l6.grade,
        splits: Ci.shuffled ? null : l6.splits || null,
        clean: true
      } : null,
      assisted: Ci.reasons.size > 0,
      streak: Ci.streak,
      bestStreak: Ci.bestStreak,
      grade: runGrade(Ci.results),
      mods: Ci.mods.id === "NONE" ? "" : Ci.mods.label,
      countdown: Ci.hold > 0 ? Math.ceil(Ci.hold / (Aw / 3)) : 0,
      locked: enemyHpLocked()
    };
  }
  let Iu = r4("runmodes");
  try {
    if (Iu && Iu.view) {
      return Iu.view();
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
rS(runView, "runView");
r2("practice", {
  openPicker: openPicker,
  openBadges: openBadges,
  drawBadgeGrid: drawBadgeGrid,
  openGauntletPicker: openGauntletPicker,
  practiceAttack: practiceAttack,
  attackList: attackList,
  attackEnemies: attackEnemies,
  startRush: startRush,
  startGauntlet: startGauntlet,
  startDaily: startDaily,
  daily: rS(() => {
    let r = dailyInfo();
    return {
      date: r.date,
      fight: r.fight,
      best: r.best || null,
      attempts: r.attempts,
      twist: r.twist,
      streak: liveStreak(r.date),
      score: r.record && r.record.score || 0
    };
  }, "daily"),
  badges: badges,
  allBadges: allBadges,
  bests: bests,
  rushes: rushes,
  attackStats: attackStats,
  dailyRow: dailyRow,
  dailyInfo: dailyInfo,
  twistOf: twistOf,
  liveStreak: liveStreak,
  streak: rS(() => ({
    ...(chDb().streak || {
      n: 0,
      best: 0,
      last: null
    })
  }), "streak"),
  firstFight: rS(() => finishedAFight(), "firstFight"),
  dailyPool: rS(() => F4.slice(), "dailyPool"),
  openCard: openCard,
  startGauntletRun: startGauntletRun,
  gauntletAmend: gauntletAmend,
  gauntletModChips: gauntletModChips,
  endlessBestRound: endlessBestRound,
  endlessSpeed: endlessSpeed,
  gauntletSetLabel: rS(r => (F6.find(K => K.id === r) || {}).label || String(r || ""), "gauntletSetLabel"),
  gauntletBucketOf: rS(r => gauntletBucket(normGauntlet(r)), "gauntletBucketOf"),
  dailyBegin: rS(r => {
    if (!r || r.date !== utcDate() || Ct && Ct.date === r.date) {
      return;
    }
    let K = dailyInfo(r.date);
    if (!K.fight || K.fightId !== r.fights[0] || K.seed !== r.seed) {
      return;
    }
    let Iu = K.twist ? K.twist.mods : {};
    let IZ = r.mods || {};
    if (!Object.keys({
      ...Iu,
      ...IZ
    }).some(IO => (Iu[IO] | 0) !== (IZ[IO] | 0))) {
      Ct = {
        date: K.date,
        fightId: K.fightId,
        seed: K.seed,
        twist: K.twist ? K.twist.id : null,
        run: true
      };
    }
  }, "dailyBegin"),
  showMeNext: rS(() => Cc ? (Cc.showMe = "armed", practiceBanner(), rN("SHOW ME: autoplay plays the next loop, then hands it back", {
    ms: 2500
  }), true) : false, "showMeNext"),
  active: rS(() => Cc ? "practice" : Cl ? "rush" : Ci ? "gauntlet" : Ct ? "daily" : null, "active"),
  runView: runView,
  gauntletSets: rS(() => F6.map(r => ({
    id: r.id,
    label: r.label
  })), "gauntletSets"),
  gauntletMods: rS(() => F8.map(r => ({
    ...r
  })), "gauntletMods"),
  gauntletAttacks: gauntletAttacks,
  gauntletList: gauntletList,
  gauntletAttackBest: gauntletAttackBest,
  gauntletResult: rS(() => I5, "gauntletResult"),
  practiceInLab: practiceInLab,
  openGauntletPicker: openGauntletPicker,
  openGauntletWorst: rS(() => I5 ? (openGauntletWorst(I5), true) : false, "openGauntletWorst"),
  gauntletLock: rS(() => ({
    locked: enemyHpLocked(),
    blocked: Ap
  }), "gauntletLock"),
  gauntletFinish: rS(() => Ci ? gauntletFinish("quit") : null, "gauntletFinish"),
  selfTest: Is
});
function Is() {
  return {
    ok: false,
    checks: [],
    results: [],
    reason: "not in the production build"
  };
}
rS(Is, "selfTest");
function mirrorEnv() {
  let r = Cc ? Cc.attacks[Cc.idx] : Ci && Ci.cur ? Ci.curAtk : null;
  let K = r && r !== "any" ? atkKey(r) : null;
  if (Cc) {
    return {
      refill: !!Cc.hpInf,
      skip: !!Cc.skip,
      pin: K
    };
  } else if (Ci) {
    return {
      refill: false,
      skip: true,
      pin: K
    };
  } else {
    return null;
  }
}
rS(mirrorEnv, "mirrorEnv");
export { seedOf as a, f5 as b, multOf as c, multText as d, chipLabel as e, modsText as f, fN as g, fmtTime as h, normSpec as i, chipBlocked as j, bucketOf as k, best as l, start as m, lastSeed as n, subjectOf as o, raceSpec as p, F3 as q, F4 as r, F6 as s, F8 as t, gauntletModChips as u, endlessSpeed as v, Fq as w, FG as x, Fy as y, _resetCache as z, attackList as A, attackEnemies as B, attackStats as C, badges as D, allBadges as E, judgeWin as F, rushes as G, dailyInfo as H, cs as I, twistOf as J, liveStreak as K, dailyRow as L, gameLabel as M, gauntletAttacks as N, gauntletList as O, gauntletAttackBest as P, gradeOf as Q, runGrade as R, bests as S, startRush as T, startGauntlet as U, startGauntletRun as V, gauntletAmend as W, endlessBestRound as X, practiceInLab as Y, startDaily as Z, dailyShareText as _, openPicker as $, practiceAttack as aa, openBadges as ba, drawBadgeGrid as ca, Is as da, mirrorEnv as ea };
