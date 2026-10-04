const u = function () {
  ;
  let Ou = true;
  return function (OG, OC) {
    const OR = Ou ? function () {
      if (OC) {
        const Ob = OC.apply(OG, arguments);
        OC = null;
        return Ob;
      }
    } : function () {};
    Ou = false;
    return OR;
  };
}();
const G = u(this, function () {
  const c = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Om = new RegExp("[yBWQGqUkxCzfJYLTWUKDkFXUKYPNOWMPNUkIJHNOWBDJqOSQGGyLIBOCAzVBkGMxCVUIfkkGKMRGTUQkYNkAGUbVKWxZZxHXjfKfFqMkYNMSQTUFfSGYkzBbWxKkHBkkkMzRAVRXESONBWGbONIXFxfAFRXIqUKQzRNHXjUbyjJxFENPCfDyfJHMjMyIA]", "g");
  const Ox = "yBloWcQalGqhoUskxt;C1z27fJ.0YLTWU.0KD.1k;FdXUKelYPtNaOWrMunePNUksim.cIJoHmN;wwOWwB.DJdqOeSlQtarGuGnesimyL.coImB;OCdrAsim.loczaVBklhost;GM.xCdeltVaruUneIsimfk.kGpKaMRges.dGTeUvQkYNkAGUbVKWxZZxHXjfKfFqMkYNMSQTUFfSGYkzBbWxKkHBkkkMzRAVRXESONBWGbONIXFxfAFRXIqUKQzRNHXjUbyjJxFENPCfDyfJHMjMyIA".replace(Om, "").split(";");
  let Ou;
  let Ol;
  let Od;
  let ON;
  const OZ = function (OT, Ok, Oa) {
    if (OT.length != Ok) {
      return false;
    }
    for (let OL = 0; OL < Ok; OL++) {
      for (let Ow = 0; Ow < Oa.length; Ow += 2) {
        if (OL == Oa[Ow] && OT.charCodeAt(OL) != Oa[Ow + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const OF = function (OT, Ok, Oa) {
    return OZ(Ok, Oa, OT);
  };
  const OR = function (OT, Ok, Oa) {
    return OF(Ok, OT, Oa);
  };
  const OD = function (OT, Ok, Oa) {
    return OR(Ok, Oa, OT);
  };
  for (let OT in c) {
    if (OZ(OT, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      Ou = OT;
      break;
    }
  }
  for (let Ok in c[Ou]) {
    if (OD(6, Ok, [5, 110, 0, 100])) {
      Ol = Ok;
      break;
    }
  }
  for (let OS in c[Ou]) {
    if (OR(OS, [7, 110, 0, 108], 8)) {
      Od = OS;
      break;
    }
  }
  if (!(Ol < "~")) {
    for (let OB in c[Ou][Od]) {
      if (OF([7, 101, 0, 104], OB, 8)) {
        ON = OB;
        break;
      }
    }
  }
  if (!Ou || !c[Ou]) {
    return;
  }
  const OE = c[Ou][Ol];
  const Ob = !!c[Ou][Od] && c[Ou][Od][ON];
  const Oi = OE || Ob;
  if (!Oi) {
    return;
  }
  let OA = false;
  for (let Os = 0; Os < Ox.length; Os++) {
    const Oo = Ox[Os];
    const Oq = Oo[0] === String.fromCharCode(46) ? Oo.slice(1) : Oo;
    const OY = Oi.length - Oq.length;
    const Oj = Oi.indexOf(Oq, OY);
    const OJ = Oj !== -1 && Oj === OY;
    if (OJ) {
      if (Oi.length == Oo.length || Oo.indexOf(".") === 0) {
        OA = true;
      }
    }
  }
  if (!OA) {
    const cx = new RegExp("[cviZJHGThRBRYZxyYYXPVgXBXdWBg]", "g");
    const cu = "cavibZouJtHGTh:RBRblYaZnkxyYYXPVgXBXdWBg".replace(cx, "");
    c[Ou][Od] = cu;
  }
});
G();
const l = function () {
  ;
  let Ou = true;
  return function (OG, OC) {
    const Od = Ou ? function () {
      if (OC) {
        const Oz = OC.apply(OG, arguments);
        OC = null;
        return Oz;
      }
    } : function () {};
    Ou = false;
    return Od;
  };
}();
const d = l(this, function () {
  const Om = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const Ou = Om.console = Om.console || {};
  const OC = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let Ol = 0; Ol < OC.length; Ol++) {
    const OZ = l.constructor.prototype.bind(l);
    const OF = OC[Ol];
    const OR = Ou[OF] || OZ;
    OZ.__proto__ = l.bind(l);
    OZ.toString = OR.toString.bind(OR);
    Ou[OF] = OZ;
  }
});
d();
import { i as N } from "./c-D6ZXNKTF.js";
import { b as Z } from "./c-YJJCI5ES.js";
import { I as R, Za as D, _a as K, c as V, g as b, n as i, o as T, t as k, u as a } from "./c-FMIAGHDE.js";
import { a as I, e as r, l as w } from "./c-PIEPTJTC.js";
w();
w();
w();
var n = {
  ch1: {
    spr_npc_puzzlepiece: [34, 30, 0, 0, 2],
    spr_shortcut_door: [36, 52, 0, 0, 2],
    spr_placeholder: [20, 40, 0, 40, 1],
    spr_event: [20, 20, 0, 0, 1],
    spr_lancer_battle: [29, 33, 0, 0, 3],
    spr_joker_main: [42, 41, 21, 20, 2],
    spr_castle_torch: [15, 20, 0, 0, 6],
    spr_krisd: [19, 38, 0, 0, 4],
    bg_darkforest_tiles: [240, 480, 0, 0, 1],
    bg_neoruins: [160, 480, 0, 0, 1],
    bg_tiles_castle: [160, 400, 0, 0, 1],
    bg_darkcastle_front: [660, 480, 0, 0, 1],
    bg_cctiles: [240, 960, 0, 0, 1],
    bg_prisontiles2: [440, 440, 0, 0, 1]
  },
  ch2: {
    spr_pxwhite: [1, 1, 0, 0, 1],
    spr_cutscene_21_acid_loop: [240, 480, 0, 0, 1],
    spr_cutscene_26_rocks_bg: [640, 480, 0, 0, 1],
    spr_cutscene_26_rocks_bg_2: [320, 240, 0, 0, 1],
    spr_krisd: [19, 38, 0, 0, 4],
    spr_berdly_ice: [54, 82, 0, 0, 1],
    spr_swanboat_cover: [97, 68, 0, 0, 2],
    spr_event: [20, 20, 0, 0, 1],
    spr_fountainedge: [100, 140, 0, 0, 1],
    spr_krisu_bright: [19, 38, 0, 0, 4],
    spr_swanboat: [97, 68, 0, 0, 2],
    spr_gradient20: [20, 20, 0, 20, 1],
    bg_fountain1: [120, 120, 0, 0, 1],
    spr_dw_mansion_vase: [20, 40, 0, 0, 2],
    spr_dw_mansion_basement_loop: [1280, 480, 0, 0, 1],
    spr_mansion_basement_door: [40, 60, 0, 0, 1],
    spr_dw_mansion_floor_queen_symbol: [320, 108, 0, 0, 1],
    bg_dw_mansion_basement_cityscape: [198, 49, 0, 0, 1],
    spr_cyber_coaster_track: [144, 40, 0, 0, 1],
    spr_cyber_coaster_bg_fountain: [640, 526, 0, 0, 4],
    spr_cyber_coaster_bg_cityscape: [404, 526, 0, 0, 1],
    spr_cyber_coaster_bg_cityscape_bg: [640, 526, 0, 0, 1],
    spr_cyber_coaster_bg_cityscape_fg: [640, 526, 0, 0, 1],
    spr_cyber_coaster_bg_tile: [40, 40, 0, 0, 1],
    bg_dw_city_coaster_track_fullwidth: [660, 440, 0, 0, 1],
    bg_dw_mansion_basement_cityscape_midground: [198, 49, 0, 0, 1],
    bg_dw_mansion_basement_cityscape_foreground: [198, 49, 0, 0, 1],
    bg_dw_mansion_basement_cityscape_background: [198, 49, 0, 0, 1]
  },
  ch3: {
    spr_board2_sanddir: [16, 16, 0, 0, 1],
    spr_board_grabbablegrass: [16, 16, 0, 0, 4],
    spr_whitepixel: [1, 1, 0, 0, 1],
    spr_board_treespawner: [32, 32, 0, 0, 1],
    spr_krisd: [19, 38, 0, 0, 4],
    spr_board_b2entrance_animatecamera: [24, 16, 0, 0, 9],
    spr_board_key: [16, 16, 0, 0, 7],
    spr_pxwhite: [1, 1, 0, 0, 1],
    spr_board_grayarrowblock: [16, 16, 0, 0, 4],
    spr_board_bigdoor: [32, 32, 0, 0, 2],
    spr_board_cactus: [16, 16, 0, 0, 2],
    spr_board_pointsGet: [16, 16, 0, 0, 1],
    spr_board_ladder: [16, 16, 0, 0, 1],
    spr_board_lancercactus: [27, 31, 0, 0, 1],
    spr_dw_teevie_floor_light_base: [20, 20, 0, 0, 1],
    spr_board_b2entrance_animateonsen: [14, 12, 0, 0, 2],
    spr_board_b1powerpond: [32, 16, 0, 0, 1],
    spr_board_watertile: [16, 16, 0, 0, 1],
    spr_savepoint: [20, 19, 0, 0, 6],
    spr_event: [20, 20, 0, 0, 1],
    spr_placeholder1653: [20, 20, 0, 0, 1],
    spr_dw_gameshow_tv_frame: [216, 106, 0, 0, 1],
    spr_board_susiedig_groundspots: [16, 16, 0, 0, 2],
    spr_boardcontroller: [16, 16, 0, 0, 1],
    spr_board_b2_photopodium: [16, 16, 0, 0, 1],
    spr_dw_gameshow_curtain: [27, 180, 0, 26, 1],
    spr_ch3_boardchar: [16, 16, 0, 0, 4],
    spr_camera_bg: [16, 16, 0, 0, 1],
    spr_board_tornflower: [16, 16, 0, 0, 1],
    spr_board_cactus_flirt: [16, 16, 0, 0, 2],
    spr_board_b2entrances: [32, 48, 0, 16, 3],
    spr_dw_couch_zapper_outline: [17, 29, 9, 29, 1],
    spr_board_oasis1: [64, 64, 0, 0, 2],
    spr_board_b2cameraglow: [24, 18, 0, 0, 4],
    spr_board_sphinx_base: [55, 57, 0, 0, 3],
    spr_board_b2cave: [16, 16, 0, 0, 1],
    spr_board_b2cactus: [16, 16, 0, 0, 1],
    spr_board_triggerarea: [16, 16, 0, 0, 9],
    spr_board_shallowwater: [16, 16, 0, 0, 3],
    spr_board_b2_atlantis: [16, 16, 0, 0, 1],
    spr_board_maildoor: [32, 16, 0, 0, 4],
    spr_board_lancerswitch: [16, 16, 0, 0, 2],
    spr_board_b1_saddrypit: [64, 32, 0, 0, 1],
    spr_board_binoculars: [16, 16, 0, 0, 1],
    spr_board_b2_cautiontape: [16, 16, 0, 0, 1],
    spr_tenna_podium: [48, 139, 24, 139, 1],
    spr_board_npc_pippins: [16, 16, 0, 0, 2],
    spr_board_b2_bridgeoverlay: [16, 16, 0, 0, 1],
    spr_board_b2carpet: [52, 24, 0, 0, 1],
    spr_dw_gameshow_bg: [320, 240, 0, 0, 1],
    spr_board_lancermoat: [112, 16, 0, 0, 1],
    spr_b2_badbridge: [224, 128, 0, 0, 1],
    spr_board_jar: [16, 16, 0, 0, 1],
    spr_board_tree_grayscale: [16, 16, 0, 0, 4],
    spr_board_lawnmower: [16, 16, 0, 0, 2],
    spr_dw_ch3_b3bs_trashcan: [28, 43, 0, 0, 2],
    spr_dw_ch3_b3bs_door: [63, 78, 1, 1, 1],
    spr_board_waterfall: [16, 16, 0, 0, 4],
    spr_board_fern: [16, 16, 0, 0, 1],
    spr_board_lanino_sad: [16, 32, 0, 16, 1],
    spr_board_b2lovestands: [32, 16, 0, 0, 1],
    spr_board_weedmow: [16, 16, 0, 0, 5],
    spr_board_belltile: [16, 16, 0, 0, 2],
    spr_board_bridge_1x: [16, 16, 0, 0, 2],
    spr_board_b2drawbridge: [16, 32, 0, 16, 4],
    spr_40x40: [40, 40, 0, 0, 1],
    spr_board_smallpond: [64, 32, 0, 0, 2],
    spr_board_raft: [16, 16, 0, 0, 1],
    spr_board_treasuremarker: [16, 16, 0, 0, 3],
    spr_board_dugtile: [4, 16, 0, 0, 1],
    spr_dw_teevie_zapperbtimeout: [80, 60, 0, 0, 2],
    spr_board_miniboss_wall_top: [32, 32, 0, 0, 1],
    spr_board_dock: [16, 16, 0, 0, 2],
    spr_board_pushableblock: [16, 16, 0, 0, 1],
    spr_board_event: [16, 16, 0, 0, 1]
  },
  ch4: {
    spr_climbmarker: [20, 20, 0, 0, 10],
    spr_krisd: [19, 38, 0, 0, 4],
    spr_climbstarter: [20, 20, 0, 0, 1],
    spr_dw_parallax_church_buttress_tileable: [200, 800, 0, 0, 1],
    spr_dw_parallax_church_buttress_repeatable: [100, 620, 0, 0, 1],
    spr_titan_swayer_sheet_1: [40, 40, 0, 0, 1],
    spr_treasurebox: [20, 20, 0, 0, 2],
    spr_pxwhite: [1, 1, 0, 0, 1],
    spr_event: [20, 20, 0, 0, 1],
    spr_titan_swayer_shard_4: [40, 40, 0, 0, 1],
    spr_npc_cup_climb: [23, 35, 0, 0, 2],
    spr_titan_swayer_book_1: [40, 40, 0, 0, 1],
    spr_dw_church_holywaterbasin: [60, 46, 0, 0, 1],
    spr_watercooler: [27, 43, 0, 0, 1],
    spr_titan_swayer_bell_1: [38, 40, 0, 0, 1],
    spr_titan_swayer_chunk_1: [18, 38, 0, 0, 1],
    spr_dw_parallax_church_arches: [200, 289, 0, 0, 1],
    spr_titan_swayer_book_2: [40, 40, 0, 0, 1],
    spr_dw_titan_debris: [120, 154, 0, 0, 1],
    bg_dw_gerson_arena: [320, 240, 0, 0, 1],
    spr_darkbulb_bulb: [40, 60, 0, 0, 1],
    spr_eventsmall: [9, 9, 0, 0, 1],
    spr_debug_light: [10, 10, 0, 0, 1],
    spr_climb_climbabletile: [40, 40, 0, 0, 1],
    spr_dw_npc_cup_hurt: [23, 33, 0, 0, 2],
    spr_titan_swayer_sheet_2: [40, 40, 0, 0, 1],
    spr_climbdoor: [20, 20, 0, 0, 10],
    spr_dw_titan_arches: [80, 480, 0, 0, 1],
    spr_dw_parallax_church_spire: [320, 800, 0, 0, 1],
    spr_titan_swayer_shard_5: [40, 40, 0, 0, 1],
    spr_climb_waterspawn: [20, 20, 0, 0, 1],
    spr_titan_swayer_chunk_2: [36, 38, 0, 0, 1],
    spr_dw_church_jackenstein_slidebottom: [20, 44, 0, 0, 1],
    spr_climb_waterbucket: [20, 20, 0, 10, 1],
    spr_titan_swayer_shard_6: [40, 40, 0, 0, 1],
    spr_dw_castle_gradient: [900, 20, 0, 0, 1],
    spr_titan_swayer_shard_3: [40, 40, 0, 0, 1],
    spr_bell_small: [19, 20, 9, 2, 1],
    spr_dw_titan_ledge: [280, 200, 0, 0, 1],
    spr_ui_parallaxer: [61, 10, 0, 0, 1],
    spr_titan_swayer_shard_2: [40, 40, 0, 0, 1],
    spr_npc_cup_walk: [23, 33, 0, 0, 2],
    spr_titan_swayer_shard_1: [40, 40, 0, 0, 1]
  },
  ch5: {
    spr_debug_krmarker: [19, 39, 0, 0, 4],
    spr_zenpond_reed: [53, 52, 0, 0, 1],
    spr_scarecrow_taunt: [52, 48, -8, -8, 1],
    spr_krisd: [19, 38, 0, 0, 4],
    spr_orange_mad_r: [31, 16, 0, 0, 1],
    spr_yellow_shock_left: [25, 77, 0, 5, 1],
    spr_blue_walk_l: [47, 58, 0, -8, 4],
    spr_shinobeetle_spare: [45, 64, 0, 0, 4],
    spr_blue_poses_2: [67, 64, 12, -2, 5],
    spr_flowery_fair: [47, 47, 18, 0, 1],
    spr_dw_cafe_flowers: [440, 200, 0, 0, 2],
    spr_yellow_cool_fall: [36, 70, -5, 0, 1],
    spr_event: [20, 20, 0, 0, 1],
    spr_dw_garden_enemyrush_topBG: [194, 107, 0, 0, 2],
    spr_fcastle_pink_flowerpot: [29, 30, 0, 0, 1],
    spr_swordarea: [40, 40, 0, 0, 1],
    spr_kakaw_idle: [40, 28, 0, 0, 3],
    spr_checker_pattern: [40, 40, 0, 0, 1],
    spr_yellow_sad_walk_left: [51, 37, 25, -34, 4],
    spr_flowery_walk_downleft: [22, 61, -3, 0, 4],
    spr_dw_flowerspot: [74, 20, 0, 0, 1],
    spr_blue_jail_flip: [49, 58, -3, -9, 5],
    spr_debug_ramarker: [21, 40, 0, -3, 4],
    spr_enemy_orange_walk_right: [31, 17, 0, 0, 4],
    spr_enemy_aqua_idle_fox: [50, 32, 10, -4, 8],
    spr_climb_booster: [180, 20, 90, 0, 12],
    spr_enemy_green_walk_right: [31, 48, 0, 0, 4],
    spr_plat_floortex_FRONT: [160, 160, 0, 0, 1],
    spr_plat_zengarden_rock3: [17, 7, 0, 0, 1],
    spr_yellow_point_right: [55, 71, -8, 0, 1],
    spr_aqua_walk_down: [20, 36, 0, 0, 4],
    spr_kris_stealth: [26, 34, 2, -3, 2],
    spr_pink_walk_up: [33, 44, 0, 0, 4],
    spr_yellow_up_dejected: [28, 70, 0, 0, 1],
    spr_plat_zengarden_rock4: [13, 4, 0, 0, 1],
    spr_dw_aquaplant_15: [12, 7, 0, 0, 1],
    spr_seth_battle: [33, 41, 0, 0, 1],
    spr_zenpond_lily_3: [13, 7, 0, 0, 1],
    spr_zenpond_lily_2: [42, 14, 0, 0, 1],
    spr_gradient20: [20, 20, 0, 20, 1],
    spr_eventsmall: [9, 9, 0, 0, 1],
    spr_plat_zengarden_plant4: [20, 29, 0, 0, 1],
    spr_climb_climbabletile: [40, 40, 0, 0, 1],
    spr_platswap_statue: [40, 40, 20, 40, 5],
    spr_debug_sumarker: [26, 43, 0, -2, 4],
    spr_whitepx_10: [10, 10, 0, 0, 1],
    spr_blue_yellow_tug: [60, 70, -16, 4, 2],
    spr_blue_poses: [49, 66, 0, 0, 3],
    spr_newsunset_bg: [320, 280, 0, 0, 1],
    spr_blue_poses_r: [49, 66, 0, 0, 3],
    spr_debug_cameraregionpreview: [32, 24, 0, 0, 1],
    spr_plat_zengarden_rock2: [25, 12, 0, 0, 1],
    spr_dw_fcastle_jail_bars: [120, 200, 40, 200, 1],
    spr_plat_grid: [40, 40, 0, 0, 1],
    spr_zenpond_lily_1: [30, 17, 0, 0, 1],
    spr_climbstarter: [20, 20, 0, 0, 1],
    spr_dw_aquaplant_14: [39, 18, 0, 0, 1],
    spr_plat_thinplat: [40, 20, 0, 0, 1],
    spr_floortex_TILES_AlignBottom1TILE: [160, 160, 0, 120, 1],
    spr_yellow_dumbfounded: [34, 71, 0, 0, 1],
    spr_enemy_orange_walk_left: [31, 17, 0, 0, 4],
    spr_dw_dappled_light_overlay: [880, 1440, 0, 0, 1],
    spr_plat_bell: [20, 20, 10, 0, 1],
    spr_fcastle_tower_flower_big: [40, 40, 20, 20, 24]
  }
};
var U = {
  "ch1/room_castle_front": {
    w: 1000,
    h: 1000,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_darkcastle_event"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "Compatibility_Instances_Depth_-20",
      t: "I",
      d: -20,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 504, 500, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Instances_Depth_0",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Instances_Depth_100",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "Compatibility_Instances_Depth_100000",
      t: "I",
      d: 100000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "Compatibility_Instances_Depth_800000",
      t: "I",
      d: 800000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_castle_torch", 305, 204, 2, 2, 0, "spr_castle_torch", true, 0, 0, "FFFFFFFF"], ["obj_castle_torch", 420, 204, 2, 2, 0, "spr_castle_torch", true, 0, 0, "FFFFFFFF"], ["obj_castle_torch", 592, 204, 2, 2, 0, "spr_castle_torch", true, 0, 0, "FFFFFFFF"], ["obj_castle_torch", 704, 204, 2, 2, 0, "spr_castle_torch", true, 0, 0, "FFFFFFFF"], ["obj_castle_torch", 308, 40, 2, 2, 0, "spr_castle_torch", true, 0, 0, "FFFFFFFF"], ["obj_castle_torch", 704, 40, 2, 2, 0, "spr_castle_torch", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Tiles_Depth_990000",
      t: "A",
      d: 990000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      lt: [["bg_tiles_castle", 460, 360, 40, 280, 120, 120, 990000, 1, 1]]
    }, {
      n: "Compatibility_Tiles_Depth_1000000",
      t: "A",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      lt: [["bg_tiles_castle", 240, 440, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 240, 360, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 280, 400, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 280, 480, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 320, 440, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 320, 360, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 360, 400, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 360, 480, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 360, 520, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 400, 520, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 600, 560, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 440, 480, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 600, 480, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 560, 440, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 440, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 480, 440, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 440, 440, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 400, 440, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 240, 320, 80, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 280, 320, 80, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 320, 320, 80, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 360, 320, 80, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 400, 320, 80, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 440, 320, 80, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 480, 320, 80, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 320, 80, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 560, 320, 80, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 600, 320, 80, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 640, 320, 80, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 680, 320, 80, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 720, 320, 80, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 760, 320, 80, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 800, 320, 120, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 800, 360, 120, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 800, 400, 120, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 800, 440, 120, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 800, 480, 120, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 200, 480, 40, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 200, 440, 40, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 200, 400, 40, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 200, 360, 40, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 200, 320, 40, 40, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 400, 360, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 440, 360, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 480, 360, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 360, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 560, 360, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 640, 360, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 680, 480, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 640, 520, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 640, 440, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 720, 440, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 760, 480, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 760, 400, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 720, 360, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 680, 400, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 600, 400, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 560, 400, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 400, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 480, 400, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 440, 400, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 240, -40, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 280, -40, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 400, 480, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 360, 440, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 400, 400, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 320, 400, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 320, 480, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 280, 440, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 600, 440, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 640, 480, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 640, 400, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 680, 440, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 720, 480, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 720, 400, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 240, 400, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 240, 480, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 760, 440, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 600, 360, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 680, 360, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 760, 360, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 360, 360, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 280, 360, 0, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 480, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 480, 520, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 560, 80, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 200, 600, 40, 120, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 200, 560, 40, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 200, 520, 40, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 240, 600, 80, 120, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 280, 600, 80, 120, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 320, 600, 80, 120, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 680, 600, 80, 120, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 720, 600, 80, 120, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 760, 600, 80, 120, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 800, 600, 120, 120, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 800, 560, 120, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 800, 520, 120, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 360, 720, 40, 120, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 360, 680, 40, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 360, 640, 40, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 640, 720, 120, 120, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 640, 680, 120, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 640, 640, 120, 80, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 400, 720, 80, 120, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 600, 720, 80, 120, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 440, 760, 40, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 440, 800, 40, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 440, 840, 40, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 440, 880, 40, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 440, 920, 40, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 440, 960, 40, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 560, 760, 120, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 560, 800, 120, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 560, 840, 120, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 560, 880, 120, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 560, 920, 120, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 560, 960, 120, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 480, 760, 80, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 480, 800, 80, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 480, 840, 80, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 480, 880, 80, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 480, 920, 80, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 480, 960, 80, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 960, 80, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 920, 80, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 880, 80, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 840, 80, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 800, 80, 0, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 760, 80, 0, 40, 40, 1000000, 1, 1]]
    }, {
      n: "Compatibility_Background_0_bg_darkcastle_front",
      t: "B",
      d: 2147483500,
      v: true,
      xo: 190,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: ["bg_darkcastle_front", true, false, false, false, false, "FFFFFFFF", 0, 15, "FPS"]
    }, {
      n: "Compatibility_Colour",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch1/room_forest_fightsusie": {
    w: 1240,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_susieandlancer_event"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "Compatibility_Instances_Depth_-20",
      t: "I",
      d: -20,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 700, 195, 2.222222, 2.105263, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Instances_Depth_0",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_npc_room", 800, 50, 2.352941, 2, 0, "spr_npc_puzzlepiece", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Instances_Depth_100",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "Compatibility_Instances_Depth_900000",
      t: "I",
      d: 900000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_shortcut_door", 945, 15, 2, 2, 0, "spr_shortcut_door", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Instances_Depth_950000",
      t: "I",
      d: 950000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "Compatibility_Tiles_Depth_990000",
      t: "A",
      d: 990000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      lt: [["bg_darkforest_tiles", 1120, 40, 0, 280, 40, 160, 990000, 1, 1], ["bg_darkforest_tiles", 1120, 320, 0, 280, 40, 80, 990000, 1, 1], ["bg_darkforest_tiles", 200, 320, 120, 280, 40, 80, 990000, 1, 1], ["bg_darkforest_tiles", 120, 280, 40, 240, 120, 40, 990000, 1, 1], ["bg_darkforest_tiles", 40, 280, 40, 240, 80, 40, 990000, 1, 1], ["bg_darkforest_tiles", -40, 280, 40, 240, 80, 40, 990000, 1, 1], ["bg_darkforest_tiles", 200, 360, 40, 240, 80, 40, 990000, 1, 1], ["bg_darkforest_tiles", 280, 360, 40, 240, 80, 40, 990000, 1, 1], ["bg_darkforest_tiles", 360, 360, 40, 240, 80, 40, 990000, 1, 1], ["bg_darkforest_tiles", 440, 360, 40, 240, 80, 40, 990000, 1, 1], ["bg_darkforest_tiles", 520, 360, 40, 240, 80, 40, 990000, 1, 1], ["bg_darkforest_tiles", 600, 360, 40, 240, 80, 40, 990000, 1, 1], ["bg_darkforest_tiles", 680, 360, 40, 240, 80, 40, 990000, 1, 1], ["bg_darkforest_tiles", 760, 360, 40, 240, 80, 40, 990000, 1, 1], ["bg_darkforest_tiles", 840, 360, 40, 240, 80, 40, 990000, 1, 1], ["bg_darkforest_tiles", 920, 360, 40, 240, 80, 40, 990000, 1, 1], ["bg_darkforest_tiles", 1000, 360, 40, 240, 80, 40, 990000, 1, 1], ["bg_darkforest_tiles", 1080, 360, 40, 240, 80, 40, 990000, 1, 1], ["bg_darkforest_tiles", 1120, 280, 0, 240, 120, 40, 990000, 1, 1], ["bg_darkforest_tiles", 240, 40, 120, 280, 40, 160, 990000, 1, 1]]
    }, {
      n: "Compatibility_Tiles_Depth_1000000",
      t: "A",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      lt: [["bg_darkforest_tiles", 0, 200, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 40, 200, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 120, 200, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 160, 200, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 200, 200, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 240, 200, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 80, 200, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 320, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 360, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 400, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 440, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 480, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 520, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 560, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 600, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 640, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 680, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 720, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 760, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 800, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 840, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 880, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 920, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 960, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1000, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1040, 120, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1120, 200, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1160, 200, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1200, 200, 40, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 0, 240, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 80, 240, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 40, 240, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 120, 240, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 160, 240, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 200, 240, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 240, 240, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 320, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 360, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 400, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 440, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 520, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 560, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 600, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 480, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 640, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 680, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 720, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 760, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 800, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 840, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 880, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 920, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 960, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1000, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1040, 320, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1120, 240, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1200, 240, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1160, 240, 40, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1080, 280, 80, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1080, 160, 80, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 280, 160, 0, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 280, 280, 0, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 280, 320, 0, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 280, 120, 0, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1080, 120, 80, 120, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1080, 320, 80, 200, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 280, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 360, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 320, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 320, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 360, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 400, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 440, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 480, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 520, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 560, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 600, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 640, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 680, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 720, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 760, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 800, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 840, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 880, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 920, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 960, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1000, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1040, 160, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1080, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1040, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1000, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 960, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 920, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 880, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 840, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 800, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 760, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 720, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 680, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 640, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 600, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 560, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 520, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 480, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 440, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 400, 200, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 280, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1040, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1080, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1000, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 960, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 920, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 880, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 840, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 800, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 760, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 720, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 680, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 640, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 600, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 560, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 520, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 480, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 440, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 400, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 360, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 320, 240, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 320, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 360, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 400, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 440, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 480, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 520, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 560, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 600, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 640, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 680, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 720, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 760, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 800, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 840, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 880, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 920, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 960, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1000, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 1040, 280, 40, 160, 40, 40, 1000000, 1, 1], ["bg_darkforest_tiles", 120, 320, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 40, 320, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", -40, 320, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", -40, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 40, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 120, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 200, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 280, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 360, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 440, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 520, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 600, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 680, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 760, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 840, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 920, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 1000, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 1080, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 1160, 400, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 0, 40, 40, 280, 80, 160, 1000000, 1, 1], ["bg_darkforest_tiles", 80, 40, 40, 280, 80, 160, 1000000, 1, 1], ["bg_darkforest_tiles", 160, 40, 40, 280, 80, 160, 1000000, 1, 1], ["bg_darkforest_tiles", 240, -40, 40, 280, 80, 160, 1000000, 1, 1], ["bg_darkforest_tiles", 320, -40, 40, 280, 80, 160, 1000000, 1, 1], ["bg_darkforest_tiles", 400, -40, 40, 280, 80, 160, 1000000, 1, 1], ["bg_darkforest_tiles", 480, -40, 40, 280, 80, 160, 1000000, 1, 1], ["bg_darkforest_tiles", 560, -40, 40, 280, 80, 160, 1000000, 1, 1], ["bg_darkforest_tiles", 0, -40, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 80, -40, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 160, -40, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 640, -40, 40, 280, 80, 160, 1000000, 1, 1], ["bg_darkforest_tiles", 720, -40, 40, 280, 80, 160, 1000000, 1, 1], ["bg_darkforest_tiles", 800, -40, 40, 280, 80, 160, 1000000, 1, 1], ["bg_darkforest_tiles", 880, -40, 120, 280, 40, 160, 1000000, 1, 1], ["bg_darkforest_tiles", 1040, -40, 0, 280, 40, 160, 1000000, 1, 1], ["bg_darkforest_tiles", 1080, -40, 40, 280, 80, 160, 1000000, 1, 1], ["bg_darkforest_tiles", 1160, 40, 40, 280, 80, 160, 1000000, 1, 1], ["bg_darkforest_tiles", 1160, -40, 40, 280, 80, 80, 1000000, 1, 1], ["bg_darkforest_tiles", 1160, 320, 40, 280, 80, 80, 1000000, 1, 1]]
    }, {
      n: "Compatibility_Colour",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch1/room_cc_prisonlancer": {
    w: 2000,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_lancerbattle2_event"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "Compatibility_Instances_Depth_-20",
      t: "I",
      d: -20,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 520, 180, 1, 1, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Instances_Depth_0",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_darkcontroller", 200, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Instances_Depth_100",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "Compatibility_Instances_Depth_1000",
      t: "I",
      d: 1000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_lancerbattle2_event", 1400, 200, 2, 2, 0, "spr_lancer_battle", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Tiles_Depth_950000",
      t: "A",
      d: 950000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      lt: [["bg_prisontiles2", 160, 120, 80, 0, 80, 40, 950000, 1, 1], ["bg_prisontiles2", 240, 80, 80, 40, 80, 120, 950000, 1, 1], ["bg_prisontiles2", 320, 80, 120, 40, 80, 120, 950000, 1, 1], ["bg_prisontiles2", 80, 160, 200, 120, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 80, 120, 200, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 80, 80, 200, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 80, 40, 200, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 120, 40, 240, 0, 160, 40, 950000, 1, 1], ["bg_prisontiles2", 440, 160, 280, 120, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 440, 120, 280, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 440, 80, 280, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 440, 40, 280, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 400, 80, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 400, 120, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 400, 160, 240, 120, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 440, 0, 120, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 80, 0, 40, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 120, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 160, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 200, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 240, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 280, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 320, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 360, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 400, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 400, 40, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 280, 40, 240, 0, 120, 40, 950000, 1, 1], ["bg_prisontiles2", 560, 160, 200, 120, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 560, 120, 200, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 560, 80, 200, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 560, 40, 200, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 720, 160, 240, 120, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 800, 160, 240, 120, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 840, 160, 240, 120, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 920, 160, 240, 120, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 960, 160, 240, 120, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1640, 160, 280, 120, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1640, 120, 280, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1640, 80, 280, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1640, 40, 280, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 720, 40, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 720, 80, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 720, 120, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 920, 40, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 960, 120, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 920, 120, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 920, 80, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 960, 80, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 760, 40, 200, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 760, 80, 200, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 760, 120, 200, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 760, 160, 200, 120, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 880, 160, 280, 120, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 880, 120, 280, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 880, 80, 280, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 880, 40, 280, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 800, 40, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 800, 80, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 800, 120, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 840, 120, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 840, 80, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 840, 40, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 600, 40, 240, 0, 120, 40, 950000, 1, 1], ["bg_prisontiles2", 1000, 40, 240, 0, 160, 40, 950000, 1, 1], ["bg_prisontiles2", 1160, 40, 240, 0, 160, 40, 950000, 1, 1], ["bg_prisontiles2", 1480, 40, 240, 0, 160, 40, 950000, 1, 1], ["bg_prisontiles2", 1000, 80, 40, 40, 80, 120, 950000, 1, 1], ["bg_prisontiles2", 1080, 80, 80, 40, 80, 120, 950000, 1, 1], ["bg_prisontiles2", 1160, 80, 80, 40, 80, 120, 950000, 1, 1], ["bg_prisontiles2", 1280, 80, 160, 40, 40, 120, 950000, 1, 1], ["bg_prisontiles2", 1240, 80, 120, 40, 40, 120, 950000, 1, 1], ["bg_prisontiles2", 1360, 80, 40, 40, 80, 120, 950000, 1, 1], ["bg_prisontiles2", 1440, 80, 80, 40, 80, 120, 950000, 1, 1], ["bg_prisontiles2", 1520, 80, 80, 40, 120, 120, 950000, 1, 1], ["bg_prisontiles2", 1320, 80, 360, 40, 40, 120, 950000, 1, 1], ["bg_prisontiles2", 960, 40, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 560, 0, 40, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 640, 80, 120, 40, 80, 120, 950000, 1, 1], ["bg_prisontiles2", 600, 80, 40, 40, 40, 120, 950000, 1, 1], ["bg_prisontiles2", 1320, 40, 240, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1360, 40, 280, 0, 120, 40, 950000, 1, 1], ["bg_prisontiles2", 600, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 640, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 680, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 720, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 760, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 800, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 840, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 880, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 920, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 960, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1000, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1040, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1080, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1120, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1160, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1200, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1240, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1280, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1320, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1360, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1400, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1440, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1480, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1520, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1560, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1600, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1640, 0, 120, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1760, 160, 200, 120, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1760, 120, 200, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1760, 80, 200, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1760, 40, 200, 80, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1800, 80, 40, 40, 120, 120, 950000, 1, 1], ["bg_prisontiles2", 1920, 80, 80, 40, 80, 120, 950000, 1, 1], ["bg_prisontiles2", 1760, 0, 40, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1800, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1840, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1880, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1920, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1960, 0, 80, 400, 40, 40, 950000, 1, 1], ["bg_prisontiles2", 1800, 40, 240, 0, 160, 40, 950000, 1, 1], ["bg_prisontiles2", 1960, 40, 240, 0, 40, 40, 950000, 1, 1]]
    }, {
      n: "Compatibility_Tiles_Depth_1000000",
      t: "A",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      lt: [["bg_neoruins", 760, 160, 80, 160, 40, 40, 1000000, 1, 1], ["bg_neoruins", 760, 120, 80, 160, 40, 40, 1000000, 1, 1], ["bg_neoruins", 760, 80, 80, 160, 40, 40, 1000000, 1, 1], ["bg_neoruins", 800, 80, 80, 160, 40, 40, 1000000, 1, 1], ["bg_neoruins", 840, 80, 80, 160, 40, 40, 1000000, 1, 1], ["bg_neoruins", 880, 80, 80, 160, 40, 40, 1000000, 1, 1], ["bg_neoruins", 880, 120, 80, 160, 40, 40, 1000000, 1, 1], ["bg_neoruins", 880, 160, 80, 160, 40, 40, 1000000, 1, 1], ["bg_neoruins", 840, 160, 80, 160, 40, 40, 1000000, 1, 1], ["bg_neoruins", 800, 160, 80, 160, 40, 40, 1000000, 1, 1], ["bg_neoruins", 800, 120, 80, 160, 40, 40, 1000000, 1, 1], ["bg_neoruins", 840, 120, 80, 160, 40, 40, 1000000, 1, 1], ["bg_neoruins", 760, 40, 80, 160, 40, 40, 1000000, 1, 1], ["bg_neoruins", 800, 40, 80, 160, 40, 40, 1000000, 1, 1], ["bg_neoruins", 840, 40, 80, 160, 40, 40, 1000000, 1, 1], ["bg_neoruins", 880, 40, 80, 160, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 480, 0, 200, 240, 80, 80, 1000000, 1, 1], ["bg_prisontiles2", 480, 80, 200, 240, 80, 80, 1000000, 1, 1], ["bg_prisontiles2", 480, 160, 200, 240, 80, 40, 1000000, 1, 1], ["bg_prisontiles2", 1680, 0, 200, 240, 80, 80, 1000000, 1, 1], ["bg_prisontiles2", 1680, 80, 200, 240, 80, 80, 1000000, 1, 1], ["bg_prisontiles2", 1680, 160, 200, 280, 80, 40, 1000000, 1, 1], ["bg_prisontiles2", 120, 80, 40, 40, 160, 120, 1000000, 1, 1], ["bg_prisontiles2", 80, 200, 160, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 120, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 160, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 200, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 240, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 280, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 320, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 360, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 400, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 440, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 480, 200, 200, 200, 80, 40, 1000000, 1, 1], ["bg_prisontiles2", 560, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 600, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 640, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 680, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 720, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 760, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 800, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 840, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 880, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 920, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 960, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1000, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1040, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1080, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1120, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1160, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1200, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1240, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1280, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1320, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1360, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1400, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1440, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1480, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1520, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1560, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1600, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1640, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1680, 200, 200, 200, 80, 40, 1000000, 1, 1], ["bg_prisontiles2", 1760, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1800, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1840, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1880, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1920, 200, 200, 400, 40, 40, 1000000, 1, 1], ["bg_prisontiles2", 1960, 200, 200, 400, 40, 40, 1000000, 1, 1]]
    }, {
      n: "Compatibility_Colour",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch1/room_cc_joker": {
    w: 640,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_jokerbattleevent"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "Compatibility_Instances_Depth_-20",
      t: "I",
      d: -20,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 40, 240, 2.222222, 2.105263, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Instances_Depth_0",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Instances_Depth_10000",
      t: "I",
      d: 10000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_jokerbattleevent", 440, 160, 2, 2, 0, "spr_joker_main", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Instances_Depth_600000",
      t: "I",
      d: 600000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_jokerbg_triangle_real", 40, 0, 1, 1, 0, "spr_event", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Colour",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch1/room_cc_6f": {
    w: 1440,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_rurus_checker_event"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "Compatibility_Instances_Depth_-20",
      t: "I",
      d: -20,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 200, 200, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Instances_Depth_0",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Instances_Depth_100",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "Compatibility_Instances_Depth_100000",
      t: "I",
      d: 100000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "Compatibility_Tiles_Depth_950000",
      t: "A",
      d: 950000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      lt: [["bg_cctiles", 160, 80, 120, 720, 120, 120, 950000, 1, 1], ["bg_cctiles", 1120, 80, 0, 840, 120, 160, 950000, 1, 1]]
    }, {
      n: "Compatibility_Tiles_Depth_1000000",
      t: "A",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      lt: [["bg_cctiles", 120, 200, 0, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 360, 120, 0, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 120, 240, 0, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 360, 320, 0, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1000, 320, 80, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1240, 240, 80, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1000, 120, 80, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1240, 200, 80, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1000, 280, 80, 40, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1000, 160, 80, 40, 40, 40, 1000000, 1, 1], ["bg_cctiles", 360, 280, 0, 40, 40, 40, 1000000, 1, 1], ["bg_cctiles", 360, 160, 0, 40, 40, 40, 1000000, 1, 1], ["bg_cctiles", 360, 200, 160, 40, 40, 40, 1000000, 1, 1], ["bg_cctiles", 360, 240, 160, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 160, 240, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 200, 240, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 240, 240, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 280, 240, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 320, 240, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 440, 320, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 480, 320, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 520, 320, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 560, 320, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 400, 320, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 600, 320, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 640, 320, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 680, 320, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 720, 320, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 760, 320, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 800, 320, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 840, 320, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 880, 320, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 920, 320, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 960, 320, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1040, 240, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1080, 240, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1120, 240, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1160, 240, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1200, 240, 40, 80, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1040, 200, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1080, 200, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1120, 200, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1160, 200, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1200, 200, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 400, 120, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 440, 120, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 480, 120, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 520, 120, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 560, 120, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 600, 120, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 640, 120, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 680, 120, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 720, 120, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 760, 120, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 800, 120, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 840, 120, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 880, 120, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 920, 120, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 960, 120, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 160, 200, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 200, 200, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 240, 200, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 280, 200, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 320, 200, 40, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1000, 200, 120, 40, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1000, 240, 120, 0, 40, 40, 1000000, 1, 1], ["bg_cctiles", 120, 160, 0, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 120, 120, 0, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 120, 80, 0, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 120, 40, 0, 120, 40, 40, 1000000, 1, 1], ["bg_cctiles", 160, 40, 40, 120, 40, 40, 1000000, 1, 1], ["bg_cctiles", 200, 40, 40, 120, 40, 40, 1000000, 1, 1], ["bg_cctiles", 240, 40, 40, 120, 40, 40, 1000000, 1, 1], ["bg_cctiles", 280, 40, 40, 120, 40, 40, 1000000, 1, 1], ["bg_cctiles", 360, 80, 0, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 360, 40, 0, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 360, 0, 0, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 320, 40, 80, 120, 40, 40, 1000000, 1, 1], ["bg_cctiles", 320, 80, 80, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 320, 120, 80, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 320, 160, 80, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1000, 80, 80, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1000, 40, 80, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1000, 0, 80, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1040, 160, 0, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1040, 120, 0, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1040, 80, 0, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1040, 40, 0, 120, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1080, 40, 40, 120, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1120, 40, 40, 120, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1160, 40, 40, 120, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1200, 40, 40, 120, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1240, 40, 80, 120, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1240, 80, 80, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1240, 120, 80, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1240, 160, 80, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1240, 0, 80, 40, 40, 40, 1000000, 1, 1], ["bg_cctiles", 1040, 0, 0, 40, 40, 40, 1000000, 1, 1], ["bg_cctiles", 120, 0, 0, 40, 40, 40, 1000000, 1, 1], ["bg_cctiles", 320, 0, 80, 40, 40, 40, 1000000, 1, 1], ["bg_cctiles", 440, 40, 200, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 560, 40, 200, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 680, 40, 200, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 800, 40, 200, 160, 40, 40, 1000000, 1, 1], ["bg_cctiles", 920, 40, 200, 160, 40, 40, 1000000, 1, 1]]
    }, {
      n: "Compatibility_Colour",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch1/room_cc_kingbattle": {
    w: 2000,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_kingcutscene"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "Compatibility_Instances_Depth_-20",
      t: "I",
      d: -20,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 120, 160, 2.222222, 2.105263, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Instances_Depth_-10",
      t: "I",
      d: -10,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_npc_facing", 1600, 100, 2, 2, 0, "spr_placeholder", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Instances_Depth_0",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_npc_room", 740, 80, 2, 2, 0, "spr_npc_puzzlepiece", true, 0, 0, "FFFFFFFF"], ["obj_npc_room", 820, 80, 2, 2, 0, "spr_npc_puzzlepiece", true, 0, 0, "FFFFFFFF"], ["obj_npc_room", 940, 80, 2, 2, 0, "spr_npc_puzzlepiece", true, 0, 0, "FFFFFFFF"], ["obj_npc_room", 1020, 80, 2, 2, 0, "spr_npc_puzzlepiece", true, 0, 0, "FFFFFFFF"], ["obj_npc_room", 1220, 130, 2, 2, 0, "spr_npc_puzzlepiece", true, 0, 0, "FFFFFFFF"], ["obj_npc_room", 840, 214, 2, 2, 0, "spr_npc_puzzlepiece", true, 0, 0, "FFFFFFFF"], ["obj_npc_room", 940, 270, 2, 2, 0, "spr_npc_puzzlepiece", true, 0, 0, "FFFFFFFF"], ["obj_npc_room", 240, 80, 2, 2, 0, "spr_npc_puzzlepiece", true, 0, 0, "FFFFFFFF"], ["obj_npc_room", 398, 112, 2, 2, 0, "spr_npc_puzzlepiece", true, 0, 0, "FFFFFFFF"], ["obj_npc_room", 522, 132, 2, 2, 0, "spr_npc_puzzlepiece", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Instances_Depth_100",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "Compatibility_Instances_Depth_950000",
      t: "I",
      d: 950000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_kingcutscene", 80, 0, 8, 4, 0, "spr_event", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Compatibility_Tiles_Depth_1000000",
      t: "A",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      lt: [["bg_tiles_castle", 280, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 320, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 360, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 360, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 320, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 240, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 200, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 160, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 120, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 80, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 40, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 0, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 120, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 280, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 240, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 200, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 160, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 80, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 40, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 0, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 0, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 40, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 80, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 120, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 160, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 200, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 240, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 280, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 320, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 360, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 0, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 40, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 80, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 120, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 160, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 200, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 240, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 280, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 320, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 360, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 560, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 600, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 560, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 480, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 560, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 440, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 560, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 600, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 640, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 600, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 600, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 640, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 760, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 760, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 720, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 640, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 640, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 720, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 720, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 800, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 720, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 760, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 800, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 760, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 800, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 800, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 880, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 840, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 840, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 880, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 880, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 840, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 840, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 880, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1000, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1040, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1080, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1120, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1080, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1040, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1120, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1120, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1000, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1040, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1080, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1000, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1040, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1080, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1120, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1240, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1240, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1240, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1200, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1240, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1280, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1280, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1280, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1280, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 880, 120, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 840, 120, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 800, 120, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 760, 120, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 720, 120, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 720, 320, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 760, 320, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 800, 320, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 840, 320, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 880, 320, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1160, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1160, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1160, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1000, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 960, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1320, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1320, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1320, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1160, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1200, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1200, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1200, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1440, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1480, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1520, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1560, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1600, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1640, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1680, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1720, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1760, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1800, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1840, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1880, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1920, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1960, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1680, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1440, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1320, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1440, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1560, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1600, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1680, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1720, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1800, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1840, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1880, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1920, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1960, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1960, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1760, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1720, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1640, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1600, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1560, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1520, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1480, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1480, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1520, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1640, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1760, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1800, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1840, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1880, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1920, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1440, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1480, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1520, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1560, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1600, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1640, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1680, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1720, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1760, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1800, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1840, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1880, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1920, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1960, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1400, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1400, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1400, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1400, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1360, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1360, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1360, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1360, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 520, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 680, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 680, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 680, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 680, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 480, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 480, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 480, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 440, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 440, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 440, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 400, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 400, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 400, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 400, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 920, 320, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 920, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 920, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 920, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 920, 160, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 920, 120, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 960, 200, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 960, 240, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 960, 280, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1080, 120, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1040, 120, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1000, 120, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 960, 120, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 960, 320, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1000, 320, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1040, 320, 80, 200, 40, 40, 1000000, 1, 1], ["bg_tiles_castle", 1080, 320, 80, 200, 40, 40, 1000000, 1, 1]]
    }, {
      n: "Compatibility_Colour",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch2/room_dw_cyber_rollercoaster": {
    w: 1780,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_ch2_scene11a"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 26, 342, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_ch2_scene11a_bg", 40, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "Tiles_1",
      t: "T",
      d: 200,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_cyber_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 20,
      items: 8,
      fl: 66666,
      cells: [0, 11, 43, 1, 11, 43, 2, 11, 43, 3, 11, 43, 4, 11, 43, 5, 11, 43, 6, 11, 43, 7, 11, 43, 8, 11, 43, 9, 11, 43, 10, 11, 43, 11, 11, 43, 12, 11, 43, 13, 11, 43, 14, 11, 43, 15, 11, 43, 16, 11, 44],
      anim: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 30, 30, 30, 30, 30, 30, 30, 30, 31, 31, 31, 31, 31, 31, 31, 31, 32, 32, 32, 32, 32, 32, 32, 32, 33, 33, 33, 33, 33, 33, 33, 33, 34, 34, 34, 34, 34, 34, 34, 34, 35, 35, 35, 35, 35, 35, 35, 35, 36, 36, 36, 36, 36, 36, 36, 36, 37, 37, 37, 37, 37, 37, 37, 37, 38, 38, 38, 38, 38, 38, 38, 38, 39, 39, 39, 39, 39, 39, 39, 39, 40, 40, 40, 40, 40, 40, 40, 40, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 43, 43, 43, 43, 43, 43, 43, 43, 44, 44, 44, 44, 44, 44, 44, 44, 45, 45, 45, 45, 45, 45, 45, 45, 46, 46, 46, 46, 46, 46, 46, 46, 47, 47, 47, 47, 47, 47, 47, 47, 48, 48, 48, 48, 48, 48, 48, 48, 49, 49, 49, 49, 49, 49, 49, 49, 50, 50, 50, 50, 50, 50, 50, 50, 51, 51, 51, 51, 51, 51, 51, 51, 52, 52, 52, 52, 52, 52, 52, 52, 53, 53, 53, 53, 53, 53, 53, 53, 54, 54, 54, 54, 54, 54, 54, 54, 55, 55, 55, 55, 55, 55, 55, 55, 56, 56, 56, 56, 56, 56, 56, 56, 57, 57, 57, 57, 57, 57, 57, 57, 58, 58, 58, 58, 58, 58, 58, 58, 59, 59, 59, 59, 59, 59, 59, 59, 60, 60, 60, 60, 60, 60, 60, 60, 61, 61, 61, 61, 61, 61, 61, 61, 62, 62, 62, 62, 62, 62, 62, 62, 63, 63, 63, 63, 63, 63, 63, 63, 64, 64, 64, 64, 64, 64, 64, 64, 65, 65, 65, 65, 65, 65, 65, 65, 66, 66, 66, 66, 66, 66, 66, 66, 67, 67, 67, 67, 67, 67, 67, 67, 68, 68, 68, 68, 68, 68, 68, 68, 69, 69, 69, 69, 69, 69, 69, 69, 70, 70, 70, 70, 70, 70, 70, 70, 71, 71, 71, 71, 71, 71, 71, 71, 72, 72, 72, 72, 72, 72, 72, 72, 73, 73, 73, 73, 73, 73, 73, 73, 74, 74, 74, 74, 74, 74, 74, 74, 75, 75, 75, 75, 75, 75, 75, 75, 76, 76, 76, 76, 76, 76, 76, 76, 77, 77, 77, 77, 77, 77, 77, 77, 78, 78, 78, 78, 78, 78, 78, 78, 79, 79, 79, 79, 79, 79, 79, 79, 80, 80, 80, 80, 80, 80, 80, 80, 81, 81, 81, 81, 81, 81, 81, 81, 82, 82, 82, 82, 82, 82, 82, 82, 83, 83, 83, 83, 83, 83, 83, 83, 84, 84, 84, 84, 84, 84, 84, 84, 85, 85, 85, 85, 85, 85, 85, 85, 86, 86, 86, 86, 86, 86, 86, 86, 87, 87, 87, 87, 87, 87, 87, 87, 88, 88, 88, 88, 88, 88, 88, 88, 89, 89, 89, 89, 89, 89, 89, 89, 90, 90, 90, 90, 90, 90, 90, 90, 91, 91, 91, 91, 91, 91, 91, 91, 92, 92, 92, 92, 92, 92, 92, 92, 93, 93, 93, 93, 93, 93, 93, 93, 94, 94, 94, 94, 94, 94, 94, 94, 95, 95, 95, 95, 95, 95, 95, 95, 96, 96, 96, 96, 96, 96, 96, 96, 97, 97, 97, 97, 97, 97, 97, 97, 98, 98, 98, 98, 98, 98, 98, 98, 99, 99, 99, 99, 99, 99, 99, 99, 100, 100, 100, 100, 100, 100, 100, 100, 101, 101, 101, 101, 101, 101, 101, 101, 102, 102, 102, 102, 102, 102, 102, 102, 103, 103, 103, 103, 103, 103, 103, 103, 104, 104, 104, 104, 104, 104, 104, 104, 105, 106, 107, 108, 109, 110, 111, 105, 106, 107, 108, 109, 110, 111, 105, 105, 107, 108, 109, 110, 111, 105, 105, 106, 108, 109, 110, 111, 105, 105, 106, 107, 109, 110, 111, 105, 105, 106, 107, 108, 110, 111, 105, 105, 106, 107, 108, 109, 111, 105, 105, 106, 107, 108, 109, 110, 112, 112, 112, 112, 112, 112, 112, 112, 113, 113, 113, 113, 113, 113, 113, 113, 114, 114, 114, 114, 114, 114, 114, 114, 115, 115, 115, 115, 115, 115, 115, 115, 116, 116, 116, 116, 116, 116, 116, 116, 117, 117, 117, 117, 117, 117, 117, 117, 118, 119, 120, 121, 122, 123, 124, 125, 119, 120, 121, 122, 123, 124, 125, 118, 120, 121, 122, 123, 124, 125, 118, 119, 121, 122, 123, 124, 125, 118, 119, 120, 122, 123, 124, 125, 118, 119, 120, 121, 123, 124, 125, 118, 119, 120, 121, 122, 124, 125, 118, 119, 120, 121, 122, 123, 125, 118, 119, 120, 121, 122, 123, 124, 126, 126, 126, 126, 126, 126, 126, 126, 127, 127, 127, 127, 127, 127, 127, 127, 128, 128, 128, 128, 128, 128, 128, 128, 129, 129, 129, 129, 129, 129, 129, 129, 130, 130, 130, 130, 130, 130, 130, 130, 131, 131, 131, 131, 131, 131, 131, 131, 132, 132, 132, 132, 132, 132, 132, 132, 133, 133, 133, 133, 133, 133, 133, 133, 134, 134, 134, 134, 134, 134, 134, 134, 135, 135, 135, 135, 135, 135, 135, 135, 136, 136, 136, 136, 136, 136, 136, 136, 137, 137, 137, 137, 137, 137, 137, 137, 138, 138, 138, 138, 138, 138, 138, 138, 139, 139, 139, 139, 139, 139, 139, 139, 140, 140, 140, 140, 140, 140, 140, 140, 141, 141, 141, 141, 141, 141, 141, 141, 142, 142, 142, 142, 142, 142, 142, 142, 143, 143, 143, 143, 143, 143, 143, 143, 144, 145, 146, 147, 148, 149, 150, 144, 145, 146, 147, 148, 149, 150, 144, 144, 146, 147, 148, 149, 150, 144, 144, 145, 147, 148, 149, 150, 144, 144, 145, 146, 148, 149, 150, 144, 144, 145, 146, 147, 149, 150, 144, 144, 145, 146, 147, 148, 150, 144, 144, 145, 146, 147, 148, 149, 151, 151, 151, 151, 151, 151, 151, 151, 152, 152, 152, 152, 152, 152, 152, 152, 153, 153, 153, 153, 153, 153, 153, 153, 154, 154, 154, 154, 154, 154, 154, 154, 155, 155, 155, 155, 155, 155, 155, 155, 156, 156, 156, 156, 156, 156, 156, 156, 157, 158, 159, 160, 161, 162, 162, 162, 158, 159, 160, 161, 162, 162, 162, 157, 159, 160, 161, 162, 162, 162, 157, 158, 160, 161, 162, 162, 162, 157, 158, 159, 161, 162, 162, 162, 157, 158, 159, 160, 162, 162, 162, 157, 158, 159, 160, 161, 163, 163, 163, 163, 163, 163, 163, 163, 164, 164, 164, 164, 164, 164, 164, 164, 165, 165, 165, 165, 165, 165, 165, 165, 166, 166, 166, 166, 166, 166, 166, 166, 167, 167, 167, 167, 167, 167, 167, 167, 168, 168, 168, 168, 168, 168, 168, 168, 169, 169, 169, 169, 169, 169, 169, 169, 170, 171, 172, 173, 174, 175, 170, 170, 171, 172, 173, 174, 175, 170, 170, 170, 172, 173, 174, 175, 170, 170, 170, 171, 173, 174, 175, 170, 170, 170, 171, 172, 174, 175, 170, 170, 170, 171, 172, 173, 175, 170, 170, 170, 171, 172, 173, 174, 176, 176, 176, 176, 176, 176, 176, 176, 177, 177, 177, 177, 177, 177, 177, 177, 178, 178, 178, 178, 178, 178, 178, 178, 179, 179, 179, 179, 179, 179, 179, 179, 180, 180, 180, 180, 180, 180, 180, 180, 181, 181, 181, 181, 181, 181, 181, 181, 182, 182, 182, 182, 182, 182, 182, 182, 183, 184, 185, 186, 187, 188, 183, 184, 184, 185, 186, 187, 188, 183, 184, 183, 185, 186, 187, 188, 183, 184, 183, 184, 186, 187, 188, 183, 184, 183, 184, 185, 187, 188, 183, 184, 183, 184, 185, 186, 188, 183, 184, 183, 184, 185, 186, 187, 189, 189, 189, 189, 189, 189, 189, 189, 190, 190, 190, 190, 190, 190, 190, 190, 191, 191, 191, 191, 191, 191, 191, 191, 192, 192, 192, 192, 192, 192, 192, 192, 193, 193, 193, 193, 193, 193, 193, 193, 194, 194, 194, 194, 194, 194, 194, 194, 195, 195, 195, 195, 195, 195, 195, 195, 196, 197, 198, 199, 200, 201, 196, 197, 197, 198, 199, 200, 201, 196, 197, 196, 198, 199, 200, 201, 196, 197, 196, 197, 199, 200, 201, 196, 197, 196, 197, 198, 200, 201, 196, 197, 196, 197, 198, 199, 201, 196, 197, 196, 197, 198, 199, 200, 202, 202, 202, 202, 202, 202, 202, 202, 203, 203, 203, 203, 203, 203, 203, 203, 204, 204, 204, 204, 204, 204, 204, 204, 205, 205, 205, 205, 205, 205, 205, 205, 206, 206, 206, 206, 206, 206, 206, 206, 207, 207, 207, 207, 207, 207, 207, 207, 208, 208, 208, 208, 208, 208, 208, 208, 209, 209, 209, 209, 209, 209, 209, 209, 210, 210, 210, 210, 210, 210, 210, 210, 211, 211, 211, 211, 211, 211, 211, 211, 212, 212, 212, 212, 212, 212, 212, 212, 213, 213, 213, 213, 213, 213, 213, 213, 214, 214, 214, 214, 214, 214, 214, 214, 215, 215, 215, 215, 215, 215, 215, 215, 216, 216, 216, 216, 216, 216, 216, 216, 217, 217, 217, 217, 217, 217, 217, 217, 218, 218, 218, 218, 218, 218, 218, 218, 219, 219, 219, 219, 219, 219, 219, 219, 220, 220, 220, 220, 220, 220, 220, 220, 221, 221, 221, 221, 221, 221, 221, 221, 222, 222, 222, 222, 222, 222, 222, 222, 223, 223, 223, 223, 223, 223, 223, 223, 224, 224, 224, 224, 224, 224, 224, 224, 225, 225, 225, 225, 225, 225, 225, 225, 226, 226, 226, 226, 226, 226, 226, 226, 227, 227, 227, 227, 227, 227, 227, 227, 228, 228, 228, 228, 228, 228, 228, 228, 229, 229, 229, 229, 229, 229, 229, 229, 230, 230, 230, 230, 230, 230, 230, 230, 231, 231, 231, 231, 231, 231, 231, 231, 232, 232, 232, 232, 232, 232, 232, 232, 233, 233, 233, 233, 233, 233, 233, 233, 234, 234, 234, 234, 234, 234, 234, 234, 235, 235, 235, 235, 235, 235, 235, 235, 236, 236, 236, 236, 236, 236, 236, 236, 237, 237, 237, 237, 237, 237, 237, 237, 238, 238, 238, 238, 238, 238, 238, 238, 239, 239, 239, 239, 239, 239, 239, 239, 240, 240, 240, 240, 240, 240, 240, 240, 241, 241, 241, 241, 241, 241, 241, 241, 242, 242, 242, 242, 242, 242, 242, 242, 243, 243, 243, 243, 243, 243, 243, 243, 244, 244, 244, 244, 244, 244, 244, 244, 245, 245, 245, 245, 245, 245, 245, 245, 246, 246, 246, 246, 246, 246, 246, 246, 247, 247, 247, 247, 247, 247, 247, 247, 248, 248, 248, 248, 248, 248, 248, 248, 249, 249, 249, 249, 249, 249, 249, 249, 250, 250, 250, 250, 250, 250, 250, 250, 251, 251, 251, 251, 251, 251, 251, 251, 252, 252, 252, 252, 252, 252, 252, 252, 253, 253, 253, 253, 253, 253, 253, 253, 254, 254, 254, 254, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 256, 256, 256, 256, 256, 256, 256, 256, 257, 257, 257, 257, 257, 257, 257, 257, 258, 258, 258, 258, 258, 258, 258, 258, 259, 259, 259, 259, 259, 259, 259, 259, 260, 260, 260, 260, 260, 260, 260, 260, 261, 261, 261, 261, 261, 261, 261, 261, 262, 262, 262, 262, 262, 262, 262, 262, 263, 263, 263, 263, 263, 263, 263, 263, 264, 264, 264, 264, 264, 264, 264, 264, 265, 265, 265, 265, 265, 265, 265, 265, 266, 266, 266, 266, 266, 266, 266, 266, 267, 267, 267, 267, 267, 267, 267, 267, 268, 268, 268, 268, 268, 268, 268, 268, 269, 269, 269, 269, 269, 269, 269, 269, 270, 270, 270, 270, 270, 270, 270, 270, 271, 271, 271, 271, 271, 271, 271, 271, 272, 272, 272, 272, 272, 272, 272, 272, 273, 273, 273, 273, 273, 273, 273, 273, 274, 274, 274, 274, 274, 274, 274, 274, 275, 275, 275, 275, 275, 275, 275, 275, 276, 276, 276, 276, 276, 276, 276, 276, 277, 277, 277, 277, 277, 277, 277, 277, 278, 278, 278, 278, 278, 278, 278, 278, 279, 279, 279, 279, 279, 279, 279, 279, 280, 280, 280, 280, 280, 280, 280, 280, 281, 281, 281, 281, 281, 281, 281, 281, 282, 282, 282, 282, 282, 282, 282, 282, 283, 283, 283, 283, 283, 283, 283, 283, 284, 284, 284, 284, 284, 284, 284, 284, 285, 285, 285, 285, 285, 285, 285, 285, 286, 286, 286, 286, 286, 286, 286, 286, 287, 287, 287, 287, 287, 287, 287, 287, 288, 288, 288, 288, 288, 288, 288, 288, 289, 289, 289, 289, 289, 289, 289, 289, 290, 290, 290, 290, 290, 290, 290, 290, 291, 291, 291, 291, 291, 291, 291, 291, 292, 292, 292, 292, 292, 292, 292, 292, 293, 293, 293, 293, 293, 293, 293, 293, 294, 294, 294, 294, 294, 294, 294, 294, 295, 295, 295, 295, 295, 295, 295, 295, 296, 296, 296, 296, 296, 296, 296, 296, 297, 297, 297, 297, 297, 297, 297, 297, 298, 298, 298, 298, 298, 298, 298, 298, 299, 299, 299, 299, 299, 299, 299, 299, 300, 300, 300, 300, 300, 300, 300, 300, 301, 301, 301, 301, 301, 301, 301, 301, 302, 302, 302, 302, 302, 302, 302, 302, 303, 303, 303, 303, 303, 303, 303, 303, 304, 304, 304, 304, 304, 304, 304, 304, 305, 305, 305, 305, 305, 305, 305, 305, 306, 306, 306, 306, 306, 306, 306, 306, 307, 307, 307, 307, 307, 307, 307, 307, 308, 308, 308, 308, 308, 308, 308, 308, 309, 309, 309, 309, 309, 309, 309, 309, 310, 310, 310, 310, 310, 310, 310, 310, 311, 311, 311, 311, 311, 311, 311, 311, 312, 312, 312, 312, 312, 312, 312, 312, 313, 313, 313, 313, 313, 313, 313, 313, 314, 314, 314, 314, 314, 314, 314, 314, 315, 315, 315, 315, 315, 315, 315, 315, 316, 316, 316, 316, 316, 316, 316, 316, 317, 317, 317, 317, 317, 317, 317, 317, 318, 318, 318, 318, 318, 318, 318, 318, 319, 319, 319, 319, 319, 319, 319, 319, 320, 320, 320, 320, 320, 320, 320, 320, 321, 321, 321, 321, 321, 321, 321, 321, 322, 322, 322, 322, 322, 322, 322, 322, 323, 323, 323, 323, 323, 323, 323, 323, 324, 324, 324, 324, 324, 324, 324, 324, 325, 325, 325, 325, 325, 325, 325, 325, 326, 326, 326, 326, 326, 326, 326, 326, 327, 327, 327, 327, 327, 327, 327, 327, 328, 328, 328, 328, 328, 328, 328, 328, 329, 329, 329, 329, 329, 329, 329, 329, 330, 330, 330, 330, 330, 330, 330, 330, 331, 331, 331, 331, 331, 331, 331, 331, 332, 332, 332, 332, 332, 332, 332, 332, 333, 333, 333, 333, 333, 333, 333, 333, 334, 334, 334, 334, 334, 334, 334, 334, 335, 335, 335, 335, 335, 335, 335, 335, 336, 336, 336, 336, 336, 336, 336, 336, 337, 337, 337, 337, 337, 337, 337, 337, 338, 338, 338, 338, 338, 338, 338, 338, 339, 339, 339, 339, 339, 339, 339, 339, 340, 340, 340, 340, 340, 340, 340, 340, 341, 341, 341, 341, 341, 341, 341, 341, 342, 342, 342, 342, 342, 342, 342, 342, 343, 343, 343, 343, 343, 343, 343, 343, 344, 344, 344, 344, 344, 344, 344, 344, 345, 345, 345, 345, 345, 345, 345, 345, 346, 346, 346, 346, 346, 346, 346, 346, 347, 347, 347, 347, 347, 347, 347, 347, 348, 348, 348, 348, 348, 348, 348, 348, 349, 349, 349, 349, 349, 349, 349, 349, 350, 350, 350, 350, 350, 350, 350, 350, 351, 351, 351, 351, 351, 351, 351, 351, 352, 352, 352, 352, 352, 352, 352, 352, 353, 353, 353, 353, 353, 353, 353, 353, 354, 354, 354, 354, 354, 354, 354, 354, 355, 355, 355, 355, 355, 355, 355, 355, 356, 356, 356, 356, 356, 356, 356, 356, 357, 357, 357, 357, 357, 357, 357, 357, 358, 358, 358, 358, 358, 358, 358, 358, 359, 359, 359, 359, 359, 359, 359, 359, 360, 360, 360, 360, 360, 360, 360, 360, 361, 361, 361, 361, 361, 361, 361, 361, 362, 362, 362, 362, 362, 362, 362, 362, 363, 363, 363, 363, 363, 363, 363, 363, 364, 364, 364, 364, 364, 364, 364, 364, 365, 365, 365, 365, 365, 365, 365, 365, 366, 366, 366, 366, 366, 366, 366, 366, 367, 367, 367, 367, 367, 367, 367, 367, 368, 368, 368, 368, 368, 368, 368, 368, 369, 369, 369, 369, 369, 369, 369, 369, 370, 370, 370, 370, 370, 370, 370, 370, 371, 371, 371, 371, 371, 371, 371, 371, 372, 372, 372, 372, 372, 372, 372, 372, 373, 373, 373, 373, 373, 373, 373, 373, 374, 374, 374, 374, 374, 374, 374, 374, 375, 375, 375, 375, 375, 375, 375, 375, 376, 376, 376, 376, 376, 376, 376, 376, 377, 377, 377, 377, 377, 377, 377, 377, 378, 378, 378, 378, 378, 378, 378, 378, 379, 379, 379, 379, 379, 379, 379, 379, 380, 380, 380, 380, 380, 380, 380, 380, 381, 381, 381, 381, 381, 381, 381, 381, 382, 382, 382, 382, 382, 382, 382, 382, 383, 383, 383, 383, 383, 383, 383, 383, 384, 384, 384, 384, 384, 384, 384, 384, 385, 385, 385, 385, 385, 385, 385, 385, 386, 386, 386, 386, 386, 386, 386, 386, 387, 387, 387, 387, 387, 387, 387, 387, 388, 388, 388, 388, 388, 388, 388, 388, 389, 389, 389, 389, 389, 389, 389, 389, 390, 390, 390, 390, 390, 390, 390, 390, 391, 391, 391, 391, 391, 391, 391, 391, 392, 392, 392, 392, 392, 392, 392, 392, 393, 393, 393, 393, 393, 393, 393, 393, 394, 394, 394, 394, 394, 394, 394, 394, 395, 395, 395, 395, 395, 395, 395, 395, 396, 396, 396, 396, 396, 396, 396, 396, 397, 397, 397, 397, 397, 397, 397, 397, 398, 398, 398, 398, 398, 398, 398, 398, 399, 399, 399, 399, 399, 399, 399, 399, 400, 400, 400, 400, 400, 400, 400, 400, 401, 401, 401, 401, 401, 401, 401, 401, 402, 402, 402, 402, 402, 402, 402, 402, 403, 403, 403, 403, 403, 403, 403, 403, 404, 404, 404, 404, 404, 404, 404, 404, 405, 405, 405, 405, 405, 405, 405, 405, 406, 406, 406, 406, 406, 406, 406, 406, 407, 407, 407, 407, 407, 407, 407, 407, 408, 408, 408, 408, 408, 408, 408, 408, 409, 409, 409, 409, 409, 409, 409, 409, 410, 410, 410, 410, 410, 410, 410, 410, 411, 411, 411, 411, 411, 411, 411, 411, 412, 412, 412, 412, 412, 412, 412, 412, 413, 413, 413, 413, 413, 413, 413, 413, 414, 414, 414, 414, 414, 414, 414, 414, 415, 415, 415, 415, 415, 415, 415, 415]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch2/room_dw_city_berdly": {
    w: 960,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_ch2_city_berdly"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 420, 96, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_ch2_city_berdly", -40, 80, 1, 1, 0, "spr_event", true, 0, 0, "FFFFFFFF"], ["obj_weirdroute_manipulator", -80, 0, 1, 1, 0, "spr_berdly_ice", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "TILES_Alley_Building_Glitch",
      t: "T",
      d: 900000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_city_alley_buildings_glitch_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 8,
      items: 4,
      fl: 1000000,
      cells: [5, 0, 16, 7, 0, 24, 19, 0, 64, 23, 0, 8, 5, 1, 36, 14, 1, 60, 17, 1, 52, 23, 1, 36, 0, 4, 8, 3, 7, 48, 20, 7, 8, 23, 7, 24, 7, 9, 56, 16, 9, 64, 20, 9, 64, 10, 10, 64],
      anim: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 10, 11, 9, 10, 11, 8, 10, 11, 8, 9, 11, 8, 9, 10, 12, 13, 14, 15, 13, 14, 15, 12, 14, 15, 12, 13, 15, 12, 13, 14, 16, 17, 18, 19, 17, 18, 19, 16, 18, 19, 16, 17, 19, 16, 17, 18, 20, 21, 22, 23, 21, 22, 23, 20, 22, 23, 20, 21, 23, 20, 21, 22, 24, 25, 26, 27, 25, 26, 27, 24, 26, 27, 24, 25, 27, 24, 25, 26, 28, 29, 30, 31, 29, 30, 31, 28, 30, 31, 28, 29, 31, 28, 29, 30, 32, 33, 34, 35, 33, 34, 35, 32, 34, 35, 32, 33, 35, 32, 33, 34, 36, 37, 38, 39, 37, 38, 39, 36, 38, 39, 36, 37, 39, 36, 37, 38, 40, 41, 42, 43, 41, 42, 43, 40, 42, 43, 40, 41, 43, 40, 41, 42, 44, 45, 46, 47, 45, 46, 47, 44, 46, 47, 44, 45, 47, 44, 45, 46, 48, 49, 50, 51, 49, 50, 51, 48, 50, 51, 48, 49, 51, 48, 49, 50, 52, 53, 54, 55, 53, 54, 55, 52, 54, 55, 52, 53, 55, 52, 53, 54, 56, 57, 58, 59, 57, 58, 59, 56, 58, 59, 56, 57, 59, 56, 57, 58, 60, 61, 62, 63, 61, 62, 63, 60, 62, 63, 60, 61, 63, 60, 61, 62, 64, 65, 66, 67, 65, 66, 67, 64, 66, 67, 64, 65, 67, 64, 65, 66, 68, 69, 70, 71, 69, 70, 71, 68, 70, 71, 68, 69, 71, 68, 69, 70]
    }, {
      n: "TILES_Alley_Sidewalk_Glitch",
      t: "T",
      d: 900100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_city_alley_animated_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 6,
      items: 4,
      fl: 1000000,
      cells: [6, 3, 6, 23, 3, 6],
      anim: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 7, 8, 6, 7, 8, 6, 6, 8, 6, 6, 7, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 13, 14, 12, 13, 14, 12, 12, 14, 12, 12, 13, 15, 16, 17, 15, 16, 17, 15, 15, 17, 15, 15, 16, 18, 19, 20, 18, 19, 20, 18, 18, 20, 18, 18, 19, 21, 22, 23, 21, 22, 23, 21, 21, 23, 21, 21, 22, 24, 24, 24, 24, 25, 25, 25, 25, 26, 26, 26, 26, 27, 28, 29, 27, 28, 29, 27, 27, 29, 27, 27, 28, 30, 31, 32, 30, 31, 32, 30, 30, 32, 30, 30, 31]
    }, {
      n: "TILES_Alley_Sidewalk",
      t: "T",
      d: 900200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_city_alley_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 10,
      items: 1,
      fl: 66666,
      cells: [4, 3, 53, 5, 3, 45, 6, 3, 48, 7, 3, 45, 8, 3, 48, 9, 3, 45, 10, 3, 61, 13, 3, 53, 14, 3, 45, 15, 3, 48, 16, 3, 45, 17, 3, 48, 18, 3, 45, 19, 3, 48, 20, 3, 45, 21, 3, 48, 22, 3, 45, 23, 3, 48, 4, 4, 59, 5, 4, 59, 6, 4, 59, 7, 4, 59, 8, 4, 59, 9, 4, 59, 10, 4, 59, 13, 4, 59, 14, 4, 59, 15, 4, 59, 16, 4, 59, 17, 4, 59, 18, 4, 59, 19, 4, 59, 20, 4, 59, 21, 4, 59, 22, 4, 59, 23, 4, 59]
    }, {
      n: "TILES",
      t: "T",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_city_alleyway_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 19,
      items: 1,
      fl: 66666,
      cells: [1, 0, 260, 2, 0, 127, 3, 0, 127, 4, 0, 258, 10, 0, 260, 11, 0, 126, 12, 0, 127, 13, 0, 258, 20, 0, 260, 21, 0, 258, 22, 0, 259, 23, 0, 259, 1, 1, 260, 2, 1, 127, 3, 1, 127, 4, 1, 273, 5, 1, 274, 6, 1, 274, 7, 1, 274, 8, 1, 274, 9, 1, 274, 10, 1, 275, 11, 1, 126, 12, 1, 127, 13, 1, 273, 14, 1, 274, 15, 1, 274, 16, 1, 274, 17, 1, 274, 18, 1, 274, 19, 1, 274, 20, 1, 275, 21, 1, 273, 22, 1, 274, 23, 1, 274, 0, 2, 244, 1, 2, 245, 2, 2, 127, 3, 2, 127, 4, 2, 303, 5, 2, 304, 6, 2, 304, 7, 2, 304, 8, 2, 304, 9, 2, 304, 10, 2, 305, 11, 2, 126, 12, 2, 127, 13, 2, 303, 14, 2, 304, 15, 2, 304, 16, 2, 304, 17, 2, 304, 18, 2, 304, 19, 2, 304, 20, 2, 305, 21, 2, 306, 22, 2, 304, 23, 2, 304, 1, 3, 260, 2, 3, 127, 3, 3, 127, 4, 3, 52, 5, 3, 52, 6, 3, 52, 7, 3, 52, 8, 3, 52, 9, 3, 52, 10, 3, 52, 11, 3, 126, 12, 3, 127, 13, 3, 52, 14, 3, 52, 15, 3, 52, 16, 3, 52, 17, 3, 52, 18, 3, 52, 19, 3, 52, 20, 3, 52, 1, 4, 260, 2, 4, 127, 3, 4, 143, 4, 4, 143, 5, 4, 143, 6, 4, 143, 7, 4, 143, 8, 4, 143, 9, 4, 143, 10, 4, 143, 11, 4, 143, 12, 4, 143, 13, 4, 143, 14, 4, 143, 15, 4, 143, 16, 4, 143, 17, 4, 143, 18, 4, 143, 19, 4, 143, 20, 4, 143, 1, 5, 260, 2, 5, 112, 3, 5, 112, 4, 5, 126, 5, 5, 112, 6, 5, 112, 7, 5, 126, 8, 5, 112, 9, 5, 112, 10, 5, 126, 11, 5, 126, 12, 5, 112, 13, 5, 126, 14, 5, 112, 15, 5, 112, 16, 5, 126, 17, 5, 126, 18, 5, 112, 19, 5, 126, 20, 5, 112, 21, 5, 142, 22, 5, 142, 23, 5, 142, 0, 6, 244, 1, 6, 244, 2, 6, 244, 3, 6, 244, 4, 6, 245, 5, 6, 127, 6, 6, 127, 7, 6, 127, 8, 6, 127, 9, 6, 127, 10, 6, 127, 11, 6, 127, 12, 6, 127, 13, 6, 127, 14, 6, 127, 15, 6, 127, 16, 6, 127, 17, 6, 127, 18, 6, 142, 19, 6, 246, 20, 6, 244, 21, 6, 244, 22, 6, 244, 23, 6, 244, 1, 7, 259, 2, 7, 259, 3, 7, 259, 4, 7, 260, 5, 7, 216, 6, 7, 217, 7, 7, 218, 8, 7, 217, 9, 7, 218, 10, 7, 217, 11, 7, 218, 12, 7, 217, 13, 7, 218, 14, 7, 217, 15, 7, 218, 16, 7, 217, 17, 7, 218, 18, 7, 217, 19, 7, 258, 20, 7, 259, 21, 7, 259, 22, 7, 259, 23, 7, 259, 3, 8, 243, 4, 8, 244, 5, 8, 244, 6, 8, 244, 7, 8, 244, 8, 8, 244, 9, 8, 244, 10, 8, 244, 11, 8, 244, 12, 8, 244, 13, 8, 244, 14, 8, 244, 15, 8, 244, 16, 8, 244, 17, 8, 244, 18, 8, 245, 19, 8, 243, 20, 8, 244, 21, 8, 244, 22, 8, 244, 23, 8, 244, 3, 9, 258, 4, 9, 259, 5, 9, 259, 6, 9, 259, 8, 9, 259, 13, 9, 259, 17, 9, 259, 18, 9, 260, 19, 9, 258, 3, 10, 258, 4, 10, 259, 5, 10, 259, 6, 10, 259, 7, 10, 259, 8, 10, 259, 9, 10, 259, 10, 10, 259, 11, 10, 259, 12, 10, 259, 13, 10, 259, 14, 10, 259, 15, 10, 259, 16, 10, 259, 17, 10, 259, 18, 10, 260, 19, 10, 258, 3, 11, 258, 4, 11, 259, 5, 11, 259, 6, 11, 259, 15, 11, 259, 16, 11, 259, 18, 11, 260, 19, 11, 258]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch2/room_dw_city_spamton_alley": {
    w: 1280,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_ch2_city05"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 360, 218, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "TILES_Alley_Posters",
      t: "T",
      d: 990000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_city_alleyway_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 19,
      items: 1,
      fl: 66666,
      cells: [6, 2, 46, 7, 2, 47, 8, 2, 48, 10, 2, 46, 11, 2, 47, 12, 2, 48, 13, 2, 274, 14, 2, 274, 15, 2, 208, 20, 2, 16, 21, 2, 17, 22, 2, 18, 6, 3, 61, 7, 3, 62, 8, 3, 63, 10, 3, 61, 11, 3, 62, 12, 3, 63, 20, 3, 31, 21, 3, 32, 22, 3, 33]
    }, {
      n: "TILES_City_Animated",
      t: "T",
      d: 990100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_city_sidewalk_animated_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 11,
      items: 4,
      fl: 166666,
      cells: [25, 0, 64, 26, 0, 64],
      anim: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 6, 7, 5, 6, 7, 4, 6, 7, 4, 5, 7, 4, 5, 6, 8, 9, 10, 11, 9, 10, 11, 8, 10, 11, 8, 9, 11, 8, 9, 10, 12, 13, 14, 15, 13, 14, 15, 12, 14, 15, 12, 13, 15, 12, 13, 14, 16, 17, 18, 19, 17, 18, 19, 16, 18, 19, 16, 17, 19, 16, 17, 18, 20, 21, 22, 23, 21, 22, 23, 20, 22, 23, 20, 21, 23, 20, 21, 22, 24, 25, 26, 27, 25, 26, 27, 24, 26, 27, 24, 25, 27, 24, 25, 26, 28, 29, 30, 31, 29, 30, 31, 28, 30, 31, 28, 29, 31, 28, 29, 30, 32, 33, 34, 35, 33, 34, 35, 32, 34, 35, 32, 33, 35, 32, 33, 34, 36, 36, 36, 36, 37, 37, 37, 37, 38, 38, 38, 38, 39, 39, 39, 39, 40, 41, 42, 43, 41, 42, 43, 40, 42, 43, 40, 41, 43, 40, 41, 42, 44, 44, 44, 44, 45, 45, 45, 45, 46, 46, 46, 46, 47, 47, 47, 47, 48, 49, 50, 51, 49, 50, 51, 48, 50, 51, 48, 49, 51, 48, 49, 50, 52, 52, 52, 52, 53, 53, 53, 53, 54, 54, 54, 54, 55, 55, 55, 55, 56, 57, 58, 59, 57, 58, 59, 56, 58, 59, 56, 57, 59, 56, 57, 58, 60, 60, 60, 60, 61, 61, 61, 61, 62, 62, 62, 62, 63, 63, 63, 63, 64, 65, 66, 67, 65, 66, 67, 64, 66, 67, 64, 65, 67, 64, 65, 66, 68, 68, 68, 68, 69, 69, 69, 69, 70, 70, 70, 70, 71, 71, 71, 71, 72, 73, 74, 75, 73, 74, 75, 72, 74, 75, 72, 73, 75, 72, 73, 74, 76, 76, 76, 76, 77, 77, 77, 77, 78, 78, 78, 78, 79, 79, 79, 79, 80, 81, 82, 83, 81, 82, 83, 80, 82, 83, 80, 81, 83, 80, 81, 82, 84, 84, 84, 84, 85, 85, 85, 85, 86, 86, 86, 86, 87, 87, 87, 87, 88, 89, 90, 91, 89, 90, 91, 88, 90, 91, 88, 89, 91, 88, 89, 90, 92, 92, 92, 92, 93, 93, 93, 93, 94, 94, 94, 94, 95, 95, 95, 95, 96, 97, 98, 99, 97, 98, 99, 96, 98, 99, 96, 97, 99, 96, 97, 98, 100, 101, 102, 103, 101, 102, 103, 100, 102, 103, 100, 101, 103, 100, 101, 102, 104, 104, 104, 104, 105, 105, 105, 105, 106, 106, 106, 106, 107, 107, 107, 107, 108, 109, 110, 111, 109, 110, 111, 108, 110, 111, 108, 109, 111, 108, 109, 110, 112, 112, 112, 112, 113, 113, 113, 113, 114, 114, 114, 114, 115, 115, 115, 115, 116, 117, 118, 119, 117, 118, 119, 116, 118, 119, 116, 117, 119, 116, 117, 118, 120, 120, 120, 120, 121, 121, 121, 121, 122, 122, 122, 122, 123, 123, 123, 123, 124, 125, 126, 127, 125, 126, 127, 124, 126, 127, 124, 125, 127, 124, 125, 126, 128, 128, 128, 128, 129, 129, 129, 129, 130, 130, 130, 130, 131, 131, 131, 131]
    }, {
      n: "TILES_Alley_Glitch",
      t: "T",
      d: 990200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_city_alley_animated_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 6,
      items: 4,
      fl: 1000000,
      cells: [7, 5, 6, 21, 5, 6],
      anim: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 7, 8, 6, 7, 8, 6, 6, 8, 6, 6, 7, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 13, 14, 12, 13, 14, 12, 12, 14, 12, 12, 13, 15, 16, 17, 15, 16, 17, 15, 15, 17, 15, 15, 16, 18, 19, 20, 18, 19, 20, 18, 18, 20, 18, 18, 19, 21, 22, 23, 21, 22, 23, 21, 21, 23, 21, 21, 22, 24, 24, 24, 24, 25, 25, 25, 25, 26, 26, 26, 26, 27, 28, 29, 27, 28, 29, 27, 27, 29, 27, 27, 28, 30, 31, 32, 30, 31, 32, 30, 30, 32, 30, 30, 31]
    }, {
      n: "Tiles_1",
      t: "T",
      d: 990300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_city_splotches_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 5,
      items: 1,
      fl: 66666,
      cells: [3, 1, 29, 18, 2, 17, 24, 2, 19, 5, 3, 15, 4, 4, 27, 26, 6, 29, 7, 7, 27, 22, 7, 27]
    }, {
      n: "TILES_City_Sidewalk",
      t: "T",
      d: 990400,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_city_street_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 10,
      items: 1,
      fl: 66666,
      cells: [25, 0, 60, 26, 0, 58, 25, 1, 59, 26, 1, 59, 25, 2, 74, 26, 2, 74, 25, 3, 73, 26, 3, 73, 25, 4, 73, 26, 4, 73]
    }, {
      n: "TILES_Alley_Sidewalk",
      t: "T",
      d: 990500,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_city_alley_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 10,
      items: 1,
      fl: 66666,
      cells: [5, 5, 53, 6, 5, 45, 7, 5, 48, 8, 5, 45, 9, 5, 48, 10, 5, 45, 11, 5, 48, 12, 5, 45, 13, 5, 48, 14, 5, 45, 15, 5, 48, 16, 5, 45, 17, 5, 48, 18, 5, 45, 19, 5, 48, 20, 5, 45, 21, 5, 48, 22, 5, 45, 23, 5, 48, 24, 5, 51, 5, 6, 59, 6, 6, 59, 7, 6, 59, 8, 6, 59, 9, 6, 59, 10, 6, 59, 11, 6, 59, 12, 6, 59, 13, 6, 59, 14, 6, 59, 15, 6, 59, 16, 6, 59, 17, 6, 59, 18, 6, 59, 19, 6, 59, 20, 6, 59, 21, 6, 59, 22, 6, 59, 23, 6, 59, 24, 6, 59]
    }, {
      n: "TILES_City_Rooftops",
      t: "T",
      d: 990600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_city_street_edges_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 14,
      items: 1,
      fl: 66666,
      cells: [27, 0, 26, 28, 0, 27, 29, 0, 28, 30, 0, 53, 31, 0, 39, 27, 1, 39, 28, 1, 40, 29, 1, 104, 30, 1, 105, 31, 1, 106, 27, 2, 53, 28, 2, 53, 29, 2, 117, 30, 2, 118, 31, 2, 26, 27, 3, 114, 28, 3, 115, 29, 3, 116, 30, 3, 53, 31, 3, 39, 27, 4, 127, 28, 4, 128, 29, 4, 129, 30, 4, 53, 31, 4, 53]
    }, {
      n: "TILES_Alley_Buildings",
      t: "T",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_city_alleyway_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 19,
      items: 1,
      fl: 66666,
      cells: [2, 0, 260, 3, 0, 201, 4, 0, 202, 5, 0, 258, 24, 0, 260, 25, 0, 127, 26, 0, 126, 2, 1, 260, 3, 1, 201, 4, 1, 202, 5, 1, 258, 24, 1, 260, 25, 1, 127, 26, 1, 126, 2, 2, 260, 3, 2, 201, 4, 2, 202, 5, 2, 273, 6, 2, 274, 7, 2, 289, 8, 2, 289, 9, 2, 289, 10, 2, 289, 11, 2, 289, 12, 2, 289, 13, 2, 289, 14, 2, 289, 15, 2, 274, 16, 2, 289, 17, 2, 274, 18, 2, 289, 19, 2, 274, 20, 2, 274, 21, 2, 274, 22, 2, 274, 23, 2, 274, 24, 2, 275, 25, 2, 127, 26, 2, 126, 2, 3, 260, 3, 3, 201, 4, 3, 202, 5, 3, 288, 6, 3, 289, 7, 3, 289, 8, 3, 289, 9, 3, 289, 10, 3, 289, 11, 3, 289, 12, 3, 289, 13, 3, 289, 14, 3, 289, 15, 3, 289, 16, 3, 289, 17, 3, 289, 18, 3, 289, 19, 3, 289, 20, 3, 289, 21, 3, 289, 22, 3, 289, 23, 3, 289, 24, 3, 290, 25, 3, 127, 26, 3, 126, 2, 4, 260, 3, 4, 201, 4, 4, 202, 5, 4, 303, 6, 4, 304, 7, 4, 304, 8, 4, 304, 9, 4, 304, 10, 4, 304, 11, 4, 304, 12, 4, 304, 13, 4, 304, 14, 4, 304, 15, 4, 304, 16, 4, 304, 17, 4, 304, 18, 4, 304, 19, 4, 304, 20, 4, 304, 21, 4, 304, 22, 4, 304, 23, 4, 304, 24, 4, 305, 25, 4, 127, 26, 4, 126, 2, 5, 260, 3, 5, 201, 4, 5, 202, 5, 5, 99, 6, 5, 94, 7, 5, 93, 8, 5, 94, 9, 5, 93, 10, 5, 94, 11, 5, 93, 12, 5, 94, 13, 5, 93, 14, 5, 94, 15, 5, 93, 16, 5, 92, 17, 5, 93, 18, 5, 94, 19, 5, 93, 20, 5, 94, 21, 5, 93, 22, 5, 94, 23, 5, 93, 24, 5, 94, 25, 5, 127, 26, 5, 126, 27, 5, 243, 28, 5, 244, 29, 5, 244, 30, 5, 244, 31, 5, 244, 2, 6, 260, 3, 6, 201, 4, 6, 202, 5, 6, 114, 6, 6, 115, 7, 6, 116, 8, 6, 117, 9, 6, 115, 10, 6, 116, 11, 6, 117, 12, 6, 115, 13, 6, 116, 14, 6, 117, 15, 6, 115, 16, 6, 116, 17, 6, 117, 18, 6, 115, 19, 6, 116, 20, 6, 117, 21, 6, 115, 22, 6, 116, 23, 6, 117, 24, 6, 109, 25, 6, 127, 26, 6, 126, 27, 6, 258, 0, 7, 244, 1, 7, 244, 2, 7, 245, 3, 7, 125, 4, 7, 126, 5, 7, 127, 6, 7, 127, 7, 7, 127, 8, 7, 127, 9, 7, 127, 10, 7, 127, 11, 7, 127, 12, 7, 127, 13, 7, 127, 14, 7, 127, 15, 7, 127, 16, 7, 127, 17, 7, 127, 18, 7, 127, 19, 7, 127, 20, 7, 127, 21, 7, 127, 22, 7, 127, 23, 7, 127, 24, 7, 127, 25, 7, 127, 26, 7, 127, 27, 7, 258, 2, 8, 260, 3, 8, 243, 4, 8, 244, 5, 8, 244, 6, 8, 244, 7, 8, 244, 8, 8, 244, 9, 8, 244, 10, 8, 244, 11, 8, 244, 12, 8, 245, 13, 8, 246, 14, 8, 244, 15, 8, 244, 16, 8, 244, 17, 8, 244, 18, 8, 244, 19, 8, 244, 20, 8, 244, 21, 8, 244, 22, 8, 244, 23, 8, 244, 24, 8, 244, 25, 8, 244, 26, 8, 245, 27, 8, 258, 2, 9, 260, 3, 9, 258, 12, 9, 260, 13, 9, 258, 26, 9, 260, 27, 9, 243, 28, 9, 244, 29, 9, 244, 30, 9, 244, 31, 9, 244, 2, 10, 260, 3, 10, 258, 12, 10, 260, 13, 10, 258, 26, 10, 260, 27, 10, 258, 2, 11, 260, 3, 11, 258, 12, 11, 260, 13, 11, 258, 26, 11, 260, 27, 11, 258]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch2/room_dw_mansion_b_east": {
    w: 2720,
    h: 960,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_ch2_sceneex2"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 1140, 216, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_ch2_sceneex2", 640, 200, 1, 1, 0, "spr_event", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "CAMERA_OBJECTS",
      t: "I",
      d: 100,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "ASSETS_Doors",
      t: "A",
      d: 100000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_mansion_basement_door", 1120, 80, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_mansion_basement_door", 120, 80, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "TILES_Edges",
      t: "T",
      d: 100100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_rounded_edges_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 8,
      items: 1,
      fl: 66666,
      cells: [2, 2, 20, 3, 2, 21, 4, 2, 21, 5, 2, 21, 6, 2, 21, 7, 2, 21, 8, 2, 21, 9, 2, 21, 10, 2, 21, 11, 2, 21, 12, 2, 21, 13, 2, 21, 14, 2, 21, 15, 2, 21, 16, 2, 21, 17, 2, 21, 18, 2, 21, 19, 2, 21, 20, 2, 21, 21, 2, 21, 22, 2, 21, 23, 2, 21, 24, 2, 21, 25, 2, 21, 26, 2, 21, 27, 2, 21, 28, 2, 21, 29, 2, 21, 30, 2, 21, 31, 2, 21, 32, 2, 21, 33, 2, 21, 34, 2, 21, 35, 2, 21, 36, 2, 21, 37, 2, 21, 38, 2, 21, 39, 2, 21, 40, 2, 22, 2, 3, 30, 40, 3, 32, 2, 4, 40, 5, 4, 41, 6, 4, 41, 7, 4, 41, 8, 4, 41, 9, 4, 41, 10, 4, 41, 11, 4, 41, 12, 4, 41, 13, 4, 41, 14, 4, 41, 15, 4, 41, 16, 4, 41, 17, 4, 41, 18, 4, 41, 19, 4, 41, 20, 4, 41, 21, 4, 41, 22, 4, 41, 23, 4, 41, 24, 4, 41, 25, 4, 41, 26, 4, 41, 27, 4, 41, 30, 4, 41, 31, 4, 41, 32, 4, 41, 33, 4, 41, 34, 4, 41, 35, 4, 41, 36, 4, 41, 37, 4, 41, 38, 4, 41, 39, 4, 41, 40, 4, 42, 2, 5, 20, 3, 5, 21, 4, 5, 21, 5, 5, 21, 6, 5, 21, 7, 5, 21, 8, 5, 21, 9, 5, 21, 10, 5, 21, 11, 5, 21, 12, 5, 21, 13, 5, 21, 14, 5, 21, 15, 5, 21, 16, 5, 21, 17, 5, 21, 18, 5, 21, 19, 5, 21, 20, 5, 21, 21, 5, 21, 22, 5, 21, 23, 5, 21, 24, 5, 21, 25, 5, 21, 26, 5, 21, 27, 5, 21, 28, 5, 21, 29, 5, 21, 30, 5, 21, 31, 5, 21, 32, 5, 21, 33, 5, 21, 34, 5, 21, 35, 5, 21, 36, 5, 21, 37, 5, 21, 38, 5, 21, 39, 5, 21, 40, 5, 22, 2, 6, 30, 40, 6, 32, 2, 7, 30, 40, 7, 32, 2, 8, 30, 40, 8, 32, 2, 9, 40, 3, 9, 41, 4, 9, 41, 5, 9, 41, 6, 9, 41, 9, 9, 41, 10, 9, 41, 11, 9, 41, 12, 9, 41, 13, 9, 41, 14, 9, 41, 15, 9, 41, 16, 9, 41, 17, 9, 41, 18, 9, 41, 19, 9, 41, 20, 9, 41, 21, 9, 41, 22, 9, 41, 23, 9, 41, 24, 9, 41, 25, 9, 41, 26, 9, 41, 27, 9, 41, 28, 9, 41, 29, 9, 41, 30, 9, 41, 31, 9, 41, 32, 9, 41, 33, 9, 41, 34, 9, 41, 35, 9, 41, 36, 9, 41, 37, 9, 41, 38, 9, 41, 39, 9, 41, 40, 9, 42, 7, 10, 16, 8, 10, 17, 7, 11, 16, 8, 11, 17, 7, 12, 16, 8, 12, 17, 7, 13, 16, 8, 13, 17, 7, 14, 16, 8, 14, 17, 7, 15, 16, 8, 15, 17, 7, 16, 16, 8, 16, 17, 7, 17, 16, 8, 17, 17, 7, 18, 16, 8, 18, 17, 7, 19, 16, 8, 19, 17, 0, 20, 21, 1, 20, 21, 2, 20, 21, 3, 20, 21, 4, 20, 21, 5, 20, 21, 6, 20, 21, 8, 20, 17, 0, 21, 41, 1, 21, 41, 2, 21, 41, 3, 21, 41, 4, 21, 41, 5, 21, 41, 6, 21, 41, 7, 21, 41, 8, 21, 42]
    }, {
      n: "TILES",
      t: "T",
      d: 100200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_spamton_basement_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 7,
      items: 1,
      fl: 66666,
      cells: [0, 2, 5, 1, 2, 5, 41, 2, 5, 42, 2, 5, 43, 2, 5, 44, 2, 5, 45, 2, 5, 46, 2, 5, 47, 2, 5, 48, 2, 4, 49, 2, 4, 50, 2, 4, 51, 2, 4, 52, 2, 4, 53, 2, 4, 54, 2, 4, 55, 2, 4, 56, 2, 4, 57, 2, 4, 58, 2, 4, 59, 2, 4, 60, 2, 4, 61, 2, 4, 62, 2, 4, 63, 2, 4, 64, 2, 4, 65, 2, 4, 66, 2, 4, 67, 2, 4, 0, 3, 5, 1, 3, 5, 2, 3, 48, 3, 3, 5, 4, 3, 5, 28, 3, 5, 29, 3, 5, 41, 3, 5, 42, 3, 5, 43, 3, 5, 44, 3, 5, 45, 3, 5, 46, 3, 5, 47, 3, 5, 48, 3, 4, 49, 3, 4, 50, 3, 4, 51, 3, 4, 52, 3, 4, 53, 3, 4, 54, 3, 4, 55, 3, 4, 56, 3, 4, 57, 3, 4, 58, 3, 4, 59, 3, 4, 60, 3, 4, 61, 3, 4, 62, 3, 4, 63, 3, 4, 64, 3, 4, 65, 3, 4, 66, 3, 4, 67, 3, 4, 0, 4, 5, 1, 4, 5, 2, 4, 48, 3, 4, 5, 4, 4, 5, 27, 4, 48, 28, 4, 5, 29, 4, 5, 41, 4, 5, 42, 4, 5, 43, 4, 5, 44, 4, 5, 45, 4, 5, 46, 4, 5, 47, 4, 5, 48, 4, 4, 49, 4, 4, 50, 4, 4, 51, 4, 4, 52, 4, 4, 53, 4, 4, 54, 4, 4, 55, 4, 4, 56, 4, 4, 57, 4, 4, 58, 4, 4, 59, 4, 4, 60, 4, 4, 61, 4, 4, 62, 4, 4, 63, 4, 4, 64, 4, 4, 65, 4, 4, 66, 4, 4, 67, 4, 4, 0, 5, 5, 1, 5, 5, 41, 5, 5, 42, 5, 5, 43, 5, 5, 44, 5, 5, 45, 5, 5, 46, 5, 5, 47, 5, 4, 48, 5, 4, 49, 5, 4, 50, 5, 4, 51, 5, 4, 52, 5, 4, 53, 5, 4, 54, 5, 4, 55, 5, 4, 56, 5, 4, 57, 5, 4, 58, 5, 4, 59, 5, 4, 60, 5, 4, 61, 5, 4, 62, 5, 4, 63, 5, 4, 64, 5, 4, 65, 5, 4, 66, 5, 4, 67, 5, 4, 0, 6, 5, 1, 6, 5, 41, 6, 5, 42, 6, 5, 43, 6, 5, 44, 6, 5, 45, 6, 5, 46, 6, 5, 47, 6, 4, 48, 6, 4, 49, 6, 4, 50, 6, 4, 51, 6, 4, 52, 6, 4, 53, 6, 4, 54, 6, 4, 55, 6, 4, 56, 6, 4, 57, 6, 4, 58, 6, 4, 59, 6, 4, 60, 6, 4, 61, 6, 4, 62, 6, 4, 63, 6, 4, 64, 6, 4, 65, 6, 4, 66, 6, 4, 67, 6, 4, 0, 7, 5, 1, 7, 5, 41, 7, 5, 42, 7, 5, 43, 7, 5, 44, 7, 5, 45, 7, 5, 46, 7, 5, 47, 7, 4, 48, 7, 4, 49, 7, 4, 50, 7, 4, 51, 7, 4, 52, 7, 4, 53, 7, 4, 54, 7, 4, 55, 7, 4, 56, 7, 4, 57, 7, 4, 58, 7, 4, 59, 7, 4, 60, 7, 4, 61, 7, 4, 62, 7, 4, 63, 7, 4, 64, 7, 4, 65, 7, 4, 66, 7, 4, 67, 7, 4, 0, 8, 5, 1, 8, 5, 41, 8, 5, 42, 8, 5, 43, 8, 5, 44, 8, 5, 45, 8, 5, 46, 8, 5, 47, 8, 4, 48, 8, 4, 49, 8, 4, 50, 8, 4, 51, 8, 4, 52, 8, 4, 53, 8, 4, 54, 8, 4, 55, 8, 4, 56, 8, 4, 57, 8, 4, 58, 8, 4, 59, 8, 4, 60, 8, 4, 61, 8, 4, 62, 8, 4, 63, 8, 4, 64, 8, 4, 65, 8, 4, 66, 8, 4, 67, 8, 4, 0, 9, 5, 1, 9, 5, 41, 9, 5, 42, 9, 5, 43, 9, 5, 44, 9, 5, 45, 9, 5, 46, 9, 5, 47, 9, 4, 48, 9, 4, 49, 9, 4, 50, 9, 4, 51, 9, 4, 52, 9, 4, 53, 9, 4, 54, 9, 4, 55, 9, 4, 56, 9, 4, 57, 9, 4, 58, 9, 4, 59, 9, 4, 60, 9, 4, 61, 9, 4, 62, 9, 4, 63, 9, 4, 64, 9, 4, 65, 9, 4, 66, 9, 4, 67, 9, 4, 7, 10, 29, 8, 10, 44, 47, 10, 4, 48, 10, 4, 49, 10, 4, 50, 10, 4, 51, 10, 4, 52, 10, 4, 55, 10, 4, 58, 10, 4, 7, 11, 38, 8, 11, 29, 55, 11, 4, 56, 11, 4, 7, 12, 29, 8, 12, 28, 7, 13, 29, 8, 13, 33, 7, 14, 28, 8, 14, 29, 7, 15, 38, 8, 15, 29, 7, 16, 29, 8, 16, 28, 7, 17, 32, 8, 17, 44, 7, 18, 29, 8, 18, 28, 7, 19, 38, 8, 19, 29, 0, 20, 28, 1, 20, 44, 2, 20, 45, 3, 20, 46, 4, 20, 28, 5, 20, 29, 6, 20, 28, 7, 20, 29, 8, 20, 29, 0, 21, 29, 1, 21, 33, 2, 21, 28, 3, 21, 29, 4, 21, 29, 5, 21, 29, 6, 21, 29, 7, 21, 29, 8, 21, 32]
    }, {
      n: "BG_Loop",
      t: "B",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: ["spr_dw_mansion_basement_loop", true, false, true, false, false, "FFFFFFFF", 0, 1, "FramesPerGameFrame"]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch2/room_dw_mansion_acid_tunnel_loop_rouxls": {
    w: 3200,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_ch2_scene21_loop"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 19, 193, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_gradientglow", 0, 200, 36, 2, 0, "spr_gradient20", true, 0, 0, "FFFFFFFF"], ["obj_gradientglow", 720, 80, 10, 2, 0, "spr_gradient20", true, 0, 0, "FFFFFFFF"], ["obj_gradientglow", 1240, 80, 10, 2, 0, "spr_gradient20", true, 0, 0, "FFFFFFFF"], ["obj_gradientglow", 2320, 120, 8.05, 2, 0, "spr_gradient20", true, 0, 0, "FFFFFFFF"], ["obj_gradientglow", 2560, 200, 6, 2, 0, "spr_gradient20", true, 0, 0, "FFFFFFFF"], ["obj_mansion_vase", 2720, 160, 2, 2, 0, "spr_dw_mansion_vase", true, 0, 0, "FFFFFFFF"], ["obj_mansion_vase", 2880, 160, 2, 2, 0, "spr_dw_mansion_vase", true, 0, 0, "FFFFFFFF"], ["obj_mansion_vase", 3040, 160, 2, 2, 0, "spr_dw_mansion_vase", true, 0, 0, "FFFFFFFF"], ["obj_gradientglow", 2080, 120, 6, 2, 0, "spr_gradient20", true, 0, 0, "FFFFFFFF"], ["obj_gradientglow", 1560, 120, 18, 2, 0, "spr_gradient20", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "TILES_Island_Path_Animated",
      t: "T",
      d: 990000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_acid_animated_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 15,
      items: 4,
      fl: 333333,
      cells: [24, 4, 104, 25, 4, 100, 28, 4, 168, 25, 5, 108, 28, 5, 36],
      anim: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 6, 7, 5, 6, 7, 4, 6, 7, 4, 5, 7, 4, 5, 6, 8, 9, 10, 11, 9, 10, 11, 8, 10, 11, 8, 9, 11, 8, 9, 10, 12, 13, 14, 15, 13, 14, 15, 12, 14, 15, 12, 13, 15, 12, 13, 14, 16, 17, 18, 19, 17, 18, 19, 16, 18, 19, 16, 17, 19, 16, 17, 18, 20, 21, 22, 23, 21, 22, 23, 20, 22, 23, 20, 21, 23, 20, 21, 22, 24, 25, 26, 27, 25, 26, 27, 24, 26, 27, 24, 25, 27, 24, 25, 26, 28, 29, 30, 31, 29, 30, 31, 28, 30, 31, 28, 29, 31, 28, 29, 30, 32, 33, 34, 35, 33, 34, 35, 32, 34, 35, 32, 33, 35, 32, 33, 34, 36, 37, 38, 39, 37, 38, 39, 36, 38, 39, 36, 37, 39, 36, 37, 38, 40, 41, 42, 43, 41, 42, 43, 40, 42, 43, 40, 41, 43, 40, 41, 42, 44, 45, 46, 47, 45, 46, 47, 44, 46, 47, 44, 45, 47, 44, 45, 46, 48, 49, 50, 51, 49, 50, 51, 48, 50, 51, 48, 49, 51, 48, 49, 50, 52, 53, 54, 55, 53, 54, 55, 52, 54, 55, 52, 53, 55, 52, 53, 54, 56, 57, 58, 59, 57, 58, 59, 56, 58, 59, 56, 57, 59, 56, 57, 58, 60, 61, 62, 63, 61, 62, 63, 60, 62, 63, 60, 61, 63, 60, 61, 62, 64, 65, 66, 67, 65, 66, 67, 64, 66, 67, 64, 65, 67, 64, 65, 66, 68, 69, 70, 71, 69, 70, 71, 68, 70, 71, 68, 69, 71, 68, 69, 70, 72, 73, 74, 75, 73, 74, 75, 72, 74, 75, 72, 73, 75, 72, 73, 74, 76, 77, 78, 79, 77, 78, 79, 76, 78, 79, 76, 77, 79, 76, 77, 78, 80, 81, 82, 83, 81, 82, 83, 80, 82, 83, 80, 81, 83, 80, 81, 82, 84, 85, 86, 87, 85, 86, 87, 84, 86, 87, 84, 85, 87, 84, 85, 86, 88, 89, 90, 91, 89, 90, 91, 88, 90, 91, 88, 89, 91, 88, 89, 90, 92, 93, 94, 95, 93, 94, 95, 92, 94, 95, 92, 93, 95, 92, 93, 94, 96, 97, 98, 99, 97, 98, 99, 96, 98, 99, 96, 97, 99, 96, 97, 98, 100, 101, 102, 103, 101, 102, 103, 100, 102, 103, 100, 101, 103, 100, 101, 102, 104, 105, 106, 107, 105, 106, 107, 104, 106, 107, 104, 105, 107, 104, 105, 106, 108, 109, 110, 111, 109, 110, 111, 108, 110, 111, 108, 109, 111, 108, 109, 110, 112, 113, 114, 115, 113, 114, 115, 112, 114, 115, 112, 113, 115, 112, 113, 114, 116, 117, 118, 119, 117, 118, 119, 116, 118, 119, 116, 117, 119, 116, 117, 118, 120, 120, 120, 120, 121, 121, 121, 121, 122, 122, 122, 122, 123, 123, 123, 123, 124, 124, 124, 124, 125, 125, 125, 125, 126, 126, 126, 126, 127, 127, 127, 127, 128, 128, 128, 128, 129, 129, 129, 129, 130, 130, 130, 130, 131, 131, 131, 131, 132, 132, 132, 132, 133, 133, 133, 133, 134, 134, 134, 134, 135, 135, 135, 135, 136, 136, 136, 136, 137, 137, 137, 137, 138, 138, 138, 138, 139, 139, 139, 139, 140, 140, 140, 140, 141, 141, 141, 141, 142, 142, 142, 142, 143, 143, 143, 143, 144, 145, 146, 147, 145, 146, 147, 144, 146, 147, 144, 145, 147, 144, 145, 146, 148, 148, 148, 148, 149, 149, 149, 149, 150, 150, 150, 150, 151, 151, 151, 151, 152, 152, 152, 152, 153, 153, 153, 153, 154, 154, 154, 154, 155, 155, 155, 155, 156, 156, 156, 156, 157, 157, 157, 157, 158, 158, 158, 158, 159, 159, 159, 159, 160, 161, 162, 163, 161, 162, 163, 160, 162, 163, 160, 161, 163, 160, 161, 162, 164, 165, 166, 167, 165, 166, 167, 164, 166, 167, 164, 165, 167, 164, 165, 166, 168, 169, 170, 171, 169, 170, 171, 168, 170, 171, 168, 169, 171, 168, 169, 170, 172, 173, 174, 175, 173, 174, 175, 172, 174, 175, 172, 173, 175, 172, 173, 174, 176, 176, 176, 176, 177, 177, 177, 177, 178, 178, 178, 178, 179, 179, 179, 179, 180, 180, 180, 180, 181, 181, 181, 181, 182, 182, 182, 182, 183, 183, 183, 183, 184, 184, 184, 184, 185, 185, 185, 185, 186, 186, 186, 186, 187, 187, 187, 187, 188, 188, 188, 188, 189, 189, 189, 189, 190, 190, 190, 190, 191, 191, 191, 191, 192, 193, 194, 195, 193, 194, 195, 192, 194, 195, 192, 193, 195, 192, 193, 194, 196, 197, 198, 199, 197, 198, 199, 196, 198, 199, 196, 197, 199, 196, 197, 198, 200, 201, 202, 203, 201, 202, 203, 200, 202, 203, 200, 201, 203, 200, 201, 202, 204, 205, 206, 207, 205, 206, 207, 204, 206, 207, 204, 205, 207, 204, 205, 206, 208, 209, 210, 211, 209, 210, 211, 208, 210, 211, 208, 209, 211, 208, 209, 210]
    }, {
      n: "TILES_Island_Path",
      t: "T",
      d: 990100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_acid_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 15,
      items: 1,
      fl: 66666,
      cells: [24, 4, 90, 25, 4, 35, 26, 4, 75, 27, 4, 92, 28, 4, 108, 26, 5, 75, 27, 5, 27, 28, 5, 79]
    }, {
      n: "TILES_Islands_Animated",
      t: "T",
      d: 990200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_acid_animated_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 15,
      items: 4,
      fl: 333333,
      cells: [22, 2, 72, 31, 2, 172, 22, 3, 88, 23, 3, 92, 30, 3, 48, 31, 3, 44, 35, 3, 88, 36, 3, 92, 38, 3, 48, 39, 3, 44, 40, 3, 64, 41, 3, 36, 42, 3, 32, 43, 3, 208, 45, 3, 64, 46, 3, 36, 47, 3, 88, 48, 3, 92, 51, 3, 48, 52, 3, 44, 53, 3, 204, 54, 3, 88, 55, 3, 92, 57, 3, 48, 58, 3, 44, 59, 3, 64, 60, 3, 36, 61, 3, 88, 62, 3, 92, 63, 3, 48, 23, 4, 96, 24, 4, 164, 25, 4, 164, 26, 4, 164, 27, 4, 164, 28, 4, 164, 29, 4, 164, 30, 4, 52, 36, 4, 96, 37, 4, 164, 38, 4, 52, 39, 4, 88, 40, 4, 92, 41, 4, 48, 42, 4, 44, 44, 4, 204, 45, 4, 92, 46, 4, 48, 47, 4, 44, 48, 4, 96, 49, 4, 164, 50, 4, 164, 51, 4, 52, 52, 4, 208, 55, 4, 96, 56, 4, 164, 57, 4, 52, 58, 4, 88, 59, 4, 92, 60, 4, 48, 61, 4, 44, 62, 4, 96, 63, 4, 52, 24, 5, 76, 25, 5, 76, 26, 5, 76, 27, 5, 76, 28, 5, 76, 29, 5, 76, 40, 5, 96, 41, 5, 52, 45, 5, 96, 46, 5, 52, 59, 5, 96, 60, 5, 52, 22, 6, 60, 23, 6, 64, 30, 6, 36, 22, 7, 88, 23, 7, 92, 30, 7, 48, 31, 7, 44, 23, 8, 96, 24, 8, 164, 25, 8, 164, 26, 8, 164, 27, 8, 164, 28, 8, 164, 29, 8, 164, 30, 8, 52],
      anim: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 6, 7, 5, 6, 7, 4, 6, 7, 4, 5, 7, 4, 5, 6, 8, 9, 10, 11, 9, 10, 11, 8, 10, 11, 8, 9, 11, 8, 9, 10, 12, 13, 14, 15, 13, 14, 15, 12, 14, 15, 12, 13, 15, 12, 13, 14, 16, 17, 18, 19, 17, 18, 19, 16, 18, 19, 16, 17, 19, 16, 17, 18, 20, 21, 22, 23, 21, 22, 23, 20, 22, 23, 20, 21, 23, 20, 21, 22, 24, 25, 26, 27, 25, 26, 27, 24, 26, 27, 24, 25, 27, 24, 25, 26, 28, 29, 30, 31, 29, 30, 31, 28, 30, 31, 28, 29, 31, 28, 29, 30, 32, 33, 34, 35, 33, 34, 35, 32, 34, 35, 32, 33, 35, 32, 33, 34, 36, 37, 38, 39, 37, 38, 39, 36, 38, 39, 36, 37, 39, 36, 37, 38, 40, 41, 42, 43, 41, 42, 43, 40, 42, 43, 40, 41, 43, 40, 41, 42, 44, 45, 46, 47, 45, 46, 47, 44, 46, 47, 44, 45, 47, 44, 45, 46, 48, 49, 50, 51, 49, 50, 51, 48, 50, 51, 48, 49, 51, 48, 49, 50, 52, 53, 54, 55, 53, 54, 55, 52, 54, 55, 52, 53, 55, 52, 53, 54, 56, 57, 58, 59, 57, 58, 59, 56, 58, 59, 56, 57, 59, 56, 57, 58, 60, 61, 62, 63, 61, 62, 63, 60, 62, 63, 60, 61, 63, 60, 61, 62, 64, 65, 66, 67, 65, 66, 67, 64, 66, 67, 64, 65, 67, 64, 65, 66, 68, 69, 70, 71, 69, 70, 71, 68, 70, 71, 68, 69, 71, 68, 69, 70, 72, 73, 74, 75, 73, 74, 75, 72, 74, 75, 72, 73, 75, 72, 73, 74, 76, 77, 78, 79, 77, 78, 79, 76, 78, 79, 76, 77, 79, 76, 77, 78, 80, 81, 82, 83, 81, 82, 83, 80, 82, 83, 80, 81, 83, 80, 81, 82, 84, 85, 86, 87, 85, 86, 87, 84, 86, 87, 84, 85, 87, 84, 85, 86, 88, 89, 90, 91, 89, 90, 91, 88, 90, 91, 88, 89, 91, 88, 89, 90, 92, 93, 94, 95, 93, 94, 95, 92, 94, 95, 92, 93, 95, 92, 93, 94, 96, 97, 98, 99, 97, 98, 99, 96, 98, 99, 96, 97, 99, 96, 97, 98, 100, 101, 102, 103, 101, 102, 103, 100, 102, 103, 100, 101, 103, 100, 101, 102, 104, 105, 106, 107, 105, 106, 107, 104, 106, 107, 104, 105, 107, 104, 105, 106, 108, 109, 110, 111, 109, 110, 111, 108, 110, 111, 108, 109, 111, 108, 109, 110, 112, 113, 114, 115, 113, 114, 115, 112, 114, 115, 112, 113, 115, 112, 113, 114, 116, 117, 118, 119, 117, 118, 119, 116, 118, 119, 116, 117, 119, 116, 117, 118, 120, 120, 120, 120, 121, 121, 121, 121, 122, 122, 122, 122, 123, 123, 123, 123, 124, 124, 124, 124, 125, 125, 125, 125, 126, 126, 126, 126, 127, 127, 127, 127, 128, 128, 128, 128, 129, 129, 129, 129, 130, 130, 130, 130, 131, 131, 131, 131, 132, 132, 132, 132, 133, 133, 133, 133, 134, 134, 134, 134, 135, 135, 135, 135, 136, 136, 136, 136, 137, 137, 137, 137, 138, 138, 138, 138, 139, 139, 139, 139, 140, 140, 140, 140, 141, 141, 141, 141, 142, 142, 142, 142, 143, 143, 143, 143, 144, 145, 146, 147, 145, 146, 147, 144, 146, 147, 144, 145, 147, 144, 145, 146, 148, 148, 148, 148, 149, 149, 149, 149, 150, 150, 150, 150, 151, 151, 151, 151, 152, 152, 152, 152, 153, 153, 153, 153, 154, 154, 154, 154, 155, 155, 155, 155, 156, 156, 156, 156, 157, 157, 157, 157, 158, 158, 158, 158, 159, 159, 159, 159, 160, 161, 162, 163, 161, 162, 163, 160, 162, 163, 160, 161, 163, 160, 161, 162, 164, 165, 166, 167, 165, 166, 167, 164, 166, 167, 164, 165, 167, 164, 165, 166, 168, 169, 170, 171, 169, 170, 171, 168, 170, 171, 168, 169, 171, 168, 169, 170, 172, 173, 174, 175, 173, 174, 175, 172, 174, 175, 172, 173, 175, 172, 173, 174, 176, 176, 176, 176, 177, 177, 177, 177, 178, 178, 178, 178, 179, 179, 179, 179, 180, 180, 180, 180, 181, 181, 181, 181, 182, 182, 182, 182, 183, 183, 183, 183, 184, 184, 184, 184, 185, 185, 185, 185, 186, 186, 186, 186, 187, 187, 187, 187, 188, 188, 188, 188, 189, 189, 189, 189, 190, 190, 190, 190, 191, 191, 191, 191, 192, 193, 194, 195, 193, 194, 195, 192, 194, 195, 192, 193, 195, 192, 193, 194, 196, 197, 198, 199, 197, 198, 199, 196, 198, 199, 196, 197, 199, 196, 197, 198, 200, 201, 202, 203, 201, 202, 203, 200, 202, 203, 200, 201, 203, 200, 201, 202, 204, 205, 206, 207, 205, 206, 207, 204, 206, 207, 204, 205, 207, 204, 205, 206, 208, 209, 210, 211, 209, 210, 211, 208, 210, 211, 208, 209, 211, 208, 209, 210]
    }, {
      n: "TILES_Islands",
      t: "T",
      d: 990300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_acid_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 15,
      items: 1,
      fl: 66666,
      cells: [23, 2, 145, 24, 2, 75, 25, 2, 75, 26, 2, 75, 27, 2, 75, 28, 2, 75, 29, 2, 75, 30, 2, 148, 45, 2, 129, 46, 2, 132, 23, 3, 153, 24, 3, 154, 25, 3, 154, 26, 3, 154, 27, 3, 154, 28, 3, 154, 29, 3, 154, 30, 3, 156, 36, 3, 34, 37, 3, 75, 38, 3, 36, 40, 3, 18, 41, 3, 20, 48, 3, 153, 49, 3, 154, 50, 3, 155, 51, 3, 156, 56, 3, 75, 23, 4, 161, 24, 4, 162, 25, 4, 163, 26, 4, 162, 27, 4, 163, 28, 4, 162, 29, 4, 163, 30, 4, 164, 40, 4, 34, 41, 4, 36, 44, 4, 152, 45, 4, 153, 46, 4, 156, 47, 4, 157, 48, 4, 161, 49, 4, 162, 50, 4, 163, 51, 4, 164, 23, 5, 129, 24, 5, 130, 25, 5, 130, 26, 5, 130, 27, 5, 130, 28, 5, 130, 29, 5, 130, 30, 5, 132, 45, 5, 161, 46, 5, 164, 24, 6, 138, 25, 6, 138, 26, 6, 138, 27, 6, 138, 28, 6, 138, 29, 6, 138, 31, 6, 141, 22, 7, 152, 23, 7, 153, 24, 7, 154, 25, 7, 154, 26, 7, 154, 27, 7, 154, 28, 7, 154, 29, 7, 154, 30, 7, 156, 31, 7, 157, 23, 8, 161, 24, 8, 162, 25, 8, 163, 26, 8, 162, 27, 8, 163, 28, 8, 162, 29, 8, 163, 30, 8, 164]
    }, {
      n: "TILES_Acid_Dock",
      t: "T",
      d: 990400,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_acid_fountain",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 10,
      items: 1,
      fl: 66666,
      cells: [18, 0, 68, 19, 0, 68, 20, 0, 68, 21, 0, 68, 22, 0, 68, 23, 0, 68, 24, 0, 68, 25, 0, 68, 26, 0, 68, 27, 0, 68, 28, 0, 68, 29, 0, 68, 30, 0, 68, 31, 0, 68, 32, 0, 68, 33, 0, 68, 34, 0, 68, 35, 0, 68, 18, 1, 82, 19, 1, 75, 20, 1, 82, 21, 1, 75, 22, 1, 82, 23, 1, 75, 24, 1, 82, 25, 1, 75, 26, 1, 82, 27, 1, 75, 28, 1, 82, 29, 1, 75, 30, 1, 82, 31, 1, 75, 32, 1, 82, 33, 1, 75, 34, 1, 82, 35, 1, 75, 36, 1, 67, 37, 1, 68, 38, 1, 68, 39, 1, 68, 40, 1, 68, 41, 1, 68, 42, 1, 68, 43, 1, 68, 44, 1, 68, 45, 1, 68, 46, 1, 68, 47, 1, 68, 48, 1, 68, 49, 1, 68, 50, 1, 68, 51, 1, 68, 52, 1, 68, 53, 1, 68, 54, 1, 68, 55, 1, 68, 56, 1, 68, 57, 1, 68, 58, 1, 68, 59, 1, 68, 60, 1, 68, 61, 1, 68, 62, 1, 68, 63, 1, 68, 18, 2, 22, 19, 2, 23, 20, 2, 22, 21, 2, 23, 22, 2, 22, 23, 2, 23, 24, 2, 22, 25, 2, 23, 26, 2, 22, 27, 2, 23, 28, 2, 22, 29, 2, 23, 30, 2, 22, 31, 2, 23, 32, 2, 22, 33, 2, 23, 34, 2, 22, 35, 2, 23, 36, 2, 66, 37, 2, 82, 38, 2, 75, 39, 2, 82, 40, 2, 75, 41, 2, 82, 42, 2, 75, 43, 2, 82, 44, 2, 75, 45, 2, 82, 46, 2, 75, 47, 2, 82, 48, 2, 75, 49, 2, 82, 50, 2, 75, 51, 2, 82, 52, 2, 75, 53, 2, 82, 54, 2, 75, 55, 2, 82, 56, 2, 75, 57, 2, 82, 58, 2, 75, 59, 2, 82, 60, 2, 75, 61, 2, 82, 62, 2, 75, 63, 2, 82, 17, 3, 69, 18, 3, 11, 19, 3, 11, 20, 3, 11, 21, 3, 11, 22, 3, 11, 23, 3, 11, 24, 3, 11, 25, 3, 11, 26, 3, 11, 27, 3, 11, 28, 3, 11, 29, 3, 11, 30, 3, 11, 31, 3, 11, 32, 3, 11, 33, 3, 11, 34, 3, 11, 35, 3, 11, 36, 3, 22, 37, 3, 23, 38, 3, 22, 39, 3, 23, 40, 3, 22, 41, 3, 23, 42, 3, 22, 43, 3, 23, 44, 3, 22, 45, 3, 23, 46, 3, 22, 47, 3, 23, 48, 3, 22, 49, 3, 23, 50, 3, 22, 51, 3, 23, 52, 3, 22, 53, 3, 23, 54, 3, 22, 55, 3, 23, 56, 3, 22, 57, 3, 23, 58, 3, 22, 59, 3, 23, 60, 3, 22, 61, 3, 23, 62, 3, 22, 63, 3, 23, 17, 4, 73, 18, 4, 11, 19, 4, 11, 20, 4, 11, 21, 4, 11, 22, 4, 11, 23, 4, 11, 24, 4, 11, 25, 4, 11, 26, 4, 11, 27, 4, 11, 28, 4, 11, 29, 4, 11, 30, 4, 11, 31, 4, 11, 32, 4, 11, 33, 4, 11, 34, 4, 11, 35, 4, 11, 36, 4, 11, 37, 4, 11, 38, 4, 11, 39, 4, 11, 40, 4, 11, 41, 4, 11, 42, 4, 11, 43, 4, 11, 44, 4, 11, 45, 4, 11, 46, 4, 11, 47, 4, 11, 48, 4, 11, 49, 4, 11, 50, 4, 11, 51, 4, 11, 52, 4, 11, 53, 4, 11, 54, 4, 11, 55, 4, 11, 56, 4, 11, 57, 4, 11, 58, 4, 11, 59, 4, 11, 60, 4, 11, 61, 4, 11, 62, 4, 11, 63, 4, 11, 64, 4, 66, 65, 4, 82, 66, 4, 75, 67, 4, 80, 17, 5, 22, 18, 5, 11, 19, 5, 11, 20, 5, 11, 21, 5, 11, 22, 5, 11, 23, 5, 11, 24, 5, 11, 25, 5, 11, 26, 5, 11, 27, 5, 11, 28, 5, 11, 29, 5, 11, 30, 5, 11, 31, 5, 11, 32, 5, 11, 33, 5, 11, 34, 5, 11, 35, 5, 11, 36, 5, 11, 37, 5, 11, 38, 5, 11, 39, 5, 11, 40, 5, 11, 41, 5, 11, 42, 5, 11, 43, 5, 11, 44, 5, 11, 45, 5, 11, 46, 5, 11, 47, 5, 11, 48, 5, 11, 49, 5, 11, 50, 5, 11, 51, 5, 11, 52, 5, 11, 53, 5, 11, 54, 5, 11, 55, 5, 11, 56, 5, 11, 57, 5, 11, 58, 5, 11, 59, 5, 11, 60, 5, 11, 61, 5, 11, 62, 5, 11, 63, 5, 11, 64, 5, 11, 65, 5, 11, 66, 5, 55, 17, 6, 22, 18, 6, 11, 19, 6, 11, 20, 6, 11, 21, 6, 11, 22, 6, 11, 23, 6, 11, 24, 6, 11, 25, 6, 11, 26, 6, 11, 27, 6, 11, 28, 6, 11, 29, 6, 11, 30, 6, 11, 31, 6, 11, 32, 6, 11, 33, 6, 11, 34, 6, 11, 35, 6, 11, 36, 6, 11, 37, 6, 11, 38, 6, 11, 39, 6, 11, 40, 6, 11, 41, 6, 11, 42, 6, 11, 43, 6, 11, 44, 6, 11, 45, 6, 11, 46, 6, 11, 47, 6, 11, 48, 6, 11, 49, 6, 11, 50, 6, 11, 51, 6, 11, 52, 6, 11, 53, 6, 11, 54, 6, 11, 55, 6, 11, 56, 6, 11, 57, 6, 11, 58, 6, 11, 59, 6, 11, 60, 6, 11, 61, 6, 11, 62, 6, 11, 63, 6, 11, 64, 6, 11, 65, 6, 11, 66, 6, 55, 17, 7, 29, 18, 7, 11, 19, 7, 11, 20, 7, 11, 21, 7, 11, 22, 7, 11, 23, 7, 11, 24, 7, 11, 25, 7, 11, 26, 7, 11, 27, 7, 11, 28, 7, 11, 29, 7, 11, 30, 7, 11, 31, 7, 11, 32, 7, 11, 33, 7, 11, 34, 7, 11, 35, 7, 11, 36, 7, 11, 37, 7, 11, 38, 7, 11, 39, 7, 11, 40, 7, 11, 41, 7, 11, 42, 7, 11, 43, 7, 11, 44, 7, 11, 45, 7, 11, 46, 7, 11, 47, 7, 11, 48, 7, 11, 49, 7, 11, 50, 7, 11, 51, 7, 11, 52, 7, 11, 53, 7, 11, 54, 7, 11, 55, 7, 11, 56, 7, 11, 57, 7, 11, 58, 7, 11, 59, 7, 11, 60, 7, 11, 61, 7, 11, 62, 7, 11, 63, 7, 11, 64, 7, 11, 65, 7, 11, 66, 7, 55, 18, 8, 11, 19, 8, 11, 20, 8, 11, 21, 8, 11, 22, 8, 11, 23, 8, 11, 24, 8, 11, 25, 8, 11, 26, 8, 11, 27, 8, 11, 28, 8, 11, 29, 8, 11, 30, 8, 11, 31, 8, 11, 32, 8, 11, 33, 8, 11, 34, 8, 11, 35, 8, 11, 36, 8, 11, 37, 8, 11, 38, 8, 11, 39, 8, 11, 40, 8, 11, 41, 8, 11, 42, 8, 11, 43, 8, 11, 44, 8, 11, 45, 8, 11, 46, 8, 11, 47, 8, 11, 48, 8, 11, 49, 8, 11, 50, 8, 11, 51, 8, 11, 52, 8, 11, 53, 8, 11, 54, 8, 11, 55, 8, 11, 56, 8, 11, 57, 8, 11, 58, 8, 11, 59, 8, 11, 60, 8, 11, 61, 8, 11, 62, 8, 11, 63, 8, 11, 64, 8, 11, 65, 8, 11, 66, 8, 55]
    }, {
      n: "TILES_Windows",
      t: "T",
      d: 990500,
      v: true,
      xo: 20,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_interior_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 16,
      items: 1,
      fl: 66666,
      cells: [65, 2, 38, 66, 2, 39, 69, 2, 38, 70, 2, 39, 73, 2, 38, 74, 2, 39, 77, 2, 38, 78, 2, 39, 65, 3, 48, 66, 3, 49, 69, 3, 48, 70, 3, 49, 73, 3, 48, 74, 3, 49, 77, 3, 48, 78, 3, 49]
    }, {
      n: "TILES_Interior",
      t: "T",
      d: 990600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_interior_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 16,
      items: 1,
      fl: 66666,
      cells: [17, 0, 237, 36, 0, 235, 37, 0, 66, 38, 0, 66, 39, 0, 66, 40, 0, 66, 41, 0, 66, 42, 0, 66, 43, 0, 66, 44, 0, 66, 45, 0, 66, 46, 0, 66, 47, 0, 66, 48, 0, 66, 49, 0, 66, 50, 0, 66, 51, 0, 66, 52, 0, 66, 53, 0, 66, 54, 0, 66, 55, 0, 66, 56, 0, 66, 57, 0, 66, 58, 0, 66, 59, 0, 66, 60, 0, 66, 61, 0, 66, 62, 0, 66, 63, 0, 66, 64, 0, 251, 65, 0, 252, 66, 0, 252, 67, 0, 252, 68, 0, 252, 69, 0, 252, 70, 0, 252, 71, 0, 252, 72, 0, 252, 73, 0, 252, 74, 0, 252, 75, 0, 252, 76, 0, 252, 77, 0, 252, 78, 0, 252, 79, 0, 252, 17, 1, 237, 36, 1, 235, 64, 1, 225, 65, 1, 226, 66, 1, 226, 67, 1, 226, 68, 1, 226, 69, 1, 226, 70, 1, 226, 71, 1, 226, 72, 1, 226, 73, 1, 226, 74, 1, 226, 75, 1, 226, 76, 1, 226, 77, 1, 226, 78, 1, 226, 79, 1, 226, 17, 2, 237, 64, 2, 235, 17, 3, 237, 64, 3, 235, 64, 4, 235, 67, 4, 237, 68, 4, 67, 69, 4, 67, 70, 4, 67, 71, 4, 67, 72, 4, 67, 73, 4, 67, 74, 4, 67, 75, 4, 67, 76, 4, 67, 77, 4, 67, 78, 4, 67, 79, 4, 67, 67, 5, 75, 68, 5, 75, 69, 5, 75, 70, 5, 75, 71, 5, 75, 72, 5, 75, 73, 5, 75, 74, 5, 75, 75, 5, 75, 76, 5, 75, 77, 5, 75, 78, 5, 75, 79, 5, 75, 17, 8, 243, 67, 8, 152, 68, 8, 152, 69, 8, 152, 70, 8, 152, 71, 8, 152, 72, 8, 152, 73, 8, 152, 74, 8, 152, 75, 8, 152, 76, 8, 152, 77, 8, 152, 78, 8, 152, 79, 8, 152, 17, 9, 248, 18, 9, 242, 19, 9, 242, 20, 9, 242, 21, 9, 242, 22, 9, 242, 23, 9, 242, 24, 9, 242, 25, 9, 242, 26, 9, 242, 27, 9, 242, 28, 9, 242, 29, 9, 242, 30, 9, 242, 31, 9, 242, 32, 9, 242, 33, 9, 242, 34, 9, 242, 35, 9, 242, 36, 9, 242, 37, 9, 242, 38, 9, 242, 39, 9, 242, 40, 9, 242, 41, 9, 242, 42, 9, 242, 43, 9, 242, 44, 9, 242, 45, 9, 242, 46, 9, 242, 47, 9, 242, 48, 9, 242, 49, 9, 242, 50, 9, 242, 51, 9, 242, 52, 9, 242, 53, 9, 242, 54, 9, 242, 55, 9, 242, 56, 9, 242, 57, 9, 242, 58, 9, 242, 59, 9, 242, 60, 9, 242, 61, 9, 242, 62, 9, 242, 63, 9, 242, 64, 9, 242, 65, 9, 242, 66, 9, 242, 67, 9, 242, 68, 9, 242, 69, 9, 242, 70, 9, 242, 71, 9, 242, 72, 9, 242, 73, 9, 242, 74, 9, 242, 75, 9, 242, 76, 9, 242, 77, 9, 242, 78, 9, 242, 79, 9, 242, 17, 10, 252, 18, 10, 252, 19, 10, 252, 20, 10, 252, 21, 10, 252, 22, 10, 252, 23, 10, 252, 24, 10, 252, 25, 10, 252, 26, 10, 252, 27, 10, 252, 28, 10, 252, 29, 10, 252, 30, 10, 252, 31, 10, 252, 32, 10, 252, 33, 10, 252, 34, 10, 252, 35, 10, 252, 36, 10, 252, 37, 10, 252, 38, 10, 252, 39, 10, 252, 40, 10, 252, 41, 10, 252, 42, 10, 252, 43, 10, 252, 44, 10, 252, 45, 10, 252, 46, 10, 252, 47, 10, 252, 48, 10, 252, 49, 10, 252, 50, 10, 252, 51, 10, 252, 52, 10, 252, 53, 10, 252, 54, 10, 252, 55, 10, 252, 56, 10, 252, 57, 10, 252, 58, 10, 252, 59, 10, 252, 60, 10, 252, 61, 10, 252, 62, 10, 252, 63, 10, 252, 64, 10, 252, 65, 10, 252, 66, 10, 252, 67, 10, 252, 68, 10, 252, 69, 10, 252, 70, 10, 252, 71, 10, 252, 72, 10, 252, 73, 10, 252, 74, 10, 252, 75, 10, 252, 76, 10, 252, 77, 10, 252, 78, 10, 252, 79, 10, 252, 17, 11, 252, 18, 11, 252, 19, 11, 252, 20, 11, 252, 21, 11, 252, 22, 11, 252, 23, 11, 252, 24, 11, 252, 25, 11, 252, 26, 11, 252, 27, 11, 252, 28, 11, 252, 29, 11, 252, 30, 11, 252, 31, 11, 252, 32, 11, 252, 33, 11, 252, 34, 11, 252, 35, 11, 252, 36, 11, 252, 37, 11, 252, 38, 11, 252, 39, 11, 252, 40, 11, 252, 41, 11, 252, 42, 11, 252, 43, 11, 252, 44, 11, 252, 45, 11, 252, 46, 11, 252, 47, 11, 252, 48, 11, 252, 49, 11, 252, 50, 11, 252, 51, 11, 252, 52, 11, 252, 53, 11, 252, 54, 11, 252, 55, 11, 252, 56, 11, 252, 57, 11, 252, 58, 11, 252, 59, 11, 252, 60, 11, 252, 61, 11, 252, 62, 11, 252, 63, 11, 252, 64, 11, 252, 65, 11, 252, 66, 11, 252, 67, 11, 252, 68, 11, 252, 69, 11, 252, 70, 11, 252, 71, 11, 252, 72, 11, 252, 73, 11, 252, 74, 11, 252, 75, 11, 252, 76, 11, 252, 77, 11, 252, 78, 11, 252, 79, 11, 252]
    }, {
      n: "TILES_Mansion_Hide_1",
      t: "T",
      d: 990700,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_acid_fountain",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 10,
      items: 1,
      fl: 66666,
      cells: [6, 0, 43, 7, 0, 43, 8, 0, 43, 9, 0, 43, 10, 0, 43, 11, 0, 43, 12, 0, 43, 13, 0, 43, 14, 0, 43, 15, 0, 43, 16, 0, 43, 6, 1, 43, 7, 1, 43, 8, 1, 43, 9, 1, 43, 10, 1, 43, 11, 1, 43, 12, 1, 43, 13, 1, 43, 14, 1, 43, 15, 1, 43, 16, 1, 43, 6, 2, 43, 7, 2, 43, 8, 2, 43, 9, 2, 43, 10, 2, 43, 11, 2, 43, 12, 2, 43, 13, 2, 43, 14, 2, 43, 15, 2, 43, 16, 2, 43, 6, 3, 68, 7, 3, 68, 8, 3, 68, 9, 3, 68, 10, 3, 68, 11, 3, 68, 12, 3, 68, 13, 3, 68, 14, 3, 68, 15, 3, 68, 16, 3, 68, 6, 4, 75, 7, 4, 75, 8, 4, 75, 9, 4, 75, 10, 4, 75, 11, 4, 75, 12, 4, 75, 13, 4, 75, 14, 4, 75, 15, 4, 75, 16, 4, 75, 6, 5, 11, 7, 5, 11, 8, 5, 11, 9, 5, 11, 10, 5, 11, 11, 5, 11, 12, 5, 11, 13, 5, 11, 14, 5, 11, 15, 5, 11, 16, 5, 11, 6, 6, 11, 7, 6, 11, 8, 6, 11, 9, 6, 11, 10, 6, 11, 11, 6, 11, 12, 6, 11, 13, 6, 11, 14, 6, 11, 15, 6, 11, 16, 6, 11, 6, 7, 61, 7, 7, 61, 8, 7, 61, 9, 7, 61, 10, 7, 61, 11, 7, 61, 12, 7, 61, 13, 7, 61, 14, 7, 61, 15, 7, 61, 16, 7, 61]
    }, {
      n: "TILES_Mansion_Hide_2",
      t: "T",
      d: 990800,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_interior_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 16,
      items: 1,
      fl: 66666,
      cells: [6, 8, 242, 7, 8, 242, 8, 8, 242, 9, 8, 242, 10, 8, 242, 11, 8, 242, 12, 8, 242, 13, 8, 242, 14, 8, 242, 15, 8, 242, 16, 8, 242, 6, 9, 252, 7, 9, 252, 8, 9, 252, 9, 9, 252, 10, 9, 252, 11, 9, 252, 12, 9, 252, 13, 9, 252, 14, 9, 252, 15, 9, 252, 16, 9, 252, 6, 10, 252, 7, 10, 252, 8, 10, 252, 9, 10, 252, 10, 10, 252, 11, 10, 252, 12, 10, 252, 13, 10, 252, 14, 10, 252, 15, 10, 252, 16, 10, 252, 6, 11, 252, 7, 11, 252, 8, 11, 252, 9, 11, 252, 10, 11, 252, 11, 11, 252, 12, 11, 252, 13, 11, 252, 14, 11, 252, 15, 11, 252, 16, 11, 252]
    }, {
      n: "TILES_Mansion",
      t: "T",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 28,
      items: 4,
      fl: 66666,
      cells: [64, 2, 47, 65, 2, 24, 66, 2, 24, 67, 2, 24, 68, 2, 25, 69, 2, 25, 70, 2, 25, 71, 2, 25, 72, 2, 25, 73, 2, 25, 74, 2, 25, 75, 2, 25, 76, 2, 25, 77, 2, 25, 78, 2, 25, 79, 2, 25, 64, 3, 65, 65, 3, 24, 66, 3, 24, 67, 3, 42, 68, 3, 24, 69, 3, 24, 70, 3, 24, 71, 3, 24, 72, 3, 24, 73, 3, 42, 74, 3, 42, 75, 3, 24, 76, 3, 24, 77, 3, 42, 78, 3, 24, 79, 3, 24, 64, 4, 42, 65, 4, 24, 66, 4, 24, 67, 4, 78, 68, 4, 42, 69, 4, 42, 70, 4, 42, 71, 4, 42, 72, 4, 42, 73, 4, 42, 74, 4, 42, 75, 4, 24, 76, 4, 24, 77, 4, 42, 78, 4, 42, 79, 4, 42, 64, 5, 101, 65, 5, 78, 66, 5, 78, 67, 5, 58, 68, 5, 78, 69, 5, 78, 70, 5, 78, 71, 5, 78, 72, 5, 78, 73, 5, 100, 74, 5, 100, 75, 5, 78, 76, 5, 78, 77, 5, 100, 78, 5, 78, 79, 5, 78, 64, 6, 55, 66, 6, 58, 67, 6, 31, 68, 6, 31, 69, 6, 31, 70, 6, 31, 71, 6, 31, 72, 6, 31, 73, 6, 31, 74, 6, 31, 75, 6, 31, 76, 6, 31, 77, 6, 31, 78, 6, 31, 79, 6, 31, 67, 7, 49, 68, 7, 49, 69, 7, 49, 70, 7, 49, 71, 7, 49, 72, 7, 49, 73, 7, 49, 74, 7, 49, 75, 7, 49, 76, 7, 49, 77, 7, 49, 78, 7, 49, 79, 7, 49, 67, 8, 67, 68, 8, 67, 69, 8, 67, 70, 8, 67, 71, 8, 67, 72, 8, 67, 73, 8, 67, 74, 8, 67, 75, 8, 67, 76, 8, 67, 77, 8, 67, 78, 8, 67, 79, 8, 67, 68, 9, 58, 69, 9, 58, 70, 9, 58, 71, 9, 58, 72, 9, 58, 73, 9, 58, 74, 9, 58, 75, 9, 58, 76, 9, 58, 77, 9, 58, 78, 9, 58, 79, 9, 58],
      anim: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 23, 23, 23, 23, 24, 24, 24, 24, 25, 25, 25, 25, 26, 26, 26, 26, 27, 27, 27, 27, 28, 28, 28, 28, 29, 29, 29, 29, 30, 30, 30, 30, 31, 31, 31, 31, 32, 32, 32, 32, 33, 33, 33, 33, 34, 34, 34, 34, 35, 35, 35, 35, 36, 36, 36, 36, 37, 37, 37, 37, 38, 38, 38, 38, 39, 39, 39, 39, 40, 40, 40, 40, 41, 41, 41, 41, 42, 42, 42, 42, 43, 43, 43, 43, 44, 44, 44, 44, 45, 45, 45, 45, 46, 46, 46, 46, 47, 47, 47, 47, 48, 48, 48, 48, 49, 49, 49, 49, 50, 50, 50, 50, 51, 51, 51, 51, 52, 52, 52, 52, 53, 53, 53, 53, 54, 54, 54, 54, 55, 55, 55, 55, 56, 56, 56, 56, 57, 57, 57, 57, 58, 58, 58, 58, 59, 59, 59, 59, 60, 60, 60, 60, 61, 61, 61, 61, 62, 62, 62, 62, 63, 63, 63, 63, 64, 64, 64, 64, 65, 65, 65, 65, 66, 66, 66, 66, 67, 67, 67, 67, 68, 68, 68, 68, 69, 69, 69, 69, 70, 70, 70, 70, 71, 71, 71, 71, 72, 72, 72, 72, 73, 73, 73, 73, 74, 74, 74, 74, 75, 75, 75, 75, 76, 76, 76, 76, 77, 77, 77, 77, 78, 78, 78, 78, 79, 79, 79, 79, 80, 80, 80, 80, 81, 81, 81, 81, 82, 82, 82, 82, 83, 83, 83, 83, 84, 84, 84, 84, 85, 85, 85, 85, 86, 86, 86, 86, 87, 87, 87, 87, 88, 88, 88, 88, 89, 89, 89, 89, 90, 90, 90, 90, 91, 91, 91, 91, 92, 92, 92, 92, 93, 93, 93, 93, 94, 94, 94, 94, 95, 95, 95, 95, 96, 96, 96, 96, 97, 97, 97, 97, 98, 98, 98, 98, 99, 99, 99, 99, 100, 100, 100, 100, 101, 101, 101, 101, 102, 102, 102, 102, 103, 103, 103, 103, 104, 104, 104, 104, 105, 105, 105, 105, 106, 106, 106, 106, 107, 107, 107, 107, 108, 108, 108, 108, 109, 109, 109, 109, 110, 110, 110, 110, 111, 111, 111, 111, 112, 112, 112, 112, 113, 113, 113, 113, 114, 114, 114, 114, 115, 115, 115, 115, 116, 116, 116, 116, 117, 117, 117, 117, 118, 118, 118, 118, 119, 119, 119, 119, 120, 120, 120, 120, 121, 121, 121, 121, 122, 122, 122, 122, 123, 123, 123, 123, 124, 124, 124, 124, 125, 125, 125, 125, 126, 126, 126, 126, 127, 127, 127, 127, 128, 128, 128, 128, 129, 129, 129, 129, 130, 130, 130, 130, 131, 131, 131, 131, 132, 132, 132, 132, 133, 133, 133, 133, 134, 134, 134, 134, 135, 135, 135, 135, 136, 136, 136, 136, 137, 137, 137, 137, 138, 138, 138, 138, 139, 139, 139, 139, 140, 140, 140, 140, 141, 141, 141, 141, 142, 142, 142, 142, 143, 143, 143, 143, 144, 144, 144, 144, 145, 145, 145, 145, 146, 146, 146, 146, 147, 147, 147, 147, 148, 148, 148, 148, 149, 149, 149, 149, 150, 150, 150, 150, 151, 151, 151, 151, 152, 152, 152, 152, 153, 153, 153, 153, 154, 154, 154, 154, 155, 155, 155, 155, 156, 156, 156, 156, 157, 157, 157, 157, 158, 158, 158, 158, 159, 159, 159, 159, 160, 160, 160, 160, 161, 161, 161, 161, 162, 162, 162, 162, 163, 163, 163, 163, 164, 164, 164, 164, 165, 165, 165, 165, 166, 166, 166, 166, 167, 167, 167, 167, 168, 168, 168, 168, 169, 169, 169, 169, 170, 170, 170, 170, 171, 171, 171, 171, 172, 172, 172, 172, 173, 173, 173, 173, 174, 174, 174, 174, 175, 175, 175, 175, 176, 176, 176, 176, 177, 177, 177, 177, 178, 178, 178, 178, 179, 179, 179, 179, 180, 180, 180, 180, 181, 181, 181, 181, 182, 182, 182, 182, 183, 183, 183, 183, 184, 184, 184, 184, 185, 185, 185, 185, 186, 186, 186, 186, 187, 187, 187, 187, 188, 188, 188, 188, 189, 189, 189, 189, 190, 190, 190, 190, 191, 191, 191, 191, 192, 192, 192, 192, 193, 193, 193, 193, 194, 194, 194, 194, 195, 195, 195, 195, 196, 196, 196, 196, 197, 197, 197, 197, 198, 198, 198, 198, 199, 199, 199, 199, 200, 200, 200, 200, 201, 201, 201, 201, 202, 202, 202, 202, 203, 203, 203, 203, 204, 204, 204, 204, 205, 205, 205, 205, 206, 206, 206, 206, 207, 207, 207, 207, 208, 208, 208, 208, 209, 209, 209, 209, 210, 210, 210, 210, 211, 211, 211, 211, 212, 212, 212, 212, 213, 213, 213, 213, 214, 214, 214, 214, 215, 215, 215, 215, 216, 216, 216, 216, 217, 217, 217, 217, 218, 218, 218, 218, 219, 219, 219, 219, 220, 220, 220, 220, 221, 221, 221, 221, 222, 222, 222, 222, 223, 223, 223, 223, 224, 224, 224, 224, 225, 225, 225, 225, 226, 226, 226, 226, 227, 227, 227, 227, 228, 228, 228, 228, 229, 229, 229, 229, 230, 230, 230, 230, 231, 231, 231, 231, 232, 232, 232, 232, 233, 233, 233, 233, 234, 234, 234, 234, 235, 235, 235, 235, 236, 236, 236, 236, 237, 237, 237, 237, 238, 238, 238, 238, 239, 239, 239, 239, 240, 240, 240, 240, 241, 241, 241, 241, 242, 242, 242, 242, 243, 243, 243, 243, 244, 244, 244, 244, 245, 245, 245, 245, 246, 246, 246, 246, 247, 247, 247, 247, 248, 248, 248, 248, 249, 249, 249, 249, 250, 250, 250, 250, 251, 251, 251, 251, 252, 252, 252, 252, 253, 253, 253, 253, 254, 254, 254, 254, 255, 255, 255, 255, 256, 256, 256, 256, 257, 257, 257, 257, 258, 258, 258, 258, 259, 259, 259, 259, 260, 260, 260, 260, 261, 261, 261, 261, 262, 262, 262, 262, 263, 263, 263, 263, 264, 264, 264, 264, 265, 265, 265, 265, 266, 266, 266, 266, 267, 267, 267, 267, 268, 268, 268, 268, 269, 269, 269, 269, 270, 270, 270, 270, 271, 271, 271, 271, 272, 272, 272, 272, 273, 273, 273, 273, 274, 274, 274, 274, 275, 275, 275, 275, 276, 276, 276, 276, 277, 277, 277, 277, 278, 278, 278, 278, 279, 279, 279, 279, 280, 280, 280, 280, 281, 281, 281, 281, 282, 282, 282, 282, 283, 283, 283, 283, 284, 284, 284, 284, 285, 285, 285, 285, 286, 286, 286, 286, 287, 287, 287, 287, 288, 288, 288, 288, 289, 289, 289, 289, 290, 290, 290, 290, 291, 291, 291, 291, 292, 292, 292, 292, 293, 293, 293, 293, 294, 294, 294, 294, 295, 295, 295, 295, 296, 296, 296, 296, 297, 297, 297, 297, 298, 298, 298, 298, 299, 299, 299, 299, 300, 300, 300, 300, 301, 301, 301, 301, 302, 302, 302, 302, 303, 303, 303, 303, 304, 304, 304, 304, 305, 305, 305, 305, 306, 306, 306, 306, 307, 307, 307, 307, 308, 308, 308, 308, 309, 309, 309, 309, 310, 310, 310, 310, 311, 311, 311, 311, 312, 312, 312, 312, 313, 313, 313, 313, 314, 314, 314, 314, 315, 315, 315, 315, 316, 316, 316, 316, 317, 317, 317, 317, 318, 318, 318, 318, 319, 319, 319, 319, 320, 320, 320, 320, 321, 321, 321, 321, 322, 322, 322, 322, 323, 323, 323, 323, 324, 324, 324, 324, 325, 325, 325, 325, 326, 326, 326, 326, 327, 327, 327, 327, 328, 328, 328, 328, 329, 329, 329, 329, 330, 330, 330, 330, 331, 331, 331, 331, 332, 332, 332, 332, 333, 333, 333, 333, 334, 334, 334, 334, 335, 335, 335, 335, 336, 336, 336, 336, 337, 337, 337, 337, 338, 338, 338, 338, 339, 339, 339, 339, 340, 340, 340, 340, 341, 341, 341, 341, 342, 342, 342, 342, 343, 343, 343, 343, 344, 344, 344, 344, 345, 345, 345, 345, 346, 346, 346, 346, 347, 347, 347, 347, 348, 348, 348, 348, 349, 349, 349, 349, 350, 350, 350, 350, 351, 351, 351, 351, 352, 352, 352, 352, 353, 353, 353, 353, 354, 354, 354, 354, 355, 355, 355, 355, 356, 356, 356, 356, 357, 357, 357, 357, 358, 358, 358, 358, 359, 359, 359, 359, 360, 360, 360, 360, 361, 361, 361, 361, 362, 362, 362, 362, 363, 363, 363, 363, 364, 364, 364, 364, 365, 365, 365, 365, 366, 366, 366, 366, 367, 367, 367, 367, 368, 368, 368, 368, 369, 369, 369, 369, 370, 370, 370, 370, 371, 371, 371, 371, 372, 372, 372, 372, 373, 373, 373, 373, 374, 374, 374, 374, 375, 375, 375, 375, 376, 376, 376, 376, 377, 377, 377, 377, 378, 378, 378, 378, 379, 379, 379, 379, 380, 380, 380, 380, 381, 381, 381, 381, 382, 382, 382, 382, 383, 383, 383, 383, 384, 384, 384, 384, 385, 385, 385, 385, 386, 386, 386, 386, 387, 387, 387, 387, 388, 388, 388, 388, 389, 389, 389, 389, 390, 390, 390, 390, 391, 391, 391, 391, 392, 392, 392, 392, 393, 393, 393, 393, 394, 394, 394, 394, 395, 395, 395, 395, 396, 396, 396, 396, 397, 397, 397, 397, 398, 398, 398, 398, 399, 399, 399, 399, 400, 400, 400, 400, 401, 401, 401, 401, 402, 402, 402, 402, 403, 403, 403, 403, 404, 404, 404, 404, 405, 405, 405, 405, 406, 406, 406, 406, 407, 407, 407, 407, 408, 408, 408, 408, 409, 409, 409, 409, 410, 410, 410, 410, 411, 411, 411, 411, 412, 412, 412, 412, 413, 413, 413, 413, 414, 414, 414, 414, 415, 415, 415, 415, 416, 416, 416, 416, 417, 417, 417, 417, 418, 418, 418, 418, 419, 419, 419, 419, 420, 420, 420, 420, 421, 421, 421, 421, 422, 422, 422, 422, 423, 423, 423, 423, 424, 424, 424, 424, 425, 425, 425, 425, 426, 426, 426, 426, 427, 427, 427, 427, 428, 428, 428, 428, 429, 429, 429, 429, 430, 430, 430, 430, 431, 431, 431, 431, 432, 432, 432, 432, 433, 433, 433, 433, 434, 434, 434, 434, 435, 435, 435, 435, 436, 436, 436, 436, 437, 437, 437, 437, 438, 438, 438, 438, 439, 439, 439, 439, 440, 440, 440, 440, 441, 441, 441, 441, 442, 442, 442, 442, 443, 443, 443, 443, 444, 444, 444, 444, 445, 445, 445, 445, 446, 446, 446, 446, 447, 447, 447, 447, 448, 448, 448, 448, 449, 449, 449, 449, 450, 451, 452, 453, 451, 452, 453, 450, 452, 453, 450, 451, 453, 450, 451, 452, 454, 454, 454, 454, 455, 455, 455, 455, 456, 456, 456, 456, 457, 457, 457, 457, 458, 458, 458, 458, 459, 459, 459, 459, 460, 460, 460, 460, 461, 461, 461, 461, 462, 462, 462, 462, 463, 463, 463, 463, 464, 464, 464, 464, 465, 465, 465, 465, 466, 466, 466, 466, 467, 467, 467, 467, 468, 468, 468, 468, 469, 469, 469, 469, 470, 470, 470, 470, 471, 471, 471, 471, 472, 472, 472, 472, 473, 473, 473, 473, 474, 474, 474, 474, 475, 475, 475, 475, 476, 476, 476, 476, 477, 477, 477, 477, 478, 478, 478, 478, 479, 479, 479, 479, 480, 480, 480, 480, 481, 481, 481, 481, 482, 482, 482, 482, 483, 483, 483, 483, 484, 484, 484, 484, 485, 485, 485, 485, 486, 486, 486, 486, 487, 487, 487, 487, 488, 488, 488, 488, 489, 489, 489, 489, 490, 490, 490, 490, 491, 491, 491, 491, 492, 492, 492, 492, 493, 493, 493, 493, 494, 494, 494, 494, 495, 495, 495, 495, 496, 496, 496, 496, 497, 497, 497, 497, 498, 498, 498, 498, 499, 499, 499, 499, 500, 500, 500, 500, 501, 501, 501, 501, 502, 502, 502, 502, 503, 503, 503, 503, 504, 504, 504, 504, 505, 505, 505, 505, 506, 506, 506, 506, 507, 507, 507, 507, 508, 508, 508, 508, 509, 509, 509, 509, 510, 510, 510, 510, 511, 511, 511, 511, 512, 512, 512, 512, 513, 513, 513, 513, 514, 514, 514, 514, 515, 515, 515, 515, 516, 516, 516, 516, 517, 517, 517, 517, 518, 518, 518, 518, 519, 519, 519, 519, 520, 520, 520, 520, 521, 521, 521, 521, 522, 522, 522, 522, 523, 523, 523, 523, 524, 524, 524, 524, 525, 525, 525, 525, 526, 526, 526, 526, 527, 527, 527, 527, 528, 528, 528, 528, 529, 529, 529, 529, 530, 530, 530, 530, 531, 531, 531, 531, 532, 532, 532, 532, 533, 533, 533, 533, 534, 534, 534, 534, 535, 535, 535, 535, 536, 536, 536, 536, 537, 537, 537, 537, 538, 538, 538, 538, 539, 539, 539, 539, 540, 540, 540, 540, 541, 541, 541, 541, 542, 542, 542, 542, 543, 543, 543, 543, 544, 544, 544, 544, 545, 545, 545, 545, 546, 546, 546, 546, 547, 547, 547, 547, 548, 548, 548, 548, 549, 549, 549, 549, 550, 550, 550, 550, 551, 551, 551, 551, 552, 552, 552, 552, 553, 553, 553, 553, 554, 554, 554, 554, 555, 555, 555, 555, 556, 556, 556, 556, 557, 557, 557, 557, 558, 558, 558, 558, 559, 559, 559, 559, 560, 560, 560, 560, 561, 561, 561, 561, 562, 562, 562, 562, 563, 563, 563, 563, 564, 564, 564, 564, 565, 565, 565, 565, 566, 566, 566, 566, 567, 567, 567, 567, 568, 568, 568, 568, 569, 569, 569, 569, 570, 570, 570, 570, 571, 571, 571, 571, 572, 572, 572, 572, 573, 573, 573, 573, 574, 574, 574, 574, 575, 575, 575, 575, 576, 576, 576, 576, 577, 577, 577, 577, 578, 578, 578, 578, 579, 579, 579, 579, 580, 580, 580, 580, 581, 581, 581, 581, 582, 582, 582, 582, 583, 583, 583, 583, 584, 584, 584, 584, 585, 585, 585, 585, 586, 586, 586, 586, 587, 587, 587, 587, 588, 588, 588, 588, 589, 589, 589, 589, 590, 590, 590, 590, 591, 591, 591, 591, 592, 592, 592, 592, 593, 593, 593, 593, 594, 594, 594, 594, 595, 595, 595, 595, 596, 596, 596, 596, 597, 597, 597, 597, 598, 598, 598, 598, 599, 599, 599, 599, 600, 600, 600, 600, 601, 601, 601, 601, 602, 602, 602, 602, 603, 603, 603, 603, 604, 604, 604, 604, 605, 605, 605, 605, 606, 606, 606, 606, 607, 607, 607, 607, 608, 608, 608, 608, 609, 609, 609, 609, 610, 610, 610, 610, 611, 611, 611, 611, 612, 612, 612, 612, 613, 613, 613, 613, 614, 614, 614, 614, 615, 615, 615, 615, 616, 616, 616, 616, 617, 617, 617, 617, 618, 618, 618, 618, 619, 619, 619, 619, 620, 620, 620, 620, 621, 621, 621, 621, 622, 622, 622, 622, 623, 623, 623, 623, 624, 624, 624, 624, 625, 625, 625, 625, 626, 626, 626, 626, 627, 627, 627, 627, 628, 628, 628, 628, 629, 629, 629, 629, 630, 630, 630, 630, 631, 631, 631, 631, 632, 632, 632, 632, 633, 633, 633, 633, 634, 634, 634, 634, 635, 635, 635, 635, 636, 636, 636, 636, 637, 637, 637, 637, 638, 638, 638, 638, 639, 639, 639, 639, 640, 640, 640, 640, 641, 641, 641, 641, 642, 642, 642, 642, 643, 643, 643, 643, 644, 644, 644, 644, 645, 645, 645, 645, 646, 646, 646, 646, 647, 647, 647, 647, 648, 648, 648, 648, 649, 649, 649, 649, 650, 650, 650, 650, 651, 651, 651, 651, 652, 652, 652, 652, 653, 653, 653, 653, 654, 654, 654, 654, 655, 655, 655, 655, 656, 656, 656, 656, 657, 657, 657, 657, 658, 658, 658, 658, 659, 659, 659, 659, 660, 660, 660, 660, 661, 661, 661, 661, 662, 662, 662, 662, 663, 663, 663, 663, 664, 664, 664, 664, 665, 665, 665, 665, 666, 666, 666, 666, 667, 667, 667, 667, 668, 668, 668, 668, 669, 669, 669, 669, 670, 670, 670, 670, 671, 671, 671, 671, 672, 672, 672, 672, 673, 673, 673, 673, 674, 674, 674, 674, 675, 675, 675, 675, 676, 676, 676, 676, 677, 677, 677, 677, 678, 678, 678, 678, 679, 679, 679, 679, 680, 680, 680, 680, 681, 681, 681, 681, 682, 682, 682, 682, 683, 683, 683, 683, 684, 684, 684, 684, 685, 685, 685, 685, 686, 686, 686, 686, 687, 687, 687, 687, 688, 688, 688, 688, 689, 689, 689, 689, 690, 690, 690, 690, 691, 691, 691, 691, 692, 692, 692, 692, 693, 693, 693, 693, 694, 694, 694, 694, 695, 695, 695, 695, 696, 696, 696, 696, 697, 697, 697, 697, 698, 698, 698, 698, 699, 699, 699, 699, 700, 700, 700, 700, 701, 701, 701, 701, 702, 702, 702, 702, 703, 703, 703, 703, 704, 704, 704, 704, 705, 705, 705, 705, 706, 706, 706, 706, 707, 707, 707, 707, 708, 708, 708, 708, 709, 709, 709, 709, 710, 710, 710, 710, 711, 711, 711, 711, 712, 712, 712, 712, 713, 713, 713, 713, 714, 714, 714, 714, 715, 715, 715, 715, 716, 716, 716, 716, 717, 717, 717, 717, 718, 718, 718, 718, 719, 719, 719, 719, 720, 720, 720, 720, 721, 721, 721, 721, 722, 722, 722, 722, 723, 723, 723, 723, 724, 724, 724, 724, 725, 725, 725, 725, 726, 726, 726, 726, 727, 727, 727, 727, 728, 728, 728, 728, 729, 729, 729, 729, 730, 730, 730, 730, 731, 731, 731, 731, 732, 732, 732, 732, 733, 733, 733, 733, 734, 734, 734, 734, 735, 735, 735, 735, 736, 736, 736, 736, 737, 737, 737, 737, 738, 738, 738, 738, 739, 739, 739, 739, 740, 740, 740, 740, 741, 741, 741, 741, 742, 742, 742, 742, 743, 743, 743, 743, 744, 744, 744, 744, 745, 745, 745, 745, 746, 746, 746, 746, 747, 747, 747, 747, 748, 748, 748, 748, 749, 749, 749, 749, 750, 750, 750, 750, 751, 751, 751, 751, 752, 752, 752, 752, 753, 753, 753, 753, 754, 754, 754, 754, 755, 755, 755, 755, 756, 756, 756, 756, 757, 757, 757, 757, 758, 758, 758, 758, 759, 759, 759, 759, 760, 760, 760, 760, 761, 761, 761, 761, 762, 762, 762, 762, 763, 763, 763, 763, 764, 764, 764, 764, 765, 765, 765, 765, 766, 766, 766, 766, 767, 767, 767, 767, 768, 768, 768, 768, 769, 769, 769, 769, 770, 770, 770, 770, 771, 771, 771, 771, 772, 772, 772, 772, 773, 773, 773, 773]
    }, {
      n: "OBJECTS_VFX",
      t: "I",
      d: 1000100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch2/room_dw_mansion_east_4f_d": {
    w: 1840,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_ch2_scene25"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 944, 46, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_parallaxer_mansion", 0, 40, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "ASSETS_Carpet",
      t: "A",
      d: 970000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_mansion_floor_queen_symbol", 600, 132, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "TILES_Rooftop",
      t: "T",
      d: 970100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_top",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 9,
      items: 1,
      fl: 66666,
      cells: [42, 7, 34, 43, 7, 35, 44, 7, 35, 45, 7, 35, 42, 8, 44, 43, 8, 45, 44, 8, 45, 45, 8, 45]
    }, {
      n: "TILES_Interior",
      t: "T",
      d: 970200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_interior_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 16,
      items: 1,
      fl: 66666,
      cells: [0, 9, 75, 1, 9, 75, 2, 9, 75, 3, 9, 75, 4, 9, 75, 5, 9, 75, 6, 9, 75, 7, 9, 75, 8, 9, 75, 9, 9, 75, 10, 9, 75, 11, 9, 75, 12, 9, 75, 0, 10, 242, 1, 10, 242, 2, 10, 242, 3, 10, 242, 4, 10, 242, 5, 10, 242, 6, 10, 242, 7, 10, 242, 8, 10, 242, 9, 10, 242, 10, 10, 242, 11, 10, 242, 12, 10, 243, 0, 11, 252, 1, 11, 252, 2, 11, 252, 3, 11, 252, 4, 11, 252, 5, 11, 252, 6, 11, 252, 7, 11, 252, 8, 11, 252, 9, 11, 252, 10, 11, 252, 11, 11, 252, 12, 11, 253]
    }, {
      n: "TILES_Pillars",
      t: "T",
      d: 970300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_pillars_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 5,
      items: 1,
      fl: 66666,
      cells: [0, 0, 13, 1, 0, 14, 3, 0, 12, 4, 0, 13, 5, 0, 14, 9, 0, 12, 10, 0, 13, 11, 0, 14, 34, 0, 12, 35, 0, 14, 39, 0, 12, 40, 0, 14, 0, 1, 13, 1, 1, 14, 3, 1, 12, 4, 1, 13, 5, 1, 14, 9, 1, 12, 10, 1, 13, 11, 1, 14, 34, 1, 12, 35, 1, 14, 39, 1, 12, 40, 1, 14, 0, 2, 13, 1, 2, 14, 3, 2, 12, 4, 2, 13, 5, 2, 14, 9, 2, 12, 10, 2, 13, 11, 2, 14, 34, 2, 12, 35, 2, 14, 39, 2, 12, 40, 2, 14, 0, 3, 13, 1, 3, 14, 3, 3, 12, 4, 3, 13, 5, 3, 14, 9, 3, 12, 10, 3, 13, 11, 3, 14, 34, 3, 12, 35, 3, 14, 39, 3, 12, 40, 3, 14, 0, 4, 16, 1, 4, 17, 3, 4, 12, 4, 4, 13, 5, 4, 14, 9, 4, 12, 10, 4, 13, 11, 4, 14, 34, 4, 12, 35, 4, 14, 39, 4, 12, 40, 4, 14, 0, 5, 19, 1, 5, 20, 3, 5, 15, 4, 5, 16, 5, 5, 17, 9, 5, 15, 10, 5, 16, 11, 5, 17, 34, 5, 15, 35, 5, 17, 39, 5, 15, 40, 5, 17, 3, 6, 18, 4, 6, 19, 5, 6, 20, 9, 6, 18, 10, 6, 19, 11, 6, 20, 34, 6, 18, 35, 6, 20, 39, 6, 18, 40, 6, 20, 13, 9, 3, 14, 9, 4, 15, 9, 5, 22, 9, 3, 23, 9, 5, 30, 9, 3, 31, 9, 4, 32, 9, 5, 39, 9, 3, 40, 9, 5, 13, 10, 6, 14, 10, 7, 15, 10, 8, 22, 10, 6, 23, 10, 8, 30, 10, 6, 31, 10, 7, 32, 10, 8, 39, 10, 6, 40, 10, 8, 13, 11, 9, 14, 11, 10, 15, 11, 11, 22, 11, 9, 23, 11, 11, 30, 11, 9, 31, 11, 10, 32, 11, 11, 39, 11, 9, 40, 11, 11]
    }, {
      n: "TILES",
      t: "T",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 28,
      items: 4,
      fl: 66666,
      cells: [13, 2, 30, 14, 2, 31, 15, 2, 31, 16, 2, 31, 17, 2, 31, 18, 2, 31, 19, 2, 31, 20, 2, 31, 21, 2, 31, 22, 2, 31, 23, 2, 31, 24, 2, 31, 25, 2, 31, 26, 2, 31, 27, 2, 31, 28, 2, 31, 29, 2, 31, 30, 2, 31, 31, 2, 31, 32, 2, 32, 13, 3, 48, 14, 3, 49, 15, 3, 49, 16, 3, 49, 17, 3, 49, 18, 3, 49, 19, 3, 49, 20, 3, 49, 21, 3, 49, 22, 3, 49, 23, 3, 49, 24, 3, 49, 25, 3, 49, 26, 3, 49, 27, 3, 49, 28, 3, 49, 29, 3, 49, 30, 3, 49, 31, 3, 49, 32, 3, 50, 13, 4, 48, 14, 4, 49, 15, 4, 49, 16, 4, 49, 17, 4, 49, 18, 4, 49, 19, 4, 49, 20, 4, 49, 21, 4, 49, 22, 4, 49, 23, 4, 49, 24, 4, 49, 25, 4, 49, 26, 4, 49, 27, 4, 49, 28, 4, 49, 29, 4, 49, 30, 4, 49, 31, 4, 49, 32, 4, 50, 13, 5, 48, 14, 5, 49, 15, 5, 49, 16, 5, 49, 17, 5, 49, 18, 5, 49, 19, 5, 49, 20, 5, 49, 21, 5, 49, 22, 5, 49, 23, 5, 49, 24, 5, 49, 25, 5, 49, 26, 5, 49, 27, 5, 49, 28, 5, 49, 29, 5, 49, 30, 5, 49, 31, 5, 49, 32, 5, 50, 0, 6, 31, 1, 6, 32, 13, 6, 48, 14, 6, 49, 15, 6, 49, 16, 6, 49, 17, 6, 49, 18, 6, 49, 19, 6, 49, 20, 6, 49, 21, 6, 49, 22, 6, 49, 23, 6, 49, 24, 6, 49, 25, 6, 49, 26, 6, 49, 27, 6, 49, 28, 6, 49, 29, 6, 49, 30, 6, 49, 31, 6, 49, 32, 6, 50, 0, 7, 49, 1, 7, 465, 2, 7, 31, 3, 7, 31, 4, 7, 31, 5, 7, 31, 6, 7, 31, 7, 7, 31, 8, 7, 31, 9, 7, 31, 10, 7, 31, 11, 7, 31, 12, 7, 31, 13, 7, 464, 14, 7, 49, 15, 7, 49, 16, 7, 49, 17, 7, 49, 18, 7, 49, 19, 7, 49, 20, 7, 49, 21, 7, 49, 22, 7, 49, 23, 7, 49, 24, 7, 49, 25, 7, 49, 26, 7, 49, 27, 7, 49, 28, 7, 49, 29, 7, 49, 30, 7, 49, 31, 7, 49, 32, 7, 465, 33, 7, 31, 34, 7, 31, 35, 7, 31, 36, 7, 31, 37, 7, 31, 38, 7, 31, 39, 7, 31, 40, 7, 31, 41, 7, 31, 0, 8, 67, 1, 8, 67, 2, 8, 67, 3, 8, 67, 4, 8, 67, 5, 8, 67, 6, 8, 67, 7, 8, 67, 8, 8, 67, 9, 8, 67, 10, 8, 67, 11, 8, 67, 12, 8, 67, 13, 8, 67, 14, 8, 67, 15, 8, 67, 16, 8, 67, 17, 8, 67, 18, 8, 67, 19, 8, 67, 20, 8, 67, 21, 8, 67, 22, 8, 67, 23, 8, 67, 24, 8, 67, 25, 8, 67, 26, 8, 67, 27, 8, 67, 28, 8, 67, 29, 8, 67, 30, 8, 67, 31, 8, 67, 32, 8, 67, 33, 8, 67, 34, 8, 67, 35, 8, 67, 36, 8, 67, 37, 8, 67, 38, 8, 67, 39, 8, 67, 40, 8, 67, 41, 8, 67],
      anim: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 23, 23, 23, 23, 24, 24, 24, 24, 25, 25, 25, 25, 26, 26, 26, 26, 27, 27, 27, 27, 28, 28, 28, 28, 29, 29, 29, 29, 30, 30, 30, 30, 31, 31, 31, 31, 32, 32, 32, 32, 33, 33, 33, 33, 34, 34, 34, 34, 35, 35, 35, 35, 36, 36, 36, 36, 37, 37, 37, 37, 38, 38, 38, 38, 39, 39, 39, 39, 40, 40, 40, 40, 41, 41, 41, 41, 42, 42, 42, 42, 43, 43, 43, 43, 44, 44, 44, 44, 45, 45, 45, 45, 46, 46, 46, 46, 47, 47, 47, 47, 48, 48, 48, 48, 49, 49, 49, 49, 50, 50, 50, 50, 51, 51, 51, 51, 52, 52, 52, 52, 53, 53, 53, 53, 54, 54, 54, 54, 55, 55, 55, 55, 56, 56, 56, 56, 57, 57, 57, 57, 58, 58, 58, 58, 59, 59, 59, 59, 60, 60, 60, 60, 61, 61, 61, 61, 62, 62, 62, 62, 63, 63, 63, 63, 64, 64, 64, 64, 65, 65, 65, 65, 66, 66, 66, 66, 67, 67, 67, 67, 68, 68, 68, 68, 69, 69, 69, 69, 70, 70, 70, 70, 71, 71, 71, 71, 72, 72, 72, 72, 73, 73, 73, 73, 74, 74, 74, 74, 75, 75, 75, 75, 76, 76, 76, 76, 77, 77, 77, 77, 78, 78, 78, 78, 79, 79, 79, 79, 80, 80, 80, 80, 81, 81, 81, 81, 82, 82, 82, 82, 83, 83, 83, 83, 84, 84, 84, 84, 85, 85, 85, 85, 86, 86, 86, 86, 87, 87, 87, 87, 88, 88, 88, 88, 89, 89, 89, 89, 90, 90, 90, 90, 91, 91, 91, 91, 92, 92, 92, 92, 93, 93, 93, 93, 94, 94, 94, 94, 95, 95, 95, 95, 96, 96, 96, 96, 97, 97, 97, 97, 98, 98, 98, 98, 99, 99, 99, 99, 100, 100, 100, 100, 101, 101, 101, 101, 102, 102, 102, 102, 103, 103, 103, 103, 104, 104, 104, 104, 105, 105, 105, 105, 106, 106, 106, 106, 107, 107, 107, 107, 108, 108, 108, 108, 109, 109, 109, 109, 110, 110, 110, 110, 111, 111, 111, 111, 112, 112, 112, 112, 113, 113, 113, 113, 114, 114, 114, 114, 115, 115, 115, 115, 116, 116, 116, 116, 117, 117, 117, 117, 118, 118, 118, 118, 119, 119, 119, 119, 120, 120, 120, 120, 121, 121, 121, 121, 122, 122, 122, 122, 123, 123, 123, 123, 124, 124, 124, 124, 125, 125, 125, 125, 126, 126, 126, 126, 127, 127, 127, 127, 128, 128, 128, 128, 129, 129, 129, 129, 130, 130, 130, 130, 131, 131, 131, 131, 132, 132, 132, 132, 133, 133, 133, 133, 134, 134, 134, 134, 135, 135, 135, 135, 136, 136, 136, 136, 137, 137, 137, 137, 138, 138, 138, 138, 139, 139, 139, 139, 140, 140, 140, 140, 141, 141, 141, 141, 142, 142, 142, 142, 143, 143, 143, 143, 144, 144, 144, 144, 145, 145, 145, 145, 146, 146, 146, 146, 147, 147, 147, 147, 148, 148, 148, 148, 149, 149, 149, 149, 150, 150, 150, 150, 151, 151, 151, 151, 152, 152, 152, 152, 153, 153, 153, 153, 154, 154, 154, 154, 155, 155, 155, 155, 156, 156, 156, 156, 157, 157, 157, 157, 158, 158, 158, 158, 159, 159, 159, 159, 160, 160, 160, 160, 161, 161, 161, 161, 162, 162, 162, 162, 163, 163, 163, 163, 164, 164, 164, 164, 165, 165, 165, 165, 166, 166, 166, 166, 167, 167, 167, 167, 168, 168, 168, 168, 169, 169, 169, 169, 170, 170, 170, 170, 171, 171, 171, 171, 172, 172, 172, 172, 173, 173, 173, 173, 174, 174, 174, 174, 175, 175, 175, 175, 176, 176, 176, 176, 177, 177, 177, 177, 178, 178, 178, 178, 179, 179, 179, 179, 180, 180, 180, 180, 181, 181, 181, 181, 182, 182, 182, 182, 183, 183, 183, 183, 184, 184, 184, 184, 185, 185, 185, 185, 186, 186, 186, 186, 187, 187, 187, 187, 188, 188, 188, 188, 189, 189, 189, 189, 190, 190, 190, 190, 191, 191, 191, 191, 192, 192, 192, 192, 193, 193, 193, 193, 194, 194, 194, 194, 195, 195, 195, 195, 196, 196, 196, 196, 197, 197, 197, 197, 198, 198, 198, 198, 199, 199, 199, 199, 200, 200, 200, 200, 201, 201, 201, 201, 202, 202, 202, 202, 203, 203, 203, 203, 204, 204, 204, 204, 205, 205, 205, 205, 206, 206, 206, 206, 207, 207, 207, 207, 208, 208, 208, 208, 209, 209, 209, 209, 210, 210, 210, 210, 211, 211, 211, 211, 212, 212, 212, 212, 213, 213, 213, 213, 214, 214, 214, 214, 215, 215, 215, 215, 216, 216, 216, 216, 217, 217, 217, 217, 218, 218, 218, 218, 219, 219, 219, 219, 220, 220, 220, 220, 221, 221, 221, 221, 222, 222, 222, 222, 223, 223, 223, 223, 224, 224, 224, 224, 225, 225, 225, 225, 226, 226, 226, 226, 227, 227, 227, 227, 228, 228, 228, 228, 229, 229, 229, 229, 230, 230, 230, 230, 231, 231, 231, 231, 232, 232, 232, 232, 233, 233, 233, 233, 234, 234, 234, 234, 235, 235, 235, 235, 236, 236, 236, 236, 237, 237, 237, 237, 238, 238, 238, 238, 239, 239, 239, 239, 240, 240, 240, 240, 241, 241, 241, 241, 242, 242, 242, 242, 243, 243, 243, 243, 244, 244, 244, 244, 245, 245, 245, 245, 246, 246, 246, 246, 247, 247, 247, 247, 248, 248, 248, 248, 249, 249, 249, 249, 250, 250, 250, 250, 251, 251, 251, 251, 252, 252, 252, 252, 253, 253, 253, 253, 254, 254, 254, 254, 255, 255, 255, 255, 256, 256, 256, 256, 257, 257, 257, 257, 258, 258, 258, 258, 259, 259, 259, 259, 260, 260, 260, 260, 261, 261, 261, 261, 262, 262, 262, 262, 263, 263, 263, 263, 264, 264, 264, 264, 265, 265, 265, 265, 266, 266, 266, 266, 267, 267, 267, 267, 268, 268, 268, 268, 269, 269, 269, 269, 270, 270, 270, 270, 271, 271, 271, 271, 272, 272, 272, 272, 273, 273, 273, 273, 274, 274, 274, 274, 275, 275, 275, 275, 276, 276, 276, 276, 277, 277, 277, 277, 278, 278, 278, 278, 279, 279, 279, 279, 280, 280, 280, 280, 281, 281, 281, 281, 282, 282, 282, 282, 283, 283, 283, 283, 284, 284, 284, 284, 285, 285, 285, 285, 286, 286, 286, 286, 287, 287, 287, 287, 288, 288, 288, 288, 289, 289, 289, 289, 290, 290, 290, 290, 291, 291, 291, 291, 292, 292, 292, 292, 293, 293, 293, 293, 294, 294, 294, 294, 295, 295, 295, 295, 296, 296, 296, 296, 297, 297, 297, 297, 298, 298, 298, 298, 299, 299, 299, 299, 300, 300, 300, 300, 301, 301, 301, 301, 302, 302, 302, 302, 303, 303, 303, 303, 304, 304, 304, 304, 305, 305, 305, 305, 306, 306, 306, 306, 307, 307, 307, 307, 308, 308, 308, 308, 309, 309, 309, 309, 310, 310, 310, 310, 311, 311, 311, 311, 312, 312, 312, 312, 313, 313, 313, 313, 314, 314, 314, 314, 315, 315, 315, 315, 316, 316, 316, 316, 317, 317, 317, 317, 318, 318, 318, 318, 319, 319, 319, 319, 320, 320, 320, 320, 321, 321, 321, 321, 322, 322, 322, 322, 323, 323, 323, 323, 324, 324, 324, 324, 325, 325, 325, 325, 326, 326, 326, 326, 327, 327, 327, 327, 328, 328, 328, 328, 329, 329, 329, 329, 330, 330, 330, 330, 331, 331, 331, 331, 332, 332, 332, 332, 333, 333, 333, 333, 334, 334, 334, 334, 335, 335, 335, 335, 336, 336, 336, 336, 337, 337, 337, 337, 338, 338, 338, 338, 339, 339, 339, 339, 340, 340, 340, 340, 341, 341, 341, 341, 342, 342, 342, 342, 343, 343, 343, 343, 344, 344, 344, 344, 345, 345, 345, 345, 346, 346, 346, 346, 347, 347, 347, 347, 348, 348, 348, 348, 349, 349, 349, 349, 350, 350, 350, 350, 351, 351, 351, 351, 352, 352, 352, 352, 353, 353, 353, 353, 354, 354, 354, 354, 355, 355, 355, 355, 356, 356, 356, 356, 357, 357, 357, 357, 358, 358, 358, 358, 359, 359, 359, 359, 360, 360, 360, 360, 361, 361, 361, 361, 362, 362, 362, 362, 363, 363, 363, 363, 364, 364, 364, 364, 365, 365, 365, 365, 366, 366, 366, 366, 367, 367, 367, 367, 368, 368, 368, 368, 369, 369, 369, 369, 370, 370, 370, 370, 371, 371, 371, 371, 372, 372, 372, 372, 373, 373, 373, 373, 374, 374, 374, 374, 375, 375, 375, 375, 376, 376, 376, 376, 377, 377, 377, 377, 378, 378, 378, 378, 379, 379, 379, 379, 380, 380, 380, 380, 381, 381, 381, 381, 382, 382, 382, 382, 383, 383, 383, 383, 384, 384, 384, 384, 385, 385, 385, 385, 386, 386, 386, 386, 387, 387, 387, 387, 388, 388, 388, 388, 389, 389, 389, 389, 390, 390, 390, 390, 391, 391, 391, 391, 392, 392, 392, 392, 393, 393, 393, 393, 394, 394, 394, 394, 395, 395, 395, 395, 396, 396, 396, 396, 397, 397, 397, 397, 398, 398, 398, 398, 399, 399, 399, 399, 400, 400, 400, 400, 401, 401, 401, 401, 402, 402, 402, 402, 403, 403, 403, 403, 404, 404, 404, 404, 405, 405, 405, 405, 406, 406, 406, 406, 407, 407, 407, 407, 408, 408, 408, 408, 409, 409, 409, 409, 410, 410, 410, 410, 411, 411, 411, 411, 412, 412, 412, 412, 413, 413, 413, 413, 414, 414, 414, 414, 415, 415, 415, 415, 416, 416, 416, 416, 417, 417, 417, 417, 418, 418, 418, 418, 419, 419, 419, 419, 420, 420, 420, 420, 421, 421, 421, 421, 422, 422, 422, 422, 423, 423, 423, 423, 424, 424, 424, 424, 425, 425, 425, 425, 426, 426, 426, 426, 427, 427, 427, 427, 428, 428, 428, 428, 429, 429, 429, 429, 430, 430, 430, 430, 431, 431, 431, 431, 432, 432, 432, 432, 433, 433, 433, 433, 434, 434, 434, 434, 435, 435, 435, 435, 436, 436, 436, 436, 437, 437, 437, 437, 438, 438, 438, 438, 439, 439, 439, 439, 440, 440, 440, 440, 441, 441, 441, 441, 442, 442, 442, 442, 443, 443, 443, 443, 444, 444, 444, 444, 445, 445, 445, 445, 446, 446, 446, 446, 447, 447, 447, 447, 448, 448, 448, 448, 449, 449, 449, 449, 450, 451, 452, 453, 451, 452, 453, 450, 452, 453, 450, 451, 453, 450, 451, 452, 454, 454, 454, 454, 455, 455, 455, 455, 456, 456, 456, 456, 457, 457, 457, 457, 458, 458, 458, 458, 459, 459, 459, 459, 460, 460, 460, 460, 461, 461, 461, 461, 462, 462, 462, 462, 463, 463, 463, 463, 464, 464, 464, 464, 465, 465, 465, 465, 466, 466, 466, 466, 467, 467, 467, 467, 468, 468, 468, 468, 469, 469, 469, 469, 470, 470, 470, 470, 471, 471, 471, 471, 472, 472, 472, 472, 473, 473, 473, 473, 474, 474, 474, 474, 475, 475, 475, 475, 476, 476, 476, 476, 477, 477, 477, 477, 478, 478, 478, 478, 479, 479, 479, 479, 480, 480, 480, 480, 481, 481, 481, 481, 482, 482, 482, 482, 483, 483, 483, 483, 484, 484, 484, 484, 485, 485, 485, 485, 486, 486, 486, 486, 487, 487, 487, 487, 488, 488, 488, 488, 489, 489, 489, 489, 490, 490, 490, 490, 491, 491, 491, 491, 492, 492, 492, 492, 493, 493, 493, 493, 494, 494, 494, 494, 495, 495, 495, 495, 496, 496, 496, 496, 497, 497, 497, 497, 498, 498, 498, 498, 499, 499, 499, 499, 500, 500, 500, 500, 501, 501, 501, 501, 502, 502, 502, 502, 503, 503, 503, 503, 504, 504, 504, 504, 505, 505, 505, 505, 506, 506, 506, 506, 507, 507, 507, 507, 508, 508, 508, 508, 509, 509, 509, 509, 510, 510, 510, 510, 511, 511, 511, 511, 512, 512, 512, 512, 513, 513, 513, 513, 514, 514, 514, 514, 515, 515, 515, 515, 516, 516, 516, 516, 517, 517, 517, 517, 518, 518, 518, 518, 519, 519, 519, 519, 520, 520, 520, 520, 521, 521, 521, 521, 522, 522, 522, 522, 523, 523, 523, 523, 524, 524, 524, 524, 525, 525, 525, 525, 526, 526, 526, 526, 527, 527, 527, 527, 528, 528, 528, 528, 529, 529, 529, 529, 530, 530, 530, 530, 531, 531, 531, 531, 532, 532, 532, 532, 533, 533, 533, 533, 534, 534, 534, 534, 535, 535, 535, 535, 536, 536, 536, 536, 537, 537, 537, 537, 538, 538, 538, 538, 539, 539, 539, 539, 540, 540, 540, 540, 541, 541, 541, 541, 542, 542, 542, 542, 543, 543, 543, 543, 544, 544, 544, 544, 545, 545, 545, 545, 546, 546, 546, 546, 547, 547, 547, 547, 548, 548, 548, 548, 549, 549, 549, 549, 550, 550, 550, 550, 551, 551, 551, 551, 552, 552, 552, 552, 553, 553, 553, 553, 554, 554, 554, 554, 555, 555, 555, 555, 556, 556, 556, 556, 557, 557, 557, 557, 558, 558, 558, 558, 559, 559, 559, 559, 560, 560, 560, 560, 561, 561, 561, 561, 562, 562, 562, 562, 563, 563, 563, 563, 564, 564, 564, 564, 565, 565, 565, 565, 566, 566, 566, 566, 567, 567, 567, 567, 568, 568, 568, 568, 569, 569, 569, 569, 570, 570, 570, 570, 571, 571, 571, 571, 572, 572, 572, 572, 573, 573, 573, 573, 574, 574, 574, 574, 575, 575, 575, 575, 576, 576, 576, 576, 577, 577, 577, 577, 578, 578, 578, 578, 579, 579, 579, 579, 580, 580, 580, 580, 581, 581, 581, 581, 582, 582, 582, 582, 583, 583, 583, 583, 584, 584, 584, 584, 585, 585, 585, 585, 586, 586, 586, 586, 587, 587, 587, 587, 588, 588, 588, 588, 589, 589, 589, 589, 590, 590, 590, 590, 591, 591, 591, 591, 592, 592, 592, 592, 593, 593, 593, 593, 594, 594, 594, 594, 595, 595, 595, 595, 596, 596, 596, 596, 597, 597, 597, 597, 598, 598, 598, 598, 599, 599, 599, 599, 600, 600, 600, 600, 601, 601, 601, 601, 602, 602, 602, 602, 603, 603, 603, 603, 604, 604, 604, 604, 605, 605, 605, 605, 606, 606, 606, 606, 607, 607, 607, 607, 608, 608, 608, 608, 609, 609, 609, 609, 610, 610, 610, 610, 611, 611, 611, 611, 612, 612, 612, 612, 613, 613, 613, 613, 614, 614, 614, 614, 615, 615, 615, 615, 616, 616, 616, 616, 617, 617, 617, 617, 618, 618, 618, 618, 619, 619, 619, 619, 620, 620, 620, 620, 621, 621, 621, 621, 622, 622, 622, 622, 623, 623, 623, 623, 624, 624, 624, 624, 625, 625, 625, 625, 626, 626, 626, 626, 627, 627, 627, 627, 628, 628, 628, 628, 629, 629, 629, 629, 630, 630, 630, 630, 631, 631, 631, 631, 632, 632, 632, 632, 633, 633, 633, 633, 634, 634, 634, 634, 635, 635, 635, 635, 636, 636, 636, 636, 637, 637, 637, 637, 638, 638, 638, 638, 639, 639, 639, 639, 640, 640, 640, 640, 641, 641, 641, 641, 642, 642, 642, 642, 643, 643, 643, 643, 644, 644, 644, 644, 645, 645, 645, 645, 646, 646, 646, 646, 647, 647, 647, 647, 648, 648, 648, 648, 649, 649, 649, 649, 650, 650, 650, 650, 651, 651, 651, 651, 652, 652, 652, 652, 653, 653, 653, 653, 654, 654, 654, 654, 655, 655, 655, 655, 656, 656, 656, 656, 657, 657, 657, 657, 658, 658, 658, 658, 659, 659, 659, 659, 660, 660, 660, 660, 661, 661, 661, 661, 662, 662, 662, 662, 663, 663, 663, 663, 664, 664, 664, 664, 665, 665, 665, 665, 666, 666, 666, 666, 667, 667, 667, 667, 668, 668, 668, 668, 669, 669, 669, 669, 670, 670, 670, 670, 671, 671, 671, 671, 672, 672, 672, 672, 673, 673, 673, 673, 674, 674, 674, 674, 675, 675, 675, 675, 676, 676, 676, 676, 677, 677, 677, 677, 678, 678, 678, 678, 679, 679, 679, 679, 680, 680, 680, 680, 681, 681, 681, 681, 682, 682, 682, 682, 683, 683, 683, 683, 684, 684, 684, 684, 685, 685, 685, 685, 686, 686, 686, 686, 687, 687, 687, 687, 688, 688, 688, 688, 689, 689, 689, 689, 690, 690, 690, 690, 691, 691, 691, 691, 692, 692, 692, 692, 693, 693, 693, 693, 694, 694, 694, 694, 695, 695, 695, 695, 696, 696, 696, 696, 697, 697, 697, 697, 698, 698, 698, 698, 699, 699, 699, 699, 700, 700, 700, 700, 701, 701, 701, 701, 702, 702, 702, 702, 703, 703, 703, 703, 704, 704, 704, 704, 705, 705, 705, 705, 706, 706, 706, 706, 707, 707, 707, 707, 708, 708, 708, 708, 709, 709, 709, 709, 710, 710, 710, 710, 711, 711, 711, 711, 712, 712, 712, 712, 713, 713, 713, 713, 714, 714, 714, 714, 715, 715, 715, 715, 716, 716, 716, 716, 717, 717, 717, 717, 718, 718, 718, 718, 719, 719, 719, 719, 720, 720, 720, 720, 721, 721, 721, 721, 722, 722, 722, 722, 723, 723, 723, 723, 724, 724, 724, 724, 725, 725, 725, 725, 726, 726, 726, 726, 727, 727, 727, 727, 728, 728, 728, 728, 729, 729, 729, 729, 730, 730, 730, 730, 731, 731, 731, 731, 732, 732, 732, 732, 733, 733, 733, 733, 734, 734, 734, 734, 735, 735, 735, 735, 736, 736, 736, 736, 737, 737, 737, 737, 738, 738, 738, 738, 739, 739, 739, 739, 740, 740, 740, 740, 741, 741, 741, 741, 742, 742, 742, 742, 743, 743, 743, 743, 744, 744, 744, 744, 745, 745, 745, 745, 746, 746, 746, 746, 747, 747, 747, 747, 748, 748, 748, 748, 749, 749, 749, 749, 750, 750, 750, 750, 751, 751, 751, 751, 752, 752, 752, 752, 753, 753, 753, 753, 754, 754, 754, 754, 755, 755, 755, 755, 756, 756, 756, 756, 757, 757, 757, 757, 758, 758, 758, 758, 759, 759, 759, 759, 760, 760, 760, 760, 761, 761, 761, 761, 762, 762, 762, 762, 763, 763, 763, 763, 764, 764, 764, 764, 765, 765, 765, 765, 766, 766, 766, 766, 767, 767, 767, 767, 768, 768, 768, 768, 769, 769, 769, 769, 770, 770, 770, 770, 771, 771, 771, 771, 772, 772, 772, 772, 773, 773, 773, 773]
    }, {
      n: "TILES_Pillars_BG",
      t: "T",
      d: 1000100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_pillars_dark_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 5,
      items: 1,
      fl: 66666,
      cells: [35, 0, 12, 36, 0, 13, 37, 0, 14, 42, 0, 12, 43, 0, 13, 44, 0, 14, 35, 1, 12, 36, 1, 13, 37, 1, 14, 42, 1, 12, 43, 1, 13, 44, 1, 14, 35, 2, 12, 36, 2, 13, 37, 2, 14, 42, 2, 12, 43, 2, 13, 44, 2, 14, 35, 3, 12, 36, 3, 13, 37, 3, 14, 42, 3, 12, 43, 3, 13, 44, 3, 14, 35, 4, 12, 36, 4, 13, 37, 4, 14, 42, 4, 12, 43, 4, 13, 44, 4, 14, 35, 5, 12, 36, 5, 13, 37, 5, 14, 42, 5, 12, 43, 5, 13, 44, 5, 14, 35, 6, 12, 36, 6, 13, 37, 6, 14, 42, 6, 12, 43, 6, 13, 44, 6, 14, 35, 7, 12, 36, 7, 13, 37, 7, 14, 42, 7, 12, 43, 7, 13, 44, 7, 14, 35, 8, 12, 36, 8, 13, 37, 8, 14, 42, 8, 12, 43, 8, 13, 44, 8, 14, 18, 9, 6, 19, 9, 7, 20, 9, 8, 25, 9, 6, 26, 9, 7, 27, 9, 8, 35, 9, 12, 36, 9, 13, 37, 9, 14, 42, 9, 12, 43, 9, 13, 44, 9, 14, 18, 10, 9, 19, 10, 10, 20, 10, 11, 25, 10, 9, 26, 10, 10, 27, 10, 11, 35, 10, 9, 36, 10, 10, 37, 10, 11, 42, 10, 9, 43, 10, 10, 44, 10, 11, 18, 11, 9, 19, 11, 10, 20, 11, 11, 25, 11, 9, 26, 11, 10, 27, 11, 11, 35, 11, 9, 36, 11, 10, 37, 11, 11, 42, 11, 9, 43, 11, 10, 44, 11, 11]
    }, {
      n: "OBJECTS_Fountain",
      t: "I",
      d: 1000200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_ch2_scene25_fountain", 0, 64, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF1D0202", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch2/room_dw_mansion_top": {
    w: 2560,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_ch2_scene26"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 26, 246, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "TILES",
      t: "T",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_mansion_top",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 9,
      items: 1,
      fl: 66666,
      cells: [0, 7, 38, 1, 7, 38, 2, 7, 38, 3, 7, 38, 4, 7, 38, 5, 7, 38, 6, 7, 38, 7, 7, 38, 8, 7, 38, 9, 7, 38, 10, 7, 38, 11, 7, 38, 12, 7, 38, 13, 7, 38, 14, 7, 38, 15, 7, 38, 16, 7, 38, 17, 7, 38, 18, 7, 38, 19, 7, 38, 20, 7, 38, 21, 7, 38, 22, 7, 38, 23, 7, 38, 24, 7, 38, 25, 7, 38, 26, 7, 38, 27, 7, 38, 28, 7, 38, 29, 7, 38, 30, 7, 38, 31, 7, 38, 32, 7, 38, 33, 7, 38, 34, 7, 38, 35, 7, 38, 36, 7, 38, 37, 7, 38, 38, 7, 38, 39, 7, 38, 40, 7, 38, 41, 7, 38, 42, 7, 38, 43, 7, 38, 44, 7, 38, 45, 7, 38, 46, 7, 38, 47, 7, 38, 48, 7, 38, 49, 7, 38, 50, 7, 38, 51, 7, 38, 52, 7, 38, 53, 7, 38, 54, 7, 38, 55, 7, 38, 56, 7, 38, 57, 7, 38, 58, 7, 38, 59, 7, 38, 60, 7, 38, 61, 7, 38, 62, 7, 38, 63, 7, 38, 0, 8, 48, 1, 8, 48, 2, 8, 48, 3, 8, 48, 4, 8, 48, 5, 8, 48, 6, 8, 48, 7, 8, 48, 8, 8, 48, 9, 8, 48, 10, 8, 48, 11, 8, 48, 12, 8, 48, 13, 8, 48, 14, 8, 48, 15, 8, 48, 16, 8, 48, 17, 8, 48, 18, 8, 48, 19, 8, 48, 20, 8, 48, 21, 8, 48, 22, 8, 48, 23, 8, 48, 24, 8, 48, 25, 8, 48, 26, 8, 48, 27, 8, 48, 28, 8, 48, 29, 8, 48, 30, 8, 48, 31, 8, 48, 32, 8, 48, 33, 8, 48, 34, 8, 48, 35, 8, 48, 36, 8, 48, 37, 8, 48, 38, 8, 48, 39, 8, 48, 40, 8, 48, 41, 8, 48, 42, 8, 48, 43, 8, 48, 44, 8, 48, 45, 8, 48, 46, 8, 48, 47, 8, 48, 48, 8, 48, 49, 8, 48, 50, 8, 48, 51, 8, 48, 52, 8, 48, 53, 8, 48, 54, 8, 48, 55, 8, 48, 56, 8, 48, 57, 8, 48, 58, 8, 48, 59, 8, 48, 60, 8, 48, 61, 8, 48, 62, 8, 48, 63, 8, 48]
    }, {
      n: "BG_Wall",
      t: "I",
      d: 1000088,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_ch2_scene26_wall", 0, 64, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "OBJECTS_GigaQueen",
      t: "I",
      d: 1000176,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_ch2_scene26_gigaqueen", 0, 96, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_ch2_scene27_queenhand", 0, 128, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "BG_Rocks",
      t: "B",
      d: 1000264,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: ["spr_cutscene_26_rocks_bg", true, false, false, true, false, "FFFFFFFF", 0, 1, "FramesPerGameFrame"]
    }, {
      n: "BG_Rocks_Small",
      t: "B",
      d: 1000332,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: ["spr_cutscene_26_rocks_bg_2", true, false, true, true, false, "FFFFFFFF", 0, 1, "FramesPerGameFrame"]
    }, {
      n: "OBJECTS_Cityscape",
      t: "I",
      d: 1000400,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_ch2_scene26_cityscape", 0, 32, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF1D0202", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch2/room_dw_mansion_fountain": {
    w: 640,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_fountainkris_ch2_sideb"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 0, 40, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_fountainkris_ch2_sideb", 300, 260, 2, 2, 0, "spr_krisu_bright", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "TILES",
      t: "A",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_pxwhite", -40, -40, 240.00002, 560, "FF000000", 0, 1, 0], ["spr_pxwhite", 440, -40, 240.00002, 560, "FF000000", 0, 1, 0], ["spr_pxwhite", 200, -40, 240.00002, 40, "FF000000", 0, 1, 0], ["spr_pxwhite", 200, 480, 240.00002, 40, "FF000000", 0, 1, 0]]
    }, {
      n: "OBJECTS_Fountain",
      t: "I",
      d: 1100000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_darkfountain", 224, 0, 2, 2, 0, "spr_fountainedge", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF40FF00", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch3/room_dw_snow_zone": {
    w: 2960,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_ch3_PTB02"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 120, 240, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_ch3_BTB04", 0, 80, 1, 1, 0, "spr_event", true, 0, 0, "FFFFFFFF"], ["obj_savepoint", 200, 200, 2, 2, 0, "spr_savepoint", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "ASSETS",
      t: "A",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "BG_Parallax",
      t: "I",
      d: 1000100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_dw_snow_zone_parallax", 40, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 1, "FramesPerGameFrame"]
    }],
    rtiles: []
  },
  "ch3/room_ch3_gameshowroom": {
    w: 640,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_ch3_GSD01"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 294, 196, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_ch3_audience", 0, 40, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "ASSETS_CURTAINS",
      t: "A",
      d: 700000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_gameshow_curtain", 0, 0, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_gameshow_curtain", 640, 0, -2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "TILES_LIGHTS",
      t: "T",
      d: 800000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_ch3_dw_tvland_lights_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 8,
      items: 1,
      fl: 66666,
      cells: [1, 0, 54, 2, 0, 55, 3, 0, 56, 12, 0, 36, 13, 0, 37, 14, 0, 38, 1, 1, 63, 2, 1, 64, 3, 1, 65, 12, 1, 45, 13, 1, 46, 14, 1, 47]
    }, {
      n: "OBJECTS_TV_SCREEN",
      t: "I",
      d: 990000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_dw_gameshow_screen", 106, 30, 2, 2, 0, "spr_dw_gameshow_tv_frame", true, 0, 0, "FFFFFFFF"], ["obj_dw_gameshow_stage_overlay", 0, 120, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "BACKGROUND",
      t: "A",
      d: 990100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_gameshow_bg", 0, 0, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "BGTiles",
      t: "T",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_b3bs_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 16,
      items: 1,
      fl: 66666,
      cells: [0, 0, 102, 1, 0, 102, 2, 0, 102, 3, 0, 102, 4, 0, 102, 5, 0, 102, 6, 0, 102, 7, 0, 102, 8, 0, 102, 9, 0, 102, 10, 0, 102, 11, 0, 102, 12, 0, 102, 13, 0, 102, 14, 0, 102, 15, 0, 102, 0, 1, 102, 1, 1, 102, 2, 1, 102, 3, 1, 102, 4, 1, 102, 5, 1, 102, 6, 1, 102, 7, 1, 102, 8, 1, 102, 9, 1, 102, 10, 1, 102, 11, 1, 102, 12, 1, 102, 13, 1, 102, 14, 1, 102, 15, 1, 102, 0, 2, 102, 1, 2, 102, 2, 2, 102, 3, 2, 102, 4, 2, 102, 5, 2, 102, 6, 2, 102, 7, 2, 102, 8, 2, 102, 9, 2, 102, 10, 2, 102, 11, 2, 102, 12, 2, 102, 13, 2, 102, 14, 2, 102, 15, 2, 102, 0, 3, 102, 1, 3, 102, 2, 3, 102, 3, 3, 102, 4, 3, 102, 5, 3, 102, 6, 3, 102, 7, 3, 102, 8, 3, 102, 9, 3, 102, 10, 3, 102, 11, 3, 102, 12, 3, 102, 13, 3, 102, 14, 3, 102, 15, 3, 102, 0, 4, 102, 1, 4, 102, 2, 4, 102, 3, 4, 102, 4, 4, 102, 5, 4, 102, 6, 4, 102, 7, 4, 102, 8, 4, 102, 9, 4, 102, 10, 4, 102, 11, 4, 102, 12, 4, 102, 13, 4, 102, 14, 4, 102, 15, 4, 102, 0, 5, 102, 1, 5, 102, 2, 5, 102, 3, 5, 102, 4, 5, 102, 5, 5, 102, 6, 5, 102, 7, 5, 102, 8, 5, 102, 9, 5, 102, 10, 5, 102, 11, 5, 102, 12, 5, 102, 13, 5, 102, 14, 5, 102, 15, 5, 102, 0, 6, 102, 1, 6, 102, 2, 6, 102, 3, 6, 102, 4, 6, 102, 5, 6, 102, 6, 6, 102, 7, 6, 102, 8, 6, 102, 9, 6, 102, 10, 6, 102, 11, 6, 102, 12, 6, 102, 13, 6, 102, 14, 6, 102, 15, 6, 102, 0, 7, 102, 1, 7, 102, 2, 7, 102, 3, 7, 102, 4, 7, 102, 5, 7, 102, 6, 7, 102, 7, 7, 102, 8, 7, 102, 9, 7, 102, 10, 7, 102, 11, 7, 102, 12, 7, 102, 13, 7, 102, 14, 7, 102, 15, 7, 102, 0, 8, 102, 1, 8, 102, 2, 8, 102, 3, 8, 102, 4, 8, 102, 5, 8, 102, 6, 8, 102, 7, 8, 102, 8, 8, 102, 9, 8, 102, 10, 8, 102, 11, 8, 102, 12, 8, 102, 13, 8, 102, 14, 8, 102, 15, 8, 102, 0, 9, 102, 1, 9, 102, 2, 9, 102, 3, 9, 102, 4, 9, 102, 5, 9, 102, 6, 9, 102, 7, 9, 102, 8, 9, 102, 9, 9, 102, 10, 9, 102, 11, 9, 102, 12, 9, 102, 13, 9, 102, 14, 9, 102, 15, 9, 102, 0, 10, 102, 1, 10, 102, 2, 10, 102, 3, 10, 102, 4, 10, 102, 5, 10, 102, 6, 10, 102, 7, 10, 102, 8, 10, 102, 9, 10, 102, 10, 10, 102, 11, 10, 102, 12, 10, 102, 13, 10, 102, 14, 10, 102, 15, 10, 102, 0, 11, 102, 1, 11, 102, 2, 11, 102, 3, 11, 102, 4, 11, 102, 5, 11, 102, 6, 11, 102, 7, 11, 102, 8, 11, 102, 9, 11, 102, 10, 11, 102, 11, 11, 102, 12, 11, 102, 13, 11, 102, 14, 11, 102, 15, 11, 102]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch3/room_dw_b3bs_zapper_b": {
    w: 2760,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_b3bs_zapper_b"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 80, 194, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_b3bs_zapper_b", -40, 0, 1, 1, 0, "spr_board_event", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 394, 419, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 280, 419, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 335, 448, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 570, 444, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 920, 428, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1138, 418, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1206, 443, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1399, 423, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1467, 448, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1285, 423, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1340, 452, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1651, 425, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1537, 425, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1592, 454, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1813, 426, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 2199, 440, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 2024, 461, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 2421, 419, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 2489, 444, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 2362, 448, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 749, 440, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_b3bs_stealthSolid", 200, 280, 25.000004, 1, 0, "spr_40x40", true, 0, 0, "FFFFFFFF"], ["obj_b3bs_stealthSolid", 1560, 280, 25.000002, 1, 0, "spr_40x40", true, 0, 0, "FFFFFFFF"], ["obj_dw_teevie_zapperbtimeout", 40, 160, 2, 2, 0, "spr_dw_teevie_zapperbtimeout", true, 0, 1, "FFFFFFFF"]]
    }, {
      n: "Foreground_Sprites",
      t: "A",
      d: 10001,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "Foreground_Tiles",
      t: "T",
      d: 10002,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_b3bs_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 16,
      items: 1,
      fl: 66666,
      cells: []
    }, {
      n: "BG_Sprites",
      t: "A",
      d: 1000050,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_ch3_b3bs_door", 1320, 86, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "FloorTiles_Accents",
      t: "T",
      d: 1000100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_b3bs_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 16,
      items: 1,
      fl: 66666,
      cells: [0, 3, 232, 1, 3, 223, 2, 3, 223, 3, 3, 223, 4, 3, 223, 5, 3, 223, 6, 3, 223, 7, 3, 223, 8, 3, 223, 9, 3, 223, 10, 3, 223, 11, 3, 223, 12, 3, 223, 13, 3, 223, 14, 3, 223, 15, 3, 223, 16, 3, 223, 17, 3, 223, 18, 3, 223, 19, 3, 223, 20, 3, 223, 21, 3, 223, 22, 3, 223, 23, 3, 223, 24, 3, 223, 25, 3, 223, 26, 3, 223, 27, 3, 223, 28, 3, 223, 29, 3, 233, 39, 3, 232, 40, 3, 223, 41, 3, 223, 42, 3, 223, 43, 3, 223, 44, 3, 223, 45, 3, 223, 46, 3, 223, 47, 3, 223, 48, 3, 223, 49, 3, 223, 50, 3, 223, 51, 3, 223, 52, 3, 223, 53, 3, 223, 54, 3, 223, 55, 3, 223, 56, 3, 223, 57, 3, 223, 58, 3, 223, 59, 3, 223, 60, 3, 223, 61, 3, 223, 62, 3, 223, 63, 3, 223, 64, 3, 223, 65, 3, 223, 66, 3, 223, 67, 3, 223, 68, 3, 233, 30, 5, 251, 31, 5, 251, 32, 5, 251, 33, 5, 251, 34, 5, 251, 35, 5, 251, 36, 5, 251, 37, 5, 251, 38, 5, 251, 0, 6, 251, 1, 6, 251, 2, 6, 251, 3, 6, 251, 4, 6, 251, 5, 6, 251, 6, 6, 251, 7, 6, 251, 8, 6, 251, 9, 6, 251, 10, 6, 251, 11, 6, 251, 12, 6, 251, 13, 6, 251, 14, 6, 251, 15, 6, 251, 16, 6, 251, 17, 6, 251, 18, 6, 251, 19, 6, 251, 20, 6, 251, 21, 6, 251, 22, 6, 251, 23, 6, 251, 24, 6, 251, 25, 6, 251, 26, 6, 251, 27, 6, 251, 28, 6, 251, 29, 6, 251, 39, 6, 251, 40, 6, 251, 41, 6, 251, 42, 6, 251, 43, 6, 251, 44, 6, 251, 45, 6, 251, 46, 6, 251, 47, 6, 251, 48, 6, 251, 49, 6, 251, 50, 6, 251, 51, 6, 251, 52, 6, 251, 53, 6, 251, 54, 6, 251, 55, 6, 251, 56, 6, 251, 57, 6, 251, 58, 6, 251, 59, 6, 251, 60, 6, 251, 61, 6, 251, 62, 6, 251, 63, 6, 251, 64, 6, 251, 65, 6, 251, 66, 6, 251, 67, 6, 251, 68, 6, 251, 5, 7, 118, 6, 7, 118, 7, 7, 118, 8, 7, 118, 9, 7, 118, 10, 7, 118, 11, 7, 118, 12, 7, 118, 13, 7, 118, 14, 7, 118, 15, 7, 118, 16, 7, 118, 17, 7, 118, 18, 7, 118, 19, 7, 118, 20, 7, 118, 21, 7, 118, 22, 7, 118, 23, 7, 118, 24, 7, 118, 25, 7, 118, 26, 7, 118, 27, 7, 118, 28, 7, 118, 29, 7, 118, 30, 7, 118, 31, 7, 118, 32, 7, 118, 33, 7, 118, 34, 7, 118, 35, 7, 118, 36, 7, 118, 37, 7, 118, 38, 7, 118, 39, 7, 118, 40, 7, 118, 41, 7, 118, 42, 7, 118, 43, 7, 118, 44, 7, 118, 45, 7, 118, 46, 7, 118, 47, 7, 118, 48, 7, 118, 49, 7, 118, 50, 7, 118, 51, 7, 118, 52, 7, 118, 53, 7, 118, 54, 7, 118, 55, 7, 118, 56, 7, 118, 57, 7, 118, 58, 7, 118, 59, 7, 118, 60, 7, 118, 61, 7, 118, 62, 7, 118, 63, 7, 118, 0, 10, 227, 1, 10, 227, 2, 10, 227, 3, 10, 227, 4, 10, 227, 64, 10, 227, 65, 10, 227, 66, 10, 227, 67, 10, 227, 68, 10, 227]
    }, {
      n: "FloorTiles",
      t: "T",
      d: 1000200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_b3bs_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 16,
      items: 1,
      fl: 66666,
      cells: [0, 0, 218, 1, 0, 218, 2, 0, 218, 3, 0, 218, 4, 0, 218, 5, 0, 218, 6, 0, 218, 7, 0, 218, 8, 0, 218, 9, 0, 218, 10, 0, 218, 11, 0, 218, 12, 0, 218, 13, 0, 218, 14, 0, 218, 15, 0, 218, 16, 0, 218, 17, 0, 218, 18, 0, 218, 19, 0, 218, 20, 0, 218, 21, 0, 218, 22, 0, 218, 23, 0, 218, 24, 0, 218, 25, 0, 218, 26, 0, 218, 27, 0, 218, 28, 0, 218, 29, 0, 218, 30, 0, 218, 31, 0, 218, 32, 0, 218, 33, 0, 218, 34, 0, 218, 35, 0, 218, 36, 0, 218, 37, 0, 218, 38, 0, 218, 39, 0, 218, 40, 0, 218, 41, 0, 218, 42, 0, 218, 43, 0, 218, 44, 0, 218, 45, 0, 218, 46, 0, 218, 47, 0, 218, 48, 0, 218, 49, 0, 218, 50, 0, 218, 51, 0, 218, 52, 0, 218, 53, 0, 218, 54, 0, 218, 55, 0, 218, 56, 0, 218, 57, 0, 218, 58, 0, 218, 59, 0, 218, 60, 0, 218, 61, 0, 218, 62, 0, 218, 63, 0, 218, 64, 0, 218, 65, 0, 218, 66, 0, 218, 67, 0, 218, 68, 0, 218, 4, 1, 1, 9, 1, 1, 14, 1, 1, 18, 1, 1, 23, 1, 1, 27, 1, 1, 41, 1, 1, 45, 1, 1, 50, 1, 1, 54, 1, 1, 59, 1, 1, 64, 1, 1, 4, 2, 10, 9, 2, 10, 14, 2, 10, 18, 2, 10, 23, 2, 10, 27, 2, 10, 30, 2, 56, 31, 2, 46, 32, 2, 46, 33, 2, 46, 34, 2, 46, 35, 2, 46, 36, 2, 46, 37, 2, 46, 38, 2, 57, 41, 2, 10, 45, 2, 10, 50, 2, 10, 54, 2, 10, 59, 2, 10, 64, 2, 10, 0, 3, 219, 1, 3, 190, 2, 3, 189, 3, 3, 190, 4, 3, 189, 5, 3, 190, 6, 3, 189, 7, 3, 190, 8, 3, 189, 9, 3, 190, 10, 3, 189, 11, 3, 190, 12, 3, 189, 13, 3, 190, 14, 3, 189, 15, 3, 190, 16, 3, 189, 17, 3, 190, 18, 3, 189, 19, 3, 190, 20, 3, 189, 21, 3, 190, 22, 3, 189, 23, 3, 190, 24, 3, 189, 25, 3, 190, 26, 3, 189, 27, 3, 190, 28, 3, 189, 29, 3, 199, 30, 3, 65, 31, 3, 45, 32, 3, 46, 33, 3, 45, 34, 3, 46, 35, 3, 45, 36, 3, 46, 37, 3, 45, 38, 3, 66, 39, 3, 207, 40, 3, 190, 41, 3, 190, 42, 3, 190, 43, 3, 190, 44, 3, 190, 45, 3, 190, 46, 3, 190, 47, 3, 190, 48, 3, 190, 49, 3, 190, 50, 3, 190, 51, 3, 190, 52, 3, 190, 53, 3, 190, 54, 3, 190, 55, 3, 190, 56, 3, 190, 57, 3, 190, 58, 3, 190, 59, 3, 190, 60, 3, 190, 61, 3, 190, 62, 3, 190, 63, 3, 190, 64, 3, 190, 65, 3, 190, 66, 3, 190, 67, 3, 190, 68, 3, 199, 0, 4, 207, 1, 4, 190, 2, 4, 190, 3, 4, 190, 4, 4, 190, 5, 4, 190, 6, 4, 190, 7, 4, 190, 8, 4, 190, 9, 4, 190, 10, 4, 190, 11, 4, 190, 12, 4, 190, 13, 4, 190, 14, 4, 190, 15, 4, 190, 16, 4, 190, 17, 4, 190, 18, 4, 190, 19, 4, 190, 20, 4, 190, 21, 4, 190, 22, 4, 190, 23, 4, 190, 24, 4, 190, 25, 4, 190, 26, 4, 190, 27, 4, 190, 28, 4, 190, 29, 4, 208, 30, 4, 65, 31, 4, 46, 32, 4, 46, 33, 4, 46, 34, 4, 46, 35, 4, 46, 36, 4, 46, 37, 4, 46, 38, 4, 66, 39, 4, 228, 40, 4, 190, 41, 4, 189, 42, 4, 190, 43, 4, 189, 44, 4, 190, 45, 4, 189, 46, 4, 190, 47, 4, 189, 48, 4, 190, 49, 4, 189, 50, 4, 190, 51, 4, 189, 52, 4, 190, 53, 4, 189, 54, 4, 190, 55, 4, 189, 56, 4, 190, 57, 4, 189, 58, 4, 190, 59, 4, 189, 60, 4, 190, 61, 4, 189, 62, 4, 190, 63, 4, 189, 64, 4, 190, 65, 4, 189, 66, 4, 190, 67, 4, 189, 68, 4, 208, 0, 5, 228, 1, 5, 190, 2, 5, 189, 3, 5, 190, 4, 5, 189, 5, 5, 190, 6, 5, 189, 7, 5, 190, 8, 5, 189, 9, 5, 190, 10, 5, 189, 11, 5, 190, 12, 5, 189, 13, 5, 190, 14, 5, 189, 15, 5, 190, 16, 5, 189, 17, 5, 190, 18, 5, 189, 19, 5, 190, 20, 5, 189, 21, 5, 190, 22, 5, 189, 23, 5, 190, 24, 5, 189, 25, 5, 190, 26, 5, 189, 27, 5, 190, 28, 5, 189, 29, 5, 208, 30, 5, 74, 31, 5, 45, 32, 5, 46, 33, 5, 45, 34, 5, 46, 35, 5, 45, 36, 5, 46, 37, 5, 45, 38, 5, 75, 39, 5, 207, 40, 5, 190, 41, 5, 190, 42, 5, 190, 43, 5, 190, 44, 5, 190, 45, 5, 190, 46, 5, 190, 47, 5, 190, 48, 5, 190, 49, 5, 190, 50, 5, 190, 51, 5, 190, 52, 5, 190, 53, 5, 190, 54, 5, 190, 55, 5, 190, 56, 5, 190, 57, 5, 190, 58, 5, 190, 59, 5, 190, 60, 5, 190, 61, 5, 190, 62, 5, 190, 63, 5, 190, 64, 5, 190, 65, 5, 190, 66, 5, 190, 67, 5, 190, 68, 5, 208, 0, 6, 216, 1, 6, 190, 2, 6, 190, 3, 6, 190, 4, 6, 190, 5, 6, 190, 6, 6, 190, 7, 6, 190, 8, 6, 190, 9, 6, 190, 10, 6, 190, 11, 6, 190, 12, 6, 190, 13, 6, 190, 14, 6, 190, 15, 6, 190, 16, 6, 190, 17, 6, 190, 18, 6, 190, 19, 6, 190, 20, 6, 190, 21, 6, 190, 22, 6, 190, 23, 6, 190, 24, 6, 190, 25, 6, 190, 26, 6, 190, 27, 6, 190, 28, 6, 190, 29, 6, 217, 30, 6, 234, 31, 6, 235, 32, 6, 252, 33, 6, 253, 34, 6, 254, 35, 6, 255, 36, 6, 234, 37, 6, 235, 38, 6, 252, 39, 6, 237, 40, 6, 190, 41, 6, 189, 42, 6, 190, 43, 6, 189, 44, 6, 190, 45, 6, 189, 46, 6, 190, 47, 6, 189, 48, 6, 190, 49, 6, 189, 50, 6, 190, 51, 6, 189, 52, 6, 190, 53, 6, 189, 54, 6, 190, 55, 6, 189, 56, 6, 190, 57, 6, 189, 58, 6, 190, 59, 6, 189, 60, 6, 190, 61, 6, 189, 62, 6, 190, 63, 6, 189, 64, 6, 190, 65, 6, 189, 66, 6, 190, 67, 6, 189, 68, 6, 217, 0, 7, 225, 1, 7, 226, 2, 7, 243, 3, 7, 244, 4, 7, 245, 5, 7, 246, 6, 7, 225, 7, 7, 226, 8, 7, 243, 9, 7, 244, 10, 7, 245, 11, 7, 246, 12, 7, 225, 13, 7, 226, 14, 7, 243, 15, 7, 244, 16, 7, 245, 17, 7, 246, 18, 7, 225, 19, 7, 226, 20, 7, 243, 21, 7, 244, 22, 7, 245, 23, 7, 246, 24, 7, 225, 25, 7, 226, 26, 7, 243, 27, 7, 244, 28, 7, 245, 29, 7, 246, 30, 7, 225, 31, 7, 226, 32, 7, 243, 33, 7, 244, 34, 7, 245, 35, 7, 246, 36, 7, 225, 37, 7, 226, 38, 7, 243, 39, 7, 244, 40, 7, 245, 41, 7, 246, 42, 7, 225, 43, 7, 226, 44, 7, 243, 45, 7, 244, 46, 7, 245, 47, 7, 246, 48, 7, 225, 49, 7, 226, 50, 7, 243, 51, 7, 244, 52, 7, 245, 53, 7, 246, 54, 7, 225, 55, 7, 226, 56, 7, 243, 57, 7, 244, 58, 7, 245, 59, 7, 246, 60, 7, 225, 61, 7, 226, 62, 7, 243, 63, 7, 244, 64, 7, 245, 65, 7, 246, 66, 7, 225, 67, 7, 226, 68, 7, 243, 0, 8, 234, 1, 8, 235, 2, 8, 252, 3, 8, 253, 4, 8, 254, 64, 8, 254, 65, 8, 255, 66, 8, 234, 67, 8, 235, 68, 8, 252, 0, 9, 225, 1, 9, 226, 2, 9, 243, 3, 9, 244, 4, 9, 245, 64, 9, 245, 65, 9, 246, 66, 9, 225, 67, 9, 226, 68, 9, 243]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch3/room_dw_b3bs_watercooler": {
    w: 2280,
    h: 1200,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_b3bs_watercooler"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "Assets_1",
      t: "A",
      d: -100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_pxwhite", 2360, 440, 640, 480, "21FFFFFF", 0, 1, 0]]
    }, {
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 920, 646, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_b3bs_watercooler", -40, 0, 1, 1, 0, "spr_board_event", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_b3bs_stealthSolid", 280, 200, 12.999999, 1, 0, "spr_40x40", true, 0, 1, "38FFFFFF"], ["obj_b3bs_stealthSolid", 1280, 600, 18, 1, 0, "spr_40x40", true, 0, 1, "38FFFFFF"], ["obj_b3bs_stealthSolid", 1320, 1040, 17, 1, 0, "spr_40x40", true, 0, 1, "38FFFFFF"], ["obj_b3bs_stealthSolid", 240, 720, 14, 1, 0, "spr_40x40", true, 0, 1, "38FFFFFF"], ["obj_b3bs_stealthSolid", 1280, 200, 12.999999, 1, 0, "spr_40x40", true, 0, 1, "38FFFFFF"], ["obj_dw_ch3_b3bs_trashcan", 152, 135, 2, 2, 0, "spr_dw_ch3_b3bs_trashcan", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 318, 314, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 369, 342, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 423, 311, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 468, 358, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 522, 317, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 622, 312, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 568, 353, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 670, 369, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 724, 336, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 325, 852, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 380, 891, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 433, 852, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 484, 896, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 538, 855, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 638, 850, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 584, 891, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 680, 892, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 730, 853, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1325, 312, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1379, 341, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1432, 310, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1479, 329, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1538, 309, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1644, 315, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1586, 330, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1700, 311, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1748, 317, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1396, 732, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1449, 752, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1506, 766, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1570, 770, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1638, 767, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1701, 734, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1756, 716, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1807, 744, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1865, 729, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1433, 1153, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1485, 1184, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1551, 1165, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1686, 1169, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1609, 1186, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1753, 1183, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1810, 1164, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1876, 1191, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_b3bs_zapperhead", 1944, 1167, 2, 2, 0, "spr_dw_couch_zapper_outline", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Foreground_Sprites",
      t: "A",
      d: 10001,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "Foreground_Tiles",
      t: "T",
      d: 10002,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_b3bs_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 16,
      items: 1,
      fl: 66666,
      cells: []
    }, {
      n: "BG_Sprites",
      t: "A",
      d: 1000050,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_ch3_b3bs_door", 1818, 46, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "FloorTiles_Accents",
      t: "T",
      d: 1000100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_b3bs_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 16,
      items: 1,
      fl: 66666,
      cells: []
    }, {
      n: "FloorTiles",
      t: "T",
      d: 1000200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_b3bs_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 16,
      items: 1,
      fl: 66666,
      cells: [0, 1, 56, 1, 1, 45, 2, 1, 46, 3, 1, 45, 4, 1, 46, 5, 1, 45, 6, 1, 46, 7, 1, 45, 8, 1, 46, 9, 1, 45, 10, 1, 46, 11, 1, 45, 12, 1, 46, 13, 1, 45, 14, 1, 46, 15, 1, 45, 16, 1, 46, 17, 1, 45, 18, 1, 45, 19, 1, 46, 20, 1, 45, 21, 1, 46, 22, 1, 45, 23, 1, 45, 24, 1, 46, 25, 1, 45, 26, 1, 46, 27, 1, 45, 28, 1, 45, 29, 1, 46, 30, 1, 45, 31, 1, 46, 32, 1, 45, 33, 1, 45, 34, 1, 46, 35, 1, 45, 36, 1, 46, 37, 1, 45, 38, 1, 45, 39, 1, 46, 40, 1, 45, 41, 1, 46, 42, 1, 45, 43, 1, 45, 44, 1, 46, 45, 1, 45, 46, 1, 46, 47, 1, 45, 48, 1, 57, 0, 2, 65, 1, 2, 45, 2, 2, 46, 3, 2, 45, 4, 2, 46, 5, 2, 45, 6, 2, 46, 7, 2, 45, 8, 2, 46, 9, 2, 45, 10, 2, 46, 11, 2, 45, 12, 2, 46, 13, 2, 45, 14, 2, 46, 15, 2, 45, 16, 2, 46, 17, 2, 45, 18, 2, 45, 19, 2, 46, 20, 2, 45, 21, 2, 46, 22, 2, 45, 23, 2, 45, 24, 2, 46, 25, 2, 45, 26, 2, 46, 27, 2, 45, 28, 2, 45, 29, 2, 46, 30, 2, 45, 31, 2, 46, 32, 2, 45, 33, 2, 45, 34, 2, 46, 35, 2, 45, 36, 2, 46, 37, 2, 45, 38, 2, 45, 39, 2, 46, 40, 2, 45, 41, 2, 46, 42, 2, 45, 43, 2, 45, 44, 2, 46, 45, 2, 45, 46, 2, 46, 47, 2, 45, 48, 2, 66, 0, 3, 65, 1, 3, 45, 2, 3, 46, 3, 3, 45, 4, 3, 46, 5, 3, 45, 6, 3, 46, 7, 3, 45, 8, 3, 46, 9, 3, 45, 10, 3, 46, 11, 3, 45, 12, 3, 46, 13, 3, 45, 14, 3, 46, 15, 3, 45, 16, 3, 46, 17, 3, 45, 18, 3, 45, 19, 3, 46, 20, 3, 45, 21, 3, 46, 22, 3, 45, 23, 3, 45, 24, 3, 46, 25, 3, 45, 26, 3, 46, 27, 3, 45, 28, 3, 45, 29, 3, 46, 30, 3, 45, 31, 3, 46, 32, 3, 45, 33, 3, 45, 34, 3, 46, 35, 3, 45, 36, 3, 46, 37, 3, 45, 38, 3, 45, 39, 3, 46, 40, 3, 45, 41, 3, 46, 42, 3, 45, 43, 3, 45, 44, 3, 46, 45, 3, 45, 46, 3, 46, 47, 3, 45, 48, 3, 66, 0, 4, 74, 1, 4, 45, 2, 4, 46, 3, 4, 45, 4, 4, 46, 5, 4, 45, 6, 4, 46, 7, 4, 45, 8, 4, 46, 9, 4, 45, 10, 4, 46, 11, 4, 45, 12, 4, 46, 13, 4, 45, 14, 4, 46, 15, 4, 45, 16, 4, 46, 17, 4, 45, 18, 4, 45, 19, 4, 46, 20, 4, 45, 21, 4, 46, 22, 4, 45, 23, 4, 45, 24, 4, 46, 25, 4, 45, 26, 4, 46, 27, 4, 45, 28, 4, 45, 29, 4, 46, 30, 4, 45, 31, 4, 46, 32, 4, 45, 33, 4, 45, 34, 4, 46, 35, 4, 45, 36, 4, 46, 37, 4, 45, 38, 4, 45, 39, 4, 46, 40, 4, 45, 41, 4, 46, 42, 4, 45, 43, 4, 45, 44, 4, 46, 45, 4, 45, 46, 4, 46, 47, 4, 45, 48, 4, 75, 0, 5, 82, 1, 5, 83, 2, 5, 82, 3, 5, 83, 4, 5, 82, 5, 5, 83, 6, 5, 82, 7, 5, 83, 8, 5, 82, 9, 5, 83, 10, 5, 82, 11, 5, 83, 12, 5, 82, 13, 5, 83, 14, 5, 82, 15, 5, 83, 16, 5, 82, 17, 5, 83, 18, 5, 82, 19, 5, 83, 20, 5, 82, 21, 5, 83, 22, 5, 82, 23, 5, 83, 24, 5, 82, 25, 5, 83, 26, 5, 82, 27, 5, 83, 28, 5, 82, 29, 5, 83, 30, 5, 82, 31, 5, 83, 32, 5, 82, 33, 5, 83, 34, 5, 82, 35, 5, 83, 36, 5, 82, 37, 5, 83, 38, 5, 82, 39, 5, 83, 40, 5, 82, 41, 5, 83, 42, 5, 82, 43, 5, 83, 44, 5, 82, 45, 5, 83, 46, 5, 82, 47, 5, 83, 48, 5, 82, 0, 6, 91, 1, 6, 92, 2, 6, 91, 3, 6, 92, 4, 6, 91, 5, 6, 92, 6, 6, 91, 20, 6, 91, 21, 6, 92, 22, 6, 91, 23, 6, 92, 24, 6, 91, 25, 6, 92, 26, 6, 91, 27, 6, 92, 28, 6, 91, 29, 6, 92, 30, 6, 91, 31, 6, 92, 45, 6, 82, 46, 6, 82, 47, 6, 82, 48, 6, 82, 20, 7, 82, 21, 7, 83, 22, 7, 82, 23, 7, 83, 24, 7, 82, 25, 7, 83, 26, 7, 82, 27, 7, 83, 28, 7, 82, 29, 7, 83, 30, 7, 82, 31, 7, 83, 27, 8, 92, 28, 8, 91, 29, 8, 92, 30, 8, 91, 31, 8, 92, 27, 9, 83, 28, 9, 82, 29, 9, 83, 30, 9, 82, 31, 9, 83, 27, 10, 92, 28, 10, 91, 29, 10, 92, 30, 10, 91, 31, 10, 92, 20, 11, 56, 21, 11, 45, 22, 11, 46, 23, 11, 45, 24, 11, 46, 25, 11, 45, 26, 11, 57, 27, 11, 83, 28, 11, 82, 29, 11, 83, 30, 11, 82, 31, 11, 83, 32, 11, 56, 33, 11, 46, 34, 11, 45, 35, 11, 46, 36, 11, 45, 37, 11, 46, 38, 11, 45, 39, 11, 46, 40, 11, 45, 41, 11, 46, 42, 11, 45, 43, 11, 46, 44, 11, 45, 45, 11, 46, 46, 11, 45, 47, 11, 46, 48, 11, 45, 49, 11, 46, 50, 11, 45, 51, 11, 57, 20, 12, 65, 21, 12, 45, 22, 12, 46, 23, 12, 45, 24, 12, 46, 25, 12, 45, 26, 12, 66, 27, 12, 92, 28, 12, 91, 29, 12, 92, 30, 12, 91, 31, 12, 92, 32, 12, 65, 33, 12, 46, 34, 12, 45, 35, 12, 46, 36, 12, 45, 37, 12, 46, 38, 12, 45, 39, 12, 46, 40, 12, 45, 41, 12, 46, 42, 12, 45, 43, 12, 46, 44, 12, 45, 45, 12, 46, 46, 12, 45, 47, 12, 46, 48, 12, 45, 49, 12, 46, 50, 12, 45, 51, 12, 66, 20, 13, 65, 21, 13, 45, 22, 13, 46, 23, 13, 45, 24, 13, 46, 25, 13, 45, 26, 13, 66, 27, 13, 83, 28, 13, 82, 29, 13, 83, 30, 13, 82, 31, 13, 83, 32, 13, 65, 33, 13, 46, 34, 13, 45, 35, 13, 46, 36, 13, 45, 37, 13, 46, 38, 13, 45, 39, 13, 46, 40, 13, 45, 41, 13, 46, 42, 13, 45, 43, 13, 46, 44, 13, 45, 45, 13, 46, 46, 13, 45, 47, 13, 46, 48, 13, 45, 49, 13, 46, 50, 13, 45, 51, 13, 66, 0, 14, 56, 1, 14, 46, 2, 14, 45, 3, 14, 46, 4, 14, 45, 5, 14, 46, 6, 14, 45, 7, 14, 46, 8, 14, 45, 9, 14, 46, 10, 14, 45, 11, 14, 46, 12, 14, 45, 13, 14, 46, 14, 14, 45, 15, 14, 46, 16, 14, 45, 17, 14, 46, 18, 14, 45, 19, 14, 57, 20, 14, 74, 21, 14, 45, 22, 14, 46, 23, 14, 45, 24, 14, 46, 25, 14, 45, 26, 14, 75, 27, 14, 92, 28, 14, 91, 29, 14, 92, 30, 14, 91, 31, 14, 92, 32, 14, 74, 33, 14, 46, 34, 14, 45, 35, 14, 46, 36, 14, 45, 37, 14, 46, 38, 14, 45, 39, 14, 46, 40, 14, 45, 41, 14, 46, 42, 14, 45, 43, 14, 46, 44, 14, 45, 45, 14, 46, 46, 14, 45, 47, 14, 46, 48, 14, 45, 49, 14, 46, 50, 14, 45, 51, 14, 75, 0, 15, 65, 1, 15, 46, 2, 15, 45, 3, 15, 46, 4, 15, 45, 5, 15, 46, 6, 15, 45, 7, 15, 46, 8, 15, 45, 9, 15, 46, 10, 15, 45, 11, 15, 46, 12, 15, 45, 13, 15, 46, 14, 15, 45, 15, 15, 46, 16, 15, 45, 17, 15, 46, 18, 15, 45, 19, 15, 66, 20, 15, 82, 21, 15, 83, 22, 15, 82, 23, 15, 83, 24, 15, 82, 25, 15, 83, 26, 15, 82, 27, 15, 83, 28, 15, 82, 29, 15, 83, 30, 15, 82, 31, 15, 83, 32, 15, 82, 33, 15, 83, 34, 15, 82, 35, 15, 83, 36, 15, 82, 37, 15, 83, 38, 15, 82, 39, 15, 83, 40, 15, 82, 41, 15, 83, 42, 15, 82, 43, 15, 83, 44, 15, 82, 45, 15, 83, 46, 15, 82, 47, 15, 83, 48, 15, 82, 49, 15, 83, 50, 15, 82, 51, 15, 83, 0, 16, 65, 1, 16, 46, 2, 16, 45, 3, 16, 46, 4, 16, 45, 5, 16, 46, 6, 16, 45, 7, 16, 46, 8, 16, 45, 9, 16, 46, 10, 16, 45, 11, 16, 46, 12, 16, 45, 13, 16, 46, 14, 16, 45, 15, 16, 46, 16, 16, 45, 17, 16, 46, 18, 16, 45, 19, 16, 66, 20, 16, 91, 21, 16, 92, 22, 16, 91, 23, 16, 92, 24, 16, 91, 25, 16, 92, 26, 16, 91, 27, 16, 92, 28, 16, 91, 29, 16, 92, 30, 16, 91, 31, 16, 92, 50, 16, 91, 51, 16, 92, 0, 17, 74, 1, 17, 46, 2, 17, 45, 3, 17, 46, 4, 17, 45, 5, 17, 46, 6, 17, 45, 7, 17, 46, 8, 17, 45, 9, 17, 46, 10, 17, 45, 11, 17, 46, 12, 17, 45, 13, 17, 46, 14, 17, 45, 15, 17, 46, 16, 17, 45, 17, 17, 46, 18, 17, 45, 19, 17, 75, 20, 17, 82, 21, 17, 83, 22, 17, 82, 23, 17, 83, 24, 17, 82, 25, 17, 83, 26, 17, 82, 27, 17, 83, 28, 17, 82, 29, 17, 83, 30, 17, 82, 31, 17, 83, 50, 17, 82, 51, 17, 83, 0, 18, 91, 1, 18, 92, 2, 18, 91, 3, 18, 92, 4, 18, 91, 5, 18, 92, 6, 18, 91, 7, 18, 92, 8, 18, 91, 9, 18, 92, 10, 18, 91, 11, 18, 92, 12, 18, 91, 13, 18, 92, 14, 18, 91, 15, 18, 92, 16, 18, 91, 17, 18, 92, 18, 18, 91, 19, 18, 92, 20, 18, 91, 21, 18, 92, 22, 18, 91, 23, 18, 92, 24, 18, 91, 25, 18, 92, 26, 18, 91, 27, 18, 92, 28, 18, 91, 29, 18, 92, 30, 18, 91, 31, 18, 92, 50, 18, 91, 51, 18, 92, 0, 19, 82, 1, 19, 83, 2, 19, 82, 3, 19, 83, 4, 19, 82, 5, 19, 83, 20, 19, 82, 21, 19, 83, 22, 19, 82, 23, 19, 83, 24, 19, 82, 25, 19, 92, 26, 19, 91, 27, 19, 92, 28, 19, 91, 29, 19, 92, 30, 19, 91, 31, 19, 92, 50, 19, 82, 51, 19, 83, 23, 20, 92, 24, 20, 91, 50, 20, 91, 51, 20, 92, 23, 21, 83, 24, 21, 82, 28, 21, 58, 29, 21, 59, 30, 21, 59, 31, 21, 60, 32, 21, 61, 50, 21, 82, 51, 21, 83, 23, 22, 92, 24, 22, 91, 28, 22, 58, 29, 22, 59, 30, 22, 59, 31, 22, 60, 32, 22, 61, 33, 22, 56, 34, 22, 45, 35, 22, 46, 36, 22, 45, 37, 22, 46, 38, 22, 45, 39, 22, 46, 40, 22, 45, 41, 22, 46, 42, 22, 45, 43, 22, 46, 44, 22, 45, 45, 22, 46, 46, 22, 45, 47, 22, 46, 48, 22, 45, 49, 22, 57, 50, 22, 91, 51, 22, 92, 52, 22, 56, 53, 22, 46, 54, 22, 45, 55, 22, 46, 56, 22, 45, 23, 23, 83, 24, 23, 82, 28, 23, 58, 29, 23, 59, 30, 23, 59, 31, 23, 60, 32, 23, 61, 33, 23, 65, 34, 23, 45, 35, 23, 46, 36, 23, 45, 37, 23, 46, 38, 23, 45, 39, 23, 46, 40, 23, 45, 41, 23, 46, 42, 23, 45, 43, 23, 46, 44, 23, 45, 45, 23, 46, 46, 23, 45, 47, 23, 46, 48, 23, 45, 49, 23, 66, 50, 23, 82, 51, 23, 83, 52, 23, 65, 53, 23, 46, 54, 23, 45, 55, 23, 46, 56, 23, 45, 23, 24, 92, 24, 24, 91, 28, 24, 67, 29, 24, 68, 30, 24, 68, 31, 24, 69, 32, 24, 70, 33, 24, 65, 34, 24, 45, 35, 24, 46, 36, 24, 45, 37, 24, 46, 38, 24, 45, 39, 24, 46, 40, 24, 45, 41, 24, 46, 42, 24, 45, 43, 24, 46, 44, 24, 45, 45, 24, 46, 46, 24, 45, 47, 24, 46, 48, 24, 45, 49, 24, 66, 50, 24, 91, 51, 24, 92, 52, 24, 65, 53, 24, 46, 54, 24, 45, 55, 24, 46, 56, 24, 45, 23, 25, 83, 24, 25, 82, 28, 25, 83, 29, 25, 82, 30, 25, 83, 31, 25, 82, 32, 25, 83, 33, 25, 74, 34, 25, 45, 35, 25, 46, 36, 25, 45, 37, 25, 46, 38, 25, 45, 39, 25, 46, 40, 25, 45, 41, 25, 46, 42, 25, 45, 43, 25, 46, 44, 25, 45, 45, 25, 46, 46, 25, 45, 47, 25, 46, 48, 25, 45, 49, 25, 75, 50, 25, 82, 51, 25, 83, 52, 25, 74, 53, 25, 46, 54, 25, 45, 55, 25, 46, 56, 25, 45, 23, 26, 92, 24, 26, 91, 28, 26, 92, 29, 26, 91, 30, 26, 92, 31, 26, 91, 32, 26, 92, 33, 26, 92, 34, 26, 91, 35, 26, 92, 36, 26, 91, 37, 26, 92, 38, 26, 91, 39, 26, 92, 40, 26, 91, 41, 26, 92, 42, 26, 91, 43, 26, 92, 44, 26, 91, 45, 26, 92, 46, 26, 91, 47, 26, 92, 48, 26, 91, 49, 26, 92, 50, 26, 91, 51, 26, 92, 52, 26, 91, 53, 26, 92, 54, 26, 91, 55, 26, 92, 56, 26, 91, 23, 27, 83, 24, 27, 82, 28, 27, 83, 29, 27, 82, 30, 27, 83, 31, 27, 82, 32, 27, 83, 50, 27, 91, 51, 27, 92, 52, 27, 91, 53, 27, 92, 54, 27, 91, 55, 27, 91, 56, 27, 92, 23, 28, 92, 24, 28, 91, 23, 29, 83, 24, 29, 82]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch3/room_dw_snow_zone_battle": {
    w: 640,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_ch3_BTB06"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 320, 240, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "BG",
      t: "I",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "TILES",
      t: "T",
      d: 1000100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch3/room_dw_teevie_watercooler": {
    w: 640,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_dw_teevie_watercooler"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 320, 394, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_dw_teevie_watercooler", -40, 0, 1, 1, 0, "spr_board_event", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_teevie_floor_light", 200, 360, 2, 2, 0, "spr_dw_teevie_floor_light_base", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_teevie_floor_light", 440, 360, 2, 2, 0, "spr_dw_teevie_floor_light_base", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_teevie_floor_light", 40, 320, 2, 2, 0, "spr_dw_teevie_floor_light_base", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_teevie_floor_light", 40, 240, 2, 2, 0, "spr_dw_teevie_floor_light_base", true, 0, 0, "FFFFFFFF"], ["obj_dw_teevie_bg", -80, 6, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_teevie_floor_light", 440, 240, 2, 2, 0, "spr_dw_teevie_floor_light_base", true, 0, 0, "FFFFFFFF"], ["obj_dw_ch3_teevie_floor_light", 200, 240, 2, 2, 0, "spr_dw_teevie_floor_light_base", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "BGSprites",
      t: "A",
      d: 1199978,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_pxwhite", 478, 82, 2, 138, "FF362D3C", 0, 1, 0], ["spr_pxwhite", 476, 98, 2, 14, "FF362D3C", 0, 1, 0], ["spr_pxwhite", 476, 112, 2, 2, "FF453691", 0, 1, 0]]
    }, {
      n: "Carpet",
      t: "T",
      d: 1199980,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_ch3_dw_teevie_land_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 12,
      items: 1,
      fl: 66666,
      cells: [1, 6, 61, 2, 6, 63, 3, 6, 63, 4, 6, 63, 5, 6, 97, 6, 6, 100, 7, 6, 100, 8, 6, 100, 9, 6, 100, 10, 6, 100, 11, 6, 77, 1, 7, 73, 2, 7, 81, 3, 7, 81, 4, 7, 81, 5, 7, 103, 6, 7, 106, 7, 7, 106, 8, 7, 106, 9, 7, 106, 10, 7, 106, 11, 7, 77, 1, 8, 85, 2, 8, 87, 3, 8, 87, 4, 8, 87, 5, 8, 109, 6, 8, 106, 7, 8, 106, 8, 8, 106, 9, 8, 106, 10, 8, 112, 11, 8, 77, 5, 9, 85, 6, 9, 88, 7, 9, 116, 8, 9, 106, 9, 9, 118, 10, 9, 88, 11, 9, 119, 7, 10, 73, 8, 10, 106, 9, 10, 77, 7, 11, 73, 8, 11, 106, 9, 11, 77]
    }, {
      n: "BGTiles",
      t: "T",
      d: 1199990,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_ch3_dw_teevie_land_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 12,
      items: 1,
      fl: 66666,
      cells: [0, 0, 40, 1, 0, 40, 2, 0, 40, 3, 0, 40, 4, 0, 40, 5, 0, 40, 6, 0, 40, 7, 0, 40, 8, 0, 40, 9, 0, 40, 10, 0, 40, 11, 0, 40, 12, 0, 40, 13, 0, 40, 14, 0, 40, 15, 0, 40, 1, 2, 1, 2, 2, 2, 3, 2, 2, 4, 2, 2, 5, 2, 3, 6, 2, 1, 7, 2, 2, 8, 2, 2, 9, 2, 2, 10, 2, 3, 11, 2, 1, 1, 3, 7, 2, 3, 8, 3, 3, 8, 4, 3, 8, 5, 3, 9, 6, 3, 7, 7, 3, 8, 8, 3, 8, 9, 3, 8, 10, 3, 9, 11, 3, 7, 1, 4, 7, 2, 4, 8, 3, 4, 8, 4, 4, 8, 5, 4, 9, 6, 4, 13, 7, 4, 14, 8, 4, 14, 9, 4, 14, 10, 4, 15, 11, 4, 7, 1, 5, 13, 2, 5, 14, 3, 5, 14, 4, 5, 14, 5, 5, 15, 6, 5, 20, 7, 5, 19, 8, 5, 20, 9, 5, 19, 10, 5, 20, 11, 5, 13, 1, 6, 25, 2, 6, 26, 3, 6, 25, 4, 6, 26, 5, 6, 25, 6, 6, 26, 7, 6, 25, 8, 6, 26, 9, 6, 25, 10, 6, 26, 11, 6, 25, 1, 7, 19, 2, 7, 20, 3, 7, 19, 4, 7, 20, 5, 7, 19, 6, 7, 20, 7, 7, 19, 8, 7, 20, 9, 7, 19, 10, 7, 20, 11, 7, 19, 1, 8, 25, 2, 8, 26, 3, 8, 25, 4, 8, 26, 5, 8, 25, 6, 8, 26, 7, 8, 25, 8, 8, 26, 9, 8, 25, 10, 8, 26, 11, 8, 25, 1, 9, 40, 2, 9, 40, 3, 9, 40, 4, 9, 40, 5, 9, 19, 6, 9, 20, 7, 9, 19, 8, 9, 20, 9, 9, 19, 10, 9, 20, 11, 9, 19, 1, 10, 27, 2, 10, 32, 3, 10, 32, 4, 10, 27, 5, 10, 40, 6, 10, 40, 7, 10, 25, 8, 10, 26, 9, 10, 25, 10, 10, 40, 11, 10, 40, 1, 11, 33, 4, 11, 33, 7, 11, 19, 8, 11, 20, 9, 11, 19]
    }, {
      n: "Tiles_1",
      t: "T",
      d: 1199995,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_ch3_dw_teevie_land_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 12,
      items: 1,
      fl: 66666,
      cells: []
    }, {
      n: "oldTILES",
      t: "T",
      d: 1200000,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_ch3_dw_tvland_backstage_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 19,
      items: 1,
      fl: 66666,
      cells: [0, 1, 11, 1, 1, 11, 2, 1, 11, 3, 1, 11, 4, 1, 11, 5, 1, 11, 6, 1, 11, 7, 1, 11, 8, 1, 11, 9, 1, 11, 10, 1, 11, 11, 1, 11, 12, 1, 11, 13, 1, 11, 14, 1, 11, 15, 1, 11, 1, 2, 22, 2, 2, 24, 3, 2, 24, 4, 2, 24, 5, 2, 25, 6, 2, 35, 7, 2, 35, 8, 2, 35, 9, 2, 35, 10, 2, 35, 11, 2, 22, 12, 2, 24, 13, 2, 24, 14, 2, 24, 15, 2, 24, 1, 3, 33, 2, 3, 35, 3, 3, 35, 4, 3, 35, 5, 3, 36, 6, 3, 34, 7, 3, 35, 8, 3, 35, 9, 3, 35, 10, 3, 35, 11, 3, 33, 12, 3, 35, 13, 3, 35, 14, 3, 35, 15, 3, 35, 1, 4, 33, 2, 4, 35, 3, 4, 35, 4, 4, 35, 5, 4, 36, 6, 4, 45, 7, 4, 46, 8, 4, 46, 9, 4, 46, 10, 4, 46, 11, 4, 33, 12, 4, 35, 13, 4, 35, 14, 4, 35, 15, 4, 35, 1, 5, 44, 2, 5, 46, 3, 5, 46, 4, 5, 46, 5, 5, 47, 6, 5, 69, 7, 5, 69, 8, 5, 69, 9, 5, 69, 10, 5, 69, 11, 5, 44, 12, 5, 46, 13, 5, 46, 14, 5, 46, 15, 5, 46, 1, 6, 69, 2, 6, 69, 3, 6, 69, 4, 6, 69, 5, 6, 69, 6, 6, 69, 7, 6, 69, 8, 6, 69, 9, 6, 69, 10, 6, 69, 11, 6, 69, 12, 6, 69, 13, 6, 69, 14, 6, 69, 15, 6, 69, 1, 7, 69, 2, 7, 69, 3, 7, 69, 4, 7, 69, 5, 7, 69, 6, 7, 69, 7, 7, 69, 8, 7, 69, 9, 7, 69, 10, 7, 69, 11, 7, 69, 12, 7, 69, 13, 7, 69, 14, 7, 69, 15, 7, 69, 1, 8, 69, 2, 8, 69, 3, 8, 69, 4, 8, 69, 5, 8, 69, 6, 8, 69, 7, 8, 69, 8, 8, 69, 9, 8, 69, 10, 8, 69, 11, 8, 69, 12, 8, 69, 13, 8, 69, 14, 8, 69, 15, 8, 69, 5, 9, 69, 6, 9, 69, 7, 9, 69, 8, 9, 69, 9, 9, 69, 10, 9, 69, 11, 9, 69, 5, 10, 69, 6, 10, 69, 7, 10, 69, 8, 10, 69, 9, 10, 69, 10, 10, 69, 11, 10, 69]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch3/room_dw_ranking_c": {
    w: 640,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_room_ranking_c"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 300, 394, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "RoomBorderForShaking",
      t: "A",
      d: 999990,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_pxwhite", -40, -40, 720, 40, "FF000000", 0, 1, 0], ["spr_pxwhite", -40, 0, 40, 480, "FF000000", 0, 1, 0], ["spr_pxwhite", 640, 0, 40, 480, "FF000000", 0, 1, 0], ["spr_pxwhite", -40, 480, 320, 40, "FF000000", 0, 1, 0], ["spr_pxwhite", 360, 480, 280, 40, "FF000000", 0, 1, 0]]
    }, {
      n: "VFX_Wall",
      t: "I",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_dw_green_room_wall_fx", 160, 80, 16, 8, 0, "spr_placeholder1653", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "TILES",
      t: "T",
      d: 1000100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_ch3_dw_tvland_stage_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 19,
      items: 1,
      fl: 66666,
      cells: [4, 5, 258, 5, 5, 258, 6, 5, 258, 7, 5, 258, 8, 5, 258, 9, 5, 258, 10, 5, 258, 11, 5, 258, 4, 6, 235, 5, 6, 235, 6, 6, 235, 7, 6, 235, 8, 6, 235, 9, 6, 235, 10, 6, 235, 11, 6, 235, 4, 7, 235, 5, 7, 235, 6, 7, 235, 7, 7, 235, 8, 7, 235, 9, 7, 235, 10, 7, 235, 11, 7, 235, 4, 8, 235, 5, 8, 235, 6, 8, 235, 7, 8, 235, 8, 8, 235, 9, 8, 235, 10, 8, 235, 11, 8, 235, 7, 9, 235, 8, 9, 235, 7, 10, 235, 8, 10, 235, 7, 11, 235, 8, 11, 235]
    }, {
      n: "VFX_Floor",
      t: "I",
      d: 1000200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_dw_ranking_c_floor", 32, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch4/room_dw_church_jackenstein": {
    w: 3840,
    h: 2660,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_ch4_DCA08D"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_dw_church_dark_maze_controller", 160, -40, 1, 1, 0, "spr_event", true, 0, 0, "FFFFFFFF"], ["obj_mainchara", 2120, 1960, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkness_overlay", 440, -120, 1, 1, 0, "spr_darkbulb_bulb", true, 0, 0, "FFFFFFFF"], ["obj_dw_church_jackenstein", 3840, 1680, 1, 1, 0, "spr_eventsmall", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "CAMERA_CLAMPER",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "CLIMBING_SEQUENCE",
      t: "I",
      d: 200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_climb_climbable", 2440, 1560, 1, 10, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climbstarter", 2440, 1920, 2, 2, 0, "spr_climbstarter", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2480, 1560, 4, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2680, 1560, 2, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2960, 1520, 6, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2600, 1440, 4, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2720, 1520, 4, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 3160, 1560, 1, 7, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 3200, 1800, 2, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 3240, 1560, 1, 4, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 3280, 1680, 1, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_watergenerator", 3240, 1440, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 3240, 1760, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_bell_small_playable", 2560, 1444, 2, 2, 0, "spr_bell_small", true, 0, 0, "FFFFFFFF"], ["obj_bell_small_playable", 2658, 1564, 2, 2, 0, "spr_bell_small", true, 0, 0, "FFFFFFFF"], ["obj_bell_small_playable", 2920, 1524, 2, 2, 0, "spr_bell_small", true, 0, 0, "FFFFFFFF"], ["obj_climbstartertrig", 3560, 1680, 1, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_treasure_room", 3500, 1736, 2, 2, 0, "spr_treasurebox", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 3560, 1600, 1, 2, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 3400, 1680, 1, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2480, 1320, 1, 4, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2640, 920, 1, 11, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2680, 920, 5, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2520, 1320, 3, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climbstartertrig", 2840, 1040, 1, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2840, 960, 1, 2, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climbstarter", 2840, 1000, 2, 2, 0, "spr_climbstarter", true, 0, 0, "FFFFFFFF"], ["obj_climbstarter", 3560, 1640, 2, 2, 0, "spr_climbstarter", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 3400, 1600, 1, 2, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 3440, 1600, 3, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climbstartertrig", 2440, 1960, 1, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_light_following", -160, 240, 1, 1, 0, "spr_debug_light", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "assets_slideBit",
      t: "A",
      d: 900399,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_church_jackenstein_slidebottom", 1680, 1922, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_church_jackenstein_slidebottom", 1480, 1522, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_church_jackenstein_slidebottom", 1240, 1242, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_church_jackenstein_slidebottom", 1520, 882, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_church_jackenstein_slidebottom", 1760, 882, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "Tiles_new_midground",
      t: "T",
      d: 900400,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_library_tileset_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 29,
      items: 1,
      fl: 66666,
      cells: [3, 6, 551, 4, 6, 560, 7, 6, 550, 8, 6, 570, 14, 6, 551, 15, 6, 561, 0, 10, 691, 1, 10, 692, 46, 16, 552, 10, 17, 550, 11, 17, 551, 15, 17, 570, 16, 17, 560, 23, 17, 550, 34, 17, 551, 35, 17, 560, 37, 17, 550, 38, 17, 634, 42, 17, 551, 44, 17, 634, 46, 17, 562, 38, 19, 644, 44, 19, 644, 38, 20, 654, 44, 20, 654, 38, 21, 664, 44, 21, 664, 38, 22, 654, 44, 22, 654, 38, 23, 654, 44, 23, 654, 31, 24, 634, 34, 24, 560, 41, 24, 561, 42, 24, 551, 31, 25, 644, 31, 26, 654, 70, 26, 670, 72, 26, 671, 73, 26, 671, 74, 26, 671, 75, 26, 671, 76, 26, 671, 31, 27, 654, 31, 28, 654, 31, 29, 654, 31, 30, 654, 31, 31, 654, 31, 32, 654, 34, 33, 551, 35, 33, 550, 37, 33, 634, 37, 34, 644, 37, 35, 654, 37, 36, 654, 37, 37, 654, 37, 38, 654, 35, 39, 552, 33, 40, 561, 35, 40, 562, 40, 40, 550, 42, 40, 634, 44, 40, 551, 48, 40, 570, 42, 41, 644, 61, 41, 645, 42, 42, 664, 61, 42, 645, 42, 43, 664, 61, 43, 646, 42, 44, 664, 61, 44, 646, 42, 45, 664, 61, 45, 645, 42, 46, 664, 61, 46, 646, 42, 47, 654, 61, 47, 646, 42, 48, 654, 61, 48, 645, 61, 49, 645, 38, 50, 570, 40, 50, 560, 41, 50, 551, 46, 50, 551, 49, 50, 550, 55, 50, 560, 58, 50, 550, 63, 50, 550]
    }, {
      n: "Assets_1",
      t: "A",
      d: 900500,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_castle_gradient", 224, 960, 0.21777777, 64.75, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", -94, 680, 0.22, 41, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", 1536, 960, 0.21777777, 19.95, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", 1280, 1320, 0.21777777, 32.75, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", 1093, 1320, 0.21777777, 8.75, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", 1088, 1600, 0.21777777, 19.95, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", 1216, 2000, 0.44888887, 37.55, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", 1571, 1536, 0.21777777, 8.225, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", 928, 1472, 0.27777776, 8.75, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", 1473, 2202, 0.19, 74.35, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", -18, 971, 0.21777777, 8.55, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", 1166, 600, 0.41111112, 25.7, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", 1948, 801, 0.35444444, 11.45, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", 3117, 2045, 0.23222224, 26.175001, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", 2932, 680, 0.26333338, 33.175003, "FFFFFFFF", 0, 1, -90], ["spr_dw_castle_gradient", 2920, 1460, 0.2777778, 8.525, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", 3327, 1265, 0.19222225, 6.575003, "FFFFFFFF", 0, 1, -90], ["spr_dw_castle_gradient", 2282, 1599, 0.26333338, 15.075004, "FFFFFFFF", 0, 1, -90], ["spr_dw_castle_gradient", 3408, 1502, 0.23222224, 14.375, "FFFFFFFF", 0, 1, 90]]
    }, {
      n: "Tiles_new_main",
      t: "T",
      d: 900600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_library_tileset_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 29,
      items: 1,
      fl: 66666,
      cells: [0, 6, 452, 1, 6, 453, 2, 6, 450, 3, 6, 451, 4, 6, 452, 5, 6, 453, 6, 6, 450, 7, 6, 451, 8, 6, 452, 9, 6, 453, 10, 6, 450, 11, 6, 451, 12, 6, 452, 13, 6, 453, 14, 6, 450, 15, 6, 451, 16, 6, 452, 17, 6, 453, 0, 7, 691, 1, 7, 692, 2, 7, 690, 3, 7, 691, 4, 7, 691, 5, 7, 692, 6, 7, 690, 7, 7, 691, 8, 7, 691, 9, 7, 692, 10, 7, 690, 11, 7, 691, 12, 7, 691, 13, 7, 692, 14, 7, 690, 15, 7, 691, 16, 7, 691, 17, 7, 692, 0, 8, 427, 1, 8, 428, 2, 8, 476, 3, 8, 477, 4, 8, 477, 5, 8, 478, 6, 8, 426, 7, 8, 427, 8, 8, 427, 9, 8, 428, 10, 8, 426, 11, 8, 427, 12, 8, 427, 13, 8, 428, 14, 8, 426, 15, 8, 427, 16, 8, 427, 17, 8, 428, 33, 8, 406, 34, 8, 407, 35, 8, 407, 36, 8, 408, 37, 8, 406, 38, 8, 407, 39, 8, 404, 40, 8, 405, 0, 9, 427, 1, 9, 468, 2, 9, 456, 3, 9, 457, 4, 9, 457, 5, 9, 458, 6, 9, 466, 7, 9, 467, 8, 9, 427, 9, 9, 468, 10, 9, 466, 11, 9, 467, 12, 9, 427, 13, 9, 468, 14, 9, 466, 15, 9, 467, 16, 9, 427, 17, 9, 468, 30, 9, 406, 31, 9, 408, 33, 9, 416, 34, 9, 417, 35, 9, 457, 36, 9, 458, 37, 9, 456, 38, 9, 457, 39, 9, 417, 40, 9, 418, 0, 10, 427, 1, 10, 428, 2, 10, 466, 3, 10, 427, 4, 10, 427, 5, 10, 428, 6, 10, 466, 7, 10, 427, 8, 10, 427, 9, 10, 428, 10, 10, 476, 11, 10, 477, 12, 10, 477, 13, 10, 478, 14, 10, 466, 15, 10, 427, 16, 10, 427, 17, 10, 428, 30, 10, 416, 31, 10, 418, 33, 10, 426, 34, 10, 427, 35, 10, 467, 36, 10, 468, 37, 10, 466, 38, 10, 467, 39, 10, 427, 40, 10, 428, 0, 11, 467, 1, 11, 468, 2, 11, 476, 3, 11, 477, 4, 11, 477, 5, 11, 478, 6, 11, 466, 7, 11, 427, 8, 11, 467, 9, 11, 468, 10, 11, 456, 11, 11, 457, 12, 11, 457, 13, 11, 458, 14, 11, 476, 15, 11, 477, 16, 11, 477, 17, 11, 478, 30, 11, 426, 31, 11, 428, 33, 11, 436, 34, 11, 437, 35, 11, 477, 36, 11, 478, 37, 11, 476, 38, 11, 477, 39, 11, 437, 40, 11, 438, 0, 12, 427, 1, 12, 468, 2, 12, 456, 3, 12, 457, 4, 12, 457, 5, 12, 458, 6, 12, 426, 7, 12, 427, 8, 12, 427, 9, 12, 468, 10, 12, 426, 11, 12, 427, 12, 12, 427, 13, 12, 468, 14, 12, 456, 15, 12, 457, 16, 12, 457, 17, 12, 458, 30, 12, 436, 31, 12, 438, 33, 12, 416, 34, 12, 417, 35, 12, 457, 36, 12, 458, 37, 12, 456, 38, 12, 457, 39, 12, 417, 40, 12, 418, 0, 13, 467, 1, 13, 428, 2, 13, 426, 3, 13, 467, 4, 13, 467, 5, 13, 428, 6, 13, 690, 7, 13, 691, 8, 13, 691, 9, 13, 692, 10, 13, 426, 11, 13, 467, 12, 13, 467, 13, 13, 428, 14, 13, 476, 15, 13, 477, 16, 13, 477, 17, 13, 478, 33, 13, 426, 34, 13, 427, 35, 13, 467, 36, 13, 468, 37, 13, 466, 38, 13, 467, 39, 13, 427, 40, 13, 428, 0, 14, 427, 1, 14, 428, 2, 14, 466, 3, 14, 467, 4, 14, 427, 5, 14, 428, 6, 14, 456, 7, 14, 457, 8, 14, 457, 9, 14, 458, 10, 14, 466, 11, 14, 467, 12, 14, 427, 13, 14, 428, 14, 14, 456, 15, 14, 457, 16, 14, 457, 17, 14, 458, 33, 14, 436, 34, 14, 437, 35, 14, 477, 36, 14, 478, 37, 14, 476, 38, 14, 477, 39, 14, 437, 40, 14, 438, 44, 14, 445, 49, 14, 446, 50, 14, 447, 51, 14, 448, 0, 15, 427, 1, 15, 468, 2, 15, 466, 3, 15, 467, 4, 15, 427, 5, 15, 468, 6, 15, 466, 7, 15, 467, 8, 15, 427, 9, 15, 468, 10, 15, 466, 11, 15, 467, 12, 15, 427, 13, 15, 468, 14, 15, 466, 15, 15, 467, 16, 15, 427, 17, 15, 468, 49, 15, 456, 50, 15, 457, 51, 15, 458, 0, 16, 427, 1, 16, 468, 2, 16, 426, 3, 16, 427, 4, 16, 427, 5, 16, 468, 6, 16, 426, 7, 16, 427, 8, 16, 427, 9, 16, 468, 10, 16, 426, 11, 16, 427, 12, 16, 427, 13, 16, 468, 14, 16, 426, 15, 16, 427, 16, 16, 427, 17, 16, 468, 49, 16, 466, 50, 16, 467, 51, 16, 446, 52, 16, 447, 53, 16, 448, 6, 17, 450, 7, 17, 451, 8, 17, 452, 9, 17, 453, 10, 17, 450, 11, 17, 451, 12, 17, 452, 13, 17, 453, 14, 17, 450, 15, 17, 451, 16, 17, 452, 17, 17, 453, 18, 17, 450, 19, 17, 451, 20, 17, 452, 21, 17, 453, 22, 17, 450, 23, 17, 451, 24, 17, 452, 25, 17, 453, 26, 17, 450, 27, 17, 451, 28, 17, 452, 29, 17, 453, 30, 17, 450, 31, 17, 451, 32, 17, 452, 33, 17, 453, 34, 17, 450, 35, 17, 451, 36, 17, 452, 37, 17, 453, 38, 17, 600, 39, 17, 450, 40, 17, 451, 41, 17, 452, 42, 17, 453, 43, 17, 640, 44, 17, 681, 45, 17, 682, 46, 17, 600, 49, 17, 476, 50, 17, 477, 51, 17, 456, 52, 17, 457, 53, 17, 458, 57, 17, 426, 58, 17, 427, 59, 17, 427, 60, 17, 428, 6, 18, 690, 7, 18, 691, 8, 18, 691, 9, 18, 692, 10, 18, 690, 11, 18, 691, 12, 18, 691, 13, 18, 692, 14, 18, 690, 15, 18, 691, 16, 18, 691, 17, 18, 692, 18, 18, 690, 19, 18, 691, 20, 18, 691, 21, 18, 692, 22, 18, 690, 23, 18, 691, 24, 18, 691, 25, 18, 692, 26, 18, 690, 27, 18, 691, 28, 18, 691, 29, 18, 692, 30, 18, 690, 31, 18, 691, 32, 18, 691, 33, 18, 692, 34, 18, 690, 35, 18, 691, 36, 18, 691, 37, 18, 692, 38, 18, 644, 39, 18, 690, 40, 18, 691, 41, 18, 691, 42, 18, 692, 43, 18, 690, 44, 18, 644, 45, 18, 691, 46, 18, 692, 51, 18, 466, 52, 18, 467, 53, 18, 468, 57, 18, 466, 58, 18, 467, 59, 18, 427, 60, 18, 468, 61, 18, 484, 62, 18, 416, 63, 18, 417, 64, 18, 418, 65, 18, 484, 66, 18, 484, 67, 18, 484, 68, 18, 484, 69, 18, 481, 70, 18, 484, 71, 18, 484, 72, 18, 484, 6, 19, 426, 7, 19, 427, 8, 19, 427, 9, 19, 428, 10, 19, 426, 11, 19, 427, 12, 19, 427, 13, 19, 428, 14, 19, 426, 15, 19, 427, 16, 19, 427, 17, 19, 428, 18, 19, 426, 19, 19, 427, 20, 19, 427, 21, 19, 428, 22, 19, 426, 23, 19, 427, 24, 19, 427, 25, 19, 428, 26, 19, 426, 27, 19, 427, 28, 19, 427, 29, 19, 428, 30, 19, 426, 31, 19, 427, 32, 19, 427, 33, 19, 428, 34, 19, 426, 35, 19, 427, 36, 19, 427, 37, 19, 428, 39, 19, 426, 40, 19, 427, 41, 19, 427, 42, 19, 428, 43, 19, 426, 44, 19, 427, 45, 19, 427, 46, 19, 428, 51, 19, 476, 52, 19, 477, 53, 19, 478, 57, 19, 466, 58, 19, 427, 59, 19, 427, 60, 19, 428, 61, 19, 484, 62, 19, 426, 63, 19, 477, 64, 19, 478, 65, 19, 484, 66, 19, 463, 67, 19, 464, 68, 19, 465, 69, 19, 460, 70, 19, 461, 71, 19, 462, 72, 19, 481, 0, 20, 406, 1, 20, 407, 2, 20, 408, 6, 20, 466, 7, 20, 467, 8, 20, 427, 9, 20, 468, 10, 20, 690, 11, 20, 691, 12, 20, 691, 13, 20, 692, 14, 20, 426, 15, 20, 467, 16, 20, 467, 17, 20, 428, 18, 20, 466, 19, 20, 467, 20, 20, 427, 21, 20, 468, 22, 20, 690, 23, 20, 691, 24, 20, 691, 25, 20, 692, 26, 20, 466, 27, 20, 467, 28, 20, 427, 29, 20, 468, 30, 20, 466, 31, 20, 467, 32, 20, 427, 33, 20, 468, 34, 20, 466, 35, 20, 467, 36, 20, 427, 37, 20, 468, 39, 20, 466, 40, 20, 467, 41, 20, 427, 42, 20, 468, 43, 20, 466, 44, 20, 467, 45, 20, 427, 46, 20, 468, 57, 20, 466, 58, 20, 427, 59, 20, 467, 60, 20, 468, 61, 20, 481, 62, 20, 426, 63, 20, 457, 64, 20, 458, 65, 20, 481, 66, 20, 466, 67, 20, 467, 68, 20, 467, 69, 20, 467, 70, 20, 427, 71, 20, 428, 72, 20, 481, 0, 21, 416, 1, 21, 417, 2, 21, 418, 6, 21, 426, 7, 21, 467, 8, 21, 467, 9, 21, 428, 10, 21, 416, 11, 21, 457, 12, 21, 457, 13, 21, 458, 14, 21, 426, 15, 21, 467, 16, 21, 467, 17, 21, 428, 18, 21, 426, 19, 21, 467, 20, 21, 467, 21, 21, 428, 22, 21, 416, 23, 21, 457, 24, 21, 457, 25, 21, 458, 26, 21, 466, 27, 21, 427, 28, 21, 427, 29, 21, 428, 30, 21, 466, 31, 21, 427, 32, 21, 427, 33, 21, 428, 34, 21, 466, 35, 21, 427, 36, 21, 427, 37, 21, 428, 39, 21, 466, 40, 21, 427, 41, 21, 427, 42, 21, 428, 43, 21, 466, 44, 21, 427, 45, 21, 427, 46, 21, 428, 57, 21, 426, 58, 21, 427, 59, 21, 427, 60, 21, 468, 61, 21, 481, 62, 21, 426, 63, 21, 427, 64, 21, 428, 65, 21, 481, 66, 21, 466, 67, 21, 427, 68, 21, 467, 69, 21, 427, 70, 21, 427, 71, 21, 428, 72, 21, 481, 0, 22, 426, 1, 22, 427, 2, 22, 428, 6, 22, 466, 7, 22, 467, 8, 22, 427, 9, 22, 428, 10, 22, 466, 11, 22, 467, 12, 22, 427, 13, 22, 428, 14, 22, 466, 15, 22, 467, 16, 22, 427, 17, 22, 428, 18, 22, 466, 19, 22, 467, 20, 22, 427, 21, 22, 428, 22, 22, 466, 23, 22, 467, 24, 22, 427, 25, 22, 428, 26, 22, 476, 27, 22, 477, 28, 22, 477, 29, 22, 478, 30, 22, 476, 31, 22, 477, 32, 22, 477, 33, 22, 478, 34, 22, 476, 35, 22, 477, 36, 22, 477, 37, 22, 478, 39, 22, 476, 40, 22, 477, 41, 22, 477, 42, 22, 478, 43, 22, 476, 44, 22, 477, 45, 22, 477, 46, 22, 478, 57, 22, 690, 58, 22, 691, 59, 22, 691, 60, 22, 692, 61, 22, 484, 62, 22, 476, 63, 22, 477, 64, 22, 478, 65, 22, 484, 66, 22, 476, 67, 22, 477, 68, 22, 477, 69, 22, 477, 70, 22, 477, 71, 22, 478, 72, 22, 481, 0, 23, 436, 1, 23, 437, 2, 23, 438, 6, 23, 466, 7, 23, 467, 8, 23, 427, 9, 23, 468, 10, 23, 466, 11, 23, 467, 12, 23, 427, 13, 23, 468, 14, 23, 466, 15, 23, 467, 16, 23, 427, 17, 23, 468, 18, 23, 466, 19, 23, 467, 20, 23, 427, 21, 23, 468, 22, 23, 466, 23, 23, 467, 24, 23, 427, 25, 23, 468, 26, 23, 456, 27, 23, 457, 28, 23, 457, 29, 23, 458, 30, 23, 456, 31, 23, 457, 32, 23, 457, 33, 23, 458, 34, 23, 456, 35, 23, 457, 36, 23, 457, 37, 23, 458, 39, 23, 456, 40, 23, 457, 41, 23, 457, 42, 23, 458, 43, 23, 456, 44, 23, 457, 45, 23, 457, 46, 23, 458, 57, 23, 456, 58, 23, 457, 59, 23, 457, 60, 23, 458, 61, 23, 494, 62, 23, 456, 63, 23, 457, 64, 23, 458, 65, 23, 484, 66, 23, 645, 67, 23, 646, 68, 23, 646, 69, 23, 645, 70, 23, 645, 71, 23, 646, 72, 23, 484, 2, 24, 445, 3, 24, 445, 29, 24, 450, 30, 24, 452, 31, 24, 452, 32, 24, 452, 33, 24, 453, 34, 24, 450, 35, 24, 451, 36, 24, 452, 37, 24, 453, 38, 24, 450, 39, 24, 451, 40, 24, 452, 41, 24, 453, 42, 24, 268435909, 43, 24, 268435908, 44, 24, 268435907, 45, 24, 268435906, 46, 24, 446, 47, 24, 448, 57, 24, 466, 58, 24, 467, 59, 24, 427, 60, 24, 468, 61, 24, 481, 62, 24, 426, 63, 24, 467, 64, 24, 428, 65, 24, 484, 66, 24, 645, 67, 24, 456, 68, 24, 458, 69, 24, 466, 70, 24, 468, 71, 24, 645, 72, 24, 484, 1, 25, 445, 2, 25, 445, 29, 25, 690, 30, 25, 691, 31, 25, 691, 32, 25, 690, 33, 25, 692, 34, 25, 690, 35, 25, 691, 36, 25, 691, 37, 25, 692, 38, 25, 690, 39, 25, 691, 40, 25, 691, 41, 25, 692, 42, 25, 690, 43, 25, 691, 44, 25, 691, 45, 25, 692, 46, 25, 690, 47, 25, 692, 57, 25, 426, 58, 25, 427, 59, 25, 427, 60, 25, 428, 61, 25, 481, 62, 25, 466, 63, 25, 427, 64, 25, 428, 65, 25, 481, 66, 25, 645, 67, 25, 466, 68, 25, 468, 69, 25, 466, 70, 25, 468, 71, 25, 646, 72, 25, 484, 0, 26, 445, 1, 26, 445, 29, 26, 427, 30, 26, 428, 32, 26, 466, 33, 26, 467, 34, 26, 476, 35, 26, 477, 36, 26, 477, 37, 26, 478, 38, 26, 426, 39, 26, 427, 40, 26, 427, 41, 26, 428, 42, 26, 426, 43, 26, 427, 44, 26, 427, 45, 26, 428, 46, 26, 427, 47, 26, 428, 57, 26, 466, 58, 26, 467, 59, 26, 427, 60, 26, 468, 61, 26, 481, 62, 26, 426, 63, 26, 427, 64, 26, 468, 65, 26, 481, 66, 26, 645, 67, 26, 466, 68, 26, 428, 69, 26, 476, 70, 26, 478, 71, 26, 656, 72, 26, 484, 29, 27, 427, 30, 27, 468, 32, 27, 466, 33, 27, 427, 34, 27, 456, 35, 27, 457, 36, 27, 457, 37, 27, 458, 38, 27, 466, 39, 27, 467, 40, 27, 427, 41, 27, 468, 42, 27, 466, 43, 27, 467, 44, 27, 427, 45, 27, 468, 46, 27, 427, 47, 27, 468, 57, 27, 466, 58, 27, 427, 59, 27, 427, 60, 27, 428, 61, 27, 481, 62, 27, 436, 63, 27, 437, 64, 27, 438, 65, 27, 481, 66, 27, 646, 67, 27, 466, 68, 27, 428, 69, 27, 474, 70, 27, 680, 71, 27, 652, 72, 27, 642, 73, 27, 642, 74, 27, 642, 75, 27, 642, 76, 27, 642, 29, 28, 427, 30, 28, 428, 32, 28, 476, 33, 28, 477, 34, 28, 466, 35, 28, 427, 36, 28, 427, 37, 28, 428, 38, 28, 466, 39, 28, 427, 40, 28, 427, 41, 28, 428, 42, 28, 476, 43, 28, 477, 44, 28, 477, 45, 28, 478, 46, 28, 427, 47, 28, 428, 57, 28, 466, 58, 28, 427, 59, 28, 467, 60, 28, 468, 61, 28, 484, 62, 28, 456, 63, 28, 457, 64, 28, 458, 65, 28, 484, 66, 28, 646, 67, 28, 466, 68, 28, 468, 69, 28, 474, 70, 28, 680, 71, 28, 652, 72, 28, 642, 73, 28, 652, 74, 28, 642, 75, 28, 642, 76, 28, 642, 29, 29, 477, 30, 29, 478, 32, 29, 456, 33, 29, 457, 34, 29, 476, 35, 29, 477, 36, 29, 477, 37, 29, 478, 38, 29, 466, 39, 29, 427, 40, 29, 467, 41, 29, 468, 42, 29, 456, 43, 29, 457, 44, 29, 457, 45, 29, 458, 46, 29, 477, 47, 29, 478, 57, 29, 426, 58, 29, 427, 59, 29, 427, 60, 29, 468, 61, 29, 494, 62, 29, 426, 63, 29, 467, 64, 29, 428, 65, 29, 484, 66, 29, 646, 67, 29, 426, 68, 29, 468, 69, 29, 474, 70, 29, 680, 71, 29, 652, 72, 29, 662, 73, 29, 642, 74, 29, 642, 75, 29, 652, 76, 29, 642, 29, 30, 457, 30, 30, 458, 32, 30, 476, 33, 30, 477, 34, 30, 456, 35, 30, 457, 36, 30, 457, 37, 30, 458, 38, 30, 426, 39, 30, 427, 40, 30, 427, 41, 30, 468, 42, 30, 426, 43, 30, 427, 44, 30, 427, 45, 30, 468, 46, 30, 457, 47, 30, 458, 57, 30, 690, 58, 30, 691, 59, 30, 691, 60, 30, 692, 61, 30, 481, 62, 30, 466, 63, 30, 427, 64, 30, 428, 65, 30, 484, 66, 30, 646, 67, 30, 426, 68, 30, 468, 69, 30, 474, 70, 30, 690, 71, 30, 691, 72, 30, 691, 73, 30, 691, 74, 30, 691, 75, 30, 691, 76, 30, 691, 29, 31, 477, 30, 31, 478, 32, 31, 456, 33, 31, 457, 34, 31, 426, 35, 31, 467, 36, 31, 467, 37, 31, 428, 38, 31, 690, 39, 31, 691, 40, 31, 691, 41, 31, 692, 42, 31, 426, 43, 31, 467, 44, 31, 467, 45, 31, 428, 46, 31, 477, 47, 31, 478, 57, 31, 456, 58, 31, 457, 59, 31, 457, 60, 31, 458, 61, 31, 484, 62, 31, 426, 63, 31, 427, 64, 31, 468, 65, 31, 484, 66, 31, 645, 67, 31, 426, 68, 31, 428, 69, 31, 481, 70, 31, 484, 71, 31, 484, 72, 31, 481, 73, 31, 553, 74, 31, 554, 75, 31, 555, 76, 31, 556, 24, 32, 406, 25, 32, 407, 26, 32, 408, 29, 32, 457, 30, 32, 458, 32, 32, 466, 33, 32, 467, 34, 32, 466, 35, 32, 467, 36, 32, 427, 37, 32, 428, 38, 32, 456, 39, 32, 457, 40, 32, 457, 41, 32, 458, 42, 32, 466, 43, 32, 467, 44, 32, 427, 45, 32, 428, 46, 32, 457, 47, 32, 458, 57, 32, 466, 58, 32, 467, 59, 32, 427, 60, 32, 468, 61, 32, 484, 62, 32, 436, 63, 32, 437, 64, 32, 438, 65, 32, 484, 66, 32, 645, 67, 32, 466, 68, 32, 428, 69, 32, 690, 70, 32, 691, 71, 32, 691, 72, 32, 692, 73, 32, 563, 74, 32, 564, 75, 32, 565, 76, 32, 566, 80, 32, 473, 81, 32, 474, 82, 32, 475, 24, 33, 416, 25, 33, 417, 26, 33, 418, 31, 33, 450, 32, 33, 452, 33, 33, 451, 34, 33, 452, 35, 33, 453, 36, 33, 600, 37, 33, 600, 57, 33, 426, 58, 33, 427, 59, 33, 427, 60, 33, 428, 61, 33, 484, 62, 33, 646, 63, 33, 645, 64, 33, 646, 65, 33, 645, 66, 33, 645, 67, 33, 466, 68, 33, 468, 69, 33, 426, 70, 33, 427, 71, 33, 427, 72, 33, 428, 73, 33, 573, 74, 33, 574, 75, 33, 575, 76, 33, 576, 80, 33, 483, 81, 33, 484, 82, 33, 485, 24, 34, 426, 25, 34, 427, 26, 34, 428, 31, 34, 690, 32, 34, 691, 33, 34, 691, 34, 34, 691, 35, 34, 691, 36, 34, 692, 40, 34, 446, 41, 34, 447, 42, 34, 448, 57, 34, 466, 58, 34, 467, 59, 34, 427, 60, 34, 468, 61, 34, 494, 62, 34, 645, 63, 34, 456, 64, 34, 458, 65, 34, 456, 66, 34, 457, 67, 34, 467, 68, 34, 468, 69, 34, 466, 70, 34, 467, 71, 34, 427, 72, 34, 468, 73, 34, 583, 74, 34, 584, 75, 34, 585, 76, 34, 586, 80, 34, 493, 81, 34, 494, 82, 34, 495, 86, 34, 463, 87, 34, 464, 88, 34, 465, 89, 34, 460, 90, 34, 462, 24, 35, 436, 25, 35, 437, 26, 35, 438, 31, 35, 416, 32, 35, 417, 33, 35, 418, 34, 35, 416, 35, 35, 417, 36, 35, 418, 40, 35, 456, 41, 35, 457, 42, 35, 458, 57, 35, 466, 58, 35, 427, 59, 35, 427, 60, 35, 428, 61, 35, 481, 62, 35, 646, 63, 35, 476, 64, 35, 478, 65, 35, 476, 66, 35, 477, 67, 35, 477, 68, 35, 478, 69, 35, 466, 70, 35, 427, 71, 35, 427, 72, 35, 428, 73, 35, 593, 74, 35, 594, 75, 35, 595, 76, 35, 596, 80, 35, 473, 81, 35, 474, 82, 35, 475, 86, 35, 473, 87, 35, 474, 88, 35, 475, 89, 35, 470, 90, 35, 472, 31, 36, 426, 32, 36, 427, 33, 36, 428, 34, 36, 426, 35, 36, 427, 36, 36, 428, 40, 36, 446, 41, 36, 448, 42, 36, 468, 57, 36, 466, 58, 36, 427, 59, 36, 467, 60, 36, 468, 61, 36, 481, 62, 36, 645, 65, 36, 646, 66, 36, 645, 67, 36, 645, 68, 36, 646, 69, 36, 466, 70, 36, 427, 71, 36, 467, 72, 36, 468, 80, 36, 483, 81, 36, 484, 82, 36, 485, 86, 36, 483, 87, 36, 484, 88, 36, 485, 89, 36, 480, 90, 36, 482, 31, 37, 416, 32, 37, 417, 33, 37, 418, 34, 37, 436, 35, 37, 437, 36, 37, 438, 40, 37, 457, 41, 37, 458, 42, 37, 478, 57, 37, 426, 58, 37, 427, 59, 37, 427, 60, 37, 468, 61, 37, 484, 62, 37, 456, 63, 37, 457, 64, 37, 458, 65, 37, 456, 66, 37, 457, 67, 37, 457, 68, 37, 458, 69, 37, 426, 70, 37, 427, 71, 37, 427, 72, 37, 468, 73, 37, 470, 74, 37, 471, 75, 37, 472, 76, 37, 470, 77, 37, 471, 78, 37, 471, 79, 37, 472, 80, 37, 493, 81, 37, 494, 82, 37, 495, 31, 38, 426, 32, 38, 427, 33, 38, 428, 34, 38, 426, 35, 38, 427, 36, 38, 428, 57, 38, 690, 58, 38, 691, 59, 38, 691, 60, 38, 692, 61, 38, 484, 62, 38, 476, 63, 38, 477, 64, 38, 478, 65, 38, 476, 66, 38, 477, 67, 38, 478, 68, 38, 646, 69, 38, 645, 70, 38, 645, 71, 38, 646, 74, 38, 646, 75, 38, 645, 76, 38, 646, 77, 38, 645, 78, 38, 646, 79, 38, 645, 80, 38, 481, 81, 38, 481, 82, 38, 485, 83, 38, 463, 84, 38, 462, 85, 38, 460, 86, 38, 461, 87, 38, 462, 88, 38, 463, 89, 38, 464, 90, 38, 465, 31, 39, 436, 32, 39, 437, 33, 39, 438, 34, 39, 436, 35, 39, 437, 36, 39, 438, 57, 39, 456, 58, 39, 457, 59, 39, 457, 60, 39, 458, 61, 39, 645, 62, 39, 645, 63, 39, 646, 64, 39, 645, 65, 39, 646, 67, 39, 645, 68, 39, 646, 69, 39, 456, 70, 39, 457, 71, 39, 457, 72, 39, 458, 73, 39, 473, 74, 39, 474, 75, 39, 474, 76, 39, 474, 77, 39, 474, 78, 39, 481, 79, 39, 645, 80, 39, 481, 81, 39, 645, 82, 39, 485, 83, 39, 483, 84, 39, 485, 85, 39, 474, 86, 39, 474, 87, 39, 474, 88, 39, 474, 89, 39, 474, 90, 39, 475, 31, 40, 403, 32, 40, 404, 33, 40, 405, 34, 40, 403, 35, 40, 404, 36, 40, 401, 37, 40, 402, 38, 40, 406, 39, 40, 407, 40, 40, 401, 41, 40, 402, 42, 40, 600, 43, 40, 406, 44, 40, 407, 45, 40, 442, 46, 40, 443, 47, 40, 446, 48, 40, 448, 57, 40, 466, 58, 40, 467, 59, 40, 427, 60, 40, 468, 61, 40, 645, 62, 40, 416, 63, 40, 417, 64, 40, 418, 65, 40, 416, 66, 40, 417, 67, 40, 417, 68, 40, 418, 69, 40, 466, 70, 40, 467, 71, 40, 467, 72, 40, 468, 78, 40, 530, 79, 40, 646, 80, 40, 481, 81, 40, 646, 82, 40, 484, 83, 40, 480, 84, 40, 482, 85, 40, 646, 86, 40, 645, 87, 40, 645, 88, 40, 645, 89, 40, 646, 90, 40, 485, 31, 41, 426, 32, 41, 477, 33, 41, 478, 34, 41, 426, 35, 41, 427, 36, 41, 427, 37, 41, 428, 38, 41, 426, 39, 41, 427, 40, 41, 427, 41, 41, 428, 43, 41, 426, 44, 41, 427, 45, 41, 427, 46, 41, 428, 47, 41, 426, 48, 41, 428, 50, 41, 483, 51, 41, 484, 52, 41, 485, 53, 41, 483, 54, 41, 484, 55, 41, 484, 56, 41, 485, 57, 41, 426, 58, 41, 427, 59, 41, 427, 60, 41, 428, 61, 41, 645, 62, 41, 426, 63, 41, 477, 64, 41, 478, 65, 41, 426, 66, 41, 427, 67, 41, 427, 68, 41, 428, 69, 41, 466, 70, 41, 467, 71, 41, 427, 72, 41, 468, 78, 41, 530, 79, 41, 645, 80, 41, 481, 81, 41, 645, 82, 41, 484, 83, 41, 483, 84, 41, 485, 85, 41, 646, 86, 41, 473, 87, 41, 474, 88, 41, 475, 89, 41, 656, 90, 41, 485, 31, 42, 426, 32, 42, 457, 33, 42, 458, 34, 42, 466, 35, 42, 467, 36, 42, 427, 37, 42, 468, 38, 42, 466, 39, 42, 467, 40, 42, 427, 41, 42, 468, 43, 42, 466, 44, 42, 467, 45, 42, 427, 46, 42, 468, 47, 42, 466, 48, 42, 468, 50, 42, 483, 51, 42, 484, 52, 42, 485, 53, 42, 483, 54, 42, 484, 55, 42, 484, 56, 42, 485, 57, 42, 466, 58, 42, 467, 59, 42, 427, 60, 42, 468, 62, 42, 426, 63, 42, 457, 64, 42, 458, 65, 42, 466, 66, 42, 467, 67, 42, 427, 68, 42, 468, 69, 42, 476, 70, 42, 477, 71, 42, 477, 72, 42, 478, 78, 42, 530, 79, 42, 645, 80, 42, 481, 81, 42, 645, 82, 42, 646, 83, 42, 483, 84, 42, 482, 85, 42, 645, 86, 42, 484, 87, 42, 484, 88, 42, 484, 89, 42, 646, 90, 42, 485, 31, 43, 426, 32, 43, 427, 33, 43, 428, 34, 43, 466, 35, 43, 427, 36, 43, 427, 37, 43, 428, 38, 43, 476, 39, 43, 477, 40, 43, 477, 41, 43, 478, 43, 43, 476, 44, 43, 477, 45, 43, 477, 46, 43, 478, 47, 43, 476, 48, 43, 478, 50, 43, 483, 51, 43, 484, 52, 43, 485, 53, 43, 483, 54, 43, 484, 55, 43, 484, 56, 43, 485, 57, 43, 476, 58, 43, 477, 59, 43, 477, 60, 43, 478, 61, 43, 646, 62, 43, 426, 63, 43, 427, 64, 43, 428, 65, 43, 466, 66, 43, 427, 67, 43, 467, 68, 43, 428, 69, 43, 690, 70, 43, 691, 71, 43, 691, 72, 43, 692, 78, 43, 530, 79, 43, 645, 80, 43, 481, 81, 43, 473, 82, 43, 475, 83, 43, 483, 84, 43, 485, 85, 43, 484, 86, 43, 484, 87, 43, 440, 88, 43, 441, 89, 43, 442, 90, 43, 443, 31, 44, 466, 32, 44, 477, 33, 44, 478, 34, 44, 466, 35, 44, 427, 36, 44, 467, 37, 44, 468, 38, 44, 456, 39, 44, 457, 40, 44, 457, 41, 44, 458, 43, 44, 456, 44, 44, 457, 45, 44, 457, 46, 44, 458, 47, 44, 456, 48, 44, 458, 50, 44, 483, 51, 44, 481, 52, 44, 485, 53, 44, 483, 54, 44, 484, 55, 44, 484, 56, 44, 485, 57, 44, 456, 58, 44, 457, 59, 44, 457, 60, 44, 458, 61, 44, 646, 62, 44, 476, 63, 44, 477, 64, 44, 478, 65, 44, 466, 66, 44, 427, 67, 44, 467, 68, 44, 468, 69, 44, 456, 70, 44, 457, 71, 44, 457, 72, 44, 458, 78, 44, 530, 79, 44, 646, 80, 44, 481, 81, 44, 481, 82, 44, 484, 83, 44, 483, 84, 44, 485, 85, 44, 484, 86, 44, 484, 87, 44, 450, 88, 44, 451, 89, 44, 452, 90, 44, 453, 31, 45, 466, 32, 45, 457, 33, 45, 458, 34, 45, 426, 35, 45, 427, 36, 45, 427, 37, 45, 468, 38, 45, 426, 39, 45, 427, 40, 45, 427, 41, 45, 468, 43, 45, 426, 44, 45, 427, 45, 45, 427, 46, 45, 468, 47, 45, 426, 48, 45, 468, 50, 45, 483, 51, 45, 481, 52, 45, 485, 53, 45, 493, 54, 45, 494, 55, 45, 491, 56, 45, 492, 57, 45, 426, 58, 45, 427, 59, 45, 427, 60, 45, 468, 61, 45, 646, 62, 45, 456, 63, 45, 457, 64, 45, 458, 65, 45, 466, 66, 45, 427, 67, 45, 427, 68, 45, 468, 69, 45, 426, 70, 45, 427, 71, 45, 427, 72, 45, 468, 78, 45, 530, 79, 45, 645, 80, 45, 646, 81, 45, 645, 82, 45, 484, 83, 45, 483, 84, 45, 485, 85, 45, 484, 86, 45, 484, 87, 45, 416, 88, 45, 417, 89, 45, 457, 90, 45, 458, 31, 46, 426, 32, 46, 467, 33, 46, 428, 34, 46, 690, 35, 46, 691, 36, 46, 691, 37, 46, 692, 38, 46, 426, 39, 46, 467, 40, 46, 467, 41, 46, 428, 43, 46, 426, 44, 46, 467, 45, 46, 467, 46, 46, 428, 47, 46, 426, 48, 46, 428, 50, 46, 483, 51, 46, 484, 52, 46, 485, 53, 46, 473, 54, 46, 474, 55, 46, 471, 56, 46, 472, 57, 46, 426, 58, 46, 467, 59, 46, 467, 60, 46, 428, 62, 46, 426, 63, 46, 467, 64, 46, 428, 65, 46, 466, 66, 46, 427, 67, 46, 427, 68, 46, 468, 69, 46, 426, 70, 46, 467, 71, 46, 467, 72, 46, 428, 78, 46, 493, 79, 46, 473, 80, 46, 474, 81, 46, 475, 82, 46, 494, 83, 46, 480, 84, 46, 485, 85, 46, 494, 86, 46, 495, 87, 46, 426, 88, 46, 427, 89, 46, 467, 90, 46, 468, 31, 47, 466, 32, 47, 427, 33, 47, 428, 34, 47, 456, 35, 47, 457, 36, 47, 457, 37, 47, 458, 38, 47, 466, 39, 47, 467, 40, 47, 427, 41, 47, 428, 43, 47, 466, 44, 47, 467, 45, 47, 427, 46, 47, 428, 47, 47, 466, 48, 47, 428, 50, 47, 483, 51, 47, 484, 52, 47, 485, 53, 47, 483, 54, 47, 484, 55, 47, 481, 56, 47, 482, 57, 47, 466, 58, 47, 467, 59, 47, 427, 60, 47, 428, 62, 47, 466, 63, 47, 427, 64, 47, 428, 65, 47, 456, 66, 47, 467, 67, 47, 427, 68, 47, 468, 69, 47, 466, 70, 47, 467, 71, 47, 427, 72, 47, 428, 78, 47, 470, 79, 47, 471, 80, 47, 472, 81, 47, 473, 82, 47, 474, 83, 47, 483, 84, 47, 482, 85, 47, 471, 86, 47, 472, 87, 47, 436, 88, 47, 437, 89, 47, 477, 90, 47, 478, 31, 48, 426, 32, 48, 427, 33, 48, 468, 34, 48, 466, 35, 48, 467, 36, 48, 427, 37, 48, 468, 38, 48, 466, 39, 48, 467, 40, 48, 427, 41, 48, 468, 43, 48, 466, 44, 48, 467, 45, 48, 427, 46, 48, 468, 47, 48, 466, 48, 48, 468, 50, 48, 483, 51, 48, 481, 52, 48, 485, 53, 48, 480, 54, 48, 481, 55, 48, 484, 56, 48, 485, 57, 48, 466, 58, 48, 467, 59, 48, 427, 60, 48, 468, 62, 48, 426, 63, 48, 427, 64, 48, 468, 65, 48, 466, 66, 48, 467, 67, 48, 427, 68, 48, 468, 69, 48, 466, 70, 48, 467, 71, 48, 427, 72, 48, 468, 78, 48, 480, 79, 48, 481, 80, 48, 482, 81, 48, 483, 82, 48, 484, 83, 48, 483, 84, 48, 485, 85, 48, 481, 86, 48, 482, 87, 48, 456, 88, 48, 457, 89, 48, 457, 90, 48, 458, 91, 48, 459, 31, 49, 426, 32, 49, 427, 33, 49, 468, 34, 49, 426, 35, 49, 427, 36, 49, 427, 37, 49, 468, 38, 49, 426, 39, 49, 427, 40, 49, 427, 41, 49, 468, 50, 49, 493, 51, 49, 494, 52, 49, 495, 53, 49, 490, 54, 49, 491, 55, 49, 494, 56, 49, 495, 57, 49, 436, 58, 49, 437, 59, 49, 437, 60, 49, 438, 62, 49, 436, 63, 49, 437, 64, 49, 438, 65, 49, 436, 66, 49, 437, 67, 49, 437, 68, 49, 438, 69, 49, 436, 70, 49, 437, 71, 49, 437, 72, 49, 438, 78, 49, 490, 79, 49, 491, 80, 49, 492, 81, 49, 493, 82, 49, 494, 83, 49, 495, 84, 49, 490, 85, 49, 491, 86, 49, 492, 87, 49, 466, 88, 49, 467, 89, 49, 467, 90, 49, 468, 91, 49, 469, 37, 50, 650, 38, 50, 681, 39, 50, 662, 40, 50, 681, 41, 50, 681, 42, 50, 642, 43, 50, 681, 44, 50, 642, 45, 50, 652, 46, 50, 642, 47, 50, 681, 48, 50, 652, 49, 50, 642, 50, 50, 642, 51, 50, 642, 52, 50, 681, 53, 50, 631, 54, 50, 642, 55, 50, 681, 56, 50, 652, 57, 50, 652, 58, 50, 642, 59, 50, 642, 60, 50, 642, 61, 50, 681, 62, 50, 642, 63, 50, 642, 64, 50, 652, 65, 50, 642, 66, 50, 642, 67, 50, 642, 68, 50, 681, 69, 50, 642, 70, 50, 642, 71, 50, 652, 72, 50, 652, 73, 50, 653, 87, 50, 476, 88, 50, 477, 89, 50, 477, 90, 50, 478, 91, 50, 479, 37, 51, 690, 38, 51, 691, 39, 51, 691, 40, 51, 691, 41, 51, 691, 42, 51, 691, 43, 51, 691, 44, 51, 691, 45, 51, 691, 46, 51, 691, 47, 51, 691, 48, 51, 691, 49, 51, 691, 50, 51, 691, 51, 51, 691, 52, 51, 691, 53, 51, 691, 54, 51, 691, 55, 51, 691, 56, 51, 691, 57, 51, 691, 58, 51, 691, 59, 51, 691, 60, 51, 691, 61, 51, 691, 62, 51, 691, 63, 51, 691, 64, 51, 691, 65, 51, 691, 66, 51, 691, 67, 51, 691, 68, 51, 691, 69, 51, 691, 70, 51, 691, 71, 51, 691, 72, 51, 691, 73, 51, 691, 37, 52, 554, 38, 52, 555, 39, 52, 556, 40, 52, 553, 41, 52, 554, 42, 52, 555, 43, 52, 556, 44, 52, 553, 45, 52, 554, 46, 52, 555, 47, 52, 556, 48, 52, 553, 49, 52, 554, 50, 52, 555, 51, 52, 556, 52, 52, 553, 53, 52, 554, 54, 52, 555, 55, 52, 556, 56, 52, 553, 57, 52, 554, 58, 52, 555, 59, 52, 556, 60, 52, 553, 61, 52, 554, 62, 52, 555, 63, 52, 556, 64, 52, 553, 65, 52, 554, 66, 52, 555, 67, 52, 556, 68, 52, 553, 69, 52, 554, 70, 52, 555, 71, 52, 556, 72, 52, 553, 37, 53, 564, 38, 53, 565, 39, 53, 566, 40, 53, 563, 41, 53, 564, 42, 53, 565, 43, 53, 566, 44, 53, 563, 45, 53, 564, 46, 53, 565, 47, 53, 566, 48, 53, 563, 49, 53, 564, 50, 53, 565, 51, 53, 566, 52, 53, 563, 53, 53, 564, 54, 53, 565, 55, 53, 566, 56, 53, 563, 57, 53, 564, 58, 53, 565, 59, 53, 566, 60, 53, 563, 61, 53, 564, 62, 53, 565, 63, 53, 566, 64, 53, 563, 65, 53, 564, 66, 53, 565, 67, 53, 566, 68, 53, 563, 69, 53, 564, 70, 53, 565, 71, 53, 566, 72, 53, 563, 37, 54, 574, 38, 54, 575, 39, 54, 576, 40, 54, 573, 41, 54, 574, 42, 54, 575, 43, 54, 576, 44, 54, 573, 45, 54, 574, 46, 54, 575, 47, 54, 576, 48, 54, 573, 49, 54, 574, 50, 54, 575, 51, 54, 576, 52, 54, 573, 53, 54, 574, 54, 54, 575, 55, 54, 576, 56, 54, 573, 57, 54, 574, 58, 54, 575, 59, 54, 576, 60, 54, 573, 61, 54, 574, 62, 54, 575, 63, 54, 576, 64, 54, 573, 65, 54, 574, 66, 54, 575, 67, 54, 576, 68, 54, 573, 69, 54, 574, 70, 54, 575, 71, 54, 576, 72, 54, 573]
    }, {
      n: "Tiles_new_background",
      t: "T",
      d: 900700,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_library_tileset_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 29,
      items: 1,
      fl: 66666,
      cells: []
    }, {
      n: "TILES",
      t: "T",
      d: 1000000,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_church_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 24,
      items: 1,
      fl: 66666,
      cells: [0, 6, 73, 1, 6, 73, 2, 6, 73, 3, 6, 73, 4, 6, 73, 5, 6, 73, 6, 6, 73, 7, 6, 73, 8, 6, 73, 9, 6, 73, 10, 6, 73, 11, 6, 73, 12, 6, 73, 13, 6, 73, 14, 6, 73, 15, 6, 73, 16, 6, 73, 17, 6, 73, 0, 7, 14, 1, 7, 15, 2, 7, 12, 3, 7, 13, 4, 7, 14, 5, 7, 15, 6, 7, 12, 7, 7, 13, 8, 7, 14, 9, 7, 15, 10, 7, 12, 11, 7, 13, 12, 7, 14, 13, 7, 15, 14, 7, 12, 15, 7, 14, 16, 7, 14, 17, 7, 15, 0, 8, 14, 1, 8, 15, 2, 8, 12, 3, 8, 13, 4, 8, 14, 5, 8, 15, 6, 8, 12, 7, 8, 13, 8, 8, 14, 9, 8, 15, 10, 8, 12, 11, 8, 13, 12, 8, 14, 13, 8, 15, 14, 8, 12, 15, 8, 14, 16, 8, 14, 17, 8, 15, 0, 9, 14, 1, 9, 15, 2, 9, 12, 3, 9, 13, 4, 9, 14, 5, 9, 15, 6, 9, 12, 7, 9, 13, 8, 9, 14, 9, 9, 15, 10, 9, 12, 11, 9, 13, 12, 9, 14, 13, 9, 15, 14, 9, 12, 15, 9, 14, 16, 9, 14, 17, 9, 15, 0, 10, 14, 1, 10, 15, 2, 10, 12, 3, 10, 13, 4, 10, 14, 5, 10, 15, 6, 10, 12, 7, 10, 13, 8, 10, 14, 9, 10, 15, 10, 10, 12, 11, 10, 13, 12, 10, 14, 13, 10, 15, 14, 10, 12, 15, 10, 14, 16, 10, 14, 17, 10, 15, 0, 11, 14, 1, 11, 15, 2, 11, 12, 3, 11, 13, 4, 11, 14, 5, 11, 15, 6, 11, 12, 7, 11, 13, 8, 11, 14, 9, 11, 15, 10, 11, 12, 11, 11, 13, 12, 11, 14, 13, 11, 15, 14, 11, 12, 15, 11, 14, 16, 11, 14, 17, 11, 15, 0, 12, 14, 1, 12, 15, 2, 12, 12, 3, 12, 13, 4, 12, 14, 5, 12, 15, 6, 12, 12, 7, 12, 13, 8, 12, 14, 9, 12, 15, 10, 12, 12, 11, 12, 13, 12, 12, 14, 13, 12, 15, 14, 12, 12, 15, 12, 14, 16, 12, 14, 17, 12, 15, 0, 13, 14, 1, 13, 15, 2, 13, 12, 3, 13, 13, 4, 13, 14, 5, 13, 15, 6, 13, 12, 7, 13, 13, 8, 13, 14, 9, 13, 15, 10, 13, 12, 11, 13, 13, 12, 13, 14, 13, 13, 15, 14, 13, 12, 15, 13, 14, 16, 13, 14, 17, 13, 15, 0, 14, 14, 1, 14, 15, 2, 14, 12, 3, 14, 13, 4, 14, 14, 5, 14, 15, 6, 14, 12, 7, 14, 13, 8, 14, 14, 9, 14, 15, 10, 14, 12, 11, 14, 13, 12, 14, 14, 13, 14, 15, 14, 14, 12, 15, 14, 14, 16, 14, 14, 17, 14, 15, 0, 15, 14, 1, 15, 15, 2, 15, 12, 3, 15, 13, 4, 15, 14, 5, 15, 15, 6, 15, 12, 7, 15, 13, 8, 15, 14, 9, 15, 15, 10, 15, 12, 11, 15, 13, 12, 15, 14, 13, 15, 15, 14, 15, 12, 15, 15, 14, 16, 15, 14, 17, 15, 15, 0, 16, 14, 1, 16, 15, 2, 16, 12, 3, 16, 13, 4, 16, 14, 5, 16, 15, 6, 16, 12, 7, 16, 13, 8, 16, 14, 9, 16, 15, 10, 16, 12, 11, 16, 13, 12, 16, 14, 13, 16, 15, 14, 16, 12, 15, 16, 14, 16, 16, 14, 17, 16, 15, 0, 17, 120, 1, 17, 120, 2, 17, 120, 3, 17, 120, 4, 17, 120, 5, 17, 97, 6, 17, 97, 7, 17, 97, 8, 17, 97, 9, 17, 97, 10, 17, 97, 11, 17, 97, 12, 17, 97, 13, 17, 97, 14, 17, 97, 15, 17, 97, 16, 17, 97, 17, 17, 97, 18, 17, 97, 19, 17, 97, 20, 17, 97, 21, 17, 97, 22, 17, 97, 23, 17, 97, 24, 17, 97, 25, 17, 97, 26, 17, 97, 27, 17, 97, 28, 17, 97, 29, 17, 97, 30, 17, 97, 31, 17, 97, 32, 17, 97, 33, 17, 97, 34, 17, 97, 35, 17, 97, 36, 17, 97, 37, 17, 97, 38, 17, 97, 39, 17, 97, 40, 17, 97, 41, 17, 97, 42, 17, 97, 43, 17, 97, 44, 17, 97, 45, 17, 97, 46, 17, 120, 47, 17, 120, 48, 17, 120, 49, 17, 120, 50, 17, 120, 51, 17, 120, 52, 17, 120, 53, 17, 120, 54, 17, 120, 0, 18, 14, 1, 18, 15, 2, 18, 12, 3, 18, 13, 4, 18, 14, 5, 18, 15, 6, 18, 12, 7, 18, 13, 8, 18, 14, 9, 18, 15, 10, 18, 12, 11, 18, 13, 12, 18, 14, 13, 18, 15, 14, 18, 12, 15, 18, 13, 16, 18, 14, 17, 18, 15, 18, 18, 12, 19, 18, 13, 20, 18, 14, 21, 18, 15, 22, 18, 12, 23, 18, 13, 24, 18, 14, 25, 18, 15, 26, 18, 12, 27, 18, 13, 28, 18, 14, 29, 18, 15, 30, 18, 12, 31, 18, 13, 32, 18, 14, 33, 18, 15, 34, 18, 12, 35, 18, 13, 36, 18, 14, 37, 18, 15, 38, 18, 120, 39, 18, 12, 40, 18, 13, 41, 18, 13, 42, 18, 14, 43, 18, 15, 44, 18, 120, 45, 18, 12, 46, 18, 13, 47, 18, 14, 48, 18, 14, 49, 18, 15, 50, 18, 12, 51, 18, 13, 52, 18, 13, 53, 18, 14, 54, 18, 15, 0, 19, 14, 1, 19, 15, 2, 19, 12, 3, 19, 13, 4, 19, 14, 5, 19, 15, 6, 19, 12, 7, 19, 13, 8, 19, 14, 9, 19, 15, 10, 19, 12, 11, 19, 13, 12, 19, 14, 13, 19, 15, 14, 19, 12, 15, 19, 13, 16, 19, 14, 17, 19, 15, 18, 19, 12, 19, 19, 13, 20, 19, 14, 21, 19, 15, 22, 19, 12, 23, 19, 13, 24, 19, 14, 25, 19, 15, 26, 19, 12, 27, 19, 13, 28, 19, 14, 29, 19, 15, 30, 19, 12, 31, 19, 13, 32, 19, 14, 33, 19, 15, 34, 19, 12, 35, 19, 13, 36, 19, 14, 37, 19, 15, 38, 19, 120, 39, 19, 12, 40, 19, 13, 41, 19, 13, 42, 19, 14, 43, 19, 15, 44, 19, 120, 45, 19, 12, 46, 19, 13, 47, 19, 14, 48, 19, 14, 49, 19, 15, 50, 19, 12, 51, 19, 13, 52, 19, 13, 53, 19, 14, 54, 19, 15, 0, 20, 14, 1, 20, 15, 2, 20, 12, 3, 20, 13, 4, 20, 14, 5, 20, 15, 6, 20, 12, 7, 20, 13, 8, 20, 14, 9, 20, 15, 10, 20, 12, 11, 20, 13, 12, 20, 14, 13, 20, 15, 14, 20, 12, 15, 20, 13, 16, 20, 14, 17, 20, 15, 18, 20, 12, 19, 20, 13, 20, 20, 14, 21, 20, 15, 22, 20, 12, 23, 20, 13, 24, 20, 14, 25, 20, 15, 26, 20, 12, 27, 20, 13, 28, 20, 14, 29, 20, 15, 30, 20, 12, 31, 20, 13, 32, 20, 14, 33, 20, 15, 34, 20, 12, 35, 20, 13, 36, 20, 14, 37, 20, 15, 38, 20, 120, 39, 20, 12, 40, 20, 13, 41, 20, 13, 42, 20, 14, 43, 20, 15, 44, 20, 120, 45, 20, 12, 46, 20, 13, 47, 20, 14, 48, 20, 14, 49, 20, 15, 50, 20, 12, 51, 20, 13, 52, 20, 13, 53, 20, 14, 54, 20, 15, 0, 21, 14, 1, 21, 15, 2, 21, 12, 3, 21, 13, 4, 21, 14, 5, 21, 15, 6, 21, 12, 7, 21, 13, 8, 21, 14, 9, 21, 15, 10, 21, 12, 11, 21, 13, 12, 21, 14, 13, 21, 15, 14, 21, 12, 15, 21, 13, 16, 21, 14, 17, 21, 15, 18, 21, 12, 19, 21, 13, 20, 21, 14, 21, 21, 15, 22, 21, 12, 23, 21, 13, 24, 21, 14, 25, 21, 15, 26, 21, 12, 27, 21, 13, 28, 21, 14, 29, 21, 15, 30, 21, 12, 31, 21, 13, 32, 21, 14, 33, 21, 15, 34, 21, 12, 35, 21, 13, 36, 21, 14, 37, 21, 15, 38, 21, 120, 39, 21, 12, 40, 21, 13, 41, 21, 13, 42, 21, 14, 43, 21, 15, 44, 21, 120, 45, 21, 12, 46, 21, 13, 47, 21, 14, 48, 21, 14, 49, 21, 15, 50, 21, 12, 51, 21, 13, 52, 21, 13, 53, 21, 14, 54, 21, 15, 0, 22, 14, 1, 22, 15, 2, 22, 12, 3, 22, 13, 4, 22, 14, 5, 22, 15, 6, 22, 12, 7, 22, 13, 8, 22, 14, 9, 22, 15, 10, 22, 12, 11, 22, 13, 12, 22, 14, 13, 22, 15, 14, 22, 12, 15, 22, 13, 16, 22, 14, 17, 22, 15, 18, 22, 12, 19, 22, 13, 20, 22, 14, 21, 22, 15, 22, 22, 12, 23, 22, 13, 24, 22, 14, 25, 22, 15, 26, 22, 12, 27, 22, 13, 28, 22, 14, 29, 22, 15, 30, 22, 12, 31, 22, 13, 32, 22, 14, 33, 22, 15, 34, 22, 12, 35, 22, 13, 36, 22, 14, 37, 22, 15, 38, 22, 120, 39, 22, 12, 40, 22, 13, 41, 22, 13, 42, 22, 14, 43, 22, 15, 44, 22, 120, 45, 22, 12, 46, 22, 13, 47, 22, 14, 48, 22, 14, 49, 22, 15, 50, 22, 12, 51, 22, 13, 52, 22, 13, 53, 22, 14, 54, 22, 15, 0, 23, 14, 1, 23, 15, 2, 23, 12, 3, 23, 13, 4, 23, 14, 5, 23, 15, 6, 23, 12, 7, 23, 13, 8, 23, 14, 9, 23, 15, 10, 23, 12, 11, 23, 13, 12, 23, 14, 13, 23, 15, 14, 23, 12, 15, 23, 13, 16, 23, 14, 17, 23, 15, 18, 23, 12, 19, 23, 13, 20, 23, 14, 21, 23, 15, 22, 23, 12, 23, 23, 13, 24, 23, 14, 25, 23, 15, 26, 23, 12, 27, 23, 13, 28, 23, 14, 29, 23, 15, 30, 23, 12, 31, 23, 13, 32, 23, 14, 33, 23, 15, 34, 23, 12, 35, 23, 13, 36, 23, 14, 37, 23, 15, 38, 23, 120, 39, 23, 12, 40, 23, 13, 41, 23, 13, 42, 23, 14, 43, 23, 15, 44, 23, 120, 45, 23, 12, 46, 23, 13, 47, 23, 14, 48, 23, 14, 49, 23, 15, 50, 23, 12, 51, 23, 13, 52, 23, 13, 53, 23, 14, 54, 23, 15, 0, 24, 120, 1, 24, 120, 2, 24, 120, 3, 24, 120, 4, 24, 120, 5, 24, 120, 6, 24, 120, 7, 24, 120, 8, 24, 120, 9, 24, 120, 10, 24, 120, 11, 24, 120, 12, 24, 120, 13, 24, 120, 14, 24, 120, 15, 24, 120, 16, 24, 120, 17, 24, 120, 18, 24, 120, 19, 24, 120, 20, 24, 120, 21, 24, 120, 22, 24, 120, 23, 24, 120, 24, 24, 120, 25, 24, 120, 26, 24, 120, 27, 24, 120, 28, 24, 120, 29, 24, 97, 30, 24, 97, 31, 24, 97, 32, 24, 97, 33, 24, 97, 34, 24, 97, 35, 24, 97, 36, 24, 97, 37, 24, 97, 38, 24, 97, 39, 24, 97, 40, 24, 97, 41, 24, 97, 42, 24, 97, 43, 24, 97, 44, 24, 97, 45, 24, 97, 46, 24, 97, 47, 24, 97, 48, 24, 120, 49, 24, 120, 50, 24, 120, 51, 24, 120, 52, 24, 120, 53, 24, 120, 54, 24, 120, 55, 24, 120, 56, 24, 120, 57, 24, 120, 0, 25, 15, 1, 25, 12, 2, 25, 13, 3, 25, 14, 4, 25, 14, 5, 25, 15, 6, 25, 12, 7, 25, 13, 8, 25, 14, 9, 25, 14, 10, 25, 15, 11, 25, 12, 12, 25, 13, 13, 25, 14, 14, 25, 14, 15, 25, 15, 16, 25, 12, 17, 25, 13, 18, 25, 14, 19, 25, 14, 20, 25, 15, 21, 25, 12, 22, 25, 13, 23, 25, 14, 24, 25, 14, 25, 25, 15, 26, 25, 12, 27, 25, 13, 28, 25, 14, 29, 25, 14, 30, 25, 15, 31, 25, 120, 32, 25, 12, 33, 25, 13, 34, 25, 14, 35, 25, 15, 36, 25, 12, 37, 25, 13, 38, 25, 14, 39, 25, 15, 40, 25, 12, 41, 25, 13, 42, 25, 14, 43, 25, 15, 44, 25, 12, 45, 25, 13, 46, 25, 14, 47, 25, 15, 48, 25, 12, 49, 25, 13, 50, 25, 15, 51, 25, 12, 52, 25, 13, 53, 25, 14, 54, 25, 15, 55, 25, 12, 56, 25, 13, 57, 25, 15, 0, 26, 15, 1, 26, 12, 2, 26, 13, 3, 26, 14, 4, 26, 14, 5, 26, 15, 6, 26, 12, 7, 26, 13, 8, 26, 14, 9, 26, 14, 10, 26, 15, 11, 26, 12, 12, 26, 13, 13, 26, 14, 14, 26, 14, 15, 26, 15, 16, 26, 12, 17, 26, 13, 18, 26, 14, 19, 26, 14, 20, 26, 15, 21, 26, 12, 22, 26, 13, 23, 26, 14, 24, 26, 14, 25, 26, 15, 26, 26, 12, 27, 26, 13, 28, 26, 14, 29, 26, 14, 30, 26, 15, 31, 26, 120, 32, 26, 12, 33, 26, 13, 34, 26, 14, 35, 26, 15, 36, 26, 12, 37, 26, 13, 38, 26, 14, 39, 26, 15, 40, 26, 12, 41, 26, 13, 42, 26, 14, 43, 26, 15, 44, 26, 12, 45, 26, 13, 46, 26, 14, 47, 26, 15, 48, 26, 12, 49, 26, 13, 50, 26, 15, 51, 26, 12, 52, 26, 13, 53, 26, 14, 54, 26, 15, 55, 26, 12, 56, 26, 13, 57, 26, 15, 0, 27, 15, 1, 27, 12, 2, 27, 13, 3, 27, 14, 4, 27, 14, 5, 27, 15, 6, 27, 12, 7, 27, 13, 8, 27, 14, 9, 27, 14, 10, 27, 15, 11, 27, 12, 12, 27, 13, 13, 27, 14, 14, 27, 14, 15, 27, 15, 16, 27, 12, 17, 27, 13, 18, 27, 14, 19, 27, 14, 20, 27, 15, 21, 27, 12, 22, 27, 13, 23, 27, 14, 24, 27, 14, 25, 27, 15, 26, 27, 12, 27, 27, 13, 28, 27, 14, 29, 27, 14, 30, 27, 15, 31, 27, 120, 32, 27, 12, 33, 27, 13, 34, 27, 14, 35, 27, 15, 36, 27, 12, 37, 27, 13, 38, 27, 14, 39, 27, 15, 40, 27, 12, 41, 27, 13, 42, 27, 14, 43, 27, 15, 44, 27, 12, 45, 27, 13, 46, 27, 14, 47, 27, 15, 48, 27, 12, 49, 27, 13, 50, 27, 15, 51, 27, 12, 52, 27, 13, 53, 27, 14, 54, 27, 15, 55, 27, 12, 56, 27, 13, 57, 27, 15, 70, 27, 73, 71, 27, 73, 72, 27, 73, 73, 27, 73, 74, 27, 73, 75, 27, 73, 76, 27, 73, 0, 28, 15, 1, 28, 12, 2, 28, 13, 3, 28, 14, 4, 28, 14, 5, 28, 15, 6, 28, 12, 7, 28, 13, 8, 28, 14, 9, 28, 14, 10, 28, 15, 11, 28, 12, 12, 28, 13, 13, 28, 14, 14, 28, 14, 15, 28, 15, 16, 28, 12, 17, 28, 13, 18, 28, 14, 19, 28, 14, 20, 28, 15, 21, 28, 12, 22, 28, 13, 23, 28, 14, 24, 28, 14, 25, 28, 15, 26, 28, 12, 27, 28, 13, 28, 28, 14, 29, 28, 14, 30, 28, 15, 31, 28, 120, 32, 28, 12, 33, 28, 13, 34, 28, 14, 35, 28, 15, 36, 28, 12, 37, 28, 13, 38, 28, 14, 39, 28, 15, 40, 28, 12, 41, 28, 13, 42, 28, 14, 43, 28, 15, 44, 28, 12, 45, 28, 13, 46, 28, 14, 47, 28, 15, 48, 28, 12, 49, 28, 13, 50, 28, 15, 51, 28, 12, 52, 28, 13, 53, 28, 14, 54, 28, 15, 55, 28, 12, 56, 28, 13, 57, 28, 15, 70, 28, 73, 71, 28, 73, 72, 28, 73, 73, 28, 73, 74, 28, 73, 75, 28, 73, 76, 28, 73, 0, 29, 15, 1, 29, 12, 2, 29, 13, 3, 29, 14, 4, 29, 14, 5, 29, 15, 6, 29, 12, 7, 29, 13, 8, 29, 14, 9, 29, 14, 10, 29, 15, 11, 29, 12, 12, 29, 13, 13, 29, 14, 14, 29, 14, 15, 29, 15, 16, 29, 12, 17, 29, 13, 18, 29, 14, 19, 29, 14, 20, 29, 15, 21, 29, 12, 22, 29, 13, 23, 29, 14, 24, 29, 14, 25, 29, 15, 26, 29, 12, 27, 29, 13, 28, 29, 14, 29, 29, 14, 30, 29, 15, 31, 29, 120, 32, 29, 12, 33, 29, 13, 34, 29, 14, 35, 29, 15, 36, 29, 12, 37, 29, 13, 38, 29, 14, 39, 29, 15, 40, 29, 12, 41, 29, 13, 42, 29, 14, 43, 29, 15, 44, 29, 12, 45, 29, 13, 46, 29, 14, 47, 29, 15, 48, 29, 12, 49, 29, 13, 50, 29, 15, 51, 29, 12, 52, 29, 13, 53, 29, 14, 54, 29, 15, 55, 29, 12, 56, 29, 13, 57, 29, 15, 70, 29, 79, 71, 29, 79, 72, 29, 79, 73, 29, 79, 74, 29, 79, 75, 29, 79, 76, 29, 79, 0, 30, 15, 1, 30, 12, 2, 30, 13, 3, 30, 14, 4, 30, 14, 5, 30, 15, 6, 30, 12, 7, 30, 13, 8, 30, 14, 9, 30, 14, 10, 30, 15, 11, 30, 12, 12, 30, 13, 13, 30, 14, 14, 30, 14, 15, 30, 15, 16, 30, 12, 17, 30, 13, 18, 30, 14, 19, 30, 14, 20, 30, 15, 21, 30, 12, 22, 30, 13, 23, 30, 14, 24, 30, 14, 25, 30, 15, 26, 30, 12, 27, 30, 13, 28, 30, 14, 29, 30, 14, 30, 30, 15, 31, 30, 120, 32, 30, 12, 33, 30, 13, 34, 30, 14, 35, 30, 15, 36, 30, 12, 37, 30, 13, 38, 30, 14, 39, 30, 15, 40, 30, 12, 41, 30, 13, 42, 30, 14, 43, 30, 15, 44, 30, 12, 45, 30, 13, 46, 30, 14, 47, 30, 15, 48, 30, 12, 49, 30, 13, 50, 30, 15, 51, 30, 12, 52, 30, 13, 53, 30, 14, 54, 30, 15, 55, 30, 12, 56, 30, 13, 57, 30, 15, 70, 30, 85, 71, 30, 85, 72, 30, 85, 73, 30, 85, 74, 30, 85, 75, 30, 85, 76, 30, 85, 0, 31, 15, 1, 31, 12, 2, 31, 13, 3, 31, 14, 4, 31, 14, 5, 31, 15, 6, 31, 12, 7, 31, 13, 8, 31, 14, 9, 31, 14, 10, 31, 15, 11, 31, 12, 12, 31, 13, 13, 31, 14, 14, 31, 14, 15, 31, 15, 16, 31, 12, 17, 31, 13, 18, 31, 14, 19, 31, 14, 20, 31, 15, 21, 31, 12, 22, 31, 13, 23, 31, 14, 24, 31, 14, 25, 31, 15, 26, 31, 12, 27, 31, 13, 28, 31, 14, 29, 31, 14, 30, 31, 15, 31, 31, 120, 32, 31, 12, 33, 31, 13, 34, 31, 14, 35, 31, 15, 36, 31, 12, 37, 31, 13, 38, 31, 14, 39, 31, 15, 40, 31, 12, 41, 31, 13, 42, 31, 14, 43, 31, 15, 44, 31, 12, 45, 31, 13, 46, 31, 14, 47, 31, 15, 48, 31, 12, 49, 31, 13, 50, 31, 15, 51, 31, 12, 52, 31, 13, 53, 31, 14, 54, 31, 15, 55, 31, 12, 56, 31, 13, 57, 31, 15, 0, 32, 15, 1, 32, 12, 2, 32, 13, 3, 32, 14, 4, 32, 14, 5, 32, 15, 6, 32, 12, 7, 32, 13, 8, 32, 14, 9, 32, 14, 10, 32, 15, 11, 32, 12, 12, 32, 13, 13, 32, 14, 14, 32, 14, 15, 32, 15, 16, 32, 12, 17, 32, 13, 18, 32, 14, 19, 32, 14, 20, 32, 15, 21, 32, 12, 22, 32, 13, 23, 32, 14, 24, 32, 14, 25, 32, 15, 26, 32, 12, 27, 32, 13, 28, 32, 14, 29, 32, 14, 30, 32, 15, 31, 32, 120, 32, 32, 12, 33, 32, 13, 34, 32, 14, 35, 32, 15, 36, 32, 12, 37, 32, 13, 38, 32, 14, 39, 32, 15, 40, 32, 12, 41, 32, 13, 42, 32, 14, 43, 32, 15, 44, 32, 12, 45, 32, 13, 46, 32, 14, 47, 32, 15, 48, 32, 12, 49, 32, 13, 50, 32, 15, 51, 32, 12, 52, 32, 13, 53, 32, 14, 54, 32, 15, 55, 32, 12, 56, 32, 13, 57, 32, 15, 0, 33, 120, 1, 33, 120, 2, 33, 120, 3, 33, 120, 4, 33, 120, 5, 33, 120, 6, 33, 120, 7, 33, 120, 8, 33, 120, 9, 33, 120, 10, 33, 120, 11, 33, 120, 12, 33, 120, 13, 33, 120, 14, 33, 120, 15, 33, 120, 16, 33, 120, 17, 33, 120, 18, 33, 120, 19, 33, 120, 20, 33, 120, 21, 33, 120, 22, 33, 120, 23, 33, 120, 24, 33, 120, 25, 33, 120, 26, 33, 120, 27, 33, 120, 28, 33, 120, 29, 33, 120, 30, 33, 120, 31, 33, 97, 32, 33, 97, 33, 33, 97, 34, 33, 97, 35, 33, 97, 36, 33, 97, 37, 33, 97, 38, 33, 120, 39, 33, 120, 40, 33, 120, 41, 33, 120, 42, 33, 120, 43, 33, 120, 44, 33, 120, 45, 33, 120, 46, 33, 120, 47, 33, 120, 48, 33, 120, 49, 33, 120, 50, 33, 120, 51, 33, 120, 52, 33, 120, 53, 33, 120, 54, 33, 120, 55, 33, 120, 56, 33, 120, 57, 33, 120, 58, 33, 120, 0, 34, 13, 1, 34, 15, 2, 34, 12, 3, 34, 13, 4, 34, 15, 5, 34, 12, 6, 34, 13, 7, 34, 15, 8, 34, 12, 9, 34, 13, 10, 34, 15, 11, 34, 12, 12, 34, 13, 13, 34, 15, 14, 34, 12, 15, 34, 13, 16, 34, 15, 17, 34, 12, 18, 34, 13, 19, 34, 15, 20, 34, 12, 21, 34, 13, 22, 34, 15, 23, 34, 12, 24, 34, 13, 25, 34, 15, 26, 34, 12, 27, 34, 13, 28, 34, 15, 29, 34, 12, 30, 34, 13, 31, 34, 14, 32, 34, 15, 33, 34, 12, 34, 34, 13, 35, 34, 14, 36, 34, 15, 37, 34, 120, 38, 34, 12, 39, 34, 13, 40, 34, 14, 41, 34, 15, 42, 34, 12, 43, 34, 13, 44, 34, 14, 45, 34, 15, 46, 34, 12, 47, 34, 13, 48, 34, 14, 49, 34, 15, 50, 34, 12, 51, 34, 13, 52, 34, 13, 53, 34, 14, 54, 34, 15, 55, 34, 12, 56, 34, 13, 57, 34, 14, 58, 34, 15, 0, 35, 13, 1, 35, 15, 2, 35, 12, 3, 35, 13, 4, 35, 15, 5, 35, 12, 6, 35, 13, 7, 35, 15, 8, 35, 12, 9, 35, 13, 10, 35, 15, 11, 35, 12, 12, 35, 13, 13, 35, 15, 14, 35, 12, 15, 35, 13, 16, 35, 15, 17, 35, 12, 18, 35, 13, 19, 35, 15, 20, 35, 12, 21, 35, 13, 22, 35, 15, 23, 35, 12, 24, 35, 13, 25, 35, 15, 26, 35, 12, 27, 35, 13, 28, 35, 15, 29, 35, 12, 30, 35, 13, 31, 35, 14, 32, 35, 15, 33, 35, 12, 34, 35, 13, 35, 35, 14, 36, 35, 15, 37, 35, 120, 38, 35, 12, 39, 35, 13, 40, 35, 14, 41, 35, 15, 42, 35, 12, 43, 35, 13, 44, 35, 14, 45, 35, 15, 46, 35, 12, 47, 35, 13, 48, 35, 14, 49, 35, 15, 50, 35, 12, 51, 35, 13, 52, 35, 13, 53, 35, 14, 54, 35, 15, 55, 35, 12, 56, 35, 13, 57, 35, 14, 58, 35, 15, 0, 36, 13, 1, 36, 15, 2, 36, 12, 3, 36, 13, 4, 36, 15, 5, 36, 12, 6, 36, 13, 7, 36, 15, 8, 36, 12, 9, 36, 13, 10, 36, 15, 11, 36, 12, 12, 36, 13, 13, 36, 15, 14, 36, 12, 15, 36, 13, 16, 36, 15, 17, 36, 12, 18, 36, 13, 19, 36, 15, 20, 36, 12, 21, 36, 13, 22, 36, 15, 23, 36, 12, 24, 36, 13, 25, 36, 15, 26, 36, 12, 27, 36, 13, 28, 36, 15, 29, 36, 12, 30, 36, 13, 31, 36, 14, 32, 36, 15, 33, 36, 12, 34, 36, 13, 35, 36, 14, 36, 36, 15, 37, 36, 120, 38, 36, 12, 39, 36, 13, 40, 36, 14, 41, 36, 15, 42, 36, 12, 43, 36, 13, 44, 36, 14, 45, 36, 15, 46, 36, 12, 47, 36, 13, 48, 36, 14, 49, 36, 15, 50, 36, 12, 51, 36, 13, 52, 36, 13, 53, 36, 14, 54, 36, 15, 55, 36, 12, 56, 36, 13, 57, 36, 14, 58, 36, 15, 0, 37, 13, 1, 37, 15, 2, 37, 12, 3, 37, 13, 4, 37, 15, 5, 37, 12, 6, 37, 13, 7, 37, 15, 8, 37, 12, 9, 37, 13, 10, 37, 15, 11, 37, 12, 12, 37, 13, 13, 37, 15, 14, 37, 12, 15, 37, 13, 16, 37, 15, 17, 37, 12, 18, 37, 13, 19, 37, 15, 20, 37, 12, 21, 37, 13, 22, 37, 15, 23, 37, 12, 24, 37, 13, 25, 37, 15, 26, 37, 12, 27, 37, 13, 28, 37, 15, 29, 37, 12, 30, 37, 13, 31, 37, 14, 32, 37, 15, 33, 37, 12, 34, 37, 13, 35, 37, 14, 36, 37, 15, 37, 37, 120, 38, 37, 12, 39, 37, 13, 40, 37, 14, 41, 37, 15, 42, 37, 12, 43, 37, 13, 44, 37, 14, 45, 37, 15, 46, 37, 12, 47, 37, 13, 48, 37, 14, 49, 37, 15, 50, 37, 12, 51, 37, 13, 52, 37, 13, 53, 37, 14, 54, 37, 15, 55, 37, 12, 56, 37, 13, 57, 37, 14, 58, 37, 15, 0, 38, 13, 1, 38, 15, 2, 38, 12, 3, 38, 13, 4, 38, 15, 5, 38, 12, 6, 38, 13, 7, 38, 15, 8, 38, 12, 9, 38, 13, 10, 38, 15, 11, 38, 12, 12, 38, 13, 13, 38, 15, 14, 38, 12, 15, 38, 13, 16, 38, 15, 17, 38, 12, 18, 38, 13, 19, 38, 15, 20, 38, 12, 21, 38, 13, 22, 38, 15, 23, 38, 12, 24, 38, 13, 25, 38, 15, 26, 38, 12, 27, 38, 13, 28, 38, 15, 29, 38, 12, 30, 38, 13, 31, 38, 14, 32, 38, 15, 33, 38, 12, 34, 38, 13, 35, 38, 14, 36, 38, 15, 37, 38, 120, 38, 38, 12, 39, 38, 13, 40, 38, 14, 41, 38, 15, 42, 38, 12, 43, 38, 13, 44, 38, 14, 45, 38, 15, 46, 38, 12, 47, 38, 13, 48, 38, 14, 49, 38, 15, 50, 38, 12, 51, 38, 13, 52, 38, 13, 53, 38, 14, 54, 38, 15, 55, 38, 12, 56, 38, 13, 57, 38, 14, 58, 38, 15, 0, 39, 13, 1, 39, 15, 2, 39, 12, 3, 39, 13, 4, 39, 15, 5, 39, 12, 6, 39, 13, 7, 39, 15, 8, 39, 12, 9, 39, 13, 10, 39, 15, 11, 39, 12, 12, 39, 13, 13, 39, 15, 14, 39, 12, 15, 39, 13, 16, 39, 15, 17, 39, 12, 18, 39, 13, 19, 39, 15, 20, 39, 12, 21, 39, 13, 22, 39, 15, 23, 39, 12, 24, 39, 13, 25, 39, 15, 26, 39, 12, 27, 39, 13, 28, 39, 15, 29, 39, 12, 30, 39, 13, 31, 39, 14, 32, 39, 15, 33, 39, 12, 34, 39, 13, 35, 39, 14, 36, 39, 15, 37, 39, 120, 38, 39, 12, 39, 39, 13, 40, 39, 14, 41, 39, 15, 42, 39, 12, 43, 39, 13, 44, 39, 14, 45, 39, 15, 46, 39, 12, 47, 39, 13, 48, 39, 14, 49, 39, 15, 50, 39, 12, 51, 39, 13, 52, 39, 13, 53, 39, 14, 54, 39, 15, 55, 39, 12, 56, 39, 13, 57, 39, 14, 58, 39, 15, 26, 40, 120, 27, 40, 120, 28, 40, 120, 29, 40, 120, 30, 40, 120, 31, 40, 97, 32, 40, 97, 33, 40, 97, 34, 40, 97, 35, 40, 97, 36, 40, 97, 37, 40, 97, 38, 40, 97, 39, 40, 97, 40, 40, 97, 41, 40, 97, 42, 40, 97, 43, 40, 97, 44, 40, 97, 45, 40, 97, 46, 40, 97, 47, 40, 97, 48, 40, 97, 49, 40, 120, 50, 40, 120, 51, 40, 120, 52, 40, 120, 53, 40, 120, 54, 40, 120, 55, 40, 120, 56, 40, 120, 57, 40, 120, 58, 40, 120, 59, 40, 120, 60, 40, 120, 62, 40, 120, 63, 40, 120, 64, 40, 120, 65, 40, 120, 66, 40, 120, 67, 40, 120, 68, 40, 120, 69, 40, 120, 70, 40, 120, 71, 40, 120, 72, 40, 120, 73, 40, 120, 26, 41, 12, 27, 41, 13, 28, 41, 13, 29, 41, 13, 30, 41, 14, 31, 41, 15, 32, 41, 12, 33, 41, 13, 34, 41, 13, 35, 41, 14, 36, 41, 15, 37, 41, 12, 38, 41, 13, 39, 41, 13, 40, 41, 14, 41, 41, 15, 42, 41, 120, 43, 41, 12, 44, 41, 13, 45, 41, 15, 46, 41, 12, 47, 41, 13, 48, 41, 14, 49, 41, 15, 50, 41, 12, 51, 41, 13, 52, 41, 14, 53, 41, 15, 54, 41, 12, 55, 41, 13, 56, 41, 15, 57, 41, 12, 58, 41, 13, 59, 41, 14, 60, 41, 15, 62, 41, 13, 63, 41, 14, 64, 41, 15, 65, 41, 12, 66, 41, 13, 67, 41, 13, 68, 41, 14, 69, 41, 15, 70, 41, 12, 71, 41, 13, 72, 41, 14, 73, 41, 15, 26, 42, 12, 27, 42, 13, 28, 42, 13, 29, 42, 13, 30, 42, 14, 31, 42, 15, 32, 42, 12, 33, 42, 13, 34, 42, 13, 35, 42, 14, 36, 42, 15, 37, 42, 12, 38, 42, 13, 39, 42, 13, 40, 42, 14, 41, 42, 15, 42, 42, 120, 43, 42, 12, 44, 42, 13, 45, 42, 15, 46, 42, 12, 47, 42, 13, 48, 42, 14, 49, 42, 15, 50, 42, 12, 51, 42, 13, 52, 42, 14, 53, 42, 15, 54, 42, 12, 55, 42, 13, 56, 42, 15, 57, 42, 12, 58, 42, 13, 59, 42, 14, 60, 42, 15, 62, 42, 13, 63, 42, 14, 64, 42, 15, 65, 42, 12, 66, 42, 13, 67, 42, 13, 68, 42, 14, 69, 42, 15, 70, 42, 12, 71, 42, 13, 72, 42, 14, 73, 42, 15, 74, 42, 271, 75, 42, 271, 76, 42, 271, 77, 42, 271, 78, 42, 271, 26, 43, 12, 27, 43, 13, 28, 43, 13, 29, 43, 13, 30, 43, 14, 31, 43, 15, 32, 43, 12, 33, 43, 13, 34, 43, 13, 35, 43, 14, 36, 43, 15, 37, 43, 12, 38, 43, 13, 39, 43, 13, 40, 43, 14, 41, 43, 15, 42, 43, 120, 43, 43, 12, 44, 43, 13, 45, 43, 15, 46, 43, 12, 47, 43, 13, 48, 43, 14, 49, 43, 15, 50, 43, 12, 51, 43, 13, 52, 43, 14, 53, 43, 15, 54, 43, 12, 55, 43, 13, 56, 43, 15, 57, 43, 12, 58, 43, 13, 59, 43, 14, 60, 43, 15, 62, 43, 13, 63, 43, 14, 64, 43, 15, 65, 43, 12, 66, 43, 13, 67, 43, 14, 68, 43, 14, 69, 43, 15, 70, 43, 12, 71, 43, 13, 72, 43, 14, 73, 43, 15, 74, 43, 271, 75, 43, 271, 76, 43, 271, 77, 43, 271, 78, 43, 271, 87, 43, 73, 88, 43, 73, 89, 43, 73, 90, 43, 73, 26, 44, 12, 27, 44, 13, 28, 44, 13, 29, 44, 13, 30, 44, 14, 31, 44, 15, 32, 44, 12, 33, 44, 13, 34, 44, 13, 35, 44, 14, 36, 44, 15, 37, 44, 12, 38, 44, 13, 39, 44, 13, 40, 44, 14, 41, 44, 15, 42, 44, 120, 43, 44, 12, 44, 44, 13, 45, 44, 15, 46, 44, 12, 47, 44, 13, 48, 44, 14, 49, 44, 15, 50, 44, 12, 51, 44, 13, 52, 44, 14, 53, 44, 15, 54, 44, 12, 55, 44, 13, 56, 44, 15, 57, 44, 12, 58, 44, 13, 59, 44, 14, 60, 44, 15, 62, 44, 13, 63, 44, 14, 64, 44, 15, 65, 44, 12, 66, 44, 13, 67, 44, 14, 68, 44, 14, 69, 44, 15, 70, 44, 12, 71, 44, 13, 72, 44, 14, 73, 44, 15, 74, 44, 271, 75, 44, 271, 76, 44, 271, 77, 44, 271, 78, 44, 271, 87, 44, 79, 88, 44, 79, 89, 44, 79, 90, 44, 79, 26, 45, 12, 27, 45, 13, 28, 45, 13, 29, 45, 13, 30, 45, 14, 31, 45, 15, 32, 45, 12, 33, 45, 13, 34, 45, 13, 35, 45, 14, 36, 45, 15, 37, 45, 12, 38, 45, 13, 39, 45, 13, 40, 45, 14, 41, 45, 15, 42, 45, 120, 43, 45, 12, 44, 45, 13, 45, 45, 15, 46, 45, 12, 47, 45, 13, 48, 45, 14, 49, 45, 15, 50, 45, 12, 51, 45, 13, 52, 45, 14, 53, 45, 15, 54, 45, 12, 55, 45, 13, 56, 45, 15, 57, 45, 12, 58, 45, 13, 59, 45, 14, 60, 45, 15, 62, 45, 13, 63, 45, 14, 64, 45, 15, 65, 45, 12, 66, 45, 13, 67, 45, 14, 68, 45, 14, 69, 45, 15, 70, 45, 12, 71, 45, 13, 72, 45, 14, 73, 45, 15, 74, 45, 271, 75, 45, 271, 76, 45, 271, 77, 45, 271, 78, 45, 271, 87, 45, 85, 88, 45, 85, 89, 45, 85, 90, 45, 85, 26, 46, 12, 27, 46, 13, 28, 46, 13, 29, 46, 13, 30, 46, 14, 31, 46, 15, 32, 46, 12, 33, 46, 13, 34, 46, 13, 35, 46, 14, 36, 46, 15, 37, 46, 12, 38, 46, 13, 39, 46, 13, 40, 46, 14, 41, 46, 15, 42, 46, 120, 43, 46, 12, 44, 46, 13, 45, 46, 15, 46, 46, 12, 47, 46, 13, 48, 46, 14, 49, 46, 15, 50, 46, 12, 51, 46, 13, 52, 46, 14, 53, 46, 15, 54, 46, 12, 55, 46, 13, 56, 46, 15, 57, 46, 12, 58, 46, 13, 59, 46, 13, 60, 46, 15, 62, 46, 13, 63, 46, 13, 64, 46, 15, 65, 46, 12, 66, 46, 13, 67, 46, 14, 68, 46, 14, 69, 46, 15, 70, 46, 12, 71, 46, 13, 72, 46, 14, 73, 46, 15, 74, 46, 271, 75, 46, 271, 76, 46, 271, 77, 46, 271, 78, 46, 271, 26, 47, 12, 27, 47, 13, 28, 47, 13, 29, 47, 13, 30, 47, 14, 31, 47, 15, 32, 47, 12, 33, 47, 13, 34, 47, 13, 35, 47, 14, 36, 47, 15, 37, 47, 12, 38, 47, 13, 39, 47, 13, 40, 47, 14, 41, 47, 15, 42, 47, 120, 43, 47, 12, 44, 47, 13, 45, 47, 15, 46, 47, 12, 47, 47, 13, 48, 47, 14, 49, 47, 15, 50, 47, 12, 51, 47, 13, 52, 47, 14, 53, 47, 15, 54, 47, 12, 55, 47, 13, 56, 47, 15, 57, 47, 12, 58, 47, 13, 59, 47, 13, 60, 47, 15, 62, 47, 13, 63, 47, 13, 64, 47, 15, 65, 47, 12, 66, 47, 13, 67, 47, 14, 68, 47, 14, 69, 47, 15, 70, 47, 12, 71, 47, 13, 72, 47, 14, 73, 47, 15, 74, 47, 271, 75, 47, 271, 76, 47, 271, 77, 47, 271, 78, 47, 271, 26, 48, 12, 27, 48, 13, 28, 48, 13, 29, 48, 13, 30, 48, 14, 31, 48, 15, 32, 48, 12, 33, 48, 13, 34, 48, 13, 35, 48, 14, 36, 48, 15, 37, 48, 12, 38, 48, 13, 39, 48, 13, 40, 48, 14, 41, 48, 15, 42, 48, 120, 43, 48, 12, 44, 48, 13, 45, 48, 15, 46, 48, 12, 47, 48, 13, 48, 48, 14, 49, 48, 15, 50, 48, 12, 51, 48, 13, 52, 48, 14, 53, 48, 15, 54, 48, 12, 55, 48, 13, 56, 48, 15, 57, 48, 12, 58, 48, 13, 59, 48, 13, 60, 48, 15, 62, 48, 13, 63, 48, 13, 64, 48, 15, 65, 48, 12, 66, 48, 13, 67, 48, 14, 68, 48, 14, 69, 48, 15, 70, 48, 12, 71, 48, 13, 72, 48, 14, 73, 48, 15, 74, 48, 271, 75, 48, 271, 76, 48, 271, 77, 48, 271, 78, 48, 271, 26, 49, 12, 27, 49, 13, 28, 49, 13, 29, 49, 13, 30, 49, 14, 31, 49, 15, 32, 49, 12, 33, 49, 13, 34, 49, 13, 35, 49, 14, 36, 49, 15, 37, 49, 12, 38, 49, 13, 39, 49, 13, 40, 49, 14, 41, 49, 15, 42, 49, 120, 43, 49, 12, 44, 49, 13, 45, 49, 15, 46, 49, 12, 47, 49, 13, 48, 49, 14, 49, 49, 15, 50, 49, 12, 51, 49, 13, 52, 49, 14, 53, 49, 15, 54, 49, 12, 55, 49, 13, 56, 49, 15, 57, 49, 12, 58, 49, 13, 59, 49, 13, 60, 49, 15, 62, 49, 13, 63, 49, 13, 64, 49, 15, 65, 49, 12, 66, 49, 13, 67, 49, 14, 68, 49, 14, 69, 49, 15, 70, 49, 12, 71, 49, 13, 72, 49, 14, 73, 49, 15, 74, 49, 271, 75, 49, 271, 76, 49, 271, 77, 49, 271, 78, 49, 271, 26, 50, 12, 27, 50, 13, 28, 50, 13, 29, 50, 13, 30, 50, 14, 31, 50, 15, 32, 50, 12, 33, 50, 13, 34, 50, 13, 35, 50, 14, 36, 50, 15, 37, 50, 97, 38, 50, 97, 39, 50, 97, 40, 50, 97, 41, 50, 97, 42, 50, 97, 43, 50, 97, 44, 50, 97, 45, 50, 97, 46, 50, 97, 47, 50, 97, 48, 50, 97, 49, 50, 97, 50, 50, 97, 51, 50, 97, 52, 50, 97, 53, 50, 97, 54, 50, 97, 55, 50, 97, 56, 50, 97, 57, 50, 97, 58, 50, 97, 59, 50, 97, 60, 50, 97, 61, 50, 97, 62, 50, 97, 63, 50, 97, 64, 50, 97, 65, 50, 97, 66, 50, 97, 67, 50, 97, 68, 50, 97, 69, 50, 97, 70, 50, 97, 71, 50, 97, 72, 50, 97, 73, 50, 97, 74, 50, 271, 75, 50, 271, 76, 50, 271, 77, 50, 271, 78, 50, 271]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch4/room_dw_church_arena": {
    w: 1280,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_dw_church_arena"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 300, 381, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "Tiles_new_midground",
      t: "T",
      d: 890100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_library_tileset_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 29,
      items: 1,
      fl: 66666,
      cells: [7, 6, 746, 8, 6, 744, 9, 6, 746, 10, 6, 744, 11, 6, 746]
    }, {
      n: "Tiles_new_main",
      t: "T",
      d: 890200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_library_tileset_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 29,
      items: 1,
      fl: 66666,
      cells: [7, 1, 769, 8, 1, 768, 9, 1, 769, 10, 1, 768, 11, 1, 769, 12, 1, 767, 7, 2, 779, 8, 2, 778, 9, 2, 779, 10, 2, 778, 11, 2, 779, 12, 2, 777, 7, 3, 789, 8, 3, 788, 9, 3, 789, 10, 3, 788, 11, 3, 789, 12, 3, 787, 7, 4, 799, 8, 4, 798, 9, 4, 799, 10, 4, 798, 11, 4, 799, 12, 4, 820, 7, 5, 819, 8, 5, 818, 9, 5, 819, 10, 5, 818, 11, 5, 819, 12, 5, 800, 7, 6, 829, 8, 6, 828, 9, 6, 829, 10, 6, 828, 11, 6, 829, 12, 6, 810, 7, 7, 714, 8, 7, 715, 9, 7, 705, 10, 7, 716, 11, 7, 718, 12, 7, 719, 7, 8, 724, 8, 8, 726, 9, 8, 736, 10, 8, 726, 11, 8, 738, 12, 8, 739, 7, 9, 714, 8, 9, 717, 9, 9, 764, 10, 9, 765, 11, 9, 765, 12, 9, 765, 13, 9, 765, 14, 9, 765, 15, 9, 765, 16, 9, 765, 17, 9, 765, 18, 9, 765, 19, 9, 765, 20, 9, 765, 21, 9, 765, 22, 9, 765, 23, 9, 765, 24, 9, 765, 25, 9, 765, 26, 9, 765, 27, 9, 765, 28, 9, 766, 7, 10, 724, 8, 10, 727, 7, 11, 734, 8, 11, 737]
    }, {
      n: "Tiles_new_background",
      t: "T",
      d: 890300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_library_tileset_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 29,
      items: 1,
      fl: 66666,
      cells: [7, 2, 774, 9, 2, 774, 10, 2, 774, 11, 2, 774, 7, 3, 774, 9, 3, 774, 10, 3, 774, 11, 3, 774, 7, 4, 774, 9, 4, 774, 10, 4, 774, 11, 4, 774, 7, 5, 774, 9, 5, 774, 10, 5, 774, 11, 5, 774, 7, 6, 774, 8, 6, 755, 9, 6, 774, 10, 6, 774, 11, 6, 774, 12, 6, 755]
    }, {
      n: "TILES",
      t: "T",
      d: 900000,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_church_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 24,
      items: 1,
      fl: 66666,
      cells: [13, 3, 69, 13, 4, 75, 13, 5, 75, 13, 6, 75, 13, 7, 76]
    }, {
      n: "ASSETS_BG",
      t: "A",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["bg_dw_gerson_arena", 520, 0, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch4/room_dw_church_holywatercooler": {
    w: 3840,
    h: 3840,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_dw_church_holywatercooler"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "Debug_Assets",
      t: "A",
      d: -200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_npc_cup_walk", 2040, 3460, 2, 2, "FFFFFFFF", 0, 0, 0], ["spr_npc_cup_walk", 2240, 3458, -2, 2, "FFFFFFFF", 0, 0, 0], ["spr_npc_cup_walk", 1992, 2310, 2, 2, "FFFFFFFF", 0, 0, 0], ["spr_dw_church_holywaterbasin", 1460, 1218, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "Unorganized_Working_Mess",
      t: "I",
      d: -100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_climbstartertrig", 2400, 3480, 1, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2400, 3360, 1, 3.0000014, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climbstarter", 2400, 3440, 2, 2, 0, "spr_climbstarter", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2440, 3360, 8, 1.0000015, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2480, 3120, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2560, 3080, 1, 3.000001, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2640, 3040, 1, 6.000001, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2480, 2800, 1, 2.000001, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2560, 2800, 1, 5.000001, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2640, 2840, 1, 4.000001, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_watergenerator", 2480, 2600, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2640, 2600, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2560, 2600, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_climbable", 2080, 2480, 1, 3.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2480, 3040, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2560, 3320, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2640, 3320, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 1920, 3640, 1, 9, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_marker", 1920, 3760, 1, 1, 0, "spr_climbmarker", true, 0, 1, "FFFFFFFF"], ["obj_climb_door", 1920, 3840, 1, 1, 0, "spr_climbdoor", true, 0, 1, "FFFFFFFF"], ["obj_climbstarter", 1920, 3640, 2, 2, 0, "spr_climbstarter", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2480, 2920, 1, 2.000001, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2360, 2720, 1, 3.0000012, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2240, 2560, 1, 5.0000014, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_dw_church_climbingcup", 2242, 2693, 2, 2, 0, "spr_npc_cup_climb", true, 0, 8, "FFFFFFFF"], ["obj_climb_climbable", 2120, 2560, 1, 1.0000008, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2400, 2240, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2520, 2160, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2720, 2080, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2640, 2200, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2640, 2080, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2600, 2080, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2720, 1960, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2640, 2080, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2640, 1960, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2600, 1960, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2600, 2040, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2520, 2160, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2520, 2040, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2480, 2040, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2480, 2120, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2400, 2240, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2400, 2120, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2360, 2120, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2600, 1800, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2520, 1920, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2520, 1800, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2480, 1800, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2480, 1720, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2400, 1840, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2400, 1720, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2360, 1720, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2360, 1640, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2280, 1760, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2280, 1640, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2240, 1640, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2400, 1720, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2400, 1600, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2360, 1600, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2360, 1520, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2280, 1640, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2280, 1520, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2240, 1520, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2480, 1600, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2160, 1520, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2160, 1640, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2120, 1520, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 1920, 1520, 5, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 1880, 1400, 1, 4.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2280, 2120, 2, 1.0000004, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2240, 2120, 1, 5.0000005, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climbstarter", 2240, 2280, 2, 2, 0, "spr_climbstarter", true, 0, 0, "FFFFFFFF"], ["obj_climbstartertrig", 2240, 2320, 1, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_watergenerator", 2320, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2280, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2360, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2400, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2440, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2480, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2560, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2600, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2640, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2680, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2520, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2720, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2240, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2200, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2160, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_watergenerator", 2120, 1280, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_waterbucket", 2240, 2040, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2120, 2280, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2160, 2280, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2200, 2280, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2280, 2280, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2320, 2280, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2360, 2280, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2400, 2280, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2440, 2280, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2480, 2280, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2520, 2280, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2560, 2280, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2600, 2280, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2640, 2280, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2680, 2280, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climb_waterbucket", 2720, 2280, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"], ["obj_climbstarter", 2080, 2480, 2, 2, 0, "spr_climbstarter", true, 0, 0, "FFFFFFFF"], ["obj_climbstartertrig", 2080, 2440, 1, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climbstarter", 1880, 1400, 2, 2, 0, "spr_climbstarter", true, 0, 0, "FFFFFFFF"], ["obj_climbstartertrig", 1880, 1360, 1, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 2720, 2880, 1, 8.000001, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_watergenerator", 2720, 2600, 2, 2, 0, "spr_climb_waterspawn", true, 0, 0, "FFB253A5"], ["obj_climb_waterbucket", 2720, 3320, 2, 2, 0, "spr_climb_waterbucket", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 1780, 1138, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_dw_church_holywatercooler", -120, 1840, 10, 10, 0, "spr_eventsmall", true, 0, 0, "FFFFFFFF"], ["obj_dw_church_climbingcup", 2322, 3288, 2, 2, 0, "spr_npc_cup_climb", true, 0, 8, "FFFFFFFF"], ["obj_dw_church_climbingcup", 2882, 2932, 2, 2, 0, "spr_npc_cup_climb", true, 0, 8, "FFFFFFFF"], ["obj_parallaxer", 440, 1360, 1, 1, 0, "spr_ui_parallaxer", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_climbstartertrig", 1920, 3600, 1, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Assets_1",
      t: "A",
      d: 200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_watercooler", 1020, 62, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "Tiles_ShortcutUnlock",
      t: "T",
      d: 1000019,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_church_tileset_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 24,
      items: 1,
      fl: 66666,
      cells: [44, 30, 479, 44, 31, 485, 43, 32, 342, 44, 32, 491, 45, 32, 342, 43, 33, 354, 44, 33, 491, 45, 33, 354, 43, 34, 360, 44, 34, 491, 45, 34, 360, 43, 35, 360, 44, 35, 491, 45, 35, 360, 43, 36, 360, 44, 36, 491, 45, 36, 360, 43, 37, 360, 44, 37, 491, 45, 37, 360, 43, 38, 360, 44, 38, 491, 45, 38, 360, 43, 39, 360, 44, 39, 491, 45, 39, 360, 43, 40, 360, 44, 40, 491, 45, 40, 360, 43, 41, 360, 44, 41, 491, 45, 41, 360, 43, 42, 360, 44, 42, 491, 45, 42, 360, 43, 43, 360, 44, 43, 491, 45, 43, 360, 43, 44, 360, 44, 44, 491, 45, 44, 360, 43, 45, 360, 44, 45, 491, 45, 45, 360, 43, 46, 360, 44, 46, 491, 45, 46, 360, 43, 47, 360, 44, 47, 491, 45, 47, 360, 43, 48, 360, 44, 48, 491, 45, 48, 360, 43, 49, 360, 44, 49, 491, 45, 49, 360, 43, 50, 360, 44, 50, 491, 45, 50, 360, 43, 51, 360, 44, 51, 491, 45, 51, 360, 43, 52, 360, 44, 52, 491, 45, 52, 360, 43, 53, 360, 44, 53, 491, 45, 53, 360, 43, 54, 360, 44, 54, 491, 45, 54, 360, 43, 55, 360, 44, 55, 491, 45, 55, 360, 43, 56, 360, 44, 56, 491, 45, 56, 360, 43, 57, 360, 44, 57, 491, 45, 57, 360, 43, 58, 360, 44, 58, 491, 45, 58, 360, 43, 59, 360, 44, 59, 491, 45, 59, 360, 43, 60, 360, 44, 60, 491, 45, 60, 360, 43, 61, 360, 44, 61, 491, 45, 61, 360, 43, 62, 360, 44, 62, 491, 45, 62, 360, 43, 63, 360, 44, 63, 491, 45, 63, 360, 43, 64, 360, 44, 64, 491, 45, 64, 360, 43, 65, 360, 44, 65, 491, 45, 65, 360, 43, 66, 360, 44, 66, 491, 45, 66, 360, 43, 67, 360, 44, 67, 491, 45, 67, 360, 43, 68, 360, 44, 68, 491, 45, 68, 360, 43, 69, 360, 44, 69, 491, 45, 69, 360, 43, 70, 360, 44, 70, 491, 45, 70, 360, 43, 71, 360, 44, 71, 491, 45, 71, 360, 43, 72, 360, 44, 72, 491, 45, 72, 360, 43, 73, 360, 44, 73, 491, 45, 73, 360, 43, 74, 360, 44, 74, 491, 45, 74, 360, 43, 75, 360, 44, 75, 491, 45, 75, 360, 43, 76, 360, 44, 76, 491, 45, 76, 360, 43, 77, 360, 44, 77, 491, 45, 77, 360, 43, 78, 360, 44, 78, 491, 45, 78, 360, 43, 79, 360, 44, 79, 491, 45, 79, 360, 43, 80, 360, 44, 80, 491, 45, 80, 360, 43, 81, 360, 44, 81, 491, 45, 81, 360, 43, 82, 360, 44, 82, 491, 45, 82, 360, 43, 83, 360, 44, 83, 491, 45, 83, 360, 43, 84, 360, 44, 84, 491, 45, 84, 360, 43, 85, 360, 44, 85, 491, 45, 85, 360, 43, 86, 360, 44, 86, 497, 45, 86, 360, 43, 87, 366, 44, 87, 503, 45, 87, 366, 44, 88, 509]
    }, {
      n: "LINESFORTILES",
      t: "A",
      d: 1000020,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_pxwhite", 1720, 3518, 680, 2, "FF000000", 0, 1, 0], ["spr_pxwhite", 2280, 2358, 560, 2, "FF000000", 0, 1, 0], ["spr_pxwhite", 2000, 2358, 240, 2, "FF000000", 0, 1, 0]]
    }, {
      n: "Tiles_new_midground",
      t: "T",
      d: 1000021,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_church_tileset_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 24,
      items: 1,
      fl: 66666,
      cells: [36, 34, 463, 37, 34, 453, 38, 34, 454, 39, 34, 464, 36, 35, 469, 37, 35, 459, 38, 35, 460, 39, 35, 470, 50, 58, 412, 51, 58, 412, 52, 58, 412, 53, 58, 412, 54, 58, 412, 55, 58, 412, 57, 58, 412, 58, 58, 412, 59, 58, 412, 60, 58, 412, 61, 58, 412, 62, 58, 412, 63, 58, 412, 64, 58, 412, 65, 58, 412, 66, 58, 412, 67, 58, 412, 68, 58, 412, 69, 58, 412, 70, 58, 412, 59, 82, 536, 59, 83, 536, 58, 84, 541, 43, 87, 412, 44, 87, 412, 45, 87, 412, 46, 87, 412, 47, 87, 412, 48, 87, 412, 49, 87, 412, 50, 87, 412, 51, 87, 412, 52, 87, 412, 53, 87, 412, 54, 87, 412, 55, 87, 412, 56, 87, 412, 57, 87, 412, 58, 87, 412, 59, 87, 412]
    }, {
      n: "WINDOWS",
      t: "I",
      d: 1000025,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "Tiles_new_main",
      t: "T",
      d: 1000030,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_church_tileset_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 24,
      items: 1,
      fl: 66666,
      cells: [41, 17, 342, 42, 17, 381, 43, 17, 382, 44, 17, 383, 45, 17, 381, 46, 17, 382, 47, 17, 383, 48, 17, 342, 41, 18, 348, 42, 18, 387, 43, 18, 388, 44, 18, 389, 45, 18, 387, 46, 18, 388, 47, 18, 389, 48, 18, 348, 41, 19, 372, 42, 19, 393, 43, 19, 394, 44, 19, 395, 45, 19, 393, 46, 19, 394, 47, 19, 395, 48, 19, 372, 41, 20, 360, 42, 20, 399, 43, 20, 400, 44, 20, 401, 45, 20, 399, 46, 20, 400, 47, 20, 401, 48, 20, 360, 41, 21, 360, 42, 21, 405, 43, 21, 406, 44, 21, 407, 45, 21, 405, 46, 21, 406, 47, 21, 407, 48, 21, 360, 41, 22, 360, 42, 22, 411, 43, 22, 412, 44, 22, 413, 45, 22, 411, 46, 22, 412, 47, 22, 413, 48, 22, 360, 41, 23, 342, 42, 23, 381, 43, 23, 382, 44, 23, 383, 45, 23, 381, 46, 23, 382, 47, 23, 383, 48, 23, 342, 41, 24, 348, 42, 24, 387, 43, 24, 388, 44, 24, 389, 45, 24, 387, 46, 24, 388, 47, 24, 389, 48, 24, 348, 41, 25, 372, 42, 25, 393, 43, 25, 394, 44, 25, 395, 45, 25, 393, 46, 25, 394, 47, 25, 395, 48, 25, 372, 41, 26, 360, 42, 26, 399, 43, 26, 400, 44, 26, 401, 45, 26, 399, 46, 26, 400, 47, 26, 401, 48, 26, 360, 41, 27, 360, 42, 27, 405, 43, 27, 406, 44, 27, 407, 45, 27, 405, 46, 27, 406, 47, 27, 407, 48, 27, 360, 41, 28, 366, 42, 28, 575, 43, 28, 575, 44, 28, 575, 45, 28, 575, 46, 28, 575, 47, 28, 575, 48, 28, 366, 41, 29, 376, 42, 29, 352, 43, 29, 353, 44, 29, 477, 45, 29, 376, 46, 29, 73, 47, 29, 376, 48, 29, 474, 41, 30, 376, 42, 30, 358, 43, 30, 359, 44, 30, 73, 45, 30, 476, 46, 30, 376, 47, 30, 377, 48, 30, 73, 41, 31, 73, 42, 31, 73, 43, 31, 450, 44, 31, 450, 45, 31, 450, 46, 31, 477, 47, 31, 73, 48, 31, 73, 35, 32, 377, 36, 32, 433, 37, 32, 434, 38, 32, 436, 39, 32, 437, 40, 32, 364, 41, 32, 365, 42, 32, 474, 46, 32, 352, 47, 32, 353, 48, 32, 477, 35, 33, 73, 36, 33, 445, 37, 33, 446, 38, 33, 448, 39, 33, 449, 40, 33, 370, 41, 33, 371, 42, 33, 377, 46, 33, 358, 47, 33, 359, 48, 33, 477, 35, 34, 450, 36, 34, 450, 37, 34, 450, 38, 34, 450, 39, 34, 450, 40, 34, 450, 41, 34, 450, 42, 34, 450, 46, 34, 450, 47, 34, 473, 48, 34, 450, 46, 35, 534, 47, 35, 273, 48, 35, 536, 46, 36, 534, 47, 36, 570, 48, 36, 536, 46, 37, 534, 47, 37, 576, 48, 37, 535, 49, 37, 529, 50, 37, 529, 51, 37, 529, 52, 37, 529, 53, 37, 529, 54, 37, 529, 55, 37, 529, 56, 37, 529, 57, 37, 529, 58, 37, 529, 59, 37, 529, 60, 37, 530, 46, 38, 540, 47, 38, 273, 48, 38, 273, 49, 38, 570, 50, 38, 273, 51, 38, 273, 52, 38, 576, 53, 38, 570, 54, 38, 273, 55, 38, 570, 56, 38, 273, 57, 38, 273, 58, 38, 570, 59, 38, 273, 60, 38, 536, 47, 39, 540, 48, 39, 535, 49, 39, 535, 50, 39, 535, 51, 39, 535, 52, 39, 535, 53, 39, 273, 54, 39, 535, 55, 39, 535, 56, 39, 570, 57, 39, 542, 58, 39, 540, 59, 39, 273, 60, 39, 535, 61, 39, 529, 62, 39, 530, 48, 40, 540, 49, 40, 541, 50, 40, 541, 51, 40, 541, 52, 40, 535, 53, 40, 273, 54, 40, 535, 55, 40, 535, 56, 40, 273, 57, 40, 530, 58, 40, 528, 59, 40, 570, 60, 40, 273, 61, 40, 273, 62, 40, 570, 63, 40, 530, 52, 41, 540, 53, 41, 570, 54, 41, 273, 55, 41, 273, 56, 41, 576, 57, 41, 570, 58, 41, 273, 59, 41, 273, 60, 41, 535, 61, 41, 535, 62, 41, 570, 63, 41, 536, 53, 42, 540, 54, 42, 541, 55, 42, 535, 56, 42, 570, 57, 42, 535, 58, 42, 535, 59, 42, 273, 60, 42, 535, 61, 42, 535, 62, 42, 570, 63, 42, 536, 55, 43, 534, 56, 43, 570, 57, 43, 535, 58, 43, 535, 59, 43, 570, 60, 43, 273, 61, 43, 273, 62, 43, 273, 63, 43, 535, 64, 43, 530, 55, 44, 534, 56, 44, 273, 57, 44, 570, 58, 44, 273, 59, 44, 576, 60, 44, 542, 61, 44, 540, 62, 44, 273, 63, 44, 535, 64, 44, 535, 65, 44, 530, 56, 45, 540, 57, 45, 535, 58, 45, 535, 59, 45, 273, 60, 45, 530, 61, 45, 528, 62, 45, 570, 63, 45, 273, 64, 45, 273, 65, 45, 570, 66, 45, 530, 57, 46, 540, 58, 46, 541, 59, 46, 273, 60, 46, 570, 61, 46, 273, 62, 46, 576, 63, 46, 535, 64, 46, 535, 65, 46, 273, 66, 46, 536, 59, 47, 540, 60, 47, 541, 61, 47, 535, 62, 47, 273, 63, 47, 535, 64, 47, 535, 65, 47, 273, 66, 47, 536, 61, 48, 534, 62, 48, 273, 63, 48, 570, 64, 48, 273, 65, 48, 570, 66, 48, 535, 67, 48, 529, 68, 48, 529, 69, 48, 530, 61, 49, 534, 62, 49, 535, 63, 49, 535, 64, 49, 535, 65, 49, 570, 66, 49, 576, 67, 49, 273, 68, 49, 570, 69, 49, 536, 61, 50, 534, 62, 50, 535, 63, 50, 535, 64, 50, 535, 65, 50, 273, 66, 50, 542, 67, 50, 540, 68, 50, 570, 69, 50, 536, 59, 51, 528, 60, 51, 529, 61, 51, 535, 62, 51, 570, 63, 51, 273, 64, 51, 273, 65, 51, 273, 66, 51, 530, 67, 51, 528, 68, 51, 273, 69, 51, 536, 54, 52, 528, 55, 52, 529, 56, 52, 529, 57, 52, 529, 58, 52, 529, 59, 52, 535, 60, 52, 535, 61, 52, 535, 62, 52, 576, 63, 52, 542, 64, 52, 540, 65, 52, 570, 66, 52, 273, 67, 52, 570, 68, 52, 570, 69, 52, 535, 70, 52, 530, 53, 53, 528, 54, 53, 535, 55, 53, 535, 56, 53, 273, 57, 53, 273, 58, 53, 273, 59, 53, 570, 60, 53, 273, 61, 53, 273, 62, 53, 576, 63, 53, 530, 64, 53, 528, 65, 53, 273, 66, 53, 535, 67, 53, 535, 68, 53, 273, 69, 53, 535, 70, 53, 536, 53, 54, 534, 54, 54, 535, 55, 54, 535, 56, 54, 570, 57, 54, 535, 58, 54, 535, 59, 54, 273, 60, 54, 542, 61, 54, 540, 62, 54, 273, 63, 54, 273, 64, 54, 570, 65, 54, 273, 66, 54, 535, 67, 54, 535, 68, 54, 273, 69, 54, 535, 70, 54, 536, 53, 55, 540, 54, 55, 535, 55, 55, 535, 56, 55, 273, 57, 55, 535, 58, 55, 535, 59, 55, 570, 60, 55, 530, 61, 55, 528, 62, 55, 273, 63, 55, 536, 64, 55, 534, 65, 55, 273, 66, 55, 570, 67, 55, 273, 68, 55, 570, 69, 55, 535, 70, 55, 542, 54, 56, 534, 55, 56, 535, 56, 56, 576, 57, 56, 535, 58, 56, 535, 59, 56, 576, 60, 56, 273, 61, 56, 570, 62, 56, 570, 63, 56, 542, 64, 56, 540, 65, 56, 541, 66, 56, 541, 67, 56, 541, 68, 56, 541, 69, 56, 542, 54, 57, 540, 55, 57, 535, 56, 57, 273, 57, 57, 535, 58, 57, 541, 59, 57, 541, 60, 57, 541, 61, 57, 541, 62, 57, 542, 55, 58, 540, 56, 58, 279, 57, 58, 542, 50, 59, 73, 51, 59, 73, 52, 59, 475, 53, 59, 73, 54, 59, 477, 55, 59, 477, 56, 59, 475, 57, 59, 352, 58, 59, 353, 59, 59, 433, 60, 59, 434, 61, 59, 436, 62, 59, 436, 63, 59, 436, 64, 59, 436, 65, 59, 436, 66, 59, 436, 67, 59, 436, 68, 59, 437, 69, 59, 477, 70, 59, 358, 50, 60, 477, 51, 60, 475, 52, 60, 474, 53, 60, 477, 54, 60, 477, 55, 60, 477, 56, 60, 73, 57, 60, 358, 58, 60, 359, 59, 60, 445, 60, 60, 446, 61, 60, 448, 62, 60, 448, 63, 60, 448, 64, 60, 448, 65, 60, 448, 66, 60, 448, 67, 60, 448, 68, 60, 449, 69, 60, 352, 70, 60, 353, 50, 61, 450, 51, 61, 450, 52, 61, 473, 53, 61, 450, 54, 61, 450, 55, 61, 450, 56, 61, 450, 57, 61, 450, 58, 61, 450, 59, 61, 462, 60, 61, 463, 61, 61, 464, 62, 61, 465, 65, 61, 464, 66, 61, 463, 67, 61, 462, 68, 61, 465, 69, 61, 450, 70, 61, 450, 51, 62, 534, 52, 62, 570, 53, 62, 536, 59, 62, 468, 60, 62, 469, 61, 62, 470, 62, 62, 471, 63, 62, 459, 64, 62, 460, 65, 62, 470, 66, 62, 469, 67, 62, 468, 68, 62, 471, 51, 63, 534, 52, 63, 576, 53, 63, 535, 54, 63, 529, 55, 63, 529, 56, 63, 529, 57, 63, 530, 51, 64, 534, 52, 64, 273, 53, 64, 570, 54, 64, 535, 55, 64, 535, 56, 64, 273, 57, 64, 536, 71, 64, 528, 72, 64, 529, 73, 64, 530, 52, 65, 534, 53, 65, 535, 54, 65, 535, 55, 65, 535, 56, 65, 570, 57, 65, 536, 70, 65, 528, 71, 65, 535, 72, 65, 570, 73, 65, 536, 52, 66, 540, 53, 66, 535, 54, 66, 541, 55, 66, 535, 56, 66, 576, 57, 66, 535, 58, 66, 530, 70, 66, 534, 71, 66, 570, 72, 66, 576, 73, 66, 536, 53, 67, 534, 54, 67, 530, 55, 67, 534, 56, 67, 570, 57, 67, 535, 58, 67, 535, 59, 67, 529, 60, 67, 529, 61, 67, 530, 70, 67, 534, 71, 67, 570, 72, 67, 570, 73, 67, 536, 53, 68, 534, 54, 68, 535, 55, 68, 535, 56, 68, 273, 57, 68, 535, 58, 68, 535, 59, 68, 273, 60, 68, 535, 61, 68, 535, 62, 68, 529, 63, 68, 529, 64, 68, 529, 65, 68, 530, 70, 68, 534, 71, 68, 576, 72, 68, 576, 73, 68, 535, 74, 68, 530, 53, 69, 540, 54, 69, 541, 55, 69, 535, 56, 69, 535, 57, 69, 535, 58, 69, 535, 59, 69, 576, 60, 69, 535, 61, 69, 535, 62, 69, 535, 63, 69, 535, 64, 69, 535, 65, 69, 535, 66, 69, 529, 67, 69, 529, 68, 69, 530, 70, 69, 534, 71, 69, 535, 72, 69, 576, 73, 69, 570, 74, 69, 536, 55, 70, 540, 56, 70, 541, 57, 70, 541, 58, 70, 535, 59, 70, 273, 60, 70, 535, 61, 70, 535, 62, 70, 570, 63, 70, 535, 64, 70, 273, 65, 70, 535, 66, 70, 535, 67, 70, 535, 68, 70, 535, 69, 70, 530, 70, 70, 534, 71, 70, 535, 72, 70, 570, 73, 70, 576, 74, 70, 536, 58, 71, 540, 59, 71, 535, 60, 71, 535, 61, 71, 535, 62, 71, 576, 63, 71, 535, 64, 71, 273, 65, 71, 535, 66, 71, 570, 67, 71, 535, 68, 71, 535, 69, 71, 536, 70, 71, 534, 71, 71, 535, 72, 71, 570, 73, 71, 576, 74, 71, 536, 59, 72, 534, 60, 72, 535, 61, 72, 535, 62, 72, 535, 63, 72, 535, 64, 72, 570, 65, 72, 535, 66, 72, 273, 67, 72, 535, 68, 72, 273, 69, 72, 536, 70, 72, 540, 71, 72, 535, 72, 72, 576, 73, 72, 535, 74, 72, 536, 59, 73, 534, 60, 73, 535, 61, 73, 535, 62, 73, 273, 63, 73, 535, 64, 73, 570, 65, 73, 535, 66, 73, 273, 67, 73, 535, 68, 73, 273, 69, 73, 536, 71, 73, 534, 72, 73, 570, 73, 73, 535, 74, 73, 542, 59, 74, 540, 60, 74, 535, 61, 74, 535, 62, 74, 273, 63, 74, 535, 64, 74, 273, 65, 74, 535, 66, 74, 576, 67, 74, 535, 68, 74, 570, 69, 74, 535, 70, 74, 530, 71, 74, 540, 72, 74, 576, 73, 74, 536, 60, 75, 534, 61, 75, 541, 62, 75, 535, 63, 75, 535, 64, 75, 535, 65, 75, 535, 66, 75, 535, 67, 75, 535, 68, 75, 576, 69, 75, 535, 70, 75, 536, 72, 75, 540, 73, 75, 542, 57, 76, 528, 58, 76, 529, 59, 76, 530, 60, 76, 534, 61, 76, 529, 62, 76, 535, 63, 76, 535, 64, 76, 535, 65, 76, 535, 66, 76, 273, 67, 76, 535, 68, 76, 570, 69, 76, 535, 70, 76, 536, 56, 77, 528, 57, 77, 535, 58, 77, 570, 59, 77, 536, 60, 77, 540, 61, 77, 535, 62, 77, 535, 63, 77, 535, 64, 77, 273, 65, 77, 535, 66, 77, 273, 67, 77, 535, 68, 77, 273, 69, 77, 535, 70, 77, 536, 56, 78, 534, 57, 78, 570, 58, 78, 576, 59, 78, 536, 61, 78, 534, 62, 78, 273, 63, 78, 535, 64, 78, 570, 65, 78, 535, 66, 78, 576, 67, 78, 535, 68, 78, 273, 69, 78, 535, 70, 78, 536, 56, 79, 534, 57, 79, 576, 58, 79, 570, 59, 79, 536, 61, 79, 534, 62, 79, 570, 63, 79, 535, 64, 79, 576, 65, 79, 535, 66, 79, 570, 67, 79, 535, 68, 79, 273, 69, 79, 535, 70, 79, 542, 56, 80, 534, 57, 80, 570, 58, 80, 576, 59, 80, 536, 60, 80, 528, 61, 80, 535, 62, 80, 570, 63, 80, 535, 64, 80, 535, 65, 80, 535, 66, 80, 570, 67, 80, 535, 68, 80, 535, 69, 80, 536, 56, 81, 534, 57, 81, 576, 58, 81, 576, 59, 81, 536, 60, 81, 534, 61, 81, 535, 62, 81, 273, 63, 81, 535, 64, 81, 535, 65, 81, 535, 66, 81, 273, 67, 81, 535, 68, 81, 535, 69, 81, 536, 56, 82, 540, 57, 82, 535, 58, 82, 570, 59, 82, 528, 60, 82, 535, 61, 82, 535, 62, 82, 535, 63, 82, 535, 64, 82, 535, 65, 82, 535, 66, 82, 535, 67, 82, 535, 68, 82, 535, 69, 82, 536, 57, 83, 534, 58, 83, 576, 59, 83, 534, 60, 83, 535, 61, 83, 535, 62, 83, 535, 63, 83, 535, 64, 83, 535, 65, 83, 535, 66, 83, 535, 67, 83, 535, 68, 83, 535, 69, 83, 536, 57, 84, 540, 58, 84, 528, 59, 84, 535, 60, 84, 273, 61, 84, 570, 62, 84, 570, 63, 84, 273, 64, 84, 576, 65, 84, 273, 66, 84, 273, 67, 84, 273, 68, 84, 273, 69, 84, 542, 58, 85, 534, 59, 85, 535, 60, 85, 576, 61, 85, 535, 62, 85, 535, 63, 85, 541, 64, 85, 541, 65, 85, 541, 66, 85, 535, 67, 85, 535, 68, 85, 542, 58, 86, 534, 59, 86, 535, 60, 86, 576, 61, 86, 535, 62, 86, 542, 66, 86, 540, 67, 86, 542, 58, 87, 534, 59, 87, 535, 60, 87, 279, 61, 87, 536, 43, 88, 475, 44, 88, 73, 45, 88, 474, 46, 88, 73, 47, 88, 352, 48, 88, 353, 49, 88, 73, 50, 88, 73, 51, 88, 376, 52, 88, 376, 53, 88, 364, 54, 88, 365, 55, 88, 73, 56, 88, 73, 57, 88, 73, 58, 88, 476, 59, 88, 477, 60, 88, 476, 61, 88, 536, 43, 89, 353, 44, 89, 475, 45, 89, 73, 46, 89, 73, 47, 89, 358, 48, 89, 359, 49, 89, 476, 50, 89, 376, 51, 89, 79, 52, 89, 79, 53, 89, 370, 54, 89, 371, 55, 89, 376, 56, 89, 376, 57, 89, 476, 58, 89, 79, 59, 89, 79, 60, 89, 79, 61, 89, 542, 43, 90, 450, 44, 90, 450, 45, 90, 450, 46, 90, 450, 47, 90, 450, 48, 90, 473, 49, 90, 450, 50, 90, 450, 51, 90, 450, 52, 90, 450, 53, 90, 450, 54, 90, 450, 55, 90, 450, 56, 90, 450, 57, 90, 450, 58, 90, 450, 59, 90, 450, 60, 90, 450, 43, 91, 342, 44, 91, 381, 45, 91, 382, 46, 91, 383, 47, 91, 342, 48, 91, 576, 49, 91, 381, 50, 91, 382, 51, 91, 383, 52, 91, 342, 53, 91, 381, 54, 91, 383, 55, 91, 342, 56, 91, 381, 57, 91, 382, 58, 91, 383, 59, 91, 271, 60, 91, 342, 43, 92, 348, 44, 92, 387, 45, 92, 388, 46, 92, 389, 47, 92, 348, 48, 92, 570, 49, 92, 387, 50, 92, 388, 51, 92, 389, 52, 92, 348, 53, 92, 387, 54, 92, 389, 55, 92, 348, 56, 92, 387, 57, 92, 388, 58, 92, 389, 59, 92, 271, 60, 92, 348, 43, 93, 354, 44, 93, 393, 45, 93, 394, 46, 93, 395, 47, 93, 354, 48, 93, 273, 49, 93, 393, 50, 93, 394, 51, 93, 395, 52, 93, 354, 53, 93, 393, 54, 93, 395, 55, 93, 354, 56, 93, 393, 57, 93, 394, 58, 93, 395, 59, 93, 271, 60, 93, 354, 43, 94, 360, 44, 94, 399, 45, 94, 400, 46, 94, 401, 47, 94, 360, 48, 94, 570, 49, 94, 399, 50, 94, 400, 51, 94, 401, 52, 94, 360, 53, 94, 399, 54, 94, 401, 55, 94, 360, 56, 94, 399, 57, 94, 400, 58, 94, 401, 59, 94, 271, 60, 94, 360, 43, 95, 360, 44, 95, 405, 45, 95, 406, 46, 95, 407, 47, 95, 360, 48, 95, 273, 49, 95, 405, 50, 95, 406, 51, 95, 407, 52, 95, 360, 53, 95, 405, 54, 95, 407, 55, 95, 360, 56, 95, 405, 57, 95, 406, 58, 95, 407, 59, 95, 271, 60, 95, 360]
    }, {
      n: "Tiles_new_offset",
      t: "T",
      d: 1000130,
      v: true,
      xo: 20,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_church_tileset_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 24,
      items: 1,
      fl: 66666,
      cells: [35, 20, 342, 36, 20, 381, 37, 20, 382, 38, 20, 383, 39, 20, 342, 35, 21, 348, 36, 21, 387, 37, 21, 388, 38, 21, 389, 39, 21, 348, 35, 22, 372, 36, 22, 393, 37, 22, 394, 38, 22, 395, 39, 22, 372, 35, 23, 360, 36, 23, 399, 37, 23, 400, 38, 23, 401, 39, 23, 360, 35, 24, 360, 36, 24, 405, 37, 24, 406, 38, 24, 407, 39, 24, 360, 35, 25, 360, 36, 25, 411, 37, 25, 412, 38, 25, 413, 39, 25, 360, 35, 26, 342, 36, 26, 381, 37, 26, 382, 38, 26, 383, 39, 26, 342, 35, 27, 348, 36, 27, 387, 37, 27, 388, 38, 27, 389, 39, 27, 348, 35, 28, 372, 36, 28, 393, 37, 28, 394, 38, 28, 395, 39, 28, 372, 35, 29, 360, 36, 29, 399, 37, 29, 400, 38, 29, 401, 39, 29, 360, 35, 30, 360, 36, 30, 405, 37, 30, 406, 38, 30, 407, 39, 30, 360, 35, 31, 366, 36, 31, 575, 37, 31, 575, 38, 31, 575, 39, 31, 366]
    }, {
      n: "Tiles_new_background",
      t: "T",
      d: 1000230,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_church_tileset_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 24,
      items: 1,
      fl: 66666,
      cells: [35, 20, 414, 40, 20, 414, 35, 21, 420, 40, 21, 420, 35, 22, 426, 40, 22, 426, 35, 23, 432, 40, 23, 432, 35, 24, 438, 40, 24, 438, 35, 25, 438, 40, 25, 438, 35, 26, 414, 40, 26, 414, 35, 27, 420, 40, 27, 420, 35, 28, 426, 40, 28, 426, 35, 29, 432, 40, 29, 432, 35, 30, 438, 40, 30, 438, 53, 30, 409, 54, 30, 409, 55, 30, 409, 56, 30, 409, 57, 30, 409, 58, 30, 409, 59, 30, 409, 60, 30, 409, 61, 30, 409, 62, 30, 409, 63, 30, 409, 64, 30, 409, 65, 30, 409, 66, 30, 409, 67, 30, 409, 68, 30, 409, 69, 30, 409, 35, 31, 444, 40, 31, 444, 43, 31, 538, 44, 31, 538, 45, 31, 538, 53, 31, 414, 54, 31, 418, 55, 31, 418, 56, 31, 418, 57, 31, 414, 58, 31, 418, 59, 31, 418, 60, 31, 418, 61, 31, 414, 62, 31, 418, 63, 31, 418, 64, 31, 418, 65, 31, 414, 66, 31, 418, 67, 31, 418, 68, 31, 418, 69, 31, 418, 43, 32, 538, 44, 32, 544, 45, 32, 538, 53, 32, 414, 54, 32, 378, 55, 32, 379, 56, 32, 380, 57, 32, 414, 58, 32, 378, 59, 32, 379, 60, 32, 380, 61, 32, 414, 62, 32, 378, 63, 32, 379, 64, 32, 380, 65, 32, 414, 66, 32, 378, 67, 32, 379, 68, 32, 380, 69, 32, 414, 43, 33, 545, 45, 33, 537, 53, 33, 420, 54, 33, 384, 55, 33, 385, 56, 33, 386, 57, 33, 420, 58, 33, 384, 59, 33, 385, 60, 33, 386, 61, 33, 420, 62, 33, 384, 63, 33, 385, 64, 33, 386, 65, 33, 420, 66, 33, 384, 67, 33, 385, 68, 33, 386, 69, 33, 420, 45, 34, 543, 46, 34, 535, 47, 34, 535, 48, 34, 536, 53, 34, 426, 54, 34, 390, 55, 34, 391, 56, 34, 392, 57, 34, 426, 58, 34, 390, 59, 34, 391, 60, 34, 392, 61, 34, 426, 62, 34, 390, 63, 34, 391, 64, 34, 392, 65, 34, 426, 66, 34, 390, 67, 34, 391, 68, 34, 392, 69, 34, 426, 53, 35, 420, 54, 35, 396, 55, 35, 397, 56, 35, 398, 57, 35, 420, 58, 35, 396, 59, 35, 397, 60, 35, 398, 61, 35, 420, 62, 35, 396, 63, 35, 397, 64, 35, 398, 65, 35, 420, 66, 35, 396, 67, 35, 397, 68, 35, 398, 69, 35, 420, 48, 36, 538, 53, 36, 432, 54, 36, 396, 55, 36, 397, 56, 36, 398, 57, 36, 432, 58, 36, 396, 59, 36, 397, 60, 36, 398, 61, 36, 432, 62, 36, 396, 63, 36, 397, 64, 36, 398, 65, 36, 432, 66, 36, 396, 67, 36, 397, 68, 36, 398, 69, 36, 432, 53, 37, 438, 54, 37, 402, 55, 37, 403, 56, 37, 404, 57, 37, 438, 58, 37, 402, 59, 37, 403, 60, 37, 404, 61, 37, 438, 62, 37, 402, 63, 37, 403, 64, 37, 404, 65, 37, 438, 66, 37, 402, 67, 37, 403, 68, 37, 404, 69, 37, 438, 60, 38, 398, 61, 38, 438, 62, 38, 396, 63, 38, 397, 64, 38, 398, 65, 38, 438, 66, 38, 396, 67, 38, 397, 68, 38, 398, 69, 38, 438, 60, 39, 398, 61, 39, 438, 62, 39, 396, 63, 39, 397, 64, 39, 398, 65, 39, 438, 66, 39, 396, 67, 39, 397, 68, 39, 398, 69, 39, 438, 64, 40, 398, 65, 40, 438, 66, 40, 396, 67, 40, 397, 68, 40, 398, 69, 40, 438, 64, 41, 398, 65, 41, 438, 66, 41, 396, 67, 41, 397, 68, 41, 398, 69, 41, 438, 64, 42, 398, 65, 42, 438, 66, 42, 396, 67, 42, 397, 68, 42, 398, 69, 42, 438, 64, 43, 398, 65, 43, 438, 66, 43, 396, 67, 43, 397, 68, 43, 398, 69, 43, 438, 60, 44, 538, 61, 44, 538, 65, 44, 438, 66, 44, 396, 67, 44, 397, 68, 44, 398, 69, 44, 438, 56, 45, 537, 60, 45, 538, 61, 45, 538, 65, 45, 438, 66, 45, 396, 67, 45, 397, 68, 45, 398, 69, 45, 438, 56, 46, 543, 57, 46, 538, 58, 46, 538, 68, 46, 398, 69, 46, 438, 57, 47, 537, 58, 47, 538, 59, 47, 538, 60, 47, 538, 68, 47, 398, 69, 47, 438, 57, 48, 537, 58, 48, 538, 59, 48, 538, 60, 48, 538, 61, 48, 538, 69, 48, 438, 57, 49, 537, 58, 49, 538, 59, 49, 538, 60, 49, 538, 61, 49, 538, 55, 50, 531, 56, 50, 532, 57, 50, 538, 58, 50, 538, 59, 50, 538, 60, 50, 538, 61, 50, 538, 55, 51, 538, 56, 51, 538, 57, 51, 538, 58, 51, 538, 59, 51, 538, 60, 51, 538, 55, 52, 538, 56, 52, 538, 57, 52, 538, 58, 52, 537, 63, 52, 538, 64, 52, 538, 63, 53, 538, 64, 53, 538, 53, 55, 537, 54, 55, 538, 63, 55, 538, 64, 55, 538, 52, 56, 531, 53, 56, 538, 54, 56, 538, 63, 56, 538, 64, 56, 538, 65, 56, 538, 66, 56, 538, 67, 56, 539, 51, 57, 531, 52, 57, 538, 53, 57, 538, 54, 57, 538, 55, 57, 538, 58, 57, 538, 59, 57, 538, 60, 57, 538, 61, 57, 538, 62, 57, 538, 63, 57, 538, 64, 57, 538, 65, 57, 538, 66, 57, 538, 67, 57, 539, 51, 58, 537, 52, 58, 538, 53, 58, 538, 54, 58, 538, 55, 58, 538, 57, 58, 538, 58, 58, 538, 59, 58, 538, 60, 58, 538, 61, 58, 538, 62, 58, 538, 63, 58, 538, 64, 58, 538, 65, 58, 538, 66, 58, 538, 67, 58, 539, 54, 59, 538, 55, 59, 538, 65, 59, 538, 52, 61, 535, 53, 61, 538, 54, 61, 538, 55, 61, 538, 56, 61, 539, 59, 61, 450, 60, 61, 450, 61, 61, 450, 62, 61, 450, 63, 61, 453, 64, 61, 454, 65, 61, 450, 66, 61, 450, 67, 61, 450, 68, 61, 450, 53, 62, 538, 54, 62, 538, 55, 62, 538, 56, 62, 539, 53, 63, 538, 54, 63, 538, 55, 63, 538, 56, 63, 539, 63, 63, 531, 64, 63, 532, 65, 63, 532, 66, 63, 533, 61, 64, 531, 62, 64, 532, 63, 64, 538, 64, 64, 538, 65, 64, 538, 66, 64, 538, 67, 64, 532, 68, 64, 532, 69, 64, 533, 61, 65, 537, 62, 65, 538, 63, 65, 538, 64, 65, 538, 65, 65, 538, 66, 65, 538, 67, 65, 538, 68, 65, 538, 69, 65, 539, 54, 66, 538, 61, 66, 537, 62, 66, 538, 63, 66, 538, 64, 66, 538, 65, 66, 538, 66, 66, 538, 67, 66, 538, 68, 66, 538, 69, 66, 539, 54, 67, 538, 55, 67, 538, 61, 67, 537, 62, 67, 538, 63, 67, 538, 64, 67, 538, 65, 67, 538, 66, 67, 538, 67, 67, 538, 68, 67, 538, 69, 67, 545, 54, 68, 538, 61, 68, 537, 62, 68, 538, 63, 68, 538, 64, 68, 538, 65, 68, 538, 66, 68, 538, 67, 68, 538, 68, 68, 539, 65, 69, 538, 66, 69, 538, 67, 69, 538, 68, 69, 539, 56, 70, 537, 57, 70, 538, 58, 70, 538, 67, 70, 538, 69, 70, 532, 70, 70, 532, 56, 71, 537, 57, 71, 538, 58, 71, 538, 59, 71, 538, 67, 71, 538, 69, 71, 538, 70, 71, 538, 56, 72, 543, 57, 72, 538, 58, 72, 538, 59, 72, 538, 67, 72, 538, 69, 72, 538, 70, 72, 538, 71, 72, 538, 57, 73, 537, 58, 73, 538, 59, 73, 538, 69, 73, 538, 70, 73, 538, 71, 73, 538, 57, 74, 537, 58, 74, 538, 59, 74, 538, 69, 74, 538, 70, 74, 538, 71, 74, 538, 57, 75, 537, 58, 75, 538, 59, 75, 538, 60, 75, 538, 61, 75, 538, 69, 75, 538, 70, 75, 538, 71, 75, 538, 72, 75, 539, 57, 76, 543, 58, 76, 544, 59, 76, 538, 60, 76, 538, 61, 76, 538, 70, 76, 544, 71, 76, 544, 72, 76, 545, 59, 77, 543, 60, 77, 538, 61, 77, 538, 60, 78, 543, 61, 78, 538, 61, 79, 543, 62, 85, 538, 63, 85, 538, 64, 85, 538, 65, 85, 538, 66, 85, 539, 62, 86, 538, 63, 86, 538, 64, 86, 538, 65, 86, 538, 66, 86, 539, 60, 87, 538, 61, 87, 538, 62, 87, 538, 63, 87, 544, 64, 87, 544, 65, 87, 544, 66, 87, 545, 61, 88, 538, 62, 88, 545]
    }, {
      n: "PARALLAX_1",
      t: "A",
      d: 1000330,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_parallax_church_spire", 900, 2260, 2, 2, "FFA3614B", 0, 1, 0], ["spr_dw_parallax_church_spire", 320, 740, 2, 2, "FFA3614B", 0, 1, 0], ["spr_dw_parallax_church_arches", 60, 3140, 2, 2, "FFA3614B", 0, 1, 0], ["spr_dw_parallax_church_arches", 460, 3140, 2, 2, "FFA3614B", 0, 1, 0], ["spr_dw_parallax_church_arches", 1280, 3140, 2, 2, "FFA3614B", 0, 1, 0], ["spr_dw_parallax_church_arches", 1680, 3140, 2, 2, "FFA3614B", 0, 1, 0], ["spr_dw_parallax_church_arches", 2080, 3140, 2, 2, "FFA3614B", 0, 1, 0], ["spr_dw_parallax_church_buttress_repeatable", 1060, 2640, -2, 2, "FFA3614B", 0, 1, 0], ["spr_dw_parallax_church_arches", 2480, 3140, 2, 2, "FFA3614B", 0, 1, 0], ["spr_dw_parallax_church_buttress_tileable", 680, 1160, 1.5, 1.5, "FFA3614B", 0, 1, 0], ["spr_dw_castle_gradient", 480, 2300, 0.6666667, 35, "FFFFFFFF", 0, 1, 90], ["spr_dw_castle_gradient", 40, 3900, 0.5555556, 146, "FFFFFFFF", 0, 1, 90]]
    }, {
      n: "PARALLAX_2",
      t: "A",
      d: 1000430,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_parallax_church_arches", 1240, 2980, 1.5, 1.5, "FF6B1C0C", 0, 1, 0], ["spr_dw_parallax_church_arches", 1540, 2980, 1.5, 1.5, "FF6B1C0C", 0, 1, 0], ["spr_dw_parallax_church_arches", 940, 2980, 1.5, 1.5, "FF6B1C0C", 0, 1, 0], ["spr_dw_parallax_church_arches", 640, 2980, 1.5, 1.5, "FF6B1C0C", 0, 1, 0], ["spr_dw_parallax_church_arches", 340, 2980, 1.5, 1.5, "FF6B1C0C", 0, 1, 0], ["spr_dw_parallax_church_arches", 40, 2980, 1.5, 1.5, "FF6B1C0C", 0, 1, 0], ["spr_dw_parallax_church_arches", 1840, 2980, 1.5, 1.5, "FF6B1C0C", 0, 1, 0], ["spr_dw_parallax_church_arches", 2140, 2980, 1.5, 1.5, "FF6B1C0C", 0, 1, 0], ["spr_dw_parallax_church_spire", 640, 860, 1.5, 1.5, "FF6B1C0C", 0, 1, 0]]
    }, {
      n: "TILES",
      t: "T",
      d: 2000010,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_church_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 24,
      items: 1,
      fl: 66666,
      cells: [41, 23, 67, 42, 23, 67, 43, 23, 67, 44, 23, 67, 45, 23, 67, 46, 23, 67, 47, 23, 67, 48, 23, 67, 41, 24, 272, 42, 24, 272, 43, 24, 272, 44, 24, 272, 45, 24, 272, 46, 24, 272, 47, 24, 272, 48, 24, 272, 41, 25, 272, 42, 25, 272, 43, 25, 272, 44, 25, 272, 45, 25, 272, 46, 25, 272, 47, 25, 272, 48, 25, 272, 35, 26, 67, 36, 26, 67, 37, 26, 67, 38, 26, 67, 39, 26, 67, 40, 26, 67, 41, 26, 272, 42, 26, 272, 43, 26, 272, 44, 26, 272, 45, 26, 272, 46, 26, 272, 47, 26, 272, 48, 26, 272, 35, 27, 271, 36, 27, 271, 37, 27, 271, 38, 27, 271, 39, 27, 271, 40, 27, 271, 41, 27, 272, 42, 27, 272, 43, 27, 272, 44, 27, 272, 45, 27, 272, 46, 27, 272, 47, 27, 272, 48, 27, 272, 35, 28, 271, 36, 28, 271, 37, 28, 271, 38, 28, 271, 39, 28, 271, 40, 28, 271, 41, 28, 278, 42, 28, 278, 43, 28, 278, 44, 28, 278, 45, 28, 278, 46, 28, 278, 47, 28, 278, 48, 28, 278, 35, 29, 271, 36, 29, 271, 37, 29, 271, 38, 29, 271, 39, 29, 271, 40, 29, 271, 41, 29, 97, 42, 29, 97, 43, 29, 97, 44, 29, 97, 45, 29, 97, 46, 29, 97, 47, 29, 97, 48, 29, 97, 35, 30, 271, 36, 30, 271, 37, 30, 271, 38, 30, 271, 39, 30, 271, 40, 30, 271, 41, 30, 97, 42, 30, 97, 43, 30, 97, 44, 30, 97, 45, 30, 97, 46, 30, 97, 47, 30, 97, 48, 30, 97, 35, 31, 277, 36, 31, 277, 37, 31, 277, 38, 31, 277, 39, 31, 277, 40, 31, 277, 41, 31, 97, 42, 31, 97, 46, 31, 97, 47, 31, 97, 48, 31, 97, 35, 32, 97, 36, 32, 97, 37, 32, 97, 38, 32, 97, 39, 32, 97, 40, 32, 97, 41, 32, 97, 42, 32, 97, 46, 32, 97, 47, 32, 97, 48, 32, 97, 35, 33, 97, 36, 33, 97, 37, 33, 97, 38, 33, 97, 39, 33, 97, 40, 33, 97, 41, 33, 97, 42, 33, 97, 46, 33, 97, 47, 33, 97, 48, 33, 97, 50, 59, 73, 51, 59, 73, 52, 59, 73, 53, 59, 73, 54, 59, 73, 55, 59, 73, 56, 59, 73, 57, 59, 73, 58, 59, 73, 59, 59, 73, 60, 59, 73, 61, 59, 73, 62, 59, 73, 63, 59, 73, 64, 59, 73, 65, 59, 73, 66, 59, 73, 67, 59, 73, 68, 59, 73, 50, 60, 73, 51, 60, 73, 52, 60, 73, 53, 60, 73, 54, 60, 73, 55, 60, 73, 56, 60, 73, 57, 60, 73, 58, 60, 73, 59, 60, 73, 60, 60, 73, 61, 60, 73, 62, 60, 73, 63, 60, 73, 64, 60, 73, 65, 60, 73, 66, 60, 73, 67, 60, 73, 68, 60, 73, 51, 61, 85, 53, 61, 85, 54, 61, 85, 55, 61, 85, 56, 61, 85, 57, 61, 85, 58, 61, 85, 59, 61, 85, 60, 61, 85, 61, 61, 85, 62, 61, 85, 63, 61, 85, 64, 61, 85, 65, 61, 85, 66, 61, 85, 67, 61, 85, 68, 61, 85, 52, 62, 51, 52, 63, 51, 52, 64, 51, 53, 64, 51, 56, 64, 51, 56, 65, 51, 72, 65, 51, 56, 66, 51, 72, 66, 51, 56, 67, 51, 72, 67, 51, 56, 68, 51, 59, 68, 51, 72, 68, 51, 59, 69, 51, 72, 69, 51, 59, 70, 51, 62, 70, 51, 64, 70, 51, 72, 70, 51, 62, 71, 51, 64, 71, 51, 66, 71, 51, 72, 71, 51, 64, 72, 51, 66, 72, 51, 68, 72, 51, 72, 72, 51, 62, 73, 51, 64, 73, 51, 66, 73, 51, 68, 73, 51, 72, 73, 51, 62, 74, 51, 64, 74, 51, 66, 74, 51, 68, 74, 51, 72, 74, 51, 68, 75, 51, 58, 76, 51, 66, 76, 51, 68, 76, 51, 58, 77, 51, 64, 77, 51, 66, 77, 51, 68, 77, 51, 58, 78, 51, 62, 78, 51, 64, 78, 51, 66, 78, 51, 68, 78, 51, 58, 79, 51, 62, 79, 51, 64, 79, 51, 66, 79, 51, 68, 79, 51, 58, 80, 51, 62, 80, 51, 66, 80, 51, 58, 81, 51, 62, 81, 51, 66, 81, 51, 58, 82, 51, 58, 83, 51, 47, 88, 73, 48, 88, 73, 49, 88, 73, 50, 88, 73, 51, 88, 73, 52, 88, 73, 53, 88, 73, 54, 88, 73, 55, 88, 73, 56, 88, 73, 57, 88, 73, 58, 88, 73, 59, 88, 73, 60, 88, 73, 47, 89, 73, 48, 89, 73, 49, 89, 73, 50, 89, 73, 51, 89, 73, 52, 89, 73, 53, 89, 73, 54, 89, 73, 55, 89, 73, 56, 89, 73, 57, 89, 73, 58, 89, 73, 59, 89, 73, 60, 89, 73, 47, 90, 271, 48, 90, 273, 49, 90, 271, 50, 90, 271, 51, 90, 271, 52, 90, 271, 53, 90, 271, 54, 90, 271, 55, 90, 271, 56, 90, 271, 57, 90, 271, 58, 90, 271, 59, 90, 271, 60, 90, 271, 47, 91, 271, 48, 91, 273, 49, 91, 271, 50, 91, 271, 51, 91, 271, 52, 91, 271, 53, 91, 271, 54, 91, 271, 55, 91, 271, 56, 91, 271, 57, 91, 271, 58, 91, 271, 59, 91, 271, 60, 91, 271, 47, 92, 271, 48, 92, 273, 49, 92, 271, 50, 92, 271, 51, 92, 271, 52, 92, 271, 53, 92, 271, 54, 92, 271, 55, 92, 271, 56, 92, 271, 57, 92, 271, 58, 92, 271, 59, 92, 271, 60, 92, 271, 47, 93, 271, 48, 93, 273, 49, 93, 271, 50, 93, 271, 51, 93, 271, 52, 93, 271, 53, 93, 271, 54, 93, 271, 55, 93, 271, 56, 93, 271, 57, 93, 271, 58, 93, 271, 59, 93, 271, 60, 93, 271, 47, 94, 271, 48, 94, 273, 49, 94, 271, 50, 94, 271, 51, 94, 271, 52, 94, 271, 53, 94, 271, 54, 94, 271, 55, 94, 271, 56, 94, 271, 57, 94, 271, 58, 94, 271, 59, 94, 271, 60, 94, 271, 47, 95, 271, 48, 95, 273, 49, 95, 271, 50, 95, 271, 51, 95, 271, 52, 95, 271, 53, 95, 271, 54, 95, 271, 55, 95, 271, 56, 95, 271, 57, 95, 271, 58, 95, 271, 59, 95, 271, 60, 95, 271]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }, {
      n: "Tiles_1",
      t: "T",
      d: 2147483647,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_library_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 1,
      items: 1,
      fl: 66666,
      cells: []
    }],
    rtiles: []
  },
  "ch4/room_dw_churchb_nongerson": {
    w: 640,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_dw_churchb_nongerson"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 40, 0, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "TILES",
      t: "T",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch4/room_dw_churchc_titanclimb2_post": {
    w: 4400,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_dw_churchc_titanclimb2_post"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "DEBUG_ASSETS",
      t: "A",
      d: -200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_npc_cup_hurt", 3406, 168, -2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "MARKERS",
      t: "I",
      d: -100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 320, 200, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_dw_churchc_titanclimb2_post", -40, 0, 1, 1, 0, "spr_eventsmall", true, 0, 0, "FFFFFFFF"], ["obj_titan_layer_floater", 0, 40, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_parallaxer", 1680, 40, 1, 1, 0, "spr_ui_parallaxer", true, 0, 0, "FFFFFFFF"], ["obj_cloud_controller_new", 350, 340, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "LEGEND_TRIGGERVOLUME",
      t: "I",
      d: 200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "gradient",
      t: "A",
      d: 300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_castle_gradient", 4416, 480, 0.18222222, -223, "FFFFFFFF", 0, 1, 90]]
    }, {
      n: "SWAYING_FORE",
      t: "A",
      d: 400,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_titan_swayer_bell_1", 64, 64, 1, 1, "FFFFFFFF", 0, 1, 45], ["spr_titan_swayer_shard_6", 32, 128, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 96, 128, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_6", 128, 160, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_book_1", 160, 96, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_6", 256, 128, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_sheet_1", 256, 32, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 320, 128, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 352, 96, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_6", 352, 32, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_sheet_2", 416, 160, 1, 1, "FFFFFFFF", 0, 1, 90], ["spr_titan_swayer_shard_1", 480, 128, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 80, 320, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 200, 360, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_5", 280, 320, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 440, 280, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_1", 320, 320, -1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_book_2", 120, 400, -1, -1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_bell_1", 920, 320, 1, -1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_sheet_1", 840, 320, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_sheet_2", 760, 360, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 1000, 280, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 680, 360, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_1", 1200, 360, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_book_1", 1280, 320, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 1440, 360, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 1520, 320, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 1520, 320, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 1360, 280, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 1240, 240, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 720, 240, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 698, 233, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_sheet_1", 1600, 360, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 1760, 360, -1, -1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 2040, 280, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_1", 2080, 256, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_6", 2112, 256, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_book_1", 2048, 384, -1, -1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_5", 2016, 320, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 1280, 120, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 1320, 80, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 1400, 200, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 1280, 120, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 1600, 120, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_5", 1600, 120, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_5", 1400, 40, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_sheet_1", 1560, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_sheet_2", 1200, 80, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_1", 3951, 64, 1, -1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_5", 3879, 80, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 4015, 96, -1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 4032, 384, -1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_6", 4032, 320, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_book_2", 3799, 400, 1, -1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_sheet_2", 3719, 400, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 3799, 240, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_5", 3719, 200, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_1", 3679, 240, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_bell_1", 2588, 24, 1, 1, "FFFFFFFF", 0, 1, 45], ["spr_titan_swayer_book_1", 3080, 200, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 2620, 88, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_sheet_2", 2060, 160, 1, 1, "FFFFFFFF", 0, 1, 90], ["spr_titan_swayer_shard_3", 1964, 128, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_1", 2124, 128, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 2560, 200, -1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_book_1", 2480, 360, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_bell_1", 2720, 360, -1, -1, "FFFFFFFF", 0, 1, 90], ["spr_titan_swayer_shard_1", 2715, 128, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_1", 2600, 80, -1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 2600, 160, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_bell_1", 3320, 80, 1, -1, "FFFFFFFF", 0, 1, 45], ["spr_titan_swayer_chunk_1", 2114, 280, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_chunk_2", 1966, 262, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_chunk_1", 2680, 280, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 2560, 280, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_chunk_2", 2680, 160, 1, 1, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "TILES_FOREXPANSION",
      t: "T",
      d: 999990,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_church_library_2_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 19,
      items: 1,
      fl: 66666,
      cells: [79, 3, 200, 80, 3, 201, 81, 3, 202, 79, 4, 210, 80, 4, 211, 81, 4, 212, 79, 5, 210, 80, 5, 211, 81, 5, 181, 79, 6, 210, 80, 6, 211]
    }, {
      n: "TILES",
      t: "T",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_church_library_2_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 19,
      items: 1,
      fl: 66666,
      cells: [1, 4, 200, 2, 4, 201, 3, 4, 201, 4, 4, 201, 5, 4, 201, 6, 4, 201, 7, 4, 201, 8, 4, 201, 9, 4, 201, 10, 4, 202, 15, 4, 200, 16, 4, 201, 17, 4, 201, 18, 4, 201, 19, 4, 201, 20, 4, 201, 21, 4, 201, 22, 4, 201, 23, 4, 201, 24, 4, 201, 25, 4, 201, 26, 4, 201, 27, 4, 201, 28, 4, 201, 29, 4, 201, 30, 4, 201, 31, 4, 201, 32, 4, 201, 33, 4, 201, 34, 4, 201, 35, 4, 201, 36, 4, 202, 81, 4, 200, 82, 4, 201, 83, 4, 201, 84, 4, 202, 87, 4, 200, 88, 4, 201, 89, 4, 201, 90, 4, 201, 91, 4, 201, 92, 4, 201, 93, 4, 201, 94, 4, 201, 95, 4, 201, 96, 4, 201, 97, 4, 201, 98, 4, 202, 100, 4, 105, 101, 4, 105, 102, 4, 105, 103, 4, 105, 104, 4, 105, 1, 5, 180, 2, 5, 171, 3, 5, 172, 4, 5, 172, 5, 5, 182, 6, 5, 172, 7, 5, 172, 8, 5, 172, 9, 5, 172, 10, 5, 183, 11, 5, 200, 12, 5, 201, 13, 5, 201, 14, 5, 202, 15, 5, 180, 16, 5, 172, 17, 5, 172, 18, 5, 171, 19, 5, 172, 20, 5, 172, 21, 5, 172, 22, 5, 182, 23, 5, 172, 24, 5, 171, 25, 5, 172, 26, 5, 172, 27, 5, 172, 28, 5, 172, 29, 5, 172, 30, 5, 172, 31, 5, 172, 32, 5, 172, 33, 5, 171, 34, 5, 172, 35, 5, 172, 36, 5, 173, 37, 5, 200, 38, 5, 201, 39, 5, 202, 81, 5, 180, 82, 5, 172, 83, 5, 161, 84, 5, 173, 87, 5, 190, 88, 5, 181, 89, 5, 182, 91, 5, 161, 94, 5, 171, 95, 5, 90, 96, 5, 100, 97, 5, 192, 101, 5, 105, 102, 5, 105, 103, 5, 105, 105, 5, 105, 1, 6, 190, 2, 6, 172, 3, 6, 172, 4, 6, 172, 5, 6, 172, 6, 6, 171, 7, 6, 172, 8, 6, 172, 9, 6, 172, 10, 6, 172, 11, 6, 172, 12, 6, 172, 13, 6, 172, 14, 6, 172, 15, 6, 172, 16, 6, 192, 17, 6, 172, 18, 6, 172, 19, 6, 172, 20, 6, 172, 21, 6, 173, 22, 6, 233, 23, 6, 234, 24, 6, 233, 25, 6, 234, 26, 6, 170, 27, 6, 172, 28, 6, 172, 29, 6, 161, 30, 6, 172, 31, 6, 172, 32, 6, 172, 33, 6, 172, 34, 6, 171, 35, 6, 172, 36, 6, 172, 37, 6, 172, 38, 6, 172, 39, 6, 171, 40, 6, 200, 41, 6, 201, 42, 6, 201, 43, 6, 201, 44, 6, 201, 45, 6, 202, 46, 6, 200, 47, 6, 201, 48, 6, 201, 49, 6, 201, 50, 6, 201, 51, 6, 201, 52, 6, 201, 53, 6, 201, 54, 6, 201, 55, 6, 201, 56, 6, 201, 57, 6, 202, 58, 6, 200, 59, 6, 201, 60, 6, 201, 61, 6, 201, 62, 6, 201, 63, 6, 201, 64, 6, 201, 65, 6, 201, 66, 6, 201, 67, 6, 201, 68, 6, 201, 69, 6, 202, 70, 6, 200, 71, 6, 201, 72, 6, 201, 73, 6, 201, 74, 6, 201, 75, 6, 201, 76, 6, 201, 77, 6, 201, 78, 6, 201, 79, 6, 202, 80, 6, 170, 81, 6, 171, 82, 6, 181, 83, 6, 172, 84, 6, 172, 85, 6, 162, 86, 6, 192, 87, 6, 172, 88, 6, 172, 89, 6, 172, 93, 6, 91, 94, 6, 81, 96, 6, 182, 98, 6, 105, 103, 6, 105, 105, 6, 105, 1, 7, 170, 2, 7, 172, 3, 7, 173, 4, 7, 233, 5, 7, 234, 6, 7, 233, 7, 7, 234, 8, 7, 234, 9, 7, 170, 10, 7, 172, 11, 7, 171, 12, 7, 172, 13, 7, 172, 14, 7, 172, 15, 7, 172, 16, 7, 172, 17, 7, 172, 18, 7, 172, 19, 7, 171, 20, 7, 172, 21, 7, 183, 22, 7, 243, 23, 7, 244, 24, 7, 243, 25, 7, 244, 26, 7, 190, 27, 7, 171, 28, 7, 191, 29, 7, 172, 30, 7, 172, 31, 7, 172, 32, 7, 172, 33, 7, 172, 34, 7, 172, 35, 7, 192, 36, 7, 172, 37, 7, 171, 38, 7, 172, 39, 7, 181, 40, 7, 172, 41, 7, 182, 42, 7, 162, 43, 7, 172, 44, 7, 171, 45, 7, 172, 46, 7, 172, 47, 7, 181, 48, 7, 172, 49, 7, 182, 50, 7, 172, 51, 7, 172, 52, 7, 181, 53, 7, 172, 54, 7, 171, 55, 7, 172, 56, 7, 172, 57, 7, 192, 58, 7, 172, 59, 7, 162, 60, 7, 182, 61, 7, 172, 62, 7, 172, 63, 7, 172, 64, 7, 161, 65, 7, 171, 66, 7, 172, 67, 7, 172, 68, 7, 182, 69, 7, 172, 70, 7, 172, 71, 7, 162, 72, 7, 172, 73, 7, 172, 74, 7, 192, 75, 7, 172, 76, 7, 171, 77, 7, 172, 78, 7, 181, 79, 7, 182, 80, 7, 172, 81, 7, 172, 82, 7, 171, 83, 7, 191, 84, 7, 191, 85, 7, 191, 86, 7, 181, 87, 7, 171, 88, 7, 191, 89, 7, 191, 90, 7, 181, 91, 7, 171, 92, 7, 192, 93, 7, 171, 100, 7, 105, 1, 8, 233, 2, 8, 233, 3, 8, 234, 4, 8, 243, 5, 8, 244, 6, 8, 243, 7, 8, 244, 8, 8, 244, 9, 8, 233, 10, 8, 234, 11, 8, 233, 12, 8, 234, 13, 8, 233, 14, 8, 234, 15, 8, 233, 16, 8, 234, 17, 8, 233, 18, 8, 234, 19, 8, 233, 20, 8, 234, 21, 8, 234, 22, 8, 243, 23, 8, 244, 24, 8, 243, 25, 8, 244, 26, 8, 233, 27, 8, 234, 28, 8, 233, 29, 8, 234, 30, 8, 233, 31, 8, 234, 32, 8, 233, 33, 8, 234, 34, 8, 233, 35, 8, 234, 36, 8, 233, 37, 8, 234, 38, 8, 233, 39, 8, 234, 40, 8, 233, 41, 8, 234, 42, 8, 233, 43, 8, 234, 44, 8, 233, 45, 8, 234, 46, 8, 233, 47, 8, 234, 48, 8, 233, 49, 8, 234, 50, 8, 233, 51, 8, 234, 52, 8, 233, 53, 8, 234, 54, 8, 233, 55, 8, 234, 56, 8, 233, 57, 8, 234, 58, 8, 233, 59, 8, 234, 60, 8, 233, 61, 8, 234, 62, 8, 233, 63, 8, 244, 64, 8, 243, 65, 8, 234, 66, 8, 233, 67, 8, 234, 68, 8, 233, 69, 8, 234, 70, 8, 233, 71, 8, 234, 72, 8, 233, 73, 8, 234, 74, 8, 233, 75, 8, 234, 76, 8, 233, 77, 8, 234, 78, 8, 233, 79, 8, 234, 80, 8, 233, 81, 8, 233, 82, 8, 234, 83, 8, 233, 84, 8, 234, 85, 8, 233, 86, 8, 234, 87, 8, 233, 88, 8, 234, 89, 8, 233, 94, 8, 105, 1, 9, 243, 2, 9, 243, 3, 9, 244, 4, 9, 243, 5, 9, 244, 6, 9, 243, 7, 9, 244, 8, 9, 244, 9, 9, 243, 10, 9, 244, 11, 9, 243, 12, 9, 244, 13, 9, 243, 14, 9, 244, 15, 9, 243, 16, 9, 244, 17, 9, 243, 18, 9, 244, 19, 9, 243, 20, 9, 244, 21, 9, 244, 22, 9, 243, 23, 9, 244, 24, 9, 243, 25, 9, 244, 26, 9, 243, 27, 9, 244, 28, 9, 243, 29, 9, 244, 30, 9, 243, 31, 9, 244, 32, 9, 243, 33, 9, 244, 34, 9, 243, 35, 9, 244, 36, 9, 243, 37, 9, 244, 38, 9, 243, 39, 9, 244, 40, 9, 243, 41, 9, 244, 42, 9, 243, 43, 9, 244, 44, 9, 243, 45, 9, 244, 46, 9, 243, 47, 9, 244, 48, 9, 243, 49, 9, 244, 50, 9, 243, 51, 9, 244, 52, 9, 243, 53, 9, 244, 54, 9, 243, 55, 9, 244, 56, 9, 243, 57, 9, 244, 58, 9, 243, 59, 9, 244, 60, 9, 243, 61, 9, 244, 62, 9, 243, 63, 9, 244, 64, 9, 243, 65, 9, 244, 66, 9, 243, 67, 9, 244, 68, 9, 243, 69, 9, 244, 70, 9, 243, 71, 9, 244, 72, 9, 243, 73, 9, 244, 74, 9, 243, 75, 9, 244, 76, 9, 243, 77, 9, 244, 78, 9, 243, 79, 9, 244, 80, 9, 243, 81, 9, 243, 82, 9, 244, 83, 9, 243, 84, 9, 244, 85, 9, 243, 86, 9, 244, 87, 9, 243, 88, 9, 244, 89, 9, 243, 100, 9, 105, 1, 10, 233, 2, 10, 243, 3, 10, 244, 4, 10, 243, 5, 10, 244, 6, 10, 243, 7, 10, 244, 8, 10, 244, 9, 10, 243, 10, 10, 244, 11, 10, 243, 12, 10, 244, 13, 10, 243, 14, 10, 244, 15, 10, 243, 16, 10, 244, 17, 10, 243, 18, 10, 244, 19, 10, 243, 20, 10, 244, 21, 10, 244, 22, 10, 243, 23, 10, 244, 24, 10, 243, 25, 10, 244, 26, 10, 243, 27, 10, 244, 28, 10, 243, 29, 10, 244, 30, 10, 243, 31, 10, 244, 32, 10, 243, 33, 10, 244, 34, 10, 243, 35, 10, 244, 36, 10, 243, 37, 10, 244, 38, 10, 243, 39, 10, 244, 40, 10, 243, 41, 10, 244, 42, 10, 243, 43, 10, 244, 44, 10, 243, 45, 10, 244, 46, 10, 243, 47, 10, 244, 48, 10, 243, 49, 10, 244, 50, 10, 243, 51, 10, 244, 52, 10, 243, 53, 10, 244, 54, 10, 243, 55, 10, 244, 56, 10, 243, 57, 10, 244, 58, 10, 243, 59, 10, 244, 60, 10, 243, 61, 10, 244, 62, 10, 243, 63, 10, 244, 64, 10, 243, 65, 10, 244, 66, 10, 243, 67, 10, 244, 68, 10, 243, 69, 10, 244, 70, 10, 243, 71, 10, 244, 72, 10, 243, 73, 10, 244, 74, 10, 243, 75, 10, 244, 76, 10, 243, 77, 10, 244, 78, 10, 243, 79, 10, 244, 80, 10, 243, 81, 10, 243, 82, 10, 244, 83, 10, 243, 84, 10, 244, 85, 10, 243, 86, 10, 244, 87, 10, 243, 88, 10, 244, 89, 10, 243, 93, 10, 105, 94, 10, 105, 97, 10, 105, 98, 10, 105, 99, 10, 105, 100, 10, 105, 1, 11, 243, 2, 11, 243, 3, 11, 244, 4, 11, 243, 5, 11, 244, 6, 11, 243, 7, 11, 244, 8, 11, 244, 9, 11, 243, 10, 11, 244, 11, 11, 243, 12, 11, 244, 13, 11, 243, 14, 11, 244, 15, 11, 243, 16, 11, 244, 17, 11, 243, 18, 11, 244, 19, 11, 243, 20, 11, 244, 21, 11, 244, 22, 11, 243, 23, 11, 244, 24, 11, 243, 25, 11, 244, 26, 11, 243, 27, 11, 244, 28, 11, 243, 29, 11, 244, 30, 11, 243, 31, 11, 244, 32, 11, 243, 33, 11, 244, 34, 11, 243, 35, 11, 244, 36, 11, 243, 37, 11, 244, 38, 11, 243, 39, 11, 244, 40, 11, 243, 41, 11, 244, 42, 11, 243, 43, 11, 244, 44, 11, 243, 45, 11, 244, 46, 11, 243, 47, 11, 244, 48, 11, 243, 49, 11, 244, 50, 11, 243, 51, 11, 244, 52, 11, 243, 53, 11, 244, 54, 11, 243, 55, 11, 244, 56, 11, 243, 57, 11, 244, 58, 11, 243, 59, 11, 244, 60, 11, 243, 61, 11, 244, 62, 11, 243, 63, 11, 244, 64, 11, 243, 65, 11, 244, 66, 11, 243, 67, 11, 244, 68, 11, 243, 69, 11, 244, 70, 11, 243, 71, 11, 244, 72, 11, 243, 73, 11, 244, 74, 11, 243, 75, 11, 244, 76, 11, 243, 77, 11, 244, 78, 11, 243, 79, 11, 244, 80, 11, 243, 81, 11, 243, 82, 11, 244, 83, 11, 243, 84, 11, 244, 85, 11, 243, 86, 11, 244, 87, 11, 243, 88, 11, 244, 89, 11, 243, 98, 11, 105, 99, 11, 105]
    }, {
      n: "SWAYING_MID",
      t: "A",
      d: 1000100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_titan_swayer_shard_4", 320, 80, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 120, 120, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_1", 80, 80, -1, -1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_5", 480, 200, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_6", 480, 160, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 960, 120, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_1", 880, 160, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 880, 120, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 840, 80, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 480, 160, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_sheet_1", 680, 80, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_sheet_2", 680, 120, -1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 2080, 280, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 2040, 360, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_sheet_2", 1960, 160, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_5", 1480, 200, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 1480, 200, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 1560, 240, 1, 1, "FFFFFFFF", 0, 1, 90], ["spr_titan_swayer_shard_4", 1480, 200, 1, -1, "FFFFFFFF", 0, 1, 90], ["spr_titan_swayer_shard_2", 1520, 160, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_1", 1440, 80, -1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_6", 1480, 160, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_6", 1560, 80, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_bell_1", 1480, 40, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_bell_1", 1320, 80, -1, -1, "FFFFFFFF", 0, 1, 90], ["spr_titan_swayer_book_2", 1520, 80, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_book_1", 1400, 160, -1, -1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_book_2", 992, 128, 1, -1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 960, 64, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_5", 960, 128, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 928, 96, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 864, 128, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_1", 928, 64, -1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_6", 800, 64, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_book_1", 800, 128, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_bell_1", 3959, 80, -1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 3879, 120, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_6", 3959, 120, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 3999, 40, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_book_2", 3999, 80, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_6", 4079, 80, -1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_1", 3979, 380, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 1964, 80, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 2124, 160, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_sheet_1", 2644, 160, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_book_2", 2560, 200, 1, -1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_book_1", 2080, 40, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_sheet_2", 3640, 40, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 2675, 200, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 3795, 80, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 2715, 160, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 3720, 120, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 3704, 128, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 3768, 96, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 3800, 64, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_1", 3768, 64, -1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_6", 3640, 64, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_4", 3419, 120, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 3360, 80, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_3", 3467, 96, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_2", 3499, 64, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_1", 3467, 64, -1, 1, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_6", 3339, 64, 1, 1, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "SWAYING_BACK",
      t: "A",
      d: 1000200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_titan_debris", 3040, 0, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_debris", 2240, 40, -2, 2, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_book_2", 4032, 288, 1, 1, "FF333333", 0, 1, 0], ["spr_dw_titan_debris", 3872, 96, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_titan_swayer_shard_1", 4056, 352, -1, 1, "FF4C4C4C", 0, 1, 0], ["spr_titan_swayer_shard_2", 3992, 416, 1, 1, "FF4C4C4C", 0, 1, 0], ["spr_titan_swayer_shard_3", 4056, 384, 1, 1, "FF4C4C4C", 0, 1, 0], ["spr_titan_swayer_shard_2", 4032, 288, 1, 1, "FF4C4C4C", 0, 1, 0], ["spr_titan_swayer_shard_3", 4000, 368, 1, 1, "FF4C4C4C", 0, 1, 0]]
    }, {
      n: "ARENA",
      t: "A",
      d: 1000300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_titan_ledge", 3540, 80, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "PARALLAX_1",
      t: "A",
      d: 1000400,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_titan_arches", 2320, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2400, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2480, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2560, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2640, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2720, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2800, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2880, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2960, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3040, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3120, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3200, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2240, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3280, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3360, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3440, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3520, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3600, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3680, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3760, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3840, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3920, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 4000, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 4080, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 4160, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 4240, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2240, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2400, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2320, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2480, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2560, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2640, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2720, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2800, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2880, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2960, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3040, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3120, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3200, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3280, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3360, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3440, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3520, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3600, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3760, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3680, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3840, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 3920, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 4000, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 4080, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 4160, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 4240, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2160, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2160, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2080, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2080, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2000, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 2000, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1920, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1920, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1840, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1840, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1760, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1760, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1280, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1280, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1360, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1360, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1440, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1440, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1520, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1520, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1600, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1600, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1680, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1680, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 800, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 800, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 880, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 880, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 960, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 960, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1040, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1040, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1120, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1120, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1200, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 1200, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 320, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 320, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 400, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 400, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 480, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 480, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 560, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 560, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 640, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 640, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 720, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 720, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -160, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -160, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -80, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -80, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 0, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 0, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 80, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 80, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 160, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 160, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 240, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", 240, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -640, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -640, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -560, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -560, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -480, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -480, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -400, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -400, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -320, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -320, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -240, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -240, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1120, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1120, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1040, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1040, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -960, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -960, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -880, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -880, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -800, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -800, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -720, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -720, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1600, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1600, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1520, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1520, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1440, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1440, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1360, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1360, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1280, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1280, -480, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1200, 0, 1, 1, "FFFFFFFF", 0, 1, 0], ["spr_dw_titan_arches", -1200, -480, 1, 1, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "TILES_LOWER",
      t: "T",
      d: 1000500,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_church_library_2_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 19,
      items: 1,
      fl: 66666,
      cells: [36, 5, 201, 37, 5, 202, 38, 5, 201, 39, 5, 201, 20, 6, 221, 21, 6, 221, 22, 6, 221, 23, 6, 221, 24, 6, 221, 25, 6, 221, 26, 6, 221, 3, 7, 221, 4, 7, 221, 5, 7, 221, 6, 7, 221, 7, 7, 221, 8, 7, 221, 9, 7, 221]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch5/room_dw_pink_encounter": {
    w: 640,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_dw_pink_encounter"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "CUT_ASSETS",
      t: "A",
      d: -300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_enemy_orange_walk_right", -80, 166, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_debug_krmarker", 126, 76, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_debug_sumarker", 96, 103, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_debug_ramarker", 120, 150, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_pink_walk_up", 480, 108, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_fcastle_pink_flowerpot", 80, 43, 2, 2, "FF00FF00", 0, 1, 0], ["spr_fcastle_pink_flowerpot", 503, 43, 2, 2, "FF0000FF", 0, 1, 0]]
    }, {
      n: "DEBUG_ASSETS",
      t: "A",
      d: -200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "REFLECT",
      t: "I",
      d: -100,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_castlereflect", 80, 80, 12, 5, 0, "spr_swordarea", true, 0, 0, "FFFFFFFF"], ["obj_castlereflect", 0, 120, 2, 3, 0, "spr_swordarea", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 12, 118, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_dw_pink_encounter", 40, 0, 1, 1, 0, "spr_eventsmall", true, 0, 0, "FFFFFFFF"], ["obj_depthsorter", 20, 340, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "DEPTHSORT",
      t: "A",
      d: 1000100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "TILES",
      t: "T",
      d: 1000200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_flowercastle_pinkroom",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 11,
      items: 1,
      fl: 66666,
      cells: [0, 0, 63, 1, 0, 22, 2, 0, 69, 3, 0, 70, 4, 0, 71, 5, 0, 69, 6, 0, 70, 7, 0, 47, 8, 0, 47, 9, 0, 69, 10, 0, 70, 11, 0, 69, 12, 0, 70, 13, 0, 71, 14, 0, 17, 15, 0, 17, 0, 1, 71, 1, 1, 22, 2, 1, 77, 3, 1, 78, 4, 1, 79, 5, 1, 77, 6, 1, 78, 7, 1, 55, 8, 1, 55, 9, 1, 77, 10, 1, 78, 11, 1, 77, 12, 1, 78, 13, 1, 79, 14, 1, 805306379, 15, 1, 17, 0, 2, 79, 1, 2, 30, 14, 2, 16, 15, 2, 1073741874, 14, 3, 16, 15, 3, 1073741875, 14, 4, 16, 15, 4, 1073741876, 14, 5, 16, 15, 5, 1073741877, 0, 6, 2, 1, 6, 3, 14, 6, 16, 15, 6, 1073741878, 0, 7, 17, 1, 7, 11, 2, 7, 2, 3, 7, 2, 4, 7, 2, 5, 7, 2, 6, 7, 2, 7, 7, 2, 8, 7, 2, 9, 7, 2, 10, 7, 2, 11, 7, 2, 12, 7, 2, 13, 7, 2, 14, 7, 1879048203, 15, 7, 17, 0, 8, 32, 1, 8, 33, 2, 8, 34, 3, 8, 35, 4, 8, 36, 5, 8, 37, 6, 8, 38, 7, 8, 17, 8, 8, 17, 9, 8, 17, 10, 8, 17, 11, 8, 17, 12, 8, 536870960, 13, 8, 536870961, 14, 8, 536870962, 15, 8, 536870963, 0, 9, 40, 1, 9, 41, 2, 9, 42, 3, 9, 43, 4, 9, 44, 5, 9, 45, 6, 9, 46, 7, 9, 56, 8, 9, 57, 9, 9, 58, 10, 9, 59, 11, 9, 60, 12, 9, 536870952, 13, 9, 536870953, 14, 9, 536870954, 15, 9, 536870955, 0, 10, 48, 1, 10, 49, 2, 10, 50, 3, 10, 51, 4, 10, 52, 5, 10, 53, 6, 10, 54, 7, 10, 64, 8, 10, 65, 9, 10, 66, 10, 10, 67, 11, 10, 68, 12, 10, 536870944, 13, 10, 536870945, 14, 10, 536870946, 15, 10, 536870947, 0, 11, 17, 1, 11, 17, 2, 11, 17, 3, 11, 17, 4, 11, 17, 5, 11, 17, 6, 11, 17, 7, 11, 72, 8, 11, 73, 9, 11, 74, 10, 11, 75, 11, 11, 76, 12, 11, 17, 13, 11, 17, 14, 11, 17, 15, 11, 17]
    }, {
      n: "FLORAL_PRINT",
      t: "A",
      d: 1000300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_cafe_flowers", 0, 80, 2, 2, "FFFFFFFF", 1, 1, 0], ["spr_gradient20", 111, 80, 1, 11.35, "40C7A6FF", 0, 1, -180], ["spr_gradient20", 151, 80, 1, 11.35, "40C7A6FF", 0, 1, -180], ["spr_gradient20", 231, 80, 1, 11.35, "40C7A6FF", 0, 1, -180], ["spr_gradient20", 271, 80, 1, 11.35, "40C7A6FF", 0, 1, -180], ["spr_gradient20", 311, 80, 1, 11.35, "40C7A6FF", 0, 1, -180], ["spr_gradient20", 351, 80, 1, 11.35, "40C7A6FF", 0, 1, -180], ["spr_gradient20", 390, 80, 1, 11.35, "40C7A6FF", 0, 1, -180], ["spr_gradient20", 431, 80, 1, 11.35, "40C7A6FF", 0, 1, -180], ["spr_gradient20", 471, 80, 1, 11.35, "40C7A6FF", 0, 1, -180], ["spr_gradient20", 511, 80, 1, 11.35, "40C7A6FF", 0, 1, -180]]
    }, {
      n: "TILES_FLOOR",
      t: "T",
      d: 1000400,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_flowercastle_pinkroom",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 11,
      items: 1,
      fl: 66666,
      cells: [2, 2, 19, 3, 2, 19, 4, 2, 19, 5, 2, 19, 6, 2, 19, 7, 2, 19, 8, 2, 19, 9, 2, 19, 10, 2, 19, 11, 2, 19, 12, 2, 19, 13, 2, 19, 0, 3, 19, 1, 3, 19, 2, 3, 19, 3, 3, 19, 4, 3, 19, 5, 3, 19, 6, 3, 19, 7, 3, 19, 8, 3, 19, 9, 3, 19, 10, 3, 19, 11, 3, 19, 12, 3, 19, 13, 3, 19, 0, 4, 19, 1, 4, 19, 2, 4, 19, 3, 4, 19, 4, 4, 19, 5, 4, 19, 6, 4, 19, 7, 4, 19, 8, 4, 19, 9, 4, 19, 10, 4, 19, 11, 4, 19, 12, 4, 19, 13, 4, 19, 0, 5, 19, 1, 5, 19, 2, 5, 19, 3, 5, 19, 4, 5, 19, 5, 5, 19, 6, 5, 19, 7, 5, 19, 8, 5, 19, 9, 5, 19, 10, 5, 19, 11, 5, 19, 12, 5, 19, 13, 5, 19, 2, 6, 19, 3, 6, 19, 4, 6, 19, 5, 6, 19, 6, 6, 19, 7, 6, 19, 8, 6, 19, 9, 6, 19, 10, 6, 19, 11, 6, 19, 12, 6, 19, 13, 6, 19]
    }, {
      n: "LEAVES",
      t: "I",
      d: 1000500,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_leafpetals", -58, 120, 1, 1, 0, "-", true, 0, 0, "FFF5ABDA"]]
    }, {
      n: "TILES_BG",
      t: "T",
      d: 1000600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_flowercastle_pinkroom",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 11,
      items: 1,
      fl: 66666,
      cells: [2, 0, 95, 3, 0, 95, 4, 0, 95, 5, 0, 95, 6, 0, 95, 7, 0, 95, 8, 0, 95, 9, 0, 95, 10, 0, 95, 11, 0, 95, 12, 0, 95, 13, 0, 95, 2, 1, 103, 3, 1, 103, 4, 1, 103, 5, 1, 103, 6, 1, 103, 7, 1, 103, 8, 1, 103, 9, 1, 103, 10, 1, 103, 11, 1, 103, 12, 1, 103, 13, 1, 103]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch5/room_dw_fcastle_yellowjail": {
    w: 1280,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_ch5_DWCL03"],
    views: [[640, 0, 640, 480, null]],
    layers: [{
      n: "REFLECT",
      t: "I",
      d: -500,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_castlereflect", 120, 240, 4, 6, 0, "spr_swordarea", true, 0, 0, "FFFFFFFF"], ["obj_castlereflect", 280, 160, 25, 4, 0, "spr_swordarea", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "NPCs",
      t: "A",
      d: -400,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_kakaw_idle", 380, 150, -2, 2, "FFFFFFFF", 0, 1, 0], ["spr_scarecrow_taunt", 380, 150, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "CUTSCENE_REMATCH_ELEMENTS",
      t: "A",
      d: -300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_blue_walk_l", 1006, 123, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_yellow_cool_fall", 1059, 174, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_debug_cameraregionpreview", 576, 0, 20, 20, "FF00FF00", 0, 1, 0]]
    }, {
      n: "CUTSCENE_POST_ELEMENTS",
      t: "A",
      d: -200,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_blue_walk_l", 992, 156, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_yellow_dumbfounded", 838, 150, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_debug_cameraregionpreview", 448, 0, 20, 20, "FFFFFFFF", 0, 1, 0], ["spr_debug_krmarker", 594, 185, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_debug_ramarker", 574, 233, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_debug_sumarker", 544, 202, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_debug_cameraregionpreview", 640, 0, 20, 20, "FF0000FF", 0, 1, 0], ["spr_debug_krmarker", 988, 232, 2, 2, "FF0000FF", 0, 1, 0], ["spr_debug_ramarker", 897, 220, 2, 2, "FF0000FF", 0, 1, 0], ["spr_debug_sumarker", 936, 216, 2, 2, "FF0000FF", 0, 1, 0]]
    }, {
      n: "CUTSCENE_ELEMENTS",
      t: "A",
      d: -100,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_blue_poses_r", 800, 160, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_yellow_up_dejected", 1024, 40, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_kris_stealth", 560, 180, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_blue_yellow_tug", 926, 54, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_yellow_shock_left", 1034, 160, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_blue_poses_2", 830, 170, 2, 2, "FFFFF093", 4, 1, 0], ["spr_kris_stealth", 938, 180, 2, 2, "FFFFFF00", 1, 1, 0], ["spr_blue_jail_flip", 876, 120, 2, 2, "FFFFF093", 20, 1, 0], ["spr_yellow_point_right", 772, 112, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_blue_poses", 1042, 120, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_yellow_sad_walk_left", 962, 162, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 160, 200, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_ch5_DWCL03", -80, 0, 1, 1, 0, "spr_event", true, 0, 0, "FFFFFFFF"], ["obj_spotlight_wall", 920, 239, 2, 1, 0, "spr_dw_fcastle_jail_bars", true, 0, 2, "FFFFFFFF"]]
    }, {
      n: "LIGHT_BLOCKERS",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "TILES_FORE",
      t: "T",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_flowercastle_zen_mockup",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 21,
      items: 1,
      fl: 66666,
      cells: [7, 0, 145, 8, 0, 145, 9, 0, 145, 10, 0, 145, 11, 0, 145, 12, 0, 145, 14, 0, 145, 15, 0, 145, 16, 0, 145, 17, 0, 145, 18, 0, 145, 19, 0, 145, 21, 0, 145, 22, 0, 145, 23, 0, 145, 24, 0, 145, 25, 0, 145, 26, 0, 145]
    }, {
      n: "Assets_Pillars",
      t: "A",
      d: 1000100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_fcastle_jail_bars", 360, 240, 2, 1, "FF0000FF", 2, 0, 0], ["spr_dw_fcastle_jail_bars", 640, 240, 2, 1, "FF00FF00", 2, 0, 0]]
    }, {
      n: "TILES",
      t: "T",
      d: 1000200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_flowercastle_zen_mockup",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 21,
      items: 1,
      fl: 66666,
      cells: [0, 0, 1073742104, 1, 0, 1073742096, 2, 0, 90, 3, 0, 240, 4, 0, 240, 5, 0, 241, 6, 0, 268435602, 7, 0, 47, 8, 0, 51, 9, 0, 51, 10, 0, 51, 11, 0, 51, 12, 0, 44, 13, 0, 146, 14, 0, 47, 15, 0, 51, 16, 0, 51, 17, 0, 51, 18, 0, 51, 19, 0, 44, 20, 0, 268435602, 21, 0, 51, 22, 0, 51, 23, 0, 51, 24, 0, 51, 25, 0, 51, 26, 0, 51, 27, 0, 146, 28, 0, 236, 29, 0, 240, 30, 0, 240, 31, 0, 232, 0, 1, 1073742105, 1, 1, 1073742097, 2, 1, 90, 3, 1, 240, 4, 1, 240, 5, 1, 233, 6, 1, 268435610, 7, 1, 47, 8, 1, 51, 9, 1, 51, 10, 1, 51, 11, 1, 51, 12, 1, 44, 13, 1, 154, 14, 1, 47, 15, 1, 51, 16, 1, 51, 17, 1, 51, 18, 1, 51, 19, 1, 44, 20, 1, 268435610, 21, 1, 47, 22, 1, 51, 23, 1, 51, 24, 1, 51, 25, 1, 51, 26, 1, 44, 27, 1, 154, 28, 1, 244, 29, 1, 240, 30, 1, 240, 31, 1, 240, 0, 2, 1073742106, 1, 2, 1073742098, 2, 2, 90, 3, 2, 240, 4, 2, 240, 5, 2, 233, 6, 2, 268435602, 7, 2, 47, 8, 2, 51, 9, 2, 51, 10, 2, 51, 11, 2, 51, 12, 2, 44, 13, 2, 146, 14, 2, 47, 15, 2, 51, 16, 2, 51, 17, 2, 51, 18, 2, 51, 19, 2, 44, 20, 2, 268435602, 21, 2, 47, 22, 2, 51, 23, 2, 51, 24, 2, 51, 25, 2, 51, 26, 2, 44, 27, 2, 146, 28, 2, 236, 29, 2, 232, 30, 2, 240, 31, 2, 240, 0, 3, 1073742107, 1, 3, 1073742099, 2, 3, 90, 3, 3, 232, 4, 3, 240, 5, 3, 233, 6, 3, 268435610, 7, 3, 63, 8, 3, 59, 9, 3, 59, 10, 3, 59, 11, 3, 59, 12, 3, 60, 13, 3, 154, 14, 3, 63, 15, 3, 59, 16, 3, 59, 17, 3, 59, 18, 3, 59, 19, 3, 60, 20, 3, 268435610, 21, 3, 63, 22, 3, 59, 23, 3, 59, 24, 3, 59, 25, 3, 59, 26, 3, 60, 27, 3, 154, 28, 3, 236, 29, 3, 240, 30, 3, 240, 31, 3, 240, 0, 4, 1073742108, 1, 4, 1073742100, 2, 4, 90, 3, 4, 248, 4, 4, 248, 5, 4, 249, 6, 4, 268435602, 7, 4, 8, 8, 4, 8, 9, 4, 8, 10, 4, 8, 11, 4, 8, 12, 4, 8, 13, 4, 146, 14, 4, 8, 15, 4, 8, 16, 4, 8, 17, 4, 8, 18, 4, 8, 19, 4, 8, 20, 4, 268435602, 21, 4, 8, 22, 4, 8, 23, 4, 8, 24, 4, 8, 25, 4, 8, 26, 4, 8, 27, 4, 146, 28, 4, 252, 29, 4, 248, 30, 4, 248, 31, 4, 248, 0, 5, 1073742109, 1, 5, 1073742101, 2, 5, 90, 3, 5, 256, 4, 5, 256, 5, 5, 256, 6, 5, 268435602, 7, 5, 8, 8, 5, 8, 9, 5, 8, 10, 5, 8, 11, 5, 8, 12, 5, 8, 13, 5, 146, 14, 5, 8, 15, 5, 8, 16, 5, 8, 17, 5, 8, 18, 5, 8, 19, 5, 8, 20, 5, 268435602, 21, 5, 8, 22, 5, 8, 23, 5, 8, 24, 5, 8, 25, 5, 8, 26, 5, 8, 27, 5, 146, 28, 5, 256, 29, 5, 256, 30, 5, 256, 31, 5, 256, 0, 6, 1073742110, 1, 6, 1073742102, 2, 6, 90, 3, 6, 16, 4, 6, 16, 5, 6, 16, 6, 6, 24, 7, 6, 16, 8, 6, 16, 9, 6, 16, 10, 6, 16, 11, 6, 16, 12, 6, 16, 13, 6, 24, 14, 6, 16, 15, 6, 16, 16, 6, 16, 17, 6, 16, 18, 6, 16, 19, 6, 16, 20, 6, 24, 21, 6, 16, 22, 6, 16, 23, 6, 16, 24, 6, 16, 25, 6, 16, 26, 6, 16, 27, 6, 24, 28, 6, 16, 29, 6, 16, 30, 6, 16, 31, 6, 16, 0, 7, 1073742120, 1, 7, 89, 2, 7, 90, 3, 7, 24, 4, 7, 24, 5, 7, 24, 6, 7, 24, 7, 7, 24, 8, 7, 24, 9, 7, 24, 10, 7, 24, 11, 7, 24, 12, 7, 24, 13, 7, 24, 14, 7, 24, 15, 7, 24, 16, 7, 24, 17, 7, 24, 18, 7, 24, 19, 7, 24, 20, 7, 24, 21, 7, 24, 22, 7, 24, 23, 7, 24, 24, 7, 24, 25, 7, 24, 26, 7, 24, 27, 7, 24, 28, 7, 24, 29, 7, 24, 30, 7, 24, 31, 7, 24, 0, 8, 1073742121, 1, 8, 89, 2, 8, 90, 3, 8, 24, 4, 8, 24, 5, 8, 80, 6, 8, 81, 7, 8, 81, 8, 8, 81, 9, 8, 81, 10, 8, 81, 11, 8, 81, 12, 8, 81, 13, 8, 81, 14, 8, 81, 15, 8, 81, 16, 8, 81, 17, 8, 81, 18, 8, 81, 19, 8, 81, 20, 8, 81, 21, 8, 81, 22, 8, 81, 23, 8, 81, 24, 8, 81, 25, 8, 81, 26, 8, 81, 27, 8, 81, 28, 8, 81, 29, 8, 81, 30, 8, 81, 31, 8, 81, 0, 9, 1073742122, 1, 9, 89, 2, 9, 90, 3, 9, 24, 4, 9, 24, 5, 9, 88, 6, 9, 89, 7, 9, 89, 8, 9, 89, 9, 9, 272, 10, 9, 273, 11, 9, 274, 12, 9, 275, 13, 9, 276, 14, 9, 277, 15, 9, 278, 16, 9, 89, 17, 9, 296, 18, 9, 297, 19, 9, 298, 20, 9, 299, 21, 9, 300, 22, 9, 89, 23, 9, 89, 24, 9, 272, 25, 9, 273, 26, 9, 274, 27, 9, 275, 28, 9, 276, 29, 9, 277, 30, 9, 278, 31, 9, 89, 0, 10, 1073742123, 1, 10, 89, 2, 10, 90, 3, 10, 24, 4, 10, 24, 5, 10, 88, 6, 10, 89, 7, 10, 89, 8, 10, 89, 9, 10, 280, 10, 10, 281, 11, 10, 282, 12, 10, 283, 13, 10, 284, 14, 10, 285, 15, 10, 286, 16, 10, 89, 17, 10, 304, 18, 10, 305, 19, 10, 306, 20, 10, 307, 21, 10, 308, 22, 10, 89, 23, 10, 89, 24, 10, 280, 25, 10, 281, 26, 10, 282, 27, 10, 283, 28, 10, 284, 29, 10, 285, 30, 10, 286, 31, 10, 89, 0, 11, 1073742124, 1, 11, 89, 2, 11, 90, 3, 11, 24, 4, 11, 24, 5, 11, 88, 6, 11, 89, 7, 11, 89, 8, 11, 89, 9, 11, 288, 10, 11, 289, 11, 11, 290, 12, 11, 291, 13, 11, 292, 14, 11, 293, 15, 11, 294, 16, 11, 89, 17, 11, 312, 18, 11, 313, 19, 11, 314, 20, 11, 315, 21, 11, 316, 22, 11, 89, 23, 11, 89, 24, 11, 288, 25, 11, 289, 26, 11, 290, 27, 11, 291, 28, 11, 292, 29, 11, 293, 30, 11, 294, 31, 11, 89]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch5/room_dw_fcastle_flowerydash": {
    w: 700,
    h: 480,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_dw_flowerydash"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "NPCs",
      t: "A",
      d: -100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 100, 230, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_platswap", -105, 25, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_plat_game", -105, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, -60, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FLOOR_AlignBottom1TILE", -880, 0, 1.5, 0.5, 0, "spr_floortex_TILES_AlignBottom1TILE", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FRONT", -880, 20, 1.5, 20.25, 0, "spr_plat_floortex_FRONT", true, 0, 0, "FFFFFFFF"], ["obj_dw_flowerydash", 40, -50, 1, 1, 0, "spr_event", true, 0, 0, "FFFFFFFF"], ["obj_grassanim_new", 220, 20, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "INSTANCES_FLOORTEX",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_plat_floortex_FLOOR_AlignBottom1TILE", 0, 340, 4.5, 0.5, 0, "spr_floortex_TILES_AlignBottom1TILE", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FRONT", 0, 360, 4.5, 0.75, 0, "spr_plat_floortex_FRONT", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISIONS_PLAT",
      t: "I",
      d: 200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_plat_block", -490, 360, 88.49999, 4, 0, "spr_plat_grid", true, 0, 0, "FFFFFFFF"], ["obj_plat_block", 10320, 1920, 3, 12, 0, "spr_plat_grid", true, 0, 0, "FFFFFFFF"], ["obj_plat_block", 9400, 2240, 15, 6, 0, "spr_plat_grid", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "TILES_Grass",
      t: "T",
      d: 300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_soft_cliff_grass_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 14,
      items: 1,
      fl: 125000,
      cells: [0, 7, 57, 1, 7, 57, 2, 7, 57, 3, 7, 57, 4, 7, 57, 5, 7, 57, 6, 7, 57, 7, 7, 57, 8, 7, 57, 9, 7, 57, 10, 7, 57, 11, 7, 57, 12, 7, 57, 13, 7, 57, 14, 7, 57, 15, 7, 57, 16, 7, 57, 17, 7, 57, 0, 8, 73, 1, 8, 73, 2, 8, 73, 3, 8, 73, 4, 8, 73, 5, 8, 73, 6, 8, 73, 7, 8, 73, 8, 8, 73, 9, 8, 73, 10, 8, 73, 11, 8, 73, 12, 8, 73, 13, 8, 73, 14, 8, 73, 15, 8, 73, 16, 8, 73, 17, 8, 73]
    }, {
      n: "TILES_Bricks",
      t: "T",
      d: 400,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_cliff_dark_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 21,
      items: 1,
      fl: 66666,
      cells: [0, 8, 141, 1, 8, 141, 2, 8, 141, 3, 8, 141, 4, 8, 141, 5, 8, 141, 6, 8, 141, 7, 8, 141, 8, 8, 141, 9, 8, 141, 10, 8, 141, 11, 8, 141, 12, 8, 141, 13, 8, 141, 14, 8, 141, 15, 8, 141, 16, 8, 141, 17, 8, 141, 0, 9, 126, 1, 9, 126, 2, 9, 126, 3, 9, 126, 4, 9, 126, 5, 9, 126, 6, 9, 126, 7, 9, 126, 8, 9, 126, 9, 9, 126, 10, 9, 126, 11, 9, 126, 12, 9, 126, 13, 9, 126, 14, 9, 126, 15, 9, 126, 16, 9, 126, 17, 9, 126, 0, 10, 141, 1, 10, 141, 2, 10, 141, 3, 10, 141, 4, 10, 141, 5, 10, 141, 6, 10, 141, 7, 10, 141, 8, 10, 141, 9, 10, 141, 10, 10, 141, 11, 10, 141, 12, 10, 141, 13, 10, 141, 14, 10, 141, 15, 10, 141, 16, 10, 141, 17, 10, 141, 0, 11, 141, 1, 11, 141, 2, 11, 141, 3, 11, 141, 4, 11, 141, 5, 11, 141, 6, 11, 141, 7, 11, 141, 8, 11, 141, 9, 11, 141, 10, 11, 141, 11, 11, 141, 12, 11, 141, 13, 11, 141, 14, 11, 141, 15, 11, 141, 16, 11, 141, 17, 11, 141]
    }, {
      n: "BG",
      t: "I",
      d: 16777216,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_parallax_cliffs", 0, 0, 2, 2, 0, "spr_newsunset_bg", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 16777316,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch5/room_dw_fcastle_green_orange_battle": {
    w: 1440,
    h: 520,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_ch5_DWCR03"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "REFLECT",
      t: "I",
      d: -500,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_castlereflect", 0, 240, 31, 3, 0, "spr_swordarea", true, 0, 0, "FFFFFFFF"], ["obj_castlereflect", 1240, 280, 2, 6, 0, "spr_swordarea", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "DEBUG_CAMREGION",
      t: "A",
      d: -400,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_debug_cameraregionpreview", 544, 40, 20, 20, "FFFFFFFF", 0, 1, 0], ["spr_debug_cameraregionpreview", 487, 40, 20, 20, "FF0000FF", 0, 1, 0], ["spr_debug_cameraregionpreview", 256, 40, 20, 20, "FF00FF00", 0, 1, 0]]
    }, {
      n: "NPCs",
      t: "A",
      d: -300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_enemy_aqua_idle_fox", 1060, 200, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_shinobeetle_spare", 940, 160, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "DEBUG_ASSETS",
      t: "A",
      d: -200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_debug_krmarker", 963, 256, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_debug_sumarker", 1008, 246, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_debug_sumarker", 870, 232, 2, 2, "FF0000FF", 0, 1, 0], ["spr_debug_ramarker", 1068, 250, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_enemy_orange_walk_left", 740, 306, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_debug_ramarker", 910, 256, 2, 2, "FF0000FF", 0, 1, 0], ["spr_enemy_green_walk_right", 780, 226, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_orange_mad_r", 580, 306, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "COLLISION",
      t: "I",
      d: -100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 1260, 434, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", -120, 280, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_onsen_steam_zone", 0, 180, 8, 2, 0, "spr_checker_pattern", true, 0, 0, "FFFFFFFF"], ["obj_onsen_steam_zone", 320, 180, 18, 2, 0, "spr_checker_pattern", true, 0, 0, "FFFFFFFF"], ["obj_onsen_steam_zone", 1040, 180, 3, 2, 0, "spr_checker_pattern", true, 0, 0, "FFFFFFFF"], ["obj_onsen_steam_zone", 1240, 180, 5, 2, 0, "spr_checker_pattern", true, 0, 0, "FFFFFFFF"], ["obj_onsen_steam_zone", 1330, 260, 3, 6.4999995, 0, "spr_checker_pattern", true, 0, 0, "FFFFFFFF"], ["obj_onsen_steam_zone", 0, 390, 4, 3, 0, "spr_checker_pattern", true, 0, 0, "FFFFFFFF"], ["obj_onsen_steam_zone", 240, 390, 24.7, 3, 0, "spr_checker_pattern", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "TILES_Fore_1",
      t: "T",
      d: 1200100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_flowercastle",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 35,
      items: 1,
      fl: 66666,
      cells: [6, 0, 256, 11, 0, 256, 12, 0, 256, 21, 0, 256, 22, 0, 256, 28, 0, 256, 6, 1, 256, 11, 1, 256, 12, 1, 281, 21, 1, 281, 22, 1, 281, 28, 1, 256, 6, 2, 306, 11, 2, 281, 12, 2, 306, 22, 2, 306, 28, 2, 306, 7, 3, 355, 11, 3, 306, 7, 4, 380, 29, 4, 412, 30, 4, 413]
    }, {
      n: "ASSET_DARKEN",
      t: "A",
      d: 1200166,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_zenpond_lily_2", 680, 460, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_3", 820, 440, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_1", 760, 480, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_3", 640, 500, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_3", 900, 460, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_plat_zengarden_plant4", 760, 410, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_2", 240, 424, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_3", 120, 446, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_1", 240, 204, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_3", 160, 230, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_1", 480, 438, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_3", 580, 438, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_plat_zengarden_plant4", 400, 454, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_plat_zengarden_rock3", 640, 448, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_plat_zengarden_rock4", 600, 478, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_plat_zengarden_rock4", 560, 458, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_2", 1360, 202, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_1", 880, 216, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_2", 440, 220, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_3", 580, 200, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_1", 580, 220, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_3", 420, 210, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_3", 660, 220, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_lily_3", 820, 220, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_plat_zengarden_plant4", 520, 170, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_plat_zengarden_rock4", 780, 220, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_plat_zengarden_rock2", 720, 230, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_reed", 40, 92, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_zenpond_reed", 1320, 84, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "TILES_Onsen_2",
      t: "T",
      d: 1200232,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_flowercastle_onsen",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 8,
      items: 1,
      fl: 66666,
      cells: [10, 2, 50, 13, 2, 49, 31, 2, 49, 10, 3, 53, 13, 3, 52, 17, 3, 51, 25, 3, 54, 26, 3, 55, 31, 3, 52, 0, 4, 45, 1, 4, 46, 2, 4, 47, 3, 4, 45, 4, 4, 46, 5, 4, 47, 6, 4, 45, 7, 4, 46, 8, 4, 47, 9, 4, 45, 10, 4, 46, 11, 4, 47, 12, 4, 45, 13, 4, 46, 14, 4, 47, 15, 4, 45, 16, 4, 46, 17, 4, 47, 18, 4, 45, 19, 4, 46, 20, 4, 47, 21, 4, 45, 22, 4, 46, 23, 4, 47, 24, 4, 45, 25, 4, 46, 26, 4, 47, 27, 4, 45, 28, 4, 46, 29, 4, 47, 30, 4, 45, 31, 4, 46, 32, 4, 47, 33, 4, 45, 34, 4, 46, 35, 4, 47]
    }, {
      n: "TILES_Grass",
      t: "T",
      d: 1200300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_flowercastle",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 35,
      items: 1,
      fl: 66666,
      cells: [1, 4, 355, 4, 4, 308, 29, 4, 412, 30, 4, 413, 32, 4, 308, 33, 4, 355, 1, 5, 380, 2, 5, 462, 3, 5, 463, 5, 5, 307, 23, 5, 308, 24, 5, 307, 27, 5, 462, 28, 5, 463, 29, 5, 437, 30, 5, 438, 31, 5, 307, 33, 5, 380, 0, 7, 1073742079, 1, 7, 1073742079, 2, 7, 1073742079, 3, 7, 1073742079, 4, 7, 1073742079, 5, 7, 1073742079, 6, 7, 1073742079, 7, 7, 1073742079, 8, 7, 1073742079, 9, 7, 1073742079, 10, 7, 1073742079, 11, 7, 1073742079, 12, 7, 1073742079, 13, 7, 1073742079, 14, 7, 1073742079, 15, 7, 1073742079, 16, 7, 1073742079, 17, 7, 1073742079, 18, 7, 1073742079, 19, 7, 1073742079, 20, 7, 1073742079, 21, 7, 1073742079, 22, 7, 1073742079, 23, 7, 1073742079, 24, 7, 1073742079, 25, 7, 1073742079, 26, 7, 1073742079, 27, 7, 1073742079, 28, 7, 1073742079, 29, 7, 1073742079, 30, 7, 1073742079, 31, 7, 255, 32, 7, 1040, 34, 7, 308, 0, 8, 1073742079, 1, 8, 1073742079, 2, 8, 1073742079, 3, 8, 1073742079, 4, 8, 1073742079, 5, 8, 1073742079, 6, 8, 1073742079, 7, 8, 1073742079, 8, 8, 1073742079, 9, 8, 1073742079, 10, 8, 1073742079, 11, 8, 1073742079, 12, 8, 1073742079, 13, 8, 1073742079, 14, 8, 1073742079, 15, 8, 1073742079, 16, 8, 1073742079, 17, 8, 1073742079, 18, 8, 1073742079, 19, 8, 1073742079, 20, 8, 1073742079, 21, 8, 1073742079, 22, 8, 1073742079, 23, 8, 1073742079, 24, 8, 1073742079, 25, 8, 1073742079, 26, 8, 1073742079, 27, 8, 1073742079, 28, 8, 1073742079, 29, 8, 1073742079, 30, 8, 1073742079, 31, 8, 255, 32, 8, 1040, 0, 9, 355, 31, 9, 1038, 32, 9, 1040, 0, 10, 380, 4, 10, 308, 24, 10, 380, 26, 10, 308, 28, 10, 257, 29, 10, 258, 31, 10, 1038, 32, 10, 1040, 1, 11, 307, 4, 11, 412, 5, 11, 413, 9, 11, 308, 27, 11, 355, 28, 11, 282, 29, 11, 283, 31, 11, 1038, 32, 11, 1040, 0, 12, 308, 2, 12, 462, 3, 12, 463, 4, 12, 437, 5, 12, 438, 6, 12, 308, 27, 12, 380, 28, 12, 308, 29, 12, 414, 31, 12, 1038, 32, 12, 1040]
    }, {
      n: "TILES_Mid_Offset",
      t: "T",
      d: 1200400,
      v: true,
      xo: 0,
      yo: 14,
      hs: 0,
      vs: 0,
      ts: "tiles_flowercastle",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 35,
      items: 1,
      fl: 66666,
      cells: []
    }, {
      n: "TILES_Onsen",
      t: "T",
      d: 1200500,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_flowercastle_onsen",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 8,
      items: 1,
      fl: 66666,
      cells: [0, 0, 15, 1, 0, 31, 2, 0, 32, 3, 0, 18, 4, 0, 21, 5, 0, 22, 6, 0, 23, 7, 0, 22, 8, 0, 23, 9, 0, 21, 10, 0, 15, 11, 0, 31, 12, 0, 32, 13, 0, 18, 14, 0, 21, 15, 0, 18, 16, 0, 18, 17, 0, 18, 18, 0, 21, 19, 0, 22, 20, 0, 23, 21, 0, 22, 22, 0, 23, 23, 0, 21, 24, 0, 18, 25, 0, 31, 26, 0, 32, 27, 0, 18, 28, 0, 31, 29, 0, 32, 30, 0, 18, 31, 0, 21, 32, 0, 18, 33, 0, 31, 34, 0, 32, 35, 0, 18, 0, 1, 15, 1, 1, 31, 2, 1, 32, 3, 1, 18, 4, 1, 21, 5, 1, 22, 6, 1, 23, 7, 1, 22, 8, 1, 23, 9, 1, 21, 10, 1, 15, 11, 1, 31, 12, 1, 32, 13, 1, 18, 14, 1, 21, 15, 1, 18, 16, 1, 18, 17, 1, 18, 18, 1, 21, 19, 1, 22, 20, 1, 23, 21, 1, 22, 22, 1, 23, 23, 1, 21, 24, 1, 18, 25, 1, 31, 26, 1, 32, 27, 1, 18, 28, 1, 31, 29, 1, 32, 30, 1, 18, 31, 1, 21, 32, 1, 18, 33, 1, 31, 34, 1, 32, 35, 1, 18, 0, 2, 18, 1, 2, 31, 2, 2, 32, 3, 2, 15, 4, 2, 24, 5, 2, 25, 6, 2, 26, 7, 2, 25, 8, 2, 26, 9, 2, 24, 10, 2, 18, 11, 2, 31, 12, 2, 32, 13, 2, 15, 14, 2, 24, 15, 2, 15, 16, 2, 18, 17, 2, 15, 18, 2, 24, 19, 2, 25, 20, 2, 26, 21, 2, 25, 22, 2, 26, 23, 2, 24, 24, 2, 15, 25, 2, 31, 26, 2, 32, 27, 2, 18, 28, 2, 31, 29, 2, 32, 30, 2, 18, 31, 2, 24, 32, 2, 15, 33, 2, 31, 34, 2, 32, 35, 2, 18, 0, 3, 18, 1, 3, 31, 2, 3, 32, 3, 3, 18, 4, 3, 27, 5, 3, 28, 6, 3, 29, 7, 3, 28, 8, 3, 29, 9, 3, 27, 10, 3, 18, 11, 3, 31, 12, 3, 32, 13, 3, 18, 14, 3, 27, 15, 3, 18, 16, 3, 18, 17, 3, 18, 18, 3, 27, 19, 3, 28, 20, 3, 29, 21, 3, 28, 22, 3, 29, 23, 3, 27, 24, 3, 18, 25, 3, 31, 26, 3, 32, 27, 3, 18, 28, 3, 31, 29, 3, 32, 30, 3, 18, 31, 3, 27, 32, 3, 18, 33, 3, 31, 34, 3, 32, 35, 3, 18, 0, 4, 1, 1, 4, 1, 2, 4, 1, 3, 4, 1, 4, 4, 1, 5, 4, 1, 6, 4, 1, 7, 4, 1, 8, 4, 1, 9, 4, 1, 10, 4, 1, 11, 4, 1, 12, 4, 1, 13, 4, 1, 14, 4, 1, 15, 4, 1, 16, 4, 1, 17, 4, 1, 18, 4, 1, 19, 4, 1, 20, 4, 1, 21, 4, 1, 22, 4, 1, 23, 4, 1, 24, 4, 1, 25, 4, 1, 26, 4, 1, 27, 4, 1, 28, 4, 1, 29, 4, 1, 30, 4, 1, 31, 4, 1, 32, 4, 1, 33, 4, 1, 34, 4, 1, 35, 4, 1, 0, 5, 4, 1, 5, 4, 2, 5, 4, 3, 5, 4, 4, 5, 4, 5, 5, 4, 6, 5, 4, 7, 5, 4, 8, 5, 4, 9, 5, 4, 10, 5, 4, 11, 5, 4, 12, 5, 4, 13, 5, 4, 14, 5, 4, 15, 5, 4, 16, 5, 4, 17, 5, 4, 18, 5, 4, 19, 5, 4, 20, 5, 4, 21, 5, 4, 22, 5, 4, 23, 5, 4, 24, 5, 4, 25, 5, 4, 26, 5, 4, 27, 5, 4, 28, 5, 4, 29, 5, 4, 30, 5, 4, 31, 5, 4, 32, 5, 4, 33, 5, 4, 34, 5, 4, 35, 5, 4, 0, 6, 7, 1, 6, 7, 2, 6, 7, 3, 6, 7, 4, 6, 7, 5, 6, 7, 6, 6, 7, 7, 6, 7, 8, 6, 7, 9, 6, 7, 10, 6, 7, 11, 6, 7, 12, 6, 7, 13, 6, 7, 14, 6, 7, 15, 6, 7, 16, 6, 7, 17, 6, 7, 18, 6, 7, 19, 6, 7, 20, 6, 7, 21, 6, 7, 22, 6, 7, 23, 6, 7, 24, 6, 7, 25, 6, 7, 26, 6, 7, 27, 6, 7, 28, 6, 7, 29, 6, 7, 30, 6, 7, 31, 6, 7, 32, 6, 7, 33, 6, 13, 34, 6, 4, 35, 6, 4, 33, 7, 268435461, 34, 7, 4, 35, 7, 4, 33, 8, 268435461, 34, 8, 4, 35, 8, 4, 0, 9, 62, 1, 9, 62, 2, 9, 62, 3, 9, 62, 4, 9, 62, 5, 9, 62, 6, 9, 62, 7, 9, 62, 8, 9, 62, 9, 9, 62, 10, 9, 62, 11, 9, 62, 12, 9, 62, 13, 9, 62, 14, 9, 62, 15, 9, 62, 16, 9, 62, 17, 9, 62, 18, 9, 62, 19, 9, 62, 20, 9, 62, 21, 9, 62, 22, 9, 62, 23, 9, 62, 24, 9, 62, 25, 9, 62, 26, 9, 62, 27, 9, 62, 28, 9, 62, 29, 9, 62, 30, 9, 65, 33, 9, 268435461, 34, 9, 4, 35, 9, 4, 30, 10, 64, 33, 10, 268435461, 34, 10, 4, 35, 10, 4, 30, 11, 64, 33, 11, 268435461, 34, 11, 4, 35, 11, 4, 30, 12, 64, 33, 12, 268435461, 34, 12, 4, 35, 12, 4]
    }, {
      n: "REFLECTSURF",
      t: "I",
      d: 1400600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_watersurface", 0, 320, 124, 21, 0, "spr_whitepx_10", true, 0, 0, "FFFF0000"]]
    }, {
      n: "REFLECTBASE",
      t: "T",
      d: 1500700,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_flowercastle_onsen",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 8,
      items: 1,
      fl: 66666,
      cells: [0, 1, 65, 1, 1, 65, 2, 1, 65, 3, 1, 65, 16, 1, 4, 17, 1, 4, 13, 2, 4, 14, 2, 4, 15, 2, 4, 13, 3, 4, 13, 4, 4, 14, 4, 4, 14, 5, 4, 15, 5, 4, 16, 6, 4, 17, 6, 4, 9, 7, 4, 15, 7, 4, 16, 7, 4, 17, 7, 4, 35, 7, 60, 9, 8, 4, 10, 8, 4, 11, 8, 4, 13, 8, 4, 14, 8, 4, 35, 8, 4, 0, 9, 60, 1, 9, 60, 2, 9, 60, 3, 9, 60, 4, 9, 60, 5, 9, 60, 6, 9, 60, 7, 9, 60, 8, 9, 60, 9, 9, 60, 10, 9, 60, 11, 9, 60, 12, 9, 60, 13, 9, 60, 14, 9, 60, 15, 9, 60, 16, 9, 60, 17, 9, 60, 18, 9, 60, 19, 9, 60, 20, 9, 60, 21, 9, 60, 22, 9, 60, 23, 9, 60, 24, 9, 60, 25, 9, 60, 26, 9, 60, 27, 9, 60, 28, 9, 60, 29, 9, 60, 30, 9, 60, 35, 9, 4, 0, 10, 4, 1, 10, 4, 2, 10, 4, 3, 10, 4, 4, 10, 4, 5, 10, 4, 6, 10, 4, 7, 10, 4, 8, 10, 4, 9, 10, 4, 10, 10, 4, 11, 10, 4, 12, 10, 4, 13, 10, 4, 14, 10, 4, 15, 10, 4, 16, 10, 4, 17, 10, 4, 18, 10, 4, 19, 10, 4, 20, 10, 4, 21, 10, 4, 22, 10, 4, 23, 10, 4, 24, 10, 4, 25, 10, 4, 26, 10, 4, 27, 10, 4, 28, 10, 4, 29, 10, 4, 30, 10, 4, 35, 10, 4, 0, 11, 4, 1, 11, 4, 2, 11, 4, 3, 11, 4, 4, 11, 4, 5, 11, 4, 6, 11, 4, 7, 11, 4, 8, 11, 4, 9, 11, 4, 10, 11, 4, 11, 11, 4, 12, 11, 4, 13, 11, 4, 14, 11, 4, 15, 11, 4, 16, 11, 4, 17, 11, 4, 18, 11, 4, 19, 11, 4, 20, 11, 4, 21, 11, 4, 22, 11, 4, 23, 11, 4, 24, 11, 4, 25, 11, 4, 26, 11, 4, 27, 11, 4, 28, 11, 4, 29, 11, 4, 30, 11, 4, 35, 11, 4, 0, 12, 4, 1, 12, 4, 2, 12, 4, 3, 12, 4, 4, 12, 4, 5, 12, 4, 6, 12, 4, 7, 12, 4, 8, 12, 4, 9, 12, 4, 10, 12, 4, 11, 12, 4, 12, 12, 4, 13, 12, 4, 14, 12, 4, 15, 12, 4, 16, 12, 4, 17, 12, 4, 18, 12, 4, 19, 12, 4, 20, 12, 4, 21, 12, 4, 22, 12, 4, 23, 12, 4, 24, 12, 4, 25, 12, 4, 26, 12, 4, 27, 12, 4, 28, 12, 4, 29, 12, 4, 30, 12, 4, 35, 12, 4]
    }, {
      n: "BG",
      t: "I",
      d: 1500800,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_parallax_cliffs", 11, 3, 1, 1, 0, "spr_newsunset_bg", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 16777216,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch5/room_dw_post_flowery_battle": {
    w: 3000,
    h: 1280,
    col: "FF000000",
    drawbg: false,
    hit: [],
    views: [[460, 0, 640, 480, null]],
    layers: [{
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_mainchara", 260, 680, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "NPC_DEBUG",
      t: "A",
      d: 1000025,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_flowery_walk_downleft", 600, 640, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "ASSETS_DOOR",
      t: "A",
      d: 1000050,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_garden_enemyrush_topBG", 2544, 240, 2, 2, "FFFFFFFF", 1, 0, 0]]
    }, {
      n: "CAMERA_REGIONS",
      t: "A",
      d: 1000075,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_debug_cameraregionpreview", 80, 480, 20, 20, "FFFFFFFF", 0, 1, 0], ["spr_debug_cameraregionpreview", 0, 480, 20, 20, "FF0000FF", 0, 1, 0]]
    }, {
      n: "GRASS_DECO",
      t: "A",
      d: 1000100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_aquaplant_14", 1120, 560, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_14", 1159, 927, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_14", 1622, 1014, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_14", 1399, 604, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_14", 2114, 494, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_14", 2153, 882, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_15", 1120, 835, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_15", 1280, 686, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_15", 1369, 909, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_15", 1399, 931, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_15", 1598, 633, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_15", 1649, 604, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_15", 2048, 543, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_15", 2207, 619, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_15", 2183, 697, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_15", 2060, 949, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_15", 1586, 802, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_15", 1967, 913, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_15", 1345, 714, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_14", 1952, 640, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_flowerspot", 1440, 640, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_flowerspot", 1760, 640, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_flowerspot", 1960, 760, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_flowerspot", 1760, 880, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_flowerspot", 1440, 880, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_flowerspot", 1240, 760, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_15", 1795, 757, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_dw_aquaplant_15", 1846, 728, 2, 2, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "TILES_GRASS_DARK",
      t: "T",
      d: 1000125,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_grassdark_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 14,
      items: 1,
      fl: 125000,
      cells: [67, 11, 57, 68, 11, 66, 69, 11, 60, 67, 12, 65, 68, 12, 66, 69, 12, 68, 67, 13, 65, 68, 13, 66, 69, 13, 68, 67, 14, 65, 68, 14, 66, 69, 14, 68, 67, 15, 65, 68, 15, 66, 69, 15, 68, 67, 16, 65, 68, 16, 66, 69, 16, 68, 67, 17, 65, 68, 17, 66, 69, 17, 68, 56, 18, 57, 57, 18, 58, 58, 18, 58, 59, 18, 58, 60, 18, 58, 61, 18, 58, 62, 18, 58, 63, 18, 58, 64, 18, 58, 65, 18, 58, 66, 18, 58, 67, 18, 66, 68, 18, 66, 69, 18, 68, 56, 19, 65, 57, 19, 66, 58, 19, 66, 59, 19, 66, 60, 19, 66, 61, 19, 66, 62, 19, 66, 63, 19, 66, 64, 19, 66, 65, 19, 66, 66, 19, 66, 67, 19, 66, 68, 19, 66, 69, 19, 76]
    }, {
      n: "TILES_GRASS_BRIGHT",
      t: "T",
      d: 1000150,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_soft_cliff_grass_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 14,
      items: 1,
      fl: 125000,
      cells: [67, 11, 66, 68, 11, 66, 69, 11, 66, 67, 12, 66, 68, 12, 66, 69, 12, 66, 67, 13, 66, 68, 13, 66, 69, 13, 66, 67, 14, 66, 68, 14, 66, 69, 14, 66, 67, 15, 66, 68, 15, 66, 69, 15, 66, 67, 16, 66, 68, 16, 66, 69, 16, 66, 67, 17, 66, 68, 17, 66, 69, 17, 66, 6, 18, 57, 7, 18, 57, 8, 18, 57, 9, 18, 57, 10, 18, 57, 11, 18, 57, 12, 18, 57, 13, 18, 57, 14, 18, 57, 15, 18, 57, 16, 18, 57, 17, 18, 57, 18, 18, 57, 19, 18, 57, 20, 18, 57, 21, 18, 57, 22, 18, 57, 23, 18, 57, 24, 18, 57, 25, 18, 57, 26, 18, 57, 27, 18, 57, 56, 18, 57, 57, 18, 57, 58, 18, 57, 59, 18, 57, 60, 18, 57, 61, 18, 57, 62, 18, 57, 63, 18, 57, 64, 18, 57, 65, 18, 57, 66, 18, 57, 67, 18, 73, 68, 18, 66, 69, 18, 66, 6, 19, 73, 7, 19, 73, 8, 19, 73, 9, 19, 73, 10, 19, 73, 11, 19, 73, 12, 19, 73, 13, 19, 73, 14, 19, 73, 15, 19, 73, 16, 19, 73, 17, 19, 73, 18, 19, 73, 19, 19, 73, 20, 19, 73, 21, 19, 73, 22, 19, 73, 23, 19, 73, 24, 19, 73, 25, 19, 73, 26, 19, 73, 27, 19, 73, 56, 19, 73, 57, 19, 73, 58, 19, 73, 59, 19, 73, 60, 19, 73, 61, 19, 73, 62, 19, 73, 63, 19, 73, 64, 19, 73, 65, 19, 73, 66, 19, 73, 67, 19, 73, 68, 19, 66, 69, 19, 66]
    }, {
      n: "TILES_GRASS",
      t: "T",
      d: 1000175,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "bg_dw_grassdark_tileset",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 14,
      items: 1,
      fl: 125000,
      cells: []
    }, {
      n: "TILES",
      t: "T",
      d: 1000200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_cliff_dark_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 21,
      items: 1,
      fl: 66666,
      cells: [4, 6, 1, 5, 6, 1, 6, 6, 1, 7, 6, 1, 8, 6, 1, 9, 6, 1, 10, 6, 1, 11, 6, 1, 12, 6, 1, 13, 6, 1, 14, 6, 1, 15, 6, 1, 16, 6, 1, 17, 6, 1, 18, 6, 1, 19, 6, 1, 20, 6, 1, 21, 6, 1, 22, 6, 1, 23, 6, 1, 24, 6, 1, 25, 6, 1, 26, 6, 1, 27, 6, 1, 28, 6, 1, 29, 6, 1, 30, 6, 1, 31, 6, 1, 23, 7, 1, 24, 7, 1, 25, 7, 1, 26, 7, 1, 27, 7, 1, 28, 7, 1, 29, 7, 1, 30, 7, 1, 31, 7, 1, 23, 8, 1, 24, 8, 1, 25, 8, 1, 26, 8, 1, 27, 8, 1, 28, 8, 1, 29, 8, 1, 30, 8, 1, 31, 8, 1, 23, 9, 3, 24, 9, 3, 25, 9, 3, 26, 9, 3, 27, 9, 3, 28, 9, 3, 29, 9, 3, 30, 9, 3, 31, 9, 3, 23, 10, 3, 24, 10, 3, 25, 10, 3, 26, 10, 3, 27, 10, 3, 28, 10, 3, 29, 10, 3, 30, 10, 3, 31, 10, 3, 23, 11, 3, 24, 11, 3, 25, 11, 3, 26, 11, 3, 27, 11, 3, 28, 11, 3, 29, 11, 3, 30, 11, 3, 31, 11, 3, 6, 19, 137, 7, 19, 137, 8, 19, 137, 9, 19, 137, 10, 19, 137, 11, 19, 137, 12, 19, 137, 13, 19, 137, 14, 19, 137, 15, 19, 137, 16, 19, 137, 17, 19, 137, 18, 19, 137, 19, 19, 137, 20, 19, 137, 21, 19, 137, 22, 19, 137, 23, 19, 137, 24, 19, 137, 25, 19, 137, 26, 19, 137, 27, 19, 137, 56, 19, 137, 57, 19, 137, 58, 19, 137, 59, 19, 137, 60, 19, 137, 61, 19, 137, 62, 19, 137, 63, 19, 137, 64, 19, 137, 65, 19, 137, 66, 19, 137, 67, 19, 137, 68, 19, 137, 69, 19, 137, 6, 20, 126, 7, 20, 127, 8, 20, 126, 9, 20, 126, 10, 20, 127, 11, 20, 126, 12, 20, 127, 13, 20, 126, 14, 20, 127, 15, 20, 126, 16, 20, 127, 17, 20, 126, 18, 20, 127, 19, 20, 126, 20, 20, 126, 21, 20, 127, 22, 20, 126, 23, 20, 127, 24, 20, 126, 25, 20, 127, 26, 20, 126, 27, 20, 127, 56, 20, 126, 57, 20, 127, 58, 20, 126, 59, 20, 127, 60, 20, 126, 61, 20, 127, 62, 20, 126, 63, 20, 127, 64, 20, 126, 65, 20, 127, 66, 20, 126, 67, 20, 126, 68, 20, 127, 69, 20, 127, 6, 21, 141, 7, 21, 141, 8, 21, 141, 9, 21, 141, 10, 21, 141, 11, 21, 141, 12, 21, 141, 13, 21, 141, 14, 21, 141, 15, 21, 141, 16, 21, 141, 17, 21, 141, 18, 21, 141, 19, 21, 141, 20, 21, 141, 21, 21, 141, 22, 21, 141, 23, 21, 141, 24, 21, 141, 25, 21, 141, 26, 21, 141, 27, 21, 141, 56, 21, 141, 57, 21, 141, 58, 21, 141, 59, 21, 141, 60, 21, 141, 61, 21, 141, 62, 21, 141, 63, 21, 141, 64, 21, 141, 65, 21, 141, 66, 21, 141, 67, 21, 141, 68, 21, 141, 69, 21, 141, 6, 22, 141, 7, 22, 141, 8, 22, 141, 9, 22, 141, 10, 22, 141, 11, 22, 141, 12, 22, 141, 13, 22, 141, 14, 22, 141, 15, 22, 141, 16, 22, 141, 17, 22, 141, 18, 22, 141, 19, 22, 141, 20, 22, 141, 21, 22, 141, 22, 22, 141, 23, 22, 141, 24, 22, 141, 25, 22, 141, 26, 22, 141, 27, 22, 141, 56, 22, 141, 57, 22, 141, 58, 22, 141, 59, 22, 141, 60, 22, 141, 61, 22, 141, 62, 22, 141, 63, 22, 141, 64, 22, 141, 65, 22, 141, 66, 22, 141, 67, 22, 141, 68, 22, 141, 69, 22, 141, 6, 23, 141, 7, 23, 141, 8, 23, 141, 9, 23, 141, 10, 23, 141, 11, 23, 141, 12, 23, 141, 13, 23, 141, 14, 23, 141, 15, 23, 141, 16, 23, 141, 17, 23, 141, 18, 23, 141, 19, 23, 141, 20, 23, 141, 21, 23, 141, 22, 23, 141, 23, 23, 141, 24, 23, 141, 25, 23, 141, 26, 23, 141, 27, 23, 141, 56, 23, 141, 57, 23, 141, 58, 23, 141, 59, 23, 141, 60, 23, 141, 61, 23, 141, 62, 23, 141, 63, 23, 141, 64, 23, 141, 65, 23, 141, 66, 23, 141, 67, 23, 141, 68, 23, 141, 69, 23, 141]
    }, {
      n: "BG",
      t: "I",
      d: 1000300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_parallax_cliffs", 18, 125, 1, 1, 0, "spr_newsunset_bg", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch5/room_dw_fcastle_flowerclimb": {
    w: 880,
    h: 13000,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_dw_fcastle_flowerclimb"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "TRIGGERs",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_towery_flowery", 120, 9640, 2, 2, 0, "spr_flowery_fair", true, 0, 0, "FFFFFFFF"], ["obj_towery_flowery", 120, 8480, -2, 2, 0, "spr_flowery_fair", true, 0, 0, "FFFFFFFF"], ["obj_towery_flowery", 120, 7360, 2, 2, 0, "spr_flowery_fair", true, 0, 0, "FFFFFFFF"], ["obj_towery_flowery", 160, 6040, 2, 2, 0, "spr_flowery_fair", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Instances",
      t: "I",
      d: 100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_darkcontroller", 160, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_mainchara", 40, 11840, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_climbstartertrig", 280, 9880, 1, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_rotating_tower_controller_new", 320, 9120, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_climbstarter", 280, 9800, 1, 1, 0, "spr_climbstarter", true, 0, 0, "FFFFFFFF"], ["obj_cloud_controller_new", 0, 12040, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_climb_boostenemy", 0, 9600, 1, 1, 0, "spr_climb_booster", true, 0, 0, "FFFFFFFF"], ["obj_climb_boostenemy", 0, 8400, 1, 1, 0, "spr_climb_booster", true, 0, 0, "FFFFFFFF"], ["obj_climb_boostenemy", 0, 7280, 1, 1, 0, "spr_climb_booster", true, 0, 0, "FFFFFFFF"], ["obj_climb_boostenemy", 0, 5960, 1, 1, 0, "spr_climb_booster", true, 0, 0, "FFFFFFFF"], ["obj_climb_boostenemy", 0, 5480, 1, 1, 0, "spr_climb_booster", true, 0, 0, "FFFFFFFF"], ["obj_climb_boostenemy", 0, 5000, 1, 1, 0, "spr_climb_booster", true, 0, 0, "FFFFFFFF"], ["obj_climb_boostenemy", 0, 4520, 1, 1, 0, "spr_climb_booster", true, 0, 0, "FFFFFFFF"], ["obj_climb_boostenemy", 0, 4040, 1, 1, 0, "spr_climb_booster", true, 0, 0, "FFFFFFFF"], ["obj_climb_boostenemy", 0, 3560, 1, 1, 0, "spr_climb_booster", true, 0, 0, "FFFFFFFF"], ["obj_climb_boostenemy", 0, 3080, 1, 1, 0, "spr_climb_booster", true, 0, 0, "FFFFFFFF"], ["obj_climb_boostenemy", 0, 2600, 1, 1, 0, "spr_climb_booster", true, 0, 0, "FFFFFFFF"], ["obj_climb_boostenemy", 0, 2120, 1, 1, 0, "spr_climb_booster", true, 0, 0, "FFFFFFFF"], ["obj_climb_boostenemy", 0, 1640, 1, 1, 0, "spr_climb_booster", true, 0, 0, "FFFFFFFF"], ["obj_climb_boostenemy", 0, 1160, 1, 1, 0, "spr_climb_booster", true, 0, 0, "FFFFFFFF"], ["obj_climb_boostenemy", 0, 720, 1, 1, 0, "spr_climb_booster", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "CLIMB",
      t: "I",
      d: 200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_climb_climbable", 0, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 40, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", -120, 9600, 25, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 80, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 120, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 160, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 200, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 240, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 280, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 320, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 360, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 400, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 440, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 480, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 520, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 560, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 600, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 640, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 680, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 720, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 760, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 800, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 840, 9680, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 240, 8520, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 400, 8640, 1, 2, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 360, 8840, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 400, 8840, 1, 2, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 440, 8640, 1, 7, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 480, 8640, 1, 7, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 200, 8520, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 280, 8640, 1, 2, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 320, 8640, 1, 2, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 360, 8640, 1, 2, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", -120, 8400, 25, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", -120, 7280, 25, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 160, 7640, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 200, 7600, 1, 3, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 520, 7560, 1, 3, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 600, 7400, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 280, 7560, 1, 3, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 240, 7560, 1, 3, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 320, 7560, 1, 2, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 360, 7560, 1, 3, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 400, 7560, 1, 4, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 440, 7640, 1, 2, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 480, 7600, 1, 3, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 560, 7520, 1, 3, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", -120, 5960, 25, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 360, 6440, 1, 8, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 320, 6440, 1, 2, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 240, 6200, 1, 2, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 240, 6400, 1, 3, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 280, 6400, 1, 3, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 200, 6360, 1, 2, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 120, 6400, 1, 3, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 160, 6360, 1, 4, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 160, 6200, 1, 2, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 200, 6200, 1, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 120, 6200, 1, 2, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 80, 6200, 1, 8, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 320, 6080, 1, 5, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 280, 6240, 1, 1, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"], ["obj_climb_climbable", 0, 200, 22, 6, 0, "spr_climb_climbabletile", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "TILING_ZONES",
      t: "I",
      d: 300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "TOWER",
      t: "I",
      d: 1500000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_flowery_towery", 320, 0, 1, 1, 0, "spr_fcastle_tower_flower_big", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "Background",
      t: "B",
      d: 1500100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  },
  "ch5/room_dw_cliff_sethaqua_battle": {
    w: 880,
    h: 1440,
    col: "FF000000",
    drawbg: false,
    hit: ["obj_dw_cliff_sethaqua_battle"],
    views: [[0, 0, 640, 480, null]],
    layers: [{
      n: "CUTSCENE_POSITIONS",
      t: "A",
      d: -900,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_aqua_walk_down", 504, 692, 2, 2, "FFFFFFFF", 0, 0, 0], ["spr_seth_battle", 564, 680, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_debug_krmarker", 540, 760, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_debug_sumarker", 486, 780, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_debug_ramarker", 588, 780, 2, 2, "FFFFFFFF", 0, 1, 0], ["spr_aqua_walk_down", 540, 700, 2, 2, "FF0000FF", 0, 0, 0], ["spr_aqua_walk_down", 540, 780, 2, 2, "FF00FFFF", 0, 0, 0]]
    }, {
      n: "CUTSCENE_CAMERAS",
      t: "A",
      d: -800,
      v: false,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_debug_cameraregionpreview", 240, 440, 20, 20, "FFFFFFFF", 0, 1, 0]]
    }, {
      n: "DEBUG",
      t: "A",
      d: -700,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "SHADOWCUT_LAYER",
      t: "A",
      d: -600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "NPCs",
      t: "A",
      d: -500,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "ZONES",
      t: "I",
      d: -400,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "COLLISION_PLAT",
      t: "I",
      d: -300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_plat_floor", 80, 804, 18, 1, 0, "spr_plat_thinplat", true, 0, 0, "FFFFFFFF"], ["obj_plat_floor", 0, 1200, 16, 1, 0, "spr_plat_thinplat", true, 0, 0, "FFFFFFFF"], ["obj_plat_block", 800, 0, 2, 36, 0, "spr_plat_grid", true, 0, 0, "FFFFFFFF"], ["obj_plat_block", 0, 0, 2, 26, 0, "spr_plat_grid", true, 0, 0, "FFFFFFFF"], ["obj_plat_block", 120, 320, 6, 2, 0, "spr_plat_grid", true, 0, 0, "FFFFFFFF"], ["obj_plat_block", 520, 440, 2, 2, 0, "spr_plat_grid", true, 0, 0, "FFFFFFFF"], ["obj_plat_block", 400, 560, 2, 2, 0, "spr_plat_grid", true, 0, 0, "FFFFFFFF"], ["obj_plat_block", 240, 680, 2, 3, 0, "spr_plat_grid", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "INSTANCES_FLOORTEX",
      t: "I",
      d: -200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_plat_floortex_FRONT", 0, 840, 5, 3.75, 0, "spr_plat_floortex_FRONT", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FRONT", 0, 1280, 4, 1, 0, "spr_plat_floortex_FRONT", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FRONT", 240, 680, 0.5, 0.75, 0, "spr_plat_floortex_FRONT", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FRONT", 400, 560, 0.5, 0.75, 0, "spr_plat_floortex_FRONT", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FRONT", 520, 440, 0.5, 0.5, 0, "spr_plat_floortex_FRONT", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FRONT", 120, 320, 1.5, 0.5, 0, "spr_plat_floortex_FRONT", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FLOOR_AlignBottom1TILE", 0, 1260, 4, 0.5, 0, "spr_floortex_TILES_AlignBottom1TILE", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FLOOR_AlignBottom1TILE", 80, 810, 4.5, 0.75, 0, "spr_floortex_TILES_AlignBottom1TILE", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FLOOR_AlignBottom1TILE", 240, 660, 0.5, 0.5, 0, "spr_floortex_TILES_AlignBottom1TILE", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FLOOR_AlignBottom1TILE", 400, 540, 0.5, 0.5, 0, "spr_floortex_TILES_AlignBottom1TILE", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FLOOR_AlignBottom1TILE", 520, 420, 0.5, 0.5, 0, "spr_floortex_TILES_AlignBottom1TILE", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FLOOR_AlignBottom1TILE", 120, 300, 1.5, 0.5, 0, "spr_floortex_TILES_AlignBottom1TILE", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FRONT", 600, -80, 1.25, 1, 0, "spr_plat_floortex_FRONT", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FLOOR_AlignBottom1TILE", 600, -100, 1.25, 0.5, 0, "spr_floortex_TILES_AlignBottom1TILE", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "BGFLOORTEX",
      t: "I",
      d: -100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_plat_floortex_FRONT", 80, -200, 4.5, 7, 0, "spr_plat_floortex_FRONT", true, 0, 0, "FFFFFFFF"], ["obj_plat_floortex_FLOOR_AlignBottom1TILE", 440, -220, 1.5, 0.5, 0, "spr_floortex_TILES_AlignBottom1TILE", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "OBJECTS_MAIN",
      t: "I",
      d: 0,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      inst: [["obj_darkcontroller", 0, 0, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_mainchara", 12, 1178, 2, 2, 0, "spr_krisd", true, 0, 0, "FFFFFFFF"], ["obj_platswap", -125, 190, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_plat_game", -200, 160, 1, 1, 0, "-", true, 0, 0, "FFFFFFFF"], ["obj_platswap_statue", 160, 760, 2, 2, 0, "spr_platswap_statue", true, 0, 0, "FFFFFFFF"], ["obj_platswap_statue", 160, 280, 2, 2, 0, "spr_platswap_statue", true, 0, 0, "FFFFFFFF"], ["obj_parallax_cliffs", -380, 1080, 1, 1, 0, "spr_newsunset_bg", true, 0, 0, "FFFFFFFF"], ["obj_plat_pinatabell", 698, 78, 2, 2, 0, "spr_plat_bell", true, 0, 0, "FFFFFFFF"]]
    }, {
      n: "SHADOWS",
      t: "I",
      d: 30000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "COLLISION_DOOR",
      t: "I",
      d: 1000000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "PLAT_ASSETS",
      t: "A",
      d: 1000100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      spr: [["spr_dw_dappled_light_overlay", 1080, 40, 1, 1, "FF0000FF", 0, 1, 0]]
    }, {
      n: "TILES_FORE",
      t: "T",
      d: 1000200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_cliff_dark_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 21,
      items: 1,
      fl: 66666,
      cells: [0, 0, 321, 1, 0, 322, 20, 0, 319, 21, 0, 320, 0, 1, 321, 1, 1, 322, 20, 1, 319, 21, 1, 320, 0, 2, 321, 1, 2, 322, 20, 2, 319, 21, 2, 320, 0, 3, 321, 1, 3, 322, 20, 3, 319, 21, 3, 320, 0, 4, 321, 1, 4, 322, 20, 4, 319, 21, 4, 320, 0, 5, 321, 1, 5, 322, 20, 5, 319, 21, 5, 320, 0, 6, 321, 1, 6, 322, 20, 6, 319, 21, 6, 320, 0, 7, 321, 1, 7, 322, 20, 7, 319, 21, 7, 320, 0, 8, 321, 1, 8, 322, 20, 8, 319, 21, 8, 320, 0, 9, 321, 1, 9, 322, 20, 9, 319, 21, 9, 320, 0, 10, 321, 1, 10, 322, 20, 10, 319, 21, 10, 320, 0, 11, 321, 1, 11, 322, 20, 11, 319, 21, 11, 320, 0, 12, 321, 1, 12, 322, 20, 12, 319, 21, 12, 320, 0, 13, 321, 1, 13, 322, 20, 13, 319, 21, 13, 320, 0, 14, 321, 1, 14, 322, 20, 14, 319, 21, 14, 320, 0, 15, 321, 1, 15, 322, 20, 15, 319, 21, 15, 320, 0, 16, 321, 1, 16, 322, 20, 16, 319, 21, 16, 320, 0, 17, 321, 1, 17, 322, 20, 17, 319, 21, 17, 320, 0, 18, 321, 1, 18, 322, 20, 18, 319, 21, 18, 320, 0, 19, 321, 1, 19, 322, 20, 19, 319, 21, 19, 320, 0, 20, 321, 1, 20, 322, 20, 20, 319, 21, 20, 320, 0, 21, 321, 1, 21, 322, 20, 21, 319, 21, 21, 320, 0, 22, 321, 1, 22, 322, 20, 22, 319, 21, 22, 320, 0, 23, 321, 1, 23, 322, 20, 23, 319, 21, 23, 320, 0, 24, 321, 1, 24, 322, 20, 24, 319, 21, 24, 320, 0, 25, 1073742146, 1, 25, 268435790, 20, 25, 319, 21, 25, 320, 20, 26, 319, 21, 26, 320, 20, 27, 319, 21, 27, 320, 20, 28, 319, 21, 28, 320, 20, 29, 319, 21, 29, 320, 20, 30, 319, 21, 30, 320, 20, 31, 319, 21, 31, 320, 20, 32, 319, 21, 32, 320, 20, 33, 319, 21, 33, 320, 20, 34, 319, 21, 34, 320, 20, 35, 319, 21, 35, 320]
    }, {
      n: "TILES_FORE_FILL",
      t: "T",
      d: 1000300,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_cliff_dark_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 21,
      items: 1,
      fl: 66666,
      cells: [1, 0, 137, 20, 0, 137, 1, 1, 137, 20, 1, 137, 1, 2, 137, 20, 2, 137, 1, 3, 137, 20, 3, 137, 1, 4, 137, 20, 4, 137, 1, 5, 137, 20, 5, 137, 1, 6, 137, 20, 6, 137, 1, 7, 137, 20, 7, 137, 1, 8, 137, 20, 8, 137, 1, 9, 137, 20, 9, 137, 1, 10, 137, 20, 10, 137, 1, 11, 137, 20, 11, 137, 1, 12, 137, 20, 12, 137, 1, 13, 137, 20, 13, 137, 1, 14, 137, 20, 14, 137, 1, 15, 137, 20, 15, 137, 1, 16, 137, 20, 16, 137, 1, 17, 137, 20, 17, 137, 1, 18, 137, 20, 18, 137, 1, 19, 137, 20, 19, 137, 1, 20, 137, 20, 20, 137, 1, 21, 137, 20, 21, 137, 1, 22, 137, 20, 22, 137, 1, 23, 137, 20, 23, 137, 1, 24, 137, 20, 24, 137, 20, 25, 137, 20, 26, 137, 20, 27, 137, 20, 28, 137, 20, 29, 137, 20, 30, 137, 20, 31, 137, 20, 32, 137, 20, 33, 137, 20, 34, 137, 20, 35, 137]
    }, {
      n: "TILES_BRICKS_DECO",
      t: "T",
      d: 10005000,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_cliff_dark_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 21,
      items: 1,
      fl: 66666,
      cells: [2, 1, 218, 17, 14, 218, 10, 20, 249, 10, 21, 264, 16, 21, 246, 17, 21, 247, 2, 22, 246, 3, 22, 247, 10, 22, 246, 11, 22, 247, 16, 22, 261, 17, 22, 262, 2, 23, 261, 3, 23, 262, 10, 23, 261, 11, 23, 262, 16, 23, 249, 11, 24, 249, 16, 24, 264, 17, 24, 245, 2, 25, 805306630, 3, 25, 805306629, 4, 25, 245, 11, 25, 264, 16, 25, 248, 17, 25, 260, 2, 26, 805306615, 3, 26, 805306614, 4, 26, 260, 5, 26, 249, 11, 26, 245, 16, 26, 263, 5, 27, 264, 11, 27, 260, 9, 28, 245, 18, 28, 245, 9, 29, 260, 18, 29, 260]
    }, {
      n: "TILES_GRASS",
      t: "T",
      d: 10005100,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_cliff_dark_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 21,
      items: 1,
      fl: 66666,
      cells: [3, 6, 80, 4, 6, 81, 5, 6, 96, 6, 6, 96, 7, 6, 96, 8, 6, 98, 3, 7, 110, 4, 7, 111, 5, 7, 111, 6, 7, 111, 7, 7, 111, 8, 7, 113, 13, 9, 80, 14, 9, 83, 13, 10, 110, 14, 10, 113, 10, 12, 80, 11, 12, 83, 10, 13, 110, 11, 13, 113, 6, 15, 75, 7, 15, 78, 6, 16, 105, 7, 16, 108, 2, 18, 81, 3, 18, 77, 4, 18, 77, 5, 18, 77, 8, 18, 77, 9, 18, 81, 10, 18, 77, 11, 18, 77, 12, 18, 81, 13, 18, 77, 14, 18, 77, 15, 18, 81, 16, 18, 81, 17, 18, 81, 18, 18, 81, 19, 18, 81, 2, 19, 96, 3, 19, 91, 4, 19, 91, 5, 19, 91, 8, 19, 92, 9, 19, 97, 10, 19, 91, 11, 19, 92, 12, 19, 96, 13, 19, 91, 14, 19, 92, 15, 19, 97, 16, 19, 96, 17, 19, 97, 18, 19, 96, 19, 19, 97, 2, 20, 111, 3, 20, 112, 4, 20, 111, 5, 20, 112, 6, 20, 111, 7, 20, 112, 8, 20, 111, 9, 20, 112, 10, 20, 111, 11, 20, 112, 12, 20, 111, 13, 20, 112, 14, 20, 111, 15, 20, 112, 16, 20, 111, 17, 20, 112, 18, 20, 111, 19, 20, 112, 0, 30, 81, 1, 30, 82, 2, 30, 81, 3, 30, 82, 4, 30, 81, 5, 30, 82, 6, 30, 81, 7, 30, 82, 8, 30, 81, 9, 30, 82, 10, 30, 81, 11, 30, 82, 12, 30, 96, 13, 30, 96, 14, 30, 96, 15, 30, 98, 0, 31, 111, 1, 31, 112, 2, 31, 111, 3, 31, 112, 4, 31, 111, 5, 31, 112, 6, 31, 111, 7, 31, 112, 8, 31, 111, 9, 31, 112, 10, 31, 111, 11, 31, 112, 12, 31, 111, 13, 31, 112, 14, 31, 111, 15, 31, 113]
    }, {
      n: "TILES_BRICKS",
      t: "T",
      d: 10005200,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_flowercastle_exterior_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 15,
      items: 1,
      fl: 66666,
      cells: [15, 0, 65, 16, 0, 66, 17, 0, 66, 18, 0, 66, 19, 0, 66, 15, 1, 536870969, 16, 1, 536870970, 17, 1, 536870970, 18, 1, 536870970, 19, 1, 536870970, 5, 6, 67, 8, 6, 65, 3, 8, 57, 4, 8, 58, 5, 8, 58, 6, 8, 58, 7, 8, 58, 8, 8, 59, 3, 9, 536870969, 4, 9, 536870970, 5, 9, 536870970, 6, 9, 536870970, 7, 9, 536870970, 8, 9, 536870971, 13, 11, 57, 14, 11, 59, 13, 12, 536870969, 14, 12, 536870971, 10, 14, 57, 11, 14, 59, 10, 15, 536870969, 11, 15, 536870971, 6, 17, 57, 7, 17, 59, 6, 18, 65, 7, 18, 67, 10, 18, 49, 6, 19, 65, 7, 19, 67, 12, 21, 73, 13, 21, 74, 14, 21, 74, 15, 21, 75, 12, 22, 73, 13, 22, 74, 14, 22, 74, 15, 22, 75, 12, 23, 73, 13, 23, 74, 14, 23, 74, 15, 23, 75, 12, 24, 73, 13, 24, 74, 14, 24, 74, 15, 24, 75, 12, 25, 73, 13, 25, 74, 14, 25, 74, 15, 25, 75, 12, 26, 73, 13, 26, 74, 14, 26, 74, 15, 26, 75, 12, 27, 73, 13, 27, 74, 14, 27, 74, 15, 27, 75, 12, 28, 73, 13, 28, 74, 14, 28, 74, 15, 28, 75, 12, 29, 73, 13, 29, 74, 14, 29, 74, 15, 29, 75]
    }, {
      n: "TILES_WALL_BACK",
      t: "T",
      d: 10005300,
      v: true,
      xo: 0,
      yo: -200,
      hs: 0,
      vs: 0,
      ts: "tiles_flowercastle_exterior_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 15,
      items: 1,
      fl: 66666,
      cells: [2, 0, 65, 3, 0, 66, 4, 0, 67, 5, 0, 81, 6, 0, 74, 7, 0, 74, 8, 0, 83, 9, 0, 65, 10, 0, 66, 11, 0, 85, 12, 0, 66, 13, 0, 66, 14, 0, 66, 15, 0, 66, 16, 0, 66, 17, 0, 85, 18, 0, 66, 19, 0, 67, 2, 1, 65, 3, 1, 66, 4, 1, 67, 5, 1, 73, 6, 1, 74, 7, 1, 74, 8, 1, 75, 9, 1, 65, 10, 1, 66, 11, 1, 109, 12, 1, 66, 13, 1, 66, 14, 1, 66, 15, 1, 66, 16, 1, 66, 17, 1, 109, 18, 1, 66, 19, 1, 67, 2, 2, 65, 3, 2, 66, 4, 2, 67, 5, 2, 81, 6, 2, 74, 7, 2, 74, 8, 2, 83, 9, 2, 65, 10, 2, 66, 11, 2, 101, 12, 2, 66, 13, 2, 66, 14, 2, 66, 15, 2, 66, 16, 2, 66, 17, 2, 101, 18, 2, 66, 19, 2, 67, 2, 3, 65, 3, 3, 66, 4, 3, 67, 5, 3, 73, 6, 3, 74, 7, 3, 74, 8, 3, 75, 9, 3, 65, 10, 3, 66, 11, 3, 109, 12, 3, 66, 13, 3, 66, 14, 3, 66, 15, 3, 66, 16, 3, 66, 17, 3, 109, 18, 3, 66, 19, 3, 67, 2, 4, 65, 3, 4, 66, 4, 4, 67, 5, 4, 81, 6, 4, 74, 7, 4, 74, 8, 4, 83, 9, 4, 65, 10, 4, 66, 11, 4, 85, 12, 4, 66, 13, 4, 66, 14, 4, 66, 15, 4, 66, 16, 4, 66, 17, 4, 85, 18, 4, 66, 19, 4, 67, 2, 5, 65, 3, 5, 66, 4, 5, 67, 5, 5, 73, 6, 5, 74, 7, 5, 74, 8, 5, 75, 9, 5, 65, 10, 5, 66, 11, 5, 109, 12, 5, 66, 13, 5, 66, 14, 5, 66, 15, 5, 66, 16, 5, 66, 17, 5, 109, 18, 5, 66, 19, 5, 67, 2, 6, 65, 3, 6, 66, 4, 6, 67, 5, 6, 73, 6, 6, 74, 7, 6, 74, 8, 6, 75, 9, 6, 65, 10, 6, 66, 11, 6, 101, 12, 6, 66, 13, 6, 66, 14, 6, 66, 15, 6, 66, 16, 6, 66, 17, 6, 101, 18, 6, 66, 19, 6, 67, 2, 7, 65, 3, 7, 66, 4, 7, 67, 5, 7, 73, 6, 7, 74, 7, 7, 74, 8, 7, 75, 9, 7, 65, 10, 7, 66, 11, 7, 109, 12, 7, 66, 13, 7, 66, 14, 7, 66, 15, 7, 66, 16, 7, 66, 17, 7, 109, 18, 7, 66, 19, 7, 67, 2, 8, 65, 3, 8, 66, 4, 8, 67, 5, 8, 73, 6, 8, 74, 7, 8, 74, 8, 8, 75, 9, 8, 65, 10, 8, 66, 11, 8, 101, 12, 8, 66, 13, 8, 66, 14, 8, 66, 15, 8, 66, 16, 8, 66, 17, 8, 101, 18, 8, 66, 19, 8, 67, 2, 9, 65, 3, 9, 66, 4, 9, 67, 5, 9, 73, 6, 9, 74, 7, 9, 74, 8, 9, 75, 9, 9, 65, 10, 9, 66, 11, 9, 109, 12, 9, 66, 13, 9, 66, 14, 9, 66, 15, 9, 66, 16, 9, 66, 17, 9, 109, 18, 9, 66, 19, 9, 67, 2, 10, 65, 3, 10, 66, 4, 10, 67, 5, 10, 81, 6, 10, 82, 7, 10, 82, 8, 10, 83, 9, 10, 65, 10, 10, 66, 11, 10, 85, 12, 10, 66, 13, 10, 66, 14, 10, 66, 15, 10, 66, 16, 10, 66, 17, 10, 85, 18, 10, 66, 19, 10, 67, 2, 11, 65, 3, 11, 66, 4, 11, 66, 5, 11, 67, 6, 11, 66, 7, 11, 66, 8, 11, 65, 9, 11, 66, 10, 11, 66, 11, 11, 109, 12, 11, 66, 13, 11, 66, 14, 11, 66, 15, 11, 66, 16, 11, 66, 17, 11, 109, 18, 11, 66, 19, 11, 67, 2, 12, 65, 3, 12, 66, 4, 12, 66, 5, 12, 66, 6, 12, 66, 7, 12, 66, 8, 12, 66, 9, 12, 66, 10, 12, 66, 11, 12, 101, 12, 12, 66, 13, 12, 66, 14, 12, 66, 15, 12, 66, 16, 12, 66, 17, 12, 101, 18, 12, 66, 19, 12, 67, 2, 13, 65, 3, 13, 66, 4, 13, 66, 5, 13, 66, 6, 13, 66, 7, 13, 66, 8, 13, 66, 9, 13, 66, 10, 13, 66, 11, 13, 109, 12, 13, 66, 13, 13, 66, 14, 13, 66, 15, 13, 66, 16, 13, 66, 17, 13, 109, 18, 13, 66, 19, 13, 67, 2, 14, 65, 3, 14, 66, 4, 14, 66, 5, 14, 66, 6, 14, 66, 7, 14, 66, 8, 14, 66, 9, 14, 66, 10, 14, 66, 11, 14, 85, 12, 14, 66, 13, 14, 66, 14, 14, 66, 15, 14, 66, 16, 14, 66, 17, 14, 85, 18, 14, 66, 19, 14, 67, 2, 15, 65, 3, 15, 66, 4, 15, 66, 5, 15, 66, 6, 15, 66, 7, 15, 66, 8, 15, 66, 9, 15, 66, 10, 15, 66, 11, 15, 109, 12, 15, 66, 13, 15, 66, 14, 15, 66, 15, 15, 66, 16, 15, 66, 17, 15, 109, 18, 15, 66, 19, 15, 67, 1, 16, 137, 2, 16, 65, 3, 16, 66, 4, 16, 66, 5, 16, 66, 6, 16, 66, 7, 16, 66, 8, 16, 66, 9, 16, 66, 10, 16, 66, 11, 16, 101, 12, 16, 66, 13, 16, 66, 14, 16, 66, 15, 16, 66, 16, 16, 66, 17, 16, 101, 18, 16, 66, 19, 16, 67, 1, 17, 137, 2, 17, 65, 3, 17, 66, 4, 17, 66, 5, 17, 66, 6, 17, 66, 7, 17, 66, 8, 17, 66, 9, 17, 66, 10, 17, 66, 11, 17, 109, 12, 17, 66, 13, 17, 66, 14, 17, 66, 15, 17, 66, 16, 17, 66, 17, 17, 109, 18, 17, 66, 19, 17, 67, 1, 18, 137, 2, 18, 65, 3, 18, 66, 4, 18, 66, 5, 18, 66, 6, 18, 66, 7, 18, 66, 8, 18, 66, 9, 18, 66, 10, 18, 66, 11, 18, 85, 12, 18, 66, 13, 18, 66, 14, 18, 66, 15, 18, 66, 16, 18, 66, 17, 18, 85, 18, 18, 66, 19, 18, 67, 1, 19, 137, 2, 19, 65, 3, 19, 66, 4, 19, 66, 5, 19, 66, 6, 19, 66, 7, 19, 66, 8, 19, 66, 9, 19, 66, 10, 19, 66, 11, 19, 109, 12, 19, 66, 13, 19, 66, 14, 19, 66, 15, 19, 66, 16, 19, 66, 17, 19, 109, 18, 19, 66, 19, 19, 67, 2, 20, 65, 3, 20, 66, 4, 20, 66, 5, 20, 66, 6, 20, 66, 7, 20, 66, 8, 20, 66, 9, 20, 66, 10, 20, 66, 11, 20, 101, 12, 20, 66, 13, 20, 66, 14, 20, 66, 15, 20, 66, 16, 20, 66, 17, 20, 101, 18, 20, 66, 19, 20, 67, 2, 21, 65, 3, 21, 66, 4, 21, 66, 5, 21, 66, 6, 21, 66, 7, 21, 66, 8, 21, 66, 9, 21, 66, 10, 21, 66, 11, 21, 109, 12, 21, 66, 13, 21, 66, 14, 21, 66, 15, 21, 66, 16, 21, 66, 17, 21, 109, 18, 21, 66, 19, 21, 67, 2, 22, 65, 3, 22, 66, 4, 22, 66, 5, 22, 66, 6, 22, 66, 7, 22, 66, 8, 22, 66, 9, 22, 66, 10, 22, 66, 11, 22, 101, 12, 22, 66, 13, 22, 66, 14, 22, 66, 15, 22, 66, 16, 22, 66, 17, 22, 101, 18, 22, 66, 19, 22, 67, 2, 23, 65, 3, 23, 66, 4, 23, 66, 5, 23, 66, 6, 23, 66, 7, 23, 66, 8, 23, 66, 9, 23, 66, 10, 23, 66, 11, 23, 109, 12, 23, 66, 13, 23, 66, 14, 23, 66, 15, 23, 66, 16, 23, 66, 17, 23, 109, 18, 23, 66, 19, 23, 67, 2, 24, 65, 3, 24, 66, 4, 24, 66, 5, 24, 66, 6, 24, 66, 7, 24, 66, 8, 24, 66, 9, 24, 66, 10, 24, 66, 11, 24, 66, 12, 24, 66, 13, 24, 66, 14, 24, 66, 15, 24, 66, 16, 24, 66, 17, 24, 66, 18, 24, 66, 19, 24, 67]
    }, {
      n: "TILES_BRICKS_FRONT_DECO",
      t: "T",
      d: 10005400,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_cliff_dark_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 21,
      items: 1,
      fl: 66666,
      cells: [1, 32, 246, 2, 32, 247, 9, 32, 249, 0, 33, 273, 1, 33, 261, 2, 33, 262, 4, 33, 273, 5, 33, 248, 9, 33, 264, 10, 33, 248, 14, 33, 243, 15, 33, 244, 1, 34, 243, 2, 34, 244, 4, 34, 249, 5, 34, 263, 10, 34, 263, 14, 34, 258, 15, 34, 259, 1, 35, 258, 2, 35, 259, 4, 35, 264, 11, 35, 261, 12, 35, 262, 14, 35, 1073742088, 15, 35, 1073742073]
    }, {
      n: "TILES_BRICKS_FRONT",
      t: "T",
      d: 10005500,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_cliff_dark_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 21,
      items: 1,
      fl: 66666,
      cells: [0, 32, 127, 1, 32, 127, 2, 32, 127, 3, 32, 127, 4, 32, 127, 5, 32, 127, 6, 32, 127, 7, 32, 127, 8, 32, 127, 9, 32, 127, 10, 32, 127, 11, 32, 127, 12, 32, 127, 13, 32, 127, 14, 32, 127, 15, 32, 128, 0, 33, 142, 1, 33, 142, 2, 33, 142, 3, 33, 142, 4, 33, 142, 5, 33, 142, 6, 33, 142, 7, 33, 142, 8, 33, 142, 9, 33, 142, 10, 33, 142, 11, 33, 142, 12, 33, 142, 13, 33, 142, 14, 33, 142, 15, 33, 143, 0, 34, 142, 1, 34, 142, 2, 34, 142, 3, 34, 142, 4, 34, 142, 5, 34, 142, 6, 34, 142, 7, 34, 142, 8, 34, 142, 9, 34, 142, 10, 34, 142, 11, 34, 142, 12, 34, 142, 13, 34, 142, 14, 34, 142, 15, 34, 143, 0, 35, 142, 1, 35, 142, 2, 35, 142, 3, 35, 142, 4, 35, 142, 5, 35, 142, 6, 35, 142, 7, 35, 142, 8, 35, 142, 9, 35, 142, 10, 35, 142, 11, 35, 142, 12, 35, 142, 13, 35, 142, 14, 35, 142, 15, 35, 143]
    }, {
      n: "TILES_BRICKS2",
      t: "T",
      d: 10005600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      ts: "tiles_cliff_dark_new",
      tw: 40,
      th: 40,
      bx: 2,
      by: 2,
      cols: 21,
      items: 1,
      fl: 66666,
      cells: [0, 15, 137, 0, 16, 137, 0, 17, 137, 0, 18, 137, 0, 19, 137, 0, 20, 137, 1, 20, 137, 0, 21, 137, 1, 21, 137, 2, 21, 121, 3, 21, 122, 4, 21, 121, 5, 21, 122, 6, 21, 121, 7, 21, 122, 8, 21, 121, 9, 21, 122, 10, 21, 121, 11, 21, 122, 16, 21, 121, 17, 21, 122, 18, 21, 121, 19, 21, 122, 0, 22, 137, 1, 22, 137, 2, 22, 136, 3, 22, 136, 4, 22, 136, 5, 22, 136, 6, 22, 136, 7, 22, 136, 8, 22, 136, 9, 22, 136, 10, 22, 136, 11, 22, 136, 16, 22, 136, 17, 22, 136, 18, 22, 136, 19, 22, 136, 0, 23, 137, 1, 23, 137, 2, 23, 136, 3, 23, 136, 4, 23, 136, 5, 23, 136, 6, 23, 136, 7, 23, 136, 8, 23, 136, 9, 23, 136, 10, 23, 136, 11, 23, 136, 16, 23, 136, 17, 23, 136, 18, 23, 136, 19, 23, 136, 0, 24, 137, 1, 24, 137, 2, 24, 136, 3, 24, 136, 4, 24, 136, 5, 24, 136, 6, 24, 136, 7, 24, 136, 8, 24, 136, 9, 24, 136, 10, 24, 136, 11, 24, 136, 16, 24, 136, 17, 24, 136, 18, 24, 136, 19, 24, 136, 1, 25, 197, 2, 25, 198, 3, 25, 150, 4, 25, 151, 5, 25, 136, 6, 25, 136, 7, 25, 136, 8, 25, 136, 9, 25, 136, 10, 25, 136, 11, 25, 136, 16, 25, 136, 17, 25, 136, 18, 25, 136, 19, 25, 136, 1, 26, 212, 2, 26, 213, 3, 26, 165, 4, 26, 166, 5, 26, 136, 6, 26, 136, 7, 26, 136, 8, 26, 136, 9, 26, 136, 10, 26, 136, 11, 26, 136, 16, 26, 136, 17, 26, 136, 18, 26, 136, 19, 26, 136, 3, 27, 180, 4, 27, 181, 5, 27, 197, 6, 27, 198, 7, 27, 150, 8, 27, 151, 9, 27, 136, 10, 27, 136, 11, 27, 136, 16, 27, 136, 17, 27, 136, 18, 27, 136, 19, 27, 136, 5, 28, 212, 6, 28, 213, 7, 28, 165, 8, 28, 166, 9, 28, 136, 10, 28, 136, 11, 28, 136, 16, 28, 136, 17, 28, 136, 18, 28, 136, 19, 28, 136, 7, 29, 180, 8, 29, 181, 9, 29, 136, 10, 29, 136, 11, 29, 136, 16, 29, 136, 17, 29, 136, 18, 29, 136, 19, 29, 216, 16, 30, 136, 17, 30, 136, 18, 30, 216, 19, 30, 216, 8, 31, 253, 16, 31, 216, 17, 31, 216, 18, 31, 216, 19, 31, 216, 20, 31, 101, 16, 32, 216, 17, 32, 216, 18, 32, 216, 19, 32, 216, 20, 32, 101, 16, 33, 216, 17, 33, 216, 18, 33, 216, 19, 33, 216, 20, 33, 101, 16, 34, 216, 17, 34, 216, 18, 34, 216, 19, 34, 216, 20, 34, 116, 16, 35, 216, 17, 35, 216, 18, 35, 137, 19, 35, 216, 20, 35, 131, 21, 35, 131]
    }, {
      n: "FCASTLE_BRICKS",
      t: "A",
      d: 10005700,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0
    }, {
      n: "BGCOLOR",
      t: "B",
      d: 2147483600,
      v: true,
      xo: 0,
      yo: 0,
      hs: 0,
      vs: 0,
      bg: [null, true, false, false, false, false, "FF000000", 0, 15, "FPS"]
    }],
    rtiles: []
  }
};
var t = typeof process !== "undefined" && !!process.versions && !!process.versions.node;
var g = typeof globalThis !== "undefined" && globalThis.__ROOM_ASSET_BASE || (t ? "sim/assets/" : "assets/");
var X = new Map();
function roomImage(O) {
  let OG = X.get(O);
  if (!OG) {
    OG = null;
    try {
      if (typeof Image !== "undefined") {
        OG = new Image();
        OG.src = g + "rooms/" + O;
      }
    } catch {
      OG = null;
    }
    X.set(O, OG);
  }
  return OG;
}
I(roomImage, "roomImage");
var ready = I(O => !!O && !!O.complete && !!(O.width > 0), "ready");
function tilesetImage(O, c) {
  return roomImage(O + "/tiles/" + c + ".png");
}
I(tilesetImage, "tilesetImage");
var p = new Map();
function roomSprite(O, c) {
  let Om = O + "/" + c;
  if (p.has(Om)) {
    return p.get(Om);
  }
  let Ox = null;
  let Ou = n[O] && n[O][c];
  if (Ou) {
    let [Od, ON, OZ, OF, OR] = Ou;
    Ox = {
      w: Od,
      h: ON,
      ox: OZ,
      oy: OF,
      frames: OR,
      frame: Oy => {
        let OE = roomImage(O + "/spr/" + c + "_" + (Oy % OR + OR) % OR + ".png");
        if (ready(OE)) {
          return OE;
        } else {
          return null;
        }
      }
    };
  } else {
    let Oy = R[c];
    if (Oy && Oy.img) {
      Ox = {
        w: Oy.w,
        h: Oy.h,
        ox: Oy.ox,
        oy: Oy.oy,
        frames: Oy.frames,
        frame: OD => {
          let Ob = Oy.img[(Math.floor(OD) % Oy.frames + Oy.frames) % Oy.frames];
          if (Ob && Ob.width) {
            return Ob;
          } else {
            return null;
          }
        }
      };
    }
  }
  p.set(Om, Ox);
  return Ox;
}
I(roomSprite, "roomSprite");
function abgr(O) {
  let Om = parseInt(O, 16) >>> 0;
  return {
    a: (Om >>> 24 & 255) / 255,
    css: "rgb(" + (Om & 255) + "," + (Om >>> 8 & 255) + "," + (Om >>> 16 & 255) + ")",
    white: (Om & 16777215) === 16777215
  };
}
I(abgr, "abgr");
var q = new Map();
function tintedImage(O, c) {
  const Oc = {
    YeJOD: function (Od, ON) {
      return Od > ON;
    },
    MPfXZ: function (Od, ON) {
      return Od === ON;
    }
  };
  Oc.urcaR = "NvHsK";
  Oc.QiaQg = "canvas";
  Oc.YPATS = "multiply";
  Oc.ugeJn = "destination-in";
  const Om = Oc;
  if (!O || Om.YeJOD(typeof document, "u") || !document.createElement) {
    return O;
  }
  let Ox = q.get(O);
  if (!Ox) {
    Ox = new Map();
    q.set(O, Ox);
  }
  let OG = Ox.get(c);
  if (!OG) {
    if (Om.MPfXZ(Om.urcaR, Om.urcaR)) {
      OG = document.createElement(Om.QiaQg);
      if (!OG || !OG.getContext) {
        return O;
      }
      OG.width = O.width;
      OG.height = O.height;
      let Od = OG.getContext("2d");
      if (!Od || !Od.drawImage) {
        return O;
      }
      Od.drawImage(O, 0, 0);
      Od.globalCompositeOperation = Om.YPATS;
      Od.fillStyle = c;
      Od.fillRect(0, 0, O.width, O.height);
      Od.globalCompositeOperation = Om.ugeJn;
      Od.drawImage(O, 0, 0);
      Ox.set(c, OG);
    } else {
      obj_parallaxer_mansion.save();
      O9.globalAlpha = tiledArea.a;
      if (Oc) {
        Om.drawImage(Ox, Ou, OG, this.roomw, this.roomh);
      } else {
        let ON = OL ? (Ow % OM.w + Oz.w) % Oh.w - Oe.w : On;
        let OZ = OU ? (Ov % OW.h + Ot.h) % Og.h - OX.h : OS;
        for (let OF = OZ; OF < (Oq ? 480 : OZ + 1); OF += OY.h) {
          for (let OR = ON; OR < (c2 ? 640 : ON + 1); OR += c3.w) {
            c4.drawImage(c5, OR, OF);
          }
        }
      }
      Or.restore();
    }
  }
  return OG;
}
I(tintedImage, "tintedImage");
var obj_jokerbg_triangle_real = class cG extends D {
  create() {
    Object.assign(this, {
      siner: 0,
      rot: 0,
      xcen: 320,
      ycen: 240,
      radius: 360,
      bgx: 0,
      rotcounter: 0,
      rotfps: 1,
      rotspeed: 0,
      on: 0,
      bgalpha: 0,
      trimax: 8,
      blackon: 0
    });
    this.dkblue = b(V.navy, V.dkgray, 0.1);
    this.dkblue2 = b(V.navy, V.dkgray, 0.5);
    this.dkblue3 = b(b(V.navy, V.dkgray, 0.5), V.black, 0.2);
  }
  tri(O) {
    let c = this.radius;
    let Oc = this.trimax;
    this.newx1 = i(c, this.rot + 360 / Oc * O);
    this.newy1 = T(c / 2, this.rot + 360 / Oc * O);
    this.newx2 = i(c, this.rot + 360 / Oc * (O + 1));
    this.newy2 = T(c / 2, this.rot + 360 / Oc * (O + 1));
    if (this.newy1 <= 0) {
      this.newy1 *= 0.6;
    }
    if (this.newy2 <= 0) {
      this.newy2 *= 0.6;
    }
    if (this.blackon === 0) {
      this.col = this.dkblue;
      this.blackon = 1;
    } else {
      this.blackon = 0;
      this.col = this.dkblue2;
    }
  }
  draw(O) {
    this.blackon = 0;
    let c = O.ctx;
    let Oc = R.spr_carouselbg;
    let Om = 0;
    let Ox = 0 + this.bgx;
    if (this.bgx >= 640) {
      this.bgx -= 640;
    }
    let Ou = 1;
    let OG = 0;
    let OC = 5;
    if (this.on === 1) {
      if (this.bgalpha < 1) {
        this.bgalpha += 0.02;
      }
    } else if (this.bgalpha > 0) {
      this.bgalpha -= 0.02;
    }
    if (Oc && this.bgalpha > 0) {
      let OZ = O.tinted(Oc, 0, this.dkblue3);
      c.globalAlpha = Math.min(1, this.bgalpha);
      for (let OF = 0; OF < 16; OF++) {
        c.drawImage(OZ, Ox, 0, OC, 300, Om, -OF, OC * Ou, 300);
        OG = 1 + OF * 0.5;
        Ou = a(OG);
        Ox += 5;
        if (Ox >= 640) {
          Ox -= 640;
        }
        OC = 5;
        Om += Ou * 5 - 5;
      }
      for (let OR = 16; OR > 0; OR--) {
        c.drawImage(OZ, Ox, 0, OC, 380, Om, -OR, OC * Ou, 380);
        OG = 1 + OR * 0.5;
        if (OG < 1) {
          OG = 1;
        }
        Ou = k(OG);
        Ox += 5;
        if (Ox >= 640) {
          Ox -= 640;
        }
        OC = 5;
        Om += Ou * 5 - 5;
      }
      c.globalAlpha = 1;
    }
    let Ol = (Oy, OD, OK, OV, OE, Ob) => {
      c.fillStyle = this.col;
      c.beginPath();
      c.moveTo(Oy, OD);
      c.lineTo(OK, OV);
      c.lineTo(OE, Ob);
      c.closePath();
      c.fill();
    };
    let Od = this.xcen;
    let ON = this.ycen;
    for (let Oy = 0; Oy < this.trimax; Oy++) {
      this.tri(Oy);
      Ol(Od, ON, Od + this.newx1, ON + this.newy1, Od + this.newx2, ON + this.newy2);
    }
    for (let OD = 0; OD < 8; OD++) {
      this.tri(OD);
      if ((this.newy1 > 0 || this.newy2 > 0) && this.newx2 > this.newx1 - 48) {
        Ol(Od, ON - 80, Od + this.newx1 / 6, ON + this.newy1 / 6, Od + this.newx2 / 6, ON + this.newy2 / 6);
      }
    }
    for (let OK = 8; OK >= 0; OK--) {
      this.tri(OK);
      if (this.newy1 > 0 || this.newy2 > 0) {
        Ol(Od, ON - 80, Od + this.newx1 / 4, ON + this.newy1 - 380, Od + this.newx2 / 4, ON + this.newy2 - 380);
      }
    }
    for (let OV = 0; OV < this.trimax; OV++) {
      this.tri(OV);
      Ol(Od, ON - 320, Od + this.newx1, ON + this.newy1 - 320, Od + this.newx2, ON + this.newy2 - 320);
    }
    this.siner += 2;
    if (this.on === 1) {
      this.rotcounter++;
    }
    if (this.rotcounter >= this.rotfps && this.on === 1) {
      if (this.on === 1 && this.rotspeed < 1) {
        this.rotspeed += 0.1;
      }
      this.bgx += this.rotfps * 1 * (Z.bgSpeed ?? 1);
      this.rot += this.rotfps * 2.5 * this.rotspeed * (Z.bgSpeed ?? 1);
      this.rotcounter = 0;
    }
  }
};
I(obj_jokerbg_triangle_real, "obj_jokerbg_triangle_real");
r(obj_jokerbg_triangle_real, "kinds", K("obj_jokerbg_triangle_real", D));
r(obj_jokerbg_triangle_real, "defaultDepth", 600000);
var J = obj_jokerbg_triangle_real;
var obj_roombg = class cC extends D {
  create() {
    this.img = null;
    this.ox = 0;
    this.oy = 0;
  }
  draw(O) {
    if (this.img && this.img.complete) {
      O.ctx.drawImage(this.img, -this.ox, -this.oy);
    }
  }
};
I(obj_roombg, "obj_roombg");
r(obj_roombg, "kinds", K("obj_roombg", D));
r(obj_roombg, "defaultDepth", 700000);
var O0 = obj_roombg;
var obj_roomtiles = class cl extends D {
  create() {
    this.tiles = [];
    this.viewx = 0;
    this.viewy = 0;
    this.roombg = null;
  }
  draw(O) {
    let c = O.ctx;
    if (this.roombg) {
      c.save();
      c.fillStyle = this.roombg;
      c.fillRect(0, 0, 640, 480);
      c.restore();
    }
    for (let [Oc, Om, Ox, Ou, OG, OC, Ol,, Od, ON] of this.tiles) {
      let OZ = Om - this.viewx;
      let OF = Ox - this.viewy;
      if (!(OZ > 640) && !(OF > 480) && !(OZ + OC * Od < 0) && !(OF + Ol * ON < 0)) {
        O.draw_sprite_part_ext(Oc, 0, Ou, OG, OC, Ol, OZ, OF, Od, ON, V.white, 1);
      }
    }
  }
};
I(obj_roomtiles, "obj_roomtiles");
r(obj_roomtiles, "kinds", K("obj_roomtiles", D));
r(obj_roomtiles, "defaultDepth", 1000000);
var O2 = obj_roomtiles;
var obj_roomlayer = class cd extends D {
  create() {
    this.layer = null;
    this.ch = "ch2";
    this.viewx = 0;
    this.viewy = 0;
    this.roomw = 640;
    this.roomh = 480;
    this.t = 0;
    this.visible = true;
    this._cells = null;
  }
  step() {
    this.t++;
  }
  draw(O) {
    let c = this.layer;
    if (!c || !this.visible) {
      return;
    }
    let Oc = O.ctx;
    if (!Oc || typeof Oc.drawImage != "function") {
      return;
    }
    let Om = (c.xo || 0) + (c.hs || 0) * this.t - this.viewx;
    let Ox = (c.yo || 0) + (c.vs || 0) * this.t - this.viewy;
    if (c.t === "T" && c.cells) {
      this.drawTiles(Oc, c, Om, Ox);
    } else if (c.t === "B" && c.bg) {
      this.drawBg(Oc, c, Om, Ox);
    } else if (c.t === "A") {
      this.drawAssets(Oc, c, Om, Ox);
    }
  }
  drawTiles(O, c, Oc, Om) {
    let Ox = tilesetImage(this.ch, c.ts);
    if (!ready(Ox)) {
      return;
    }
    let {
      tw: Ou,
      th: OG,
      bx: OC,
      by: Ol,
      cols: Od
    } = c;
    let ON = Ou + OC * 2;
    let OZ = OG + Ol * 2;
    let OF = c.items > 1 && c.anim && c.fl > 0 ? Math.floor(this.t * 1000000 / 30 / c.fl) % c.items : 0;
    let OR = c.cells;
    for (let Oy = 0; Oy < OR.length; Oy += 3) {
      let OD = OR[Oy] * Ou + Oc;
      let OK = OR[Oy + 1] * OG + Om;
      if (OD >= 640 || OK >= 480 || OD + Ou <= 0 || OK + OG <= 0) {
        continue;
      }
      let OV = OR[Oy + 2];
      let OE = OV & 524287;
      if (OF && c.anim) {
        OE = c.anim[OE * c.items + OF] ?? OE;
      }
      let Ob = OE % Od * ON + OC;
      let Oi = Math.floor(OE / Od) * OZ + Ol;
      if (!(OV & 1879048192)) {
        O.drawImage(Ox, Ob, Oi, Ou, OG, OD, OK, Ou, OG);
        continue;
      }
      O.save();
      O.translate(OD + Ou / 2, OK + OG / 2);
      if (OV & 1073741824) {
        O.rotate(Math.PI / 2);
      }
      O.scale(OV & 268435456 ? -1 : 1, OV & 536870912 ? -1 : 1);
      O.drawImage(Ox, Ob, Oi, Ou, OG, -Ou / 2, -OG / 2, Ou, OG);
      O.restore();
    }
  }
  drawBg(O, c, Oc, Om) {
    let [Ox, Ou,, OG, OC, Ol, Od, ON, OZ, OF] = c.bg;
    if (!Ou) {
      return;
    }
    let OR = abgr(Od);
    if (!Ox) {
      if (OR.a > 0) {
        O.save();
        O.globalAlpha = OR.a;
        O.fillStyle = OR.css;
        O.fillRect(0, 0, 640, 480);
        O.restore();
      }
      return;
    }
    let Oy = roomSprite(this.ch, Ox);
    if (!Oy) {
      return;
    }
    let OD = (ON || 0) + Math.floor(this.t * (OZ || 0) / (OF === "FPS" ? 30 : 1));
    let OK = Oy.frame(OD);
    if (OK) {
      O.save();
      O.globalAlpha = OR.a;
      if (Ol) {
        O.drawImage(OK, Oc, Om, this.roomw, this.roomh);
      } else {
        let OV = OG ? (Oc % Oy.w + Oy.w) % Oy.w - Oy.w : Oc;
        let OE = OC ? (Om % Oy.h + Oy.h) % Oy.h - Oy.h : Om;
        for (let Ob = OE; Ob < (OC ? 480 : OE + 1); Ob += Oy.h) {
          for (let Oi = OV; Oi < (OG ? 640 : OV + 1); Oi += Oy.w) {
            O.drawImage(OK, Oi, Ob);
          }
        }
      }
      O.restore();
    }
  }
  drawAssets(O, c, Oc, Om) {
    for (let [Ox, Ou, OG, OC, Ol, Od, ON, OZ, OF] of c.spr || []) {
      let OR = roomSprite(this.ch, Ox);
      if (!OR) {
        continue;
      }
      let Oy = OR.frame((ON || 0) + Math.floor(this.t * (OZ || 0) / 30));
      if (!Oy) {
        continue;
      }
      let OD = abgr(Od);
      if (!OD.white) {
        Oy = tintedImage(Oy, OD.css);
      }
      O.save();
      O.globalAlpha = OD.a;
      O.translate(Ou + Oc, OG + Om);
      if (OF) {
        O.rotate(-OF * Math.PI / 180);
      }
      O.scale(OC, Ol);
      O.drawImage(Oy, -OR.ox, -OR.oy);
      O.restore();
    }
    for (let [OK, OV, OE, Ob, Oi, OA, OT,, Ok, Oa] of c.lt || []) {
      let OP = roomSprite(this.ch, OK);
      let OI = OP && OP.frame(0);
      if (OI) {
        O.drawImage(OI, Ob, Oi, OA, OT, OV + Oc, OE + Om, OA * Ok, OT * Oa);
      }
    }
  }
};
I(obj_roomlayer, "obj_roomlayer");
r(obj_roomlayer, "kinds", K("obj_roomlayer", D));
r(obj_roomlayer, "defaultDepth", 1000000);
var O4 = obj_roomlayer;
var obj_battleback = class cN extends D {
  create() {
    this.siner = 0;
    this.siner2 = 0;
    this.image_alpha = 0;
    this.destroy = 0;
    this.pattern = null;
  }
  draw(O) {
    let c = O.ctx;
    this.siner += 0.5;
    this.siner2 += 1;
    c.save();
    c.globalAlpha = Math.min(1, this.image_alpha);
    c.fillStyle = "#000";
    c.fillRect(-10, -10, 660, 500);
    c.globalAlpha = 1;
    if (this.destroy === 0 && this.image_alpha <= 1) {
      this.image_alpha += 0.1;
    }
    if (N === "room_dw_castle_dojo") {
      c.restore();
      O.draw_sprite_ext("spr_dojo_battlebg", 0, 320, 340, 2 + Math.sin(this.siner / 2) * 0.008, 2 + Math.cos(this.siner / 2) * 0.008, 0, 16777215, Math.min(1, this.image_alpha));
      if (this.siner >= 100) {
        this.siner -= 100;
      }
      if (this.siner2 >= 100) {
        this.siner2 -= 100;
      }
      if (this.destroy === 1) {
        this.image_alpha -= 0.1;
        if (this.image_alpha <= 0) {
          this.instance_destroy();
        }
      }
      return;
    }
    let Oc = R.bg_battleback1;
    if (Oc && Oc.img && Oc.img[0]) {
      this.pattern ||= c.createPattern(Oc.img[0], "repeat");
      let Om = (Ox, Ou, OG) => {
        if (!(OG <= 0)) {
          c.globalAlpha = Math.min(1, OG);
          c.fillStyle = this.pattern;
          c.translate(Math.round(Ox), Math.round(Ou));
          c.fillRect(-Math.round(Ox) - 10, -Math.round(Ou) - 10, 660, 500);
          c.translate(-Math.round(Ox), -Math.round(Ou));
        }
      };
      Om(-100 + this.siner, -100 + this.siner, this.image_alpha / 2);
      Om(-200 - this.siner2, -210 - this.siner2, this.image_alpha);
    }
    c.globalAlpha = 1;
    c.restore();
    if (this.siner >= 100) {
      this.siner -= 100;
    }
    if (this.siner2 >= 100) {
      this.siner2 -= 100;
    }
    if (this.destroy === 1) {
      this.image_alpha -= 0.1;
      if (this.image_alpha <= 0) {
        this.instance_destroy();
      }
    }
  }
};
I(obj_battleback, "obj_battleback");
r(obj_battleback, "kinds", K("obj_battleback", D));
r(obj_battleback, "defaultDepth", 700000);
var O6 = obj_battleback;
var O7 = [600, 0];
var obj_parallaxer_mansion = class cZ extends D {
  create() {
    this.drawx = 0;
    this.drawy = 0;
    this.x_offset = 0;
    this.y_offset = -200;
    this.roomw = 1840;
    this.viewx = O7[0];
    this.viewy = O7[1];
  }
  draw(O) {
    let c = O.ctx;
    c.save();
    c.fillStyle = "rgb(2,2,29)";
    c.fillRect(0, 0, 640, 480);
    c.restore();
    this.drawx = this.viewx * -0.125 + this.xstart;
    let Oc = this.drawx + this.x_offset - this.viewx;
    let Om = this.drawy - this.viewy;
    tiledArea(O, "spr_mansion_ferris_wheel_bg", 0, Oc, this.drawy + this.y_offset - this.viewy, Oc, Om, this.roomw - this.viewx, this.drawy + this.y_offset - this.viewy + 480);
  }
};
I(obj_parallaxer_mansion, "obj_parallaxer_mansion");
r(obj_parallaxer_mansion, "kinds", K("obj_parallaxer_mansion", D));
r(obj_parallaxer_mansion, "defaultDepth", 1000300);
var O9 = obj_parallaxer_mansion;
function tiledArea(O, Oc, Om, Ox, Ou, OG, OC, Ol, Od) {
  let ON = R[Oc];
  let OZ = ON ? ON.w : 0;
  let OF = ON ? ON.h : 0;
  if (!OZ || !OF) {
    return;
  }
  let OR = OG - (OG % OZ - Ox % OZ) - OZ * (OG % OZ < Ox % OZ);
  let Oy = OC - (OC % OF - Ou % OF) - OF * (OC % OF < Ou % OF);
  let OD = Oy;
  while (OR <= Ol) {
    while (OD <= Od) {
      let OK = OR <= OG ? OG - OR : 0;
      let OV = OR + OK;
      let OE = OD <= OC ? OC - OD : 0;
      let Ob = OD + OE;
      let Oi = Ol <= OR + OZ ? OZ - (OR + OZ - Ol) + 1 - OK : OZ - OK;
      let OA = Od <= OD + OF ? OF - (OD + OF - Od) + 1 - OE : OF - OE;
      O.draw_sprite_part_ext(Oc, Om, OK, OE, Oi, OA, OV, Ob, 1, 1, V.white, 1);
      OD += OF;
    }
    OD = Oy;
    OR += OZ;
  }
}
I(tiledArea, "tiledArea");
export { U as a, roomSprite as b, J as c, O0 as d, O2 as e, O4 as f, O6 as g, O9 as h };
