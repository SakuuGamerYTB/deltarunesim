var H = function () {
  ;
  var f = true;
  return function (z, y) {
    var J = f ? function () {
      if (y) {
        var O = y.apply(z, arguments);
        y = null;
        return O;
      }
    } : function () {};
    f = false;
    return J;
  };
}();
import { _F as N } from "./c-UW5SWED7.js";
import { Ma as U } from "./c-Y4PDXFTV.js";
import "./c-QZOXK6RN.js";
import "./c-YST6GS7R.js";
import "./c-Y4HOFVS7.js";
import "./c-ZF4DELGJ.js";
import "./c-74XQOPMX.js";
import "./c-SEM2A64W.js";
import { Lh as v } from "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import { a as C, l as Y } from "./c-PIEPTJTC.js";
Y();
var {
  AR: s,
  FIRST: B,
  SETALL: j
} = v;
var q = new Proxy({}, {
  get: C((f, z) => N[z] || U[z], "get")
});
var ROOM = {
  name: "room_dw_rhythm_empty",
  w: 640,
  h: 480,
  color: 0,
  drawColor: false,
  speed: 0,
  views: [{
    x: 0,
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
      x: 140,
      y: 100,
      xs: 2,
      ys: 2,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108058,
      pre: null,
      cc: null
    }, {
      obj: "obj_darkcontroller",
      x: 0,
      y: 0,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108059,
      pre: null,
      cc: null
    }, {
      obj: "obj_room_rhythm_empty",
      x: 0,
      y: 40,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108060,
      pre: null,
      cc: null
    }]
  }, {
    name: "COLLISION_DOOR",
    type: "Instances",
    depth: 100,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    instances: []
  }, {
    name: "TILES",
    type: "Tiles",
    depth: 1000000,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    instances: []
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
ROOM.ginst = [108058, 108059, 108060];
ROOM.ginst = [108058, 108059, 108060];
ROOM.ginst = [108058, 108059, 108060];
ROOM.ginst = [108058, 108059, 108060];
export { ROOM };
