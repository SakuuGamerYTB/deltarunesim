var m = function () {
  ;
  var K = true;
  return function (B, r) {
    var E = K ? function () {
      if (r) {
        var S = r.apply(B, arguments);
        r = null;
        return S;
      }
    } : function () {};
    K = false;
    return E;
  };
}();
import { a as prepareWire, b as classKey, c as encodeWorld, d as deepDump, e as registerClassModules, f as loadClassModules, g as applyWorld } from "./c-2V4NTFVZ.js";
import "./c-AWYBS4TS.js";
import "./c-PL4HTHAA.js";
import "./c-TJDIJSLU.js";
import "./c-MTKTFWX5.js";
import "./c-VD4WD5M6.js";
import "./c-74XQOPMX.js";
import "./c-D6ZXNKTF.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import "./c-PIEPTJTC.js";
export { applyWorld, classKey, deepDump, encodeWorld, loadClassModules, prepareWire, registerClassModules };
