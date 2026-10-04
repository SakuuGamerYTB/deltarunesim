var H = function () {
  ;
  var k = true;
  return function (w, T) {
    var J = k ? function () {
      if (T) {
        var P = T.apply(w, arguments);
        T = null;
        return P;
      }
    } : function () {};
    k = false;
    return J;
  };
}();
import { a as SPRITES, b as SOUNDS, c as setupStats, d as obj_defeatanim, e as scr_defeatrun, f as obj_spareanim, g as scr_spareanim, h as obj_jigsawbullet, i as obj_jigsawryenemy, j as FIGHTS } from "./c-N4ZGLSFU.js";
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
export { FIGHTS, SOUNDS, SPRITES, obj_defeatanim, obj_jigsawbullet, obj_jigsawryenemy, obj_spareanim, scr_defeatrun, scr_spareanim, setupStats };
