var j = function () {
  ;
  var S0 = true;
  return function (S1, S2) {
    var S3 = S0 ? function () {
      if (S2) {
        var S4 = S2.apply(S1, arguments);
        S2 = null;
        return S4;
      }
    } : function () {};
    S0 = false;
    return S3;
  };
}();
var Y = Object.create;
var C = Object.defineProperty;
var R = Object.getOwnPropertyDescriptor;
var V = Object.getOwnPropertyNames;
var q = Object.getPrototypeOf;
var J = Object.prototype.hasOwnProperty;
var N = (S0, S1, S2) => S1 in S0 ? C(S0, S1, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: S2
}) : S0[S1] = S2;
var P = (S0, S1) => C(S0, "name", {
  value: S1,
  configurable: true
});
var L = (S0, S1, S2) => () => {
  if (S2) {
    throw S2[0];
  }
  try {
    if (S0) {
      S1 = S0(S0 = 0);
    }
    return S1;
  } catch (S3) {
    S2 = [S3];
    throw S3;
  }
};
var e = (S0, S1) => () => {
  try {
    if (!S1) {
      S0((S1 = {
        exports: {}
      }).exports, S1);
    }
    return S1.exports;
  } catch (S2) {
    S1 = 0;
    throw S2;
  }
};
var F = (S0, S1) => {
  for (var S2 in S1) {
    C(S0, S2, {
      get: S1[S2],
      enumerable: true
    });
  }
};
var o = (S0, S1, S2, S3) => {
  if (S1 && typeof S1 == "object" || typeof S1 == "function") {
    for (let S4 of V(S1)) {
      if (!J.call(S0, S4) && S4 !== S2) {
        C(S0, S4, {
          get: () => S1[S4],
          enumerable: !(S3 = R(S1, S4)) || S3.enumerable
        });
      }
    }
  }
  return S0;
};
var z = (S0, S1, S2) => {
  S2 = S0 != null ? Y(q(S0)) : {};
  return o(S1 || !S0 || !S0.__esModule ? C(S2, "default", {
    value: S0,
    enumerable: true
  }) : S2, S0);
};
var X = (S0, S1, S2) => N(S0, typeof S1 != "symbol" ? S1 + "" : S1, S2);
function __dr_ro() {
  throw new TypeError("Assignment to constant variable.");
}
function __dr_src_reg(S0, S1) {
  if (typeof S0 == "function") {
    K.set(S0, (K.get(S0) || "") + S1);
  }
}
function __dr_src_get(S0) {
  return K.get(S0) || "";
}
function __dr_fsrc_reg(S0, S1) {
  if (typeof S0 == "function") {
    G.set(S0, S1);
  }
}
function __dr_fsrc_get(S0) {
  if (typeof S0 == "function") {
    return G.get(S0);
  } else {
    return undefined;
  }
}
var K;
var n;
var G;
var O = L(() => {
  P(__dr_ro, "__dr_ro");
  K = new WeakMap();
  P(__dr_src_reg, "__dr_src_reg");
  P(__dr_src_get, "__dr_src_get");
  n = {};
  G = new WeakMap();
  P(__dr_fsrc_reg, "__dr_fsrc_reg");
  P(__dr_fsrc_get, "__dr_fsrc_get");
});
export { P as a, e as b, F as c, z as d, X as e, __dr_ro as f, __dr_src_reg as g, __dr_src_get as h, n as i, __dr_fsrc_reg as j, __dr_fsrc_get as k, O as l };
