const p = function () {
  ;
  let Cu = true;
  return function (Cs, CZ) {
    const Cf = Cu ? function () {
      if (CZ) {
        const CQ = CZ.apply(Cs, arguments);
        CZ = null;
        return CQ;
      }
    } : function () {};
    Cu = false;
    return Cf;
  };
}();
import { b as t } from "./c-YJJCI5ES.js";
import { Bb as y, Da as i, Db as s, Fa as a, Fb as g, I as o, N as m, S as I0, Sb as I1, Sc as I2, Tb as I3, Tc as I4, Ub as I5, Va as I6, Wb as I7, Xc as I8, Yc as I9, Za as II, Zb as IT, _a as IV, a as IO, b as IR, bb as IC, c as ID, cc as IP, dc as Ib, f as IJ, fb as Ic, i as Id, n as Iv, o as Ix, p as Ip, q as IG, qb as IS, rb as Iw, sb as IH, sc as Iy, vc as IN, xc as Il } from "./c-FMIAGHDE.js";
import { a as IE, c as Ii, e as Ik, l as IW } from "./c-PIEPTJTC.js";
var Iz = {};
Ii(Iz, {
  RoomHooks: () => RJ,
  action_create_object: () => action_create_object,
  action_kill_object: () => action_kill_object,
  action_move: () => action_move,
  action_move_point: () => action_move_point,
  action_move_to: () => action_move_to,
  action_set_alarm: () => action_set_alarm,
  action_set_friction: () => action_set_friction,
  action_set_gravity: () => action_set_gravity,
  action_set_hspeed: () => action_set_hspeed,
  action_set_motion: () => action_set_motion,
  action_set_relative: () => action_set_relative,
  action_set_vspeed: () => action_set_vspeed,
  application_surface: () => O1,
  async_load: () => CD,
  audio_channel_num: () => audio_channel_num,
  audio_is_playing: () => audio_is_playing,
  audio_pause_all: () => audio_pause_all,
  audio_pause_sound: () => audio_pause_sound,
  audio_play_sound: () => audio_play_sound,
  audio_resume_all: () => audio_resume_all,
  audio_resume_sound: () => audio_resume_sound,
  audio_sound_gain: () => audio_sound_gain,
  audio_sound_get_gain: () => audio_sound_get_gain,
  audio_sound_get_pitch: () => audio_sound_get_pitch,
  audio_sound_pitch: () => audio_sound_pitch,
  audio_stop_all: () => audio_stop_all,
  audio_stop_sound: () => audio_stop_sound,
  buffer_async_group_begin: () => buffer_async_group_begin,
  buffer_async_group_end: () => buffer_async_group_end,
  buffer_async_group_option: () => buffer_async_group_option,
  buffer_create: () => buffer_create,
  buffer_delete: () => buffer_delete,
  buffer_get_size: () => buffer_get_size,
  buffer_load_async: () => buffer_load_async,
  buffer_read: () => buffer_read,
  buffer_save_async: () => buffer_save_async,
  buffer_write: () => buffer_write,
  chr: () => chr,
  collision_circle: () => IZ,
  collision_line: () => Is,
  collision_rectangle: () => Iu,
  color_get_blue: () => color_get_blue,
  color_get_green: () => color_get_green,
  color_get_red: () => color_get_red,
  control_check: () => control_check,
  control_check_pressed: () => control_check_pressed,
  control_clear: () => control_clear,
  control_init: () => control_init,
  control_update: () => control_update,
  degtorad: () => degtorad,
  display_get_height: () => display_get_height,
  display_get_width: () => display_get_width,
  display_height: () => CC,
  display_width: () => CR,
  distance_to_object: () => distance_to_object,
  distance_to_point: () => distance_to_point,
  draw_ellipse_color: () => draw_ellipse_color,
  draw_ellipse_colour: () => draw_ellipse_colour,
  draw_line_width_color: () => draw_line_width_color,
  draw_line_width_colour: () => draw_line_width_colour,
  draw_set_circle_precision: () => draw_set_circle_precision,
  draw_sprite_part: () => draw_sprite_part,
  draw_text_ext: () => draw_text_ext,
  draw_triangle_color: () => draw_triangle_color,
  draw_triangle_colour: () => draw_triangle_colour,
  dropDeactivated: () => dropDeactivated,
  ds_map_add: () => ds_map_add,
  ds_map_clear: () => ds_map_clear,
  ds_map_create: () => ds_map_create,
  ds_map_delete: () => ds_map_delete,
  ds_map_destroy: () => ds_map_destroy,
  ds_map_exists: () => ds_map_exists,
  ds_map_find_value: () => ds_map_find_value,
  ds_map_set: () => ds_map_set,
  ds_map_size: () => ds_map_size,
  ev_alarm: () => Vv,
  ev_collision: () => Vp,
  ev_create: () => Vc,
  ev_destroy: () => Vd,
  ev_draw: () => VS,
  ev_other: () => VG,
  ev_step: () => Vx,
  ev_user0: () => Vw,
  ev_user1: () => VH,
  ev_user2: () => Vy,
  ev_user3: () => VN,
  ev_user4: () => Vl,
  ev_user5: () => VE,
  ev_user6: () => Vi,
  ev_user7: () => Vk,
  ev_user8: () => VW,
  ev_user9: () => Vz,
  event_perform: () => event_perform,
  extension_stubfunc_real: () => extension_stubfunc_real,
  file_delete: () => file_delete,
  file_exists: () => file_exists,
  file_rename: () => file_rename,
  file_text_close: () => file_text_close,
  file_text_eof: () => file_text_eof,
  file_text_open_append: () => file_text_open_append,
  file_text_open_read: () => file_text_open_read,
  file_text_open_write: () => file_text_open_write,
  file_text_read_real: () => file_text_read_real,
  file_text_read_string: () => file_text_read_string,
  file_text_readln: () => file_text_readln,
  file_text_write_real: () => file_text_write_real,
  file_text_write_string: () => file_text_write_string,
  file_text_writeln: () => file_text_writeln,
  game_end: () => game_end,
  game_restart: () => game_restart,
  gamepad_button_check: () => gamepad_button_check,
  gamepad_button_check_pressed: () => gamepad_button_check_pressed,
  get_string_async: () => get_string_async,
  hashnl: () => hashnl,
  ini_close: () => ini_close,
  ini_key_exists: () => ini_key_exists,
  ini_open: () => ini_open,
  ini_open_from_string: () => ini_open_from_string,
  ini_read_real: () => ini_read_real,
  ini_read_string: () => ini_read_string,
  ini_section_exists: () => ini_section_exists,
  ini_write_real: () => ini_write_real,
  ini_write_string: () => ini_write_string,
  instance_activate_all: () => instance_activate_all,
  instance_activate_object: () => instance_activate_object,
  instance_change: () => instance_change,
  instance_create: () => instance_create,
  instance_deactivate_all: () => instance_deactivate_all,
  instance_deactivate_object: () => instance_deactivate_object,
  instance_exists: () => instance_exists,
  instance_find: () => instance_find,
  instance_number: () => instance_number,
  instance_position: () => instance_position,
  is_real: () => is_real,
  is_string: () => is_string,
  is_undefined: () => is_undefined,
  joystick_check_button: () => joystick_check_button,
  json_decode: () => json_decode,
  json_encode: () => json_encode,
  keyboard_check: () => keyboard_check,
  keyboard_check_direct: () => keyboard_check_direct,
  keyboard_check_pressed: () => keyboard_check_pressed,
  keyboard_check_released: () => keyboard_check_released,
  keyboard_clear: () => keyboard_clear,
  keyboard_key: () => keyboard_key,
  keyboard_lastchar: () => keyboard_lastchar,
  keyboard_lastkey: () => keyboard_lastkey,
  keyboard_string: () => keyboard_string,
  make_color_hsv: () => make_color_hsv,
  make_color_rgb: () => make_color_rgb,
  make_colour_hsv: () => make_colour_hsv,
  make_colour_rgb: () => make_colour_rgb,
  mouse_button: () => mouse_button,
  mouse_lastbutton: () => mouse_lastbutton,
  mouse_x: () => mouse_x,
  mouse_y: () => mouse_y,
  move_snap: () => move_snap,
  obj_time: () => obj_time,
  objectByIndex: () => IX,
  ord: () => ord,
  os_linux: () => RA,
  os_macosx: () => Rq,
  os_type: () => Rf,
  os_unknown: () => Ra,
  os_windows: () => RQ,
  ossafe_savedata_load: () => ossafe_savedata_load,
  ossafe_savedata_save: () => ossafe_savedata_save,
  path_end: () => Ia,
  path_start: () => IA,
  radtodeg: () => radtodeg,
  randomize: () => randomize,
  real: () => real,
  resetAssetAudioState: () => resetAssetAudioState,
  resetUtRuntimeForFight: () => resetUtRuntimeForFight,
  rnsound: () => RM,
  room: () => Rs,
  room_battle: () => room_battle,
  room_goto: () => room_goto,
  room_goto_next: () => room_goto_next,
  room_height: () => room_height,
  room_restart: () => room_restart,
  room_width: () => room_width,
  script_execute: () => script_execute,
  sleep_x: () => sleep_x,
  sprite_collision_mask: () => sprite_collision_mask,
  sprite_create_from_surface: () => sprite_create_from_surface,
  sprite_delete: () => sprite_delete,
  sprite_get_height: () => sprite_get_height,
  sprite_get_width: () => sprite_get_width,
  sprite_get_xoffset: () => sprite_get_xoffset,
  sprite_get_yoffset: () => sprite_get_yoffset,
  sprite_replace: () => sprite_replace,
  steam_file_delete: () => steam_file_delete,
  steam_file_exists: () => steam_file_exists,
  steam_file_write_file: () => steam_file_write_file,
  steam_initialised: () => steam_initialised,
  steam_is_overlay_enabled: () => steam_is_overlay_enabled,
  string_byte_length: () => string_byte_length,
  string_char_at: () => string_char_at,
  string_copy: () => string_copy,
  string_count: () => string_count,
  string_delete: () => string_delete,
  string_digits: () => string_digits,
  string_height: () => string_height,
  string_insert: () => string_insert,
  string_length: () => string_length,
  string_letters: () => string_letters,
  string_lower: () => string_lower,
  string_pos: () => string_pos,
  string_repeat: () => string_repeat,
  string_replace: () => string_replace,
  string_replace_all: () => string_replace_all,
  string_upper: () => string_upper,
  string_width: () => string_width,
  surface_get_height: () => surface_get_height,
  surface_get_width: () => surface_get_width,
  takeRoomChange: () => takeRoomChange,
  takeRoomRestart: () => takeRoomRestart,
  utRuntimeRestore: () => utRuntimeRestore,
  utRuntimeSave: () => utRuntimeSave,
  utText: () => OI,
  view_angle: () => CT,
  view_current: () => C7,
  view_hview: () => Ru,
  view_visible: () => C8,
  view_wview: () => Rz,
  view_xport: () => C9,
  view_xview: () => Rk,
  view_yport: () => CI,
  view_yview: () => RW,
  vk_alt: () => Tk,
  vk_anykey: () => Ta,
  vk_backspace: () => Tu,
  vk_control: () => Ti,
  vk_delete: () => TZ,
  vk_down: () => Ty,
  vk_enter: () => TN,
  vk_escape: () => Tz,
  vk_f1: () => Tf,
  vk_f2: () => TQ,
  vk_f4: () => Tq,
  vk_f6: () => TA,
  vk_left: () => TS,
  vk_nokey: () => TX,
  vk_return: () => Tl,
  vk_right: () => TH,
  vk_shift: () => TE,
  vk_space: () => TW,
  vk_tab: () => Ts,
  vk_up: () => Tw,
  window_center: () => window_center,
  window_get_caption: () => window_get_caption,
  window_get_fullscreen: () => window_get_fullscreen,
  window_get_height: () => window_get_height,
  window_get_width: () => window_get_width,
  window_get_x: () => window_get_x,
  window_get_y: () => window_get_y,
  window_height: () => CO,
  window_set_caption: () => window_set_caption,
  window_set_fullscreen: () => window_set_fullscreen,
  window_set_position: () => window_set_position,
  window_set_size: () => window_set_size,
  window_width: () => CV
});
IW();
var Iu = Iy;
var Is = Il;
var IZ = IN;
var sprite_delete = I9;
function sprite_create_from_surface(Cu, ...Cs) {
  if (Cu === -1 && s.build) {
    Cu = s.build();
  }
  return I8(Cu, ...Cs);
}
IE(sprite_create_from_surface, "sprite_create_from_surface");
var audio_is_playing = I6;
var IA = I2;
var Ia = I4;
var IX = IC;
var instance_number = IH;
var instance_create = IS;
var instance_exists = Iw;
var IY = new Set();
function once(Cu, Cs) {
  if (!IY.has(Cu)) {
    IY.add(Cu);
    console.warn("ut_runtime: " + Cs);
  }
}
IE(once, "once");
var IB = new Map();
var IL = 1;
function ds_map_create() {
  let Cu = IL++;
  IB.set(Cu, new Map());
  return Cu;
}
IE(ds_map_create, "ds_map_create");
function ds_map_add(Cu, Cs, CZ) {
  let Cf = IB.get(Cu);
  if (!Cf || Cf.has(String(Cs))) {
    return 0;
  } else {
    Cf.set(String(Cs), CZ);
    return 1;
  }
}
IE(ds_map_add, "ds_map_add");
function ds_map_set(Cu, Cs, CZ) {
  let Cf = IB.get(Cu);
  if (Cf) {
    Cf.set(String(Cs), CZ);
    return 1;
  } else {
    return 0;
  }
}
IE(ds_map_set, "ds_map_set");
function ds_map_find_value(Cu, Cs) {
  let CZ = IB.get(Cu);
  if (CZ) {
    return CZ.get(String(Cs));
  }
}
IE(ds_map_find_value, "ds_map_find_value");
function ds_map_exists(Cu, Cs) {
  let CZ = IB.get(Cu);
  if (CZ && CZ.has(String(Cs))) {
    return 1;
  } else {
    return 0;
  }
}
IE(ds_map_exists, "ds_map_exists");
function ds_map_delete(Cu, Cs) {
  let CZ = IB.get(Cu);
  if (CZ) {
    CZ.delete(String(Cs));
  }
  return 0;
}
IE(ds_map_delete, "ds_map_delete");
function ds_map_destroy(Cu) {
  IB.delete(Cu);
  return 0;
}
IE(ds_map_destroy, "ds_map_destroy");
function ds_map_size(Cu) {
  let Cs = IB.get(Cu);
  if (Cs) {
    return Cs.size;
  } else {
    return 0;
  }
}
IE(ds_map_size, "ds_map_size");
function ds_map_clear(Cu) {
  let Cs = IB.get(Cu);
  if (Cs) {
    Cs.clear();
  }
  return 0;
}
IE(ds_map_clear, "ds_map_clear");
function is_undefined(Cu) {
  if (Cu === undefined) {
    return 1;
  } else {
    return 0;
  }
}
IE(is_undefined, "is_undefined");
function is_real(Cu) {
  if (typeof Cu == "number") {
    return 1;
  } else {
    return 0;
  }
}
IE(is_real, "is_real");
function is_string(Cu) {
  if (typeof Cu == "string") {
    return 1;
  } else {
    return 0;
  }
}
IE(is_string, "is_string");
function real(Cu) {
  if (typeof Cu == "number") {
    return Cu;
  }
  let Cs = parseFloat(Cu);
  if (Number.isFinite(Cs)) {
    return Cs;
  } else {
    return 0;
  }
}
IE(real, "real");
function ord(Cu) {
  return String(Cu).charCodeAt(0) || 0;
}
IE(ord, "ord");
function chr(Cu) {
  return String.fromCharCode(Cu);
}
IE(chr, "chr");
function string_length(Cu) {
  return String(Cu).length;
}
IE(string_length, "string_length");
function string_char_at(Cu, Cs) {
  return String(Cu).charAt(Cs - 1);
}
IE(string_char_at, "string_char_at");
function string_copy(Cu, Cs, CZ) {
  return String(Cu).substr(Math.max(0, Cs - 1), CZ);
}
IE(string_copy, "string_copy");
function string_pos(Cu, Cs) {
  return String(Cs).indexOf(String(Cu)) + 1;
}
IE(string_pos, "string_pos");
function string_delete(Cu, Cs, CZ) {
  let Cf = String(Cu);
  return Cf.slice(0, Math.max(0, Cs - 1)) + Cf.slice(Math.max(0, Cs - 1) + CZ);
}
IE(string_delete, "string_delete");
function string_insert(Cu, Cs, CZ) {
  let Cf = String(Cs);
  return Cf.slice(0, Math.max(0, CZ - 1)) + String(Cu) + Cf.slice(Math.max(0, CZ - 1));
}
IE(string_insert, "string_insert");
function string_lower(Cu) {
  return String(Cu).toLowerCase();
}
IE(string_lower, "string_lower");
function string_upper(Cu) {
  return String(Cu).toUpperCase();
}
IE(string_upper, "string_upper");
function string_repeat(Cu, Cs) {
  return String(Cu).repeat(Math.max(0, Math.floor(Cs)));
}
IE(string_repeat, "string_repeat");
function string_replace_all(Cu, Cs, CZ) {
  return String(Cu).split(String(Cs)).join(String(CZ));
}
IE(string_replace_all, "string_replace_all");
function string_replace(Cu, Cs, CZ) {
  return String(Cu).replace(String(Cs), String(CZ));
}
IE(string_replace, "string_replace");
function string_digits(Cu) {
  return String(Cu).replace(/[^0-9]/g, "");
}
IE(string_digits, "string_digits");
function string_letters(Cu) {
  return String(Cu).replace(/[^A-Za-z]/g, "");
}
IE(string_letters, "string_letters");
function string_count(Cu, Cs) {
  return String(Cs).split(String(Cu)).length - 1;
}
IE(string_count, "string_count");
function script_execute(Cu, Cs, ...CZ) {
  if (typeof Cs != "function") {
    once("script_execute:" + String(Cs), "script_execute called with a non-function (" + String(Cs) + ")");
    return 0;
  } else {
    return Cs.apply(Cu, CZ);
  }
}
IE(script_execute, "script_execute");
var TS = 37;
var Tw = 38;
var TH = 39;
var Ty = 40;
var TN = 13;
var Tl = 13;
var TE = 16;
var Ti = 17;
var Tk = 18;
var TW = 32;
var Tz = 27;
var Tu = 8;
var Ts = 9;
var TZ = 46;
var Tf = 112;
var TQ = 113;
var Tq = 115;
var TA = 117;
var Ta = 1;
var TX = 0;
function slot(Cu) {
  return I0[Cu | 0];
}
IE(slot, "slot");
function anyHeld() {
  for (let Cu in m.held) {
    if (m.held[Cu]) {
      return true;
    }
  }
  return false;
}
IE(anyHeld, "anyHeld");
function anyPressed() {
  for (let Cu in m.pressed) {
    if (m.pressed[Cu]) {
      return true;
    }
  }
  return m.typed != null || !!m.backspace;
}
IE(anyPressed, "anyPressed");
function keyboard_check(Cu) {
  if (Cu === Ta) {
    if (anyHeld()) {
      return 1;
    } else {
      return 0;
    }
  }
  if (Cu === TX) {
    if (anyHeld()) {
      return 0;
    } else {
      return 1;
    }
  }
  let Cs = slot(Cu);
  if (Cs && m.held[Cs]) {
    return 1;
  } else {
    return 0;
  }
}
IE(keyboard_check, "keyboard_check");
function keyboard_check_pressed(Cu) {
  if (Cu === Ta) {
    if (anyPressed()) {
      return 1;
    } else {
      return 0;
    }
  }
  if (Cu === TX) {
    if (anyPressed()) {
      return 0;
    } else {
      return 1;
    }
  }
  let Cs = slot(Cu);
  if (!Cs && Cu === Tu) {
    if (m.backspace) {
      return 1;
    } else {
      return 0;
    }
  } else if (Cs && m.pressed[Cs]) {
    return 1;
  } else {
    return 0;
  }
}
IE(keyboard_check_pressed, "keyboard_check_pressed");
function keyboard_check_released(Cu) {
  let Cs = slot(Cu);
  if (Cs && m.released[Cs]) {
    return 1;
  } else {
    return 0;
  }
}
IE(keyboard_check_released, "keyboard_check_released");
function keyboard_check_direct(Cu) {
  return keyboard_check(Cu);
}
IE(keyboard_check_direct, "keyboard_check_direct");
function keyboard_clear() {
  return 0;
}
IE(keyboard_clear, "keyboard_clear");
function gamepad_button_check() {
  return 0;
}
IE(gamepad_button_check, "gamepad_button_check");
function joystick_check_button() {
  return 0;
}
IE(joystick_check_button, "joystick_check_button");
function gamepad_button_check_pressed() {
  return 0;
}
IE(gamepad_button_check_pressed, "gamepad_button_check_pressed");
function control_check(Cu) {
  if (t.control_state && t.control_state[Cu]) {
    return 1;
  } else {
    return 0;
  }
}
IE(control_check, "control_check");
function control_check_pressed(Cu) {
  if (t.control_pressed && t.control_pressed[Cu]) {
    return 1;
  } else {
    return 0;
  }
}
IE(control_check_pressed, "control_check_pressed");
function control_clear(Cu) {
  if (t.control_pressed) {
    t.control_pressed[Cu] = 0;
  }
  return 0;
}
IE(control_clear, "control_clear");
function control_update() {
  if (!t.control_state) {
    t.control_state = [0, 0, 0];
    t.control_new_state = [0, 0, 0];
    t.control_pressed = [0, 0, 0];
  }
  let Cu = [m.held.b1 || m.pressed.b1 ? 1 : 0, m.held.b2 || m.pressed.b2 ? 1 : 0, m.held.b3 || m.pressed.b3 ? 1 : 0];
  for (let Cs = 0; Cs <= 2; Cs++) {
    t.control_new_state[Cs] = Cu[Cs];
    t.control_pressed[Cs] = !t.control_state[Cs] && Cu[Cs] ? 1 : 0;
    t.control_state[Cs] = Cu[Cs];
  }
  return 0;
}
IE(control_update, "control_update");
function control_init() {
  t.control_state = [0, 0, 0];
  t.control_new_state = [0, 0, 0];
  t.control_pressed = [0, 0, 0];
  return 0;
}
IE(control_init, "control_init");
control_init();
var V5 = class Cq extends II {
  create() {
    this.up = 0;
    this.down = 0;
    this.left = 0;
    this.right = 0;
    this.time = 0;
    this.canquit = 1;
    this.j_ch = 0;
    this.visible = false;
    if (t.osflavor === undefined) {
      t.osflavor = 1;
    }
    if (t.disable_os_pause === undefined) {
      t.disable_os_pause = 0;
    }
    if (t.savedata_async_id === undefined) {
      t.savedata_async_id = -1;
    }
    control_init();
  }
  beginStep() {
    if (takeRoomRestart() && RJ.restart) {
      RJ.restart();
      return;
    }
    let Cu = takeRoomChange();
    if (Cu && RJ.go) {
      RJ.go(Cu);
    }
  }
  step() {
    this.up = m.held.up ? 1 : 0;
    this.down = m.held.down ? 1 : 0;
    this.left = m.held.left ? 1 : 0;
    this.right = m.held.right ? 1 : 0;
    this.time = Ic.frame;
    if (m.typed != null) {
      keyboard_lastchar = m.typed;
    }
    control_update();
  }
  endStep() {
    Ic.view.x = Number(Rk[0]) || 0;
    Ic.view.y = Number(RW[0]) || 0;
    let Cu = t.background_color;
    let Cs = Cu == null ? null : IJ(Cu);
    this.bgcss = Cs && Cs !== ID.black && Cs !== "rgb(0, 0, 0)" && Cs !== "#000" ? Cs : null;
    this.visible = !!this.bgcss;
    this.depth = 1000000000;
  }
  draw(Cu) {
    if (!this.bgcss || !Cu || !Cu.ctx) {
      return;
    }
    let Cs = Cu.ctx;
    Cs.save();
    Cs.setTransform(1, 0, 0, 1, 0, 0);
    Cs.globalAlpha = 1;
    Cs.globalCompositeOperation = "source-over";
    Cs.fillStyle = this.bgcss;
    Cs.fillRect(0, 0, 640, 480);
    Cs.restore();
  }
};
IE(V5, "obj_time");
Ik(V5, "kinds", IV("obj_time", II));
var obj_time = V5;
obj_time.screenSpace = true;
function make_color_rgb(Cu, Cs, CZ) {
  return (CZ & 255) << 16 | (Cs & 255) << 8 | Cu & 255;
}
IE(make_color_rgb, "make_color_rgb");
function make_colour_rgb(Cu, Cs, CZ) {
  return make_color_rgb(Cu, Cs, CZ);
}
IE(make_colour_rgb, "make_colour_rgb");
function make_color_hsv(Cu, Cs, CZ) {
  let Cf = Cu / 255 * 6;
  let CQ = Cs / 255;
  let CA = CZ / 255;
  let Ca = Math.floor(Cf) % 6;
  let CX = Cf - Math.floor(Cf);
  let Cg = CA * (1 - CQ);
  let CM = CA * (1 - CQ * CX);
  let Cj = CA * (1 - CQ * (1 - CX));
  let CY = 0;
  let CU = 0;
  let CB = 0;
  if (Ca === 0) {
    CY = CA;
    CU = Cj;
    CB = Cg;
  } else if (Ca === 1) {
    CY = CM;
    CU = CA;
    CB = Cg;
  } else if (Ca === 2) {
    CY = Cg;
    CU = CA;
    CB = Cj;
  } else if (Ca === 3) {
    CY = Cg;
    CU = CM;
    CB = CA;
  } else if (Ca === 4) {
    CY = Cj;
    CU = Cg;
    CB = CA;
  } else {
    CY = CA;
    CU = Cg;
    CB = CM;
  }
  return make_color_rgb(Math.round(CY * 255), Math.round(CU * 255), Math.round(CB * 255));
}
IE(make_color_hsv, "make_color_hsv");
function make_colour_hsv(Cu, Cs, CZ) {
  return make_color_hsv(Cu, Cs, CZ);
}
IE(make_colour_hsv, "make_colour_hsv");
function color_get_red(Cu) {
  return (Cu | 0) & 255;
}
IE(color_get_red, "color_get_red");
function color_get_green(Cu) {
  return (Cu | 0) >> 8 & 255;
}
IE(color_get_green, "color_get_green");
function color_get_blue(Cu) {
  return (Cu | 0) >> 16 & 255;
}
IE(color_get_blue, "color_get_blue");
function degtorad(Cu) {
  return Cu * IR;
}
IE(degtorad, "degtorad");
function radtodeg(Cu) {
  return Cu / IR;
}
IE(radtodeg, "radtodeg");
function distance_to_point(Cu, Cs) {
  let CZ = Ic.self;
  if (!CZ) {
    return 0;
  }
  let Cf = Math.max(CZ.bbox_left - Cu, 0, Cu - CZ.bbox_right);
  let CQ = Math.max(CZ.bbox_top - Cs, 0, Cs - CZ.bbox_bottom);
  return Math.hypot(Cf, CQ);
}
IE(distance_to_point, "distance_to_point");
function distance_to_object(Cu) {
  let Cs = Ic.self;
  if (!Cs || !Cu) {
    return 0;
  } else {
    return IG(Cs.x, Cs.y, Cu.x, Cu.y);
  }
}
IE(distance_to_object, "distance_to_object");
function move_snap(Cu, Cs) {
  let CZ = Ic.self;
  if (CZ) {
    CZ.move_snap(Cu, Cs);
  }
  return 0;
}
IE(move_snap, "move_snap");
function instance_find(Cu, Cs) {
  return Ic.all(Cu)[Cs] || null;
}
IE(instance_find, "instance_find");
var Vc = 0;
var Vd = 1;
var Vv = 2;
var Vx = 3;
var Vp = 4;
var VG = 7;
var VS = 8;
var Vw = 10;
var VH = 11;
var Vy = 12;
var VN = 13;
var Vl = 14;
var VE = 15;
var Vi = 16;
var Vk = 17;
var VW = 18;
var Vz = 19;
function event_perform(Cu, Cs) {
  let CZ = Ic.self;
  if (!CZ || Cu === undefined || Cs === undefined) {
    once("event_perform", "event_perform called with an undefined event type/number - ev_* constants are not in the transpiler constant table, so the call performs nothing");
    return 0;
  } else if (Cu === VG && Cs >= Vw && Cs <= Vz) {
    CZ.userEvent(Cs - Vw);
    return 0;
  } else if (Cu === Vv) {
    CZ.alarmEvent(Cs);
    return 0;
  } else if (Cu === Vx) {
    CZ.step();
    return 0;
  } else if (Cu === Vc) {
    CZ.create();
    return 0;
  } else if (Cu === Vd) {
    CZ.instance_destroy();
    return 0;
  } else {
    once("event_perform:" + Cu + ":" + Cs, "event_perform(" + Cu + ", " + Cs + ") is not dispatched");
    return 0;
  }
}
IE(event_perform, "event_perform");
var Vs = 0;
function action_set_relative(Cu) {
  Vs = Cu ? 1 : 0;
  return 0;
}
IE(action_set_relative, "action_set_relative");
function action_create_object(Cu, Cs, CZ) {
  let Cf = Ic.self;
  let CQ = Vs && Cf ? Cf.x + Cs : Cs;
  let CA = Vs && Cf ? Cf.y + CZ : CZ;
  return IS(CQ, CA, Cu);
}
IE(action_create_object, "action_create_object");
function action_kill_object() {
  let Cu = Ic.self;
  if (Cu) {
    Cu.instance_destroy();
  }
  return 0;
}
IE(action_kill_object, "action_kill_object");
function action_move_to(Cu, Cs) {
  let CZ = Ic.self;
  if (CZ) {
    if (Vs) {
      CZ.x += Cu;
      CZ.y += Cs;
    } else {
      CZ.x = Cu;
      CZ.y = Cs;
    }
  }
  return 0;
}
IE(action_move_to, "action_move_to");
function action_set_hspeed(Cu) {
  let Cs = Ic.self;
  if (Cs) {
    Cs.hspeed = Vs ? Cs.hspeed + Cu : Cu;
  }
  return 0;
}
IE(action_set_hspeed, "action_set_hspeed");
function action_set_vspeed(Cu) {
  let Cs = Ic.self;
  if (Cs) {
    Cs.vspeed = Vs ? Cs.vspeed + Cu : Cu;
  }
  return 0;
}
IE(action_set_vspeed, "action_set_vspeed");
function action_set_gravity(Cu, Cs) {
  let CZ = Ic.self;
  if (CZ) {
    CZ.gravity_direction = Cu;
    CZ.gravity = Vs ? CZ.gravity + Cs : Cs;
  }
  return 0;
}
IE(action_set_gravity, "action_set_gravity");
function action_set_friction(Cu) {
  let Cs = Ic.self;
  if (Cs) {
    Cs.friction = Vs ? Cs.friction + Cu : Cu;
  }
  return 0;
}
IE(action_set_friction, "action_set_friction");
function action_set_alarm(Cu, Cs) {
  let CZ = Ic.self;
  if (CZ) {
    CZ.alarm[Cs] = Vs ? CZ.alarm[Cs] + Cu : Cu;
  }
  return 0;
}
IE(action_set_alarm, "action_set_alarm");
var Vj = [225, 270, 315, 180, -1, 0, 135, 90, 45];
function action_move(Cu, Cs) {
  let CZ = Ic.self;
  if (!CZ) {
    return 0;
  }
  let Cf = String(Cu);
  let CQ = [];
  for (let Ca = 0; Ca < 9 && Ca < Cf.length; Ca++) {
    if (Cf.charAt(Ca) === "1") {
      CQ.push(Vj[Ca]);
    }
  }
  if (!CQ.length) {
    return 0;
  }
  let CA = CQ[Math.floor(Id.next() * CQ.length)];
  if (CA < 0) {
    CZ.speed = 0;
    return 0;
  } else {
    CZ.direction = CA;
    CZ.speed = Vs ? CZ.speed + Cs : Cs;
    return 0;
  }
}
IE(action_move, "action_move");
function sprite_get_width(Cu) {
  let Cs = o[Cu];
  if (Cs) {
    return Cs.w;
  } else {
    return 0;
  }
}
IE(sprite_get_width, "sprite_get_width");
function sprite_get_height(Cu) {
  let Cs = o[Cu];
  if (Cs) {
    return Cs.h;
  } else {
    return 0;
  }
}
IE(sprite_get_height, "sprite_get_height");
function sprite_get_xoffset(Cu) {
  let Cs = o[Cu];
  if (Cs) {
    return Cs.ox;
  } else {
    return 0;
  }
}
IE(sprite_get_xoffset, "sprite_get_xoffset");
function sprite_get_yoffset(Cu) {
  let Cs = o[Cu];
  if (Cs) {
    return Cs.oy;
  } else {
    return 0;
  }
}
IE(sprite_get_yoffset, "sprite_get_yoffset");
function sprite_replace() {
  return 0;
}
IE(sprite_replace, "sprite_replace");
function sprite_collision_mask(Cu, Cs, CZ, Cf, CQ, CA, Ca, CX) {
  let Cg = o[Cu];
  if (Cg) {
    if (Number(CZ) === 2) {
      Cg.bb = [Number(Cf), Number(CQ), Number(CA), Number(Ca)];
    }
    if (Number(CX) === 1) {
      Cg.precise = false;
    }
  }
  return 0;
}
IE(sprite_collision_mask, "sprite_collision_mask");
function surface_get_width() {
  return Ic.room.w;
}
IE(surface_get_width, "surface_get_width");
function surface_get_height() {
  return Ic.room.h;
}
IE(surface_get_height, "surface_get_height");
var O1 = -1;
function draw_sprite_part(Cu, Cs, CZ, Cf, CQ, CA, Ca, CX) {
  if (y) {
    y.draw_sprite_part(Cu, Cs, CZ, Cf, CQ, CA, Ca, CX);
  }
  return 0;
}
IE(draw_sprite_part, "draw_sprite_part");
function draw_line_width_color(Cu, Cs, CZ, Cf, CQ, CA, Ca) {
  if (y) {
    y.draw_line_width_color(Cu, Cs, CZ, Cf, CQ, IJ(CA), IJ(Ca));
  }
  return 0;
}
IE(draw_line_width_color, "draw_line_width_color");
function draw_line_width_colour(Cu, Cs, CZ, Cf, CQ, CA, Ca) {
  return draw_line_width_color(Cu, Cs, CZ, Cf, CQ, CA, Ca);
}
IE(draw_line_width_colour, "draw_line_width_colour");
function draw_text_ext(Cu, Cs, CZ, Cf, CQ) {
  if (!y) {
    return 0;
  }
  let CA = hashnl(CZ);
  let Ca = Cf > 0 ? Cf : y.string_height("M");
  if (!(CQ > 0)) {
    y.draw_text(Cu, Cs, CA);
    return 0;
  }
  let CX = Cs;
  for (let Cg of CA.split("\n")) {
    let CM = "";
    for (let Cj of Cg.split(" ")) {
      let CY = CM ? CM + " " + Cj : Cj;
      if (CM && y.string_width(CY) > CQ) {
        y.draw_text(Cu, CX, CM);
        CX += Ca;
        CM = Cj;
      } else {
        CM = CY;
      }
    }
    y.draw_text(Cu, CX, CM);
    CX += Ca;
  }
  return 0;
}
IE(draw_text_ext, "draw_text_ext");
function draw_set_circle_precision() {
  return 0;
}
IE(draw_set_circle_precision, "draw_set_circle_precision");
function string_width(Cu) {
  if (y) {
    return y.string_width(hashnl(Cu));
  } else {
    return 0;
  }
}
IE(string_width, "string_width");
function string_height(Cu) {
  if (y) {
    return y.string_height(hashnl(Cu));
  } else {
    return 0;
  }
}
IE(string_height, "string_height");
function hashnl(Cu) {
  let Cs = String(Cu);
  if (Cs.indexOf("#") < 0) {
    return Cs;
  } else {
    return Cs.replace(/\\#/g, "").replace(/#/g, "\n").replace(/\u0001/g, "#");
  }
}
IE(hashnl, "hashnl");
var OI = {
  draw_text(Cu, Cs, CZ, Cf, ...CQ) {
    return Cu.draw_text(Cs, CZ, hashnl(Cf), ...CQ);
  },
  draw_text_transformed(Cu, Cs, CZ, Cf, ...CQ) {
    return Cu.draw_text_transformed(Cs, CZ, hashnl(Cf), ...CQ);
  }
};
var OT = new Map();
var OV = new Map();
var assetKey = IE(Cu => typeof Cu == "string" || typeof Cu == "number" ? String(Cu) : null, "assetKey");
function resetAssetAudioState() {
  OT.clear();
  OV.clear();
}
IE(resetAssetAudioState, "resetAssetAudioState");
function audio_sound_gain(Cu, Cs, CZ = 0) {
  let Cf = assetKey(Cu);
  if (Cf !== null && Number.isFinite(Number(Cs))) {
    let CQ = Math.max(0, Math.min(1, Number(Cs)));
    let CA = CZ > 0 ? Math.max(1, Math.round(CZ / 1000 * 30)) : 0;
    OT.set(Cf, {
      from: CA ? audio_sound_get_gain(Cu) : CQ,
      to: CQ,
      start: Ic.frame,
      frames: CA
    });
  }
  return I7(Cu, Cs, CZ);
}
IE(audio_sound_gain, "audio_sound_gain");
function audio_sound_pitch(Cu, Cs) {
  let CZ = assetKey(Cu);
  if (CZ !== null && Number.isFinite(Number(Cs))) {
    OV.set(CZ, Number(Cs));
  }
  I1(Cu, Cs);
  return 0;
}
IE(audio_sound_pitch, "audio_sound_pitch");
function audio_sound_get_pitch(Cu) {
  let Cs = assetKey(Cu);
  if (Cs !== null && OV.has(Cs)) {
    return OV.get(Cs);
  } else {
    return Cu && Cu.playbackRate || 1;
  }
}
IE(audio_sound_get_pitch, "audio_sound_get_pitch");
function audio_sound_get_gain(Cu) {
  let Cs = assetKey(Cu);
  if (Cs !== null && OT.has(Cs)) {
    let CZ = OT.get(Cs);
    if (!CZ.frames) {
      return CZ.to;
    }
    let Cf = Math.max(0, Math.min(1, (Ic.frame - CZ.start) / CZ.frames));
    return CZ.from + (CZ.to - CZ.from) * Cf;
  }
  if (Cu && Cu.volume !== undefined) {
    return Cu.volume;
  } else {
    return 1;
  }
}
IE(audio_sound_get_gain, "audio_sound_get_gain");
function audio_pause_sound(Cu) {
  I3(Cu);
  return 0;
}
IE(audio_pause_sound, "audio_pause_sound");
function audio_resume_sound(Cu) {
  I5(Cu);
  return 0;
}
IE(audio_resume_sound, "audio_resume_sound");
function audio_stop_all() {
  IT();
  return 0;
}
IE(audio_stop_all, "audio_stop_all");
var Ov = new Map();
var iniKey = IE((Cu, Cs) => String(Cu) + "/" + String(Cs), "iniKey");
function ini_open() {
  return 0;
}
IE(ini_open, "ini_open");
function ini_open_from_string() {
  return 0;
}
IE(ini_open_from_string, "ini_open_from_string");
function ini_close() {
  return "";
}
IE(ini_close, "ini_close");
function ini_read_real(Cu, Cs, CZ) {
  let Cf = iniKey(Cu, Cs);
  if (Ov.has(Cf)) {
    let CQ = Number(Ov.get(Cf));
    if (Number.isFinite(CQ)) {
      return CQ;
    } else {
      return 0;
    }
  }
  if (CZ === undefined) {
    return 0;
  } else {
    return CZ;
  }
}
IE(ini_read_real, "ini_read_real");
function ini_read_string(Cu, Cs, CZ) {
  let Cf = iniKey(Cu, Cs);
  if (Ov.has(Cf)) {
    return String(Ov.get(Cf));
  } else if (CZ === undefined) {
    return "";
  } else {
    return CZ;
  }
}
IE(ini_read_string, "ini_read_string");
function ini_write_real(Cu, Cs, CZ) {
  Ov.set(iniKey(Cu, Cs), Number(CZ));
  return 0;
}
IE(ini_write_real, "ini_write_real");
function ini_write_string(Cu, Cs, CZ) {
  Ov.set(iniKey(Cu, Cs), String(CZ));
  return 0;
}
IE(ini_write_string, "ini_write_string");
function ini_key_exists(Cu, Cs) {
  if (Ov.has(iniKey(Cu, Cs))) {
    return 1;
  } else {
    return 0;
  }
}
IE(ini_key_exists, "ini_key_exists");
function ini_section_exists(Cu) {
  let Cs = String(Cu) + "/";
  for (let CZ of Ov.keys()) {
    if (CZ.startsWith(Cs)) {
      return 1;
    }
  }
  return 0;
}
IE(ini_section_exists, "ini_section_exists");
function file_exists() {
  return 0;
}
IE(file_exists, "file_exists");
function file_delete() {
  return 0;
}
IE(file_delete, "file_delete");
function file_rename() {
  return 0;
}
IE(file_rename, "file_rename");
function file_text_open_read() {
  return -1;
}
IE(file_text_open_read, "file_text_open_read");
function file_text_open_write() {
  return -1;
}
IE(file_text_open_write, "file_text_open_write");
function file_text_open_append() {
  return -1;
}
IE(file_text_open_append, "file_text_open_append");
function file_text_close() {
  return 0;
}
IE(file_text_close, "file_text_close");
function file_text_read_string() {
  return "";
}
IE(file_text_read_string, "file_text_read_string");
function file_text_read_real() {
  return 0;
}
IE(file_text_read_real, "file_text_read_real");
function file_text_readln() {
  return "";
}
IE(file_text_readln, "file_text_readln");
function file_text_write_string() {
  return 0;
}
IE(file_text_write_string, "file_text_write_string");
function file_text_write_real() {
  return 0;
}
IE(file_text_write_real, "file_text_write_real");
function file_text_writeln() {
  return 0;
}
IE(file_text_writeln, "file_text_writeln");
function file_text_eof() {
  return 1;
}
IE(file_text_eof, "file_text_eof");
function buffer_create() {
  return -1;
}
IE(buffer_create, "buffer_create");
function buffer_write() {
  return 0;
}
IE(buffer_write, "buffer_write");
function buffer_read() {
  return 0;
}
IE(buffer_read, "buffer_read");
function buffer_delete() {
  return 0;
}
IE(buffer_delete, "buffer_delete");
function buffer_get_size() {
  return 0;
}
IE(buffer_get_size, "buffer_get_size");
function buffer_save_async() {
  return -1;
}
IE(buffer_save_async, "buffer_save_async");
function buffer_load_async() {
  return -1;
}
IE(buffer_load_async, "buffer_load_async");
function buffer_async_group_begin() {
  return 0;
}
IE(buffer_async_group_begin, "buffer_async_group_begin");
function buffer_async_group_end() {
  return -1;
}
IE(buffer_async_group_end, "buffer_async_group_end");
function buffer_async_group_option() {
  return 0;
}
IE(buffer_async_group_option, "buffer_async_group_option");
function json_encode() {
  return "";
}
IE(json_encode, "json_encode");
function json_decode() {
  return -1;
}
IE(json_decode, "json_decode");
function steam_file_write_file() {
  return 0;
}
IE(steam_file_write_file, "steam_file_write_file");
function steam_file_exists() {
  return 0;
}
IE(steam_file_exists, "steam_file_exists");
function steam_is_overlay_enabled() {
  return 0;
}
IE(steam_is_overlay_enabled, "steam_is_overlay_enabled");
function get_string_async() {
  return -1;
}
IE(get_string_async, "get_string_async");
function window_center() {
  return 0;
}
IE(window_center, "window_center");
function window_set_position() {
  return 0;
}
IE(window_set_position, "window_set_position");
function window_get_x() {
  return 0;
}
IE(window_get_x, "window_get_x");
function window_get_y() {
  return 0;
}
IE(window_get_y, "window_get_y");
function window_set_fullscreen() {
  return 0;
}
IE(window_set_fullscreen, "window_set_fullscreen");
function window_get_fullscreen() {
  return 0;
}
IE(window_get_fullscreen, "window_get_fullscreen");
function window_set_caption() {
  return 0;
}
IE(window_set_caption, "window_set_caption");
function window_get_caption() {
  return "";
}
IE(window_get_caption, "window_get_caption");
function window_set_size() {
  return 0;
}
IE(window_set_size, "window_set_size");
function window_get_width() {
  return Ic.room.w;
}
IE(window_get_width, "window_get_width");
function window_get_height() {
  return Ic.room.h;
}
IE(window_get_height, "window_get_height");
function display_get_width() {
  return Ic.room.w;
}
IE(display_get_width, "display_get_width");
function display_get_height() {
  return Ic.room.h;
}
IE(display_get_height, "display_get_height");
var RJ = {
  restart: null,
  go: null,
  canStand: null,
  fled: null,
  exit: null,
  boot: null
};
var Rc = null;
function room_goto(Cu) {
  let Cs = String(Cu);
  if (t.inbattle || RJ.go) {
    if (t.battleover) {
      return 0;
    }
    let CZ = t.fightRoom || "room_battle";
    if (RJ.go && RJ.canStand && RJ.canStand(Cs, CZ)) {
      Rc = Cs;
      return 0;
    }
    if (CZ === "room_gameover" || Cs === "room_gameover") {
      t.battleover = "ut-lose";
      return 0;
    }
    let Cf = Ic.first("obj_battlecontroller");
    if (Cf && Cf.runaway === 1 && t.flag && t.flag[11] === 1) {
      let CA = RJ.fled ? RJ.fled(Cs) : null;
      if (CA) {
        Rc = CA;
        return 0;
      } else {
        t.battleover = "ut-fled";
        return 0;
      }
    }
    let CQ = RJ.exit ? RJ.exit(Cs, Ic.self) : null;
    if (CQ) {
      Rc = CQ;
      return 0;
    } else {
      t.battleover = "ut-win";
      return 0;
    }
  }
  once("room_goto", "room_goto(" + Cs + ") - no battle is running");
  return 0;
}
IE(room_goto, "room_goto");
function takeRoomChange() {
  let Cu = Rc;
  Rc = null;
  return Cu;
}
IE(takeRoomChange, "takeRoomChange");
function room_goto_next() {
  return room_goto("next");
}
IE(room_goto_next, "room_goto_next");
var Rp = false;
function room_restart() {
  if (t.inbattle && RJ.restart) {
    Rp = true;
    return 0;
  } else {
    once("room_restart", "room_restart() - the sim restarts a fight through its own shell");
    return 0;
  }
}
IE(room_restart, "room_restart");
function takeRoomRestart() {
  let Cu = Rp;
  Rp = false;
  return Cu;
}
IE(takeRoomRestart, "takeRoomRestart");
function game_end() {
  if (!RJ.boot || !RJ.go || !(Rc = RJ.boot("end"), Rc)) {
    once("game_end", "game_end() ignored");
  }
  return 0;
}
IE(game_end, "game_end");
function game_restart() {
  if (!RJ.boot || !RJ.go || !(Rc = RJ.boot("restart"), Rc)) {
    once("game_restart", "game_restart() ignored");
  }
  return 0;
}
IE(game_restart, "game_restart");
function sleep_x() {
  return 0;
}
IE(sleep_x, "sleep_x");
function ossafe_savedata_save() {
  return 0;
}
IE(ossafe_savedata_save, "ossafe_savedata_save");
function ossafe_savedata_load() {
  return 0;
}
IE(ossafe_savedata_load, "ossafe_savedata_load");
var room_width = Ic.room.w;
var room_height = Ic.room.h;
var Rk = [0, 0, 0, 0, 0, 0, 0, 0];
var RW = [0, 0, 0, 0, 0, 0, 0, 0];
var Rz = [640, 640, 640, 640, 640, 640, 640, 640];
var Ru = [480, 480, 480, 480, 480, 480, 480, 480];
var Rs = "room_battle";
var room_battle = "room_battle";
var Rf = 0;
var RQ = 0;
var Rq = 1;
var RA = 4;
var Ra = -1;
var mouse_x = 0;
var mouse_y = 0;
var RM = 0;
function string_byte_length(Cu) {
  return String(Cu).length;
}
IE(string_byte_length, "string_byte_length");
function extension_stubfunc_real() {
  return 0;
}
IE(extension_stubfunc_real, "extension_stubfunc_real");
var RU = [];
var kindMatch = IE((Cu, Cs) => Cs === Cu || (typeof Cs == "function" ? Cu instanceof Cs : Cs != null && Cu.is(String(Cs))), "kindMatch");
function deactivate(Cu) {
  Ic.remove(Cu);
  Cu.destroyed = true;
  Cu.__deactivated = true;
  RU.push(Cu);
}
IE(deactivate, "deactivate");
function instance_deactivate_all(Cu) {
  let Cs = Ic.self;
  for (let CZ of Ic.list.slice()) {
    if (!CZ.destroyed && (!Cu || CZ !== Cs)) {
      deactivate(CZ);
    }
  }
  return 0;
}
IE(instance_deactivate_all, "instance_deactivate_all");
function instance_deactivate_object(Cu) {
  for (let Cs of Ic.list.slice()) {
    if (!Cs.destroyed && !!kindMatch(Cs, Cu)) {
      deactivate(Cs);
    }
  }
  return 0;
}
IE(instance_deactivate_object, "instance_deactivate_object");
function reactivate(Cu) {
  let Cs = [];
  let CZ = [];
  for (let Cf of RU) {
    (Cu(Cf) ? Cs : CZ).push(Cf);
  }
  if (!Cs.length) {
    return 0;
  }
  RU = CZ;
  for (let CQ of Cs) {
    CQ.destroyed = false;
    CQ.__deactivated = false;
    Ic.list.push(CQ);
  }
  Ic.reindex();
  return 0;
}
IE(reactivate, "reactivate");
function instance_activate_object(Cu) {
  return reactivate(Cs => kindMatch(Cs, Cu));
}
IE(instance_activate_object, "instance_activate_object");
function instance_activate_all() {
  return reactivate(() => true);
}
IE(instance_activate_all, "instance_activate_all");
function dropDeactivated() {
  RU = [];
}
IE(dropDeactivated, "dropDeactivated");
function instance_position(Cu, Cs, CZ) {
  for (let Cf of Ic.all(CZ)) {
    let CQ = Math.abs(Cf.sprite_width) || 1;
    let CA = Math.abs(Cf.sprite_height) || 1;
    if (Cu >= Cf.x && Cu <= Cf.x + CQ && Cs >= Cf.y && Cs <= Cf.y + CA) {
      return Cf;
    }
  }
  return null;
}
IE(instance_position, "instance_position");
function randomize() {
  return 0;
}
IE(randomize, "randomize");
function audio_channel_num() {
  return 0;
}
IE(audio_channel_num, "audio_channel_num");
function steam_file_delete() {
  return 0;
}
IE(steam_file_delete, "steam_file_delete");
function steam_initialised() {
  return 0;
}
IE(steam_initialised, "steam_initialised");
var C7 = 0;
var C8 = [1, 0, 0, 0, 0, 0, 0, 0];
var C9 = [0, 0, 0, 0, 0, 0, 0, 0];
var CI = [0, 0, 0, 0, 0, 0, 0, 0];
var CT = [0, 0, 0, 0, 0, 0, 0, 0];
var CV = 640;
var CO = 480;
var CR = 640;
var CC = 480;
var CD = -1;
var keyboard_string = "";
var keyboard_key = 0;
var keyboard_lastkey = 0;
var keyboard_lastchar = "";
function resetUtRuntimeForFight() {
  Rk.fill(0);
  RW.fill(0);
  Rz.fill(640);
  Ru.fill(480);
  IB.clear();
  IL = 1;
  Vs = 0;
  keyboard_lastchar = "";
  Rp = false;
  Rc = null;
  RJ.go = null;
  RJ.canStand = null;
  RJ.fled = null;
  RJ.exit = null;
  RJ.boot = null;
  Ov.clear();
  RU = [];
  OT.clear();
  OV.clear();
  delete t.background_color;
}
IE(resetUtRuntimeForFight, "resetUtRuntimeForFight");
g(resetUtRuntimeForFight);
function utRuntimeSave() {
  let Cu = new Map();
  for (let [Cs, CZ] of OT) {
    Cu.set(Cs, {
      ...CZ
    });
  }
  return {
    ini: new Map(Ov),
    vx: Rk.slice(),
    vy: RW.slice(),
    vw: Rz.slice(),
    vh: Ru.slice(),
    pendingRoom: Rc,
    roomRestartPending: Rp,
    deactivated: RU.slice(),
    actionRelative: Vs,
    keyboard_lastchar: keyboard_lastchar,
    gains: Cu,
    pitches: new Map(OV)
  };
}
IE(utRuntimeSave, "utRuntimeSave");
function utRuntimeRestore(Cu) {
  if (Cu) {
    Ov.clear();
    for (let [Cs, CZ] of Cu.ini) {
      Ov.set(Cs, CZ);
    }
    for (let Cf = 0; Cf < 8; Cf++) {
      Rk[Cf] = Cu.vx[Cf];
      RW[Cf] = Cu.vy[Cf];
      Rz[Cf] = Cu.vw[Cf];
      Ru[Cf] = Cu.vh[Cf];
    }
    Rc = Cu.pendingRoom;
    Rp = Cu.roomRestartPending;
    RU = Cu.deactivated.slice();
    Vs = Cu.actionRelative;
    keyboard_lastchar = Cu.keyboard_lastchar;
    OT.clear();
    for (let [CQ, CA] of Cu.gains) {
      OT.set(CQ, {
        ...CA
      });
    }
    OV.clear();
    for (let [Ca, CX] of Cu.pitches) {
      OV.set(Ca, CX);
    }
  }
}
IE(utRuntimeRestore, "utRuntimeRestore");
var mouse_button = 0;
var mouse_lastbutton = 0;
function audio_play_sound(Cu, Cs, CZ) {
  if (Cu == null || Cu === -1) {
    return -1;
  }
  let Cf = String(Cu);
  if (CZ === 1 || CZ === true) {
    return Ib(Cf);
  }
  let CQ = IO[Cf];
  if (CQ > 0 && CQ <= 10) {
    let CA = i(Cf);
    if (CA) {
      return CA;
    }
  }
  return IP(Cf, 1, false);
}
IE(audio_play_sound, "audio_play_sound");
function audio_stop_sound(Cu) {
  a(Cu);
  return 0;
}
IE(audio_stop_sound, "audio_stop_sound");
function audio_pause_all() {
  return 0;
}
IE(audio_pause_all, "audio_pause_all");
function audio_resume_all() {
  return 0;
}
IE(audio_resume_all, "audio_resume_all");
function action_move_point(Cu, Cs, CZ) {
  let Cf = Ic.self;
  if (!Cf) {
    return 0;
  }
  let CQ = Vs ? Cf.x + Cu : Cu;
  let CA = Vs ? Cf.y + Cs : Cs;
  let Ca = Ip(Cf.x, Cf.y, CQ, CA);
  Cf.speed = CZ;
  Cf.direction = Ca;
  return 0;
}
IE(action_move_point, "action_move_point");
function action_set_motion(Cu, Cs) {
  let CZ = Ic.self;
  if (CZ) {
    if (Vs) {
      CZ.hspeed += Iv(Cs, Cu);
      CZ.vspeed += Ix(Cs, Cu);
      return 0;
    } else {
      CZ.direction = Cu;
      CZ.speed = Cs;
      return 0;
    }
  } else {
    return 0;
  }
}
IE(action_set_motion, "action_set_motion");
function instance_change(Cu, Cs) {
  let CZ = Ic.self;
  if (!CZ) {
    return 0;
  }
  once("instance_change", "instance_change(" + (Cu && Cu.name) + ") - the port keeps the instance and runs the new Create");
  if (Cs && Cu && Cu.prototype && typeof Cu.prototype.create == "function") {
    try {
      Cu.prototype.create.call(CZ);
    } catch {}
  }
  return 0;
}
IE(instance_change, "instance_change");
function draw_triangle_color(Cu, Cs, CZ, Cf, CQ, CA, Ca, CX, Cg, CM) {
  let Cj = y;
  if (!Cj || !Cj.ctx) {
    return 0;
  }
  let CY = Cj.color;
  if (Ca !== undefined) {
    Cj.color = Ca;
  }
  Cj.draw_triangle(Cu, Cs, CZ, Cf, CQ, CA, CM);
  Cj.color = CY;
  return 0;
}
IE(draw_triangle_color, "draw_triangle_color");
var draw_triangle_colour = draw_triangle_color;
function draw_ellipse_color(Cu, Cs, CZ, Cf, CQ, CA, Ca) {
  let CX = y;
  if (!CX || !CX.ctx) {
    return 0;
  }
  let Cg = CX.ctx;
  let CM = (Cu + CZ) / 2;
  let Cj = (Cs + Cf) / 2;
  let CY = Math.abs(CZ - Cu) / 2;
  let CU = Math.abs(Cf - Cs) / 2;
  if (!(CY > 0) || !(CU > 0)) {
    return 0;
  }
  Cg.save();
  Cg.globalAlpha = Math.max(0, Math.min(1, CX.alpha));
  Cg.translate(CM, Cj);
  Cg.scale(1, CU / CY);
  let CB = IJ(CQ);
  if (typeof Cg.createRadialGradient == "function") {
    let CL = Cg.createRadialGradient(0, 0, 0, 0, 0, CY);
    if (CL && typeof CL.addColorStop == "function") {
      CL.addColorStop(0, IJ(CQ));
      CL.addColorStop(1, IJ(CA));
      CB = CL;
    }
  }
  Cg.beginPath();
  Cg.arc(0, 0, CY, 0, Math.PI * 2);
  if (Ca) {
    Cg.strokeStyle = CB;
    Cg.stroke();
  } else {
    Cg.fillStyle = CB;
    Cg.fill();
  }
  Cg.restore();
  return 0;
}
IE(draw_ellipse_color, "draw_ellipse_color");
var draw_ellipse_colour = draw_ellipse_color;
export { Iu as a, Is as b, IZ as c, sprite_delete as d, sprite_create_from_surface as e, audio_is_playing as f, IA as g, Ia as h, IX as i, instance_number as j, instance_create as k, instance_exists as l, ds_map_create as m, ds_map_add as n, ds_map_set as o, ds_map_find_value as p, ds_map_exists as q, ds_map_delete as r, ds_map_destroy as s, ds_map_size as t, ds_map_clear as u, is_undefined as v, is_real as w, is_string as x, real as y, ord as z, chr as A, string_length as B, string_char_at as C, string_copy as D, string_pos as E, string_delete as F, string_insert as G, string_lower as H, string_upper as I, string_repeat as J, string_replace_all as K, string_replace as L, string_digits as M, string_letters as N, string_count as O, script_execute as P, TS as Q, Tw as R, TH as S, Ty as T, TN as U, Tl as V, TE as W, Ti as X, Tk as Y, TW as Z, Tz as _, Tu as $, Ts as aa, TZ as ba, Tf as ca, TQ as da, Tq as ea, TA as fa, Ta as ga, TX as ha, keyboard_check as ia, keyboard_check_pressed as ja, keyboard_check_released as ka, keyboard_check_direct as la, keyboard_clear as ma, gamepad_button_check as na, joystick_check_button as oa, gamepad_button_check_pressed as pa, control_check as qa, control_check_pressed as ra, control_clear as sa, control_update as ta, control_init as ua, obj_time as va, make_color_rgb as wa, make_colour_rgb as xa, make_color_hsv as ya, make_colour_hsv as za, color_get_red as Aa, color_get_green as Ba, color_get_blue as Ca, degtorad as Da, radtodeg as Ea, distance_to_point as Fa, distance_to_object as Ga, move_snap as Ha, instance_find as Ia, Vc as Ja, Vd as Ka, Vv as La, Vx as Ma, Vp as Na, VG as Oa, VS as Pa, Vw as Qa, VH as Ra, Vy as Sa, VN as Ta, Vl as Ua, VE as Va, Vi as Wa, Vk as Xa, VW as Ya, Vz as Za, event_perform as _a, action_set_relative as $a, action_create_object as ab, action_kill_object as bb, action_move_to as cb, action_set_hspeed as db, action_set_vspeed as eb, action_set_gravity as fb, action_set_friction as gb, action_set_alarm as hb, action_move as ib, sprite_get_width as jb, sprite_get_height as kb, sprite_get_xoffset as lb, sprite_get_yoffset as mb, sprite_replace as nb, sprite_collision_mask as ob, surface_get_width as pb, surface_get_height as qb, O1 as rb, draw_sprite_part as sb, draw_line_width_color as tb, draw_line_width_colour as ub, draw_text_ext as vb, draw_set_circle_precision as wb, string_width as xb, string_height as yb, hashnl as zb, OI as Ab, resetAssetAudioState as Bb, audio_sound_gain as Cb, audio_sound_pitch as Db, audio_sound_get_pitch as Eb, audio_sound_get_gain as Fb, audio_pause_sound as Gb, audio_resume_sound as Hb, audio_stop_all as Ib, ini_open as Jb, ini_open_from_string as Kb, ini_close as Lb, ini_read_real as Mb, ini_read_string as Nb, ini_write_real as Ob, ini_write_string as Pb, ini_key_exists as Qb, ini_section_exists as Rb, file_exists as Sb, file_delete as Tb, file_rename as Ub, file_text_open_read as Vb, file_text_open_write as Wb, file_text_open_append as Xb, file_text_close as Yb, file_text_read_string as Zb, file_text_read_real as _b, file_text_readln as $b, file_text_write_string as ac, file_text_write_real as bc, file_text_writeln as cc, file_text_eof as dc, buffer_create as ec, buffer_write as fc, buffer_read as gc, buffer_delete as hc, buffer_get_size as ic, buffer_save_async as jc, buffer_load_async as kc, buffer_async_group_begin as lc, buffer_async_group_end as mc, buffer_async_group_option as nc, json_encode as oc, json_decode as pc, steam_file_write_file as qc, steam_file_exists as rc, steam_is_overlay_enabled as sc, get_string_async as tc, window_center as uc, window_set_position as vc, window_get_x as wc, window_get_y as xc, window_set_fullscreen as yc, window_get_fullscreen as zc, window_set_caption as Ac, window_get_caption as Bc, window_set_size as Cc, window_get_width as Dc, window_get_height as Ec, display_get_width as Fc, display_get_height as Gc, RJ as Hc, room_goto as Ic, takeRoomChange as Jc, room_goto_next as Kc, room_restart as Lc, takeRoomRestart as Mc, game_end as Nc, game_restart as Oc, sleep_x as Pc, ossafe_savedata_save as Qc, ossafe_savedata_load as Rc, room_width as Sc, room_height as Tc, Rk as Uc, RW as Vc, Rz as Wc, Ru as Xc, Rs as Yc, room_battle as Zc, Rf as _c, RQ as $c, Rq as ad, RA as bd, Ra as cd, mouse_x as dd, mouse_y as ed, RM as fd, string_byte_length as gd, extension_stubfunc_real as hd, instance_deactivate_all as id, instance_deactivate_object as jd, instance_activate_object as kd, instance_activate_all as ld, dropDeactivated as md, instance_position as nd, randomize as od, audio_channel_num as pd, steam_file_delete as qd, steam_initialised as rd, C7 as sd, C8 as td, C9 as ud, CI as vd, CT as wd, CV as xd, CO as yd, CR as zd, CC as Ad, CD as Bd, keyboard_string as Cd, keyboard_key as Dd, keyboard_lastkey as Ed, keyboard_lastchar as Fd, resetUtRuntimeForFight as Gd, utRuntimeSave as Hd, utRuntimeRestore as Id, mouse_button as Jd, mouse_lastbutton as Kd, audio_play_sound as Ld, audio_stop_sound as Md, audio_pause_all as Nd, audio_resume_all as Od, action_move_point as Pd, action_set_motion as Qd, instance_change as Rd, draw_triangle_color as Sd, draw_triangle_colour as Td, draw_ellipse_color as Ud, draw_ellipse_colour as Vd, Iz as Wd };
