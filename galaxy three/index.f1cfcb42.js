function e(e, t, n, i) {
    Object.defineProperty(e, t, {
        get: n,
        set: i,
        enumerable: !0,
        configurable: !0
    })
}
function t(e) {
    return e && e.__esModule ? e.default : e
}
var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}
  , i = {}
  , r = {}
  , s = n.parcelRequire94c2;
null == s && ((s = function(e) {
    if (e in i)
        return i[e].exports;
    if (e in r) {
        var t = r[e];
        delete r[e];
        var n = {
            id: e,
            exports: {}
        };
        return i[e] = n,
        t.call(n.exports, n, n.exports),
        n.exports
    }
    var s = new Error("Cannot find module '" + e + "'");
    throw s.code = "MODULE_NOT_FOUND",
    s
}
).register = function(e, t) {
    r[e] = t
}
,
n.parcelRequire94c2 = s),
s.register("27Lyk", (function(t, n) {
    var i, r;
    e(t.exports, "register", (()=>i), (e=>i = e)),
    e(t.exports, "resolve", (()=>r), (e=>r = e));
    var s = {};
    i = function(e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++)
            s[t[n]] = e[t[n]]
    }
    ,
    r = function(e) {
        var t = s[e];
        if (null == t)
            throw new Error("Could not resolve bundle with id " + e);
        return t
    }
}
)),
s("27Lyk").register(JSON.parse('{"eBMRR":"index.f1cfcb42.js","45yJs":"particle.dcae8b12.webp"}'));
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const a = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
}
  , o = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
};
class l {
    addEventListener(e, t) {
        void 0 === this._listeners && (this._listeners = {});
        const n = this._listeners;
        void 0 === n[e] && (n[e] = []),
        -1 === n[e].indexOf(t) && n[e].push(t)
    }
    hasEventListener(e, t) {
        if (void 0 === this._listeners)
            return !1;
        const n = this._listeners;
        return void 0 !== n[e] && -1 !== n[e].indexOf(t)
    }
    removeEventListener(e, t) {
        if (void 0 === this._listeners)
            return;
        const n = this._listeners[e];
        if (void 0 !== n) {
            const e = n.indexOf(t);
            -1 !== e && n.splice(e, 1)
        }
    }
    dispatchEvent(e) {
        if (void 0 === this._listeners)
            return;
        const t = this._listeners[e.type];
        if (void 0 !== t) {
            e.target = this;
            const n = t.slice(0);
            for (let t = 0, i = n.length; t < i; t++)
                n[t].call(this, e);
            e.target = null
        }
    }
}
const c = [];
for (let e = 0; e < 256; e++)
    c[e] = (e < 16 ? "0" : "") + e.toString(16);
let h = 1234567;
const u = Math.PI / 180
  , d = 180 / Math.PI;
function p() {
    const e = 4294967295 * Math.random() | 0
      , t = 4294967295 * Math.random() | 0
      , n = 4294967295 * Math.random() | 0
      , i = 4294967295 * Math.random() | 0;
    return (c[255 & e] + c[e >> 8 & 255] + c[e >> 16 & 255] + c[e >> 24 & 255] + "-" + c[255 & t] + c[t >> 8 & 255] + "-" + c[t >> 16 & 15 | 64] + c[t >> 24 & 255] + "-" + c[63 & n | 128] + c[n >> 8 & 255] + "-" + c[n >> 16 & 255] + c[n >> 24 & 255] + c[255 & i] + c[i >> 8 & 255] + c[i >> 16 & 255] + c[i >> 24 & 255]).toLowerCase()
}
function m(e, t, n) {
    return Math.max(t, Math.min(n, e))
}
function f(e, t) {
    return (e % t + t) % t
}
function g(e, t, n) {
    return (1 - n) * e + n * t
}
function v(e) {
    return 0 == (e & e - 1) && 0 !== e
}
function _(e) {
    return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2))
}
function x(e) {
    return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
}
var y = Object.freeze({
    __proto__: null,
    DEG2RAD: u,
    RAD2DEG: d,
    generateUUID: p,
    clamp: m,
    euclideanModulo: f,
    mapLinear: function(e, t, n, i, r) {
        return i + (e - t) * (r - i) / (n - t)
    },
    inverseLerp: function(e, t, n) {
        return e !== t ? (n - e) / (t - e) : 0
    },
    lerp: g,
    damp: function(e, t, n, i) {
        return g(e, t, 1 - Math.exp(-n * i))
    },
    pingpong: function(e, t=1) {
        return t - Math.abs(f(e, 2 * t) - t)
    },
    smoothstep: function(e, t, n) {
        return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * (3 - 2 * e)
    },
    smootherstep: function(e, t, n) {
        return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10)
    },
    randInt: function(e, t) {
        return e + Math.floor(Math.random() * (t - e + 1))
    },
    randFloat: function(e, t) {
        return e + Math.random() * (t - e)
    },
    randFloatSpread: function(e) {
        return e * (.5 - Math.random())
    },
    seededRandom: function(e) {
        void 0 !== e && (h = e);
        let t = h += 1831565813;
        return t = Math.imul(t ^ t >>> 15, 1 | t),
        t ^= t + Math.imul(t ^ t >>> 7, 61 | t),
        ((t ^ t >>> 14) >>> 0) / 4294967296
    },
    degToRad: function(e) {
        return e * u
    },
    radToDeg: function(e) {
        return e * d
    },
    isPowerOfTwo: v,
    ceilPowerOfTwo: _,
    floorPowerOfTwo: x,
    setQuaternionFromProperEuler: function(e, t, n, i, r) {
        const s = Math.cos
          , a = Math.sin
          , o = s(n / 2)
          , l = a(n / 2)
          , c = s((t + i) / 2)
          , h = a((t + i) / 2)
          , u = s((t - i) / 2)
          , d = a((t - i) / 2)
          , p = s((i - t) / 2)
          , m = a((i - t) / 2);
        switch (r) {
        case "XYX":
            e.set(o * h, l * u, l * d, o * c);
            break;
        case "YZY":
            e.set(l * d, o * h, l * u, o * c);
            break;
        case "ZXZ":
            e.set(l * u, l * d, o * h, o * c);
            break;
        case "XZX":
            e.set(o * h, l * m, l * p, o * c);
            break;
        case "YXY":
            e.set(l * p, o * h, l * m, o * c);
            break;
        case "ZYZ":
            e.set(l * m, l * p, o * h, o * c);
            break;
        default:
            console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
        }
    },
    normalize: function(e, t) {
        switch (t.constructor) {
        case Float32Array:
            return e;
        case Uint16Array:
            return Math.round(65535 * e);
        case Uint8Array:
            return Math.round(255 * e);
        case Int16Array:
            return Math.round(32767 * e);
        case Int8Array:
            return Math.round(127 * e);
        default:
            throw new Error("Invalid component type.")
        }
    },
    denormalize: function(e, t) {
        switch (t.constructor) {
        case Float32Array:
            return e;
        case Uint16Array:
            return e / 65535;
        case Uint8Array:
            return e / 255;
        case Int16Array:
            return Math.max(e / 32767, -1);
        case Int8Array:
            return Math.max(e / 127, -1);
        default:
            throw new Error("Invalid component type.")
        }
    }
});
class M {
    constructor(e=0, t=0) {
        this.isVector2 = !0,
        this.x = e,
        this.y = t
    }
    get width() {
        return this.x
    }
    set width(e) {
        this.x = e
    }
    get height() {
        return this.y
    }
    set height(e) {
        this.y = e
    }
    set(e, t) {
        return this.x = e,
        this.y = t,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this
    }
    add(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(e, t)) : (this.x += e.x,
        this.y += e.y,
        this)
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this
    }
    sub(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(e, t)) : (this.x -= e.x,
        this.y -= e.y,
        this)
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    applyMatrix3(e) {
        const t = this.x
          , n = this.y
          , i = e.elements;
        return this.x = i[0] * t + i[3] * n + i[6],
        this.y = i[1] * t + i[4] * n + i[7],
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y
    }
    cross(e) {
        return this.x * e.y - this.y * e.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x
          , n = this.y - e.y;
        return t * t + n * n
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e
    }
    fromBufferAttribute(e, t, n) {
        return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),
        this.x = e.getX(t),
        this.y = e.getY(t),
        this
    }
    rotateAround(e, t) {
        const n = Math.cos(t)
          , i = Math.sin(t)
          , r = this.x - e.x
          , s = this.y - e.y;
        return this.x = r * n - s * i + e.x,
        this.y = r * i + s * n + e.y,
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y
    }
}
class b {
    constructor() {
        this.isMatrix3 = !0,
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    set(e, t, n, i, r, s, a, o, l) {
        const c = this.elements;
        return c[0] = e,
        c[1] = i,
        c[2] = a,
        c[3] = t,
        c[4] = r,
        c[5] = o,
        c[6] = n,
        c[7] = s,
        c[8] = l,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    }
    copy(e) {
        const t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
    }
    setFromMatrix4(e) {
        const t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements
          , i = t.elements
          , r = this.elements
          , s = n[0]
          , a = n[3]
          , o = n[6]
          , l = n[1]
          , c = n[4]
          , h = n[7]
          , u = n[2]
          , d = n[5]
          , p = n[8]
          , m = i[0]
          , f = i[3]
          , g = i[6]
          , v = i[1]
          , _ = i[4]
          , x = i[7]
          , y = i[2]
          , M = i[5]
          , b = i[8];
        return r[0] = s * m + a * v + o * y,
        r[3] = s * f + a * _ + o * M,
        r[6] = s * g + a * x + o * b,
        r[1] = l * m + c * v + h * y,
        r[4] = l * f + c * _ + h * M,
        r[7] = l * g + c * x + h * b,
        r[2] = u * m + d * v + p * y,
        r[5] = u * f + d * _ + p * M,
        r[8] = u * g + d * x + p * b,
        this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
        t[3] *= e,
        t[6] *= e,
        t[1] *= e,
        t[4] *= e,
        t[7] *= e,
        t[2] *= e,
        t[5] *= e,
        t[8] *= e,
        this
    }
    determinant() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , i = e[2]
          , r = e[3]
          , s = e[4]
          , a = e[5]
          , o = e[6]
          , l = e[7]
          , c = e[8];
        return t * s * c - t * a * l - n * r * c + n * a * o + i * r * l - i * s * o
    }
    invert() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , i = e[2]
          , r = e[3]
          , s = e[4]
          , a = e[5]
          , o = e[6]
          , l = e[7]
          , c = e[8]
          , h = c * s - a * l
          , u = a * o - c * r
          , d = l * r - s * o
          , p = t * h + n * u + i * d;
        if (0 === p)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const m = 1 / p;
        return e[0] = h * m,
        e[1] = (i * l - c * n) * m,
        e[2] = (a * n - i * s) * m,
        e[3] = u * m,
        e[4] = (c * t - i * o) * m,
        e[5] = (i * r - a * t) * m,
        e[6] = d * m,
        e[7] = (n * o - l * t) * m,
        e[8] = (s * t - n * r) * m,
        this
    }
    transpose() {
        let e;
        const t = this.elements;
        return e = t[1],
        t[1] = t[3],
        t[3] = e,
        e = t[2],
        t[2] = t[6],
        t[6] = e,
        e = t[5],
        t[5] = t[7],
        t[7] = e,
        this
    }
    getNormalMatrix(e) {
        return this.setFromMatrix4(e).invert().transpose()
    }
    transposeIntoArray(e) {
        const t = this.elements;
        return e[0] = t[0],
        e[1] = t[3],
        e[2] = t[6],
        e[3] = t[1],
        e[4] = t[4],
        e[5] = t[7],
        e[6] = t[2],
        e[7] = t[5],
        e[8] = t[8],
        this
    }
    setUvTransform(e, t, n, i, r, s, a) {
        const o = Math.cos(r)
          , l = Math.sin(r);
        return this.set(n * o, n * l, -n * (o * s + l * a) + s + e, -i * l, i * o, -i * (-l * s + o * a) + a + t, 0, 0, 1),
        this
    }
    scale(e, t) {
        const n = this.elements;
        return n[0] *= e,
        n[3] *= e,
        n[6] *= e,
        n[1] *= t,
        n[4] *= t,
        n[7] *= t,
        this
    }
    rotate(e) {
        const t = Math.cos(e)
          , n = Math.sin(e)
          , i = this.elements
          , r = i[0]
          , s = i[3]
          , a = i[6]
          , o = i[1]
          , l = i[4]
          , c = i[7];
        return i[0] = t * r + n * o,
        i[3] = t * s + n * l,
        i[6] = t * a + n * c,
        i[1] = -n * r + t * o,
        i[4] = -n * s + t * l,
        i[7] = -n * a + t * c,
        this
    }
    translate(e, t) {
        const n = this.elements;
        return n[0] += e * n[2],
        n[3] += e * n[5],
        n[6] += e * n[8],
        n[1] += t * n[2],
        n[4] += t * n[5],
        n[7] += t * n[8],
        this
    }
    equals(e) {
        const t = this.elements
          , n = e.elements;
        for (let e = 0; e < 9; e++)
            if (t[e] !== n[e])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 9; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        const n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e
    }
    clone() {
        return (new this.constructor).fromArray(this.elements)
    }
}
function w(e) {
    for (let t = e.length - 1; t >= 0; --t)
        if (e[t] > 65535)
            return !0;
    return !1
}
Int8Array,
Uint8Array,
Uint8ClampedArray,
Int16Array,
Uint16Array,
Int32Array,
Uint32Array,
Float32Array,
Float64Array;
function S(e) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", e)
}
function T(e) {
    return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4)
}
function E(e) {
    return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055
}
const A = {
    srgb: {
        "srgb-linear": T
    },
    "srgb-linear": {
        srgb: E
    }
}
  , L = {
    legacyMode: !0,
    get workingColorSpace() {
        return "srgb-linear"
    },
    set workingColorSpace(e) {
        console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
    },
    convert: function(e, t, n) {
        if (this.legacyMode || t === n || !t || !n)
            return e;
        if (A[t] && void 0 !== A[t][n]) {
            const i = A[t][n];
            return e.r = i(e.r),
            e.g = i(e.g),
            e.b = i(e.b),
            e
        }
        throw new Error("Unsupported color space conversion.")
    },
    fromWorkingColorSpace: function(e, t) {
        return this.convert(e, this.workingColorSpace, t)
    },
    toWorkingColorSpace: function(e, t) {
        return this.convert(e, t, this.workingColorSpace)
    }
}
  , C = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}
  , R = {
    r: 0,
    g: 0,
    b: 0
}
  , P = {
    h: 0,
    s: 0,
    l: 0
}
  , D = {
    h: 0,
    s: 0,
    l: 0
};
function I(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - n) : e
}
function N(e, t) {
    return t.r = e.r,
    t.g = e.g,
    t.b = e.b,
    t
}
class z {
    constructor(e, t, n) {
        return this.isColor = !0,
        this.r = 1,
        this.g = 1,
        this.b = 1,
        void 0 === t && void 0 === n ? this.set(e) : this.setRGB(e, t, n)
    }
    set(e) {
        return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e),
        this
    }
    setScalar(e) {
        return this.r = e,
        this.g = e,
        this.b = e,
        this
    }
    setHex(e, t="srgb") {
        return e = Math.floor(e),
        this.r = (e >> 16 & 255) / 255,
        this.g = (e >> 8 & 255) / 255,
        this.b = (255 & e) / 255,
        L.toWorkingColorSpace(this, t),
        this
    }
    setRGB(e, t, n, i="srgb-linear") {
        return this.r = e,
        this.g = t,
        this.b = n,
        L.toWorkingColorSpace(this, i),
        this
    }
    setHSL(e, t, n, i="srgb-linear") {
        if (e = f(e, 1),
        t = m(t, 0, 1),
        n = m(n, 0, 1),
        0 === t)
            this.r = this.g = this.b = n;
        else {
            const i = n <= .5 ? n * (1 + t) : n + t - n * t
              , r = 2 * n - i;
            this.r = I(r, i, e + 1 / 3),
            this.g = I(r, i, e),
            this.b = I(r, i, e - 1 / 3)
        }
        return L.toWorkingColorSpace(this, i),
        this
    }
    setStyle(e, t="srgb") {
        function n(t) {
            void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
        }
        let i;
        if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
            let e;
            const r = i[1]
              , s = i[2];
            switch (r) {
            case "rgb":
            case "rgba":
                if (e = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))
                    return this.r = Math.min(255, parseInt(e[1], 10)) / 255,
                    this.g = Math.min(255, parseInt(e[2], 10)) / 255,
                    this.b = Math.min(255, parseInt(e[3], 10)) / 255,
                    L.toWorkingColorSpace(this, t),
                    n(e[4]),
                    this;
                if (e = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))
                    return this.r = Math.min(100, parseInt(e[1], 10)) / 100,
                    this.g = Math.min(100, parseInt(e[2], 10)) / 100,
                    this.b = Math.min(100, parseInt(e[3], 10)) / 100,
                    L.toWorkingColorSpace(this, t),
                    n(e[4]),
                    this;
                break;
            case "hsl":
            case "hsla":
                if (e = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) {
                    const i = parseFloat(e[1]) / 360
                      , r = parseInt(e[2], 10) / 100
                      , s = parseInt(e[3], 10) / 100;
                    return n(e[4]),
                    this.setHSL(i, r, s, t)
                }
            }
        } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
            const e = i[1]
              , n = e.length;
            if (3 === n)
                return this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255,
                this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255,
                this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255,
                L.toWorkingColorSpace(this, t),
                this;
            if (6 === n)
                return this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255,
                this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255,
                this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255,
                L.toWorkingColorSpace(this, t),
                this
        }
        return e && e.length > 0 ? this.setColorName(e, t) : this
    }
    setColorName(e, t="srgb") {
        const n = C[e.toLowerCase()];
        return void 0 !== n ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e),
        this
    }
    clone() {
        return new this.constructor(this.r,this.g,this.b)
    }
    copy(e) {
        return this.r = e.r,
        this.g = e.g,
        this.b = e.b,
        this
    }
    copySRGBToLinear(e) {
        return this.r = T(e.r),
        this.g = T(e.g),
        this.b = T(e.b),
        this
    }
    copyLinearToSRGB(e) {
        return this.r = E(e.r),
        this.g = E(e.g),
        this.b = E(e.b),
        this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this),
        this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this),
        this
    }
    getHex(e="srgb") {
        return L.fromWorkingColorSpace(N(this, R), e),
        m(255 * R.r, 0, 255) << 16 ^ m(255 * R.g, 0, 255) << 8 ^ m(255 * R.b, 0, 255) << 0
    }
    getHexString(e="srgb") {
        return ("000000" + this.getHex(e).toString(16)).slice(-6)
    }
    getHSL(e, t="srgb-linear") {
        L.fromWorkingColorSpace(N(this, R), t);
        const n = R.r
          , i = R.g
          , r = R.b
          , s = Math.max(n, i, r)
          , a = Math.min(n, i, r);
        let o, l;
        const c = (a + s) / 2;
        if (a === s)
            o = 0,
            l = 0;
        else {
            const e = s - a;
            switch (l = c <= .5 ? e / (s + a) : e / (2 - s - a),
            s) {
            case n:
                o = (i - r) / e + (i < r ? 6 : 0);
                break;
            case i:
                o = (r - n) / e + 2;
                break;
            case r:
                o = (n - i) / e + 4
            }
            o /= 6
        }
        return e.h = o,
        e.s = l,
        e.l = c,
        e
    }
    getRGB(e, t="srgb-linear") {
        return L.fromWorkingColorSpace(N(this, R), t),
        e.r = R.r,
        e.g = R.g,
        e.b = R.b,
        e
    }
    getStyle(e="srgb") {
        return L.fromWorkingColorSpace(N(this, R), e),
        "srgb" !== e ? `color(${e} ${R.r} ${R.g} ${R.b})` : `rgb(${255 * R.r | 0},${255 * R.g | 0},${255 * R.b | 0})`
    }
    offsetHSL(e, t, n) {
        return this.getHSL(P),
        P.h += e,
        P.s += t,
        P.l += n,
        this.setHSL(P.h, P.s, P.l),
        this
    }
    add(e) {
        return this.r += e.r,
        this.g += e.g,
        this.b += e.b,
        this
    }
    addColors(e, t) {
        return this.r = e.r + t.r,
        this.g = e.g + t.g,
        this.b = e.b + t.b,
        this
    }
    addScalar(e) {
        return this.r += e,
        this.g += e,
        this.b += e,
        this
    }
    sub(e) {
        return this.r = Math.max(0, this.r - e.r),
        this.g = Math.max(0, this.g - e.g),
        this.b = Math.max(0, this.b - e.b),
        this
    }
    multiply(e) {
        return this.r *= e.r,
        this.g *= e.g,
        this.b *= e.b,
        this
    }
    multiplyScalar(e) {
        return this.r *= e,
        this.g *= e,
        this.b *= e,
        this
    }
    lerp(e, t) {
        return this.r += (e.r - this.r) * t,
        this.g += (e.g - this.g) * t,
        this.b += (e.b - this.b) * t,
        this
    }
    lerpColors(e, t, n) {
        return this.r = e.r + (t.r - e.r) * n,
        this.g = e.g + (t.g - e.g) * n,
        this.b = e.b + (t.b - e.b) * n,
        this
    }
    lerpHSL(e, t) {
        this.getHSL(P),
        e.getHSL(D);
        const n = g(P.h, D.h, t)
          , i = g(P.s, D.s, t)
          , r = g(P.l, D.l, t);
        return this.setHSL(n, i, r),
        this
    }
    equals(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    }
    fromArray(e, t=0) {
        return this.r = e[t],
        this.g = e[t + 1],
        this.b = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.r,
        e[t + 1] = this.g,
        e[t + 2] = this.b,
        e
    }
    fromBufferAttribute(e, t) {
        return this.r = e.getX(t),
        this.g = e.getY(t),
        this.b = e.getZ(t),
        !0 === e.normalized && (this.r /= 255,
        this.g /= 255,
        this.b /= 255),
        this
    }
    toJSON() {
        return this.getHex()
    }
    *[Symbol.iterator]() {
        yield this.r,
        yield this.g,
        yield this.b
    }
}
let O;
z.NAMES = C;
class F {
    static getDataURL(e) {
        if (/^data:/i.test(e.src))
            return e.src;
        if ("undefined" == typeof HTMLCanvasElement)
            return e.src;
        let t;
        if (e instanceof HTMLCanvasElement)
            t = e;
        else {
            void 0 === O && (O = S("canvas")),
            O.width = e.width,
            O.height = e.height;
            const n = O.getContext("2d");
            e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height),
            t = O
        }
        return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e),
        t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
    }
    static sRGBToLinear(e) {
        if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap) {
            const t = S("canvas");
            t.width = e.width,
            t.height = e.height;
            const n = t.getContext("2d");
            n.drawImage(e, 0, 0, e.width, e.height);
            const i = n.getImageData(0, 0, e.width, e.height)
              , r = i.data;
            for (let e = 0; e < r.length; e++)
                r[e] = 255 * T(r[e] / 255);
            return n.putImageData(i, 0, 0),
            t
        }
        if (e.data) {
            const t = e.data.slice(0);
            for (let e = 0; e < t.length; e++)
                t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(255 * T(t[e] / 255)) : t[e] = T(t[e]);
            return {
                data: t,
                width: e.width,
                height: e.height
            }
        }
        return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),
        e
    }
}
class U {
    constructor(e=null) {
        this.isSource = !0,
        this.uuid = p(),
        this.data = e,
        this.version = 0
    }
    set needsUpdate(e) {
        !0 === e && this.version++
    }
    toJSON(e) {
        const t = void 0 === e || "string" == typeof e;
        if (!t && void 0 !== e.images[this.uuid])
            return e.images[this.uuid];
        const n = {
            uuid: this.uuid,
            url: ""
        }
          , i = this.data;
        if (null !== i) {
            let e;
            if (Array.isArray(i)) {
                e = [];
                for (let t = 0, n = i.length; t < n; t++)
                    i[t].isDataTexture ? e.push(k(i[t].image)) : e.push(k(i[t]))
            } else
                e = k(i);
            n.url = e
        }
        return t || (e.images[this.uuid] = n),
        n
    }
}
function k(e) {
    return "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap ? F.getDataURL(e) : e.data ? {
        data: Array.prototype.slice.call(e.data),
        width: e.width,
        height: e.height,
        type: e.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."),
    {})
}
let B = 0;
class H extends l {
    constructor(e=H.DEFAULT_IMAGE, t=H.DEFAULT_MAPPING, n=1001, i=1001, r=1006, s=1008, a=1023, o=1009, l=1, c=3e3) {
        super(),
        this.isTexture = !0,
        Object.defineProperty(this, "id", {
            value: B++
        }),
        this.uuid = p(),
        this.name = "",
        this.source = new U(e),
        this.mipmaps = [],
        this.mapping = t,
        this.wrapS = n,
        this.wrapT = i,
        this.magFilter = r,
        this.minFilter = s,
        this.anisotropy = l,
        this.format = a,
        this.internalFormat = null,
        this.type = o,
        this.offset = new M(0,0),
        this.repeat = new M(1,1),
        this.center = new M(0,0),
        this.rotation = 0,
        this.matrixAutoUpdate = !0,
        this.matrix = new b,
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.encoding = c,
        this.userData = {},
        this.version = 0,
        this.onUpdate = null,
        this.isRenderTargetTexture = !1,
        this.needsPMREMUpdate = !1
    }
    get image() {
        return this.source.data
    }
    set image(e) {
        this.source.data = e
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(e) {
        return this.name = e.name,
        this.source = e.source,
        this.mipmaps = e.mipmaps.slice(0),
        this.mapping = e.mapping,
        this.wrapS = e.wrapS,
        this.wrapT = e.wrapT,
        this.magFilter = e.magFilter,
        this.minFilter = e.minFilter,
        this.anisotropy = e.anisotropy,
        this.format = e.format,
        this.internalFormat = e.internalFormat,
        this.type = e.type,
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        this.rotation = e.rotation,
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrix.copy(e.matrix),
        this.generateMipmaps = e.generateMipmaps,
        this.premultiplyAlpha = e.premultiplyAlpha,
        this.flipY = e.flipY,
        this.unpackAlignment = e.unpackAlignment,
        this.encoding = e.encoding,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this.needsUpdate = !0,
        this
    }
    toJSON(e) {
        const t = void 0 === e || "string" == typeof e;
        if (!t && void 0 !== e.textures[this.uuid])
            return e.textures[this.uuid];
        const n = {
            metadata: {
                version: 4.5,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(e).uuid,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        return "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
        t || (e.textures[this.uuid] = n),
        n
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    transformUv(e) {
        if (300 !== this.mapping)
            return e;
        if (e.applyMatrix3(this.matrix),
        e.x < 0 || e.x > 1)
            switch (this.wrapS) {
            case 1e3:
                e.x = e.x - Math.floor(e.x);
                break;
            case 1001:
                e.x = e.x < 0 ? 0 : 1;
                break;
            case 1002:
                1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
            }
        if (e.y < 0 || e.y > 1)
            switch (this.wrapT) {
            case 1e3:
                e.y = e.y - Math.floor(e.y);
                break;
            case 1001:
                e.y = e.y < 0 ? 0 : 1;
                break;
            case 1002:
                1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
            }
        return this.flipY && (e.y = 1 - e.y),
        e
    }
    set needsUpdate(e) {
        !0 === e && (this.version++,
        this.source.needsUpdate = !0)
    }
}
H.DEFAULT_IMAGE = null,
H.DEFAULT_MAPPING = 300;
class V {
    constructor(e=0, t=0, n=0, i=1) {
        this.isVector4 = !0,
        this.x = e,
        this.y = t,
        this.z = n,
        this.w = i
    }
    get width() {
        return this.z
    }
    set width(e) {
        this.z = e
    }
    get height() {
        return this.w
    }
    set height(e) {
        this.w = e
    }
    set(e, t, n, i) {
        return this.x = e,
        this.y = t,
        this.z = n,
        this.w = i,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this.w = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setW(e) {
        return this.w = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        case 3:
            this.w = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this.w = void 0 !== e.w ? e.w : 1,
        this
    }
    add(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(e, t)) : (this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this.w += e.w,
        this)
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this.w += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this.w = e.w + t.w,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this.w += e.w * t,
        this
    }
    sub(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(e, t)) : (this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this.w -= e.w,
        this)
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this.w -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this.w = e.w - t.w,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this.w *= e.w,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this.w *= e,
        this
    }
    applyMatrix4(e) {
        const t = this.x
          , n = this.y
          , i = this.z
          , r = this.w
          , s = e.elements;
        return this.x = s[0] * t + s[4] * n + s[8] * i + s[12] * r,
        this.y = s[1] * t + s[5] * n + s[9] * i + s[13] * r,
        this.z = s[2] * t + s[6] * n + s[10] * i + s[14] * r,
        this.w = s[3] * t + s[7] * n + s[11] * i + s[15] * r,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        const t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1,
        this.y = 0,
        this.z = 0) : (this.x = e.x / t,
        this.y = e.y / t,
        this.z = e.z / t),
        this
    }
    setAxisAngleFromRotationMatrix(e) {
        let t, n, i, r;
        const s = .01
          , a = .1
          , o = e.elements
          , l = o[0]
          , c = o[4]
          , h = o[8]
          , u = o[1]
          , d = o[5]
          , p = o[9]
          , m = o[2]
          , f = o[6]
          , g = o[10];
        if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
            if (Math.abs(c + u) < a && Math.abs(h + m) < a && Math.abs(p + f) < a && Math.abs(l + d + g - 3) < a)
                return this.set(1, 0, 0, 0),
                this;
            t = Math.PI;
            const e = (l + 1) / 2
              , o = (d + 1) / 2
              , v = (g + 1) / 2
              , _ = (c + u) / 4
              , x = (h + m) / 4
              , y = (p + f) / 4;
            return e > o && e > v ? e < s ? (n = 0,
            i = .707106781,
            r = .707106781) : (n = Math.sqrt(e),
            i = _ / n,
            r = x / n) : o > v ? o < s ? (n = .707106781,
            i = 0,
            r = .707106781) : (i = Math.sqrt(o),
            n = _ / i,
            r = y / i) : v < s ? (n = .707106781,
            i = .707106781,
            r = 0) : (r = Math.sqrt(v),
            n = x / r,
            i = y / r),
            this.set(n, i, r, t),
            this
        }
        let v = Math.sqrt((f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c));
        return Math.abs(v) < .001 && (v = 1),
        this.x = (f - p) / v,
        this.y = (h - m) / v,
        this.z = (u - c) / v,
        this.w = Math.acos((l + d + g - 1) / 2),
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this.w = Math.min(this.w, e.w),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this.w = Math.max(this.w, e.w),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this.w = Math.max(e.w, Math.min(t.w, this.w)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this.z = Math.max(e, Math.min(t, this.z)),
        this.w = Math.max(e, Math.min(t, this.w)),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this.w = Math.floor(this.w),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this.w = Math.ceil(this.w),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this.w = Math.round(this.w),
        this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
        this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
        this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this.w += (e.w - this.w) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this.w = e.w + (t.w - e.w) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this.w = e[t + 3],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e[t + 3] = this.w,
        e
    }
    fromBufferAttribute(e, t, n) {
        return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),
        this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this.w = e.getW(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this.w = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z,
        yield this.w
    }
}
class G extends l {
    constructor(e, t, n={}) {
        super(),
        this.isWebGLRenderTarget = !0,
        this.width = e,
        this.height = t,
        this.depth = 1,
        this.scissor = new V(0,0,e,t),
        this.scissorTest = !1,
        this.viewport = new V(0,0,e,t);
        const i = {
            width: e,
            height: t,
            depth: 1
        };
        this.texture = new H(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),
        this.texture.isRenderTargetTexture = !0,
        this.texture.flipY = !1,
        this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps,
        this.texture.internalFormat = void 0 !== n.internalFormat ? n.internalFormat : null,
        this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006,
        this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer,
        this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer,
        this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null,
        this.samples = void 0 !== n.samples ? n.samples : 0
    }
    setSize(e, t, n=1) {
        this.width === e && this.height === t && this.depth === n || (this.width = e,
        this.height = t,
        this.depth = n,
        this.texture.image.width = e,
        this.texture.image.height = t,
        this.texture.image.depth = n,
        this.dispose()),
        this.viewport.set(0, 0, e, t),
        this.scissor.set(0, 0, e, t)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(e) {
        this.width = e.width,
        this.height = e.height,
        this.depth = e.depth,
        this.viewport.copy(e.viewport),
        this.texture = e.texture.clone(),
        this.texture.isRenderTargetTexture = !0;
        const t = Object.assign({}, e.texture.image);
        return this.texture.source = new U(t),
        this.depthBuffer = e.depthBuffer,
        this.stencilBuffer = e.stencilBuffer,
        null !== e.depthTexture && (this.depthTexture = e.depthTexture.clone()),
        this.samples = e.samples,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
class W extends H {
    constructor(e=null, t=1, n=1, i=1) {
        super(null),
        this.isDataArrayTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: i
        },
        this.magFilter = 1003,
        this.minFilter = 1003,
        this.wrapR = 1001,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
class j extends H {
    constructor(e=null, t=1, n=1, i=1) {
        super(null),
        this.isData3DTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: i
        },
        this.magFilter = 1003,
        this.minFilter = 1003,
        this.wrapR = 1001,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
class q {
    constructor(e=0, t=0, n=0, i=1) {
        this.isQuaternion = !0,
        this._x = e,
        this._y = t,
        this._z = n,
        this._w = i
    }
    static slerp(e, t, n, i) {
        return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),
        n.slerpQuaternions(e, t, i)
    }
    static slerpFlat(e, t, n, i, r, s, a) {
        let o = n[i + 0]
          , l = n[i + 1]
          , c = n[i + 2]
          , h = n[i + 3];
        const u = r[s + 0]
          , d = r[s + 1]
          , p = r[s + 2]
          , m = r[s + 3];
        if (0 === a)
            return e[t + 0] = o,
            e[t + 1] = l,
            e[t + 2] = c,
            void (e[t + 3] = h);
        if (1 === a)
            return e[t + 0] = u,
            e[t + 1] = d,
            e[t + 2] = p,
            void (e[t + 3] = m);
        if (h !== m || o !== u || l !== d || c !== p) {
            let e = 1 - a;
            const t = o * u + l * d + c * p + h * m
              , n = t >= 0 ? 1 : -1
              , i = 1 - t * t;
            if (i > Number.EPSILON) {
                const r = Math.sqrt(i)
                  , s = Math.atan2(r, t * n);
                e = Math.sin(e * s) / r,
                a = Math.sin(a * s) / r
            }
            const r = a * n;
            if (o = o * e + u * r,
            l = l * e + d * r,
            c = c * e + p * r,
            h = h * e + m * r,
            e === 1 - a) {
                const e = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                o *= e,
                l *= e,
                c *= e,
                h *= e
            }
        }
        e[t] = o,
        e[t + 1] = l,
        e[t + 2] = c,
        e[t + 3] = h
    }
    static multiplyQuaternionsFlat(e, t, n, i, r, s) {
        const a = n[i]
          , o = n[i + 1]
          , l = n[i + 2]
          , c = n[i + 3]
          , h = r[s]
          , u = r[s + 1]
          , d = r[s + 2]
          , p = r[s + 3];
        return e[t] = a * p + c * h + o * d - l * u,
        e[t + 1] = o * p + c * u + l * h - a * d,
        e[t + 2] = l * p + c * d + a * u - o * h,
        e[t + 3] = c * p - a * h - o * u - l * d,
        e
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(e) {
        this._w = e,
        this._onChangeCallback()
    }
    set(e, t, n, i) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._w = i,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    }
    copy(e) {
        return this._x = e.x,
        this._y = e.y,
        this._z = e.z,
        this._w = e.w,
        this._onChangeCallback(),
        this
    }
    setFromEuler(e, t) {
        if (!e || !e.isEuler)
            throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
        const n = e._x
          , i = e._y
          , r = e._z
          , s = e._order
          , a = Math.cos
          , o = Math.sin
          , l = a(n / 2)
          , c = a(i / 2)
          , h = a(r / 2)
          , u = o(n / 2)
          , d = o(i / 2)
          , p = o(r / 2);
        switch (s) {
        case "XYZ":
            this._x = u * c * h + l * d * p,
            this._y = l * d * h - u * c * p,
            this._z = l * c * p + u * d * h,
            this._w = l * c * h - u * d * p;
            break;
        case "YXZ":
            this._x = u * c * h + l * d * p,
            this._y = l * d * h - u * c * p,
            this._z = l * c * p - u * d * h,
            this._w = l * c * h + u * d * p;
            break;
        case "ZXY":
            this._x = u * c * h - l * d * p,
            this._y = l * d * h + u * c * p,
            this._z = l * c * p + u * d * h,
            this._w = l * c * h - u * d * p;
            break;
        case "ZYX":
            this._x = u * c * h - l * d * p,
            this._y = l * d * h + u * c * p,
            this._z = l * c * p - u * d * h,
            this._w = l * c * h + u * d * p;
            break;
        case "YZX":
            this._x = u * c * h + l * d * p,
            this._y = l * d * h + u * c * p,
            this._z = l * c * p - u * d * h,
            this._w = l * c * h - u * d * p;
            break;
        case "XZY":
            this._x = u * c * h - l * d * p,
            this._y = l * d * h - u * c * p,
            this._z = l * c * p + u * d * h,
            this._w = l * c * h + u * d * p;
            break;
        default:
            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s)
        }
        return !1 !== t && this._onChangeCallback(),
        this
    }
    setFromAxisAngle(e, t) {
        const n = t / 2
          , i = Math.sin(n);
        return this._x = e.x * i,
        this._y = e.y * i,
        this._z = e.z * i,
        this._w = Math.cos(n),
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e) {
        const t = e.elements
          , n = t[0]
          , i = t[4]
          , r = t[8]
          , s = t[1]
          , a = t[5]
          , o = t[9]
          , l = t[2]
          , c = t[6]
          , h = t[10]
          , u = n + a + h;
        if (u > 0) {
            const e = .5 / Math.sqrt(u + 1);
            this._w = .25 / e,
            this._x = (c - o) * e,
            this._y = (r - l) * e,
            this._z = (s - i) * e
        } else if (n > a && n > h) {
            const e = 2 * Math.sqrt(1 + n - a - h);
            this._w = (c - o) / e,
            this._x = .25 * e,
            this._y = (i + s) / e,
            this._z = (r + l) / e
        } else if (a > h) {
            const e = 2 * Math.sqrt(1 + a - n - h);
            this._w = (r - l) / e,
            this._x = (i + s) / e,
            this._y = .25 * e,
            this._z = (o + c) / e
        } else {
            const e = 2 * Math.sqrt(1 + h - n - a);
            this._w = (s - i) / e,
            this._x = (r + l) / e,
            this._y = (o + c) / e,
            this._z = .25 * e
        }
        return this._onChangeCallback(),
        this
    }
    setFromUnitVectors(e, t) {
        let n = e.dot(t) + 1;
        return n < Number.EPSILON ? (n = 0,
        Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y,
        this._y = e.x,
        this._z = 0,
        this._w = n) : (this._x = 0,
        this._y = -e.z,
        this._z = e.y,
        this._w = n)) : (this._x = e.y * t.z - e.z * t.y,
        this._y = e.z * t.x - e.x * t.z,
        this._z = e.x * t.y - e.y * t.x,
        this._w = n),
        this.normalize()
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(m(this.dot(e), -1, 1)))
    }
    rotateTowards(e, t) {
        const n = this.angleTo(e);
        if (0 === n)
            return this;
        const i = Math.min(1, t / n);
        return this.slerp(e, i),
        this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this._onChangeCallback(),
        this
    }
    dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
        let e = this.length();
        return 0 === e ? (this._x = 0,
        this._y = 0,
        this._z = 0,
        this._w = 1) : (e = 1 / e,
        this._x = this._x * e,
        this._y = this._y * e,
        this._z = this._z * e,
        this._w = this._w * e),
        this._onChangeCallback(),
        this
    }
    multiply(e, t) {
        return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
        this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
    }
    premultiply(e) {
        return this.multiplyQuaternions(e, this)
    }
    multiplyQuaternions(e, t) {
        const n = e._x
          , i = e._y
          , r = e._z
          , s = e._w
          , a = t._x
          , o = t._y
          , l = t._z
          , c = t._w;
        return this._x = n * c + s * a + i * l - r * o,
        this._y = i * c + s * o + r * a - n * l,
        this._z = r * c + s * l + n * o - i * a,
        this._w = s * c - n * a - i * o - r * l,
        this._onChangeCallback(),
        this
    }
    slerp(e, t) {
        if (0 === t)
            return this;
        if (1 === t)
            return this.copy(e);
        const n = this._x
          , i = this._y
          , r = this._z
          , s = this._w;
        let a = s * e._w + n * e._x + i * e._y + r * e._z;
        if (a < 0 ? (this._w = -e._w,
        this._x = -e._x,
        this._y = -e._y,
        this._z = -e._z,
        a = -a) : this.copy(e),
        a >= 1)
            return this._w = s,
            this._x = n,
            this._y = i,
            this._z = r,
            this;
        const o = 1 - a * a;
        if (o <= Number.EPSILON) {
            const e = 1 - t;
            return this._w = e * s + t * this._w,
            this._x = e * n + t * this._x,
            this._y = e * i + t * this._y,
            this._z = e * r + t * this._z,
            this.normalize(),
            this._onChangeCallback(),
            this
        }
        const l = Math.sqrt(o)
          , c = Math.atan2(l, a)
          , h = Math.sin((1 - t) * c) / l
          , u = Math.sin(t * c) / l;
        return this._w = s * h + this._w * u,
        this._x = n * h + this._x * u,
        this._y = i * h + this._y * u,
        this._z = r * h + this._z * u,
        this._onChangeCallback(),
        this
    }
    slerpQuaternions(e, t, n) {
        return this.copy(e).slerp(t, n)
    }
    random() {
        const e = Math.random()
          , t = Math.sqrt(1 - e)
          , n = Math.sqrt(e)
          , i = 2 * Math.PI * Math.random()
          , r = 2 * Math.PI * Math.random();
        return this.set(t * Math.cos(i), n * Math.sin(r), n * Math.cos(r), t * Math.sin(i))
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    }
    fromArray(e, t=0) {
        return this._x = e[t],
        this._y = e[t + 1],
        this._z = e[t + 2],
        this._w = e[t + 3],
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._w,
        e
    }
    fromBufferAttribute(e, t) {
        return this._x = e.getX(t),
        this._y = e.getY(t),
        this._z = e.getZ(t),
        this._w = e.getW(t),
        this
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._w
    }
}
class X {
    constructor(e=0, t=0, n=0) {
        this.isVector3 = !0,
        this.x = e,
        this.y = t,
        this.z = n
    }
    set(e, t, n) {
        return void 0 === n && (n = this.z),
        this.x = e,
        this.y = t,
        this.z = n,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this
    }
    add(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
        this.addVectors(e, t)) : (this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this)
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this
    }
    sub(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
        this.subVectors(e, t)) : (this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this)
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this
    }
    multiply(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
        this.multiplyVectors(e, t)) : (this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this)
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this
    }
    multiplyVectors(e, t) {
        return this.x = e.x * t.x,
        this.y = e.y * t.y,
        this.z = e.z * t.z,
        this
    }
    applyEuler(e) {
        return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
        this.applyQuaternion($.setFromEuler(e))
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion($.setFromAxisAngle(e, t))
    }
    applyMatrix3(e) {
        const t = this.x
          , n = this.y
          , i = this.z
          , r = e.elements;
        return this.x = r[0] * t + r[3] * n + r[6] * i,
        this.y = r[1] * t + r[4] * n + r[7] * i,
        this.z = r[2] * t + r[5] * n + r[8] * i,
        this
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize()
    }
    applyMatrix4(e) {
        const t = this.x
          , n = this.y
          , i = this.z
          , r = e.elements
          , s = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
        return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * s,
        this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * s,
        this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * s,
        this
    }
    applyQuaternion(e) {
        const t = this.x
          , n = this.y
          , i = this.z
          , r = e.x
          , s = e.y
          , a = e.z
          , o = e.w
          , l = o * t + s * i - a * n
          , c = o * n + a * t - r * i
          , h = o * i + r * n - s * t
          , u = -r * t - s * n - a * i;
        return this.x = l * o + u * -r + c * -a - h * -s,
        this.y = c * o + u * -s + h * -r - l * -a,
        this.z = h * o + u * -a + l * -s - c * -r,
        this
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
    }
    transformDirection(e) {
        const t = this.x
          , n = this.y
          , i = this.z
          , r = e.elements;
        return this.x = r[0] * t + r[4] * n + r[8] * i,
        this.y = r[1] * t + r[5] * n + r[9] * i,
        this.z = r[2] * t + r[6] * n + r[10] * i,
        this.normalize()
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this.z = Math.max(e, Math.min(t, this.z)),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
        this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this
    }
    cross(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
        this.crossVectors(e, t)) : this.crossVectors(this, e)
    }
    crossVectors(e, t) {
        const n = e.x
          , i = e.y
          , r = e.z
          , s = t.x
          , a = t.y
          , o = t.z;
        return this.x = i * o - r * a,
        this.y = r * s - n * o,
        this.z = n * a - i * s,
        this
    }
    projectOnVector(e) {
        const t = e.lengthSq();
        if (0 === t)
            return this.set(0, 0, 0);
        const n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n)
    }
    projectOnPlane(e) {
        return Y.copy(this).projectOnVector(e),
        this.sub(Y)
    }
    reflect(e) {
        return this.sub(Y.copy(e).multiplyScalar(2 * this.dot(e)))
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (0 === t)
            return Math.PI / 2;
        const n = this.dot(e) / t;
        return Math.acos(m(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x
          , n = this.y - e.y
          , i = this.z - e.z;
        return t * t + n * n + i * i
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    }
    setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
    }
    setFromSphericalCoords(e, t, n) {
        const i = Math.sin(t) * e;
        return this.x = i * Math.sin(n),
        this.y = Math.cos(t) * e,
        this.z = i * Math.cos(n),
        this
    }
    setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
    }
    setFromCylindricalCoords(e, t, n) {
        return this.x = e * Math.sin(t),
        this.y = n,
        this.z = e * Math.cos(t),
        this
    }
    setFromMatrixPosition(e) {
        const t = e.elements;
        return this.x = t[12],
        this.y = t[13],
        this.z = t[14],
        this
    }
    setFromMatrixScale(e) {
        const t = this.setFromMatrixColumn(e, 0).length()
          , n = this.setFromMatrixColumn(e, 1).length()
          , i = this.setFromMatrixColumn(e, 2).length();
        return this.x = t,
        this.y = n,
        this.z = i,
        this
    }
    setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, 4 * t)
    }
    setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, 3 * t)
    }
    setFromEuler(e) {
        return this.x = e._x,
        this.y = e._y,
        this.z = e._z,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e
    }
    fromBufferAttribute(e, t, n) {
        return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),
        this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this
    }
    randomDirection() {
        const e = 2 * (Math.random() - .5)
          , t = Math.random() * Math.PI * 2
          , n = Math.sqrt(1 - e ** 2);
        return this.x = n * Math.cos(t),
        this.y = n * Math.sin(t),
        this.z = e,
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z
    }
}
const Y = new X
  , $ = new q;
class K {
    constructor(e=new X(1 / 0,1 / 0,1 / 0), t=new X(-1 / 0,-1 / 0,-1 / 0)) {
        this.isBox3 = !0,
        this.min = e,
        this.max = t
    }
    set(e, t) {
        return this.min.copy(e),
        this.max.copy(t),
        this
    }
    setFromArray(e) {
        let t = 1 / 0
          , n = 1 / 0
          , i = 1 / 0
          , r = -1 / 0
          , s = -1 / 0
          , a = -1 / 0;
        for (let o = 0, l = e.length; o < l; o += 3) {
            const l = e[o]
              , c = e[o + 1]
              , h = e[o + 2];
            l < t && (t = l),
            c < n && (n = c),
            h < i && (i = h),
            l > r && (r = l),
            c > s && (s = c),
            h > a && (a = h)
        }
        return this.min.set(t, n, i),
        this.max.set(r, s, a),
        this
    }
    setFromBufferAttribute(e) {
        let t = 1 / 0
          , n = 1 / 0
          , i = 1 / 0
          , r = -1 / 0
          , s = -1 / 0
          , a = -1 / 0;
        for (let o = 0, l = e.count; o < l; o++) {
            const l = e.getX(o)
              , c = e.getY(o)
              , h = e.getZ(o);
            l < t && (t = l),
            c < n && (n = c),
            h < i && (i = h),
            l > r && (r = l),
            c > s && (s = c),
            h > a && (a = h)
        }
        return this.min.set(t, n, i),
        this.max.set(r, s, a),
        this
    }
    setFromPoints(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t++)
            this.expandByPoint(e[t]);
        return this
    }
    setFromCenterAndSize(e, t) {
        const n = J.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(n),
        this.max.copy(e).add(n),
        this
    }
    setFromObject(e, t=!1) {
        return this.makeEmpty(),
        this.expandByObject(e, t)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(e) {
        return this.min.copy(e.min),
        this.max.copy(e.max),
        this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -1 / 0,
        this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    }
    expandByPoint(e) {
        return this.min.min(e),
        this.max.max(e),
        this
    }
    expandByVector(e) {
        return this.min.sub(e),
        this.max.add(e),
        this
    }
    expandByScalar(e) {
        return this.min.addScalar(-e),
        this.max.addScalar(e),
        this
    }
    expandByObject(e, t=!1) {
        e.updateWorldMatrix(!1, !1);
        const n = e.geometry;
        if (void 0 !== n)
            if (t && null != n.attributes && void 0 !== n.attributes.position) {
                const t = n.attributes.position;
                for (let n = 0, i = t.count; n < i; n++)
                    J.fromBufferAttribute(t, n).applyMatrix4(e.matrixWorld),
                    this.expandByPoint(J)
            } else
                null === n.boundingBox && n.computeBoundingBox(),
                Q.copy(n.boundingBox),
                Q.applyMatrix4(e.matrixWorld),
                this.union(Q);
        const i = e.children;
        for (let e = 0, n = i.length; e < n; e++)
            this.expandByObject(i[e], t);
        return this
    }
    containsPoint(e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
    }
    containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    }
    getParameter(e, t) {
        return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
    }
    intersectsSphere(e) {
        return this.clampPoint(e.center, J),
        J.distanceToSquared(e.center) <= e.radius * e.radius
    }
    intersectsPlane(e) {
        let t, n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
        n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
        n = e.normal.x * this.min.x),
        e.normal.y > 0 ? (t += e.normal.y * this.min.y,
        n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
        n += e.normal.y * this.min.y),
        e.normal.z > 0 ? (t += e.normal.z * this.min.z,
        n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
        n += e.normal.z * this.min.z),
        t <= -e.constant && n >= -e.constant
    }
    intersectsTriangle(e) {
        if (this.isEmpty())
            return !1;
        this.getCenter(ae),
        oe.subVectors(this.max, ae),
        ee.subVectors(e.a, ae),
        te.subVectors(e.b, ae),
        ne.subVectors(e.c, ae),
        ie.subVectors(te, ee),
        re.subVectors(ne, te),
        se.subVectors(ee, ne);
        let t = [0, -ie.z, ie.y, 0, -re.z, re.y, 0, -se.z, se.y, ie.z, 0, -ie.x, re.z, 0, -re.x, se.z, 0, -se.x, -ie.y, ie.x, 0, -re.y, re.x, 0, -se.y, se.x, 0];
        return !!he(t, ee, te, ne, oe) && (t = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        !!he(t, ee, te, ne, oe) && (le.crossVectors(ie, re),
        t = [le.x, le.y, le.z],
        he(t, ee, te, ne, oe)))
    }
    clampPoint(e, t) {
        return t.copy(e).clamp(this.min, this.max)
    }
    distanceToPoint(e) {
        return J.copy(e).clamp(this.min, this.max).sub(e).length()
    }
    getBoundingSphere(e) {
        return this.getCenter(e.center),
        e.radius = .5 * this.getSize(J).length(),
        e
    }
    intersect(e) {
        return this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
    }
    union(e) {
        return this.min.min(e.min),
        this.max.max(e.max),
        this
    }
    applyMatrix4(e) {
        return this.isEmpty() || (Z[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Z[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Z[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Z[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Z[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Z[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Z[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Z[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Z)),
        this
    }
    translate(e) {
        return this.min.add(e),
        this.max.add(e),
        this
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
}
const Z = [new X, new X, new X, new X, new X, new X, new X, new X]
  , J = new X
  , Q = new K
  , ee = new X
  , te = new X
  , ne = new X
  , ie = new X
  , re = new X
  , se = new X
  , ae = new X
  , oe = new X
  , le = new X
  , ce = new X;
function he(e, t, n, i, r) {
    for (let s = 0, a = e.length - 3; s <= a; s += 3) {
        ce.fromArray(e, s);
        const a = r.x * Math.abs(ce.x) + r.y * Math.abs(ce.y) + r.z * Math.abs(ce.z)
          , o = t.dot(ce)
          , l = n.dot(ce)
          , c = i.dot(ce);
        if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a)
            return !1
    }
    return !0
}
const ue = new K
  , de = new X
  , pe = new X
  , me = new X;
class fe {
    constructor(e=new X, t=-1) {
        this.center = e,
        this.radius = t
    }
    set(e, t) {
        return this.center.copy(e),
        this.radius = t,
        this
    }
    setFromPoints(e, t) {
        const n = this.center;
        void 0 !== t ? n.copy(t) : ue.setFromPoints(e).getCenter(n);
        let i = 0;
        for (let t = 0, r = e.length; t < r; t++)
            i = Math.max(i, n.distanceToSquared(e[t]));
        return this.radius = Math.sqrt(i),
        this
    }
    copy(e) {
        return this.center.copy(e.center),
        this.radius = e.radius,
        this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0),
        this.radius = -1,
        this
    }
    containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius
    }
    intersectsSphere(e) {
        const t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    }
    intersectsBox(e) {
        return e.intersectsSphere(this)
    }
    intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(e, t) {
        const n = this.center.distanceToSquared(e);
        return t.copy(e),
        n > this.radius * this.radius && (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
        t
    }
    getBoundingBox(e) {
        return this.isEmpty() ? (e.makeEmpty(),
        e) : (e.set(this.center, this.center),
        e.expandByScalar(this.radius),
        e)
    }
    applyMatrix4(e) {
        return this.center.applyMatrix4(e),
        this.radius = this.radius * e.getMaxScaleOnAxis(),
        this
    }
    translate(e) {
        return this.center.add(e),
        this
    }
    expandByPoint(e) {
        me.subVectors(e, this.center);
        const t = me.lengthSq();
        if (t > this.radius * this.radius) {
            const e = Math.sqrt(t)
              , n = .5 * (e - this.radius);
            this.center.add(me.multiplyScalar(n / e)),
            this.radius += n
        }
        return this
    }
    union(e) {
        return !0 === this.center.equals(e.center) ? pe.set(0, 0, 1).multiplyScalar(e.radius) : pe.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius),
        this.expandByPoint(de.copy(e.center).add(pe)),
        this.expandByPoint(de.copy(e.center).sub(pe)),
        this
    }
    equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
const ge = new X
  , ve = new X
  , _e = new X
  , xe = new X
  , ye = new X
  , Me = new X
  , be = new X;
class we {
    constructor(e=new X, t=new X(0,0,-1)) {
        this.origin = e,
        this.direction = t
    }
    set(e, t) {
        return this.origin.copy(e),
        this.direction.copy(t),
        this
    }
    copy(e) {
        return this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
    }
    at(e, t) {
        return t.copy(this.direction).multiplyScalar(e).add(this.origin)
    }
    lookAt(e) {
        return this.direction.copy(e).sub(this.origin).normalize(),
        this
    }
    recast(e) {
        return this.origin.copy(this.at(e, ge)),
        this
    }
    closestPointToPoint(e, t) {
        t.subVectors(e, this.origin);
        const n = t.dot(this.direction);
        return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin)
    }
    distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    }
    distanceSqToPoint(e) {
        const t = ge.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (ge.copy(this.direction).multiplyScalar(t).add(this.origin),
        ge.distanceToSquared(e))
    }
    distanceSqToSegment(e, t, n, i) {
        ve.copy(e).add(t).multiplyScalar(.5),
        _e.copy(t).sub(e).normalize(),
        xe.copy(this.origin).sub(ve);
        const r = .5 * e.distanceTo(t)
          , s = -this.direction.dot(_e)
          , a = xe.dot(this.direction)
          , o = -xe.dot(_e)
          , l = xe.lengthSq()
          , c = Math.abs(1 - s * s);
        let h, u, d, p;
        if (c > 0)
            if (h = s * o - a,
            u = s * a - o,
            p = r * c,
            h >= 0)
                if (u >= -p)
                    if (u <= p) {
                        const e = 1 / c;
                        h *= e,
                        u *= e,
                        d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l
                    } else
                        u = r,
                        h = Math.max(0, -(s * u + a)),
                        d = -h * h + u * (u + 2 * o) + l;
                else
                    u = -r,
                    h = Math.max(0, -(s * u + a)),
                    d = -h * h + u * (u + 2 * o) + l;
            else
                u <= -p ? (h = Math.max(0, -(-s * r + a)),
                u = h > 0 ? -r : Math.min(Math.max(-r, -o), r),
                d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0,
                u = Math.min(Math.max(-r, -o), r),
                d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)),
                u = h > 0 ? r : Math.min(Math.max(-r, -o), r),
                d = -h * h + u * (u + 2 * o) + l);
        else
            u = s > 0 ? -r : r,
            h = Math.max(0, -(s * u + a)),
            d = -h * h + u * (u + 2 * o) + l;
        return n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
        i && i.copy(_e).multiplyScalar(u).add(ve),
        d
    }
    intersectSphere(e, t) {
        ge.subVectors(e.center, this.origin);
        const n = ge.dot(this.direction)
          , i = ge.dot(ge) - n * n
          , r = e.radius * e.radius;
        if (i > r)
            return null;
        const s = Math.sqrt(r - i)
          , a = n - s
          , o = n + s;
        return a < 0 && o < 0 ? null : a < 0 ? this.at(o, t) : this.at(a, t)
    }
    intersectsSphere(e) {
        return this.distanceSqToPoint(e.center) <= e.radius * e.radius
    }
    distanceToPlane(e) {
        const t = e.normal.dot(this.direction);
        if (0 === t)
            return 0 === e.distanceToPoint(this.origin) ? 0 : null;
        const n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null
    }
    intersectPlane(e, t) {
        const n = this.distanceToPlane(e);
        return null === n ? null : this.at(n, t)
    }
    intersectsPlane(e) {
        const t = e.distanceToPoint(this.origin);
        if (0 === t)
            return !0;
        return e.normal.dot(this.direction) * t < 0
    }
    intersectBox(e, t) {
        let n, i, r, s, a, o;
        const l = 1 / this.direction.x
          , c = 1 / this.direction.y
          , h = 1 / this.direction.z
          , u = this.origin;
        return l >= 0 ? (n = (e.min.x - u.x) * l,
        i = (e.max.x - u.x) * l) : (n = (e.max.x - u.x) * l,
        i = (e.min.x - u.x) * l),
        c >= 0 ? (r = (e.min.y - u.y) * c,
        s = (e.max.y - u.y) * c) : (r = (e.max.y - u.y) * c,
        s = (e.min.y - u.y) * c),
        n > s || r > i ? null : ((r > n || n != n) && (n = r),
        (s < i || i != i) && (i = s),
        h >= 0 ? (a = (e.min.z - u.z) * h,
        o = (e.max.z - u.z) * h) : (a = (e.max.z - u.z) * h,
        o = (e.min.z - u.z) * h),
        n > o || a > i ? null : ((a > n || n != n) && (n = a),
        (o < i || i != i) && (i = o),
        i < 0 ? null : this.at(n >= 0 ? n : i, t)))
    }
    intersectsBox(e) {
        return null !== this.intersectBox(e, ge)
    }
    intersectTriangle(e, t, n, i, r) {
        ye.subVectors(t, e),
        Me.subVectors(n, e),
        be.crossVectors(ye, Me);
        let s, a = this.direction.dot(be);
        if (a > 0) {
            if (i)
                return null;
            s = 1
        } else {
            if (!(a < 0))
                return null;
            s = -1,
            a = -a
        }
        xe.subVectors(this.origin, e);
        const o = s * this.direction.dot(Me.crossVectors(xe, Me));
        if (o < 0)
            return null;
        const l = s * this.direction.dot(ye.cross(xe));
        if (l < 0)
            return null;
        if (o + l > a)
            return null;
        const c = -s * xe.dot(be);
        return c < 0 ? null : this.at(c / a, r)
    }
    applyMatrix4(e) {
        return this.origin.applyMatrix4(e),
        this.direction.transformDirection(e),
        this
    }
    equals(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
class Se {
    constructor() {
        this.isMatrix4 = !0,
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }
    set(e, t, n, i, r, s, a, o, l, c, h, u, d, p, m, f) {
        const g = this.elements;
        return g[0] = e,
        g[4] = t,
        g[8] = n,
        g[12] = i,
        g[1] = r,
        g[5] = s,
        g[9] = a,
        g[13] = o,
        g[2] = l,
        g[6] = c,
        g[10] = h,
        g[14] = u,
        g[3] = d,
        g[7] = p,
        g[11] = m,
        g[15] = f,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    clone() {
        return (new Se).fromArray(this.elements)
    }
    copy(e) {
        const t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        t[9] = n[9],
        t[10] = n[10],
        t[11] = n[11],
        t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        t[15] = n[15],
        this
    }
    copyPosition(e) {
        const t = this.elements
          , n = e.elements;
        return t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        this
    }
    setFromMatrix3(e) {
        const t = e.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),
        this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
    }
    makeBasis(e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1),
        this
    }
    extractRotation(e) {
        const t = this.elements
          , n = e.elements
          , i = 1 / Te.setFromMatrixColumn(e, 0).length()
          , r = 1 / Te.setFromMatrixColumn(e, 1).length()
          , s = 1 / Te.setFromMatrixColumn(e, 2).length();
        return t[0] = n[0] * i,
        t[1] = n[1] * i,
        t[2] = n[2] * i,
        t[3] = 0,
        t[4] = n[4] * r,
        t[5] = n[5] * r,
        t[6] = n[6] * r,
        t[7] = 0,
        t[8] = n[8] * s,
        t[9] = n[9] * s,
        t[10] = n[10] * s,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromEuler(e) {
        e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        const t = this.elements
          , n = e.x
          , i = e.y
          , r = e.z
          , s = Math.cos(n)
          , a = Math.sin(n)
          , o = Math.cos(i)
          , l = Math.sin(i)
          , c = Math.cos(r)
          , h = Math.sin(r);
        if ("XYZ" === e.order) {
            const e = s * c
              , n = s * h
              , i = a * c
              , r = a * h;
            t[0] = o * c,
            t[4] = -o * h,
            t[8] = l,
            t[1] = n + i * l,
            t[5] = e - r * l,
            t[9] = -a * o,
            t[2] = r - e * l,
            t[6] = i + n * l,
            t[10] = s * o
        } else if ("YXZ" === e.order) {
            const e = o * c
              , n = o * h
              , i = l * c
              , r = l * h;
            t[0] = e + r * a,
            t[4] = i * a - n,
            t[8] = s * l,
            t[1] = s * h,
            t[5] = s * c,
            t[9] = -a,
            t[2] = n * a - i,
            t[6] = r + e * a,
            t[10] = s * o
        } else if ("ZXY" === e.order) {
            const e = o * c
              , n = o * h
              , i = l * c
              , r = l * h;
            t[0] = e - r * a,
            t[4] = -s * h,
            t[8] = i + n * a,
            t[1] = n + i * a,
            t[5] = s * c,
            t[9] = r - e * a,
            t[2] = -s * l,
            t[6] = a,
            t[10] = s * o
        } else if ("ZYX" === e.order) {
            const e = s * c
              , n = s * h
              , i = a * c
              , r = a * h;
            t[0] = o * c,
            t[4] = i * l - n,
            t[8] = e * l + r,
            t[1] = o * h,
            t[5] = r * l + e,
            t[9] = n * l - i,
            t[2] = -l,
            t[6] = a * o,
            t[10] = s * o
        } else if ("YZX" === e.order) {
            const e = s * o
              , n = s * l
              , i = a * o
              , r = a * l;
            t[0] = o * c,
            t[4] = r - e * h,
            t[8] = i * h + n,
            t[1] = h,
            t[5] = s * c,
            t[9] = -a * c,
            t[2] = -l * c,
            t[6] = n * h + i,
            t[10] = e - r * h
        } else if ("XZY" === e.order) {
            const e = s * o
              , n = s * l
              , i = a * o
              , r = a * l;
            t[0] = o * c,
            t[4] = -h,
            t[8] = l * c,
            t[1] = e * h + r,
            t[5] = s * c,
            t[9] = n * h - i,
            t[2] = i * h - n,
            t[6] = a * c,
            t[10] = r * h + e
        }
        return t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromQuaternion(e) {
        return this.compose(Ae, e, Le)
    }
    lookAt(e, t, n) {
        const i = this.elements;
        return Pe.subVectors(e, t),
        0 === Pe.lengthSq() && (Pe.z = 1),
        Pe.normalize(),
        Ce.crossVectors(n, Pe),
        0 === Ce.lengthSq() && (1 === Math.abs(n.z) ? Pe.x += 1e-4 : Pe.z += 1e-4,
        Pe.normalize(),
        Ce.crossVectors(n, Pe)),
        Ce.normalize(),
        Re.crossVectors(Pe, Ce),
        i[0] = Ce.x,
        i[4] = Re.x,
        i[8] = Pe.x,
        i[1] = Ce.y,
        i[5] = Re.y,
        i[9] = Pe.y,
        i[2] = Ce.z,
        i[6] = Re.z,
        i[10] = Pe.z,
        this
    }
    multiply(e, t) {
        return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
        this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements
          , i = t.elements
          , r = this.elements
          , s = n[0]
          , a = n[4]
          , o = n[8]
          , l = n[12]
          , c = n[1]
          , h = n[5]
          , u = n[9]
          , d = n[13]
          , p = n[2]
          , m = n[6]
          , f = n[10]
          , g = n[14]
          , v = n[3]
          , _ = n[7]
          , x = n[11]
          , y = n[15]
          , M = i[0]
          , b = i[4]
          , w = i[8]
          , S = i[12]
          , T = i[1]
          , E = i[5]
          , A = i[9]
          , L = i[13]
          , C = i[2]
          , R = i[6]
          , P = i[10]
          , D = i[14]
          , I = i[3]
          , N = i[7]
          , z = i[11]
          , O = i[15];
        return r[0] = s * M + a * T + o * C + l * I,
        r[4] = s * b + a * E + o * R + l * N,
        r[8] = s * w + a * A + o * P + l * z,
        r[12] = s * S + a * L + o * D + l * O,
        r[1] = c * M + h * T + u * C + d * I,
        r[5] = c * b + h * E + u * R + d * N,
        r[9] = c * w + h * A + u * P + d * z,
        r[13] = c * S + h * L + u * D + d * O,
        r[2] = p * M + m * T + f * C + g * I,
        r[6] = p * b + m * E + f * R + g * N,
        r[10] = p * w + m * A + f * P + g * z,
        r[14] = p * S + m * L + f * D + g * O,
        r[3] = v * M + _ * T + x * C + y * I,
        r[7] = v * b + _ * E + x * R + y * N,
        r[11] = v * w + _ * A + x * P + y * z,
        r[15] = v * S + _ * L + x * D + y * O,
        this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
        t[4] *= e,
        t[8] *= e,
        t[12] *= e,
        t[1] *= e,
        t[5] *= e,
        t[9] *= e,
        t[13] *= e,
        t[2] *= e,
        t[6] *= e,
        t[10] *= e,
        t[14] *= e,
        t[3] *= e,
        t[7] *= e,
        t[11] *= e,
        t[15] *= e,
        this
    }
    determinant() {
        const e = this.elements
          , t = e[0]
          , n = e[4]
          , i = e[8]
          , r = e[12]
          , s = e[1]
          , a = e[5]
          , o = e[9]
          , l = e[13]
          , c = e[2]
          , h = e[6]
          , u = e[10]
          , d = e[14];
        return e[3] * (+r * o * h - i * l * h - r * a * u + n * l * u + i * a * d - n * o * d) + e[7] * (+t * o * d - t * l * u + r * s * u - i * s * d + i * l * c - r * o * c) + e[11] * (+t * l * h - t * a * d - r * s * h + n * s * d + r * a * c - n * l * c) + e[15] * (-i * a * c - t * o * h + t * a * u + i * s * h - n * s * u + n * o * c)
    }
    transpose() {
        const e = this.elements;
        let t;
        return t = e[1],
        e[1] = e[4],
        e[4] = t,
        t = e[2],
        e[2] = e[8],
        e[8] = t,
        t = e[6],
        e[6] = e[9],
        e[9] = t,
        t = e[3],
        e[3] = e[12],
        e[12] = t,
        t = e[7],
        e[7] = e[13],
        e[13] = t,
        t = e[11],
        e[11] = e[14],
        e[14] = t,
        this
    }
    setPosition(e, t, n) {
        const i = this.elements;
        return e.isVector3 ? (i[12] = e.x,
        i[13] = e.y,
        i[14] = e.z) : (i[12] = e,
        i[13] = t,
        i[14] = n),
        this
    }
    invert() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , i = e[2]
          , r = e[3]
          , s = e[4]
          , a = e[5]
          , o = e[6]
          , l = e[7]
          , c = e[8]
          , h = e[9]
          , u = e[10]
          , d = e[11]
          , p = e[12]
          , m = e[13]
          , f = e[14]
          , g = e[15]
          , v = h * f * l - m * u * l + m * o * d - a * f * d - h * o * g + a * u * g
          , _ = p * u * l - c * f * l - p * o * d + s * f * d + c * o * g - s * u * g
          , x = c * m * l - p * h * l + p * a * d - s * m * d - c * a * g + s * h * g
          , y = p * h * o - c * m * o - p * a * u + s * m * u + c * a * f - s * h * f
          , M = t * v + n * _ + i * x + r * y;
        if (0 === M)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const b = 1 / M;
        return e[0] = v * b,
        e[1] = (m * u * r - h * f * r - m * i * d + n * f * d + h * i * g - n * u * g) * b,
        e[2] = (a * f * r - m * o * r + m * i * l - n * f * l - a * i * g + n * o * g) * b,
        e[3] = (h * o * r - a * u * r - h * i * l + n * u * l + a * i * d - n * o * d) * b,
        e[4] = _ * b,
        e[5] = (c * f * r - p * u * r + p * i * d - t * f * d - c * i * g + t * u * g) * b,
        e[6] = (p * o * r - s * f * r - p * i * l + t * f * l + s * i * g - t * o * g) * b,
        e[7] = (s * u * r - c * o * r + c * i * l - t * u * l - s * i * d + t * o * d) * b,
        e[8] = x * b,
        e[9] = (p * h * r - c * m * r - p * n * d + t * m * d + c * n * g - t * h * g) * b,
        e[10] = (s * m * r - p * a * r + p * n * l - t * m * l - s * n * g + t * a * g) * b,
        e[11] = (c * a * r - s * h * r - c * n * l + t * h * l + s * n * d - t * a * d) * b,
        e[12] = y * b,
        e[13] = (c * m * i - p * h * i + p * n * u - t * m * u - c * n * f + t * h * f) * b,
        e[14] = (p * a * i - s * m * i - p * n * o + t * m * o + s * n * f - t * a * f) * b,
        e[15] = (s * h * i - c * a * i + c * n * o - t * h * o - s * n * u + t * a * u) * b,
        this
    }
    scale(e) {
        const t = this.elements
          , n = e.x
          , i = e.y
          , r = e.z;
        return t[0] *= n,
        t[4] *= i,
        t[8] *= r,
        t[1] *= n,
        t[5] *= i,
        t[9] *= r,
        t[2] *= n,
        t[6] *= i,
        t[10] *= r,
        t[3] *= n,
        t[7] *= i,
        t[11] *= r,
        this
    }
    getMaxScaleOnAxis() {
        const e = this.elements
          , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
          , n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
          , i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, i))
    }
    makeTranslation(e, t, n) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
        this
    }
    makeRotationX(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationY(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationZ(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    makeRotationAxis(e, t) {
        const n = Math.cos(t)
          , i = Math.sin(t)
          , r = 1 - n
          , s = e.x
          , a = e.y
          , o = e.z
          , l = r * s
          , c = r * a;
        return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, c * a + n, c * o - i * s, 0, l * o - i * a, c * o + i * s, r * o * o + n, 0, 0, 0, 0, 1),
        this
    }
    makeScale(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
        this
    }
    makeShear(e, t, n, i, r, s) {
        return this.set(1, n, r, 0, e, 1, s, 0, t, i, 1, 0, 0, 0, 0, 1),
        this
    }
    compose(e, t, n) {
        const i = this.elements
          , r = t._x
          , s = t._y
          , a = t._z
          , o = t._w
          , l = r + r
          , c = s + s
          , h = a + a
          , u = r * l
          , d = r * c
          , p = r * h
          , m = s * c
          , f = s * h
          , g = a * h
          , v = o * l
          , _ = o * c
          , x = o * h
          , y = n.x
          , M = n.y
          , b = n.z;
        return i[0] = (1 - (m + g)) * y,
        i[1] = (d + x) * y,
        i[2] = (p - _) * y,
        i[3] = 0,
        i[4] = (d - x) * M,
        i[5] = (1 - (u + g)) * M,
        i[6] = (f + v) * M,
        i[7] = 0,
        i[8] = (p + _) * b,
        i[9] = (f - v) * b,
        i[10] = (1 - (u + m)) * b,
        i[11] = 0,
        i[12] = e.x,
        i[13] = e.y,
        i[14] = e.z,
        i[15] = 1,
        this
    }
    decompose(e, t, n) {
        const i = this.elements;
        let r = Te.set(i[0], i[1], i[2]).length();
        const s = Te.set(i[4], i[5], i[6]).length()
          , a = Te.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (r = -r),
        e.x = i[12],
        e.y = i[13],
        e.z = i[14],
        Ee.copy(this);
        const o = 1 / r
          , l = 1 / s
          , c = 1 / a;
        return Ee.elements[0] *= o,
        Ee.elements[1] *= o,
        Ee.elements[2] *= o,
        Ee.elements[4] *= l,
        Ee.elements[5] *= l,
        Ee.elements[6] *= l,
        Ee.elements[8] *= c,
        Ee.elements[9] *= c,
        Ee.elements[10] *= c,
        t.setFromRotationMatrix(Ee),
        n.x = r,
        n.y = s,
        n.z = a,
        this
    }
    makePerspective(e, t, n, i, r, s) {
        void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
        const a = this.elements
          , o = 2 * r / (t - e)
          , l = 2 * r / (n - i)
          , c = (t + e) / (t - e)
          , h = (n + i) / (n - i)
          , u = -(s + r) / (s - r)
          , d = -2 * s * r / (s - r);
        return a[0] = o,
        a[4] = 0,
        a[8] = c,
        a[12] = 0,
        a[1] = 0,
        a[5] = l,
        a[9] = h,
        a[13] = 0,
        a[2] = 0,
        a[6] = 0,
        a[10] = u,
        a[14] = d,
        a[3] = 0,
        a[7] = 0,
        a[11] = -1,
        a[15] = 0,
        this
    }
    makeOrthographic(e, t, n, i, r, s) {
        const a = this.elements
          , o = 1 / (t - e)
          , l = 1 / (n - i)
          , c = 1 / (s - r)
          , h = (t + e) * o
          , u = (n + i) * l
          , d = (s + r) * c;
        return a[0] = 2 * o,
        a[4] = 0,
        a[8] = 0,
        a[12] = -h,
        a[1] = 0,
        a[5] = 2 * l,
        a[9] = 0,
        a[13] = -u,
        a[2] = 0,
        a[6] = 0,
        a[10] = -2 * c,
        a[14] = -d,
        a[3] = 0,
        a[7] = 0,
        a[11] = 0,
        a[15] = 1,
        this
    }
    equals(e) {
        const t = this.elements
          , n = e.elements;
        for (let e = 0; e < 16; e++)
            if (t[e] !== n[e])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 16; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        const n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e[t + 9] = n[9],
        e[t + 10] = n[10],
        e[t + 11] = n[11],
        e[t + 12] = n[12],
        e[t + 13] = n[13],
        e[t + 14] = n[14],
        e[t + 15] = n[15],
        e
    }
}
const Te = new X
  , Ee = new Se
  , Ae = new X(0,0,0)
  , Le = new X(1,1,1)
  , Ce = new X
  , Re = new X
  , Pe = new X
  , De = new Se
  , Ie = new q;
class Ne {
    constructor(e=0, t=0, n=0, i=Ne.DefaultOrder) {
        this.isEuler = !0,
        this._x = e,
        this._y = t,
        this._z = n,
        this._order = i
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(e) {
        this._order = e,
        this._onChangeCallback()
    }
    set(e, t, n, i=this._order) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._order = i,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    }
    copy(e) {
        return this._x = e._x,
        this._y = e._y,
        this._z = e._z,
        this._order = e._order,
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e, t=this._order, n=!0) {
        const i = e.elements
          , r = i[0]
          , s = i[4]
          , a = i[8]
          , o = i[1]
          , l = i[5]
          , c = i[9]
          , h = i[2]
          , u = i[6]
          , d = i[10];
        switch (t) {
        case "XYZ":
            this._y = Math.asin(m(a, -1, 1)),
            Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d),
            this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l),
            this._z = 0);
            break;
        case "YXZ":
            this._x = Math.asin(-m(c, -1, 1)),
            Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d),
            this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r),
            this._z = 0);
            break;
        case "ZXY":
            this._x = Math.asin(m(u, -1, 1)),
            Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d),
            this._z = Math.atan2(-s, l)) : (this._y = 0,
            this._z = Math.atan2(o, r));
            break;
        case "ZYX":
            this._y = Math.asin(-m(h, -1, 1)),
            Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d),
            this._z = Math.atan2(o, r)) : (this._x = 0,
            this._z = Math.atan2(-s, l));
            break;
        case "YZX":
            this._z = Math.asin(m(o, -1, 1)),
            Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l),
            this._y = Math.atan2(-h, r)) : (this._x = 0,
            this._y = Math.atan2(a, d));
            break;
        case "XZY":
            this._z = Math.asin(-m(s, -1, 1)),
            Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l),
            this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c, d),
            this._y = 0);
            break;
        default:
            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
        }
        return this._order = t,
        !0 === n && this._onChangeCallback(),
        this
    }
    setFromQuaternion(e, t, n) {
        return De.makeRotationFromQuaternion(e),
        this.setFromRotationMatrix(De, t, n)
    }
    setFromVector3(e, t=this._order) {
        return this.set(e.x, e.y, e.z, t)
    }
    reorder(e) {
        return Ie.setFromEuler(this),
        this.setFromQuaternion(Ie, e)
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    }
    fromArray(e) {
        return this._x = e[0],
        this._y = e[1],
        this._z = e[2],
        void 0 !== e[3] && (this._order = e[3]),
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._order,
        e
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._order
    }
    toVector3() {
        console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")
    }
}
Ne.DefaultOrder = "XYZ",
Ne.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class ze {
    constructor() {
        this.mask = 1
    }
    set(e) {
        this.mask = (1 << e | 0) >>> 0
    }
    enable(e) {
        this.mask |= 1 << e | 0
    }
    enableAll() {
        this.mask = -1
    }
    toggle(e) {
        this.mask ^= 1 << e | 0
    }
    disable(e) {
        this.mask &= ~(1 << e | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(e) {
        return 0 != (this.mask & e.mask)
    }
    isEnabled(e) {
        return 0 != (this.mask & (1 << e | 0))
    }
}
let Oe = 0;
const Fe = new X
  , Ue = new q
  , ke = new Se
  , Be = new X
  , He = new X
  , Ve = new X
  , Ge = new q
  , We = new X(1,0,0)
  , je = new X(0,1,0)
  , qe = new X(0,0,1)
  , Xe = {
    type: "added"
}
  , Ye = {
    type: "removed"
};
class $e extends l {
    constructor() {
        super(),
        this.isObject3D = !0,
        Object.defineProperty(this, "id", {
            value: Oe++
        }),
        this.uuid = p(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = $e.DefaultUp.clone();
        const e = new X
          , t = new Ne
          , n = new q
          , i = new X(1,1,1);
        t._onChange((function() {
            n.setFromEuler(t, !1)
        }
        )),
        n._onChange((function() {
            t.setFromQuaternion(n, void 0, !1)
        }
        )),
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            modelViewMatrix: {
                value: new Se
            },
            normalMatrix: {
                value: new b
            }
        }),
        this.matrix = new Se,
        this.matrixWorld = new Se,
        this.matrixAutoUpdate = $e.DefaultMatrixAutoUpdate,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new ze,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.animations = [],
        this.userData = {}
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(e) {
        return this.quaternion.premultiply(e),
        this
    }
    setRotationFromAxisAngle(e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    }
    setRotationFromEuler(e) {
        this.quaternion.setFromEuler(e, !0)
    }
    setRotationFromMatrix(e) {
        this.quaternion.setFromRotationMatrix(e)
    }
    setRotationFromQuaternion(e) {
        this.quaternion.copy(e)
    }
    rotateOnAxis(e, t) {
        return Ue.setFromAxisAngle(e, t),
        this.quaternion.multiply(Ue),
        this
    }
    rotateOnWorldAxis(e, t) {
        return Ue.setFromAxisAngle(e, t),
        this.quaternion.premultiply(Ue),
        this
    }
    rotateX(e) {
        return this.rotateOnAxis(We, e)
    }
    rotateY(e) {
        return this.rotateOnAxis(je, e)
    }
    rotateZ(e) {
        return this.rotateOnAxis(qe, e)
    }
    translateOnAxis(e, t) {
        return Fe.copy(e).applyQuaternion(this.quaternion),
        this.position.add(Fe.multiplyScalar(t)),
        this
    }
    translateX(e) {
        return this.translateOnAxis(We, e)
    }
    translateY(e) {
        return this.translateOnAxis(je, e)
    }
    translateZ(e) {
        return this.translateOnAxis(qe, e)
    }
    localToWorld(e) {
        return e.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(e) {
        return e.applyMatrix4(ke.copy(this.matrixWorld).invert())
    }
    lookAt(e, t, n) {
        e.isVector3 ? Be.copy(e) : Be.set(e, t, n);
        const i = this.parent;
        this.updateWorldMatrix(!0, !1),
        He.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight ? ke.lookAt(He, Be, this.up) : ke.lookAt(Be, He, this.up),
        this.quaternion.setFromRotationMatrix(ke),
        i && (ke.extractRotation(i.matrixWorld),
        Ue.setFromRotationMatrix(ke),
        this.quaternion.premultiply(Ue.invert()))
    }
    add(e) {
        if (arguments.length > 1) {
            for (let e = 0; e < arguments.length; e++)
                this.add(arguments[e]);
            return this
        }
        return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e),
        this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e),
        e.parent = this,
        this.children.push(e),
        e.dispatchEvent(Xe)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e),
        this)
    }
    remove(e) {
        if (arguments.length > 1) {
            for (let e = 0; e < arguments.length; e++)
                this.remove(arguments[e]);
            return this
        }
        const t = this.children.indexOf(e);
        return -1 !== t && (e.parent = null,
        this.children.splice(t, 1),
        e.dispatchEvent(Ye)),
        this
    }
    removeFromParent() {
        const e = this.parent;
        return null !== e && e.remove(this),
        this
    }
    clear() {
        for (let e = 0; e < this.children.length; e++) {
            const t = this.children[e];
            t.parent = null,
            t.dispatchEvent(Ye)
        }
        return this.children.length = 0,
        this
    }
    attach(e) {
        return this.updateWorldMatrix(!0, !1),
        ke.copy(this.matrixWorld).invert(),
        null !== e.parent && (e.parent.updateWorldMatrix(!0, !1),
        ke.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(ke),
        this.add(e),
        e.updateWorldMatrix(!1, !0),
        this
    }
    getObjectById(e) {
        return this.getObjectByProperty("id", e)
    }
    getObjectByName(e) {
        return this.getObjectByProperty("name", e)
    }
    getObjectByProperty(e, t) {
        if (this[e] === t)
            return this;
        for (let n = 0, i = this.children.length; n < i; n++) {
            const i = this.children[n].getObjectByProperty(e, t);
            if (void 0 !== i)
                return i
        }
    }
    getWorldPosition(e) {
        return this.updateWorldMatrix(!0, !1),
        e.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(He, e, Ve),
        e
    }
    getWorldScale(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(He, Ge, e),
        e
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(t[8], t[9], t[10]).normalize()
    }
    raycast() {}
    traverse(e) {
        e(this);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++)
            t[n].traverse(e)
    }
    traverseVisible(e) {
        if (!1 === this.visible)
            return;
        e(this);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++)
            t[n].traverseVisible(e)
    }
    traverseAncestors(e) {
        const t = this.parent;
        null !== t && (e(t),
        t.traverseAncestors(e))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        this.matrixWorldNeedsUpdate = !1,
        e = !0);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++)
            t[n].updateMatrixWorld(e)
    }
    updateWorldMatrix(e, t) {
        const n = this.parent;
        if (!0 === e && null !== n && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        !0 === t) {
            const e = this.children;
            for (let t = 0, n = e.length; t < n; t++)
                e[t].updateWorldMatrix(!1, !0)
        }
    }
    toJSON(e) {
        const t = void 0 === e || "string" == typeof e
          , n = {};
        t && (e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
        },
        n.metadata = {
            version: 4.5,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        const i = {};
        function r(t, n) {
            return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)),
            n.uuid
        }
        if (i.uuid = this.uuid,
        i.type = this.type,
        "" !== this.name && (i.name = this.name),
        !0 === this.castShadow && (i.castShadow = !0),
        !0 === this.receiveShadow && (i.receiveShadow = !0),
        !1 === this.visible && (i.visible = !1),
        !1 === this.frustumCulled && (i.frustumCulled = !1),
        0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
        "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
        i.layers = this.layers.mask,
        i.matrix = this.matrix.toArray(),
        !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
        this.isInstancedMesh && (i.type = "InstancedMesh",
        i.count = this.count,
        i.instanceMatrix = this.instanceMatrix.toJSON(),
        null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())),
        this.isScene)
            this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)),
            this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(e).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = r(e.geometries, this.geometry);
            const t = this.geometry.parameters;
            if (void 0 !== t && void 0 !== t.shapes) {
                const n = t.shapes;
                if (Array.isArray(n))
                    for (let t = 0, i = n.length; t < i; t++) {
                        const i = n[t];
                        r(e.shapes, i)
                    }
                else
                    r(e.shapes, n)
            }
        }
        if (this.isSkinnedMesh && (i.bindMode = this.bindMode,
        i.bindMatrix = this.bindMatrix.toArray(),
        void 0 !== this.skeleton && (r(e.skeletons, this.skeleton),
        i.skeleton = this.skeleton.uuid)),
        void 0 !== this.material)
            if (Array.isArray(this.material)) {
                const t = [];
                for (let n = 0, i = this.material.length; n < i; n++)
                    t.push(r(e.materials, this.material[n]));
                i.material = t
            } else
                i.material = r(e.materials, this.material);
        if (this.children.length > 0) {
            i.children = [];
            for (let t = 0; t < this.children.length; t++)
                i.children.push(this.children[t].toJSON(e).object)
        }
        if (this.animations.length > 0) {
            i.animations = [];
            for (let t = 0; t < this.animations.length; t++) {
                const n = this.animations[t];
                i.animations.push(r(e.animations, n))
            }
        }
        if (t) {
            const t = s(e.geometries)
              , i = s(e.materials)
              , r = s(e.textures)
              , a = s(e.images)
              , o = s(e.shapes)
              , l = s(e.skeletons)
              , c = s(e.animations)
              , h = s(e.nodes);
            t.length > 0 && (n.geometries = t),
            i.length > 0 && (n.materials = i),
            r.length > 0 && (n.textures = r),
            a.length > 0 && (n.images = a),
            o.length > 0 && (n.shapes = o),
            l.length > 0 && (n.skeletons = l),
            c.length > 0 && (n.animations = c),
            h.length > 0 && (n.nodes = h)
        }
        return n.object = i,
        n;
        function s(e) {
            const t = [];
            for (const n in e) {
                const i = e[n];
                delete i.metadata,
                t.push(i)
            }
            return t
        }
    }
    clone(e) {
        return (new this.constructor).copy(this, e)
    }
    copy(e, t=!0) {
        if (this.name = e.name,
        this.up.copy(e.up),
        this.position.copy(e.position),
        this.rotation.order = e.rotation.order,
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
        this.layers.mask = e.layers.mask,
        this.visible = e.visible,
        this.castShadow = e.castShadow,
        this.receiveShadow = e.receiveShadow,
        this.frustumCulled = e.frustumCulled,
        this.renderOrder = e.renderOrder,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        !0 === t)
            for (let t = 0; t < e.children.length; t++) {
                const n = e.children[t];
                this.add(n.clone())
            }
        return this
    }
}
$e.DefaultUp = new X(0,1,0),
$e.DefaultMatrixAutoUpdate = !0;
const Ke = new X
  , Ze = new X
  , Je = new X
  , Qe = new X
  , et = new X
  , tt = new X
  , nt = new X
  , it = new X
  , rt = new X
  , st = new X;
class at {
    constructor(e=new X, t=new X, n=new X) {
        this.a = e,
        this.b = t,
        this.c = n
    }
    static getNormal(e, t, n, i) {
        i.subVectors(n, t),
        Ke.subVectors(e, t),
        i.cross(Ke);
        const r = i.lengthSq();
        return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
    }
    static getBarycoord(e, t, n, i, r) {
        Ke.subVectors(i, t),
        Ze.subVectors(n, t),
        Je.subVectors(e, t);
        const s = Ke.dot(Ke)
          , a = Ke.dot(Ze)
          , o = Ke.dot(Je)
          , l = Ze.dot(Ze)
          , c = Ze.dot(Je)
          , h = s * l - a * a;
        if (0 === h)
            return r.set(-2, -1, -1);
        const u = 1 / h
          , d = (l * o - a * c) * u
          , p = (s * c - a * o) * u;
        return r.set(1 - d - p, p, d)
    }
    static containsPoint(e, t, n, i) {
        return this.getBarycoord(e, t, n, i, Qe),
        Qe.x >= 0 && Qe.y >= 0 && Qe.x + Qe.y <= 1
    }
    static getUV(e, t, n, i, r, s, a, o) {
        return this.getBarycoord(e, t, n, i, Qe),
        o.set(0, 0),
        o.addScaledVector(r, Qe.x),
        o.addScaledVector(s, Qe.y),
        o.addScaledVector(a, Qe.z),
        o
    }
    static isFrontFacing(e, t, n, i) {
        return Ke.subVectors(n, t),
        Ze.subVectors(e, t),
        Ke.cross(Ze).dot(i) < 0
    }
    set(e, t, n) {
        return this.a.copy(e),
        this.b.copy(t),
        this.c.copy(n),
        this
    }
    setFromPointsAndIndices(e, t, n, i) {
        return this.a.copy(e[t]),
        this.b.copy(e[n]),
        this.c.copy(e[i]),
        this
    }
    setFromAttributeAndIndices(e, t, n, i) {
        return this.a.fromBufferAttribute(e, t),
        this.b.fromBufferAttribute(e, n),
        this.c.fromBufferAttribute(e, i),
        this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(e) {
        return this.a.copy(e.a),
        this.b.copy(e.b),
        this.c.copy(e.c),
        this
    }
    getArea() {
        return Ke.subVectors(this.c, this.b),
        Ze.subVectors(this.a, this.b),
        .5 * Ke.cross(Ze).length()
    }
    getMidpoint(e) {
        return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(e) {
        return at.getNormal(this.a, this.b, this.c, e)
    }
    getPlane(e) {
        return e.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(e, t) {
        return at.getBarycoord(e, this.a, this.b, this.c, t)
    }
    getUV(e, t, n, i, r) {
        return at.getUV(e, this.a, this.b, this.c, t, n, i, r)
    }
    containsPoint(e) {
        return at.containsPoint(e, this.a, this.b, this.c)
    }
    isFrontFacing(e) {
        return at.isFrontFacing(this.a, this.b, this.c, e)
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this)
    }
    closestPointToPoint(e, t) {
        const n = this.a
          , i = this.b
          , r = this.c;
        let s, a;
        et.subVectors(i, n),
        tt.subVectors(r, n),
        it.subVectors(e, n);
        const o = et.dot(it)
          , l = tt.dot(it);
        if (o <= 0 && l <= 0)
            return t.copy(n);
        rt.subVectors(e, i);
        const c = et.dot(rt)
          , h = tt.dot(rt);
        if (c >= 0 && h <= c)
            return t.copy(i);
        const u = o * h - c * l;
        if (u <= 0 && o >= 0 && c <= 0)
            return s = o / (o - c),
            t.copy(n).addScaledVector(et, s);
        st.subVectors(e, r);
        const d = et.dot(st)
          , p = tt.dot(st);
        if (p >= 0 && d <= p)
            return t.copy(r);
        const m = d * l - o * p;
        if (m <= 0 && l >= 0 && p <= 0)
            return a = l / (l - p),
            t.copy(n).addScaledVector(tt, a);
        const f = c * p - d * h;
        if (f <= 0 && h - c >= 0 && d - p >= 0)
            return nt.subVectors(r, i),
            a = (h - c) / (h - c + (d - p)),
            t.copy(i).addScaledVector(nt, a);
        const g = 1 / (f + m + u);
        return s = m * g,
        a = u * g,
        t.copy(n).addScaledVector(et, s).addScaledVector(tt, a)
    }
    equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
}
let ot = 0;
class lt extends l {
    constructor() {
        super(),
        this.isMaterial = !0,
        Object.defineProperty(this, "id", {
            value: ot++
        }),
        this.uuid = p(),
        this.name = "",
        this.type = "Material",
        this.blending = 1,
        this.side = 0,
        this.vertexColors = !1,
        this.opacity = 1,
        this.transparent = !1,
        this.blendSrc = 204,
        this.blendDst = 205,
        this.blendEquation = 100,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.depthFunc = 3,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.stencilWriteMask = 255,
        this.stencilFunc = 519,
        this.stencilRef = 0,
        this.stencilFuncMask = 255,
        this.stencilFail = 7680,
        this.stencilZFail = 7680,
        this.stencilZPass = 7680,
        this.stencilWrite = !1,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.dithering = !1,
        this.alphaToCoverage = !1,
        this.premultipliedAlpha = !1,
        this.visible = !0,
        this.toneMapped = !0,
        this.userData = {},
        this.version = 0,
        this._alphaTest = 0
    }
    get alphaTest() {
        return this._alphaTest
    }
    set alphaTest(e) {
        this._alphaTest > 0 != e > 0 && this.version++,
        this._alphaTest = e
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString()
    }
    setValues(e) {
        if (void 0 !== e)
            for (const t in e) {
                const n = e[t];
                if (void 0 === n) {
                    console.warn("THREE.Material: '" + t + "' parameter is undefined.");
                    continue
                }
                if ("shading" === t) {
                    console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                    this.flatShading = 1 === n;
                    continue
                }
                const i = this[t];
                void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
            }
    }
    toJSON(e) {
        const t = void 0 === e || "string" == typeof e;
        t && (e = {
            textures: {},
            images: {}
        });
        const n = {
            metadata: {
                version: 4.5,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        function i(e) {
            const t = [];
            for (const n in e) {
                const i = e[n];
                delete i.metadata,
                t.push(i)
            }
            return t
        }
        if (n.uuid = this.uuid,
        n.type = this.type,
        "" !== this.name && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        void 0 !== this.roughness && (n.roughness = this.roughness),
        void 0 !== this.metalness && (n.metalness = this.metalness),
        void 0 !== this.sheen && (n.sheen = this.sheen),
        this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
        void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness),
        this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity),
        this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
        void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity),
        this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
        void 0 !== this.shininess && (n.shininess = this.shininess),
        void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
        void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
        this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
        this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid,
        n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
        void 0 !== this.iridescence && (n.iridescence = this.iridescence),
        void 0 !== this.iridescenceIOR && (n.iridescenceIOR = this.iridescenceIOR),
        void 0 !== this.iridescenceThicknessRange && (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
        this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
        this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid,
        n.lightMapIntensity = this.lightMapIntensity),
        this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid,
        n.aoMapIntensity = this.aoMapIntensity),
        this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid,
        n.bumpScale = this.bumpScale),
        this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid,
        n.normalMapType = this.normalMapType,
        n.normalScale = this.normalScale.toArray()),
        this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid,
        n.displacementScale = this.displacementScale,
        n.displacementBias = this.displacementBias),
        this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
        this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
        this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
        this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid,
        void 0 !== this.combine && (n.combine = this.combine)),
        void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity),
        void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
        void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio),
        this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
        void 0 !== this.transmission && (n.transmission = this.transmission),
        this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
        void 0 !== this.thickness && (n.thickness = this.thickness),
        this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
        void 0 !== this.attenuationDistance && (n.attenuationDistance = this.attenuationDistance),
        void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()),
        void 0 !== this.size && (n.size = this.size),
        null !== this.shadowSide && (n.shadowSide = this.shadowSide),
        void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
        1 !== this.blending && (n.blending = this.blending),
        0 !== this.side && (n.side = this.side),
        this.vertexColors && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        !0 === this.transparent && (n.transparent = this.transparent),
        n.depthFunc = this.depthFunc,
        n.depthTest = this.depthTest,
        n.depthWrite = this.depthWrite,
        n.colorWrite = this.colorWrite,
        n.stencilWrite = this.stencilWrite,
        n.stencilWriteMask = this.stencilWriteMask,
        n.stencilFunc = this.stencilFunc,
        n.stencilRef = this.stencilRef,
        n.stencilFuncMask = this.stencilFuncMask,
        n.stencilFail = this.stencilFail,
        n.stencilZFail = this.stencilZFail,
        n.stencilZPass = this.stencilZPass,
        void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
        !0 === this.polygonOffset && (n.polygonOffset = !0),
        0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor),
        0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits),
        void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth),
        void 0 !== this.dashSize && (n.dashSize = this.dashSize),
        void 0 !== this.gapSize && (n.gapSize = this.gapSize),
        void 0 !== this.scale && (n.scale = this.scale),
        !0 === this.dithering && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage),
        !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha),
        !0 === this.wireframe && (n.wireframe = this.wireframe),
        this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
        "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
        "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
        !0 === this.flatShading && (n.flatShading = this.flatShading),
        !1 === this.visible && (n.visible = !1),
        !1 === this.toneMapped && (n.toneMapped = !1),
        !1 === this.fog && (n.fog = !1),
        "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
        t) {
            const t = i(e.textures)
              , r = i(e.images);
            t.length > 0 && (n.textures = t),
            r.length > 0 && (n.images = r)
        }
        return n
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(e) {
        this.name = e.name,
        this.blending = e.blending,
        this.side = e.side,
        this.vertexColors = e.vertexColors,
        this.opacity = e.opacity,
        this.transparent = e.transparent,
        this.blendSrc = e.blendSrc,
        this.blendDst = e.blendDst,
        this.blendEquation = e.blendEquation,
        this.blendSrcAlpha = e.blendSrcAlpha,
        this.blendDstAlpha = e.blendDstAlpha,
        this.blendEquationAlpha = e.blendEquationAlpha,
        this.depthFunc = e.depthFunc,
        this.depthTest = e.depthTest,
        this.depthWrite = e.depthWrite,
        this.stencilWriteMask = e.stencilWriteMask,
        this.stencilFunc = e.stencilFunc,
        this.stencilRef = e.stencilRef,
        this.stencilFuncMask = e.stencilFuncMask,
        this.stencilFail = e.stencilFail,
        this.stencilZFail = e.stencilZFail,
        this.stencilZPass = e.stencilZPass,
        this.stencilWrite = e.stencilWrite;
        const t = e.clippingPlanes;
        let n = null;
        if (null !== t) {
            const e = t.length;
            n = new Array(e);
            for (let i = 0; i !== e; ++i)
                n[i] = t[i].clone()
        }
        return this.clippingPlanes = n,
        this.clipIntersection = e.clipIntersection,
        this.clipShadows = e.clipShadows,
        this.shadowSide = e.shadowSide,
        this.colorWrite = e.colorWrite,
        this.precision = e.precision,
        this.polygonOffset = e.polygonOffset,
        this.polygonOffsetFactor = e.polygonOffsetFactor,
        this.polygonOffsetUnits = e.polygonOffsetUnits,
        this.dithering = e.dithering,
        this.alphaTest = e.alphaTest,
        this.alphaToCoverage = e.alphaToCoverage,
        this.premultipliedAlpha = e.premultipliedAlpha,
        this.visible = e.visible,
        this.toneMapped = e.toneMapped,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    set needsUpdate(e) {
        !0 === e && this.version++
    }
    get vertexTangents() {
        return console.warn("THREE." + this.type + ": .vertexTangents has been removed."),
        !1
    }
    set vertexTangents(e) {
        console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
    }
}
lt.fromType = function() {
    return null
}
;
class ct extends lt {
    constructor(e) {
        super(),
        this.isMeshBasicMaterial = !0,
        this.type = "MeshBasicMaterial",
        this.color = new z(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = 0,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.specularMap = e.specularMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.combine = e.combine,
        this.reflectivity = e.reflectivity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.fog = e.fog,
        this
    }
}
const ht = new X
  , ut = new M;
class dt {
    constructor(e, t, n) {
        if (Array.isArray(e))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.isBufferAttribute = !0,
        this.name = "",
        this.array = e,
        this.itemSize = t,
        this.count = void 0 !== e ? e.length / t : 0,
        this.normalized = !0 === n,
        this.usage = 35044,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        !0 === e && this.version++
    }
    setUsage(e) {
        return this.usage = e,
        this
    }
    copy(e) {
        return this.name = e.name,
        this.array = new e.array.constructor(e.array),
        this.itemSize = e.itemSize,
        this.count = e.count,
        this.normalized = e.normalized,
        this.usage = e.usage,
        this
    }
    copyAt(e, t, n) {
        e *= this.itemSize,
        n *= t.itemSize;
        for (let i = 0, r = this.itemSize; i < r; i++)
            this.array[e + i] = t.array[n + i];
        return this
    }
    copyArray(e) {
        return this.array.set(e),
        this
    }
    copyColorsArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, r = e.length; i < r; i++) {
            let r = e[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i),
            r = new z),
            t[n++] = r.r,
            t[n++] = r.g,
            t[n++] = r.b
        }
        return this
    }
    copyVector2sArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, r = e.length; i < r; i++) {
            let r = e[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i),
            r = new M),
            t[n++] = r.x,
            t[n++] = r.y
        }
        return this
    }
    copyVector3sArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, r = e.length; i < r; i++) {
            let r = e[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i),
            r = new X),
            t[n++] = r.x,
            t[n++] = r.y,
            t[n++] = r.z
        }
        return this
    }
    copyVector4sArray(e) {
        const t = this.array;
        let n = 0;
        for (let i = 0, r = e.length; i < r; i++) {
            let r = e[i];
            void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i),
            r = new V),
            t[n++] = r.x,
            t[n++] = r.y,
            t[n++] = r.z,
            t[n++] = r.w
        }
        return this
    }
    applyMatrix3(e) {
        if (2 === this.itemSize)
            for (let t = 0, n = this.count; t < n; t++)
                ut.fromBufferAttribute(this, t),
                ut.applyMatrix3(e),
                this.setXY(t, ut.x, ut.y);
        else if (3 === this.itemSize)
            for (let t = 0, n = this.count; t < n; t++)
                ht.fromBufferAttribute(this, t),
                ht.applyMatrix3(e),
                this.setXYZ(t, ht.x, ht.y, ht.z);
        return this
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.count; t < n; t++)
            ht.fromBufferAttribute(this, t),
            ht.applyMatrix4(e),
            this.setXYZ(t, ht.x, ht.y, ht.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++)
            ht.fromBufferAttribute(this, t),
            ht.applyNormalMatrix(e),
            this.setXYZ(t, ht.x, ht.y, ht.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++)
            ht.fromBufferAttribute(this, t),
            ht.transformDirection(e),
            this.setXYZ(t, ht.x, ht.y, ht.z);
        return this
    }
    set(e, t=0) {
        return this.array.set(e, t),
        this
    }
    getX(e) {
        return this.array[e * this.itemSize]
    }
    setX(e, t) {
        return this.array[e * this.itemSize] = t,
        this
    }
    getY(e) {
        return this.array[e * this.itemSize + 1]
    }
    setY(e, t) {
        return this.array[e * this.itemSize + 1] = t,
        this
    }
    getZ(e) {
        return this.array[e * this.itemSize + 2]
    }
    setZ(e, t) {
        return this.array[e * this.itemSize + 2] = t,
        this
    }
    getW(e) {
        return this.array[e * this.itemSize + 3]
    }
    setW(e, t) {
        return this.array[e * this.itemSize + 3] = t,
        this
    }
    setXY(e, t, n) {
        return e *= this.itemSize,
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this
    }
    setXYZ(e, t, n, i) {
        return e *= this.itemSize,
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = i,
        this
    }
    setXYZW(e, t, n, i, r) {
        return e *= this.itemSize,
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = i,
        this.array[e + 3] = r,
        this
    }
    onUpload(e) {
        return this.onUploadCallback = e,
        this
    }
    clone() {
        return new this.constructor(this.array,this.itemSize).copy(this)
    }
    toJSON() {
        const e = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.prototype.slice.call(this.array),
            normalized: this.normalized
        };
        return "" !== this.name && (e.name = this.name),
        35044 !== this.usage && (e.usage = this.usage),
        0 === this.updateRange.offset && -1 === this.updateRange.count || (e.updateRange = this.updateRange),
        e
    }
}
class pt extends dt {
    constructor(e, t, n) {
        super(new Uint16Array(e), t, n)
    }
}
class mt extends dt {
    constructor(e, t, n) {
        super(new Uint32Array(e), t, n)
    }
}
class ft extends dt {
    constructor(e, t, n) {
        super(new Float32Array(e), t, n)
    }
}
let gt = 0;
const vt = new Se
  , _t = new $e
  , xt = new X
  , yt = new K
  , Mt = new K
  , bt = new X;
class wt extends l {
    constructor() {
        super(),
        this.isBufferGeometry = !0,
        Object.defineProperty(this, "id", {
            value: gt++
        }),
        this.uuid = p(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.morphTargetsRelative = !1,
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(e) {
        return Array.isArray(e) ? this.index = new (w(e) ? mt : pt)(e,1) : this.index = e,
        this
    }
    getAttribute(e) {
        return this.attributes[e]
    }
    setAttribute(e, t) {
        return this.attributes[e] = t,
        this
    }
    deleteAttribute(e) {
        return delete this.attributes[e],
        this
    }
    hasAttribute(e) {
        return void 0 !== this.attributes[e]
    }
    addGroup(e, t, n=0) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: n
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(e, t) {
        this.drawRange.start = e,
        this.drawRange.count = t
    }
    applyMatrix4(e) {
        const t = this.attributes.position;
        void 0 !== t && (t.applyMatrix4(e),
        t.needsUpdate = !0);
        const n = this.attributes.normal;
        if (void 0 !== n) {
            const t = (new b).getNormalMatrix(e);
            n.applyNormalMatrix(t),
            n.needsUpdate = !0
        }
        const i = this.attributes.tangent;
        return void 0 !== i && (i.transformDirection(e),
        i.needsUpdate = !0),
        null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this
    }
    applyQuaternion(e) {
        return vt.makeRotationFromQuaternion(e),
        this.applyMatrix4(vt),
        this
    }
    rotateX(e) {
        return vt.makeRotationX(e),
        this.applyMatrix4(vt),
        this
    }
    rotateY(e) {
        return vt.makeRotationY(e),
        this.applyMatrix4(vt),
        this
    }
    rotateZ(e) {
        return vt.makeRotationZ(e),
        this.applyMatrix4(vt),
        this
    }
    translate(e, t, n) {
        return vt.makeTranslation(e, t, n),
        this.applyMatrix4(vt),
        this
    }
    scale(e, t, n) {
        return vt.makeScale(e, t, n),
        this.applyMatrix4(vt),
        this
    }
    lookAt(e) {
        return _t.lookAt(e),
        _t.updateMatrix(),
        this.applyMatrix4(_t.matrix),
        this
    }
    center() {
        return this.computeBoundingBox(),
        this.boundingBox.getCenter(xt).negate(),
        this.translate(xt.x, xt.y, xt.z),
        this
    }
    setFromPoints(e) {
        const t = [];
        for (let n = 0, i = e.length; n < i; n++) {
            const i = e[n];
            t.push(i.x, i.y, i.z || 0)
        }
        return this.setAttribute("position", new ft(t,3)),
        this
    }
    computeBoundingBox() {
        null === this.boundingBox && (this.boundingBox = new K);
        const e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute)
            return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
            void this.boundingBox.set(new X(-1 / 0,-1 / 0,-1 / 0), new X(1 / 0,1 / 0,1 / 0));
        if (void 0 !== e) {
            if (this.boundingBox.setFromBufferAttribute(e),
            t)
                for (let e = 0, n = t.length; e < n; e++) {
                    const n = t[e];
                    yt.setFromBufferAttribute(n),
                    this.morphTargetsRelative ? (bt.addVectors(this.boundingBox.min, yt.min),
                    this.boundingBox.expandByPoint(bt),
                    bt.addVectors(this.boundingBox.max, yt.max),
                    this.boundingBox.expandByPoint(bt)) : (this.boundingBox.expandByPoint(yt.min),
                    this.boundingBox.expandByPoint(yt.max))
                }
        } else
            this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }
    computeBoundingSphere() {
        null === this.boundingSphere && (this.boundingSphere = new fe);
        const e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute)
            return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
            void this.boundingSphere.set(new X, 1 / 0);
        if (e) {
            const n = this.boundingSphere.center;
            if (yt.setFromBufferAttribute(e),
            t)
                for (let e = 0, n = t.length; e < n; e++) {
                    const n = t[e];
                    Mt.setFromBufferAttribute(n),
                    this.morphTargetsRelative ? (bt.addVectors(yt.min, Mt.min),
                    yt.expandByPoint(bt),
                    bt.addVectors(yt.max, Mt.max),
                    yt.expandByPoint(bt)) : (yt.expandByPoint(Mt.min),
                    yt.expandByPoint(Mt.max))
                }
            yt.getCenter(n);
            let i = 0;
            for (let t = 0, r = e.count; t < r; t++)
                bt.fromBufferAttribute(e, t),
                i = Math.max(i, n.distanceToSquared(bt));
            if (t)
                for (let r = 0, s = t.length; r < s; r++) {
                    const s = t[r]
                      , a = this.morphTargetsRelative;
                    for (let t = 0, r = s.count; t < r; t++)
                        bt.fromBufferAttribute(s, t),
                        a && (xt.fromBufferAttribute(e, t),
                        bt.add(xt)),
                        i = Math.max(i, n.distanceToSquared(bt))
                }
            this.boundingSphere.radius = Math.sqrt(i),
            isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    }
    computeTangents() {
        const e = this.index
          , t = this.attributes;
        if (null === e || void 0 === t.position || void 0 === t.normal || void 0 === t.uv)
            return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        const n = e.array
          , i = t.position.array
          , r = t.normal.array
          , s = t.uv.array
          , a = i.length / 3;
        !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new dt(new Float32Array(4 * a),4));
        const o = this.getAttribute("tangent").array
          , l = []
          , c = [];
        for (let e = 0; e < a; e++)
            l[e] = new X,
            c[e] = new X;
        const h = new X
          , u = new X
          , d = new X
          , p = new M
          , m = new M
          , f = new M
          , g = new X
          , v = new X;
        function _(e, t, n) {
            h.fromArray(i, 3 * e),
            u.fromArray(i, 3 * t),
            d.fromArray(i, 3 * n),
            p.fromArray(s, 2 * e),
            m.fromArray(s, 2 * t),
            f.fromArray(s, 2 * n),
            u.sub(h),
            d.sub(h),
            m.sub(p),
            f.sub(p);
            const r = 1 / (m.x * f.y - f.x * m.y);
            isFinite(r) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r),
            v.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r),
            l[e].add(g),
            l[t].add(g),
            l[n].add(g),
            c[e].add(v),
            c[t].add(v),
            c[n].add(v))
        }
        let x = this.groups;
        0 === x.length && (x = [{
            start: 0,
            count: n.length
        }]);
        for (let e = 0, t = x.length; e < t; ++e) {
            const t = x[e]
              , i = t.start;
            for (let e = i, r = i + t.count; e < r; e += 3)
                _(n[e + 0], n[e + 1], n[e + 2])
        }
        const y = new X
          , b = new X
          , w = new X
          , S = new X;
        function T(e) {
            w.fromArray(r, 3 * e),
            S.copy(w);
            const t = l[e];
            y.copy(t),
            y.sub(w.multiplyScalar(w.dot(t))).normalize(),
            b.crossVectors(S, t);
            const n = b.dot(c[e]) < 0 ? -1 : 1;
            o[4 * e] = y.x,
            o[4 * e + 1] = y.y,
            o[4 * e + 2] = y.z,
            o[4 * e + 3] = n
        }
        for (let e = 0, t = x.length; e < t; ++e) {
            const t = x[e]
              , i = t.start;
            for (let e = i, r = i + t.count; e < r; e += 3)
                T(n[e + 0]),
                T(n[e + 1]),
                T(n[e + 2])
        }
    }
    computeVertexNormals() {
        const e = this.index
          , t = this.getAttribute("position");
        if (void 0 !== t) {
            let n = this.getAttribute("normal");
            if (void 0 === n)
                n = new dt(new Float32Array(3 * t.count),3),
                this.setAttribute("normal", n);
            else
                for (let e = 0, t = n.count; e < t; e++)
                    n.setXYZ(e, 0, 0, 0);
            const i = new X
              , r = new X
              , s = new X
              , a = new X
              , o = new X
              , l = new X
              , c = new X
              , h = new X;
            if (e)
                for (let u = 0, d = e.count; u < d; u += 3) {
                    const d = e.getX(u + 0)
                      , p = e.getX(u + 1)
                      , m = e.getX(u + 2);
                    i.fromBufferAttribute(t, d),
                    r.fromBufferAttribute(t, p),
                    s.fromBufferAttribute(t, m),
                    c.subVectors(s, r),
                    h.subVectors(i, r),
                    c.cross(h),
                    a.fromBufferAttribute(n, d),
                    o.fromBufferAttribute(n, p),
                    l.fromBufferAttribute(n, m),
                    a.add(c),
                    o.add(c),
                    l.add(c),
                    n.setXYZ(d, a.x, a.y, a.z),
                    n.setXYZ(p, o.x, o.y, o.z),
                    n.setXYZ(m, l.x, l.y, l.z)
                }
            else
                for (let e = 0, a = t.count; e < a; e += 3)
                    i.fromBufferAttribute(t, e + 0),
                    r.fromBufferAttribute(t, e + 1),
                    s.fromBufferAttribute(t, e + 2),
                    c.subVectors(s, r),
                    h.subVectors(i, r),
                    c.cross(h),
                    n.setXYZ(e + 0, c.x, c.y, c.z),
                    n.setXYZ(e + 1, c.x, c.y, c.z),
                    n.setXYZ(e + 2, c.x, c.y, c.z);
            this.normalizeNormals(),
            n.needsUpdate = !0
        }
    }
    merge(e, t) {
        if (!e || !e.isBufferGeometry)
            return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
        void 0 === t && (t = 0,
        console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
        const n = this.attributes;
        for (const i in n) {
            if (void 0 === e.attributes[i])
                continue;
            const r = n[i].array
              , s = e.attributes[i]
              , a = s.array
              , o = s.itemSize * t
              , l = Math.min(a.length, r.length - o);
            for (let e = 0, t = o; e < l; e++,
            t++)
                r[t] = a[e]
        }
        return this
    }
    normalizeNormals() {
        const e = this.attributes.normal;
        for (let t = 0, n = e.count; t < n; t++)
            bt.fromBufferAttribute(e, t),
            bt.normalize(),
            e.setXYZ(t, bt.x, bt.y, bt.z)
    }
    toNonIndexed() {
        function e(e, t) {
            const n = e.array
              , i = e.itemSize
              , r = e.normalized
              , s = new n.constructor(t.length * i);
            let a = 0
              , o = 0;
            for (let r = 0, l = t.length; r < l; r++) {
                a = e.isInterleavedBufferAttribute ? t[r] * e.data.stride + e.offset : t[r] * i;
                for (let e = 0; e < i; e++)
                    s[o++] = n[a++]
            }
            return new dt(s,i,r)
        }
        if (null === this.index)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
            this;
        const t = new wt
          , n = this.index.array
          , i = this.attributes;
        for (const r in i) {
            const s = e(i[r], n);
            t.setAttribute(r, s)
        }
        const r = this.morphAttributes;
        for (const i in r) {
            const s = []
              , a = r[i];
            for (let t = 0, i = a.length; t < i; t++) {
                const i = e(a[t], n);
                s.push(i)
            }
            t.morphAttributes[i] = s
        }
        t.morphTargetsRelative = this.morphTargetsRelative;
        const s = this.groups;
        for (let e = 0, n = s.length; e < n; e++) {
            const n = s[e];
            t.addGroup(n.start, n.count, n.materialIndex)
        }
        return t
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.5,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (e.uuid = this.uuid,
        e.type = this.type,
        "" !== this.name && (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        void 0 !== this.parameters) {
            const t = this.parameters;
            for (const n in t)
                void 0 !== t[n] && (e[n] = t[n]);
            return e
        }
        e.data = {
            attributes: {}
        };
        const t = this.index;
        null !== t && (e.data.index = {
            type: t.array.constructor.name,
            array: Array.prototype.slice.call(t.array)
        });
        const n = this.attributes;
        for (const t in n) {
            const i = n[t];
            e.data.attributes[t] = i.toJSON(e.data)
        }
        const i = {};
        let r = !1;
        for (const t in this.morphAttributes) {
            const n = this.morphAttributes[t]
              , s = [];
            for (let t = 0, i = n.length; t < i; t++) {
                const i = n[t];
                s.push(i.toJSON(e.data))
            }
            s.length > 0 && (i[t] = s,
            r = !0)
        }
        r && (e.data.morphAttributes = i,
        e.data.morphTargetsRelative = this.morphTargetsRelative);
        const s = this.groups;
        s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
        const a = this.boundingSphere;
        return null !== a && (e.data.boundingSphere = {
            center: a.center.toArray(),
            radius: a.radius
        }),
        e
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    copy(e) {
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null;
        const t = {};
        this.name = e.name;
        const n = e.index;
        null !== n && this.setIndex(n.clone(t));
        const i = e.attributes;
        for (const e in i) {
            const n = i[e];
            this.setAttribute(e, n.clone(t))
        }
        const r = e.morphAttributes;
        for (const e in r) {
            const n = []
              , i = r[e];
            for (let e = 0, r = i.length; e < r; e++)
                n.push(i[e].clone(t));
            this.morphAttributes[e] = n
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        const s = e.groups;
        for (let e = 0, t = s.length; e < t; e++) {
            const t = s[e];
            this.addGroup(t.start, t.count, t.materialIndex)
        }
        const a = e.boundingBox;
        null !== a && (this.boundingBox = a.clone());
        const o = e.boundingSphere;
        return null !== o && (this.boundingSphere = o.clone()),
        this.drawRange.start = e.drawRange.start,
        this.drawRange.count = e.drawRange.count,
        this.userData = e.userData,
        void 0 !== e.parameters && (this.parameters = Object.assign({}, e.parameters)),
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
const St = new Se
  , Tt = new we
  , Et = new fe
  , At = new X
  , Lt = new X
  , Ct = new X
  , Rt = new X
  , Pt = new X
  , Dt = new X
  , It = new X
  , Nt = new X
  , zt = new X
  , Ot = new M
  , Ft = new M
  , Ut = new M
  , kt = new X
  , Bt = new X;
class Ht extends $e {
    constructor(e=new wt, t=new ct) {
        super(),
        this.isMesh = !0,
        this.type = "Mesh",
        this.geometry = e,
        this.material = t,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        void 0 !== e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        void 0 !== e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
        this.material = e.material,
        this.geometry = e.geometry,
        this
    }
    updateMorphTargets() {
        const e = this.geometry.morphAttributes
          , t = Object.keys(e);
        if (t.length > 0) {
            const n = e[t[0]];
            if (void 0 !== n) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let e = 0, t = n.length; e < t; e++) {
                    const t = n[e].name || String(e);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[t] = e
                }
            }
        }
    }
    raycast(e, t) {
        const n = this.geometry
          , i = this.material
          , r = this.matrixWorld;
        if (void 0 === i)
            return;
        if (null === n.boundingSphere && n.computeBoundingSphere(),
        Et.copy(n.boundingSphere),
        Et.applyMatrix4(r),
        !1 === e.ray.intersectsSphere(Et))
            return;
        if (St.copy(r).invert(),
        Tt.copy(e.ray).applyMatrix4(St),
        null !== n.boundingBox && !1 === Tt.intersectsBox(n.boundingBox))
            return;
        let s;
        const a = n.index
          , o = n.attributes.position
          , l = n.morphAttributes.position
          , c = n.morphTargetsRelative
          , h = n.attributes.uv
          , u = n.attributes.uv2
          , d = n.groups
          , p = n.drawRange;
        if (null !== a)
            if (Array.isArray(i))
                for (let n = 0, r = d.length; n < r; n++) {
                    const r = d[n]
                      , m = i[r.materialIndex];
                    for (let n = Math.max(r.start, p.start), i = Math.min(a.count, Math.min(r.start + r.count, p.start + p.count)); n < i; n += 3) {
                        const i = a.getX(n)
                          , d = a.getX(n + 1)
                          , p = a.getX(n + 2);
                        s = Vt(this, m, e, Tt, o, l, c, h, u, i, d, p),
                        s && (s.faceIndex = Math.floor(n / 3),
                        s.face.materialIndex = r.materialIndex,
                        t.push(s))
                    }
                }
            else {
                for (let n = Math.max(0, p.start), r = Math.min(a.count, p.start + p.count); n < r; n += 3) {
                    const r = a.getX(n)
                      , d = a.getX(n + 1)
                      , p = a.getX(n + 2);
                    s = Vt(this, i, e, Tt, o, l, c, h, u, r, d, p),
                    s && (s.faceIndex = Math.floor(n / 3),
                    t.push(s))
                }
            }
        else if (void 0 !== o)
            if (Array.isArray(i))
                for (let n = 0, r = d.length; n < r; n++) {
                    const r = d[n]
                      , a = i[r.materialIndex];
                    for (let n = Math.max(r.start, p.start), i = Math.min(o.count, Math.min(r.start + r.count, p.start + p.count)); n < i; n += 3) {
                        s = Vt(this, a, e, Tt, o, l, c, h, u, n, n + 1, n + 2),
                        s && (s.faceIndex = Math.floor(n / 3),
                        s.face.materialIndex = r.materialIndex,
                        t.push(s))
                    }
                }
            else {
                for (let n = Math.max(0, p.start), r = Math.min(o.count, p.start + p.count); n < r; n += 3) {
                    s = Vt(this, i, e, Tt, o, l, c, h, u, n, n + 1, n + 2),
                    s && (s.faceIndex = Math.floor(n / 3),
                    t.push(s))
                }
            }
    }
}
function Vt(e, t, n, i, r, s, a, o, l, c, h, u) {
    At.fromBufferAttribute(r, c),
    Lt.fromBufferAttribute(r, h),
    Ct.fromBufferAttribute(r, u);
    const d = e.morphTargetInfluences;
    if (s && d) {
        It.set(0, 0, 0),
        Nt.set(0, 0, 0),
        zt.set(0, 0, 0);
        for (let e = 0, t = s.length; e < t; e++) {
            const t = d[e]
              , n = s[e];
            0 !== t && (Rt.fromBufferAttribute(n, c),
            Pt.fromBufferAttribute(n, h),
            Dt.fromBufferAttribute(n, u),
            a ? (It.addScaledVector(Rt, t),
            Nt.addScaledVector(Pt, t),
            zt.addScaledVector(Dt, t)) : (It.addScaledVector(Rt.sub(At), t),
            Nt.addScaledVector(Pt.sub(Lt), t),
            zt.addScaledVector(Dt.sub(Ct), t)))
        }
        At.add(It),
        Lt.add(Nt),
        Ct.add(zt)
    }
    e.isSkinnedMesh && (e.boneTransform(c, At),
    e.boneTransform(h, Lt),
    e.boneTransform(u, Ct));
    const p = function(e, t, n, i, r, s, a, o) {
        let l;
        if (l = 1 === t.side ? i.intersectTriangle(a, s, r, !0, o) : i.intersectTriangle(r, s, a, 2 !== t.side, o),
        null === l)
            return null;
        Bt.copy(o),
        Bt.applyMatrix4(e.matrixWorld);
        const c = n.ray.origin.distanceTo(Bt);
        return c < n.near || c > n.far ? null : {
            distance: c,
            point: Bt.clone(),
            object: e
        }
    }(e, t, n, i, At, Lt, Ct, kt);
    if (p) {
        o && (Ot.fromBufferAttribute(o, c),
        Ft.fromBufferAttribute(o, h),
        Ut.fromBufferAttribute(o, u),
        p.uv = at.getUV(kt, At, Lt, Ct, Ot, Ft, Ut, new M)),
        l && (Ot.fromBufferAttribute(l, c),
        Ft.fromBufferAttribute(l, h),
        Ut.fromBufferAttribute(l, u),
        p.uv2 = at.getUV(kt, At, Lt, Ct, Ot, Ft, Ut, new M));
        const e = {
            a: c,
            b: h,
            c: u,
            normal: new X,
            materialIndex: 0
        };
        at.getNormal(At, Lt, Ct, e.normal),
        p.face = e
    }
    return p
}
class Gt extends wt {
    constructor(e=1, t=1, n=1, i=1, r=1, s=1) {
        super(),
        this.type = "BoxGeometry",
        this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: i,
            heightSegments: r,
            depthSegments: s
        };
        const a = this;
        i = Math.floor(i),
        r = Math.floor(r),
        s = Math.floor(s);
        const o = []
          , l = []
          , c = []
          , h = [];
        let u = 0
          , d = 0;
        function p(e, t, n, i, r, s, p, m, f, g, v) {
            const _ = s / f
              , x = p / g
              , y = s / 2
              , M = p / 2
              , b = m / 2
              , w = f + 1
              , S = g + 1;
            let T = 0
              , E = 0;
            const A = new X;
            for (let s = 0; s < S; s++) {
                const a = s * x - M;
                for (let o = 0; o < w; o++) {
                    const u = o * _ - y;
                    A[e] = u * i,
                    A[t] = a * r,
                    A[n] = b,
                    l.push(A.x, A.y, A.z),
                    A[e] = 0,
                    A[t] = 0,
                    A[n] = m > 0 ? 1 : -1,
                    c.push(A.x, A.y, A.z),
                    h.push(o / f),
                    h.push(1 - s / g),
                    T += 1
                }
            }
            for (let e = 0; e < g; e++)
                for (let t = 0; t < f; t++) {
                    const n = u + t + w * e
                      , i = u + t + w * (e + 1)
                      , r = u + (t + 1) + w * (e + 1)
                      , s = u + (t + 1) + w * e;
                    o.push(n, i, s),
                    o.push(i, r, s),
                    E += 6
                }
            a.addGroup(d, E, v),
            d += E,
            u += T
        }
        p("z", "y", "x", -1, -1, n, t, e, s, r, 0),
        p("z", "y", "x", 1, -1, n, t, -e, s, r, 1),
        p("x", "z", "y", 1, 1, e, n, t, i, s, 2),
        p("x", "z", "y", 1, -1, e, n, -t, i, s, 3),
        p("x", "y", "z", 1, -1, e, t, n, i, r, 4),
        p("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
        this.setIndex(o),
        this.setAttribute("position", new ft(l,3)),
        this.setAttribute("normal", new ft(c,3)),
        this.setAttribute("uv", new ft(h,2))
    }
    static fromJSON(e) {
        return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)
    }
}
function Wt(e) {
    const t = {};
    for (const n in e) {
        t[n] = {};
        for (const i in e[n]) {
            const r = e[n][i];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? t[n][i] = r.clone() : Array.isArray(r) ? t[n][i] = r.slice() : t[n][i] = r
        }
    }
    return t
}
function jt(e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const i = Wt(e[n]);
        for (const e in i)
            t[e] = i[e]
    }
    return t
}
const qt = {
    clone: Wt,
    merge: jt
};
class Xt extends lt {
    constructor(e) {
        super(),
        this.isShaderMaterial = !0,
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
        this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        this.glslVersion = null,
        void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
        this.setValues(e))
    }
    copy(e) {
        return super.copy(e),
        this.fragmentShader = e.fragmentShader,
        this.vertexShader = e.vertexShader,
        this.uniforms = Wt(e.uniforms),
        this.defines = Object.assign({}, e.defines),
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.fog = e.fog,
        this.lights = e.lights,
        this.clipping = e.clipping,
        this.extensions = Object.assign({}, e.extensions),
        this.glslVersion = e.glslVersion,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        t.glslVersion = this.glslVersion,
        t.uniforms = {};
        for (const n in this.uniforms) {
            const i = this.uniforms[n].value;
            i && i.isTexture ? t.uniforms[n] = {
                type: "t",
                value: i.toJSON(e).uuid
            } : i && i.isColor ? t.uniforms[n] = {
                type: "c",
                value: i.getHex()
            } : i && i.isVector2 ? t.uniforms[n] = {
                type: "v2",
                value: i.toArray()
            } : i && i.isVector3 ? t.uniforms[n] = {
                type: "v3",
                value: i.toArray()
            } : i && i.isVector4 ? t.uniforms[n] = {
                type: "v4",
                value: i.toArray()
            } : i && i.isMatrix3 ? t.uniforms[n] = {
                type: "m3",
                value: i.toArray()
            } : i && i.isMatrix4 ? t.uniforms[n] = {
                type: "m4",
                value: i.toArray()
            } : t.uniforms[n] = {
                value: i
            }
        }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        t.vertexShader = this.vertexShader,
        t.fragmentShader = this.fragmentShader;
        const n = {};
        for (const e in this.extensions)
            !0 === this.extensions[e] && (n[e] = !0);
        return Object.keys(n).length > 0 && (t.extensions = n),
        t
    }
}
class Yt extends $e {
    constructor() {
        super(),
        this.isCamera = !0,
        this.type = "Camera",
        this.matrixWorldInverse = new Se,
        this.projectionMatrix = new Se,
        this.projectionMatrixInverse = new Se
    }
    copy(e, t) {
        return super.copy(e, t),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
        this
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(-t[8], -t[9], -t[10]).normalize()
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(e, t) {
        super.updateWorldMatrix(e, t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
class $t extends Yt {
    constructor(e=50, t=1, n=.1, i=2e3) {
        super(),
        this.isPerspectiveCamera = !0,
        this.type = "PerspectiveCamera",
        this.fov = e,
        this.zoom = 1,
        this.near = n,
        this.far = i,
        this.focus = 10,
        this.aspect = t,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.fov = e.fov,
        this.zoom = e.zoom,
        this.near = e.near,
        this.far = e.far,
        this.focus = e.focus,
        this.aspect = e.aspect,
        this.view = null === e.view ? null : Object.assign({}, e.view),
        this.filmGauge = e.filmGauge,
        this.filmOffset = e.filmOffset,
        this
    }
    setFocalLength(e) {
        const t = .5 * this.getFilmHeight() / e;
        this.fov = 2 * d * Math.atan(t),
        this.updateProjectionMatrix()
    }
    getFocalLength() {
        const e = Math.tan(.5 * u * this.fov);
        return .5 * this.getFilmHeight() / e
    }
    getEffectiveFOV() {
        return 2 * d * Math.atan(Math.tan(.5 * u * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    setViewOffset(e, t, n, i, r, s) {
        this.aspect = e / t,
        null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = n,
        this.view.offsetY = i,
        this.view.width = r,
        this.view.height = s,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = this.near;
        let t = e * Math.tan(.5 * u * this.fov) / this.zoom
          , n = 2 * t
          , i = this.aspect * n
          , r = -.5 * i;
        const s = this.view;
        if (null !== this.view && this.view.enabled) {
            const e = s.fullWidth
              , a = s.fullHeight;
            r += s.offsetX * i / e,
            t -= s.offsetY * n / a,
            i *= s.width / e,
            n *= s.height / a
        }
        const a = this.filmOffset;
        0 !== a && (r += e * a / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.fov = this.fov,
        t.object.zoom = this.zoom,
        t.object.near = this.near,
        t.object.far = this.far,
        t.object.focus = this.focus,
        t.object.aspect = this.aspect,
        null !== this.view && (t.object.view = Object.assign({}, this.view)),
        t.object.filmGauge = this.filmGauge,
        t.object.filmOffset = this.filmOffset,
        t
    }
}
class Kt extends $e {
    constructor(e, t, n) {
        if (super(),
        this.type = "CubeCamera",
        !0 !== n.isWebGLCubeRenderTarget)
            return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
        this.renderTarget = n;
        const i = new $t(90,1,e,t);
        i.layers = this.layers,
        i.up.set(0, -1, 0),
        i.lookAt(new X(1,0,0)),
        this.add(i);
        const r = new $t(90,1,e,t);
        r.layers = this.layers,
        r.up.set(0, -1, 0),
        r.lookAt(new X(-1,0,0)),
        this.add(r);
        const s = new $t(90,1,e,t);
        s.layers = this.layers,
        s.up.set(0, 0, 1),
        s.lookAt(new X(0,1,0)),
        this.add(s);
        const a = new $t(90,1,e,t);
        a.layers = this.layers,
        a.up.set(0, 0, -1),
        a.lookAt(new X(0,-1,0)),
        this.add(a);
        const o = new $t(90,1,e,t);
        o.layers = this.layers,
        o.up.set(0, -1, 0),
        o.lookAt(new X(0,0,1)),
        this.add(o);
        const l = new $t(90,1,e,t);
        l.layers = this.layers,
        l.up.set(0, -1, 0),
        l.lookAt(new X(0,0,-1)),
        this.add(l)
    }
    update(e, t) {
        null === this.parent && this.updateMatrixWorld();
        const n = this.renderTarget
          , [i,r,s,a,o,l] = this.children
          , c = e.getRenderTarget()
          , h = e.toneMapping
          , u = e.xr.enabled;
        e.toneMapping = 0,
        e.xr.enabled = !1;
        const d = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1,
        e.setRenderTarget(n, 0),
        e.render(t, i),
        e.setRenderTarget(n, 1),
        e.render(t, r),
        e.setRenderTarget(n, 2),
        e.render(t, s),
        e.setRenderTarget(n, 3),
        e.render(t, a),
        e.setRenderTarget(n, 4),
        e.render(t, o),
        n.texture.generateMipmaps = d,
        e.setRenderTarget(n, 5),
        e.render(t, l),
        e.setRenderTarget(c),
        e.toneMapping = h,
        e.xr.enabled = u,
        n.texture.needsPMREMUpdate = !0
    }
}
class Zt extends H {
    constructor(e, t, n, i, r, s, a, o, l, c) {
        super(e = void 0 !== e ? e : [], t = void 0 !== t ? t : 301, n, i, r, s, a, o, l, c),
        this.isCubeTexture = !0,
        this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
}
class Jt extends G {
    constructor(e, t={}) {
        super(e, e, t),
        this.isWebGLCubeRenderTarget = !0;
        const n = {
            width: e,
            height: e,
            depth: 1
        }
          , i = [n, n, n, n, n, n];
        this.texture = new Zt(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),
        this.texture.isRenderTargetTexture = !0,
        this.texture.generateMipmaps = void 0 !== t.generateMipmaps && t.generateMipmaps,
        this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : 1006
    }
    fromEquirectangularTexture(e, t) {
        this.texture.type = t.type,
        this.texture.encoding = t.encoding,
        this.texture.generateMipmaps = t.generateMipmaps,
        this.texture.minFilter = t.minFilter,
        this.texture.magFilter = t.magFilter;
        const n = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
            fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
        }
          , i = new Gt(5,5,5)
          , r = new Xt({
            name: "CubemapFromEquirect",
            uniforms: Wt(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: 1,
            blending: 0
        });
        r.uniforms.tEquirect.value = t;
        const s = new Ht(i,r)
          , a = t.minFilter;
        1008 === t.minFilter && (t.minFilter = 1006);
        return new Kt(1,10,this).update(e, s),
        t.minFilter = a,
        s.geometry.dispose(),
        s.material.dispose(),
        this
    }
    clear(e, t, n, i) {
        const r = e.getRenderTarget();
        for (let r = 0; r < 6; r++)
            e.setRenderTarget(this, r),
            e.clear(t, n, i);
        e.setRenderTarget(r)
    }
}
const Qt = new X
  , en = new X
  , tn = new b;
class nn {
    constructor(e=new X(1,0,0), t=0) {
        this.isPlane = !0,
        this.normal = e,
        this.constant = t
    }
    set(e, t) {
        return this.normal.copy(e),
        this.constant = t,
        this
    }
    setComponents(e, t, n, i) {
        return this.normal.set(e, t, n),
        this.constant = i,
        this
    }
    setFromNormalAndCoplanarPoint(e, t) {
        return this.normal.copy(e),
        this.constant = -t.dot(this.normal),
        this
    }
    setFromCoplanarPoints(e, t, n) {
        const i = Qt.subVectors(n, t).cross(en.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(i, e),
        this
    }
    copy(e) {
        return this.normal.copy(e.normal),
        this.constant = e.constant,
        this
    }
    normalize() {
        const e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e),
        this.constant *= e,
        this
    }
    negate() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    }
    distanceToPoint(e) {
        return this.normal.dot(e) + this.constant
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius
    }
    projectPoint(e, t) {
        return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
    }
    intersectLine(e, t) {
        const n = e.delta(Qt)
          , i = this.normal.dot(n);
        if (0 === i)
            return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
        const r = -(e.start.dot(this.normal) + this.constant) / i;
        return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start)
    }
    intersectsLine(e) {
        const t = this.distanceToPoint(e.start)
          , n = this.distanceToPoint(e.end);
        return t < 0 && n > 0 || n < 0 && t > 0
    }
    intersectsBox(e) {
        return e.intersectsPlane(this)
    }
    intersectsSphere(e) {
        return e.intersectsPlane(this)
    }
    coplanarPoint(e) {
        return e.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(e, t) {
        const n = t || tn.getNormalMatrix(e)
          , i = this.coplanarPoint(Qt).applyMatrix4(e)
          , r = this.normal.applyMatrix3(n).normalize();
        return this.constant = -i.dot(r),
        this
    }
    translate(e) {
        return this.constant -= e.dot(this.normal),
        this
    }
    equals(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
const rn = new fe
  , sn = new X;
class an {
    constructor(e=new nn, t=new nn, n=new nn, i=new nn, r=new nn, s=new nn) {
        this.planes = [e, t, n, i, r, s]
    }
    set(e, t, n, i, r, s) {
        const a = this.planes;
        return a[0].copy(e),
        a[1].copy(t),
        a[2].copy(n),
        a[3].copy(i),
        a[4].copy(r),
        a[5].copy(s),
        this
    }
    copy(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++)
            t[n].copy(e.planes[n]);
        return this
    }
    setFromProjectionMatrix(e) {
        const t = this.planes
          , n = e.elements
          , i = n[0]
          , r = n[1]
          , s = n[2]
          , a = n[3]
          , o = n[4]
          , l = n[5]
          , c = n[6]
          , h = n[7]
          , u = n[8]
          , d = n[9]
          , p = n[10]
          , m = n[11]
          , f = n[12]
          , g = n[13]
          , v = n[14]
          , _ = n[15];
        return t[0].setComponents(a - i, h - o, m - u, _ - f).normalize(),
        t[1].setComponents(a + i, h + o, m + u, _ + f).normalize(),
        t[2].setComponents(a + r, h + l, m + d, _ + g).normalize(),
        t[3].setComponents(a - r, h - l, m - d, _ - g).normalize(),
        t[4].setComponents(a - s, h - c, m - p, _ - v).normalize(),
        t[5].setComponents(a + s, h + c, m + p, _ + v).normalize(),
        this
    }
    intersectsObject(e) {
        const t = e.geometry;
        return null === t.boundingSphere && t.computeBoundingSphere(),
        rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
        this.intersectsSphere(rn)
    }
    intersectsSprite(e) {
        return rn.center.set(0, 0, 0),
        rn.radius = .7071067811865476,
        rn.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(rn)
    }
    intersectsSphere(e) {
        const t = this.planes
          , n = e.center
          , i = -e.radius;
        for (let e = 0; e < 6; e++) {
            if (t[e].distanceToPoint(n) < i)
                return !1
        }
        return !0
    }
    intersectsBox(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) {
            const i = t[n];
            if (sn.x = i.normal.x > 0 ? e.max.x : e.min.x,
            sn.y = i.normal.y > 0 ? e.max.y : e.min.y,
            sn.z = i.normal.z > 0 ? e.max.z : e.min.z,
            i.distanceToPoint(sn) < 0)
                return !1
        }
        return !0
    }
    containsPoint(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++)
            if (t[n].distanceToPoint(e) < 0)
                return !1;
        return !0
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
function on() {
    let e = null
      , t = !1
      , n = null
      , i = null;
    function r(t, s) {
        n(t, s),
        i = e.requestAnimationFrame(r)
    }
    return {
        start: function() {
            !0 !== t && null !== n && (i = e.requestAnimationFrame(r),
            t = !0)
        },
        stop: function() {
            e.cancelAnimationFrame(i),
            t = !1
        },
        setAnimationLoop: function(e) {
            n = e
        },
        setContext: function(t) {
            e = t
        }
    }
}
function ln(e, t) {
    const n = t.isWebGL2
      , i = new WeakMap;
    return {
        get: function(e) {
            return e.isInterleavedBufferAttribute && (e = e.data),
            i.get(e)
        },
        remove: function(t) {
            t.isInterleavedBufferAttribute && (t = t.data);
            const n = i.get(t);
            n && (e.deleteBuffer(n.buffer),
            i.delete(t))
        },
        update: function(t, r) {
            if (t.isGLBufferAttribute) {
                const e = i.get(t);
                return void ((!e || e.version < t.version) && i.set(t, {
                    buffer: t.buffer,
                    type: t.type,
                    bytesPerElement: t.elementSize,
                    version: t.version
                }))
            }
            t.isInterleavedBufferAttribute && (t = t.data);
            const s = i.get(t);
            void 0 === s ? i.set(t, function(t, i) {
                const r = t.array
                  , s = t.usage
                  , a = e.createBuffer();
                let o;
                if (e.bindBuffer(i, a),
                e.bufferData(i, r, s),
                t.onUploadCallback(),
                r instanceof Float32Array)
                    o = 5126;
                else if (r instanceof Uint16Array)
                    if (t.isFloat16BufferAttribute) {
                        if (!n)
                            throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                        o = 5131
                    } else
                        o = 5123;
                else if (r instanceof Int16Array)
                    o = 5122;
                else if (r instanceof Uint32Array)
                    o = 5125;
                else if (r instanceof Int32Array)
                    o = 5124;
                else if (r instanceof Int8Array)
                    o = 5120;
                else if (r instanceof Uint8Array)
                    o = 5121;
                else {
                    if (!(r instanceof Uint8ClampedArray))
                        throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
                    o = 5121
                }
                return {
                    buffer: a,
                    type: o,
                    bytesPerElement: r.BYTES_PER_ELEMENT,
                    version: t.version
                }
            }(t, r)) : s.version < t.version && (!function(t, i, r) {
                const s = i.array
                  , a = i.updateRange;
                e.bindBuffer(r, t),
                -1 === a.count ? e.bufferSubData(r, 0, s) : (n ? e.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : e.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)),
                a.count = -1)
            }(s.buffer, t, r),
            s.version = t.version)
        }
    }
}
class cn extends wt {
    constructor(e=1, t=1, n=1, i=1) {
        super(),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: i
        };
        const r = e / 2
          , s = t / 2
          , a = Math.floor(n)
          , o = Math.floor(i)
          , l = a + 1
          , c = o + 1
          , h = e / a
          , u = t / o
          , d = []
          , p = []
          , m = []
          , f = [];
        for (let e = 0; e < c; e++) {
            const t = e * u - s;
            for (let n = 0; n < l; n++) {
                const i = n * h - r;
                p.push(i, -t, 0),
                m.push(0, 0, 1),
                f.push(n / a),
                f.push(1 - e / o)
            }
        }
        for (let e = 0; e < o; e++)
            for (let t = 0; t < a; t++) {
                const n = t + l * e
                  , i = t + l * (e + 1)
                  , r = t + 1 + l * (e + 1)
                  , s = t + 1 + l * e;
                d.push(n, i, s),
                d.push(i, r, s)
            }
        this.setIndex(d),
        this.setAttribute("position", new ft(p,3)),
        this.setAttribute("normal", new ft(m,3)),
        this.setAttribute("uv", new ft(f,2))
    }
    static fromJSON(e) {
        return new cn(e.width,e.height,e.widthSegments,e.heightSegments)
    }
}
const hn = {
    alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
    alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment: "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
    alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
    aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
    aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
    begin_vertex: "vec3 transformed = vec3( position );",
    beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\n#ifdef USE_IRIDESCENCE\nvec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\n#endif\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif",
    iridescence_fragment: "#ifdef USE_IRIDESCENCE\nconst mat3 XYZ_TO_REC709 = mat3(\n    3.2404542, -0.9692660,  0.0556434,\n   -1.5371385,  1.8760108, -0.2040259,\n   -0.4985314,  0.0415560,  1.0572252\n);\nvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n   vec3 sqrtF0 = sqrt( fresnel0 );\n   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n}\nvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n}\nfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n}\nvec3 evalSensitivity( float OPD, vec3 shift ) {\n   float phase = 2.0 * PI * OPD * 1.0e-9;\n   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );\n   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );\n   xyz /= 1.0685e-7;\n   vec3 srgb = XYZ_TO_REC709 * xyz;\n   return srgb;\n}\nvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n   vec3 I;\n   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n   float cosTheta2Sq = 1.0 - sinTheta2Sq;\n   if ( cosTheta2Sq < 0.0 ) {\n       return vec3( 1.0 );\n   }\n   float cosTheta2 = sqrt( cosTheta2Sq );\n   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n   float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n   float R21 = R12;\n   float T121 = 1.0 - R12;\n   float phi12 = 0.0;\n   if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n   float phi21 = PI - phi12;\n   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n   vec3 phi23 = vec3( 0.0 );\n   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;\n   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;\n   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;\n   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n   vec3 phi = vec3( phi21 ) + phi23;\n   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n   vec3 r123 = sqrt( R123 );\n   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n   vec3 C0 = R12 + Rs;\n   I = C0;\n   vec3 Cm = Rs - T121;\n   for ( int m = 1; m <= 2; ++m ) {\n       Cm *= r123;\n       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n       I += Cm * Sm;\n   }\n   return max( I, vec3( 0.0 ) );\n}\n#endif",
    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
    clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
    clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
    color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
    common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
    cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
    defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
    displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
    displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
    encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
    envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
    envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
    envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
    envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",
    envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
    fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
    gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
    lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointLightInfo( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotLightInfo( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
    lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
    lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
    lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
    lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
    lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif",
    lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n\t#else\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\nfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\nif ( material.iridescenceThickness == 0.0 ) {\n\tmaterial.iridescence = 0.0;\n} else {\n\tmaterial.iridescence = saturate( material.iridescence );\n}\nif ( material.iridescence > 0.0 ) {\n\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
    lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
    logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
    logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
    map_fragment: "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
    map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
    morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
    normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
    normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
    normal_pars_fragment: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
    normal_pars_vertex: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
    normal_vertex: "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
    clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
    clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
    clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
    iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
    output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
    packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
    premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
    roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
    shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
    shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
    skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif",
    skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
    transmission_fragment: "#ifdef USE_TRANSMISSION\n\tfloat transmissionAlpha = 1.0;\n\tfloat transmissionFactor = transmission;\n\tfloat thicknessFactor = thickness;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\ttransmissionFactor *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tthicknessFactor *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n\t\tattenuationColor, attenuationDistance );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n\ttransmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif",
    transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef texture2DLodEXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( attenuationDistance == 0.0 ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",
    uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
    uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
    uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
    uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
    uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
    uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
    worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
    background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tgl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n\t#endif\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
    depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
    distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
    distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
    equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
    equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
    meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
    meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
    meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
    meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
    meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
    points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}"
}
  , un = {
    common: {
        diffuse: {
            value: new z(16777215)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        uvTransform: {
            value: new b
        },
        uv2Transform: {
            value: new b
        },
        alphaMap: {
            value: null
        },
        alphaTest: {
            value: 0
        }
    },
    specularmap: {
        specularMap: {
            value: null
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        ior: {
            value: 1.5
        },
        refractionRatio: {
            value: .98
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalScale: {
            value: new M(1,1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 25e-5
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2e3
        },
        fogColor: {
            value: new z(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMap: {
            value: []
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotShadowMap: {
            value: []
        },
        spotShadowMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMap: {
            value: []
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        ltc_1: {
            value: null
        },
        ltc_2: {
            value: null
        }
    },
    points: {
        diffuse: {
            value: new z(16777215)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new b
        }
    },
    sprite: {
        diffuse: {
            value: new z(16777215)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new M(.5,.5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new b
        }
    }
}
  , dn = {
    basic: {
        uniforms: jt([un.common, un.specularmap, un.envmap, un.aomap, un.lightmap, un.fog]),
        vertexShader: hn.meshbasic_vert,
        fragmentShader: hn.meshbasic_frag
    },
    lambert: {
        uniforms: jt([un.common, un.specularmap, un.envmap, un.aomap, un.lightmap, un.emissivemap, un.fog, un.lights, {
            emissive: {
                value: new z(0)
            }
        }]),
        vertexShader: hn.meshlambert_vert,
        fragmentShader: hn.meshlambert_frag
    },
    phong: {
        uniforms: jt([un.common, un.specularmap, un.envmap, un.aomap, un.lightmap, un.emissivemap, un.bumpmap, un.normalmap, un.displacementmap, un.fog, un.lights, {
            emissive: {
                value: new z(0)
            },
            specular: {
                value: new z(1118481)
            },
            shininess: {
                value: 30
            }
        }]),
        vertexShader: hn.meshphong_vert,
        fragmentShader: hn.meshphong_frag
    },
    standard: {
        uniforms: jt([un.common, un.envmap, un.aomap, un.lightmap, un.emissivemap, un.bumpmap, un.normalmap, un.displacementmap, un.roughnessmap, un.metalnessmap, un.fog, un.lights, {
            emissive: {
                value: new z(0)
            },
            roughness: {
                value: 1
            },
            metalness: {
                value: 0
            },
            envMapIntensity: {
                value: 1
            }
        }]),
        vertexShader: hn.meshphysical_vert,
        fragmentShader: hn.meshphysical_frag
    },
    toon: {
        uniforms: jt([un.common, un.aomap, un.lightmap, un.emissivemap, un.bumpmap, un.normalmap, un.displacementmap, un.gradientmap, un.fog, un.lights, {
            emissive: {
                value: new z(0)
            }
        }]),
        vertexShader: hn.meshtoon_vert,
        fragmentShader: hn.meshtoon_frag
    },
    matcap: {
        uniforms: jt([un.common, un.bumpmap, un.normalmap, un.displacementmap, un.fog, {
            matcap: {
                value: null
            }
        }]),
        vertexShader: hn.meshmatcap_vert,
        fragmentShader: hn.meshmatcap_frag
    },
    points: {
        uniforms: jt([un.points, un.fog]),
        vertexShader: hn.points_vert,
        fragmentShader: hn.points_frag
    },
    dashed: {
        uniforms: jt([un.common, un.fog, {
            scale: {
                value: 1
            },
            dashSize: {
                value: 1
            },
            totalSize: {
                value: 2
            }
        }]),
        vertexShader: hn.linedashed_vert,
        fragmentShader: hn.linedashed_frag
    },
    depth: {
        uniforms: jt([un.common, un.displacementmap]),
        vertexShader: hn.depth_vert,
        fragmentShader: hn.depth_frag
    },
    normal: {
        uniforms: jt([un.common, un.bumpmap, un.normalmap, un.displacementmap, {
            opacity: {
                value: 1
            }
        }]),
        vertexShader: hn.meshnormal_vert,
        fragmentShader: hn.meshnormal_frag
    },
    sprite: {
        uniforms: jt([un.sprite, un.fog]),
        vertexShader: hn.sprite_vert,
        fragmentShader: hn.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new b
            },
            t2D: {
                value: null
            }
        },
        vertexShader: hn.background_vert,
        fragmentShader: hn.background_frag
    },
    cube: {
        uniforms: jt([un.envmap, {
            opacity: {
                value: 1
            }
        }]),
        vertexShader: hn.cube_vert,
        fragmentShader: hn.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: hn.equirect_vert,
        fragmentShader: hn.equirect_frag
    },
    distanceRGBA: {
        uniforms: jt([un.common, un.displacementmap, {
            referencePosition: {
                value: new X
            },
            nearDistance: {
                value: 1
            },
            farDistance: {
                value: 1e3
            }
        }]),
        vertexShader: hn.distanceRGBA_vert,
        fragmentShader: hn.distanceRGBA_frag
    },
    shadow: {
        uniforms: jt([un.lights, un.fog, {
            color: {
                value: new z(0)
            },
            opacity: {
                value: 1
            }
        }]),
        vertexShader: hn.shadow_vert,
        fragmentShader: hn.shadow_frag
    }
};
function pn(e, t, n, i, r, s) {
    const a = new z(0);
    let o, l, c = !0 === r ? 0 : 1, h = null, u = 0, d = null;
    function p(e, t) {
        n.buffers.color.setClear(e.r, e.g, e.b, t, s)
    }
    return {
        getClearColor: function() {
            return a
        },
        setClearColor: function(e, t=1) {
            a.set(e),
            c = t,
            p(a, c)
        },
        getClearAlpha: function() {
            return c
        },
        setClearAlpha: function(e) {
            c = e,
            p(a, c)
        },
        render: function(n, r) {
            let s = !1
              , m = !0 === r.isScene ? r.background : null;
            m && m.isTexture && (m = t.get(m));
            const f = e.xr
              , g = f.getSession && f.getSession();
            g && "additive" === g.environmentBlendMode && (m = null),
            null === m ? p(a, c) : m && m.isColor && (p(m, 1),
            s = !0),
            (e.autoClear || s) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
            m && (m.isCubeTexture || 306 === m.mapping) ? (void 0 === l && (l = new Ht(new Gt(1,1,1),new Xt({
                name: "BackgroundCubeMaterial",
                uniforms: Wt(dn.cube.uniforms),
                vertexShader: dn.cube.vertexShader,
                fragmentShader: dn.cube.fragmentShader,
                side: 1,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })),
            l.geometry.deleteAttribute("normal"),
            l.geometry.deleteAttribute("uv"),
            l.onBeforeRender = function(e, t, n) {
                this.matrixWorld.copyPosition(n.matrixWorld)
            }
            ,
            Object.defineProperty(l.material, "envMap", {
                get: function() {
                    return this.uniforms.envMap.value
                }
            }),
            i.update(l)),
            l.material.uniforms.envMap.value = m,
            l.material.uniforms.flipEnvMap.value = m.isCubeTexture && !1 === m.isRenderTargetTexture ? -1 : 1,
            h === m && u === m.version && d === e.toneMapping || (l.material.needsUpdate = !0,
            h = m,
            u = m.version,
            d = e.toneMapping),
            l.layers.enableAll(),
            n.unshift(l, l.geometry, l.material, 0, 0, null)) : m && m.isTexture && (void 0 === o && (o = new Ht(new cn(2,2),new Xt({
                name: "BackgroundMaterial",
                uniforms: Wt(dn.background.uniforms),
                vertexShader: dn.background.vertexShader,
                fragmentShader: dn.background.fragmentShader,
                side: 0,
                depthTest: !1,
                depthWrite: !1,
                fog: !1
            })),
            o.geometry.deleteAttribute("normal"),
            Object.defineProperty(o.material, "map", {
                get: function() {
                    return this.uniforms.t2D.value
                }
            }),
            i.update(o)),
            o.material.uniforms.t2D.value = m,
            !0 === m.matrixAutoUpdate && m.updateMatrix(),
            o.material.uniforms.uvTransform.value.copy(m.matrix),
            h === m && u === m.version && d === e.toneMapping || (o.material.needsUpdate = !0,
            h = m,
            u = m.version,
            d = e.toneMapping),
            o.layers.enableAll(),
            n.unshift(o, o.geometry, o.material, 0, 0, null))
        }
    }
}
function mn(e, t, n, i) {
    const r = e.getParameter(34921)
      , s = i.isWebGL2 ? null : t.get("OES_vertex_array_object")
      , a = i.isWebGL2 || null !== s
      , o = {}
      , l = p(null);
    let c = l
      , h = !1;
    function u(t) {
        return i.isWebGL2 ? e.bindVertexArray(t) : s.bindVertexArrayOES(t)
    }
    function d(t) {
        return i.isWebGL2 ? e.deleteVertexArray(t) : s.deleteVertexArrayOES(t)
    }
    function p(e) {
        const t = []
          , n = []
          , i = [];
        for (let e = 0; e < r; e++)
            t[e] = 0,
            n[e] = 0,
            i[e] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: t,
            enabledAttributes: n,
            attributeDivisors: i,
            object: e,
            attributes: {},
            index: null
        }
    }
    function m() {
        const e = c.newAttributes;
        for (let t = 0, n = e.length; t < n; t++)
            e[t] = 0
    }
    function f(e) {
        g(e, 0)
    }
    function g(n, r) {
        const s = c.newAttributes
          , a = c.enabledAttributes
          , o = c.attributeDivisors;
        if (s[n] = 1,
        0 === a[n] && (e.enableVertexAttribArray(n),
        a[n] = 1),
        o[n] !== r) {
            (i.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r),
            o[n] = r
        }
    }
    function v() {
        const t = c.newAttributes
          , n = c.enabledAttributes;
        for (let i = 0, r = n.length; i < r; i++)
            n[i] !== t[i] && (e.disableVertexAttribArray(i),
            n[i] = 0)
    }
    function _(t, n, r, s, a, o) {
        !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? e.vertexAttribPointer(t, n, r, s, a, o) : e.vertexAttribIPointer(t, n, r, a, o)
    }
    function x() {
        y(),
        h = !0,
        c !== l && (c = l,
        u(c.object))
    }
    function y() {
        l.geometry = null,
        l.program = null,
        l.wireframe = !1
    }
    return {
        setup: function(r, l, d, x, y) {
            let M = !1;
            if (a) {
                const t = function(t, n, r) {
                    const a = !0 === r.wireframe;
                    let l = o[t.id];
                    void 0 === l && (l = {},
                    o[t.id] = l);
                    let c = l[n.id];
                    void 0 === c && (c = {},
                    l[n.id] = c);
                    let h = c[a];
                    void 0 === h && (h = p(i.isWebGL2 ? e.createVertexArray() : s.createVertexArrayOES()),
                    c[a] = h);
                    return h
                }(x, d, l);
                c !== t && (c = t,
                u(c.object)),
                M = function(e, t, n, i) {
                    const r = c.attributes
                      , s = t.attributes;
                    let a = 0;
                    const o = n.getAttributes();
                    for (const t in o) {
                        if (o[t].location >= 0) {
                            const n = r[t];
                            let i = s[t];
                            if (void 0 === i && ("instanceMatrix" === t && e.instanceMatrix && (i = e.instanceMatrix),
                            "instanceColor" === t && e.instanceColor && (i = e.instanceColor)),
                            void 0 === n)
                                return !0;
                            if (n.attribute !== i)
                                return !0;
                            if (i && n.data !== i.data)
                                return !0;
                            a++
                        }
                    }
                    return c.attributesNum !== a || c.index !== i
                }(r, x, d, y),
                M && function(e, t, n, i) {
                    const r = {}
                      , s = t.attributes;
                    let a = 0;
                    const o = n.getAttributes();
                    for (const t in o) {
                        if (o[t].location >= 0) {
                            let n = s[t];
                            void 0 === n && ("instanceMatrix" === t && e.instanceMatrix && (n = e.instanceMatrix),
                            "instanceColor" === t && e.instanceColor && (n = e.instanceColor));
                            const i = {};
                            i.attribute = n,
                            n && n.data && (i.data = n.data),
                            r[t] = i,
                            a++
                        }
                    }
                    c.attributes = r,
                    c.attributesNum = a,
                    c.index = i
                }(r, x, d, y)
            } else {
                const e = !0 === l.wireframe;
                c.geometry === x.id && c.program === d.id && c.wireframe === e || (c.geometry = x.id,
                c.program = d.id,
                c.wireframe = e,
                M = !0)
            }
            null !== y && n.update(y, 34963),
            (M || h) && (h = !1,
            function(r, s, a, o) {
                if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === t.get("ANGLE_instanced_arrays"))
                    return;
                m();
                const l = o.attributes
                  , c = a.getAttributes()
                  , h = s.defaultAttributeValues;
                for (const t in c) {
                    const i = c[t];
                    if (i.location >= 0) {
                        let s = l[t];
                        if (void 0 === s && ("instanceMatrix" === t && r.instanceMatrix && (s = r.instanceMatrix),
                        "instanceColor" === t && r.instanceColor && (s = r.instanceColor)),
                        void 0 !== s) {
                            const t = s.normalized
                              , a = s.itemSize
                              , l = n.get(s);
                            if (void 0 === l)
                                continue;
                            const c = l.buffer
                              , h = l.type
                              , u = l.bytesPerElement;
                            if (s.isInterleavedBufferAttribute) {
                                const n = s.data
                                  , l = n.stride
                                  , d = s.offset;
                                if (n.isInstancedInterleavedBuffer) {
                                    for (let e = 0; e < i.locationSize; e++)
                                        g(i.location + e, n.meshPerAttribute);
                                    !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count)
                                } else
                                    for (let e = 0; e < i.locationSize; e++)
                                        f(i.location + e);
                                e.bindBuffer(34962, c);
                                for (let e = 0; e < i.locationSize; e++)
                                    _(i.location + e, a / i.locationSize, h, t, l * u, (d + a / i.locationSize * e) * u)
                            } else {
                                if (s.isInstancedBufferAttribute) {
                                    for (let e = 0; e < i.locationSize; e++)
                                        g(i.location + e, s.meshPerAttribute);
                                    !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count)
                                } else
                                    for (let e = 0; e < i.locationSize; e++)
                                        f(i.location + e);
                                e.bindBuffer(34962, c);
                                for (let e = 0; e < i.locationSize; e++)
                                    _(i.location + e, a / i.locationSize, h, t, a * u, a / i.locationSize * e * u)
                            }
                        } else if (void 0 !== h) {
                            const n = h[t];
                            if (void 0 !== n)
                                switch (n.length) {
                                case 2:
                                    e.vertexAttrib2fv(i.location, n);
                                    break;
                                case 3:
                                    e.vertexAttrib3fv(i.location, n);
                                    break;
                                case 4:
                                    e.vertexAttrib4fv(i.location, n);
                                    break;
                                default:
                                    e.vertexAttrib1fv(i.location, n)
                                }
                        }
                    }
                }
                v()
            }(r, l, d, x),
            null !== y && e.bindBuffer(34963, n.get(y).buffer))
        },
        reset: x,
        resetDefaultState: y,
        dispose: function() {
            x();
            for (const e in o) {
                const t = o[e];
                for (const e in t) {
                    const n = t[e];
                    for (const e in n)
                        d(n[e].object),
                        delete n[e];
                    delete t[e]
                }
                delete o[e]
            }
        },
        releaseStatesOfGeometry: function(e) {
            if (void 0 === o[e.id])
                return;
            const t = o[e.id];
            for (const e in t) {
                const n = t[e];
                for (const e in n)
                    d(n[e].object),
                    delete n[e];
                delete t[e]
            }
            delete o[e.id]
        },
        releaseStatesOfProgram: function(e) {
            for (const t in o) {
                const n = o[t];
                if (void 0 === n[e.id])
                    continue;
                const i = n[e.id];
                for (const e in i)
                    d(i[e].object),
                    delete i[e];
                delete n[e.id]
            }
        },
        initAttributes: m,
        enableAttribute: f,
        disableUnusedAttributes: v
    }
}
function fn(e, t, n, i) {
    const r = i.isWebGL2;
    let s;
    this.setMode = function(e) {
        s = e
    }
    ,
    this.render = function(t, i) {
        e.drawArrays(s, t, i),
        n.update(i, s, 1)
    }
    ,
    this.renderInstances = function(i, a, o) {
        if (0 === o)
            return;
        let l, c;
        if (r)
            l = e,
            c = "drawArraysInstanced";
        else if (l = t.get("ANGLE_instanced_arrays"),
        c = "drawArraysInstancedANGLE",
        null === l)
            return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        l[c](s, i, a, o),
        n.update(a, s, o)
    }
}
function gn(e, t, n) {
    let i;
    function r(t) {
        if ("highp" === t) {
            if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0)
                return "highp";
            t = "mediump"
        }
        return "mediump" === t && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
    }
    const s = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && e instanceof WebGL2ComputeRenderingContext;
    let a = void 0 !== n.precision ? n.precision : "highp";
    const o = r(a);
    o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."),
    a = o);
    const l = s || t.has("WEBGL_draw_buffers")
      , c = !0 === n.logarithmicDepthBuffer
      , h = e.getParameter(34930)
      , u = e.getParameter(35660)
      , d = e.getParameter(3379)
      , p = e.getParameter(34076)
      , m = e.getParameter(34921)
      , f = e.getParameter(36347)
      , g = e.getParameter(36348)
      , v = e.getParameter(36349)
      , _ = u > 0
      , x = s || t.has("OES_texture_float");
    return {
        isWebGL2: s,
        drawBuffers: l,
        getMaxAnisotropy: function() {
            if (void 0 !== i)
                return i;
            if (!0 === t.has("EXT_texture_filter_anisotropic")) {
                const n = t.get("EXT_texture_filter_anisotropic");
                i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            } else
                i = 0;
            return i
        },
        getMaxPrecision: r,
        precision: a,
        logarithmicDepthBuffer: c,
        maxTextures: h,
        maxVertexTextures: u,
        maxTextureSize: d,
        maxCubemapSize: p,
        maxAttributes: m,
        maxVertexUniforms: f,
        maxVaryings: g,
        maxFragmentUniforms: v,
        vertexTextures: _,
        floatFragmentTextures: x,
        floatVertexTextures: _ && x,
        maxSamples: s ? e.getParameter(36183) : 0
    }
}
function vn(e) {
    const t = this;
    let n = null
      , i = 0
      , r = !1
      , s = !1;
    const a = new nn
      , o = new b
      , l = {
        value: null,
        needsUpdate: !1
    };
    function c() {
        l.value !== n && (l.value = n,
        l.needsUpdate = i > 0),
        t.numPlanes = i,
        t.numIntersection = 0
    }
    function h(e, n, i, r) {
        const s = null !== e ? e.length : 0;
        let c = null;
        if (0 !== s) {
            if (c = l.value,
            !0 !== r || null === c) {
                const t = i + 4 * s
                  , r = n.matrixWorldInverse;
                o.getNormalMatrix(r),
                (null === c || c.length < t) && (c = new Float32Array(t));
                for (let t = 0, n = i; t !== s; ++t,
                n += 4)
                    a.copy(e[t]).applyMatrix4(r, o),
                    a.normal.toArray(c, n),
                    c[n + 3] = a.constant
            }
            l.value = c,
            l.needsUpdate = !0
        }
        return t.numPlanes = s,
        t.numIntersection = 0,
        c
    }
    this.uniform = l,
    this.numPlanes = 0,
    this.numIntersection = 0,
    this.init = function(e, t, s) {
        const a = 0 !== e.length || t || 0 !== i || r;
        return r = t,
        n = h(e, s, 0),
        i = e.length,
        a
    }
    ,
    this.beginShadows = function() {
        s = !0,
        h(null)
    }
    ,
    this.endShadows = function() {
        s = !1,
        c()
    }
    ,
    this.setState = function(t, a, o) {
        const u = t.clippingPlanes
          , d = t.clipIntersection
          , p = t.clipShadows
          , m = e.get(t);
        if (!r || null === u || 0 === u.length || s && !p)
            s ? h(null) : c();
        else {
            const e = s ? 0 : i
              , t = 4 * e;
            let r = m.clippingState || null;
            l.value = r,
            r = h(u, a, t, o);
            for (let e = 0; e !== t; ++e)
                r[e] = n[e];
            m.clippingState = r,
            this.numIntersection = d ? this.numPlanes : 0,
            this.numPlanes += e
        }
    }
}
function _n(e) {
    let t = new WeakMap;
    function n(e, t) {
        return 303 === t ? e.mapping = 301 : 304 === t && (e.mapping = 302),
        e
    }
    function i(e) {
        const n = e.target;
        n.removeEventListener("dispose", i);
        const r = t.get(n);
        void 0 !== r && (t.delete(n),
        r.dispose())
    }
    return {
        get: function(r) {
            if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
                const s = r.mapping;
                if (303 === s || 304 === s) {
                    if (t.has(r)) {
                        return n(t.get(r).texture, r.mapping)
                    }
                    {
                        const s = r.image;
                        if (s && s.height > 0) {
                            const a = new Jt(s.height / 2);
                            return a.fromEquirectangularTexture(e, r),
                            t.set(r, a),
                            r.addEventListener("dispose", i),
                            n(a.texture, r.mapping)
                        }
                        return null
                    }
                }
            }
            return r
        },
        dispose: function() {
            t = new WeakMap
        }
    }
}
dn.physical = {
    uniforms: jt([dn.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatNormalScale: {
            value: new M(1,1)
        },
        clearcoatNormalMap: {
            value: null
        },
        iridescence: {
            value: 0
        },
        iridescenceMap: {
            value: null
        },
        iridescenceIOR: {
            value: 1.3
        },
        iridescenceThicknessMinimum: {
            value: 100
        },
        iridescenceThicknessMaximum: {
            value: 400
        },
        iridescenceThicknessMap: {
            value: null
        },
        sheen: {
            value: 0
        },
        sheenColor: {
            value: new z(0)
        },
        sheenColorMap: {
            value: null
        },
        sheenRoughness: {
            value: 1
        },
        sheenRoughnessMap: {
            value: null
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        },
        transmissionSamplerSize: {
            value: new M
        },
        transmissionSamplerMap: {
            value: null
        },
        thickness: {
            value: 0
        },
        thicknessMap: {
            value: null
        },
        attenuationDistance: {
            value: 0
        },
        attenuationColor: {
            value: new z(0)
        },
        specularIntensity: {
            value: 1
        },
        specularIntensityMap: {
            value: null
        },
        specularColor: {
            value: new z(1,1,1)
        },
        specularColorMap: {
            value: null
        }
    }]),
    vertexShader: hn.meshphysical_vert,
    fragmentShader: hn.meshphysical_frag
};
class xn extends Yt {
    constructor(e=-1, t=1, n=1, i=-1, r=.1, s=2e3) {
        super(),
        this.isOrthographicCamera = !0,
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = e,
        this.right = t,
        this.top = n,
        this.bottom = i,
        this.near = r,
        this.far = s,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.left = e.left,
        this.right = e.right,
        this.top = e.top,
        this.bottom = e.bottom,
        this.near = e.near,
        this.far = e.far,
        this.zoom = e.zoom,
        this.view = null === e.view ? null : Object.assign({}, e.view),
        this
    }
    setViewOffset(e, t, n, i, r, s) {
        null === this.view && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = n,
        this.view.offsetY = i,
        this.view.width = r,
        this.view.height = s,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        null !== this.view && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = (this.right - this.left) / (2 * this.zoom)
          , t = (this.top - this.bottom) / (2 * this.zoom)
          , n = (this.right + this.left) / 2
          , i = (this.top + this.bottom) / 2;
        let r = n - e
          , s = n + e
          , a = i + t
          , o = i - t;
        if (null !== this.view && this.view.enabled) {
            const e = (this.right - this.left) / this.view.fullWidth / this.zoom
              , t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            r += e * this.view.offsetX,
            s = r + e * this.view.width,
            a -= t * this.view.offsetY,
            o = a - t * this.view.height
        }
        this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.zoom = this.zoom,
        t.object.left = this.left,
        t.object.right = this.right,
        t.object.top = this.top,
        t.object.bottom = this.bottom,
        t.object.near = this.near,
        t.object.far = this.far,
        null !== this.view && (t.object.view = Object.assign({}, this.view)),
        t
    }
}
const yn = [.125, .215, .35, .446, .526, .582]
  , Mn = new xn
  , bn = new z;
let wn = null;
const Sn = (1 + Math.sqrt(5)) / 2
  , Tn = 1 / Sn
  , En = [new X(1,1,1), new X(-1,1,1), new X(1,1,-1), new X(-1,1,-1), new X(0,Sn,Tn), new X(0,Sn,-Tn), new X(Tn,0,Sn), new X(-Tn,0,Sn), new X(Sn,Tn,0), new X(-Sn,Tn,0)];
class An {
    constructor(e) {
        this._renderer = e,
        this._pingPongRenderTarget = null,
        this._lodMax = 0,
        this._cubeSize = 0,
        this._lodPlanes = [],
        this._sizeLods = [],
        this._sigmas = [],
        this._blurMaterial = null,
        this._cubemapMaterial = null,
        this._equirectMaterial = null,
        this._compileMaterial(this._blurMaterial)
    }
    fromScene(e, t=0, n=.1, i=100) {
        wn = this._renderer.getRenderTarget(),
        this._setSize(256);
        const r = this._allocateTargets();
        return r.depthBuffer = !0,
        this._sceneToCubeUV(e, n, i, r),
        t > 0 && this._blur(r, 0, 0, t),
        this._applyPMREM(r),
        this._cleanup(r),
        r
    }
    fromEquirectangular(e, t=null) {
        return this._fromTexture(e, t)
    }
    fromCubemap(e, t=null) {
        return this._fromTexture(e, t)
    }
    compileCubemapShader() {
        null === this._cubemapMaterial && (this._cubemapMaterial = Pn(),
        this._compileMaterial(this._cubemapMaterial))
    }
    compileEquirectangularShader() {
        null === this._equirectMaterial && (this._equirectMaterial = Rn(),
        this._compileMaterial(this._equirectMaterial))
    }
    dispose() {
        this._dispose(),
        null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
        null !== this._equirectMaterial && this._equirectMaterial.dispose()
    }
    _setSize(e) {
        this._lodMax = Math.floor(Math.log2(e)),
        this._cubeSize = Math.pow(2, this._lodMax)
    }
    _dispose() {
        null !== this._blurMaterial && this._blurMaterial.dispose(),
        null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
        for (let e = 0; e < this._lodPlanes.length; e++)
            this._lodPlanes[e].dispose()
    }
    _cleanup(e) {
        this._renderer.setRenderTarget(wn),
        e.scissorTest = !1,
        Cn(e, 0, 0, e.width, e.height)
    }
    _fromTexture(e, t) {
        301 === e.mapping || 302 === e.mapping ? this._setSize(0 === e.image.length ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4),
        wn = this._renderer.getRenderTarget();
        const n = t || this._allocateTargets();
        return this._textureToCubeUV(e, n),
        this._applyPMREM(n),
        this._cleanup(n),
        n
    }
    _allocateTargets() {
        const e = 3 * Math.max(this._cubeSize, 112)
          , t = 4 * this._cubeSize
          , n = {
            magFilter: 1006,
            minFilter: 1006,
            generateMipmaps: !1,
            type: 1016,
            format: 1023,
            encoding: 3e3,
            depthBuffer: !1
        }
          , i = Ln(e, t, n);
        if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== e) {
            null !== this._pingPongRenderTarget && this._dispose(),
            this._pingPongRenderTarget = Ln(e, t, n);
            const {_lodMax: i} = this;
            ({sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas} = function(e) {
                const t = []
                  , n = []
                  , i = [];
                let r = e;
                const s = e - 4 + 1 + yn.length;
                for (let a = 0; a < s; a++) {
                    const s = Math.pow(2, r);
                    n.push(s);
                    let o = 1 / s;
                    a > e - 4 ? o = yn[a - e + 4 - 1] : 0 === a && (o = 0),
                    i.push(o);
                    const l = 1 / (s - 2)
                      , c = -l
                      , h = 1 + l
                      , u = [c, c, h, c, h, h, c, c, h, h, c, h]
                      , d = 6
                      , p = 6
                      , m = 3
                      , f = 2
                      , g = 1
                      , v = new Float32Array(m * p * d)
                      , _ = new Float32Array(f * p * d)
                      , x = new Float32Array(g * p * d);
                    for (let e = 0; e < d; e++) {
                        const t = e % 3 * 2 / 3 - 1
                          , n = e > 2 ? 0 : -1
                          , i = [t, n, 0, t + 2 / 3, n, 0, t + 2 / 3, n + 1, 0, t, n, 0, t + 2 / 3, n + 1, 0, t, n + 1, 0];
                        v.set(i, m * p * e),
                        _.set(u, f * p * e);
                        const r = [e, e, e, e, e, e];
                        x.set(r, g * p * e)
                    }
                    const y = new wt;
                    y.setAttribute("position", new dt(v,m)),
                    y.setAttribute("uv", new dt(_,f)),
                    y.setAttribute("faceIndex", new dt(x,g)),
                    t.push(y),
                    r > 4 && r--
                }
                return {
                    lodPlanes: t,
                    sizeLods: n,
                    sigmas: i
                }
            }(i)),
            this._blurMaterial = function(e, t, n) {
                const i = new Float32Array(20)
                  , r = new X(0,1,0);
                return new Xt({
                    name: "SphericalGaussianBlur",
                    defines: {
                        n: 20,
                        CUBEUV_TEXEL_WIDTH: 1 / t,
                        CUBEUV_TEXEL_HEIGHT: 1 / n,
                        CUBEUV_MAX_MIP: `${e}.0`
                    },
                    uniforms: {
                        envMap: {
                            value: null
                        },
                        samples: {
                            value: 1
                        },
                        weights: {
                            value: i
                        },
                        latitudinal: {
                            value: !1
                        },
                        dTheta: {
                            value: 0
                        },
                        mipInt: {
                            value: 0
                        },
                        poleAxis: {
                            value: r
                        }
                    },
                    vertexShader: Dn(),
                    fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
                    blending: 0,
                    depthTest: !1,
                    depthWrite: !1
                })
            }(i, e, t)
        }
        return i
    }
    _compileMaterial(e) {
        const t = new Ht(this._lodPlanes[0],e);
        this._renderer.compile(t, Mn)
    }
    _sceneToCubeUV(e, t, n, i) {
        const r = new $t(90,1,t,n)
          , s = [1, -1, 1, 1, 1, 1]
          , a = [1, 1, 1, -1, -1, -1]
          , o = this._renderer
          , l = o.autoClear
          , c = o.toneMapping;
        o.getClearColor(bn),
        o.toneMapping = 0,
        o.autoClear = !1;
        const h = new ct({
            name: "PMREM.Background",
            side: 1,
            depthWrite: !1,
            depthTest: !1
        })
          , u = new Ht(new Gt,h);
        let d = !1;
        const p = e.background;
        p ? p.isColor && (h.color.copy(p),
        e.background = null,
        d = !0) : (h.color.copy(bn),
        d = !0);
        for (let t = 0; t < 6; t++) {
            const n = t % 3;
            0 === n ? (r.up.set(0, s[t], 0),
            r.lookAt(a[t], 0, 0)) : 1 === n ? (r.up.set(0, 0, s[t]),
            r.lookAt(0, a[t], 0)) : (r.up.set(0, s[t], 0),
            r.lookAt(0, 0, a[t]));
            const l = this._cubeSize;
            Cn(i, n * l, t > 2 ? l : 0, l, l),
            o.setRenderTarget(i),
            d && o.render(u, r),
            o.render(e, r)
        }
        u.geometry.dispose(),
        u.material.dispose(),
        o.toneMapping = c,
        o.autoClear = l,
        e.background = p
    }
    _textureToCubeUV(e, t) {
        const n = this._renderer
          , i = 301 === e.mapping || 302 === e.mapping;
        i ? (null === this._cubemapMaterial && (this._cubemapMaterial = Pn()),
        this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === e.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Rn());
        const r = i ? this._cubemapMaterial : this._equirectMaterial
          , s = new Ht(this._lodPlanes[0],r);
        r.uniforms.envMap.value = e;
        const a = this._cubeSize;
        Cn(t, 0, 0, 3 * a, 2 * a),
        n.setRenderTarget(t),
        n.render(s, Mn)
    }
    _applyPMREM(e) {
        const t = this._renderer
          , n = t.autoClear;
        t.autoClear = !1;
        for (let t = 1; t < this._lodPlanes.length; t++) {
            const n = Math.sqrt(this._sigmas[t] * this._sigmas[t] - this._sigmas[t - 1] * this._sigmas[t - 1])
              , i = En[(t - 1) % En.length];
            this._blur(e, t - 1, t, n, i)
        }
        t.autoClear = n
    }
    _blur(e, t, n, i, r) {
        const s = this._pingPongRenderTarget;
        this._halfBlur(e, s, t, n, i, "latitudinal", r),
        this._halfBlur(s, e, n, n, i, "longitudinal", r)
    }
    _halfBlur(e, t, n, i, r, s, a) {
        const o = this._renderer
          , l = this._blurMaterial;
        "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
        const c = new Ht(this._lodPlanes[i],l)
          , h = l.uniforms
          , u = this._sizeLods[n] - 1
          , d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39
          , p = r / d
          , m = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
        m > 20 && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
        const f = [];
        let g = 0;
        for (let e = 0; e < 20; ++e) {
            const t = e / p
              , n = Math.exp(-t * t / 2);
            f.push(n),
            0 === e ? g += n : e < m && (g += 2 * n)
        }
        for (let e = 0; e < f.length; e++)
            f[e] = f[e] / g;
        h.envMap.value = e.texture,
        h.samples.value = m,
        h.weights.value = f,
        h.latitudinal.value = "latitudinal" === s,
        a && (h.poleAxis.value = a);
        const {_lodMax: v} = this;
        h.dTheta.value = d,
        h.mipInt.value = v - n;
        const _ = this._sizeLods[i];
        Cn(t, 3 * _ * (i > v - 4 ? i - v + 4 : 0), 4 * (this._cubeSize - _), 3 * _, 2 * _),
        o.setRenderTarget(t),
        o.render(c, Mn)
    }
}
function Ln(e, t, n) {
    const i = new G(e,t,n);
    return i.texture.mapping = 306,
    i.texture.name = "PMREM.cubeUv",
    i.scissorTest = !0,
    i
}
function Cn(e, t, n, i, r) {
    e.viewport.set(t, n, i, r),
    e.scissor.set(t, n, i, r)
}
function Rn() {
    return new Xt({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            }
        },
        vertexShader: Dn(),
        fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
        blending: 0,
        depthTest: !1,
        depthWrite: !1
    })
}
function Pn() {
    return new Xt({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: Dn(),
        fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
        blending: 0,
        depthTest: !1,
        depthWrite: !1
    })
}
function Dn() {
    return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t"
}
function In(e) {
    let t = new WeakMap
      , n = null;
    function i(e) {
        const n = e.target;
        n.removeEventListener("dispose", i);
        const r = t.get(n);
        void 0 !== r && (t.delete(n),
        r.dispose())
    }
    return {
        get: function(r) {
            if (r && r.isTexture) {
                const s = r.mapping
                  , a = 303 === s || 304 === s
                  , o = 301 === s || 302 === s;
                if (a || o) {
                    if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
                        r.needsPMREMUpdate = !1;
                        let i = t.get(r);
                        return null === n && (n = new An(e)),
                        i = a ? n.fromEquirectangular(r, i) : n.fromCubemap(r, i),
                        t.set(r, i),
                        i.texture
                    }
                    if (t.has(r))
                        return t.get(r).texture;
                    {
                        const s = r.image;
                        if (a && s && s.height > 0 || o && s && function(e) {
                            let t = 0;
                            const n = 6;
                            for (let i = 0; i < n; i++)
                                void 0 !== e[i] && t++;
                            return t === n
                        }(s)) {
                            null === n && (n = new An(e));
                            const s = a ? n.fromEquirectangular(r) : n.fromCubemap(r);
                            return t.set(r, s),
                            r.addEventListener("dispose", i),
                            s.texture
                        }
                        return null
                    }
                }
            }
            return r
        },
        dispose: function() {
            t = new WeakMap,
            null !== n && (n.dispose(),
            n = null)
        }
    }
}
function Nn(e) {
    const t = {};
    function n(n) {
        if (void 0 !== t[n])
            return t[n];
        let i;
        switch (n) {
        case "WEBGL_depth_texture":
            i = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
        case "EXT_texture_filter_anisotropic":
            i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        default:
            i = e.getExtension(n)
        }
        return t[n] = i,
        i
    }
    return {
        has: function(e) {
            return null !== n(e)
        },
        init: function(e) {
            e.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"),
            n("OES_texture_float"),
            n("OES_texture_half_float"),
            n("OES_texture_half_float_linear"),
            n("OES_standard_derivatives"),
            n("OES_element_index_uint"),
            n("OES_vertex_array_object"),
            n("ANGLE_instanced_arrays")),
            n("OES_texture_float_linear"),
            n("EXT_color_buffer_half_float"),
            n("WEBGL_multisampled_render_to_texture")
        },
        get: function(e) {
            const t = n(e);
            return null === t && console.warn("THREE.WebGLRenderer: " + e + " extension not supported."),
            t
        }
    }
}
function zn(e, t, n, i) {
    const r = {}
      , s = new WeakMap;
    function a(e) {
        const o = e.target;
        null !== o.index && t.remove(o.index);
        for (const e in o.attributes)
            t.remove(o.attributes[e]);
        o.removeEventListener("dispose", a),
        delete r[o.id];
        const l = s.get(o);
        l && (t.remove(l),
        s.delete(o)),
        i.releaseStatesOfGeometry(o),
        !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
        n.memory.geometries--
    }
    function o(e) {
        const n = []
          , i = e.index
          , r = e.attributes.position;
        let a = 0;
        if (null !== i) {
            const e = i.array;
            a = i.version;
            for (let t = 0, i = e.length; t < i; t += 3) {
                const i = e[t + 0]
                  , r = e[t + 1]
                  , s = e[t + 2];
                n.push(i, r, r, s, s, i)
            }
        } else {
            const e = r.array;
            a = r.version;
            for (let t = 0, i = e.length / 3 - 1; t < i; t += 3) {
                const e = t + 0
                  , i = t + 1
                  , r = t + 2;
                n.push(e, i, i, r, r, e)
            }
        }
        const o = new (w(n) ? mt : pt)(n,1);
        o.version = a;
        const l = s.get(e);
        l && t.remove(l),
        s.set(e, o)
    }
    return {
        get: function(e, t) {
            return !0 === r[t.id] || (t.addEventListener("dispose", a),
            r[t.id] = !0,
            n.memory.geometries++),
            t
        },
        update: function(e) {
            const n = e.attributes;
            for (const e in n)
                t.update(n[e], 34962);
            const i = e.morphAttributes;
            for (const e in i) {
                const n = i[e];
                for (let e = 0, i = n.length; e < i; e++)
                    t.update(n[e], 34962)
            }
        },
        getWireframeAttribute: function(e) {
            const t = s.get(e);
            if (t) {
                const n = e.index;
                null !== n && t.version < n.version && o(e)
            } else
                o(e);
            return s.get(e)
        }
    }
}
function On(e, t, n, i) {
    const r = i.isWebGL2;
    let s, a, o;
    this.setMode = function(e) {
        s = e
    }
    ,
    this.setIndex = function(e) {
        a = e.type,
        o = e.bytesPerElement
    }
    ,
    this.render = function(t, i) {
        e.drawElements(s, i, a, t * o),
        n.update(i, s, 1)
    }
    ,
    this.renderInstances = function(i, l, c) {
        if (0 === c)
            return;
        let h, u;
        if (r)
            h = e,
            u = "drawElementsInstanced";
        else if (h = t.get("ANGLE_instanced_arrays"),
        u = "drawElementsInstancedANGLE",
        null === h)
            return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        h[u](s, l, a, i * o, c),
        n.update(l, s, c)
    }
}
function Fn(e) {
    const t = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    return {
        memory: {
            geometries: 0,
            textures: 0
        },
        render: t,
        programs: null,
        autoReset: !0,
        reset: function() {
            t.frame++,
            t.calls = 0,
            t.triangles = 0,
            t.points = 0,
            t.lines = 0
        },
        update: function(e, n, i) {
            switch (t.calls++,
            n) {
            case 4:
                t.triangles += i * (e / 3);
                break;
            case 1:
                t.lines += i * (e / 2);
                break;
            case 3:
                t.lines += i * (e - 1);
                break;
            case 2:
                t.lines += i * e;
                break;
            case 0:
                t.points += i * e;
                break;
            default:
                console.error("THREE.WebGLInfo: Unknown draw mode:", n)
            }
        }
    }
}
function Un(e, t) {
    return e[0] - t[0]
}
function kn(e, t) {
    return Math.abs(t[1]) - Math.abs(e[1])
}
function Bn(e, t) {
    let n = 1;
    const i = t.isInterleavedBufferAttribute ? t.data.array : t.array;
    i instanceof Int8Array ? n = 127 : i instanceof Int16Array ? n = 32767 : i instanceof Int32Array ? n = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", i),
    e.divideScalar(n)
}
function Hn(e, t, n) {
    const i = {}
      , r = new Float32Array(8)
      , s = new WeakMap
      , a = new V
      , o = [];
    for (let e = 0; e < 8; e++)
        o[e] = [e, 0];
    return {
        update: function(l, c, h, u) {
            const d = l.morphTargetInfluences;
            if (!0 === t.isWebGL2) {
                const i = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color
                  , r = void 0 !== i ? i.length : 0;
                let o = s.get(c);
                if (void 0 === o || o.count !== r) {
                    void 0 !== o && o.texture.dispose();
                    const e = void 0 !== c.morphAttributes.position
                      , n = void 0 !== c.morphAttributes.normal
                      , i = void 0 !== c.morphAttributes.color
                      , l = c.morphAttributes.position || []
                      , h = c.morphAttributes.normal || []
                      , u = c.morphAttributes.color || [];
                    let d = 0;
                    !0 === e && (d = 1),
                    !0 === n && (d = 2),
                    !0 === i && (d = 3);
                    let p = c.attributes.position.count * d
                      , m = 1;
                    p > t.maxTextureSize && (m = Math.ceil(p / t.maxTextureSize),
                    p = t.maxTextureSize);
                    const f = new Float32Array(p * m * 4 * r)
                      , g = new W(f,p,m,r);
                    g.type = 1015,
                    g.needsUpdate = !0;
                    const v = 4 * d;
                    for (let t = 0; t < r; t++) {
                        const r = l[t]
                          , s = h[t]
                          , o = u[t]
                          , c = p * m * 4 * t;
                        for (let t = 0; t < r.count; t++) {
                            const l = t * v;
                            !0 === e && (a.fromBufferAttribute(r, t),
                            !0 === r.normalized && Bn(a, r),
                            f[c + l + 0] = a.x,
                            f[c + l + 1] = a.y,
                            f[c + l + 2] = a.z,
                            f[c + l + 3] = 0),
                            !0 === n && (a.fromBufferAttribute(s, t),
                            !0 === s.normalized && Bn(a, s),
                            f[c + l + 4] = a.x,
                            f[c + l + 5] = a.y,
                            f[c + l + 6] = a.z,
                            f[c + l + 7] = 0),
                            !0 === i && (a.fromBufferAttribute(o, t),
                            !0 === o.normalized && Bn(a, o),
                            f[c + l + 8] = a.x,
                            f[c + l + 9] = a.y,
                            f[c + l + 10] = a.z,
                            f[c + l + 11] = 4 === o.itemSize ? a.w : 1)
                        }
                    }
                    o = {
                        count: r,
                        texture: g,
                        size: new M(p,m)
                    },
                    s.set(c, o),
                    c.addEventListener("dispose", (function e() {
                        g.dispose(),
                        s.delete(c),
                        c.removeEventListener("dispose", e)
                    }
                    ))
                }
                let l = 0;
                for (let e = 0; e < d.length; e++)
                    l += d[e];
                const h = c.morphTargetsRelative ? 1 : 1 - l;
                u.getUniforms().setValue(e, "morphTargetBaseInfluence", h),
                u.getUniforms().setValue(e, "morphTargetInfluences", d),
                u.getUniforms().setValue(e, "morphTargetsTexture", o.texture, n),
                u.getUniforms().setValue(e, "morphTargetsTextureSize", o.size)
            } else {
                const t = void 0 === d ? 0 : d.length;
                let n = i[c.id];
                if (void 0 === n || n.length !== t) {
                    n = [];
                    for (let e = 0; e < t; e++)
                        n[e] = [e, 0];
                    i[c.id] = n
                }
                for (let e = 0; e < t; e++) {
                    const t = n[e];
                    t[0] = e,
                    t[1] = d[e]
                }
                n.sort(kn);
                for (let e = 0; e < 8; e++)
                    e < t && n[e][1] ? (o[e][0] = n[e][0],
                    o[e][1] = n[e][1]) : (o[e][0] = Number.MAX_SAFE_INTEGER,
                    o[e][1] = 0);
                o.sort(Un);
                const s = c.morphAttributes.position
                  , a = c.morphAttributes.normal;
                let l = 0;
                for (let e = 0; e < 8; e++) {
                    const t = o[e]
                      , n = t[0]
                      , i = t[1];
                    n !== Number.MAX_SAFE_INTEGER && i ? (s && c.getAttribute("morphTarget" + e) !== s[n] && c.setAttribute("morphTarget" + e, s[n]),
                    a && c.getAttribute("morphNormal" + e) !== a[n] && c.setAttribute("morphNormal" + e, a[n]),
                    r[e] = i,
                    l += i) : (s && !0 === c.hasAttribute("morphTarget" + e) && c.deleteAttribute("morphTarget" + e),
                    a && !0 === c.hasAttribute("morphNormal" + e) && c.deleteAttribute("morphNormal" + e),
                    r[e] = 0)
                }
                const h = c.morphTargetsRelative ? 1 : 1 - l;
                u.getUniforms().setValue(e, "morphTargetBaseInfluence", h),
                u.getUniforms().setValue(e, "morphTargetInfluences", r)
            }
        }
    }
}
function Vn(e, t, n, i) {
    let r = new WeakMap;
    function s(e) {
        const t = e.target;
        t.removeEventListener("dispose", s),
        n.remove(t.instanceMatrix),
        null !== t.instanceColor && n.remove(t.instanceColor)
    }
    return {
        update: function(e) {
            const a = i.render.frame
              , o = e.geometry
              , l = t.get(e, o);
            return r.get(l) !== a && (t.update(l),
            r.set(l, a)),
            e.isInstancedMesh && (!1 === e.hasEventListener("dispose", s) && e.addEventListener("dispose", s),
            n.update(e.instanceMatrix, 34962),
            null !== e.instanceColor && n.update(e.instanceColor, 34962)),
            l
        },
        dispose: function() {
            r = new WeakMap
        }
    }
}
const Gn = new H
  , Wn = new W
  , jn = new j
  , qn = new Zt
  , Xn = []
  , Yn = []
  , $n = new Float32Array(16)
  , Kn = new Float32Array(9)
  , Zn = new Float32Array(4);
function Jn(e, t, n) {
    const i = e[0];
    if (i <= 0 || i > 0)
        return e;
    const r = t * n;
    let s = Xn[r];
    if (void 0 === s && (s = new Float32Array(r),
    Xn[r] = s),
    0 !== t) {
        i.toArray(s, 0);
        for (let i = 1, r = 0; i !== t; ++i)
            r += n,
            e[i].toArray(s, r)
    }
    return s
}
function Qn(e, t) {
    if (e.length !== t.length)
        return !1;
    for (let n = 0, i = e.length; n < i; n++)
        if (e[n] !== t[n])
            return !1;
    return !0
}
function ei(e, t) {
    for (let n = 0, i = t.length; n < i; n++)
        e[n] = t[n]
}
function ti(e, t) {
    let n = Yn[t];
    void 0 === n && (n = new Int32Array(t),
    Yn[t] = n);
    for (let i = 0; i !== t; ++i)
        n[i] = e.allocateTextureUnit();
    return n
}
function ni(e, t) {
    const n = this.cache;
    n[0] !== t && (e.uniform1f(this.addr, t),
    n[0] = t)
}
function ii(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
        n[0] === t.x && n[1] === t.y || (e.uniform2f(this.addr, t.x, t.y),
        n[0] = t.x,
        n[1] = t.y);
    else {
        if (Qn(n, t))
            return;
        e.uniform2fv(this.addr, t),
        ei(n, t)
    }
}
function ri(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
        n[0] === t.x && n[1] === t.y && n[2] === t.z || (e.uniform3f(this.addr, t.x, t.y, t.z),
        n[0] = t.x,
        n[1] = t.y,
        n[2] = t.z);
    else if (void 0 !== t.r)
        n[0] === t.r && n[1] === t.g && n[2] === t.b || (e.uniform3f(this.addr, t.r, t.g, t.b),
        n[0] = t.r,
        n[1] = t.g,
        n[2] = t.b);
    else {
        if (Qn(n, t))
            return;
        e.uniform3fv(this.addr, t),
        ei(n, t)
    }
}
function si(e, t) {
    const n = this.cache;
    if (void 0 !== t.x)
        n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w || (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
        n[0] = t.x,
        n[1] = t.y,
        n[2] = t.z,
        n[3] = t.w);
    else {
        if (Qn(n, t))
            return;
        e.uniform4fv(this.addr, t),
        ei(n, t)
    }
}
function ai(e, t) {
    const n = this.cache
      , i = t.elements;
    if (void 0 === i) {
        if (Qn(n, t))
            return;
        e.uniformMatrix2fv(this.addr, !1, t),
        ei(n, t)
    } else {
        if (Qn(n, i))
            return;
        Zn.set(i),
        e.uniformMatrix2fv(this.addr, !1, Zn),
        ei(n, i)
    }
}
function oi(e, t) {
    const n = this.cache
      , i = t.elements;
    if (void 0 === i) {
        if (Qn(n, t))
            return;
        e.uniformMatrix3fv(this.addr, !1, t),
        ei(n, t)
    } else {
        if (Qn(n, i))
            return;
        Kn.set(i),
        e.uniformMatrix3fv(this.addr, !1, Kn),
        ei(n, i)
    }
}
function li(e, t) {
    const n = this.cache
      , i = t.elements;
    if (void 0 === i) {
        if (Qn(n, t))
            return;
        e.uniformMatrix4fv(this.addr, !1, t),
        ei(n, t)
    } else {
        if (Qn(n, i))
            return;
        $n.set(i),
        e.uniformMatrix4fv(this.addr, !1, $n),
        ei(n, i)
    }
}
function ci(e, t) {
    const n = this.cache;
    n[0] !== t && (e.uniform1i(this.addr, t),
    n[0] = t)
}
function hi(e, t) {
    const n = this.cache;
    Qn(n, t) || (e.uniform2iv(this.addr, t),
    ei(n, t))
}
function ui(e, t) {
    const n = this.cache;
    Qn(n, t) || (e.uniform3iv(this.addr, t),
    ei(n, t))
}
function di(e, t) {
    const n = this.cache;
    Qn(n, t) || (e.uniform4iv(this.addr, t),
    ei(n, t))
}
function pi(e, t) {
    const n = this.cache;
    n[0] !== t && (e.uniform1ui(this.addr, t),
    n[0] = t)
}
function mi(e, t) {
    const n = this.cache;
    Qn(n, t) || (e.uniform2uiv(this.addr, t),
    ei(n, t))
}
function fi(e, t) {
    const n = this.cache;
    Qn(n, t) || (e.uniform3uiv(this.addr, t),
    ei(n, t))
}
function gi(e, t) {
    const n = this.cache;
    Qn(n, t) || (e.uniform4uiv(this.addr, t),
    ei(n, t))
}
function vi(e, t, n) {
    const i = this.cache
      , r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r),
    i[0] = r),
    n.setTexture2D(t || Gn, r)
}
function _i(e, t, n) {
    const i = this.cache
      , r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r),
    i[0] = r),
    n.setTexture3D(t || jn, r)
}
function xi(e, t, n) {
    const i = this.cache
      , r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r),
    i[0] = r),
    n.setTextureCube(t || qn, r)
}
function yi(e, t, n) {
    const i = this.cache
      , r = n.allocateTextureUnit();
    i[0] !== r && (e.uniform1i(this.addr, r),
    i[0] = r),
    n.setTexture2DArray(t || Wn, r)
}
function Mi(e, t) {
    e.uniform1fv(this.addr, t)
}
function bi(e, t) {
    const n = Jn(t, this.size, 2);
    e.uniform2fv(this.addr, n)
}
function wi(e, t) {
    const n = Jn(t, this.size, 3);
    e.uniform3fv(this.addr, n)
}
function Si(e, t) {
    const n = Jn(t, this.size, 4);
    e.uniform4fv(this.addr, n)
}
function Ti(e, t) {
    const n = Jn(t, this.size, 4);
    e.uniformMatrix2fv(this.addr, !1, n)
}
function Ei(e, t) {
    const n = Jn(t, this.size, 9);
    e.uniformMatrix3fv(this.addr, !1, n)
}
function Ai(e, t) {
    const n = Jn(t, this.size, 16);
    e.uniformMatrix4fv(this.addr, !1, n)
}
function Li(e, t) {
    e.uniform1iv(this.addr, t)
}
function Ci(e, t) {
    e.uniform2iv(this.addr, t)
}
function Ri(e, t) {
    e.uniform3iv(this.addr, t)
}
function Pi(e, t) {
    e.uniform4iv(this.addr, t)
}
function Di(e, t) {
    e.uniform1uiv(this.addr, t)
}
function Ii(e, t) {
    e.uniform2uiv(this.addr, t)
}
function Ni(e, t) {
    e.uniform3uiv(this.addr, t)
}
function zi(e, t) {
    e.uniform4uiv(this.addr, t)
}
function Oi(e, t, n) {
    const i = t.length
      , r = ti(n, i);
    e.uniform1iv(this.addr, r);
    for (let e = 0; e !== i; ++e)
        n.setTexture2D(t[e] || Gn, r[e])
}
function Fi(e, t, n) {
    const i = t.length
      , r = ti(n, i);
    e.uniform1iv(this.addr, r);
    for (let e = 0; e !== i; ++e)
        n.setTexture3D(t[e] || jn, r[e])
}
function Ui(e, t, n) {
    const i = t.length
      , r = ti(n, i);
    e.uniform1iv(this.addr, r);
    for (let e = 0; e !== i; ++e)
        n.setTextureCube(t[e] || qn, r[e])
}
function ki(e, t, n) {
    const i = t.length
      , r = ti(n, i);
    e.uniform1iv(this.addr, r);
    for (let e = 0; e !== i; ++e)
        n.setTexture2DArray(t[e] || Wn, r[e])
}
class Bi {
    constructor(e, t, n) {
        this.id = e,
        this.addr = n,
        this.cache = [],
        this.setValue = function(e) {
            switch (e) {
            case 5126:
                return ni;
            case 35664:
                return ii;
            case 35665:
                return ri;
            case 35666:
                return si;
            case 35674:
                return ai;
            case 35675:
                return oi;
            case 35676:
                return li;
            case 5124:
            case 35670:
                return ci;
            case 35667:
            case 35671:
                return hi;
            case 35668:
            case 35672:
                return ui;
            case 35669:
            case 35673:
                return di;
            case 5125:
                return pi;
            case 36294:
                return mi;
            case 36295:
                return fi;
            case 36296:
                return gi;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return vi;
            case 35679:
            case 36299:
            case 36307:
                return _i;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return xi;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return yi
            }
        }(t.type)
    }
}
class Hi {
    constructor(e, t, n) {
        this.id = e,
        this.addr = n,
        this.cache = [],
        this.size = t.size,
        this.setValue = function(e) {
            switch (e) {
            case 5126:
                return Mi;
            case 35664:
                return bi;
            case 35665:
                return wi;
            case 35666:
                return Si;
            case 35674:
                return Ti;
            case 35675:
                return Ei;
            case 35676:
                return Ai;
            case 5124:
            case 35670:
                return Li;
            case 35667:
            case 35671:
                return Ci;
            case 35668:
            case 35672:
                return Ri;
            case 35669:
            case 35673:
                return Pi;
            case 5125:
                return Di;
            case 36294:
                return Ii;
            case 36295:
                return Ni;
            case 36296:
                return zi;
            case 35678:
            case 36198:
            case 36298:
            case 36306:
            case 35682:
                return Oi;
            case 35679:
            case 36299:
            case 36307:
                return Fi;
            case 35680:
            case 36300:
            case 36308:
            case 36293:
                return Ui;
            case 36289:
            case 36303:
            case 36311:
            case 36292:
                return ki
            }
        }(t.type)
    }
}
class Vi {
    constructor(e) {
        this.id = e,
        this.seq = [],
        this.map = {}
    }
    setValue(e, t, n) {
        const i = this.seq;
        for (let r = 0, s = i.length; r !== s; ++r) {
            const s = i[r];
            s.setValue(e, t[s.id], n)
        }
    }
}
const Gi = /(\w+)(\])?(\[|\.)?/g;
function Wi(e, t) {
    e.seq.push(t),
    e.map[t.id] = t
}
function ji(e, t, n) {
    const i = e.name
      , r = i.length;
    for (Gi.lastIndex = 0; ; ) {
        const s = Gi.exec(i)
          , a = Gi.lastIndex;
        let o = s[1];
        const l = "]" === s[2]
          , c = s[3];
        if (l && (o |= 0),
        void 0 === c || "[" === c && a + 2 === r) {
            Wi(n, void 0 === c ? new Bi(o,e,t) : new Hi(o,e,t));
            break
        }
        {
            let e = n.map[o];
            void 0 === e && (e = new Vi(o),
            Wi(n, e)),
            n = e
        }
    }
}
class qi {
    constructor(e, t) {
        this.seq = [],
        this.map = {};
        const n = e.getProgramParameter(t, 35718);
        for (let i = 0; i < n; ++i) {
            const n = e.getActiveUniform(t, i);
            ji(n, e.getUniformLocation(t, n.name), this)
        }
    }
    setValue(e, t, n, i) {
        const r = this.map[t];
        void 0 !== r && r.setValue(e, n, i)
    }
    setOptional(e, t, n) {
        const i = t[n];
        void 0 !== i && this.setValue(e, n, i)
    }
    static upload(e, t, n, i) {
        for (let r = 0, s = t.length; r !== s; ++r) {
            const s = t[r]
              , a = n[s.id];
            !1 !== a.needsUpdate && s.setValue(e, a.value, i)
        }
    }
    static seqWithValue(e, t) {
        const n = [];
        for (let i = 0, r = e.length; i !== r; ++i) {
            const r = e[i];
            r.id in t && n.push(r)
        }
        return n
    }
}
function Xi(e, t, n) {
    const i = e.createShader(t);
    return e.shaderSource(i, n),
    e.compileShader(i),
    i
}
let Yi = 0;
function $i(e, t, n) {
    const i = e.getShaderParameter(t, 35713)
      , r = e.getShaderInfoLog(t).trim();
    if (i && "" === r)
        return "";
    const s = /ERROR: 0:(\d+)/.exec(r);
    if (s) {
        const i = parseInt(s[1]);
        return n.toUpperCase() + "\n\n" + r + "\n\n" + function(e, t) {
            const n = e.split("\n")
              , i = []
              , r = Math.max(t - 6, 0)
              , s = Math.min(t + 6, n.length);
            for (let e = r; e < s; e++) {
                const r = e + 1;
                i.push(`${r === t ? ">" : " "} ${r}: ${n[e]}`)
            }
            return i.join("\n")
        }(e.getShaderSource(t), i)
    }
    return r
}
function Ki(e, t) {
    const n = function(e) {
        switch (e) {
        case 3e3:
            return ["Linear", "( value )"];
        case 3001:
            return ["sRGB", "( value )"];
        default:
            return console.warn("THREE.WebGLProgram: Unsupported encoding:", e),
            ["Linear", "( value )"]
        }
    }(t);
    return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
}
function Zi(e, t) {
    let n;
    switch (t) {
    case 1:
        n = "Linear";
        break;
    case 2:
        n = "Reinhard";
        break;
    case 3:
        n = "OptimizedCineon";
        break;
    case 4:
        n = "ACESFilmic";
        break;
    case 5:
        n = "Custom";
        break;
    default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
        n = "Linear"
    }
    return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
}
function Ji(e) {
    return "" !== e
}
function Qi(e, t) {
    return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
}
function er(e, t) {
    return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
}
const tr = /^[ \t]*#include +<([\w\d./]+)>/gm;
function nr(e) {
    return e.replace(tr, ir)
}
function ir(e, t) {
    const n = hn[t];
    if (void 0 === n)
        throw new Error("Can not resolve #include <" + t + ">");
    return nr(n)
}
const rr = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g
  , sr = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ar(e) {
    return e.replace(sr, lr).replace(rr, or)
}
function or(e, t, n, i) {
    return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),
    lr(e, t, n, i)
}
function lr(e, t, n, i) {
    let r = "";
    for (let e = parseInt(t); e < parseInt(n); e++)
        r += i.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
    return r
}
function cr(e) {
    let t = "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
    return "highp" === e.precision ? t += "\n#define HIGH_PRECISION" : "mediump" === e.precision ? t += "\n#define MEDIUM_PRECISION" : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"),
    t
}
function hr(e, t, n, i) {
    const r = e.getContext()
      , s = n.defines;
    let a = n.vertexShader
      , o = n.fragmentShader;
    const l = function(e) {
        let t = "SHADOWMAP_TYPE_BASIC";
        return 1 === e.shadowMapType ? t = "SHADOWMAP_TYPE_PCF" : 2 === e.shadowMapType ? t = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === e.shadowMapType && (t = "SHADOWMAP_TYPE_VSM"),
        t
    }(n)
      , c = function(e) {
        let t = "ENVMAP_TYPE_CUBE";
        if (e.envMap)
            switch (e.envMapMode) {
            case 301:
            case 302:
                t = "ENVMAP_TYPE_CUBE";
                break;
            case 306:
                t = "ENVMAP_TYPE_CUBE_UV"
            }
        return t
    }(n)
      , h = function(e) {
        let t = "ENVMAP_MODE_REFLECTION";
        e.envMap && 302 === e.envMapMode && (t = "ENVMAP_MODE_REFRACTION");
        return t
    }(n)
      , u = function(e) {
        let t = "ENVMAP_BLENDING_NONE";
        if (e.envMap)
            switch (e.combine) {
            case 0:
                t = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case 1:
                t = "ENVMAP_BLENDING_MIX";
                break;
            case 2:
                t = "ENVMAP_BLENDING_ADD"
            }
        return t
    }(n)
      , d = function(e) {
        const t = e.envMapCubeUVHeight;
        if (null === t)
            return null;
        const n = Math.log2(t) - 2
          , i = 1 / t;
        return {
            texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
            texelHeight: i,
            maxMip: n
        }
    }(n)
      , p = n.isWebGL2 ? "" : function(e) {
        return [e.extensionDerivatives || e.envMapCubeUVHeight || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading || "physical" === e.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (e.extensionFragDepth || e.logarithmicDepthBuffer) && e.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", e.extensionDrawBuffers && e.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (e.extensionShaderTextureLOD || e.envMap || e.transmission) && e.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Ji).join("\n")
    }(n)
      , m = function(e) {
        const t = [];
        for (const n in e) {
            const i = e[n];
            !1 !== i && t.push("#define " + n + " " + i)
        }
        return t.join("\n")
    }(s)
      , f = r.createProgram();
    let g, v, _ = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    n.isRawShaderMaterial ? (g = [m].filter(Ji).join("\n"),
    g.length > 0 && (g += "\n"),
    v = [p, m].filter(Ji).join("\n"),
    v.length > 0 && (v += "\n")) : (g = [cr(n), "#define SHADER_NAME " + n.shaderName, m, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + h : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Ji).join("\n"),
    v = [p, cr(n), "#define SHADER_NAME " + n.shaderName, m, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + c : "", n.envMap ? "#define " + h : "", n.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescence ? "#define USE_IRIDESCENCE" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? hn.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? Zi("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", hn.encodings_pars_fragment, Ki("linearToOutputTexel", n.outputEncoding), n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Ji).join("\n")),
    a = nr(a),
    a = Qi(a, n),
    a = er(a, n),
    o = nr(o),
    o = Qi(o, n),
    o = er(o, n),
    a = ar(a),
    o = ar(o),
    n.isWebGL2 && !0 !== n.isRawShaderMaterial && (_ = "#version 300 es\n",
    g = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g,
    v = ["#define varying in", "300 es" === n.glslVersion ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", "300 es" === n.glslVersion ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v);
    const x = _ + v + o
      , y = Xi(r, 35633, _ + g + a)
      , M = Xi(r, 35632, x);
    if (r.attachShader(f, y),
    r.attachShader(f, M),
    void 0 !== n.index0AttributeName ? r.bindAttribLocation(f, 0, n.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(f, 0, "position"),
    r.linkProgram(f),
    e.debug.checkShaderErrors) {
        const e = r.getProgramInfoLog(f).trim()
          , t = r.getShaderInfoLog(y).trim()
          , n = r.getShaderInfoLog(M).trim();
        let i = !0
          , s = !0;
        if (!1 === r.getProgramParameter(f, 35714)) {
            i = !1;
            const t = $i(r, y, "vertex")
              , n = $i(r, M, "fragment");
            console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(f, 35715) + "\n\nProgram Info Log: " + e + "\n" + t + "\n" + n)
        } else
            "" !== e ? console.warn("THREE.WebGLProgram: Program Info Log:", e) : "" !== t && "" !== n || (s = !1);
        s && (this.diagnostics = {
            runnable: i,
            programLog: e,
            vertexShader: {
                log: t,
                prefix: g
            },
            fragmentShader: {
                log: n,
                prefix: v
            }
        })
    }
    let b, w;
    return r.deleteShader(y),
    r.deleteShader(M),
    this.getUniforms = function() {
        return void 0 === b && (b = new qi(r,f)),
        b
    }
    ,
    this.getAttributes = function() {
        return void 0 === w && (w = function(e, t) {
            const n = {}
              , i = e.getProgramParameter(t, 35721);
            for (let r = 0; r < i; r++) {
                const i = e.getActiveAttrib(t, r)
                  , s = i.name;
                let a = 1;
                35674 === i.type && (a = 2),
                35675 === i.type && (a = 3),
                35676 === i.type && (a = 4),
                n[s] = {
                    type: i.type,
                    location: e.getAttribLocation(t, s),
                    locationSize: a
                }
            }
            return n
        }(r, f)),
        w
    }
    ,
    this.destroy = function() {
        i.releaseStatesOfProgram(this),
        r.deleteProgram(f),
        this.program = void 0
    }
    ,
    this.name = n.shaderName,
    this.id = Yi++,
    this.cacheKey = t,
    this.usedTimes = 1,
    this.program = f,
    this.vertexShader = y,
    this.fragmentShader = M,
    this
}
let ur = 0;
class dr {
    constructor() {
        this.shaderCache = new Map,
        this.materialCache = new Map
    }
    update(e) {
        const t = e.vertexShader
          , n = e.fragmentShader
          , i = this._getShaderStage(t)
          , r = this._getShaderStage(n)
          , s = this._getShaderCacheForMaterial(e);
        return !1 === s.has(i) && (s.add(i),
        i.usedTimes++),
        !1 === s.has(r) && (s.add(r),
        r.usedTimes++),
        this
    }
    remove(e) {
        const t = this.materialCache.get(e);
        for (const e of t)
            e.usedTimes--,
            0 === e.usedTimes && this.shaderCache.delete(e.code);
        return this.materialCache.delete(e),
        this
    }
    getVertexShaderID(e) {
        return this._getShaderStage(e.vertexShader).id
    }
    getFragmentShaderID(e) {
        return this._getShaderStage(e.fragmentShader).id
    }
    dispose() {
        this.shaderCache.clear(),
        this.materialCache.clear()
    }
    _getShaderCacheForMaterial(e) {
        const t = this.materialCache;
        return !1 === t.has(e) && t.set(e, new Set),
        t.get(e)
    }
    _getShaderStage(e) {
        const t = this.shaderCache;
        if (!1 === t.has(e)) {
            const n = new pr(e);
            t.set(e, n)
        }
        return t.get(e)
    }
}
class pr {
    constructor(e) {
        this.id = ur++,
        this.code = e,
        this.usedTimes = 0
    }
}
function mr(e, t, n, i, r, s, a) {
    const o = new ze
      , l = new dr
      , c = []
      , h = r.isWebGL2
      , u = r.logarithmicDepthBuffer
      , d = r.vertexTextures;
    let p = r.precision;
    const m = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    };
    return {
        getParameters: function(s, o, c, f, g) {
            const v = f.fog
              , _ = g.geometry
              , x = s.isMeshStandardMaterial ? f.environment : null
              , y = (s.isMeshStandardMaterial ? n : t).get(s.envMap || x)
              , M = y && 306 === y.mapping ? y.image.height : null
              , b = m[s.type];
            null !== s.precision && (p = r.getMaxPrecision(s.precision),
            p !== s.precision && console.warn("THREE.WebGLProgram.getParameters:", s.precision, "not supported, using", p, "instead."));
            const w = _.morphAttributes.position || _.morphAttributes.normal || _.morphAttributes.color
              , S = void 0 !== w ? w.length : 0;
            let T, E, A, L, C = 0;
            if (void 0 !== _.morphAttributes.position && (C = 1),
            void 0 !== _.morphAttributes.normal && (C = 2),
            void 0 !== _.morphAttributes.color && (C = 3),
            b) {
                const e = dn[b];
                T = e.vertexShader,
                E = e.fragmentShader
            } else
                T = s.vertexShader,
                E = s.fragmentShader,
                l.update(s),
                A = l.getVertexShaderID(s),
                L = l.getFragmentShaderID(s);
            const R = e.getRenderTarget()
              , P = s.alphaTest > 0
              , D = s.clearcoat > 0
              , I = s.iridescence > 0;
            return {
                isWebGL2: h,
                shaderID: b,
                shaderName: s.type,
                vertexShader: T,
                fragmentShader: E,
                defines: s.defines,
                customVertexShaderID: A,
                customFragmentShaderID: L,
                isRawShaderMaterial: !0 === s.isRawShaderMaterial,
                glslVersion: s.glslVersion,
                precision: p,
                instancing: !0 === g.isInstancedMesh,
                instancingColor: !0 === g.isInstancedMesh && null !== g.instanceColor,
                supportsVertexTextures: d,
                outputEncoding: null === R ? e.outputEncoding : !0 === R.isXRRenderTarget ? R.texture.encoding : 3e3,
                map: !!s.map,
                matcap: !!s.matcap,
                envMap: !!y,
                envMapMode: y && y.mapping,
                envMapCubeUVHeight: M,
                lightMap: !!s.lightMap,
                aoMap: !!s.aoMap,
                emissiveMap: !!s.emissiveMap,
                bumpMap: !!s.bumpMap,
                normalMap: !!s.normalMap,
                objectSpaceNormalMap: 1 === s.normalMapType,
                tangentSpaceNormalMap: 0 === s.normalMapType,
                decodeVideoTexture: !!s.map && !0 === s.map.isVideoTexture && 3001 === s.map.encoding,
                clearcoat: D,
                clearcoatMap: D && !!s.clearcoatMap,
                clearcoatRoughnessMap: D && !!s.clearcoatRoughnessMap,
                clearcoatNormalMap: D && !!s.clearcoatNormalMap,
                iridescence: I,
                iridescenceMap: I && !!s.iridescenceMap,
                iridescenceThicknessMap: I && !!s.iridescenceThicknessMap,
                displacementMap: !!s.displacementMap,
                roughnessMap: !!s.roughnessMap,
                metalnessMap: !!s.metalnessMap,
                specularMap: !!s.specularMap,
                specularIntensityMap: !!s.specularIntensityMap,
                specularColorMap: !!s.specularColorMap,
                opaque: !1 === s.transparent && 1 === s.blending,
                alphaMap: !!s.alphaMap,
                alphaTest: P,
                gradientMap: !!s.gradientMap,
                sheen: s.sheen > 0,
                sheenColorMap: !!s.sheenColorMap,
                sheenRoughnessMap: !!s.sheenRoughnessMap,
                transmission: s.transmission > 0,
                transmissionMap: !!s.transmissionMap,
                thicknessMap: !!s.thicknessMap,
                combine: s.combine,
                vertexTangents: !!s.normalMap && !!_.attributes.tangent,
                vertexColors: s.vertexColors,
                vertexAlphas: !0 === s.vertexColors && !!_.attributes.color && 4 === _.attributes.color.itemSize,
                vertexUvs: !!(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatMap || s.clearcoatRoughnessMap || s.clearcoatNormalMap || s.iridescenceMap || s.iridescenceThicknessMap || s.displacementMap || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheenColorMap || s.sheenRoughnessMap),
                uvsVertexOnly: !(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatNormalMap || s.iridescenceMap || s.iridescenceThicknessMap || s.transmission > 0 || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheen > 0 || s.sheenColorMap || s.sheenRoughnessMap || !s.displacementMap),
                fog: !!v,
                useFog: !0 === s.fog,
                fogExp2: v && v.isFogExp2,
                flatShading: !!s.flatShading,
                sizeAttenuation: s.sizeAttenuation,
                logarithmicDepthBuffer: u,
                skinning: !0 === g.isSkinnedMesh,
                morphTargets: void 0 !== _.morphAttributes.position,
                morphNormals: void 0 !== _.morphAttributes.normal,
                morphColors: void 0 !== _.morphAttributes.color,
                morphTargetsCount: S,
                morphTextureStride: C,
                numDirLights: o.directional.length,
                numPointLights: o.point.length,
                numSpotLights: o.spot.length,
                numRectAreaLights: o.rectArea.length,
                numHemiLights: o.hemi.length,
                numDirLightShadows: o.directionalShadowMap.length,
                numPointLightShadows: o.pointShadowMap.length,
                numSpotLightShadows: o.spotShadowMap.length,
                numClippingPlanes: a.numPlanes,
                numClipIntersection: a.numIntersection,
                dithering: s.dithering,
                shadowMapEnabled: e.shadowMap.enabled && c.length > 0,
                shadowMapType: e.shadowMap.type,
                toneMapping: s.toneMapped ? e.toneMapping : 0,
                physicallyCorrectLights: e.physicallyCorrectLights,
                premultipliedAlpha: s.premultipliedAlpha,
                doubleSided: 2 === s.side,
                flipSided: 1 === s.side,
                useDepthPacking: !!s.depthPacking,
                depthPacking: s.depthPacking || 0,
                index0AttributeName: s.index0AttributeName,
                extensionDerivatives: s.extensions && s.extensions.derivatives,
                extensionFragDepth: s.extensions && s.extensions.fragDepth,
                extensionDrawBuffers: s.extensions && s.extensions.drawBuffers,
                extensionShaderTextureLOD: s.extensions && s.extensions.shaderTextureLOD,
                rendererExtensionFragDepth: h || i.has("EXT_frag_depth"),
                rendererExtensionDrawBuffers: h || i.has("WEBGL_draw_buffers"),
                rendererExtensionShaderTextureLod: h || i.has("EXT_shader_texture_lod"),
                customProgramCacheKey: s.customProgramCacheKey()
            }
        },
        getProgramCacheKey: function(t) {
            const n = [];
            if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID),
            n.push(t.customFragmentShaderID)),
            void 0 !== t.defines)
                for (const e in t.defines)
                    n.push(e),
                    n.push(t.defines[e]);
            return !1 === t.isRawShaderMaterial && (!function(e, t) {
                e.push(t.precision),
                e.push(t.outputEncoding),
                e.push(t.envMapMode),
                e.push(t.envMapCubeUVHeight),
                e.push(t.combine),
                e.push(t.vertexUvs),
                e.push(t.fogExp2),
                e.push(t.sizeAttenuation),
                e.push(t.morphTargetsCount),
                e.push(t.morphAttributeCount),
                e.push(t.numDirLights),
                e.push(t.numPointLights),
                e.push(t.numSpotLights),
                e.push(t.numHemiLights),
                e.push(t.numRectAreaLights),
                e.push(t.numDirLightShadows),
                e.push(t.numPointLightShadows),
                e.push(t.numSpotLightShadows),
                e.push(t.shadowMapType),
                e.push(t.toneMapping),
                e.push(t.numClippingPlanes),
                e.push(t.numClipIntersection),
                e.push(t.depthPacking)
            }(n, t),
            function(e, t) {
                o.disableAll(),
                t.isWebGL2 && o.enable(0);
                t.supportsVertexTextures && o.enable(1);
                t.instancing && o.enable(2);
                t.instancingColor && o.enable(3);
                t.map && o.enable(4);
                t.matcap && o.enable(5);
                t.envMap && o.enable(6);
                t.lightMap && o.enable(7);
                t.aoMap && o.enable(8);
                t.emissiveMap && o.enable(9);
                t.bumpMap && o.enable(10);
                t.normalMap && o.enable(11);
                t.objectSpaceNormalMap && o.enable(12);
                t.tangentSpaceNormalMap && o.enable(13);
                t.clearcoat && o.enable(14);
                t.clearcoatMap && o.enable(15);
                t.clearcoatRoughnessMap && o.enable(16);
                t.clearcoatNormalMap && o.enable(17);
                t.iridescence && o.enable(18);
                t.iridescenceMap && o.enable(19);
                t.iridescenceThicknessMap && o.enable(20);
                t.displacementMap && o.enable(21);
                t.specularMap && o.enable(22);
                t.roughnessMap && o.enable(23);
                t.metalnessMap && o.enable(24);
                t.gradientMap && o.enable(25);
                t.alphaMap && o.enable(26);
                t.alphaTest && o.enable(27);
                t.vertexColors && o.enable(28);
                t.vertexAlphas && o.enable(29);
                t.vertexUvs && o.enable(30);
                t.vertexTangents && o.enable(31);
                t.uvsVertexOnly && o.enable(32);
                t.fog && o.enable(33);
                e.push(o.mask),
                o.disableAll(),
                t.useFog && o.enable(0);
                t.flatShading && o.enable(1);
                t.logarithmicDepthBuffer && o.enable(2);
                t.skinning && o.enable(3);
                t.morphTargets && o.enable(4);
                t.morphNormals && o.enable(5);
                t.morphColors && o.enable(6);
                t.premultipliedAlpha && o.enable(7);
                t.shadowMapEnabled && o.enable(8);
                t.physicallyCorrectLights && o.enable(9);
                t.doubleSided && o.enable(10);
                t.flipSided && o.enable(11);
                t.useDepthPacking && o.enable(12);
                t.dithering && o.enable(13);
                t.specularIntensityMap && o.enable(14);
                t.specularColorMap && o.enable(15);
                t.transmission && o.enable(16);
                t.transmissionMap && o.enable(17);
                t.thicknessMap && o.enable(18);
                t.sheen && o.enable(19);
                t.sheenColorMap && o.enable(20);
                t.sheenRoughnessMap && o.enable(21);
                t.decodeVideoTexture && o.enable(22);
                t.opaque && o.enable(23);
                e.push(o.mask)
            }(n, t),
            n.push(e.outputEncoding)),
            n.push(t.customProgramCacheKey),
            n.join()
        },
        getUniforms: function(e) {
            const t = m[e.type];
            let n;
            if (t) {
                const e = dn[t];
                n = qt.clone(e.uniforms)
            } else
                n = e.uniforms;
            return n
        },
        acquireProgram: function(t, n) {
            let i;
            for (let e = 0, t = c.length; e < t; e++) {
                const t = c[e];
                if (t.cacheKey === n) {
                    i = t,
                    ++i.usedTimes;
                    break
                }
            }
            return void 0 === i && (i = new hr(e,n,t,s),
            c.push(i)),
            i
        },
        releaseProgram: function(e) {
            if (0 == --e.usedTimes) {
                const t = c.indexOf(e);
                c[t] = c[c.length - 1],
                c.pop(),
                e.destroy()
            }
        },
        releaseShaderCache: function(e) {
            l.remove(e)
        },
        programs: c,
        dispose: function() {
            l.dispose()
        }
    }
}
function fr() {
    let e = new WeakMap;
    return {
        get: function(t) {
            let n = e.get(t);
            return void 0 === n && (n = {},
            e.set(t, n)),
            n
        },
        remove: function(t) {
            e.delete(t)
        },
        update: function(t, n, i) {
            e.get(t)[n] = i
        },
        dispose: function() {
            e = new WeakMap
        }
    }
}
function gr(e, t) {
    return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
}
function vr(e, t) {
    return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
}
function _r() {
    const e = [];
    let t = 0;
    const n = []
      , i = []
      , r = [];
    function s(n, i, r, s, a, o) {
        let l = e[t];
        return void 0 === l ? (l = {
            id: n.id,
            object: n,
            geometry: i,
            material: r,
            groupOrder: s,
            renderOrder: n.renderOrder,
            z: a,
            group: o
        },
        e[t] = l) : (l.id = n.id,
        l.object = n,
        l.geometry = i,
        l.material = r,
        l.groupOrder = s,
        l.renderOrder = n.renderOrder,
        l.z = a,
        l.group = o),
        t++,
        l
    }
    return {
        opaque: n,
        transmissive: i,
        transparent: r,
        init: function() {
            t = 0,
            n.length = 0,
            i.length = 0,
            r.length = 0
        },
        push: function(e, t, a, o, l, c) {
            const h = s(e, t, a, o, l, c);
            a.transmission > 0 ? i.push(h) : !0 === a.transparent ? r.push(h) : n.push(h)
        },
        unshift: function(e, t, a, o, l, c) {
            const h = s(e, t, a, o, l, c);
            a.transmission > 0 ? i.unshift(h) : !0 === a.transparent ? r.unshift(h) : n.unshift(h)
        },
        finish: function() {
            for (let n = t, i = e.length; n < i; n++) {
                const t = e[n];
                if (null === t.id)
                    break;
                t.id = null,
                t.object = null,
                t.geometry = null,
                t.material = null,
                t.group = null
            }
        },
        sort: function(e, t) {
            n.length > 1 && n.sort(e || gr),
            i.length > 1 && i.sort(t || vr),
            r.length > 1 && r.sort(t || vr)
        }
    }
}
function xr() {
    let e = new WeakMap;
    return {
        get: function(t, n) {
            let i;
            return !1 === e.has(t) ? (i = new _r,
            e.set(t, [i])) : n >= e.get(t).length ? (i = new _r,
            e.get(t).push(i)) : i = e.get(t)[n],
            i
        },
        dispose: function() {
            e = new WeakMap
        }
    }
}
function yr() {
    const e = {};
    return {
        get: function(t) {
            if (void 0 !== e[t.id])
                return e[t.id];
            let n;
            switch (t.type) {
            case "DirectionalLight":
                n = {
                    direction: new X,
                    color: new z
                };
                break;
            case "SpotLight":
                n = {
                    position: new X,
                    direction: new X,
                    color: new z,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0
                };
                break;
            case "PointLight":
                n = {
                    position: new X,
                    color: new z,
                    distance: 0,
                    decay: 0
                };
                break;
            case "HemisphereLight":
                n = {
                    direction: new X,
                    skyColor: new z,
                    groundColor: new z
                };
                break;
            case "RectAreaLight":
                n = {
                    color: new z,
                    position: new X,
                    halfWidth: new X,
                    halfHeight: new X
                }
            }
            return e[t.id] = n,
            n
        }
    }
}
let Mr = 0;
function br(e, t) {
    return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0)
}
function wr(e, t) {
    const n = new yr
      , i = function() {
        const e = {};
        return {
            get: function(t) {
                if (void 0 !== e[t.id])
                    return e[t.id];
                let n;
                switch (t.type) {
                case "DirectionalLight":
                case "SpotLight":
                    n = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new M
                    };
                    break;
                case "PointLight":
                    n = {
                        shadowBias: 0,
                        shadowNormalBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new M,
                        shadowCameraNear: 1,
                        shadowCameraFar: 1e3
                    }
                }
                return e[t.id] = n,
                n
            }
        }
    }()
      , r = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadow: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: []
    };
    for (let e = 0; e < 9; e++)
        r.probe.push(new X);
    const s = new X
      , a = new Se
      , o = new Se;
    return {
        setup: function(s, a) {
            let o = 0
              , l = 0
              , c = 0;
            for (let e = 0; e < 9; e++)
                r.probe[e].set(0, 0, 0);
            let h = 0
              , u = 0
              , d = 0
              , p = 0
              , m = 0
              , f = 0
              , g = 0
              , v = 0;
            s.sort(br);
            const _ = !0 !== a ? Math.PI : 1;
            for (let e = 0, t = s.length; e < t; e++) {
                const t = s[e]
                  , a = t.color
                  , x = t.intensity
                  , y = t.distance
                  , M = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
                if (t.isAmbientLight)
                    o += a.r * x * _,
                    l += a.g * x * _,
                    c += a.b * x * _;
                else if (t.isLightProbe)
                    for (let e = 0; e < 9; e++)
                        r.probe[e].addScaledVector(t.sh.coefficients[e], x);
                else if (t.isDirectionalLight) {
                    const e = n.get(t);
                    if (e.color.copy(t.color).multiplyScalar(t.intensity * _),
                    t.castShadow) {
                        const e = t.shadow
                          , n = i.get(t);
                        n.shadowBias = e.bias,
                        n.shadowNormalBias = e.normalBias,
                        n.shadowRadius = e.radius,
                        n.shadowMapSize = e.mapSize,
                        r.directionalShadow[h] = n,
                        r.directionalShadowMap[h] = M,
                        r.directionalShadowMatrix[h] = t.shadow.matrix,
                        f++
                    }
                    r.directional[h] = e,
                    h++
                } else if (t.isSpotLight) {
                    const e = n.get(t);
                    if (e.position.setFromMatrixPosition(t.matrixWorld),
                    e.color.copy(a).multiplyScalar(x * _),
                    e.distance = y,
                    e.coneCos = Math.cos(t.angle),
                    e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra)),
                    e.decay = t.decay,
                    t.castShadow) {
                        const e = t.shadow
                          , n = i.get(t);
                        n.shadowBias = e.bias,
                        n.shadowNormalBias = e.normalBias,
                        n.shadowRadius = e.radius,
                        n.shadowMapSize = e.mapSize,
                        r.spotShadow[d] = n,
                        r.spotShadowMap[d] = M,
                        r.spotShadowMatrix[d] = t.shadow.matrix,
                        v++
                    }
                    r.spot[d] = e,
                    d++
                } else if (t.isRectAreaLight) {
                    const e = n.get(t);
                    e.color.copy(a).multiplyScalar(x),
                    e.halfWidth.set(.5 * t.width, 0, 0),
                    e.halfHeight.set(0, .5 * t.height, 0),
                    r.rectArea[p] = e,
                    p++
                } else if (t.isPointLight) {
                    const e = n.get(t);
                    if (e.color.copy(t.color).multiplyScalar(t.intensity * _),
                    e.distance = t.distance,
                    e.decay = t.decay,
                    t.castShadow) {
                        const e = t.shadow
                          , n = i.get(t);
                        n.shadowBias = e.bias,
                        n.shadowNormalBias = e.normalBias,
                        n.shadowRadius = e.radius,
                        n.shadowMapSize = e.mapSize,
                        n.shadowCameraNear = e.camera.near,
                        n.shadowCameraFar = e.camera.far,
                        r.pointShadow[u] = n,
                        r.pointShadowMap[u] = M,
                        r.pointShadowMatrix[u] = t.shadow.matrix,
                        g++
                    }
                    r.point[u] = e,
                    u++
                } else if (t.isHemisphereLight) {
                    const e = n.get(t);
                    e.skyColor.copy(t.color).multiplyScalar(x * _),
                    e.groundColor.copy(t.groundColor).multiplyScalar(x * _),
                    r.hemi[m] = e,
                    m++
                }
            }
            p > 0 && (t.isWebGL2 || !0 === e.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = un.LTC_FLOAT_1,
            r.rectAreaLTC2 = un.LTC_FLOAT_2) : !0 === e.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = un.LTC_HALF_1,
            r.rectAreaLTC2 = un.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),
            r.ambient[0] = o,
            r.ambient[1] = l,
            r.ambient[2] = c;
            const x = r.hash;
            x.directionalLength === h && x.pointLength === u && x.spotLength === d && x.rectAreaLength === p && x.hemiLength === m && x.numDirectionalShadows === f && x.numPointShadows === g && x.numSpotShadows === v || (r.directional.length = h,
            r.spot.length = d,
            r.rectArea.length = p,
            r.point.length = u,
            r.hemi.length = m,
            r.directionalShadow.length = f,
            r.directionalShadowMap.length = f,
            r.pointShadow.length = g,
            r.pointShadowMap.length = g,
            r.spotShadow.length = v,
            r.spotShadowMap.length = v,
            r.directionalShadowMatrix.length = f,
            r.pointShadowMatrix.length = g,
            r.spotShadowMatrix.length = v,
            x.directionalLength = h,
            x.pointLength = u,
            x.spotLength = d,
            x.rectAreaLength = p,
            x.hemiLength = m,
            x.numDirectionalShadows = f,
            x.numPointShadows = g,
            x.numSpotShadows = v,
            r.version = Mr++)
        },
        setupView: function(e, t) {
            let n = 0
              , i = 0
              , l = 0
              , c = 0
              , h = 0;
            const u = t.matrixWorldInverse;
            for (let t = 0, d = e.length; t < d; t++) {
                const d = e[t];
                if (d.isDirectionalLight) {
                    const e = r.directional[n];
                    e.direction.setFromMatrixPosition(d.matrixWorld),
                    s.setFromMatrixPosition(d.target.matrixWorld),
                    e.direction.sub(s),
                    e.direction.transformDirection(u),
                    n++
                } else if (d.isSpotLight) {
                    const e = r.spot[l];
                    e.position.setFromMatrixPosition(d.matrixWorld),
                    e.position.applyMatrix4(u),
                    e.direction.setFromMatrixPosition(d.matrixWorld),
                    s.setFromMatrixPosition(d.target.matrixWorld),
                    e.direction.sub(s),
                    e.direction.transformDirection(u),
                    l++
                } else if (d.isRectAreaLight) {
                    const e = r.rectArea[c];
                    e.position.setFromMatrixPosition(d.matrixWorld),
                    e.position.applyMatrix4(u),
                    o.identity(),
                    a.copy(d.matrixWorld),
                    a.premultiply(u),
                    o.extractRotation(a),
                    e.halfWidth.set(.5 * d.width, 0, 0),
                    e.halfHeight.set(0, .5 * d.height, 0),
                    e.halfWidth.applyMatrix4(o),
                    e.halfHeight.applyMatrix4(o),
                    c++
                } else if (d.isPointLight) {
                    const e = r.point[i];
                    e.position.setFromMatrixPosition(d.matrixWorld),
                    e.position.applyMatrix4(u),
                    i++
                } else if (d.isHemisphereLight) {
                    const e = r.hemi[h];
                    e.direction.setFromMatrixPosition(d.matrixWorld),
                    e.direction.transformDirection(u),
                    h++
                }
            }
        },
        state: r
    }
}
function Sr(e, t) {
    const n = new wr(e,t)
      , i = []
      , r = [];
    return {
        init: function() {
            i.length = 0,
            r.length = 0
        },
        state: {
            lightsArray: i,
            shadowsArray: r,
            lights: n
        },
        setupLights: function(e) {
            n.setup(i, e)
        },
        setupLightsView: function(e) {
            n.setupView(i, e)
        },
        pushLight: function(e) {
            i.push(e)
        },
        pushShadow: function(e) {
            r.push(e)
        }
    }
}
function Tr(e, t) {
    let n = new WeakMap;
    return {
        get: function(i, r=0) {
            let s;
            return !1 === n.has(i) ? (s = new Sr(e,t),
            n.set(i, [s])) : r >= n.get(i).length ? (s = new Sr(e,t),
            n.get(i).push(s)) : s = n.get(i)[r],
            s
        },
        dispose: function() {
            n = new WeakMap
        }
    }
}
class Er extends lt {
    constructor(e) {
        super(),
        this.isMeshDepthMaterial = !0,
        this.type = "MeshDepthMaterial",
        this.depthPacking = 3200,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.depthPacking = e.depthPacking,
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this
    }
}
class Ar extends lt {
    constructor(e) {
        super(),
        this.isMeshDistanceMaterial = !0,
        this.type = "MeshDistanceMaterial",
        this.referencePosition = new X,
        this.nearDistance = 1,
        this.farDistance = 1e3,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.referencePosition.copy(e.referencePosition),
        this.nearDistance = e.nearDistance,
        this.farDistance = e.farDistance,
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this
    }
}
function Lr(e, t, n) {
    let i = new an;
    const r = new M
      , s = new M
      , a = new V
      , o = new Er({
        depthPacking: 3201
    })
      , l = new Ar
      , c = {}
      , h = n.maxTextureSize
      , u = {
        0: 1,
        1: 0,
        2: 2
    }
      , d = new Xt({
        defines: {
            VSM_SAMPLES: 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new M
            },
            radius: {
                value: 4
            }
        },
        vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
        fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
    })
      , p = d.clone();
    p.defines.HORIZONTAL_PASS = 1;
    const m = new wt;
    m.setAttribute("position", new dt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
    const f = new Ht(m,d)
      , g = this;
    function v(n, i) {
        const r = t.update(f);
        d.defines.VSM_SAMPLES !== n.blurSamples && (d.defines.VSM_SAMPLES = n.blurSamples,
        p.defines.VSM_SAMPLES = n.blurSamples,
        d.needsUpdate = !0,
        p.needsUpdate = !0),
        d.uniforms.shadow_pass.value = n.map.texture,
        d.uniforms.resolution.value = n.mapSize,
        d.uniforms.radius.value = n.radius,
        e.setRenderTarget(n.mapPass),
        e.clear(),
        e.renderBufferDirect(i, null, r, d, f, null),
        p.uniforms.shadow_pass.value = n.mapPass.texture,
        p.uniforms.resolution.value = n.mapSize,
        p.uniforms.radius.value = n.radius,
        e.setRenderTarget(n.map),
        e.clear(),
        e.renderBufferDirect(i, null, r, p, f, null)
    }
    function _(t, n, i, r, s, a) {
        let h = null;
        const d = !0 === i.isPointLight ? t.customDistanceMaterial : t.customDepthMaterial;
        if (h = void 0 !== d ? d : !0 === i.isPointLight ? l : o,
        e.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length || n.displacementMap && 0 !== n.displacementScale || n.alphaMap && n.alphaTest > 0) {
            const e = h.uuid
              , t = n.uuid;
            let i = c[e];
            void 0 === i && (i = {},
            c[e] = i);
            let r = i[t];
            void 0 === r && (r = h.clone(),
            i[t] = r),
            h = r
        }
        return h.visible = n.visible,
        h.wireframe = n.wireframe,
        h.side = 3 === a ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : u[n.side],
        h.alphaMap = n.alphaMap,
        h.alphaTest = n.alphaTest,
        h.clipShadows = n.clipShadows,
        h.clippingPlanes = n.clippingPlanes,
        h.clipIntersection = n.clipIntersection,
        h.displacementMap = n.displacementMap,
        h.displacementScale = n.displacementScale,
        h.displacementBias = n.displacementBias,
        h.wireframeLinewidth = n.wireframeLinewidth,
        h.linewidth = n.linewidth,
        !0 === i.isPointLight && !0 === h.isMeshDistanceMaterial && (h.referencePosition.setFromMatrixPosition(i.matrixWorld),
        h.nearDistance = r,
        h.farDistance = s),
        h
    }
    function x(n, r, s, a, o) {
        if (!1 === n.visible)
            return;
        if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i.intersectsObject(n))) {
            n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
            const i = t.update(n)
              , r = n.material;
            if (Array.isArray(r)) {
                const t = i.groups;
                for (let l = 0, c = t.length; l < c; l++) {
                    const c = t[l]
                      , h = r[c.materialIndex];
                    if (h && h.visible) {
                        const t = _(n, h, a, s.near, s.far, o);
                        e.renderBufferDirect(s, null, i, t, n, c)
                    }
                }
            } else if (r.visible) {
                const t = _(n, r, a, s.near, s.far, o);
                e.renderBufferDirect(s, null, i, t, n, null)
            }
        }
        const l = n.children;
        for (let e = 0, t = l.length; e < t; e++)
            x(l[e], r, s, a, o)
    }
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = 1,
    this.render = function(t, n, o) {
        if (!1 === g.enabled)
            return;
        if (!1 === g.autoUpdate && !1 === g.needsUpdate)
            return;
        if (0 === t.length)
            return;
        const l = e.getRenderTarget()
          , c = e.getActiveCubeFace()
          , u = e.getActiveMipmapLevel()
          , d = e.state;
        d.setBlending(0),
        d.buffers.color.setClear(1, 1, 1, 1),
        d.buffers.depth.setTest(!0),
        d.setScissorTest(!1);
        for (let l = 0, c = t.length; l < c; l++) {
            const c = t[l]
              , u = c.shadow;
            if (void 0 === u) {
                console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
                continue
            }
            if (!1 === u.autoUpdate && !1 === u.needsUpdate)
                continue;
            r.copy(u.mapSize);
            const p = u.getFrameExtents();
            if (r.multiply(p),
            s.copy(u.mapSize),
            (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / p.x),
            r.x = s.x * p.x,
            u.mapSize.x = s.x),
            r.y > h && (s.y = Math.floor(h / p.y),
            r.y = s.y * p.y,
            u.mapSize.y = s.y)),
            null !== u.map || u.isPointLightShadow || 3 !== this.type || (u.map = new G(r.x,r.y),
            u.map.texture.name = c.name + ".shadowMap",
            u.mapPass = new G(r.x,r.y),
            u.camera.updateProjectionMatrix()),
            null === u.map) {
                const e = {
                    minFilter: 1003,
                    magFilter: 1003,
                    format: 1023
                };
                u.map = new G(r.x,r.y,e),
                u.map.texture.name = c.name + ".shadowMap",
                u.camera.updateProjectionMatrix()
            }
            e.setRenderTarget(u.map),
            e.clear();
            const m = u.getViewportCount();
            for (let e = 0; e < m; e++) {
                const t = u.getViewport(e);
                a.set(s.x * t.x, s.y * t.y, s.x * t.z, s.y * t.w),
                d.viewport(a),
                u.updateMatrices(c, e),
                i = u.getFrustum(),
                x(n, o, u.camera, c, this.type)
            }
            u.isPointLightShadow || 3 !== this.type || v(u, o),
            u.needsUpdate = !1
        }
        g.needsUpdate = !1,
        e.setRenderTarget(l, c, u)
    }
}
function Cr(e, t, n) {
    const i = n.isWebGL2;
    const r = new function() {
        let t = !1;
        const n = new V;
        let i = null;
        const r = new V(0,0,0,0);
        return {
            setMask: function(n) {
                i === n || t || (e.colorMask(n, n, n, n),
                i = n)
            },
            setLocked: function(e) {
                t = e
            },
            setClear: function(t, i, s, a, o) {
                !0 === o && (t *= a,
                i *= a,
                s *= a),
                n.set(t, i, s, a),
                !1 === r.equals(n) && (e.clearColor(t, i, s, a),
                r.copy(n))
            },
            reset: function() {
                t = !1,
                i = null,
                r.set(-1, 0, 0, 0)
            }
        }
    }
      , s = new function() {
        let t = !1
          , n = null
          , i = null
          , r = null;
        return {
            setTest: function(e) {
                e ? U(2929) : k(2929)
            },
            setMask: function(i) {
                n === i || t || (e.depthMask(i),
                n = i)
            },
            setFunc: function(t) {
                if (i !== t) {
                    if (t)
                        switch (t) {
                        case 0:
                            e.depthFunc(512);
                            break;
                        case 1:
                            e.depthFunc(519);
                            break;
                        case 2:
                            e.depthFunc(513);
                            break;
                        case 3:
                        default:
                            e.depthFunc(515);
                            break;
                        case 4:
                            e.depthFunc(514);
                            break;
                        case 5:
                            e.depthFunc(518);
                            break;
                        case 6:
                            e.depthFunc(516);
                            break;
                        case 7:
                            e.depthFunc(517)
                        }
                    else
                        e.depthFunc(515);
                    i = t
                }
            },
            setLocked: function(e) {
                t = e
            },
            setClear: function(t) {
                r !== t && (e.clearDepth(t),
                r = t)
            },
            reset: function() {
                t = !1,
                n = null,
                i = null,
                r = null
            }
        }
    }
      , a = new function() {
        let t = !1
          , n = null
          , i = null
          , r = null
          , s = null
          , a = null
          , o = null
          , l = null
          , c = null;
        return {
            setTest: function(e) {
                t || (e ? U(2960) : k(2960))
            },
            setMask: function(i) {
                n === i || t || (e.stencilMask(i),
                n = i)
            },
            setFunc: function(t, n, a) {
                i === t && r === n && s === a || (e.stencilFunc(t, n, a),
                i = t,
                r = n,
                s = a)
            },
            setOp: function(t, n, i) {
                a === t && o === n && l === i || (e.stencilOp(t, n, i),
                a = t,
                o = n,
                l = i)
            },
            setLocked: function(e) {
                t = e
            },
            setClear: function(t) {
                c !== t && (e.clearStencil(t),
                c = t)
            },
            reset: function() {
                t = !1,
                n = null,
                i = null,
                r = null,
                s = null,
                a = null,
                o = null,
                l = null,
                c = null
            }
        }
    }
    ;
    let o = {}
      , l = {}
      , c = new WeakMap
      , h = []
      , u = null
      , d = !1
      , p = null
      , m = null
      , f = null
      , g = null
      , v = null
      , _ = null
      , x = null
      , y = !1
      , M = null
      , b = null
      , w = null
      , S = null
      , T = null;
    const E = e.getParameter(35661);
    let A = !1
      , L = 0;
    const C = e.getParameter(7938);
    -1 !== C.indexOf("WebGL") ? (L = parseFloat(/^WebGL (\d)/.exec(C)[1]),
    A = L >= 1) : -1 !== C.indexOf("OpenGL ES") && (L = parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),
    A = L >= 2);
    let R = null
      , P = {};
    const D = e.getParameter(3088)
      , I = e.getParameter(2978)
      , N = (new V).fromArray(D)
      , z = (new V).fromArray(I);
    function O(t, n, i) {
        const r = new Uint8Array(4)
          , s = e.createTexture();
        e.bindTexture(t, s),
        e.texParameteri(t, 10241, 9728),
        e.texParameteri(t, 10240, 9728);
        for (let t = 0; t < i; t++)
            e.texImage2D(n + t, 0, 6408, 1, 1, 0, 6408, 5121, r);
        return s
    }
    const F = {};
    function U(t) {
        !0 !== o[t] && (e.enable(t),
        o[t] = !0)
    }
    function k(t) {
        !1 !== o[t] && (e.disable(t),
        o[t] = !1)
    }
    F[3553] = O(3553, 3553, 1),
    F[34067] = O(34067, 34069, 6),
    r.setClear(0, 0, 0, 1),
    s.setClear(1),
    a.setClear(0),
    U(2929),
    s.setFunc(3),
    W(!1),
    j(1),
    U(2884),
    G(0);
    const B = {
        100: 32774,
        101: 32778,
        102: 32779
    };
    if (i)
        B[103] = 32775,
        B[104] = 32776;
    else {
        const e = t.get("EXT_blend_minmax");
        null !== e && (B[103] = e.MIN_EXT,
        B[104] = e.MAX_EXT)
    }
    const H = {
        200: 0,
        201: 1,
        202: 768,
        204: 770,
        210: 776,
        208: 774,
        206: 772,
        203: 769,
        205: 771,
        209: 775,
        207: 773
    };
    function G(t, n, i, r, s, a, o, l) {
        if (0 !== t) {
            if (!1 === d && (U(3042),
            d = !0),
            5 === t)
                s = s || n,
                a = a || i,
                o = o || r,
                n === m && s === v || (e.blendEquationSeparate(B[n], B[s]),
                m = n,
                v = s),
                i === f && r === g && a === _ && o === x || (e.blendFuncSeparate(H[i], H[r], H[a], H[o]),
                f = i,
                g = r,
                _ = a,
                x = o),
                p = t,
                y = null;
            else if (t !== p || l !== y) {
                if (100 === m && 100 === v || (e.blendEquation(32774),
                m = 100,
                v = 100),
                l)
                    switch (t) {
                    case 1:
                        e.blendFuncSeparate(1, 771, 1, 771);
                        break;
                    case 2:
                        e.blendFunc(1, 1);
                        break;
                    case 3:
                        e.blendFuncSeparate(0, 769, 0, 1);
                        break;
                    case 4:
                        e.blendFuncSeparate(0, 768, 0, 770);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", t)
                    }
                else
                    switch (t) {
                    case 1:
                        e.blendFuncSeparate(770, 771, 1, 771);
                        break;
                    case 2:
                        e.blendFunc(770, 1);
                        break;
                    case 3:
                        e.blendFuncSeparate(0, 769, 0, 1);
                        break;
                    case 4:
                        e.blendFunc(0, 768);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", t)
                    }
                f = null,
                g = null,
                _ = null,
                x = null,
                p = t,
                y = l
            }
        } else
            !0 === d && (k(3042),
            d = !1)
    }
    function W(t) {
        M !== t && (t ? e.frontFace(2304) : e.frontFace(2305),
        M = t)
    }
    function j(t) {
        0 !== t ? (U(2884),
        t !== b && (1 === t ? e.cullFace(1029) : 2 === t ? e.cullFace(1028) : e.cullFace(1032))) : k(2884),
        b = t
    }
    function q(t, n, i) {
        t ? (U(32823),
        S === n && T === i || (e.polygonOffset(n, i),
        S = n,
        T = i)) : k(32823)
    }
    function X(t) {
        void 0 === t && (t = 33984 + E - 1),
        R !== t && (e.activeTexture(t),
        R = t)
    }
    return {
        buffers: {
            color: r,
            depth: s,
            stencil: a
        },
        enable: U,
        disable: k,
        bindFramebuffer: function(t, n) {
            return l[t] !== n && (e.bindFramebuffer(t, n),
            l[t] = n,
            i && (36009 === t && (l[36160] = n),
            36160 === t && (l[36009] = n)),
            !0)
        },
        drawBuffers: function(i, r) {
            let s = h
              , a = !1;
            if (i)
                if (s = c.get(r),
                void 0 === s && (s = [],
                c.set(r, s)),
                i.isWebGLMultipleRenderTargets) {
                    const e = i.texture;
                    if (s.length !== e.length || 36064 !== s[0]) {
                        for (let t = 0, n = e.length; t < n; t++)
                            s[t] = 36064 + t;
                        s.length = e.length,
                        a = !0
                    }
                } else
                    36064 !== s[0] && (s[0] = 36064,
                    a = !0);
            else
                1029 !== s[0] && (s[0] = 1029,
                a = !0);
            a && (n.isWebGL2 ? e.drawBuffers(s) : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(s))
        },
        useProgram: function(t) {
            return u !== t && (e.useProgram(t),
            u = t,
            !0)
        },
        setBlending: G,
        setMaterial: function(e, t) {
            2 === e.side ? k(2884) : U(2884);
            let n = 1 === e.side;
            t && (n = !n),
            W(n),
            1 === e.blending && !1 === e.transparent ? G(0) : G(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha),
            s.setFunc(e.depthFunc),
            s.setTest(e.depthTest),
            s.setMask(e.depthWrite),
            r.setMask(e.colorWrite);
            const i = e.stencilWrite;
            a.setTest(i),
            i && (a.setMask(e.stencilWriteMask),
            a.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
            a.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
            q(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
            !0 === e.alphaToCoverage ? U(32926) : k(32926)
        },
        setFlipSided: W,
        setCullFace: j,
        setLineWidth: function(t) {
            t !== w && (A && e.lineWidth(t),
            w = t)
        },
        setPolygonOffset: q,
        setScissorTest: function(e) {
            e ? U(3089) : k(3089)
        },
        activeTexture: X,
        bindTexture: function(t, n) {
            null === R && X();
            let i = P[R];
            void 0 === i && (i = {
                type: void 0,
                texture: void 0
            },
            P[R] = i),
            i.type === t && i.texture === n || (e.bindTexture(t, n || F[t]),
            i.type = t,
            i.texture = n)
        },
        unbindTexture: function() {
            const t = P[R];
            void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null),
            t.type = void 0,
            t.texture = void 0)
        },
        compressedTexImage2D: function() {
            try {
                e.compressedTexImage2D.apply(e, arguments)
            } catch (e) {
                console.error("THREE.WebGLState:", e)
            }
        },
        texImage2D: function() {
            try {
                e.texImage2D.apply(e, arguments)
            } catch (e) {
                console.error("THREE.WebGLState:", e)
            }
        },
        texImage3D: function() {
            try {
                e.texImage3D.apply(e, arguments)
            } catch (e) {
                console.error("THREE.WebGLState:", e)
            }
        },
        texStorage2D: function() {
            try {
                e.texStorage2D.apply(e, arguments)
            } catch (e) {
                console.error("THREE.WebGLState:", e)
            }
        },
        texStorage3D: function() {
            try {
                e.texStorage3D.apply(e, arguments)
            } catch (e) {
                console.error("THREE.WebGLState:", e)
            }
        },
        texSubImage2D: function() {
            try {
                e.texSubImage2D.apply(e, arguments)
            } catch (e) {
                console.error("THREE.WebGLState:", e)
            }
        },
        texSubImage3D: function() {
            try {
                e.texSubImage3D.apply(e, arguments)
            } catch (e) {
                console.error("THREE.WebGLState:", e)
            }
        },
        compressedTexSubImage2D: function() {
            try {
                e.compressedTexSubImage2D.apply(e, arguments)
            } catch (e) {
                console.error("THREE.WebGLState:", e)
            }
        },
        scissor: function(t) {
            !1 === N.equals(t) && (e.scissor(t.x, t.y, t.z, t.w),
            N.copy(t))
        },
        viewport: function(t) {
            !1 === z.equals(t) && (e.viewport(t.x, t.y, t.z, t.w),
            z.copy(t))
        },
        reset: function() {
            e.disable(3042),
            e.disable(2884),
            e.disable(2929),
            e.disable(32823),
            e.disable(3089),
            e.disable(2960),
            e.disable(32926),
            e.blendEquation(32774),
            e.blendFunc(1, 0),
            e.blendFuncSeparate(1, 0, 1, 0),
            e.colorMask(!0, !0, !0, !0),
            e.clearColor(0, 0, 0, 0),
            e.depthMask(!0),
            e.depthFunc(513),
            e.clearDepth(1),
            e.stencilMask(4294967295),
            e.stencilFunc(519, 0, 4294967295),
            e.stencilOp(7680, 7680, 7680),
            e.clearStencil(0),
            e.cullFace(1029),
            e.frontFace(2305),
            e.polygonOffset(0, 0),
            e.activeTexture(33984),
            e.bindFramebuffer(36160, null),
            !0 === i && (e.bindFramebuffer(36009, null),
            e.bindFramebuffer(36008, null)),
            e.useProgram(null),
            e.lineWidth(1),
            e.scissor(0, 0, e.canvas.width, e.canvas.height),
            e.viewport(0, 0, e.canvas.width, e.canvas.height),
            o = {},
            R = null,
            P = {},
            l = {},
            c = new WeakMap,
            h = [],
            u = null,
            d = !1,
            p = null,
            m = null,
            f = null,
            g = null,
            v = null,
            _ = null,
            x = null,
            y = !1,
            M = null,
            b = null,
            w = null,
            S = null,
            T = null,
            N.set(0, 0, e.canvas.width, e.canvas.height),
            z.set(0, 0, e.canvas.width, e.canvas.height),
            r.reset(),
            s.reset(),
            a.reset()
        }
    }
}
function Rr(e, t, n, i, r, s, a) {
    const o = r.isWebGL2
      , l = r.maxTextures
      , c = r.maxCubemapSize
      , h = r.maxTextureSize
      , u = r.maxSamples
      , d = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null
      , p = /OculusBrowser/g.test(navigator.userAgent)
      , m = new WeakMap;
    let f;
    const g = new WeakMap;
    let _ = !1;
    try {
        _ = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1,1).getContext("2d")
    } catch (e) {}
    function y(e, t) {
        return _ ? new OffscreenCanvas(e,t) : S("canvas")
    }
    function M(e, t, n, i) {
        let r = 1;
        if ((e.width > i || e.height > i) && (r = i / Math.max(e.width, e.height)),
        r < 1 || !0 === t) {
            if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap) {
                const i = t ? x : Math.floor
                  , s = i(r * e.width)
                  , a = i(r * e.height);
                void 0 === f && (f = y(s, a));
                const o = n ? y(s, a) : f;
                o.width = s,
                o.height = a;
                return o.getContext("2d").drawImage(e, 0, 0, s, a),
                console.warn("THREE.WebGLRenderer: Texture has been resized from (" + e.width + "x" + e.height + ") to (" + s + "x" + a + ")."),
                o
            }
            return "data"in e && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + e.width + "x" + e.height + ")."),
            e
        }
        return e
    }
    function b(e) {
        return v(e.width) && v(e.height)
    }
    function w(e, t) {
        return e.generateMipmaps && t && 1003 !== e.minFilter && 1006 !== e.minFilter
    }
    function T(t) {
        e.generateMipmap(t)
    }
    function E(n, i, r, s, a=!1) {
        if (!1 === o)
            return i;
        if (null !== n) {
            if (void 0 !== e[n])
                return e[n];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
        }
        let l = i;
        return 6403 === i && (5126 === r && (l = 33326),
        5131 === r && (l = 33325),
        5121 === r && (l = 33321)),
        33319 === i && (5126 === r && (l = 33328),
        5131 === r && (l = 33327),
        5121 === r && (l = 33323)),
        6408 === i && (5126 === r && (l = 34836),
        5131 === r && (l = 34842),
        5121 === r && (l = 3001 === s && !1 === a ? 35907 : 32856),
        32819 === r && (l = 32854),
        32820 === r && (l = 32855)),
        33325 !== l && 33326 !== l && 33327 !== l && 33328 !== l && 34842 !== l && 34836 !== l || t.get("EXT_color_buffer_float"),
        l
    }
    function A(e, t, n) {
        return !0 === w(e, n) || e.isFramebufferTexture && 1003 !== e.minFilter && 1006 !== e.minFilter ? Math.log2(Math.max(t.width, t.height)) + 1 : void 0 !== e.mipmaps && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1
    }
    function L(e) {
        return 1003 === e || 1004 === e || 1005 === e ? 9728 : 9729
    }
    function C(e) {
        const t = e.target;
        t.removeEventListener("dispose", C),
        function(e) {
            const t = i.get(e);
            if (void 0 === t.__webglInit)
                return;
            const n = e.source
              , r = g.get(n);
            if (r) {
                const i = r[t.__cacheKey];
                i.usedTimes--,
                0 === i.usedTimes && P(e),
                0 === Object.keys(r).length && g.delete(n)
            }
            i.remove(e)
        }(t),
        t.isVideoTexture && m.delete(t)
    }
    function R(t) {
        const n = t.target;
        n.removeEventListener("dispose", R),
        function(t) {
            const n = t.texture
              , r = i.get(t)
              , s = i.get(n);
            void 0 !== s.__webglTexture && (e.deleteTexture(s.__webglTexture),
            a.memory.textures--);
            t.depthTexture && t.depthTexture.dispose();
            if (t.isWebGLCubeRenderTarget)
                for (let t = 0; t < 6; t++)
                    e.deleteFramebuffer(r.__webglFramebuffer[t]),
                    r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer[t]);
            else {
                if (e.deleteFramebuffer(r.__webglFramebuffer),
                r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer),
                r.__webglMultisampledFramebuffer && e.deleteFramebuffer(r.__webglMultisampledFramebuffer),
                r.__webglColorRenderbuffer)
                    for (let t = 0; t < r.__webglColorRenderbuffer.length; t++)
                        r.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(r.__webglColorRenderbuffer[t]);
                r.__webglDepthRenderbuffer && e.deleteRenderbuffer(r.__webglDepthRenderbuffer)
            }
            if (t.isWebGLMultipleRenderTargets)
                for (let t = 0, r = n.length; t < r; t++) {
                    const r = i.get(n[t]);
                    r.__webglTexture && (e.deleteTexture(r.__webglTexture),
                    a.memory.textures--),
                    i.remove(n[t])
                }
            i.remove(n),
            i.remove(t)
        }(n)
    }
    function P(t) {
        const n = i.get(t);
        e.deleteTexture(n.__webglTexture);
        const r = t.source;
        delete g.get(r)[n.__cacheKey],
        a.memory.textures--
    }
    let D = 0;
    function I(e, t) {
        const r = i.get(e);
        if (e.isVideoTexture && function(e) {
            const t = a.render.frame;
            m.get(e) !== t && (m.set(e, t),
            e.update())
        }(e),
        !1 === e.isRenderTargetTexture && e.version > 0 && r.__version !== e.version) {
            const n = e.image;
            if (null === n)
                console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
            else {
                if (!1 !== n.complete)
                    return void k(r, e, t);
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
            }
        }
        n.activeTexture(33984 + t),
        n.bindTexture(3553, r.__webglTexture)
    }
    const N = {
        1e3: 10497,
        1001: 33071,
        1002: 33648
    }
      , z = {
        1003: 9728,
        1004: 9984,
        1005: 9986,
        1006: 9729,
        1007: 9985,
        1008: 9987
    };
    function O(n, s, a) {
        if (a ? (e.texParameteri(n, 10242, N[s.wrapS]),
        e.texParameteri(n, 10243, N[s.wrapT]),
        32879 !== n && 35866 !== n || e.texParameteri(n, 32882, N[s.wrapR]),
        e.texParameteri(n, 10240, z[s.magFilter]),
        e.texParameteri(n, 10241, z[s.minFilter])) : (e.texParameteri(n, 10242, 33071),
        e.texParameteri(n, 10243, 33071),
        32879 !== n && 35866 !== n || e.texParameteri(n, 32882, 33071),
        1001 === s.wrapS && 1001 === s.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
        e.texParameteri(n, 10240, L(s.magFilter)),
        e.texParameteri(n, 10241, L(s.minFilter)),
        1003 !== s.minFilter && 1006 !== s.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
        !0 === t.has("EXT_texture_filter_anisotropic")) {
            const a = t.get("EXT_texture_filter_anisotropic");
            if (1015 === s.type && !1 === t.has("OES_texture_float_linear"))
                return;
            if (!1 === o && 1016 === s.type && !1 === t.has("OES_texture_half_float_linear"))
                return;
            (s.anisotropy > 1 || i.get(s).__currentAnisotropy) && (e.texParameterf(n, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())),
            i.get(s).__currentAnisotropy = s.anisotropy)
        }
    }
    function U(t, n) {
        let i = !1;
        void 0 === t.__webglInit && (t.__webglInit = !0,
        n.addEventListener("dispose", C));
        const r = n.source;
        let s = g.get(r);
        void 0 === s && (s = {},
        g.set(r, s));
        const o = function(e) {
            const t = [];
            return t.push(e.wrapS),
            t.push(e.wrapT),
            t.push(e.magFilter),
            t.push(e.minFilter),
            t.push(e.anisotropy),
            t.push(e.internalFormat),
            t.push(e.format),
            t.push(e.type),
            t.push(e.generateMipmaps),
            t.push(e.premultiplyAlpha),
            t.push(e.flipY),
            t.push(e.unpackAlignment),
            t.push(e.encoding),
            t.join()
        }(n);
        if (o !== t.__cacheKey) {
            void 0 === s[o] && (s[o] = {
                texture: e.createTexture(),
                usedTimes: 0
            },
            a.memory.textures++,
            i = !0),
            s[o].usedTimes++;
            const r = s[t.__cacheKey];
            void 0 !== r && (s[t.__cacheKey].usedTimes--,
            0 === r.usedTimes && P(n)),
            t.__cacheKey = o,
            t.__webglTexture = s[o].texture
        }
        return i
    }
    function k(t, i, r) {
        let a = 3553;
        i.isDataArrayTexture && (a = 35866),
        i.isData3DTexture && (a = 32879);
        const l = U(t, i)
          , c = i.source;
        if (n.activeTexture(33984 + r),
        n.bindTexture(a, t.__webglTexture),
        c.version !== c.__currentVersion || !0 === l) {
            e.pixelStorei(37440, i.flipY),
            e.pixelStorei(37441, i.premultiplyAlpha),
            e.pixelStorei(3317, i.unpackAlignment),
            e.pixelStorei(37443, 0);
            const t = function(e) {
                return !o && (1001 !== e.wrapS || 1001 !== e.wrapT || 1003 !== e.minFilter && 1006 !== e.minFilter)
            }(i) && !1 === b(i.image);
            let r = M(i.image, t, !1, h);
            r = j(i, r);
            const u = b(r) || o
              , d = s.convert(i.format, i.encoding);
            let p, m = s.convert(i.type), f = E(i.internalFormat, d, m, i.encoding, i.isVideoTexture);
            O(a, i, u);
            const g = i.mipmaps
              , v = o && !0 !== i.isVideoTexture
              , _ = void 0 === c.__currentVersion || !0 === l
              , x = A(i, r, u);
            if (i.isDepthTexture)
                f = 6402,
                o ? f = 1015 === i.type ? 36012 : 1014 === i.type ? 33190 : 1020 === i.type ? 35056 : 33189 : 1015 === i.type && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),
                1026 === i.format && 6402 === f && 1012 !== i.type && 1014 !== i.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
                i.type = 1014,
                m = s.convert(i.type)),
                1027 === i.format && 6402 === f && (f = 34041,
                1020 !== i.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
                i.type = 1020,
                m = s.convert(i.type))),
                _ && (v ? n.texStorage2D(3553, 1, f, r.width, r.height) : n.texImage2D(3553, 0, f, r.width, r.height, 0, d, m, null));
            else if (i.isDataTexture)
                if (g.length > 0 && u) {
                    v && _ && n.texStorage2D(3553, x, f, g[0].width, g[0].height);
                    for (let e = 0, t = g.length; e < t; e++)
                        p = g[e],
                        v ? n.texSubImage2D(3553, e, 0, 0, p.width, p.height, d, m, p.data) : n.texImage2D(3553, e, f, p.width, p.height, 0, d, m, p.data);
                    i.generateMipmaps = !1
                } else
                    v ? (_ && n.texStorage2D(3553, x, f, r.width, r.height),
                    n.texSubImage2D(3553, 0, 0, 0, r.width, r.height, d, m, r.data)) : n.texImage2D(3553, 0, f, r.width, r.height, 0, d, m, r.data);
            else if (i.isCompressedTexture) {
                v && _ && n.texStorage2D(3553, x, f, g[0].width, g[0].height);
                for (let e = 0, t = g.length; e < t; e++)
                    p = g[e],
                    1023 !== i.format ? null !== d ? v ? n.compressedTexSubImage2D(3553, e, 0, 0, p.width, p.height, d, p.data) : n.compressedTexImage2D(3553, e, f, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : v ? n.texSubImage2D(3553, e, 0, 0, p.width, p.height, d, m, p.data) : n.texImage2D(3553, e, f, p.width, p.height, 0, d, m, p.data)
            } else if (i.isDataArrayTexture)
                v ? (_ && n.texStorage3D(35866, x, f, r.width, r.height, r.depth),
                n.texSubImage3D(35866, 0, 0, 0, 0, r.width, r.height, r.depth, d, m, r.data)) : n.texImage3D(35866, 0, f, r.width, r.height, r.depth, 0, d, m, r.data);
            else if (i.isData3DTexture)
                v ? (_ && n.texStorage3D(32879, x, f, r.width, r.height, r.depth),
                n.texSubImage3D(32879, 0, 0, 0, 0, r.width, r.height, r.depth, d, m, r.data)) : n.texImage3D(32879, 0, f, r.width, r.height, r.depth, 0, d, m, r.data);
            else if (i.isFramebufferTexture) {
                if (_)
                    if (v)
                        n.texStorage2D(3553, x, f, r.width, r.height);
                    else {
                        let e = r.width
                          , t = r.height;
                        for (let i = 0; i < x; i++)
                            n.texImage2D(3553, i, f, e, t, 0, d, m, null),
                            e >>= 1,
                            t >>= 1
                    }
            } else if (g.length > 0 && u) {
                v && _ && n.texStorage2D(3553, x, f, g[0].width, g[0].height);
                for (let e = 0, t = g.length; e < t; e++)
                    p = g[e],
                    v ? n.texSubImage2D(3553, e, 0, 0, d, m, p) : n.texImage2D(3553, e, f, d, m, p);
                i.generateMipmaps = !1
            } else
                v ? (_ && n.texStorage2D(3553, x, f, r.width, r.height),
                n.texSubImage2D(3553, 0, 0, 0, d, m, r)) : n.texImage2D(3553, 0, f, d, m, r);
            w(i, u) && T(a),
            c.__currentVersion = c.version,
            i.onUpdate && i.onUpdate(i)
        }
        t.__version = i.version
    }
    function B(t, r, a, o, l) {
        const c = s.convert(a.format, a.encoding)
          , h = s.convert(a.type)
          , u = E(a.internalFormat, c, h, a.encoding);
        i.get(r).__hasExternalTextures || (32879 === l || 35866 === l ? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null) : n.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)),
        n.bindFramebuffer(36160, t),
        W(r) ? d.framebufferTexture2DMultisampleEXT(36160, o, l, i.get(a).__webglTexture, 0, G(r)) : e.framebufferTexture2D(36160, o, l, i.get(a).__webglTexture, 0),
        n.bindFramebuffer(36160, null)
    }
    function H(t, n, i) {
        if (e.bindRenderbuffer(36161, t),
        n.depthBuffer && !n.stencilBuffer) {
            let r = 33189;
            if (i || W(n)) {
                const t = n.depthTexture;
                t && t.isDepthTexture && (1015 === t.type ? r = 36012 : 1014 === t.type && (r = 33190));
                const i = G(n);
                W(n) ? d.renderbufferStorageMultisampleEXT(36161, i, r, n.width, n.height) : e.renderbufferStorageMultisample(36161, i, r, n.width, n.height)
            } else
                e.renderbufferStorage(36161, r, n.width, n.height);
            e.framebufferRenderbuffer(36160, 36096, 36161, t)
        } else if (n.depthBuffer && n.stencilBuffer) {
            const r = G(n);
            i && !1 === W(n) ? e.renderbufferStorageMultisample(36161, r, 35056, n.width, n.height) : W(n) ? d.renderbufferStorageMultisampleEXT(36161, r, 35056, n.width, n.height) : e.renderbufferStorage(36161, 34041, n.width, n.height),
            e.framebufferRenderbuffer(36160, 33306, 36161, t)
        } else {
            const t = !0 === n.isWebGLMultipleRenderTargets ? n.texture : [n.texture];
            for (let r = 0; r < t.length; r++) {
                const a = t[r]
                  , o = s.convert(a.format, a.encoding)
                  , l = s.convert(a.type)
                  , c = E(a.internalFormat, o, l, a.encoding)
                  , h = G(n);
                i && !1 === W(n) ? e.renderbufferStorageMultisample(36161, h, c, n.width, n.height) : W(n) ? d.renderbufferStorageMultisampleEXT(36161, h, c, n.width, n.height) : e.renderbufferStorage(36161, c, n.width, n.height)
            }
        }
        e.bindRenderbuffer(36161, null)
    }
    function V(t) {
        const r = i.get(t)
          , s = !0 === t.isWebGLCubeRenderTarget;
        if (t.depthTexture && !r.__autoAllocateDepthBuffer) {
            if (s)
                throw new Error("target.depthTexture not supported in Cube render targets");
            !function(t, r) {
                if (r && r.isWebGLCubeRenderTarget)
                    throw new Error("Depth Texture with cube render targets is not supported");
                if (n.bindFramebuffer(36160, t),
                !r.depthTexture || !r.depthTexture.isDepthTexture)
                    throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width,
                r.depthTexture.image.height = r.height,
                r.depthTexture.needsUpdate = !0),
                I(r.depthTexture, 0);
                const s = i.get(r.depthTexture).__webglTexture
                  , a = G(r);
                if (1026 === r.depthTexture.format)
                    W(r) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, s, 0, a) : e.framebufferTexture2D(36160, 36096, 3553, s, 0);
                else {
                    if (1027 !== r.depthTexture.format)
                        throw new Error("Unknown depthTexture format");
                    W(r) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, s, 0, a) : e.framebufferTexture2D(36160, 33306, 3553, s, 0)
                }
            }(r.__webglFramebuffer, t)
        } else if (s) {
            r.__webglDepthbuffer = [];
            for (let i = 0; i < 6; i++)
                n.bindFramebuffer(36160, r.__webglFramebuffer[i]),
                r.__webglDepthbuffer[i] = e.createRenderbuffer(),
                H(r.__webglDepthbuffer[i], t, !1)
        } else
            n.bindFramebuffer(36160, r.__webglFramebuffer),
            r.__webglDepthbuffer = e.createRenderbuffer(),
            H(r.__webglDepthbuffer, t, !1);
        n.bindFramebuffer(36160, null)
    }
    function G(e) {
        return Math.min(u, e.samples)
    }
    function W(e) {
        const n = i.get(e);
        return o && e.samples > 0 && !0 === t.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture
    }
    function j(e, n) {
        const i = e.encoding
          , r = e.format
          , s = e.type;
        return !0 === e.isCompressedTexture || !0 === e.isVideoTexture || 1035 === e.format || 3e3 !== i && (3001 === i ? !1 === o ? !0 === t.has("EXT_sRGB") && 1023 === r ? (e.format = 1035,
        e.minFilter = 1006,
        e.generateMipmaps = !1) : n = F.sRGBToLinear(n) : 1023 === r && 1009 === s || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", i)),
        n
    }
    this.allocateTextureUnit = function() {
        const e = D;
        return e >= l && console.warn("THREE.WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + l),
        D += 1,
        e
    }
    ,
    this.resetTextureUnits = function() {
        D = 0
    }
    ,
    this.setTexture2D = I,
    this.setTexture2DArray = function(e, t) {
        const r = i.get(e);
        e.version > 0 && r.__version !== e.version ? k(r, e, t) : (n.activeTexture(33984 + t),
        n.bindTexture(35866, r.__webglTexture))
    }
    ,
    this.setTexture3D = function(e, t) {
        const r = i.get(e);
        e.version > 0 && r.__version !== e.version ? k(r, e, t) : (n.activeTexture(33984 + t),
        n.bindTexture(32879, r.__webglTexture))
    }
    ,
    this.setTextureCube = function(t, r) {
        const a = i.get(t);
        t.version > 0 && a.__version !== t.version ? function(t, i, r) {
            if (6 !== i.image.length)
                return;
            const a = U(t, i)
              , l = i.source;
            if (n.activeTexture(33984 + r),
            n.bindTexture(34067, t.__webglTexture),
            l.version !== l.__currentVersion || !0 === a) {
                e.pixelStorei(37440, i.flipY),
                e.pixelStorei(37441, i.premultiplyAlpha),
                e.pixelStorei(3317, i.unpackAlignment),
                e.pixelStorei(37443, 0);
                const t = i.isCompressedTexture || i.image[0].isCompressedTexture
                  , r = i.image[0] && i.image[0].isDataTexture
                  , h = [];
                for (let e = 0; e < 6; e++)
                    h[e] = t || r ? r ? i.image[e].image : i.image[e] : M(i.image[e], !1, !0, c),
                    h[e] = j(i, h[e]);
                const u = h[0]
                  , d = b(u) || o
                  , p = s.convert(i.format, i.encoding)
                  , m = s.convert(i.type)
                  , f = E(i.internalFormat, p, m, i.encoding)
                  , g = o && !0 !== i.isVideoTexture
                  , v = void 0 === l.__currentVersion || !0 === a;
                let _, x = A(i, u, d);
                if (O(34067, i, d),
                t) {
                    g && v && n.texStorage2D(34067, x, f, u.width, u.height);
                    for (let e = 0; e < 6; e++) {
                        _ = h[e].mipmaps;
                        for (let t = 0; t < _.length; t++) {
                            const r = _[t];
                            1023 !== i.format ? null !== p ? g ? n.compressedTexSubImage2D(34069 + e, t, 0, 0, r.width, r.height, p, r.data) : n.compressedTexImage2D(34069 + e, t, f, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : g ? n.texSubImage2D(34069 + e, t, 0, 0, r.width, r.height, p, m, r.data) : n.texImage2D(34069 + e, t, f, r.width, r.height, 0, p, m, r.data)
                        }
                    }
                } else {
                    _ = i.mipmaps,
                    g && v && (_.length > 0 && x++,
                    n.texStorage2D(34067, x, f, h[0].width, h[0].height));
                    for (let e = 0; e < 6; e++)
                        if (r) {
                            g ? n.texSubImage2D(34069 + e, 0, 0, 0, h[e].width, h[e].height, p, m, h[e].data) : n.texImage2D(34069 + e, 0, f, h[e].width, h[e].height, 0, p, m, h[e].data);
                            for (let t = 0; t < _.length; t++) {
                                const i = _[t].image[e].image;
                                g ? n.texSubImage2D(34069 + e, t + 1, 0, 0, i.width, i.height, p, m, i.data) : n.texImage2D(34069 + e, t + 1, f, i.width, i.height, 0, p, m, i.data)
                            }
                        } else {
                            g ? n.texSubImage2D(34069 + e, 0, 0, 0, p, m, h[e]) : n.texImage2D(34069 + e, 0, f, p, m, h[e]);
                            for (let t = 0; t < _.length; t++) {
                                const i = _[t];
                                g ? n.texSubImage2D(34069 + e, t + 1, 0, 0, p, m, i.image[e]) : n.texImage2D(34069 + e, t + 1, f, p, m, i.image[e])
                            }
                        }
                }
                w(i, d) && T(34067),
                l.__currentVersion = l.version,
                i.onUpdate && i.onUpdate(i)
            }
            t.__version = i.version
        }(a, t, r) : (n.activeTexture(33984 + r),
        n.bindTexture(34067, a.__webglTexture))
    }
    ,
    this.rebindTextures = function(e, t, n) {
        const r = i.get(e);
        void 0 !== t && B(r.__webglFramebuffer, e, e.texture, 36064, 3553),
        void 0 !== n && V(e)
    }
    ,
    this.setupRenderTarget = function(t) {
        const l = t.texture
          , c = i.get(t)
          , h = i.get(l);
        t.addEventListener("dispose", R),
        !0 !== t.isWebGLMultipleRenderTargets && (void 0 === h.__webglTexture && (h.__webglTexture = e.createTexture()),
        h.__version = l.version,
        a.memory.textures++);
        const u = !0 === t.isWebGLCubeRenderTarget
          , d = !0 === t.isWebGLMultipleRenderTargets
          , p = b(t) || o;
        if (u) {
            c.__webglFramebuffer = [];
            for (let t = 0; t < 6; t++)
                c.__webglFramebuffer[t] = e.createFramebuffer()
        } else {
            if (c.__webglFramebuffer = e.createFramebuffer(),
            d)
                if (r.drawBuffers) {
                    const n = t.texture;
                    for (let t = 0, r = n.length; t < r; t++) {
                        const r = i.get(n[t]);
                        void 0 === r.__webglTexture && (r.__webglTexture = e.createTexture(),
                        a.memory.textures++)
                    }
                } else
                    console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
            if (o && t.samples > 0 && !1 === W(t)) {
                const i = d ? l : [l];
                c.__webglMultisampledFramebuffer = e.createFramebuffer(),
                c.__webglColorRenderbuffer = [],
                n.bindFramebuffer(36160, c.__webglMultisampledFramebuffer);
                for (let n = 0; n < i.length; n++) {
                    const r = i[n];
                    c.__webglColorRenderbuffer[n] = e.createRenderbuffer(),
                    e.bindRenderbuffer(36161, c.__webglColorRenderbuffer[n]);
                    const a = s.convert(r.format, r.encoding)
                      , o = s.convert(r.type)
                      , l = E(r.internalFormat, a, o, r.encoding)
                      , h = G(t);
                    e.renderbufferStorageMultisample(36161, h, l, t.width, t.height),
                    e.framebufferRenderbuffer(36160, 36064 + n, 36161, c.__webglColorRenderbuffer[n])
                }
                e.bindRenderbuffer(36161, null),
                t.depthBuffer && (c.__webglDepthRenderbuffer = e.createRenderbuffer(),
                H(c.__webglDepthRenderbuffer, t, !0)),
                n.bindFramebuffer(36160, null)
            }
        }
        if (u) {
            n.bindTexture(34067, h.__webglTexture),
            O(34067, l, p);
            for (let e = 0; e < 6; e++)
                B(c.__webglFramebuffer[e], t, l, 36064, 34069 + e);
            w(l, p) && T(34067),
            n.unbindTexture()
        } else if (d) {
            const e = t.texture;
            for (let r = 0, s = e.length; r < s; r++) {
                const s = e[r]
                  , a = i.get(s);
                n.bindTexture(3553, a.__webglTexture),
                O(3553, s, p),
                B(c.__webglFramebuffer, t, s, 36064 + r, 3553),
                w(s, p) && T(3553)
            }
            n.unbindTexture()
        } else {
            let e = 3553;
            (t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (o ? e = t.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),
            n.bindTexture(e, h.__webglTexture),
            O(e, l, p),
            B(c.__webglFramebuffer, t, l, 36064, e),
            w(l, p) && T(e),
            n.unbindTexture()
        }
        t.depthBuffer && V(t)
    }
    ,
    this.updateRenderTargetMipmap = function(e) {
        const t = b(e) || o
          , r = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
        for (let s = 0, a = r.length; s < a; s++) {
            const a = r[s];
            if (w(a, t)) {
                const t = e.isWebGLCubeRenderTarget ? 34067 : 3553
                  , r = i.get(a).__webglTexture;
                n.bindTexture(t, r),
                T(t),
                n.unbindTexture()
            }
        }
    }
    ,
    this.updateMultisampleRenderTarget = function(t) {
        if (o && t.samples > 0 && !1 === W(t)) {
            const r = t.isWebGLMultipleRenderTargets ? t.texture : [t.texture]
              , s = t.width
              , a = t.height;
            let o = 16384;
            const l = []
              , c = t.stencilBuffer ? 33306 : 36096
              , h = i.get(t)
              , u = !0 === t.isWebGLMultipleRenderTargets;
            if (u)
                for (let t = 0; t < r.length; t++)
                    n.bindFramebuffer(36160, h.__webglMultisampledFramebuffer),
                    e.framebufferRenderbuffer(36160, 36064 + t, 36161, null),
                    n.bindFramebuffer(36160, h.__webglFramebuffer),
                    e.framebufferTexture2D(36009, 36064 + t, 3553, null, 0);
            n.bindFramebuffer(36008, h.__webglMultisampledFramebuffer),
            n.bindFramebuffer(36009, h.__webglFramebuffer);
            for (let n = 0; n < r.length; n++) {
                l.push(36064 + n),
                t.depthBuffer && l.push(c);
                const d = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;
                if (!1 === d && (t.depthBuffer && (o |= 256),
                t.stencilBuffer && (o |= 1024)),
                u && e.framebufferRenderbuffer(36008, 36064, 36161, h.__webglColorRenderbuffer[n]),
                !0 === d && (e.invalidateFramebuffer(36008, [c]),
                e.invalidateFramebuffer(36009, [c])),
                u) {
                    const t = i.get(r[n]).__webglTexture;
                    e.framebufferTexture2D(36009, 36064, 3553, t, 0)
                }
                e.blitFramebuffer(0, 0, s, a, 0, 0, s, a, o, 9728),
                p && e.invalidateFramebuffer(36008, l)
            }
            if (n.bindFramebuffer(36008, null),
            n.bindFramebuffer(36009, null),
            u)
                for (let t = 0; t < r.length; t++) {
                    n.bindFramebuffer(36160, h.__webglMultisampledFramebuffer),
                    e.framebufferRenderbuffer(36160, 36064 + t, 36161, h.__webglColorRenderbuffer[t]);
                    const s = i.get(r[t]).__webglTexture;
                    n.bindFramebuffer(36160, h.__webglFramebuffer),
                    e.framebufferTexture2D(36009, 36064 + t, 3553, s, 0)
                }
            n.bindFramebuffer(36009, h.__webglMultisampledFramebuffer)
        }
    }
    ,
    this.setupDepthRenderbuffer = V,
    this.setupFrameBufferTexture = B,
    this.useMultisampledRTT = W
}
function Pr(e, t, n) {
    const i = n.isWebGL2;
    return {
        convert: function(n, r=null) {
            let s;
            if (1009 === n)
                return 5121;
            if (1017 === n)
                return 32819;
            if (1018 === n)
                return 32820;
            if (1010 === n)
                return 5120;
            if (1011 === n)
                return 5122;
            if (1012 === n)
                return 5123;
            if (1013 === n)
                return 5124;
            if (1014 === n)
                return 5125;
            if (1015 === n)
                return 5126;
            if (1016 === n)
                return i ? 5131 : (s = t.get("OES_texture_half_float"),
                null !== s ? s.HALF_FLOAT_OES : null);
            if (1021 === n)
                return 6406;
            if (1023 === n)
                return 6408;
            if (1024 === n)
                return 6409;
            if (1025 === n)
                return 6410;
            if (1026 === n)
                return 6402;
            if (1027 === n)
                return 34041;
            if (1028 === n)
                return 6403;
            if (1022 === n)
                return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),
                6408;
            if (1035 === n)
                return s = t.get("EXT_sRGB"),
                null !== s ? s.SRGB_ALPHA_EXT : null;
            if (1029 === n)
                return 36244;
            if (1030 === n)
                return 33319;
            if (1031 === n)
                return 33320;
            if (1033 === n)
                return 36249;
            if (33776 === n || 33777 === n || 33778 === n || 33779 === n)
                if (3001 === r) {
                    if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"),
                    null === s)
                        return null;
                    if (33776 === n)
                        return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                    if (33777 === n)
                        return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    if (33778 === n)
                        return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                    if (33779 === n)
                        return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                } else {
                    if (s = t.get("WEBGL_compressed_texture_s3tc"),
                    null === s)
                        return null;
                    if (33776 === n)
                        return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (33777 === n)
                        return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (33778 === n)
                        return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (33779 === n)
                        return s.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
            if (35840 === n || 35841 === n || 35842 === n || 35843 === n) {
                if (s = t.get("WEBGL_compressed_texture_pvrtc"),
                null === s)
                    return null;
                if (35840 === n)
                    return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (35841 === n)
                    return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (35842 === n)
                    return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (35843 === n)
                    return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (36196 === n)
                return s = t.get("WEBGL_compressed_texture_etc1"),
                null !== s ? s.COMPRESSED_RGB_ETC1_WEBGL : null;
            if (37492 === n || 37496 === n) {
                if (s = t.get("WEBGL_compressed_texture_etc"),
                null === s)
                    return null;
                if (37492 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
                if (37496 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC
            }
            if (37808 === n || 37809 === n || 37810 === n || 37811 === n || 37812 === n || 37813 === n || 37814 === n || 37815 === n || 37816 === n || 37817 === n || 37818 === n || 37819 === n || 37820 === n || 37821 === n) {
                if (s = t.get("WEBGL_compressed_texture_astc"),
                null === s)
                    return null;
                if (37808 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (37809 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (37810 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (37811 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (37812 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (37813 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (37814 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (37815 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (37816 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (37817 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (37818 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (37819 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (37820 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (37821 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR
            }
            if (36492 === n) {
                if (s = t.get("EXT_texture_compression_bptc"),
                null === s)
                    return null;
                if (36492 === n)
                    return 3001 === r ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT
            }
            return 1020 === n ? i ? 34042 : (s = t.get("WEBGL_depth_texture"),
            null !== s ? s.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== e[n] ? e[n] : null
        }
    }
}
class Dr extends $t {
    constructor(e=[]) {
        super(),
        this.isArrayCamera = !0,
        this.cameras = e
    }
}
class Ir extends $e {
    constructor() {
        super(),
        this.isGroup = !0,
        this.type = "Group"
    }
}
const Nr = {
    type: "move"
};
class zr {
    constructor() {
        this._targetRay = null,
        this._grip = null,
        this._hand = null
    }
    getHandSpace() {
        return null === this._hand && (this._hand = new Ir,
        this._hand.matrixAutoUpdate = !1,
        this._hand.visible = !1,
        this._hand.joints = {},
        this._hand.inputState = {
            pinching: !1
        }),
        this._hand
    }
    getTargetRaySpace() {
        return null === this._targetRay && (this._targetRay = new Ir,
        this._targetRay.matrixAutoUpdate = !1,
        this._targetRay.visible = !1,
        this._targetRay.hasLinearVelocity = !1,
        this._targetRay.linearVelocity = new X,
        this._targetRay.hasAngularVelocity = !1,
        this._targetRay.angularVelocity = new X),
        this._targetRay
    }
    getGripSpace() {
        return null === this._grip && (this._grip = new Ir,
        this._grip.matrixAutoUpdate = !1,
        this._grip.visible = !1,
        this._grip.hasLinearVelocity = !1,
        this._grip.linearVelocity = new X,
        this._grip.hasAngularVelocity = !1,
        this._grip.angularVelocity = new X),
        this._grip
    }
    dispatchEvent(e) {
        return null !== this._targetRay && this._targetRay.dispatchEvent(e),
        null !== this._grip && this._grip.dispatchEvent(e),
        null !== this._hand && this._hand.dispatchEvent(e),
        this
    }
    disconnect(e) {
        return this.dispatchEvent({
            type: "disconnected",
            data: e
        }),
        null !== this._targetRay && (this._targetRay.visible = !1),
        null !== this._grip && (this._grip.visible = !1),
        null !== this._hand && (this._hand.visible = !1),
        this
    }
    update(e, t, n) {
        let i = null
          , r = null
          , s = null;
        const a = this._targetRay
          , o = this._grip
          , l = this._hand;
        if (e && "visible-blurred" !== t.session.visibilityState)
            if (null !== a && (i = t.getPose(e.targetRaySpace, n),
            null !== i && (a.matrix.fromArray(i.transform.matrix),
            a.matrix.decompose(a.position, a.rotation, a.scale),
            i.linearVelocity ? (a.hasLinearVelocity = !0,
            a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1,
            i.angularVelocity ? (a.hasAngularVelocity = !0,
            a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1,
            this.dispatchEvent(Nr))),
            l && e.hand) {
                s = !0;
                for (const i of e.hand.values()) {
                    const e = t.getJointPose(i, n);
                    if (void 0 === l.joints[i.jointName]) {
                        const e = new Ir;
                        e.matrixAutoUpdate = !1,
                        e.visible = !1,
                        l.joints[i.jointName] = e,
                        l.add(e)
                    }
                    const r = l.joints[i.jointName];
                    null !== e && (r.matrix.fromArray(e.transform.matrix),
                    r.matrix.decompose(r.position, r.rotation, r.scale),
                    r.jointRadius = e.radius),
                    r.visible = null !== e
                }
                const i = l.joints["index-finger-tip"]
                  , r = l.joints["thumb-tip"]
                  , a = i.position.distanceTo(r.position)
                  , o = .02
                  , c = .005;
                l.inputState.pinching && a > o + c ? (l.inputState.pinching = !1,
                this.dispatchEvent({
                    type: "pinchend",
                    handedness: e.handedness,
                    target: this
                })) : !l.inputState.pinching && a <= o - c && (l.inputState.pinching = !0,
                this.dispatchEvent({
                    type: "pinchstart",
                    handedness: e.handedness,
                    target: this
                }))
            } else
                null !== o && e.gripSpace && (r = t.getPose(e.gripSpace, n),
                null !== r && (o.matrix.fromArray(r.transform.matrix),
                o.matrix.decompose(o.position, o.rotation, o.scale),
                r.linearVelocity ? (o.hasLinearVelocity = !0,
                o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1,
                r.angularVelocity ? (o.hasAngularVelocity = !0,
                o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
        return null !== a && (a.visible = null !== i),
        null !== o && (o.visible = null !== r),
        null !== l && (l.visible = null !== s),
        this
    }
}
class Or extends H {
    constructor(e, t, n, i, r, s, a, o, l, c) {
        if (1026 !== (c = void 0 !== c ? c : 1026) && 1027 !== c)
            throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === n && 1026 === c && (n = 1014),
        void 0 === n && 1027 === c && (n = 1020),
        super(null, i, r, s, a, o, c, n, l),
        this.isDepthTexture = !0,
        this.image = {
            width: e,
            height: t
        },
        this.magFilter = void 0 !== a ? a : 1003,
        this.minFilter = void 0 !== o ? o : 1003,
        this.flipY = !1,
        this.generateMipmaps = !1
    }
}
class Fr extends l {
    constructor(e, t) {
        super();
        const n = this;
        let i = null
          , r = 1
          , s = null
          , a = "local-floor"
          , o = null
          , l = null
          , c = null
          , h = null
          , u = null
          , d = null;
        const p = t.getContextAttributes();
        let m = null
          , f = null;
        const g = []
          , v = new Map
          , _ = new $t;
        _.layers.enable(1),
        _.viewport = new V;
        const x = new $t;
        x.layers.enable(2),
        x.viewport = new V;
        const y = [_, x]
          , M = new Dr;
        M.layers.enable(1),
        M.layers.enable(2);
        let b = null
          , w = null;
        function S(e) {
            const t = v.get(e.inputSource);
            void 0 !== t && t.dispatchEvent({
                type: e.type,
                data: e.inputSource
            })
        }
        function T() {
            i.removeEventListener("select", S),
            i.removeEventListener("selectstart", S),
            i.removeEventListener("selectend", S),
            i.removeEventListener("squeeze", S),
            i.removeEventListener("squeezestart", S),
            i.removeEventListener("squeezeend", S),
            i.removeEventListener("end", T),
            i.removeEventListener("inputsourceschange", E),
            v.forEach((function(e, t) {
                void 0 !== e && e.disconnect(t)
            }
            )),
            v.clear(),
            b = null,
            w = null,
            e.setRenderTarget(m),
            u = null,
            h = null,
            c = null,
            i = null,
            f = null,
            P.stop(),
            n.isPresenting = !1,
            n.dispatchEvent({
                type: "sessionend"
            })
        }
        function E(e) {
            const t = i.inputSources;
            for (let e = 0; e < t.length; e++) {
                const n = "right" === t[e].handedness ? 1 : 0;
                v.set(t[e], g[n])
            }
            for (let t = 0; t < e.removed.length; t++) {
                const n = e.removed[t]
                  , i = v.get(n);
                i && (i.dispatchEvent({
                    type: "disconnected",
                    data: n
                }),
                v.delete(n))
            }
            for (let t = 0; t < e.added.length; t++) {
                const n = e.added[t]
                  , i = v.get(n);
                i && i.dispatchEvent({
                    type: "connected",
                    data: n
                })
            }
        }
        this.cameraAutoUpdate = !0,
        this.enabled = !1,
        this.isPresenting = !1,
        this.getController = function(e) {
            let t = g[e];
            return void 0 === t && (t = new zr,
            g[e] = t),
            t.getTargetRaySpace()
        }
        ,
        this.getControllerGrip = function(e) {
            let t = g[e];
            return void 0 === t && (t = new zr,
            g[e] = t),
            t.getGripSpace()
        }
        ,
        this.getHand = function(e) {
            let t = g[e];
            return void 0 === t && (t = new zr,
            g[e] = t),
            t.getHandSpace()
        }
        ,
        this.setFramebufferScaleFactor = function(e) {
            r = e,
            !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
        }
        ,
        this.setReferenceSpaceType = function(e) {
            a = e,
            !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
        }
        ,
        this.getReferenceSpace = function() {
            return o || s
        }
        ,
        this.setReferenceSpace = function(e) {
            o = e
        }
        ,
        this.getBaseLayer = function() {
            return null !== h ? h : u
        }
        ,
        this.getBinding = function() {
            return c
        }
        ,
        this.getFrame = function() {
            return d
        }
        ,
        this.getSession = function() {
            return i
        }
        ,
        this.setSession = async function(l) {
            if (i = l,
            null !== i) {
                if (m = e.getRenderTarget(),
                i.addEventListener("select", S),
                i.addEventListener("selectstart", S),
                i.addEventListener("selectend", S),
                i.addEventListener("squeeze", S),
                i.addEventListener("squeezestart", S),
                i.addEventListener("squeezeend", S),
                i.addEventListener("end", T),
                i.addEventListener("inputsourceschange", E),
                !0 !== p.xrCompatible && await t.makeXRCompatible(),
                void 0 === i.renderState.layers || !1 === e.capabilities.isWebGL2) {
                    const n = {
                        antialias: void 0 !== i.renderState.layers || p.antialias,
                        alpha: p.alpha,
                        depth: p.depth,
                        stencil: p.stencil,
                        framebufferScaleFactor: r
                    };
                    u = new XRWebGLLayer(i,t,n),
                    i.updateRenderState({
                        baseLayer: u
                    }),
                    f = new G(u.framebufferWidth,u.framebufferHeight,{
                        format: 1023,
                        type: 1009,
                        encoding: e.outputEncoding
                    })
                } else {
                    let n = null
                      , s = null
                      , a = null;
                    p.depth && (a = p.stencil ? 35056 : 33190,
                    n = p.stencil ? 1027 : 1026,
                    s = p.stencil ? 1020 : 1014);
                    const o = {
                        colorFormat: 3001 === e.outputEncoding ? 35907 : 32856,
                        depthFormat: a,
                        scaleFactor: r
                    };
                    c = new XRWebGLBinding(i,t),
                    h = c.createProjectionLayer(o),
                    i.updateRenderState({
                        layers: [h]
                    }),
                    f = new G(h.textureWidth,h.textureHeight,{
                        format: 1023,
                        type: 1009,
                        depthTexture: new Or(h.textureWidth,h.textureHeight,s,void 0,void 0,void 0,void 0,void 0,void 0,n),
                        stencilBuffer: p.stencil,
                        encoding: e.outputEncoding,
                        samples: p.antialias ? 4 : 0
                    });
                    e.properties.get(f).__ignoreDepthValues = h.ignoreDepthValues
                }
                f.isXRRenderTarget = !0,
                this.setFoveation(1),
                o = null,
                s = await i.requestReferenceSpace(a),
                P.setContext(i),
                P.start(),
                n.isPresenting = !0,
                n.dispatchEvent({
                    type: "sessionstart"
                })
            }
        }
        ;
        const A = new X
          , L = new X;
        function C(e, t) {
            null === t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
            e.matrixWorldInverse.copy(e.matrixWorld).invert()
        }
        this.updateCamera = function(e) {
            if (null === i)
                return;
            M.near = x.near = _.near = e.near,
            M.far = x.far = _.far = e.far,
            b === M.near && w === M.far || (i.updateRenderState({
                depthNear: M.near,
                depthFar: M.far
            }),
            b = M.near,
            w = M.far);
            const t = e.parent
              , n = M.cameras;
            C(M, t);
            for (let e = 0; e < n.length; e++)
                C(n[e], t);
            M.matrixWorld.decompose(M.position, M.quaternion, M.scale),
            e.position.copy(M.position),
            e.quaternion.copy(M.quaternion),
            e.scale.copy(M.scale),
            e.matrix.copy(M.matrix),
            e.matrixWorld.copy(M.matrixWorld);
            const r = e.children;
            for (let e = 0, t = r.length; e < t; e++)
                r[e].updateMatrixWorld(!0);
            2 === n.length ? function(e, t, n) {
                A.setFromMatrixPosition(t.matrixWorld),
                L.setFromMatrixPosition(n.matrixWorld);
                const i = A.distanceTo(L)
                  , r = t.projectionMatrix.elements
                  , s = n.projectionMatrix.elements
                  , a = r[14] / (r[10] - 1)
                  , o = r[14] / (r[10] + 1)
                  , l = (r[9] + 1) / r[5]
                  , c = (r[9] - 1) / r[5]
                  , h = (r[8] - 1) / r[0]
                  , u = (s[8] + 1) / s[0]
                  , d = a * h
                  , p = a * u
                  , m = i / (-h + u)
                  , f = m * -h;
                t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
                e.translateX(f),
                e.translateZ(m),
                e.matrixWorld.compose(e.position, e.quaternion, e.scale),
                e.matrixWorldInverse.copy(e.matrixWorld).invert();
                const g = a + m
                  , v = o + m
                  , _ = d - f
                  , x = p + (i - f)
                  , y = l * o / v * g
                  , M = c * o / v * g;
                e.projectionMatrix.makePerspective(_, x, y, M, g, v)
            }(M, _, x) : M.projectionMatrix.copy(_.projectionMatrix)
        }
        ,
        this.getCamera = function() {
            return M
        }
        ,
        this.getFoveation = function() {
            return null !== h ? h.fixedFoveation : null !== u ? u.fixedFoveation : void 0
        }
        ,
        this.setFoveation = function(e) {
            null !== h && (h.fixedFoveation = e),
            null !== u && void 0 !== u.fixedFoveation && (u.fixedFoveation = e)
        }
        ;
        let R = null;
        const P = new on;
        P.setAnimationLoop((function(t, n) {
            if (l = n.getViewerPose(o || s),
            d = n,
            null !== l) {
                const t = l.views;
                null !== u && (e.setRenderTargetFramebuffer(f, u.framebuffer),
                e.setRenderTarget(f));
                let n = !1;
                t.length !== M.cameras.length && (M.cameras.length = 0,
                n = !0);
                for (let i = 0; i < t.length; i++) {
                    const r = t[i];
                    let s = null;
                    if (null !== u)
                        s = u.getViewport(r);
                    else {
                        const t = c.getViewSubImage(h, r);
                        s = t.viewport,
                        0 === i && (e.setRenderTargetTextures(f, t.colorTexture, h.ignoreDepthValues ? void 0 : t.depthStencilTexture),
                        e.setRenderTarget(f))
                    }
                    let a = y[i];
                    void 0 === a && (a = new $t,
                    a.layers.enable(i),
                    a.viewport = new V,
                    y[i] = a),
                    a.matrix.fromArray(r.transform.matrix),
                    a.projectionMatrix.fromArray(r.projectionMatrix),
                    a.viewport.set(s.x, s.y, s.width, s.height),
                    0 === i && M.matrix.copy(a.matrix),
                    !0 === n && M.cameras.push(a)
                }
            }
            const r = i.inputSources;
            for (let e = 0; e < g.length; e++) {
                const t = r[e]
                  , i = v.get(t);
                void 0 !== i && i.update(t, n, o || s)
            }
            R && R(t, n),
            d = null
        }
        )),
        this.setAnimationLoop = function(e) {
            R = e
        }
        ,
        this.dispose = function() {}
    }
}
function Ur(e, t) {
    function n(n, i) {
        n.opacity.value = i.opacity,
        i.color && n.diffuse.value.copy(i.color),
        i.emissive && n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),
        i.map && (n.map.value = i.map),
        i.alphaMap && (n.alphaMap.value = i.alphaMap),
        i.bumpMap && (n.bumpMap.value = i.bumpMap,
        n.bumpScale.value = i.bumpScale,
        1 === i.side && (n.bumpScale.value *= -1)),
        i.displacementMap && (n.displacementMap.value = i.displacementMap,
        n.displacementScale.value = i.displacementScale,
        n.displacementBias.value = i.displacementBias),
        i.emissiveMap && (n.emissiveMap.value = i.emissiveMap),
        i.normalMap && (n.normalMap.value = i.normalMap,
        n.normalScale.value.copy(i.normalScale),
        1 === i.side && n.normalScale.value.negate()),
        i.specularMap && (n.specularMap.value = i.specularMap),
        i.alphaTest > 0 && (n.alphaTest.value = i.alphaTest);
        const r = t.get(i).envMap;
        if (r && (n.envMap.value = r,
        n.flipEnvMap.value = r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1,
        n.reflectivity.value = i.reflectivity,
        n.ior.value = i.ior,
        n.refractionRatio.value = i.refractionRatio),
        i.lightMap) {
            n.lightMap.value = i.lightMap;
            const t = !0 !== e.physicallyCorrectLights ? Math.PI : 1;
            n.lightMapIntensity.value = i.lightMapIntensity * t
        }
        let s, a;
        i.aoMap && (n.aoMap.value = i.aoMap,
        n.aoMapIntensity.value = i.aoMapIntensity),
        i.map ? s = i.map : i.specularMap ? s = i.specularMap : i.displacementMap ? s = i.displacementMap : i.normalMap ? s = i.normalMap : i.bumpMap ? s = i.bumpMap : i.roughnessMap ? s = i.roughnessMap : i.metalnessMap ? s = i.metalnessMap : i.alphaMap ? s = i.alphaMap : i.emissiveMap ? s = i.emissiveMap : i.clearcoatMap ? s = i.clearcoatMap : i.clearcoatNormalMap ? s = i.clearcoatNormalMap : i.clearcoatRoughnessMap ? s = i.clearcoatRoughnessMap : i.iridescenceMap ? s = i.iridescenceMap : i.iridescenceThicknessMap ? s = i.iridescenceThicknessMap : i.specularIntensityMap ? s = i.specularIntensityMap : i.specularColorMap ? s = i.specularColorMap : i.transmissionMap ? s = i.transmissionMap : i.thicknessMap ? s = i.thicknessMap : i.sheenColorMap ? s = i.sheenColorMap : i.sheenRoughnessMap && (s = i.sheenRoughnessMap),
        void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture),
        !0 === s.matrixAutoUpdate && s.updateMatrix(),
        n.uvTransform.value.copy(s.matrix)),
        i.aoMap ? a = i.aoMap : i.lightMap && (a = i.lightMap),
        void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture),
        !0 === a.matrixAutoUpdate && a.updateMatrix(),
        n.uv2Transform.value.copy(a.matrix))
    }
    return {
        refreshFogUniforms: function(e, t) {
            e.fogColor.value.copy(t.color),
            t.isFog ? (e.fogNear.value = t.near,
            e.fogFar.value = t.far) : t.isFogExp2 && (e.fogDensity.value = t.density)
        },
        refreshMaterialUniforms: function(e, i, r, s, a) {
            i.isMeshBasicMaterial || i.isMeshLambertMaterial ? n(e, i) : i.isMeshToonMaterial ? (n(e, i),
            function(e, t) {
                t.gradientMap && (e.gradientMap.value = t.gradientMap)
            }(e, i)) : i.isMeshPhongMaterial ? (n(e, i),
            function(e, t) {
                e.specular.value.copy(t.specular),
                e.shininess.value = Math.max(t.shininess, 1e-4)
            }(e, i)) : i.isMeshStandardMaterial ? (n(e, i),
            function(e, n) {
                e.roughness.value = n.roughness,
                e.metalness.value = n.metalness,
                n.roughnessMap && (e.roughnessMap.value = n.roughnessMap);
                n.metalnessMap && (e.metalnessMap.value = n.metalnessMap);
                t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity)
            }(e, i),
            i.isMeshPhysicalMaterial && function(e, t, n) {
                e.ior.value = t.ior,
                t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),
                e.sheenRoughness.value = t.sheenRoughness,
                t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap),
                t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap));
                t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat,
                e.clearcoatRoughness.value = t.clearcoatRoughness,
                t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap),
                t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap),
                t.clearcoatNormalMap && (e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),
                e.clearcoatNormalMap.value = t.clearcoatNormalMap,
                1 === t.side && e.clearcoatNormalScale.value.negate()));
                t.iridescence > 0 && (e.iridescence.value = t.iridescence,
                e.iridescenceIOR.value = t.iridescenceIOR,
                e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0],
                e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1],
                t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap),
                t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap));
                t.transmission > 0 && (e.transmission.value = t.transmission,
                e.transmissionSamplerMap.value = n.texture,
                e.transmissionSamplerSize.value.set(n.width, n.height),
                t.transmissionMap && (e.transmissionMap.value = t.transmissionMap),
                e.thickness.value = t.thickness,
                t.thicknessMap && (e.thicknessMap.value = t.thicknessMap),
                e.attenuationDistance.value = t.attenuationDistance,
                e.attenuationColor.value.copy(t.attenuationColor));
                e.specularIntensity.value = t.specularIntensity,
                e.specularColor.value.copy(t.specularColor),
                t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap);
                t.specularColorMap && (e.specularColorMap.value = t.specularColorMap)
            }(e, i, a)) : i.isMeshMatcapMaterial ? (n(e, i),
            function(e, t) {
                t.matcap && (e.matcap.value = t.matcap)
            }(e, i)) : i.isMeshDepthMaterial ? n(e, i) : i.isMeshDistanceMaterial ? (n(e, i),
            function(e, t) {
                e.referencePosition.value.copy(t.referencePosition),
                e.nearDistance.value = t.nearDistance,
                e.farDistance.value = t.farDistance
            }(e, i)) : i.isMeshNormalMaterial ? n(e, i) : i.isLineBasicMaterial ? (function(e, t) {
                e.diffuse.value.copy(t.color),
                e.opacity.value = t.opacity
            }(e, i),
            i.isLineDashedMaterial && function(e, t) {
                e.dashSize.value = t.dashSize,
                e.totalSize.value = t.dashSize + t.gapSize,
                e.scale.value = t.scale
            }(e, i)) : i.isPointsMaterial ? function(e, t, n, i) {
                e.diffuse.value.copy(t.color),
                e.opacity.value = t.opacity,
                e.size.value = t.size * n,
                e.scale.value = .5 * i,
                t.map && (e.map.value = t.map);
                t.alphaMap && (e.alphaMap.value = t.alphaMap);
                t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
                let r;
                t.map ? r = t.map : t.alphaMap && (r = t.alphaMap);
                void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(),
                e.uvTransform.value.copy(r.matrix))
            }(e, i, r, s) : i.isSpriteMaterial ? function(e, t) {
                e.diffuse.value.copy(t.color),
                e.opacity.value = t.opacity,
                e.rotation.value = t.rotation,
                t.map && (e.map.value = t.map);
                t.alphaMap && (e.alphaMap.value = t.alphaMap);
                t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
                let n;
                t.map ? n = t.map : t.alphaMap && (n = t.alphaMap);
                void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                e.uvTransform.value.copy(n.matrix))
            }(e, i) : i.isShadowMaterial ? (e.color.value.copy(i.color),
            e.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1)
        }
    }
}
function kr(e={}) {
    this.isWebGLRenderer = !0;
    const t = void 0 !== e.canvas ? e.canvas : function() {
        const e = S("canvas");
        return e.style.display = "block",
        e
    }()
      , n = void 0 !== e.context ? e.context : null
      , i = void 0 === e.depth || e.depth
      , r = void 0 === e.stencil || e.stencil
      , s = void 0 !== e.antialias && e.antialias
      , a = void 0 === e.premultipliedAlpha || e.premultipliedAlpha
      , o = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer
      , l = void 0 !== e.powerPreference ? e.powerPreference : "default"
      , c = void 0 !== e.failIfMajorPerformanceCaveat && e.failIfMajorPerformanceCaveat;
    let h;
    h = null !== n ? n.getContextAttributes().alpha : void 0 !== e.alpha && e.alpha;
    let u = null
      , d = null;
    const p = []
      , m = [];
    this.domElement = t,
    this.debug = {
        checkShaderErrors: !0
    },
    this.autoClear = !0,
    this.autoClearColor = !0,
    this.autoClearDepth = !0,
    this.autoClearStencil = !0,
    this.sortObjects = !0,
    this.clippingPlanes = [],
    this.localClippingEnabled = !1,
    this.outputEncoding = 3e3,
    this.physicallyCorrectLights = !1,
    this.toneMapping = 0,
    this.toneMappingExposure = 1,
    Object.defineProperties(this, {
        gammaFactor: {
            get: function() {
                return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),
                2
            },
            set: function() {
                console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")
            }
        }
    });
    const f = this;
    let g = !1
      , v = 0
      , _ = 0
      , y = null
      , b = -1
      , w = null;
    const T = new V
      , E = new V;
    let A = null
      , L = t.width
      , C = t.height
      , R = 1
      , P = null
      , D = null;
    const I = new V(0,0,L,C)
      , N = new V(0,0,L,C);
    let z = !1;
    const O = new an;
    let F = !1
      , U = !1
      , k = null;
    const B = new Se
      , H = new M
      , W = new X
      , j = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0
    };
    function q() {
        return null === y ? R : 1
    }
    let Y, $, K, Z, J, Q, ee, te, ne, ie, re, se, ae, oe, le, ce, he, ue, de, pe, me, fe, ge, ve = n;
    function _e(e, n) {
        for (let i = 0; i < e.length; i++) {
            const r = e[i]
              , s = t.getContext(r, n);
            if (null !== s)
                return s
        }
        return null
    }
    try {
        const e = {
            alpha: !0,
            depth: i,
            stencil: r,
            antialias: s,
            premultipliedAlpha: a,
            preserveDrawingBuffer: o,
            powerPreference: l,
            failIfMajorPerformanceCaveat: c
        };
        if ("setAttribute"in t && t.setAttribute("data-engine", "three.js r141"),
        t.addEventListener("webglcontextlost", Me, !1),
        t.addEventListener("webglcontextrestored", be, !1),
        t.addEventListener("webglcontextcreationerror", we, !1),
        null === ve) {
            const t = ["webgl2", "webgl", "experimental-webgl"];
            if (!0 === f.isWebGL1Renderer && t.shift(),
            ve = _e(t, e),
            null === ve)
                throw _e(t) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
        }
        void 0 === ve.getShaderPrecisionFormat && (ve.getShaderPrecisionFormat = function() {
            return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
            }
        }
        )
    } catch (e) {
        throw console.error("THREE.WebGLRenderer: " + e.message),
        e
    }
    function xe() {
        Y = new Nn(ve),
        $ = new gn(ve,Y,e),
        Y.init($),
        fe = new Pr(ve,Y,$),
        K = new Cr(ve,Y,$),
        Z = new Fn(ve),
        J = new fr,
        Q = new Rr(ve,Y,K,J,$,fe,Z),
        ee = new _n(f),
        te = new In(f),
        ne = new ln(ve,$),
        ge = new mn(ve,Y,ne,$),
        ie = new zn(ve,ne,Z,ge),
        re = new Vn(ve,ie,ne,Z),
        de = new Hn(ve,$,Q),
        ce = new vn(J),
        se = new mr(f,ee,te,Y,$,ge,ce),
        ae = new Ur(f,J),
        oe = new xr,
        le = new Tr(Y,$),
        ue = new pn(f,ee,K,re,h,a),
        he = new Lr(f,re,$),
        pe = new fn(ve,Y,Z,$),
        me = new On(ve,Y,Z,$),
        Z.programs = se.programs,
        f.capabilities = $,
        f.extensions = Y,
        f.properties = J,
        f.renderLists = oe,
        f.shadowMap = he,
        f.state = K,
        f.info = Z
    }
    xe();
    const ye = new Fr(f,ve);
    function Me(e) {
        e.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        g = !0
    }
    function be() {
        console.log("THREE.WebGLRenderer: Context Restored."),
        g = !1;
        const e = Z.autoReset
          , t = he.enabled
          , n = he.autoUpdate
          , i = he.needsUpdate
          , r = he.type;
        xe(),
        Z.autoReset = e,
        he.enabled = t,
        he.autoUpdate = n,
        he.needsUpdate = i,
        he.type = r
    }
    function we(e) {
        console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage)
    }
    function Te(e) {
        const t = e.target;
        t.removeEventListener("dispose", Te),
        function(e) {
            (function(e) {
                const t = J.get(e).programs;
                void 0 !== t && (t.forEach((function(e) {
                    se.releaseProgram(e)
                }
                )),
                e.isShaderMaterial && se.releaseShaderCache(e))
            }
            )(e),
            J.remove(e)
        }(t)
    }
    this.xr = ye,
    this.getContext = function() {
        return ve
    }
    ,
    this.getContextAttributes = function() {
        return ve.getContextAttributes()
    }
    ,
    this.forceContextLoss = function() {
        const e = Y.get("WEBGL_lose_context");
        e && e.loseContext()
    }
    ,
    this.forceContextRestore = function() {
        const e = Y.get("WEBGL_lose_context");
        e && e.restoreContext()
    }
    ,
    this.getPixelRatio = function() {
        return R
    }
    ,
    this.setPixelRatio = function(e) {
        void 0 !== e && (R = e,
        this.setSize(L, C, !1))
    }
    ,
    this.getSize = function(e) {
        return e.set(L, C)
    }
    ,
    this.setSize = function(e, n, i) {
        ye.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (L = e,
        C = n,
        t.width = Math.floor(e * R),
        t.height = Math.floor(n * R),
        !1 !== i && (t.style.width = e + "px",
        t.style.height = n + "px"),
        this.setViewport(0, 0, e, n))
    }
    ,
    this.getDrawingBufferSize = function(e) {
        return e.set(L * R, C * R).floor()
    }
    ,
    this.setDrawingBufferSize = function(e, n, i) {
        L = e,
        C = n,
        R = i,
        t.width = Math.floor(e * i),
        t.height = Math.floor(n * i),
        this.setViewport(0, 0, e, n)
    }
    ,
    this.getCurrentViewport = function(e) {
        return e.copy(T)
    }
    ,
    this.getViewport = function(e) {
        return e.copy(I)
    }
    ,
    this.setViewport = function(e, t, n, i) {
        e.isVector4 ? I.set(e.x, e.y, e.z, e.w) : I.set(e, t, n, i),
        K.viewport(T.copy(I).multiplyScalar(R).floor())
    }
    ,
    this.getScissor = function(e) {
        return e.copy(N)
    }
    ,
    this.setScissor = function(e, t, n, i) {
        e.isVector4 ? N.set(e.x, e.y, e.z, e.w) : N.set(e, t, n, i),
        K.scissor(E.copy(N).multiplyScalar(R).floor())
    }
    ,
    this.getScissorTest = function() {
        return z
    }
    ,
    this.setScissorTest = function(e) {
        K.setScissorTest(z = e)
    }
    ,
    this.setOpaqueSort = function(e) {
        P = e
    }
    ,
    this.setTransparentSort = function(e) {
        D = e
    }
    ,
    this.getClearColor = function(e) {
        return e.copy(ue.getClearColor())
    }
    ,
    this.setClearColor = function() {
        ue.setClearColor.apply(ue, arguments)
    }
    ,
    this.getClearAlpha = function() {
        return ue.getClearAlpha()
    }
    ,
    this.setClearAlpha = function() {
        ue.setClearAlpha.apply(ue, arguments)
    }
    ,
    this.clear = function(e=!0, t=!0, n=!0) {
        let i = 0;
        e && (i |= 16384),
        t && (i |= 256),
        n && (i |= 1024),
        ve.clear(i)
    }
    ,
    this.clearColor = function() {
        this.clear(!0, !1, !1)
    }
    ,
    this.clearDepth = function() {
        this.clear(!1, !0, !1)
    }
    ,
    this.clearStencil = function() {
        this.clear(!1, !1, !0)
    }
    ,
    this.dispose = function() {
        t.removeEventListener("webglcontextlost", Me, !1),
        t.removeEventListener("webglcontextrestored", be, !1),
        t.removeEventListener("webglcontextcreationerror", we, !1),
        oe.dispose(),
        le.dispose(),
        J.dispose(),
        ee.dispose(),
        te.dispose(),
        re.dispose(),
        ge.dispose(),
        se.dispose(),
        ye.dispose(),
        ye.removeEventListener("sessionstart", Ae),
        ye.removeEventListener("sessionend", Le),
        k && (k.dispose(),
        k = null),
        Ce.stop()
    }
    ,
    this.renderBufferDirect = function(e, t, n, i, r, s) {
        null === t && (t = j);
        const a = r.isMesh && r.matrixWorld.determinant() < 0
          , o = function(e, t, n, i, r) {
            !0 !== t.isScene && (t = j);
            Q.resetTextureUnits();
            const s = t.fog
              , a = i.isMeshStandardMaterial ? t.environment : null
              , o = null === y ? f.outputEncoding : !0 === y.isXRRenderTarget ? y.texture.encoding : 3e3
              , l = (i.isMeshStandardMaterial ? te : ee).get(i.envMap || a)
              , c = !0 === i.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize
              , h = !!i.normalMap && !!n.attributes.tangent
              , u = !!n.morphAttributes.position
              , p = !!n.morphAttributes.normal
              , m = !!n.morphAttributes.color
              , g = i.toneMapped ? f.toneMapping : 0
              , v = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color
              , _ = void 0 !== v ? v.length : 0
              , x = J.get(i)
              , M = d.state.lights;
            if (!0 === F && (!0 === U || e !== w)) {
                const t = e === w && i.id === b;
                ce.setState(i, e, t)
            }
            let S = !1;
            i.version === x.__version ? x.needsLights && x.lightsStateVersion !== M.state.version || x.outputEncoding !== o || r.isInstancedMesh && !1 === x.instancing ? S = !0 : r.isInstancedMesh || !0 !== x.instancing ? r.isSkinnedMesh && !1 === x.skinning ? S = !0 : r.isSkinnedMesh || !0 !== x.skinning ? x.envMap !== l || !0 === i.fog && x.fog !== s ? S = !0 : void 0 === x.numClippingPlanes || x.numClippingPlanes === ce.numPlanes && x.numIntersection === ce.numIntersection ? (x.vertexAlphas !== c || x.vertexTangents !== h || x.morphTargets !== u || x.morphNormals !== p || x.morphColors !== m || x.toneMapping !== g || !0 === $.isWebGL2 && x.morphTargetsCount !== _) && (S = !0) : S = !0 : S = !0 : S = !0 : (S = !0,
            x.__version = i.version);
            let T = x.currentProgram;
            !0 === S && (T = Ne(i, t, r));
            let E = !1
              , A = !1
              , L = !1;
            const P = T.getUniforms()
              , D = x.uniforms;
            K.useProgram(T.program) && (E = !0,
            A = !0,
            L = !0);
            i.id !== b && (b = i.id,
            A = !0);
            if (E || w !== e) {
                if (P.setValue(ve, "projectionMatrix", e.projectionMatrix),
                $.logarithmicDepthBuffer && P.setValue(ve, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)),
                w !== e && (w = e,
                A = !0,
                L = !0),
                i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshStandardMaterial || i.envMap) {
                    const t = P.map.cameraPosition;
                    void 0 !== t && t.setValue(ve, W.setFromMatrixPosition(e.matrixWorld))
                }
                (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && P.setValue(ve, "isOrthographic", !0 === e.isOrthographicCamera),
                (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.isShadowMaterial || r.isSkinnedMesh) && P.setValue(ve, "viewMatrix", e.matrixWorldInverse)
            }
            if (r.isSkinnedMesh) {
                P.setOptional(ve, r, "bindMatrix"),
                P.setOptional(ve, r, "bindMatrixInverse");
                const e = r.skeleton;
                e && ($.floatVertexTextures ? (null === e.boneTexture && e.computeBoneTexture(),
                P.setValue(ve, "boneTexture", e.boneTexture, Q),
                P.setValue(ve, "boneTextureSize", e.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))
            }
            const I = n.morphAttributes;
            (void 0 !== I.position || void 0 !== I.normal || void 0 !== I.color && !0 === $.isWebGL2) && de.update(r, n, i, T);
            (A || x.receiveShadow !== r.receiveShadow) && (x.receiveShadow = r.receiveShadow,
            P.setValue(ve, "receiveShadow", r.receiveShadow));
            A && (P.setValue(ve, "toneMappingExposure", f.toneMappingExposure),
            x.needsLights && (z = L,
            (N = D).ambientLightColor.needsUpdate = z,
            N.lightProbe.needsUpdate = z,
            N.directionalLights.needsUpdate = z,
            N.directionalLightShadows.needsUpdate = z,
            N.pointLights.needsUpdate = z,
            N.pointLightShadows.needsUpdate = z,
            N.spotLights.needsUpdate = z,
            N.spotLightShadows.needsUpdate = z,
            N.rectAreaLights.needsUpdate = z,
            N.hemisphereLights.needsUpdate = z),
            s && !0 === i.fog && ae.refreshFogUniforms(D, s),
            ae.refreshMaterialUniforms(D, i, R, C, k),
            qi.upload(ve, x.uniformsList, D, Q));
            var N, z;
            i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (qi.upload(ve, x.uniformsList, D, Q),
            i.uniformsNeedUpdate = !1);
            i.isSpriteMaterial && P.setValue(ve, "center", r.center);
            return P.setValue(ve, "modelViewMatrix", r.modelViewMatrix),
            P.setValue(ve, "normalMatrix", r.normalMatrix),
            P.setValue(ve, "modelMatrix", r.matrixWorld),
            T
        }(e, t, n, i, r);
        K.setMaterial(i, a);
        let l = n.index;
        const c = n.attributes.position;
        if (null === l) {
            if (void 0 === c || 0 === c.count)
                return
        } else if (0 === l.count)
            return;
        let h, u = 1;
        !0 === i.wireframe && (l = ie.getWireframeAttribute(n),
        u = 2),
        ge.setup(r, i, o, n, l);
        let p = pe;
        null !== l && (h = ne.get(l),
        p = me,
        p.setIndex(h));
        const m = null !== l ? l.count : c.count
          , g = n.drawRange.start * u
          , v = n.drawRange.count * u
          , _ = null !== s ? s.start * u : 0
          , x = null !== s ? s.count * u : 1 / 0
          , M = Math.max(g, _)
          , S = Math.min(m, g + v, _ + x) - 1
          , T = Math.max(0, S - M + 1);
        if (0 !== T) {
            if (r.isMesh)
                !0 === i.wireframe ? (K.setLineWidth(i.wireframeLinewidth * q()),
                p.setMode(1)) : p.setMode(4);
            else if (r.isLine) {
                let e = i.linewidth;
                void 0 === e && (e = 1),
                K.setLineWidth(e * q()),
                r.isLineSegments ? p.setMode(1) : r.isLineLoop ? p.setMode(2) : p.setMode(3)
            } else
                r.isPoints ? p.setMode(0) : r.isSprite && p.setMode(4);
            if (r.isInstancedMesh)
                p.renderInstances(M, T, r.count);
            else if (n.isInstancedBufferGeometry) {
                const e = Math.min(n.instanceCount, n._maxInstanceCount);
                p.renderInstances(M, T, e)
            } else
                p.render(M, T)
        }
    }
    ,
    this.compile = function(e, t) {
        d = le.get(e),
        d.init(),
        m.push(d),
        e.traverseVisible((function(e) {
            e.isLight && e.layers.test(t.layers) && (d.pushLight(e),
            e.castShadow && d.pushShadow(e))
        }
        )),
        d.setupLights(f.physicallyCorrectLights),
        e.traverse((function(t) {
            const n = t.material;
            if (n)
                if (Array.isArray(n))
                    for (let i = 0; i < n.length; i++) {
                        Ne(n[i], e, t)
                    }
                else
                    Ne(n, e, t)
        }
        )),
        m.pop(),
        d = null
    }
    ;
    let Ee = null;
    function Ae() {
        Ce.stop()
    }
    function Le() {
        Ce.start()
    }
    const Ce = new on;
    function Re(e, t, n, i) {
        if (!1 === e.visible)
            return;
        if (e.layers.test(t.layers))
            if (e.isGroup)
                n = e.renderOrder;
            else if (e.isLOD)
                !0 === e.autoUpdate && e.update(t);
            else if (e.isLight)
                d.pushLight(e),
                e.castShadow && d.pushShadow(e);
            else if (e.isSprite) {
                if (!e.frustumCulled || O.intersectsSprite(e)) {
                    i && W.setFromMatrixPosition(e.matrixWorld).applyMatrix4(B);
                    const t = re.update(e)
                      , r = e.material;
                    r.visible && u.push(e, t, r, n, W.z, null)
                }
            } else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.frame !== Z.render.frame && (e.skeleton.update(),
            e.skeleton.frame = Z.render.frame),
            !e.frustumCulled || O.intersectsObject(e))) {
                i && W.setFromMatrixPosition(e.matrixWorld).applyMatrix4(B);
                const t = re.update(e)
                  , r = e.material;
                if (Array.isArray(r)) {
                    const i = t.groups;
                    for (let s = 0, a = i.length; s < a; s++) {
                        const a = i[s]
                          , o = r[a.materialIndex];
                        o && o.visible && u.push(e, t, o, n, W.z, a)
                    }
                } else
                    r.visible && u.push(e, t, r, n, W.z, null)
            }
        const r = e.children;
        for (let e = 0, s = r.length; e < s; e++)
            Re(r[e], t, n, i)
    }
    function Pe(e, t, n, i) {
        const r = e.opaque
          , a = e.transmissive
          , o = e.transparent;
        d.setupLightsView(n),
        a.length > 0 && function(e, t, n) {
            const i = $.isWebGL2;
            null === k && (k = new G(1,1,{
                generateMipmaps: !0,
                type: Y.has("EXT_color_buffer_half_float") ? 1016 : 1009,
                minFilter: 1008,
                samples: i && !0 === s ? 4 : 0
            }));
            f.getDrawingBufferSize(H),
            i ? k.setSize(H.x, H.y) : k.setSize(x(H.x), x(H.y));
            const r = f.getRenderTarget();
            f.setRenderTarget(k),
            f.clear();
            const a = f.toneMapping;
            f.toneMapping = 0,
            De(e, t, n),
            f.toneMapping = a,
            Q.updateMultisampleRenderTarget(k),
            Q.updateRenderTargetMipmap(k),
            f.setRenderTarget(r)
        }(r, t, n),
        i && K.viewport(T.copy(i)),
        r.length > 0 && De(r, t, n),
        a.length > 0 && De(a, t, n),
        o.length > 0 && De(o, t, n),
        K.buffers.depth.setTest(!0),
        K.buffers.depth.setMask(!0),
        K.buffers.color.setMask(!0),
        K.setPolygonOffset(!1)
    }
    function De(e, t, n) {
        const i = !0 === t.isScene ? t.overrideMaterial : null;
        for (let r = 0, s = e.length; r < s; r++) {
            const s = e[r]
              , a = s.object
              , o = s.geometry
              , l = null === i ? s.material : i
              , c = s.group;
            a.layers.test(n.layers) && Ie(a, t, n, o, l, c)
        }
    }
    function Ie(e, t, n, i, r, s) {
        e.onBeforeRender(f, t, n, i, r, s),
        e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld),
        e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
        r.onBeforeRender(f, t, n, i, e, s),
        !0 === r.transparent && 2 === r.side ? (r.side = 1,
        r.needsUpdate = !0,
        f.renderBufferDirect(n, t, i, r, e, s),
        r.side = 0,
        r.needsUpdate = !0,
        f.renderBufferDirect(n, t, i, r, e, s),
        r.side = 2) : f.renderBufferDirect(n, t, i, r, e, s),
        e.onAfterRender(f, t, n, i, r, s)
    }
    function Ne(e, t, n) {
        !0 !== t.isScene && (t = j);
        const i = J.get(e)
          , r = d.state.lights
          , s = d.state.shadowsArray
          , a = r.state.version
          , o = se.getParameters(e, r.state, s, t, n)
          , l = se.getProgramCacheKey(o);
        let c = i.programs;
        i.environment = e.isMeshStandardMaterial ? t.environment : null,
        i.fog = t.fog,
        i.envMap = (e.isMeshStandardMaterial ? te : ee).get(e.envMap || i.environment),
        void 0 === c && (e.addEventListener("dispose", Te),
        c = new Map,
        i.programs = c);
        let h = c.get(l);
        if (void 0 !== h) {
            if (i.currentProgram === h && i.lightsStateVersion === a)
                return ze(e, o),
                h
        } else
            o.uniforms = se.getUniforms(e),
            e.onBuild(n, o, f),
            e.onBeforeCompile(o, f),
            h = se.acquireProgram(o, l),
            c.set(l, h),
            i.uniforms = o.uniforms;
        const u = i.uniforms;
        (e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (u.clippingPlanes = ce.uniform),
        ze(e, o),
        i.needsLights = function(e) {
            return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && !0 === e.lights
        }(e),
        i.lightsStateVersion = a,
        i.needsLights && (u.ambientLightColor.value = r.state.ambient,
        u.lightProbe.value = r.state.probe,
        u.directionalLights.value = r.state.directional,
        u.directionalLightShadows.value = r.state.directionalShadow,
        u.spotLights.value = r.state.spot,
        u.spotLightShadows.value = r.state.spotShadow,
        u.rectAreaLights.value = r.state.rectArea,
        u.ltc_1.value = r.state.rectAreaLTC1,
        u.ltc_2.value = r.state.rectAreaLTC2,
        u.pointLights.value = r.state.point,
        u.pointLightShadows.value = r.state.pointShadow,
        u.hemisphereLights.value = r.state.hemi,
        u.directionalShadowMap.value = r.state.directionalShadowMap,
        u.directionalShadowMatrix.value = r.state.directionalShadowMatrix,
        u.spotShadowMap.value = r.state.spotShadowMap,
        u.spotShadowMatrix.value = r.state.spotShadowMatrix,
        u.pointShadowMap.value = r.state.pointShadowMap,
        u.pointShadowMatrix.value = r.state.pointShadowMatrix);
        const p = h.getUniforms()
          , m = qi.seqWithValue(p.seq, u);
        return i.currentProgram = h,
        i.uniformsList = m,
        h
    }
    function ze(e, t) {
        const n = J.get(e);
        n.outputEncoding = t.outputEncoding,
        n.instancing = t.instancing,
        n.skinning = t.skinning,
        n.morphTargets = t.morphTargets,
        n.morphNormals = t.morphNormals,
        n.morphColors = t.morphColors,
        n.morphTargetsCount = t.morphTargetsCount,
        n.numClippingPlanes = t.numClippingPlanes,
        n.numIntersection = t.numClipIntersection,
        n.vertexAlphas = t.vertexAlphas,
        n.vertexTangents = t.vertexTangents,
        n.toneMapping = t.toneMapping
    }
    Ce.setAnimationLoop((function(e) {
        Ee && Ee(e)
    }
    )),
    "undefined" != typeof self && Ce.setContext(self),
    this.setAnimationLoop = function(e) {
        Ee = e,
        ye.setAnimationLoop(e),
        null === e ? Ce.stop() : Ce.start()
    }
    ,
    ye.addEventListener("sessionstart", Ae),
    ye.addEventListener("sessionend", Le),
    this.render = function(e, t) {
        if (void 0 !== t && !0 !== t.isCamera)
            return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        if (!0 === g)
            return;
        !0 === e.autoUpdate && e.updateMatrixWorld(),
        null === t.parent && t.updateMatrixWorld(),
        !0 === ye.enabled && !0 === ye.isPresenting && (!0 === ye.cameraAutoUpdate && ye.updateCamera(t),
        t = ye.getCamera()),
        !0 === e.isScene && e.onBeforeRender(f, e, t, y),
        d = le.get(e, m.length),
        d.init(),
        m.push(d),
        B.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        O.setFromProjectionMatrix(B),
        U = this.localClippingEnabled,
        F = ce.init(this.clippingPlanes, U, t),
        u = oe.get(e, p.length),
        u.init(),
        p.push(u),
        Re(e, t, 0, f.sortObjects),
        u.finish(),
        !0 === f.sortObjects && u.sort(P, D),
        !0 === F && ce.beginShadows();
        const n = d.state.shadowsArray;
        if (he.render(n, e, t),
        !0 === F && ce.endShadows(),
        !0 === this.info.autoReset && this.info.reset(),
        ue.render(u, e),
        d.setupLights(f.physicallyCorrectLights),
        t.isArrayCamera) {
            const n = t.cameras;
            for (let t = 0, i = n.length; t < i; t++) {
                const i = n[t];
                Pe(u, e, i, i.viewport)
            }
        } else
            Pe(u, e, t);
        null !== y && (Q.updateMultisampleRenderTarget(y),
        Q.updateRenderTargetMipmap(y)),
        !0 === e.isScene && e.onAfterRender(f, e, t),
        ge.resetDefaultState(),
        b = -1,
        w = null,
        m.pop(),
        d = m.length > 0 ? m[m.length - 1] : null,
        p.pop(),
        u = p.length > 0 ? p[p.length - 1] : null
    }
    ,
    this.getActiveCubeFace = function() {
        return v
    }
    ,
    this.getActiveMipmapLevel = function() {
        return _
    }
    ,
    this.getRenderTarget = function() {
        return y
    }
    ,
    this.setRenderTargetTextures = function(e, t, n) {
        J.get(e.texture).__webglTexture = t,
        J.get(e.depthTexture).__webglTexture = n;
        const i = J.get(e);
        i.__hasExternalTextures = !0,
        i.__hasExternalTextures && (i.__autoAllocateDepthBuffer = void 0 === n,
        i.__autoAllocateDepthBuffer || !0 === Y.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),
        i.__useRenderToTexture = !1))
    }
    ,
    this.setRenderTargetFramebuffer = function(e, t) {
        const n = J.get(e);
        n.__webglFramebuffer = t,
        n.__useDefaultFramebuffer = void 0 === t
    }
    ,
    this.setRenderTarget = function(e, t=0, n=0) {
        y = e,
        v = t,
        _ = n;
        let i = !0;
        if (e) {
            const t = J.get(e);
            void 0 !== t.__useDefaultFramebuffer ? (K.bindFramebuffer(36160, null),
            i = !1) : void 0 === t.__webglFramebuffer ? Q.setupRenderTarget(e) : t.__hasExternalTextures && Q.rebindTextures(e, J.get(e.texture).__webglTexture, J.get(e.depthTexture).__webglTexture)
        }
        let r = null
          , s = !1
          , a = !1;
        if (e) {
            const n = e.texture;
            (n.isData3DTexture || n.isDataArrayTexture) && (a = !0);
            const i = J.get(e).__webglFramebuffer;
            e.isWebGLCubeRenderTarget ? (r = i[t],
            s = !0) : r = $.isWebGL2 && e.samples > 0 && !1 === Q.useMultisampledRTT(e) ? J.get(e).__webglMultisampledFramebuffer : i,
            T.copy(e.viewport),
            E.copy(e.scissor),
            A = e.scissorTest
        } else
            T.copy(I).multiplyScalar(R).floor(),
            E.copy(N).multiplyScalar(R).floor(),
            A = z;
        if (K.bindFramebuffer(36160, r) && $.drawBuffers && i && K.drawBuffers(e, r),
        K.viewport(T),
        K.scissor(E),
        K.setScissorTest(A),
        s) {
            const i = J.get(e.texture);
            ve.framebufferTexture2D(36160, 36064, 34069 + t, i.__webglTexture, n)
        } else if (a) {
            const i = J.get(e.texture)
              , r = t || 0;
            ve.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r)
        }
        b = -1
    }
    ,
    this.readRenderTargetPixels = function(e, t, n, i, r, s, a) {
        if (!e || !e.isWebGLRenderTarget)
            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let o = J.get(e).__webglFramebuffer;
        if (e.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]),
        o) {
            K.bindFramebuffer(36160, o);
            try {
                const a = e.texture
                  , o = a.format
                  , l = a.type;
                if (1023 !== o && fe.convert(o) !== ve.getParameter(35739))
                    return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                const c = 1016 === l && (Y.has("EXT_color_buffer_half_float") || $.isWebGL2 && Y.has("EXT_color_buffer_float"));
                if (!(1009 === l || fe.convert(l) === ve.getParameter(35738) || 1015 === l && ($.isWebGL2 || Y.has("OES_texture_float") || Y.has("WEBGL_color_buffer_float")) || c))
                    return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                t >= 0 && t <= e.width - i && n >= 0 && n <= e.height - r && ve.readPixels(t, n, i, r, fe.convert(o), fe.convert(l), s)
            } finally {
                const e = null !== y ? J.get(y).__webglFramebuffer : null;
                K.bindFramebuffer(36160, e)
            }
        }
    }
    ,
    this.copyFramebufferToTexture = function(e, t, n=0) {
        const i = Math.pow(2, -n)
          , r = Math.floor(t.image.width * i)
          , s = Math.floor(t.image.height * i);
        Q.setTexture2D(t, 0),
        ve.copyTexSubImage2D(3553, n, 0, 0, e.x, e.y, r, s),
        K.unbindTexture()
    }
    ,
    this.copyTextureToTexture = function(e, t, n, i=0) {
        const r = t.image.width
          , s = t.image.height
          , a = fe.convert(n.format)
          , o = fe.convert(n.type);
        Q.setTexture2D(n, 0),
        ve.pixelStorei(37440, n.flipY),
        ve.pixelStorei(37441, n.premultiplyAlpha),
        ve.pixelStorei(3317, n.unpackAlignment),
        t.isDataTexture ? ve.texSubImage2D(3553, i, e.x, e.y, r, s, a, o, t.image.data) : t.isCompressedTexture ? ve.compressedTexSubImage2D(3553, i, e.x, e.y, t.mipmaps[0].width, t.mipmaps[0].height, a, t.mipmaps[0].data) : ve.texSubImage2D(3553, i, e.x, e.y, a, o, t.image),
        0 === i && n.generateMipmaps && ve.generateMipmap(3553),
        K.unbindTexture()
    }
    ,
    this.copyTextureToTexture3D = function(e, t, n, i, r=0) {
        if (f.isWebGL1Renderer)
            return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        const s = e.max.x - e.min.x + 1
          , a = e.max.y - e.min.y + 1
          , o = e.max.z - e.min.z + 1
          , l = fe.convert(i.format)
          , c = fe.convert(i.type);
        let h;
        if (i.isData3DTexture)
            Q.setTexture3D(i, 0),
            h = 32879;
        else {
            if (!i.isDataArrayTexture)
                return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
            Q.setTexture2DArray(i, 0),
            h = 35866
        }
        ve.pixelStorei(37440, i.flipY),
        ve.pixelStorei(37441, i.premultiplyAlpha),
        ve.pixelStorei(3317, i.unpackAlignment);
        const u = ve.getParameter(3314)
          , d = ve.getParameter(32878)
          , p = ve.getParameter(3316)
          , m = ve.getParameter(3315)
          , g = ve.getParameter(32877)
          , v = n.isCompressedTexture ? n.mipmaps[0] : n.image;
        ve.pixelStorei(3314, v.width),
        ve.pixelStorei(32878, v.height),
        ve.pixelStorei(3316, e.min.x),
        ve.pixelStorei(3315, e.min.y),
        ve.pixelStorei(32877, e.min.z),
        n.isDataTexture || n.isData3DTexture ? ve.texSubImage3D(h, r, t.x, t.y, t.z, s, a, o, l, c, v.data) : n.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),
        ve.compressedTexSubImage3D(h, r, t.x, t.y, t.z, s, a, o, l, v.data)) : ve.texSubImage3D(h, r, t.x, t.y, t.z, s, a, o, l, c, v),
        ve.pixelStorei(3314, u),
        ve.pixelStorei(32878, d),
        ve.pixelStorei(3316, p),
        ve.pixelStorei(3315, m),
        ve.pixelStorei(32877, g),
        0 === r && i.generateMipmaps && ve.generateMipmap(h),
        K.unbindTexture()
    }
    ,
    this.initTexture = function(e) {
        Q.setTexture2D(e, 0),
        K.unbindTexture()
    }
    ,
    this.resetState = function() {
        v = 0,
        _ = 0,
        y = null,
        K.reset(),
        ge.reset()
    }
    ,
    "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
        detail: this
    }))
}
(class extends kr {
}
).prototype.isWebGL1Renderer = !0;
class Br extends $e {
    constructor() {
        super(),
        this.isScene = !0,
        this.type = "Scene",
        this.background = null,
        this.environment = null,
        this.fog = null,
        this.overrideMaterial = null,
        this.autoUpdate = !0,
        "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    copy(e, t) {
        return super.copy(e, t),
        null !== e.background && (this.background = e.background.clone()),
        null !== e.environment && (this.environment = e.environment.clone()),
        null !== e.fog && (this.fog = e.fog.clone()),
        null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()),
        this.autoUpdate = e.autoUpdate,
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return null !== this.fog && (t.object.fog = this.fog.toJSON()),
        t
    }
}
class Hr {
    constructor(e, t) {
        this.isInterleavedBuffer = !0,
        this.array = e,
        this.stride = t,
        this.count = void 0 !== e ? e.length / t : 0,
        this.usage = 35044,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0,
        this.uuid = p()
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        !0 === e && this.version++
    }
    setUsage(e) {
        return this.usage = e,
        this
    }
    copy(e) {
        return this.array = new e.array.constructor(e.array),
        this.count = e.count,
        this.stride = e.stride,
        this.usage = e.usage,
        this
    }
    copyAt(e, t, n) {
        e *= this.stride,
        n *= t.stride;
        for (let i = 0, r = this.stride; i < r; i++)
            this.array[e + i] = t.array[n + i];
        return this
    }
    set(e, t=0) {
        return this.array.set(e, t),
        this
    }
    clone(e) {
        void 0 === e.arrayBuffers && (e.arrayBuffers = {}),
        void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = p()),
        void 0 === e.arrayBuffers[this.array.buffer._uuid] && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
        const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid])
          , n = new this.constructor(t,this.stride);
        return n.setUsage(this.usage),
        n
    }
    onUpload(e) {
        return this.onUploadCallback = e,
        this
    }
    toJSON(e) {
        return void 0 === e.arrayBuffers && (e.arrayBuffers = {}),
        void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = p()),
        void 0 === e.arrayBuffers[this.array.buffer._uuid] && (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))),
        {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
        }
    }
}
const Vr = new X;
class Gr {
    constructor(e, t, n, i=!1) {
        this.isInterleavedBufferAttribute = !0,
        this.name = "",
        this.data = e,
        this.itemSize = t,
        this.offset = n,
        this.normalized = !0 === i
    }
    get count() {
        return this.data.count
    }
    get array() {
        return this.data.array
    }
    set needsUpdate(e) {
        this.data.needsUpdate = e
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.data.count; t < n; t++)
            Vr.fromBufferAttribute(this, t),
            Vr.applyMatrix4(e),
            this.setXYZ(t, Vr.x, Vr.y, Vr.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++)
            Vr.fromBufferAttribute(this, t),
            Vr.applyNormalMatrix(e),
            this.setXYZ(t, Vr.x, Vr.y, Vr.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++)
            Vr.fromBufferAttribute(this, t),
            Vr.transformDirection(e),
            this.setXYZ(t, Vr.x, Vr.y, Vr.z);
        return this
    }
    setX(e, t) {
        return this.data.array[e * this.data.stride + this.offset] = t,
        this
    }
    setY(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 1] = t,
        this
    }
    setZ(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 2] = t,
        this
    }
    setW(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 3] = t,
        this
    }
    getX(e) {
        return this.data.array[e * this.data.stride + this.offset]
    }
    getY(e) {
        return this.data.array[e * this.data.stride + this.offset + 1]
    }
    getZ(e) {
        return this.data.array[e * this.data.stride + this.offset + 2]
    }
    getW(e) {
        return this.data.array[e * this.data.stride + this.offset + 3]
    }
    setXY(e, t, n) {
        return e = e * this.data.stride + this.offset,
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this
    }
    setXYZ(e, t, n, i) {
        return e = e * this.data.stride + this.offset,
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this.data.array[e + 2] = i,
        this
    }
    setXYZW(e, t, n, i, r) {
        return e = e * this.data.stride + this.offset,
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this.data.array[e + 2] = i,
        this.data.array[e + 3] = r,
        this
    }
    clone(e) {
        if (void 0 === e) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
            const e = [];
            for (let t = 0; t < this.count; t++) {
                const n = t * this.data.stride + this.offset;
                for (let t = 0; t < this.itemSize; t++)
                    e.push(this.data.array[n + t])
            }
            return new dt(new this.array.constructor(e),this.itemSize,this.normalized)
        }
        return void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}),
        void 0 === e.interleavedBuffers[this.data.uuid] && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new Gr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)
    }
    toJSON(e) {
        if (void 0 === e) {
            console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
            const e = [];
            for (let t = 0; t < this.count; t++) {
                const n = t * this.data.stride + this.offset;
                for (let t = 0; t < this.itemSize; t++)
                    e.push(this.data.array[n + t])
            }
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: e,
                normalized: this.normalized
            }
        }
        return void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}),
        void 0 === e.interleavedBuffers[this.data.uuid] && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
            isInterleavedBufferAttribute: !0,
            itemSize: this.itemSize,
            data: this.data.uuid,
            offset: this.offset,
            normalized: this.normalized
        }
    }
}
class Wr extends lt {
    constructor(e) {
        super(),
        this.isSpriteMaterial = !0,
        this.type = "SpriteMaterial",
        this.color = new z(16777215),
        this.map = null,
        this.alphaMap = null,
        this.rotation = 0,
        this.sizeAttenuation = !0,
        this.transparent = !0,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.rotation = e.rotation,
        this.sizeAttenuation = e.sizeAttenuation,
        this.fog = e.fog,
        this
    }
}
const jr = new X
  , qr = new V
  , Xr = new V
  , Yr = new X
  , $r = new Se;
class Kr extends Ht {
    constructor(e, t) {
        super(e, t),
        this.isSkinnedMesh = !0,
        this.type = "SkinnedMesh",
        this.bindMode = "attached",
        this.bindMatrix = new Se,
        this.bindMatrixInverse = new Se
    }
    copy(e, t) {
        return super.copy(e, t),
        this.bindMode = e.bindMode,
        this.bindMatrix.copy(e.bindMatrix),
        this.bindMatrixInverse.copy(e.bindMatrixInverse),
        this.skeleton = e.skeleton,
        this
    }
    bind(e, t) {
        this.skeleton = e,
        void 0 === t && (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        t = this.matrixWorld),
        this.bindMatrix.copy(t),
        this.bindMatrixInverse.copy(t).invert()
    }
    pose() {
        this.skeleton.pose()
    }
    normalizeSkinWeights() {
        const e = new V
          , t = this.geometry.attributes.skinWeight;
        for (let n = 0, i = t.count; n < i; n++) {
            e.fromBufferAttribute(t, n);
            const i = 1 / e.manhattanLength();
            i !== 1 / 0 ? e.multiplyScalar(i) : e.set(1, 0, 0, 0),
            t.setXYZW(n, e.x, e.y, e.z, e.w)
        }
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
        "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
    }
    boneTransform(e, t) {
        const n = this.skeleton
          , i = this.geometry;
        qr.fromBufferAttribute(i.attributes.skinIndex, e),
        Xr.fromBufferAttribute(i.attributes.skinWeight, e),
        jr.copy(t).applyMatrix4(this.bindMatrix),
        t.set(0, 0, 0);
        for (let e = 0; e < 4; e++) {
            const i = Xr.getComponent(e);
            if (0 !== i) {
                const r = qr.getComponent(e);
                $r.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]),
                t.addScaledVector(Yr.copy(jr).applyMatrix4($r), i)
            }
        }
        return t.applyMatrix4(this.bindMatrixInverse)
    }
}
class Zr extends $e {
    constructor() {
        super(),
        this.isBone = !0,
        this.type = "Bone"
    }
}
class Jr extends H {
    constructor(e=null, t=1, n=1, i, r, s, a, o, l=1003, c=1003, h, u) {
        super(null, s, a, o, l, c, i, r, h, u),
        this.isDataTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n
        },
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
const Qr = new Se
  , es = new Se;
class ts {
    constructor(e=[], t=[]) {
        this.uuid = p(),
        this.bones = e.slice(0),
        this.boneInverses = t,
        this.boneMatrices = null,
        this.boneTexture = null,
        this.boneTextureSize = 0,
        this.frame = -1,
        this.init()
    }
    init() {
        const e = this.bones
          , t = this.boneInverses;
        if (this.boneMatrices = new Float32Array(16 * e.length),
        0 === t.length)
            this.calculateInverses();
        else if (e.length !== t.length) {
            console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),
            this.boneInverses = [];
            for (let e = 0, t = this.bones.length; e < t; e++)
                this.boneInverses.push(new Se)
        }
    }
    calculateInverses() {
        this.boneInverses.length = 0;
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const t = new Se;
            this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(),
            this.boneInverses.push(t)
        }
    }
    pose() {
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const t = this.bones[e];
            t && t.matrixWorld.copy(this.boneInverses[e]).invert()
        }
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const t = this.bones[e];
            t && (t.parent && t.parent.isBone ? (t.matrix.copy(t.parent.matrixWorld).invert(),
            t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld),
            t.matrix.decompose(t.position, t.quaternion, t.scale))
        }
    }
    update() {
        const e = this.bones
          , t = this.boneInverses
          , n = this.boneMatrices
          , i = this.boneTexture;
        for (let i = 0, r = e.length; i < r; i++) {
            const r = e[i] ? e[i].matrixWorld : es;
            Qr.multiplyMatrices(r, t[i]),
            Qr.toArray(n, 16 * i)
        }
        null !== i && (i.needsUpdate = !0)
    }
    clone() {
        return new ts(this.bones,this.boneInverses)
    }
    computeBoneTexture() {
        let e = Math.sqrt(4 * this.bones.length);
        e = _(e),
        e = Math.max(e, 4);
        const t = new Float32Array(e * e * 4);
        t.set(this.boneMatrices);
        const n = new Jr(t,e,e,1023,1015);
        return n.needsUpdate = !0,
        this.boneMatrices = t,
        this.boneTexture = n,
        this.boneTextureSize = e,
        this
    }
    getBoneByName(e) {
        for (let t = 0, n = this.bones.length; t < n; t++) {
            const n = this.bones[t];
            if (n.name === e)
                return n
        }
    }
    dispose() {
        null !== this.boneTexture && (this.boneTexture.dispose(),
        this.boneTexture = null)
    }
    fromJSON(e, t) {
        this.uuid = e.uuid;
        for (let n = 0, i = e.bones.length; n < i; n++) {
            const i = e.bones[n];
            let r = t[i];
            void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", i),
            r = new Zr),
            this.bones.push(r),
            this.boneInverses.push((new Se).fromArray(e.boneInverses[n]))
        }
        return this.init(),
        this
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.5,
                type: "Skeleton",
                generator: "Skeleton.toJSON"
            },
            bones: [],
            boneInverses: []
        };
        e.uuid = this.uuid;
        const t = this.bones
          , n = this.boneInverses;
        for (let i = 0, r = t.length; i < r; i++) {
            const r = t[i];
            e.bones.push(r.uuid);
            const s = n[i];
            e.boneInverses.push(s.toArray())
        }
        return e
    }
}
class ns extends dt {
    constructor(e, t, n, i=1) {
        "number" == typeof n && (i = n,
        n = !1,
        console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),
        super(e, t, n),
        this.isInstancedBufferAttribute = !0,
        this.meshPerAttribute = i
    }
    copy(e) {
        return super.copy(e),
        this.meshPerAttribute = e.meshPerAttribute,
        this
    }
    toJSON() {
        const e = super.toJSON();
        return e.meshPerAttribute = this.meshPerAttribute,
        e.isInstancedBufferAttribute = !0,
        e
    }
}
class is extends lt {
    constructor(e) {
        super(),
        this.isLineBasicMaterial = !0,
        this.type = "LineBasicMaterial",
        this.color = new z(16777215),
        this.linewidth = 1,
        this.linecap = "round",
        this.linejoin = "round",
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.linewidth = e.linewidth,
        this.linecap = e.linecap,
        this.linejoin = e.linejoin,
        this.fog = e.fog,
        this
    }
}
const rs = new X
  , ss = new X
  , as = new Se
  , os = new we
  , ls = new fe;
class cs extends $e {
    constructor(e=new wt, t=new is) {
        super(),
        this.isLine = !0,
        this.type = "Line",
        this.geometry = e,
        this.material = t,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.material = e.material,
        this.geometry = e.geometry,
        this
    }
    computeLineDistances() {
        const e = this.geometry;
        if (null === e.index) {
            const t = e.attributes.position
              , n = [0];
            for (let e = 1, i = t.count; e < i; e++)
                rs.fromBufferAttribute(t, e - 1),
                ss.fromBufferAttribute(t, e),
                n[e] = n[e - 1],
                n[e] += rs.distanceTo(ss);
            e.setAttribute("lineDistance", new ft(n,1))
        } else
            console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }
    raycast(e, t) {
        const n = this.geometry
          , i = this.matrixWorld
          , r = e.params.Line.threshold
          , s = n.drawRange;
        if (null === n.boundingSphere && n.computeBoundingSphere(),
        ls.copy(n.boundingSphere),
        ls.applyMatrix4(i),
        ls.radius += r,
        !1 === e.ray.intersectsSphere(ls))
            return;
        as.copy(i).invert(),
        os.copy(e.ray).applyMatrix4(as);
        const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , o = a * a
          , l = new X
          , c = new X
          , h = new X
          , u = new X
          , d = this.isLineSegments ? 2 : 1
          , p = n.index
          , m = n.attributes.position;
        if (null !== p) {
            for (let n = Math.max(0, s.start), i = Math.min(p.count, s.start + s.count) - 1; n < i; n += d) {
                const i = p.getX(n)
                  , r = p.getX(n + 1);
                l.fromBufferAttribute(m, i),
                c.fromBufferAttribute(m, r);
                if (os.distanceSqToSegment(l, c, u, h) > o)
                    continue;
                u.applyMatrix4(this.matrixWorld);
                const s = e.ray.origin.distanceTo(u);
                s < e.near || s > e.far || t.push({
                    distance: s,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: n,
                    face: null,
                    faceIndex: null,
                    object: this
                })
            }
        } else {
            for (let n = Math.max(0, s.start), i = Math.min(m.count, s.start + s.count) - 1; n < i; n += d) {
                l.fromBufferAttribute(m, n),
                c.fromBufferAttribute(m, n + 1);
                if (os.distanceSqToSegment(l, c, u, h) > o)
                    continue;
                u.applyMatrix4(this.matrixWorld);
                const i = e.ray.origin.distanceTo(u);
                i < e.near || i > e.far || t.push({
                    distance: i,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: n,
                    face: null,
                    faceIndex: null,
                    object: this
                })
            }
        }
    }
    updateMorphTargets() {
        const e = this.geometry.morphAttributes
          , t = Object.keys(e);
        if (t.length > 0) {
            const n = e[t[0]];
            if (void 0 !== n) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let e = 0, t = n.length; e < t; e++) {
                    const t = n[e].name || String(e);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[t] = e
                }
            }
        }
    }
}
const hs = new X
  , us = new X;
class ds extends cs {
    constructor(e, t) {
        super(e, t),
        this.isLineSegments = !0,
        this.type = "LineSegments"
    }
    computeLineDistances() {
        const e = this.geometry;
        if (null === e.index) {
            const t = e.attributes.position
              , n = [];
            for (let e = 0, i = t.count; e < i; e += 2)
                hs.fromBufferAttribute(t, e),
                us.fromBufferAttribute(t, e + 1),
                n[e] = 0 === e ? 0 : n[e - 1],
                n[e + 1] = n[e] + hs.distanceTo(us);
            e.setAttribute("lineDistance", new ft(n,1))
        } else
            console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }
}
class ps extends cs {
    constructor(e, t) {
        super(e, t),
        this.isLineLoop = !0,
        this.type = "LineLoop"
    }
}
class ms extends lt {
    constructor(e) {
        super(),
        this.isPointsMaterial = !0,
        this.type = "PointsMaterial",
        this.color = new z(16777215),
        this.map = null,
        this.alphaMap = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.size = e.size,
        this.sizeAttenuation = e.sizeAttenuation,
        this.fog = e.fog,
        this
    }
}
const fs = new Se
  , gs = new we
  , vs = new fe
  , _s = new X;
class xs extends $e {
    constructor(e=new wt, t=new ms) {
        super(),
        this.isPoints = !0,
        this.type = "Points",
        this.geometry = e,
        this.material = t,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.material = e.material,
        this.geometry = e.geometry,
        this
    }
    raycast(e, t) {
        const n = this.geometry
          , i = this.matrixWorld
          , r = e.params.Points.threshold
          , s = n.drawRange;
        if (null === n.boundingSphere && n.computeBoundingSphere(),
        vs.copy(n.boundingSphere),
        vs.applyMatrix4(i),
        vs.radius += r,
        !1 === e.ray.intersectsSphere(vs))
            return;
        fs.copy(i).invert(),
        gs.copy(e.ray).applyMatrix4(fs);
        const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , o = a * a
          , l = n.index
          , c = n.attributes.position;
        if (null !== l) {
            for (let n = Math.max(0, s.start), r = Math.min(l.count, s.start + s.count); n < r; n++) {
                const r = l.getX(n);
                _s.fromBufferAttribute(c, r),
                ys(_s, r, o, i, e, t, this)
            }
        } else {
            for (let n = Math.max(0, s.start), r = Math.min(c.count, s.start + s.count); n < r; n++)
                _s.fromBufferAttribute(c, n),
                ys(_s, n, o, i, e, t, this)
        }
    }
    updateMorphTargets() {
        const e = this.geometry.morphAttributes
          , t = Object.keys(e);
        if (t.length > 0) {
            const n = e[t[0]];
            if (void 0 !== n) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let e = 0, t = n.length; e < t; e++) {
                    const t = n[e].name || String(e);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[t] = e
                }
            }
        }
    }
}
function ys(e, t, n, i, r, s, a) {
    const o = gs.distanceSqToPoint(e);
    if (o < n) {
        const n = new X;
        gs.closestPointToPoint(e, n),
        n.applyMatrix4(i);
        const l = r.ray.origin.distanceTo(n);
        if (l < r.near || l > r.far)
            return;
        s.push({
            distance: l,
            distanceToRay: Math.sqrt(o),
            point: n,
            index: t,
            face: null,
            object: a
        })
    }
}
function Ms() {
    let e = 0
      , t = 0
      , n = 0
      , i = 0;
    function r(r, s, a, o) {
        e = r,
        t = a,
        n = -3 * r + 3 * s - 2 * a - o,
        i = 2 * r - 2 * s + a + o
    }
    return {
        initCatmullRom: function(e, t, n, i, s) {
            r(t, n, s * (n - e), s * (i - t))
        },
        initNonuniformCatmullRom: function(e, t, n, i, s, a, o) {
            let l = (t - e) / s - (n - e) / (s + a) + (n - t) / a
              , c = (n - t) / a - (i - t) / (a + o) + (i - n) / o;
            l *= a,
            c *= a,
            r(t, n, l, c)
        },
        calc: function(r) {
            const s = r * r;
            return e + t * r + n * s + i * (s * r)
        }
    }
}
new X,
new Ms,
new Ms,
new Ms;
new X,
new X,
new X,
new at;
class bs extends wt {
    constructor(e=1, t=32, n=16, i=0, r=2 * Math.PI, s=0, a=Math.PI) {
        super(),
        this.type = "SphereGeometry",
        this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: n,
            phiStart: i,
            phiLength: r,
            thetaStart: s,
            thetaLength: a
        },
        t = Math.max(3, Math.floor(t)),
        n = Math.max(2, Math.floor(n));
        const o = Math.min(s + a, Math.PI);
        let l = 0;
        const c = []
          , h = new X
          , u = new X
          , d = []
          , p = []
          , m = []
          , f = [];
        for (let d = 0; d <= n; d++) {
            const g = []
              , v = d / n;
            let _ = 0;
            0 == d && 0 == s ? _ = .5 / t : d == n && o == Math.PI && (_ = -.5 / t);
            for (let n = 0; n <= t; n++) {
                const o = n / t;
                h.x = -e * Math.cos(i + o * r) * Math.sin(s + v * a),
                h.y = e * Math.cos(s + v * a),
                h.z = e * Math.sin(i + o * r) * Math.sin(s + v * a),
                p.push(h.x, h.y, h.z),
                u.copy(h).normalize(),
                m.push(u.x, u.y, u.z),
                f.push(o + _, 1 - v),
                g.push(l++)
            }
            c.push(g)
        }
        for (let e = 0; e < n; e++)
            for (let i = 0; i < t; i++) {
                const t = c[e][i + 1]
                  , r = c[e][i]
                  , a = c[e + 1][i]
                  , l = c[e + 1][i + 1];
                (0 !== e || s > 0) && d.push(t, r, l),
                (e !== n - 1 || o < Math.PI) && d.push(r, a, l)
            }
        this.setIndex(d),
        this.setAttribute("position", new ft(p,3)),
        this.setAttribute("normal", new ft(m,3)),
        this.setAttribute("uv", new ft(f,2))
    }
    static fromJSON(e) {
        return new bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)
    }
}
class ws extends lt {
    constructor(e) {
        super(),
        this.isMeshStandardMaterial = !0,
        this.defines = {
            STANDARD: ""
        },
        this.type = "MeshStandardMaterial",
        this.color = new z(16777215),
        this.roughness = 1,
        this.metalness = 0,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new z(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = 0,
        this.normalScale = new M(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.roughnessMap = null,
        this.metalnessMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapIntensity = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.flatShading = !1,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.defines = {
            STANDARD: ""
        },
        this.color.copy(e.color),
        this.roughness = e.roughness,
        this.metalness = e.metalness,
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.emissive.copy(e.emissive),
        this.emissiveMap = e.emissiveMap,
        this.emissiveIntensity = e.emissiveIntensity,
        this.bumpMap = e.bumpMap,
        this.bumpScale = e.bumpScale,
        this.normalMap = e.normalMap,
        this.normalMapType = e.normalMapType,
        this.normalScale.copy(e.normalScale),
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.roughnessMap = e.roughnessMap,
        this.metalnessMap = e.metalnessMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapIntensity = e.envMapIntensity,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.flatShading = e.flatShading,
        this.fog = e.fog,
        this
    }
}
class Ss extends ws {
    constructor(e) {
        super(),
        this.isMeshPhysicalMaterial = !0,
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        },
        this.type = "MeshPhysicalMaterial",
        this.clearcoatMap = null,
        this.clearcoatRoughness = 0,
        this.clearcoatRoughnessMap = null,
        this.clearcoatNormalScale = new M(1,1),
        this.clearcoatNormalMap = null,
        this.ior = 1.5,
        Object.defineProperty(this, "reflectivity", {
            get: function() {
                return m(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1)
            },
            set: function(e) {
                this.ior = (1 + .4 * e) / (1 - .4 * e)
            }
        }),
        this.iridescenceMap = null,
        this.iridescenceIOR = 1.3,
        this.iridescenceThicknessRange = [100, 400],
        this.iridescenceThicknessMap = null,
        this.sheenColor = new z(0),
        this.sheenColorMap = null,
        this.sheenRoughness = 1,
        this.sheenRoughnessMap = null,
        this.transmissionMap = null,
        this.thickness = 0,
        this.thicknessMap = null,
        this.attenuationDistance = 0,
        this.attenuationColor = new z(1,1,1),
        this.specularIntensity = 1,
        this.specularIntensityMap = null,
        this.specularColor = new z(1,1,1),
        this.specularColorMap = null,
        this._sheen = 0,
        this._clearcoat = 0,
        this._iridescence = 0,
        this._transmission = 0,
        this.setValues(e)
    }
    get sheen() {
        return this._sheen
    }
    set sheen(e) {
        this._sheen > 0 != e > 0 && this.version++,
        this._sheen = e
    }
    get clearcoat() {
        return this._clearcoat
    }
    set clearcoat(e) {
        this._clearcoat > 0 != e > 0 && this.version++,
        this._clearcoat = e
    }
    get iridescence() {
        return this._iridescence
    }
    set iridescence(e) {
        this._iridescence > 0 != e > 0 && this.version++,
        this._iridescence = e
    }
    get transmission() {
        return this._transmission
    }
    set transmission(e) {
        this._transmission > 0 != e > 0 && this.version++,
        this._transmission = e
    }
    copy(e) {
        return super.copy(e),
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        },
        this.clearcoat = e.clearcoat,
        this.clearcoatMap = e.clearcoatMap,
        this.clearcoatRoughness = e.clearcoatRoughness,
        this.clearcoatRoughnessMap = e.clearcoatRoughnessMap,
        this.clearcoatNormalMap = e.clearcoatNormalMap,
        this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
        this.ior = e.ior,
        this.iridescence = e.iridescence,
        this.iridescenceMap = e.iridescenceMap,
        this.iridescenceIOR = e.iridescenceIOR,
        this.iridescenceThicknessRange = [...e.iridescenceThicknessRange],
        this.iridescenceThicknessMap = e.iridescenceThicknessMap,
        this.sheen = e.sheen,
        this.sheenColor.copy(e.sheenColor),
        this.sheenColorMap = e.sheenColorMap,
        this.sheenRoughness = e.sheenRoughness,
        this.sheenRoughnessMap = e.sheenRoughnessMap,
        this.transmission = e.transmission,
        this.transmissionMap = e.transmissionMap,
        this.thickness = e.thickness,
        this.thicknessMap = e.thicknessMap,
        this.attenuationDistance = e.attenuationDistance,
        this.attenuationColor.copy(e.attenuationColor),
        this.specularIntensity = e.specularIntensity,
        this.specularIntensityMap = e.specularIntensityMap,
        this.specularColor.copy(e.specularColor),
        this.specularColorMap = e.specularColorMap,
        this
    }
}
const Ts = {
    ShadowMaterial: class extends lt {
        constructor(e) {
            super(),
            this.isShadowMaterial = !0,
            this.type = "ShadowMaterial",
            this.color = new z(0),
            this.transparent = !0,
            this.fog = !0,
            this.setValues(e)
        }
        copy(e) {
            return super.copy(e),
            this.color.copy(e.color),
            this.fog = e.fog,
            this
        }
    }
    ,
    SpriteMaterial: Wr,
    RawShaderMaterial: class extends Xt {
        constructor(e) {
            super(e),
            this.isRawShaderMaterial = !0,
            this.type = "RawShaderMaterial"
        }
    }
    ,
    ShaderMaterial: Xt,
    PointsMaterial: ms,
    MeshPhysicalMaterial: Ss,
    MeshStandardMaterial: ws,
    MeshPhongMaterial: class extends lt {
        constructor(e) {
            super(),
            this.isMeshPhongMaterial = !0,
            this.type = "MeshPhongMaterial",
            this.color = new z(16777215),
            this.specular = new z(1118481),
            this.shininess = 30,
            this.map = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.emissive = new z(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null,
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new M(1,1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.specularMap = null,
            this.alphaMap = null,
            this.envMap = null,
            this.combine = 0,
            this.reflectivity = 1,
            this.refractionRatio = .98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.flatShading = !1,
            this.fog = !0,
            this.setValues(e)
        }
        copy(e) {
            return super.copy(e),
            this.color.copy(e.color),
            this.specular.copy(e.specular),
            this.shininess = e.shininess,
            this.map = e.map,
            this.lightMap = e.lightMap,
            this.lightMapIntensity = e.lightMapIntensity,
            this.aoMap = e.aoMap,
            this.aoMapIntensity = e.aoMapIntensity,
            this.emissive.copy(e.emissive),
            this.emissiveMap = e.emissiveMap,
            this.emissiveIntensity = e.emissiveIntensity,
            this.bumpMap = e.bumpMap,
            this.bumpScale = e.bumpScale,
            this.normalMap = e.normalMap,
            this.normalMapType = e.normalMapType,
            this.normalScale.copy(e.normalScale),
            this.displacementMap = e.displacementMap,
            this.displacementScale = e.displacementScale,
            this.displacementBias = e.displacementBias,
            this.specularMap = e.specularMap,
            this.alphaMap = e.alphaMap,
            this.envMap = e.envMap,
            this.combine = e.combine,
            this.reflectivity = e.reflectivity,
            this.refractionRatio = e.refractionRatio,
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this.wireframeLinecap = e.wireframeLinecap,
            this.wireframeLinejoin = e.wireframeLinejoin,
            this.flatShading = e.flatShading,
            this.fog = e.fog,
            this
        }
    }
    ,
    MeshToonMaterial: class extends lt {
        constructor(e) {
            super(),
            this.isMeshToonMaterial = !0,
            this.defines = {
                TOON: ""
            },
            this.type = "MeshToonMaterial",
            this.color = new z(16777215),
            this.map = null,
            this.gradientMap = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.emissive = new z(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null,
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new M(1,1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.alphaMap = null,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.fog = !0,
            this.setValues(e)
        }
        copy(e) {
            return super.copy(e),
            this.color.copy(e.color),
            this.map = e.map,
            this.gradientMap = e.gradientMap,
            this.lightMap = e.lightMap,
            this.lightMapIntensity = e.lightMapIntensity,
            this.aoMap = e.aoMap,
            this.aoMapIntensity = e.aoMapIntensity,
            this.emissive.copy(e.emissive),
            this.emissiveMap = e.emissiveMap,
            this.emissiveIntensity = e.emissiveIntensity,
            this.bumpMap = e.bumpMap,
            this.bumpScale = e.bumpScale,
            this.normalMap = e.normalMap,
            this.normalMapType = e.normalMapType,
            this.normalScale.copy(e.normalScale),
            this.displacementMap = e.displacementMap,
            this.displacementScale = e.displacementScale,
            this.displacementBias = e.displacementBias,
            this.alphaMap = e.alphaMap,
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this.wireframeLinecap = e.wireframeLinecap,
            this.wireframeLinejoin = e.wireframeLinejoin,
            this.fog = e.fog,
            this
        }
    }
    ,
    MeshNormalMaterial: class extends lt {
        constructor(e) {
            super(),
            this.isMeshNormalMaterial = !0,
            this.type = "MeshNormalMaterial",
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new M(1,1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.flatShading = !1,
            this.setValues(e)
        }
        copy(e) {
            return super.copy(e),
            this.bumpMap = e.bumpMap,
            this.bumpScale = e.bumpScale,
            this.normalMap = e.normalMap,
            this.normalMapType = e.normalMapType,
            this.normalScale.copy(e.normalScale),
            this.displacementMap = e.displacementMap,
            this.displacementScale = e.displacementScale,
            this.displacementBias = e.displacementBias,
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this.flatShading = e.flatShading,
            this
        }
    }
    ,
    MeshLambertMaterial: class extends lt {
        constructor(e) {
            super(),
            this.isMeshLambertMaterial = !0,
            this.type = "MeshLambertMaterial",
            this.color = new z(16777215),
            this.map = null,
            this.lightMap = null,
            this.lightMapIntensity = 1,
            this.aoMap = null,
            this.aoMapIntensity = 1,
            this.emissive = new z(0),
            this.emissiveIntensity = 1,
            this.emissiveMap = null,
            this.specularMap = null,
            this.alphaMap = null,
            this.envMap = null,
            this.combine = 0,
            this.reflectivity = 1,
            this.refractionRatio = .98,
            this.wireframe = !1,
            this.wireframeLinewidth = 1,
            this.wireframeLinecap = "round",
            this.wireframeLinejoin = "round",
            this.fog = !0,
            this.setValues(e)
        }
        copy(e) {
            return super.copy(e),
            this.color.copy(e.color),
            this.map = e.map,
            this.lightMap = e.lightMap,
            this.lightMapIntensity = e.lightMapIntensity,
            this.aoMap = e.aoMap,
            this.aoMapIntensity = e.aoMapIntensity,
            this.emissive.copy(e.emissive),
            this.emissiveMap = e.emissiveMap,
            this.emissiveIntensity = e.emissiveIntensity,
            this.specularMap = e.specularMap,
            this.alphaMap = e.alphaMap,
            this.envMap = e.envMap,
            this.combine = e.combine,
            this.reflectivity = e.reflectivity,
            this.refractionRatio = e.refractionRatio,
            this.wireframe = e.wireframe,
            this.wireframeLinewidth = e.wireframeLinewidth,
            this.wireframeLinecap = e.wireframeLinecap,
            this.wireframeLinejoin = e.wireframeLinejoin,
            this.fog = e.fog,
            this
        }
    }
    ,
    MeshDepthMaterial: Er,
    MeshDistanceMaterial: Ar,
    MeshBasicMaterial: ct,
    MeshMatcapMaterial: class extends lt {
        constructor(e) {
            super(),
            this.isMeshMatcapMaterial = !0,
            this.defines = {
                MATCAP: ""
            },
            this.type = "MeshMatcapMaterial",
            this.color = new z(16777215),
            this.matcap = null,
            this.map = null,
            this.bumpMap = null,
            this.bumpScale = 1,
            this.normalMap = null,
            this.normalMapType = 0,
            this.normalScale = new M(1,1),
            this.displacementMap = null,
            this.displacementScale = 1,
            this.displacementBias = 0,
            this.alphaMap = null,
            this.flatShading = !1,
            this.fog = !0,
            this.setValues(e)
        }
        copy(e) {
            return super.copy(e),
            this.defines = {
                MATCAP: ""
            },
            this.color.copy(e.color),
            this.matcap = e.matcap,
            this.map = e.map,
            this.bumpMap = e.bumpMap,
            this.bumpScale = e.bumpScale,
            this.normalMap = e.normalMap,
            this.normalMapType = e.normalMapType,
            this.normalScale.copy(e.normalScale),
            this.displacementMap = e.displacementMap,
            this.displacementScale = e.displacementScale,
            this.displacementBias = e.displacementBias,
            this.alphaMap = e.alphaMap,
            this.flatShading = e.flatShading,
            this.fog = e.fog,
            this
        }
    }
    ,
    LineDashedMaterial: class extends is {
        constructor(e) {
            super(),
            this.isLineDashedMaterial = !0,
            this.type = "LineDashedMaterial",
            this.scale = 1,
            this.dashSize = 3,
            this.gapSize = 1,
            this.setValues(e)
        }
        copy(e) {
            return super.copy(e),
            this.scale = e.scale,
            this.dashSize = e.dashSize,
            this.gapSize = e.gapSize,
            this
        }
    }
    ,
    LineBasicMaterial: is,
    Material: lt
};
lt.fromType = function(e) {
    return new Ts[e]
}
;
const Es = {
    arraySlice: function(e, t, n) {
        return Es.isTypedArray(e) ? new e.constructor(e.subarray(t, void 0 !== n ? n : e.length)) : e.slice(t, n)
    },
    convertArray: function(e, t, n) {
        return !e || !n && e.constructor === t ? e : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
    },
    isTypedArray: function(e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView)
    },
    getKeyframeOrder: function(e) {
        const t = e.length
          , n = new Array(t);
        for (let e = 0; e !== t; ++e)
            n[e] = e;
        return n.sort((function(t, n) {
            return e[t] - e[n]
        }
        )),
        n
    },
    sortedArray: function(e, t, n) {
        const i = e.length
          , r = new e.constructor(i);
        for (let s = 0, a = 0; a !== i; ++s) {
            const i = n[s] * t;
            for (let n = 0; n !== t; ++n)
                r[a++] = e[i + n]
        }
        return r
    },
    flattenJSON: function(e, t, n, i) {
        let r = 1
          , s = e[0];
        for (; void 0 !== s && void 0 === s[i]; )
            s = e[r++];
        if (void 0 === s)
            return;
        let a = s[i];
        if (void 0 !== a)
            if (Array.isArray(a))
                do {
                    a = s[i],
                    void 0 !== a && (t.push(s.time),
                    n.push.apply(n, a)),
                    s = e[r++]
                } while (void 0 !== s);
            else if (void 0 !== a.toArray)
                do {
                    a = s[i],
                    void 0 !== a && (t.push(s.time),
                    a.toArray(n, n.length)),
                    s = e[r++]
                } while (void 0 !== s);
            else
                do {
                    a = s[i],
                    void 0 !== a && (t.push(s.time),
                    n.push(a)),
                    s = e[r++]
                } while (void 0 !== s)
    },
    subclip: function(e, t, n, i, r=30) {
        const s = e.clone();
        s.name = t;
        const a = [];
        for (let e = 0; e < s.tracks.length; ++e) {
            const t = s.tracks[e]
              , o = t.getValueSize()
              , l = []
              , c = [];
            for (let e = 0; e < t.times.length; ++e) {
                const s = t.times[e] * r;
                if (!(s < n || s >= i)) {
                    l.push(t.times[e]);
                    for (let n = 0; n < o; ++n)
                        c.push(t.values[e * o + n])
                }
            }
            0 !== l.length && (t.times = Es.convertArray(l, t.times.constructor),
            t.values = Es.convertArray(c, t.values.constructor),
            a.push(t))
        }
        s.tracks = a;
        let o = 1 / 0;
        for (let e = 0; e < s.tracks.length; ++e)
            o > s.tracks[e].times[0] && (o = s.tracks[e].times[0]);
        for (let e = 0; e < s.tracks.length; ++e)
            s.tracks[e].shift(-1 * o);
        return s.resetDuration(),
        s
    },
    makeClipAdditive: function(e, t=0, n=e, i=30) {
        i <= 0 && (i = 30);
        const r = n.tracks.length
          , s = t / i;
        for (let t = 0; t < r; ++t) {
            const i = n.tracks[t]
              , r = i.ValueTypeName;
            if ("bool" === r || "string" === r)
                continue;
            const a = e.tracks.find((function(e) {
                return e.name === i.name && e.ValueTypeName === r
            }
            ));
            if (void 0 === a)
                continue;
            let o = 0;
            const l = i.getValueSize();
            i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
            let c = 0;
            const h = a.getValueSize();
            a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
            const u = i.times.length - 1;
            let d;
            if (s <= i.times[0]) {
                const e = o
                  , t = l - o;
                d = Es.arraySlice(i.values, e, t)
            } else if (s >= i.times[u]) {
                const e = u * l + o
                  , t = e + l - o;
                d = Es.arraySlice(i.values, e, t)
            } else {
                const e = i.createInterpolant()
                  , t = o
                  , n = l - o;
                e.evaluate(s),
                d = Es.arraySlice(e.resultBuffer, t, n)
            }
            if ("quaternion" === r) {
                (new q).fromArray(d).normalize().conjugate().toArray(d)
            }
            const p = a.times.length;
            for (let e = 0; e < p; ++e) {
                const t = e * h + c;
                if ("quaternion" === r)
                    q.multiplyQuaternionsFlat(a.values, t, d, 0, a.values, t);
                else {
                    const e = h - 2 * c;
                    for (let n = 0; n < e; ++n)
                        a.values[t + n] -= d[n]
                }
            }
        }
        return e.blendMode = 2501,
        e
    }
};
class As {
    constructor(e, t, n, i) {
        this.parameterPositions = e,
        this._cachedIndex = 0,
        this.resultBuffer = void 0 !== i ? i : new t.constructor(n),
        this.sampleValues = t,
        this.valueSize = n,
        this.settings = null,
        this.DefaultSettings_ = {}
    }
    evaluate(e) {
        const t = this.parameterPositions;
        let n = this._cachedIndex
          , i = t[n]
          , r = t[n - 1];
        e: {
            t: {
                let s;
                n: {
                    i: if (!(e < i)) {
                        for (let s = n + 2; ; ) {
                            if (void 0 === i) {
                                if (e < r)
                                    break i;
                                return n = t.length,
                                this._cachedIndex = n,
                                this.copySampleValue_(n - 1)
                            }
                            if (n === s)
                                break;
                            if (r = i,
                            i = t[++n],
                            e < i)
                                break t
                        }
                        s = t.length;
                        break n
                    }
                    if (e >= r)
                        break e;
                    {
                        const a = t[1];
                        e < a && (n = 2,
                        r = a);
                        for (let s = n - 2; ; ) {
                            if (void 0 === r)
                                return this._cachedIndex = 0,
                                this.copySampleValue_(0);
                            if (n === s)
                                break;
                            if (i = r,
                            r = t[--n - 1],
                            e >= r)
                                break t
                        }
                        s = n,
                        n = 0
                    }
                }
                for (; n < s; ) {
                    const i = n + s >>> 1;
                    e < t[i] ? s = i : n = i + 1
                }
                if (i = t[n],
                r = t[n - 1],
                void 0 === r)
                    return this._cachedIndex = 0,
                    this.copySampleValue_(0);
                if (void 0 === i)
                    return n = t.length,
                    this._cachedIndex = n,
                    this.copySampleValue_(n - 1)
            }
            this._cachedIndex = n,
            this.intervalChanged_(n, r, i)
        }
        return this.interpolate_(n, r, e, i)
    }
    getSettings_() {
        return this.settings || this.DefaultSettings_
    }
    copySampleValue_(e) {
        const t = this.resultBuffer
          , n = this.sampleValues
          , i = this.valueSize
          , r = e * i;
        for (let e = 0; e !== i; ++e)
            t[e] = n[r + e];
        return t
    }
    interpolate_() {
        throw new Error("call to abstract method")
    }
    intervalChanged_() {}
}
class Ls extends As {
    constructor(e, t, n, i) {
        super(e, t, n, i),
        this._weightPrev = -0,
        this._offsetPrev = -0,
        this._weightNext = -0,
        this._offsetNext = -0,
        this.DefaultSettings_ = {
            endingStart: 2400,
            endingEnd: 2400
        }
    }
    intervalChanged_(e, t, n) {
        const i = this.parameterPositions;
        let r = e - 2
          , s = e + 1
          , a = i[r]
          , o = i[s];
        if (void 0 === a)
            switch (this.getSettings_().endingStart) {
            case 2401:
                r = e,
                a = 2 * t - n;
                break;
            case 2402:
                r = i.length - 2,
                a = t + i[r] - i[r + 1];
                break;
            default:
                r = e,
                a = n
            }
        if (void 0 === o)
            switch (this.getSettings_().endingEnd) {
            case 2401:
                s = e,
                o = 2 * n - t;
                break;
            case 2402:
                s = 1,
                o = n + i[1] - i[0];
                break;
            default:
                s = e - 1,
                o = t
            }
        const l = .5 * (n - t)
          , c = this.valueSize;
        this._weightPrev = l / (t - a),
        this._weightNext = l / (o - n),
        this._offsetPrev = r * c,
        this._offsetNext = s * c
    }
    interpolate_(e, t, n, i) {
        const r = this.resultBuffer
          , s = this.sampleValues
          , a = this.valueSize
          , o = e * a
          , l = o - a
          , c = this._offsetPrev
          , h = this._offsetNext
          , u = this._weightPrev
          , d = this._weightNext
          , p = (n - t) / (i - t)
          , m = p * p
          , f = m * p
          , g = -u * f + 2 * u * m - u * p
          , v = (1 + u) * f + (-1.5 - 2 * u) * m + (-.5 + u) * p + 1
          , _ = (-1 - d) * f + (1.5 + d) * m + .5 * p
          , x = d * f - d * m;
        for (let e = 0; e !== a; ++e)
            r[e] = g * s[c + e] + v * s[l + e] + _ * s[o + e] + x * s[h + e];
        return r
    }
}
class Cs extends As {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    interpolate_(e, t, n, i) {
        const r = this.resultBuffer
          , s = this.sampleValues
          , a = this.valueSize
          , o = e * a
          , l = o - a
          , c = (n - t) / (i - t)
          , h = 1 - c;
        for (let e = 0; e !== a; ++e)
            r[e] = s[l + e] * h + s[o + e] * c;
        return r
    }
}
class Rs extends As {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    interpolate_(e) {
        return this.copySampleValue_(e - 1)
    }
}
class Ps {
    constructor(e, t, n, i) {
        if (void 0 === e)
            throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (void 0 === t || 0 === t.length)
            throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
        this.name = e,
        this.times = Es.convertArray(t, this.TimeBufferType),
        this.values = Es.convertArray(n, this.ValueBufferType),
        this.setInterpolation(i || this.DefaultInterpolation)
    }
    static toJSON(e) {
        const t = e.constructor;
        let n;
        if (t.toJSON !== this.toJSON)
            n = t.toJSON(e);
        else {
            n = {
                name: e.name,
                times: Es.convertArray(e.times, Array),
                values: Es.convertArray(e.values, Array)
            };
            const t = e.getInterpolation();
            t !== e.DefaultInterpolation && (n.interpolation = t)
        }
        return n.type = e.ValueTypeName,
        n
    }
    InterpolantFactoryMethodDiscrete(e) {
        return new Rs(this.times,this.values,this.getValueSize(),e)
    }
    InterpolantFactoryMethodLinear(e) {
        return new Cs(this.times,this.values,this.getValueSize(),e)
    }
    InterpolantFactoryMethodSmooth(e) {
        return new Ls(this.times,this.values,this.getValueSize(),e)
    }
    setInterpolation(e) {
        let t;
        switch (e) {
        case 2300:
            t = this.InterpolantFactoryMethodDiscrete;
            break;
        case 2301:
            t = this.InterpolantFactoryMethodLinear;
            break;
        case 2302:
            t = this.InterpolantFactoryMethodSmooth
        }
        if (void 0 === t) {
            const t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (void 0 === this.createInterpolant) {
                if (e === this.DefaultInterpolation)
                    throw new Error(t);
                this.setInterpolation(this.DefaultInterpolation)
            }
            return console.warn("THREE.KeyframeTrack:", t),
            this
        }
        return this.createInterpolant = t,
        this
    }
    getInterpolation() {
        switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
            return 2300;
        case this.InterpolantFactoryMethodLinear:
            return 2301;
        case this.InterpolantFactoryMethodSmooth:
            return 2302
        }
    }
    getValueSize() {
        return this.values.length / this.times.length
    }
    shift(e) {
        if (0 !== e) {
            const t = this.times;
            for (let n = 0, i = t.length; n !== i; ++n)
                t[n] += e
        }
        return this
    }
    scale(e) {
        if (1 !== e) {
            const t = this.times;
            for (let n = 0, i = t.length; n !== i; ++n)
                t[n] *= e
        }
        return this
    }
    trim(e, t) {
        const n = this.times
          , i = n.length;
        let r = 0
          , s = i - 1;
        for (; r !== i && n[r] < e; )
            ++r;
        for (; -1 !== s && n[s] > t; )
            --s;
        if (++s,
        0 !== r || s !== i) {
            r >= s && (s = Math.max(s, 1),
            r = s - 1);
            const e = this.getValueSize();
            this.times = Es.arraySlice(n, r, s),
            this.values = Es.arraySlice(this.values, r * e, s * e)
        }
        return this
    }
    validate() {
        let e = !0;
        const t = this.getValueSize();
        t - Math.floor(t) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
        e = !1);
        const n = this.times
          , i = this.values
          , r = n.length;
        0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this),
        e = !1);
        let s = null;
        for (let t = 0; t !== r; t++) {
            const i = n[t];
            if ("number" == typeof i && isNaN(i)) {
                console.error("THREE.KeyframeTrack: Time is not a valid number.", this, t, i),
                e = !1;
                break
            }
            if (null !== s && s > i) {
                console.error("THREE.KeyframeTrack: Out of order keys.", this, t, i, s),
                e = !1;
                break
            }
            s = i
        }
        if (void 0 !== i && Es.isTypedArray(i))
            for (let t = 0, n = i.length; t !== n; ++t) {
                const n = i[t];
                if (isNaN(n)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, t, n),
                    e = !1;
                    break
                }
            }
        return e
    }
    optimize() {
        const e = Es.arraySlice(this.times)
          , t = Es.arraySlice(this.values)
          , n = this.getValueSize()
          , i = 2302 === this.getInterpolation()
          , r = e.length - 1;
        let s = 1;
        for (let a = 1; a < r; ++a) {
            let r = !1;
            const o = e[a];
            if (o !== e[a + 1] && (1 !== a || o !== e[0]))
                if (i)
                    r = !0;
                else {
                    const e = a * n
                      , i = e - n
                      , s = e + n;
                    for (let a = 0; a !== n; ++a) {
                        const n = t[e + a];
                        if (n !== t[i + a] || n !== t[s + a]) {
                            r = !0;
                            break
                        }
                    }
                }
            if (r) {
                if (a !== s) {
                    e[s] = e[a];
                    const i = a * n
                      , r = s * n;
                    for (let e = 0; e !== n; ++e)
                        t[r + e] = t[i + e]
                }
                ++s
            }
        }
        if (r > 0) {
            e[s] = e[r];
            for (let e = r * n, i = s * n, a = 0; a !== n; ++a)
                t[i + a] = t[e + a];
            ++s
        }
        return s !== e.length ? (this.times = Es.arraySlice(e, 0, s),
        this.values = Es.arraySlice(t, 0, s * n)) : (this.times = e,
        this.values = t),
        this
    }
    clone() {
        const e = Es.arraySlice(this.times, 0)
          , t = Es.arraySlice(this.values, 0)
          , n = new (0,
        this.constructor)(this.name,e,t);
        return n.createInterpolant = this.createInterpolant,
        n
    }
}
Ps.prototype.TimeBufferType = Float32Array,
Ps.prototype.ValueBufferType = Float32Array,
Ps.prototype.DefaultInterpolation = 2301;
class Ds extends Ps {
}
Ds.prototype.ValueTypeName = "bool",
Ds.prototype.ValueBufferType = Array,
Ds.prototype.DefaultInterpolation = 2300,
Ds.prototype.InterpolantFactoryMethodLinear = void 0,
Ds.prototype.InterpolantFactoryMethodSmooth = void 0;
class Is extends Ps {
}
Is.prototype.ValueTypeName = "color";
class Ns extends Ps {
}
Ns.prototype.ValueTypeName = "number";
class zs extends As {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    interpolate_(e, t, n, i) {
        const r = this.resultBuffer
          , s = this.sampleValues
          , a = this.valueSize
          , o = (n - t) / (i - t);
        let l = e * a;
        for (let e = l + a; l !== e; l += 4)
            q.slerpFlat(r, 0, s, l - a, s, l, o);
        return r
    }
}
class Os extends Ps {
    InterpolantFactoryMethodLinear(e) {
        return new zs(this.times,this.values,this.getValueSize(),e)
    }
}
Os.prototype.ValueTypeName = "quaternion",
Os.prototype.DefaultInterpolation = 2301,
Os.prototype.InterpolantFactoryMethodSmooth = void 0;
class Fs extends Ps {
}
Fs.prototype.ValueTypeName = "string",
Fs.prototype.ValueBufferType = Array,
Fs.prototype.DefaultInterpolation = 2300,
Fs.prototype.InterpolantFactoryMethodLinear = void 0,
Fs.prototype.InterpolantFactoryMethodSmooth = void 0;
class Us extends Ps {
}
Us.prototype.ValueTypeName = "vector";
class ks {
    constructor(e, t=-1, n, i=2500) {
        this.name = e,
        this.tracks = n,
        this.duration = t,
        this.blendMode = i,
        this.uuid = p(),
        this.duration < 0 && this.resetDuration()
    }
    static parse(e) {
        const t = []
          , n = e.tracks
          , i = 1 / (e.fps || 1);
        for (let e = 0, r = n.length; e !== r; ++e)
            t.push(Bs(n[e]).scale(i));
        const r = new this(e.name,e.duration,t,e.blendMode);
        return r.uuid = e.uuid,
        r
    }
    static toJSON(e) {
        const t = []
          , n = e.tracks
          , i = {
            name: e.name,
            duration: e.duration,
            tracks: t,
            uuid: e.uuid,
            blendMode: e.blendMode
        };
        for (let e = 0, i = n.length; e !== i; ++e)
            t.push(Ps.toJSON(n[e]));
        return i
    }
    static CreateFromMorphTargetSequence(e, t, n, i) {
        const r = t.length
          , s = [];
        for (let e = 0; e < r; e++) {
            let a = []
              , o = [];
            a.push((e + r - 1) % r, e, (e + 1) % r),
            o.push(0, 1, 0);
            const l = Es.getKeyframeOrder(a);
            a = Es.sortedArray(a, 1, l),
            o = Es.sortedArray(o, 1, l),
            i || 0 !== a[0] || (a.push(r),
            o.push(o[0])),
            s.push(new Ns(".morphTargetInfluences[" + t[e].name + "]",a,o).scale(1 / n))
        }
        return new this(e,-1,s)
    }
    static findByName(e, t) {
        let n = e;
        if (!Array.isArray(e)) {
            const t = e;
            n = t.geometry && t.geometry.animations || t.animations
        }
        for (let e = 0; e < n.length; e++)
            if (n[e].name === t)
                return n[e];
        return null
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
        const i = {}
          , r = /^([\w-]*?)([\d]+)$/;
        for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t]
              , s = n.name.match(r);
            if (s && s.length > 1) {
                const e = s[1];
                let t = i[e];
                t || (i[e] = t = []),
                t.push(n)
            }
        }
        const s = [];
        for (const e in i)
            s.push(this.CreateFromMorphTargetSequence(e, i[e], t, n));
        return s
    }
    static parseAnimation(e, t) {
        if (!e)
            return console.error("THREE.AnimationClip: No animation in JSONLoader data."),
            null;
        const n = function(e, t, n, i, r) {
            if (0 !== n.length) {
                const s = []
                  , a = [];
                Es.flattenJSON(n, s, a, i),
                0 !== s.length && r.push(new e(t,s,a))
            }
        }
          , i = []
          , r = e.name || "default"
          , s = e.fps || 30
          , a = e.blendMode;
        let o = e.length || -1;
        const l = e.hierarchy || [];
        for (let e = 0; e < l.length; e++) {
            const r = l[e].keys;
            if (r && 0 !== r.length)
                if (r[0].morphTargets) {
                    const e = {};
                    let t;
                    for (t = 0; t < r.length; t++)
                        if (r[t].morphTargets)
                            for (let n = 0; n < r[t].morphTargets.length; n++)
                                e[r[t].morphTargets[n]] = -1;
                    for (const n in e) {
                        const e = []
                          , s = [];
                        for (let i = 0; i !== r[t].morphTargets.length; ++i) {
                            const i = r[t];
                            e.push(i.time),
                            s.push(i.morphTarget === n ? 1 : 0)
                        }
                        i.push(new Ns(".morphTargetInfluence[" + n + "]",e,s))
                    }
                    o = e.length * s
                } else {
                    const s = ".bones[" + t[e].name + "]";
                    n(Us, s + ".position", r, "pos", i),
                    n(Os, s + ".quaternion", r, "rot", i),
                    n(Us, s + ".scale", r, "scl", i)
                }
        }
        if (0 === i.length)
            return null;
        return new this(r,o,i,a)
    }
    resetDuration() {
        let e = 0;
        for (let t = 0, n = this.tracks.length; t !== n; ++t) {
            const n = this.tracks[t];
            e = Math.max(e, n.times[n.times.length - 1])
        }
        return this.duration = e,
        this
    }
    trim() {
        for (let e = 0; e < this.tracks.length; e++)
            this.tracks[e].trim(0, this.duration);
        return this
    }
    validate() {
        let e = !0;
        for (let t = 0; t < this.tracks.length; t++)
            e = e && this.tracks[t].validate();
        return e
    }
    optimize() {
        for (let e = 0; e < this.tracks.length; e++)
            this.tracks[e].optimize();
        return this
    }
    clone() {
        const e = [];
        for (let t = 0; t < this.tracks.length; t++)
            e.push(this.tracks[t].clone());
        return new this.constructor(this.name,this.duration,e,this.blendMode)
    }
    toJSON() {
        return this.constructor.toJSON(this)
    }
}
function Bs(e) {
    if (void 0 === e.type)
        throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const t = function(e) {
        switch (e.toLowerCase()) {
        case "scalar":
        case "double":
        case "float":
        case "number":
        case "integer":
            return Ns;
        case "vector":
        case "vector2":
        case "vector3":
        case "vector4":
            return Us;
        case "color":
            return Is;
        case "quaternion":
            return Os;
        case "bool":
        case "boolean":
            return Ds;
        case "string":
            return Fs
        }
        throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e)
    }(e.type);
    if (void 0 === e.times) {
        const t = []
          , n = [];
        Es.flattenJSON(e.keys, t, n, "value"),
        e.times = t,
        e.values = n
    }
    return void 0 !== t.parse ? t.parse(e) : new t(e.name,e.times,e.values,e.interpolation)
}
const Hs = {
    enabled: !1,
    files: {},
    add: function(e, t) {
        !1 !== this.enabled && (this.files[e] = t)
    },
    get: function(e) {
        if (!1 !== this.enabled)
            return this.files[e]
    },
    remove: function(e) {
        delete this.files[e]
    },
    clear: function() {
        this.files = {}
    }
};
class Vs {
    constructor(e, t, n) {
        const i = this;
        let r, s = !1, a = 0, o = 0;
        const l = [];
        this.onStart = void 0,
        this.onLoad = e,
        this.onProgress = t,
        this.onError = n,
        this.itemStart = function(e) {
            o++,
            !1 === s && void 0 !== i.onStart && i.onStart(e, a, o),
            s = !0
        }
        ,
        this.itemEnd = function(e) {
            a++,
            void 0 !== i.onProgress && i.onProgress(e, a, o),
            a === o && (s = !1,
            void 0 !== i.onLoad && i.onLoad())
        }
        ,
        this.itemError = function(e) {
            void 0 !== i.onError && i.onError(e)
        }
        ,
        this.resolveURL = function(e) {
            return r ? r(e) : e
        }
        ,
        this.setURLModifier = function(e) {
            return r = e,
            this
        }
        ,
        this.addHandler = function(e, t) {
            return l.push(e, t),
            this
        }
        ,
        this.removeHandler = function(e) {
            const t = l.indexOf(e);
            return -1 !== t && l.splice(t, 2),
            this
        }
        ,
        this.getHandler = function(e) {
            for (let t = 0, n = l.length; t < n; t += 2) {
                const n = l[t]
                  , i = l[t + 1];
                if (n.global && (n.lastIndex = 0),
                n.test(e))
                    return i
            }
            return null
        }
    }
}
const Gs = new Vs;
class Ws {
    constructor(e) {
        this.manager = void 0 !== e ? e : Gs,
        this.crossOrigin = "anonymous",
        this.withCredentials = !1,
        this.path = "",
        this.resourcePath = "",
        this.requestHeader = {}
    }
    load() {}
    loadAsync(e, t) {
        const n = this;
        return new Promise((function(i, r) {
            n.load(e, i, t, r)
        }
        ))
    }
    parse() {}
    setCrossOrigin(e) {
        return this.crossOrigin = e,
        this
    }
    setWithCredentials(e) {
        return this.withCredentials = e,
        this
    }
    setPath(e) {
        return this.path = e,
        this
    }
    setResourcePath(e) {
        return this.resourcePath = e,
        this
    }
    setRequestHeader(e) {
        return this.requestHeader = e,
        this
    }
}
const js = {};
class qs extends Ws {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        void 0 === e && (e = ""),
        void 0 !== this.path && (e = this.path + e),
        e = this.manager.resolveURL(e);
        const r = Hs.get(e);
        if (void 0 !== r)
            return this.manager.itemStart(e),
            setTimeout((()=>{
                t && t(r),
                this.manager.itemEnd(e)
            }
            ), 0),
            r;
        if (void 0 !== js[e])
            return void js[e].push({
                onLoad: t,
                onProgress: n,
                onError: i
            });
        js[e] = [],
        js[e].push({
            onLoad: t,
            onProgress: n,
            onError: i
        });
        const s = new Request(e,{
            headers: new Headers(this.requestHeader),
            credentials: this.withCredentials ? "include" : "same-origin"
        })
          , a = this.mimeType
          , o = this.responseType;
        fetch(s).then((t=>{
            if (200 === t.status || 0 === t.status) {
                if (0 === t.status && console.warn("THREE.FileLoader: HTTP Status 0 received."),
                "undefined" == typeof ReadableStream || void 0 === t.body || void 0 === t.body.getReader)
                    return t;
                const n = js[e]
                  , i = t.body.getReader()
                  , r = t.headers.get("Content-Length")
                  , s = r ? parseInt(r) : 0
                  , a = 0 !== s;
                let o = 0;
                const l = new ReadableStream({
                    start(e) {
                        !function t() {
                            i.read().then((({done: i, value: r})=>{
                                if (i)
                                    e.close();
                                else {
                                    o += r.byteLength;
                                    const i = new ProgressEvent("progress",{
                                        lengthComputable: a,
                                        loaded: o,
                                        total: s
                                    });
                                    for (let e = 0, t = n.length; e < t; e++) {
                                        const t = n[e];
                                        t.onProgress && t.onProgress(i)
                                    }
                                    e.enqueue(r),
                                    t()
                                }
                            }
                            ))
                        }()
                    }
                });
                return new Response(l)
            }
            throw Error(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`)
        }
        )).then((e=>{
            switch (o) {
            case "arraybuffer":
                return e.arrayBuffer();
            case "blob":
                return e.blob();
            case "document":
                return e.text().then((e=>(new DOMParser).parseFromString(e, a)));
            case "json":
                return e.json();
            default:
                if (void 0 === a)
                    return e.text();
                {
                    const t = /charset="?([^;"\s]*)"?/i.exec(a)
                      , n = t && t[1] ? t[1].toLowerCase() : void 0
                      , i = new TextDecoder(n);
                    return e.arrayBuffer().then((e=>i.decode(e)))
                }
            }
        }
        )).then((t=>{
            Hs.add(e, t);
            const n = js[e];
            delete js[e];
            for (let e = 0, i = n.length; e < i; e++) {
                const i = n[e];
                i.onLoad && i.onLoad(t)
            }
        }
        )).catch((t=>{
            const n = js[e];
            if (void 0 === n)
                throw this.manager.itemError(e),
                t;
            delete js[e];
            for (let e = 0, i = n.length; e < i; e++) {
                const i = n[e];
                i.onError && i.onError(t)
            }
            this.manager.itemError(e)
        }
        )).finally((()=>{
            this.manager.itemEnd(e)
        }
        )),
        this.manager.itemStart(e)
    }
    setResponseType(e) {
        return this.responseType = e,
        this
    }
    setMimeType(e) {
        return this.mimeType = e,
        this
    }
}
class Xs extends Ws {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        void 0 !== this.path && (e = this.path + e),
        e = this.manager.resolveURL(e);
        const r = this
          , s = Hs.get(e);
        if (void 0 !== s)
            return r.manager.itemStart(e),
            setTimeout((function() {
                t && t(s),
                r.manager.itemEnd(e)
            }
            ), 0),
            s;
        const a = S("img");
        function o() {
            c(),
            Hs.add(e, this),
            t && t(this),
            r.manager.itemEnd(e)
        }
        function l(t) {
            c(),
            i && i(t),
            r.manager.itemError(e),
            r.manager.itemEnd(e)
        }
        function c() {
            a.removeEventListener("load", o, !1),
            a.removeEventListener("error", l, !1)
        }
        return a.addEventListener("load", o, !1),
        a.addEventListener("error", l, !1),
        "data:" !== e.slice(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin),
        r.manager.itemStart(e),
        a.src = e,
        a
    }
}
class Ys extends Ws {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        const r = new H
          , s = new Xs(this.manager);
        return s.setCrossOrigin(this.crossOrigin),
        s.setPath(this.path),
        s.load(e, (function(e) {
            r.image = e,
            r.needsUpdate = !0,
            void 0 !== t && t(r)
        }
        ), n, i),
        r
    }
}
class $s extends $e {
    constructor(e, t=1) {
        super(),
        this.isLight = !0,
        this.type = "Light",
        this.color = new z(e),
        this.intensity = t
    }
    dispose() {}
    copy(e, t) {
        return super.copy(e, t),
        this.color.copy(e.color),
        this.intensity = e.intensity,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.color = this.color.getHex(),
        t.object.intensity = this.intensity,
        void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()),
        void 0 !== this.distance && (t.object.distance = this.distance),
        void 0 !== this.angle && (t.object.angle = this.angle),
        void 0 !== this.decay && (t.object.decay = this.decay),
        void 0 !== this.penumbra && (t.object.penumbra = this.penumbra),
        void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()),
        t
    }
}
const Ks = new Se
  , Zs = new X
  , Js = new X;
class Qs {
    constructor(e) {
        this.camera = e,
        this.bias = 0,
        this.normalBias = 0,
        this.radius = 1,
        this.blurSamples = 8,
        this.mapSize = new M(512,512),
        this.map = null,
        this.mapPass = null,
        this.matrix = new Se,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this._frustum = new an,
        this._frameExtents = new M(1,1),
        this._viewportCount = 1,
        this._viewports = [new V(0,0,1,1)]
    }
    getViewportCount() {
        return this._viewportCount
    }
    getFrustum() {
        return this._frustum
    }
    updateMatrices(e) {
        const t = this.camera
          , n = this.matrix;
        Zs.setFromMatrixPosition(e.matrixWorld),
        t.position.copy(Zs),
        Js.setFromMatrixPosition(e.target.matrixWorld),
        t.lookAt(Js),
        t.updateMatrixWorld(),
        Ks.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Ks),
        n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
        n.multiply(t.projectionMatrix),
        n.multiply(t.matrixWorldInverse)
    }
    getViewport(e) {
        return this._viewports[e]
    }
    getFrameExtents() {
        return this._frameExtents
    }
    dispose() {
        this.map && this.map.dispose(),
        this.mapPass && this.mapPass.dispose()
    }
    copy(e) {
        return this.camera = e.camera.clone(),
        this.bias = e.bias,
        this.radius = e.radius,
        this.mapSize.copy(e.mapSize),
        this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    toJSON() {
        const e = {};
        return 0 !== this.bias && (e.bias = this.bias),
        0 !== this.normalBias && (e.normalBias = this.normalBias),
        1 !== this.radius && (e.radius = this.radius),
        512 === this.mapSize.x && 512 === this.mapSize.y || (e.mapSize = this.mapSize.toArray()),
        e.camera = this.camera.toJSON(!1).object,
        delete e.camera.matrix,
        e
    }
}
class ea extends Qs {
    constructor() {
        super(new $t(50,1,.5,500)),
        this.isSpotLightShadow = !0,
        this.focus = 1
    }
    updateMatrices(e) {
        const t = this.camera
          , n = 2 * d * e.angle * this.focus
          , i = this.mapSize.width / this.mapSize.height
          , r = e.distance || t.far;
        n === t.fov && i === t.aspect && r === t.far || (t.fov = n,
        t.aspect = i,
        t.far = r,
        t.updateProjectionMatrix()),
        super.updateMatrices(e)
    }
    copy(e) {
        return super.copy(e),
        this.focus = e.focus,
        this
    }
}
class ta extends $s {
    constructor(e, t, n=0, i=Math.PI / 3, r=0, s=1) {
        super(e, t),
        this.isSpotLight = !0,
        this.type = "SpotLight",
        this.position.copy($e.DefaultUp),
        this.updateMatrix(),
        this.target = new $e,
        this.distance = n,
        this.angle = i,
        this.penumbra = r,
        this.decay = s,
        this.shadow = new ea
    }
    get power() {
        return this.intensity * Math.PI
    }
    set power(e) {
        this.intensity = e / Math.PI
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.distance = e.distance,
        this.angle = e.angle,
        this.penumbra = e.penumbra,
        this.decay = e.decay,
        this.target = e.target.clone(),
        this.shadow = e.shadow.clone(),
        this
    }
}
const na = new Se
  , ia = new X
  , ra = new X;
class sa extends Qs {
    constructor() {
        super(new $t(90,1,.5,500)),
        this.isPointLightShadow = !0,
        this._frameExtents = new M(4,2),
        this._viewportCount = 6,
        this._viewports = [new V(2,1,1,1), new V(0,1,1,1), new V(3,1,1,1), new V(1,1,1,1), new V(3,0,1,1), new V(1,0,1,1)],
        this._cubeDirections = [new X(1,0,0), new X(-1,0,0), new X(0,0,1), new X(0,0,-1), new X(0,1,0), new X(0,-1,0)],
        this._cubeUps = [new X(0,1,0), new X(0,1,0), new X(0,1,0), new X(0,1,0), new X(0,0,1), new X(0,0,-1)]
    }
    updateMatrices(e, t=0) {
        const n = this.camera
          , i = this.matrix
          , r = e.distance || n.far;
        r !== n.far && (n.far = r,
        n.updateProjectionMatrix()),
        ia.setFromMatrixPosition(e.matrixWorld),
        n.position.copy(ia),
        ra.copy(n.position),
        ra.add(this._cubeDirections[t]),
        n.up.copy(this._cubeUps[t]),
        n.lookAt(ra),
        n.updateMatrixWorld(),
        i.makeTranslation(-ia.x, -ia.y, -ia.z),
        na.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(na)
    }
}
class aa extends $s {
    constructor(e, t, n=0, i=1) {
        super(e, t),
        this.isPointLight = !0,
        this.type = "PointLight",
        this.distance = n,
        this.decay = i,
        this.shadow = new sa
    }
    get power() {
        return 4 * this.intensity * Math.PI
    }
    set power(e) {
        this.intensity = e / (4 * Math.PI)
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.distance = e.distance,
        this.decay = e.decay,
        this.shadow = e.shadow.clone(),
        this
    }
}
class oa extends Qs {
    constructor() {
        super(new xn(-5,5,5,-5,.5,500)),
        this.isDirectionalLightShadow = !0
    }
}
class la extends $s {
    constructor(e, t) {
        super(e, t),
        this.isDirectionalLight = !0,
        this.type = "DirectionalLight",
        this.position.copy($e.DefaultUp),
        this.updateMatrix(),
        this.target = new $e,
        this.shadow = new oa
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e),
        this.target = e.target.clone(),
        this.shadow = e.shadow.clone(),
        this
    }
}
class ca {
    static decodeText(e) {
        if ("undefined" != typeof TextDecoder)
            return (new TextDecoder).decode(e);
        let t = "";
        for (let n = 0, i = e.length; n < i; n++)
            t += String.fromCharCode(e[n]);
        try {
            return decodeURIComponent(escape(t))
        } catch (e) {
            return t
        }
    }
    static extractUrlBase(e) {
        const t = e.lastIndexOf("/");
        return -1 === t ? "./" : e.slice(0, t + 1)
    }
    static resolveURL(e, t) {
        return "string" != typeof e || "" === e ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e)
    }
}
class ha extends wt {
    constructor() {
        super(),
        this.isInstancedBufferGeometry = !0,
        this.type = "InstancedBufferGeometry",
        this.instanceCount = 1 / 0
    }
    copy(e) {
        return super.copy(e),
        this.instanceCount = e.instanceCount,
        this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
    toJSON() {
        const e = super.toJSON(this);
        return e.instanceCount = this.instanceCount,
        e.isInstancedBufferGeometry = !0,
        e
    }
}
class ua extends Ws {
    constructor(e) {
        super(e),
        this.isImageBitmapLoader = !0,
        "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),
        "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
        this.options = {
            premultiplyAlpha: "none"
        }
    }
    setOptions(e) {
        return this.options = e,
        this
    }
    load(e, t, n, i) {
        void 0 === e && (e = ""),
        void 0 !== this.path && (e = this.path + e),
        e = this.manager.resolveURL(e);
        const r = this
          , s = Hs.get(e);
        if (void 0 !== s)
            return r.manager.itemStart(e),
            setTimeout((function() {
                t && t(s),
                r.manager.itemEnd(e)
            }
            ), 0),
            s;
        const a = {};
        a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include",
        a.headers = this.requestHeader,
        fetch(e, a).then((function(e) {
            return e.blob()
        }
        )).then((function(e) {
            return createImageBitmap(e, Object.assign(r.options, {
                colorSpaceConversion: "none"
            }))
        }
        )).then((function(n) {
            Hs.add(e, n),
            t && t(n),
            r.manager.itemEnd(e)
        }
        )).catch((function(t) {
            i && i(t),
            r.manager.itemError(e),
            r.manager.itemEnd(e)
        }
        )),
        r.manager.itemStart(e)
    }
}
const da = new RegExp("[\\[\\]\\.:\\/]","g")
  , pa = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]"
  , ma = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]")
  , fa = /(WCOD+)?/.source.replace("WCOD", pa)
  , ga = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]")
  , va = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]")
  , _a = new RegExp("^" + ma + fa + ga + va + "$")
  , xa = ["material", "materials", "bones"];
class ya {
    constructor(e, t, n) {
        this.path = t,
        this.parsedPath = n || ya.parseTrackName(t),
        this.node = ya.findNode(e, this.parsedPath.nodeName) || e,
        this.rootNode = e,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
    static create(e, t, n) {
        return e && e.isAnimationObjectGroup ? new ya.Composite(e,t,n) : new ya(e,t,n)
    }
    static sanitizeNodeName(e) {
        return e.replace(/\s/g, "_").replace(da, "")
    }
    static parseTrackName(e) {
        const t = _a.exec(e);
        if (null === t)
            throw new Error("PropertyBinding: Cannot parse trackName: " + e);
        const n = {
            nodeName: t[2],
            objectName: t[3],
            objectIndex: t[4],
            propertyName: t[5],
            propertyIndex: t[6]
        }
          , i = n.nodeName && n.nodeName.lastIndexOf(".");
        if (void 0 !== i && -1 !== i) {
            const e = n.nodeName.substring(i + 1);
            -1 !== xa.indexOf(e) && (n.nodeName = n.nodeName.substring(0, i),
            n.objectName = e)
        }
        if (null === n.propertyName || 0 === n.propertyName.length)
            throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
        return n
    }
    static findNode(e, t) {
        if (void 0 === t || "" === t || "." === t || -1 === t || t === e.name || t === e.uuid)
            return e;
        if (e.skeleton) {
            const n = e.skeleton.getBoneByName(t);
            if (void 0 !== n)
                return n
        }
        if (e.children) {
            const n = function(e) {
                for (let i = 0; i < e.length; i++) {
                    const r = e[i];
                    if (r.name === t || r.uuid === t)
                        return r;
                    const s = n(r.children);
                    if (s)
                        return s
                }
                return null
            }
              , i = n(e.children);
            if (i)
                return i
        }
        return null
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
        e[t] = this.targetObject[this.propertyName]
    }
    _getValue_array(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i)
            e[t++] = n[i]
    }
    _getValue_arrayElement(e, t) {
        e[t] = this.resolvedProperty[this.propertyIndex]
    }
    _getValue_toArray(e, t) {
        this.resolvedProperty.toArray(e, t)
    }
    _setValue_direct(e, t) {
        this.targetObject[this.propertyName] = e[t]
    }
    _setValue_direct_setNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t],
        this.targetObject.needsUpdate = !0
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_array(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i)
            n[i] = e[t++]
    }
    _setValue_array_setNeedsUpdate(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i)
            n[i] = e[t++];
        this.targetObject.needsUpdate = !0
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, r = n.length; i !== r; ++i)
            n[i] = e[t++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_arrayElement(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t]
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.needsUpdate = !0
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_fromArray(e, t) {
        this.resolvedProperty.fromArray(e, t)
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.needsUpdate = !0
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _getValue_unbound(e, t) {
        this.bind(),
        this.getValue(e, t)
    }
    _setValue_unbound(e, t) {
        this.bind(),
        this.setValue(e, t)
    }
    bind() {
        let e = this.node;
        const t = this.parsedPath
          , n = t.objectName
          , i = t.propertyName;
        let r = t.propertyIndex;
        if (e || (e = ya.findNode(this.rootNode, t.nodeName) || this.rootNode,
        this.node = e),
        this.getValue = this._getValue_unavailable,
        this.setValue = this._setValue_unavailable,
        !e)
            return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
        if (n) {
            let i = t.objectIndex;
            switch (n) {
            case "materials":
                if (!e.material)
                    return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                if (!e.material.materials)
                    return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                e = e.material.materials;
                break;
            case "bones":
                if (!e.skeleton)
                    return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                e = e.skeleton.bones;
                for (let t = 0; t < e.length; t++)
                    if (e[t].name === i) {
                        i = t;
                        break
                    }
                break;
            default:
                if (void 0 === e[n])
                    return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                e = e[n]
            }
            if (void 0 !== i) {
                if (void 0 === e[i])
                    return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                e = e[i]
            }
        }
        const s = e[i];
        if (void 0 === s) {
            const n = t.nodeName;
            return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", e)
        }
        let a = this.Versioning.None;
        this.targetObject = e,
        void 0 !== e.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== e.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
        let o = this.BindingType.Direct;
        if (void 0 !== r) {
            if ("morphTargetInfluences" === i) {
                if (!e.geometry)
                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                if (!e.geometry.morphAttributes)
                    return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                void 0 !== e.morphTargetDictionary[r] && (r = e.morphTargetDictionary[r])
            }
            o = this.BindingType.ArrayElement,
            this.resolvedProperty = s,
            this.propertyIndex = r
        } else
            void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray,
            this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray,
            this.resolvedProperty = s) : this.propertyName = i;
        this.getValue = this.GetterByBindingType[o],
        this.setValue = this.SetterByBindingTypeAndVersioning[o][a]
    }
    unbind() {
        this.node = null,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
}
ya.Composite = class {
    constructor(e, t, n) {
        const i = n || ya.parseTrackName(t);
        this._targetGroup = e,
        this._bindings = e.subscribe_(t, i)
    }
    getValue(e, t) {
        this.bind();
        const n = this._targetGroup.nCachedObjects_
          , i = this._bindings[n];
        void 0 !== i && i.getValue(e, t)
    }
    setValue(e, t) {
        const n = this._bindings;
        for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
            n[i].setValue(e, t)
    }
    bind() {
        const e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
            e[t].bind()
    }
    unbind() {
        const e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
            e[t].unbind()
    }
}
,
ya.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
},
ya.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
},
ya.prototype.GetterByBindingType = [ya.prototype._getValue_direct, ya.prototype._getValue_array, ya.prototype._getValue_arrayElement, ya.prototype._getValue_toArray],
ya.prototype.SetterByBindingTypeAndVersioning = [[ya.prototype._setValue_direct, ya.prototype._setValue_direct_setNeedsUpdate, ya.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [ya.prototype._setValue_array, ya.prototype._setValue_array_setNeedsUpdate, ya.prototype._setValue_array_setMatrixWorldNeedsUpdate], [ya.prototype._setValue_arrayElement, ya.prototype._setValue_arrayElement_setNeedsUpdate, ya.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [ya.prototype._setValue_fromArray, ya.prototype._setValue_fromArray_setNeedsUpdate, ya.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
class Ma {
    constructor(e, t, n=0, i=1 / 0) {
        this.ray = new we(e,t),
        this.near = n,
        this.far = i,
        this.camera = null,
        this.layers = new ze,
        this.params = {
            Mesh: {},
            Line: {
                threshold: 1
            },
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        }
    }
    set(e, t) {
        this.ray.set(e, t)
    }
    setFromCamera(e, t) {
        t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(),
        this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t),
        this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
        this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type)
    }
    intersectObject(e, t=!0, n=[]) {
        return wa(e, this, n, t),
        n.sort(ba),
        n
    }
    intersectObjects(e, t=!0, n=[]) {
        for (let i = 0, r = e.length; i < r; i++)
            wa(e[i], this, n, t);
        return n.sort(ba),
        n
    }
}
function ba(e, t) {
    return e.distance - t.distance
}
function wa(e, t, n, i) {
    if (e.layers.test(t.layers) && e.raycast(t, n),
    !0 === i) {
        const i = e.children;
        for (let e = 0, r = i.length; e < r; e++)
            wa(i[e], t, n, !0)
    }
}
class Sa {
    constructor(e=1, t=0, n=0) {
        return this.radius = e,
        this.phi = t,
        this.theta = n,
        this
    }
    set(e, t, n) {
        return this.radius = e,
        this.phi = t,
        this.theta = n,
        this
    }
    copy(e) {
        return this.radius = e.radius,
        this.phi = e.phi,
        this.theta = e.theta,
        this
    }
    makeSafe() {
        const e = 1e-6;
        return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)),
        this
    }
    setFromVector3(e) {
        return this.setFromCartesianCoords(e.x, e.y, e.z)
    }
    setFromCartesianCoords(e, t, n) {
        return this.radius = Math.sqrt(e * e + t * t + n * n),
        0 === this.radius ? (this.theta = 0,
        this.phi = 0) : (this.theta = Math.atan2(e, n),
        this.phi = Math.acos(m(t / this.radius, -1, 1))),
        this
    }
    clone() {
        return (new this.constructor).copy(this)
    }
}
const Ta = new ArrayBuffer(4)
  , Ea = (new Float32Array(Ta),
new Uint32Array(Ta),
new Uint32Array(512))
  , Aa = new Uint32Array(512);
for (let e = 0; e < 256; ++e) {
    const t = e - 127;
    t < -27 ? (Ea[e] = 0,
    Ea[256 | e] = 32768,
    Aa[e] = 24,
    Aa[256 | e] = 24) : t < -14 ? (Ea[e] = 1024 >> -t - 14,
    Ea[256 | e] = 1024 >> -t - 14 | 32768,
    Aa[e] = -t - 1,
    Aa[256 | e] = -t - 1) : t <= 15 ? (Ea[e] = t + 15 << 10,
    Ea[256 | e] = t + 15 << 10 | 32768,
    Aa[e] = 13,
    Aa[256 | e] = 13) : t < 128 ? (Ea[e] = 31744,
    Ea[256 | e] = 64512,
    Aa[e] = 24,
    Aa[256 | e] = 24) : (Ea[e] = 31744,
    Ea[256 | e] = 64512,
    Aa[e] = 13,
    Aa[256 | e] = 13)
}
const La = new Uint32Array(2048)
  , Ca = new Uint32Array(64)
  , Ra = new Uint32Array(64);
for (let e = 1; e < 1024; ++e) {
    let t = e << 13
      , n = 0;
    for (; 0 == (8388608 & t); )
        t <<= 1,
        n -= 8388608;
    t &= -8388609,
    n += 947912704,
    La[e] = t | n
}
for (let e = 1024; e < 2048; ++e)
    La[e] = 939524096 + (e - 1024 << 13);
for (let e = 1; e < 31; ++e)
    Ca[e] = e << 23;
Ca[31] = 1199570944,
Ca[32] = 2147483648;
for (let e = 33; e < 63; ++e)
    Ca[e] = 2147483648 + (e - 32 << 23);
Ca[63] = 3347054592;
for (let e = 1; e < 64; ++e)
    32 !== e && (Ra[e] = 1024);
"undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
    detail: {
        revision: "141"
    }
})),
"undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "141");
const Pa = {
    type: "change"
}
  , Da = {
    type: "start"
}
  , Ia = {
    type: "end"
};
class Na extends l {
    constructor(e, t) {
        super(),
        void 0 === t && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),
        t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),
        this.object = e,
        this.domElement = t,
        this.domElement.style.touchAction = "none",
        this.enabled = !0,
        this.target = new X,
        this.minDistance = 0,
        this.maxDistance = 1 / 0,
        this.minZoom = 0,
        this.maxZoom = 1 / 0,
        this.minPolarAngle = 0,
        this.maxPolarAngle = Math.PI,
        this.minAzimuthAngle = -1 / 0,
        this.maxAzimuthAngle = 1 / 0,
        this.enableDamping = !1,
        this.dampingFactor = .05,
        this.enableZoom = false,
        this.zoomSpeed = 1,
        this.enableRotate = false,
        this.rotateSpeed = 1,
        this.enablePan = false,
        this.panSpeed = 1,
        this.screenSpacePanning = !0,
        this.keyPanSpeed = 7,
        this.autoRotate = !1,
        this.autoRotateSpeed = 2,
        this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        },
        this.mouseButtons = {
            LEFT: a.ROTATE,
            MIDDLE: a.DOLLY,
            RIGHT: a.PAN
        },
        this.touches = {
            ONE: o.ROTATE,
            TWO: o.DOLLY_PAN
        },
        this.target0 = this.target.clone(),
        this.position0 = this.object.position.clone(),
        this.zoom0 = this.object.zoom,
        this._domElementKeyEvents = null,
        this.getPolarAngle = function() {
            return l.phi
        }
        ,
        this.getAzimuthalAngle = function() {
            return l.theta
        }
        ,
        this.getDistance = function() {
            return this.object.position.distanceTo(this.target)
        }
        ,
        this.listenToKeyEvents = function(e) {
            e.addEventListener("keydown", Y),
            this._domElementKeyEvents = e
        }
        ,
        this.saveState = function() {
            n.target0.copy(n.target),
            n.position0.copy(n.object.position),
            n.zoom0 = n.object.zoom
        }
        ,
        this.reset = function() {
            n.target.copy(n.target0),
            n.object.position.copy(n.position0),
            n.object.zoom = n.zoom0,
            n.object.updateProjectionMatrix(),
            n.dispatchEvent(Pa),
            n.update(),
            r = i.NONE
        }
        ,
        this.update = function() {
            const t = new X
              , a = (new q).setFromUnitVectors(e.up, new X(0,1,0))
              , o = a.clone().invert()
              , p = new X
              , m = new q
              , f = 2 * Math.PI;
            return function() {
                const e = n.object.position;
                t.copy(e).sub(n.target),
                t.applyQuaternion(a),
                l.setFromVector3(t),
                n.autoRotate && r === i.NONE && E(2 * Math.PI / 60 / 60 * n.autoRotateSpeed),
                n.enableDamping ? (l.theta += c.theta * n.dampingFactor,
                l.phi += c.phi * n.dampingFactor) : (l.theta += c.theta,
                l.phi += c.phi);
                let g = n.minAzimuthAngle
                  , v = n.maxAzimuthAngle;
                return isFinite(g) && isFinite(v) && (g < -Math.PI ? g += f : g > Math.PI && (g -= f),
                v < -Math.PI ? v += f : v > Math.PI && (v -= f),
                l.theta = g <= v ? Math.max(g, Math.min(v, l.theta)) : l.theta > (g + v) / 2 ? Math.max(g, l.theta) : Math.min(v, l.theta)),
                l.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, l.phi)),
                l.makeSafe(),
                l.radius *= h,
                l.radius = Math.max(n.minDistance, Math.min(n.maxDistance, l.radius)),
                !0 === n.enableDamping ? n.target.addScaledVector(u, n.dampingFactor) : n.target.add(u),
                t.setFromSpherical(l),
                t.applyQuaternion(o),
                e.copy(n.target).add(t),
                n.object.lookAt(n.target),
                !0 === n.enableDamping ? (c.theta *= 1 - n.dampingFactor,
                c.phi *= 1 - n.dampingFactor,
                u.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0),
                u.set(0, 0, 0)),
                h = 1,
                !!(d || p.distanceToSquared(n.object.position) > s || 8 * (1 - m.dot(n.object.quaternion)) > s) && (n.dispatchEvent(Pa),
                p.copy(n.object.position),
                m.copy(n.object.quaternion),
                d = !1,
                !0)
            }
        }(),
        this.dispose = function() {
            n.domElement.removeEventListener("contextmenu", $),
            n.domElement.removeEventListener("pointerdown", H),
            n.domElement.removeEventListener("pointercancel", W),
            n.domElement.removeEventListener("wheel", j),
            n.domElement.removeEventListener("pointermove", V),
            n.domElement.removeEventListener("pointerup", G),
            null !== n._domElementKeyEvents && n._domElementKeyEvents.removeEventListener("keydown", Y)
        }
        ;
        const n = this
          , i = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            TOUCH_ROTATE: 5,
            TOUCH_PAN: 4,
            TOUCH_DOLLY_PAN: 5,
            TOUCH_DOLLY_ROTATE: 6
        };
        let r = i.NONE;
        const s = 1e-6
          , l = new Sa
          , c = new Sa;
        let h = 1;
        const u = new X;
        let d = !1;
        const p = new M
          , m = new M
          , f = new M
          , g = new M
          , v = new M
          , _ = new M
          , x = new M
          , y = new M
          , b = new M
          , w = []
          , S = {};
        function T() {
            return Math.pow(.95, n.zoomSpeed)
        }
        function E(e) {
            c.theta -= e
        }
        function A(e) {
            c.phi -= e
        }
        const L = function() {
            const e = new X;
            return function(t, n) {
                e.setFromMatrixColumn(n, 0),
                e.multiplyScalar(-t),
                u.add(e)
            }
        }()
          , C = function() {
            const e = new X;
            return function(t, i) {
                !0 === n.screenSpacePanning ? e.setFromMatrixColumn(i, 1) : (e.setFromMatrixColumn(i, 0),
                e.crossVectors(n.object.up, e)),
                e.multiplyScalar(t),
                u.add(e)
            }
        }()
          , R = function() {
            const e = new X;
            return function(t, i) {
                const r = n.domElement;
                if (n.object.isPerspectiveCamera) {
                    const s = n.object.position;
                    e.copy(s).sub(n.target);
                    let a = e.length();
                    a *= Math.tan(n.object.fov / 2 * Math.PI / 180),
                    L(2 * t * a / r.clientHeight, n.object.matrix),
                    C(2 * i * a / r.clientHeight, n.object.matrix)
                } else
                    n.object.isOrthographicCamera ? (L(t * (n.object.right - n.object.left) / n.object.zoom / r.clientWidth, n.object.matrix),
                    C(i * (n.object.top - n.object.bottom) / n.object.zoom / r.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),
                    n.enablePan = !1)
            }
        }();
        function P(e) {
            n.object.isPerspectiveCamera ? h /= e : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * e)),
            n.object.updateProjectionMatrix(),
            d = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
            n.enableZoom = !1)
        }
        function D(e) {
            n.object.isPerspectiveCamera ? h *= e : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / e)),
            n.object.updateProjectionMatrix(),
            d = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
            n.enableZoom = !1)
        }
        function I(e) {
            p.set(e.clientX, e.clientY)
        }
        function N(e) {
            g.set(e.clientX, e.clientY)
        }
        function z() {
            if (1 === w.length)
                p.set(w[0].pageX, w[0].pageY);
            else {
                const e = .5 * (w[0].pageX + w[1].pageX)
                  , t = .5 * (w[0].pageY + w[1].pageY);
                p.set(e, t)
            }
        }
        function O() {
            if (1 === w.length)
                g.set(w[0].pageX, w[0].pageY);
            else {
                const e = .5 * (w[0].pageX + w[1].pageX)
                  , t = .5 * (w[0].pageY + w[1].pageY);
                g.set(e, t)
            }
        }
        function F() {
            const e = w[0].pageX - w[1].pageX
              , t = w[0].pageY - w[1].pageY
              , n = Math.sqrt(e * e + t * t);
            x.set(0, n)
        }
        function U(e) {
            if (1 == w.length)
                m.set(e.pageX, e.pageY);
            else {
                const t = J(e)
                  , n = .5 * (e.pageX + t.x)
                  , i = .5 * (e.pageY + t.y);
                m.set(n, i)
            }
            f.subVectors(m, p).multiplyScalar(n.rotateSpeed);
            const t = n.domElement;
            E(2 * Math.PI * f.x / t.clientHeight),
            A(2 * Math.PI * f.y / t.clientHeight),
            p.copy(m)
        }
        function k(e) {
            if (1 === w.length)
                v.set(e.pageX, e.pageY);
            else {
                const t = J(e)
                  , n = .5 * (e.pageX + t.x)
                  , i = .5 * (e.pageY + t.y);
                v.set(n, i)
            }
            _.subVectors(v, g).multiplyScalar(n.panSpeed),
            R(_.x, _.y),
            g.copy(v)
        }
        function B(e) {
            const t = J(e)
              , i = e.pageX - t.x
              , r = e.pageY - t.y
              , s = Math.sqrt(i * i + r * r);
            y.set(0, s),
            b.set(0, Math.pow(y.y / x.y, n.zoomSpeed)),
            P(b.y),
            x.copy(y)
        }
        function H(e) {
            !1 !== n.enabled && (0 === w.length && (n.domElement.setPointerCapture(e.pointerId),
            n.domElement.addEventListener("pointermove", V),
            n.domElement.addEventListener("pointerup", G)),
            function(e) {
                w.push(e)
            }(e),
            "touch" === e.pointerType ? function(e) {
                switch (Z(e),
                w.length) {
                case 1:
                    switch (n.touches.ONE) {
                    case o.ROTATE:
                        if (!1 === n.enableRotate)
                            return;
                        z(),
                        r = i.TOUCH_ROTATE;
                        break;
                    case o.PAN:
                        if (!1 === n.enablePan)
                            return;
                        O(),
                        r = i.TOUCH_PAN;
                        break;
                    default:
                        r = i.NONE
                    }
                    break;
                case 2:
                    switch (n.touches.TWO) {
                    case o.DOLLY_PAN:
                        if (!1 === n.enableZoom && !1 === n.enablePan)
                            return;
                        n.enableZoom && F(),
                        n.enablePan && O(),
                        r = i.TOUCH_DOLLY_PAN;
                        break;
                    case o.DOLLY_ROTATE:
                        if (!1 === n.enableZoom && !1 === n.enableRotate)
                            return;
                        n.enableZoom && F(),
                        n.enableRotate && z(),
                        r = i.TOUCH_DOLLY_ROTATE;
                        break;
                    default:
                        r = i.NONE
                    }
                    break;
                default:
                    r = i.NONE
                }
                r !== i.NONE && n.dispatchEvent(Da)
            }(e) : function(e) {
                let t;
                switch (e.button) {
                case 0:
                    t = n.mouseButtons.LEFT;
                    break;
                case 1:
                    t = n.mouseButtons.MIDDLE;
                    break;
                case 2:
                    t = n.mouseButtons.RIGHT;
                    break;
                default:
                    t = -1
                }
                switch (t) {
                case a.DOLLY:
                    if (!1 === n.enableZoom)
                        return;
                    !function(e) {
                        x.set(e.clientX, e.clientY)
                    }(e),
                    r = i.DOLLY;
                    break;
                case a.ROTATE:
                    if (e.ctrlKey || e.metaKey || e.shiftKey) {
                        if (!1 === n.enablePan)
                            return;
                        N(e),
                        r = i.PAN
                    } else {
                        if (!1 === n.enableRotate)
                            return;
                        I(e),
                        r = i.ROTATE
                    }
                    break;
                case a.PAN:
                    if (e.ctrlKey || e.metaKey || e.shiftKey) {
                        if (!1 === n.enableRotate)
                            return;
                        I(e),
                        r = i.ROTATE
                    } else {
                        if (!1 === n.enablePan)
                            return;
                        N(e),
                        r = i.PAN
                    }
                    break;
                default:
                    r = i.NONE
                }
                r !== i.NONE && n.dispatchEvent(Da)
            }(e))
        }
        function V(e) {
            !1 !== n.enabled && ("touch" === e.pointerType ? function(e) {
                switch (Z(e),
                r) {
                case i.TOUCH_ROTATE:
                    if (!1 === n.enableRotate)
                        return;
                    U(e),
                    n.update();
                    break;
                case i.TOUCH_PAN:
                    if (!1 === n.enablePan)
                        return;
                    k(e),
                    n.update();
                    break;
                case i.TOUCH_DOLLY_PAN:
                    if (!1 === n.enableZoom && !1 === n.enablePan)
                        return;
                    !function(e) {
                        n.enableZoom && B(e),
                        n.enablePan && k(e)
                    }(e),
                    n.update();
                    break;
                case i.TOUCH_DOLLY_ROTATE:
                    if (!1 === n.enableZoom && !1 === n.enableRotate)
                        return;
                    !function(e) {
                        n.enableZoom && B(e),
                        n.enableRotate && U(e)
                    }(e),
                    n.update();
                    break;
                default:
                    r = i.NONE
                }
            }(e) : function(e) {
                if (!1 === n.enabled)
                    return;
                switch (r) {
                case i.ROTATE:
                    if (!1 === n.enableRotate)
                        return;
                    !function(e) {
                        m.set(e.clientX, e.clientY),
                        f.subVectors(m, p).multiplyScalar(n.rotateSpeed);
                        const t = n.domElement;
                        E(2 * Math.PI * f.x / t.clientHeight),
                        A(2 * Math.PI * f.y / t.clientHeight),
                        p.copy(m),
                        n.update()
                    }(e);
                    break;
                case i.DOLLY:
                    if (!1 === n.enableZoom)
                        return;
                    !function(e) {
                        y.set(e.clientX, e.clientY),
                        b.subVectors(y, x),
                        b.y > 0 ? P(T()) : b.y < 0 && D(T()),
                        x.copy(y),
                        n.update()
                    }(e);
                    break;
                case i.PAN:
                    if (!1 === n.enablePan)
                        return;
                    !function(e) {
                        v.set(e.clientX, e.clientY),
                        _.subVectors(v, g).multiplyScalar(n.panSpeed),
                        R(_.x, _.y),
                        g.copy(v),
                        n.update()
                    }(e)
                }
            }(e))
        }
        function G(e) {
            K(e),
            0 === w.length && (n.domElement.releasePointerCapture(e.pointerId),
            n.domElement.removeEventListener("pointermove", V),
            n.domElement.removeEventListener("pointerup", G)),
            n.dispatchEvent(Ia),
            r = i.NONE
        }
        function W(e) {
            K(e)
        }
        function j(e) {
            !1 !== n.enabled && !1 !== n.enableZoom && r === i.NONE && (e.preventDefault(),
            n.dispatchEvent(Da),
            function(e) {
                e.deltaY < 0 ? D(T()) : e.deltaY > 0 && P(T()),
                n.update()
            }(e),
            n.dispatchEvent(Ia))
        }
        function Y(e) {
            !1 !== n.enabled && !1 !== n.enablePan && function(e) {
                let t = !1;
                switch (e.code) {
                case n.keys.UP:
                    R(0, n.keyPanSpeed),
                    t = !0;
                    break;
                case n.keys.BOTTOM:
                    R(0, -n.keyPanSpeed),
                    t = !0;
                    break;
                case n.keys.LEFT:
                    R(n.keyPanSpeed, 0),
                    t = !0;
                    break;
                case n.keys.RIGHT:
                    R(-n.keyPanSpeed, 0),
                    t = !0
                }
                t && (e.preventDefault(),
                n.update())
            }(e)
        }
        function $(e) {
            !1 !== n.enabled && e.preventDefault()
        }
        function K(e) {
            delete S[e.pointerId];
            for (let t = 0; t < w.length; t++)
                if (w[t].pointerId == e.pointerId)
                    return void w.splice(t, 1)
        }
        function Z(e) {
            let t = S[e.pointerId];
            void 0 === t && (t = new M,
            S[e.pointerId] = t),
            t.set(e.pageX, e.pageY)
        }
        function J(e) {
            const t = e.pointerId === w[0].pointerId ? w[1] : w[0];
            return S[t.pointerId]
        }
        n.domElement.addEventListener("contextmenu", $),
        n.domElement.addEventListener("pointerdown", H),
        n.domElement.addEventListener("pointercancel", W),
        n.domElement.addEventListener("wheel", j, {
            passive: !1
        }),
        this.update()
    }
}
class za extends Ws {
    constructor(e) {
        super(e),
        this.dracoLoader = null,
        this.ktx2Loader = null,
        this.meshoptDecoder = null,
        this.pluginCallbacks = [],
        this.register((function(e) {
            return new Ha(e)
        }
        )),
        this.register((function(e) {
            return new Ya(e)
        }
        )),
        this.register((function(e) {
            return new $a(e)
        }
        )),
        this.register((function(e) {
            return new Ga(e)
        }
        )),
        this.register((function(e) {
            return new Wa(e)
        }
        )),
        this.register((function(e) {
            return new ja(e)
        }
        )),
        this.register((function(e) {
            return new qa(e)
        }
        )),
        this.register((function(e) {
            return new Ba(e)
        }
        )),
        this.register((function(e) {
            return new Xa(e)
        }
        )),
        this.register((function(e) {
            return new Va(e)
        }
        )),
        this.register((function(e) {
            return new Ua(e)
        }
        )),
        this.register((function(e) {
            return new Ka(e)
        }
        ))
    }
    load(e, t, n, i) {
        const r = this;
        let s;
        s = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : ca.extractUrlBase(e),
        this.manager.itemStart(e);
        const a = function(t) {
            i ? i(t) : console.error(t),
            r.manager.itemError(e),
            r.manager.itemEnd(e)
        }
          , o = new qs(this.manager);
        o.setPath(this.path),
        o.setResponseType("arraybuffer"),
        o.setRequestHeader(this.requestHeader),
        o.setWithCredentials(this.withCredentials),
        o.load(e, (function(n) {
            try {
                r.parse(n, s, (function(n) {
                    t(n),
                    r.manager.itemEnd(e)
                }
                ), a)
            } catch (e) {
                a(e)
            }
        }
        ), n, a)
    }
    setDRACOLoader(e) {
        return this.dracoLoader = e,
        this
    }
    setDDSLoader() {
        throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
    }
    setKTX2Loader(e) {
        return this.ktx2Loader = e,
        this
    }
    setMeshoptDecoder(e) {
        return this.meshoptDecoder = e,
        this
    }
    register(e) {
        return -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e),
        this
    }
    unregister(e) {
        return -1 !== this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
        this
    }
    parse(e, t, n, i) {
        let r;
        const s = {}
          , a = {};
        if ("string" == typeof e)
            r = e;
        else {
            if (ca.decodeText(new Uint8Array(e,0,4)) === Za) {
                try {
                    s[Fa.KHR_BINARY_GLTF] = new eo(e)
                } catch (e) {
                    return void (i && i(e))
                }
                r = s[Fa.KHR_BINARY_GLTF].content
            } else
                r = ca.decodeText(new Uint8Array(e))
        }
        const o = JSON.parse(r);
        if (void 0 === o.asset || o.asset.version[0] < 2)
            return void (i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));
        const l = new Io(o,{
            path: t || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
        });
        l.fileLoader.setRequestHeader(this.requestHeader);
        for (let e = 0; e < this.pluginCallbacks.length; e++) {
            const t = this.pluginCallbacks[e](l);
            a[t.name] = t,
            s[t.name] = !0
        }
        if (o.extensionsUsed)
            for (let e = 0; e < o.extensionsUsed.length; ++e) {
                const t = o.extensionsUsed[e]
                  , n = o.extensionsRequired || [];
                switch (t) {
                case Fa.KHR_MATERIALS_UNLIT:
                    s[t] = new ka;
                    break;
                case Fa.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                    s[t] = new ro;
                    break;
                case Fa.KHR_DRACO_MESH_COMPRESSION:
                    s[t] = new to(o,this.dracoLoader);
                    break;
                case Fa.KHR_TEXTURE_TRANSFORM:
                    s[t] = new no;
                    break;
                case Fa.KHR_MESH_QUANTIZATION:
                    s[t] = new so;
                    break;
                default:
                    n.indexOf(t) >= 0 && void 0 === a[t] && console.warn('THREE.GLTFLoader: Unknown extension "' + t + '".')
                }
            }
        l.setExtensions(s),
        l.setPlugins(a),
        l.parse(n, i)
    }
    parseAsync(e, t) {
        const n = this;
        return new Promise((function(i, r) {
            n.parse(e, t, i, r)
        }
        ))
    }
}
function Oa() {
    let e = {};
    return {
        get: function(t) {
            return e[t]
        },
        add: function(t, n) {
            e[t] = n
        },
        remove: function(t) {
            delete e[t]
        },
        removeAll: function() {
            e = {}
        }
    }
}
const Fa = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
};
class Ua {
    constructor(e) {
        this.parser = e,
        this.name = Fa.KHR_LIGHTS_PUNCTUAL,
        this.cache = {
            refs: {},
            uses: {}
        }
    }
    _markDefs() {
        const e = this.parser
          , t = this.parser.json.nodes || [];
        for (let n = 0, i = t.length; n < i; n++) {
            const i = t[n];
            i.extensions && i.extensions[this.name] && void 0 !== i.extensions[this.name].light && e._addNodeRef(this.cache, i.extensions[this.name].light)
        }
    }
    _loadLight(e) {
        const t = this.parser
          , n = "light:" + e;
        let i = t.cache.get(n);
        if (i)
            return i;
        const r = t.json
          , s = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
        let a;
        const o = new z(16777215);
        void 0 !== s.color && o.fromArray(s.color);
        const l = void 0 !== s.range ? s.range : 0;
        switch (s.type) {
        case "directional":
            a = new la(o),
            a.target.position.set(0, 0, -1),
            a.add(a.target);
            break;
        case "point":
            a = new aa(o),
            a.distance = l;
            break;
        case "spot":
            a = new ta(o),
            a.distance = l,
            s.spot = s.spot || {},
            s.spot.innerConeAngle = void 0 !== s.spot.innerConeAngle ? s.spot.innerConeAngle : 0,
            s.spot.outerConeAngle = void 0 !== s.spot.outerConeAngle ? s.spot.outerConeAngle : Math.PI / 4,
            a.angle = s.spot.outerConeAngle,
            a.penumbra = 1 - s.spot.innerConeAngle / s.spot.outerConeAngle,
            a.target.position.set(0, 0, -1),
            a.add(a.target);
            break;
        default:
            throw new Error("THREE.GLTFLoader: Unexpected light type: " + s.type)
        }
        return a.position.set(0, 0, 0),
        a.decay = 2,
        void 0 !== s.intensity && (a.intensity = s.intensity),
        a.name = t.createUniqueName(s.name || "light_" + e),
        i = Promise.resolve(a),
        t.cache.add(n, i),
        i
    }
    createNodeAttachment(e) {
        const t = this
          , n = this.parser
          , i = n.json.nodes[e]
          , r = (i.extensions && i.extensions[this.name] || {}).light;
        return void 0 === r ? null : this._loadLight(r).then((function(e) {
            return n._getNodeRef(t.cache, r, e)
        }
        ))
    }
}
class ka {
    constructor() {
        this.name = Fa.KHR_MATERIALS_UNLIT
    }
    getMaterialType() {
        return ct
    }
    extendParams(e, t, n) {
        const i = [];
        e.color = new z(1,1,1),
        e.opacity = 1;
        const r = t.pbrMetallicRoughness;
        if (r) {
            if (Array.isArray(r.baseColorFactor)) {
                const t = r.baseColorFactor;
                e.color.fromArray(t),
                e.opacity = t[3]
            }
            void 0 !== r.baseColorTexture && i.push(n.assignTexture(e, "map", r.baseColorTexture, 3001))
        }
        return Promise.all(i)
    }
}
class Ba {
    constructor(e) {
        this.parser = e,
        this.name = Fa.KHR_MATERIALS_EMISSIVE_STRENGTH
    }
    extendMaterialParams(e, t) {
        const n = this.parser.json.materials[e];
        if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
        const i = n.extensions[this.name].emissiveStrength;
        return void 0 !== i && (t.emissiveIntensity = i),
        Promise.resolve()
    }
}
class Ha {
    constructor(e) {
        this.parser = e,
        this.name = Fa.KHR_MATERIALS_CLEARCOAT
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? Ss : null
    }
    extendMaterialParams(e, t) {
        const n = this.parser
          , i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const r = []
          , s = i.extensions[this.name];
        if (void 0 !== s.clearcoatFactor && (t.clearcoat = s.clearcoatFactor),
        void 0 !== s.clearcoatTexture && r.push(n.assignTexture(t, "clearcoatMap", s.clearcoatTexture)),
        void 0 !== s.clearcoatRoughnessFactor && (t.clearcoatRoughness = s.clearcoatRoughnessFactor),
        void 0 !== s.clearcoatRoughnessTexture && r.push(n.assignTexture(t, "clearcoatRoughnessMap", s.clearcoatRoughnessTexture)),
        void 0 !== s.clearcoatNormalTexture && (r.push(n.assignTexture(t, "clearcoatNormalMap", s.clearcoatNormalTexture)),
        void 0 !== s.clearcoatNormalTexture.scale)) {
            const e = s.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new M(e,e)
        }
        return Promise.all(r)
    }
}
class Va {
    constructor(e) {
        this.parser = e,
        this.name = Fa.KHR_MATERIALS_IRIDESCENCE
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? Ss : null
    }
    extendMaterialParams(e, t) {
        const n = this.parser
          , i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const r = []
          , s = i.extensions[this.name];
        return void 0 !== s.iridescenceFactor && (t.iridescence = s.iridescenceFactor),
        void 0 !== s.iridescenceTexture && r.push(n.assignTexture(t, "iridescenceMap", s.iridescenceTexture)),
        void 0 !== s.iridescenceIor && (t.iridescenceIOR = s.iridescenceIor),
        void 0 === t.iridescenceThicknessRange && (t.iridescenceThicknessRange = [100, 400]),
        void 0 !== s.iridescenceThicknessMinimum && (t.iridescenceThicknessRange[0] = s.iridescenceThicknessMinimum),
        void 0 !== s.iridescenceThicknessMaximum && (t.iridescenceThicknessRange[1] = s.iridescenceThicknessMaximum),
        void 0 !== s.iridescenceThicknessTexture && r.push(n.assignTexture(t, "iridescenceThicknessMap", s.iridescenceThicknessTexture)),
        Promise.all(r)
    }
}
class Ga {
    constructor(e) {
        this.parser = e,
        this.name = Fa.KHR_MATERIALS_SHEEN
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? Ss : null
    }
    extendMaterialParams(e, t) {
        const n = this.parser
          , i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const r = [];
        t.sheenColor = new z(0,0,0),
        t.sheenRoughness = 0,
        t.sheen = 1;
        const s = i.extensions[this.name];
        return void 0 !== s.sheenColorFactor && t.sheenColor.fromArray(s.sheenColorFactor),
        void 0 !== s.sheenRoughnessFactor && (t.sheenRoughness = s.sheenRoughnessFactor),
        void 0 !== s.sheenColorTexture && r.push(n.assignTexture(t, "sheenColorMap", s.sheenColorTexture, 3001)),
        void 0 !== s.sheenRoughnessTexture && r.push(n.assignTexture(t, "sheenRoughnessMap", s.sheenRoughnessTexture)),
        Promise.all(r)
    }
}
class Wa {
    constructor(e) {
        this.parser = e,
        this.name = Fa.KHR_MATERIALS_TRANSMISSION
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? Ss : null
    }
    extendMaterialParams(e, t) {
        const n = this.parser
          , i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const r = []
          , s = i.extensions[this.name];
        return void 0 !== s.transmissionFactor && (t.transmission = s.transmissionFactor),
        void 0 !== s.transmissionTexture && r.push(n.assignTexture(t, "transmissionMap", s.transmissionTexture)),
        Promise.all(r)
    }
}
class ja {
    constructor(e) {
        this.parser = e,
        this.name = Fa.KHR_MATERIALS_VOLUME
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? Ss : null
    }
    extendMaterialParams(e, t) {
        const n = this.parser
          , i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const r = []
          , s = i.extensions[this.name];
        t.thickness = void 0 !== s.thicknessFactor ? s.thicknessFactor : 0,
        void 0 !== s.thicknessTexture && r.push(n.assignTexture(t, "thicknessMap", s.thicknessTexture)),
        t.attenuationDistance = s.attenuationDistance || 0;
        const a = s.attenuationColor || [1, 1, 1];
        return t.attenuationColor = new z(a[0],a[1],a[2]),
        Promise.all(r)
    }
}
class qa {
    constructor(e) {
        this.parser = e,
        this.name = Fa.KHR_MATERIALS_IOR
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? Ss : null
    }
    extendMaterialParams(e, t) {
        const n = this.parser.json.materials[e];
        if (!n.extensions || !n.extensions[this.name])
            return Promise.resolve();
        const i = n.extensions[this.name];
        return t.ior = void 0 !== i.ior ? i.ior : 1.5,
        Promise.resolve()
    }
}
class Xa {
    constructor(e) {
        this.parser = e,
        this.name = Fa.KHR_MATERIALS_SPECULAR
    }
    getMaterialType(e) {
        const t = this.parser.json.materials[e];
        return t.extensions && t.extensions[this.name] ? Ss : null
    }
    extendMaterialParams(e, t) {
        const n = this.parser
          , i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const r = []
          , s = i.extensions[this.name];
        t.specularIntensity = void 0 !== s.specularFactor ? s.specularFactor : 1,
        void 0 !== s.specularTexture && r.push(n.assignTexture(t, "specularIntensityMap", s.specularTexture));
        const a = s.specularColorFactor || [1, 1, 1];
        return t.specularColor = new z(a[0],a[1],a[2]),
        void 0 !== s.specularColorTexture && r.push(n.assignTexture(t, "specularColorMap", s.specularColorTexture, 3001)),
        Promise.all(r)
    }
}
class Ya {
    constructor(e) {
        this.parser = e,
        this.name = Fa.KHR_TEXTURE_BASISU
    }
    loadTexture(e) {
        const t = this.parser
          , n = t.json
          , i = n.textures[e];
        if (!i.extensions || !i.extensions[this.name])
            return null;
        const r = i.extensions[this.name]
          , s = t.options.ktx2Loader;
        if (!s) {
            if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
                throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return null
        }
        return t.loadTextureImage(e, r.source, s)
    }
}
class $a {
    constructor(e) {
        this.parser = e,
        this.name = Fa.EXT_TEXTURE_WEBP,
        this.isSupported = null
    }
    loadTexture(e) {
        const t = this.name
          , n = this.parser
          , i = n.json
          , r = i.textures[e];
        if (!r.extensions || !r.extensions[t])
            return null;
        const s = r.extensions[t]
          , a = i.images[s.source];
        let o = n.textureLoader;
        if (a.uri) {
            const e = n.options.manager.getHandler(a.uri);
            null !== e && (o = e)
        }
        return this.detectSupport().then((function(r) {
            if (r)
                return n.loadTextureImage(e, s.source, o);
            if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
                throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
            return n.loadTexture(e)
        }
        ))
    }
    detectSupport() {
        return this.isSupported || (this.isSupported = new Promise((function(e) {
            const t = new Image;
            t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
            t.onload = t.onerror = function() {
                e(1 === t.height)
            }
        }
        ))),
        this.isSupported
    }
}
class Ka {
    constructor(e) {
        this.name = Fa.EXT_MESHOPT_COMPRESSION,
        this.parser = e
    }
    loadBufferView(e) {
        const t = this.parser.json
          , n = t.bufferViews[e];
        if (n.extensions && n.extensions[this.name]) {
            const e = n.extensions[this.name]
              , i = this.parser.getDependency("buffer", e.buffer)
              , r = this.parser.options.meshoptDecoder;
            if (!r || !r.supported) {
                if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
                    throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                return null
            }
            return Promise.all([i, r.ready]).then((function(t) {
                const n = e.byteOffset || 0
                  , i = e.byteLength || 0
                  , s = e.count
                  , a = e.byteStride
                  , o = new ArrayBuffer(s * a)
                  , l = new Uint8Array(t[0],n,i);
                return r.decodeGltfBuffer(new Uint8Array(o), s, a, l, e.mode, e.filter),
                o
            }
            ))
        }
        return null
    }
}
const Za = "glTF"
  , Ja = 1313821514
  , Qa = 5130562;
class eo {
    constructor(e) {
        this.name = Fa.KHR_BINARY_GLTF,
        this.content = null,
        this.body = null;
        const t = new DataView(e,0,12);
        if (this.header = {
            magic: ca.decodeText(new Uint8Array(e.slice(0, 4))),
            version: t.getUint32(4, !0),
            length: t.getUint32(8, !0)
        },
        this.header.magic !== Za)
            throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
        if (this.header.version < 2)
            throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
        const n = this.header.length - 12
          , i = new DataView(e,12);
        let r = 0;
        for (; r < n; ) {
            const t = i.getUint32(r, !0);
            r += 4;
            const n = i.getUint32(r, !0);
            if (r += 4,
            n === Ja) {
                const n = new Uint8Array(e,12 + r,t);
                this.content = ca.decodeText(n)
            } else if (n === Qa) {
                const n = 12 + r;
                this.body = e.slice(n, n + t)
            }
            r += t
        }
        if (null === this.content)
            throw new Error("THREE.GLTFLoader: JSON content not found.")
    }
}
class to {
    constructor(e, t) {
        if (!t)
            throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
        this.name = Fa.KHR_DRACO_MESH_COMPRESSION,
        this.json = e,
        this.dracoLoader = t,
        this.dracoLoader.preload()
    }
    decodePrimitive(e, t) {
        const n = this.json
          , i = this.dracoLoader
          , r = e.extensions[this.name].bufferView
          , s = e.extensions[this.name].attributes
          , a = {}
          , o = {}
          , l = {};
        for (const e in s) {
            const t = Mo[e] || e.toLowerCase();
            a[t] = s[e]
        }
        for (const t in e.attributes) {
            const i = Mo[t] || t.toLowerCase();
            if (void 0 !== s[t]) {
                const r = n.accessors[e.attributes[t]]
                  , s = vo[r.componentType];
                l[i] = s,
                o[i] = !0 === r.normalized
            }
        }
        return t.getDependency("bufferView", r).then((function(e) {
            return new Promise((function(t) {
                i.decodeDracoFile(e, (function(e) {
                    for (const t in e.attributes) {
                        const n = e.attributes[t]
                          , i = o[t];
                        void 0 !== i && (n.normalized = i)
                    }
                    t(e)
                }
                ), a, l)
            }
            ))
        }
        ))
    }
}
class no {
    constructor() {
        this.name = Fa.KHR_TEXTURE_TRANSFORM
    }
    extendTexture(e, t) {
        return void 0 !== t.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'),
        void 0 === t.offset && void 0 === t.rotation && void 0 === t.scale || (e = e.clone(),
        void 0 !== t.offset && e.offset.fromArray(t.offset),
        void 0 !== t.rotation && (e.rotation = t.rotation),
        void 0 !== t.scale && e.repeat.fromArray(t.scale),
        e.needsUpdate = !0),
        e
    }
}
class io extends ws {
    constructor(e) {
        super(),
        this.isGLTFSpecularGlossinessMaterial = !0;
        const t = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n")
          , n = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n")
          , i = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n")
          , r = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n")
          , s = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );", "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );", "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );", "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.", "material.roughness += geometryRoughness;", "material.roughness = min( material.roughness, 1.0 );", "material.specularColor = specularFactor;"].join("\n")
          , a = {
            specular: {
                value: (new z).setHex(16777215)
            },
            glossiness: {
                value: 1
            },
            specularMap: {
                value: null
            },
            glossinessMap: {
                value: null
            }
        };
        this._extraUniforms = a,
        this.onBeforeCompile = function(e) {
            for (const t in a)
                e.uniforms[t] = a[t];
            e.fragmentShader = e.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", t).replace("#include <metalnessmap_pars_fragment>", n).replace("#include <roughnessmap_fragment>", i).replace("#include <metalnessmap_fragment>", r).replace("#include <lights_physical_fragment>", s)
        }
        ,
        Object.defineProperties(this, {
            specular: {
                get: function() {
                    return a.specular.value
                },
                set: function(e) {
                    a.specular.value = e
                }
            },
            specularMap: {
                get: function() {
                    return a.specularMap.value
                },
                set: function(e) {
                    a.specularMap.value = e,
                    e ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP
                }
            },
            glossiness: {
                get: function() {
                    return a.glossiness.value
                },
                set: function(e) {
                    a.glossiness.value = e
                }
            },
            glossinessMap: {
                get: function() {
                    return a.glossinessMap.value
                },
                set: function(e) {
                    a.glossinessMap.value = e,
                    e ? (this.defines.USE_GLOSSINESSMAP = "",
                    this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP,
                    delete this.defines.USE_UV)
                }
            }
        }),
        delete this.metalness,
        delete this.roughness,
        delete this.metalnessMap,
        delete this.roughnessMap,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.specularMap = e.specularMap,
        this.specular.copy(e.specular),
        this.glossinessMap = e.glossinessMap,
        this.glossiness = e.glossiness,
        delete this.metalness,
        delete this.roughness,
        delete this.metalnessMap,
        delete this.roughnessMap,
        this
    }
}
class ro {
    constructor() {
        this.name = Fa.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
        this.specularGlossinessParams = ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "normalMapType", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity"]
    }
    getMaterialType() {
        return io
    }
    extendParams(e, t, n) {
        const i = t.extensions[this.name];
        e.color = new z(1,1,1),
        e.opacity = 1;
        const r = [];
        if (Array.isArray(i.diffuseFactor)) {
            const t = i.diffuseFactor;
            e.color.fromArray(t),
            e.opacity = t[3]
        }
        if (void 0 !== i.diffuseTexture && r.push(n.assignTexture(e, "map", i.diffuseTexture, 3001)),
        e.emissive = new z(0,0,0),
        e.glossiness = void 0 !== i.glossinessFactor ? i.glossinessFactor : 1,
        e.specular = new z(1,1,1),
        Array.isArray(i.specularFactor) && e.specular.fromArray(i.specularFactor),
        void 0 !== i.specularGlossinessTexture) {
            const t = i.specularGlossinessTexture;
            r.push(n.assignTexture(e, "glossinessMap", t)),
            r.push(n.assignTexture(e, "specularMap", t, 3001))
        }
        return Promise.all(r)
    }
    createMaterial(e) {
        const t = new io(e);
        return t.fog = !0,
        t.color = e.color,
        t.map = void 0 === e.map ? null : e.map,
        t.lightMap = null,
        t.lightMapIntensity = 1,
        t.aoMap = void 0 === e.aoMap ? null : e.aoMap,
        t.aoMapIntensity = 1,
        t.emissive = e.emissive,
        t.emissiveIntensity = void 0 === e.emissiveIntensity ? 1 : e.emissiveIntensity,
        t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap,
        t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap,
        t.bumpScale = 1,
        t.normalMap = void 0 === e.normalMap ? null : e.normalMap,
        t.normalMapType = 0,
        e.normalScale && (t.normalScale = e.normalScale),
        t.displacementMap = null,
        t.displacementScale = 1,
        t.displacementBias = 0,
        t.specularMap = void 0 === e.specularMap ? null : e.specularMap,
        t.specular = e.specular,
        t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap,
        t.glossiness = e.glossiness,
        t.alphaMap = null,
        t.envMap = void 0 === e.envMap ? null : e.envMap,
        t.envMapIntensity = 1,
        t
    }
}
class so {
    constructor() {
        this.name = Fa.KHR_MESH_QUANTIZATION
    }
}
class ao extends As {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    copySampleValue_(e) {
        const t = this.resultBuffer
          , n = this.sampleValues
          , i = this.valueSize
          , r = e * i * 3 + i;
        for (let e = 0; e !== i; e++)
            t[e] = n[r + e];
        return t
    }
}
ao.prototype.interpolate_ = function(e, t, n, i) {
    const r = this.resultBuffer
      , s = this.sampleValues
      , a = this.valueSize
      , o = 2 * a
      , l = 3 * a
      , c = i - t
      , h = (n - t) / c
      , u = h * h
      , d = u * h
      , p = e * l
      , m = p - l
      , f = -2 * d + 3 * u
      , g = d - u
      , v = 1 - f
      , _ = g - u + h;
    for (let e = 0; e !== a; e++) {
        const t = s[m + e + a]
          , n = s[m + e + o] * c
          , i = s[p + e + a]
          , l = s[p + e] * c;
        r[e] = v * t + _ * n + f * i + g * l
    }
    return r
}
;
const oo = new q;
class lo extends ao {
    interpolate_(e, t, n, i) {
        const r = super.interpolate_(e, t, n, i);
        return oo.fromArray(r).normalize().toArray(r),
        r
    }
}
const co = 0
  , ho = 1
  , uo = 2
  , po = 3
  , mo = 4
  , fo = 5
  , go = 6
  , vo = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
}
  , _o = {
    9728: 1003,
    9729: 1006,
    9984: 1004,
    9985: 1007,
    9986: 1005,
    9987: 1008
}
  , xo = {
    33071: 1001,
    33648: 1002,
    10497: 1e3
}
  , yo = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
}
  , Mo = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
}
  , bo = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
}
  , wo = {
    CUBICSPLINE: void 0,
    LINEAR: 2301,
    STEP: 2300
}
  , So = "OPAQUE"
  , To = "MASK"
  , Eo = "BLEND";
function Ao(e, t, n) {
    for (const i in n.extensions)
        void 0 === e[i] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {},
        t.userData.gltfExtensions[i] = n.extensions[i])
}
function Lo(e, t) {
    void 0 !== t.extras && ("object" == typeof t.extras ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
}
function Co(e, t) {
    if (e.updateMorphTargets(),
    void 0 !== t.weights)
        for (let n = 0, i = t.weights.length; n < i; n++)
            e.morphTargetInfluences[n] = t.weights[n];
    if (t.extras && Array.isArray(t.extras.targetNames)) {
        const n = t.extras.targetNames;
        if (e.morphTargetInfluences.length === n.length) {
            e.morphTargetDictionary = {};
            for (let t = 0, i = n.length; t < i; t++)
                e.morphTargetDictionary[n[t]] = t
        } else
            console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
    }
}
function Ro(e) {
    const t = e.extensions && e.extensions[Fa.KHR_DRACO_MESH_COMPRESSION];
    let n;
    return n = t ? "draco:" + t.bufferView + ":" + t.indices + ":" + Po(t.attributes) : e.indices + ":" + Po(e.attributes) + ":" + e.mode,
    n
}
function Po(e) {
    let t = "";
    const n = Object.keys(e).sort();
    for (let i = 0, r = n.length; i < r; i++)
        t += n[i] + ":" + e[n[i]] + ";";
    return t
}
function Do(e) {
    switch (e) {
    case Int8Array:
        return 1 / 127;
    case Uint8Array:
        return 1 / 255;
    case Int16Array:
        return 1 / 32767;
    case Uint16Array:
        return 1 / 65535;
    default:
        throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
    }
}
class Io {
    constructor(e={}, t={}) {
        this.json = e,
        this.extensions = {},
        this.plugins = {},
        this.options = t,
        this.cache = new Oa,
        this.associations = new Map,
        this.primitiveCache = {},
        this.meshCache = {
            refs: {},
            uses: {}
        },
        this.cameraCache = {
            refs: {},
            uses: {}
        },
        this.lightCache = {
            refs: {},
            uses: {}
        },
        this.sourceCache = {},
        this.textureCache = {},
        this.nodeNamesUsed = {};
        const n = !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
          , i = navigator.userAgent.indexOf("Firefox") > -1
          , r = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
        "undefined" == typeof createImageBitmap || n || i && r < 98 ? this.textureLoader = new Ys(this.options.manager) : this.textureLoader = new ua(this.options.manager),
        this.textureLoader.setCrossOrigin(this.options.crossOrigin),
        this.textureLoader.setRequestHeader(this.options.requestHeader),
        this.fileLoader = new qs(this.options.manager),
        this.fileLoader.setResponseType("arraybuffer"),
        "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
    }
    setExtensions(e) {
        this.extensions = e
    }
    setPlugins(e) {
        this.plugins = e
    }
    parse(e, t) {
        const n = this
          , i = this.json
          , r = this.extensions;
        this.cache.removeAll(),
        this._invokeAll((function(e) {
            return e._markDefs && e._markDefs()
        }
        )),
        Promise.all(this._invokeAll((function(e) {
            return e.beforeRoot && e.beforeRoot()
        }
        ))).then((function() {
            return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")])
        }
        )).then((function(t) {
            const s = {
                scene: t[0][i.scene || 0],
                scenes: t[0],
                animations: t[1],
                cameras: t[2],
                asset: i.asset,
                parser: n,
                userData: {}
            };
            Ao(r, s, i),
            Lo(s, i),
            Promise.all(n._invokeAll((function(e) {
                return e.afterRoot && e.afterRoot(s)
            }
            ))).then((function() {
                e(s)
            }
            ))
        }
        )).catch(t)
    }
    _markDefs() {
        const e = this.json.nodes || []
          , t = this.json.skins || []
          , n = this.json.meshes || [];
        for (let n = 0, i = t.length; n < i; n++) {
            const i = t[n].joints;
            for (let t = 0, n = i.length; t < n; t++)
                e[i[t]].isBone = !0
        }
        for (let t = 0, i = e.length; t < i; t++) {
            const i = e[t];
            void 0 !== i.mesh && (this._addNodeRef(this.meshCache, i.mesh),
            void 0 !== i.skin && (n[i.mesh].isSkinnedMesh = !0)),
            void 0 !== i.camera && this._addNodeRef(this.cameraCache, i.camera)
        }
    }
    _addNodeRef(e, t) {
        void 0 !== t && (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0),
        e.refs[t]++)
    }
    _getNodeRef(e, t, n) {
        if (e.refs[t] <= 1)
            return n;
        const i = n.clone()
          , r = (e,t)=>{
            const n = this.associations.get(e);
            null != n && this.associations.set(t, n);
            for (const [n,i] of e.children.entries())
                r(i, t.children[n])
        }
        ;
        return r(n, i),
        i.name += "_instance_" + e.uses[t]++,
        i
    }
    _invokeOne(e) {
        const t = Object.values(this.plugins);
        t.push(this);
        for (let n = 0; n < t.length; n++) {
            const i = e(t[n]);
            if (i)
                return i
        }
        return null
    }
    _invokeAll(e) {
        const t = Object.values(this.plugins);
        t.unshift(this);
        const n = [];
        for (let i = 0; i < t.length; i++) {
            const r = e(t[i]);
            r && n.push(r)
        }
        return n
    }
    getDependency(e, t) {
        const n = e + ":" + t;
        let i = this.cache.get(n);
        if (!i) {
            switch (e) {
            case "scene":
                i = this.loadScene(t);
                break;
            case "node":
                i = this.loadNode(t);
                break;
            case "mesh":
                i = this._invokeOne((function(e) {
                    return e.loadMesh && e.loadMesh(t)
                }
                ));
                break;
            case "accessor":
                i = this.loadAccessor(t);
                break;
            case "bufferView":
                i = this._invokeOne((function(e) {
                    return e.loadBufferView && e.loadBufferView(t)
                }
                ));
                break;
            case "buffer":
                i = this.loadBuffer(t);
                break;
            case "material":
                i = this._invokeOne((function(e) {
                    return e.loadMaterial && e.loadMaterial(t)
                }
                ));
                break;
            case "texture":
                i = this._invokeOne((function(e) {
                    return e.loadTexture && e.loadTexture(t)
                }
                ));
                break;
            case "skin":
                i = this.loadSkin(t);
                break;
            case "animation":
                i = this._invokeOne((function(e) {
                    return e.loadAnimation && e.loadAnimation(t)
                }
                ));
                break;
            case "camera":
                i = this.loadCamera(t);
                break;
            default:
                throw new Error("Unknown type: " + e)
            }
            this.cache.add(n, i)
        }
        return i
    }
    getDependencies(e) {
        let t = this.cache.get(e);
        if (!t) {
            const n = this
              , i = this.json[e + ("mesh" === e ? "es" : "s")] || [];
            t = Promise.all(i.map((function(t, i) {
                return n.getDependency(e, i)
            }
            ))),
            this.cache.add(e, t)
        }
        return t
    }
    loadBuffer(e) {
        const t = this.json.buffers[e]
          , n = this.fileLoader;
        if (t.type && "arraybuffer" !== t.type)
            throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
        if (void 0 === t.uri && 0 === e)
            return Promise.resolve(this.extensions[Fa.KHR_BINARY_GLTF].body);
        const i = this.options;
        return new Promise((function(e, r) {
            n.load(ca.resolveURL(t.uri, i.path), e, void 0, (function() {
                r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
            }
            ))
        }
        ))
    }
    loadBufferView(e) {
        const t = this.json.bufferViews[e];
        return this.getDependency("buffer", t.buffer).then((function(e) {
            const n = t.byteLength || 0
              , i = t.byteOffset || 0;
            return e.slice(i, i + n)
        }
        ))
    }
    loadAccessor(e) {
        const t = this
          , n = this.json
          , i = this.json.accessors[e];
        if (void 0 === i.bufferView && void 0 === i.sparse)
            return Promise.resolve(null);
        const r = [];
        return void 0 !== i.bufferView ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null),
        void 0 !== i.sparse && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)),
        r.push(this.getDependency("bufferView", i.sparse.values.bufferView))),
        Promise.all(r).then((function(e) {
            const r = e[0]
              , s = yo[i.type]
              , a = vo[i.componentType]
              , o = a.BYTES_PER_ELEMENT
              , l = o * s
              , c = i.byteOffset || 0
              , h = void 0 !== i.bufferView ? n.bufferViews[i.bufferView].byteStride : void 0
              , u = !0 === i.normalized;
            let d, p;
            if (h && h !== l) {
                const e = Math.floor(c / h)
                  , n = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + e + ":" + i.count;
                let l = t.cache.get(n);
                l || (d = new a(r,e * h,i.count * h / o),
                l = new Hr(d,h / o),
                t.cache.add(n, l)),
                p = new Gr(l,s,c % h / o,u)
            } else
                d = null === r ? new a(i.count * s) : new a(r,c,i.count * s),
                p = new dt(d,s,u);
            if (void 0 !== i.sparse) {
                const t = yo.SCALAR
                  , n = vo[i.sparse.indices.componentType]
                  , o = i.sparse.indices.byteOffset || 0
                  , l = i.sparse.values.byteOffset || 0
                  , c = new n(e[1],o,i.sparse.count * t)
                  , h = new a(e[2],l,i.sparse.count * s);
                null !== r && (p = new dt(p.array.slice(),p.itemSize,p.normalized));
                for (let e = 0, t = c.length; e < t; e++) {
                    const t = c[e];
                    if (p.setX(t, h[e * s]),
                    s >= 2 && p.setY(t, h[e * s + 1]),
                    s >= 3 && p.setZ(t, h[e * s + 2]),
                    s >= 4 && p.setW(t, h[e * s + 3]),
                    s >= 5)
                        throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                }
            }
            return p
        }
        ))
    }
    loadTexture(e) {
        const t = this.json
          , n = this.options
          , i = t.textures[e].source
          , r = t.images[i];
        let s = this.textureLoader;
        if (r.uri) {
            const e = n.manager.getHandler(r.uri);
            null !== e && (s = e)
        }
        return this.loadTextureImage(e, i, s)
    }
    loadTextureImage(e, t, n) {
        const i = this
          , r = this.json
          , s = r.textures[e]
          , a = r.images[t]
          , o = (a.uri || a.bufferView) + ":" + s.sampler;
        if (this.textureCache[o])
            return this.textureCache[o];
        const l = this.loadImageSource(t, n).then((function(t) {
            t.flipY = !1,
            s.name && (t.name = s.name);
            const n = (r.samplers || {})[s.sampler] || {};
            return t.magFilter = _o[n.magFilter] || 1006,
            t.minFilter = _o[n.minFilter] || 1008,
            t.wrapS = xo[n.wrapS] || 1e3,
            t.wrapT = xo[n.wrapT] || 1e3,
            i.associations.set(t, {
                textures: e
            }),
            t
        }
        )).catch((function() {
            return null
        }
        ));
        return this.textureCache[o] = l,
        l
    }
    loadImageSource(e, t) {
        const n = this.json
          , i = this.options;
        if (void 0 !== this.sourceCache[e])
            return this.sourceCache[e].then((e=>e.clone()));
        const r = n.images[e]
          , s = self.URL || self.webkitURL;
        let a = r.uri || ""
          , o = !1;
        if (void 0 !== r.bufferView)
            a = this.getDependency("bufferView", r.bufferView).then((function(e) {
                o = !0;
                const t = new Blob([e],{
                    type: r.mimeType
                });
                return a = s.createObjectURL(t),
                a
            }
            ));
        else if (void 0 === r.uri)
            throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
        const l = Promise.resolve(a).then((function(e) {
            return new Promise((function(n, r) {
                let s = n;
                !0 === t.isImageBitmapLoader && (s = function(e) {
                    const t = new H(e);
                    t.needsUpdate = !0,
                    n(t)
                }
                ),
                t.load(ca.resolveURL(e, i.path), s, void 0, r)
            }
            ))
        }
        )).then((function(e) {
            var t;
            return !0 === o && s.revokeObjectURL(a),
            e.userData.mimeType = r.mimeType || ((t = r.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/) ? "image/jpeg" : t.search(/\.webp($|\?)/i) > 0 || 0 === t.search(/^data\:image\/webp/) ? "image/webp" : "image/png"),
            e
        }
        )).catch((function(e) {
            throw console.error("THREE.GLTFLoader: Couldn't load texture", a),
            e
        }
        ));
        return this.sourceCache[e] = l,
        l
    }
    assignTexture(e, t, n, i) {
        const r = this;
        return this.getDependency("texture", n.index).then((function(s) {
            if (void 0 === n.texCoord || 0 == n.texCoord || "aoMap" === t && 1 == n.texCoord || console.warn("THREE.GLTFLoader: Custom UV set " + n.texCoord + " for texture " + t + " not yet supported."),
            r.extensions[Fa.KHR_TEXTURE_TRANSFORM]) {
                const e = void 0 !== n.extensions ? n.extensions[Fa.KHR_TEXTURE_TRANSFORM] : void 0;
                if (e) {
                    const t = r.associations.get(s);
                    s = r.extensions[Fa.KHR_TEXTURE_TRANSFORM].extendTexture(s, e),
                    r.associations.set(s, t)
                }
            }
            return void 0 !== i && (s.encoding = i),
            e[t] = s,
            s
        }
        ))
    }
    assignFinalMaterial(e) {
        const t = e.geometry;
        let n = e.material;
        const i = void 0 === t.attributes.tangent
          , r = void 0 !== t.attributes.color
          , s = void 0 === t.attributes.normal;
        if (e.isPoints) {
            const e = "PointsMaterial:" + n.uuid;
            let t = this.cache.get(e);
            t || (t = new ms,
            lt.prototype.copy.call(t, n),
            t.color.copy(n.color),
            t.map = n.map,
            t.sizeAttenuation = !1,
            this.cache.add(e, t)),
            n = t
        } else if (e.isLine) {
            const e = "LineBasicMaterial:" + n.uuid;
            let t = this.cache.get(e);
            t || (t = new is,
            lt.prototype.copy.call(t, n),
            t.color.copy(n.color),
            this.cache.add(e, t)),
            n = t
        }
        if (i || r || s) {
            let e = "ClonedMaterial:" + n.uuid + ":";
            n.isGLTFSpecularGlossinessMaterial && (e += "specular-glossiness:"),
            i && (e += "derivative-tangents:"),
            r && (e += "vertex-colors:"),
            s && (e += "flat-shading:");
            let t = this.cache.get(e);
            t || (t = n.clone(),
            r && (t.vertexColors = !0),
            s && (t.flatShading = !0),
            i && (t.normalScale && (t.normalScale.y *= -1),
            t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
            this.cache.add(e, t),
            this.associations.set(t, this.associations.get(n))),
            n = t
        }
        n.aoMap && void 0 === t.attributes.uv2 && void 0 !== t.attributes.uv && t.setAttribute("uv2", t.attributes.uv),
        e.material = n
    }
    getMaterialType() {
        return ws
    }
    loadMaterial(e) {
        const t = this
          , n = this.json
          , i = this.extensions
          , r = n.materials[e];
        let s;
        const a = {}
          , o = r.extensions || {}
          , l = [];
        if (o[Fa.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            const e = i[Fa.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            s = e.getMaterialType(),
            l.push(e.extendParams(a, r, t))
        } else if (o[Fa.KHR_MATERIALS_UNLIT]) {
            const e = i[Fa.KHR_MATERIALS_UNLIT];
            s = e.getMaterialType(),
            l.push(e.extendParams(a, r, t))
        } else {
            const n = r.pbrMetallicRoughness || {};
            if (a.color = new z(1,1,1),
            a.opacity = 1,
            Array.isArray(n.baseColorFactor)) {
                const e = n.baseColorFactor;
                a.color.fromArray(e),
                a.opacity = e[3]
            }
            void 0 !== n.baseColorTexture && l.push(t.assignTexture(a, "map", n.baseColorTexture, 3001)),
            a.metalness = void 0 !== n.metallicFactor ? n.metallicFactor : 1,
            a.roughness = void 0 !== n.roughnessFactor ? n.roughnessFactor : 1,
            void 0 !== n.metallicRoughnessTexture && (l.push(t.assignTexture(a, "metalnessMap", n.metallicRoughnessTexture)),
            l.push(t.assignTexture(a, "roughnessMap", n.metallicRoughnessTexture))),
            s = this._invokeOne((function(t) {
                return t.getMaterialType && t.getMaterialType(e)
            }
            )),
            l.push(Promise.all(this._invokeAll((function(t) {
                return t.extendMaterialParams && t.extendMaterialParams(e, a)
            }
            ))))
        }
        !0 === r.doubleSided && (a.side = 2);
        const c = r.alphaMode || So;
        if (c === Eo ? (a.transparent = !0,
        a.depthWrite = !1) : (a.transparent = !1,
        c === To && (a.alphaTest = void 0 !== r.alphaCutoff ? r.alphaCutoff : .5)),
        void 0 !== r.normalTexture && s !== ct && (l.push(t.assignTexture(a, "normalMap", r.normalTexture)),
        a.normalScale = new M(1,1),
        void 0 !== r.normalTexture.scale)) {
            const e = r.normalTexture.scale;
            a.normalScale.set(e, e)
        }
        return void 0 !== r.occlusionTexture && s !== ct && (l.push(t.assignTexture(a, "aoMap", r.occlusionTexture)),
        void 0 !== r.occlusionTexture.strength && (a.aoMapIntensity = r.occlusionTexture.strength)),
        void 0 !== r.emissiveFactor && s !== ct && (a.emissive = (new z).fromArray(r.emissiveFactor)),
        void 0 !== r.emissiveTexture && s !== ct && l.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, 3001)),
        Promise.all(l).then((function() {
            let n;
            return n = s === io ? i[Fa.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a) : new s(a),
            r.name && (n.name = r.name),
            Lo(n, r),
            t.associations.set(n, {
                materials: e
            }),
            r.extensions && Ao(i, n, r),
            n
        }
        ))
    }
    createUniqueName(e) {
        const t = ya.sanitizeNodeName(e || "");
        let n = t;
        for (let e = 1; this.nodeNamesUsed[n]; ++e)
            n = t + "_" + e;
        return this.nodeNamesUsed[n] = !0,
        n
    }
    loadGeometries(e) {
        const t = this
          , n = this.extensions
          , i = this.primitiveCache;
        function r(e) {
            return n[Fa.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then((function(n) {
                return zo(n, e, t)
            }
            ))
        }
        const s = [];
        for (let n = 0, a = e.length; n < a; n++) {
            const a = e[n]
              , o = Ro(a)
              , l = i[o];
            if (l)
                s.push(l.promise);
            else {
                let e;
                e = a.extensions && a.extensions[Fa.KHR_DRACO_MESH_COMPRESSION] ? r(a) : zo(new wt, a, t),
                i[o] = {
                    primitive: a,
                    promise: e
                },
                s.push(e)
            }
        }
        return Promise.all(s)
    }
    loadMesh(e) {
        const t = this
          , n = this.json
          , i = this.extensions
          , r = n.meshes[e]
          , s = r.primitives
          , a = [];
        for (let e = 0, t = s.length; e < t; e++) {
            const t = void 0 === s[e].material ? (void 0 === (o = this.cache).DefaultMaterial && (o.DefaultMaterial = new ws({
                color: 16777215,
                emissive: 0,
                metalness: 1,
                roughness: 1,
                transparent: !1,
                depthTest: !0,
                side: 0
            })),
            o.DefaultMaterial) : this.getDependency("material", s[e].material);
            a.push(t)
        }
        var o;
        return a.push(t.loadGeometries(s)),
        Promise.all(a).then((function(n) {
            const a = n.slice(0, n.length - 1)
              , o = n[n.length - 1]
              , l = [];
            for (let n = 0, c = o.length; n < c; n++) {
                const c = o[n]
                  , h = s[n];
                let u;
                const d = a[n];
                if (h.mode === mo || h.mode === fo || h.mode === go || void 0 === h.mode)
                    u = !0 === r.isSkinnedMesh ? new Kr(c,d) : new Ht(c,d),
                    !0 !== u.isSkinnedMesh || u.geometry.attributes.skinWeight.normalized || u.normalizeSkinWeights(),
                    h.mode === fo ? u.geometry = Oo(u.geometry, 1) : h.mode === go && (u.geometry = Oo(u.geometry, 2));
                else if (h.mode === ho)
                    u = new ds(c,d);
                else if (h.mode === po)
                    u = new cs(c,d);
                else if (h.mode === uo)
                    u = new ps(c,d);
                else {
                    if (h.mode !== co)
                        throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + h.mode);
                    u = new xs(c,d)
                }
                Object.keys(u.geometry.morphAttributes).length > 0 && Co(u, r),
                u.name = t.createUniqueName(r.name || "mesh_" + e),
                Lo(u, r),
                h.extensions && Ao(i, u, h),
                t.assignFinalMaterial(u),
                l.push(u)
            }
            for (let n = 0, i = l.length; n < i; n++)
                t.associations.set(l[n], {
                    meshes: e,
                    primitives: n
                });
            if (1 === l.length)
                return l[0];
            const c = new Ir;
            t.associations.set(c, {
                meshes: e
            });
            for (let e = 0, t = l.length; e < t; e++)
                c.add(l[e]);
            return c
        }
        ))
    }
    loadCamera(e) {
        let t;
        const n = this.json.cameras[e]
          , i = n[n.type];
        if (i)
            return "perspective" === n.type ? t = new $t(y.radToDeg(i.yfov),i.aspectRatio || 1,i.znear || 1,i.zfar || 2e6) : "orthographic" === n.type && (t = new xn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),
            n.name && (t.name = this.createUniqueName(n.name)),
            Lo(t, n),
            Promise.resolve(t);
        console.warn("THREE.GLTFLoader: Missing camera parameters.")
    }
    loadSkin(e) {
        const t = this.json.skins[e]
          , n = {
            joints: t.joints
        };
        return void 0 === t.inverseBindMatrices ? Promise.resolve(n) : this.getDependency("accessor", t.inverseBindMatrices).then((function(e) {
            return n.inverseBindMatrices = e,
            n
        }
        ))
    }
    loadAnimation(e) {
        const t = this.json.animations[e]
          , n = []
          , i = []
          , r = []
          , s = []
          , a = [];
        for (let e = 0, o = t.channels.length; e < o; e++) {
            const o = t.channels[e]
              , l = t.samplers[o.sampler]
              , c = o.target
              , h = void 0 !== c.node ? c.node : c.id
              , u = void 0 !== t.parameters ? t.parameters[l.input] : l.input
              , d = void 0 !== t.parameters ? t.parameters[l.output] : l.output;
            n.push(this.getDependency("node", h)),
            i.push(this.getDependency("accessor", u)),
            r.push(this.getDependency("accessor", d)),
            s.push(l),
            a.push(c)
        }
        return Promise.all([Promise.all(n), Promise.all(i), Promise.all(r), Promise.all(s), Promise.all(a)]).then((function(n) {
            const i = n[0]
              , r = n[1]
              , s = n[2]
              , a = n[3]
              , o = n[4]
              , l = [];
            for (let e = 0, t = i.length; e < t; e++) {
                const t = i[e]
                  , n = r[e]
                  , c = s[e]
                  , h = a[e]
                  , u = o[e];
                if (void 0 === t)
                    continue;
                let d;
                switch (t.updateMatrix(),
                t.matrixAutoUpdate = !0,
                bo[u.path]) {
                case bo.weights:
                    d = Ns;
                    break;
                case bo.rotation:
                    d = Os;
                    break;
                default:
                    d = Us
                }
                const p = t.name ? t.name : t.uuid
                  , m = void 0 !== h.interpolation ? wo[h.interpolation] : 2301
                  , f = [];
                bo[u.path] === bo.weights ? t.traverse((function(e) {
                    e.morphTargetInfluences && f.push(e.name ? e.name : e.uuid)
                }
                )) : f.push(p);
                let g = c.array;
                if (c.normalized) {
                    const e = Do(g.constructor)
                      , t = new Float32Array(g.length);
                    for (let n = 0, i = g.length; n < i; n++)
                        t[n] = g[n] * e;
                    g = t
                }
                for (let e = 0, t = f.length; e < t; e++) {
                    const t = new d(f[e] + "." + bo[u.path],n.array,g,m);
                    "CUBICSPLINE" === h.interpolation && (t.createInterpolant = function(e) {
                        return new (this instanceof Os ? lo : ao)(this.times,this.values,this.getValueSize() / 3,e)
                    }
                    ,
                    t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0),
                    l.push(t)
                }
            }
            const c = t.name ? t.name : "animation_" + e;
            return new ks(c,void 0,l)
        }
        ))
    }
    createNodeMesh(e) {
        const t = this.json
          , n = this
          , i = t.nodes[e];
        return void 0 === i.mesh ? null : n.getDependency("mesh", i.mesh).then((function(e) {
            const t = n._getNodeRef(n.meshCache, i.mesh, e);
            return void 0 !== i.weights && t.traverse((function(e) {
                if (e.isMesh)
                    for (let t = 0, n = i.weights.length; t < n; t++)
                        e.morphTargetInfluences[t] = i.weights[t]
            }
            )),
            t
        }
        ))
    }
    loadNode(e) {
        const t = this.json
          , n = this.extensions
          , i = this
          , r = t.nodes[e]
          , s = r.name ? i.createUniqueName(r.name) : "";
        return function() {
            const t = []
              , n = i._invokeOne((function(t) {
                return t.createNodeMesh && t.createNodeMesh(e)
            }
            ));
            return n && t.push(n),
            void 0 !== r.camera && t.push(i.getDependency("camera", r.camera).then((function(e) {
                return i._getNodeRef(i.cameraCache, r.camera, e)
            }
            ))),
            i._invokeAll((function(t) {
                return t.createNodeAttachment && t.createNodeAttachment(e)
            }
            )).forEach((function(e) {
                t.push(e)
            }
            )),
            Promise.all(t)
        }().then((function(t) {
            let a;
            if (a = !0 === r.isBone ? new Zr : t.length > 1 ? new Ir : 1 === t.length ? t[0] : new $e,
            a !== t[0])
                for (let e = 0, n = t.length; e < n; e++)
                    a.add(t[e]);
            if (r.name && (a.userData.name = r.name,
            a.name = s),
            Lo(a, r),
            r.extensions && Ao(n, a, r),
            void 0 !== r.matrix) {
                const e = new Se;
                e.fromArray(r.matrix),
                a.applyMatrix4(e)
            } else
                void 0 !== r.translation && a.position.fromArray(r.translation),
                void 0 !== r.rotation && a.quaternion.fromArray(r.rotation),
                void 0 !== r.scale && a.scale.fromArray(r.scale);
            return i.associations.has(a) || i.associations.set(a, {}),
            i.associations.get(a).nodes = e,
            a
        }
        ))
    }
    loadScene(e) {
        const t = this.json
          , n = this.extensions
          , i = this.json.scenes[e]
          , r = this
          , s = new Ir;
        i.name && (s.name = r.createUniqueName(i.name)),
        Lo(s, i),
        i.extensions && Ao(n, s, i);
        const a = i.nodes || []
          , o = [];
        for (let e = 0, n = a.length; e < n; e++)
            o.push(No(a[e], s, t, r));
        return Promise.all(o).then((function() {
            return r.associations = (e=>{
                const t = new Map;
                for (const [e,n] of r.associations)
                    (e instanceof lt || e instanceof H) && t.set(e, n);
                return e.traverse((e=>{
                    const n = r.associations.get(e);
                    null != n && t.set(e, n)
                }
                )),
                t
            }
            )(s),
            s
        }
        ))
    }
}
function No(e, t, n, i) {
    const r = n.nodes[e];
    return i.getDependency("node", e).then((function(e) {
        if (void 0 === r.skin)
            return e;
        let t;
        return i.getDependency("skin", r.skin).then((function(e) {
            t = e;
            const n = [];
            for (let e = 0, r = t.joints.length; e < r; e++)
                n.push(i.getDependency("node", t.joints[e]));
            return Promise.all(n)
        }
        )).then((function(n) {
            return e.traverse((function(e) {
                if (!e.isMesh)
                    return;
                const i = []
                  , r = [];
                for (let e = 0, s = n.length; e < s; e++) {
                    const s = n[e];
                    if (s) {
                        i.push(s);
                        const n = new Se;
                        void 0 !== t.inverseBindMatrices && n.fromArray(t.inverseBindMatrices.array, 16 * e),
                        r.push(n)
                    } else
                        console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[e])
                }
                e.bind(new ts(i,r), e.matrixWorld)
            }
            )),
            e
        }
        ))
    }
    )).then((function(e) {
        t.add(e);
        const s = [];
        if (r.children) {
            const t = r.children;
            for (let r = 0, a = t.length; r < a; r++) {
                const a = t[r];
                s.push(No(a, e, n, i))
            }
        }
        return Promise.all(s)
    }
    ))
}
function zo(e, t, n) {
    const i = t.attributes
      , r = [];
    function s(t, i) {
        return n.getDependency("accessor", t).then((function(t) {
            e.setAttribute(i, t)
        }
        ))
    }
    for (const t in i) {
        const n = Mo[t] || t.toLowerCase();
        n in e.attributes || r.push(s(i[t], n))
    }
    if (void 0 !== t.indices && !e.index) {
        const i = n.getDependency("accessor", t.indices).then((function(t) {
            e.setIndex(t)
        }
        ));
        r.push(i)
    }
    return Lo(e, t),
    function(e, t, n) {
        const i = t.attributes
          , r = new K;
        if (void 0 === i.POSITION)
            return;
        {
            const e = n.json.accessors[i.POSITION]
              , t = e.min
              , s = e.max;
            if (void 0 === t || void 0 === s)
                return void console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            if (r.set(new X(t[0],t[1],t[2]), new X(s[0],s[1],s[2])),
            e.normalized) {
                const t = Do(vo[e.componentType]);
                r.min.multiplyScalar(t),
                r.max.multiplyScalar(t)
            }
        }
        const s = t.targets;
        if (void 0 !== s) {
            const e = new X
              , t = new X;
            for (let i = 0, r = s.length; i < r; i++) {
                const r = s[i];
                if (void 0 !== r.POSITION) {
                    const i = n.json.accessors[r.POSITION]
                      , s = i.min
                      , a = i.max;
                    if (void 0 !== s && void 0 !== a) {
                        if (t.setX(Math.max(Math.abs(s[0]), Math.abs(a[0]))),
                        t.setY(Math.max(Math.abs(s[1]), Math.abs(a[1]))),
                        t.setZ(Math.max(Math.abs(s[2]), Math.abs(a[2]))),
                        i.normalized) {
                            const e = Do(vo[i.componentType]);
                            t.multiplyScalar(e)
                        }
                        e.max(t)
                    } else
                        console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                }
            }
            r.expandByVector(e)
        }
        e.boundingBox = r;
        const a = new fe;
        r.getCenter(a.center),
        a.radius = r.min.distanceTo(r.max) / 2,
        e.boundingSphere = a
    }(e, t, n),
    Promise.all(r).then((function() {
        return void 0 !== t.targets ? function(e, t, n) {
            let i = !1
              , r = !1
              , s = !1;
            for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e];
                if (void 0 !== n.POSITION && (i = !0),
                void 0 !== n.NORMAL && (r = !0),
                void 0 !== n.COLOR_0 && (s = !0),
                i && r && s)
                    break
            }
            if (!i && !r && !s)
                return Promise.resolve(e);
            const a = []
              , o = []
              , l = [];
            for (let c = 0, h = t.length; c < h; c++) {
                const h = t[c];
                if (i) {
                    const t = void 0 !== h.POSITION ? n.getDependency("accessor", h.POSITION) : e.attributes.position;
                    a.push(t)
                }
                if (r) {
                    const t = void 0 !== h.NORMAL ? n.getDependency("accessor", h.NORMAL) : e.attributes.normal;
                    o.push(t)
                }
                if (s) {
                    const t = void 0 !== h.COLOR_0 ? n.getDependency("accessor", h.COLOR_0) : e.attributes.color;
                    l.push(t)
                }
            }
            return Promise.all([Promise.all(a), Promise.all(o), Promise.all(l)]).then((function(t) {
                const n = t[0]
                  , a = t[1]
                  , o = t[2];
                return i && (e.morphAttributes.position = n),
                r && (e.morphAttributes.normal = a),
                s && (e.morphAttributes.color = o),
                e.morphTargetsRelative = !0,
                e
            }
            ))
        }(e, t.targets, n) : e
    }
    ))
}
function Oo(e, t) {
    let n = e.getIndex();
    if (null === n) {
        const t = []
          , i = e.getAttribute("position");
        if (void 0 === i)
            return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),
            e;
        for (let e = 0; e < i.count; e++)
            t.push(e);
        e.setIndex(t),
        n = e.getIndex()
    }
    const i = n.count - 2
      , r = [];
    if (2 === t)
        for (let e = 1; e <= i; e++)
            r.push(n.getX(0)),
            r.push(n.getX(e)),
            r.push(n.getX(e + 1));
    else
        for (let e = 0; e < i; e++)
            e % 2 == 0 ? (r.push(n.getX(e)),
            r.push(n.getX(e + 1)),
            r.push(n.getX(e + 2))) : (r.push(n.getX(e + 2)),
            r.push(n.getX(e + 1)),
            r.push(n.getX(e)));
    r.length / 3 !== i && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = e.clone();
    return s.setIndex(r),
    s
}
const Fo = new WeakMap;
class Uo extends Ws {
    constructor(e) {
        super(e),
        this.decoderPath = "",
        this.decoderConfig = {},
        this.decoderBinary = null,
        this.decoderPending = null,
        this.workerLimit = 4,
        this.workerPool = [],
        this.workerNextTaskID = 1,
        this.workerSourceURL = "",
        this.defaultAttributeIDs = {
            position: "POSITION",
            normal: "NORMAL",
            color: "COLOR",
            uv: "TEX_COORD"
        },
        this.defaultAttributeTypes = {
            position: "Float32Array",
            normal: "Float32Array",
            color: "Float32Array",
            uv: "Float32Array"
        }
    }
    setDecoderPath(e) {
        return this.decoderPath = e,
        this
    }
    setDecoderConfig(e) {
        return this.decoderConfig = e,
        this
    }
    setWorkerLimit(e) {
        return this.workerLimit = e,
        this
    }
    load(e, t, n, i) {
        const r = new qs(this.manager);
        r.setPath(this.path),
        r.setResponseType("arraybuffer"),
        r.setRequestHeader(this.requestHeader),
        r.setWithCredentials(this.withCredentials),
        r.load(e, (e=>{
            const n = {
                attributeIDs: this.defaultAttributeIDs,
                attributeTypes: this.defaultAttributeTypes,
                useUniqueIDs: !1
            };
            this.decodeGeometry(e, n).then(t).catch(i)
        }
        ), n, i)
    }
    decodeDracoFile(e, t, n, i) {
        const r = {
            attributeIDs: n || this.defaultAttributeIDs,
            attributeTypes: i || this.defaultAttributeTypes,
            useUniqueIDs: !!n
        };
        this.decodeGeometry(e, r).then(t)
    }
    decodeGeometry(e, t) {
        for (const e in t.attributeTypes) {
            const n = t.attributeTypes[e];
            void 0 !== n.BYTES_PER_ELEMENT && (t.attributeTypes[e] = n.name)
        }
        const n = JSON.stringify(t);
        if (Fo.has(e)) {
            const t = Fo.get(e);
            if (t.key === n)
                return t.promise;
            if (0 === e.byteLength)
                throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")
        }
        let i;
        const r = this.workerNextTaskID++
          , s = e.byteLength
          , a = this._getWorker(r, s).then((n=>(i = n,
        new Promise(((n,s)=>{
            i._callbacks[r] = {
                resolve: n,
                reject: s
            },
            i.postMessage({
                type: "decode",
                id: r,
                taskConfig: t,
                buffer: e
            }, [e])
        }
        ))))).then((e=>this._createGeometry(e.geometry)));
        return a.catch((()=>!0)).then((()=>{
            i && r && this._releaseTask(i, r)
        }
        )),
        Fo.set(e, {
            key: n,
            promise: a
        }),
        a
    }
    _createGeometry(e) {
        const t = new wt;
        e.index && t.setIndex(new dt(e.index.array,1));
        for (let n = 0; n < e.attributes.length; n++) {
            const i = e.attributes[n]
              , r = i.name
              , s = i.array
              , a = i.itemSize;
            t.setAttribute(r, new dt(s,a))
        }
        return t
    }
    _loadLibrary(e, t) {
        const n = new qs(this.manager);
        return n.setPath(this.decoderPath),
        n.setResponseType(t),
        n.setWithCredentials(this.withCredentials),
        new Promise(((t,i)=>{
            n.load(e, t, void 0, i)
        }
        ))
    }
    preload() {
        return this._initDecoder(),
        this
    }
    _initDecoder() {
        if (this.decoderPending)
            return this.decoderPending;
        const e = "object" != typeof WebAssembly || "js" === this.decoderConfig.type
          , t = [];
        return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")),
        t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
        this.decoderPending = Promise.all(t).then((t=>{
            const n = t[0];
            e || (this.decoderConfig.wasmBinary = t[1]);
            const i = ko.toString()
              , r = ["/* draco decoder */", n, "", "/* worker */", i.substring(i.indexOf("{") + 1, i.lastIndexOf("}"))].join("\n");
            this.workerSourceURL = URL.createObjectURL(new Blob([r]))
        }
        )),
        this.decoderPending
    }
    _getWorker(e, t) {
        return this._initDecoder().then((()=>{
            if (this.workerPool.length < this.workerLimit) {
                const e = new Worker(this.workerSourceURL);
                e._callbacks = {},
                e._taskCosts = {},
                e._taskLoad = 0,
                e.postMessage({
                    type: "init",
                    decoderConfig: this.decoderConfig
                }),
                e.onmessage = function(t) {
                    const n = t.data;
                    switch (n.type) {
                    case "decode":
                        e._callbacks[n.id].resolve(n);
                        break;
                    case "error":
                        e._callbacks[n.id].reject(n);
                        break;
                    default:
                        console.error('THREE.DRACOLoader: Unexpected message, "' + n.type + '"')
                    }
                }
                ,
                this.workerPool.push(e)
            } else
                this.workerPool.sort((function(e, t) {
                    return e._taskLoad > t._taskLoad ? -1 : 1
                }
                ));
            const n = this.workerPool[this.workerPool.length - 1];
            return n._taskCosts[e] = t,
            n._taskLoad += t,
            n
        }
        ))
    }
    _releaseTask(e, t) {
        e._taskLoad -= e._taskCosts[t],
        delete e._callbacks[t],
        delete e._taskCosts[t]
    }
    debug() {
        console.log("Task load: ", this.workerPool.map((e=>e._taskLoad)))
    }
    dispose() {
        for (let e = 0; e < this.workerPool.length; ++e)
            this.workerPool[e].terminate();
        return this.workerPool.length = 0,
        this
    }
}
function ko() {
    let e, t;
    function n(e, t, n, i, r, s) {
        const a = s.num_components()
          , o = n.num_points() * a
          , l = o * r.BYTES_PER_ELEMENT
          , c = function(e, t) {
            switch (t) {
            case Float32Array:
                return e.DT_FLOAT32;
            case Int8Array:
                return e.DT_INT8;
            case Int16Array:
                return e.DT_INT16;
            case Int32Array:
                return e.DT_INT32;
            case Uint8Array:
                return e.DT_UINT8;
            case Uint16Array:
                return e.DT_UINT16;
            case Uint32Array:
                return e.DT_UINT32
            }
        }(e, r)
          , h = e._malloc(l);
        t.GetAttributeDataArrayForAllPoints(n, s, c, l, h);
        const u = new r(e.HEAPF32.buffer,h,o).slice();
        return e._free(h),
        {
            name: i,
            array: u,
            itemSize: a
        }
    }
    onmessage = function(i) {
        const r = i.data;
        switch (r.type) {
        case "init":
            e = r.decoderConfig,
            t = new Promise((function(t) {
                e.onModuleLoaded = function(e) {
                    t({
                        draco: e
                    })
                }
                ,
                DracoDecoderModule(e)
            }
            ));
            break;
        case "decode":
            const i = r.buffer
              , s = r.taskConfig;
            t.then((e=>{
                const t = e.draco
                  , a = new t.Decoder
                  , o = new t.DecoderBuffer;
                o.Init(new Int8Array(i), i.byteLength);
                try {
                    const e = function(e, t, i, r) {
                        const s = r.attributeIDs
                          , a = r.attributeTypes;
                        let o, l;
                        const c = t.GetEncodedGeometryType(i);
                        if (c === e.TRIANGULAR_MESH)
                            o = new e.Mesh,
                            l = t.DecodeBufferToMesh(i, o);
                        else {
                            if (c !== e.POINT_CLOUD)
                                throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
                            o = new e.PointCloud,
                            l = t.DecodeBufferToPointCloud(i, o)
                        }
                        if (!l.ok() || 0 === o.ptr)
                            throw new Error("THREE.DRACOLoader: Decoding failed: " + l.error_msg());
                        const h = {
                            index: null,
                            attributes: []
                        };
                        for (const i in s) {
                            const l = self[a[i]];
                            let c, u;
                            if (r.useUniqueIDs)
                                u = s[i],
                                c = t.GetAttributeByUniqueId(o, u);
                            else {
                                if (u = t.GetAttributeId(o, e[s[i]]),
                                -1 === u)
                                    continue;
                                c = t.GetAttribute(o, u)
                            }
                            h.attributes.push(n(e, t, o, i, l, c))
                        }
                        c === e.TRIANGULAR_MESH && (h.index = function(e, t, n) {
                            const i = 3 * n.num_faces()
                              , r = 4 * i
                              , s = e._malloc(r);
                            t.GetTrianglesUInt32Array(n, r, s);
                            const a = new Uint32Array(e.HEAPF32.buffer,s,i).slice();
                            return e._free(s),
                            {
                                array: a,
                                itemSize: 1
                            }
                        }(e, t, o));
                        return e.destroy(o),
                        h
                    }(t, a, o, s)
                      , i = e.attributes.map((e=>e.array.buffer));
                    e.index && i.push(e.index.array.buffer),
                    self.postMessage({
                        type: "decode",
                        id: r.id,
                        geometry: e
                    }, i)
                } catch (e) {
                    console.error(e),
                    self.postMessage({
                        type: "error",
                        id: r.id,
                        error: e.message
                    })
                } finally {
                    t.destroy(o),
                    t.destroy(a)
                }
            }
            ))
        }
    }
}
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.1
 * @author George Michael Brower
 * @license MIT
 */
class Bo {
    constructor(e, t, n, i, r="div") {
        this.parent = e,
        this.object = t,
        this.property = n,
        this._disabled = !1,
        this.initialValue = this.getValue(),
        this.domElement = document.createElement("div"),
        this.domElement.classList.add("controller"),
        this.domElement.classList.add(i),
        this.$name = document.createElement("div"),
        this.$name.classList.add("name"),
        Bo.nextNameID = Bo.nextNameID || 0,
        this.$name.id = "lil-gui-name-" + ++Bo.nextNameID,
        this.$widget = document.createElement(r),
        this.$widget.classList.add("widget"),
        this.$disable = this.$widget,
        this.domElement.appendChild(this.$name),
        this.domElement.appendChild(this.$widget),
        this.parent.children.push(this),
        this.parent.controllers.push(this),
        this.parent.$children.appendChild(this.domElement),
        this._listenCallback = this._listenCallback.bind(this),
        this.name(n)
    }
    name(e) {
        return this._name = e,
        this.$name.innerHTML = e,
        this
    }
    onChange(e) {
        return this._onChange = e,
        this
    }
    _callOnChange() {
        this.parent._callOnChange(this),
        void 0 !== this._onChange && this._onChange.call(this, this.getValue()),
        this._changed = !0
    }
    onFinishChange(e) {
        return this._onFinishChange = e,
        this
    }
    _callOnFinishChange() {
        this._changed && (this.parent._callOnFinishChange(this),
        void 0 !== this._onFinishChange && this._onFinishChange.call(this, this.getValue())),
        this._changed = !1
    }
    reset() {
        return this.setValue(this.initialValue),
        this._callOnFinishChange(),
        this
    }
    enable(e=!0) {
        return this.disable(!e)
    }
    disable(e=!0) {
        return e === this._disabled || (this._disabled = e,
        this.domElement.classList.toggle("disabled", e),
        this.$disable.toggleAttribute("disabled", e)),
        this
    }
    options(e) {
        const t = this.parent.add(this.object, this.property, e);
        return t.name(this._name),
        this.destroy(),
        t
    }
    min(e) {
        return this
    }
    max(e) {
        return this
    }
    step(e) {
        return this
    }
    listen(e=!0) {
        return this._listening = e,
        void 0 !== this._listenCallbackID && (cancelAnimationFrame(this._listenCallbackID),
        this._listenCallbackID = void 0),
        this._listening && this._listenCallback(),
        this
    }
    _listenCallback() {
        this._listenCallbackID = requestAnimationFrame(this._listenCallback);
        const e = this.save();
        e !== this._listenPrevValue && this.updateDisplay(),
        this._listenPrevValue = e
    }
    getValue() {
        return this.object[this.property]
    }
    setValue(e) {
        return this.object[this.property] = e,
        this._callOnChange(),
        this.updateDisplay(),
        this
    }
    updateDisplay() {
        return this
    }
    load(e) {
        return this.setValue(e),
        this._callOnFinishChange(),
        this
    }
    save() {
        return this.getValue()
    }
    destroy() {
        this.listen(!1),
        this.parent.children.splice(this.parent.children.indexOf(this), 1),
        this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1),
        this.parent.$children.removeChild(this.domElement)
    }
}
class Ho extends Bo {
    constructor(e, t, n) {
        super(e, t, n, "boolean", "label"),
        this.$input = document.createElement("input"),
        this.$input.setAttribute("type", "checkbox"),
        this.$input.setAttribute("aria-labelledby", this.$name.id),
        this.$widget.appendChild(this.$input),
        this.$input.addEventListener("change", (()=>{
            this.setValue(this.$input.checked),
            this._callOnFinishChange()
        }
        )),
        this.$disable = this.$input,
        this.updateDisplay()
    }
    updateDisplay() {
        return this.$input.checked = this.getValue(),
        this
    }
}
function Vo(e) {
    let t, n;
    return (t = e.match(/(#|0x)?([a-f0-9]{6})/i)) ? n = t[2] : (t = e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? n = parseInt(t[1]).toString(16).padStart(2, 0) + parseInt(t[2]).toString(16).padStart(2, 0) + parseInt(t[3]).toString(16).padStart(2, 0) : (t = e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (n = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]),
    !!n && "#" + n
}
const Go = {
    isPrimitive: !0,
    match: e=>"string" == typeof e,
    fromHexString: Vo,
    toHexString: Vo
}
  , Wo = {
    isPrimitive: !0,
    match: e=>"number" == typeof e,
    fromHexString: e=>parseInt(e.substring(1), 16),
    toHexString: e=>"#" + e.toString(16).padStart(6, 0)
}
  , jo = {
    isPrimitive: !1,
    match: Array.isArray,
    fromHexString(e, t, n=1) {
        const i = Wo.fromHexString(e);
        t[0] = (i >> 16 & 255) / 255 * n,
        t[1] = (i >> 8 & 255) / 255 * n,
        t[2] = (255 & i) / 255 * n
    },
    toHexString: ([e,t,n],i=1)=>Wo.toHexString(e * (i = 255 / i) << 16 ^ t * i << 8 ^ n * i << 0)
}
  , qo = {
    isPrimitive: !1,
    match: e=>Object(e) === e,
    fromHexString(e, t, n=1) {
        const i = Wo.fromHexString(e);
        t.r = (i >> 16 & 255) / 255 * n,
        t.g = (i >> 8 & 255) / 255 * n,
        t.b = (255 & i) / 255 * n
    },
    toHexString: ({r: e, g: t, b: n},i=1)=>Wo.toHexString(e * (i = 255 / i) << 16 ^ t * i << 8 ^ n * i << 0)
}
  , Xo = [Go, Wo, jo, qo];
class Yo extends Bo {
    constructor(e, t, n, i) {
        var r;
        super(e, t, n, "color"),
        this.$input = document.createElement("input"),
        this.$input.setAttribute("type", "color"),
        this.$input.setAttribute("tabindex", -1),
        this.$input.setAttribute("aria-labelledby", this.$name.id),
        this.$text = document.createElement("input"),
        this.$text.setAttribute("type", "text"),
        this.$text.setAttribute("spellcheck", "false"),
        this.$text.setAttribute("aria-labelledby", this.$name.id),
        this.$display = document.createElement("div"),
        this.$display.classList.add("display"),
        this.$display.appendChild(this.$input),
        this.$widget.appendChild(this.$display),
        this.$widget.appendChild(this.$text),
        this._format = (r = this.initialValue,
        Xo.find((e=>e.match(r)))),
        this._rgbScale = i,
        this._initialValueHexString = this.save(),
        this._textFocused = !1,
        this.$input.addEventListener("input", (()=>{
            this._setValueFromHexString(this.$input.value)
        }
        )),
        this.$input.addEventListener("blur", (()=>{
            this._callOnFinishChange()
        }
        )),
        this.$text.addEventListener("input", (()=>{
            const e = Vo(this.$text.value);
            e && this._setValueFromHexString(e)
        }
        )),
        this.$text.addEventListener("focus", (()=>{
            this._textFocused = !0,
            this.$text.select()
        }
        )),
        this.$text.addEventListener("blur", (()=>{
            this._textFocused = !1,
            this.updateDisplay(),
            this._callOnFinishChange()
        }
        )),
        this.$disable = this.$text,
        this.updateDisplay()
    }
    reset() {
        return this._setValueFromHexString(this._initialValueHexString),
        this
    }
    _setValueFromHexString(e) {
        if (this._format.isPrimitive) {
            const t = this._format.fromHexString(e);
            this.setValue(t)
        } else
            this._format.fromHexString(e, this.getValue(), this._rgbScale),
            this._callOnChange(),
            this.updateDisplay()
    }
    save() {
        return this._format.toHexString(this.getValue(), this._rgbScale)
    }
    load(e) {
        return this._setValueFromHexString(e),
        this._callOnFinishChange(),
        this
    }
    updateDisplay() {
        return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale),
        this._textFocused || (this.$text.value = this.$input.value.substring(1)),
        this.$display.style.backgroundColor = this.$input.value,
        this
    }
}
class $o extends Bo {
    constructor(e, t, n) {
        super(e, t, n, "function"),
        this.$button = document.createElement("button"),
        this.$button.appendChild(this.$name),
        this.$widget.appendChild(this.$button),
        this.$button.addEventListener("click", (e=>{
            e.preventDefault(),
            this.getValue().call(this.object)
        }
        )),
        this.$button.addEventListener("touchstart", (()=>{}
        ), {
            passive: !0
        }),
        this.$disable = this.$button
    }
}
class Ko extends Bo {
    constructor(e, t, n, i, r, s) {
        super(e, t, n, "number"),
        this._initInput(),
        this.min(i),
        this.max(r);
        const a = void 0 !== s;
        this.step(a ? s : this._getImplicitStep(), a),
        this.updateDisplay()
    }
    min(e) {
        return this._min = e,
        this._onUpdateMinMax(),
        this
    }
    max(e) {
        return this._max = e,
        this._onUpdateMinMax(),
        this
    }
    step(e, t=!0) {
        return this._step = e,
        this._stepExplicit = t,
        this
    }
    updateDisplay() {
        const e = this.getValue();
        if (this._hasSlider) {
            let t = (e - this._min) / (this._max - this._min);
            t = Math.max(0, Math.min(t, 1)),
            this.$fill.style.width = 100 * t + "%"
        }
        return this._inputFocused || (this.$input.value = e),
        this
    }
    _initInput() {
        this.$input = document.createElement("input"),
        this.$input.setAttribute("type", "number"),
        this.$input.setAttribute("step", "any"),
        this.$input.setAttribute("aria-labelledby", this.$name.id),
        this.$widget.appendChild(this.$input),
        this.$disable = this.$input;
        const e = e=>{
            const t = parseFloat(this.$input.value);
            isNaN(t) || (this._snapClampSetValue(t + e),
            this.$input.value = this.getValue())
        }
        ;
        let t, n, i, r, s, a = !1;
        const o = e=>{
            if (a) {
                const i = e.clientX - t
                  , r = e.clientY - n;
                Math.abs(r) > 5 ? (e.preventDefault(),
                this.$input.blur(),
                a = !1,
                this._setDraggingStyle(!0, "vertical")) : Math.abs(i) > 5 && l()
            }
            if (!a) {
                const t = e.clientY - i;
                s -= t * this._step * this._arrowKeyMultiplier(e),
                r + s > this._max ? s = this._max - r : r + s < this._min && (s = this._min - r),
                this._snapClampSetValue(r + s)
            }
            i = e.clientY
        }
          , l = ()=>{
            this._setDraggingStyle(!1, "vertical"),
            this._callOnFinishChange(),
            window.removeEventListener("mousemove", o),
            window.removeEventListener("mouseup", l)
        }
        ;
        this.$input.addEventListener("input", (()=>{
            const e = parseFloat(this.$input.value);
            isNaN(e) || this.setValue(this._clamp(e))
        }
        )),
        this.$input.addEventListener("keydown", (t=>{
            "Enter" === t.code && this.$input.blur(),
            "ArrowUp" === t.code && (t.preventDefault(),
            e(this._step * this._arrowKeyMultiplier(t))),
            "ArrowDown" === t.code && (t.preventDefault(),
            e(this._step * this._arrowKeyMultiplier(t) * -1))
        }
        )),
        this.$input.addEventListener("wheel", (t=>{
            this._inputFocused && (t.preventDefault(),
            e(this._step * this._normalizeMouseWheel(t)))
        }
        ), {
            passive: !1
        }),
        this.$input.addEventListener("mousedown", (e=>{
            t = e.clientX,
            n = i = e.clientY,
            a = !0,
            r = this.getValue(),
            s = 0,
            window.addEventListener("mousemove", o),
            window.addEventListener("mouseup", l)
        }
        )),
        this.$input.addEventListener("focus", (()=>{
            this._inputFocused = !0
        }
        )),
        this.$input.addEventListener("blur", (()=>{
            this._inputFocused = !1,
            this.updateDisplay(),
            this._callOnFinishChange()
        }
        ))
    }
    _initSlider() {
        this._hasSlider = !0,
        this.$slider = document.createElement("div"),
        this.$slider.classList.add("slider"),
        this.$fill = document.createElement("div"),
        this.$fill.classList.add("fill"),
        this.$slider.appendChild(this.$fill),
        this.$widget.insertBefore(this.$slider, this.$input),
        this.domElement.classList.add("hasSlider");
        const e = e=>{
            const t = this.$slider.getBoundingClientRect();
            let n = (i = e,
            r = t.left,
            s = t.right,
            a = this._min,
            o = this._max,
            (i - r) / (s - r) * (o - a) + a);
            var i, r, s, a, o;
            this._snapClampSetValue(n)
        }
          , t = t=>{
            e(t.clientX)
        }
          , n = ()=>{
            this._callOnFinishChange(),
            this._setDraggingStyle(!1),
            window.removeEventListener("mousemove", t),
            window.removeEventListener("mouseup", n)
        }
        ;
        let i, r, s = !1;
        const a = t=>{
            t.preventDefault(),
            this._setDraggingStyle(!0),
            e(t.touches[0].clientX),
            s = !1
        }
          , o = t=>{
            if (s) {
                const e = t.touches[0].clientX - i
                  , n = t.touches[0].clientY - r;
                Math.abs(e) > Math.abs(n) ? a(t) : (window.removeEventListener("touchmove", o),
                window.removeEventListener("touchend", l))
            } else
                t.preventDefault(),
                e(t.touches[0].clientX)
        }
          , l = ()=>{
            this._callOnFinishChange(),
            this._setDraggingStyle(!1),
            window.removeEventListener("touchmove", o),
            window.removeEventListener("touchend", l)
        }
          , c = this._callOnFinishChange.bind(this);
        let h;
        this.$slider.addEventListener("mousedown", (i=>{
            this._setDraggingStyle(!0),
            e(i.clientX),
            window.addEventListener("mousemove", t),
            window.addEventListener("mouseup", n)
        }
        )),
        this.$slider.addEventListener("touchstart", (e=>{
            e.touches.length > 1 || (this._hasScrollBar ? (i = e.touches[0].clientX,
            r = e.touches[0].clientY,
            s = !0) : a(e),
            window.addEventListener("touchmove", o),
            window.addEventListener("touchend", l))
        }
        ), {
            passive: !1
        }),
        this.$slider.addEventListener("wheel", (e=>{
            if (Math.abs(e.deltaX) < Math.abs(e.deltaY) && this._hasScrollBar)
                return;
            e.preventDefault();
            const t = this._normalizeMouseWheel(e) * this._step;
            this._snapClampSetValue(this.getValue() + t),
            this.$input.value = this.getValue(),
            clearTimeout(h),
            h = setTimeout(c, 400)
        }
       ), {
            passive: !1
        })
    }
    _setDraggingStyle(e, t="horizontal") {
        this.$slider && this.$slider.classList.toggle("active", e),
        document.body.classList.toggle("lil-gui-dragging", e),
        document.body.classList.toggle(`lil-gui-${t}`, e)
    }
    _getImplicitStep() {
        return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : .1
    }
    _onUpdateMinMax() {
        !this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), !1),
        this._initSlider(),
        this.updateDisplay())
    }
    _normalizeMouseWheel(e) {
        let {deltaX: t, deltaY: n} = e;
        Math.floor(e.deltaY) !== e.deltaY && e.wheelDelta && (t = 0,
        n = -e.wheelDelta / 120,
        n *= this._stepExplicit ? 1 : 10);
        return t + -n
    }
    _arrowKeyMultiplier(e) {
        let t = this._stepExplicit ? 1 : 10;
        return e.shiftKey ? t *= 10 : e.altKey && (t /= 10),
        t
    }
    _snap(e) {
        const t = Math.round(e / this._step) * this._step;
        return parseFloat(t.toPrecision(15))
    }
    _clamp(e) {
        return e < this._min && (e = this._min),
        e > this._max && (e = this._max),
        e
    }
    _snapClampSetValue(e) {
        this.setValue(this._clamp(this._snap(e)))
    }
    get _hasScrollBar() {
        const e = this.parent.root.$children;
        return e.scrollHeight > e.clientHeight
    }
    get _hasMin() {
        return void 0 !== this._min
    }
    get _hasMax() {
        return void 0 !== this._max
    }
}
class Zo extends Bo {
    constructor(e, t, n, i) {
        super(e, t, n, "option"),
        this.$select = document.createElement("select"),
        this.$select.setAttribute("aria-labelledby", this.$name.id),
        this.$display = document.createElement("div"),
        this.$display.classList.add("display"),
        this._values = Array.isArray(i) ? i : Object.values(i),
        this._names = Array.isArray(i) ? i : Object.keys(i),
        this._names.forEach((e=>{
            const t = document.createElement("option");
            t.innerHTML = e,
            this.$select.appendChild(t)
        }
        )),
        this.$select.addEventListener("change", (()=>{
            this.setValue(this._values[this.$select.selectedIndex]),
            this._callOnFinishChange()
        }
        )),
        this.$select.addEventListener("focus", (()=>{
            this.$display.classList.add("focus")
        }
        )),
        this.$select.addEventListener("blur", (()=>{
            this.$display.classList.remove("focus")
        }
        )),
        this.$widget.appendChild(this.$select),
        this.$widget.appendChild(this.$display),
        this.$disable = this.$select,
        this.updateDisplay()
    }
    updateDisplay() {
        const e = this.getValue()
          , t = this._values.indexOf(e);
        return this.$select.selectedIndex = t,
        this.$display.innerHTML = -1 === t ? e : this._names[t],
        this
    }
}
class Jo extends Bo {
    constructor(e, t, n) {
        super(e, t, n, "string"),
        this.$input = document.createElement("input"),
        this.$input.setAttribute("type", "text"),
        this.$input.setAttribute("aria-labelledby", this.$name.id),
        this.$input.addEventListener("input", (()=>{
            this.setValue(this.$input.value)
        }
        )),
        this.$input.addEventListener("keydown", (e=>{
            "Enter" === e.code && this.$input.blur()
        }
        )),
        this.$input.addEventListener("blur", (()=>{
            this._callOnFinishChange()
        }
        )),
        this.$widget.appendChild(this.$input),
        this.$disable = this.$input,
        this.updateDisplay()
    }
    updateDisplay() {
        return this.$input.value = this.getValue(),
        this
    }
}
let Qo = !1;
class el {
    constructor({parent: e, autoPlace: t=void 0 === e, container: n, width: i, title: r="Controls", injectStyles: s=!0, touchStyles: a=!0}={}) {
        if (this.parent = e,
        this.root = e ? e.root : this,
        this.children = [],
        this.controllers = [],
        this.folders = [],
        this._closed = !1,
        this._hidden = !1,
        this.domElement = document.createElement("div"),
        this.domElement.classList.add("lil-gui"),
        this.$title = document.createElement("div"),
        this.$title.classList.add("title"),
        this.$title.setAttribute("role", "button"),
        this.$title.setAttribute("aria-expanded", !0),
        this.$title.setAttribute("tabindex", 0),
        this.$title.addEventListener("click", (()=>this.openAnimated(this._closed))),
        this.$title.addEventListener("keydown", (e=>{
            "Enter" !== e.code && "Space" !== e.code || (e.preventDefault(),
            this.$title.click())
        }
        )),
        this.$title.addEventListener("touchstart", (()=>{}
        ), {
            passive: !0
        }),
        this.$children = document.createElement("div"),
        this.$children.classList.add("children"),
        this.domElement.appendChild(this.$title),
        this.domElement.appendChild(this.$children),
        this.title(r),
        a && this.domElement.classList.add("allow-touch-styles"),
        this.parent)
            return this.parent.children.push(this),
            this.parent.folders.push(this),
            void this.parent.$children.appendChild(this.domElement);
        this.domElement.classList.add("root"),
        !Qo && s && (!function(e) {
            const t = document.createElement("style");
            t.innerHTML = e;
            const n = document.querySelector("head link[rel=stylesheet], head style");
            n ? document.head.insertBefore(t, n) : document.head.appendChild(t)
        }('.lil-gui {\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  background-color: var(--background-color);\n  color: var(--text-color);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  --background-color: #1f1f1f;\n  --text-color: #ebebeb;\n  --title-background-color: #111111;\n  --title-text-color: #ebebeb;\n  --widget-color: #424242;\n  --hover-color: #4f4f4f;\n  --focus-color: #595959;\n  --number-color: #2cc9ff;\n  --string-color: #a2db3c;\n  --font-size: 11px;\n  --input-font-size: 11px;\n  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;\n  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;\n  --padding: 4px;\n  --spacing: 4px;\n  --widget-height: 20px;\n  --name-width: 45%;\n  --slider-knob-width: 2px;\n  --slider-input-width: 27%;\n  --color-input-width: 27%;\n  --slider-input-min-width: 45px;\n  --color-input-min-width: 45px;\n  --folder-indent: 7px;\n  --widget-padding: 0 0 0 3px;\n  --widget-border-radius: 2px;\n  --checkbox-size: calc(0.75 * var(--widget-height));\n  --scrollbar-width: 5px;\n}\n.lil-gui, .lil-gui * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.lil-gui.root {\n  width: var(--width, 245px);\n  display: flex;\n  flex-direction: column;\n}\n.lil-gui.root > .title {\n  background: var(--title-background-color);\n  color: var(--title-text-color);\n}\n.lil-gui.root > .children {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.lil-gui.root > .children::-webkit-scrollbar {\n  width: var(--scrollbar-width);\n  height: var(--scrollbar-width);\n  background: var(--background-color);\n}\n.lil-gui.root > .children::-webkit-scrollbar-thumb {\n  border-radius: var(--scrollbar-width);\n  background: var(--focus-color);\n}\n@media (pointer: coarse) {\n  .lil-gui.allow-touch-styles {\n    --widget-height: 28px;\n    --padding: 6px;\n    --spacing: 6px;\n    --font-size: 13px;\n    --input-font-size: 16px;\n    --folder-indent: 10px;\n    --scrollbar-width: 7px;\n    --slider-input-min-width: 50px;\n    --color-input-min-width: 65px;\n  }\n}\n.lil-gui.force-touch-styles {\n  --widget-height: 28px;\n  --padding: 6px;\n  --spacing: 6px;\n  --font-size: 13px;\n  --input-font-size: 16px;\n  --folder-indent: 10px;\n  --scrollbar-width: 7px;\n  --slider-input-min-width: 50px;\n  --color-input-min-width: 65px;\n}\n.lil-gui.autoPlace {\n  max-height: 100%;\n  position: fixed;\n  top: 0;\n  right: 15px;\n  z-index: 1001;\n}\n\n.lil-gui .controller {\n  display: flex;\n  align-items: center;\n  padding: 0 var(--padding);\n  margin: var(--spacing) 0;\n}\n.lil-gui .controller.disabled {\n  opacity: 0.5;\n}\n.lil-gui .controller.disabled, .lil-gui .controller.disabled * {\n  pointer-events: none !important;\n}\n.lil-gui .controller > .name {\n  min-width: var(--name-width);\n  flex-shrink: 0;\n  white-space: pre;\n  padding-right: var(--spacing);\n  line-height: var(--widget-height);\n}\n.lil-gui .controller .widget {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: var(--widget-height);\n}\n.lil-gui .controller.string input {\n  color: var(--string-color);\n}\n.lil-gui .controller.boolean .widget {\n  cursor: pointer;\n}\n.lil-gui .controller.color .display {\n  width: 100%;\n  height: var(--widget-height);\n  border-radius: var(--widget-border-radius);\n  position: relative;\n}\n@media (hover: hover) {\n  .lil-gui .controller.color .display:hover:before {\n    content: " ";\n    display: block;\n    position: absolute;\n    border-radius: var(--widget-border-radius);\n    border: 1px solid #fff9;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n}\n.lil-gui .controller.color input[type=color] {\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.lil-gui .controller.color input[type=text] {\n  margin-left: var(--spacing);\n  font-family: var(--font-family-mono);\n  min-width: var(--color-input-min-width);\n  width: var(--color-input-width);\n  flex-shrink: 0;\n}\n.lil-gui .controller.option select {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  max-width: 100%;\n}\n.lil-gui .controller.option .display {\n  position: relative;\n  pointer-events: none;\n  border-radius: var(--widget-border-radius);\n  height: var(--widget-height);\n  line-height: var(--widget-height);\n  max-width: 100%;\n  overflow: hidden;\n  word-break: break-all;\n  padding-left: 0.55em;\n  padding-right: 1.75em;\n  background: var(--widget-color);\n}\n@media (hover: hover) {\n  .lil-gui .controller.option .display.focus {\n    background: var(--focus-color);\n  }\n}\n.lil-gui .controller.option .display.active {\n  background: var(--focus-color);\n}\n.lil-gui .controller.option .display:after {\n  font-family: "lil-gui";\n  content: "↕";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding-right: 0.375em;\n}\n.lil-gui .controller.option .widget,\n.lil-gui .controller.option select {\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .lil-gui .controller.option .widget:hover .display {\n    background: var(--hover-color);\n  }\n}\n.lil-gui .controller.number input {\n  color: var(--number-color);\n}\n.lil-gui .controller.number.hasSlider input {\n  margin-left: var(--spacing);\n  width: var(--slider-input-width);\n  min-width: var(--slider-input-min-width);\n  flex-shrink: 0;\n}\n.lil-gui .controller.number .slider {\n  width: 100%;\n  height: var(--widget-height);\n  background-color: var(--widget-color);\n  border-radius: var(--widget-border-radius);\n  padding-right: var(--slider-knob-width);\n  overflow: hidden;\n  cursor: ew-resize;\n  touch-action: pan-y;\n}\n@media (hover: hover) {\n  .lil-gui .controller.number .slider:hover {\n    background-color: var(--hover-color);\n  }\n}\n.lil-gui .controller.number .slider.active {\n  background-color: var(--focus-color);\n}\n.lil-gui .controller.number .slider.active .fill {\n  opacity: 0.95;\n}\n.lil-gui .controller.number .fill {\n  height: 100%;\n  border-right: var(--slider-knob-width) solid var(--number-color);\n  box-sizing: content-box;\n}\n\n.lil-gui-dragging .lil-gui {\n  --hover-color: var(--widget-color);\n}\n.lil-gui-dragging * {\n  cursor: ew-resize !important;\n}\n\n.lil-gui-dragging.lil-gui-vertical * {\n  cursor: ns-resize !important;\n}\n\n.lil-gui .title {\n  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);\n  height: var(--title-height);\n  line-height: calc(var(--title-height) - 4px);\n  font-weight: 600;\n  padding: 0 var(--padding);\n  -webkit-tap-highlight-color: transparent;\n  cursor: pointer;\n  outline: none;\n  text-decoration-skip: objects;\n}\n.lil-gui .title:before {\n  font-family: "lil-gui";\n  content: "▾";\n  padding-right: 2px;\n  display: inline-block;\n}\n.lil-gui .title:active {\n  background: var(--title-background-color);\n  opacity: 0.75;\n}\n@media (hover: hover) {\n  body:not(.lil-gui-dragging) .lil-gui .title:hover {\n    background: var(--title-background-color);\n    opacity: 0.85;\n  }\n  .lil-gui .title:focus {\n    text-decoration: underline var(--focus-color);\n  }\n}\n.lil-gui.root > .title:focus {\n  text-decoration: none !important;\n}\n.lil-gui.closed > .title:before {\n  content: "▸";\n}\n.lil-gui.closed > .children {\n  transform: translateY(-7px);\n  opacity: 0;\n}\n.lil-gui.closed:not(.transition) > .children {\n  display: none;\n}\n.lil-gui.transition > .children {\n  transition-duration: 300ms;\n  transition-property: height, opacity, transform;\n  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);\n  overflow: hidden;\n  pointer-events: none;\n}\n.lil-gui .children:empty:before {\n  content: "Empty";\n  padding: 0 var(--padding);\n  margin: var(--spacing) 0;\n  display: block;\n  height: var(--widget-height);\n  font-style: italic;\n  line-height: var(--widget-height);\n  opacity: 0.5;\n}\n.lil-gui.root > .children > .lil-gui > .title {\n  border: 0 solid var(--widget-color);\n  border-width: 1px 0;\n  transition: border-color 300ms;\n}\n.lil-gui.root > .children > .lil-gui.closed > .title {\n  border-bottom-color: transparent;\n}\n.lil-gui + .controller {\n  border-top: 1px solid var(--widget-color);\n  margin-top: 0;\n  padding-top: var(--spacing);\n}\n.lil-gui .lil-gui .lil-gui > .title {\n  border: none;\n}\n.lil-gui .lil-gui .lil-gui > .children {\n  border: none;\n  margin-left: var(--folder-indent);\n  border-left: 2px solid var(--widget-color);\n}\n.lil-gui .lil-gui .controller {\n  border: none;\n}\n\n.lil-gui input {\n  -webkit-tap-highlight-color: transparent;\n  border: 0;\n  outline: none;\n  font-family: var(--font-family);\n  font-size: var(--input-font-size);\n  border-radius: var(--widget-border-radius);\n  height: var(--widget-height);\n  background: var(--widget-color);\n  color: var(--text-color);\n  width: 100%;\n}\n@media (hover: hover) {\n  .lil-gui input:hover {\n    background: var(--hover-color);\n  }\n  .lil-gui input:active {\n    background: var(--focus-color);\n  }\n}\n.lil-gui input:disabled {\n  opacity: 1;\n}\n.lil-gui input[type=text],\n.lil-gui input[type=number] {\n  padding: var(--widget-padding);\n}\n.lil-gui input[type=text]:focus,\n.lil-gui input[type=number]:focus {\n  background: var(--focus-color);\n}\n.lil-gui input::-webkit-outer-spin-button,\n.lil-gui input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.lil-gui input[type=number] {\n  -moz-appearance: textfield;\n}\n.lil-gui input[type=checkbox] {\n  appearance: none;\n  -webkit-appearance: none;\n  height: var(--checkbox-size);\n  width: var(--checkbox-size);\n  border-radius: var(--widget-border-radius);\n  text-align: center;\n  cursor: pointer;\n}\n.lil-gui input[type=checkbox]:checked:before {\n  font-family: "lil-gui";\n  content: "✓";\n  font-size: var(--checkbox-size);\n  line-height: var(--checkbox-size);\n}\n@media (hover: hover) {\n  .lil-gui input[type=checkbox]:focus {\n    box-shadow: inset 0 0 0 1px var(--focus-color);\n  }\n}\n.lil-gui button {\n  -webkit-tap-highlight-color: transparent;\n  outline: none;\n  cursor: pointer;\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  color: var(--text-color);\n  width: 100%;\n  height: var(--widget-height);\n  text-transform: none;\n  background: var(--widget-color);\n  border-radius: var(--widget-border-radius);\n  border: 1px solid var(--widget-color);\n  text-align: center;\n  line-height: calc(var(--widget-height) - 4px);\n}\n@media (hover: hover) {\n  .lil-gui button:hover {\n    background: var(--hover-color);\n    border-color: var(--hover-color);\n  }\n  .lil-gui button:focus {\n    border-color: var(--focus-color);\n  }\n}\n.lil-gui button:active {\n  background: var(--focus-color);\n}\n\n@font-face {\n  font-family: "lil-gui";\n  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");\n}'),
        Qo = !0),
        n ? n.appendChild(this.domElement) : t && (this.domElement.classList.add("autoPlace"),
        document.body.appendChild(this.domElement)),
        i && this.domElement.style.setProperty("--width", i + "px"),
        this.domElement.addEventListener("keydown", (e=>e.stopPropagation())),
        this.domElement.addEventListener("keyup", (e=>e.stopPropagation()))
    }
    add(e, t, n, i, r) {
        if (Object(n) === n)
            return new Zo(this,e,t,n);
        const s = e[t];
        switch (typeof s) {
        case "number":
            return new Ko(this,e,t,n,i,r);
        case "boolean":
            return new Ho(this,e,t);
        case "string":
            return new Jo(this,e,t);
        case "function":
            return new $o(this,e,t)
        }
        console.error("gui.add failed\n\tproperty:", t, "\n\tobject:", e, "\n\tvalue:", s)
    }
    addColor(e, t, n=1) {
        return new Yo(this,e,t,n)
    }
    addFolder(e) {
        return new el({
            parent: this,
            title: e
        })
    }
    load(e, t=!0) {
        return e.controllers && this.controllers.forEach((t=>{
            t instanceof $o || t._name in e.controllers && t.load(e.controllers[t._name])
        }
        )),
        t && e.folders && this.folders.forEach((t=>{
            t._title in e.folders && t.load(e.folders[t._title])
        }
        )),
        this
    }
    save(e=!0) {
        const t = {
            controllers: {},
            folders: {}
        };
        return this.controllers.forEach((e=>{
            if (!(e instanceof $o)) {
                if (e._name in t.controllers)
                    throw new Error(`Cannot save GUI with duplicate property "${e._name}"`);
                t.controllers[e._name] = e.save()
            }
        }
        )),
        e && this.folders.forEach((e=>{
            if (e._title in t.folders)
                throw new Error(`Cannot save GUI with duplicate folder "${e._title}"`);
            t.folders[e._title] = e.save()
        }
        )),
        t
    }
    open(e=!0) {
        return this._closed = !e,
        this.$title.setAttribute("aria-expanded", !this._closed),
        this.domElement.classList.toggle("closed", this._closed),
        this
    }
    close() {
        return this.open(!1)
    }
    show(e=!0) {
        return this._hidden = !e,
        this.domElement.style.display = this._hidden ? "none" : "",
        this
    }
    hide() {
        return this.show(!1)
    }
    openAnimated(e=!0) {
        return this._closed = !e,
        this.$title.setAttribute("aria-expanded", !this._closed),
        requestAnimationFrame((()=>{
            const t = this.$children.clientHeight;
            this.$children.style.height = t + "px",
            this.domElement.classList.add("transition");
            const n = e=>{
                e.target === this.$children && (this.$children.style.height = "",
                this.domElement.classList.remove("transition"),
                this.$children.removeEventListener("transitionend", n))
            }
            ;
            this.$children.addEventListener("transitionend", n);
            const i = e ? this.$children.scrollHeight : 0;
            this.domElement.classList.toggle("closed", !e),
            requestAnimationFrame((()=>{
                this.$children.style.height = i + "px"
            }
            ))
        }
        )),
        this
    }
    title(e) {
        return this._title = e,
        this.$title.innerHTML = e,
        this
    }
    reset(e=!0) {
        return (e ? this.controllersRecursive() : this.controllers).forEach((e=>e.reset())),
        this
    }
    onChange(e) {
        return this._onChange = e,
        this
    }
    _callOnChange(e) {
        this.parent && this.parent._callOnChange(e),
        void 0 !== this._onChange && this._onChange.call(this, {
            object: e.object,
            property: e.property,
            value: e.getValue(),
            controller: e
        })
    }
    onFinishChange(e) {
        return this._onFinishChange = e,
        this
    }
    _callOnFinishChange(e) {
        this.parent && this.parent._callOnFinishChange(e),
        void 0 !== this._onFinishChange && this._onFinishChange.call(this, {
            object: e.object,
            property: e.property,
            value: e.getValue(),
            controller: e
        })
    }
    destroy() {
        this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1),
        this.parent.folders.splice(this.parent.folders.indexOf(this), 1)),
        this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement),
        Array.from(this.children).forEach((e=>e.destroy()))
    }
    controllersRecursive() {
        let e = Array.from(this.controllers);
        return this.folders.forEach((t=>{
            e = e.concat(t.controllersRecursive())
        }
        )),
        e
    }
    foldersRecursive() {
        let e = Array.from(this.folders);
        return this.folders.forEach((t=>{
            e = e.concat(t.foldersRecursive())
        }
        )),
        e
    }
}
var tl, nl = el;
tl = new URL(s("27Lyk").resolve("45yJs"),import.meta.url).toString();
new class {
    constructor(e) {
        this.scene = new Br,
        this.container = e.dom,
        this.width = this.container.offsetWidth,
        this.height = this.container.offsetHeight,
        this.renderer = new kr({
            preserveDrawingBuffer: !0
        }),
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
        this.renderer.setSize(this.width, this.height),
        this.renderer.setClearColor(0, 1),
        this.renderer.physicallyCorrectLights = !0,
        this.renderer.outputEncoding = 3001,
        this.container.appendChild(this.renderer.domElement),
        this.raycaster = new Ma,
        this.pointer = new M,
        this.point = new X(0,0,0),
        this.camera = new $t(66,window.innerWidth / window.innerHeight,.001,100),
        this.camera.position.set(4, 5, 4),
        this.controls = new Na(this.camera,this.renderer.domElement),
        this.time = 0,
        this.dracoLoader = new Uo,
        this.dracoLoader.setDecoderPath("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/"),
        this.gltf = new za,
        this.gltf.setDRACOLoader(this.dracoLoader),
        this.isPlaying = !0;
        this.materials = [],
        [{
            particle_size: .02,
            particle_size_frequency: 1.188,
            particle_size_dispersion: .3,
            rotation_dispersion: .1,
            time_scale: .01,
            twist_speed: 0,
            twist_frequency: 1.5,
            twist_dispersion: .1,
            twist_dispersion_frequency: .5,
            twist_amplitude: 5,
            rotation_speed: 0,
            frequency: 0,
            amplitude: .346,
            offset: 0,
            opacity: 1,
            cone_shape: 0,
            color: "#fefefe",
            instance_count: 1e2,
            min_radius: 3,
            max_radius: 5.3
        }, {
            particle_size: .03,
            particle_size_frequency: .658,
            particle_size_dispersion: .197,
            time_scale: .098,
            twist_speed: 1.76,
            twist_dispersion: .3,
            twist_dispersion_frequency: 1.196,
            twist_frequency: .2136,
            twist_amplitude: .5,
            rotation_speed: 0.1,
            rotation_dispersion: .168,
            frequency: .69,
            amplitude: .092,
            offset: .6,
            opacity: .276,
            cone_shape: 1,
            color: "#C993E9",
            instance_count: 1e4,
            min_radius: .5,
            max_radius: 5
        }, {
            particle_size: .0184,
            particle_size_frequency: 1.62,
            particle_size_dispersion: .144,
            time_scale: .147,
            twist_speed: .12,
            twist_dispersion: 1.3,
            twist_dispersion_frequency: .72,
            twist_frequency: .183,
            twist_amplitude: 0,
            rotation_speed: .12,
            rotation_dispersion: .01,
            frequency: 1.37,
            amplitude: .188,
            offset: 2.22,
            opacity: .22,
            cone_shape: 1,
            color: "#88b3ce",
            instance_count: 2e4,
            min_radius: .5,
            max_radius: 5
        }].forEach((e=>{
            this.getMesh(e)
        }
        )),
        this.resize(),
        this.raycasterEvent(),
        this.render(),
        this.setupResize()
    }
    raycasterEvent() {
        let e = new Ht(new cn(100,100,100,100).rotateX(-Math.PI / 2),new ct({
            color: 16711680,
            wireframe: !0
        }))
          , t = new Ht(new bs(.1,20,20),new ct({
            color: 16711680,
            wireframe: !0
        }));
        window.addEventListener("pointermove", (n=>{
            this.pointer.x = n.clientX / window.innerWidth * 2 - 1,
            this.pointer.y = -n.clientY / window.innerHeight * 2 + 1,
            this.raycaster.setFromCamera(this.pointer, this.camera);
            const i = this.raycaster.intersectObjects([e]);
            i[0] && (this.point = i[0].point,
            console.log(this.pointer, i[0].point),
            t.position.copy(i[0].point))
        }
        ))
    }
    settings() {
        this.settings = {
            progress: 0
        },
        this.gui = new nl,
        this.gui.add(this.settings, "progress", 0, 1, .01)
    }
    setupResize() {
        window.addEventListener("resize", this.resize.bind(this))
    }
    resize() {
        this.width = this.container.offsetWidth,
        this.height = this.container.offsetHeight,
        this.renderer.setSize(this.width, this.height),
        this.camera.aspect = this.width / this.height,
        this.camera.updateProjectionMatrix()
    }
    getMesh(e) {
        let n = e.instance_count
          , i = e.min_radius
          , r = e.max_radius
          , s = new cn(1,1)
          , a = new ha;
        a.setAttribute("position", s.getAttribute("position")),
        a.index = s.index;
        const o = new Float32Array(3 * n);
        for (let e = 0; e < n; e++) {
            let t = .05 * (2 * Math.random() - 1)
              , s = .2 * (2 * Math.random() - 1)
              , a = .05 * (2 * Math.random() - 1)
              , l = Math.pow(e / (n - 1), .5)
              , c = 2 * Math.PI * .618033 * e
              , h = new X(l * Math.cos(c) + t,0,l * Math.sin(c) + a);
            h.multiplyScalar(r - i).add(h.clone().normalize().multiplyScalar(i)),
            o[3 * e + 0] = h.x,
            o[3 * e + 1] = h.y + s,
            o[3 * e + 2] = h.z
        }
        let l = new ns(o,3,!1);
        a.setAttribute("w_pos", l),
        a.instanceCount = n;
        let c = new Xt({
            side: 2,
            uniforms: {
                time: {
                    value: 0
                },
                resolution: {
                    value: new V
                },
                _MainTexture: {
                    value: (new Ys).load(t(tl))
                },
                _Opacity: {
                    value: e.opacity
                },
                _MouseWorldPosition: {
                    value: new X(100,0,0)
                },
                _Size: {
                    value: e.particle_size
                },
                _Time: {
                    value: 0
                },
                _RotationSpeed: {
                    value: e.rotation_speed
                },
                _TwistSpeed: {
                    value: e.twist_speed
                },
                _TwistFrequency: {
                    value: e.twist_frequency
                },
                _TwistDispersion: {
                    value: e.twist_dispersion
                },
                _TwistDispersionFrequency: {
                    value: e.twist_dispersion_frequency
                },
                _RotationDispersion: {
                    value: e.rotation_dispersion
                },
                _SizeFrequency: {
                    value: e.particle_size_frequency
                },
                _SizeDispersion: {
                    value: e.particle_size_dispersion
                },
                _TwistAmplitude: {
                    value: e.twist_amplitude
                },
                _NoiseOffset: {
                    value: e.offset
                },
                _NoiseFrequency: {
                    value: 0
                },
                _NoiseAmplitude: {
                    value: e.amplitude
                },
                _Color: {
                    value: new z(e.color)
                },
                _UseConeShape: {
                    value: 0
                },
                _MouseSphereRadius: {
                    value: .3
                },
                _MouseSphereAttractionRadius: {
                    value: .4
                },
                _MouseSphereFalloff: {
                    value: 1
                },
                _UseMouse: {
                    value: 0
                },
                _CameraFadeout: {
                    value: 1
                }
            },
            depthWrite: !1,
            transparent: !0,
            vertexShader: t('precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\n#define GLSLIFY 1\nattribute vec3 w_pos;\nattribute float size;\n\nvarying vec3 vNormal;\nvarying vec3 vWPos;\n// varying vec3 vPos;\nvarying vec2 vUv;\nvarying float vDistanceToPlanet;\nvarying float vDistanceToCamera;\nvarying float vDistanceToMouse;\n\nuniform float _Size;\nuniform float _SizeDispersion;\nuniform float _Time;\nuniform float _NoiseFrequency;\nuniform float _SizeFrequency;\nuniform float _NoiseAmplitude;\n\nuniform float _NoiseOffset;\nuniform float _RotationSpeed;\nuniform float _RotationDispersion;\nuniform float _TwistSpeed;\nuniform float _TwistDispersion;\nuniform float _TwistDispersionFrequency;\nuniform float _TwistFrequency;\nuniform float _TwistAmplitude;\n\nuniform vec3 _MouseWorldPosition;\nuniform float _MouseSphereRadius;\nuniform float _MouseSphereAttractionRadius;\nuniform float _MouseSphereFalloff;\nuniform float _UseMouse;\n\nuniform float _UseConeShape;\n#define PLANET_COUNT 6\nuniform vec4 _PlanetsData[PLANET_COUNT];\n\n#define GLSLIFY 1\n//\n// GLSL textureless classic 3D noise "cnoise",\n// with an RSL-style periodic variant "pnoise".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-10-11\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+10.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n\nmat3 rotation3dY(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n\n  return mat3(\n    c, 0.0, -s,\n    0.0, 1.0, 0.0,\n    s, 0.0, c\n  );\n}\n\nfloat saturate(float x)\n{\n  return clamp(x, 0.0, 1.0);\n}\n\nvec3 curl_noise(vec3 p)\n{\n\n  // return curlNoise(p);\n  const float step = 0.01;\n  float ddx = cnoise(p+vec3(step, 0.0, 0.0)) - cnoise(p-vec3(step, 0.0, 0.0));\n  float ddy = cnoise(p+vec3(0.0, step, 0.0)) - cnoise(p-vec3(0.0, step, 0.0));\n  float ddz = cnoise(p+vec3(0.0, 0.0, step)) - cnoise(p-vec3(0.0, 0.0, step));\n\n  const float divisor = 1.0 / ( 2.0 * step );\n  return ( vec3(ddy - ddz, ddz - ddx, ddx - ddy) * divisor );\n}\n\nvec3 fbm_vec3(vec3 p, float frequency, float offset)\n{\n  return vec3(\n    cnoise((p+vec3(offset))*frequency),\n    cnoise((p+vec3(offset+20.0))*frequency),\n    cnoise((p+vec3(offset-30.0))*frequency)\n  );\n}\n\nvec3 compute_twist_offset(vec3 p)\n{\n  float twist_scale = cnoise(w_pos * _TwistDispersionFrequency)*0.5+0.5;\n  vec3 world_pos = rotation3dY(_Time*(_TwistSpeed+twist_scale*_TwistDispersion)+length(w_pos.xz*1.0)) * p;\n  vec3 offset = fbm_vec3(world_pos, _TwistFrequency, 0.);\n  return offset * _TwistAmplitude;\n}\n\nvec3 compute_main_offset(vec3 p)\n{\n  return fbm_vec3(p, 0., 0.);\n}\n\nvec3 get_point_on_mouse(vec3 pos, float t)\n{\n  vec3 dir = (pos - _MouseWorldPosition);\n  return mix(pos, _MouseWorldPosition + normalize(dir) * 0.3, t);\n}\nvoid main()\n{\n  float particle_size = cnoise(w_pos * _SizeFrequency)*0.5+0.5;\n\n  vec3 world_pos = rotation3dY(5.*_Time* (_RotationSpeed + particle_size*_RotationDispersion)) * w_pos;\n\n  vec3 offset = 1.*compute_twist_offset(world_pos);\n  vec3 offset2 = 1.*compute_main_offset(world_pos+offset);\n\n  vec3 particle_w_pos = (modelMatrix * vec4(world_pos+offset+offset2, 1.0)).xyz;\n  // vec3 particle_w_pos = (modelMatrix * vec4(w_pos, 1.0)).xyz;\n\n  // mouse\n  vDistanceToMouse = 1.0-saturate((length(_MouseWorldPosition.xz-particle_w_pos.xz)-0.4));\n  particle_w_pos = get_point_on_mouse(particle_w_pos, pow(vDistanceToMouse, 2.0));\n\n  // particle_w_pos.y = length(_MouseWorldPosition.xz-particle_w_pos.xz);\n\n  //final\n  vec4 view_pos = viewMatrix  * vec4(particle_w_pos, 1.0);\n \n\n  // sizes\n  view_pos.xyz += position* (_Size + particle_size * _SizeDispersion);\n\n  gl_Position = projectionMatrix * view_pos;\n  vUv = position.xy + vec2(0.5);\n\n  // gl_Position = projectionMatrix*viewMatrix  * vec4(particle_w_pos, 1.0);;\n}\n\n'),
            fragmentShader: t("precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n#define HIGH_PRECISION\n#define SHADER_NAME ShaderMaterial\n\n#define GLSLIFY 1\nuniform sampler2D _MainTexture;\nuniform vec3 _Color;\nvarying vec2 vUv;\nvarying vec3 vWPos;\n\nuniform float _Opacity;\nuniform float _CameraFadeout;\nvarying float vDistanceToPlanet;\nvarying float vDistanceToCamera;\n// varying float vDistanceToMouse;\n\nfloat saturate(float x)\n{\n  return clamp(x, 0.0, 1.0);\n}\nvec3 SRGBtoLinear(vec3 srgb) {\n    vec3 linOut = pow(srgb.xyz, vec3(2.2));\n    return vec3(linOut);\n}\nvec3 linearToSRGB(vec3 color) {\n    return pow(color, vec3(1.0 / 2.2));\n}\n\nvoid main()\n{\n  vec2 uv = vUv*2.0-vec2(1.0);\n  float strength = exp(-5.0*saturate(length(uv)));\n\n  vec3 col = texture2D(_MainTexture, vUv).rgb;\n//   col = SRGBtoLinear(col);\n\n  // planet_mask *= 1.0-exp(-(vDistanceToCamera-2.0));\n\n  gl_FragColor = vec4(_Color, col.r);\n//   gl_FragColor.a = linearToSRGB(vec3(gl_FragColor.a)).r ;\n\n  // gl_FragColor.rgb = vec3(vDistanceToMouse);\n  // gl_FragColor.rgb = vec3(1.0-exp(-(vDistanceToCamera-1.0)));\n  // gl_FragColor = vec4(1.);\n  // gl_FragColor.a = 1.0;\n  // gl_FragColor.rgb *= planet_mask;\n  //gl_FragColor.a = 1.0;\n  //gl_FragColor.rgb = vec3(vUv, 0.0);\n\n}\n\n")
        });
        this.cloud = new Ht(a,c),
        this.cloud.frustumCulled = !1,
        this.scene.add(this.cloud),
        this.materials.push(c)
    }
    stop() {
        this.isPlaying = !1
    }
    play() {
        this.isPlaying || (this.isPlaying = !0,
        this.render())
    }
    render() {
        this.isPlaying && (this.time += .05,
        this.scene.rotation.z = .3,
        this.materials.forEach((e=>{
            e.uniforms._Time.value = .01 * this.time,
            e.uniforms._MouseWorldPosition.value = this.point
        }
        )),
        requestAnimationFrame(this.render.bind(this)),
        this.renderer.render(this.scene, this.camera))
    }
}
({
    dom: document.getElementById("container")
});
//# sourceMappingURL=index.f1cfcb42.js.map
