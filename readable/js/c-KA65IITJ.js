const s = function () {
  ;
  let L = true;
  return function (v, Z) {
    const i = L ? function () {
      if (Z) {
        const U = Z.apply(v, arguments);
        Z = null;
        return U;
      }
    } : function () {};
    L = false;
    return i;
  };
}();
import { b as V, c as z, d as y } from "./c-WL43FMPI.js";
import { Ha as E } from "./c-S7IQ44WH.js";
import { b as O, c as q } from "./c-JPNN6LRY.js";
import { a as S } from "./c-VNO7ILLI.js";
import { b as w } from "./c-YJJCI5ES.js";
import { _a as I } from "./c-FMIAGHDE.js";
import { a as P, e as C, l as D } from "./c-PIEPTJTC.js";
D();
var obj_cutenemy2 = class T extends q {
  userEvent(L) {
    if (L === 12) {
      E.call(this);
      w.monsterx[this.myself] = this.x + 20;
      w.monstery[this.myself] = this.y;
      return;
    }
    return super.userEvent(L);
  }
};
P(obj_cutenemy2, "obj_cutenemy2");
C(obj_cutenemy2, "kinds", I("obj_cutenemy2", q));
var H = obj_cutenemy2;
function classFor(L) {
  return z[L] || O[L] || null;
}
P(classFor, "classFor");
function buildCutFights2() {
  let L = [];
  for (let v of V.unusedEnemyObjects || []) {
    let Z = classFor(v.object);
    let U = Z || H;
    let M = !Z;
    let R = v.why;
    if (M) {
      R += " The port has no class for it yet, so its stats, ACT list and check text run on the data-only shell.";
    }
    let X = (v.needs || []).filter(Q2 => Q2.type > 0 && classFor(Q2.object));
    let Q0 = [{
      cls: U,
      type: v.type,
      x: 500,
      y: 120,
      setup: () => {}
    }];
    let Q1 = X.map(Q2 => ({
      cls: classFor(Q2.object),
      x: 500,
      y: 120
    }));
    if (X.length) {
      R += " " + X.map(Q2 => Q2.object).join(", ") + " is put in the room with it for that reason, inert (not registered as a monster, so its own Step never runs) and invisible, purely so those reads resolve.";
    }
    L.push({
      id: "ch2cut_" + v.object.replace(/^(obj|o)_/, ""),
      name: v.name + " (" + v.object + ")",
      chapter: 2,
      area: "CUT CONTENT",
      cut: true,
      generated: true,
      desc: v.name + "#" + v.object + "#" + y(R),
      party: w.char && w.char.length ? w.char.slice() : [1, 2, 3],
      heromakex: [80, 80, 80],
      heromakey: [50, 130, 210],
      cutObject: true,
      monsters: Q0,
      bystanders: Q1,
      battlemsg: "* " + v.name + " blocks the way!",
      encounterno: 0,
      music: "battle",
      background: S(null)
    });
  }
  for (let Q2 of V.unusedMonsterTypes || []) {
    if (!Q2.carriedForward) {
      L.push({
        id: "ch2cut" + Q2.type,
        name: Q2.name,
        chapter: 2,
        area: "CUT CONTENT",
        cut: true,
        generated: true,
        desc: Q2.name + "#Chapter 2 monstertype " + Q2.type + ".#" + y(Q2.why),
        party: w.char && w.char.length ? w.char.slice() : [1, 2, 3],
        heromakex: [80, 80, 80],
        heromakey: [50, 130, 210],
        monsters: [{
          cls: H,
          type: Q2.type,
          x: 500,
          y: 160,
          setup: () => {}
        }],
        battlemsg: "* " + Q2.name + " blocks the way!",
        encounterno: 0,
        music: "battle",
        background: S(null)
      });
    }
  }
  return L;
}
P(buildCutFights2, "buildCutFights2");
var N = V.unusedAttackDetail || [];
var Y = V;
export { H as a, buildCutFights2 as b, N as c, Y as d };
