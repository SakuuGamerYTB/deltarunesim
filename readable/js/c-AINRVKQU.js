const o = function () {
  ;
  let Uy = true;
  return function (UM, UF) {
    const Uz = Uy ? function () {
      if (UF) {
        const UR = UF.apply(UM, arguments);
        UF = null;
        return UR;
      }
    } : function () {};
    Uy = false;
    return Uz;
  };
}();
import { B as X, D as E, b as L, c as B, d as p, e as y, f as M, g as F, h as z, i as R, j as A, k as g, l as D, p as f, z as V } from "./c-PL4HTHAA.js";
import { e as r } from "./c-TJDIJSLU.js";
import { a as m, b as G } from "./c-VD4WD5M6.js";
import { b as K } from "./c-YJJCI5ES.js";
import { I as n, Kb as k, N, fb as T, rc as Q, ta as e, ua as b, va as W, xa as t } from "./c-FMIAGHDE.js";
import { a as u, l as q } from "./c-PIEPTJTC.js";
q();
var h = Math.PI / 180;
function collName(Uy) {
  let UM = Uy.mask_index;
  if (typeof UM == "number" && UM < 0) {
    return Uy.sprite_index;
  } else {
    return UM || Uy.sprite_index;
  }
}
u(collName, "collName");
var l = null;
var gfx = u(() => l ||= D(), "gfx");
var a = {
  plans: 0,
  ms: 0,
  lastMs: 0,
  frames: 0,
  states: 0,
  lastHits: 0,
  mode: ""
};
var Grid = class UA {
  constructor(Uy, UM, UF, Uz, UR, Ug) {
    this.x0 = Uy;
    this.y0 = UM;
    this.w = UF;
    this.h = Uz;
    this.cs = UR;
    this.frames = Ug;
    this.stride = (UF + 1) * (Uz + 1);
    this.sat = new Int32Array(this.stride * Ug);
    this.occ = new Uint8Array(UF * Uz);
  }
  clearOcc() {
    this.occ.fill(0, 0, this.w * this.h);
    this.dirty = false;
  }
  paint(Uy) {
    let UM = collName(Uy);
    if (!UM) {
      return;
    }
    let UF = n[UM];
    if (!UF || !UF.bb) {
      return;
    }
    let Uz = Uy.image_xscale || 0;
    let UR = Uy.image_yscale || 0;
    if (!Uz || !UR) {
      return;
    }
    let Ug = (Uy.image_angle || 0) * h;
    let UD = Math.cos(Ug);
    let Uf = Math.sin(Ug);
    let UV = UF.bb;
    let Ur = [(UV[0] - UF.ox) * Uz, (UV[2] + 1 - UF.ox) * Uz];
    let Um = [(UV[1] - UF.oy) * UR, (UV[3] + 1 - UF.oy) * UR];
    let UG = 1000000000;
    let UK = 1000000000;
    let Un = -1000000000;
    let Uk = -1000000000;
    for (let Ua of Ur) {
      for (let UP of Um) {
        let Us = Uy.x + Ua * UD + UP * Uf;
        let Uw = Uy.y - Ua * Uf + UP * UD;
        if (Us < UG) {
          UG = Us;
        }
        if (Us > Un) {
          Un = Us;
        }
        if (Uw < UK) {
          UK = Uw;
        }
        if (Uw > Uk) {
          Uk = Uw;
        }
      }
    }
    let UN = this.cs;
    let UT = Math.floor((UG - this.x0) / UN);
    let UQ = Math.ceil((Un - this.x0) / UN);
    let Ub = Math.floor((UK - this.y0) / UN);
    let UW = Math.ceil((Uk - this.y0) / UN);
    if (UQ < 0 || UW < 0 || UT >= this.w || Ub >= this.h) {
      return;
    }
    if (UT < 0) {
      UT = 0;
    }
    if (Ub < 0) {
      Ub = 0;
    }
    if (UQ > this.w) {
      UQ = this.w;
    }
    if (UW > this.h) {
      UW = this.h;
    }
    let UJ = UF.precise && UF.masks ? UF.masks.length : 1;
    let Ut = (Math.floor(Uy.image_index || 0) % Math.max(1, UF.frames) + UF.frames) % Math.max(1, UF.frames);
    let Uu = maskOf(UF, Math.min(Ut, UJ - 1));
    this.dirty = true;
    let Uq = UF.w;
    let Uh = UF.h;
    let UZ = this.occ;
    let Ul = this.w;
    let Ux = !UF.precise && !Ug;
    for (let UC = Ub; UC < UW; UC++) {
      let US = this.y0 + (UC + 0.5) * UN;
      for (let UO = UT; UO < UQ; UO++) {
        let Uc = this.x0 + (UO + 0.5) * UN;
        if (Ux) {
          if (Uc >= UG && Uc < Un && US >= UK && US < Uk) {
            UZ[UC * Ul + UO] = 1;
          }
          continue;
        }
        let Ud = Uc - Uy.x;
        let H0 = US - Uy.y;
        let H1 = Ud * UD - H0 * Uf;
        let H2 = Ud * Uf + H0 * UD;
        let H3 = Math.floor(H1 / Uz + UF.ox);
        let H4 = Math.floor(H2 / UR + UF.oy);
        if (!(H3 < 0) && !(H4 < 0) && !(H3 >= Uq) && !(H4 >= Uh)) {
          if (Uu[H4 * Uq + H3]) {
            UZ[UC * Ul + UO] = 1;
          }
        }
      }
    }
  }
  paintRect(Uy, UM, UF, Uz) {
    let UR = this.cs;
    let Ug = Math.floor((Uy - this.x0) / UR);
    let UD = Math.ceil((UF - this.x0) / UR);
    let Uf = Math.floor((UM - this.y0) / UR);
    let UV = Math.ceil((Uz - this.y0) / UR);
    if (Ug < 0) {
      Ug = 0;
    }
    if (Uf < 0) {
      Uf = 0;
    }
    if (UD > this.w) {
      UD = this.w;
    }
    if (UV > this.h) {
      UV = this.h;
    }
    let Ur = this.w;
    let Um = this.occ;
    if (UD > Ug && UV > Uf) {
      this.dirty = true;
    }
    for (let UG = Uf; UG < UV; UG++) {
      Um.fill(1, UG * Ur + Ug, UG * Ur + Math.max(Ug, UD));
    }
  }
  paintLine(Uy, UM, UF, Uz, UR) {
    let Ug = this.cs;
    let UD = this.w;
    let Uf = this.occ;
    this.dirty = true;
    for (let UV = 0; UV < this.h; UV++) {
      let Ur = this.y0 + (UV + 0.5) * Ug - UM;
      for (let Um = 0; Um < UD; Um++) {
        let UG = this.x0 + (Um + 0.5) * Ug - Uy;
        let UK = UG * UF + Ur * Uz;
        if (UK < 0 || UK > 1000) {
          continue;
        }
        if (Math.abs(UG * Uz - Ur * UF) <= UR) {
          Uf[UV * UD + Um] = 1;
        }
      }
    }
  }
  paintSeg(Uy, UM, UF, Uz) {
    let UR = Math.min(Uy, UF) - 2;
    let Ug = Math.max(Uy, UF) + 2;
    let UD = Math.min(UM, Uz) - 2;
    let Uf = Math.max(UM, Uz) + 2;
    let UV = this.cs;
    let Ur = this.w;
    let Um = this.occ;
    let UG = UF - Uy;
    let UK = Uz - UM;
    let Un = UG * UG + UK * UK || 1;
    let Uk = Math.max(0, Math.floor((UR - this.x0) / UV));
    let UN = Math.min(Ur, Math.ceil((Ug - this.x0) / UV));
    let UT = Math.max(0, Math.floor((UD - this.y0) / UV));
    let UQ = Math.min(this.h, Math.ceil((Uf - this.y0) / UV));
    for (let Ub = UT; Ub < UQ; Ub++) {
      for (let UW = Uk; UW < UN; UW++) {
        let UJ = this.x0 + (UW + 0.5) * UV - Uy;
        let Ut = this.y0 + (Ub + 0.5) * UV - UM;
        let Uu = Math.max(0, Math.min(1, (UJ * UG + Ut * UK) / Un));
        let Uq = UJ - UG * Uu;
        let Uh = Ut - UK * Uu;
        if (Uq * Uq + Uh * Uh <= 2.25) {
          Um[Ub * Ur + UW] = 1;
          this.dirty = true;
        }
      }
    }
  }
  paintCircle(Uy, UM, UF) {
    let Uz = this.cs;
    let UR = this.w;
    let Ug = this.occ;
    let UD = (UF + 1) * (UF + 1);
    let Uf = Math.max(0, Math.floor((Uy - UF - 1 - this.x0) / Uz));
    let UV = Math.min(UR, Math.ceil((Uy + UF + 1 - this.x0) / Uz));
    let Ur = Math.max(0, Math.floor((UM - UF - 1 - this.y0) / Uz));
    let Um = Math.min(this.h, Math.ceil((UM + UF + 1 - this.y0) / Uz));
    for (let UG = Ur; UG < Um; UG++) {
      for (let UK = Uf; UK < UV; UK++) {
        let Un = this.x0 + (UK + 0.5) * Uz - Uy;
        let Uk = this.y0 + (UG + 0.5) * Uz - UM;
        if (Un * Un + Uk * Uk <= UD) {
          Ug[UG * UR + UK] = 1;
          this.dirty = true;
        }
      }
    }
  }
  commit(Uy) {
    if (!this.empty || this.empty.length < this.frames) {
      this.empty = new Uint8Array(Math.max(this.frames, 64));
    }
    this.empty[Uy] = this.dirty ? 0 : 1;
    if (!this.dirty) {
      return;
    }
    let UM = this.w;
    let UF = this.h;
    let Uz = Uy * this.stride;
    let UR = this.sat;
    let Ug = this.occ;
    let UD = UM + 1;
    for (let Uf = 0; Uf <= UM; Uf++) {
      UR[Uz + Uf] = 0;
    }
    for (let UV = 1; UV <= UF; UV++) {
      let Ur = 0;
      UR[Uz + UV * UD] = 0;
      for (let Um = 1; Um <= UM; Um++) {
        Ur += Ug[(UV - 1) * UM + Um - 1];
        UR[Uz + UV * UD + Um] = UR[Uz + (UV - 1) * UD + Um] + Ur;
      }
    }
  }
  any(Uy, UM, UF, Uz, UR) {
    if (this.empty[Uy]) {
      return false;
    }
    let Ug = this.cs;
    let UD = Math.floor((UM - this.x0) / Ug);
    let Uf = Math.ceil((Uz - this.x0) / Ug);
    let UV = Math.floor((UF - this.y0) / Ug);
    let Ur = Math.ceil((UR - this.y0) / Ug);
    if (UD < 0) {
      UD = 0;
    }
    if (UV < 0) {
      UV = 0;
    }
    if (Uf > this.w) {
      Uf = this.w;
    }
    if (Ur > this.h) {
      Ur = this.h;
    }
    if (Uf <= UD || Ur <= UV) {
      return false;
    }
    let Um = this.w + 1;
    let UG = Uy * this.stride;
    let UK = this.sat;
    return UK[UG + Ur * Um + Uf] - UK[UG + UV * Um + Uf] - UK[UG + Ur * Um + UD] + UK[UG + UV * Um + UD] > 0;
  }
};
u(Grid, "Grid");
var s = Grid;
var w = [];
var C = null;
var S = null;
var O = 0;
function grid(Uy, UM, UF, Uz, UR, Ug, UD) {
  let Uf = w[Uy];
  if (!Uf || Uf.sat.length < (Uz + 1) * (UR + 1) * UD || Uf.occ.length < Uz * UR) {
    Uf = new s(UM, UF, Uz, UR, Ug, UD);
    w[Uy] = Uf;
  }
  Uf.x0 = UM;
  Uf.y0 = UF;
  Uf.w = Uz;
  Uf.h = UR;
  Uf.cs = Ug;
  Uf.frames = UD;
  Uf.stride = (Uz + 1) * (UR + 1);
  return Uf;
}
u(grid, "grid");
var d = new WeakMap();
function maskOf(Uy, UM) {
  if (Uy._mask && Uy._mask[UM]) {
    return Uy._mask[UM];
  }
  let UF = d.get(Uy);
  if (!UF) {
    d.set(Uy, UF = []);
  }
  if (UF[UM]) {
    return UF[UM];
  }
  let {
    w: Uz,
    h: UR,
    bb: Ug
  } = Uy;
  let UD = new Uint8Array(Uz * UR);
  let Uf = Uy.masks && Uy.masks[Math.min(UM, Uy.masks.length - 1)];
  for (let UV = Ug[1]; UV <= Ug[3]; UV++) {
    for (let Ur = Ug[0]; Ur <= Ug[2]; Ur++) {
      if (Uy.precise && Uf) {
        if (Uf[UV] && Uf[UV][Ur] === "#") {
          UD[UV * Uz + Ur] = 1;
        }
      } else {
        UD[UV * Uz + Ur] = 1;
      }
    }
  }
  UF[UM] = UD;
  return UD;
}
u(maskOf, "maskOf");
function soulKind(Uy) {
  if (!Uy || Uy.destroyed || T.first("obj_purpleheart") || T.first("obj_maskfield")) {
    return null;
  }
  let UM = String(collName(Uy) || "");
  if (/heartgreen/i.test(UM) || L(Uy)) {
    return null;
  }
  {
    let Uz = R(Uy);
    if (Uz !== undefined) {
      return Uz;
    }
  }
  if (Uy.wspeed !== undefined) {
    return "dr";
  }
  if (!T.first("obj_lborder")) {
    return null;
  }
  let UF = Uy.movement;
  if (UF === 1) {
    return "red";
  } else if (UF === 2 || UF === 11 || UF === 12 || UF === 13) {
    if (T.first("obj_plat")) {
      return null;
    } else {
      return "grav";
    }
  } else {
    return null;
  }
}
u(soulKind, "soulKind");
var U2 = {
  2: [0, 1],
  12: [0, -1],
  11: [1, 0],
  13: [-1, 0]
};
var U3 = [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, -1], [-1, 1], [1, 1]];
function soulRect(Uy) {
  let UM = collName(Uy);
  let UF = UM && n[UM];
  let Uz = Uy.image_xscale || 1;
  let UR = Uy.image_yscale || 1;
  if (!UF || !UF.bb) {
    return {
      l: 0,
      t: 0,
      r: 16,
      b: 16
    };
  } else {
    return {
      l: (UF.bb[0] - UF.ox) * Uz,
      t: (UF.bb[1] - UF.oy) * UR,
      r: (UF.bb[2] + 1 - UF.ox) * Uz,
      b: (UF.bb[3] + 1 - UF.oy) * UR
    };
  }
}
u(soulRect, "soulRect");
var U5 = {
  ms: 70,
  escalated: 220,
  min: 18
};
var recordBudget = u((Uy, UM) => Math.min(Uy.budget ?? (UM > 60 ? U5.escalated : U5.ms), Uy.deadline !== undefined ? Math.max(0, Uy.deadline - performance.now()) : Infinity), "recordBudget");
function record(Uy, UM, UF, Uz, UR = 1000000000) {
  let Ug = performance.now();
  let UD = m();
  let Uf = N.synthetic;
  let UV = t();
  e(false);
  b();
  N.synthetic = null;
  let Ur = !!UM && typeof UM == "object";
  let Um = UM !== "dr" && !Ur;
  let UG = Um || y(Uy) ? 1 : 2;
  let UK = Ur ? UM.reach || 200 : (Um ? K.sp || 4 : Uy.wspeed || 4) * UF + 40;
  let Un = Uy.x - UK;
  let Uk = Uy.y - UK;
  let UN = Uy.x + UK;
  let UT = Uy.y + UK;
  if (Um) {
    let H8 = T.first("obj_lborder");
    let H9 = T.first("obj_rborder");
    let HU = T.first("obj_uborder");
    let HH = T.first("obj_dborder");
    if (H8 && H9 && HU && HH) {
      Un = Math.max(Un, H8.x + (Math.abs(H8.sprite_width) || 0) - 24);
      UN = Math.min(UN, H9.x + 24);
      Uk = Math.max(Uk, HU.y + (Math.abs(HU.sprite_height) || 0) - 24);
      UT = Math.min(UT, HH.y + 24);
    }
  }
  let UQ = Math.max(0, Math.floor(Un));
  let Ub = Math.max(0, Math.floor(Uk));
  let UW = Math.min(640, Math.ceil(UN));
  let UJ = Math.min(480, Math.ceil(UT));
  let Ut = Math.max(1, Math.ceil((UW - UQ) / UG));
  let Uu = Math.max(1, Math.ceil((UJ - Ub) / UG));
  let Uq = grid(0, UQ, Ub, Ut, Uu, UG, UF + 1);
  let Uh = grid(1, UQ, Ub, Ut, Uu, UG, UF + 1);
  let UZ = UM === "dr" && !y(Uy) || Ur ? grid(2, UQ, Ub, Ut, Uu, UG, UF + 1) : null;
  let Ul = [];
  let Ux = [];
  let Ua = [];
  let UP = [];
  let Us = [[Uy.x, Uy.y]];
  let Uw = [];
  let UC = () => {
    {
      let Ho = z();
      if (Ho !== undefined) {
        return Ho;
      }
    }
    let Hj = T.first("obj_nonsolid_growtangle");
    if (!Hj) {
      let HI = T.first("obj_growtangle");
      if (HI && HI.keep === 1 && (HI.path_speed !== 0 && HI.path_speed !== undefined || HI.speed !== 0 && HI.speed !== undefined || HI.megakeep === 1)) {
        Hj = HI;
      }
    }
    if (!Hj) {
      return null;
    }
    let Hi = (Math.abs(Hj.sprite_width) || 0) / 2;
    let HY = (Math.abs(Hj.sprite_height) || 0) / 2;
    return [Hj.x - Hi + 5, Hj.x + Hi - 22, Hj.y - HY + 5, Hj.y + HY - 22];
  };
  Uw[0] = UC();
  let US = Uy;
  let UO = 0;
  let Uc = [];
  let Ud = [];
  let H0 = [];
  let H1 = Hj => {
    if (Hj > 0) {
      Us[Hj] = US.destroyed ? Us[Hj - 1] : [US.x, US.y];
      Uw[Hj] = UC();
    }
    Uq.clearOcc();
    Uh.clearOcc();
    if (UZ) {
      UZ.clearOcc();
    }
    let Hi = [];
    for (let HY of Uc) {
      if (!HY.destroyed) {
        continue;
      }
      HY.destroyed = false;
      let Ho = null;
      try {
        Ho = V(HY);
      } finally {
        HY.destroyed = true;
      }
      if (Ho) {
        for (let HI of Ho) {
          let HX = HI.blue ? Uh : Uq;
          if (HI.mask) {
            HX.paint(HY);
          } else if (HI.rect) {
            HX.paintRect(HI.rect[0] - 1, HI.rect[1] - 1, HI.rect[2] + 2, HI.rect[3] + 2);
          } else if (HI.line) {
            HX.paintLine(HI.line[0], HI.line[1], HI.line[2], HI.line[3], HI.line[4]);
          }
        }
      }
    }
    for (let HE of T.list) {
      if (HE.destroyed || HE === US) {
        continue;
      }
      if (UZ && HE.is("obj_battlesolid")) {
        UZ.paint(HE);
        continue;
      }
      let HL = V(HE);
      if (HL) {
        Hi.push(HE);
        for (let HB of HL) {
          let Hv = HB.blue ? Uh : Uq;
          if (HB.mask) {
            Hv.paint(HE);
          } else if (HB.rect) {
            Hv.paintRect(HB.rect[0] - 1, HB.rect[1] - 1, HB.rect[2] + 2, HB.rect[3] + 2);
          } else if (HB.line) {
            Hv.paintLine(HB.line[0], HB.line[1], HB.line[2], HB.line[3], HB.line[4]);
          }
        }
      }
    }
    for (let Hp of Ud) {
      let Hy = Hp.self;
      if (!Hy || Hy === US || !Hy.is || Hy.is("obj_boneplat") || !f(Hy)) {
        continue;
      }
      let HM = Hy.blue === 1 || Hy.is("blt_bluesword") || Hy.is("obj_sans_bonebul") && Hy.type === 1 ? Uh : Uq;
      if (Hp.rect) {
        HM.paintRect(Hp.rect[0] - 1, Hp.rect[1] - 1, Hp.rect[2] + 2, Hp.rect[3] + 2);
      } else if (Hp.seg) {
        HM.paintSeg(Hp.seg[0], Hp.seg[1], Hp.seg[2], Hp.seg[3]);
      } else if (Hp.circle) {
        HM.paintCircle(Hp.circle[0], Hp.circle[1], Hp.circle[2]);
      }
    }
    Ud = [];
    Uc = Hi;
    Uq.commit(Hj);
    Uh.commit(Hj);
    if (UZ) {
      UZ.commit(Hj);
    }
    H0[Hj] = F();
    if (Um) {
      Ua[Hj] = US.destroyed ? Ua[Hj - 1] : US.movement;
      UP[Hj] = US.destroyed ? UP[Hj - 1] : {
        vs: US.vspeed || 0,
        hs: US.hspeed || 0,
        js: US.jumpstage | 0
      };
      let HF = [];
      for (let Hf of T.list) {
        if (Hf.destroyed || !Hf.is("obj_boneplat")) {
          continue;
        }
        let HV = Hf.len || 50;
        HF.push({
          id: Hf,
          l: Hf.x - HV + 2,
          r: Hf.x + HV - 2,
          top: Hf.y - 4,
          bot: Hf.y + 2,
          y: Hf.y,
          hs: Hf.hspeed || 0,
          vs: Hf.vspeed || 0
        });
      }
      Ux[Hj] = HF;
      let HR = T.first("obj_lborder");
      let HA = T.first("obj_rborder");
      let Hg = T.first("obj_uborder");
      let HD = T.first("obj_dborder");
      Ul[Hj] = HR && HA && Hg && HD ? [HR.x + (Math.abs(HR.sprite_width) || 0), HA.x - (Math.abs(Uy.sprite_width) || 16), Hg.y + (Math.abs(Hg.sprite_height) || 0), HD.y - (Math.abs(Uy.sprite_height) || 16)] : Ul[Hj - 1] || [0, 624, 0, 464];
    }
  };
  let H2 = Um ? K.invc | 0 : K.inv | 0;
  let H3 = Uy.shot === 1 || /yellow/i.test(String(Uy.sprite_index || ""));
  let H4 = K.mnfight;
  let H5 = 0;
  let H6 = Ur && N.held.b1 ? ["z"] : [];
  let H7 = false;
  try {
    for (let Hj of ["left", "right", "up", "down"]) {
      N.held[Hj] = false;
    }
    H1(0);
    for (let Hi = 1; Hi <= UF; Hi++) {
      for (let HI of ["left", "right", "up", "down"]) {
        N.held[HI] = false;
      }
      let HY = Uz && Uz[Hi - 1];
      if (HY) {
        for (let HX of HY) {
          if (HX === "left" || HX === "right" || HX === "up" || HX === "down") {
            N.held[HX] = true;
          }
        }
      }
      let Ho = E(HY || [], Hi > 1 ? Uz && Uz[Hi - 2] || [] : H6);
      if (Ho || H7) {
        N.synthetic = Ho;
        H7 = !!Ho;
      }
      if (Um) {
        K.invc = 99;
      } else {
        K.inv = 99;
      }
      if (H3) {
        let HE = Hi % 4 === 1;
        N.synthetic = () => {
          N.pressed.b1 = HE;
          N.held.b1 = HE;
          if (Ho) {
            Ho();
          }
        };
      }
      Q.on = true;
      Q.shapes.length = 0;
      try {
        k(r, gfx());
      } finally {
        Q.on = false;
        Ud = Q.shapes.slice();
        Q.shapes.length = 0;
      }
      a.frames++;
      UO = Hi;
      H1(Hi);
      if (K.battleover || US.destroyed || K.mnfight !== H4 && ++H5 >= 3) {
        break;
      }
      if (Hi >= U5.min && performance.now() - Ug > UR) {
        a.cut = (a.cut | 0) + 1;
        break;
      }
    }
  } catch {} finally {
    G(UD);
    W();
    N.synthetic = Uf;
    e(UV);
  }
  return {
    hz: Uq,
    blue: Uh,
    solid: UZ,
    walls: Ul,
    plats: Ux,
    modes: Ua,
    vel: UP,
    soulAt: Us,
    clampBox: Uw,
    n: UO,
    inv0: H2,
    goals5: H0
  };
}
u(record, "record");
function drMove(Uy, UM, UF, Uz, UR, Ug) {
  let UD = UF * UR;
  let Uf = Uz * UR;
  let UV = UF < 0;
  let Ur = UF > 0;
  let Um = Uz < 0;
  let UG = Uz > 0;
  if (Ug(Uy + UD, UM)) {
    for (let Un = UR; Un > 0; Un--) {
      if (!UG && !Ug(Uy + UD, UM - Un)) {
        UM -= Un;
        Uf = 0;
        break;
      }
      if (!Um && !Ug(Uy + UD, UM + Un)) {
        UM += Un;
        Uf = 0;
        break;
      }
    }
    let UK = 0;
    if (UD > 0) {
      for (let Uk = UD; Uk >= 0; Uk--) {
        if (!Ug(Uy + Uk, UM)) {
          UD = Uk;
          UK = 1;
          break;
        }
      }
    }
    if (UD < 0) {
      for (let UN = UD; UN <= 0; UN++) {
        if (!Ug(Uy + UN, UM)) {
          UD = UN;
          UK = 1;
          break;
        }
      }
    }
    if (!UK) {
      UD = 0;
    }
  }
  if (Ug(Uy, UM + Uf)) {
    for (let UQ = UR; UQ > 0; UQ--) {
      if (!Ur && !Ug(Uy - UQ, UM + Uf)) {
        Uy -= UQ;
        UD = 0;
        break;
      }
      if (!UV && !Ug(Uy + UQ, UM + Uf)) {
        Uy += UQ;
        UD = 0;
        break;
      }
    }
    let UT = 0;
    if (Uf > 0) {
      for (let Ub = Uf; Ub >= 0; Ub--) {
        if (!Ug(Uy, UM + Ub)) {
          Uf = Ub;
          UT = 1;
          break;
        }
      }
    }
    if (Uf < 0) {
      for (let UW = Uf; UW <= 0; UW++) {
        if (!Ug(Uy, UM + UW)) {
          Uf = UW;
          UT = 1;
          break;
        }
      }
    }
    if (!UT) {
      Uf = 0;
    }
  }
  if (Ug(Uy + UD, UM + Uf)) {
    let UJ = 0;
    let Ut = UD;
    let Uu = Uf;
    while (Uu !== 0 || Ut !== 0) {
      if (!Ug(Uy + Ut, UM + Uu)) {
        UD = Ut;
        Uf = Uu;
        UJ = 1;
        break;
      }
      if (Math.abs(Uu) >= 1) {
        if (Uu > 0) {
          Uu--;
        } else {
          Uu++;
        }
      } else {
        Uu = 0;
      }
      if (Math.abs(Ut) >= 1) {
        if (Ut > 0) {
          Ut--;
        } else {
          Ut++;
        }
      } else {
        Ut = 0;
      }
    }
    if (!UJ) {
      UD = 0;
      Uf = 0;
    }
  }
  return [Uy + UD, UM + Uf];
}
u(drMove, "drMove");
function oracleCovers(Uy) {
  if (g(Uy) || A()) {
    return false;
  } else {
    return !!soulKind(Uy);
  }
}
u(oracleCovers, "oracleCovers");
function oraclePlan(Uy = {}) {
  let UM = () => Uy.deadline !== undefined && performance.now() >= Uy.deadline;
  let UF = planOnce(Uy);
  if (UF && UF.priced) {
    return UF;
  }
  if (UF && UF.hits > 0 && !Uy.horizon && !Uy.noEscalate && !UM()) {
    let UR = planOnce(Object.assign({}, Uy, {
      horizon: 100,
      cap: Math.max(Uy.cap || 0, 2000)
    }));
    if (UR && UR.hits < UF.hits) {
      UF = UR;
    }
  }
  let Uz = T.first("obj_heart");
  if (UF && UF.hits > 0 && !Uy.noEscalate && Uz && (Uz.shot === 1 || /yellow/i.test(String(Uz.sprite_index || "")))) {
    for (let Ug of ["up", "down", "left", "right"]) {
      for (let UD of [8, 16, 28]) {
        if (UM()) {
          break;
        }
        let Uf = [];
        for (let Ur = 0; Ur < UD; Ur++) {
          Uf.push([Ug]);
        }
        let UV = planOnce(Object.assign({}, Uy, {
          guide: Uf
        }));
        if (UV && UV.hits < UF.hits) {
          UF = UV;
        }
        if (UF.hits === 0) {
          break;
        }
      }
      if (UF.hits === 0 || UM()) {
        break;
      }
    }
  }
  for (let Um = 0; Um < 2 && UF && UF.hits > 0 && !Uy.noEscalate && !UM(); Um++) {
    let UG = planOnce(Object.assign({}, Uy, {
      guide: UF.keys,
      horizon: UF.horizon > 45 ? 100 : undefined
    }));
    if (!UG || UG.hits >= UF.hits) {
      break;
    }
    UF = UG;
  }
  return UF;
}
u(oraclePlan, "oraclePlan");
var UH = {
  a: null,
  b: null,
  idx: null,
  cap: 0,
  layers: [],
  hash: new Map()
};
var dpFull = u(Uy => ({
  n: 0,
  X: new Float64Array(Uy),
  Y: new Float64Array(Uy),
  U: new Float64Array(Uy),
  JS: new Int8Array(Uy),
  LK: new Int16Array(Uy),
  C: new Float64Array(Uy),
  HT: new Int16Array(Uy),
  A: new Int8Array(Uy),
  P: new Int32Array(Uy)
}), "dpFull");
function dpScratch(Uy) {
  if (UH.cap < Uy) {
    UH.a = dpFull(Uy);
    UH.b = dpFull(Uy);
    UH.idx = new Int32Array(Uy);
    UH.cap = Uy;
  }
  return UH;
}
u(dpScratch, "dpScratch");
function dpLayer(Uy, UM) {
  let UF = UM.n;
  let Uz = Math.max(UF, 1200);
  let UR = UH.layers[Uy];
  if (!UR || UR.X.length < UF) {
    UR = UH.layers[Uy] = {
      n: 0,
      X: new Float64Array(Uz),
      Y: new Float64Array(Uz),
      HT: new Int16Array(Uz),
      A: new Int8Array(Uz),
      P: new Int32Array(Uz)
    };
  }
  UR.n = UF;
  UR.X.set(UM.X.subarray(0, UF));
  UR.Y.set(UM.Y.subarray(0, UF));
  UR.HT.set(UM.HT.subarray(0, UF));
  UR.A.set(UM.A.subarray(0, UF));
  UR.P.set(UM.P.subarray(0, UF));
  return UR;
}
u(dpLayer, "dpLayer");
function dpHash(Uy) {
  let UM = UH.hash.get(Uy);
  if (!UM) {
    UM = {
      hk: new Float64Array(Uy),
      hv: new Int32Array(Uy),
      hs: new Int32Array(Uy),
      stamp: 0
    };
    UH.hash.set(Uy, UM);
  }
  if (UM.stamp > 1073741823) {
    UM.hs.fill(0);
    UM.stamp = 0;
  }
  return UM;
}
u(dpHash, "dpHash");
function planOnce(Uy = {}) {
  let UM = T.first("obj_heart");
  let UF = soulKind(UM);
  if (!UF) {
    return null;
  }
  if (typeof UF == "object") {
    return planCustom(UF, Uy, UM);
  }
  let Uz = performance.now();
  let UR = Uy.horizon || (UF === "dr" ? 36 : 45);
  let Ug = performance.now();
  let UD = record(UM, UF, UR, Uy.guide || null, recordBudget(Uy, UR));
  a.rec = (a.rec || 0) + (performance.now() - Ug);
  let Uf = UD.n;
  if (Uf < 2) {
    return null;
  }
  let UV = soulRect(UM);
  let Ur = UF !== "dr";
  let Um = 0;
  let UG = Ur ? 4 : 6;
  let UK = (HD, Hf, HV, Hr) => UD.hz.any(HD, Hf + UV.l + Um, HV + UV.t + Um, Hf + UV.r - Um, HV + UV.b - Um) || Hr && UD.blue.any(HD, Hf + UV.l + Um, HV + UV.t + Um, Hf + UV.r - Um, HV + UV.b - Um);
  let Un = (HD, Hf, HV) => UD.hz.any(HD, Hf + UV.l - UG, HV + UV.t - UG, Hf + UV.r + UG, HV + UV.b + UG);
  let Uk = UF === "dr" ? M(UM) : null;
  let UN = Uk ? () => Uk : UD.solid ? HD => (Hf, HV) => UD.solid.any(HD, Hf + UV.l, HV + UV.t, Hf + UV.r, HV + UV.b) : null;
  let UT = Ur ? K.sp || 4 : UM.wspeed || 4;
  let UQ = UM.movement;
  let Ub = UF === "dr" ? B(UM) : null;
  let UW = UF === "dr" && p(UM) || 1000;
  UD.modes[0] = UQ;
  let UJ = U2[UQ];
  let Uu = (HD, Hf, HV) => HD[1] ? Hf * HD[1] : HV * HD[0];
  let Uq = UJ ? Uu(UJ, UM.vspeed || 0, UM.hspeed || 0) : 0;
  let Uh = UM.jumpstage | 0;
  let UZ = UD.walls[0] ? (UD.walls[0][0] + UD.walls[0][1]) / 2 : UM.x;
  let Ul = UD.walls[0] ? (UD.walls[0][2] + UD.walls[0][3]) / 2 : UM.y;
  let Ux = new Float64Array(Uf + 1);
  let Ua = new Float64Array(Uf + 1);
  if (UF === "dr" || UF === "red") {
    let HD = Uy.guide || [];
    for (let Hf = 1; Hf <= Uf; Hf++) {
      let HV = UD.soulAt[Hf - 1];
      let Hr = UD.soulAt[Hf];
      if (!HV || !Hr) {
        continue;
      }
      let Hm = HD[Hf - 1] || [];
      let HG = (Hm.includes("right") ? 1 : 0) - (Hm.includes("left") ? 1 : 0);
      let HK = (Hm.includes("down") ? 1 : 0) - (Hm.includes("up") ? 1 : 0);
      let Hn = HV[0];
      let Hk = HV[1];
      if (UF === "dr") {
        let HQ = drMove(Hn, Hk, HG, HK, UT, UN ? UN(Hf) : () => false);
        Hn = HQ[0];
        Hk = HQ[1];
        let Hb = UD.clampBox[Hf];
        if (Hb) {
          Hn = Math.min(Math.max(Hn, Hb[0]), Hb[1]);
          Hk = Math.min(Math.max(Hk, Hb[2]), Hb[3]);
        }
      } else {
        let HW = UD.walls[Hf] || UD.walls[Hf - 1];
        if ((UD.modes[Hf] ?? UD.modes[Hf - 1]) === 1) {
          Hn += HG * UT;
          Hk += HK * UT;
        }
        if (HW) {
          Hn = Math.min(Math.max(Hn, HW[0]), HW[1]);
          Hk = Math.min(Math.max(Hk, HW[2]), HW[3]);
        }
      }
      let HN = Hr[0] - Hn;
      let HT = Hr[1] - Hk;
      if (Math.abs(HN) > 0.05 && Math.abs(HN) < 40) {
        Ux[Hf] = HN;
      }
      if (Math.abs(HT) > 0.05 && Math.abs(HT) < 40) {
        Ua[Hf] = HT;
      }
    }
  }
  let UP = U3;
  let Us = null;
  for (let HJ of T.list) {
    if (!HJ.destroyed && HJ.is("obj_boneplat") && HJ.lock === 1) {
      Us = HJ;
    }
  }
  let Uw = Uy.cap || 1200;
  let UC = Uy.near || 12;
  let US = Uw * UP.length + 16;
  let UO = new Map();
  let Uc = 0;
  let Ud = Hu => {
    if (!Hu) {
      return 0;
    }
    let Hq = UO.get(Hu);
    if (!Hq) {
      Hq = ++Uc;
      UO.set(Hu, Hq);
    }
    return Hq;
  };
  let H0 = dpScratch(US);
  let H1 = H0.a;
  let H2 = H0.b;
  H1.n = 1;
  H1.X[0] = UM.x;
  H1.Y[0] = UM.y;
  H1.U[0] = Uq;
  H1.JS[0] = Uh;
  H1.LK[0] = Ud(Us);
  H1.C[0] = 0;
  H1.HT[0] = 0;
  H1.A[0] = -1;
  H1.P[0] = -1;
  let H3 = [dpLayer(0, H1)];
  let H4 = [];
  for (let [Hu, Hq] of UO) {
    H4[Hq] = Hu;
  }
  let H5 = 0;
  let H6 = 1 << Math.ceil(Math.log2(US * 2 + 64));
  let H7 = dpHash(H6);
  let H8 = H7.hk;
  let H9 = H7.hv;
  let HU = H7.hs;
  let HH = H7.stamp;
  let Hj = Hh => {
    let HZ = (Math.imul(Hh | 0, 2654435761) ^ Math.imul(Hh / 4294967296 | 0, 2246822507)) & H6 - 1;
    while (HU[HZ] === HH && H8[HZ] !== Hh) {
      HZ = HZ + 1 & H6 - 1;
    }
    return HZ;
  };
  let Hi = UD.hz.w * UD.hz.cs + 4;
  let HY = UD.hz.h * UD.hz.cs + 4;
  let Ho = UD.hz.x0 - 2;
  let HI = UD.hz.y0 - 2;
  if (!C || C.length < Hi * HY * 2) {
    C = new Int8Array(Hi * HY * 2);
    S = new Int32Array(Hi * HY * 2);
    O = 0;
  }
  if (O > 1073741823) {
    S.fill(0);
    O = 0;
  }
  let HX = C;
  let HE = S;
  let HL = O;
  O += Uf + 2;
  for (let Hh = 1; Hh <= Uf; Hh++) {
    let HZ = H2;
    let Hl = Math.min(US, H1.n * UP.length);
    HZ.n = 0;
    HH = ++H7.stamp;
    let Hx = UD.walls[Hh] || UD.walls[Hh - 1];
    let Ha = UN ? UN(Hh) : null;
    let HP = Hh <= UD.inv0;
    let Hs = UF === "dr" ? -1 : UD.modes[Hh] ?? UD.modes[Hh - 1];
    let Hw = U2[Hs] || null;
    let HC = UF !== "dr" && Hh > 1 && Hs !== UD.modes[Hh - 1];
    let HS = UD.vel[Hh];
    let HO = Hw && Hs === 2 ? UD.plats[Hh] : null;
    if (HO) {
      for (let Hd of HO) {
        let j0 = Ud(Hd.id);
        Hd.pid = j0;
        H4[j0] = Hd.id;
      }
    }
    let Hc = Hh <= UC || (Hh - UC) % 3 === 1;
    for (let j1 = 0; j1 < H1.n; j1++) {
      let j2 = H1.X[j1];
      let j3 = H1.Y[j1];
      let j4 = H1.A[j1];
      let j5 = H1.C[j1];
      let j6 = H1.HT[j1];
      for (let j7 = 0; j7 < UP.length; j7++) {
        if (!Hc && j4 >= 0 && j7 !== j4) {
          continue;
        }
        let j8 = UP[j7];
        let j9 = j2;
        let jU = j3;
        let jH = H1.U[j1];
        let jj = H1.JS[j1];
        let ji = H1.LK[j1];
        if (HC && Hw && HS) {
          jH = Uu(Hw, HS.vs, HS.hs);
          jj = HS.js;
          ji = 0;
        }
        if (UF === "dr") {
          let jR = drMove(j9, jU, j8[0], j8[1], UT, Ha);
          j9 = jR[0] + Ux[Hh];
          jU = jR[1] + Ua[Hh];
          let jA = UD.clampBox[Hh];
          if (jA) {
            if (j9 < jA[0]) {
              j9 = jA[0];
            }
            if (j9 > jA[1]) {
              j9 = jA[1];
            }
            if (jU < jA[2]) {
              jU = jA[2];
            }
            if (jU > jA[3]) {
              jU = jA[3];
            }
          }
          if (j9 < 0) {
            j9 = 0;
          }
          if (j9 > 624) {
            j9 = 624;
          }
          if (jU < 0) {
            jU = 0;
          }
        } else if (Hs === 1 || !Hw) {
          if (Hs === 1) {
            j9 += j8[0] * UT;
            jU += j8[1] * UT;
          }
          if (Hx) {
            if (j9 < Hx[0]) {
              j9 = Hx[0];
            }
            if (j9 > Hx[1]) {
              j9 = Hx[1];
            }
            if (jU < Hx[2]) {
              jU = Hx[2];
            }
            if (jU > Hx[3]) {
              jU = Hx[3];
            }
          }
          j9 += Ux[Hh];
          jU += Ua[Hh];
        } else {
          let jg = Hw[1] ? j8[0] : j8[1];
          let jD = j8[0] * Hw[0] + j8[1] * Hw[1] < 0;
          if (Hw[1]) {
            j9 += jg * UT;
          } else {
            jU += jg * UT;
          }
          if (jD && jj === 1 && jH === 0) {
            jj = 2;
            jH = -6;
          }
          if (jj === 2) {
            if (!jD && jH <= -1) {
              jH = -1;
            }
            if (jH > 0.5 && jH < 8) {
              jH += 0.6;
            } else if (jH > -1 && jH <= 0.5) {
              jH += 0.2;
            } else if (jH > -4 && jH <= -1) {
              jH += 0.5;
            } else if (jH <= -4) {
              jH += 0.2;
            }
          }
          j9 += Hw[0] * jH;
          jU += Hw[1] * jH;
          if (Hx) {
            let jf = Hw[1] ? Hx[2] : Hx[0];
            let jV = Hw[1] ? Hx[3] : Hx[1];
            let jr = Hw[1] ? jU : j9;
            let jm = Hw[0] + Hw[1] > 0;
            if (jm ? jr >= jV : jr <= jf) {
              jr = jm ? jV : jf;
              jj = 1;
              jH = 0;
            }
            if (jm ? jr < jf : jr > jV) {
              jr = jm ? jf : jV;
              if (jH < 0) {
                jH = 0;
              }
            }
            if (Hw[1]) {
              jU = jr;
            } else {
              j9 = jr;
            }
            if (Hw[1]) {
              if (j9 < Hx[0]) {
                j9 = Hx[0];
              }
              if (j9 > Hx[1]) {
                j9 = Hx[1];
              }
            } else {
              if (jU < Hx[2]) {
                jU = Hx[2];
              }
              if (jU > Hx[3]) {
                jU = Hx[3];
              }
            }
          }
          if (HO && HO.length) {
            let jG = 0;
            let jK = null;
            for (let jn of HO) {
              let jk = j9 + UV.l <= jn.r + 1 && j9 + UV.r >= jn.l && jU + UV.t <= jn.bot + 1 && jU + UV.b >= jn.top;
              if (jk && jH >= 0 && jU <= jn.y - 11) {
                jU = jn.y - 16;
                jH = 0;
                jj = 1;
                jG = jn.pid;
                jK = jn;
              } else if (!jk && ji === jn.pid && jj === 1) {
                jj = 2;
                jH = 0;
              }
              if (jk && ji === jn.pid && !jG && jH === 0 && jj === 1) {
                jG = jn.pid;
                jK = jn;
              }
            }
            ji = jG;
            if (jK) {
              j9 += jK.hs;
              jU += jK.vs;
            }
          } else if (ji) {
            if (jj === 1) {
              jj = 2;
              jH = 0;
            }
            ji = 0;
          }
        }
        let jY = Math.abs(j9 - j2) > 0.01 || Math.abs(jU - j3) > 0.01;
        let jo = j5;
        let jI = j6;
        let jX;
        let jE = Math.floor(j9);
        let jL = Math.floor(jU);
        let jB = (Ur || j9 === jE && jU === jL) && jE - Ho >= 0 && jL - HI >= 0 && jE - Ho < Hi && jL - HI < HY ? ((jL - HI) * Hi + (jE - Ho)) * 2 + (j9 !== jE || jU !== jL ? 1 : 0) : -1;
        if (jB >= 0 && HE[jB] === HL + Hh) {
          jX = HX[jB];
        } else {
          jX = UK(Hh, j9, jU, false) ? 1 : UK(Hh, j9, jU, true) ? 2 : Un(Hh, j9, jU) ? 3 : 0;
          if (jB >= 0) {
            HE[jB] = HL + Hh;
            HX[jB] = jX;
          }
        }
        let jv = UW !== 1000 && UF === "dr" && jH > 0 && Hh - jH < 30;
        if (!HP && !jv && (jX === 1 || jX === 2 && jY)) {
          jo += UW;
          jI++;
          if (UW !== 1000 && UF === "dr") {
            jH = Hh;
          }
        } else if (jX === 3) {
          jo += 2;
        }
        if (j7 !== j4 && j4 >= 0) {
          jo += 0.15;
        }
        if (j7 !== 0) {
          jo += 0.02;
        }
        if (Ub) {
          jo += Ub(j9, jU);
        }
        {
          let jN = UD.goals5 && UD.goals5[Hh];
          if (jN) {
            for (let jT of jN) {
              if (j9 >= jT.rect[0] && j9 <= jT.rect[2] && jU >= jT.rect[1] && jU <= jT.rect[3]) {
                jo -= jT.w;
              }
            }
          }
        }
        let jp = Math.round(j9 / (Ur ? 1 : 2));
        let jy = Math.round(jU / (Ur ? 1 : 2));
        let jM = Hw ? (((jp * 512 + jy) * 128 + (Math.round(jH * 5) + 64)) * 3 + jj) * 64 + ji : jp * 512 + jy;
        let jF = Hj(jM);
        let jz;
        if (HU[jF] !== HH) {
          if (HZ.n >= Hl) {
            continue;
          }
          jz = HZ.n++;
          HU[jF] = HH;
          H8[jF] = jM;
          H9[jF] = jz;
        } else if (jo < HZ.C[H9[jF]]) {
          jz = H9[jF];
        } else {
          H5++;
          continue;
        }
        HZ.X[jz] = j9;
        HZ.Y[jz] = jU;
        HZ.U[jz] = jH;
        HZ.JS[jz] = jj;
        HZ.LK[jz] = ji;
        HZ.C[jz] = jo;
        HZ.HT[jz] = jI;
        HZ.A[jz] = j7;
        HZ.P[jz] = j1;
        H5++;
      }
    }
    if (HZ.n > Uw) {
      let jQ = H0.idx.subarray(0, HZ.n);
      for (let jJ = 0; jJ < HZ.n; jJ++) {
        jQ[jJ] = jJ;
      }
      let jb = HZ.C;
      jQ.sort((ju, jq) => jb[ju] - jb[jq]);
      let jW = H1;
      for (let ju = 0; ju < Uw; ju++) {
        let jq = jQ[ju];
        jW.X[ju] = HZ.X[jq];
        jW.Y[ju] = HZ.Y[jq];
        jW.U[ju] = HZ.U[jq];
        jW.JS[ju] = HZ.JS[jq];
        jW.LK[ju] = HZ.LK[jq];
        jW.C[ju] = HZ.C[jq];
        jW.HT[ju] = HZ.HT[jq];
        jW.A[ju] = HZ.A[jq];
        jW.P[ju] = HZ.P[jq];
      }
      jW.n = Uw;
      H2 = HZ;
      H1 = jW;
    } else {
      H2 = H1;
      H1 = HZ;
    }
    H3.push(dpLayer(H3.length, H1));
    if (!H1.n) {
      break;
    }
  }
  let HB = H1;
  let Hv = H3.length - 1;
  let Hp = -1;
  let Hy = Infinity;
  for (let jh = 0; jh < HB.n; jh++) {
    let jZ = HB.C[jh];
    let jl = HB.X[jh];
    let jx = HB.Y[jh];
    if (UD.hz.any(Hv, jl + UV.l - 16, jx + UV.t - 16, jl + UV.r + 16, jx + UV.b + 16)) {
      jZ += 3;
    }
    if (!Ub) {
      jZ += (Math.abs(jl - UZ) + Math.abs(jx - Ul)) * 0.01;
    }
    if (jZ < Hy) {
      Hy = jZ;
      Hp = jh;
    }
  }
  if (Hp < 0) {
    return null;
  }
  let HM = [];
  let HF = [];
  for (let ja = Hv, jP = Hp; ja > 0; ja--) {
    let js = H3[ja];
    HM.push(js.A[jP]);
    HF.push([js.X[jP], js.Y[jP], js.HT[jP]]);
    jP = js.P[jP];
  }
  HM.reverse();
  HF.reverse();
  let HR = {
    hits: HB.HT[Hp]
  };
  let HA = HM.map(jw => {
    let jC = UP[jw];
    let jS = [];
    if (jC[0] < 0) {
      jS.push("left");
    }
    if (jC[0] > 0) {
      jS.push("right");
    }
    if (jC[1] < 0) {
      jS.push("up");
    }
    if (jC[1] > 0) {
      jS.push("down");
    }
    return jS;
  });
  let Hg = performance.now() - Uz;
  a.plans++;
  a.ms += Hg;
  a.lastMs = Hg;
  a.states = H5;
  a.lastHits = HR.hits;
  a.mode = UF;
  return {
    keys: HA,
    pos: HF,
    hits: HR.hits,
    mode: UF,
    horizon: Uf,
    ms: Hg,
    rec: UD,
    priced: UW !== 1000
  };
}
u(planOnce, "planOnce");
function planCustom(Uy, UM, UF) {
  let Uz = Uy.inst && !Uy.inst.destroyed ? Uy.inst : UF;
  if (!Uz || !Array.isArray(Uy.acts) || !Uy.acts.length || typeof Uy.step != "function" || typeof Uy.init != "function") {
    return null;
  }
  let UR = performance.now();
  let Ug = UM.horizon || Uy.horizon || 36;
  let UD = performance.now();
  let Uf = record(Uz, Uy, Ug, UM.guide || null, recordBudget(UM, Ug));
  a.rec = (a.rec || 0) + (performance.now() - UD);
  let UV = Uf.n;
  if (UV < 2) {
    return null;
  }
  let Ur = Uy.rect || soulRect(Uz);
  let Um = 6;
  let UG = (H8, H9, HU, HH) => Uf.hz.any(H8, H9 + Ur.l, HU + Ur.t, H9 + Ur.r, HU + Ur.b) || HH && Uf.blue.any(H8, H9 + Ur.l, HU + Ur.t, H9 + Ur.r, HU + Ur.b);
  let UK = (H8, H9, HU) => Uf.hz.any(H8, H9 + Ur.l - Um, HU + Ur.t - Um, H9 + Ur.r + Um, HU + Ur.b + Um);
  let Un = H8 => Uf.solid ? (H9, HU) => Uf.solid.any(H8, H9 + Ur.l, HU + Ur.t, H9 + Ur.r, HU + Ur.b) : () => false;
  let Uk = B(Uz);
  let UN = Uy.acts;
  let UT = UM.cap || Uy.cap || 1200;
  let UQ = UM.near || Uy.near || 12;
  let Ub = UT * UN.length + 16;
  let UW = 6;
  let UJ = H8 => ({
    n: 0,
    S: new Float64Array(H8 * UW),
    C: new Float64Array(H8),
    HT: new Int16Array(H8),
    A: new Int16Array(H8),
    P: new Int32Array(H8)
  });
  let Uu = UJ(1);
  let Uq = Uy.init(Uz) || [Uz.x, Uz.y];
  for (let H8 = 0; H8 < UW; H8++) {
    Uu.S[H8] = Number(Uq[H8]) || 0;
  }
  Uu.n = 1;
  Uu.C[0] = 0;
  Uu.HT[0] = 0;
  Uu.A[0] = -1;
  Uu.P[0] = -1;
  let Uh = [Uu];
  let UZ = 1 << Math.ceil(Math.log2(Ub * 2 + 64));
  let Ul = new Float64Array(UZ);
  let Ux = new Int32Array(UZ);
  let Ua = new Int32Array(UZ);
  let UP = 0;
  let Us = 0;
  let Uw = H9 => {
    let HU = (Math.imul(H9 | 0, 2654435761) ^ Math.imul(H9 / 4294967296 | 0, 2246822507)) & UZ - 1;
    while (Ua[HU] === UP && Ul[HU] !== H9) {
      HU = HU + 1 & UZ - 1;
    }
    return HU;
  };
  let UC = typeof Uy.key == "function" ? Uy.key : H9 => {
    let HU = 0;
    for (let HH = 2; HH < UW; HH++) {
      HU = Math.imul(HU, 31) + Math.round(H9[HH] * 4) | 0;
    }
    return (Math.round(H9[0] / 2) * 512 + Math.round(H9[1] / 2)) * 65536 + (HU & 65535);
  };
  let US = typeof Uy.vulnerable == "function" ? Uy.vulnerable : null;
  let UO = new Float64Array(UW);
  for (let H9 = 1; H9 <= UV; H9++) {
    let HU = UJ(Math.min(Ub, Uu.n * UN.length));
    UP++;
    let HH = H9 <= Uf.inv0;
    let Hj = H9 <= UQ || (H9 - UQ) % 3 === 1;
    let Hi = {
      pm: Un(H9),
      clamp: Uf.clampBox[H9] || null,
      soulAt: Uf.soulAt,
      t: H9
    };
    let HY = Uf.goals5 && Uf.goals5[H9];
    for (let Ho = 0; Ho < Uu.n; Ho++) {
      let HI = Uu.A[Ho];
      let HX = Uu.C[Ho];
      let HE = Uu.HT[Ho];
      let HL = Ho * UW;
      for (let HB = 0; HB < UN.length; HB++) {
        if (!Hj && HI >= 0 && HB !== HI) {
          continue;
        }
        for (let Hf = 0; Hf < UW; Hf++) {
          UO[Hf] = Uu.S[HL + Hf];
        }
        try {
          Uy.step(UO, HB, H9, Hi);
        } catch {
          continue;
        }
        let Hv = UO[0];
        let Hp = UO[1];
        if (!Number.isFinite(Hv) || !Number.isFinite(Hp)) {
          continue;
        }
        let Hy = Math.abs(Hv - Uu.S[HL]) > 0.01 || Math.abs(Hp - Uu.S[HL + 1]) > 0.01;
        let HM = HX;
        let HF = HE;
        let HR = UG(H9, Hv, Hp, false) ? 1 : UG(H9, Hv, Hp, true) ? 2 : UK(H9, Hv, Hp) ? 3 : 0;
        if (!HH && (!US || US(UO)) && (HR === 1 || HR === 2 && Hy)) {
          HM += 1000;
          HF++;
        } else if (HR === 3) {
          HM += 2;
        }
        if (HB !== HI && HI >= 0) {
          HM += 0.15;
        }
        if (UN[HB].length) {
          HM += 0.02;
        }
        if (Uk) {
          HM += Uk(Hv, Hp);
        }
        if (HY) {
          for (let HV of HY) {
            if (Hv >= HV.rect[0] && Hv <= HV.rect[2] && Hp >= HV.rect[1] && Hp <= HV.rect[3]) {
              HM -= HV.w;
            }
          }
        }
        let HA = UC(UO);
        let Hg = Uw(HA);
        let HD;
        if (Ua[Hg] !== UP) {
          if (HU.n >= HU.C.length) {
            continue;
          }
          HD = HU.n++;
          Ua[Hg] = UP;
          Ul[Hg] = HA;
          Ux[Hg] = HD;
        } else if (HM < HU.C[Ux[Hg]]) {
          HD = Ux[Hg];
        } else {
          Us++;
          continue;
        }
        for (let Hr = 0; Hr < UW; Hr++) {
          HU.S[HD * UW + Hr] = UO[Hr];
        }
        HU.C[HD] = HM;
        HU.HT[HD] = HF;
        HU.A[HD] = HB;
        HU.P[HD] = Ho;
        Us++;
      }
    }
    if (HU.n > UT) {
      let Hm = new Int32Array(HU.n);
      for (let Hn = 0; Hn < HU.n; Hn++) {
        Hm[Hn] = Hn;
      }
      let HG = HU.C;
      Hm.sort((Hk, HN) => HG[Hk] - HG[HN]);
      let HK = UJ(UT);
      for (let Hk = 0; Hk < UT; Hk++) {
        let HN = Hm[Hk];
        for (let HT = 0; HT < UW; HT++) {
          HK.S[Hk * UW + HT] = HU.S[HN * UW + HT];
        }
        HK.C[Hk] = HU.C[HN];
        HK.HT[Hk] = HU.HT[HN];
        HK.A[Hk] = HU.A[HN];
        HK.P[Hk] = HU.P[HN];
      }
      HK.n = UT;
      Uu = HK;
    } else {
      Uu = HU;
    }
    Uh.push(Uu);
    if (!Uu.n) {
      break;
    }
  }
  let Uc = Uh[Uh.length - 1];
  let Ud = Uh.length - 1;
  let H0 = Uz.x;
  let H1 = Uz.y;
  let H2 = -1;
  let H3 = Infinity;
  for (let HQ = 0; HQ < Uc.n; HQ++) {
    let Hb = Uc.C[HQ];
    let HW = Uc.S[HQ * UW];
    let HJ = Uc.S[HQ * UW + 1];
    if (Uf.hz.any(Ud, HW + Ur.l - 16, HJ + Ur.t - 16, HW + Ur.r + 16, HJ + Ur.b + 16)) {
      Hb += 3;
    }
    if (!Uk) {
      Hb += (Math.abs(HW - H0) + Math.abs(HJ - H1)) * 0.002;
    }
    if (Hb < H3) {
      H3 = Hb;
      H2 = HQ;
    }
  }
  if (H2 < 0) {
    return null;
  }
  let H4 = [];
  let H5 = [];
  for (let Ht = Ud, Hu = H2; Ht > 0; Ht--) {
    let Hq = Uh[Ht];
    H4.push(Hq.A[Hu]);
    H5.push([Hq.S[Hu * UW], Hq.S[Hu * UW + 1], Hq.HT[Hu]]);
    Hu = Hq.P[Hu];
  }
  H4.reverse();
  H5.reverse();
  let H6 = H4.map(Hh => UN[Hh].slice());
  let H7 = performance.now() - UR;
  a.plans++;
  a.ms += H7;
  a.lastMs = H7;
  a.states = Us;
  a.lastHits = Uc.HT[H2];
  a.mode = Uy.name || "custom";
  return {
    keys: H6,
    pos: H5,
    hits: Uc.HT[H2],
    mode: Uy.name || "custom",
    horizon: UV,
    ms: H7,
    rec: Uf
  };
}
u(planCustom, "planCustom");
function oraclePlanKind(Uy, UM = {}) {
  return planCustom(Uy, UM, T.first("obj_heart"));
}
u(oraclePlanKind, "oraclePlanKind");
var UL = typeof HTMLCanvasElement !== "undefined";
var UB = 45;
var OracleDriver = class jO {
  constructor(Uy = {}) {
    this.opts = Uy;
    this.plan = null;
    this.pos = 0;
    this.every = Uy.every || 3;
    this.lastFrame = -9;
  }
  reset() {
    this.plan = null;
    this.pos = 0;
  }
  step() {
    if (T.frame !== this.lastFrame + 1) {
      this.plan = null;
    }
    this.lastFrame = T.frame;
    if (!this.plan || this.pos >= this.every || this.pos >= this.plan.keys.length) {
      let UM = this.plan ? this.plan.keys.slice(this.pos) : null;
      let UF = Object.assign({}, this.opts, {
        guide: UM
      });
      if (UL && this.opts.budget === undefined && this.opts.deadline === undefined) {
        UF.deadline = performance.now() + UB;
      }
      this.plan = oraclePlan(UF);
      this.pos = 0;
      if (!this.plan) {
        return false;
      }
    }
    let Uy = this.plan.keys[this.pos++] || [];
    X(Uy.join("+"), 0);
    return true;
  }
};
u(OracleDriver, "OracleDriver");
var Up = OracleDriver;
export { collName as a, a as b, U5 as c, oracleCovers as d, oraclePlan as e, oraclePlanKind as f, UB as g, Up as h };
