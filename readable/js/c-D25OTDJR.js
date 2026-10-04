var G = function () {
  ;
  var s = true;
  return function (q, T) {
    var i = s ? function () {
      if (T) {
        var m = T.apply(q, arguments);
        T = null;
        return m;
      }
    } : function () {};
    s = false;
    return i;
  };
}();
import { a as setupDummyStats, b as obj_dummyenemy } from "./c-56YGV4HH.js";
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
export { obj_dummyenemy, setupDummyStats };
