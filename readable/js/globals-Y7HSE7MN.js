var P = function () {
  ;
  var eP = true;
  return function (ex, eV) {
    var eY = eP ? function () {
      if (eV) {
        var er = eV.apply(ex, arguments);
        eV = null;
        return er;
      }
    } : function () {};
    eP = false;
    return eY;
  };
}();
import { A as scr_revive, B as scr_armorcheck_equipped, C as scr_armorcheck_equipped_party, D as scr_mercyadd, E as scr_heal, F as scr_healall, G as Hooks, H as scr_randomtarget, I as scr_targetall, J as scr_damage, K as scr_damage_all, L as dmgTypeOf, M as scr_damage_enemy, N as scr_damage_check, b as e7, c as resetGlobalsForFight, d as scr_gamestart, e as scr_controls_default, f as scr_widen_party, g as charBase, h as scr_charslot, i as scr_havechar, j as krisSlot, k as ROSTER_SIZE, l as PARTY, m as scr_resize_party, n as WEAPONS, o as ARMORS, p as ITEMS, q as WEAPON_CHARS, r as ARMOR_CHARS, s as itemEffect, t as scr_iteminfo_all, u as CHAPTER_SPELLINFO, v as scr_spellinfo, w as scr_spellinfo_all, x as scr_tensionheal, y as scr_monsterpop, z as scr_dead } from "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import "./c-PIEPTJTC.js";
export { ARMORS, ARMOR_CHARS, CHAPTER_SPELLINFO, e7 as G, Hooks, ITEMS, PARTY, ROSTER_SIZE, WEAPONS, WEAPON_CHARS, charBase, dmgTypeOf, itemEffect, krisSlot, resetGlobalsForFight, scr_armorcheck_equipped, scr_armorcheck_equipped_party, scr_charslot, scr_controls_default, scr_damage, scr_damage_all, scr_damage_check, scr_damage_enemy, scr_dead, scr_gamestart, scr_havechar, scr_heal, scr_healall, scr_iteminfo_all, scr_mercyadd, scr_monsterpop, scr_randomtarget, scr_resize_party, scr_revive, scr_spellinfo, scr_spellinfo_all, scr_targetall, scr_tensionheal, scr_widen_party };
