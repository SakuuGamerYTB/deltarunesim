var A = function () {
  ;
  var v = true;
  return function (w, B) {
    var D = v ? function () {
      if (B) {
        var t = B.apply(w, arguments);
        B = null;
        return t;
      }
    } : function () {};
    v = false;
    return D;
  };
}();
import { b as modBlocked, c as MODS, d as modCredit, e as modLoaded, f as modOf, g as ModHooks, h as loadMod, i as loadModSync, j as ModSettings, k as setModCfg, l as modOptionValue, m as prepareModEncounter, n as finishModEncounter, o as buildModFights } from "./c-4W34X7CH.js";
import "./c-UOADV6RY.js";
import "./c-D6ZXNKTF.js";
import "./c-I2ROP6YV.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import "./c-PIEPTJTC.js";
export { MODS, ModHooks, ModSettings, buildModFights, finishModEncounter, loadMod, loadModSync, modBlocked, modCredit, modLoaded, modOf, modOptionValue, prepareModEncounter, setModCfg };
