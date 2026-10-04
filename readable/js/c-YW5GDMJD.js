var R = function () {
  ;
  var A = true;
  return function (t, D) {
    var P = A ? function () {
      if (D) {
        var K = D.apply(t, arguments);
        D = null;
        return K;
      }
    } : function () {};
    A = false;
    return P;
  };
}();
import { b as GROUP_NAMES, c as CODE, d as CodeStatus, e as groupsOf, f as groupReady, g as fightCodeReady, h as allFightCodeReady, i as codeVersion, j as onGroupCode, k as onFightCode, l as loadGroup, m as loadFightCode, n as startUndertaleFight, o as utCode, p as loadAllFightCode, q as prefetchFightCode, r as loadGroupSync, s as captureState, t as withCapturedState } from "./c-AWYBS4TS.js";
import "./c-PIEPTJTC.js";
export { CODE, CodeStatus, GROUP_NAMES, allFightCodeReady, captureState, codeVersion, fightCodeReady, groupReady, groupsOf, loadAllFightCode, loadFightCode, loadGroup, loadGroupSync, onFightCode, onGroupCode, prefetchFightCode, startUndertaleFight, utCode, withCapturedState };
