var P = function () {
  ;
  var gE = true;
  return function (gq, gn) {
    var gY = gE ? function () {
      if (gn) {
        var gT = gn.apply(gq, arguments);
        gn = null;
        return gT;
      }
    } : function () {};
    gE = false;
    return gY;
  };
}();
import { A as scr_nexthero, B as scr_prevhero, C as scr_endturn, D as scr_attackphase, E as scr_mnendturn, F as scr_wincombat, G as scr_endcombat, H as scr_spellconsumeb, I as scr_itemconsumeb, J as scr_spelltext, K as scr_healitemspell, L as scr_healallitemspell, M as scr_spell, N as obj_battlecontroller, f as obj_dmgwriter, g as obj_basicattack, h as obj_burstbolt, i as obj_healanim, j as obj_tensionbar, k as obj_heroparent, l as obj_herokris, m as obj_herosusie, n as obj_heroralsei, o as obj_heronoelle, p as obj_monsterparent, q as minigameOnScreen, r as controllerHeld, s as obj_attackpress, t as obj_spellphase, u as obj_rudebuster_anim, v as obj_rudebuster_bolt, w as obj_pacifyspell, x as scr_retarget, y as scr_charcan, z as DONE_TURN } from "./c-SEM2A64W.js";
import "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import "./c-PIEPTJTC.js";
export { DONE_TURN, controllerHeld, minigameOnScreen, obj_attackpress, obj_basicattack, obj_battlecontroller, obj_burstbolt, obj_dmgwriter, obj_healanim, obj_herokris, obj_heronoelle, obj_heroparent, obj_heroralsei, obj_herosusie, obj_monsterparent, obj_pacifyspell, obj_rudebuster_anim, obj_rudebuster_bolt, obj_spellphase, obj_tensionbar, scr_attackphase, scr_charcan, scr_endcombat, scr_endturn, scr_healallitemspell, scr_healitemspell, scr_itemconsumeb, scr_mnendturn, scr_nexthero, scr_prevhero, scr_retarget, scr_spell, scr_spellconsumeb, scr_spelltext, scr_wincombat };
