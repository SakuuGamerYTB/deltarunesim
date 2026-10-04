var T = function () {
  ;
  var W = true;
  return function (b, j) {
    var c = W ? function () {
      if (j) {
        var Y = j.apply(b, arguments);
        j = null;
        return Y;
      }
    } : function () {};
    W = false;
    return c;
  };
}();
import { _F as d } from "./c-UW5SWED7.js";
import { Ma as E } from "./c-Y4PDXFTV.js";
import "./c-QZOXK6RN.js";
import "./c-YST6GS7R.js";
import "./c-Y4HOFVS7.js";
import "./c-ZF4DELGJ.js";
import "./c-74XQOPMX.js";
import "./c-SEM2A64W.js";
import { Lh as g } from "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import { a as F, l as Q } from "./c-PIEPTJTC.js";
Q();
var {
  AR: w,
  FIRST: h,
  SETALL: e
} = g;
var M = new Proxy({}, {
  get: F((W, b) => d[b] || E[b], "get")
});
var ROOM = {
  name: "room_CHEFS",
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
    bx: 500,
    by: 500
  }],
  rcc: null,
  layers: [{
    name: "Compatibility_Instances_Depth_0",
    type: "Instances",
    depth: 0,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    instances: [{
      obj: "obj_chefs_toggles",
      x: 320,
      y: 100,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108100,
      pre: null,
      cc: null
    }]
  }, {
    name: "Assets_2",
    type: "Assets",
    depth: 100,
    visible: false,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    sprites: [{
      spr: "spr_chefs_BG",
      x: 0,
      y: 0,
      xs: 2,
      ys: 2,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 1,
      rot: 0,
      id: "graphic_314D3C54"
    }],
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
      color: 6696000,
      alpha: 1,
      frame: 0,
      speed: 15
    },
    instances: []
  }]
};
ROOM.ginst = [108100];
ROOM.ginst = [108100];
ROOM.ginst = [108100];
ROOM.ginst = [108100];
export { ROOM };
