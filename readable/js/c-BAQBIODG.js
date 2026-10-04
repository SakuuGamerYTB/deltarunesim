var q = function () {
  ;
  var u = true;
  return function (F, v) {
    var I = u ? function () {
      if (v) {
        var h = v.apply(F, arguments);
        v = null;
        return h;
      }
    } : function () {};
    u = false;
    return I;
  };
}();
import { _F as s } from "./c-UW5SWED7.js";
import { Ma as H } from "./c-Y4PDXFTV.js";
import "./c-QZOXK6RN.js";
import "./c-YST6GS7R.js";
import "./c-Y4HOFVS7.js";
import "./c-ZF4DELGJ.js";
import "./c-74XQOPMX.js";
import "./c-SEM2A64W.js";
import { Lh as i } from "./c-D6ZXNKTF.js";
import "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import "./c-I2ROP6YV.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import { a as D, l as R } from "./c-PIEPTJTC.js";
R();
var {
  AR: z,
  FIRST: E,
  SETALL: b
} = i;
var J = new Proxy({}, {
  get: D((u, F) => s[F] || H[F], "get")
});
var ROOM = {
  name: "room_shootout",
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
    bx: 32,
    by: 32
  }],
  rcc: null,
  layers: [{
    name: "collision",
    type: "Instances",
    depth: 0,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    instances: []
  }, {
    name: "destructibles",
    type: "Instances",
    depth: 999050,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    instances: []
  }, {
    name: "OBJECTS_MAIN",
    type: "Instances",
    depth: 999062,
    visible: true,
    x: 0,
    y: 0,
    hs: 0,
    vs: 0,
    instances: [{
      obj: "obj_mainchara",
      x: -64,
      y: 160,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 104645,
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
      id: 104646,
      pre: null,
      cc: null
    }, {
      obj: "obj_ch3_GSD03",
      x: 32,
      y: 0,
      xs: 1,
      ys: 1,
      rot: 0,
      frame: 0,
      speed: 1,
      color: 16777215,
      alpha: 1,
      id: 104648,
      pre: null,
      cc: null
    }]
  }, {
    name: "fg",
    type: "Background",
    depth: 999162,
    visible: true,
    x: 0,
    y: 0,
    hs: -8,
    vs: 0,
    bg: {
      spr: "spr_desert_loop_foreground",
      visible: true,
      fore: false,
      htile: true,
      vtile: false,
      stretch: true,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 30
    },
    instances: []
  }, {
    name: "md",
    type: "Background",
    depth: 999262,
    visible: true,
    x: 0,
    y: 0,
    hs: -4,
    vs: 0,
    bg: {
      spr: "spr_desert_loop_middle_2",
      visible: true,
      fore: false,
      htile: true,
      vtile: false,
      stretch: true,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 30
    },
    instances: []
  }, {
    name: "md_back",
    type: "Background",
    depth: 999362,
    visible: true,
    x: 0,
    y: 0,
    hs: -2,
    vs: 0,
    bg: {
      spr: "spr_desert_loop_middle_back_3",
      visible: true,
      fore: false,
      htile: true,
      vtile: false,
      stretch: true,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 30
    },
    instances: []
  }, {
    name: "bg",
    type: "Background",
    depth: 999462,
    visible: true,
    x: 0,
    y: 0,
    hs: -1,
    vs: 0,
    bg: {
      spr: "spr_desert_loop_backrgound_4",
      visible: true,
      fore: false,
      htile: true,
      vtile: false,
      stretch: true,
      color: 16777215,
      alpha: 1,
      frame: 0,
      speed: 30
    },
    instances: []
  }]
};
ROOM.ginst = [104645, 104646, 104648];
ROOM.ginst = [104645, 104646, 104648];
ROOM.ginst = [104645, 104646, 104648];
ROOM.ginst = [104645, 104646, 104648];
export { ROOM };
