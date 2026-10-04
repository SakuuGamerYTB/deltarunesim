const G = function () {
  ;
  let X = true;
  return function (J, e) {
    const U = X ? function () {
      if (e) {
        const S = e.apply(J, arguments);
        e = null;
        return S;
      }
    } : function () {};
    X = false;
    return U;
  };
}();
import { b as Z } from "./c-YJJCI5ES.js";
import { fb as Y } from "./c-FMIAGHDE.js";
import { a as P, l } from "./c-PIEPTJTC.js";
l();
var j = ["obj_sansbullet_parent", "obj_gasterblaster", "blt_sizebone", "obj_bonestab", "obj_sans_bonebul", "obj_menubone", "obj_menubone_bottom"];
var W = 0.6;
var v = 9;
var f = 12;
var r = null;
var D = 0;
function karmaReset() {
  Z.karma = 0;
  r = null;
  D = 0;
}
P(karmaReset, "karmaReset");
function karmaAmount() {
  return Z.karma || 0;
}
P(karmaAmount, "karmaAmount");
function sourcePresent() {
  for (let X of Y.list) {
    if (X.destroyed) {
      continue;
    }
    let J = X.constructor.name;
    if (j.includes(J) || typeof X.is == "function" && X.is("obj_sansbullet_parent")) {
      return true;
    }
  }
  return false;
}
P(sourcePresent, "sourcePresent");
var I = true;
function karmaStep() {
  if (I) {
    Z.karma = 0;
    return;
  }
  if (typeof Z.hp == "number") {
    if (Z.karma === undefined) {
      Z.karma = 0;
    }
    if (r !== null && Z.hp < r) {
      let X = r - Z.hp;
      if (X > 0 && sourcePresent()) {
        let J = Math.min(f - Z.karma, Math.floor(X * W));
        if (J > 0) {
          Z.hp += J;
          Z.karma += J;
        }
      }
    }
    if (Z.karma > 0) {
      D++;
      if (D >= v) {
        D = 0;
        if (Z.hp > 1) {
          Z.hp -= 1;
          Z.karma -= 1;
        } else {
          Z.karma = Math.max(0, Z.karma - 1);
        }
      }
    } else {
      D = 0;
    }
    r = Z.hp;
  }
}
P(karmaStep, "karmaStep");
function karmaDraw(X) {
  if (!Z.karma || Z.karma <= 0 || typeof Z.hp != "number") {
    return;
  }
  let J = Y.first("obj_hpname");
  if (!J) {
    return;
  }
  let U = X.ctx;
  let S = Z.maxhp || 20;
  let B = 1.2;
  let V = J.x + 5;
  let Q = J.y;
  U.save();
  U.globalAlpha = 0.85;
  U.fillStyle = "#7b2fbe";
  U.fillRect(Math.round(V + (Z.hp - Z.karma) * B), Math.round(Q), Math.max(1, Math.round(Z.karma * B)), 16);
  U.restore();
  X.draw_set_font("fnt_main");
  X.draw_text(Math.round(V + S * B + 46), Math.round(Q), "KR " + Z.karma, "#b47ae0");
}
P(karmaDraw, "karmaDraw");
export { karmaReset as a, karmaAmount as b, I as c, karmaStep as d, karmaDraw as e };
