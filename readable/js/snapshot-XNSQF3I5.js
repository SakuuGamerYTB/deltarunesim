var P = function () {
  ;
  var H = true;
  return function (w, g) {
    var N = H ? function () {
      if (g) {
        var J = g.apply(w, arguments);
        g = null;
        return J;
      }
    } : function () {};
    H = false;
    return N;
  };
}();
import { a as snapshot, b as restore, c as nullGfx } from "./c-VD4WD5M6.js";
import "./c-74XQOPMX.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import "./c-PIEPTJTC.js";
export { nullGfx, restore, snapshot };
