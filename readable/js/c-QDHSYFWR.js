import { Zr as L } from "./c-BMHJCKUP.js";
import { b as N } from "./c-YJJCI5ES.js";
import { Da as E, Pa as j, Ra as D, Za as Z, _a as S, ba as m, fb as K, qb as V, rb as x } from "./c-FMIAGHDE.js";
import { a as q, e as A, l as e } from "./c-PIEPTJTC.js";
e();
function freshMusicEvents(C) {
  const Y = function () {
    ;
    let X = true;
    return function (O, H) {
      const I = X ? function () {
        if (H) {
          const J = H.apply(O, arguments);
          H = null;
          return J;
        }
      } : function () {};
      X = false;
      return I;
    };
  }();
  if (!C || C.__freshMusic) {
    return;
  }
  C.__freshMusic = true;
  let P = C.prototype;
  for (let X of Object.getOwnPropertyNames(P)) {
    if (X === "constructor") {
      continue;
    }
    let O = Object.getOwnPropertyDescriptor(P, X);
    if (!O || typeof O.value != "function") {
      continue;
    }
    let H = O.value;
    let I = function (...J) {
      j.depth++;
      try {
        return H.apply(this, J);
      } finally {
        j.depth--;
      }
    };
    I.inner = H;
    P[X] = I;
  }
}
q(freshMusicEvents, "freshMusicEvents");
freshMusicEvents(L);
var obj_rhythmgame_launcher = class i0 extends Z {
  create() {
    this.depth = 200000;
    this.started = 0;
    this.buf = 4;
    D();
    if (N.band_difficulty === undefined) {
      N.band_difficulty = 0;
    }
    K.with("obj_heroparent", W => {
      W.visible = false;
    });
    let i = V(0, 0, L);
    i.replayversion = false;
    i.hardmode = N.band_difficulty === 1 ? 1 : 0;
    i.song_id = 0;
    i.freeplay = -2;
    this.rg = i;
  }
  step() {
    K.with("obj_heroparent", k => {
      k.visible = false;
    });
    if (this.buf > 0) {
      this.buf--;
      return;
    }
    let W = this.rg;
    if (!!W && !W.destroyed && !!x(W)) {
      if (this.started && W.song_done) {
        this.doneT = (this.doneT || 0) + 1;
        if (this.doneT < 90) {
          return;
        }
        this.doneT = 0;
        this.started = 0;
        this.buf = 4;
        let k = W.song_id;
        let C = W.hardmode;
        try {
          W.event_user(1);
        } catch (r) {
          console.warn("rhythm launcher event_user(1)", r);
        }
        D();
        N.batmusic = [null, null];
        W.freeplay = -2;
        W.song_id = k;
        W.hardmode = C;
        return;
      }
      if (!this.started) {
        if (W.freeplay < 0) {
          if (m()) {
            this.started = 1;
            D();
            N.batmusic = [null, null];
            E("snd_select");
            W.replayversion = false;
            W.freeplay = 0;
            try {
              W.event_user(0);
            } catch (Y) {
              console.warn("rhythm launcher event_user(0)", Y);
            }
          }
          return;
        }
        this.started = 1;
      }
    }
  }
};
q(obj_rhythmgame_launcher, "obj_rhythmgame_launcher");
A(obj_rhythmgame_launcher, "kinds", S("obj_rhythmgame_launcher", Z));
var B = obj_rhythmgame_launcher;
function buildRhythmFights(i) {
  if (i) {
    return [{
      ...i,
      id: "ch3rhythm",
      name: "Rhythm Game (Track Select)",
      area: "TV World",
      desc: "The band's own game.#All seven songs, and Hard.#Up/Down picks, Left/Right is Hard.",
      generated: false,
      encounterno: 0,
      custom: true,
      customTag: "MINIGAME",
      timedMinigame: true,
      minigameOnly: true,
      standaloneMinigame: true,
      glow: "aqua",
      monsters: [],
      music: "",
      background: () => {
        V(0, 0, B);
      }
    }];
  } else {
    return [];
  }
}
q(buildRhythmFights, "buildRhythmFights");
export { freshMusicEvents as a, B as b, buildRhythmFights as c };
