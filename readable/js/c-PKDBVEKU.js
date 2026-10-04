var b = function () {
  ;
  var Y = true;
  return function (y, i) {
    var C = Y ? function () {
      if (i) {
        var S = i.apply(y, arguments);
        i = null;
        return S;
      }
    } : function () {};
    Y = false;
    return C;
  };
}();
import { _F as R } from "./c-UW5SWED7.js";
import { Ma as p } from "./c-Y4PDXFTV.js";
import "./c-QZOXK6RN.js";
import "./c-YST6GS7R.js";
import "./c-Y4HOFVS7.js";
import "./c-ZF4DELGJ.js";
import "./c-74XQOPMX.js";
import "./c-SEM2A64W.js";
import { Lh as J } from "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import { a as D, l as I } from "./c-PIEPTJTC.js";
I();
var {
  AR: P,
  FIRST: M,
  SETALL: n
} = J;
var m = new Proxy({}, {
  get: D((Y, y) => R[y] || p[y], "get")
});
var ROOM = {
  name: "room_susiezilla_singleScreenMockup",
  w: 1280,
  h: 480,
  color: 0,
  drawColor: false,
  speed: 0,
  views: [{
    x: 320,
    y: 0,
    w: 640,
    h: 480,
    follow: null,
    bx: 160,
    by: 240
  }],
  rcc: null,
  layers: [{
    name: "OBJECTS_MAIN",
    type: "Instances",
    depth: 0,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    instances: [{
      obj: "obj_mainchara",
      x: -260,
      y: 140,
      xs: 2,
      ys: 2,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 104223,
      pre: null,
      cc: null
    }, {
      obj: "obj_darkcontroller",
      x: -400,
      y: 40,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 104224,
      pre: null,
      cc: null
    }, {
      obj: "obj_susiezilla_test_menu",
      x: 0,
      y: 0,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 104225,
      pre: null,
      cc: null
    }]
  }, {
    name: "BGCOLOR",
    type: "Background",
    depth: 2147483600,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    bg: {
      spr: null,
      visible: true,
      fore: false,
      htile: false,
      vtile: false,
      stretch: false,
      color: 0,
      alpha: 1,
      frame: 0,
      speed: 15
    },
    instances: []
  }]
};
ROOM.ginst = [104223, 104224, 104225];
ROOM.ginst = [104223, 104224, 104225];
ROOM.ginst = [104223, 104224, 104225];
ROOM.ginst = [104223, 104224, 104225];
export { ROOM };
