var S = function () {
  ;
  var iq = true;
  return function (iS, iM) {
    var iP = iq ? function () {
      if (iM) {
        var iW = iM.apply(iS, arguments);
        iM = null;
        return iW;
      }
    } : function () {};
    iq = false;
    return iP;
  };
}();
import "./c-Y6LEVRWV.js";
import { a as scr_bullet_inherit } from "./c-ZF4DELGJ.js";
import { A as scr_nexthero, B as scr_prevhero, C as scr_endturn, D as scr_attackphase, E as scr_mnendturn, F as scr_wincombat, G as scr_endcombat, H as scr_spellconsumeb, J as scr_spelltext, K as scr_healitemspell, L as scr_healallitemspell, M as scr_spell, x as scr_retarget, y as scr_charcan } from "./c-SEM2A64W.js";
import "./c-D6ZXNKTF.js";
import { e as scr_battletext, f as scr_battletext_default, h as scr_enemyblcon } from "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import { d as scr_dark_marker, n as scr_moveheart } from "./c-EUQCKUJR.js";
import { A as scr_revive, D as scr_mercyadd, E as scr_heal, F as scr_healall, H as scr_randomtarget, I as scr_targetall, J as scr_damage, K as scr_damage_all, M as scr_damage_enemy, N as scr_damage_check, t as scr_iteminfo_all, w as scr_spellinfo_all, x as scr_tensionheal, y as scr_monsterpop, z as scr_dead } from "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import "./c-PIEPTJTC.js";
export { scr_attackphase, scr_battletext, scr_battletext_default, scr_bullet_inherit, scr_charcan, scr_damage, scr_damage_all, scr_damage_check, scr_damage_enemy, scr_dark_marker, scr_dead, scr_endcombat, scr_endturn, scr_enemyblcon, scr_heal, scr_healall, scr_healallitemspell, scr_healitemspell, scr_iteminfo_all, scr_mercyadd, scr_mnendturn, scr_monsterpop, scr_moveheart, scr_nexthero, scr_prevhero, scr_randomtarget, scr_retarget, scr_revive, scr_spell, scr_spellconsumeb, scr_spellinfo_all, scr_spelltext, scr_targetall, scr_tensionheal, scr_wincombat };
