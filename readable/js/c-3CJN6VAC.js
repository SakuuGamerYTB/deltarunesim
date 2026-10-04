var M = function () {
  ;
  var N = true;
  return function (q, x) {
    var D = N ? function () {
      if (x) {
        var z = x.apply(q, arguments);
        x = null;
        return z;
      }
    } : function () {};
    N = false;
    return D;
  };
}();
import { a as SPRITES, b as SOUNDS, c as setupStats, d as obj_animation, e as obj_spareanim, f as obj_defeatanim, g as obj_rabbitbullet, h as obj_carrotthrower, i as obj_rabbick_enemy, j as obj_rabbick_bush, k as FIGHTS } from "./c-5WLJWN67.js";
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
export { FIGHTS, SOUNDS, SPRITES, obj_animation, obj_carrotthrower, obj_defeatanim, obj_rabbick_bush, obj_rabbick_enemy, obj_rabbitbullet, obj_spareanim, setupStats };
