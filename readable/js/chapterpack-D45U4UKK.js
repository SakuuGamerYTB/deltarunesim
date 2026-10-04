var q = function () {
  ;
  var Y = true;
  return function (x, Q) {
    var L = Y ? function () {
      if (Q) {
        var l = Q.apply(x, arguments);
        Q = null;
        return l;
      }
    } : function () {};
    Y = false;
    return L;
  };
}();
import { e as PackStatus, f as backgroundDone, g as whenBackground, h as packsSettled, i as registerChapterPackData, j as loadChapterPack, k as registerModPackData, l as loadModPack } from "./c-UOADV6RY.js";
import "./c-FMIAGHDE.js";
import "./c-PIEPTJTC.js";
export { PackStatus, backgroundDone, loadChapterPack, loadModPack, packsSettled, registerChapterPackData, registerModPackData, whenBackground };
