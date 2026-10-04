var Z = function () {
  ;
  var k = true;
  return function (Q, V) {
    var W = k ? function () {
      if (V) {
        var D = V.apply(Q, arguments);
        V = null;
        return D;
      }
    } : function () {};
    k = false;
    return W;
  };
}();
import { _F as K } from "./c-UW5SWED7.js";
import { Ma as q } from "./c-Y4PDXFTV.js";
import "./c-QZOXK6RN.js";
import "./c-YST6GS7R.js";
import "./c-Y4HOFVS7.js";
import "./c-ZF4DELGJ.js";
import "./c-74XQOPMX.js";
import "./c-SEM2A64W.js";
import { Lh as G } from "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import { a as o, l as E } from "./c-PIEPTJTC.js";
E();
var {
  AR: H,
  FIRST: X,
  SETALL: F
} = G;
var J = new Proxy({}, {
  get: o((k, Q) => K[Q] || q[Q], "get")
});
var ROOM = {
  name: "room_board_empty",
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
      x: 581,
      y: 344,
      xs: 2,
      ys: 2,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 107439,
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
      id: 107440,
      pre: null,
      cc: null
    }, {
      obj: "obj_room_stage",
      x: 80,
      y: 0,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 107441,
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
    instances: [{
      obj: "obj_doorAny",
      x: 640,
      y: 360,
      xs: 1,
      ys: 2,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 107442,
      pre: o(function () {
        this.doorRoom = "room_dw_b3bs_interstitial";
        this.doorEntrance = "A";
      }, "pre"),
      cc: null
    }, {
      obj: "obj_markerAny",
      x: 583,
      y: 346,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 1,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 107443,
      pre: null,
      cc: null
    }, {
      obj: "obj_solidblocksized",
      x: 0,
      y: 320,
      xs: 17,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 107444,
      pre: null,
      cc: null
    }, {
      obj: "obj_solidblocksized",
      x: -40,
      y: 320,
      xs: 1,
      ys: 3,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 107445,
      pre: null,
      cc: null
    }, {
      obj: "obj_solidblocksized",
      x: -40,
      y: 440,
      xs: 18,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 107446,
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
      spr: "spr_gameshow_wall",
      x: 0,
      y: 0,
      xs: 2,
      ys: 2,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 1,
      rot: 0,
      id: "graphic_8F7BB45"
    }, {
      spr: "spr_gameshow_tvframe",
      x: 96,
      y: 0,
      xs: 2,
      ys: 2,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 1,
      rot: 0,
      id: "graphic_498F5D0F"
    }, {
      spr: "spr_gameshow_floor",
      x: 0,
      y: 318,
      xs: 2,
      ys: 2,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 1,
      rot: 0,
      id: "graphic_5454E73E"
    }, {
      spr: "spr_gameshow_playerpodiums",
      x: 128,
      y: 438,
      xs: 2,
      ys: 2,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 1,
      rot: 0,
      id: "graphic_2F2DCE7F"
    }, {
      spr: "spr_gameshow_couch",
      x: 0,
      y: 452,
      xs: 2,
      ys: 2,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 1,
      rot: 0,
      id: "graphic_4ACBBD69"
    }, {
      spr: "spr_gameshow_console",
      x: 202,
      y: 322,
      xs: 2,
      ys: 2,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 1,
      rot: 0,
      id: "graphic_685F7F4E"
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
      speed: 1
    },
    instances: []
  }]
};
ROOM.ginst = [107439, 107440, 107442, 107443, 107444, 107445, 107446, 107441];
ROOM.ginst = [107439, 107440, 107442, 107443, 107444, 107445, 107446, 107441];
ROOM.ginst = [107439, 107440, 107442, 107443, 107444, 107445, 107446, 107441];
ROOM.ginst = [107439, 107440, 107442, 107443, 107444, 107445, 107446, 107441];
export { ROOM };
