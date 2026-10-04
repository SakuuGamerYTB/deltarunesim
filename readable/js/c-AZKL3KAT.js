const V = function () {
  ;
  let UX = true;
  return function (UM, Ua) {
    const UJ = UX ? function () {
      if (Ua) {
        const UO = Ua.apply(UM, arguments);
        Ua = null;
        return UO;
      }
    } : function () {};
    UX = false;
    return UJ;
  };
}();
const A = V(this, function () {
  const Ug = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const UM = new RegExp("[UGkKPQTJBELLDjWBFFWxjjkHDHSjLWABfOKVEzKYBHHGGzIXNQRCfOKHkbjHDMfNOVUUDCMHGYkjfNYMKkzENHCBTOVOQTHIVKORPWRbREUzSkPUDYQAINRWQSYBXBbQyLYYQqQOWDJRGFfqAzJIUIYQNOPMxyIqFOObLkAjKkqkIAJUEERWkVEWbMMRWNOPP]", "g");
  const UC = "UGkKPlQocalhosTJtB;1E2L7L.0Dj.0.1W;dBeltFFWxajrjkuHnesDimH.ScojLWABm;fOwKVEzKwYwBHH.GdGeltarzIuneXsNQRCfiOmKH.ckbjHDom;dMfNOrVUsim.UlDCocaMlhoHstGY;.dekltjarfuNnesiYMKkzmENH.CBpaTOVgeOQsTH.deIvVKORPWRbREUzSkPUDYQAINRWQSYBXBbQyLYYQqQOWDJRGFfqAzJIUIYQNOPMxyIqFOObLkAjKkqkIAJUEERWkVEWbMMRWNOPP".replace(UM, "").split(";");
  let Uy;
  let Um;
  let UG;
  let UJ;
  const Un = function (UT, UY, Uj) {
    if (UT.length != UY) {
      return false;
    }
    for (let Uo = 0; Uo < UY; Uo++) {
      for (let b0 = 0; b0 < Uj.length; b0 += 2) {
        if (Uo == Uj[b0] && UT.charCodeAt(Uo) != Uj[b0 + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const Uh = function (UT, UY, Uj) {
    return Un(UY, Uj, UT);
  };
  const UF = function (UT, UY, Uj) {
    return Uh(UY, UT, Uj);
  };
  const Uu = function (UT, UY, Uj) {
    return UF(UY, Uj, UT);
  };
  for (let UT in Ug) {
    if (Un(UT, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      Uy = UT;
      break;
    }
  }
  for (let Ud in Ug[Uy]) {
    if (Uu(6, Ud, [5, 110, 0, 100])) {
      Um = Ud;
      break;
    }
  }
  for (let Up in Ug[Uy]) {
    if (UF(Up, [7, 110, 0, 108], 8)) {
      UG = Up;
      break;
    }
  }
  if (!(Um < "~")) {
    for (let be in Ug[Uy][UG]) {
      if (Uh([7, 101, 0, 104], be, 8)) {
        UJ = be;
        break;
      }
    }
  }
  if (!Uy || !Ug[Uy]) {
    return;
  }
  const UO = Ug[Uy][Um];
  const Ui = !!Ug[Uy][UG] && Ug[Uy][UG][UJ];
  const UP = UO || Ui;
  if (!UP) {
    return;
  }
  let UR = false;
  for (let bz = 0; bz < UC.length; bz++) {
    const bI = UC[bz];
    const bl = bI[0] === String.fromCharCode(46) ? bI.slice(1) : bI;
    const bD = UP.length - bl.length;
    const bZ = UP.indexOf(bl, bD);
    const bw = bZ !== -1 && bZ === bD;
    if (bw) {
      if (UP.length == bI.length || bI.indexOf(".") === 0) {
        UR = true;
      }
    }
  }
  if (!UR) {
    const bg = new RegExp("[GJCzIAAzGMYpWzLeQfjYyAcKKigghR]", "g");
    const bM = "aGJbCzoIutAAzG:MbYplaWnzkLeQfjYyAcKKigghR".replace(bg, "");
    Ug[Uy][UG] = bM;
  }
});
A();
const S = function () {
  ;
  let UM = true;
  return function (Ua, UC) {
    const Un = UM ? function () {
      if (UC) {
        const Ud = UC.apply(Ua, arguments);
        UC = null;
        return Ud;
      }
    } : function () {};
    UM = false;
    return Un;
  };
}();
const f = S(this, function () {
  const Ua = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const UC = Ua.console = Ua.console || {};
  const Uy = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let Um = 0; Um < Uy.length; Um++) {
    const UG = S.constructor.prototype.bind(S);
    const UJ = Uy[Um];
    const Un = UC[UJ] || UG;
    UG.__proto__ = S.bind(S);
    UG.toString = Un.toString.bind(Un);
    UC[UJ] = UG;
  }
});
f();
import { T as e, z as v } from "./c-OWAP2V6I.js";
import { a as E } from "./c-P4DGRHJ4.js";
import { G as Q, H, I as k, ba as z, ca as r } from "./c-EVUTBL4V.js";
import { a as I, l } from "./c-PIEPTJTC.js";
l();
var D = 128;
var Z = 96;
var k01 = I(U => U <= 0 ? 0 : U >= 1 ? 1 : U, "k01");
var outCubic = I(U => 1 - Math.pow(1 - k01(U), 3), "outCubic");
var inCubic = I(U => Math.pow(k01(U), 3), "inCubic");
var outBack = I((U, b = 1.70158) => {
  U = k01(U) - 1;
  return U * U * ((b + 1) * U + b) + 1;
}, "outBack");
var X = {
  k01: k01,
  outCubic: outCubic,
  inCubic: inCubic,
  outBack: outBack
};
function mulberry32(U) {
  return () => {
    U |= 0;
    U = U + 1831565813 | 0;
    let Uy = Math.imul(U ^ U >>> 15, U | 1);
    Uy = Uy + Math.imul(Uy ^ Uy >>> 7, Uy | 61) ^ Uy;
    return ((Uy ^ Uy >>> 14) >>> 0) / 4294967296;
  };
}
I(mulberry32, "mulberry32");
var a = Math.round;
var fill = I((U, b, UX, Ug, UM, Ua) => {
  U.fillStyle = b;
  U.fillRect(a(UX), a(Ug), UM, Ua);
}, "fill");
var mkCanvas = I((U, b) => {
  let Uy = document.createElement("canvas");
  Uy.width = U;
  Uy.height = b;
  return Uy;
}, "mkCanvas");
function shade(U, b) {
  let Ug = parseInt(U.slice(1), 16);
  let UM = Ug >> 16;
  let Ua = Ug >> 8 & 255;
  let UC = Ug & 255;
  let Uy = Un => Math.max(0, Math.min(255, Math.round(b >= 0 ? Un + (255 - Un) * b : Un * (1 + b))));
  return "#" + [Uy(UM), Uy(Ua), Uy(UC)].map(Un => Un.toString(16).padStart(2, "0")).join("");
}
I(shade, "shade");
var G = new Map();
function bevelCell(U, b) {
  let Ug = U + b;
  let UM = G.get(Ug);
  if (UM) {
    return UM;
  }
  UM = mkCanvas(b, b);
  let Ua = UM.getContext("2d");
  let UC = Math.max(1, Math.round(b / 8));
  Ua.fillStyle = U;
  Ua.fillRect(0, 0, b, b);
  Ua.fillStyle = shade(U, 0.3);
  Ua.fillRect(0, 0, b, UC);
  Ua.fillRect(0, 0, UC, b);
  Ua.fillStyle = shade(U, -0.3);
  Ua.fillRect(0, b - UC, b, UC);
  Ua.fillRect(b - UC, 0, UC, b);
  G.set(Ug, UM);
  return UM;
}
I(bevelCell, "bevelCell");
const n = {
  rank: "A"
};
n.suit = "socks";
const h = {
  rank: "10"
};
h.suit = "buttons";
var F = n;
var u = h;
var O = [1, 5, 25, 100, 5, 25];
var i = Q.coin;
function plainBack(U, b, UX, Ug) {
  b = a(b);
  UX = a(UX);
  let Um = b + a((H - Ug) / 2);
  fill(U, "#ffffff", Um, UX, Ug, k);
  if (!(Ug <= 2)) {
    fill(U, "#5a1020", Um + 1, UX + 1, Ug - 2, k - 2);
    U.fillStyle = "#8a2a3a";
    for (let UG = 3; UG < k - 3; UG += 4) {
      for (let UJ = 3 + (UG >> 2 & 1) * 2; UJ < Ug - 3; UJ += 4) {
        U.fillRect(Um + UJ, UX + UG, 1, 1);
      }
    }
  }
}
I(plainBack, "plainBack");
function card(U, b, UX, Ug, UM, Ua) {
  let Um = {
    scale: 1,
    flip: UM ?? undefined,
    faceDown: UM == null,
    back: "51",
    lift: Ua
  };
  if (z(U, b, UX, Ug, Um)) {
    return;
  }
  let Un = UM != null && UM < 1 ? a(H * Math.abs(Math.cos(Math.PI * UM))) : H;
  plainBack(U, UX, Ug, Un);
}
I(card, "card");
const T = {
  ex: 64,
  ey: 22,
  every: 4,
  arms: 5,
  step: 12,
  speed: 1.6,
  life: 64
};
var Y = {
  loop: 96,
  still: 60,
  hover: ["snd_smallswing", 0.1, 2],
  draw(U, b, UX) {
    const Ug = {
      MRuVP: function (Uu, UO, Ui, UP, UR, UT, UY) {
        return Uu(UO, Ui, UP, UR, UT, UY);
      },
      USqUc: "#5a1020",
      bdGQJ: function (Uu, UO) {
        return Uu + UO;
      },
      pcCiL: function (Uu, UO) {
        return Uu - UO;
      },
      IDeDw: "#8a2a3a",
      ZtkOW: function (Uu, UO) {
        return Uu < UO;
      },
      qvEIU: function (Uu, UO) {
        return Uu * UO;
      },
      NkYUS: function (Uu, UO) {
        return Uu & UO;
      },
      JBjGA: function (Uu, UO) {
        return Uu >> UO;
      },
      OdqHW: function (Uu, UO) {
        return Uu < UO;
      },
      pEzHi: function (Uu, UO) {
        return Uu + UO;
      },
      LWqmf: function (Uu, UO) {
        return Uu < UO;
      },
      tOmwX: function (Uu, UO) {
        return Uu(UO);
      },
      RdikP: function (Uu, UO) {
        return Uu * UO;
      },
      bxydU: function (Uu, UO) {
        return Uu / UO;
      },
      QUHYD: function (Uu, UO, Ui, UP, UR, UT, UY) {
        return Uu(UO, Ui, UP, UR, UT, UY);
      },
      EHvfD: function (Uu, UO) {
        return Uu + UO;
      },
      TuPcO: function (Uu, UO) {
        return Uu ?? UO;
      },
      hyLYT: function (Uu, UO) {
        return Uu < UO;
      },
      YIrwT: function (Uu, UO) {
        return Uu < UO;
      },
      xTXrW: function (Uu, UO) {
        return Uu - UO;
      },
      sUBBg: function (Uu, UO) {
        return Uu + UO;
      },
      DzDwF: function (Uu, UO) {
        return Uu(UO);
      },
      IjOFm: "#ffffff",
      lgctX: "fnt_small",
      cucyp: "center",
      MeEVL: function (Uu, UO) {
        return Uu == UO;
      },
      pSJyk: function (Uu, UO) {
        return Uu === UO;
      },
      oWZkd: function (Uu, UO) {
        return Uu < UO;
      },
      AQVHl: function (Uu, UO) {
        return Uu === UO;
      },
      odiXN: "sZuBT",
      eBPyc: function (Uu, UO) {
        return Uu / UO;
      },
      vgKqC: function (Uu, UO) {
        return Uu * UO;
      },
      hwQwx: function (Uu, UO) {
        return Uu >= UO;
      },
      fuTBA: function (Uu, UO) {
        return Uu(UO);
      },
      jjfzi: function (Uu, UO) {
        return Uu(UO);
      },
      JiWpn: function (Uu, UO) {
        return Uu - UO;
      },
      cwJYd: function (Uu, UO) {
        return Uu < UO;
      },
      gStSM: function (Uu, UO) {
        return Uu(UO);
      },
      NfGQF: function (Uu, UO) {
        return Uu / UO;
      },
      ypLFO: function (Uu, UO) {
        return Uu < UO;
      },
      dOCsw: function (Uu, UO) {
        return Uu * UO;
      },
      oCOyY: function (Uu, UO) {
        return Uu / UO;
      },
      XrvVZ: function (Uu, UO) {
        return Uu - UO;
      },
      CSxEt: function (Uu, UO) {
        return Uu < UO;
      },
      GKtWL: function (Uu, UO) {
        return Uu - UO;
      },
      umOMN: function (Uu, UO, Ui, UP, UR, UT, UY) {
        return Uu(UO, Ui, UP, UR, UT, UY);
      },
      IrsoV: function (Uu, UO) {
        return Uu ?? UO;
      },
      Rxqjo: function (Uu, UO) {
        return Uu < UO;
      },
      ZIlBQ: function (Uu, UO) {
        return Uu !== UO;
      },
      BiLVf: "dJfVE",
      XIhEB: "UgLxy",
      qOeAU: function (Uu, UO) {
        return Uu(UO);
      },
      luUIz: function (Uu, UO) {
        return Uu + UO;
      },
      nZFpf: function (Uu, UO) {
        return Uu * UO;
      },
      BddLw: function (Uu, UO) {
        return Uu - UO;
      },
      HlvOf: function (Uu, UO) {
        return Uu(UO);
      },
      YtmqL: function (Uu, UO) {
        return Uu < UO;
      },
      NliTe: function (Uu, UO) {
        return Uu - UO;
      },
      FPMHe: function (Uu, UO, Ui, UP, UR, UT, UY) {
        return Uu(UO, Ui, UP, UR, UT, UY);
      },
      yqKFR: function (Uu, UO) {
        return Uu + UO;
      },
      YFTqi: function (Uu, UO) {
        return Uu ?? UO;
      },
      MgeDA: function (Uu, UO) {
        return Uu >= UO;
      },
      XdLcB: function (Uu, UO) {
        return Uu !== UO;
      },
      GxTMm: "TxhMn",
      zhBmb: function (Uu, UO) {
        return Uu < UO;
      },
      XgbPe: function (Uu, UO) {
        return Uu < UO;
      },
      VEfZx: function (Uu, UO) {
        return Uu(UO);
      },
      tyhhW: function (Uu, UO) {
        return Uu * UO;
      },
      FaxPR: function (Uu, UO) {
        return Uu(UO);
      },
      hOtdY: function (Uu, UO) {
        return Uu + UO;
      },
      sqynK: "#ffff00",
      XFonc: "fnt_main",
      aDrJg: function (Uu, UO) {
        return Uu - UO;
      },
      iyfMy: function (Uu, UO) {
        return Uu < UO;
      },
      LAtBn: function (Uu, UO) {
        return Uu !== UO;
      },
      Aylpn: "TwnRC",
      FtzdI: "iUEKR",
      dmfUN: function (Uu, UO) {
        return Uu + UO;
      },
      RVlUB: function (Uu, UO) {
        return Uu - UO;
      },
      fvNUh: function (Uu, UO) {
        return Uu < UO;
      },
      XQvNc: function (Uu, UO) {
        return Uu < UO;
      },
      nPfaT: function (Uu, UO) {
        return Uu === UO;
      },
      omMIE: function (Uu, UO) {
        return Uu === UO;
      },
      DdpeW: function (Uu, UO, Ui, UP, UR, UT) {
        return Uu(UO, Ui, UP, UR, UT);
      },
      piPyx: function (Uu, UO) {
        return Uu + UO;
      },
      faPxs: function (Uu, UO) {
        return Uu - UO;
      },
      yMLyd: function (Uu, UO) {
        return Uu * UO;
      },
      vpkXH: function (Uu, UO) {
        return Uu & UO;
      },
      BYQhT: function (Uu, UO, Ui, UP, UR, UT) {
        return Uu(UO, Ui, UP, UR, UT);
      },
      yUwnw: function (Uu, UO) {
        return Uu - UO;
      }
    };
    fill(U, i[1], 0, 0, D, Z);
    U.fillStyle = i[2];
    for (let Uu = 4; Uu < D - 4; Uu++) {
      {
        let UO = (Uu - 64) / 70;
        let Ui = a(104 - 36 * Math.sqrt(Math.max(0, 1 - UO * UO)));
        U.fillRect(Uu, Ui, 1, 1);
      }
    }
    let Ua = b >= 80 ? -a(170 * inCubic((b - 80) / 16)) : 0;
    let UC = b < 8 ? a(30 + 110 * (1 - outCubic(b / 8))) : 30;
    let Uy = 18 + (b >= 8 && b < 11 ? a(-1 * Math.sin((b - 8) / 3 * Math.PI)) : 0);
    let Um = b < 14 ? null : b < 22 ? (b - 14) / 8 : 1;
    card(U, F, UC + Ua, Uy, Ug.IrsoV(Um, null), b < 8 ? 2 : 0);
    if (b >= 24) {
      {
        let UT = b < 30 ? a(50 + 90 * (1 - outCubic((b - 24) / 6))) : 50;
        let UY = b < 30 ? null : b < 38 ? (b - 30) / 8 : 1;
        card(U, u, UT + Ua, 24, Ug.YFTqi(UY, null), b < 30 ? 2 : 0);
      }
    }
    if (b >= 40 && b < 88) {
      {
        let UW = b < 42 ? -2 : b < 45 ? a(-2 + 2 * outCubic((b - 42) / 3)) : 0;
        UX.text(U, 60 + Ua, 6 + UW, "21", "#ffff00", "fnt_main", "center");
      }
    }
    let UJ = b < 30 ? 0 : Math.min(O.length, 1 + Math.floor((b - 30) / 8));
    let Un = 100 + Ua;
    let Uh = 80;
    for (let Uq = 0; Uq < UJ; Uq++) {
      {
        let Up = 30 + Uq * 8;
        let Uo = b - Up;
        let b0 = 0;
        if (Uo < 3) {
          b0 = -a(6 * (1 - Uo / 3));
        } else if (Uo < 5) {
          b0 = Uo === 3 ? 1 : 0;
        }
        let b1 = Uq === UJ - 1;
        r(U, O[Uq], Un, Uh - Uq * 3 + b0, {
          edge: true,
          turned: !!(Uq & 1),
          scale: 1
        });
        if (b1) {
          r(U, O[Uq], Un, Uh - Uq * 3 + b0 - 4, {
            cap: true,
            scale: 1
          });
        }
      }
    }
  }
};
var j = T;
function soulPath(U) {
  let UC = (U - Math.max(0, Math.min(U, 80) - 40) * 0.35) * 1.1320754716981132;
  let Uy = Math.PI * 2 * UC / 120;
  return {
    x: 60 + Math.sin(Uy) * 34 + Math.sin(Uy * 3) * 8,
    y: 76 + Math.sin(Uy * 2) * 4
  };
}
I(soulPath, "soulPath");
var d = {
  loop: 120,
  still: 70,
  hover: ["snd_graze", 0.14, 1],
  draw(U, b, UX) {
    fill(U, "#000000", 0, 0, D, Z);
    U.strokeStyle = "#332033";
    U.lineWidth = 1;
    U.strokeRect(0.5, 0.5, D - 1, Z - 1);
    let Ua = soulPath(b);
    let UC = a(Ua.x);
    let Uy = a(Ua.y);
    let Um = 120;
    let UG = 0;
    for (let Uh = 0; Uh < j.life; Uh++) {
      let UF = b - Uh;
      if ((UF % j.every + j.every) % j.every) {
        continue;
      }
      let Uu = (UF % Um + Um) % Um / j.every * j.step * Math.PI / 180;
      let UO = Uh * j.speed;
      for (let Ui = 0; Ui < j.arms; Ui++) {
        let Ut = Uu + Ui * (Math.PI * 2 / j.arms);
        let Ud = a(j.ex + Math.cos(Ut) * UO);
        let UW = a(j.ey + Math.sin(Ut) * UO);
        if (Ud < -2 || UW < -2 || Ud > D + 1 || UW > Z + 1) {
          continue;
        }
        let Uq = Ud - (UC + 4);
        let Up = UW - (Uy + 4);
        let Uo = Uq * Uq + Up * Up;
        if (Uo < 9) {
          continue;
        }
        let b0 = e[Ui % e.length];
        fill(U, b0, Ud - 1, UW, 3, 1);
        fill(U, b0, Ud, UW - 1, 1, 3);
        fill(U, "#ffffff", Ud, UW, 1, 1);
        if (Uo < 49 && UG < 3) {
          UG++;
          let b1 = a((Ud + UC + 4) / 2);
          let b2 = a((UW + Uy + 4) / 2);
          fill(U, "#ffffff", b1 - 1, b2, 3, 1);
          fill(U, "#ffffff", b1, b2 - 1, 1, 3);
          UX.text(U, b1 + 3, b2 - 9, "+", "#ffffff", "fnt_small");
        }
      }
    }
    U.strokeStyle = "#ffffff";
    U.strokeRect(j.ex - 2.5, j.ey - 2.5, 5, 5);
    fill(U, "#ffffff", j.ex - 1, j.ey - 1, 3, 3);
    UX.heart(U, UC, Uy);
    if (b >= 40 && b < 80) {
      fill(U, "#ffffff", UC + 4, Uy + 4, 1, 1);
    }
  }
};
var W = (() => {
  let UM = mulberry32(6221057);
  let Ua = [];
  for (let UC = 0; UC < 40; UC++) {
    let Uy = UM() * Math.PI * 2;
    Ua.push({
      a0: Uy,
      curl: (UM() - 0.5) * 1.6,
      r0: 92 + UM() * 30,
      rEnd: 12 + UM() * 22,
      s: Math.floor(UM() * 40)
    });
  }
  return Ua;
})();
var q = 112;
function blobAt(U, b) {
  let UC = k01((b - U.s) / (q - U.s));
  let Uy = U.r0 + (U.rEnd - U.r0) * inCubic(UC * 0.55 + UC * UC * 0.45);
  let Um = U.a0 + U.curl * UC;
  return {
    x: 64 + Math.cos(Um) * Uy * 1.25,
    y: 48 + Math.sin(Um) * Uy,
    r: Uy
  };
}
I(blobAt, "blobAt");
const o = {
  cols: 9,
  rows: 11,
  cell: 8,
  x: 20,
  y: 4
};
o.gap = 8;
var U1 = {
  loop: 150,
  still: 118,
  hover: ["snd_sparkle_gem", 0.1, 1],
  draw(U, b, UX) {
    fill(U, "#0d0d18", 0, 0, D, Z);
    let UM = Math.floor(b * 32 / 150) % 16;
    U.fillStyle = "#1a1a2a";
    for (let Uh = UM - 16; Uh < Z; Uh += 16) {
      U.fillRect(0, Uh, D, 1);
    }
    for (let UF = 8; UF < D; UF += 16) {
      U.fillRect(UF, 0, 1, Z);
    }
    let Uy = b >= q ? outCubic((b - q) / 8) * 60 + 4 : -1;
    let Um = 0;
    for (let Uu of W) {
      let UO = blobAt(Uu, Math.min(b, q));
      if (!(Uy >= 0) || !(Uy >= UO.r)) {
        {
          if (b < Uu.s) {
            continue;
          }
          fill(U, "#3a2a4a", UO.x - 2, UO.y - 2, 4, 4);
          fill(U, "#806080", UO.x - 1, UO.y - 2, 2, 1);
          continue;
        }
      }
      Um++;
      let Ui = q + Math.max(0, (UO.r - 4) / 60) * 8;
      let UP = b - Ui;
      if (UP < 3) {
        {
          let UY = 2 + UP * 2;
          for (let [Uj, Ut] of [[UY, 0], [-UY, 0], [0, UY], [0, -UY]]) {
            fill(U, "#c0a0e0", UO.x + Uj, UO.y + Ut, 1, 1);
          }
        }
      }
      let UR = b < 124 ? 0 : inCubic((b - 124) / 22);
      if (UR < 1) {
        fill(U, "#00ffff", UO.x + (64 - UO.x) * UR - 1, UO.y + (48 - UO.y) * UR - 1, 2, 2);
      }
    }
    if (Uy >= 0 && b < q + 8) {
      U.strokeStyle = "#ffff00";
      U.lineWidth = 1;
      U.beginPath();
      U.arc(64, 48, Uy, 0, Math.PI * 2);
      U.stroke();
    }
    UX.heart(U, 60, 44);
    let UJ = b < 124 ? 0 : k01((b - 124) / 22);
    fill(U, "#003040", 0, 0, D, 2);
    if (b < 146) {
      fill(U, "#00ffff", 0, 0, a(D * UJ), 2);
    } else if (b < 149) {
      fill(U, UX.calm ? "#ffff00" : "#ffffff", 0, 0, D, 2);
    }
    let Un = 59 - Math.floor(b / 30);
    UX.text(U, D - 3, 4, "9:" + String(Un).padStart(2, "0"), "#808080", "fnt_small", "right");
  }
};
var U2 = o;
var U3 = [1, 3, 8, 5, 7, 2, 6, 4];
var U4 = [[6, [[7, 0], [8, 0], [8, 1], [8, 2]]], [7, [[7, 1], [7, 2], [7, 3], [8, 3]]], [2, [[7, 4], [7, 5], [8, 4], [8, 5]]], [4, [[7, 6], [7, 7], [8, 6], [8, 7]]], [1, [[7, 8], [8, 8], [9, 8], [10, 8]]]];
var U5 = (() => {
  let Ua = [];
  let UC = 4;
  for (let [Uy, Um] of U4) {
    let UG = Math.min(...Um.map(UJ => UJ[0])) + 3;
    Ua.push({
      col: Uy,
      cells: Um,
      spawn: UC,
      land: UC + UG * 2
    });
    UC += UG * 2 + 4;
  }
  return Ua;
})();
var U6 = U5[U5.length - 1].land + 2;
var U7 = 150;
function drawCellAt(U, b, UX, Ug, UM, Ua = UM) {
  let Um = bevelCell(E[b] || "#808080", UM);
  if (Ua >= UM) {
    U.drawImage(Um, a(UX), a(Ug));
  } else if (Ua > 0) {
    U.drawImage(Um, 0, 0, UM, Ua, a(UX), a(Ug + (UM - Ua) / 2), UM, Ua);
  }
}
I(drawCellAt, "drawCellAt");
const U9 = {
  lanes: 4,
  lw: 16,
  x: 32,
  recY: 78,
  speed: 2,
  chart: [[0, 0], [15, 2], [30, 1], [45, 3], [60, 0, 20], [75, 2], [90, 3], [105, 1]]
};
const UU = {
  w: 18,
  gap: 2,
  x: 15,
  y1: 26,
  y2: 50
};
const Ub = {
  hit: ["#16301a", "#7ad17a"],
  near: ["#33300a", "#ffff00"],
  miss: ["#000000", "#404040"]
};
var Us = {
  loop: 180,
  still: 96,
  hover: ["snd_bump", 0.14, 1],
  draw(U, b, UX) {
    fill(U, "#000000", 0, 0, D, Z);
    let {
      cols: UC,
      rows: Uy,
      cell: Um,
      x: UG,
      y: UJ
    } = U2;
    U.strokeStyle = "#404040";
    U.lineWidth = 1;
    U.strokeRect(UG - 0.5, UJ - 0.5, UC * Um + 1, Uy * Um + 1);
    let Un = b >= U6 + 5;
    let Uh = b >= U7 ? Math.min(2, Math.floor((b - U7) / 5)) : 0;
    let UF = b >= U6 && !Un;
    let Uu = UF ? b < U6 + 2 ? Um : a(Um * (1 - (b - U6 - 2) / 3)) : Um;
    let UO = UF && b < U6 + 2;
    let Ui = (UT, UY) => {
      for (let UW = 0; UW < UC; UW++) {
        if (UW !== U2.gap) {
          drawCellAt(U, U3[UW % U3.length], UG + UW * Um, UJ + UT * Um + UY, Um);
        }
      }
    };
    if (Un) {
      if (Uh > 0) {
        for (let Up = 0; Up < Uh; Up++) {
          Ui(10 - (Uh - 1 - Up), 0);
        }
      }
    } else {
      for (let Uo of [9, 10]) {
        if (UO) {
          fill(U, UX.calm ? "rgba(255,255,0,0.5)" : "#ffffff", UG, UJ + Uo * Um, UC * Um, Um);
          continue;
        }
        if (UF) {
          for (let b6 = 0; b6 < UC; b6++) {
            if (b6 !== U2.gap) {
              drawCellAt(U, U3[b6 % U3.length], UG + b6 * Um, UJ + Uo * Um, Um, Uu);
            }
          }
        } else {
          Ui(Uo, 0);
        }
      }
    }
    for (let b7 of U5) {
      if (b < b7.spawn || Un) {
        continue;
      }
      let b8 = b >= b7.land ? 0 : Math.ceil((b7.land - b) / 2);
      let b9 = b >= b7.land && b < b7.land + 1 ? 1 : 0;
      for (let [bU, bb] of b7.cells) {
        let bs = bU - b8;
        if (!(bs < 0)) {
          if (UO && bU >= 7) {
            fill(U, UX.calm ? "rgba(255,255,0,0.5)" : "#ffffff", UG + bb * Um, UJ + bs * Um, Um, Um);
            continue;
          }
          drawCellAt(U, b7.col, UG + bb * Um, UJ + bs * Um + b9, Um, UF ? Uu : Um);
        }
      }
    }
    fill(U, "#000000", 98, 4, 28, 60);
    U.strokeStyle = "#404040";
    U.strokeRect(97.5, 3.5, 29, 61);
    UX.text(U, 112, 6, "NEXT", "#808080", "fnt_small", "center");
    let UR = 0;
    for (let bV = 0; bV < U5.length && UR < 3; bV++) {
      let bA = U5[bV];
      if (bA.spawn <= b) {
        continue;
      }
      let bS = Math.min(...bA.cells.map(be => be[0]));
      let bf = Math.min(...bA.cells.map(be => be[1]));
      for (let [be, bv] of bA.cells) {
        drawCellAt(U, bA.col, 104 + (bv - bf) * 4, 18 + UR * 16 + (be - bS) * 4, 4);
      }
      UR++;
    }
    if (b >= U6 && b < U6 + 30) {
      UX.text(U, UG + UC * Um / 2, 30, "TETRIS", "#ffff00", "fnt_small", "center");
    }
  }
};
var UL = U9;
var UV = (() => {
  try {
    return v(4, "DELTARUNE");
  } catch {
    return [0, 1, 2, 3].map(() => ({
      base: "#ffffff",
      dark: "#404040"
    }));
  }
})();
var UA = {
  loop: 120,
  still: 62,
  hover: ["snd_select", 0.1, 1.5],
  draw(U, b, UX) {
    fill(U, "#000000", 0, 0, D, Z);
    let {
      lw: Ua,
      x: UC,
      recY: Uy
    } = UL;
    U.fillStyle = "#1a1a1a";
    for (let Uh = 0; Uh <= 4; Uh++) {
      U.fillRect(UC + Uh * Ua, 0, 1, Z);
    }
    let UG = 0;
    let UJ = -99;
    for (let [UF] of UL.chart) {
      if (UF <= b) {
        UG++;
        UJ = UF;
      }
    }
    for (let Uu = 0; Uu < 4; Uu++) {
      let Ui = UV[Uu].base;
      let UP = -1;
      for (let [UT, UY, Uj] of UL.chart) {
        if (UY === Uu) {
          let Ut = UT + (Uj ? Uj / UL.speed : 0);
          let Ud = ((b - Ut) % 120 + 120) % 120;
          let UW = ((b - UT) % 120 + 120) % 120;
          if (Uj && UW < Uj / UL.speed) {
            UP = 3;
          } else if (Ud < 4 && (UP < 0 || Ud < UP)) {
            UP = Ud;
          }
        }
      }
      let UR = UC + Uu * Ua + 1;
      if (UP >= 0 && UP < 2) {
        fill(U, UX.calm ? "#ffff00" : "#ffffff", UR, Uy, 14, 6);
      } else if (UP >= 2 && UP < 4) {
        fill(U, Ui, UR, Uy, 14, 6);
      } else {
        U.strokeStyle = Ui;
        U.lineWidth = 1;
        U.strokeRect(UR + 0.5, Uy + 0.5, 13, 5);
      }
      if (UP >= 0 && UP < 1) {
        fill(U, "#ffffff", UR + 4, Uy - 8, 5, 1);
        fill(U, "#ffffff", UR + 6, Uy - 10, 1, 5);
      }
    }
    for (let [Uq, Up, Uo] of UL.chart) {
      let b0 = UV[Up].base;
      let b1 = UC + Up * Ua + 1;
      let b2 = ((Uq - b) % 120 + 120) % 120;
      let b3 = Uo || 0;
      let b4 = ((b - Uq) % 120 + 120) % 120;
      if (b3 && b4 < b3 / UL.speed) {
        let b6 = b3 - b4 * UL.speed;
        fill(U, UV[Up].dark, b1 + 2, Uy - b6, 10, b6);
        continue;
      }
      if (b2 > 44) {
        continue;
      }
      let b5 = Uy - b2 * UL.speed;
      if (b3) {
        fill(U, UV[Up].dark, b1 + 2, b5 - b3, 10, b3);
      }
      fill(U, b0, b1, b5, 14, 4);
      fill(U, "#ffffff", b1, b5, 14, 1);
    }
    if (UG > 0) {
      let b9 = b - UJ < 2 ? -1 : 0;
      UX.text(U, 64, 6 + b9, String(UG), "#ffffff", "fnt_small", "center");
    }
  }
};
var US = UU;
var Uf = Ub;
var Ue = [["S", "miss"], ["P", "near"], ["A", "miss"], ["R", "hit"], ["E", "near"]];
var Uv = [["F", "hit"], ["I", "hit"], ["G", "hit"], ["H", "hit"], ["T", "hit"]];
function dTile(U, b, UX, Ug, UM, Ua, UC, Uy) {
  let UG = Math.max(0, a(US.w * Math.abs(Math.cos(Math.PI * UC))));
  let UJ = UC >= 0.5 ? Ua : null;
  Ug += Uy;
  if ((UC <= 0 || UG >= US.w) && !UJ) {
    U.strokeStyle = "#404040";
    U.lineWidth = 1;
    U.strokeRect(UX + 0.5, Ug + 0.5, US.w - 1, US.w - 1);
    return;
  }
  if (UG < 1) {
    return;
  }
  let Uu = Ug + a((US.w - UG) / 2);
  if (!UJ) {
    U.strokeStyle = "#404040";
    U.lineWidth = 1;
    U.strokeRect(UX + 0.5, Uu + 0.5, US.w - 1, Math.max(1, UG - 1));
    return;
  }
  let [UO, Ui] = Uf[UJ];
  fill(U, UO, UX, Uu, US.w, UG);
  U.strokeStyle = Ui;
  U.lineWidth = 1;
  U.strokeRect(UX + 0.5, Uu + 0.5, US.w - 1, Math.max(1, UG - 1));
  if (UG >= US.w - 2) {
    b.text(U, UX + US.w / 2, Ug + 3, UM, UJ === "miss" ? "#808080" : Ui, "fnt_main", "center");
  }
}
I(dTile, "dTile");
const UH = {
  w: 64,
  h: 48
};
var UQ = {
  loop: 150,
  still: 120,
  hover: ["snd_menumove", 0.16, 1.3],
  draw(U, b, UX) {
    fill(U, "#000000", 0, 0, D, Z);
    let Uy = b >= 130 ? 1 : 0;
    let Um = (UJ, Un, Uh, UF) => UJ.forEach(([Uu, UO], Ui) => {
      {
        let Uq = US.x + Ui * (US.w + US.gap);
        let Up = k01((b - Uh - Ui * 4) / 6);
        if (Uy > 0) {
          Up = Math.min(Up, 1 - k01((b - 130 - Ui * 3) / 6));
        }
        let Uo = 0;
        if (UF && b >= 92 && b < 116) {
          {
            let b0 = b - 92 - Ui * 4;
            if (b0 >= 0 && b0 < 4) {
              Uo = b0 < 2 ? -1 : 0;
            }
          }
        }
        dTile(U, UX, Uq, Un, Uu, UO, Up, Uo);
      }
    });
    Um(Ue, US.y1, 6, false);
    Um(Uv, US.y2, 60, true);
    let UG = b < 30 ? 0 : b < 84 ? 1 : 2;
    if (UG && b < 130) {
      UX.text(U, D - 4, 80, UG + "/6", "#808080", "fnt_small", "right");
    }
  }
};
var Uc = UH;
var Uk = null;
var Uz = null;
var Ur = null;
var UI = new Uint8Array(Uc.w * Uc.h);
function appleIn(U, b) {
  if (U < -0.97 || U > 0.97 || b < -1.05 || b > 0.88) {
    return false;
  }
  let UM = (Um, UG, UJ) => (U - Um) * (U - Um) + (b - UG) * (b - UG) < UJ * UJ;
  let Ua = (UM(-0.34, -0.08, 0.62) || UM(0.34, -0.08, 0.62) || UM(0, 0.22, 0.66)) && !UM(0, -0.8, 0.22) && (!(b > 0.83) || !(U > -0.1) || !(U < 0.1));
  if (!Ua && b > -1.04 && b < -0.56) {
    let Um = 0.02 + (-0.56 - b) * 0.3;
    Ua = U > Um - 0.07 && U < Um + 0.07;
  }
  if (!Ua) {
    let Uh = U - 0.33;
    let UF = b + 0.86;
    let Uu = Uh * 0.9 + UF * 0.44;
    let UO = -Uh * 0.44 + UF * 0.9;
    Ua = Uu * Uu / 0.07 + UO * UO / 0.013 < 1;
  }
  return Ua;
}
I(appleIn, "appleIn");
function baFrame(U, b, UX = UI, Ug = 1) {
  let UC = Math.PI * 2 * U / 180;
  let Uy = 15;
  let Um = Math.sin(UC) * 0.1;
  let UG = Math.cos(Um);
  let UJ = Math.sin(Um);
  let Un = 32 + Math.sin(UC) * 2;
  let Uh = 38;
  let UF = U >= 120 ? Math.cos(Math.PI * 2 * (U - 120) / 60) : 1;
  let Uu = Math.abs(UF) < 0.08 ? 0.08 : UF;
  let UO = U >= 90;
  let Ui = b && U >= 90 && U < 96 ? (U - 90) / 6 * Uc.w : -1;
  let UP = 0;
  for (let UY = 0; UY < Uc.h; UY += Ug) {
    let Uj = U < 60 ? -4 + U / 60 * 72 + Math.round(Math.sin(UY * 0.9 + U * 0.7) * 2 + Math.sin(UY * 2.3 - U * 1.3) * 1.5) : 999;
    let Ut = UY + 0.5 - Uh;
    for (let Ud = 0; Ud < Uc.w; Ud += Ug) {
      let UW = false;
      if (Ud < Uj) {
        let Up = Ud + 0.5 - Un;
        UW = appleIn((Up * UG + Ut * UJ) / (Uy * Uu), (-Up * UJ + Ut * UG) / Uy + 0.88);
      }
      let Uq = (Ui >= 0 ? Ud < Ui : UO) ? !UW : UW;
      UX[UY * Uc.w + Ud] = Uq ? 1 : 0;
      if (Uq) {
        UP++;
      }
    }
  }
  return UP;
}
I(baFrame, "baFrame");
function baSoulTable(U) {
  let Ug = [];
  let UM = new Uint8Array(Uc.w * Uc.h);
  for (let Uy = 0; Uy < 180; Uy++) {
    let Um = baFrame(Uy, U, UM, 2) > Uc.w * Uc.h / 8;
    let UG = 32 + Math.sin(Math.PI * 2 * Uy / 180) * 24;
    let UJ = 40;
    let Un = null;
    let Uh = 1000000000;
    for (let UF = 8; UF < Uc.h - 4; UF += 4) {
      for (let Uu = 4; Uu < Uc.w - 4; Uu += 4) {
        if (UM[UF * Uc.w + Uu] === 1 !== Um) {
          continue;
        }
        let Ui = (Uu - UG) * (Uu - UG) + (UF - UJ) * (UF - UJ);
        if (Ui < Uh) {
          Uh = Ui;
          Un = [Uu, UF];
        }
      }
    }
    Ug.push(Un || [Math.round(UG), UJ]);
  }
  return Ug;
}
I(baSoulTable, "baSoulTable");
var Ux = {
  loop: 180,
  still: 104,
  draw(U, b, UX) {
    if (!Uk) {
      Uk = mkCanvas(Uc.w, Uc.h);
      Uz = Uk.getContext("2d").createImageData(Uc.w, Uc.h);
    }
    let Ua = !!UX.calm;
    if (!Ur || Ur.calm !== Ua) {
      Ur = {
        calm: Ua,
        pos: baSoulTable(Ua)
      };
    }
    let Uy = b - (b & 1);
    let Um = Uy + (Ua ? "c" : "");
    if (Uk._key !== Um) {
      {
        Uk._key = Um;
        baFrame(Uy, Ua);
        let Uq = Uz.data;
        for (let Up = 0, Uo = 0; Up < UI.length; Up++, Uo += 4) {
          let b0 = UI[Up] ? 0 : 255;
          Uq[Uo] = Uq[Uo + 1] = Uq[Uo + 2] = b0;
          Uq[Uo + 3] = 255;
        }
        Uk.getContext("2d").putImageData(Uz, 0, 0);
      }
    }
    U.imageSmoothingEnabled = false;
    U.drawImage(Uk, 0, 0, D, Z);
    let UG = Ur.pos;
    let UJ = UG[b];
    let Un = 1;
    for (let b1 = 1; b1 <= 3; b1++) {
      {
        let b2 = UG[(b - b1 + 180) % 180];
        let b3 = UG[(b - b1 + 1 + 180) % 180];
        if (b2[0] !== b3[0] || b2[1] !== b3[1]) {
          {
            UJ = b2;
            Un = outBack(b1 / 3, 1.2);
            break;
          }
        }
      }
    }
    let UF = UG[b];
    let Uu = UJ[0] + (UF[0] - UJ[0]) * Un;
    let UO = UJ[1] + (UF[1] - UJ[1]) * Un;
    UX.heart(U, a(Uu * 2) - 4, a(UO * 2) - 4);
  }
};
var UB = {
  blackjack: Y,
  spellcard: d,
  survivors: U1,
  tetris: Us,
  mania: UA,
  darkdle: UQ,
  badapple: Ux
};
export { D as a, Z as b, X as c, mulberry32 as d, bevelCell as e, appleIn as f, UB as g };
