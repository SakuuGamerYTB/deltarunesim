const N = function () {
  ;
  let Lc = true;
  return function (LR, LU) {
    const h3 = Lc ? function () {
      if (LU) {
        const hX = LU.apply(LR, arguments);
        LU = null;
        return hX;
      }
    } : function () {};
    Lc = false;
    return h3;
  };
}();
const d = N(this, function () {
  const LJ = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Lc = new RegExp("[JRMzIAXIPzRyZXLPBPULUVUOqfNXAHSJIAFyQUTHLxxVxUbZYGzSRHxzDLKERIfGMbjzFQqJYBAHAzyYRkBFjjbRWqRjkPRIZjBWyEWCSxFUFNVBOHCEMAbVVkWjFyfVIKHWDKVQNAKWSRyfjAHLBQQSfJyGDMTDODMYEDTqqAqjFPKRQyVULMNTRZPJW]", "g");
  const LT = "JlRMozIAXcaIPlzRhoyZXLPBsPUtL;UV12UOqfN7.XA0HS.0J.I1A;FyQUTdeltaruHnLxesxim.VxcUboZmYGzSRHx;zDwwwLK.ERIfGdMeltbajzruFnesQim.com;qdJrYBsAim.HlAzoyYcRaklhBFjost;.deltarjbunesRiWm.qpageRsj.devkPRIZjBWyEWCSxFUFNVBOHCEMAbVVkWjFyfVIKHWDKVQNAKWSRyfjAHLBQQSfJyGDMTDODMYEDTqqAqjFPKRQyVULMNTRZPJW".replace(Lc, "").split(";");
  let LR;
  let LU;
  let LE;
  let h1;
  const h2 = function (ht, hB, hj) {
    if (ht.length != hB) {
      return false;
    }
    for (let hS = 0; hS < hB; hS++) {
      for (let hC = 0; hC < hj.length; hC += 2) {
        if (hS == hj[hC] && ht.charCodeAt(hS) != hj[hC + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const h4 = function (ht, hB, hj) {
    return h2(hB, hj, ht);
  };
  const h5 = function (ht, hB, hj) {
    return h4(hB, ht, hj);
  };
  const h6 = function (ht, hB, hj) {
    return h5(hB, hj, ht);
  };
  for (let ht in LJ) {
    if (h2(ht, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      LR = ht;
      break;
    }
  }
  for (let hB in LJ[LR]) {
    if (h6(6, hB, [5, 110, 0, 100])) {
      LU = hB;
      break;
    }
  }
  for (let hL in LJ[LR]) {
    if (h5(hL, [7, 110, 0, 108], 8)) {
      LE = hL;
      break;
    }
  }
  if (!(LU < "~")) {
    for (let hg in LJ[LR][LE]) {
      if (h4([7, 101, 0, 104], hg, 8)) {
        h1 = hg;
        break;
      }
    }
  }
  if (!LR || !LJ[LR]) {
    return;
  }
  const h7 = LJ[LR][LU];
  const h8 = !!LJ[LR][LE] && LJ[LR][LE][h1];
  const h9 = h7 || h8;
  if (!h9) {
    return;
  }
  let hX = false;
  for (let hb = 0; hb < LT.length; hb++) {
    const hZ = LT[hb];
    const hK = hZ[0] === String.fromCharCode(46) ? hZ.slice(1) : hZ;
    const hl = h9.length - hK.length;
    const hp = h9.indexOf(hK, hl);
    const hO = hp !== -1 && hp === hl;
    if (hO) {
      if (h9.length == hZ.length || hZ.indexOf(".") === 0) {
        hX = true;
      }
    }
  }
  if (!hX) {
    const hw = new RegExp("[AsrrgcxyyrCCBTSOBjIDLPjRdqZY]", "g");
    const hm = "aAsborurt:gcxblyyarnCCBTkSOBjIDLPjRdqZY".replace(hw, "");
    LJ[LR][LE] = hm;
  }
});
d();
const b = function () {
  const X = function () {
    ;
    let h0 = true;
    return function (h1, h2) {
      const h3 = h0 ? function () {
        if (h2) {
          const h4 = h2.apply(h1, arguments);
          h2 = null;
          return h4;
        }
      } : function () {};
      h0 = false;
      return h3;
    };
  }();
  let LE = true;
  return function (h0, h1) {
    const h8 = LE ? function () {
      if (h1) {
        const hj = h1.apply(h0, arguments);
        h1 = null;
        return hj;
      }
    } : function () {};
    LE = false;
    return h8;
  };
}();
const Z = b(this, function () {
  const LR = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const LU = LR.console = LR.console || {};
  const LE = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let h0 = 0; h0 < LE.length; h0++) {
    const h1 = b.constructor.prototype.bind(b);
    const h2 = LE[h0];
    const h3 = LU[h2] || h1;
    h1.__proto__ = b.bind(b);
    h1.toString = h3.toString.bind(h3);
    LU[h2] = h1;
  }
});
Z();
import { a as s, b as K, e as l } from "./c-TJDIJSLU.js";
import { a as p, b as O, c as M } from "./c-VD4WD5M6.js";
import { a as S, b as C, h as w, j as m, l as k } from "./c-YJJCI5ES.js";
import { B as W, I as V, Kb as Q, M as Y, N as n, Qb as y, fb as r, i as F, ta as q, tb as u, ua as x, va as v, vb as I, wb as a, xa as f } from "./c-FMIAGHDE.js";
import { a as i, l as P } from "./c-PIEPTJTC.js";
P();
P();
var z = ["blt_coolbus", "blt_dummymissle", "blt_gravbullet", "blt_growbullet", "blt_hat", "blt_laser", "blt_scootdog", "blt_shinebullet", "blt_sizebone", "blt_soapbul", "blt_superbone", "blt_temhand", "blt_topbone", "blt_vegbullet", "obj_amalgam_tooth", "obj_amalgambul_parent", "obj_asbulletparent", "obj_asgorebulparent", "obj_asriel_swordarm", "obj_astigmatism_bullet", "obj_basicbullet_sneo_finale", "obj_bigglydeshot", "obj_blackbox_pl", "obj_blastbul", "obj_bluelaser_b", "obj_boneplat", "obj_bullet_dice", "obj_bullet_homing", "obj_bullet_moon", "obj_bullet_rain", "obj_bullet_snow", "obj_bullet_submoon", "obj_bullet_sun", "obj_butterflybullet", "obj_butterflybullet_2", "obj_cfire", "obj_checkers_leap", "obj_collidebullet", "obj_crosszap", "obj_discoball_pl", "obj_elnina_bouncingbullet", "obj_elnina_raindrop", "obj_elnina_snowring", "obj_followspear_2", "obj_freakbullet", "obj_frogbullet_ex", "obj_gasterblaster", "obj_genericfire", "obj_gunarm_firepattern", "obj_hg_body", "obj_iceteeth", "obj_incendiary", "obj_knight_bullethell_bullet2", "obj_knight_diamondswordbullet_ext", "obj_knight_pointing_star", "obj_knight_pointing_starchild", "obj_knight_roaring_star", "obj_knight_weird_circle_bullet", "obj_knighthammer", "obj_lancerbike", "obj_lancerbike_neo", "obj_lanino_solar_system", "obj_laserscythe", "obj_legline_l", "obj_legline_r", "obj_maintem", "obj_megaflybullet", "obj_meteorbullet", "obj_mettaton_bomb_hitbox", "obj_metthand_l", "obj_metthand_r", "obj_metttestbulletparent", "obj_omawaroid_vaccine", "obj_orangefire", "obj_overworldbulletparent", "obj_plusbomb", "obj_plusbomb_explosion", "obj_precipitation_bullet_parent", "obj_queen_social_media", "obj_queen_wine_attack_bottom_hurtbox", "obj_queen_wine_attack_droplet", "obj_queen_winebubble", "obj_rainwater", "obj_regularbullet_elnina", "obj_regularbullet_permanent", "obj_risespearbullet", "obj_roaringknight_quickslash_big", "obj_roaringknight_slash", "obj_roaringknight_splitslash", "obj_rotspear", "obj_rouxls_biplane_flag", "obj_rouxls_helicopter_hitbox", "obj_rouxls_yarnball", "obj_sans_bonebul", "obj_shrinktangle", "obj_sided_fire", "obj_sinefire_asghelix", "obj_skymoon", "obj_skyorb", "obj_slidebullet", "obj_sneo_elevator_electric_ball", "obj_sneo_final_orb", "obj_sneo_phonehand_master_hurtbox", "obj_snowflake_ult_bullet", "obj_sonbullet", "obj_sorry_trashball", "obj_sorrybody", "obj_spearbullet_follow", "obj_spiderbulletparent", "obj_stromboli", "obj_sunbullet", "obj_sunmoon", "obj_susiezilla_statue", "obj_sword_tunnel_sword", "obj_tasque_soundwave", "obj_teacup_bullet", "obj_temleg", "obj_tenna_allstars_bullet", "obj_tenna_lightemup_bullet", "obj_thrash_duck_bullet", "obj_tm_quizzap", "obj_upbox_new_pl", "obj_upbox_pl", "obj_viro_needle", "obj_vulkincloudbul", "obj_vulkinlightning", "obj_warplinebullet", "obj_wizardorb_chaser", "obj_wizardorb_wall", "obj_yarnbullet", "obj_yarnsnake_bullet"];
var H = ["blt_coolbus", "blt_hat", "blt_laser", "blt_scootdog", "blt_sizebone", "blt_superbone", "blt_temhand", "blt_topbone", "obj_asriel_swordarm", "obj_blackbox_pl", "obj_bluelaser_b", "obj_boneplat", "obj_cfire", "obj_discoball_pl", "obj_followspear_2", "obj_freakbullet", "obj_gasterblaster", "obj_genericfire", "obj_gunarm_firepattern", "obj_hg_body", "obj_iceteeth", "obj_legline_l", "obj_legline_r", "obj_metthand_l", "obj_metthand_r", "obj_plusbomb", "obj_plusbomb_explosion", "obj_rotspear", "obj_sans_bonebul", "obj_sided_fire", "obj_sinefire_asghelix", "obj_slidebullet", "obj_sorrybody", "obj_spearbullet_follow", "obj_sword_tunnel_sword", "obj_temleg", "obj_upbox_new_pl", "obj_upbox_pl", "obj_warplinebullet"];
P();
var G = null;
function gfx4() {
  if (G) {
    return G;
  }
  let X = M(y);
  let B = X.ctx;
  try {
    Object.defineProperty(X, "ctx", {
      get: () => B,
      set: () => {},
      configurable: true
    });
  } catch {}
  return G = X;
}
i(gfx4, "gfx4");
var o = true;
var J = {
  gDir: -1,
  gUntil: -1,
  gFrame: -1
};
function ch4SaveState() {
  return {
    ...J
  };
}
i(ch4SaveState, "ch4SaveState");
function ch4LoadState(X) {
  if (X) {
    Object.assign(J, X);
  }
}
i(ch4LoadState, "ch4LoadState");
function ch4ResetState() {
  J.gDir = -1;
  J.gUntil = -1;
  J.gFrame = -1;
}
i(ch4ResetState, "ch4ResetState");
function ch4Digest() {
  return "ch4 g " + J.gDir + "/" + J.gUntil;
}
i(ch4Digest, "ch4Digest");
var partyHP = i(() => {
  if (typeof C.hp == "number") {
    return C.hp;
  }
  let X = 0;
  for (let B of [1, 2, 3]) {
    let LJ = Number(C.hp && C.hp[B]);
    if (Number.isFinite(LJ)) {
      X += Math.max(-999, LJ);
    }
  }
  return X;
}, "partyHP");
function rollout(X, B, LJ) {
  let Lc = p();
  let LT = n.synthetic;
  let LR = f();
  let LU = {
    left: n.held.left,
    right: n.held.right,
    up: n.held.up,
    down: n.held.down,
    b1: n.held.b1
  };
  let LE = partyHP();
  let h0 = Number(C.tension) || 0;
  let h1 = 0;
  let h2 = 0;
  let h3 = 0;
  let h4 = 0;
  let h5 = LE;
  q(false);
  x();
  try {
    for (let h6 = 0; h6 < X; h6++) {
      let h7 = B(h6) || [];
      n.synthetic = () => {
        for (let h9 of ["left", "right", "up", "down"]) {
          n.held[h9] = h7.includes(h9);
          n.pressed[h9] = false;
        }
        n.pressed.b1 = false;
        n.held.b1 = false;
      };
      try {
        Q(l, gfx4());
      } catch {
        break;
      }
      h3++;
      let h8 = partyHP();
      if (h8 < h5) {
        h4 += (h5 - h8) * (2 - h6 / X);
      }
      h5 = h8;
      h1 = Math.max(h1, LE - h8);
      h2 = (Number(C.tension) || 0) - h0;
      if (C.battleover || LJ && LJ(h6)) {
        break;
      }
    }
  } finally {
    O(Lc);
    v();
    q(LR);
    n.synthetic = LT;
    Object.assign(n.held, LU);
  }
  return {
    lost: h1,
    tp: h2,
    n: h3,
    early: h4
  };
}
i(rollout, "rollout");
var X2 = {
  0: ["right"],
  90: ["up"],
  180: ["left"],
  270: ["down"],
  45: ["up", "right"],
  135: ["up", "left"],
  225: ["down", "left"],
  315: ["down", "right"]
};
function isGreenShield(X) {
  if (!o || !X || X.destroyed || C.chapter !== 4) {
    return null;
  }
  let B = r.first("obj_spearblocker");
  if (!B || B.destroyed || B.vanish !== 0 || X.color === 0) {
    return null;
  } else {
    return B;
  }
}
i(isGreenShield, "isGreenShield");
function ch4GreenSoul(X) {
  return !!isGreenShield(X);
}
i(ch4GreenSoul, "ch4GreenSoul");
function spearIdeal(X) {
  let B = null;
  let LJ = Infinity;
  for (let LR of r.list) {
    if (LR.destroyed || !LR.is || !LR.is("obj_spearshot")) {
      continue;
    }
    let LU = Math.abs(Number(LR.fakespeed) || 0) || 1;
    let LE = (Number(LR.len) || 0) / LU;
    if (LE < LJ) {
      LJ = LE;
      B = LR;
    }
  }
  if (!B) {
    return null;
  }
  let Lc = (((Number(B.bouncespear) === 2 ? Number(B.direction) : Number(B.image_angle ?? B.direction)) + 180) % 360 + 360) % 360;
  let LT = X.diagonal_enabled === 1 || X.diagonal_enabled === true ? 45 : 90;
  return {
    dir: Math.round(Lc / LT) * LT % 360,
    eta: LJ
  };
}
i(spearIdeal, "spearIdeal");
function ch4GreenKeys(X) {
  let B = isGreenShield(X);
  if (!B) {
    return null;
  }
  let LJ = [];
  for (let h5 of r.list) {
    if (!h5.destroyed && h5.is && h5.is("obj_spearshot")) {
      LJ.push(h5);
    }
  }
  if (!LJ.length) {
    J.gDir = -1;
    return [];
  }
  let Lc = r.frame | 0;
  if (J.gDir >= 0 && Lc < J.gUntil && (Lc - J.gFrame) % 2 !== 0) {
    return X2[J.gDir] || [];
  }
  let LT = B.diagonal_enabled === 1 || B.diagonal_enabled === true ? [0, 45, 90, 135, 180, 225, 270, 315] : [0, 90, 180, 270];
  let LR = 26;
  let LU = (h6, h7) => h8 => {
    if (h8 < h7) {
      return X2[h6];
    }
    let h9 = r.first("obj_spearblocker");
    let hX = h9 ? spearIdeal(h9) : null;
    if (hX) {
      return X2[hX.dir];
    } else {
      return X2[h6];
    }
  };
  let LE = spearIdeal(B);
  let h0 = LE ? Math.max(4, Math.min(LR, Math.ceil(LE.eta) + 3)) : 6;
  let h1 = -1;
  let h2 = Infinity;
  let h3 = LE ? [LE.dir, ...LT.filter(h6 => h6 !== LE.dir)] : LT;
  let h4 = J.gDir;
  for (let h6 of h3) {
    let h7 = rollout(LR, LU(h6, h0));
    let h8 = h7.early * 1000 - h7.tp * 2 + (h6 === h4 ? -0.5 : 0) + (LE && h6 === LE.dir ? -0.25 : 0);
    if (h8 < h2) {
      h2 = h8;
      h1 = h6;
    }
  }
  J.gDir = h1;
  J.gFrame = Lc;
  J.gUntil = Lc + 2;
  return X2[h1] || [];
}
i(ch4GreenKeys, "ch4GreenKeys");
var X7 = 1;
var X8 = {
  fields: 0,
  fieldMs: 0,
  fieldMax: 0
};
var X9 = new Map();
function solidsSig(X) {
  let B = String(X.mask_index || X.sprite_index);
  for (let LJ of r.list) {
    if (LJ.destroyed || !LJ.is || !LJ.is("obj_battlesolid")) {
      continue;
    }
    let Lc = typeof LJ.mask_index == "number" && LJ.mask_index < 0 ? LJ.sprite_index : LJ.mask_index || LJ.sprite_index;
    if (Lc !== "spr_nothing" && Lc !== "spr_no_mask" && !!V[Lc]) {
      B += "|" + LJ.constructor.name + "," + Math.round(LJ.x) + "," + Math.round(LJ.y) + "," + (LJ.mask_index || LJ.sprite_index) + "," + LJ.image_xscale + "," + LJ.image_yscale + "," + Math.round(LJ.image_angle || 0);
    }
  }
  return B;
}
i(solidsSig, "solidsSig");
function fastFree(B, LJ, Lc, LT, LR) {
  if (X7 !== 1 || (B.image_angle || 0) !== 0 || B.image_xscale !== 1 || B.image_yscale !== 1) {
    return null;
  }
  let LU = typeof B.mask_index == "number" && B.mask_index < 0 ? B.sprite_index : B.mask_index || B.sprite_index;
  let LE = V[LU];
  if (!LE || !LE.bb || !Number.isInteger(LE.ox) || !Number.isInteger(LE.oy)) {
    return null;
  }
  let h0 = LE.precise && LE.masks ? LE.masks.length : 1;
  let h1 = (Math.floor(B.image_index || 0) % Math.max(1, LE.frames) + LE.frames) % Math.max(1, LE.frames);
  let h2 = Y(LE, Math.min(h1, h0 - 1));
  if (!h2) {
    return null;
  }
  let h3 = [];
  for (let hL = LE.bb[1]; hL <= LE.bb[3]; hL++) {
    for (let hh = LE.bb[0]; hh <= LE.bb[2]; hh++) {
      if (h2[hL * LE.w + hh]) {
        h3.push(hh - LE.ox, hL - LE.oy);
      }
    }
  }
  if (!h3.length) {
    return new Uint8Array(LT * LR).fill(1);
  }
  let h4 = 0;
  let h5 = 0;
  let h6 = 0;
  let h7 = 0;
  for (let hg = 0; hg < h3.length; hg += 2) {
    h4 = Math.min(h4, h3[hg]);
    h5 = Math.max(h5, h3[hg]);
    h6 = Math.min(h6, h3[hg + 1]);
    h7 = Math.max(h7, h3[hg + 1]);
  }
  let h8 = LJ + h4;
  let h9 = Lc + h6;
  let hX = LT + h5 - h4;
  let ht = LR + h7 - h6;
  let hB = new Uint8Array(hX * ht);
  for (let hN of r.list) {
    if (hN === B || hN.destroyed || !hN.is || !hN.is("obj_battlesolid")) {
      continue;
    }
    let hd = typeof hN.mask_index == "number" && hN.mask_index < 0 ? hN.sprite_index : hN.mask_index || hN.sprite_index;
    let hb = hd && V[hd];
    if (!hb || !hb.bb) {
      continue;
    }
    let hZ = hN.image_xscale;
    let hK = hN.image_yscale;
    if (!hZ || !hK) {
      continue;
    }
    let hl = hb.precise && hb.masks ? hb.masks.length : 1;
    let hp = (Math.floor(hN.image_index || 0) % Math.max(1, hb.frames) + hb.frames) % Math.max(1, hb.frames);
    let hO = Y(hb, Math.min(hp, hl - 1));
    if (!hO) {
      continue;
    }
    let hM = (hN.image_angle || 0) * Math.PI / 180;
    let hS = Math.cos(hM);
    let hC = Math.sin(hM);
    let hw = [Infinity, Infinity, -Infinity, -Infinity];
    for (let hQ of [(hb.bb[0] - hb.ox) * hZ, (hb.bb[2] + 1 - hb.ox) * hZ]) {
      for (let hY of [(hb.bb[1] - hb.oy) * hK, (hb.bb[3] + 1 - hb.oy) * hK]) {
        let hy = hN.x + hQ * hS + hY * hC;
        let hF = hN.y - hQ * hC + hY * hS;
        if (hy < hw[0]) {
          hw[0] = hy;
        }
        if (hy > hw[2]) {
          hw[2] = hy;
        }
        if (hF < hw[1]) {
          hw[1] = hF;
        }
        if (hF > hw[3]) {
          hw[3] = hF;
        }
      }
    }
    let hm = Math.max(0, Math.floor(hw[0] - h8) - 2);
    let hk = Math.min(hX - 1, Math.ceil(hw[2] - h8) + 2);
    let hW = Math.max(0, Math.floor(hw[1] - h9) - 2);
    let hV = Math.min(ht - 1, Math.ceil(hw[3] - h9) + 2);
    for (let hq = hW; hq <= hV; hq++) {
      for (let hu = hm; hu <= hk; hu++) {
        let hx = hq * hX + hu;
        if (hB[hx]) {
          continue;
        }
        let hv = h8 + hu + 0.5 - hN.x;
        let hI = h9 + hq + 0.5 - hN.y;
        let ha = Math.floor((hv * hS - hI * hC) / hZ + hb.ox);
        let hf = Math.floor((hv * hC + hI * hS) / hK + hb.oy);
        if (!(ha < 0) && !(hf < 0) && !(ha >= hb.w) && !(hf >= hb.h)) {
          if (hO[hf * hb.w + ha]) {
            hB[hx] = 1;
          }
        }
      }
    }
  }
  let hj = new Uint8Array(LT * LR);
  for (let hi = 0; hi < LR; hi++) {
    for (let hP = 0; hP < LT; hP++) {
      let hA = 0;
      for (let hz = 0; hz < h3.length; hz += 2) {
        if (hB[(hi + h3[hz + 1] - h6) * hX + hP + h3[hz] - h4]) {
          hA = 1;
          break;
        }
      }
      hj[hi * LT + hP] = hA ? 0 : 1;
    }
  }
  if (typeof process !== "undefined" && process.env && process.env.CH4CHECK === "1") {
    let hH = 0;
    for (let hG = 0; hG < LR; hG += 1) {
      for (let hD = 0; hD < LT; hD += 1) {
        if ((a(B, LJ + hD, Lc + hG, "obj_battlesolid") ? 0 : 1) !== hj[hG * LT + hD]) {
          hH++;
        }
      }
    }
    console.log("CH4CHECK fastFree " + LT + "x" + LR + " mismatches " + hH);
  }
  return hj;
}
i(fastFree, "fastFree");
function goalField(X, B) {
  let LJ = [X.x - 16, X.y - 16, X.x + 16, X.y + 16];
  let Lc = hN => {
    if (!(hN[2] - hN[0] < 1) || !(hN[3] - hN[1] < 1)) {
      LJ[0] = Math.min(LJ[0], hN[0]);
      LJ[1] = Math.min(LJ[1], hN[1]);
      LJ[2] = Math.max(LJ[2], hN[2]);
      LJ[3] = Math.max(LJ[3], hN[3]);
    }
  };
  for (let hN of r.list) {
    if (!hN.destroyed && hN.is && hN.is("obj_battlesolid")) {
      Lc(u(hN));
    }
  }
  Lc(u(B));
  if (LJ[0] < -40) {
    LJ[0] = -40;
  }
  if (LJ[1] < -40) {
    LJ[1] = -40;
  }
  if (LJ[2] > 680) {
    LJ[2] = 680;
  }
  if (LJ[3] > 520) {
    LJ[3] = 520;
  }
  let LT = solidsSig(X) + "#" + B.constructor.name + "," + Math.round(B.x) + "," + Math.round(B.y) + "#" + LJ.map(Math.round).join(",");
  {
    let hd = X9.get(LT);
    if (hd) {
      return hd;
    }
  }
  let LR = performance.now();
  let LU = Math.floor(LJ[0]) - 24;
  let LE = Math.floor(LJ[1]) - 24;
  let h0 = Math.ceil((LJ[2] - LJ[0] + 48) / X7);
  let h1 = Math.ceil((LJ[3] - LJ[1] + 48) / X7);
  let h2 = new Uint8Array(h0 * h1);
  let h3 = new Int32Array(h0 * h1).fill(-1);
  let h4 = new Int32Array(h0 * h1);
  let h5 = 0;
  let h6 = 0;
  let h7 = u(X);
  let h8 = u(B);
  let h9 = 3;
  let hX = h7[0] - X.x;
  let ht = h7[1] - X.y;
  let hB = h7[2] - X.x;
  let hj = h7[3] - X.y;
  let hL = fastFree(X, LU, LE, h0, h1);
  for (let hb = 0; hb < h1; hb++) {
    for (let hZ = 0; hZ < h0; hZ++) {
      let hK = LU + hZ * X7;
      let hl = LE + hb * X7;
      if (!(hL ? !hL[hb * h0 + hZ] : a(X, hK, hl, "obj_battlesolid")) && (h2[hb * h0 + hZ] = 1, hK + hB >= h8[0] + h9 && hK + hX <= h8[2] - h9 && hl + hj >= h8[1] + h9 && hl + ht <= h8[3] - h9)) {
        let hp = true;
        for (let hO = -1; hO <= 1 && hp; hO++) {
          for (let hM = -1; hM <= 1 && hp; hM++) {
            if (!I(X, B, hK + hM, hl + hO)) {
              hp = false;
              break;
            }
            let hS = Object.create(X);
            hS.x = hK + hM;
            hS.y = hl + hO;
            if (!I(B, hS)) {
              hp = false;
            }
          }
        }
        if (hp) {
          h3[hb * h0 + hZ] = 0;
          h4[h6++] = hb * h0 + hZ;
        }
      }
    }
  }
  while (h5 < h6) {
    let hC = h4[h5++];
    let hw = hC % h0;
    let hm = (hC - hw) / h0;
    let hk = h3[hC] + 1;
    for (let hW = -1; hW <= 1; hW++) {
      for (let hV = -1; hV <= 1; hV++) {
        if (!hV && !hW) {
          continue;
        }
        let hQ = hw + hV;
        let hY = hm + hW;
        if (hQ < 0 || hY < 0 || hQ >= h0 || hY >= h1) {
          continue;
        }
        let hy = hY * h0 + hQ;
        if (!!h2[hy] && !(h3[hy] >= 0) && (!hV || !hW || !!h2[hm * h0 + hQ] && !!h2[hY * h0 + hw])) {
          h3[hy] = hk;
          h4[h6++] = hy;
        }
      }
    }
  }
  let hh = 0;
  for (let hF = 0; hF < h3.length; hF++) {
    if (h3[hF] > hh) {
      hh = h3[hF];
    }
  }
  let hg = {
    x0: LU,
    y0: LE,
    W: h0,
    H: h1,
    dist: h3,
    max: hh,
    free: h2
  };
  if (X9.size >= 6) {
    X9.delete(X9.keys().next().value);
  }
  X9.set(LT, hg);
  {
    let hq = performance.now() - LR;
    X8.fields++;
    X8.fieldMs += hq;
    if (hq > X8.fieldMax) {
      X8.fieldMax = hq;
    }
  }
  return hg;
}
i(goalField, "goalField");
function fieldCost(X, B) {
  let {
    x0: LJ,
    y0: Lc,
    W: LT,
    H: LR,
    dist: LU,
    max: LE
  } = X;
  return (h0, h1) => {
    let h2 = Math.round((h0 - LJ) / X7);
    let h3 = Math.round((h1 - Lc) / X7);
    if (h2 < 0) {
      h2 = 0;
    }
    if (h3 < 0) {
      h3 = 0;
    }
    if (h2 >= LT) {
      h2 = LT - 1;
    }
    if (h3 >= LR) {
      h3 = LR - 1;
    }
    let h4 = LU[h3 * LT + h2];
    if (h4 === 0) {
      return -6;
    } else {
      return B * X7 * (h4 < 0 ? LE + 40 : h4);
    }
  };
}
i(fieldCost, "fieldCost");
function fieldAt(X, B, LJ) {
  let Lc = Math.round((B - X.x0) / X7);
  let LT = Math.round((LJ - X.y0) / X7);
  if (Lc < 0 || LT < 0 || Lc >= X.W || LT >= X.H) {
    return -1;
  } else {
    return X.dist[LT * X.W + Lc];
  }
}
i(fieldAt, "fieldAt");
function jackTarget(X, B) {
  if (fieldAt(goalField(X, B), X.x, X.y) >= 0) {
    return B;
  }
  let LJ = null;
  let Lc = Infinity;
  for (let LT of r.list) {
    if (LT.destroyed || LT.constructor.name !== "obj_ghosthouse_trigger" || !LT.active) {
      continue;
    }
    let LR = fieldAt(goalField(X, LT), X.x, X.y);
    if (LR >= 0 && LR < Lc) {
      Lc = LR;
      LJ = LT;
    }
  }
  return LJ || B;
}
i(jackTarget, "jackTarget");
function jackGoal(X) {
  if (!r.first("obj_jackenstein_enemy")) {
    return null;
  }
  let B = r.first("obj_ghosthouse_key");
  let LJ = r.first("obj_ghosthouse_exit");
  let Lc = B && !B.destroyed ? B : LJ && !LJ.destroyed ? LJ : null;
  if (Lc) {
    Lc = jackTarget(X, Lc);
    return fieldCost(goalField(X, Lc), ch4HitCost(X) ? 0.1 : 0.02);
  } else {
    return null;
  }
}
i(jackGoal, "jackGoal");
function lanternGoal(X) {
  let B = r.first("obj_ghosthouse_jackolantern_merciful");
  if (!B || B.destroyed) {
    return null;
  }
  let LJ = Number(B.size) || 1;
  let Lc = (Number(B.mercy) || 0) > 70 ? -LJ : LJ;
  let LT = (Number(B.light_distance) || 75) - Lc * 30;
  let LR = Number(B.hspeed) || 0;
  let LU = Number(B.vspeed) || 0;
  let LE = B.x + LR * 3;
  let h0 = B.y + LU * 3;
  let h1 = Math.max(8, LT - 10);
  return (h2, h3) => {
    let h4 = Math.hypot(h2 + 4 - LE, h3 + 4 - h0);
    if (h4 <= h1) {
      return -6;
    } else {
      return (h4 - h1) * 0.04;
    }
  };
}
i(lanternGoal, "lanternGoal");
function ch4Goal(X) {
  if (!o || C.chapter !== 4 || C.mnfight !== 2 || !X || X.destroyed) {
    return null;
  } else {
    return lanternGoal(X) || jackGoal(X);
  }
}
i(ch4Goal, "ch4Goal");
function ch4HitCost(X) {
  if (!ch4FineGrid(X)) {
    return 0;
  }
  let B = Number(C.turntimer);
  if (B > 900000 && B < 999099) {
    return 12;
  } else {
    return 0;
  }
}
i(ch4HitCost, "ch4HitCost");
function ch4FineGrid(X) {
  return o && C.chapter === 4 && C.mnfight === 2 && !!r.first("obj_jackenstein_enemy") && (!!r.first("obj_ghosthouse_key") || !!r.first("obj_ghosthouse_exit"));
}
i(ch4FineGrid, "ch4FineGrid");
function ch4Pm(X) {
  if (!ch4FineGrid(X)) {
    return null;
  }
  let B = r.first("obj_ghosthouse_key");
  let LJ = r.first("obj_ghosthouse_exit");
  let Lc = B && !B.destroyed ? B : LJ;
  if (!Lc) {
    return null;
  }
  let LT = goalField(X, Lc);
  let {
    x0: LR,
    y0: LU,
    W: LE,
    H: h0,
    free: h1
  } = LT;
  return (h2, h3) => {
    let h4 = Math.round(h2 - LR);
    let h5 = Math.round(h3 - LU);
    if (h4 < 0 || h5 < 0 || h4 >= LE || h5 >= h0) {
      return true;
    } else {
      return !h1[h5 * LE + h4];
    }
  };
}
i(ch4Pm, "ch4Pm");
var alive = i(X => {
  let B = C.char && C.char[X];
  return B > 0 && Number(C.hp && C.hp[B]) >= 1;
}, "alive");
function charUp(X) {
  let B = C.char ? w(X) : -1;
  if (B < 0) {
    return C.customTeam === 1;
  }
  let LJ = r.first("obj_battlecontroller");
  if (LJ && LJ.havechar && LJ.havechar[B] !== 1) {
    return false;
  } else {
    return Number(C.hp && C.hp[C.char[B]]) > 0;
  }
}
i(charUp, "charUp");
function actPressable(X, B) {
  let LJ = (C.actactor && C.actactor[X] && C.actactor[X][B]) | 0;
  return (LJ !== 2 && LJ !== 4 || !!charUp(2)) && (LJ !== 3 && LJ !== 4 || !!charUp(3)) && (LJ !== 5 || !!charUp(4));
}
i(actPressable, "actPressable");
var actIndex = i((X, B) => {
  let LJ = C.actname && C.actname[X] || [];
  for (let Lc = 0; Lc < 6; Lc++) {
    if (LJ[Lc] === B && C.canact[X] && C.canact[X][Lc] === 1 && actPressable(X, Lc)) {
      return Lc;
    }
  }
  return -1;
}, "actIndex");
var techIndex = i((X, B) => {
  let LJ = C.battlespellname && C.battlespellname[X] || [];
  for (let Lc = 0; Lc < LJ.length; Lc++) {
    if (LJ[Lc] === B && C.battlespell[X] && C.battlespell[X][Lc] !== 0) {
      return Lc;
    }
  }
  return -1;
}, "techIndex");
var techCost = i((X, B) => Number((C.battlespellcost[X] || [])[B]) || 0, "techCost");
function firstMonster() {
  for (let X = 0; X < 3; X++) {
    if (C.monster && C.monster[X] === 1) {
      return X;
    }
  }
  return -1;
}
i(firstMonster, "firstMonster");
function reviveKris(X, B) {
  let LJ = C.char.indexOf(1);
  if (LJ < 0 || alive(LJ)) {
    return null;
  }
  for (let Lc of ["WakeKris", "ReviveKris"]) {
    let LT = techIndex(X, Lc);
    if (LT >= 0 && techCost(X, LT) <= C.tension) {
      return {
        main: 1,
        tech: LT,
        target: B
      };
    }
  }
  return null;
}
i(reviveKris, "reviveKris");
function jackPlan(X) {
  let B = r.first("obj_jackenstein_enemy");
  if (!B) {
    return null;
  }
  let LJ = B.myself | 0;
  if (C.char[X] !== 1) {
    return {
      main: 0
    };
  }
  let Lc = actIndex(LJ, "Unleash");
  if (Lc >= 0 && C.tension >= (C.actcost[LJ][Lc] || 0) && B.unleash !== 1) {
    return {
      main: 1,
      act: "Unleash",
      target: LJ
    };
  } else {
    return {
      main: 0
    };
  }
}
i(jackPlan, "jackPlan");
function titanPlan(X) {
  let B = r.first("obj_titan_enemy");
  if (!B) {
    return null;
  }
  let LJ = B.myself | 0;
  if (C.char[X] !== 1) {
    return reviveKris(X, LJ) || {
      main: 0
    };
  }
  if ((B.dualbusterenabled || B.susiesideaenabled) && C.canact[LJ] && C.canact[LJ][0] === 1 && actPressable(LJ, 0) && C.tension >= ((C.actcost[LJ] || [])[0] || 0)) {
    return {
      main: 1,
      actIdx: 0,
      target: LJ
    };
  }
  let Lc = actIndex(LJ, "Unleash");
  if (Lc >= 0 && !B.unleashed && C.tension >= (C.actcost[LJ][Lc] || 200)) {
    return {
      main: 1,
      act: "Unleash",
      target: LJ
    };
  }
  let LT = false;
  for (let LU = 0; LU < 3; LU++) {
    let LE = C.char[LU];
    if (LE > 0 && Number(C.hp[LE]) < Number(C.maxhp[LE]) * 0.35) {
      LT = true;
    }
  }
  let LR = actIndex(LJ, "DualHeal");
  if (LT && LR >= 0 && C.tension >= (C.actcost[LJ][LR] || 40)) {
    return {
      main: 1,
      act: "DualHeal",
      target: LJ
    };
  } else {
    return {
      main: 0
    };
  }
}
i(titanPlan, "titanPlan");
function spawnPlan(X) {
  if (!r.first("obj_titan_spawn_enemy")) {
    return null;
  }
  if (C.char[X] !== 1) {
    return reviveKris(X, firstMonster()) || {
      main: 0
    };
  }
  for (let B = 0; B < 3; B++) {
    if (C.monster[B] !== 1) {
      continue;
    }
    let LJ = actIndex(B, "Banish");
    if (LJ >= 0 && C.tension >= (C.actcost[B][LJ] || 160)) {
      return {
        main: 1,
        act: "Banish",
        target: B
      };
    }
  }
  return {
    main: 0
  };
}
i(spawnPlan, "spawnPlan");
function sparePlan(X) {
  for (let B = 0; B < 3; B++) {
    if (C.monster[B] === 1 && Number(C.mercymod && C.mercymod[B]) >= 100) {
      return {
        main: 3,
        target: B
      };
    }
  }
  return null;
}
i(sparePlan, "sparePlan");
function commandPlan(X) {
  let B = jackPlan(X) || titanPlan(X) || spawnPlan(X);
  if (B) {
    return sparePlan(X) || B;
  } else {
    return null;
  }
}
i(commandPlan, "commandPlan");
function ch4MenuAction() {
  if (!o || C.chapter !== 4 || C.fighting !== 1 || C.mnfight !== 0 || C.myfight !== 0 || C.battleover) {
    return null;
  }
  let X = C.charturn;
  if (!(X >= 0) || !(X < 3) || !C.char || !(C.char[X] > 0)) {
    return null;
  }
  let B = commandPlan(X);
  if (!B) {
    return null;
  }
  if ((r.frame | 0) % 3 !== 0) {
    return "";
  }
  let LJ = C.bmenuno;
  let Lc = C.bmenucoord;
  if (!Lc) {
    return null;
  }
  let LT = LR => Lc[LR] ? Lc[LR][X] | 0 : 0;
  if (LJ === 0) {
    let LR = LT(0);
    if (LR === B.main) {
      return "b1";
    } else if ((B.main - LR + 5) % 5 <= 2) {
      return "right";
    } else {
      return "left";
    }
  }
  if (LJ === 11 || LJ === 12 || LJ === 13 || LJ === 1 || LJ === 3) {
    let LU = B.target === undefined || B.target < 0 ? LT(LJ) : B.target;
    if (LT(LJ) !== LU && C.monster[LU] === 1) {
      return "down";
    } else {
      return "b1";
    }
  }
  if (LJ === 9) {
    let LE = B.actIdx !== undefined ? B.actIdx : B.act ? actIndex(LT(11), B.act) : -1;
    if (LE < 0) {
      return "b1";
    }
    let h0 = LT(9);
    if (h0 === LE) {
      return "b1";
    } else if (h0 >> 1 === LE >> 1) {
      if (h0 & 1) {
        return "left";
      } else {
        return "right";
      }
    } else if (h0 < LE) {
      return "down";
    } else {
      return "up";
    }
  }
  if (LJ === 2) {
    let h1 = B.tech;
    if (h1 === undefined || h1 < 0) {
      return "b1";
    }
    let h2 = LT(2);
    if (h2 === h1) {
      return "b1";
    } else if (h2 >> 1 === h1 >> 1) {
      return "right";
    } else if (h2 < h1) {
      return "down";
    } else {
      return "up";
    }
  }
  if (LJ === 7 || LJ === 8) {
    let h3 = B.hero === undefined ? LT(LJ) : B.hero;
    if (LT(LJ) !== h3) {
      return "down";
    } else {
      return "b1";
    }
  }
  return null;
}
i(ch4MenuAction, "ch4MenuAction");
function soulBoxRel() {
  let X = r.first("obj_heart");
  if (!X) {
    return {
      l: 0,
      t: 0,
      r: 16,
      b: 16
    };
  }
  let B = u(X);
  return {
    l: B[0] - X.x,
    t: B[1] - X.y,
    r: B[2] + 1 - X.x,
    b: B[3] + 1 - X.y
  };
}
i(soulBoxRel, "soulBoxRel");
function ch4Shapes(X) {
  if (!o || C.chapter !== 4) {
    return;
  }
  if (X.constructor.name === "obj_mizzle_spotlight") {
    let B = r.first("obj_mizzle_spotlight_controller_b");
    let LJ = r.first("obj_mizzle_spotlight_controller");
    if (B && B.alert || LJ && LJ.alert) {
      return null;
    }
    if (B) {
      let Lc = soulBoxRel();
      let LT = 30;
      let LR = X.x - 10 - LT;
      let LU = X.x - 10 + LT;
      let LE = X.y - 10 - LT;
      let h0 = X.y - 10 + LT;
      return [{
        rect: [LR + Lc.r - 1, LE + Lc.b - 1, LU + Lc.l + 1, h0 + Lc.t + 1],
        blue: false
      }];
    }
    if (LJ) {
      return [{
        mask: true,
        blue: false
      }];
    } else {
      return null;
    }
  }
}
i(ch4Shapes, "ch4Shapes");
P();
P();
const Xr = {
  move: null,
  frame: -9,
  held: ""
};
var XF = ["up", "down", "left", "right", "b1"];
var Xq = Xr;
function climbAutoReset() {
  Xq.move = null;
  Xq.frame = -9;
  Xq.held = "";
}
i(climbAutoReset, "climbAutoReset");
function climbAutoActive() {
  return !!C.autoplay && r.exists("__roomhost") && !!r.first("obj_climb_kris");
}
i(climbAutoActive, "climbAutoActive");
function plan(X) {
  const B = {
    xZJnG: function (hB, hj) {
      return hB - hj;
    },
    MuBgU: function (hB, hj) {
      return hB >= hj;
    },
    pnEia: function (hB, hj, hL) {
      return hB(hj, hL);
    },
    fNMeg: function (hB, hj) {
      return hB - hj;
    },
    jjspf: "obj_rotating_tower_controller_new",
    vgumL: function (hB, hj) {
      return hB > hj;
    },
    bvDGC: function (hB, hj) {
      return hB - hj;
    },
    RbwkL: "obj_climb_enemy",
    hhcZF: function (hB, hj) {
      return hB !== hj;
    },
    YCmqw: "HXmqK",
    kJShn: "hLdrN",
    IPnQz: function (hB, hj) {
      return hB === hj;
    },
    JimIx: function (hB, hj) {
      return hB(hj);
    },
    SmXFC: function (hB, hj) {
      return hB / hj;
    },
    ciIqB: function (hB, hj) {
      return hB + hj;
    },
    bAqfU: function (hB, hj) {
      return hB <= hj;
    },
    mWOcN: function (hB, hj) {
      return hB / hj;
    },
    LzIIe: "obj_climb_climbable",
    ZBlyg: function (hB, hj) {
      return hB !== hj;
    },
    urgsn: "ZAZSX",
    uUKDX: "AOYCF",
    LAyzR: function (hB, hj) {
      return hB !== hj;
    },
    gIAmT: "MoFDq",
    Mihhw: function (hB, hj, hL) {
      return hB(hj, hL);
    },
    alwCz: function (hB, hj) {
      return hB % hj;
    },
    VykLs: function (hB, hj) {
      return hB + hj;
    },
    PzapY: "obj_climb_boostenemy",
    nUbSD: function (hB, hj) {
      return hB !== hj;
    },
    nchLb: "yJecN",
    LLiJx: function (hB, hj, hL) {
      return hB(hj, hL);
    },
    CAlQe: function (hB, hj) {
      return hB < hj;
    },
    TgUWT: function (hB, hj) {
      return hB === hj;
    },
    NkXjH: "oqobp",
    IRzVq: function (hB, hj) {
      return hB > hj;
    },
    mkTLF: function (hB, hj) {
      return hB + hj;
    },
    TNFka: function (hB, hj) {
      return hB >= hj;
    },
    DRaQq: function (hB, hj) {
      return hB <= hj;
    },
    XTYXW: function (hB, hj) {
      return hB - hj;
    },
    mGExc: "QbizF",
    WuMGm: function (hB, hj) {
      return hB % hj;
    },
    soFTd: "right",
    GLsuV: function (hB, hj) {
      return hB % hj;
    },
    qpsYV: function (hB, hj) {
      return hB - hj;
    },
    OWULK: function (hB, hj) {
      return hB + hj;
    },
    CWdlY: "left",
    oUAzW: function (hB, hj) {
      return hB - hj;
    },
    IGbpd: function (hB, hj) {
      return hB + hj;
    },
    vNnkz: "down",
    Eckbs: function (hB, hj) {
      return hB - hj;
    },
    XIbus: function (hB, hj, hL) {
      return hB(hj, hL);
    },
    zVueE: function (hB, hj) {
      return hB - hj;
    },
    xXEDJ: function (hB, hj, hL) {
      return hB(hj, hL);
    },
    CMOUg: function (hB, hj) {
      return hB !== hj;
    },
    YWnIC: "jTCdn",
    bieYr: "eKLIN",
    hRMwW: function (hB, hj, hL) {
      return hB(hj, hL);
    },
    UPGIo: function (hB, hj) {
      return hB === hj;
    },
    aXmDt: "mdwYU",
    CSLSn: "OHeGF",
    vWxSw: function (hB, hj) {
      return hB && hj;
    },
    ZFneS: function (hB, hj) {
      return hB === hj;
    },
    vdVpM: function (hB, hj) {
      return hB === hj;
    },
    hlmYd: "boost",
    PDJDn: function (hB, hj) {
      return hB === hj;
    },
    cQHqa: function (hB, hj) {
      return hB === hj;
    },
    AGZzd: function (hB, hj) {
      return hB !== hj;
    },
    MXoTu: function (hB, hj) {
      return hB > hj;
    },
    xWobp: function (hB, hj) {
      return hB === hj;
    },
    bIPAb: function (hB, hj) {
      return hB === hj;
    },
    HjllL: function (hB, hj) {
      return hB + hj;
    }
  };
  let LJ = r.first("obj_rotating_tower_controller_new");
  let Lc = LJ && LJ.horizontaltilecount > 0 ? Math.round(LJ.horizontaltilecount) : 22;
  let LT = (hB, hj) => [(Math.floor(hB / 40) % Lc + Lc) % Lc, Math.floor(hj / 40)];
  let [LR, LU] = LT(X.x - 20, X.y - 20);
  let LE = new Set();
  for (let hB of r.all("obj_climb_enemy")) {
    {
      if (hB.destroyed || hB.active === 0 || hB.damagecon === 3) {
        continue;
      }
      let hj = u(hB);
      if (hj) {
        for (let hL = Math.floor((hj[1] + 14) / 40); hL <= Math.floor((hj[3] - 14) / 40); hL++) {
          LE.add(hL);
        }
      }
    }
  }
  let h0 = (hN, hd) => hN + "," + hd;
  let h1 = new Set();
  let h2 = new Set();
  for (let hN of r.all("obj_climb_climbable")) {
    {
      let hd = u(hN);
      if (hd) {
        for (let hb = Math.floor(hd[1] / 40); hb <= Math.floor(hd[3] / 40); hb++) {
          for (let hZ = Math.floor(hd[0] / 40); hZ <= Math.floor(hd[2] / 40); hZ++) {
            {
              let hK = h0((hZ % Lc + Lc) % Lc, hb);
              h2.add(hK);
              if (!LE.has(hb)) {
                h1.add(hK);
              }
            }
          }
        }
      }
    }
  }
  let h3 = r.all("obj_climb_boostenemy").filter(hp => hp.y < X.y + 10 && !hp.destroyed && hp.damagecon !== 3).sort((hp, hO) => hO.y - hp.y)[0];
  let h4 = h3 ? LT(h3.x, h3.y)[1] : null;
  let h5 = (hp, hO) => {
    for (let hw = 3; hw >= 1; hw--) {
      if (h2.has(h0(hp, hO - hw))) {
        return hw;
      }
    }
    return 0;
  };
  let h6 = X.jumping || X.fallingcon || X.boosting || X.climbcon;
  if (!Xq.move && !h6) {
    {
      let hp = new Map([[h0(LR, LU), null]]);
      let hO = [[LR, LU]];
      let hM = null;
      for (let hC = 0; hC < hO.length; hC++) {
        {
          let [hw, hm] = hO[hC];
          if (h3 ? hm > h4 && hm <= h4 + 3 && h5(hw, hm) >= hm - h4 : hm <= LU - 20) {
            {
              hM = [hw, hm];
              break;
            }
          }
          let hk = [[(hw + 1) % Lc, hm, "right"], [(hw + Lc - 1) % Lc, hm, "left"], [hw, hm - 1, "up"], [hw, hm + 1, "down"], [hw, hm - 2, "j2"], [hw, hm - 3, "j3"]];
          for (let [hV, hQ, hY] of hk) {
            let hy = h0(hV, hQ);
            if (!hp.has(hy) && !!h1.has(hy) && (!(hY === "j2") || !h1.has(h0(hw, hm - 1))) && (!(hY === "j3") || !h1.has(h0(hw, hm - 1)) && !h1.has(h0(hw, hm - 2)))) {
              hp.set(hy, [hw, hm, hY]);
              hO.push([hV, hQ]);
            }
          }
        }
      }
      let hS = null;
      if (hM) {
        let hx = hM;
        let hv = null;
        while (hp.get(h0(hx[0], hx[1]))) {
          {
            hv = hp.get(h0(hx[0], hx[1]));
            if (hv[0] === LR && hv[1] === LU) {
              {
                hS = hv[2];
                break;
              }
            }
            hx = [hv[0], hv[1]];
          }
        }
        if (B.vWxSw(!hS, h3) && hM[0] === LR && hM[1] === LU) {
          hS = "boost";
        }
      }
      Xq.move = hS ? {
        how: hS,
        t: 0,
        from: [LR, LU],
        n: hS === "boost" ? h5(LR, LU) : 0
      } : {
        how: "up",
        t: 0,
        from: [LR, LU]
      };
    }
  }
  let h7 = new Set();
  let h8 = Xq.move;
  if (h8) {
    h8.t++;
    if (h8.how === "left" || h8.how === "right" || h8.how === "up" || h8.how === "down") {
      h7.add(h8.how);
      if (LR !== h8.from[0] || LU !== h8.from[1] || h8.t > 30) {
        Xq.move = null;
        h7.clear();
      }
    } else {
      let hi = h8.how === "j2" ? 2 : h8.how === "j3" ? 3 : Math.max(1, Math.min(3, h8.n));
      let hP = hi === 1 ? 4 : hi === 2 ? 14 : 26;
      h7.add("up");
      if (h8.t <= hP) {
        h7.add("b1");
      }
      if (h8.t > hP + 40 && !h6) {
        Xq.move = null;
        h7.clear();
      }
    }
  }
  return h7;
}
i(plan, "plan");
function climbAutoStep() {
  if (!climbAutoActive()) {
    if (Xq.move || Xq.held) {
      climbAutoReset();
    }
    return false;
  }
  let LJ = r.first("obj_climb_kris");
  if (r.frame !== Xq.frame + 1) {
    Xq.move = null;
    Xq.held = "";
  }
  Xq.frame = r.frame;
  let Lc = plan(LJ);
  let LT = Xq.held;
  let LR = XF.filter(h0 => Lc.has(h0)).join(",");
  Xq.held = LR;
  for (let h0 of XF) {
    n.held[h0] = Lc.has(h0);
  }
  n.synthetic = () => {
    let h6 = LT ? LT.split(",") : [];
    for (let h7 of XF) {
      let h8 = Lc.has(h7);
      let h9 = h6.includes(h7);
      n.held[h7] = h8;
      n.pressed[h7] = h8 && !h9;
      if (!h8 && h9) {
        n.released[h7] = true;
      }
    }
  };
  return true;
}
i(climbAutoStep, "climbAutoStep");
var ch5 = i(() => C.chapter === 5 && !globalThis.__ch5Off, "ch5");
var enc = i(() => ch5() ? C.encounterno | 0 : 0, "enc");
var Xi = {
  lastTurnMenu: -1,
  rc: null,
  rcI: 0,
  rcN: 0,
  rcHeld: "",
  rcFrame: -9,
  rcCool: 0,
  rcCleanUntil: 0
};
var XP = {
  menuPresses: 0,
  plans: {},
  shapes: {},
  goals: 0,
  rcDecisions: 0,
  rcRollouts: 0,
  rcFrames: 0,
  rcMs: 0,
  rcKinds: {}
};
function ch5SaveState() {
  return {
    ...Xi,
    rc: Xi.rc ? Xi.rc.slice() : null
  };
}
i(ch5SaveState, "ch5SaveState");
function ch5LoadState(X) {
  if (X) {
    Object.assign(Xi, X);
    Xi.rc = X.rc ? X.rc.slice() : null;
  } else {
    ch5ResetState();
  }
}
i(ch5LoadState, "ch5LoadState");
function ch5ResetState() {
  Xi.lastTurnMenu = -1;
  Xi.rc = null;
  Xi.rcI = 0;
  Xi.rcN = 0;
  Xi.rcHeld = "";
  Xi.rcFrame = -9;
  Xi.rcCool = 0;
  Xi.rcCleanUntil = 0;
}
i(ch5ResetState, "ch5ResetState");
function ch5Digest() {
  return "ch5 " + Xi.lastTurnMenu + " rc " + (Xi.rc ? Xi.rc.length : "-") + "/" + Xi.rcI + "/" + Xi.rcN + " " + Xi.rcHeld + " " + Xi.rcFrame + " " + (Xi.rcCool | 0);
}
i(ch5Digest, "ch5Digest");
var bump = i((X, B) => {
  X[B] = (X[B] || 0) + 1;
}, "bump");
function soulBox() {
  let X = r.first("obj_heart");
  let B = X && (typeof X.mask_index == "number" && X.mask_index < 0 ? X.sprite_index : X.mask_index || X.sprite_index);
  let LJ = B && V[B];
  if (!X || !LJ || !LJ.bb) {
    return {
      l: 0,
      t: 0,
      r: 16,
      b: 16
    };
  }
  let Lc = X.image_xscale || 1;
  let LT = X.image_yscale || 1;
  return {
    l: (LJ.bb[0] - LJ.ox) * Lc,
    t: (LJ.bb[1] - LJ.oy) * LT,
    r: (LJ.bb[2] + 1 - LJ.ox) * Lc,
    b: (LJ.bb[3] + 1 - LJ.oy) * LT
  };
}
i(soulBox, "soulBox");
function ch5Shapes(X) {
  if (!ch5()) {
    return;
  }
  let B = X.constructor.name;
  if (B === "obj_sheary_smashcutter") {
    if ((X.timer | 0) !== 48) {
      return null;
    }
    let LJ = soulBox();
    bump(XP.shapes, B);
    return [{
      rect: [0, X.y - 12 + LJ.b - 1, 640, X.y + 12 + LJ.t + 1],
      blue: false
    }];
  }
  if (B === "obj_bullet_knife" && (X.netskie === 1 || X.netskie === true)) {
    return null;
  }
  if (B === "obj_purple_aim_attack") {
    let Lc = X.alarm ? Number(X.alarm[0]) : -1;
    if (X.state === "attack" && (X.countdown | 0) >= 25 || X.state === "idle" && Lc >= 24 && Lc <= 25) {
      bump(XP.shapes, B);
      return [{
        mask: true,
        blue: false
      }];
    } else {
      return null;
    }
  }
}
i(ch5Shapes, "ch5Shapes");
function ch5Goals() {
  if (!ch5() || globalThis.__ch5NoGoal) {
    return null;
  }
  if (enc() === 229) {
    let X = [];
    let B = soulBox();
    for (let LJ of r.list) {
      if (!LJ.destroyed && LJ.constructor.name === "obj_bullet_knife" && (LJ.netskie === 1 || LJ.netskie === true) && !!LJ.active) {
        X.push({
          rect: [LJ.x - 8 - B.r, LJ.y - 8 - B.b, LJ.x + 8 - B.l, LJ.y + 8 - B.t],
          w: 30
        });
      }
    }
    if (X.length) {
      return X;
    } else {
      return null;
    }
  }
  return null;
}
i(ch5Goals, "ch5Goals");
function ch5Clamp() {
  if (ch5() && enc() === 234) {
    let X = r.first("obj_growtangle");
    if (X && !X.destroyed && typeof X.keep_function == "function") {
      let B = Number(X.box_extra) || 0;
      return [X.x - 70, X.x + 52, X.y - (B + 70), X.y + 52];
    }
  }
}
i(ch5Clamp, "ch5Clamp");
function ch5SoulKind(X) {
  if (ch5()) {
    if (rcKind()) {
      return null;
    } else {
      return undefined;
    }
  }
}
i(ch5SoulKind, "ch5SoulKind");
function rcKind() {
  if (!ch5() || globalThis.__ch5NoRC) {
    return null;
  }
  let X = r.first("obj_orangeheart");
  if (X && !X.destroyed) {
    return "orange";
  }
  let B = r.first("obj_purplecontrols");
  if (B && !B.destroyed && r.first("obj_heart")) {
    return "purple";
  } else {
    return null;
  }
}
i(rcKind, "rcKind");
var XE = null;
function gfx5() {
  if (XE) {
    return XE;
  }
  let X = M(y);
  let B = X.ctx;
  try {
    Object.defineProperty(X, "ctx", {
      get: () => B,
      set: () => {},
      configurable: true
    });
  } catch {}
  return XE = X;
}
i(gfx5, "gfx5");
var t1 = {
  u: "up",
  d: "down",
  l: "left",
  r: "right",
  z: "b1"
};
var t2 = ["up", "down", "left", "right", "b1"];
function keysOf(X) {
  let B = {};
  for (let LJ of X || "") {
    if (t1[LJ]) {
      B[t1[LJ]] = true;
    }
  }
  return B;
}
i(keysOf, "keysOf");
function applyKeys(X, B) {
  let LJ = keysOf(X);
  let Lc = keysOf(B);
  return () => {
    for (let LT of t2) {
      let LR = !!LJ[LT];
      let LU = !!Lc[LT];
      n.held[LT] = LR;
      n.pressed[LT] = LR && !LU;
      if (!LR && LU) {
        n.released[LT] = true;
      }
    }
  };
}
i(applyKeys, "applyKeys");
var t5 = i(() => {
  if (typeof C.hp == "number") {
    return C.hp;
  }
  let X = 0;
  for (let B of [1, 2, 3]) {
    let LJ = Number(C.hp && C.hp[B]);
    if (Number.isFinite(LJ)) {
      X += LJ;
    }
  }
  return X;
}, "partyHP");
function tensionCap() {
  let X = r.first("obj_tensionbar");
  return X && Number(X.maxtensionlimit) || 0;
}
i(tensionCap, "tensionCap");
var t7 = 0;
var t8 = 0;
function t9(X, B, LJ, Lc) {
  let LT = n.synthetic;
  let LR = {};
  for (let hb of t2) {
    LR[hb] = n.held[hb];
  }
  let LU = t5();
  let LE = Number(C.tension) || 0;
  let h0 = tensionCap();
  let h1 = C.mnfight;
  let h2 = Lc === "orange" ? r.first("obj_debug_orangeheartcontroller") : null;
  let h3 = h2 && h2.scrolling ? 1 : 0;
  let h4 = Lc === "orange" ? r.number("obj_orangeheart_wall") : 0;
  let h5 = Lc === "purple" ? r.first("obj_purplecontrols") : null;
  let h6 = h5 && Number(h5.difficulty) || 0;
  let h7 = h5 && Number(h5.pattern_phase) || 0;
  let h8 = h5 && h5.mode === 8 && (h5.difficulty | 0) === 3;
  let h9 = () => {
    let hZ = r.first("obj_purplecontrols");
    if (hZ) {
      return r.all("obj_pinknode").indexOf(hZ.node_id);
    } else {
      return -1;
    }
  };
  let hX = h8 ? h9() : -1;
  let ht = Lc === "purple" ? r.all("obj_pinknodeact").filter(hZ => !hZ.destroyed && hZ.mode === 1).length : 0;
  let hB = hZ => r.all("obj_pinknodeact").filter(hK => !hK.destroyed && hK.mode === hZ && (Number(hK.timer) || 0) >= 0).length;
  let hj = Lc === "purple" ? hB(1) : 0;
  let hL = Lc === "purple" ? hB(0) : 0;
  let hh = 0;
  let hg = Xi.rcHeld;
  let hN = 0;
  t7 = 0;
  let hd = f();
  q(false);
  x();
  try {
    for (let hZ = 0; hZ < LJ; hZ++) {
      let hK = B[hZ] !== undefined ? B[hZ] : "";
      n.synthetic = applyKeys(hK, hg);
      try {
        Q(l, gfx5());
      } catch {
        break;
      }
      hN++;
      hg = hK;
      if (globalThis.__ch5trace) {
        let hp = r.first("obj_orangeheart") || r.first("obj_heart");
        globalThis.__ch5trace.push((hp ? Math.round(hp.x) + "," + Math.round(hp.y) + (hp.chargecon !== undefined ? " c" + hp.chargecon + "/" + hp.chargetimer : "") : "-") + " hp" + t5() + " n" + r.list.length + " r" + F.state % 1000);
      }
      let hl = t5();
      if (hl < LU) {
        hh += (LU - hl) * (10 + (LJ - hZ) * 10 / LJ);
        t7 = LU - hl;
        break;
      }
      if (C.battleover || C.mnfight !== h1) {
        break;
      }
    }
    hh -= Math.max(0, (Number(C.tension) || 0) - LE) * 0.5;
    hh -= Math.max(0, tensionCap() - h0) * 2;
    if (Lc === "purple") {
      let hO = r.first("obj_purplecontrols");
      if (hO) {
        hh -= Math.max(0, (Number(hO.difficulty) || 0) - h6) * 300;
      }
      if (hO && (Number(hO.difficulty) || 0) === h6) {
        hh -= Math.max(0, (Number(hO.pattern_phase) || 0) - h7) * 150;
      }
      if (h8 && hX >= 0) {
        let hS = h9();
        if (hS >= 0) {
          hh -= (hS - hX) * 5;
        }
      }
      hh -= Math.max(0, r.all("obj_pinknodeact").filter(hC => !hC.destroyed && hC.mode === 1).length - ht) * 100;
      hh -= Math.max(0, hB(1) - hj) * 300;
      hh += Math.max(0, hB(0) - hL) * 300;
      let hM = r.first("obj_heart");
      if (hM) {
        let hC = Infinity;
        for (let hw of r.all("obj_dokiheart")) {
          if (!hw.destroyed) {
            hC = Math.min(hC, Math.hypot(hw.x - (hM.x + 9), hw.y - (hM.y + 9)));
          }
        }
        if (hC === Infinity) {
          for (let hm of r.all("obj_pinknodeact")) {
            if (!hm.destroyed && hm.mode === 1 && hm.active === 1) {
              hC = Math.min(hC, Math.hypot(hm.x - (hM.x + 9), hm.y - (hM.y + 9)));
            }
          }
        }
        if (hC < Infinity) {
          hh += Math.min(hC, 300) * 0.1;
        }
      }
      if (hO && (hO.mode | 0) === 1) {
        hh += Math.abs(Number(hO.x_ongrid) || 0) * 0.04;
      }
    }
    if (Lc === "orange" && h2) {
      let hk = r.first("obj_debug_orangeheartcontroller");
      if (hk && hk.scrolling && !h3) {
        hh -= 200;
      }
      hh -= Math.max(0, h4 - r.number("obj_orangeheart_wall")) * 20;
      let hW = r.first("obj_orangeheart");
      if (hW && hW.chargecon === 1) {
        hh += 3;
      }
      let hV = r.first("obj_orangeheart_chaseattack");
      if (hW && hV && !hV.destroyed && (hV.state | 0) === 0) {
        let hQ = hW.bbox_left + 5 - hV.bbox_right;
        if (hQ < 200) {
          hh += (200 - Math.max(0, hQ)) * 0.4;
        }
      }
      for (let hY of B) {
        if (hY && hY.includes("z")) {
          hh += 0.02;
        }
      }
    }
  } finally {
    O(X);
    v();
    q(hd);
    n.synthetic = LT;
    for (let hy of t2) {
      n.held[hy] = LR[hy];
    }
  }
  XP.rcRollouts++;
  XP.rcFrames += hN;
  t8 = hN;
  return hh;
}
i(t9, "rollout");
var rep = i((X, B) => Array.from({
  length: B
}, () => X), "rep");
function taps(X, B, LJ, Lc = 0) {
  let LT = rep("", B);
  let LR = Lc;
  for (let LU of X) {
    if (LR < B) {
      LT[LR] = LU;
    }
    LR += LJ;
  }
  return LT;
}
i(taps, "taps");
function candidates(X, B) {
  let LJ = [];
  LJ.push(rep("", B));
  if (X === "purple") {
    let Lc = r.first("obj_purplecontrols");
    let LT = Lc ? Lc.mode | 0 : 1;
    if (LT === 0) {
      for (let LR of ["u", "d", "l", "r", "ul", "ur", "dl", "dr"]) {
        LJ.push(rep(LR, B), [...rep(LR, 6), ...rep("", B - 6)]);
      }
    } else if (LT === 1) {
      let LU = Lc.lane_y | 0;
      for (let LE = 0; LE <= 2; LE++) {
        for (let h0 of ["", "l", "r"]) {
          if (LE === LU && !h0) {
            continue;
          }
          let h1 = [];
          for (let h2 = LU; h2 !== LE; h2 += LE > LU ? 1 : -1) {
            h1.push(LE > LU ? "d" : "u");
          }
          LJ.push(taps(h1, B, 4).map(h3 => h3 + h0));
          if (LE !== LU && !h0) {
            LJ.push(taps(h1, B, 4, 8));
          }
        }
      }
    } else if (LT === 2) {
      let h3 = Lc.lane_x | 0;
      let h4 = Lc.lane_y | 0;
      for (let h5 = 0; h5 <= 3; h5++) {
        for (let h6 = 0; h6 <= 3; h6++) {
          if (h5 === h3 && h6 === h4) {
            continue;
          }
          let h7 = [];
          for (let h9 = h3; h9 !== h5; h9 += h5 > h3 ? 1 : -1) {
            h7.push(h5 > h3 ? "r" : "l");
          }
          let h8 = [];
          for (let hX = h4; hX !== h6; hX += h6 > h4 ? 1 : -1) {
            h8.push(h6 > h4 ? "d" : "u");
          }
          LJ.push(taps([...h7, ...h8], B, 3));
          if (h7.length && h8.length) {
            LJ.push(taps([...h8, ...h7], B, 3));
          }
        }
      }
    } else {
      for (let ht of ["u", "d", "l", "r"]) {
        LJ.push(taps([ht], B, 4), taps([ht], B, 4, 8));
        for (let hB of ["u", "d", "l", "r"]) {
          LJ.push(taps([ht, hB], B, 4));
        }
      }
    }
    for (let hj of nodePaths(Lc)) {
      LJ.push(hj);
    }
  } else if (X === "orange") {
    let hL = r.first("obj_orangeheart");
    let hh = hL && hL.chargecon === 1;
    for (let hg of ["", "u", "d"]) {
      for (let hN of hg ? [6, B] : [B]) {
        let hd = [...rep(hg, hN), ...rep("", B - hN)];
        for (let hb of hh ? [0, 6, 16] : hg ? [0, 17] : [0, 8, 17]) {
          if (!!hg || !!hb) {
            LJ.push(hd.map((hZ, hK) => hZ + (hK < hb ? "z" : "")));
          }
        }
      }
    }
  }
  return LJ;
}
i(candidates, "candidates");
function rescueOrange(X) {
  let B = [];
  let LJ = Lc => {
    let LT = [];
    for (let [LR, LU] of Lc) {
      for (let LE = 0; LE < LU; LE++) {
        LT.push(LR);
      }
    }
    while (LT.length < X) {
      LT.push("");
    }
    return LT.slice(0, Math.max(X, LT.length));
  };
  for (let Lc of ["u", "d"]) {
    let LT = Lc === "u" ? "d" : "u";
    for (let LR of [3, 9]) {
      B.push(LJ([[Lc, LR], ["z", 17]]));
      B.push(LJ([[Lc, LR], [Lc + "z", 17]]));
    }
    B.push(LJ([[Lc + "z", 12]]));
    B.push(LJ([[Lc, 6], [LT, X - 6]]));
    B.push(LJ([[Lc, 4], ["", 8], [Lc, 12]]));
  }
  for (let LU of [4, 12]) {
    B.push(LJ([["z", LU]]));
  }
  B.push(LJ([["", 6], ["z", 17]]));
  return B;
}
i(rescueOrange, "rescueOrange");
function rescuePurple(X, B) {
  let LJ = [];
  if (!X || (X.mode | 0) !== 1) {
    return LJ;
  }
  let Lc = X.lane_y | 0;
  let LT = [LR => LR < 12 ? "l" : "r", LR => LR < 12 ? "r" : "l", LR => LR >= 16 ? "l" : "", LR => LR >= 16 ? "r" : ""];
  for (let LR = 0; LR <= 2; LR++) {
    for (let LU of [6, 18]) {
      for (let LE of LT) {
        let h0 = [];
        for (let h2 = Lc; h2 !== LR; h2 += LR > Lc ? 1 : -1) {
          h0.push(LR > Lc ? "d" : "u");
        }
        if (!h0.length && LU === 18) {
          continue;
        }
        let h1 = taps(h0, B, 4, LU);
        LJ.push(h1.map((h3, h4) => h3 + LE(h4)));
      }
    }
  }
  return LJ;
}
i(rescuePurple, "rescuePurple");
var th = ["r", "u", "l", "d"];
function nodePaths(X) {
  let B = X && X.node_id;
  if (!B || typeof B != "object" || B.destroyed || !Array.isArray(B.child)) {
    return [];
  }
  let LJ = tK.purple;
  let Lc = [];
  for (let h2 of r.all("obj_dokiheart")) {
    if (!h2.destroyed) {
      Lc.push([h2.x, h2.y]);
    }
  }
  if (!Lc.length) {
    for (let h3 of r.all("obj_pinknodeact")) {
      if (!h3.destroyed && h3.mode === 1 && h3.active === 1 && (Number(h3.timer) || -1) < 0) {
        Lc.push([h3.x, h3.y]);
      }
    }
  }
  let LT = !Lc.length && X.mode === 8 && (X.difficulty | 0) === 3;
  if (!Lc.length && !LT) {
    return [];
  }
  let LR = new Map([[B, null]]);
  let LU = [B];
  while (LU.length) {
    let h4 = LU.shift();
    let h5 = 0;
    for (let h6 = h4; LR.get(h6); h6 = LR.get(h6).from) {
      h5++;
    }
    if (!(h5 >= (LT ? 12 : 8))) {
      for (let h7 = 0; h7 < 4; h7++) {
        let h8 = h4.child[h7];
        if (!!h8 && typeof h8 == "object" && !h8.destroyed && !LR.has(h8)) {
          LR.set(h8, {
            from: h4,
            dir: th[h7]
          });
          LU.push(h8);
        }
      }
    }
  }
  let LE = [];
  let h0 = h9 => {
    let hX = 0;
    for (let ht = h9; LR.get(ht); ht = LR.get(ht).from) {
      hX++;
    }
    return hX;
  };
  let h1 = LT ? [null] : Lc;
  for (let h9 of h1) {
    let hX = null;
    let ht = Infinity;
    if (h9) {
      for (let hh of LR.keys()) {
        let hg = Math.hypot((hh.x || 0) - h9[0], (hh.y || 0) - h9[1]);
        if (hg < ht) {
          ht = hg;
          hX = hh;
        }
      }
    } else {
      let hN = r.all("obj_pinknode");
      let hd = hN.indexOf(B);
      for (let hb of LR.keys()) {
        let hZ = hN.indexOf(hb);
        if (hZ <= hd || hZ > hd + 12) {
          continue;
        }
        let hK = -hZ;
        if (hK < ht) {
          ht = hK;
          hX = hb;
        }
      }
    }
    if (!hX || hX === B) {
      continue;
    }
    let hB = [];
    for (let hl = hX; LR.get(hl); hl = LR.get(hl).from) {
      hB.unshift({
        dir: LR.get(hl).dir,
        len: Math.hypot((hl.x || 0) - (LR.get(hl).from.x || 0), (hl.y || 0) - (LR.get(hl).from.y || 0))
      });
    }
    let hj = {
      r: "l",
      l: "r",
      u: "d",
      d: "u"
    };
    let hL = hB.slice().reverse().map(hp => ({
      dir: hj[hp.dir],
      len: hp.len
    }));
    for (let hp of [hB, [...hB, ...hL]]) {
      let hO = hp.reduce((hM, hS) => hM + Math.ceil(hS.len / 22) + 2, 0);
      for (let hM = 0; hM <= 84; hM += 12) {
        let hS = Math.max(LJ, hM + hO + 12);
        let hC = rep("", hS);
        let hw = hM;
        for (let hm of hp) {
          hC[hw] = hm.dir;
          hw += Math.ceil(hm.len / 22) + 2;
        }
        LE.push(hC);
      }
    }
  }
  return LE;
}
i(nodePaths, "nodePaths");
var tN = 0;
function setCh5Budget(X) {
  tN = Math.max(0, Number(X) || 0);
}
i(setCh5Budget, "setCh5Budget");
function ch5RolloutKind() {
  return rcKind();
}
i(ch5RolloutKind, "ch5RolloutKind");
var tZ = {
  purple: 6,
  orange: 6
};
var ts = {
  purple: 4,
  orange: 3
};
var tK = {
  purple: 48,
  orange: 24
};
function writerParked() {
  for (let X of r.all("obj_writer")) {
    if (!X.destroyed && X.image_alpha !== 0 && (X.halt === 1 || X.halt === 2 || X.halt === 4)) {
      return true;
    }
  }
  return false;
}
i(writerParked, "writerParked");
function ch5Step(X) {
  if (climbAutoStep()) {
    return true;
  }
  let B = rcKind();
  if (!B || !C.autoplay) {
    if (Xi.rc) {
      Xi.rc = null;
      Xi.rcI = 0;
    }
    return false;
  }
  if (C.mnfight !== 2 && B !== "orange") {
    Xi.rc = null;
    Xi.rcHeld = "";
    return false;
  }
  let LJ = tZ[B];
  let Lc = tK[B];
  if (r.frame !== Xi.rcFrame + 1) {
    Xi.rc = null;
  }
  Xi.rcFrame = r.frame;
  if (!Xi.rc || Xi.rcI >= LJ || Xi.rcI >= Xi.rc.length) {
    let LE = performance.now();
    let h0 = p();
    let h1 = Xi.rc ? Xi.rc.slice(Xi.rcI) : [];
    let h2 = h1.length ? [...h1, ...rep(h1[h1.length - 1].replace(/z/g, ""), Math.max(0, Lc - h1.length))] : null;
    let h3 = null;
    let h4 = Infinity;
    let h5 = 0;
    if (tN > 0 && !!h2 && Xi.rcN % ts[B] !== 0 && r.frame + 12 <= (Xi.rcCleanUntil | 0)) {
      h4 = 0;
      h3 = h2;
      h5 = 0;
      XP.rcTrusted = (XP.rcTrusted | 0) + 1;
    } else if (h2) {
      h4 = t9(h0, h2, Math.max(Lc, h2.length), B);
      h3 = h2;
      h5 = t7;
      Xi.rcCleanUntil = h5 ? 0 : r.frame + t8;
    }
    let h6 = !h2 || h5 > 0 || Xi.rcN % ts[B] === 0;
    let h7 = globalThis.__ch5dbgRC && r.frame >= globalThis.__ch5dbgRC[0] && r.frame <= globalThis.__ch5dbgRC[1] ? [] : null;
    if (h7 && h2) {
      h7.push("cont=" + h4.toFixed(0));
    }
    let h8 = h2 ? h5 : Infinity;
    let h9 = () => performance.now() - LE;
    let hX = () => tN > 0 && globalThis.__ch5Cut === true && (h9() > tN * 3 || h9() > tN && h8 === 0);
    if (h6) {
      for (let ht of candidates(B, Lc)) {
        if (hX()) {
          XP.rcCut = (XP.rcCut | 0) + 1;
          break;
        }
        let hB = t9(h0, ht, Math.max(Lc, ht.length), B);
        if (hB < h4 - 1e-9) {
          h8 = t7;
          Xi.rcCleanUntil = t7 ? 0 : r.frame + t8;
        }
        if (h7) {
          h7.push(ht.slice(0, 12).map(hj => hj || ".").join("") + "=" + hB.toFixed(0));
        }
        if (hB < h4 - 1e-9) {
          h4 = hB;
          h3 = ht;
        }
      }
      if (Xi.rcCool > 0) {
        Xi.rcCool--;
      } else if (h4 >= 300) {
        for (let hj of B === "orange" ? rescueOrange(Lc) : rescuePurple(r.first("obj_purplecontrols"), Lc)) {
          if (hX()) {
            XP.rcCut = (XP.rcCut | 0) + 1;
            break;
          }
          let hL = t9(h0, hj, Math.max(Lc, hj.length), B);
          if (hL < h4 - 1e-9) {
            h8 = t7;
            Xi.rcCleanUntil = t7 ? 0 : r.frame + t8;
          }
          if (h7) {
            h7.push("R" + hj.slice(0, 12).map(hh => hh || ".").join("") + "=" + hL.toFixed(0));
          }
          if (hL < h4 - 1e-9) {
            h4 = hL;
            h3 = hj;
          }
        }
        if (h4 >= 300) {
          Xi.rcCool = 3;
        }
      }
    }
    if (h7) {
      let hh = r.first("obj_purplecontrols");
      let hg = r.first("obj_heart");
      console.log("RC f" + r.frame + " " + B + (hh ? " mode " + hh.mode + " lane " + hh.lane_x + "," + hh.lane_y + " og " + hh.x_ongrid + "," + hh.y_ongrid : "") + " soul " + (hg ? Math.round(hg.x) + "," + Math.round(hg.y) : "-") + " best " + h3.slice(0, 12).map(hN => hN || ".").join("") + "=" + h4.toFixed(0) + " | " + h7.join(" "));
    }
    if (globalThis.__ch5verify && h3) {
      globalThis.__ch5trace = [];
      t9(h0, h3, Math.max(Lc, h3.length), B);
      globalThis.__ch5pred = {
        frame: r.frame,
        trace: globalThis.__ch5trace,
        plan: h3.slice()
      };
      globalThis.__ch5trace = null;
    }
    if (h7 && h3) {
      globalThis.__ch5trace = [];
      t9(h0, h3, Math.max(Lc, h3.length), B);
      console.log("RCPRED f" + r.frame + " " + globalThis.__ch5trace.join(" | "));
      globalThis.__ch5trace = null;
    }
    if (h7 && h2) {
      globalThis.__ch5trace = [];
      t9(h0, h2, Math.max(Lc, h2.length), B);
      console.log("RCCONT f" + r.frame + " " + globalThis.__ch5trace.join(" | "));
      globalThis.__ch5trace = null;
    }
    Xi.rc = h3;
    Xi.rcI = 0;
    Xi.rcN++;
    XP.rcDecisions++;
    XP.rcMs += performance.now() - LE;
    bump(XP.rcKinds, B);
  }
  let LT = Xi.rc[Xi.rcI++] || "";
  if (B === "orange" && C.mnfight !== 2 && writerParked()) {
    LT = r.frame & 1 ? LT.replace(/z/g, "") : LT.includes("z") ? LT : LT + "z";
  }
  let LR = applyKeys(LT, Xi.rcHeld);
  Xi.rcHeld = LT;
  n.synthetic = LR;
  let LU = keysOf(LT);
  for (let hN of ["up", "down", "left", "right"]) {
    n.held[hN] = !!LU[hN];
  }
  n.held.b1 = !!LU.b1;
  return true;
}
i(ch5Step, "ch5Step");
var tO = ["left", "right", "up", "down"];
function send(X) {
  let B = X || {};
  for (let LJ of ["b1", "b2", "b3"]) {
    n.held[LJ] = !!B[LJ];
  }
  n.synthetic = () => {
    for (let Lc of ["b1", "b2", "b3"]) {
      n.pressed[Lc] = !!B[Lc];
      n.held[Lc] = !!B[Lc];
    }
    for (let LT of tO) {
      if (B[LT]) {
        n.pressed[LT] = true;
        n.held[LT] = true;
      }
    }
  };
  if (X) {
    XP.menuPresses++;
  }
}
i(send, "send");
var tS = {
  fight: 0,
  act: 1,
  magic: 1,
  tech: 1,
  item: 2,
  spare: 3,
  defend: 4
};
function slotOf(X) {
  for (let B = 0; B < 3; B++) {
    let LJ = C.monsterinstance && C.monsterinstance[B];
    if (C.monster[B] === 1 && LJ && !LJ.destroyed && LJ.constructor.name === X) {
      return B;
    }
  }
  return -1;
}
i(slotOf, "slotOf");
function tw(X, B) {
  let LJ = C.actname && C.actname[X] || [];
  for (let Lc = 0; Lc < 6; Lc++) {
    if (LJ[Lc] === B) {
      return Lc;
    }
  }
  return -1;
}
i(tw, "actIndex");
function techSlot(X, B) {
  let LJ = C.char[X];
  if (C.bmenucoord) {
    C.bmenucoord[13];
  }
  let Lc = 0;
  let LT = C.battlespell && C.battlespell[X] || [];
  let LR = LJ === 2 ? C.actnamesus : LJ === 3 ? C.actnameral : null;
  if (!LR) {
    return -1;
  }
  for (let LU = 0; LU < 3; LU++) {
    let LE = LR[LU] || [];
    let h0 = 0;
    for (let h1 = 0; h1 < LT.length; h1++) {
      if (LT[h1] === -1) {
        while (h0 < 6 && (!LE[h0] || LE[h0] === " ")) {
          h0++;
        }
        if (LE[h0] === B) {
          return h1;
        }
        h0++;
      }
    }
  }
  return -1;
}
i(techSlot, "techSlot");
var atMenu = i(() => C.fighting === 1 && C.mnfight === 0 && C.myfight === 0 && C.charturn >= 0 && C.charturn < (C.char ? C.char.length : 3) && C.char[C.charturn] > 0, "atMenu");
function drive(X) {
  let B = C.charturn;
  let LJ = C.bmenuno;
  let Lc = C.bmenucoord;
  let LT = LU => Lc && Lc[LU] ? Lc[LU][B] | 0 : 0;
  if (LJ === 0) {
    let LU = LT(0);
    let LE = tS[X.cmd];
    if (LU !== LE) {
      return {
        [(LE - LU + 5) % 5 <= 2 ? "right" : "left"]: true
      };
    } else {
      return {
        b1: true
      };
    }
  }
  let LR = X.cmd === "fight" ? 1 : X.cmd === "spare" ? 12 : X.cmd === "act" ? 11 : X.cmd === "tech" ? 13 : -1;
  if (LJ === 1 || LJ === 11 || LJ === 12 || LJ === 13) {
    if (LJ !== LR) {
      return {
        b2: true
      };
    } else if (LT(LJ) !== (X.target | 0)) {
      return {
        down: true
      };
    } else {
      return {
        b1: true
      };
    }
  }
  if (LJ === 9) {
    if (X.cmd !== "act") {
      return {
        b2: true
      };
    }
    let h0 = LT(9);
    let h1 = X.act | 0;
    if (h0 === h1) {
      return {
        b1: true
      };
    } else if (h0 >> 1 === h1 >> 1) {
      return {
        [h0 & 1 ? "left" : "right"]: true
      };
    } else {
      return {
        [h0 < h1 ? "down" : "up"]: true
      };
    }
  }
  if (LJ === 2) {
    if (X.cmd !== "tech") {
      return {
        b2: true
      };
    }
    let h2 = LT(2);
    let h3 = X.slot | 0;
    if (h2 === h3) {
      return {
        b1: true
      };
    } else if (h2 >> 1 === h3 >> 1) {
      return {
        right: true
      };
    } else {
      return {
        [h2 < h3 ? "down" : "up"]: true
      };
    }
  }
  return {
    b2: true
  };
}
i(drive, "drive");
function policy(X) {
  let B = enc();
  let LJ = C.char[X];
  let Lc = Number(C.tension) || 0;
  let LT = (LU, LE) => {
    let h0 = slotOf(LU);
    let h1 = h0 >= 0 ? tw(h0, LE) : -1;
    if (h1 < 0 || (C.actcost[h0][h1] || 0) > Lc) {
      return null;
    } else {
      return {
        cmd: "act",
        target: h0,
        act: h1,
        name: LE
      };
    }
  };
  let LR = (LU, LE) => {
    let h0 = slotOf(LU);
    let h1 = techSlot(X, LE);
    if (h0 < 0 || h1 < 0 || ((C.battlespellcost && C.battlespellcost[X] || [])[h1] || 0) > Lc) {
      return null;
    } else {
      return {
        cmd: "tech",
        target: h0,
        slot: h1,
        name: LE
      };
    }
  };
  if (B === 221) {
    if (LJ === 1) {
      return LT("obj_orange_enemy", "GetAlong") || {
        cmd: "defend"
      };
    } else {
      return {
        cmd: "defend"
      };
    }
  }
  if (B === 232) {
    let LU = slotOf("obj_shinobeetle_enemy");
    if (LU < 0) {
      return null;
    }
    let LE = Number(C.mercymod[LU]) || 0;
    if (LE >= 100) {
      return {
        cmd: "spare",
        target: LU
      };
    }
    if (LJ === 1) {
      return LT("obj_shinobeetle_enemy", "Convince") || {
        cmd: "spare",
        target: LU
      };
    }
    if (LJ === 2) {
      return LR("obj_shinobeetle_enemy", "S-Action") || {
        cmd: "defend"
      };
    }
    if (LJ === 3) {
      if (LE + 35 + 20 >= 100) {
        return {
          cmd: "spare",
          target: LU
        };
      } else {
        return LR("obj_shinobeetle_enemy", "R-Action") || {
          cmd: "defend"
        };
      }
    }
  }
  if (B === 224) {
    if (LJ === 1) {
      return LT("obj_pink_enemy", "Flirt") || {
        cmd: "defend"
      };
    } else if (C.acting && C.acting[m()] === 1) {
      return LR("obj_pink_enemy", "Flirt") || {
        cmd: "defend"
      };
    } else {
      return {
        cmd: "defend"
      };
    }
  }
  if (B === 225) {
    let h0 = slotOf("obj_flowery_enemy");
    if (LJ === 1 && h0 >= 0) {
      for (let h1 of [1, 2]) {
        let h2 = (C.actname[h0] || [])[h1];
        if (h2 && h2 !== " " && C.canact[h0][h1] === 1) {
          let h3 = LT("obj_flowery_enemy", h2);
          if (h3) {
            return h3;
          }
        }
      }
    }
    if (LJ === 1) {
      return {
        cmd: "defend"
      };
    } else {
      return {
        cmd: "defend"
      };
    }
  }
  if (B === 222) {
    let h4 = r.first("obj_yellow_enemy");
    let h5 = h4 ? h4.trial_counter | 0 : 0;
    let h6 = h4 && Array.isArray(h4.evidence_obtained) ? !!h4.evidence_obtained[h5] : true;
    if (LJ === 1) {
      return !h6 && LT("obj_blue_enemy", "Evidence") || LT("obj_yellow_enemy", "Justice") || {
        cmd: "defend"
      };
    } else {
      return {
        cmd: "defend"
      };
    }
  }
  if (B === 220) {
    let h7 = slotOf("obj_aqua_enemy");
    if (h7 < 0) {
      return null;
    }
    if ((Number(C.mercymod[h7]) || 0) >= 100) {
      return {
        cmd: "spare",
        target: h7
      };
    }
    if (LJ !== 1) {
      return {
        cmd: "defend"
      };
    }
    let h8 = C.monsterinstance[h7];
    let h9 = h8 && Array.isArray(h8.act_list) ? h8.act_list : [];
    for (let hX = 0; hX < 6; hX++) {
      if (C.canact[h7][hX] === 1 && !h9.includes(hX + 1)) {
        let ht = C.actname[h7][hX];
        let hB = ht && LT("obj_aqua_enemy", ht);
        if (hB) {
          return hB;
        }
      }
    }
    return {
      cmd: "fight",
      target: h7
    };
  }
  if (B === 234) {
    let hj = slotOf("obj_trashy_trio");
    if (hj < 0) {
      return null;
    }
    let hL = C.monsterinstance[hj];
    let hh = hL ? hL.myattackchoice | 0 : 0;
    if (LJ === 1) {
      return LT("obj_trashy_trio", hh === 0 ? "CleanUp" : "LayUp") || {
        cmd: "defend"
      };
    }
    if (LJ === 2) {
      return LR("obj_trashy_trio", "S-Action") || {
        cmd: "defend"
      };
    }
    if (LJ === 3) {
      return LR("obj_trashy_trio", "R-Action") || {
        cmd: "defend"
      };
    }
  }
  return null;
}
i(policy, "policy");
function dateKeys() {
  let X = r.first("obj_date_controller");
  if (!X || X.destroyed || X.con !== 2) {
    return null;
  }
  let B = r.first("obj_pink_enemy");
  let LJ = B ? B.datecount | 0 : 0;
  let Lc = X.draw_box_selected | 0;
  let LT = Array.isArray(X.choiceiscorrect) ? X.choiceiscorrect[Lc] === 1 : true;
  if (X.draw_box_con === 0 && X.boxalpha === 1) {
    if (LT || X.questioncount === 0 && LJ === 1) {
      return {
        up: true
      };
    } else if (LJ === 4) {
      return {};
    } else {
      return {
        right: true
      };
    }
  } else {
    return {};
  }
}
i(dateKeys, "dateKeys");
function trialKeys() {
  let X = r.first("obj_yellow_trial_manager");
  if (!X || X.destroyed || !X.can_control || !X.current_perp || X.current_perp === -1) {
    return null;
  }
  let B = X.trial_id;
  let LJ = (Array.isArray(X.trial_array) || X.trial_array) && X.trial_array[B];
  let Lc = LJ ? LJ.culprit : -1;
  if (!X.evidence_mode) {
    let h0 = X.current_perp;
    if (h0 && h0.perp_index !== Lc) {
      return {
        right: true
      };
    } else {
      return {
        b1: true
      };
    }
  }
  let LT = Array.isArray(X.evidence_list) ? X.evidence_list : [];
  let LR = B === 99 ? 10 : B;
  let LU = LT.findIndex(h1 => Array.isArray(h1) && h1[2] === LR);
  if (LU < 0) {
    LU = LT.findIndex(h1 => Array.isArray(h1) && h1[2] !== 7);
  }
  if (LU < 0) {
    LU = 0;
  }
  let LE = X.evidence_counter | 0;
  if (globalThis.__ch5dbg) {
    console.log("trial", B, "culprit", Lc, "perp", X.current_perp && X.current_perp.perp_index, "ev", JSON.stringify(LT.map(h1 => Array.isArray(h1) ? h1[2] : h1)), "want", LR, "k", LU, "c", LE);
  }
  if (LE < LU) {
    return {
      right: true
    };
  } else if (LE > LU) {
    return {
      left: true
    };
  } else {
    return {
      b1: true
    };
  }
}
i(trialKeys, "trialKeys");
function ch5UI(X) {
  if (!ch5() || !C.autoplay) {
    return false;
  }
  if (climbAutoActive()) {
    return true;
  }
  {
    let Lc = trialKeys();
    if (Lc) {
      bump(XP.plans, enc() + ":trial");
      if (X % 3 === 0) {
        send(Lc);
      } else {
        send(null);
      }
      return true;
    }
  }
  if (enc() === 224) {
    let LT = dateKeys();
    if (LT) {
      bump(XP.plans, "224:date");
      if (X % 2 === 0) {
        send(LT);
        for (let LR of tO) {
          n.held[LR] = !!LT[LR];
        }
      } else {
        send(null);
      }
      return true;
    }
  }
  if (!atMenu()) {
    return false;
  }
  let B = policy(C.charturn);
  if (!B) {
    return false;
  }
  bump(XP.plans, enc() + ":" + C.char[C.charturn] + ":" + B.cmd + (B.name ? ":" + B.name : ""));
  if (X % 4 !== 0) {
    send(null);
    return true;
  }
  let LJ = drive(B);
  if (globalThis.__ch5dbg) {
    console.log("ch5 menu", r.frame, "ct", C.charturn, "bm", C.bmenuno, "coord", JSON.stringify([0, 1, 2, 9, 11, 12, 13].map(LU => C.bmenucoord[LU] && C.bmenucoord[LU][C.charturn])), JSON.stringify(B), JSON.stringify(LJ));
  }
  send(LJ);
  return true;
}
i(ch5UI, "ch5UI");
P();
var utOn = i(() => W === "ut", "utOn");
var tu = new Set(["obj_centeract_parent", "obj_6heal", "obj_6knife_act"]);
var tx = K.filter(([X, B]) => B === "obj_vsflowey_heart" && !tu.has(X)).map(([X]) => X);
var tv = new Set(["obj_gigavine_preview", "obj_gigavine"]);
var tI = new Map();
function hurts(X) {
  let h1 = X.constructor.name;
  let h2 = tI.get(h1);
  if (h2 === undefined) {
    h2 = tv.has(h1) ? "line" : tx.some(h3 => X.is(h3)) && !X.is("obj_centeract_parent") ? "box" : "";
    tI.set(h1, h2);
  }
  if (h2 === "box" && X.type === 1) {
    return "";
  } else {
    return h2;
  }
}
i(hurts, "hurts");
var tf = [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, -1], [-1, 1], [1, 1]];
var ti = 12;
var tP = 3;
function threats() {
  let LJ = [];
  for (let LR of r.list) {
    if (LR.destroyed || LR.visible === false) {
      continue;
    }
    let hj = hurts(LR);
    if (!hj) {
      continue;
    }
    if (hj === "line") {
      let hp = ((LR.constructor.name === "obj_gigavine" ? LR.image_angle : LR.direction) || 0) * Math.PI / 180;
      LJ.push({
        line: true,
        x: LR.x,
        y: LR.y,
        ux: Math.cos(hp),
        uy: -Math.sin(hp),
        hw: 10 + tP
      });
      continue;
    }
    let hL;
    let hh;
    let hg;
    let hN;
    try {
      hL = LR.bbox_left;
      hh = LR.bbox_top;
      hg = LR.bbox_right;
      hN = LR.bbox_bottom;
    } catch {
      continue;
    }
    if (![hL, hh, hg, hN].every(Number.isFinite) || hg - hL > 700 || hN - hh > 600) {
      continue;
    }
    let hd = Number.isFinite(LR.xprevious) ? LR.x - LR.xprevious : 0;
    let hb = Number.isFinite(LR.yprevious) ? LR.y - LR.yprevious : 0;
    LJ.push({
      l: hL - tP,
      t: hh - tP,
      r: hg + tP,
      b: hN + tP,
      vx: Math.abs(hd) < 40 ? hd : 0,
      vy: Math.abs(hb) < 40 ? hb : 0
    });
  }
  return LJ;
}
i(threats, "threats");
function lineHits(X, B, LJ, Lc) {
  let h4 = B - X.x;
  let h5 = LJ - X.y;
  let h6 = h4 * X.ux + h5 * X.uy;
  if (h6 < -Lc || h6 > 640) {
    return false;
  } else {
    return Math.abs(h4 * -X.uy + h5 * X.ux) < X.hw + Lc;
  }
}
i(lineHits, "lineHits");
function floweyStep() {
  if (!utOn()) {
    return null;
  }
  let LT = r.first("obj_vsflowey_heart");
  if (!LT || LT.destroyed) {
    return null;
  }
  for (let hj of ["left", "right", "up", "down"]) {
    n.held[hj] = false;
  }
  if (LT.move !== 1) {
    return true;
  }
  let LR = r.first("obj_flowey_master");
  let LU = !!LR && !!LR.darkmode;
  let LE = Math.abs(LT.sprite_width) || 16;
  let h0 = Math.abs(LT.sprite_height) || 16;
  let h1 = 322;
  let h2 = 400;
  let h3 = r.list.find(hL => !hL.destroyed && hL.visible !== false && hL.is && hL.is("obj_centeract_parent"));
  if (h3) {
    h1 = h3.x;
    h2 = h3.y;
  }
  let h7 = threats();
  let h8 = LT.bbox_left - LT.x;
  let h9 = LT.bbox_top - LT.y;
  let hX = LT.bbox_right - LT.bbox_left;
  let ht = LT.bbox_bottom - LT.bbox_top;
  let hB = null;
  for (let [hL, hh] of tf) {
    let hg = LT.x;
    let hN = LT.y;
    let hd = ti + 1;
    let hb = 1000000000;
    for (let hO = 1; hO <= ti && hd > ti; hO++) {
      if (hL < 0 && hg > 0 && (LU || hg > 108)) {
        hg -= 4;
      }
      if (hL > 0 && hg < 640 - LE && (LU || hg < 512)) {
        hg += 4;
      }
      if (hh < 0 && hN > 0 && (LU || hN > 268)) {
        hN -= 4;
      }
      if (hh > 0 && hN < 480 - h0) {
        hN += 4;
      }
      let hM = hg + h8;
      let hS = hN + h9;
      let hC = hM + hX;
      let hw = hS + ht;
      let hm = (hM + hC) / 2;
      let hk = (hS + hw) / 2;
      for (let hW of h7) {
        if (hW.line) {
          if (lineHits(hW, hm, hk, Math.max(hX, ht) / 2)) {
            hd = hO;
            break;
          }
          continue;
        }
        let hV = hW.l + hW.vx * hO;
        let hQ = hW.r + hW.vx * hO;
        let hY = hW.t + hW.vy * hO;
        let hy = hW.b + hW.vy * hO;
        if (hC >= hV && hM <= hQ && hw >= hY && hS <= hy) {
          hd = hO;
          break;
        }
        if (hO === ti) {
          hb = Math.min(hb, Math.max(hV - hC, hM - hQ, hY - hw, hS - hy));
        }
      }
    }
    let hZ = hg + LE / 2;
    let hK = hN + h0 / 2;
    let hl = Math.hypot(h1 - hZ, h2 - hK);
    let hp = hd * 1000 - (hb < 24 ? (24 - hb) * 4 : 0) - hl * (h3 ? 1 : 0.25);
    if (!hB || hp > hB.score) {
      hB = {
        score: hp,
        dx: hL,
        dy: hh
      };
    }
  }
  if (hB.dx < 0) {
    n.held.left = true;
  }
  if (hB.dx > 0) {
    n.held.right = true;
  }
  if (hB.dy < 0) {
    n.held.up = true;
  }
  if (hB.dy > 0) {
    n.held.down = true;
  }
  return true;
}
i(floweyStep, "floweyStep");
function fakeChoice() {
  if (!utOn()) {
    return false;
  }
  let LT = r.first("obj_fakeheart");
  return !!LT && !LT.destroyed && !!r.list.some(LR => !LR.destroyed && LR.is && LR.is("obj_anybt"));
}
i(fakeChoice, "fakeChoice");
function fakeHeartStep() {
  if (!fakeChoice()) {
    return false;
  }
  let Lc = r.first("obj_fakeheart");
  let LT = r.list.filter(h3 => !h3.destroyed && h3.is && h3.is("obj_anybt"));
  for (let h3 of ["left", "right", "up", "down"]) {
    n.held[h3] = false;
  }
  let LU = LT.find(h4 => /sparebt/.test(String(h4.sprite_index))) || LT[LT.length - 1];
  let LE = (Lc.bbox_left + Lc.bbox_right) / 2;
  let h0 = (Lc.bbox_top + Lc.bbox_bottom) / 2;
  let h1 = (LU.bbox_left + LU.bbox_right) / 2;
  let h2 = (LU.bbox_top + LU.bbox_bottom) / 2;
  if (h1 - LE > 3) {
    n.held.right = true;
  } else if (LE - h1 > 3) {
    n.held.left = true;
  }
  if (h2 - h0 > 3) {
    n.held.down = true;
  } else if (h0 - h2 > 3) {
    n.held.up = true;
  }
  return true;
}
i(fakeHeartStep, "fakeHeartStep");
function sparable(X) {
  if (!X || X.destroyed || X.mercymod === undefined) {
    return false;
  }
  let LR = X.myself | 0;
  let LU = Number(C.monsterhp[LR]) - Number(C.at) - Number(C.wstrength) + Number(C.monsterdef[LR]) - Number(X.mercymod);
  return Number.isFinite(LU) && LU < 0;
}
i(sparable, "sparable");
function liveActs() {
  let LR = [];
  for (let LU = 0; LU < 6; LU++) {
    if (C.choices && C.choices[LU] === 1) {
      LR.push(LU);
    }
  }
  return LR;
}
i(liveActs, "liveActs");
function menuPlan() {
  let LT = C.battlegroup | 0;
  const LU = {
    col: 1,
    act: 0
  };
  if (LT >= 87 && LT <= 90) {
    return LU;
  }
  if (LT === 256) {
    let h3 = C.flag || [];
    if ((h3[501] | 0) === 1) {
      let h5 = [[505, 0], [507, 1], [508, 2], [506, 3]].find(([h7]) => !(h3[h7] | 0));
      const h6 = {
        col: 1,
        act: h5 ? h5[1] : 0
      };
      return h6;
    }
    const h4 = {
      col: 1,
      act: 0
    };
    return h4;
  }
  const LE = {
    col: 1,
    act: 3
  };
  const h0 = {
    col: 3,
    spare: true
  };
  if (LT === 57 || LT === 80) {
    return LE;
  } else if (LT >= 82 && LT <= 86) {
    if ([0, 1, 2].map(h7 => C.monster && C.monster[h7] === 1 ? C.monsterinstance[h7] : null).filter(Boolean).some(sparable)) {
      return h0;
    } else {
      return {
        col: 1,
        act: "cycle"
      };
    }
  } else {
    return null;
  }
}
i(menuPlan, "menuPlan");
function utMenuAction() {
  if (!utOn() || C.fightRoom !== "room_battle" || !r.first("obj_battlecontroller") || C.mnfight !== 0 || C.myfight !== 0 || C.battleover) {
    return null;
  }
  let LJ = menuPlan();
  if (!LJ) {
    return null;
  }
  if ((r.frame | 0) % 3 !== 0) {
    return "";
  }
  let LR = C.bmenucoord;
  if (!LR) {
    return null;
  }
  let LU = Number(C.bmenuno);
  if (LU === 0) {
    if ((Number(LR[0]) | 0) === LJ.col) {
      return "b1";
    } else {
      return "right";
    }
  }
  if (LU === 1 || LU === 2) {
    return "b1";
  }
  if (LU === 4) {
    if ((Number(LR[4]) | 0) === 0) {
      return "b1";
    } else {
      return "up";
    }
  }
  if (LU === 10) {
    let LE = LJ.act;
    if (LE === "cycle") {
      let h3 = liveActs().filter(h4 => h4 !== 0);
      LE = h3.length ? h3[(Number(C.turn) | 0) % h3.length] : 0;
    }
    let h0 = Number(LR[2]) | 0;
    if (h0 >= 3 != LE >= 3) {
      if (LE >= 3) {
        return "right";
      } else {
        return "left";
      }
    } else if (h0 % 3 !== LE % 3) {
      if (h0 % 3 < LE % 3) {
        return "down";
      } else {
        return "up";
      }
    } else {
      return "b1";
    }
  }
  return null;
}
i(utMenuAction, "utMenuAction");
const tU = {
  wait: true
};
var tE = tU;
function heartGoal(X) {
  if (!utOn() || !X || X.destroyed || C.fightRoom !== "room_battle") {
    return null;
  }
  let LR = null;
  let LU = r.first("obj_sansb_body");
  let LE = r.first("obj_s_fakefightbt");
  if (LU && LE && !LE.destroyed && LE.con === 0) {
    LR = LU.asleep === 1 ? LE : LU.sleep_c === 1 ? tE : null;
  }
  let h0 = r.first("obj_questionasker");
  if (!LR && h0 && h0.phase === 2) {
    let h2 = r.all("obj_answernodule").filter(h3 => !h3.destroyed && !!h3.visible && !h3.answered);
    LR = h2.find(h3 => h3.ano === h0.correct) || h2[0] || null;
  }
  return LR;
}
i(heartGoal, "heartGoal");
function heartGoalStep(X) {
  let Lc = heartGoal(X);
  if (!Lc) {
    return false;
  }
  for (let h2 of ["left", "right", "up", "down"]) {
    n.held[h2] = false;
  }
  if (Lc === tE) {
    return true;
  }
  if (Lc.is && Lc.is("obj_s_fakefightbt")) {
    if (Lc.on !== 1) {
      n.held.left = true;
      n.held.down = true;
    }
    return true;
  }
  let LU = (X.bbox_left + X.bbox_right) / 2;
  let LE = (X.bbox_top + X.bbox_bottom) / 2;
  let h0 = (Lc.bbox_left + Lc.bbox_right) / 2;
  let h1 = (Lc.bbox_top + Lc.bbox_bottom) / 2;
  if (h0 - LU > 2) {
    n.held.right = true;
  } else if (LU - h0 > 2) {
    n.held.left = true;
  }
  if (h1 - LE > 2) {
    n.held.down = true;
  } else if (LE - h1 > 2) {
    n.held.up = true;
  }
  return true;
}
i(heartGoalStep, "heartGoalStep");
function goalConfirm() {
  let LJ = r.first("obj_heart");
  let Lc = heartGoal(LJ);
  if (Lc && Lc.is && Lc.is("obj_s_fakefightbt")) {
    return Lc.on === 1 && (r.frame | 0) % 4 === 0;
  } else {
    return null;
  }
}
i(goalConfirm, "goalConfirm");
P();
var B3 = 0.3333333333333333;
var B4 = new Set([0, 3, 12, 13, 14, 15, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 56, 57, 60, 64]);
var drHeals = i(X => {
  let LU = S.items[X - 200];
  let LE = LU && LU.effect;
  return !!LE && !!LU.usable && !LE.poison && (!!LE.heal || !!LE.perchar || !!LE.bych || !!LE.revive || !!LE.reviveall || !!LE.dflt);
}, "drHeals");
var menuBones = i(() => !!r.first("obj_menubone") || !!r.first("obj_menubone_bottom"), "menuBones");
function itemMenuAction() {
  if (!C.autoplay || C.myfight !== 0 || C.mnfight !== 0 || C.battleover || !C.bmenucoord) {
    return null;
  }
  let Lc = r.first("obj_battlecontroller");
  if (!Lc) {
    return null;
  }
  let LR = (r.frame | 0) % 3 === 0;
  if (W === "ut") {
    if (Lc.havechar) {
      return null;
    } else {
      return utAction(Lc, LR);
    }
  } else if (Lc.havechar) {
    return drAction(Lc, LR);
  } else {
    return null;
  }
}
i(itemMenuAction, "itemMenuAction");
function utAction(X, B) {
  if (C.fightRoom !== "room_battle" || X.active !== 1 || menuBones()) {
    return null;
  }
  let LU = Number(C.bmenuno);
  let LE = Number(C.bmenucoord[0]) | 0;
  let h0 = Number(C.hp) <= Number(C.maxhp) * B3 && !B4.has(Number(C.item[0]) | 0);
  if (LU === 0) {
    if (h0 && C.mercy !== 3) {
      if (B) {
        if (LE === 2) {
          return "b1";
        } else if (LE < 2) {
          return "right";
        } else {
          return "left";
        }
      } else {
        return "";
      }
    } else if (LE === 2 && (!C.item[0] || C.talked === 91) || LE === 1 && C.talked === 91) {
      if (B) {
        return "left";
      } else {
        return "";
      }
    } else {
      return null;
    }
  } else if (LU >= 3 && LU < 4 && h0) {
    if (B) {
      return "b1";
    } else {
      return "";
    }
  } else {
    return null;
  }
}
i(utAction, "utAction");
function drAction(X, B) {
  if (X.oopsallacts === 1) {
    return null;
  }
  let LT = C.charturn | 0;
  let LR = C.bmenucoord;
  let LU = C.bmenuno;
  let LE = h7 => (X.tempitem && X.tempitem[h7] ? X.tempitem[h7][LT] : 0) | 0;
  let h0 = -1;
  let h1 = 1 / 0;
  for (let h7 = 0; h7 < Math.min(3, k()); h7++) {
    let h8 = C.char[h7];
    if (!(h8 > 0) || !(C.maxhp[h8] > 0)) {
      continue;
    }
    let h9 = C.hp[h8] / C.maxhp[h8];
    if (h9 < h1) {
      h1 = h9;
      h0 = h7;
    }
  }
  let h2 = -1;
  for (let hX = 0; hX < 12 && h2 < 0; hX++) {
    if (LE(hX) && drHeals(LE(hX))) {
      h2 = hX;
    }
  }
  let h3 = false;
  for (let ht = 0; ht < LT; ht++) {
    if (C.charaction[ht] === 4) {
      h3 = true;
    }
  }
  let h5 = h1 <= B3 && h2 >= 0 && !h3 && h0 >= 0;
  if (LU === 0) {
    {
      let hB = LR[0][LT] | 0;
      if (h5) {
        if (B) {
          if (hB === 2) {
            return "b1";
          } else if (hB < 2) {
            return "right";
          } else {
            return "left";
          }
        } else {
          return "";
        }
      } else if (hB === 2 && !LE(0)) {
        if (B) {
          return "left";
        } else {
          return "";
        }
      } else {
        return null;
      }
    }
  }
  if (!h5) {
    return null;
  }
  if (LU === 4) {
    {
      let hg = LR[4][LT] | 0;
      if (B) {
        if (hg === h2) {
          return "b1";
        } else if (hg >> 1 !== h2 >> 1) {
          if (hg >> 1 < h2 >> 1) {
            return "down";
          } else {
            return "up";
          }
        } else {
          return "right";
        }
      } else {
        return "";
      }
    }
  }
  if (LU === 7) {
    if (B) {
      if ((LR[7][LT] | 0) === h0) {
        return "b1";
      } else {
        return "down";
      }
    } else {
      return "";
    }
  } else {
    return null;
  }
}
i(drAction, "drAction");
function pinnedNullGfx() {
  let X = M(y);
  let B = X.ctx;
  try {
    Object.defineProperty(X, "ctx", {
      get: () => B,
      set: () => {},
      configurable: true
    });
  } catch {}
  return X;
}
i(pinnedNullGfx, "pinnedNullGfx");
function setRolloutBudget(X) {
  setCh5Budget(X);
}
i(setRolloutBudget, "setRolloutBudget");
var menuBonesOut = i(() => C.mnfight !== 2 && (!!r.first("obj_menubone") || !!r.first("obj_menubone_bottom")), "menuBonesOut");
function rolloutSoul() {
  return ch5RolloutKind() || (ch4GreenSoul(r.first("obj_heart")) ? "ch4green" : null) || (menuBonesOut() ? "menubones" : null);
}
i(rolloutSoul, "rolloutSoul");
var Bg = new Set(["obj_lborder", "obj_rborder", "obj_uborder", "obj_dborder", "obj_border"]);
var BN = (() => {
  let X = new Set(["obj_collidebullet"]);
  try {
    for (let B of s) {
      let [LJ, Lc] = B;
      if (LJ === "obj_heart" && !Bg.has(Lc)) {
        X.add(Lc);
      } else if (Lc === "obj_heart" && !Bg.has(LJ)) {
        X.add(LJ);
      }
    }
  } catch {}
  return X;
})();
for (let hJ of z) {
  BN.add(hJ);
}
var Bd = new Set(H);
function threatCount() {
  return BN.size;
}
i(threatCount, "threatCount");
var canSee = i(X => isThreatClass(X), "canSee");
var Bs = {
  frame: -1,
  mode: "off",
  threats: [],
  soul: null,
  bounds: null,
  dir: null,
  best: 0,
  score: 0,
  commit: 0,
  blocked: [],
  speed: 3,
  plan: null
};
var BK = [[0, 0]];
for (let hc = 0; hc < 16; hc++) {
  let hT = hc / 16 * Math.PI * 2;
  BK.push([Math.cos(hT), Math.sin(hT)]);
}
var Bl = {
  horizon: 30,
  keep: 0.35,
  stay: 0.25,
  room: 0.05,
  margin: 0,
  commit: 3,
  gsteps: 6,
  gkeep: 0.55,
  gstay: 0.35,
  centre: 0.6,
  beamAlign: 12
};
function setParams(X) {
  Object.assign(Bl, X);
}
i(setParams, "setParams");
async function loadAutoplayTune(X = "assets/autoplay.tune.json") {
  try {
    let B = await fetch(X, {
      cache: "no-store"
    });
    if (!B.ok) {
      return null;
    }
    let LJ = await B.json();
    if (LJ && LJ.params) {
      setParams(LJ.params);
      return LJ;
    }
  } catch {}
  return null;
}
i(loadAutoplayTune, "loadAutoplayTune");
var je = 0;
var jq = 0;
var ju = 3;
var jx = null;
var jv = 0;
var jI = new Map();
var ja = {
  left: 0,
  right: 0,
  up: 0,
  down: 0
};
var jf = {
  left: false,
  right: false,
  up: false,
  down: false
};
var ji = {
  soul: "",
  branch: "",
  move: "",
  detail: "",
  threats: 0,
  hazards: []
};
function autoplayPlan() {
  return ji;
}
i(autoplayPlan, "autoplayPlan");
function note(X, B, LJ) {
  ji.branch = X;
  ji.move = B;
  ji.detail = LJ || "";
}
i(note, "note");
function autoplayOn() {
  return !!C.autoplay;
}
i(autoplayOn, "autoplayOn");
function toggleAutoplay() {
  C.autoplay = !C.autoplay;
  if (!C.autoplay) {
    clearAll();
    n.synthetic = null;
  }
  return C.autoplay;
}
i(toggleAutoplay, "toggleAutoplay");
function clearHeld() {
  n.held.left = false;
  n.held.right = false;
  n.held.up = false;
  n.held.down = false;
}
i(clearHeld, "clearHeld");
function clearAll() {
  clearHeld();
  n.held.b1 = false;
  n.pressed.b1 = false;
}
i(clearAll, "clearAll");
function autoplayBounds() {
  return arena();
}
i(autoplayBounds, "autoplayBounds");
function arena() {
  let X = null;
  let B = null;
  let LJ = null;
  let Lc = null;
  for (let LU of r.list) {
    if (LU.destroyed) {
      continue;
    }
    let LE = LU.constructor.name;
    if (LE === "obj_lborder") {
      X = LU.x;
    } else if (LE === "obj_rborder") {
      B = LU.x;
    } else if (LE === "obj_uborder") {
      LJ = LU.y;
    } else if (LE === "obj_dborder") {
      Lc = LU.y;
    }
  }
  if (X !== null && B !== null && LJ !== null && Lc !== null && B - X > 16 && Lc - LJ > 16) {
    return [X, LJ, B, Lc];
  }
  let LT = r.first("obj_knight_split_growtangle");
  if (LT && !LT.destroyed) {
    let h0 = LT.con === 0 ? 0 : Math.round(LT.distance || 0);
    let h1 = LT.vertical ? h0 : 0;
    let h2 = LT.vertical ? 0 : h0;
    if (LT.diagonal) {
      h1 = Math.SQRT1_2 * h0;
      h2 = Math.SQRT1_2 * h0;
    }
    return [LT.x - 70 - h1, LT.y - 70 - h2, LT.x + 52 + h1 + 20, LT.y + 52 + h2 + 20];
  }
  let LR = r.first("obj_growtangle");
  if (LR && !LR.destroyed) {
    let h3 = (LR.image_xscale || 2) * 37.5;
    let h4 = (LR.image_yscale || 2) * 37.5;
    if (h3 > 8 && h4 > 8) {
      return [LR.x - h3, LR.y - h4, LR.x + h3, LR.y + h4];
    }
  }
  return null;
}
i(arena, "arena");
function utGravity(X) {
  if (X > 0.5 && X < 8) {
    return 0.6;
  } else if (X > -1 && X <= 0.5) {
    return 0.2;
  } else if (X > -4 && X <= -1) {
    return 0.5;
  } else {
    return 0.2;
  }
}
i(utGravity, "utGravity");
function boxOf(X) {
  if (X.is && X.is("obj_tracking_sword1")) {
    if (X.con < 2) {
      return {
        skip: true
      };
    }
    let LU = X.con === 2 ? X.flashtime + 1 - X.timer + 2 : Math.max(0, 2 - X.timer);
    let LE = (X.direction + 180) * Math.PI / 180;
    let h0 = Math.cos(LE);
    let h1 = Math.sin(LE);
    let h2 = [];
    for (let h3 = 60; h3 <= 260; h3 += 10) {
      h2.push({
        cx: X.x + h0 * h3,
        cy: X.y - h1 * h3,
        hw: 7,
        hh: 7,
        custom: 1,
        t0: LU,
        ttl: LU + 4
      });
    }
    return {
      multi: h2
    };
  }
  if (X.is && X.is("obj_sans_bonebul") && (X.width || 0) > 0) {
    let h4 = C.idealborder ? C.idealborder[2] + 11 : 0;
    let h5 = C.idealborder ? C.idealborder[3] - 6 : 480;
    let h6 = X.x + 2 + (X.rc_le || 0);
    let h7 = X.x + 8 - (X.rc_cut || 0);
    let h8 = X.type === 2 ? h4 : X.y + 5;
    let h9 = X.type === 2 ? X.y : h5;
    return {
      hw: Math.max(2, Math.abs(h7 - h6) / 2),
      hh: Math.max(2, Math.abs(h9 - h8) / 2),
      cx: (h6 + h7) / 2,
      cy: (h8 + h9) / 2,
      custom: 1
    };
  }
  if (X.is && X.is("blt_sizebone")) {
    if (X.active !== undefined && X.active !== 1) {
      return {
        skip: true
      };
    }
    let hX = C.idealborder || [0, 640, 0, 480];
    let ht = X.is("blt_topbone");
    let hB = X.x + 3;
    let hj = X.x + 9;
    let hL = ht ? hX[2] + 10 : X.y + 2;
    let hh = ht ? X.y : hX[3] - 2;
    return {
      cx: (hB + hj) / 2 + 1,
      cy: (hL + hh) / 2 + 1,
      hw: Math.abs(hj - hB) / 2 + 0.5,
      hh: Math.abs(hh - hL) / 2 + 0.5,
      blueOnly: X.blue === 1,
      custom: 1
    };
  }
  if (X.is && X.is("obj_bonestab")) {
    let hg = C.idealborder;
    if (!hg) {
      return {
        skip: true
      };
    }
    let hN = X.height || 25;
    let hd;
    let hb;
    let hZ;
    let hK;
    if (X.dir === 1) {
      hd = hg[1] - hN;
      hZ = hg[1] - 3;
      hb = hg[2] + 8;
      hK = hg[3] - 3;
    } else if (X.dir === 2) {
      hd = hg[0] + 8;
      hZ = hg[1] - 3;
      hb = hg[2] + 6;
      hK = hg[2] + 5 + hN;
    } else if (X.dir === 3) {
      hd = hg[0] + 5;
      hZ = hg[0] + 8 + hN;
      hb = hg[2] + 8;
      hK = hg[3] - 3;
    } else {
      hd = hg[0] + 8;
      hZ = hg[1] - 3;
      hb = hg[3] - hN;
      hK = hg[3] - 3;
    }
    let hl = Number.isFinite(X.retain) ? X.retain : 4;
    let hp = Math.max(1, Math.floor(hN / 4));
    let hO = 9 + hl + Math.ceil((hN - 3) / hp);
    let hM;
    let hS;
    if (X.con === 2) {
      hM = 0;
      hS = hO - (X.timer || 0) + 1;
    } else {
      let hC = Math.max(0, X.warning || 0);
      hM = hC + 1;
      hS = hC + hO;
    }
    if (hS < 1) {
      return {
        skip: true
      };
    } else {
      return {
        cx: (hd + hZ) / 2,
        cy: (hb + hK) / 2,
        hw: Math.max(4, Math.abs(hZ - hd) / 2),
        hh: Math.max(4, Math.abs(hK - hb) / 2),
        custom: 1,
        t0: hM,
        ttl: hS,
        vx: 0,
        vy: 0,
        ax: 0,
        ay: 0
      };
    }
  }
  if (X.is && X.is("obj_spearbullet_follow")) {
    if (X.deactivate) {
      return {
        skip: true
      };
    }
    let hw = X.rotspeed || 0;
    let hm = X.is("obj_followspear_2") ? 2 : 1;
    let hk = hw > 0 ? Math.ceil(hw / hm) : undefined;
    let hW = (X.direction || 0) * Math.PI / 180;
    let hV = Math.cos(hW);
    let hQ = -Math.sin(hW);
    let hY = X.x - hV * 12.5;
    let hy = X.y - hQ * 12.5;
    let hF = X.x + hV * 25;
    let hq = X.y + hQ * 25;
    return {
      cx: (hY + hF) / 2,
      cy: (hy + hq) / 2,
      hw: Math.max(4, Math.abs(hF - hY) / 2 + 3),
      hh: Math.max(4, Math.abs(hq - hy) / 2 + 3),
      ax: hV * 0.3,
      ay: hQ * 0.3,
      custom: 1,
      t0: hk
    };
  }
  if (X.constructor.name === "obj_collidebullet" && X.sprite_index === "spr_joker_scythebody") {
    let hu = null;
    for (let hx of r.list) {
      if (!hx.destroyed && hx.constructor.name === "obj_centerscythe" && hx.king === 1 && hx.sbul === X) {
        hu = hx;
        break;
      }
    }
    if (hu) {
      let hv = hu.scythetimer || 0;
      let hI = hu.scythesidex || 1;
      let ha = V[X.mask_index] || V[X.sprite_index];
      let hf = X.image_xscale || 1;
      let hi = X.image_yscale || 1;
      let hP = hI * 100 * Math.PI / 180;
      let hA = Math.cos(hP);
      let hz = Math.sin(hP);
      let hH = Infinity;
      let hG = Infinity;
      let hD = -Infinity;
      let hR = -Infinity;
      let hU = ha && ha.masks && ha.masks[0];
      if (hU) {
        for (let g3 = 0; g3 < hU.length; g3++) {
          for (let g4 = 0; g4 < hU[g3].length; g4++) {
            if (hU[g3][g4] === "#") {
              let g5 = (g4 + 0.5 - (ha.ox || 0)) * hf;
              let g6 = (g3 + 0.5 - (ha.oy || 0)) * hi;
              let g7 = g5 * hA + g6 * hz;
              let g8 = -g5 * hz + g6 * hA;
              if (g7 < hH) {
                hH = g7;
              }
              if (g7 > hD) {
                hD = g7;
              }
              if (g8 < hG) {
                hG = g8;
              }
              if (g8 > hR) {
                hR = g8;
              }
            }
          }
        }
      }
      if (!Number.isFinite(hH)) {
        hH = hf * -24;
        hD = hf * 24;
        hG = hi * -22;
        hR = hi * 22;
      }
      let hE = 64;
      let g0 = new Array(hE + 1);
      let g1 = X.x;
      for (let g9 = 0; g9 <= hE; g9++) {
        if (g9 > 0) {
          let gX = hv + g9;
          g1 += gX < 85 ? 0 : hI * -3 * Math.min(5, gX - 84);
        }
        g0[g9] = [g1 + (hH + hD) / 2, X.y + (hG + hR) / 2];
      }
      let g2 = 104 - hv;
      if (g2 < 1) {
        return {
          skip: true
        };
      } else {
        return {
          hw: (hD - hH) / 2,
          hh: (hR - hG) / 2,
          cx: g0[0][0],
          cy: g0[0][1],
          custom: 1,
          ttl: g2,
          vx: 0,
          vy: 0,
          ax: 0,
          ay: 0,
          path: gB => g0[Math.min(hE, Math.max(0, Math.round(gB)))]
        };
      }
    }
  }
  if (X.is && X.is("obj_centerscythe")) {
    if (X.chasecon !== 2) {
      return {
        skip: true
      };
    }
    let gB = V[X.mask_index] || V[X.sprite_index];
    if (gB && gB._reach === undefined) {
      let gO = 0;
      let gM = gB.masks && gB.masks[0];
      if (gM) {
        for (let gS = 0; gS < gM.length; gS++) {
          for (let gC = 0; gC < gM[gS].length; gC++) {
            if (gM[gS][gC] === "#") {
              gO = Math.max(gO, Math.hypot(gC + 0.5 - (gB.ox || 0), gS + 0.5 - (gB.oy || 0)));
            }
          }
        }
      }
      gB._reach = gO || Math.hypot(gB.w, gB.h) / 2;
    }
    let gj = gB ? gB._reach : 15;
    let gL = gj;
    let gh = 64;
    let gg = new Array(gh + 1);
    let gN = X.dir || 0;
    let gd = X.dirspeed || 0;
    let gb = X.insanity === 1;
    let gZ = X.sinespeed || 0;
    let gK = X.radius || 0;
    let gl = X.centerx;
    let gp = X.centery;
    for (let gw = 0; gw <= gh; gw++) {
      if (gw > 0) {
        gN += gd;
        if (gb) {
          if (gd > 0 && gd < 3) {
            gd += 0.01;
          } else if (gd < 0 && gd > -3) {
            gd -= 0.01;
          }
        }
      }
      let gm = Math.cos(((X.sine || 0) + gZ * gw) / 18) * gK;
      let gk = gN * Math.PI / 180;
      gg[gw] = [gl - gm * Math.cos(gk), gp + gm * Math.sin(gk)];
    }
    return {
      hw: gj,
      hh: gL,
      cx: X.x,
      cy: X.y,
      custom: 1,
      path: gW => gg[Math.min(gh, Math.max(0, Math.round(gW)))]
    };
  }
  let B = V[X.mask_index] || V[X.sprite_index];
  let LJ = Math.abs(X.image_xscale || 1);
  let Lc = Math.abs(X.image_yscale || 1);
  if (B && B.bb) {
    let gW = ((B.bb[0] + B.bb[2] + 1) / 2 - (B.ox || 0)) * (X.image_xscale || 1);
    let gV = ((B.bb[1] + B.bb[3] + 1) / 2 - (B.oy || 0)) * (X.image_yscale || 1);
    let gQ = (X.image_angle || 0) * Math.PI / 180;
    let gY = Math.cos(gQ);
    let gy = Math.sin(gQ);
    let gF = (B.bb[2] - B.bb[0] + 1) / 2 * LJ;
    let gq = (B.bb[3] - B.bb[1] + 1) / 2 * Lc;
    let gu = Math.abs(Math.sin(gQ * 2)) < 0.35;
    let gx = gu ? Math.abs(gY) * gF + Math.abs(gy) * gq : gF;
    let gv = gu ? Math.abs(gy) * gF + Math.abs(gY) * gq : gq;
    return {
      hw: Math.max(2, gx),
      hh: Math.max(2, gv),
      cx: X.x + gW * gY + gV * gy,
      cy: X.y - gW * gy + gV * gY
    };
  }
  let LT = Math.abs(X.sprite_width) || 16;
  let LR = Math.abs(X.sprite_height) || 16;
  return {
    hw: Math.max(2, LT / 2),
    hh: Math.max(2, LR / 2)
  };
}
i(boxOf, "boxOf");
function addBeam(X, B) {
  let LJ = (B.idealrot !== undefined ? B.idealrot : B.image_angle) || 0;
  let Lc = B.image_angle !== undefined ? B.image_angle : LJ;
  if (Math.abs(Lc - LJ) > Bl.beamAlign) {
    return;
  }
  let LT = (LJ - 90) * Math.PI / 180;
  let LR = Math.cos(LT);
  let LU = -Math.sin(LT);
  let LE = Math.abs(B.image_xscale || 1);
  let h0 = B.x + LR * 35 * LE;
  let h1 = B.y + LU * 35 * LE;
  let h2 = Math.ceil(Math.floor(LE * 35 / 4) * 1.5) + 1;
  let h3 = B.alarm ? Number(B.alarm[4]) : -1;
  let h4 = h3 > 0 ? h3 : 0;
  let h5;
  let h6;
  if (B.con === 7) {
    h5 = Math.max(1, 2 - (B.btimer || 0));
    h6 = 16 - (B.btimer || 0);
  } else if (B.con === 6) {
    h5 = h4 + 1;
    h6 = h4 + 15;
  } else if (B.con === 5) {
    h5 = 6;
    h6 = 20;
  } else if (B.con === 4) {
    h5 = h4 + 5;
    h6 = h4 + 19;
  } else {
    h5 = 15;
    h6 = 40;
  }
  if (!(h6 < 1)) {
    for (let h7 = 0; h7 <= 1000; h7 += h2) {
      X.push({
        x: h0 + LR * h7,
        y: h1 + LU * h7,
        vx: 0,
        vy: 0,
        hw: h2,
        hh: h2,
        beam: 1,
        bax: LR,
        bay: LU,
        t0: h5,
        ttl: h6
      });
    }
  }
}
i(addBeam, "addBeam");
var jE = new Map();
var L0 = new Set(["obj_boneplat"]);
function isThreatClass(X) {
  let B = X.constructor.name;
  let LJ = jE.get(B);
  if (LJ !== undefined) {
    return LJ;
  }
  if (L0.has(B)) {
    jE.set(B, false);
    return false;
  }
  let Lc = BN.has(B);
  if (!Lc && typeof X.is == "function") {
    for (let LT of BN) {
      if (X.is(LT)) {
        Lc = true;
        break;
      }
    }
  }
  if (!Lc && typeof X.dmg == "number" && X.dmg > 0) {
    Lc = true;
  }
  jE.set(B, Lc);
  return Lc;
}
i(isThreatClass, "isThreatClass");
function debugThreats() {
  return gatherThreats(true);
}
i(debugThreats, "debugThreats");
function ringPath(X) {
  let B = X.parent;
  if (!B || B.destroyed || typeof B != "object" || B.curang === undefined || B.rotspeed === undefined) {
    return;
  }
  let LJ = Math.hypot(X.x - B.x, X.y - B.y);
  let Lc = Math.atan2(-(X.y - B.y), X.x - B.x);
  let LT = B.rotmin || 0;
  let LR = B.rotspeed || 0;
  return LU => {
    let LE = LR;
    let h0 = 0;
    for (let h3 = 0; h3 < LU; h3++) {
      if (LE > LT) {
        LE = Math.max(LT, LE - 0.2);
      } else if (LE < LT) {
        LE = Math.min(LT, LE + 0.2);
      }
      h0 += LE;
    }
    let h1 = LJ - LU * 4;
    let h2 = Lc + h0 * Math.PI / 180;
    return [B.x + Math.cos(h2) * h1, B.y - Math.sin(h2) * h1];
  };
}
i(ringPath, "ringPath");
function gatherThreats(X) {
  let B = [];
  for (let Lc of r.list) {
    if (Lc.destroyed) {
      continue;
    }
    let LT = Lc.constructor.name;
    if (LT === "obj_gasterblaster") {
      addBeam(B, Lc);
      continue;
    }
    if (Lc.visible === false || !isThreatClass(Lc)) {
      continue;
    }
    let LR = Number.isFinite(Lc.x - Lc._px) ? Lc.x - Lc._px : 0;
    let LU = Number.isFinite(Lc.y - Lc._py) ? Lc.y - Lc._py : 0;
    let LE = 0;
    let h0 = 0;
    if (Number.isFinite(Lc._apvx)) {
      LE = Math.max(-1.5, Math.min(1.5, LR - Lc._apvx));
      h0 = Math.max(-1.5, Math.min(1.5, LU - Lc._apvy));
      LE = (Lc._apax || 0) * 0.5 + LE * 0.5;
      h0 = (Lc._apay || 0) * 0.5 + h0 * 0.5;
    }
    if (!X) {
      Lc._apax = LE;
      Lc._apay = h0;
      Lc._apvx = LR;
      Lc._apvy = LU;
    }
    let h1 = boxOf(Lc);
    if (!h1.skip) {
      for (let h2 of h1.multi || [h1]) {
        if (!!h2.custom || !!V[Lc.mask_index] || !!V[Lc.sprite_index] || !!Bd.has(LT)) {
          B.push({
            x: h2.cx === undefined ? Lc.x : h2.cx,
            y: h2.cy === undefined ? Lc.y : h2.cy,
            vx: h2.vx === undefined ? LR : h2.vx,
            vy: h2.vy === undefined ? LU : h2.vy,
            hw: h2.hw,
            hh: h2.hh,
            ax: h2.ax === undefined ? LE : h2.ax,
            ay: h2.ay === undefined ? h0 : h2.ay,
            t0: h2.t0,
            ttl: h2.ttl,
            path: h2.path || (Lc.is && Lc.is("obj_rotspear") ? ringPath(Lc) : undefined),
            blueOnly: !!h2.blueOnly || !!Lc.is && (!!Lc.is("blt_bluesword") || Lc.blue === 1 && (!!Lc.is("blt_dogspear") || !!Lc.is("blt_potentiallyblue") || !!Lc.is("blt_loopbulletgrow"))),
            cls: LT,
            custom: !!h2.custom,
            guessed: !h2.custom && !V[Lc.mask_index] && !V[Lc.sprite_index]
          });
        }
      }
      if (B.length > 400) {
        break;
      }
    }
  }
  let LJ = r.first("obj_sansb_body");
  if (LJ && !LJ.destroyed && LJ.fac === 4 && C.idealborder) {
    let h3 = LJ.alarm ? Number(LJ.alarm[7]) : 0;
    if (h3 > 0 && h3 <= 7) {
      let h4 = C.idealborder;
      let h5 = 55;
      let h6 = h4[0] + 8;
      let h7 = h4[1] - 3;
      let h8 = h4[3] - h5;
      let h9 = h4[3] - 3;
      B.push({
        x: (h6 + h7) / 2,
        y: (h8 + h9) / 2,
        vx: 0,
        vy: 0,
        ax: 0,
        ay: 0,
        hw: Math.abs(h7 - h6) / 2,
        hh: Math.abs(h9 - h8) / 2,
        t0: h3 + 7,
        ttl: h3 + 49,
        blueOnly: false
      });
    }
  }
  return B;
}
i(gatherThreats, "gatherThreats");
function hazardShapes(X) {
  if (!X || X.destroyed) {
    return null;
  }
  {
    let LR = ch5Shapes(X);
    if (LR !== undefined) {
      return LR;
    }
  }
  {
    let LU = ch4Shapes(X);
    if (LU !== undefined) {
      return LU;
    }
  }
  let B = X.constructor.name;
  if (B === "obj_gasterblaster") {
    if (X.col_o !== 1 || X.fade !== undefined && !(X.fade >= 0.8)) {
      return null;
    }
    let LE = ((X.image_angle || 0) - 90) * Math.PI / 180;
    let h0 = Math.cos(LE);
    let h1 = -Math.sin(LE);
    let h2 = Math.abs(X.image_xscale || 1);
    let h3 = Math.ceil(Math.floor(h2 * 35 / 4) * 1.5) + 1;
    return [{
      line: [X.x + h0 * 35 * h2, X.y + h1 * 35 * h2, h0, h1, h3],
      blue: false
    }];
  }
  if (!isThreatClass(X) || X.active === 0 && typeof X.is == "function" && X.is("obj_collidebullet")) {
    return null;
  }
  let LJ = boxOf(X);
  if (LJ.skip) {
    return null;
  }
  let Lc = !!LJ.blueOnly || !!X.is && (!!X.is("blt_bluesword") || !!X.is("obj_sans_bonebul") && X.type === 1 || X.blue === 1 && (!!X.is("blt_dogspear") || !!X.is("blt_potentiallyblue") || !!X.is("blt_loopbulletgrow")));
  let LT = [];
  for (let h4 of LJ.multi || [LJ]) {
    if (h4.t0 === undefined || !(h4.t0 > 1)) {
      if (h4.custom && h4.cx !== undefined) {
        LT.push({
          rect: [h4.cx - h4.hw, h4.cy - h4.hh, h4.cx + h4.hw, h4.cy + h4.hh],
          blue: Lc || !!h4.blueOnly
        });
        continue;
      }
      if (V[X.mask_index] || V[X.sprite_index]) {
        LT.push({
          mask: true,
          blue: Lc || !!h4.blueOnly
        });
        continue;
      }
      if (h4.cx !== undefined) {
        LT.push({
          rect: [h4.cx - h4.hw, h4.cy - h4.hh, h4.cx + h4.hw, h4.cy + h4.hh],
          blue: Lc || !!h4.blueOnly
        });
        continue;
      }
      if (h4.custom || Bd.has(B)) {
        LT.push({
          rect: [X.x - h4.hw, X.y - h4.hh, X.x + h4.hw, X.y + h4.hh],
          blue: Lc
        });
      }
    }
  }
  return LT;
}
i(hazardShapes, "hazardShapes");
var L6 = (() => {
  let X = [];
  for (let B = -14; B <= 14; B++) {
    for (let LJ = -14; LJ <= 14; LJ++) {
      let Lc = Math.hypot(LJ, B);
      if (Lc <= 14) {
        X.push([LJ, B, Lc]);
      }
    }
  }
  X.sort((LT, LR) => LT[2] - LR[2]);
  return {
    R: 14,
    list: X
  };
})();
function gridClearance(X, B, LJ, Lc, LT, LR) {
  let [LU, LE, h0, h1] = Lc;
  let h2 = Math.floor((LT - LU) / (h0 - LU) * B);
  let h3 = Math.floor((LR - LE) / (h1 - LE) * LJ);
  if (h2 < 0 || h3 < 0 || h2 >= B || h3 >= LJ) {
    return 0;
  }
  let h4 = X.grid;
  let h5 = X.hazardIsLit ? 1 : 0;
  for (let h6 = 0; h6 < L6.list.length; h6++) {
    let h7 = L6.list[h6];
    let h8 = h2 + h7[0];
    let h9 = h3 + h7[1];
    if (h8 < 0 || h9 < 0 || h8 >= B || h9 >= LJ || h4[h9 * B + h8] === h5) {
      return h7[2];
    }
  }
  return L6.R;
}
i(gridClearance, "gridClearance");
var L8 = 0;
function hazardsInBox() {
  let X = arena();
  if (!X) {
    return liveThreats() > 0;
  }
  let [B, LJ, Lc, LT] = X;
  for (let LR of r.list) {
    if (LR.destroyed || LR.visible === false || !isThreatClass(LR)) {
      continue;
    }
    let LU = boxOf(LR);
    for (let LE of LU.multi || [LU]) {
      if (LE.skip) {
        continue;
      }
      let h0 = LE.cx === undefined ? LR.x : LE.cx;
      let h1 = LE.cy === undefined ? LR.y : LE.cy;
      if (h0 + LE.hw >= B && h0 - LE.hw <= Lc && h1 + LE.hh >= LJ && h1 - LE.hh <= LT) {
        return true;
      }
    }
  }
  return false;
}
i(hazardsInBox, "hazardsInBox");
function liveThreats() {
  let X = 0;
  for (let B of r.list) {
    if (!B.destroyed && B.visible !== false) {
      if (isThreatClass(B)) {
        X++;
      }
    }
  }
  return X;
}
i(liveThreats, "liveThreats");
var LB = null;
function minigameOwnsInput() {
  if (C.minigameStage || C.standaloneMinigame) {
    if (LB && n.synthetic === LB) {
      n.synthetic = null;
      if (Ls.b1 || Ls.zHeld || Ls.zPrev) {
        n.held.b1 = false;
        n.pressed.b1 = false;
      }
      if (Ls.xHeld || Ls.xPrev) {
        n.held.b2 = false;
        n.pressed.b2 = false;
      }
    }
    LB = null;
    Ls.b1 = false;
    Ls.pulse = null;
    Ls.zHeld = false;
    Ls.zPrev = false;
    Ls.xHeld = false;
    Ls.xPrev = false;
    Ls.edges = "";
    return true;
  } else {
    return false;
  }
}
i(minigameOwnsInput, "minigameOwnsInput");
function autoplayUI() {
  if (!C.autoplay || minigameOwnsInput() || (L8++, ch5UI(L8))) {
    return;
  }
  let X = r.first("obj_heart");
  {
    let LJ = goalConfirm();
    if (LJ !== null) {
      pressB1(LJ);
      return;
    }
  }
  if (C.mnfight === 2 && isYellowSoul(X)) {
    fireTick(X);
    return;
  }
  if (C.mnfight === 2 && hazardsInBox() && !utWriterParked()) {
    pressB1(false);
    return;
  }
  {
    let Lc = ch4MenuAction();
    if (Lc !== null) {
      if (Lc === "b1") {
        pressB1(true);
      } else {
        pressB1(false);
        if (Lc) {
          pulseDir(Lc);
        }
      }
      return;
    }
  }
  {
    let LT = utMenuAction();
    if (LT !== null) {
      if (LT === "b1") {
        pressB1(true);
      } else {
        pressB1(false);
        if (LT) {
          pulseDir(LT);
        }
      }
      return;
    }
  }
  {
    let LR = itemMenuAction();
    if (LR !== null) {
      if (LR === "b1") {
        pressB1(true);
      } else {
        pressB1(false);
        if (LR) {
          pulseDir(LR);
        }
      }
      return;
    }
  }
  let B = attackBarPress();
  if ((!!r.first("obj_menubone") || !!r.first("obj_menubone_bottom")) && B === null && C.mnfight !== 2) {
    if (Lh && Lh.i < Lh.frames.length) {
      let LE = Lh.frames[Lh.i++];
      if (LE === "b1") {
        pressB1(true);
      } else {
        pressB1(false);
        if (LE) {
          pulseDir(LE);
        }
      }
      return;
    }
    Lh = null;
    if (L8 % 2 !== 0) {
      pressB1(false);
      return;
    }
    let LU = chooseMenuPlan();
    if (LU) {
      Lh = {
        frames: LU,
        i: 0
      };
      let h0 = Lh.frames[Lh.i++];
      if (h0 === "b1") {
        pressB1(true);
      } else {
        pressB1(false);
        if (h0) {
          pulseDir(h0);
        }
      }
      return;
    }
    pressB1(true);
    return;
  }
  pressB1(B !== null ? B : L8 % 8 === 0);
}
i(autoplayUI, "autoplayUI");
var Lh = null;
function utWriterParked() {
  for (let X of r.all("obj_base_writer")) {
    if (!X.destroyed && (X.halt === 1 || X.halt === 2 || X.halt === 4)) {
      return true;
    }
  }
  return false;
}
i(utWriterParked, "utWriterParked");
var LN = null;
function menuFrames(X, B, LJ) {
  let Lc = [];
  let LT = LR => {
    let LU = X;
    let LE = LR > LU ? "right" : "left";
    while (LU !== LR) {
      Lc.push(LE, "");
      LU += LR > LU ? 1 : -1;
    }
    X = LR;
  };
  for (LT(B); Lc.length < LJ;) {
    Lc.push("");
  }
  LT(0);
  Lc.push("b1", "", "b1", "");
  return Lc;
}
i(menuFrames, "menuFrames");
function chooseMenuPlan() {
  let X = Array.isArray(C.bmenucoord) ? C.bmenucoord[0] | 0 : 0;
  let B = p();
  let LJ = new Map();
  let Lc = (LE, h0, h1) => {
    let h2 = LE.join(",");
    let h3 = LJ.get(h2);
    if (h3 !== undefined && (h3.full || h3.c > h0 || h3.c === h0 && LE.length >= h1)) {
      return h3.c;
    }
    let h4 = menuPlanCost(LE, B, h0, h1);
    LJ.set(h2, {
      c: h4,
      full: h0 === Infinity
    });
    return h4;
  };
  if (X === 0 && Lc(menuFrames(0, 0, 0), Infinity, Infinity) === 0) {
    return null;
  }
  let LT = null;
  let LR = Infinity;
  let LU = Infinity;
  for (let LE = 0; LE <= 64; LE += 4) {
    for (let h0 = 0; h0 < 4; h0++) {
      let h1 = menuFrames(X, h0, LE);
      let h2 = Lc(h1, LR, LU);
      if (h2 < LR || h2 === LR && h1.length < LU) {
        LT = h1;
        LR = h2;
        LU = h1.length;
      }
      if (h2 === 0) {
        return h1;
      }
    }
  }
  return LT;
}
i(chooseMenuPlan, "chooseMenuPlan");
function menuPlanCost(X, B = null, LJ = Infinity, Lc = Infinity) {
  LN = LN || pinnedNullGfx();
  let LT = B || p();
  let LR = n.synthetic;
  let LU = Ls.b1;
  let LE = Ls.pulse;
  let h0 = typeof C.hp == "number" ? C.hp : 0;
  let h1 = Number(C.km) || 0;
  let h2 = 0;
  x();
  try {
    for (let h3 = 0; h3 < X.length + 10; h3++) {
      let h4 = X[h3] || "";
      n.synthetic = () => {
        n.pressed.b1 = h4 === "b1";
        n.held.b1 = h4 === "b1";
        for (let h8 of ["left", "right"]) {
          n.pressed[h8] = h4 === h8;
          n.held[h8] = h4 === h8;
        }
      };
      try {
        Q(l, LN);
      } catch {
        break;
      }
      let h5 = typeof C.hp == "number" ? C.hp : 0;
      let h6 = Number(C.km) || 0;
      let h7 = Math.max(0, h1 - h6);
      h2 = Math.max(h2, Math.max(0, h0 - h5 - h7) + Math.max(0, h6 - h1));
      if (h2 > LJ || h2 === LJ && X.length >= Lc) {
        break;
      }
    }
  } finally {
    O(LT);
    v();
    n.synthetic = LR;
    Ls.b1 = LU;
    Ls.pulse = LE;
  }
  return h2;
}
i(menuPlanCost, "menuPlanCost");
var Ls = {
  b1: false,
  pulse: null,
  zHeld: false,
  zPrev: false,
  xHeld: false,
  xPrev: false,
  edges: ""
};
function installSynthetic() {
  n.synthetic = LB = () => {
    let X = Ls.edges ? edgeSet(Ls.edges) : null;
    let B = Ls.zHeld || !!X && !!X.has("z");
    let LJ = Ls.xHeld || !!X && !!X.has("x");
    n.pressed.b1 = Ls.b1 || B && (!Ls.zPrev || !!X && !!X.has("z"));
    n.held.b1 = Ls.b1 || B;
    if (LJ || Ls.xPrev) {
      n.pressed.b2 = LJ && (!Ls.xPrev || !!X && !!X.has("x"));
      n.held.b2 = LJ;
    }
    if (Ls.pulse) {
      n.pressed[Ls.pulse] = true;
      n.held[Ls.pulse] = true;
      Ls.pulse = null;
    }
    if (X) {
      for (let Lc of X) {
        if (Lc !== "z" && Lc !== "x") {
          n.pressed[Lc] = true;
          n.held[Lc] = true;
        }
      }
    }
  };
}
i(installSynthetic, "installSynthetic");
var Ll = new Map();
function edgeSet(X) {
  let B = Ll.get(X);
  if (!B) {
    B = new Set(X.split("+").filter(Boolean));
    Ll.set(X, B);
  }
  return B;
}
i(edgeSet, "edgeSet");
var LO = ["left", "right", "up", "down"];
var LM = "";
function applyPlanKeys(X, B) {
  let LJ = String(X || "").split("+").filter(Boolean);
  for (let LU of LO) {
    n.held[LU] = false;
  }
  let Lc = false;
  let LT = false;
  let LR = "";
  for (let LE of LJ) {
    if (LE === "z") {
      Lc = true;
    } else if (LE === "x") {
      LT = true;
    } else if (LE.charCodeAt(0) === 33) {
      LR += (LR ? "+" : "") + LE.slice(1);
    } else {
      n.held[LE] = true;
    }
  }
  n.pressed.up = !!B;
  Ls.zPrev = Ls.zHeld;
  Ls.zHeld = Lc;
  Ls.xPrev = Ls.xHeld;
  Ls.xHeld = LT;
  Ls.edges = LR;
  if (Lc || LT || LR || Ls.zPrev || Ls.xPrev) {
    installSynthetic();
  }
  LM = LJ.join("+");
}
i(applyPlanKeys, "applyPlanKeys");
function lastPlanKeys() {
  return LM;
}
i(lastPlanKeys, "lastPlanKeys");
function releasePlanKeys() {
  if (!!Ls.zHeld || !!Ls.xHeld || !!Ls.edges || !!Ls.zPrev || !!Ls.xPrev) {
    Ls.zPrev = Ls.zHeld;
    Ls.zHeld = false;
    Ls.xPrev = Ls.xHeld;
    Ls.xHeld = false;
    Ls.edges = "";
    installSynthetic();
  }
}
i(releasePlanKeys, "releasePlanKeys");
function tokenSynthetic(X, B) {
  let LJ = false;
  let Lc = false;
  let LT = false;
  let LR = false;
  let LU = [];
  for (let h1 of X || []) {
    if (h1 === "z") {
      LJ = true;
    } else if (h1 === "x") {
      Lc = true;
    } else if (h1.charCodeAt(0) === 33) {
      LU.push(h1.slice(1));
    }
  }
  for (let h2 of B || []) {
    if (h2 === "z") {
      LT = true;
    } else if (h2 === "x") {
      LR = true;
    }
  }
  if (!LJ && !Lc && !LT && !LR && !LU.length) {
    return null;
  }
  let LE = LU.includes("z");
  let h0 = LU.includes("x");
  return () => {
    n.pressed.b1 = LJ && !LT || LE;
    n.held.b1 = LJ || LE;
    n.pressed.b2 = Lc && !LR || h0;
    n.held.b2 = Lc || h0;
    for (let h3 of LU) {
      if (h3 !== "z" && h3 !== "x") {
        n.pressed[h3] = true;
        n.held[h3] = true;
      }
    }
  };
}
i(tokenSynthetic, "tokenSynthetic");
function pressB1(X) {
  Ls.b1 = !!X;
  n.held.b1 = !!X;
  n.pressed.b1 = !!X;
  installSynthetic();
}
i(pressB1, "pressB1");
function pulseDir(X) {
  Ls.pulse = X;
  n.pressed[X] = true;
  n.held[X] = true;
  installSynthetic();
}
i(pulseDir, "pulseDir");
function attackBarPress() {
  let X = r.first("obj_attackpress");
  if (X && !X.destroyed && Array.isArray(X.boltalive)) {
    let Lc = false;
    let LT = false;
    for (let LR = 0; LR < X.bolttotal; LR++) {
      if (X.boltalive[LR] === 1) {
        LT = true;
        if (X.boltframe[LR] - X.boltx === 0) {
          Lc = true;
        }
      }
    }
    if (LT) {
      return Lc;
    } else {
      return false;
    }
  }
  let B = r.first("obj_targetchoice");
  let LJ = r.first("obj_target");
  if (B && !B.destroyed && B.image_speed !== 0) {
    return null;
  }
  if (B && !B.destroyed && LJ && !LJ.destroyed) {
    let LU = (B.x || 0) + (Math.abs(B.sprite_width) || 0) / 2;
    let LE = (LJ.x || 0) + (Math.abs(LJ.sprite_width) || 0) / 2;
    let h0 = Math.abs(Number(B.hspeed) || 0) || 1;
    return Math.abs(LU - LE) <= Math.max(3, h0);
  }
  return null;
}
i(attackBarPress, "attackBarPress");
var Ly = 0;
function isYellowSoul(X) {
  if (X) {
    if (X.shot === 1) {
      return true;
    } else {
      return /yellow/i.test(String(X.sprite_index || ""));
    }
  } else {
    return false;
  }
}
i(isYellowSoul, "isYellowSoul");
function fireTick(X) {
  if (C.mnfight !== 2 || !isYellowSoul(X)) {
    Ly = 0;
    return;
  }
  Ly++;
  pressB1(Ly % 4 === 1);
}
i(fireTick, "fireTick");
var Lq = 0;
var Lu = null;
var Lx = "b2";
var Lv = {
  picks: {},
  punchStarts: 0,
  foeSeen: 0
};
var LI = {
  last: -1,
  windup: {}
};
var ringHp = i(X => {
  let B = r.first(X);
  return B && Number(B.health_count) || 0;
}, "ringHp");
var partyHp = i(() => ringHp("o_boxingcontroller"), "partyHp");
function boxingStep() {
  if (globalThis.__boxOff) {
    return false;
  }
  let X = r.first("o_boxingcontroller");
  if (!X) {
    Lq = 0;
    return false;
  }
  let B = r.first("o_boxingqueen");
  if (!X._apLive) {
    if (B && B.state !== 0) {
      X._apLive = 1;
    } else {
      return false;
    }
  }
  for (let h0 of ["left", "right", "up", "down"]) {
    n.held[h0] = false;
  }
  pressB1(false);
  Lq++;
  if (B && B.state === 3 && (B.attacktimer | 0) <= 1) {
    B._apAttackId = (B._apAttackId | 0) + 1;
  }
  if (!B || B.state !== 3) {
    LI.last = -1;
    if (Lq % 6 === 1 && X.canpunch !== 0) {
      let h1 = Lx === "b1" ? "b2" : "b1";
      pulseDir(h1);
      Lx = h1;
      Lv.picks[h1] = (Lv.picks[h1] || 0) + 1;
    }
    return true;
  }
  if (Lq % 2 !== 0) {
    return true;
  }
  Lu = Lu || pinnedNullGfx();
  let LJ = p();
  let Lc = n.synthetic;
  let LT = f();
  q(false);
  x();
  let LR = (h2, h3) => {
    O(LJ);
    let h4 = partyHp();
    for (let h5 = 0; h5 < h3; h5++) {
      n.synthetic = h5 === 0 && h2 ? () => {
        n.pressed[h2] = true;
        n.held[h2] = true;
      } : null;
      try {
        Q(l, Lu);
      } catch {}
      if (C.battleover) {
        break;
      }
    }
    return h4 - partyHp();
  };
  let LU = null;
  let LE = Infinity;
  try {
    let h2 = LR(null, 16);
    if (h2 > 0) {
      LE = h2;
      for (let h3 of ["left", "right", "down"]) {
        let h4 = LR(h3, 22);
        if (h4 < LE) {
          LE = h4;
          LU = h3;
        }
        if (h4 === 0) {
          break;
        }
      }
    }
  } finally {
    O(LJ);
    v();
    n.synthetic = Lc;
    q(LT);
  }
  Lv.picks[LU || "none"] = (Lv.picks[LU || "none"] || 0) + 1;
  if (globalThis.__boxNoPress) {
    LU = null;
  }
  if (LU) {
    pulseDir(LU);
    if (LU === "b1" || LU === "b2") {
      Lx = LU;
    }
  }
  return true;
}
i(boxingStep, "boxingStep");
function autoplayStep(LJ, Lc, LT, LR, LU) {
  if (!C.autoplay || minigameOwnsInput() || (releasePlanKeys(), boxingStep()) || ch5Step(Lc) || !Lc && floweyStep() || fakeHeartStep() || Lc && heartGoalStep(Lc)) {
    return;
  }
  if (!Lc || Lc.destroyed) {
    clearHeld();
    return;
  }
  jv++;
  {
    let hl = ch4GreenKeys(Lc);
    if (hl) {
      clearHeld();
      for (let hp of hl) {
        n.held[hp] = true;
      }
      Bs.mode = "ch4-green";
      note("ch4-green", hl.join("+") || "none", "shield by rollout");
      return;
    }
  }
  let LE = !!LJ && !!LJ.grid && !!LT && !!LR && !!LU;
  let h0 = LE ? LT : arena();
  let h1 = LE ? null : gatherThreats();
  let h2 = !LE && (!h1 || !h1.length);
  let h3 = V[Lc.mask_index] || V[Lc.sprite_index];
  let h4 = Bl.margin;
  let h5 = h3 ? (h3.bb ? h3.bb[2] - h3.bb[0] + 1 : h3.w) / 2 : 8;
  let h6 = h3 ? (h3.bb ? h3.bb[3] - h3.bb[1] + 1 : h3.h) / 2 : 8;
  let h7 = h5 + h4;
  let h8 = h6 + h4;
  let h9 = Lc.x + h5;
  let hX = Lc.y + h6;
  if (jx) {
    let hO = Math.hypot(Lc.x - jx[0], Lc.y - jx[1]);
    if (hO > 0.5 && hO < 12) {
      ju = ju * 0.9 + hO * 0.1;
    }
    if (je !== 0 && hO < 0.01) {
      jI.set(je, 12);
    }
    let hM = Math.abs(Lc.x - jx[0]) > 0.01;
    let hS = Math.abs(Lc.y - jx[1]) > 0.01;
    if (jf.right && !hM) {
      ja.right = 10;
    }
    if (jf.left && !hM) {
      ja.left = 10;
    }
    if (jf.down && !hS) {
      ja.down = 10;
    }
    if (jf.up && !hS) {
      ja.up = 10;
    }
    if (hM) {
      ja.left = 0;
      ja.right = 0;
    }
    if (hS) {
      ja.up = 0;
      ja.down = 0;
    }
  }
  for (let [hC, hw] of jI) {
    if (hw <= 1) {
      jI.delete(hC);
    } else {
      jI.set(hC, hw - 1);
    }
  }
  for (let hm of ["left", "right", "up", "down"]) {
    if (ja[hm] > 0) {
      ja[hm]--;
    }
  }
  jx = [Lc.x, Lc.y];
  let ht = Bl.horizon;
  let hB = Math.max(1, ju);
  let hj = ht;
  let hL = String(Lc.mask_index || Lc.sprite_index || "");
  ji.soul = hL.replace("spr_", "");
  ji.threats = h1 ? h1.length : 0;
  ji.hazards = h1 ? [] : [];
  if (!LE) {
    let hk = new Set();
    for (let hW of r.list) {
      if (!hW.destroyed && !!isThreatClass(hW) && (hk.add(hW.constructor.name), hk.size > 5)) {
        break;
      }
    }
    ji.hazards = [...hk];
  }
  if (h2 && !/heartgreen/i.test(hL)) {
    clearHeld();
    return;
  }
  let hh = (h1 || []).find(hV => hV.beam && (hV.t0 === undefined || hV.t0 <= 1) && Math.abs(h9 - hV.x) < h7 + hV.hw && Math.abs(hX - hV.y) < h8 + hV.hh);
  if (!LE && hh && !/heartgreen/i.test(hL)) {
    note("beam", "perpendicular", "standing in a blaster beam");
    let hV = -hh.bay;
    let hQ = hh.bax;
    let hY = hu => {
      let hx = [];
      if (Math.abs(hV) > 0.35) {
        hx.push(hV * hu > 0 ? "right" : "left");
      }
      if (Math.abs(hQ) > 0.35) {
        hx.push(hQ * hu > 0 ? "down" : "up");
      }
      return hx;
    };
    let hy = (h9 - hh.x) * hV + (hX - hh.y) * hQ >= 0 ? 1 : -1;
    let hF = hy;
    let hq = hY(hy);
    if (hq.length && hq.every(hu => ja[hu] > 0)) {
      hF = -hy;
      hq = hY(hF);
    }
    clearHeld();
    for (let hu of hq) {
      n.held[hu] = true;
    }
    jf.left = !!n.held.left;
    jf.right = !!n.held.right;
    jf.up = !!n.held.up;
    jf.down = !!n.held.down;
    je = 0;
    jq = 0;
    Bs.mode = "beam-escape";
    Bs.dir = [hV * hF, hQ * hF];
    return;
  }
  if (!LE && (Lc.movement === 3 || /heartgreen/i.test(hL))) {
    clearHeld();
    Bs.mode = "green-block";
    let hx = r.first("obj_spearblocker");
    if (!hx) {
      return;
    }
    let hv = Infinity;
    let hI = -1;
    for (let ha of r.list) {
      if (ha.destroyed || typeof ha.is != "function" || !ha.is("obj_blockbullet")) {
        continue;
      }
      let hf = Number(ha.truesite);
      let hi = ha.is("obj_blockbullet2") && hf >= 0 && hf <= 3 ? hf : Number(ha.site);
      if (!(hi >= 0) || !(hi <= 3)) {
        continue;
      }
      let hP = (Number(ha.speedmod) || 1) * 8;
      let hA = (Math.abs(ha.x - hx.x) + Math.abs(ha.y - hx.y) - 30) / (hP || 8);
      if (hA < hv) {
        hv = hA;
        hI = hi;
      }
    }
    if (hI === 0) {
      n.held.left = true;
    } else if (hI === 1) {
      n.held.right = true;
    } else if (hI === 2) {
      n.held.down = true;
    } else if (hI === 3) {
      n.held.up = true;
    }
    return;
  }
  let hg = LE ? null : r.first("obj_purpleheart");
  if (hg) {
    clearHeld();
    Bs.mode = "purple-rails";
    let hz = Math.max(1, hg.yamt || 3);
    let hH = hg.yspace || 40;
    let hG = hg.yoff || 0;
    let hD = hg.yzero || 0;
    let hR = gX => hD + (gX - 1) * hH + hG;
    let hU = Math.max(1, Math.min(hz, hg.yno || 1));
    let hE = hg.x;
    let g0 = hg.y;
    let g1 = hg.xmid === undefined ? hE : hg.xmid;
    let g2 = hg.xlen === undefined ? 100 : hg.xlen;
    let g3 = (gX, gB) => {
      if (gX.cls !== "obj_donutbullet" || Math.abs(gX.vy) < 0.5 || Math.abs(gX.vy) > 8 || Math.abs(gX.vx) < 0.05) {
        return gX.y;
      }
      let gj = Math.max(0, (gB - gX.x) * Math.sign(gX.vx) / Math.abs(gX.vx));
      let gL = gX.y + gX.vy * gj;
      let gh = hR(1) - 10;
      let gg = hR(hz) + 10;
      if (gg <= gh) {
        return gL;
      }
      for (let gN = 0; gN < 8 && (gL < gh || gL > gg); gN++) {
        if (gL < gh) {
          gL = gh * 2 - gL;
        }
        if (gL > gg) {
          gL = gg * 2 - gL;
        }
      }
      return gL;
    };
    let g4 = (gX, gB) => {
      let gj = hR(gX);
      let gL = 999;
      for (let gh of h1 || []) {
        if (Math.abs(g3(gh, gB) - gj) > Math.max(hH / 2, (gh.hh || 8) + 10)) {
          continue;
        }
        let gg = gB - gh.x;
        let gN = (gh.hw || 8) + 10;
        if (Math.abs(gg) <= gN) {
          return 0;
        }
        if (Math.abs(gh.vx) < 0.05 || gg * gh.vx <= 0) {
          continue;
        }
        let gd = (Math.abs(gg) - gN) / Math.abs(gh.vx);
        if (gd < gL) {
          gL = gd;
        }
      }
      return gL;
    };
    let g5 = r.first("obj_hideouscupcake");
    let g6 = g4(hU, hE);
    if (g5 && !hg.moving) {
      note("web", "climb", "the pet is rising");
      if (hU > 1 && g4(hU - 1, hE) > 6 || hU > 1 && g6 < 10) {
        pulseDir("up");
      }
    }
    if (g5 && hU > 1 && g4(hU - 1, hE) <= 6) {
      let gX = null;
      let gB = {
        "-1": true,
        1: true
      };
      for (let gj = 4; gj <= g2 * 2 && gX === null; gj += 4) {
        for (let gL of [-1, 1]) {
          if (!gB[gL]) {
            continue;
          }
          let gh = hE + gL * gj;
          if (gh < g1 - g2 || gh > g1 + g2) {
            gB[gL] = false;
            continue;
          }
          if (g4(hU, gh) <= gj / 4 + 1) {
            gB[gL] = false;
            continue;
          }
          if (g4(hU - 1, gh) > 6) {
            gX = gh;
            break;
          }
        }
      }
      if (gX !== null) {
        if (gX < hE) {
          n.held.left = true;
        } else {
          n.held.right = true;
        }
        note("web", gX < hE ? "slide left to climb" : "slide right to climb", "the strand above is blocked here");
        return;
      }
    }
    if (!g5) {
      if (!hg.moving && g6 < 26) {
        let gg = (gZ, gK) => {
          let gl = hR(gZ);
          let gp = [];
          for (let gO of h1 || []) {
            if (Math.abs(g3(gO, gK) - gl) > Math.max(hH / 2, (gO.hh || 8) + 10)) {
              continue;
            }
            let gM = (gO.hw || 8) + 10;
            if (Math.abs(gO.vx) < 0.05) {
              if (Math.abs(gK - gO.x) <= gM) {
                gp.push([0, 999]);
              }
              continue;
            }
            let gS = (gK - gO.x) * Math.sign(gO.vx);
            let gC = (gS + gM) / Math.abs(gO.vx);
            if (!(gC < 0)) {
              gp.push([Math.max(0, (gS - gM) / Math.abs(gO.vx)), gC]);
            }
          }
          return gp;
        };
        let gN = (gZ, gK, gl) => {
          let gp = 999;
          for (let [gO, gM] of gg(gZ, gK)) {
            if (gl >= gO - 1 && gl <= gM + 1) {
              return -1;
            }
            if (gO > gl && gO - gl < gp) {
              gp = gO - gl;
            }
          }
          return gp;
        };
        let gd = hU;
        let gb = g6;
        for (let gZ = 1; gZ <= hz; gZ++) {
          if (gZ === hU) {
            continue;
          }
          let gK = gZ < hU ? -1 : 1;
          let gl = true;
          for (let gO = hU + gK; gO !== gZ && gl; gO += gK) {
            let gM = Math.abs(gO - hU);
            for (let [gS, gC] of gg(gO, hE)) {
              if (gM * 3 + 1.5 >= gS - 0.5 && gM * 3 - 1.5 <= gC + 0.5) {
                gl = false;
                break;
              }
            }
          }
          if (!gl) {
            continue;
          }
          let gp = gN(gZ, hE, Math.abs(gZ - hU) * 3);
          if (gp > gb + 4) {
            gd = gZ;
            gb = gp;
          }
        }
        if (gd < hU) {
          pulseDir("up");
        } else if (gd > hU) {
          pulseDir("down");
        }
      }
    }
    let g7 = 4;
    let g8 = 0;
    let g9 = -1000000000;
    for (let gw of [-g7, 0, g7]) {
      let gm = Math.max(g1 - g2, Math.min(g1 + g2, hE + gw));
      if (gw !== 0 && gm === hE) {
        continue;
      }
      let gk = Math.min(g4(hU, gm), 60) * 10 - Math.abs(gm - g1) * 0.02 - (gw === 0 ? 0 : 0.5);
      if (gk > g9) {
        g9 = gk;
        g8 = gw;
      }
    }
    if (g8 < 0) {
      n.held.left = true;
    } else if (g8 > 0) {
      n.held.right = true;
    }
    if (!ji.branch || ji.branch !== "web") {
      note("web", g8 < 0 ? "slide left" : g8 > 0 ? "slide right" : "hold the strand", "riding a web strand");
    }
    return;
  }
  let hN = /heartblue/i.test(hL) || C.movement >= 11 && C.movement <= 13 || Math.abs(Lc.gravity || 0) > 0.001;
  if (!LE && hN) {
    Bs.mode = "blue-platform";
    let gW = Math.max(ht, 45);
    let gV = h0 ? h0[3] : 480;
    let gQ = Lc.jumpstage !== undefined ? Lc.jumpstage === 1 : hX + h8 >= gV - 3;
    let gY = 6;
    let gy = [];
    for (let gv of r.list) {
      if (gv.destroyed || !gv.is || !gv.is("obj_boneplat")) {
        continue;
      }
      let gI = gv.len === undefined ? 50 : gv.len;
      gy.push({
        l: gv.x - gI + 2,
        r: gv.x + gI - 2,
        top: gv.y,
        land: gv.y - 16
      });
    }
    let gF = gQ && Math.abs(Lc.vspeed || 0) < 0.001;
    let gq = !gQ && (Lc.vspeed || 0) <= -1;
    let gu = null;
    let gx = -Infinity;
    for (let ga of [-1, 0, 1]) {
      for (let gf of gF || gq ? [0, 1] : [0]) {
        let gi = hX;
        let gP = gF && gf ? -gY : Lc.vspeed || 0;
        let gA = h9;
        let gz = gW;
        for (let gG = 1; gG <= gW; gG++) {
          if (!gf && gP <= -1) {
            gP = -1;
          }
          gP += utGravity(gP);
          gi += gP;
          gA += ga * hB;
          if (gi + h8 > gV) {
            gi = gV - h8;
            gP = 0;
          }
          if (gP >= 0 && gy.length) {
            let go = gi - gP - h8;
            for (let gJ = 0; gJ < gy.length; gJ++) {
              let gc = gy[gJ];
              if (!(gA < gc.l - h7) && !(gA > gc.r + h7) && go <= gc.top - 11 && gi - h8 >= gc.land - 0.5) {
                gi = gc.land + h8;
                gP = 0;
                break;
              }
            }
          }
          if (h0) {
            gA = Math.max(h0[0] + h7, Math.min(h0[2] - h7, gA));
          }
          let gD = false;
          for (let gT = 0; gT < h1.length; gT++) {
            let gR = h1[gT];
            if (gR.t0 !== undefined && gG < gR.t0 || gR.ttl !== undefined && gG > gR.ttl) {
              continue;
            }
            let gU = gR.path ? gR.path(gG) : null;
            let gE = gU ? gU[0] : gR.x + gR.vx * gG + (gR.ax || 0) * 0.5 * gG * gG;
            let N0 = gU ? gU[1] : gR.y + gR.vy * gG + (gR.ay || 0) * 0.5 * gG * gG;
            if (Math.abs(gA - gE) < h7 + gR.hw && Math.abs(gi - N0) < h8 + gR.hh) {
              gD = true;
              break;
            }
          }
          if (gD) {
            gz = gG - 1;
            break;
          }
        }
        let gH = gz * 2;
        if (gz >= gW && ga === 0 && !gf) {
          gH += 1;
        }
        if (gH > gx) {
          gx = gH;
          gu = {
            mx: ga,
            jump: gf
          };
        }
      }
    }
    clearHeld();
    n.held.b1 = false;
    n.pressed.b1 = false;
    Bs.plan = gu;
    Bs.score = gx;
    Bs.dir = gu ? [gu.mx, gu.jump ? -1 : 0] : null;
    if (gu) {
      let N1 = Lc.movement;
      let N2 = N1 === 11 || N1 === 12 || N1 === 13;
      let N3 = N1 === 11 ? "left" : N1 === 12 ? "down" : N1 === 13 ? "right" : "up";
      if (N2) {
        if (N1 === 12) {
          if (gu.mx < 0) {
            n.held.left = true;
          }
          if (gu.mx > 0) {
            n.held.right = true;
          }
        } else {
          if (gu.mx < 0) {
            n.held.up = true;
          }
          if (gu.mx > 0) {
            n.held.down = true;
          }
        }
      } else {
        if (gu.mx < 0) {
          n.held.left = true;
        }
        if (gu.mx > 0) {
          n.held.right = true;
        }
      }
      if (gu.jump) {
        n.held[N3] = true;
      }
      note("gravity", gu.jump ? "jump" : gu.mx < 0 ? "run left" : gu.mx > 0 ? "run right" : "hold ground", gu.jump ? "clearing it" : "on the floor");
    }
    return;
  }
  let hd = 0;
  let hb = -Infinity;
  for (let N4 = 0; N4 < BK.length; N4++) {
    let N5 = BK[N4][0];
    let N6 = BK[N4][1];
    if (LE && N4 !== 0 && N4 % 2 === 0) {
      continue;
    }
    if (LE) {
      let Nj = Bl.gsteps;
      let NL = gridClearance(LJ, LR, LU, LT, h9 + N5 * hB * Nj, hX + N6 * hB * Nj);
      if (N4 === je) {
        NL += Bl.gkeep;
      }
      if (N4 === 0) {
        NL += Bl.gstay;
      }
      if (NL > hb) {
        hb = NL;
        hd = N4;
      }
      continue;
    }
    if (N4 !== 0 && jI.has(N4)) {
      continue;
    }
    let N7 = N5 > 0 && ja.right || N5 < 0 && ja.left ? 0 : N5;
    let N8 = N6 > 0 && ja.down || N6 < 0 && ja.up ? 0 : N6;
    if (N4 !== 0 && Math.abs(N7) < 0.3 && Math.abs(N8) < 0.3) {
      continue;
    }
    if (h0 && N4 !== 0) {
      let Nh = Math.max(h0[0] + h7, Math.min(h0[2] - h7, h9 + N5 * hB));
      let Ng = Math.max(h0[1] + h8, Math.min(h0[3] - h8, hX + N6 * hB));
      if (Math.abs(Nh - h9) < 0.01 && Math.abs(Ng - hX) < 0.01) {
        continue;
      }
    }
    let N9 = hj;
    let NX = Infinity;
    for (let NN = 1; NN <= hj; NN++) {
      let Nd = h9 + N7 * hB * NN;
      let Nb = hX + N8 * hB * NN;
      if (h0) {
        Nd = Math.max(h0[0] + h7, Math.min(h0[2] - h7, Nd));
        Nb = Math.max(h0[1] + h8, Math.min(h0[3] - h8, Nb));
      }
      let NZ = false;
      for (let NK = 0; NK < h1.length; NK++) {
        let Nl = h1[NK];
        if (Nl.t0 !== undefined && NN < Nl.t0 || Nl.ttl !== undefined && NN > Nl.ttl || Nl.blueOnly && N4 === 0) {
          continue;
        }
        let Np = Nl.path ? Nl.path(NN) : null;
        let NO = Np ? Np[0] : Nl.x + Nl.vx * NN;
        let NM = Np ? Np[1] : Nl.y + Nl.vy * NN;
        let NS = Math.abs(Nd - NO) - (h7 + Nl.hw);
        let NC = Math.abs(Nb - NM) - (h8 + Nl.hh);
        let Nw = Math.max(NS, NC);
        if (Nw < NX) {
          NX = Nw;
        }
        if (NS < 0 && NC < 0) {
          NZ = true;
          break;
        }
      }
      if (NZ) {
        N9 = NN - 1;
        break;
      }
    }
    if (!Number.isFinite(NX)) {
      NX = 200;
    }
    let NB = N9 * 2 + Math.max(-40, Math.min(200, NX)) * Bl.room;
    if (N9 >= hj) {
      if (N4 === 0) {
        NB += Bl.stay;
      }
      if (N4 === je && N4 !== 0) {
        NB += Bl.keep;
      }
      let Nm = h9 + N5 * hB * hj;
      let Nk = hX + N6 * hB * hj;
      let NW = h0 ? (h0[0] + h0[2]) / 2 : 320;
      let NV = h0 ? (h0[1] + h0[3]) / 2 : 240;
      let Ne = h0 ? Math.max(1, (h0[2] - h0[0]) / 2) : 160;
      let NQ = h0 ? Math.max(1, (h0[3] - h0[1]) / 2) : 120;
      NB += (1 - Math.min(1, Math.hypot((Nm - NW) / Ne, (Nk - NV) / NQ))) * Bl.centre;
    }
    if (NB > hb) {
      hb = NB;
      hd = N4;
    }
  }
  if (jq > 0 && !LE) {
    let NY = BK[je];
    let Ny = hj;
    for (let NF = 1; NF <= hj; NF++) {
      let Nq = h9 + NY[0] * hB * NF;
      let Nu = hX + NY[1] * hB * NF;
      if (h0) {
        Nq = Math.max(h0[0] + h7, Math.min(h0[2] - h7, Nq));
        Nu = Math.max(h0[1] + h8, Math.min(h0[3] - h8, Nu));
      }
      let Nx = false;
      for (let Nv = 0; Nv < h1.length; Nv++) {
        let NI = h1[Nv];
        if (NI.t0 !== undefined && NF < NI.t0 || NI.ttl !== undefined && NF > NI.ttl || NI.blueOnly && je === 0) {
          continue;
        }
        let Na = NI.path ? NI.path(NF) : null;
        let Nf = Na ? Na[0] : NI.x + NI.vx * NF;
        let Ni = Na ? Na[1] : NI.y + NI.vy * NF;
        if (Math.abs(Nq - Nf) < h7 + NI.hw && Math.abs(Nu - Ni) < h8 + NI.hh) {
          Nx = true;
          break;
        }
      }
      if (Nx) {
        Ny = NF - 1;
        break;
      }
    }
    if (Ny >= hj) {
      hd = je;
      jq--;
    } else {
      jq = 0;
    }
  }
  if (hd !== je) {
    jq = Bl.commit;
  }
  je = hd;
  Bs.best = hd;
  Bs.dir = BK[hd];
  Bs.score = hb;
  Bs.commit = jq;
  Bs.blocked = [...jI.keys()];
  clearHeld();
  let [hZ, hK] = BK[hd];
  note("dodge", hd === 0 ? "hold position" : Math.abs(hK) < 0.3 ? hZ < 0 ? "left" : "right" : Math.abs(hZ) < 0.3 ? hK < 0 ? "up" : "down" : (hK < 0 ? "up" : "down") + "-" + (hZ < 0 ? "left" : "right"), hd === 0 ? "this square is clear" : "threading the gap");
  if (hZ < -0.3) {
    n.held.left = true;
  }
  if (hZ > 0.3) {
    n.held.right = true;
  }
  if (hK < -0.3) {
    n.held.up = true;
  }
  if (hK > 0.3) {
    n.held.down = true;
  }
  jf.left = !!n.held.left;
  jf.right = !!n.held.right;
  jf.up = !!n.held.up;
  jf.down = !!n.held.down;
}
i(autoplayStep, "autoplayStep");
function autoplayStateDigest() {
  let X = B => Number.isFinite(B) ? Math.round(B * 100) / 100 : String(B);
  return "ap calls " + jv + " dir " + je + " commit " + jq + " obs " + X(ju) + " last " + (jx ? X(jx[0]) + "," + X(jx[1]) : "-") + " bk " + JSON.stringify(ja) + " hl " + JSON.stringify(jf) + " bd " + jI.size + " ui " + L8 + " menu " + (Lh ? 1 : 0) + " syn " + Ls.b1 + (Ls.zHeld || Ls.xHeld || Ls.edges ? " z " + (Ls.zHeld ? 1 : 0) + (Ls.xHeld ? 1 : 0) + Ls.edges : "") + " fire " + Ly + " box " + Lq + " " + ch4Digest() + " " + ch5Digest();
}
i(autoplayStateDigest, "autoplayStateDigest");
function saveAutoplayState() {
  return {
    lastDir: je,
    commitLeft: jq,
    obsSpeed: ju,
    lastPos: jx ? jx.slice() : null,
    stepCalls: jv,
    blockedDir: [...jI],
    blockedKey: {
      ...ja
    },
    heldLast: {
      ...jf
    },
    uiTick: L8,
    menuPlan: Lh ? {
      frames: Lh.frames.slice(),
      i: Lh.i
    } : null,
    syn: {
      ...Ls
    },
    fireClock: Ly,
    boxClock: Lq,
    lastPunch: Lx,
    boxAttack: {
      last: LI.last,
      windup: {
        ...LI.windup
      }
    },
    ch4: ch4SaveState(),
    ch5: ch5SaveState()
  };
}
i(saveAutoplayState, "saveAutoplayState");
function loadAutoplayState(X) {
  if (X) {
    je = X.lastDir;
    jq = X.commitLeft;
    ju = X.obsSpeed;
    jx = X.lastPos ? X.lastPos.slice() : null;
    jv = X.stepCalls;
    jI.clear();
    for (let [B, LJ] of X.blockedDir) {
      jI.set(B, LJ);
    }
    Object.assign(ja, X.blockedKey);
    Object.assign(jf, X.heldLast);
    L8 = X.uiTick;
    Lh = X.menuPlan ? {
      frames: X.menuPlan.frames.slice(),
      i: X.menuPlan.i
    } : null;
    Ls.b1 = X.syn.b1;
    Ls.pulse = X.syn.pulse;
    Ls.zHeld = !!X.syn.zHeld;
    Ls.zPrev = !!X.syn.zPrev;
    Ls.xHeld = !!X.syn.xHeld;
    Ls.xPrev = !!X.syn.xPrev;
    Ls.edges = X.syn.edges || "";
    Ly = X.fireClock;
    Lq = X.boxClock;
    Lx = X.lastPunch;
    LI.last = X.boxAttack.last;
    LI.windup = {
      ...X.boxAttack.windup
    };
    if (X.ch4) {
      ch4LoadState(X.ch4);
    } else {
      ch4ResetState();
    }
    if (X.ch5) {
      ch5LoadState(X.ch5);
    } else {
      ch5ResetState();
    }
  }
}
i(loadAutoplayState, "loadAutoplayState");
function resetAutoplayState() {
  je = 0;
  jq = 0;
  ju = 3;
  jx = null;
  jv = 0;
  jI.clear();
  for (let X of ["left", "right", "up", "down"]) {
    ja[X] = 0;
    jf[X] = false;
  }
  L8 = 0;
  Lh = null;
  Ls.b1 = false;
  Ls.pulse = null;
  Ls.zHeld = false;
  Ls.zPrev = false;
  Ls.xHeld = false;
  Ls.xPrev = false;
  Ls.edges = "";
  LM = "";
  Ly = 0;
  Lq = 0;
  Lx = "b2";
  LI.last = -1;
  LI.windup = {};
  ch4ResetState();
  ch5ResetState();
}
i(resetAutoplayState, "resetAutoplayState");
export { z as a, ch4GreenSoul as b, ch4Goal as c, ch4HitCost as d, ch4FineGrid as e, ch4Pm as f, ch5Goals as g, ch5Clamp as h, ch5SoulKind as i, fakeChoice as j, heartGoal as k, pinnedNullGfx as l, setRolloutBudget as m, rolloutSoul as n, threatCount as o, canSee as p, Bs as q, Bl as r, setParams as s, loadAutoplayTune as t, autoplayPlan as u, autoplayOn as v, toggleAutoplay as w, autoplayBounds as x, debugThreats as y, hazardShapes as z, autoplayUI as A, applyPlanKeys as B, lastPlanKeys as C, tokenSynthetic as D, Lv as E, autoplayStep as F, autoplayStateDigest as G, saveAutoplayState as H, loadAutoplayState as I, resetAutoplayState as J };
