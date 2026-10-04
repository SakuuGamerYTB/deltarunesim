var p = function () {
  ;
  var V = true;
  return function (i, F) {
    var S = V ? function () {
      if (F) {
        var n = F.apply(i, arguments);
        F = null;
        return n;
      }
    } : function () {};
    V = false;
    return S;
  };
}();
import { _F as b } from "./c-UW5SWED7.js";
import { Ma as B } from "./c-Y4PDXFTV.js";
import "./c-QZOXK6RN.js";
import "./c-YST6GS7R.js";
import "./c-Y4HOFVS7.js";
import "./c-ZF4DELGJ.js";
import "./c-74XQOPMX.js";
import "./c-SEM2A64W.js";
import { Lh as U } from "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import { a as L, l as u } from "./c-PIEPTJTC.js";
u();
var {
  AR: E,
  FIRST: H,
  SETALL: s
} = U;
var M = new Proxy({}, {
  get: L((V, i) => b[i] || B[i], "get")
});
var ROOM = {
  name: "room_dw_chef",
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
      x: 280,
      y: 200,
      xs: 2,
      ys: 2,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 107938,
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
      id: 107939,
      pre: null,
      cc: null
    }, {
      obj: "obj_ch3_GSA04",
      x: 0,
      y: 40,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 107940,
      pre: null,
      cc: null
    }, {
      obj: "obj_dw_chef_screen",
      x: 0,
      y: 80,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 107941,
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
    name: "ASSETS_BG",
    type: "Assets",
    depth: 10000000,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    sprites: [{
      spr: "spr_dw_kitchen",
      x: 0,
      y: 0,
      xs: 2,
      ys: 2,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 1,
      rot: 0,
      id: "graphic_A98D465"
    }],
    instances: []
  }, {
    name: "TILES",
    type: "Tiles",
    depth: 10000100,
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
ROOM.ginst = [107938, 107939, 107940, 107941];
ROOM.ginst = [107938, 107939, 107940, 107941];
ROOM.ginst = [107938, 107939, 107940, 107941];
ROOM.ginst = [107938, 107939, 107940, 107941];
export { ROOM };
