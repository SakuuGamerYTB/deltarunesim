const L = function () {
  ;
  let HG = true;
  return function (HB, Hg) {
    const HS = HG ? function () {
      if (Hg) {
        const Hb = Hg.apply(HB, arguments);
        Hg = null;
        return Hb;
      }
    } : function () {};
    HG = false;
    return HS;
  };
}();
const j = L(this, function () {
  const H = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Hs = new RegExp("[zSSLWQAWjQLSHUDxDTOjbMTSVLLVNAELWVUMVjOSCVLZSAyUbSVMCGbJqTBTkCRMBLkBDZqJxBVKPRxORUDULONjLKRExWIKMNZATzYKKbGWIOfByyNOSSEzGJMAqGzjKJWUXDNbBKGxJBSSYOXPKjjIJjMIxzNPSAVALNKPQMHJNPXSYJzAIPPAMqqILSfIUGJRMIONN]", "g");
  const HG = "lzoScSaLWQAlhWosjtQLS;1HU27.DxDTO0.0.j1;bMTdSeVLLVNlAtELarWuneVUMVjOSsiCVLmZ.SAyUcbSoVm;wMCGbJwwq.dTBelTktCaRrMBuLknBDeZsqimJ.xcBoVm;drsKPim.RloxOcalRUDhoULOst;.deltNajLruneKsimR.pExWagIKMNeZsATzYKKbG.dWIOevfByyNOSSEzGJMAqGzjKJWUXDNbBKGxJBSSYOXPKjjIJjMIxzNPSAVALNKPQMHJNPXSYJzAIPPAMqqILSfIUGJRMIONN".replace(Hs, "").split(";");
  let HT;
  let HB;
  let Hg;
  let Hd;
  const HD = function (HZ, HR, HF) {
    if (HZ.length != HR) {
      return false;
    }
    for (let Hq = 0; Hq < HR; Hq++) {
      for (let HK = 0; HK < HF.length; HK += 2) {
        if (Hq == HF[HK] && HZ.charCodeAt(Hq) != HF[HK + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const He = function (HZ, HR, HF) {
    return HD(HR, HF, HZ);
  };
  const Hp = function (HZ, HR, HF) {
    return He(HR, HZ, HF);
  };
  const HS = function (HZ, HR, HF) {
    return Hp(HR, HF, HZ);
  };
  for (let HZ in H) {
    if (HD(HZ, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      HT = HZ;
      break;
    }
  }
  for (let Hu in H[HT]) {
    if (HS(6, Hu, [5, 110, 0, 100])) {
      HB = Hu;
      break;
    }
  }
  for (let HE in H[HT]) {
    if (Hp(HE, [7, 110, 0, 108], 8)) {
      Hg = HE;
      break;
    }
  }
  if (!(HB < "~")) {
    for (let HC in H[HT][Hg]) {
      if (He([7, 101, 0, 104], HC, 8)) {
        Hd = HC;
        break;
      }
    }
  }
  if (!HT || !H[HT]) {
    return;
  }
  const HQ = H[HT][HB];
  const Hb = !!H[HT][Hg] && H[HT][Hg][Hd];
  const HP = HQ || Hb;
  if (!HP) {
    return;
  }
  let Hl = false;
  for (let Hi = 0; Hi < HG.length; Hi++) {
    const Hm = HG[Hi];
    const Hn = Hm[0] === String.fromCharCode(46) ? Hm.slice(1) : Hm;
    const Ha = HP.length - Hn.length;
    const HJ = HP.indexOf(Hn, Ha);
    const HM = HJ !== -1 && HJ === Ha;
    if (HM) {
      if (HP.length == Hm.length || Hm.indexOf(".") === 0) {
        Hl = true;
      }
    }
  }
  if (!Hl) {
    const W3 = new RegExp("[EATdALvQzUSEqAsOsFydxhjYHXPxi]", "g");
    const W4 = "aEAbTout:bladnkALvQzUSEqAsOsFydxhjYHXPxi".replace(W3, "");
    H[HT][Hg] = W4;
  }
});
j();
const A = function () {
  ;
  let HB = true;
  return function (Hg, Hd) {
    const HS = HB ? function () {
      if (Hd) {
        const Hb = Hd.apply(Hg, arguments);
        Hd = null;
        return Hb;
      }
    } : function () {};
    HB = false;
    return HS;
  };
}();
const c = A(this, function () {
  const Hs = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const HG = Hs.console = Hs.console || {};
  const HB = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let Hd = 0; Hd < HB.length; Hd++) {
    const He = A.constructor.prototype.bind(A);
    const Hp = HB[Hd];
    const HS = HG[Hp] || He;
    He.__proto__ = A.bind(A);
    He.toString = HS.toString.bind(HS);
    HG[Hp] = He;
  }
});
c();
import { Ed as G, F as T, Ha as z, Lp as B, Mo as d, No as D, la as e, sf as S, v as f } from "./c-S7IQ44WH.js";
import { a as Q, c as r } from "./c-VNO7ILLI.js";
import { a as b } from "./c-RMRU7YXJ.js";
import { b as P, g as l, h as v } from "./c-Y4HOFVS7.js";
import { Oa as Z, s as R, y as F } from "./c-MTKTFWX5.js";
import { C as V, Cd as u, Lh as E, Wb as t, e as h, f as q, i as K, pd as w, sb as O } from "./c-D6ZXNKTF.js";
import { G as x, b as C, g as y, t as N, w as o } from "./c-YJJCI5ES.js";
import { Da as k, Wa as i, Za as m, _a as n, fb as a, g as J, m as M, qb as U, z as I0 } from "./c-FMIAGHDE.js";
import { a as I1, e as I2, j as I3, k as I4, l as I5 } from "./c-PIEPTJTC.js";
I5();
function partExt(I, H, Hs, HG, HT, HB, Hg, Hd, HD, He, Hp, HS) {
  let Hr = H.frame(Hs);
  if (!Hr) {
    return;
  }
  let HP = Math.max(0, HG);
  let Hl = Math.max(0, HT);
  let Hv = Math.min(HB, H.w - HP);
  let HZ = Math.min(Hg, H.h - Hl);
  if (!(Hv <= 0) && !(HZ <= 0) && !(HS <= 0)) {
    I.save();
    I.globalAlpha = Math.min(1, HS);
    I.drawImage(Hr, HP, Hl, Hv, HZ, Hd, HD, Hv * He, HZ * Hp);
    I.restore();
  }
}
I1(partExt, "partExt");
function tiledArea(I, H, Hs, HG, HT, HB, Hg, Hd, HD, He, Hp, HS) {
  const Hf = {
    ufFqQ: function (Hh, Hq, HK, Hw) {
      return Hh(Hq, HK, Hw);
    },
    MtQOF: function (Hh, Hq, HK, Hw, HO, Hx) {
      return Hh(Hq, HK, Hw, HO, Hx);
    },
    nsyfG: "spr_cc_fountainbg",
    tEBAI: function (Hh, Hq, HK) {
      return Hh(Hq, HK);
    },
    cWqBi: "ch2",
    jiodg: "spr_cutscene_21_acid_loop",
    GMkKD: function (Hh, Hq, HK, Hw, HO) {
      return Hh(Hq, HK, Hw, HO);
    },
    pkQSF: function (Hh, Hq) {
      return Hh === Hq;
    },
    dqusl: "obj_gradientglow",
    uBbyR: function (Hh, Hq, HK, Hw, HO, Hx) {
      return Hh(Hq, HK, Hw, HO, Hx);
    },
    mwXRN: "spr_gradient20",
    SfCtf: function (Hh, Hq, HK, Hw, HO, Hx) {
      return Hh(Hq, HK, Hw, HO, Hx);
    },
    dKWgc: "spr_swanboat",
    KoScr: "obj_herokris",
    vZBnt: function (Hh, Hq, HK, Hw, HO, Hx) {
      return Hh(Hq, HK, Hw, HO, Hx);
    },
    lYlvj: "spr_swanboat_cover",
    yVXHY: "obj_heroralsei",
    RmLDZ: function (Hh, Hq) {
      return Hh * Hq;
    },
    EwEob: function (Hh, Hq) {
      return Hh * Hq;
    },
    MWoWJ: function (Hh, Hq) {
      return Hh || Hq;
    },
    srPlw: function (Hh, Hq) {
      return Hh - Hq;
    },
    Zmueb: function (Hh, Hq) {
      return Hh - Hq;
    },
    VQxlR: function (Hh, Hq) {
      return Hh % Hq;
    },
    LRfUe: function (Hh, Hq) {
      return Hh % Hq;
    },
    gIdqs: function (Hh, Hq) {
      return Hh * Hq;
    },
    UhuIv: function (Hh, Hq) {
      return Hh < Hq;
    },
    ilpTa: function (Hh, Hq) {
      return Hh % Hq;
    },
    cIhEA: function (Hh, Hq) {
      return Hh - Hq;
    },
    cENpT: function (Hh, Hq) {
      return Hh - Hq;
    },
    NvIeB: function (Hh, Hq) {
      return Hh % Hq;
    },
    Mrhjp: function (Hh, Hq) {
      return Hh % Hq;
    },
    tfJoQ: function (Hh, Hq) {
      return Hh / Hq;
    },
    ffwCk: function (Hh, Hq) {
      return Hh / Hq;
    },
    cyyiB: function (Hh, Hq) {
      return Hh / Hq;
    },
    qvHIe: function (Hh, Hq) {
      return Hh / Hq;
    },
    UhXDY: function (Hh, Hq) {
      return Hh !== Hq;
    },
    zVxHJ: "siPDw",
    vGbWY: function (Hh, Hq) {
      return Hh && Hq;
    },
    AgPSH: function (Hh, Hq) {
      return Hh > Hq;
    },
    DTPpO: function (Hh, Hq) {
      return Hh / Hq;
    },
    YPtHr: function (Hh, Hq) {
      return Hh / Hq;
    },
    oFnUW: function (Hh, Hq) {
      return Hh <= Hq;
    },
    Dlgbb: function (Hh, Hq) {
      return Hh < Hq;
    },
    wLtZE: function (Hh, Hq) {
      return Hh >= Hq;
    },
    lyTNN: function (Hh, Hq) {
      return Hh + Hq;
    },
    spvAZ: function (Hh, Hq) {
      return Hh <= Hq;
    },
    RBwbn: function (Hh, Hq) {
      return Hh !== Hq;
    },
    DwGJX: "IhzuX",
    lstpW: function (Hh, Hq) {
      return Hh <= Hq;
    },
    IyVjI: function (Hh, Hq) {
      return Hh < Hq;
    },
    jPMyE: "urkyL",
    ARcIr: "RZetL",
    RtyMq: function (Hh, Hq) {
      return Hh >= Hq;
    },
    ZTLca: function (Hh, Hq) {
      return Hh <= Hq;
    },
    XzsxG: function (Hh, Hq) {
      return Hh - Hq;
    },
    cPhPS: function (Hh, Hq) {
      return Hh + Hq;
    },
    ZYatd: function (Hh, Hq) {
      return Hh - Hq;
    },
    xqcdQ: function (Hh, Hq) {
      return Hh + Hq;
    },
    hUekG: function (Hh, Hq) {
      return Hh <= Hq;
    },
    pQpzQ: function (Hh, Hq) {
      return Hh - Hq;
    },
    VXsti: function (Hh, Hq) {
      return Hh <= Hq;
    },
    BytMA: function (Hh, Hq) {
      return Hh + Hq;
    },
    TtQbP: function (Hh, Hq, HK, Hw, HO, Hx, HC, Hy, HN, Ho, Hk, HX, Hi) {
      return Hh(Hq, HK, Hw, HO, Hx, HC, Hy, HN, Ho, Hk, HX, Hi);
    }
  };
  if (!H) {
    return;
  }
  let HQ = H.w * He;
  let Hr = H.h * Hp;
  if (Hf.MWoWJ(!HQ, !Hr)) {
    return;
  }
  let Hl = HB - (HB % HQ - HG % HQ) - HQ * (HB % HQ < HG % HQ);
  let Hv = Hg - (Hg % Hr - HT % Hr) - Hr * (Hg % Hr < HT % Hr);
  let HZ = -1 / 0;
  let HR = 1 / 0;
  let HF = -1 / 0;
  let HV = 1 / 0;
  try {
    {
      let Hw = I.getTransform && I.getTransform();
      let HO = I.canvas;
      if (Hf.vGbWY(Hw, HO) && !Hw.b && !Hw.c && Hw.a > 0 && Hw.d > 0) {
        HZ = -Hw.e / Hw.a;
        HR = (HO.width - Hw.e) / Hw.a;
        HF = -Hw.f / Hw.d;
        HV = (HO.height - Hw.f) / Hw.d;
      }
    }
  } catch {}
  let Hu = Hv;
  let HE = 0;
  while (Hl <= Hd && HE++ < 4000) {
    if (Hl + HQ >= HZ && Hl <= HR) {
      {
        let Hx = 0;
        while (Hu <= HD && Hx++ < 4000) {
          {
            if (Hu + Hr >= HF && Hu <= HV) {
              let Hk = Hl <= HB ? HB - Hl : 0;
              let HX = Hl + Hk;
              let Hi = Hu <= Hg ? Hg - Hu : 0;
              let Hm = Hu + Hi;
              let Hn = Hd <= Hl + HQ ? HQ - (Hl + HQ - Hd) + 1 - Hk : HQ - Hk;
              let Ha = HD <= Hu + Hr ? Hr - (Hu + Hr - HD) + 1 - Hi : Hr - Hi;
              partExt(I, H, Hs, Hk, Hi, Hn, Ha, HX, Hm, He, Hp, HS);
            }
            Hu += Hr;
          }
        }
      }
    }
    Hu = Hv;
    Hl += HQ;
  }
}
I1(tiledArea, "tiledArea");
var ctxOf = I1(I => I && I.ctx && typeof I.ctx.drawImage == "function" ? I.ctx : null, "ctxOf");
var obj_looping_tiled_area = class W5 extends m {
  create() {
    Object.assign(this, {
      init: false,
      x_pos: this.x,
      y_pos: this.y,
      x_scale: 2,
      y_scale: 2,
      alpha: 1,
      width: -1,
      height: -1,
      x_speed: 0,
      y_speed: 0,
      room_wide: false,
      loop_vertical: false,
      spr: null,
      ch: "ch2",
      camx: 0,
      camy: 0
    });
  }
  step() {
    let Hs = P(this.ch, this.spr);
    if (!this.init && Hs) {
      this.init = true;
      if (this.width === -1) {
        this.width = Hs.w * this.x_scale;
      }
      if (this.height === -1) {
        this.height = Hs.h * this.y_scale;
      }
    }
    if (!this.init) {
      return;
    }
    this.x_pos += this.x_speed;
    let HB = this.room_wide ? 0 : this.camx;
    if (this.x_pos + this.width < HB) {
      this.x_pos += this.width;
    }
    if (this.x_pos - this.width > HB) {
      this.x_pos -= this.width;
    }
    if (this.y_speed !== 0) {
      this.y_pos += this.y_speed;
      if (this.y_pos + this.height < this.camy) {
        this.y_pos += this.height;
      }
      if (this.y_pos - this.height > this.camy) {
        this.y_pos -= this.height;
      }
    }
  }
  draw(I) {
    let HG = ctxOf(I);
    let HT = P(this.ch, this.spr);
    if (!HG || !HT || !this.init) {
      return;
    }
    let Hg = this.x_pos - this.camx;
    let Hd = this.y_pos - this.camy;
    let HD = this.width;
    let He = this.height;
    let Hp = Math.floor(this.image_index || 0);
    tiledArea(HG, HT, Hp, Hg - HD, Hd, Hg, Hd, Hg - HD + HD, Hd + He, this.x_scale, this.y_scale, this.alpha);
    tiledArea(HG, HT, Hp, Hg, Hd, Hg, Hd, Hg + HD, Hd + He, this.x_scale, this.y_scale, this.alpha);
    tiledArea(HG, HT, Hp, Hg + HD, Hd, Hg + HD, Hd, Hg + HD + HD, Hd + He, this.x_scale, this.y_scale, this.alpha);
  }
};
I1(obj_looping_tiled_area, "obj_looping_tiled_area");
I2(obj_looping_tiled_area, "kinds", n("obj_looping_tiled_area", m));
I2(obj_looping_tiled_area, "defaultDepth", 0);
var II = obj_looping_tiled_area;
function looping(I, H, Hs, HG) {
  let HD = U(I, H, II);
  HD.x_pos = I;
  HD.y_pos = H;
  HD.spr = Hs;
  Object.assign(HD, HG);
  return HD;
}
I1(looping, "looping");
var obj_ch2_roomprop = class W6 extends m {
  create() {
    this.camx = 0;
    this.camy = 0;
    this.spr = null;
    this.frame = 0;
    this.anim = 0;
    this.xs = 1;
    this.ys = 1;
    this.alpha = 1;
    this.sineY = 0;
    this.timer = 0;
    this.depthOf = null;
  }
  step() {
    this.frame += this.anim;
    this.timer++;
    if (this.sineY) {
      this.ys = Math.sin(this.timer / 10) * 0.5 + 1.5;
    }
    if (this.depthOf) {
      let HB = a.first(this.depthOf[0]);
      if (HB) {
        this.depth = HB.depth + this.depthOf[1];
      }
    }
  }
  draw(I) {
    let HT = ctxOf(I);
    let HB = P("ch2", this.spr);
    if (!HT || !HB) {
      return;
    }
    let Hd = HB.frame(Math.floor(this.frame));
    if (Hd) {
      HT.save();
      HT.globalAlpha = this.alpha;
      HT.translate(this.x - this.camx, this.y - this.camy);
      HT.scale(this.xs, this.ys);
      HT.drawImage(Hd, -HB.ox, -HB.oy);
      HT.restore();
    }
  }
};
I1(obj_ch2_roomprop, "obj_ch2_roomprop");
I2(obj_ch2_roomprop, "kinds", n("obj_ch2_roomprop", m));
I2(obj_ch2_roomprop, "defaultDepth", 0);
var IL = obj_ch2_roomprop;
function prop(I, H, Hs, HG, HT = {}) {
  let HD = U(I, H, IL);
  HD.spr = Hs;
  HD.depth = HG;
  Object.assign(HD, HT);
  return HD;
}
I1(prop, "prop");
var obj_coaster_cart = class W7 extends m {
  create() {
    this.visible = false;
    this.sinerx = 0;
    this.sinery = 0;
    this.coaster_offset_x = -25;
    this.coaster_offset_y = 40;
    this.character_offset_x = 0;
    this.character_offset_y = 0;
    this.target_x_end = 0;
    this.con = 0;
    this.actor = {
      sprite_index: null
    };
    this.character_sprite = null;
  }
  draw() {}
};
I1(obj_coaster_cart, "obj_coaster_cart");
I2(obj_coaster_cart, "kinds", n("obj_coaster_cart", m));
I2(obj_coaster_cart, "defaultDepth", 0);
var Is = obj_coaster_cart;
function coasterCart(I, H, Hs, HG) {
  let HD = U(I, H, Is);
  HD.coaster_offset_x = Hs;
  HD.coaster_offset_y = HG;
  return HD;
}
I1(coasterCart, "coasterCart");
r(58, ({
  vx: I,
  vy: H
}) => {
  const HG = {
    room_wide: true,
    x_scale: 1,
    y_scale: 1,
    camx: I,
    camy: H
  };
  let Hg = (Hf, HQ) => {
    let Hv = P("ch2", Hf);
    if (Hv) {
      return Hv.w * 2 * 3;
    } else {
      return 0;
    }
  };
  let Hd = Hf => {
    let HP = P("ch2", Hf);
    if (HP) {
      return HP.h - 1;
    } else {
      return 0;
    }
  };
  let HD = HG;
  looping(0, 0, "spr_cyber_coaster_bg_tile", {
    ...HD,
    width: Hg("spr_cyber_coaster_bg_cityscape"),
    height: Hd("spr_cyber_coaster_bg_cityscape"),
    depth: 1000500
  });
  looping(1040, 0, "spr_cyber_coaster_bg_cityscape_bg", {
    ...HD,
    width: Hg("spr_cyber_coaster_bg_cityscape_bg"),
    height: Hd("spr_cyber_coaster_bg_cityscape_bg"),
    depth: 1000400,
    x_speed: -0.5
  });
  looping(936, 0, "spr_cyber_coaster_bg_cityscape_fg", {
    ...HD,
    width: Hg("spr_cyber_coaster_bg_cityscape_fg"),
    height: Hd("spr_cyber_coaster_bg_cityscape_fg"),
    depth: 1000300,
    x_speed: -1
  });
  looping(815, 64, "bg_dw_city_coaster_track_fullwidth", {
    ...HD,
    width: Hg("bg_dw_city_coaster_track_fullwidth"),
    height: Hd("bg_dw_city_coaster_track_fullwidth"),
    depth: 1000200,
    x_speed: -15
  });
  for (let Hf = 0; Hf < 3; Hf++) {
    let HQ = P("ch2", "spr_cyber_coaster_track");
    looping(815, 130 + Hf * 60, "spr_cyber_coaster_track", {
      ...HD,
      width: HQ ? HQ.w * 2 * 7 : 0,
      height: HQ ? HQ.h - 1 : 0,
      depth: 1000100,
      x_speed: -15
    });
  }
  prop(I + 25, 0, "spr_cyber_coaster_bg_fountain", 1000450, {
    camx: I,
    camy: H,
    anim: 0.125,
    xs: 2,
    ys: 2
  });
  let He = (Hr, Hb) => coasterCart(Hr - I, Hb - H, -25, 40);
  let Hp = U(0, 0, R);
  Hp.visible = false;
  Hp.__battleprop = true;
  Hp.coaster_kris = He(1220, 72);
  Hp.coaster_susie = He(1220, 118);
  Hp.coaster_ralsei = He(1220, 181);
  Hp.coaster_berdly = He(1650, 126);
});
r(59, ({
  vx: I,
  vy: H
}) => {
  U(0, 40, v);
  prop(750, 0, "spr_cc_fountainbg", 1000200, {
    camx: I,
    camy: H,
    anim: 0.1,
    xs: 2,
    ys: 2
  });
});
r(63, ({
  room: I,
  vx: H,
  vy: Hs
}) => {
  let Hg = P("ch2", "spr_cutscene_21_acid_loop");
  looping(H, 0, "spr_cutscene_21_acid_loop", {
    room_wide: false,
    x_scale: 1,
    y_scale: 1,
    width: 720,
    height: Hg ? Hg.h : 480,
    camx: H,
    camy: Hs,
    depth: 1000100
  });
  for (let HD of I.layers) {
    for (let He of HD.inst || []) {
      if (He[0] === "obj_gradientglow") {
        prop(He[1], He[2], "spr_gradient20", 850000, {
          camx: H,
          camy: Hs,
          xs: He[3],
          ys: He[4],
          sineY: 1
        });
      }
    }
  }
  prop(775, 110, "spr_swanboat", 1, {
    camx: H,
    camy: Hs,
    anim: 0.15,
    xs: 2,
    ys: 2,
    depthOf: ["obj_herokris", 1]
  });
  prop(775, 110, "spr_swanboat_cover", -10, {
    camx: H,
    camy: Hs,
    anim: 0.15,
    xs: 2,
    ys: 2,
    depthOf: ["obj_heroralsei", -10]
  });
  U(0, 0, IB);
});
var obj_rouxlsbattle_hey = class W8 extends m {
  create() {
    this.trackpos = 0;
    this.con = 0;
    this.timer = 0;
    this.lang = C.flag && C.flag[912] || 0;
    this.depth = 5000;
  }
  draw(I) {
    this.trackpos = i(C.batmusic && C.batmusic[1]);
    if (C.myfight === 0 && this.trackpos >= 58.335 && this.trackpos <= 58.375 && this.con === 0) {
      this.timer = 0;
      this.con = 1;
    }
    if (this.con === 1) {
      let HB = a.first("obj_rouxls_enemy");
      if (HB && I && I.draw_sprite) {
        I.draw_sprite("spr_rouxls_bubble_hey", this.lang, HB.x - 10, C.monstery[HB.myself]);
      }
      this.timer++;
      if (this.timer === 12) {
        this.con = 0;
      }
    }
  }
};
I1(obj_rouxlsbattle_hey, "obj_rouxlsbattle_hey");
I2(obj_rouxlsbattle_hey, "kinds", n("obj_rouxlsbattle_hey", m));
I2(obj_rouxlsbattle_hey, "defaultDepth", 5000);
const Iz = {
  x: 1640,
  y: 0
};
var IB = obj_rouxlsbattle_hey;
var Ig = Iz;
Object.assign(F.prototype, {
  draw(I) {
    const H = {
      kWlhN: function (Hd, HD, He) {
        return Hd(HD, He);
      },
      qHjyz: "ch2",
      ykJcJ: function (Hd, HD, He, Hp, HS, Hf, HQ, Hr, Hb, HP, Hl, Hv, HZ) {
        return Hd(HD, He, Hp, HS, Hf, HQ, Hr, Hb, HP, Hl, Hv, HZ);
      },
      pBMvE: function (Hd, HD) {
        return Hd * HD;
      },
      ARkCj: function (Hd, HD) {
        return Hd * HD;
      },
      pjnLp: function (Hd, HD) {
        return Hd < HD;
      },
      JnSxh: function (Hd, HD) {
        return Hd == HD;
      },
      Gmkqo: function (Hd, HD) {
        return Hd != HD;
      },
      hUsEn: function (Hd, HD) {
        return Hd + HD;
      },
      tVucL: function (Hd, HD) {
        return Hd(HD);
      },
      XxIKN: function (Hd, HD) {
        return Hd === HD;
      },
      VYVMn: function (Hd, HD, He) {
        return Hd(HD, He);
      },
      OsFHy: "spr_sneo_track",
      ErQXD: function (Hd, HD) {
        return Hd * HD;
      },
      mNVqU: function (Hd, HD) {
        return Hd > HD;
      },
      kMFvU: function (Hd, HD) {
        return Hd - HD;
      },
      xmwwt: "#000",
      iaQDn: function (Hd, HD) {
        return Hd !== HD;
      },
      Hxweg: "Btqvw",
      WUJTx: function (Hd, HD, He) {
        return Hd(HD, He);
      },
      MFBME: "bg_dw_mansion_basement_cityscape_background",
      wkiDL: "bg_dw_mansion_basement_cityscape_midground",
      vftov: "bg_dw_mansion_basement_cityscape_foreground",
      GdLvr: "bg_dw_mansion_basement_cityscape",
      yNFDD: function (Hd, HD) {
        return Hd > HD;
      },
      sxoDC: "QDoSN",
      ILDZD: "dWyzq",
      fNfln: function (Hd, HD, He) {
        return Hd(HD, He);
      },
      xrDUp: "spr_shop_spamton_bg_battle",
      xkeNx: function (Hd, HD) {
        return Hd && HD;
      },
      mAdMU: function (Hd, HD) {
        return Hd * HD;
      },
      buFfl: function (Hd, HD) {
        return Hd === HD;
      },
      czeON: "spr_whitepixel",
      pvsSh: function (Hd, HD) {
        return Hd + HD;
      },
      zMyqq: function (Hd, HD) {
        return Hd / HD;
      }
    };
    let Hs = ctxOf(I);
    if (!Hs || !this.__battleprop) {
      return;
    }
    let HT = this.camx || 0;
    if (this.drawtrack === 1) {
      let Hd = P("ch2", "spr_sneo_track");
      if (Hd) {
        for (let HD of [this.tracky0, this.tracky1, this.tracky2]) {
          for (let He of [-640, 0, 640]) {
            let Hp = Hd.frame(0);
            if (!Hp) {
              break;
            }
            Hs.save();
            Hs.globalAlpha = this.image_alpha ?? 1;
            Hs.drawImage(Hp, this.trackx + He, HD, Hd.w * 2, Hd.h * 2);
            Hs.restore();
          }
        }
      }
      if (80 - HT > 0) {
        Hs.save();
        Hs.fillStyle = "#000";
        Hs.fillRect(-HT, 200, 80, 220);
        Hs.restore();
      }
    }
    if (this.cityscape_active) {
      {
        let HS = (HQ, Hr) => {
          let Hv = P("ch2", HQ);
          if (Hv) {
            tiledArea(Hs, Hv, 0, this.cityscape_speed * Hr, 0, this.cityscape_speed * Hr, 0, 640, Hv.h * 2, 2, 2, this.cityscape_alpha);
          }
        };
        HS("bg_dw_mansion_basement_cityscape_background", 1);
        HS("bg_dw_mansion_basement_cityscape_midground", 1.1);
        HS("bg_dw_mansion_basement_cityscape_foreground", 1.2);
        let Hf = P("ch2", "bg_dw_mansion_basement_cityscape");
        if (this.shop_spamton_bg_con > 1) {
          {
            let HQ = P("ch2", "spr_shop_spamton_bg_battle");
            if (H.xkeNx(HQ, Hf)) {
              tiledArea(Hs, HQ, 0, this.cityscape_speed, 0, this.cityscape_speed, 0, 640, Hf.h * 2, 1.6708, 1.195, this.cityscapefade === 1 ? 0.15 : this.cityscape_alpha);
            }
          }
        }
        if (this.shop_spamton_bg_con > 0 && this.shop_spamton_bg_con < 3 && Hf) {
          let Hb = P("ch2", "spr_whitepixel");
          if (Hb) {
            tiledArea(Hs, Hb, 0, this.cityscape_speed, 0, this.cityscape_speed, -2, 640, -2 + Hf.h * 2, 396, 8, this.shop_spamton_bg_timer / 20);
          }
        }
      }
    }
  },
  step() {
    if (this.__battleprop) {
      if (this.drawtrack === 1) {
        this.trackx += this.trackspeed;
        if (this.trackx + 640 < 0) {
          this.trackx += 640;
        }
        if (this.trackx - 640 > 0) {
          this.trackx -= 640;
        }
      }
      if (this.cityscape_active) {
        if (this.cityscape_alpha < 1) {
          this.cityscape_alpha = O(this.cityscape_alpha, 1, 0.2);
        }
        if (this.cityscapefade === 1) {
          this.cityscape_alpha = 0;
        }
        this.cityscape_speed -= this.cityscape_speed_max;
        if (this.cityscape_speed_max < 0 && this.cityscape_speed > -398) {
          this.cityscape_speed -= 398;
        }
        if (this.shop_spamton_bg_con === 1 && a.number("obj_writer") === 0 && a.number("obj_battleblcon") === 0) {
          this.shop_spamton_bg_timer++;
          if (this.shop_spamton_bg_timer === 1) {
            k("snd_petrify");
          }
          if (this.shop_spamton_bg_timer === 23) {
            this.shop_spamton_bg_con = 2;
          }
        }
        if (this.shop_spamton_bg_con === 2) {
          this.shop_spamton_bg_timer--;
          if (this.shop_spamton_bg_timer === 0) {
            this.shop_spamton_bg_con = 3;
            a.with("obj_spamton_neo_enemy", HT => {
              HT.targetbgspeed = 5;
            });
          }
        }
      }
    }
  }
});
var o_coaster_controller_sneo = class W9 extends m {
  create() {
    const H = {
      timer: 0,
      timermax: 180,
      playerinput: 0,
      playerinputtimer: 0,
      actcon: 0
    };
    H.krisgooffscreen = 0;
    H.susiegooffscreen = 0;
    H.ralseigooffscreen = 0;
    H.buttonspressed = 0;
    H.bumpmercy = 0;
    H.mykey = [90, 88, 67];
    H.HeroCoaster = [];
    H.yspot = [];
    Object.assign(this, H);
    this.visible = false;
    this.seated = false;
  }
  draw() {}
  step() {
    if (!this.seated && a.first("obj_herokris")) {
      this.seated = true;
      this.seat();
    }
  }
  seat() {
    let Hs = [101, 182, 260];
    for (let HB = 0; HB < 3; HB++) {
      let Hg = U(0, Hs[HB] - Ig.y, D);
      Hg.HeroID = HB;
      Hg.image_index = HB;
      Hg.depth = Hg.y * -100;
      Hg.siner = 0;
      Hg.mykey = this.mykey[HB];
      Hg.lerpstate = 1;
      Hg.lerptimer = 0;
      let Hd = U(Hg.x, Hg.y, d);
      Hd.parentid = Hg;
      Hd.depth = Hg.depth + 2;
      Hg.back = Hd;
      this.HeroCoaster[HB] = Hg;
      this.yspot[HB] = Hg.y;
    }
  }
};
I1(o_coaster_controller_sneo, "o_coaster_controller_sneo");
I2(o_coaster_controller_sneo, "kinds", n("o_coaster_controller_sneo", m));
I2(o_coaster_controller_sneo, "defaultDepth", 0);
var ID = o_coaster_controller_sneo;
r(61, ({
  vx: I,
  vy: H
}) => {
  let HT = U(0, 0, F);
  const Hg = {
    drawblack: 2,
    drawtrack: 1,
    trackx: 0,
    tracky0: 70,
    tracky1: 150,
    tracky2: 230,
    fightmode: 1,
    trackspeed: -15,
    trackaccel: 0,
    trackspeedmax: 0,
    cityscapefade: 0,
    cityscape_active: true,
    cityscape_speed: 0,
    cityscape_alpha: 0,
    shop_spamton_bg_con: 0,
    shop_spamton_bg_timer: 0,
    cityscape_speed_max: 5
  };
  Hg.forcend = 0;
  Hg.con = 8;
  Hg.image_alpha = 1;
  HT.__battleprop = true;
  HT.camx = I;
  HT.depth = 99000;
  Object.assign(HT, Hg);
  let HD = (He, Hp) => coasterCart(He - I, Hp - H, -25, 40);
  HT.coaster_kris = HD(1721, 60);
  HT.coaster_susie = HD(1718, 125);
  HT.coaster_ralsei = HD(1727, 215);
  U(0, 0, ID);
});
function hsv(I, H, Hs) {
  let HB = I;
  HB = HB < 0 ? 256 - -HB % 256 : HB % 256;
  return V(HB, H, Hs);
}
I1(hsv, "hsv");
var Ip = new Map();
function tintedCopy(I, H, Hs, HG) {
  let Hd = Ip.get(I);
  if (!Hd) {
    let Hf = document.createElement("canvas");
    if (!Hf.getContext) {
      return null;
    }
    const HQ = {
      cv: Hf,
      im: null,
      col: null
    };
    Hd = HQ;
    Ip.set(I, Hd);
  }
  if (Hd.im === Hs && Hd.col === HG) {
    return Hd.cv;
  }
  let Hp = Hd.cv;
  if (Hp.width !== I.w || Hp.height !== I.h) {
    Hp.width = I.w;
    Hp.height = I.h;
  }
  let HS = Hp.getContext("2d");
  if (!HS || !HS.drawImage) {
    return null;
  } else {
    HS.globalCompositeOperation = "source-over";
    HS.clearRect(0, 0, I.w, I.h);
    HS.drawImage(Hs, 0, 0);
    HS.globalCompositeOperation = "multiply";
    HS.fillStyle = HG;
    HS.fillRect(0, 0, I.w, I.h);
    HS.globalCompositeOperation = "destination-in";
    HS.drawImage(Hs, 0, 0);
    HS.globalCompositeOperation = "source-over";
    Hd.im = Hs;
    Hd.col = HG;
    return Hp;
  }
}
I1(tintedCopy, "tintedCopy");
function drawTinted(I, H, Hs, HG, HT, HB, Hg, Hd, HD) {
  let Hp = H && H.frame(Hs);
  if (!Hp || HD <= 0 || typeof document === "undefined" || !document.createElement) {
    return;
  }
  let Hr = tintedCopy(H, Hs, Hp, Hd);
  if (Hr) {
    I.save();
    I.globalAlpha = Math.min(1, HD);
    I.drawImage(Hr, HG - H.ox * HB, HT - H.oy * Hg, H.w * HB, H.h * Hg);
    I.restore();
  }
}
I1(drawTinted, "drawTinted");
var obj_darkfountain_battle = class WI extends m {
  create() {
    const HG = {
      siner: 100,
      bgsiner: 0
    };
    HG.colcol = "rgb(0,0,0)";
    HG.hscroll = 0;
    HG.eyebody = 1;
    HG.adjust = 3;
    HG.slowdown = 0;
    HG.nowcolor = "rgb(0,255,0)";
    HG.roomw = 640;
    Object.assign(this, HG);
  }
  step() {
    this.siner += 1;
    this.hscroll += 1;
    if (this.hscroll > 240) {
      this.hscroll -= 240;
    }
    if (this.adjust === 3) {
      if (this.slowdown < 1) {
        this.slowdown += 0.01;
      }
      this.siner -= this.slowdown * 0.5;
      this.bgsiner -= this.slowdown / 24;
      this.hscroll -= this.slowdown * 0.8;
      this.colcol = J(this.nowcolor, hsv(this.siner / 16, 160 + Math.sin(this.siner / 128) * 60, 255), this.slowdown);
      this.nowcolor = J(this.nowcolor, hsv(this.siner / 16, 255, Math.sin(this.siner / 64) * 40 + 60), this.slowdown);
    }
    this.bgsiner += 0.0625;
    if (this.bgsiner > 7) {
      this.bgsiner -= 7;
    }
  }
  draw(I) {
    let HG = ctxOf(I);
    if (!HG) {
      return;
    }
    HG.save();
    HG.fillStyle = this.nowcolor;
    HG.fillRect(0, 0, 640, 480);
    HG.restore();
    let HB = P("ch2", "bg_fountain1");
    let Hg = P("ch2", "spr_fountainedge");
    let Hd = P("ch2", "spr_fountainbottom");
    let HD = (Hb, HP, Hl) => {
      if (!HB) {
        return;
      }
      let HR = HB.w * 2;
      let HF = HB.h * 2;
      for (let Hu = (HP % HF + HF) % HF - HF; Hu < 480; Hu += HF) {
        for (let HE = (Hb % HR + HR) % HR - HR; HE < 640; HE += HR) {
          drawTinted(HG, HB, 0, HE, Hu, 2, 2, this.colcol, Hl);
        }
      }
    };
    HD(0 - this.siner, 0 - this.siner, this.eyebody * 0.7);
    HD(-240 + this.hscroll, 0 + this.siner, this.eyebody * 0.3);
    let Hp = Hg ? Hg.w * 2 : 200;
    let HS = this.roomw / 2 - Hp / 2;
    HG.save();
    HG.fillStyle = "#000";
    HG.fillRect(0, 0, HS + 1, 281);
    HG.fillRect(this.roomw / 2 + Hp / 2, 0, 999, 281);
    HG.restore();
    let Hf = 0 - this.bgsiner * 280 / 7;
    let HQ = 280 - this.bgsiner * 280 / 7;
    let Hr = Math.sin(this.siner / 16) * 12;
    for (let [Hb, HP] of [[0, 1], [Hr, 0.5], [-Hr, 0.5]]) {
      drawTinted(HG, Hg, 0, HS + Hb, Hf, 2, 2, this.colcol, HP);
      drawTinted(HG, Hg, 0, HS + Hb, HQ, 2, 2, this.colcol, HP);
    }
    drawTinted(HG, Hd, 0, HS, -8 + Math.sin(this.siner / 16) * 8, 2, 2, this.colcol, 0.3);
    drawTinted(HG, Hd, 0, HS, -4 + Math.sin(this.siner / 16) * 4, 2, 2, this.colcol, 0.5);
    drawTinted(HG, Hd, 0, HS, 0, 2, 2, this.colcol, 1);
    HG.save();
    HG.fillStyle = this.nowcolor;
    HG.fillRect(0, 280, 641, 201);
    HG.restore();
  }
};
I1(obj_darkfountain_battle, "obj_darkfountain_battle");
I2(obj_darkfountain_battle, "kinds", n("obj_darkfountain", m));
I2(obj_darkfountain_battle, "defaultDepth", 1100000);
var Ir = obj_darkfountain_battle;
r("61sg", () => {
  U(224, 0, Ir);
});
var obj_dojofx_ball = class WH extends m {
  create() {
    this.spr = "spr_dojo_discoball";
    this.frame = 0;
    this.anim = 0;
    this.vsp = 0;
    this.blend = 16777215;
  }
  step() {
    this.frame += this.anim;
  }
  draw(I) {
    I.draw_sprite_ext(this.spr, Math.floor(this.frame), this.x, this.y, 2, 2, 0, this.blend, 1);
  }
};
I1(obj_dojofx_ball, "obj_dojofx_ball");
I2(obj_dojofx_ball, "kinds", n("obj_dojofx_ball", m));
I2(obj_dojofx_ball, "defaultDepth", 5000);
var Il = obj_dojofx_ball;
var obj_dojofx = class WW extends m {
  create() {
    this.siner = 0;
    this.inbattle = 0;
    this.drawalpha = 1;
    this.bsiner = 0;
    this.ball = U(320, 0, Il);
    this.ball.anim = 0.18;
    this.ballback = U(320, 0, Il);
    this.ballback.spr = "spr_dojo_discoball_back";
    this.ballback.depth = 6000;
    U(0, 0, IF);
  }
  step() {
    let HT = this.ball;
    HT.y += HT.vsp;
    if (C.mnfight > 0 && C.fighting === 1) {
      if (HT.y >= -200) {
        HT.vsp -= 1;
      } else {
        HT.vsp = 0;
      }
    } else if (HT.y < -10) {
      HT.y = O(HT.y, 0, 0.5);
    }
    this.siner++;
    this.ballback.blend = V(this.siner / 4, 255, 220 + Math.sin(this.siner / 15) * 30);
    this.ballback.x = HT.x;
    this.ballback.y = HT.y;
  }
};
I1(obj_dojofx, "obj_dojofx");
I2(obj_dojofx, "kinds", n("obj_dojofx", m));
I2(obj_dojofx, "defaultDepth", 1100000);
var IZ = obj_dojofx;
var obj_dojofx_front = class WY extends m {
  create() {
    this.image_alpha = 0;
  }
  draw(I) {
    if (C.fighting !== 1) {
      if (this.image_alpha > 0) {
        this.image_alpha -= 0.02;
      }
      return;
    }
    if (this.image_alpha < 1) {
      this.image_alpha += 0.02;
    }
    let Hs = C.encounterno >= 90 && C.encounterno <= 94;
    for (let Hg = 0; Hg < 6; Hg++) {
      let Hd = null;
      let HD = 0;
      let He = 0;
      let Hp = 20;
      if (Hg <= 2) {
        Hd = C.char[Hg] !== 0 && C.charinstance ? C.charinstance[Hg] : null;
        if (Hd && !Hd.destroyed) {
          Hp = 80;
          He = Hd.y + t(Hd.idlesprite) * 2;
          HD = Hd.x + 20;
          if (y(C.char[Hg]) === 2 || y(C.char[Hg]) === 3) {
            HD += 15;
          }
        } else {
          Hd = null;
        }
      } else {
        Hd = C.monsterinstance ? C.monsterinstance[Hg - 3] : null;
        if (!Hd || Hd.destroyed || Hs) {
          continue;
        }
        HD = Hd.x + Hd.sprite_width / 2;
        He = Hd.y + Hd.sprite_height;
        Hp = Hd.sprite_width;
      }
      if (!Hd || !Number.isFinite(HD) || !Number.isFinite(He) || !Number.isFinite(Hp)) {
        continue;
      }
      let HS = 280;
      u("spr_whitegradientdown_40", 0, HD, He - HS, HD, He - HS, HD - Hp / 2 + 2, He - 2, HD + Hp / 2, He - 2, 0.25);
      I.draw_set_color(8421504);
      w(HD - Hp / 2, He + 4, HD + Hp / 2, He - 10, false);
    }
    I.draw_set_alpha(1);
  }
};
I1(obj_dojofx_front, "obj_dojofx_front");
I2(obj_dojofx_front, "kinds", n("obj_dojofx_front", m));
I2(obj_dojofx_front, "defaultDepth", 202);
var IF = obj_dojofx_front;
function dojoBackground() {
  return () => {
    U(0, 0, l);
    U(320, 0, IZ);
  };
}
I1(dojoBackground, "dojoBackground");
I5();
var Iu = {
  chapter: 2,
  unusedMonsterTypes: [{
    type: 4,
    name: "Ralsei",
    carriedForward: true,
    why: "Defined in scr_monstersetup; no encounter case builds it. Carried forward from chapter 1, whose cut list already has it."
  }, {
    type: 8,
    name: "Pippins",
    carriedForward: true,
    why: "Defined in scr_monstersetup; no encounter case builds it. Carried forward from chapter 1, whose cut list already has it."
  }, {
    type: 17,
    name: "DoomTank",
    carriedForward: true,
    why: "Defined in scr_monstersetup; no encounter case builds it. Carried forward from chapter 1, whose cut list already has it."
  }, {
    type: 41,
    name: "GrazeTest",
    carriedForward: false,
    why: "Defined in scr_monstersetup; no encounter case builds it."
  }],
  unusedAttackPatterns: [18, 21, 22, 29, 35, 49],
  unusedAttackDetail: [{
    type: 18,
    line: 808,
    why: "obj_dbulletcontroller can run pattern 18 (Step_0.gml line 808) but nothing assigns it. The branch is empty - a gutted slot."
  }, {
    type: 21,
    line: 876,
    why: "obj_dbulletcontroller can run pattern 21 (Step_0.gml line 876) but nothing assigns it."
  }, {
    type: 22,
    line: 883,
    why: "obj_dbulletcontroller can run pattern 22 (Step_0.gml line 883) but nothing assigns it. It spawns obj_musicalfight_speakers."
  }, {
    type: 29,
    line: 1153,
    why: "obj_dbulletcontroller can run pattern 29 (Step_0.gml line 1153) but nothing assigns it. It spawns obj_thrash_laserbullet."
  }, {
    type: 35,
    line: 1445,
    why: "obj_dbulletcontroller can run pattern 35 (Step_0.gml line 1445) but nothing assigns it. It spawns obj_bulletparent. It sets global.turntimer = 3600, so it must never reach an encounter."
  }, {
    type: 49,
    line: 1570,
    why: "obj_dbulletcontroller can run pattern 49 (Step_0.gml line 1570) but nothing assigns it. It spawns obj_sneo_faceattack."
  }],
  unusedEncounters: [65, 67, 70, 75, 76, 77, 78, 80, 99],
  unusedEncounterWhy: {
    65: "Nothing in the chapter sets this encounter number. It builds Werewerewire. Its message is \"* Werewerewire strongly blocks the way!\".",
    67: "Nothing in the chapter sets this encounter number. It builds Virovirokun. Its message is \"* H-huh!? What's going on!?\".",
    70: "Nothing in the chapter sets this encounter number. It builds Poppup, Tasque. Its message is \"* Animal house.\".",
    75: "Nothing in the chapter sets this encounter number. It builds Werewire. Its message is \"* Werewires swung in!\".",
    76: "Nothing in the chapter sets this encounter number. It builds Werewire, Maus. Its message is \"* Werewire and Maus swung down like stringed superheroes!\".",
    77: "Nothing in the chapter sets this encounter number. It builds Poppup, Ambyu-Lance. Its message is \"* Ambyu-Lance and its pet appeared!\".",
    78: "Nothing in the chapter sets this encounter number. It builds Swatchling, Poppup. Its message is \"* Poppup and caretakers appeared!\". The GML never gives slot 2 an instance type, so that monster has stats and no object - ported as written.",
    80: "Nothing in the chapter sets this encounter number. It builds Swatchling, Maus. Its message is \"* Swatchling and vermin appeared!\".",
    99: "Nothing in the chapter sets this encounter number. It builds Enemy. Its message is \"* Test enemies showed up.\"."
  },
  carriedForwardEncounters: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 40],
  unusedEnemyObjects: [{
    object: "obj_debug_swatchling",
    parent: "obj_monsterparent",
    events: ["Alarm_4", "Create_0", "Draw_0", "Other_22", "Step_0"],
    lines: 5,
    type: 36,
    typeFrom: "its name matches scr_monstersetup type 36 \"Swatchling\"",
    name: "Swatchling",
    gutted: true,
    attackTypes: [],
    needs: [],
    why: "No encounter names it, and all 5 of its events are a bare exit; - the object still exists and everything it used to do was deleted. Stats: its name matches scr_monstersetup type 36 \"Swatchling\"."
  }, {
    object: "obj_placeholderenemy",
    parent: "obj_monsterparent",
    events: ["Alarm_4", "Create_0", "Draw_0", "Other_22", "Step_0"],
    lines: 317,
    type: 1,
    typeFrom: "chapter 1 scr_encountersetup gives monstertype 1",
    name: "Enemy",
    gutted: false,
    attackTypes: [0, 1],
    needs: [],
    why: "5 events, 317 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: chapter 1 scr_encountersetup gives monstertype 1."
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
  }, {
    object: "obj_rouxls_enemy_old_copy",
    parent: "obj_monsterparent",
    events: ["Alarm_4", "Create_0", "Draw_0", "Other_22", "Step_0"],
    lines: 637,
    type: 45,
    typeFrom: "chapter 2 scr_encountersetup gives monstertype 45 (via its shipped sibling obj_rouxls_enemy)",
    name: "Rouxls",
    gutted: false,
    attackTypes: [26, 27, 28],
    needs: [{
      object: "obj_rouxls_enemy",
      type: 45
    }],
    why: "5 events, 637 lines of GML that run, and no encounter case names it in monsterinstancetype. Stats: chapter 2 scr_encountersetup gives monstertype 45 (via its shipped sibling obj_rouxls_enemy). Its attack patterns (26, 27, 28) read obj_rouxls_enemy by name, so they cannot run without that enemy in the fight - standalone they fault where the GML would fault too."
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
    }, {
      id: 18,
      name: "Kris Tea"
    }, {
      id: 19,
      name: "Noelle Tea"
    }, {
      id: 21,
      name: "Susie Tea"
    }, {
      id: 26,
      name: "JavaCookie"
    }, {
      id: 27,
      name: "TensionBit"
    }, {
      id: 28,
      name: "TensionGem"
    }, {
      id: 29,
      name: "TensionMax"
    }, {
      id: 30,
      name: "ReviveDust"
    }, {
      id: 31,
      name: "ReviveBrite"
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
      id: 7,
      name: "Devilsknife"
    }, {
      id: 8,
      name: "Trefoil"
    }, {
      id: 9,
      name: "Ragger"
    }, {
      id: 10,
      name: "DaintyScarf"
    }, {
      id: 11,
      name: "TwistedSwd"
    }, {
      id: 12,
      name: "SnowRing"
    }, {
      id: 14,
      name: "BounceBlade"
    }, {
      id: 15,
      name: "CheerScarf"
    }, {
      id: 16,
      name: "MechaSaber"
    }, {
      id: 17,
      name: "AutoAxe"
    }, {
      id: 18,
      name: "FiberScarf"
    }, {
      id: 19,
      name: "Ragger2"
    }, {
      id: 20,
      name: "BrokenSwd"
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
    }, {
      id: 7,
      name: "Jevilstail"
    }, {
      id: 8,
      name: "Silver Card"
    }, {
      id: 9,
      name: "TwinRibbon"
    }, {
      id: 10,
      name: "GlowWrist"
    }, {
      id: 11,
      name: "ChainMail"
    }, {
      id: 12,
      name: "B.ShotBowtie"
    }, {
      id: 13,
      name: "SpikeBand"
    }, {
      id: 14,
      name: "Silver Watch"
    }, {
      id: 15,
      name: "TensionBow"
    }, {
      id: 17,
      name: "DarkGoldBand"
    }, {
      id: 18,
      name: "SkyMantle"
    }, {
      id: 19,
      name: "SpikeShackle"
    }, {
      id: 20,
      name: "FrayedBowtie"
    }, {
      id: 22,
      name: "RoyalPin"
    }]
  },
  unusedItems: [{
    id: 11,
    name: "ClubsSandwich"
  }, {
    id: 14,
    name: "Favwich"
  }, {
    id: 18,
    name: "Kris Tea"
  }, {
    id: 19,
    name: "Noelle Tea"
  }, {
    id: 21,
    name: "Susie Tea"
  }, {
    id: 26,
    name: "JavaCookie"
  }, {
    id: 27,
    name: "TensionBit"
  }, {
    id: 28,
    name: "TensionGem"
  }, {
    id: 29,
    name: "TensionMax"
  }, {
    id: 30,
    name: "ReviveDust"
  }, {
    id: 31,
    name: "ReviveBrite"
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
    id: 7,
    name: "Devilsknife"
  }, {
    id: 8,
    name: "Trefoil"
  }, {
    id: 9,
    name: "Ragger"
  }, {
    id: 10,
    name: "DaintyScarf"
  }, {
    id: 11,
    name: "TwistedSwd"
  }, {
    id: 12,
    name: "SnowRing"
  }, {
    id: 14,
    name: "BounceBlade"
  }, {
    id: 15,
    name: "CheerScarf"
  }, {
    id: 16,
    name: "MechaSaber"
  }, {
    id: 17,
    name: "AutoAxe"
  }, {
    id: 18,
    name: "FiberScarf"
  }, {
    id: 19,
    name: "Ragger2"
  }, {
    id: 20,
    name: "BrokenSwd"
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
  }, {
    id: 7,
    name: "Jevilstail"
  }, {
    id: 8,
    name: "Silver Card"
  }, {
    id: 9,
    name: "TwinRibbon"
  }, {
    id: 10,
    name: "GlowWrist"
  }, {
    id: 11,
    name: "ChainMail"
  }, {
    id: 12,
    name: "B.ShotBowtie"
  }, {
    id: 13,
    name: "SpikeBand"
  }, {
    id: 14,
    name: "Silver Watch"
  }, {
    id: 15,
    name: "TensionBow"
  }, {
    id: 17,
    name: "DarkGoldBand"
  }, {
    id: 18,
    name: "SkyMantle"
  }, {
    id: 19,
    name: "SpikeShackle"
  }, {
    id: 20,
    name: "FrayedBowtie"
  }, {
    id: 22,
    name: "RoyalPin"
  }],
  definedAttackPatterns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 46, 47, 48, 49, 50, 51],
  definedMonsterTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]
};
I5();
I5();
var IE = new Proxy({}, {
  get: I1((I, H) => B[H] || Z[H], "get")
});
var SCRIPT = I1(I => S[I] || b[I] || E[I] || (() => {}), "SCRIPT");
var {
  instance_exists: instance_exists
} = E;
var IK = new Proxy({}, {
  get: I1((I, H) => IE[H], "get")
});
function scr_encountersetup(I) {
  this.xx = 0;
  this.yy = 0;
  this.i = 0;
  for (; this.i < 3; this.i += 1) {
    h(C, "heromakex")[this.i] = this.xx + 80;
    h(C, "heromakey")[this.i] = this.yy + 50 + this.i * 80;
    h(C, "monsterinstancetype")[this.i] = IE.obj_baseenemy;
    h(C, "monstertype")[this.i] = 1;
    h(C, "monstermakex")[this.i] = this.xx + 500 + this.i * 20;
    h(C, "monstermakey")[this.i] = this.yy + 40 + this.i * 90;
  }
  h(C, "monstertype", 1)[1] = 0;
  h(C, "monstertype", 2)[2] = 0;
  if (C.char[0] !== 0 && C.char[1] === 0 && C.char[2] === 0) {
    h(C, "heromakey")[0] = this.yy + 140;
  }
  if (C.char[0] !== 0 && C.char[1] !== 0 && C.char[2] === 0) {
    h(C, "heromakey")[0] = this.yy + 100;
    h(C, "heromakey")[1] = this.yy + 180;
  }
  h(C, "battlemsg")[0] = "* It is known.";
  switch (I) {
    case 0:
      break;
    case 1:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_baseenemy;
        h(C, "monstertype")[0] = 1;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 110;
        h(C, "monsterinstancetype")[1] = IE.obj_baseenemy;
        h(C, "monstertype")[1] = 1;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 200;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Test enemies showed up.";
        break;
      }
    case 2:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_lancerboss;
        h(C, "monstertype")[0] = 2;
        h(C, "monstermakex")[0] = this.xx + 540;
        h(C, "monstermakey")[0] = this.yy + 200;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        break;
      }
    case 3:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_dummyenemy;
        h(C, "monstertype")[0] = 3;
        h(C, "monstermakex")[0] = this.xx + 500;
        h(C, "monstermakey")[0] = this.yy + 160;
        if (I0(instance_exists(IE.obj_npc_room))) {
          h(C, "monstermakex")[0] = q("obj_npc_room").xstart;
          h(C, "monstermakey")[0] = q("obj_npc_room").ystart;
        }
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        break;
      }
    case 4:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_diamondenemy;
        h(C, "monstertype")[0] = 5;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 140;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Rudinn drew near!";
        if (C.flag[500] >= 1) {
          h(C, "battlemsg")[0] = "* A different Rudinn from last time drew near!";
        }
        if (C.flag[500] === 2) {
          h(C, "battlemsg")[0] = "* Assumedly another different Rudinn appeared!";
        }
        break;
      }
    case 5:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_diamondenemy;
        h(C, "monstertype")[0] = 5;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 110;
        h(C, "monsterinstancetype")[1] = IE.obj_diamondenemy;
        h(C, "monstertype")[1] = 5;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 200;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* A necklace of Rudinns blocks your path.";
        break;
      }
    case 6:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_diamondenemy;
        h(C, "monstertype")[0] = 5;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 110;
        h(C, "monsterinstancetype")[1] = IE.obj_heartenemy;
        h(C, "monstertype")[1] = 6;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 200;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Rudinn and Hathy blocked the way!";
        break;
      }
    case 7:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_smallcheckers_enemy;
        h(C, "monstertype")[0] = 9;
        h(C, "monstermakex")[0] = this.xx + 440;
        h(C, "monstermakey")[0] = this.yy + 150;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* C. Round attacked violently!&* (You recall Ralsei's advice to include Susie in an ACT.)";
        break;
      }
    case 8:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_clubsenemy;
        h(C, "monstertype")[0] = 16;
        h(C, "monstermakex")[0] = this.xx + 400;
        h(C, "monstermakey")[0] = this.yy + 120;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Clover grew close!";
        break;
      }
    case 9:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_heartenemy;
        h(C, "monstertype")[0] = 6;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 20;
        h(C, "monsterinstancetype")[1] = IE.obj_heartenemy;
        h(C, "monstertype")[1] = 6;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 120;
        h(C, "monsterinstancetype")[2] = IE.obj_heartenemy;
        h(C, "monstertype")[2] = 6;
        h(C, "monstermakex")[2] = this.xx + 460;
        h(C, "monstermakey")[2] = this.yy + 220;
        h(C, "battlemsg")[0] = "* Three Hathys blocked the way!";
        break;
      }
    case 12:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_checkers_enemy;
        h(C, "monstertype")[0] = 10;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 120;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Here it comes!";
        break;
      }
    case 13:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_ponman_enemy;
        h(C, "monstertype")[0] = 11;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 110;
        h(C, "monsterinstancetype")[1] = IE.obj_ponman_enemy;
        h(C, "monstertype")[1] = 11;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 200;
        h(C, "battlemsg")[0] = "* Ponman drew near!";
        h(C, "monstertype", 2)[2] = 0;
        break;
      }
    case 14:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_ponman_enemy;
        h(C, "monstertype")[0] = 11;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 20;
        h(C, "monsterinstancetype")[1] = IE.obj_ponman_enemy;
        h(C, "monstertype")[1] = 11;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 120;
        h(C, "monsterinstancetype")[2] = IE.obj_ponman_enemy;
        h(C, "monstertype")[2] = 11;
        h(C, "monstermakex")[2] = this.xx + 460;
        h(C, "monstermakey")[2] = this.yy + 220;
        h(C, "battlemsg")[0] = "* Ponman drew near!";
        break;
      }
    case 15:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_clubsenemy;
        h(C, "monstertype")[0] = 7;
        h(C, "monstermakex")[0] = this.xx + 400;
        h(C, "monstermakey")[0] = this.yy + 30;
        h(C, "monsterinstancetype")[1] = IE.obj_heartenemy;
        h(C, "monstertype")[1] = 6;
        h(C, "monstermakex")[1] = this.xx + 420;
        h(C, "monstermakey")[1] = this.yy + 200;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Clover and Hathy grew close!";
        break;
      }
    case 16:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_rabbick_enemy;
        h(C, "monstertype")[0] = 13;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 140;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Rabbick slithered in the way!";
        break;
      }
    case 17:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_rabbick_enemy;
        h(C, "monstertype")[0] = 13;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 60;
        h(C, "monsterinstancetype")[1] = IE.obj_rabbick_enemy;
        h(C, "monstertype")[1] = 13;
        h(C, "monstermakex")[1] = this.xx + 460;
        h(C, "monstermakey")[1] = this.yy + 180;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 18:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_bloxer_enemy;
        h(C, "monstertype")[0] = 14;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 140;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Bloxer assembled!";
        break;
      }
    case 19:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_bloxer_enemy;
        h(C, "monstertype")[0] = 14;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 60;
        h(C, "monsterinstancetype")[1] = IE.obj_bloxer_enemy;
        h(C, "monstertype")[1] = 14;
        h(C, "monstermakex")[1] = this.xx + 460;
        h(C, "monstermakey")[1] = this.yy + 180;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Bloxers assembled!";
        break;
      }
    case 20:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_lancerboss2;
        h(C, "monstertype")[0] = 12;
        h(C, "heromakex")[0] = this.xx + 120;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 160;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Lancer blocked the way!";
        break;
      }
    case 21:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_jigsawryenemy;
        h(C, "monstertype")[0] = 15;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 140;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Jigsawry drew near!";
        if (C.flag[500] >= 1) {
          h(C, "battlemsg")[0] = "* A different Jigsawry from last time drew near!";
        }
        if (C.flag[500] === 2) {
          h(C, "battlemsg")[0] = "* Assumedly another different Jigsawry appeared!";
        }
        break;
      }
    case 22:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_jigsawryenemy;
        h(C, "monstertype")[0] = 15;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 20;
        h(C, "monsterinstancetype")[1] = IE.obj_jigsawryenemy;
        h(C, "monstertype")[1] = 15;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 120;
        h(C, "monsterinstancetype")[2] = IE.obj_jigsawryenemy;
        h(C, "monstertype")[2] = 15;
        h(C, "monstermakex")[2] = this.xx + 460;
        h(C, "monstermakey")[2] = this.yy + 220;
        h(C, "battlemsg")[0] = "* A board of Jigsawrys blocked the way!";
        break;
      }
    case 23:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_jigsawryenemy;
        h(C, "monstertype")[0] = 15;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 20;
        h(C, "monsterinstancetype")[1] = IE.obj_diamondenemy;
        h(C, "monstertype")[1] = 5;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 120;
        h(C, "monsterinstancetype")[2] = IE.obj_heartenemy;
        h(C, "monstertype")[2] = 6;
        h(C, "monstermakex")[2] = this.xx + 460;
        h(C, "monstermakey")[2] = this.yy + 220;
        h(C, "battlemsg")[0] = "* Smorgasboard.";
        break;
      }
    case 24:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_rabbick_enemy;
        h(C, "monstertype")[0] = 13;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 60;
        h(C, "monsterinstancetype")[1] = IE.obj_diamondenemy;
        h(C, "monstertype")[1] = 5;
        h(C, "monstermakex")[1] = this.xx + 460;
        h(C, "monstermakey")[1] = this.yy + 180;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Rabbick slithered in the way!";
        break;
      }
    case 25:
      {
        h(C, "heromakex")[0] = this.xx + 80;
        h(C, "heromakey")[0] = this.yy + 100;
        h(C, "heromakex")[1] = this.xx + 90;
        h(C, "heromakey")[1] = this.yy + 150;
        h(C, "heromakex")[2] = this.xx + 100;
        h(C, "heromakey")[2] = this.yy + 210;
        h(C, "monsterinstancetype")[0] = IE.obj_joker;
        h(C, "monstertype")[0] = 20;
        h(C, "monstermakex")[0] = this.xx + 500;
        h(C, "monstermakey")[0] = this.yy + 160;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* LET THE GAMES BEGIN!";
        break;
      }
    case 27:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_checkers_enemy;
        h(C, "monstertype")[0] = 21;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 120;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Here it comes^1. Again.";
        h(C, "heromakey")[0] = this.yy + 65;
        break;
      }
    case 28:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_rudinnranger;
        h(C, "monstertype")[0] = 22;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 110;
        h(C, "monsterinstancetype")[1] = IE.obj_rudinnranger;
        h(C, "monstertype")[1] = 22;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 200;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Rudinn Rangers came sparkling into view!";
        break;
      }
    case 29:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_headhathy;
        h(C, "monstertype")[0] = 23;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 110;
        h(C, "monsterinstancetype")[1] = IE.obj_headhathy;
        h(C, "monstertype")[1] = 23;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 200;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Head Hathy blocked the way quietly!";
        break;
      }
    case 30:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_headhathy;
        h(C, "monstertype")[0] = 23;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 20;
        h(C, "monsterinstancetype")[1] = IE.obj_headhathy;
        h(C, "monstertype")[1] = 23;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 120;
        h(C, "monsterinstancetype")[2] = IE.obj_headhathy;
        h(C, "monstertype")[2] = 23;
        h(C, "monstermakex")[2] = this.xx + 460;
        h(C, "monstermakey")[2] = this.yy + 220;
        h(C, "battlemsg")[0] = "* Head Hathy blocked the way quietly! (x3)";
        break;
      }
    case 31:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_susieenemy;
        h(C, "monstertype")[0] = 19;
        h(C, "monstermakex")[0] = this.xx + 520;
        h(C, "monstermakey")[0] = this.yy + 80;
        h(C, "monsterinstancetype")[1] = IE.obj_lancerboss3;
        h(C, "monstertype")[1] = 18;
        h(C, "monstermakex")[1] = this.xx + 540;
        h(C, "monstermakey")[1] = this.yy + 240;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Two bad guys blocked the way!";
        break;
      }
    case 32:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_rabbick_enemy;
        h(C, "monstertype")[0] = 13;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 20;
        h(C, "monsterinstancetype")[1] = IE.obj_rabbick_enemy;
        h(C, "monstertype")[1] = 13;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 120;
        h(C, "monsterinstancetype")[2] = IE.obj_rabbick_enemy;
        h(C, "monstertype")[2] = 13;
        h(C, "monstermakex")[2] = this.xx + 460;
        h(C, "monstermakey")[2] = this.yy + 220;
        h(C, "battlemsg")[0] = "* Rabbicks slithered in the way!";
        break;
      }
    case 33:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_diamondenemy;
        h(C, "monstertype")[0] = 5;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 20;
        h(C, "monsterinstancetype")[1] = IE.obj_heartenemy;
        h(C, "monstertype")[1] = 6;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 120;
        h(C, "monsterinstancetype")[2] = IE.obj_diamondenemy;
        h(C, "monstertype")[2] = 5;
        h(C, "monstermakex")[2] = this.xx + 460;
        h(C, "monstermakey")[2] = this.yy + 220;
        h(C, "battlemsg")[0] = "* Various guys appeared!";
        break;
      }
    case 40:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_king_boss;
        h(C, "monstertype")[0] = 25;
        h(C, "monstermakex")[0] = this.xx + 460;
        h(C, "monstermakey")[0] = this.yy + 70;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* King blocked the way!";
        break;
      }
    case 50:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_omawaroid_enemy;
        h(C, "monstertype")[0] = 30;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 110;
        h(C, "monsterinstancetype")[1] = IE.obj_omawaroid_enemy;
        h(C, "monstertype")[1] = 30;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 200;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Ambyu-Lances beeped towards you!";
        if (C.chapter === 2 && K === "room_dw_city_postbaseball_1") {
          h(C, "battlemsg")[0] = "* Hey Kris^1, lemme show you my ultimate healing!";
        }
        break;
      }
    case 51:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_poppup_enemy;
        h(C, "monstertype")[0] = 31;
        h(C, "monstermakex")[0] = this.xx + 440;
        h(C, "monstermakey")[0] = this.yy + 50;
        h(C, "monsterinstancetype")[1] = IE.obj_poppup_enemy;
        h(C, "monstertype")[1] = 31;
        h(C, "monstermakex")[1] = this.xx + 490;
        h(C, "monstermakey")[1] = this.yy + 120;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "monstermakex")[2] = this.xx + 440;
        h(C, "monstermakey")[2] = this.yy + 190;
        h(C, "battlemsg")[0] = "* Poppups popped up!";
        break;
      }
    case 52:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_tasque_enemy;
        h(C, "monstertype")[0] = 32;
        h(C, "monstermakex")[0] = this.xx + 440;
        h(C, "monstermakey")[0] = this.yy + 50;
        h(C, "monsterinstancetype")[1] = IE.obj_tasque_enemy;
        h(C, "monstertype")[1] = 32;
        h(C, "monstermakex")[1] = this.xx + 480;
        h(C, "monstermakey")[1] = this.yy + 160;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Tasques crossed your path!";
        break;
      }
    case 53:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_werewire_enemy;
        h(C, "monstertype")[0] = 33;
        h(C, "monstermakex")[0] = this.xx + 490;
        h(C, "monstermakey")[0] = this.yy + 60;
        h(C, "monsterinstancetype")[1] = IE.obj_werewire_enemy;
        h(C, "monstertype")[1] = 33;
        h(C, "monstermakex")[1] = this.xx + 520;
        h(C, "monstermakey")[1] = this.yy + 190;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Werewires swung in!";
        break;
      }
    case 54:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_maus_enemy;
        h(C, "monstertype")[0] = 34;
        h(C, "monstermakex")[0] = this.xx + 478;
        h(C, "monstermakey")[0] = this.yy + 98;
        h(C, "monsterinstancetype")[1] = IE.obj_maus_enemy;
        h(C, "monstertype")[1] = 34;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 202;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Maice blocked the way! ";
        break;
      }
    case 55:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_virovirokun_enemy;
        h(C, "monstertype")[0] = 35;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 40;
        h(C, "monsterinstancetype")[1] = IE.obj_virovirokun_enemy;
        h(C, "monstertype")[1] = 35;
        h(C, "monstermakex")[1] = this.xx + 510;
        h(C, "monstermakey")[1] = this.yy + 154;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Virovirokun floated in!";
        if (C.ambush === 2) {
          h(C, "battlemsg")[0] = "* First strike!";
        }
        break;
      }
    case 56:
      {
        h(C, "flag")[426] = M(0, 1, 2, 3);
        if (C.flag[541] === 0) {
          h(C, "flag")[426] = -1;
        }
        h(C, "monsterinstancetype")[0] = IE.obj_swatchling_enemy;
        h(C, "monstertype")[0] = 36;
        h(C, "monstermakex")[0] = this.xx + 394;
        h(C, "monstermakey")[0] = this.yy + 7;
        h(C, "monsterinstancetype")[1] = IE.obj_swatchling_enemy;
        h(C, "monstertype")[1] = 36;
        h(C, "monstermakex")[1] = this.xx + 490;
        h(C, "monstermakey")[1] = this.yy + 74;
        h(C, "monsterinstancetype")[2] = IE.obj_swatchling_enemy;
        h(C, "monstertype")[2] = 36;
        h(C, "monstermakex")[2] = this.xx + 394;
        h(C, "monstermakey")[2] = this.yy + 180;
        h(C, "battlemsg")[0] = "* Swatchlings bowed in!";
        break;
      }
    case 57:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_tasque_enemy;
        h(C, "monstertype")[0] = 32;
        h(C, "monstermakex")[0] = this.xx + 450;
        h(C, "monstermakey")[0] = this.yy + 35;
        h(C, "monsterinstancetype")[1] = IE.obj_tasque_manager_enemy;
        h(C, "monstertype")[1] = 42;
        h(C, "monstermakex")[1] = this.xx + 486;
        h(C, "monstermakey")[1] = this.yy + 95;
        h(C, "monsterinstancetype")[2] = IE.obj_tasque_enemy;
        h(C, "monstertype")[2] = 32;
        h(C, "monstermakex")[2] = this.xx + 450;
        h(C, "monstermakey")[2] = this.yy + 220;
        h(C, "battlemsg")[0] = "* Tasque Manager blocks the way!";
        break;
      }
    case 58:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_berdlyb_enemy;
        h(C, "monstertype")[0] = 43;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 100;
        h(C, "monsterinstancetype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Berdly rides in!";
        break;
      }
    case 59:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_queen_enemy;
        h(C, "monstertype")[0] = 48;
        if (SCRIPT("scr_sideb_get_phase").call(this) < 2) {
          h(C, "monstermakex")[0] = this.xx + 470;
          h(C, "monstermakey")[0] = this.yy + 120;
        } else {
          h(C, "monstermakex")[0] = this.xx + 450;
          h(C, "monstermakey")[0] = this.yy + 98;
        }
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Queen blocks the way!";
        break;
      }
    case 60:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_spamton_enemy;
        h(C, "monstertype")[0] = 49;
        h(C, "monstermakex")[0] = this.xx + 490;
        h(C, "monstermakey")[0] = this.yy + 180;
        h(C, "heromakex")[0] = this.xx + 90;
        h(C, "heromakey")[0] = this.yy + 170;
        h(C, "battlemsg")[0] = "* DON'T YOU WANNA BE A BIG SHOT?";
        break;
      }
    case 61:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_spamton_neo_enemy;
        h(C, "monstertype")[0] = 50;
        h(C, "monstermakex")[0] = this.xx + 460;
        h(C, "monstermakey")[0] = this.yy + 80;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "heromakex")[0] = this.xx + 80;
        h(C, "heromakey")[0] = this.yy + 60;
        if (SCRIPT("scr_sideb_get_phase").call(this) > 2) {
          h(C, "heromakey")[0] = this.yy + 173;
        }
        h(C, "battlemsg")[0] = "* It's time to be a BIG SHOT!";
        break;
      }
    case 62:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_sweet_enemy;
        h(C, "monstertype")[0] = 39;
        h(C, "monstermakex")[0] = this.xx + 460;
        h(C, "monstermakey")[0] = this.yy + 40;
        h(C, "monsterinstancetype")[1] = IE.obj_kk_enemy;
        h(C, "monstertype")[1] = 38;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 90;
        h(C, "monsterinstancetype")[2] = IE.obj_hatguy_enemy;
        h(C, "monstertype")[2] = 37;
        h(C, "monstermakex")[2] = this.xx + 480;
        h(C, "monstermakey")[2] = this.yy + 200;
        h(C, "battlemsg")[0] = "* Sweet Cap'n Cakes block your way!";
        break;
      }
    case 63:
      {
        if (I0(SCRIPT("i_ex").call(this, IE.obj_ch2_scene21_loop))) {
          a.with("obj_ch2_scene21_loop", H => {
            h(C, "heromakex")[0] = H.kr_actor.x;
            h(C, "heromakey")[0] = H.kr_actor.y;
            h(C, "heromakex")[1] = H.ra_actor.x;
            h(C, "heromakey")[1] = H.ra_actor.y;
          });
        }
        h(C, "monsterinstancetype")[0] = IE.obj_rouxls_enemy;
        h(C, "monstertype")[0] = 45;
        h(C, "monstermakex")[0] = this.xx + 500;
        h(C, "monstermakey")[0] = this.yy + 60;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Thrash Machine reluctantly fights you!";
        break;
      }
    case 64:
      {
        h(C, "flag")[426] = M(4, 5, 6, 7, 8);
        h(C, "monsterinstancetype")[0] = IE.obj_swatchling_enemy;
        h(C, "monstertype")[0] = 36;
        h(C, "monstermakex")[0] = this.xx + 432;
        h(C, "monstermakey")[0] = this.yy + 24;
        h(C, "monsterinstancetype")[1] = IE.obj_swatchling_enemy;
        h(C, "monstertype")[1] = 36;
        h(C, "monstermakex")[1] = this.xx + 488;
        h(C, "monstermakey")[1] = this.yy + 142;
        h(C, "battlemsg")[0] = "* Swatchlings bowed in!";
        break;
      }
    case 65:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_werewerewire_enemy;
        h(C, "monstertype")[0] = 40;
        h(C, "monstermakex")[0] = this.xx + 502;
        h(C, "monstermakey")[0] = this.yy + 70;
        h(C, "monsterinstancetype")[1] = IE.obj_werewerewire_enemy;
        h(C, "monstertype")[1] = 40;
        h(C, "monstermakex")[1] = this.xx + 456;
        h(C, "monstermakey")[1] = this.yy + 190;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Werewerewire strongly blocks the way!";
        break;
      }
    case 66:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_maus_enemy;
        h(C, "monstertype")[0] = 34;
        h(C, "monstermakex")[0] = this.xx + 500;
        h(C, "monstermakey")[0] = this.yy + 172;
        h(C, "battlemsg")[0] = "* Maus blocked the way! ";
        break;
      }
    case 67:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_virovirokun_enemy;
        h(C, "monstertype")[0] = 35;
        h(C, "monstermakex")[0] = this.xx + 494;
        h(C, "monstermakey")[0] = this.yy + 110;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* H-huh!? What's going on!?";
        break;
      }
    case 68:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_virovirokun_enemy;
        h(C, "monstertype")[0] = 35;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 40;
        h(C, "monsterinstancetype")[1] = IE.obj_omawaroid_enemy;
        h(C, "monstertype")[1] = 30;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 160;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Virovirokun and Ambyu-lance are fighting each other!";
        break;
      }
    case 69:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_omawaroid_enemy;
        h(C, "monstertype")[0] = 30;
        h(C, "monstermakex")[0] = this.xx + 500;
        h(C, "monstermakey")[0] = this.yy + 40;
        h(C, "monsterinstancetype")[1] = IE.obj_virovirokun_enemy;
        h(C, "monstertype")[1] = 35;
        h(C, "monstermakex")[1] = this.xx + 480;
        h(C, "monstermakey")[1] = this.yy + 160;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Virovirokun and Ambyu-lance are fighting each other!";
        break;
      }
    case 70:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_poppup_enemy;
        h(C, "monstertype")[0] = 31;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 150;
        h(C, "monsterinstancetype")[1] = IE.obj_tasque_enemy;
        h(C, "monstertype")[1] = 32;
        h(C, "monstermakex")[1] = this.xx + 480;
        h(C, "monstermakey")[1] = this.yy + 170;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Animal house.";
        break;
      }
    case 71:
      {
        h(C, "heromakex")[0] = this.xx + 94;
        h(C, "heromakey")[0] = this.yy + 50;
        h(C, "heromakex")[1] = this.xx + 80;
        h(C, "heromakey")[1] = this.yy + 122;
        h(C, "heromakex")[2] = this.xx + 72;
        h(C, "heromakey")[2] = this.yy + 200;
        h(C, "monsterinstancetype")[0] = IE.obj_clubsenemy;
        h(C, "monstertype")[0] = 47;
        h(C, "monstermakex")[0] = this.xx + 400;
        h(C, "monstermakey")[0] = this.yy + 80;
        h(C, "battlemsg")[0] = "* Clover joins the stage!";
        break;
      }
    case 72:
      {
        h(C, "heromakex")[0] = this.xx + 94;
        h(C, "heromakey")[0] = this.yy + 50;
        h(C, "heromakex")[1] = this.xx + 80;
        h(C, "heromakey")[1] = this.yy + 122;
        h(C, "heromakex")[2] = this.xx + 72;
        h(C, "heromakey")[2] = this.yy + 200;
        h(C, "monsterinstancetype")[0] = IE.obj_dojograzeenemy;
        h(C, "monstertype")[0] = 42;
        h(C, "monstermakex")[0] = this.xx + 440;
        h(C, "monstermakey")[0] = this.yy + 100;
        h(C, "battlemsg")[0] = "* It's a grazing adventure.";
        break;
      }
    case 73:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_virovirokun_enemy;
        h(C, "monstertype")[0] = 35;
        h(C, "monstermakex")[0] = this.xx + 494;
        h(C, "monstermakey")[0] = this.yy + 110;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "\\EE* H-huh!? What's going on!?&* What are we doing!?";
        break;
      }
    case 74:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_werewire_enemy;
        h(C, "monstertype")[0] = 33;
        h(C, "monstermakex")[0] = this.xx + 494;
        h(C, "monstermakey")[0] = this.yy + 64;
        h(C, "monsterinstancetype")[1] = IE.obj_tasque_enemy;
        h(C, "monstertype")[1] = 32;
        h(C, "monstermakex")[1] = this.xx + 430;
        h(C, "monstermakey")[1] = this.yy + 130;
        h(C, "monsterinstancetype")[2] = IE.obj_virovirokun_enemy;
        h(C, "monstertype")[2] = 35;
        h(C, "monstermakex")[2] = this.xx + 495;
        h(C, "monstermakey")[2] = this.yy + 204;
        h(C, "battlemsg")[0] = "* Smorgasbord 2.";
        break;
      }
    case 75:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_werewire_enemy;
        h(C, "monstertype")[0] = 33;
        h(C, "monstermakex")[0] = this.xx + 540;
        h(C, "monstermakey")[0] = this.yy + 85;
        h(C, "monsterinstancetype")[1] = IE.obj_werewire_enemy;
        h(C, "monstertype")[1] = 33;
        h(C, "monstermakex")[1] = this.xx + 435;
        h(C, "monstermakey")[1] = this.yy + 144;
        h(C, "monsterinstancetype")[2] = IE.obj_werewire_enemy;
        h(C, "monstertype")[2] = 33;
        h(C, "monstermakex")[2] = this.xx + 522;
        h(C, "monstermakey")[2] = this.yy + 214;
        h(C, "battlemsg")[0] = "* Werewires swung in!";
        break;
      }
    case 76:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_werewire_enemy;
        h(C, "monstertype")[0] = 33;
        h(C, "monstermakex")[0] = this.xx + 500;
        h(C, "monstermakey")[0] = this.yy + 62;
        h(C, "monsterinstancetype")[1] = IE.obj_werewire_enemy;
        h(C, "monstertype")[1] = 33;
        h(C, "monstermakex")[1] = this.xx + 434;
        h(C, "monstermakey")[1] = this.yy + 126;
        h(C, "monsterinstancetype")[2] = IE.obj_maus_enemy;
        h(C, "monstertype")[2] = 34;
        h(C, "monstermakex")[2] = this.xx + 530;
        h(C, "monstermakey")[2] = this.yy + 236;
        h(C, "battlemsg")[0] = "* Werewire and Maus swung down like stringed superheroes!";
        break;
      }
    case 77:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_poppup_enemy;
        h(C, "monstertype")[0] = 31;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 150;
        h(C, "monsterinstancetype")[1] = IE.obj_omawaroid_enemy;
        h(C, "monstertype")[1] = 30;
        h(C, "monstermakex")[1] = this.xx + 480;
        h(C, "monstermakey")[1] = this.yy + 170;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Ambyu-Lance and its pet appeared!";
        break;
      }
    case 78:
      {
        h(C, "flag")[426] = M(4, 5, 6, 7, 8);
        h(C, "monsterinstancetype")[0] = IE.obj_swatchling_enemy;
        h(C, "monstertype")[0] = 36;
        h(C, "monstermakex")[0] = this.xx + 390;
        h(C, "monstermakey")[0] = this.yy + 18;
        h(C, "monsterinstancetype")[1] = IE.obj_swatchling_enemy;
        h(C, "monstertype")[1] = 36;
        h(C, "monstermakex")[1] = this.xx + 394;
        h(C, "monstermakey")[1] = this.yy + 180;
        h(C, "monsterinstancetype")[0] = IE.obj_poppup_enemy;
        h(C, "monstertype")[2] = 31;
        h(C, "monstermakex")[2] = this.xx + 460;
        h(C, "monstermakey")[2] = this.yy + 240;
        h(C, "battlemsg")[0] = "* Poppup and caretakers appeared!";
        break;
      }
    case 79:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_maus_enemy;
        h(C, "monstertype")[0] = 34;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 70;
        h(C, "monsterinstancetype")[1] = IE.obj_maus_enemy;
        h(C, "monstertype")[1] = 34;
        h(C, "monstermakex")[1] = this.xx + 530;
        h(C, "monstermakey")[1] = this.yy + 142;
        h(C, "monsterinstancetype")[2] = IE.obj_maus_enemy;
        h(C, "monstertype")[2] = 34;
        h(C, "monstermakex")[2] = this.xx + 468;
        h(C, "monstermakey")[2] = this.yy + 214;
        h(C, "battlemsg")[0] = "* Maice blocked the way!";
        break;
      }
    case 80:
      {
        h(C, "flag")[426] = M(4, 5, 6, 7, 8);
        h(C, "monsterinstancetype")[0] = IE.obj_swatchling_enemy;
        h(C, "monstertype")[0] = 36;
        h(C, "monstermakex")[0] = this.xx + 410;
        h(C, "monstermakey")[0] = this.yy + 18;
        h(C, "monsterinstancetype")[1] = IE.obj_swatchling_enemy;
        h(C, "monstertype")[1] = 36;
        h(C, "monstermakex")[1] = this.xx + 482;
        h(C, "monstermakey")[1] = this.yy + 100;
        h(C, "monsterinstancetype")[2] = IE.obj_maus_enemy;
        h(C, "monstertype")[2] = 34;
        h(C, "monstermakex")[2] = this.xx + 466;
        h(C, "monstermakey")[2] = this.yy + 240;
        h(C, "battlemsg")[0] = "* Swatchling and vermin appeared!";
        break;
      }
    case 81:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_werewerewire_enemy;
        h(C, "monstertype")[0] = 40;
        h(C, "monstermakex")[0] = this.xx + 482;
        h(C, "monstermakey")[0] = this.yy + 164;
        h(C, "monsterinstancetype", 1)[1] = 0;
        h(C, "monsterinstancetype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Werewerewire strongly blocks the way!";
        break;
      }
    case 82:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_berdlyb2_enemy;
        h(C, "monstertype")[0] = 46;
        h(C, "monstermakex")[0] = this.xx + 470;
        h(C, "monstermakey")[0] = this.yy + 144;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstermakex")[1] = this.xx + 540;
        h(C, "monstermakey")[1] = this.yy + 84;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "monstermakex")[2] = this.xx + 522;
        h(C, "monstermakey")[2] = this.yy + 214;
        h(C, "battlemsg")[0] = "* Berdly blocks the way!";
        break;
      }
    case 83:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_mauswheel_enemy;
        h(C, "monstertype")[0] = 44;
        h(C, "monstermakex")[0] = this.xx + 450;
        h(C, "monstermakey")[0] = this.yy + 100;
        h(C, "monsterinstancetype", 1)[1] = 0;
        h(C, "monsterinstancetype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Mauswheel spins into you!";
        break;
      }
    case 84:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_gigaqueen_enemy;
        h(C, "monstertype")[0] = 51;
        h(C, "monstermakex")[0] = this.xx + 150;
        h(C, "monstermakey")[0] = this.yy + 0;
        h(C, "monsterinstancetype", 1)[1] = 0;
        h(C, "monsterinstancetype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* GIGA Queen blocks the way!";
        break;
      }
    case 85:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_omawaroid_enemy;
        h(C, "monstertype")[0] = 30;
        h(C, "monstermakex")[0] = this.xx + 500;
        h(C, "monstermakey")[0] = this.yy + 42;
        h(C, "monsterinstancetype")[1] = IE.obj_omawaroid_enemy;
        h(C, "monstertype")[1] = 30;
        h(C, "monstermakex")[1] = this.xx + 422;
        h(C, "monstermakey")[1] = this.yy + 134;
        h(C, "monsterinstancetype")[2] = IE.obj_omawaroid_enemy;
        h(C, "monstertype")[2] = 30;
        h(C, "monstermakex")[2] = this.xx + 500;
        h(C, "monstermakey")[2] = this.yy + 200;
        h(C, "battlemsg")[0] = "* Ambyu-Lances beeped towards you!";
        break;
      }
    case 86:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_virovirokun_enemy;
        h(C, "monstertype")[0] = 35;
        h(C, "monstermakex")[0] = this.xx + 412;
        h(C, "monstermakey")[0] = this.yy + 24;
        h(C, "monsterinstancetype")[1] = IE.obj_tasque_enemy;
        h(C, "monstertype")[1] = 32;
        h(C, "monstermakex")[1] = this.xx + 482;
        h(C, "monstermakey")[1] = this.yy + 126;
        h(C, "monsterinstancetype")[2] = IE.obj_virovirokun_enemy;
        h(C, "monstertype")[2] = 35;
        h(C, "monstermakex")[2] = this.xx + 412;
        h(C, "monstermakey")[2] = this.yy + 184;
        h(C, "battlemsg")[0] = "* Tasque and Co. drew near!";
        break;
      }
    case 87:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_tasque_enemy;
        h(C, "monstertype")[0] = 32;
        h(C, "monstermakex")[0] = this.xx + 412;
        h(C, "monstermakey")[0] = this.yy + 24;
        h(C, "monsterinstancetype")[1] = IE.obj_tasque_enemy;
        h(C, "monstertype")[1] = 32;
        h(C, "monstermakex")[1] = this.xx + 474;
        h(C, "monstermakey")[1] = this.yy + 114;
        h(C, "monsterinstancetype")[2] = IE.obj_tasque_enemy;
        h(C, "monstertype")[2] = 32;
        h(C, "monstermakex")[2] = this.xx + 412;
        h(C, "monstermakey")[2] = this.yy + 184;
        h(C, "battlemsg")[0] = "* Tasques zoomed towards you!";
        break;
      }
    case 88:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_poppup_enemy;
        h(C, "monstertype")[0] = 31;
        h(C, "monstermakex")[0] = this.xx + 434;
        h(C, "monstermakey")[0] = this.yy + 36;
        h(C, "monsterinstancetype")[1] = IE.obj_virovirokun_enemy;
        h(C, "monstertype")[1] = 35;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 100;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "monstermakex")[2] = this.xx + 440;
        h(C, "monstermakey")[2] = this.yy + 190;
        h(C, "battlemsg")[0] = "* Poppup and Virovirokun Appeared!";
        break;
      }
    case 89:
      {
        h(C, "heromakex")[0] = this.xx + 94;
        h(C, "heromakey")[0] = this.yy + 50;
        h(C, "heromakex")[1] = this.xx + 80;
        h(C, "heromakey")[1] = this.yy + 122;
        h(C, "heromakex")[2] = this.xx + 72;
        h(C, "heromakey")[2] = this.yy + 200;
        h(C, "monsterinstancetype")[0] = IE.obj_tasque_manager_enemy;
        h(C, "monstertype")[0] = 42;
        h(C, "monstermakex")[0] = this.xx + 487;
        h(C, "monstermakey")[0] = this.yy + 94;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Graze!";
        break;
      }
    case 90:
      {
        h(C, "heromakex")[0] = this.xx + 94;
        h(C, "heromakey")[0] = this.yy + 50;
        h(C, "heromakex")[1] = this.xx + 80;
        h(C, "heromakey")[1] = this.yy + 122;
        h(C, "heromakex")[2] = this.xx + 72;
        h(C, "heromakey")[2] = this.yy + 200;
        h(C, "monsterinstancetype")[0] = IE.obj_werewire_enemy;
        h(C, "monstertype")[0] = 33;
        h(C, "monstermakex")[0] = this.xx + 476;
        h(C, "monstermakey")[0] = this.yy + 70;
        h(C, "monsterinstancetype")[1] = IE.obj_werewire_enemy;
        h(C, "monstertype")[1] = 33;
        h(C, "monstermakex")[1] = this.xx + 454;
        h(C, "monstermakey")[1] = this.yy + 168;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Round One!";
        break;
      }
    case 91:
      {
        h(C, "heromakex")[0] = this.xx + 94;
        h(C, "heromakey")[0] = this.yy + 50;
        h(C, "heromakex")[1] = this.xx + 80;
        h(C, "heromakey")[1] = this.yy + 122;
        h(C, "heromakex")[2] = this.xx + 72;
        h(C, "heromakey")[2] = this.yy + 200;
        h(C, "monsterinstancetype")[0] = IE.obj_poppup_enemy;
        h(C, "monstertype")[0] = 31;
        h(C, "monstermakex")[0] = this.xx + 412;
        h(C, "monstermakey")[0] = this.yy + 40;
        h(C, "monsterinstancetype")[1] = IE.obj_omawaroid_enemy;
        h(C, "monstertype")[1] = 30;
        h(C, "monstermakex")[1] = this.xx + 466;
        h(C, "monstermakey")[1] = this.yy + 106;
        h(C, "monsterinstancetype")[2] = IE.obj_virovirokun_enemy;
        h(C, "monstertype")[2] = 35;
        h(C, "monstermakex")[2] = this.xx + 412;
        h(C, "monstermakey")[2] = this.yy + 184;
        h(C, "battlemsg")[0] = "* Round Two!";
        break;
      }
    case 92:
      {
        h(C, "heromakex")[0] = this.xx + 94;
        h(C, "heromakey")[0] = this.yy + 50;
        h(C, "heromakex")[1] = this.xx + 80;
        h(C, "heromakey")[1] = this.yy + 122;
        h(C, "heromakex")[2] = this.xx + 72;
        h(C, "heromakey")[2] = this.yy + 200;
        h(C, "monsterinstancetype")[0] = IE.obj_tasque_enemy;
        h(C, "monstertype")[0] = 32;
        h(C, "monstermakex")[0] = this.xx + 432;
        h(C, "monstermakey")[0] = this.yy + 52;
        h(C, "monsterinstancetype")[1] = IE.obj_tasque_enemy;
        h(C, "monstertype")[1] = 32;
        h(C, "monstermakex")[1] = this.xx + 476;
        h(C, "monstermakey")[1] = this.yy + 140;
        h(C, "monsterinstancetype")[2] = IE.obj_maus_enemy;
        h(C, "monstertype")[2] = 34;
        h(C, "monstermakex")[2] = this.xx + 512;
        h(C, "monstermakey")[2] = this.yy + 236;
        h(C, "battlemsg")[0] = "* Round Three!";
        break;
      }
    case 93:
      {
        h(C, "flag")[426] = M(0, 1, 2, 3);
        h(C, "heromakex")[0] = this.xx + 94;
        h(C, "heromakey")[0] = this.yy + 50;
        h(C, "heromakex")[1] = this.xx + 80;
        h(C, "heromakey")[1] = this.yy + 122;
        h(C, "heromakex")[2] = this.xx + 72;
        h(C, "heromakey")[2] = this.yy + 200;
        h(C, "monsterinstancetype")[0] = IE.obj_swatchling_enemy;
        h(C, "monstertype")[0] = 36;
        h(C, "monstermakex")[0] = this.xx + 394;
        h(C, "monstermakey")[0] = this.yy + 8;
        h(C, "monsterinstancetype")[1] = IE.obj_swatchling_enemy;
        h(C, "monstertype")[1] = 36;
        h(C, "monstermakex")[1] = this.xx + 490;
        h(C, "monstermakey")[1] = this.yy + 74;
        h(C, "monsterinstancetype")[2] = IE.obj_swatchling_enemy;
        h(C, "monstertype")[2] = 36;
        h(C, "monstermakex")[2] = this.xx + 394;
        h(C, "monstermakey")[2] = this.yy + 160;
        h(C, "battlemsg")[0] = "* Round Four!";
        break;
      }
    case 94:
      {
        h(C, "heromakex")[0] = this.xx + 94;
        h(C, "heromakey")[0] = this.yy + 50;
        h(C, "heromakex")[1] = this.xx + 80;
        h(C, "heromakey")[1] = this.yy + 122;
        h(C, "heromakex")[2] = this.xx + 72;
        h(C, "heromakey")[2] = this.yy + 200;
        h(C, "monsterinstancetype")[0] = IE.obj_werewerewire_enemy;
        h(C, "monstertype")[0] = 40;
        h(C, "monstermakex")[0] = this.xx + 464;
        h(C, "monstermakey")[0] = this.yy + 68;
        h(C, "monsterinstancetype")[1] = IE.obj_werewerewire_enemy;
        h(C, "monstertype")[1] = 40;
        h(C, "monstermakex")[1] = this.xx + 494;
        h(C, "monstermakey")[1] = this.yy + 184;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Final Round!";
        break;
      }
    case 95:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_werewire_enemy;
        h(C, "monstertype")[0] = 33;
        h(C, "monstermakex")[0] = this.xx + 502;
        h(C, "monstermakey")[0] = this.yy + 144;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Werewire appeared.";
        break;
      }
    case 96:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_virovirokun_enemy;
        h(C, "monstertype")[0] = 35;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 120;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Virovirokun floated in!";
        break;
      }
    case 97:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_omawaroid_enemy;
        h(C, "monstertype")[0] = 30;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 114;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Ambyu-Lance beeps towards you!";
        break;
      }
    case 98:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_tasque_enemy;
        h(C, "monstertype")[0] = 32;
        h(C, "monstermakex")[0] = this.xx + 494;
        h(C, "monstermakey")[0] = this.yy + 144;
        h(C, "monstertype", 1)[1] = 0;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Tasque crossed your path!";
        break;
      }
    case 99:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_baseenemy;
        h(C, "monstertype")[0] = 1;
        h(C, "monstermakex")[0] = this.xx + 480;
        h(C, "monstermakey")[0] = this.yy + 80;
        h(C, "monsterinstancetype")[1] = IE.obj_baseenemy;
        h(C, "monstertype")[1] = 1;
        h(C, "monstermakex")[1] = this.xx + 500;
        h(C, "monstermakey")[1] = this.yy + 160;
        h(C, "monsterinstancetype")[2] = IE.obj_baseenemy;
        h(C, "monstertype")[2] = 1;
        h(C, "monstermakex")[2] = this.xx + 520;
        h(C, "monstermakey")[2] = this.yy + 240;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "battlemsg")[0] = "* Test enemies showed up.";
        break;
      }
    case 100:
      {
        h(C, "heromakex")[0] = this.xx + 94;
        h(C, "heromakey")[0] = this.yy + 50;
        h(C, "heromakex")[1] = this.xx + 80;
        h(C, "heromakey")[1] = this.yy + 122;
        h(C, "heromakex")[2] = this.xx + 72;
        h(C, "heromakey")[2] = this.yy + 200;
        h(C, "monsterinstancetype")[0] = IE.obj_dojo_spareenemy;
        h(C, "monstertype")[0] = 52;
        h(C, "monstermakex")[0] = this.xx + 440;
        h(C, "monstermakey")[0] = this.yy + 100;
        h(C, "battlemsg")[0] = "* Jigsaw Joe jigs in!";
        break;
      }
    case 101:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_poppup_enemy;
        h(C, "monstertype")[0] = 31;
        h(C, "monstermakex")[0] = this.xx + 440;
        h(C, "monstermakey")[0] = this.yy + 50;
        h(C, "monsterinstancetype")[1] = IE.obj_maus_enemy;
        h(C, "monstertype")[1] = 34;
        h(C, "monstermakex")[1] = this.xx + 490;
        h(C, "monstermakey")[1] = this.yy + 166;
        h(C, "monstertype", 2)[2] = 0;
        h(C, "monstermakex")[2] = this.xx + 440;
        h(C, "monstermakey")[2] = this.yy + 206;
        h(C, "battlemsg")[0] = "* Poppup and Maus appeared.";
        break;
      }
    case 102:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_pipis_enemy;
        h(C, "monstertype")[0] = 53;
        h(C, "monstermakex")[0] = this.xx + 530;
        h(C, "monstermakey")[0] = this.yy + 100;
        h(C, "monsterinstancetype")[1] = IE.obj_pipis_enemy;
        h(C, "monstertype")[1] = 53;
        h(C, "monstermakex")[1] = this.xx + 448;
        h(C, "monstermakey")[1] = this.yy + 168;
        h(C, "monsterinstancetype")[2] = IE.obj_pipis_enemy;
        h(C, "monstertype")[2] = 53;
        h(C, "monstermakex")[2] = this.xx + 510;
        h(C, "monstermakey")[2] = this.yy + 250;
        h(C, "battlemsg")[0] = "* Pipis.";
        break;
      }
    case 777:
      {
        h(C, "monsterinstancetype")[0] = IE.obj_bullettester_enemy;
        h(C, "monsterinstancetype")[1] = IE.obj_bullettester_enemy;
        h(C, "monsterinstancetype")[2] = IE.obj_bullettester_enemy;
        h(C, "monstertype")[0] = 1;
        h(C, "monstertype")[1] = 1;
        h(C, "monstertype")[2] = 1;
        h(C, "battlemsg")[0] = " ";
        break;
      }
  }
}
I1(scr_encountersetup, "scr_encountersetup");
I3(scr_encountersetup, "case 0:\n;\ncase 1:\n;\ncase 2:\n;\ncase 3:\n;\ncase 4:\n;\ncase 5:\n;\ncase 6:\n;\ncase 7:\n;\ncase 8:\n;\ncase 9:\n;\ncase 12:\n;\ncase 13:\n;\ncase 14:\n;\ncase 15:\n;\ncase 16:\n;\ncase 17:\n;\ncase 18:\n;\ncase 19:\n;\ncase 20:\n;\ncase 21:\n;\ncase 22:\n;\ncase 23:\n;\ncase 24:\n;\ncase 25:\n;\ncase 27:\n;\ncase 28:\n;\ncase 29:\n;\ncase 30:\n;\ncase 31:\n;\ncase 32:\n;\ncase 33:\n;\ncase 40:\n;\ncase 50:\n;\ncase 51:\n;\ncase 52:\n;\ncase 53:\n;\ncase 54:\n;\ncase 55:\n;\ncase 56:\n;\ncase 57:\n;\ncase 58:\n;\ncase 59:\n;\ncase 60:\n;\ncase 61:\n;\ncase 62:\n;\ncase 63:\n;\ncase 64:\n;\ncase 65:\n;\ncase 66:\n;\ncase 67:\n;\ncase 68:\n;\ncase 69:\n;\ncase 70:\n;\ncase 71:\n;\ncase 72:\n;\ncase 73:\n;\ncase 74:\n;\ncase 75:\n;\ncase 76:\n;\ncase 77:\n;\ncase 78:\n;\ncase 79:\n;\ncase 80:\n;\ncase 81:\n;\ncase 82:\n;\ncase 83:\n;\ncase 84:\n;\ncase 85:\n;\ncase 86:\n;\ncase 87:\n;\ncase 88:\n;\ncase 89:\n;\ncase 90:\n;\ncase 91:\n;\ncase 92:\n;\ncase 93:\n;\ncase 94:\n;\ncase 95:\n;\ncase 96:\n;\ncase 97:\n;\ncase 98:\n;\ncase 99:\n;\ncase 100:\n;\ncase 101:\n;\ncase 102:\n;\ncase 777:");
I5();
var IO = {
  12: "checkers",
  53: "battle",
  58: "berdly_chase",
  59: "queen_boss",
  60: "spamton_battle",
  61: "spamton_neo_mix_ex_wip",
  62: "",
  63: "rouxls_battle",
  74: "battle",
  75: "battle",
  76: "battle",
  82: "berdly_chase",
  84: "",
  90: "battle",
  95: "battle"
};
var Ix = {
  58: "plain",
  59: "mansion_parallax",
  61: "plain",
  63: "plain",
  777: "plain"
};
var IC = "battle";
var Iy = {
  82: {
    test: "== 2",
    song: "berdly_battle_heartbeat_true"
  }
};
x.scr_damage = e;
x.scr_damage_all = G;
x.scr_act_simul = T;
var IN = new Proxy({}, {
  get: I1((I, H) => B[H] || Z[H], "get")
});
var Io = new Set(Iu.unusedEncounters || []);
var Ik = Iu.unusedEncounterWhy || {};
var IX = 50;
var Ii = {
  777: "the developers' bullet-tester slot: three obj_bullettester_enemy with no monster data"
};
var Im = new Set([0, 1, ...Object.keys(Ii).map(Number)]);
var Ia = new Set((I4(scr_encountersetup) ?? String(scr_encountersetup)).match(/case (\d+):/g).map(I => Number(I.slice(5, -1))));
var IJ = {
  50: "Cyber City",
  51: "Cyber City",
  52: "Cyber City",
  53: "Cyber City",
  54: "Cyber Field",
  55: "Cyber Field",
  56: "Queen's Mansion",
  57: "Cyber City",
  58: "Cyber Field - Berdly",
  59: "Queen's Mansion - Queen",
  60: "Cyber City - Spamton",
  61: "Cyber City - Spamton NEO",
  62: "Cyber City - Sweet Cap’n Cakes",
  63: "Cyber Field - Rouxls",
  64: "Queen's Mansion",
  65: "Cyber City",
  66: "Cyber Field",
  67: "Cyber Field",
  68: "Cyber Field",
  69: "Cyber Field",
  70: "Cyber City",
  71: "Cyber City",
  72: "Dojo",
  73: "Cyber Field",
  74: "Cyber City",
  75: "Cyber City",
  76: "Cyber City",
  77: "Cyber City",
  78: "Cyber City",
  79: "Cyber City",
  80: "Cyber City",
  81: "Cyber City",
  82: "Cyber City",
  83: "Cyber City",
  84: "Cyber City",
  85: "Cyber City",
  86: "Cyber City",
  87: "Cyber City",
  88: "Cyber City",
  89: "Cyber City",
  90: "Cyber City",
  91: "Cyber City",
  92: "Cyber City",
  93: "Cyber City",
  94: "Cyber City",
  95: "Cyber City",
  96: "Cyber City",
  97: "Cyber City",
  98: "Cyber City",
  99: "Cyber City",
  100: "Cyber City",
  101: "Cyber City",
  102: "Cyber City",
  777: "Debug"
};
var IM = {
  84: "room_dw_mansion_top"
};
var IU = {
  100: "Jigsaw Joe",
  72: "Graze Challenge 1",
  71: "Clover Rematch",
  89: "Tasque Manager Says",
  90: "All Stars 1",
  91: "All Stars 2",
  92: "All Stars 3",
  93: "All Stars 4",
  94: "All Stars Final"
};
var H0 = [100, 72, 71, 89, 90, 91, 92, 93, 94];
var H1 = "ch2enc102";
function wrapDesc(I, H = 34) {
  let Hs = [];
  let HG = "";
  for (let HT of String(I).split(/\s+/).filter(Boolean)) {
    if (HG && HG.length + 1 + HT.length > H) {
      Hs.push(HG);
      HG = HT;
    } else {
      HG = HG ? HG + " " + HT : HT;
    }
  }
  if (HG) {
    Hs.push(HG);
  }
  return Hs.join("#");
}
I1(wrapDesc, "wrapDesc");
function snapshot() {
  return {
    t: C.monstertype.slice(),
    it: C.monsterinstancetype.slice(),
    mx: C.monstermakex.slice(),
    my: C.monstermakey.slice(),
    hx: C.heromakex.slice(),
    hy: C.heromakey.slice(),
    bm: (C.battlemsg || []).slice(),
    name: C.monstername.slice()
  };
}
I1(snapshot, "snapshot");
function restore(I) {
  C.monstertype = I.t;
  C.monsterinstancetype = I.it;
  C.monstermakex = I.mx;
  C.monstermakey = I.my;
  C.heromakex = I.hx;
  C.heromakey = I.hy;
  C.battlemsg = I.bm;
  C.monstername = I.name;
}
I1(restore, "restore");
function monsterName(I) {
  let H = {
    t: C.monstertype.slice(),
    n: C.monstername.slice()
  };
  C.monstertype[0] = I;
  let Hs = {
    myself: 0
  };
  try {
    z.call(Hs);
  } catch {}
  let HG = C.monstername[0];
  C.monstertype = H.t;
  C.monstername = H.n;
  if (HG && HG.trim()) {
    return HG;
  } else {
    return "Enemy " + I;
  }
}
I1(monsterName, "monsterName");
var H6 = 64;
var rows = I1((I, H) => Array.from({
  length: H6
}, () => new Array(I).fill(H)), "rows");
function ensureChapter2Globals() {
  let I = {
    actingchoice: 0,
    actingsimul: 0,
    actingsingle: 0,
    actingtarget: 0,
    armor: 0,
    battleactcount: 0,
    guts: 0,
    input_released: 0,
    keyitem: 0,
    litem: 0,
    phone: 0,
    pocketitem: 0,
    smxx: 0,
    smyy: 0,
    weapon: 0,
    weaponstyle: 0,
    choicemsg: " ",
    currentsong: " ",
    monsterattackname: " ",
    othername: " "
  };
  for (let [H, Hs] of Object.entries(I)) {
    if (!Array.isArray(C[H])) {
      C[H] = new Array(H6).fill(Hs);
    }
  }
  for (let HG of ["itembolts", "itemboltspeed", "itemelement", "itemelementamount", "itemgrazeamt", "itemspecial"]) {
    if (!Array.isArray(C[HG])) {
      C[HG] = rows(4, 0);
    }
  }
  if (!Array.isArray(C.menucoord)) {
    C.menucoord = rows(H6, 0);
  }
  if (!Array.isArray(C.cinstance)) {
    C.cinstance = Array.from({
      length: H6
    }, () => ({
      x: 0,
      y: 0
    }));
  }
}
I1(ensureChapter2Globals, "ensureChapter2Globals");
var HI = {
  maxhp: {
    1: 120,
    2: 140,
    3: 100,
    4: 90
  },
  at: {
    1: 12,
    2: 16,
    3: 10,
    4: 3
  },
  mag: {
    2: 1,
    3: 9,
    4: 11
  },
  df: {
    4: 1
  },
  charweapon: {
    4: 12
  },
  chararmor1: {
    1: 1,
    2: 1,
    3: 1,
    4: 14
  },
  chararmor2: {
    1: 1,
    2: 1,
    3: 4,
    4: 22
  }
};
var HH = {
  maxhp: [90, 110, 70],
  at: [10, 14, 8],
  charweapon: [1, 2, 3],
  chararmor1: [0, 0, 0],
  chararmor2: [0, 0, 0]
};
function isChapter1Party() {
  for (let [I, H] of Object.entries(HH)) {
    for (let Hs = 0; Hs < 3; Hs++) {
      if ((C[I] && C[I][Hs + 1]) !== H[Hs]) {
        return false;
      }
    }
  }
  return true;
}
I1(isChapter1Party, "isChapter1Party");
function applyChapter2Start(I) {
  let H = (C.char || []).includes(4) && !!I && !!I.storyParty;
  let Hs = !!C.charhero && C.charhero[4] === "noelle";
  if (H) {
    C.charbase[4] = 4;
    if (C.charhero) {
      C.charhero[4] = "noelle";
    }
    C.charname[4] = "Noelle";
  }
  if (isChapter1Party()) {
    for (let [HG, HT] of Object.entries(HI)) {
      for (let [HB, Hg] of Object.entries(HT)) {
        if (Array.isArray(C[HG]) && (!Hs || HB !== "4")) {
          C[HG][Number(HB)] = Hg;
        }
      }
    }
    for (let Hd of Object.keys(HI.maxhp)) {
      if (!Hs || Hd !== "4") {
        C.hp[Number(Hd)] = C.maxhp[Number(Hd)];
      }
    }
    if (Array.isArray(C.spell) && !Hs) {
      C.spell[4] = new Array(12).fill(0);
      C.spell[4][0] = 2;
      C.spell[4][1] = 8;
      C.spell[4][2] = 9;
      if (I && I.flags && I.flags[915] >= 5) {
        C.spell[4][3] = 10;
      }
    }
    N();
    o();
  }
}
I1(applyChapter2Start, "applyChapter2Start");
var HL = {
  60: [1, 0, 0],
  63: [1, 3, 0],
  84: [1, 0, 0],
  82: [1, 4, 0],
  95: [1, 4, 0],
  96: [1, 4, 0],
  97: [1, 4, 0],
  98: [1, 4, 0]
};
var Hj = {
  82: [{
    suffix: "sg",
    party: [1, 4, 0],
    flags: {
      915: 5
    },
    note: "Weird Route (Snowgrave)"
  }],
  61: [{
    suffix: "sg",
    party: [1, 0, 0],
    flags: {
      915: 9
    },
    note: "Weird Route (Snowgrave)"
  }],
  59: [{
    suffix: "sg",
    party: [1, 2, 3],
    flags: {
      915: 9
    },
    note: "Weird Route (Snowgrave)"
  }]
};
function buildChapter2Fights(I = 800) {
  let H = [];
  for (let Hs = IX; Hs <= I; Hs++) {
    if (!Im.has(Hs) && !!Ia.has(Hs)) {
      for (let HG of [null, ...(Hj[Hs] || [])]) {
        buildOne(H, Hs, HG);
      }
    }
  }
  return H;
}
I1(buildChapter2Fights, "buildChapter2Fights");
function buildOne(I, H, Hs) {
  {
    let HG = snapshot();
    let HT = C.char.slice();
    let HB = {};
    let Hg = Hs && Hs.party || HL[H] || null;
    if (Hg) {
      C.char = Hg.slice();
    }
    let Hd = Hs && Hs.flags || null;
    if (Hd) {
      for (let [He, Hp] of Object.entries(Hd)) {
        HB[He] = C.flag[He];
        C.flag[He] = Hp;
      }
    }
    C.monstertype = [0, 0, 0];
    C.monsterinstancetype = [null, null, null];
    C.battlemsg = [" "];
    let HD = true;
    try {
      scr_encountersetup.call({}, H);
    } catch (HS) {
      HD = false;
      console.error("ch2 encounter " + H + " setup failed", HS);
    }
    if (HD && C.monstertype[0] > 0) {
      let Hf = [];
      for (let HQ = 0; HQ < 3; HQ++) {
        let Hr = C.monstertype[HQ];
        let Hb = C.monsterinstancetype[HQ];
        if (Hr > 0 && Hb) {
          Hf.push({
            cls: Hb,
            type: Hr,
            x: C.monstermakex[HQ],
            y: C.monstermakey[HQ],
            setup: () => {}
          });
        }
      }
      if (Hf.length) {
        let HP = Hf.map(Ht => monsterName(Ht.type));
        let Hl = {};
        for (let Ht of HP) {
          Hl[Ht] = (Hl[Ht] || 0) + 1;
        }
        let Hv = Object.entries(Hl).map(([Hh, Hq]) => Hq > 1 ? Hh + " x" + Hq : Hh).join(" & ");
        let HZ = IU[H] && !Hs ? IU[H] : null;
        let HR = HZ ? /All Stars/.test(HZ) ? HZ + ": " + Hv : HZ : Hv + (Hs ? " (" + Hs.note + ")" : "");
        let HF = Io.has(H) && !HZ;
        let HV = HZ ? H0.indexOf(H) : -1;
        let Hu = IO[String(H)] ?? IC;
        let HE = Iy && Iy[String(H)];
        if (HE) {
          let [Hh, Hq] = HE.test.split(" ");
          let HK = f();
          let Hw = Number(Hq);
          if ({
            "==": HK === Hw,
            "!=": HK !== Hw,
            ">=": HK >= Hw,
            "<=": HK <= Hw,
            ">": HK > Hw,
            "<": HK < Hw
          }[Hh]) {
            Hu = HE.song;
          }
        }
        I.push({
          id: "ch2enc" + H + (Hs ? Hs.suffix : ""),
          name: HR,
          chapter: 2,
          cut: HF,
          area: HF ? "CUT CONTENT" : HZ ? "Dojo" : IJ[H] || "Chapter 2",
          generated: true,
          ...(HV >= 0 ? {
            dojo: true,
            listAfter: HV === 0 ? H1 : "ch2enc" + H0[HV - 1]
          } : {}),
          desc: HR + "#Chapter 2, encounter " + H + "." + (HZ ? "#A dojo challenge" + (/All Stars/.test(HZ) ? " (Ch2 All Stars)." : ".") : "") + (HF ? "#" + wrapDesc(Ik[String(H)] || "") : ""),
          party: C.char.slice(),
          storyParty: !!Hg,
          flags: Hd ? {
            ...Hd
          } : undefined,
          heromakex: C.heromakex.slice(),
          heromakey: C.heromakey.slice(),
          monstermakex: C.monstermakex.slice(0, 3),
          monstermakey: C.monstermakey.slice(0, 3),
          monsters: Hf,
          battlemsg: C.battlemsg && C.battlemsg[0] || " ",
          encounterno: H,
          music: Hu,
          room: IM[H] || (HZ ? "room_dw_castle_dojo" : null),
          background: HZ ? dojoBackground() : Q(Ix[String(H)])
        });
      }
    }
    restore(HG);
    C.char = HT;
    for (let [HO, Hx] of Object.entries(HB)) {
      C.flag[HO] = Hx;
    }
  }
}
I1(buildOne, "buildOne");
export { IZ as a, Iu as b, IN as c, wrapDesc as d, ensureChapter2Globals as e, applyChapter2Start as f, buildChapter2Fights as g };
