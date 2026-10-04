var Y = function () {
  ;
  var X = true;
  return function (z, w) {
    var E = X ? function () {
      if (w) {
        var t = w.apply(z, arguments);
        w = null;
        return t;
      }
    } : function () {};
    X = false;
    return E;
  };
}();
import { a as karmaReset, b as karmaAmount, c as KARMA_DISABLED, d as karmaStep, e as karmaDraw } from "./c-3FE7QPYV.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import "./c-PIEPTJTC.js";
export { KARMA_DISABLED, karmaAmount, karmaDraw, karmaReset, karmaStep };
