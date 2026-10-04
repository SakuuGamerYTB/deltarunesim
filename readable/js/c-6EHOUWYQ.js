var D = function () {
  ;
  var x = true;
  return function (i, y) {
    var k = x ? function () {
      if (y) {
        var C = y.apply(i, arguments);
        y = null;
        return C;
      }
    } : function () {};
    x = false;
    return k;
  };
}();
import { _F as M } from "./c-UW5SWED7.js";
import { Ma as O } from "./c-Y4PDXFTV.js";
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
import { a as K, l as T } from "./c-PIEPTJTC.js";
T();
var {
  AR: J,
  FIRST: c,
  SETALL: N
} = u;
var d = new Proxy({}, {
  get: K((x, i) => M[i] || O[i], "get")
});
var ROOM = {
  name: "room_rhythmgame_tenna_test",
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
      x: -200,
      y: 120,
      xs: 2,
      ys: 2,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108353,
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
      id: 108354,
      pre: null,
      cc: null
    }, {
      obj: "obj_solidblock_32",
      x: -243,
      y: 100,
      xs: 3.5,
      ys: 3.5,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108355,
      pre: null,
      cc: null
    }, {
      obj: "obj_rhythmgame_tenna_tester",
      x: 320,
      y: 360,
      xs: 2,
      ys: 2,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 108356,
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
ROOM.ginst = [108353, 108354, 108355, 108356];
ROOM.ginst = [108353, 108354, 108355, 108356];
ROOM.ginst = [108353, 108354, 108355, 108356];
ROOM.ginst = [108353, 108354, 108355, 108356];
export { ROOM };
