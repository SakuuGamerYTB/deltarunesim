const X = function () {
  ;
  let G = true;
  return function (i, H) {
    const s = G ? function () {
      if (H) {
        const V = H.apply(i, arguments);
        H = null;
        return V;
      }
    } : function () {};
    G = false;
    return s;
  };
}();
import { Hd as R, Id as P } from "./c-74XQOPMX.js";
import { b as J } from "./c-YJJCI5ES.js";
import { N as K, Vc as S, Wc as z, fb as U, i as Y } from "./c-FMIAGHDE.js";
import { a as W, l as C } from "./c-PIEPTJTC.js";
C();
function isPath(G) {
  return G && typeof G == "object" && Array.isArray(G.points) && typeof G.poly == "function";
}
W(isPath, "isPath");
function deep(G, H, V = 0) {
  if (G === null || typeof G != "object") {
    return G;
  }
  if (Array.isArray(G)) {
    let B = new Array(G.length);
    for (let Q = 0; Q < G.length; Q++) {
      B[Q] = V > 6 ? G[Q] : deep(G[Q], H, V + 1);
    }
    return B;
  }
  if (G instanceof Map) {
    let x = new Map();
    for (let [A0, A1] of G) {
      x.set(A0, deep(A1, H, V + 1));
    }
    return x;
  }
  if (G instanceof Set) {
    return new Set(G);
  }
  if (isPath(G)) {
    if (H && !H.has(G)) {
      H.set(G, {
        points: G.points.map(A2 => ({
          ...A2
        })),
        kind: G.kind,
        closed: G.closed,
        precision: G.precision
      });
    }
    return G;
  }
  let N = Object.getPrototypeOf(G);
  if (N !== Object.prototype && N !== null || V > 6) {
    return G;
  }
  let F = {};
  for (let A2 of Object.keys(G)) {
    F[A2] = deep(G[A2], H, V + 1);
  }
  return F;
}
W(deep, "deep");
var o = null;
function snapInst(G) {
  let i = {};
  for (let H of Object.keys(G)) {
    let s = G[H];
    if (typeof s == "function") {
      i[H] = s;
      continue;
    }
    i[H] = deep(s, o);
  }
  return i;
}
W(snapInst, "snapInst");
function snapGlobals() {
  let G = {};
  for (let i of Object.keys(J)) {
    let H = J[i];
    if (typeof H == "function") {
      G[i] = H;
      continue;
    }
    G[i] = deep(H, o);
  }
  return G;
}
W(snapGlobals, "snapGlobals");
function snapshot() {
  let G = U.list.slice();
  o = new Map();
  let i = G.map(snapInst);
  let H = snapGlobals();
  let s = o;
  o = null;
  return {
    counters: S(),
    paths: s,
    list: G,
    insts: i,
    pending: U.pending.slice(),
    frame: U.frame,
    spawns: U.spawns,
    self: U.self,
    g: H,
    rng: {
      seed: Y.seed,
      state: Y.state,
      calls: Y.calls
    },
    held: {
      ...K.held
    },
    pressed: {
      ...K.pressed
    },
    ut: R()
  };
}
W(snapshot, "snapshot");
function restore(G) {
  U.list.length = 0;
  for (let H = 0; H < G.list.length; H++) {
    let s = G.list[H];
    let V = G.insts[H];
    for (let N of Object.keys(s)) {
      if (!(N in V)) {
        delete s[N];
      }
    }
    for (let F of Object.keys(V)) {
      let B = V[F];
      s[F] = deep(B, null);
    }
    U.list.push(s);
  }
  U.reindex();
  U.pending.length = 0;
  for (let Q of G.pending) {
    U.pending.push(Q);
  }
  U.frame = G.frame;
  U.spawns = G.spawns;
  U.self = G.self;
  for (let x of Object.keys(J)) {
    if (!(x in G.g)) {
      delete J[x];
    }
  }
  for (let A0 of Object.keys(G.g)) {
    let A1 = G.g[A0];
    let A2 = J[A0];
    if (Array.isArray(A1) && A2 && A2.__raw && Array.isArray(A2.__raw)) {
      let A3 = A2.__raw;
      A3.length = 0;
      for (let A4 = 0; A4 < A1.length; A4++) {
        A3[A4] = A1[A4];
      }
      continue;
    }
    J[A0] = deep(A1, null);
  }
  if (G.counters) {
    z(G.counters);
  }
  if (G.paths) {
    for (let [A5, A6] of G.paths) {
      A5.points = A6.points.map(A7 => ({
        ...A7
      }));
      A5.kind = A6.kind;
      A5.closed = A6.closed;
      A5.precision = A6.precision;
      A5._poly = null;
    }
  }
  Y.seed = G.rng.seed;
  Y.state = G.rng.state;
  Y.calls = G.rng.calls;
  for (let A7 of Object.keys(K.held)) {
    delete K.held[A7];
  }
  Object.assign(K.held, G.held);
  for (let A8 of Object.keys(K.pressed)) {
    delete K.pressed[A8];
  }
  Object.assign(K.pressed, G.pressed);
  if (G.ut) {
    P(G.ut);
  }
}
W(restore, "restore");
function nullGfx(G) {
  let H = () => {};
  let s = new Proxy({}, {
    get(F, B) {
      if (B === "canvas") {
        return {
          width: 640,
          height: 480
        };
      } else if (B === "measureText") {
        return () => ({
          width: 0
        });
      } else if (B === "getImageData") {
        return () => ({
          data: new Uint8ClampedArray(4)
        });
      } else if (B === "createPattern" || B === "createLinearGradient") {
        return () => null;
      } else {
        return H;
      }
    },
    set() {
      return true;
    }
  });
  let V = new G(s);
  let N = {
    width: 1,
    height: 1,
    getContext: () => s
  };
  V.headless = true;
  V.tinted = () => N;
  V.fontTinted = () => N;
  V.draw_char = function (F, B) {
    if (!this.fonts[F]) {
      return 0;
    }
    let Q = this.glyph(F, B);
    if (Q) {
      return Q[4];
    } else {
      return 0;
    }
  };
  return V;
}
W(nullGfx, "nullGfx");
export { snapshot as a, restore as b, nullGfx as c };
