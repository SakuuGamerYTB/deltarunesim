var h = function () {
  ;
  var F = true;
  return function (I, U) {
    var S = F ? function () {
      if (U) {
        var X = U.apply(I, arguments);
        U = null;
        return X;
      }
    } : function () {};
    F = false;
    return S;
  };
}();
import { _F as J } from "./c-UW5SWED7.js";
import { Ma as N } from "./c-Y4PDXFTV.js";
import "./c-QZOXK6RN.js";
import "./c-YST6GS7R.js";
import "./c-Y4HOFVS7.js";
import "./c-ZF4DELGJ.js";
import "./c-74XQOPMX.js";
import "./c-SEM2A64W.js";
import { Lh as T } from "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import { a as n, l as L } from "./c-PIEPTJTC.js";
L();
var {
  AR: f,
  FIRST: K,
  SETALL: x
} = T;
var P = new Proxy({}, {
  get: n((F, I) => J[I] || N[I], "get")
});
var ROOM = {
  name: "room_dw_susiezilla_empty",
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
    name: "FG_Curtains",
    type: "Assets",
    depth: 95000,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    sprites: [{
      spr: "spr_dw_gameshow_curtain",
      x: 0,
      y: 52,
      xs: 2,
      ys: 2,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 1,
      rot: 0,
      id: "graphic_4473C506"
    }, {
      spr: "spr_dw_gameshow_curtain",
      x: 640,
      y: 52,
      xs: -2,
      ys: 2,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 1,
      rot: 0,
      id: "graphic_66541F5E"
    }],
    instances: []
  }, {
    name: "OBJECTS_MAIN",
    type: "Instances",
    depth: 95100,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    instances: [{
      obj: "obj_mainchara",
      x: 320,
      y: 200,
      xs: 2,
      ys: 2,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108051,
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
      id: 108052,
      pre: null,
      cc: null
    }, {
      obj: "obj_room_susiezilla_empty",
      x: 0,
      y: 40,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108053,
      pre: null,
      cc: null
    }]
  }, {
    name: "COLLISION_DOOR",
    type: "Instances",
    depth: 95200,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    instances: [{
      obj: "obj_solidblock_32",
      x: 0,
      y: 360,
      xs: 20,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108054,
      pre: null,
      cc: null
    }, {
      obj: "obj_solidblock_32",
      x: -32,
      y: 156,
      xs: 1,
      ys: 7.375,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108055,
      pre: null,
      cc: null
    }, {
      obj: "obj_solidblock_32",
      x: 0,
      y: 156,
      xs: 20,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108056,
      pre: null,
      cc: null
    }, {
      obj: "obj_solidblock_32",
      x: 640,
      y: 156,
      xs: 1,
      ys: 7.375,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108057,
      pre: null,
      cc: null
    }]
  }, {
    name: "BACKGROUND",
    type: "Assets",
    depth: 1000000,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    sprites: [{
      spr: "spr_dw_susiezilla_bg_empty",
      x: 0,
      y: 0,
      xs: 2,
      ys: 2,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 1,
      rot: 0,
      id: "graphic_5E7B8710"
    }],
    instances: []
  }, {
    name: "TILES",
    type: "Tiles",
    depth: 1000100,
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
ROOM.ginst = [108051, 108052, 108053, 108054, 108055, 108056, 108057];
ROOM.ginst = [108051, 108052, 108053, 108054, 108055, 108056, 108057];
ROOM.ginst = [108051, 108052, 108053, 108054, 108055, 108056, 108057];
ROOM.ginst = [108051, 108052, 108053, 108054, 108055, 108056, 108057];
export { ROOM };
