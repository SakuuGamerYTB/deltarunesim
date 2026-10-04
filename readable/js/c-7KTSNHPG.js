var q = function () {
  ;
  var D = true;
  return function (p, w) {
    var T = D ? function () {
      if (w) {
        var J = w.apply(p, arguments);
        w = null;
        return J;
      }
    } : function () {};
    D = false;
    return T;
  };
}();
import { a as SPRITES, b as SOUNDS, c as setupStats, d as setupRangerStats, e as obj_spareanim, f as obj_defeatanim, g as obj_diamondenemy, h as obj_rudinnranger, i as obj_dknight_slasher, j as FIGHTS } from "./c-FBA3VTQ3.js";
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
export { FIGHTS, SOUNDS, SPRITES, obj_defeatanim, obj_diamondenemy, obj_dknight_slasher, obj_rudinnranger, obj_spareanim, setupRangerStats, setupStats };
