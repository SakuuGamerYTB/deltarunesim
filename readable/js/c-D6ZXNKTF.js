const n = function () {
  ;
  let lU = true;
  return function (lM, lm) {
    const lJ = lU ? function () {
      if (lm) {
        const lW = lm.apply(lM, arguments);
        lm = null;
        return lW;
      }
    } : function () {};
    lU = false;
    return lJ;
  };
}();
import { b as J } from "./c-YJJCI5ES.js";
import { $ as V, $a as p, $b as x, $c as l, A as d, Aa as X, Ab as g, Ac as instance_place, B as Y, Ba as b, Bb as i, Bc as r, C as S, Ca as k, Cb as h, Cc as u, D as v, Da as f, Db as c, Dc as R, E as D, Ea as audio_play_sound, Eb as j, Ec as G, F as y, Fa as z, Fb as E0, Fc as E1, G as E2, Ga as E3, Gb as E4, Gc as E5, H as E6, Ha as E7, Hb as E8, Hc as E9, I as EE, Ia as EI, Ib as EN, Ic as EU, J as EM, Ja as Em, Jb as EJ, Jc as EW, K as EV, Ka as Ex, Kb as ET, Kc as EZ, L as sprite_get_number, La as EL, Lb as EX, Lc as Eg, M as EQ, Ma as EO, Mb as Eq, Mc as EY, N as Eb, Na as EF, Nb as ES, Nc as Ew, O as Ek, Oa as Eh, Ob as EH, Oc as EA, P as Ev, Pa as Ef, Pb as EB, Pc as ER, Q as EP, Qa as ED, Qb as EC, Qc as Ej, R as EG, Ra as Ey, Rb as Ez, Rc as I0, S as I1, Sa as I2, Sb as I3, Sc as I4, T as I5, Ta as I6, Tb as I7, Tc as I8, U as I9, Ua as IE, Ub as II, Uc as draw_arrow, V as IN, Va as audio_is_playing, Vb as IM, Vc as Im, W as IJ, Wa as audio_sound_get_track_position, Wb as audio_sound_gain, Wc as Ix, X as IT, Xa as audio_sound_set_track_position, Xb as IK, Xc as sprite_create_from_surface, Y as IX, Ya as Ig, Yb as IQ, Yc as sprite_delete, Z as Iq, Za as IY, Zb as Ib, Zc as scr_84_get_font, _ as IS, _a as Iw, _b as Ik, _c as scr_84_set_draw_font, a as IH, aa as IA, ab as Iv, ac as If, ad as IB, b as IR, ba as IP, bb as ID, bc as IC, bd as Ij, c as IG, ca as Iy, cb as Iz, cc as e0, d as e1, da as e2, db as e3, dc as e4, e as e5, ea as e6, eb as e7, ec as e8, f as e9, fa as eE, fb as eI, fc as ea, g as eN, ga as eU, gb as eM, gc as em, h as eJ, ha as eW, hb as eV, hc as ex, i as eT, ia as eZ, ib as eK, ic as eL, j as eX, ja as eg, jb as eQ, jc as eO, k as eq, ka as eY, kb as eb, kc as eF, l as eS, la as ew, lb as ek, lc as draw_set_fog, m as eH, ma as eA, mb as ev, mc as eB, n as eR, na as eP, nb as eD, nc as eC, o as ej, oa as eG, ob as ey, oc as ez, p as t0, pa as t1, pb as t2, pc as t3, q as t4, qa as t5, qb as instance_create, r as t7, ra as t8, rb as instance_exists, rc as tE, s as tI, sa as tN, sb as instance_number, sc as tM, t as tm, ta as tJ, tb as tW, tc as tV, u as tx, ua as tT, ub as tZ, uc as tK, v as tL, va as tX, vb as tg, vc as tQ, w as tO, wa as tq, wb as tY, wc as tb, x as tF, xa as tS, xb as tw, xc as tk, y as th, ya as tH, yb as tA, yc as tv, z as tB, za as tR, zb as tP, zc as tD } from "./c-FMIAGHDE.js";
import { a as tC, c as tj, i as tG, l as ty } from "./c-PIEPTJTC.js";
var tz = {};
tj(tz, {
  AR: () => aA,
  ActiveMod: () => D,
  AlarmStats: () => e5,
  AppSurface: () => c,
  AudioTap: () => k,
  ColorStats: () => e1,
  CreateFailures: () => ey,
  CrossChapterIndex: () => eK,
  CurrentChapter: () => Y,
  DEG: () => IR,
  FIRST: () => FIRST,
  FontIndex: () => EX,
  Fonts: () => EH,
  FrameHooks: () => j,
  GID: () => GID,
  GMB: () => tB,
  Gfx: () => EC,
  GmlParents: () => tv,
  INST: () => INST,
  Input: () => Eb,
  Inst: () => IY,
  KeyEventStats: () => V,
  METHOD_BOUND: () => xN,
  MusFresh: () => Ef,
  MusTrackProto: () => Eh,
  OBJREF: () => Iv,
  ObjectIndex: () => eM,
  PathResources: () => r,
  Perf: () => tw,
  Recorder: () => l,
  Rng: () => eT,
  RoomHost: () => N9,
  SETALL: () => SETALL,
  SUPERSAMPLE: () => t1,
  Sandbox: () => t5,
  SegStats: () => tA,
  SoulTap: () => tE,
  Sounds: () => tN,
  SpriteIndex: () => d,
  Sprites: () => EE,
  VK_SLOT: () => I1,
  World: () => eI,
  __background_set: () => __background_set,
  __ini: () => VI,
  abs: () => tL,
  adoptMedia: () => Ik,
  alarm_get: () => alarm_get,
  alarm_set: () => alarm_set,
  aliasKind: () => e7,
  angle_difference: () => t7,
  animcurve_channel_evaluate: () => animcurve_channel_evaluate,
  animcurve_get_channel: () => animcurve_get_channel,
  application_surface: () => mh,
  applyBlend: () => applyBlend,
  arccos: () => Mb,
  arcsin: () => MY,
  arctan: () => MF,
  arctan2: () => MS,
  array_create: () => array_create,
  array_delete: () => array_delete,
  array_get: () => array_get,
  array_insert: () => array_insert,
  array_length: () => array_length,
  array_length_1d: () => array_length_1d,
  array_pop: () => array_pop,
  array_push: () => array_push,
  array_resize: () => array_resize,
  array_set: () => array_set,
  array_sort: () => array_sort,
  asset_get_index: () => asset_get_index,
  asset_get_type: () => asset_get_type,
  audioEnabled: () => tS,
  audio_exists: () => audio_exists,
  audio_falloff_set_model: () => audio_falloff_set_model,
  audio_get_name: () => audio_get_name,
  audio_group_set_gain: () => audio_group_set_gain,
  audio_is_paused: () => audio_is_paused,
  audio_is_playing: () => audio_is_playing,
  audio_listener_orientation: () => audio_listener_orientation,
  audio_listener_position: () => audio_listener_position,
  audio_pause_sound: () => audio_pause_sound,
  audio_play_sound: () => audio_play_sound,
  audio_play_sound_at: () => audio_play_sound_at,
  audio_resume_sound: () => audio_resume_sound,
  audio_set_master_gain: () => audio_set_master_gain,
  audio_sound_gain: () => audio_sound_gain,
  audio_sound_get_gain: () => audio_sound_get_gain,
  audio_sound_get_pitch: () => audio_sound_get_pitch,
  audio_sound_get_track_position: () => audio_sound_get_track_position,
  audio_sound_length: () => audio_sound_length,
  audio_sound_pitch: () => audio_sound_pitch,
  audio_sound_set_track_position: () => audio_sound_set_track_position,
  audio_stop_all: () => audio_stop_all,
  bboxOf: () => tW,
  bindGmlGlobals: () => IT,
  bindKey: () => Ev,
  buffer_async_group_begin: () => buffer_async_group_begin,
  buffer_async_group_end: () => buffer_async_group_end,
  buffer_async_group_option: () => buffer_async_group_option,
  buffer_create: () => buffer_create,
  buffer_get_size: () => buffer_get_size,
  buffer_save_async: () => buffer_save_async,
  buffer_write: () => buffer_write,
  button1_h: () => e6,
  button1_p: () => IP,
  button2_h: () => eE,
  button2_p: () => Iy,
  button3_h: () => eU,
  button3_p: () => e2,
  c: () => IG,
  camera_get_view_height: () => camera_get_view_height,
  camera_get_view_target: () => camera_get_view_target,
  camera_get_view_width: () => camera_get_view_width,
  camera_get_view_x: () => camera_get_view_x,
  camera_get_view_y: () => camera_get_view_y,
  camera_set_view_pos: () => camera_set_view_pos,
  camera_set_view_target: () => camera_set_view_target,
  ceil: () => tm,
  choose: () => eH,
  chr: () => chr,
  clamp: () => th,
  clamp01: () => clamp01,
  classByName: () => eD,
  classForIndex: () => ek,
  clearSlot: () => EP,
  collides: () => tg,
  collision_circle: () => tQ,
  collision_ellipse: () => tb,
  collision_line: () => tk,
  collision_line_list: () => collision_line_list,
  collision_point: () => tK,
  collision_rectangle: () => tM,
  collision_rectangle_list: () => tV,
  color_get_blue: () => color_get_blue,
  color_get_green: () => color_get_green,
  color_get_red: () => color_get_red,
  colour_get_blue: () => VV,
  colour_get_green: () => VW,
  colour_get_red: () => VJ,
  cos: () => tF,
  cpuFrame: () => EB,
  cssColor: () => e9,
  curG: () => i,
  currentBlend: () => currentBlend,
  current_time: () => nX,
  d3d_set_fog: () => eO,
  darctan2: () => darctan2,
  date_current_datetime: () => date_current_datetime,
  dcos: () => dcos,
  debug_print: () => debug_print,
  degtorad: () => degtorad,
  delta_time: () => nL,
  display_get_gui_height: () => display_get_gui_height,
  display_get_gui_width: () => display_get_gui_width,
  display_get_height: () => display_get_height,
  distanceToBox: () => tZ,
  distance_to_object: () => distance_to_object,
  distance_to_point: () => distance_to_point,
  dot_product: () => dot_product,
  down_h: () => eG,
  down_p: () => eY,
  drawFailureList: () => E8,
  drawSeg: () => g,
  draw_arrow: () => draw_arrow,
  draw_circle_color: () => draw_circle_color,
  draw_circle_colour: () => draw_circle_colour,
  draw_clear: () => draw_clear,
  draw_clear_alpha: () => draw_clear_alpha,
  draw_ellipse: () => draw_ellipse,
  draw_ellipse_color: () => draw_ellipse_color,
  draw_ellipse_colour: () => draw_ellipse_colour,
  draw_get_alpha: () => draw_get_alpha,
  draw_get_color: () => draw_get_color,
  draw_get_colour: () => draw_get_colour,
  draw_get_font: () => draw_get_font,
  draw_get_halign: () => draw_get_halign,
  draw_get_valign: () => draw_get_valign,
  draw_line_color: () => draw_line_color,
  draw_line_colour: () => draw_line_colour,
  draw_line_width_color: () => draw_line_width_color,
  draw_line_width_colour: () => draw_line_width_colour,
  draw_monster_body_part: () => draw_monster_body_part,
  draw_monster_body_part_ext: () => draw_monster_body_part_ext,
  draw_path: () => draw_path,
  draw_point: () => draw_point,
  draw_point_color: () => draw_point_color,
  draw_point_colour: () => draw_point_colour,
  draw_primitive_begin: () => draw_primitive_begin,
  draw_primitive_begin_texture: () => draw_primitive_begin_texture,
  draw_primitive_end: () => draw_primitive_end,
  draw_rectangle_color: () => draw_rectangle_color,
  draw_rectangle_colour: () => draw_rectangle_colour,
  draw_roundrect: () => draw_roundrect,
  draw_roundrect_color: () => draw_roundrect_color,
  draw_roundrect_color_ext: () => draw_roundrect_color_ext,
  draw_roundrect_colour: () => draw_roundrect_colour,
  draw_roundrect_colour_ext: () => draw_roundrect_colour_ext,
  draw_roundrect_ext: () => draw_roundrect_ext,
  draw_set_blend_mode: () => draw_set_blend_mode,
  draw_set_blend_mode_ext: () => draw_set_blend_mode_ext,
  draw_set_fog: () => draw_set_fog,
  draw_set_halign: () => draw_set_halign,
  draw_set_valign: () => draw_set_valign,
  draw_sprite_ext_centerscale: () => draw_sprite_ext_centerscale,
  draw_sprite_ext_flash: () => draw_sprite_ext_flash,
  draw_sprite_general: () => draw_sprite_general,
  draw_sprite_part: () => draw_sprite_part,
  draw_sprite_pos: () => draw_sprite_pos,
  draw_sprite_stretched_ext: () => draw_sprite_stretched_ext,
  draw_sprite_tiled: () => draw_sprite_tiled,
  draw_sprite_tiled_ext: () => draw_sprite_tiled_ext,
  draw_surface: () => draw_surface,
  draw_surface_ext: () => draw_surface_ext,
  draw_surface_general: () => draw_surface_general,
  draw_surface_part: () => draw_surface_part,
  draw_surface_part_ext: () => draw_surface_part_ext,
  draw_surface_stretched: () => draw_surface_stretched,
  draw_text_ext: () => draw_text_ext,
  draw_text_ext_transformed: () => draw_text_ext_transformed,
  draw_text_ext_transformed_color: () => draw_text_ext_transformed_color,
  draw_text_ext_transformed_colour: () => draw_text_ext_transformed_colour,
  draw_text_transformed_color: () => draw_text_transformed_color,
  draw_text_transformed_colour: () => draw_text_transformed_colour,
  draw_tilemap: () => draw_tilemap,
  draw_triangle_color: () => draw_triangle_color,
  draw_triangle_colour: () => draw_triangle_colour,
  draw_vertex: () => draw_vertex,
  draw_vertex_color: () => draw_vertex_color,
  draw_vertex_colour: () => draw_vertex_colour,
  draw_vertex_texture: () => draw_vertex_texture,
  draw_vertex_texture_color: () => draw_vertex_texture_color,
  draw_vertex_texture_colour: () => draw_vertex_texture_colour,
  ds_exists: () => ds_exists,
  ds_grid_create: () => ds_grid_create,
  ds_grid_destroy: () => ds_grid_destroy,
  ds_list_add: () => ds_list_add,
  ds_list_clear: () => ds_list_clear,
  ds_list_copy: () => ds_list_copy,
  ds_list_create: () => ds_list_create,
  ds_list_delete: () => ds_list_delete,
  ds_list_destroy: () => ds_list_destroy,
  ds_list_find_index: () => ds_list_find_index,
  ds_list_find_value: () => ds_list_find_value,
  ds_list_insert: () => ds_list_insert,
  ds_list_read: () => ds_list_read,
  ds_list_replace: () => ds_list_replace,
  ds_list_set: () => ds_list_set,
  ds_list_shuffle: () => ds_list_shuffle,
  ds_list_size: () => ds_list_size,
  ds_list_sort: () => ds_list_sort,
  ds_list_write: () => ds_list_write,
  ds_map_add: () => ds_map_add,
  ds_map_create: () => ds_map_create,
  ds_map_destroy: () => ds_map_destroy,
  ds_map_exists: () => ds_map_exists,
  ds_map_find_value: () => ds_map_find_value,
  ds_map_set: () => ds_map_set,
  ds_map_set_post: () => ds_map_set_post,
  ds_priority_create: () => ds_priority_create,
  ds_priority_destroy: () => ds_priority_destroy,
  ds_queue_create: () => ds_queue_create,
  ds_queue_destroy: () => ds_queue_destroy,
  ds_stack_create: () => ds_stack_create,
  ds_stack_destroy: () => ds_stack_destroy,
  dsin: () => dsin,
  enable_loading: () => enable_loading,
  engineCounters: () => Im,
  ensureApplicationSurface: () => ensureApplicationSurface,
  environment_get_variable: () => environment_get_variable,
  event_inherited: () => event_inherited,
  event_perform: () => event_perform,
  exp: () => MA,
  file_delete: () => file_delete,
  file_exists: () => file_exists,
  file_text_close: () => file_text_close,
  file_text_open_append: () => file_text_open_append,
  file_text_open_read: () => file_text_open_read,
  file_text_open_write: () => file_text_open_write,
  file_text_read_real: () => file_text_read_real,
  file_text_read_string: () => file_text_read_string,
  file_text_readln: () => file_text_readln,
  file_text_write_real: () => file_text_write_real,
  file_text_write_string: () => file_text_write_string,
  file_text_writeln: () => file_text_writeln,
  floor: () => tx,
  fontNameForIndex: () => ES,
  fps: () => nM,
  fps_real: () => nm,
  frac: () => frac,
  gainRampTick: () => IK,
  game_end: () => game_end,
  game_restart: () => game_restart,
  gamepad_axis_value: () => gamepad_axis_value,
  gamepad_button_check: () => gamepad_button_check,
  gamepad_button_check_pressed: () => gamepad_button_check_pressed,
  gamepad_button_check_released: () => gamepad_button_check_released,
  get_string: () => get_string,
  get_timer: () => get_timer,
  gpu_get_blendmode: () => gpu_get_blendmode,
  gpu_get_tex_repeat: () => gpu_get_tex_repeat,
  gpu_set_alphatestenable: () => eC,
  gpu_set_alphatestref: () => t3,
  gpu_set_blendenable: () => ez,
  gpu_set_blendmode: () => gpu_set_blendmode,
  gpu_set_blendmode_ext: () => NF,
  gpu_set_blendmode_ext_sepalpha: () => gpu_set_blendmode_ext_sepalpha,
  gpu_set_colorwriteenable: () => gpu_set_colorwriteenable,
  gpu_set_colourwriteenable: () => gpu_set_colourwriteenable,
  gpu_set_fog: () => eF,
  gpu_set_tex_repeat: () => gpu_set_tex_repeat,
  gpu_set_texfilter: () => gpu_set_texfilter,
  i_ex: () => i_ex,
  indexOverlay: () => eb,
  ini_close: () => ini_close,
  ini_open: () => ini_open,
  ini_open_from_string: () => ini_open_from_string,
  ini_read_real: () => ini_read_real,
  ini_read_string: () => ini_read_string,
  ini_write_real: () => ini_write_real,
  ini_write_string: () => ini_write_string,
  initInput: () => I5,
  inputBeginFrame: () => IN,
  inputEndFrame: () => IJ,
  instByIndex: () => ev,
  instFailureList: () => EN,
  instance_activate_all: () => instance_activate_all,
  instance_activate_object: () => instance_activate_object,
  instance_activate_region: () => instance_activate_region,
  instance_create: () => instance_create,
  instance_create_depth: () => instance_create_depth,
  instance_deactivate_all: () => instance_deactivate_all,
  instance_deactivate_layer: () => instance_deactivate_layer,
  instance_deactivate_object: () => instance_deactivate_object,
  instance_deactivate_region: () => instance_deactivate_region,
  instance_exists: () => instance_exists,
  instance_find: () => instance_find,
  instance_nearest: () => instance_nearest,
  instance_number: () => instance_number,
  instance_place: () => instance_place,
  instance_place_list: () => instance_place_list,
  instance_position: () => instance_position,
  irandom: () => eS,
  irandom_range: () => irandom_range,
  is_method: () => is_method,
  is_numeric: () => is_numeric,
  is_real: () => is_real,
  is_string: () => is_string,
  is_struct: () => is_struct,
  is_undefined: () => is_undefined,
  json_encode: () => json_encode,
  keyEventsOf: () => IA,
  keyboard_check: () => keyboard_check,
  keyboard_check_direct: () => keyboard_check_direct,
  keyboard_check_pressed: () => keyboard_check_pressed,
  keyboard_check_released: () => keyboard_check_released,
  keyboard_clear: () => keyboard_clear,
  keysFor: () => Ek,
  kindKey: () => p,
  kindsOf: () => Iw,
  layer_background_create: () => Wg,
  layer_background_destroy: () => WQ,
  layer_background_htiled: () => WO,
  layer_background_speed: () => Wq,
  layer_background_stretch: () => WY,
  layer_create: () => Wx,
  layer_depth: () => xw,
  layer_destroy: () => xk,
  layer_exists: () => xO,
  layer_get_all: () => pm,
  layer_get_all_elements: () => pJ,
  layer_get_depth: () => pV,
  layer_get_element_type: () => pW,
  layer_get_hspeed: () => WL,
  layer_get_id: () => WT,
  layer_get_visible: () => xb,
  layer_get_vspeed: () => xS,
  layer_get_x: () => WZ,
  layer_get_y: () => WK,
  layer_hspeed: () => WX,
  layer_set_visible: () => px,
  layer_sprite_get_alpha: () => layer_sprite_get_alpha,
  layer_sprite_get_angle: () => layer_sprite_get_angle,
  layer_sprite_get_blend: () => layer_sprite_get_blend,
  layer_sprite_get_id: () => layer_sprite_get_id,
  layer_sprite_get_index: () => layer_sprite_get_index,
  layer_sprite_get_speed: () => xv,
  layer_sprite_get_sprite: () => layer_sprite_get_sprite,
  layer_sprite_get_x: () => layer_sprite_get_x,
  layer_sprite_get_xscale: () => layer_sprite_get_xscale,
  layer_sprite_get_y: () => layer_sprite_get_y,
  layer_sprite_get_yscale: () => layer_sprite_get_yscale,
  layer_tile_alpha: () => pZ,
  layer_tilemap_get_id: () => pT,
  layer_vspeed: () => xF,
  layer_x: () => xq,
  layer_y: () => xY,
  left_h: () => ew,
  left_p: () => eW,
  lengthdir_x: () => eR,
  lengthdir_y: () => ej,
  lerp: () => lerp,
  log10: () => log10,
  log2: () => Mh,
  logn: () => logn,
  make_color_hsv: () => make_color_hsv,
  make_color_rgb: () => M7,
  make_colour_rgb: () => make_colour_rgb,
  maskFor: () => EQ,
  mean: () => mean,
  median: () => median,
  merge_color: () => eN,
  merge_colour: () => J6,
  method: () => method,
  motion_add: () => motion_add,
  motion_set: () => motion_set,
  mouse_button: () => mouse_button,
  mouse_check_button: () => mouse_check_button,
  mouse_check_button_pressed: () => mouse_check_button_pressed,
  mouse_check_button_released: () => mouse_check_button_released,
  mouse_wheel_down: () => mouse_wheel_down,
  mouse_wheel_up: () => mouse_wheel_up,
  mouse_x: () => mouse_x,
  mouse_y: () => mouse_y,
  mp_grid_add_cell: () => Wb,
  mp_grid_add_instances: () => WH,
  mp_grid_add_rectangle: () => Wh,
  mp_grid_clear_all: () => WA,
  mp_grid_clear_cell: () => WF,
  mp_grid_clear_rectangle: () => Wv,
  mp_grid_create: () => Ww,
  mp_grid_destroy: () => Wk,
  mp_grid_draw: () => WB,
  mp_grid_get_cell: () => Wf,
  mp_grid_path: () => WS,
  musPrime: () => E7,
  mus_loop: () => e4,
  mus_loop_ext: () => em,
  mus_play: () => e8,
  mus_play_ext: () => ea,
  mus_start: () => e0,
  mus_volume: () => ex,
  musicClockTick: () => I2,
  music_name: () => I6,
  music_position: () => IE,
  music_restore: () => EL,
  music_starts: () => EI,
  music_state: () => Ex,
  music_stems: () => Em,
  music_track: () => EF,
  objectByIndex: () => ID,
  object_get_name: () => object_get_name,
  object_get_parent: () => object_get_parent,
  object_get_sprite: () => object_get_sprite,
  object_is_ancestor: () => object_is_ancestor,
  ofKind: () => e3,
  onFightReset: () => E0,
  ord: () => ord,
  os_get_region: () => os_get_region,
  os_type: () => nZ,
  ossafe_d_sprite_part_ext: () => ossafe_d_sprite_part_ext,
  pal_swap_reset: () => pal_swap_reset,
  pal_swap_set: () => pal_swap_set,
  path_add: () => R,
  path_add_point: () => E5,
  path_clear_points: () => EA,
  path_delete: () => E1,
  path_end: () => I8,
  path_exists: () => G,
  path_get_length: () => Eg,
  path_get_number: () => EZ,
  path_get_point_speed: () => I0,
  path_get_point_x: () => ER,
  path_get_point_y: () => Ej,
  path_get_x: () => EY,
  path_get_y: () => Ew,
  path_set_closed: () => EU,
  path_set_kind: () => E9,
  path_set_precision: () => EW,
  path_start: () => I4,
  place_meeting: () => tY,
  playMusic: () => ED,
  point_direction: () => t0,
  point_distance: () => t4,
  point_distance_3d: () => point_distance_3d,
  point_in_rectangle: () => point_in_rectangle,
  position_meeting: () => position_meeting,
  presentFrame: () => Ez,
  radtodeg: () => radtodeg,
  random: () => eX,
  random_get_seed: () => random_get_seed,
  random_range: () => eq,
  random_set_seed: () => random_set_seed,
  randomise: () => randomise,
  randomize: () => randomize,
  randomsign: () => randomsign,
  real: () => real,
  rectangle_in_rectangle: () => rectangle_in_rectangle,
  registerChapterScripts: () => registerChapterScripts,
  registerFontIndex: () => Eq,
  registerModFiles: () => registerModFiles,
  registerObjectIndex: () => eV,
  registerPaths: () => u,
  registerSoundIndex: () => t8,
  registerSpriteIndex: () => v,
  remap_clamped: () => remap_clamped,
  resetInputForBattle: () => IX,
  resetInstFailures: () => EJ,
  resetKeys: () => EG,
  resolve_trophies: () => resolve_trophies,
  rgb_int: () => eJ,
  right_h: () => eA,
  right_p: () => eZ,
  room: () => aj,
  room_exists: () => room_exists,
  room_goto: () => room_goto,
  room_goto_next: () => room_goto_next,
  room_height: () => room_height,
  room_next: () => room_next,
  room_restart: () => room_restart,
  room_speed: () => room_speed,
  room_width: () => room_width,
  round: () => tI,
  runFightResets: () => E4,
  runFrame: () => ET,
  scr_84_get_font: () => scr_84_get_font,
  scr_84_get_sprite: () => scr_84_get_sprite,
  scr_84_set_draw_font: () => scr_84_set_draw_font,
  scr_angle_lerp: () => scr_angle_lerp,
  scr_draw_in_box_ext_begin: () => scr_draw_in_box_ext_begin,
  scr_is_switch_os: () => scr_is_switch_os,
  scr_monsterdefeat_of: () => scr_monsterdefeat_of,
  script_execute: () => script_execute,
  segBlend: () => tP,
  setActiveMod: () => y,
  setAudio: () => tJ,
  setBoardChapters: () => E6,
  setButton: () => I9,
  setChapter: () => S,
  setCreateHook: () => t2,
  setCurG: () => h,
  setEngineCounters: () => Ix,
  setIndexOverlay: () => eQ,
  setMusicSpeed: () => E3,
  setMusicVol: () => Ig,
  setRoom: () => setRoom,
  setRoomSize: () => setRoomSize,
  set_current_time: () => set_current_time,
  sfxStats: () => X,
  sfxWarm: () => tH,
  sfxWarmChapter: () => tR,
  sfx_rewind: () => EO,
  shader_get_sampler_index: () => shader_get_sampler_index,
  shader_get_uniform: () => shader_get_uniform,
  shader_replace_simple_sync: () => shader_replace_simple_sync,
  shader_reset: () => shader_reset,
  shader_set: () => shader_set,
  shader_set_uniform_f: () => shader_set_uniform_f,
  shader_set_uniform_i: () => shader_set_uniform_i,
  show_debug_message: () => show_debug_message,
  show_error: () => show_error,
  show_question: () => show_question,
  simBegin: () => tT,
  simEnd: () => tX,
  simulating: () => tq,
  sin: () => tO,
  sndHooks: () => b,
  snd_free_all: () => IQ,
  snd_init: () => eL,
  snd_is_playing: () => IC,
  snd_loop: () => IB,
  snd_pause: () => I7,
  snd_pitch: () => I3,
  snd_play: () => snd_play,
  snd_resume: () => II,
  snd_stop: () => z,
  snd_volume: () => If,
  soundHandle: () => IM,
  sound_pause: () => sound_pause,
  sound_pitch: () => sound_pitch,
  sprite: () => EV,
  spriteNameForIndex: () => E2,
  spriteRate: () => EM,
  sprite_create_from_surface: () => sprite_create_from_surface,
  sprite_delete: () => sprite_delete,
  sprite_exists: () => sprite_exists,
  sprite_get_bbox_bottom: () => sprite_get_bbox_bottom,
  sprite_get_bbox_left: () => sprite_get_bbox_left,
  sprite_get_bbox_right: () => sprite_get_bbox_right,
  sprite_get_bbox_top: () => sprite_get_bbox_top,
  sprite_get_height: () => sprite_get_height,
  sprite_get_name: () => sprite_get_name,
  sprite_get_number: () => sprite_get_number,
  sprite_get_speed: () => sprite_get_speed,
  sprite_get_speed_type: () => sprite_get_speed_type,
  sprite_get_texture: () => sprite_get_texture,
  sprite_get_uvs: () => sprite_get_uvs,
  sprite_get_width: () => sprite_get_width,
  sprite_get_xoffset: () => sprite_get_xoffset,
  sprite_get_yoffset: () => sprite_get_yoffset,
  sprite_offsets_restore: () => sprite_offsets_restore,
  sprite_set_offset: () => sprite_set_offset,
  sqr: () => sqr,
  stopAllSounds: () => x,
  stopMusic: () => Ey,
  string_byte_length: () => string_byte_length,
  string_char_at: () => string_char_at,
  string_copy: () => string_copy,
  string_delete: () => string_delete,
  string_digits: () => string_digits,
  string_format: () => string_format,
  string_format_auto: () => string_format_auto,
  string_format_zero: () => string_format_zero,
  string_hash_to_newline: () => string_hash_to_newline,
  string_height: () => string_height,
  string_insert: () => string_insert,
  string_length: () => string_length,
  string_lower: () => string_lower,
  string_pos: () => string_pos,
  string_replace: () => string_replace,
  string_replace_all: () => string_replace_all,
  string_upper: () => string_upper,
  string_width: () => string_width,
  surface_copy: () => surface_copy,
  surface_copy_part: () => surface_copy_part,
  surface_create: () => surface_create,
  surface_exists: () => surface_exists,
  surface_free: () => surface_free,
  surface_get_height: () => surface_get_height,
  surface_get_target: () => surface_get_target,
  surface_get_texture: () => surface_get_texture,
  surface_get_width: () => surface_get_width,
  surface_reset_target: () => surface_reset_target,
  surface_resize: () => surface_resize,
  surface_set_target: () => surface_set_target,
  takeBackspaces: () => IS,
  takeTyped: () => Iq,
  tan: () => tan,
  texture_get_texel_height: () => texture_get_texel_height,
  texture_get_texel_width: () => texture_get_texel_width,
  texture_set_stage: () => texture_set_stage,
  trigger_event: () => trigger_event,
  up_h: () => eP,
  up_p: () => eg,
  variable_global_exists: () => variable_global_exists,
  variable_global_set: () => variable_global_set,
  variable_instance_exists: () => variable_instance_exists,
  variable_instance_get: () => variable_instance_get,
  variable_instance_get_names: () => variable_instance_get_names,
  variable_instance_set: () => variable_instance_set,
  variable_struct_exists: () => variable_struct_exists,
  variable_struct_get: () => variable_struct_get,
  variable_struct_get_names: () => variable_struct_get_names,
  variable_struct_set: () => variable_struct_set,
  vertex_begin: () => vertex_begin,
  vertex_color: () => vertex_color,
  vertex_colour: () => vertex_colour,
  vertex_create_buffer: () => vertex_create_buffer,
  vertex_delete_buffer: () => vertex_delete_buffer,
  vertex_end: () => vertex_end,
  vertex_format_add_color: () => vertex_format_add_color,
  vertex_format_add_colour: () => vertex_format_add_colour,
  vertex_format_add_normal: () => vertex_format_add_normal,
  vertex_format_add_position: () => vertex_format_add_position,
  vertex_format_begin: () => vertex_format_begin,
  vertex_format_end: () => vertex_format_end,
  vertex_normal: () => vertex_normal,
  vertex_position: () => vertex_position,
  vertex_submit: () => vertex_submit,
  view_camera: () => nJ,
  view_current: () => Wy,
  view_hport: () => nV,
  view_wport: () => nW,
  view_xview: () => nx,
  view_yview: () => nT,
  window_get_height: () => window_get_height,
  window_set_caption: () => window_set_caption,
  window_set_size: () => window_set_size,
  working_directory: () => nK,
  wrapsGml: () => Iz
});
ty();
ty();
var {
  floor: a0,
  round: a1,
  min: a2,
  max: a3
} = Math;
var a4 = {
  3: "shd_channel_change_sprite shd_grayscalesand_tolerance shd_rainbow sh_perspective shd_rgb_to_hsv shd_rgb_hsv_shift shd_video_yuv shd_channel_change shd_chromakey shd_grayscale_pal_swapper shd_luminosity_to_transparency shd_rgb_yiq_shift shd_tone shd_channel_change_backup shd_grayscalesand shd_channel_change_alt shd_hue_rotation shd_grayscale shd_pal_swapper shd_crt shd_invert".split(" "),
  4: "shd_gaussian_horizontal shd_fakedepth shd_hsl shd_pal_swapper shd_fountaineffect shd_outline shd_linear_alpha shd_hsv_transform shd_screen_blend shd_channel_change_backup shd_tunnel_copy shd_fountaineffect_alt shd_prophecy_legend shd_distortiondonut shd_linear_alpha_mask shd_tunnel_inverse shd_gaussian_vertical shd_fountainsurface shd_particle_blend_alpha shd_chromakey shader_motionBlur shd_tunnel_inverse2 shd_level_correction shd_steam shd_prophecy sh_perspective shd_channel_change_sprite shd_ripple shd_pal_html_surface shd_tunnel shd_pal_html_sprite shd_channel_change shd_hue shd_grayscale shd_fade shd_dissolve shd_rgb_replace shd_tunnel_inverse7 shd_channel_change_alt shd_tone _filter_tintfilter_shader".split(" "),
  5: "shd_blur_left shd_footprint shd_depthmap_trippy shd_palettemapper_withwave shd_underwater shd_crt shd_castlereflect_layerblend shd_plat_dashblend shd_tower shd_pal_swapper shd_grayscale_fade shd_fakedepth_tower shd_petalcut shd_linear_alpha shd_lut sh_perspective shd_blur_h shd_cylinder shd_chromatic_reflection shd_depthmap shd_screen_blend shd_crt3 shd_wind shd_outline shd_chromakey shd_shadowblend shd_prophecy_legend shd_alpha_ceil shd_crt2 shd_fadetoblack shd_brightness_to_alpha shd_waterreflect shd_saturation shd_alpha shd_blur_cardinal shd_windstream shd_pinwheel shd_forcefullalpha shd_overlay_blend shd_texscroll shd_windwave shd_forcecolour shd_wobble shd_fakedepth shd_orb shd_alpha_floor shd_motionblur shd_palettemapper_simple shd_castlereflect shd_recolour shd_hue shd_grayscale shd_blur_radial shd_colormask shd_blur_directional shd_shoujo shd_shadowblend_evening sh_saturation shd_default shd_texscroll_ext shd_ripple shd_palettemapper shd_invert shd_video_yuv shd_tone _filter_tintfilter_shader".split(" ")
};
var a5 = typeof process !== "undefined" && process.env && !!process.env.NOSHADERS;
var a6 = typeof process !== "undefined" && process.env && !!process.env.SHDEBUG;
var isShaderChapter = tC(() => !a5 && (Y === 3 || Y === 4 || Y === 5), "isShaderChapter");
function installShaderNames(lU, lM) {
  let lm = a4[lM];
  if (!lm) {
    return 0;
  }
  let lJ = 0;
  for (let lW of Object.values(lU)) {
    if (typeof lW == "function" && !!lW.prototype) {
      for (let lV of lm) {
        if (!Object.prototype.hasOwnProperty.call(lW.prototype, lV)) {
          Object.defineProperty(lW.prototype, lV, {
            value: lV,
            writable: true,
            configurable: true,
            enumerable: false
          });
          lJ++;
        }
      }
    }
  }
  return lJ;
}
tC(installShaderNames, "installShaderNames");
function shaderName(lU) {
  if (typeof lU == "string") {
    return lU;
  }
  if (typeof lU == "number") {
    let lM = a4[Y];
    if (lM) {
      return lM[lU];
    } else {
      return undefined;
    }
  }
}
tC(shaderName, "shaderName");
var aE = {};
var aI = new Set(["tex", "texsrc", "texout", "lum", "proph"]);
function canvas(lU, lM, lm) {
  let lJ = aE[lU];
  if (!lJ) {
    lJ = aE[lU] = document.createElement("canvas");
    lJ.__name = "shader_" + lU;
    if (aI.has(lU) && lJ.getContext) {
      lJ.getContext("2d", {
        willReadFrequently: true
      });
    }
  }
  if (lJ.width !== lM || lJ.height !== lm) {
    lJ.width = lM;
    lJ.height = lm;
  }
  let lW = lJ.getContext && lJ.getContext("2d");
  if (lW) {
    lW.setTransform(1, 0, 0, 1, 0, 0);
    lW.globalAlpha = 1;
    lW.globalCompositeOperation = "source-over";
    lW.imageSmoothingEnabled = false;
    lW.clearRect(0, 0, lM, lm);
    return {
      cv: lJ,
      x: lW
    };
  } else {
    return null;
  }
}
tC(canvas, "canvas");
var aU = new Map();
function spritePixels(lU, lM = 0) {
  let lm = lU + "|" + lM + "|" + Y;
  if (aU.has(lm)) {
    return aU.get(lm);
  }
  let lJ = null;
  try {
    let lW = EE[lU];
    let lV = lW && lW.img && lW.img[lM];
    if (lV && lV.width && lV.height) {
      let lx = canvas("tex", lV.width, lV.height);
      if (lx) {
        lx.x.drawImage(lV, 0, 0);
        let lT = lx.x.getImageData(0, 0, lV.width, lV.height);
        if (lT && lT.data && lT.data.length >= lV.width * lV.height * 4) {
          lJ = {
            w: lV.width,
            h: lV.height,
            d: lT.data
          };
        }
      }
    }
  } catch {
    lJ = null;
  }
  if (lJ) {
    aU.set(lm, lJ);
  }
  return lJ;
}
tC(spritePixels, "spritePixels");
function cpuSurface(lU, lM) {
  if (!lM.__cpu && !!lM.canvas && !!(lM.canvas.width > 0) && (!lU || lU.ctx !== lM.ctx)) {
    try {
      let lm = document.createElement("canvas");
      lm.width = lM.canvas.width;
      lm.height = lM.canvas.height;
      lm.__name = "surface_cpu";
      let lJ = lm.getContext("2d", {
        willReadFrequently: true
      });
      if (!lJ) {
        return;
      }
      lJ.imageSmoothingEnabled = false;
      lJ.drawImage(lM.canvas, 0, 0);
      lM.canvas = lm;
      lM.ctx = lJ;
      lM.__cpu = true;
    } catch {}
  }
}
tC(cpuSurface, "cpuSurface");
var aJ;
function lumFilter(lU) {
  if (typeof window !== "undefined" && tG.__DR_SHD_CPU) {
    return null;
  }
  if (aJ === undefined) {
    aJ = null;
    try {
      if (typeof document !== "undefined" && document.createElementNS && document.body && lU && "filter" in lU) {
        let lM = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        lM.setAttribute("width", "0");
        lM.setAttribute("height", "0");
        lM.setAttribute("aria-hidden", "true");
        lM.style.position = "absolute";
        lM.style.width = "0";
        lM.style.height = "0";
        lM.style.pointerEvents = "none";
        lM.innerHTML = "<filter id=\"drsim-lum2alpha\" color-interpolation-filters=\"sRGB\"><feColorMatrix in=\"SourceGraphic\" type=\"matrix\" values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.33333333 0.33333333 0.33333333 0 0\" result=\"lum\"/><feComposite in=\"SourceAlpha\" in2=\"lum\" operator=\"out\"/></filter>";
        document.body.appendChild(lM);
        lU.save();
        lU.filter = "url(#drsim-lum2alpha)";
        let lm = lU.filter === "url(#drsim-lum2alpha)";
        lU.restore();
        if (lm) {
          aJ = "url(#drsim-lum2alpha)";
        }
      }
    } catch {
      aJ = null;
    }
  }
  if (lU && "filter" in lU) {
    return aJ;
  } else {
    return null;
  }
}
tC(lumFilter, "lumFilter");
function imageData(lU, lM, lm) {
  let lJ = lU.getImageData(0, 0, lM, lm);
  if (lJ && lJ.data && lJ.data.length >= lM * lm * 4) {
    return lJ;
  } else {
    return null;
  }
}
tC(imageData, "imageData");
var ax = new Map();
var aT = new Map();
function frameTexels(lU, lM, lm, lJ) {
  let lW = EE[lM];
  let lV = lW && lW.img && lW.img[lm];
  if (!lV || !lV.width || !lV.height || (lW.hd || 0) > 1) {
    return null;
  }
  let lx = lJ == null ? null : e9(lJ);
  let lT = !lx || lx === IG.white || lx === "#ffffff" || lx === "#fff" || lx === "white";
  let lZ = lM + "|" + lm + "|" + (lT ? "" : lx) + "|" + Y;
  let lK = aT.get(lZ);
  if (lK) {
    return lK;
  }
  let lL = lV.width;
  let lX = lV.height;
  let lg = canvas("texsrc", lL, lX);
  if (!lg) {
    return null;
  }
  lg.x.drawImage(lT ? lV : lU.tinted(lW, lm, lJ), 0, 0);
  let lQ = imageData(lg.x, lL, lX);
  if (!lQ) {
    return null;
  }
  let lO = lg.x.createImageData ? lg.x.createImageData(lL, lX) : null;
  if (!lO || !lO.data) {
    return null;
  } else {
    lK = {
      s: lW,
      w: lL,
      h: lX,
      d: new Uint8ClampedArray(lQ.data),
      out: lO
    };
    aT.set(lZ, lK);
    if (aT.size > 128) {
      aT.delete(aT.keys().next().value);
    }
    return lK;
  }
}
tC(frameTexels, "frameTexels");
var vertexAlpha = tC((lU, lM) => Math.max(0, Math.min(1, (lM === undefined ? 1 : +lM) * (lU.alpha === undefined ? 1 : lU.alpha))), "vertexAlpha");
function drawShaded(lU, lM, lm) {
  let [,, lJ, lW, lV, lx, lT] = lm;
  let lZ = canvas("texout", lM.w, lM.h);
  if (!lZ) {
    return false;
  }
  lZ.x.putImageData(lM.out, 0, 0);
  let lK = lU.ctx;
  lK.save();
  lK.globalAlpha = 1;
  lK.translate(lJ, lW);
  if (lT) {
    lK.rotate(-lT * Math.PI / 180);
  }
  lK.scale(lV, lx);
  lK.drawImage(lZ.cv, -lM.s.ox, -lM.s.oy);
  lK.restore();
  return true;
}
tC(drawShaded, "drawShaded");
function prophBox(lU, lM, lm, lJ, lW, lV) {
  try {
    let lx = lM && lm >= 0 ? lM.img[lm] : null;
    if (!lx || !lx.width || typeof lU.getTransform != "function") {
      return null;
    }
    let [,, lT, lZ, lK, lL, lX] = lJ;
    let lg = lU.getTransform().translate(+lT || 0, +lZ || 0).rotate(-(+lX || 0)).scale(lK === undefined ? 1 : +lK, lL === undefined ? 1 : +lL);
    let lQ = lM.ox || 0;
    let lO = lM.oy || 0;
    let lq = Infinity;
    let lY = Infinity;
    let lb = -Infinity;
    let lF = -Infinity;
    for (let [lH, lA] of [[-lQ, -lO], [lx.width - lQ, -lO], [-lQ, lx.height - lO], [lx.width - lQ, lx.height - lO]]) {
      let lv = lg.transformPoint({
        x: lH,
        y: lA
      });
      if (!Number.isFinite(lv.x) || !Number.isFinite(lv.y)) {
        return null;
      }
      lq = Math.min(lq, lv.x);
      lY = Math.min(lY, lv.y);
      lb = Math.max(lb, lv.x);
      lF = Math.max(lF, lv.y);
    }
    let lS = Math.max(0, Math.floor(lq) - 1);
    let lw = Math.max(0, Math.floor(lY) - 1);
    let lk = Math.min(lW, Math.ceil(lb) + 1);
    let lh = Math.min(lV, Math.ceil(lF) + 1);
    if (lk > lS && lh > lw) {
      return [lS, lw, lk - lS, lh - lw];
    } else {
      return 0;
    }
  } catch {
    return null;
  }
}
tC(prophBox, "prophBox");
var ag = {
  shd_invert: {
    sprite(lU, lM, lm, lJ) {
      let [lW, lV, lx, lT, lZ, lK, lL, lX, lg] = lm;
      let lQ = EE[lW];
      if (!lQ) {
        return false;
      }
      let lO = lM.frame(lW, lV);
      let lq = lQ.img && lQ.img[lO];
      if (!lq || !lq.width) {
        return false;
      }
      let lY = lW + "|" + lO + "|" + lX + "|" + Y;
      let lb = ax.get(lY);
      if (!lb) {
        let lS = lX !== undefined && lX !== 16777215 && lX !== 16777215 ? lM.tinted(lQ, lO, lX) : lq;
        let lw = document.createElement("canvas");
        lw.width = lq.width;
        lw.height = lq.height;
        let lk = lw.getContext && lw.getContext("2d");
        if (!lk) {
          return false;
        }
        lk.drawImage(lS, 0, 0);
        let lh = imageData(lk, lq.width, lq.height);
        if (!lh) {
          return false;
        }
        let lH = lh.data;
        for (let lA = 0; lA < lH.length; lA += 4) {
          lH[lA] = 255 - lH[lA];
          lH[lA + 1] = 255 - lH[lA + 1];
          lH[lA + 2] = 255 - lH[lA + 2];
        }
        lk.putImageData(lh, 0, 0);
        lb = lw;
        ax.set(lY, lb);
        if (ax.size > 256) {
          ax.delete(ax.keys().next().value);
        }
      }
      let lF = lM.ctx;
      lF.save();
      lF.globalAlpha = Math.max(0, Math.min(1, lg * (lM.alpha === undefined ? 1 : lM.alpha)));
      lF.translate(lx, lT);
      if (lL) {
        lF.rotate(-lL * Math.PI / 180);
      }
      lF.scale(lZ, lK);
      lF.drawImage(lb, -lQ.ox, -lQ.oy);
      lF.restore();
      return true;
    }
  },
  shd_luminosity_to_transparency: {
    surface(lU, lM, lm, lJ, lW, lV, lx, lT, lZ, lK) {
      if (lM && lM.headless) {
        return true;
      }
      let lL = !lm.__cpu && lumFilter(lM && lM.ctx);
      if (lL) {
        let lb = lM.ctx;
        lb.save();
        lb.globalAlpha = Math.max(0, Math.min(1, lK * (lM.alpha === undefined ? 1 : lM.alpha)));
        lb.filter = lL;
        lb.translate(lJ, lW);
        if (lT) {
          lb.rotate(-lT * Math.PI / 180);
        }
        lb.scale(lV, lx);
        lb.drawImage(lm.canvas, 0, 0);
        lb.restore();
        return true;
      }
      cpuSurface(lM, lm);
      let lX = lm.canvas.width;
      let lg = lm.canvas.height;
      let lQ = canvas("lum", lX, lg);
      if (!lQ) {
        return false;
      }
      let lO = imageData(lm.__cpu ? lm.ctx : (lQ.x.drawImage(lm.canvas, 0, 0), lQ.x), lX, lg);
      if (!lO) {
        return false;
      }
      let lq = lO.data;
      for (let lF = 0; lF < lq.length; lF += 4) {
        let lS = lq[lF + 3];
        if (!lS) {
          continue;
        }
        let lw = (lq[lF] + lq[lF + 1] + lq[lF + 2]) / 765;
        lq[lF] = 0;
        lq[lF + 1] = 0;
        lq[lF + 2] = 0;
        lq[lF + 3] = a1((1 - lw) * lS);
      }
      lQ.x.putImageData(lO, 0, 0);
      let lY = lM.ctx;
      lY.save();
      lY.globalAlpha = Math.max(0, Math.min(1, lK * (lM.alpha === undefined ? 1 : lM.alpha)));
      lY.translate(lJ, lW);
      if (lT) {
        lY.rotate(-lT * Math.PI / 180);
      }
      lY.scale(lV, lx);
      lY.drawImage(lQ.cv, 0, 0);
      lY.restore();
      return true;
    }
  },
  shd_channel_change_sprite: {
    surface(lU, lM, lm, lJ, lW, lV, lx, lT, lZ, lK) {
      let lL = lU.samplers[lU.samplerKey] || lU.samplers.perlin_texture_page;
      if (!lL || !lL.spr) {
        lL = {
          spr: lU.self && lU.self.noise_sprite || "spr_perlin_noise_240",
          idx: 0
        };
      }
      let lX = spritePixels(lL.spr, lL.idx || 0);
      if (!lX) {
        return false;
      }
      let lg = lm.canvas.width;
      let lQ = lm.canvas.height;
      let lO = Number((lU.uniforms.strength || [0])[0]) || 0;
      let lq = (Math.floor(Number((lU.uniforms.scanx || [0.5])[0]) || 0) % lX.w + lX.w) % lX.w;
      let lY = canvas("chan", lg, lQ);
      if (!lY) {
        return false;
      }
      for (let lF = 0; lF < lQ; lF++) {
        let lS = lF % lX.h;
        let lw = (lX.d[(lS * lX.w + lq) * 4] / 255 - 0.5) * 2;
        let lk = Math.round(lw * lO) % lg;
        if (lk < 0) {
          lk += lg;
        }
        if (lk === 0) {
          lY.x.drawImage(lm.canvas, 0, lF, lg, 1, 0, lF, lg, 1);
          continue;
        }
        lY.x.drawImage(lm.canvas, 0, lF, lg - lk, 1, lk, lF, lg - lk, 1);
        lY.x.drawImage(lm.canvas, lg - lk, lF, lk, 1, 0, lF, lk, 1);
      }
      let lb = lM.ctx;
      lb.save();
      lb.globalAlpha = Math.max(0, Math.min(1, lK * (lM.alpha === undefined ? 1 : lM.alpha)));
      lb.translate(lJ, lW);
      if (lT) {
        lb.rotate(-lT * Math.PI / 180);
      }
      lb.scale(lV, lx);
      lb.drawImage(lY.cv, 0, 0);
      lb.restore();
      return true;
    }
  },
  shd_prophecy: {
    sprite(lU, lM, lm, lJ) {
      let lW = lU.samplers.sampler_1;
      let lV = lU.samplers.sampler_2;
      let lx = lW && lW.spr ? spritePixels(lW.spr, lW.idx || 0) : null;
      if (!lx) {
        return false;
      }
      let lT = lV && lV.spr ? spritePixels(lV.spr, lV.idx || 0) : null;
      let lZ = Number((lU.uniforms.time || [0])[0]) || 0;
      let lK = Number((lU.uniforms.opacity || [1])[0]);
      let lL = lU.uniforms.col || [1, 1, 1];
      let lX = lM.ctx;
      let lg = lX.canvas && lX.canvas.width;
      let lQ = lX.canvas && lX.canvas.height;
      if (!(lg > 0) || !(lQ > 0)) {
        return false;
      }
      if (typeof window !== "undefined" && tG.__DR_PROPH_STAT) {
        let lG = tG.__DR_PROPH_STAT;
        lG.n = (lG.n || 0) + 1;
        lG.wh = lg + "x" + lQ;
        lG.name = lX.canvas.__name || lX.canvas.id || "?";
      }
      let lO = canvas("proph", lg, lQ);
      if (!lO) {
        return false;
      }
      let lq = EE[lm[0]];
      let lY = lq && lq.img && (lq.hd || 0) <= 1 ? lM.frame(lm[0], lm[1]) : -1;
      let lb = lY >= 0 ? lq.img[lY] : null;
      let lF = lb ? EB(lb) : null;
      let lS = lM.ctx;
      lM.ctx = lO.x;
      if (lF) {
        lq.img[lY] = lF.cv;
      }
      try {
        if (typeof lX.getTransform == "function") {
          lO.x.setTransform(lX.getTransform());
        }
        lJ.apply(lM, lm);
      } finally {
        lM.ctx = lS;
        if (lF) {
          lq.img[lY] = lb;
        }
      }
      let lw = (typeof window === "undefined" || !tG.__DR_PROPH_FULL) && prophBox(lX, lq, lY, lm, lg, lQ);
      if (lw === 0) {
        return true;
      }
      let [lk, lh, lH, lA] = lw || [0, 0, lg, lQ];
      let lv = lO.x.getImageData(lk, lh, lH, lA);
      if (!lv || !lv.data) {
        return false;
      }
      let lB = lv.data;
      let lR = (1 + Math.sin(lZ * 0.1)) * 0.4;
      let lP = ly => (ly % 256 + 256) % 256;
      let lD = Number(lL[0]) || 0;
      let lC = Number(lL[1]) || 0;
      let lj = Number(lL[2]) || 0;
      for (let ly = 0; ly < lA; ly++) {
        let lz = lh + ly;
        let T0 = a0(lP(lz / 2 + lZ));
        for (let T1 = 0; T1 < lH; T1++) {
          let T2 = lk + T1;
          let T3 = (ly * lH + T1) * 4;
          let T4 = lB[T3 + 3];
          if (!T4) {
            continue;
          }
          let T5 = a0(lP(T2 / 2 + lZ));
          let T6 = (T0 % lx.h * lx.w + T5 % lx.w) * 4;
          let T7 = lx.d[T6] / 255;
          let T8 = lx.d[T6 + 1] / 255;
          let T9 = lx.d[T6 + 2] / 255;
          if (lT) {
            let TE = (T0 % lT.h * lT.w + T5 % lT.w) * 4;
            T7 += lT.d[TE] / 255 * lR;
            T8 += lT.d[TE + 1] / 255 * lR;
            T9 += lT.d[TE + 2] / 255 * lR;
          }
          lB[T3] = a2(255, a1(lD * T7 * 255));
          lB[T3 + 1] = a2(255, a1(lC * T8 * 255));
          lB[T3 + 2] = a2(255, a1(lj * T9 * 255));
          lB[T3 + 3] = a3(0, a2(255, a1(T4 * lK)));
        }
      }
      lO.x.setTransform(1, 0, 0, 1, 0, 0);
      lO.x.putImageData(lv, lk, lh);
      lX.save();
      lX.setTransform(1, 0, 0, 1, 0, 0);
      lX.globalAlpha = 1;
      lX.drawImage(lO.cv, lk, lh, lH, lA, lk, lh, lH, lA);
      lX.restore();
      return true;
    }
  },
  shd_linear_alpha: {
    sprite(lU, lM, lm) {
      let [lJ, lW,,,,,, lV, lx] = lm;
      let lT = frameTexels(lM, lJ, lM.frame(lJ, lW), lV);
      if (!lT) {
        return false;
      }
      let lZ = vertexAlpha(lM, lx);
      let lK = lT.out;
      let lL = lT.d;
      let lX = lK.data;
      let lg = (1 - lZ) * 255;
      for (let lQ = 0; lQ < lL.length; lQ += 4) {
        lX[lQ] = lL[lQ];
        lX[lQ + 1] = lL[lQ + 1];
        lX[lQ + 2] = lL[lQ + 2];
        lX[lQ + 3] = a3(0, lL[lQ + 3] - lg);
      }
      return drawShaded(lM, lT, lm);
    }
  },
  shd_dissolve: {
    sprite(lU, lM, lm) {
      let [lJ, lW,,,,,, lV, lx] = lm;
      let lT = lU.samplers.DissolveTex;
      let lZ = lT && (typeof lT.spr == "number" ? E2(lT.spr) : lT.spr);
      let lK = lZ ? spritePixels(lZ, lT.idx || 0) : null;
      if (!lK) {
        return false;
      }
      let lL = frameTexels(lM, lJ, lM.frame(lJ, lW), lV);
      if (!lL) {
        return false;
      }
      let lX = vertexAlpha(lM, lx);
      let lg = Number((lU.uniforms.Dissolve || [0])[0]) || 0;
      let lQ = Number((lU.uniforms.Edge || [0])[0]) || 0;
      let lO = lU.uniforms.C1 || [1, 1, 1];
      let lq = lU.uniforms.C2 || [1, 1, 1];
      let lY = lg * (1 + lQ) - 1;
      let lb = lL.d;
      let lF = lL.out.data;
      let lS = lL.w;
      for (let lw = 0, lk = 0; lw < lb.length; lw += 4, lk++) {
        let lh = lk % lS;
        let lH = (lk - lh) / lS;
        let lA = lb[lw + 3] / 255 * lX;
        let lv = lK.d[(lH % lK.h * lK.w + lh % lK.w) * 4] / 255;
        let lB = a2(lv + lY, lA);
        if (!(lB > 0)) {
          lF[lw + 3] = 0;
          continue;
        }
        if (lQ > 0 && lB <= lQ) {
          let lR = lB / lQ;
          lF[lw] = a1(((+lO[0] || 0) + ((+lq[0] || 0) - (+lO[0] || 0)) * lR) * 255);
          lF[lw + 1] = a1(((+lO[1] || 0) + ((+lq[1] || 0) - (+lO[1] || 0)) * lR) * 255);
          lF[lw + 2] = a1(((+lO[2] || 0) + ((+lq[2] || 0) - (+lO[2] || 0)) * lR) * 255);
        } else {
          lF[lw] = lb[lw];
          lF[lw + 1] = lb[lw + 1];
          lF[lw + 2] = lb[lw + 2];
        }
        lF[lw + 3] = a1(lA * 255);
      }
      return drawShaded(lM, lL, lm);
    }
  }
};
var aQ = null;
var aO = new Set();
var boundShader = tC(() => aQ, "boundShader");
function bindShader(lU, lM) {
  if (!isShaderChapter()) {
    return;
  }
  let lm = shaderName(lU);
  if (a6 && !aO.has(String(lU))) {
    aO.add(String(lU));
    console.log("shader_set", lU, "->", lm, "impl", !!ag[lm], "frame", eI.frame);
  }
  if (aQ && aQ.name === lm) {
    return;
  }
  unbindShader(lM);
  let lJ = lm && ag[lm];
  if (lJ && (aQ = {
    name: lm,
    impl: lJ,
    uniforms: {},
    samplers: {},
    g: null,
    orig: null,
    self: eI.self
  }, lJ.sprite && lM)) {
    let lW = lM.draw_sprite_ext;
    aQ.g = lM;
    aQ.orig = lW;
    let lV = aQ;
    lM.draw_sprite_ext = function (...lx) {
      if (eI.self !== lV.self && (!lV.self || !eI.self || eI.self !== lV.self.__withOuter)) {
        unbindShader();
        return lW.apply(this, lx);
      }
      let lT = false;
      try {
        lT = lV.impl.sprite(lV, this, lx, lW);
      } catch (lZ) {
        lT = false;
        if (a6) {
          console.log("shader", lV.name, lZ && lZ.stack);
        }
      }
      if (a6 && !lT) {
        console.log("shader", lV.name, "fell back", JSON.stringify(Object.keys(lV.samplers)), JSON.stringify(lV.uniforms));
      }
      if (!lT) {
        return lW.apply(this, lx);
      }
    };
  }
}
tC(bindShader, "bindShader");
function unbindShader() {
  if (aQ) {
    if (aQ.g && aQ.orig && aQ.g.draw_sprite_ext !== aQ.orig) {
      delete aQ.g.draw_sprite_ext;
    }
    aQ = null;
  }
}
tC(unbindShader, "unbindShader");
function setUniform(lU, lM) {
  if (aQ && lU !== undefined && lU !== null) {
    aQ.uniforms[lU] = lM;
  }
}
tC(setUniform, "setUniform");
function setSampler(lU, lM) {
  if (aQ && lU !== undefined && lU !== null) {
    aQ.samplers[lU] = lM;
  }
}
tC(setSampler, "setSampler");
function shadeSurface(lU, lM, lm, lJ, lW, lV, lx, lT, lZ) {
  if (!aQ || !aQ.impl.surface) {
    return false;
  }
  try {
    return !!aQ.impl.surface(aQ, lU, lM, lm, lJ, lW, lV, lx, lT, lZ);
  } catch {
    return false;
  }
}
tC(shadeSurface, "shadeSurface");
var trigger_event = tC(() => {}, "trigger_event");
function scr_monsterdefeat_of(lU) {
  if (lU && !lU.destroyed && lU.scr_monsterdefeat) {
    lU.scr_monsterdefeat();
  }
}
tC(scr_monsterdefeat_of, "scr_monsterdefeat_of");
var __background_set = tC((lU, lM, lm) => lm, "__background_set");
var aA = tC((lU, lM, lm) => {
  let lJ = Array.isArray(lU[lM]) ? lU[lM] : lU[lM] = [];
  if (lm !== undefined) {
    for (let lW = lJ.length; lW < lm; lW++) {
      lJ[lW] = 0;
    }
  }
  return lJ;
}, "AR");
var NOOP = tC(() => {}, "NOOP");
var aB = {
  create: NOOP,
  step: NOOP,
  beginStep: NOOP,
  endStep: NOOP,
  draw: NOOP,
  destroy: NOOP,
  alarmEvent: NOOP,
  userEvent: NOOP,
  event_user: NOOP,
  instance_destroy: NOOP,
  draw_self: NOOP,
  move_towards_point: NOOP,
  is: tC(() => false, "is")
};
var aR = new Proxy({
  x: 0,
  y: 0,
  id: -1,
  destroyed: true,
  ...aB
}, {
  get: tC((lU, lM) => lM in lU ? lU[lM] : 0, "get"),
  set: tC(() => true, "set")
});
var FIRST = tC(lU => eI.first(lU) || aR, "FIRST");
var INST = tC(lU => {
  if (typeof lU != "number") {
    return lU || aR;
  }
  let lM = ID(lU);
  return lM && eI.first(lM) || aR;
}, "INST");
var SETALL = tC((lU, lM, lm) => {
  for (let lJ of eI.all(lU)) {
    if (!lJ.destroyed) {
      lJ[lM] = lm;
    }
  }
  return lm;
}, "SETALL");
var aj = "__no_room__";
var setRoom = tC(lU => {
  aj = lU || "__no_room__";
}, "setRoom");
var asset_get_index = tC(lU => lU, "asset_get_index");
var asset_get_type = tC(() => 0, "asset_get_type");
var array_length = tC(lU => Array.isArray(lU) ? lU.length : 0, "array_length");
var string_length = tC(lU => String(lU).length, "string_length");
var string_replace_all = tC((lU, lM, lm) => String(lU).split(lM).join(lm), "string_replace_all");
var is_string = tC(lU => typeof lU == "string", "is_string");
var variable_global_exists = tC(lU => typeof lU == "string" ? lU in J : true, "variable_global_exists");
var ds_map_find_value = tC((lU, lM) => lU ? lU[lM] : undefined, "ds_map_find_value");
var object_get_sprite = tC(() => -1, "object_get_sprite");
var distance_to_point = tC(function (lU, lM) {
  if (!this || typeof this != "object") {
    return 0;
  } else {
    return tZ(tW(this), lU, lM);
  }
}, "distance_to_point");
var audio_stop_all = tC(() => {
  Ib();
}, "audio_stop_all");
var N9 = {
  impl: null
};
var hosted = tC((lU, lM) => (...lm) => {
  let lJ = N9.impl;
  if (lJ && lJ[lU]) {
    return lJ[lU](...lm);
  } else {
    return lM(...lm);
  }
}, "hosted");
var room_goto = hosted("room_goto", lU => {
  if (String(lU) === "room_gameover") {
    J.battleover = "lose";
  }
});
var mean = tC((...lU) => lU.length ? lU.reduce((lM, lm) => lM + Number(lm), 0) / lU.length : 0, "mean");
var string_char_at = tC((lU, lM) => String(lU).charAt(lM - 1), "string_char_at");
var string_hash_to_newline = tC(lU => String(lU).split("#").join("\n"), "string_hash_to_newline");
var keyboard_check = tC(lU => !!J.heldDebugKeys && !!J.heldDebugKeys[lU], "keyboard_check");
var keyboard_check_pressed = tC(lU => {
  let lM = Number(lU);
  if (lM === 1) {
    return Object.keys(Eb.pressed).some(lJ => Eb.pressed[lJ]);
  }
  let lm = I1[lM];
  if (lm) {
    return !!Eb.pressed[lm];
  } else {
    return !!J.pressedDebugKeys && !!J.pressedDebugKeys[lM];
  }
}, "keyboard_check_pressed");
function make_color_hsv(lU, lM, lm) {
  let lJ = lU / 255 * 360;
  let lW = lM / 255;
  let lV = lm / 255;
  let lx = lV * lW;
  let lT = lx * (1 - Math.abs(lJ / 60 % 2 - 1));
  let lZ = lV - lx;
  let lK = Math.floor(lJ / 60) % 6;
  let [lL, lX, lg] = [[lx, lT, 0], [lT, lx, 0], [0, lx, lT], [0, lT, lx], [lT, 0, lx], [lx, 0, lT]][lK];
  let lQ = lO => Math.round((lO + lZ) * 255).toString(16).padStart(2, "0");
  return "#" + lQ(lL) + lQ(lX) + lQ(lg);
}
tC(make_color_hsv, "make_color_hsv");
var NW = {
  0: "source-over",
  1: "lighter",
  2: "lighten",
  3: "destination-out"
};
var NV = 0;
function applyBlend(lU) {
  if (!lU) {
    return;
  }
  let lM = NW[NV] || "source-over";
  if (tP && tP(lU, lM) && i && i.ctx) {
    lU = i.ctx;
  }
  lU.globalCompositeOperation = lM;
}
tC(applyBlend, "applyBlend");
var currentBlend = tC(() => NV, "currentBlend");
var draw_set_blend_mode = tC(lU => {
  NV = lU | 0;
  let lM = i;
  if (lM && lM.ctx) {
    applyBlend(lM.ctx);
  }
}, "draw_set_blend_mode");
var NK = 1;
var NL = 2;
var NX = 3;
var Ng = 4;
var NQ = 5;
var NO = 7;
var Nq = 8;
function blendFromFactors(lU, lM) {
  if (lU === NQ && lM === NL || lU === NL && lM === NL) {
    return "lighter";
  } else if (lU === NK && lM === NX) {
    return "multiply";
  } else if (lU === NK && lM === Ng) {
    return "difference";
  } else if (lU === NK) {
    return "destination-in";
  } else if (lU === Nq && lM === NO) {
    return "destination-over";
  } else if (lU === NO && (lM === NK || lM === NO)) {
    return "source-atop";
  } else {
    return "source-over";
  }
}
tC(blendFromFactors, "blendFromFactors");
var draw_set_blend_mode_ext = tC((lU, lM) => {
  let lm = i;
  if (!lm || !lm.ctx) {
    return;
  }
  let lJ = blendFromFactors(lU | 0, lM | 0);
  if (tP) {
    tP(lm.ctx, lJ);
  }
  lm.ctx.globalCompositeOperation = lJ;
}, "draw_set_blend_mode_ext");
var NF = draw_set_blend_mode_ext;
function gpu_set_colorwriteenable(lU, lM, lm, lJ) {
  if (!lU && !lM && !lm && lJ && NV === 3) {
    eB(1, 1, 1, 1);
    return;
  }
  eB(lU, lM, lm, lJ);
}
tC(gpu_set_colorwriteenable, "gpu_set_colorwriteenable");
var camera_get_view_x = tC(() => eI.view.x || 0, "camera_get_view_x");
var camera_get_view_y = tC(() => eI.view.y || 0, "camera_get_view_y");
var camera_get_view_width = tC(() => 640, "camera_get_view_width");
var camera_get_view_height = tC(() => 480, "camera_get_view_height");
var remap_clamped = tC((lU, lM, lm, lJ, lW) => {
  let lV = lm === lM ? 0 : Math.min(1, Math.max(0, (lU - lM) / (lm - lM)));
  return lJ + (lW - lJ) * lV;
}, "remap_clamped");
var clamp01 = tC(lU => Math.min(1, Math.max(0, lU)), "clamp01");
var randomsign = tC(() => eS(1) * 2 - 1, "randomsign");
var is_real = tC(lU => typeof lU == "number" && !Number.isNaN(lU), "is_real");
var is_undefined = tC(lU => lU === undefined, "is_undefined");
var variable_instance_exists = tC((lU, lM) => {
  if (typeof lU == "number") {
    lU = ev(lU);
  }
  if (lU && typeof lU == "object" && lM in lU) {
    return 1;
  } else {
    return 0;
  }
}, "variable_instance_exists");
var variable_instance_set = tC((lU, lM, lm) => {
  if (lU && typeof lU == "object") {
    lU[lM] = lm;
  }
}, "variable_instance_set");
var variable_instance_get = tC((lU, lM) => lU && typeof lU == "object" ? lU[lM] : undefined, "variable_instance_get");
var array_length_1d = tC(lU => Array.isArray(lU) ? lU.length : 0, "array_length_1d");
var string_copy = tC((lU, lM, lm) => String(lU).substr(lM - 1, lm), "string_copy");
var string_lower = tC(lU => String(lU).toLowerCase(), "string_lower");
var string_upper = tC(lU => String(lU).toUpperCase(), "string_upper");
var string_width = tC(lU => i ? i.string_width(String(lU)) : 0, "string_width");
var string_height = tC(lU => i ? i.string_height(String(lU)) : 0, "string_height");
var sprite_get_xoffset = tC(lU => EE[lU] ? EE[lU].ox : 0, "sprite_get_xoffset");
var sprite_get_yoffset = tC(lU => EE[lU] ? EE[lU].oy : 0, "sprite_get_yoffset");
var show_debug_message = tC(() => {}, "show_debug_message");
var show_error = tC(() => {}, "show_error");
var event_inherited = tC(() => {}, "event_inherited");
var motion_add = tC(function (lU, lM) {
  if (!this) {
    return;
  }
  let lm = lU * Math.PI / 180;
  this.hspeed = (this.hspeed || 0) + Math.cos(lm) * lM;
  this.vspeed = (this.vspeed || 0) - Math.sin(lm) * lM;
}, "motion_add");
var instance_create_depth = tC((lU, lM, lm, lJ) => {
  if (J.chapter === 5 || J.chapter === 3 || J.chapter === 4 || J.chapter === 1 || J.chapter === 2) {
    return instance_create(lU, lM, lJ, {
      depth: lm
    });
  }
  let lW = instance_create(lU, lM, lJ);
  if (lW) {
    lW.depth = lm;
  }
  return lW;
}, "instance_create_depth");
var instance_find = tC((lU, lM) => eI.all(lU)[lM] || null, "instance_find");
var instance_nearest = tC(function (lU, lM, lm) {
  let lJ = null;
  let lW = Infinity;
  for (let lV of eI.all(lm)) {
    let lx = Math.hypot(lV.x - lU, lV.y - lM);
    if (lx < lW) {
      lW = lx;
      lJ = lV;
    }
  }
  return lJ;
}, "instance_nearest");
var gmlColor = tC(lU => {
  if (typeof lU != "string") {
    return lU;
  }
  let lM = lU.replace(/\s+/g, "").toLowerCase();
  if (lM === "#ffffff" || lM === "rgb(255,255,255)") {
    return 16777215;
  } else if (lM === "#000000" || lM === "rgb(0,0,0)") {
    return 0;
  } else {
    return lU;
  }
}, "gmlColor");
var draw_get_color = tC(() => gmlColor(i ? i.color : "#ffffff"), "draw_get_color");
var draw_get_colour = tC(() => gmlColor(i ? i.color : "#ffffff"), "draw_get_colour");
var draw_set_valign = tC(lU => {
  if (i) {
    i.draw_set_valign(lU);
  }
}, "draw_set_valign");
var draw_set_halign = tC(lU => {
  if (i) {
    i.draw_set_halign(lU);
  }
}, "draw_set_halign");
var draw_get_halign = tC(() => i && {
  left: 0,
  center: 1,
  right: 2
}[i.halign] || 0, "draw_get_halign");
var draw_get_valign = tC(() => i && {
  top: 0,
  middle: 1,
  bottom: 2
}[i.valign] || 0, "draw_get_valign");
function draw_clear_alpha(lU, lM) {
  let lm = i;
  let lJ = lm && lm.ctx;
  if (!lJ || !lJ.canvas) {
    return;
  }
  let lW = lM === undefined ? 1 : Number(lM);
  lJ.clearRect(0, 0, lJ.canvas.width, lJ.canvas.height);
  if (lW > 0) {
    lJ.save();
    lJ.globalCompositeOperation = "source-over";
    lJ.globalAlpha = Math.min(1, lW);
    lJ.fillStyle = e9 ? e9(lU) : lU || "#000000";
    lJ.fillRect(0, 0, lJ.canvas.width, lJ.canvas.height);
    lJ.restore();
  }
}
tC(draw_clear_alpha, "draw_clear_alpha");
var UV = null;
var draw_primitive_begin = tC(lU => {
  UV = {
    kind: lU | 0,
    v: []
  };
}, "draw_primitive_begin");
var draw_vertex = tC((lU, lM) => {
  if (UV) {
    UV.v.push([lU, lM]);
  }
}, "draw_vertex");
var draw_vertex_colour = tC((lU, lM, lm, lJ) => {
  if (UV) {
    UV.v.push([lU, lM]);
    if (lm !== undefined) {
      UV.col = lm;
    }
    if (lJ !== undefined) {
      UV.alpha = lJ;
    }
  }
}, "draw_vertex_colour");
var draw_vertex_color = draw_vertex_colour;
var draw_vertex_texture = tC(() => {}, "draw_vertex_texture");
function draw_primitive_end() {
  let lU = UV;
  UV = null;
  let lM = gfx();
  if (!lM || !lU || lU.v.length < 2) {
    return;
  }
  if (lU.tex !== undefined) {
    drawTexturedPrimitive(lM, lU);
    return;
  }
  let lm = lM.ctx;
  if (!lm) {
    return;
  }
  let lJ = lM.color;
  if (lU.col !== undefined) {
    lM.draw_set_color(lU.col);
  }
  lm.globalAlpha = Math.max(0, Math.min(1, (lU.alpha === undefined ? 1 : lU.alpha) * lM.alpha));
  lm.fillStyle = lm.strokeStyle = lM.color;
  if (lU.kind === 2 || lU.kind === 3) {
    lm.beginPath();
    lm.moveTo(lU.v[0][0], lU.v[0][1]);
    for (let lW = 1; lW < lU.v.length; lW++) {
      if (lU.kind === 2 && lW % 2 === 0) {
        lm.moveTo(lU.v[lW][0], lU.v[lW][1]);
      } else {
        lm.lineTo(lU.v[lW][0], lU.v[lW][1]);
      }
    }
    lm.stroke();
  } else if (lU.kind === 4) {
    for (let lV = 0; lV + 2 < lU.v.length; lV += 3) {
      lm.beginPath();
      lm.moveTo(lU.v[lV][0], lU.v[lV][1]);
      lm.lineTo(lU.v[lV + 1][0], lU.v[lV + 1][1]);
      lm.lineTo(lU.v[lV + 2][0], lU.v[lV + 2][1]);
      lm.closePath();
      lm.fill();
    }
  } else {
    lm.beginPath();
    lm.moveTo(lU.v[0][0], lU.v[0][1]);
    for (let lx = 1; lx < lU.v.length; lx++) {
      lm.lineTo(lU.v[lx][0], lU.v[lx][1]);
    }
    lm.closePath();
    lm.fill();
  }
  lm.globalAlpha = 1;
  lM.draw_set_color(lJ);
}
tC(draw_primitive_end, "draw_primitive_end");
var Ug = 0;
var gpu_set_blendmode = tC(lU => {
  Ug = lU;
  if (laterChapter() || Y === 3) {
    draw_set_blend_mode(lU);
  }
}, "gpu_set_blendmode");
var gpu_get_blendmode = tC(() => Ug, "gpu_get_blendmode");
var gpu_set_texfilter = tC(() => {}, "gpu_set_texfilter");
var shader_set = tC(lU => {
  if (isShaderChapter()) {
    bindShader(lU, i);
  }
}, "shader_set");
var shader_reset = tC(() => {
  unbindShader();
}, "shader_reset");
var ds_list_create = tC(() => [], "ds_list_create");
var ds_list_add = tC((lU, ...lM) => {
  if (Array.isArray(lU)) {
    lU.push(...lM);
  }
}, "ds_list_add");
var ds_list_destroy = tC(() => {}, "ds_list_destroy");
var ds_list_write = tC(() => "", "ds_list_write");
var ds_list_size = tC(lU => Array.isArray(lU) ? lU.length : 0, "ds_list_size");
var ds_map_create = tC(() => ({}), "ds_map_create");
var ds_map_add = tC((lU, lM, lm) => {
  if (lU) {
    lU[lM] = lm;
  }
}, "ds_map_add");
var ds_map_set = tC((lU, lM, lm) => {
  if (lU) {
    lU[lM] = lm;
  }
}, "ds_map_set");
var ds_map_destroy = tC(() => {}, "ds_map_destroy");
var ds_queue_create = tC(() => [], "ds_queue_create");
var file_text_open_write = tC(() => 0, "file_text_open_write");
var file_text_open_append = tC(() => 0, "file_text_open_append");
var file_delete = tC(() => 0, "file_delete");
var file_text_close = tC(() => {}, "file_text_close");
var file_text_write_real = tC(() => {}, "file_text_write_real");
var file_text_write_string = tC(() => {}, "file_text_write_string");
var file_text_writeln = tC(() => {}, "file_text_writeln");
var file_text_open_read = tC(() => -1, "file_text_open_read");
var file_text_readln = tC(() => "", "file_text_readln");
var file_text_read_string = tC(() => "", "file_text_read_string");
var file_text_read_real = tC(() => 0, "file_text_read_real");
var ds_list_read = tC(lU => {
  if (Array.isArray(lU)) {
    lU.length = 0;
  }
}, "ds_list_read");
var ds_map_set_post = tC((lU, lM, lm) => {
  let lJ = lU ? lU[lM] : undefined;
  if (lU) {
    lU[lM] = lm;
  }
  return lJ;
}, "ds_map_set_post");
var enable_loading = tC(() => {}, "enable_loading");
var window_set_caption = tC(() => {}, "window_set_caption");
var game_end = tC(() => {}, "game_end");
var game_restart = tC(() => {}, "game_restart");
var room_next = tC(() => -1, "room_next");
var randomise = tC(() => {}, "randomise");
var room_width = 640;
var room_height = 480;
var setRoomSize = tC((lU, lM) => {
  room_width = Number(lU) || 640;
  room_height = Number(lM) || 480;
}, "setRoomSize");
var room_speed = 30;
var nM = 30;
var nm = 30;
var nJ = [0, 0, 0, 0, 0, 0, 0, 0];
var nW = [640, 640, 640, 640, 640, 640, 640, 640];
var nV = [480, 480, 480, 480, 480, 480, 480, 480];
var nx = [0, 0, 0, 0, 0, 0, 0, 0];
var nT = [0, 0, 0, 0, 0, 0, 0, 0];
var nZ = 0;
var nK = "";
var nL = 33333.333333333336;
var nX = 0;
function set_current_time(lU) {
  nX = lU;
}
tC(set_current_time, "set_current_time");
function get_timer() {
  return Math.round((eI.frame || 0) * 1000000 / 30);
}
tC(get_timer, "get_timer");
var lerp = tC((lU, lM, lm) => lU + (lM - lU) * lm, "lerp");
var sqr = tC(lU => lU * lU, "sqr");
var median = tC((...lU) => {
  let lM = lU.slice().sort((lm, lJ) => lm - lJ);
  return lM[lM.length - 1 >> 1];
}, "median");
var dcos = tC(lU => Math.cos(lU * Math.PI / 180), "dcos");
var dsin = tC(lU => Math.sin(lU * Math.PI / 180), "dsin");
var darctan2 = tC((lU, lM) => Math.atan2(lU, lM) * 180 / Math.PI, "darctan2");
var object_is_ancestor = tC((lU, lM) => {
  let lm = typeof lU == "string" ? null : lU;
  let lJ = typeof lM == "string" ? null : lM;
  if (!lm || !lJ) {
    return false;
  }
  for (let lW = Object.getPrototypeOf(lm); lW; lW = Object.getPrototypeOf(lW)) {
    if (lW === lJ) {
      return true;
    }
  }
  return false;
}, "object_is_ancestor");
var gamepad_button_check = tC(() => false, "gamepad_button_check");
var gamepad_button_check_pressed = tC(() => false, "gamepad_button_check_pressed");
var gamepad_axis_value = tC(() => 0, "gamepad_axis_value");
var gfx = tC(() => i, "gfx");
function draw_sprite_ext_flash(lU, lM, lm, lJ, lW, lV, lx, lT, lZ) {
  let lK = gfx();
  if (lK) {
    lK.draw_sprite_flash(lU, lM, lm, lJ, lW, lV, lx, lT, lZ);
  }
}
tC(draw_sprite_ext_flash, "draw_sprite_ext_flash");
function draw_monster_body_part(lU, lM, lm, lJ) {
  let lW = gfx();
  if (lW) {
    lW.draw_sprite_ext(lU, lM, lm, lJ, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, this.image_alpha);
    if (this.flash === 1) {
      lW.draw_sprite_flash(lU, lM, lm, lJ, this.image_xscale, this.image_yscale, this.image_angle, this.image_blend, -Math.cos(this.fsiner / 5) * 0.4 + 0.6);
    }
  }
}
tC(draw_monster_body_part, "draw_monster_body_part");
function draw_monster_body_part_ext(lU, lM, lm, lJ, lW, lV, lx, lT, lZ) {
  let lK = gfx();
  if (lK) {
    lK.draw_sprite_ext(lU, lM, lm, lJ, lW, lV, lx, lT, lZ);
    if (this.flash === 1) {
      lK.draw_sprite_flash(lU, lM, lm, lJ, lW, lV, lx, lT, -Math.cos(this.fsiner / 5) * 0.4 + 0.6);
    }
  }
}
tC(draw_monster_body_part_ext, "draw_monster_body_part_ext");
function draw_sprite_ext_centerscale(lU, lM, lm, lJ, lW, lV, lx, lT, lZ) {
  let lK = gfx();
  if (!lK) {
    return;
  }
  let lL = sprite_get_xoffset(lU) * this.image_xscale;
  let lX = sprite_get_yoffset(lU) * this.image_yscale;
  let lg = sprite_get_width(lU) * this.image_xscale;
  let lQ = sprite_get_width(lU) * this.image_yscale;
  lK.draw_sprite_ext(lU, lM, lm - (lg - lL) * (lW - this.image_xscale) / 2, lJ - (lQ - lX) * (lV - this.image_yscale) / 2, lW, lV, lx, lT, lZ);
}
tC(draw_sprite_ext_centerscale, "draw_sprite_ext_centerscale");
function draw_sprite_part(lU, lM, lm, lJ, lW, lV, lx, lT) {
  let lZ = gfx();
  if (lZ) {
    lZ.draw_sprite_part(lU, lM, lm, lJ, lW, lV, lx, lT);
  }
}
tC(draw_sprite_part, "draw_sprite_part");
function draw_line_colour(lU, lM, lm, lJ, lW) {
  let lV = gfx();
  if (!lV) {
    return;
  }
  let lx = lV.color;
  lV.draw_set_color(lW);
  lV.draw_line(lU, lM, lm, lJ);
  lV.draw_set_color(lx);
}
tC(draw_line_colour, "draw_line_colour");
var draw_line_color = draw_line_colour;
function draw_circle_colour(lU, lM, lm, lJ, lW, lV) {
  let lx = gfx();
  if (!lx) {
    return;
  }
  let lT = lx.color;
  if (!lV && lm > 0 && Number.isFinite(lm) && Number.isFinite(lU) && Number.isFinite(lM) && lx.ctx && typeof lx.ctx.createRadialGradient == "function") {
    lx.draw_set_color(lJ);
    let lZ = lx.color;
    lx.draw_set_color(lW);
    let lK = lx.color;
    let lL = lZ !== lK ? lx.ctx.createRadialGradient(lU, lM, 0, lU, lM, lm) : null;
    if (lL && typeof lL.addColorStop == "function") {
      try {
        lL.addColorStop(0, lZ);
        lL.addColorStop(1, lK);
        lx.color = lL;
        lx.draw_circle(lU, lM, lm, false);
      } catch {
        lx.draw_set_color(lJ);
        lx.draw_circle(lU, lM, lm, false);
      }
      lx.draw_set_color(lT);
      return;
    }
  }
  lx.draw_set_color(lJ);
  lx.draw_circle(lU, lM, lm, lV);
  lx.draw_set_color(lT);
}
tC(draw_circle_colour, "draw_circle_colour");
var draw_circle_color = draw_circle_colour;
function draw_text_ext_transformed(lU, lM, lm, lJ, lW, lV, lx, lT = 0) {
  let lZ = gfx();
  if (lZ) {
    if (!lT && lZ.draw_text_transformed && lZ.lineHeight) {
      let lK = lV === undefined ? 1 : lV;
      let lL = lx === undefined ? 1 : lx;
      let lX = textExtLines(lZ, lm, lW, lK);
      let lg = (lJ === undefined || lJ < 0 ? lZ.lineHeight() : lJ) * lL;
      let lQ = lX.length * lg;
      let lO = lZ.valign;
      let lq = lM - (lO === "middle" ? lQ / 2 : lO === "bottom" ? lQ : 0);
      lZ.valign = "top";
      try {
        for (let lY of lX) {
          lZ.draw_text_transformed(lU, lq, lY, lK, lL, 0);
          lq += lg;
        }
      } finally {
        lZ.valign = lO;
      }
      return;
    }
    if (lZ.draw_text_ext_transformed) {
      lZ.draw_text_ext_transformed(lU, lM, lm, lJ, lW, lV, lx, lT);
    } else {
      lZ.draw_text(lU, lM, lm);
    }
  }
}
tC(draw_text_ext_transformed, "draw_text_ext_transformed");
function textExtLines(lU, lM, lm, lJ = 1) {
  let lW = [];
  for (let lV of String(lM).split("\n")) {
    if (!(lm > 0)) {
      lW.push(lV);
      continue;
    }
    let lx = "";
    for (let lT of lV.split(" ")) {
      let lZ = lx === "" ? lT : lx + " " + lT;
      if (lx !== "" && lU.string_width(lZ) * Math.abs(lJ) > lm) {
        lW.push(lx);
        lx = lT;
      } else {
        lx = lZ;
      }
    }
    lW.push(lx);
  }
  return lW;
}
tC(textExtLines, "textExtLines");
var scr_draw_in_box_ext_begin = tC(() => {}, "scr_draw_in_box_ext_begin");
var scr_angle_lerp = tC((lU, lM, lm) => lU + (((lM - lU) % 360 + 540) % 360 - 180) * lm, "scr_angle_lerp");
var radtodeg = tC(lU => lU * 180 / Math.PI, "radtodeg");
var degtorad = tC(lU => lU * Math.PI / 180, "degtorad");
var irandom_range = tC((lU, lM) => lU + Math.floor(eT.next() * (lM - lU + 1)), "irandom_range");
var make_colour_rgb = tC((lU, lM, lm) => "rgb(" + (lU | 0) + "," + (lM | 0) + "," + (lm | 0) + ")", "make_colour_rgb");
var M7 = make_colour_rgb;
var point_in_rectangle = tC((lU, lM, lm, lJ, lW, lV) => lU >= lm && lU <= lW && lM >= lJ && lM <= lV, "point_in_rectangle");
var string_pos = tC((lU, lM) => String(lM).indexOf(lU) + 1, "string_pos");
var sprite_get_width = tC(lU => EE[lU] ? EE[lU].w : 0, "sprite_get_width");
var sprite_get_height = tC(lU => EE[lU] ? EE[lU].h : 0, "sprite_get_height");
var keyboard_check_released = tC(lU => {
  let lM = I1[Number(lU)];
  if (lM) {
    return !!Eb.released[lM];
  } else {
    return false;
  }
}, "keyboard_check_released");
var audio_pause_sound = tC(lU => {
  let lM = lU && typeof lU == "object" ? lU : IM ? IM(lU) : null;
  if (lM) {
    I7(lM);
  }
}, "audio_pause_sound");
var audio_resume_sound = tC(lU => {
  let lM = lU && typeof lU == "object" ? lU : IM ? IM(lU) : null;
  if (lM) {
    II(lM);
  }
}, "audio_resume_sound");
var ds_list_find_value = tC((lU, lM) => Array.isArray(lU) ? lU[lM] : undefined, "ds_list_find_value");
var ds_list_shuffle = tC(lU => {
  if (Array.isArray(lU)) {
    for (let lM = lU.length - 1; lM > 0; lM--) {
      let lm = eS(lM);
      let lJ = lU[lM];
      lU[lM] = lU[lm];
      lU[lm] = lJ;
    }
  }
}, "ds_list_shuffle");
function draw_rectangle_colour(lU, lM, lm, lJ, lW, lV, lx, lT, lZ) {
  let lK = gfx();
  if (!lK) {
    return;
  }
  let lL = lK.color;
  lK.draw_set_color(lW);
  lK.draw_rectangle(lU, lM, lm, lJ, lZ);
  lK.draw_set_color(lL);
}
tC(draw_rectangle_colour, "draw_rectangle_colour");
var draw_rectangle_color = draw_rectangle_colour;
function draw_triangle_colour(lU, lM, lm, lJ, lW, lV, lx, lT, lZ, lK) {
  let lL = gfx();
  if (!lL) {
    return;
  }
  let lX = lL.color;
  lL.draw_set_color(lx);
  lL.draw_triangle(lU, lM, lm, lJ, lW, lV, lK);
  lL.draw_set_color(lX);
}
tC(draw_triangle_colour, "draw_triangle_colour");
var draw_triangle_color = draw_triangle_colour;
var shader_set_uniform_f = tC((lU, ...lM) => {
  if (isShaderChapter()) {
    setUniform(lU, lM);
  }
}, "shader_set_uniform_f");
var shader_get_uniform = tC((lU, lM) => isShaderChapter() ? lM : 0, "shader_get_uniform");
var sprite_get_texture = tC((lU, lM) => typeof Y == "number" && Y >= 4 ? {
  spr: lU,
  idx: lM | 0
} : null, "sprite_get_texture");
var sprite_get_uvs = tC(() => [0, 0, 1, 1, 0, 0, 1, 1], "sprite_get_uvs");
var surface_get_texture = tC(() => null, "surface_get_texture");
var texture_get_texel_width = tC(() => 1, "texture_get_texel_width");
var texture_get_texel_height = tC(() => 1, "texture_get_texel_height");
var texture_set_stage = tC((lU, lM) => {
  if (isShaderChapter()) {
    setSampler(lU, lM);
  }
}, "texture_set_stage");
var MY = Math.asin;
var Mb = Math.acos;
var MF = Math.atan;
var MS = Math.atan2;
var ord = tC(lU => String(lU).charCodeAt(0), "ord");
var chr = tC(lU => String.fromCharCode(lU), "chr");
var Mh = Math.log2;
var logn = tC((lU, lM) => Math.log(lM) / Math.log(lU), "logn");
var MA = Math.exp;
var frac = tC(lU => lU - Math.trunc(lU), "frac");
var real = tC(lU => Number(lU), "real");
function pal_swap_set(lU, lM) {
  let lm = i;
  if (lm) {
    lm.palSet(lU, lM);
  }
}
tC(pal_swap_set, "pal_swap_set");
function pal_swap_reset() {
  let lU = i;
  if (lU) {
    lU.palReset();
  }
}
tC(pal_swap_reset, "pal_swap_reset");
var string_delete = tC((lU, lM, lm) => String(lU).slice(0, lM - 1) + String(lU).slice(lM - 1 + lm), "string_delete");
var string_insert = tC((lU, lM, lm) => String(lM).slice(0, lm - 1) + lU + String(lM).slice(lm - 1), "string_insert");
var draw_get_alpha = tC(() => i ? i.alpha : 1, "draw_get_alpha");
var randomize = tC(() => {}, "randomize");
var random_set_seed = tC(() => {}, "random_set_seed");
var random_get_seed = tC(() => 0, "random_get_seed");
var array_push = tC((lU, ...lM) => {
  if (Array.isArray(lU)) {
    lU.push(...lM);
  }
}, "array_push");
var array_pop = tC(lU => Array.isArray(lU) ? lU.pop() : undefined, "array_pop");
var sprite_exists = tC(lU => typeof lU == "string" && !!EE[lU], "sprite_exists");
var script_execute = tC((lU, lM, ...lm) => {
  if (typeof lM == "function") {
    return lM.call(lU, ...lm);
  }
  if (typeof lM == "string" && laterChapter()) {
    let lJ = (m5[Y] || {})[lM] || (lM === "snd_play" ? snd_play : Ij[lM]);
    if (typeof lJ == "function") {
      return lJ.call(lU, ...lm);
    }
  }
}, "script_execute");
var laterChapter = tC(() => typeof Y == "number" && Y >= 4, "laterChapter");
function snd_play(lU, lM, lm) {
  if (typeof lM != "number" && typeof lm != "number") {
    return f(lU, lM);
  }
  if (typeof Y != "number" || !(Y >= 3)) {
    return f(lU);
  }
  let lJ = Number.isFinite(lM) ? lM : 1;
  let lW = Number.isFinite(lm) ? lm : 1;
  return f(lU, {
    volume: lJ,
    pitch: lW
  });
}
tC(snd_play, "snd_play");
var m5 = {};
function registerChapterScripts(lU, lM) {
  m5[lU] = lM;
}
tC(registerChapterScripts, "registerChapterScripts");
var audio_sound_pitch = tC((lU, lM) => {
  let lm = Number(lM);
  if (!Number.isFinite(lm) || lm <= 0) {
    return;
  }
  let lJ = lU && typeof lU == "object" ? lU : IM ? IM(lU) : null;
  if (lJ) {
    I3(lJ, lm);
  }
}, "audio_sound_pitch");
var audio_sound_get_pitch = tC(lU => {
  let lM = lU && typeof lU == "object" ? lU : IM ? IM(lU) : null;
  let lm = lM ? Number(lM.playbackRate) : NaN;
  if (Number.isFinite(lm) && lm > 0) {
    return lm;
  } else {
    return 1;
  }
}, "audio_sound_get_pitch");
var audio_group_set_gain = tC(() => {}, "audio_group_set_gain");
var audio_set_master_gain = tC(() => {}, "audio_set_master_gain");
var distance_to_object = tC(function (lU) {
  let lM = lU && typeof lU == "object" && !lU.destroyed && lU.x !== undefined ? lU : eI.first(lU);
  if (!lM || !this || typeof this != "object") {
    return 100000;
  }
  let lm = tW(this);
  let lJ = tW(lM);
  let lW = Math.max(lm[0] - lJ[2], 0, lJ[0] - lm[2]);
  let lV = Math.max(lm[1] - lJ[3], 0, lJ[1] - lm[3]);
  return Math.hypot(lW, lV);
}, "distance_to_object");
var room_goto_next = hosted("room_goto_next", () => {});
var scr_84_get_sprite = tC(lU => lU, "scr_84_get_sprite");
var mouse_x = 320;
var mouse_y = 240;
var mouse_check_button = tC(() => 0, "mouse_check_button");
var mouse_check_button_pressed = tC(() => 0, "mouse_check_button_pressed");
var mouse_check_button_released = tC(() => 0, "mouse_check_button_released");
var mouse_button = 0;
var mouse_wheel_up = tC(() => 0, "mouse_wheel_up");
var mouse_wheel_down = tC(() => 0, "mouse_wheel_down");
var i_ex = tC(lU => lU && instance_exists(lU) ? 1 : 0, "i_ex");
var mL = new Map();
var mX = 4000000;
var mg = 0;
var Surface = class TI {
  constructor(lU, lM) {
    let lm = Math.max(1, Math.round(lU) || 1);
    let lJ = Math.max(1, Math.round(lM) || 1);
    let lW = mL.get(lm + "x" + lJ);
    let lV = lW && lW.pop();
    let lx = null;
    if (lV) {
      mg -= lm * lJ;
      lx = lV.getContext("2d");
      if (lx && typeof lx.reset == "function") {
        lx.reset();
      } else {
        lV.width = lm;
        lV.height = lJ;
        lx = lV.getContext("2d");
      }
    } else {
      lV = document.createElement("canvas");
      lV.width = lm;
      lV.height = lJ;
      lx = lV.getContext("2d");
    }
    this.canvas = lV;
    this.ctx = lx;
    if (this.ctx) {
      this.ctx.imageSmoothingEnabled = false;
    }
  }
};
tC(Surface, "Surface");
var mO = Surface;
var mq = null;
var deadSurfaceCanvas = tC(() => {
  if (!mq) {
    mq = document.createElement("canvas");
    mq.width = 1;
    mq.height = 1;
  }
  return mq;
}, "deadSurfaceCanvas");
var mb = [];
var surface_create = tC((lU, lM) => new mO(lU, lM), "surface_create");
var surface_exists = tC(lU => lU instanceof mO && !!lU.ctx && !lU.freed, "surface_exists");
var surface_free = tC(lU => {
  mz++;
  if (!(lU instanceof mO) || lU.freed) {
    return;
  }
  let lM = lU.canvas;
  let lm = lM.width;
  let lJ = lM.height;
  if (lm * lJ > 1 && mg + lm * lJ <= mX && typeof (lU.ctx && lU.ctx.reset) == "function") {
    let lW = lm + "x" + lJ;
    let lV = mL.get(lW);
    if (lV) {
      lV.push(lM);
    } else {
      mL.set(lW, [lM]);
    }
    mg += lm * lJ;
    lU.canvas = deadSurfaceCanvas();
    lU.ctx = lU.canvas.getContext("2d");
  } else {
    lM.width = 1;
    lM.height = 1;
  }
  lU.freed = true;
}, "surface_free");
var surface_get_width = tC(lU => lU instanceof mO ? lU.canvas.width : 0, "surface_get_width");
var mh = null;
function ensureApplicationSurface() {
  mh ||= new mO(640, 480);
  return mh;
}
tC(ensureApplicationSurface, "ensureApplicationSurface");
c.build = ensureApplicationSurface;
E0(tC(function () {
  mb.length = 0;
  let lU = mh;
  if (!lU) {
    return;
  }
  if (lU.freed || !lU.canvas || lU.canvas.width !== 640 || lU.canvas.height !== 480 || !lU.ctx) {
    mh = null;
    return;
  }
  let lM = lU.ctx;
  if (typeof lM.reset == "function") {
    lM.reset();
  } else {
    lM.setTransform(1, 0, 0, 1, 0, 0);
    lM.globalAlpha = 1;
    lM.globalCompositeOperation = "source-over";
  }
  lM.imageSmoothingEnabled = false;
  lM.clearRect(0, 0, 640, 480);
}, "applicationSurfaceReset"));
var appFresh = tC(lU => {
  if (lU && lU === mh && c.lazy) {
    c.lazy();
  }
}, "appFresh");
c.resetBlend = () => {
  NV = 0;
};
function surface_copy_part(lU, lM, lm, lJ, lW, lV, lx, lT) {
  if (!surface_exists(lU) || !surface_exists(lJ)) {
    return;
  }
  appFresh(lJ);
  let lZ = Math.max(0, Math.round(lx) || 0);
  let lK = Math.max(0, Math.round(lT) || 0);
  if (!lZ || !lK) {
    return;
  }
  mz++;
  let lL = lU.ctx;
  lL.save();
  lL.globalAlpha = 1;
  lL.globalCompositeOperation = "source-over";
  let lX = Math.round(lW) || 0;
  let lg = Math.round(lV) || 0;
  let lQ = lZ;
  let lO = lK;
  let lq = Math.round(lM) || 0;
  let lY = Math.round(lm) || 0;
  if (lX < 0) {
    lq -= lX;
    lQ += lX;
    lX = 0;
  }
  if (lg < 0) {
    lY -= lg;
    lO += lg;
    lg = 0;
  }
  lQ = Math.min(lQ, lJ.canvas.width - lX);
  lO = Math.min(lO, lJ.canvas.height - lg);
  if (lQ > 0 && lO > 0 && eb && eb() !== null) {
    lL.clearRect(lq, lY, lQ, lO);
  }
  if (lQ > 0 && lO > 0) {
    lL.drawImage(lJ.canvas, lX, lg, lQ, lO, lq, lY, lQ, lO);
  }
  lL.restore();
}
tC(surface_copy_part, "surface_copy_part");
var surface_copy = tC((lU, lM, lm, lJ) => surface_copy_part(lU, lM, lm, lJ, 0, 0, surface_get_width(lJ), surface_get_height(lJ)), "surface_copy");
var display_get_gui_width = tC(() => 640, "display_get_gui_width");
var display_get_gui_height = tC(() => 480, "display_get_gui_height");
var surface_get_height = tC(lU => lU instanceof mO ? lU.canvas.height : 0, "surface_get_height");
function surface_set_target(lU) {
  let lM = i;
  if (!lM || !surface_exists(lU)) {
    return false;
  } else {
    mz++;
    mb.push(lM.ctx);
    lM.ctx = lU.ctx;
    applyBlend(lM.ctx);
    return true;
  }
}
tC(surface_set_target, "surface_set_target");
function surface_reset_target() {
  let lU = i;
  if (!lU || !mb.length) {
    return false;
  } else {
    mz++;
    lU.ctx = mb.pop();
    applyBlend(lU.ctx);
    return true;
  }
}
tC(surface_reset_target, "surface_reset_target");
var mG = 16;
var my = {
  ring: [],
  frame: -1,
  n: 0,
  ox: 0,
  oy: 0,
  last: null,
  full: null,
  fullCv: null
};
var mz = 0;
function surfaceTinted(lU, lM, lm, lJ, lW, lV) {
  my.ox = 0;
  my.oy = 0;
  if (lV == null || typeof Y != "number" || !(Y >= 3)) {
    return null;
  }
  let lx = e9(lV);
  if (!lx || lx === IG.white || lx === "#ffffff" || lx === "#fff" || lx === "white" || lx === "rgb(255,255,255)") {
    return null;
  }
  let lT = Math.max(1, Math.ceil(lJ));
  let lZ = Math.max(1, Math.ceil(lW));
  if (eI.frame !== my.frame) {
    my.frame = eI.frame;
    my.n = 0;
    my.last = null;
    my.full = null;
  }
  let lK = lU.canvas.width;
  let lL = lU.canvas.height;
  if ((lM !== 0 || lm !== 0 || lJ !== lK || lW !== lL) && lU !== mh && Number.isInteger(lM) && Number.isInteger(lm) && Number.isInteger(lJ) && Number.isInteger(lW) && lM >= 0 && lm >= 0 && lM + lJ <= lK && lm + lW <= lL && (!i || i.ctx !== lU.ctx)) {
    let lO = my.full;
    if (lO && lO.s === lU && lO.css === lx && lO.ep === mz && lO.w === lK && lO.h === lL) {
      my.ox = lM;
      my.oy = lm;
      return my.fullCv;
    }
    let lq = my.last;
    if (lq && lq.s === lU && lq.css === lx && lq.ep === mz) {
      let lY = my.fullCv;
      if (!lY) {
        lY = my.fullCv = document.createElement("canvas");
        lY.__name = "surface_tint";
      }
      if (lY.width !== lK || lY.height !== lL) {
        lY.width = lK;
        lY.height = lL;
      }
      let lb = lY.getContext && lY.getContext("2d");
      if (lb) {
        lb.setTransform(1, 0, 0, 1, 0, 0);
        lb.globalAlpha = 1;
        lb.globalCompositeOperation = "copy";
        lb.drawImage(lU.canvas, 0, 0);
        lb.globalCompositeOperation = "multiply";
        lb.fillStyle = lx;
        lb.fillRect(0, 0, lK, lL);
        lb.globalCompositeOperation = "destination-in";
        lb.drawImage(lU.canvas, 0, 0);
        lb.globalCompositeOperation = "source-over";
        my.full = {
          s: lU,
          css: lx,
          ep: mz,
          w: lK,
          h: lL
        };
        my.ox = lM;
        my.oy = lm;
        return lY;
      }
    }
    my.last = {
      s: lU,
      css: lx,
      ep: mz
    };
  } else {
    my.last = null;
  }
  let lX = my.n++ % mG;
  let lg = my.ring[lX];
  if (!lg) {
    lg = my.ring[lX] = document.createElement("canvas");
    lg.__name = "surface_tint";
  }
  if (lg.width !== lT || lg.height !== lZ) {
    lg.width = lT;
    lg.height = lZ;
  }
  let lQ = lg.getContext && lg.getContext("2d");
  if (lQ) {
    lQ.setTransform(1, 0, 0, 1, 0, 0);
    lQ.globalAlpha = 1;
    lQ.globalCompositeOperation = "copy";
    lQ.drawImage(lU.canvas, lM, lm, lJ, lW, 0, 0, lJ, lW);
    lQ.globalCompositeOperation = "multiply";
    lQ.fillStyle = lx;
    lQ.fillRect(0, 0, lT, lZ);
    lQ.globalCompositeOperation = "destination-in";
    lQ.drawImage(lU.canvas, lM, lm, lJ, lW, 0, 0, lJ, lW);
    lQ.globalCompositeOperation = "source-over";
    return lg;
  } else {
    return null;
  }
}
tC(surfaceTinted, "surfaceTinted");
function draw_surface_ext(lU, lM, lm, lJ = 1, lW = 1, lV = 0, lx, lT = 1) {
  let lZ = i;
  if (!lZ || !lZ.ctx || !surface_exists(lU) || (appFresh(lU), boundShader() && shadeSurface(lZ, lU, lM, lm, lJ, lW, lV, lx, lT))) {
    return;
  }
  let lK = surfaceTinted(lU, 0, 0, lU.canvas.width, lU.canvas.height, lx);
  let lL = lZ.ctx;
  lL.save();
  lL.globalAlpha = Math.max(0, Math.min(1, lT * (lZ.alpha === undefined ? 1 : lZ.alpha)));
  lL.translate(lM, lm);
  if (lV) {
    lL.rotate(-lV * Math.PI / 180);
  }
  lL.scale(lJ, lW);
  lL.drawImage(lK || lU.canvas, 0, 0);
  lL.restore();
}
tC(draw_surface_ext, "draw_surface_ext");
var draw_surface = tC((lU, lM, lm) => draw_surface_ext(lU, lM, lm, 1, 1, 0, undefined, 1), "draw_surface");
function draw_surface_stretched(lU, lM, lm, lJ, lW) {
  if (!!surface_exists(lU) && !!lU.canvas && !!lU.canvas.width && !!lU.canvas.height) {
    draw_surface_ext(lU, lM, lm, lJ / lU.canvas.width, lW / lU.canvas.height, 0, undefined, 1);
  }
}
tC(draw_surface_stretched, "draw_surface_stretched");
function draw_ellipse(lU, lM, lm, lJ, lW) {
  let lV = i;
  if (!lV || !lV.ctx) {
    return;
  }
  let lx = lV.ctx;
  let lT = Math.abs(lm - lU) / 2;
  let lZ = Math.abs(lJ - lM) / 2;
  if (!!(lT > 0) && !!(lZ > 0) && !!Number.isFinite(lT) && !!Number.isFinite(lZ)) {
    lx.globalAlpha = lV.alpha === undefined ? 1 : lV.alpha;
    lx.fillStyle = lx.strokeStyle = lV.color;
    lx.beginPath();
    if (lx.ellipse) {
      lx.ellipse((lU + lm) / 2, (lM + lJ) / 2, lT, lZ, 0, 0, Math.PI * 2);
    }
    if (lW) {
      lx.stroke();
    } else {
      lx.fill();
    }
    lx.globalAlpha = 1;
  }
}
tC(draw_ellipse, "draw_ellipse");
function draw_text_ext(lU, lM, lm, lJ, lW) {
  let lV = i;
  if (!lV) {
    return;
  }
  if (!lV.lineHeight) {
    lV.draw_text(lU, lM, lm);
    return;
  }
  let lx = textExtLines(lV, lm, lW);
  let lT = lJ === undefined || lJ < 0 ? lV.lineHeight() : lJ;
  let lZ = lx.length * lT;
  let lK = lV.valign;
  let lL = lM - (lK === "middle" ? lZ / 2 : lK === "bottom" ? lZ : 0);
  lV.valign = "top";
  try {
    for (let lX of lx) {
      lV.draw_text(lU, lL, lX);
      lL += lT;
    }
  } finally {
    lV.valign = lK;
  }
}
tC(draw_text_ext, "draw_text_ext");
var J6 = eN;
var resolve_trophies = tC(() => {}, "resolve_trophies");
var scr_is_switch_os = tC(() => false, "scr_is_switch_os");
function draw_line_width_colour(lU, lM, lm, lJ, lW, lV) {
  let lx = gfx();
  if (!lx) {
    return;
  }
  let lT = lx.color;
  lx.draw_set_color(lV);
  lx.draw_line_width(lU, lM, lm, lJ, lW);
  lx.draw_set_color(lT);
}
tC(draw_line_width_colour, "draw_line_width_colour");
var draw_line_width_color = draw_line_width_colour;
function draw_text_transformed_colour(lU, lM, lm, lJ, lW, lV, lx, lT, lZ, lK, lL) {
  let lX = gfx();
  if (!lX) {
    return;
  }
  let lg = lX.color;
  let lQ = lX.alpha;
  lX.draw_set_color(lx);
  if (lL !== undefined) {
    lX.draw_set_alpha(lL);
  }
  lX.draw_text_transformed(lU, lM, lm, lJ, lW, lV);
  lX.draw_set_color(lg);
  lX.draw_set_alpha(lQ);
}
tC(draw_text_transformed_colour, "draw_text_transformed_colour");
var draw_text_transformed_color = draw_text_transformed_colour;
function draw_sprite_general(lU, lM, lm, lJ, lW, lV, lx, lT, lZ, lK, lL, lX, lg, lQ, lO, lq) {
  let lY = gfx();
  if (lY) {
    lY.draw_sprite_part_ext(lU, lM, lm, lJ, lW, lV, lx, lT, lZ, lK, lX, lq === undefined ? 1 : lq);
  }
}
tC(draw_sprite_general, "draw_sprite_general");
function draw_sprite_stretched_ext(lU, lM, lm, lJ, lW, lV, lx, lT) {
  let lZ = gfx();
  if (!lZ) {
    return;
  }
  let lK = sprite_get_width(lU) || 1;
  let lL = sprite_get_height(lU) || 1;
  lZ.draw_sprite_ext(lU, lM, lm + sprite_get_xoffset(lU) * (lW / lK), lJ + sprite_get_yoffset(lU) * (lV / lL), lW / lK, lV / lL, 0, lx, lT === undefined ? 1 : lT);
}
tC(draw_sprite_stretched_ext, "draw_sprite_stretched_ext");
var Jm = 4096;
var JJ = false;
function drawTiled(lU, lM, lm, lJ, lW, lV, lx, lT) {
  let lZ = gfx();
  if (!lZ) {
    return;
  }
  let lK = lW === undefined ? 1 : lW;
  let lL = lV === undefined ? 1 : lV;
  let lX = lT === undefined ? 1 : lT;
  let lg = lx === undefined ? IG.white : lx;
  let lQ = (sprite_get_width(lU) || 0) * Math.abs(lK);
  let lO = (sprite_get_height(lU) || 0) * Math.abs(lL);
  if (!Number.isFinite(lm) || !Number.isFinite(lJ) || !(lQ > 0.5) || !(lO > 0.5)) {
    lZ.draw_sprite_ext(lU, lM, lm, lJ, lK, lL, 0, lg, lX);
    return;
  }
  let lq = -lQ;
  let lY = -lO;
  let lb = 640 + lQ;
  let lF = 480 + lO;
  let lS = lm - Math.ceil((lm - lq) / lQ) * lQ;
  let lw = lJ - Math.ceil((lJ - lY) / lO) * lO;
  let lk = Math.ceil((lb - lS) / lQ);
  let lh = Math.ceil((lF - lw) / lO);
  if (lk * lh > Jm) {
    if (!JJ) {
      JJ = true;
      console.warn("draw_sprite_tiled: " + lU + " would need " + lk * lh + " tiles at scale " + lK + "x" + lL + " - drawing " + Jm + " of them");
    }
  }
  let lH = 0;
  for (let lA = lw; lA < lF && lH < Jm; lA += lO) {
    for (let lv = lS; lv < lb && lH < Jm; lv += lQ) {
      lZ.draw_sprite_ext(lU, lM, lv, lA, lK, lL, 0, lg, lX);
      lH++;
    }
  }
}
tC(drawTiled, "drawTiled");
var draw_sprite_tiled = tC((lU, lM, lm, lJ) => drawTiled(lU, lM, lm, lJ, 1, 1, IG.white, 1), "draw_sprite_tiled");
var draw_sprite_tiled_ext = tC((lU, lM, lm, lJ, lW, lV, lx, lT) => drawTiled(lU, lM, lm, lJ, lW, lV, lx, lT), "draw_sprite_tiled_ext");
function draw_sprite_pos(lU, lM, lm, lJ, lW, lV, lx, lT, lZ, lK, lL) {
  let lX = gfx();
  if (!lX) {
    return;
  }
  let lg = [lm, lW, lx, lZ];
  let lQ = [lJ, lV, lT, lK];
  if (lg.some(lh => !Number.isFinite(lh)) || lQ.some(lh => !Number.isFinite(lh))) {
    return;
  }
  let lO = sprite_get_width(lU) || 1;
  let lq = sprite_get_height(lU) || 1;
  let lY = sprite_get_xoffset(lU);
  let lb = sprite_get_yoffset(lU);
  let lF = lL === undefined ? 1 : lL;
  let lS = lX.ctx;
  if (!lS || typeof lS.transform != "function") {
    let lh = Math.min.apply(null, lg);
    let lH = Math.max.apply(null, lg);
    let lA = Math.min.apply(null, lQ);
    let lv = Math.max.apply(null, lQ);
    lX.draw_sprite_ext(lU, lM, lh + lY * ((lH - lh) / lO), lA + lb * ((lv - lA) / lq), (lH - lh) / lO, (lv - lA) / lq, 0, undefined, lF);
    return;
  }
  let lw = (lB, lR, lP, lD, lC, lj, lG, ly) => {
    lS.save();
    lS.transform(lP, lD, lC, lj, lB - lG * lP - ly * lC, lR - lG * lD - ly * lj);
    lX.draw_sprite_ext(lU, lM, lY, lb, 1, 1, 0, undefined, lF);
    lS.restore();
  };
  if (Math.abs(lm + lx - (lW + lZ)) < 0.01 && Math.abs(lJ + lT - (lV + lK)) < 0.01) {
    lw(lm, lJ, (lW - lm) / lO, (lV - lJ) / lO, (lZ - lm) / lq, (lK - lJ) / lq, 0, 0);
    return;
  }
  let lk = (lB, lR) => {
    lS.save();
    lS.beginPath();
    lS.moveTo(lB[0], lB[1]);
    lS.lineTo(lB[2], lB[3]);
    lS.lineTo(lB[4], lB[5]);
    lS.closePath();
    lS.clip();
    lR();
    lS.restore();
  };
  lk([lm, lJ, lW, lV, lZ, lK], () => lw(lm, lJ, (lW - lm) / lO, (lV - lJ) / lO, (lZ - lm) / lq, (lK - lJ) / lq, 0, 0));
  lk([lW, lV, lx, lT, lZ, lK], () => lw(lx, lT, (lx - lZ) / lO, (lT - lK) / lO, (lx - lW) / lq, (lT - lV) / lq, lO, lq));
}
tC(draw_sprite_pos, "draw_sprite_pos");
function draw_surface_part_ext(lU, lM, lm, lJ, lW, lV, lx, lT, lZ, lK, lL) {
  let lX = i;
  if (!lX || !lX.ctx || !surface_exists(lU) || (appFresh(lU), ![lM, lm, lJ, lW, lV, lx].every(Number.isFinite) || !(lJ > 0) || !(lW > 0))) {
    return;
  }
  let lg = lL === undefined ? 1 : lL;
  let lQ = surfaceTinted(lU, lM, lm, lJ, lW, lK);
  let lO = lX.ctx;
  lO.save();
  lO.globalAlpha = Math.max(0, Math.min(1, lg * (lX.alpha === undefined ? 1 : lX.alpha)));
  if (lQ) {
    lO.drawImage(lQ, my.ox, my.oy, lJ, lW, lV, lx, lJ * (lT === undefined ? 1 : lT), lW * (lZ === undefined ? 1 : lZ));
  } else {
    lO.drawImage(lU.canvas, lM, lm, lJ, lW, lV, lx, lJ * (lT === undefined ? 1 : lT), lW * (lZ === undefined ? 1 : lZ));
  }
  lO.restore();
}
tC(draw_surface_part_ext, "draw_surface_part_ext");
function draw_surface_part(lU, lM, lm, lJ, lW, lV, lx) {
  draw_surface_part_ext(lU, lM, lm, lJ, lW, lV, lx, 1, 1, undefined, 1);
}
tC(draw_surface_part, "draw_surface_part");
function draw_surface_general(lU, lM, lm, lJ, lW, lV, lx, lT = 1, lZ = 1, lK = 0, lL, lX, lg, lQ, lO = 1) {
  let lq = i;
  if (!lq || !lq.ctx || !surface_exists(lU) || (appFresh(lU), ![lM, lm, lJ, lW, lV, lx].every(Number.isFinite) || !(lJ > 0) || !(lW > 0))) {
    return;
  }
  let lY = lq.ctx;
  lY.save();
  lY.globalAlpha = Math.max(0, Math.min(1, lO * (lq.alpha === undefined ? 1 : lq.alpha)));
  lY.translate(lV, lx);
  if (lK) {
    lY.rotate(-lK * Math.PI / 180);
  }
  lY.scale(lT, lZ);
  let lb = surfaceTinted(lU, lM, lm, lJ, lW, lL);
  if (lb) {
    lY.drawImage(lb, my.ox, my.oy, lJ, lW, 0, 0, lJ, lW);
  } else {
    lY.drawImage(lU.canvas, lM, lm, lJ, lW, 0, 0, lJ, lW);
  }
  lY.restore();
}
tC(draw_surface_general, "draw_surface_general");
var draw_clear = tC(lU => {
  let lM = gfx();
  if (lM && lM.draw_rectangle) {
    let lm = lM.color;
    lM.draw_set_color(lU);
    lM.draw_rectangle(0, 0, 640, 480, false);
    lM.draw_set_color(lm);
  }
}, "draw_clear");
var draw_get_font = tC(() => {
  let lU = gfx();
  if (lU) {
    return lU.font;
  } else {
    return undefined;
  }
}, "draw_get_font");
var gpu_set_blendmode_ext_sepalpha = tC((lU, lM, lm, lJ) => {
  let lW = i;
  if (!lW || !lW.ctx) {
    return;
  }
  let lV = lm | 0;
  let lx = lJ | 0;
  if (lV === NO && lx === NK) {
    lW.ctx.globalCompositeOperation = "source-atop";
    return;
  }
  lW.ctx.globalCompositeOperation = blendFromFactors(lU | 0, lM | 0);
}, "gpu_set_blendmode_ext_sepalpha");
var shader_get_sampler_index = tC((lU, lM) => isShaderChapter() ? lM : -1, "shader_get_sampler_index");
var surface_resize = tC((lU, lM, lm) => {
  if (!(lU instanceof mO) || lU.freed) {
    return;
  }
  mz++;
  let lJ = Math.max(1, Math.round(lM) || 1);
  let lW = Math.max(1, Math.round(lm) || 1);
  if (lU.canvas.width !== lJ || lU.canvas.height !== lW) {
    lU.canvas.width = lJ;
    lU.canvas.height = lW;
    if (lU.ctx) {
      lU.ctx.imageSmoothingEnabled = false;
    }
  }
}, "surface_resize");
function instAtPoint(lU, lM, lm) {
  let lJ = Number(lU);
  let lW = Number(lM);
  if (!Number.isFinite(lJ) || !Number.isFinite(lW)) {
    return null;
  }
  let lV = typeof lm == "number" ? (ek(lm) || {}).name : typeof lm == "string" ? lm : lm && lm.name || null;
  if (!lV) {
    return null;
  }
  for (let lx of eI.list) {
    if (lx.destroyed || !lx.is || !lx.is(lV)) {
      continue;
    }
    let lT = tW(lx);
    if (lT && lJ >= lT[0] && lJ <= lT[2] && lW >= lT[1] && lW <= lT[3]) {
      return lx;
    }
  }
  return null;
}
tC(instAtPoint, "instAtPoint");
var position_meeting = tC((lU, lM, lm) => laterChapter() && lm && typeof lm == "object" && typeof lm.is == "function" ? !!tK(Number(lU), Number(lM), lm, true, false) : !!instAtPoint(lU, lM, lm), "position_meeting");
var instance_position = tC((lU, lM, lm) => instAtPoint(lU, lM, lm) || undefined, "instance_position");
var instance_deactivate_layer = tC(() => {}, "instance_deactivate_layer");
var camera_set_view_target = tC((lU, lM) => {
  if (eI.view.live) {
    eI.view.target = lM === -4 || lM === null || lM === undefined ? null : lM;
  }
}, "camera_set_view_target");
var camera_get_view_target = tC(() => eI.view.live && eI.view.target || -1, "camera_get_view_target");
var camera_set_view_pos = tC((lU, lM, lm) => {
  if (eI.view.live) {
    if (Number.isFinite(Number(lM))) {
      eI.view.x = Number(lM);
    }
    if (Number.isFinite(Number(lm))) {
      eI.view.y = Number(lm);
    }
  }
}, "camera_set_view_pos");
var array_create = tC((lU, lM) => new Array(Math.max(0, lU | 0)).fill(lM === undefined ? 0 : lM), "array_create");
var array_delete = tC((lU, lM, lm) => {
  if (Array.isArray(lU)) {
    lU.splice(lM, lm === undefined ? 1 : lm);
  }
}, "array_delete");
var ds_list_clear = tC(lU => {
  if (Array.isArray(lU)) {
    lU.length = 0;
  }
}, "ds_list_clear");
var ds_list_delete = tC((lU, lM) => {
  if (Array.isArray(lU)) {
    lU.splice(lM, 1);
  }
}, "ds_list_delete");
var ds_list_find_index = tC((lU, lM) => Array.isArray(lU) ? lU.indexOf(lM) : -1, "ds_list_find_index");
var string_replace = tC((lU, lM, lm) => {
  let lJ = String(lU).indexOf(lM);
  if (lJ < 0) {
    return String(lU);
  } else {
    return String(lU).slice(0, lJ) + lm + String(lU).slice(lJ + String(lM).length);
  }
}, "string_replace");
var string_digits = tC(lU => String(lU).replace(/[^0-9]/g, ""), "string_digits");
var string_format = tC((lU, lM, lm) => Number(lU).toFixed(Math.max(0, lm | 0)).padStart(Math.max(0, lM | 0), " "), "string_format");
var string_format_zero = tC((lU, lM, lm) => Number(lU).toFixed(Math.max(0, (lm || 0) | 0)).padStart(Math.max(0, lM | 0), "0"), "string_format_zero");
var string_format_auto = tC(lU => String(lU), "string_format_auto");
var object_get_name = tC(lU => lU && lU.name || String(lU), "object_get_name");
var sprite_get_name = tC(lU => String(lU), "sprite_get_name");
var Jz = new Map();
var sprite_set_offset = tC((lU, lM, lm) => {
  if (typeof Y != "number" || !(Y >= 5)) {
    return;
  }
  let lJ = EE[lU];
  if (lJ) {
    if (!Jz.has(lJ)) {
      Jz.set(lJ, [lJ.ox, lJ.oy]);
    }
    lJ.ox = Number(lM) || 0;
    lJ.oy = Number(lm) || 0;
  }
}, "sprite_set_offset");
var sprite_offsets_restore = tC(() => {
  for (let [lU, [lM, lm]] of Jz) {
    lU.ox = lM;
    lU.oy = lm;
  }
  Jz.clear();
}, "sprite_offsets_restore");
var sprite_get_bbox_left = tC(() => 0, "sprite_get_bbox_left");
var sprite_get_bbox_top = tC(() => 0, "sprite_get_bbox_top");
var room_exists = tC(() => true, "room_exists");
var room_restart = hosted("room_restart", () => {});
var audio_exists = tC(() => true, "audio_exists");
var audio_is_paused = tC(() => false, "audio_is_paused");
var sound_pause = tC(() => {}, "sound_pause");
var sound_pitch = tC(() => {}, "sound_pitch");
var get_string = tC((lU, lM) => lM === undefined ? "" : lM, "get_string");
var show_question = tC(lU => false, "show_question");
var os_get_region = tC(() => {
  let lU = globalThis.navigator && globalThis.navigator.language || "";
  let lM = /[-_]([A-Za-z]{2})(?:\b|$)/.exec(lU);
  if (lM) {
    return lM[1].toUpperCase();
  } else {
    return "";
  }
}, "os_get_region");
var debug_print = tC(() => {}, "debug_print");
var display_get_height = tC(() => 480, "display_get_height");
var window_get_height = tC(() => 480, "window_get_height");
var window_set_size = tC(() => {}, "window_set_size");
var variable_global_set = tC((lU, lM) => {
  J[lU] = lM;
}, "variable_global_set");
var variable_instance_get_names = tC(lU => lU ? Object.keys(lU) : [], "variable_instance_get_names");
var Wx = hosted("layer_create", () => 0);
var WT = hosted("layer_get_id", () => 0);
var WZ = hosted("layer_get_x", () => 0);
var WK = hosted("layer_get_y", () => 0);
var WL = hosted("layer_get_hspeed", () => 0);
var WX = hosted("layer_hspeed", () => {});
var Wg = hosted("layer_background_create", () => 0);
var WQ = hosted("layer_background_destroy", () => {});
var WO = hosted("layer_background_htiled", () => {});
var Wq = hosted("layer_background_speed", () => {});
var WY = hosted("layer_background_stretch", () => {});
var Wb = hosted("mp_grid_add_cell", () => {});
var WF = hosted("mp_grid_clear_cell", () => {});
var WS = hosted("mp_grid_path", () => false);
var Ww = hosted("mp_grid_create", () => -1);
var Wk = hosted("mp_grid_destroy", () => {});
var Wh = hosted("mp_grid_add_rectangle", () => {});
var WH = hosted("mp_grid_add_instances", () => {});
var WA = hosted("mp_grid_clear_all", () => {});
var Wv = hosted("mp_grid_clear_rectangle", () => {});
var Wf = hosted("mp_grid_get_cell", () => 0);
var WB = hosted("mp_grid_draw", () => {});
var instance_deactivate_object = hosted("instance_deactivate_object", () => {});
var instance_activate_object = hosted("instance_activate_object", () => {});
var instance_deactivate_all = hosted("instance_deactivate_all", () => {});
var instance_activate_all = hosted("instance_activate_all", () => {});
var instance_deactivate_region = hosted("instance_deactivate_region", () => {});
var instance_activate_region = hosted("instance_activate_region", () => {});
var Wy = 0;
var Wz = {
  name: "",
  data: {},
  dirty: false
};
var iniKey = tC(lU => "dr-ini:" + String(lU || "dr.ini").toLowerCase(), "iniKey");
function iniRead(lU) {
  Wz.name = String(lU || "dr.ini");
  try {
    Wz.data = JSON.parse(globalThis.localStorage?.getItem(iniKey(Wz.name)) || "{}") || {};
  } catch {
    Wz.data = {};
  }
  if (typeof Wz.data != "object" || !Wz.data) {
    Wz.data = {};
  }
  Wz.dirty = false;
}
tC(iniRead, "iniRead");
var ini_open = tC(lU => iniRead(lU), "ini_open");
var ini_open_from_string = tC(lU => {
  Wz.data = {};
  Wz.dirty = false;
  let lM = "";
  for (let lm of String(lU || "").split(/\r?\n/)) {
    let lJ = /^\s*\[(.*)\]\s*$/.exec(lm);
    if (lJ) {
      lM = lJ[1];
      Wz.data[lM] = Wz.data[lM] || {};
      continue;
    }
    let lW = /^\s*([^=]+?)\s*=\s*(.*?)\s*$/.exec(lm);
    if (lW) {
      Wz.data[lM] = Wz.data[lM] || {};
      Wz.data[lM][lW[1]] = lW[2].replace(/^"|"$/g, "");
    }
  }
}, "ini_open_from_string");
var ini_close = tC(() => {
  if (Wz.dirty) {
    try {
      globalThis.localStorage?.setItem(iniKey(Wz.name), JSON.stringify(Wz.data));
    } catch {}
  }
  Wz.dirty = false;
  return "";
}, "ini_close");
var iniGet = tC((lU, lM, lm) => {
  let lJ = Wz.data[String(lU)];
  if (!lJ) {
    return lm;
  }
  let lW = lJ[String(lM)];
  if (lW === undefined) {
    return lm;
  } else {
    return lW;
  }
}, "iniGet");
var iniSet = tC((lU, lM, lm) => {
  let lJ = String(lU);
  Wz.data[lJ] = Wz.data[lJ] || {};
  Wz.data[lJ][String(lM)] = lm;
  Wz.dirty = true;
}, "iniSet");
var ini_read_real = tC((lU, lM, lm) => {
  let lJ = Number(iniGet(lU, lM, lm === undefined ? 0 : lm));
  if (Number.isFinite(lJ)) {
    return lJ;
  } else {
    return 0;
  }
}, "ini_read_real");
var ini_write_real = tC((lU, lM, lm) => iniSet(lU, lM, Number(lm) || 0), "ini_write_real");
var ini_read_string = tC((lU, lM, lm) => String(iniGet(lU, lM, lm === undefined ? "" : lm)), "ini_read_string");
var ini_write_string = tC((lU, lM, lm) => iniSet(lU, lM, String(lm)), "ini_write_string");
var VI = {
  read: iniRead,
  get: iniGet,
  set: iniSet,
  close: tC(() => ini_close(), "close"),
  all: tC(() => Wz.data, "all")
};
var array_resize = tC((lU, lM) => {
  if (Array.isArray(lU)) {
    let lm = Math.max(0, lM | 0);
    while (lU.length > lm) {
      lU.pop();
    }
    while (lU.length < lm) {
      lU.push(0);
    }
  }
}, "array_resize");
var color_get_red = tC(lU => colNum(lU) & 255, "color_get_red");
var color_get_green = tC(lU => colNum(lU) >> 8 & 255, "color_get_green");
var color_get_blue = tC(lU => colNum(lU) >> 16 & 255, "color_get_blue");
var VJ = color_get_red;
var VW = color_get_green;
var VV = color_get_blue;
function colNum(lU) {
  if (typeof lU == "number") {
    return lU;
  }
  let lM = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.exec(String(lU));
  if (lM) {
    return +lM[1] | +lM[2] << 8 | +lM[3] << 16;
  }
  let lm = /^#?([0-9a-f]{6})$/i.exec(String(lU));
  if (!lm) {
    return 0;
  }
  let lJ = parseInt(lm[1].slice(0, 2), 16);
  let lW = parseInt(lm[1].slice(2, 4), 16);
  let lV = parseInt(lm[1].slice(4, 6), 16);
  return lJ | lW << 8 | lV << 16;
}
tC(colNum, "colNum");
var point_distance_3d = tC((lU, lM, lm, lJ, lW, lV) => Math.sqrt((lJ - lU) ** 2 + (lW - lM) ** 2 + (lV - lm) ** 2), "point_distance_3d");
var string_byte_length = tC(lU => String(lU).length, "string_byte_length");
var json_encode = tC(lU => JSON.stringify(lU), "json_encode");
var date_current_datetime = tC(() => Date.now() / 86400000, "date_current_datetime");
var environment_get_variable = tC(() => "", "environment_get_variable");
var keyboard_check_direct = tC(() => false, "keyboard_check_direct");
var keyboard_clear = tC(() => {}, "keyboard_clear");
var VO = {};
var _normPath = tC(lU => String(lU || "").replace(/\\/g, "/").replace(/^\.?\//, "").toLowerCase(), "_normPath");
function registerModFiles(lU, lM) {
  VO[lU] = new Set((lM || []).map(_normPath));
}
tC(registerModFiles, "registerModFiles");
var file_exists = tC(lU => {
  let lM = D;
  if (lM == null) {
    return false;
  }
  let lm = VO[lM];
  return !!lm && !!lm.has(_normPath(lU));
}, "file_exists");
var buffer_create = tC(() => null, "buffer_create");
var buffer_get_size = tC(() => 0, "buffer_get_size");
var buffer_write = tC(() => {}, "buffer_write");
var buffer_save_async = tC(() => -1, "buffer_save_async");
var buffer_async_group_begin = tC(() => {}, "buffer_async_group_begin");
var buffer_async_group_end = tC(() => -1, "buffer_async_group_end");
var buffer_async_group_option = tC(() => {}, "buffer_async_group_option");
var vertex_format_begin = tC(() => {}, "vertex_format_begin");
var vertex_format_add_position = tC(() => {}, "vertex_format_add_position");
var vertex_format_add_normal = tC(() => {}, "vertex_format_add_normal");
var vertex_format_add_colour = tC(() => {}, "vertex_format_add_colour");
var vertex_format_add_color = tC(() => {}, "vertex_format_add_color");
var vertex_format_end = tC(() => 0, "vertex_format_end");
var vertex_create_buffer = tC(() => null, "vertex_create_buffer");
var vertex_delete_buffer = tC(() => {}, "vertex_delete_buffer");
var vertex_begin = tC(() => {}, "vertex_begin");
var vertex_end = tC(() => {}, "vertex_end");
var vertex_position = tC(() => {}, "vertex_position");
var vertex_normal = tC(() => {}, "vertex_normal");
var vertex_colour = tC(() => {}, "vertex_colour");
var vertex_color = tC(() => {}, "vertex_color");
var vertex_submit = tC(() => {}, "vertex_submit");
var audio_sound_get_gain = tC(() => 1, "audio_sound_get_gain");
var motion_set = tC(function (lU, lM) {
  if (this) {
    this.direction = lU;
    this.speed = lM;
  }
}, "motion_set");
var alarm_set = tC(function (lU, lM) {
  if (this && this.alarm) {
    this.alarm[lU] = lM;
  }
}, "alarm_set");
var alarm_get = tC(function (lU) {
  if (this && this.alarm) {
    return this.alarm[lU];
  } else {
    return -1;
  }
}, "alarm_get");
var tan = tC(lU => Math.tan(lU), "tan");
var ds_list_insert = tC((lU, lM, lm) => {
  if (Array.isArray(lU)) {
    lU.splice(lM, 0, lm);
  }
}, "ds_list_insert");
var ds_list_replace = tC((lU, lM, lm) => {
  if (Array.isArray(lU)) {
    lU[lM] = lm;
  }
}, "ds_list_replace");
var ds_list_copy = tC((lU, lM) => {
  if (Array.isArray(lU) && Array.isArray(lM)) {
    lU.length = 0;
    lU.push(...lM);
  }
}, "ds_list_copy");
var _gmCompare = tC((lU, lM) => {
  let lm = typeof lU == "number";
  let lJ = typeof lM == "number";
  if (lm && lJ) {
    return lU - lM;
  }
  if (lm !== lJ) {
    if (lm) {
      return -1;
    } else {
      return 1;
    }
  }
  let lW = String(lU);
  let lV = String(lM);
  if (lW < lV) {
    return -1;
  } else if (lW > lV) {
    return 1;
  } else {
    return 0;
  }
}, "_gmCompare");
var ds_list_sort = tC((lU, lM) => {
  if (Array.isArray(lU)) {
    lU.sort(_gmCompare);
    if (lM !== true && !(lM > 0.5)) {
      lU.reverse();
    }
  }
}, "ds_list_sort");
var array_sort = tC((lU, lM) => {
  if (Array.isArray(lU)) {
    if (typeof lM == "function") {
      lU.sort((lm, lJ) => Number(lM(lm, lJ)) || 0);
      return;
    }
    lU.sort(_gmCompare);
    if (lM !== true && !(lM > 0.5)) {
      lU.reverse();
    }
  }
}, "array_sort");
var object_get_parent = tC(lU => {
  let lM = typeof lU == "function" ? lU : typeof lU == "string" ? eD(lU) : null;
  if (!lM) {
    return -100;
  }
  if (tv.size) {
    let lJ = tv.get(lM.kindName || lM.name);
    if (lJ) {
      return lJ;
    }
  }
  let lm = Object.getPrototypeOf(lM);
  if (lm && lm.name && lm.name !== "Inst" && lm !== Function.prototype) {
    return lm.name;
  } else {
    return -100;
  }
}, "object_get_parent");
var pm = hosted("layer_get_all", () => []);
var pJ = hosted("layer_get_all_elements", () => []);
var pW = hosted("layer_get_element_type", () => -1);
var pV = hosted("layer_get_depth", () => 0);
var px = hosted("layer_set_visible", () => {});
var pT = hosted("layer_tilemap_get_id", () => -1);
var pZ = hosted("layer_tile_alpha", () => {});
var draw_tilemap = hosted("draw_tilemap", () => {});
var audio_listener_position = tC(() => {}, "audio_listener_position");
var audio_listener_orientation = tC(() => {}, "audio_listener_orientation");
var audio_falloff_set_model = tC(() => {}, "audio_falloff_set_model");
var audio_play_sound_at = tC((lU, lM, lm, lJ, lW, lV, lx, lT) => audio_play_sound(lU, 0, lT), "audio_play_sound_at");
var gamepad_button_check_released = tC(() => false, "gamepad_button_check_released");
var gpu_set_tex_repeat = tC(() => {}, "gpu_set_tex_repeat");
var gpu_get_tex_repeat = tC(() => false, "gpu_get_tex_repeat");
var surface_get_target = tC(() => -1, "surface_get_target");
function draw_ellipse_colour(lU, lM, lm, lJ, lW, lV, lx) {
  let lT = gfx();
  if (!lT) {
    return;
  }
  let lZ = lT.color;
  lT.draw_set_color(lW);
  draw_ellipse(lU, lM, lm, lJ, lx);
  lT.draw_set_color(lZ);
}
tC(draw_ellipse_colour, "draw_ellipse_colour");
var draw_ellipse_color = draw_ellipse_colour;
function draw_point(lU, lM) {
  let lm = gfx();
  if (!lm || !lm.ctx || !Number.isFinite(lU) || !Number.isFinite(lM)) {
    return;
  }
  let lJ = lm.ctx;
  lJ.globalAlpha = lm.alpha === undefined ? 1 : lm.alpha;
  lJ.fillStyle = lm.color;
  lJ.fillRect(Math.floor(lU), Math.floor(lM), 1, 1);
  lJ.globalAlpha = 1;
}
tC(draw_point, "draw_point");
function draw_point_colour(lU, lM, lm) {
  let lJ = gfx();
  if (!lJ) {
    return;
  }
  let lW = lJ.color;
  lJ.draw_set_color(lm);
  draw_point(lU, lM);
  lJ.draw_set_color(lW);
}
tC(draw_point_colour, "draw_point_colour");
var draw_point_color = draw_point_colour;
function draw_roundrect_ext(lU, lM, lm, lJ, lW, lV, lx) {
  let lT = gfx();
  if (!lT || !lT.ctx) {
    return;
  }
  let lZ = Math.min(lU, lm);
  let lK = Math.min(lM, lJ);
  let lL = Math.abs(lm - lU);
  let lX = Math.abs(lJ - lM);
  if (!Number.isFinite(lZ + lK + lL + lX)) {
    return;
  }
  let lg = Math.max(0, Math.min(lL / 2, lX / 2, (Number(lW) + Number(lV)) / 4 || 0));
  let lQ = lT.ctx;
  lQ.globalAlpha = lT.alpha === undefined ? 1 : lT.alpha;
  lQ.fillStyle = lQ.strokeStyle = lT.color;
  lQ.beginPath();
  lQ.moveTo(lZ + lg, lK);
  lQ.lineTo(lZ + lL - lg, lK);
  lQ.quadraticCurveTo(lZ + lL, lK, lZ + lL, lK + lg);
  lQ.lineTo(lZ + lL, lK + lX - lg);
  lQ.quadraticCurveTo(lZ + lL, lK + lX, lZ + lL - lg, lK + lX);
  lQ.lineTo(lZ + lg, lK + lX);
  lQ.quadraticCurveTo(lZ, lK + lX, lZ, lK + lX - lg);
  lQ.lineTo(lZ, lK + lg);
  lQ.quadraticCurveTo(lZ, lK, lZ + lg, lK);
  lQ.closePath();
  if (lx) {
    lQ.stroke();
  } else {
    lQ.fill();
  }
  lQ.globalAlpha = 1;
}
tC(draw_roundrect_ext, "draw_roundrect_ext");
var draw_roundrect = tC((lU, lM, lm, lJ, lW) => draw_roundrect_ext(lU, lM, lm, lJ, 10, 10, lW), "draw_roundrect");
function draw_roundrect_colour_ext(lU, lM, lm, lJ, lW, lV, lx, lT, lZ) {
  let lK = gfx();
  if (!lK) {
    return;
  }
  let lL = lK.color;
  lK.draw_set_color(lx);
  draw_roundrect_ext(lU, lM, lm, lJ, lW, lV, lZ);
  lK.draw_set_color(lL);
}
tC(draw_roundrect_colour_ext, "draw_roundrect_colour_ext");
var draw_roundrect_color_ext = draw_roundrect_colour_ext;
var draw_roundrect_colour = tC((lU, lM, lm, lJ, lW, lV, lx) => draw_roundrect_colour_ext(lU, lM, lm, lJ, 10, 10, lW, lV, lx), "draw_roundrect_colour");
var draw_roundrect_color = draw_roundrect_colour;
function draw_path(lU, lM, lm, lJ) {
  let lW = gfx();
  if (!lW || !lW.ctx || !G(lU)) {
    return;
  }
  let lV = Math.max(2, Math.ceil(Eg(lU) / 4));
  let lx = lJ ? 0 : lM - EY(lU, 0);
  let lT = lJ ? 0 : lm - Ew(lU, 0);
  let lZ = lW.ctx;
  lZ.globalAlpha = lW.alpha === undefined ? 1 : lW.alpha;
  lZ.strokeStyle = lW.color;
  lZ.beginPath();
  for (let lK = 0; lK <= lV; lK++) {
    let lL = EY(lU, lK / lV) + lx;
    let lX = Ew(lU, lK / lV) + lT;
    if (lK) {
      lZ.lineTo(lL, lX);
    } else {
      lZ.moveTo(lL, lX);
    }
  }
  lZ.stroke();
  lZ.globalAlpha = 1;
}
tC(draw_path, "draw_path");
var draw_primitive_begin_texture = tC((lU, lM) => {
  UV = {
    kind: lU | 0,
    v: [],
    tex: lM || null
  };
}, "draw_primitive_begin_texture");
var draw_vertex_texture_colour = tC((lU, lM, lm, lJ, lW, lV) => {
  if (UV) {
    UV.v.push([lU, lM, lm, lJ]);
    if (lV !== undefined) {
      UV.alpha = lV;
    }
  }
}, "draw_vertex_texture_colour");
var draw_vertex_texture_color = draw_vertex_texture_colour;
function drawTexturedPrimitive(lU, lM) {
  let lm = lM.tex;
  let lJ = lU.ctx;
  if (!lJ || !lm || !lm.spr) {
    return;
  }
  let lW = EE[lm.spr];
  let lV = lW && lW.img && lW.img[Math.max(0, Math.min((lW.frames || 1) - 1, lm.idx))];
  if (!lV) {
    return;
  }
  let lx = lV.width || lW.w;
  let lT = lV.height || lW.h;
  let lZ = (lL, lX, lg) => {
    let [lQ, lO, lq, lY] = lL;
    let [lb, lF, lS, lw] = lX;
    let [lk, lh, lH, lA] = lg;
    let lv = lq * lx;
    let lB = lY * lT;
    let lR = lS * lx;
    let lP = lw * lT;
    let lD = lH * lx;
    let lC = lA * lT;
    let lj = (lR - lv) * (lC - lB) - (lD - lv) * (lP - lB);
    if (!lj || !Number.isFinite(lj)) {
      return;
    }
    let lG = ((lb - lQ) * (lC - lB) - (lk - lQ) * (lP - lB)) / lj;
    let ly = ((lk - lQ) * (lR - lv) - (lb - lQ) * (lD - lv)) / lj;
    let lz = ((lF - lO) * (lC - lB) - (lh - lO) * (lP - lB)) / lj;
    let T0 = ((lh - lO) * (lR - lv) - (lF - lO) * (lD - lv)) / lj;
    let T1 = lQ - lG * lv - ly * lB;
    let T2 = lO - lz * lv - T0 * lB;
    if ([lG, lz, ly, T0, T1, T2].every(Number.isFinite)) {
      lJ.save();
      lJ.beginPath();
      lJ.moveTo(lQ, lO);
      lJ.lineTo(lb, lF);
      lJ.lineTo(lk, lh);
      lJ.closePath();
      lJ.clip();
      lJ.globalAlpha = Math.max(0, Math.min(1, (lM.alpha === undefined ? 1 : lM.alpha) * (lU.alpha === undefined ? 1 : lU.alpha)));
      lJ.transform(lG, lz, ly, T0, T1, T2);
      lJ.drawImage(lV, 0, 0);
      lJ.restore();
    }
  };
  let lK = lM.v;
  if (lM.kind === 4) {
    for (let lL = 0; lL + 2 < lK.length; lL += 3) {
      lZ(lK[lL], lK[lL + 1], lK[lL + 2]);
    }
  } else if (lM.kind === 6) {
    for (let lX = 1; lX + 1 < lK.length; lX++) {
      lZ(lK[0], lK[lX], lK[lX + 1]);
    }
  } else {
    for (let lg = 0; lg + 2 < lK.length; lg++) {
      lZ(lK[lg], lK[lg + 1], lK[lg + 2]);
    }
  }
}
tC(drawTexturedPrimitive, "drawTexturedPrimitive");
var ds_exists = tC(lU => lU !== null && typeof lU == "object" ? 1 : 0, "ds_exists");
var ds_map_exists = tC((lU, lM) => lU && typeof lU == "object" && lM in lU ? 1 : 0, "ds_map_exists");
var ds_list_set = tC((lU, lM, lm) => {
  if (Array.isArray(lU)) {
    while (lU.length < lM) {
      lU.push(0);
    }
    lU[lM] = lm;
  }
}, "ds_list_set");
var ds_stack_create = tC(() => [], "ds_stack_create");
var ds_stack_destroy = tC(() => {}, "ds_stack_destroy");
var ds_queue_destroy = tC(() => {}, "ds_queue_destroy");
var ds_grid_create = tC((lU, lM) => ({
  w: lU | 0,
  h: lM | 0,
  cells: new Array(Math.max(0, (lU | 0) * (lM | 0))).fill(0)
}), "ds_grid_create");
var ds_grid_destroy = tC(() => {}, "ds_grid_destroy");
var ds_priority_create = tC(() => ({
  items: []
}), "ds_priority_create");
var ds_priority_destroy = tC(() => {}, "ds_priority_destroy");
var is_struct = tC(lU => lU !== null && typeof lU == "object" && !Array.isArray(lU) && !(lU instanceof IY) ? 1 : 0, "is_struct");
var is_method = tC(lU => typeof lU != "function" || !!lU.kinds || !!lU.prototype || laterChapter() && lU.name && IY.prototype[lU.name] === lU ? 0 : 1, "is_method");
var is_numeric = tC(lU => typeof lU == "number" || typeof lU == "boolean" ? 1 : 0, "is_numeric");
var xN = new WeakMap();
var method = tC((lU, lM) => {
  if (typeof lM != "function" || !lU || typeof lU != "object") {
    return lM;
  }
  let lm = lM.bind(lU);
  xN.set(lm, [lM, lU]);
  return lm;
}, "method");
var variable_struct_get = tC((lU, lM) => lU && typeof lU == "object" ? lU[lM] : undefined, "variable_struct_get");
var variable_struct_set = tC((lU, lM, lm) => {
  if (lU && typeof lU == "object") {
    lU[lM] = lm;
  }
}, "variable_struct_set");
var variable_struct_exists = tC((lU, lM) => lU && typeof lU == "object" && lM in lU ? 1 : 0, "variable_struct_exists");
var variable_struct_get_names = tC(lU => lU && typeof lU == "object" ? Object.keys(lU) : [], "variable_struct_get_names");
var array_get = tC((lU, lM) => Array.isArray(lU) ? lU[lM] : undefined, "array_get");
var array_set = tC((lU, lM, lm) => {
  if (Array.isArray(lU)) {
    while (lU.length < lM) {
      lU.push(0);
    }
    lU[lM] = lm;
  }
}, "array_set");
var array_insert = tC((lU, lM, ...lm) => {
  if (Array.isArray(lU)) {
    lU.splice(lM, 0, ...lm);
  }
}, "array_insert");
var log10 = tC(lU => Math.log10(lU), "log10");
var dot_product = tC((lU, lM, lm, lJ) => lU * lm + lM * lJ, "dot_product");
var rectangle_in_rectangle = tC((lU, lM, lm, lJ, lW, lV, lx, lT) => {
  let lZ = Math.min(lU, lm);
  let lK = Math.max(lU, lm);
  let lL = Math.min(lM, lJ);
  let lX = Math.max(lM, lJ);
  let lg = Math.min(lW, lx);
  let lQ = Math.max(lW, lx);
  let lO = Math.min(lV, lT);
  let lq = Math.max(lV, lT);
  if (lK < lg || lZ > lQ || lX < lO || lL > lq) {
    return 0;
  } else if (lZ >= lg && lK <= lQ && lL >= lO && lX <= lq) {
    return 1;
  } else {
    return 2;
  }
}, "rectangle_in_rectangle");
var event_perform = tC(function (lU, lM) {
  let lm = this || eI.self;
  if (!lm) {
    return 0;
  }
  if (lU === 7 && lM >= 10 && lM <= 25) {
    if (lm.event_user) {
      lm.event_user(lM - 10);
    }
    return 0;
  }
  if (lU === 7 && lM === 7) {
    if (lm.animationEnd) {
      lm.animationEnd();
    }
    return 0;
  }
  if (lU === 2) {
    if (lm.alarmEvent) {
      lm.alarmEvent(lM);
    }
    return 0;
  }
  if (lU === 3) {
    let lJ = lM === 1 ? "beginStep" : lM === 2 ? "endStep" : "step";
    if (lm[lJ]) {
      lm[lJ]();
    }
    return 0;
  }
  if (lU === 0) {
    if (lm.create) {
      lm.create();
    }
    return 0;
  } else if (lU === 1) {
    if (lm.destroy) {
      lm.destroy();
    }
    return 0;
  } else {
    if (lU === 8 && lm.draw && i) {
      lm.draw(i);
    }
    return 0;
  }
}, "event_perform");
var audio_sound_length = tC(lU => {
  if (typeof Y != "number" || !(Y >= 3)) {
    return 0;
  }
  let lM = null;
  if (typeof lU == "string") {
    lM = lU;
  } else if (lU && typeof lU == "object") {
    let lJ = lU.src || lU.entry && lU.entry.url;
    lM = lU.name || (lJ ? decodeURIComponent(String(lJ).split("?")[0].split("/").pop()) : null);
  }
  let lm = lU && typeof lU == "object" && lU.buf && lU.buf.duration > 0 ? lU.buf.duration : 0;
  if (lM) {
    lM = String(lM).replace(/\.(ogg|wav|mp3)$/i, "");
    return IH[lM] || lm;
  } else {
    return lm;
  }
}, "audio_sound_length");
var audio_get_name = tC(lU => String(lU), "audio_get_name");
var xO = hosted("layer_exists", () => 0);
var xq = hosted("layer_x", () => {});
var xY = hosted("layer_y", () => {});
var xb = hosted("layer_get_visible", () => 0);
var xF = hosted("layer_vspeed", () => {});
var xS = hosted("layer_get_vspeed", () => 0);
var xw = hosted("layer_depth", () => {});
var xk = hosted("layer_destroy", () => {});
var layer_sprite_get_id = tC(() => -1, "layer_sprite_get_id");
var layer_sprite_get_sprite = tC(() => -1, "layer_sprite_get_sprite");
var layer_sprite_get_index = tC(() => 0, "layer_sprite_get_index");
var xv = hosted("layer_sprite_get_speed", () => 0);
var layer_sprite_get_x = tC(() => 0, "layer_sprite_get_x");
var layer_sprite_get_y = tC(() => 0, "layer_sprite_get_y");
var layer_sprite_get_xscale = tC(() => 1, "layer_sprite_get_xscale");
var layer_sprite_get_yscale = tC(() => 1, "layer_sprite_get_yscale");
var layer_sprite_get_angle = tC(() => 0, "layer_sprite_get_angle");
var layer_sprite_get_blend = tC(() => 16777215, "layer_sprite_get_blend");
var layer_sprite_get_alpha = tC(() => 1, "layer_sprite_get_alpha");
var sprite_get_bbox_right = tC(lU => EE[lU] && EE[lU].bb ? EE[lU].bb[2] : 0, "sprite_get_bbox_right");
var sprite_get_bbox_bottom = tC(lU => EE[lU] && EE[lU].bb ? EE[lU].bb[3] : 0, "sprite_get_bbox_bottom");
var sprite_get_speed_type = tC(lU => {
  let lM = EE[lU];
  if (!lM) {
    return 1;
  }
  let lm = lM.spdc && lM.spdc[Y];
  if (lm) {
    return lm[1];
  } else {
    return lM.spt ?? 1;
  }
}, "sprite_get_speed_type");
var sprite_get_speed = tC(lU => {
  let lM = EE[lU];
  if (!lM) {
    return 1;
  }
  let lm = lM.spdc && lM.spdc[Y];
  if (lm) {
    return lm[0];
  } else {
    return lM.spd ?? 1;
  }
}, "sprite_get_speed");
var animcurve_get_channel = tC((lU, lM) => ({
  curve: lU,
  ch: lM
}), "animcurve_get_channel");
var animcurve_channel_evaluate = tC((lU, lM) => lM, "animcurve_channel_evaluate");
var gpu_set_colourwriteenable = tC(() => {}, "gpu_set_colourwriteenable");
var shader_set_uniform_i = tC(() => {}, "shader_set_uniform_i");
var shader_replace_simple_sync = tC(() => {}, "shader_replace_simple_sync");
var instance_place_list = tC((...lU) => tD(...lU), "instance_place_list");
var collision_line_list = tC(() => 0, "collision_line_list");
function draw_text_ext_transformed_colour(lU, lM, lm, lJ, lW, lV, lx, lT, lZ, lK, lL, lX, lg) {
  let lQ = gfx();
  if (!lQ) {
    return;
  }
  let lO = lQ.color;
  let lq = lQ.alpha;
  lQ.draw_set_color(lZ);
  if (lg !== undefined) {
    lQ.alpha = lg;
  }
  draw_text_ext_transformed(lU, lM, lm, lJ, lW, lV, lx, lT);
  lQ.draw_set_color(lO);
  lQ.alpha = lq;
}
tC(draw_text_ext_transformed_colour, "draw_text_ext_transformed_colour");
var draw_text_ext_transformed_color = draw_text_ext_transformed_colour;
function ossafe_d_sprite_part_ext(lU, lM, lm, lJ, lW, lV, lx, lT, lZ, lK, lL, lX) {
  let lg = gfx();
  if (lg && lg.draw_sprite_part_ext) {
    lg.draw_sprite_part_ext(lU, lM, lm, lJ, lW, lV, lx, lT, lZ, lK, lL, lX);
  }
}
tC(ossafe_d_sprite_part_ext, "ossafe_d_sprite_part_ext");
var GID = tC(lU => lU === null ? -4 : typeof lU == "object" && lU !== undefined ? 100000 : lU, "GID");
export { installShaderNames as a, trigger_event as b, scr_monsterdefeat_of as c, __background_set as d, aA as e, FIRST as f, INST as g, SETALL as h, aj as i, setRoom as j, asset_get_index as k, asset_get_type as l, array_length as m, string_length as n, string_replace_all as o, is_string as p, variable_global_exists as q, ds_map_find_value as r, object_get_sprite as s, distance_to_point as t, audio_stop_all as u, N9 as v, room_goto as w, mean as x, string_char_at as y, string_hash_to_newline as z, keyboard_check as A, keyboard_check_pressed as B, make_color_hsv as C, applyBlend as D, currentBlend as E, draw_set_blend_mode as F, draw_set_blend_mode_ext as G, NF as H, gpu_set_colorwriteenable as I, camera_get_view_x as J, camera_get_view_y as K, camera_get_view_width as L, camera_get_view_height as M, remap_clamped as N, clamp01 as O, randomsign as P, is_real as Q, is_undefined as R, variable_instance_exists as S, variable_instance_set as T, variable_instance_get as U, array_length_1d as V, string_copy as W, string_lower as X, string_upper as Y, string_width as Z, string_height as _, sprite_get_xoffset as $, sprite_get_yoffset as aa, show_debug_message as ba, show_error as ca, event_inherited as da, motion_add as ea, instance_create_depth as fa, instance_find as ga, instance_nearest as ha, draw_get_color as ia, draw_get_colour as ja, draw_set_valign as ka, draw_set_halign as la, draw_get_halign as ma, draw_get_valign as na, draw_clear_alpha as oa, draw_primitive_begin as pa, draw_vertex as qa, draw_vertex_colour as ra, draw_vertex_color as sa, draw_vertex_texture as ta, draw_primitive_end as ua, gpu_set_blendmode as va, gpu_get_blendmode as wa, gpu_set_texfilter as xa, shader_set as ya, shader_reset as za, ds_list_create as Aa, ds_list_add as Ba, ds_list_destroy as Ca, ds_list_write as Da, ds_list_size as Ea, ds_map_create as Fa, ds_map_add as Ga, ds_map_set as Ha, ds_map_destroy as Ia, ds_queue_create as Ja, file_text_open_write as Ka, file_text_open_append as La, file_delete as Ma, file_text_close as Na, file_text_write_real as Oa, file_text_write_string as Pa, file_text_writeln as Qa, file_text_open_read as Ra, file_text_readln as Sa, file_text_read_string as Ta, file_text_read_real as Ua, ds_list_read as Va, ds_map_set_post as Wa, enable_loading as Xa, window_set_caption as Ya, game_end as Za, game_restart as _a, room_next as $a, randomise as ab, room_width as bb, room_height as cb, setRoomSize as db, room_speed as eb, nM as fb, nm as gb, nJ as hb, nW as ib, nV as jb, nx as kb, nT as lb, nZ as mb, nK as nb, nL as ob, nX as pb, set_current_time as qb, get_timer as rb, lerp as sb, sqr as tb, median as ub, dcos as vb, dsin as wb, darctan2 as xb, object_is_ancestor as yb, gamepad_button_check as zb, gamepad_button_check_pressed as Ab, gamepad_axis_value as Bb, draw_sprite_ext_flash as Cb, draw_monster_body_part as Db, draw_monster_body_part_ext as Eb, draw_sprite_ext_centerscale as Fb, draw_sprite_part as Gb, draw_line_colour as Hb, draw_line_color as Ib, draw_circle_colour as Jb, draw_circle_color as Kb, draw_text_ext_transformed as Lb, scr_draw_in_box_ext_begin as Mb, scr_angle_lerp as Nb, radtodeg as Ob, degtorad as Pb, irandom_range as Qb, make_colour_rgb as Rb, M7 as Sb, point_in_rectangle as Tb, string_pos as Ub, sprite_get_width as Vb, sprite_get_height as Wb, keyboard_check_released as Xb, audio_pause_sound as Yb, audio_resume_sound as Zb, ds_list_find_value as _b, ds_list_shuffle as $b, draw_rectangle_colour as ac, draw_rectangle_color as bc, draw_triangle_colour as cc, draw_triangle_color as dc, shader_set_uniform_f as ec, shader_get_uniform as fc, sprite_get_texture as gc, sprite_get_uvs as hc, surface_get_texture as ic, texture_get_texel_width as jc, texture_get_texel_height as kc, texture_set_stage as lc, MY as mc, Mb as nc, MF as oc, MS as pc, ord as qc, chr as rc, Mh as sc, logn as tc, MA as uc, frac as vc, real as wc, pal_swap_set as xc, pal_swap_reset as yc, string_delete as zc, string_insert as Ac, draw_get_alpha as Bc, randomize as Cc, random_set_seed as Dc, random_get_seed as Ec, array_push as Fc, array_pop as Gc, sprite_exists as Hc, script_execute as Ic, snd_play as Jc, registerChapterScripts as Kc, audio_sound_pitch as Lc, audio_sound_get_pitch as Mc, audio_group_set_gain as Nc, audio_set_master_gain as Oc, distance_to_object as Pc, room_goto_next as Qc, scr_84_get_sprite as Rc, mouse_x as Sc, mouse_y as Tc, mouse_check_button as Uc, mouse_check_button_pressed as Vc, mouse_check_button_released as Wc, mouse_button as Xc, mouse_wheel_up as Yc, mouse_wheel_down as Zc, i_ex as _c, surface_create as $c, surface_exists as ad, surface_free as bd, surface_get_width as cd, mh as dd, ensureApplicationSurface as ed, surface_copy_part as fd, surface_copy as gd, display_get_gui_width as hd, display_get_gui_height as id, surface_get_height as jd, surface_set_target as kd, surface_reset_target as ld, draw_surface_ext as md, draw_surface as nd, draw_surface_stretched as od, draw_ellipse as pd, draw_text_ext as qd, J6 as rd, resolve_trophies as sd, scr_is_switch_os as td, draw_line_width_colour as ud, draw_line_width_color as vd, draw_text_transformed_colour as wd, draw_text_transformed_color as xd, draw_sprite_general as yd, draw_sprite_stretched_ext as zd, draw_sprite_tiled as Ad, draw_sprite_tiled_ext as Bd, draw_sprite_pos as Cd, draw_surface_part_ext as Dd, draw_surface_part as Ed, draw_surface_general as Fd, draw_clear as Gd, draw_get_font as Hd, gpu_set_blendmode_ext_sepalpha as Id, shader_get_sampler_index as Jd, surface_resize as Kd, position_meeting as Ld, instance_position as Md, instance_deactivate_layer as Nd, camera_set_view_target as Od, camera_get_view_target as Pd, camera_set_view_pos as Qd, array_create as Rd, array_delete as Sd, ds_list_clear as Td, ds_list_delete as Ud, ds_list_find_index as Vd, string_replace as Wd, string_digits as Xd, string_format as Yd, string_format_zero as Zd, string_format_auto as _d, object_get_name as $d, sprite_get_name as ae, sprite_set_offset as be, sprite_offsets_restore as ce, sprite_get_bbox_left as de, sprite_get_bbox_top as ee, room_exists as fe, room_restart as ge, audio_exists as he, audio_is_paused as ie, sound_pause as je, sound_pitch as ke, get_string as le, show_question as me, os_get_region as ne, debug_print as oe, display_get_height as pe, window_get_height as qe, window_set_size as re, variable_global_set as se, variable_instance_get_names as te, Wx as ue, WT as ve, WZ as we, WK as xe, WL as ye, WX as ze, Wg as Ae, WQ as Be, WO as Ce, Wq as De, WY as Ee, Wb as Fe, WF as Ge, WS as He, Ww as Ie, Wk as Je, Wh as Ke, WH as Le, WA as Me, Wv as Ne, Wf as Oe, WB as Pe, instance_deactivate_object as Qe, instance_activate_object as Re, instance_deactivate_all as Se, instance_activate_all as Te, instance_deactivate_region as Ue, instance_activate_region as Ve, Wy as We, ini_open as Xe, ini_open_from_string as Ye, ini_close as Ze, ini_read_real as _e, ini_write_real as $e, ini_read_string as af, ini_write_string as bf, VI as cf, array_resize as df, color_get_red as ef, color_get_green as ff, color_get_blue as gf, VJ as hf, VW as if, VV as jf, point_distance_3d as kf, string_byte_length as lf, json_encode as mf, date_current_datetime as nf, environment_get_variable as of, keyboard_check_direct as pf, keyboard_clear as qf, registerModFiles as rf, file_exists as sf, buffer_create as tf, buffer_get_size as uf, buffer_write as vf, buffer_save_async as wf, buffer_async_group_begin as xf, buffer_async_group_end as yf, buffer_async_group_option as zf, vertex_format_begin as Af, vertex_format_add_position as Bf, vertex_format_add_normal as Cf, vertex_format_add_colour as Df, vertex_format_add_color as Ef, vertex_format_end as Ff, vertex_create_buffer as Gf, vertex_delete_buffer as Hf, vertex_begin as If, vertex_end as Jf, vertex_position as Kf, vertex_normal as Lf, vertex_colour as Mf, vertex_color as Nf, vertex_submit as Of, audio_sound_get_gain as Pf, motion_set as Qf, alarm_set as Rf, alarm_get as Sf, tan as Tf, ds_list_insert as Uf, ds_list_replace as Vf, ds_list_copy as Wf, ds_list_sort as Xf, array_sort as Yf, object_get_parent as Zf, pm as _f, pJ as $f, pW as ag, pV as bg, px as cg, pT as dg, pZ as eg, draw_tilemap as fg, audio_listener_position as gg, audio_listener_orientation as hg, audio_falloff_set_model as ig, audio_play_sound_at as jg, gamepad_button_check_released as kg, gpu_set_tex_repeat as lg, gpu_get_tex_repeat as mg, surface_get_target as ng, draw_ellipse_colour as og, draw_ellipse_color as pg, draw_point as qg, draw_point_colour as rg, draw_point_color as sg, draw_roundrect_ext as tg, draw_roundrect as ug, draw_roundrect_colour_ext as vg, draw_roundrect_color_ext as wg, draw_roundrect_colour as xg, draw_roundrect_color as yg, draw_path as zg, draw_primitive_begin_texture as Ag, draw_vertex_texture_colour as Bg, draw_vertex_texture_color as Cg, ds_exists as Dg, ds_map_exists as Eg, ds_list_set as Fg, ds_stack_create as Gg, ds_stack_destroy as Hg, ds_queue_destroy as Ig, ds_grid_create as Jg, ds_grid_destroy as Kg, ds_priority_create as Lg, ds_priority_destroy as Mg, is_struct as Ng, is_method as Og, is_numeric as Pg, xN as Qg, method as Rg, variable_struct_get as Sg, variable_struct_set as Tg, variable_struct_exists as Ug, variable_struct_get_names as Vg, array_get as Wg, array_set as Xg, array_insert as Yg, log10 as Zg, dot_product as _g, rectangle_in_rectangle as $g, event_perform as ah, audio_sound_length as bh, audio_get_name as ch, xO as dh, xq as eh, xY as fh, xb as gh, xF as hh, xS as ih, xw as jh, xk as kh, layer_sprite_get_id as lh, layer_sprite_get_sprite as mh, layer_sprite_get_index as nh, xv as oh, layer_sprite_get_x as ph, layer_sprite_get_y as qh, layer_sprite_get_xscale as rh, layer_sprite_get_yscale as sh, layer_sprite_get_angle as th, layer_sprite_get_blend as uh, layer_sprite_get_alpha as vh, sprite_get_bbox_right as wh, sprite_get_bbox_bottom as xh, sprite_get_speed_type as yh, sprite_get_speed as zh, animcurve_get_channel as Ah, animcurve_channel_evaluate as Bh, gpu_set_colourwriteenable as Ch, shader_set_uniform_i as Dh, shader_replace_simple_sync as Eh, instance_place_list as Fh, collision_line_list as Gh, draw_text_ext_transformed_colour as Hh, draw_text_ext_transformed_color as Ih, ossafe_d_sprite_part_ext as Jh, GID as Kh, tz as Lh };
