var q = function () {
  ;
  var T = true;
  return function (G, V) {
    var j = T ? function () {
      if (V) {
        var Y = V.apply(G, arguments);
        V = null;
        return Y;
      }
    } : function () {};
    T = false;
    return j;
  };
}();
import { a as obj_icespell_hexagon, b as obj_icespell, c as obj_spell_snowgrave_snowflake, d as obj_spell_snowgrave, e as obj_spell_mist } from "./c-VNDJ6YIS.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import "./c-PIEPTJTC.js";
export { obj_icespell, obj_icespell_hexagon, obj_spell_mist, obj_spell_snowgrave, obj_spell_snowgrave_snowflake };
