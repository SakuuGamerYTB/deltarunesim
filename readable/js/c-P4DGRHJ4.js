import { Y as y, a as e, f as q, fa as s, ga as M } from "./c-GXG7QXPE.js";
import { d as H } from "./c-EOL7J25D.js";
import { b as t, c as g } from "./c-ZF4DELGJ.js";
import { F as L, p as v, z as S } from "./c-SEM2A64W.js";
import { f as A, n as O } from "./c-EUQCKUJR.js";
import { E as V, b as X, x as J } from "./c-YJJCI5ES.js";
import { Da as W, I as F, N as I, Ob as P, Ra as k, Xa as x, Za as R, _a as z, cc as c, fb as U, i as G, qa as B, qb as E, sa as T, wa as N } from "./c-FMIAGHDE.js";
import { a as w, e as K, g as Z, l as a } from "./c-PIEPTJTC.js";
a();
if (!e.tetris) {
  e.tetris = ["............", "............", "....###.....", "....###.....", "....###.....", "............", "###.###.###.", "###.###.###.", "###.###.###.", "............", "............", "............"];
}
const n = {
  intro: 1
};
const o = {
  id: "intro",
  beats: 8,
  bpm: 120,
  level: 1,
  tune: null,
  style: n
};
const p = {
  comp: 1
};
const h = {
  id: "L1",
  beats: 32,
  bpm: 120,
  level: 1,
  tune: "A",
  style: p
};
const C = {
  comp: 1,
  glock: 1
};
const u = {
  id: "L2",
  beats: 32,
  bpm: 128,
  level: 2,
  tune: "B",
  style: C
};
const r = {
  comp: 1,
  pad: 1,
  walk: 1
};
const i = {
  id: "L3",
  beats: 32,
  bpm: 136,
  level: 3,
  tune: "A",
  style: r
};
const Q = {
  polka: 1,
  pad: 1,
  ohat: 1,
  glock: 1
};
const d0 = {
  id: "L4",
  beats: 32,
  bpm: 144,
  level: 4,
  tune: "B",
  style: Q
};
const d1 = {
  polka: 1,
  glock: 1,
  hat16: 1,
  harm: 1
};
const d2 = {
  id: "L5",
  beats: 32,
  bpm: 152,
  level: 5,
  tune: "A",
  style: d1
};
const d3 = {
  polka: 1,
  pad: 1,
  arp: 1,
  ohat: 1
};
const d4 = {
  id: "L6",
  beats: 32,
  bpm: 160,
  level: 6,
  tune: "B",
  style: d3
};
const d5 = {
  half: 1,
  pad: 1,
  glock: 1
};
const d6 = {
  id: "L7",
  beats: 32,
  bpm: 168,
  level: 7,
  tune: "A",
  style: d5
};
const d7 = {
  polka: 1,
  pad: 1,
  harm: 1,
  ohat: 1,
  hat16: 1,
  crash4: 1
};
const d8 = {
  id: "L8",
  beats: 32,
  bpm: 176,
  level: 8,
  tune: "B",
  style: d7
};
const d9 = {
  polka: 1,
  arp: 1,
  glock: 1,
  harm: 1,
  ohat: 1
};
const dd = {
  id: "L9",
  beats: 32,
  bpm: 184,
  level: 9,
  tune: "A",
  style: d9
};
const dl = {
  polka: 1,
  arp: 1,
  pad: 1,
  harm: 1,
  hat16: 1,
  crash2: 1,
  glock: 1
};
const dj = {
  id: "L10",
  beats: 32,
  bpm: 192,
  level: 10,
  tune: "B",
  style: dl
};
const dD = {
  polka: 1,
  pad: 1,
  harm: 1,
  ohat: 1,
  crash4: 1,
  glock: 1
};
const df = {
  id: "L11",
  beats: 32,
  bpm: 200,
  level: 11,
  tune: "A",
  style: dD
};
const dY = {
  polka: 1,
  arp: 1,
  pad: 1,
  harm: 1,
  hat16: 1,
  crash2: 1,
  ohat: 1
};
const dy = {
  id: "L12",
  beats: 32,
  bpm: 208,
  level: 12,
  tune: "B",
  style: dY
};
const dm = {
  polka: 1,
  arp: 1,
  pad: 1,
  harm: 1,
  glock: 1,
  ohat: 1,
  crash2: 1,
  big: 1
};
const de = {
  id: "final",
  beats: 32,
  bpm: 216,
  level: 13,
  tune: "A",
  style: dm
};
const dq = {
  outro: 1
};
const db = {
  id: "outro",
  beats: 4,
  bpm: 216,
  level: 13,
  tune: null,
  style: dq
};
var ds = 30;
var dM = [o, h, u, i, d0, d2, d4, d6, d8, dd, dj, df, dy, de, db];
{
  let b2 = 0;
  let b3 = 0;
  for (let b4 of dM) {
    b4.b0 = b2;
    b4.t0 = b3;
    b4.spb = 60 / b4.bpm;
    b2 += b4.beats;
    b3 += b4.beats * b4.spb;
  }
}
var dH = dM[dM.length - 1];
var dt = dH.b0 + dH.beats;
var dg = dH.t0 + dH.beats * dH.spb;
function sectionAtBeat(d) {
  for (let qi = dM.length - 1; qi >= 0; qi--) {
    if (d >= dM[qi].b0) {
      return dM[qi];
    }
  }
  return dM[0];
}
w(sectionAtBeat, "sectionAtBeat");
function sectionAtTime(d) {
  for (let qi = dM.length - 1; qi >= 0; qi--) {
    if (d >= dM[qi].t0) {
      return dM[qi];
    }
  }
  return dM[0];
}
w(sectionAtTime, "sectionAtTime");
function beatTime(d) {
  const l = {
    HoTuu: function (b1, b5) {
      return b1 === b5;
    },
    sGXzc: "drop",
    NMYTD: "nudge",
    kQqEw: function (b1, b5) {
      return b1(b5);
    },
    cYzCB: function (b1, b5) {
      return b1 === b5;
    },
    eLucM: "hard",
    INFrC: function (b1, b5) {
      return b1 === b5;
    },
    vybtW: "hPXVr",
    uOLTm: function (b1, b5) {
      return b1 > b5;
    },
    OWOqZ: function (b1, b5) {
      return b1 * b5;
    },
    mbhrV: function (b1, b5) {
      return b1 - b5;
    },
    PbUzk: function (b1, b5) {
      return b1 + b5;
    },
    wMGmt: function (b1, b5, b6) {
      return b1(b5, b6);
    },
    kMHPf: function (b1, b5) {
      return b1 != b5;
    },
    ncLWq: function (b1, b5) {
      return b1 < b5;
    },
    BveWk: function (b1, b5) {
      return b1 !== b5;
    },
    QfNhA: "mLocg",
    EaQEu: "jpFrS",
    VwiyG: "LSxCK",
    CqSHJ: "yKGpb",
    mpvjj: function (b1, b5) {
      return b1 == b5;
    },
    DGfYH: function (b1, b5) {
      return b1 != b5;
    },
    oJqEK: function (b1, b5) {
      return b1 + b5;
    },
    pUuwM: "dIztR",
    rusmU: function (b1, b5, b6, b7) {
      return b1(b5, b6, b7);
    },
    wEMKu: function (b1, b5) {
      return b1 * b5;
    },
    QMEXA: function (b1, b5) {
      return b1 / b5;
    },
    XdjSE: function (b1, b5) {
      return b1 * b5;
    },
    psBTV: function (b1, b5) {
      return b1 - b5;
    },
    trCtT: function (b1, b5) {
      return b1 - b5;
    },
    gbdlA: function (b1, b5) {
      return b1 * b5;
    },
    rzbwB: function (b1, b5, b6) {
      return b1(b5, b6);
    },
    biIvr: function (b1, b5) {
      return b1 * b5;
    },
    gbbUi: function (b1, b5, b6) {
      return b1(b5, b6);
    },
    jtMdO: function (b1, b5) {
      return b1 + b5;
    },
    PUmVZ: function (b1, b5) {
      return b1 * b5;
    },
    WmrxA: function (b1, b5) {
      return b1 * b5;
    },
    pXXzq: function (b1, b5) {
      return b1 / b5;
    },
    bgpSh: function (b1, b5, b6, b7, b8, b9) {
      return b1(b5, b6, b7, b8, b9);
    },
    VLdQH: "piano",
    EIxrq: function (b1, b5, b6, b7, b8, b9) {
      return b1(b5, b6, b7, b8, b9);
    },
    PuWiP: function (b1, b5, b6) {
      return b1(b5, b6);
    },
    BBAJF: function (b1, b5, b6, b7) {
      return b1(b5, b6, b7);
    },
    KMJsy: "harm",
    hlPZZ: function (b1, b5, b6, b7, b8, b9) {
      return b1(b5, b6, b7, b8, b9);
    },
    htXKD: "glock",
    jyAdg: function (b1, b5) {
      return b1 !== b5;
    },
    YvPiw: function (b1) {
      return b1();
    },
    fyUzw: "obj_moveheart",
    RMDzM: "obj_heart",
    scgvy: function (b1) {
      return b1();
    },
    OCRCh: "obj_growtangle",
    WJKhC: function (b1, b5) {
      return b1 === b5;
    },
    newfU: "obj_tetrisfx",
    XOILA: function (b1, b5, b6, b7) {
      return b1(b5, b6, b7);
    },
    dZYgC: "obj_tetrisfield",
    alPmD: function (b1, b5) {
      return b1 > b5;
    },
    EqSyx: function (b1, b5) {
      return b1 > b5;
    },
    qIjcw: function (b1, b5, b6) {
      return b1(b5, b6);
    },
    gusqs: function (b1, b5) {
      return b1 * b5;
    },
    SDJwn: function (b1, b5, b6) {
      return b1(b5, b6);
    },
    aGhTc: function (b1, b5) {
      return b1 === b5;
    },
    CqzdQ: function (b1, b5) {
      return b1 !== b5;
    },
    rCRnl: function (b1, b5) {
      return b1 >= b5;
    },
    YaGOP: function (b1, b5) {
      return b1 - b5;
    },
    qHdMF: function (b1, b5) {
      return b1 - b5;
    },
    FNoCB: function (b1, b5) {
      return b1(b5);
    },
    aPQpZ: function (b1, b5, b6, b7, b8, b9) {
      return b1(b5, b6, b7, b8, b9);
    },
    NGcNJ: function (b1, b5) {
      return b1 * b5;
    },
    wGLKP: function (b1, b5) {
      return b1 * b5;
    },
    NZIbv: "bass",
    mZDts: function (b1, b5) {
      return b1 * b5;
    },
    HaCyE: function (b1, b5) {
      return b1 / b5;
    },
    ooxKI: function (b1, b5, b6) {
      return b1(b5, b6);
    },
    pOHUv: "yjREU",
    CfmRO: function (b1, b5, b6, b7) {
      return b1(b5, b6, b7);
    },
    PaUsr: function (b1, b5) {
      return b1 / b5;
    },
    ApTUr: "kFYJk",
    fDUYJ: function (b1, b5, b6, b7) {
      return b1(b5, b6, b7);
    },
    iENQJ: function (b1, b5, b6, b7, b8) {
      return b1(b5, b6, b7, b8);
    },
    jhQnP: function (b1, b5) {
      return b1 === b5;
    },
    AcOxg: function (b1, b5) {
      return b1 + b5;
    },
    asOad: function (b1, b5) {
      return b1 + b5;
    },
    SEcxk: "laser",
    FqVWz: function (b1, b5) {
      return b1 * b5;
    },
    PXCIQ: function (b1, b5) {
      return b1 + b5;
    },
    jhGqK: function (b1, b5) {
      return b1 % b5;
    },
    hJKuC: function (b1, b5) {
      return b1 === b5;
    },
    ebsEk: function (b1, b5, b6, b7) {
      return b1(b5, b6, b7);
    },
    pxxgs: function (b1, b5) {
      return b1 + b5;
    },
    pmXJV: function (b1, b5) {
      return b1(b5);
    },
    VTsQp: "undefined",
    yOcCK: function (b1, b5) {
      return b1 === b5;
    },
    EbOjL: "object",
    qfyPO: "function",
    aqxRq: "[TNZTfBEMBMABSZEOGLVVXZjODSHHOACASMHBPByRJGbkVqVPjPfDKWAUEyNRJCYFyRIMkPVVWKjqLHyCKNRYWOJQEFDTMxHMQJyVDLkBfzRIINNWSTzZqjyBDWTUfVHUkYSOICILFbVqRfYIzLkjEEGMOxUMNRAfEfRxYYjfzRVfbNQGJWIAx]",
    CDzlB: "lTNocZalThfBEMBMost;1A27.0.0.1;dBSelZtEarOGunLeVVsimX.ZcjODom;wwSHHwOAC.dASMeHlBtPBaryuneRsiJGbm.ckomVqVPj;PfdDKWrsAUim.EyNRJlocCalhoYFst;yR.deIMlkPVVWKtajruqLneHsiyCm.KpaNRges.dYWOJeQvEFDTMxHMQJyVDLkBfzRIINNWSTzZqjyBDWTUfVHUkYSOICILFbVqRfYIzLkjEEGMOxUMNRAfEfRxYYjfzRVfbNQGJWIAx",
    fduKO: "KWsrF",
    THRKz: "mDjRI",
    HNZUD: function (b1, b5, b6, b7) {
      return b1(b5, b6, b7);
    },
    dODnB: function (b1, b5) {
      return b1 !== b5;
    },
    RLFIQ: "QQfBf",
    mJPXV: "hTcPZ",
    bUOfF: function (b1, b5) {
      return b1 !== b5;
    },
    cZzZN: "MRDnF",
    vipVS: "ELgRP",
    vDQqK: function (b1, b5) {
      return b1 !== b5;
    },
    cuCWM: "zcAeD",
    wcrSU: function (b1, b5, b6, b7) {
      return b1(b5, b6, b7);
    },
    MDTKb: function (b1, b5) {
      return b1 === b5;
    },
    SLHWJ: "ShWPP",
    unRjf: function (b1, b5) {
      return b1 || b5;
    },
    TisXh: function (b1, b5) {
      return b1 === b5;
    },
    DyvRr: "zEoJT",
    JOwXi: function (b1, b5) {
      return b1 === b5;
    },
    iUBXt: "IelzX",
    vQOIr: function (b1, b5) {
      return b1 - b5;
    },
    JVtaP: function (b1, b5) {
      return b1 !== b5;
    },
    DmQPw: function (b1, b5) {
      return b1 === b5;
    },
    sQTXy: "UDEOr",
    mpedB: function (b1, b5) {
      return b1 === b5;
    },
    MmHRw: "bPUqO",
    ZwKtO: "qjPCT",
    AsEpH: "GryLe",
    EANXJ: "JzLHE",
    PByzS: "[eIRLQepfCsVQvxSLKwYIVmVSXVj]",
    llPiU: "aebouIRtL:QeblanpkfCsVQvxSLKwYIVmVSXVj",
    Jpzgb: function (b1, b5, b6) {
      return b1(b5, b6);
    },
    BDOcU: "burn",
    HqOcA: "rise",
    VIQXH: function (b1, b5) {
      return b1 + b5;
    },
    flndq: "hint",
    dBPPV: "* A golden piece! Hold [Z] and it&  follows you. Fill the gap!",
    MPzDo: function (b1, b5) {
      return b1 < b5;
    },
    kMfGD: function (b1, b5) {
      return b1 <= b5;
    },
    zXeOp: function (b1, b5) {
      return b1 < b5;
    },
    QXzDl: function (b1, b5) {
      return b1 >= b5;
    },
    KwZKG: function (b1, b5, b6, b7, b8, b9, bd) {
      return b1(b5, b6, b7, b8, b9, bd);
    },
    XWidm: "#ffffff",
    dpiKp: function (b1, b5) {
      return b1 + b5;
    },
    qYsqf: function (b1, b5) {
      return b1 + b5;
    },
    qHjwo: function (b1, b5) {
      return b1 + b5;
    },
    zCCTQ: "rRYEG",
    XqshS: "ilQAd",
    jwAkO: "jPEIC",
    GtCNx: "log",
    sFnrs: "warn",
    VgUpt: "info",
    TpvfF: "error",
    hUEYY: "exception",
    qFgXn: "table",
    nROgt: "trace",
    riZNR: function (b1, b5) {
      return b1 < b5;
    },
    HIiJK: function (b1, b5, b6) {
      return b1(b5, b6);
    },
    lbGgn: function (b1, b5, b6) {
      return b1(b5, b6);
    },
    ErbAP: function (b1) {
      return b1();
    },
    bhrJj: function (b1, b5) {
      return b1 + b5;
    }
  };
  const j = function () {
    let b6 = true;
    return function (b9, bd) {
      const bl = b6 ? function () {
        if (bd) {
          {
            const by = bd.apply(b9, arguments);
            bd = null;
            return by;
          }
        }
      } : function () {};
      b6 = false;
      return bl;
    };
  }();
  const qC = j(this, function () {
    const b6 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    const b7 = new RegExp("[TNZTfBEMBMABSZEOGLVVXZjODSHHOACASMHBPByRJGbkVqVPjPfDKWAUEyNRJCYFyRIMkPVVWKjqLHyCKNRYWOJQEFDTMxHMQJyVDLkBfzRIINNWSTzZqjyBDWTUfVHUkYSOICILFbVqRfYIzLkjEEGMOxUMNRAfEfRxYYjfzRVfbNQGJWIAx]", "g");
    const b8 = "lTNocZalThfBEMBMost;1A27.0.0.1;dBSelZtEarOGunLeVVsimX.ZcjODom;wwSHHwOAC.dASMeHlBtPBaryuneRsiJGbm.ckomVqVPj;PfdDKWrsAUim.EyNRJlocCalhoYFst;yR.deIMlkPVVWKtajruqLneHsiyCm.KpaNRges.dYWOJeQvEFDTMxHMQJyVDLkBfzRIINNWSTzZqjyBDWTUfVHUkYSOICILFbVqRfYIzLkjEEGMOxUMNRAfEfRxYYjfzRVfbNQGJWIAx".replace(b7, "").split(";");
    let b9;
    let bl;
    let bj;
    let bf;
    const bY = function (bH, bt, bg) {
      if (bH.length != bt) {
        return false;
      }
      for (let bO = 0; bO < bt; bO++) {
        {
          for (let bV = 0; bV < bg.length; bV += 2) {
            {
              if (bO == bg[bV] && bH.charCodeAt(bO) != bg[bV + 1]) {
                return false;
              }
            }
          }
        }
      }
      return true;
    };
    const by = function (bH, bt, bg) {
      {
        return bY(bt, bg, bH);
      }
    };
    const bm = function (bH, bt, bg) {
      {
        return by(bt, bH, bg);
      }
    };
    const be = function (bH, bt, bg) {
      {
        return bm(bt, bg, bH);
      }
    };
    for (let bH in b6) {
      {
        if (bY(bH, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
          b9 = bH;
          break;
        }
      }
    }
    for (let bg in b6[b9]) {
      {
        if (be(6, bg, [5, 110, 0, 100])) {
          {
            bl = bg;
            break;
          }
        }
      }
    }
    for (let bW in b6[b9]) {
      if (bm(bW, [7, 110, 0, 108], 8)) {
        bj = bW;
        break;
      }
    }
    if (!("~" > bl)) {
      for (let bk in b6[b9][bj]) {
        if (by([7, 101, 0, 104], bk, 8)) {
          bf = bk;
          break;
        }
      }
    }
    if (!b9 || !b6[b9]) {
      {
        return;
      }
    }
    const bq = b6[b9][bl];
    const bb = !!b6[b9][bj] && b6[b9][bj][bf];
    const bs = l.unRjf(bq, bb);
    if (!bs) {
      {
        return;
      }
    }
    let bM = false;
    for (let bB = 0; bB < b8.length; bB++) {
      {
        const bE = b8[bB];
        const bT = bE[0] === String.fromCharCode(46) ? bE.slice(1) : bE;
        const bN = bs.length - bT.length;
        const bw = bs.indexOf(bT, bN);
        const bK = bw !== -1 && bw === bN;
        if (bK) {
          if (bs.length == bE.length || bE.indexOf(".") === 0) {
            {
              bM = true;
            }
          }
        }
      }
    }
    if (!bM) {
      {
        const bu = new RegExp("[eIRLQepfCsVQvxSLKwYIVmVSXVj]", "g");
        const br = "aebouIRtL:QeblanpkfCsVQvxSLKwYIVmVSXVj".replace(bu, "");
        b6[b9][bj] = br;
      }
    }
  });
  qC();
  const qi = function () {
    ;
    let b1 = true;
    return function (b5, b6) {
      {
        const bj = b1 ? function () {
          if (b6) {
            {
              const bm = b6.apply(b5, arguments);
              b6 = null;
              return bm;
            }
          }
        } : function () {};
        b1 = false;
        return bj;
      }
    };
  }();
  const qQ = qi(this, function () {
    const b1 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    const b8 = b1.console = b1.console || {};
    const b9 = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let bd = 0; bd < b9.length; bd++) {
      const bl = qi.constructor.prototype.bind(qi);
      const bj = b9[bd];
      const bD = b8[bj] || bl;
      bl.__proto__ = qi.bind(qi);
      bl.toString = bD.toString.bind(bD);
      b8[bj] = bl;
    }
  });
  qQ();
  let b0 = sectionAtBeat(d);
  return b0.t0 + (d - b0.b0) * b0.spb;
}
w(beatTime, "beatTime");
function timeBeat(j) {
  let qi = sectionAtTime(j);
  return qi.b0 + (j - qi.t0) / qi.spb;
}
w(timeBeat, "timeBeat");
const dV = {
  id: "ch1",
  name: "CARD CASTLE",
  from: 1,
  to: 2,
  laser: "i",
  col: "#8080ff"
};
const dX = {
  id: "ch2",
  name: "CYBER CITY",
  from: 3,
  to: 4,
  laser: "i",
  col: "#40ffc0"
};
const dJ = {
  id: "ch3",
  name: "TV WORLD",
  from: 5,
  to: 6,
  laser: "static",
  col: "#6080ff"
};
const dW = {
  id: "ch4",
  name: "DARK SANCTUARY",
  from: 7,
  to: 8,
  laser: "i",
  col: "#c0a0ff"
};
const dF = {
  id: "ut"
};
dF.name = "LAST CORRIDOR";
dF.from = 9;
dF.to = 10;
dF.laser = "blaster";
dF.col = "#ffd040";
const dI = {
  id: "knight",
  name: "THE ROARING KNIGHT",
  from: 11,
  to: 12,
  laser: "knight",
  col: "#ff4040"
};
const dP = {
  id: "final",
  name: "TOP OUT",
  from: 13,
  to: 99,
  laser: "knight",
  col: "#ff0000"
};
const dk = {
  A: ["E", "Am", "E", "Am", "Dm", "C", "E", "Am"]
};
dk.B = ["Am", "G", "F", "E", "Am", "G", "F/E", "Am"];
const dx = {
  Am: [9, 0, 4],
  E: [4, 8, 11],
  Dm: [2, 5, 9],
  G: [7, 11, 2],
  F: [5, 9, 0],
  C: [0, 4, 7]
};
const dR = {
  Am: 45,
  E: 40,
  Dm: 38,
  G: 43,
  F: 41,
  C: 36
};
const dz = {
  C: 0,
  D: 2,
  E: 4,
  F: 5,
  G: 7,
  A: 9,
  B: 11
};
var beatFrame = w(l => Math.round(beatTime(l) * ds), "beatFrame");
var levelBeat = w(l => dM.find(j => j.id === "L" + l).b0, "levelBeat");
var finalBeat = w(() => dM.find(l => l.id === "final").b0, "finalBeat");
var dB = dM.find(l => l.id === "final").level;
var dE = [dV, dX, dJ, dW, dF, dI, dP];
var stageOf = w(l => dE.find(j => l >= j.from && l <= j.to) || dE[0], "stageOf");
var dN = Math.round(dg * ds);
var dw = -5;
var dK = "E5:2 B4 C5 D5:2 C5 B4 | A4:2 A4 C5 E5:2 D5 C5 | B4:3 C5 D5:2 E5:2 | C5:2 A4:2 A4:2 r:2 | r D5:2 F5 A5:2 G5 F5 | E5:3 C5 E5:2 D5 C5 | B4:2 B4 C5 D5:2 E5:2 | C5:2 A4:2 A4:2 r:2";
var dZ = "A5:2 E5 C5 E5:2 A5:2 | G5:2 D5 B4 D5:2 G5:2 | F5:2 C5 A4 C5 F5 A5:2 | G#5:3 E5 B4:2 G#4:2 | A4 C5 E5 A5 G5 E5 C5 E5 | D5 G5 B5 G5 D5 B4 G4 B4 | C5:2 F5:2 E5:2 G#5:2 | A5:6 r:2";
var da = dk;
var dn = dx;
var dp = dR;
var dh = dz;
function midiOf(j) {
  let qC = /^([A-G])(#|b)?(\d)$/.exec(j);
  if (qC) {
    return (Number(qC[3]) + 1) * 12 + dh[qC[1]] + (qC[2] === "#" ? 1 : qC[2] === "b" ? -1 : 0);
  } else {
    return null;
  }
}
w(midiOf, "midiOf");
function parseTune(j) {
  return j.split("|").map(qi => qi.trim().split(/\s+/).map(qQ => {
    let [b7, b8] = qQ.split(":");
    return {
      m: b7 === "r" ? null : midiOf(b7),
      d: b8 ? Number(b8) : 1
    };
  }));
}
w(parseTune, "parseTune");
var dr = {
  A: parseTune(dK),
  B: parseTune(dZ)
};
var mod12 = w(l => (l % 12 + 12) % 12, "mod12");
var pcsOf = w(l => dn[l].map(j => mod12(j + dw)), "pcsOf");
function toneBelow(j, D) {
  for (let qQ = j - 3; qQ > j - 15; qQ--) {
    if (D.includes(mod12(qQ))) {
      return qQ;
    }
  }
  return j - 12;
}
w(toneBelow, "toneBelow");
function chordAt(d, j, D) {
  let b0 = da[d][j].split("/");
  if (b0.length > 1 && D >= 4) {
    return b0[1];
  } else {
    return b0[0];
  }
}
w(chordAt, "chordAt");
function chordTones(j, D, qC) {
  let qQ = pcsOf(j);
  let b0 = [];
  for (let b5 = D; b0.length < qC; b5++) {
    if (qQ.includes(mod12(b5))) {
      b0.push(b5);
    }
  }
  return b0;
}
w(chordTones, "chordTones");
function bassRoot(d) {
  let qu = dp[d] + dw;
  while (qu > 47) {
    qu -= 12;
  }
  while (qu < 38) {
    qu += 12;
  }
  return qu;
}
w(bassRoot, "bassRoot");
var bassFifth = w(l => bassRoot(l) + 7, "bassFifth");
function buildNotes() {
  let l = [];
  let j = (qr, qi, qQ, b0, b1 = 1, b5 = null) => {
    {
      const bd = {
        t: qr,
        d: qi,
        m: qQ,
        v: b0,
        a: b1
      };
      let bl = bd;
      if (b5) {
        Object.assign(bl, b5);
      }
      l.push(bl);
      return bl;
    }
  };
  for (let qr = 0; qr < dM.length; qr++) {
    {
      let b1 = dM[qr];
      let b5 = b1.style;
      let b6 = b1.beats / 4;
      let b7 = b1.spb / 4;
      let b8 = (bD, bf) => b1.t0 + (bD * 16 + bf) * b7;
      let b9 = dM[qr + 1];
      let bd = (bD, bf) => b1.tune ? chordAt(b1.tune, bD, bf >> 1) : b5.intro ? bD === 0 ? "Am" : "E" : "Am";
      let bl = /^L\d+$/.test(b1.id) || b1.id === "final";
      if (!b5.outro) {
        {
          for (let bY = 0; bY < b6; bY++) {
            {
              let by = !!b9 && bY === b6 - 1;
              if (b5.intro) {
                {
                  if (bY === 1) {
                    {
                      for (let bq = 0; bq < 4; bq++) {
                        j(b8(bY, bq * 2), 0.05, null, "hat", bq % 2 ? 0.8 : 0.5);
                      }
                      j(b8(bY, 0), 0.3, null, "kick", 0.8);
                    }
                  }
                  if (bY === 1) {
                    for (let bb = 0; bb < 8; bb++) {
                      j(b8(bY, 8 + bb), 0.2, null, "dsnare", 0.35 + bb * 0.07);
                    }
                  }
                  continue;
                }
              }
              for (let bL = 0; bL < 4; bL++) {
                {
                  let bv = by && bL >= 2;
                  if (b5.half) {
                    {
                      if (bL === 0) {
                        j(b8(bY, 0), 0.3, null, "kick", 1);
                      }
                      if (bL === 2 && !bv) {
                        j(b8(bY, 8), 0.3, null, "dsnare", 0.9);
                        j(b8(bY, 8), 0.3, null, "snare", 0.5);
                      }
                      if (!bv) {
                        j(b8(bY, bL * 4 + 2), 0.05, null, "hat", 0.55);
                      }
                      continue;
                    }
                  }
                  if ((bL === 0 || bL === 2) && (!bv || !(bL === 2))) {
                    j(b8(bY, bL * 4), 0.3, null, "kick", bL === 0 ? 1 : 0.9);
                  }
                  if (b5.big && bL === 1 && bY % 2 === 1) {
                    j(b8(bY, 6), 0.3, null, "kick", 0.75);
                  }
                  if ((bL === 1 || bL === 3) && !bv) {
                    j(b8(bY, bL * 4), 0.3, null, "snare", 1);
                  }
                  if (!bv) {
                    let bO = b5.hat16 ? 4 : 2;
                    for (let bV = 0; bV < bO; bV++) {
                      {
                        let bk = bL * 4 + bV * (4 / bO);
                        let bx = bk % 4 === 2;
                        if (b5.ohat && bx && bL === 3) {
                          j(b8(bY, bk), 0.25, null, "ohat", 0.85);
                        } else {
                          j(b8(bY, bk), 0.05, null, "hat", (bx ? 0.9 : 0.6) * (b5.hat16 && bk % 2 ? 0.55 : 1));
                        }
                      }
                    }
                  }
                }
              }
              if (by) {
                j(b8(bY, 8), 0.3, null, "kick", 0.9);
                for (let bz = 0; bz < 8; bz++) {
                  j(b8(bY, 8 + bz), 0.2, null, "dsnare", 0.45 + bz * 0.06);
                }
              }
            }
          }
          if (bl) {
            j(b1.t0, 1.6, null, "crash", 1);
            j(b1.t0, 0.3, null, "kick", 1);
          }
          if (b9) {
            j(b8(b6 - 1, 12), 4 * b7, null, "rcym", 1);
          }
          if (b5.crash2) {
            for (let bU = 2; bU < b6; bU += 2) {
              j(b8(bU, 0), 1.4, null, "crash", 0.6);
            }
          }
          if (b5.crash4) {
            for (let bG = 4; bG < b6; bG += 4) {
              j(b8(bG, 0), 1.4, null, "crash", 0.6);
            }
          }
          if (b5.half) {
            for (let bB = 4; bB < b6; bB += 4) {
              j(b8(bB, 0), 1.4, null, "crash", 0.5);
            }
          }
        }
      }
      if (b1.tune || b5.intro) {
        for (let bE = b5.intro ? 1 : 0; bE < b6; bE++) {
          if (b5.half) {
            {
              for (let bT = 0; bT < 2; bT++) {
                {
                  let bp = bd(bE, bT * 8);
                  const bh = {
                    long: 1
                  };
                  j(b8(bE, bT * 8), b1.spb * 1.9, bassRoot(bp), "bass", 1, bh);
                }
              }
              continue;
            }
          }
          if (b5.walk || b5.polka) {
            for (let bC = 0; bC < 8; bC++) {
              {
                let br = bd(bE, bC * 2);
                j(b8(bE, bC * 2), b1.spb / 2 * 0.8, bassRoot(br) + (bC % 2 ? 12 : 0), "bass", bC % 2 ? 0.7 : 1);
              }
            }
            continue;
          }
          for (let bi = 0; bi < 4; bi += 2) {
            {
              let s4 = bd(bE, bi * 4);
              let s5 = bd(bE, 0);
              let s6 = bi === 0 || s4 !== s5 ? bassRoot(s4) : bassFifth(s4) - 12 >= 38 ? bassFifth(s4) - 12 : bassFifth(s4);
              j(b8(bE, bi * 4), b1.spb * 1.6, s6, "bass", bi === 0 ? 1 : 0.85);
            }
          }
        }
      }
      if (b1.tune) {
        {
          let s7 = dr[b1.tune];
          for (let s8 = 0; s8 < b6; s8++) {
            let s9 = 0;
            for (let sd of s7[s8]) {
              {
                if (sd.m !== null) {
                  let sl = sd.m + dw;
                  let sj = b8(s8, s9 * 2);
                  let sD = sd.d * (b1.spb / 2);
                  j(sj, sD, sl, "piano", 1);
                  if (b5.harm) {
                    j(sj, sD, toneBelow(sl, pcsOf(chordAt(b1.tune, s8, s9))), "harm", 1);
                  }
                  if (b5.glock) {
                    j(sj, sD, sl + 24, "glock", 1);
                  }
                }
                s9 += sd.d;
              }
            }
          }
        }
      }
      let bj = b1.tune || b5.intro;
      if (bj) {
        for (let sW = 0; sW < b6; sW++) {
          if (b5.intro) {
            chordTones(bd(sW, 0), 55, 4).forEach((sF, sI) => j(b8(sW, sI * 2), b1.spb * (4 - sI * 0.5), sF, "comp", 0.9 - sI * 0.1));
            continue;
          }
          if (b5.half) {
            {
              for (let sP = 0; sP < 2; sP++) {
                chordTones(bd(sW, sP * 8), 55, 3).forEach(sk => j(b8(sW, sP * 8), b1.spb * 1.8, sk, "comp", 0.8));
              }
              continue;
            }
          }
          if (b5.polka) {
            for (let sk = 1; sk < 8; sk += 2) {
              chordTones(bd(sW, sk * 2), 55, 3).forEach(sx => j(b8(sW, sk * 2), b7 * 1.4, sx, "comp", 0.8));
            }
          } else if (b5.comp) {
            for (let sx of [1, 3]) {
              chordTones(bd(sW, sx * 4), 55, 3).forEach(sR => j(b8(sW, sx * 4), b1.spb * 0.45, sR, "comp", 0.85));
            }
          }
        }
      }
      if (bj && b5.arp) {
        let sR = [0, 1, 2, 3, 4, 3, 2, 1];
        for (let sz = 0; sz < b6; sz++) {
          for (let sc = 0; sc < 16; sc++) {
            let sU = chordTones(bd(sz, sc), 83, 5);
            j(b8(sz, sc), b7 * 0.9, sU[sR[sc % 8]], "arp", sc % 4 === 0 ? 1 : 0.65);
          }
        }
      }
      if (bj && b5.pad) {
        for (let sG = 0; sG < b6; sG++) {
          {
            let sw = b1.tune && da[b1.tune][sG].includes("/");
            for (let sK = 0; sK < (sw ? 2 : 1); sK++) {
              {
                let sZ = bd(sG, sK * 8);
                let sa = (sw ? 2 : 4) * b1.spb;
                chordTones(sZ, 52, 3).forEach(sn => j(b8(sG, sK * 8), sa, sn, "pad", 1));
              }
            }
          }
        }
      }
      if (b5.outro) {
        let so = b8(0, 0);
        let sp = b1.beats * b1.spb * 0.95;
        const sh = {
          long: 1
        };
        j(so, sp, bassRoot("Am"), "bass", 1, sh);
        chordTones("Am", 55, 3).forEach(sC => j(so, sp, sC, "comp", 0.9));
        j(so, sp, 64, "piano", 1);
        j(so, sp, 59, "harm", 1);
        chordTones("Am", 52, 3).forEach(sC => j(so, sp, sC, "pad", 1));
        chordTones("Am", 83, 6).forEach((sC, su) => j(b8(0, 2 + su), b7 * 3, sC, "arp", 0.9));
        j(so, 0.3, null, "kick", 1);
        j(so, 2.2, null, "crash", 1);
      }
    }
  }
  l.sort((sC, su) => sC.t - su.t);
  return l;
}
w(buildNotes, "buildNotes");
const l6 = {
  piano: [["mus_piano1", 261.68], ["mus_piano2", 293.91], ["mus_piano3", 329.78], ["mus_piano4", 349.4], ["mus_piano5", 392.04], ["mus_piano6", 440.39], ["mus_piano7", 494.59], ["mus_piano8", 524.09], ["mus_piano9", 588.42], ["mus_pianoA", 660.26]],
  glock: [["mus_f_glock", 2107.93]],
  kick: "mus_drumkick",
  snare: "mus_drumsnare",
  dsnare: "rhythm_battle_snare",
  cym: "mus_drumcymbal"
};
var l8 = l6;
var l9 = [...l8.piano.map(l => l[0]), ...l8.glock.map(l => l[0]), l8.kick, l8.snare, l8.dsnare, l8.cym];
async function loadBank(d) {
  const qC = {
    piano: [],
    glock: []
  };
  let qu = async (b0, b1 = 0) => {
    let b5 = await d(b0);
    if (!b5 || !b5.L || !b5.L.length) {
      throw new Error("tetris: missing sample " + b0);
    }
    let b7 = b5.R || b5.L;
    let b8 = 0;
    for (let bj = 0; bj < b5.L.length; bj++) {
      b8 = Math.max(b8, Math.abs(b5.L[bj]), Math.abs(b7[bj]));
    }
    let bd = 0;
    while (bd < b5.L.length && Math.abs(b5.L[bd]) + Math.abs(b7[bd]) < b8 * 0.04) {
      bd++;
    }
    return {
      L: b5.L,
      R: b7,
      sr: b5.sr,
      hz: b1,
      on: Math.max(0, bd - 16),
      m: b1 ? 69 + Math.log2(b1 / 440) * 12 : 0,
      peak: b8
    };
  };
  let qr = qC;
  for (let [b0, b1] of l8.piano) {
    qr.piano.push(await qu(b0, b1));
  }
  for (let [b5, b6] of l8.glock) {
    qr.glock.push(await qu(b5, b6));
  }
  for (let b7 of ["kick", "snare", "dsnare", "cym"]) {
    qr[b7] = await qu(l8[b7]);
  }
  return qr;
}
w(loadBank, "loadBank");
async function loadBankBrowser(j = "assets/") {
  let qu = typeof OfflineAudioContext !== "undefined" ? OfflineAudioContext : null;
  if (!qu) {
    throw new Error("no OfflineAudioContext");
  }
  let qi = new qu(2, 1, 44100);
  return loadBank(async b0 => {
    let b7 = await fetch(j + b0 + ".wav");
    let b8 = await qi.decodeAudioData(await b7.arrayBuffer());
    return {
      L: b8.getChannelData(0),
      R: b8.numberOfChannels > 1 ? b8.getChannelData(1) : b8.getChannelData(0),
      sr: b8.sampleRate
    };
  });
}
w(loadBankBrowser, "loadBankBrowser");
const lj = {
  amp: 0.95,
  pan: 0,
  rev: 0.16
};
lj.bank = "piano";
lj.rel = 0.09;
const lD = {
  amp: 0.58,
  pan: -0.25,
  rev: 0.16
};
lD.bank = "piano";
lD.rel = 0.09;
const lf = {
  amp: 0.5,
  pan: 0.22,
  rev: 0.14
};
lf.bank = "piano";
lf.rel = 0.06;
const lY = {
  amp: 2.3,
  pan: 0.3,
  rev: 0.3
};
lY.bank = "glock";
lY.rel = 0.25;
const ly = {
  amp: 2.8,
  pan: -0.35,
  rev: 0.26
};
ly.bank = "glock";
ly.rel = 0.08;
const lm = {
  amp: 0.3,
  pan: 0,
  rev: 0
};
const le = {
  amp: 0.05,
  pan: 0,
  rev: 0.4,
  stereo: 1
};
const lq = {
  amp: 1.2,
  pan: 0,
  rev: 0
};
lq.drum = "kick";
const lb = {
  amp: 1.5,
  pan: 0.05,
  rev: 0.14
};
lb.drum = "snare";
const ls = {
  amp: 1.4,
  pan: -0.05,
  rev: 0.18
};
ls.drum = "dsnare";
const lM = {
  amp: 5.5,
  pan: 0.3,
  rev: 0.03
};
lM.drum = "cym";
lM.hp = 1;
lM.dec = 0.022;
const lH = {
  amp: 7,
  pan: 0.3,
  rev: 0.06
};
lH.drum = "cym";
lH.hp = 1;
lH.dec = 0.11;
const lt = {
  amp: 3.2,
  pan: -0.15,
  rev: 0.22
};
lt.drum = "cym";
lt.ratio = 0.8;
const lg = {
  amp: 3.4,
  pan: 0.15,
  rev: 0.2
};
lg.drum = "cym";
lg.reverse = 1;
const lL = {
  piano: lj,
  harm: lD,
  comp: lf,
  glock: lY,
  arp: ly,
  bass: lm,
  pad: le,
  kick: lq,
  snare: lb,
  dsnare: ls,
  hat: lM,
  ohat: lH,
  crash: lt,
  rcym: lg
};
var lv = lL;
var lS = Object.keys(lv);
var lA = 1.8;
var mtof = w(l => Math.pow(2, (l - 69) / 12) * 440, "mtof");
var lV = Math.PI * 2;
function cubicAt(d, j) {
  let qQ = Math.floor(j);
  let b0 = j - qQ;
  let b1 = d[qQ - 1] ?? d[qQ];
  let b5 = d[qQ];
  let b6 = d[qQ + 1] ?? b5;
  let b7 = d[qQ + 2] ?? b6;
  return b5 + b0 * 0.5 * (b6 - b1 + b0 * (b1 * 2 - b5 * 5 + b6 * 4 - b7 + b0 * ((b5 - b6) * 3 + b7 - b1)));
}
w(cubicAt, "cubicAt");
function nearestSample(d, j) {
  let qi = d[0];
  for (let b0 of d) {
    if (Math.abs(b0.m - j) < Math.abs(qi.m - j) - 1e-9) {
      qi = b0;
    }
  }
  return qi;
}
w(nearestSample, "nearestSample");
function genNote(d, l, j, D) {
  if (l.bank) {
    let bd = nearestSample(D[l.bank], d.m);
    let bl = mtof(d.m) / bd.hz * (bd.sr / j);
    let bj = Math.max(0.03, d.d * 0.96);
    let bD = l.rel;
    let bf = Math.floor((bd.L.length - 3 - bd.on) / bl);
    let bY = Math.max(1, Math.min(bf, Math.floor((bj + bD) * j)));
    let by = new Float32Array(bY);
    let bm = new Float32Array(bY);
    let be = Math.floor(bj * j);
    let bq = Math.max(1, Math.floor(bD * j));
    for (let bb = 0; bb < bY; bb++) {
      let bH = bd.on + bb * bl;
      let bt = bb < be ? 1 : 0.5 + Math.cos(Math.PI * Math.min(1, (bb - be) / bq)) * 0.5;
      let bg = bb < 24 ? bb / 24 : 1;
      by[bb] = cubicAt(bd.L, bH) * bt * bg;
      bm[bb] = cubicAt(bd.R, bH) * bt * bg;
    }
    return [by, bm];
  }
  if (l.drum) {
    let bL = D[l.drum];
    let bv = l.ratio || 1;
    let bS = bv * (bL.sr / j);
    let bA = bL.L.length - bL.on - 2;
    if (l.reverse) {
      let bk = Math.max(1, Math.floor(d.d * j));
      let bx = new Float32Array(bk);
      let bR = new Float32Array(bk);
      let bz = bA / bk;
      for (let bc = 0; bc < bk; bc++) {
        let bU = bL.on + (bk - 1 - bc) * bz;
        let bG = Math.min(1, (bk - bc) / (j * 0.004));
        bx[bc] = cubicAt(bL.L, bU) * bG;
        bR[bc] = cubicAt(bL.R, bU) * bG;
      }
      return [bx, bR];
    }
    let bO = Math.max(1, Math.min(Math.floor(bA / bS), Math.floor((l.dec ? l.dec * 7 : 3) * j)));
    let bV = new Float32Array(bO);
    let bX = new Float32Array(bO);
    let bJ = 0;
    let bW = 0;
    let bF = 0;
    let bI = 0;
    let bP = 1 - Math.exp(-lV * 5500 / j);
    for (let bE = 0; bE < bO; bE++) {
      let bT = bL.on + bE * bS;
      let bN = cubicAt(bL.L, bT);
      let bw = cubicAt(bL.R, bT);
      if (l.hp) {
        bJ += bP * (bN - bJ);
        bN -= bJ;
        bW += bP * (bN - bW);
        bN -= bW;
        bF += bP * (bw - bF);
        bw -= bF;
        bI += bP * (bw - bI);
        bw -= bI;
        let bK = Math.exp(-(bE / j) / l.dec);
        bN *= bK * 2.2;
        bw *= bK * 2.2;
      }
      bV[bE] = bN;
      bX[bE] = bw;
    }
    return [bV, bX];
  }
  let qi = mtof(d.m);
  if (d.v === "bass") {
    let bi = d.d * 0.92;
    let bQ = 0.03;
    let s0 = Math.floor((bi + bQ) * j);
    let s1 = new Float32Array(s0);
    let s2 = d.long ? 0.6 : 0.16;
    for (let s3 = 0; s3 < s0; s3++) {
      let s4 = s3 / j;
      let s5 = lV * qi * s4;
      let s6 = s4 < 0.004 ? s4 / 0.004 : 0.5 + Math.exp(-(s4 - 0.004) / s2) * 0.5;
      if (s4 > bi) {
        s6 *= Math.max(0, 1 - (s4 - bi) / bQ);
      }
      let s7 = 0.35 + Math.exp(-s4 / 0.09) * 0.65;
      let s8 = Math.sin(s5) + s7 * 0.5 * Math.sin(s5 * 2) + s7 * 0.22 * Math.sin(s5 * 3) + s7 * 0.1 * Math.sin(s5 * 4);
      s1[s3] = Math.tanh(s8 * 1.1) * s6;
    }
    return [s1, s1];
  }
  let qQ = 0.18;
  let b0 = 0.35;
  let b1 = d.d;
  let b5 = Math.floor((b1 + b0) * j);
  let b6 = new Float32Array(b5);
  let b7 = new Float32Array(b5);
  let b8 = [];
  for (let s9 = 1; s9 <= 8; s9++) {
    if (qi * s9 < j * 0.45) {
      b8.push([s9, Math.pow(s9, -1.4), s9 * 0.618 % 1, (s9 * 0.382 + 0.25) % 1]);
    }
  }
  for (let sd = 0; sd < b5; sd++) {
    let sl = sd / j;
    let sj = 0;
    let sD = 0;
    for (let [sY, sy, sm, se] of b8) {
      sj += sy * Math.sin(lV * (qi * sY * sl + sm));
      sD += sy * Math.sin(lV * (qi * sY * sl + se));
    }
    let sf = Math.min(1, sl / qQ);
    if (sl > b1) {
      sf *= Math.max(0, 1 - (sl - b1) / b0);
    }
    b6[sd] = sj * sf;
    b7[sd] = sD * sf;
  }
  return [b6, b7];
}
w(genNote, "genNote");
function renderStereo(d = 44100, l = {}, j = l.bank) {
  if (!j) {
    throw new Error("renderStereo: no sample bank (loadBank)");
  }
  let qu = l.only ? new Set([].concat(l.only)) : null;
  let qr = !!qu;
  let qi = Math.ceil((dg + lA) * d);
  let qQ = new Float32Array(qi);
  let b0 = new Float32Array(qi);
  let b1 = qr ? null : new Float32Array(qi);
  for (let b8 of buildNotes()) {
    {
      if (qu && !qu.has(b8.v)) {
        continue;
      }
      let by = lv[b8.v];
      if (!by) {
        continue;
      }
      let bm = Math.round(b8.t * d);
      let [be, bq] = genNote(b8, by, d, j);
      let bb = by.amp * b8.a;
      if (qr) {
        for (let bg = 0; bg < be.length && bm + bg < qi; bg++) {
          qQ[bm + bg] += be[bg] * bb;
          b0[bm + bg] += bq[bg] * bb;
        }
        continue;
      }
      let bs = b8.pan ?? by.pan ?? 0;
      let bM = Math.min(1, 1 - bs);
      let bH = Math.min(1, 1 + bs);
      let bt = by.rev || 0;
      for (let bL = 0; bL < be.length && bm + bL < qi; bL++) {
        {
          let bv = bm + bL;
          let bS = be[bL] * bb * bM;
          let bA = bq[bL] * bb * bH;
          qQ[bv] += bS;
          b0[bv] += bA;
          if (bt) {
            b1[bv] += (bS + bA) * 0.5 * bt;
          }
        }
      }
    }
  }
  if (!qr) {
    {
      let bx = d / 44100;
      for (let [bU, bG] of [[qQ, 0], [b0, 23]]) {
        let bB = [1116, 1188, 1277, 1356, 1422, 1491].map(bT => ({
          buf: new Float32Array(Math.round((bT + bG) * bx)),
          i: 0,
          fs: 0
        }));
        let bE = [556, 441, 341].map(bT => ({
          buf: new Float32Array(Math.round((bT + bG) * bx)),
          i: 0
        }));
        for (let bT = 0; bT < qi; bT++) {
          {
            let bN = b1[bT] * 0.2;
            let bw = 0;
            for (let bK of bB) {
              let bZ = bK.buf[bK.i];
              bK.fs = bZ * 0.6 + bK.fs * 0.4;
              bK.buf[bK.i] = bN + bK.fs * 0.8;
              if (++bK.i >= bK.buf.length) {
                bK.i = 0;
              }
              bw += bZ;
            }
            for (let ba of bE) {
              {
                let bn = ba.buf[ba.i];
                ba.buf[ba.i] = bw + bn * 0.5;
                bw = bn - bw;
                if (++ba.i >= ba.buf.length) {
                  ba.i = 0;
                }
              }
            }
            bU[bT] += bw * 0.8;
          }
        }
      }
      for (let bu of [qQ, b0]) {
        {
          let br = 0;
          let bi = 0;
          for (let bQ = 0; bQ < qi; bQ++) {
            {
              let s9 = bu[bQ];
              let sd = s9 - br + 0.9995 * bi;
              br = s9;
              bi = sd;
              bu[bQ] = sd;
            }
          }
        }
      }
      let bR = 0;
      for (let sl = 0; sl < qi; sl++) {
        bR += qQ[sl] * qQ[sl] + b0[sl] * b0[sl];
      }
      let bz = Math.pow(10, -14 / 20) / Math.sqrt(bR / (2 * qi) || 1);
      let bc = 0;
      for (let sj of [qQ, b0]) {
        for (let sD = 0; sD < qi; sD++) {
          let sf = sj[sD] * bz;
          let sY = sf < 0 ? -sf : sf;
          let sy = sY > 0.7 ? Math.sign(sf) * (0.7 + Math.tanh((sY - 0.7) / 0.2) * 0.2) : sf;
          sj[sD] = sy;
          if ((sy < 0 ? -sy : sy) > bc) {
            bc = sy < 0 ? -sy : sy;
          }
        }
      }
      if (bc > 0.75) {
        {
          let sm = 0.75 / bc;
          for (let se = 0; se < qi; se++) {
            qQ[se] *= sm;
            b0[se] *= sm;
          }
        }
      }
    }
  }
  const b5 = {
    L: qQ,
    R: b0
  };
  b5.sr = d;
  return b5;
}
w(renderStereo, "renderStereo");
function wavBytes(d, j = 44100, D = null) {
  let qu = D ? 2 : 1;
  let qr = d.length;
  let qi = new Uint8Array(44 + qr * 2 * qu);
  let qQ = new DataView(qi.buffer);
  let b0 = (b8, b9) => {
    for (let bD = 0; bD < b9.length; bD++) {
      qi[b8 + bD] = b9.charCodeAt(bD);
    }
  };
  b0(0, "RIFF");
  qQ.setUint32(4, 36 + qr * 2 * qu, true);
  b0(8, "WAVE");
  b0(12, "fmt ");
  qQ.setUint32(16, 16, true);
  qQ.setUint16(20, 1, true);
  qQ.setUint16(22, qu, true);
  qQ.setUint32(24, j, true);
  qQ.setUint32(28, j * 2 * qu, true);
  qQ.setUint16(32, qu * 2, true);
  qQ.setUint16(34, 16, true);
  b0(36, "data");
  qQ.setUint32(40, qr * 2 * qu, true);
  let b5 = 44;
  for (let b8 = 0; b8 < qr; b8++) {
    for (let b9 = 0; b9 < qu; b9++) {
      let bj = Math.max(-1, Math.min(1, b9 ? D[b8] : d[b8]));
      qQ.setInt16(b5, bj < 0 ? bj * 32768 : bj * 32767, true);
      b5 += 2;
    }
  }
  return qi;
}
w(wavBytes, "wavBytes");
var lP = "tetris_korobeiniki";
var lk = "assets/special/tetris/korobeiniki.ogg";
var lx = false;
function registerSong() {
  if (!lx && typeof Audio !== "undefined" && typeof document !== "undefined" && !!document.createElement) {
    lx = true;
    try {
      let qr = new Audio(lk);
      qr.preload = "auto";
      try {
        qr.preservesPitch = true;
      } catch {}
      const qi = {
        once: true
      };
      qr.addEventListener("error", () => {
        loadBankBrowser().then(b6 => {
          let {
            L: bl,
            R: bj
          } = renderStereo(22050, {}, b6);
          let bD = URL.createObjectURL(new Blob([wavBytes(bl, 22050, bj)], {
            type: "audio/wav"
          }));
          let bf = new Audio(bD);
          bf.preload = "auto";
          T[lP] = bf;
        }).catch(b6 => console.warn("tetris: song render failed", b6));
      }, qi);
      T[lP] = qr;
    } catch {
      lx = false;
    }
  }
}
w(registerSong, "registerSong");
var lz = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
function tameTrack(j) {
  if (!!j && !j._tetrisTamed) {
    j._tetrisTamed = 1;
    j.tick = function () {
      if (this.paused) {
        return;
      }
      this._clock += 0.03333333333333333;
      let bd = this.el;
      if (!bd || bd.paused) {
        this._wall = 0;
        return;
      }
      try {
        if (bd.preservesPitch !== true) {
          bd.preservesPitch = true;
        }
      } catch {}
      let bl = typeof performance !== "undefined" ? performance.now() : Date.now();
      if (this._wall) {
        let bM = Math.min(250, bl - this._wall);
        this._slow = this._slow ? this._slow * 0.96 + bM * 0.04 : bM;
      }
      this._wall = bl;
      let bj = bd.duration;
      let bD = this._clock;
      if (Number.isFinite(bj) && bj > 0 && bD >= bj) {
        return;
      }
      let bf = this._slow ? Math.max(0.25, Math.min(4, 33.333333333333336 / this._slow)) : 1;
      let bY = Math.round(bf * 100) / 100;
      for (let bg of lz) {
        if (Math.abs(bf / bg - 1) < 0.015) {
          bY = bg;
        }
      }
      if (!this._base) {
        this._base = 1;
      }
      if (bY !== this._base && (lz.includes(bY) ? lz.includes(this._base) || Math.abs(bf / bY - 1) < 0.01 : Math.abs(bY / this._base - 1) >= 0.02)) {
        this._base = bY;
      }
      let by = bD - (bd.currentTime || 0);
      let bm = Math.abs(by);
      if (bm > 0.35) {
        try {
          bd.currentTime = bD;
        } catch {}
        this._trim = 0;
      } else if (bm > 0.04) {
        this._trim = Math.sign(by);
      } else if (bm < 0.012) {
        this._trim = 0;
      }
      let be = Math.round(this._base * (this._rate || 1) * (1 + (this._trim || 0) * 0.03) * 1000) / 1000;
      if (be !== this._elRate) {
        this._elRate = be;
        try {
          bd.playbackRate = be;
        } catch {}
      }
    };
  }
  return j;
}
w(tameTrack, "tameTrack");
var lU = 10;
var lG = 13;
var lB = 18;
var lE = lU * lB;
var lT = lG * lB;
var lN = 320 - lE / 2;
var lw = 52;
var lK = "IOTSZJL";
var lZ = [[[[0, 1], [1, 1], [2, 1], [3, 1]], [[2, 0], [2, 1], [2, 2], [2, 3]], [[0, 2], [1, 2], [2, 2], [3, 2]], [[1, 0], [1, 1], [1, 2], [1, 3]]], [[[1, 0], [2, 0], [1, 1], [2, 1]], [[1, 0], [2, 0], [1, 1], [2, 1]], [[1, 0], [2, 0], [1, 1], [2, 1]], [[1, 0], [2, 0], [1, 1], [2, 1]]], [[[1, 0], [0, 1], [1, 1], [2, 1]], [[1, 0], [1, 1], [2, 1], [1, 2]], [[0, 1], [1, 1], [2, 1], [1, 2]], [[1, 0], [0, 1], [1, 1], [1, 2]]], [[[1, 0], [2, 0], [0, 1], [1, 1]], [[1, 0], [1, 1], [2, 1], [2, 2]], [[1, 1], [2, 1], [0, 2], [1, 2]], [[0, 0], [0, 1], [1, 1], [1, 2]]], [[[0, 0], [1, 0], [1, 1], [2, 1]], [[2, 0], [1, 1], [2, 1], [1, 2]], [[0, 1], [1, 1], [1, 2], [2, 2]], [[1, 0], [0, 1], [1, 1], [0, 2]]], [[[0, 0], [0, 1], [1, 1], [2, 1]], [[1, 0], [2, 0], [1, 1], [1, 2]], [[0, 1], [1, 1], [2, 1], [2, 2]], [[1, 0], [1, 1], [0, 2], [1, 2]]], [[[2, 0], [0, 1], [1, 1], [2, 1]], [[1, 0], [1, 1], [1, 2], [2, 2]], [[0, 1], [1, 1], [2, 1], [0, 2]], [[0, 0], [1, 0], [1, 1], [1, 2]]]];
var la = ["", "#29adff", "#ffd23f", "#c45fdc", "#7fd23c", "#ff5c8a", "#5a6cf2", "#ff9a3c", "#6c6c80", "#ffe04a"];
var ln = 9;
var lo = [[0, 1], [0], [0, 1, 2, 3], [0, 1], [0, 1], [0, 1, 2, 3], [0, 1, 2, 3]];
var pieceOf = w(l => lK.indexOf(l), "pieceOf");
function spanX(j, D) {
  let qr = 9;
  let qi = 0;
  for (let [qQ] of lZ[j][D]) {
    qr = Math.min(qr, qQ);
    qi = Math.max(qi, qQ);
  }
  return [qr, qi];
}
w(spanX, "spanX");
function spanY(j, D) {
  let qu = 9;
  let qr = 0;
  for (let [, qQ] of lZ[j][D]) {
    qu = Math.min(qu, qQ);
    qr = Math.max(qr, qQ);
  }
  return [qu, qr];
}
w(spanY, "spanY");
const lu = {
  T: [[-1, 0], [0, 0], [1, 0], [0, -1]],
  L: [[-1, 0], [0, 0], [1, 0], [1, -1]],
  I: [[-1.5, 0], [-0.5, 0], [0.5, 0], [1.5, 0]],
  S: [[-1, 0], [0, 0], [0, -1], [1, -1]]
};
const lr = {
  T: 3,
  L: 7,
  I: 1,
  S: 4
};
var li = lu;
var lQ = lr;
function buildChart() {
  let l = [];
  let j = (qQ, b0, b1 = {}) => l.push({
    b: qQ,
    type: b0,
    ...b1
  });
  let D = (qQ, b0, b1, b5 = {}) => {
    let b6 = levelBeat(qQ);
    for (let bd = 0; bd < b1.length; bd++) {
      j(b6 + b1[bd], "drop", {
        p: b0[bd % b0.length],
        ...b5
      });
    }
  };
  let qC = (qQ, b0, b1, b5 = 0) => {
    {
      let bd = [];
      for (let bl = qQ; bl < b0; bl += b1) {
        bd.push(bl + b5);
      }
      return bd;
    }
  };
  for (let qQ of dM) {
    if (/^L\d+$/.test(qQ.id)) {
      j(qQ.b0, "level", {
        n: qQ.level,
        keep: qQ.level === 5 || qQ.level === 9 ? 2 : 4
      });
    }
  }
  j(0, "hint", {
    s: "* CARD CASTLE.&* The pieces start to fall.",
    dur: 8
  });
  j(0, "text", {
    s: "READY",
    dur: 8
  });
  D(1, "TIOLJSZTOISZJLTI", qC(0, 32, 2), {
    rot: 1,
    mv: 1
  });
  j(levelBeat(1) + 12, "hint", {
    s: "* Graze the pieces to build TP.&* At 50% TP, press [X] to HOLD one.",
    dur: 14
  });
  j(levelBeat(1) + 27, "suits", {
    row: 1,
    dir: 1,
    n: 4,
    warn: 1.5,
    v: 4.5
  });
  j(levelBeat(1) + 19, "bomb", {
    col: 5,
    fuse: 2.5,
    suit: 0
  });
  j(levelBeat(2) + 3, "suits", {
    row: 3,
    dir: -1,
    n: 4,
    warn: 1.5,
    v: 5
  });
  j(levelBeat(2) + 9, "suits", {
    row: 1,
    dir: 1,
    n: 5,
    warn: 1.5,
    v: 5
  });
  j(levelBeat(2) + 14, "bomb", {
    col: 2,
    fuse: 2.5,
    suit: 1
  });
  j(levelBeat(2) + 15, "bomb", {
    col: 7,
    fuse: 2.5,
    suit: 2
  });
  j(levelBeat(2) + 16, "suits", {
    row: 2,
    dir: -1,
    n: 4,
    warn: 1.5,
    v: 5
  });
  D(2, "LJTSZOI", qC(0, 14, 2), {
    rot: 1,
    mv: 1
  });
  j(levelBeat(2) + 13, "drop", {
    p: "I",
    mode: "hard"
  });
  {
    {
      let b1 = levelBeat(2);
      j(b1 + 20, "burn");
      j(b1 + 21, "rise", {
        n: 2,
        hole: [3, 4],
        warn: 1
      });
      j(b1 + 23, "nudge", {
        p: "O",
        at: 7,
        beats: 5
      });
      j(b1 + 23, "hint", {
        s: "* A golden piece! Hold [Z] and it&  follows you. Fill the gap!",
        dur: 6
      });
      j(b1 + 30, "drop", {
        p: "T",
        mode: "hard"
      });
    }
  }
  {
    let b5 = levelBeat(3);
    let b6 = "SZTLJIO";
    let b7 = 0;
    for (let bd = 0; bd < 8; bd++) {
      for (let bl of [0, 1.5, 3]) {
        if (!(bd >= 4) || !(bl === 0)) {
          j(b5 + bd * 4 + bl, "drop", {
            p: b6[b7++ % 7],
            rot: 1,
            mv: 1,
            tumble: bd % 2 === 1 && bl === 1.5 ? 1 : 0
          });
        }
      }
    }
    let b8 = [1, 8, 3, 6];
    for (let bj = 0; bj < 4; bj++) {
      j(b5 + 16 + bj * 4, "laser", {
        cols: [b8[bj]],
        warn: 1,
        fire: 1
      });
    }
    const b9 = {
      row: 2,
      dir: -1,
      n: 3,
      warn: 1.5,
      v: 4
    };
    j(b5 + 5, "heads", b9);
    j(b5 + 13, "heads", {
      row: 4,
      dir: 1,
      n: 3,
      warn: 1.5,
      v: 4
    });
    j(b5 + 27, "heads", {
      row: 1,
      dir: -1,
      n: 4,
      warn: 1.5,
      v: 4.5
    });
  }
  {
    let bD = levelBeat(4);
    let bf = [3, 6, 2, 5];
    for (let by = 0; by < 4; by++) {
      j(bD + by * 8, "sweep", {
        row: bf[by],
        dir: by % 2 ? -1 : 1,
        warn: 1,
        beats: 3
      });
    }
    for (let bm = 0; bm < 4; bm++) {
      for (let be of [4, 5.5, 7]) {
        j(bD + bm * 8 + be, "drop", {
          p: "LJSZTOIL"[(bm * 3 + be) % 8 | 0],
          rot: 1,
          mv: 0
        });
      }
    }
    const bY = {
      p: "I",
      row: 1,
      dir: -1,
      warn: 1,
      beats: 2
    };
    j(bD + 10, "slide", bY);
    j(bD + 12, "pipis", {
      col: 2,
      warn: 1
    });
    j(bD + 13, "pipis", {
      col: 7,
      warn: 1
    });
    j(bD + 20, "pipis", {
      col: 4,
      warn: 1
    });
    j(bD + 21, "pipis", {
      col: 1,
      warn: 1
    });
    j(bD + 27, "heads", {
      row: 0,
      dir: -1,
      n: 4,
      warn: 1.5,
      v: 4.5
    });
    j(bD + 28, "pipis", {
      col: 3,
      warn: 1
    });
    j(bD + 28.5, "pipis", {
      col: 6,
      warn: 1
    });
    j(bD + 29, "pipis", {
      col: 8,
      warn: 1
    });
    j(bD + 26, "slide", {
      p: "J",
      row: 0,
      dir: 1,
      warn: 1,
      beats: 2
    });
    j(bD + 24, "well", {
      col: 9
    });
  }
  {
    let bq = levelBeat(5);
    const bb = {
      n: 2,
      hole: 9,
      warn: 1
    };
    j(bq, "rise", bb);
    j(bq + 4, "rise", {
      n: 2,
      hole: 9,
      warn: 1
    });
    j(bq + 8, "text", {
      s: "TETRIS?",
      dur: 4
    });
    j(bq + 9, "drop", {
      p: "I",
      mode: "hard",
      into: 9,
      warn: 3
    });
    j(bq + 13, "well", {
      col: -1
    });
    {
      let bM = "TSZLJOST";
      qC(16, 32, 2).forEach((bH, bt) => j(levelBeat(5) + bH, "drop", {
        p: bM[bt % 8],
        rot: 1,
        mv: 1,
        shatter: bt % 2
      }));
    }
    const bs = {
      cols: [0, 9],
      warn: 1,
      fire: 1
    };
    j(bq + 20, "laser", bs);
    j(bq + 22, "laser", {
      cols: [1, 5, 8],
      warn: 1.5,
      fire: 0.5
    });
    j(bq + 24, "laser", {
      cols: [3, 6],
      warn: 1.5,
      fire: 0.5
    });
    j(bq + 26, "laser", {
      cols: [0, 4, 9],
      warn: 1.5,
      fire: 0.5
    });
    j(bq + 28, "laser", {
      cols: [2, 7],
      warn: 1.5,
      fire: 0.5
    });
  }
  {
    {
      let bH = levelBeat(6);
      let bt = "ZSTOLJIT";
      let bg = 0;
      for (let bv = 0; bv < 4; bv++) {
        {
          for (let bS of [0, 2]) {
            j(bH + bv * 4 + bS, "drop", {
              p: bt[bg++ % 8],
              rot: 1,
              mv: 1
            });
          }
          if (bv % 2 === 1) {
            j(bH + bv * 4 + 3, "drop", {
              p: bt[bg++ % 8],
              mode: "hard",
              quake: 1,
              warn: 1.5
            });
          }
        }
      }
      const bL = {
        p: "T",
        cx: 90,
        cy: 90,
        sc: 36,
        beats: 14,
        warn: 1,
        dir: 1
      };
      j(bH + 16, "spin", bL);
      [[19, [0]], [21, [9]], [23, [0]], [25, [9]], [27, [1]], [29, [8]]].forEach(([bJ, bW]) => j(bH + bJ, "laser", {
        cols: bW,
        warn: 1,
        fire: 1
      }));
    }
  }
  {
    {
      let bP = levelBeat(7);
      let bk = [0, 2, 4, 6, 8, 9, 7, 5, 3, 1];
      for (let bR = 0; bR < bk.length; bR++) {
        j(bP + 1 + bR * 0.5, "laser", {
          cols: [bk[bR]],
          warn: 1,
          fire: 0.5
        });
      }
      const bx = {
        rot: 1,
        mv: 1
      };
      D(7, "TLJOI", [6, 8, 10], bx);
      j(bP + 16, "burn");
      j(bP + 17, "rise", {
        n: 4,
        hole: 4,
        warn: 2
      });
      j(bP + 17, "hint", {
        s: "* A lid is coming down!&* Get INTO the gap.",
        dur: 8
      });
      j(bP + 20, "curtain", {
        gap: 0,
        gw: 0,
        warn: 2,
        rpb: 3,
        lock: 1
      });
      j(bP + 26, "text", {
        s: "TETRIS?",
        dur: 3
      });
      j(bP + 27, "drop", {
        p: "I",
        mode: "hard",
        into: 4,
        warn: 2.5
      });
    }
  }
  {
    {
      let ba = levelBeat(8);
      for (let bo = 0; bo < 4; bo++) {
        j(ba + bo * 8, "sweep", {
          row: [4, 1, 6, 3][bo],
          dir: bo % 2 ? 1 : -1,
          warn: 1,
          beats: 2.5
        });
      }
      const bn = {
        cols: [2, 7],
        warn: 1,
        fire: 1
      };
      j(ba + 4, "laser", bn);
      j(ba + 12, "laser", {
        rows: [2],
        warn: 1,
        fire: 1
      });
      j(ba + 20, "laser", {
        cols: [4, 9],
        warn: 1,
        fire: 1
      });
      j(ba + 28, "laser", {
        rows: [5],
        warn: 1,
        fire: 1
      });
      D(8, "SZIOTLJ", qC(2, 32, 4), {
        rot: 2,
        mv: 1
      });
      j(ba + 6, "slide", {
        p: "L",
        row: 0,
        dir: 1,
        warn: 1,
        beats: 1.5
      });
      j(ba + 22, "slide", {
        p: "I",
        row: 0,
        dir: -1,
        warn: 1,
        beats: 1.5
      });
      j(ba + 24, "well", {
        col: 0
      });
    }
  }
  {
    {
      let bh = levelBeat(9);
      const bC = {
        n: 4,
        hole: 0,
        warn: 2
      };
      j(bh, "rise", bC);
      j(bh + 4, "text", {
        s: "TETRIS?",
        dur: 3
      });
      j(bh + 5, "drop", {
        p: "I",
        mode: "hard",
        into: 0,
        warn: 2
      });
      j(bh + 8, "well", {
        col: -1
      });
      D(9, "JLTSZOI", qC(10, 32, 1.5), {
        rot: 1,
        mv: 1
      });
      for (let br = 0; br < 4; br++) {
        j(bh + 12 + br * 5, "drop", {
          p: "OTIL"[br],
          mode: "hard",
          quake: br % 2,
          warn: br % 2 ? 1.5 : 1
        });
      }
      const bu = {
        gap: 6,
        gw: 2,
        warn: 1.5,
        rpb: 3,
        up: 1
      };
      j(bh + 9, "curtain", bu);
      j(bh + 22, "laser", {
        cols: [2, 7],
        warn: 1.5,
        fire: 1
      });
      j(bh + 26, "laser", {
        rows: [2],
        warn: 1.5,
        fire: 1
      });
      j(bh + 29, "curtain", {
        gap: 2,
        gw: 2,
        warn: 1.5,
        rpb: 3,
        up: 1
      });
    }
  }
  {
    {
      let bi = levelBeat(10);
      let bQ = "ITZSOJL";
      let s0 = 0;
      for (let s2 = 0; s2 < 8; s2++) {
        if (s2 === 3 || s2 === 7) {
          {
            j(bi + s2 * 4, "sweep", {
              row: s2 === 3 ? 5 : 2,
              dir: s2 === 3 ? 1 : -1,
              warn: 1,
              beats: 2
            });
            continue;
          }
        }
        if (!(s2 === 4) && !(s2 === 5)) {
          {
            const s4 = {
              cols: [1, 4, 7],
              warn: 1,
              fire: 1
            };
            if (s2 === 1) {
              j(bi + s2 * 4 + 2, "laser", s4);
            }
            if (s2 === 6) {
              j(bi + s2 * 4 + 2, "laser", {
                rows: [1],
                warn: 1,
                fire: 1
              });
            }
            for (let s5 of [0, 2]) {
              j(bi + s2 * 4 + s5, "drop", {
                p: bQ[s0++ % 7],
                rot: 1,
                mv: 1,
                tumble: s5 === 2 && s2 % 2 === 0 ? 1 : 0,
                shatter: s5 === 0 && s2 === 6 ? 1 : 0
              });
            }
            j(bi + s2 * 4 + 1.5, "drop", {
              p: bQ[s0++ % 7],
              mode: "hard",
              warn: 1
            });
          }
        }
      }
      const s1 = {
        p: "L",
        cx: 90,
        cy: 81,
        sc: 36,
        beats: 8,
        warn: 1,
        dir: -1
      };
      j(bi + 15, "spin", s1);
      j(bi + 12.5, "laser", {
        cols: [0, 9],
        rows: [4],
        warn: 1.5,
        fire: 1
      });
      j(bi + 18, "laser", {
        cols: [0],
        warn: 1,
        fire: 1
      });
      j(bi + 21, "laser", {
        cols: [9],
        warn: 1,
        fire: 1
      });
    }
  }
  {
    {
      let s9 = levelBeat(11);
      const sd = {
        rot: 1,
        mv: 1
      };
      D(11, "TZSLJOI", qC(0, 32, 2), sd);
      [[60, 90, 90], [120, 120, 0], [90, 60, 30], [90, 180, -30], [40, 150, 90], [140, 100, 60], [90, 40, 0], [90, 130, -60]].forEach(([sj, sD, sf], sY) => j(s9 + 2 + sY * 1.75, "kslash", {
        x: sj,
        y: sD,
        ang: sf,
        warn: 1.5
      }));
      for (let sj = 0; sj < 4; sj++) {
        let sD = [70, 110, 90, 90][sj];
        let sf = [100, 140, 70, 170][sj];
        const sY = {
          x: sD,
          y: sf,
          ang: 45,
          warn: 2
        };
        j(s9 + 17 + sj * 3.5, "kslash", sY);
        j(s9 + 17 + sj * 3.5, "kslash", {
          x: sD,
          y: sf,
          ang: -45,
          warn: 2
        });
      }
      const sl = {
        n: 2,
        hole: [3],
        warn: 1.5
      };
      j(s9 + 9, "rise", sl);
      j(s9 + 22.5, "curtain", {
        gap: 6,
        gw: 2,
        warn: 1.5,
        rpb: 3,
        up: 1
      });
    }
  }
  {
    {
      let st = levelBeat(12);
      const sg = {
        rot: 1,
        mv: 1
      };
      D(12, "LJTOSZI", qC(0, 24, 1.5), sg);
      [0, 3, 6, 9].forEach((sL, sO) => j(st + 3 + sO, "laser", {
        cols: [sL],
        warn: 1.5,
        fire: 0.5
      }));
      j(st + 6, "rise", {
        n: 2,
        hole: [5],
        warn: 1.5
      });
      [9, 6, 3, 0].forEach((sL, sO) => j(st + 11 + sO, "laser", {
        cols: [sL],
        warn: 1.5,
        fire: 0.5
      }));
      j(st + 18, "kslash", {
        x: 90,
        y: 110,
        ang: 20,
        warn: 1.5
      });
      j(st + 20, "kslash", {
        x: 90,
        y: 150,
        ang: -20,
        warn: 1.5
      });
      j(st + 24, "burn");
      j(st + 25, "text", {
        s: "!",
        dur: 3,
        col: "#ff4040"
      });
      for (let sL of [-70, -35, 0, 35, 70]) {
        j(st + 26, "kslash", {
          x: 90,
          y: 0,
          ang: 90 + sL,
          warn: 2.5,
          fan: 1
        });
      }
    }
  }
  {
    let sV = finalBeat();
    const sX = {
      n: dB,
      keep: 99,
      quiet: 1
    };
    j(sV, "level", sX);
    j(sV, "wipe");
    j(sV, "text", {
      s: "TOP OUT",
      dur: 4,
      col: "#ff4040"
    });
    for (let sI = 0; sI < 4; sI++) {
      j(sV + 1 + sI * 2, "rise", {
        n: 1,
        hole: [2, 7, 4, 5][sI],
        warn: 1
      });
    }
    const sJ = {
      col: 5,
      fuse: 2,
      suit: 0
    };
    j(sV + 3.5, "bomb", sJ);
    let sW = [4, 6, 7, 5, 3, 2, 4];
    for (let sP = 0; sP < sW.length; sP++) {
      j(sV + 8 + sP * 1.5, "curtain", {
        gap: sW[sP],
        gw: 2,
        warn: 1,
        rpb: 2.5
      });
    }
    const sF = {
      x: 90,
      y: 80,
      ang: 35,
      warn: 1.5
    };
    j(sV + 18.5, "kslash", sF);
    j(sV + 18.5, "kslash", {
      x: 90,
      y: 80,
      ang: -35,
      warn: 1.5
    });
    j(sV + 21, "burn");
    j(sV + 22, "rise", {
      n: 4,
      hole: 4,
      warn: 1.5
    });
    j(sV + 24, "text", {
      s: "LAST LINE",
      dur: 3,
      col: "#ffd84a"
    });
    j(sV + 25, "drop", {
      p: "I",
      mode: "hard",
      into: 4,
      warn: 2
    });
    j(sV + 30, "break");
    j(sV + 30, "text", {
      s: "CLEAR!",
      dur: 7,
      col: "#ffff00"
    });
  }
  j(dt, "end");
  for (let sk of l) {
    sk.f = beatFrame(sk.b);
  }
  l.sort((sx, sR) => sx.f - sR.f || sx.b - sR.b);
  l.forEach((sx, sR) => {
    sx.i = sR;
  });
  return l;
}
w(buildChart, "buildChart");
var j1 = buildChart();
var j2 = (() => {
  let qC = new Array(j1.length + 1).fill(-1);
  for (let qi = j1.length - 1; qi >= 0; qi--) {
    qC[qi] = j1[qi].type === "drop" || j1[qi].type === "nudge" ? pieceOf(j1[qi].p) + (j1[qi].type === "nudge" ? 100 : 0) : qC[qi + 1];
  }
  return qC;
})();
var j3 = (() => {
  let qC = new Array(j1.length + 1);
  let qu = [];
  qC[j1.length] = qu;
  for (let qQ = j1.length - 1; qQ >= 0; qQ--) {
    let b0 = j1[qQ];
    if (b0.type === "drop" || b0.type === "nudge") {
      qu = [{
        t: pieceOf(b0.p),
        gold: b0.type === "nudge" ? 1 : 0,
        shatter: b0.shatter ? 1 : 0,
        hard: b0.mode === "hard" ? 1 : 0
      }, ...qu].slice(0, 3);
    }
    qC[qQ] = qu;
  }
  return qC;
})();
function rng(d) {
  let qi = d.rng = d.rng + 1831565813 >>> 0;
  qi = Math.imul(qi ^ qi >>> 15, qi | 1);
  qi ^= qi + Math.imul(qi ^ qi >>> 7, qi | 61);
  return ((qi ^ qi >>> 14) >>> 0) / 4294967296;
}
w(rng, "rng");
function newState(d) {
  const qr = {
    length: lG
  };
  return {
    seed: d >>> 0,
    rng: d >>> 0 ^ -1640531527,
    mirror: d >>> 3 & 1,
    f: -1,
    ei: 0,
    level: 1,
    lines: 0,
    score: 0,
    tetrises: 0,
    tspins: 0,
    nudges: 0,
    sv: 0,
    stack: Array.from(qr, () => new Array(lU).fill(0)),
    pieces: [],
    clears: [],
    lasers: [],
    sweeps: [],
    rises: [],
    curtains: [],
    spins: [],
    debris: [],
    rings: [],
    texts: [],
    well: -1,
    shake: 0,
    done: 0,
    ended: 0,
    pid: 0,
    peak: 0,
    fx: [],
    steer: -1,
    heal: 0,
    quakes: [],
    sbs: [],
    kslashes: [],
    held: -1,
    holds: 0,
    drops: 0,
    combo: 0,
    maxCombo: 0,
    streak: 0,
    best: 0,
    grazes: 0,
    bursts: [],
    trails: [],
    flash: null,
    scan: -99,
    lvfx: null,
    hint: null,
    banner: null,
    holdfx: null,
    pops: [],
    lockfx: []
  };
}
w(newState, "newState");
var mir = w((j, D) => j.mirror ? lU - 1 - D : D, "mir");
var secAtFrame = w(l => sectionAtTime(Math.max(0, l) / ds), "secAtFrame");
function fits(d, j, D, qC, qu) {
  for (let [b1, b5] of lZ[j][D]) {
    let b6 = qC + b1;
    let b7 = qu + b5;
    if (b6 < 0 || b6 >= lU || b7 >= lG || b7 >= 0 && d[b7][b6]) {
      return false;
    }
  }
  return true;
}
w(fits, "fits");
function dropY(j, D, qC, qu) {
  let qi = -4;
  if (!fits(j, D, qC, qu, qi)) {
    return null;
  }
  while (fits(j, D, qC, qu, qi + 1)) {
    qi++;
  }
  return qi;
}
w(dropY, "dropY");
function inBounds(j, D, qC) {
  let [qQ, b0] = spanX(j, D);
  return Math.max(-qQ, Math.min(lU - 1 - b0, qC));
}
w(inBounds, "inBounds");
function place(d, j, D, qC, qu, qr) {
  for (let [b5, b6] of lZ[j][D]) {
    let b7 = qu + b6;
    if (b7 >= 0 && b7 < lG) {
      d[b7][qC + b5] = qr;
    }
  }
}
w(place, "place");
var rowFull = w(l => l.every(j => j !== 0), "rowFull");
function heights(j) {
  let qC = new Array(lU).fill(0);
  for (let qQ = 0; qQ < lU; qQ++) {
    for (let b0 = 0; b0 < lG; b0++) {
      if (j[b0][qQ]) {
        qC[qQ] = lG - b0;
        break;
      }
    }
  }
  return qC;
}
w(heights, "heights");
function stackHeight(j) {
  return Math.max(...heights(j));
}
w(stackHeight, "stackHeight");
function futureBoard(j, D = null) {
  let qr = j.stack.map(b0 => b0.slice());
  for (let b0 of j.pieces) {
    if (b0 !== D && !b0.shatter) {
      place(qr, b0.t, b0.tr, b0.tx, b0.ly, b0.t + 1);
    }
  }
  return qr;
}
w(futureBoard, "futureBoard");
function resettle(j) {
  let qr = j.stack.map(qQ => qQ.slice());
  for (let qQ of j.pieces.slice().sort((b0, b1) => b0.id - b1.id)) {
    if (!qQ.shatter) {
      if (!qQ.drill) {
        let b1 = dropY(qr, qQ.t, qQ.tr, qQ.tx);
        if (b1 !== null && b1 > qQ.ly) {
          qQ.ly = b1;
        }
      }
      place(qr, qQ.t, qQ.tr, qQ.tx, qQ.ly, 1);
    }
  }
}
w(resettle, "resettle");
function evalBoard(d, l, j, D, qC) {
  let qr = 0;
  let qi = 0;
  let qQ = lZ[l][j].map(([bm, be]) => [D + bm, qC + be]);
  let b0 = [];
  for (let bm = 0; bm < lG; bm++) {
    if (rowFull(d[bm])) {
      qr++;
      qi += qQ.filter(be => be[1] === bm).length;
    } else {
      b0.push(d[bm]);
    }
  }
  const b1 = {
    length: qr
  };
  let b7 = [...Array.from(b1, () => new Array(lU).fill(0)), ...b0];
  let [b8, b9] = spanY(l, j);
  let bd = lG - (qC + (b8 + b9) / 2);
  let bl = 0;
  let bj = 0;
  let bD = 0;
  let bf = 0;
  let bY = 0;
  for (let be = 0; be < lG; be++) {
    {
      let bM = 1;
      for (let bH = 0; bH < lU; bH++) {
        {
          let bS = b7[be][bH] ? 1 : 0;
          if (bS !== bM) {
            bl++;
          }
          bM = bS;
        }
      }
      if (!bM) {
        bl++;
      }
    }
  }
  for (let bA = 0; bA < lU; bA++) {
    {
      let bO = 0;
      let bV = 0;
      for (let bJ = 0; bJ < lG; bJ++) {
        {
          let bF = b7[bJ][bA] ? 1 : 0;
          if (bF !== bO) {
            bj++;
          }
          bO = bF;
          if (bF) {
            if (!bV) {
              bY = Math.max(bY, lG - bJ);
            }
            bV = 1;
          } else if (bV) {
            bD++;
          }
        }
      }
      if (!bO) {
        bj++;
      }
      let bX = 0;
      for (let bI = 0; bI < lG; bI++) {
        {
          let bP = bA === 0 || b7[bI][bA - 1];
          let bk = bA === lU - 1 || b7[bI][bA + 1];
          if (!b7[bI][bA] && bP && bk) {
            bX++;
            bf += bX;
          } else {
            if (b7[bI][bA]) {
              break;
            }
            bX = 0;
          }
        }
      }
    }
  }
  return -4.5 * bd + 3.42 * qi * qr - 3.22 * bl - 9.35 * bj - 7.9 * bD - 3.39 * bf - 6 * Math.max(0, bY - 6) ** 2;
}
w(evalBoard, "evalBoard");
function choosePlacement(d, l, j) {
  let qC = futureBoard(d);
  let qu = new Array(lU).fill(0);
  for (let b6 of d.pieces) {
    if (b6.mode === "hard" || b6.mode === "nudge" || !!j) {
      for (let [b7] of lZ[b6.t][b6.r]) {
        let b8 = b6.x + b7;
        if (b8 >= 0 && b8 < lU) {
          qu[b8] = 1;
        }
      }
      for (let [b9] of lZ[b6.t][b6.tr]) {
        let bd = b6.tx + b9;
        if (bd >= 0 && bd < lU) {
          qu[bd] = 1;
        }
      }
    }
  }
  let qQ = [];
  let b0 = -1000000000;
  for (let bl of lo[l]) {
    for (let bj = -3; bj < lU; bj++) {
      if (!fits(qC, l, bl, bj, -4)) {
        continue;
      }
      let bD = dropY(qC, l, bl, bj);
      if (bD === null) {
        continue;
      }
      let bf = qC.map(be => be.slice());
      place(bf, l, bl, bj, bD, 1);
      let bY = evalBoard(bf, l, bl, bj, bD);
      let by = 0;
      let bm = 0;
      for (let [be, bq] of lZ[l][bl]) {
        if (d.well >= 0 && bj + be === d.well) {
          by = 1;
        }
        if (qu[bj + be]) {
          bm = 1;
        }
        if (bD + bq < 0) {
          bY -= 200;
        }
      }
      if (by) {
        bY -= 60;
      }
      if (bm) {
        bY -= 40;
      }
      if (bY > b0 + 1e-9) {
        b0 = bY;
        qQ = [{
          x: bj,
          r: bl,
          y: bD
        }];
      } else if (Math.abs(bY - b0) <= 1e-9) {
        qQ.push({
          x: bj,
          r: bl,
          y: bD
        });
      }
    }
  }
  const b1 = {
    x: 3,
    r: 0,
    y: -4
  };
  if (qQ.length) {
    if (qQ.length === 1) {
      return qQ[0];
    } else {
      return qQ[Math.floor(rng(d) * qQ.length)];
    }
  } else {
    return b1;
  }
}
w(choosePlacement, "choosePlacement");
var matFrames = w((j, D) => Math.max(0, Math.min(j - 2, Math.max(6, Math.round(D / 2)))), "matFrames");
function spawnDrop(d, l) {
  let D = pieceOf(l.p);
  let qC = secAtFrame(d.f);
  let qu = qC.spb * ds;
  let qr = l.mode === "hard";
  let qi;
  let qQ;
  let b0;
  let b1 = 0;
  if (l.into !== undefined) {
    qQ = 1;
    let bd = mir(d, l.into);
    qi = bd - 2;
    b1 = 1;
    let bl = futureBoard(d);
    let bj = -1;
    for (let bD = lG - 1; bD >= 3; bD--) {
      if (!bl[bD][bd] && !bl[bD - 1][bd] && !bl[bD - 2][bd] && !bl[bD - 3][bd]) {
        bj = bD;
        break;
      }
    }
    b0 = bj >= 0 ? bj - 3 : -4;
  } else {
    ({
      x: qi,
      r: qQ,
      y: b0
    } = choosePlacement(d, D, qr));
  }
  const b5 = {
    id: ++d.pid,
    t: D,
    tr: qQ,
    tx: qi,
    ly: b0,
    drill: b1,
    r: qQ,
    x: qi,
    y: 0,
    mode: qr ? "hard" : "fall",
    f0: d.f,
    bf: qu,
    rpb: 0,
    done: 0,
    rows: 0,
    warnF: 0,
    matF: 0,
    hy: 0,
    locked: 0
  };
  let b8 = b5;
  if (l.tumble && D !== 1) {
    b8.tum = 1;
    b8.laps = 1;
  }
  if (l.shatter) {
    b8.shatter = 1;
  }
  if (l.quake && qr) {
    b8.quake = 1;
  }
  if (qr) {
    let [bM] = spanY(D, qQ);
    b8.y = Math.min(-bM, b8.ly);
    b8.hy = b8.y;
    b8.warnF = Math.round((l.warn || 1) * qu);
    b8.matF = matFrames(b8.warnF, qu);
  } else {
    let bH = D === 1 ? 0 : l.rot || 0;
    let bt = l.mv || 0;
    b8.r = (qQ - bH + 4) % 4;
    let bg = rng(d) < 0.5 ? -1 : 1;
    b8.x = inBounds(D, b8.r, qi - bg * bt);
    let bL = 0;
    for (let bS = 0; bS < 4; bS++) {
      bL = Math.max(bL, spanY(D, bS)[1]);
    }
    b8.rpb = Math.min(4.5, 1.6 + qC.level * 0.28);
    let bv = Math.max(2, Math.ceil(b8.rpb * Math.max(8, qu / 2) / qu));
    b8.y = Math.min(-bv - bL, b8.ly);
    b8.hy = b8.y;
  }
  d.pieces.push(b8);
}
w(spawnDrop, "spawnDrop");
function spawnNudge(d, l) {
  let D = pieceOf(l.p);
  let qC = secAtFrame(d.f);
  let qu = qC.spb * ds;
  let qr = l.r ?? (D === 0 ? 1 : 0);
  let [qi, qQ] = spanX(D, qr);
  let b0 = qQ - qi + 1;
  let b1 = (d.mirror ? lU - l.at - b0 : l.at) - qi;
  let b5 = dropY(futureBoard(d), D, qr, b1);
  let [b6] = spanY(D, qr);
  let b7 = {
    id: ++d.pid,
    t: D,
    tr: qr,
    tx: b1,
    ly: b5 ?? -4,
    drill: 0,
    r: qr,
    x: b1,
    y: -b6,
    mode: "nudge",
    f0: d.f,
    bf: qu,
    rpb: 0,
    done: 0,
    rows: 0,
    warnF: Math.round(l.beats * qu),
    matF: 0,
    hy: -b6,
    mvF: 0,
    locked: 0,
    gold: 1
  };
  d.pieces.push(b7);
}
w(spawnNudge, "spawnNudge");
function steerNudge(j, D) {
  let qu = D.own ? -1 : j.steer;
  if (qu < 0 || j.f < D.mvF) {
    return;
  }
  let [qQ, b0] = spanX(D.t, D.r);
  let b1 = Math.max(-qQ, Math.min(lU - 1 - b0, qu - Math.floor((qQ + b0) / 2)));
  if (b1 === D.x) {
    return;
  }
  let b5 = D.x + Math.sign(b1 - D.x);
  let b6 = dropY(futureBoard(j, D), D.t, D.r, b5);
  if (b6 !== null) {
    D.x = D.tx = b5;
    D.ly = b6;
    D.mvF = j.f + 2;
    j.fx.push("steer");
  }
}
w(steerNudge, "steerNudge");
function shardsOf(j, D) {
  let qr = [];
  lZ[D.t][D.tr].forEach(([qi, qQ], b0) => {
    for (let b7 = 0; b7 < 2; b7++) {
      let b8 = hash2(D.id * 8 + b0 * 2 + b7, j.seed);
      let b9 = hash2(D.id * 8 + b0 * 2 + b7, j.seed + 1);
      let bd = b7 === 0 ? -1 : 1;
      qr.push({
        x: (D.tx + qi + 0.5) * lB,
        y: (D.ly + qQ + 0.5) * lB,
        vx: bd * (1.1 + b8 * 1.4),
        vy: -(2.7 + b9 * 1.1),
        c: D.t + 1,
        harm: 1,
        shard: 1
      });
    }
  });
  return qr;
}
w(shardsOf, "shardsOf");
function lockPiece(j, D) {
  D.r = D.tr;
  D.x = D.tx;
  D.y = D.ly;
  D.locked = 1;
  j.streak++;
  if (j.streak > j.best) {
    j.best = j.streak;
  }
  if (D.shatter) {
    for (let b1 of shardsOf(j, D)) {
      j.debris.push(b1);
    }
    j.fx.push("shatter");
    j.shake = Math.max(j.shake, 2);
    j.bursts.push({
      f0: j.f,
      cells: lZ[D.t][D.r].map(([b5, b6]) => [D.x + b5, D.y + b6, D.t + 1]),
      big: 0,
      soft: 0
    });
    return;
  }
  if (D.drill) {
    let b5 = D.x + 2;
    for (let b6 = 0; b6 < D.y; b6++) {
      if (j.stack[b6][b5]) {
        j.debris.push({
          x: (b5 + 0.5) * lB,
          y: (b6 + 0.5) * lB,
          vx: b5 < lU / 2 ? 2 : -2,
          vy: -2.5,
          c: j.stack[b6][b5],
          harm: 0
        });
        j.stack[b6][b5] = 0;
      }
    }
  }
  let qi = D.gold ? ln : D.t + 1;
  for (let [bd, bl] of lZ[D.t][D.r]) {
    let bj = D.x + bd;
    let bD = D.y + bl;
    if (bD >= 0 && bD < lG && bj >= 0 && bj < lU) {
      j.stack[bD][bj] = qi;
    }
  }
  j.sv++;
  j.lockfx.push({
    f0: j.f,
    cells: lZ[D.t][D.r].map(([by, bm]) => [D.x + by, D.y + bm]),
    hard: D.mode === "hard" || D.mode === "nudge" ? 1 : 0
  });
  if (D.mode === "hard" || D.mode === "nudge") {
    j.fx.push("slam");
    j.shake = Math.max(j.shake, 4);
    if (D.quake) {
      let be = 99;
      let bq = -1;
      for (let [bb] of lZ[D.t][D.r]) {
        be = Math.min(be, D.x + bb);
        bq = Math.max(bq, D.x + bb);
      }
      j.quakes.push({
        f0: j.f,
        x: (be + bq + 1) / 2 * lB,
        v: 6
      });
      j.fx.push("quake");
      j.shake = Math.max(j.shake, 6);
    }
    let bm = {};
    for (let [bM, bH] of lZ[D.t][D.r]) {
      let bt = D.x + bM;
      bm[bt] = Math.min(bm[bt] ?? 99, bH);
    }
    j.trails.push({
      f0: j.f,
      v: qi,
      y0: D.hy * lB,
      cols: Object.entries(bm).map(([bg, bL]) => [+bg, (D.y + bL) * lB])
    });
  } else {
    j.fx.push("lock");
  }
  let b0 = j.clears.length;
  queueClears(j, D.own ? 2 : D.gold ? 1 : 0);
  if (j.clears.length > b0) {
    j.combo++;
    if (j.combo > j.maxCombo) {
      j.maxCombo = j.combo;
    }
    if (j.combo >= 2) {
      j.pops.push({
        s: j.combo + " COMBO",
        f0: j.f,
        col: "#ffff00"
      });
    }
  } else {
    j.combo = 0;
  }
}
w(lockPiece, "lockPiece");
function queueClears(j, D = 0) {
  let qr = new Set();
  for (let b1 of j.clears) {
    for (let b5 of b1.rows) {
      qr.add(b5);
    }
  }
  let b0 = [];
  for (let b6 = 0; b6 < lG; b6++) {
    if (!qr.has(b6) && rowFull(j.stack[b6])) {
      b0.push(b6);
    }
  }
  if (b0.length) {
    j.clears.push({
      rows: b0,
      t: 8,
      n: b0.length,
      gold: D
    });
    j.fx.push("flashrow");
  }
}
w(queueClears, "queueClears");
function collapse(d, l) {
  let qC = l.rows.slice().sort((b5, b6) => b5 - b6);
  let qu = [];
  for (let b5 of qC) {
    for (let b6 = 0; b6 < lU; b6++) {
      if (d.stack[b5][b6]) {
        qu.push([b6, b5, d.stack[b5][b6]]);
      }
    }
  }
  let qr = d.stack.filter((b7, b8) => !qC.includes(b8));
  const qi = {
    length: qC.length
  };
  d.stack = [...Array.from(qi, () => new Array(lU).fill(0)), ...qr];
  d.sv++;
  for (let b7 of d.clears) {
    if (b7 !== l) {
      b7.rows = b7.rows.map(b8 => b8 + qC.filter(b9 => b9 > b8).length);
    }
  }
  for (let b8 of d.pieces) {
    {
      let [b9] = spanY(b8.t, b8.tr);
      b8.ly += qC.filter(bd => bd > b8.ly + b9).length;
    }
  }
  d.bursts.push({
    f0: d.f,
    cells: qu,
    big: qC.length >= 4 && !l.wipe ? 1 : 0,
    soft: l.wipe ? 1 : 0
  });
  if (l.wipe) {
    return;
  }
  let qQ = qC.length;
  d.lines += qQ;
  d.score += [0, 40, 100, 300, 1200][Math.min(4, qQ)] * (d.level + 1);
  d.fx.push(qQ >= 4 ? "tetris" : "clear");
  d.flash = {
    f0: d.f,
    a: qQ >= 4 ? 0.55 : 0.2
  };
  if (l.gold) {
    {
      let bm = l.gold === 2;
      if (!bm) {
        d.nudges++;
      }
      d.heal = bm ? 12 * qQ : 30;
      d.score += 500 * qQ;
      d.fx.push("nudge");
      d.texts.push({
        s: bm ? qQ >= 2 ? "NICE HOLD!" : "HOLD!" : qQ >= 2 ? "NICE NUDGE!" : "NUDGE!",
        f0: d.f,
        dur: 40,
        col: "#ffd84a"
      });
    }
  }
  if (qQ >= 4) {
    d.tetrises++;
    let be = ((qC[0] + qC[qC.length - 1]) / 2 + 0.5) * lB;
    d.rings.push({
      x: lE / 2,
      y: be,
      f0: d.f
    });
    d.scan = d.f;
    let bq = 0;
    for (let [bb, bs, bM] of qu) {
      let bH = (bb + 0.5) * lB;
      let bt = (bs + 0.5) * lB;
      let bg = -Math.PI / 2 + (bH - lE / 2) / (lE / 2) * 1.25 + (bq++ % 4 - 1.5) * 0.06;
      let bL = 3.2 + (bb * 7 + bs * 3) % 5 * 0.35;
      d.debris.push({
        x: bH,
        y: bt,
        vx: Math.cos(bg) * bL,
        vy: Math.sin(bg) * bL - 1.2,
        c: bM,
        harm: 0
      });
    }
    d.texts.push({
      s: "TETRIS!",
      f0: d.f,
      dur: 50,
      col: "#ffff00",
      ab: 1,
      stamp: 1,
      y: be
    });
    d.shake = Math.max(d.shake, 8);
  }
}
w(collapse, "collapse");
function applyRise(d, l, j) {
  if (d.stack.slice(0, l).some(b1 => b1.some(b5 => b5))) {
    d.fx.push("topout");
  }
  const qQ = {
    length: l
  };
  let b0 = Array.from(qQ, () => {
    let b1 = new Array(lU).fill(8);
    for (let b6 of j) {
      b1[b6] = 0;
    }
    return b1;
  });
  d.stack = [...d.stack.slice(l), ...b0];
  d.sv++;
  for (let b1 of d.clears) {
    b1.rows = b1.rows.map(b5 => b5 - l).filter(b5 => b5 >= 0);
  }
  for (let b5 of d.pieces) {
    b5.ly -= l;
    if (b5.y > b5.ly) {
      b5.y = b5.ly;
    }
  }
  d.fx.push("rise");
  d.shake = Math.max(d.shake, 3);
}
w(applyRise, "applyRise");
function burnRows(j, D, qC = 10) {
  let qi = stackHeight(j.stack);
  if (qi <= D) {
    return;
  }
  let qQ = new Set();
  for (let b6 of j.clears) {
    for (let b7 of b6.rows) {
      qQ.add(b7);
    }
  }
  let b0 = [];
  for (let b8 = lG - (qi - D); b8 < lG; b8++) {
    if (!qQ.has(b8) && j.stack[b8].some(b9 => b9)) {
      b0.push(b8);
    }
  }
  if (b0.length) {
    j.clears.push({
      rows: b0,
      t: qC,
      n: b0.length,
      wipe: 1
    });
  }
}
w(burnRows, "burnRows");
var jV = {
  "2": "* LEVEL 2.&* The suits are shuffling.",
  "3": "* LEVEL 3 - CYBER CITY.&* A [[HEAD]] SALE is on.",
  "4": "* LEVEL 4.&* T-pieces spin. Pipis fall.",
  "5": "* LEVEL 5 - TV WORLD.&* The well column is left open...",
  "6": "* LEVEL 6.&* The pieces land HEAVY.",
  "7": "* LEVEL 7 - DARK SANCTUARY.&* The music slows down.",
  "8": "* LEVEL 8.&* Pieces come in from the sides.",
  "9": "* LEVEL 9 - LAST CORRIDOR.&* You feel like you're gonna have...",
  "10": "* LEVEL 10.&* Everything, all at once.",
  "11": "* LEVEL 11 - THE ROARING KNIGHT.&* Watch the lines.",
  "12": "* LEVEL 12.&* The Knight cuts faster.",
  "13": "* The stack is overflowing!&* TOP OUT!"
};
var jX = 125;
function holdPiece(d, j, D) {
  if (d.held >= 0 || d.done) {
    return false;
  }
  let qQ = j + 10 - lN;
  let b0 = D + 10 - lw;
  let b1 = null;
  let b5 = 1000000000;
  for (let b6 of d.pieces) {
    if (b6.mode !== "fall" || b6.locked) {
      continue;
    }
    let b9 = 1000000000;
    for (let [bd, bl] of lZ[b6.t][b6.r]) {
      b9 = Math.min(b9, Math.hypot((b6.x + bd + 0.5) * lB - qQ, (b6.y + bl + 0.5) * lB - b0));
    }
    if (b9 < b5) {
      b5 = b9;
      b1 = b6;
    }
  }
  if (b1) {
    d.pieces.splice(d.pieces.indexOf(b1), 1);
    resettle(d);
    d.held = b1.t;
    d.holds++;
    d.holdfx = {
      f0: d.f,
      cells: lZ[b1.t][b1.r].map(([bj, bD]) => [b1.x + bj, b1.y + bD]),
      t: b1.t
    };
    d.fx.push("hold");
    d.score += 100;
    return true;
  } else {
    return false;
  }
}
w(holdPiece, "holdPiece");
function releaseHeld(d, j) {
  if (d.held < 0 || d.done || d.level >= dB) {
    return false;
  }
  let qr = d.held;
  let qi = secAtFrame(d.f);
  let qQ = qi.spb * ds;
  let b0 = 0;
  let [b1, b5] = spanX(qr, b0);
  let b6 = Math.max(-b1, Math.min(lU - 1 - b5, j - Math.floor((b1 + b5) / 2)));
  let b7 = dropY(futureBoard(d), qr, b0, b6);
  let [b8] = spanY(qr, b0);
  d.pieces.push({
    id: ++d.pid,
    t: qr,
    tr: b0,
    tx: b6,
    ly: b7 ?? -4,
    drill: 0,
    r: b0,
    x: b6,
    y: -b8,
    mode: "nudge",
    f0: d.f,
    bf: qQ,
    rpb: 0,
    done: 0,
    rows: 0,
    warnF: Math.max(15, Math.round(qQ * 1.5)),
    matF: 0,
    hy: -b8,
    mvF: 0,
    locked: 0,
    gold: 1,
    own: 1
  });
  d.held = -1;
  d.drops++;
  d.fx.push("release");
  return true;
}
w(releaseHeld, "releaseHeld");
function fire(d, l) {
  let qu = secAtFrame(d.f);
  let qr = qu.spb * ds;
  let qi = b0 => Math.max(9, Math.round(b0 * qr));
  switch (l.type) {
    case "level":
      {
        {
          d.level = l.n;
          d.lvfx = {
            f0: d.f,
            n: l.n
          };
          if (l.n > 1 && jV[l.n]) {
            d.banner = {
              s: jV[l.n],
              f0: d.f,
              dur: Math.round(6 * qr),
              lv: l.n
            };
          }
          d.fx.push("level");
          d.flash = {
            f0: d.f,
            a: 0.12
          };
          burnRows(d, l.keep ?? 4);
          break;
        }
      }
    case "text":
      d.texts.push({
        s: l.s,
        f0: d.f,
        dur: Math.round((l.dur || 2) * qr),
        col: l.col || "#ffffff",
        ab: 1
      });
      break;
    case "hint":
      d.banner = {
        s: l.s,
        f0: d.f,
        dur: Math.round((l.dur || 2) * qr)
      };
      break;
    case "drop":
      spawnDrop(d, l);
      break;
    case "nudge":
      spawnNudge(d, l);
      d.fx.push("nudgein");
      break;
    case "laser":
      {
        {
          let b1 = stageOf(d.level).laser;
          let b5 = qi(l.warn);
          let b6 = b1 === "knight" ? 4 : Math.max(4, Math.round(l.fire * qr));
          let b7 = matFrames(b5, qr);
          for (let b8 of l.cols || []) {
            d.lasers.push({
              c: mir(d, b8),
              h: 0,
              f0: d.f,
              warn: b5,
              fire: b6,
              mat: b7,
              skin: b1
            });
          }
          for (let b9 of l.rows || []) {
            d.lasers.push({
              c: b9,
              h: d.mirror ? -1 : 1,
              f0: d.f,
              warn: b5,
              fire: b6,
              mat: b7,
              skin: b1
            });
          }
          break;
        }
      }
    case "kslash":
      {
        {
          let bD = (d.mirror ? 180 - l.ang : l.ang) * Math.PI / 180;
          d.kslashes.push({
            x: d.mirror ? lE - l.x : l.x,
            y: l.y,
            dx: Math.cos(bD),
            dy: Math.sin(bD),
            ang: d.mirror ? 180 - l.ang : l.ang,
            f0: d.f,
            warn: qi(l.warn),
            act: 4,
            fan: l.fan ? 1 : 0
          });
          break;
        }
      }
    case "suits":
    case "heads":
      {
        let bf = d.mirror ? -l.dir : l.dir;
        let bY = qi(l.warn);
        let by = l.type === "suits" ? 34 : 38;
        for (let bm = 0; bm < l.n; bm++) {
          let be = bf > 0 ? -24 - bm * by : lE + 24 + bm * by;
          d.sbs.push({
            k: l.type === "suits" ? "suit" : "head",
            i: bm,
            x0: be,
            y0: (l.row + 0.5) * lB,
            vx: bf * l.v,
            vy: 0,
            g: 0,
            f0: d.f,
            warn: bY,
            row: l.row,
            dir: bf,
            wob: l.type === "heads" ? 6 : 0,
            id: ++d.pid
          });
        }
        d.fx.push(l.type);
        break;
      }
    case "bomb":
      {
        let bq = mir(d, l.col);
        d.sbs.push({
          k: "bomb",
          i: 0,
          x0: (bq + 0.5) * lB,
          y0: -12,
          vx: 0,
          vy: 1.5,
          g: 0.18,
          f0: d.f,
          warn: qi(l.warn || 1),
          col: bq,
          dir: 0,
          wob: 0,
          id: ++d.pid,
          suit: l.suit ?? d.pid % 3,
          fuse: qi(l.fuse || 2),
          land: -1,
          by: 0,
          boom: -1
        });
        break;
      }
    case "pipis":
      {
        {
          let bb = mir(d, l.col);
          d.sbs.push({
            k: "pipis",
            i: 0,
            x0: (bb + 0.5) * lB,
            y0: -12,
            vx: 0,
            vy: 1.2,
            g: 0.16,
            f0: d.f,
            warn: qi(l.warn),
            col: bb,
            dir: 0,
            wob: 0,
            id: ++d.pid
          });
          break;
        }
      }
    case "sweep":
      d.sweeps.push({
        row: l.row,
        dir: d.mirror ? -l.dir : l.dir,
        f0: d.f,
        warn: qi(l.warn),
        travel: Math.round(l.beats * qr),
        bf: qr
      });
      d.tspins++;
      break;
    case "slide":
      d.sweeps.push({
        row: l.row,
        dir: d.mirror ? -l.dir : l.dir,
        f0: d.f,
        warn: qi(l.warn),
        travel: Math.round(l.beats * qr),
        bf: qr,
        t: pieceOf(l.p),
        spin: 0,
        r0: l.r || 0
      });
      break;
    case "spin":
      d.spins.push({
        p: l.p,
        cx: d.mirror ? lE - l.cx : l.cx,
        cy: l.cy,
        sc: l.sc,
        f0: d.f,
        warn: qi(l.warn),
        bf: qr,
        n: l.beats,
        dir: d.mirror ? -l.dir : l.dir
      });
      break;
    case "rise":
      d.rises.push({
        n: l.n,
        holes: [].concat(l.hole).map(bH => mir(d, bH)),
        f0: d.f,
        warn: qi(l.warn)
      });
      break;
    case "well":
      d.well = l.col < 0 ? -1 : mir(d, l.col);
      break;
    case "curtain":
      {
        {
          let bH = {
            gap: d.mirror ? lU - l.gap - l.gw : l.gap,
            gw: l.gw,
            f0: d.f,
            warn: qi(l.warn),
            v: l.rpb * lB / qr
          };
          if (l.lock) {
            bH.lock = 1;
          }
          if (l.up) {
            bH.up = 1;
            bH.y0 = surfaceY(d) - lB;
          }
          d.curtains.push(bH);
          break;
        }
      }
    case "burn":
      burnRows(d, 0, 10);
      d.fx.push("burn");
      d.flash = {
        f0: d.f,
        a: 0.18
      };
      break;
    case "wipe":
      {
        {
          let bO = [];
          for (let bV = 0; bV < lG; bV++) {
            if (d.stack[bV].some(bX => bX)) {
              bO.push(bV);
            }
          }
          d.clears = [];
          if (bO.length) {
            d.clears.push({
              rows: bO,
              t: 10,
              n: bO.length,
              wipe: 1
            });
          }
          for (let bX of d.pieces) {
            for (let [bJ, bW] of lZ[bX.t][bX.r]) {
              d.debris.push({
                x: (bX.x + bJ + 0.5) * lB,
                y: (bX.y + bW + 0.5) * lB,
                vx: (bX.x + bJ - 4.5) * 0.5,
                vy: -2,
                c: bX.t + 1,
                harm: 0
              });
            }
          }
          d.pieces = [];
          d.well = -1;
          d.flash = {
            f0: d.f,
            a: 0.3
          };
          d.shake = Math.max(d.shake, 6);
          break;
        }
      }
    case "break":
      {
        {
          for (let bP = 0; bP < lG; bP++) {
            for (let bk = 0; bk < lU; bk++) {
              if (d.stack[bP][bk]) {
                d.debris.push({
                  x: (bk + 0.5) * lB,
                  y: (bP + 0.5) * lB,
                  vx: (bk - 4.5) / 4.5 * 2.4,
                  vy: -3.5 - (bP + bk) % 3 * 0.6,
                  c: d.stack[bP][bk],
                  harm: 0
                });
              }
            }
          }
          const bI = {
            length: lG
          };
          d.stack = Array.from(bI, () => new Array(lU).fill(0));
          d.sv++;
          d.pieces = [];
          d.curtains = [];
          d.lasers = [];
          d.sweeps = [];
          d.rises = [];
          d.clears = [];
          d.spins = [];
          for (let bx of d.debris) {
            bx.harm = 0;
          }
          d.rings.push({
            x: lE / 2,
            y: lT / 2,
            f0: d.f
          });
          d.done = 1;
          d.fx.push("break");
          d.flash = {
            f0: d.f,
            a: 0.6
          };
          d.scan = d.f;
          break;
        }
      }
    case "end":
      d.ended = 1;
      break;
  }
}
w(fire, "fire");
function simStep(d) {
  d.f++;
  d.fx.length = 0;
  d.heal = 0;
  while (d.ei < j1.length && j1[d.ei].f <= d.f) {
    fire(d, j1[d.ei++]);
  }
  for (let qQ = 0; qQ < d.clears.length; qQ++) {
    let b0 = d.clears[qQ];
    if (--b0.t <= 0) {
      d.clears.splice(qQ--, 1);
      collapse(d, b0);
    }
  }
  for (let b1 = 0; b1 < d.rises.length; b1++) {
    let b5 = d.rises[b1];
    if (d.f - b5.f0 >= b5.warn) {
      d.rises.splice(b1--, 1);
      applyRise(d, b5.n, b5.holes);
    }
  }
  for (let b6 = 0; b6 < d.pieces.length; b6++) {
    let b7 = d.pieces[b6];
    let b8 = d.f - b7.f0;
    if (b7.mode === "hard" || b7.mode === "nudge") {
      if (b8 < b7.warnF) {
        if (b7.mode === "nudge") {
          steerNudge(d, b7);
        }
        continue;
      }
      b7.y = Math.min(b7.ly, b7.y + 3);
      if (b7.y >= b7.ly) {
        lockPiece(d, b7);
      }
    } else {
      let bY = Math.floor(b8 / (b7.bf / (b7.tum ? 4 : 2)));
      while (b7.done < bY) {
        b7.done++;
        if (b7.r !== b7.tr || b7.laps > 0) {
          let be = (b7.r + 1) % 4;
          b7.r = be;
          b7.x = inBounds(b7.t, be, b7.x);
          if (be === b7.tr && b7.laps > 0) {
            b7.laps--;
          }
        } else if (b7.x !== b7.tx) {
          b7.x += Math.sign(b7.tx - b7.x);
        }
      }
      let by = Math.floor(b8 * b7.rpb / b7.bf);
      while (b7.rows < by && !b7.locked) {
        b7.rows++;
        if (b7.y + 1 >= b7.ly) {
          b7.y = b7.ly;
          lockPiece(d, b7);
        } else {
          b7.y++;
        }
      }
    }
    if (b7.locked) {
      d.pieces.splice(b6--, 1);
    }
  }
  for (let bq = 0; bq < d.lasers.length; bq++) {
    let bH = d.lasers[bq];
    if (d.f - bH.f0 === 0 && bH.skin === "blaster") {
      d.fx.push("blastercharge");
    }
    if (d.f - bH.f0 === bH.warn) {
      d.fx.push(bH.skin === "knight" ? "knightcut" : bH.skin === "blaster" ? "blaster" : bH.skin === "static" ? "static" : "laser");
    }
    if (d.f - bH.f0 > bH.warn + bH.fire + 6) {
      d.lasers.splice(bq--, 1);
    }
  }
  for (let bt = 0; bt < d.sweeps.length; bt++) {
    let bA = d.sweeps[bt];
    if (d.f - bA.f0 === bA.warn) {
      d.fx.push("sweep");
    }
    if (d.f - bA.f0 > bA.warn + bA.travel) {
      d.sweeps.splice(bt--, 1);
    }
  }
  for (let bO = 0; bO < d.spins.length; bO++) {
    let bV = d.spins[bO];
    let bX = d.f - bV.f0 - bV.warn;
    if (bX >= 0 && bX % Math.round(bV.bf) === 0 && bX < bV.n * bV.bf) {
      d.fx.push("spin");
    }
    if (bX > bV.n * bV.bf + 6) {
      d.spins.splice(bO--, 1);
    }
  }
  let D = surfaceY(d);
  for (let bJ = 0; bJ < d.curtains.length; bJ++) {
    let bI = d.curtains[bJ];
    let bP = d.f - bI.f0;
    if (!(bP < bI.warn)) {
      if (bI.up) {
        if (curtainY(bI, d.f) < -lB) {
          d.curtains.splice(bJ--, 1);
        }
        continue;
      }
      if ((bP - bI.warn) * bI.v > D - lB + 2 && (d.curtains.splice(bJ--, 1), bI.lock)) {
        let bU = Math.floor(D / lB) - 1;
        if (bU >= 0) {
          d.stack[bU] = new Array(lU).fill(8);
          d.sv++;
          queueClears(d);
          d.fx.push("slam");
          d.shake = Math.max(d.shake, 5);
        }
      }
    }
  }
  for (let bG = 0; bG < d.quakes.length; bG++) {
    let bK = d.quakes[bG];
    if ((d.f - bK.f0) * bK.v > Math.max(bK.x, lE - bK.x) + lB) {
      d.quakes.splice(bG--, 1);
    }
  }
  for (let bZ = 0; bZ < d.kslashes.length; bZ++) {
    let bQ = d.kslashes[bZ];
    if (d.f - bQ.f0 === bQ.warn) {
      d.fx.push("kslash");
    }
    if (d.f - bQ.f0 > bQ.warn + bQ.act + 10) {
      d.kslashes.splice(bZ--, 1);
    }
  }
  if (d.sbs.length) {
    let s0 = columnTops(d);
    for (let s1 = 0; s1 < d.sbs.length; s1++) {
      let s4 = d.sbs[s1];
      if (d.f - s4.f0 - s4.warn < 0) {
        continue;
      }
      let [s5, s6] = sbPos(s4, d.f);
      if (s4.k === "bomb") {
        if (s4.land < 0) {
          if (s6 + 8 >= s0[s4.col]) {
            s4.land = d.f;
            s4.by = s0[s4.col] - 9;
            d.fx.push("bombland");
          }
        } else if (s4.boom < 0 && d.f - s4.land >= s4.fuse) {
          s4.boom = d.f;
          d.fx.push("bomb");
          d.shake = Math.max(d.shake, 4);
        } else if (s4.boom >= 0 && d.f - s4.boom > jc + 6) {
          d.sbs.splice(s1--, 1);
        }
        continue;
      }
      if (s4.k === "pipis") {
        if (s6 + 5 >= s0[s4.col]) {
          for (let sL of pipisShards(d, s4, s0[s4.col])) {
            d.debris.push(sL);
          }
          d.bursts.push({
            f0: d.f,
            cells: [],
            pipis: 1,
            x: s4.x0,
            y: s0[s4.col] - 6
          });
          d.fx.push("pipisburst");
          d.sbs.splice(s1--, 1);
        }
        continue;
      }
      if (s4.dir > 0 && s5 > lE + 30 || s4.dir < 0 && s5 < -30) {
        d.sbs.splice(s1--, 1);
      }
    }
  }
  for (let sO = 0; sO < d.debris.length; sO++) {
    let sV = d.debris[sO];
    sV.x += sV.vx;
    sV.y += sV.vy;
    sV.vy += 0.13;
    if (sV.y > lT + 12 || sV.x < -12 || sV.x > lE + 12) {
      d.debris.splice(sO--, 1);
    }
  }
  for (let sW = 0; sW < d.rings.length; sW++) {
    if (d.f - d.rings[sW].f0 > 30) {
      d.rings.splice(sW--, 1);
    }
  }
  for (let sF = 0; sF < d.texts.length; sF++) {
    if (d.f - d.texts[sF].f0 > d.texts[sF].dur) {
      d.texts.splice(sF--, 1);
    }
  }
  for (let sI = 0; sI < d.bursts.length; sI++) {
    if (d.f - d.bursts[sI].f0 > 30) {
      d.bursts.splice(sI--, 1);
    }
  }
  for (let sP = 0; sP < d.trails.length; sP++) {
    if (d.f - d.trails[sP].f0 > 10) {
      d.trails.splice(sP--, 1);
    }
  }
  if (d.banner && d.f - d.banner.f0 > d.banner.dur) {
    d.banner = null;
  }
  for (let sk = 0; sk < d.pops.length; sk++) {
    if (d.f - d.pops[sk].f0 > 36) {
      d.pops.splice(sk--, 1);
    }
  }
  for (let sx = 0; sx < d.lockfx.length; sx++) {
    if (d.f - d.lockfx[sx].f0 > 8) {
      d.lockfx.splice(sx--, 1);
    }
  }
  if (d.shake > 0) {
    d.shake--;
  }
  let qi = stackHeight(d.stack);
  if (qi > d.peak) {
    d.peak = qi;
  }
}
w(simStep, "simStep");
function surfaceY(d) {
  for (let qi = 0; qi < lG; qi++) {
    if (d.stack[qi].some(qQ => qQ)) {
      return qi * lB;
    }
  }
  return lT;
}
w(surfaceY, "surfaceY");
function columnTops(d) {
  let qi = new Array(lU).fill(lT);
  for (let qQ = 0; qQ < lU; qQ++) {
    for (let b0 = 0; b0 < lG; b0++) {
      if (d.stack[b0][qQ]) {
        qi[qQ] = b0 * lB;
        break;
      }
    }
  }
  return qi;
}
w(columnTops, "columnTops");
function sbPos(d, j) {
  let qQ = Math.max(0, j - d.f0 - d.warn);
  return [d.x0 + d.vx * qQ, d.y0 + d.vy * qQ + d.g * 0.5 * qQ * qQ + (d.wob ? d.wob * Math.sin(qQ * 0.3 + d.i * 1.7) : 0)];
}
w(sbPos, "sbPos");
const jR = {
  suit: [6, 6],
  head: [7, 5],
  pipis: [5, 4],
  bomb: [7, 7]
};
var jz = jR;
var jc = 5;
function bombAt(j, D) {
  if (j.land >= 0) {
    return [j.x0, j.by];
  } else {
    return sbPos(j, D);
  }
}
w(bombAt, "bombAt");
function pipisShards(j, D, qC) {
  let qQ = [];
  let b0 = D.x0;
  let b1 = qC - 6;
  for (let b6 = 0; b6 < 4; b6++) {
    let b7 = hash2(D.id * 4 + b6, j.seed);
    qQ.push({
      x: b0,
      y: b1,
      vx: [-2.2, -1, 1, 2.2][b6] * (0.8 + b7 * 0.4),
      vy: -(2.8 + hash2(D.id * 4 + b6, j.seed + 3) * 1),
      c: 0,
      harm: 1,
      shard: 1,
      spr: "spr_pipis_egg_piece",
      fr: b6 % 3
    });
  }
  return qQ;
}
w(pipisShards, "pipisShards");
function kslashRects(j, D) {
  for (let qQ = -320; qQ <= 320; qQ += 6) {
    let b5 = j.x + j.dx * qQ;
    let b6 = j.y + j.dy * qQ;
    if (!(b5 < -8) && !(b5 > lE + 8) && !(b6 < -8) && !(b6 > lT + 8)) {
      D(b5 - 6, b6 - 6, b5 + 6, b6 + 6);
    }
  }
}
w(kslashRects, "kslashRects");
function curtainY(d, j) {
  let qr = Math.max(0, j - d.f0 - d.warn) * d.v;
  if (d.up) {
    return d.y0 - qr;
  } else {
    return qr;
  }
}
w(curtainY, "curtainY");
function quakeFronts(d, j) {
  let qi = (j - d.f0) * d.v;
  return [d.x - qi, d.x + qi];
}
w(quakeFronts, "quakeFronts");
var jN = 2;
function sweepCells(d, j) {
  let qu = d.f - j.f0;
  if (qu < j.warn) {
    return null;
  }
  let qi = (qu - j.warn) / j.travel;
  if (j.spin === 0) {
    let b6 = lE + lB * 4;
    let b7 = j.dir > 0 ? lB * -4 + qi * b6 : lE - qi * b6;
    return lZ[j.t][j.r0].map(([b8, b9]) => [b7 + b8 * lB, (j.row + b9) * lB]);
  }
  let b0 = lE + lB * 3;
  let b1 = j.dir > 0 ? lB * -3 + qi * b0 : lE - qi * b0;
  let b5 = Math.floor((qu - j.warn) / Math.max(1, j.bf / 4)) % 4;
  return lZ[2][j.dir > 0 ? b5 : (4 - b5) % 4].map(([b9, bd]) => [b1 + b9 * lB, (j.row + bd) * lB]);
}
w(sweepCells, "sweepCells");
function sweepRows(j) {
  let qu = 99;
  let qr = -1;
  let qi = j.spin === 0 ? [j.r0] : [0, 1, 2, 3];
  let qQ = j.spin === 0 ? j.t : 2;
  for (let b5 of qi) {
    let [b8, b9] = spanY(qQ, b5);
    qu = Math.min(qu, b8);
    qr = Math.max(qr, b9);
  }
  return [j.row + qu, j.row + qr];
}
w(sweepRows, "sweepRows");
function spinPose(d, j) {
  let qQ = d.f - j.f0 - j.warn;
  if (qQ < 0) {
    return -1;
  }
  let b0 = Math.floor(qQ / j.bf);
  if (b0 < j.n) {
    return b0;
  } else {
    return -1;
  }
}
w(spinPose, "spinPose");
function spinCells(d, j) {
  const D = {
    murjM: "obj_selfsteer",
    ABCSL: function (b0, b1) {
      return b0 < b1;
    },
    YJBzD: function (b0, b1) {
      return b0 !== b1;
    },
    qFVXe: "XVIQh",
    sSmoe: "mmZbL",
    dsDLu: function (b0, b1) {
      return b0 - b1;
    },
    AJVJJ: function (b0, b1) {
      return b0 + b1;
    },
    dvCEb: function (b0, b1) {
      return b0 * b1;
    },
    bUSBg: function (b0, b1) {
      return b0 / b1;
    },
    GYJdj: function (b0, b1) {
      return b0 - b1;
    },
    iUcXP: function (b0, b1) {
      return b0 * b1;
    },
    OYgGQ: function (b0, b1) {
      return b0 % b1;
    },
    fCeVb: function (b0, b1) {
      return b0 * b1;
    }
  };
  const qr = D;
  let qi = qr.OYgGQ(qr.AJVJJ(qr.OYgGQ(qr.fCeVb(j, d.dir), 4), 4), 4);
  return li[d.p].map(([b0, b1]) => {
    let b6 = b0;
    let b7 = b1;
    for (let bd = 0; qr.ABCSL(bd, qi); bd++) {
      if (qr.YJBzD(qr.qFVXe, qr.sSmoe)) {
        let bl = b6;
        b6 = -b7;
        b7 = bl;
      } else {
        j.add(qr.murjM);
        return D;
      }
    }
    return [qr.dsDLu(qr.AJVJJ(d.cx, qr.dvCEb(b6, d.sc)), qr.bUSBg(d.sc, 2)), qr.GYJdj(qr.AJVJJ(d.cy, qr.iUcXP(b7, d.sc)), qr.bUSBg(d.sc, 2))];
  });
}
w(spinCells, "spinCells");
function forEachHazard(d, j) {
  for (let qi of d.pieces) {
    let qQ = d.f - qi.f0;
    if ((qi.mode !== "nudge" || !(qQ < qi.warnF)) && (qi.mode !== "hard" || !(qQ < qi.matF))) {
      for (let [b0, b1] of lZ[qi.t][qi.r]) {
        let b5 = (qi.y + b1) * lB;
        if (b5 + lB <= 0) {
          continue;
        }
        let b6 = (qi.x + b0) * lB;
        j(b6 + jN, b5 + jN, b6 + lB - jN, b5 + lB - jN);
      }
    }
  }
  for (let b9 of d.lasers) {
    let bl = d.f - b9.f0;
    if (b9.h) {
      let by = b9.c * lB;
      if (bl < b9.warn) {
        if (bl >= b9.mat && isI(b9)) {
          if (b9.h > 0) {
            j(jN, by + jN, lB * 4 - jN, by + lB - jN);
          } else {
            j(lE - lB * 4 + jN, by + jN, lE - jN, by + lB - jN);
          }
        }
        continue;
      }
      if (bl < b9.warn + b9.fire) {
        j(0, by + 1, lE, by + lB - 1);
      }
      continue;
    }
    let bj = b9.c * lB;
    if (bl < b9.warn) {
      if (bl >= b9.mat && isI(b9)) {
        j(bj + jN, jN, bj + lB - jN, lB * 4 - jN);
      }
      continue;
    }
    if (bl < b9.warn + b9.fire) {
      j(bj + 1, 0, bj + lB - 1, lT);
    }
  }
  for (let bq of d.sweeps) {
    let bb = sweepCells(d, bq);
    if (bb) {
      for (let [bs, bM] of bb) {
        j(bs + jN, bM + jN, bs + lB - jN, bM + lB - jN);
      }
    }
  }
  for (let bL of d.spins) {
    let bv = spinPose(d, bL);
    if (bv >= 0) {
      for (let [bS, bA] of spinCells(bL, bv)) {
        j(bS + 3, bA + 3, bS + bL.sc - 3, bA + bL.sc - 3);
      }
    }
  }
  for (let bO of d.curtains) {
    if (d.f - bO.f0 < bO.warn) {
      continue;
    }
    let bV = curtainY(bO, d.f);
    if (bO.gw <= 0) {
      j(0, bV + jN, lE, bV + lB - jN);
      continue;
    }
    if (bO.gap > 0) {
      j(0, bV + jN, bO.gap * lB - jN, bV + lB - jN);
    }
    if (bO.gap + bO.gw < lU) {
      j((bO.gap + bO.gw) * lB + jN, bV + jN, lE, bV + lB - jN);
    }
  }
  if (d.quakes.length) {
    let bW = columnTops(d);
    for (let bF of d.quakes) {
      for (let bI of quakeFronts(bF, d.f)) {
        if (bI < -7 || bI > lE + 7) {
          continue;
        }
        let bP = Math.max(0, Math.min(lU - 1, Math.floor(bI / lB)));
        j(bI - 7, bW[bP] - 10, bI + 7, bW[bP]);
      }
    }
  }
  for (let bk of d.debris) {
    if (bk.harm) {
      j(bk.x - 3, bk.y - 3, bk.x + 3, bk.y + 3);
    }
  }
  for (let bx of d.kslashes) {
    let bR = d.f - bx.f0;
    if (bR >= bx.warn && bR < bx.warn + bx.act) {
      kslashRects(bx, j);
    }
  }
  for (let bc of d.sbs) {
    if (d.f - bc.f0 < bc.warn) {
      continue;
    }
    if (bc.k === "bomb") {
      let [bT, bN] = bombAt(bc, d.f);
      if (bc.boom >= 0) {
        if (d.f - bc.boom < jc) {
          j(0, bN - 7, lE, bN + 7);
          j(bT - 7, 0, bT + 7, lT);
        }
        continue;
      }
      if (bN + 7 > 0) {
        j(bT - 7, bN - 7, bT + 7, bN + 7);
      }
      continue;
    }
    let [bU, bG] = sbPos(bc, d.f);
    let [bB, bE] = jz[bc.k];
    if (!(bU + bB < 0) && !(bU - bB > lE) && !(bG + bE < 0)) {
      j(bU - bB, bG - bE, bU + bB, bG + bE);
    }
  }
}
w(forEachHazard, "forEachHazard");
var isI = w(l => !l.skin || l.skin === "i", "isI");
function hitsRect(d, j, D, qC, qu) {
  let qi = Math.max(0, Math.floor(j / lB));
  let qQ = Math.min(lU - 1, Math.floor((qC - 1) / lB));
  let b0 = Math.max(0, Math.floor(D / lB));
  let b1 = Math.min(lG - 1, Math.floor((qu - 1) / lB));
  for (let b9 = b0; b9 <= b1; b9++) {
    for (let bd = qi; bd <= qQ; bd++) {
      if (d.stack[b9][bd] && j < (bd + 1) * lB - jN && qC > bd * lB + jN && D < (b9 + 1) * lB - jN && qu > b9 * lB + jN) {
        return true;
      }
    }
  }
  let b7 = false;
  forEachHazard(d, (bl, bj, bD, bf) => {
    {
      if (!b7 && j < bD && qC > bl && D < bf && qu > bj) {
        b7 = true;
      }
    }
  });
  return b7;
}
w(hitsRect, "hitsRect");
var jC = 4;
var ju = 16;
var soulHits = w((j, D, qC) => hitsRect(j, D + jC - lN, qC + jC - lw, D + ju - lN, qC + ju - lw), "soulHits");
var soulCol = w(l => Math.max(0, Math.min(lU - 1, Math.floor((l + 10 - lN) / lB))), "soulCol");
function cloneState(l) {
  return JSON.parse(JSON.stringify(l));
}
w(cloneState, "cloneState");
function stateDigest(j) {
  let qC = 2166136261;
  let qu = b0 => {
    qC = Math.imul(qC ^ (b0 | 0), 16777619) >>> 0;
  };
  qu(j.f);
  qu(j.ei);
  qu(j.lines);
  qu(j.score);
  qu(j.pieces.length);
  qu(j.rng);
  qu(j.steer);
  qu(j.spins.length);
  qu(j.sbs.length);
  qu(j.kslashes.length);
  qu(j.held);
  for (let b0 of j.stack) {
    for (let b1 of b0) {
      qu(b1);
    }
  }
  for (let b5 of j.pieces) {
    qu(b5.t);
    qu(b5.r);
    qu(b5.x);
    qu(b5.y);
    qu(b5.ly);
  }
  for (let b6 of j.debris) {
    qu(Math.round(b6.x * 16));
    qu(Math.round(b6.y * 16));
  }
  return qC >>> 0;
}
w(stateDigest, "stateDigest");
var D1 = lN + 1;
var D2 = lN + lE - 18;
var D3 = lw + 1;
var D4 = lw + lT - 18;
var D5 = 30;
var D6 = (D2 - D1 >> 1) + 2;
var D7 = (D4 - D3 >> 1) + 2;
function paintRect(d, l, j, D, qC) {
  let b1 = Math.max(0, l + lN - ju + 1 - D1 >> 1);
  let b5 = Math.min(D6 - 1, D + lN - jC - 1 - D1 >> 1);
  let b6 = Math.max(0, j + lw - ju + 1 - D3 >> 1);
  let b7 = Math.min(D7 - 1, qC + lw - jC - 1 - D3 >> 1);
  if (!(b5 < b1) && !(b7 < b6)) {
    for (let b8 = b6; b8 <= b7; b8++) {
      d.fill(1, b8 * D6 + b1, b8 * D6 + b5 + 1);
    }
  }
}
w(paintRect, "paintRect");
function unsafeMap(j, D, qC) {
  if (qC.sv !== j.sv || qC.map === null) {
    qC.map = qC.map || new Uint8Array(D6 * D7);
    qC.map.fill(0);
    for (let b0 = 0; b0 < lG; b0++) {
      for (let b1 = 0; b1 < lU; b1++) {
        if (j.stack[b0][b1]) {
          paintRect(qC.map, b1 * lB + jN, b0 * lB + jN, (b1 + 1) * lB - jN, (b0 + 1) * lB - jN);
        }
      }
    }
    qC.sv = j.sv;
  }
  D.set(qC.map);
  forEachHazard(j, (b5, b6, b7, b8) => paintRect(D, Math.floor(b5), Math.floor(b6), Math.ceil(b7), Math.ceil(b8)));
}
w(unsafeMap, "unsafeMap");
var Dd = [[0, 0], [-4, 0], [4, 0], [0, -4], [0, 4], [-4, -4], [4, -4], [-4, 4], [4, 4]];
var Dl = null;
function lookahead(d) {
  if (!Dl || Dl.seed !== d.seed || Dl.f !== d.f || Dl.digest !== stateDigest(d)) {
    const qr = {
      sv: -1,
      map: null
    };
    let qi = cloneState(d);
    let qQ = qr;
    let b0 = [];
    let b1 = [];
    for (let b5 = 0; b5 < D5; b5++) {
      simStep(qi);
      let b6 = new Uint8Array(D6 * D7);
      unsafeMap(qi, b6, qQ);
      b0.push(b6);
      b1.push(stateDigest(qi));
    }
    Dl = {
      seed: d.seed,
      f: d.f,
      F: qi,
      sc: qQ,
      maps: b0,
      digs: b1,
      digest: 0,
      builds: (Dl ? Dl.builds : 0) + 1
    };
  }
  return Dl.maps;
}
w(lookahead, "lookahead");
function lookaheadAdvance(j) {
  if (!Dl || Dl.seed !== j.seed || Dl.f + 1 !== j.f) {
    return;
  }
  if (Dl.digs[0] !== stateDigest(j)) {
    Dl = {
      ...Dl,
      f: -99
    };
    return;
  }
  Dl.digs.shift();
  let qi = Dl.maps.shift();
  simStep(Dl.F);
  unsafeMap(Dl.F, qi, Dl.sc);
  Dl.maps.push(qi);
  Dl.digs.push(stateDigest(Dl.F));
  Dl.f = j.f;
  Dl.digest = stateDigest(j);
}
w(lookaheadAdvance, "lookaheadAdvance");
function planMoves(d, l, j) {
  let qC = lookahead(d);
  Dl.digest = stateDigest(d);
  let qu = (bq, bb) => (bb - D3 >> 1) * D6 + (bq - D1 >> 1);
  let qr = bq => Math.max(D1, Math.min(D2, bq));
  let qi = bq => Math.max(D3, Math.min(D4, bq));
  let qQ = [{
    x: qr(l),
    y: qi(j),
    p: -1,
    a: 0
  }];
  let b0 = [qQ];
  let b1 = new Int32Array(D6 * D7).fill(-1);
  for (let bq = 0; bq < D5; bq++) {
    let bb = qC[bq];
    let bs = [];
    for (let bM = 0; bM < qQ.length; bM++) {
      {
        let bH = qQ[bM];
        for (let bt = 0; bt < 9; bt++) {
          {
            let bL = qr(bH.x + Dd[bt][0]);
            let bv = qi(bH.y + Dd[bt][1]);
            let bS = qu(bL, bv);
            const bA = {
              x: bL,
              y: bv,
              p: bM,
              a: bt
            };
            if (!(b1[bS] === bq) && !bb[bS]) {
              b1[bS] = bq;
              bs.push(bA);
            }
          }
        }
      }
    }
    if (!bs.length) {
      break;
    }
    b0.push(bs);
    qQ = bs;
  }
  let b5 = b0.length - 1;
  let b6 = b0[b5];
  const b7 = {
    dirs: [0],
    depth: 0
  };
  if (b5 === 0) {
    return b7;
  }
  let b9 = qC[b5 - 1];
  let bd = (bV, bX) => bV < D1 || bV > D2 || bX < D3 || bX > D4 || b9[qu(bV, bX)] ? 0 : 1;
  let bl = D3 + (D4 - D3) * 0.42;
  let bj = (D1 + D2) / 2;
  let bD = 0;
  let bf = -1000000000;
  for (let bV = 0; bV < b6.length; bV++) {
    let {
      x: bX,
      y: bJ
    } = b6[bV];
    let bW = 0;
    for (let bF of [8, 16, 26]) {
      bW += bd(bX - bF, bJ) + bd(bX + bF, bJ) + bd(bX, bJ - bF) + bd(bX, bJ + bF) + bd(bX - bF, bJ - bF) + bd(bX + bF, bJ - bF) + bd(bX - bF, bJ + bF) + bd(bX + bF, bJ + bF);
    }
    bW = bW * 4 - Math.abs(bJ - bl) * 0.05 - Math.abs(bX - bj) * 0.02;
    if (bW > bf) {
      bf = bW;
      bD = bV;
    }
  }
  let bm = new Array(b5);
  for (let bI = b5, bP = bD; bI >= 1; bI--) {
    {
      let bc = b0[bI][bP];
      bm[bI - 1] = bc.a;
      bP = bc.p;
    }
  }
  const be = {
    dirs: bm,
    depth: b5
  };
  return be;
}
w(planMoves, "planMoves");
function autoplayKeys(j, D, qC) {
  if (!D) {
    return null;
  }
  lookaheadAdvance(j);
  if (qC.f + 1 !== j.f || qC.x !== D.x || qC.y !== D.y || !(qC.k < 3) || !(qC.dirs.length >= 2) || qC.seed !== j.seed) {
    let b1 = planMoves(j, D.x, D.y);
    qC.dirs = b1.dirs;
    qC.depth = b1.depth;
    qC.k = 0;
    qC.seed = j.seed;
    qC.plans = (qC.plans | 0) + 1;
  }
  let qr = qC.dirs.shift() || 0;
  qC.k++;
  qC.f = j.f;
  qC.x = Math.max(D1, Math.min(D2, D.x + Dd[qr][0]));
  qC.y = Math.max(D3, Math.min(D4, D.y + Dd[qr][1]));
  return Dd[qr];
}
w(autoplayKeys, "autoplayKeys");
var Dg = [null, {
  b: "#29adff",
  l: "#a8e4ff",
  s: "#1a6fb8",
  d: "#08223f"
}, {
  b: "#ffd23f",
  l: "#fff4b0",
  s: "#c48a16",
  d: "#402a05"
}, {
  b: "#c45fdc",
  l: "#eeb0fa",
  s: "#7c2c98",
  d: "#280a34"
}, {
  b: "#7fd23c",
  l: "#cff29f",
  s: "#478c24",
  d: "#11300a"
}, {
  b: "#ff5c8a",
  l: "#ffb8cc",
  s: "#b02d58",
  d: "#3a0a1c"
}, {
  b: "#5a6cf2",
  l: "#b3bbff",
  s: "#343fa8",
  d: "#0e123c"
}, {
  b: "#ff9a3c",
  l: "#ffd6a8",
  s: "#b8621a",
  d: "#3c1e05"
}, {
  b: "#6c6c80",
  l: "#a4a4b8",
  s: "#46465a",
  d: "#141418"
}, {
  b: "#ffe04a",
  l: "#ffffff",
  s: "#d49a12",
  d: "#4a3000"
}];
var DL = "#ff0000";
var Dv = ["spr_spadebullet", "spr_diamondbullet", "spr_clubsbullet", "spr_heartbullet"];
var DS = ["spr_bomb_spade", "spr_bomb_club", "spr_bomb_diamond"];
var hexRgb = w(j => {
  let qC = parseInt(j.slice(1), 16);
  return [qC >> 16, qC >> 8 & 255, qC & 255];
}, "hexRgb");
var rgba = w((j, D) => {
  let [qi, qQ, b0] = hexRgb(j);
  return "rgba(" + qi + "," + qQ + "," + b0 + "," + Math.max(0, Math.min(1, D)).toFixed(3) + ")";
}, "rgba");
function mkCanvas(d, j) {
  try {
    if (typeof document !== "undefined" && document.createElement) {
      let qQ = document.createElement("canvas");
      qQ.width = d;
      qQ.height = j;
      if (qQ.getContext && qQ.getContext("2d")) {
        return qQ;
      }
    }
    if (typeof OffscreenCanvas !== "undefined") {
      return new OffscreenCanvas(d, j);
    }
  } catch {}
  return null;
}
w(mkCanvas, "mkCanvas");
function paintBlock(d, l, j, D, qC) {
  let b1 = Dg[qC];
  if (!b1) {
    return;
  }
  let b5 = D >= 14 ? 2 : 1;
  d.fillStyle = b1.d;
  d.fillRect(l, j, D, D);
  d.fillStyle = b1.b;
  d.fillRect(l + 1, j + 1, D - 2, D - 2);
  d.fillStyle = b1.l;
  d.fillRect(l + 1, j + 1, D - 2, b5);
  d.fillRect(l + 1, j + 1, b5, D - 2);
  d.fillStyle = b1.s;
  d.fillRect(l + 1 + b5, j + D - 1 - b5, D - 2 - b5, b5);
  d.fillRect(l + D - 1 - b5, j + 1 + b5, b5, D - 2 - b5);
  d.fillStyle = b1.b;
  d.fillRect(l + D - 1 - b5, j + 1, b5, b5);
  d.fillRect(l + 1, j + D - 1 - b5, b5, b5);
  if (D >= 14) {
    let b7 = b5 + 3;
    let b8 = D - b7 * 2;
    d.fillStyle = b1.s;
    d.fillRect(l + b7, j + b7, b8, 1);
    d.fillRect(l + b7, j + b7, 1, b8);
    d.fillStyle = b1.l;
    d.fillRect(l + b7 + 1, j + b7 + b8 - 1, b8 - 1, 1);
    d.fillRect(l + b7 + b8 - 1, j + b7 + 1, 1, b8 - 1);
  }
  if (D >= 10) {
    d.fillStyle = "#ffffff";
    d.fillRect(l + b5 + 1, j + b5 + 1, 2, 1);
    d.fillRect(l + b5 + 1, j + b5 + 2, 1, 1);
  }
}
w(paintBlock, "paintBlock");
var DJ = new Map();
function blockSprite(j, D) {
  let qr = j * 1000 + D;
  if (DJ.has(qr)) {
    return DJ.get(qr);
  }
  let qQ = mkCanvas(D, D);
  if (qQ) {
    paintBlock(qQ.getContext("2d"), 0, 0, D, j);
  }
  DJ.set(qr, qQ);
  return qQ;
}
w(blockSprite, "blockSprite");
function drawBlock(j, D, qC, qu, qr, qi = 1) {
  if (qi <= 0) {
    return;
  }
  D = Math.round(D);
  qC = Math.round(qC);
  let b0 = blockSprite(qr, qu);
  if (qi !== 1) {
    j.globalAlpha = qi;
  }
  if (b0) {
    j.drawImage(b0, D, qC);
  } else {
    paintBlock(j, D, qC, qu, qr);
  }
  if (qi !== 1) {
    j.globalAlpha = 1;
  }
}
w(drawBlock, "drawBlock");
function frameRect(d, j, D, qC, qu, qr, qi = 1) {
  if (!(qi <= 0)) {
    j = Math.round(j);
    D = Math.round(D);
    d.globalAlpha = qi;
    d.fillStyle = qr;
    d.fillRect(j, D, qC, 1);
    d.fillRect(j, D + qu - 1, qC, 1);
    d.fillRect(j, D + 1, 1, qu - 2);
    d.fillRect(j + qC - 1, D + 1, 1, qu - 2);
    d.globalAlpha = 1;
  }
}
w(frameRect, "frameRect");
var outlineCell = w((j, D, qC, qu, qr, qi) => frameRect(j, D + 1, qC + 1, qu - 2, qu - 2, qr, qi), "outlineCell");
function txt(d, j, D, qC, qu, qr = "fnt_main", qi = "left", qQ = 1) {
  try {
    d.draw_set_font(qr);
    d.draw_set_color(qu);
    d.draw_set_halign(qi);
    if (qQ !== 1) {
      d.draw_set_alpha(qQ);
    }
    d.draw_text(Math.round(j), Math.round(D), qC);
    if (qQ !== 1) {
      d.draw_set_alpha(1);
    }
    d.draw_set_halign("left");
  } catch {}
}
w(txt, "txt");
function darkbox(d, l, j, D, qC, qu = 0) {
  try {
    d.draw_set_color("#000000");
    d.draw_set_alpha(1);
    d.draw_rectangle(l + 10, j + 10, D - 10, qC - 10, false);
    let b5 = D - l - 63;
    let b6 = qC - j - 63;
    if (b5 > 0) {
      d.draw_sprite_stretched("spr_textbox_top", 0, l + 32, j, b5, 32);
      d.draw_sprite_ext("spr_textbox_top", 0, l + 32, qC + 1, b5, -2, 0, "#ffffff", 1);
    }
    if (b6 > 0) {
      d.draw_sprite_ext("spr_textbox_left", 0, D + 1, j + 32, -2, b6, 0, "#ffffff", 1);
      d.draw_sprite_ext("spr_textbox_left", 0, l, j + 32, 2, b6, 0, "#ffffff", 1);
    }
    let b7 = Math.floor(qu / 10) % 8;
    d.draw_sprite_ext("spr_textbox_topleft", b7, l, j, 2, 2, 0, "#ffffff", 1);
    d.draw_sprite_ext("spr_textbox_topleft", b7, D + 1, j, -2, 2, 0, "#ffffff", 1);
    d.draw_sprite_ext("spr_textbox_topleft", b7, l, qC + 1, 2, -2, 0, "#ffffff", 1);
    d.draw_sprite_ext("spr_textbox_topleft", b7, D + 1, qC + 1, -2, -2, 0, "#ffffff", 1);
  } catch {}
}
w(darkbox, "darkbox");
var field = w(() => U.first("obj_tetrisfield"), "field");
function strW(d, j) {
  let qQ = P[d];
  if (!qQ || !qQ.glyphs) {
    return j.length * 14;
  }
  let b0 = 0;
  for (let b1 of j) {
    let b5 = qQ.glyphs[b1.charCodeAt(0)];
    b0 += b5 ? b5[4] : 14;
  }
  return b0;
}
w(strW, "strW");
var frac = w(l => l - Math.floor(l), "frac");
var beatOf = w(l => timeBeat(Math.max(0, l ? l.f : 0) / ds), "beatOf");
function reduced() {
  try {
    let qr = M("a11y", "flash", null);
    if (qr !== null) {
      return !!qr;
    } else {
      return typeof window !== "undefined" && !!window.matchMedia && !!window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
  } catch {
    return false;
  }
}
w(reduced, "reduced");
function hash2(d, j) {
  let qQ = Math.imul(d ^ -1640531527, 2246822507) ^ Math.imul(j + 2135587861, 3266489909);
  qQ ^= qQ >>> 15;
  qQ = Math.imul(qQ, 668265261);
  qQ ^= qQ >>> 13;
  return (qQ >>> 0) / 4294967296;
}
w(hash2, "hash2");
var DT = {
  "#ffd84a": "#ffff00",
  "#ff4040": "#ff0000"
};
function setupTetrisStats(d) {
  X.monstername[d] = "TETRIS";
  X.monstermaxhp[d] = 4000;
  X.monsterhp[d] = 4000;
  X.monsterat[d] = 14;
  X.monsterdf[d] = 0;
  X.monsterexp[d] = 0;
  X.monstergold[d] = 0;
  X.sparepoint[d] = 0;
  X.mercymod[d] = 0;
  X.mercymax[d] = 100;
  X.canact[d][0] = 1;
  X.actname[d][0] = "Check";
  X.actdesc[d][0] = "Seven pieces.#Survive to the#last line.";
  X.battlemsg[0] = "* The pieces start to fall.";
}
w(setupTetrisStats, "setupTetrisStats");
var obj_tetris_enemy = class si extends v {
  create() {
    const d = {
      turns: 0,
      talked: 0,
      talktimer: 0,
      talkmax: 60,
      attacked: 0
    };
    d.state = 0;
    d.flash = 0;
    d.siner = 0;
    d.hurt = 0;
    d.hurttimer = 0;
    d.acting = 0;
    d.actcon = 0;
    d.con = 0;
    d.mercymod = 0;
    d.mytarget = 0;
    d.won = 0;
    d.soulSent = 0;
    Object.assign(this, d);
    this.image_alpha = 0;
  }
  userEvent(d) {
    if (d === 12) {
      X.monsterx[this.myself] = this.x;
      X.monstery[this.myself] = this.y;
    }
  }
  step() {
    let D = this.myself;
    if (X.monster[D] !== 1) {
      return;
    }
    if (X.mnfight !== 2) {
      X.mnfight = 2;
      X.myfight = -1;
      X.charturn = S();
    }
    if (!U.exists("obj_moveheart") && !U.exists("obj_heart") && !this.soulSent) {
      this.soulSent = 1;
      O();
    }
    if (!U.exists("obj_growtangle") && !this.won) {
      let b0 = E(lN + lE / 2, lw + lT / 2, A);
      if (b0) {
        b0.maxxscale = Yn;
        b0.maxyscale = Yo;
        b0.noborder = true;
      }
    }
    if (this.attacked === 0 && U.exists("obj_growtangle")) {
      this.attacked = 1;
      let b1 = E(0, 0, mt);
      if (!U.exists("obj_tetrisfx")) {
        E(0, 0, qE);
      }
      if (b1 && this.board && !this.board.ended) {
        b1.S = this.board;
        b1.track = null;
      }
    }
    if (X.turntimer < 300) {
      X.turntimer = 600;
    }
    let qi = field();
    if (qi && qi.S) {
      this.board = qi.S;
    }
    if (qi && qi.S && qi.S.ended && !this.won) {
      this.won = 1;
      U.with("obj_tetrisfield", b5 => b5.instance_destroy());
      U.with("obj_tetrisfx", b5 => b5.instance_destroy());
      cutDue(0, true);
      L();
    }
  }
  draw(j) {
    let qi = field();
    let qQ = qi && qi.S || this.board;
    if (!qQ) {
      return;
    }
    let b0 = j.ctx;
    b0.save();
    b0.imageSmoothingEnabled = false;
    drawPanel(j, b0, qQ);
    if (knightOnStage(qQ)) {
      b0.globalAlpha = 0.7;
      b0.fillStyle = "#000000";
      b0.fillRect(fs[0], fs[1], fs[2] - fs[0] + 2, ft[3] - fs[1] + 2);
      b0.globalAlpha = 1;
    }
    b0.restore();
  }
};
w(obj_tetris_enemy, "obj_tetris_enemy");
K(obj_tetris_enemy, "kinds", z("obj_tetris_enemy", v));
K(obj_tetris_enemy, "defaultDepth", 90);
K(obj_tetris_enemy, "defaultSprite", "spr_dummymonster");
var fe = obj_tetris_enemy;
var fs = [424, 6, 634, 148];
var ft = [424, 154, 634, 320];
function drawPieceAt(d, l, j, D, qC, qu, qr = 1) {
  let b0 = lZ[l][0];
  let b1 = 9;
  let b5 = 0;
  let b6 = 9;
  let b7 = 0;
  for (let [bj, bD] of b0) {
    b1 = Math.min(b1, bj);
    b5 = Math.max(b5, bj);
    b6 = Math.min(b6, bD);
    b7 = Math.max(b7, bD);
  }
  let bd = Math.round(j - (b5 - b1 + 1) * qC / 2);
  let bl = Math.round(D - (b7 - b6 + 1) * qC / 2);
  for (let [bf, bY] of b0) {
    drawBlock(d, bd + (bf - b1) * qC, bl + (bY - b6) * qC, qC, qu, qr);
  }
  return [bd, bl, (b5 - b1 + 1) * qC, (b7 - b6 + 1) * qC];
}
w(drawPieceAt, "drawPieceAt");
function crackMark(d, j, D, qC) {
  d.fillStyle = "#ffffff";
  let b0 = Math.max(1, Math.floor(qC / 6));
  for (let b5 = 0; b5 < 3; b5++) {
    d.fillRect(j + b0 + b5 * b0 * 1.5 | 0, D + b0 + b5 % 2 * b0 * 2 | 0, b0, b0 * 2);
  }
}
w(crackMark, "crackMark");
function drawPanel(d, l, j) {
  let qC = j.f >> 3 & 1;
  darkbox(d, fs[0], fs[1], fs[2], fs[3], Math.max(0, j.f));
  darkbox(d, ft[0], ft[1], ft[2], ft[3], Math.max(0, j.f) + 40);
  let qu = fs[0] + 22;
  let qr = fs[1] + 18;
  txt(d, qu, qr, "HOLD", "#ffffff");
  frameRect(l, qu, qr + 22, 64, 48, "#404040");
  if (j.held >= 0) {
    drawPieceAt(l, j.held, qu + 32, qr + 46, 12, ln);
  }
  if (j.holdfx && j.f - j.holdfx.f0 < 8) {
    frameRect(l, qu - 2, qr + 20, 68, 52, "#ffffff", 1 - (j.f - j.holdfx.f0) / 8);
  }
  let qi = X.tension || 0;
  let qQ = qi >= jX;
  if (j.held >= 0) {
    txt(d, qu, qr + 78, "[X] DROP", qC ? "#ffff00" : "#ffffff", "fnt_main");
  } else {
    txt(d, qu, qr + 78, qQ ? "[X] HOLD" : "TP 50%", qQ ? "#ffff00" : "#808080", "fnt_main");
  }
  {
    let by = Math.max(0, Math.min(1, qi / jX));
    l.fillStyle = "#402000";
    l.fillRect(qu, qr + 100, 64, 4);
    l.fillStyle = qQ ? "#ffa040" : "#b06020";
    l.fillRect(qu, qr + 100, Math.round(by * 64), 4);
  }
  let b5 = fs[0] + 108;
  let b6 = fs[1] + 18;
  txt(d, b5, b6, "NEXT", "#ffffff");
  (j3[Math.min(j.ei, j1.length)] || []).forEach((bm, be) => {
    let bH = be === 0 ? 12 : 8;
    let bt = be === 0 ? b5 + 40 : b5 + 18 + (be - 1) * 46;
    let bg = be === 0 ? b6 + 44 : b6 + 94;
    let bL = drawPieceAt(l, bm.t, bt, bg, bH, bm.gold ? ln : bm.t + 1, be === 0 ? 1 : 0.8);
    if (bm.shatter) {
      for (let [bv, bS] of lZ[bm.t][0]) {
        let [bA, bO] = [Math.min(...lZ[bm.t][0].map(bV => bV[0])), Math.min(...lZ[bm.t][0].map(bV => bV[1]))];
        crackMark(l, bL[0] + (bv - bA) * bH, bL[1] + (bS - bO) * bH, bH);
      }
    }
    if (bm.hard && be === 0) {
      l.fillStyle = DL;
      l.globalAlpha = qC ? 1 : 0.5;
      for (let bV = 0; bV < 3; bV++) {
        l.fillRect(Math.round(bt) - 3 + bV, bL[1] + bL[3] + 4 + bV, 7 - bV * 2, 1);
      }
      l.globalAlpha = 1;
    }
  });
  let b7 = ft[0] + 22;
  let b8 = ft[1] + 18;
  let b9 = ft[2] - ft[0] - 44;
  txt(d, b7, b8 + 4, "LEVEL", "#ffffff");
  let bl = j.level >= dB ? "MAX" : String(j.level);
  let bj = j.lvfx && j.f - j.lvfx.f0 < 20 && j.f >> 1 & 1;
  txt(d, b7 + b9, b8 - 2, bl, bj ? "#ffffff" : j.level >= dB ? "#ff0000" : "#ffff00", "fnt_mainbig", "right");
  let bD = beatOf(j);
  let bf = sectionAtBeat(bD);
  let bY = bf.beats ? Math.max(0, Math.min(1, (bD - bf.b0) / bf.beats)) : 0;
  l.fillStyle = "#800000";
  l.fillRect(b7, b8 + 30, b9, 6);
  l.fillStyle = "#ffa040";
  l.fillRect(b7, b8 + 30, Math.round(b9 * bY), 6);
  l.fillStyle = "#000000";
  for (let bm = 1; bm < 8; bm++) {
    l.fillRect(b7 + Math.round(b9 * bm / 8), b8 + 30, 1, 6);
  }
  txt(d, b7, b8 + 38, "LINES", "#ffffff");
  txt(d, b7 + b9, b8 + 38, String(j.lines), "#ffffff", "fnt_main", "right");
  txt(d, b7, b8 + 56, "SCORE", "#ffffff");
  txt(d, b7 + b9, b8 + 56, String(j.score + (j.bonus || 0)), "#ffffff", "fnt_main", "right");
  txt(d, b7, b8 + 74, "COMBO", "#ffffff");
  txt(d, b7 + b9, b8 + 74, j.combo >= 2 ? "x" + j.combo : "-", j.combo >= 2 ? "#ffff00" : "#808080", "fnt_main", "right");
  txt(d, b7, b8 + 92, "STREAK", "#ffffff");
  txt(d, b7 + b9, b8 + 92, String(j.streak), j.streak && j.streak === j.best && j.streak >= 10 ? "#ffff00" : "#ffffff", "fnt_main", "right");
  txt(d, b7, b8 + 112, "BEST " + j.best, "#808080", "fnt_main");
  txt(d, b7 + b9, b8 + 112, "GRAZE " + j.grazes, "#808080", "fnt_main", "right");
}
w(drawPanel, "drawPanel");
function drawBanner(j, D) {
  let qu = D.banner;
  if (!qu) {
    return;
  }
  let qr = D.f - qu.f0;
  if (qr < 0) {
    return;
  }
  let qQ = qr + 1;
  let b0 = String(qu.s).split("&");
  if (!(qu.dur - qr < 2)) {
    for (let b6 = 0; b6 < b0.length && qQ > 0; b6++) {
      let b7 = b0[b6].slice(0, qQ);
      qQ -= b0[b6].length;
      txt(j, 30, 376 + b6 * 36, b7, "#ffffff", "fnt_mainbig");
    }
  }
}
w(drawBanner, "drawBanner");
var Yn = 2.64;
var Yo = 3.44;
var ye = 8;
var yt = 10;
function grazes(j, D, qC) {
  let qQ = D + jC - lN - ye;
  let b0 = qC + jC - lw - ye;
  let b1 = D + ju - lN + ye;
  let b5 = qC + ju - lw + ye;
  let b6 = false;
  forEachHazard(j, (b8, b9, bd, bl) => {
    if (!b6 && qQ < bd && b1 > b8 && b0 < bl && b5 > b9) {
      b6 = true;
    }
  });
  return b6;
}
w(grazes, "grazes");
function withSelfSteer(d) {
  d.add("obj_selfsteer");
  return d;
}
w(withSelfSteer, "withSelfSteer");
var obj_tetrisfield = class sQ extends g {
  create() {
    let qr = Math.floor(G.next() * 2147483647);
    this.S = newState(qr);
    this.damage = 55;
    this.target = 0;
    this.active = 1;
    this.hits = 0;
    this.shaking = 0;
    this.grazecd = 0;
    this.ap = {
      f: -9,
      x: 0,
      y: 0,
      k: 9,
      dirs: [],
      seed: 0,
      depth: 0,
      plans: 0
    };
    if (!N()) {
      k();
      registerSong();
    }
    this.track = null;
  }
  step() {
    let j = this.S;
    if (j.ended) {
      return;
    }
    let D = U.first("obj_heart");
    let qC = D && !D.destroyed;
    j.steer = !X.autoplay && qC && I.held.b1 ? soulCol(D.x) : -1;
    simStep(j);
    if (qC && I.pressed.b2 && !j.done) {
      if (j.held < 0) {
        if ((X.tension || 0) >= jX && holdPiece(j, D.x, D.y)) {
          X.tension -= jX;
          if (!N()) {
            sfx("hold");
          }
        } else if (!N()) {
          sfx("nohold");
        }
      } else if (releaseHeld(j, soulCol(D.x)) && !N()) {
        sfx("release");
      }
    }
    H("tetris:" + j.seed + ":" + j.f);
    if (!N()) {
      if (j.f === 0 || !this.track && j.f < dN) {
        k();
        this.track = tameTrack(c(lP, 0.9, false));
        X.batmusic[0] = lP;
        X.batmusic[1] = this.track;
        if (j.f > 0) {
          x(this.track, j.f / ds);
        }
      } else if (this.track) {
        tameTrack(this.track);
        if (Math.abs((this.track.currentTime || 0) - j.f / ds) > 0.1) {
          x(this.track, j.f / ds);
        }
      }
      for (let b0 of j.fx) {
        let b1 = sfx(b0);
        if (b0 === "static" || b0 === "blaster") {
          let b5 = 0;
          for (let b6 of j.lasers) {
            if (j.f - b6.f0 === b6.warn) {
              b5 = Math.max(b5, b6.fire);
            }
          }
          cutLater(b1, j.f + b5 + (b0 === "blaster" ? 8 : 3));
        }
      }
      cutDue(j.f);
    }
    if (j.fx.includes("tetris")) {
      J(50);
      j.pops.push({
        s: "TP +20%",
        f0: j.f,
        col: "#ffa040"
      });
      if (!N()) {
        sfx("tetrisTP");
      }
    }
    if (j.heal > 0) {
      for (let b8 = 0; b8 < 3; b8++) {
        let bY = X.char[b8];
        if (bY && X.hp[bY] > 0) {
          V(b8, j.heal);
        }
      }
    }
    if (j.shake > 0) {
      let by = j.shake * 0.8 * (B.shake ?? 1) * (reduced() ? 0.5 : 1);
      X.shakex = Math.round((j.f & 1 ? 1 : -1) * by);
      X.shakey = Math.round((j.f & 2 ? 1 : -1) * by * 0.5);
      this.shaking = 1;
    } else if (this.shaking) {
      X.shakex = 0;
      X.shakey = 0;
      this.shaking = 0;
    }
    let qQ = false;
    if (D && !D.destroyed && this.active === 1 && X.inv < 0 && soulHits(j, D.x, D.y)) {
      this.target = this.hits++ % 3;
      t(this, false);
      qQ = true;
      j.streak = 0;
    }
    if (this.grazecd > 0) {
      this.grazecd--;
    }
    if (!qQ && D && !D.destroyed && !this.grazecd && X.inv < 0 && grazes(j, D.x, D.y)) {
      this.grazecd = 12;
      let bm = U.first("obj_grazebox");
      if (bm) {
        bm.grazetimer = Math.max(bm.grazetimer || 0, 3);
      }
      J(yt);
      j.grazes++;
      j.bonus = (j.bonus || 0) + 20;
      if (!N()) {
        sfx("graze");
      }
    }
    if (X.autoplay && D && !D.destroyed && !j.done) {
      let bs = autoplayKeys(j, D, this.ap);
      if (bs) {
        I.held.left = bs[0] < 0;
        I.held.right = bs[0] > 0;
        I.held.up = bs[1] < 0;
        I.held.down = bs[1] > 0;
        I.held.b2 = false;
      }
    }
  }
  draw(d) {
    let j = this.S;
    if (!j) {
      return;
    }
    let D = d.ctx;
    let b5 = reduced();
    let b6 = j.f >> 2 & 1;
    let b7 = drawSpawnZone(D, j);
    if (drawBox(D) < 1 || !b7) {
      return;
    }
    D.save();
    D.imageSmoothingEnabled = false;
    D.translate(lN, lw);
    let bD = beatOf(j);
    let be = j.f >= 0 && frac(bD) < 0.14 && !j.done;
    D.fillStyle = "#1e081e";
    for (let bo = 1; bo < lU; bo++) {
      D.fillRect(bo * lB, 0, 1, lT);
    }
    for (let s2 = 1; s2 < lG; s2++) {
      D.fillRect(0, s2 * lB, lE, 1);
    }
    D.fillStyle = be ? Math.floor(bD) % 4 === 0 ? "#8a3a8a" : "#6a2a6a" : "#420042";
    for (let s4 = 1; s4 < lU; s4++) {
      for (let s7 = 1; s7 < lG; s7++) {
        D.fillRect(s4 * lB, s7 * lB, 1, 1);
      }
    }
    D.save();
    D.beginPath();
    D.rect(0, 0, lE, lT);
    D.clip();
    for (let sD of j.rises) {
      let sy = b6 ? 1 : 0.45;
      let sm = sD.n * lB;
      D.fillStyle = rgba(DL, b6 ? 0.22 : 0.1);
      D.fillRect(0, lT - sm, lE, sm);
      frameRect(D, 0, lT - sm, lE, sm, DL, sy);
      for (let se of sD.holes) {
        D.fillStyle = "#000000";
        D.fillRect(se * lB + 1, lT - sm + 1, lB - 2, sm - 2);
        D.fillStyle = "#ffffff";
        D.globalAlpha = sy;
        upArrow(D, se * lB + lB / 2, lT - sm + 4);
        D.globalAlpha = 1;
      }
    }
    for (let sq of j.sweeps) {
      if (j.f - sq.f0 < sq.warn) {
        {
          let [st, sg] = sweepRows(sq);
          frameRect(D, 0, st * lB, lE, (sg - st + 1) * lB, DL, b6 ? 1 : 0.45);
          D.fillStyle = DL;
          D.globalAlpha = b6 ? 1 : 0.45;
          arrow(D, sq.dir > 0 ? 6 : lE - 6, Math.round((st + sg + 1) * lB / 2), sq.dir);
          D.globalAlpha = 1;
        }
      }
    }
    if (j.pieces.some(sL => sL.quake)) {
      {
        let sL = columnTops(j);
        D.fillStyle = DL;
        D.globalAlpha = b6 ? 1 : 0.4;
        for (let sO = 0; sO < lU; sO++) {
          D.fillRect(sO * lB, sL[sO] - 2, lB, 2);
          if (sO > 0 && sL[sO] !== sL[sO - 1]) {
            D.fillRect(sO * lB, Math.min(sL[sO], sL[sO - 1]) - 2, 2, Math.abs(sL[sO] - sL[sO - 1]) + 2);
          }
        }
        D.globalAlpha = 1;
      }
    }
    for (let sX of j.lasers) {
      if (sX.skin === "static" && j.f - sX.f0 < sX.warn) {
        {
          let sJ = 0.12 + 0.3 * ((j.f - sX.f0) / Math.max(1, sX.warn));
          let sW = j.f % 3;
          let sF = sX.h ? 0 : sX.c * lB + 1;
          let sI = sX.h ? sX.c * lB + 1 : 0;
          let sP = sX.h ? lE : lB - 2;
          let sk = sX.h ? lB - 2 : lT;
          for (let sx = 0; sx < sk; sx += 50) {
            for (let sR = 0; sR < sP; sR += 50) {
              d.draw_sprite_part_ext("spr_noise", sW, (sR * 7 + j.f * 11) % 50, (sx * 3 + j.f * 17) % 50, Math.min(50, sP - sR), Math.min(50, sk - sx), sF + sR, sI + sx, 1, 1, "#ffffff", sJ);
            }
          }
        }
      }
    }
    for (let sU of j.lasers) {
      if (j.f - sU.f0 < sU.warn && sU.skin !== "knight") {
        {
          D.fillStyle = DL;
          D.globalAlpha = b6 ? 1 : 0.4;
          let sG = isI(sU) ? 4 * lB : 0;
          if (sU.h) {
            D.fillRect(sU.h > 0 ? sG : 0, sU.c * lB + lB / 2 - 1, lE - sG, 2);
          } else {
            D.fillRect(sU.c * lB + lB / 2 - 1, sG, 2, lT - sG);
          }
          D.globalAlpha = 1;
        }
      }
    }
    for (let sZ of j.sbs) {
      if (!(j.f - sZ.f0 >= sZ.warn) && !(sZ.i > 0)) {
        D.globalAlpha = b6 ? 1 : 0.45;
        if (sZ.k === "pipis" || sZ.k === "bomb") {
          for (let sa = 0; sa < 3; sa++) {
            outlineCell(D, sZ.col * lB, sa * lB, lB, DL, b6 ? 1 : 0.45);
          }
        } else {
          frameRect(D, 0, sZ.row * lB, lE, lB, DL, b6 ? 1 : 0.45);
          D.fillStyle = DL;
          arrow(D, sZ.dir > 0 ? 6 : lE - 6, sZ.row * lB + lB / 2, sZ.dir);
        }
        D.globalAlpha = 1;
      }
    }
    if (j.sbs.length) {
      {
        let sn = columnTops(j);
        for (let so of j.sbs) {
          if (so.k !== "pipis" || j.f - so.f0 < so.warn) {
            continue;
          }
          let sp = -1;
          for (let sh = 0; sh <= 14; sh++) {
            {
              let [, sC] = sbPos(so, j.f + sh);
              if (sC + 5 >= sn[so.col]) {
                {
                  sp = sh;
                  break;
                }
              }
            }
          }
          if (!(sp < 0)) {
            {
              D.fillStyle = DL;
              D.globalAlpha = b6 ? 0.9 : 0.5;
              for (let Mb of pipisShards(j, so, sn[so.col])) {
                let Ms = Mb.x;
                let MM = Mb.y;
                let MH = Mb.vx;
                let Mt = Mb.vy;
                for (let Mg = 1; Mg <= 27; Mg++) {
                  Ms += MH;
                  MM += Mt;
                  Mt += 0.13;
                  if (Mg % 3 === 0) {
                    D.fillRect(Math.round(Ms) - 1, Math.round(MM) - 1, 2, 2);
                  }
                }
              }
              D.globalAlpha = 1;
            }
          }
        }
      }
    }
    for (let MO of j.curtains) {
      if (j.f - MO.f0 < MO.warn) {
        {
          let MV = MO.up ? MO.y0 : 0;
          for (let MX = 0; MX < lU; MX++) {
            if (MO.gw <= 0 || MX < MO.gap || MX >= MO.gap + MO.gw) {
              outlineCell(D, MX * lB, MV, lB, DL, b6 ? 1 : 0.45);
            }
          }
          if (MO.gw > 0) {
            {
              D.fillStyle = "#ffffff";
              D.globalAlpha = b6 ? 1 : 0.45;
              for (let MI = MO.gap; MI < MO.gap + MO.gw; MI++) {
                (MO.up ? upArrow : chevron)(D, MI * lB + lB / 2, MV + 6);
              }
              D.globalAlpha = 1;
            }
          }
        }
      }
    }
    for (let MP of j.spins) {
      {
        let Mk = j.f - MP.f0 - MP.warn;
        let Mx = spinPose(j, MP);
        let MR = Mk < 0 ? 0 : Mx >= 0 && frac(Mk / MP.bf) >= 0.5 && Mx + 1 < MP.n ? Mx + 1 : -1;
        if (MR >= 0) {
          for (let [Mz, Mc] of spinCells(MP, MR)) {
            outlineCell(D, Mz, Mc, MP.sc, Mk < 0 ? DL : "#ffffff", Mk < 0 ? b6 ? 1 : 0.45 : 0.7);
          }
        }
      }
    }
    for (let MG of j.pieces) {
      if (MG.ly <= MG.y && MG.mode !== "nudge") {
        continue;
      }
      let MB = Dg[MG.gold ? ln : MG.t + 1];
      let ME = MG.mode === "hard" || MG.mode === "nudge";
      for (let [MT, MN] of lZ[MG.t][MG.tr]) {
        outlineCell(D, (MG.tx + MT) * lB, (MG.ly + MN) * lB, lB, MG.shatter ? DL : ME ? "#ffffff" : MB.l, ME || MG.shatter ? b6 ? 0.9 : 0.4 : 0.55);
      }
      if (MG.shatter && MG.rpb > 0 && (MG.ly - MG.y) * MG.bf / MG.rpb <= MG.bf * 1.25) {
        {
          D.fillStyle = DL;
          D.globalAlpha = b6 ? 0.9 : 0.5;
          for (let Mw of shardsOf(j, MG)) {
            {
              let MZ = Mw.x;
              let Ma = Mw.y;
              let Mn = Mw.vx;
              let Mo = Mw.vy;
              for (let Mp = 1; Mp <= 30; Mp++) {
                MZ += Mn;
                Ma += Mo;
                Mo += 0.13;
                if (Mp % 3 === 0) {
                  D.fillRect(Math.round(MZ) - 1, Math.round(Ma) - 1, 2, 2);
                }
              }
            }
          }
          D.globalAlpha = 1;
        }
      }
      if (MG.mode === "fall") {
        let H1 = -9;
        for (let [, H2] of lZ[MG.t][MG.r]) {
          H1 = Math.max(H1, MG.y + H2);
        }
        if (H1 < 0) {
          {
            let H3 = new Set();
            for (let [H4] of lZ[MG.t][MG.r]) {
              H3.add(MG.x + H4);
            }
            D.fillStyle = MB.b;
            D.globalAlpha = b6 ? 1 : 0.6;
            for (let H5 of H3) {
              chevron(D, H5 * lB + lB / 2, 2);
            }
            D.globalAlpha = 1;
          }
        }
      }
    }
    let bt = new Map();
    for (let H7 of j.clears) {
      for (let H8 of H7.rows) {
        bt.set(H8, H7);
      }
    }
    for (let H9 = 0; H9 < lG; H9++) {
      {
        let Hl = bt.get(H9);
        if (Hl && !Hl.wipe) {
          {
            if (Hl.t >= 7) {
              D.fillStyle = "#ffffff";
              D.fillRect(0, H9 * lB, lE, lB);
              continue;
            }
            let HD = (7 - Hl.t) * 0.9;
            for (let Hf = 0; Hf < lU; Hf++) {
              let HY = j.stack[H9][Hf];
              if (HY) {
                drawBlock(D, Hf * lB, H9 * lB, lB, HY);
                if (Math.abs(Hf - 4.5) <= HD) {
                  D.fillStyle = "#ffffff";
                  D.globalAlpha = 0.85;
                  D.fillRect(Hf * lB + 1, H9 * lB + 1, lB - 2, lB - 2);
                  D.globalAlpha = 1;
                }
              }
            }
            continue;
          }
        }
        for (let Hy = 0; Hy < lU; Hy++) {
          {
            let Hq = j.stack[H9][Hy];
            if (Hq) {
              {
                if (Hl && Hl.wipe && Hl.t >> 1 & 1) {
                  {
                    drawBlock(D, Hy * lB, H9 * lB, lB, 8, 0.5);
                    continue;
                  }
                }
                drawBlock(D, Hy * lB, H9 * lB, lB, Hq);
              }
            }
          }
        }
      }
    }
    for (let Hv of j.lockfx) {
      {
        let HA = j.f - Hv.f0;
        if (!(HA > 8)) {
          {
            D.fillStyle = "#ffffff";
            D.globalAlpha = (Hv.hard ? 0.9 : 0.7) * (1 - HA / 8) * (b5 ? 0.5 : 1);
            for (let [HV, HX] of Hv.cells) {
              if (HX >= 0) {
                D.fillRect(HV * lB + 1, HX * lB + 1, lB - 2, lB - 2);
              }
            }
            D.globalAlpha = 1;
          }
        }
      }
    }
    for (let HJ of j.trails) {
      {
        let HW = 1 - (j.f - HJ.f0) / 8;
        if (!(HW <= 0)) {
          for (let [HF, HI] of HJ.cols) {
            for (let HP = 1; HP <= 3; HP++) {
              {
                let Hk = HI - HP * lB;
                if (Hk + lB > HJ.y0 && Hk > -lB) {
                  drawBlock(D, HF * lB, Hk, lB, HJ.v, HW * (0.45 - HP * 0.12));
                }
              }
            }
          }
        }
      }
    }
    for (let Hc of j.pieces) {
      let HU = j.f - Hc.f0;
      let HG = (Hc.mode === "hard" || Hc.mode === "nudge") && HU < Hc.warnF;
      let HB = Hc.gold ? ln : Hc.t + 1;
      let HE = Hc.mode === "hard" && HU < Hc.matF;
      let HT = (Hc.mode === "hard" || Hc.mode === "nudge") && !HG;
      for (let [HN, Hw] of lZ[Hc.t][Hc.r]) {
        let HK = (Hc.x + HN) * lB;
        let HZ = (Hc.y + Hw) * lB;
        if (!(HZ + lB <= 0)) {
          if (HE) {
            outlineCell(D, HK, HZ, lB, "#ffffff", 0.3 + 0.7 * (HU / Math.max(1, Hc.matF)));
            continue;
          }
          if (HT) {
            for (let Ha = 1; Ha <= 2; Ha++) {
              {
                let Hn = HZ - Ha * 1.5 * lB;
                if (Hn >= Hc.hy * lB) {
                  drawBlock(D, HK, Hn, lB, HB, 0.35 - Ha * 0.12);
                }
              }
            }
          }
          drawBlock(D, HK, HZ, lB, HB);
          if (Hc.shatter) {
            crackMark(D, Math.round(HK), Math.round(HZ), lB);
          }
          if (Hc.quake && !HE) {
            D.fillStyle = Dg[HB].d;
            D.fillRect(Math.round(HK) + 6, Math.round(HZ) + 6, lB - 12, lB - 12);
          }
        }
      }
      if (Hc.gold && HG) {
        {
          let Hp = Math.ceil((Hc.warnF - HU) / Hc.bf);
          let Hh = 99;
          let HC = -1;
          let Hu = -1;
          for (let [Hr, Hi] of lZ[Hc.t][Hc.r]) {
            Hh = Math.min(Hh, Hc.x + Hr);
            HC = Math.max(HC, Hc.x + Hr);
            Hu = Math.max(Hu, Hc.y + Hi);
          }
          frameRect(D, Hh * lB - 2, Hc.y * lB - 2, (HC - Hh + 1) * lB + 4, (Hu - Hc.y + 1) * lB + 4, "#ffffff", b6 ? 1 : 0.35);
          for (let HQ = 0; HQ < Hp; HQ++) {
            D.fillStyle = j.steer >= 0 ? "#ffffff" : "#ffff00";
            D.fillRect(Hh * lB + HQ * 7, (Hu + 1) * lB + 4, 4, 4);
          }
        }
      }
    }
    for (let t4 of j.lasers) {
      let t5 = j.f - t4.f0;
      if (t4.skin === "knight") {
        continue;
      }
      if (t5 < t4.warn) {
        {
          if (!isI(t4)) {
            continue;
          }
          let ty = t5 >= t4.mat;
          for (let tm = 0; tm < 4; tm++) {
            {
              let tq = t4.h ? (t4.h > 0 ? tm : lU - 1 - tm) * lB : t4.c * lB;
              let tb = t4.h ? t4.c * lB : tm * lB;
              if (ty) {
                drawBlock(D, tq, tb, lB, 1);
              } else {
                outlineCell(D, tq, tb, lB, "#ffffff", 0.3 + 0.7 * (t5 / Math.max(1, t4.mat)));
              }
            }
          }
          continue;
        }
      }
      let t6 = t5 - t4.warn;
      let t7 = t6 < t4.fire;
      let t8 = t7 ? 1 : Math.max(0, 1 - (t6 - t4.fire) / 6);
      let t9 = Math.max(0, Math.round((lB - 2) * t8)) - (t7 && j.f & 1 ? 2 : 0);
      if (t9 <= 0) {
        continue;
      }
      let td = Dg[1];
      if (t4.skin === "static") {
        let ts = t7 ? lB - 2 + (j.f >> 1 & 1 ? 0 : -2) : t9;
        let tM = t4.h ? 0 : t4.c * lB + Math.round((lB - ts) / 2);
        let tH = t4.h ? t4.c * lB + Math.round((lB - ts) / 2) : 0;
        let tt = t4.h ? lE : ts;
        let tg = t4.h ? ts : lT;
        let tL = j.f % 3;
        for (let tv = 0; tv < tg; tv += 50) {
          for (let tS = 0; tS < tt; tS += 50) {
            d.draw_sprite_part_ext("spr_noise", tL, (tS * 7 + j.f * 11) % 50, (tv * 3 + j.f * 17) % 50, Math.min(50, tt - tS), Math.min(50, tg - tv), tM + tS, tH + tv, 1, 1, "#ffffff", 1);
          }
        }
        D.fillStyle = "#ffffff";
        if (t4.h) {
          D.fillRect(0, tH - 2, lE, 2);
          D.fillRect(0, tH + tg, lE, 2);
        } else {
          D.fillRect(tM - 2, 0, 2, lT);
          D.fillRect(tM + tt, 0, 2, lT);
        }
        continue;
      }
      if (t4.skin === "blaster" && t7 && t6 < 3) {
        let tA = 4 + Math.round((lB - 6) * t6 / 3);
        D.fillStyle = "#ffffff";
        if (t4.h) {
          D.fillRect(0, t4.c * lB + Math.round((lB - tA) / 2), lE, tA);
        } else {
          D.fillRect(t4.c * lB + Math.round((lB - tA) / 2), 0, tA, lT);
        }
        continue;
      }
      let tl = t4.skin === "blaster" ? "#ffffff" : td.b;
      if (t4.h) {
        let tO = t4.c * lB + Math.round((lB - t9) / 2);
        D.fillStyle = tl;
        D.fillRect(0, tO - 1, lE, t9 + 2);
        D.fillStyle = "#ffffff";
        D.fillRect(0, tO, lE, t9);
      } else {
        let tV = t4.c * lB + Math.round((lB - t9) / 2);
        D.fillStyle = tl;
        D.fillRect(tV - 1, 0, t9 + 2, lT);
        D.fillStyle = "#ffffff";
        D.fillRect(tV, 0, t9, lT);
      }
    }
    for (let tE of j.sweeps) {
      {
        let to = sweepCells(j, tE);
        if (!to) {
          continue;
        }
        let tp = tE.spin === 0 ? tE.t + 1 : 3;
        for (let th = 2; th >= 0; th--) {
          for (let [tC, tu] of to) {
            drawBlock(D, tC - tE.dir * th * 9, tu, lB, tp, th ? 0.3 - th * 0.1 : 1);
          }
        }
      }
    }
    for (let tr of j.sbs) {
      let ti = j.f - tr.f0;
      if (ti < tr.warn && tr.k !== "pipis" && tr.k !== "bomb") {
        continue;
      }
      let [tQ, g0] = tr.k === "bomb" ? bombAt(tr, j.f) : sbPos(tr, j.f);
      let g1 = Math.max(0, ti - tr.warn);
      if (tr.k === "bomb") {
        {
          let g2 = DS[tr.suit % 3];
          if (tr.boom >= 0) {
            {
              let g3 = j.f - tr.boom;
              let g4 = Math.min(7, Math.floor(g3 * 8 / (jc + 6)));
              let g5 = Math.round(tQ) - 10;
              let g6 = Math.round(g0) - 10;
              for (let g7 = g5 % 20 - 20; g7 < lE; g7 += 20) {
                if (g7 !== g5) {
                  d.draw_sprite_ext("spr_plusbomb_horblast", g4, g7, g6, 1, 1, 0, "#ffffff", 1);
                }
              }
              for (let g8 = g6 % 20 - 20; g8 < lT; g8 += 20) {
                if (g8 !== g6) {
                  d.draw_sprite_ext("spr_plusbomb_verblast", g4, g5, g8, 1, 1, 0, "#ffffff", 1);
                }
              }
              d.draw_sprite_ext("spr_plusbomb_coreblast", g4, g5, g6, 1, 1, 0, "#ffffff", 1);
              continue;
            }
          }
          if (tr.land >= 0) {
            {
              let g9 = tr.fuse - (j.f - tr.land);
              let gd = (j.f >> (g9 < 8 ? 1 : 2) & 1) === 1;
              D.globalAlpha = gd ? 0.9 : 0.35;
              D.fillStyle = DL;
              D.fillRect(0, Math.round(g0) - 7, lE, 1);
              D.fillRect(0, Math.round(g0) + 7, lE, 1);
              D.fillRect(Math.round(tQ) - 7, 0, 1, lT);
              D.fillRect(Math.round(tQ) + 7, 0, 1, lT);
              D.globalAlpha = 1;
              d.draw_sprite_ext(g2, gd ? 1 : 0, Math.round(tQ), Math.round(g0), 1, 1, 0, "#ffffff", 1);
            }
          } else {
            d.draw_sprite_ext(g2, 0, Math.round(tQ), Math.round(g0), 1, 1, ti < tr.warn ? 0 : Math.floor(g1 / 3) * 45, "#ffffff", ti < tr.warn ? 0.5 : 1);
          }
          continue;
        }
      }
      if (tr.k === "suit") {
        {
          let gD = Dv[(tr.id + tr.i) % 4];
          let gf = -Math.floor(g1 / 3) * 45 * tr.dir;
          for (let gY = 2; gY >= 1; gY--) {
            {
              let [gy, gm] = sbPos(tr, j.f - gY * 2);
              d.draw_sprite_ext(gD, 0, Math.round(gy), Math.round(gm), 1, 1, gf + gY * 45 * tr.dir, "#ffffff", 0.25 / gY);
            }
          }
          d.draw_sprite_ext(gD, 0, Math.round(tQ), Math.round(g0), 1, 1, gf, "#ffffff", 1);
        }
      } else if (tr.k === "head") {
        {
          for (let gS = 2; gS >= 1; gS--) {
            let [gA, gO] = sbPos(tr, j.f - gS * 3);
            d.draw_sprite_ext("spr_spamtonhead", j.f >> 2 & 3, Math.round(gA), Math.round(gO), tr.dir > 0 ? -1 : 1, 1, 0, "#ffffff", 0.22 / gS);
          }
          d.draw_sprite_ext("spr_spamtonhead", j.f >> 2 & 3, Math.round(tQ), Math.round(g0), tr.dir > 0 ? -1 : 1, 1, Math.sin(g1 * 0.3 + tr.i * 1.7) * 12, "#ffffff", 1);
        }
      } else {
        d.draw_sprite_ext("spr_pipis_egg", j.f >> 3 & 3, Math.round(tQ), Math.round(g0), 1.25, 1.25, ti < tr.warn ? 0 : Math.floor(g1 / 4) * 30, "#ffffff", ti < tr.warn ? 0.5 : 1);
      }
    }
    for (let gV of j.bursts) {
      if (gV.pipis && j.f - gV.f0 < 9) {
        d.draw_sprite_ext("spr_pipis_egg_break", Math.min(2, (j.f - gV.f0) / 3 | 0), Math.round(gV.x), Math.round(gV.y), 1.5, 1.5, 0, "#ffffff", 1);
      }
    }
    if (j.quakes.length) {
      {
        let gJ = columnTops(j);
        D.fillStyle = "#ffffff";
        for (let gW of j.quakes) {
          for (let gF of quakeFronts(gW, j.f)) {
            {
              if (gF < -8 || gF > lE + 8) {
                continue;
              }
              let gI = gJ[Math.max(0, Math.min(lU - 1, Math.floor(gF / lB)))];
              let gP = Math.round(gF);
              D.fillRect(gP - 7, gI - 3, 14, 3);
              D.fillRect(gP - 4, gI - 6, 8, 3);
              D.fillRect(gP - 1, gI - 9, 3, 3);
            }
          }
        }
      }
    }
    for (let gB of j.spins) {
      {
        let gT = spinPose(j, gB);
        if (gT < 0) {
          continue;
        }
        let gN = j.f - gB.f0 - gB.warn;
        let gw = gB.bf - gN % gB.bf;
        let gK = lQ[gB.p];
        if (gw <= 3 && gT + 1 < gB.n) {
          let gZ = gB.dir * (Math.PI / 2) * (4 - gw) / 4;
          D.save();
          D.translate(gB.cx, gB.cy);
          D.rotate(gZ);
          D.translate(-gB.cx, -gB.cy);
          for (let [ga, gn] of spinCells(gB, gT)) {
            drawBlock(D, ga, gn, gB.sc, gK);
          }
          D.restore();
        } else {
          for (let [go, gp] of spinCells(gB, gT)) {
            drawBlock(D, go, gp, gB.sc, gK);
          }
        }
        D.fillStyle = "#ffffff";
        D.fillRect(Math.round(gB.cx) - 2, Math.round(gB.cy) - 2, 4, 4);
      }
    }
    for (let gh of j.curtains) {
      {
        if (j.f - gh.f0 < gh.warn) {
          continue;
        }
        let gC = Math.round(curtainY(gh, j.f));
        for (let gu = 0; gu < lU; gu++) {
          if (gh.gw <= 0 || gu < gh.gap || gu >= gh.gap + gh.gw) {
            drawBlock(D, gu * lB, gC, lB, 8);
          }
        }
      }
    }
    if (j.holdfx && j.f - j.holdfx.f0 < 8) {
      let gi = j.f - j.holdfx.f0;
      for (let [gQ, L0] of j.holdfx.cells) {
        frameRect(D, gQ * lB + gi, L0 * lB + gi, lB - 2 * gi, lB - 2 * gi, "#ffffff", 1 - gi / 8);
      }
    }
    for (let L1 of j.bursts) {
      let L2 = j.f - L1.f0;
      let L3 = L1.soft ? 12 : 20;
      if (L2 > L3) {
        continue;
      }
      let L4 = L2 < L3 / 2 ? 1 : 1 - (L2 - L3 / 2) / (L3 / 2);
      let L5 = L1.soft ? 1 : 2;
      let L6 = 0;
      for (let [L7, L8, L9] of L1.cells) {
        for (let Ld = 0; Ld < L5; Ld++, L6++) {
          {
            let Ll = (hash2(L7 * 31 + L8 * 7 + Ld, L1.f0) - 0.5) * (L1.big ? 5 : 3.2);
            let Lj = -1.6 - hash2(L6, L1.f0 + 1) * (L1.big ? 3 : 2);
            let LD = (L7 + 0.5) * lB + Ll * L2;
            let Lf = (L8 + 0.5) * lB + Lj * L2 + 0.18 * L2 * L2;
            let LY = L1.soft ? 2 : Ld === 0 ? 4 : 3;
            let Ly = Dg[L1.soft ? 8 : L9] || Dg[8];
            D.globalAlpha = L4;
            D.fillStyle = Ld === 0 ? Ly.b : Ly.l;
            D.fillRect(Math.round(LD - LY / 2), Math.round(Lf - LY / 2), LY, LY);
          }
        }
      }
      D.globalAlpha = 1;
    }
    for (let Le of j.debris) {
      {
        if (Le.spr) {
          d.draw_sprite_ext(Le.spr, Le.fr || 0, Math.round(Le.x), Math.round(Le.y), 1, 1, 0, "#ffffff", 1);
          continue;
        }
        if (Le.shard) {
          D.fillStyle = "#ffffff";
          D.fillRect(Math.round(Le.x) - 4, Math.round(Le.y) - 4, 8, 8);
          drawBlock(D, Le.x - 3, Le.y - 3, 6, Le.c);
        } else {
          drawBlock(D, Le.x - 4, Le.y - 4, 9, Le.c);
        }
      }
    }
    if (j.flash) {
      let Lb = j.f - j.flash.f0;
      if (Lb >= 0 && Lb < 6) {
        D.fillStyle = "#ffffff";
        D.globalAlpha = j.flash.a * (b5 ? 0.25 : 1) * (1 - Lb / 6);
        D.fillRect(0, 0, lE, lT);
        D.globalAlpha = 1;
      }
    }
    D.restore();
    D.restore();
    for (let Ls of j.texts) {
      {
        let Lt = j.f - Ls.f0;
        if (Ls.dur - Lt < 8 && Lt >> 1 & 1) {
          continue;
        }
        let Lg = DT[Ls.col] || Ls.col || "#ffffff";
        let LL = Ls.stamp ? Ls.s.slice(0, Math.min(Ls.s.length, (Lt >> 1) + 1)) : Ls.s;
        let Lv = Ls.y !== undefined ? lw + Math.max(20, Math.min(lT - 20, Ls.y)) - 14 : lw + lT / 2 - 30;
        if (Ls.stamp) {
          let LS = Math.round(lN + lE / 2 - strW("fnt_mainbig", Ls.s) / 2);
          txt(d, LS + 2, Lv + 2, LL, "#000000", "fnt_mainbig", "left");
          txt(d, LS, Lv, LL, Lg, "fnt_mainbig", "left");
          continue;
        }
        txt(d, lN + lE / 2 + 2, Lv + 2, LL, "#000000", "fnt_mainbig", "center");
        txt(d, lN + lE / 2, Lv, LL, Lg, "fnt_mainbig", "center");
      }
    }
    drawBanner(d, j);
    {
      {
        let LV = stageOf(j.level);
        txt(d, 610, 446, LV.name, LV.col, "fnt_main", "right", 0.7);
      }
    }
    j.pops.forEach((LX, LJ) => {
      {
        let Lk = j.f - LX.f0;
        if (!(Lk > 30) || !(Lk >> 1 & 1)) {
          txt(d, lN - 10, lw + lT - 36 - LJ * 20 - Math.min(12, Lk), LX.s, LX.col, "fnt_main", "right");
        }
      }
    });
  }
};
w(obj_tetrisfield, "obj_tetrisfield");
K(obj_tetrisfield, "kinds", withSelfSteer(z("obj_tetrisfield", g)));
K(obj_tetrisfield, "defaultDepth", 4);
var mt = obj_tetrisfield;
var mn = "#00c000";
var mo = 4;
var ee = 44;
function drawSpawnZone(j, D) {
  let qr = U.first("obj_growtangle");
  if (qr && qr.maxyscale && qr.image_yscale / qr.maxyscale < 0.999) {
    return false;
  }
  j.save();
  j.imageSmoothingEnabled = false;
  j.beginPath();
  j.rect(lN, lw - ee, lE, ee);
  j.clip();
  j.translate(lN, lw);
  j.fillStyle = "#2a002a";
  for (let b0 = 1; b0 < lU; b0++) {
    for (let b1 = 1; b1 <= 2; b1++) {
      j.fillRect(b0 * lB, -b1 * lB, 1, 1);
    }
  }
  for (let b5 of D.pieces) {
    if (b5.mode === "fall") {
      for (let [b6, b7] of lZ[b5.t][b5.r]) {
        let b8 = (b5.y + b7) * lB;
        if (b8 < 0 && b8 > -ee - lB) {
          drawBlock(j, (b5.x + b6) * lB, b8, lB, b5.t + 1, 0.45);
        }
      }
    }
  }
  j.restore();
  return true;
}
w(drawSpawnZone, "drawSpawnZone");
function drawBox(d) {
  let qC = U.first("obj_growtangle");
  let qu = qC && qC.maxxscale ? Math.max(0, Math.min(1, qC.image_xscale / qC.maxxscale)) : 1;
  let qr = qC && qC.maxyscale ? Math.max(0, Math.min(1, qC.image_yscale / qC.maxyscale)) : 1;
  let qi = qC ? Math.max(0, Math.min(1, qC.image_alpha ?? 1)) : 1;
  let qQ = Math.min(qu, qr);
  if (qQ <= 0) {
    return 0;
  }
  let b5 = Math.round((lE + mo * 2) * qu);
  let b6 = Math.round((lT + mo * 2) * qr);
  let b7 = Math.round(lN + lE / 2 - b5 / 2);
  let b8 = Math.round(lw + lT / 2 - b6 / 2);
  d.save();
  d.globalAlpha = qi;
  d.fillStyle = mn;
  d.fillRect(b7, b8, b5, b6);
  d.globalAlpha = 1;
  d.fillStyle = "#000000";
  d.fillRect(b7 + mo, b8 + mo, Math.max(0, b5 - mo * 2), Math.max(0, b6 - mo * 2));
  d.restore();
  if (qQ >= 0.999) {
    return 1;
  } else {
    return qQ;
  }
}
w(drawBox, "drawBox");
function arrow(d, j, D, qC) {
  for (let b1 = 0; b1 < 5; b1++) {
    d.fillRect(j - (qC > 0 ? 0 : b1), D - b1, 1, b1 * 2 + 1);
  }
}
w(arrow, "arrow");
function upArrow(d, j, D) {
  for (let b0 = 0; b0 < 4; b0++) {
    d.fillRect(Math.round(j) - b0, D + b0, b0 * 2 + 1, 1);
  }
}
w(upArrow, "upArrow");
function chevron(d, j, D) {
  for (let b0 = 0; b0 < 4; b0++) {
    d.fillRect(Math.round(j) - 4 + b0, D + b0, 8 - b0 * 2, 1);
  }
}
w(chevron, "chevron");
var qX = {
  lock: [["snd_bump", 0.45]],
  slam: [["snd_impact", 0.7]],
  clear: [["snd_break1", 0.7]],
  tetris: [["snd_break2", 0.8], ["snd_boost", 0.8]],
  level: [["snd_levelup", 0.6]],
  laser: [["snd_laz", 0.6]],
  sweep: [["snd_swing", 0.8]],
  rise: [["snd_rumble", 0.7]],
  break: [["snd_badexplosion", 0.9]],
  spin: [["snd_noise", 0.5]],
  steer: [["snd_menumove", 0.5]],
  nudge: [["snd_power", 0.8]],
  burn: [["snd_break2", 0.6]],
  nudgein: [["snd_spearrise", 0.6]],
  graze: [["snd_graze", 0.5]],
  hold: [["snd_grab", 0.7]],
  nohold: [["snd_error", 0.5]],
  release: [["snd_equip", 0.7]],
  shatter: [["snd_glassbreak", 0.6]],
  quake: [["snd_screenshake", 0.6]],
  kslash: [["snd_knight_cut2", 0.8]],
  suits: [["snd_joker_ha0", 0.35]],
  heads: [["snd_spamton_laugh", 0.35]],
  pipisburst: [["snd_egg", 0.6]],
  bomb: [["snd_bomb", 0.7]],
  bombland: [["snd_bump", 0.4]],
  static: [["snd_tv_static", 0.5]],
  blaster: [["mus_sfx_rainbowbeam_1", 0.55]],
  blastercharge: [["mus_sfx_segapower", 0.45]],
  knightcut: [["snd_knight_cut2", 0.8]],
  tetrisTP: [["snd_boost", 0.4]]
};
var qJ = [...new Set(Object.values(qX).flat().map(l => l[0]))];
function sfx(j) {
  let qu = [];
  let qr = qX[j];
  if (!qr) {
    return qu;
  }
  for (let [qQ, b0] of qr) {
    try {
      if (T[qQ]) {
        let b1 = W(qQ, {
          volume: b0
        });
        if (b1) {
          qu.push(b1);
        }
      }
    } catch {}
  }
  return qu;
}
w(sfx, "sfx");
var qF = [];
function cutLater(j, D) {
  for (let qu of j) {
    qF.push({
      h: qu,
      until: D
    });
  }
}
w(cutLater, "cutLater");
function cutDue(j, D = false) {
  for (let qQ = 0; qQ < qF.length; qQ++) {
    if (D || j >= qF[qQ].until || j < qF[qQ].until - 400) {
      try {
        qF[qQ].h.pause();
      } catch {}
      qF.splice(qQ--, 1);
    }
  }
}
w(cutDue, "cutDue");
var qk = ["#5a0000", "#6a0000", "#7a0000", "#8b0000", "#9c0000", "#b00000", "#c80000", "#e00000", "#ff0000"];
function knightMarker(d, l, j, D, qC, qu) {
  let b5 = Math.max(0, Math.min(1, qC / Math.max(1, qu)));
  let b6 = Math.max(2, Math.round(20 - (1 - Math.pow(1 - b5, 2)) * 18));
  d.save();
  d.beginPath();
  d.rect(0, 0, 640, 326);
  d.clip();
  d.translate(l, j);
  d.rotate(D * Math.PI / 180);
  d.fillStyle = qk[Math.min(qk.length - 1, Math.floor(b5 * qk.length))];
  let b7 = Math.round(Math.max(0, 1 - qC / 6) * 700);
  d.fillRect(-700 + b7, -Math.floor(b6 / 2), 1400, b6);
  d.restore();
}
w(knightMarker, "knightMarker");
function knightSlash(d, j, D, qC, qu) {
  if (!(qu < 0) && !(qu > 3)) {
    d.draw_sprite_ext("spr_rk_quickslash", qu, j, D, 2, 1.25, -qC, "#ffffff", 1);
  }
}
w(knightSlash, "knightSlash");
var qz = lN + lE + 10;
function knightPose(d, j, D, qC, qu) {
  let qi = qC > qu + 14 ? Math.max(0, 1 - (qC - qu - 14) / 8) : 1;
  if (qi <= 0) {
    return;
  }
  let b5 = qz;
  let b6 = qC >= qu ? qC - qu < 4 ? 4 : 5 : qC < 4 ? 1 : 2;
  for (let b7 = qC % 4; b7 <= Math.min(qC, 28); b7 += 4) {
    if (b7 === 0) {
      continue;
    }
    let bd = (0.6 - b7 * 0.02) * qi;
    if (!(bd <= 0)) {
      d.draw_sprite_ext("spr_roaringknight_attack_ol", b6, Math.round(b5 + b7 * 2), Math.round(D), 2, 2, 0, "#ffffff", bd * 0.6);
    }
  }
  d.draw_sprite_ext("spr_roaringknight_attack_ol", b6, Math.round(b5), Math.round(D), 2, 2, 0, "#ffffff", qi * Math.min(1, qC / 3));
  if (qC < 9) {
    d.draw_sprite_ext("spr_knight_warp", Math.min(8, qC), Math.round(b5 - 20), Math.round(D - 20), 2, 2, 0, "#ffffff", 1 - qC / 9);
  }
}
w(knightPose, "knightPose");
function knightY(d, j, D, qC) {
  let b1;
  if (Math.abs(D) < 0.001) {
    b1 = 40;
  } else {
    b1 = j + (lE + 60 - d) * qC / D;
  }
  return lw + Math.max(-10, Math.min(lT - 120, b1 - 70));
}
w(knightY, "knightY");
function knightOnStage(d) {
  for (let qi of d.kslashes) {
    if (d.f - qi.f0 < qi.warn + 22) {
      return true;
    }
  }
  for (let qQ of d.lasers) {
    if (qQ.skin === "knight" && d.f - qQ.f0 < qQ.warn + 22) {
      return true;
    }
  }
  return false;
}
w(knightOnStage, "knightOnStage");
var obj_tetrisfx = class LR extends R {
  draw(d) {
    let D = field();
    let qC = D && D.S;
    if (!qC || qC.ended) {
      return;
    }
    let qu = d.ctx;
    qu.save();
    qu.imageSmoothingEnabled = false;
    for (let b0 of qC.kslashes) {
      {
        let b1 = qC.f - b0.f0;
        if (b1 < b0.warn) {
          knightMarker(qu, lN + b0.x, lw + b0.y, b0.ang, b1, b0.warn);
        }
      }
    }
    for (let bd of qC.lasers) {
      {
        if (bd.skin !== "knight") {
          continue;
        }
        let bl = qC.f - bd.f0;
        if (bl < bd.warn) {
          if (bd.h) {
            knightMarker(qu, lN + lE / 2, lw + bd.c * lB + lB / 2, 0, bl, bd.warn);
          } else {
            knightMarker(qu, lN + bd.c * lB + lB / 2, lw + lT / 2, 90, bl, bd.warn);
          }
        }
      }
    }
    let qi = null;
    for (let bm of qC.kslashes) {
      let be = qC.f - bm.f0;
      if (!qi || be < qi.el) {
        qi = {
          el: be,
          warn: bm.warn,
          y: knightY(bm.x, bm.y, bm.dx, bm.dy)
        };
      }
    }
    for (let bq of qC.lasers) {
      if (bq.skin !== "knight") {
        continue;
      }
      let bb = qC.f - bq.f0;
      if (!qi || bb < qi.el) {
        qi = {
          el: bb,
          warn: bq.warn,
          y: bq.h ? knightY(lE / 2, bq.c * lB + lB / 2, 1, 0) : lw + 10
        };
      }
    }
    if (qi && qi.el < qi.warn + 22) {
      knightPose(d, qC, qi.y, qi.el, qi.warn);
    }
    for (let bs of qC.kslashes) {
      knightSlash(d, lN + bs.x, lw + bs.y, bs.ang, qC.f - bs.f0 - bs.warn);
    }
    for (let bM of qC.lasers) {
      {
        let bH = qC.f - bM.f0;
        if (bM.skin === "knight") {
          if (bM.h) {
            knightSlash(d, lN + lE / 2, lw + bM.c * lB + lB / 2, 0, bH - bM.warn);
          } else {
            knightSlash(d, lN + bM.c * lB + lB / 2, lw + lT / 2, 90, bH - bM.warn);
          }
        } else if (bM.skin === "blaster") {
          {
            let bt = Math.min(1, bH / Math.max(1, bM.warn * 0.5));
            let bg = bH >= bM.warn && bH < bM.warn + bM.fire;
            let bL = bH > bM.warn + bM.fire ? Math.min(1, (bH - bM.warn - bM.fire) / 6) : 0;
            let bv = 34 - 12 * bt + 30 * bL + (bg ? 3 + (qC.f & 1 ? 1 : -1) : 0);
            let bS = (1 - bL) * Math.min(1, bH / 4);
            let bA;
            let bO;
            let bV;
            if (bM.h) {
              bA = bM.h > 0 ? lN - bv : lN + lE + bv;
              bO = lw + bM.c * lB + lB / 2;
              bV = bM.h > 0 ? 90 : -90;
            } else {
              bA = lN + bM.c * lB + lB / 2;
              bO = lw - bv;
              bV = 0;
            }
            if (bM.skin === "blaster") {
              {
                let bI = bH < bM.warn - 4 ? 0 : bH < bM.warn ? Math.min(5, 1 + (bH - (bM.warn - 4))) : 5;
                d.draw_sprite_ext("spr_gasterblaster", bI, Math.round(bA), Math.round(bO), 1, 1, bV, "#ffffff", bS);
              }
            }
          }
        }
      }
    }
    qu.restore();
  }
};
w(obj_tetrisfx, "obj_tetrisfx");
K(obj_tetrisfx, "kinds", z("obj_tetrisfx", R));
K(obj_tetrisfx, "defaultDepth", -100000);
var qE = obj_tetrisfx;
var qT = null;
var obj_tetrisbg = class Lz extends R {
  create() {
    this.t = 0;
  }
  step() {
    this.t++;
  }
  draw(j) {
    let qC = j.ctx;
    qC.save();
    qC.imageSmoothingEnabled = false;
    let qi = field();
    let qQ = qi && qi.S ? qi.S : null;
    let b0 = qQ ? Math.max(0, qQ.f) : this.t;
    qC.fillStyle = "#000000";
    qC.fillRect(-10, -10, 660, 500);
    let b5 = stageOf(qQ ? qQ.level : 1);
    let b6 = qQ && qQ.lvfx && qQ.lvfx.n > 1 && stageOf(qQ.lvfx.n - 1) !== b5 ? Math.min(1, (qQ.f - qQ.lvfx.f0) / 24) : 1;
    if (b6 < 1) {
      drawStage(j, qC, stageOf(qQ.lvfx.n - 1).id, b0, qQ, 1);
    }
    drawStage(j, qC, b5.id, b0, qQ, b6);
    qC.restore();
  }
};
w(obj_tetrisbg, "obj_tetrisbg");
K(obj_tetrisbg, "kinds", z("obj_tetrisbg", R));
K(obj_tetrisbg, "defaultDepth", 100000);
var qw = obj_tetrisbg;
function battleGrid(d, l, j) {
  let qC = F.bg_battleback1;
  let qu = qC && qC.img && qC.img[0];
  let qr = qC && qC.w || 50;
  let qi = qC && qC.h || 50;
  if (qu && qu.width && (!qT || qT.img !== qu)) {
    let b8 = mkCanvas(640 + qr * 3, 480 + qi * 3);
    if (b8) {
      let b9 = b8.getContext("2d");
      b9.imageSmoothingEnabled = false;
      for (let bl = 0; bl < b8.height; bl += qi) {
        for (let bj = 0; bj < b8.width; bj += qr) {
          b9.drawImage(qu, bj, bl);
        }
      }
      const bd = {
        img: qu,
        c: b8
      };
      qT = bd;
    }
  }
  let b1 = l * 0.5 % 100;
  let b5 = l % 100;
  let b6 = (bD, bf, bY) => {
    d.globalAlpha = bY * j;
    bD = Math.round(bD);
    bf = Math.round(bf);
    if (qT) {
      d.drawImage(qT.c, (bD % qr + qr) % qr - qr * 2, (bf % qi + qi) % qi - qi * 2);
    } else {
      d.fillStyle = "#420042";
      for (let bS = (bD % 50 + 50) % 50 + 25; bS < 640; bS += 50) {
        d.fillRect(bS, 0, 1, 480);
      }
      for (let bA = (bf % 50 + 50) % 50 + 25; bA < 480; bA += 50) {
        d.fillRect(0, bA, 640, 1);
      }
    }
    d.globalAlpha = 1;
  };
  b6(-100 + b1, -100 + b1, 0.5);
  b6(-200 - b5, -210 - b5, 1);
}
w(battleGrid, "battleGrid");
function tileSprite(d, l, j, D, qC, qu, qr = 1) {
  let b6 = F[l];
  if (!b6) {
    return;
  }
  let b7 = b6.w * qr;
  let b8 = b6.h * qr;
  let b9 = (D % b7 + b7) % b7 - b7;
  let bd = (qC % b8 + b8) % b8 - b8;
  for (let bl = bd; bl < 480; bl += b8) {
    for (let bj = b9; bj < 640; bj += b7) {
      d.draw_sprite_ext(l, j, Math.round(bj), Math.round(bl), qr, qr, 0, "#ffffff", qu);
    }
  }
}
w(tileSprite, "tileSprite");
function knightFlow(d, j, D) {
  d.draw_sprite_ext("spr_knight_bullet_flow", 0, 0, 0, 2, 2, 0, "#ffffff", D);
  let b0 = -(j * 3 % 640);
  d.draw_sprite_ext("spr_knight_bullet_flow", 1, b0, 0, 2, 2, 0, "#ffffff", D);
  d.draw_sprite_ext("spr_knight_bullet_flow", 1, b0 + 640, 0, 2, 2, 0, "#ffffff", D);
}
w(knightFlow, "knightFlow");
var qn = [[6, 258, 108, 102], [126, 270, 106, 90], [8, 404, 104, 116], [124, 414, 112, 106]];
function drawStage(d, l, j, D, qC, qu) {
  if (qu <= 0) {
    return;
  }
  let b1 = qC ? beatOf(qC) : D / 15;
  let b5 = qC && !qC.done && frac(b1) < 0.12 ? 1 : 0;
  switch (j) {
    case "ch1":
      {
        {
          battleGrid(l, D, qu);
          for (let b6 = 0; b6 < 6; b6++) {
            {
              let [b9, bd, bl, bj] = qn[b6 % 4];
              let bD = [30, 170, 470, 560, 250, 380][b6];
              let bf = (([60, 300, 120, 360, 420, 20][b6] - D * 0.35) % 560 + 560) % 560 - 90;
              d.draw_sprite_part_ext("bg_cctiles", 0, b9, bd, bl, bj, bD, bf, 1, 1, "#8080ff", (0.16 + 0.08 * b5) * qu);
            }
          }
          break;
        }
      }
    case "ch2":
      {
        {
          tileSprite(d, "spr_cyber_starry_stars", 0, -D * 0.2, 0, 0.9 * qu);
          let bb = -(D * 0.6 % 1000);
          for (let bs = bb; bs < 640; bs += 1000) {
            d.draw_sprite_ext("bg_cityscape", 0, Math.round(bs), 188, 1, 1, 0, "#ffffff", (0.55 + 0.1 * b5) * qu);
          }
          break;
        }
      }
    case "ch3":
      {
        tileSprite(d, "spr_dw_tv_starbgtile", (D >> 2) % 29, 0, 0, (0.4 + 0.08 * b5) * qu);
        break;
      }
    case "ch4":
      {
        {
          battleGrid(l, D, qu * 0.6);
          tileSprite(d, "spr_bg_fountain1", 0, 0, -D * 0.5, (0.1 + 0.04 * b5) * qu);
          break;
        }
      }
    case "ut":
      {
        {
          l.globalAlpha = qu;
          l.fillStyle = "#1c1404";
          l.fillRect(0, 0, 640, 480);
          let bL = D * 0.4 % 160;
          for (let bv = -bL - 160; bv < 640; bv += 160) {
            l.fillStyle = b5 ? "#4a3610" : "#3a2a0c";
            l.fillRect(Math.round(bv) + 50, 0, 60, 330);
            l.fillStyle = "#000000";
            l.fillRect(Math.round(bv), 0, 36, 330);
            l.fillRect(Math.round(bv) + 124, 0, 36, 330);
          }
          l.fillStyle = "#000000";
          l.fillRect(0, 300, 640, 30);
          l.globalAlpha = 1;
          break;
        }
      }
    case "knight":
      {
        {
          knightFlow(d, D, qu);
          break;
        }
      }
    default:
      knightFlow(d, D, 0.5 * qu);
      tileSprite(d, "spr_bg_fountain1", 0, 0, -D * 1.5, (0.22 + 0.06 * b5) * qu);
  }
}
w(drawStage, "drawStage");
function buildTetrisFight() {
  const D = {
    cls: fe,
    type: 201
  };
  D.x = 560;
  D.y = 120;
  D.setup = setupTetrisStats;
  return {
    id: "tetris",
    name: "TETRIS",
    chapter: 0,
    custom: true,
    customTag: "ORIGINAL",
    area: "Special",
    special: true,
    desc: "Pieces fall on the beat.#Live in the gaps until#the last line clears.",
    party: [1, 2, 3],
    monsters: [D],
    battlemsg: "* The pieces start to fall.",
    encounterno: 0,
    music: null,
    continuous: true,
    bg: "plain",
    background: () => {
      E(0, 0, qw);
    },
    partyhp: 220,
    icon: "tetris",
    musiclevel: [1, 1]
  };
}
w(buildTetrisFight, "buildTetrisFight");
function openTetris() {
  let qC = q();
  if (!qC) {
    return;
  }
  let qr = (qC.fights || []).find(qQ => qQ.id === "tetris");
  if (qr) {
    if (qC.menu && qC.menu.pick) {
      qC.menu.pick(qr);
    } else if (qC.startFight) {
      qC.startFight(qr);
    }
  }
}
w(openTetris, "openTetris");
y({
  id: "special:tetris",
  title: "TETRIS",
  group: "FIGHT",
  keywords: "tetris tetromino korobeiniki blocks lines special",
  states: ["menu"],
  owner: "tetris",
  icon: "tetris",
  desc: "Tetrominoes fall on the beat of Korobeiniki. Dodge lasers, sweeps and the pinwheel, steer the gold piece with Z, survive the top-out.",
  value: w(() => {
    let qr = s("achievements");
    let qi = qQ => {
      try {
        return !!qr && !!qr.isUnlocked && !!qr.isUnlocked(qQ);
      } catch {
        return false;
      }
    };
    if (qi("TETRIS_NOHIT")) {
      return "NO HIT";
    } else if (qi("TETRIS_SURVIVE")) {
      return "CLEARED";
    } else if (qi("TETRIS_L10")) {
      return "LEVEL 10";
    } else {
      return "";
    }
  }, "value"),
  run: w(() => openTetris(), "run")
});
Z(fe, "G.mnfight = 2;");
export { la as a, buildTetrisFight as b };
