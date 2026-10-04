var O = function () {
  ;
  var e = true;
  return function (m, B) {
    var g = e ? function () {
      if (B) {
        var N = B.apply(m, arguments);
        B = null;
        return N;
      }
    } : function () {};
    e = false;
    return g;
  };
}();
import "./c-FCPQIX2O.js";
import "./c-PIEPTJTC.js";
