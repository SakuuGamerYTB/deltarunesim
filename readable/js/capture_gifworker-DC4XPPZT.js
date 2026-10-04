const C = function () {
  ;
  let v = true;
  return function (e, b) {
    const L = v ? function () {
      if (b) {
        const R = b.apply(e, arguments);
        b = null;
        return R;
      }
    } : function () {};
    v = false;
    return L;
  };
}();
import { a as z, l as u } from "./c-PIEPTJTC.js";
u();
var Bytes = class f {
  constructor(v = 65536) {
    this.buf = new Uint8Array(v);
    this.n = 0;
  }
  grow(v) {
    if (this.n + v <= this.buf.length) {
      return;
    }
    let b = this.buf.length * 2;
    while (b < this.n + v) {
      b *= 2;
    }
    let L = new Uint8Array(b);
    L.set(this.buf.subarray(0, this.n));
    this.buf = L;
  }
  byte(v) {
    this.grow(1);
    this.buf[this.n++] = v & 255;
  }
  word(v) {
    this.grow(2);
    this.buf[this.n++] = v & 255;
    this.buf[this.n++] = v >> 8 & 255;
  }
  str(v) {
    for (let b = 0; b < v.length; b++) {
      this.byte(v.charCodeAt(b));
    }
  }
  bytes(v) {
    this.grow(v.length);
    this.buf.set(v, this.n);
    this.n += v.length;
  }
  result() {
    return this.buf.slice(0, this.n);
  }
};
z(Bytes, "Bytes");
var T = Bytes;
function buildPalette(L) {
  let R = new Map();
  let O = true;
  let i = -1;
  v: for (let E1 of L) {
    let E2 = E1;
    for (let E3 = 0; E3 < E2.length; E3 += 4) {
      let E4 = E2[E3] << 16 | E2[E3 + 1] << 8 | E2[E3 + 2];
      if (E4 !== i && (i = E4, !R.has(E4))) {
        if (R.size >= 255) {
          O = false;
          break v;
        }
        R.set(E4, R.size);
      }
    }
  }
  let Z = new Uint8Array(768);
  if (O) {
    for (let [E7, E8] of R) {
      Z[E8 * 3] = E7 >> 16;
      Z[E8 * 3 + 1] = E7 >> 8 & 255;
      Z[E8 * 3 + 2] = E7 & 255;
    }
    let E5 = -1;
    let E6 = 0;
    return {
      palette: Z,
      colours: R.size,
      exact: true,
      map: (E9, EE, Ea) => {
        let Ey = E9 << 16 | EE << 8 | Ea;
        if (Ey !== E5) {
          E5 = Ey;
          E6 = R.get(Ey);
        }
        return E6;
      }
    };
  }
  let H = new Uint32Array(32768);
  for (let E9 of L) {
    for (let EE = 0; EE < E9.length; EE += 4) {
      H[E9[EE] >> 3 << 10 | E9[EE + 1] >> 3 << 5 | E9[EE + 2] >> 3]++;
    }
  }
  let q = [];
  for (let Ea = 0; Ea < 32768; Ea++) {
    if (H[Ea]) {
      q.push(Ea);
    }
  }
  let G = (Ey, EK) => EK === 0 ? Ey >> 10 : EK === 1 ? Ey >> 5 & 31 : Ey & 31;
  let F = [{
    bins: q,
    lo: 0,
    hi: q.length
  }];
  let x = Ey => {
    let EK = [31, 31, 31];
    let El = [0, 0, 0];
    let Ev = 0;
    for (let Ez = Ey.lo; Ez < Ey.hi; Ez++) {
      let Eu = Ey.bins[Ez];
      for (let EQ = 0; EQ < 3; EQ++) {
        let Ec = G(Eu, EQ);
        if (Ec < EK[EQ]) {
          EK[EQ] = Ec;
        }
        if (Ec > El[EQ]) {
          El[EQ] = Ec;
        }
      }
      Ev += H[Eu];
    }
    let EC = [El[0] - EK[0], El[1] - EK[1], El[2] - EK[2]];
    let Eo = EC[0] >= EC[1] && EC[0] >= EC[2] ? 0 : EC[1] >= EC[2] ? 1 : 2;
    return {
      axis: Eo,
      range: EC[Eo],
      cnt: Ev
    };
  };
  while (F.length < 255) {
    let Ey = -1;
    let EK = -1;
    for (let EQ = 0; EQ < F.length; EQ++) {
      let Ec = F[EQ];
      if (Ec.hi - Ec.lo < 2) {
        continue;
      }
      Ec.info = Ec.info || x(Ec);
      let ET = Ec.info.range * Math.log2(1 + Ec.info.cnt);
      if (Ec.info.range > 0 && ET > EK) {
        EK = ET;
        Ey = EQ;
      }
    }
    if (Ey < 0) {
      break;
    }
    let El = F[Ey];
    let Ev = El.info.axis;
    let EC = El.bins.slice(El.lo, El.hi).sort((En, EP) => G(En, Ev) - G(EP, Ev));
    let Eo = El.info.cnt / 2;
    let Ez = 0;
    let Eu = 1;
    for (let En = 0; En < EC.length - 1; En++) {
      Ez += H[EC[En]];
      if (Ez >= Eo) {
        Eu = En + 1;
        break;
      }
      Eu = En + 1;
    }
    F.splice(Ey, 1, {
      bins: EC,
      lo: 0,
      hi: Eu
    }, {
      bins: EC,
      lo: Eu,
      hi: EC.length
    });
  }
  F.forEach((EP, EB) => {
    let ED = 0;
    let Ej = 0;
    let Ed = 0;
    let EW = 0;
    for (let EY = EP.lo; EY < EP.hi; EY++) {
      let EN = EP.bins[EY];
      let Ew = H[EN];
      ED += ((EN >> 10) * 8 + 4) * Ew;
      Ej += ((EN >> 5 & 31) * 8 + 4) * Ew;
      Ed += ((EN & 31) * 8 + 4) * Ew;
      EW += Ew;
    }
    Z[EB * 3] = Math.round(ED / EW);
    Z[EB * 3 + 1] = Math.round(Ej / EW);
    Z[EB * 3 + 2] = Math.round(Ed / EW);
  });
  let I = F.length;
  let E0 = new Int16Array(32768).fill(-1);
  return {
    palette: Z,
    colours: I,
    exact: false,
    map: (EP, EB, ED) => {
      let Ej = EP >> 3 << 10 | EB >> 3 << 5 | ED >> 3;
      let Ed = E0[Ej];
      if (Ed >= 0) {
        return Ed;
      }
      let EW = 1000000000;
      Ed = 0;
      for (let EY = 0; EY < I; EY++) {
        let EN = Z[EY * 3] - EP;
        let Ew = Z[EY * 3 + 1] - EB;
        let Ee = Z[EY * 3 + 2] - ED;
        let Eb = EN * EN * 3 + Ew * Ew * 4 + Ee * Ee * 2;
        if (Eb < EW) {
          EW = Eb;
          Ed = EY;
        }
      }
      E0[Ej] = Ed;
      return Ed;
    }
  };
}
z(buildPalette, "buildPalette");
var B = new Int32Array(1048576);
var j = 0;
function lzwEncode(v, L, R) {
  let A = 1 << L;
  let O = A + 1;
  let i = L + 1;
  let Z = O + 1;
  let H = 0;
  let q = 0;
  let G = new Uint8Array(255);
  let F = 0;
  let x = E1 => {
    G[F++] = E1;
    if (F === 255) {
      R.byte(255);
      R.bytes(G);
      F = 0;
    }
  };
  let I = E1 => {
    H |= E1 << q;
    q += i;
    while (q >= 8) {
      x(H & 255);
      H >>>= 8;
      q -= 8;
    }
  };
  let E0 = () => {
    j++;
    if (j >= 524288) {
      B.fill(0);
      j = 1;
    }
    i = L + 1;
    Z = O + 1;
  };
  R.byte(L);
  E0();
  I(A);
  if (!v.length) {
    I(O);
  } else {
    let E1 = v[0];
    let E2 = () => j * 4096;
    let E3 = E2();
    for (let E4 = 1; E4 < v.length; E4++) {
      let E5 = v[E4];
      let E6 = E1 * 256 + E5;
      let E7 = B[E6];
      if (E7 >= E3 && E7 < E3 + 4096) {
        E1 = E7 - E3;
        continue;
      }
      I(E1);
      if (Z < 4096) {
        B[E6] = E3 + Z;
        if (Z === 1 << i && i < 12) {
          i++;
        }
        Z++;
      } else {
        I(A);
        E0();
        E3 = E2();
      }
      E1 = E5;
    }
    I(E1);
    I(O);
  }
  if (q > 0) {
    x(H & 255);
  }
  if (F) {
    R.byte(F);
    R.bytes(G.subarray(0, F));
  }
  R.byte(0);
}
z(lzwEncode, "lzwEncode");
function encodeGif(v, L, O, i, Z) {
  if (!v.length) {
    throw new Error("no frames");
  }
  let H = buildPalette(v);
  let q = new T(1048576);
  q.str("GIF89a");
  q.word(L);
  q.word(O);
  q.byte(247);
  q.byte(0);
  q.byte(0);
  q.bytes(H.palette);
  q.byte(33);
  q.byte(255);
  q.byte(11);
  q.str("NETSCAPE2.0");
  q.byte(3);
  q.byte(1);
  q.word(0);
  q.byte(0);
  let G = L * O;
  let F = null;
  let x = new Uint8Array(G);
  for (let E0 = 0; E0 < v.length; E0++) {
    let E1 = v[E0];
    for (let EE = 0, Ea = 0; EE < G; EE++, Ea += 4) {
      x[EE] = H.map(E1[Ea], E1[Ea + 1], E1[Ea + 2]);
    }
    let E2 = 0;
    let E3 = 0;
    let E4 = L - 1;
    let E5 = O - 1;
    let E6 = false;
    if (F) {
      E2 = L;
      E3 = O;
      E4 = -1;
      E5 = -1;
      for (let Ey = 0; Ey < O; Ey++) {
        let EK = Ey * L;
        for (let El = 0; El < L; El++) {
          if (x[EK + El] !== F[EK + El]) {
            if (El < E2) {
              E2 = El;
            }
            if (El > E4) {
              E4 = El;
            }
            if (Ey < E3) {
              E3 = Ey;
            }
            if (Ey > E5) {
              E5 = Ey;
            }
          }
        }
      }
      E6 = true;
      if (E4 < 0) {
        E2 = 0;
        E3 = 0;
        E4 = 0;
        E5 = 0;
      }
    }
    let E7 = E4 - E2 + 1;
    let E8 = E5 - E3 + 1;
    let E9 = new Uint8Array(E7 * E8);
    for (let Ev = 0; Ev < E8; Ev++) {
      let EC = (Ev + E3) * L + E2;
      let Eo = Ev * E7;
      for (let Ez = 0; Ez < E7; Ez++) {
        let Eu = x[EC + Ez];
        E9[Eo + Ez] = E6 && F[EC + Ez] === Eu ? 255 : Eu;
      }
    }
    q.byte(33);
    q.byte(249);
    q.byte(4);
    q.byte((E6 ? 1 : 0) | 4);
    q.word(i[E0] ?? 7);
    q.byte(255);
    q.byte(0);
    q.byte(44);
    q.word(E2);
    q.word(E3);
    q.word(E7);
    q.word(E8);
    q.byte(0);
    lzwEncode(E9, 8, q);
    F ||= new Uint8Array(G);
    F.set(x);
    if (Z) {
      Z((E0 + 1) / v.length);
    }
  }
  q.byte(59);
  let I = q.result();
  I.colours = H.colours;
  I.exact = H.exact;
  return I;
}
z(encodeGif, "encodeGif");
function decodeGif(Z) {
  let E0 = 0;
  let E1 = () => Z[E0++];
  let E2 = () => {
    let EK = Z[E0] | Z[E0 + 1] << 8;
    E0 += 2;
    return EK;
  };
  let E3 = String.fromCharCode(...Z.subarray(0, 6));
  if (E3 !== "GIF89a" && E3 !== "GIF87a") {
    throw new Error("not a GIF");
  }
  E0 = 6;
  let E4 = E2();
  let E5 = E2();
  let E6 = E1();
  E1();
  E1();
  let E7 = null;
  if (E6 & 128) {
    let EK = 2 << (E6 & 7);
    E7 = Z.subarray(E0, E0 + EK * 3);
    E0 += EK * 3;
  }
  let E8 = new Uint8ClampedArray(E4 * E5 * 4);
  let E9 = [];
  let EE = [];
  let Ea = -1;
  let Ey = 0;
  while (true) {
    let El = E1();
    if (El === 59 || El === undefined) {
      break;
    }
    if (El === 33) {
      if (E1() === 249) {
        E1();
        let Ef = E1();
        Ey = E2();
        let Eh = E1();
        Ea = Ef & 1 ? Eh : -1;
        E1();
      } else {
        for (let EA = E1(); EA; EA = E1()) {
          E0 += EA;
        }
      }
      continue;
    }
    if (El !== 44) {
      throw new Error("bad block " + El);
    }
    let Ev = E2();
    let EC = E2();
    let Eo = E2();
    let Ez = E2();
    let Eu = E1();
    let EQ = E7;
    if (Eu & 128) {
      let EO = 2 << (Eu & 7);
      EQ = Z.subarray(E0, E0 + EO * 3);
      E0 += EO * 3;
    }
    let Ec = E1();
    let ET = [];
    for (let Ei = E1(); Ei; Ei = E1()) {
      for (let EJ = 0; EJ < Ei; EJ++) {
        ET.push(Z[E0 + EJ]);
      }
      E0 += Ei;
    }
    let En = 1 << Ec;
    let EP = En + 1;
    let EB = Ec + 1;
    let ED = EP + 1;
    let Ej = 0;
    let Ed = -1;
    let EW = new Int32Array(4096);
    let EY = new Uint8Array(4096);
    let EN = new Uint16Array(4096);
    for (let Es = 0; Es < En; Es++) {
      EW[Es] = -1;
      EY[Es] = Es;
      EN[Es] = 1;
    }
    let Ew = new Uint8Array(Eo * Ez);
    let Ee = 0;
    let Eb = () => {
      let EZ = 0;
      for (let ES = 0; ES < EB; ES++, Ej++) {
        if (ET[Ej >> 3] & 1 << (Ej & 7)) {
          EZ |= 1 << ES;
        }
      }
      return EZ;
    };
    let EL = EZ => {
      while (EW[EZ] >= 0) {
        EZ = EW[EZ];
      }
      return EY[EZ];
    };
    let ER = EZ => {
      let ES = EN[EZ];
      let Em = Ee + ES - 1;
      while (EZ >= 0) {
        if (Em < Ew.length) {
          Ew[Em] = EY[EZ];
        }
        Em--;
        EZ = EW[EZ];
      }
      Ee += ES;
    };
    while (Ej + EB <= ET.length * 8) {
      let EZ = Eb();
      if (EZ === En) {
        EB = Ec + 1;
        ED = EP + 1;
        Ed = -1;
        continue;
      }
      if (EZ === EP) {
        break;
      }
      if (Ed < 0) {
        ER(EZ);
        Ed = EZ;
        continue;
      }
      if (EZ < ED) {
        ER(EZ);
        if (ED < 4096) {
          EW[ED] = Ed;
          EY[ED] = EL(EZ);
          EN[ED] = EN[Ed] + 1;
          ED++;
        }
      } else {
        if (ED < 4096) {
          EW[ED] = Ed;
          EY[ED] = EL(Ed);
          EN[ED] = EN[Ed] + 1;
          ED++;
        }
        ER(EZ);
      }
      if (ED === 1 << EB && EB < 12) {
        EB++;
      }
      Ed = EZ;
    }
    for (let ES = 0; ES < Ez; ES++) {
      for (let Em = 0; Em < Eo; Em++) {
        let EH = Ew[ES * Eo + Em];
        if (EH === Ea) {
          continue;
        }
        let EU = ((ES + EC) * E4 + Em + Ev) * 4;
        E8[EU] = EQ[EH * 3];
        E8[EU + 1] = EQ[EH * 3 + 1];
        E8[EU + 2] = EQ[EH * 3 + 2];
        E8[EU + 3] = 255;
      }
    }
    E9.push(E8.slice());
    EE.push(Ey);
    Ea = -1;
  }
  return {
    w: E4,
    h: E5,
    frames: E9,
    delays: EE
  };
}
z(decodeGif, "decodeGif");
var w = typeof self !== "undefined" && typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (w) {
  self.onmessage = v => {
    let b = v.data || {};
    if (b.type === "encode") {
      try {
        let L = b.frames.map(i => new Uint8Array(i));
        let R = -1;
        let A = encodeGif(L, b.w, b.h, b.delays, i => {
          let s = Math.floor(i * 100);
          if (s !== R) {
            R = s;
            self.postMessage({
              type: "progress",
              p: i
            });
          }
        });
        let O = A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength);
        self.postMessage({
          type: "done",
          bytes: O,
          colours: A.colours,
          exact: A.exact
        }, [O]);
      } catch (i) {
        self.postMessage({
          type: "error",
          message: i && i.message || String(i)
        });
      }
    }
  };
}
export { buildPalette, decodeGif, encodeGif, lzwEncode };
