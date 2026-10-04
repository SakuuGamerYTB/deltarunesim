var U = function () {
  ;
  var rw = true;
  return function (rO, rg) {
    var rG = rw ? function () {
      if (rg) {
        var rS = rg.apply(rO, arguments);
        rg = null;
        return rS;
      }
    } : function () {};
    rw = false;
    return rG;
  };
}();
import { a as scr_bullet_inherit } from "./c-ZF4DELGJ.js";
import { A as scr_nexthero, B as scr_prevhero, C as scr_endturn, D as scr_attackphase, E as scr_mnendturn, F as scr_wincombat, G as scr_endcombat, H as scr_spellconsumeb, J as scr_spelltext, K as scr_healitemspell, L as scr_healallitemspell, M as scr_spell, x as scr_retarget, y as scr_charcan } from "./c-SEM2A64W.js";
import { e as scr_battletext, f as scr_battletext_default, h as scr_enemyblcon } from "./c-PF7AREFU.js";
import { d as scr_dark_marker, n as scr_moveheart } from "./c-EUQCKUJR.js";
import { A as scr_revive, D as scr_mercyadd, E as scr_heal, F as scr_healall, H as scr_randomtarget, I as scr_targetall, J as scr_damage, K as scr_damage_all, M as scr_damage_enemy, N as scr_damage_check, t as scr_iteminfo_all, w as scr_spellinfo_all, x as scr_tensionheal, y as scr_monsterpop, z as scr_dead } from "./c-YJJCI5ES.js";
import { a as rU, c as rh, l as rE } from "./c-PIEPTJTC.js";
var rm = {};
rh(rm, {
  scr_attackphase: () => scr_attackphase,
  scr_battletext: () => scr_battletext,
  scr_battletext_default: () => scr_battletext_default,
  scr_board_marker: () => scr_board_marker,
  scr_bullet_inherit: () => scr_bullet_inherit,
  scr_charcan: () => scr_charcan,
  scr_damage: () => scr_damage,
  scr_damage_all: () => scr_damage_all,
  scr_damage_check: () => scr_damage_check,
  scr_damage_enemy: () => scr_damage_enemy,
  scr_dark_marker: () => scr_dark_marker,
  scr_dead: () => scr_dead,
  scr_endcombat: () => scr_endcombat,
  scr_endturn: () => scr_endturn,
  scr_enemyblcon: () => scr_enemyblcon,
  scr_heal: () => scr_heal,
  scr_healall: () => scr_healall,
  scr_healallitemspell: () => scr_healallitemspell,
  scr_healitemspell: () => scr_healitemspell,
  scr_iteminfo_all: () => scr_iteminfo_all,
  scr_mercyadd: () => scr_mercyadd,
  scr_mnendturn: () => scr_mnendturn,
  scr_monsterpop: () => scr_monsterpop,
  scr_moveheart: () => scr_moveheart,
  scr_nexthero: () => scr_nexthero,
  scr_plat_makeactor_fromasset: () => scr_plat_makeactor_fromasset,
  scr_prevhero: () => scr_prevhero,
  scr_randomtarget: () => scr_randomtarget,
  scr_retarget: () => scr_retarget,
  scr_revive: () => scr_revive,
  scr_roommenu_debug: () => scr_roommenu_debug,
  scr_spell: () => scr_spell,
  scr_spellconsumeb: () => scr_spellconsumeb,
  scr_spellinfo_all: () => scr_spellinfo_all,
  scr_spelltext: () => scr_spelltext,
  scr_targetall: () => scr_targetall,
  scr_tensionheal: () => scr_tensionheal,
  scr_wincombat: () => scr_wincombat
});
rE();
var scr_board_marker = rU((...rw) => {
  if (!scr_board_marker._w) {
    scr_board_marker._w = 1;
    console.warn("stub scr_board_marker", rw);
  }
}, "scr_board_marker");
var scr_plat_makeactor_fromasset = rU((...rw) => {
  if (!scr_plat_makeactor_fromasset._w) {
    scr_plat_makeactor_fromasset._w = 1;
    console.warn("stub scr_plat_makeactor_fromasset", rw);
  }
}, "scr_plat_makeactor_fromasset");
var scr_roommenu_debug = rU((...rw) => {
  if (!scr_roommenu_debug._w) {
    scr_roommenu_debug._w = 1;
    console.warn("stub scr_roommenu_debug", rw);
  }
}, "scr_roommenu_debug");
export { scr_board_marker as a, scr_plat_makeactor_fromasset as b, scr_roommenu_debug as c, rm as d };
