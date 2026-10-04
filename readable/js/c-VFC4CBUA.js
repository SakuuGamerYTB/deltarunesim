var L = function () {
  ;
  var J = true;
  return function (x, B) {
    var w = J ? function () {
      if (B) {
        var r = B.apply(x, arguments);
        B = null;
        return r;
      }
    } : function () {};
    J = false;
    return w;
  };
}();
import { a as GUARD_T, b as guardHooks, c as guardReset, d as guardProgress, e as guardLog, f as guardInput, g as guardNudge, h as guardNudging, i as guardTick } from "./c-EOL7J25D.js";
import "./c-SATHSCNU.js";
import "./c-4W34X7CH.js";
import "./c-K45EDNDM.js";
import "./c-3FE7QPYV.js";
import "./c-UOADV6RY.js";
import "./c-SEM2A64W.js";
import "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import "./c-PIEPTJTC.js";
export { GUARD_T, guardHooks, guardInput, guardLog, guardNudge, guardNudging, guardProgress, guardReset, guardTick };
