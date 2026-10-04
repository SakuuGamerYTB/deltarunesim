const p1oa4hoka = function () {
  const a = {
    WBlwQ: function (d, A) {
      return d !== A;
    },
    dkcVz: "iuGuf",
    mjAtW: "fcuBF",
    cLLWC: function (d, A) {
      return d === A;
    },
    eBXaG: "IvyEa",
    xZRns: "XWPwI"
  };
  const K = a;
  let D = true;
  return function (d, A) {
    if (K.cLLWC(K.eBXaG, K.xZRns)) {
      a.click();
      return true;
    } else {
      const p = D ? function () {
        if (A) {
          if (K.WBlwQ(K.dkcVz, K.mjAtW)) {
            const o = A.apply(d, arguments);
            A = null;
            return o;
          } else if (K.close) {
            D.close();
          }
        }
      } : function () {};
      D = false;
      return p;
    }
  };
}();
const p1oa4hokG = p1oa4hoka(this, function () {
  const a = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const K = a.console = a.console || {};
  const D = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let A = 0; A < D.length; A++) {
    const m = p1oa4hoka.constructor.prototype.bind(p1oa4hoka);
    const p = D[A];
    const T = K[p] || m;
    m.__proto__ = p1oa4hoka.bind(p1oa4hoka);
    m.toString = T.toString.bind(T);
    K[p] = m;
  }
});
p1oa4hokG();
export const TAG_COLORS = {
  "MAJOR UPDATE": "#ff0000",
  "MINOR UPDATE": "#c0c0c0",
  "BUG FIXES": "#00ff00",
  HOTFIX: "#ffa040",
  "NEW FIGHTS": "#ff00ff",
  "NEW FEATURE": "#ffff00",
  PERFORMANCE: "#00ffff",
  BALANCE: "#e0c060"
};
export const THUMB_W = 192;
export const THUMB_H = 108;
const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const HEART = "M1 1h2v1h1V1h2v1h1v2H6v1H5v1H4v1H3V6H2V5H1V4H0V2h1z";
export const SOUL_SVG = "<svg viewBox=\"0 0 7 7\" shape-rendering=\"crispEdges\" aria-hidden=\"true\"><path fill=\"#ff0000\" d=\"" + HEART + "\"/></svg>";
export function dateLabel(G, a = false) {
  const D = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(G || ""));
  if (!D) {
    return String(G || "");
  }
  return (a ? MONTHS_LONG : MONTHS)[+D[2] - 1] + " " + +D[3] + ", " + D[1];
}
export function cmpVersion(G, K) {
  const d = T => String(T || "0").split(".").map(o => parseInt(o, 10) || 0);
  const A = d(G);
  const m = d(K);
  for (let T = 0; T < 3; T++) {
    if ((A[T] || 0) !== (m[T] || 0)) {
      return (A[T] || 0) - (m[T] || 0);
    }
  }
  return 0;
}
const tints = new WeakMap();
function tinted(a, K) {
  const D = {
    BIWQC: "none",
    LtquS: function (S, I) {
      return S === I;
    },
    DSxQL: "yoqDo",
    BTrYi: "sejDM",
    ADaDP: "canvas",
    WfRty: "source-in"
  };
  const d = D;
  let A = tints.get(a);
  if (!A) {
    if (d.LtquS(d.DSxQL, d.BTrYi)) {
      K.cv.style.display = d.BIWQC;
      D.classList.add("fb");
      return;
    } else {
      A = new Map();
      tints.set(a, A);
    }
  }
  let p = A.get(K);
  if (p) {
    return p;
  }
  p = document.createElement(d.ADaDP);
  p.width = a.img.width;
  p.height = a.img.height;
  const T = p.getContext("2d");
  T.drawImage(a.img, 0, 0);
  T.globalCompositeOperation = d.WfRty;
  T.fillStyle = K;
  T.fillRect(0, 0, p.width, p.height);
  A.set(K, p);
  return p;
}
const gl = (G, a) => G.glyphs[a.charCodeAt(0)] || G.glyphs[63];
const ok = G => !!G && !!G.img && !!G.img.width && !!G.glyphs;
export function textW(G, a) {
  let D = 0;
  for (const d of a) {
    const A = gl(G, d);
    if (A) {
      D += A[4];
    }
  }
  return D;
}
export function drawText(G, a, K, D, d, A) {
  const p = tinted(a, A);
  let T = D;
  for (const o of K) {
    const S = gl(a, o);
    if (!S) {
      continue;
    }
    const [I, r, P, Z, y, j] = S;
    if (P > 0 && Z > 0) {
      G.drawImage(p, I, r, P, Z, T + j, d, P, Z);
    }
    T += y;
  }
  return T - D;
}
export function wrapText(K, D, d) {
  const m = D.startsWith("* ");
  const p = m ? textW(K, "* ") : 0;
  const T = [];
  let o = "";
  let S = true;
  for (const r of D.split(" ")) {
    const P = o ? o + " " + r : r;
    if (o && textW(K, P) + (S ? 0 : p) > d) {
      const Z = {
        t: o,
        x: S ? 0 : p
      };
      T.push(Z);
      o = r;
      S = false;
    } else {
      o = P;
    }
  }
  const I = {
    t: o,
    x: S ? 0 : p
  };
  T.push(I);
  return T;
}
const caps = new WeakMap();
function capOf(G) {
  let K = caps.get(G);
  if (K) {
    return K;
  }
  const D = gl(G, "H");
  K = {
    top: 3,
    base: D ? Math.min(D[3], 14) : 14
  };
  try {
    const [A, m, p, T] = D;
    const o = document.createElement("canvas");
    o.width = p;
    o.height = T;
    const S = o.getContext("2d");
    S.drawImage(G.img, A, m, p, T, 0, 0, p, T);
    const I = S.getImageData(0, 0, p, T).data;
    let r = -1;
    let P = -1;
    for (let Z = 0; Z < T; Z++) {
      for (let j = 0; j < p; j++) {
        if (I[(Z * p + j) * 4 + 3] > 127) {
          if (r < 0) {
            r = Z;
          }
          P = Z;
        }
      }
    }
    if (r >= 0) {
      K = {
        top: r,
        base: P + 1
      };
    }
  } catch (X) {}
  caps.set(G, K);
  return K;
}
const spr = new Map();
function sprite(G, a, K, D) {
  const A = a + "_" + K;
  let m = spr.get(A);
  if (!m) {
    m = {
      img: null,
      wait: new Set(),
      bad: false
    };
    spr.set(A, m);
    const p = new Image();
    p.onload = () => {
      m.img = p;
      for (const o of m.wait) {
        try {
          o();
        } catch (S) {}
      }
      m.wait.clear();
    };
    p.onerror = () => {
      m.bad = true;
      m.wait.clear();
    };
    p.src = G.spriteURL(a, K);
  }
  if (!m.img && !m.bad && D) {
    m.wait.add(D);
  }
  return m.img;
}
export function paintThumb(a, K, D, d) {
  const p = THUMB_W;
  const T = THUMB_H;
  const o = D.F;
  a.width = p * d;
  a.height = T * d;
  const S = a.getContext("2d");
  S.imageSmoothingEnabled = false;
  S.setTransform(d, 0, 0, d, 0, 0);
  S.fillStyle = "#000";
  S.fillRect(0, 0, p, T);
  S.fillStyle = "rgba(96,56,128,0.30)";
  for (let B = 5; B < p; B += 12) {
    S.fillRect(B, 0, 1, T);
  }
  for (let V = 5; V < T; V += 12) {
    S.fillRect(0, V, p, 1);
  }
  const I = ok(o.fnt_main) ? o.fnt_main : null;
  const r = ok(o.fnt_mainbig) ? o.fnt_mainbig : null;
  let P = 0;
  if (I) {
    P = 10 + drawText(S, I, "PATCH NOTES", 10, 6, "#ffff00");
  }
  if (r) {
    P = Math.max(P, 8 + drawText(S, r, "v" + K.version, 8, 20, "#ffffff"));
  }
  const Z = [[]];
  let y = T;
  if (I) {
    {
      const l = capOf(I);
      const u = l.base - l.top + 6;
      let Y = 8;
      for (const R of K.tags || []) {
        const q = textW(I, R) + 8;
        if (Y > 8 && Y + q > p - 8) {
          Z.push([]);
          Y = 8;
        }
        const i = {
          t: R,
          w: q,
          x: Y
        };
        Z[Z.length - 1].push(i);
        Y += q + 4;
      }
      Z.forEach((n, L) => {
        {
          const Q = T - 8 - (Z.length - L) * (u + 3) + 3;
          if (n.length) {
            y = Math.min(y, Q);
          }
          for (const M of n) {
            S.fillStyle = TAG_COLORS[M.t] || "#ffffff";
            S.fillRect(M.x, Q, M.w, u);
            drawText(S, I, M.t, M.x + 4, Q + 3 - l.top, "#000000");
          }
        }
      });
      K._chipRight = Math.max(0, ...Z.flat().map(n => n.x + n.w));
    }
  }
  const j = (K.sprite || []).map(([L, c]) => sprite(D, L, c | 0, () => paintThumb(a, K, D, d))).filter(Boolean);
  if (j.length && j.length === (K.sprite || []).length) {
    const n = Math.max(P + 6, 96);
    const L = p - 8;
    const c = (K._chipRight || 0) > n ? y - 4 : T - 8;
    const N = j.reduce((h, O) => h + O.width, 0) + 4 * (j.length - 1);
    const C = Math.max(...j.map(h => h.height));
    const Q = Math.max(1, Math.min(4, Math.floor((L - n) / N), Math.floor((c - 6) / C)));
    let M = Math.round(n + (L - n - N * Q) / 2);
    for (const h of j) {
      {
        S.drawImage(h, 0, 0, h.width, h.height, M, c - h.height * Q, h.width * Q, h.height * Q);
        M += (h.width + 4) * Q;
      }
    }
  }
}
export function mountStyle() {
  if (document.getElementById("dr-updates-style")) {
    return;
  }
  const D = document.createElement("style");
  D.id = "dr-updates-style";
  D.textContent = "\n#dr-updates { color:#fff; font:16px/20px monospace; box-sizing:border-box; -webkit-tap-highlight-color:transparent; }\n#dr-updates * { box-sizing:border-box; }\n#dr-updates.app { position:fixed; inset:0; z-index:100000; display:flex; align-items:center; justify-content:center; -webkit-user-select:none; user-select:none;\n  padding:max(12px, env(safe-area-inset-top)) max(12px, env(safe-area-inset-right)) max(12px, env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-left)); touch-action:manipulation; }\n#dr-updates.page { min-height:100vh; display:flex; justify-content:center; padding:16px; }\n#dr-updates canvas { display:block; image-rendering:pixelated; }\n#dr-updates .sr { position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0 0 0 0); clip-path:inset(50%); white-space:nowrap; }\n#dr-updates .bt { display:block; position:relative; }\n#dr-updates .bt.fb .sr { position:static; width:auto; height:auto; clip:auto; clip-path:none; white-space:normal; }\n#dr-updates .bk { position:absolute; inset:0; background-color:rgba(0,0,0,.88);\n  background-image:linear-gradient(rgba(96,56,128,.2) 2px, transparent 2px), linear-gradient(90deg, rgba(96,56,128,.2) 2px, transparent 2px); background-size:40px 40px; }\n#dr-updates.app .box { animation:dru-open .2s cubic-bezier(.2,.8,.25,1) both; }\n@keyframes dru-open { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }\n#dr-updates.still .box { animation:none; }\n#dr-updates .box { position:relative; display:flex; flex-direction:column; width:min(1000px, 100%); max-height:100%;\n  border:32px solid transparent; border-image-width:32px; border-image-repeat:stretch; image-rendering:pixelated; }\n#dr-updates.page .box { max-height:none; }\n#dr-updates.t-S .box, #dr-updates.t-W .box { border-width:16px; border-image-width:16px; }\n#dr-updates.app.t-W .box { width:min(920px, 100%); height:100%; }\n#dr-updates.app.t-L .box { height:min(860px, 100%); }\n#dr-updates .in { display:flex; flex-direction:column; min-height:0; flex:1 1 auto; padding:12px 28px 12px; }\n#dr-updates.t-S .in, #dr-updates.t-W .in { padding:6px 8px 6px; }\n#dr-updates .head { display:flex; align-items:flex-end; justify-content:space-between; gap:12px; flex:none; padding-bottom:10px; border-bottom:2px solid #262626; }\n#dr-updates .body { overflow-y:auto; overflow-x:hidden; overscroll-behavior:contain; flex:1 1 auto; min-height:60px; margin-top:14px; padding:4px 6px 4px 4px;\n  scrollbar-gutter:stable; scrollbar-width:thin; scrollbar-color:#808080 #000; }\n#dr-updates.page .body { overflow:visible; }\n#dr-updates .body::-webkit-scrollbar { width:8px; } #dr-updates .body::-webkit-scrollbar-thumb { background:#808080; } #dr-updates .body::-webkit-scrollbar-track { background:#000; }\n#dr-updates.t-S .body, #dr-updates.t-W .body { margin-top:8px; }\n/* the list: one row per update, newest first */\n#dr-updates .list { display:flex; flex-direction:column; gap:14px; margin:0; padding:0; list-style:none; }\n#dr-updates.t-S .list, #dr-updates.t-W .list { gap:10px; }\n#dr-updates .card { appearance:none; position:relative; display:flex; gap:20px; align-items:flex-start; width:100%; padding:8px; margin:0; text-align:left; cursor:pointer; color:#fff;\n  background:#000; border:2px solid #404040; outline:none; font:inherit; }\n#dr-updates.t-S .card, #dr-updates.t-W .card { gap:12px; padding:6px; }\n#dr-updates.t-S .card { flex-direction:column; }\n#dr-updates .card .th { flex:none; border:2px solid #000; }\n#dr-updates .card:hover { border-color:#c0c0c0; }\n#dr-updates .card.sel { border-color:#ffff00; box-shadow:0 0 0 2px #000, 0 0 0 4px #ffff00; }\n#dr-updates .card .meta { min-width:0; flex:1 1 auto; display:flex; flex-direction:column; gap:8px; padding-top:2px; }\n#dr-updates.t-S .card .meta, #dr-updates.t-W .card .meta { gap:4px; }\n#dr-updates .card .tl { display:flex; align-items:flex-start; gap:10px; }\n#dr-updates .card .tl .tt { flex:1 1 auto; min-width:0; }\n#dr-updates .card .soul { width:16px; height:16px; flex:none; visibility:hidden; margin-top:6px; }\n#dr-updates.t-S .card .soul, #dr-updates.t-W .card .soul { margin-top:0; }\n#dr-updates .card .soul svg { display:block; width:16px; height:16px; }\n#dr-updates .card.sel .soul { visibility:visible; }\n#dr-updates .y { display:none; } #dr-updates .card.sel .tl .w { display:none; } #dr-updates .card.sel .tl .y { display:block; }\n#dr-updates .line { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }\n#dr-updates .ex { margin-top:4px; }\n#dr-updates .ex .bt + .bt { margin-top:4px; }\n/* one update, opened */\n#dr-updates .entry { display:flex; flex-direction:column; gap:18px; }\n#dr-updates .entry .top { display:flex; gap:24px; align-items:flex-end; }\n#dr-updates.t-S .entry .top { flex-direction:column; align-items:flex-start; gap:10px; }\n#dr-updates.t-W .entry .top { gap:14px; }\n#dr-updates .entry .th { border:2px solid #404040; flex:none; }\n#dr-updates .entry .eh { display:flex; flex-direction:column; gap:10px; min-width:0; flex:1 1 auto; align-self:stretch; justify-content:flex-end; }\n#dr-updates.t-S .entry .eh, #dr-updates.t-W .entry .eh { gap:6px; }\n#dr-updates .notes { display:flex; flex-direction:column; gap:10px; margin:0; padding:0; list-style:none; }\n#dr-updates.t-S .notes, #dr-updates.t-W .notes { gap:6px; }\n#dr-updates.t-S .entry, #dr-updates.t-W .entry { gap:12px; }\n/* the buttons and the key hints */\n#dr-updates .foot { display:flex; justify-content:space-between; align-items:center; gap:12px; margin-top:14px; flex:none; flex-wrap:wrap; }\n#dr-updates.t-S .foot, #dr-updates.t-W .foot { margin-top:8px; gap:8px; }\n#dr-updates .btns { display:flex; gap:12px; margin-left:auto; }\n#dr-updates.t-S .btns, #dr-updates.t-W .btns { gap:8px; }\n#dr-updates .btn { appearance:none; display:flex; align-items:center; gap:8px; padding:8px 14px; cursor:pointer; background:#000; color:#fff; text-decoration:none;\n  border:2px solid #fff; box-shadow:0 0 0 2px #000, 0 0 0 4px #404040; outline:none; font:inherit; }\n#dr-updates.t-S .btn, #dr-updates.t-W .btn { padding:5px 10px; }\n#dr-updates .btn .y { display:none; }\n#dr-updates .btn:hover, #dr-updates .btn:focus-visible { border-color:#ffff00; box-shadow:0 0 0 2px #000, 0 0 0 4px #ffff00; }\n#dr-updates .btn:hover .w, #dr-updates .btn:focus-visible .w { display:none; } #dr-updates .btn:hover .y, #dr-updates .btn:focus-visible .y { display:block; }\n#dr-updates .btn[disabled] { opacity:.35; pointer-events:none; }\n#dr-updates .card:focus, #dr-updates .body:focus { outline:none; }\n@media (max-width:420px) { #dr-updates .foot .keys { display:none; } }\n@media (prefers-reduced-motion: reduce) { #dr-updates .box { animation:none !important; } }\n";
  document.head.appendChild(D);
}
export const dpr = () => Math.max(1, Math.round(window.devicePixelRatio || 1));
export function tierOf() {
  const D = window.innerWidth;
  const d = window.innerHeight;
  if (D >= 960 && d >= 640) {
    return "L";
  }
  if (D > d && D >= 600 && d < 560) {
    return "W";
  }
  return "S";
}
export function frameDataURL(G, a) {
  if (!G || !G.corner || !G.top || !G.left) {
    return null;
  }
  const D = a * 16;
  const d = D * 3;
  const A = document.createElement("canvas");
  A.width = d;
  A.height = d;
  const m = A.getContext("2d");
  m.imageSmoothingEnabled = false;
  m.fillStyle = "#000";
  m.fillRect(a * 4, a * 4, d - a * 8, d - a * 8);
  const T = (S, I, r, P, y) => {
    m.save();
    m.translate(P + (I < 0 ? D : 0), y + (r < 0 ? D : 0));
    m.scale(I, r);
    m.drawImage(S, 0, 0, D, D);
    m.restore();
  };
  T(G.top, 1, 1, D, 0);
  T(G.top, 1, -1, D, D * 2);
  T(G.left, 1, 1, 0, D);
  T(G.left, -1, 1, D * 2, D);
  T(G.corner, 1, 1, 0, 0);
  T(G.corner, -1, 1, D * 2, 0);
  T(G.corner, 1, -1, 0, D * 2);
  T(G.corner, -1, -1, D * 2, D * 2);
  try {
    return A.toDataURL();
  } catch (S) {
    return null;
  }
}
export function textKit(G) {
  const K = [];
  const D = (p, T, o) => {
    {
      const r = document.createElement(p);
      if (T) {
        r.className = T;
      }
      if (o) {
        o.appendChild(r);
      }
      return r;
    }
  };
  function d(p, T, S = {}, I = "") {
    {
      const P = D("span", "bt " + I, p);
      const Z = D("span", "sr", P);
      Z.textContent = T;
      const y = D("canvas", "", P);
      y.setAttribute("aria-hidden", "true");
      const j = {
        text: T,
        font: S.font || "fnt_main",
        col: S.col || "#ffffff",
        s: S.s || 1,
        wrap: !!S.wrap,
        cv: y
      };
      P._bt = j;
      K.push(P);
      return P;
    }
  }
  function A(p) {
    {
      const S = p._bt;
      const I = G[S.font];
      if (!ok(I)) {
        {
          S.cv.style.display = "none";
          p.classList.add("fb");
          return;
        }
      }
      const r = S.s;
      const P = dpr();
      const Z = S.font === "fnt_mainbig" ? 34 : 20;
      const y = S.wrap ? Math.max(40, Math.floor(p.parentElement ? p.parentElement.clientWidth : 300)) : 0;
      const j = S.wrap ? wrapText(I, S.text, Math.floor(y / r)) : [{
        t: S.text,
        x: 0
      }];
      const X = S.wrap ? y : Math.ceil(textW(I, S.text) * r);
      const k = (S.wrap ? (j.length - 1) * Z + (gl(I, "A") || [0, 0, 0, 16])[3] : (gl(I, "A") || [0, 0, 0, 16])[3]) * r;
      const W = S.cv;
      W.width = Math.max(1, X * P);
      W.height = Math.max(1, k * P);
      W.style.width = X + "px";
      W.style.height = k + "px";
      const B = W.getContext("2d");
      B.imageSmoothingEnabled = false;
      B.setTransform(r * P, 0, 0, r * P, 0, 0);
      j.forEach((V, H) => drawText(B, I, V.t, V.x, H * Z, S.col));
    }
  }
  function m(p, T, o, S, I = false) {
    {
      const Z = {
        font: o,
        s: S,
        wrap: I
      };
      d(p, T, Z, "w");
      const y = {
        font: o,
        s: S,
        wrap: I,
        col: "#ffff00"
      };
      d(p, T, y, "y").setAttribute("aria-hidden", "true");
    }
  }
  return {
    bt: d,
    paint: A,
    label2: m,
    paintAll(p = false) {
      for (const T of K) {
        if (!p || T._bt.wrap) {
          A(T);
        }
      }
    },
    reset() {
      {
        K.length = 0;
      }
    }
  };
}
export function mount(a, K, D) {
  const d = {
    kpalD: function (N) {
      return N();
    },
    GLOyS: function (N, C) {
      return N !== C;
    },
    sxdmz: "BhLBe",
    ZnrFi: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    hDJJr: "canvas",
    khInU: "aria-hidden",
    dkaob: "true",
    QPzWg: function (N, C, Q, M, b) {
      return N(C, Q, M, b);
    },
    XIVlA: function (N, C) {
      return N * C;
    },
    QVFEN: function (N, C) {
      return N + C;
    },
    FBDLu: function (N, C) {
      return N * C;
    },
    KWBdC: "entry",
    jDYQB: function (N, C) {
      return N + C;
    },
    edaXZ: function (N, C) {
      return N < C;
    },
    aTOSS: function (N, C) {
      return N >= C;
    },
    MPbGS: function (N, C) {
      return N(C);
    },
    mdRwa: "snd_menumove",
    JKZAk: function (N) {
      return N();
    },
    wUErW: function (N, C) {
      return N !== C;
    },
    dLwEs: "cjKHf",
    OpDfJ: "snd_select",
    aqTuL: function (N, C) {
      return N !== C;
    },
    XNrje: "kzNxW",
    FcKZd: "khiZA",
    Sxtmp: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    QKeMw: function (N, C) {
      return N === C;
    },
    QWVUQ: "page",
    ZwAEx: function (N, C) {
      return N === C;
    },
    WaItg: "home",
    fTStO: "button",
    Ijdqh: "btn",
    LmpQk: function (N, C) {
      return N === C;
    },
    COKkL: "aria-label",
    mBKQI: function (N, C) {
      return N || C;
    },
    KlCdJ: "fnt_main",
    CwQAy: "pointerdown",
    xtGYw: "pointerup",
    WkDap: "mousedown",
    iazZN: "touchstart",
    bGYXZ: "function",
    iHUyA: "click",
    GEEHg: function (N, C) {
      return N < C;
    },
    OtNOf: function (N, C) {
      return N > C;
    },
    DaVTI: function (N, C) {
      return N * C;
    },
    RTXTI: function (N, C) {
      return N + C;
    },
    cVXBp: function (N, C, Q) {
      return N(C, Q);
    },
    ySapH: function (N, C, Q) {
      return N(C, Q);
    },
    erWnt: "dr-updates-style",
    pflRg: "style",
    fUdDD: function (N, C) {
      return N !== C;
    },
    ijMQp: "LdbAp",
    uOqFX: function (N) {
      return N();
    },
    vFGyI: "t-L",
    gtUOo: "t-W",
    eWcvn: "t-S",
    Fshya: function (N, C) {
      return N === C;
    },
    BbEPw: "app",
    QPrpL: function (N, C) {
      return N === C;
    },
    uzzSV: "eKGzI",
    Pqjug: "div",
    OsmUJ: "box",
    OGQlt: "azGau",
    lybhn: " fill",
    tMdwV: "2px solid #fff",
    ROyeZ: "#000",
    DfGWW: "12px",
    LnPwt: "wheel",
    Dnmcj: "contextmenu",
    pVzJx: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    NfSCF: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    gcgQg: "head",
    DTwWZ: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    BOUHS: "margin:0;font:inherit",
    KzHsX: "dru-title",
    mueoS: "UPDATE NOTES",
    Irksj: "fnt_mainbig",
    UGIMP: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    frMcq: function (N, C) {
      return N + C;
    },
    thjSe: " BETA",
    PGHYL: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    oZqiZ: "body",
    QANUv: "list",
    WFXhw: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    mclGm: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    asauO: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    XyEIY: "foot",
    dfsSF: function (N, C) {
      return N === C;
    },
    bFZNH: "TAP AN UPDATE TO READ IT",
    PuQlc: function (N, C) {
      return N + C;
    },
    oLXHD: "Z: READ   ",
    qSVZv: "X: CLOSE",
    Qxjts: "ARROWS: MOVE",
    fmahg: "TAP < > FOR OTHER UPDATES",
    rhqFg: "X: BACK   < >: OTHER UPDATES",
    BuTfH: function (N, C, Q, M, b) {
      return N(C, Q, M, b);
    },
    pAQIA: "keys",
    lIFrA: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    iOGLD: "btns",
    uYQsB: function (N, C) {
      return N === C;
    },
    XsiCx: "XOkFW",
    KVDBu: "mMjIl",
    ETQDo: function (N, C, Q, M, b, h) {
      return N(C, Q, M, b, h);
    },
    HPjZa: "Newer update",
    TovBI: function (N, C) {
      return N <= C;
    },
    QYFVr: "Older update",
    XrBax: function (N, C) {
      return N - C;
    },
    WYwSb: "BACK",
    bKCgn: "Back to all updates",
    FBhmV: function (N, C) {
      return N === C;
    },
    iQRXJ: function (N, C, Q, M, b, h) {
      return N(C, Q, M, b, h);
    },
    TreNG: "CLOSE",
    MyexI: "Close the update notes",
    RSycy: function (N, C, Q, M, b, h) {
      return N(C, Q, M, b, h);
    },
    HDqdQ: "BACK TO THE SIMULATOR",
    hJkvM: "Back to the simulator",
    vkQtS: function (N, C) {
      return N(C);
    },
    MZMFh: function (N, C) {
      return N === C;
    },
    awSdx: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    iGsHf: function (N, C) {
      return N(C);
    },
    WkJpw: function (N, C) {
      return N(C);
    },
    wLcVg: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    MyiQc: "card",
    WFPJu: function (N, C) {
      return N + C;
    },
    gEgwn: function (N, C) {
      return N + C;
    },
    MnloE: function (N, C) {
      return N + C;
    },
    ueQBT: function (N, C) {
      return N + C;
    },
    vJGhK: function (N, C) {
      return N + C;
    },
    UJyso: function (N, C) {
      return N + C;
    },
    CcmeW: "Version ",
    cSDvH: function (N, C, Q) {
      return N(C, Q);
    },
    zYTxl: function (N, C) {
      return N(C);
    },
    CxVMu: ", new",
    iMhhe: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    azFLB: "meta",
    kkBOH: "span",
    zHfUw: "soul",
    VYrnS: function (N, C, Q, M, b, h) {
      return N(C, Q, M, b, h);
    },
    ZKwva: function (N, C) {
      return N === C;
    },
    DKLfx: "line",
    IAaRP: "   ",
    RuKdo: function (N, C) {
      return N(C);
    },
    SjKhw: "NEW",
    jMrlE: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    AnFGZ: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    EECvr: function (N, C) {
      return N + C;
    },
    DoPTC: function (N, C) {
      return N > C;
    },
    GtcfI: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    jHBnJ: function (N, C) {
      return N + C;
    },
    pOLUe: " more",
    iRprC: "pointerenter",
    TQGiT: "focus",
    NVEDr: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    Xpdpt: "Updates, newest first",
    Whqzh: "article",
    yBfks: "aria-labelledby",
    EUJlK: "dru-etitle",
    jhyTa: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    vPMiV: "top",
    XttXo: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    IfjWh: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    YfPBY: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    OIsBR: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    ftzzd: function (N, C) {
      return N + C;
    },
    tOZhQ: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    RiWzA: "notes",
    LoxTD: function (N, C) {
      return N + C;
    },
    GucMo: function (N, C) {
      return N > C;
    },
    NyvYG: function (N, C) {
      return N + C;
    },
    Hzpcp: function (N, C) {
      return N !== C;
    },
    sFYws: "rQMvm",
    fCKhe: "WPcDG",
    YYKEC: function (N, C) {
      return N(C);
    },
    yARPQ: function (N, C) {
      return N && C;
    },
    vlvtU: function (N, C) {
      return N + C;
    },
    xVhee: function (N, C) {
      return N < C;
    },
    fOHGk: function (N, C) {
      return N + C;
    },
    JrLsk: function (N, C) {
      return N + C;
    },
    hiKee: "source-in",
    nMIWu: function (N, C) {
      return N === C;
    },
    QzNFC: "ApeGy",
    WeJzK: "RwgEY",
    oslqd: function (N) {
      return N();
    },
    jBbqR: "wwmnl",
    hGbZS: function (N, C) {
      return N - C;
    },
    bvlcc: function (N, C) {
      return N - C;
    },
    UhuPE: function (N, C) {
      return N + C;
    },
    xxNtu: function (N, C) {
      return N < C;
    },
    nHYEo: function (N, C) {
      return N + C;
    },
    hHLEe: function (N, C) {
      return N - C;
    },
    jeUDE: function (N, C) {
      return N === C;
    },
    dvJqm: "JdvUF",
    bczPV: "5|4|2|0|7|3|6|1",
    sJKOq: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    OAkoI: function (N, C) {
      return N !== C;
    },
    oXnFS: function (N, C) {
      return N + C;
    },
    AzKvA: function (N, C) {
      return N >= C;
    },
    mCZFr: function (N, C) {
      return N(C);
    },
    lpCZX: function (N, C) {
      return N(C);
    },
    bZihe: function (N, C) {
      return N(C);
    },
    BxKkE: function (N, C) {
      return N(C);
    },
    ySPDS: "4|7|3|2|0|6|5|1",
    YUXgK: function (N) {
      return N();
    },
    ZJFsP: function (N, C) {
      return N + C;
    },
    wGJuI: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    IsbyL: function (N, C) {
      return N - C;
    },
    OawDF: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    NesMC: function (N, C, Q) {
      return N(C, Q);
    },
    xzSsF: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    ShjRp: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    fovog: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    tdxfJ: function (N, C) {
      return N === C;
    },
    OcMPJ: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    LfhOb: function (N, C) {
      return N + C;
    },
    LeiRh: function (N, C) {
      return N + C;
    },
    tzVzC: function (N, C) {
      return N + C;
    },
    Wcklf: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    RvCWg: function (N, C) {
      return N === C;
    },
    LaKoM: function (N, C) {
      return N > C;
    },
    crrGO: function (N, C) {
      return N + C;
    },
    rFPWO: function (N, C) {
      return N - C;
    },
    teYdK: function (N, C) {
      return N - C;
    },
    MgoGo: function (N, C) {
      return N + C;
    },
    rOkSa: function (N, C) {
      return N - C;
    },
    pLxMn: function (N, C) {
      return N + C;
    },
    msYcW: function (N, C) {
      return N - C;
    },
    xtUQt: "resize",
    MLDLC: function (N, C) {
      return N(C);
    },
    naQNS: function (N, C) {
      return N >= C;
    },
    cIiYE: function (N, C) {
      return N >= C;
    },
    Ezqte: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    oLFiM: function (N, C) {
      return N + C;
    },
    rfMJK: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    KREwC: function (N, C, Q, M, b, h) {
      return N(C, Q, M, b, h);
    },
    WqNXP: function (N, C) {
      return N + C;
    },
    ZhgMO: function (N, C) {
      return N + C;
    },
    LVgla: "ArrowDown",
    PRPEh: function (N, C) {
      return N === C;
    },
    pdwNO: function (N, C) {
      return N === C;
    },
    vuDqF: "ArrowUp",
    QLLwx: "ArrowLeft",
    BQrIR: "ArrowRight",
    dVOre: function (N, C) {
      return N === C;
    },
    izBXP: function (N, C) {
      return N === C;
    },
    yaluN: function (N, C) {
      return N === C;
    },
    nETqN: "Enter",
    QhFnx: function (N, C) {
      return N === C;
    },
    cPOAs: function (N, C) {
      return N === C;
    },
    FAbux: "Escape",
    naiaY: function (N, C) {
      return N === C;
    },
    MBXvT: "Backspace",
    xbQUZ: function (N, C) {
      return N === C;
    },
    pvRYz: "Dsojv",
    CDBeI: "iJfHy",
    ypWge: function (N, C) {
      return N || C;
    },
    dpgKM: function (N, C) {
      return N !== C;
    },
    oIXTK: "zbOcZ",
    QIfWt: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    lwNRZ: "Home",
    dWZxL: function (N, C) {
      return N === C;
    },
    hIMVW: "NnJwU",
    QVoXE: function (N, C) {
      return N === C;
    },
    kopvr: "End",
    pgJWk: "kOHyn",
    XILJL: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    ZYTae: "Riyfl",
    jmLol: "NoWaI",
    CaRqE: function (N, C) {
      return N !== C;
    },
    yARiV: function (N, C) {
      return N !== C;
    },
    oPnaI: function (N, C) {
      return N(C);
    },
    tPqLe: function (N, C) {
      return N === C;
    },
    nZQzZ: "xyrcK",
    EDjGp: "nSyJw",
    aCPOw: function (N, C) {
      return N(C);
    },
    eZozr: function (N, C) {
      return N === C;
    },
    sdWBy: "xPuPe",
    HJJeQ: "JybWC",
    qpBMr: function (N, C) {
      return N(C);
    },
    CZrSu: function (N) {
      return N();
    },
    vdIlX: function (N, C) {
      return N !== C;
    },
    HfkrS: "tMtpO",
    IJXRN: "FMyCx",
    DKgJm: function (N, C) {
      return N === C;
    },
    aszJL: "PageDown",
    FvnXV: function (N, C) {
      return N === C;
    },
    yanev: function (N, C) {
      return N - C;
    },
    SsFFN: "PageUp",
    iAyMZ: "UlXgB",
    PktWI: "wMKBX",
    WgIZi: function (N, C) {
      return N === C;
    },
    arvaq: "vdyJM",
    KxTeL: "ftQds",
    dCtgS: function (N) {
      return N();
    },
    wdHBI: function (N, C) {
      return N < C;
    },
    PWoGq: function (N, C) {
      return N === C;
    },
    tWKOM: function (N, C) {
      return N === C;
    },
    VNEGG: "kYWQq",
    lVMAb: "MuRal",
    OCOhj: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    TpWya: function (N, C, Q, M) {
      return N(C, Q, M);
    },
    TabdI: function (N, C) {
      return N - C;
    },
    LYrvz: function (N, C) {
      return N(C);
    },
    hedQL: "UztfS",
    JXheA: "IUSQN",
    fdnqV: "RWqsx",
    VuDmZ: "DmCTS",
    ftogs: function (N, C) {
      return N(C);
    },
    OeYHS: function (N) {
      return N();
    },
    vsemR: function (N, C) {
      return N(C);
    },
    IkqYV: function (N, C) {
      return N === C;
    },
    OzNeG: function (N) {
      return N();
    },
    LLZsl: function (N, C, Q) {
      return N(C, Q);
    },
    XQuSP: function (N, C, Q) {
      return N(C, Q);
    },
    lrEcC: function (N) {
      return N();
    },
    EmEjA: "dr-updates",
    FeFxQ: function (N, C) {
      return N === C;
    },
    dvSOa: "still",
    MieiI: function (N, C, Q) {
      return N(C, Q);
    },
    qVcfj: function (N) {
      return N();
    }
  };
  mountStyle();
  const A = (K && Array.isArray(K.updates) ? K.updates : []).filter(N => N && N.version);
  const m = D.F;
  const p = textKit(m);
  const T = p.bt;
  const o = p.label2;
  const I = {
    view: "list",
    sel: 0,
    open: -1,
    tier: "L",
    scrollList: 0
  };
  const r = I;
  const P = N => !!D.seen && cmpVersion(N.version, D.seen) > 0;
  const Z = (N, C, Q) => {
    const M = document.createElement(N);
    if (C) {
      M.className = C;
    }
    if (Q) {
      Q.appendChild(M);
    }
    return M;
  };
  const y = N => {
    {
      try {
        if (D.sound) {
          D.sound(N);
        }
      } catch (M) {}
    }
  };
  a.id = "dr-updates";
  a.classList.add(D.home === "app" ? "app" : "page");
  if (D.home === "app") {
    for (const N of ["pointerdown", "pointerup", "mousedown", "touchstart", "wheel", "click", "contextmenu"]) {
      a.addEventListener(N, C => C.stopPropagation(), {
        passive: true
      });
    }
  }
  if (D.still) {
    a.classList.add("still");
  }
  function j(C, Q, M) {
    const b = Z("canvas", "th", C);
    b.setAttribute("aria-hidden", "true");
    const h = dpr();
    paintThumb(b, Q, D, M * h);
    b.style.width = THUMB_W * M + "px";
    b.style.height = THUMB_H * M + "px";
    return b;
  }
  let X = null;
  let k = null;
  let W = [];
  let B = null;
  function V(C, Q, M, h, x) {
    {
      const E = Z(D.home === "page" && h === "home" ? "a" : "button", "btn", C);
      if (E.tagName === "A") {
        E.href = "/";
      } else {
        E.type = "button";
      }
      E.setAttribute("aria-label", d.mBKQI(x, Q));
      o(E, Q, "fnt_main", M);
      for (const J of ["pointerdown", "pointerup", "mousedown", "touchstart"]) {
        E.addEventListener(J, v => v.stopPropagation(), {
          passive: true
        });
      }
      if (typeof h === "function") {
        E.addEventListener("click", v => {
          {
            v.preventDefault();
            y("snd_select");
            h();
          }
        });
      }
      return E;
    }
  }
  function H() {
    const Q = k ? k.scrollTop : 0;
    r.tier = tierOf();
    p.reset();
    W = [];
    a.classList.remove("t-L", "t-W", "t-S");
    a.classList.add("t-" + r.tier);
    a.textContent = "";
    const M = r.tier === "L";
    const b = M ? 2 : 1;
    const x = M ? 2 : 1;
    if (D.home === "app") {
      {
        const G2 = Z("div", "bk", a);
        G2.addEventListener("click", () => {
          if (D.close) {
            D.close();
          }
        });
      }
    }
    X = Z("div", "box", a);
    const s = (M ? 2 : 1) * dpr();
    const O = frameDataURL(D.box, s);
    if (O) {
      {
        X.style.borderImageSource = "url(" + O + ")";
        X.style.borderImageSlice = 16 * s + " fill";
      }
    } else {
      X.style.border = "2px solid #fff";
      X.style.background = "#000";
      X.style.padding = "12px";
    }
    for (const G3 of ["pointerdown", "pointerup", "mousedown", "touchstart", "wheel", "contextmenu"]) {
      X.addEventListener(G3, G4 => G4.stopPropagation(), {
        passive: true
      });
    }
    const f = Z("div", "in", X);
    const E = Z("div", "head", f);
    const J = Z(D.home === "page" ? "h1" : "h2", "", E);
    J.style.cssText = "margin:0;font:inherit";
    J.id = "dru-title";
    T(J, "UPDATE NOTES", {
      font: "fnt_mainbig",
      s: M ? 2 : 1
    });
    const v = {
      col: "#808080",
      s: 1
    };
    if (A[0]) {
      T(E, "v" + A[0].version + " BETA", v);
    }
    k = Z("div", "body", f);
    k.tabIndex = -1;
    if (r.view === "list") {
      l(k, b, x);
    } else {
      e(k, b, x);
    }
    const g = Z("div", "foot", f);
    const z = r.view === "list" ? D.touch ? "TAP AN UPDATE TO READ IT" : "Z: READ   " + (D.home === "app" ? "X: CLOSE" : "ARROWS: MOVE") : D.touch ? "TAP < > FOR OTHER UPDATES" : "X: BACK   < >: OTHER UPDATES";
    const G0 = {
      col: "#808080",
      s: 1
    };
    T(g, z, G0, "keys");
    B = Z("div", "btns", g);
    if (r.view === "entry") {
      {
        const G4 = V(B, "<", b, () => R(-1), "Newer update");
        if (r.open <= 0) {
          G4.disabled = true;
        }
        const G5 = V(B, ">", b, () => R(1), "Older update");
        if (r.open >= A.length - 1) {
          G5.disabled = true;
        }
        V(B, "BACK", b, () => Y(), "Back to all updates");
      }
    } else if (D.home === "app") {
      V(B, "CLOSE", b, () => {
        if (D.close) {
          D.close();
        }
      }, "Close the update notes");
    } else {
      V(B, "BACK TO THE SIMULATOR", b, "home", "Back to the simulator");
    }
    p.paintAll();
    requestAnimationFrame(() => p.paintAll(true));
    if (r.view === "list") {
      k.scrollTop = r.scrollList;
      w(r.sel, false, true);
    } else {
      k.scrollTop = Q && r.keepEntryTop ? Q : 0;
    }
    r.keepEntryTop = false;
  }
  function l(C, Q, M) {
    const b = Z("ul", "list", C);
    b.setAttribute("aria-label", "Updates, newest first");
    A.forEach((h, x) => {
      const O = Z("li", "", b);
      const f = Z("button", "card", O);
      f.type = "button";
      f.setAttribute("aria-label", "Version " + h.version + ", " + h.title + ", " + dateLabel(h.date, true) + (P(h) ? ", new" : "") + ". " + (h.tags || []).join(", "));
      j(f, h, M);
      const E = Z("div", "meta", f);
      const J = Z("div", "tl", E);
      Z("span", "soul", J).innerHTML = SOUL_SVG;
      const v = Z("div", "tt", J);
      o(v, h.title.toUpperCase(), r.tier === "L" ? "fnt_mainbig" : "fnt_main", 1, true);
      const g = Z("div", "line", E);
      const z = {
        col: "#808080",
        s: 1
      };
      T(g, "v" + h.version + "   " + dateLabel(h.date), z);
      const G0 = {
        col: "#ffff00",
        s: 1
      };
      if (P(h)) {
        T(g, "NEW", G0);
      }
      const G1 = r.tier === "L" ? 2 : r.tier === "W" ? 1 : 0;
      if (G1) {
        const G2 = Z("div", "ex", E);
        for (const G4 of (h.notes || []).slice(0, G1)) {
          T(G2, "* " + G4, {
            s: 1,
            wrap: true
          });
        }
        const G3 = {
          col: "#808080",
          s: 1
        };
        if ((h.notes || []).length > G1) {
          T(G2, "+ " + (h.notes.length - G1) + " more", G3);
        }
      }
      f.addEventListener("pointerenter", () => w(x, false));
      f.addEventListener("focus", () => w(x, false));
      f.addEventListener("click", () => {
        y("snd_select");
        u(x);
      });
      W.push(f);
    });
  }
  function e(C, Q, M) {
    const b = A[r.open];
    if (!b) {
      return;
    }
    const h = Z("article", "entry", C);
    h.setAttribute("aria-labelledby", "dru-etitle");
    const x = Z("div", "top", h);
    j(x, b, M);
    const s = Z("div", "eh", x);
    const O = Z("h3", "", s);
    O.id = "dru-etitle";
    O.style.cssText = "margin:0;font:inherit";
    T(O, b.title.toUpperCase(), {
      font: "fnt_mainbig",
      s: r.tier === "L" ? 2 : 1,
      wrap: true
    });
    const f = Z("div", "line", s);
    const E = {
      col: "#808080",
      s: Q
    };
    T(f, "v" + b.version + "   " + dateLabel(b.date), E);
    const J = {
      col: "#ffff00",
      s: Q
    };
    if (P(b)) {
      T(f, "NEW", J);
    }
    const v = Z("ul", "notes", h);
    for (const g of b.notes || []) {
      T(Z("li", "", v), "* " + g, {
        s: Q,
        wrap: true
      });
    }
  }
  function w(C, Q = true, M = false) {
    {
      if (!W.length) {
        return;
      }
      C = Math.max(0, Math.min(W.length - 1, C));
      if (Q && C !== r.sel) {
        y("snd_menumove");
      }
      r.sel = C;
      W.forEach((x, s) => x.classList.toggle("sel", s === C));
      if (d.yARPQ(M, k)) {
        const x = W[C];
        const s = x.offsetTop - k.offsetTop;
        const O = s + x.offsetHeight;
        if (s < k.scrollTop) {
          k.scrollTop = s - 6;
        } else if (O > k.scrollTop + k.clientHeight) {
          k.scrollTop = O - k.clientHeight + 6;
        }
      }
    }
  }
  function u(C) {
    const Q = {
      BRsTW: "canvas",
      QLzpH: "source-in"
    };
    const M = Q;
    {
      if (!A[C]) {
        return;
      }
      if (r.view === "list" && k) {
        r.scrollList = k.scrollTop;
      }
      r.view = "entry";
      r.open = C;
      r.sel = C;
      H();
      if (D.onOpen) {
        D.onOpen(A[C].version);
      }
      try {
        {
          k.focus({
            preventScroll: true
          });
        }
      } catch (x) {}
    }
  }
  function Y() {
    {
      const M = "5|4|2|0|7|3|6|1".split("|");
      let b = 0;
      while (true) {
        switch (M[b++]) {
          case "0":
            H();
            continue;
          case "1":
            return true;
          case "2":
            r.sel = r.open;
            continue;
          case "3":
            if (D.onOpen) {
              D.onOpen(null);
            }
            continue;
          case "4":
            r.view = "list";
            continue;
          case "5":
            if (r.view !== "entry") {
              return false;
            }
            continue;
          case "6":
            try {
              W[r.sel].focus({
                preventScroll: true
              });
            } catch (x) {}
            continue;
          case "7":
            w(r.sel, false, true);
            continue;
        }
        break;
      }
    }
  }
  function R(C) {
    if (r.view !== "entry") {
      return;
    }
    const Q = r.open + C;
    if (Q < 0 || Q >= A.length) {
      return;
    }
    y("snd_menumove");
    u(Q);
  }
  function q(C) {
    const M = C.key;
    if (C.ctrlKey || C.metaKey || C.altKey) {
      return false;
    }
    const b = M === "ArrowDown" || M === "s" || M === "S";
    const h = M === "ArrowUp" || M === "w" || M === "W";
    const x = M === "ArrowLeft" || M === "a" || M === "A" || M === "[" || M === "q" || M === "Q";
    const s = M === "ArrowRight" || M === "d" || M === "D" || M === "]" || M === "e" || M === "E";
    const O = M === "z" || M === "Z" || M === "Enter" || M === " ";
    const f = M === "x" || M === "X" || M === "Escape" || M === "Backspace";
    if (r.view === "list") {
      {
        if (d.ypWge(b, s)) {
          w(r.sel + 1, true, true);
          return true;
        }
        if (d.mBKQI(h, x)) {
          {
            w(r.sel - 1, true, true);
            return true;
          }
        }
        if (M === "Home") {
          {
            w(0, true, true);
            return true;
          }
        }
        if (M === "End") {
          {
            w(A.length - 1, true, true);
            return true;
          }
        }
        if (O) {
          {
            const J = document.activeElement;
            if (J && J.classList && J.classList.contains("btn") && a.contains(J) && M !== "z" && M !== "Z") {
              J.click();
              return true;
            }
            y("snd_select");
            u(r.sel);
            return true;
          }
        }
        if (f && D.home === "app") {
          {
            y("snd_menumove");
            if (D.close) {
              D.close();
            }
            return true;
          }
        }
        return false;
      }
    }
    if (f || M === "z" || M === "Z") {
      {
        y("snd_menumove");
        Y();
        return true;
      }
    }
    if (x) {
      {
        R(-1);
        return true;
      }
    }
    if (s) {
      {
        R(1);
        return true;
      }
    }
    if (b) {
      k.scrollTop += 40;
      return true;
    }
    if (h) {
      k.scrollTop -= 40;
      return true;
    }
    if (M === "PageDown" || M === " ") {
      k.scrollTop += k.clientHeight - 30;
      return true;
    }
    if (M === "PageUp") {
      {
        k.scrollTop -= k.clientHeight - 30;
        return true;
      }
    }
    if (M === "Enter") {
      const v = document.activeElement;
      if (v && v.classList && v.classList.contains("btn") && a.contains(v)) {
        {
          v.click();
          return true;
        }
      }
      Y();
      return true;
    }
    return false;
  }
  function i(C) {
    if (r.view === "list") {
      {
        if (C.down || C.right) {
          w(r.sel + 1, true, true);
        } else if (C.up || C.left) {
          w(r.sel - 1, true, true);
        } else if (C.confirm) {
          y("snd_select");
          u(r.sel);
        } else if (C.cancel) {
          {
            y("snd_menumove");
            if (D.close) {
              D.close();
            }
          }
        }
        return;
      }
    }
    if (C.cancel || C.confirm) {
      {
        y("snd_menumove");
        Y();
      }
    } else if (C.left) {
      R(-1);
    } else if (C.right) {
      R(1);
    } else if (C.upHeld) {
      k.scrollTop -= 8;
    } else if (C.downHeld) {
      k.scrollTop += 8;
    }
  }
  let n = 0;
  const L = () => {
    clearTimeout(n);
    n = setTimeout(() => {
      if (r.view === "entry") {
        r.keepEntryTop = true;
      }
      if (r.view === "list" && k) {
        r.scrollList = k.scrollTop;
      }
      H();
    }, 120);
  };
  addEventListener("resize", L);
  const c = D.start ? A.findIndex(C => C.version === String(D.start).replace(/^v/, "")) : -1;
  if (c >= 0) {
    r.view = "entry";
    r.open = r.sel = c;
  }
  H();
  return {
    key: q,
    pad: i,
    render: H,
    open: u,
    back: Y,
    view: () => r.view,
    sel: () => r.sel,
    destroy() {
      removeEventListener("resize", L);
      clearTimeout(n);
      a.textContent = "";
    }
  };
}
