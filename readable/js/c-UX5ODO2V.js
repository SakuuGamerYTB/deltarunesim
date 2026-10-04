var N = function () {
  ;
  var q = true;
  return function (u, V) {
    var Q = q ? function () {
      if (V) {
        var r = V.apply(u, arguments);
        V = null;
        return r;
      }
    } : function () {};
    q = false;
    return Q;
  };
}();
import { a as SPRITES, b as SOUNDS, c as setupStats, d as setupHathyStats, e as setupHeadHathyStats, f as obj_heartblcon, g as obj_spareanim, h as obj_defeatanim, i as obj_spinheart, j as obj_heartshaper, k as obj_heartenemy, l as obj_headhathy, m as FIGHTS } from "./c-KCLR4RP5.js";
import "./c-YST6GS7R.js";
import "./c-ZF4DELGJ.js";
import "./c-SEM2A64W.js";
import "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import "./c-PIEPTJTC.js";
export { FIGHTS, SOUNDS, SPRITES, obj_defeatanim, obj_headhathy, obj_heartblcon, obj_heartenemy, obj_heartshaper, obj_spareanim, obj_spinheart, setupHathyStats, setupHeadHathyStats, setupStats };
