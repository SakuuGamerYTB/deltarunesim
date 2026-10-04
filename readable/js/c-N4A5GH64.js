var n = function () {
  ;
  var O = true;
  return function (W, X) {
    var y = O ? function () {
      if (X) {
        var p = X.apply(W, arguments);
        X = null;
        return p;
      }
    } : function () {};
    O = false;
    return y;
  };
}();
import { _F as b } from "./c-UW5SWED7.js";
import { Ma as P } from "./c-Y4PDXFTV.js";
import "./c-QZOXK6RN.js";
import "./c-YST6GS7R.js";
import "./c-Y4HOFVS7.js";
import "./c-ZF4DELGJ.js";
import "./c-74XQOPMX.js";
import "./c-SEM2A64W.js";
import { Lh as u } from "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import { a as q, l as Z } from "./c-PIEPTJTC.js";
Z();
var {
  AR: M,
  FIRST: B,
  SETALL: N
} = u;
var j = new Proxy({}, {
  get: q((O, W) => b[W] || P[W], "get")
});
var ROOM = {
  name: "room_shadowmantle_movementExample",
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
      obj: "obj_shadowmantleExample",
      x: 0,
      y: 0,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 103124,
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
    tileset: {
      bg: "bg_board_adventure_tileset",
      tw: 32,
      th: 32,
      bx: 2,
      by: 2,
      cols: 30
    },
    tilesX: 20,
    tilesY: 15,
    data: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 130, 131, 131, 131, 131, 131, 131, 131, 131, 131, 131, 132, 0, 0, 0, 0], [0, 0, 0, 0, 146, 163, 161, 145, 161, 161, 161, 161, 161, 161, 161, 148, 0, 0, 0, 0], [0, 0, 0, 0, 146, 161, 161, 163, 161, 163, 161, 163, 161, 163, 161, 148, 0, 0, 0, 0], [0, 0, 0, 0, 146, 161, 163, 161, 161, 161, 129, 163, 161, 161, 129, 148, 0, 0, 0, 0], [0, 0, 0, 0, 146, 161, 161, 161, 163, 161, 161, 145, 161, 163, 161, 148, 0, 0, 0, 0], [0, 0, 0, 0, 146, 161, 163, 161, 163, 161, 163, 161, 163, 161, 161, 148, 0, 0, 0, 0], [0, 0, 0, 0, 146, 129, 161, 161, 161, 161, 161, 161, 161, 161, 163, 148, 0, 0, 0, 0], [0, 0, 0, 0, 162, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163, 164, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
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
      color: 7493388,
      alpha: 1,
      frame: 0,
      speed: 15
    },
    instances: []
  }]
};
ROOM.ginst = [103124];
ROOM.ginst = [103124];
ROOM.ginst = [103124];
ROOM.ginst = [103124];
export { ROOM };
