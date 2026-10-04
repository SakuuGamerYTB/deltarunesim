const X = function () {
  ;
  let U = true;
  return function (F, z) {
    const E = U ? function () {
      if (z) {
        const C = z.apply(F, arguments);
        z = null;
        return C;
      }
    } : function () {};
    U = false;
    return E;
  };
}();
import "./c-FCPQIX2O.js";
import { a as Q, l as x } from "./c-PIEPTJTC.js";
x();
var I = self.onmessage;
var e = self.postMessage;
var post = Q(U => e.call(self, U), "post");
var n = null;
self.postMessage = U => {
  if (n) {
    n.push(U);
  } else {
    post(U);
  }
};
async function forward(U) {
  let F = [];
  n = F;
  try {
    await I.call(self, {
      data: U
    });
  } finally {
    n = null;
  }
  return F;
}
Q(forward, "forward");
var D = null;
var G = null;
var s = null;
function sig() {
  let U = G.World.first("obj_heart") || G.World.first("obj_purpleheart");
  let F = typeof s.hp == "number" ? s.hp : Array.isArray(s.hp) ? (s.hp[1] || 0) + (s.hp[2] || 0) + (s.hp[3] || 0) : 0;
  return (U ? (U.x | 0) + "," + (U.y | 0) : "none") + "|" + F + "|" + G.World.list.length + "|" + (s.mnfight | 0);
}
Q(sig, "sig");
async function handle(U) {
  if (U.cmd === "boot") {
    let K = U.assets;
    if (!K) {
      try {
        let P0 = await (await fetch(new URL("../assets/data.json", import.meta.url))).json();
        K = {
          sprites: P0.sprites,
          fonts: P0.fonts
        };
      } catch (P1) {
        post({
          t: "booterr",
          id: U.id,
          err: "ghost worker: no sprite table (" + (P1 && P1.message || P1) + ")"
        });
        return;
      }
    }
    let T = await forward({
      cmd: "boot",
      id: U.id,
      assets: K
    });
    if (T.some(P2 => P2 && P2.t === "ready")) {
      try {
        D = await Z("./oracle-JIZ4HJL7.js", import.meta.url);
        G = await Z("./gm-DVHMTG3U.js", import.meta.url);
        s = (await Z("./globals-Y7HSE7MN.js", import.meta.url)).G;
      } catch (P2) {
        post({
          t: "booterr",
          id: U.id,
          err: "ghost worker: " + (P2 && P2.message || P2)
        });
        return;
      }
    }
    for (let P3 of T) {
      post(P3);
    }
    return;
  }
  if (U.cmd !== "gplan") {
    await I.call(self, {
      data: U
    });
    return;
  }
  let F = performance.now();
  let z = {
    t: "gplan",
    id: U.id,
    epoch: U.epoch,
    rev: U.rev
  };
  if (!D) {
    post(Object.assign(z, {
      err: "not booted"
    }));
    return;
  }
  let E = (await forward(Object.assign({}, U, {
    cmd: "advance"
  }))).find(P4 => P4 && (P4.t === "adv" || P4.t === "plan"));
  if (!E || E.need || E.err || E.at === undefined) {
    post(Object.assign(z, {
      need: E && E.need,
      err: E ? E.err : "no answer",
      wireFail: !!E && !!E.wireFail
    }));
    return;
  }
  let C = performance.now();
  let M = E.safe;
  if (U.noPlan) {
    post(Object.assign(z, {
      at: E.at,
      sig: E.sig,
      safe: M,
      ms: C - F
    }));
    return;
  }
  if (U.env) {
    s.godmode = !!U.env.god;
    s.forceAttack = U.env.force;
  }
  let L = G.World.first("obj_heart");
  let R = sig();
  let N = null;
  let q = null;
  try {
    N = D.oraclePlan(U.opts || {});
  } catch (P4) {
    q = String(P4 && P4.message || P4);
  }
  let B = sig();
  if (B !== R) {
    post(Object.assign(z, {
      err: "plan changed the world: " + R + " -> " + B,
      need: "full"
    }));
    return;
  }
  post(Object.assign(z, {
    at: E.at,
    sig: E.sig,
    safe: M,
    err: q,
    x0: L ? L.x : null,
    y0: L ? L.y : null,
    pos: N && N.pos ? N.pos.map(P5 => [P5[0], P5[1], P5[2] | 0]) : null,
    keys: N ? N.keys : null,
    hits: N ? N.hits | 0 : 0,
    horizon: N ? N.horizon | 0 : 0,
    mode: N ? N.mode : null,
    ms: performance.now() - F,
    adv: C - F
  }));
}
Q(handle, "handle");
var S = Promise.resolve();
self.onmessage = U => {
  let F = U.data;
  S = S.then(() => handle(F)).catch(z => post({
    t: "gplan",
    id: F && F.id,
    epoch: F && F.epoch,
    err: String(z && z.message || z)
  }));
};
function Z(U, F) {
  var z = new URL(U, F).href;
  var E = globalThis.__drWarm;
  return (E ? E(z) : Promise.resolve()).then(function () {
    return import(z).catch(function (C) {
      try {
        C.reload = true;
        C.what = "the game code";
      } catch (h) {}
      throw C;
    });
  });
}
