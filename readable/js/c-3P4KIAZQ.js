var F = function () {
  ;
  var f = true;
  return function (u, q) {
    var i = f ? function () {
      if (q) {
        var x = q.apply(u, arguments);
        q = null;
        return x;
      }
    } : function () {};
    f = false;
    return i;
  };
}();
import { _F as K } from "./c-UW5SWED7.js";
import { Ma as j } from "./c-Y4PDXFTV.js";
import "./c-QZOXK6RN.js";
import "./c-YST6GS7R.js";
import "./c-Y4HOFVS7.js";
import "./c-ZF4DELGJ.js";
import "./c-74XQOPMX.js";
import "./c-SEM2A64W.js";
import { Lh as V } from "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import { a as y, l as Z } from "./c-PIEPTJTC.js";
Z();
var {
  AR: Y,
  FIRST: E,
  SETALL: z
} = V;
var H = new Proxy({}, {
  get: y((f, u) => K[u] || j[u], "get")
});
var ROOM = {
  name: "room_board_sword_intro",
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
    bx: 0,
    by: 0
  }],
  rcc: null,
  layers: [{
    name: "BoardAreaReferences",
    type: "Assets",
    depth: 0,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    sprites: [{
      spr: "spr_whitepixel",
      x: 128,
      y: 64,
      xs: 384,
      ys: 256,
      color: 0,
      alpha: 0.1255,
      frame: 0,
      speed: 1,
      rot: 0,
      id: "graphic_62DBDC26_1_1_1_2_1"
    }],
    instances: []
  }, {
    name: "GAMESHOW_Instances",
    type: "Instances",
    depth: 100,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    instances: [{
      obj: "obj_gameshow_swordroute",
      x: -40,
      y: 40,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 105148,
      pre: null,
      cc: null
    }, {
      obj: "obj_markerAny",
      x: 576,
      y: 298,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 1,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 105149,
      pre: null,
      cc: null
    }, {
      obj: "obj_markerAny",
      x: 300,
      y: 298,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 2,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 105150,
      pre: null,
      cc: null
    }]
  }, {
    name: "BOARD_Instances",
    type: "Instances",
    depth: 900000,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    instances: [{
      obj: "obj_darkcontroller",
      x: -32,
      y: 0,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 105151,
      pre: null,
      cc: null
    }, {
      obj: "obj_board_controller",
      x: -32,
      y: 96,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 105152,
      pre: null,
      cc: null
    }, {
      obj: "obj_board_camera",
      x: -32,
      y: 128,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 105153,
      pre: null,
      cc: null
    }, {
      obj: "obj_mainchara",
      x: 300,
      y: 298,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 105154,
      pre: null,
      cc: null
    }, {
      obj: "obj_mainchara_board",
      x: 304,
      y: 172,
      xs: 2,
      ys: 2,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 105155,
      pre: null,
      cc: null
    }]
  }, {
    name: "BOARD_Tiles",
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
    data: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 0, 0, 0, 0], [0, 0, 0, 0, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 0, 0, 0, 0], [0, 0, 0, 0, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 0, 0, 0, 0], [0, 0, 0, 0, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 0, 0, 0, 0], [0, 0, 0, 0, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 0, 0, 0, 0], [0, 0, 0, 0, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 0, 0, 0, 0], [0, 0, 0, 0, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 0, 0, 0, 0], [0, 0, 0, 0, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 0, 0, 0, 0], [0, 0, 0, 0, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 405, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    instances: []
  }, {
    name: "Compatibility_Colour",
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
      color: 6710886,
      alpha: 1,
      frame: 0,
      speed: 15
    },
    instances: []
  }]
};
ROOM.ginst = [105154, 105151, 105155, 105152, 105153, 105148, 105149, 105150];
ROOM.ginst = [105154, 105151, 105155, 105152, 105153, 105148, 105149, 105150];
ROOM.ginst = [105154, 105151, 105155, 105152, 105153, 105148, 105149, 105150];
ROOM.ginst = [105154, 105151, 105155, 105152, 105153, 105148, 105149, 105150];
export { ROOM };
