var R = function () {
  ;
  var B = true;
  return function (Z, d) {
    var G = B ? function () {
      if (d) {
        var c = d.apply(Z, arguments);
        d = null;
        return c;
      }
    } : function () {};
    B = false;
    return G;
  };
}();
import { _F as p } from "./c-UW5SWED7.js";
import { Ma as E } from "./c-Y4PDXFTV.js";
import "./c-QZOXK6RN.js";
import "./c-YST6GS7R.js";
import "./c-Y4HOFVS7.js";
import "./c-ZF4DELGJ.js";
import "./c-74XQOPMX.js";
import "./c-SEM2A64W.js";
import { Lh as z } from "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import { a as f, l as L } from "./c-PIEPTJTC.js";
L();
var {
  AR: Y,
  FIRST: M,
  SETALL: D
} = z;
var h = new Proxy({}, {
  get: f((B, Z) => p[Z] || E[Z], "get")
});
var ROOM = {
  name: "room_dw_chef_empty",
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
      id: 108046,
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
      id: 108047,
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
      id: 108048,
      pre: null,
      cc: null
    }, {
      obj: "obj_room_chef_empty",
      x: 40,
      y: 0,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108049,
      pre: null,
      cc: null
    }, {
      obj: "obj_dw_chef_screen_empty",
      x: 0,
      y: 40,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108050,
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
    depth: 16777216,
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
      id: "graphic_29284964"
    }],
    instances: []
  }, {
    name: "TILES",
    type: "Tiles",
    depth: 16777316,
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
ROOM.ginst = [108046, 108047, 108048, 108049, 108050];
ROOM.ginst = [108046, 108047, 108048, 108049, 108050];
ROOM.ginst = [108046, 108047, 108048, 108049, 108050];
ROOM.ginst = [108046, 108047, 108048, 108049, 108050];
export { ROOM };
