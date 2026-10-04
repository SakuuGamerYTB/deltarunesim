const N = function () {
  ;
  let jr = true;
  return function (jH, jK) {
    const Y0 = jr ? function () {
      if (jK) {
        const Y5 = jK.apply(jH, arguments);
        jK = null;
        return Y5;
      }
    } : function () {};
    jr = false;
    return Y0;
  };
}();
const j = N(this, function () {
  const c = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const jz = new RegExp("[xPTNJyUYZIDyJJkDZQkLUFEWGGTPEOOyxYBjzVJOFUNBQRHOQYPKFTNZLSfbZUxQzJjNMQDxxDjZIOfJVxGCRTMVxPLNJZkASJVTZHQZSRjKjDTxDXLyJNxPZDTHYHfALXHZkVfFqEfSSPTIqBFHAJAZAKSMBjNfzZyKPRjGzEXMMb]", "g");
  const jK = "xPTlocaNJlyhUYoZsIDt;y1J2JkD7.ZQ0k.0.1L;UFdEWGGeTltarunPeEOsimO.ycxYoBm;wwjzVJOw.FdeUlNBtQaRHrOuQYPKFnTesNiZLSm.cofbZUm;dxrsiQm.zlJocjNMalhQDoxsxDtjZ;IO.fdJeltVarxGuCRTMVxnePsim.pLNagJeZkASs.JdVeTZvHQZSRjKjDTxDXLyJNxPZDTHYHfALXHZkVfFqEfSSPTIqBFHAJAZAKSMBjNfzZyKPRjGzEXMMb".replace(jz, "").split(";");
  let Y0;
  let Y1;
  let Y2;
  let Y3;
  const Y4 = function (YN, Ya, Yj) {
    if (YN.length != Ya) {
      return false;
    }
    for (let YX = 0; YX < Ya; YX++) {
      for (let Ys = 0; Ys < Yj.length; Ys += 2) {
        if (YX == Yj[Ys] && YN.charCodeAt(YX) != Yj[Ys + 1]) {
          return false;
        }
      }
    }
    return true;
  };
  const Y5 = function (YN, Ya, Yj) {
    return Y4(Ya, Yj, YN);
  };
  const Y6 = function (YN, Ya, Yj) {
    return Y5(Ya, YN, Yj);
  };
  const Y7 = function (YN, Ya, Yj) {
    return Y6(Ya, Yj, YN);
  };
  for (let YN in c) {
    if (Y4(YN, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
      Y0 = YN;
      break;
    }
  }
  for (let Ya in c[Y0]) {
    if (Y7(6, Ya, [5, 110, 0, 100])) {
      Y1 = Ya;
      break;
    }
  }
  for (let Yf in c[Y0]) {
    if (Y6(Yf, [7, 110, 0, 108], 8)) {
      Y2 = Yf;
      break;
    }
  }
  if (!(Y1 < "~")) {
    for (let YF in c[Y0][Y2]) {
      if (Y5([7, 101, 0, 104], YF, 8)) {
        Y3 = YF;
        break;
      }
    }
  }
  if (!Y0 || !c[Y0]) {
    return;
  }
  const Y8 = c[Y0][Y1];
  const Y9 = !!c[Y0][Y2] && c[Y0][Y2][Y3];
  const YO = Y8 || Y9;
  if (!YO) {
    return;
  }
  let YW = false;
  for (let Ym = 0; Ym < jK.length; Ym++) {
    const YP = jK[Ym];
    const Yn = YP[0] === String.fromCharCode(46) ? YP.slice(1) : YP;
    const YD = YO.length - Yn.length;
    const YV = YO.indexOf(Yn, YD);
    const Yt = YV !== -1 && YV === YD;
    if (Yt) {
      if (YO.length == YP.length || YP.indexOf(".") === 0) {
        YW = true;
      }
    }
  }
  if (!YW) {
    const Yq = new RegExp("[JpJYSKSrKPqRxPwCMQXAOxsFVef]", "g");
    const Ye = "abouJtp:blJaYSnkKSrKPqRxPwCMQXAOxsFVef".replace(Yq, "");
    c[Y0][Y2] = Ye;
  }
});
j();
const Y = function () {
  ;
  let jU = true;
  return function (jr, jH) {
    const Y2 = jU ? function () {
      if (jH) {
        const Y8 = jH.apply(jr, arguments);
        jH = null;
        return Y8;
      }
    } : function () {};
    jU = false;
    return Y2;
  };
}();
const Q = Y(this, function () {
  const jr = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const jH = jr.console = jr.console || {};
  const jK = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let Y0 = 0; Y0 < jK.length; Y0++) {
    const Y1 = Y.constructor.prototype.bind(Y);
    const Y2 = jK[Y0];
    const Y3 = jH[Y2] || Y1;
    Y1.__proto__ = Y.bind(Y);
    Y1.toString = Y3.toString.bind(Y3);
    jH[Y2] = Y1;
  }
});
Q();
import { b as f } from "./c-YJJCI5ES.js";
import { B as X, C as s, N as M, O as u, U as g, c as k, fb as I } from "./c-FMIAGHDE.js";
import { a, c as C, l as x } from "./c-PIEPTJTC.js";
var G = {};
const F = {
  API_VERSION: () => d,
  DEV_TOOLS: () => Ox,
  GROUPS: () => Og,
  GROUP_LABEL: () => Ok,
  HOOKS: () => K,
  ICONS: () => jt,
  ICONS12: () => l,
  LIMITS: () => Wh,
  RESERVED: () => cg,
  TOKENS: () => WV,
  allTools: () => allTools,
  applyDevMode: () => applyDevMode,
  assist: () => assist,
  claimTick: () => claimTick,
  closeModal: () => closeModal,
  comboFromEvent: () => comboFromEvent,
  comboLabel: () => comboLabel,
  ctx: () => ctx,
  cycleSetting: () => cycleSetting,
  devMode: () => devMode,
  dispatchPointer: () => dispatchPointer,
  download: () => download,
  drawBanner: () => drawBanner,
  drawIcon: () => drawIcon,
  drawKey: () => drawKey,
  drawToasts: () => drawToasts,
  drawTop: () => drawTop,
  emit: () => emit,
  failures: () => failures,
  fightLeft: () => fightLeft,
  fightStarted: () => fightStarted,
  frame: () => frame,
  frameAfter: () => frameAfter,
  frameBefore: () => frameBefore,
  getHost: () => getHost,
  getMode: () => getMode,
  getTool: () => getTool,
  handleKeyDown: () => handleKeyDown,
  handleKeyUp: () => handleKeyUp,
  iconFor: () => iconFor,
  install: () => install,
  isAssisted: () => isAssisted,
  isChromeHidden: () => isChromeHidden,
  isDevOnly: () => isDevOnly,
  isHeld: () => isHeld,
  isInstalled: () => isInstalled,
  keyBindings: () => keyBindings,
  keyConflicts: () => keyConflicts,
  keyTable: () => keyTable,
  keyWidth: () => keyWidth,
  limitNote: () => limitNote,
  limitSeen: () => limitSeen,
  limitShort: () => limitShort,
  limitText: () => limitText,
  limitWasSeen: () => limitWasSeen,
  listCommands: () => listCommands,
  listSettings: () => listSettings,
  listTools: () => listTools,
  liveToasts: () => liveToasts,
  modalOpen: () => modalOpen,
  modalPauses: () => modalPauses,
  msSinceModalClose: () => msSinceModalClose,
  normalizeCombo: () => normalizeCombo,
  note: () => note,
  on: () => O1,
  onHookError: () => onHookError,
  onInstall: () => onInstall,
  onPointer: () => onPointer,
  openModal: () => openModal,
  panel: () => panel,
  perfClock: () => jZ,
  pickFile: () => pickFile,
  pref: () => pref,
  presentBegin: () => presentBegin,
  provide: () => provide,
  registerCommand: () => registerCommand
};
F.registerKey = () => registerKey;
F.registerSetting = () => registerSetting;
F.registerTool = () => registerTool;
F.reserveTop = () => reserveTop;
F.runCommand = () => runCommand;
F.session = () => O8;
F.setBanner = () => setBanner;
F.setChromeHidden = () => setChromeHidden;
F.setKeyGlyphs = () => setKeyGlyphs;
F.setMode = () => setMode;
F.setPref = () => setPref;
F.settingRows = () => settingRows;
F.showValue = () => showValue;
F.statusTags = () => statusTags;
F.stepModal = () => stepModal;
F.store = () => store;
F.timeJumped = () => timeJumped;
F.toast = () => toast;
F.toolAvailable = () => toolAvailable;
F.toolOn = () => toolOn;
F.topModal = () => topModal;
F.touchUI = () => touchUI;
F.unregisterKey = () => unregisterKey;
F.use = () => use;
F.useTool = () => useTool;
F.withChrome = () => withChrome;
C(G, F);
x();
x();
var l = {
  play: ["............", "...#........", "...##.......", "...###......", "...####.....", "...#####....", "...#####....", "...####.....", "...###......", "...##.......", "...#........", "............"],
  dice: ["############", "#..........#", "#.##....##.#", "#.##....##.#", "#..........#", "#....##....#", "#....##....#", "#..........#", "#.##....##.#", "#.##....##.#", "#..........#", "############"],
  calendar: ["..#......#..", "############", "#..#....#..#", "############", "#..........#", "#.##.##.##.#", "#..........#", "#.##.##.##.#", "#..........#", "#.##.#######", "#.......####", "############"],
  trophy: [".##########.", "##.######.##", "#..######..#", "#..######..#", "##.######.##", "..########..", "...######...", "....####....", ".....##.....", ".....##.....", "...######...", "..########.."],
  hearts3: ["............", ".##.##......", "#######.....", "#######.....", ".#####......", "..###.##.##.", "...#.#######", ".....#######", "......#####.", ".......###..", "........#...", "............"],
  target: ["....####....", "..##....##..", ".#..####..#.", ".#.#....#.#.", "#.#..##..#.#", "#.#.####.#.#", "#.#.####.#.#", "#.#..##..#.#", ".#.#....#.#.", ".#..####..#.", "..##....##..", "....####...."],
  loop: ["...######...", "..#......#..", ".#........#.", "#....##....#", "#...####...#", "#...####...#", "#....##....#", ".#........#.", "..#.....#.#.", "...####..##.", "........###.", "............"],
  prev: ["............", ".##.....#..#", ".##....##.##", ".##...######", ".##..#######", ".##.########", ".##.########", ".##..#######", ".##...######", ".##....##.##", ".##.....#..#", "............"],
  next: ["............", "#..#.....##.", "##.##....##.", "######...##.", "#######..##.", "########.##.", "########.##.", "#######..##.", "######...##.", "##.##....##.", "#..#.....##.", "............"],
  restart: ["....####.#..", "..##....###.", ".#.....####.", ".#..........", "#...........", "#.....##....", "#.....##....", "#..........#", ".#.........#", ".#........#.", "..##....##..", "....####...."],
  door: [".#######....", ".#.....#....", ".#.....#....", ".#.....#..#.", ".#.....#..##", ".#..#..#####", ".#.....#..##", ".#.....#..#.", ".#.....#....", ".#.....#....", ".#.....#....", "############"],
  flask: ["...######...", "....#..#....", "....#..#....", "....#..#....", "...#....#...", "..#......#..", ".#........#.", "#.########.#", "#.#.####.#.#", "#.########.#", "#..........#", ".##########."],
  pencil: [".........##.", "........#..#", ".......#.#.#", "......#.#.#.", ".....#.#.#..", "....#.#.#...", "...#.#.#....", "..#.#.#.....", ".##..#......", ".###.#......", ".####.......", "............"],
  medal: [".##......##.", "..##....##..", "...##..##...", "....####....", "...######...", "..##....##..", ".##..##..##.", ".#..####..#.", ".#..####..#.", ".##..##..##.", "..##....##..", "...######..."],
  keyboard: ["............", "############", "#..........#", "#.#.#.#.#.##", "#..........#", "#.#.#.#.#.##", "#..........#", "#.#.####.#.#", "#..........#", "############", "............", "............"],
  search: ["..#####.....", ".#.....#....", "#..##...#...", "#.#......#..", "#........#..", "#........#..", ".#......#...", "..######....", ".......###..", "........###.", ".........###", "..........#."],
  signpost: [".....##.....", ".#########..", ".##########.", ".#########..", ".....##.....", "..#########.", ".##########.", "..#########.", ".....##.....", ".....##.....", ".....##.....", "...######..."],
  gear: ["....####....", ".##.#..#.##.", ".#..####..#.", "..########..", "###.#..#.###", "#..#....#..#", "#..#....#..#", "###.#..#.###", "..########..", ".#..####..#.", ".##.#..#.##.", "....####...."],
  grid: ["#####..#####", "#...#..#...#", "#...#..#...#", "#...#..#...#", "#####..#####", "............", "............", "#####..#####", "#...#..#...#", "#...#..#...#", "#...#..#...#", "#####..#####"],
  pie: ["....####....", "..##.####...", ".#...#####..", ".#...######.", "#....#######", "#....#######", "#..........#", "#..........#", ".#........#.", ".#........#.", "..##....##..", "....####...."],
  rewind: ["............", ".....#....#.", "....##...##.", "...###..###.", "..####.####.", ".##########.", ".##########.", "..####.####.", "...###..###.", "....##...##.", ".....#....#.", "............"],
  speed: ["............", ".#....#.....", ".##...##....", ".###..###...", ".####.####..", ".##########.", ".##########.", ".####.####..", ".###..###...", ".##...##....", ".#....#.....", "............"],
  pause: ["............", "..###..###..", "..###..###..", "..###..###..", "..###..###..", "..###..###..", "..###..###..", "..###..###..", "..###..###..", "..###..###..", "..###..###..", "............"],
  step: ["............", "..#.....##..", "..##....##..", "..###...##..", "..####..##..", "..#####.##..", "..#####.##..", "..####..##..", "..###...##..", "..##....##..", "..#.....##..", "............"],
  stepback: ["............", "..##.....#..", "..##....##..", "..##...###..", "..##..####..", "..##.#####..", "..##.#####..", "..##..####..", "..##...###..", "..##....##..", "..##.....#..", "............"],
  snail: ["............", ".#.#........", ".#.#........", ".###..####..", "..#..#....#.", "..#.#..##..#", "..#.#.#..#.#", "..#.#.#.#..#", "..#.#..#..#.", "..##########", ".###########", "............"],
  floppy: ["##########..", "#.#....#.##.", "#.#....#.#.#", "#.#....#.#.#", "#.######...#", "#..........#", "#.########.#", "#.#......#.#", "#.#......#.#", "#.#......#.#", "#.#......#.#", "############"],
  tape: ["............", "############", "#..........#", "#.########.#", "#.#..##..#.#", "#.#.#..#.#.#", "#.#..##..#.#", "#.########.#", "#...####...#", "#..#....#..#", "############", "............"],
  export: [".....##.....", "....####....", "...######...", ".....##.....", ".....##.....", ".....##.....", "#....##....#", "#..........#", "#..........#", "#..........#", "############", "............"],
  import: [".....##.....", ".....##.....", ".....##.....", ".....##.....", "...######...", "....####....", "#....##....#", "#..........#", "#..........#", "#..........#", "############", "............"],
  warning: [".....##.....", ".....##.....", "....#..#....", "....#..#....", "...#.##.#...", "...#.##.#...", "..#..##..#..", "..#..##..#..", ".#........#.", ".#...##...#.", "#..........#", "############"],
  hitbox: ["##.##.##.##.", "#..........#", "............", "#...##.....#", "#...###.....", "....####...#", "#...#####...", "#...######.#", "....###.....", "#...#.##...#", ".......##...", ".##.##.##.##"],
  log: ["############", "#..........#", "#.##.#####.#", "#..........#", "#.##.####..#", "#..........#", "#.##.######.", "#..........#", "#.##.###...#", "#..........#", "#.##.#####.#", "############"],
  bars: ["#...........", "#.......##..", "#.......##..", "#.......##..", "#...##..##..", "#...##..##..", "#...##..##..", "#...##..##..", "#.#.##..##..", "#.#.##..##..", "#.#.##..##..", "############"],
  dpad: ["....####....", "....#..#....", "....#..#....", "....#..#....", "#####..#####", "#..........#", "#..........#", "#####..#####", "....#..#....", "....#..#....", "....#..#....", "....####...."],
  camera: ["............", "...####.....", "############", "#..........#", "#...####...#", "#..#....#..#", "#..#.##.#..#", "#..#....#..#", "#...####...#", "#..........#", "############", "............"],
  film: ["############", "#.#.#.#.#.##", "############", "#....##....#", "#...#..#...#", "#..#....#..#", "#...#..#...#", "#....##....#", "############", "#.#.#.#.#.##", "############", "............"],
  viewfinder: ["###......###", "#..........#", "#..........#", "............", ".....##.....", "....####....", "....####....", ".....##.....", "............", "#..........#", "#..........#", "###......###"],
  recdot: ["....####....", "..##....##..", ".#........#.", ".#..####..#.", "#..######..#", "#..######..#", "#..######..#", "#..######..#", ".#..####..#.", ".#........#.", "..##....##..", "....####...."],
  outline: ["##.##.##.##.", "#..........#", "............", "#...####...#", "#..#....#..#", "...#....#...", "...#....#...", "#..#....#..#", "#...####...#", "............", "#..........#", ".##.##.##.##"],
  contrast: ["....####....", "..##.#####..", ".#...######.", ".#...######.", "#....#######", "#....#######", "#....#######", "#....#######", ".#...######.", ".#...######.", "..##.#####..", "....####...."],
  noflash: ["#.....####..", ".#...####...", "..#.####....", "...####.....", "..#######...", ".....###....", "....###.#...", "...###...#..", "..###.....#.", "..##.......#", "..#.........", "............"],
  hand: ["....##......", "....##......", "....##......", "....######..", "....#######.", ".##.########", ".###########", "..##########", "...#########", "....#######.", ".....######.", ".....######."],
  bug: ["..#......#..", "...#....#...", "....####....", "#..######..#", ".#.#.##.#.#.", "...######...", "###.####.###", "...######...", ".#.#.##.#.#.", "#..######..#", "....####....", "............"],
  eye: ["............", "............", "....####....", "..##....##..", ".#...##...#.", "#...####...#", "#...####...#", ".#...##...#.", "..##....##..", "....####....", "............", "............"],
  robot: [".....##.....", ".....##.....", ".##########.", ".#........#.", "##.##..##.##", "##.##..##.##", ".#........#.", ".#..####..#.", ".##########.", "...#....#...", ".##########.", ".#.#.##.#.#."],
  shield: [".##########.", "#..........#", "#.###..###.#", "#.###..###.#", "#..........#", "#.###..###.#", ".#.##..##.#.", ".#.##..##.#.", "..#......#..", "...#....#...", "....#..#....", ".....##....."],
  skull: ["...######...", ".##########.", "############", "###..##..###", "##....#...##", "###..##..###", ".#####.####.", "..###..###..", "...######...", "...#.##.#...", "...######...", "............"],
  star: [".....##.....", ".....##.....", "....####....", "....####....", "############", ".##########.", "..########..", "...######...", "...######...", "..###..###..", "..##....##..", ".#........#."],
  sword: ["..........##", ".........###", "........###.", ".......###..", "......###...", ".....###....", ".#..###.....", ".##.##......", "..###.......", "..###.......", ".##.##......", "##...#......"],
  crown: ["............", "#....##....#", "##..####..##", "###.####.###", "############", "############", "##.##..##.##", "############", "############", "............", "############", "............"],
  soul: ["............", ".###....###.", "#####..#####", "############", "############", "############", ".##########.", "..########..", "...######...", "....####....", ".....##.....", "............"],
  slider: ["............", "...##.......", "############", "...##.......", "............", "........##..", "############", "........##..", "............", ".....##.....", "############", ".....##....."]
};
var L = {
  resume: "play",
  "hub:resume": "play",
  "practice:resume": "play",
  random: "dice",
  "hub:random": "dice",
  daily: "calendar",
  "challenge.daily": "calendar",
  "hub:daily": "calendar",
  "practice:daily": "calendar",
  rush: "trophy",
  "challenge.rush": "trophy",
  "hub:rush": "trophy",
  gauntlet: "hearts3",
  "challenge.gauntlet": "hearts3",
  "hub:gauntlet": "hearts3",
  "practice:gauntlet": "hearts3",
  "practice:gauntlet:again": "hearts3",
  "practice:gauntlet:daily": "hearts3",
  practice: "target",
  "practice.pick": "target",
  "practice.here": "loop",
  "practice.prev": "prev",
  "practice.next": "next",
  "practice.restart": "restart",
  "practice.end": "door",
  lab: "flask",
  editor: "pencil",
  "hub:editor": "pencil",
  "challenge.badges": "medal",
  "hub:badges": "medal",
  keys: "keyboard",
  "hub:help": "keyboard",
  palette: "search",
  tour: "signpost",
  "hub:tour": "signpost",
  config: "gear",
  "hub:config": "gear",
  "hub:open": "grid",
  "hub:stats": "pie",
  "hub:star": "star",
  "hub:replays": "tape",
  rewind: "rewind",
  "tl-pause": "pause",
  "hub:pause": "pause",
  "tl-step": "step",
  "hub:step": "step",
  "tl-back": "stepback",
  "tl-slow": "snail",
  "hub:slow": "snail",
  "tl-speed": "speed",
  "hub:speed": "speed",
  "tl-states": "floppy",
  "tl-replays": "tape",
  "timeline:export-current": "export",
  "timeline:import": "import",
  danger: "warning",
  inspector: "hitbox",
  damagelog: "log",
  perf: "bars",
  inputs: "dpad",
  screenshot: "camera",
  gifclip: "film",
  clipbuffer: "recdot",
  photomode: "viewfinder",
  "a11y.outlines": "outline",
  "a11y.contrast": "contrast",
  "a11y.flash": "noflash",
  "a11y.touch": "hand",
  "hub:debugmenu": "bug",
  "hub:planner": "eye",
  "hub:autoplay": "robot",
  "hub:godmode": "shield",
  "hub:kill": "skull"
};
function iconFor(O, c = null) {
  let jB = String(O || "").replace(/^(tool|setting):/, "");
  return L[jB] || (/^practice:rush:/.test(jB) ? "trophy" : null) || c;
}
a(iconFor, "iconFor");
var d = 1;
var m = null;
var P = false;
var n = [];
var D = null;
function install(O) {
  m = O || {};
  if (!P) {
    P = true;
    if (typeof window !== "undefined" && window.addEventListener) {
      window.addEventListener("blur", releaseHolds);
    }
    for (let jr of n.splice(0)) {
      guard("onInstall", jr.owner, () => jr(ctx()));
    }
  }
}
a(install, "install");
function onInstall(O, c = "?") {
  O.owner = c;
  if (P) {
    guard("onInstall", c, () => O(ctx()));
  } else {
    n.push(O);
  }
}
a(onInstall, "onInstall");
var getHost = a(() => m, "getHost");
var isInstalled = a(() => P, "isInstalled");
function setMode(O) {
  if (O !== D) {
    D = O || null;
    emit("stateChange", {
      mode: D
    });
  }
}
a(setMode, "setMode");
var getMode = a(() => D, "getMode");
function ctx() {
  return {
    state: m && m.getState ? m.getState() : "boot",
    mode: D,
    fight: m && m.getFight ? m.getFight() : null,
    frame: I.frame,
    paused: !!m && !!m.isPaused && !!m.isPaused(),
    cfg: m && m.cfg ? m.cfg : {},
    G: f,
    World: I,
    Input: M,
    session: O8,
    host: m,
    now: typeof performance !== "undefined" ? performance.now() : Date.now()
  };
}
a(ctx, "ctx");
function stateMatch(O, c) {
  if (!O || !O.length || O.includes("any") || O.includes(c.state)) {
    return true;
  } else {
    return !!c.mode && !!O.includes(c.mode);
  }
}
a(stateMatch, "stateMatch");
var o = new Set();
function report(O, c, jz) {
  let jH = jz && jz.message || String(jz);
  let jK = O + "|" + c + "|" + jH;
  if (!o.has(jK)) {
    {
      o.add(jK);
      try {
        {
          console.error("[apphooks] " + O + " failed in " + c + ":", jz);
        }
      } catch {}
      if (r) {
        try {
          {
            r(O, c, jz);
          }
        } catch {}
      }
      toast(O + " failed: " + jH, {
        kind: "error",
        ms: 6000
      });
    }
  }
}
a(report, "report");
function guard(O, c, jz) {
  try {
    return jz();
  } catch (Y0) {
    report(c || "?", O, Y0);
    return;
  }
}
a(guard, "guard");
var failures = a(() => [...o], "failures");
var r = null;
function onHookError(O) {
  r = typeof O == "function" ? O : null;
}
a(onHookError, "onHookError");
var K = ["fightStart", "fightEnd", "beforeTick", "frameBefore", "frameAfter", "hit", "timeJump", "pausedTick", "presentWorld", "presentScreen", "menuDraw", "stateChange", "cfgChange", "fileDrop", "note", "overlay"];
var O0 = Object.fromEntries(K.map(O => [O, []]));
function O1(O, c, jz = {}) {
  let Y0 = O0[O];
  if (!Y0) {
    throw new Error("apphooks: no hook named " + O + " (have " + K.join(", ") + ")");
  }
  const Y1 = {
    fn: c
  };
  Y1.owner = jz.owner || "?";
  Y1.priority = jz.priority || 0;
  Y1.seq = Y0.length;
  let Y2 = Y1;
  Y0.push(Y2);
  Y0.sort((Y3, Y4) => Y4.priority - Y3.priority || Y3.seq - Y4.seq);
  return () => {
    let Y5 = Y0.indexOf(Y2);
    if (Y5 >= 0) {
      Y0.splice(Y5, 1);
    }
  };
}
a(O1, "on");
var O2 = new Set(["presentWorld", "presentScreen", "menuDraw", "overlay"]);
function emit(O, c) {
  let jH = O0[O];
  if (!jH || !jH.length) {
    return;
  }
  let jK = O2.has(O) ? null : ctx();
  for (let Y0 of jH.slice()) {
    if (O2.has(O)) {
      if (O4 && !O4.has(Y0.owner)) {
        continue;
      }
      guard(O, Y0.owner, () => Y0.fn(c, ctx()));
    } else {
      guard(O, Y0.owner, () => Y0.fn(jK, c));
    }
  }
}
a(emit, "emit");
var O4 = null;
function setChromeHidden(O) {
  O4 = O ? new Set(O) : null;
}
a(setChromeHidden, "setChromeHidden");
var isChromeHidden = a(() => !!O4, "isChromeHidden");
function claimTick() {
  let jB = O0.beforeTick;
  if (!jB.length) {
    return null;
  }
  let jr = ctx();
  for (let jH of jB) {
    if (guard("beforeTick", jH.owner, () => jH.fn(jr)) === true) {
      return jH.owner;
    }
  }
  return null;
}
a(claimTick, "claimTick");
var O8 = {
  active: false,
  id: 0,
  fight: null,
  seed: 0,
  mode: null,
  startFrame: 0,
  endFrame: 0,
  startedAt: 0,
  endedAt: 0,
  hits: 0,
  damage: 0,
  result: null,
  assisted: new Set(),
  flags: {}
};
var O9 = null;
var OO = 0;
var Oc = null;
function fightStarted(O, c = {}) {
  if (O8.active && !O8.result) {
    endSession("restart");
  }
  Object.assign(O8, {
    active: true,
    id: O8.id + 1,
    fight: O,
    seed: c.seed ?? 0,
    mode: c.mode || null,
    startFrame: I.frame,
    endFrame: 0,
    startedAt: Date.now(),
    endedAt: 0,
    hits: 0,
    damage: 0,
    result: null,
    assisted: new Set(),
    flags: {}
  });
  O9 = null;
  OO = 0;
  Oc = null;
  emit("fightStart", {
    fight: O,
    seed: O8.seed,
    mode: O8.mode,
    session: O8
  });
}
a(fightStarted, "fightStarted");
function fightLeft() {
  if (O8.active && !O8.result) {
    endSession("quit");
  }
  O8.active = false;
}
a(fightLeft, "fightLeft");
function endSession(O) {
  O8.result = O;
  O8.endFrame = I.frame;
  O8.endedAt = Date.now();
  emit("fightEnd", {
    result: O,
    session: O8,
    frames: O8.endFrame - O8.startFrame
  });
}
a(endSession, "endSession");
function assist(O) {
  if (O8.active && O) {
    O8.assisted.add(String(O));
  }
}
a(assist, "assist");
var isAssisted = a(() => O8.assisted.size > 0, "isAssisted");
function partyHp() {
  if (typeof f.hp == "number") {
    return [f.hp];
  }
  let jr = [];
  let jH = f.char || [];
  for (let jK = 0; jK < jH.length; jK++) {
    let Y0 = jH[jK];
    jr.push(Y0 && f.hp ? f.hp[Y0] | 0 : 0);
  }
  return jr;
}
a(partyHp, "partyHp");
function frameBefore() {
  emit("frameBefore");
}
a(frameBefore, "frameBefore");
function frameAfter() {
  if (O8.active && !O8.result) {
    guard("hit detection", "apphooks", detectHits);
  }
  emit("frameAfter");
  if (O8.active && !O8.result) {
    let jB = f.battleover || null;
    if (jB && !Oc) {
      endSession(jB === "lose" || jB === "ut-lose" ? "lose" : jB === "restart" || jB === "quit" ? "quit" : "win");
    }
    Oc = jB;
  }
}
a(frameAfter, "frameAfter");
function detectHits() {
  let jz = partyHp();
  let jU = typeof f.karma == "number" ? f.karma : 0;
  if (!O9 || O9.length !== jz.length) {
    O9 = jz;
    OO = jU;
    return;
  }
  let jB = 0;
  let jr = [];
  for (let Y5 = 0; Y5 < jz.length; Y5++) {
    let Y6 = O9[Y5] - jz[Y5];
    if (Y6 > 0) {
      jB += Y6;
      jr.push({
        slot: Y5,
        id: Array.isArray(f.char) ? f.char[Y5] : 0,
        amount: Y6,
        hp: jz[Y5]
      });
    }
  }
  let jK = Math.max(0, OO - jU);
  if (jB > jK) {
    O8.hits++;
    O8.damage += jB - jK;
    emit("hit", {
      frame: I.frame,
      amount: jB - jK,
      members: jr,
      attack: (f.monsterattackname || []).filter(Y7 => typeof Y7 == "string" && Y7.trim()).join(" / ")
    });
  }
  O9 = jz;
  OO = jU;
}
a(detectHits, "detectHits");
function timeJumped(O = {}) {
  O9 = null;
  Oc = f.battleover || null;
  if (m && m.resetAutoplay) {
    guard("resetAutoplay", "host", () => m.resetAutoplay());
  }
  emit("timeJump", O);
}
a(timeJumped, "timeJumped");
function note(O, c) {
  if (O === "godmode" && c) {
    assist("god mode");
  }
  if (O === "autoplay" && c) {
    assist("autoplay");
  }
  if (O === "debugEdit" || O === "kill") {
    assist(O === "kill" ? "kill party" : "debug menu");
  }
  emit("note", {
    kind: O,
    data: c,
    frame: I.frame
  });
}
a(note, "note");
const Ou = {
  time: "TIME",
  practice: "PRACTICE",
  view: "OVERLAYS",
  capture: "CAPTURE",
  access: "ACCESS",
  nav: "NAVIGATE",
  debug: "DEBUG"
};
var Og = ["time", "practice", "view", "capture", "access", "nav", "debug"];
var Ok = Ou;
var OI = new Map();
var OC = 0;
var Ox = new Set(["hub:planner", "perf", "inspector", "eggs.debug", "eggs.debugmenu"]);
var Oi = ["overlays.inspector", "eggs:debug"];
var OG = null;
function urlDevFlag() {
  if (OG !== null) {
    return OG;
  }
  try {
    let jr = typeof location !== "undefined" ? location : null;
    OG = !!jr && (/[?&]dev(=1|=true)?(&|$)/.test(String(jr.search || "")) || /^#(.*&)?dev(=1)?(&|$)/.test(String(jr.hash || "")));
  } catch {
    OG = false;
  }
  return OG;
}
a(urlDevFlag, "urlDevFlag");
function devMode() {
  if (urlDevFlag()) {
    return true;
  }
  let jB = m && m.cfg;
  if (jB) {
    return jB.devmode === true;
  }
  try {
    let jr = JSON.parse(localStorage.getItem("dr-sim-cfg") || "null");
    return !!jr && typeof jr == "object" && jr.devmode === true;
  } catch {
    return false;
  }
}
a(devMode, "devMode");
function devHidden(O) {
  if (!O) {
    return false;
  }
  let jr = OI.get(O);
  if (!Ox.has(O) && (!jr || jr.dev !== true) && (!co.get(O) || co.get(O).dev !== true)) {
    return false;
  } else {
    return !devMode();
  }
}
a(devHidden, "devHidden");
var isDevOnly = a(O => Ox.has(O) || !!OI.get(O) && OI.get(O).dev === true, "isDevOnly");
function applyDevMode() {
  if (devMode()) {
    return;
  }
  let jz = m && m.cfg;
  if (jz && jz.hitboxes) {
    jz.hitboxes = false;
  }
  let jr = use("overlays");
  if (jr && jr.isOn && jr.set) {
    guard("devmode", "overlays", () => {
      if (jr.isOn("perf")) {
        jr.set("perf", false);
      }
    });
  }
  for (let jH of Oi) {
    if (modalOpen(jH)) {
      closeModal(jH);
    }
  }
}
a(applyDevMode, "applyDevMode");
onInstall(() => applyDevMode(), "devmode");
function registerTool(O) {
  if (!O || !O.id || !O.name || !O.group) {
    report(O && O.id || "?", "registerTool", new Error("a tool needs id, name and group"));
    return null;
  }
  if (OI.has(O.id)) {
    report(O.id, "registerTool", new Error("tool id already registered"));
    return null;
  }
  if (!Og.includes(O.group)) {
    report(O.id, "registerTool", new Error("unknown group " + O.group));
    return null;
  }
  const jU = {
    desc: "",
    icon: null,
    key: null,
    states: ["battle"],
    seq: OC++,
    ...O
  };
  let jB = jU;
  if (iconFor(jB.id)) {
    jB.icon = iconFor(jB.id);
  }
  OI.set(jB.id, jB);
  let jK = jB.onKey || jB.onUse;
  if (jB.key && jK) {
    jB.binding = registerKey({
      id: "tool:" + jB.id,
      combo: jB.key,
      label: jB.name,
      states: jB.keyStates || jB.states,
      hold: !!jB.hold,
      repeat: !!jB.repeat,
      yieldMsg: jB.yieldMsg,
      owner: jB.id,
      onDown: (Y0, Y1) => jK(Y0, Y1),
      onUp: jB.onKeyUp ? (Y0, Y1) => jB.onKeyUp(Y0, Y1) : null
    });
  }
  if (jB.step) {
    O1("frameAfter", Y0 => jB.step(Y0), {
      owner: jB.id
    });
  }
  if (jB.drawWorld) {
    O1("presentWorld", (Y0, Y1) => jB.drawWorld(Y0, Y1), {
      owner: jB.id
    });
  }
  if (jB.drawOverlay) {
    O1("presentScreen", (Y0, Y1) => jB.drawOverlay(Y0, Y1), {
      owner: jB.id
    });
  }
  if (jB.drawMenu) {
    O1("menuDraw", (Y0, Y1) => jB.drawMenu(Y0, Y1), {
      owner: jB.id
    });
  }
  if (jB.palette !== false) {
    registerCommand({
      id: "tool:" + jB.id,
      title: jB.name,
      group: Ok[jB.group],
      keywords: (jB.keywords || "") + " " + jB.desc,
      key: jB.key || jB.keyHint,
      states: jB.states,
      when: jB.available,
      run: Y0 => useTool(jB.id, Y0),
      owner: jB.id
    });
  }
  return jB;
}
a(registerTool, "registerTool");
function getTool(O) {
  return OI.get(O) || null;
}
a(getTool, "getTool");
var allTools = a(() => [...OI.values()], "allTools");
function listTools(O = ctx(), c = null) {
  return [...OI.values()].filter(jr => (!c || jr.group === c) && stateMatch(jr.states, O) && !devHidden(jr.id)).sort((jr, jH) => Og.indexOf(jr.group) - Og.indexOf(jH.group) || jr.seq - jH.seq);
}
a(listTools, "listTools");
function toolAvailable(O, c = ctx()) {
  return !O.available || !!guard("available", O.id, () => O.available(c));
}
a(toolAvailable, "toolAvailable");
function toolOn(O, c = ctx()) {
  return !!O.isOn && !!guard("isOn", O.id, () => O.isOn(c));
}
a(toolOn, "toolOn");
function useTool(O, c = ctx()) {
  let jB = OI.get(O);
  if (!jB || devHidden(jB.id)) {
    return false;
  }
  if (!toolAvailable(jB, c)) {
    toast(jB.name + " is not available here", {
      kind: "warn"
    });
    return false;
  }
  let jK = jB.onUse || jB.onKey;
  if (jK) {
    guard("onUse", jB.id, () => jK(c));
    return true;
  } else {
    return false;
  }
}
a(useTool, "useTool");
function statusTags(O = ctx()) {
  let jB = [];
  for (let jH of OI.values()) {
    if (jH.status && stateMatch(jH.states, O)) {
      let jK = guard("status", jH.id, () => jH.status(O));
      if (jK) {
        jB.push(jK);
      }
    }
  }
  return jB.join("  ");
}
a(statusTags, "statusTags");
var OD = ["Ctrl", "Alt", "Shift"];
var OV = {
  esc: "Escape",
  escape: "Escape",
  space: "Space",
  " ": "Space",
  plus: "Plus",
  tab: "Tab",
  enter: "Enter",
  return: "Enter",
  left: "ArrowLeft",
  right: "ArrowRight",
  up: "ArrowUp",
  down: "ArrowDown",
  backspace: "Backspace",
  home: "Home",
  end: "End",
  del: "Delete",
  delete: "Delete"
};
var isSymbol = a(O => O.length === 1 && !/[A-Za-z0-9]/.test(O), "isSymbol");
function normalizeCombo(O) {
  let jB = String(O || "").trim();
  if (!jB) {
    return "";
  }
  let jH = jB === "+" ? ["Plus"] : jB.split("+").filter((Y1, Y2, Y3) => Y1 !== "" || Y2 === Y3.length - 1);
  let jK = jH.pop() || "";
  let Y0 = new Set(jH.map(Y1 => {
    let Y2 = Y1.toLowerCase();
    if (Y2 === "ctrl" || Y2 === "control" || Y2 === "cmd" || Y2 === "meta") {
      return "Ctrl";
    } else if (Y2 === "alt" || Y2 === "option") {
      return "Alt";
    } else if (Y2 === "shift") {
      return "Shift";
    } else {
      return Y1;
    }
  }));
  jK = OV[jK.toLowerCase()] || (jK.length === 1 || /^f\d{1,2}$/i.test(jK) ? jK.toUpperCase() : jK);
  if (jK === "+") {
    jK = "Plus";
  }
  if (isSymbol(jK)) {
    Y0.delete("Shift");
  }
  return [...OD.filter(Y1 => Y0.has(Y1)), jK].join("+");
}
a(normalizeCombo, "normalizeCombo");
function comboFromEvent(O) {
  let jr;
  let jH = O.code || "";
  if (/^Key[A-Z]$/.test(jH)) {
    jr = /^[a-z]$/i.test(O.key) ? O.key.toUpperCase() : jH.slice(3);
  } else if (/^Digit[0-9]$/.test(jH)) {
    jr = jH.slice(5);
  } else if (O.key === " ") {
    jr = "Space";
  } else if (O.key === "+") {
    jr = "Plus";
  } else {
    jr = O.key.length === 1 ? O.key.toUpperCase() : O.key;
  }
  if (jr === "Control" || jr === "Shift" || jr === "Alt" || jr === "Meta") {
    return jr;
  }
  let jK = [];
  if (O.ctrlKey || O.metaKey) {
    jK.push("Ctrl");
  }
  if (O.altKey) {
    jK.push("Alt");
  }
  if (O.shiftKey && !isSymbol(jr)) {
    jK.push("Shift");
  }
  return [...jK, jr].join("+");
}
a(comboFromEvent, "comboFromEvent");
var baseOf = a(O => {
  let jH = O.split("+");
  return jH[jH.length - 1] || O;
}, "baseOf");
var Oq = {
  ArrowLeft: "LEFT",
  ArrowRight: "RIGHT",
  ArrowUp: "UP",
  ArrowDown: "DOWN",
  Escape: "ESC",
  Space: "SPACE",
  Plus: "+",
  Backspace: "BKSP",
  Enter: "ENTER",
  Delete: "DEL"
};
var Oe = null;
function comboLabel(O) {
  if (!O) {
    return "";
  }
  if (Oe) {
    let jr = guard("glyph label", "gamepad", () => Oe.label(O));
    if (jr) {
      return jr;
    }
  }
  return String(O).split("+").map(Y1 => Oq[Y1] || Y1.toUpperCase()).join("+").replace(/\+\+$/, "+PLUS");
}
a(comboLabel, "comboLabel");
const Oo = {
  combo: "["
};
Oo.states = ["menu"];
Oo.what = "previous fight tab";
Oo.owner = "main.js";
const Oz = {
  combo: "]"
};
Oz.states = ["menu"];
Oz.what = "next fight tab";
Oz.owner = "main.js";
const OU = {
  combo: "L"
};
OU.states = ["menu"];
OU.what = "Attack Lab on the highlighted fight";
OU.owner = "main.js";
const OB = {
  combo: "F2"
};
OB.states = ["menu"];
OB.what = "DOOM";
OB.owner = "main.js";
const Or = {
  combo: "/"
};
Or.states = ["menu"];
Or.what = "search the encounter list";
Or.owner = "gm.js/ui.js";
const c0 = {
  combo: "F1"
};
c0.states = ["battle"];
c0.what = "battle debug menu";
c0.owner = "main.js";
const c1 = {
  combo: "P"
};
c1.states = ["battle"];
c1.what = "autoplay on/off";
c1.owner = "main.js";
const c2 = {
  combo: "I"
};
c2.states = ["battle"];
c2.what = "god mode";
c2.owner = "main.js";
const c3 = {
  combo: "K"
};
c3.states = ["battle"];
c3.what = "kill the party";
c3.owner = "main.js";
const c4 = {
  combo: "N"
};
c4.states = ["battle"];
c4.what = "autoplay: distilled net";
c4.owner = "main.js";
const c5 = {
  combo: "B"
};
c5.states = ["battle"];
c5.what = "autoplay: beam / planner";
c5.owner = "main.js";
const c6 = {
  combo: "["
};
c6.states = ["battle"];
c6.what = "beam width -2 (lyric offset in a lyrics fight)";
c6.owner = "main.js";
const c7 = {
  combo: "]"
};
c7.states = ["battle"];
c7.what = "beam width +2 (lyric offset in a lyrics fight)";
c7.owner = "main.js";
const c8 = {
  combo: "-"
};
c8.states = ["battle"];
c8.what = "game speed down (lyric rate in a lyrics fight)";
c8.owner = "main.js";
const c9 = {
  combo: "="
};
c9.states = ["battle"];
c9.what = "game speed up (lyric rate in a lyrics fight)";
c9.owner = "main.js";
const cc = {
  combo: "`"
};
cc.states = ["battle"];
cc.what = "pause / resume";
cc.owner = "main.js";
const cW = {
  combo: "."
};
cW.states = ["battle"];
cW.what = "step one frame";
cW.owner = "main.js";
const cw = {
  combo: ">"
};
cw.states = ["battle"];
cw.what = "step ten frames";
cw.owner = "main.js";
const cs = {
  combo: "S"
};
cs.states = ["train"];
cs.what = "trainer: print policy";
cs.owner = "main.js";
const cM = {
  combo: "-"
};
cM.states = ["train"];
cM.what = "trainer rate down";
cM.owner = "main.js";
const cu = {
  combo: "="
};
cu.states = ["train"];
cu.what = "trainer rate up";
cu.owner = "main.js";
var cg = [Oo, Oz, OU, OB, Or, {
  combo: "Backspace",
  states: ["menu"],
  what: "delete a search character",
  owner: "gm.js/ui.js"
}, {
  combo: "Escape",
  states: ["battle"],
  what: "leave the fight",
  owner: "main.js"
}, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, {
  combo: "Plus",
  states: ["battle"],
  what: "game speed up",
  owner: "main.js"
}, cc, cW, cw, {
  combo: "\\",
  states: ["battle"],
  what: "lyrics: load the measured tune",
  owner: "main.js",
  soft: true,
  active: a(O => !!O.fight && !!O.fight.lyrics, "active")
}, ..."0123456789".split("").map(O => ({
  combo: O,
  states: ["battle"],
  what: "game debug: next attack " + O,
  owner: "GML",
  soft: true,
  active: () => f.debug === 1
})), {
  combo: "Shift+Escape",
  states: ["doom"],
  what: "leave DOOM (every other key belongs to DOOM)",
  owner: "main.js"
}, {
  combo: "Escape",
  states: ["liquid", "cloth", "train", "lab"],
  what: "leave",
  owner: "main.js"
}, {
  combo: "Escape",
  states: ["blackjack"],
  what: "blackjack: pause (speed, how to play, leave table)",
  owner: "blackjack_table.js"
}, {
  combo: "Enter",
  states: ["blackjack"],
  what: "blackjack: confirm",
  owner: "blackjack_table.js"
}, {
  combo: "Backspace",
  states: ["blackjack"],
  what: "blackjack: back",
  owner: "blackjack_table.js"
}, {
  combo: "Space",
  states: ["train"],
  what: "trainer pause",
  owner: "main.js"
}, cs, cM, cu, ...["F5", "F11", "F12", "Ctrl+R", "Ctrl+W", "Ctrl+T", "Ctrl+N", "Ctrl+Tab", "Ctrl+Shift+T", "Ctrl+Shift+I", "Ctrl+L", "Alt+ArrowLeft", "Alt+ArrowRight", ..."123456789".split("").map(O => "Ctrl+" + O)].map(O => ({
  combo: O,
  states: ["any"],
  what: "browser",
  owner: "browser"
}))].map(O => ({
  ...O,
  combo: normalizeCombo(O.combo)
}));
var ck = ["left", "right", "up", "down", "b1", "b2", "b3"];
function gameButtonOf(O) {
  let jU = baseOf(O);
  for (let jH of ck) {
    for (let jK of u(jH)) {
      if (normalizeCombo(jK.length === 1 ? jK : jK === " " ? "Space" : jK) === jU || jK.length === 1 && jK.toUpperCase() === jU) {
        return jH;
      }
    }
  }
  return null;
}
a(gameButtonOf, "gameButtonOf");
var isTypedInMenu = a(O => /^[A-Z0-9]$/.test(O) || O === "Space", "isTypedInMenu");
var overlap = a((O, c) => O.includes("any") || c.includes("any") || O.some(jz => c.includes(jz)), "overlap");
var ci = [];
var cG = [];
var ch = new Map();
function registerKey(O) {
  let jU = normalizeCombo(O && O.combo);
  let jB = {
    states: ["battle"],
    owner: O && O.owner || "?",
    ...O,
    combo: jU
  };
  if (!jB.id || !jU || typeof jB.onDown != "function") {
    cG.push({
      id: jB.id,
      combo: jU,
      reason: "needs id, combo and onDown"
    });
    return null;
  }
  let jr = Y1 => {
    const Y4 = {
      id: jB.id,
      combo: jU
    };
    Y4.owner = jB.owner;
    Y4.reason = Y1;
    cG.push(Y4);
    try {
      {
        console.warn("[apphooks] key " + jU + " for " + jB.id + " refused: " + Y1);
      }
    } catch {}
    return null;
  };
  for (let Y1 of cg) {
    if (!(Y1.combo !== jU) && !!overlap(Y1.states, jB.states) && !Y1.moving) {
      {
        if (Y1.soft) {
          cG.push({
            id: jB.id,
            combo: jU,
            owner: jB.owner,
            reason: "shares " + jU + " with " + Y1.owner + " (" + Y1.what + "); yields while that is active",
            soft: true
          });
          continue;
        }
        if (!jB.override) {
          return jr("taken by " + Y1.owner + ": " + Y1.what);
        }
      }
    }
  }
  if (jB.states.some(Y9 => Y9 === "menu" || Y9 === "any") && isTypedInMenu(jU) && !jB.override) {
    return jr("bare " + jU + " is typed text in the menu (type-to-jump / search)");
  }
  let Y0 = gameButtonOf(jU);
  if (Y0 && !jB.gameKeyOk && !jB.override) {
    return jr("is a game button (" + Y0 + ")");
  }
  for (let Y9 of ci) {
    if (Y9.combo === jU && overlap(Y9.states, jB.states) && !Y9.when && !jB.when) {
      {
        if (!jB.override) {
          return jr("already bound to " + Y9.id);
        }
        cG.push({
          id: Y9.id,
          combo: jU,
          owner: Y9.owner,
          reason: "shadowed by " + jB.id,
          soft: true
        });
      }
    }
  }
  ci.unshift(jB);
  return jB;
}
a(registerKey, "registerKey");
function unregisterKey(O) {
  let jr = ci.findIndex(jK => jK.id === O);
  if (jr >= 0) {
    ci.splice(jr, 1);
  }
  ch.delete(O);
}
a(unregisterKey, "unregisterKey");
var keyConflicts = a(() => cG.slice(), "keyConflicts");
var keyBindings = a(() => ci.slice(), "keyBindings");
function keyTable(O = ctx()) {
  let jU = [];
  for (let jH of cg) {
    if (jH.owner !== "browser" && stateMatch(jH.states, O) && (!jH.soft || !jH.active || !!guard("active", jH.owner, () => jH.active(O)))) {
      jU.push({
        combo: jH.combo,
        label: jH.what,
        owner: jH.owner,
        soft: !!jH.soft,
        reserved: true
      });
    }
  }
  for (let jK of ci) {
    if (stateMatch(jK.states, O) && !devHidden(jK.owner)) {
      jU.push({
        combo: jK.combo,
        label: jK.label || jK.id,
        owner: jK.owner,
        hold: !!jK.hold
      });
    }
  }
  return jU;
}
a(keyTable, "keyTable");
var cA = new Set();
function handleKeyDown(O) {
  if (!P) {
    return false;
  }
  let jr = ctx();
  if (jr.state === "intro") {
    return false;
  }
  let jH = comboFromEvent(O);
  let jK = topModal();
  if (jK && jK.onKey) {
    let Y0 = guard("modal onKey", jK.owner || jK.id, () => jK.onKey(O, jH, jr));
    let Y1 = jK.text && O.key && O.key.length === 1 && !O.ctrlKey && !O.metaKey && !O.altKey && O.target && (O.target.tagName === "INPUT" || O.target.tagName === "TEXTAREA");
    if (Y0) {
      if (!Y1) {
        O.preventDefault();
      }
      return true;
    }
  }
  for (let Y5 of ci) {
    if (Y5.combo !== jH || !stateMatch(Y5.states, jr) || devHidden(Y5.owner) || M.textFocus && !Y5.inText || jK && !Y5.inModal && (jK.pauses !== false || !Y5.states.includes("battle")) || jr.state === "doom" && !Y5.states.includes("doom") || Y5.when && !guard("when", Y5.owner, () => Y5.when(jr))) {
      continue;
    }
    if (cg.find(Y7 => Y7.soft && Y7.combo === jH && stateMatch(Y7.states, jr) && Y7.active && Y7.active(jr))) {
      let Y7 = Y5.id + "|" + O8.id;
      if (Y5.yieldMsg && !cA.has(Y7)) {
        cA.add(Y7);
        toast(Y5.yieldMsg, {
          kind: "warn"
        });
      }
      continue;
    }
    if (!Y5.gameKeyOk && gameButtonOf(jH)) {
      let Y8 = "gb|" + Y5.id;
      if (!cA.has(Y8)) {
        cA.add(Y8);
        toast(comboLabel(jH) + " is a game button now - use the Toolbox for " + (Y5.label || Y5.id), {
          kind: "warn"
        });
      }
      continue;
    }
    O.preventDefault();
    if (O.repeat && !Y5.repeat) {
      return true;
    }
    if (Y5.hold) {
      if (ch.has(Y5.id)) {
        return true;
      }
      ch.set(Y5.id, Y5);
    }
    guard("key " + jH, Y5.owner, () => Y5.onDown(jr, O));
    return true;
  }
  return false;
}
a(handleKeyDown, "handleKeyDown");
function handleKeyUp(O) {
  if (!P || !ch.size) {
    return false;
  }
  let jU = baseOf(comboFromEvent(O));
  let jB = false;
  for (let [jK, Y0] of [...ch]) {
    if (baseOf(Y0.combo) === jU) {
      ch.delete(jK);
      jB = true;
      if (Y0.onUp) {
        guard("keyup " + Y0.combo, Y0.owner, () => Y0.onUp(ctx(), O));
      }
    }
  }
  return jB;
}
a(handleKeyUp, "handleKeyUp");
function releaseHolds() {
  for (let [jB, jr] of [...ch]) {
    ch.delete(jB);
    if (jr.onUp) {
      guard("release " + jr.combo, jr.owner, () => jr.onUp(ctx(), null));
    }
  }
}
a(releaseHolds, "releaseHolds");
var isHeld = a(O => ch.has(O), "isHeld");
var cm = [];
function openModal(O) {
  if (!O || !O.id || typeof O.draw != "function") {
    report(O && O.id || "?", "openModal", new Error("a modal needs id and draw"));
    return null;
  }
  let jU = cm.findIndex(Y0 => Y0.id === O.id);
  if (jU >= 0) {
    cm.splice(jU, 1);
  }
  const jr = {
    pauses: true,
    ...O
  };
  jr.prevText = M.textFocus;
  let jK = jr;
  cm.push(jK);
  for (let Y0 of ck) {
    if (M.held[Y0]) {
      g(Y0, false);
    }
  }
  M.textFocus = !!jK.text;
  if (jK.onOpen) {
    guard("onOpen", jK.owner || jK.id, () => jK.onOpen(ctx()));
  }
  return jK;
}
a(openModal, "openModal");
function closeModal(O) {
  let jU = O ? cm.findIndex(Y0 => Y0.id === O) : cm.length - 1;
  if (jU < 0) {
    return false;
  }
  let [jB] = cm.splice(jU, 1);
  cD = typeof performance !== "undefined" ? performance.now() : Date.now();
  let jK = topModal();
  M.textFocus = jK ? !!jK.text : !!jB.prevText;
  if (jB.onClose) {
    guard("onClose", jB.owner || jB.id, () => jB.onClose(ctx()));
  }
  return true;
}
a(closeModal, "closeModal");
var cD = -1000000000;
function touchUI() {
  let jr = m && m.cfg && m.cfg.touchpad || "AUTO";
  if (jr === "ON") {
    return true;
  }
  if (jr === "OFF") {
    return false;
  }
  try {
    return typeof window !== "undefined" && !!window.matchMedia && !!window.matchMedia("(pointer: coarse)").matches;
  } catch {
    return false;
  }
}
a(touchUI, "touchUI");
var msSinceModalClose = a(() => (typeof performance !== "undefined" ? performance.now() : Date.now()) - cD, "msSinceModalClose");
var topModal = a(() => cm[cm.length - 1] || null, "topModal");
var modalOpen = a(O => O ? cm.some(c => c.id === O) : cm.length > 0, "modalOpen");
var modalPauses = a(() => cm.some(O => O.pauses !== false), "modalPauses");
function stepModal() {
  let jz = topModal();
  if (jz && jz.step) {
    guard("modal step", jz.owner || jz.id, () => jz.step(ctx()));
  }
}
a(stepModal, "stepModal");
var cq = [];
function onPointer(O, c = {}) {
  const jU = {
    fn: O
  };
  jU.owner = c.owner || "?";
  jU.priority = c.priority || 0;
  jU.states = c.states || ["battle"];
  let jK = jU;
  cq.push(jK);
  cq.sort((Y0, Y1) => Y1.priority - Y0.priority);
  return () => {
    let Y4 = cq.indexOf(jK);
    if (Y4 >= 0) {
      cq.splice(Y4, 1);
    }
  };
}
a(onPointer, "onPointer");
function dispatchPointer(O) {
  if (!P) {
    return false;
  }
  let jB = ctx();
  let jr = topModal();
  if (jr) {
    return !!jr.onPointer && !!guard("modal pointer", jr.owner || jr.id, () => jr.onPointer(O, jB));
  }
  for (let jK of cq) {
    if (stateMatch(jK.states, jB) && guard("pointer", jK.owner, () => jK.fn(O, jB))) {
      return true;
    }
  }
  return false;
}
a(dispatchPointer, "dispatchPointer");
var co = new Map();
function registerCommand(O) {
  if (!O || !O.id || !O.title || typeof O.run != "function") {
    report(O && O.id || "?", "registerCommand", new Error("a command needs id, title and run"));
    return null;
  }
  const jU = {
    group: "COMMAND",
    keywords: "",
    states: ["any"],
    ...O
  };
  let jB = jU;
  co.set(jB.id, jB);
  return jB;
}
a(registerCommand, "registerCommand");
function listCommands(O = ctx()) {
  return [...co.values()].filter(jB => stateMatch(jB.states, O) && !devHidden(jB.owner) && !devHidden(jB.id) && (!jB.when || guard("when", jB.owner, () => jB.when(O))));
}
a(listCommands, "listCommands");
function runCommand(O, c = ctx()) {
  let jr = co.get(O);
  if (!jr || devHidden(jr.owner) || devHidden(jr.id)) {
    return false;
  } else {
    guard("command " + O, jr.owner, () => jr.run(c));
    return true;
  }
}
a(runCommand, "runCommand");
var cr = [];
function registerSetting(O) {
  if (!O || !O.id || !O.label || typeof O.get != "function" || typeof O.set != "function") {
    report(O && O.id || "?", "registerSetting", new Error("a setting needs id, label, get and set"));
    return null;
  }
  const jU = {
    section: "ACCESS",
    values: [false, true],
    ...O
  };
  let jB = jU;
  cr.push(jB);
  registerCommand({
    id: "setting:" + jB.id,
    title: jB.label,
    group: "SETTING",
    keywords: jB.section + " " + (jB.desc || ""),
    states: ["any"],
    owner: jB.owner,
    run: () => {
      cycleSetting(jB, 1);
      toast(jB.label + ": " + showValue(jB.get()));
    }
  });
  return jB;
}
a(registerSetting, "registerSetting");
var showValue = a(O => O === true ? "ON" : O === false ? "OFF" : String(O), "showValue");
function cycleSetting(O, c) {
  let jr = O.values;
  let jH = O.get();
  let jK = Math.max(0, jr.findIndex(Y1 => Y1 === jH));
  guard("setting " + O.id, O.owner || O.id, () => O.set(jr[(jK + (c || 1) + jr.length) % jr.length]));
  if (m && m.saveCfg) {
    m.saveCfg();
  }
  emit("cfgChange", {
    id: O.id
  });
}
a(cycleSetting, "cycleSetting");
function settingRows() {
  let jr = [];
  let jH = null;
  for (let jK of cr) {
    if (jK.section !== jH) {
      jH = jK.section;
      jr.push(["-- " + jH, null, null]);
    }
    jr.push([jK.label, () => showValue(jK.get()), Y0 => cycleSetting(jK, Y0)]);
  }
  return jr;
}
a(settingRows, "settingRows");
var listSettings = a(() => cr.slice(), "listSettings");
var W3 = new Map();
function provide(O, c) {
  W3.set(O, c);
}
a(provide, "provide");
function use(O) {
  return W3.get(O) || null;
}
a(use, "use");
function pref(O, c, jz) {
  let jK = m && m.cfg;
  if (!jK) {
    return jz;
  }
  let Y0 = jK.app && jK.app[O];
  if (Y0 && Y0[c] !== undefined) {
    return Y0[c];
  } else {
    return jz;
  }
}
a(pref, "pref");
function setPref(O, c, jz) {
  let jr = m && m.cfg;
  if (jr) {
    if (!jr.app || typeof jr.app != "object") {
      jr.app = {};
    }
    if (!jr.app[O] || typeof jr.app[O] != "object") {
      jr.app[O] = {};
    }
    jr.app[O][c] = jz;
    if (m.saveCfg) {
      m.saveCfg();
    }
    emit("cfgChange", {
      ns: O,
      key: c,
      value: jz
    });
  }
}
a(setPref, "setPref");
var W8 = new Set();
function store(O) {
  let jB = "dr-sim-" + O;
  return {
    get(jH = null) {
      try {
        let Y4 = localStorage.getItem(jB);
        if (Y4 == null) {
          return jH;
        } else {
          return JSON.parse(Y4, (Y5, Y6) => Y5 === "__proto__" || Y5 === "constructor" || Y5 === "prototype" ? undefined : Y6);
        }
      } catch {
        return jH;
      }
    },
    set(jH) {
      try {
        localStorage.setItem(jB, JSON.stringify(jH));
        return true;
      } catch {
        if (!W8.has(O)) {
          W8.add(O);
          toast("Browser storage is full - " + O + " was not saved", {
            kind: "error",
            ms: 6000
          });
        }
        return false;
      }
    },
    remove() {
      try {
        localStorage.removeItem(jB);
      } catch {}
    },
    key: jB
  };
}
a(store, "store");
function download(O, c, jz = "application/octet-stream") {
  try {
    const jK = {
      type: jz
    };
    let Y0 = c instanceof Blob ? c : new Blob([typeof c == "string" ? c : JSON.stringify(c)], jK);
    let Y1 = URL.createObjectURL(Y0);
    let Y2 = document.createElement("a");
    Y2.href = Y1;
    Y2.download = O;
    document.body.appendChild(Y2);
    Y2.click();
    Y2.remove();
    setTimeout(() => URL.revokeObjectURL(Y1), 4000);
    return true;
  } catch (Y3) {
    toast("Could not save " + O + ": " + Y3.message, {
      kind: "error"
    });
    return false;
  }
}
a(download, "download");
function pickFile(O = "") {
  return new Promise(jr => {
    try {
      let Y2 = document.createElement("input");
      Y2.type = "file";
      if (O) {
        Y2.accept = O;
      }
      Y2.style.display = "none";
      document.body.appendChild(Y2);
      Y2.addEventListener("change", () => {
        let Y8 = Y2.files && Y2.files[0];
        Y2.remove();
        jr(Y8 || null);
      });
      Y2.addEventListener("cancel", () => {
        Y2.remove();
        jr(null);
      });
      Y2.click();
    } catch {
      jr(null);
    }
  });
}
a(pickFile, "pickFile");
var WW = [];
function toast(O, c = {}) {
  let jU = typeof performance < "u" ? performance.now() : Date.now();
  let jB = c.kind || "info";
  if (c.ms != null && jB !== "error" && c.progress == null) {
    {
      let Y1 = Math.max(4000, 1500 + 45 * String(O).length);
      if (c.ms > Y1) {
        c = {
          ...c,
          ms: Y1
        };
      }
    }
  }
  let jK = c.id ? WW.find(Y2 => Y2.id === c.id) : null;
  if (jK) {
    Object.assign(jK, {
      text: String(O),
      kind: jB,
      born: jU,
      ms: c.ms ?? jK.ms,
      progress: c.progress ?? jK.progress,
      key: c.key ?? jK.key
    });
  } else {
    jK = {
      text: String(O),
      kind: jB,
      key: c.key || "",
      born: jU,
      ms: c.ms ?? (jB === "error" ? 6000 : 2200),
      id: c.id || null,
      progress: c.progress ?? null
    };
    WW.push(jK);
    while (WW.length > 3) {
      WW.shift();
    }
  }
  return {
    update(Y2, Y3) {
      if (Y2 != null) {
        jK.text = String(Y2);
      }
      if (Y3 != null) {
        jK.progress = Y3;
      }
      jK.born = typeof performance < "u" ? performance.now() : Date.now();
    },
    close() {
      let Y4 = WW.indexOf(jK);
      if (Y4 >= 0) {
        WW.splice(Y4, 1);
      }
    }
  };
}
a(toast, "toast");
var liveToasts = a(() => WW.slice(), "liveToasts");
var Wh = [{
  id: "solo",
  text: "Made and maintained by one person. Things will break sometimes - please go easy on it."
}, {
  id: "fanmade",
  text: "Fan-made. Not made by, or affiliated with, Toby Fox."
}, {
  id: "phone",
  text: "Made for keyboard on a computer - the phone controls work but are not the intended way to play."
}, {
  id: "gamespeed",
  text: "Game speed above 1x can throw off music sync, rhythm parts, some scripted scenes and autoplay. 1x is the real game.",
  toast: "Above 1x, music sync and rhythm parts can differ. 1x is the real game."
}, {
  id: "autoplay",
  text: "Autoplay is not perfect: it can still get hit in some bosses (Spamton NEO, Queen, the Knight's split slash) and chapter 4/5 fights, it can stall in a few scenes with dialogue on, and it is heavy on slower PCs. Runs count as assisted.",
  toast: "Autoplay is not perfect - it can still get hit. Runs count as assisted."
}, {
  id: "nodialog",
  text: "Skip dialogue fast-forwards the text, so some story beats go by unseen."
}, {
  id: "assist",
  text: "The SANDBOX switches (enemy HP, turn length ...), god mode, rewind, save states and practice change the real game's balance. Easier runs count as assisted.",
  toast: "Sandbox tools change the real game's balance - easier runs count as assisted."
}, {
  id: "danger",
  text: "The danger view's fast estimate moves every bullet in a straight line - curves and homing are not predicted.",
  toast: "Fast estimate: straight lines only. Pause for the exact plan."
}, {
  id: "ch5",
  text: "Chapter 5 is still being ported - some fights may be incomplete."
}, {
  id: "heavy",
  text: "Some attacks are very heavy to draw (the Knight's final attack, Titan's big laser) and can lag on phones and older PCs. Closing other tabs helps."
}, {
  id: "browser",
  text: "Needs a recent browser: Chrome or Edge 93+, Firefox 91+, Safari 15+ (iPhone: iOS 15+)."
}, {
  id: "party",
  text: "Boss fights are made for their normal party. A custom party can confuse a few bosses that wait for Susie or Ralsei."
}, {
  id: "editor",
  text: "Custom encounters: every enemy attacks each turn unless the editor's \"Attackers per turn\" sets a limit. A boss attacks alone, and past 400 bullets on screen the oldest go."
}, {
  id: "offfight",
  text: "Scenes outside battle (climbs, chases, cutscenes between phases) are simplified in places."
}, {
  id: "canon",
  text: "Canon party stats follow the main path (no kills, free pickups); other routes can differ."
}, {
  id: "replay",
  text: "A replay or save state from another build, or of a fight that keeps state outside the snapshot, can drift.",
  toast: "A replay from another build, or of some fights, can drift."
}];
var limitById = a(O => Wh.find(c => c.id === O) || null, "limitById");
var WJ = new Set();
var limitText = a(O => {
  let jU = limitById(O);
  if (jU) {
    return jU.text;
  } else {
    return "";
  }
}, "limitText");
var limitShort = a(O => {
  let jU = limitById(O);
  if (jU) {
    return jU.toast || jU.text;
  } else {
    return "";
  }
}, "limitShort");
function limitSeen(O) {
  WJ.add(O);
  if (m && m.cfg) {
    if (!pref("limits", O, false)) {
      setPref("limits", O, true);
    }
  } else {
    onInstall(() => {
      if (!pref("limits", O, false)) {
        setPref("limits", O, true);
      }
    }, "limits");
  }
}
a(limitSeen, "limitSeen");
var limitWasSeen = a(O => WJ.has(O) || !!pref("limits", O, false), "limitWasSeen");
function limitNote(O, c = false) {
  let jH = limitById(O);
  if (!jH || !c && limitWasSeen(O)) {
    return false;
  }
  limitSeen(O);
  let jK = "* " + (jH.toast || jH.text);
  toast(jK, {
    id: "limit:" + O,
    ms: 1500 + jK.length * 45
  });
  return true;
}
a(limitNote, "limitNote");
var WL = ["autoplay", "gamespeed", "nodialog", "assist", "danger"];
function watchLimits(O) {
  if (!m || !m.cfg || WL.every(limitWasSeen) || O.state === "battle" && (f.mnfight === 2 || O.mode === "replay")) {
    return;
  }
  let jr = m.cfg;
  let jH = getTool("danger");
  let jK = !!f.godmode || !!jr.invuln || !!jr.nomiss || !!jr.freetp || !!jr.slowbullets || (jr.hpscale ?? 1) !== 1 || (jr.turnscale ?? 1) !== 1 || !![...O8.assisted].some(Y1 => Y1 !== "autoplay");
  let Y0 = {
    autoplay: !!f.autoplay,
    gamespeed: (jr.gamespeed || 1) > 1,
    nodialog: !!jr.nodialog,
    assist: jK,
    danger: !!jH && !!toolOn(jH, O)
  };
  for (let Y1 of WL) {
    if (Y0[Y1] && limitNote(Y1)) {
      return;
    }
  }
}
a(watchLimits, "watchLimits");
O1("menuDraw", (O, c) => watchLimits(c), {
  owner: "limits"
});
O1("frameBefore", O => watchLimits(O), {
  owner: "limits"
});
O1("fightStart", (O, c) => {
  let jH = c && c.fight;
  if (jH && jH.chapter === 5 && jH.game !== "undertale") {
    limitNote("ch5");
  }
}, {
  owner: "limits"
});
const Wn = {
  text: k.white,
  dim: k.gray,
  faint: k.dkgray,
  select: k.yellow,
  key: k.yellow,
  ok: "#7ad17a",
  gold: "#e0c060",
  warn: k.orange,
  error: "#ff4040",
  hit: k.red,
  soul: k.red,
  panelFill: "rgba(0,0,0,0.78)",
  panelEdge: k.dkgray,
  hover: "#241a33",
  solid: k.black,
  frame: "#332033",
  heat: ["rgba(255,64,64,0.10)", "rgba(255,64,64,0.22)", "rgba(255,64,64,0.38)", "rgba(255,32,32,0.55)"],
  path: "rgba(0,255,0,0.9)",
  pathFade: "rgba(0,255,0,0.35)"
};
const WD = {
  info: k.gray,
  ok: "#7ad17a",
  warn: k.orange,
  error: "#ff4040"
};
var WV = Wn;
var Wt = WD;
function withChrome(O, c) {
  const jU = {
    font: O.font,
    color: O.color,
    alpha: O.alpha,
    halign: O.halign,
    valign: O.valign
  };
  let jK = jU;
  let Y0 = X;
  if (Y0 !== 1) {
    s(1);
  }
  if (O.ctx) {
    O.ctx.save();
  }
  try {
    O.draw_set_font("fnt_main");
    O.draw_set_alpha(1);
    O.draw_set_halign("left");
    return c();
  } finally {
    if (O.ctx) {
      O.ctx.restore();
    }
    if (Y0 !== 1) {
      s(Y0);
    }
    O.draw_set_font(jK.font);
    O.draw_set_color(jK.color);
    O.draw_set_alpha(jK.alpha);
    O.draw_set_halign(jK.halign);
    if (O.draw_set_valign) {
      O.draw_set_valign(jK.valign);
    }
  }
}
a(withChrome, "withChrome");
function panel(O, c, jz, jU, jB, jr = "", jH = WV.panelEdge) {
  let Y3 = O.ctx;
  Y3.fillStyle = WV.panelFill;
  Y3.fillRect(c, jz, jU - c, jB - jz);
  Y3.strokeStyle = jH;
  Y3.lineWidth = 1;
  Y3.strokeRect(c + 0.5, jz + 0.5, jU - c - 1, jB - jz - 1);
  if (jr) {
    O.draw_text(c + 6, jz + 3, jr, WV.dim);
  }
}
a(panel, "panel");
function frame(O, c, jz, jU, jB) {
  O.draw_set_color(k.black);
  O.draw_set_alpha(1);
  O.draw_rectangle(c + 10, jz + 10, jU - 10, jB - 10, false);
  if (m && m.darkbox) {
    m.darkbox(O, c, jz, jU, jB);
  } else {
    panel(O, c, jz, jU, jB, "", k.white);
  }
}
a(frame, "frame");
var isPunctChip = a(O => O.length === 1 && /[`,.<>\/\-=;'\[\]]/.test(O), "isPunctChip");
function setKeyGlyphs(O) {
  Oe = O && typeof O.label == "function" && typeof O.shape == "function" ? O : null;
}
a(setKeyGlyphs, "setKeyGlyphs");
var glyphShape = a(O => Oe && guard("glyph shape", "gamepad", () => Oe.shape(O)) || null, "glyphShape");
function keyWidth(O, c) {
  if (glyphShape(c)) {
    return 20;
  }
  let jH = comboLabel(c);
  if (jH) {
    if (isPunctChip(jH) && O.draw_text_transformed) {
      return 20;
    } else {
      return O.string_width(jH, "fnt_main") + 8;
    }
  } else {
    return 0;
  }
}
a(keyWidth, "keyWidth");
function drawKey(O, c, jz, jU, jB = WV.key) {
  let jK = glyphShape(jU);
  if (jK && O.ctx) {
    let Y6 = O.ctx;
    Y6.strokeStyle = WV.faint;
    Y6.lineWidth = 1;
    Y6.strokeRect(c + 0.5, jz + 0.5, 19, 17);
    guard("glyph draw", "gamepad", () => jK(Y6, c, jz, jB));
    return 20;
  }
  let Y2 = comboLabel(jU);
  if (!Y2) {
    return 0;
  }
  if (isPunctChip(Y2) && O.draw_text_transformed) {
    let Y9 = O.ctx;
    Y9.strokeStyle = WV.faint;
    Y9.lineWidth = 1;
    Y9.strokeRect(c + 0.5, jz + 0.5, 19, 17);
    let YO = /[\[\]<>\/]/.test(Y2);
    let Yc = YO ? 1 : 2;
    let YW = O.string_width(Y2, "fnt_main") * Yc;
    let Yw = YO ? 1 : Y2 === "`" ? 0 : Y2 === "," || Y2 === "." ? -12 : -6;
    Y9.save();
    Y9.beginPath();
    Y9.rect(c + 1, jz + 1, 18, 16);
    Y9.clip();
    O.draw_set_color(jB);
    if (Yc === 1) {
      O.draw_text(c + Math.round((20 - YW) / 2), jz + Yw, Y2, jB);
    } else {
      O.draw_text_transformed(c + Math.round((20 - YW) / 2), jz + Yw, Y2, 2, 2, 0);
    }
    Y9.restore();
    return 20;
  }
  let Y3 = O.string_width(Y2, "fnt_main") + 8;
  let Y4 = 18;
  let Y5 = O.ctx;
  Y5.strokeStyle = WV.faint;
  Y5.lineWidth = 1;
  Y5.strokeRect(c + 0.5, jz + 0.5, Y3 - 1, Y4 - 1);
  O.draw_text(c + 4, jz + 1, Y2, jB);
  return Y3;
}
a(drawKey, "drawKey");
var an = null;
function reserveTop(O, c) {
  an = {
    owner: O,
    bottom: c,
    t: typeof performance !== "undefined" ? performance.now() : Date.now()
  };
}
a(reserveTop, "reserveTop");
function reservedTop(O) {
  if (an && O - an.t < 250) {
    return an.bottom;
  } else {
    return 0;
  }
}
a(reservedTop, "reservedTop");
function drawToasts(O, c = {}) {
  if (!WW.length) {
    return;
  }
  let jr = typeof performance !== "undefined" ? performance.now() : Date.now();
  for (let Y3 = WW.length - 1; Y3 >= 0; Y3--) {
    if (WW[Y3].progress == null && jr - WW[Y3].born > WW[Y3].ms) {
      WW.splice(Y3, 1);
    }
  }
  {
    let Y4 = use("toastsDom");
    if (Y4 && Y4.on && Y4.on()) {
      return;
    }
  }
  let jK = c.right ?? 632;
  let Y0 = !cm.length && m && m.getState && m.getState() === "menu" && c.top == null && c.bottom == null;
  let Y1 = c.bottom ?? (cm.some(Y7 => Y7.pauses !== false && Y7.backdrop !== false) ? 476 : Y0 ? 404 : null);
  let Y2 = c.top ?? 8;
  if (Y1 == null && m && m.getState && m.getState() === "menu" && c.top == null) {
    Y2 = 36;
  }
  if (Y1 == null && jq) {
    Y2 = Math.max(Y2, (jq.sub ? 40 : 22) + 6);
  }
  if (Y1 == null) {
    let Y7 = reservedTop(jr);
    if (Y7) {
      Y2 = Math.max(Y2, Y7 + 6);
    }
  }
  withChrome(O, () => {
    let Yw = WW.map(YN => {
      {
        let Yf = YN.key ? keyWidth(O, YN.key) + 6 : 0;
        let YX = [];
        let Ys = "";
        for (let Yu of YN.text.split(/\s+/)) {
          {
            if (!Yu) {
              continue;
            }
            let Yg = Ys ? Ys + " " + Yu : Yu;
            let Yk = 300 - (YX.length ? 0 : Yf);
            if (!Ys || O.string_width(Yg, "fnt_main") <= Yk) {
              Ys = Yg;
            } else {
              YX.push(Ys);
              Ys = Yu;
            }
          }
        }
        if (Ys || !YX.length) {
          YX.push(Ys);
        }
        if (YX.length > 3) {
          {
            YX.length = 3;
            let YC = YX[2];
            while (YC.length > 4 && O.string_width(YC + "...", "fnt_main") > 300) {
              YC = YC.slice(0, -1);
            }
            YX[2] = YC + "...";
          }
        }
        let YM = Math.max(...YX.map((Yx, Yi) => O.string_width(Yx, "fnt_main") + (Yi ? 0 : Yf)));
        return {
          t: YN,
          kw: Yf,
          lines: YX,
          w: Math.min(316, YM + 16),
          h: 6 + YX.length * 16
        };
      }
    });
    if (Y1 != null) {
      let YN = 0;
      for (let Ya of Yw) {
        YN += Ya.h + 4;
      }
      Y2 = Y1 - YN + 4;
    }
    for (let Yj of Yw) {
      let {
        t: YY,
        kw: YQ,
        lines: Yf,
        w: YX,
        h: Ys
      } = Yj;
      let YM = jr - YY.born;
      let Yu = YY.ms - YM;
      let Yg = YY.progress != null ? 1 : Math.max(0, Math.min(1, Yu / 300));
      let Yk = jK - YX;
      O.ctx.globalAlpha = Yg;
      panel(O, Yk, Y2, jK, Y2 + Ys, "", Wt[YY.kind] || k.gray);
      for (let YI = 0; YI < Yf.length; YI++) {
        O.draw_text(Yk + 8, Y2 + 2 + YI * 16, Yf[YI], YY.kind === "error" ? WV.error : WV.text);
      }
      if (YY.key) {
        drawKey(O, jK - YQ + 2, Y2 + 2, YY.key);
      }
      if (YY.progress != null) {
        O.ctx.fillStyle = WV.select;
        O.ctx.fillRect(Yk + 1, Y2 + Ys - 3, Math.round((YX - 2) * Math.max(0, Math.min(1, YY.progress))), 2);
      }
      O.ctx.globalAlpha = 1;
      Y2 += Ys + 4;
    }
  });
}
a(drawToasts, "drawToasts");
var jt = {
  rewind: ["........", "...#..#.", "..##.##.", ".######.", ".######.", "..##.##.", "...#..#.", "........"],
  play: ["........", "..#.....", "..##....", "..###...", "..###...", "..##....", "..#.....", "........"],
  pause: ["........", ".##..##.", ".##..##.", ".##..##.", ".##..##.", ".##..##.", ".##..##.", "........"],
  step: ["........", ".#..#...", ".#..##..", ".#..###.", ".#..###.", ".#..##..", ".#..#...", "........"],
  save: ["########", "#.####.#", "#.####.#", "#......#", "#.####.#", "#.#..#.#", "#.####.#", "########"],
  load: ["...##...", "...##...", "...##...", ".######.", "..####..", "...##...", "#......#", "########"],
  tape: ["........", "########", "#.#..#.#", "#.#..#.#", "#......#", "#.####.#", "########", "........"],
  target: ["...##...", "..#..#..", ".#....#.", "#..##..#", "#..##..#", ".#....#.", "..#..#..", "...##..."],
  eye: ["........", "..####..", ".#....#.", "#..##..#", "#..##..#", ".#....#.", "..####..", "........"],
  bug: [".#....#.", "..#..#..", ".######.", "#.####.#", ".######.", "#.####.#", ".######.", ".#....#."],
  gauge: ["........", "..####..", ".#....#.", "#....#.#", "#...#..#", "#..#...#", "#......#", "########"],
  keys: ["........", "...##...", "...##...", ".##..##.", ".##..##.", "...##...", "...##...", "........"],
  list: ["........", "##.#####", "........", "##.#####", "........", "##.#####", "........", "##.#####"],
  camera: ["........", "..###...", "########", "#..##..#", "#.#..#.#", "#..##..#", "########", "........"],
  film: ["########", "#.#..#.#", "########", "#......#", "#......#", "########", "#.#..#.#", "########"],
  star: ["...#....", "...#....", "..###...", "#######.", ".#####..", "..###...", ".##.##..", ".#...#.."],
  clock: ["..####..", ".#....#.", "#...#..#", "#...#..#", "#...###.", "#......#", ".#....#.", "..####.."],
  trophy: ["########", "#.####.#", ".######.", "..####..", "...##...", "...##...", "..####..", ".######."],
  search: [".####...", "#....#..", "#....#..", "#....#..", ".####...", ".....#..", "......#.", ".......#"],
  help: ["..####..", ".#....#.", "......#.", "....##..", "...#....", "...#....", "........", "...#...."],
  flag: ["#.......", "#####...", "#######.", "#####...", "#.......", "#.......", "#.......", "#......."],
  dice: ["########", "#......#", "#.#..#.#", "#......#", "#......#", "#.#..#.#", "#......#", "########"],
  contrast: ["..####..", ".#.####.", "#..#####", "#..#####", "#..#####", "#..#####", ".#.####.", "..####.."],
  hand: ["...#....", "...#.#..", "...#.#.#", ".#.#####", ".#######", ".######.", "..#####.", "...###.."],
  heart: ["........", ".##.##..", "#######.", "#######.", ".#####..", "..###...", "...#....", "........"],
  skull: ["..####..", ".######.", "#..##..#", "#..##..#", ".######.", "..#..#..", "..####..", "........"],
  gear: ["...##...", ".#.##.#.", "..####..", "###..###", "###..###", "..####..", ".#.##.#.", "...##..."]
};
function drawIcon(O, c, jz, jU, jB = 2, jr = WV.text) {
  if (!c) {
    return;
  }
  if (typeof c == "object" && !Array.isArray(c) && c.sprite) {
    O.draw_sprite_ext(c.sprite, c.frame || 0, jz, jU, jB / 2, jB / 2, 0, jr, 1);
    return;
  }
  let Y2 = Array.isArray(c) ? c : null;
  if (!Y2) {
    let Y5 = l[c];
    let Y6 = jB * 8;
    if (Y5 && (Y6 % 12 === 0 || !jt[c])) {
      Y2 = Y5;
      jB = Math.max(1, Math.round(Y6 / 12));
    } else {
      Y2 = jt[c];
    }
  }
  if (!Y2) {
    return;
  }
  let Y3 = O.ctx;
  Y3.fillStyle = jr;
  for (let Y7 = 0; Y7 < Y2.length; Y7++) {
    for (let Y8 = 0; Y8 < Y2[Y7].length; Y8++) {
      if (Y2[Y7][Y8] === "#") {
        Y3.fillRect(jz + Y8 * jB, jU + Y7 * jB, jB, jB);
      }
    }
  }
}
a(drawIcon, "drawIcon");
const jv = {
  presentStart: 0,
  presents: 0,
  alpha: 1
};
var jZ = jv;
function presentBegin(O = 1) {
  jZ.presentStart = typeof performance !== "undefined" ? performance.now() : Date.now();
  jZ.presents++;
  jZ.alpha = Number.isFinite(O) ? Math.max(0, Math.min(1, O)) : 1;
}
a(presentBegin, "presentBegin");
var jq = null;
function setBanner(O, c, jz = WV.select, jU = "") {
  if (c) {
    jq = {
      owner: O,
      text: String(c),
      col: jz || WV.select,
      sub: jU ? String(jU) : ""
    };
  } else if (jq && jq.owner === O) {
    jq = null;
  }
}
a(setBanner, "setBanner");
function drawBanner(O) {
  if (jq) {
    withChrome(O, () => {
      let Y0 = Math.min(460, Math.max(O.string_width(jq.text, "fnt_main"), jq.sub ? O.string_width(jq.sub, "fnt_main") : 0) + 20);
      let Y1 = 320 - Y0 / 2;
      panel(O, Y1, 2, Y1 + Y0, jq.sub ? 40 : 22);
      O.draw_set_halign("center");
      O.draw_text(320, 5, jq.text, jq.col);
      if (jq.sub) {
        O.draw_text(320, 22, jq.sub, WV.dim);
      }
      O.draw_set_halign("left");
    });
  }
}
a(drawBanner, "drawBanner");
function drawTop(O, c = {}) {
  if (O4) {
    for (let jH of cm.slice()) {
      if (O4.has(jH.owner || jH.id)) {
        withChrome(O, () => guard("modal draw", jH.owner || jH.id, () => jH.draw(O, ctx())));
      }
    }
    return;
  }
  drawBanner(O);
  for (let Y0 of cm.slice()) {
    withChrome(O, () => {
      if (Y0.pauses !== false && Y0.backdrop !== false && O.ctx) {
        let Y5 = O.ctx.canvas;
        O.ctx.save();
        O.ctx.setTransform(1, 0, 0, 1, 0, 0);
        O.ctx.globalAlpha = 1;
        O.ctx.fillStyle = "rgba(0,0,0,0.42)";
        O.ctx.fillRect(0, 0, Y5.width, Y5.height);
        O.ctx.restore();
      }
      guard("modal draw", Y0.owner || Y0.id, () => Y0.draw(O, ctx()));
    });
  }
  drawToasts(O, c);
  emit("overlay", O);
}
a(drawTop, "drawTop");
export { l as a, L as b, iconFor as c, install as d, onInstall as e, getHost as f, isInstalled as g, setMode as h, getMode as i, ctx as j, onHookError as k, O1 as l, emit as m, setChromeHidden as n, isChromeHidden as o, claimTick as p, O8 as q, fightStarted as r, fightLeft as s, assist as t, frameBefore as u, frameAfter as v, timeJumped as w, note as x, devMode as y, applyDevMode as z, registerTool as A, getTool as B, listTools as C, toolAvailable as D, toolOn as E, useTool as F, statusTags as G, normalizeCombo as H, comboLabel as I, registerKey as J, keyBindings as K, keyTable as L, handleKeyDown as M, handleKeyUp as N, openModal as O, closeModal as P, touchUI as Q, msSinceModalClose as R, topModal as S, modalOpen as T, modalPauses as U, stepModal as V, onPointer as W, dispatchPointer as X, registerCommand as Y, listCommands as Z, runCommand as _, registerSetting as $, showValue as aa, cycleSetting as ba, settingRows as ca, listSettings as da, provide as ea, use as fa, pref as ga, setPref as ha, store as ia, download as ja, pickFile as ka, toast as la, liveToasts as ma, Wh as na, limitText as oa, limitShort as pa, limitSeen as qa, limitWasSeen as ra, limitNote as sa, WV as ta, withChrome as ua, panel as va, frame as wa, setKeyGlyphs as xa, keyWidth as ya, drawKey as za, reserveTop as Aa, drawIcon as Ba, jZ as Ca, presentBegin as Da, setBanner as Ea, drawTop as Fa, G as Ga };
