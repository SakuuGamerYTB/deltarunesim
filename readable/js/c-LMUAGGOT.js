var B = function () {
  ;
  var y = true;
  return function (K, R) {
    var v = y ? function () {
      if (R) {
        var S = R.apply(K, arguments);
        R = null;
        return S;
      }
    } : function () {};
    y = false;
    return v;
  };
}();
import { c as obj_jokerbg_triangle_real, d as obj_roombg, e as obj_roomtiles, f as obj_roomlayer, g as obj_battleback, h as obj_parallaxer_mansion } from "./c-Y4HOFVS7.js";
import "./c-D6ZXNKTF.js";
import "./c-I2ROP6YV.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import "./c-PIEPTJTC.js";
export { obj_battleback, obj_jokerbg_triangle_real, obj_parallaxer_mansion, obj_roombg, obj_roomlayer, obj_roomtiles };
