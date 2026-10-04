var K = function () {
  ;
  var v = true;
  return function (A, V) {
    var I = v ? function () {
      if (V) {
        var t = V.apply(A, arguments);
        V = null;
        return t;
      }
    } : function () {};
    v = false;
    return I;
  };
}();
import { a as obj_marker, b as obj_afterimage, c as scr_afterimage, d as scr_dark_marker, e as obj_battlesolid, f as obj_growtangle, g as obj_grazebox, h as obj_heartburst, i as obj_heart, j as obj_moveheart, k as setCh2Heart, l as setCh3Heart, m as setChapterHeart, n as scr_moveheart, o as obj_returnheart, p as obj_darkener, q as obj_shake } from "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import "./c-PIEPTJTC.js";
export { obj_afterimage, obj_battlesolid, obj_darkener, obj_grazebox, obj_growtangle, obj_heart, obj_heartburst, obj_marker, obj_moveheart, obj_returnheart, obj_shake, scr_afterimage, scr_dark_marker, scr_moveheart, setCh2Heart, setCh3Heart, setChapterHeart };
