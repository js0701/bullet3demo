// xg - http://alteredqualia.com/xg
function getHttpRequest(e, t, r) {
    var a = {
            load: function(e) {
                t(i, e)
            },
            progress: function(e) {
                r(i, e)
            }
        },
        i = new XMLHttpRequest;
    addListeners(i, a), i.open("GET", e, !0), i.send(null)
}

function getJsonRequest(e, t) {
    getHttpRequest(e, function(e) {
        t(JSON.parse(e.responseText))
    }, function() {})
}

function addListeners(e, t) {
    for (var r in t) e.addEventListener(r, t[r])
}
var XG = XG || {
    VERSION: "0"
};
XG.elementIndexUintAvailable = !1, XG.CullFaceNone = 0, XG.CullFaceBack = 1, XG.CullFaceFront = 2, XG.CullFaceFrontBack = 3, XG.FrontFaceDirectionCW = 0, XG.FrontFaceDirectionCCW = 1, XG.BasicShadowMap = 0, XG.PCFShadowMap = 1, XG.PCFSoftShadowMap = 2, XG.PCFSoftHQShadowMap = 3, XG.FrontSide = 0, XG.BackSide = 1, XG.DoubleSide = 2, XG.NoBlending = 0, XG.NormalBlending = 1, XG.AdditiveBlending = 2, XG.SubtractiveBlending = 3, XG.MultiplyBlending = 4, XG.CustomBlending = 5, XG.AddEquation = 32774, XG.SubtractEquation = 32778, XG.ReverseSubtractEquation = 32779, XG.ZeroFactor = 0, XG.OneFactor = 1, XG.SrcColorFactor = 768, XG.OneMinusSrcColorFactor = 769, XG.SrcAlphaFactor = 770, XG.OneMinusSrcAlphaFactor = 771, XG.DstAlphaFactor = 772, XG.OneMinusDstAlphaFactor = 773, XG.DstColorFactor = 774, XG.OneMinusDstColorFactor = 775, XG.SrcAlphaSaturateFactor = 776, XG.MultiplyOperation = 0, XG.MixOperation = 1, XG.AddOperation = 2, XG.RepeatWrapping = 10497, XG.ClampToEdgeWrapping = 33071, XG.MirroredRepeatWrapping = 33648, XG.NearestFilter = 9728, XG.LinearFilter = 9729, XG.NearestMipMapNearestFilter = 9984, XG.LinearMipMapNearestFilter = 9985, XG.NearestMipMapLinearFilter = 9986, XG.LinearMipMapLinearFilter = 9987, XG.ByteType = 5120, XG.UnsignedByteType = 5121, XG.ShortType = 5122, XG.UnsignedShortType = 5123, XG.IntType = 5124, XG.UnsignedIntType = 5125, XG.FloatType = 5126, XG.HalfFloatType = 36193, XG.UnsignedShort4444Type = 32819, XG.UnsignedShort5551Type = 32820, XG.UnsignedShort565Type = 33635, XG.DepthComponentFormat = 6402, XG.AlphaFormat = 6406, XG.RGBFormat = 6407, XG.RGBAFormat = 6408, XG.LuminanceFormat = 6409, XG.LuminanceAlphaFormat = 6410, XG.RGB_S3TC_DXT1_Format = 33776, XG.RGBA_S3TC_DXT1_Format = 33777, XG.RGBA_S3TC_DXT3_Format = 33778, XG.RGBA_S3TC_DXT5_Format = 33779, XG.RGB_PVRTC_4BPPV1_Format = 35840, XG.RGB_PVRTC_2BPPV1_Format = 35841, XG.RGBA_PVRTC_4BPPV1_Format = 35842, XG.RGBA_PVRTC_2BPPV1_Format = 35843, XG.RGB_ETC1_Format = 36196, XG.RGB_ATC_Format = 35986, XG.RGBA_ATC_EXPLICIT_ALPHA_Format = 35987, XG.RGBA_ATC_INTERPOLATED_ALPHA_Format = 34798, XG.NoOperator = 0, XG.SimpleOperator = 1, XG.LinearOperator = 2, XG.ReinhardOperator = 3, XG.FilmicOperator = 4, XG.Filmic2015Operator = 5, XG.UnchartedOperator = 6, XG.LumaReinhardOperator = 7, XG.WhitePreservingReinhardOperator = 8, XG.PhotographicOperator = 9, XG.SimpleBRDF = 0, XG.BlinnPhongBRDF = 1, XG.GGXBRDF = 2, XG.xyzOrder = 0, XG.yxzOrder = 1, XG.zxyOrder = 2, XG.zyxOrder = 3, XG.yzxOrder = 4, XG.xzyOrder = 5, XG.paramTypedArrayToXG = function(e) {
    var t;
    return e instanceof Float32Array ? t = XG.FloatType : e instanceof Uint32Array ? t = XG.UnsignedIntType : e instanceof Uint16Array ? t = XG.UnsignedShortType : e instanceof Uint8Array ? t = XG.UnsignedByteType : e instanceof Int32Array ? t = XG.IntType : e instanceof Int16Array ? t = XG.ShortType : e instanceof Int8Array && (t = XG.ByteType), t
}, XG.paramXGToTypedArray = function(e) {
    var t;
    return e === XG.FloatType ? t = Float32Array : e === XG.UnsignedIntType ? t = Uint32Array : e === XG.UnsignedShortType ? t = Uint16Array : e === XG.UnsignedByteType ? t = Uint8Array : e === XG.IntType ? t = Int32Array : e === XG.ShortType ? t = Int16Array : e === XG.ByteType && (t = Int8Array), t
}, XG.Projector = function() {
    var e = new XG.Matrix4;
    this.projectVector = function(t, r) {
        return r.matrixWorldInverse.getInverse(r.matrixWorld), e.multiply(r.projectionMatrix, r.matrixWorldInverse), e.multiplyVector3(t), t
    }, this.unprojectVector = function(t, r) {
        return r.projectionMatrixInverse.getInverse(r.projectionMatrix), e.multiply(r.matrixWorld, r.projectionMatrixInverse), e.multiplyVector3(t), t
    }
}, XG.Color = function(e) {
    return void 0 !== e && this.set(e), this
}, XG.Color.prototype = {
    constructor: XG.Color,
    r: 1,
    g: 1,
    b: 1,
    copy: function(e) {
        return this.r = e.r, this.g = e.g, this.b = e.b, this
    },
    copyGammaToLinear: function(e) {
        return this.r = e.r * e.r, this.g = e.g * e.g, this.b = e.b * e.b, this
    },
    copyLinearToGamma: function(e) {
        return this.r = Math.sqrt(e.r), this.g = Math.sqrt(e.g), this.b = Math.sqrt(e.b), this
    },
    copyTonemapped: function(e, t, r, a) {
        function i(e) {
            return (e * (o * e + s * n) + l * h) / (e * (o * e + n) + l * d) - h / d
        }
        var o = .15,
            n = .5,
            s = .1,
            l = .2,
            h = .02,
            d = .3,
            u = 11.2,
            c = 1 / 2.2;
        switch (this.r = e.r * r, this.g = e.g * r, this.b = e.b * r, t) {
            case XG.SimpleOperator:
                this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b);
                break;
            case XG.LinearOperator:
                this.r = Math.pow(this.r, c), this.g = Math.pow(this.g, c), this.b = Math.pow(this.b, c);
                break;
            case XG.ReinhardOperator:
                this.r = this.r / (1 + this.r), this.g = this.g / (1 + this.g), this.b = this.b / (1 + this.b), this.r = Math.pow(this.r, c), this.g = Math.pow(this.g, c), this.b = Math.pow(this.b, c);
                break;
            case XG.FilmicOperator:
                var f = Math.max(0, this.r - .004),
                    p = Math.max(0, this.g - .004),
                    m = Math.max(0, this.b - .004);
                this.r = f * (6.2 * f + .5) / (f * (6.2 * f + 1.7) + .06), this.g = p * (6.2 * p + .5) / (p * (6.2 * p + 1.7) + .06), this.b = m * (6.2 * m + .5) / (m * (6.2 * m + 1.7) + .06);
                break;
            case XG.Filmic2015Operator:
                var v = this.r,
                    g = this.g,
                    S = this.b,
                    x = a,
                    G = 1.425 * v + .05,
                    M = 1.425 * g + .05,
                    y = 1.425 * S + .05,
                    w = 1.425 * x + .05,
                    D = (v * G + .004) / (v * (G + .55) + .0491) - .0821,
                    X = (g * M + .004) / (g * (M + .55) + .0491) - .0821,
                    C = (S * y + .004) / (S * (y + .55) + .0491) - .0821,
                    A = (x * w + .004) / (x * (w + .55) + .0491) - .0821;
                this.r = D / A, this.g = X / A, this.b = C / A, this.r = Math.pow(this.r, c), this.g = Math.pow(this.g, c), this.b = Math.pow(this.b, c);
                break;
            case XG.UnchartedOperator:
                var _ = 2,
                    T = i(_ * this.r),
                    b = i(_ * this.g),
                    P = i(_ * this.b),
                    L = 1 / i(u * a);
                this.r = T * L, this.g = b * L, this.b = P * L, this.r = Math.pow(this.r, c), this.g = Math.pow(this.g, c), this.b = Math.pow(this.b, c)
        }
        return this
    },
    convertGammaToLinear: function() {
        var e = this.r,
            t = this.g,
            r = this.b;
        return this.r = e * e, this.g = t * t, this.b = r * r, this
    },
    convertLinearToGamma: function() {
        return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
    },
    set: function(e) {
        switch (typeof e) {
            case "number":
                this.setHex(e);
                break;
            case "string":
                this.setStyle(e)
        }
    },
    setRGB: function(e, t, r) {
        return this.r = e, this.g = t, this.b = r, this
    },
    setHSV: function(e, t, r) {
        var a, i, o, n, s;
        return 0 === r ? this.r = this.g = this.b = 0 : (a = Math.floor(6 * e), i = 6 * e - a, o = r * (1 - t), n = r * (1 - t * i), s = r * (1 - t * (1 - i)), 0 === a ? (this.r = r, this.g = s, this.b = o) : 1 === a ? (this.r = n, this.g = r, this.b = o) : 2 === a ? (this.r = o, this.g = r, this.b = s) : 3 === a ? (this.r = o, this.g = n, this.b = r) : 4 === a ? (this.r = s, this.g = o, this.b = r) : 5 === a && (this.r = r, this.g = o, this.b = n)), this
    },
    adjustHSV: function(e, t, r) {
        var a = XG.__hsv;
        this.getHSV(a), a.h = XG.Math.clamp(a.h + e, 0, 1), a.s = XG.Math.clamp(a.s + t, 0, 1), a.v = XG.Math.clamp(a.v + r, 0, 1), this.setHSV(a.h, a.s, a.v)
    },
    getHex: function() {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    },
    setHex: function(e) {
        return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
    },
    getHexString: function() {
        return ("000000" + this.getHex().toString(16)).slice(-6)
    },
    getStyle: function() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    },
    setStyle: function(e) {
        if (/^rgb\((\d+),(\d+),(\d+)\)$/i.test(e)) {
            var t = /^rgb\((\d+),(\d+),(\d+)\)$/i.exec(e);
            return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, this
        }
        if (/^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.test(e)) {
            var t = /^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.exec(e);
            return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, this
        }
        if (/^\#([0-9a-f]{6})$/i.test(e)) {
            var t = /^\#([0-9a-f]{6})$/i.exec(e);
            return this.setHex(parseInt(t[1], 16)), this
        }
        if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(e)) {
            var t = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(e);
            return this.setHex(parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3], 16)), this
        }
        return /^(\w+)$/i.test(e) ? (this.setHex(XG.ColorKeywords[e]), this) : void 0
    },
    getHSV: function(e) {
        var t, r, a = this.r,
            i = this.g,
            o = this.b,
            n = Math.max(Math.max(a, i), o),
            s = Math.min(Math.min(a, i), o),
            l = n;
        if (s === n) t = 0, r = 0;
        else {
            var h = n - s;
            r = h / n, t = a === n ? (i - o) / h : i === n ? 2 + (o - a) / h : 4 + (a - i) / h, t /= 6, 0 > t && (t += 1), t > 1 && (t -= 1)
        }
        return void 0 === e && (e = {
            h: 0,
            s: 0,
            v: 0
        }), e.h = t, e.s = r, e.v = l, e
    },
    copyIntoArray: function(e, t) {
        void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b
    },
    lerpSelf: function(e, t) {
        return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
    },
    clone: function() {
        return (new XG.Color).setRGB(this.r, this.g, this.b)
    }
}, XG.ColorKeywords = {
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
}, XG.__hsv = {
    h: 0,
    s: 0,
    v: 0
}, XG.Math = {
    clamp: function(e, t, r) {
        return t > e ? t : e > r ? r : e
    },
    clampBottom: function(e, t) {
        return t > e ? t : e
    },
    mapLinear: function(e, t, r, a, i) {
        return a + (e - t) * (i - a) / (r - t)
    },
    randomFloat16: function() {
        return (65280 * Math.random() + 255 * Math.random()) / 65535
    },
    randomInt: function(e, t) {
        return e + Math.floor(Math.random() * (t - e + 1))
    },
    randomFloat: function(e, t) {
        return e + Math.random() * (t - e)
    },
    randomFloatSpread: function(e) {
        return e * (.5 - Math.random())
    },
    sign: function(e) {
        return 0 > e ? -1 : e > 0 ? 1 : 0
    },
    degToRad: function(e) {
        return e * XG.Math.__d2r
    },
    radToDeg: function(e) {
        return e * XG.Math.__r2d
    },
    focalLengthToFov: function(e, t) {
        return 2 * Math.atan(.5 * t / e)
    },
    fovToFocalLength: function(e, t) {
        return .5 * t / Math.tan(.5 * e)
    },
    stopToFstop: function(e) {
        return Math.pow(Math.SQRT2, e)
    },
    mapSquareToDisk: function(e, t, r, a, i) {
        var o, n, s = XG.Math.__pi4;
        e > -t ? e > t ? (o = e, n = s * (t / e)) : (o = t, n = s * (2 - e / t)) : t > e ? (o = -e, n = s * (4 + t / e)) : (o = -t, n = 0 !== t ? s * (6 - e / t) : 0), void 0 !== i && (o *= Math.cos(Math.PI / i) / Math.cos(n - 2 * Math.PI / i * Math.floor((i * n + Math.PI) / (2 * Math.PI))));
        var l = o * Math.cos(n),
            h = o * Math.sin(n);
        return void 0 === r && (r = []), void 0 === a && (a = 0), r[a] = l, r[a + 1] = h, r
    },
    generateConcentricCircleSamples: function(e, t) {
        for (var r = new Array(e * e * 2), a = .5 * (e - 1), i = 0, o = -a; a >= o; o++)
            for (var n = -a; a >= n; n++) {
                var s = o / a,
                    l = n / a;
                XG.Math.mapSquareToDisk(s, l, r, i, t), i += 2
            }
        return r
    },
    generatePoissonDiscSamples: function(e) {
        for (var t = new Array(2 * e), r = 1 / e, a = 1 - r / 2, i = 2.399963229728653, o = 0, n = 0, s = 0; e > s; s++) {
            var l = Math.sqrt(1 - a),
                h = Math.cos(o) * l,
                d = Math.sin(o) * l;
            t[n] = h, t[n + 1] = d, a -= r, o += i, n += 2
        }
        return t
    },
    isPowerOfTwo: function(e) {
        return 0 !== e && 0 === (e & e - 1)
    }
}, XG.Math.__d2r = Math.PI / 180, XG.Math.__r2d = 180 / Math.PI, XG.Math.__pi4 = .25 * Math.PI, XG.Quaternion = function(e, t, r, a) {
    this.data = new Float32Array(4), this.data[0] = void 0 !== e ? e : 0, this.data[1] = void 0 !== t ? t : 0, this.data[2] = void 0 !== r ? r : 0, this.data[3] = void 0 !== a ? a : 1
}, XG.Quaternion.prototype = {
    constructor: XG.Quaternion,
    set: function(e, t, r, a) {
        var i = this.data;
        return i[0] = e, i[1] = t, i[2] = r, i[3] = a, this
    },
    setX: function(e) {
        return this.data[0] = e, this
    },
    setY: function(e) {
        return this.data[1] = e, this
    },
    setZ: function(e) {
        return this.data[2] = e, this
    },
    setW: function(e) {
        return this.data[3] = e, this
    },
    set x(e) {
        this.data[0] = e
    },
    set y(e) {
        this.data[1] = e
    },
    set z(e) {
        this.data[2] = e
    },
    set w(e) {
        this.data[3] = e
    },
    get x() {
        return this.data[0]
    },
    get y() {
        return this.data[1]
    },
    get z() {
        return this.data[2]
    },
    get w() {
        return this.data[3]
    },
    copy: function(e) {
        return this.data.set(e.data), this
    },
    copyIntoArray: function(e, t) {
        void 0 === t && (t = 0), e.set(this.data, t)
    },
    setFromEuler: function(e, t) {
        var r = this.data,
            a = e.data,
            i = Math.cos(a[0] / 2),
            o = Math.cos(a[1] / 2),
            n = Math.cos(a[2] / 2),
            s = Math.sin(a[0] / 2),
            l = Math.sin(a[1] / 2),
            h = Math.sin(a[2] / 2);
        return 0 === t || void 0 === t ? (r[0] = s * o * n + i * l * h, r[1] = i * l * n - s * o * h, r[2] = i * o * h + s * l * n, r[3] = i * o * n - s * l * h) : 1 === t ? (r[0] = s * o * n + i * l * h, r[1] = i * l * n - s * o * h, r[2] = i * o * h - s * l * n, r[3] = i * o * n + s * l * h) : 2 === t ? (r[0] = s * o * n - i * l * h, r[1] = i * l * n + s * o * h, r[2] = i * o * h + s * l * n, r[3] = i * o * n - s * l * h) : 3 === t ? (r[0] = s * o * n - i * l * h, r[1] = i * l * n + s * o * h, r[2] = i * o * h - s * l * n, r[3] = i * o * n + s * l * h) : 4 === t ? (r[0] = s * o * n + i * l * h, r[1] = i * l * n + s * o * h, r[2] = i * o * h - s * l * n, r[3] = i * o * n - s * l * h) : 5 === t && (r[0] = s * o * n - i * l * h, r[1] = i * l * n - s * o * h, r[2] = i * o * h + s * l * n, r[3] = i * o * n + s * l * h), this
    },
    setFromAxisAngle: function(e, t) {
        var r = this.data,
            a = e.data,
            i = t / 2,
            o = Math.sin(i);
        return r[0] = a[0] * o, r[1] = a[1] * o, r[2] = a[2] * o, r[3] = Math.cos(i), this
    },
    setFromRotationMatrix: function(e) {
        var t, r = this.data,
            a = e.elements,
            i = a[0],
            o = a[4],
            n = a[8],
            s = a[1],
            l = a[5],
            h = a[9],
            d = a[2],
            u = a[6],
            c = a[10],
            f = i + l + c;
        return f > 0 ? (t = .5 / Math.sqrt(f + 1), r[0] = (u - h) * t, r[1] = (n - d) * t, r[2] = (s - o) * t, r[3] = .25 / t) : i > l && i > c ? (t = 2 * Math.sqrt(1 + i - l - c), r[0] = .25 * t, r[1] = (o + s) / t, r[2] = (n + d) / t, r[3] = (u - h) / t) : l > c ? (t = 2 * Math.sqrt(1 + l - i - c), r[0] = (o + s) / t, r[1] = .25 * t, r[2] = (h + u) / t, r[3] = (n - d) / t) : (t = 2 * Math.sqrt(1 + c - i - l), r[0] = (n + d) / t, r[1] = (h + u) / t, r[2] = .25 * t, r[3] = (s - o) / t), this
    },
    inverse: function() {
        return this.conjugate().normalize(), this
    },
    conjugate: function() {
        var e = this.data;
        return e[0] *= -1, e[1] *= -1, e[2] *= -1, this
    },
    lengthSq: function() {
        var e = this.data;
        return e[0] * e[0] + e[1] * e[1] + e[2] * e[2] + e[3] * e[3]
    },
    length: function() {
        var e = this.data;
        return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2] + e[3] * e[3])
    },
    normalize: function() {
        var e = this.data,
            t = this.length();
        return 0 === t ? (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1) : (t = 1 / t, e[0] = e[0] * t, e[1] = e[1] * t, e[2] = e[2] * t, e[3] = e[3] * t), this
    },
    multiply: function(e, t) {
        return this.copy(e), this.multiplySelf(t)
    },
    multiplySelf: function(e) {
        var t = this.data,
            r = e.data,
            a = t[0],
            i = t[1],
            o = t[2],
            n = t[3],
            s = r[0],
            l = r[1],
            h = r[2],
            d = r[3];
        return t[0] = a * d + n * s + i * h - o * l, t[1] = i * d + n * l + o * s - a * h, t[2] = o * d + n * h + a * l - i * s, t[3] = n * d - a * s - i * l - o * h, this
    },
    multiplyVector3: function(e, t) {
        t || (t = e);
        var r = this.data,
            a = e.data,
            i = t.data,
            o = a[0],
            n = a[1],
            s = a[2],
            l = r[0],
            h = r[1],
            d = r[2],
            u = r[3],
            c = u * o + h * s - d * n,
            f = u * n + d * o - l * s,
            p = u * s + l * n - h * o,
            m = -l * o - h * n - d * s;
        return i[0] = c * u + m * -l + f * -d - p * -h, i[1] = f * u + m * -h + p * -l - c * -d, i[2] = p * u + m * -d + c * -h - f * -l, t
    },
    slerpSelf: function(e, t) {
        var r = this.data,
            a = e.data,
            i = r[0],
            o = r[1],
            n = r[2],
            s = r[3],
            l = a[0],
            h = a[1],
            d = a[2],
            u = a[3],
            c = s * u + i * l + o * h + n * d;
        if (0 > c ? (r[0] = -l, r[1] = -h, r[2] = -d, r[3] = -u, c = -c) : this.copy(e), c >= 1) return r[0] = i, r[1] = o, r[2] = n, r[3] = s, this;
        var f = Math.acos(c),
            p = Math.sqrt(1 - c * c);
        if (Math.abs(p) < .001) return r[0] = .5 * (i + r[0]), r[1] = .5 * (o + r[1]), r[2] = .5 * (n + r[2]), r[3] = .5 * (s + r[3]), this;
        var m = Math.sin((1 - t) * f) / p,
            v = Math.sin(t * f) / p;
        return r[0] = i * m + r[0] * v, r[1] = o * m + r[1] * v, r[2] = n * m + r[2] * v, r[3] = s * m + r[3] * v, this
    },
    equals: function(e) {
        var t = this.data,
            r = e.data;
        return r[0] === t[0] && r[1] === t[1] && r[2] === t[2] && r[3] === t[3]
    },
    clone: function() {
        return (new XG.Quaternion).copy(this)
    }
}, XG.Quaternion.slerp = function(e, t, r, a) {
    return r.copy(e).slerpSelf(t, a)
}, XG.Vector2 = function(e, t) {
    this.data = new Float32Array(2), this.data[0] = void 0 !== e ? e : 0, this.data[1] = void 0 !== t ? t : 0
}, XG.Vector2.prototype = {
    constructor: XG.Vector2,
    set: function(e, t) {
        var r = this.data;
        return r[0] = e, r[1] = t, this
    },
    setX: function(e) {
        return this.data[0] = e, this
    },
    setY: function(e) {
        return this.data[1] = e, this
    },
    set x(e) {
        this.data[0] = e
    },
    set y(e) {
        this.data[1] = e
    },
    get x() {
        return this.data[0]
    },
    get y() {
        return this.data[1]
    },
    copy: function(e) {
        return this.data.set(e.data), this
    },
    copyIntoArray: function(e, t) {
        void 0 === t && (t = 0), e.set(this.data, t)
    },
    addScalar: function(e) {
        var t = this.data;
        return t[0] += e, t[1] += e, this
    },
    add: function(e, t) {
        var r = this.data,
            a = e.data,
            i = t.data;
        return r[0] = a[0] + i[0], r[1] = a[1] + i[1], this
    },
    addSelf: function(e) {
        var t = this.data,
            r = e.data;
        return t[0] += r[0], t[1] += r[1], this
    },
    sub: function(e, t) {
        var r = this.data,
            a = e.data,
            i = t.data;
        return r[0] = a[0] - i[0], r[1] = a[1] - i[1], this
    },
    subSelf: function(e) {
        var t = this.data,
            r = e.data;
        return t[0] -= r[0], t[1] -= r[1], this
    },
    multiplyScalar: function(e) {
        var t = this.data;
        return t[0] *= e, t[1] *= e, this
    },
    divideScalar: function(e) {
        var t = this.data;
        return 0 !== e ? (t[0] /= e, t[1] /= e) : (t[0] = 0, t[1] = 0), this
    },
    negate: function() {
        return this.multiplyScalar(-1)
    },
    dot: function(e) {
        var t = this.data,
            r = e.data;
        return t[0] * r[0] + t[1] * r[1]
    },
    lengthSq: function() {
        var e = this.data;
        return e[0] * e[0] + e[1] * e[1]
    },
    length: function() {
        var e = this.data;
        return Math.sqrt(e[0] * e[0] + e[1] * e[1])
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    distanceTo: function(e) {
        return Math.sqrt(this.distanceToSquared(e))
    },
    distanceToSquared: function(e) {
        var t = this.data,
            r = e.data,
            a = t[0] - r[0],
            i = t[1] - r[1];
        return a * a + i * i
    },
    setLength: function(e) {
        var t = this.length();
        return 0 !== t && e !== t && this.multiplyScalar(e / t), this
    },
    lerpSelf: function(e, t) {
        var r = this.data,
            a = e.data;
        return r[0] += (a[0] - r[0]) * t, r[1] += (a[1] - r[1]) * t, this
    },
    equals: function(e) {
        var t = this.data,
            r = e.data;
        return r[0] === t[0] && r[1] === t[1]
    },
    clone: function() {
        return (new XG.Vector2).copy(this)
    }
}, XG.Vector3 = function(e, t, r) {
    this.data = new Float32Array(3), this.data[0] = void 0 !== e ? e : 0, this.data[1] = void 0 !== t ? t : 0, this.data[2] = void 0 !== r ? r : 0
}, XG.Vector3.prototype = {
    constructor: XG.Vector3,
    set: function(e, t, r) {
        var a = this.data;
        return a[0] = e, a[1] = t, a[2] = r, this
    },
    setX: function(e) {
        return this.data[0] = e, this
    },
    setY: function(e) {
        return this.data[1] = e, this
    },
    setZ: function(e) {
        return this.data[2] = e, this
    },
    set x(e) {
        this.data[0] = e
    },
    set y(e) {
        this.data[1] = e
    },
    set z(e) {
        this.data[2] = e
    },
    get x() {
        return this.data[0]
    },
    get y() {
        return this.data[1]
    },
    get z() {
        return this.data[2]
    },
    copy: function(e) {
        return this.data.set(e.data), this
    },
    copyIntoArray: function(e, t) {
        void 0 === t && (t = 0), e.set(this.data, t)
    },
    add: function(e, t) {
        var r = this.data,
            a = e.data,
            i = t.data;
        return r[0] = a[0] + i[0], r[1] = a[1] + i[1], r[2] = a[2] + i[2], this
    },
    addSelf: function(e) {
        var t = this.data,
            r = e.data;
        return t[0] += r[0], t[1] += r[1], t[2] += r[2], this
    },
    addScalar: function(e) {
        var t = this.data;
        return t[0] += e, t[1] += e, t[2] += e, this
    },
    sub: function(e, t) {
        var r = this.data,
            a = e.data,
            i = t.data;
        return r[0] = a[0] - i[0], r[1] = a[1] - i[1], r[2] = a[2] - i[2], this
    },
    subSelf: function(e) {
        var t = this.data,
            r = e.data;
        return t[0] -= r[0], t[1] -= r[1], t[2] -= r[2], this
    },
    multiply: function(e, t) {
        var r = this.data,
            a = e.data,
            i = t.data;
        return r[0] = a[0] * i[0], r[1] = a[1] * i[1], r[2] = a[2] * i[2], this
    },
    multiplySelf: function(e) {
        var t = this.data,
            r = e.data;
        return t[0] *= r[0], t[1] *= r[1], t[2] *= r[2], this
    },
    multiplyScalar: function(e) {
        var t = this.data;
        return t[0] *= e, t[1] *= e, t[2] *= e, this
    },
    divideSelf: function(e) {
        var t = this.data,
            r = e.data;
        return t[0] /= r[0], t[1] /= r[1], t[2] /= r[2], this
    },
    divideScalar: function(e) {
        var t = this.data;
        return 0 !== e ? (t[0] /= e, t[1] /= e, t[2] /= e) : (t[0] = 0, t[1] = 0, t[2] = 0), this
    },
    negate: function() {
        return this.multiplyScalar(-1)
    },
    dot: function(e) {
        var t = this.data,
            r = e.data;
        return t[0] * r[0] + t[1] * r[1] + t[2] * r[2]
    },
    lengthSq: function() {
        var e = this.data;
        return e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
    },
    length: function() {
        var e = this.data;
        return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2])
    },
    lengthManhattan: function() {
        var e = this.data;
        return Math.abs(e[0]) + Math.abs(e[1]) + Math.abs(e[2])
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(e) {
        var t = this.length();
        return 0 !== t && e !== t && this.multiplyScalar(e / t), this
    },
    cross: function(e, t) {
        var r = this.data,
            a = e.data,
            i = t.data;
        return r[0] = a[1] * i[2] - a[2] * i[1], r[1] = a[2] * i[0] - a[0] * i[2], r[2] = a[0] * i[1] - a[1] * i[0], this
    },
    crossSelf: function(e) {
        var t = this.data,
            r = e.data,
            a = t[0],
            i = t[1],
            o = t[2];
        return t[0] = i * r[2] - o * r[1], t[1] = o * r[0] - a * r[2], t[2] = a * r[1] - i * r[0], this
    },
    minSelf: function(e) {
        var t = this.data,
            r = e.data;
        return t[0] = Math.min(t[0], r[0]), t[1] = Math.min(t[1], r[1]), t[2] = Math.min(t[2], r[2]), this
    },
    maxSelf: function(e) {
        var t = this.data,
            r = e.data;
        return t[0] = Math.max(t[0], r[0]), t[1] = Math.max(t[1], r[1]), t[2] = Math.max(t[2], r[2]), this
    },
    angleTo: function(e) {
        return Math.acos(this.dot(e) / this.length() / e.length())
    },
    distanceTo: function(e) {
        return Math.sqrt(this.distanceToSquared(e))
    },
    distanceToSquared: function(e) {
        var t = this.data,
            r = e.data,
            a = t[0] - r[0],
            i = t[1] - r[1],
            o = t[2] - r[2];
        return a * a + i * i + o * o
    },
    getPositionFromMatrix: function(e) {
        var t = this.data;
        return t[0] = e.elements[12], t[1] = e.elements[13], t[2] = e.elements[14], this
    },
    setEulerFromRotationMatrix: function(e, t) {
        var r = this.data,
            a = XG.Math.clamp,
            i = e.elements,
            o = i[0],
            n = i[4],
            s = i[8],
            l = i[1],
            h = i[5],
            d = i[9],
            u = i[2],
            c = i[6],
            f = i[10];
        return 0 === t || void 0 === t ? (r[1] = Math.asin(a(s, -1, 1)), Math.abs(s) < .99999 ? (r[0] = Math.atan2(-d, f), r[2] = Math.atan2(-n, o)) : (r[0] = Math.atan2(c, h), r[2] = 0)) : 1 === t ? (r[0] = Math.asin(-a(d, -1, 1)), Math.abs(d) < .99999 ? (r[1] = Math.atan2(s, f), r[2] = Math.atan2(l, h)) : (r[1] = Math.atan2(-u, o), r[2] = 0)) : 2 === t ? (r[0] = Math.asin(a(c, -1, 1)), Math.abs(c) < .99999 ? (r[1] = Math.atan2(-u, f), r[2] = Math.atan2(-n, h)) : (r[1] = 0, r[2] = Math.atan2(l, o))) : 3 === t ? (r[1] = Math.asin(-a(u, -1, 1)), Math.abs(u) < .99999 ? (r[0] = Math.atan2(c, f), r[2] = Math.atan2(l, o)) : (r[0] = 0, r[2] = Math.atan2(-n, h))) : 4 === t ? (r[2] = Math.asin(a(l, -1, 1)), Math.abs(l) < .99999 ? (r[0] = Math.atan2(-d, h), r[1] = Math.atan2(-u, o)) : (r[0] = 0, r[1] = Math.atan2(s, f))) : 5 === t && (r[2] = Math.asin(-a(n, -1, 1)), Math.abs(n) < .99999 ? (r[0] = Math.atan2(c, h), r[1] = Math.atan2(s, o)) : (r[0] = Math.atan2(-d, f), r[1] = 0)), this
    },
    setEulerFromQuaternion: function(e, t) {
        var r = XG.Math.clamp,
            a = this.data,
            i = e.data[0],
            o = e.data[1],
            n = e.data[2],
            s = e.data[3],
            l = i * i,
            h = o * o,
            d = n * n,
            u = s * s;
        return 0 === t || void 0 === t ? (a[0] = Math.atan2(2 * (i * s - o * n), u - l - h + d), a[1] = Math.asin(r(2 * (i * n + o * s), -1, 1)), a[2] = Math.atan2(2 * (n * s - i * o), u + l - h - d)) : 1 === t ? (a[0] = Math.asin(r(2 * (i * s - o * n), -1, 1)), a[1] = Math.atan2(2 * (i * n + o * s), u - l - h + d), a[2] = Math.atan2(2 * (i * o + n * s), u - l + h - d)) : 2 === t ? (a[0] = Math.asin(r(2 * (i * s + o * n), -1, 1)), a[1] = Math.atan2(2 * (o * s - n * i), u - l - h + d), a[2] = Math.atan2(2 * (n * s - i * o), u - l + h - d)) : 3 === t ? (a[0] = Math.atan2(2 * (i * s + n * o), u - l - h + d), a[1] = Math.asin(r(2 * (o * s - i * n), -1, 1)), a[2] = Math.atan2(2 * (i * o + n * s), u + l - h - d)) : 4 === t ? (a[0] = Math.atan2(2 * (i * s - n * o), u - l + h - d), a[1] = Math.atan2(2 * (o * s - i * n), u + l - h - d), a[2] = Math.asin(r(2 * (i * o + n * s), -1, 1))) : 5 === t && (a[0] = Math.atan2(2 * (i * s + o * n), u - l + h - d), a[1] = Math.atan2(2 * (i * n + o * s), u + l - h - d), a[2] = Math.asin(r(2 * (n * s - i * o), -1, 1))), this
    },
    getScaleFromMatrix: function(e) {
        var t = this.data,
            r = this.set(e.elements[0], e.elements[1], e.elements[2]).length(),
            a = this.set(e.elements[4], e.elements[5], e.elements[6]).length(),
            i = this.set(e.elements[8], e.elements[9], e.elements[10]).length();
        return t[0] = r, t[1] = a, t[2] = i, this
    },
    projectOnVector: function(e) {
        var t = XG.Vector3.__v1;
        t.copy(e), t.normalize();
        var r = this.dot(t);
        return this.copy(t), this.multiplyScalar(r), this
    },
    reflect: function(e) {
        var t = XG.Vector3.__v2;
        return t.copy(this), t.projectOnVector(e), t.multiplyScalar(2), this.sub(t, this), this
    },
    equals: function(e) {
        var t = this.data,
            r = e.data;
        return r[0] === t[0] && r[1] === t[1] && r[2] === t[2]
    },
    clone: function() {
        return (new XG.Vector3).copy(this)
    }
}, XG.Vector3.xAxis = new XG.Vector3(1, 0, 0), XG.Vector3.yAxis = new XG.Vector3(0, 1, 0), XG.Vector3.zAxis = new XG.Vector3(0, 0, 1), XG.Vector3.__v1 = new XG.Vector3, XG.Vector3.__v2 = new XG.Vector3, XG.Vector4 = function(e, t, r, a) {
    this.data = new Float32Array(4), this.data[0] = void 0 !== e ? e : 0, this.data[1] = void 0 !== t ? t : 0, this.data[2] = void 0 !== r ? r : 0, this.data[3] = void 0 !== a ? a : 1
}, XG.Vector4.prototype = {
    constructor: XG.Vector4,
    set: function(e, t, r, a) {
        var i = this.data;
        return i[0] = e, i[1] = t, i[2] = r, i[3] = a, this
    },
    setRGBA: function(e, t) {
        var r = this.data;
        return r[0] = e.r, r[1] = e.g, r[2] = e.b, r[3] = t, this
    },
    setRGBAGamma: function(e, t) {
        var r = this.data,
            a = e.r,
            i = e.g,
            o = e.b;
        return r[0] = a * a, r[1] = i * i, r[2] = o * o, r[3] = t, this
    },
    setX: function(e) {
        return this.data[0] = e, this
    },
    setY: function(e) {
        return this.data[1] = e, this
    },
    setZ: function(e) {
        return this.data[2] = e, this
    },
    setW: function(e) {
        return this.data[3] = e, this
    },
    set x(e) {
        this.data[0] = e
    },
    set y(e) {
        this.data[1] = e
    },
    set z(e) {
        this.data[2] = e
    },
    set w(e) {
        this.data[3] = e
    },
    get x() {
        return this.data[0]
    },
    get y() {
        return this.data[1]
    },
    get z() {
        return this.data[2]
    },
    get w() {
        return this.data[3]
    },
    copy: function(e) {
        return this.data.set(e.data), this
    },
    copyIntoArray: function(e, t) {
        void 0 === t && (t = 0), e.set(this.data, t)
    },
    addScalar: function(e) {
        var t = this.data;
        return t[0] += e, t[1] += e, t[2] += e, t[3] += e, this
    },
    add: function(e, t) {
        var r = this.data,
            a = e.data,
            i = t.data;
        return r[0] = a[0] + i[0], r[1] = a[1] + i[1], r[2] = a[2] + i[2], r[3] = a[3] + i[3], this
    },
    addSelf: function(e) {
        var t = this.data,
            r = e.data;
        return t[0] += r[0], t[1] += r[1], t[2] += r[2], t[3] += r[3], this
    },
    sub: function(e, t) {
        var r = this.data,
            a = e.data,
            i = t.data;
        return r[0] = a[0] - i[0], r[1] = a[1] - i[1], r[2] = a[2] - i[2], r[3] = a[3] - i[3], this
    },
    subSelf: function(e) {
        var t = this.data,
            r = e.data;
        return t[0] -= r[0], t[1] -= r[1], t[2] -= r[2], t[3] -= r[3], this
    },
    multiplyScalar: function(e) {
        var t = this.data;
        return t[0] *= e, t[1] *= e, t[2] *= e, t[3] *= e, this
    },
    divideScalar: function(e) {
        var t = this.data;
        return 0 !== e ? (t[0] /= e, t[1] /= e, t[2] /= e, t[3] /= e) : (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0), this
    },
    negate: function() {
        return this.multiplyScalar(-1)
    },
    dot: function(e) {
        var t = this.data,
            r = e.data;
        return t[0] * r[0] + t[1] * r[1] + t[2] * r[2] + t[3] * r[3]
    },
    lengthSq: function() {
        var e = this.data;
        return e[0] * e[0] + e[1] * e[1] + e[2] * e[2] + e[3] * e[3]
    },
    length: function() {
        var e = this.data;
        return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2] + e[3] * e[3])
    },
    lengthManhattan: function() {
        var e = this.data;
        return Math.abs(e[0]) + Math.abs(e[1]) + Math.abs(e[2]) + Math.abs(e[3])
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(e) {
        var t = this.length();
        return 0 !== t && e !== t && this.multiplyScalar(e / t), this
    },
    lerpSelf: function(e, t) {
        var r = this.data,
            a = e.data;
        return r[0] += (a[0] - r[0]) * t, r[1] += (a[1] - r[1]) * t, r[2] += (a[2] - r[2]) * t, r[3] += (a[3] - r[3]) * t, this
    },
    equals: function(e) {
        var t = this.data,
            r = e.data;
        return r[0] === t[0] && r[1] === t[1] && r[2] === t[2] && r[3] === t[3]
    },
    clone: function() {
        return (new XG.Vector4).copy(this)
    },
    setAxisAngleFromQuaternion: function(e) {
        var t = e.data[0],
            r = e.data[1],
            a = e.data[2],
            i = e.data[3];
        this.data[3] = 2 * Math.acos(i);
        var o = Math.sqrt(1 - i * i);
        return 1e-4 > o ? (this.data[0] = 1, this.data[1] = 0, this.data[2] = 0) : (this.data[0] = t / o, this.data[1] = r / o, this.data[2] = a / o), this
    },
    setAxisAngleFromRotationMatrix: function(e) {
        var t, r, a, i, o = .01,
            n = .1,
            s = e.elements,
            l = s[0],
            h = s[4],
            d = s[8],
            u = s[1],
            c = s[5],
            f = s[9],
            p = s[2],
            m = s[6],
            v = s[10];
        if (Math.abs(h - u) < o && Math.abs(d - p) < o && Math.abs(f - m) < o) {
            if (Math.abs(h + u) < n && Math.abs(d + p) < n && Math.abs(f + m) < n && Math.abs(l + c + v - 3) < n) return this.set(1, 0, 0, 0), this;
            t = Math.PI;
            var g = (l + 1) / 2,
                S = (c + 1) / 2,
                x = (v + 1) / 2,
                G = (h + u) / 4,
                M = (d + p) / 4,
                y = (f + m) / 4;
            return g > S && g > x ? o > g ? (r = 0, a = .707106781, i = .707106781) : (r = Math.sqrt(g), a = G / r, i = M / r) : S > x ? o > S ? (r = .707106781, a = 0, i = .707106781) : (a = Math.sqrt(S), r = G / a, i = y / a) : o > x ? (r = .707106781, a = .707106781, i = 0) : (i = Math.sqrt(x), r = M / i, a = y / i), this.set(r, a, i, t), this
        }
        var w = Math.sqrt((m - f) * (m - f) + (d - p) * (d - p) + (u - h) * (u - h));
        return Math.abs(w) < .001 && (w = 1), this.data[0] = (m - f) / w, this.data[1] = (d - p) / w, this.data[2] = (u - h) / w, this.data[3] = Math.acos((l + c + v - 1) / 2), this
    }
}, XG.Matrix3 = function(e, t, r, a, i, o, n, s, l) {
    this.elements = new Float32Array(9), this.set(void 0 !== e ? e : 1, t || 0, r || 0, a || 0, void 0 !== i ? i : 1, o || 0, n || 0, s || 0, void 0 !== l ? l : 1)
}, XG.Matrix3.prototype = {
    constructor: XG.Matrix3,
    set: function(e, t, r, a, i, o, n, s, l) {
        var h = this.elements;
        return h[0] = e, h[3] = t, h[6] = r, h[1] = a, h[4] = i, h[7] = o, h[2] = n, h[5] = s, h[8] = l, this
    },
    identity: function() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    },
    copy: function(e) {
        return this.elements.set(e.elements), this
    },
    multiplyVector3: function(e) {
        var t = this.elements,
            r = e.data,
            a = r[0],
            i = r[1],
            o = r[2];
        return r[0] = t[0] * a + t[3] * i + t[6] * o, r[1] = t[1] * a + t[4] * i + t[7] * o, r[2] = t[2] * a + t[5] * i + t[8] * o, e
    },
    multiplyVector3Array: function(e, t, r) {
        var a = XG.Matrix3.__v1,
            i = a.data;
        void 0 === t && (t = 0), void 0 === r && (r = e.length);
        for (var o = t; r > o; o += 3) i[0] = e[o], i[1] = e[o + 1], i[2] = e[o + 2], this.multiplyVector3(a), e.set(i, o);
        return e
    },
    multiplyScalar: function(e) {
        var t = this.elements;
        return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
    },
    getInverse: function(e) {
        var t = e.elements,
            r = this.elements;
        r[0] = t[10] * t[5] - t[6] * t[9], r[1] = -t[10] * t[1] + t[2] * t[9], r[2] = t[6] * t[1] - t[2] * t[5], r[3] = -t[10] * t[4] + t[6] * t[8], r[4] = t[10] * t[0] - t[2] * t[8], r[5] = -t[6] * t[0] + t[2] * t[4], r[6] = t[9] * t[4] - t[5] * t[8], r[7] = -t[9] * t[0] + t[1] * t[8], r[8] = t[5] * t[0] - t[1] * t[4];
        var a = t[0] * r[0] + t[1] * r[3] + t[2] * r[6];
        return 0 === a ? (console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0"), this.identity(), this) : (this.multiplyScalar(1 / a), this)
    },
    transpose: function() {
        var e, t = this.elements;
        return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
    },
    transposeIntoArray: function(e) {
        var t = this.elements;
        return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
    },
    getNormalMatrix: function(e) {
        return this.getInverse(e).transpose(), this
    },
    clone: function() {
        return (new XG.Matrix3).copy(this)
    }
}, XG.Matrix3.__v1 = new XG.Vector3, XG.Matrix4 = function(e, t, r, a, i, o, n, s, l, h, d, u, c, f, p, m) {
    this.elements = new Float32Array(16), this.set(void 0 !== e ? e : 1, t || 0, r || 0, a || 0, i || 0, void 0 !== o ? o : 1, n || 0, s || 0, l || 0, h || 0, void 0 !== d ? d : 1, u || 0, c || 0, f || 0, p || 0, void 0 !== m ? m : 1)
}, XG.Matrix4.prototype = {
    constructor: XG.Matrix4,
    set: function(e, t, r, a, i, o, n, s, l, h, d, u, c, f, p, m) {
        var v = this.elements;
        return v[0] = e, v[4] = t, v[8] = r, v[12] = a, v[1] = i, v[5] = o, v[9] = n, v[13] = s, v[2] = l, v[6] = h, v[10] = d, v[14] = u, v[3] = c, v[7] = f, v[11] = p, v[15] = m, this
    },
    identity: function() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    copy: function(e) {
        return this.elements.set(e.elements), this
    },
    setRotationFromEuler: function(e, t) {
        var r = this.elements,
            a = e.data,
            i = a[0],
            o = a[1],
            n = a[2],
            s = Math.cos(i),
            l = Math.sin(i),
            h = Math.cos(o),
            d = Math.sin(o),
            u = Math.cos(n),
            c = Math.sin(n);
        if (0 === t || void 0 === t) {
            var f = s * u,
                p = s * c,
                m = l * u,
                v = l * c;
            r[0] = h * u, r[4] = -h * c, r[8] = d, r[1] = p + m * d, r[5] = f - v * d, r[9] = -l * h, r[2] = v - f * d, r[6] = m + p * d, r[10] = s * h
        } else if (1 === t) {
            var g = h * u,
                S = h * c,
                x = d * u,
                G = d * c;
            r[0] = g + G * l, r[4] = x * l - S, r[8] = s * d, r[1] = s * c, r[5] = s * u, r[9] = -l, r[2] = S * l - x, r[6] = G + g * l, r[10] = s * h
        } else if (2 === t) {
            var g = h * u,
                S = h * c,
                x = d * u,
                G = d * c;
            r[0] = g - G * l, r[4] = -s * c, r[8] = x + S * l, r[1] = S + x * l, r[5] = s * u, r[9] = G - g * l, r[2] = -s * d, r[6] = l, r[10] = s * h
        } else if (3 === t) {
            var f = s * u,
                p = s * c,
                m = l * u,
                v = l * c;
            r[0] = h * u, r[4] = m * d - p, r[8] = f * d + v, r[1] = h * c, r[5] = v * d + f, r[9] = p * d - m, r[2] = -d, r[6] = l * h, r[10] = s * h
        } else if (4 === t) {
            var M = s * h,
                y = s * d,
                w = l * h,
                D = l * d;
            r[0] = h * u, r[4] = D - M * c, r[8] = w * c + y, r[1] = c, r[5] = s * u, r[9] = -l * u, r[2] = -d * u, r[6] = y * c + w, r[10] = M - D * c
        } else if (5 === t) {
            var M = s * h,
                y = s * d,
                w = l * h,
                D = l * d;
            r[0] = h * u, r[4] = -c, r[8] = d * u, r[1] = M * c + D, r[5] = s * u, r[9] = y * c - w, r[2] = w * c - y, r[6] = l * u, r[10] = D * c + M
        }
        return this
    },
    setRotationFromQuaternion: function(e) {
        var t = this.elements,
            r = e.data,
            a = r[0],
            i = r[1],
            o = r[2],
            n = r[3],
            s = a + a,
            l = i + i,
            h = o + o,
            d = a * s,
            u = a * l,
            c = a * h,
            f = i * l,
            p = i * h,
            m = o * h,
            v = n * s,
            g = n * l,
            S = n * h;
        return t[0] = 1 - (f + m), t[4] = u - S, t[8] = c + g, t[1] = u + S, t[5] = 1 - (d + m), t[9] = p - v, t[2] = c - g, t[6] = p + v, t[10] = 1 - (d + f), this
    },
    lookAt: function(e, t, r) {
        var a = this.elements,
            i = XG.Matrix4.__v1,
            o = XG.Matrix4.__v2,
            n = XG.Matrix4.__v3;
        n.sub(e, t).normalize(), 0 === n.length() && (n.data[2] = 1), i.cross(r, n).normalize(), 0 === i.length() && (n.data[0] += 1e-4, i.cross(r, n).normalize()), o.cross(n, i);
        var s = i.data,
            l = o.data,
            h = n.data;
        return a[0] = s[0], a[4] = l[0], a[8] = h[0], a[1] = s[1], a[5] = l[1], a[9] = h[1], a[2] = s[2], a[6] = l[2], a[10] = h[2], this
    },
    addSelf: function(e) {
        var t = this.elements,
            r = e.elements;
        return t[0] += r[0], t[4] += r[4], t[8] += r[8], t[12] += r[12], t[1] += r[1], t[5] += r[5], t[9] += r[9], t[13] += r[13], t[2] += r[2], t[6] += r[6], t[10] += r[10], t[14] += r[14], t[3] += r[3], t[7] += r[7], t[11] += r[11], t[15] += r[15], this
    },
    multiply: function(e, t) {
        var r = e.elements,
            a = t.elements,
            i = this.elements,
            o = r[0],
            n = r[4],
            s = r[8],
            l = r[12],
            h = r[1],
            d = r[5],
            u = r[9],
            c = r[13],
            f = r[2],
            p = r[6],
            m = r[10],
            v = r[14],
            g = r[3],
            S = r[7],
            x = r[11],
            G = r[15],
            M = a[0],
            y = a[4],
            w = a[8],
            D = a[12],
            X = a[1],
            C = a[5],
            A = a[9],
            _ = a[13],
            T = a[2],
            b = a[6],
            P = a[10],
            L = a[14],
            E = a[3],
            F = a[7],
            R = a[11],
            U = a[15];
        return i[0] = o * M + n * X + s * T + l * E, i[4] = o * y + n * C + s * b + l * F, i[8] = o * w + n * A + s * P + l * R, i[12] = o * D + n * _ + s * L + l * U, i[1] = h * M + d * X + u * T + c * E, i[5] = h * y + d * C + u * b + c * F, i[9] = h * w + d * A + u * P + c * R, i[13] = h * D + d * _ + u * L + c * U, i[2] = f * M + p * X + m * T + v * E, i[6] = f * y + p * C + m * b + v * F, i[10] = f * w + p * A + m * P + v * R, i[14] = f * D + p * _ + m * L + v * U, i[3] = g * M + S * X + x * T + G * E, i[7] = g * y + S * C + x * b + G * F, i[11] = g * w + S * A + x * P + G * R, i[15] = g * D + S * _ + x * L + G * U, this
    },
    multiplySelf: function(e) {
        return this.multiply(this, e)
    },
    multiplyToArray: function(e, t, r) {
        return this.multiply(e, t), r.set(this.elements), this
    },
    multiplyScalar: function(e) {
        var t = this.elements;
        return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
    },
    multiplyVector3: function(e) {
        var t = this.elements,
            r = e.data,
            a = r[0],
            i = r[1],
            o = r[2],
            n = 1 / (t[3] * a + t[7] * i + t[11] * o + t[15]);
        return r[0] = (t[0] * a + t[4] * i + t[8] * o + t[12]) * n, r[1] = (t[1] * a + t[5] * i + t[9] * o + t[13]) * n, r[2] = (t[2] * a + t[6] * i + t[10] * o + t[14]) * n, e
    },
    multiplyVector3Array: function(e, t, r) {
        var a = XG.Matrix4.__v1,
            i = a.data;
        void 0 === t && (t = 0), void 0 === r && (r = e.length);
        for (var o = t; r > o; o += 3) i[0] = e[o], i[1] = e[o + 1], i[2] = e[o + 2], this.multiplyVector3(a), e.set(i, o);
        return e
    },
    rotateAxis: function(e) {
        var t = this.elements,
            r = e.data,
            a = r[0],
            i = r[1],
            o = r[2];
        return r[0] = a * t[0] + i * t[4] + o * t[8], r[1] = a * t[1] + i * t[5] + o * t[9], r[2] = a * t[2] + i * t[6] + o * t[10], e.normalize(), e
    },
    determinant: function() {
        var e = this.elements,
            t = e[0],
            r = e[4],
            a = e[8],
            i = e[12],
            o = e[1],
            n = e[5],
            s = e[9],
            l = e[13],
            h = e[2],
            d = e[6],
            u = e[10],
            c = e[14],
            f = e[3],
            p = e[7],
            m = e[11],
            v = e[15];
        return f * (+i * s * d - a * l * d - i * n * u + r * l * u + a * n * c - r * s * c) + p * (+t * s * c - t * l * u + i * o * u - a * o * c + a * l * h - i * s * h) + m * (+t * l * d - t * n * c - i * o * d + r * o * c + i * n * h - r * l * h) + v * (-a * n * h - t * s * d + t * n * u + a * o * d - r * o * u + r * s * h)
    },
    transpose: function() {
        var e, t = this.elements;
        return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
    },
    flattenToArray: function(e) {
        return e.set(this.elements), e
    },
    flattenToArrayOffset: function(e, t) {
        return e.set(this.elements, t), e
    },
    getPosition: function() {
        var e = this.elements;
        return XG.Matrix4.__v1.set(e[12], e[13], e[14])
    },
    setPosition: function(e) {
        return this.elements.set(e.data, 12), this
    },
    setPositionXYZ: function(e, t, r) {
        var a = this.elements;
        return a[12] = e, a[13] = t, a[14] = r, this
    },
    getColumnX: function() {
        var e = this.elements;
        return XG.Matrix4.__v1.set(e[0], e[1], e[2])
    },
    getColumnY: function() {
        var e = this.elements;
        return XG.Matrix4.__v1.set(e[4], e[5], e[6])
    },
    getColumnZ: function() {
        var e = this.elements;
        return XG.Matrix4.__v1.set(e[8], e[9], e[10])
    },
    getInverse: function(e) {
        var t = this.elements,
            r = e.elements,
            a = r[0],
            i = r[4],
            o = r[8],
            n = r[12],
            s = r[1],
            l = r[5],
            h = r[9],
            d = r[13],
            u = r[2],
            c = r[6],
            f = r[10],
            p = r[14],
            m = r[3],
            v = r[7],
            g = r[11],
            S = r[15];
        t[0] = h * p * v - d * f * v + d * c * g - l * p * g - h * c * S + l * f * S, t[4] = n * f * v - o * p * v - n * c * g + i * p * g + o * c * S - i * f * S, t[8] = o * d * v - n * h * v + n * l * g - i * d * g - o * l * S + i * h * S, t[12] = n * h * c - o * d * c - n * l * f + i * d * f + o * l * p - i * h * p, t[1] = d * f * m - h * p * m - d * u * g + s * p * g + h * u * S - s * f * S, t[5] = o * p * m - n * f * m + n * u * g - a * p * g - o * u * S + a * f * S, t[9] = n * h * m - o * d * m - n * s * g + a * d * g + o * s * S - a * h * S, t[13] = o * d * u - n * h * u + n * s * f - a * d * f - o * s * p + a * h * p, t[2] = l * p * m - d * c * m + d * u * v - s * p * v - l * u * S + s * c * S, t[6] = n * c * m - i * p * m - n * u * v + a * p * v + i * u * S - a * c * S, t[10] = i * d * m - n * l * m + n * s * v - a * d * v - i * s * S + a * l * S, t[14] = n * l * u - i * d * u - n * s * c + a * d * c + i * s * p - a * l * p, t[3] = h * c * m - l * f * m - h * u * v + s * f * v + l * u * g - s * c * g, t[7] = i * f * m - o * c * m + o * u * v - a * f * v - i * u * g + a * c * g, t[11] = o * l * m - i * h * m - o * s * v + a * h * v + i * s * g - a * l * g, t[15] = i * h * u - o * l * u + o * s * c - a * h * c - i * s * f + a * l * f;
        var x = r[0] * t[0] + r[1] * t[4] + r[2] * t[8] + r[3] * t[12];
        if (0 === x) {
            var G = "Matrix4.getInverse(): can't invert matrix, determinant is 0";
            return console.warn(G), this.identity(), this
        }
        return this.multiplyScalar(1 / x), this
    },
    compose: function(e, t, r) {
        var a = this.elements;
        a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this.setRotationFromQuaternion(t);
        var i = r.data,
            o = i[0],
            n = i[1],
            s = i[2];
        return a[0] *= o, a[1] *= o, a[2] *= o, a[4] *= n, a[5] *= n, a[6] *= n, a[8] *= s, a[9] *= s, a[10] *= s, a.set(e.data, 12), this
    },
    decompose: function(e, t, r) {
        var a = this.elements,
            i = XG.Matrix4.__v1,
            o = XG.Matrix4.__v2,
            n = XG.Matrix4.__v3;
        i.set(a[0], a[1], a[2]), o.set(a[4], a[5], a[6]), n.set(a[8], a[9], a[10]), e = e instanceof XG.Vector3 ? e : new XG.Vector3, t = t instanceof XG.Quaternion ? t : new XG.Quaternion, r = r instanceof XG.Vector3 ? r : new XG.Vector3;
        var s = r.data,
            l = e.data;
        s[0] = i.length(), s[1] = o.length(), s[2] = n.length(), l[0] = a[12], l[1] = a[13], l[2] = a[14];
        var h = XG.Matrix4.__m1;
        return h.copy(this), h.elements[0] /= s[0], h.elements[1] /= s[0], h.elements[2] /= s[0], h.elements[4] /= s[1], h.elements[5] /= s[1], h.elements[6] /= s[1], h.elements[8] /= s[2], h.elements[9] /= s[2], h.elements[10] /= s[2], t.setFromRotationMatrix(h), [e, t, r]
    },
    extractPosition: function(e) {
        var t = this.elements,
            r = e.elements;
        return t[12] = r[12], t[13] = r[13], t[14] = r[14], this
    },
    extractRotation: function(e) {
        var t = this.elements,
            r = e.elements,
            a = XG.Matrix4.__v1,
            i = 1 / a.set(r[0], r[1], r[2]).length(),
            o = 1 / a.set(r[4], r[5], r[6]).length(),
            n = 1 / a.set(r[8], r[9], r[10]).length();
        return t[0] = r[0] * i, t[1] = r[1] * i, t[2] = r[2] * i, t[4] = r[4] * o, t[5] = r[5] * o, t[6] = r[6] * o, t[8] = r[8] * n, t[9] = r[9] * n, t[10] = r[10] * n, this
    },
    translate: function(e) {
        var t = this.elements,
            r = e.data,
            a = r[0],
            i = r[1],
            o = r[2];
        return t[12] = t[0] * a + t[4] * i + t[8] * o + t[12], t[13] = t[1] * a + t[5] * i + t[9] * o + t[13], t[14] = t[2] * a + t[6] * i + t[10] * o + t[14], t[15] = t[3] * a + t[7] * i + t[11] * o + t[15], this
    },
    rotateX: function(e) {
        var t = this.elements,
            r = t[4],
            a = t[5],
            i = t[6],
            o = t[7],
            n = t[8],
            s = t[9],
            l = t[10],
            h = t[11],
            d = Math.cos(e),
            u = Math.sin(e);
        return t[4] = d * r + u * n, t[5] = d * a + u * s, t[6] = d * i + u * l, t[7] = d * o + u * h, t[8] = d * n - u * r, t[9] = d * s - u * a, t[10] = d * l - u * i, t[11] = d * h - u * o, this
    },
    rotateY: function(e) {
        var t = this.elements,
            r = t[0],
            a = t[1],
            i = t[2],
            o = t[3],
            n = t[8],
            s = t[9],
            l = t[10],
            h = t[11],
            d = Math.cos(e),
            u = Math.sin(e);
        return t[0] = d * r - u * n, t[1] = d * a - u * s, t[2] = d * i - u * l, t[3] = d * o - u * h, t[8] = d * n + u * r, t[9] = d * s + u * a, t[10] = d * l + u * i, t[11] = d * h + u * o, this
    },
    rotateZ: function(e) {
        var t = this.elements,
            r = t[0],
            a = t[1],
            i = t[2],
            o = t[3],
            n = t[4],
            s = t[5],
            l = t[6],
            h = t[7],
            d = Math.cos(e),
            u = Math.sin(e);
        return t[0] = d * r + u * n, t[1] = d * a + u * s, t[2] = d * i + u * l, t[3] = d * o + u * h, t[4] = d * n - u * r, t[5] = d * s - u * a, t[6] = d * l - u * i, t[7] = d * h - u * o, this
    },
    rotateByAxis: function(e, t) {
        var r = this.elements,
            a = e.data,
            i = a[0],
            o = a[1],
            n = a[2];
        if (1 === i && 0 === o && 0 === n) return this.rotateX(t);
        if (0 === i && 1 === o && 0 === n) return this.rotateY(t);
        if (0 === i && 0 === o && 1 === n) return this.rotateZ(t);
        var s = Math.sqrt(i * i + o * o + n * n);
        i /= s, o /= s, n /= s;
        var l = i * i,
            h = o * o,
            d = n * n,
            u = Math.cos(t),
            c = Math.sin(t),
            f = 1 - u,
            p = i * o * f,
            m = i * n * f,
            v = o * n * f,
            g = i * c,
            S = o * c,
            x = n * c,
            G = l + (1 - l) * u,
            M = p + x,
            y = m - S,
            w = p - x,
            D = h + (1 - h) * u,
            X = v + g,
            C = m + S,
            A = v - g,
            _ = d + (1 - d) * u,
            T = r[0],
            b = r[1],
            P = r[2],
            L = r[3],
            E = r[4],
            F = r[5],
            R = r[6],
            U = r[7],
            N = r[8],
            I = r[9],
            B = r[10],
            O = r[11];
        return r[0] = G * T + M * E + y * N, r[1] = G * b + M * F + y * I, r[2] = G * P + M * R + y * B, r[3] = G * L + M * U + y * O, r[4] = w * T + D * E + X * N, r[5] = w * b + D * F + X * I, r[6] = w * P + D * R + X * B, r[7] = w * L + D * U + X * O, r[8] = C * T + A * E + _ * N, r[9] = C * b + A * F + _ * I, r[10] = C * P + A * R + _ * B, r[11] = C * L + A * U + _ * O, this
    },
    scale: function(e) {
        var t = this.elements,
            r = e.data,
            a = r[0],
            i = r[1],
            o = r[2];
        return t[0] *= a, t[4] *= i, t[8] *= o, t[1] *= a, t[5] *= i, t[9] *= o, t[2] *= a, t[6] *= i, t[10] *= o, t[3] *= a, t[7] *= i, t[11] *= o, this
    },
    getMaxScaleOnAxis: function() {
        var e = this.elements,
            t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
            r = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
            a = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, Math.max(r, a)))
    },
    makeTranslation: function(e) {
        return this.set(1, 0, 0, e.data[0], 0, 1, 0, e.data[1], 0, 0, 1, e.data[2], 0, 0, 0, 1), this
    },
    makeRotationX: function(e) {
        var t = Math.cos(e),
            r = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -r, 0, 0, r, t, 0, 0, 0, 0, 1), this
    },
    makeRotationY: function(e) {
        var t = Math.cos(e),
            r = Math.sin(e);
        return this.set(t, 0, r, 0, 0, 1, 0, 0, -r, 0, t, 0, 0, 0, 0, 1), this
    },
    makeRotationZ: function(e) {
        var t = Math.cos(e),
            r = Math.sin(e);
        return this.set(t, -r, 0, 0, r, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    makeRotationAxis: function(e, t) {
        var r = e.data,
            a = Math.cos(t),
            i = Math.sin(t),
            o = 1 - a,
            n = r[0],
            s = r[1],
            l = r[2],
            h = o * n,
            d = o * s;
        return this.set(h * n + a, h * s - i * l, h * l + i * s, 0, h * s + i * l, d * s + a, d * l - i * n, 0, h * l - i * s, d * l + i * n, o * l * l + a, 0, 0, 0, 0, 1), this
    },
    makeScale: function(e) {
        var t = e.data;
        return this.set(t[0], 0, 0, 0, 0, t[1], 0, 0, 0, 0, t[2], 0, 0, 0, 0, 1), this
    },
    makeFrustum: function(e, t, r, a, i, o) {
        var n = this.elements,
            s = 2 * i / (t - e),
            l = 2 * i / (a - r),
            h = (t + e) / (t - e),
            d = (a + r) / (a - r),
            u = -(o + i) / (o - i),
            c = -2 * o * i / (o - i);
        return n[0] = s, n[4] = 0, n[8] = h, n[12] = 0, n[1] = 0, n[5] = l, n[9] = d, n[13] = 0, n[2] = 0, n[6] = 0, n[10] = u, n[14] = c, n[3] = 0, n[7] = 0, n[11] = -1, n[15] = 0, this
    },
    makePerspective: function(e, t, r, a) {
        var i = r * Math.tan(XG.Math.degToRad(.5 * e)),
            o = -i,
            n = o * t,
            s = i * t;
        return this.makeFrustum(n, s, o, i, r, a)
    },
    makeOrthographic: function(e, t, r, a, i, o) {
        var n = this.elements,
            s = t - e,
            l = r - a,
            h = o - i,
            d = (t + e) / s,
            u = (r + a) / l,
            c = (o + i) / h;
        return n[0] = 2 / s, n[4] = 0, n[8] = 0, n[12] = -d, n[1] = 0, n[5] = 2 / l, n[9] = 0, n[13] = -u, n[2] = 0, n[6] = 0, n[10] = -2 / h, n[14] = -c, n[3] = 0, n[7] = 0, n[11] = 0, n[15] = 1, this
    },
    clone: function() {
        return (new XG.Matrix4).copy(this)
    }
}, XG.Matrix4.__v1 = new XG.Vector3, XG.Matrix4.__v2 = new XG.Vector3, XG.Matrix4.__v3 = new XG.Vector3, XG.Matrix4.__m1 = new XG.Matrix4, XG.Matrix4.__m2 = new XG.Matrix4, XG.Frustum = function() {
    this.planes = [new XG.Plane, new XG.Plane, new XG.Plane, new XG.Plane, new XG.Plane, new XG.Plane]
}, XG.Frustum.prototype.setFromMatrix = function(e) {
    var t = this.planes,
        r = e.elements,
        a = r[0],
        i = r[1],
        o = r[2],
        n = r[3],
        s = r[4],
        l = r[5],
        h = r[6],
        d = r[7],
        u = r[8],
        c = r[9],
        f = r[10],
        p = r[11],
        m = r[12],
        v = r[13],
        g = r[14],
        S = r[15];
    t[0].setComponents(n - a, d - s, p - u, S - m), t[1].setComponents(n + a, d + s, p + u, S + m), t[2].setComponents(n + i, d + l, p + c, S + v), t[3].setComponents(n - i, d - l, p - c, S - v), t[4].setComponents(n - o, d - h, p - f, S - g), t[5].setComponents(n + o, d + h, p + f, S + g);
    for (var x = 0; 6 > x; x++) t[x].normalize()
}, XG.Frustum.prototype.contains = function(e, t) {
    for (var r = this.planes, a = e.matrixWorld, i = a.getPosition(), o = -t.boundingSphere.radius * a.getMaxScaleOnAxis(), n = 0, s = 0; 6 > s; s++)
        if (n = r[s].distanceToPoint(i), o >= n) return !1;
    return !0
}, XG.Plane = function(e, t) {
    this.normal = void 0 !== e ? e.clone() : XG.Vector3.xAxis.clone(), this.constant = void 0 !== t ? t : 0
}, XG.Plane.prototype = {
    constructor: XG.Plane,
    set: function(e, t) {
        return this.normal.copy(e), this.constant = t, this
    },
    setComponents: function(e, t, r, a) {
        return this.normal.set(e, t, r), this.constant = a, this
    },
    setFromNormalAndCoplanarPoint: function(e, t) {
        return this.normal.copy(e), this.constant = -t.dot(this.normal), this
    },
    setFromCoplanarPoints: function() {
        var e = new XG.Vector3,
            t = new XG.Vector3;
        return function(r, a, i) {
            var o = e.sub(i, a).crossSelf(t.sub(r, a)).normalize();
            return this.setFromNormalAndCoplanarPoint(o, r), this
        }
    }(),
    intersectLine: function() {
        var e = new XG.Vector3;
        return function(t, r, a) {
            var i = a || new XG.Vector3,
                o = e.sub(r, t),
                n = this.normal.dot(o);
            if (0 === n) return 0 === this.distanceToPoint(t) ? i.copy(t) : void 0;
            var s = -(t.dot(this.normal) + this.constant) / n;
            return i.copy(o).multiplyScalar(s).addSelf(t)
        }
    }(),
    intersectLineSegment: function() {
        var e = new XG.Vector3;
        return function(t, r, a) {
            var i = a || new XG.Vector3,
                o = e.sub(r, t),
                n = this.normal.dot(o);
            if (0 === n) return 0 === this.distanceToPoint(t) ? i.copy(t) : void 0;
            var s = -(t.dot(this.normal) + this.constant) / n;
            return 0 > s || s > 1 ? void 0 : i.copy(o).multiplyScalar(s).addSelf(t)
        }
    }(),
    copy: function(e) {
        return this.normal.copy(e.normal), this.constant = e.constant, this
    },
    normalize: function() {
        var e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e), this.constant *= e, this
    },
    distanceToPoint: function(e) {
        return this.normal.dot(e) + this.constant
    },
    coplanarPoint: function(e) {
        var t = e || new XG.Vector3;
        return t.copy(this.normal), t.multiplyScalar(-this.constant), t
    },
    applyMatrix4: function(e, t) {
        var r = XG.Plane.__v1,
            a = XG.Plane.__v2;
        t = t || XG.Plane.__m1.getNormalMatrix(e);
        var i = r.copy(this.normal);
        t.multiplyVector3(i);
        var o = this.coplanarPoint(a);
        return e.multiplyVector3(o), this.setFromNormalAndCoplanarPoint(i, o), this
    },
    clone: function() {
        return (new XG.Plane).copy(this)
    }
}, XG.Plane.__v1 = new XG.Vector3, XG.Plane.__v2 = new XG.Vector3, XG.Plane.__m1 = new XG.Matrix3, XG.Box3 = function(e, t) {
    this.min = void 0 !== e ? e.clone() : new XG.Vector3(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t.clone() : new XG.Vector3(-1 / 0, -1 / 0, -1 / 0)
}, XG.Box3.prototype = {
    constructor: XG.Box3,
    set: function(e, t) {
        return this.min.copy(e), this.max.copy(t), this
    },
    copy: function(e) {
        return this.min.copy(e.min), this.max.copy(e.max), this
    },
    add: function(e) {
        this.min.minSelf(e.min), this.max.maxSelf(e.max)
    },
    clone: function() {
        return (new XG.Box3).copy(this)
    }
}, XG.Sphere = function(e, t) {
    this.center = void 0 === e ? new XG.Vector3 : e.clone(), this.radius = void 0 === t ? 0 : t
}, XG.Sphere.prototype = {
    constructor: XG.Sphere,
    set: function(e, t) {
        return this.center.copy(e), this.radius = t, this
    },
    copy: function(e) {
        return this.center.copy(e.center), this.radius = e.radius, this
    },
    containsPoint: function(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    },
    distanceToPoint: function(e) {
        return e.distanceTo(this.center) - this.radius
    },
    clone: function() {
        return (new XG.Sphere).copy(this)
    }
}, XG.Clock = function(e) {
    this.autoStart = void 0 !== e ? e : !0, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
}, XG.Clock.prototype.start = function() {
    this.startTime = Date.now(), this.oldTime = this.startTime, this.running = !0
}, XG.Clock.prototype.stop = function() {
    this.getElapsedTime(), this.running = !1
}, XG.Clock.prototype.getElapsedTime = function() {
    return this.getDelta(), this.elapsedTime
}, XG.Clock.prototype.getDelta = function() {
    var e = 0;
    if (this.autoStart && !this.running && this.start(), this.running) {
        var t = Date.now();
        e = .001 * (t - this.oldTime), this.oldTime = t, this.elapsedTime += e
    }
    return e
}, XG.Animation = function(e, t) {
    this.id = XG.AnimationIdCount++, this.root = e, this.data = t, this.hierarchy = [], this.boneIndexMap = {};
    for (var r = 0; r < e.bones.length; r++) {
        var a = e.bones[r];
        this.hierarchy.push(a), this.boneIndexMap[a.name] = r
    }
    this.initData(t), this.currentTime = 0, this.timeScale = 1, this.weight = 1, this.direction = 1, this.directionBackwards = !1, this.isPlaying = !1, this.isPaused = !0, this.loop = !0
}, XG.Animation.prototype.play = function(e, t) {
    if (this.isPlaying === !1) {
        this.isPlaying = !0, this.loop = void 0 !== e ? e : !0, this.currentTime = void 0 !== t ? t : 0;
        var r, a, i = this.hierarchy.length;
        for (r = 0; i > r; r++) {
            a = this.hierarchy[r], a.useQuaternion = !0, a.matrixAutoUpdate = !0, void 0 === a.animationCache && (a.animationCache = {});
            var o;
            void 0 === a.animationCache[this.id] ? (a.animationCache[this.id] = {}, o = a.animationCache[this.id], o.prevKey = {
                pos: 0,
                rot: 0,
                scl: 0
            }, o.nextKey = {
                pos: 0,
                rot: 0,
                scl: 0
            }, o.originalMatrix = a instanceof XG.Bone ? a.skinMatrix : a.matrix, o.oldMatrix = new XG.Matrix4) : o = a.animationCache[this.id];
            var n = o.prevKey,
                s = o.nextKey;
            n.pos = this.data.hierarchy[r].keys[0], n.rot = this.data.hierarchy[r].keys[0], n.scl = this.data.hierarchy[r].keys[0], this.directionBackwards ? (s.pos = this.getPrevKeyWith("pos", r, -1), s.rot = this.getPrevKeyWith("rot", r, -1), s.scl = this.getPrevKeyWith("scl", r, -1)) : (s.pos = this.getNextKeyWith("pos", r, 1), s.rot = this.getNextKeyWith("rot", r, 1), s.scl = this.getNextKeyWith("scl", r, 1))
        }
        this.update(0)
    }
    this.isPaused = !1
}, XG.Animation.prototype.setWeight = function(e) {
    this.weight = e
}, XG.Animation.prototype.setDirectionForward = function() {
    this.direction = 1, this.directionBackwards = !1
}, XG.Animation.prototype.setDirectionBackward = function() {
    this.direction = -1, this.directionBackwards = !0
}, XG.Animation.prototype.pause = function() {
    this.isPaused = !this.isPaused
}, XG.Animation.prototype.stop = function() {
    this.isPlaying = !1, this.isPaused = !1
}, XG.Animation.prototype.update = function(e) {
    if (this.isPlaying !== !1) {
        var t, r, a, i, o, n, s, l, h, d, u, c, f = ["pos", "rot", "scl"],
            p = this.currentTime + e * this.timeScale * this.direction,
            m = p % this.data.length;
        this.directionBackwards && 0 > m && (m += this.data.length);
        var v = m;
        this.currentTime = m;
        for (var g = 0, S = this.hierarchy.length; S > g; g++) {
            l = this.hierarchy[g], h = l.animationCache[this.id], l.matrixAutoUpdate = !1, l.firstAnimationFlag || h.oldMatrix.copy(l.matrix);
            for (var x = 0; 3 > x; x++) {
                if (t = f[x], n = h.prevKey[t], s = h.nextKey[t], this.directionBackwards) {
                    if (s.time > p) {
                        if (v > p) {
                            if (!this.loop) return void this.stop();
                            var G = this.data.hierarchy[g].keys;
                            for (n = this.data.hierarchy[g].keys[G.length - 1], s = this.getPrevKeyWith(t, g, -1); s.time > v;) n = s, s = this.getPrevKeyWith(t, g, s.index - 1)
                        } else
                            do n = s, s = this.getPrevKeyWith(t, g, s.index - 1); while (s.time > v);
                        h.prevKey[t] = n, h.nextKey[t] = s
                    }
                    r = (n.time - v) / (n.time - s.time)
                } else {
                    if (s.time <= p) {
                        if (p > v) {
                            if (!this.loop) return void this.stop();
                            for (n = this.data.hierarchy[g].keys[0], s = this.getNextKeyWith(t, g, 1); s.time < v;) n = s, s = this.getNextKeyWith(t, g, s.index + 1)
                        } else
                            do n = s, s = this.getNextKeyWith(t, g, s.index + 1); while (s.time < v);
                        h.prevKey[t] = n, h.nextKey[t] = s
                    }
                    r = (v - n.time) / (s.time - n.time)
                }
                i = n[t], o = s[t], (0 > r || r > 1) && (console.log("XG.Animation.update: Warning! Scale out of bounds:" + r + " on bone " + g), r = 0 > r ? 0 : 1), "pos" === t ? (a = l.position, d = i[0] + (o[0] - i[0]) * r, u = i[1] + (o[1] - i[1]) * r, c = i[2] + (o[2] - i[2]) * r, a.set(d, u, c)) : "rot" === t ? XG.Quaternion.slerp(i, o, l.quaternion, r) : "scl" === t && (a = l.scale, d = i[0] + (o[0] - i[0]) * r, u = i[1] + (o[1] - i[1]) * r, c = i[2] + (o[2] - i[2]) * r, a.set(d, u, c))
            }
            l.updateMatrix(), l.matrix.multiplyScalar(this.weight), l.firstAnimationFlag || l.matrix.addSelf(h.oldMatrix), l.firstAnimationFlag = !1
        }
    }
}, XG.Animation.prototype.getNextKeyWith = function(e, t, r) {
    var a = this.data.hierarchy[t].keys;
    for (r %= a.length; r < a.length; r++)
        if (void 0 !== a[r][e]) return a[r];
    return this.data.hierarchy[t].keys[0]
}, XG.Animation.prototype.getPrevKeyWith = function(e, t, r) {
    var a = this.data.hierarchy[t].keys;
    for (r = r >= 0 ? r : r + a.length; r >= 0; r--)
        if (void 0 !== a[r][e]) return a[r];
    return this.data.hierarchy[t].keys[a.length - 1]
}, XG.Animation.prototype.initData = function(e) {
    if (e.initialized !== !0) {
        for (var t = e.hierarchy, r = 0; r < t.length; r++) {
            for (var a = t[r], i = 0; i < a.keys.length; i++)
                if (a.keys[i].time < 0 && (a.keys[i].time = 0), void 0 !== a.keys[i].rot && !(a.keys[i].rot instanceof XG.Quaternion)) {
                    var o = a.keys[i].rot;
                    a.keys[i].rot = new XG.Quaternion(o[0], o[1], o[2], o[3])
                }
            for (var i = 1; i < a.keys.length; i++) a.keys[i].time === a.keys[i - 1].time && (a.keys.splice(i, 1), i--);
            for (var i = 0; i < a.keys.length; i++) a.keys[i].index = i
        }
        e.initialized = !0
    }
}, XG.Animation.prototype.findRoot = function() {
    for (var e, t = this.data.hierarchy, r = 0, a = t.length; a > r; r++) {
        var i = t[r];
        if (-1 === i.parent) {
            e = i;
            break
        }
    }
    return e
}, XG.Animation.prototype.offsetPositionKeysForBone = function(e, t) {
    for (var r = this.boneIndexMap[e], a = this.data.hierarchy[r].keys, i = 0, o = a.length; o > i; i++) {
        var n = a[i],
            s = n.pos;
        void 0 !== s && (s[0] += t.x, s[1] += t.y, s[2] += t.z)
    }
}, XG.Animation.prototype.offsetRotationKeysForBone = function(e, t) {
    for (var r = this.boneIndexMap[e], a = this.data.hierarchy[r].keys, i = 0, o = a.length; o > i; i++) {
        var n = a[i],
            s = n.rot;
        void 0 !== s && s.multiplySelf(t)
    }
}, XG.Animation.prototype.setKeysComponentValue = function(e, t, r, a) {
    for (var i = 0, o = e.keys.length; o > i; i++) {
        var n = e.keys[i];
        n[t] && (n[t][r] = a)
    }
}, XG.Animation.prototype.copyKeysToBoneRange = function(e, t, r) {
    for (var a = this.data.hierarchy, i = e.data.hierarchy, o = t; r > o; o++)
        for (var n = i[o], s = a[o], l = 0, h = n.keys.length; h > l; l++) {
            var d = n.keys[l];
            s.keys[l] = d
        }
}, XG.AnimationIdCount = 0, XG.Geometry = function() {
    this.id = XG.GeometryIdCount++, this.attributes = {}, this.attributesList = [], this.virtualAttributes = {}, this.virtualAttributesList = [], this.numPrimitives = 0, this.numVertices = 0, this.dynamic = !1, this.offsets = [], this.boundingBox = null, this.boundingSphere = null, this.morphTargets = [], this.morphColors = []
}, XG.Geometry.prototype = {
    constructor: XG.Geometry,
    addIndex: function(e, t, r) {
        var a = new t(this.numPrimitives * r);
        this.addAttributeArray(e, a, r)
    },
    addAttribute: function(e, t, r) {
        var a = new t(this.numVertices * r);
        this.addAttributeArray(e, a, r)
    },
    addVirtualAttribute: function(e) {
        var t = {
            name: e,
            mapped: null
        };
        this.virtualAttributes[e] = t, this.virtualAttributesList.push(t)
    },
    addUnattachedAttribute: function(e, t, r) {
        var a = new t(this.numVertices * r),
            i = {
                name: e,
                itemSize: r,
                numItems: a.length,
                array: a,
                buffer: null,
                type: XG.paramTypedArrayToXG(a),
                typeSize: a.BYTES_PER_ELEMENT,
                needsUpdate: !0,
                attached: !1
            };
        this.attributes[e] = i, this.attributesList.push(i)
    },
    addAttributeArray: function(e, t, r) {
        var a = {
            name: e,
            itemSize: r,
            numItems: t.length,
            array: t,
            buffer: null,
            type: XG.paramTypedArrayToXG(t),
            typeSize: t.BYTES_PER_ELEMENT,
            needsUpdate: !0,
            attached: !0
        };
        this.attributes[e] = a, this.attributesList.push(a)
    },
    setAttributeValue: function(e, t, r, a) {
        var i = this.attributes[e];
        if (i) {
            if (void 0 === r && (r = 0), void 0 === a && (a = i.array.length), t instanceof XG.Color || t instanceof XG.Vector2 || t instanceof XG.Vector3 || t instanceof XG.Vector4 || t instanceof XG.Quaternion)
                for (var o = r; a > o; o += i.itemSize) t.copyIntoArray(i.array, o);
            i.needsUpdate = !0
        }
    },
    applyMatrix: function(e) {
        var t, r;
        if (this.attributes.position && (t = this.attributes.position.array), this.attributes.normal && (r = this.attributes.normal.array), void 0 !== t && (e.multiplyVector3Array(t), this.attributes.position.needsUpdate = !0), void 0 !== r) {
            var a = new XG.Matrix3;
            a.getInverse(e).transpose(), a.multiplyVector3Array(r), this.normalizeAttribute("normal"), this.attributes.normal.needsUpdate = !0
        }
    },
    computeBoundingBox: function() {
        null === this.boundingBox && (this.boundingBox = new XG.Box3);
        var e = this.attributes.position.array;
        if (e) {
            var t, r, a, i = this.boundingBox,
                o = i.min.data,
                n = i.max.data;
            e.length >= 3 && (o[0] = n[0] = e[0], o[1] = n[1] = e[1], o[2] = n[2] = e[2]);
            for (var s = 3, l = e.length; l > s; s += 3) t = e[s], r = e[s + 1], a = e[s + 2], t < o[0] ? o[0] = t : t > n[0] && (n[0] = t), r < o[1] ? o[1] = r : r > n[1] && (n[1] = r), a < o[2] ? o[2] = a : a > n[2] && (n[2] = a)
        }(void 0 === e || 0 === e.length) && (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0))
    },
    computeBoundingSphere: function() {
        null === this.boundingSphere && (this.boundingSphere = new XG.Sphere);
        var e = this.attributes.position.array;
        if (e) {
            for (var t, r, a, i, o = 0, n = 0, s = e.length; s > n; n += 3) r = e[n], a = e[n + 1], i = e[n + 2], t = r * r + a * a + i * i, t > o && (o = t);
            this.boundingSphere.radius = Math.sqrt(o)
        }
    },
    computeVertexNormals: function() {
        this.computeNormals("position", "normal")
    },
    computeNormals: function(e, t) {
        if (this.attributes[e]) {
            var r, a, i, o, n = this.attributes[e].array.length;
            if (void 0 === this.attributes[t]) this.addAttributeArray(t, new Float32Array(n), 3);
            else
                for (r = 0, a = this.attributes[t].array.length; a > r; r++) this.attributes[t].array[r] = 0;
            var s, l, h, d, u, c, f = this.attributes[e].array,
                p = this.attributes[t].array,
                m = new XG.Vector3,
                v = new XG.Vector3,
                g = new XG.Vector3,
                S = new XG.Vector3,
                x = new XG.Vector3,
                G = S.data;
            if (this.attributes.index) {
                var M = this.attributes.index.array,
                    y = this.offsets;
                for (i = 0, o = y.length; o > i; ++i) {
                    var w = y[i].start,
                        D = y[i].count,
                        X = y[i].index;
                    for (r = w, a = w + D; a > r; r += 3) s = X + M[r], l = X + M[r + 1], h = X + M[r + 2], d = f[3 * s], u = f[3 * s + 1], c = f[3 * s + 2], m.set(d, u, c), d = f[3 * l], u = f[3 * l + 1], c = f[3 * l + 2], v.set(d, u, c), d = f[3 * h], u = f[3 * h + 1], c = f[3 * h + 2], g.set(d, u, c), S.sub(g, v), x.sub(m, v), S.crossSelf(x), p[3 * s] += G[0], p[3 * s + 1] += G[1], p[3 * s + 2] += G[2], p[3 * l] += G[0], p[3 * l + 1] += G[1], p[3 * l + 2] += G[2], p[3 * h] += G[0], p[3 * h + 1] += G[1], p[3 * h + 2] += G[2]
                }
            } else
                for (r = 0, a = f.length; a > r; r += 9) d = f[r], u = f[r + 1], c = f[r + 2], m.set(d, u, c), d = f[r + 3], u = f[r + 4], c = f[r + 5], v.set(d, u, c), d = f[r + 6], u = f[r + 7], c = f[r + 8], g.set(d, u, c), S.sub(g, v), x.sub(m, v), S.crossSelf(x), p[r] = G[0], p[r + 1] = G[1], p[r + 2] = G[2], p[r + 3] = G[0], p[r + 4] = G[1], p[r + 5] = G[2], p[r + 6] = G[0], p[r + 7] = G[1], p[r + 8] = G[2];
            this.normalizeAttribute(t), this.attributes[t].needsUpdate = !0
        }
    },
    normalizeAttribute: function(e, t, r) {
        var a = this.attributes[e];
        if (a) {
            var i = a.array;
            void 0 === t && (t = 0), void 0 === r && (r = i.length);
            for (var o, n, s, l, h = t; r > h; h += 3) o = i[h], n = i[h + 1], s = i[h + 2], l = 1 / Math.sqrt(o * o + n * n + s * s), i[h] *= l, i[h + 1] *= l, i[h + 2] *= l
        }
    },
    scaleAttribute: function(e, t, r, a, i, o) {
        var n = this.attributes[e];
        if (n) {
            var s = n.array,
                l = n.itemSize;
            void 0 === i && (i = 0), void 0 === o && (o = s.length);
            for (var h = i; o > h; h += l) s[h] *= t, l > 1 && void 0 !== r && (s[h + 1] *= r), l > 2 && void 0 !== a && (s[h + 2] *= a)
        }
    },
    computeMorphNormals: function() {
        for (var e = 0, t = this.morphTargets.length; t > e; e++) {
            var r = "mp_" + e,
                a = "mn_" + e;
            this.computeNormals(r, a)
        }
    },
    computeTangents: function() {
        function e(e, t, r) {
            u = a[3 * e], c = a[3 * e + 1], f = a[3 * e + 2], p = a[3 * t], m = a[3 * t + 1], v = a[3 * t + 2], g = a[3 * r], S = a[3 * r + 1], x = a[3 * r + 2], G = o[2 * e], M = o[2 * e + 1], y = o[2 * t], w = o[2 * t + 1], D = o[2 * r], X = o[2 * r + 1], C = p - u, A = g - u, _ = m - c, T = S - c, b = v - f, P = x - f, L = y - G, E = D - G, F = w - M, R = X - M, U = 1 / (L * R - E * F), z.set((R * C - F * A) * U, (R * _ - F * T) * U, (R * b - F * P) * U), W.set((L * A - E * C) * U, (L * T - E * _) * U, (L * P - E * b) * U), l[e].addSelf(z), l[t].addSelf(z), l[r].addSelf(z), h[e].addSelf(W), h[t].addSelf(W), h[r].addSelf(W)
        }

        function t(e) {
            at[0] = i[3 * e], at[1] = i[3 * e + 1], at[2] = i[3 * e + 2], rt.copy(tt), Q = l[e], $.copy(Q), $.subSelf(tt.multiplyScalar(tt.dot(Q))).normalize(), et.cross(rt, Q), J = et.dot(h[e]), Y = 0 > J ? -1 : 1, s[4 * e] = it[0], s[4 * e + 1] = it[1], s[4 * e + 2] = it[2], s[4 * e + 3] = Y
        }
        if (void 0 === this.attributes.index || void 0 === this.attributes.position || void 0 === this.attributes.normal || void 0 === this.attributes.uv) return void console.warn("Missing required attributes (index, position, normal or uv) in Geometry.computeTangents()");
        var r = this.attributes.index.array,
            a = this.attributes.position.array,
            i = this.attributes.normal.array,
            o = this.attributes.uv.array,
            n = a.length / 3;
        void 0 === this.attributes.tangent && this.addAttributeArray("tangent", new Float32Array(4 * n), 4);
        for (var s = this.attributes.tangent.array, l = [], h = [], d = 0; n > d; d++) l[d] = new XG.Vector3, h[d] = new XG.Vector3;
        var u, c, f, p, m, v, g, S, x, G, M, y, w, D, X, C, A, _, T, b, P, L, E, F, R, U, N, I, B, O, k, V, H, z = new XG.Vector3,
            W = new XG.Vector3,
            j = this.offsets;
        for (B = 0, O = j.length; O > B; ++B) {
            var q = j[B].start,
                K = j[B].count,
                Z = j[B].index;
            for (N = q, I = q + K; I > N; N += 3) k = Z + r[N], V = Z + r[N + 1], H = Z + r[N + 2], e(k, V, H)
        }
        var Y, Q, J, $ = new XG.Vector3,
            et = new XG.Vector3,
            tt = new XG.Vector3,
            rt = new XG.Vector3,
            at = tt.data,
            it = $.data;
        for (B = 0, O = j.length; O > B; ++B) {
            var q = j[B].start,
                K = j[B].count,
                Z = j[B].index;
            for (N = q, I = q + K; I > N; N += 3) k = Z + r[N], V = Z + r[N + 1], H = Z + r[N + 2], t(k), t(V), t(H)
        }
        this.attributes.tangent.needsUpdate = !0
    },
    mergeBatch: function(e, t) {
        e.length !== t.length && console.warn("XG.Geometry.mergeBatch: geometries and transforms arrays don't have the same sizes");
        var r = Math.min(e.length, t.length),
            a = e.slice(0),
            i = t.slice(0);
        0 !== this.attributesList.length && (a.unshift(this), i.unshift(new XG.Matrix4));
        for (var o = {}, n = 0, s = 0, l = 0; r > l; l++) {
            for (var h = a[l], d = 0, u = h.attributesList.length; u > d; d++) {
                var c = h.attributesList[d],
                    f = c.name,
                    p = c.type,
                    m = c.array,
                    v = c.itemSize;
                void 0 === o[f] && (o[f] = {
                    size: 0,
                    type: p,
                    array: null,
                    offset: 0,
                    itemSize: v
                }), o[f].size += m.length
            }
            n += h.numVertices, s += h.numPrimitives
        }
        for (var f in o) {
            var c = o[f],
                g = XG.paramXGToTypedArray(c.type);
            "index" === f && n > 65535 && (XG.elementIndexUintAvailable ? g = Uint32Array : console.warn("XG.Geometry.mergeBatch: too many vertices for new merged indexed geometry")), c.array = new g(c.size)
        }
        for (var S = 0, l = 0; r > l; l++) {
            for (var h = a[l], x = i[l], d = 0, u = h.attributesList.length; u > d; d++) {
                var c = h.attributesList[d],
                    f = c.name,
                    p = c.type,
                    m = c.array,
                    G = o[f],
                    M = G.array,
                    y = G.offset;
                if ("index" === f && G.type === XG.UnsignedIntType && p === XG.UnsignedShortType)
                    for (var w = 0, D = m.length; D > w; w++) M[y + w] = m[w];
                else M.set(m, y);
                var X = y,
                    C = y + m.length;
                if ("position" === f && x.multiplyVector3Array(M, X, C), "normal" === f) {
                    var A = new XG.Matrix3;
                    A.getInverse(x).transpose(), A.multiplyVector3Array(X, C), this.normalizeAttribute("normal", X, C)
                }
                if ("index" === f)
                    for (var w = X; C > w; w++) M[w] += S;
                G.offset += m.length
            }
            S += h.attributes.position.array.length / 3
        }
        if (0 === this.attributesList.length) {
            for (var f in o) {
                var c = o[f];
                this.addAttributeArray(f, c.array, c.itemSize)
            }
            this.offsets[0] = {
                start: 0,
                index: 0,
                count: 3 * s
            }
        } else {
            for (var d = 0, u = this.attributesList.length; u > d; d++) {
                var _ = this.attributesList[d],
                    f = _.name,
                    c = o[f];
                _.array = c.array, _.numItems = c.array.length, _.needsUpdate = !0
            }
            this.offsets[0].count = 3 * s
        }
        this.numVertices = n, this.numPrimitives = s
    },
    merge: function(e, t) {
        if (this.numVertices += e.numVertices, this.numPrimitives += e.numPrimitives, 0 === this.attributesList.length) {
            this.attributes = {};
            for (var r = 0, a = e.attributesList.length; a > r; r++) {
                var i = e.attributesList[r],
                    o = i.name,
                    n = i.array,
                    s = i.itemSize,
                    l = i.type,
                    h = XG.paramXGToTypedArray(i.type),
                    d = new h(n);
                this.addAttributeArray(o, d, s)
            }
            this.offsets = [];
            var u = e.offsets;
            for (r = 0, a = u.length; a > r; r++) {
                var c = u[r].start,
                    f = u[r].index,
                    p = u[r].count;
                this.offsets[r] = {
                    start: c,
                    index: f,
                    count: p
                }
            }
            return void this.applyMatrix(t)
        }
        var m = this.attributes.position.array.length / 3,
            v = e.attributes.position.array.length / 3,
            g = Uint16Array;
        m + v > 65535 && this.attributes.index && (XG.elementIndexUintAvailable ? g = Uint32Array : console.warn("XG.Geometry.merge: too many vertices for new merged indexed geometry"));
        for (var S = this.attributes.position ? m : 0, x = 0, r = 0, a = this.attributesList.length; a > r; r++) {
            var G = this.attributesList[r],
                o = G.name,
                n = G.array,
                l = G.type,
                s = G.itemSize,
                M = e.attributes[o],
                y = M.array;
            if (void 0 !== M)
                if (M.itemSize === s && M.type === l || "index" === o && M.itemSize === s) {
                    var w = n.length,
                        D = n.length + y.length,
                        h = XG.paramXGToTypedArray(l);
                    if ("index" === o && h !== g) {
                        for (var X = new g(D), C = 0; w > C; C++) X[C] = n[C];
                        for (C = w; D > C; C++) X[C] = y[C - w];
                        G.type = XG.paramTypedArrayToXG(X), G.typeSize = X.BYTES_PER_ELEMENT
                    } else {
                        var X = new h(D);
                        X.set(n, 0), X.set(y, w)
                    }
                    if ("index" === o) {
                        x = y.length / 3;
                        for (var C = w; D > C; C++) X[C] += S
                    }
                    if (t && ("position" === o && t.multiplyVector3Array(X, w), "normal" === o)) {
                        var A = new XG.Matrix3;
                        A.getInverse(t).transpose(), A.multiplyVector3Array(X, w), this.normalizeAttribute("normal", w)
                    }
                    G.array = X, G.numItems = D, G.needsUpdate = !0
                } else console.warn("XG.Geometry.merge: incompatible attribute [" + o + "]");
            else console.warn("XG.Geometry.merge: missing attribute [" + o + "]")
        }
        this.offsets.length > 0 && (this.offsets[0].count += 3 * x)
    }
}, XG.GeometryIdCount = 0, XG.PlaneGeometry = function(e, t) {
    XG.Geometry.call(this), this.width = e, this.height = t, this.numPrimitives = 2, this.numVertices = 4, this.addIndex("index", Uint16Array, 3), this.addAttribute("position", Float32Array, 3), this.addAttribute("normal", Float32Array, 3), this.addAttribute("uv", Float32Array, 2);
    var r = this.attributes.index.array,
        a = this.attributes.position.array,
        i = this.attributes.normal.array,
        o = this.attributes.uv.array,
        n = .5 * this.width,
        s = .5 * this.height;
    a[0] = -n, a[1] = -s, a[2] = 0, a[3] = n, a[4] = -s, a[5] = 0, a[6] = n, a[7] = s, a[8] = 0, a[9] = -n, a[10] = s, a[11] = 0, i[0] = 0, i[1] = 0, i[2] = 1, i[3] = 0, i[4] = 0, i[5] = 1, i[6] = 0, i[7] = 0, i[8] = 1, i[9] = 0, i[10] = 0, i[11] = 1, o[0] = 0, o[1] = 0, o[2] = 1, o[3] = 0, o[4] = 1, o[5] = 1, o[6] = 0, o[7] = 1, r[0] = 0, r[1] = 1, r[2] = 3, r[3] = 1, r[4] = 2, r[5] = 3, this.offsets.push({
        start: 0,
        index: 0,
        count: r.length
    })
}, XG.PlaneGeometry.prototype = Object.create(XG.Geometry.prototype), XG.TriangleGeometry = function(e, t) {
    XG.Geometry.call(this), this.numPrimitives = 1, this.numVertices = 3, this.addAttribute("position", Float32Array, 3), this.addAttribute("uv", Float32Array, 2);
    var r = this.attributes.position.array,
        a = this.attributes.uv.array;
    r[0] = e[0][0], r[1] = e[0][1], r[2] = e[0][2], r[3] = e[1][0], r[4] = e[1][1], r[5] = e[1][2], r[6] = e[2][0], r[7] = e[2][1], r[8] = e[2][2], a[0] = t[0][0], a[1] = t[0][1], a[2] = t[1][0], a[3] = t[1][1], a[4] = t[2][0], a[5] = t[2][1]
}, XG.TriangleGeometry.prototype = Object.create(XG.Geometry.prototype), XG.HeightfieldGeometry = function(e, t, r, a, i) {
    XG.Geometry.call(this), this.width = e, this.length = t, this.widthSegments = r || 1, this.lengthSegments = a || 1, this.numPrimitives = this.widthSegments * this.lengthSegments * 2, this.numVertices = (this.widthSegments + 1) * (this.lengthSegments + 1);
    var o = Uint16Array;
    this.numVertices > 65536 && (XG.elementIndexUintAvailable ? o = Uint32Array : console.warn("XG.HeightfieldGeometry: too many vertices for 16 bit indices")), this.addIndex("index", o, 3), this.addAttribute("position", Float32Array, 3), this.addAttribute("normal", Float32Array, 3), this.addAttribute("uv", Float32Array, 2);
    for (var n = this.attributes.index.array, s = this.attributes.position.array, l = (this.attributes.normal.array, this.attributes.uv.array), h = .5 * this.width, d = .5 * this.length, u = this.width / this.widthSegments, c = this.length / this.lengthSegments, f = 0, p = 0, m = 0, v = 0; v < this.lengthSegments + 1; v++)
        for (var g = 0; g < this.widthSegments + 1; g++) {
            var S = g * u - h,
                x = v * c - d,
                G = 0;
            void 0 !== i && (G = i[m], m += 1), s[f] = S, s[f + 1] = G, s[f + 2] = x, f += 3;
            var M = g / this.widthSegments,
                y = v / this.lengthSegments;
            l[p] = M, l[p + 1] = y, p += 2
        }
    for (var w = 0, D = this.widthSegments + 1, v = 0; v < this.lengthSegments; v++)
        for (var g = 0; g < this.widthSegments; g++) {
            var X = g + D * v,
                C = g + D * (v + 1),
                A = g + 1 + D * (v + 1),
                _ = g + 1 + D * v;
            n[w] = X, n[w + 1] = C, n[w + 2] = _, n[w + 3] = C, n[w + 4] = A, n[w + 5] = _, w += 6
        }
    this.offsets.push({
        start: 0,
        index: 0,
        count: n.length
    }), this.computeVertexNormals()
}, XG.HeightfieldGeometry.prototype = Object.create(XG.Geometry.prototype), XG.BoxGeometry = function(e, t, r) {
    XG.Geometry.call(this), this.width = e, this.height = t, this.depth = r, this.numPrimitives = 12, this.numVertices = 24, this.addIndex("index", Uint16Array, 3), this.addAttribute("position", Float32Array, 3), this.addAttribute("normal", Float32Array, 3), this.addAttribute("uv", Float32Array, 2);
    var a = this.attributes.index.array,
        i = this.attributes.position.array,
        o = this.attributes.normal.array,
        n = this.attributes.uv.array,
        s = this.width / 2,
        l = this.height / 2,
        h = this.depth / 2,
        d = 0,
        u = 0,
        c = 0,
        f = 0,
        p = function(e, t, r, s, l, h, p, m, v, g, S, x, G, M, y) {
            i[d] = s, i[d + 1] = l, i[d + 2] = h, i[d + 3] = p, i[d + 4] = m, i[d + 5] = v, i[d + 6] = g, i[d + 7] = S, i[d + 8] = x, i[d + 9] = G, i[d + 10] = M, i[d + 11] = y, o[d] = e, o[d + 1] = t, o[d + 2] = r, o[d + 3] = e, o[d + 4] = t, o[d + 5] = r, o[d + 6] = e, o[d + 7] = t, o[d + 8] = r, o[d + 9] = e, o[d + 10] = t, o[d + 11] = r, n[u] = 0, n[u + 1] = 0, n[u + 2] = 1, n[u + 3] = 0, n[u + 4] = 1, n[u + 5] = 1, n[u + 6] = 0, n[u + 7] = 1, a[c] = f, a[c + 1] = f + 1, a[c + 2] = f + 3, a[c + 3] = f + 1, a[c + 4] = f + 2, a[c + 5] = f + 3, d += 12, u += 8, c += 6, f += 4
        };
    p(1, 0, 0, s, -l, h, s, -l, -h, s, l, -h, s, l, h), p(-1, 0, 0, -s, -l, -h, -s, -l, h, -s, l, h, -s, l, -h), p(0, 1, 0, -s, l, h, s, l, h, s, l, -h, -s, l, -h), p(0, -1, 0, s, -l, h, -s, -l, h, -s, -l, -h, s, -l, -h), p(0, 0, 1, -s, -l, h, s, -l, h, s, l, h, -s, l, h), p(0, 0, -1, s, -l, -h, -s, -l, -h, -s, l, -h, s, l, -h), this.offsets.push({
        start: 0,
        index: 0,
        count: a.length
    })
}, XG.BoxGeometry.prototype = Object.create(XG.Geometry.prototype), XG.SphereGeometry = function(e, t, r, a, i, o, n) {
    XG.Geometry.call(this), this.radius = e || 50, this.widthSegments = Math.max(3, Math.floor(t) || 8), this.heightSegments = Math.max(2, Math.floor(r) || 6), a = void 0 !== a ? a : 0, i = void 0 !== i ? i : 2 * Math.PI, o = void 0 !== o ? o : 0, n = void 0 !== n ? n : Math.PI, this.numPrimitives = this.heightSegments * this.widthSegments * 2, this.numVertices = (this.heightSegments + 1) * (this.widthSegments + 1), this.addIndex("index", Uint16Array, 3), this.addAttribute("position", Float32Array, 3), this.addAttribute("normal", Float32Array, 3), this.addAttribute("uv", Float32Array, 2);
    var s, l, h = this.attributes.index.array,
        d = this.attributes.position.array,
        u = this.attributes.normal.array,
        c = this.attributes.uv.array,
        f = 0,
        p = 0,
        m = new XG.Vector3;
    for (l = 0; l <= this.heightSegments; l++)
        for (s = 0; s <= this.widthSegments; s++) {
            var v = s / this.widthSegments,
                g = l / this.heightSegments,
                S = -this.radius * Math.cos(a + v * i) * Math.sin(o + g * n),
                x = this.radius * Math.cos(o + g * n),
                G = this.radius * Math.sin(a + v * i) * Math.sin(o + g * n);
            d[f] = S, d[f + 1] = x, d[f + 2] = G, m.set(S, x, G).normalize(), u[f] = m.data[0], u[f + 1] = m.data[1], u[f + 2] = m.data[2], f += 3, c[p] = v, c[p + 1] = 1 - g, p += 2
        }
    for (f = 0, l = 0; l < this.heightSegments; l++)
        for (s = 0; s < this.widthSegments; s++) {
            var M = l * (this.widthSegments + 1) + (s + 1),
                y = l * (this.widthSegments + 1) + s,
                w = (l + 1) * (this.widthSegments + 1) + s,
                D = (l + 1) * (this.widthSegments + 1) + (s + 1);
            h[f] = M, h[f + 1] = y, h[f + 2] = D, h[f + 3] = y, h[f + 4] = w, h[f + 5] = D, f += 6
        }
    this.offsets.push({
        start: 0,
        index: 0,
        count: h.length
    }), this.boundingSphere = new XG.Sphere(new XG.Vector3, e)
}, XG.SphereGeometry.prototype = Object.create(XG.Geometry.prototype), XG.CylinderGeometry = function(e, t, r, a, i, o) {
    XG.Geometry.call(this), e = void 0 !== e ? e : 20, t = void 0 !== t ? t : 20, r = void 0 !== r ? r : 100;
    var n = r / 2,
        s = a || 8,
        l = i || 1,
        h = e > 0 && !o,
        d = t > 0 && !o;
    this.numPrimitives = l * s * 2 + s * (1 * h + 1 * d), this.numVertices = (l + 1) * (s + 1) + (2 * s + 1) * (1 * h + 1 * d), this.addIndex("index", Uint16Array, 3), this.addAttribute("position", Float32Array, 3), this.addAttribute("normal", Float32Array, 3), this.addAttribute("uv", Float32Array, 2);
    var u, c, f = this.attributes.index.array,
        p = this.attributes.position.array,
        m = this.attributes.normal.array,
        v = this.attributes.uv.array,
        g = 0,
        S = 0,
        x = 0;
    for (c = 0; l >= c; c++) {
        var G = c / l,
            M = G * (t - e) + e;
        for (u = 0; s >= u; u++) {
            var y = u / s,
                w = M * Math.sin(y * Math.PI * 2),
                D = -G * r + n,
                X = M * Math.cos(y * Math.PI * 2);
            p[g] = w, p[g + 1] = D, p[g + 2] = X, g += 3, v[x] = y, v[x + 1] = 1 - G, x += 2
        }
    }
    var C, A, _, T, b, P, L, E, F = (t - e) / r,
        R = new XG.Vector3,
        U = new XG.Vector3;
    for (S = 0, u = 0; s > u; u++)
        for (0 !== e ? (L = u, E = u + 1) : (L = s + 1 + u, E = s + 1 + (u + 1)), L *= 3, E *= 3, C = p[L], A = p[L + 1], _ = p[L + 2], T = p[E], b = p[E + 1], P = p[E + 2], R.set(C, A, _), U.set(T, b, P), R.setY(Math.sqrt(R.data[0] * R.data[0] + R.data[2] * R.data[2]) * F).normalize(), U.setY(Math.sqrt(U.data[0] * U.data[0] + U.data[2] * U.data[2]) * F).normalize(), c = 0; l > c; c++) {
            var N = c * (s + 1) + u,
                I = (c + 1) * (s + 1) + u,
                B = (c + 1) * (s + 1) + (u + 1),
                O = c * (s + 1) + (u + 1);
            f[S] = N, f[S + 1] = I, f[S + 2] = O, f[S + 3] = I, f[S + 4] = B, f[S + 5] = O, S += 6, m[3 * N] = R.data[0], m[3 * N + 1] = R.data[1], m[3 * N + 2] = R.data[2], m[3 * I] = R.data[0], m[3 * I + 1] = R.data[1], m[3 * I + 2] = R.data[2], m[3 * B] = U.data[0], m[3 * B + 1] = U.data[1], m[3 * B + 2] = U.data[2], m[3 * O] = U.data[0], m[3 * O + 1] = U.data[1], m[3 * O + 2] = U.data[2]
        }
    if (!o && e > 0) {
        var B = g / 3;
        for (p[g] = 0, p[g + 1] = n, p[g + 2] = 0, m[g] = 0, m[g + 1] = 1, m[g + 2] = 0, g += 3, v[x] = .5, v[x + 1] = .5, x += 2, u = 0; s > u; u++) {
            var N = g / 3,
                I = N + 1;
            C = 3 * u, T = 3 * (u + 1), p[g] = p[C], p[g + 1] = p[C + 1], p[g + 2] = p[C + 2], p[g + 3] = p[T], p[g + 4] = p[T + 1], p[g + 5] = p[T + 2], m[g] = 0, m[g + 1] = 1, m[g + 2] = 0, m[g + 3] = 0, m[g + 4] = 1, m[g + 5] = 0, g += 6, f[S] = N, f[S + 1] = I, f[S + 2] = B, S += 3;
            var k = u / s,
                V = (u + 1) / s;
            v[x] = k, v[x + 1] = 1, v[x + 2] = V, v[x + 3] = 1, x += 4
        }
    }
    if (!o && t > 0) {
        var B = g / 3;
        for (p[g] = 0, p[g + 1] = -n, p[g + 2] = 0, m[g] = 0, m[g + 1] = -1, m[g + 2] = 0, g += 3, v[x] = .5, v[x + 1] = .5, x += 2, u = 0; s > u; u++) {
            var N = g / 3,
                I = N + 1;
            C = 3 * (u + 1 + c * (s + 1)), T = 3 * (u + c * (s + 1)), p[g] = p[C], p[g + 1] = p[C + 1], p[g + 2] = p[C + 2], p[g + 3] = p[T], p[g + 4] = p[T + 1], p[g + 5] = p[T + 2], m[g] = 0, m[g + 1] = -1, m[g + 2] = 0, m[g + 3] = 0, m[g + 4] = -1, m[g + 5] = 0, g += 6, f[S] = N, f[S + 1] = I, f[S + 2] = B, S += 3;
            var k = u / s,
                V = (u + 1) / s;
            v[x] = k, v[x + 1] = 0, v[x + 2] = V, v[x + 3] = 0, x += 4
        }
    }
    this.offsets.push({
        start: 0,
        index: 0,
        count: f.length
    })
}, XG.CylinderGeometry.prototype = Object.create(XG.Geometry.prototype), XG.CapsuleGeometry = function(e, t, r) {
    XG.Geometry.call(this);
    var a = new XG.CylinderGeometry(e, e, t, r, 1, !0),
        i = new XG.SphereGeometry(e, r, .5 * r, 0, 2 * Math.PI, 0, .5 * Math.PI),
        o = new XG.Vector3(0, .5 * t, 0),
        n = new XG.Vector3(0, .5 * -t, 0),
        s = new XG.Matrix4;
    s.makeTranslation(o);
    var l = new XG.Matrix4;
    l.makeRotationX(Math.PI);
    var h = new XG.Matrix4;
    h.makeTranslation(n), h.multiplySelf(l), a.merge(i, s), a.merge(i, h), a.computeBoundingSphere(), this.attributes = a.attributes, this.attributesList = a.attributesList, this.virtualAttributes = a.virtualAttributes, this.virtualAttributesList = a.virtualAttributesList, this.numPrimitives = a.numPrimitives, this.numVertices = a.numVertices, this.offsets = a.offsets, this.boundingBox = a.boundingBox, this.boundingSphere = a.boundingSphere
}, XG.CapsuleGeometry.prototype = Object.create(XG.Geometry.prototype), XG.RandomGeometry = function(e) {
    XG.Geometry.call(this), void 0 === e && (e = {}), this.shape = void 0 !== e.shape ? e.shape : "sphere", this.customCallback = void 0 !== e.callback ? e.callback : function() {}, this.radius = void 0 !== e.radius ? e.radius : 1, this.width = void 0 !== e.width ? e.width : 1, this.height = void 0 !== e.height ? e.height : 1, this.depth = void 0 !== e.depth ? e.depth : 1, this.useSeed = void 0 !== e.useSeed ? e.useSeed : !1, this.seed = void 0 !== e.seed ? e.seed : Math.random(), this.numPrimitives = 0, this.numVertices = void 0 !== e.vertices ? e.vertices : 1e3, this.addAttribute("position", Float32Array, 3), this.refresh(this.seed)
}, XG.RandomGeometry.prototype = Object.create(XG.Geometry.prototype), XG.RandomGeometry.prototype.refresh = function(e) {
    this.seed = e;
    var t = this.attributes.position.array,
        r = this.radius,
        a = this.width,
        i = this.height,
        o = this.depth;
    if (this.useSeed) {
        Math.seedrandom(this.seed);
        var n = Math.srandom
    } else var n = Math.random;
    var s, l = function(e) {
            var t = 2 * n() - 1,
                a = n() * Math.PI * 2,
                i = Math.sqrt(1 - t * t);
            e.x = r * i * Math.cos(a), e.y = r * i * Math.sin(a), e.z = r * t
        },
        h = function(e) {
            for (var t = 0, a = .5, i = c; i; a *= .5, i >>= 1) 1 & i && (t += a);
            t = 2 * t - 1;
            var o = (c + .5) / f,
                n = 2 * o * Math.PI,
                s = Math.sqrt(1 - t * t);
            e.x = r * s * Math.cos(n), e.y = r * s * Math.sin(n), e.z = r * t, c += 1
        },
        d = function(e) {
            var t = (n() - .5) * r,
                a = (n() - .5) * r,
                i = (n() - .5) * r,
                o = n() * r,
                s = 1 / Math.sqrt(t * t + a * a + i * i);
            e.x = o * t * s, e.y = o * a * s, e.z = o * i * s
        },
        u = function(e) {
            e.x = (n() - .5) * a, e.y = (n() - .5) * i, e.z = (n() - .5) * o
        };
    "sphereSurface" === this.shape ? s = l : "sphereHammersley" === this.shape ? s = h : "sphere" === this.shape ? s = d : "box" === this.shape ? s = u : "custom" === this.shape && (s = this.customCallback);
    for (var c = 0, f = this.numVertices, p = 0, m = {
            x: 0,
            y: 0,
            z: 0
        }, v = 0, g = this.numVertices; g > v; v++) s(m), t[p] = m.x, t[p + 1] = m.y, t[p + 2] = m.z, p += 3;
    this.attributes.position.needsUpdate = !0
}, XG.SpriteGeometry = function(e) {
    XG.Geometry.call(this), this.numSprites = e, this.numPrimitives = 2 * e, this.numVertices = 4 * e;
    var t = Uint16Array;
    this.numVertices > 65536 && (t = XG.elementIndexUintAvailable ? Uint32Array : null), null === t && console.error("XG.SpriteGeometry: 32 bit indices not supported (geometry has", e, "sprites)"), this.addIndex("index", t, 3), this.addAttribute("position", Float32Array, 3), this.addAttribute("offset", Float32Array, 3), this.addAttribute("color", Float32Array, 3), this.addAttribute("uv", Float32Array, 2), this.addAttribute("scale", Float32Array, 2);
    for (var r = this.attributes.index.array, a = this.attributes.position.array, i = this.attributes.offset.array, o = this.attributes.color.array, n = this.attributes.uv.array, s = this.attributes.scale.array, l = 0, h = 0, d = 0, u = 0, c = function() {
            var e = 0,
                t = 0,
                c = 0,
                f = 1,
                p = 1,
                m = 1,
                v = 1,
                g = 1,
                S = 0,
                x = 0,
                G = 1,
                M = 0,
                y = 1,
                w = 1,
                D = 0,
                X = 1;
            a[l] = -.5, a[l + 1] = -.5, a[l + 2] = 0, a[l + 3] = .5, a[l + 4] = -.5, a[l + 5] = 0, a[l + 6] = .5, a[l + 7] = .5, a[l + 8] = 0, a[l + 9] = -.5, a[l + 10] = .5, a[l + 11] = 0, i[l] = e, i[l + 1] = t, i[l + 2] = c, i[l + 3] = e, i[l + 4] = t, i[l + 5] = c, i[l + 6] = e, i[l + 7] = t, i[l + 8] = c, i[l + 9] = e, i[l + 10] = t, i[l + 11] = c, o[l] = f, o[l + 1] = p, o[l + 2] = m, o[l + 3] = f, o[l + 4] = p, o[l + 5] = m, o[l + 6] = f, o[l + 7] = p, o[l + 8] = m, o[l + 9] = f, o[l + 10] = p, o[l + 11] = m, s[u] = v, s[u + 1] = g, s[u + 2] = v, s[u + 3] = g, s[u + 4] = v, s[u + 5] = g, s[u + 6] = v, s[u + 7] = g, n[u] = S, n[u + 1] = x, n[u + 2] = G, n[u + 3] = M, n[u + 4] = y, n[u + 5] = w, n[u + 6] = D, n[u + 7] = X, r[d] = h, r[d + 1] = h + 1, r[d + 2] = h + 2, r[d + 3] = h, r[d + 4] = h + 2, r[d + 5] = h + 3, l += 12, u += 8, d += 6, h += 4
        }, f = 0; f < this.numSprites; f++) c();
    this.offsets.push({
        start: 0,
        index: 0,
        count: r.length
    })
}, XG.SpriteGeometry.prototype = Object.create(XG.Geometry.prototype), XG.SpriteGeometry.prototype.setSpritePosition = function(e, t, r, a) {
    var i = this.attributes.offset.array,
        o = 12 * e;
    i[o] = t, i[o + 1] = r, i[o + 2] = a, i[o + 3] = t, i[o + 4] = r, i[o + 5] = a, i[o + 6] = t, i[o + 7] = r, i[o + 8] = a, i[o + 9] = t, i[o + 10] = r, i[o + 11] = a
}, XG.SpriteGeometry.prototype.setSpriteColor = function(e, t, r, a) {
    var i = this.attributes.color.array,
        o = 12 * e;
    i[o] = t, i[o + 1] = r, i[o + 2] = a, i[o + 3] = t, i[o + 4] = r, i[o + 5] = a, i[o + 6] = t, i[o + 7] = r, i[o + 8] = a, i[o + 9] = t, i[o + 10] = r, i[o + 11] = a
}, XG.SpriteGeometry.prototype.setSpriteScale = function(e, t, r) {
    var a = this.attributes.scale.array,
        i = 8 * e;
    a[i] = t, a[i + 1] = r, a[i + 2] = t, a[i + 3] = r, a[i + 4] = t, a[i + 5] = r, a[i + 6] = t, a[i + 7] = r
}, XG.SpriteGeometry.prototype.setSpriteUV = function(e, t, r, a, i, o, n, s, l) {
    var h = this.attributes.uv.array,
        d = 8 * e;
    h[d] = t, h[d + 1] = r, h[d + 2] = o, h[d + 3] = n, h[d + 4] = s, h[d + 5] = l, h[d + 6] = a, h[d + 7] = i
}, XG.SpriteGeometry.prototype.computeBoundingSphere = function() {
    null === this.boundingSphere && (this.boundingSphere = new XG.Sphere);
    var e = this.attributes.position.array,
        t = this.attributes.offset.array,
        r = this.attributes.scale.array;
    if (e) {
        for (var a, i, o, n, s, l, h, d, u, c, f, p, m = 0, v = 0, g = 0, S = e.length; S > v; v += 3, g += 2) s = e[v], l = e[v + 1], h = e[v + 2], d = t[v], u = t[v + 1], c = t[v + 2], f = r[g], p = r[g + 1], i = s * f + d, o = l * p + u, n = h + c, a = i * i + o * o + n * n, a > m && (m = a);
        this.boundingSphere.radius = Math.sqrt(m)
    }
}, XG.SpriteGeometry.prototype.setSpriteTexture = function(e, t, r) {
    var a = r.width,
        i = r.height,
        o = (r.base, t.width),
        n = t.height,
        s = t.x,
        l = t.y,
        h = s / a,
        d = (i - l) / i,
        u = (s + o) / a,
        c = (i - (l + n)) / i,
        f = (s + o) / a,
        p = (i - l) / i,
        m = s / a,
        v = (i - (l + n)) / i,
        g = o,
        S = n,
        x = this.attributes.scale.array,
        G = 8 * e,
        M = x[G],
        y = x[G + 1];
    M = g * M, y = S * y, this.setSpriteUV(e, m, v, h, d, u, c, f, p), this.setSpriteScale(e, M, y)
}, XG.SpriteGeometry.prototype.setText = function(e, t, r, a, i, o) {
    void 0 === i && (i = {});
    for (var n = void 0 !== i.wordWrap ? i.wordWrap : !0, s = void 0 !== i.charWrap ? i.charWrap : !1, l = i.font, h = i.lineLength, d = i.lineHeight, u = i.fontSize, c = Math.min(e.length, this.numSprites), f = d * l.base * u, p = {
            width: l.width,
            height: l.height,
            base: l.base
        }, m = function(e) {
            return " " === e || "	" === e || "\n" === e || "\r" === e || "\f" === e || "" === e || null === e
        }, v = function(t, r) {
            for (var a = r, i = t, o = e[i], n = e[i + 1]; c > i && !m(o);) {
                var s = o.charCodeAt(0),
                    h = l.chars[s],
                    d = m(n) || void 0 === n;
                if (void 0 === h) a += g;
                else {
                    var f = h.xadvance * u,
                        p = h.xoffset * u;
                    if (d) {
                        var v = h.width * u;
                        a += p + v
                    } else a += p + f
                }
                i += 1, o = e[i], n = e[i + 1]
            }
            return a
        }, g = l.base, S = 0, x = 0, G = !0, M = null, y = 1 / 0, w = 1 / 0, D = -1 / 0, X = -1 / 0, C = 0; c > C; C++) {
        var A = e[C];
        if ("\n" !== A) {
            var _ = A.charCodeAt(0),
                T = l.chars[_];
            if (void 0 !== T) {
                if (n && (G = m(M) && !m(A))) {
                    var b = v(C, S);
                    b > h && (x -= f, S = 0)
                }
                var P = T.width * u,
                    L = T.height * u,
                    E = T.xadvance * u,
                    F = T.xoffset * u,
                    R = T.yoffset * u;
                if (s) {
                    var U = S + F + P;
                    U > h && (x -= f, S = 0)
                }
                var N = t + .5 * P + S + F,
                    I = r + .5 * L + x + R - L,
                    B = a;
                this.setSpriteScale(C, u, u), this.setSpritePosition(C, N, I, B), this.setSpriteTexture(C, T, p);
                var O = S + F,
                    k = O + P,
                    V = x + R,
                    H = V - L;
                y > O && (y = O), k > D && (D = k), w > V && (w = V), H > X && (X = H), S += E, M = A
            } else S += g * u, M = A, this.setSpriteScale(C, 0, 0)
        } else x -= f, S = 0, M = A, this.setSpriteScale(C, 0, 0)
    }
    return void 0 === o && (o = {
        width: 0,
        height: 0,
        minx: 1 / 0,
        maxx: -1 / 0,
        miny: 1 / 0,
        maxy: -1 / 0
    }), o.width = D - y, o.height = X - w, o.minx = y, o.miny = w, o.maxx = D, o.maxy = X, o
}, XG.GeometryUtils = {
    center: function(e) {
        for (var t = new XG.Box3, r = 0, a = e.length; a > r; r++) {
            var i = e[r];
            i.computeBoundingBox(), t.add(i.boundingBox)
        }
        var o = t.min.clone();
        o.addSelf(t.max), o.multiplyScalar(-.5);
        var n = new XG.Matrix4;
        n.makeTranslation(o);
        for (var r = 0, a = e.length; a > r; r++) {
            var i = e[r];
            i.applyMatrix(n)
        }
    },
    generateTerrainHeights: function(e, t, r, a) {
        if (void 0 !== a) {
            Math.seedrandom(a);
            var i = Math.srandom
        } else var i = Math.random;
        for (var o = function(t, r, a) {
                var i = r * s + t;
                e[i] = a
            }, n = function(t, r) {
                var a = r * s + t;
                return e[a]
            }, s = t + 1, l = t; l >= 2; l /= 2) {
            var h = l / 2;
            r /= 2;
            for (var d = 0; t > d; d += l)
                for (var u = 0; t > u; u += l) {
                    var c = n(d, u) + n(d + l, u) + n(d, u + l) + n(d + l, u + l);
                    c /= 4, c += 2 * r * i() - r, o(d + h, u + h, c)
                }
            for (var d = 0; t > d; d += h)
                for (var u = (d + h) % l; t > u; u += l) {
                    var c = n((d - h + s) % s, u) + n((d + h) % s, u) + n(d, (u + h) % s) + n(d, (u - h + s) % s);
                    c /= 4, c += 2 * r * i() - r, o(d, u, c), 0 === d && o(t, u, c), 0 === u && o(d, t, c)
                }
        }
    },
    getTerrainHeightsRange: function(e) {
        for (var t = 1 / 0, r = -1 / 0, a = 0, i = e.length; i > a; a++) {
            var o = e[a];
            t > o && (t = o), o > r && (r = o)
        }
        return {
            min: t,
            max: r
        }
    },
    offsetTerrainHeights: function(e, t) {
        for (var r = 0, a = e.length; a > r; r++) e[r] += t
    },
    centerTerrainHeights: function(e) {
        var t = XG.GeometryUtils.getTerrainHeightsRange(e),
            r = (t.min + t.max) * -.5;
        XG.GeometryUtils.offsetTerrainHeights(e, r)
    },
    floorTerrainHeights: function(e) {
        var t = XG.GeometryUtils.getTerrainHeightsRange(e),
            r = -t.min;
        XG.GeometryUtils.offsetTerrainHeights(e, r)
    },
    blendTerrainHeights: function(e, t, r, a) {
        for (var i = 0, o = e.length; o > i; i++) {
            var n = e[i],
                s = t[i],
                l = Math.floor(i / r),
                h = i % r,
                d = a(h, l);
            e[i] = d * n + (1 - d) * s
        }
    },
    addParticleAttributes: function(e) {
        e.addAttribute("velocitySpinStart", Float32Array, 4), e.addAttribute("accelerationSpinSpeed", Float32Array, 4), e.addAttribute("startSizeEndSizeStartTimeLifeTime", Float32Array, 4)
    },
    setParticleAttributes: function(e, t) {
        var r = e.attributes.velocitySpinStart.array,
            a = e.attributes.accelerationSpinSpeed.array,
            i = e.attributes.startSizeEndSizeStartTimeLifeTime.array,
            o = {
                x: 0,
                y: 0,
                z: 0
            },
            n = {
                x: 0,
                y: 0,
                z: 0
            },
            s = {
                start: 0,
                speed: 0
            },
            l = {
                start: 0,
                end: 0
            },
            h = {
                start: 0,
                life: 0
            },
            d = {
                velocity: o,
                acceleration: n,
                spin: s,
                size: l,
                time: h
            };
        (r.length !== a.length || r.length !== i.length || i.length !== a.length) && console.error("XG.GeometryUtils.setParticleAttributes: attributes lengths mismatch");
        for (var u = 0, c = r.length; c > u; u += 4) t(d), r[u] = o.x, r[u + 1] = o.y, r[u + 2] = o.z, r[u + 3] = s.start, a[u] = n.x, a[u + 1] = n.y, a[u + 2] = n.z, a[u + 3] = s.speed, i[u] = l.start, i[u + 1] = l.end, i[u + 2] = h.start, i[u + 3] = h.life
    }
}, XG.Node = function() {
    this.id = XG.NodeIdCount++, this.name = "", this.properties = {}, this.parent = void 0, this.children = [], this.transformChildren = !0, this.position = new XG.Vector3, this.rotation = new XG.Vector3, this.scale = new XG.Vector3(1, 1, 1), this.up = new XG.Vector3(0, 1, 0), this.eulerOrder = XG.Node.defaultEulerOrder, this.renderDepth = null, this.rotationAutoUpdate = !0, this.matrix = new XG.Matrix4, this.matrixWorld = new XG.Matrix4, this.matrixAutoUpdate = !0, this.matrixWorldNeedsUpdate = !0, this.quaternion = new XG.Quaternion, this.useQuaternion = !1, this.visible = !0, this.enabled = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0
}, XG.Node.prototype = {
    constructor: XG.Node,
    applyMatrix: function(e) {
        this.matrix.multiply(e, this.matrix), this.scale.getScaleFromMatrix(this.matrix);
        var t = (new XG.Matrix4).extractRotation(this.matrix);
        this.rotation.setEulerFromRotationMatrix(t, this.eulerOrder), this.position.getPositionFromMatrix(this.matrix)
    },
    translate: function(e, t) {
        this.matrix.rotateAxis(t), this.position.addSelf(t.multiplyScalar(e))
    },
    translateX: function(e) {
        this.translate(e, XG.Vector3.xAxis.clone())
    },
    translateY: function(e) {
        this.translate(e, XG.Vector3.yAxis.clone())
    },
    translateZ: function(e) {
        this.translate(e, XG.Vector3.zAxis.clone())
    },
    localToWorld: function(e) {
        return this.matrixWorld.multiplyVector3(e)
    },
    worldToLocal: function(e) {
        return XG.Node.__m1.getInverse(this.matrixWorld).multiplyVector3(e)
    },
    lookAt: function(e) {
        this.matrix.lookAt(e, this.position, this.up), this.rotationAutoUpdate && (this.useQuaternion === !1 ? this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder) : this.quaternion.copy(this.matrix.decompose()[1]))
    },
    add: function(e) {
        if (e === this) return void console.warn("XG.Node.add: A node can't be added as a child of itself.");
        if (e instanceof XG.Node) {
            void 0 !== e.parent && e.parent.remove(e), e.parent = this, this.children.push(e);
            var t = this.getTopParent();
            void 0 !== t && t instanceof XG.Scene && t.__addNode(e)
        }
    },
    remove: function(e) {
        var t = this.children.indexOf(e);
        if (-1 !== t) {
            e.parent = void 0, this.children.splice(t, 1);
            var r = this.getTopParent();
            void 0 !== r && r instanceof XG.Scene && r.__removeNode(e)
        }
    },
    traverse: function(e) {
        e(this);
        for (var t = this.children, r = 0, a = t.length; a > r; r++) t[r].traverse(e)
    },
    getChildByName: function(e, t) {
        for (var r = 0, a = this.children.length; a > r; r++) {
            var i = this.children[r];
            if (i.name === e) return i;
            if (t === !0 && (i = i.getChildByName(e, t), void 0 !== i)) return i
        }
        return void 0
    },
    getDescendants: function(e) {
        void 0 === e && (e = []), Array.prototype.push.apply(e, this.children);
        for (var t = 0, r = this.children.length; r > t; t++) this.children[t].getDescendants(e);
        return e
    },
    getTopParent: function() {
        for (var e = this; void 0 !== e.parent;) e = e.parent;
        return e
    },
    updateMatrix: function() {
        this.useQuaternion === !1 && this.quaternion.setFromEuler(this.rotation, this.eulerOrder), this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(e) {
        this.matrixAutoUpdate === !0 && this.updateMatrix(), (this.matrixWorldNeedsUpdate === !0 || e === !0) && (this.parent && this.parent.transformChildren ? this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
        for (var t = this.children, r = 0, a = t.length; a > r; r++) t[r].updateMatrixWorld(e)
    },
    clone: function(e) {
        void 0 === e && (e = new XG.Node), e.name = this.name, e.up.copy(this.up), e.position.copy(this.position), e.rotation instanceof XG.Vector3 && e.rotation.copy(this.rotation), e.eulerOrder = this.eulerOrder, e.scale.copy(this.scale), e.renderDepth = this.renderDepth, e.rotationAutoUpdate = this.rotationAutoUpdate, e.matrix.copy(this.matrix), e.matrixWorld.copy(this.matrixWorld), e.matrixAutoUpdate = this.matrixAutoUpdate, e.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate, e.quaternion.copy(this.quaternion), e.useQuaternion = this.useQuaternion, e.visible = this.visible, e.castShadow = this.castShadow, e.receiveShadow = this.receiveShadow, e.frustumCulled = this.frustumCulled;
        for (var t = 0; t < this.children.length; t++) {
            var r = this.children[t];
            e.add(r.clone())
        }
        return e
    }
}, XG.Node.__m1 = new XG.Matrix4, XG.Node.defaultEulerOrder = XG.xyzOrder, XG.NodeIdCount = 0, XG.Bone = function(e) {
    XG.Node.call(this), this.skin = e, this.skinMatrix = new XG.Matrix4
}, XG.Bone.prototype = Object.create(XG.Node.prototype), XG.Bone.prototype.update = function(e, t) {
    this.matrixAutoUpdate && (t |= this.updateMatrix()), (t || this.matrixWorldNeedsUpdate) && (e ? this.skinMatrix.multiply(e, this.matrix) : this.skinMatrix.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
    for (var r = 0, a = this.children.length; a > r; r++) this.children[r].update(this.skinMatrix, t)
}, XG.Scene = function() {
    XG.Node.call(this), this.fog = null, this.heightFog = null, this.matrixAutoUpdate = !1, this.transformChildren = !1, this.__objects = [], this.__lights = [], this.__objectsAdded = [], this.__objectsRemoved = []
}, XG.Scene.prototype = Object.create(XG.Node.prototype), XG.Scene.prototype.__addNode = function(e) {
    if (e instanceof XG.Light) - 1 === this.__lights.indexOf(e) && this.__lights.push(e), e.target && void 0 === e.target.parent && this.add(e.target);
    else if (!(e instanceof XG.Camera || e instanceof XG.Bone) && -1 === this.__objects.indexOf(e)) {
        this.__objects.push(e), this.__objectsAdded.push(e);
        var t = this.__objectsRemoved.indexOf(e); - 1 !== t && this.__objectsRemoved.splice(t, 1)
    }
    for (var r = 0; r < e.children.length; r++) this.__addNode(e.children[r])
}, XG.Scene.prototype.__removeNode = function(e) {
    if (e instanceof XG.Light) {
        var t = this.__lights.indexOf(e); - 1 !== t && this.__lights.splice(t, 1)
    } else if (!(e instanceof XG.Camera)) {
        var t = this.__objects.indexOf(e);
        if (-1 !== t) {
            this.__objects.splice(t, 1), this.__objectsRemoved.push(e);
            var r = this.__objectsAdded.indexOf(e); - 1 !== r && this.__objectsAdded.splice(r, 1)
        }
    }
    for (var a = 0; a < e.children.length; a++) this.__removeNode(e.children[a])
}, XG.Gyroscope = function() {
    XG.Node.call(this)
}, XG.Gyroscope.prototype = Object.create(XG.Node.prototype), XG.Gyroscope.prototype.updateMatrixWorld = function(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent ? (this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix), this.matrixWorld.decompose(this.translationWorld, this.rotationWorld, this.scaleWorld), this.matrix.decompose(this.translationObject, this.rotationObject, this.scaleObject), this.matrixWorld.compose(this.translationWorld, this.rotationObject, this.scaleWorld)) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    for (var t = 0, r = this.children.length; r > t; t++) this.children[t].updateMatrixWorld(e)
}, XG.Gyroscope.prototype.translationWorld = new XG.Vector3, XG.Gyroscope.prototype.translationObject = new XG.Vector3, XG.Gyroscope.prototype.rotationWorld = new XG.Quaternion, XG.Gyroscope.prototype.rotationObject = new XG.Quaternion, XG.Gyroscope.prototype.scaleWorld = new XG.Vector3, XG.Gyroscope.prototype.scaleObject = new XG.Vector3, XG.Mesh = function(e, t) {
    XG.Node.call(this), this.geometries = e instanceof Array ? e : e instanceof XG.Geometry ? [e] : [], this.materials = t instanceof Array ? t : t instanceof XG.Material ? [t] : [];
    for (var r = 0, a = this.geometries.length; a > r; r++) {
        var i = this.geometries[r];
        null === i.boundingSphere && i.computeBoundingSphere()
    }
}, XG.Mesh.prototype = Object.create(XG.Node.prototype), XG.Mesh.prototype.clone = function(e) {
    return void 0 === e && (e = new XG.Mesh(this.geometries, this.materials)), XG.Node.prototype.clone.call(this, e), e
}, XG.MorphMesh = function(e, t) {
    XG.Mesh.call(this, e, t), this.animationsMap = {}, this.animationsList = [];
    var r = this.geometries[0],
        a = r.morphTargets.length,
        i = "__default",
        o = 0,
        n = a - 1,
        s = a / 1;
    this.createAnimation(i, o, n, s), this.setAnimationWeight(i, 1), this.morphTargetInfluences = new Float32Array(r.morphTargets.length)
}, XG.MorphMesh.prototype = Object.create(XG.Mesh.prototype), XG.MorphMesh.prototype.createAnimation = function(e, t, r, a) {
    var i = {
        startFrame: t,
        endFrame: r,
        length: r - t + 1,
        fps: a,
        duration: (r - t) / a,
        lastFrame: 0,
        currentFrame: 0,
        active: !1,
        time: 0,
        direction: 1,
        weight: 1,
        directionBackwards: !1,
        mirroredLoop: !1
    };
    this.animationsMap[e] = i, this.animationsList.push(i)
}, XG.MorphMesh.prototype.autoCreateAnimations = function(e) {
    for (var t, r = /([a-z]+)(\d+)/, a = {}, i = this.geometries[0], o = 0, n = i.morphTargets.length; n > o; o++) {
        var s = i.morphTargets[o],
            l = s.name.match(r);
        if (l && l.length > 1) {
            {
                var h = l[1];
                l[2]
            }
            a[h] || (a[h] = {
                start: 1 / 0,
                end: -1 / 0
            });
            var d = a[h];
            o < d.start && (d.start = o), o > d.end && (d.end = o), t || (t = h)
        }
    }
    for (var h in a) {
        var d = a[h];
        this.createAnimation(h, d.start, d.end, e)
    }
    this.firstAnimation = t
}, XG.MorphMesh.prototype.setAnimationDirectionForward = function(e) {
    var t = this.animationsMap[e];
    t && (t.direction = 1, t.directionBackwards = !1)
}, XG.MorphMesh.prototype.setAnimationDirectionBackward = function(e) {
    var t = this.animationsMap[e];
    t && (t.direction = -1, t.directionBackwards = !0)
}, XG.MorphMesh.prototype.setAnimationFPS = function(e, t) {
    var r = this.animationsMap[e];
    r && (r.fps = t, r.duration = (r.end - r.start) / r.fps)
}, XG.MorphMesh.prototype.setAnimationDuration = function(e, t) {
    var r = this.animationsMap[e];
    r && (r.duration = t, r.fps = (r.end - r.start) / r.duration)
}, XG.MorphMesh.prototype.setAnimationWeight = function(e, t) {
    var r = this.animationsMap[e];
    r && (r.weight = t)
}, XG.MorphMesh.prototype.setAnimationTime = function(e, t) {
    var r = this.animationsMap[e];
    r && (r.time = t)
}, XG.MorphMesh.prototype.getAnimationTime = function(e) {
    var t = 0,
        r = this.animationsMap[e];
    return r && (t = r.time), t
}, XG.MorphMesh.prototype.getAnimationDuration = function(e) {
    var t = -1,
        r = this.animationsMap[e];
    return r && (t = r.duration), t
}, XG.MorphMesh.prototype.playAnimation = function(e) {
    var t = this.animationsMap[e];
    t ? (t.time = 0, t.active = !0) : console.warn("animation[" + e + "] undefined")
}, XG.MorphMesh.prototype.stopAnimation = function(e) {
    var t = this.animationsMap[e];
    t && (t.active = !1)
}, XG.MorphMesh.prototype.update = function(e) {
    for (var t = 0, r = this.animationsList.length; r > t; t++) {
        var a = this.animationsList[t];
        if (a.active) {
            var i = a.duration / a.length;
            a.time += a.direction * e, a.mirroredLoop ? (a.time > a.duration || a.time < 0) && (a.direction *= -1, a.time > a.duration && (a.time = a.duration, a.directionBackwards = !0), a.time < 0 && (a.time = 0, a.directionBackwards = !1)) : (a.time = a.time % a.duration, a.time < 0 && (a.time += a.duration));
            var o = a.startFrame + XG.Math.clamp(Math.floor(a.time / i), 0, a.length - 1),
                n = a.weight;
            o !== a.currentFrame && (this.morphTargetInfluences[a.lastFrame] = 0, this.morphTargetInfluences[a.currentFrame] = 1 * n, this.morphTargetInfluences[o] = 0, a.lastFrame = a.currentFrame, a.currentFrame = o);
            var s = a.time % i / i;
            a.directionBackwards && (s = 1 - s), this.morphTargetInfluences[a.currentFrame] = s * n, this.morphTargetInfluences[a.lastFrame] = (1 - s) * n
        }
    }
}, XG.MD2Character = function() {
    function e(e, t) {
        for (var a = [], i = 0; i < t.length; i++) a[i] = XG.ImageUtils.loadTexture(e + t[i], r), a[i].name = t[i];
        return a
    }

    function t(e, t) {
        var r = (XG.ImageUtils.generateDataTexture(1, 1, new XG.Color(16777215)), new XG.PhongMaterial({
            color: 16777215,
            specular: 1118481,
            shininess: 50,
            map: t,
            morphTargets: !0,
            morphNormals: !0,
            metal: !0
        }));
        r.wrapAround = !0;
        for (var a = [], o = 0, n = e.length; n > o; o++) a[o] = r;
        var s = new XG.MorphMesh(e, a);
        return s.rotation.setY(-Math.PI / 2), s.autoCreateAnimations(i.animationFPS), s
    }

    function r() {
        i.loadCounter -= 1, 0 === i.loadCounter && i.onLoadComplete()
    }

    function a(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
    }
    var i = this;
    this.scale = 1, this.animationFPS = 6, this.transitionFrames = 15, this.maxSpeed = 275, this.maxReverseSpeed = -275, this.frontAcceleration = 600, this.backAcceleration = 600, this.frontDecceleration = 600, this.angularSpeed = 2.5, this.root = new XG.Node, this.meshBody = null, this.meshWeapon = null, this.controls = null, this.skinsBody = [], this.skinsWeapon = [], this.weapons = [], this.currentSkin = void 0, this.onLoadComplete = function() {}, this.meshes = [], this.animations = {}, this.loadCounter = 0, this.speed = 0, this.bodyOrientation = 0, this.walkSpeed = this.maxSpeed, this.crouchSpeed = .5 * this.maxSpeed, this.activeAnimation = null, this.oldAnimation = null, this.enableShadows = function(e) {
        for (var t = 0; t < this.meshes.length; t++) this.meshes[t].castShadow = e, this.meshes[t].receiveShadow = e
    }, this.setVisible = function(e) {
        for (var t = 0; t < this.meshes.length; t++) this.meshes[t].visible = e, this.meshes[t].visible = e
    }, this.shareParts = function(e) {
        this.animations = e.animations, this.walkSpeed = e.walkSpeed, this.crouchSpeed = e.crouchSpeed, this.skinsBody = e.skinsBody, this.skinsWeapon = e.skinsWeapon;
        var r = t(e.meshBody.geometries, this.skinsBody[0]);
        r.scale.set(this.scale, this.scale, this.scale), this.root.position.data[1] = e.root.position.data[1], this.root.add(r), this.meshBody = r, this.meshes.push(r);
        for (var a = 0; a < e.weapons.length; a++) {
            var i = t(e.weapons[a].geometries, this.skinsWeapon[a]);
            i.scale.set(this.scale, this.scale, this.scale), i.visible = !1, i.name = e.weapons[a].name, this.root.add(i), this.weapons[a] = i, this.meshWeapon = i, this.meshes.push(i)
        }
    }, this.loadParts = function(a) {
        this.animations = a.animations, this.walkSpeed = a.walkSpeed, this.crouchSpeed = a.crouchSpeed, this.loadCounter = 2 * a.weapons.length + a.skins.length + 1;
        for (var o = [], n = 0; n < a.weapons.length; n++) o[n] = a.weapons[n][1];
        this.skinsBody = e(a.baseUrl + "skins/", a.skins), this.skinsWeapon = e(a.baseUrl + "skins/", o);
        var s = new XG.JSONLoader;
        s.load(a.baseUrl + a.body, function(e) {
            for (var a = 0, o = e.length; o > a; a++) {
                var n = e[a];
                n.computeBoundingBox()
            }
            i.root.position.data[1] = -i.scale * n.boundingBox.min.data[1];
            var s = t(n, i.skinsBody[0]);
            s.scale.multiplyScalar(i.scale), i.root.add(s), i.meshBody = s, i.meshes.push(s), r()
        });
        for (var l = function(e, a) {
                return function(o) {
                    var n = t(o, i.skinsWeapon[e]);
                    n.scale.set(i.scale, i.scale, i.scale), n.visible = !1, n.name = a, i.root.add(n), i.weapons[e] = n, i.meshWeapon = n, i.meshes.push(n), r()
                }
            }, n = 0; n < a.weapons.length; n++) s.load(a.baseUrl + a.weapons[n][0], l(n, a.weapons[n][0]))
    }, this.setPlaybackRate = function(e) {
        this.meshBody && (this.meshBody.duration = this.meshBody.baseDuration / e), this.meshWeapon && (this.meshWeapon.duration = this.meshWeapon.baseDuration / e)
    }, this.setSkin = function(e) {
        if (this.meshBody) {
            for (var t = 0, r = this.meshBody.materials.length; r > t; t++) {
                var a = this.meshBody.materials[t];
                a.map = this.skinsBody[e]
            }
            this.currentSkin = e
        }
    }, this.setWeapon = function(e) {
        for (var t = 0; t < this.weapons.length; t++) this.weapons[t].visible = !1;
        var r = this.weapons[e];
        r && (r.visible = !0, this.meshWeapon = r, this.activeAnimation && (r.playAnimation(this.activeAnimation), this.meshWeapon.setAnimationTime(this.activeAnimation, this.meshBody.getAnimationTime(this.activeAnimation))))
    }, this.setAnimation = function(e) {
        e !== this.activeAnimation && e && (this.meshBody && (this.meshBody.setAnimationWeight(e, 0), this.meshBody.playAnimation(e), this.oldAnimation = this.activeAnimation, this.activeAnimation = e, this.blendCounter = this.transitionFrames), this.meshWeapon && (this.meshWeapon.setAnimationWeight(e, 0), this.meshWeapon.playAnimation(e)))
    }, this.update = function(e) {
        this.controls && this.updateMovementModel(e), this.animations && (this.updateBehaviors(e), this.updateAnimations(e))
    }, this.updateAnimations = function(e) {
        var t = 1;
        this.blendCounter > 0 && (t = (this.transitionFrames - this.blendCounter) / this.transitionFrames, this.blendCounter -= 1), this.meshBody && (this.meshBody.update(e), this.meshBody.setAnimationWeight(this.activeAnimation, t), this.meshBody.setAnimationWeight(this.oldAnimation, 1 - t)), this.meshWeapon && (this.meshWeapon.update(e), this.meshWeapon.setAnimationWeight(this.activeAnimation, t), this.meshWeapon.setAnimationWeight(this.oldAnimation, 1 - t))
    }, this.updateBehaviors = function() {
        var e, t, r = this.controls,
            a = this.animations;
        r.crouch ? (e = a.crouchMove, t = a.crouchIdle) : (e = a.move, t = a.idle), r.jump && (e = a.jump, t = a.jump), r.attack && (r.crouch ? (e = a.crouchAttack, t = a.crouchAttack) : (e = a.attack, t = a.attack)), (r.moveForward || r.moveBackward || r.moveLeft || r.moveRight) && this.activeAnimation !== e && this.setAnimation(e), Math.abs(this.speed) < .2 * this.maxSpeed && !(r.moveLeft || r.moveRight || r.moveForward || r.moveBackward) && this.activeAnimation !== t && this.setAnimation(t), r.moveForward && (this.meshBody && (this.meshBody.setAnimationDirectionForward(this.activeAnimation), this.meshBody.setAnimationDirectionForward(this.oldAnimation)), this.meshWeapon && (this.meshWeapon.setAnimationDirectionForward(this.activeAnimation), this.meshWeapon.setAnimationDirectionForward(this.oldAnimation))), r.moveBackward && (this.meshBody && (this.meshBody.setAnimationDirectionBackward(this.activeAnimation), this.meshBody.setAnimationDirectionBackward(this.oldAnimation)), this.meshWeapon && (this.meshWeapon.setAnimationDirectionBackward(this.activeAnimation), this.meshWeapon.setAnimationDirectionBackward(this.oldAnimation)))
    }, this.updateMovementModel = function(e) {
        var t = this.controls;
        this.maxSpeed = t.crouch ? this.crouchSpeed : this.walkSpeed, this.maxReverseSpeed = -this.maxSpeed, t.moveForward && (this.speed = XG.Math.clamp(this.speed + e * this.frontAcceleration, this.maxReverseSpeed, this.maxSpeed)), t.moveBackward && (this.speed = XG.Math.clamp(this.speed - e * this.backAcceleration, this.maxReverseSpeed, this.maxSpeed));
        var r = 1;
        if (t.moveLeft && (this.bodyOrientation += e * this.angularSpeed, this.speed = XG.Math.clamp(this.speed + r * e * this.frontAcceleration, this.maxReverseSpeed, this.maxSpeed)), t.moveRight && (this.bodyOrientation -= e * this.angularSpeed, this.speed = XG.Math.clamp(this.speed + r * e * this.frontAcceleration, this.maxReverseSpeed, this.maxSpeed)), !t.moveForward && !t.moveBackward)
            if (this.speed > 0) {
                var i = a(this.speed / this.maxSpeed);
                this.speed = XG.Math.clamp(this.speed - i * e * this.frontDecceleration, 0, this.maxSpeed)
            } else {
                var i = a(this.speed / this.maxReverseSpeed);
                this.speed = XG.Math.clamp(this.speed + i * e * this.backAcceleration, this.maxReverseSpeed, 0)
            }
        var o = this.speed * e;
        this.root.position.data[0] += Math.sin(this.bodyOrientation) * o, this.root.position.data[2] += Math.cos(this.bodyOrientation) * o, this.root.rotation.data[1] = this.bodyOrientation
    }
}, XG.SkinnedCharacter = function(e) {
    function t(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
    }
    this.config = e, this.transitionFrames = 15, this.controls = null, this.root = new XG.Node, this.meshes = [], this.animations = {}, this.speed = 0, this.bodyOrientation = 0, this.activeAnimation = null, this.oldAnimation = null, this.animations = e.animations, this.walkSpeed = void 0 !== e.walkSpeed ? e.walkSpeed : 275, this.crouchSpeed = void 0 !== e.crouchSpeed ? e.crouchSpeed : 137.5, this.angularSpeed = void 0 !== e.angularSpeed ? e.angularSpeed : 2.5, this.frontAcceleration = void 0 !== e.frontAcceleration ? e.frontAcceleration : 600, this.frontDecceleration = void 0 !== e.frontDecceleration ? e.frontDecceleration : 600, this.backAcceleration = void 0 !== e.backAcceleration ? e.backAcceleration : 600, this.maxSpeed = this.walkSpeed, this.maxReverseSpeed = -this.maxSpeed, this.addMesh = function(e) {
        this.root.add(e), this.meshes.push(e)
    }, this.enableShadows = function(e) {
        for (var t = 0; t < this.meshes.length; t++) {
            var r = this.meshes[t];
            r.castShadow = e, r.receiveShadow = e
        }
    }, this.setVisible = function(e) {
        for (var t = 0; t < this.meshes.length; t++) {
            var r = this.meshes[t];
            r.visible = e, r.visible = e
        }
    }, this.setAnimation = function(e) {
        if (e !== this.activeAnimation && e)
            for (var t = 0, r = this.meshes.length; r > t; t++) {
                var a = this.meshes[t];
                a.setAnimationWeight(e, 0), a.playAnimation(e), this.oldAnimation = this.activeAnimation, this.activeAnimation = e, this.blendCounter = this.transitionFrames
            }
    }, this.update = function(e) {
        this.controls && this.updateMovementModel(e), this.animations && (this.updateBehaviors(e), this.updateAnimations(e))
    }, this.updateAnimations = function(e) {
        var t = 1;
        this.blendCounter > 0 && (t = (this.transitionFrames - this.blendCounter) / this.transitionFrames, this.blendCounter -= 1);
        for (var r = 0, a = this.meshes.length; a > r; r++) {
            var i = this.meshes[r];
            i.setAnimationWeight(this.activeAnimation, t), i.setAnimationWeight(this.oldAnimation, 1 - t), i.update(e)
        }
    }, this.updateBehaviors = function() {
        var e, t, r = this.controls,
            a = this.animations;
        if (r.crouch ? (e = a.crouchMove, t = a.crouchIdle) : (e = a.move, t = a.idle), r.jump && (e = a.jump, t = a.jump), r.attack && (r.crouch ? (e = a.crouchAttack, t = a.crouchAttack) : (e = a.attack, t = a.attack)), (r.moveForward || r.moveBackward || r.moveLeft || r.moveRight) && this.activeAnimation !== e && this.setAnimation(e), Math.abs(this.speed) < .2 * this.maxSpeed && !(r.moveLeft || r.moveRight || r.moveForward || r.moveBackward) && this.activeAnimation !== t && this.setAnimation(t), r.moveForward)
            for (var i = 0, o = this.meshes.length; o > i; i++) {
                var n = this.meshes[i];
                n.setAnimationDirectionForward(this.activeAnimation), n.setAnimationDirectionForward(this.oldAnimation)
            }
        if (r.moveBackward)
            for (var i = 0, o = this.meshes.length; o > i; i++) {
                var n = this.meshes[i];
                n.setAnimationDirectionBackward(this.activeAnimation), n.setAnimationDirectionBackward(this.oldAnimation)
            }
    }, this.updateMovementModel = function(e) {
        var r = this.controls;
        this.maxSpeed = r.crouch ? this.crouchSpeed : this.walkSpeed, this.maxReverseSpeed = -this.maxSpeed, r.moveForward && (this.speed = XG.Math.clamp(this.speed + e * this.frontAcceleration, this.maxReverseSpeed, this.maxSpeed)), r.moveBackward && (this.speed = XG.Math.clamp(this.speed - e * this.backAcceleration, this.maxReverseSpeed, this.maxSpeed));
        var a = 1;
        if (r.moveLeft && (this.bodyOrientation += e * this.angularSpeed, this.speed = XG.Math.clamp(this.speed + a * e * this.frontAcceleration, this.maxReverseSpeed, this.maxSpeed)), r.moveRight && (this.bodyOrientation -= e * this.angularSpeed, this.speed = XG.Math.clamp(this.speed + a * e * this.frontAcceleration, this.maxReverseSpeed, this.maxSpeed)), !r.moveForward && !r.moveBackward)
            if (this.speed > 0) {
                var i = t(this.speed / this.maxSpeed);
                this.speed = XG.Math.clamp(this.speed - i * e * this.frontDecceleration, 0, this.maxSpeed)
            } else {
                var i = t(this.speed / this.maxReverseSpeed);
                this.speed = XG.Math.clamp(this.speed + i * e * this.backAcceleration, this.maxReverseSpeed, 0)
            }
        var o = this.speed * e;
        this.root.position.data[0] += Math.sin(this.bodyOrientation) * o, this.root.position.data[2] += Math.cos(this.bodyOrientation) * o, this.root.rotation.data[1] = this.bodyOrientation
    }
}, XG.SkinnedMesh = function(e, t, r) {
    XG.Mesh.call(this, e, t), this.useVertexTexture = void 0 !== r ? r : !0, this.animations = {}, this.animationsList = [], this.identityMatrix = new XG.Matrix4, this.bones = [], this.boneMatrices = [];
    var a = this.geometries[0];
    if (a) {
        var i = a.bones,
            o = a.animations;
        if (i) {
            var n, s, l, h, d, u;
            for (n = 0; n < i.length; n++) l = i[n], h = l.pos, d = l.rotq, u = l.scl, s = this.addBone(), s.name = l.name, s.position.set(h[0], h[1], h[2]), s.quaternion.set(d[0], d[1], d[2], d[3]), s.useQuaternion = !0, void 0 !== u ? s.scale.set(u[0], u[1], u[2]) : s.scale.set(1, 1, 1);
            for (n = 0; n < this.bones.length; n++) l = i[n], s = this.bones[n], -1 === l.parent ? this.add(s) : this.bones[l.parent].add(s);
            var c = this.bones.length;
            if (this.useVertexTexture) {
                var f;
                f = c > 256 ? 64 : c > 64 ? 32 : c > 16 ? 16 : 8, this.boneTextureWidth = f, this.boneTextureHeight = f, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new XG.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, XG.RGBAFormat, XG.FloatType), this.boneTexture.minFilter = XG.NearestFilter, this.boneTexture.magFilter = XG.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1
            } else this.boneMatrices = new Float32Array(16 * c);
            this.pose()
        }
        if (o)
            for (var p = 0, m = o.length; m > p; p++) {
                var v = o[p],
                    g = new XG.Animation(this, v);
                this.animations[v.name] = g, this.animationsList.push(g)
            }
    }
}, XG.SkinnedMesh.prototype = Object.create(XG.Mesh.prototype), XG.SkinnedMesh.prototype.playAnimation = function(e) {
    void 0 !== this.animations[e] && this.animations[e].play()
}, XG.SkinnedMesh.prototype.setAnimationWeight = function(e, t) {
    void 0 !== this.animations[e] && this.animations[e].setWeight(t)
}, XG.SkinnedMesh.prototype.setAnimationDirectionForward = function(e) {
    void 0 !== this.animations[e] && this.animations[e].setDirectionForward()
}, XG.SkinnedMesh.prototype.setAnimationDirectionBackward = function(e) {
    void 0 !== this.animations[e] && this.animations[e].setDirectionBackward()
}, XG.SkinnedMesh.prototype.update = function(e) {
    for (var t = this.bones, r = 0, a = t.length; a > r; r++) {
        var i = t[r];
        i.firstAnimationFlag = !0
    }
    for (var r = 0, a = this.animationsList.length; a > r; r++) {
        var o = this.animationsList[r];
        o.update(e)
    }
}, XG.SkinnedMesh.prototype.addBone = function(e) {
    return void 0 === e && (e = new XG.Bone(this)), this.bones.push(e), e
}, XG.SkinnedMesh.prototype.updateMatrixWorld = function(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent ? this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    for (var t = 0, r = this.children.length; r > t; t++) {
        var a = this.children[t];
        a instanceof XG.Bone ? a.update(this.identityMatrix, !1) : a.updateMatrixWorld(!0)
    }
    if (void 0 == this.boneInverses) {
        this.boneInverses = [];
        for (var i = 0, o = this.bones.length; o > i; i++) {
            var n = new XG.Matrix4;
            n.getInverse(this.bones[i].skinMatrix), this.boneInverses.push(n)
        }
    }
    for (var i = 0, o = this.bones.length; o > i; i++) XG.SkinnedMesh.offsetMatrix.multiply(this.bones[i].skinMatrix, this.boneInverses[i]), XG.SkinnedMesh.offsetMatrix.flattenToArrayOffset(this.boneMatrices, 16 * i);
    this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
}, XG.SkinnedMesh.prototype.pose = function() {
    this.updateMatrixWorld(!0);
    for (var e, t, r, a, i, o = 0, n = this.geometries.length; n > o; o++)
        for (var s = this.geometries[o], l = s.attributes.skinWeight.array, h = 0, d = l.length; d > h; h += 4) e = l[h], t = l[h + 1], r = l[h + 2], a = l[h + 3], i = 1 / (Math.abs(e) + Math.abs(t) + Math.abs(r) + Math.abs(a)), 1 / 0 !== i ? (l[h] *= i, l[h + 1] *= i, l[h + 2] *= i, l[h + 3] *= i) : l[h] = 1
}, XG.SkinnedMesh.prototype.clone = function(e) {
    return void 0 === e && (e = new XG.SkinnedMesh(this.geometries, this.materials, this.useVertexTexture)), XG.Mesh.prototype.clone.call(this, e), e
}, XG.SkinnedMesh.offsetMatrix = new XG.Matrix4, XG.TriangleStrip = function(e, t) {
    XG.Mesh.call(this, e, t)
}, XG.TriangleStrip.prototype = Object.create(XG.Mesh.prototype), XG.TriangleStrip.prototype.clone = function(e) {
    return void 0 === e && (e = new XG.TriangleStrip(this.geometries, this.materials)), XG.Mesh.prototype.clone.call(this, e), e
}, XG.Particles = function(e, t) {
    XG.Node.call(this), this.geometries = e instanceof Array ? e : e instanceof XG.Geometry ? [e] : [], this.materials = t instanceof Array ? t : t instanceof XG.Material ? [t] : [];
    for (var r = 0, a = this.geometries.length; a > r; r++) {
        var i = this.geometries[r];
        null === i.boundingSphere && i.computeBoundingSphere()
    }
    this.sortParticles = !1, this.frustumCulled = !1
}, XG.Particles.prototype = Object.create(XG.Node.prototype), XG.Particles.prototype.clone = function(e) {
    return void 0 === e && (e = new XG.Particles(this.geometries, this.materials)), e.sortParticles = this.sortParticles, e.frustumCulled = this.frustumCulled, XG.Node.prototype.clone.call(this, e), e
}, XG.ImmediateRenderObject = function() {
    XG.Node.call(this), this.boundingSphere = new XG.Sphere, this.render = function() {}
}, XG.ImmediateRenderObject.prototype = Object.create(XG.Node.prototype), XG.MarchingCubes = function(e, t, r, a) {
    XG.ImmediateRenderObject.call(this), this.materials = [t], this.boundingSphere.radius = 1, this.enableUvs = void 0 !== r ? r : !1, this.enableColors = void 0 !== a ? a : !1, this.init = function(e) {
        this.resolution = e, this.isolation = 80, this.size = e, this.size2 = this.size * this.size, this.size3 = this.size2 * this.size, this.halfsize = this.size / 2, this.delta = 2 / this.size, this.yd = this.size, this.zd = this.size2, this.field = new Float32Array(this.size3), this.normal_cache = new Float32Array(3 * this.size3), this.vlist = new Float32Array(36), this.nlist = new Float32Array(36), this.firstDraw = !0, this.maxCount = 4096, this.count = 0, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = new Float32Array(3 * this.maxCount), this.normalArray = new Float32Array(3 * this.maxCount), this.enableUvs && (this.uvArray = new Float32Array(2 * this.maxCount)), this.enableColors && (this.colorArray = new Float32Array(3 * this.maxCount))
    }, this.lerp = function(e, t, r) {
        return e + (t - e) * r
    }, this.VIntX = function(e, t, r, a, i, o, n, s, l, h) {
        var d = (i - l) / (h - l),
            u = this.normal_cache;
        t[a] = o + d * this.delta, t[a + 1] = n, t[a + 2] = s, r[a] = this.lerp(u[e], u[e + 3], d), r[a + 1] = this.lerp(u[e + 1], u[e + 4], d), r[a + 2] = this.lerp(u[e + 2], u[e + 5], d)
    }, this.VIntY = function(e, t, r, a, i, o, n, s, l, h) {
        var d = (i - l) / (h - l),
            u = this.normal_cache;
        t[a] = o, t[a + 1] = n + d * this.delta, t[a + 2] = s;
        var c = e + 3 * this.yd;
        r[a] = this.lerp(u[e], u[c], d), r[a + 1] = this.lerp(u[e + 1], u[c + 1], d), r[a + 2] = this.lerp(u[e + 2], u[c + 2], d)
    }, this.VIntZ = function(e, t, r, a, i, o, n, s, l, h) {
        var d = (i - l) / (h - l),
            u = this.normal_cache;
        t[a] = o, t[a + 1] = n, t[a + 2] = s + d * this.delta;
        var c = e + 3 * this.zd;
        r[a] = this.lerp(u[e], u[c], d), r[a + 1] = this.lerp(u[e + 1], u[c + 1], d), r[a + 2] = this.lerp(u[e + 2], u[c + 2], d)
    }, this.compNorm = function(e) {
        var t = 3 * e;
        0 === this.normal_cache[t] && (this.normal_cache[t] = this.field[e - 1] - this.field[e + 1], this.normal_cache[t + 1] = this.field[e - this.yd] - this.field[e + this.yd], this.normal_cache[t + 2] = this.field[e - this.zd] - this.field[e + this.zd])
    }, this.polygonize = function(e, t, r, a, i, o) {
        var n = a + 1,
            s = a + this.yd,
            l = a + this.zd,
            h = n + this.yd,
            d = n + this.zd,
            u = a + this.yd + this.zd,
            c = n + this.yd + this.zd,
            f = 0,
            p = this.field[a],
            m = this.field[n],
            v = this.field[s],
            g = this.field[h],
            S = this.field[l],
            x = this.field[d],
            G = this.field[u],
            M = this.field[c];
        i > p && (f |= 1), i > m && (f |= 2), i > v && (f |= 8), i > g && (f |= 4), i > S && (f |= 16), i > x && (f |= 32), i > G && (f |= 128), i > M && (f |= 64);
        var y = XG.edgeTable[f];
        if (0 === y) return 0;
        var w = this.delta,
            D = e + w,
            X = t + w,
            C = r + w;
        1 & y && (this.compNorm(a), this.compNorm(n), this.VIntX(3 * a, this.vlist, this.nlist, 0, i, e, t, r, p, m)), 2 & y && (this.compNorm(n), this.compNorm(h), this.VIntY(3 * n, this.vlist, this.nlist, 3, i, D, t, r, m, g)), 4 & y && (this.compNorm(s), this.compNorm(h), this.VIntX(3 * s, this.vlist, this.nlist, 6, i, e, X, r, v, g)), 8 & y && (this.compNorm(a), this.compNorm(s), this.VIntY(3 * a, this.vlist, this.nlist, 9, i, e, t, r, p, v)), 16 & y && (this.compNorm(l), this.compNorm(d), this.VIntX(3 * l, this.vlist, this.nlist, 12, i, e, t, C, S, x)), 32 & y && (this.compNorm(d), this.compNorm(c), this.VIntY(3 * d, this.vlist, this.nlist, 15, i, D, t, C, x, M)), 64 & y && (this.compNorm(u), this.compNorm(c), this.VIntX(3 * u, this.vlist, this.nlist, 18, i, e, X, C, G, M)), 128 & y && (this.compNorm(l), this.compNorm(u), this.VIntY(3 * l, this.vlist, this.nlist, 21, i, e, t, C, S, G)), 256 & y && (this.compNorm(a), this.compNorm(l), this.VIntZ(3 * a, this.vlist, this.nlist, 24, i, e, t, r, p, S)), 512 & y && (this.compNorm(n), this.compNorm(d), this.VIntZ(3 * n, this.vlist, this.nlist, 27, i, D, t, r, m, x)), 1024 & y && (this.compNorm(h), this.compNorm(c), this.VIntZ(3 * h, this.vlist, this.nlist, 30, i, D, X, r, g, M)), 2048 & y && (this.compNorm(s), this.compNorm(u), this.VIntZ(3 * s, this.vlist, this.nlist, 33, i, e, X, r, v, G)), f <<= 4;
        for (var A, _, T, b = 0, P = 0; - 1 != XG.triTable[f + P];) A = f + P, _ = A + 1, T = A + 2, this.posnormtriv(this.vlist, this.nlist, 3 * XG.triTable[A], 3 * XG.triTable[_], 3 * XG.triTable[T], o), P += 3, b++;
        return b
    }, this.posnormtriv = function(e, t, r, a, i, o) {
        var n = 3 * this.count;
        if (this.positionArray[n] = e[r], this.positionArray[n + 1] = e[r + 1], this.positionArray[n + 2] = e[r + 2], this.positionArray[n + 3] = e[a], this.positionArray[n + 4] = e[a + 1], this.positionArray[n + 5] = e[a + 2], this.positionArray[n + 6] = e[i], this.positionArray[n + 7] = e[i + 1], this.positionArray[n + 8] = e[i + 2], this.normalArray[n] = t[r], this.normalArray[n + 1] = t[r + 1], this.normalArray[n + 2] = t[r + 2], this.normalArray[n + 3] = t[a], this.normalArray[n + 4] = t[a + 1], this.normalArray[n + 5] = t[a + 2], this.normalArray[n + 6] = t[i], this.normalArray[n + 7] = t[i + 1], this.normalArray[n + 8] = t[i + 2], this.enableUvs) {
            var s = 2 * this.count;
            this.uvArray[s] = e[r], this.uvArray[s + 1] = e[r + 2], this.uvArray[s + 2] = e[a], this.uvArray[s + 3] = e[a + 2], this.uvArray[s + 4] = e[i], this.uvArray[s + 5] = e[i + 2]
        }
        this.enableColors && (this.colorArray[n] = e[r], this.colorArray[n + 1] = e[r + 1], this.colorArray[n + 2] = e[r + 2], this.colorArray[n + 3] = e[a], this.colorArray[n + 4] = e[a + 1], this.colorArray[n + 5] = e[a + 2], this.colorArray[n + 6] = e[i], this.colorArray[n + 7] = e[i + 1], this.colorArray[n + 8] = e[i + 2]), this.count += 3, this.count >= this.maxCount - 3 && (this.hasPositions = !0, this.hasNormals = !0, this.enableUvs && (this.hasUvs = !0), this.enableColors && (this.hasColors = !0), o(this))
    }, this.begin = function() {
        this.count = 0, this.hasPositions = !1, this.hasNormals = !1, this.hasUvs = !1, this.hasColors = !1
    }, this.end = function(e) {
        if (0 !== this.count) {
            for (var t = 3 * this.count; t < this.positionArray.length; t++) this.positionArray[t] = 0;
            this.hasPositions = !0, this.hasNormals = !0, this.enableUvs && (this.hasUvs = !0), this.enableColors && (this.hasColors = !0), e(this)
        }
    }, this.addBall = function(e, t, r, a, i) {
        var o = this.size * Math.sqrt(a / i),
            n = r * this.size,
            s = t * this.size,
            l = e * this.size,
            h = Math.floor(n - o);
        1 > h && (h = 1);
        var d = Math.floor(n + o);
        d > this.size - 1 && (d = this.size - 1);
        var u = Math.floor(s - o);
        1 > u && (u = 1);
        var c = Math.floor(s + o);
        c > this.size - 1 && (c = this.size - 1);
        var f = Math.floor(l - o);
        1 > f && (f = 1);
        var p = Math.floor(l + o);
        p > this.size - 1 && (p = this.size - 1);
        var m, v, g, S, x, G, M, y, w, D, X;
        for (g = h; d > g; g++)
            for (x = this.size2 * g, y = g / this.size - r, w = y * y, v = u; c > v; v++)
                for (S = x + this.size * v, M = v / this.size - t, D = M * M, m = f; p > m; m++) G = m / this.size - e, X = a / (1e-6 + G * G + D + w) - i, X > 0 && (this.field[S + m] += X)
    }, this.addPlaneX = function(e, t) {
        var r, a, i, o, n, s, l, h = this.size,
            d = this.yd,
            u = this.zd,
            c = this.field,
            f = h * Math.sqrt(e / t);
        for (f > h && (f = h), r = 0; f > r; r++)
            if (s = r / h, o = s * s, n = e / (1e-4 + o) - t, n > 0)
                for (a = 0; h > a; a++)
                    for (l = r + a * d, i = 0; h > i; i++) c[u * i + l] += n
    }, this.addPlaneY = function(e, t) {
        var r, a, i, o, n, s, l, h, d = this.size,
            u = this.yd,
            c = this.zd,
            f = this.field,
            p = d * Math.sqrt(e / t);
        for (p > d && (p = d), a = 0; p > a; a++)
            if (s = a / d, o = s * s, n = e / (1e-4 + o) - t, n > 0)
                for (l = a * u, r = 0; d > r; r++)
                    for (h = l + r, i = 0; d > i; i++) f[c * i + h] += n
    }, this.addPlaneZ = function(e, t) {
        var r, a, i, o, n, s, l, h, d = this.size,
            u = this.yd,
            c = this.zd,
            f = this.field,
            p = d * Math.sqrt(e / t);
        for (p > d && (p = d), i = 0; p > i; i++)
            if (s = i / d, o = s * s, n = e / (1e-4 + o) - t, n > 0)
                for (l = c * i, a = 0; d > a; a++)
                    for (h = l + a * u, r = 0; d > r; r++) f[h + r] += n
    }, this.reset = function() {
        var e;
        for (e = 0; e < this.size3; e++) this.normal_cache[3 * e] = 0, this.field[e] = 0
    }, this.render = function(e) {
        this.begin();
        var t, r, a, i, o, n, s, l, h, d = this.size - 2;
        for (i = 1; d > i; i++)
            for (h = this.size2 * i, s = (i - this.halfsize) / this.halfsize, a = 1; d > a; a++)
                for (l = h + this.size * a, n = (a - this.halfsize) / this.halfsize, r = 1; d > r; r++) o = (r - this.halfsize) / this.halfsize, t = l + r, this.polygonize(o, n, s, t, this.isolation, e);
        this.end(e)
    }, this.init(e)
}, XG.MarchingCubes.prototype = Object.create(XG.ImmediateRenderObject.prototype), XG.edgeTable = new Int32Array([0, 265, 515, 778, 1030, 1295, 1541, 1804, 2060, 2309, 2575, 2822, 3082, 3331, 3593, 3840, 400, 153, 915, 666, 1430, 1183, 1941, 1692, 2460, 2197, 2975, 2710, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 1590, 1855, 1077, 1340, 2620, 2869, 2111, 2358, 3642, 3891, 3129, 3376, 928, 681, 419, 170, 1958, 1711, 1445, 1196, 2988, 2725, 2479, 2214, 4010, 3747, 3497, 3232, 1120, 1385, 1635, 1898, 102, 367, 613, 876, 3180, 3429, 3695, 3942, 2154, 2403, 2665, 2912, 1520, 1273, 2035, 1786, 502, 255, 1013, 764, 3580, 3317, 4095, 3830, 2554, 2291, 3065, 2800, 1616, 1881, 1107, 1370, 598, 863, 85, 348, 3676, 3925, 3167, 3414, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 966, 719, 453, 204, 4044, 3781, 3535, 3270, 3018, 2755, 2505, 2240, 2240, 2505, 2755, 3018, 3270, 3535, 3781, 4044, 204, 453, 719, 966, 1226, 1475, 1737, 1984, 2384, 2137, 2899, 2650, 3414, 3167, 3925, 3676, 348, 85, 863, 598, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 3830, 4095, 3317, 3580, 764, 1013, 255, 502, 1786, 2035, 1273, 1520, 2912, 2665, 2403, 2154, 3942, 3695, 3429, 3180, 876, 613, 367, 102, 1898, 1635, 1385, 1120, 3232, 3497, 3747, 4010, 2214, 2479, 2725, 2988, 1196, 1445, 1711, 1958, 170, 419, 681, 928, 3376, 3129, 3891, 3642, 2358, 2111, 2869, 2620, 1340, 1077, 1855, 1590, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 2710, 2975, 2197, 2460, 1692, 1941, 1183, 1430, 666, 915, 153, 400, 3840, 3593, 3331, 3082, 2822, 2575, 2309, 2060, 1804, 1541, 1295, 1030, 778, 515, 265, 0]), XG.triTable = new Int32Array([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 9, 8, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 0, 2, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 8, 3, 2, 10, 8, 10, 9, 8, -1, -1, -1, -1, -1, -1, -1, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 8, 11, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 11, 2, 1, 9, 11, 9, 8, 11, -1, -1, -1, -1, -1, -1, -1, 3, 10, 1, 11, 10, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 10, 1, 0, 8, 10, 8, 11, 10, -1, -1, -1, -1, -1, -1, -1, 3, 9, 0, 3, 11, 9, 11, 10, 9, -1, -1, -1, -1, -1, -1, -1, 9, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 7, 3, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 1, 9, 4, 7, 1, 7, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 4, 7, 3, 0, 4, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 9, 0, 2, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4, -1, -1, -1, -1, 8, 4, 7, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 4, 7, 11, 2, 4, 2, 0, 4, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 8, 4, 7, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1, -1, -1, -1, -1, 3, 10, 1, 3, 11, 10, 7, 8, 4, -1, -1, -1, -1, -1, -1, -1, 1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4, -1, -1, -1, -1, 4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3, -1, -1, -1, -1, 4, 7, 11, 4, 11, 9, 9, 11, 10, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 1, 5, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 5, 4, 8, 3, 5, 3, 1, 5, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 10, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 5, 2, 10, 5, 4, 2, 4, 0, 2, -1, -1, -1, -1, -1, -1, -1, 2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8, -1, -1, -1, -1, 9, 5, 4, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 0, 8, 11, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 0, 1, 5, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5, -1, -1, -1, -1, 10, 3, 11, 10, 1, 3, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10, -1, -1, -1, -1, 5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3, -1, -1, -1, -1, 5, 4, 8, 5, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 5, 7, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 3, 0, 9, 5, 3, 5, 7, 3, -1, -1, -1, -1, -1, -1, -1, 0, 7, 8, 0, 1, 7, 1, 5, 7, -1, -1, -1, -1, -1, -1, -1, 1, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 9, 5, 7, 10, 1, 2, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3, -1, -1, -1, -1, 8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2, -1, -1, -1, -1, 2, 10, 5, 2, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, 7, 9, 5, 7, 8, 9, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, 9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11, -1, -1, -1, -1, 2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7, -1, -1, -1, -1, 11, 2, 1, 11, 1, 7, 7, 1, 5, -1, -1, -1, -1, -1, -1, -1, 9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11, -1, -1, -1, -1, 5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0, -1, 11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0, -1, 11, 10, 5, 7, 11, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 1, 9, 8, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 2, 6, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 1, 2, 6, 3, 0, 8, -1, -1, -1, -1, -1, -1, -1, 9, 6, 5, 9, 0, 6, 0, 2, 6, -1, -1, -1, -1, -1, -1, -1, 5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8, -1, -1, -1, -1, 2, 3, 11, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 0, 8, 11, 2, 0, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11, -1, -1, -1, -1, 6, 3, 11, 6, 5, 3, 5, 1, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6, -1, -1, -1, -1, 3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9, -1, -1, -1, -1, 6, 5, 9, 6, 9, 11, 11, 9, 8, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 4, 7, 3, 6, 5, 10, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 5, 10, 6, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4, -1, -1, -1, -1, 6, 1, 2, 6, 5, 1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, 1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7, -1, -1, -1, -1, 8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6, -1, -1, -1, -1, 7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9, -1, 3, 11, 2, 7, 8, 4, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11, -1, -1, -1, -1, 0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, 9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6, -1, 8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6, -1, -1, -1, -1, 5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11, -1, 0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7, -1, 6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9, -1, -1, -1, -1, 10, 4, 9, 6, 4, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 10, 6, 4, 9, 10, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, 10, 0, 1, 10, 6, 0, 6, 4, 0, -1, -1, -1, -1, -1, -1, -1, 8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10, -1, -1, -1, -1, 1, 4, 9, 1, 2, 4, 2, 6, 4, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4, -1, -1, -1, -1, 0, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 3, 2, 8, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, 10, 4, 9, 10, 6, 4, 11, 2, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6, -1, -1, -1, -1, 3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10, -1, -1, -1, -1, 6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1, -1, 9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3, -1, -1, -1, -1, 8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1, -1, 3, 11, 6, 3, 6, 0, 0, 6, 4, -1, -1, -1, -1, -1, -1, -1, 6, 4, 8, 11, 6, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 10, 6, 7, 8, 10, 8, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10, -1, -1, -1, -1, 10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0, -1, -1, -1, -1, 10, 6, 7, 10, 7, 1, 1, 7, 3, -1, -1, -1, -1, -1, -1, -1, 1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9, -1, 7, 8, 0, 7, 0, 6, 6, 0, 2, -1, -1, -1, -1, -1, -1, -1, 7, 3, 2, 6, 7, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7, -1, 1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11, -1, 11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1, -1, -1, -1, -1, 8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6, -1, 0, 9, 1, 11, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0, -1, -1, -1, -1, 7, 11, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 1, 9, 8, 3, 1, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 8, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 2, 9, 0, 2, 10, 9, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8, -1, -1, -1, -1, 7, 2, 3, 6, 2, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 0, 8, 7, 6, 0, 6, 2, 0, -1, -1, -1, -1, -1, -1, -1, 2, 7, 6, 2, 3, 7, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, 1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6, -1, -1, -1, -1, 10, 7, 6, 10, 1, 7, 1, 3, 7, -1, -1, -1, -1, -1, -1, -1, 10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8, -1, -1, -1, -1, 0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7, -1, -1, -1, -1, 7, 6, 10, 7, 10, 8, 8, 10, 9, -1, -1, -1, -1, -1, -1, -1, 6, 8, 4, 11, 8, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 3, 0, 6, 0, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 6, 11, 8, 4, 6, 9, 0, 1, -1, -1, -1, -1, -1, -1, -1, 9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6, -1, -1, -1, -1, 6, 8, 4, 6, 11, 8, 2, 10, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6, -1, -1, -1, -1, 4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9, -1, -1, -1, -1, 10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3, -1, 8, 2, 3, 8, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, 0, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8, -1, -1, -1, -1, 1, 9, 4, 1, 4, 2, 2, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1, -1, -1, -1, -1, 10, 1, 0, 10, 0, 6, 6, 0, 4, -1, -1, -1, -1, -1, -1, -1, 4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3, -1, 10, 9, 4, 6, 10, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 5, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 5, 0, 1, 5, 4, 0, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5, -1, -1, -1, -1, 9, 5, 4, 10, 1, 2, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5, -1, -1, -1, -1, 7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2, -1, -1, -1, -1, 3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6, -1, 7, 2, 3, 7, 6, 2, 5, 4, 9, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7, -1, -1, -1, -1, 3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0, -1, -1, -1, -1, 6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8, -1, 9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7, -1, -1, -1, -1, 1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4, -1, 4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10, -1, 7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10, -1, -1, -1, -1, 6, 9, 5, 6, 11, 9, 11, 8, 9, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5, -1, -1, -1, -1, 0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11, -1, -1, -1, -1, 6, 11, 3, 6, 3, 5, 5, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6, -1, -1, -1, -1, 0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10, -1, 11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5, -1, 6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3, -1, -1, -1, -1, 5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2, -1, -1, -1, -1, 9, 5, 6, 9, 6, 0, 0, 6, 2, -1, -1, -1, -1, -1, -1, -1, 1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8, -1, 1, 5, 6, 2, 1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6, -1, 10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0, -1, -1, -1, -1, 0, 3, 8, 5, 6, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 7, 5, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 11, 7, 5, 8, 3, 0, -1, -1, -1, -1, -1, -1, -1, 5, 11, 7, 5, 10, 11, 1, 9, 0, -1, -1, -1, -1, -1, -1, -1, 10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1, -1, -1, -1, -1, 11, 1, 2, 11, 7, 1, 7, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11, -1, -1, -1, -1, 9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7, -1, -1, -1, -1, 7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2, -1, 2, 5, 10, 2, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, 8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5, -1, -1, -1, -1, 9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2, -1, -1, -1, -1, 9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2, -1, 1, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 7, 0, 7, 1, 1, 7, 5, -1, -1, -1, -1, -1, -1, -1, 9, 0, 3, 9, 3, 5, 5, 3, 7, -1, -1, -1, -1, -1, -1, -1, 9, 8, 7, 5, 9, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 8, 4, 5, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, 5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0, -1, -1, -1, -1, 0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5, -1, -1, -1, -1, 10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4, -1, 2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8, -1, -1, -1, -1, 0, 4, 11, 0, 11, 3, 4, 5, 11, 2, 11, 1, 5, 1, 11, -1, 0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5, -1, 9, 4, 5, 2, 11, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4, -1, -1, -1, -1, 5, 10, 2, 5, 2, 4, 4, 2, 0, -1, -1, -1, -1, -1, -1, -1, 3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9, -1, 5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 3, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 4, 5, 1, 0, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5, -1, -1, -1, -1, 9, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 11, 7, 4, 9, 11, 9, 10, 11, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11, -1, -1, -1, -1, 1, 10, 11, 1, 11, 4, 1, 4, 0, 7, 4, 11, -1, -1, -1, -1, 3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4, -1, 4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2, -1, -1, -1, -1, 9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3, -1, 11, 7, 4, 11, 4, 2, 2, 4, 0, -1, -1, -1, -1, -1, -1, -1, 11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4, -1, -1, -1, -1, 2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9, -1, -1, -1, -1, 9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7, -1, 3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10, -1, 1, 10, 2, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 7, 1, 3, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1, -1, -1, -1, -1, 4, 0, 3, 7, 4, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 8, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 11, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 1, 10, 0, 10, 8, 8, 10, 11, -1, -1, -1, -1, -1, -1, -1, 3, 1, 10, 11, 3, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 11, 1, 11, 9, 9, 11, 8, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9, -1, -1, -1, -1, 0, 2, 11, 8, 0, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 2, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 10, 8, 9, -1, -1, -1, -1, -1, -1, -1, 9, 10, 2, 0, 9, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8, -1, -1, -1, -1, 1, 10, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 3, 8, 9, 1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 9, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 3, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]), XG.Camera = function() {
    XG.Node.call(this), this.matrixWorldInverse = new XG.Matrix4, this.projectionMatrix = new XG.Matrix4, this.projectionMatrixInverse = new XG.Matrix4
}, XG.Camera.prototype = Object.create(XG.Node.prototype), XG.Camera.prototype.lookAt = function(e) {
    this.matrix.lookAt(this.position, e, this.up), this.rotationAutoUpdate === !0 && (this.useQuaternion === !1 ? this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder) : this.quaternion.copy(this.matrix.decompose()[1]))
}, XG.Camera.prototype.clone = function(e) {
    return void 0 === e && (e = new XG.Camera), XG.Node.prototype.clone.call(this, e), e.matrixWorldInverse.copy(this.matrixWorldInverse), e.projectionMatrix.copy(this.projectionMatrix), e.projectionMatrixInverse.copy(this.projectionMatrixInverse), e
}, XG.OrthographicCamera = function(e, t, r, a, i, o) {
    XG.Camera.call(this), this.left = e, this.right = t, this.top = r, this.bottom = a, this.near = void 0 !== i ? i : .1, this.far = void 0 !== o ? o : 2e3, this.updateProjectionMatrix()
}, XG.OrthographicCamera.prototype = Object.create(XG.Camera.prototype), XG.OrthographicCamera.prototype.updateProjectionMatrix = function() {
    this.projectionMatrix.makeOrthographic(this.left, this.right, this.top, this.bottom, this.near, this.far)
}, XG.OrthographicCamera.prototype.clone = function(e) {
    return void 0 === e && (e = new XG.OrthographicCamera), XG.Camera.prototype.clone.call(this, e), e.left = this.left, e.right = this.right, e.top = this.top, e.bottom = this.bottom, e.near = this.near, e.far = this.far, e
}, XG.PerspectiveCamera = function(e, t, r, a) {
    XG.Camera.call(this), this.fov = void 0 !== e ? e : 50, this.aspect = void 0 !== t ? t : 1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
}, XG.PerspectiveCamera.prototype = Object.create(XG.Camera.prototype), XG.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
    this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far)
}, XG.PerspectiveCamera.prototype.clone = function(e) {
    return void 0 === e && (e = new XG.PerspectiveCamera), XG.Camera.prototype.clone.call(this, e), e.fov = this.fov, e.aspect = this.aspect, e.near = this.near, e.far = this.far, e
}, XG.CubeCamera = function(e, t) {
    XG.Node.call(this);
    var r = 90,
        a = 1,
        i = new XG.PerspectiveCamera(r, a, e, t);
    i.up.set(0, -1, 0), i.lookAt(new XG.Vector3(1, 0, 0)), this.add(i);
    var o = new XG.PerspectiveCamera(r, a, e, t);
    o.up.set(0, -1, 0), o.lookAt(new XG.Vector3(-1, 0, 0)), this.add(o);
    var n = new XG.PerspectiveCamera(r, a, e, t);
    n.up.set(0, 0, 1), n.lookAt(new XG.Vector3(0, 1, 0)), this.add(n);
    var s = new XG.PerspectiveCamera(r, a, e, t);
    s.up.set(0, 0, -1), s.lookAt(new XG.Vector3(0, -1, 0)), this.add(s);
    var l = new XG.PerspectiveCamera(r, a, e, t);
    l.up.set(0, -1, 0), l.lookAt(new XG.Vector3(0, 0, 1)), this.add(l);
    var h = new XG.PerspectiveCamera(r, a, e, t);
    h.up.set(0, -1, 0), h.lookAt(new XG.Vector3(0, 0, -1)), this.add(h), this.px = i, this.nx = o, this.py = n, this.ny = s, this.pz = l, this.nz = h
}, XG.CubeCamera.prototype = Object.create(XG.Node.prototype), XG.Light = function(e) {
    XG.Node.call(this), this.color = new XG.Color(e)
}, XG.Light.prototype = Object.create(XG.Node.prototype), XG.AreaLight = function(e, t) {
    XG.Light.call(this, e), this.normal = new XG.Vector3(0, -1, 0), this.right = new XG.Vector3(1, 0, 0), this.intensity = void 0 !== t ? t : 1, this.width = 1, this.height = 1, this.constantAttenuation = 1.5, this.linearAttenuation = .5, this.quadraticAttenuation = .1, this.texture = null, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraFov = 90, this.shadowCameraLeft = -500, this.shadowCameraRight = 500, this.shadowCameraTop = 500, this.shadowCameraBottom = -500, this.shadowCameraOrtho = !1, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512
}, XG.AreaLight.prototype = Object.create(XG.Light.prototype), XG.DayLight = function(e, t, r, a, i) {
    XG.Light.call(this, e), this.skyColor = new XG.Color(t), this.groundColor = new XG.Color(r), this.position = new XG.Vector3(0, 100, 0), this.hemiPosition = new XG.Vector3(0, 100, 0), this.target = new XG.Node, this.sunIntensity = void 0 !== a ? a : 1, this.hemiIntensity = void 0 !== i ? i : 1, this.distance = 0, this.castShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraLeft = -500, this.shadowCameraRight = 500, this.shadowCameraTop = 500, this.shadowCameraBottom = -500, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowCascade = !1, this.shadowCascadeOffset = new XG.Vector3(0, 0, -1e3), this.shadowCascadeCount = 2, this.shadowCascadeBias = [0, 0, 0, 0], this.shadowCascadeWidth = [512, 512, 512, 512], this.shadowCascadeHeight = [512, 512, 512, 512], this.shadowCascadeNearZ = [-1, .99, .998], this.shadowCascadeFarZ = [.99, .998, 1], this.shadowCascadeArray = [], this.texture = null, this.textureCameraLeft = -500, this.textureCameraRight = 500, this.textureCameraTop = 500, this.textureCameraBottom = -500, this.textureCameraNear = 1, this.textureCameraFar = 5e3, this.textureWidth = 512, this.textureHeight = 512, this.textureBias = -4, this.castTransparentShadow = !1
}, XG.DayLight.prototype = Object.create(XG.Light.prototype), XG.DayLightCube = function(e, t) {
    XG.Light.call(this, e), this.position = new XG.Vector3(0, 100, 0), this.target = new XG.Node, this.intensity = void 0 !== t ? t : 1, this.distance = 0, this.textureSpecular = null, this.textureDiffuse = null, this.ambientIntensity = 1, this.castShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraLeft = -500, this.shadowCameraRight = 500, this.shadowCameraTop = 500, this.shadowCameraBottom = -500, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowCascade = !1, this.shadowCascadeOffset = new XG.Vector3(0, 0, -1e3), this.shadowCascadeCount = 2, this.shadowCascadeBias = [0, 0, 0, 0], this.shadowCascadeWidth = [512, 512, 512, 512], this.shadowCascadeHeight = [512, 512, 512, 512], this.shadowCascadeNearZ = [-1, .99, .998], this.shadowCascadeFarZ = [.99, .998, 1], this.shadowCascadeArray = [], this.texture = null, this.textureCameraLeft = -500, this.textureCameraRight = 500, this.textureCameraTop = 500, this.textureCameraBottom = -500, this.textureCameraNear = 1, this.textureCameraFar = 5e3, this.textureWidth = 512, this.textureHeight = 512, this.textureBias = -4, this.castTransparentShadow = !1
}, XG.DayLightCube.prototype = Object.create(XG.Light.prototype), XG.DirectionalLight = function(e, t) {
    XG.Light.call(this, e), this.position = new XG.Vector3(0, 1, 0), this.target = new XG.Node, this.intensity = void 0 !== t ? t : 1, this.distance = 0, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraLeft = -500, this.shadowCameraRight = 500, this.shadowCameraTop = 500, this.shadowCameraBottom = -500, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowCascade = !1, this.shadowCascadeOffset = new XG.Vector3(0, 0, -1e3), this.shadowCascadeCount = 2, this.shadowCascadeBias = [0, 0, 0, 0], this.shadowCascadeWidth = [512, 512, 512, 512], this.shadowCascadeHeight = [512, 512, 512, 512], this.shadowCascadeNearZ = [-1, .99, .998], this.shadowCascadeFarZ = [.99, .998, 1], this.shadowCascadeArray = [], this.texture = null, this.textureCameraLeft = -500, this.textureCameraRight = 500, this.textureCameraTop = 500, this.textureCameraBottom = -500, this.textureCameraNear = 1, this.textureCameraFar = 5e3, this.textureWidth = 512, this.textureHeight = 512, this.textureBias = -4, this.castTransparentShadow = !1
}, XG.DirectionalLight.prototype = Object.create(XG.Light.prototype), XG.HemisphereLight = function(e, t, r) {
    XG.Light.call(this, e), this.groundColor = new XG.Color(t), this.position = new XG.Vector3(0, 100, 0), this.intensity = void 0 !== r ? r : 1
}, XG.HemisphereLight.prototype = Object.create(XG.Light.prototype), XG.PointLight = function(e, t, r) {
    XG.Light.call(this, e), this.position = new XG.Vector3(0, 0, 0), this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== r ? r : 0, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512
}, XG.PointLight.prototype = Object.create(XG.Light.prototype), XG.SphereLight = function(e, t, r, a) {
    XG.Light.call(this, e), this.position = new XG.Vector3(0, 0, 0), this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== r ? r : 0, this.radius = void 0 !== a ? a : 1, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.forwardShadowSide = 0
}, XG.SphereLight.prototype = Object.create(XG.Light.prototype), XG.TubeLight = function(e, t, r, a, i) {
    XG.Light.call(this, e), this.position = new XG.Vector3(0, 0, 0), this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== r ? r : 0, this.radius = void 0 !== a ? a : .1, this.length = void 0 !== i ? a : 5, this.occlusionEnabled = !1, this.castShadow = !1, this.onlyShadow = !1, this.endPoint0 = new XG.Node, this.endPoint1 = new XG.Node, this.endPoint0.position.y = .5 * -i, this.endPoint1.position.y = .5 * i, this.add(this.endPoint0), this.add(this.endPoint1)
}, XG.TubeLight.prototype = Object.create(XG.Light.prototype), XG.SpotLight = function(e, t, r, a, i) {
    XG.Light.call(this, e), this.position = new XG.Vector3(0, 1, 0), this.target = new XG.Node, this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== r ? r : 0, this.angle = void 0 !== a ? a : Math.PI / 2, this.exponent = void 0 !== i ? i : 10, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraFov = 50, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.texture = null, this.textureCameraNear = 1, this.textureCameraFar = 5e3, this.textureCameraFov = 50, this.textureCameraAspectScale = 1, this.textureWidth = 512, this.textureHeight = 512, this.textureBias = -4, this.castTransparentShadow = !1
}, XG.SpotLight.prototype = Object.create(XG.Light.prototype), XG.ImageLight = function(e, t, r) {
    XG.Light.call(this, 16777215), this.textureSpecular = e, this.textureDiffuse = t, this.textureMip = e, this.intensity = void 0 !== r ? r : 1, this.local = !1, this.size = new XG.Vector3(1, 1, 1)
}, XG.ImageLight.prototype = Object.create(XG.Light.prototype), XG.LightProxy = function(e, t) {
    this.light = e, this.renderer = t
}, XG.LightProxy.prototype = Object.create(XG.Mesh.prototype), XG.LightProxy.prototype.update = function(e) {
    var t = this.materials[0].uniforms;
    t.matProj && (t.matProj.value = e.projectionMatrix), t.matProjInverse && (t.matProjInverse.value = e.projectionMatrixInverse), t.matView && (t.matView.value = e.matrixWorldInverse), t.matViewInverse && (t.matViewInverse.value = e.matrixWorld), this.light && (this.visible = this.light.visible)
}, XG.LightProxy.prototype.resize = function(e, t) {
    var r = this.materials[0],
        a = r.uniforms;
    a.viewSize && a.viewSize.value.set(e, t)
}, XG.LightProxy.prototype.setSamplers = function(e) {
    var t = this.renderer,
        r = e.uniforms,
        a = t.getUseMultipleRenderTargets();
    if (a) {
        var i = t.getCombinedTarget();
        r.viewSize.value.set(i.width, i.height), r.samplerDiffuseRGB && (r.samplerDiffuseRGB.value = i.colorTexture[0]), r.samplerSpecularRGB && (r.samplerSpecularRGB.value = i.colorTexture[1]), r.samplerWrapRGB && (r.samplerWrapRGB.value = i.colorTexture[2]), r.samplerNormal && (r.samplerNormal.value = i.colorTexture[3]), r.samplerDepth && (r.samplerDepth.value = t.useDepthTexture ? i.depthTexture : i.colorTexture[4])
    } else {
        var o = t.getColorTarget(),
            n = t.getNormalDepthTarget();
        r.viewSize.value.set(o.width, o.height), r.samplerColor && (r.samplerColor.value = o), r.samplerNormalDepth && (r.samplerNormalDepth.value = n)
    }
    var s = t.getSSAOTarget();
    r.samplerSSAO && (r.samplerSSAO.value = s)
}, XG.LightProxy.prototype.generateDefines = function() {
    var e = this.light,
        t = this.renderer,
        r = {};
    if (t.shadowMapEnabled && e && e.castShadow) {
        r.USE_SHADOWMAP = !0;
        var a = void 0 !== e.shadowMapType ? e.shadowMapType : t.shadowMapType;
        switch (a) {
            case XG.BasicShadowMap:
                r.SHADOWMAP_TYPE_BASIC = !0;
                break;
            case XG.PCFShadowMap:
                r.SHADOWMAP_TYPE_PCF = !0;
                break;
            case XG.PCFSoftShadowMap:
                r.SHADOWMAP_TYPE_PCF_SOFT = !0;
                break;
            case XG.PCFSoftHQShadowMap:
                r.SHADOWMAP_TYPE_PCF_SOFT_HQ = !0
        }
        r.SLOPE_DEPTH_BIAS = t.shadowMapSlopeDepthBias, r.SHADOWMAP_DEBUG = t.shadowMapDebug, r.DEPTH_TEXTURES = t.shadowMapUseDepthTextures && t.renderer.supportsDepthTextures()
    }
    return t.ssaoEnabled && e && (r.USE_SSAO = !0), r.USE_MRT = t.getUseMultipleRenderTargets(), r.TEXTURE_DEPTH = t.useDepthTexture, r.PROJECTED_TEXTURE = !!e.texture || !!e.castTransparentShadow, r.PROJECTED_SHADOW = !!e.castTransparentShadow, r
}, XG.LightProxy.prototype.setupDirectionalShadowmap = function(e) {
    var t = this.light,
        r = t.properties,
        a = this.renderer,
        i = a.renderer,
        o = !i.supportsDepthOnlyRenderTarget(),
        n = i.supportsLuminanceFloatRenderTarget() ? XG.LuminanceFormat : i.supportsRGBFloatRenderTarget() ? XG.RGBFormat : XG.RGBAFormat,
        s = {
            minFilter: XG.NearestFilter,
            magFilter: XG.NearestFilter,
            stencilBuffer: !1,
            format: n,
            type: XG.FloatType
        },
        l = a.shadowMapUseDepthTextures && i.supportsDepthTextures(),
        h = {
            minFilter: XG.NearestFilter,
            magFilter: XG.NearestFilter,
            useColorTexture: o,
            stencilBuffer: !1,
            format: n,
            useDepthTexture: !0,
            depthTextureType: a.shadowMapDepthTextureType
        },
        d = l ? h : s;
    r.shadowMap = [], r.shadowMatrixDeferred = [], r.shadowMatrixForward = [], r.shadowCamera = [], r.pointsWorld = [], r.pointsFrustum = [];
    for (var u = 0; e > u; u++) {
        var c = new XG.RenderTarget(t.shadowMapWidth, t.shadowMapHeight, d);
        c.generateMipmaps = !1, r.shadowMap[u] = c;
        var f = new XG.OrthographicCamera(t.shadowCameraLeft, t.shadowCameraRight, t.shadowCameraTop, t.shadowCameraBottom, t.shadowCameraNear, t.shadowCameraFar);
        if (r.shadowCamera[u] = f, r.shadowMatrixDeferred[u] = new XG.Matrix4, r.shadowMatrixForward[u] = new XG.Matrix4, t.shadowCascade) {
            r.pointsWorld[u] = [], r.pointsFrustum[u] = [];
            for (var p = r.pointsWorld[u], m = r.pointsFrustum[u], v = 0; 8 > v; v++) p[v] = new XG.Vector3, m[v] = new XG.Vector3;
            var g = t.shadowCascadeNearZ[u],
                S = t.shadowCascadeFarZ[u];
            m[0].set(-1, -1, g), m[1].set(1, -1, g), m[2].set(-1, 1, g), m[3].set(1, 1, g), m[4].set(-1, -1, S), m[5].set(1, -1, S), m[6].set(-1, 1, S), m[7].set(1, 1, S)
        }
        r.shadowMapPars = new XG.Vector4(t.shadowMapWidth, t.shadowMapHeight, t.shadowDarkness, t.shadowBias)
    }
    t.properties.cascadeCount = e
}, XG.LightProxy.prototype.updateDirectionalShadowmap = function(e) {
    var t = this.light,
        r = this.materials[0].uniforms,
        a = t.properties;
    if (t.shadowCascade && !a.gyro) {
        var i = new XG.Gyroscope;
        i.position = t.shadowCascadeOffset, i.add(t), i.add(t.target), e.add(i), a.gyro = i;
        var o = e.getTopParent();
        if (void 0 !== o && o instanceof XG.Scene) {
            var n = new XG.Node,
                s = new XG.Node;
            o.add(n), o.add(s), n.position = t.position, s.position = t.target.position, t.properties.nonGyroLight = n, t.properties.nonGyroTarget = s
        } else console.error("XG.LightProxy.updateDirectionalShadowmap: can't find parent scene node")
    }
    for (var l = 0; l < a.cascadeCount; l++) {
        var h = a.shadowMatrixDeferred[l],
            d = a.shadowMatrixForward[l],
            u = a.shadowCamera[l],
            c = a.shadowMap[l];
        h.multiply(u.projectionMatrix, u.matrixWorldInverse), d.multiply(XG.LightProxy.biasMatrix, h), h.multiplySelf(e.matrixWorld), r.matShadow.value[l] = h, r.samplerShadowMap.value[l] = c.useDepthTexture ? c.depthTexture : c
    }
    r.shadowDarkness.value = Math.sqrt(t.shadowDarkness), r.shadowBias.value = t.shadowBias, r.shadowMapSize.value.set(t.shadowMapWidth, t.shadowMapHeight)
}, XG.LightProxy.prototype.setupProjectedTexture = function() {
    var e = this.light,
        t = e.properties,
        r = new XG.OrthographicCamera(e.textureCameraLeft, e.textureCameraRight, e.textureCameraTop, e.textureCameraBottom, e.textureCameraNear, e.textureCameraFar);
    if (t.textureCamera = r, t.textureMatrixDeferred = new XG.Matrix4, e.castTransparentShadow) {
        var a = {
                minFilter: XG.LinearMipMapLinearFilter,
                magFilter: XG.LinearFilter,
                stencilBuffer: !1,
                format: XG.RGBAFormat,
                type: XG.UnsignedByteType
            },
            i = new XG.RenderTarget(e.textureWidth, e.textureHeight, a);
        e.shadowCascade || e.textureWidth !== e.shadowMapWidth || e.textureHeight !== e.shadowMapHeight || (i.shareDepthFrom = t.shadowMap[0]), e.texture = i
    }
}, XG.LightProxy.prototype.updateProjectedTexture = function(e) {
    var t = this.light,
        r = this.materials[0].uniforms,
        a = (t.properties, t.properties.textureMatrixDeferred),
        i = t.properties.textureCamera;
    if (i.left = t.textureCameraLeft, i.right = t.textureCameraRight, i.top = t.textureCameraTop, i.bottom = t.textureCameraBottom, i.near = t.textureCameraNear, i.far = t.textureCameraFar, i.updateProjectionMatrix(), t.properties.gyro) var o = t.properties.nonGyroLight,
        n = t.properties.nonGyroTarget;
    else var o = t,
        n = t.target;
    i.position.copy(o.matrixWorld.getPosition()), t.target && i.lookAt(n.matrixWorld.getPosition()), i.updateMatrixWorld(), i.matrixWorldInverse.getInverse(i.matrixWorld), a.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), a.multiplySelf(i.projectionMatrix), a.multiplySelf(i.matrixWorldInverse), a.multiplySelf(e.matrixWorld), r.matTexture.value = a, r.samplerTexture.value = t.texture, r.textureBias.value = t.textureBias
}, XG.LightProxy.geometryLightSphere = new XG.SphereGeometry(1, 16, 8), XG.LightProxy.geometryLightPlane = new XG.PlaneGeometry(2, 2), XG.LightProxy.geometryLightBox = new XG.BoxGeometry(1, 1, 1), XG.LightProxy.positionVS = new XG.Vector3, XG.LightProxy.directionVS = new XG.Vector3, XG.LightProxy.rightVS = new XG.Vector3, XG.LightProxy.normalVS = new XG.Vector3, XG.LightProxy.upVS = new XG.Vector3, XG.LightProxy.biasMatrix = new XG.Matrix4(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), XG.SpotLightProxy = function(e, t) {
    XG.LightProxy.call(this, e, t);
    var r = XG.DeferredShaders.spotLight,
        a = XG.UniformsUtils.clone(r.uniforms),
        i = this.generateDefines(),
        o = new XG.ShaderMaterial({
            uniforms: a,
            vertexShader: r.vertexShader,
            fragmentShader: r.fragmentShader,
            defines: i,
            blending: XG.AdditiveBlending,
            depthWrite: !1,
            depthTest: !1,
            transparent: !0
        });
    this.setSamplers(o);
    var n = XG.LightProxy.geometryLightPlane;
    XG.Mesh.call(this, n, o);
    var s = e.properties;
    if (e.castShadow && this.setupShadowmap(), e.texture || e.castTransparentShadow) {
        var l = e.textureCameraAspectScale;
        if (e.texture) {
            var h = e.texture.image;
            l *= h.width / h.height
        }
        var d = new XG.PerspectiveCamera(e.textureCameraFov, l, e.textureCameraNear, e.textureCameraFar);
        if (s.textureCamera = d, s.textureMatrixDeferred = new XG.Matrix4, e.castTransparentShadow) {
            var u = {
                    minFilter: XG.LinearMipMapLinearFilter,
                    magFilter: XG.LinearFilter,
                    stencilBuffer: !1,
                    format: XG.RGBAFormat,
                    type: XG.UnsignedByteType
                },
                c = new XG.RenderTarget(e.textureWidth, e.textureHeight, u);
            e.shadowCascade || e.textureWidth !== e.shadowMapWidth || e.textureHeight !== e.shadowMapHeight || (c.shareDepthFrom = s.shadowMap), e.texture = c
        }
    }
}, XG.SpotLightProxy.prototype = Object.create(XG.LightProxy.prototype), XG.SpotLightProxy.prototype.setupShadowmap = function() {
    var e = this.light,
        t = e.properties,
        r = this.renderer,
        a = r.renderer,
        i = !a.supportsDepthOnlyRenderTarget(),
        o = a.supportsLuminanceFloatRenderTarget() ? XG.LuminanceFormat : a.supportsRGBFloatRenderTarget() ? XG.RGBFormat : XG.RGBAFormat,
        n = {
            minFilter: XG.NearestFilter,
            magFilter: XG.NearestFilter,
            stencilBuffer: !1,
            format: o,
            type: XG.FloatType
        },
        s = r.shadowMapUseDepthTextures && a.supportsDepthTextures(),
        l = {
            minFilter: XG.NearestFilter,
            magFilter: XG.NearestFilter,
            useColorTexture: i,
            stencilBuffer: !1,
            format: o,
            useDepthTexture: !0,
            depthTextureType: r.shadowMapDepthTextureType
        },
        h = s ? l : n,
        d = new XG.RenderTarget(e.shadowMapWidth, e.shadowMapHeight, h);
    d.wrapS = XG.MirroredRepeatWrapping, d.wrapT = XG.MirroredRepeatWrapping, d.generateMipmaps = !1, t.shadowMap = d;
    var u = e.shadowMapWidth / e.shadowMapHeight,
        c = new XG.PerspectiveCamera(e.shadowCameraFov, u, e.shadowCameraNear, e.shadowCameraFar);
    t.shadowCamera = c, t.shadowMatrixDeferred = new XG.Matrix4, t.shadowMatrixForward = new XG.Matrix4, t.shadowMapPars = new XG.Vector4(e.shadowMapWidth, e.shadowMapHeight, e.shadowDarkness, e.shadowBias)
}, XG.SpotLightProxy.prototype.update = function(e) {
    XG.LightProxy.prototype.update.call(this, e);
    var t = this.light,
        r = this.materials[0].uniforms,
        a = e.matrixWorldInverse,
        i = t.matrixWorld,
        o = XG.LightProxy.positionVS,
        n = XG.LightProxy.directionVS;
    o.copy(i.getPosition()), a.multiplyVector3(o), n.copy(i.getPosition()), n.subSelf(t.target.matrixWorld.getPosition()), n.normalize(), a.rotateAxis(n), r.lightPositionVS.value.copy(o), r.lightDirectionVS.value.copy(n), r.lightAngleCos.value = Math.cos(.5 * t.angle), r.lightDistance.value = t.distance;
    var s = t.intensity * t.intensity;
    if (r.lightIntensity.value = s, r.lightColor.value.copyGammaToLinear(t.color), t.castShadow) {
        var l = t.properties.shadowMatrixDeferred,
            h = t.properties.shadowMatrixForward,
            d = t.properties.shadowCamera,
            u = t.properties.shadowMap;
        l.multiply(d.projectionMatrix, d.matrixWorldInverse), h.multiply(XG.LightProxy.biasMatrix, l), l.multiplySelf(e.matrixWorld), r.matShadow.value = l, r.samplerShadowMap.value = u.useDepthTexture ? u.depthTexture : u, r.shadowDarkness.value = Math.sqrt(t.shadowDarkness), r.shadowBias.value = t.shadowBias, r.shadowMapSize.value.set(t.shadowMapWidth, t.shadowMapHeight)
    }
    if (t.texture) {
        var c = t.properties.textureMatrixDeferred,
            f = t.properties.textureCamera,
            p = t.texture.image ? t.texture.image : t.texture,
            m = p.width / p.height;
        f.fov = t.textureCameraFov, f.near = t.textureCameraNear, f.far = t.textureCameraFar, f.aspect = m * t.textureCameraAspectScale, f.updateProjectionMatrix(), f.position.copy(t.matrixWorld.getPosition()), t.target && f.lookAt(t.target.matrixWorld.getPosition()), f.updateMatrixWorld(), f.matrixWorldInverse.getInverse(f.matrixWorld), c.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), c.multiplySelf(f.projectionMatrix), c.multiplySelf(f.matrixWorldInverse), c.multiplySelf(e.matrixWorld), r.matTexture.value = c, r.samplerTexture.value = t.texture, r.textureBias.value = t.textureBias
    }
}, XG.AreaLightProxy = function(e, t) {
    XG.LightProxy.call(this, e, t);
    var r = XG.DeferredShaders.areaLight,
        a = XG.UniformsUtils.clone(r.uniforms),
        i = this.generateDefines();
    i.AREA_TEXTURE = !!e.texture;
    var o = new XG.ShaderMaterial({
        uniforms: a,
        vertexShader: r.vertexShader,
        fragmentShader: r.fragmentShader,
        defines: i,
        blending: XG.AdditiveBlending,
        depthWrite: !1,
        depthTest: !1,
        transparent: !0
    });
    this.setSamplers(o);
    var n = XG.LightProxy.geometryLightPlane;
    XG.Mesh.call(this, n, o), e.castShadow && this.setupShadowmap()
}, XG.AreaLightProxy.prototype = Object.create(XG.LightProxy.prototype), XG.AreaLightProxy.prototype.setupShadowmap = function() {
    var e = this.light,
        t = e.properties,
        r = this.renderer,
        a = r.renderer,
        i = !a.supportsDepthOnlyRenderTarget(),
        o = a.supportsLuminanceFloatRenderTarget() ? XG.LuminanceFormat : a.supportsRGBFloatRenderTarget() ? XG.RGBFormat : XG.RGBAFormat,
        n = {
            minFilter: XG.NearestFilter,
            magFilter: XG.NearestFilter,
            stencilBuffer: !1,
            format: o,
            type: XG.FloatType
        },
        s = r.shadowMapUseDepthTextures && a.supportsDepthTextures(),
        l = {
            minFilter: XG.NearestFilter,
            magFilter: XG.NearestFilter,
            useColorTexture: i,
            stencilBuffer: !1,
            format: o,
            useDepthTexture: !0,
            depthTextureType: r.shadowMapDepthTextureType
        },
        h = s ? l : n,
        d = new XG.RenderTarget(e.shadowMapWidth, e.shadowMapHeight, h);
    if (d.generateMipmaps = !1, t.shadowMap = d, e.shadowCameraOrtho) var u = new XG.OrthographicCamera(e.shadowCameraLeft, e.shadowCameraRight, e.shadowCameraTop, e.shadowCameraBottom, e.shadowCameraNear, e.shadowCameraFar);
    else var c = e.shadowMapWidth / e.shadowMapHeight,
        u = new XG.PerspectiveCamera(e.shadowCameraFov, c, e.shadowCameraNear, e.shadowCameraFar);
    t.shadowCamera = u, t.shadowMatrixDeferred = new XG.Matrix4, t.shadowMatrixForward = new XG.Matrix4, t.shadowMapPars = new XG.Vector4(e.shadowMapWidth, e.shadowMapHeight, e.shadowDarkness, e.shadowBias)
}, XG.AreaLightProxy.prototype.update = function(e) {
    XG.LightProxy.prototype.update.call(this, e);
    var t = this.light,
        r = this.materials[0].uniforms,
        a = t.matrixWorld,
        i = e.matrixWorldInverse,
        o = XG.LightProxy.positionVS,
        n = XG.LightProxy.rightVS,
        s = XG.LightProxy.normalVS,
        l = XG.LightProxy.upVS;
    o.copy(a.getPosition()), i.multiplyVector3(o), r.lightPositionVS.value.copy(o), n.copy(t.right), s.copy(t.normal), a.rotateAxis(n), a.rotateAxis(s), i.rotateAxis(n), i.rotateAxis(s), l.cross(n, s), l.normalize(), r.lightRightVS.value.copy(n), r.lightNormalVS.value.copy(s), r.lightUpVS.value.copy(l), r.lightWidth.value = t.width, r.lightHeight.value = t.height, r.constantAttenuation.value = t.constantAttenuation, r.linearAttenuation.value = t.linearAttenuation, r.quadraticAttenuation.value = t.quadraticAttenuation, r.samplerTexture.value = t.texture;
    var h = t.intensity * t.intensity;
    if (r.lightIntensity.value = h, r.lightColor.value.copyGammaToLinear(t.color), t.castShadow) {
        var d = t.properties.shadowMatrixDeferred,
            u = t.properties.shadowMatrixForward,
            c = t.properties.shadowCamera,
            f = t.properties.shadowMap;
        d.multiply(c.projectionMatrix, c.matrixWorldInverse), u.multiply(XG.LightProxy.biasMatrix, d), d.multiplySelf(e.matrixWorld), r.matShadow.value = d, r.samplerShadowMap.value = f.useDepthTexture ? f.depthTexture : f, r.shadowDarkness.value = Math.sqrt(t.shadowDarkness), r.shadowBias.value = t.shadowBias, r.shadowMapSize.value.set(t.shadowMapWidth, t.shadowMapHeight)
    }
}, XG.DayLightProxy = function(e, t) {
    XG.LightProxy.call(this, e, t);
    var r = XG.DeferredShaders.dayLight,
        a = XG.UniformsUtils.clone(r.uniforms),
        i = this.generateDefines(e),
        o = e.shadowCascade ? e.shadowCascadeCount : 1;
    i.SHADOWMAP_COUNT = o;
    var n = new XG.ShaderMaterial({
        uniforms: a,
        vertexShader: r.vertexShader,
        fragmentShader: r.fragmentShader,
        defines: i,
        blending: XG.AdditiveBlending,
        depthWrite: !1,
        depthTest: !1,
        transparent: !0
    });
    this.setSamplers(n);
    var s = XG.LightProxy.geometryLightPlane;
    XG.Mesh.call(this, s, n), e.castShadow && this.setupDirectionalShadowmap(o), (e.texture || e.castTransparentShadow) && this.setupProjectedTexture()
}, XG.DayLightProxy.prototype = Object.create(XG.LightProxy.prototype), XG.DayLightProxy.prototype.update = function(e) {
    XG.LightProxy.prototype.update.call(this, e);
    var t = this.light,
        r = this.materials[0].uniforms,
        a = XG.LightProxy.directionVS;
    a.copy(t.matrixWorld.getPosition()), a.subSelf(t.target.matrixWorld.getPosition()), a.normalize(), e.matrixWorldInverse.rotateAxis(a), r.lightDirectionVSSun.value.copy(a), a.copy(t.hemiPosition), a.normalize(), e.matrixWorldInverse.rotateAxis(a), r.lightDirectionVSHemi.value.copy(a);
    var i = t.sunIntensity * t.sunIntensity,
        o = t.hemiIntensity * t.hemiIntensity;
    r.lightIntensitySun.value = i, r.lightIntensityHemi.value = o, r.lightColorSun.value.copyGammaToLinear(t.color), r.lightColorSky.value.copyGammaToLinear(t.skyColor), r.lightColorGround.value.copyGammaToLinear(t.groundColor), t.castShadow && this.updateDirectionalShadowmap(e), t.texture && this.updateProjectedTexture(e)
}, XG.DayLightCubeProxy = function(e, t) {
    XG.LightProxy.call(this, e, t);
    var r = XG.DeferredShaders.dayLightCube,
        a = XG.UniformsUtils.clone(r.uniforms),
        i = this.generateDefines(e),
        o = {},
        n = e.shadowCascade ? e.shadowCascadeCount : 1;
    i.SHADOWMAP_COUNT = n, t.specularMipFix && (i.SPECULAR_MIP_FIX = !0, o.OES_standard_derivatives = !0), t.renderer.supportsShaderTextureLod() && (o.EXT_shader_texture_lod = !0);
    var s = new XG.ShaderMaterial({
        uniforms: a,
        vertexShader: r.vertexShader,
        fragmentShader: r.fragmentShader,
        defines: i,
        extensions: o,
        blending: XG.AdditiveBlending,
        depthWrite: !1,
        depthTest: !1,
        transparent: !0
    });
    this.setSamplers(s);
    var l = XG.LightProxy.geometryLightPlane;
    XG.Mesh.call(this, l, s), e.castShadow && this.setupDirectionalShadowmap(n), (e.texture || e.castTransparentShadow) && this.setupProjectedTexture()
}, XG.DayLightCubeProxy.prototype = Object.create(XG.LightProxy.prototype), XG.DayLightCubeProxy.prototype.update = function(e) {
    XG.LightProxy.prototype.update.call(this, e);
    var t = this.light,
        r = this.materials[0].uniforms,
        a = XG.LightProxy.directionVS;
    a.copy(t.matrixWorld.getPosition()), a.subSelf(t.target.matrixWorld.getPosition()), a.normalize(), e.matrixWorldInverse.rotateAxis(a), r.lightDirectionVSSun.value.copy(a), r.samplerSpecular.value = t.textureSpecular, r.samplerDiffuse.value = t.textureDiffuse, r.maxMipSpecular.value = t.textureSpecular.mipmapCount;
    var i = t.intensity * t.intensity,
        o = t.ambientIntensity * t.ambientIntensity;
    r.lightIntensitySun.value = i, r.lightIntensityAmbient.value = o, r.lightColorSun.value.copyGammaToLinear(t.color), t.castShadow && this.updateDirectionalShadowmap(e), t.texture && this.updateProjectedTexture(e)
}, XG.DirectionalLightProxy = function(e, t) {
    XG.LightProxy.call(this, e, t);
    var r = XG.DeferredShaders.directionalLight,
        a = XG.UniformsUtils.clone(r.uniforms),
        i = this.generateDefines(e),
        o = e.shadowCascade ? e.shadowCascadeCount : 1;
    i.SHADOWMAP_COUNT = o;
    var n = new XG.ShaderMaterial({
        uniforms: a,
        vertexShader: r.vertexShader,
        fragmentShader: r.fragmentShader,
        defines: i,
        blending: XG.AdditiveBlending,
        depthWrite: !1,
        depthTest: !1,
        transparent: !0
    });
    this.setSamplers(n);
    var s = XG.LightProxy.geometryLightPlane;
    XG.Mesh.call(this, s, n), e.castShadow && this.setupDirectionalShadowmap(o), (e.texture || e.castTransparentShadow) && this.setupProjectedTexture()
}, XG.DirectionalLightProxy.prototype = Object.create(XG.LightProxy.prototype), XG.DirectionalLightProxy.prototype.update = function(e) {
    XG.LightProxy.prototype.update.call(this, e);
    var t = this.light,
        r = this.materials[0].uniforms,
        a = XG.LightProxy.directionVS;
    a.copy(t.matrixWorld.getPosition()), a.subSelf(t.target.matrixWorld.getPosition()), a.normalize(), e.matrixWorldInverse.rotateAxis(a), r.lightDirectionVS.value.copy(a);
    var i = t.intensity * t.intensity;
    r.lightIntensity.value = i, r.lightColor.value.copyGammaToLinear(t.color), t.castShadow && this.updateDirectionalShadowmap(e), t.texture && this.updateProjectedTexture(e)
}, XG.HemisphereLightProxy = function(e, t) {
    XG.LightProxy.call(this, e, t);
    var r = XG.DeferredShaders.hemisphereLight,
        a = XG.UniformsUtils.clone(r.uniforms),
        i = this.generateDefines(e),
        o = new XG.ShaderMaterial({
            uniforms: a,
            vertexShader: r.vertexShader,
            fragmentShader: r.fragmentShader,
            defines: i,
            blending: XG.AdditiveBlending,
            depthWrite: !1,
            depthTest: !1,
            transparent: !0
        });
    this.setSamplers(o);
    var n = XG.LightProxy.geometryLightPlane;
    XG.Mesh.call(this, n, o)
}, XG.HemisphereLightProxy.prototype = Object.create(XG.LightProxy.prototype), XG.HemisphereLightProxy.prototype.update = function(e) {
    XG.LightProxy.prototype.update.call(this, e);
    var t = this.light,
        r = this.materials[0].uniforms,
        a = XG.LightProxy.directionVS;
    a.copy(t.matrixWorld.getPosition()), a.normalize(), e.matrixWorldInverse.rotateAxis(a), r.lightDirectionVS.value.copy(a);
    var i = t.intensity * t.intensity;
    r.lightIntensity.value = i, r.lightColorSky.value.copyGammaToLinear(t.color), r.lightColorGround.value.copyGammaToLinear(t.groundColor)
}, XG.PointLightProxy = function(e, t) {
    XG.LightProxy.call(this, e, t);
    var r = XG.DeferredShaders.pointLight,
        a = XG.UniformsUtils.clone(r.uniforms),
        i = this.generateDefines();
    i.SHADOWMAP_COUNT = 6;
    var o, n = new XG.ShaderMaterial({
        uniforms: a,
        vertexShader: r.vertexShader,
        fragmentShader: r.fragmentShader,
        defines: i,
        blending: XG.AdditiveBlending,
        depthWrite: !1,
        transparent: !0
    });
    e.distance > 0 ? (o = XG.LightProxy.geometryLightSphere, n.depthTest = !0, n.side = XG.BackSide) : (o = XG.LightProxy.geometryLightPlane, n.depthTest = !1, n.side = XG.FrontSide), this.setSamplers(n), XG.Mesh.call(this, o, n), e.castShadow && this.setupShadowmap()
}, XG.PointLightProxy.prototype = Object.create(XG.LightProxy.prototype), XG.PointLightProxy.prototype.setupShadowmap = function() {
    var e = this.light,
        t = e.properties,
        r = this.renderer,
        a = r.renderer;
    t.shadowMap = [], t.shadowCamera = [], t.shadowMatrixDeferred = [], t.shadowMatrixForward = [];
    for (var i = !a.supportsDepthOnlyRenderTarget(), o = a.supportsLuminanceFloatRenderTarget() ? XG.LuminanceFormat : a.supportsRGBFloatRenderTarget() ? XG.RGBFormat : XG.RGBAFormat, n = {
            minFilter: XG.NearestFilter,
            magFilter: XG.NearestFilter,
            stencilBuffer: !1,
            format: o,
            type: XG.FloatType
        }, s = r.shadowMapUseDepthTextures && a.supportsDepthTextures(), l = {
            minFilter: XG.NearestFilter,
            magFilter: XG.NearestFilter,
            useColorTexture: i,
            stencilBuffer: !1,
            format: o,
            useDepthTexture: !0,
            depthTextureType: r.shadowMapDepthTextureType
        }, h = s ? l : n, d = [new XG.Vector3(0, -1, 0), new XG.Vector3(0, -1, 0), new XG.Vector3(0, 0, 1), new XG.Vector3(0, 0, -1), new XG.Vector3(0, -1, 0), new XG.Vector3(0, -1, 0)], u = [new XG.Vector3(1, 0, 0), new XG.Vector3(-1, 0, 0), new XG.Vector3(0, 1, 0), new XG.Vector3(0, -1, 0), new XG.Vector3(0, 0, 1), new XG.Vector3(0, 0, -1)], c = 0; 6 > c; c++) {
        var f = new XG.RenderTarget(e.shadowMapWidth, e.shadowMapHeight, h);
        f.generateMipmaps = !1, t.shadowMap[c] = f;
        var p = e.shadowMapWidth / e.shadowMapHeight,
            m = new XG.PerspectiveCamera(90, p, e.shadowCameraNear, e.shadowCameraFar);
        m.up.copy(d[c]), m.lookAt(u[c]), t.shadowCamera[c] = m, t.shadowMatrixDeferred[c] = new XG.Matrix4, t.shadowMatrixForward[c] = new XG.Matrix4
    }
}, XG.PointLightProxy.prototype.update = function(e) {
    XG.LightProxy.prototype.update.call(this, e);
    var t = this.light,
        r = this.materials[0].uniforms,
        a = t.properties,
        i = t.distance;
    if (i > 0) {
        var o = XG.LightProxy.positionVS;
        this.scale.set(1, 1, 1).multiplyScalar(i), r.lightDistance.value = i, o.copy(t.matrixWorld.getPosition()), e.matrixWorldInverse.multiplyVector3(o), r.lightPositionVS.value.copy(o), this.position.copy(t.matrixWorld.getPosition())
    } else r.lightDistance.value = 1 / 0;
    var n = t.intensity * t.intensity;
    if (r.lightIntensity.value = n, r.lightColor.value.copyGammaToLinear(t.color), t.castShadow) {
        for (var s = 0; 6 > s; s++) {
            var l = a.shadowMatrixDeferred[s],
                h = a.shadowMatrixForward[s],
                d = a.shadowCamera[s],
                u = a.shadowMap[s];
            l.multiply(d.projectionMatrix, d.matrixWorldInverse), h.multiply(XG.LightProxy.biasMatrix, l), l.multiplySelf(e.matrixWorld), r.matShadow.value[s] = l, r.samplerShadowMap.value[s] = u.useDepthTexture ? u.depthTexture : u
        }
        r.shadowDarkness.value = Math.sqrt(t.shadowDarkness), r.shadowBias.value = t.shadowBias, r.shadowMapSize.value.set(t.shadowMapWidth, t.shadowMapHeight)
    }
}, XG.SphereLightProxy = function(e, t) {
    XG.LightProxy.call(this, e, t);
    var r = XG.DeferredShaders.sphereLight,
        a = XG.UniformsUtils.clone(r.uniforms),
        i = this.generateDefines();
    i.SHADOWMAP_COUNT = 6;
    var o, n = new XG.ShaderMaterial({
        uniforms: a,
        vertexShader: r.vertexShader,
        fragmentShader: r.fragmentShader,
        defines: i,
        blending: XG.AdditiveBlending,
        depthWrite: !1,
        transparent: !0
    });
    e.distance > 0 ? (o = XG.LightProxy.geometryLightSphere, n.depthTest = !0, n.side = XG.BackSide) : (o = XG.LightProxy.geometryLightPlane, n.depthTest = !1, n.side = XG.FrontSide), this.setSamplers(n), XG.Mesh.call(this, o, n), e.castShadow && this.setupShadowmap()
}, XG.SphereLightProxy.prototype = Object.create(XG.LightProxy.prototype), XG.SphereLightProxy.prototype.setupShadowmap = function() {
    var e = this.light,
        t = e.properties,
        r = this.renderer,
        a = r.renderer;
    t.shadowMap = [], t.shadowCamera = [], t.shadowMatrixDeferred = [], t.shadowMatrixForward = [];
    for (var i = !a.supportsDepthOnlyRenderTarget(), o = a.supportsLuminanceFloatRenderTarget() ? XG.LuminanceFormat : a.supportsRGBFloatRenderTarget() ? XG.RGBFormat : XG.RGBAFormat, n = {
            minFilter: XG.NearestFilter,
            magFilter: XG.NearestFilter,
            stencilBuffer: !1,
            format: o,
            type: XG.FloatType
        }, s = r.shadowMapUseDepthTextures && a.supportsDepthTextures(), l = {
            minFilter: XG.NearestFilter,
            magFilter: XG.NearestFilter,
            useColorTexture: i,
            stencilBuffer: !1,
            format: o,
            useDepthTexture: !0,
            depthTextureType: r.shadowMapDepthTextureType
        }, h = s ? l : n, d = [new XG.Vector3(0, -1, 0), new XG.Vector3(0, -1, 0), new XG.Vector3(0, 0, 1), new XG.Vector3(0, 0, -1), new XG.Vector3(0, -1, 0), new XG.Vector3(0, -1, 0)], u = [new XG.Vector3(1, 0, 0), new XG.Vector3(-1, 0, 0), new XG.Vector3(0, 1, 0), new XG.Vector3(0, -1, 0), new XG.Vector3(0, 0, 1), new XG.Vector3(0, 0, -1)], c = 0; 6 > c; c++) {
        var f = new XG.RenderTarget(e.shadowMapWidth, e.shadowMapHeight, h);
        f.generateMipmaps = !1, t.shadowMap[c] = f;
        var p = e.shadowMapWidth / e.shadowMapHeight,
            m = new XG.PerspectiveCamera(90, p, e.shadowCameraNear, e.shadowCameraFar);
        m.up.copy(d[c]), m.lookAt(u[c]), t.shadowCamera[c] = m, t.shadowMatrixDeferred[c] = new XG.Matrix4, t.shadowMatrixForward[c] = new XG.Matrix4
    }
    t.shadowMapPars = new XG.Vector4(e.shadowMapWidth, e.shadowMapHeight, e.shadowDarkness, e.shadowBias)
}, XG.SphereLightProxy.prototype.update = function(e) {
    XG.LightProxy.prototype.update.call(this, e);
    var t = this.light,
        r = this.materials[0].uniforms,
        a = t.properties,
        i = t.distance;
    if (i > 0) {
        var o = XG.LightProxy.positionVS;
        this.scale.set(1, 1, 1).multiplyScalar(i), r.lightDistance.value = i, o.copy(t.matrixWorld.getPosition()), e.matrixWorldInverse.multiplyVector3(o), r.lightPositionVS.value.copy(o), this.position.copy(t.matrixWorld.getPosition())
    } else r.lightDistance.value = 1 / 0;
    r.lightRadius.value = t.radius;
    var n = t.intensity * t.intensity;
    if (r.lightIntensity.value = n, r.lightColor.value.copyGammaToLinear(t.color), t.castShadow) {
        for (var s = 0; 6 > s; s++) {
            var l = a.shadowMatrixDeferred[s],
                h = a.shadowMatrixForward[s],
                d = a.shadowCamera[s],
                u = a.shadowMap[s];
            l.multiply(d.projectionMatrix, d.matrixWorldInverse), h.multiply(XG.LightProxy.biasMatrix, l), l.multiplySelf(e.matrixWorld), r.matShadow.value[s] = l, r.samplerShadowMap.value[s] = u.useDepthTexture ? u.depthTexture : u
        }
        r.shadowDarkness.value = Math.sqrt(t.shadowDarkness), r.shadowBias.value = t.shadowBias, r.shadowMapSize.value.set(t.shadowMapWidth, t.shadowMapHeight)
    }
}, XG.TubeLightProxy = function(e, t) {
    XG.LightProxy.call(this, e, t);
    var r = XG.DeferredShaders.tubeLight,
        a = XG.UniformsUtils.clone(r.uniforms),
        i = this.generateDefines();
    e.occlusionEnabled && (i.OCCLUSION_ENABLED = !0);
    var o = new XG.ShaderMaterial({
            uniforms: a,
            vertexShader: r.vertexShader,
            fragmentShader: r.fragmentShader,
            defines: i,
            blending: XG.AdditiveBlending,
            depthWrite: !1,
            depthTest: !1,
            transparent: !0,
            side: XG.FrontSide
        }),
        n = XG.LightProxy.geometryLightPlane;
    this.setSamplers(o), XG.Mesh.call(this, n, o)
}, XG.TubeLightProxy.prototype = Object.create(XG.LightProxy.prototype), XG.TubeLightProxy.prototype.update = function(e) {
    XG.LightProxy.prototype.update.call(this, e);
    var t = this.light,
        r = this.materials[0].uniforms,
        a = XG.LightProxy.positionVS;
    a.copy(t.endPoint0.matrixWorld.getPosition()), e.matrixWorldInverse.multiplyVector3(a), r.lightPosition0VS.value.copy(a), a.copy(t.endPoint1.matrixWorld.getPosition()), e.matrixWorldInverse.multiplyVector3(a), r.lightPosition1VS.value.copy(a), r.lightDistance.value = t.distance, r.lightRadius.value = t.radius;
    var i = t.intensity * t.intensity;
    r.lightIntensity.value = i, r.lightColor.value.copyGammaToLinear(t.color)
}, XG.ImageLightProxy = function(e, t) {
    XG.LightProxy.call(this, e, t);
    var r = XG.DeferredShaders.imageLight,
        a = XG.UniformsUtils.clone(r.uniforms),
        i = this.generateDefines(),
        o = {};
    e.textureSpecular instanceof XG.RenderTargetCube && (i.CUBE_SPECULAR_LINEAR = !0), e.textureDiffuse instanceof XG.RenderTargetCube && (i.CUBE_DIFFUSE_LINEAR = !0), e.local && (i.LIGHT_LOCAL = !0), t.specularMipFix && (i.SPECULAR_MIP_FIX = !0, o.OES_standard_derivatives = !0), t.renderer.supportsShaderTextureLod() && (o.EXT_shader_texture_lod = !0);
    var n = new XG.ShaderMaterial({
        uniforms: a,
        vertexShader: r.vertexShader,
        fragmentShader: r.fragmentShader,
        defines: i,
        extensions: o,
        blending: XG.AdditiveBlending,
        depthWrite: !1,
        transparent: !0
    });
    this.setSamplers(n);
    var s;
    e.local ? (s = XG.LightProxy.geometryLightBox, n.depthTest = !0, n.side = XG.BackSide) : (s = XG.LightProxy.geometryLightPlane, n.depthTest = !1, n.side = XG.FrontSide), XG.Mesh.call(this, s, n)
}, XG.ImageLightProxy.prototype = Object.create(XG.LightProxy.prototype), XG.ImageLightProxy.prototype.update = function(e) {
    XG.LightProxy.prototype.update.call(this, e);
    var t = this.light,
        r = this.materials[0].uniforms;
    r.samplerSpecular.value = t.textureSpecular, r.samplerDiffuse.value = t.textureDiffuse, r.samplerMip.value = t.textureMip, r.maxMipSpecular.value = t.textureSpecular.mipmapCount;
    var a = t.intensity * t.intensity;
    if (r.lightIntensity.value = a, t.local) {
        var i = t.size,
            o = t.matrixWorld.getPosition();
        this.position.copy(o), this.scale.copy(i), r.lightSize.value.copy(i).multiplyScalar(.5), r.lightPositionWS.value.copy(o)
    }
}, XG.FirstPersonControls = function(e, t) {
    var r = this;
    this.element = t, this.enabled = !1, this.movementSpeed = 1, this.decaySpeed = 1, this.lookSpeed = .1, this.amplitude = .1, this.frequency = 2;
    var a = new XG.Node;
    a.add(e);
    var i = new XG.Node;
    i.add(a);
    var o = new XG.Node;
    o.add(i);
    var n = !1,
        s = !1,
        l = !1,
        h = !1,
        d = new XG.Vector3,
        u = 0,
        c = Math.PI / 2,
        f = function(e) {
            var t = .001;
            if (r.enabled !== !1) {
                var a = e.movementX || e.mozMovementX || e.webkitMovementX || 0,
                    n = e.movementY || e.mozMovementY || e.webkitMovementY || 0;
                o.rotation.y -= a * r.lookSpeed * t, i.rotation.x -= n * r.lookSpeed * t, i.rotation.x = XG.Math.clamp(i.rotation.x, -c, c)
            }
        },
        p = function(e) {
            switch (e.keyCode) {
                case 38:
                case 87:
                    n = !0;
                    break;
                case 37:
                case 65:
                    l = !0;
                    break;
                case 40:
                case 83:
                    s = !0;
                    break;
                case 39:
                case 68:
                    h = !0
            }
        },
        m = function(e) {
            switch (e.keyCode) {
                case 38:
                case 87:
                    n = !1;
                    break;
                case 37:
                case 65:
                    l = !1;
                    break;
                case 40:
                case 83:
                    s = !1;
                    break;
                case 39:
                case 68:
                    h = !1
            }
        },
        v = function() {
            r.enabled = document.pointerLockElement === r.element || document.mozPointerLockElement === r.element || document.webkitPointerLockElement === r.element ? !0 : !1
        };
    document.addEventListener("mousemove", f, !1), document.addEventListener("keydown", p, !1), document.addEventListener("keyup", m, !1), document.addEventListener("click", function() {
        var e = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document;
        if (!e) return void console.warn("Pointer lock not available");
        var t = r.element;
        t.requestPointerLock = t.requestPointerLock || t.mozRequestPointerLock || t.webkitRequestPointerLock;
        var a = /Firefox/i.test(navigator.userAgent);
        if (a) {
            var i = function() {
                (document.fullscreenElement === t || document.mozFullscreenElement === t || document.mozFullScreenElement === t) && (document.removeEventListener("fullscreenchange", i), document.removeEventListener("mozfullscreenchange", i), t.requestPointerLock())
            };
            document.addEventListener("fullscreenchange", i, !1), document.addEventListener("mozfullscreenchange", i, !1), t.requestFullscreen = t.requestFullscreen || t.mozRequestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullscreen, t.requestFullscreen()
        } else t.requestPointerLock();
        document.addEventListener("pointerlockchange", v, !1), document.addEventListener("mozpointerlockchange", v, !1), document.addEventListener("webkitpointerlockchange", v, !1)
    }), this.getRoot = function() {
        return o
    }, this.attachCamera = function(e) {
        a.add(e)
    }, this.lookAt = function(e) {
        o.updateMatrixWorld(), o.lookAt(e), o.rotation.x = 0, o.rotation.z = 0, o.rotation.y *= -1
    }, this.update = function(e) {
        if (u += e, r.enabled !== !1) {
            var t = r.movementSpeed,
                i = r.decaySpeed;
            d.x += -d.x * i * e, d.z += -d.z * i * e;
            var c = Math.sqrt(d.x * d.x + d.z * d.z);
            a.position.y = c * r.amplitude * Math.sin(u * r.frequency), n && (d.z -= t * e), s && (d.z += t * e), l && (d.x -= t * e), h && (d.x += t * e), o.translateX(d.x), o.translateY(d.y), o.translateZ(d.z)
        }
    }
}, XG.Loader = function(e) {
    this.showStatus = e, this.statusDomElement = e ? XG.Loader.prototype.addStatusElement() : null, this.onLoadStart = function() {}, this.onLoadProgress = function() {}, this.onLoadComplete = function() {}, this.textureMap = {}
}, XG.Loader.prototype = {
    constructor: XG.Loader,
    crossOrigin: "anonymous",
    addStatusElement: function() {
        var e = document.createElement("div");
        return e.style.position = "absolute", e.style.right = "0px", e.style.top = "0px", e.style.fontSize = "0.8em", e.style.textAlign = "left", e.style.background = "rgba(0,0,0,0.25)", e.style.color = "#fff", e.style.width = "120px", e.style.padding = "0.5em 0.5em 0.5em 0.5em", e.style.zIndex = 1e3, e.innerHTML = "Loading ...", e
    },
    updateProgress: function(e) {
        var t = "Loaded ";
        t += e.total ? (100 * e.loaded / e.total).toFixed(0) + "%" : (e.loaded / 1e3).toFixed(2) + " KB", this.statusDomElement.innerHTML = t
    },
    extractUrlBase: function(e) {
        var t = e.split("/");
        return t.pop(), (t.length < 1 ? "." : t.join("/")) + "/"
    },
    initMaterials: function(e, t) {
        for (var r = [], a = 0; a < e.length; ++a) r[a] = this.createMaterial(e[a], t);
        return r
    },
    needsTangents: function(e) {
        for (var t = 0, r = e.length; r > t; t++) {
            var a = e[t];
            if (a instanceof XG.ShaderMaterial) return !0
        }
        return !1
    },
    createMaterial: function(e, t, r) {
        function a(e) {
            var t = Math.log(e) / Math.LN2;
            return Math.floor(t) == t
        }

        function i(e) {
            var t = Math.log(e) / Math.LN2;
            return Math.pow(2, Math.round(t))
        }

        function o(e, t) {
            var r = new Image;
            r.onload = function() {
                if (a(this.width) && a(this.height)) e.image = this;
                else {
                    var t = i(this.width),
                        r = i(this.height),
                        o = document.createElement("canvas");
                    o.width = t, o.height = r, o.getContext("2d").drawImage(this, 0, 0, t, r), e.image = o
                }
                e.needsUpdate = !0
            }, r.crossOrigin = d.crossOrigin, r.src = t
        }

        function n(e, t) {
            return "/" === e[e.length - 1] ? e + t : e + "/" + t
        }

        function s(e, t, r, a, i) {
            var o = e;
            return t && (o += "_R[" + t[0] + "_" + t[1] + "]"), r && (o += "_O[" + r[0] + "_" + r[1] + "]"), a && (o += "_W[" + a[0] + "_" + a[1] + "]"), i && (o += "_A[" + i + "]"), o
        }

        function l(e, a, i, l, h, u, c) {
            var f, p = n(t, i),
                m = s(p, l, h, u, c);
            if (void 0 === d.textureMap[m]) {
                var v, g = i.toLowerCase().endsWith(".dds"),
                    S = i.toLowerCase().endsWith(".crn");
                if (g ? r ? (v = new XG.CompressedTexture, f = v, XG.ImageUtils.generateDummyCompressedTexture(v)) : v = XG.ImageUtils.loadCompressedTexture(p) : S ? r ? (v = new XG.CompressedTexture, f = v, XG.ImageUtils.generateDummyCompressedTexture(v)) : v = XG.ImageUtils.loadCRNTexture(p) : (v = new XG.Texture, o(v, p)), v.sourceFile = i, l && (v.repeat.set(l[0], l[1]), 1 !== l[0] && (v.wrapS = XG.RepeatWrapping), 1 !== l[1] && (v.wrapT = XG.RepeatWrapping)), h && v.offset.set(h[0], h[1]), u) {
                    var x = {
                        repeat: XG.RepeatWrapping,
                        mirror: XG.MirroredRepeatWrapping
                    };
                    void 0 !== x[u[0]] && (v.wrapS = x[u[0]]), void 0 !== x[u[1]] && (v.wrapT = x[u[1]])
                }
                c && (v.anisotropy = c), d.textureMap[m] = v
            }
            return e[a] = d.textureMap[m], f
        }

        function h(e) {
            return (255 * e[0] << 16) + (255 * e[1] << 8) + 255 * e[2]
        }
        var d = this,
            u = "PhongMaterial",
            c = {
                color: 15658734,
                opacity: 1,
                map: null,
                lightMap: null,
                normalMap: null,
                bumpMap: null
            };
        if (e.shading) {
            var f = e.shading.toLowerCase();
            "phong" === f ? u = "PhongMaterial" : "basic" === f && (u = "EmissiveMaterial")
        }
        void 0 !== e.blending && void 0 !== XG[e.blending] && (c.blending = XG[e.blending]), (void 0 !== e.transparent || e.transparency < 1) && (c.transparent = e.transparent), void 0 !== e.depthTest && (c.depthTest = e.depthTest), void 0 !== e.depthWrite && (c.depthWrite = e.depthWrite), void 0 !== e.visible && (c.visible = e.visible), void 0 !== e.flipSided && (c.side = XG.BackSide), void 0 !== e.doubleSided && (c.side = XG.DoubleSide), void 0 !== e.vertexColors && (c.vertexColors = e.vertexColors), void 0 !== e.skinning && (c.skinning = e.skinning), void 0 !== e.wrapAround && (c.wrapAround = e.wrapAround), void 0 !== e.wrapRGB && (c.wrapRGB = new XG.Vector3(e.wrapRGB[0], e.wrapRGB[1], e.wrapRGB[2])), e.colorDiffuse ? c.color = h(e.colorDiffuse) : e.DbgColor && (c.color = e.DbgColor), e.colorSpecular && (c.specular = h(e.colorSpecular)), e.colorAmbient && (c.ambient = h(e.colorAmbient)), e.transparency && (c.opacity = e.transparency), e.specularCoef && (c.shininess = e.specularCoef);
        var p, m = [];
        e.mapDiffuse && t && (p = l(c, "map", e.mapDiffuse, e.mapDiffuseRepeat, e.mapDiffuseOffset, e.mapDiffuseWrap, e.mapDiffuseAnisotropy), p && m.push([p, e.mapDiffuse])), e.mapLight && t && (p = l(c, "lightMap", e.mapLight, e.mapLightRepeat, e.mapLightOffset, e.mapLightWrap, e.mapLightAnisotropy), p && m.push([p, e.mapLight])), e.mapBump && t && (p = l(c, "bumpMap", e.mapBump, e.mapBumpRepeat, e.mapBumpOffset, e.mapBumpWrap, e.mapBumpAnisotropy), p && m.push([p, e.mapBump])), e.mapNormal && t && (p = l(c, "normalMap", e.mapNormal, e.mapNormalRepeat, e.mapNormalOffset, e.mapNormalWrap, e.mapNormalAnisotropy), p && m.push([p, e.mapNormal])), e.mapSpecular && t && (p = l(c, "specularMap", e.mapSpecular, e.mapSpecularRepeat, e.mapSpecularOffset, e.mapSpecularWrap, e.mapSpecularAnisotropy), p && m.push([p, e.mapSpecular])), e.mapGloss && t && (p = l(c, "glossMap", e.mapGloss, e.mapGlossRepeat, e.mapGlossOffset, e.mapGlossWrap, e.mapGlossAnisotropy), p && m.push([p, e.mapGloss])), e.mapNormalGloss && t && (p = l(c, "normalGlossMap", e.mapNormalGloss, e.mapNormalGlossRepeat, e.mapNormalGlossOffset, e.mapNormalGlossWrap, e.mapNormalGlossAnisotropy), p && m.push([p, e.mapNormalGloss])), e.mapBumpScale && (c.bumpScale = e.mapBumpScale), e.mapNormalScale && (c.normalScale = new XG.Vector2(e.mapNormalScale[0], e.mapNormalScale[1]));
        var v = new XG[u](c);
        return void 0 !== e.DbgName && (v.name = e.DbgName), v.properties = {
            texturesToLoad: m
        }, v
    }
}, XG.UTF8Loader = function() {}, XG.UTF8Loader.prototype.load = function(e, t, r) {
    this.downloadModelJson(e, r, t)
}, XG.UTF8Loader.MaterialCreator = function(e, t) {
    this.materials = {}, this.textureMap = {};
    for (var r in t) this.createMaterial(r, t[r], e)
}, XG.UTF8Loader.MaterialCreator.prototype.get = function(e) {
    return this.materials[e]
}, XG.UTF8Loader.MaterialCreator.prototype.createMaterial = function(e, t, r) {
    var a = this,
        i = function(e) {
            var t = r + e;
            if (void 0 === a.textureMap[t]) {
                var i, o = e.toLowerCase().endsWith(".dds"),
                    n = e.toLowerCase().endsWith(".crn");
                i = o ? XG.ImageUtils.loadCompressedTexture(t) : n ? XG.ImageUtils.loadCRNTexture(t) : XG.ImageUtils.loadTexture(t), a.textureMap[t] = i
            }
            return a.textureMap[t]
        },
        o = {};
    for (var n in t) {
        var s = t[n];
        switch (n.toLowerCase()) {
            case "kd":
                o.color = (new XG.Color).setRGB(s[0] / 255, s[1] / 255, s[2] / 255);
                break;
            case "ka":
                o.ambient = (new XG.Color).setRGB(s[0] / 255, s[1] / 255, s[2] / 255);
                break;
            case "ks":
                o.specular = (new XG.Color).setRGB(s[0] / 255, s[1] / 255, s[2] / 255);
                break;
            case "map_kd":
                o.map = i(s);
                break;
            case "map_ks":
                o.specularMap = i(s);
                break;
            case "map_light":
                o.lightMap = i(s);
                break;
            case "map_normal":
                o.normalMap = i(s);
                break;
            case "map_bump":
                o.bumpMap = i(s);
                break;
            case "map_gloss":
                o.glossMap = i(s);
                break;
            case "ns":
                o.shininess = s;
                break;
            case "side":
                var l = s.toLowerCase();
                o.side = "double" === l ? XG.DoubleSide : "back" === l ? XG.BackSide : XG.FrontSide;
                break;
            case "alphatest":
                o.alphaTest = s;
                break;
            case "d":
                1 > s && (o.opacity = s, o.transparent = !0)
        }
    }!o.ambient && o.color && (o.ambient = o.color);
    var h = new XG.PhongMaterial(o);
    h.name = e, this.materials[e] = h
}, XG.UTF8Loader.GeometryCreator = function() {}, XG.UTF8Loader.GeometryCreator.prototype.create = function(e, t) {
    var r, a, i, o, n, s, l, h, d = new XG.Geometry,
        u = e.length / 8,
        c = new Float32Array(3 * u),
        f = new Float32Array(3 * u),
        p = new Float32Array(2 * u),
        m = e.length,
        v = 8;
    for (a = 0, i = 0, r = i; m > r; r += v) o = e[r], n = e[r + 1], s = e[r + 2], c[a++] = o, c[a++] = n, c[a++] = s;
    for (a = 0, i = 3, r = i; m > r; r += v) l = e[r], h = e[r + 1], p[a++] = l, p[a++] = h;
    for (a = 0, i = 5, r = i; m > r; r += v) o = e[r], n = e[r + 1], s = e[r + 2], f[a++] = o, f[a++] = n, f[a++] = s;
    return d.addAttributeArray("index", t, 1), d.addAttributeArray("position", c, 3), d.addAttributeArray("normal", f, 3), d.addAttributeArray("uv", p, 2), d.offsets = [{
        start: 0,
        count: t.length,
        index: 0
    }], d.computeBoundingSphere(), d
};
var DEFAULT_DECODE_PARAMS = {
    decodeOffsets: [-4095, -4095, -4095, 0, 0, -511, -511, -511],
    decodeScales: [1 / 8191, 1 / 8191, 1 / 8191, 1 / 1023, 1 / 1023, 1 / 1023, 1 / 1023, 1 / 1023]
};
XG.UTF8Loader.prototype.decompressAttribsInner_ = function(e, t, r, a, i, o, n, s) {
    for (var l = 0, h = t; r > h; h++) {
        var d = e.charCodeAt(h);
        l += d >> 1 ^ -(1 & d), a[i] = s * (l + n), i += o
    }
}, XG.UTF8Loader.prototype.decompressIndices_ = function(e, t, r, a, i) {
    for (var o = 0, n = 0; r > n; n++) {
        var s = e.charCodeAt(t++);
        a[i++] = o - s, 0 === s && o++
    }
}, XG.UTF8Loader.prototype.decompressAABBs_ = function(e, t, r, a, i) {
    for (var o = 6 * r, n = t + o, s = 0, l = new Float32Array(o), h = t; n > h; h += 6) {
        var d = e.charCodeAt(h + 0) + a[0],
            u = e.charCodeAt(h + 1) + a[1],
            c = e.charCodeAt(h + 2) + a[2],
            f = e.charCodeAt(h + 3) + 1 >> 1,
            p = e.charCodeAt(h + 4) + 1 >> 1,
            m = e.charCodeAt(h + 5) + 1 >> 1;
        l[s++] = i[0] * (d + f), l[s++] = i[1] * (u + p), l[s++] = i[2] * (c + m), l[s++] = i[0] * f, l[s++] = i[1] * p, l[s++] = i[2] * m
    }
    return l
}, XG.UTF8Loader.prototype.decompressMesh = function(e, t, r, a, i, o) {
    for (var n = r.decodeScales.length, s = r.decodeOffsets, l = r.decodeScales, h = t.attribRange[0], d = t.attribRange[1], u = h, c = new Float32Array(n * d), f = 0; n > f; f++) {
        var p = u + d,
            m = l[f];
        m && this.decompressAttribsInner_(e, u, p, c, f, n, s[f], m), u = p
    }
    var v = 3 * t.indexRange[1],
        g = new Uint16Array(v);
    this.decompressIndices_(e, u, v, g, 0);
    var S = void 0,
        x = t.bboxes;
    x && (S = this.decompressAABBs_(e, x, t.names.length, s, l)), o(a, i, c, g, S, t)
}, XG.UTF8Loader.prototype.copyAttrib = function(e, t, r, a) {
    for (var i = 0; e > i; i++) r[i] = t[e * a + i]
}, XG.UTF8Loader.prototype.decodeAttrib2 = function(e, t, r, a, i, o, n, s, l, h) {
    for (var d = 0; 5 > d; d++) {
        var u = e.charCodeAt(i + o * d + h),
            c = u >> 1 ^ -(1 & u);
        l[d] += c, s[t * h + d] = l[d], n[t * h + d] = a[d] * (l[d] + r[d])
    }
}, XG.UTF8Loader.prototype.accumulateNormal = function(e, t, r, a, i) {
    var o = a[8 * e],
        n = a[8 * e + 1],
        s = a[8 * e + 2],
        l = a[8 * t],
        h = a[8 * t + 1],
        d = a[8 * t + 2],
        u = a[8 * r],
        c = a[8 * r + 1],
        f = a[8 * r + 2];
    l -= o, h -= n, d -= s, u -= o, c -= n, f -= s, o = h * f - d * c, n = d * u - l * f, s = l * c - h * u, i[3 * e] += o, i[3 * e + 1] += n, i[3 * e + 2] += s, i[3 * t] += o, i[3 * t + 1] += n, i[3 * t + 2] += s, i[3 * r] += o, i[3 * r + 1] += n, i[3 * r + 2] += s
}, XG.UTF8Loader.prototype.decompressMesh2 = function(e, t, r, a, i, o) {
    for (var n = 96, s = r.decodeScales.length, l = r.decodeOffsets, h = r.decodeScales, d = t.attribRange[0], u = t.attribRange[1], c = t.codeRange[0], f = (t.codeRange[1], 3 * t.codeRange[2]), p = new Uint16Array(f), m = new Int32Array(3 * u), v = new Uint16Array(s), g = new Uint16Array(s * u), S = new Float32Array(s * u), x = 0, G = 0, M = 0; f > M; M += 3) {
        var y = e.charCodeAt(c++),
            w = Math.min(M, n);
        if (w > y) {
            var D, X, C, A = y % 3,
                _ = M - (y - A);
            switch (A) {
                case 0:
                    D = p[_ + 2], X = p[_ + 1], C = p[_ + 0];
                    break;
                case 1:
                    D = p[_ + 0], X = p[_ + 2], C = p[_ + 1];
                    break;
                case 2:
                    D = p[_ + 1], X = p[_ + 0], C = p[_ + 2]
            }
            p[G++] = D, p[G++] = X, y = e.charCodeAt(c++);
            var T = x - y;
            if (p[G++] = T, 0 === y) {
                for (var b = 0; 5 > b; b++) {
                    var P = e.charCodeAt(d + u * b + x),
                        L = (P >> 1 ^ -(1 & P)) + g[s * D + b] + g[s * X + b] - g[s * C + b];
                    v[b] = L, g[s * x + b] = L, S[s * x + b] = h[b] * (L + l[b])
                }
                x++
            } else this.copyAttrib(s, g, v, T);
            this.accumulateNormal(D, X, T, g, m)
        } else {
            var E = x - (y - w);
            p[G++] = E, y === w ? this.decodeAttrib2(e, s, l, h, d, u, S, g, v, x++) : this.copyAttrib(s, g, v, E), y = e.charCodeAt(c++);
            var F = x - y;
            p[G++] = F, 0 === y ? this.decodeAttrib2(e, s, l, h, d, u, S, g, v, x++) : this.copyAttrib(s, g, v, F), y = e.charCodeAt(c++);
            var R = x - y;
            if (p[G++] = R, 0 === y) {
                for (var b = 0; 5 > b; b++) v[b] = (g[s * E + b] + g[s * F + b]) / 2;
                this.decodeAttrib2(e, s, l, h, d, u, S, g, v, x++)
            } else this.copyAttrib(s, g, v, R);
            this.accumulateNormal(E, F, R, g, m)
        }
    }
    for (var M = 0; u > M; M++) {
        var U = m[3 * M],
            N = m[3 * M + 1],
            I = m[3 * M + 2],
            B = 511 / Math.sqrt(U * U + N * N + I * I),
            O = e.charCodeAt(d + 5 * u + M),
            k = e.charCodeAt(d + 6 * u + M),
            V = e.charCodeAt(d + 7 * u + M);
        S[s * M + 5] = B * U + (O >> 1 ^ -(1 & O)), S[s * M + 6] = B * N + (k >> 1 ^ -(1 & k)), S[s * M + 7] = B * I + (V >> 1 ^ -(1 & V))
    }
    o(a, i, S, p, void 0, t)
}, XG.UTF8Loader.prototype.downloadMesh = function(e, t, r, a, i) {
    function o(e) {
        for (; s < r.length;) {
            var o = r[s],
                l = o.indexRange;
            if (l) {
                var h = l[0] + 3 * l[1];
                if (e.responseText.length < h) break;
                n.decompressMesh(e.responseText, o, a, t, s, i)
            } else {
                var d = o.codeRange,
                    h = d[0] + d[1];
                if (e.responseText.length < h) break;
                n.decompressMesh2(e.responseText, o, a, t, s, i)
            }++s
        }
    }
    var n = this,
        s = 0;
    getHttpRequest(e, function(e, t) {
        (200 === e.status || 0 === e.status) && o(e, t)
    }, o)
}, XG.UTF8Loader.prototype.downloadMeshes = function(e, t, r, a) {
    for (var i in t) {
        var o = t[i];
        this.downloadMesh(e + i, i, o, r, a)
    }
}, XG.UTF8Loader.prototype.createMeshCallback = function(e, t, r) {
    var a = 0,
        i = 0,
        o = {},
        n = {},
        s = t.urls;
    for (var l in s) o[l] = s[l].length, n[l] = 0, i++;
    var h = [],
        d = [],
        u = new XG.PhongMaterial,
        c = new XG.UTF8Loader.MaterialCreator(e, t.materials, this),
        f = new XG.UTF8Loader.GeometryCreator,
        p = function(e, t, s, l, p, m) {
            var v = f.create(s, l),
                g = c.get(m.material);
            g || (g = u), h.push(v), d.push(g), n[e]++, n[e] === o[e] && (a++, a === i && r(h, d))
        };
    return p
}, XG.UTF8Loader.prototype.downloadModel = function(e, t, r, a) {
    var i = this.createMeshCallback(t, r, a);
    this.downloadMeshes(e, r.urls, r.decodeParams, i)
}, XG.UTF8Loader.prototype.downloadModelJson = function(e, t, r) {
    getJsonRequest(e, function(a) {
        a.decodeParams || (a.decodeParams = t && t.decodeParams ? t.decodeParams : DEFAULT_DECODE_PARAMS), a.options = t;
        var i = e.substr(0, e.lastIndexOf("/") + 1),
            o = i;
        t && t.geometryBase && (i = t.geometryBase, "/" !== i.charAt(i.length - 1) && (i += "/")), t && t.materialBase && (o = t.materialBase, "/" !== o.charAt(o.length - 1) && (o += "/")), this.downloadModel(i, o, a, r)
    }.bind(this))
}, XG.CTMLoader = function(e) {
    XG.Loader.call(this, e), this.maxWorkerCount = 4, this.workerPool = [], this.workerState = [], this.workerFreeCallbacks = [], window.URL = window.URL || window.webkitURL;
    for (var t = new Blob([XG.CTMLoader.workerString], {
            type: "application/x-javascript"
        }), r = window.URL.createObjectURL(t), a = 0; a < this.maxWorkerCount; a++) {
        var i = new Worker(r);
        i.index = a, this.workerPool[a] = i, this.workerState[a] = 0
    }
}, XG.CTMLoader.prototype = Object.create(XG.Loader.prototype), XG.CTMLoader.prototype.loadParts = function(e, t, r) {
    var a = this,
        i = void 0 !== r && r.basePath ? r.basePath : this.extractUrlBase(e),
        o = void 0 !== r && void 0 !== r.useCrunchWorker ? r.useCrunchWorker : !0,
        n = void 0 !== r ? r.callbackGeometriesLoaded : null,
        s = void 0 !== r ? r.callbackProgress : null,
        l = function(e, t, r, a) {
            for (var i = {}, n = 0, s = t.length; s > n; n++) {
                var l = t[n],
                    h = l[0],
                    d = l[1],
                    u = l[2];
                i[h] = [d, u]
            }
            for (var c = [], n = 0, s = r.length; s > n; n++) {
                var f = r[n];
                if (f.properties.texturesToLoad)
                    for (var p = 0, m = f.properties.texturesToLoad.length; m > p; p++) {
                        var v = f.properties.texturesToLoad[p],
                            g = v[0],
                            S = v[1],
                            l = i[S];
                        if (l) {
                            var x = S.toLowerCase().endsWith(".crn");
                            if (x) {
                                var d = l[0],
                                    u = l[1];
                                o ? c.push([g, d, u]) : XG.ImageUtils.loadCRNTextureFromPack(g, e, d, u)
                            } else {
                                var d = l[0];
                                XG.ImageUtils.loadCompressedTextureFromPack(g, e, d)
                            }
                        }
                    }
            }
            if (o && c.length > 0) {
                var G = function() {
                    a()
                };
                XG.ImageUtils.loadMultipleCRNTexturesFromPack(c, e, G)
            } else a()
        },
        h = function(e, t, r, a, i) {
            var o = new XMLHttpRequest;
            o.onreadystatechange = function() {
                if (4 === o.readyState && (200 === o.status || 0 === o.status)) {
                    var e = o.response;
                    l(e, t, r, a)
                }
            }, i && (o.onprogress = function(t) {
                var r = {
                    url: e,
                    loaded: t.loaded,
                    total: t.total
                };
                i(r)
            }), o.open("GET", e, !0), o.responseType = "arraybuffer", o.send(null)
        },
        d = function(e) {
            function r() {
                c && f && t(u, d)
            }

            function o(t) {
                p += 1, u.push(t), p === e.offsets.length && (c = !0, n && n(u, d), r())
            }

            function l() {
                m += 1, m === e.textures.length && (f = !0, r())
            }
            for (var d = [], u = [], c = !1, f = !1, p = 0, m = 0, v = e.textures && e.textureOffsets, g = 0; g < e.materials.length; g++) d[g] = a.createMaterial(e.materials[g], i, v);
            var S = i + e.data,
                x = {
                    offsets: e.offsets,
                    callbackProgress: s
                };
            if (a.load(S, o, x), v)
                for (var g = 0, G = e.textures.length; G > g; g++) {
                    var M = i + e.textures[g],
                        y = e.textureOffsets[g];
                    h(M, y, d, l, s)
                } else f = !0
        },
        u = new XMLHttpRequest;
    u.onreadystatechange = function() {
        if (4 === u.readyState && (200 === u.status || 0 === u.status)) {
            var e = JSON.parse(u.responseText);
            d(e)
        }
    }, u.open("GET", e, !0), u.overrideMimeType && u.overrideMimeType("text/plain; charset=x-user-defined"), u.setRequestHeader("Content-Type", "text/plain"), u.send(null)
}, XG.CTMLoader.prototype.getWorker = function(e) {
    for (var t, r = 0, a = this.workerPool.length; a > r; r++) {
        var i = this.workerState[r];
        if (0 === i) {
            t = this.workerPool[r], this.workerState[r] = 1;
            break
        }
    }
    void 0 === t ? this.workerFreeCallbacks.push(e) : e(t)
}, XG.CTMLoader.prototype.releaseWorker = function(e) {
    var t = this.workerFreeCallbacks.shift();
    t ? t(e) : this.workerState[e.index] = 0
}, XG.CTMLoader.prototype.load = function(e, t, r) {
    var a = this,
        i = void 0 !== r && void 0 !== r.offsets ? r.offsets : [0],
        o = void 0 !== r && void 0 !== r.callbackProgress ? r.callbackProgress : null,
        n = new XMLHttpRequest;
    n.onreadystatechange = function() {
        if (4 === n.readyState)
            if (200 === n.status || 0 === n.status) {
                var r = n.response,
                    o = function(e) {
                        e.onmessage = function(r) {
                            for (var i = r.data.f, o = 0; o < i.length; o++) {
                                var n = i[o];
                                a.createModelBuffers(n, t)
                            }
                            Date.now();
                            a.releaseWorker(e)
                        };
                        Date.now();
                        e.postMessage = e.webkitPostMessage || e.postMessage, e.postMessage({
                            data: r,
                            offsets: i
                        }, [r])
                    };
                a.getWorker(o)
            } else console.error("XG.CTMLoader: Couldn't load [" + e + "] [" + n.status + "]")
    }, o && (n.onprogress = function(t) {
        var r = {
            url: e,
            loaded: t.loaded,
            total: t.total
        };
        o(r)
    }), n.open("GET", e, !0), n.responseType = "arraybuffer", n.send(null)
}, XG.CTMLoader.prototype.createModelBuffers = function(e, t) {
    var r = function() {
        var t = this,
            r = !0;
        XG.Geometry.call(this);
        var a, i, o = e.body.indices,
            n = e.body.vertices,
            s = e.body.normals;
        if (void 0 !== e.body.uvMaps && e.body.uvMaps.length > 0 && (a = e.body.uvMaps[0].uv), void 0 !== e.body.attrMaps && e.body.attrMaps.length > 0 && "Color" === e.body.attrMaps[0].name && (i = e.body.attrMaps[0].attr), r) {
            var l, h, d, u = new Uint32Array(o.length),
                c = new Float32Array(n.length);
            s && (l = new Float32Array(s.length)), a && (h = new Float32Array(a.length)), i && (d = new Float32Array(i.length));
            for (var f, p, m, v = {}, g = 0, S = function(e) {
                    if (void 0 === v[e]) {
                        v[e] = g;
                        var t = 3 * e,
                            r = 3 * e + 1,
                            o = 3 * e + 2,
                            u = 3 * g,
                            f = 3 * g + 1,
                            p = 3 * g + 2;
                        c[u] = n[t], c[f] = n[r], c[p] = n[o], s && (l[u] = s[t], l[f] = s[r], l[p] = s[o]), a && (h[2 * g] = a[2 * e], h[2 * g + 1] = a[2 * e + 1]), i && (d[4 * g] = i[4 * e], d[4 * g + 1] = i[4 * e + 1], d[4 * g + 2] = i[4 * e + 2], d[4 * g + 3] = i[4 * e + 3]), g += 1
                    }
                }, x = 0; x < o.length; x += 3) f = o[x], p = o[x + 1], m = o[x + 2], S(f), S(p), S(m), u[x] = v[f], u[x + 1] = v[p], u[x + 2] = v[m];
            o = u, n = c, s && (s = l), a && (a = h), i && (i = d)
        }
        t.offsets = [];
        for (var G = o, M = 0, y = n.length, w = 0, D = y, x = 0; x < G.length;) {
            for (var X = 0; 3 > X; ++X) {
                var C = G[x++];
                y > C && (y = C), C > w && (w = C)
            }
            if (w - y > 65534) {
                x -= 3;
                for (var A = M; x > A; ++A) G[A] -= D;
                t.offsets.push({
                    start: M,
                    count: x - M,
                    index: D
                }), M = x, y = n.length, w = 0
            }
            D = y
        }
        for (var A = M; x > A; ++A) G[A] -= D;
        t.offsets.push({
            start: M,
            count: x - M,
            index: D
        });
        var _ = new Uint16Array(o);
        t.addAttributeArray("index", _, 1), t.addAttributeArray("position", n, 3), void 0 !== s && t.addAttributeArray("normal", s, 3), void 0 !== a && t.addAttributeArray("uv", a, 2), void 0 !== i && t.addAttributeArray("color", i, 4)
    };
    r.prototype = Object.create(XG.Geometry.prototype);
    var a = new r;
    void 0 === a.attributes.normal && a.computeVertexNormals(), t(a)
}, XG.CTMLoader.workerString = ["var LZMA = LZMA || {};", "", "LZMA.OutWindow = function(){", "  this._windowSize = 0;", "};", "", "LZMA.OutWindow.prototype.create = function(windowSize){", "  if ( (!this._buffer) || (this._windowSize !== windowSize) ){", "    this._buffer = [];", "  }", "  this._windowSize = windowSize;", "  this._pos = 0;", "  this._streamPos = 0;", "};", "", "LZMA.OutWindow.prototype.flush = function(){", "  var size = this._pos - this._streamPos;", "  if (size !== 0){", "    while(size --){", "      this._stream.writeByte(this._buffer[this._streamPos ++]);", "    }", "    if (this._pos >= this._windowSize){", "      this._pos = 0;", "    }", "    this._streamPos = this._pos;", "  }", "};", "", "LZMA.OutWindow.prototype.releaseStream = function(){", "  this.flush();", "  this._stream = null;", "};", "", "LZMA.OutWindow.prototype.setStream = function(stream){", "  this.releaseStream();", "  this._stream = stream;", "};", "", "LZMA.OutWindow.prototype.init = function(solid){", "  if (!solid){", "    this._streamPos = 0;", "    this._pos = 0;", "  }", "};", "", "LZMA.OutWindow.prototype.copyBlock = function(distance, len){", "  var pos = this._pos - distance - 1;", "  if (pos < 0){", "    pos += this._windowSize;", "  }", "  while(len --){", "    if (pos >= this._windowSize){", "      pos = 0;", "    }", "    this._buffer[this._pos ++] = this._buffer[pos ++];", "    if (this._pos >= this._windowSize){", "      this.flush();", "    }", "  }", "};", "", "LZMA.OutWindow.prototype.putByte = function(b){", "  this._buffer[this._pos ++] = b;", "  if (this._pos >= this._windowSize){", "    this.flush();", "  }", "};", "", "LZMA.OutWindow.prototype.getByte = function(distance){", "  var pos = this._pos - distance - 1;", "  if (pos < 0){", "    pos += this._windowSize;", "  }", "  return this._buffer[pos];", "};", "", "LZMA.RangeDecoder = function(){", "};", "", "LZMA.RangeDecoder.prototype.setStream = function(stream){", "  this._stream = stream;", "};", "", "LZMA.RangeDecoder.prototype.releaseStream = function(){", "  this._stream = null;", "};", "", "LZMA.RangeDecoder.prototype.init = function(){", "  var i = 5;", "", "  this._code = 0;", "  this._range = -1;", "", "  while(i --){", "    this._code = (this._code << 8) | this._stream.readByte();", "  }", "};", "", "LZMA.RangeDecoder.prototype.decodeDirectBits = function(numTotalBits){", "  var result = 0, i = numTotalBits, t;", "", "  while(i --){", "    this._range >>>= 1;", "    t = (this._code - this._range) >>> 31;", "    this._code -= this._range & (t - 1);", "    result = (result << 1) | (1 - t);", "", "    if ( (this._range & 0xff000000) === 0){", "      this._code = (this._code << 8) | this._stream.readByte();", "      this._range <<= 8;", "    }", "  }", "", "  return result;", "};", "", "LZMA.RangeDecoder.prototype.decodeBit = function(probs, index){", "  var prob = probs[index],", "      newBound = (this._range >>> 11) * prob;", "", "  if ( (this._code ^ 0x80000000) < (newBound ^ 0x80000000) ){", "    this._range = newBound;", "    probs[index] += (2048 - prob) >>> 5;", "    if ( (this._range & 0xff000000) === 0){", "      this._code = (this._code << 8) | this._stream.readByte();", "      this._range <<= 8;", "    }", "    return 0;", "  }", "", "  this._range -= newBound;", "  this._code -= newBound;", "  probs[index] -= prob >>> 5;", "  if ( (this._range & 0xff000000) === 0){", "    this._code = (this._code << 8) | this._stream.readByte();", "    this._range <<= 8;", "  }", "  return 1;", "};", "", "LZMA.initBitModels = function(probs, len){", "  while(len --){", "    probs[len] = 1024;", "  }", "};", "", "LZMA.BitTreeDecoder = function(numBitLevels){", "  this._models = [];", "  this._numBitLevels = numBitLevels;", "};", "", "LZMA.BitTreeDecoder.prototype.init = function(){", "  LZMA.initBitModels(this._models, 1 << this._numBitLevels);", "};", "", "LZMA.BitTreeDecoder.prototype.decode = function(rangeDecoder){", "  var m = 1, i = this._numBitLevels;", "", "  while(i --){", "    m = (m << 1) | rangeDecoder.decodeBit(this._models, m);", "  }", "  return m - (1 << this._numBitLevels);", "};", "", "LZMA.BitTreeDecoder.prototype.reverseDecode = function(rangeDecoder){", "  var m = 1, symbol = 0, i = 0, bit;", "", "  for (; i < this._numBitLevels; ++ i){", "    bit = rangeDecoder.decodeBit(this._models, m);", "    m = (m << 1) | bit;", "    symbol |= bit << i;", "  }", "  return symbol;", "};", "", "LZMA.reverseDecode2 = function(models, startIndex, rangeDecoder, numBitLevels){", "  var m = 1, symbol = 0, i = 0, bit;", "", "  for (; i < numBitLevels; ++ i){", "    bit = rangeDecoder.decodeBit(models, startIndex + m);", "    m = (m << 1) | bit;", "    symbol |= bit << i;", "  }", "  return symbol;", "};", "", "LZMA.LenDecoder = function(){", "  this._choice = [];", "  this._lowCoder = [];", "  this._midCoder = [];", "  this._highCoder = new LZMA.BitTreeDecoder(8);", "  this._numPosStates = 0;", "};", "", "LZMA.LenDecoder.prototype.create = function(numPosStates){", "  for (; this._numPosStates < numPosStates; ++ this._numPosStates){", "    this._lowCoder[this._numPosStates] = new LZMA.BitTreeDecoder(3);", "    this._midCoder[this._numPosStates] = new LZMA.BitTreeDecoder(3);", "  }", "};", "", "LZMA.LenDecoder.prototype.init = function(){", "  var i = this._numPosStates;", "  LZMA.initBitModels(this._choice, 2);", "  while(i --){", "    this._lowCoder[i].init();", "    this._midCoder[i].init();", "  }", "  this._highCoder.init();", "};", "", "LZMA.LenDecoder.prototype.decode = function(rangeDecoder, posState){", "  if (rangeDecoder.decodeBit(this._choice, 0) === 0){", "    return this._lowCoder[posState].decode(rangeDecoder);", "  }", "  if (rangeDecoder.decodeBit(this._choice, 1) === 0){", "    return 8 + this._midCoder[posState].decode(rangeDecoder);", "  }", "  return 16 + this._highCoder.decode(rangeDecoder);", "};", "", "LZMA.Decoder2 = function(){", "  this._decoders = [];", "};", "", "LZMA.Decoder2.prototype.init = function(){", "  LZMA.initBitModels(this._decoders, 0x300);", "};", "", "LZMA.Decoder2.prototype.decodeNormal = function(rangeDecoder){", "  var symbol = 1;", "", "  do{", "    symbol = (symbol << 1) | rangeDecoder.decodeBit(this._decoders, symbol);", "  }while(symbol < 0x100);", "", "  return symbol & 0xff;", "};", "", "LZMA.Decoder2.prototype.decodeWithMatchByte = function(rangeDecoder, matchByte){", "  var symbol = 1, matchBit, bit;", "", "  do{", "    matchBit = (matchByte >> 7) & 1;", "    matchByte <<= 1;", "    bit = rangeDecoder.decodeBit(this._decoders, ( (1 + matchBit) << 8) + symbol);", "    symbol = (symbol << 1) | bit;", "    if (matchBit !== bit){", "      while(symbol < 0x100){", "        symbol = (symbol << 1) | rangeDecoder.decodeBit(this._decoders, symbol);", "      }", "      break;", "    }", "  }while(symbol < 0x100);", "", "  return symbol & 0xff;", "};", "", "LZMA.LiteralDecoder = function(){", "};", "", "LZMA.LiteralDecoder.prototype.create = function(numPosBits, numPrevBits){", "  var i;", "", "  if (this._coders", "    && (this._numPrevBits === numPrevBits)", "    && (this._numPosBits === numPosBits) ){", "    return;", "  }", "  this._numPosBits = numPosBits;", "  this._posMask = (1 << numPosBits) - 1;", "  this._numPrevBits = numPrevBits;", "", "  this._coders = [];", "", "  i = 1 << (this._numPrevBits + this._numPosBits);", "  while(i --){", "    this._coders[i] = new LZMA.Decoder2();", "  }", "};", "", "LZMA.LiteralDecoder.prototype.init = function(){", "  var i = 1 << (this._numPrevBits + this._numPosBits);", "  while(i --){", "    this._coders[i].init();", "  }", "};", "", "LZMA.LiteralDecoder.prototype.getDecoder = function(pos, prevByte){", "  return this._coders[( (pos & this._posMask) << this._numPrevBits)", "    + ( (prevByte & 0xff) >>> (8 - this._numPrevBits) )];", "};", "", "LZMA.Decoder = function(){", "  this._outWindow = new LZMA.OutWindow();", "  this._rangeDecoder = new LZMA.RangeDecoder();", "  this._isMatchDecoders = [];", "  this._isRepDecoders = [];", "  this._isRepG0Decoders = [];", "  this._isRepG1Decoders = [];", "  this._isRepG2Decoders = [];", "  this._isRep0LongDecoders = [];", "  this._posSlotDecoder = [];", "  this._posDecoders = [];", "  this._posAlignDecoder = new LZMA.BitTreeDecoder(4);", "  this._lenDecoder = new LZMA.LenDecoder();", "  this._repLenDecoder = new LZMA.LenDecoder();", "  this._literalDecoder = new LZMA.LiteralDecoder();", "  this._dictionarySize = -1;", "  this._dictionarySizeCheck = -1;", "", "  this._posSlotDecoder[0] = new LZMA.BitTreeDecoder(6);", "  this._posSlotDecoder[1] = new LZMA.BitTreeDecoder(6);", "  this._posSlotDecoder[2] = new LZMA.BitTreeDecoder(6);", "  this._posSlotDecoder[3] = new LZMA.BitTreeDecoder(6);", "};", "", "LZMA.Decoder.prototype.setDictionarySize = function(dictionarySize){", "  if (dictionarySize < 0){", "    return false;", "  }", "  if (this._dictionarySize !== dictionarySize){", "    this._dictionarySize = dictionarySize;", "    this._dictionarySizeCheck = Math.max(this._dictionarySize, 1);", "    this._outWindow.create( Math.max(this._dictionarySizeCheck, 4096) );", "  }", "  return true;", "};", "", "LZMA.Decoder.prototype.setLcLpPb = function(lc, lp, pb){", "  var numPosStates = 1 << pb;", "", "  if (lc > 8 || lp > 4 || pb > 4){", "    return false;", "  }", "", "  this._literalDecoder.create(lp, lc);", "", "  this._lenDecoder.create(numPosStates);", "  this._repLenDecoder.create(numPosStates);", "  this._posStateMask = numPosStates - 1;", "", "  return true;", "};", "", "LZMA.Decoder.prototype.init = function(){", "  var i = 4;", "", "  this._outWindow.init(false);", "", "  LZMA.initBitModels(this._isMatchDecoders, 192);", "  LZMA.initBitModels(this._isRep0LongDecoders, 192);", "  LZMA.initBitModels(this._isRepDecoders, 12);", "  LZMA.initBitModels(this._isRepG0Decoders, 12);", "  LZMA.initBitModels(this._isRepG1Decoders, 12);", "  LZMA.initBitModels(this._isRepG2Decoders, 12);", "  LZMA.initBitModels(this._posDecoders, 114);", "", "  this._literalDecoder.init();", "", "  while(i --){", "    this._posSlotDecoder[i].init();", "  }", "", "  this._lenDecoder.init();", "  this._repLenDecoder.init();", "  this._posAlignDecoder.init();", "  this._rangeDecoder.init();", "};", "", "LZMA.Decoder.prototype.decode = function(inStream, outStream, outSize){", "  var state = 0, rep0 = 0, rep1 = 0, rep2 = 0, rep3 = 0, nowPos64 = 0, prevByte = 0,", "      posState, decoder2, len, distance, posSlot, numDirectBits;", "", "  this._rangeDecoder.setStream(inStream);", "  this._outWindow.setStream(outStream);", "", "  this.init();", "", "  while(outSize < 0 || nowPos64 < outSize){", "    posState = nowPos64 & this._posStateMask;", "", "    if (this._rangeDecoder.decodeBit(this._isMatchDecoders, (state << 4) + posState) === 0){", "      decoder2 = this._literalDecoder.getDecoder(nowPos64 ++, prevByte);", "", "      if (state >= 7){", "        prevByte = decoder2.decodeWithMatchByte(this._rangeDecoder, this._outWindow.getByte(rep0) );", "      }else{", "        prevByte = decoder2.decodeNormal(this._rangeDecoder);", "      }", "      this._outWindow.putByte(prevByte);", "", "      state = state < 4? 0: state - (state < 10? 3: 6);", "", "    }else{", "", "      if (this._rangeDecoder.decodeBit(this._isRepDecoders, state) === 1){", "        len = 0;", "        if (this._rangeDecoder.decodeBit(this._isRepG0Decoders, state) === 0){", "          if (this._rangeDecoder.decodeBit(this._isRep0LongDecoders, (state << 4) + posState) === 0){", "            state = state < 7? 9: 11;", "            len = 1;", "          }", "        }else{", "          if (this._rangeDecoder.decodeBit(this._isRepG1Decoders, state) === 0){", "            distance = rep1;", "          }else{", "            if (this._rangeDecoder.decodeBit(this._isRepG2Decoders, state) === 0){", "              distance = rep2;", "            }else{", "              distance = rep3;", "              rep3 = rep2;", "            }", "            rep2 = rep1;", "          }", "          rep1 = rep0;", "          rep0 = distance;", "        }", "        if (len === 0){", "          len = 2 + this._repLenDecoder.decode(this._rangeDecoder, posState);", "          state = state < 7? 8: 11;", "        }", "      }else{", "        rep3 = rep2;", "        rep2 = rep1;", "        rep1 = rep0;", "", "        len = 2 + this._lenDecoder.decode(this._rangeDecoder, posState);", "        state = state < 7? 7: 10;", "", "        posSlot = this._posSlotDecoder[len <= 5? len - 2: 3].decode(this._rangeDecoder);", "        if (posSlot >= 4){", "", "          numDirectBits = (posSlot >> 1) - 1;", "          rep0 = (2 | (posSlot & 1) ) << numDirectBits;", "", "          if (posSlot < 14){", "            rep0 += LZMA.reverseDecode2(this._posDecoders,", "                rep0 - posSlot - 1, this._rangeDecoder, numDirectBits);", "          }else{", "            rep0 += this._rangeDecoder.decodeDirectBits(numDirectBits - 4) << 4;", "            rep0 += this._posAlignDecoder.reverseDecode(this._rangeDecoder);", "            if (rep0 < 0){", "              if (rep0 === -1){", "                break;", "              }", "              return false;", "            }", "          }", "        }else{", "          rep0 = posSlot;", "        }", "      }", "", "      if (rep0 >= nowPos64 || rep0 >= this._dictionarySizeCheck){", "        return false;", "      }", "", "      this._outWindow.copyBlock(rep0, len);", "      nowPos64 += len;", "      prevByte = this._outWindow.getByte(0);", "    }", "  }", "", "  this._outWindow.flush();", "  this._outWindow.releaseStream();", "  this._rangeDecoder.releaseStream();", "", "  return true;", "};", "", "LZMA.Decoder.prototype.setDecoderProperties = function(properties){", "  var value, lc, lp, pb, dictionarySize;", "", "  if (properties.size < 5){", "    return false;", "  }", "", "  value = properties.readByte();", "  lc = value % 9;", "  value = ~~(value / 9);", "  lp = value % 5;", "  pb = ~~(value / 5);", "", "  if ( !this.setLcLpPb(lc, lp, pb) ){", "    return false;", "  }", "", "  dictionarySize = properties.readByte();", "  dictionarySize |= properties.readByte() << 8;", "  dictionarySize |= properties.readByte() << 16;", "  dictionarySize += properties.readByte() * 16777216;", "", "  return this.setDictionarySize(dictionarySize);", "};", "", "LZMA.decompress = function(properties, inStream, outStream, outSize){", "  var decoder = new LZMA.Decoder();", "", "  if ( !decoder.setDecoderProperties(properties) ){", '    throw "Incorrect stream properties";', "  }", "", "  if ( !decoder.decode(inStream, outStream, outSize) ){", '    throw "Error in data stream";', "  }", "", "  return true;", "};", "", "LZMA.decompressFile = function(inStream, outStream){", "  var decoder = new LZMA.Decoder(), outSize;", "", "  if ( !decoder.setDecoderProperties(inStream) ){", '    throw "Incorrect stream properties";', "  }", "", "  outSize = inStream.readByte();", "  outSize |= inStream.readByte() << 8;", "  outSize |= inStream.readByte() << 16;", "  outSize += inStream.readByte() * 16777216;", "", "  inStream.readByte();", "  inStream.readByte();", "  inStream.readByte();", "  inStream.readByte();", "", "  if ( !decoder.decode(inStream, outStream, outSize) ){", '    throw "Error in data stream";', "  }", "", "  return true;", "};", "", "var CTM = CTM || {};", "", "CTM.CompressionMethod = {", "  RAW: 0x00574152,", "  MG1: 0x0031474d,", "  MG2: 0x0032474d", "};", "", "CTM.Flags = {", "  NORMALS: 0x00000001", "};", "", "CTM.File = function(stream){", "  this.load(stream);", "};", "", "CTM.File.prototype.load = function(stream){", "  this.header = new CTM.FileHeader(stream);", "", "  this.body = new CTM.FileBody(this.header);", "", "  this.getReader().read(stream, this.body);", "};", "", "CTM.File.prototype.getReader = function(){", "  var reader;", "", "  switch(this.header.compressionMethod){", "    case CTM.CompressionMethod.RAW:", "      reader = new CTM.ReaderRAW();", "      break;", "    case CTM.CompressionMethod.MG1:", "      reader = new CTM.ReaderMG1();", "      break;", "    case CTM.CompressionMethod.MG2:", "      reader = new CTM.ReaderMG2();", "      break;", "  }", "", "  return reader;", "};", "", "CTM.FileHeader = function(stream){", '  stream.readInt32(); //magic "OCTM"', "  this.fileFormat = stream.readInt32();", "  this.compressionMethod = stream.readInt32();", "  this.vertexCount = stream.readInt32();", "  this.triangleCount = stream.readInt32();", "  this.uvMapCount = stream.readInt32();", "  this.attrMapCount = stream.readInt32();", "  this.flags = stream.readInt32();", "  this.comment = stream.readString();", "};", "", "CTM.FileHeader.prototype.hasNormals = function(){", "  return this.flags & CTM.Flags.NORMALS;", "};", "", "CTM.FileBody = function(header){", "  var i = header.triangleCount * 3,", "      v = header.vertexCount * 3,", "      n = header.hasNormals()? header.vertexCount * 3: 0,", "      u = header.vertexCount * 2,", "      a = header.vertexCount * 4,", "      j = 0;", "", "  var data = new ArrayBuffer(", "    (i + v + n + (u * header.uvMapCount) + (a * header.attrMapCount) ) * 4);", "", "  this.indices = new Uint32Array(data, 0, i);", "", "  this.vertices = new Float32Array(data, i * 4, v);", "", "  if ( header.hasNormals() ){", "    this.normals = new Float32Array(data, (i + v) * 4, n);", "  }", "", "  if (header.uvMapCount){", "    this.uvMaps = [];", "    for (j = 0; j < header.uvMapCount; ++ j){", "      this.uvMaps[j] = {uv: new Float32Array(data,", "        (i + v + n + (j * u) ) * 4, u) };", "    }", "  }", "", "  if (header.attrMapCount){", "    this.attrMaps = [];", "    for (j = 0; j < header.attrMapCount; ++ j){", "      this.attrMaps[j] = {attr: new Float32Array(data,", "        (i + v + n + (u * header.uvMapCount) + (j * a) ) * 4, a) };", "    }", "  }", "};", "", "CTM.FileMG2Header = function(stream){", '  stream.readInt32(); //magic "MG2H"', "  this.vertexPrecision = stream.readFloat32();", "  this.normalPrecision = stream.readFloat32();", "  this.lowerBoundx = stream.readFloat32();", "  this.lowerBoundy = stream.readFloat32();", "  this.lowerBoundz = stream.readFloat32();", "  this.higherBoundx = stream.readFloat32();", "  this.higherBoundy = stream.readFloat32();", "  this.higherBoundz = stream.readFloat32();", "  this.divx = stream.readInt32();", "  this.divy = stream.readInt32();", "  this.divz = stream.readInt32();", "", "  this.sizex = (this.higherBoundx - this.lowerBoundx) / this.divx;", "  this.sizey = (this.higherBoundy - this.lowerBoundy) / this.divy;", "  this.sizez = (this.higherBoundz - this.lowerBoundz) / this.divz;", "};", "", "CTM.ReaderRAW = function(){", "};", "", "CTM.ReaderRAW.prototype.read = function(stream, body){", "  this.readIndices(stream, body.indices);", "  this.readVertices(stream, body.vertices);", "", "  if (body.normals){", "    this.readNormals(stream, body.normals);", "  }", "  if (body.uvMaps){", "    this.readUVMaps(stream, body.uvMaps);", "  }", "  if (body.attrMaps){", "    this.readAttrMaps(stream, body.attrMaps);", "  }", "};", "", "CTM.ReaderRAW.prototype.readIndices = function(stream, indices){", '  stream.readInt32(); //magic "INDX"', "  stream.readArrayInt32(indices);", "};", "", "CTM.ReaderRAW.prototype.readVertices = function(stream, vertices){", '  stream.readInt32(); //magic "VERT"', "  stream.readArrayFloat32(vertices);", "};", "", "CTM.ReaderRAW.prototype.readNormals = function(stream, normals){", '  stream.readInt32(); //magic "NORM"', "  stream.readArrayFloat32(normals);", "};", "", "CTM.ReaderRAW.prototype.readUVMaps = function(stream, uvMaps){", "  var i = 0;", "  for (; i < uvMaps.length; ++ i){", '    stream.readInt32(); //magic "TEXC"', "", "    uvMaps[i].name = stream.readString();", "    uvMaps[i].filename = stream.readString();", "    stream.readArrayFloat32(uvMaps[i].uv);", "  }", "};", "", "CTM.ReaderRAW.prototype.readAttrMaps = function(stream, attrMaps){", "  var i = 0;", "  for (; i < attrMaps.length; ++ i){", '    stream.readInt32(); //magic "ATTR"', "", "    attrMaps[i].name = stream.readString();", "    stream.readArrayFloat32(attrMaps[i].attr);", "  }", "};", "", "CTM.ReaderMG1 = function(){", "};", "", "CTM.ReaderMG1.prototype.read = function(stream, body){", "  this.readIndices(stream, body.indices);", "  this.readVertices(stream, body.vertices);", "", "  if (body.normals){", "    this.readNormals(stream, body.normals);", "  }", "  if (body.uvMaps){", "    this.readUVMaps(stream, body.uvMaps);", "  }", "  if (body.attrMaps){", "    this.readAttrMaps(stream, body.attrMaps);", "  }", "};", "", "CTM.ReaderMG1.prototype.readIndices = function(stream, indices){", '  stream.readInt32(); //magic "INDX"', "  stream.readInt32(); //packed size", "", "  var interleaved = new CTM.InterleavedStream(indices, 3);", "  LZMA.decompress(stream, stream, interleaved, interleaved.data.length);", "", "  CTM.restoreIndices(indices, indices.length);", "};", "", "CTM.ReaderMG1.prototype.readVertices = function(stream, vertices){", '  stream.readInt32(); //magic "VERT"', "  stream.readInt32(); //packed size", "", "  var interleaved = new CTM.InterleavedStream(vertices, 1);", "  LZMA.decompress(stream, stream, interleaved, interleaved.data.length);", "};", "", "CTM.ReaderMG1.prototype.readNormals = function(stream, normals){", '  stream.readInt32(); //magic "NORM"', "  stream.readInt32(); //packed size", "", "  var interleaved = new CTM.InterleavedStream(normals, 3);", "  LZMA.decompress(stream, stream, interleaved, interleaved.data.length);", "};", "", "CTM.ReaderMG1.prototype.readUVMaps = function(stream, uvMaps){", "  var i = 0;", "  for (; i < uvMaps.length; ++ i){", '    stream.readInt32(); //magic "TEXC"', "", "    uvMaps[i].name = stream.readString();", "    uvMaps[i].filename = stream.readString();", "", "    stream.readInt32(); //packed size", "", "    var interleaved = new CTM.InterleavedStream(uvMaps[i].uv, 2);", "    LZMA.decompress(stream, stream, interleaved, interleaved.data.length);", "  }", "};", "", "CTM.ReaderMG1.prototype.readAttrMaps = function(stream, attrMaps){", "  var i = 0;", "  for (; i < attrMaps.length; ++ i){", '    stream.readInt32(); //magic "ATTR"', "", "    attrMaps[i].name = stream.readString();", "", "    stream.readInt32(); //packed size", "", "    var interleaved = new CTM.InterleavedStream(attrMaps[i].attr, 4);", "    LZMA.decompress(stream, stream, interleaved, interleaved.data.length);", "  }", "};", "", "CTM.ReaderMG2 = function(){", "};", "", "CTM.ReaderMG2.prototype.read = function(stream, body){", "  this.MG2Header = new CTM.FileMG2Header(stream);", "", "  this.readVertices(stream, body.vertices);", "  this.readIndices(stream, body.indices);", "", "  if (body.normals){", "    this.readNormals(stream, body);", "  }", "  if (body.uvMaps){", "    this.readUVMaps(stream, body.uvMaps);", "  }", "  if (body.attrMaps){", "    this.readAttrMaps(stream, body.attrMaps);", "  }", "};", "", "CTM.ReaderMG2.prototype.readVertices = function(stream, vertices){", '  stream.readInt32(); //magic "VERT"', "  stream.readInt32(); //packed size", "", "  var interleaved = new CTM.InterleavedStream(vertices, 3);", "  LZMA.decompress(stream, stream, interleaved, interleaved.data.length);", "", "  var gridIndices = this.readGridIndices(stream, vertices);", "", "  CTM.restoreVertices(vertices, this.MG2Header, gridIndices, this.MG2Header.vertexPrecision);", "};", "", "CTM.ReaderMG2.prototype.readGridIndices = function(stream, vertices){", '  stream.readInt32(); //magic "GIDX"', "  stream.readInt32(); //packed size", "", "  var gridIndices = new Uint32Array(vertices.length / 3);", "", "  var interleaved = new CTM.InterleavedStream(gridIndices, 1);", "  LZMA.decompress(stream, stream, interleaved, interleaved.data.length);", "", "  CTM.restoreGridIndices(gridIndices, gridIndices.length);", "", "  return gridIndices;", "};", "", "CTM.ReaderMG2.prototype.readIndices = function(stream, indices){", '  stream.readInt32(); //magic "INDX"', "  stream.readInt32(); //packed size", "", "  var interleaved = new CTM.InterleavedStream(indices, 3);", "  LZMA.decompress(stream, stream, interleaved, interleaved.data.length);", "", "  CTM.restoreIndices(indices, indices.length);", "};", "", "CTM.ReaderMG2.prototype.readNormals = function(stream, body){", '  stream.readInt32(); //magic "NORM"', "  stream.readInt32(); //packed size", "", "  var interleaved = new CTM.InterleavedStream(body.normals, 3);", "  LZMA.decompress(stream, stream, interleaved, interleaved.data.length);", "", "  var smooth = CTM.calcSmoothNormals(body.indices, body.vertices);", "", "  CTM.restoreNormals(body.normals, smooth, this.MG2Header.normalPrecision);", "};", "", "CTM.ReaderMG2.prototype.readUVMaps = function(stream, uvMaps){", "  var i = 0;", "  for (; i < uvMaps.length; ++ i){", '    stream.readInt32(); //magic "TEXC"', "", "    uvMaps[i].name = stream.readString();", "    uvMaps[i].filename = stream.readString();", "", "    var precision = stream.readFloat32();", "", "    stream.readInt32(); //packed size", "", "    var interleaved = new CTM.InterleavedStream(uvMaps[i].uv, 2);", "    LZMA.decompress(stream, stream, interleaved, interleaved.data.length);", "", "    CTM.restoreMap(uvMaps[i].uv, 2, precision);", "  }", "};", "", "CTM.ReaderMG2.prototype.readAttrMaps = function(stream, attrMaps){", "  var i = 0;", "  for (; i < attrMaps.length; ++ i){", '    stream.readInt32(); //magic "ATTR"', "", "    attrMaps[i].name = stream.readString();", "", "    var precision = stream.readFloat32();", "", "    stream.readInt32(); //packed size", "", "    var interleaved = new CTM.InterleavedStream(attrMaps[i].attr, 4);", "    LZMA.decompress(stream, stream, interleaved, interleaved.data.length);", "", "    CTM.restoreMap(attrMaps[i].attr, 4, precision);", "  }", "};", "", "CTM.restoreIndices = function(indices, len){", "  var i = 3;", "  if (len > 0){", "    indices[2] += indices[0];", "    indices[1] += indices[0];", "  }", "  for (; i < len; i += 3){", "    indices[i] += indices[i - 3];", "", "    if (indices[i] === indices[i - 3]){", "      indices[i + 1] += indices[i - 2];", "    }else{", "      indices[i + 1] += indices[i];", "    }", "", "    indices[i + 2] += indices[i];", "  }", "};", "", "CTM.restoreGridIndices = function(gridIndices, len){", "  var i = 1;", "  for (; i < len; ++ i){", "    gridIndices[i] += gridIndices[i - 1];", "  }", "};", "", "CTM.restoreVertices = function(vertices, grid, gridIndices, precision){", "  var gridIdx, delta, x, y, z,", "      intVertices = new Uint32Array(vertices.buffer, vertices.byteOffset, vertices.length),", "      ydiv = grid.divx, zdiv = ydiv * grid.divy,", "      prevGridIdx = 0x7fffffff, prevDelta = 0,", "      i = 0, j = 0, len = gridIndices.length;", "", "  for (; i < len; j += 3){", "    x = gridIdx = gridIndices[i ++];", "", "    z = ~~(x / zdiv);", "    x -= ~~(z * zdiv);", "    y = ~~(x / ydiv);", "    x -= ~~(y * ydiv);", "", "    delta = intVertices[j];", "    if (gridIdx === prevGridIdx){", "      delta += prevDelta;", "    }", "", "    vertices[j]     = grid.lowerBoundx +", "      x * grid.sizex + precision * delta;", "    vertices[j + 1] = grid.lowerBoundy +", "      y * grid.sizey + precision * intVertices[j + 1];", "    vertices[j + 2] = grid.lowerBoundz +", "      z * grid.sizez + precision * intVertices[j + 2];", "", "    prevGridIdx = gridIdx;", "    prevDelta = delta;", "  }", "};", "", "CTM.restoreNormals = function(normals, smooth, precision){", "  var ro, phi, theta, sinPhi,", "      nx, ny, nz, by, bz, len,", "      intNormals = new Uint32Array(normals.buffer, normals.byteOffset, normals.length),", "      i = 0, k = normals.length,", "      PI_DIV_2 = 3.141592653589793238462643 * 0.5;", "", "  for (; i < k; i += 3){", "    ro = intNormals[i] * precision;", "    phi = intNormals[i + 1];", "", "    if (phi === 0){", "      normals[i]     = smooth[i]     * ro;", "      normals[i + 1] = smooth[i + 1] * ro;", "      normals[i + 2] = smooth[i + 2] * ro;", "    }else{", "", "      if (phi <= 4){", "        theta = (intNormals[i + 2] - 2) * PI_DIV_2;", "      }else{", "        theta = ( (intNormals[i + 2] * 4 / phi) - 2) * PI_DIV_2;", "      }", "", "      phi *= precision * PI_DIV_2;", "      sinPhi = ro * Math.sin(phi);", "", "      nx = sinPhi * Math.cos(theta);", "      ny = sinPhi * Math.sin(theta);", "      nz = ro * Math.cos(phi);", "", "      bz = smooth[i + 1];", "      by = smooth[i] - smooth[i + 2];", "", "      len = Math.sqrt(2 * bz * bz + by * by);", "      if (len > 1e-20){", "        by /= len;", "        bz /= len;", "      }", "", "      normals[i]     = smooth[i]     * nz +", "        (smooth[i + 1] * bz - smooth[i + 2] * by) * ny - bz * nx;", "      normals[i + 1] = smooth[i + 1] * nz -", "        (smooth[i + 2]      + smooth[i]   ) * bz  * ny + by * nx;", "      normals[i + 2] = smooth[i + 2] * nz +", "        (smooth[i]     * by + smooth[i + 1] * bz) * ny + bz * nx;", "    }", "  }", "};", "", "CTM.restoreMap = function(map, count, precision){", "  var delta, value,", "      intMap = new Uint32Array(map.buffer, map.byteOffset, map.length),", "      i = 0, j, len = map.length;", "", "  for (; i < count; ++ i){", "    delta = 0;", "", "    for (j = i; j < len; j += count){", "      value = intMap[j];", "", "      delta += value & 1? -( (value + 1) >> 1): value >> 1;", "", "      map[j] = delta * precision;", "    }", "  }", "};", "", "CTM.calcSmoothNormals = function(indices, vertices){", "  var smooth = new Float32Array(vertices.length),", "      indx, indy, indz, nx, ny, nz,", "      v1x, v1y, v1z, v2x, v2y, v2z, len,", "      i, k;", "", "  for (i = 0, k = indices.length; i < k;){", "    indx = indices[i ++] * 3;", "    indy = indices[i ++] * 3;", "    indz = indices[i ++] * 3;", "", "    v1x = vertices[indy]     - vertices[indx];", "    v2x = vertices[indz]     - vertices[indx];", "    v1y = vertices[indy + 1] - vertices[indx + 1];", "    v2y = vertices[indz + 1] - vertices[indx + 1];", "    v1z = vertices[indy + 2] - vertices[indx + 2];", "    v2z = vertices[indz + 2] - vertices[indx + 2];", "", "    nx = v1y * v2z - v1z * v2y;", "    ny = v1z * v2x - v1x * v2z;", "    nz = v1x * v2y - v1y * v2x;", "", "    len = Math.sqrt(nx * nx + ny * ny + nz * nz);", "    if (len > 1e-10){", "      nx /= len;", "      ny /= len;", "      nz /= len;", "    }", "", "    smooth[indx]     += nx;", "    smooth[indx + 1] += ny;", "    smooth[indx + 2] += nz;", "    smooth[indy]     += nx;", "    smooth[indy + 1] += ny;", "    smooth[indy + 2] += nz;", "    smooth[indz]     += nx;", "    smooth[indz + 1] += ny;", "    smooth[indz + 2] += nz;", "  }", "", "  for (i = 0, k = smooth.length; i < k; i += 3){", "    len = Math.sqrt(smooth[i] * smooth[i] +", "      smooth[i + 1] * smooth[i + 1] +", "      smooth[i + 2] * smooth[i + 2]);", "", "    if(len > 1e-10){", "      smooth[i]     /= len;", "      smooth[i + 1] /= len;", "      smooth[i + 2] /= len;", "    }", "  }", "", "  return smooth;", "};", "", "CTM.isLittleEndian = (function(){", "  var buffer = new ArrayBuffer(2),", "      bytes = new Uint8Array(buffer),", "      ints = new Uint16Array(buffer);", "", "  bytes[0] = 1;", "", "  return ints[0] === 1;", "}());", "", "CTM.InterleavedStream = function(data, count){", "  this.data = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);", "  this.offset = CTM.isLittleEndian? 3: 0;", "  this.count = count * 4;", "  this.len = this.data.length;", "};", "", "CTM.InterleavedStream.prototype.writeByte = function(value){", "  this.data[this.offset] = value;", "", "  this.offset += this.count;", "  if (this.offset >= this.len){", "", "    this.offset -= this.len - 4;", "    if (this.offset >= this.count){", "", "      this.offset -= this.count + (CTM.isLittleEndian? 1: -1);", "    }", "  }", "};", "", "CTM.Stream = function(data){", "  this.data = data;", "  this.chardata = new DataView(data);", "  this.offset = 0;", "};", "", "CTM.Stream.prototype.TWO_POW_MINUS23 = Math.pow(2, -23);", "", "CTM.Stream.prototype.TWO_POW_MINUS126 = Math.pow(2, -126);", "", "CTM.Stream.prototype.readByte = function(){", "  return this.chardata.getUint8(this.offset++);", "};", "", "CTM.Stream.prototype.readInt32 = function(){", "var v = this.chardata.getInt32(this.offset, CTM.isLittleEndian);", "this.offset += 4;", "return v;", "};", "", "CTM.Stream.prototype.readFloat32 = function(){", "var v = this.chardata.getFloat32(this.offset, CTM.isLittleEndian);", "this.offset += 4;", "return v;", "};", "", "CTM.Stream.prototype.readString = function(){", "  var len = this.readInt32();", "", "  this.offset += len;", "", "	var tmp = new Uint8Array(this.data,this.offset - len, len);", "	return String.fromCharCode.apply(null,tmp);", "};", "", "CTM.Stream.prototype.readArrayInt32 = function(array){", "  var i = 0, len = array.length;", "", "  while(i < len){", "    array[i ++] = this.readInt32();", "  }", "", "  return array;", "};", "", "CTM.Stream.prototype.readArrayFloat32 = function(array){", "  var i = 0, len = array.length;", "", "  while(i < len){", "    array[i ++] = this.readFloat32();", "  }", "", "  return array;", "};", "", "self.onmessage = function( event ) {", "var s = Date.now();", "", "	var files = [];", "", "	for ( var i = 0; i < event.data.offsets.length; i ++ ) {", "", "		var stream = new CTM.Stream( event.data.data );", "		stream.offset = event.data.offsets[ i ];", "", "		files[ i ] = new CTM.File( stream );", "", "	}", "", "var e = Date.now();", '	self.postMessage( {"f":files,"t":e-s} );', "", "}"].join("\n"), XG.JSONLoader = function(e) {
    XG.Loader.call(this, e), this.withCredentials = !1
}, XG.JSONLoader.prototype = Object.create(XG.Loader.prototype), XG.JSONLoader.prototype.load = function(e, t, r) {
    this.onLoadStart(), this.loadAjaxJSON(this, e, t, r)
}, XG.JSONLoader.prototype.loadAjaxJSON = function(e, t, r, a) {
    void 0 === a && (a = {});
    var i = a.texturePath ? a.texturePath : this.extractUrlBase(t),
        o = a.mergeMaterials,
        n = a.callbackProgress,
        s = new XMLHttpRequest,
        l = 0;
    s.onreadystatechange = function() {
        if (s.readyState === s.DONE)
            if (200 === s.status || 0 === s.status) {
                if (s.responseText) {
                    var a = JSON.parse(s.responseText);
                    e.createModel(a, r, i, o)
                } else console.warn("XG.JSONLoader: [" + t + "] seems to be unreachable or file there is empty");
                e.onLoadComplete()
            } else console.error("XG.JSONLoader: Couldn't load [" + t + "] [" + s.status + "]");
        else s.readyState === s.LOADING ? n && (0 === l && (l = s.getResponseHeader("Content-Length")), n({
            total: l,
            loaded: s.responseText.length
        })) : s.readyState === s.HEADERS_RECEIVED && (l = s.getResponseHeader("Content-Length"))
    }, s.open("GET", t, !0), s.withCredentials = this.withCredentials, s.send(null)
}, XG.JSONLoader.prototype.generateMaterialChunks = function(e, t, r) {
    function a(e, t) {
        return e & 1 << t
    }
    for (var i, o, n, s, l, h, d, u, c, f, p, m, v = [], g = e.faces, S = g.length, x = 0; S > x;) {
        i = g[x++], o = a(i, 0), n = a(i, 1), l = a(i, 2), h = a(i, 3), d = a(i, 4), u = a(i, 5), c = a(i, 6), f = a(i, 7), o ? (p = 2, m = 4) : (p = 1, m = 3), x += m, n ? (s = g[x++], r && (s = 0)) : s = 0, void 0 === v[s] ? v[s] = {
            nTriangles: p,
            hasNormals: !1,
            hasUvs: !1,
            hasColors: !1,
            hasIndices: !1,
            indexOffset: 0,
            vertexOffset: 0,
            positionOffset: 0,
            normalOffset: 0,
            colorOffset: 0,
            uvOffset: [],
            skinWeightOffset: 0,
            skinIndexOffset: 0,
            indexMap: {}
        } : v[s].nTriangles += p;
        var G = v[s];
        l && (x += t), h && (x += t * m), d && (x += 1), u && (x += m), c && (x += 1), f && (x += m), (d || u) && (G.hasNormals |= !0), (l || h) && (G.hasUvs |= !0), (c || f) && (G.hasColors |= !0)
    }
    return v
}, XG.JSONLoader.prototype.generateGeometries = function(e, t, r) {
    for (var a = [], i = 0, o = e.length; o > i; i++) {
        var n = e[i];
        if (void 0 !== n) {
            var s = new XG.Geometry;
            s.numPrimitives = n.nTriangles, s.numVertices = 3 * n.nTriangles;
            var l = Uint16Array;
            if (s.numVertices > 65536 && (l = XG.elementIndexUintAvailable ? Uint32Array : null), null !== l && (s.addIndex("index", l, 3), s.offsets.push({
                    start: 0,
                    index: 0,
                    count: 3 * n.nTriangles
                }), n.hasIndices = !0), s.addAttribute("position", Float32Array, 3), n.hasUvs && s.addAttribute("uv", Float32Array, 2), n.hasColors && s.addAttribute("color", Float32Array, 3), s.addAttribute("normal", Float32Array, 3), n.hasUvs) {
                n.uvOffset[0] = 0;
                for (var h = 1; r > h; h++) s.addAttribute("uv" + (h + 1), Float32Array, 2), n.uvOffset[h] = 0
            }
            if (t.skinWeights && s.addAttribute("skinWeight", Float32Array, 4), t.skinIndices && s.addAttribute("skinIndex", Float32Array, 4), void 0 === t.morphTargets && (t.morphTargets = []), void 0 === t.morphColors && (t.morphColors = []), t.morphTargets.length > 0) {
                s.addVirtualAttribute("morphTarget0"), s.addVirtualAttribute("morphTarget1"), s.addVirtualAttribute("morphTarget2"), s.addVirtualAttribute("morphTarget3"), s.addVirtualAttribute("morphNormal0"), s.addVirtualAttribute("morphNormal1"), s.addVirtualAttribute("morphNormal2"), s.addVirtualAttribute("morphNormal3");
                for (var h = 0, d = t.morphTargets.length; d > h; h++) {
                    var u = t.morphTargets[h].name;
                    s.addUnattachedAttribute("mp_" + h, Float32Array, 3), s.addUnattachedAttribute("mn_" + h, Float32Array, 3), s.morphTargets[h] = {
                        name: u,
                        index: s.attributesList.length - 2
                    }
                }
            }
            if (t.morphColors.length > 0) {
                for (var h = 0, d = t.morphColors.length; d > h; h++) {
                    {
                        var c = t.morphColors[h],
                            u = c.name;
                        c.colors
                    }
                    s.addUnattachedAttribute("mc_" + h, Float32Array, 3), s.morphColors[h] = {
                        name: u,
                        index: s.attributesList.length - 1,
                        faceColors: !0
                    }
                }
                n.hasColors || (s.addVirtualAttribute("color"), s.virtualAttributes.color.mapped = s.attributesList[s.morphColors[0].index])
            }
            a[i] = s, s.bones = t.bones;
            var f = [];
            t.animations && (f = t.animations), t.animation && f.push(t.animation), s.animations = f
        }
    }
    return a
}, XG.JSONLoader.prototype.fillGeometries = function(e, t, r, a, i) {
    function o(e, t) {
        return e & 1 << t
    }

    function n(e, t, r, a, i) {
        e[t] = r[3 * a] * i, e[t + 1] = r[3 * a + 1] * i, e[t + 2] = r[3 * a + 2] * i
    }

    function s(e, t, r, a) {
        e[t] = r[3 * a], e[t + 1] = r[3 * a + 1], e[t + 2] = r[3 * a + 2]
    }

    function l(e, t, r, a, i) {
        ut = e[3 * t], ct = e[3 * t + 1], ft = e[3 * t + 2], pt.set(ut, ct, ft), ut = e[3 * r], ct = e[3 * r + 1], ft = e[3 * r + 2], mt.set(ut, ct, ft), ut = e[3 * a], ct = e[3 * a + 1], ft = e[3 * a + 2], vt.set(ut, ct, ft), gt.sub(vt, mt), St.sub(pt, mt), gt.crossSelf(St), i[3 * t] += xt[0], i[3 * t + 1] += xt[1], i[3 * t + 2] += xt[2], i[3 * r] += xt[0], i[3 * r + 1] += xt[1], i[3 * r + 2] += xt[2], i[3 * a] += xt[0], i[3 * a + 1] += xt[1], i[3 * a + 2] += xt[2]
    }
    var h, d, u, c, f, p, m, v, g, S, x, G, M, y, w, D, X, C, A, _, T, b, P, L, E, F, R, U, N, I, B, O, k, V, H, z, W, j, q, K, Z, Y, Q, J, $, et, tt = void 0 !== r.scale ? 1 / r.scale : 1,
        rt = new XG.Color,
        at = r.faces,
        it = r.vertices,
        ot = r.normals,
        nt = r.colors,
        st = r.skinWeights,
        lt = r.skinIndices,
        ht = new Float32Array(r.vertices.length);
    if (void 0 !== r.morphTargets) {
        var dt = [];
        for ($ = 0, et = r.morphTargets.length; et > $; $++) dt[$] = new Float32Array(r.vertices.length)
    }
    for (var ut, ct, ft, pt = new XG.Vector3, mt = new XG.Vector3, vt = new XG.Vector3, gt = new XG.Vector3, St = new XG.Vector3, xt = gt.data, Gt = 0, Mt = 0, yt = at.length; yt > Mt;) {
        f = at[Mt++], p = o(f, 0), m = o(f, 1), v = o(f, 2), g = o(f, 3), S = o(f, 4), x = o(f, 5), G = o(f, 6), M = o(f, 7), p ? (T = at[Mt++], b = at[Mt++], P = at[Mt++], L = at[Mt++], Y = 4) : (T = at[Mt++], b = at[Mt++], P = at[Mt++], Y = 3), m ? (c = at[Mt++], i && (c = 0)) : c = 0, F = t[c], E = e[c], F.hasIndices && (R = E.attributes.index.array), U = E.attributes.position.array, F.hasNormals && (N = E.attributes.normal.array), F.hasUvs && (I = E.attributes.uv.array), F.hasColors && (B = E.attributes.color.array), V = F.indexOffset, H = F.positionOffset, q = F.vertexOffset;
        var wt = F.indexMap;
        if (p ? (F.hasIndices ? (R[V] = q, R[V + 1] = q + 1, R[V + 2] = q + 3, R[V + 3] = q + 1, R[V + 4] = q + 2, R[V + 5] = q + 3, F.positionOffset += 12) : F.positionOffset += 18, F.indexOffset += 6, F.vertexOffset += 4) : (F.hasIndices && (R[V] = q, R[V + 1] = q + 1, R[V + 2] = q + 2), F.indexOffset += 3, F.vertexOffset += 3, F.positionOffset += 9), F.hasIndices) {
            for (n(U, H, it, T, tt), n(U, H + 3, it, b, tt), n(U, H + 6, it, P, tt), wt[H] = T, wt[H + 3] = b, wt[H + 6] = P, l(it, T, b, P, ht), p && (n(U, H + 9, it, L, tt), wt[H + 9] = L), Q = 0, J = r.morphTargets.length; J > Q; Q++) {
                var Dt = E.attributes["mp_" + Q].array,
                    Xt = r.morphTargets[Q].vertices;
                n(Dt, H, Xt, T, tt), n(Dt, H + 3, Xt, b, tt), n(Dt, H + 6, Xt, P, tt), l(Xt, T, b, P, dt[Q]), p && n(Dt, H + 9, Xt, L, tt)
            }
            for (Q = 0, J = r.morphColors.length; J > Q; Q++) {
                var Ct = E.attributes["mc_" + Q].array,
                    At = r.morphColors[Q].colors;
                s(Ct, H, At, Gt), s(Ct, H + 3, At, Gt), s(Ct, H + 6, At, Gt), p && s(Dt, H + 9, At, Gt)
            }
        } else if (p) {
            for (n(U, H, it, T, tt), n(U, H + 3, it, b, tt), n(U, H + 6, it, L, tt), n(U, H + 9, it, b, tt), n(U, H + 12, it, P, tt), n(U, H + 15, it, L, tt), wt[H] = T, wt[H + 3] = b, wt[H + 6] = L, wt[H + 9] = b, wt[H + 12] = P, wt[H + 15] = L, Q = 0, J = r.morphTargets.length; J > Q; Q++) {
                var Dt = E.attributes["mp_" + Q].array,
                    Xt = r.morphTargets[Q].vertices;
                n(Dt, H, Xt, T, tt), n(Dt, H + 3, Xt, b, tt), n(Dt, H + 6, Xt, L, tt), n(Dt, H + 9, Xt, b, tt), n(Dt, H + 12, Xt, P, tt), n(Dt, H + 15, Xt, L, tt)
            }
            for (Q = 0, J = r.morphColors.length; J > Q; Q++) {
                var Ct = E.attributes["mc_" + Q].array,
                    At = r.morphColors[Q].colors;
                s(Ct, H, At, Gt), s(Ct, H + 3, At, Gt), s(Ct, H + 6, At, Gt), s(Ct, H + 9, At, Gt), s(Ct, H + 12, At, Gt), s(Ct, H + 15, At, Gt)
            }
        } else {
            for (n(U, H, it, T, tt), n(U, H + 3, it, b, tt), n(U, H + 6, it, P, tt), wt[H] = T, wt[H + 3] = b, wt[H + 6] = P, Q = 0, J = r.morphTargets.length; J > Q; Q++) {
                var Dt = E.attributes["mp_" + Q].array,
                    Xt = r.morphTargets[Q].vertices;
                n(Dt, H, Xt, T, tt), n(Dt, H + 3, Xt, b, tt), n(Dt, H + 6, Xt, P, tt)
            }
            for (Q = 0, J = r.morphColors.length; J > Q; Q++) {
                var Ct = E.attributes["mc_" + Q].array,
                    At = r.morphColors[Q].colors;
                s(Ct, H, At, Gt), s(Ct, H + 3, At, Gt), s(Ct, H + 6, At, Gt)
            }
        }
        if (r.skinWeights && (O = E.attributes.skinWeight.array, K = F.skinWeightOffset, O[K] = st[2 * T], O[K + 1] = st[2 * T + 1], O[K + 2] = 0, O[K + 3] = 0, O[K + 4] = st[2 * b], O[K + 5] = st[2 * b + 1], O[K + 6] = 0, O[K + 7] = 0, O[K + 8] = st[2 * P], O[K + 9] = st[2 * P + 1], O[K + 10] = 0, O[K + 11] = 0, p ? (O[K + 12] = st[2 * L], O[K + 13] = st[2 * L + 1], O[K + 14] = 0, O[K + 15] = 0, F.skinWeightOffset += 16) : F.skinWeightOffset += 12), r.skinIndices && (k = E.attributes.skinIndex.array, Z = F.skinIndexOffset, k[Z] = lt[2 * T], k[Z + 1] = lt[2 * T + 1], k[Z + 2] = 0, k[Z + 3] = 0, k[Z + 4] = lt[2 * b], k[Z + 5] = lt[2 * b + 1], k[Z + 6] = 0, k[Z + 7] = 0, k[Z + 8] = lt[2 * P], k[Z + 9] = lt[2 * P + 1], k[Z + 10] = 0, k[Z + 11] = 0, p ? (k[Z + 12] = lt[2 * L], k[Z + 13] = lt[2 * L + 1], k[Z + 14] = 0, k[Z + 15] = 0, F.skinIndexOffset += 16) : F.skinIndexOffset += 12), v)
            for (Q = 0; a > Q; Q++)
                for (y = r.uvs[Q], u = at[Mt++], w = y[2 * u], D = y[2 * u + 1], X = 0 === Q ? I : E.attributes["uv" + (Q + 1)].array, $ = 0; Y > $; $++) W = F.uvOffset[Q], X[W] = w, X[W + 1] = D, F.uvOffset[Q] += 2;
        if (g)
            for (Q = 0; a > Q; Q++) {
                for (y = r.uvs[Q], X = 0 === Q ? I : E.attributes["uv" + (Q + 1)].array, $ = 0; Y > $; $++) W = F.uvOffset[Q], u = at[Mt++], w = y[2 * u], D = y[2 * u + 1], X[W] = w, X[W + 1] = D, F.uvOffset[Q] += 2;
                if (p && !F.hasIndices) {
                    var _t = F.uvOffset[Q] - 4,
                        Tt = X[_t],
                        bt = X[_t + 1];
                    X[_t] = w, X[_t + 1] = D, X[_t + 2] = X[_t - 2], X[_t + 3] = X[_t - 1], X[_t + 4] = Tt, X[_t + 5] = bt, X[_t + 6] = w, X[_t + 7] = D, F.uvOffset[Q] += 4
                }
            }
        if (S)
            for (d = 3 * at[Mt++], C = ot[d++], A = ot[d++], _ = ot[d], $ = 0; Y > $; $++) z = F.normalOffset, N[z] = C, N[z + 1] = A, N[z + 2] = _, F.normalOffset += 3;
        if (x) {
            for (Q = 0; Y > Q; Q++) z = F.normalOffset, d = 3 * at[Mt++], C = ot[d++], A = ot[d++], _ = ot[d], N[z] = C, N[z + 1] = A, N[z + 2] = _, F.normalOffset += 3;
            if (p && !F.hasIndices) {
                var _t = F.normalOffset - 6,
                    Pt = N[_t],
                    Lt = N[_t + 1],
                    Et = N[_t + 2];
                N[_t] = C, N[_t + 1] = A, N[_t + 2] = _, N[_t + 3] = N[_t - 3], N[_t + 4] = N[_t - 2], N[_t + 5] = N[_t - 1], N[_t + 6] = Pt, N[_t + 7] = Lt, N[_t + 8] = Et, N[_t + 9] = C, N[_t + 10] = A, N[_t + 11] = _, F.normalOffset += 6
            }
        }
        if (G)
            for (j = F.colorOffset, h = at[Mt++], rt.setHex(nt[h]), $ = 0; Y > $; $++) B[j] = rt.r, B[j + 1] = rt.g, B[j + 2] = rt.b, F.colorOffset += 3;
        if (M) {
            for (j = F.colorOffset, Q = 0; Y > Q; Q++) h = at[Mt++], rt.setHex(nt[h]), B[j] = rt.r, B[j + 1] = rt.g, B[j + 2] = rt.b, F.colorOffset += 3;
            if (p && !F.hasIndices) {
                var _t = F.colorOffset - 6,
                    Pt = B[_t],
                    Lt = B[_t + 1],
                    Et = B[_t + 2];
                B[_t] = C, B[_t + 1] = A, B[_t + 2] = _, B[_t + 3] = B[_t - 3], B[_t + 4] = B[_t - 2], B[_t + 5] = B[_t - 1], B[_t + 6] = Pt, B[_t + 7] = Lt, B[_t + 8] = Et, B[_t + 9] = C, B[_t + 10] = A, B[_t + 11] = _, F.colorOffset += 6
            }
        }
        Gt += 1
    }
    var Ft;
    for (Q = 0, J = ht.length; J > Q; Q += 3) C = ht[Q], A = ht[Q + 1], _ = ht[Q + 2], Ft = 1 / Math.sqrt(C * C + A * A + _ * _), ht[Q] *= Ft, ht[Q + 1] *= Ft, ht[Q + 2] *= Ft;
    if (void 0 !== r.morphTargets)
        for ($ = 0, et = r.morphTargets.length; et > $; $++) {
            var Rt = dt[$];
            for (Q = 0, J = Rt.length; J > Q; Q += 3) C = Rt[Q], A = Rt[Q + 1], _ = Rt[Q + 2], Ft = 1 / Math.sqrt(C * C + A * A + _ * _), Rt[Q] *= Ft, Rt[Q + 1] *= Ft, Rt[Q + 2] *= Ft
        }
    for (Q = 0, J = t.length; J > Q; Q++) {
        var Ut = t[Q];
        if (!Ut.hasNormals) {
            E = e[Q], N = E.attributes.normal.array;
            for (Mt in Ut.indexMap) {
                var Nt = Ut.indexMap[Mt];
                Mt = parseInt(Mt), N[Mt + 0] = ht[3 * Nt], N[Mt + 1] = ht[3 * Nt + 1], N[Mt + 2] = ht[3 * Nt + 2]
            }
            if (void 0 !== r.morphTargets)
                for ($ = 0, et = r.morphTargets.length; et > $; $++) {
                    var Rt = dt[$],
                        It = E.attributes["mn_" + $].array;
                    for (Mt in Ut.indexMap) {
                        var Nt = Ut.indexMap[Mt];
                        Mt = parseInt(Mt), It[Mt + 0] = Rt[3 * Nt], It[Mt + 1] = Rt[3 * Nt + 1], It[Mt + 2] = Rt[3 * Nt + 2]
                    }
                }
        }
    }
}, XG.JSONLoader.prototype.createModel = function(e, t, r, a) {
    for (var i = 0, o = 0; o < e.uvs.length; o++) e.uvs[o].length && i++;
    var n = this.generateMaterialChunks(e, i, a),
        s = this.generateGeometries(n, e, i);
    this.fillGeometries(s, n, e, i, a);
    var l = this.initMaterials(e.materials, r);
    t(s, l)
}, XG.RenderTarget = function(e, t, r) {
    this.id = XG.TextureIdCount++, this.width = e, this.height = t, r = r || {}, this.wrapS = void 0 !== r.wrapS ? r.wrapS : XG.ClampToEdgeWrapping, this.wrapT = void 0 !== r.wrapT ? r.wrapT : XG.ClampToEdgeWrapping, this.magFilter = void 0 !== r.magFilter ? r.magFilter : XG.LinearFilter, this.minFilter = void 0 !== r.minFilter ? r.minFilter : XG.LinearMipMapLinearFilter, this.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1, this.offset = new XG.Vector2(0, 0), this.repeat = new XG.Vector2(1, 1), this.format = void 0 !== r.format ? r.format : XG.RGBAFormat, this.type = void 0 !== r.type ? r.type : XG.UnsignedByteType, this.depthBuffer = void 0 !== r.depthBuffer ? r.depthBuffer : !0, this.stencilBuffer = void 0 !== r.stencilBuffer ? r.stencilBuffer : !0, this.mipmapCount = 0, this.generateMipmaps = !0, this.shareDepthFrom = null, this.useDepthTexture = void 0 !== r.useDepthTexture ? r.useDepthTexture : !1, this.depthTextureType = void 0 !== r.depthTextureType ? r.depthTextureType : XG.UnsignedIntType, this.depthTexture = null, this.useColorTexture = void 0 !== r.useColorTexture ? r.useColorTexture : !0, this.needsUpdate = !0, this.onUpdate = null
}, XG.RenderTarget.prototype.setSize = function(e, t) {
    this.width = e, this.height = t, this.needsUpdate = !0
}, XG.RenderTarget.prototype.clone = function() {
    var e = new XG.RenderTarget(this.width, this.height);
    return e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.format = this.format, e.type = this.type, e.depthBuffer = this.depthBuffer, e.stencilBuffer = this.stencilBuffer, e.mipmapCount = this.mipmapCount, e.generateMipmaps = this.generateMipmaps, e.shareDepthFrom = this.shareDepthFrom, e.useDepthTexture = this.useDepthTexture, e.depthTextureType = this.depthTextureType, e.depthTexture = this.depthTexture, e.useColorTexture = this.useColorTexture, e
}, XG.RenderTargetCube = function(e, t, r) {
    XG.RenderTarget.call(this, e, t, r), this.activeCubeFace = 0
}, XG.RenderTargetCube.prototype = Object.create(XG.RenderTarget.prototype), XG.RenderTargetArray = function(e, t, r, a, i) {
    i = i || {}, this.width = e, this.height = t, this.colorTexture = [], this.depthTexture = null;
    for (var o = 0; r > o; o++) this.colorTexture.push(new XG.RenderTarget(e, t, i));
    a && (this.depthTexture = new XG.RenderTarget(e, t, {
        magFilter: XG.LinearFilter,
        minFilter: XG.LinearFilter
    })), this.depthBuffer = void 0 !== i.depthBuffer ? i.depthBuffer : !0, this.stencilBuffer = void 0 !== i.stencilBuffer ? i.stencilBuffer : !0, this.generateMipmaps = !0, this.needsUpdate = !0, this.onUpdate = null
}, XG.RenderTargetArray.prototype.clone = function() {
    for (var e = new XG.RenderTargetArray(this.width, this.height), t = this.colorTexture.length, r = 0; t > r; r++) e.colorTexture.push(this.colorTexture[r].clone());
    return this.depthTexture && (e.depthTexture = this.depthTexture.clone()), e.generateMipmaps = this.generateMipmaps, e.depthBuffer = this.depthBuffer, e.stencilBuffer = this.stencilBuffer, e
}, XG.RenderTargetArray.prototype.setSize = function(e, t) {
    this.width = e, this.height = t;
    for (var r = this.colorTexture.length, a = 0; r > a; a++) this.colorTexture[a].setSize(e, t);
    this.depthTexture && this.depthTexture.setSize(e, t), this.needsUpdate = !0
}, XG.DebugUtils = {}, XG.DebugUtils.parseTranslatedShaderErrorLog = function(e) {
    for (var t, r, a, i, o, n = /\((\d+),(\d+)-(\d+)\): (.*)/g, s = {}; t = n.exec(e);) t.length < 5 || (r = t[1], a = t[2] - 1, i = t[3] - 1, o = t[4], void 0 === s[r] ? s[r] = {
        start: a,
        end: i,
        lineText: o
    } : s[r].text += ", " + o);
    return s
}, XG.DebugUtils.parseGLSLShaderErrorLog = function(e) {
    for (var t, r, a, i, o, n = e.split("\n").join("").split("WARNING").join("\nWARNING"), s = /(ERROR|WARNING): (\d+):(\d+): (.*)/g, l = {}; t = s.exec(n);) t.length < 4 || (o = t[1], r = t[2], a = t[3], i = t[4], void 0 === l[a] ? l[a] = {
        fileNum: r,
        lineText: i,
        type: o
    } : l[a].text += ", " + i);
    return l
}, XG.DebugUtils.printHighlightedLine = function(e, t, r, a, i) {
    var o = "%c" + i.substring(0, 1).toUpperCase() + i.substring(1) + "\n",
        n = "%c" + a + ":",
        s = "%c" + e.substring(0, t),
        l = "%c" + e.substring(t, r + 1),
        h = "%c" + e.substring(r + 1);
    console.warn(o + n + s + l + h, "color:saddlebrown", "color:gray", "color:gray", "color:goldenrod", "color:gray")
}, XG.DebugUtils.prettyPrintTranslatedShaderErrors = function(e, t) {
    for (var r = e.split("\n"), a = 0, i = r.length; i > a; a++) {
        var o = r[a],
            n = a + 1;
        t[n] && XG.DebugUtils.printHighlightedLine(o, t[n].start, t[n].end, n, t[n].lineText)
    }
}, XG.DebugUtils.prettyPrintShaderErrors = function(e, t) {
    for (var r = [], a = e.split("\n"), i = 0, o = a.length; o > i; i++) {
        var n = i + 1,
            s = n + ": " + a[i];
        if (t[n]) {
            r.length > 0 && (console.log(r.join("\n")), r = []);
            var l = t[n].lineText,
                h = t[n].type;
            "ERROR" === h ? console.error("ERROR: " + l + "\n" + s) : console.warn("WARNING: " + l + "\n" + s)
        }
    }
    console.log(r.join("\n"))
}, XG.DebugUtils.addLineNumbers = function(e) {
    for (var t = e.split("\n"), r = 0, a = t.length; a > r; r++) t[r] = r + 1 + ": " + t[r];
    return t.join("\n")
}, XG.DebugUtils.translateGLErrorCode = function(e) {
    switch (e) {
        case 0:
            return "NO_ERROR";
        case 1280:
            return "INVALID_ENUM";
        case 1281:
            return "INVALID_VALUE";
        case 1282:
            return "INVALID_OPERATION";
        case 1283:
            return "STACK_OVERFLOW";
        case 1284:
            return "STACK_UNDERFLOW";
        case 1285:
            return "OUT_OF_MEMORY";
        case 1286:
            return "INVALID_FRAMEBUFFER_OPERATION"
    }
    return "UNKNOWN_ERROR [" + e + "]"
}, XG.ImageUtils = {
    crossOrigin: "anonymous"
}, XG.ImageUtils.loadTexture = function(e, t, r) {
    var a = new Image,
        i = new XG.Texture(a);
    return a.onload = function() {
        i.image = a, i.needsUpdate = !0, t && t(i)
    }, r && (a.onerror = r), a.crossOrigin = this.crossOrigin, a.src = e, i.sourceFile = e, i
}, XG.ImageUtils.loadMultipleCRNTexturesFromPack = function(e, t, r) {
    for (var a = !1, i = (Date.now(), []), o = [], n = 0, s = e.length; s > n; n++) {
        var l = e[n],
            h = l[0],
            d = l[1],
            u = l[2];
        i.push([d, u]), o.push(h)
    }
    if (a);
    else var c = new Worker("js/crunch/CrunchWorker.js");
    c.onmessage = function(e) {
        for (var t = e.data.textureData, a = 0, i = t.length; i > a; a++) {
            var n = t[a],
                s = o[a];
            s.format = n.format, s.mipmaps = n.mipmaps, s.image.width = n.width, s.image.height = n.height, s.generateMipmaps = !1, s.needsUpdate = !0
        }
        Date.now();
        r && r()
    }, c.postMessage({
        buffer: t,
        offsets: i
    }, [t])
}, XG.ImageUtils.loadCRNTextureFromPack = function(e, t, r, a, i) {
    var o = !0,
        n = XG.ImageUtils.parseCRN(t, o, r, a);
    return e.format = n.format, e.mipmaps = n.mipmaps, e.image.width = n.width, e.image.height = n.height, e.generateMipmaps = !1, e.needsUpdate = !0, i && i(e), e
}, XG.ImageUtils.loadCompressedTextureFromPack = function(e, t, r, a) {
    var i = !0,
        o = XG.ImageUtils.parseDDS(t, i, r);
    return e.format = o.format, e.mipmaps = o.mipmaps, e.image.width = o.width, e.image.height = o.height, e.generateMipmaps = !1, e.needsUpdate = !0, a && a(e), e
}, XG.ImageUtils.loadCompressedTexture = function(e, t, r) {
    var a = new XG.CompressedTexture,
        i = new XMLHttpRequest;
    return i.onload = function() {
        var e = i.response,
            r = !0,
            o = 0,
            n = XG.ImageUtils.parseDDS(e, r, o);
        a.format = n.format, a.mipmaps = n.mipmaps, a.image.width = n.width, a.image.height = n.height, a.generateMipmaps = !1, a.needsUpdate = !0, t && t(a)
    }, i.onerror = r, i.open("GET", e, !0), i.responseType = "arraybuffer", i.send(null), a
}, XG.ImageUtils.loadPVRTexture = function(e, t, r) {
    var a = new XG.CompressedTexture,
        i = new XMLHttpRequest;
    return i.onload = function() {
        var e = i.response,
            r = !0,
            o = 0,
            n = XG.ImageUtils.parsePVR(e, r, o);
        a.format = n.format, a.mipmaps = n.mipmaps, a.image.width = n.width, a.image.height = n.height, a.generateMipmaps = !1, a.needsUpdate = !0, t && t(a)
    }, i.onerror = r, i.open("GET", e, !0), i.responseType = "arraybuffer", i.send(null), a
}, XG.ImageUtils.loadATCTexture = function() {}, XG.ImageUtils.loadETCTexture = function() {}, XG.ImageUtils.loadCRNTexture = function(e, t, r) {
    var a = new XG.CompressedTexture,
        i = new XMLHttpRequest;
    return i.onload = function() {
        var e = i.response,
            r = !0,
            o = XG.ImageUtils.parseCRN(e, r, 0);
        a.format = o.format, a.mipmaps = o.mipmaps, a.image.width = o.width, a.image.height = o.height, a.generateMipmaps = !1, a.needsUpdate = !0, t && t(a)
    }, i.onerror = r, i.open("GET", e, !0), i.responseType = "arraybuffer", i.send(null), a
}, XG.ImageUtils.loadTextureCube = function(e, t, r) {
    var a = [];
    a.loadCount = 0;
    var i = new XG.Texture;
    i.image = a, i.flipY = !1;
    for (var o = 0, n = e.length; n > o; ++o) {
        var s = new Image;
        a[o] = s, s.onload = function() {
            a.loadCount += 1, 6 === a.loadCount && (i.needsUpdate = !0, i.mipmapCount = 0, t && t(i))
        }, s.onerror = r, s.crossOrigin = this.crossOrigin, s.src = e[o]
    }
    return i
}, XG.ImageUtils.loadCompressedTextureCube = function(e, t, r) {
    var a = [];
    a.loadCount = 0;
    var i = new XG.CompressedTexture;
    i.image = a, i.flipY = !1, i.generateMipmaps = !1;
    var o = function(e, r) {
        return function() {
            var o = e.response,
                n = !0,
                s = 0,
                l = XG.ImageUtils.parseDDS(o, n, s);
            r.format = l.format, r.mipmaps = l.mipmaps, r.width = l.width, r.height = l.height, a.loadCount += 1, 6 === a.loadCount && (i.format = l.format, i.mipmapCount = l.mipmapCount, i.needsUpdate = !0, t && t(i))
        }
    };
    if (e instanceof Array)
        for (var n = 0, s = e.length; s > n; ++n) {
            var l = {};
            a[n] = l;
            var h = new XMLHttpRequest;
            h.onload = o(h, l), h.onerror = r;
            var d = e[n];
            h.open("GET", d, !0), h.responseType = "arraybuffer", h.send(null)
        } else {
            var d = e,
                h = new XMLHttpRequest;
            h.onload = function() {
                var e = h.response,
                    r = !0,
                    o = 0,
                    n = XG.ImageUtils.parseDDS(e, r, o);
                if (n.isCubemap) {
                    for (var s = n.mipmaps.length / n.mipmapCount, l = 0; s > l; l++) {
                        a[l] = {
                            mipmaps: []
                        };
                        for (var d = 0; d < n.mipmapCount; d++) a[l].mipmaps.push(n.mipmaps[l * n.mipmapCount + d]), a[l].format = n.format, a[l].width = n.width, a[l].height = n.height
                    }
                    i.format = n.format, i.mipmapCount = n.mipmapCount, i.needsUpdate = !0, t && t(i)
                }
            }, h.onerror = r, h.open("GET", d, !0), h.responseType = "arraybuffer", h.send(null)
        }
    return i
}, XG.ImageUtils.loadCRNTextureCube = function(e, t, r) {
    var a = [];
    a.loadCount = 0;
    var i = new XG.CompressedTexture;
    i.image = a, i.flipY = !1, i.generateMipmaps = !1;
    var o = function(e, r) {
        return function() {
            var o = e.response,
                n = !0,
                s = 0,
                l = XG.ImageUtils.parseCRN(o, n, s);
            r.format = l.format, r.mipmaps = l.mipmaps, r.width = l.width, r.height = l.height, a.loadCount += 1, 6 === a.loadCount && (i.format = l.format, i.mipmapCount = l.mipmapCount, i.needsUpdate = !0, t && t(i))
        }
    };
    if (e instanceof Array)
        for (var n = 0, s = e.length; s > n; ++n) {
            var l = {};
            a[n] = l;
            var h = new XMLHttpRequest;
            h.onload = o(h, l), h.onerror = r;
            var d = e[n];
            h.open("GET", d, !0), h.responseType = "arraybuffer", h.send(null)
        } else console.warn("Loading cubemap from cube CRN file not implemented!");
    return i
}, XG.ImageUtils.textureLevelSize = function(e, t, r) {
    switch (e) {
        case XG.RGB_S3TC_DXT1_Format:
        case XG.RGB_ATC_Format:
        case XG.RGB_ETC1_Format:
            return (t + 3 >> 2) * (r + 3 >> 2) * 8;
        case XG.RGBA_S3TC_DXT3_Format:
        case XG.RGBA_S3TC_DXT5_Format:
        case XG.RGBA_ATC_EXPLICIT_ALPHA_Format:
        case XG.RGBA_ATC_INTERPOLATED_ALPHA_Format:
            return (t + 3 >> 2) * (r + 3 >> 2) * 16;
        case XG.RGB_PVRTC_4BPPV1_Format:
        case XG.RGBA_PVRTC_4BPPV1_Format:
            return Math.floor((Math.max(t, 8) * Math.max(r, 8) * 4 + 7) / 8);
        case XG.RGB_PVRTC_2BPPV1_Format:
        case XG.RGBA_PVRTC_2BPPV1_Format:
            return Math.floor((Math.max(t, 16) * Math.max(r, 8) * 2 + 7) / 8);
        default:
            return 0
    }
}, XG.ImageUtils.parsePVR = function(e, t, r) {
    void 0 === r && (r = 0);
    var a = {
            mipmaps: [],
            width: 0,
            height: 0,
            format: null,
            mipmapCount: 1
        },
        i = 0,
        o = 1,
        n = 2,
        s = 3,
        l = 6,
        h = 7,
        d = 9,
        u = 5,
        c = 13,
        f = 55727696,
        p = 0,
        m = 2,
        v = 6,
        g = 7,
        S = 11,
        x = 12,
        G = new Int32Array(e, 0, c);
    G[p] !== f && console.error("ImageUtils.parsePVR(): Invalid magic number in PVR header");
    var M, y = G[m];
    switch (y) {
        case i:
            M = XG.RGB_PVRTC_2BPPV1_Format;
            break;
        case o:
            M = XG.RGBA_PVRTC_2BPPV1_Format;
            break;
        case n:
            M = XG.RGB_PVRTC_4BPPV1_Format;
            break;
        case s:
            M = XG.RGBA_PVRTC_4BPPV1_Format;
            break;
        case l:
            M = XG.RGB_ETC1_Format;
            break;
        case h:
            M = XG.RGB_S3TC_DXT1_Format;
            break;
        case d:
            M = XG.RGBA_S3TC_DXT3_Format;
            break;
        case u:
            M = XG.RGBA_S3TC_DXT5_Format;
            break;
        default:
            console.error("Unsupported PVR format: " + y)
    }
    a.format = M;
    for (var w = G[g], D = G[v], X = G[S], C = G[x] + 52, A = new Uint8Array(e, C), _ = 0, T = 4, b = 0; X > b; ++b) {
        var P = XG.ImageUtils.textureLevelSize(M, w, D),
            L = new Uint8Array(A.buffer, A.byteOffset + _, P),
            E = {
                data: L,
                width: w,
                height: D,
                unpackAlignment: T
            };
        a.mipmaps.push(E), w >>= 1, D >>= 1, _ += P
    }
    return a
}, XG.ImageUtils.parseDDS = function(e, t, r) {
    function a(e) {
        return e.charCodeAt(0) + (e.charCodeAt(1) << 8) + (e.charCodeAt(2) << 16) + (e.charCodeAt(3) << 24)
    }

    function i(e) {
        return String.fromCharCode(255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255)
    }
    void 0 === r && (r = 0);
    var o = {
            mipmaps: [],
            width: 0,
            height: 0,
            format: null,
            mipmapCount: 1
        },
        n = 542327876,
        s = 131072,
        l = 512,
        h = 4,
        d = 64,
        u = 64,
        c = 65,
        f = a("DXT1"),
        p = a("DXT3"),
        m = a("DXT5"),
        v = 31,
        g = 0,
        S = 1,
        x = 2,
        G = 3,
        M = 4,
        y = 7,
        w = 20,
        D = 21,
        X = 28,
        C = new Uint32Array(e, r, v);
    if (C[g] !== n) return console.error("ImageUtils.parseDDS(): Invalid magic number in DDS header"), o;
    if (!C[w] & h) return console.error("ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code"), o;
    var A = !0,
        _ = 0,
        T = C[D];
    switch (T) {
        case f:
            _ = 8, o.format = XG.RGB_S3TC_DXT1_Format;
            break;
        case p:
            _ = 16, o.format = XG.RGBA_S3TC_DXT3_Format;
            break;
        case m:
            _ = 16, o.format = XG.RGBA_S3TC_DXT5_Format;
            break;
        default:
            if (!(C[w] & d)) return console.error("ImageUtils.parseDDS(): Unsupported FourCC code: ", T, i(T)), o;
            if (C[20] === c) o.format = XG.RGBAFormat, A = !1;
            else {
                if (C[20] !== u) return console.error("ImageUtils.parseDDS(): Unsupported uncompressed format"), o;
                o.format = XG.RGBFormat, A = !1
            }
    }
    o.mipmapCount = 1, C[x] & s && t !== !1 && (o.mipmapCount = Math.max(1, C[y])), o.isCubemap = C[X] & l ? !0 : !1, o.width = C[M], o.height = C[G];
    for (var b, P, L, E = r + C[S] + 4, F = o.width, R = o.height, U = o.isCubemap ? 6 : 1, N = 0; U > N; N++) {
        for (var I = 0; I < o.mipmapCount; I++) {
            var B = 4;
            if (b = A ? Math.max(4, F) / 4 * Math.max(4, R) / 4 * _ : F * R * 4, P = new Uint8Array(e, E, b), A) L = P;
            else if (o.format === XG.RGBAFormat) {
                L = P;
                for (var O = 0; b > O; O += 4) {
                    var k = L[O];
                    L[O] = L[O + 2], L[O + 2] = k
                }
            } else if (o.format === XG.RGBFormat) {
                L = new Uint8Array(F * R * 3), L.length % 16 !== 0 && (B = 1);
                for (var V = 0, O = 0; b > O; O += 4) {
                    var H = P[O],
                        z = P[O + 1],
                        W = P[O + 2];
                    L[V++] = W, L[V++] = z, L[V++] = H
                }
            }
            var j = {
                data: L,
                width: F,
                height: R,
                unpackAlignment: B
            };
            o.mipmaps.push(j), E += b, F = Math.max(.5 * F, 1), R = Math.max(.5 * R, 1)
        }
        F = o.width, R = o.height
    }
    return o
}, XG.ImageUtils.parseCRN = function(e, t, r, a) {
    void 0 === r && (r = 0), void 0 === a && (a = e.byteLength);
    var i = {
            mipmaps: [],
            width: 0,
            height: 0,
            format: null,
            mipmapCount: 1
        },
        o = 0,
        n = 1,
        s = 2,
        l = function(e, t, r) {
            t.set(e, r)
        },
        h = new Uint8Array(e, r, a),
        d = a,
        u = Module._malloc(d);
    l(h, Module.HEAPU8, u, d);
    var c, f = Module._crn_get_dxt_format(u, d);
    switch (f) {
        case o:
            c = XG.RGB_S3TC_DXT1_Format;
            break;
        case n:
            c = XG.RGBA_S3TC_DXT3_Format;
            break;
        case s:
            c = XG.RGBA_S3TC_DXT5_Format;
            break;
        default:
            return console.error("ImageUtils.parseCRN(): Unsupported image format"), 0
    }
    var p = Module._crn_get_width(u, d),
        m = Module._crn_get_height(u, d),
        v = Module._crn_get_levels(u, d);
    i.format = c, i.width = p, i.height = m, i.mipmapCount = v;
    for (var g = 4, S = Module._crn_get_uncompressed_size(u, d, 0), x = Module._malloc(S), G = 0; v > G; ++G) {
        G && (S = Module._crn_get_uncompressed_size(u, d, G)), Module._crn_decompress(u, d, x, S, G);
        var M = Module.HEAPU8.buffer.slice(x, x + S),
            y = new Uint8Array(M),
            w = {
                data: y,
                width: p,
                height: m,
                unpackAlignment: g
            };
        i.mipmaps.push(w), p = Math.max(.5 * p, 1), m = Math.max(.5 * m, 1)
    }
    return Module._free(u), Module._free(x), i
}, XG.ImageUtils.getNormalMap = function(e, t) {
    var r = function(e, t) {
            return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
        },
        a = function(e, t) {
            return [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
        },
        i = function(e) {
            var t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
            return [e[0] / t, e[1] / t, e[2] / t]
        };
    t = 1 | t;
    var o = e.width,
        n = e.height,
        s = document.createElement("canvas");
    s.width = o, s.height = n;
    var l = s.getContext("2d");
    l.drawImage(e, 0, 0);
    for (var h = l.getImageData(0, 0, o, n).data, d = l.createImageData(o, n), u = d.data, c = 0; o > c; c++)
        for (var f = 0; n > f; f++) {
            var p = 0 > f - 1 ? 0 : f - 1,
                m = f + 1 > n - 1 ? n - 1 : f + 1,
                v = 0 > c - 1 ? 0 : c - 1,
                g = c + 1 > o - 1 ? o - 1 : c + 1,
                S = [],
                x = [0, 0, h[4 * (f * o + c)] / 255 * t];
            S.push([-1, 0, h[4 * (f * o + v)] / 255 * t]), S.push([-1, -1, h[4 * (p * o + v)] / 255 * t]), S.push([0, -1, h[4 * (p * o + c)] / 255 * t]), S.push([1, -1, h[4 * (p * o + g)] / 255 * t]), S.push([1, 0, h[4 * (f * o + g)] / 255 * t]), S.push([1, 1, h[4 * (m * o + g)] / 255 * t]), S.push([0, 1, h[4 * (m * o + c)] / 255 * t]), S.push([-1, 1, h[4 * (m * o + v)] / 255 * t]);
            for (var G = [], M = S.length, y = 0; M > y; y++) {
                var w = S[y],
                    D = S[(y + 1) % M];
                w = a(w, x), D = a(D, x), G.push(i(r(w, D)))
            }
            for (var X = [0, 0, 0], y = 0; y < G.length; y++) X[0] += G[y][0], X[1] += G[y][1], X[2] += G[y][2];
            X[0] /= G.length, X[1] /= G.length, X[2] /= G.length;
            var C = 4 * (f * o + c);
            u[C] = (X[0] + 1) / 2 * 255 | 0, u[C + 1] = (X[1] + 1) / 2 * 255 | 0, u[C + 2] = 255 * X[2] | 0, u[C + 3] = 255
        }
    return l.putImageData(d, 0, 0), s
}, XG.ImageUtils.generateDataTexture = function(e, t, r) {
    for (var a = e * t, i = new Uint8Array(3 * a), o = Math.floor(255 * r.r), n = Math.floor(255 * r.g), s = Math.floor(255 * r.b), l = 0; a > l; l++) i[3 * l] = o, i[3 * l + 1] = n, i[3 * l + 2] = s;
    var h = new XG.DataTexture(i, e, t, XG.RGBFormat);
    return h.needsUpdate = !0, h
}, XG.ImageUtils.generateNoiseTexture = function(e, t) {
    for (var r = e * t, a = new Uint8Array(3 * r), i = 0; r > i; i++) a[3 * i] = Math.floor(255 * Math.random()), a[3 * i + 1] = Math.floor(255 * Math.random()), a[3 * i + 2] = Math.floor(255 * Math.random());
    var o = new XG.DataTexture(a, e, t, XG.RGBFormat);
    return o.needsUpdate = !0, o
}, XG.ImageUtils.generateDummyCompressedTexture = function(e) {
    var t = [542327876, 124, 659463, 4, 4, 8, 0, 3, 1347242311, 1396982829, 131585, 0, 0, 0, 0, 0, 0, 0, 0, 32, 4, 827611204, 24, 16711680, 65280, 255, 0, 4198408, 0, 0, 0, 0, 38066, 2863311530, 38066, 2863311530, 38066, 2863311530],
        r = new Uint32Array(t),
        a = !0,
        i = 0,
        o = XG.ImageUtils.parseDDS(r.buffer, a, i);
    e.format = o.format, e.mipmaps = o.mipmaps, e.image.width = o.width, e.image.height = o.height, e.generateMipmaps = !1, e.needsUpdate = !0
}, XG.ImageUtils.generateMipTexture = function(e, t) {
    function r(e, t, r) {
        for (var a = e * t, i = new Uint8Array(a), o = 16 * r, n = 0; a > n; n++) i[n] = o;
        var s = {
            width: e,
            height: t,
            data: i
        };
        return s
    }
    XG.Math.isPowerOfTwo(e) && XG.Math.isPowerOfTwo(t) || console.error("XG.ImageUtils.generateMipTexture: dimensions [", e, "x", t, "] are not power of two.");
    for (var a = Math.log(Math.max(e, t)) / Math.LN2, i = e, o = t, n = [], s = 0; a >= s; s++) n[s] = r(i, o, s), i = Math.max(Math.ceil(.5 * i), 1), o = Math.max(Math.ceil(.5 * o), 1);
    var l = n[0],
        h = new XG.DataTexture(l.data, e, t, XG.LuminanceFormat);
    return h.mipmaps = n, h.unpackAlignment = 1, h.needsUpdate = !0, h
}, XG.UniformsUtils = {
    merge: function(e) {
        var t, r, a, i = {};
        for (t = 0; t < e.length; t++) {
            a = this.clone(e[t]);
            for (r in a) i[r] = a[r]
        }
        return i
    },
    clone: function(e) {
        var t, r, a, i = {};
        for (t in e) {
            i[t] = {};
            for (r in e[t]) a = e[t][r], i[t][r] = a instanceof XG.Color || a instanceof XG.Vector2 || a instanceof XG.Vector3 || a instanceof XG.Vector4 || a instanceof XG.Quaternion || a instanceof XG.Matrix3 || a instanceof XG.Matrix4 || a instanceof XG.Texture ? a.clone() : a instanceof Array ? a.slice() : a
        }
        return i
    },
    cloneDefines: function(e) {
        var t, r = {};
        for (t in e) r[t] = e[t];
        return r
    }
}, XG.AtmosphericFog = function(e, t, r) {
    this.name = "", this.color = new XG.Color(e), this.start = void 0 !== t ? t : 100, this.strength = void 0 !== r ? r : .1
}, XG.AtmosphericFog.prototype.clone = function() {
    return new XG.AtmosphericFog(this.color.getHex(), this.start, this.strength)
}, XG.LinearFog = function(e, t, r) {
    this.name = "", this.color = new XG.Color(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== r ? r : 1e3
}, XG.LinearFog.prototype.clone = function() {
    return new XG.LinearFog(this.color.getHex(), this.near, this.far)
}, XG.ExponentialFog = function(e, t) {
    this.name = "", this.color = new XG.Color(e), this.density = void 0 !== t ? t : 25e-5
}, XG.ExponentialFog.prototype.clone = function() {
    return new XG.ExponentialFog(this.color.getHex(), this.density)
}, XG.HeightFog = function(e) {
    e = e || {}, this.name = "", this.height = void 0 !== e.height ? e.height : -15, this.visibilityDistance = void 0 !== e.visibilityDistance ? e.visibilityDistance : 50, this.fadeSpeed = void 0 !== e.fadeSpeed ? e.fadeSpeed : .15, this.shallowDepthColor = void 0 !== e.shallowDepthColor ? e.shallowDepthColor : (new XG.Color).setRGB(.0078, .5176, .7), this.deepDepthColor = void 0 !== e.deepDepthColor ? e.deepDepthColor : (new XG.Color).setRGB(.0039, .00196, .145), this.rgbExtinctionDistance = void 0 !== e.rgbExtinctionDistance ? e.rgbExtinctionDistance : new XG.Vector3(7, 30, 40)
}, XG.HeightFog.prototype.clone = function() {
    var e = new XG.HeightFog;
    return e.height = this.height, e.visibilityDistance = this.visibilityDistance, e.fadeSpeed = this.fadeSpeed, e.shallowDepthColor.copy(this.shallowDepthColor), e.deepDepthColor.copy(this.deepDepthColor), e.rgbExtinctionDistance.copy(this.rgbExtinctionDistance), e
}, XG.LightProbe = function(e, t, r, a) {
    this.bounces = 0;
    var i = void 0 !== r ? r : XG.FloatType,
        o = void 0 !== a ? a : XG.RGBAFormat,
        n = {
            format: o,
            type: i,
            magFilter: XG.LinearFilter,
            minFilter: XG.LinearMipMapLinearFilter,
            stencilBuffer: !1
        },
        s = {
            format: o,
            type: i,
            magFilter: XG.LinearFilter,
            minFilter: XG.LinearFilter,
            stencilBuffer: !1
        };
    this.specularCube = new XG.RenderTargetCube(e, e, n), this.diffuseCube = new XG.RenderTargetCube(t, t, s);
    var l = XG.IBLDiffuseProbeShader,
        h = XG.UniformsUtils.clone(l.uniforms);
    h.tCube.value = this.diffuseCube;
    var d = new XG.ShaderMaterial({
            vertexShader: l.vertexShader,
            fragmentShader: l.fragmentShader,
            uniforms: h,
            transparent: !0
        }),
        u = XG.IBLDiffuseConvolutionShader,
        c = XG.UniformsUtils.clone(u.uniforms);
    c.tCube.value = this.specularCube, this.diffuseConvolutionMaterial = new XG.ShaderMaterial({
        vertexShader: u.vertexShader,
        fragmentShader: u.fragmentShader,
        uniforms: c,
        side: XG.BackSide,
        transparent: !0
    });
    var f = XG.LightProbe.sphereGeometry;
    XG.Mesh.call(this, f, d), this.renderDepth = 1
}, XG.LightProbe.prototype = Object.create(XG.Mesh.prototype), XG.LightProbe.sphereGeometry = new XG.SphereGeometry(1, 32, 16), XG.LightProbesManager = function(e, t, r) {
    this.renderer = e, this.scene = t, this.dynamicObjects = r, this.defaultSpecularSize = 128, this.defaultDiffuseSize = 16, this.defaultProbeTextureType = XG.FloatType, this.probesList = [], this.convolutionScene = new XG.Scene, this.sceneCamera = new XG.CubeCamera(1, 1e3), this.convolutionCamera = new XG.CubeCamera(1, 1e3), this.scene.add(this.sceneCamera), this.convolutionScene.add(this.convolutionCamera);
    var a = new XG.SphereGeometry(2, 8, 4);
    this.convolutionMesh = new XG.Mesh(a, null), this.convolutionScene.add(this.convolutionMesh), this.maxBounces = 1, this.maxProbesPerFrame = 1
}, XG.LightProbesManager.prototype.createProbe = function(e, t) {
    void 0 === e && (e = this.defaultSpecularSize), void 0 === t && (t = this.defaultDiffuseSize);
    var r = this.renderer.renderer ? this.renderer.renderer : this.renderer,
        a = r.supportsRGBFloatRenderTarget() ? XG.RGBFormat : XG.RGBAFormat,
        i = this.defaultProbeTextureType,
        o = new XG.LightProbe(e, t, i, a);
    return this.probesList.push(o), this.dynamicObjects.push(o), o
}, XG.LightProbesManager.prototype.update = function() {
    var e, t, r, a = this.dynamicObjects;
    for (e = 0, t = a.length; t > e; e++) r = a[e], r.properties.oldVisible = r.visible, r.visible = !1;
    var i = this.renderer,
        o = this.probesList,
        n = 0;
    for (e = 0, t = o.length; t > e; e++) {
        var s = o[e];
        if (!(s.bounces >= this.maxBounces)) {
            var l = s.specularCube,
                h = s.diffuseCube;
            if (this.sceneCamera.position.copy(s.position), this.convolutionMesh.materials[0] = s.diffuseConvolutionMaterial, i.renderCube(this.scene, this.sceneCamera, l), i.renderCube(this.convolutionScene, this.convolutionCamera, h), s.bounces += 1, n += 1, n >= this.maxProbesPerFrame) break
        }
    }
    for (e = 0, t = a.length; t > e; e++) r = a[e], r.visible = r.properties.oldVisible
}, XG.LightProbesManager.prototype.refreshProbes = function() {
    for (var e = this.probesList, t = 0, r = e.length; r > t; t++) {
        var a = e[t];
        a.bounces = 0
    }
}, XG.Material = function() {
    this.id = XG.MaterialIdCount++, this.name = "", this.side = XG.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = XG.NormalBlending, this.blendSrcColor = XG.SrcAlphaFactor, this.blendDstColor = XG.OneMinusSrcAlphaFactor, this.blendSrcAlpha = XG.OneFactor, this.blendDstAlpha = XG.OneMinusSrcAlphaFactor, this.blendEquation = XG.AddEquation, this.depthTest = !0, this.depthWrite = !0, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.particle = !1, this.particleSize = 1, this.visible = !0, this.enabled = !0, this.needsUpdate = !0
}, XG.Material.prototype.setValues = function(e) {
    if (void 0 !== e)
        for (var t in e) {
            var r = e[t];
            if (void 0 !== r) {
                if (t in this) {
                    var a = this[t];
                    a instanceof XG.Color && r instanceof XG.Color ? a.copy(r) : a instanceof XG.Color ? a.set(r) : a instanceof XG.Vector2 && r instanceof XG.Vector2 ? a.copy(r) : a instanceof XG.Vector3 && r instanceof XG.Vector3 ? a.copy(r) : this[t] = r
                }
            } else console.warn("XG.Material: '" + t + "' parameter is undefined.")
        }
}, XG.Material.prototype.clone = function(e) {
    return void 0 === e && (e = new XG.Material), e.name = this.name, e.side = this.side, e.opacity = this.opacity, e.transparent = this.transparent, e.blending = this.blending, e.blendSrcColor = this.blendSrcColor, e.blendDstColor = this.blendDstColor, e.blendSrcAlpha = this.blendSrcAlpha, e.blendDstAlpha = this.blendDstAlpha, e.blendEquation = this.blendEquation, e.depthTest = this.depthTest, e.depthWrite = this.depthWrite, e.polygonOffset = this.polygonOffset, e.polygonOffsetFactor = this.polygonOffsetFactor, e.polygonOffsetUnits = this.polygonOffsetUnits, e.alphaTest = this.alphaTest, e.particle = this.particle, e.visible = this.visible, e
}, XG.MaterialIdCount = 0, XG.EmissiveMaterial = function(e) {
    XG.Material.call(this), this.color = new XG.Color(16777215), this.intensity = 1, this.map = null, this.lightMap = null, this.fog = !0, this.vertexColors = !1, this.skinning = !1, this.morphTargets = !1, this.particleSize = 1, this.particleSizeAttenuation = !0, this.setValues(e)
}, XG.EmissiveMaterial.prototype = Object.create(XG.Material.prototype), XG.EmissiveMaterial.prototype.clone = function() {
    var e = new XG.EmissiveMaterial;
    return XG.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.intensity = this.intensity, e.map = this.map, e.lightMap = this.lightMap, e.fog = this.fog, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.particleSize = this.particleSize, e.particleSizeAttenuation = this.particleSizeAttenuation, e
}, XG.PhongMaterial = function(e) {
    XG.Material.call(this), this.color = new XG.Color(16777215), this.specular = new XG.Color(1118481), this.shininess = 30, this.metal = !1, this.parallax = !1, this.parallaxScale = 1, this.parallaxRefineSteps = 3, this.wrapAround = !1, this.wrapAroundSkin = !1, this.wrapRGB = new XG.Vector3(1, 1, 1), this.map = null, this.lightMap = null, this.glossMap = null, this.specularMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalGlossMap = null, this.normalScale = new XG.Vector2(1, 1), this.bumpDetailMap = null, this.normalDetailMap = null, this.detailScale = 1, this.detailRepeat = new XG.Vector2(1, 1), this.fog = !0, this.vertexColors = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.lights = !0, this.setValues(e)
}, XG.PhongMaterial.prototype = Object.create(XG.Material.prototype), XG.PhongMaterial.prototype.clone = function() {
    var e = new XG.PhongMaterial;
    return XG.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.specular.copy(this.specular), e.shininess = this.shininess, e.metal = this.metal, e.parallax = this.parallax, e.parallaxScale = this.parallaxScale, e.parallaxRefineSteps = this.parallaxRefineSteps, e.wrapAround = this.wrapAround, e.wrapAroundSkin = this.wrapAroundSkin, e.wrapRGB.copy(this.wrapRGB), e.map = this.map, e.lightMap = this.lightMap, e.bumpMap = this.bumpMap, e.bumpScale = this.bumpScale, e.normalMap = this.normalMap, e.normalGlossMap = this.normalGlossMap, e.normalScale.copy(this.normalScale), e.bumpDetailMap = this.bumpDetailMap, e.normalDetailMap = this.normalDetailMap, e.detailScale = this.detailScale, e.detailRepeat.copy(this.detailRepeat), e.glossMap = this.glossMap, e.specularMap = this.specularMap, e.fog = this.fog, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
}, XG.DynamicParticleMaterial = function(e) {
    XG.Material.call(this), this.color = new XG.Color(16777215), this.intensity = 1, this.map = null, this.fog = !0, this.vertexColors = !1, this.particle = !0, this.particleSize = 1, this.particleSizeAttenuation = !0, this.time = 0, this.timeRange = 1, this.timeOffset = 0, this.numFrames = 1, this.frameDuration = 1, this.interpolateFrames = !0, this.additiveFactor = 0, this.lights = !1, this.setValues(e)
}, XG.DynamicParticleMaterial.prototype = Object.create(XG.Material.prototype), XG.DynamicParticleMaterial.prototype.clone = function() {
    var e = new XG.DynamicParticleMaterial;
    return XG.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.intensity = this.intensity, e.map = this.map, e.fog = this.fog, e.vertexColors = this.vertexColors, e.particleSize = this.particleSize, e.particleSizeAttenuation = this.particleSizeAttenuation, e.time = this.time, e.timeRange = this.timeRange, e.timeOffset = this.timeOffset, e.numFrames = this.numFrames, e.frameDuration = this.frameDuration, e.interpolateFrames = this.interpolateFrames, e.additiveFactor = this.additiveFactor, e.lights = this.lights, e
}, XG.ShaderMaterial = function(e) {
    XG.Material.call(this), this.fragmentShader = "void main() {}", this.vertexShader = "void main() {}", this.uniforms = {}, this.defines = {}, this.extensions = {}, this.attributes = null, this.fog = !1, this.lights = !1, this.vertexColors = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.forceShadow = !1, this.setValues(e)
}, XG.ShaderMaterial.prototype = Object.create(XG.Material.prototype), XG.ShaderMaterial.prototype.clone = function() {
    var e = new XG.ShaderMaterial;
    return XG.Material.prototype.clone.call(this, e), e.fragmentShader = this.fragmentShader, e.vertexShader = this.vertexShader, e.uniforms = XG.UniformsUtils.clone(this.uniforms), e.defines = this.defines, e.extensions = this.extensions, e.attributes = this.attributes, e.fog = this.fog, e.lights = this.lights, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e.forceShadow = this.forceShadow, e
}, XG.SpriteMaterial = function(e) {
    void 0 === e && (e = {});
    var t = void 0 !== e.billboard ? e.billboard : !0,
        r = void 0 !== e.antialias ? e.antialias : !1,
        a = void 0 !== e.sdf ? e.sdf : !0,
        i = void 0 !== e.fog ? e.fog : !0,
        o = void 0 !== e.alphaTest ? e.alphaTest : r ? .01 : .5,
        n = void 0 !== e.epsilon ? e.epsilon : .1,
        s = void 0 !== e.fogDensity ? e.fogDensity : .015,
        l = void 0 !== e.fogColor ? e.fogColor : 0,
        h = void 0 !== e.color ? e.color : 16777215,
        d = XG.SpriteShader,
        u = {
            BILLBOARD: t,
            ANTIALIAS: r,
            SDF: a,
            FOG: i
        },
        c = XG.UniformsUtils.clone(d.uniforms);
    c.map.value = e.textureAtlas, c.alphaTest.value = o, c.epsilon.value = n, c.fogDensity.value = s, c.fogColor.value.setHex(l), c.baseColor.value.setHex(h), r && (e.transparent = !0), e.alphaTest = o, e.vertexShader = d.vertexShader, e.fragmentShader = d.fragmentShader, e.extensions = d.extensions, e.uniforms = c, XG.ShaderMaterial.call(this, e), this.defines = u, this.uniforms = c
}, XG.SpriteMaterial.prototype = Object.create(XG.ShaderMaterial.prototype), XG.Texture = function(e, t, r, a, i, o, n, s) {
    this.id = XG.TextureIdCount++, this.name = "", this.image = e, this.mipmaps = [], this.mipmapCount = 0, this.wrapS = void 0 !== t ? t : XG.ClampToEdgeWrapping, this.wrapT = void 0 !== r ? r : XG.ClampToEdgeWrapping, this.magFilter = void 0 !== a ? a : XG.LinearFilter, this.minFilter = void 0 !== i ? i : XG.LinearMipMapLinearFilter, this.anisotropy = void 0 !== s ? s : 1, this.format = void 0 !== o ? o : XG.RGBAFormat, this.type = void 0 !== n ? n : XG.UnsignedByteType, this.offset = new XG.Vector2(0, 0), this.repeat = new XG.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.needsUpdate = !1, this.onUpdate = null
}, XG.Texture.prototype = {
    constructor: XG.Texture,
    clone: function(e) {
        return void 0 === e && (e = new XG.Texture), e.image = this.image, e.mipmaps = this.mipmaps.slice(0), e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.format = this.format, e.type = this.type, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.generateMipmaps = this.generateMipmaps, e.premultiplyAlpha = this.premultiplyAlpha, e.flipY = this.flipY, e.unpackAlignment = this.unpackAlignment, e
    }
}, XG.TextureIdCount = 0, XG.CompressedTexture = function(e, t, r, a, i, o, n, s, l, h) {
    XG.Texture.call(this, null, o, n, s, l, a, i, h), this.image = {
        width: t,
        height: r
    }, this.mipmaps = e, this.generateMipmaps = !1
}, XG.CompressedTexture.prototype = Object.create(XG.Texture.prototype), XG.CompressedTexture.prototype.clone = function() {
    var e = new XG.CompressedTexture;
    return XG.Texture.prototype.clone.call(this, e), e
}, XG.DataTexture = function(e, t, r, a, i, o, n, s, l, h) {
    XG.Texture.call(this, null, o, n, s, l, a, i, h), this.image = {
        data: e,
        width: t,
        height: r
    }
}, XG.DataTexture.prototype = Object.create(XG.Texture.prototype), XG.DataTexture.prototype.clone = function() {
    var e = new XG.DataTexture;
    return XG.Texture.prototype.clone.call(this, e), e
}, XG.ShaderChunk = {}, XG.UniformsLib = {}, XG.ShaderLib = {}, XG.UniformsLib.common = {
    map: {
        type: "t",
        value: null
    },
    offsetRepeat: {
        type: "v4",
        value: new XG.Vector4(0, 0, 1, 1)
    },
    lightMap: {
        type: "t",
        value: null
    },
    brightness: {
        type: "f",
        value: 1
    },
    whitePoint: {
        type: "f",
        value: 1
    }
}, XG.UniformsLib.bump = {
    bumpMap: {
        type: "t",
        value: null
    },
    bumpScale: {
        type: "f",
        value: 1
    },
    bumpDetailMap: {
        type: "t",
        value: null
    }
}, XG.UniformsLib.normalmap = {
    normalMap: {
        type: "t",
        value: null
    },
    normalScale: {
        type: "v2",
        value: new XG.Vector2(1, 1)
    },
    normalDetailMap: {
        type: "t",
        value: null
    }
}, XG.UniformsLib.particle = {
    particleSize: {
        type: "f",
        value: 1
    },
    screenWidth: {
        type: "f",
        value: 1920
    }
}, XG.UniformsLib.fogAtmo = {
    fogColor: {
        type: "c",
        value: new XG.Color(0)
    },
    fogStrength: {
        type: "f",
        value: .1
    },
    fogStart: {
        type: "f",
        value: 100
    }
}, XG.ShaderChunk.fogAtmoFragmentPars = ["#ifdef FOG_ENABLED", "uniform vec3 fogColor;", "uniform float fogStrength;", "uniform float fogStart;", "vec3 addFog( vec3 color, float depth ) {", "float fogFactor = depth / ( cameraNearFar.y - cameraNearFar.x );", "fogFactor *= smoothstep( 0.0, fogStart, depth );", "fogFactor = clamp( fogFactor, 0.0, fogStrength );", "return mix( color, fogColor, fogFactor );", "}", "#endif"].join("\n"), XG.ShaderChunk.linearDepthFragmentPars = ["float linearizeDepth( float depth, vec2 cameraNearFar ) {", "return -cameraNearFar.y * cameraNearFar.x / ( depth * ( cameraNearFar.y - cameraNearFar.x ) - cameraNearFar.y );", "}"].join("\n"), XG.ShaderChunk.color_pars_fragment = ["#ifdef USE_COLOR", "varying vec3 vColor;", "#endif"].join("\n"), XG.ShaderChunk.color_fragment = ["#ifdef USE_COLOR", "gl_FragColor.rgb *= vColor;", "#endif"].join("\n"), XG.ShaderChunk.color_pars_vertex = ["#ifdef USE_COLOR", "varying vec3 vColor;", "#endif"].join("\n"), XG.ShaderChunk.color_vertex = ["#ifdef USE_COLOR", "#ifdef GAMMA_INPUT", "vColor = color * color;", "#else", "vColor = color;", "#endif", "#endif"].join("\n"), XG.ShaderChunk.map_pars_vertex = ["#if !defined( PARTICLE ) && ( defined( USE_MAP ) || defined( USE_LIGHTMAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined ( USE_NORMALGLOSSMAP ) || defined ( USE_GLOSSMAP ) || defined( USE_SPECULARMAP ) )", "varying vec2 vUv;", "uniform vec4 offsetRepeat;", "#endif"].join("\n"), XG.ShaderChunk.map_pars_fragment = ["#if !defined( PARTICLE ) && ( defined( USE_MAP ) || defined( USE_LIGHTMAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_NORMALGLOSSMAP ) || defined ( USE_GLOSSMAP ) || defined( USE_SPECULARMAP ) )", "varying vec2 vUv;", "#endif", "#ifdef USE_MAP", "uniform sampler2D map;", "#endif"].join("\n"), XG.ShaderChunk.map_vertex = ["#if !defined( PARTICLE ) && ( defined( USE_MAP ) || defined( USE_LIGHTMAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_BUMPDETAILMAP ) || defined( USE_NORMALDETAILMAP ) || defined( USE_NORMALGLOSSMAP ) || defined ( USE_GLOSSMAP ) || defined( USE_SPECULARMAP ) )", "vUv = uv * offsetRepeat.zw + offsetRepeat.xy;", "#endif"].join("\n"), XG.ShaderChunk.map_fragment = ["#ifdef USE_MAP", "vec2 texCoord;", "#ifdef PARTICLE", "texCoord = vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y );", "#else", "texCoord = uvCoord;", "#endif", "vec4 texelColor = texture2D( map, texCoord );", "#ifdef GAMMA_INPUT", "texelColor.xyz *= texelColor.xyz;", "#endif", "gl_FragColor = gl_FragColor * texelColor;", "#endif"].join("\n"), XG.ShaderChunk.specularmap_pars_fragment = ["#ifdef USE_SPECULARMAP", "uniform sampler2D specularMap;", "#endif"].join("\n"), XG.ShaderChunk.specularmap_fragment = ["vec3 specularMapColor;", "#ifdef USE_SPECULARMAP", "vec4 texelSpecular = texture2D( specularMap, uvCoord );", "specularMapColor = texelSpecular.rgb;", "#else", "specularMapColor = vec3( 1.0 );", "#endif"].join("\n"), XG.ShaderChunk.glossmap_pars_fragment = ["#ifdef USE_GLOSSMAP", "uniform sampler2D glossMap;", "#endif"].join("\n"), XG.ShaderChunk.lightmap_pars_fragment = ["#ifdef USE_LIGHTMAP", "uniform sampler2D lightMap;", "#endif"].join("\n"), XG.ShaderChunk.lightmap_fragment = ["#ifdef USE_LIGHTMAP", "float lightMapIntensity = texture2D( lightMap, uvCoord ).r;", "#else", "float lightMapIntensity = 1.0;", "#endif"].join("\n"), XG.ShaderChunk.bumpmap_pars_fragment = ["#ifdef USE_BUMPDETAILMAP", "uniform sampler2D bumpDetailMap;", "#endif", "#ifdef USE_BUMPMAP", "uniform sampler2D bumpMap;", "uniform float bumpScale;", "vec2 dHdxy_fwd( const in sampler2D sourceMap, const in vec2 texCoord, const in float sourceScale ) {", "vec2 dSTdx = dFdx( texCoord );", "vec2 dSTdy = dFdy( texCoord );", "float Hll = sourceScale * texture2D( sourceMap, texCoord ).x;", "float dBx = sourceScale * texture2D( sourceMap, texCoord + dSTdx ).x - Hll;", "float dBy = sourceScale * texture2D( sourceMap, texCoord + dSTdy ).x - Hll;", "return vec2( dBx, dBy );", "}", "vec3 perturbNormalArb( const in vec3 surf_pos, const in vec3 surf_norm, const in vec2 dHdxy ) {", "vec3 vSigmaX = dFdx( surf_pos );", "vec3 vSigmaY = dFdy( surf_pos );", "vec3 vN = surf_norm;", "vec3 R1 = cross( vSigmaY, vN );", "vec3 R2 = cross( vN, vSigmaX );", "float fDet = dot( vSigmaX, R1 );", "vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );", "return normalize( abs( fDet ) * surf_norm - vGrad );", "}", "#endif"].join("\n"), XG.ShaderChunk.normalmap_pars_fragment = ["#ifdef USE_NORMALDETAILMAP", "uniform sampler2D normalDetailMap;", "#endif", "#if defined( USE_NORMALMAP ) || defined( USE_NORMALGLOSSMAP ) || defined( USE_NORMALDETAILMAP )", "uniform sampler2D normalMap;", "uniform vec2 normalScale;", "vec3 perturbNormal2Arb( const in vec3 eye_pos, const in vec3 surf_norm, const in vec3 normal_pixel, const in vec2 texCoord ) {", "vec3 q0 = dFdx( eye_pos.xyz );", "vec3 q1 = dFdy( eye_pos.xyz );", "vec2 st0 = dFdx( texCoord.st );", "vec2 st1 = dFdy( texCoord.st );", "vec3 S = normalize(  q0 * st1.t - q1 * st0.t );", "vec3 T = normalize( -q0 * st1.s + q1 * st0.s );", "vec3 N = normalize( surf_norm );", "vec3 mapN = normal_pixel * 2.0 - 1.0;", "mapN.xy = normalScale * mapN.xy;", "mat3 tsn = mat3( S, T, N );", "return normalize( tsn * mapN );", "}", "#endif"].join("\n"), XG.ShaderChunk.parallax_pars_fragment = ["#if defined( USE_PARALLAX ) && defined( USE_BUMPMAP )", "uniform float parallaxScale;", "vec2 computeParallaxProjection( const in vec3 surf_pos, const in vec3 surf_norm, const in vec3 surf_view, const in vec2 texCoord ) {", "vec2 TexDx = dFdx( texCoord );", "vec2 TexDy = dFdy( texCoord );", "vec3 vSigmaX = dFdx( surf_pos );", "vec3 vSigmaY = dFdy( surf_pos );", "vec3 vN = surf_norm;", "vec3 vR1 = cross( vSigmaY, vN );", "vec3 vR2 = cross( vN, vSigmaX );", "float fDet = dot( vSigmaX, vR1 );", "vec3 vV = surf_view;", "vec2 vProjVscr = ( 1.0 / fDet ) * vec2( dot( vR1, vV ), dot( vR2, vV ) );", "vec2 vProjVtex = TexDx * vProjVscr.x + TexDy * vProjVscr.y;", "return vProjVtex;", "}", "#endif"].join("\n"), XG.ShaderChunk.parallax_fragment = ["#if defined( USE_PARALLAX ) && defined( USE_BUMPMAP )", "float height = parallaxScale * ( 2.0 * texture2D( bumpMap, vUv ).x - 1.0 );", "vec2 parallaxProjection = computeParallaxProjection( vViewPosition, normal, eyeVector, vUv );", "vec2 uvOffset = parallaxProjection * height;", "uvCoord += uvOffset;", "#ifdef PARALLAX_REFINE_STEPS", "for ( int i = 0; i < PARALLAX_REFINE_STEPS; i ++ ) {", "height += parallaxScale * ( texture2D( bumpMap, uvCoord ).x - 1.0 );", "uvOffset = parallaxProjection * height;", "uvCoord = vUv + uvOffset;", "}", "#endif", "#endif"].join("\n"), XG.ShaderChunk.skinning_pars_vertex = ["#ifdef USE_SKINNING", "#ifdef BONE_TEXTURE", "uniform sampler2D boneTexture;", "mat4 getBoneMatrix( const in float i ) {", "float j = i * 4.0;", "float x = mod( j, N_BONE_PIXEL_X );", "float y = floor( j / N_BONE_PIXEL_X );", "const float dx = 1.0 / N_BONE_PIXEL_X;", "const float dy = 1.0 / N_BONE_PIXEL_Y;", "y = dy * ( y + 0.5 );", "vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );", "vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );", "vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );", "vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );", "mat4 bone = mat4( v1, v2, v3, v4 );", "return bone;", "}", "#else", "uniform mat4 boneGlobalMatrices[ MAX_BONES ];", "mat4 getBoneMatrix( const in float i ) {", "mat4 bone = boneGlobalMatrices[ int(i) ];", "return bone;", "}", "#endif", "#endif"].join("\n"), XG.ShaderChunk.skinbase_vertex = ["#ifdef USE_SKINNING", "mat4 boneMatX = getBoneMatrix( skinIndex.x );", "mat4 boneMatY = getBoneMatrix( skinIndex.y );", "#endif"].join("\n"), XG.ShaderChunk.skinning_vertex = ["#ifdef USE_SKINNING", "#ifdef USE_MORPHTARGETS", "vec4 skinVertex = vec4( morphed, 1.0 );", "#else", "vec4 skinVertex = vec4( position, 1.0 );", "#endif", "vec4 skinned  = boneMatX * skinVertex * skinWeight.x;", "skinned 	  += boneMatY * skinVertex * skinWeight.y;", "#endif"].join("\n"), XG.ShaderChunk.morphtarget_pars_vertex = ["#ifdef USE_MORPHTARGETS", "uniform float morphTargetInfluences[ 4 ];", "#endif"].join("\n"), XG.ShaderChunk.morphtarget_vertex = ["#ifdef USE_MORPHTARGETS", "vec3 morphed = vec3( 0.0 );", "morphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];", "#if MAX_MORPHTARGETS > 1", "morphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];", "#if MAX_MORPHTARGETS > 2", "morphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];", "#if MAX_MORPHTARGETS > 3", "morphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];", "#endif", "#endif", "#endif", "morphed += position;", "#endif"].join("\n"), XG.ShaderChunk.default_vertex = ["vec4 mvPosition;", "#ifdef USE_SKINNING", "mvPosition = modelViewMatrix * skinned;", "#endif", "#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )", "mvPosition = modelViewMatrix * vec4( morphed, 1.0 );", "#endif", "#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )", "mvPosition = modelViewMatrix * vec4( position, 1.0 );", "#endif", "gl_Position = projectionMatrix * mvPosition;"].join("\n"), XG.ShaderChunk.morphnormal_vertex = ["#ifdef USE_MORPHNORMALS", "vec3 morphedNormal = vec3( 0.0 );", "morphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];", "#if MAX_MORPHNORMALS > 1", "morphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];", "#if MAX_MORPHNORMALS > 2", "morphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];", "#if MAX_MORPHNORMALS > 3", "morphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];", "#endif", "#endif", "#endif", "morphedNormal += normal;", "#endif"].join("\n"), XG.ShaderChunk.skinnormal_vertex = ["#ifdef USE_SKINNING", "mat4 skinMatrix = skinWeight.x * boneMatX;", "skinMatrix 	+= skinWeight.y * boneMatY;", "#ifdef USE_MORPHNORMALS", "vec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );", "#else", "vec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );", "#endif", "#endif"].join("\n"), XG.ShaderChunk.defaultnormal_vertex = ["vec3 objectNormal;", "#ifdef USE_SKINNING", "objectNormal = skinnedNormal.xyz;", "#endif", "#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )", "objectNormal = morphedNormal;", "#endif", "#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )", "objectNormal = normal;", "#endif", "#ifdef FLIP_SIDED", "objectNormal = -objectNormal;", "#endif", "vec3 transformedNormal = normalMatrix * objectNormal;"].join("\n"), XG.ShaderChunk.particle_pars_vertex = ["#ifdef PARTICLE", "uniform float particleSize;", "uniform float screenWidth;", "#endif"].join("\n"), XG.ShaderChunk.particle_vertex = ["#ifdef PARTICLE", "#ifdef USE_PARTICLE_SIZEATTENUATION", "vec4 projectedCorner = projectionMatrix * vec4( 0.5 * particleSize, 0.5 * particleSize, mvPosition.z, mvPosition.w );", "gl_PointSize = screenWidth * projectedCorner.x / projectedCorner.w;", "#else", "gl_PointSize = particleSize;", "#endif", "#endif"].join("\n"), XG.ShaderChunk.tonemappingFragmentPars = ["#ifdef TONEMAPPING", "const vec3 GAMMA = vec3( 1.0 / 2.2 );", "const vec3 LUMA = vec3( 0.2126, 0.7152, 0.0722 );", "uniform float brightness;", "uniform float whitePoint;", "#ifdef TONEMAP_UNCHARTED", "const float A = 0.15;", "const float B = 0.50;", "const float C = 0.10;", "const float D = 0.20;", "const float E = 0.02;", "const float F = 0.30;", "const float W = 11.2;", "vec3 Uncharted2Tonemap( vec3 x ) {", "return ( ( x * ( A * x + C * B ) + D * E ) / ( x * ( A * x + B ) + D * F ) ) - E / F;", "}", "#endif", "vec3 applyTonemapping( vec3 inColor, float inBrightness, float inWhitePoint ) {", "vec3 outColor = inColor * inBrightness;", "#if defined( TONEMAP_SIMPLE )", "outColor = sqrt( outColor );", "#elif defined( TONEMAP_LINEAR )", "outColor = pow( outColor, GAMMA );", "#elif defined( TONEMAP_REINHARD )", "outColor = outColor / ( 1.0 + outColor );", "outColor = pow( outColor, GAMMA );", "#elif defined( TONEMAP_REINHARD_LUMA )", "float luma = dot( outColor, LUMA );", "float toneMappedLuma = luma / ( 1.0 + luma );", "outColor *= toneMappedLuma / luma;", "outColor = pow( outColor, GAMMA );", "#elif defined( TONEMAP_REINHARD_WHITE )", "float white = 2.0 * inWhitePoint;", "float luma = dot( outColor, LUMA );", "float toneMappedLuma = luma * ( 1.0 + luma / ( white * white ) ) / ( 1.0 + luma );", "outColor *= toneMappedLuma / luma;", "outColor = pow( outColor, GAMMA );", "#elif defined( TONEMAP_FILMIC )", "vec3 x = max( vec3( 0.0 ), outColor - 0.004 );", "outColor = ( x * ( 6.2 * x + 0.5 ) ) / ( x * ( 6.2 * x + 1.7 ) + 0.06 );", "#elif defined( TONEMAP_FILMIC_2015 )", "vec4 vh = vec4( outColor, inWhitePoint );", "vec4 va = ( 1.425 * vh ) + 0.05;", "vec4 vf = ( ( vh * va + 0.004 ) / ( ( vh * ( va + 0.55 ) + 0.0491 ) ) ) - 0.0821;", "outColor = vf.rgb / vf.www;", "outColor = pow( outColor, GAMMA );", "#elif defined( TONEMAP_PHOTOGRAPHIC )", "const float exposureBias = 3.0;", "const float saturationBias = 1.3;", "outColor = 1.0 - exp2( -exposureBias * outColor );", "outColor = pow( outColor, vec3( saturationBias / 2.2 ) );", "#elif defined( TONEMAP_UNCHARTED )", "float exposureBias = 2.0;", "vec3 curr = Uncharted2Tonemap( exposureBias * outColor );", "float white = W * inWhitePoint;", "vec3 whiteScale = vec3( 1.0 ) / Uncharted2Tonemap( vec3( white ) );", "vec3 color = curr * whiteScale;", "outColor = pow( color, GAMMA );", "#endif", "return outColor;", "}", "#endif"].join("\n"), XG.ShaderChunk.ditheringFragmentPars = ["#ifdef DITHERING_ENABLED", "float nrand( vec2 n ) {", "return fract( sin( dot( n.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );", "}", "vec3 applyDithering( vec3 inColor, vec2 rndSeed ) {", "float rnd = nrand( rndSeed ) - 0.5;", "inColor.rgb += rnd/255.0;", "return inColor;", "}", "#endif"].join("\n"), XG.ShaderChunk.vertexShaderFullscreenTriangle = ["void main() {", "gl_Position = vec4( position.xyz, 1.0 );", "}"].join("\n"), XG.ShaderChunk.vertexShaderFullscreenTriangleUV = ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = vec4( position.xyz, 1.0 );", "}"].join("\n"), XG.ShaderChunk.vertexShaderGeometry = ["void main() { ", "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "gl_Position = projectionMatrix * mvPosition;", "}"].join("\n"), XG.ShaderChunk.fog_pars_fragment = ["#ifdef USE_FOG", "uniform vec3 fogColor;", "#if defined( EXPONENTIAL_FOG )", "uniform float fogDensity;", "#elif defined( LINEAR_FOG )", "uniform vec2 fogNearFar;", "#elif defined( ATMOSPHERIC_FOG )", "uniform vec2 fogStartStrength;", "#endif", "#endif"].join("\n"), XG.ShaderChunk.fog_fragment = ["#ifdef USE_FOG", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "#if defined( EXPONENTIAL_FOG )", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "#elif defined( LINEAR_FOG )", "fogFactor = smoothstep( fogNearFar.x, fogNearFar.y, depth );", "#elif defined( ATMOSPHERIC_FOG )", "float linearDepth = linearizeDepth( vClipPosition.z / vClipPosition.w, cameraNearFar );", "fogFactor = linearDepth / ( cameraNearFar.y - cameraNearFar.x );", "fogFactor *= smoothstep( 0.0, fogStartStrength.x, linearDepth );", "fogFactor = clamp( fogFactor, 0.0, fogStartStrength.y );", "#endif", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "#endif"].join("\n"), XG.ShaderChunk.height_fog_pars_fragment = ["#ifdef USE_HEIGHT_FOG", "uniform float fogHeight;", "uniform float fogVisibilityDistance;", "uniform float fogFadeSpeed;", "uniform vec3 fogShallowDepthColor;", "uniform vec3 fogDeepDepthColor;", "uniform vec3 fogRgbExtinctionDistance;", "#endif"].join("\n"), XG.ShaderChunk.height_fog_fragment = ["#ifdef USE_HEIGHT_FOG", "vec3 u = vertexPositionWS.xyz - cameraPosition;", "vec3 w = cameraPosition - vec3( 0.0, fogHeight, 0.0 );", "vec3 n = vec3( 0.0, 1.0, 0.0 );", "float D = dot( n, u );", "float N = -dot( n, w );", "float sI = N / D;", "vec3 intersectionPosition = cameraPosition + sI * u;", "float fogThickness = length( intersectionPosition - vertexPositionWS.xyz );", "if ( vertexPositionWS.y > fogHeight ) {", "fogThickness = 0.0;", "}", "float fogThickness2 = intersectionPosition.y - vertexPositionWS.y;", "if ( cameraPosition.y < fogHeight ) {", "}", "float r1 = clamp( fogFadeSpeed * fogThickness / fogVisibilityDistance, 0.0, 1.0 );", "vec3 r2 = clamp( fogThickness2 / fogRgbExtinctionDistance, 0.0, 1.0 );", "gl_FragColor.xyz = mix( mix( gl_FragColor.xyz, fogShallowDepthColor * globalLightFactor, r1 ), fogDeepDepthColor * globalLightFactor, r2 );", "#endif"].join("\n"), XG.ShaderChunk.worldpos_vertex = ["#if defined( USE_SHADOWMAP )", "#ifdef USE_SKINNING", "vec4 worldPosition = modelMatrix * skinned;", "#endif", "#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )", "vec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );", "#endif", "#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )", "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );", "#endif", "#endif"].join("\n"), XG.ShaderChunk.area_lights_utils = ["#if MAX_AREA_LIGHTS > 0", "vec3 projectOnPlane( vec3 point, vec3 planeCenter, vec3 planeNorm ) {", "return point - dot( point - planeCenter, planeNorm ) * planeNorm;", "}", "bool sideOfPlane( vec3 point, vec3 planeCenter, vec3 planeNorm ) {", "return ( dot( point - planeCenter, planeNorm ) >= 0.0 );", "}", "vec3 linePlaneIntersect( vec3 lp, vec3 lv, vec3 pc, vec3 pn ) {", "return lp + lv * ( dot( pn, pc - lp ) / dot( pn, lv ) );", "}", "float calculateAttenuation( float dist, float constantAttenuation, float linearAttenuation, float quadraticAttenuation ) {", "return ( 1.0 / ( constantAttenuation + linearAttenuation * dist + quadraticAttenuation * dist * dist ) );", "}", "#endif"].join("\n"), XG.ShaderChunk.lights_phong_pars_fragment = ["#if MAX_DIR_LIGHTS > 0", "uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];", "uniform vec3 directionalLightDirectionVS[ MAX_DIR_LIGHTS ];", "uniform int directionalLightPars[ MAX_DIR_LIGHTS ];", "#endif", "#if MAX_HEMI_LIGHTS > 0", "uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];", "uniform vec3 hemisphereLightDirectionVS[ MAX_HEMI_LIGHTS ];", "#endif", "#if MAX_POINT_LIGHTS > 0", "uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];", "uniform vec3 pointLightPositionVS[ MAX_POINT_LIGHTS ];", "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];", "#endif", "#if MAX_SPHERE_LIGHTS > 0", "uniform vec3 sphereLightColor[ MAX_SPHERE_LIGHTS ];", "uniform vec3 sphereLightPositionVS[ MAX_SPHERE_LIGHTS ];", "uniform vec3 sphereLightPars[ MAX_SPHERE_LIGHTS ];", "#endif", "#if MAX_TUBE_LIGHTS > 0", "uniform vec3 tubeLightColor[ MAX_TUBE_LIGHTS ];", "uniform vec3 tubeLightPosition0VS[ MAX_TUBE_LIGHTS ];", "uniform vec3 tubeLightPosition1VS[ MAX_TUBE_LIGHTS ];", "uniform vec2 tubeLightPars[ MAX_TUBE_LIGHTS ];", "#endif", "#if MAX_SPOT_LIGHTS > 0", "uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightPositionVS[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightDirectionVS[ MAX_SPOT_LIGHTS ];", "uniform vec4 spotLightPars[ MAX_SPOT_LIGHTS ];", "#endif", "#if MAX_AREA_LIGHTS > 0", "uniform vec3 areaLightColor[ MAX_AREA_LIGHTS ];", "uniform vec3 areaLightPosition[ MAX_AREA_LIGHTS ];", "uniform vec3 areaLightNormal[ MAX_AREA_LIGHTS ];", "uniform vec3 areaLightRight[ MAX_AREA_LIGHTS ];", "uniform vec3 areaLightUp[ MAX_AREA_LIGHTS ];", "uniform vec4 areaLightPars[ MAX_AREA_LIGHTS ];", "uniform vec3 areaLightAttenuation[ MAX_AREA_LIGHTS ];", "#ifdef AREA_TEXTURE", "uniform sampler2D areaLightTexture[ MAX_AREA_LIGHTS ];", "#endif", "#endif", "#if MAX_IMAGE_LIGHTS > 0", "#if !defined( SUPPORTS_TEXTURE_LOD )", "uniform samplerCube imageLightTextureMip[ MAX_IMAGE_LIGHTS ];", "#endif", "uniform samplerCube imageLightTextureDiffuse[ MAX_IMAGE_LIGHTS ];", "uniform samplerCube imageLightTextureSpecular[ MAX_IMAGE_LIGHTS ];", "uniform vec3 imageLightPars[ MAX_IMAGE_LIGHTS ];", "uniform vec3 imageLightPositionWS[ MAX_IMAGE_LIGHTS ];", "uniform vec3 imageLightSize[ MAX_IMAGE_LIGHTS ];", "#endif", "#if MAX_IMAGE_LIGHTS > 0 || defined( USE_HEIGHT_FOG )", "uniform mat4 viewInverseMatrix;", "#endif", "#if MAX_IMAGE_LIGHTS > 0 || MAX_HEMI_LIGHTS > 0", "vec3 EnvironmentBRDF( float gloss, float dotNV, vec3 rf0 ) {", "vec4 t = vec4( 1.0 / 0.96, 0.475, ( 0.0275 - 0.25 * 0.04 ) / 0.96, 0.25 );", "t *= vec4( gloss );", "t += vec4( 0.0, 0.0, ( 0.015 - 0.75 * 0.04 ) / 0.96, 0.75 );", "float a0 = t.x * min( t.y, exp2( -9.28 * dotNV ) ) + t.z;", "float a1 = t.w;", "return clamp( a0 + rf0 * ( a1 - a0 ), 0.0, 1.0 );", "}", "#endif", "#ifdef WRAP_AROUND", "uniform vec3 wrapRGB;", "#endif", "float SmithGeometryFactor1( vec3 L, vec3 V, vec3 N, float shininess ) {", "vec3 H = L + V;", "float dotVN = dot( V, N );", "float dotVH = dot( V, H );", "if ( ( dotVH / dotVN ) <= 0.0 ) return 0.0;", "float f = acos( dotVN );", "float a = sqrt( 0.5 * shininess + 1.0 ) / tan( f );", "float G = 1.0;", "if ( a < 1.6 )", "G = ( 3.535 * a + 2.181 * a * a ) / ( 1.0 + 2.276 * a + 2.577 * a * a );", "return G;", "}", "float SmithGeometryFactor2( float dotLN, vec3 V, vec3 N, float shininess ) {", "float dotNV = max( dot( N, V ), 0.0 );", "float a = 1.0 / ( sqrt( 0.7854 * shininess + 1.571 ) );", "return 1.0 / ( ( dotLN * ( 1.0 - a ) + a ) * ( dotNV * ( 1.0 - a ) + a ) );", "}", "float KelemenGeometryFactor( float dotLH ) {", "return 1.0 / ( dotLH * dotLH );", "}", "float GGX_SchlickGeometryFactor_V1( in float k, in float dotNX ) {", "return dotNX / ( dotNX * ( 1.0 - k ) + k );", "}", "float GGX_SchlickGeometryFactor_V2( in float k, in float dotNX ) {", "return 1.0 / ( dotNX + sqrt( k + ( 1.0 - k ) * dotNX * dotNX ) );", "}", "float saturate( float x ) {", "return clamp( x, 0.0, 1.0 );", "}", "vec3 saturate( vec3 x ) {", "return clamp( x, vec3( 0.0 ), vec3( 1.0 ) );", "}", "float GGX_Specular( in float m, in vec3 n, in vec3 h, in vec3 v, in vec3 l ) {", "float nDotH = saturate( dot( n, h ) );", "float nDotL = saturate( dot( n, l ) );", "float nDotV = saturate( dot( n, v ) );", "float nDotH2 = nDotH * nDotH;", "float m2 = pow( m, 4.0 );", "float d = m2 / ( pow( nDotH * nDotH * ( m2 - 1.0 ) + 1.0, 2.0 ) );", "float v1i = GGX_SchlickGeometryFactor_V2( m2, nDotL );", "float v1o = GGX_SchlickGeometryFactor_V2( m2, nDotV );", "float vis = v1i * v1o;", "return d * vis;", "}", "float BlinnPhong_Specular( in float shininess, in float dotLN, in float dotNormalHalf, in vec3 eyeVector, in vec3 normal ) {", "float geo = SmithGeometryFactor2( dotLN, eyeVector, normal, shininess );", "return geo * max( pow( dotNormalHalf, shininess ), 0.0 );", "}", "vec3 PSSFitFunction( in float NdotL, in float r ) {", "const vec3 a0 = vec3( 0.0605, 0.2076, 0.2243 );", "const vec3 a1 = vec3( 0.0903, 0.1687, 0.2436 );", "const vec3 a2 = vec3( -0.0210, -0.0942, -0.1116 );", "const vec3 a3 = vec3( 0.6896, 0.6762, 0.6480 );", "const vec3 a4 = vec3( -0.1110, -0.5023, -0.6703 );", "const vec3 a5 = vec3( 0.8177, 0.9119, 0.9209 );", "vec3 t = vec3( NdotL ) * ( a0 * r + a1 ) + ( a2 * r + a3 );", "vec3 fade = saturate( a4 * r + a5 );", "return t * t * t * fade + saturate( NdotL ) * ( 1.0 - fade );", "}", "varying vec3 vViewPosition;", "varying vec3 vNormal;"].join("\n"), XG.ShaderChunk.lights_phong_fragment = ["#ifdef DOUBLE_SIDED", "normal *= ( 2.0 * float( gl_FrontFacing ) - 1.0 );", "#endif", "#if defined( USE_NORMALMAP ) || defined( USE_NORMALGLOSSMAP )", "vec4 normalGlossMap = texture2D( normalMap, uvCoord );", "#endif", "#if defined( USE_NORMALMAP ) || defined( USE_NORMALGLOSSMAP )", "normal = perturbNormal2Arb( vViewPosition, normal, normalGlossMap.xyz, uvCoord );", "#elif defined( USE_BUMPMAP )", "normal = perturbNormalArb( vViewPosition, normal, dHdxy_fwd( bumpMap, uvCoord, bumpScale ) );", "#endif", "#ifdef USE_BUMPDETAILMAP", "normal = perturbNormalArb( vViewPosition, normal, dHdxy_fwd( bumpDetailMap, uvCoord * detailRepeatScale.xy, detailRepeatScale.z ) );", "#endif", "#if defined( USE_GLOSSMAP )", "vec4 glossMap = texture2D( glossMap, uvCoord );", "float glossMapValue = exp2( 13.0 * glossMap.x + 1.0 );", "#elif defined( USE_NORMALGLOSSMAP )", "float glossMapValue = exp2( 13.0 * normalGlossMap.a + 1.0 );", "#else", "float glossMapValue = 1.0;", "#endif", "vec3 globalLightFactor = vec3( 0.0 );", "#if MAX_IMAGE_LIGHTS > 0 || defined( USE_HEIGHT_FOG )", "vec4 vertexPositionWS = viewInverseMatrix * vec4( vertexPosition, 1.0 );", "#endif", "float shininess = glossMapValue * specular.a;", "float specularNormalization = shininess * 0.125 + 0.25;", "vec3 specularColor = specular.rgb * specularMapColor;", "const float maxShininess = 8192.0;", "float gloss = clamp( shininess / maxShininess, 0.0, 1.0 );", "float roughness = saturate( sqrt( 8.0 / ( shininess + 7.0 ) ) );", "#if defined( WRAP_AROUND ) && defined( WRAP_AROUND_SKIN )", "float curvature = length( fwidth( vNormal.xyz ) ) / length( fwidth( vertexPosition.xyz ) );", "#endif", "#if MAX_POINT_LIGHTS > 0", "vec3 pointDiffuse  = vec3( 0.0 );", "vec3 pointSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {", "vec3 lightPosition = pointLightPositionVS[ i ];", "vec3 lightVector = lightPosition - vViewPosition;", "float lightDistance = length( lightVector );", "float attenuation = 1.0;", "if ( pointLightDistance[ i ] > 0.0 ) {", "float cutoff = 0.3;", "float denom = lightDistance / pointLightDistance[ i ] + 1.0;", "attenuation = 1.0 / ( denom * denom );", "attenuation = ( attenuation - cutoff ) / ( 1.0 - cutoff );", "attenuation = max( attenuation, 0.0 );", "attenuation *= attenuation;", "}", "lightVector = lightVector / lightDistance;", "float dotLNUnclamped = dot( normal, lightVector );", "float dotLN = max( dotLNUnclamped, 0.0 );", "#ifdef WRAP_AROUND", "#ifdef WRAP_AROUND_SKIN", "vec3 pointDiffuseWeight = PSSFitFunction( dot( vNormal, lightVector ), curvature );", "#else", "float pointDiffuseWeightFull = dotLN;", "float pointDiffuseWeightHalf = max( 0.25 * dotLNUnclamped + 0.25, 0.0 );", "vec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );", "#endif", "#else", "float pointDiffuseWeight = dotLN;", "#endif", "pointDiffuseWeight *= attenuation;", "vec3 diffuseTerm = ( diffuse.rgb * pointLightColor[ i ] ) * pointDiffuseWeight;", "vec3 pointHalfVector = normalize( lightVector + eyeVector );", "float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float dotLH = max( dot( lightVector, pointHalfVector ), 0.0 );", "vec3 fresnel = specularColor + ( 1.0 - specularColor ) * pow( 1.0 - dotLH, 5.0 );", "#if defined( BRDF_BLINN_PHONG )", "pointSpecular += attenuation * specularNormalization * BlinnPhong_Specular( shininess, dotLN, pointDotNormalHalf, eyeVector, normal ) * ( fresnel * dotLN ) * pointLightColor[ i ];", "#elif defined( BRDF_GGX )", "pointSpecular += attenuation * GGX_Specular( roughness, normal, pointHalfVector, eyeVector, lightVector ) * ( fresnel * dotLN ) * pointLightColor[ i ];", "#endif", "#else", "float pointSpecularWeight = max( pow( pointDotNormalHalf, shininess ), 0.0 );", "pointSpecular += attenuation * ( pointSpecularWeight * dotLN ) * ( specularColor * pointLightColor[ i ] );", "#endif", "#ifdef PHYSICALLY_BASED_SHADING", "pointDiffuse  += ( 1.0 - fresnel ) * diffuseTerm;", "#else", "pointDiffuse  += diffuseTerm;", "#endif", "globalLightFactor += pointLightColor[ i ] * attenuation;", "}", "#endif", "#if MAX_SPHERE_LIGHTS > 0", "vec3 sphereDiffuse  = vec3( 0.0 );", "vec3 sphereSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_SPHERE_LIGHTS; i ++ ) {", "vec3 lightPosition = sphereLightPositionVS[ i ];", "vec3 lightVectorFull = lightPosition - vViewPosition;", "float lightDistance = length( lightVectorFull );", "float attenuation = 1.0;", "float maxDistance = sphereLightPars[ i ].x;", "float lightRadius = sphereLightPars[ i ].y;", "if ( maxDistance > 0.0 ) {", "float cutoff = 0.3;", "float denom = lightDistance / maxDistance + 1.0;", "attenuation = 1.0 / ( denom * denom );", "attenuation = ( attenuation - cutoff ) / ( 1.0 - cutoff );", "attenuation = max( attenuation, 0.0 );", "attenuation *= attenuation;", "}", "vec3 lightVector = lightVectorFull / lightDistance;", "float dotLNUnclamped = dot( normal, lightVector );", "float dotLN = max( dotLNUnclamped, 0.0 );", "#ifdef WRAP_AROUND", "#ifdef WRAP_AROUND_SKIN", "vec3 sphereDiffuseWeight = PSSFitFunction( dot( vNormal, lightVector ), curvature );", "#else", "float sphereDiffuseWeightFull = dotLN;", "float sphereDiffuseWeightHalf = max( 0.25 * dotLNUnclamped + 0.25, 0.0 );", "vec3 sphereDiffuseWeight = mix( vec3( sphereDiffuseWeightFull ), vec3( sphereDiffuseWeightHalf ), wrapRGB );", "#endif", "#else", "float sphereDiffuseWeight = dotLN;", "#endif", "sphereDiffuseWeight *= attenuation;", "vec3 diffuseTerm = ( diffuse.rgb * sphereLightColor[ i ] ) * sphereDiffuseWeight;", "vec3 specularTerm;", "vec3 reflectVS1 = reflect( eyeVector, normal );", "vec3 centerToRay = lightVectorFull - dot( lightVectorFull, reflectVS1 ) * reflectVS1;", "vec3 closestPoint = lightVectorFull - centerToRay * saturate( lightRadius / length( centerToRay ) );", "lightVector = normalize( closestPoint );", "dotLN = max( dot( lightVector, normal ), 0.0 );", "float alpha = roughness * roughness;", "float alphaPrime = saturate( alpha + 0.5 * saturate( lightRadius / lightDistance ) );", "float sphereNormalization = alpha / alphaPrime;", "sphereNormalization *= sphereNormalization;", "vec3 sphereHalfVector = normalize( lightVector + eyeVector );", "float sphereDotNormalHalf = max( dot( normal, sphereHalfVector ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float dotLH = max( dot( lightVector, sphereHalfVector ), 0.0 );", "vec3 fresnel = specularColor + ( 1.0 - specularColor ) * pow( 1.0 - dotLH, 5.0 );", "#if defined( BRDF_BLINN_PHONG )", "specularTerm = sphereNormalization * attenuation * BlinnPhong_Specular( shininess, dotLN, sphereDotNormalHalf, eyeVector, normal ) * ( fresnel * dotLN ) * sphereLightColor[ i ];", "#elif defined( BRDF_GGX )", "specularTerm = sphereNormalization * attenuation * GGX_Specular( roughness, normal, sphereHalfVector, eyeVector, lightVector ) * ( fresnel * dotLN ) * sphereLightColor[ i ];", "#endif", "#else", "float sphereSpecularWeight = max( pow( sphereDotNormalHalf, shininess ), 0.0 );", "specularTerm = attenuation * ( sphereSpecularWeight * dotLN ) * ( specularColor * sphereLightColor[ i ] );", "#endif", "#ifdef USE_SHADOWMAP", "int shadowIndex = int( sphereLightPars[ i ].z );", "if ( ( i + SPHERE_INDEX_OFFSET ) == shadowIndex ) {", "diffuseTerm  *= occlusion[ i ];", "specularTerm *= occlusion[ i ];", "}", "#endif", "sphereSpecular += specularTerm;", "#ifdef PHYSICALLY_BASED_SHADING", "sphereDiffuse  += ( 1.0 - fresnel ) * diffuseTerm;", "#else", "sphereDiffuse  += diffuseTerm;", "#endif", "globalLightFactor += sphereLightColor[ i ] * attenuation;", "}", "#endif", "#if MAX_TUBE_LIGHTS > 0", "vec3 tubeDiffuse  = vec3( 0.0 );", "vec3 tubeSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_TUBE_LIGHTS; i ++ ) {", "vec3 lightPosition0 = tubeLightPosition0VS[ i ];", "vec3 lightPosition1 = tubeLightPosition1VS[ i ];", "float attenuation = 1.0;", "float maxDistance = tubeLightPars[ i ].x;", "float lightRadius = tubeLightPars[ i ].y;", "vec3 lightVector0 = lightPosition0 - vertexPosition;", "vec3 lightVector1 = lightPosition1 - vertexPosition;", "float length0 = length( lightVector0 );", "float length1 = length( lightVector1 );", "float a = saturate( 0.5 * ( dot( normal, lightVector0 ) / length0 + dot( normal, lightVector1 ) / length1 ) );", "float b = ( length0 * length1 + dot( lightVector0, lightVector1 ) ) * 0.5 + 1.0;", "float dotLN = a;", "vec3 tubeDiffuseWeight = vec3( dotLN );", "vec3 diffuseTerm = ( diffuse.rgb * tubeLightColor[ i ] ) * tubeDiffuseWeight;", "vec3 reflectVS1 = reflect( eyeVector, normal );", "vec3 lightVectorD = lightVector1 - lightVector0;", "float lengthD = length( lightVectorD );", "float dotRD = dot( reflectVS1, lightVectorD );", "float ta = dot( reflectVS1, lightVector0 ) * dotRD - dot( lightVector0, lightVectorD );", "float tb = lengthD * lengthD - dotRD * dotRD;", "float t = ta / tb;", "vec3 closestPoint = lightVector0 + saturate( t ) * lightVectorD;", "vec3 lightVectorClosest = closestPoint;", "vec3 centerToRay = lightVectorClosest - dot( lightVectorClosest, reflectVS1 ) * reflectVS1;", "closestPoint = lightVectorClosest - centerToRay * saturate( lightRadius / length( centerToRay ) );", "vec3 lightVector = normalize( closestPoint );", "vec3 lightVectorFull = ( lightPosition0 + lightPosition1 ) * 0.5 - vertexPosition.xyz;", "float distance = length( lightVectorFull );", "float alpha = roughness * roughness;", "float alphaPrime = saturate( alpha + 0.5 * saturate( lightRadius / distance ) );", "float sphereNormalization = alpha / alphaPrime;", "sphereNormalization *= sphereNormalization;", "float alphaPrimeLine = saturate( alpha + 0.5 * saturate( lengthD / distance ) );", "float lineNormalization = alpha / alphaPrimeLine;", "float tubeNormalization = sphereNormalization * lineNormalization;", "if ( maxDistance > 0.0 ) {", "attenuation = 1.0 / b;", "}", "vec3 sphereHalfVector = normalize( lightVector + eyeVector );", "float sphereDotNormalHalf = max( dot( normal, sphereHalfVector ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float dotLH = max( dot( lightVector, sphereHalfVector ), 0.0 );", "vec3 fresnel = specularColor + ( 1.0 - specularColor ) * pow( 1.0 - dotLH, 5.0 );", "#if defined( BRDF_BLINN_PHONG )", "tubeSpecular += tubeNormalization * attenuation * BlinnPhong_Specular( shininess, dotLN, sphereDotNormalHalf, eyeVector, normal ) * ( fresnel * dotLN ) * tubeLightColor[ i ];", "#elif defined( BRDF_GGX )", "tubeSpecular += tubeNormalization * attenuation * GGX_Specular( roughness, normal, sphereHalfVector, eyeVector, lightVector ) * ( fresnel * dotLN ) * tubeLightColor[ i ];", "#endif", "#else", "float sphereSpecularWeight = max( pow( sphereDotNormalHalf, shininess ), 0.0 );", "sphereSpecular += attenuation * ( sphereSpecularWeight * dotLN ) * ( specularColor * sphereLightColor[ i ] );", "#endif", "#ifdef PHYSICALLY_BASED_SHADING", "tubeDiffuse  += ( 1.0 - fresnel ) * diffuseTerm * attenuation;", "#else", "tubeDiffuse  += diffuseTerm * attenuation;", "#endif", "globalLightFactor += tubeLightColor[ i ] * attenuation;", "}", "#endif", "#if MAX_SPOT_LIGHTS > 0", "vec3 spotDiffuse  = vec3( 0.0 );", "vec3 spotSpecular = vec3( 0.0 );", "for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {", "vec3 lightPosition = spotLightPositionVS[ i ];", "vec3 lightVector = lightPosition - vViewPosition;", "float lightDistance = length( lightVector );", "float spotLightAngleCos = spotLightPars[ i ].x;", "float spotLightExponent = spotLightPars[ i ].y;", "float spotLightDistance = spotLightPars[ i ].z;", "float attenuation = 1.0;", "if ( spotLightDistance > 0.0 )", "attenuation = 1.0 - min( lightDistance / spotLightDistance, 1.0 );", "lightVector = lightVector / lightDistance;", "float rho = dot( spotLightDirectionVS[ i ], lightVector );", "if ( rho > spotLightAngleCos ) {;", "float theta = spotLightAngleCos + 0.0001;", "float phi = spotLightAngleCos + 0.05;", "const float falloff = 4.0;", "float spotEffect = 0.0;", "if ( rho >= phi ) {", "spotEffect = 1.0;", "} else if ( rho <= theta ) {", "spotEffect = 0.0;", "} else { ", "spotEffect = pow( ( rho - theta ) / ( phi - theta ), falloff );", "}", "attenuation *= spotEffect;", "float dotLNUnclamped = dot( normal, lightVector );", "float dotLN = max( dotLNUnclamped, 0.0 );", "#ifdef WRAP_AROUND", "#ifdef WRAP_AROUND_SKIN", "vec3 spotDiffuseWeight = PSSFitFunction( dot( vNormal, lightVector ), curvature );", "#else", "float spotDiffuseWeightFull = dotLN;", "float spotDiffuseWeightHalf = max( 0.25 * dotLNUnclamped + 0.25, 0.0 );", "vec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );", "#endif", "#else", "float spotDiffuseWeight = dotLN;", "#endif", "spotDiffuseWeight *= attenuation;", "vec3 diffuseTerm = spotDiffuseWeight * ( diffuse.rgb * spotLightColor[ i ] );", "vec3 spotHalfVector = normalize( lightVector + eyeVector );", "float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float dotLH = max( dot( lightVector, spotHalfVector ), 0.0 );", "vec3 fresnel = specularColor + ( 1.0 - specularColor ) * pow( 1.0 - dotLH, 5.0 );", "#if defined( BRDF_BLINN_PHONG )", "vec3 specularTerm = attenuation * specularNormalization * BlinnPhong_Specular( shininess, dotLN, spotDotNormalHalf, eyeVector, normal ) * ( fresnel * dotLN ) * spotLightColor[ i ];", "#elif defined( BRDF_GGX )", "vec3 specularTerm = attenuation * GGX_Specular( roughness, normal, spotHalfVector, eyeVector, lightVector ) * ( fresnel * dotLN ) * spotLightColor[ i ];", "#endif", "#else", "float spotSpecularWeight = max( pow( spotDotNormalHalf, shininess ), 0.0 );", "vec3 specularTerm = attenuation * ( spotSpecularWeight * dotLN ) * ( specularColor * spotLightColor[ i ] );", "#endif", "#ifdef USE_SHADOWMAP", "int shadowIndex = int( spotLightPars[ i ].w );", "if ( ( i + SPOT_INDEX_OFFSET ) == shadowIndex ) {", "diffuseTerm  *= occlusion[ i ];", "specularTerm *= occlusion[ i ];", "}", "#endif", "#ifdef PHYSICALLY_BASED_SHADING", "spotDiffuse  += ( 1.0 - fresnel ) * diffuseTerm;", "#else", "spotDiffuse  += diffuseTerm;", "#endif", "spotSpecular += specularTerm;", "globalLightFactor += spotLightColor[ i ] * attenuation;", "}", "}", "#endif", "#if MAX_DIR_LIGHTS > 0", "vec3 dirDiffuse  = vec3( 0.0 );", "vec3 dirSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {", "vec3 lightDirection = directionalLightDirectionVS[ i ];", "vec3 lightVector = normalize( lightDirection );", "float dotLNUnclamped = dot( normal, lightVector );", "float dotLN = max( dotLNUnclamped, 0.0 );", "#ifdef WRAP_AROUND", "#ifdef WRAP_AROUND_SKIN", "vec3 dirDiffuseWeight = PSSFitFunction( dot( vNormal, lightVector ), curvature );", "#else", "float dirDiffuseWeightFull = dotLN;", "float dirDiffuseWeightHalf = max( 0.25 * dotLNUnclamped + 0.25, 0.0 );", "vec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );", "#endif", "#else", "float dirDiffuseWeight = dotLN;", "#endif", "vec3 diffuseTerm = diffuse.rgb * directionalLightColor[ i ] * dirDiffuseWeight;", "vec3 dirHalfVector = normalize( lightVector + eyeVector );", "float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );", "#ifdef PHYSICALLY_BASED_SHADING", "float dotLH = max( dot( lightVector, dirHalfVector ), 0.0 );", "vec3 fresnel = specularColor + ( 1.0 - specularColor ) * pow( 1.0 - dotLH, 5.0 );", "#if defined( BRDF_BLINN_PHONG )", "vec3 specularTerm = specularNormalization * BlinnPhong_Specular( shininess, dotLN, dirDotNormalHalf, eyeVector, normal ) * ( fresnel * dotLN ) * directionalLightColor[ i ];", "#elif defined( BRDF_GGX )", "vec3 specularTerm = GGX_Specular( roughness, normal, dirHalfVector, eyeVector, lightVector ) * ( fresnel * dotLN ) * directionalLightColor[ i ];", "#endif", "#else", "float dirSpecularWeight = max( pow( dirDotNormalHalf, shininess ), 0.0 );", "vec3 specularTerm = ( dirSpecularWeight * dotLN ) * ( specularColor * directionalLightColor[ i ] );", "#endif", "#ifdef USE_SHADOWMAP", "int shadowIndex = directionalLightPars[ i ];", "if ( ( i + DIR_INDEX_OFFSET ) == shadowIndex ) {", "diffuseTerm  *= occlusion[ i ];", "specularTerm *= occlusion[ i ];", "}", "#endif", "#ifdef PHYSICALLY_BASED_SHADING", "dirDiffuse  += ( 1.0 - fresnel ) * diffuseTerm;", "#else", "dirDiffuse  += diffuseTerm;", "#endif", "dirSpecular += specularTerm;", "globalLightFactor += directionalLightColor[ i ];", "}", "#endif", "#if MAX_HEMI_LIGHTS > 0", "vec3 hemiDiffuse  = vec3( 0.0 );", "vec3 hemiSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {", "vec3 lightDirection = hemisphereLightDirectionVS[ i ];", "vec3 lightVector = normalize( lightDirection.xyz );", "vec3 halfVector = normalize( lightVector + eyeVector );", "vec3 fresnelHemi = EnvironmentBRDF( gloss, dot( eyeVector, halfVector ), specularColor );", "float dotProductHemi = dot( normal, lightVector );", "float hemiDiffuseWeight = clamp( 0.5 * dotProductHemi + 0.5, 0.0, 1.0 );", "vec3 diffuseHemi = ( 1.0 - fresnelHemi ) * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );", "vec3 R = reflect( -eyeVector, normal );", "R = normalize( R );", "float hemiSpecularWeight = clamp( dot( R, lightVector ) * 0.5 + 0.5, 0.0, 1.0 );", "vec3 specularHemi = fresnelHemi * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiSpecularWeight );", "hemiDiffuse += diffuse.rgb * diffuseHemi;", "hemiSpecular += specularHemi;", "globalLightFactor += hemisphereLightSkyColor[ i ];", "}", "#endif", "#if MAX_AREA_LIGHTS > 0", "vec3 areaDiffuse  = vec3( 0.0 );", "vec3 areaSpecular = vec3( 0.0 );", "for( int i = 0; i < MAX_AREA_LIGHTS; i ++ ) {", "float w = areaLightPars[ i ].x;", "float h = areaLightPars[ i ].y;", "vec3 proj = projectOnPlane( vertexPosition, areaLightPosition[ i ], areaLightNormal[ i ] );", "vec3 dir = proj - areaLightPosition[ i ];", "vec2 diagonal = vec2( dot( dir, areaLightRight[ i ] ), dot( dir, areaLightUp[ i ] ) );", "vec2 nearest2D = vec2( clamp( diagonal.x, -w, w ), clamp( diagonal.y, -h, h ) );", "vec3 nearestPointInside = areaLightPosition[ i ] + ( areaLightRight[ i ] * nearest2D.x + areaLightUp[ i ] * nearest2D.y );", "vec3 lightDir = normalize( nearestPointInside - vertexPosition );", "float NdotL = max( dot( areaLightNormal[ i ], -lightDir ), 0.0 );", "float NdotL2 = max( dot( normal, lightDir ), 0.0 );", "float dotLN = sqrt( NdotL * NdotL2 );", "vec3 areaDiffuseWeight = vec3( dotLN );", "#ifdef WRAP_AROUND", "if ( NdotL > 0.0 ) {", "#ifdef WRAP_AROUND_SKIN", "areaDiffuseWeight = PSSFitFunction( sqrt( NdotL * dot( vNormal, lightDir ) ), curvature );", "#else", "float dotLNHalf = max( 0.25 * dotLN + 0.25, 0.0 );", "areaDiffuseWeight = mix( areaDiffuseWeight, vec3( dotLNHalf ), wrapRGB );", "#endif", "}", "#endif", "float dist = distance( vertexPosition, nearestPointInside );", "float attenuation = calculateAttenuation( dist, areaLightAttenuation[ i ].x, areaLightAttenuation[ i ].y, areaLightAttenuation[ i ].z );", "areaDiffuseWeight *= attenuation;", "vec3 areaDiffuseTerm = areaDiffuseWeight * ( diffuse.rgb * areaLightColor[ i ] );", "#ifdef AREA_TEXTURE", "if ( areaLightPars[ i ].z > 0.0 ) {", "float d = distance( vertexPosition, nearestPointInside );", "vec2 co = ( diagonal.xy + vec2( w, h ) ) / ( 2.0 * vec2( w, h ) );", "co.y = 1.0 - co.y;", "vec3 ve = vertexPosition - areaLightPosition[ i ];", "vec4 diff = vec4( 0.0 );", "if ( dot( ve, areaLightNormal[ i ] ) < 0.0 ) {", "diff = vec4( 0.0 );", "} else {", "float lod = max( pow( d, 0.1 ), 0.0 ) * 5.0;", "vec4 t00 = texture2D( areaLightTexture[ i ], co, lod );", "vec4 t01 = texture2D( areaLightTexture[ i ], co, lod + 1.0 );", "diff = mix( t00, t01, 0.5 );", "}", "areaDiffuseTerm *= diff.xyz;", "}", "#endif", "vec3 areaSpecularTerm = vec3( 0.0 );", "vec3 fresnel = vec3( 0.0 );", "vec3 R = reflect( eyeVector, normal );", "vec3 E = linePlaneIntersect( vertexPosition, R, areaLightPosition[ i ], areaLightNormal[ i ] );", "float specAngle = dot( R, areaLightNormal[ i ] );", "if ( dot( vertexPosition - areaLightPosition[ i ], areaLightNormal[ i ] ) >= 0.0 && specAngle > 0.0 ) {", "vec3 dirSpec = E - areaLightPosition[ i ];", "vec2 dirSpec2D = vec2( dot( dirSpec, areaLightRight[ i ] ), dot( dirSpec, areaLightUp[ i ] ) );", "vec2 nearestSpec2D = vec2( clamp( dirSpec2D.x, -w, w ), clamp( dirSpec2D.y, -h, h ) );", "vec3 nearestPointInsideSpec = areaLightPosition[ i ] + ( areaLightRight[ i ] * nearestSpec2D.x + areaLightUp[ i ] * nearestSpec2D.y );", "vec3 lightDirSpec = normalize( nearestPointInsideSpec - vertexPosition );", "vec3 halfVectorSpec = normalize( lightDirSpec + eyeVector );", "float dotNormalHalf = max( dot( normal, halfVectorSpec ), 0.0 );", "float dotLH = max( dot( lightDirSpec, halfVectorSpec ), 0.0 );", "fresnel = specularColor + ( 1.0 - specularColor ) * pow( 1.0 - dotLH, 5.0 );", "#if defined( BRDF_BLINN_PHONG )", "areaSpecularTerm = specularNormalization * BlinnPhong_Specular( shininess, dotLN, dotNormalHalf, eyeVector, normal ) * ( fresnel * areaDiffuseWeight ) * specAngle * areaLightColor[ i ];", "#elif defined( BRDF_GGX )", "areaSpecularTerm = GGX_Specular( roughness, normal, halfVectorSpec, eyeVector, lightDirSpec ) * ( fresnel * areaDiffuseWeight ) * specAngle * areaLightColor[ i ];", "#endif", "#ifdef AREA_TEXTURE", "if ( areaLightPars[ i ].z > 0.0 ) {", "float areaHard = 16.0;", "float areaGloss = 16.0;", "vec3 specPlane = areaLightPosition[ i ] + ( areaLightRight[ i ] * dirSpec2D.x + areaLightUp[ i ] * dirSpec2D.y );", "float dist = max( distance( vertexPosition, specPlane ), 0.0 );", "float d = ( ( 1.0 / areaHard ) / 2.0 ) * ( dist / areaGloss );", "w = max( w, 0.0 );", "h = max( h, 0.0 );", "vec2 co = dirSpec2D / ( d + 1.0 );", "co /= 2.0 * vec2( w, h );", "co = co + vec2( 0.5 );", "co.y = 1.0 - co.y;", "float lod = ( 2.0 / areaHard * max( dist, 0.0 ) );", "vec4 t00 = texture2D( areaLightTexture[ i ], co, lod );", "vec4 t01 = texture2D( areaLightTexture[ i ], co, lod + 1.0 );", "vec4 spec = mix( t00, t01, 0.5 );", "areaSpecularTerm *= spec.xyz;", "}", "#endif", "}", "#ifdef USE_SHADOWMAP", "int shadowIndex = int( areaLightPars[ i ].w );", "if ( ( i + AREA_INDEX_OFFSET ) == shadowIndex ) {", "areaDiffuseTerm  *= occlusion[ i ];", "areaSpecularTerm *= occlusion[ i ];", "}", "#endif", "areaDiffuse  += ( 1.0 - fresnel * specAngle ) * areaDiffuseTerm;", "areaSpecular += areaSpecularTerm;", "globalLightFactor += areaLightColor[ i ] * attenuation;", "}", "#endif", "#if MAX_IMAGE_LIGHTS > 0", "vec3 imageDiffuse  = vec3( 0.0 );", "vec3 imageSpecular = vec3( 0.0 );", "vec3 reflectVS = reflect( -eyeVector, normal );", "vec4 reflectWS = viewInverseMatrix * vec4( reflectVS, 0.0 );", "vec3 fresnelEnv = EnvironmentBRDF( gloss, dot( eyeVector, normal ), specularColor );", "for( int i = 0; i < MAX_IMAGE_LIGHTS; i ++ ) {", "float maxMipSpecular = imageLightPars[ i ].x;", "float lightIntensity = imageLightPars[ i ].y;", "float lightLocal 	  = imageLightPars[ i ].z;", "float localFade = 1.0;", "if ( lightLocal > 0.0 ) {", "vec3 lightPositionWS = imageLightPositionWS[ i ];", "vec3 lightSize = imageLightSize[ i ];", "vec3 BoxMin = lightPositionWS - lightSize;", "vec3 BoxMax = lightPositionWS + lightSize;", "vec3 FirstPlaneIntersect = ( BoxMax - vertexPositionWS.xyz ) / reflectWS.xyz;", "vec3 SecondPlaneIntersect = ( BoxMin - vertexPositionWS.xyz ) / reflectWS.xyz;", "vec3 FurthestPlane = max( FirstPlaneIntersect, SecondPlaneIntersect );", "float Distance = min( min( FurthestPlane.x, FurthestPlane.y ), FurthestPlane.z );", "vec3 IntersectPositionWS = vertexPositionWS.xyz + reflectWS.xyz * Distance;", "reflectWS.xyz = IntersectPositionWS - lightPositionWS;", "vec3 lightVectorWS = abs( lightPositionWS.xyz - vertexPositionWS.xyz );", "if ( lightVectorWS.x > lightSize.x || lightVectorWS.y > lightSize.y || lightVectorWS.z > lightSize.z ) {", "localFade = 0.0;", "} else {", "vec3 normLength = lightVectorWS / lightSize;", "float maxLength = max( normLength.x, max( normLength.y, normLength.z ) );", "localFade = max( 1.0 - maxLength, 0.0 );", "}", "}", "vec3 cubeCoord = reflectWS.xyz;", "float maxMipLevel = maxMipSpecular - 2.0;", "#ifdef SUPPORTS_TEXTURE_LOD", "float mipLod = max( ( maxMipLevel * ( 1.0 - gloss ) ), 1.5 );", "vec3 cubeColorSpecular = textureCubeLodEXT( imageLightTextureSpecular[ i ], cubeCoord, mipLod ).rgb;", "#ifdef GAMMA_INPUT", "cubeColorSpecular *= cubeColorSpecular;", "#endif", "#else", "const float mipUnit = 255.0 / 16.0;", "float mipLevelMinification = mipUnit * textureCube( imageLightTextureMip[ i ], cubeCoord ).a;", "float mipLevelMagnification = mipUnit * textureCube( imageLightTextureMip[ i ], cubeCoord, maxMipSpecular - 1.0 ).a;", "float mipLevel;", "if ( mipLevelMinification == 0.0 ) {", "mipLevel = mipLevelMagnification - ( maxMipSpecular - 1.0 );", "} else {", "mipLevel = mipLevelMinification;", "}", "float mipBias = max( ( maxMipLevel * ( 1.0 - gloss ) ) - mipLevel, 0.0 );", "vec3 cubeColorSpecular = textureCube( imageLightTextureSpecular[ i ], cubeCoord, mipBias ).rgb;", "#ifdef GAMMA_INPUT", "cubeColorSpecular *= cubeColorSpecular;", "#endif", "#endif", "vec4 normalWS = viewInverseMatrix * vec4( normal, 0.0 );", "vec3 cubeColorDiffuse = textureCube( imageLightTextureDiffuse[ i ], normalWS.xyz ).rgb;", "#ifdef GAMMA_INPUT", "cubeColorDiffuse *= cubeColorDiffuse;", "#endif", "imageSpecular += localFade * lightIntensity * cubeColorSpecular * fresnelEnv;", "imageDiffuse += localFade * lightIntensity * cubeColorDiffuse * ( 1.0 - fresnelEnv ) * diffuse.rgb;", "globalLightFactor += cubeColorDiffuse[ i ] * lightIntensity;", "}", "#endif", "vec3 totalDiffuse = vec3( 0.0 );", "vec3 totalSpecular = vec3( 0.0 );", "#if MAX_DIR_LIGHTS > 0", "totalDiffuse += dirDiffuse;", "totalSpecular += dirSpecular;", "#endif", "#if MAX_HEMI_LIGHTS > 0", "totalDiffuse += hemiDiffuse * lightMapIntensity;", "totalSpecular += hemiSpecular * lightMapIntensity;", "#endif", "#if MAX_POINT_LIGHTS > 0", "totalDiffuse += pointDiffuse;", "totalSpecular += pointSpecular;", "#endif", "#if MAX_SPHERE_LIGHTS > 0", "totalDiffuse += sphereDiffuse;", "totalSpecular += sphereSpecular;", "#endif", "#if MAX_TUBE_LIGHTS > 0", "totalDiffuse += tubeDiffuse;", "totalSpecular += tubeSpecular;", "#endif", "#if MAX_SPOT_LIGHTS > 0", "totalDiffuse += spotDiffuse;", "totalSpecular += spotSpecular;", "#endif", "#if MAX_AREA_LIGHTS > 0", "totalDiffuse += areaDiffuse;", "totalSpecular += areaSpecular;", "#endif", "#if MAX_IMAGE_LIGHTS > 0", "totalDiffuse += imageDiffuse * lightMapIntensity;", "totalSpecular += imageSpecular * lightMapIntensity;", "#endif", "totalDiffuse *= gl_FragColor.a;", "#ifdef METAL", "gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + totalSpecular );", "#else", "gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse ) + totalSpecular;", "#endif"].join("\n"), XG.ShaderChunk.shadowmap_pars_fragment = ["#ifdef USE_SHADOWMAP", "uniform sampler2D shadowMap[ MAX_SHADOWS ];", "uniform vec4 shadowMapPars[ MAX_SHADOWS ];", "varying vec4 vShadowCoord[ MAX_SHADOWS ];", "#ifdef DEPTH_TEXTURES", "float unpackDepth( const in vec4 depth ) {", "return depth.x;", "}", "#else", "float unpackDepth( const in vec4 rgba_depth ) {", "const vec4 bit_shift = vec4( 1.0 / 16777216.0, 1.0 / 65536.0, 1.0 / 256.0, 1.0 );", "float depth = dot( rgba_depth, bit_shift );", "return depth;", "}", "#endif", "float sampleShadowPCFSoft( sampler2D shadowMap, vec2 shadowMapSize, vec2 shadowCoord, float vertexDepth ) {", "float shadowDepth;", "float shadow = 0.0;", "float xPixelOffset = 1.0 / shadowMapSize.x;", "float yPixelOffset = 1.0 / shadowMapSize.y;", "float dx0 = -1.0 * xPixelOffset;", "float dy0 = -1.0 * yPixelOffset;", "float dx1 = 1.0 * xPixelOffset;", "float dy1 = 1.0 * yPixelOffset;", "mat3 shadowKernel;", "shadowDepth = unpackDepth( texture2D( shadowMap, shadowCoord + vec2( dx0, dy0 ) ) );", "shadowKernel[0][0] = float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap, shadowCoord + vec2( dx0, 0.0 ) ) );", "shadowKernel[0][1] = float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap, shadowCoord + vec2( dx0, dy1 ) ) );", "shadowKernel[0][2] = float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap, shadowCoord + vec2( 0.0, dy0 ) ) );", "shadowKernel[1][0] = float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap, shadowCoord ) );", "shadowKernel[1][1] = float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap, shadowCoord + vec2( 0.0, dy1 ) ) );", "shadowKernel[1][2] = float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap, shadowCoord + vec2( dx1, dy0 ) ) );", "shadowKernel[2][0] = float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap, shadowCoord + vec2( dx1, 0.0 ) ) );", "shadowKernel[2][1] = float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap, shadowCoord + vec2( dx1, dy1 ) ) );", "shadowKernel[2][2] = float( vertexDepth > shadowDepth );", "shadowKernel *= 0.25;", "vec2 fractionalCoord = 1.0 - fract( shadowCoord * shadowMapSize );", "shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );", "shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );", "vec4 shadowValues;", "shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );", "shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );", "shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );", "shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );", "float shadowValue = dot( shadowValues, vec4( 1.0 ) );", "return shadowValue;", "}", "#endif"].join("\n"), XG.ShaderChunk.shadowmap_fragment = ["#ifdef USE_SHADOWMAP", "float occlusion[ MAX_SHADOWS ];", "#ifdef SHADOWMAP_DEBUG", "vec3 frustumColors[4];", "frustumColors[0] = vec3( 1.0, 0.5, 0.0 );", "frustumColors[1] = vec3( 0.0, 1.0, 0.8 );", "frustumColors[2] = vec3( 0.0, 0.5, 1.0 );", "frustumColors[3] = vec3( 1.0, 0.5, 1.0 );", "#endif", "#ifdef SHADOWMAP_CASCADE", "int inFrustumCount = 0;", "float combinedOcclusion = 1.0;", "#endif", "float shadowDepth;", "vec3 shadowColor = vec3( 1.0 );", "for( int i = 0; i < MAX_SHADOWS; i ++ ) {", "occlusion[ i ] = 1.0;", "vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;", "vec2 shadowMapSize = shadowMapPars[ i ].xy;", "float shadowDarkness = shadowMapPars[ i ].z;", "float shadowBias = shadowMapPars[ i ].w;", "float vertexDepth = shadowCoord.z;", "bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );", "bool inFrustum = all( inFrustumVec );", "#ifdef SHADOWMAP_CASCADE", "inFrustumCount += int( inFrustum );", "bvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, vertexDepth <= 1.0 );", "#else", "bvec2 frustumTestVec = bvec2( inFrustum, vertexDepth <= 1.0 );", "#endif", "bool frustumTest = all( frustumTestVec );", "if ( frustumTest ) {", "shadowCoord.z += shadowBias;", "#if defined( SHADOWMAP_TYPE_PCF )", "float shadowValue = 0.0;", "const float shadowDelta = 1.0 / 9.0;", "float xPixelOffset = 1.0 / shadowMapPars[ i ].x;", "float yPixelOffset = 1.0 / shadowMapPars[ i ].y;", "float dx0 = -1.25 * xPixelOffset;", "float dy0 = -1.25 * yPixelOffset;", "float dx1 = 1.25 * xPixelOffset;", "float dy1 = 1.25 * yPixelOffset;", "shadowDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "occlusion[ i ] = 1.0 - shadowDarkness * shadowValue;", "#elif defined( SHADOWMAP_TYPE_PCF_SOFT )", "float xPixelOffset = 1.0 / shadowMapPars[ i ].x;", "float yPixelOffset = 1.0 / shadowMapPars[ i ].y;", "float shadowValue = sampleShadowPCFSoft( shadowMap[ i ], shadowMapSize, shadowCoord.xy, vertexDepth );", "occlusion[ i ] = 1.0 - shadowDarkness * shadowValue;", "#elif defined( SHADOWMAP_TYPE_PCF_SOFT_HQ )", "float xPixelOffset = 1.0 / shadowMapPars[ i ].x;", "float yPixelOffset = 1.0 / shadowMapPars[ i ].y;", "float shadowValue0 = sampleShadowPCFSoft( shadowMap[ i ], shadowMapSize, shadowCoord.xy + vec2( -xPixelOffset, 0.0 ), vertexDepth );", "float shadowValue1 = sampleShadowPCFSoft( shadowMap[ i ], shadowMapSize, shadowCoord.xy + vec2(  xPixelOffset, 0.0 ), vertexDepth );", "float shadowValue2 = sampleShadowPCFSoft( shadowMap[ i ], shadowMapSize, shadowCoord.xy + vec2( 0.0, -yPixelOffset ), vertexDepth );", "float shadowValue3 = sampleShadowPCFSoft( shadowMap[ i ], shadowMapSize, shadowCoord.xy + vec2( 0.0,  yPixelOffset ), vertexDepth );", "float shadowValue = ( shadowValue0 + shadowValue1 + shadowValue2 + shadowValue3 ) * 0.25;", "occlusion[ i ] = 1.0 - shadowDarkness * shadowValue;", "#else", "vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );", "float fDepth = unpackDepth( rgbaDepth );", "if ( fDepth < vertexDepth )", "occlusion[ i ] = 1.0 - shadowDarkness;", "#endif", "#ifdef SHADOWMAP_CASCADE", "combinedOcclusion *= occlusion[ i ];", "#endif", "}", "#ifdef SHADOWMAP_DEBUG", "#ifdef SHADOWMAP_CASCADE", "if ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];", "#else", "if ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];", "#endif", "#endif", "}", "#ifdef SHADOWMAP_CASCADE", "occlusion[ DIR_INDEX_OFFSET ] = combinedOcclusion;", "#endif", "#endif"].join("\n"), XG.ShaderChunk.shadowmap_pars_vertex = ["#ifdef USE_SHADOWMAP", "varying vec4 vShadowCoord[ MAX_SHADOWS ];", "uniform mat4 shadowMatrix[ MAX_SHADOWS ];", "#endif"].join("\n"), XG.ShaderChunk.shadowmap_vertex = ["#ifdef USE_SHADOWMAP", "for( int i = 0; i < MAX_SHADOWS; i ++ ) {", "vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;", "}", "#endif"].join("\n"), XG.ShaderChunk.alphatest_fragment = ["#ifdef ALPHATEST", "if ( gl_FragColor.a < ALPHATEST ) discard;", "#endif"].join("\n"), XG.ShaderChunk.linear_to_gamma_fragment = ["#ifdef GAMMA_OUTPUT", "gl_FragColor.xyz = sqrt( gl_FragColor.xyz );", "#endif"].join("\n"), XG.ShaderChunk.tonemapping_fragment = ["#ifdef TONEMAPPING", "gl_FragColor.rgb = applyTonemapping( gl_FragColor.rgb, brightness, whitePoint );", "#endif"].join("\n"), XG.ShaderChunk.dithering_fragment = ["#ifdef DITHERING_ENABLED", "gl_FragColor.rgb = applyDithering( gl_FragColor.rgb, gl_FragCoord.xy );", "#endif"].join("\n"), XG.UniformsLib.fog = {
    fogDensity: {
        type: "f",
        value: 25e-5,
        shared: !0
    },
    fogNearFar: {
        type: "v2",
        value: new XG.Vector2(1, 2e3),
        shared: !0
    },
    fogStartStrength: {
        type: "v2",
        value: new XG.Vector2(100, .1),
        shared: !0
    },
    fogColor: {
        type: "c",
        value: new XG.Color(16777215),
        shared: !0
    }
}, XG.UniformsLib.heightFog = {
    fogHeight: {
        type: "f",
        value: -15,
        shared: !0
    },
    fogVisibilityDistance: {
        type: "f",
        value: 50,
        shared: !0
    },
    fogFadeSpeed: {
        type: "f",
        value: .15,
        shared: !0
    },
    fogShallowDepthColor: {
        type: "c",
        value: (new XG.Color).setRGB(.0078, .5176, .7),
        shared: !0
    },
    fogDeepDepthColor: {
        type: "c",
        value: (new XG.Color).setRGB(.0039, .00196, .145),
        shared: !0
    },
    fogRgbExtinctionDistance: {
        type: "v3",
        value: new XG.Vector3(7, 30, 40),
        shared: !0
    }
}, XG.UniformsLib.lights = {
    directionalLightDirectionVS: {
        type: "fv3",
        value: [],
        shared: !0
    },
    directionalLightColor: {
        type: "fv3",
        value: [],
        shared: !0
    },
    directionalLightPars: {
        type: "iv1",
        value: [],
        shared: !0
    },
    hemisphereLightDirectionVS: {
        type: "fv3",
        value: [],
        shared: !0
    },
    hemisphereLightSkyColor: {
        type: "fv3",
        value: [],
        shared: !0
    },
    hemisphereLightGroundColor: {
        type: "fv3",
        value: [],
        shared: !0
    },
    pointLightColor: {
        type: "fv3",
        value: [],
        shared: !0
    },
    pointLightPositionVS: {
        type: "fv3",
        value: [],
        shared: !0
    },
    pointLightDistance: {
        type: "fv1",
        value: [],
        shared: !0
    },
    sphereLightColor: {
        type: "fv3",
        value: [],
        shared: !0
    },
    sphereLightPositionVS: {
        type: "fv3",
        value: [],
        shared: !0
    },
    sphereLightPars: {
        type: "fv3",
        value: [],
        shared: !0
    },
    tubeLightColor: {
        type: "fv3",
        value: [],
        shared: !0
    },
    tubeLightPosition0VS: {
        type: "fv3",
        value: [],
        shared: !0
    },
    tubeLightPosition1VS: {
        type: "fv3",
        value: [],
        shared: !0
    },
    tubeLightPars: {
        type: "fv2",
        value: [],
        shared: !0
    },
    spotLightColor: {
        type: "fv3",
        value: [],
        shared: !0
    },
    spotLightPositionVS: {
        type: "fv3",
        value: [],
        shared: !0
    },
    spotLightDirectionVS: {
        type: "fv3",
        value: [],
        shared: !0
    },
    spotLightPars: {
        type: "fv4",
        value: [],
        shared: !0
    },
    areaLightColor: {
        type: "fv3",
        value: [],
        shared: !0
    },
    areaLightPosition: {
        type: "fv3",
        value: [],
        shared: !0
    },
    areaLightNormal: {
        type: "fv3",
        value: [],
        shared: !0
    },
    areaLightRight: {
        type: "fv3",
        value: [],
        shared: !0
    },
    areaLightUp: {
        type: "fv3",
        value: [],
        shared: !0
    },
    areaLightPars: {
        type: "fv4",
        value: [],
        shared: !0
    },
    areaLightAttenuation: {
        type: "fv3",
        value: [],
        shared: !0
    },
    areaLightTexture: {
        type: "tv",
        value: [],
        shared: !0
    },
    imageLightTextureDiffuse: {
        type: "tv",
        value: [],
        shared: !0
    },
    imageLightTextureSpecular: {
        type: "tv",
        value: [],
        shared: !0
    },
    imageLightTextureMip: {
        type: "tv",
        value: [],
        shared: !0
    },
    imageLightPars: {
        type: "fv3",
        value: [],
        shared: !0
    },
    imageLightPositionWS: {
        type: "fv3",
        value: [],
        shared: !0
    },
    imageLightSize: {
        type: "fv3",
        value: [],
        shared: !0
    }
}, XG.UniformsLib.dynamicParticle = {
    time: {
        type: "f",
        value: 0
    },
    timeRange: {
        type: "f",
        value: 1.25
    },
    timeOffset: {
        type: "f",
        value: 0
    },
    numFrames: {
        type: "f",
        value: 1
    },
    frameDuration: {
        type: "f",
        value: 1
    },
    tDepth: {
        type: "t",
        value: null,
        shared: !0
    },
    viewSize: {
        type: "v2",
        value: new XG.Vector2(800, 600),
        shared: !0
    }
}, XG.UniformsLib.shadowmap = {
    shadowMap: {
        type: "tv",
        value: [],
        shared: !0
    },
    shadowMapPars: {
        type: "v4v",
        value: [],
        shared: !0
    },
    shadowMatrix: {
        type: "m4v",
        value: [],
        shared: !0
    }
}, XG.ShaderLib.emissive = {
    uniforms: XG.UniformsUtils.merge([{
        diffuse: {
            type: "v4",
            value: new XG.Vector4(.9, .9, .9, 1)
        }
    }, XG.UniformsLib.common, XG.UniformsLib.fog, XG.UniformsLib.particle]),
    vertexShader: [XG.ShaderChunk.map_pars_vertex, XG.ShaderChunk.color_pars_vertex, XG.ShaderChunk.morphtarget_pars_vertex, XG.ShaderChunk.skinning_pars_vertex, XG.ShaderChunk.particle_pars_vertex, "void main() {", XG.ShaderChunk.map_vertex, XG.ShaderChunk.color_vertex, XG.ShaderChunk.skinbase_vertex, XG.ShaderChunk.morphtarget_vertex, XG.ShaderChunk.skinning_vertex, XG.ShaderChunk.default_vertex, XG.ShaderChunk.worldpos_vertex, XG.ShaderChunk.particle_vertex, "}"].join("\n"),
    fragmentShader: ["uniform vec4 diffuse;", XG.ShaderChunk.color_pars_fragment, XG.ShaderChunk.map_pars_fragment, XG.ShaderChunk.lightmap_pars_fragment, XG.ShaderChunk.fog_pars_fragment, XG.ShaderChunk.tonemappingFragmentPars, XG.ShaderChunk.ditheringFragmentPars, XG.ShaderChunk.linearDepthFragmentPars, "void main() {", "gl_FragColor = diffuse;", "#if !defined( PARTICLE ) && ( defined( USE_MAP ) || defined( USE_LIGHTMAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined ( USE_NORMALGLOSSMAP ) || defined ( USE_GLOSSMAP ) || defined( USE_SPECULARMAP ) )", "vec2 uvCoord = vUv;", "#endif", XG.ShaderChunk.map_fragment, XG.ShaderChunk.alphatest_fragment, XG.ShaderChunk.lightmap_fragment, XG.ShaderChunk.color_fragment, "gl_FragColor.xyz *= lightMapIntensity;", XG.ShaderChunk.fog_fragment, XG.ShaderChunk.linear_to_gamma_fragment, XG.ShaderChunk.tonemapping_fragment, XG.ShaderChunk.dithering_fragment, "}"].join("\n")
}, XG.ShaderLib.phong = {
    uniforms: XG.UniformsUtils.merge([XG.UniformsLib.common, XG.UniformsLib.bump, XG.UniformsLib.normalmap, XG.UniformsLib.fog, XG.UniformsLib.heightFog, XG.UniformsLib.lights, XG.UniformsLib.shadowmap, {
        diffuse: {
            type: "v4",
            value: new XG.Vector4(.9, .9, .9, 1)
        },
        specular: {
            type: "v4",
            value: new XG.Vector4(.1, .1, .1, 30)
        },
        wrapRGB: {
            type: "v3",
            value: new XG.Vector3(1, 1, 1)
        },
        glossMap: {
            type: "t",
            value: null
        },
        specularMap: {
            type: "t",
            value: null
        },
        parallaxScale: {
            type: "f",
            value: 1
        },
        detailRepeatScale: {
            type: "v3",
            value: new XG.Vector3(1, 1, 1)
        },
        cameraNearFar: {
            type: "v2",
            value: new XG.Vector2(1, 500)
        }
    }]),
    vertexShader: ["varying vec3 vViewPosition;", "varying vec3 vNormal;", "#if defined( ATMOSPHERIC_FOG )", "varying vec4 vClipPosition;", "#endif", XG.ShaderChunk.map_pars_vertex, XG.ShaderChunk.color_pars_vertex, XG.ShaderChunk.morphtarget_pars_vertex, XG.ShaderChunk.skinning_pars_vertex, XG.ShaderChunk.shadowmap_pars_vertex, "void main() {", XG.ShaderChunk.map_vertex, XG.ShaderChunk.color_vertex, XG.ShaderChunk.morphnormal_vertex, XG.ShaderChunk.skinbase_vertex, XG.ShaderChunk.skinnormal_vertex, XG.ShaderChunk.defaultnormal_vertex, "vNormal = normalize( transformedNormal );", XG.ShaderChunk.morphtarget_vertex, XG.ShaderChunk.skinning_vertex, XG.ShaderChunk.default_vertex, "vViewPosition = mvPosition.xyz;", XG.ShaderChunk.worldpos_vertex, XG.ShaderChunk.shadowmap_vertex, "#if defined( ATMOSPHERIC_FOG )", "vClipPosition = gl_Position;", "#endif", "}"].join("\n"),
    fragmentShader: ["uniform vec4 diffuse;", "uniform vec4 specular;", XG.ShaderChunk.color_pars_fragment, XG.ShaderChunk.map_pars_fragment, XG.ShaderChunk.lightmap_pars_fragment, XG.ShaderChunk.fog_pars_fragment, XG.ShaderChunk.height_fog_pars_fragment, XG.ShaderChunk.area_lights_utils, XG.ShaderChunk.lights_phong_pars_fragment, XG.ShaderChunk.shadowmap_pars_fragment, XG.ShaderChunk.bumpmap_pars_fragment, XG.ShaderChunk.normalmap_pars_fragment, XG.ShaderChunk.parallax_pars_fragment, XG.ShaderChunk.specularmap_pars_fragment, XG.ShaderChunk.glossmap_pars_fragment, XG.ShaderChunk.tonemappingFragmentPars, XG.ShaderChunk.ditheringFragmentPars, XG.ShaderChunk.linearDepthFragmentPars, "#if defined( USE_BUMPDETAILMAP ) || defined( USE_NORMALDETAILMAP )", "uniform vec3 detailRepeatScale;", "#endif", "#if defined( ATMOSPHERIC_FOG )", "uniform vec2 cameraNearFar;", "varying vec4 vClipPosition;", "#endif", "void main() {", "gl_FragColor = vec4( vec3 ( 1.0 ), diffuse.a );", "#if !defined( PARTICLE ) && ( defined( USE_MAP ) || defined( USE_LIGHTMAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_BUMPDETAILMAP ) || defined( USE_NORMALDETAILMAP ) || defined ( USE_NORMALGLOSSMAP ) || defined ( USE_GLOSSMAP ) || defined( USE_SPECULARMAP ) )", "vec2 uvCoord = vUv;", "#endif", "vec3 normal = normalize( vNormal );", "vec3 vertexPosition = vViewPosition;", "vec3 eyeVector = normalize( -vertexPosition );", XG.ShaderChunk.parallax_fragment, XG.ShaderChunk.map_fragment, XG.ShaderChunk.alphatest_fragment, XG.ShaderChunk.color_fragment, XG.ShaderChunk.specularmap_fragment, XG.ShaderChunk.shadowmap_fragment, XG.ShaderChunk.lightmap_fragment, XG.ShaderChunk.lights_phong_fragment, XG.ShaderChunk.height_fog_fragment, XG.ShaderChunk.fog_fragment, XG.ShaderChunk.linear_to_gamma_fragment, XG.ShaderChunk.tonemapping_fragment, XG.ShaderChunk.dithering_fragment, "vec4 pixelColor = gl_FragColor;", "#if defined( TRANSLUCENT_PASS )", "gl_FragColor = vec4( pixelColor.a );", "#endif", "}"].join("\n")
}, XG.ShaderLib.dynamicParticle = {
    uniforms: XG.UniformsUtils.merge([{
        diffuse: {
            type: "v4",
            value: new XG.Vector4(.9, .9, .9, 1)
        },
        cameraNearFar: {
            type: "v2",
            value: new XG.Vector2(1, 500)
        },
        additiveFactor: {
            type: "f",
            value: 0
        },
        directionalLightPositionVS: {
            type: "fv4",
            value: [],
            shared: !0
        }
    }, XG.UniformsLib.common, XG.UniformsLib.fog, XG.UniformsLib.particle, XG.UniformsLib.dynamicParticle, XG.UniformsLib.lights, XG.UniformsLib.fogAtmo]),
    vertexShader: [XG.ShaderChunk.particle_pars_vertex, "uniform float time;", "uniform float timeRange;", "uniform float timeOffset;", "#ifdef OFFSCREEN_PARTICLES", "varying vec4 vClipPosition;", "#endif", "#ifdef USE_LIGHTS", "varying vec3 vViewPosition;", "#endif", "varying vec4 vSpinLifeTime;", "attribute vec4 velocitySpinStart;", "attribute vec4 accelerationSpinSpeed;", "attribute vec4 startSizeEndSizeStartTimeLifeTime;", "void main() {", "float startSize = startSizeEndSizeStartTimeLifeTime.x;", "float endSize = startSizeEndSizeStartTimeLifeTime.y;", "float startTime = startSizeEndSizeStartTimeLifeTime.z;", "float lifeTime = startSizeEndSizeStartTimeLifeTime.w;", "vec3 velocity = velocitySpinStart.xyz;", "float spinStart = velocitySpinStart.w;", "vec3 acceleration = accelerationSpinSpeed.xyz;", "float spinSpeed = accelerationSpinSpeed.w;", "float localTime = mod( ( time - timeOffset - startTime ), timeRange );", "float percentLife = localTime / lifeTime;", "vec3 newPosition = position + velocity * localTime + acceleration * localTime * localTime;", "vec4 mvPosition = modelViewMatrix * vec4( newPosition, 1.0 );", "gl_Position = projectionMatrix * mvPosition;", "float currentSize = 0.5 * particleSize * mix( startSize, endSize, percentLife );", "currentSize *= step( 0.0, percentLife );", "currentSize *= step( -1.0, -percentLife );", "if ( currentSize == 0.0 ) gl_Position = vec4( -100000000.0 );", "#ifdef OFFSCREEN_PARTICLES", "vClipPosition = gl_Position;", "#endif", "#ifdef USE_LIGHTS", "vViewPosition = mvPosition.xyz;", "#endif", "vec4 projectedCorner = projectionMatrix * vec4( currentSize, currentSize, mvPosition.z, mvPosition.w );", "gl_PointSize = screenWidth * projectedCorner.x / projectedCorner.w;", "percentLife *= step( 0.0, percentLife );", "percentLife *= step( -1.0, -percentLife );", "vSpinLifeTime = vec4( spinStart, spinSpeed, percentLife, localTime );", "}"].join("\n"),
    fragmentShader: [XG.ShaderChunk.fog_pars_fragment, XG.ShaderChunk.tonemappingFragmentPars, XG.ShaderChunk.ditheringFragmentPars, "uniform sampler2D map;", "uniform vec4 diffuse;", "uniform float time;", "uniform float numFrames;", "uniform float frameDuration;", "uniform vec2 cameraNearFar;", "uniform float additiveFactor;", "#ifdef OFFSCREEN_PARTICLES", "uniform sampler2D tDepth;", "uniform vec2 viewSize;", "varying vec4 vClipPosition;", "#ifdef RGBA_DEPTH", "float unpackDepth( vec4 rgba ) {", "return dot( rgba, vec4( 1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0 ) );", "}", "#endif", "#if defined( OIT_PARTICLES )", "float alphaWeight( float a, float z ) {", "return a * max( 1e-2, min( 3.0 * 1e3, 0.03 / ( 1e-5 + pow( abs(z) / 200.0, 4.0 ) ) ) );", "}", "#endif", XG.ShaderChunk.fogAtmoFragmentPars, XG.ShaderChunk.linearDepthFragmentPars, "#endif", "#ifdef USE_LIGHTS", "#if MAX_DIR_LIGHTS > 0", "uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];", "uniform vec4 directionalLightPositionVS[ MAX_DIR_LIGHTS ];", "uniform int directionalLightPars[ MAX_DIR_LIGHTS ];", "#endif", "#if MAX_POINT_LIGHTS > 0", "uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];", "uniform vec3 pointLightPositionVS[ MAX_POINT_LIGHTS ];", "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];", "#endif", "#if MAX_SPOT_LIGHTS > 0", "uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightPositionVS[ MAX_SPOT_LIGHTS ];", "uniform vec3 spotLightDirectionVS[ MAX_SPOT_LIGHTS ];", "uniform vec4 spotLightPars[ MAX_SPOT_LIGHTS ];", "#endif", "varying vec3 vViewPosition;", "float computeAttenuation( float distanceToLight, float lightRange ) {", "const float cutoff = 0.3;", "float denom = distanceToLight / lightRange + 1.0;", "float attenuation = 1.0 / ( denom * denom );", "attenuation = ( attenuation - cutoff ) / ( 1.0 - cutoff );", "attenuation = max( attenuation, 0.0 );", "attenuation *= attenuation;", "return attenuation;", "}", "#endif", "varying vec4 vSpinLifeTime;", "void main() {", "#if defined( OFFSCREEN_PARTICLES )", "vec2 screenCoord = gl_FragCoord.xy / viewSize;", "#if defined( RGBA_DEPTH )", "float sceneDepth = unpackDepth( texture2D( tDepth, screenCoord ) );", "#elif defined( FLOAT_DEPTH )", "float sceneDepth = texture2D( tDepth, screenCoord ).w;", "#elif defined( TEXTURE_DEPTH )", "float sceneDepth = texture2D( tDepth, screenCoord ).x * 2.0 - 1.0;", "#endif", "float myDepth = vClipPosition.z / vClipPosition.w;", "float myLinearDepth = linearizeDepth( myDepth, cameraNearFar );", "float sceneLinearDepth = linearizeDepth( sceneDepth, cameraNearFar );", "const float scale = 0.1;", "float zFade = clamp( scale * abs( myLinearDepth - sceneLinearDepth ), 0.0, 1.0 );", "if ( myDepth > sceneDepth ) discard;", "#endif", "float spinStart = vSpinLifeTime.x;", "float spinSpeed = vSpinLifeTime.y;", "float percentLife = vSpinLifeTime.z;", "float localTime = vSpinLifeTime.w;", "const float frameStart = 0.0;", "vec2 texCoord = vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) - 0.5;", "float s = sin( spinStart + spinSpeed * time );", "float c = cos( spinStart + spinSpeed * time );", "vec2 rotatedCoord1 = vec2( texCoord.x * c + texCoord.y * s, -texCoord.x * s + texCoord.y * c ) + 0.5;", "rotatedCoord1 = clamp( rotatedCoord1, 0.0, 1.0 );", "vec2 rotatedCoord2 = rotatedCoord1;", "float frame1 = mod( floor( localTime / frameDuration + frameStart ), numFrames );", "float uOffset1 = frame1 / numFrames;", "rotatedCoord1.x = uOffset1 + ( rotatedCoord1.x ) * ( 1.0 / numFrames );", "vec4 pixel1 = texture2D( map, rotatedCoord1 );", "pixel1.xyz *= pixel1.xyz;", "#ifdef INTERPOLATE_PARTICLE_FRAMES", "float frame2 = mod( floor( localTime / frameDuration + frameStart + 1.0 ), numFrames );", "float uOffset2 = frame2 / numFrames;", "float frameTime = fract( localTime / frameDuration + frameStart );", "rotatedCoord2.x = uOffset2 + ( rotatedCoord2.x ) * ( 1.0 / numFrames );", "vec4 pixel2 = texture2D( map, rotatedCoord2 );", "pixel2.xyz *= pixel2.xyz;", "pixel1 = mix( pixel1, pixel2, frameTime );", "#endif", "if ( pixel1.a < 0.001 ) discard;", "vec4 particleColor = pixel1 * diffuse;", "#ifdef USE_LIGHTS", "vec3 vertexPosition = vViewPosition;", "vec3 pColor = particleColor.rgb;", "vec3 accumulatedColor = vec3( 0.0 );", "#if MAX_DIR_LIGHTS > 0", "for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {", "vec3 lightColor = directionalLightColor[ i ];", "vec4 lightPositionDistance = directionalLightPositionVS[ i ];", "vec3 lightPosition = lightPositionDistance.xyz;", "float lightDistance = lightPositionDistance.w;", "float d = distance( lightPosition, vertexPosition );", "float attenuation = computeAttenuation( d, lightDistance );", "accumulatedColor += attenuation * lightColor * pColor;", "}", "#endif", "#if MAX_POINT_LIGHTS > 0", "for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {", "vec3 lightColor = pointLightColor[ i ];", "vec3 lightPosition = pointLightPositionVS[ i ];", "float lightDistance = pointLightDistance[ i ];", "float d = distance( lightPosition, vertexPosition );", "float attenuation = computeAttenuation( d, lightDistance );", "accumulatedColor += attenuation * lightColor * pColor;", "}", "#endif", "#if MAX_SPOT_LIGHTS > 0", "for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {", "vec3 lightColor = spotLightColor[ i ];", "vec3 lightPosition = spotLightPositionVS[ i ];", "vec3 lightVector = lightPosition - vertexPosition;", "float lightDistance = length( lightVector );", "float spotLightAngleCos = spotLightPars[ i ].x;", "float spotLightExponent = spotLightPars[ i ].y;", "float spotLightDistance = spotLightPars[ i ].z;", "float attenuation = 1.0;", "if ( spotLightDistance > 0.0 )", "attenuation = 1.0 - min( lightDistance / spotLightDistance, 1.0 );", "lightVector = lightVector / lightDistance;", "float rho = dot( spotLightDirectionVS[ i ], lightVector );", "if ( rho > spotLightAngleCos ) {;", "float theta = spotLightAngleCos + 0.0001;", "float phi = spotLightAngleCos + 0.05;", "const float falloff = 4.0;", "float spotEffect = 0.0;", "if ( rho >= phi ) {", "spotEffect = 1.0;", "} else if ( rho <= theta ) {", "spotEffect = 0.0;", "} else { ", "spotEffect = pow( ( rho - theta ) / ( phi - theta ), falloff );", "}", "attenuation *= spotEffect;", "accumulatedColor += attenuation * lightColor * pColor;", "}", "}", "#endif", "particleColor.rgb = accumulatedColor;", "#endif", "#if defined( OFFSCREEN_PARTICLES )", "#ifdef FOG_ENABLED", "particleColor.rgb = addFog( particleColor.rgb, myLinearDepth );", "#endif", "particleColor.a *= zFade;", "#endif", "#if defined( OIT_PARTICLES ) && defined( OFFSCREEN_PARTICLES )", "float ai = particleColor.a;", "vec3 Ci = particleColor.rgb * particleColor.a;", "float wzi = alphaWeight( ai, myLinearDepth );", "#endif", "#if defined( OIT_MRT_PASS )", "gl_FragData[ 0 ] = vec4( Ci * wzi, ai );", "gl_FragData[ 1 ] = vec4( ai * wzi );", "if ( additiveFactor > 0.0 ) gl_FragData[ 1 ] = vec4( additiveFactor );", "#elif defined( OIT_ACCUMULATION_PASS )", "gl_FragColor = vec4( Ci * wzi, ai );", "#elif defined( OIT_REVEALAGE_PASS )", "gl_FragColor = vec4( ai * wzi );", "if ( additiveFactor > 0.0 ) gl_FragColor = vec4( additiveFactor );", "#elif defined( TRANSLUCENT_PASS )", "gl_FragColor = vec4( particleColor.a );", "#else", "gl_FragColor = particleColor;", "#endif", "}"].join("\n")
}, XG.ShaderLib.depthRGBA = {
    uniforms: {
        slopeScale: {
            type: "f",
            value: 2,
            shared: !0
        },
        slopeBias: {
            type: "f",
            value: 0,
            shared: !0
        },
        slopeMax: {
            type: "f",
            value: .001,
            shared: !0
        },
        epsilon: {
            type: "f",
            value: .1
        },
        alphaTest: {
            type: "f",
            value: .5
        },
        map: {
            type: "t",
            value: null
        }
    },
    vertexShader: [XG.ShaderChunk.morphtarget_pars_vertex, XG.ShaderChunk.skinning_pars_vertex, "#ifdef SPRITE", "attribute vec3 offset;", "attribute vec2 scale;", "varying vec2 vUv;", "#endif", "void main() {", "#ifdef SPRITE", "#ifdef BILLBOARD", "vec4 tmpPosition = modelViewMatrix * vec4( offset, 1.0 ) + vec4( position * vec3( scale, 1.0 ), 0.0 );", "gl_Position = projectionMatrix * tmpPosition;", "#else", "vec3 spritePosition = position * vec3( scale, 1.0 ) + offset;", "vec4 mvPosition = modelViewMatrix * vec4( spritePosition, 1.0 );", "gl_Position = projectionMatrix * mvPosition;", "#endif", "vUv = uv;", "#else", XG.ShaderChunk.skinbase_vertex, XG.ShaderChunk.morphtarget_vertex, XG.ShaderChunk.skinning_vertex, XG.ShaderChunk.default_vertex, "#endif", "}"].join("\n"),
    fragmentShader: ["#ifdef SPRITE", "uniform float epsilon;", "uniform float alphaTest;", "uniform sampler2D map;", "varying vec2 vUv;", "#endif", "#if !defined( DEPTH_TEXTURES )", "#ifdef SLOPE_DEPTH_BIAS", "uniform float slopeScale;", "uniform float slopeBias;", "uniform float slopeMax;", "#endif", "vec4 pack_depth( const in float depth ) {", "const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );", "const vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );", "vec4 res = fract( depth * bit_shift );", "res -= res.xxyz * bit_mask;", "return res;", "}", "#endif", "void main() {", "#ifdef SPRITE", "vec4 texture = texture2D( map, vUv );", "#ifdef SDF", "#ifdef GL_OES_standard_derivatives", "float w = clamp( 200.0 * epsilon * ( abs( dFdx( vUv.x ) ) + abs( dFdy( vUv.y ) ) ), 0.0, 0.5 );", "#else", "float w = epsilon;", "#endif", "float alpha = smoothstep( 0.5 - w, 0.5 + w, texture.r );", "alpha = pow( alpha, 1.0/2.2 );", "#else", "float alpha = texture.a;", "#endif", "if ( alpha < alphaTest ) discard;", "#endif", "#ifndef DEPTH_TEXTURES", "float depth = gl_FragCoord.z;", "#ifdef SLOPE_DEPTH_BIAS", "float dx = dFdx( depth );", "float dy = dFdy( depth );", "float m = max( abs(dx), abs(dy) );", "m = min( m, slopeMax );", "depth += m * slopeScale + slopeBias;", "#endif", "gl_FragColor = pack_depth( depth );", "#endif", "}"].join("\n")
}, XG.DeferredUniformsLib = {}, XG.DeferredShaderChunk = {}, XG.DeferredShaders = {}, XG.DeferredUniformsLib.gbuffers = {
    samplerColor: {
        type: "t",
        value: null,
        shared: !0
    },
    samplerNormalDepth: {
        type: "t",
        value: null,
        shared: !0
    },
    samplerDiffuseRGB: {
        type: "t",
        value: null,
        shared: !0
    },
    samplerSpecularRGB: {
        type: "t",
        value: null,
        shared: !0
    },
    samplerWrapRGB: {
        type: "t",
        value: null,
        shared: !0
    },
    samplerNormal: {
        type: "t",
        value: null,
        shared: !0
    },
    samplerDepth: {
        type: "t",
        value: null,
        shared: !0
    },
    viewSize: {
        type: "v2",
        value: new XG.Vector2(800, 600),
        shared: !0
    }
}, XG.DeferredUniformsLib.multiShadowMaps = {
    samplerShadowMap: {
        type: "tv",
        value: []
    },
    shadowMapSize: {
        type: "v2",
        value: new XG.Vector2(512, 512)
    },
    shadowDarkness: {
        type: "f",
        value: .5
    },
    shadowBias: {
        type: "f",
        value: 0
    },
    matShadow: {
        type: "m4v",
        value: []
    }
}, XG.DeferredUniformsLib.projectedTexture = {
    samplerTexture: {
        type: "t",
        value: null
    },
    textureBias: {
        type: "f",
        value: 0
    },
    matTexture: {
        type: "m4",
        value: new XG.Matrix4
    }
}, XG.DeferredShaderChunk.gbuffersUniforms = ["#ifdef USE_MRT", "uniform sampler2D samplerDiffuseRGB;", "uniform sampler2D samplerSpecularRGB;", "uniform sampler2D samplerWrapRGB;", "uniform sampler2D samplerNormal;", "uniform sampler2D samplerDepth;", "#else", "uniform sampler2D samplerColor;", "uniform sampler2D samplerNormalDepth;", "#endif", "uniform vec2 viewSize;"].join("\n"), XG.DeferredShaderChunk.multiShadowMapsUniforms = ["#ifdef USE_SHADOWMAP", "uniform mat4 matShadow[ SHADOWMAP_COUNT ];", "uniform sampler2D samplerShadowMap[ SHADOWMAP_COUNT ];", "uniform float shadowBias;", "uniform float shadowDarkness;", "uniform vec2 shadowMapSize;", "#endif"].join("\n"), XG.DeferredShaderChunk.projectedTextureUniforms = ["#ifdef PROJECTED_TEXTURE", "uniform sampler2D samplerTexture;", "uniform float textureBias;", "uniform mat4 matTexture;", "#endif"].join("\n"), XG.DeferredShaderChunk.packFloat = ["const float unit = 255.0/256.0;", "float vec3_to_float( vec3 data ) {", "highp float compressed = dot( floor( data * 255.0 + 0.5 ), vec3( 1.0, 256.0, 65536.0 ) );", "return compressed;", "}", "float vec21_to_float( float dataHi, float dataLo ) {", "highp float compressed = floor( dataHi ) + unit * dataLo;", "return compressed;", "}", "vec3 packWrapAroundShininess( float wrapAround, float shininess ) {", "vec3 tmp;", "tmp.r = wrapAround + 0.5;", "tmp.b = fract( shininess / 256.0 );", "tmp.g = floor( shininess / 256.0 ) / 256.0;", "return tmp;", "}", "vec4 packDepth( const in float depth ) {", "vec4 enc = vec4( 1.0, 255.0, 65025.0, 16581375.0 ) * depth;", "enc = fract( enc );", "enc -= enc.yzww * vec4( 1.0/255.0, 1.0/255.0, 1.0/255.0, 0.0 );", "return enc;", "}"].join("\n"), XG.DeferredShaderChunk.unpackFloat = ["const float unitInverse = 256.0/255.0;", "vec3 float_to_vec3( float data ) {", "vec3 uncompressed;", "uncompressed.z = data / 65536.0;", "uncompressed.y = 256.0 * fract( uncompressed.z );", "uncompressed.x = 256.0 * fract( uncompressed.y );", "return floor( uncompressed ) / 255.0;", "}", "vec2 float_to_vec21( float data ) {", "vec2 uncompressed;", "uncompressed.x = floor( data );", "uncompressed.y = fract( data ) * unitInverse;", "return uncompressed;", "}", "float unpackDepth( const in vec4 rgba ) {", "return clamp( dot( rgba, vec4( 1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0 ) ), 0.0, 1.0 );", "}"].join("\n"), XG.DeferredShaderChunk.computeVertexPositionVS = ["vec2 texCoord = gl_FragCoord.xy / viewSize;", "#ifdef USE_MRT", "#ifdef TEXTURE_DEPTH", "vec4 texDepth = texture2D( samplerDepth, texCoord );", "float z = texDepth.x * 2.0 - 1.0;", "#else", "vec4 packedDepth = texture2D( samplerDepth, texCoord );", "float z = unpackDepth( packedDepth );", "#endif", "#else", "vec4 normalDepth = texture2D( samplerNormalDepth, texCoord );", "float z = normalDepth.w;", "#endif", "if ( z <= 0.0 || z >= 1.0 ) discard;", "vec2 xy = texCoord * 2.0 - 1.0;", "vec4 vertexPositionProjected = vec4( xy, z, 1.0 );", "vec4 vertexPositionVS = matProjInverse * vertexPositionProjected;", "vertexPositionVS.xyz /= vertexPositionVS.w;", "vertexPositionVS.w = 1.0;"].join("\n"), XG.DeferredShaderChunk.computeNormal = ["#ifdef USE_MRT", "vec4 normalTex = texture2D( samplerNormal, texCoord );", "vec3 normal = normalTex.xyz * 2.0 - 1.0;", "#else", "vec3 normal = normalDepth.xyz * 2.0 - 1.0;", "#endif", "normal = normalize( normal );"].join("\n"), XG.DeferredShaderChunk.unpackColorMap = ["#ifdef USE_MRT", "vec4 albedoShininessLo = texture2D( samplerDiffuseRGB, texCoord );", "vec3 albedo = albedoShininessLo.rgb * albedoShininessLo.rgb;", "vec4 specularColorShininessHi = texture2D( samplerSpecularRGB, texCoord );", "vec3 specularColor = specularColorShininessHi.rgb * specularColorShininessHi.rgb;", "float shininess = specularColorShininessHi.a * 256.0 * 256.0 + albedoShininessLo.a * 256.0;", "vec4 wrapRGBWrapAround = texture2D( samplerWrapRGB, texCoord );", "vec3 wrapRGB = wrapRGBWrapAround.rgb;", "float wrapAround = sign( wrapRGBWrapAround.a - 0.5 );", "float lightMapIntensity = normalTex.a;", "#else", "vec4 colorMap = texture2D( samplerColor, texCoord );", "vec3 albedo = float_to_vec3( abs( colorMap.x ) );", "albedo *= albedo;", "vec3 specularColor = float_to_vec3( abs( colorMap.y ) );", "specularColor *= specularColor;", "vec3 wrapRGB = float_to_vec3( abs( colorMap.w ) );", "vec2 shininessLightmap = float_to_vec21( abs( colorMap.z ) );", "float shininess = shininessLightmap.x;", "float lightMapIntensity = shininessLightmap.y;", "float wrapAround = sign( colorMap.z );", "#endif"].join("\n"), XG.DeferredShaderChunk.computeDiffuse = ["float dotLNUnclamped = dot( lightVector, normal );", "float dotLN = max( dotLNUnclamped, 0.0 );", "vec3 diffuse = vec3( dotLN );", "if ( wrapAround < 0.0 ) {", "float dotLNHalf = max( 0.25 * dotLNUnclamped + 0.25, 0.0 );", "diffuse = mix( diffuse, vec3( dotLNHalf ), wrapRGB );", "}"].join("\n"), XG.DeferredShaderChunk.geometryFactor = ["float SmithGeometryFactor1( vec3 H, vec3 V, vec3 N, float shininess ) {", "float dotVN = dot( V, N );", "float dotVH = dot( V, H );", "if ( ( dotVH / dotVN ) <= 0.0 ) return 0.0;", "float f = acos( dotVN );", "float a = sqrt( 0.5 * shininess + 1.0 ) / tan( f );", "float G = 1.0;", "if ( a < 1.6 )", "G = ( 3.535 * a + 2.181 * a * a ) / ( 1.0 + 2.276 * a + 2.577 * a * a );", "return G;", "}", "float SmithGeometryFactor2( float dotLN, vec3 V, vec3 N, float shininess ) {", "float dotNV = max( dot( N, V ), 0.0 );", "float a = 1.0 / ( sqrt( 0.7854 * shininess + 1.571 ) );", "return 1.0 / ( ( dotLN * ( 1.0 - a ) + a ) * ( dotNV * ( 1.0 - a ) + a ) );", "}", "float KelemenGeometryFactor( float dotLH ) {", "return 1.0 / ( dotLH * dotLH );", "}", "float GGX_SchlickGeometryFactor_V1( in float k, in float dotNX ) {", "return dotNX / ( dotNX * ( 1.0 - k ) + k );", "}", "float GGX_SchlickGeometryFactor_V2( in float k, in float dotNX ) {", "return 1.0 / ( dotNX + sqrt( k + ( 1.0 - k ) * dotNX * dotNX ) );", "}"].join("\n"), XG.DeferredShaderChunk.environmentBRDF = ["vec3 EnvironmentBRDF( float gloss, float dotNV, vec3 rf0 ) {", "vec4 t = vec4( 1.0 / 0.96, 0.475, ( 0.0275 - 0.25 * 0.04 ) / 0.96, 0.25 );", "t *= vec4( gloss );", "t += vec4( 0.0, 0.0, ( 0.015 - 0.75 * 0.04 ) / 0.96, 0.75 );", "float a0 = t.x * min( t.y, exp2( -9.28 * dotNV ) ) + t.z;", "float a1 = t.w;", "return clamp( a0 + rf0 * ( a1 - a0 ), 0.0, 1.0 );", "}"].join("\n"), XG.DeferredShaderChunk.specularBRDF = ["float saturate( float x ) {", "return clamp( x, 0.0, 1.0 );", "}", "float GGX_Specular( in float m, in vec3 n, in vec3 h, in vec3 v, in vec3 l ) {", "float nDotH = saturate( dot( n, h ) );", "float nDotL = saturate( dot( n, l ) );", "float nDotV = saturate( dot( n, v ) );", "float nDotH2 = nDotH * nDotH;", "float m2 = pow( m, 4.0 );", "float d = m2 / ( pow( nDotH * nDotH * ( m2 - 1.0 ) + 1.0, 2.0 ) );", "float v1i = GGX_SchlickGeometryFactor_V2( m2, nDotL );", "float v1o = GGX_SchlickGeometryFactor_V2( m2, nDotV );", "float vis = v1i * v1o;", "return d * vis;", "}", "float BlinnPhong_Specular( in float shininess, in float dotLN, in float dotNormalHalf, in vec3 eyeVector, in vec3 normal ) {", "float specularNormalization = shininess * 0.125 + 0.25;", "float geo = SmithGeometryFactor2( dotLN, eyeVector, normal, shininess );", "return ( specularNormalization * geo ) * max( pow( dotNormalHalf, shininess ), 0.0 );", "}"].join("\n"), XG.DeferredShaderChunk.computeSpecular = ["vec3 eyeVector = normalize( -vertexPositionVS.xyz );", "vec3 halfVector = normalize( lightVector + eyeVector );", "float dotNormalHalf = max( dot( normal, halfVector ), 0.0 );", "float dotLightHalf = max( dot( lightVector, halfVector ), 0.0 );", "vec3 fresnel = specularColor + ( 1.0 - specularColor ) * pow( 1.0 - dotLightHalf, 5.0 );", "fresnel *= float( dot( specularColor, vec3( 1.0 ) ) > 0.0 );", "#if defined( BRDF_BLINN_PHONG )", "vec3 specular = BlinnPhong_Specular( shininess, dotLN, dotNormalHalf, eyeVector, normal ) * ( fresnel * dotLN );", "#elif defined( BRDF_GGX )", "float roughness = saturate( sqrt( 8.0 / ( shininess + 7.0 ) ) );", "vec3 specular = GGX_Specular( roughness, normal, halfVector, eyeVector, lightVector ) * ( fresnel * dotLN );", "#else", "vec3 specular = specularColor * max( pow( dotNormalHalf, shininess ), 0.0 ) * dotLN;", "#endif"].join("\n"), XG.DeferredShaderChunk.combine = ["vec3 light = lightIntensity * lightColor;", "gl_FragColor = vec4( light * ( albedo * diffuse + specular ), attenuation );"].join("\n"), XG.DeferredShaderChunk.directionalOcclusion = ["#ifdef OCCLUSION_ENABLED", "uniform mat4 matProj;", "float checkOcclusion( in vec3 pointVS ) {", "vec4 pointCS = matProj * vec4( pointVS, 1.0 );", "pointCS.xyz /= pointCS.w;", "vec2 pointUV = pointCS.xy * 0.5 + 0.5;", "#ifdef USE_MRT", "#ifdef TEXTURE_DEPTH", "vec4 depthSample = texture2D( samplerDepth, pointUV );", "float sampleZ = depthSample.x * 2.0 - 1.0;", "#else", "vec4 depthSample = texture2D( samplerDepth, pointUV );", "float sampleZ = unpackDepth( depthSample );", "#endif", "#else", "vec4 normalDepthSample = texture2D( samplerNormalDepth, pointUV );", "float sampleZ = normalDepthSample.w;", "#endif", "float occlusion = 1.0;", "if ( pointCS.z > sampleZ ) occlusion = 0.0;", "return occlusion;", "}", "vec2 rand( const in vec2 coord ) {", "float nx = dot ( coord, vec2( 12.9898, 78.233 ) );", "float ny = dot ( coord, vec2( 25.9796, 156.466 ) );", "vec2 noise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );", "return noise;", "}", "#endif"].join("\n"), XG.DeferredShaderChunk.shadowMapPCF = ["float sampleShadowPCF( sampler2D shadowMap, vec2 shadowMapSize, vec2 shadowCoord, float vertexDepth ) {", "float shadowDepth;", "float shadowValue = 0.0;", "const float shadowDelta = 1.0 / 9.0;", "float xPixelOffset = 1.0 / shadowMapSize.x;", "float yPixelOffset = 1.0 / shadowMapSize.y;", "float dx0 = -1.25 * xPixelOffset;", "float dy0 = -1.25 * yPixelOffset;", "float dx1 = 1.25 * xPixelOffset;", "float dy1 = 1.25 * yPixelOffset;", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( dx0, dy0 ) ).x;", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( 0.0, dy0 ) ).x;", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( dx1, dy0 ) ).x;", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( dx0, 0.0 ) ).x;", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord ).x;", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( dx1, 0.0 ) ).x;", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( dx0, dy1 ) ).x;", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( 0.0, dy1 ) ).x;", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( dx1, dy1 ) ).x;", "shadowValue += shadowDelta * float( vertexDepth > shadowDepth );", "return shadowValue;", "}"].join("\n"), XG.DeferredShaderChunk.shadowMapPCFSoft = ["float sampleShadowPCFSoft( sampler2D shadowMap, vec2 shadowMapSize, vec2 shadowCoord, float vertexDepth ) {", "float shadowDepth;", "float shadow = 0.0;", "float xPixelOffset = 1.0 / shadowMapSize.x;", "float yPixelOffset = 1.0 / shadowMapSize.y;", "float dx0 = -1.0 * xPixelOffset;", "float dy0 = -1.0 * yPixelOffset;", "float dx1 = 1.0 * xPixelOffset;", "float dy1 = 1.0 * yPixelOffset;", "mat3 shadowKernel;", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( dx0, dy0 ) ).x;", "shadowKernel[0][0] = float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( dx0, 0.0 ) ).x;", "shadowKernel[0][1] = float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( dx0, dy1 ) ).x;", "shadowKernel[0][2] = float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( 0.0, dy0 ) ).x;", "shadowKernel[1][0] = float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord ).x;", "shadowKernel[1][1] = float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( 0.0, dy1 ) ).x;", "shadowKernel[1][2] = float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( dx1, dy0 ) ).x;", "shadowKernel[2][0] = float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( dx1, 0.0 ) ).x;", "shadowKernel[2][1] = float( vertexDepth > shadowDepth );", "shadowDepth = texture2D( shadowMap, shadowCoord + vec2( dx1, dy1 ) ).x;", "shadowKernel[2][2] = float( vertexDepth > shadowDepth );", "shadowKernel *= 0.25;", "vec2 fractionalCoord = 1.0 - fract( shadowCoord * shadowMapSize );", "shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );", "shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );", "vec4 shadowValues;", "shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );", "shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );", "shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );", "shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );", "float shadowValue = dot( shadowValues, vec4( 1.0 ) );", "return shadowValue;", "}"].join("\n"), XG.DeferredShaderChunk.normalsParsFragment = ["#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_NORMALGLOSSMAP )", "varying vec3 vViewPosition;", "#endif", XG.ShaderChunk.bumpmap_pars_fragment, XG.ShaderChunk.normalmap_pars_fragment, "#if defined( USE_BUMPDETAILMAP ) || defined( USE_NORMALDETAILMAP )", "uniform vec3 detailRepeatScale;", "#endif", "varying vec3 normalView;"].join("\n"), XG.DeferredShaderChunk.normalsFragment = ["#if defined( USE_NORMALMAP ) || defined( USE_NORMALGLOSSMAP )", "#ifdef USE_NORMALDETAILMAP", "vec4 normalDetail = texture2D( normalDetailMap, uvCoord *  detailRepeatScale.xy ) * 2.0 - 1.0;", "normalDetail.rgb = normalize( normalDetail.rgb * vec3( detailRepeatScale.zz, 1.0 ) ) * 0.5 + 0.5;", "vec3 n1 = normalGloss.xyz  * vec3(  2.0,  2.0, 2.0 ) + vec3( -1.0, -1.0,  0.0 );", "vec3 n2 = normalDetail.xyz * vec3( -2.0, -2.0, 2.0 ) + vec3(  1.0,  1.0, -1.0 );", "normalGloss.xyz  = normalize( n1 * dot( n1, n2 ) / n1.z - n2 ) * 0.5 + 0.5;", "#endif", "normal = perturbNormal2Arb( vViewPosition, normal, normalGloss.xyz, uvCoord );", "#elif defined( USE_BUMPMAP )", "normal = perturbNormalArb( vViewPosition, normal, dHdxy_fwd( bumpMap, uvCoord, bumpScale ) );", "#endif", "#ifdef USE_BUMPDETAILMAP", "normal = perturbNormalArb( vViewPosition, normal, dHdxy_fwd( bumpDetailMap, uvCoord * detailRepeatScale.xy, detailRepeatScale.z ) );", "#endif", "#if defined ( USE_NORMALDETAILMAP ) && ! ( defined( USE_NORMALMAP ) || defined( USE_NORMALGLOSSMAP ) )", "vec4 normalDetail = texture2D( normalDetailMap, uvCoord * detailRepeatScale.xy ) * 2.0 - 1.0;", "normalDetail.rgb = normalize( normalDetail.rgb * vec3( detailRepeatScale.zz, 1.0 ) ) * 0.5 + 0.5;", "normal = perturbNormal2Arb( vViewPosition, normal, normalDetail.xyz, uvCoord * detailRepeatScale.xy );", "#endif", "#ifdef DOUBLE_SIDED", "float flipNormal = 2.0 * float( gl_FrontFacing ) - 1.0;", "normal = flipNormal * normal;", "#endif", "normal = normal * 0.5 + 0.5;"].join("\n"), XG.DeferredShaderChunk.colorsFragment = ["float shininess = specular.a;", "float wrapAround = diffuse.a;", "vec4 diffuseColor  = vec4( diffuse.rgb, 1.0 );", "vec4 specularColor = vec4( specular.rgb, 1.0 );", "#ifdef USE_MAP", "#ifdef PARTICLE", "vec2 texCoord = vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y );", "#else", "vec2 texCoord = uvCoord;", "#endif", "vec4 diffuseMapColor = texture2D( map, texCoord );", "diffuseColor *= diffuseMapColor;", "#endif", "#ifdef ALPHATEST", "if ( diffuseColor.a < ALPHATEST ) discard;", "#endif", "#ifdef USE_COLOR", "diffuseColor.rgb *= vColor;", "#endif", XG.ShaderChunk.specularmap_fragment, "specularColor.rgb *= specularMapColor;", "#ifdef USE_LIGHTMAP", "float lightMapIntensity = texture2D( lightMap, uvCoord ).r;", "#else", "float lightMapIntensity = 1.0;", "#endif", "#if defined( USE_GLOSSMAP )", "vec4 glossMapVal = texture2D( glossMap, uvCoord );", "float gloss = exp2( 13.0 * glossMapVal.r + 1.0 );", "#elif defined( USE_NORMALGLOSSMAP )", "float gloss = exp2( 13.0 * normalGloss.a + 1.0 );", "#else", "float gloss = 1.0;", "#endif", "shininess = clamp( shininess * gloss, 0.0, 8192.0 );"].join("\n"), XG.DeferredShaderChunk.hemiTerm = ["const float maxShininess = 8192.0;", "float gloss = min( shininess / maxShininess, 1.0 );", "vec3 fresnelHemi = EnvironmentBRDF( gloss, dot( eyeVector, halfVector ), specularColor );", "float dotProductHemi = dot( normal, lightVectorHemi );", "float hemiDiffuseWeight = clamp( 0.5 * dotProductHemi + 0.5, 0.0, 1.0 );", "vec3 diffuseHemi = ( 1.0 - fresnelHemi ) * mix( lightColorGround, lightColorSky, hemiDiffuseWeight );", "vec3 R = reflect( -eyeVector, normal );", "R = normalize( R );", "float hemiSpecularWeight = clamp( dot( R, lightVectorHemi ) * 0.5 + 0.5, 0.0, 1.0 );", "vec3 specularHemi = fresnelHemi * mix( lightColorGround, lightColorSky, hemiSpecularWeight );", "vec3 hemiTerm = lightIntensityHemi * ( albedo * diffuseHemi + specularHemi );", "hemiTerm *= lightMapIntensity;", "#ifdef USE_SSAO", "float hemiOcclusion = texture2D( samplerSSAO, texCoord ).x;", "hemiTerm *= hemiOcclusion * hemiOcclusion;", "#endif"].join("\n"), XG.DeferredShaderChunk.shadowPrep = ["float sectorOcclusion = 1.0;", "vec4 posLightCS = matShadow[ i ] * vertexPositionVS;", "vec2 shadowCoord = ( posLightCS.xy / posLightCS.w ) * 0.5 + 0.5;", "bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );", "bool inFrustum = all( inFrustumVec );"].join("\n"), XG.DeferredShaderChunk.shadowCheck = ["float vertexDepth = posLightCS.z / posLightCS.w;", "#if defined( DEPTH_TEXTURES )", "vertexDepth = vertexDepth * 0.5 + 0.5;", "#endif", "#if !defined( SLOPE_DEPTH_BIAS )", "vertexDepth -= shadowBias;", "#endif", "#if defined( SHADOWMAP_TYPE_PCF )", "float shadowValue = sampleShadowPCF( samplerShadowMap[ i ], shadowMapSize, shadowCoord, vertexDepth );", "#elif defined( SHADOWMAP_TYPE_PCF_SOFT )", "float shadowValue = sampleShadowPCFSoft( samplerShadowMap[ i ], shadowMapSize, shadowCoord, vertexDepth );", "#elif defined( SHADOWMAP_TYPE_PCF_SOFT_HQ )", "float xPixelOffset = 2.0 / shadowMapSize.x;", "float yPixelOffset = 2.0 / shadowMapSize.y;", "float shadowValue0 = sampleShadowPCFSoft( samplerShadowMap[ i ], shadowMapSize, shadowCoord + vec2( -xPixelOffset, 0.0 ), vertexDepth );", "float shadowValue1 = sampleShadowPCFSoft( samplerShadowMap[ i ], shadowMapSize, shadowCoord + vec2(  xPixelOffset, 0.0 ), vertexDepth );", "float shadowValue2 = sampleShadowPCFSoft( samplerShadowMap[ i ], shadowMapSize, shadowCoord + vec2( 0.0, -yPixelOffset ), vertexDepth );", "float shadowValue3 = sampleShadowPCFSoft( samplerShadowMap[ i ], shadowMapSize, shadowCoord + vec2( 0.0,  yPixelOffset ), vertexDepth );", "float shadowValue = ( shadowValue0 + shadowValue1 + shadowValue2 + shadowValue3 ) * 0.25;", "#else", "float shadowDepth = texture2D( samplerShadowMap[ i ], shadowCoord ).x;", "float shadowValue = float( vertexDepth > shadowDepth );", "#endif", "sectorOcclusion = 1.0 - shadowDarkness * shadowValue;", "occlusion *= sectorOcclusion;"].join("\n"), XG.DeferredShaderChunk.directionalShadows = ["float occlusion = 1.0;", "#ifdef USE_SHADOWMAP", "#ifdef SHADOWMAP_DEBUG", "vec3 frustumColors[5];", "frustumColors[0] = vec3( 1.0, 0.0, 0.0 );", "frustumColors[1] = vec3( 0.0, 1.0, 0.0 );", "frustumColors[2] = vec3( 0.0, 0.0, 1.0 );", "frustumColors[3] = vec3( 0.0, 0.5, 1.0 );", "frustumColors[4] = vec3( 0.2, 0.5, 1.0 );", "vec3 debugColor = vec3( 1.0 );", "#endif", "#ifdef OSX_HACK", "bool found = false;", "#endif", "for ( int i = 0; i < SHADOWMAP_COUNT; i ++ ) {", XG.DeferredShaderChunk.shadowPrep, "#ifdef OSX_HACK", "if ( inFrustum && !found ) {", "#else", "if ( inFrustum ) {", "#endif", XG.DeferredShaderChunk.shadowCheck, "#ifdef SHADOWMAP_DEBUG", "debugColor *= frustumColors[ i ];", "#endif", "#if SHADOWMAP_COUNT > 1", "#ifdef OSX_HACK", "found = true;", "#else", "break;", "#endif", "#endif", "}", "}", "#endif"].join("\n"), XG.DeferredShaderChunk.directionalProjectedTexture = ["#ifdef PROJECTED_TEXTURE", "vec4 posTextureCS = matTexture * vertexPositionVS;", "#ifdef PROJECTED_SHADOW", "vec2 textureCoord = ( posTextureCS.xy / posTextureCS.w ) * 0.5 + 0.5;", "bvec4 inTexFrustumVec = bvec4 ( textureCoord.x >= 0.0, textureCoord.x <= 1.0, textureCoord.y >= 0.0, textureCoord.y <= 1.0 );", "bool inTexFrustum = all( inTexFrustumVec );", "if ( inTexFrustum ) {", "vec4 textureColor = texture2DProj( samplerTexture, posTextureCS, textureBias );", "float translucency = 1.0 - textureColor.r * shadowDarkness;", "occlusion = min( occlusion, translucency );", "}", "#else", "vec4 textureColor = texture2DProj( samplerTexture, posTextureCS, textureBias );", "textureColor.rgb *= textureColor.rgb;", "diffuse *= textureColor.rgb;", "specular *= textureColor.rgb;", "#endif", "#endif"].join("\n"), XG.DeferredShaders.combined = {
    uniforms: XG.UniformsUtils.merge([XG.UniformsLib.common, XG.UniformsLib.particle, XG.UniformsLib.bump, XG.UniformsLib.normalmap, {
        diffuse: {
            type: "v4",
            value: new XG.Vector4(1, 1, 1, 1)
        },
        specular: {
            type: "v4",
            value: new XG.Vector4(.1, .1, .1, 30)
        },
        wrapRGB: {
            type: "v3",
            value: new XG.Vector3(1, 1, 1)
        },
        detailRepeatScale: {
            type: "v3",
            value: new XG.Vector3(1, 1, 1)
        },
        glossMap: {
            type: "t",
            value: null
        },
        specularMap: {
            type: "t",
            value: null
        },
        parallaxScale: {
            type: "f",
            value: 1
        }
    }]),
    fragmentShader: ["uniform vec4 diffuse;", "uniform vec4 specular;", "uniform vec3 wrapRGB;", "#ifndef TEXTURE_DEPTH", "varying vec4 clipPos;", "#endif", XG.DeferredShaderChunk.normalsParsFragment, XG.DeferredShaderChunk.packFloat, XG.ShaderChunk.color_pars_fragment, XG.ShaderChunk.map_pars_fragment, XG.ShaderChunk.lightmap_pars_fragment, XG.ShaderChunk.specularmap_pars_fragment, XG.ShaderChunk.glossmap_pars_fragment, XG.ShaderChunk.parallax_pars_fragment, "void main() {", "#if !defined( PARTICLE ) && ( defined( USE_MAP ) || defined( USE_LIGHTMAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined ( USE_NORMALGLOSSMAP ) || defined ( USE_GLOSSMAP ) || defined( USE_SPECULARMAP ) )", "vec2 uvCoord = vUv;", "#endif", "vec3 normal = normalize( normalView );", "#if defined( USE_BUMPMAP ) && defined( USE_PARALLAX )", "vec3 eyeVector = normalize( -vViewPosition );", "#endif", XG.ShaderChunk.parallax_fragment, "#if defined( USE_NORMALGLOSSMAP ) || defined( USE_NORMALMAP )", "vec4 normalGloss = texture2D( normalMap, uvCoord );", "#endif", XG.DeferredShaderChunk.normalsFragment, XG.DeferredShaderChunk.colorsFragment, "float shininessLo = fract( shininess / 256.0 );", "float shininessHi = floor( shininess / 256.0 ) / 256.0;", "gl_FragData[ 0 ] = vec4( diffuseColor.rgb, shininessLo );", "gl_FragData[ 1 ] = vec4( specularColor.rgb, shininessHi );", "gl_FragData[ 2 ] = vec4( wrapRGB.rgb, wrapAround + 0.5 );", "gl_FragData[ 3 ] = vec4( normal.xyz, lightMapIntensity );", "#ifndef TEXTURE_DEPTH", "gl_FragData[ 4 ] = vec4( packDepth( clipPos.z / clipPos.w ) );", "#endif", "}"].join("\n"),
    vertexShader: [XG.ShaderChunk.map_pars_vertex, XG.ShaderChunk.color_pars_vertex, XG.ShaderChunk.morphtarget_pars_vertex, XG.ShaderChunk.skinning_pars_vertex, XG.ShaderChunk.particle_pars_vertex, "#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_NORMALGLOSSMAP )", "varying vec3 vViewPosition;", "#endif", "varying vec3 normalView;", "#ifndef TEXTURE_DEPTH", "varying vec4 clipPos;", "#endif", "void main() {", XG.ShaderChunk.map_vertex, XG.ShaderChunk.morphnormal_vertex, XG.ShaderChunk.skinbase_vertex, XG.ShaderChunk.skinnormal_vertex, XG.ShaderChunk.defaultnormal_vertex, XG.ShaderChunk.morphtarget_vertex, XG.ShaderChunk.skinning_vertex, XG.ShaderChunk.default_vertex, XG.ShaderChunk.particle_vertex, "normalView = normalize( normalMatrix * objectNormal );", "#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_NORMALGLOSSMAP )", "vViewPosition = mvPosition.xyz;", "#endif", "#ifdef USE_COLOR", "vColor = color;", "#endif", "#ifndef TEXTURE_DEPTH", "clipPos = gl_Position;", "#endif", "}"].join("\n")
}, XG.DeferredShaders.color = {
    uniforms: XG.UniformsUtils.merge([XG.UniformsLib.common, XG.UniformsLib.particle, {
        diffuse: {
            type: "v4",
            value: new XG.Vector4(1, 1, 1, 1)
        },
        specular: {
            type: "v4",
            value: new XG.Vector4(.1, .1, .1, 30)
        },
        wrapRGB: {
            type: "v3",
            value: new XG.Vector3(1, 1, 1)
        },
        glossMap: {
            type: "t",
            value: null
        },
        specularMap: {
            type: "t",
            value: null
        },
        normalMap: {
            type: "t",
            value: null
        },
        bumpMap: {
            type: "t",
            value: null
        },
        samplerNormalDepth: {
            type: "t",
            value: null,
            shared: !0
        },
        viewSize: {
            type: "v2",
            value: new XG.Vector2(800, 600),
            shared: !0
        },
        parallaxScale: {
            type: "f",
            value: 1
        }
    }]),
    fragmentShader: ["uniform vec4 diffuse;", "uniform vec4 specular;", "uniform vec3 wrapRGB;", XG.ShaderChunk.color_pars_fragment, XG.ShaderChunk.map_pars_fragment, XG.ShaderChunk.lightmap_pars_fragment, "#ifdef USE_NORMALGLOSSMAP", "uniform sampler2D normalMap;", "#endif", "#if defined( USE_PARALLAX ) && defined( USE_BUMPMAP )", "uniform sampler2D bumpMap;", "varying vec3 normalView;", "varying vec3 vViewPosition;", "#endif", XG.ShaderChunk.glossmap_pars_fragment, XG.ShaderChunk.specularmap_pars_fragment, XG.ShaderChunk.parallax_pars_fragment, XG.DeferredShaderChunk.packFloat, "void main() {", "#if !defined( PARTICLE ) && ( defined( USE_MAP ) || defined( USE_LIGHTMAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined ( USE_NORMALGLOSSMAP ) || defined ( USE_GLOSSMAP ) || defined( USE_SPECULARMAP ) )", "vec2 uvCoord = vUv;", "#endif", "#if defined( USE_PARALLAX ) && defined( USE_BUMPMAP )", "vec3 normal = normalize( normalView );", "vec3 eyeVector = normalize( -vViewPosition );", "#endif", XG.ShaderChunk.parallax_fragment, "#ifdef USE_NORMALGLOSSMAP", "vec4 normalGloss = texture2D( normalMap, uvCoord );", "#endif", XG.DeferredShaderChunk.colorsFragment, "float compressedDiffuse = vec3_to_float( diffuseColor.rgb );", "float compressedSpecular = vec3_to_float( specularColor.rgb );", "float compressedWrapRGB = vec3_to_float( wrapRGB.rgb );", "float wrapAroundShininessOcclusion = wrapAround * vec21_to_float( shininess, lightMapIntensity );", "gl_FragColor = vec4( compressedDiffuse, compressedSpecular, wrapAroundShininessOcclusion, compressedWrapRGB );", "}"].join("\n"),
    vertexShader: [XG.ShaderChunk.map_pars_vertex, XG.ShaderChunk.color_pars_vertex, XG.ShaderChunk.morphtarget_pars_vertex, XG.ShaderChunk.skinning_pars_vertex, XG.ShaderChunk.particle_pars_vertex, "#if defined( USE_PARALLAX ) && defined( USE_BUMPMAP )", "varying vec3 normalView;", "varying vec3 vViewPosition;", "#endif", "void main() {", XG.ShaderChunk.map_vertex, XG.ShaderChunk.morphnormal_vertex, XG.ShaderChunk.skinbase_vertex, XG.ShaderChunk.skinnormal_vertex, XG.ShaderChunk.defaultnormal_vertex, XG.ShaderChunk.morphtarget_vertex, XG.ShaderChunk.skinning_vertex, XG.ShaderChunk.default_vertex, XG.ShaderChunk.particle_vertex, "#if defined( USE_PARALLAX ) && defined( USE_BUMPMAP )", "normalView = normalize( normalMatrix * objectNormal );", "vViewPosition = mvPosition.xyz;", "#endif", "#ifdef USE_COLOR", "vColor = color;", "#endif", "}"].join("\n")
}, XG.DeferredShaders.normalDepth = {
    uniforms: XG.UniformsUtils.merge([XG.UniformsLib.particle, XG.UniformsLib.bump, XG.UniformsLib.normalmap, {
        alphaMap: {
            type: "t",
            value: null
        },
        detailRepeatScale: {
            type: "v3",
            value: new XG.Vector3(1, 1, 1)
        },
        offsetRepeat: {
            type: "v4",
            value: new XG.Vector4(0, 0, 1, 1)
        },
        parallaxScale: {
            type: "f",
            value: 1
        }
    }]),
    fragmentShader: ["#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_NORMALGLOSSMAP ) || defined( ALPHATEST )", "varying vec2 vUv;", "#endif", "#ifdef ALPHATEST", "uniform sampler2D alphaMap;", "#endif", XG.DeferredShaderChunk.normalsParsFragment, XG.ShaderChunk.parallax_pars_fragment, "varying vec4 clipPos;", "void main() {", "#if !defined( PARTICLE ) && ( defined( USE_MAP ) || defined( USE_LIGHTMAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined ( USE_NORMALGLOSSMAP ) || defined ( USE_GLOSSMAP ) || defined( USE_SPECULARMAP ) || defined( ALPHATEST ) )", "vec2 uvCoord = vUv;", "#endif", "vec3 normal = normalize( normalView );", "#if defined( USE_BUMPMAP ) && defined( USE_PARALLAX )", "vec3 eyeVector = normalize( -vViewPosition );", "#endif", XG.ShaderChunk.parallax_fragment, "#ifdef ALPHATEST", "vec2 textureCoord;", "#ifdef PARTICLE", "textureCoord = vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y );", "#else", "textureCoord = uvCoord;", "#endif", "float alphaValue = texture2D( alphaMap, textureCoord ).a;", "if ( alphaValue < ALPHATEST ) discard;", "#endif", "#if defined( USE_NORMALMAP ) || defined( USE_NORMALGLOSSMAP )", "vec4 normalGloss = texture2D( normalMap, uvCoord );", "#endif", XG.DeferredShaderChunk.normalsFragment, "gl_FragColor = vec4( normal, clipPos.z / clipPos.w );", "}"].join("\n"),
    vertexShader: ["varying vec3 normalView;", "varying vec4 clipPos;", "#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_NORMALGLOSSMAP ) || defined( ALPHATEST )", "varying vec2 vUv;", "uniform vec4 offsetRepeat;", "#endif", "#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_NORMALGLOSSMAP )", "varying vec3 vViewPosition;", "#endif", XG.ShaderChunk.morphtarget_pars_vertex, XG.ShaderChunk.skinning_pars_vertex, XG.ShaderChunk.particle_pars_vertex, "void main() {", XG.ShaderChunk.morphnormal_vertex, XG.ShaderChunk.skinbase_vertex, XG.ShaderChunk.skinnormal_vertex, XG.ShaderChunk.defaultnormal_vertex, XG.ShaderChunk.morphtarget_vertex, XG.ShaderChunk.skinning_vertex, XG.ShaderChunk.default_vertex, XG.ShaderChunk.particle_vertex, "normalView = normalize( normalMatrix * objectNormal );", "#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_NORMALGLOSSMAP ) || defined( ALPHATEST )", "vUv = uv * offsetRepeat.zw + offsetRepeat.xy;", "#endif", "#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_NORMALGLOSSMAP )", "vViewPosition = mvPosition.xyz;", "#endif", "clipPos = gl_Position;", "}"].join("\n")
}, XG.DeferredShaders.depth = {
    uniforms: XG.UniformsUtils.merge([XG.UniformsLib.particle, {
        slopeScale: {
            type: "f",
            value: 2,
            shared: !0
        },
        slopeBias: {
            type: "f",
            value: 0,
            shared: !0
        },
        slopeMax: {
            type: "f",
            value: .001,
            shared: !0
        },
        depthTextureBias: {
            type: "f",
            value: 5e-4,
            shared: !0
        },
        alphaMap: {
            type: "t",
            value: null
        },
        offsetRepeat: {
            type: "v4",
            value: new XG.Vector4(0, 0, 1, 1)
        }
    }]),
    fragmentShader: ["#ifdef ALPHATEST", "uniform sampler2D alphaMap;", "varying vec2 vUv;", "#endif", "#ifndef DEPTH_TEXTURES", "#ifdef SLOPE_DEPTH_BIAS", "uniform float slopeScale;", "uniform float slopeBias;", "uniform float slopeMax;", "#endif", "varying vec4 clipPos;", "#endif", "void main() {", "#ifdef ALPHATEST", "float alphaValue = texture2D( alphaMap, vUv ).a;", "if ( alphaValue < ALPHATEST ) discard;", "#endif", "#ifndef DEPTH_TEXTURES", "float depth = clipPos.z / clipPos.w;", "#ifdef SLOPE_DEPTH_BIAS", "float dx = dFdx( depth );", "float dy = dFdy( depth );", "float m = max( abs(dx), abs(dy) );", "m = min( m, slopeMax );", "gl_FragColor.x = depth + m * slopeScale + slopeBias;", "#else", "gl_FragColor.x = depth;", "#endif", "#endif", "}"].join("\n"),
    vertexShader: ["#ifdef ALPHATEST", "varying vec2 vUv;", "uniform vec4 offsetRepeat;", "#endif", "#ifdef DEPTH_TEXTURES", "uniform float depthTextureBias;", "#else", "varying vec4 clipPos;", "#endif", XG.ShaderChunk.morphtarget_pars_vertex, XG.ShaderChunk.skinning_pars_vertex, XG.ShaderChunk.particle_pars_vertex, "void main() {", XG.ShaderChunk.skinbase_vertex, XG.ShaderChunk.morphtarget_vertex, XG.ShaderChunk.skinning_vertex, XG.ShaderChunk.default_vertex, XG.ShaderChunk.particle_vertex, "#ifndef DEPTH_TEXTURES", "clipPos = gl_Position;", "#else", "gl_Position.z += depthTextureBias;", "#endif", "#ifdef ALPHATEST", "vUv = uv * offsetRepeat.zw + offsetRepeat.xy;", "#endif", "}"].join("\n")
}, XG.DeferredShaders.pointLight = {
    uniforms: XG.UniformsUtils.merge([XG.DeferredUniformsLib.gbuffers, XG.DeferredUniformsLib.multiShadowMaps, {
        matProjInverse: {
            type: "m4",
            value: new XG.Matrix4,
            shared: !0
        },
        lightPositionVS: {
            type: "v3",
            value: new XG.Vector3(0, 0, 0)
        },
        lightColor: {
            type: "c",
            value: new XG.Color(0)
        },
        lightIntensity: {
            type: "f",
            value: 1
        },
        lightDistance: {
            type: "f",
            value: 1
        }
    }]),
    fragmentShader: ["uniform float lightDistance;", "uniform float lightIntensity;", "uniform vec3 lightColor;", "uniform vec3 lightPositionVS;", "uniform mat4 matProjInverse;", XG.DeferredShaderChunk.multiShadowMapsUniforms, XG.DeferredShaderChunk.gbuffersUniforms, XG.DeferredShaderChunk.unpackFloat, XG.DeferredShaderChunk.shadowMapPCF, XG.DeferredShaderChunk.shadowMapPCFSoft, XG.DeferredShaderChunk.geometryFactor, XG.DeferredShaderChunk.specularBRDF, "void main() {", XG.DeferredShaderChunk.computeVertexPositionVS, "vec3 lightVector = lightPositionVS - vertexPositionVS.xyz;", "float distance = length( lightVector );", "if ( distance > lightDistance ) discard;", XG.DeferredShaderChunk.computeNormal, XG.DeferredShaderChunk.unpackColorMap, "lightVector = lightVector / distance;", XG.DeferredShaderChunk.computeDiffuse, XG.DeferredShaderChunk.computeSpecular, "diffuse -= diffuse * fresnel;", "const float cutoff = 0.3;", "float denom = distance / lightDistance + 1.0;", "float attenuation = 1.0 / ( denom * denom );", "attenuation = ( attenuation - cutoff ) / ( 1.0 - cutoff );", "attenuation = max( attenuation, 0.0 );", "attenuation *= attenuation;", "float occlusion = 1.0;", "#ifdef USE_SHADOWMAP", "for ( int i = 0; i < SHADOWMAP_COUNT; i ++ ) {", XG.DeferredShaderChunk.shadowPrep, "if ( inFrustum && posLightCS.z >= 0.0 ) {", XG.DeferredShaderChunk.shadowCheck, "#ifndef OSX_HACK", "break;", "#endif", "}", "}", "#endif", "attenuation *= occlusion;", XG.DeferredShaderChunk.combine, "}"].join("\n"),
    vertexShader: XG.ShaderChunk.vertexShaderGeometry
}, XG.DeferredShaders.sphereLight = {
    uniforms: XG.UniformsUtils.merge([XG.DeferredUniformsLib.gbuffers, XG.DeferredUniformsLib.multiShadowMaps, {
        matProjInverse: {
            type: "m4",
            value: new XG.Matrix4,
            shared: !0
        },
        lightPositionVS: {
            type: "v3",
            value: new XG.Vector3(0, 0, 0)
        },
        lightColor: {
            type: "c",
            value: new XG.Color(0)
        },
        lightIntensity: {
            type: "f",
            value: 1
        },
        lightDistance: {
            type: "f",
            value: 1
        },
        lightRadius: {
            type: "f",
            value: 1
        }
    }]),
    fragmentShader: ["uniform float lightRadius;", "uniform float lightDistance;", "uniform float lightIntensity;", "uniform vec3 lightColor;", "uniform vec3 lightPositionVS;", "uniform mat4 matProjInverse;", XG.DeferredShaderChunk.multiShadowMapsUniforms, XG.DeferredShaderChunk.gbuffersUniforms, XG.DeferredShaderChunk.unpackFloat, XG.DeferredShaderChunk.shadowMapPCF, XG.DeferredShaderChunk.shadowMapPCFSoft, XG.DeferredShaderChunk.geometryFactor, XG.DeferredShaderChunk.specularBRDF, "void main() {", XG.DeferredShaderChunk.computeVertexPositionVS, "vec3 lightVectorFull = lightPositionVS - vertexPositionVS.xyz;", "float distance = length( lightVectorFull );", "if ( distance > lightDistance ) discard;", XG.DeferredShaderChunk.computeNormal, XG.DeferredShaderChunk.unpackColorMap, "vec3 lightVector = lightVectorFull / distance;", XG.DeferredShaderChunk.computeDiffuse, "vec3 eye = normalize( -vertexPositionVS.xyz );", "vec3 reflectVS = reflect( eye, normal );", "vec3 centerToRay = lightVectorFull - dot( lightVectorFull, reflectVS ) * reflectVS;", "vec3 closestPoint = lightVectorFull - centerToRay * saturate( lightRadius / length( centerToRay ) );", "lightVector = normalize( closestPoint );", "dotLN = max( dot( lightVector, normal ), 0.0 );", XG.DeferredShaderChunk.computeSpecular, "float alpha = roughness * roughness;", "float alphaPrime = saturate( alpha + 0.5 * saturate( lightRadius / distance ) );", "float sphereNormalization = alpha / alphaPrime;", "sphereNormalization *= sphereNormalization;", "specular *= sphereNormalization;", "diffuse -= diffuse * fresnel;", "const float cutoff = 0.3;", "float denom = distance / lightDistance + 1.0;", "float attenuation = 1.0 / ( denom * denom );", "attenuation = ( attenuation - cutoff ) / ( 1.0 - cutoff );", "attenuation = max( attenuation, 0.0 );", "attenuation *= attenuation;", "float occlusion = 1.0;", "#ifdef USE_SHADOWMAP", "for ( int i = 0; i < SHADOWMAP_COUNT; i ++ ) {", XG.DeferredShaderChunk.shadowPrep, "if ( inFrustum && posLightCS.z >= 0.0 ) {", XG.DeferredShaderChunk.shadowCheck, "#ifndef OSX_HACK", "break;", "#endif", "}", "}", "#endif", "attenuation *= occlusion;", XG.DeferredShaderChunk.combine, "}"].join("\n"),
    vertexShader: XG.ShaderChunk.vertexShaderGeometry
}, XG.DeferredShaders.tubeLight = {
    uniforms: XG.UniformsUtils.merge([XG.DeferredUniformsLib.gbuffers, {
        matProj: {
            type: "m4",
            value: new XG.Matrix4,
            shared: !0
        },
        matProjInverse: {
            type: "m4",
            value: new XG.Matrix4,
            shared: !0
        },
        lightPosition0VS: {
            type: "v3",
            value: new XG.Vector3(0, -1, 0)
        },
        lightPosition1VS: {
            type: "v3",
            value: new XG.Vector3(0, 1, 0)
        },
        lightColor: {
            type: "c",
            value: new XG.Color(0)
        },
        lightIntensity: {
            type: "f",
            value: 1
        },
        lightDistance: {
            type: "f",
            value: 1
        },
        lightRadius: {
            type: "f",
            value: 1
        }
    }]),
    fragmentShader: ["uniform float lightRadius;", "uniform float lightDistance;", "uniform float lightIntensity;", "uniform vec3 lightColor;", "uniform vec3 lightPosition0VS;", "uniform vec3 lightPosition1VS;", "uniform mat4 matProjInverse;", XG.DeferredShaderChunk.multiShadowMapsUniforms, XG.DeferredShaderChunk.gbuffersUniforms, XG.DeferredShaderChunk.unpackFloat, XG.DeferredShaderChunk.geometryFactor, XG.DeferredShaderChunk.specularBRDF, XG.DeferredShaderChunk.directionalOcclusion, "void main() {", XG.DeferredShaderChunk.computeVertexPositionVS, XG.DeferredShaderChunk.computeNormal, XG.DeferredShaderChunk.unpackColorMap, "vec3 lightVector0 = lightPosition0VS - vertexPositionVS.xyz;", "vec3 lightVector1 = lightPosition1VS - vertexPositionVS.xyz;", "float length0 = length( lightVector0 );", "float length1 = length( lightVector1 );", "float a = saturate( 0.5 * ( dot( normal, lightVector0 ) / length0 + dot( normal, lightVector1 ) / length1 ) );", "float b = ( length0 * length1 + dot( lightVector0, lightVector1 ) ) * 0.5 + 1.0;", "float dotLN = a;", "vec3 diffuse = vec3( dotLN );", "vec3 eye = normalize( -vertexPositionVS.xyz );", "vec3 reflectVS = reflect( eye, normal );", "vec3 lightVectorD = lightVector1 - lightVector0;", "float lengthD = length( lightVectorD );", "float dotRD = dot( reflectVS, lightVectorD );", "float ta = dot( reflectVS, lightVector0 ) * dotRD - dot( lightVector0, lightVectorD );", "float tb = lengthD * lengthD - dotRD * dotRD;", "float t = ta / tb;", "vec3 closestPoint = lightVector0 + saturate( t ) * lightVectorD;", "vec3 lightVectorClosest = closestPoint;", "vec3 centerToRay = lightVectorClosest - dot( lightVectorClosest, reflectVS ) * reflectVS;", "closestPoint = lightVectorClosest - centerToRay * saturate( lightRadius / length( centerToRay ) );", "vec3 lightVector = normalize( closestPoint );", XG.DeferredShaderChunk.computeSpecular, "vec3 lightVectorFull = ( lightPosition0VS + lightPosition1VS ) * 0.5 - vertexPositionVS.xyz;", "float distance = length( lightVectorFull );", "float alpha = roughness * roughness;", "float alphaPrime = saturate( alpha + 0.5 * saturate( lightRadius / distance ) );", "float sphereNormalization = alpha / alphaPrime;", "sphereNormalization *= sphereNormalization;", "float alphaPrimeLine = saturate( alpha + 0.5 * saturate( lengthD / distance ) );", "float lineNormalization = alpha / alphaPrimeLine;", "specular *= sphereNormalization;", "specular *= lineNormalization;", "diffuse -= diffuse * fresnel;", "#ifdef OCCLUSION_ENABLED", "const float occlusionScale = 0.9;", "vec2 r = rand( texCoord ) + 0.1;", "float occlusionDistanceC = occlusionScale * r.x;", "float occlusionDistance0 = occlusionScale * r.y;", "float occlusionDistance1 = occlusionScale * rand( texCoord + 0.01 ).y + 0.1;", "float occlusionC = checkOcclusion( vertexPositionVS.xyz + occlusionDistanceC * lightVector );", "float occlusion0 = checkOcclusion( vertexPositionVS.xyz + occlusionDistance0 * lightVector0 / length0 );", "float occlusion1 = checkOcclusion( vertexPositionVS.xyz + occlusionDistance1 * lightVector1 / length1 );", "float occlusion = ( 0.5 * occlusionC + 0.25 * occlusion0 + 0.25 * occlusion1 );", "#else", "float occlusion = 1.0;", "#endif", "float attenuation = 1.0 / b;", "attenuation *= occlusion;", XG.DeferredShaderChunk.combine, "}"].join("\n"),
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangle
}, XG.DeferredShaders.spotLight = {
    uniforms: XG.UniformsUtils.merge([XG.DeferredUniformsLib.gbuffers, XG.DeferredUniformsLib.projectedTexture, {
        matProjInverse: {
            type: "m4",
            value: new XG.Matrix4,
            shared: !0
        },
        lightPositionVS: {
            type: "v3",
            value: new XG.Vector3(0, 1, 0)
        },
        lightDirectionVS: {
            type: "v3",
            value: new XG.Vector3(0, 1, 0)
        },
        lightColor: {
            type: "c",
            value: new XG.Color(0)
        },
        lightIntensity: {
            type: "f",
            value: 1
        },
        lightDistance: {
            type: "f",
            value: 1
        },
        lightAngleCos: {
            type: "f",
            value: 1
        },
        matShadow: {
            type: "m4",
            value: new XG.Matrix4
        },
        samplerShadowMap: {
            type: "t",
            value: null
        },
        shadowMapSize: {
            type: "v2",
            value: new XG.Vector2(512, 512)
        },
        shadowDarkness: {
            type: "f",
            value: .5
        },
        shadowBias: {
            type: "f",
            value: 0
        }
    }]),
    fragmentShader: ["uniform vec3 lightPositionVS;", "uniform vec3 lightDirectionVS;", "uniform vec3 lightColor;", "uniform float lightIntensity;", "uniform float lightAngleCos;", "uniform mat4 matProjInverse;", "#ifdef USE_SHADOWMAP", "uniform mat4 matShadow;", "uniform sampler2D samplerShadowMap;", "uniform float shadowBias;", "uniform float shadowDarkness;", "uniform vec2 shadowMapSize;", "#endif", XG.DeferredShaderChunk.gbuffersUniforms, XG.DeferredShaderChunk.projectedTextureUniforms, XG.DeferredShaderChunk.unpackFloat, XG.DeferredShaderChunk.shadowMapPCF, XG.DeferredShaderChunk.shadowMapPCFSoft, XG.DeferredShaderChunk.geometryFactor, XG.DeferredShaderChunk.specularBRDF, "void main() {", XG.DeferredShaderChunk.computeVertexPositionVS, XG.DeferredShaderChunk.computeNormal, XG.DeferredShaderChunk.unpackColorMap, "vec3 lightVector = normalize( lightPositionVS.xyz - vertexPositionVS.xyz );", "float rho = dot( lightDirectionVS, lightVector );", "if ( rho <= lightAngleCos ) discard;", "float theta = lightAngleCos + 0.0001;", "float phi = lightAngleCos + 0.05;", "const float falloff = 4.0;", "float spot = 0.0;", "if ( rho >= phi ) {", "spot = 1.0;", "} else if ( rho <= theta ) {", "spot = 0.0;", "} else { ", "spot = pow( ( rho - theta ) / ( phi - theta ), falloff );", "}", XG.DeferredShaderChunk.computeDiffuse, XG.DeferredShaderChunk.computeSpecular, "diffuse *= spot;", "specular *= spot;", "diffuse -= diffuse * fresnel;", "float occlusion = 1.0;", "#ifdef USE_SHADOWMAP", "vec4 posLightCS = matShadow * vertexPositionVS;", "vec2 shadowCoord = ( posLightCS.xy / posLightCS.w ) * 0.5 + 0.5;", "float vertexDepth = posLightCS.z / posLightCS.w;", "#if defined( DEPTH_TEXTURES )", "vertexDepth = vertexDepth * 0.5 + 0.5;", "#endif", "#if !defined( SLOPE_DEPTH_BIAS )", "vertexDepth -= shadowBias;", "#endif", "#if defined( SHADOWMAP_TYPE_PCF )", "float shadowValue = sampleShadowPCF( samplerShadowMap, shadowMapSize, shadowCoord, vertexDepth );", "#elif defined( SHADOWMAP_TYPE_PCF_SOFT )", "float shadowValue = sampleShadowPCFSoft( samplerShadowMap, shadowMapSize, shadowCoord, vertexDepth );", "#elif defined( SHADOWMAP_TYPE_PCF_SOFT_HQ )", "float xPixelOffset = 2.0 / shadowMapSize.x;", "float yPixelOffset = 2.0 / shadowMapSize.y;", "float shadowValue0 = sampleShadowPCFSoft( samplerShadowMap, shadowMapSize, shadowCoord + vec2( -xPixelOffset, 0.0 ), vertexDepth );", "float shadowValue1 = sampleShadowPCFSoft( samplerShadowMap, shadowMapSize, shadowCoord + vec2(  xPixelOffset, 0.0 ), vertexDepth );", "float shadowValue2 = sampleShadowPCFSoft( samplerShadowMap, shadowMapSize, shadowCoord + vec2( 0.0, -yPixelOffset ), vertexDepth );", "float shadowValue3 = sampleShadowPCFSoft( samplerShadowMap, shadowMapSize, shadowCoord + vec2( 0.0,  yPixelOffset ), vertexDepth );", "float shadowValue = ( shadowValue0 + shadowValue1 + shadowValue2 + shadowValue3 ) * 0.25;", "#else", "float shadowDepth = texture2D( samplerShadowMap, shadowCoord ).x;", "float shadowValue = float( vertexDepth > shadowDepth );", "#endif", "occlusion = 1.0 - shadowDarkness * shadowValue;", "#endif", "#ifdef PROJECTED_TEXTURE", "vec4 posTextureCS = matTexture * vertexPositionVS;", "#ifdef PROJECTED_SHADOW", "vec2 textureCoord = ( posTextureCS.xy / posTextureCS.w ) * 0.5 + 0.5;", "bvec4 inTexFrustumVec = bvec4 ( textureCoord.x >= 0.0, textureCoord.x <= 1.0, textureCoord.y >= 0.0, textureCoord.y <= 1.0 );", "bool inTexFrustum = all( inTexFrustumVec );", "if ( inTexFrustum ) {", "vec4 textureColor = texture2DProj( samplerTexture, posTextureCS, textureBias );", "float translucency = 1.0 - textureColor.r * shadowDarkness;", "occlusion = min( occlusion, translucency );", "}", "#else", "vec4 textureColor = texture2DProj( samplerTexture, posTextureCS );", "textureColor.xyz *= textureColor.xyz;", "diffuse *= textureColor.xyz;", "specular *= textureColor.xyz;", "#endif", "#endif", "float attenuation = occlusion;", XG.DeferredShaderChunk.combine, "}"].join("\n"),
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangle
}, XG.DeferredShaders.directionalLight = {
    uniforms: XG.UniformsUtils.merge([XG.DeferredUniformsLib.gbuffers, XG.DeferredUniformsLib.multiShadowMaps, XG.DeferredUniformsLib.projectedTexture, {
        matProjInverse: {
            type: "m4",
            value: new XG.Matrix4,
            shared: !0
        },
        lightDirectionVS: {
            type: "v3",
            value: new XG.Vector3(0, 1, 0)
        },
        lightColor: {
            type: "c",
            value: new XG.Color(0)
        },
        lightIntensity: {
            type: "f",
            value: 1
        }
    }]),
    fragmentShader: ["uniform float lightIntensity;", "uniform vec3 lightColor;", "uniform vec3 lightDirectionVS;", "uniform mat4 matProjInverse;", XG.DeferredShaderChunk.multiShadowMapsUniforms, XG.DeferredShaderChunk.gbuffersUniforms, XG.DeferredShaderChunk.projectedTextureUniforms, XG.DeferredShaderChunk.unpackFloat, XG.DeferredShaderChunk.shadowMapPCF, XG.DeferredShaderChunk.shadowMapPCFSoft, XG.DeferredShaderChunk.geometryFactor, XG.DeferredShaderChunk.specularBRDF, "void main() {", XG.DeferredShaderChunk.computeVertexPositionVS, XG.DeferredShaderChunk.computeNormal, XG.DeferredShaderChunk.unpackColorMap, "vec3 lightVector = lightDirectionVS;", XG.DeferredShaderChunk.computeDiffuse, XG.DeferredShaderChunk.computeSpecular, XG.DeferredShaderChunk.directionalShadows, XG.DeferredShaderChunk.directionalProjectedTexture, "diffuse -= diffuse * fresnel;", "float attenuation = occlusion;", XG.DeferredShaderChunk.combine, "#ifdef SHADOWMAP_DEBUG", "gl_FragColor.xyz *= debugColor;", "#endif", "}"].join("\n"),
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangle
}, XG.DeferredShaders.hemisphereLight = {
    uniforms: XG.UniformsUtils.merge([XG.DeferredUniformsLib.gbuffers, {
        matProjInverse: {
            type: "m4",
            value: new XG.Matrix4,
            shared: !0
        },
        lightDirectionVS: {
            type: "v3",
            value: new XG.Vector3(0, 1, 0)
        },
        lightColorSky: {
            type: "c",
            value: new XG.Color(0)
        },
        lightColorGround: {
            type: "c",
            value: new XG.Color(0)
        },
        lightIntensity: {
            type: "f",
            value: 1
        },
        samplerSSAO: {
            type: "t",
            value: null
        }
    }]),
    fragmentShader: ["uniform float lightIntensity;", "uniform vec3 lightColorSky;", "uniform vec3 lightColorGround;", "uniform vec3 lightDirectionVS;", "uniform mat4 matProjInverse;", "#ifdef USE_SSAO", "uniform sampler2D samplerSSAO;", "#endif", XG.DeferredShaderChunk.gbuffersUniforms, XG.DeferredShaderChunk.unpackFloat, XG.DeferredShaderChunk.environmentBRDF, "void main() {", XG.DeferredShaderChunk.computeVertexPositionVS, XG.DeferredShaderChunk.computeNormal, XG.DeferredShaderChunk.unpackColorMap, "vec3 lightVectorHemi = lightDirectionVS;", "float lightIntensityHemi = lightIntensity;", "vec3 eyeVector = normalize( -vertexPositionVS.xyz );", "vec3 halfVector = normalize( lightVectorHemi + eyeVector );", XG.DeferredShaderChunk.hemiTerm, "gl_FragColor = vec4( hemiTerm, 1.0 );", "}"].join("\n"),
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangle
}, XG.DeferredShaders.dayLight = {
    uniforms: XG.UniformsUtils.merge([XG.DeferredUniformsLib.gbuffers, XG.DeferredUniformsLib.multiShadowMaps, XG.DeferredUniformsLib.projectedTexture, {
        matProjInverse: {
            type: "m4",
            value: new XG.Matrix4,
            shared: !0
        },
        lightDirectionVSSun: {
            type: "v3",
            value: new XG.Vector3(0, 1, 0)
        },
        lightDirectionVSHemi: {
            type: "v3",
            value: new XG.Vector3(0, 1, 0)
        },
        lightColorSun: {
            type: "c",
            value: new XG.Color(0)
        },
        lightColorSky: {
            type: "c",
            value: new XG.Color(0)
        },
        lightColorGround: {
            type: "c",
            value: new XG.Color(0)
        },
        lightIntensitySun: {
            type: "f",
            value: 1
        },
        lightIntensityHemi: {
            type: "f",
            value: 1
        },
        samplerSSAO: {
            type: "t",
            value: null
        }
    }]),
    fragmentShader: ["uniform float lightIntensitySun;", "uniform float lightIntensityHemi;", "uniform vec3 lightColorSun;", "uniform vec3 lightColorSky;", "uniform vec3 lightColorGround;", "uniform vec3 lightDirectionVSSun;", "uniform vec3 lightDirectionVSHemi;", "uniform mat4 matProjInverse;", "#ifdef USE_SSAO", "uniform sampler2D samplerSSAO;", "#endif", XG.DeferredShaderChunk.multiShadowMapsUniforms, XG.DeferredShaderChunk.gbuffersUniforms, XG.DeferredShaderChunk.projectedTextureUniforms, XG.DeferredShaderChunk.unpackFloat, XG.DeferredShaderChunk.shadowMapPCF, XG.DeferredShaderChunk.shadowMapPCFSoft, XG.DeferredShaderChunk.geometryFactor, XG.DeferredShaderChunk.specularBRDF, XG.DeferredShaderChunk.environmentBRDF, "void main() {", XG.DeferredShaderChunk.computeVertexPositionVS, XG.DeferredShaderChunk.computeNormal, XG.DeferredShaderChunk.unpackColorMap, "vec3 lightVector = lightDirectionVSSun;", XG.DeferredShaderChunk.computeDiffuse, XG.DeferredShaderChunk.computeSpecular, XG.DeferredShaderChunk.directionalShadows, XG.DeferredShaderChunk.directionalProjectedTexture, "diffuse -= diffuse * fresnel;", "vec3 directionalTerm = ( occlusion * lightIntensitySun ) * lightColorSun * ( albedo * diffuse + specular );", "vec3 lightVectorHemi = lightDirectionVSHemi;", XG.DeferredShaderChunk.hemiTerm, "gl_FragColor = vec4( directionalTerm + hemiTerm, 1.0 );", "#ifdef SHADOWMAP_DEBUG", "gl_FragColor.xyz *= debugColor;", "#endif", "}"].join("\n"),
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangle
}, XG.DeferredShaders.dayLightCube = {
    uniforms: XG.UniformsUtils.merge([XG.DeferredUniformsLib.gbuffers, XG.DeferredUniformsLib.multiShadowMaps, XG.DeferredUniformsLib.projectedTexture, {
        matProjInverse: {
            type: "m4",
            value: new XG.Matrix4,
            shared: !0
        },
        lightDirectionVSSun: {
            type: "v3",
            value: new XG.Vector3(0, 1, 0)
        },
        lightColorSun: {
            type: "c",
            value: new XG.Color(0)
        },
        lightIntensitySun: {
            type: "f",
            value: 1
        },
        lightIntensityAmbient: {
            type: "f",
            value: 1
        },
        matViewInverse: {
            type: "m4",
            value: new XG.Matrix4,
            shared: !0
        },
        samplerSpecular: {
            type: "t",
            value: null
        },
        samplerDiffuse: {
            type: "t",
            value: null
        },
        samplerSSAO: {
            type: "t",
            value: null
        },
        maxMipSpecular: {
            type: "f",
            value: 7
        }
    }]),
    fragmentShader: ["uniform float lightIntensitySun;", "uniform float lightIntensityAmbient;", "uniform vec3 lightColorSun;", "uniform vec3 lightDirectionVSSun;", "uniform mat4 matProjInverse;", "uniform mat4 matViewInverse;", "uniform samplerCube samplerSpecular;", "uniform samplerCube samplerDiffuse;", "#ifdef USE_SSAO", "uniform sampler2D samplerSSAO;", "#endif", "uniform float maxMipSpecular;", XG.DeferredShaderChunk.multiShadowMapsUniforms, XG.DeferredShaderChunk.gbuffersUniforms, XG.DeferredShaderChunk.projectedTextureUniforms, XG.DeferredShaderChunk.unpackFloat, XG.DeferredShaderChunk.shadowMapPCF, XG.DeferredShaderChunk.shadowMapPCFSoft, XG.DeferredShaderChunk.geometryFactor, XG.DeferredShaderChunk.specularBRDF, XG.DeferredShaderChunk.environmentBRDF, "void main() {", XG.DeferredShaderChunk.computeVertexPositionVS, XG.DeferredShaderChunk.computeNormal, XG.DeferredShaderChunk.unpackColorMap, "vec3 lightVector = lightDirectionVSSun;", XG.DeferredShaderChunk.computeDiffuse, XG.DeferredShaderChunk.computeSpecular, XG.DeferredShaderChunk.directionalShadows, XG.DeferredShaderChunk.directionalProjectedTexture, "diffuse -= diffuse * fresnel;", "vec3 directionalTerm = ( occlusion * lightIntensitySun ) * lightColorSun * ( albedo * diffuse + specular );", "float gloss = shininess / 8192.0;", "vec3 reflectVS = reflect( -eyeVector, normal );", "vec4 reflectWS = matViewInverse * vec4( reflectVS, 0.0 );", "vec3 cubeCoord = reflectWS.xyz;", "float maxMipLevel = maxMipSpecular - 2.0;", "#ifdef SUPPORTS_TEXTURE_LOD", "float mipLod = max( ( maxMipLevel * ( 1.0 - gloss ) ), 1.5 );", "vec3 cubeColorSpecular = textureCubeLodEXT( samplerSpecular, cubeCoord, mipLod ).rgb;", "cubeColorSpecular *= cubeColorSpecular;", "#else", "const float mipUnit = 255.0 / 16.0;", "#ifdef SPECULAR_MIP_FIX", "float curvature = length( fwidth( cubeCoord ) );", "float mipLevelMinification = mipUnit * textureCube( samplerSpecular, cubeCoord, -curvature ).a;", "float mipLevelMagnification = mipUnit * textureCube( samplerSpecular, cubeCoord, maxMipSpecular - 1.0 - curvature ).a;", "#else", "const float curvature = 0.0;", "float mipLevelMinification = mipUnit * textureCube( samplerSpecular, cubeCoord ).a;", "float mipLevelMagnification = mipUnit * textureCube( samplerSpecular, cubeCoord, maxMipSpecular - 1.0 ).a;", "#endif", "float mipLevel;", "if ( mipLevelMinification == 0.0 ) {", "mipLevel = mipLevelMagnification - ( maxMipSpecular - 1.0 );", "} else {", "mipLevel = mipLevelMinification;", "}", "float mipBias = max( ( maxMipLevel * ( 1.0 - gloss ) ) - mipLevel, 0.0 );", "mipBias -= curvature;", "vec3 cubeColorSpecular = textureCube( samplerSpecular, cubeCoord, mipBias ).rgb;", "cubeColorSpecular *= cubeColorSpecular;", "#endif", "vec4 normalWS = matViewInverse * vec4( normal, 0.0 );", "vec3 cubeColorDiffuse = textureCube( samplerDiffuse, normalWS.xyz ).rgb;", "cubeColorDiffuse *= cubeColorDiffuse;", "vec3 fresnelEnv = EnvironmentBRDF( gloss, dot( eyeVector, normal ), specularColor );", "vec3 imageDiffuse = ( 1.0 - fresnelEnv ) * cubeColorDiffuse;", "vec3 imageSpecular = fresnelEnv * cubeColorSpecular;", "#ifdef USE_SSAO", "float occlusionAmbient = texture2D( samplerSSAO, texCoord ).x;", "#else", "float occlusionAmbient = 1.0;", "#endif", "vec3 imageTerm = lightIntensityAmbient * ( albedo * imageDiffuse + imageSpecular ) * occlusionAmbient * occlusionAmbient * lightMapIntensity;", "gl_FragColor = vec4( directionalTerm + imageTerm, 1.0 );", "#ifdef SHADOWMAP_DEBUG", "gl_FragColor.xyz *= debugColor;", "#endif", "}"].join("\n"),
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangle
}, XG.DeferredShaders.areaLight = {
    uniforms: XG.UniformsUtils.merge([XG.DeferredUniformsLib.gbuffers, {
        matProjInverse: {
            type: "m4",
            value: new XG.Matrix4,
            shared: !0
        },
        lightPositionVS: {
            type: "v3",
            value: new XG.Vector3(0, 1, 0)
        },
        lightNormalVS: {
            type: "v3",
            value: new XG.Vector3(0, -1, 0)
        },
        lightRightVS: {
            type: "v3",
            value: new XG.Vector3(1, 0, 0)
        },
        lightUpVS: {
            type: "v3",
            value: new XG.Vector3(1, 0, 0)
        },
        lightColor: {
            type: "c",
            value: new XG.Color(0)
        },
        lightIntensity: {
            type: "f",
            value: 1
        },
        lightWidth: {
            type: "f",
            value: 1
        },
        lightHeight: {
            type: "f",
            value: 1
        },
        constantAttenuation: {
            type: "f",
            value: 1.5
        },
        linearAttenuation: {
            type: "f",
            value: .5
        },
        quadraticAttenuation: {
            type: "f",
            value: .1
        },
        samplerTexture: {
            type: "t",
            value: null
        },
        matShadow: {
            type: "m4",
            value: new XG.Matrix4
        },
        samplerShadowMap: {
            type: "t",
            value: null
        },
        shadowMapSize: {
            type: "v2",
            value: new XG.Vector2(512, 512)
        },
        shadowDarkness: {
            type: "f",
            value: .5
        },
        shadowBias: {
            type: "f",
            value: 0
        }
    }]),
    fragmentShader: ["uniform vec3 lightPositionVS;", "uniform vec3 lightNormalVS;", "uniform vec3 lightRightVS;", "uniform vec3 lightUpVS;", "#ifdef AREA_TEXTURE", "uniform sampler2D samplerTexture;", "#endif", "uniform float lightWidth;", "uniform float lightHeight;", "uniform float constantAttenuation;", "uniform float linearAttenuation;", "uniform float quadraticAttenuation;", "uniform float lightIntensity;", "uniform vec3 lightColor;", "uniform mat4 matProjInverse;", "#ifdef USE_SHADOWMAP", "uniform mat4 matShadow;", "uniform sampler2D samplerShadowMap;", "uniform float shadowBias;", "uniform float shadowDarkness;", "uniform vec2 shadowMapSize;", "#endif", XG.DeferredShaderChunk.gbuffersUniforms, XG.DeferredShaderChunk.unpackFloat, XG.DeferredShaderChunk.shadowMapPCF, XG.DeferredShaderChunk.shadowMapPCFSoft, XG.DeferredShaderChunk.geometryFactor, XG.DeferredShaderChunk.specularBRDF, "vec3 projectOnPlane( vec3 point, vec3 planeCenter, vec3 planeNorm ) {", "return point - dot( point - planeCenter, planeNorm ) * planeNorm;", "}", "bool sideOfPlane( vec3 point, vec3 planeCenter, vec3 planeNorm ) {", "return ( dot( point - planeCenter, planeNorm ) >= 0.0 );", "}", "vec3 linePlaneIntersect( vec3 lp, vec3 lv, vec3 pc, vec3 pn ) {", "return lp + lv * ( dot( pn, pc - lp ) / dot( pn, lv ) );", "}", "float calculateAttenuation( float dist ) {", "return ( 1.0 / ( constantAttenuation + linearAttenuation * dist + quadraticAttenuation * dist * dist ) );", "}", "void main() {", XG.DeferredShaderChunk.computeVertexPositionVS, XG.DeferredShaderChunk.computeNormal, XG.DeferredShaderChunk.unpackColorMap, "float w = lightWidth;", "float h = lightHeight;", "vec3 proj = projectOnPlane( vertexPositionVS.xyz, lightPositionVS, lightNormalVS );", "vec3 dir = proj - lightPositionVS;", "vec2 diagonal = vec2( dot( dir, lightRightVS ), dot( dir, lightUpVS ) );", "vec2 nearest2D = vec2( clamp( diagonal.x, -w, w ), clamp( diagonal.y, -h, h ) );", "vec3 nearestPointInside = lightPositionVS + ( lightRightVS * nearest2D.x + lightUpVS * nearest2D.y );", "vec3 lightDir = normalize( nearestPointInside - vertexPositionVS.xyz );", "float NdotL = max( dot( lightNormalVS, -lightDir ), 0.0 );", "float NdotL2 = max( dot( normal, lightDir ), 0.0 );", "float dotLN = sqrt( NdotL * NdotL2 );", "vec3 diffuse = vec3( dotLN );", "if ( wrapAround < 0.0 && NdotL > 0.0 ) {", "float dotLNHalf = max( 0.25 * dotLN + 0.25, 0.0 );", "diffuse = mix( diffuse, vec3( dotLNHalf ), wrapRGB );", "}", "#ifdef AREA_TEXTURE", "float d = distance( vertexPositionVS.xyz, nearestPointInside );", "vec2 co = ( diagonal.xy + vec2( w, h ) ) / ( 2.0 * vec2( w, h ) );", "co.y = 1.0 - co.y;", "vec3 ve = vertexPositionVS.xyz - lightPositionVS;", "vec4 diff = vec4( 0.0 );", "if ( dot( ve, lightNormalVS ) < 0.0 ) {", "diff = vec4( 0.0 );", "} else {", "float lod = max( pow( d, 0.1 ), 0.0 ) * 5.0;", "vec4 t00 = texture2D( samplerTexture, co, lod );", "vec4 t01 = texture2D( samplerTexture, co, lod + 1.0 );", "diff = mix( t00, t01, 0.5 );", "}", "diffuse *= diff.xyz;", "#endif", "vec3 fresnel = vec3( 0.0 );", "vec3 specular = vec3( 0.0 );", "vec3 eyeVector = normalize( -vertexPositionVS.xyz );", "vec3 R = reflect( eyeVector, normal );", "vec3 E = linePlaneIntersect( vertexPositionVS.xyz, R, lightPositionVS, lightNormalVS );", "float specAngle = dot( R, lightNormalVS );", "if ( dot( vertexPositionVS.xyz - lightPositionVS, lightNormalVS )>=0.0 && specAngle > 0.0 ) {", "vec3 dirSpec = E - lightPositionVS;", "vec2 dirSpec2D = vec2( dot( dirSpec, lightRightVS ), dot( dirSpec, lightUpVS ) );", "vec2 nearestSpec2D = vec2( clamp( dirSpec2D.x, -w, w ), clamp( dirSpec2D.y, -h, h ) );", "vec3 nearestPointInsideSpec = lightPositionVS + ( lightRightVS * nearestSpec2D.x + lightUpVS * nearestSpec2D.y );", "vec3 lightDirSpec = normalize( nearestPointInsideSpec - vertexPositionVS.xyz );", "vec3 halfVectorSpec = normalize( lightDirSpec + eyeVector );", "float dotNormalHalf = max( dot( normal, halfVectorSpec ), 0.0 );", "float dotLH = max( dot( lightDirSpec, halfVectorSpec ), 0.0 );", "float dotLN = max( dot( lightDirSpec, normal ), 0.0 );", "fresnel = specularColor + ( 1.0 - specularColor ) * pow( 1.0 - dotLH, 5.0 );", "#if defined( BRDF_BLINN_PHONG )", "specular = BlinnPhong_Specular( shininess, dotLN, dotNormalHalf, eyeVector, normal ) * ( fresnel * diffuse ) * specAngle;", "#elif defined( BRDF_GGX )", "float roughness = saturate( sqrt( 8.0 / ( shininess + 7.0 ) ) );", "specular = GGX_Specular( roughness, normal, halfVectorSpec, eyeVector, lightDirSpec ) * ( fresnel * diffuse ) * specAngle;", "#else", "specular = specularColor * max( pow( dotNormalHalf, shininess ), 0.0 ) * diffuse * specAngle;", "#endif", "#ifdef AREA_TEXTURE", "const float hard = 16.0;", "const float gloss = 16.0;", "vec3 specPlane = lightPositionVS + ( lightRightVS * dirSpec2D.x + lightUpVS * dirSpec2D.y );", "float dist = max( distance( vertexPositionVS.xyz, specPlane ), 0.0 );", "float d = ( ( 1.0 / hard ) / 2.0 ) * ( dist / gloss );", "w = max( w, 0.0 );", "h = max( h, 0.0 );", "vec2 co = dirSpec2D / ( d + 1.0 );", "co /= 2.0 * vec2( w, h );", "co = co + vec2( 0.5 );", "co.y = 1.0 - co.y;", "float lod = ( 2.0 / hard * max( dist, 0.0 ) );", "vec4 t00 = texture2D( samplerTexture, co, lod );", "vec4 t01 = texture2D( samplerTexture, co, lod + 1.0 );", "vec4 spec = mix( t00, t01, 0.5 );", "specular *= spec.xyz;", "#endif", "}", "diffuse -= diffuse * fresnel * specAngle;", "float occlusion = 1.0;", "#ifdef USE_SHADOWMAP", "vec4 posLightCS = matShadow * vertexPositionVS;", "vec2 shadowCoord = ( posLightCS.xy / posLightCS.w ) * 0.5 + 0.5;", "float vertexDepth = posLightCS.z / posLightCS.w;", "#if defined( DEPTH_TEXTURES )", "vertexDepth = vertexDepth * 0.5 + 0.5;", "#endif", "#if !defined( SLOPE_DEPTH_BIAS )", "vertexDepth -= shadowBias;", "#endif", "#if defined( SHADOWMAP_TYPE_PCF )", "float shadowValue = sampleShadowPCF( samplerShadowMap, shadowMapSize, shadowCoord, vertexDepth );", "#elif defined( SHADOWMAP_TYPE_PCF_SOFT )", "float shadowValue = sampleShadowPCFSoft( samplerShadowMap, shadowMapSize, shadowCoord, vertexDepth );", "#else", "float shadowDepth = texture2D( samplerShadowMap, shadowCoord ).x;", "float shadowValue = float( vertexDepth > shadowDepth );", "#endif", "occlusion = 1.0 - shadowDarkness * shadowValue;", "#endif", "float dist = distance( vertexPositionVS.xyz, nearestPointInside );", "float attenuation = calculateAttenuation( dist ) * occlusion;", XG.DeferredShaderChunk.combine, "}"].join("\n"),
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangle
}, XG.DeferredShaders.imageLight = {
    uniforms: XG.UniformsUtils.merge([XG.DeferredUniformsLib.gbuffers, {
        matProjInverse: {
            type: "m4",
            value: new XG.Matrix4,
            shared: !0
        },
        matViewInverse: {
            type: "m4",
            value: new XG.Matrix4,
            shared: !0
        },
        samplerSpecular: {
            type: "t",
            value: null
        },
        samplerDiffuse: {
            type: "t",
            value: null
        },
        samplerMip: {
            type: "t",
            value: null
        },
        samplerSSAO: {
            type: "t",
            value: null
        },
        maxMipSpecular: {
            type: "f",
            value: 7
        },
        lightIntensity: {
            type: "f",
            value: 1
        },
        lightPositionWS: {
            type: "v3",
            value: new XG.Vector3(0, 0, 0)
        },
        lightSize: {
            type: "v3",
            value: new XG.Vector3(1, 1, 1)
        }
    }]),
    fragmentShader: ["uniform mat4 matProjInverse;", "uniform mat4 matViewInverse;", "uniform samplerCube samplerSpecular;", "uniform samplerCube samplerDiffuse;", "#ifdef USE_SSAO", "uniform sampler2D samplerSSAO;", "#endif", "uniform float maxMipSpecular;", "uniform float lightIntensity;", "#ifdef LIGHT_LOCAL", "uniform vec3 lightPositionWS;", "uniform vec3 lightSize;", "#endif", "#if !defined( SUPPORTS_TEXTURE_LOD )", "uniform samplerCube samplerMip;", "#endif", XG.DeferredShaderChunk.gbuffersUniforms, XG.DeferredShaderChunk.unpackFloat, XG.DeferredShaderChunk.environmentBRDF, "float maxLength( vec3 v ) {", "return max( v.x, max( v.y, v.z ) );", "}", "void main() {", XG.DeferredShaderChunk.computeVertexPositionVS, "#ifdef LIGHT_LOCAL", "vec4 vertexPositionWS = matViewInverse * vertexPositionVS;", "vec3 lightVectorWS = abs( lightPositionWS.xyz - vertexPositionWS.xyz );", "if ( lightVectorWS.x > lightSize.x || lightVectorWS.y > lightSize.y || lightVectorWS.z > lightSize.z ) discard;", "float localFade = max( 1.0 - maxLength( lightVectorWS / lightSize ), 0.0 );", "#else", "float localFade = 1.0;", "#endif", XG.DeferredShaderChunk.computeNormal, XG.DeferredShaderChunk.unpackColorMap, "vec3 eyeVector = normalize( -vertexPositionVS.xyz );", "vec3 reflectVS = reflect( -eyeVector, normal );", "vec4 reflectWS = matViewInverse * vec4( reflectVS, 0.0 );", "#ifdef LIGHT_LOCAL", "vec3 BoxMin = lightPositionWS - lightSize;", "vec3 BoxMax = lightPositionWS + lightSize;", "vec3 FirstPlaneIntersect  = ( BoxMax - vertexPositionWS.xyz ) / reflectWS.xyz;", "vec3 SecondPlaneIntersect = ( BoxMin - vertexPositionWS.xyz ) / reflectWS.xyz;", "vec3 FurthestPlane = max( FirstPlaneIntersect, SecondPlaneIntersect );", "float Distance = min( min( FurthestPlane.x, FurthestPlane.y ), FurthestPlane.z );", "vec3 IntersectPositionWS = vertexPositionWS.xyz + reflectWS.xyz * Distance;", "reflectWS.xyz = IntersectPositionWS - lightPositionWS;", "#endif", "vec3 cubeCoord = reflectWS.xyz;", "float gloss = shininess / 8192.0;", "float maxMipLevel = maxMipSpecular - 2.0;", "#ifdef SUPPORTS_TEXTURE_LOD", "float mipLod = max( ( maxMipLevel * ( 1.0 - gloss ) ), 1.5 );", "vec3 cubeColorSpecular = textureCubeLodEXT( samplerSpecular, cubeCoord, mipLod ).rgb;", "#ifndef CUBE_SPECULAR_LINEAR", "cubeColorSpecular *= cubeColorSpecular;", "#endif", "#else", "const float mipUnit = 255.0 / 16.0;", "#ifdef SPECULAR_MIP_FIX", "float curvature = length( fwidth( cubeCoord ) );", "float mipLevelMinification = mipUnit * textureCube( samplerMip, cubeCoord, -curvature ).a;", "float mipLevelMagnification = mipUnit * textureCube( samplerMip, cubeCoord, maxMipSpecular - 1.0 - curvature ).a;", "#else", "const float curvature = 0.0;", "float mipLevelMinification = mipUnit * textureCube( samplerMip, cubeCoord ).a;", "float mipLevelMagnification = mipUnit * textureCube( samplerMip, cubeCoord, maxMipSpecular - 1.0 ).a;", "#endif", "float mipLevel;", "if ( mipLevelMinification == 0.0 ) {", "mipLevel = mipLevelMagnification - ( maxMipSpecular - 1.0 );", "} else {", "mipLevel = mipLevelMinification;", "}", "float mipBias = max( ( maxMipLevel * ( 1.0 - gloss ) ) - mipLevel, 0.0 );", "mipBias -= curvature;", "vec3 cubeColorSpecular = textureCube( samplerSpecular, cubeCoord, mipBias ).rgb;", "#ifndef CUBE_SPECULAR_LINEAR", "cubeColorSpecular *= cubeColorSpecular;", "#endif", "#endif", "vec4 normalWS = matViewInverse * vec4( normal, 0.0 );", "vec3 cubeColorDiffuse = textureCube( samplerDiffuse, normalWS.xyz ).rgb;", "#ifndef CUBE_DIFFUSE_LINEAR", "cubeColorDiffuse *= cubeColorDiffuse;", "#endif", "vec3 fresnelEnv = EnvironmentBRDF( gloss, dot( eyeVector, normal ), specularColor );", "vec3 diffuse = ( 1.0 - fresnelEnv ) * cubeColorDiffuse;", "vec3 specular = fresnelEnv * cubeColorSpecular;", "#ifdef USE_SSAO", "float occlusion = texture2D( samplerSSAO, texCoord ).x;", "#else", "float occlusion = 1.0;", "#endif", "gl_FragColor = vec4( lightIntensity * ( albedo * diffuse + specular ), occlusion * occlusion * lightMapIntensity * localFade );", "}"].join("\n"),
    vertexShader: ["void main() { ", "#ifdef LIGHT_LOCAL", "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "gl_Position = projectionMatrix * mvPosition;", "#else", "gl_Position = vec4( position.xyz, 1.0 );", "#endif", "}"].join("\n")
}, XG.DeferredShaders.composite = {
    uniforms: XG.UniformsUtils.merge([XG.UniformsLib.fogAtmo, {
        samplerLight: {
            type: "t",
            value: null
        },
        samplerBloom: {
            type: "t",
            value: null
        },
        samplerDepth: {
            type: "t",
            value: null
        },
        samplerParticles: {
            type: "t",
            value: null
        },
        samplerParticlesRevealage: {
            type: "t",
            value: null
        },
        samplerBlur: {
            type: "t",
            value: null
        },
        samplerBlurAmount: {
            type: "t",
            value: null
        },
        brightness: {
            type: "f",
            value: 1
        },
        whitePoint: {
            type: "f",
            value: 1
        },
        bloomStrength: {
            type: "f",
            value: 1
        },
        cameraNearFar: {
            type: "v2",
            value: new XG.Vector2(1, 1e3)
        }
    }]),
    fragmentShader: ["varying vec2 vUv;", "uniform sampler2D samplerLight;", "#ifdef BLOOM_ENABLED", "uniform sampler2D samplerBloom;", "uniform float bloomStrength;", "#endif", "#ifdef OFFSCREEN_PARTICLES", "uniform sampler2D samplerParticles;", "#ifdef PARTICLE_OIT", "uniform sampler2D samplerParticlesRevealage;", "#endif", "#endif", "#ifdef FANCY_DOF", "uniform sampler2D samplerBlur;", "uniform sampler2D samplerBlurAmount;", "#endif", "#ifdef FOG_ENABLED", "uniform sampler2D samplerDepth;", "uniform vec2 cameraNearFar;", "#endif", XG.ShaderChunk.fogAtmoFragmentPars, XG.ShaderChunk.linearDepthFragmentPars, XG.ShaderChunk.tonemappingFragmentPars, XG.ShaderChunk.ditheringFragmentPars, XG.DeferredShaderChunk.unpackFloat, "void main() {", "vec3 color = texture2D( samplerLight, vUv ).xyz;", "#ifdef FOG_ENABLED", "#if defined( RGBA_DEPTH )", "vec4 packedDepth = texture2D( samplerDepth, vUv );", "float depth = unpackDepth( packedDepth );", "#elif defined( FLOAT_DEPTH )", "float depth = texture2D( samplerDepth, vUv ).w;", "#elif defined( TEXTURE_DEPTH )", "float depth = texture2D( samplerDepth, vUv ).x * 2.0 - 1.0;", "#endif", "float linearDepth = linearizeDepth( depth, cameraNearFar );", "color = addFog( color, linearDepth );", "#endif", "#ifdef FANCY_DOF", "float bias = texture2D( samplerBlurAmount, vUv ).a;", "vec3 blur = texture2D( samplerBlur, vUv ).rgb;", "color = mix( color, blur, smoothstep( 0.0, 0.1, bias ) );", "#endif", "#ifdef OFFSCREEN_PARTICLES", "#if defined( PARTICLE_OIT )", "vec4 accum = texture2D( samplerParticles, vUv );", "float rev = texture2D( samplerParticlesRevealage, vUv ).r;", "vec4 transparent = vec4( accum.rgb / clamp( rev, 1e-4, 5e4 ), accum.a );", "color = transparent.a * color.rgb + ( 1.0 - transparent.a ) * transparent.rgb;", "#else", "vec3 particleColor = texture2D( samplerParticles, vUv ).xyz;", "color += particleColor;", "#endif", "#endif", "#ifdef TONEMAPPING", "color = applyTonemapping( color, brightness, whitePoint );", "#endif", "#ifdef DITHERING_ENABLED", "color = applyDithering( color, vUv );", "#endif", "#ifdef BLOOM_ENABLED", "vec3 bloomColor = texture2D( samplerBloom, vUv ).xyz;", "color += bloomStrength * bloomColor;", "#endif", "gl_FragColor = vec4( color, 1.0 );", "}"].join("\n"),
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV
}, XG.ConvolutionShader = {
    defines: {
        KERNEL_SIZE_FLOAT: "25.0",
        KERNEL_SIZE_INT: "25"
    },
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        uImageIncrement: {
            type: "v2",
            value: new XG.Vector2(.001953125, 0)
        },
        cKernel: {
            type: "fv1",
            value: []
        }
    },
    vertexShader: ["uniform vec2 uImageIncrement;", "varying vec2 vUv;", "void main() {", "vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;", "gl_Position = vec4( position.xyz, 1.0 );", "}"].join("\n"),
    fragmentShader: ["uniform float cKernel[ KERNEL_SIZE_INT ];", "uniform sampler2D tDiffuse;", "uniform vec2 uImageIncrement;", "varying vec2 vUv;", "void main() {", "vec2 imageCoord = vUv;", "vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );", "for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {", "sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];", "imageCoord += uImageIncrement;", "}", "gl_FragColor = sum;", "}"].join("\n"),
    buildKernel: function(e) {
        function t(e, t) {
            return Math.exp(-(e * e) / (2 * t * t))
        }
        var r, a, i, o, n = 25,
            s = 2 * Math.ceil(3 * e) + 1;
        for (s > n && (s = n), o = .5 * (s - 1), a = new Array(s), i = 0, r = 0; s > r; ++r) a[r] = t(r - o, e), i += a[r];
        for (r = 0; s > r; ++r) a[r] /= i;
        return a
    }
}, XG.CopyShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        opacity: {
            type: "f",
            value: 1
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")
}, XG.FXAAShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        resolution: {
            type: "v2",
            value: new XG.Vector2(1 / 1024, 1 / 512)
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["uniform sampler2D tDiffuse;", "uniform vec2 resolution;", "varying vec2 vUv;", "#define FXAA_REDUCE_MIN   (1.0/128.0)", "#define FXAA_REDUCE_MUL   (1.0/8.0)", "#define FXAA_SPAN_MAX     8.0", "void main() {", "vec3 rgbNW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ).xyz;", "vec3 rgbNE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ).xyz;", "vec3 rgbSW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ).xyz;", "vec3 rgbSE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ).xyz;", "vec4 rgbaM  = texture2D( tDiffuse,  gl_FragCoord.xy  * resolution );", "vec3 rgbM  = rgbaM.xyz;", "float opacity  = rgbaM.w;", "vec3 luma = vec3( 0.299, 0.587, 0.114 );", "float lumaNW = dot( rgbNW, luma );", "float lumaNE = dot( rgbNE, luma );", "float lumaSW = dot( rgbSW, luma );", "float lumaSE = dot( rgbSE, luma );", "float lumaM  = dot( rgbM,  luma );", "float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );", "float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );", "vec2 dir;", "dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));", "dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));", "float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );", "float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );", "dir = min( vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),", "max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),", "dir * rcpDirMin)) * resolution;", "vec3 rgbA = 0.5 * (", "texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ).xyz +", "texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ).xyz );", "vec3 rgbB = rgbA * 0.5 + 0.25 * (", "texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * -0.5 ).xyz +", "texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * 0.5 ).xyz );", "float lumaB = dot( rgbB, luma );", "if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) ) {", "gl_FragColor = vec4( rgbA, opacity );", "} else {", "gl_FragColor = vec4( rgbB, opacity );", "}", "}"].join("\n")
}, XG.SSAOShader = {
    uniforms: {
        tDepth: {
            type: "t",
            value: null
        },
        size: {
            type: "v2",
            value: new XG.Vector2(512, 512)
        },
        cameraCoef: {
            type: "v3",
            value: new XG.Vector3(101, 99, 2)
        },
        onlyAO: {
            type: "i",
            value: 0
        },
        aoClamp: {
            type: "f",
            value: .3
        },
        samplePoints: {
            type: "fv2",
            value: XG.Math.generatePoissonDiscSamples(9)
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["#define PREBAKED_SAMPLES", "#define NUM_PREBAKED_SAMPLES 9", "uniform vec3 cameraCoef;", "uniform vec2 size;", "uniform float aoClamp;", "uniform sampler2D tDepth;", "uniform vec2 samplePoints[ NUM_PREBAKED_SAMPLES ];", "varying vec2 vUv;", "#define DL 2.399963229728653", "#define EULER 2.718281828459045", "#define WIDTH size.x", "#define HEIGHT size.y", "#define CAMERA_FAR_PLUS_NEAR cameraCoef.x", "#define CAMERA_FAR_MINUS_NEAR cameraCoef.y", "#define CAMERA_NEAR2 cameraCoef.z", "#ifndef SAMPLES", "#define SAMPLES 8", "#endif", "#ifndef RADIUS", "#define RADIUS 15.0", "#endif", "const int samples = SAMPLES;", "const float radius = RADIUS;", "#define USE_NOISE 1", "const float noiseAmount = 0.0002;", "const float diffAreaSq = 0.16;", "const float gDisplace = 0.4;", "#ifdef RGBA_DEPTH", "float unpackDepth( vec4 rgba ) {", "return clamp( dot( rgba, vec4( 1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0 ) ), 0.0, 1.0 );", "}", "#endif", "vec2 rand( const in vec2 coord ) {", "#ifdef USE_NOISE", "float nx = dot ( coord, vec2( 12.9898, 78.233 ) );", "float ny = dot ( coord, vec2( 25.9796, 156.466 ) );", "vec2 noise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );", "#else", "float ff = fract( 1.0 - coord.s * ( WIDTH / 2.0 ) );", "float gg = fract( coord.t * ( HEIGHT / 2.0 ) );", "vec2 noise = vec2( 0.25, 0.75 ) * vec2( ff ) + vec2( 0.75, 0.25 ) * gg;", "#endif", "return ( noise * 2.0  - 1.0 ) * noiseAmount;", "}", "float readDepth( const in vec2 coord ) {", "#if defined( RGBA_DEPTH )", "vec4 packedDepth = texture2D( tDepth, coord );", "float depth = unpackDepth( packedDepth );", "#elif defined( FLOAT_DEPTH )", "float depth = texture2D( tDepth, coord ).w;", "#elif defined( TEXTURE_DEPTH )", "float depth = texture2D( tDepth, coord ).x * 2.0 - 1.0;", "#endif", "return CAMERA_NEAR2 / ( CAMERA_FAR_PLUS_NEAR - depth * CAMERA_FAR_MINUS_NEAR );", "}", "float compareDepths( const in float depth1, const in float depth2, inout int far ) {", "float gareaSq = 4.0;", "float diff = ( depth1 - depth2 ) * 100.0;", "if ( diff < gDisplace ) {", "gareaSq = diffAreaSq;", "} else {", "far = 1;", "}", "float dd = diff - gDisplace;", "return pow( EULER, -2.0 * dd * dd / gareaSq );", "}", "float calcAO( const in float depth, const in float dw, const in float dh ) {", "float dd = radius - depth * radius;", "vec2 vv = vec2( dw, dh );", "vec2 coord1 = vUv + dd * vv;", "vec2 coord2 = vUv - dd * vv;", "float temp1 = 0.0;", "float temp2 = 0.0;", "int far = 0;", "temp1 = compareDepths( depth, readDepth( coord1 ), far );", "if ( far > 0 ) {", "temp2 = compareDepths( readDepth( coord2 ), depth, far );", "temp1 += ( 1.0 - temp1 ) * temp2;", "}", "return temp1;", "}", "void main() {", "vec2 noise = rand( vUv );", "float depth = readDepth( vUv );", "float tt = clamp( depth, aoClamp, 1.0 );", "float w = ( 1.0 / WIDTH )  / tt + ( noise.x * ( 1.0 - noise.x ) );", "float h = ( 1.0 / HEIGHT ) / tt + ( noise.y * ( 1.0 - noise.y ) );", "float pw = 0.0;", "float ph = 0.0;", "float ao = 0.0;", "#if defined( PREBAKED_SAMPLES )", "for ( int i = 0; i < NUM_PREBAKED_SAMPLES; i ++ ) {", "vec2 sample = samplePoints[ i ];", "ao += calcAO( depth, sample.x * w, sample.y * h );", "}", "ao /= float( NUM_PREBAKED_SAMPLES );", "#else", "float dz = 1.0 / float( samples );", "float z = 1.0 - dz / 2.0;", "float l = 0.0;", "for ( int i = 0; i <= samples; i ++ ) {", "float r = sqrt( 1.0 - z );", "pw = cos( l ) * r;", "ph = sin( l ) * r;", "ao += calcAO( depth, pw * w, ph * h );", "z = z - dz;", "l = l + DL;", "}", "ao /= float( samples );", "#endif", "gl_FragColor = vec4( vec3( 1.0 - ao ), 1.0 );", "}"].join("\n")
}, XG.SSAOHorizontalBlurShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        h: {
            type: "f",
            value: 1 / 512
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float h;", "varying vec2 vUv;", "void main() {", "vec4 sum = vec4( 0.0 );", "vec4 h1 = texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) );", "vec4 h2 = texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) );", "vec4 h0 = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );", "vec4 m = ( h1 - h2 ) * 0.5;", "float d = abs( h0.x - m.x );", "if ( d > 0.15 ) {", "sum = min( h1, h2 );", "} else {", "sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;", "sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;", "sum += h1 * 0.1531;", "sum += h0 * 0.1633;", "sum += h2 * 0.1531;", "sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;", "sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;", "}", "gl_FragColor = sum;", "}"].join("\n")
}, XG.SSAOVerticalBlurShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        v: {
            type: "f",
            value: 1 / 512
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float v;", "varying vec2 vUv;", "void main() {", "vec4 sum = vec4( 0.0 );", "vec4 v1 = texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) );", "vec4 v2 = texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) );", "vec4 v0 = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );", "vec4 m = ( v1 - v2 ) * 0.5;", "float d = abs( v0.x - m.x );", "if ( d > 0.15 ) {", "sum = min( v1, v2 );", "} else {", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;", "sum += v1 * 0.1531;", "sum += v0 * 0.1633;", "sum += v2 * 0.1531;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;", "}", "gl_FragColor = sum;", "}"].join("\n")
}, XG.SSAOBilateralHorizontalBlurShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        tDepth: {
            type: "t",
            value: null
        },
        tNormal: {
            type: "t",
            value: null
        },
        h: {
            type: "f",
            value: 1 / 512
        },
        cameraCoef: {
            type: "v3",
            value: new XG.Vector3(101, 99, 2)
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["uniform vec3 cameraCoef;", "#define CAMERA_FAR_PLUS_NEAR cameraCoef.x", "#define CAMERA_FAR_MINUS_NEAR cameraCoef.y", "#define CAMERA_NEAR2 cameraCoef.z", "float linearizeDepth( float d ) {", "return CAMERA_NEAR2 / ( CAMERA_FAR_PLUS_NEAR - d * CAMERA_FAR_MINUS_NEAR );", "}", "float computeWeight( vec4 a, vec4 b ) {", "vec3 na = a.xyz * 2.0 - 1.0;", "vec3 nb = b.xyz * 2.0 - 1.0;", "float dotab = max( dot( na, nb ), 0.0 );", "float wn = pow( dotab, 32.0 );", "float za = linearizeDepth( a.w );", "float zb = linearizeDepth( b.w );", "float zz = 10.0 * abs( za - zb );", "float wz = 1.0 / ( 1.0 + zz );", "return wn * wz;", "}", "uniform sampler2D tDiffuse;", "uniform sampler2D tDepth;", "uniform float h;", "#if defined( RGBA_DEPTH )", "float unpackDepth( vec4 rgba ) {", "return clamp( dot( rgba, vec4( 1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0 ) ), 0.0, 1.0 );", "}", "uniform sampler2D tNormal;", "#elif defined( TEXTURE_DEPTH )", "uniform sampler2D tNormal;", "#endif", "varying vec2 vUv;", "void main() {", "vec4 sum = vec4( 0.0 );", "vec2 c1 = vec2( vUv.x - 1.0 * h, vUv.y );", "vec2 c2 = vec2( vUv.x + 1.0 * h, vUv.y );", "vec2 c3 = vec2( vUv.x - 2.0 * h, vUv.y );", "vec2 c4 = vec2( vUv.x + 2.0 * h, vUv.y );", "#if defined( RGBA_DEPTH )", "vec4 normalDepth0 = texture2D( tNormal, vUv );", "vec4 normalDepth1 = texture2D( tNormal, c1 );", "vec4 normalDepth2 = texture2D( tNormal, c2 );", "vec4 normalDepth3 = texture2D( tNormal, c3 );", "vec4 normalDepth4 = texture2D( tNormal, c4 );", "normalDepth0.w = unpackDepth( texture2D( tDepth, vUv ) );", "normalDepth1.w = unpackDepth( texture2D( tDepth, c1 ) );", "normalDepth2.w = unpackDepth( texture2D( tDepth, c2 ) );", "normalDepth3.w = unpackDepth( texture2D( tDepth, c3 ) );", "normalDepth4.w = unpackDepth( texture2D( tDepth, c4 ) );", "#elif defined( FLOAT_DEPTH )", "vec4 normalDepth0 = texture2D( tDepth, vUv );", "vec4 normalDepth1 = texture2D( tDepth, c1 );", "vec4 normalDepth2 = texture2D( tDepth, c2 );", "vec4 normalDepth3 = texture2D( tDepth, c3 );", "vec4 normalDepth4 = texture2D( tDepth, c4 );", "#elif defined( TEXTURE_DEPTH )", "vec4 normalDepth0 = texture2D( tNormal, vUv );", "vec4 normalDepth1 = texture2D( tNormal, c1 );", "vec4 normalDepth2 = texture2D( tNormal, c2 );", "vec4 normalDepth3 = texture2D( tNormal, c3 );", "vec4 normalDepth4 = texture2D( tNormal, c4 );", "normalDepth0.w = texture2D( tDepth, vUv ).x * 2.0 - 1.0;", "normalDepth1.w = texture2D( tDepth, c1 ).x * 2.0 - 1.0;", "normalDepth2.w = texture2D( tDepth, c2 ).x * 2.0 - 1.0;", "normalDepth3.w = texture2D( tDepth, c3 ).x * 2.0 - 1.0;", "normalDepth4.w = texture2D( tDepth, c4 ).x * 2.0 - 1.0;", "#endif", "float w0 = 0.1633;", "float w1 = computeWeight( normalDepth0, normalDepth1 ) * 0.1531;", "float w2 = computeWeight( normalDepth0, normalDepth2 ) * 0.1531;", "float w3 = computeWeight( normalDepth0, normalDepth3 ) * 0.12245;", "float w4 = computeWeight( normalDepth0, normalDepth4 ) * 0.12245;", "float ws = w0 + w1 + w2 + w3 + w4;", "vec4 h0 = texture2D( tDiffuse, vUv );", "vec4 h1 = texture2D( tDiffuse, c1 );", "vec4 h2 = texture2D( tDiffuse, c2 );", "vec4 h3 = texture2D( tDiffuse, c3 );", "vec4 h4 = texture2D( tDiffuse, c4 );", "sum += h3 * w3;", "sum += h1 * w1;", "sum += h0 * w0;", "sum += h2 * w2;", "sum += h4 * w4;", "sum /= ws;", "gl_FragColor = sum;", "}"].join("\n")
}, XG.SSAOBilateralVerticalBlurShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        tDepth: {
            type: "t",
            value: null
        },
        tNormal: {
            type: "t",
            value: null
        },
        v: {
            type: "f",
            value: 1 / 512
        },
        cameraCoef: {
            type: "v3",
            value: new XG.Vector3(101, 99, 2)
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["uniform vec3 cameraCoef;", "#define CAMERA_FAR_PLUS_NEAR cameraCoef.x", "#define CAMERA_FAR_MINUS_NEAR cameraCoef.y", "#define CAMERA_NEAR2 cameraCoef.z", "float linearizeDepth( float d ) {", "return CAMERA_NEAR2 / ( CAMERA_FAR_PLUS_NEAR - d * CAMERA_FAR_MINUS_NEAR );", "}", "float computeWeight( vec4 a, vec4 b ) {", "vec3 na = a.xyz * 2.0 - 1.0;", "vec3 nb = b.xyz * 2.0 - 1.0;", "float dotab = max( dot( na, nb ), 0.0 );", "float wn = pow( dotab, 32.0 );", "float za = linearizeDepth( a.w );", "float zb = linearizeDepth( b.w );", "float zz = 10.0 * abs( za - zb );", "float wz = 1.0 / ( 1.0 + zz );", "return wn * wz;", "}", "uniform sampler2D tDiffuse;", "uniform sampler2D tDepth;", "uniform float v;", "#if defined( RGBA_DEPTH )", "float unpackDepth( vec4 rgba ) {", "return clamp( dot( rgba, vec4( 1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0 ) ), 0.0, 1.0 );", "}", "uniform sampler2D tNormal;", "#elif defined( TEXTURE_DEPTH )", "uniform sampler2D tNormal;", "#endif", "varying vec2 vUv;", "void main() {", "vec4 sum = vec4( 0.0 );", "vec2 c1 = vec2( vUv.x, vUv.y - 1.0 * v );", "vec2 c2 = vec2( vUv.x, vUv.y + 1.0 * v );", "#if defined( RGBA_DEPTH )", "vec4 normalDepth0 = texture2D( tNormal, vUv );", "vec4 normalDepth1 = texture2D( tNormal, c1 );", "vec4 normalDepth2 = texture2D( tNormal, c2 );", "normalDepth0.w = unpackDepth( texture2D( tDepth, vUv ) );", "normalDepth1.w = unpackDepth( texture2D( tDepth, c1 ) );", "normalDepth2.w = unpackDepth( texture2D( tDepth, c2 ) );", "#elif defined( FLOAT_DEPTH )", "vec4 normalDepth0 = texture2D( tDepth, vUv );", "vec4 normalDepth1 = texture2D( tDepth, c1 );", "vec4 normalDepth2 = texture2D( tDepth, c2 );", "#elif defined( TEXTURE_DEPTH )", "vec4 normalDepth0 = texture2D( tNormal, vUv );", "vec4 normalDepth1 = texture2D( tNormal, c1 );", "vec4 normalDepth2 = texture2D( tNormal, c2 );", "normalDepth0.w = texture2D( tDepth, vUv ).x * 2.0 - 1.0;", "normalDepth1.w = texture2D( tDepth, c1 ).x * 2.0 - 1.0;", "normalDepth2.w = texture2D( tDepth, c2 ).x * 2.0 - 1.0;", "#endif", "float w0 = 0.1633;", "float w1 = computeWeight( normalDepth0, normalDepth1 ) * 0.1531;", "float w2 = computeWeight( normalDepth0, normalDepth2 ) * 0.1531;", "float ws = w0 + w1 + w2;", "vec4 h0 = texture2D( tDiffuse, vUv );", "vec4 h1 = texture2D( tDiffuse, c1 );", "vec4 h2 = texture2D( tDiffuse, c2 );", "sum += h1 * w1;", "sum += h0 * w0;", "sum += h2 * w2;", "sum /= ws;", "gl_FragColor = sum;", "}"].join("\n")
}, XG.BloomHorizontalBlurShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        h: {
            type: "f",
            value: 1 / 512
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float h;", "varying vec2 vUv;", "void main() {", "vec3 sum = vec3( 0.0 );", "sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ).xyz * 0.051;", "sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ).xyz * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ).xyz * 0.12245;", "sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ).xyz * 0.1531;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ).xyz * 0.1633;", "sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ).xyz * 0.1531;", "sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ).xyz * 0.12245;", "sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ).xyz * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ).xyz * 0.051;", "gl_FragColor.xyz = sum;", "gl_FragColor.w = 1.0;", "}"].join("\n")
}, XG.BloomVerticalBlurShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        v: {
            type: "f",
            value: 1 / 512
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float v;", "varying vec2 vUv;", "void main() {", "vec3 sum = vec3( 0.0 );", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ).xyz * 0.051;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ).xyz * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ).xyz * 0.12245;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ).xyz * 0.1531;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ).xyz * 0.1633;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ).xyz * 0.1531;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ).xyz * 0.12245;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ).xyz * 0.0918;", "sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ).xyz * 0.051;", "gl_FragColor.xyz = sum;", "gl_FragColor.w = 1.0;", "}"].join("\n")
}, XG.BloomFilterShader = {
    uniforms: {
        tSource: {
            type: "t",
            value: null
        },
        threshold: {
            type: "f",
            value: 1
        },
        brightness: {
            type: "f",
            value: 1
        },
        whitePoint: {
            type: "f",
            value: 1
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["uniform sampler2D tSource;", "uniform float threshold;", XG.ShaderChunk.tonemappingFragmentPars, "varying vec2 vUv;", "void main() {", "vec3 color = texture2D( tSource, vUv ).rgb;", "const vec3 luma = vec3( 0.299, 0.587, 0.114 );", "float v = dot( color, luma );", "vec3 outColor = vec3( 0.0 );", "if ( v > threshold ) {", "outColor = applyTonemapping( color, brightness, whitePoint );", "}", "gl_FragColor = vec4( outColor, 1.0 );", "}"].join("\n")
}, XG.IBLDiffuseConvolutionShader = {
    uniforms: {
        tCube: {
            type: "t",
            value: null
        }
    },
    vertexShader: ["varying vec3 vWorldNormal;", "void main() {", "vec4 worldNormal = modelMatrix * vec4( normal, 0.0 );", "vWorldNormal = worldNormal.xyz;", "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "gl_Position = projectionMatrix * mvPosition;", "}"].join("\n"),
    fragmentShader: ["uniform samplerCube tCube;", "varying vec3 vWorldNormal;", "const int zSamples = 30;", "const int tSamples = 2 * zSamples;", "const float zFract = 1.0 / float( zSamples );", "const float tFract = 3.14159265 * zFract;", "const float normFract = 4.0 * 3.14159265 / float( ( tSamples + 1 ) * ( tSamples ) );", "void main() {", "vec3 surfaceNormal = normalize( vWorldNormal );", "vec3 total = vec3( 0.0 );", "for ( int z = -zSamples; z <= zSamples; z ++ ) {", "for ( int t = 0; t < tSamples; t ++ ) {", "float fz = float( z ) * zFract;", "float ft = float( t ) * tFract;", "float r = sqrt( 1.0 - fz * fz );", "float x = r * cos( ft );", "float y = r * sin( ft );", "vec3 sampleNormal = vec3( x, y, fz );", "float dotProduct = max( dot( surfaceNormal, sampleNormal ), 0.0 );", "vec4 pixel = textureCube( tCube, sampleNormal );", "total += pixel.xyz * dotProduct;", "}", "}", "gl_FragColor.xyz = total * normFract;", "gl_FragColor.a = 1.0;", "}"].join("\n")
}, XG.IBLDiffuseProbeShader = {
    uniforms: {
        tCube: {
            type: "t",
            value: null
        }
    },
    vertexShader: ["varying vec3 vWorldNormal;", "void main() {", "vec4 worldNormal = modelMatrix * vec4( normal, 0.0 );", "vWorldNormal = worldNormal.xyz;", "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "gl_Position = projectionMatrix * mvPosition;", "}"].join("\n"),
    fragmentShader: ["uniform samplerCube tCube;", "varying vec3 vWorldNormal;", "void main() {", "vec3 surfaceNormal = normalize( vWorldNormal );", "gl_FragColor = textureCube( tCube, surfaceNormal );", "gl_FragColor.xyz *= gl_FragColor.xyz;", "gl_FragColor.a = 1.0;", "}"].join("\n")
}, XG.DOFBlurPass1Shader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        tBlurAmount: {
            type: "t",
            value: null
        },
        resolution: {
            type: "v2",
            value: new XG.Vector2(1024, 512)
        },
        samplePoints1: {
            type: "fv2",
            value: XG.Math.generateConcentricCircleSamples(7, 6)
        },
        samplePoints2: {
            type: "fv2",
            value: XG.Math.generateConcentricCircleSamples(3, 6)
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["#define PREBAKED_SAMPLES", "#define NUM_PREBAKED_SAMPLES1 49", "#define NUM_PREBAKED_SAMPLES2 9", "#define DL 2.399963229728653", "#define PI 3.141592653589793", "#define PI4 0.7853981633974483", "uniform sampler2D tDiffuse;", "uniform sampler2D tBlurAmount;", "uniform vec2 resolution;", "uniform vec2 samplePoints1[ NUM_PREBAKED_SAMPLES1 ];", "uniform vec2 samplePoints2[ NUM_PREBAKED_SAMPLES2 ];", "varying vec2 vUv;", "#if defined( RGBA_DEPTH )", "float unpackDepth( vec4 rgba ) {", "return clamp( dot( rgba, vec4( 1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0 ) ), 0.0, 1.0 );", "}", "#endif", "#ifdef CONCENTRIC_CIRCLE_SAMPLE", "vec2 mapSquareToDisk( float a, float b ) {", "float r;", "float fi;", "if ( a > -b ) {", "if ( a > b ) {", "r = a;", "fi = PI4 * ( b/a );", "} else {", "r = b;", "fi = PI4 * ( 2.0 - a/b );", "}", "} else {", "if ( a < b ) {", "r = -a;", "fi = PI4 * ( 4.0 + b/a );", "} else {", "r = -b;", "if ( b != 0.0 ) {", "fi = PI4 * ( 6.0 - a/b );", "} else {", "fi = 0.0;", "}", "}", "}", "float u = r * cos( fi );", "float v = r * sin( fi );", "return vec2( u, v );", "}", "#endif", "void main() {", "float centerBias = texture2D( tBlurAmount, vUv ).a;", "vec4 mixed = vec4( 0.0 );", "vec2 pixelRatio = centerBias * 16.0 / resolution;", "#if defined( PREBAKED_SAMPLES )", "for ( int i = 0; i < NUM_PREBAKED_SAMPLES1; i ++ ) {", "vec4 sampleColor = texture2D( tBlurAmount, vUv + samplePoints1[ i ] * pixelRatio );", "mixed += sampleColor;", "}", "#elif defined( CONCENTRIC_CIRCLE_SAMPLES )", "const int samples = 3;", "for ( int i = -samples; i <= samples; i ++ ) {", "for ( int j = -samples; j <= samples; j ++ ) {", "float a = float( j ) / 3.0;", "float b = float( i ) / 3.0;", "vec2 offset = mapSquareToDisk( a, b );", "vec4 sampleColor = texture2D( tBlurAmount, vUv + ( offset * pixelRatio ) );", "mixed += sampleColor;", "}", "}", "#else", "const int samples = 16;", "float dz = 1.0 / float( samples );", "float z = 1.0 - dz / 2.0;", "float l = 0.0;", "for ( int i = 0; i <= samples; i ++ ) {", "float r = sqrt( 1.0 - z );", "float dx = cos( l );", "float dy = sin( l );", "vec4 sampleColor = texture2D( tBlurAmount, vUv + ( vec2( dx, dy ) * pixelRatio ) * r );", "mixed += sampleColor;", "z = z - dz;", "l = l + DL;", "}", "#endif", "mixed.rgb /= mixed.a;", "mixed.a /= float( NUM_PREBAKED_SAMPLES1 );", "mixed.rgb *= mixed.a;", "if ( mixed.a == 0.0 ) mixed.rgb = texture2D( tDiffuse, vUv ).rgb;", "gl_FragColor = vec4( mixed.rgb, mixed.a );", "}"].join("\n")
}, XG.DOFBlurPass2Shader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        tBlurAmount: {
            type: "t",
            value: null
        },
        resolution: {
            type: "v2",
            value: new XG.Vector2(1024, 512)
        },
        samplePoints: {
            type: "fv2",
            value: XG.Math.generateConcentricCircleSamples(3, 6)
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["#define PREBAKED_SAMPLES", "#define NUM_PREBAKED_SAMPLES 9", "#define DL 2.399963229728653", "#define PI 3.141592653589793", "#define PI4 0.7853981633974483", "uniform sampler2D tDiffuse;", "uniform sampler2D tBlurAmount;", "uniform vec2 resolution;", "uniform vec2 samplePoints[ NUM_PREBAKED_SAMPLES ];", "varying vec2 vUv;", "#if defined( RGBA_DEPTH )", "float unpackDepth( vec4 rgba ) {", "return clamp( dot( rgba, vec4( 1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0 ) ), 0.0, 1.0 );", "}", "#endif", "#ifdef CONCENTRIC_CIRCLE_SAMPLE", "vec2 mapSquareToDisk( float a, float b ) {", "float r;", "float fi;", "if ( a > -b ) {", "if ( a > b ) {", "r = a;", "fi = PI4 * ( b/a );", "} else {", "r = b;", "fi = PI4 * ( 2.0 - a/b );", "}", "} else {", "if ( a < b ) {", "r = -a;", "fi = PI4 * ( 4.0 + b/a );", "} else {", "r = -b;", "if ( b != 0.0 ) {", "fi = PI4 * ( 6.0 - a/b );", "} else {", "fi = 0.0;", "}", "}", "}", "float u = r * cos( fi );", "float v = r * sin( fi );", "return vec2( u, v );", "}", "#endif", "void main() {", "float centerBias = texture2D( tDiffuse, vUv ).a;", "vec4 mixed = vec4( 0.0 );", "vec2 pixelRatio = centerBias * 3.0 / resolution;", "#if defined( PREBAKED_SAMPLES )", "for ( int i = 0; i < NUM_PREBAKED_SAMPLES; i ++ ) {", "vec4 sampleColor = texture2D( tDiffuse, vUv + samplePoints[ i ] * pixelRatio );", "mixed += sampleColor;", "}", "#elif defined( CONCENTRIC_CIRCLE_SAMPLES )", "const int samples = 3;", "for ( int i = -samples; i <= samples; i ++ ) {", "for ( int j = -samples; j <= samples; j ++ ) {", "float a = float( j ) / 3.0;", "float b = float( i ) / 3.0;", "vec2 offset = mapSquareToDisk( a, b );", "vec4 sampleColor = texture2D( tBlurAmount, vUv + ( offset * pixelRatio ) );", "mixed += sampleColor;", "}", "}", "#else", "const int samples = 16;", "float dz = 1.0 / float( samples );", "float z = 1.0 - dz / 2.0;", "float l = 0.0;", "for ( int i = 0; i <= samples; i ++ ) {", "float r = sqrt( 1.0 - z );", "float dx = cos( l );", "float dy = sin( l );", "vec4 sampleColor = texture2D( tBlurAmount, vUv + ( vec2( dx, dy ) * pixelRatio ) * r );", "mixed += sampleColor;", "z = z - dz;", "l = l + DL;", "}", "#endif", "mixed.rgb /= mixed.a;", "if ( mixed.a == 0.0 ) mixed.rgb = texture2D( tDiffuse, vUv ).rgb;", "gl_FragColor = vec4( mixed.rgb, 1.0 );", "}"].join("\n")
}, XG.DOFShaderChunk = {
    computeBlurPars: ["#ifdef DOF_PHYSICAL", "uniform float lensAperture;", "uniform float lensFocalLength;", "uniform float lensBlurScale;", "uniform float lensMaxCoc;", "float computeBlurStrength( float pointDepth, float focalDepth ) {", "float coc = abs( lensAperture * ( ( lensFocalLength * ( focalDepth - pointDepth ) ) / ( pointDepth * ( focalDepth - lensFocalLength ) ) ) );", "return min( coc, lensMaxCoc );", "}", "#else", "uniform float focusRampStart;", "uniform float focusRampEnd;", "uniform float maxBlur;", "const float maxBias = 8.0;", "float computeBlurBias( float pointDepth, float focalDepth ) {", "float blurFactor = abs( focalDepth - pointDepth );", "blurFactor *= smoothstep( focusRampStart, focusRampEnd, blurFactor );", "float blurBias = maxBlur * blurFactor;", "blurBias = min( blurBias, maxBias );", "return blurBias;", "}", "#endif"].join("\n")
}, XG.DOFBlurAmountShader = {
    defines: {
        DOF_PHYSICAL: !0
    },
    uniforms: XG.UniformsUtils.merge([XG.UniformsLib.fogAtmo, {
        tDepth: {
            type: "t",
            value: null
        },
        tDistance: {
            type: "t",
            value: null
        },
        tDiffuse: {
            type: "t",
            value: null
        },
        resolution: {
            type: "v2",
            value: new XG.Vector2(1920, 1080)
        },
        autoFocus: {
            type: "i",
            value: 1
        },
        autoFocusPoint: {
            type: "v2",
            value: new XG.Vector2(.5, .5)
        },
        focusDistance: {
            type: "f",
            value: 5
        },
        focusRampStart: {
            type: "f",
            value: 2
        },
        focusRampEnd: {
            type: "f",
            value: 8
        },
        maxBlur: {
            type: "f",
            value: 1
        },
        lensFocalLength: {
            type: "f",
            value: 50
        },
        lensAperture: {
            type: "f",
            value: 12.5
        },
        lensBlurScale: {
            type: "f",
            value: 50
        },
        lensMaxCoc: {
            type: "f",
            value: 1
        },
        cameraNearFar: {
            type: "v2",
            value: new XG.Vector2(1, 1e3)
        }
    }]),
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: [XG.DOFShaderChunk.computeBlurPars, "uniform bool autoFocus;", "uniform vec2 autoFocusPoint;", "uniform float focusDistance;", "uniform vec2 cameraNearFar;", "uniform sampler2D tDepth;", "uniform sampler2D tDistance;", "uniform sampler2D tDiffuse;", "uniform vec2 resolution;", "varying vec2 vUv;", "#if defined( RGBA_DEPTH )", "float unpackDepth( vec4 rgba ) {", "return clamp( dot( rgba, vec4( 1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0 ) ), 0.0, 1.0 );", "}", "float texture2D_bicubic_packed( sampler2D texSampler, vec2 uv, vec2 textureDimensions ) {", "vec2 invTextureDimensions = 1.0 / textureDimensions;", "uv *= textureDimensions;", "vec2 texelCenter   = floor( uv - 0.5 ) + 0.5;", "vec2 fracOffset    = uv - texelCenter;", "vec2 fracOffset_x2 = fracOffset * fracOffset;", "vec2 fracOffset_x3 = fracOffset * fracOffset_x2;", "vec2 weight0 = fracOffset_x2 - 0.5 * ( fracOffset_x3 + fracOffset );", "vec2 weight1 = 1.5 * fracOffset_x3 - 2.5 * fracOffset_x2 + 1.0;", "vec2 weight3 = 0.5 * ( fracOffset_x3 - fracOffset_x2 );", "vec2 weight2 = 1.0 - weight0 - weight1 - weight3;", "vec2 scalingFactor0 = weight0 + weight1;", "vec2 scalingFactor1 = weight2 + weight3;", "vec2 f0 = weight1 / ( weight0 + weight1 );", "vec2 f1 = weight3 / ( weight2 + weight3 );", "vec2 texCoord0 = texelCenter - 1.0 + f0;", "vec2 texCoord1 = texelCenter + 1.0 + f1;", "texCoord0 *= invTextureDimensions;", "texCoord1 *= invTextureDimensions;", "return unpackDepth(texture2D( texSampler, vec2( texCoord0.x, texCoord0.y ) )) * scalingFactor0.x * scalingFactor0.y +", "unpackDepth(texture2D( texSampler, vec2( texCoord1.x, texCoord0.y ) )) * scalingFactor1.x * scalingFactor0.y +", "unpackDepth(texture2D( texSampler, vec2( texCoord0.x, texCoord1.y ) )) * scalingFactor0.x * scalingFactor1.y +", "unpackDepth(texture2D( texSampler, vec2( texCoord1.x, texCoord1.y ) )) * scalingFactor1.x * scalingFactor1.y;", "}", "#endif", "vec4 texture2D_bicubic( sampler2D texSampler, vec2 uv, vec2 textureDimensions ) {", "vec2 invTextureDimensions = 1.0 / textureDimensions;", "uv *= textureDimensions;", "vec2 texelCenter   = floor( uv - 0.5 ) + 0.5;", "vec2 fracOffset    = uv - texelCenter;", "vec2 fracOffset_x2 = fracOffset * fracOffset;", "vec2 fracOffset_x3 = fracOffset * fracOffset_x2;", "vec2 weight0 = fracOffset_x2 - 0.5 * ( fracOffset_x3 + fracOffset );", "vec2 weight1 = 1.5 * fracOffset_x3 - 2.5 * fracOffset_x2 + 1.0;", "vec2 weight3 = 0.5 * ( fracOffset_x3 - fracOffset_x2 );", "vec2 weight2 = 1.0 - weight0 - weight1 - weight3;", "vec2 scalingFactor0 = weight0 + weight1;", "vec2 scalingFactor1 = weight2 + weight3;", "vec2 f0 = weight1 / ( weight0 + weight1 );", "vec2 f1 = weight3 / ( weight2 + weight3 );", "vec2 texCoord0 = texelCenter - 1.0 + f0;", "vec2 texCoord1 = texelCenter + 1.0 + f1;", "texCoord0 *= invTextureDimensions;", "texCoord1 *= invTextureDimensions;", "return texture2D( texSampler, vec2( texCoord0.x, texCoord0.y ) ) * scalingFactor0.x * scalingFactor0.y +", "texture2D( texSampler, vec2( texCoord1.x, texCoord0.y ) ) * scalingFactor1.x * scalingFactor0.y +", "texture2D( texSampler, vec2( texCoord0.x, texCoord1.y ) ) * scalingFactor0.x * scalingFactor1.y +", "texture2D( texSampler, vec2( texCoord1.x, texCoord1.y ) ) * scalingFactor1.x * scalingFactor1.y;", "}", XG.ShaderChunk.fogAtmoFragmentPars, XG.ShaderChunk.linearDepthFragmentPars, "void main() {", "#if defined( RGBA_DEPTH )", "float depth = texture2D_bicubic_packed( tDepth, vUv, resolution );", "#elif defined( FLOAT_DEPTH )", "float depth = texture2D_bicubic( tDepth, vUv, resolution ).w;", "#elif defined( TEXTURE_DEPTH )", "float depth = texture2D( tDepth, vUv ).x * 2.0 - 1.0;", "#endif", "depth = linearizeDepth( depth, cameraNearFar );", "float zFocusDistance;", "if ( autoFocus ) {", "zFocusDistance = texture2D( tDistance, autoFocusPoint ).x;", "} else {", "zFocusDistance = focusDistance;", "}", "#ifdef DOF_PHYSICAL", "float blurAmount = computeBlurStrength( lensBlurScale * depth, lensBlurScale * zFocusDistance );", "#else", "float blurAmount = computeBlurBias( depth, zFocusDistance );", "#endif", "vec3 color = texture2D_bicubic( tDiffuse, vUv, resolution ).rgb;", "#ifdef FOG_ENABLED", "color = addFog( color, depth );", "#endif", "gl_FragColor = vec4( color * blurAmount, blurAmount );", "}"].join("\n")
}, XG.DepthOfFieldShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        tDepth: {
            type: "t",
            value: null
        },
        tBlur: {
            type: "t",
            value: null
        },
        tDistance: {
            type: "t",
            value: null
        },
        focusDistance: {
            type: "f",
            value: 5
        },
        focusRampStart: {
            type: "f",
            value: 2
        },
        focusRampEnd: {
            type: "f",
            value: 8
        },
        cameraNearFar: {
            type: "v2",
            value: new XG.Vector2(1, 1e3)
        },
        maxBlur: {
            type: "f",
            value: 1
        },
        blurSize: {
            type: "v2",
            value: new XG.Vector2(1024, 512)
        },
        autoFocus: {
            type: "i",
            value: 1
        },
        autoFocusPoint: {
            type: "v2",
            value: new XG.Vector2(.5, .5)
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["uniform bool autoFocus;", "uniform vec2 autoFocusPoint;", "uniform float focusDistance;", "uniform float focusRampStart;", "uniform float focusRampEnd;", "uniform vec2 cameraNearFar;", "uniform float maxBlur;", "uniform vec2 blurSize;", "uniform sampler2D tDiffuse;", "uniform sampler2D tBlur;", "uniform sampler2D tDepth;", "uniform sampler2D tDistance;", "varying vec2 vUv;", "const float maxBias = 3.0;", XG.ShaderChunk.linearDepthFragmentPars, "#if defined( RGBA_DEPTH )", "float unpackDepth( vec4 rgba ) {", "return clamp( dot( rgba, vec4( 1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0 ) ), 0.0, 1.0 );", "}", "#endif", "void main() {", "#if defined( RGBA_DEPTH )", "vec4 packedDepth = texture2D( tDepth, vUv );", "float depth = unpackDepth( packedDepth );", "#elif defined( FLOAT_DEPTH )", "float depth = texture2D( tDepth, vUv ).w;", "#elif defined( TEXTURE_DEPTH )", "float depth = texture2D( tDepth, vUv ).x * 2.0 - 1.0;", "#endif", "depth = linearizeDepth( depth, cameraNearFar );", "float zFocusDistance;", "if ( autoFocus ) {", "zFocusDistance = texture2D( tDistance, autoFocusPoint ).x;", "} else {", "zFocusDistance = focusDistance;", "}", "float blurFactor = abs( zFocusDistance - depth );", "#ifdef DOF_DEBUG", "vec4 debugColor = vec4( 1.0 );", "if ( blurFactor < 0.1 ) {", "debugColor = vec4( 1.0, 0.0, 0.0, 1.0 );", "}", "if ( autoFocus && any( lessThan( abs( vUv - autoFocusPoint ), 0.001 * vec2( 1.0, 2.0 ) ) ) ) {", "debugColor *= vec4( 0.0, 0.0, 0.0, 1.0 );", "}", "#endif", "blurFactor *= smoothstep( focusRampStart, focusRampEnd, blurFactor );", "float bias = maxBlur * blurFactor;", "bias = min( bias, maxBias );", "float blurStep = 10.0 * maxBlur;", "float dx = blurStep / blurSize.x;", "float dy = blurStep / blurSize.y;", "vec4 blur0 = texture2D( tBlur, vUv, bias );", "vec4 blur1 = texture2D( tBlur, vUv + vec2( -dx, -dy ), bias );", "vec4 blur2 = texture2D( tBlur, vUv + vec2(  dx,  dy ), bias );", "vec4 blur3 = texture2D( tBlur, vUv + vec2( -dx,  dy ), bias  );", "vec4 blur4 = texture2D( tBlur, vUv + vec2(  dx, -dy ), bias  );", "vec4 blur = ( blur0 + blur1 + blur2 + blur3 + blur4 ) * 0.2;", "vec4 sharp = texture2D( tDiffuse, vUv );", "vec4 mixed = mix( sharp, blur, min( bias, 1.0 ) );", "gl_FragColor = mixed;", "gl_FragColor.a = 1.0;", "#ifdef DOF_DEBUG", "gl_FragColor *= debugColor;", "#endif", "}"].join("\n")
}, XG.DistanceShader = {
    uniforms: {
        tDepth: {
            type: "t",
            value: null
        },
        tDistance: {
            type: "t",
            value: null
        },
        cameraNearFar: {
            type: "v2",
            value: new XG.Vector2(1, 1e3)
        },
        persistence: {
            type: "f",
            value: .75
        },
        samplePoint: {
            type: "v2",
            value: new XG.Vector2(.5, .5)
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["uniform vec2 cameraNearFar;", "uniform float persistence;", "uniform vec2 samplePoint;", "uniform sampler2D tDepth;", "uniform sampler2D tDistance;", "varying vec2 vUv;", XG.ShaderChunk.linearDepthFragmentPars, "#if defined( RGBA_DEPTH )", "float unpackDepth( vec4 rgba ) {", "return clamp( dot( rgba, vec4( 1.0, 1.0/255.0, 1.0/65025.0, 1.0/16581375.0 ) ), 0.0, 1.0 );", "}", "#endif", "void main() {", "#if defined( RGBA_DEPTH )", "vec4 packedDepth = texture2D( tDepth, samplePoint );", "float depth = unpackDepth( packedDepth );", "#elif defined( FLOAT_DEPTH )", "float depth = texture2D( tDepth, samplePoint ).w;", "#elif defined( TEXTURE_DEPTH )", "float depth = texture2D( tDepth, samplePoint ).x * 2.0 - 1.0;", "#endif", "depth = linearizeDepth( depth, cameraNearFar );", "float oldDepth = texture2D( tDistance, samplePoint ).x;", "depth = mix( depth, oldDepth, persistence );", "gl_FragColor = vec4( depth );", "gl_FragColor.a = 1.0;", "}"].join("\n")
}, XG.ChromaticAberrationShader = {
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        amount: {
            type: "f",
            value: .005
        },
        angle: {
            type: "f",
            value: 0
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float amount;", "uniform float angle;", "varying vec2 vUv;", "void main() {", "vec2 offset = amount * ( length( vUv - 0.5 ) + 0.01 ) * vec2( cos( angle ), sin( angle ) );", "vec4 cr = texture2D( tDiffuse, vUv + offset );", "vec4 cga = texture2D( tDiffuse, vUv );", "vec4 cb = texture2D( tDiffuse, vUv - offset );", "gl_FragColor = vec4( cr.r, cga.g, cb.b, cga.a );", "}"].join("\n")
}, XG.CLUTShader = {
    defines: {
        LINEAR_FILTER: 1
    },
    uniforms: {
        tDiffuse: {
            type: "t",
            value: null
        },
        tCLUT: {
            type: "t",
            value: null
        },
        cubeSize: {
            type: "f",
            value: 64
        },
        texSize: {
            type: "f",
            value: 512
        }
    },
    vertexShader: XG.ShaderChunk.vertexShaderFullscreenTriangleUV,
    fragmentShader: ["uniform sampler2D tDiffuse;", "uniform sampler2D tCLUT;", "uniform float cubeSize;", "uniform float texSize;", "varying vec2 vUv;", "#ifdef LINEAR_FILTER", "vec4 subsample( sampler2D tex, float pixelR, float pixelG, float pixelB, float size, float nPixels ) {", "float linearPixelIndex = pixelB * size * size + pixelG * size + pixelR;", "float xPixelIndex = mod( linearPixelIndex, nPixels );", "float yPixelIndex = floor( linearPixelIndex / nPixels );", "vec4 outColor = texture2D( tex, vec2( xPixelIndex, yPixelIndex ) / nPixels );", "return outColor;", "}", "vec4 sampleAs3DTextureLinear( sampler2D tex, vec3 texCoord, float size, float nPixels ) {", "float n = size - 1.0;", "vec3 pixel = texCoord.rgb * n;", "vec3 pixelMin = floor( pixel );", "vec3 pixelMax = ceil( pixel );", "vec4 RminGminBmin = subsample( tex, pixelMin.r, pixelMin.g, pixelMin.b, size, nPixels );", "vec4 RminGminBmax = subsample( tex, pixelMin.r, pixelMin.g, pixelMax.b, size, nPixels );", "vec4 RminGmaxBmin = subsample( tex, pixelMin.r, pixelMax.g, pixelMin.b, size, nPixels );", "vec4 RminGmaxBmax = subsample( tex, pixelMin.r, pixelMax.g, pixelMax.b, size, nPixels );", "vec4 RmaxGminBmin = subsample( tex, pixelMax.r, pixelMin.g, pixelMin.b, size, nPixels );", "vec4 RmaxGminBmax = subsample( tex, pixelMax.r, pixelMin.g, pixelMax.b, size, nPixels );", "vec4 RmaxGmaxBmin = subsample( tex, pixelMax.r, pixelMax.g, pixelMin.b, size, nPixels );", "vec4 RmaxGmaxBmax = subsample( tex, pixelMax.r, pixelMax.g, pixelMax.b, size, nPixels );", "vec3 t = pixel - pixelMin;", "RminGminBmin = mix( RminGminBmin, RminGminBmax, t.b );", "RminGmaxBmin = mix( RminGmaxBmin, RminGmaxBmax, t.b );", "RmaxGminBmin = mix( RmaxGminBmin, RmaxGminBmax, t.b );", "RmaxGmaxBmin = mix( RmaxGmaxBmin, RmaxGmaxBmax, t.b );", "RminGminBmin = mix( RminGminBmin, RminGmaxBmin, t.g );", "RmaxGminBmin = mix( RmaxGminBmin, RmaxGmaxBmin, t.g );", "RminGminBmin = mix( RminGminBmin, RmaxGminBmin, t.r );", "return RminGminBmin;", "}", "#else", "vec4 sampleAs3DTextureNearest( sampler2D tex, vec3 texCoord, float size, float nPixels ) {", "float n = size - 1.0;", "vec3 pixel = floor( texCoord.rgb * n );", "float linearPixelIndex = pixel.b * size * size + pixel.g * size + pixel.r;", "float xPixelIndex = mod( linearPixelIndex, nPixels );", "float yPixelIndex = floor( linearPixelIndex / nPixels );", "vec4 outColor = texture2D( tex, vec2( xPixelIndex, yPixelIndex ) / nPixels );", "return outColor;", "}", "#endif", "void main() {", "vec4 srcColor = texture2D( tDiffuse, vUv );", "#ifdef LINEAR_FILTER", "vec4 dstColor = sampleAs3DTextureLinear( tCLUT, srcColor.rgb, cubeSize, texSize );", "#else", "vec4 dstColor = sampleAs3DTextureNearest( tCLUT, srcColor.rgb, cubeSize, texSize );", "#endif", "gl_FragColor = vec4( dstColor.rgb, srcColor.a );", "}"].join("\n")
}, XG.SpriteShader = {
    defines: {
        BILLBOARD: !1,
        SDF: !1,
        FOG: !1,
        ANTIALIAS: !1,
        ALPHATEST: .5
    },
    extensions: {
        OES_standard_derivatives: !0
    },
    uniforms: {
        map: {
            type: "t",
            value: null
        },
        alphaTest: {
            type: "f",
            value: .5
        },
        epsilon: {
            type: "f",
            value: .1
        },
        fogDensity: {
            type: "f",
            value: .015
        },
        fogColor: {
            type: "c",
            value: new XG.Color(0)
        },
        baseColor: {
            type: "c",
            value: new XG.Color(16777215)
        }
    },
    vertexShader: ["attribute vec3 color;", "attribute vec3 offset;", "attribute vec2 scale;", "varying vec2 vUv;", "varying vec3 vColor;", "void main() {", "vUv = uv;", "vColor = color;", "#ifdef BILLBOARD", "vec4 tmpPosition = modelViewMatrix * vec4( offset, 1.0 ) + vec4( position * vec3( scale, 1.0 ), 0.0 );", "gl_Position = projectionMatrix * tmpPosition;", "#else", "vec3 spritePosition = position * vec3( scale, 1.0 ) + offset;", "vec4 mvPosition = modelViewMatrix * vec4( spritePosition, 1.0 );", "gl_Position = projectionMatrix * mvPosition;", "#endif", "}"].join("\n"),
    fragmentShader: ["uniform sampler2D map;", "uniform float alphaTest;", "uniform float epsilon;", "uniform float fogDensity;", "uniform vec3 fogColor;", "uniform vec3 baseColor;", "varying vec2 vUv;", "varying vec3 vColor;", "void main() {", "vec4 texture = texture2D( map, vUv );", "#ifdef SDF", "#ifdef GL_OES_standard_derivatives", "float w = clamp( 200.0 * epsilon * ( abs( dFdx( vUv.x ) ) + abs( dFdy( vUv.y ) ) ), 0.0, 0.5 );", "#else", "float w = epsilon;", "#endif", "float alpha = smoothstep( 0.5 - w, 0.5 + w, texture.r );", "alpha = pow( alpha, 1.0/2.2 );", "if ( alpha < alphaTest ) discard;", "#ifdef ANTIALIAS", "gl_FragColor = vec4( baseColor * vColor, alpha );", "#else", "gl_FragColor = vec4( baseColor * vColor, 1.0 );", "#endif", "#else", "float alpha = texture.a;", "#ifdef ALPHATEST", "if ( alpha < alphaTest ) discard;", "#endif", "gl_FragColor = vec4( baseColor * vColor * texture.rgb, 1.0 );", "#endif", "#ifdef FOG", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "const float LOG2 = 1.442695;", "float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "#endif", "}"].join("\n")
}, XG.ForwardRenderer = function(e) {
    function t() {
        for (var e = 0, t = wr.length; t > e; e++) {
            var r = wr[e];
            !Gr[r] && yr[r] && (_t.enableVertexAttribArray(r), void 0 === Gr[r] && Mr.push(r), Gr[r] = !0)
        }
        for (var e = 0, t = Mr.length; t > e; e++) {
            var r = Mr[e];
            Gr[r] && !yr[r] && (_t.disableVertexAttribArray(r), Gr[r] = !1)
        }
    }

    function r(e) {
        yr[e] || (yr[e] = !0, wr.push(e))
    }

    function a() {
        for (var e = 0, t = wr.length; t > e; e++) {
            var r = wr[e];
            yr[r] = !1
        }
        wr.length = 0
    }

    function i(e, t) {
        return e.z !== t.z ? t.z - e.z : t.id - e.id
    }

    function o(e, t) {
        return t[0] - e[0]
    }

    function n(e, t, r) {
        if (e.length)
            for (var a = 0, i = e.length; i > a; a++) Kt = null, Jt = null, ar = -1, hr = -1, dr = -1, tr = -1, rr = -1, Qt = -1, Yt = -1, Er = !0, e[a].render(t, r, Sr, xr), Kt = null, Jt = null, ar = -1, hr = -1, dr = -1, tr = -1, rr = -1, Qt = -1, Yt = -1, Er = !0
    }

    function s(e, t, r, a, i, o, n, s) {
        var l, h, d, u;
        t ? (h = e.length - 1, d = -1, u = -1) : (h = 0, d = e.length, u = 1);
        for (var c, f = h; f !== d; f += u) l = e[f], l.render && (c = l[r], c && c.visible !== !1 && c.enabled !== !1 && (s && Wt.setBlending(c.blending, c.blendEquation, c.blendSrcColor, c.blendDstColor, c.blendSrcAlpha, c.blendDstAlpha), Wt.setDepthTest(c.depthTest), Wt.setDepthWrite(c.depthWrite), Wt.setPolygonOffset(c.polygonOffset, c.polygonOffsetFactor, c.polygonOffsetUnits), Wt.setMaterialFaces(c), Wt.setProgram(a, i, o, n, c, l.object, l.geometry), Wt.renderGeometry(c, l.geometry, l.object)))
    }

    function l(e, t, r, a, i, o, n) {
        for (var s, l, h, d = 0, u = e.length; u > d; d++) s = e[d], l = s.object, s.render && (h = s[t], h && h.visible !== !1 && h.enabled !== !1 && (n && Wt.setBlending(h.blending, h.blendEquation, h.blendSrcColor, h.blendDstColor, h.blendSrcAlpha, h.blendDstAlpha), Wt.setDepthTest(h.depthTest), Wt.setDepthWrite(h.depthWrite), Wt.setPolygonOffset(h.polygonOffset, h.polygonOffsetFactor, h.polygonOffsetUnits), Wt.setProgram(r, a, i, o, h, l, null), Wt.renderImmediateObject(r, a, i, h, l)))
    }

    function h(e) {
        var t = e.object,
            r = e.index,
            a = t.materials[r];
        a && (a.transparent ? (e.transparent = a, e.opaque = null) : (e.opaque = a, e.transparent = null))
    }

    function d(e) {
        var t = e.object,
            r = e.index,
            a = t.materials[r];
        a && (a.transparent ? (e.transparent = a, e.opaque = null) : (e.opaque = a, e.transparent = null))
    }

    function u(e, t) {
        var r;
        if (!e.__webglInit && (e.__webglInit = !0, e._modelViewMatrix = new XG.Matrix4, e._normalMatrix = new XG.Matrix3, e instanceof XG.Mesh || e instanceof XG.Particles))
            for (var a = 0, i = e.geometries.length; i > a; a++) r = e.geometries[a], Sa(r);
        if (!e.__webglActive) {
            if (e instanceof XG.Mesh || e instanceof XG.Particles)
                for (var a = 0, i = e.geometries.length; i > a; a++) r = e.geometries[a], c(t.__webglObjects, r, e, a);
            else(e instanceof XG.ImmediateRenderObject || e.immediateRenderCallback) && f(t.__webglObjectsImmediate, e);
            e.__webglActive = !0
        }
    }

    function c(e, t, r, a) {
        e.push({
            render: !1,
            index: a,
            geometry: t,
            object: r,
            opaque: null,
            transparent: null,
            z: 0,
            id: 0
        })
    }

    function f(e, t) {
        e.push({
            render: !1,
            index: 0,
            object: t,
            opaque: null,
            transparent: null,
            z: 0,
            id: 0
        })
    }

    function p(e) {
        var t = e.geometries;
        if (e instanceof XG.Mesh || e instanceof XG.Particles)
            for (var r = 0, a = t.length; a > r; r++) xa(t[r])
    }

    function m(e, t) {
        e instanceof XG.Mesh || e instanceof XG.Particles ? v(t.__webglObjects, e) : (e instanceof XG.ImmediateRenderObject || e.immediateRenderCallback) && v(t.__webglObjectsImmediate, e), e.__webglActive = !1
    }

    function v(e, t) {
        for (var r = e.length - 1; r >= 0; r--) e[r].object === t && e.splice(r, 1)
    }

    function g(e, t) {
        e.uniforms = XG.UniformsUtils.clone(t.uniforms), e.vertexShader = t.vertexShader, e.fragmentShader = t.fragmentShader
    }

    function S(e, t) {
        var r = t.color;
        if (Wt.gammaInput ? e.diffuse.value.setRGBAGamma(r, t.opacity) : e.diffuse.value.setRGBA(r, t.opacity), t instanceof XG.EmissiveMaterial || t instanceof XG.DynamicParticleMaterial) {
            var a = e.diffuse.value.data,
                i = t.intensity;
            a[0] *= i, a[1] *= i, a[2] *= i
        }
        e.map.value = t.map, e.lightMap.value = t.lightMap;
        var o;
        if (t.map ? o = t.map : t.specularMap ? o = t.specularMap : t.glossMap ? o = t.glossMap : t.normalGlossMap ? o = t.normalGlossMap : t.normalMap ? o = t.normalMap : t.bumpMap && (o = t.bumpMap), void 0 !== o) {
            var n = o.offset,
                s = o.repeat;
            e.offsetRepeat.value.set(n.data[0], n.data[1], s.data[0], s.data[1])
        }
        e.brightness.value = Wt.brightness, e.whitePoint.value = Wt.whitePoint
    }

    function x(e, t, r) {
        e.particleSize.value = t.particleSize, e.screenWidth.value = Sr, t instanceof XG.DynamicParticleMaterial && (e.time.value = t.time, e.timeRange.value = t.timeRange, e.timeOffset.value = t.timeOffset, e.numFrames.value = t.numFrames, e.frameDuration.value = t.frameDuration, e.cameraNearFar.value.set(r.near, r.far), e.additiveFactor.value = t.additiveFactor)
    }

    function G(e, t, r) {
        e.fogColor.value = t.color, t instanceof XG.LinearFog ? e.fogNearFar.value.set(t.near, t.far) : t instanceof XG.ExponentialFog ? e.fogDensity.value = t.density : t instanceof XG.AtmosphericFog && (e.fogStartStrength.value.set(t.start, t.strength), e.cameraNearFar.value.set(r.near, r.far))
    }

    function M(e, t) {
        e.fogHeight.value = t.height, e.fogVisibilityDistance.value = t.visibilityDistance, e.fogFadeSpeed.value = t.fadeSpeed, e.fogShallowDepthColor.value = t.shallowDepthColor, e.fogDeepDepthColor.value = t.deepDepthColor, e.fogRgbExtinctionDistance.value = t.rgbExtinctionDistance
    }

    function y(e, t) {
        var r = t.specular;
        Wt.gammaInput ? e.specular.value.setRGBAGamma(r, t.shininess) : e.specular.value.setRGBA(r, t.shininess), t.specularMap && (e.specularMap.value = t.specularMap), t.glossMap && (e.glossMap.value = t.glossMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale), (t.normalMap || t.normalGlossMap) && (e.normalMap.value = t.normalGlossMap ? t.normalGlossMap : t.normalMap, e.normalScale.value.copy(t.normalScale)), t.bumpDetailMap && (e.bumpDetailMap.value = t.bumpDetailMap), t.normalDetailMap && (e.normalDetailMap.value = t.normalDetailMap), (t.bumpDetailMap || t.normalDetailMap) && e.detailRepeatScale.value.set(t.detailRepeat.x, t.detailRepeat.y, t.detailScale), t.wrapAround && (e.wrapRGB.value = t.wrapRGB), t.parallax && (e.parallaxScale.value = t.parallaxScale)
    }

    function w(e, t) {
        e.directionalLightPositionVS && (e.directionalLightPositionVS.value = t.directional.positionsFull), e.directionalLightColor.value = t.directional.colors, e.directionalLightDirectionVS.value = t.directional.positionsNorm, e.directionalLightPars.value = t.directional.pars, e.pointLightColor.value = t.point.colors, e.pointLightPositionVS.value = t.point.positions, e.pointLightDistance.value = t.point.distances, e.sphereLightColor.value = t.sphere.colors, e.sphereLightPositionVS.value = t.sphere.positions, e.sphereLightPars.value = t.sphere.pars, e.tubeLightColor.value = t.tube.colors, e.tubeLightPosition0VS.value = t.tube.positions0, e.tubeLightPosition1VS.value = t.tube.positions1, e.tubeLightPars.value = t.tube.pars, e.spotLightColor.value = t.spot.colors, e.spotLightPositionVS.value = t.spot.positions, e.spotLightDirectionVS.value = t.spot.directions, e.spotLightPars.value = t.spot.pars, e.hemisphereLightSkyColor.value = t.hemi.skyColors, e.hemisphereLightGroundColor.value = t.hemi.groundColors, e.hemisphereLightDirectionVS.value = t.hemi.positions, e.areaLightColor.value = t.area.colors, e.areaLightPosition.value = t.area.positions, e.areaLightNormal.value = t.area.normals, e.areaLightRight.value = t.area.rights, e.areaLightUp.value = t.area.ups, e.areaLightPars.value = t.area.pars, e.areaLightAttenuation.value = t.area.attenuations, e.areaLightTexture.value = t.area.textures, e.imageLightTextureDiffuse.value = t.image.texturesDiffuse, e.imageLightTextureSpecular.value = t.image.texturesSpecular, e.imageLightTextureMip.value = t.image.texturesMip, e.imageLightPars.value = t.image.pars, e.imageLightPositionWS.value = t.image.positions, e.imageLightSize.value = t.image.sizes
    }

    function D(e, t, r, a, i) {
        e.useDepthTexture && jr && Wt.shadowMapUseDepthTextures && (e = e.depthTexture), a.shadowMap.value[i] = e, a.shadowMatrix.value[i] = t;
        var o = Math.sqrt(r.shadowDarkness),
            n = r.properties.shadowMapPars;
        n.setZ(o), n.setW(r.shadowBias), a.shadowMapPars.value[i] = n
    }

    function X(e, t) {
        for (var r = 0, a = 0, i = t.length; i > a; a++) {
            var o = t[a];
            if (o.castShadow) {
                if (o instanceof XG.SpotLight || o instanceof XG.AreaLight || (o instanceof XG.DirectionalLight || o instanceof XG.DayLight || o instanceof XG.DayLightCube) && !o.shadowCascade) {
                    var n = o.properties,
                        s = n.shadowMap,
                        l = n.shadowMatrixForward;
                    if (s instanceof Array)
                        for (var h = 0, d = s.length; d > h; h++) D(s[h], l[h], o, e, r), r++;
                    else D(s, l, o, e, r), r++
                }
                if (o instanceof XG.SphereLight) {
                    var n = o.properties,
                        s = n.shadowMap,
                        l = n.shadowMatrixForward;
                    if (s instanceof Array) {
                        var h = o.forwardShadowSide;
                        D(s[h], l[h], o, e, r)
                    } else D(s, l, o, e, r);
                    r++
                }
            }
        }
    }

    function C(e, t) {
        e.modelViewMatrix && _t.uniformMatrix4fv(e.modelViewMatrix, !1, t._modelViewMatrix.elements), e.normalMatrix && _t.uniformMatrix3fv(e.normalMatrix, !1, t._normalMatrix.elements), e.modelMatrix && _t.uniformMatrix4fv(e.modelMatrix, !1, t.matrixWorld.elements)
    }

    function A() {
        var e = $t;
        return e >= Ur && console.warn("XG:ForwardRenderer: trying to use " + (e + 1) + " texture units while this GPU supports only " + Ur), $t += 1, e
    }

    function _(e) {
        for (var t, r, a, i, o, n, s, l, h, d, u = 0, c = e.length; c > u; u++)
            if (t = e[u], r = t[0], o = t[1], i = r.type, a = r.value, "i" === i) _t.uniform1i(o, a);
            else if ("f" === i) _t.uniform1f(o, a);
        else if ("v2" === i) _t.uniform2fv(o, a.data);
        else if ("v3" === i) _t.uniform3fv(o, a.data);
        else if ("v4" === i) _t.uniform4fv(o, a.data);
        else if ("c" === i) _t.uniform3f(o, a.r, a.g, a.b);
        else if ("iv1" === i) _t.uniform1iv(o, a);
        else if ("iv2" === i) _t.uniform2iv(o, a);
        else if ("iv3" === i) _t.uniform3iv(o, a);
        else if ("fv1" === i) _t.uniform1fv(o, a);
        else if ("fv2" === i) _t.uniform2fv(o, a);
        else if ("fv3" === i) _t.uniform3fv(o, a);
        else if ("fv4" === i) _t.uniform4fv(o, a);
        else if ("v2v" === i) {
            for (void 0 === r._array && (r._array = new Float32Array(2 * a.length)), l = 0, h = a.length; h > l; l++) d = 2 * l, r._array.set(a[l].data, d);
            _t.uniform2fv(o, r._array)
        } else if ("v3v" === i) {
            for (void 0 === r._array && (r._array = new Float32Array(3 * a.length)), l = 0, h = a.length; h > l; l++) d = 3 * l, r._array.set(a[l].data, d);
            _t.uniform3fv(o, r._array)
        } else if ("v4v" === i) {
            for (void 0 === r._array && (r._array = new Float32Array(4 * a.length)), l = 0, h = a.length; h > l; l++) d = 4 * l, r._array.set(a[l].data, d);
            _t.uniform4fv(o, r._array)
        } else if ("m4" === i) _t.uniformMatrix4fv(o, !1, a.elements);
        else if ("m4v" === i) {
            for (void 0 === r._array && (r._array = new Float32Array(16 * a.length)), l = 0, h = a.length; h > l; l++) a[l].flattenToArrayOffset(r._array, 16 * l);
            _t.uniformMatrix4fv(o, !1, r._array)
        } else if ("t" === i) {
            if (n = a, s = A(), _t.uniform1i(o, s), !n) continue;
            n.image instanceof Array ? K(n, s) : n instanceof XG.RenderTargetCube ? Z(n, s) : Wt.setTexture(n, s)
        } else if ("tv" === i) {
            for (void 0 === r._array && (r._array = []), l = 0, h = r.value.length; h > l; l++) r._array[l] = A();
            for (_t.uniform1iv(o, r._array), l = 0, h = r.value.length; h > l; l++) n = r.value[l], s = r._array[l], n && (n.image instanceof Array ? K(n, s) : n instanceof XG.RenderTargetCube ? Z(n, s) : Wt.setTexture(n, s))
        }
    }

    function T(e, t) {
        e._modelViewMatrix.multiply(t.matrixWorldInverse, e.matrixWorld), e._normalMatrix.getNormalMatrix(e._modelViewMatrix)
    }

    function b(e, t, r, a) {
        var i = r.r * a,
            o = r.g * a,
            n = r.b * a;
        Wt.gammaInput && (i *= i, o *= o, n *= n), e[t] = i, e[t + 1] = o, e[t + 2] = n
    }

    function P(e, t, r) {
        var a = r.data;
        e[t] = a[0], e[t + 1] = a[1], e[t + 2] = a[2]
    }

    function L(e, t, r, a) {
        var i = r.data;
        e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = a
    }

    function E(e, t, r, a) {
        e[t] = r, e[t + 1] = a
    }

    function F(e, t, r, a, i) {
        e[t] = r, e[t + 1] = a, e[t + 2] = i
    }

    function R(e, t, r, a, i, o) {
        e[t] = r, e[t + 1] = a, e[t + 2] = i, e[t + 3] = o
    }

    function U(e, t) {
        var r, a, i, o, n, s, l, h = Fr,
            d = h.directional.colors,
            u = h.directional.positionsNorm,
            c = h.directional.positionsFull,
            f = h.directional.pars,
            p = h.point.colors,
            m = h.point.positions,
            v = h.point.distances,
            g = h.sphere.colors,
            S = h.sphere.positions,
            x = h.sphere.pars,
            G = h.tube.colors,
            M = h.tube.positions0,
            y = h.tube.positions1,
            w = h.tube.pars,
            D = h.spot.colors,
            X = h.spot.positions,
            C = h.spot.directions,
            A = h.spot.pars,
            _ = h.hemi.skyColors,
            T = h.hemi.groundColors,
            U = h.hemi.positions,
            N = h.area.colors,
            I = h.area.positions,
            B = h.area.normals,
            O = h.area.rights,
            k = h.area.ups,
            V = h.area.pars,
            H = h.area.attenuations,
            z = h.area.textures,
            W = h.image.pars,
            j = h.image.texturesDiffuse,
            q = h.image.texturesSpecular,
            K = h.image.texturesMip,
            Z = h.image.positions,
            Y = h.image.sizes,
            Q = 0,
            J = 0,
            $ = 0,
            et = 0,
            tt = 0,
            rt = 0,
            at = 0,
            it = 0,
            ot = 0,
            nt = 0,
            st = 0,
            lt = 0,
            ht = 0,
            dt = 0,
            ut = 0,
            ct = 0,
            ft = 999999,
            pt = 0,
            mt = 0,
            vt = [],
            gt = [],
            St = [],
            xt = [],
            Gt = t.matrixWorldInverse;
        for (r = 0, a = e.length; a > r; r++)
            if (i = e[r], i.onlyShadow) i instanceof XG.DirectionalLight || i instanceof XG.DayLight || i instanceof XG.DayLightCube ? i.castShadow && vt.push(i) : i instanceof XG.SpotLight ? i.castShadow && gt.push(i) : i instanceof XG.AreaLight ? i.castShadow && St.push(i) : i instanceof XG.SphereLight && i.castShadow && xt.push(i);
            else {
                if (o = i.color, n = i.intensity, s = i.distance, l = i.matrixWorld, i instanceof XG.DirectionalLight) {
                    if (ot += 1, !i.visible) continue;
                    if (Tr.copy(l.getPosition()), Tr.subSelf(i.target.matrixWorld.getPosition()), Tr.normalize(), Gt.rotateAxis(Tr), 0 === Tr.data[0] && 0 === Tr.data[1] && 0 === Tr.data[2]) continue;
                    _r.copy(l.getPosition()), Gt.multiplyVector3(_r), P(u, 3 * Q, Tr), L(c, 4 * Q, _r, s), b(d, 3 * Q, o, n), f[Q] = i.castShadow ? pt : ft, i.castShadow && vt.push(i), Q += 1
                } else if (i instanceof XG.PointLight) {
                    if (nt += 1, !i.visible) continue;
                    _r.copy(l.getPosition()), Gt.multiplyVector3(_r), P(m, 3 * J, _r), b(p, 3 * J, o, n), v[J] = s, J += 1
                } else if (i instanceof XG.SphereLight) {
                    if (st += 1, !i.visible) continue;
                    _r.copy(l.getPosition()), Gt.multiplyVector3(_r), P(S, 3 * $, _r), b(g, 3 * $, o, n), F(x, 3 * $, s, i.radius, i.castShadow ? pt : ft), i.castShadow && xt.push(i), $ += 1
                } else if (i instanceof XG.TubeLight) {
                    if (lt += 1, !i.visible) continue;
                    _r.copy(i.endPoint0.matrixWorld.getPosition()), Gt.multiplyVector3(_r), P(M, 3 * et, _r), _r.copy(i.endPoint1.matrixWorld.getPosition()), Gt.multiplyVector3(_r), P(y, 3 * et, _r), b(G, 3 * et, o, n), E(w, 2 * et, s, i.radius), et += 1
                } else if (i instanceof XG.SpotLight) {
                    if (ht += 1, !i.visible) continue;
                    _r.copy(l.getPosition()), Gt.multiplyVector3(_r), Tr.copy(l.getPosition()), Tr.subSelf(i.target.matrixWorld.getPosition()), Tr.normalize(), Gt.rotateAxis(Tr), P(X, 3 * tt, _r), P(C, 3 * tt, Tr), b(D, 3 * tt, o, n), mt = Math.cos(.5 * i.angle), R(A, 4 * tt, mt, i.exponent, s, i.castShadow ? pt : ft), i.castShadow && gt.push(i), tt += 1
                } else if (i instanceof XG.HemisphereLight) {
                    if (dt += 1, !i.visible) continue;
                    if (Tr.copy(l.getPosition()), Tr.normalize(), Gt.rotateAxis(Tr), 0 === Tr.data[0] && 0 === Tr.data[1] && 0 === Tr.data[2]) continue;
                    P(U, 3 * rt, Tr), b(_, 3 * rt, i.color, n), b(T, 3 * rt, i.groundColor, n), rt += 1
                } else if (i instanceof XG.AreaLight) {
                    if (ut += 1, !i.visible) continue;
                    _r.copy(l.getPosition()), Gt.multiplyVector3(_r), br.copy(i.normal), l.rotateAxis(br), Gt.rotateAxis(br), Pr.copy(i.right), l.rotateAxis(Pr), Gt.rotateAxis(Pr), Lr.cross(Pr, br), Lr.normalize(), P(I, 3 * at, _r), P(B, 3 * at, br), P(O, 3 * at, Pr), P(k, 3 * at, Lr), b(N, 3 * at, o, n), F(H, 3 * at, i.constantAttenuation, i.linearAttenuation, i.quadraticAttenuation), R(V, 4 * at, i.width, i.height, i.texture ? 1 : 0, i.castShadow ? pt : ft), z[at] = i.texture, i.castShadow && St.push(i), at += 1
                } else if (i instanceof XG.ImageLight) {
                    if (ct += 1, !i.visible) continue;
                    i.textureDiffuse instanceof XG.RenderTargetCube && (n /= Wt.brightness), Wt.gammaInput && (n *= n), _r.copy(l.getPosition()), P(Z, 3 * it, _r), P(Y, 3 * it, i.size), F(W, 3 * it, i.textureSpecular.mipmapCount, n, i.local ? 1 : 0), j[it] = i.textureDiffuse, q[it] = i.textureSpecular, K[it] = i.textureMip, it += 1
                } else if (i instanceof XG.DayLight) {
                    if (dt += 1, ot += 1, !i.visible) continue;
                    if (Tr.copy(i.hemiPosition), Tr.normalize(), Gt.rotateAxis(Tr), 0 === Tr.data[0] && 0 === Tr.data[1] && 0 === Tr.data[2]) continue;
                    if (P(U, 3 * rt, Tr), b(_, 3 * rt, i.skyColor, i.hemiIntensity), b(T, 3 * rt, i.groundColor, i.hemiIntensity), rt += 1, Tr.copy(l.getPosition()), Tr.subSelf(i.target.matrixWorld.getPosition()), Tr.normalize(), Gt.rotateAxis(Tr), 0 === Tr.data[0] && 0 === Tr.data[1] && 0 === Tr.data[2]) continue;
                    _r.copy(l.getPosition()), Gt.multiplyVector3(_r), P(u, 3 * Q, Tr), L(c, 4 * Q, _r, s), b(d, 3 * Q, o, i.sunIntensity), f[Q] = i.castShadow ? pt : ft, i.castShadow && vt.push(i), Q += 1
                } else if (i instanceof XG.DayLightCube) {
                    if (ct += 1, ot += 1, !i.visible) continue;
                    var Mt = i.ambientIntensity;
                    if (Wt.gammaInput && (Mt *= Mt), _r.copy(l.getPosition()), P(Z, 3 * it, _r), F(Y, 3 * it, 0, 0, 0), F(W, 3 * it, i.textureSpecular.mipmapCount, Mt, i.local ? 1 : 0), j[it] = i.textureDiffuse, q[it] = i.textureSpecular, K[it] = i.textureMip, it += 1, Tr.copy(l.getPosition()), Tr.subSelf(i.target.matrixWorld.getPosition()), Tr.normalize(), Gt.rotateAxis(Tr), 0 === Tr.data[0] && 0 === Tr.data[1] && 0 === Tr.data[2]) continue;
                    _r.copy(l.getPosition()), Gt.multiplyVector3(_r), P(u, 3 * Q, Tr), L(c, 4 * Q, _r, s), b(d, 3 * Q, o, n), f[Q] = i.castShadow ? pt : ft, i.castShadow && vt.push(i), Q += 1
                }
                i.castShadow && (pt += 1)
            }
        var yt = h.shadowCasters;
        yt.length = 0;
        var wt, Dt, Xt;
        for (wt = 0, Dt = vt.length; Dt > wt; wt++) Xt = vt[wt], yt.push(Xt);
        for (wt = 0, Dt = gt.length; Dt > wt; wt++) Xt = gt[wt], yt.push(Xt);
        for (wt = 0, Dt = St.length; Dt > wt; wt++) Xt = St[wt], yt.push(Xt);
        for (wt = 0, Dt = xt.length; Dt > wt; wt++) Xt = xt[wt], yt.push(Xt);
        for (r = 3 * Q, a = Math.max(d.length, 3 * ot); a > r; r++) d[r] = 0;
        for (r = 3 * J, a = Math.max(p.length, 3 * nt); a > r; r++) p[r] = 0;
        for (r = 3 * $, a = Math.max(g.length, 3 * st); a > r; r++) g[r] = 0;
        for (r = 3 * et, a = Math.max(G.length, 3 * lt); a > r; r++) G[r] = 0;
        for (r = 3 * tt, a = Math.max(D.length, 3 * ht); a > r; r++) D[r] = 0;
        for (r = 3 * rt, a = Math.max(_.length, 3 * dt); a > r; r++) _[r] = 0;
        for (r = 3 * rt, a = Math.max(T.length, 3 * dt); a > r; r++) T[r] = 0;
        for (r = 3 * at, a = Math.max(N.length, 3 * ut); a > r; r++) N[r] = 0;
        h.directional.length = Q, h.point.length = J, h.sphere.length = $, h.tube.length = et, h.spot.length = tt, h.hemi.length = rt, h.area.length = at, h.image.length = it
    }

    function N(e, t) {
        var r;
        "fragment" === e ? r = _t.FRAGMENT_SHADER : "vertex" === e && (r = _t.VERTEX_SHADER);
        var a = _t.createShader(r);
        _t.shaderSource(a, t), _t.compileShader(a), _t.getShaderParameter(a, _t.COMPILE_STATUS) || console.error(e.toUpperCase() + " SHADER COMPILATION FAILED");
        var i = _t.getShaderInfoLog(a);
        if ("" !== i) {
            var o = XG.DebugUtils.parseGLSLShaderErrorLog(i);
            XG.DebugUtils.prettyPrintShaderErrors(t, o)
        }
        return a
    }

    function I(e) {
        var t, r, a = [];
        for (var i in e) t = e[i], t !== !1 && (void 0 !== t ? (r = "#define " + i + " " + t, a.push(r)) : console.warn("XG.ForwardRenderer generateDefines(): undefined value for label [" + i + "]"));
        return a.join("\n")
    }

    function B(e) {
        var t, r, a, i = {
                OES_standard_derivatives: "GL_OES_standard_derivatives",
                WEBGL_draw_buffers: "GL_EXT_draw_buffers",
                EXT_shader_texture_lod: "GL_EXT_shader_texture_lod",
                EXT_frag_depth: "GL_EXT_frag_depth"
            },
            o = [];
        for (var n in e) r = e[n], r !== !1 && (void 0 !== r ? (t = i[n], void 0 !== t ? (a = "#extension " + t + " : enable", o.push(a)) : console.warn("XG.ForwardRenderer generateExtensions(): unknown extension [" + n + "]")) : console.warn("XG.ForwardRenderer generateExtensions(): undefined state for extension [" + n + "]"));
        return o.join("\n")
    }

    function O(e, t, r, a, i) {
        var o = t.fragmentShader,
            n = t.vertexShader,
            s = t.extensions || {},
            l = t.defines || {},
            h = [];
        e ? h.push(e) : (h.push(o), h.push(n));
        var d;
        for (d in l) h.push(d), h.push(l[d]);
        for (d in i) h.push(d), h.push(i[d]);
        for (var u = h.join(), c = 0, f = jt.length; f > c; c++) {
            var p = jt[c];
            if (p.code === u) return p.usedTimes++, p.program
        }
        var m = "SHADOWMAP_TYPE_BASIC";
        i.shadowMapType === XG.PCFShadowMap ? m = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === XG.PCFSoftShadowMap ? m = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === XG.PCFSoftHQShadowMap && (m = "SHADOWMAP_TYPE_PCF_SOFT_HQ");
        var v;
        switch (At) {
            case XG.SimpleOperator:
                v = "TONEMAP_SIMPLE";
                break;
            case XG.LinearOperator:
                v = "TONEMAP_LINEAR";
                break;
            case XG.ReinhardOperator:
                v = "TONEMAP_REINHARD";
                break;
            case XG.FilmicOperator:
                v = "TONEMAP_FILMIC";
                break;
            case XG.Filmic2015Operator:
                v = "TONEMAP_FILMIC_2015";
                break;
            case XG.UnchartedOperator:
                v = "TONEMAP_UNCHARTED";
                break;
            case XG.LumaReinhardOperator:
                v = "TONEMAP_REINHARD_LUMA";
                break;
            case XG.WhitePreservingReinhardOperator:
                v = "TONEMAP_REINHARD_WHITE";
                break;
            case XG.PhotographicOperator:
                v = "TONEMAP_PHOTOGRAPHIC"
        }
        var g;
        switch (Wt.specularBRDF) {
            case XG.SimpleBRDF:
                g = "BRDF_SIMPLE";
                break;
            case XG.BlinnPhongBRDF:
                g = "BRDF_BLINN_PHONG";
                break;
            case XG.GGXBRDF:
                g = "BRDF_GGX"
        }
        var S;
        i.fog instanceof XG.LinearFog ? S = "LINEAR_FOG" : i.fog instanceof XG.ExponentialFog ? S = "EXPONENTIAL_FOG" : i.fog instanceof XG.AtmosphericFog && (S = "ATMOSPHERIC_FOG");
        var x = i.bumpMap || i.normalMap || i.bumpDetailMap || i.normalDetailMap || i.normalGlossMap || i.wrapAroundSkin,
            G = i.maxImageLights > 0;
        s.OES_standard_derivatives = Yr && (s.OES_standard_derivatives || !!x), s.EXT_shader_texture_lod = Qr && (s.EXT_shader_texture_lod || !!G);
        var M = B(s),
            y = I(l),
            w = _t.createProgram(),
            D = ["precision " + vt + " float;", "precision " + vt + " int;", y, Wt.gammaInput ? "#define GAMMA_INPUT" : "", Wt.gammaOutput ? "#define GAMMA_OUTPUT" : "", Wt.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING" : "", At ? "#define TONEMAPPING" : "", v ? "#define " + v : "", Gt ? "#define DITHERING_ENABLED" : "", "#define " + g, "#define MAX_DIR_LIGHTS " + i.maxDirLights, "#define MAX_POINT_LIGHTS " + i.maxPointLights, "#define MAX_SPHERE_LIGHTS " + i.maxSphereLights, "#define MAX_TUBE_LIGHTS " + i.maxTubeLights, "#define MAX_SPOT_LIGHTS " + i.maxSpotLights, "#define MAX_HEMI_LIGHTS " + i.maxHemiLights, "#define MAX_AREA_LIGHTS " + i.maxAreaLights, "#define MAX_IMAGE_LIGHTS " + i.maxImageLights, i.areaTextures ? "#define AREA_TEXTURE" : "", jr && Wt.shadowMapUseDepthTextures ? "#define DEPTH_TEXTURES" : "", "#define MAX_SHADOWS " + i.maxShadows, i.alphaTest ? "#define ALPHATEST " + i.alphaTest : "", i.map ? "#define USE_MAP" : "", i.lightMap ? "#define USE_LIGHTMAP" : "", Yr && i.bumpMap ? "#define USE_BUMPMAP" : "", Yr && i.normalMap ? "#define USE_NORMALMAP" : "", Yr && i.normalGlossMap ? "#define USE_NORMALGLOSSMAP" : "", Yr && i.bumpDetailMap ? "#define USE_BUMPDETAILMAP" : "", Yr && i.normalDetailMap ? "#define USE_NORMALDETAILMAP" : "", i.glossMap ? "#define USE_GLOSSMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.vertexColors ? "#define USE_COLOR" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + m : "", i.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", i.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", "#define DIR_INDEX_OFFSET " + i.dirIndexOffset, "#define SPOT_INDEX_OFFSET " + i.spotIndexOffset, "#define AREA_INDEX_OFFSET " + i.areaIndexOffset, "#define SPHERE_INDEX_OFFSET " + i.sphereIndexOffset, i.isParticle ? "#define PARTICLE" : "", i.sizeAttenuation ? "#define USE_PARTICLE_SIZEATTENUATION" : "", i.interpolateParticleFrames ? "#define INTERPOLATE_PARTICLE_FRAMES" : "", i.wrapAround ? "#define WRAP_AROUND" : "", Yr && i.wrapAroundSkin ? "#define WRAP_AROUND_SKIN" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.osxHack ? "#define OSX_HACK" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", ""].join("\n"),
            X = [Or ? "#define VERTEX_TEXTURES" : "", "#define MAX_BONES " + i.maxBones, i.skinning ? "#define USE_SKINNING" : "", i.useVertexTexture ? "#define BONE_TEXTURE" : "", i.boneTextureWidth ? "#define N_BONE_PIXEL_X " + i.boneTextureWidth.toFixed(1) : "", i.boneTextureHeight ? "#define N_BONE_PIXEL_Y " + i.boneTextureHeight.toFixed(1) : "", i.morphTargets ? "#define USE_MORPHTARGETS" : "", i.morphNormals ? "#define USE_MORPHNORMALS" : "", "#define MAX_MORPHTARGETS " + i.maxMorphTargets, "#define MAX_MORPHNORMALS " + i.maxMorphNormals, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fog ? "#define " + S : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat3 normalMatrix;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "attribute vec2 uv2;", "#ifdef USE_COLOR", "attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "attribute vec3 morphTarget0;", "attribute vec3 morphTarget1;", "attribute vec3 morphTarget2;", "attribute vec3 morphTarget3;", "#ifdef USE_MORPHNORMALS", "attribute vec3 morphNormal0;", "attribute vec3 morphNormal1;", "attribute vec3 morphNormal2;", "attribute vec3 morphNormal3;", "#endif", "#endif", "#ifdef USE_SKINNING", "attribute vec4 skinIndex;", "attribute vec4 skinWeight;", "#endif", ""].join("\n"),
            C = [Qr ? "#define SUPPORTS_TEXTURE_LOD" : "", i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fog ? "#define " + S : "", i.metal ? "#define METAL" : "", i.parallax ? "#define USE_PARALLAX" : "", i.parallax && i.parallaxRefineSteps > 0 ? "#define PARALLAX_REFINE_STEPS " + i.parallaxRefineSteps.toFixed(0) : "", ""].join("\n"),
            A = N("fragment", M + "\n" + D + C + o),
            _ = N("vertex", D + X + n);
        _t.attachShader(w, _), _t.attachShader(w, A), _t.linkProgram(w), _t.getProgramParameter(w, _t.LINK_STATUS) || console.error("Could not link shader program\nVALIDATE_STATUS: " + _t.getProgramParameter(w, _t.VALIDATE_STATUS) + "\nGL_ERROR: " + XG.DebugUtils.translateGLErrorCode(_t.getError()));
        var T = _t.getProgramInfoLog(w);
        if ("" !== T)
            if (zt) {
                var b = (zt.getTranslatedShaderSource(_), zt.getTranslatedShaderSource(A)),
                    P = XG.DebugUtils.parseTranslatedShaderErrorLog(T);
                XG.DebugUtils.prettyPrintTranslatedShaderErrors(b, P)
            } else console.warn("PROGRAM_INFO_LOG: " + T);
        _t.deleteShader(A), _t.deleteShader(_), w.uniforms = {}, w.attributes = {};
        var L;
        L = [];
        for (d in r) L.push(d);
        k(w, L), L = [];
        for (d in a) L.push(d);
        return V(w, L), w.id = qt++, jt.push({
            program: w,
            code: u,
            usedTimes: 1
        }), Wt.info.memory.programs = jt.length, w
    }

    function k(e, t) {
        var r, a, i;
        for (r = 0, a = t.length; a > r; r++) i = t[r], e.uniforms[i] = _t.getUniformLocation(e, i)
    }

    function V(e, t) {
        var r, a, i;
        for (r = 0, a = t.length; a > r; r++) i = t[r], e.attributes[i] = _t.getAttribLocation(e, i)
    }

    function H(e) {
        return 0 === (e & e - 1)
    }

    function z(e, t, r) {
        r ? (_t.texParameteri(e, _t.TEXTURE_WRAP_S, t.wrapS), _t.texParameteri(e, _t.TEXTURE_WRAP_T, t.wrapT), _t.texParameteri(e, _t.TEXTURE_MAG_FILTER, t.magFilter), _t.texParameteri(e, _t.TEXTURE_MIN_FILTER, t.minFilter)) : (_t.texParameteri(e, _t.TEXTURE_WRAP_S, _t.CLAMP_TO_EDGE), _t.texParameteri(e, _t.TEXTURE_WRAP_T, _t.CLAMP_TO_EDGE), _t.texParameteri(e, _t.TEXTURE_MAG_FILTER, nt(t.magFilter)), _t.texParameteri(e, _t.TEXTURE_MIN_FILTER, nt(t.minFilter))), Ft && t.type !== XG.FloatType && (t.anisotropy > 1 || t.__oldAnisotropy) && (_t.texParameterf(e, Ft.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, Br)), t.__oldAnisotropy = t.anisotropy)
    }

    function W(e, t) {
        _t.activeTexture(_t.TEXTURE0 + t), _t.bindTexture(_t.TEXTURE_2D, e.__webglTexture), Dr[t] = e.id, _t.pixelStorei(_t.UNPACK_FLIP_Y_WEBGL, e.flipY), _t.pixelStorei(_t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), _t.pixelStorei(_t.UNPACK_ALIGNMENT, e.unpackAlignment);
        var r = e.image,
            a = H(r.width) && H(r.height),
            i = e.format,
            o = e.type;
        z(_t.TEXTURE_2D, e, a);
        var n, s = e.mipmaps;
        if (e instanceof XG.DataTexture)
            if (s.length > 0 && a) {
                for (var l = 0, h = s.length; h > l; l++) n = s[l], _t.texImage2D(_t.TEXTURE_2D, l, i, n.width, n.height, 0, i, o, n.data);
                e.generateMipmaps = !1
            } else _t.texImage2D(_t.TEXTURE_2D, 0, i, r.width, r.height, 0, i, o, r.data);
        else if (e instanceof XG.CompressedTexture)
            for (var l = 0, h = s.length; h > l; l++) n = s[l], _t.pixelStorei(_t.UNPACK_ALIGNMENT, n.unpackAlignment), i === XG.RGBAFormat || i === XG.RGBFormat ? _t.texImage2D(_t.TEXTURE_2D, l, i, n.width, n.height, 0, i, o, n.data) : _t.compressedTexImage2D(_t.TEXTURE_2D, l, i, n.width, n.height, 0, n.data);
        else if (s.length > 0 && a) {
            for (var l = 0, h = s.length; h > l; l++) n = s[l], _t.texImage2D(_t.TEXTURE_2D, l, i, i, o, n);
            e.generateMipmaps = !1
        } else _t.texImage2D(_t.TEXTURE_2D, 0, i, i, o, e.image);
        e.generateMipmaps && a && _t.generateMipmap(_t.TEXTURE_2D), e.needsUpdate = !1, e.onUpdate && e.onUpdate()
    }

    function j(e, t) {
        if (e.width <= t && e.height <= t) return e;
        var r = Math.max(e.width, e.height),
            a = Math.floor(e.width * t / r),
            i = Math.floor(e.height * t / r),
            o = document.createElement("canvas");
        o.width = a, o.height = i;
        var n = o.getContext("2d");
        return n.drawImage(e, 0, 0, e.width, e.height, 0, 0, a, i), o
    }

    function q(e, t) {
        _t.activeTexture(_t.TEXTURE0 + t), _t.bindTexture(_t.TEXTURE_CUBE_MAP, e.image.__webglTextureCube), Dr[t] = e.id, _t.pixelStorei(_t.UNPACK_FLIP_Y_WEBGL, e.flipY), _t.pixelStorei(_t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), _t.pixelStorei(_t.UNPACK_ALIGNMENT, e.unpackAlignment);
        for (var r = e instanceof XG.CompressedTexture, a = [], i = 0; 6 > i; i++) a[i] = Wt.autoScaleCubemaps && !r ? j(e.image[i], Ir) : e.image[i];
        var o = a[0],
            n = H(o.width) && H(o.height),
            s = e.format,
            l = e.type;
        z(_t.TEXTURE_CUBE_MAP, e, n);
        for (var i = 0; 6 > i; i++) {
            var h = a[i].mipmaps;
            if (h && h.length > 0)
                for (var d = 0, u = h.length; u > d; d++) {
                    var c = h[d];
                    _t.pixelStorei(_t.UNPACK_ALIGNMENT, c.unpackAlignment), s === XG.RGBAFormat || s === XG.RGBFormat ? _t.texImage2D(_t.TEXTURE_CUBE_MAP_POSITIVE_X + i, d, s, c.width, c.height, 0, s, l, c.data) : _t.compressedTexImage2D(_t.TEXTURE_CUBE_MAP_POSITIVE_X + i, d, s, c.width, c.height, 0, c.data)
                } else _t.texImage2D(_t.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, s, s, l, a[i])
        }
        e.generateMipmaps && n && (_t.generateMipmap(_t.TEXTURE_CUBE_MAP), e.mipmapCount = Math.log(Math.max(o.width, o.height)) / Math.LN2), e.needsUpdate = !1, e.onUpdate && e.onUpdate()
    }

    function K(e, t) {
        if (!e.__webglInit) {
            e.__webglInit = !0, e.image.__webglTextureCube = _t.createTexture(), Wt.info.memory.textures++, _t.activeTexture(_t.TEXTURE0 + t), _t.bindTexture(_t.TEXTURE_CUBE_MAP, e.image.__webglTextureCube), Dr[t] = e.id;
            for (var r = 0; 6 > r; r++) _t.texImage2D(_t.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, _t.RGBA, 1, 1, 0, _t.RGBA, _t.UNSIGNED_BYTE, Rr)
        }
        e.needsUpdate && q(e, t), Dr[t] !== e.id && e.image.__webglTextureCube && (_t.activeTexture(_t.TEXTURE0 + t), _t.bindTexture(_t.TEXTURE_CUBE_MAP, e.image.__webglTextureCube), Dr[t] = e.id)
    }

    function Z(e, t) {
        e.__webglInit || (it(e), e.__webglInit = !0), Dr[t] !== e.id && e.__webglTexture && (_t.activeTexture(_t.TEXTURE0 + t), _t.bindTexture(_t.TEXTURE_CUBE_MAP, e.__webglTexture), Dr[t] = e.id)
    }

    function Y(e, t, r, a, i) {
        _t.bindFramebuffer(_t.FRAMEBUFFER, e), i && _t.framebufferTexture2D(_t.FRAMEBUFFER, _t.COLOR_ATTACHMENT0, r, t.__webglTexture, 0), a && _t.framebufferTexture2D(_t.FRAMEBUFFER, _t.DEPTH_ATTACHMENT, r, t.depthTexture.__webglTexture, 0)
    }

    function Q(e, t) {
        _t.bindRenderbuffer(_t.RENDERBUFFER, e), t.depthBuffer && !t.stencilBuffer ? (_t.renderbufferStorage(_t.RENDERBUFFER, _t.DEPTH_COMPONENT16, t.width, t.height), _t.framebufferRenderbuffer(_t.FRAMEBUFFER, _t.DEPTH_ATTACHMENT, _t.RENDERBUFFER, e)) : !t.depthBuffer && t.stencilBuffer ? (_t.renderbufferStorage(_t.RENDERBUFFER, _t.STENCIL_INDEX8, t.width, t.height), _t.framebufferRenderbuffer(_t.FRAMEBUFFER, _t.STENCIL_ATTACHMENT, _t.RENDERBUFFER, e)) : t.depthBuffer && t.stencilBuffer && (_t.renderbufferStorage(_t.RENDERBUFFER, _t.DEPTH_STENCIL, t.width, t.height), _t.framebufferRenderbuffer(_t.FRAMEBUFFER, _t.DEPTH_STENCIL_ATTACHMENT, _t.RENDERBUFFER, e))
    }

    function J(e) {
        if (!qr) return void console.error("XG.ForwardRenderer: can't create RenderTargetArray");
        var t = e.colorTexture.length;
        e.__webglFramebuffer = _t.createFramebuffer(), e.__attachments = [], _t.bindFramebuffer(_t.FRAMEBUFFER, e.__webglFramebuffer);
        for (var r = 0; t > r; r++) e.__attachments.push(_t.COLOR_ATTACHMENT0 + r);
        Ht.drawBuffersEXT ? Ht.drawBuffersEXT(e.__attachments) : Ht.drawBuffersWEBGL(e.__attachments), e.__webglTexture = [];
        for (var r = 0; t > r; r++) {
            var a = e.colorTexture[r];
            a.__webglTexture = _t.createTexture(), Wt.info.memory.textures++
        }
        e.depthTexture ? (e.depthTexture.__webglTexture = _t.createTexture(), Wt.info.memory.textures++) : e.__webglRenderbuffer = _t.createRenderbuffer()
    }

    function $(e) {
        var t = H(e.width) && H(e.height),
            r = e.colorTexture.length;
        _t.bindFramebuffer(_t.FRAMEBUFFER, e.__webglFramebuffer);
        for (var a = 0; r > a; a++) {
            var i = e.__attachments[a],
                o = e.colorTexture[a],
                n = o.format,
                s = o.type;
            _t.bindTexture(_t.TEXTURE_2D, o.__webglTexture), z(_t.TEXTURE_2D, o, t), _t.texImage2D(_t.TEXTURE_2D, 0, n, e.width, e.height, 0, n, s, null), _t.framebufferTexture2D(_t.FRAMEBUFFER, i, _t.TEXTURE_2D, o.__webglTexture, 0), o.needsUpdate = !1
        }
        e.depthTexture ? (_t.bindTexture(_t.TEXTURE_2D, e.depthTexture.__webglTexture), z(_t.TEXTURE_2D, e.depthTexture, t), _t.texImage2D(_t.TEXTURE_2D, 0, _t.DEPTH_COMPONENT, e.width, e.height, 0, _t.DEPTH_COMPONENT, e.depthTexture.depthTextureType, null), _t.framebufferTexture2D(_t.FRAMEBUFFER, _t.DEPTH_ATTACHMENT, _t.TEXTURE_2D, e.depthTexture.__webglTexture, 0), e.depthTexture.needsUpdate = !1) : Q(e.__webglRenderbuffer, e)
    }

    function et(e) {
        e.__webglFramebuffer = [], e.__webglRenderbuffer = [], e.__webglTexture = _t.createTexture();
        for (var t = 0; 6 > t; t++) e.__webglFramebuffer[t] = _t.createFramebuffer(), e.__webglRenderbuffer[t] = _t.createRenderbuffer();
        Wt.info.memory.textures++
    }

    function tt(e) {
        var t = H(e.width) && H(e.height),
            r = e.format,
            a = e.type;
        _t.activeTexture(_t.TEXTURE0), _t.bindTexture(_t.TEXTURE_CUBE_MAP, e.__webglTexture), z(_t.TEXTURE_CUBE_MAP, e, t);
        for (var i = 0; 6 > i; i++) _t.texImage2D(_t.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, r, e.width, e.height, 0, r, a, null), Y(e.__webglFramebuffer[i], e, _t.TEXTURE_CUBE_MAP_POSITIVE_X + i, !1, !0), Q(e.__webglRenderbuffer[i], e);
        t && (e.generateMipmaps || e.minFilter !== XG.NearestFilter && e.minFilter !== XG.LinearFilter) && _t.generateMipmap(_t.TEXTURE_CUBE_MAP), t && (e.mipmapCount = Math.log(Math.max(e.width, e.height)) / Math.LN2)
    }

    function rt(e) {
        var t = e.useColorTexture,
            r = e.useDepthTexture && jr;
        e.__webglFramebuffer = _t.createFramebuffer(), t && (e.__webglTexture = _t.createTexture(), Wt.info.memory.textures++), e.shareDepthFrom || (r ? (e.depthTexture = {
            __webglTexture: _t.createTexture(),
            id: XG.TextureIdCount++
        }, Wt.info.memory.textures++) : e.__webglRenderbuffer = _t.createRenderbuffer())
    }

    function at(e) {
        var t = e.useColorTexture,
            r = e.useDepthTexture && jr,
            a = H(e.width) && H(e.height),
            i = e.format,
            o = e.type;
        t && (_t.activeTexture(_t.TEXTURE0), _t.bindTexture(_t.TEXTURE_2D, e.__webglTexture), z(_t.TEXTURE_2D, e, a), _t.texImage2D(_t.TEXTURE_2D, 0, i, e.width, e.height, 0, i, o, null), a && e.generateMipmaps && _t.generateMipmap(_t.TEXTURE_2D)), r && (e.shareDepthFrom ? e.depthTexture = e.shareDepthFrom.depthTexture : (_t.bindTexture(_t.TEXTURE_2D, e.depthTexture.__webglTexture), z(_t.TEXTURE_2D, e, a), _t.texImage2D(_t.TEXTURE_2D, 0, _t.DEPTH_COMPONENT, e.width, e.height, 0, _t.DEPTH_COMPONENT, e.depthTextureType, null))), Y(e.__webglFramebuffer, e, _t.TEXTURE_2D, r, t), r || (e.shareDepthFrom && e.shareDepthFrom.depthTexture ? (e.depthTexture = e.shareDepthFrom.depthTexture, _t.framebufferTexture2D(_t.FRAMEBUFFER, _t.DEPTH_ATTACHMENT, _t.TEXTURE_2D, e.depthTexture.__webglTexture, 0)) : e.shareDepthFrom ? (e.__webglRenderbuffer = e.shareDepthFrom.__webglRenderbuffer, e.depthBuffer && !e.stencilBuffer ? _t.framebufferRenderbuffer(_t.FRAMEBUFFER, _t.DEPTH_ATTACHMENT, _t.RENDERBUFFER, e.__webglRenderbuffer) : e.depthBuffer && e.stencilBuffer && _t.framebufferRenderbuffer(_t.FRAMEBUFFER, _t.DEPTH_STENCIL_ATTACHMENT, _t.RENDERBUFFER, e.__webglRenderbuffer)) : Q(e.__webglRenderbuffer, e))
    }

    function it(e) {
        if (e.needsUpdate) {
            var t = e instanceof XG.RenderTargetCube,
                r = e instanceof XG.RenderTargetArray;
            void 0 === e.__webglFramebuffer && (void 0 === e.depthBuffer && (e.depthBuffer = !0), void 0 === e.stencilBuffer && (e.stencilBuffer = !0), r ? J(e) : t ? et(e) : rt(e)), r ? $(e) : t ? tt(e) : at(e), t ? _t.bindTexture(_t.TEXTURE_CUBE_MAP, null) : _t.bindTexture(_t.TEXTURE_2D, null), Dr[0] = -1, _t.bindRenderbuffer(_t.RENDERBUFFER, null), _t.bindFramebuffer(_t.FRAMEBUFFER, null), e.needsUpdate = !1, e.onUpdate && e.onUpdate()
        }
    }

    function ot(e) {
        if (_t.activeTexture(_t.TEXTURE0), e instanceof XG.RenderTargetCube) _t.bindTexture(_t.TEXTURE_CUBE_MAP, e.__webglTexture), _t.generateMipmap(_t.TEXTURE_CUBE_MAP), _t.bindTexture(_t.TEXTURE_CUBE_MAP, null);
        else if (e instanceof XG.RenderTargetArray) {
            for (var t = 0, r = e.colorTexture.length; r > t; t++) _t.bindTexture(_t.TEXTURE_2D, e.colorTexture[t].__webglTexture), _t.generateMipmap(_t.TEXTURE_2D);
            _t.bindTexture(_t.TEXTURE_2D, null)
        } else _t.bindTexture(_t.TEXTURE_2D, e.__webglTexture), _t.generateMipmap(_t.TEXTURE_2D), _t.bindTexture(_t.TEXTURE_2D, null);
        Dr[0] = -1
    }

    function nt(e) {
        return e === XG.NearestFilter || e === XG.NearestMipMapNearestFilter || e === XG.NearestMipMapLinearFilter ? _t.NEAREST : _t.LINEAR
    }

    function st(e) {
        if (kr && e && e.useVertexTexture) return 1024;
        var t = _t.getParameter(_t.MAX_VERTEX_UNIFORM_VECTORS),
            r = Math.floor((t - 20) / 4),
            a = r;
        return void 0 !== e && e instanceof XG.SkinnedMesh && (a = Math.min(e.bones.length, a), a < e.bones.length && console.warn("XG.ForwardRenderer: too many bones - " + e.bones.length + ", this GPU supports just " + a + " (try OpenGL instead of ANGLE)")), a
    }

    function lt(e) {
        var t, r, a, i, o, n, s, l, h, d, u, c, f, p;
        r = a = i = o = n = s = l = h = d = 0, u = c = f = p = 0;
        for (var m = 0, v = e.length; v > m; m++) t = e[m], t.onlyShadow || (t instanceof XG.DirectionalLight && (r++, t.castShadow && u++), t instanceof XG.SpotLight && (n++, t.castShadow && c++), t instanceof XG.AreaLight && (l++, t.texture && h++, t.castShadow && f++), t instanceof XG.DayLight && (r++, s++, t.castShadow && u++), t instanceof XG.DayLightCube && (r++, d++, t.castShadow && u++), t instanceof XG.SphereLight && (i++, t.castShadow && p++), t instanceof XG.PointLight && a++, t instanceof XG.TubeLight && o++, t instanceof XG.HemisphereLight && s++, t instanceof XG.ImageLight && d++);
        var g = 0,
            S = g + u,
            x = S + c,
            G = x + f,
            M = {
                directional: r,
                point: a,
                sphere: i,
                tube: o,
                spot: n,
                hemi: s,
                area: l,
                areaTextures: h,
                image: d,
                dirIndexOffset: g,
                spotIndexOffset: S,
                areaIndexOffset: x,
                sphereIndexOffset: G
            };
        return M
    }

    function ht(e) {
        var t, r, a, i = 0;
        for (t = 0, r = e.length; r > t; t++) a = e[t], a.castShadow && (a instanceof XG.SphereLight && i++, a instanceof XG.SpotLight && i++, a instanceof XG.AreaLight && i++, (a instanceof XG.DirectionalLight || a instanceof XG.DayLight || a instanceof XG.DayLightCube) && !a.shadowCascade && i++);
        return i
    }

    function dt(e, t) {
        var r = _t.createFramebuffer(),
            a = _t.createTexture();
        _t.activeTexture(_t.TEXTURE0), _t.bindTexture(_t.TEXTURE_2D, a), _t.texImage2D(_t.TEXTURE_2D, 0, e, 2, 2, 0, e, t, null), _t.bindFramebuffer(_t.FRAMEBUFFER, r), _t.framebufferTexture2D(_t.FRAMEBUFFER, _t.COLOR_ATTACHMENT0, _t.TEXTURE_2D, a, 0);
        var i = _t.checkFramebufferStatus(_t.FRAMEBUFFER);
        return _t.bindFramebuffer(_t.FRAMEBUFFER, null), _t.bindTexture(_t.TEXTURE_2D, null), Dr[0] = -1, i === _t.FRAMEBUFFER_COMPLETE
    }

    function ut() {
        var e = _t.createFramebuffer(),
            t = _t.createTexture();
        _t.activeTexture(_t.TEXTURE0), _t.bindTexture(_t.TEXTURE_2D, t), _t.texImage2D(_t.TEXTURE_2D, 0, _t.DEPTH_COMPONENT, 2, 2, 0, _t.DEPTH_COMPONENT, XG.UnsignedIntType, null), _t.bindFramebuffer(_t.FRAMEBUFFER, e), _t.framebufferTexture2D(_t.FRAMEBUFFER, _t.DEPTH_ATTACHMENT, _t.TEXTURE_2D, t, 0);
        var r = _t.checkFramebufferStatus(_t.FRAMEBUFFER);
        return _t.bindFramebuffer(_t.FRAMEBUFFER, null), _t.bindTexture(_t.TEXTURE_2D, null), Dr[0] = -1, r === _t.FRAMEBUFFER_COMPLETE
    }

    function ct() {
        try {
            var e = {
                alpha: gt,
                premultipliedAlpha: St,
                antialias: xt,
                stencil: Mt,
                depth: yt,
                preserveDrawingBuffer: wt
            };
            if (_t = mt.getContext("webgl", e) || mt.getContext("experimental-webgl", e), null === _t) throw "Error creating WebGL context."
        } catch (t) {
            console.error(t)
        }
        Tt = _t.getExtension("OES_texture_float"), bt = _t.getExtension("OES_texture_half_float"), Pt = _t.getExtension("OES_texture_float_linear"), Lt = _t.getExtension("OES_texture_half_float_linear"), Et = _t.getExtension("OES_standard_derivatives"), Vt = _t.getExtension("OES_element_index_uint"), Ft = _t.getExtension("EXT_texture_filter_anisotropic") || _t.getExtension("WEBKIT_EXT_texture_filter_anisotropic"), It = _t.getExtension("WEBGL_compressed_texture_s3tc") || _t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"), Bt = _t.getExtension("WEBGL_compressed_texture_pvrtc") || _t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), Ot = _t.getExtension("WEBGL_compressed_texture_atc") || _t.getExtension("WEBKIT_WEBGL_compressed_texture_atc"), kt = _t.getExtension("WEBGL_compressed_texture_etc1") || _t.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"), Ut = _t.getExtension("WEBGL_depth_texture") || _t.getExtension("WEBKIT_WEBGL_depth_texture"), Ht = _t.getExtension("WEBGL_draw_buffers") || _t.getExtension("WEBKIT_EXT_draw_buffers"), Nt = _t.getExtension("EXT_frag_depth"), Rt = _t.getExtension("EXT_shader_texture_lod"), zt = _t.getExtension("WEBGL_debug_shaders"), null === Tt && console.log("XG: float textures not supported."), null === bt && console.log("XG: half float textures not supported."), null === Pt && console.log("XG: linear filtering for float textures not supported."), null === Lt && console.log("XG: linear filtering for half float textures not supported."), null === Et && console.log("XG: standard derivatives not supported."), null === Ft && console.log("XG: anisotropic texture filtering not supported."), null === It && console.log("XG: S3TC compressed textures not supported."), null === Vt && console.log("XG: 32-bit unsigned integer indices not supported."), null === Ut && console.log("XG: depth texture not supported."), null === Ht && console.log("XG: multiple render targets not supported."), null === Nt && console.log("XG: fragment depth setting not supported."), null === Rt && console.log("XG: fragment shader texture LOD not supported.")
    }

    function ft() {
        _t.clearColor(0, 0, 0, 1), _t.clearDepth(1), _t.clearStencil(0), _t.enable(_t.DEPTH_TEST), _t.depthFunc(_t.LEQUAL), _t.frontFace(_t.CCW), _t.cullFace(_t.BACK), _t.enable(_t.CULL_FACE), _t.enable(_t.BLEND), _t.blendEquation(_t.FUNC_ADD), _t.blendFunc(_t.SRC_ALPHA, _t.ONE_MINUS_SRC_ALPHA), _t.disable(_t.STENCIL_TEST), _t.clearColor(Dt.r, Dt.g, Dt.b, Xt)
    }

    function pt() {
        Wt.shadowMapPlugin = new XG.ShadowMapPlugin, Wt.addPrePlugin(Wt.shadowMapPlugin)
    }
    e = e || {};
    var mt = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
        vt = void 0 !== e.precision ? e.precision : "highp",
        gt = void 0 !== e.alpha ? e.alpha : !1,
        St = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha : !0,
        xt = void 0 !== e.antialias ? e.antialias : !1,
        Gt = void 0 !== e.dither ? e.dither : !1,
        Mt = void 0 !== e.stencil ? e.stencil : !0,
        yt = void 0 !== e.depth ? e.depth : !0,
        wt = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer : !1,
        Dt = new XG.Color(void 0 !== e.clearColor ? e.clearColor : 0),
        Xt = void 0 !== e.clearAlpha ? e.clearAlpha : 0,
        Ct = void 0 !== e.scale ? e.scale : 1,
        At = void 0 !== e.tonemapping ? e.tonemapping : XG.SimpleOperator;
    this.brightness = void 0 !== e.brightness ? e.brightness : 1, this.whitePoint = void 0 !== e.whitePoint ? e.whitePoint : 1, this.domElement = mt, this.context = null, this.devicePixelRatio = void 0 !== e.devicePixelRatio ? e.devicePixelRatio : void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.autoUpdateObjects = !0, this.autoUpdateScene = !0, this.autoUpdateView = !0, this.gammaInput = !0, this.gammaOutput = !1, this.physicallyBasedShading = !0, this.specularBRDF = XG.GGXBRDF, this.shadowMapEnabled = !1, this.shadowMapAutoUpdate = !0, this.shadowMapType = XG.PCFSoftShadowMap, this.shadowMapCullFace = XG.CullFaceFront, this.shadowMapDebug = !1, this.shadowMapCascade = !1, this.shadowMapUseDepthTextures = !1, this.shadowMapDepthTextureType = XG.UnsignedIntType, this.shadowMapSlopeDepthBias = !1, this.shadowMapSlopeScale = 2, this.shadowMapSlopeBias = 0, this.shadowMapSlopeMax = .001, this.maxMorphTargets = 4, this.maxMorphNormals = 4, this.autoScaleCubemaps = !0, this.renderPluginsPre = [], this.renderPluginsPost = [], this.info = {
        memory: {
            programs: 0,
            geometries: 0,
            textures: 0
        },
        render: {
            calls: 0,
            vertices: 0,
            faces: 0,
            points: 0
        }
    };
    var _t, Tt, bt, Pt, Lt, Et, Ft, Rt, Ut, Nt, It, Bt, Ot, kt, Vt, Ht, zt, Wt = this,
        jt = [],
        qt = 0,
        Kt = null,
        Zt = null,
        Yt = -1,
        Qt = null,
        Jt = null,
        $t = 0,
        er = 0,
        tr = -1,
        rr = -1,
        ar = -1,
        ir = -1,
        or = -1,
        nr = -1,
        sr = -1,
        lr = -1,
        hr = -1,
        dr = -1,
        ur = null,
        cr = null,
        fr = null,
        pr = 0,
        mr = 0,
        vr = 0,
        gr = 0,
        Sr = 0,
        xr = 0,
        Gr = {},
        Mr = [],
        yr = {},
        wr = [],
        Dr = [],
        Xr = new XG.Frustum,
        Cr = new XG.Matrix4,
        Ar = new XG.Vector3,
        _r = new XG.Vector3,
        Tr = new XG.Vector3,
        br = new XG.Vector3,
        Pr = new XG.Vector3,
        Lr = new XG.Vector3,
        Er = !0,
        Fr = {
            directional: {
                length: 0,
                colors: [],
                positionsNorm: [],
                positionsFull: [],
                pars: []
            },
            point: {
                length: 0,
                colors: [],
                positions: [],
                distances: []
            },
            sphere: {
                length: 0,
                colors: [],
                positions: [],
                pars: []
            },
            tube: {
                length: 0,
                colors: [],
                positions0: [],
                positions1: [],
                pars: []
            },
            spot: {
                length: 0,
                colors: [],
                positions: [],
                directions: [],
                pars: []
            },
            area: {
                length: 0,
                colors: [],
                positions: [],
                normals: [],
                rights: [],
                ups: [],
                attenuations: [],
                pars: [],
                textures: []
            },
            hemi: {
                length: 0,
                skyColors: [],
                groundColors: [],
                positions: []
            },
            image: {
                length: 0,
                positions: [],
                sizes: [],
                texturesDiffuse: [],
                texturesSpecular: [],
                texturesMip: [],
                pars: []
            },
            shadowCasters: []
        },
        Rr = new Uint8Array([0, 0, 0, 255]);
    ct(), ft(), this.context = _t; {
        var Ur = _t.getParameter(_t.MAX_TEXTURE_IMAGE_UNITS),
            Nr = _t.getParameter(_t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            Ir = (_t.getParameter(_t.MAX_TEXTURE_SIZE), _t.getParameter(_t.MAX_CUBE_MAP_TEXTURE_SIZE)),
            Br = Ft ? _t.getParameter(Ft.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0,
            Or = Nr > 0,
            kr = Or && Tt,
            Vr = !!Tt,
            Hr = !!bt,
            zr = !!Pt,
            Wr = !!Lt,
            jr = !!Ut,
            qr = !!Ht,
            Kr = !!Nt,
            Zr = !!Vt,
            Yr = !!Et,
            Qr = !!Rt;
        It || Bt || Ot || kt ? _t.getParameter(_t.COMPRESSED_TEXTURE_FORMATS) : []
    }
    XG.elementIndexUintAvailable = !!Vt; {
        var Jr = _t.getShaderPrecisionFormat(_t.VERTEX_SHADER, _t.HIGH_FLOAT),
            $r = _t.getShaderPrecisionFormat(_t.VERTEX_SHADER, _t.MEDIUM_FLOAT),
            ea = (_t.getShaderPrecisionFormat(_t.VERTEX_SHADER, _t.LOW_FLOAT), _t.getShaderPrecisionFormat(_t.FRAGMENT_SHADER, _t.HIGH_FLOAT)),
            ta = _t.getShaderPrecisionFormat(_t.FRAGMENT_SHADER, _t.MEDIUM_FLOAT);
        _t.getShaderPrecisionFormat(_t.FRAGMENT_SHADER, _t.LOW_FLOAT), _t.getShaderPrecisionFormat(_t.VERTEX_SHADER, _t.HIGH_INT), _t.getShaderPrecisionFormat(_t.VERTEX_SHADER, _t.MEDIUM_INT), _t.getShaderPrecisionFormat(_t.VERTEX_SHADER, _t.LOW_INT), _t.getShaderPrecisionFormat(_t.FRAGMENT_SHADER, _t.HIGH_INT), _t.getShaderPrecisionFormat(_t.FRAGMENT_SHADER, _t.MEDIUM_INT), _t.getShaderPrecisionFormat(_t.FRAGMENT_SHADER, _t.LOW_INT)
    }
    console.log("XG: render target support autodetection START (please ignore following warnings)");
    var ra = dt(_t.RGB, _t.UNSIGNED_BYTE),
        aa = Tt && dt(_t.RGB, _t.FLOAT),
        ia = Tt && dt(_t.RGBA, _t.FLOAT),
        oa = Tt && dt(_t.LUMINANCE, _t.FLOAT),
        na = Tt && dt(_t.ALPHA, _t.FLOAT),
        sa = Tt && dt(_t.LUMINANCE_ALPHA, _t.FLOAT),
        la = bt && dt(_t.RGB, bt.HALF_FLOAT_OES),
        ha = bt && dt(_t.RGBA, bt.HALF_FLOAT_OES),
        da = bt && dt(_t.LUMINANCE, bt.HALF_FLOAT_OES),
        ua = bt && dt(_t.ALPHA, bt.HALF_FLOAT_OES),
        ca = bt && dt(_t.LUMINANCE_ALPHA, bt.HALF_FLOAT_OES),
        fa = jr && ut();
    console.log("XG: render target support autodetection END");
    var pa = Jr.precision > 0 && ea.precision > 0,
        ma = $r.precision > 0 && ta.precision > 0;
    "highp" !== vt || pa || (ma ? (vt = "mediump", console.warn("XG.ForwardRenderer: highp not supported, using mediump")) : (vt = "lowp", console.warn("XG.ForwardRenderer: highp and mediump not supported, using lowp"))), "mediump" !== vt || ma || (vt = "lowp", console.warn("XG.ForwardRenderer: mediump not supported, using lowp"));
    var va = !1;
    this.getContext = function() {
        return _t
    }, this.supportsStandardDerivatives = function() {
        return Yr
    }, this.supportsElementIndexUint = function() {
        return Zr
    }, this.supportsFloatTextures = function() {
        return Vr
    }, this.supportsHalfFloatTextures = function() {
        return Hr
    }, this.supportsFloatTexturesLinear = function() {
        return zr
    }, this.supportsHalfFloatTexturesLinear = function() {
        return Wr
    }, this.supportsVertexTextures = function() {
        return Or
    }, this.supportsRGBUnsignedByteRenderTarget = function() {
        return ra
    }, this.supportsLuminanceFloatRenderTarget = function() {
        return oa
    }, this.supportsAlphaFloatRenderTarget = function() {
        return na
    }, this.supportsLuminanceAlphaFloatRenderTarget = function() {
        return sa
    }, this.supportsRGBFloatRenderTarget = function() {
        return aa
    }, this.supportsRGBAFloatRenderTarget = function() {
        return ia
    }, this.supportsLuminanceHalfFloatRenderTarget = function() {
        return da
    }, this.supportsAlphaHalfFloatRenderTarget = function() {
        return ua
    }, this.supportsLuminanceAlphaHalfFloatRenderTarget = function() {
        return ca
    }, this.supportsRGBHalfFloatRenderTarget = function() {
        return la
    }, this.supportsRGBAHalfFloatRenderTarget = function() {
        return ha
    }, this.supportsDepthOnlyRenderTarget = function() {
        return fa
    }, this.supportsDepthTextures = function() {
        return jr
    }, this.supportsDrawBuffers = function() {
        return qr
    }, this.supportsFragDepth = function() {
        return Kr
    }, this.supportsShaderTextureLod = function() {
        return Qr
    }, this.getMaxAnisotropy = function() {
        return Br
    }, this.getPrecision = function() {
        return vt
    }, this.setSize = function(e, t) {
        mt.width = e * this.devicePixelRatio, mt.height = t * this.devicePixelRatio, mt.style.width = e + "px", mt.style.height = t + "px", this.setViewport(0, 0, mt.width, mt.height)
    }, this.setScale = function(e) {
        Ct = e
    }, this.setViewport = function(e, t, r, a) {
        pr = void 0 !== e ? e : 0, mr = void 0 !== t ? t : 0, vr = void 0 !== r ? r : mt.width, gr = void 0 !== a ? a : mt.height, _t.viewport(pr, mr, vr, gr)
    }, this.setScissor = function(e, t, r, a) {
        _t.scissor(e, t, r, a)
    }, this.enableScissorTest = function(e) {
        e ? _t.enable(_t.SCISSOR_TEST) : _t.disable(_t.SCISSOR_TEST)
    }, this.setClearColorHex = function(e, t) {
        Dt.setHex(e), Xt = t, At && Dt.copyTonemapped(Dt, At, Wt.brightness, Wt.whitePoint), _t.clearColor(Dt.r, Dt.g, Dt.b, Xt)
    }, this.setClearColor = function(e, t) {
        At ? Dt.copyTonemapped(e, At, Wt.brightness, Wt.whitePoint) : Dt.copy(e), Xt = t, _t.clearColor(Dt.r, Dt.g, Dt.b, Xt)
    }, this.getClearColor = function() {
        return Dt
    }, this.getClearAlpha = function() {
        return Xt
    }, this.clear = function(e, t, r) {
        var a = 0;
        (void 0 === e || e) && (a |= _t.COLOR_BUFFER_BIT), (void 0 === t || t) && (a |= _t.DEPTH_BUFFER_BIT), (void 0 === r || r) && (a |= _t.STENCIL_BUFFER_BIT), _t.clear(a)
    }, this.clearTarget = function(e, t, r, a) {
        this.setRenderTarget(e), this.clear(t, r, a)
    }, this.addPostPlugin = function(e) {
        e.init(this), this.renderPluginsPost.push(e)
    }, this.addPrePlugin = function(e) {
        e.init(this), this.renderPluginsPre.push(e)
    }, this.updateShadowMap = function(e, t) {
        Kt = null, ar = -1, hr = -1, dr = -1, Qt = -1, Yt = -1, Er = !0, tr = -1, rr = -1, this.shadowMapPlugin.update(e, t)
    };
    var ga = function(e) {
            var t = e.program;
            if (void 0 !== t) {
                e.program = void 0;
                var r, a, i, o = !1;
                for (r = 0, a = jt.length; a > r; r++)
                    if (i = jt[r], i.program === t) {
                        i.usedTimes--, 0 === i.usedTimes && (o = !0);
                        break
                    }
                if (o === !0) {
                    var n = [];
                    for (r = 0, a = jt.length; a > r; r++) i = jt[r], i.program !== t && n.push(i);
                    jt = n, _t.deleteProgram(t), Wt.info.memory.programs--
                }
            }
        },
        Sa = function(e) {
            for (var t = 0, r = e.attributesList.length; r > t; t++) {
                var a = e.attributesList[t];
                a.buffer || (a.buffer = _t.createBuffer())
            }
        },
        xa = function(e) {
            for (var t, r, a = e.dynamic ? _t.DYNAMIC_DRAW : _t.STATIC_DRAW, i = e.attributesList, o = 0, n = i.length; n > o; o++) r = i[o], r.needsUpdate && (t = "index" === r.name ? _t.ELEMENT_ARRAY_BUFFER : _t.ARRAY_BUFFER, _t.bindBuffer(t, r.buffer), _t.bufferData(t, r.array, a), r.needsUpdate = !1, e.dynamic || delete r.array)
        },
        Ga = function(e, t, a) {
            for (var i, o, n, s, l, h = t.virtualAttributesList, d = 0, u = h.length; u > d; d++) i = h[d], n = i.mapped, n && (o = e[i.name], 0 > o || (s = n.buffer, l = n.itemSize, r(o), _t.bindBuffer(_t.ARRAY_BUFFER, s), _t.vertexAttribPointer(o, l, _t.FLOAT, !1, 0, a * l * 4)))
        },
        Ma = function(e, t, r, a) {
            for (var i, n = r.numSupportedMorphTargets, s = [], l = e.morphTargetInfluences, h = 0, d = l.length; d > h; h++) i = l[h], i > 0 && s.push([i, h]);
            s.length > n ? (s.sort(o), s.length = n) : 0 === s.length && s.push([0, 0]), e.__morphTargetInfluencesArray || (e.__morphTargetInfluencesArray = new Float32Array(Wt.maxMorphTargets));
            for (var u, c, f = e.__morphTargetInfluencesArray, p = t.virtualAttributes, m = t.attributesList, v = t.morphTargets, g = 0; n > g;) s[g] ? (u = s[g][1], c = v[u].index, p["morphTarget" + g].mapped = m[c], p["morphNormal" + g].mapped = m[c + 1], f[g] = l[u]) : f[g] = 0, g++;
            null !== a.uniforms.morphTargetInfluences && _t.uniform1fv(a.uniforms.morphTargetInfluences, f)
        };
    this.renderImmediateGeometry = function(e, t, r) {
        e.hasPositions && !e.__webglVertexBuffer && (e.__webglVertexBuffer = _t.createBuffer()), e.hasNormals && !e.__webglNormalBuffer && (e.__webglNormalBuffer = _t.createBuffer()), e.hasUvs && !e.__webglUvBuffer && (e.__webglUvBuffer = _t.createBuffer()), e.hasColors && !e.__webglColorBuffer && (e.__webglColorBuffer = _t.createBuffer());
        var a = t.attributes;
        e.hasPositions && a.position >= 0 && (_t.bindBuffer(_t.ARRAY_BUFFER, e.__webglVertexBuffer), _t.bufferData(_t.ARRAY_BUFFER, e.positionArray, _t.STREAM_DRAW), _t.enableVertexAttribArray(a.position), _t.vertexAttribPointer(a.position, 3, _t.FLOAT, !1, 0, 0)), e.hasNormals && a.normal >= 0 && (_t.bindBuffer(_t.ARRAY_BUFFER, e.__webglNormalBuffer), _t.bufferData(_t.ARRAY_BUFFER, e.normalArray, _t.STREAM_DRAW), _t.enableVertexAttribArray(a.normal), _t.vertexAttribPointer(a.normal, 3, _t.FLOAT, !1, 0, 0)), e.hasUvs && a.uv >= 0 && (r.map || r.lightMap || r.bumpMap || r.normalMap || r.bumpDetailMap || r.normalDetailMap || r.normalGlossMap) && (_t.bindBuffer(_t.ARRAY_BUFFER, e.__webglUvBuffer), _t.bufferData(_t.ARRAY_BUFFER, e.uvArray, _t.STREAM_DRAW), _t.enableVertexAttribArray(a.uv), _t.vertexAttribPointer(a.uv, 2, _t.FLOAT, !1, 0, 0)), e.hasColors && a.color >= 0 && r.vertexColors && (_t.bindBuffer(_t.ARRAY_BUFFER, e.__webglColorBuffer), _t.bufferData(_t.ARRAY_BUFFER, e.colorArray, _t.STREAM_DRAW), _t.enableVertexAttribArray(a.color), _t.vertexAttribPointer(a.color, 3, _t.FLOAT, !1, 0, 0)), _t.drawArrays(_t.TRIANGLES, 0, e.count), e.count = 0
    }, this.renderGeometry = function(e, i, o) {
        var n = e.program,
            s = n.attributes,
            l = !1,
            h = 16777215 * i.id + n.id;
        h !== Qt && (Qt = h, l = !0), l && a(), o.morphTargetInfluences && e.morphTargets && Ma(o, i, e, n);
        var d, u, c, f, p = i.attributesList;
        if (o instanceof XG.Mesh) {
            var m = i.attributes.index;
            if (m) {
                var v = i.offsets;
                v.length > 1 && (l = !0);
                for (var g = 0, S = v.length; S > g; g++) {
                    var x = v[g];
                    if (l) {
                        for (var G = x.index, M = 0, y = p.length; y > M; M++) f = p[M], f.attached && (c = f.name, "index" !== c && (d = s[c], 0 > d || void 0 === d || (u = f.itemSize, r(d), _t.bindBuffer(_t.ARRAY_BUFFER, f.buffer), _t.vertexAttribPointer(d, u, _t.FLOAT, !1, 0, G * u * 4))));
                        _t.bindBuffer(_t.ELEMENT_ARRAY_BUFFER, m.buffer)
                    }
                    Ga(s, i, x.index), t(), _t.drawElements(_t.TRIANGLES, x.count, m.type, x.start * m.typeSize)
                }
            } else {
                if (l)
                    for (var g = 0, S = p.length; S > g; g++) f = p[g], f.attached && (d = s[f.name], 0 > d || void 0 === d || (r(d), _t.bindBuffer(_t.ARRAY_BUFFER, f.buffer), _t.vertexAttribPointer(d, f.itemSize, _t.FLOAT, !1, 0, 0)));
                Ga(s, i, 0), t();
                var w = o instanceof XG.TriangleStrip ? _t.TRIANGLE_STRIP : _t.TRIANGLES,
                    D = i.attributes.position;
                _t.drawArrays(w, 0, D.numItems / 3)
            }
        } else if (o instanceof XG.Particles) {
            if (l)
                for (var g = 0, S = p.length; S > g; g++) f = p[g], f.attached && (d = s[f.name], 0 > d || void 0 === d || (r(d), _t.bindBuffer(_t.ARRAY_BUFFER, f.buffer), _t.vertexAttribPointer(d, f.itemSize, _t.FLOAT, !1, 0, 0)));
            t();
            var D = i.attributes.position;
            _t.drawArrays(_t.POINTS, 0, D.numItems / 3)
        }
    };
    var ya = function(e, t) {
            for (var r, a, o, n = 0, s = 0, l = e.length; l > s; s++) r = e[s], a = r.object, o = r.geometry, r.render = !1, r.id = a.id, a.visible && a.enabled && ((a instanceof XG.Mesh || a instanceof XG.Particles) && a.frustumCulled && !Xr.contains(a, o) || (T(a, t), d(r), r.render = !0, Wt.sortObjects === !0 && (null !== a.renderDepth ? r.z = a.renderDepth : (Ar.copy(a.matrixWorld.getPosition()), Cr.multiplyVector3(Ar), r.z = Ar.data[2])), n += 1));
            Wt.sortObjects && n > 0 && e.sort(i)
        },
        wa = function(e, t) {
            for (var r, a, i = 0, o = e.length; o > i; i++) r = e[i], a = r.object, r.render = !1, a.visible && a.enabled && (Xr.contains(a, a) || !a.frustumCulled) && (T(a, t), h(r), r.render = !0)
        },
        Da = function(e) {
            for (var t, r = 0, a = e.length; a > r; r++) t = e[r], t.render && d(t)
        },
        Xa = function(e) {
            for (var t, r = 0, a = e.length; a > r; r++) t = e[r], t.render && h(t)
        };
    this.renderCube = function(e, t, r) {
        var a = r.generateMipmaps;
        r.generateMipmaps = !1, r.activeCubeFace = 0, this.render(e, t.px, r), r.activeCubeFace = 1, this.render(e, t.nx, r), r.activeCubeFace = 2, this.render(e, t.py, r), r.activeCubeFace = 3, this.render(e, t.ny, r), r.activeCubeFace = 4, this.render(e, t.pz, r), r.generateMipmaps = a, r.activeCubeFace = 5, this.render(e, t.nz, r)
    }, this.render = function(e, t, r, a) {
        if (t instanceof XG.Camera == !1) return void console.error("XG.ForwardRenderer.render: camera is not an instance of XG.Camera.");
        var i = e.__lights,
            o = e.fog,
            h = e.heightFog;
        Yt = -1, Er = !0, Dr.length = 0, this.autoUpdateScene && e.updateMatrixWorld(), this.autoUpdateView && (void 0 === t.parent && t.updateMatrixWorld(), t.matrixWorldInverse.getInverse(t.matrixWorld), Cr.multiply(t.projectionMatrix, t.matrixWorldInverse), Xr.setFromMatrix(Cr)), this.autoUpdateObjects && this.initWebGLObjects(e), va || (pt(), va = !0), n(this.renderPluginsPre, e, t), this.setRenderTarget(r), (this.autoClear || a) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), this.autoUpdateView ? (ya(e.__webglObjects, t), wa(e.__webglObjectsImmediate, t)) : (Da(e.__webglObjects), Xa(e.__webglObjectsImmediate)), this.setBlending(XG.NoBlending), s(e.__webglObjects, !0, "opaque", t, i, o, h, !1), l(e.__webglObjectsImmediate, "opaque", t, i, o, h, !1), s(e.__webglObjects, !1, "transparent", t, i, o, h, !0), l(e.__webglObjectsImmediate, "transparent", t, i, o, h, !0), n(this.renderPluginsPost, e, t), r && r.generateMipmaps && r.minFilter !== XG.NearestFilter && r.minFilter !== XG.LinearFilter && ot(r), this.setDepthTest(!0), this.setDepthWrite(!0)
    }, this.renderImmediateObject = function(e, t) {
        var r = e.program;
        Qt = -1, Wt.setMaterialFaces(e), t.immediateRenderCallback ? t.immediateRenderCallback(r, _t, Xr) : t.render(function(t) {
            Wt.renderImmediateGeometry(t, r, e)
        })
    }, this.initWebGLObjects = function(e) {
        for (e.__webglObjects || (e.__webglObjects = [], e.__webglObjectsImmediate = []); e.__objectsAdded.length;) u(e.__objectsAdded[0], e), e.__objectsAdded.splice(0, 1);
        for (; e.__objectsRemoved.length;) m(e.__objectsRemoved[0], e), e.__objectsRemoved.splice(0, 1);
        for (var t = 0, r = e.__webglObjects.length; r > t; t++) p(e.__webglObjects[t].object)
    }, this.initMaterial = function(e, t, r, a, i) {
        var o;
        e instanceof XG.EmissiveMaterial ? o = "emissive" : e instanceof XG.PhongMaterial ? o = "phong" : e instanceof XG.DynamicParticleMaterial && (o = "dynamicParticle"), o && g(e, XG.ShaderLib[o]);
        var n, s, l = lt(t),
            h = ht(t),
            d = st(a),
            u = {
                map: !!e.map,
                lightMap: !!e.lightMap,
                bumpMap: !!e.bumpMap,
                normalMap: !!e.normalMap,
                normalGlossMap: !!e.normalGlossMap,
                bumpDetailMap: !!e.bumpDetailMap,
                normalDetailMap: !!e.normalDetailMap,
                glossMap: !!e.glossMap,
                specularMap: !!e.specularMap,
                vertexColors: e.vertexColors,
                fog: r,
                useFog: e.fog,
                isParticle: e.particle,
                sizeAttenuation: e.particle && e.particleSizeAttenuation,
                interpolateParticleFrames: e.particle && e.interpolateFrames && e.numFrames > 1,
                skinning: e.skinning,
                maxBones: d,
                useVertexTexture: kr && a && a.useVertexTexture,
                boneTextureWidth: a && a.boneTextureWidth,
                boneTextureHeight: a && a.boneTextureHeight,
                morphTargets: e.morphTargets && this.maxMorphTargets > 0,
                morphNormals: e.morphNormals && this.maxMorphNormals > 0,
                maxMorphTargets: this.maxMorphTargets,
                maxMorphNormals: this.maxMorphNormals,
                maxDirLights: l.directional,
                maxPointLights: l.point,
                maxSphereLights: l.sphere,
                maxTubeLights: l.tube,
                maxSpotLights: l.spot,
                maxHemiLights: l.hemi,
                maxAreaLights: l.area,
                areaTextures: l.areaTextures > 0,
                maxImageLights: l.image,
                maxShadows: h,
                shadowMapEnabled: this.shadowMapEnabled && a.receiveShadow && h > 0,
                shadowMapType: this.shadowMapType,
                shadowMapDebug: this.shadowMapDebug,
                shadowMapCascade: this.shadowMapCascade,
                areaIndexOffset: l.areaIndexOffset,
                spotIndexOffset: l.spotIndexOffset,
                dirIndexOffset: l.dirIndexOffset,
                sphereIndexOffset: l.sphereIndexOffset,
                alphaTest: e.alphaTest,
                metal: e.metal,
                parallax: e.parallax,
                parallaxRefineSteps: e.parallaxRefineSteps,
                wrapAround: e.wrapAround,
                wrapAroundSkin: e.wrapAroundSkin,
                doubleSided: e.side === XG.DoubleSide,
                flipSided: e.side === XG.BackSide,
                osxHack: navigator.platform.toLowerCase().indexOf("mac") >= 0
            },
            c = {
                position: !0,
                normal: !0,
                uv: !0,
                uv2: !0,
                tangent: !0,
                color: !0
            };
        for (n = 0; n < this.maxMorphTargets; n++) c["morphTarget" + n] = !0;
        for (n = 0; n < this.maxMorphNormals; n++) c["morphNormal" + n] = !0;
        if (i) {
            for (s in i.attributes) c[s] = !0;
            for (s in i.virtualAttributes) c[s] = !0
        }
        var f = {
            viewMatrix: !0,
            viewInverseMatrix: !0,
            modelViewMatrix: !0,
            projectionMatrix: !0,
            normalMatrix: !0,
            modelMatrix: !0,
            cameraPosition: !0,
            morphTargetInfluences: !0
        };
        u.useVertexTexture ? f.boneTexture = !0 : f.boneGlobalMatrices = !0;
        for (s in e.uniforms) f[s] = !0;
        e.program = O(o, e, f, c, u);
        var p = e.program.uniforms;
        e.uniformsListUnique = [], e.uniformsListShared = [];
        for (var m in e.uniforms) {
            var v = p[m];
            if (v) {
                var S = e.uniforms[m],
                    x = [S, v];
                S.shared ? e.uniformsListShared.push(x) : e.uniformsListUnique.push(x)
            }
        }
        if (e.morphTargets) {
            var G = e.program.attributes;
            for (e.numSupportedMorphTargets = 0, n = 0; n < this.maxMorphTargets; n++) G["morphTarget" + n] >= 0 && e.numSupportedMorphTargets++
        }
    }, this.setProgram = function(e, t, r, a, i, o, n) {
        $t = 0, i.needsUpdate && (i.program && ga(i), Wt.initMaterial(i, t, r, o, n), i.needsUpdate = !1);
        var s = !1,
            l = !1,
            h = i.program;
        h !== Kt && (_t.useProgram(h), Kt = h, s = !0, l = !0), i.id !== Yt && (Yt = i.id, s = !0);
        var d = h.uniforms,
            u = i.uniforms;
        if (i.skinning)
            if (kr && o.useVertexTexture) {
                if (null !== d.boneTexture) {
                    var c = A();
                    _t.uniform1i(d.boneTexture, c), Wt.setTexture(o.boneTexture, c)
                }
            } else null !== d.boneGlobalMatrices && _t.uniformMatrix4fv(d.boneGlobalMatrices, !1, o.boneMatrices);
        if (!l && e === Jt || null === d.projectionMatrix || (_t.uniformMatrix4fv(d.projectionMatrix, !1, e.projectionMatrix.elements), e !== Jt && (Jt = e)), l) {
            if (r && i.fog && G(u, r, e), a && i.defines && i.defines.USE_HEIGHT_FOG && M(u, a), i.lights && (Er && (U(t, e), Er = !1), w(u, Fr)), o.receiveShadow && !i._shadowPass && u.shadowMatrix && null !== d.shadowMatrix && X(u, Fr.shadowCasters), null !== d.viewMatrix && _t.uniformMatrix4fv(d.viewMatrix, !1, e.matrixWorldInverse.elements), null !== d.viewInverseMatrix && _t.uniformMatrix4fv(d.viewInverseMatrix, !1, e.matrixWorld.elements), null !== d.cameraPosition) {
                var f = e.matrixWorld.getPosition();
                _t.uniform3fv(d.cameraPosition, f.data)
            }
            _(i.uniformsListShared), er = $t
        } else $t = er;
        return s && (i.particle && x(u, i, e), (i instanceof XG.EmissiveMaterial || i instanceof XG.PhongMaterial || i instanceof XG.DynamicParticleMaterial) && S(u, i), i instanceof XG.PhongMaterial && y(u, i), _(i.uniformsListUnique)), C(d, o), h
    }, this.setFaceCulling = function(e, t) {
        e === XG.CullFaceNone ? _t.disable(_t.CULL_FACE) : (_t.frontFace(t === XG.FrontFaceDirectionCW ? _t.CW : _t.CCW), _t.cullFace(e === XG.CullFaceBack ? _t.BACK : e === XG.CullFaceFront ? _t.FRONT : _t.FRONT_AND_BACK), _t.enable(_t.CULL_FACE))
    }, this.setMaterialFaces = function(e) {
        var t = e.side === XG.DoubleSide,
            r = e.side === XG.BackSide;
        tr !== t && (t ? _t.disable(_t.CULL_FACE) : _t.enable(_t.CULL_FACE), tr = t), rr !== r && (_t.frontFace(r ? _t.CW : _t.CCW), rr = r)
    }, this.setDepthTest = function(e) {
        hr !== e && (e ? _t.enable(_t.DEPTH_TEST) : _t.disable(_t.DEPTH_TEST), hr = e)
    }, this.setDepthWrite = function(e) {
        dr !== e && (_t.depthMask(e), dr = e)
    }, this.setPolygonOffset = function(e, t, r) {
        ur !== e && (e ? _t.enable(_t.POLYGON_OFFSET_FILL) : _t.disable(_t.POLYGON_OFFSET_FILL), ur = e), (cr !== t || fr !== r) && (_t.polygonOffset(t, r), cr = t, fr = r)
    }, this.setBlending = function(e, t, r, a, i, o) {
        e !== ar && (e === XG.NoBlending ? _t.disable(_t.BLEND) : e === XG.AdditiveBlending ? (_t.enable(_t.BLEND), _t.blendEquation(_t.FUNC_ADD), _t.blendFunc(_t.SRC_ALPHA, _t.ONE)) : e === XG.SubtractiveBlending ? (_t.enable(_t.BLEND), _t.blendEquation(_t.FUNC_ADD), _t.blendFunc(_t.ZERO, _t.ONE_MINUS_SRC_COLOR)) : e === XG.MultiplyBlending ? (_t.enable(_t.BLEND), _t.blendEquation(_t.FUNC_ADD), _t.blendFunc(_t.ZERO, _t.SRC_COLOR)) : e === XG.CustomBlending ? _t.enable(_t.BLEND) : (_t.enable(_t.BLEND), _t.blendEquationSeparate(_t.FUNC_ADD, _t.FUNC_ADD), _t.blendFuncSeparate(_t.SRC_ALPHA, _t.ONE_MINUS_SRC_ALPHA, _t.ONE, _t.ONE_MINUS_SRC_ALPHA)), ar = e), e === XG.CustomBlending ? (t !== ir && (_t.blendEquation(t), ir = t), (r !== or || a !== nr || i !== sr || o !== lr) && (_t.blendFuncSeparate(r, a, i, o), or = r, nr = a, sr = i, lr = o)) : (ir = null, or = null, nr = null, sr = null, lr = null)
    }, this.setTexture = function(e, t) {
        e instanceof XG.Texture && (e.__webglInit || (e.__webglInit = !0, e.__webglTexture = _t.createTexture(), Wt.info.memory.textures++, _t.activeTexture(_t.TEXTURE0 + t), _t.bindTexture(_t.TEXTURE_2D, e.__webglTexture), Dr[t] = e.id, _t.texImage2D(_t.TEXTURE_2D, 0, _t.RGBA, 1, 1, 0, _t.RGBA, _t.UNSIGNED_BYTE, Rr)), e.needsUpdate && W(e, t)), Dr[t] !== e.id && e.__webglTexture && (_t.activeTexture(_t.TEXTURE0 + t), _t.bindTexture(_t.TEXTURE_2D, e.__webglTexture), Dr[t] = e.id)
    }, this.setRenderTarget = function(e) {
        {
            var t, r, a, i, o, n = e instanceof XG.RenderTargetCube;
            e instanceof XG.RenderTargetArray
        }
        e ? (it(e), t = n ? e.__webglFramebuffer[e.activeCubeFace] : e.__webglFramebuffer, r = e.width, a = e.height, i = 0, o = 0) : (t = null, r = vr, a = gr, i = pr, o = mr), t !== Zt && (_t.bindFramebuffer(_t.FRAMEBUFFER, t), _t.viewport(i, o, r, a), Zt = t), Sr = r, xr = a
    }, void 0 !== e.width && void 0 !== e.height && this.setSize(e.width, e.height)
}, XG.DeferredRenderer = function(e) {
    var t = this,
        r = void 0 !== e.width ? e.width : 800,
        a = void 0 !== e.height ? e.height : 600,
        i = void 0 !== e.scale ? e.scale : 1,
        o = Math.floor(i * r),
        n = Math.floor(i * a),
        s = void 0 !== e.tonemapping ? e.tonemapping : XG.SimpleOperator,
        l = void 0 !== e.antialias ? e.antialias : !1,
        h = void 0 !== e.dither ? e.dither : !1,
        d = void 0 !== e.useMultipleRenderTargets ? e.useMultipleRenderTargets : !1,
        u = void 0 !== e.specularBRDF ? e.specularBRDF : XG.GGXBRDF;
    t.brightness = void 0 !== e.brightness ? e.brightness : 1, t.whitePoint = void 0 !== e.whitePoint ? e.whitePoint : 1, this.renderer = e.renderer, void 0 === this.renderer && (this.renderer = new XG.ForwardRenderer({
        alpha: !1,
        antialias: !1,
        depth: !1,
        stencil: !1,
        tonemapping: XG.NoOperator,
        scale: i
    }), this.renderer.setSize(r, a), this.renderer.setClearColorHex(0, 0), this.renderer.gammaInput = !0, this.renderer.gammaOutput = !1, this.renderer.specularBRDF = u, this.renderer.autoClear = !1);
    var c = this.renderer.devicePixelRatio;
    o = Math.floor(o * c), n = Math.floor(n * c), this.domElement = this.renderer.domElement, this.shadowMapEnabled = !1, this.shadowMapAutoUpdate = !0, this.shadowMapType = XG.PCFSoftShadowMap, this.shadowMapSlopeDepthBias = !1, this.shadowMapSlopeScale = 2, this.shadowMapSlopeBias = 0, this.shadowMapSlopeMax = .001, this.shadowMapProjectionBias = 1e-5, this.shadowMapCullFace = XG.CullFaceFront, this.shadowMapUseDepthTextures = !1, this.shadowMapDepthTextureType = XG.UnsignedIntType, this.shadowMapDepthTextureBias = 0, this.shadowMapCascadeUpdateThreshold = 2, this.shadowMapCascadeUpdateModulo = 2, this.shadowMapDebug = !1, this.transparentShadows = !1, this.particlesOffscreen = !1, this.particlesOffscreenScale = .5, this.particlesOit = !1, this.particlesShadows = !1, this.ssaoEnabled = !1, this.ssaoScale = .5, this.bloomEnabled = !1, this.bloomScale = .25, this.bloomStrength = 1, this.bloomThreshold = 1, this.dofEnabled = !1, this.dofFancy = !1, this.dofPhysical = !0, this.dofLensFstop = 4, this.dofLensFocalLength = 50, this.dofLensBlurScale = 50, this.dofLensMaxCoc = 1, this.dofLensApertureSides = 7, this.dofDebug = !1, this.dofAutofocus = !1, this.dofAutofocusPoint = new XG.Vector2(.5, .5), this.dofFocusDistance = 1, this.dofFocusWidth = 1, this.dofFocusRampWidth = 2, this.dofMaxBlur = .2, this.fogEnabled = !1, this.fogColor = new XG.Color(0), this.fogStrength = .1, this.fogStart = 100, this.specularMipFix = !1, this.useDepthTexture = !1, d && !this.renderer.supportsDrawBuffers() && (console.warn("XG.DeferredRenderer: can't use multiple render targets, falling back to multipass."), d = !1);
    var f, p, m, v, g, S, x, G, M, y, w, D, X, C, A, _, T, b, P, L, E, F, R, U, N, I, B, O, k, V, H, z, W, j = !1,
        q = this.renderer.context,
        K = new XG.Projector,
        Z = new XG.Vector3,
        Y = new XG.Vector3,
        Q = new XG.Color(0),
        J = new XG.Color(16777215),
        $ = new XG.Vector3(1, 1, 1),
        et = XG.DeferredShaders.combined,
        tt = XG.DeferredShaders.color,
        rt = XG.DeferredShaders.depth,
        at = XG.DeferredShaders.normalDepth,
        it = XG.DeferredShaders.composite,
        ot = [],
        nt = new XG.Color,
        st = 0,
        lt = [],
        ht = [],
        dt = new XG.ShaderMaterial({
            uniforms: XG.UniformsUtils.clone(at.uniforms),
            vertexShader: at.vertexShader,
            fragmentShader: at.fragmentShader,
            blending: XG.NoBlending
        }),
        ut = new XG.ShaderMaterial({
            uniforms: XG.UniformsUtils.clone(rt.uniforms),
            vertexShader: rt.vertexShader,
            fragmentShader: rt.fragmentShader,
            blending: XG.NoBlending
        }),
        ct = {},
        ft = {},
        pt = {},
        mt = {},
        vt = 0,
        gt = function(e, r) {
            var a = XG.UniformsUtils.clone(et.uniforms),
                i = {
                    USE_MAP: !!e.map,
                    USE_LIGHTMAP: !!e.lightMap,
                    USE_BUMPMAP: !!e.bumpMap,
                    USE_NORMALMAP: !!e.normalMap,
                    USE_NORMALGLOSSMAP: !!e.normalGlossMap,
                    USE_GLOSSMAP: !!e.glossMap,
                    USE_BUMPDETAILMAP: !!e.bumpDetailMap,
                    USE_NORMALDETAILMAP: !!e.normalDetailMap,
                    USE_SPECULARMAP: !!e.specularMap,
                    USE_PARALLAX: !!e.parallax,
                    PARTICLE: e.particle,
                    USE_PARTICLE_SIZEATTENUATION: e.particle && e.particleSizeAttenuation,
                    TEXTURE_DEPTH: t.useDepthTexture
                };
            e.parallax && e.parallaxRefineSteps > 0 && (i.PARALLAX_REFINE_STEPS = e.parallaxRefineSteps.toFixed(0).toString());
            var n = {
                WEBGL_draw_buffers: !0
            };
            (i.USE_BUMPMAP || i.USE_NORMALMAP || i.USE_NORMALGLOSSMAP || i.USE_NORMALDETAILMAP || i.USE_BUMPDETAILMAP) && (n.OES_standard_derivatives = !0);
            var s = new XG.ShaderMaterial({
                    fragmentShader: et.fragmentShader,
                    vertexShader: et.vertexShader,
                    uniforms: a,
                    defines: i,
                    extensions: n,
                    blending: XG.NoBlending
                }),
                l = void 0 !== e.color ? e.color : J,
                h = void 0 !== e.specular ? e.specular : Q,
                d = void 0 !== e.wrapRGB ? e.wrapRGB : $,
                u = void 0 !== e.shininess ? e.shininess : 1,
                c = void 0 !== e.wrapAround ? e.wrapAround ? -1 : 1 : 1;
            if (a.diffuse.value.setRGBA(l, c), a.specular.value.setRGBA(h, u), a.wrapRGB.value.copy(d), a.map.value = e.map, e.lightMap && (a.lightMap.value = e.lightMap), e.bumpMap && (a.bumpMap.value = e.bumpMap, a.bumpScale.value = e.bumpScale), (e.normalMap || e.normalGlossMap) && (a.normalMap.value = e.normalGlossMap ? e.normalGlossMap : e.normalMap, a.normalScale.value.copy(e.normalScale)), e.bumpDetailMap && (a.bumpDetailMap.value = e.bumpDetailMap), e.normalDetailMap && (a.normalDetailMap.value = e.normalDetailMap), (e.bumpDetailMap || e.normalDetailMap) && a.detailRepeatScale.value.set(e.detailRepeat.x, e.detailRepeat.y, e.detailScale), e.specularMap && (a.specularMap.value = e.specularMap), e.glossMap && (a.glossMap.value = e.glossMap), e.particle && (a.particleSize.value = e.particleSize, a.screenWidth.value = o), e.particle && e.particleSizeAttenuation && lt.push({
                    material: s
                }), e.parallax && (a.parallaxScale.value = e.parallaxScale), s.vertexColors = e.vertexColors, s.morphTargets = e.morphTargets, s.morphNormals = e.morphNormals, s.skinning = e.skinning, s.alphaTest = e.alphaTest, s.side = e.side, s.visible = e.visible, void 0 !== r) {
                var f = r.offset,
                    p = r.repeat;
                a.offsetRepeat.value.set(f.data[0], f.data[1], p.data[0], p.data[1])
            }
            return s
        },
        St = function(e, t) {
            var r = XG.UniformsUtils.clone(tt.uniforms),
                a = {
                    USE_MAP: !!e.map,
                    USE_LIGHTMAP: !!e.lightMap,
                    USE_SPECULARMAP: !!e.specularMap,
                    USE_NORMALGLOSSMAP: !!e.normalGlossMap,
                    USE_GLOSSMAP: !!e.glossMap,
                    USE_BUMPMAP: !!e.bumpMap && e.parallax,
                    USE_PARALLAX: !!e.parallax,
                    PARTICLE: e.particle,
                    USE_PARTICLE_SIZEATTENUATION: e.particle && e.particleSizeAttenuation
                };
            e.parallax && e.parallaxRefineSteps > 0 && (a.PARALLAX_REFINE_STEPS = e.parallaxRefineSteps.toFixed(0).toString());
            var i = {};
            (a.USE_BUMPMAP || a.USE_PARALLAX) && (i.OES_standard_derivatives = !0);
            var n = new XG.ShaderMaterial({
                    fragmentShader: tt.fragmentShader,
                    vertexShader: tt.vertexShader,
                    uniforms: r,
                    defines: a,
                    extensions: i
                }),
                s = void 0 !== e.color ? e.color : J,
                l = void 0 !== e.specular ? e.specular : Q,
                h = void 0 !== e.wrapRGB ? e.wrapRGB : $,
                d = void 0 !== e.shininess ? e.shininess : 1,
                u = void 0 !== e.wrapAround ? e.wrapAround ? -1 : 1 : 1;
            if (r.diffuse.value.setRGBA(s, u), r.specular.value.setRGBA(l, d), r.wrapRGB.value.copy(h), r.map.value = e.map, e.lightMap && (r.lightMap.value = e.lightMap), e.specularMap && (r.specularMap.value = e.specularMap), e.glossMap && (r.glossMap.value = e.glossMap), e.normalGlossMap && (r.normalMap.value = e.normalGlossMap), e.particle && (r.particleSize.value = e.particleSize, r.screenWidth.value = o), e.particle && e.particleSizeAttenuation && lt.push({
                    material: n
                }), e.parallax && (r.parallaxScale.value = e.parallaxScale, r.bumpMap.value = e.bumpMap), n.vertexColors = e.vertexColors, n.morphTargets = e.morphTargets, n.morphNormals = e.morphNormals, n.skinning = e.skinning, n.alphaTest = e.alphaTest, n.side = e.side, n.visible = e.visible, void 0 !== t) {
                var c = t.offset,
                    f = t.repeat;
                r.offsetRepeat.value.set(c.data[0], c.data[1], f.data[0], f.data[1])
            }
            return n
        },
        xt = function(e, t) {
            var r = {
                USE_BUMPMAP: !!e.bumpMap,
                USE_NORMALMAP: !!e.normalMap,
                USE_NORMALGLOSSMAP: !!e.normalGlossMap,
                USE_BUMPDETAILMAP: !!e.bumpDetailMap,
                USE_NORMALDETAILMAP: !!e.normalDetailMap,
                USE_PARALLAX: !!e.parallax,
                PARTICLE: e.particle,
                USE_PARTICLE_SIZEATTENUATION: e.particle && e.particleSizeAttenuation
            };
            e.parallax && e.parallaxRefineSteps > 0 && (r.PARALLAX_REFINE_STEPS = e.parallaxRefineSteps.toFixed(0).toString());
            var a = {};
            if ((r.USE_BUMPMAP || r.USE_NORMALMAP || r.USE_NORMALGLOSSMAP || r.USE_NORMALDETAILMAP || r.USE_BUMPDETAILMAP || r.USE_PARALLAX) && (a.OES_standard_derivatives = !0), e.morphTargets || e.skinning || e.bumpMap || e.normalMap || e.alphaTest || e.particle) {
                var i = XG.UniformsUtils.clone(at.uniforms),
                    n = new XG.ShaderMaterial({
                        uniforms: i,
                        vertexShader: at.vertexShader,
                        fragmentShader: at.fragmentShader,
                        blending: XG.NoBlending
                    });
                if (n.morphTargets = e.morphTargets, n.morphNormals = e.morphNormals, n.skinning = e.skinning, e.bumpMap && (i.bumpMap.value = e.bumpMap, i.bumpScale.value = e.bumpScale), (e.normalMap || e.normalGlossMap) && (i.normalMap.value = e.normalGlossMap ? e.normalGlossMap : e.normalMap, i.normalScale.value.copy(e.normalScale)), e.bumpDetailMap && (i.bumpDetailMap.value = e.bumpDetailMap), e.normalDetailMap && (i.normalDetailMap.value = e.normalDetailMap), (e.bumpDetailMap || e.normalDetailMap) && i.detailRepeatScale.value.set(e.detailRepeat.x, e.detailRepeat.y, e.detailScale), void 0 !== t) {
                    var s = t.offset,
                        l = t.repeat;
                    i.offsetRepeat.value.set(s.data[0], s.data[1], l.data[0], l.data[1])
                }
                e.alphaTest && e.map && (i.alphaMap.value = e.map), e.particle && (i.particleSize.value = e.particleSize, i.screenWidth.value = o, e.particleSizeAttenuation && lt.push({
                    material: n
                })), e.parallax && (i.parallaxScale.value = e.parallaxScale)
            } else var n = dt.clone();
            return n.defines = r, n.extensions = a, n.vertexColors = e.vertexColors, n.side = e.side, n.alphaTest = e.alphaTest, n.visible = e.visible, n
        },
        Gt = function(e, r) {
            var a = {
                    PARTICLE: e.particle,
                    USE_PARTICLE_SIZEATTENUATION: e.particle && e.particleSizeAttenuation,
                    SLOPE_DEPTH_BIAS: t.shadowMapSlopeDepthBias,
                    DEPTH_TEXTURES: t.shadowMapUseDepthTextures && t.renderer.supportsDepthTextures()
                },
                i = {};
            if (a.SLOPE_DEPTH_BIAS && !a.DEPTH_TEXTURES && (i.OES_standard_derivatives = !0), e.morphTargets || e.skinning || e.alphaTest || e.particle) {
                var n = XG.UniformsUtils.clone(rt.uniforms),
                    s = new XG.ShaderMaterial({
                        uniforms: n,
                        vertexShader: rt.vertexShader,
                        fragmentShader: rt.fragmentShader,
                        blending: XG.NoBlending
                    });
                if (s.morphTargets = e.morphTargets, s.skinning = e.skinning, void 0 !== r) {
                    var l = r.offset,
                        h = r.repeat;
                    n.offsetRepeat.value.set(l.data[0], l.data[1], h.data[0], h.data[1])
                }
                e.alphaTest && e.map && (n.alphaMap.value = e.map), e.particle && (n.particleSize.value = e.particleSize, n.screenWidth.value = o, e.particleSizeAttenuation && lt.push({
                    material: s
                }))
            } else var s = ut.clone();
            return t.shadowMapSlopeDepthBias && (s.uniforms.slopeScale.value = t.shadowMapSlopeScale, s.uniforms.slopeBias.value = t.shadowMapSlopeBias, s.uniforms.slopeMax.value = t.shadowMapSlopeMax), s.defines = a, s.extensions = i, s.vertexColors = e.vertexColors, s.alphaTest = e.alphaTest, s.visible = e.visible, s.side = t.shadowMapCullFace === XG.CullFaceFront ? XG.BackSide : XG.FrontSide, s
        },
        Mt = function(e) {
            var t = e.properties,
                r = wt(e.materials);
            t.combinedMaterials = r.combinedMaterials, t.colorMaterials = r.colorMaterials, t.depthMaterials = r.depthMaterials, t.normalDepthMaterials = r.normalDepthMaterials, t.forwardMaterials = e.materials, t.deferredInitialized = !0, t.deferredNeedsUpdate = !1
        },
        yt = function(e) {
            var t;
            return e.map ? t = e.map : e.lightMap ? t = e.lightMap : e.specularMap ? t = e.specularMap : e.glossMap ? t = e.glossMap : e.normalGlossMap ? t = e.normalGlossMap : e.normalMap ? t = e.normalMap : e.bumpMap && (t = e.bumpMap), t
        },
        wt = function(e) {
            for (var t = {
                    combinedMaterials: [],
                    colorMaterials: [],
                    depthMaterials: [],
                    normalDepthMaterials: []
                }, r = 0, a = e.length; a > r; r++) {
                var i = e[r],
                    o = yt(i);
                if (d) {
                    void 0 === ct[i.id] && (ct[i.id] = gt(i, o));
                    var n = ct[i.id];
                    t.combinedMaterials.push(n)
                } else {
                    void 0 === ft[i.id] && (ft[i.id] = St(i, o));
                    var s = ft[i.id];
                    t.colorMaterials.push(s), void 0 === pt[i.id] && (pt[i.id] = xt(i, o));
                    var l = pt[i.id];
                    t.normalDepthMaterials.push(l)
                }
                void 0 === mt[i.id] && (mt[i.id] = Gt(i, o));
                var h = mt[i.id];
                t.depthMaterials.push(h)
            }
            return t
        },
        Dt = function(e) {
            for (var t, r, a, i = e.properties, o = i.forwardMaterials, n = i.combinedMaterials, s = i.colorMaterials, l = i.depthMaterials, h = i.normalDepthMaterials, u = 0, c = o.length; c > u; u++) {
                var f = o[u],
                    p = f.visible,
                    m = yt(f),
                    v = l[u];
                if (v.visible = p, a = v.uniforms, d) {
                    var g = n[u];
                    g.visible = p, t = g.uniforms
                } else {
                    var S = s[u],
                        x = h[u];
                    S.visible = p, x.visible = p, t = S.uniforms, r = x.uniforms
                }
                if (t.map.value = f.map, f instanceof XG.PhongMaterial) {
                    var G = f.wrapAround ? -1 : 1,
                        M = f.shininess,
                        y = f.color,
                        w = f.specular,
                        D = f.wrapRGB;
                    t.diffuse.value.setRGBA(y, G), t.specular.value.setRGBA(w, M), t.wrapRGB.value.copy(D), t.lightMap.value = f.lightMap, t.specularMap.value = f.specularMap, t.glossMap.value = f.glossMap, t.bumpMap.value = f.bumpMap, t.normalMap.value = f.normalGlossMap ? f.normalGlossMap : f.normalMap, t.parallaxScale.value = f.parallaxScale, d ? (t.bumpDetailMap.value = f.bumpDetailMap, t.normalDetailMap.value = f.normalDetailMap, t.detailRepeatScale.value.set(f.detailRepeat.x, f.detailRepeat.y, f.detailScale), t.normalScale.value.copy(f.normalScale), t.bumpScale.value = f.bumpScale) : (r.bumpMap.value = f.bumpMap, r.normalMap.value = f.normalGlossMap ? f.normalGlossMap : f.normalMap, r.bumpDetailMap.value = f.bumpDetailMap, r.normalDetailMap.value = f.normalDetailMap, r.detailRepeatScale.value.set(f.detailRepeat.x, f.detailRepeat.y, f.detailScale), r.normalScale.value.copy(f.normalScale), r.bumpScale.value = f.bumpScale, r.parallaxScale.value = f.parallaxScale, f.alphaTest && f.map && (r.alphaMap.value = f.map)), f.alphaTest && f.map && (a.alphaMap.value = f.map)
                }
                if (m) {
                    var X = m.offset,
                        C = m.repeat;
                    t.offsetRepeat.value.set(X.data[0], X.data[1], C.data[0], C.data[1]), a.offsetRepeat.value.set(X.data[0], X.data[1], C.data[0], C.data[1]), d || r.offsetRepeat.value.set(X.data[0], X.data[1], C.data[0], C.data[1])
                }
            }
            i.deferredNeedsUpdate = !1
        },
        Xt = function(e) {
            var r, a, i, o, n, s, l, h = e.__objects,
                d = e.__lights;
            for (r = 0, a = h.length; a > r; r++) n = h[r], l = n.properties, n.materials && (l.deferredInitialized ? l.deferredNeedsUpdate && Dt(n) : Mt(n));
            for (r = 0, a = d.length; a > r; r++) s = d[r], s.properties.deferredInitialized || (s instanceof XG.PointLight ? (i = new XG.PointLightProxy(s, t), o = s.distance > 0 ? V : k) : s instanceof XG.SphereLight ? (i = new XG.SphereLightProxy(s, t), o = s.distance > 0 ? V : k) : s instanceof XG.TubeLight ? (i = new XG.TubeLightProxy(s, t), o = k) : s instanceof XG.SpotLight ? (i = new XG.SpotLightProxy(s, t), o = k) : s instanceof XG.DirectionalLight ? (i = new XG.DirectionalLightProxy(s, t), o = k) : s instanceof XG.HemisphereLight ? (i = new XG.HemisphereLightProxy(s, t), o = k) : s instanceof XG.DayLight ? (i = new XG.DayLightProxy(s, t), o = k) : s instanceof XG.DayLightCube ? (i = new XG.DayLightCubeProxy(s, t), o = k) : s instanceof XG.AreaLight ? (i = new XG.AreaLightProxy(s, t), o = k) : s instanceof XG.ImageLight && (i = new XG.ImageLightProxy(s, t), o = s.local ? V : k), i && (o.add(i), ht.push(i)), s.castShadow && H.properties.shadowCasters.push(s), s.properties.deferredInitialized = !0)
        },
        Ct = function(e, t, r, a, i, o) {
            for (var n = 0, s = e.length; s > n; n++) {
                var l = e[n];
                l.blending = t, t === XG.CustomBlending && (l.blendSrcColor = r, l.blendDstColor = a, l.blendSrcAlpha = i, l.blendDstAlpha = o)
            }
        },
        At = function(e) {
            for (var t = [], r = 0, a = e.length; a > r; r++) t[r] = e[r].clone();
            return t
        },
        _t = function() {
            return d && t.useDepthTexture ? {
                TEXTURE_DEPTH: !0
            } : d && !t.useDepthTexture ? {
                RGBA_DEPTH: !0
            } : {
                FLOAT_DEPTH: !0
            }
        },
        Tt = function(e, t) {
            Et(e, t, !0, !1, !1)
        },
        bt = function(e, t) {
            Et(e, t, !1, !0, !1)
        },
        Pt = function(e, t) {
            Et(e, t, !1, !1, !0)
        },
        Lt = function(e, t) {
            Et(e, t, !0, !0, !0)
        },
        Et = function(e, r, a, i, o) {
            for (var n = e.__objects, s = 0, l = n.length; l > s; s++) {
                var h = n[s];
                if (h.materials) {
                    var d = h.properties,
                        u = d[r];
                    if (u) {
                        h.materials = u;
                        for (var c = !0, f = d.forwardMaterials, p = 0, m = u.length; m > p; p++) {
                            var v = u[p],
                                g = f[p],
                                S = g.transparent,
                                x = !S,
                                G = !(S || g instanceof XG.PhongMaterial),
                                M = g.particle && S;
                            v.enabled = S && i || x && a || G && o, v.enabled = v.enabled && (!M || !t.particlesOffscreen), v.enabled = v.enabled && !(G && !o), c = c && !v.enabled
                        }
                        h.enabled = !c
                    }
                }
            }
        },
        Ft = function(e) {
            Rt(e, 4)
        },
        Rt = function(e, t) {
            for (var r, a = e.__objects, i = 0, o = a.length; o > i; i++)
                if (r = a[i], r.materials)
                    if (r instanceof XG.Particles || 4 === t && !r.castShadow)
                        for (var n = 0, s = r.materials.length; s > n; n++) {
                            var l = r.materials[n];
                            l.enabled = !1
                        } else {
                            var h, d = r.properties,
                                u = d.forwardMaterials;
                            if (0 === t);
                            else if (1 === t);
                            else if (2 === t);
                            else if (3 === t);
                            else if (4 === t) {
                                if (void 0 === d.forwardMaterialsTranslucency) {
                                    var c = At(u);
                                    Ct(c, XG.AdditiveBlending), d.forwardMaterialsTranslucency = c
                                }
                                h = d.forwardMaterialsTranslucency, Ut(h)
                            }
                            if (t > 0)
                                for (var n = 0, s = u.length; s > n; n++) {
                                    var f = u[n],
                                        p = h[n];
                                    p.additiveFactor = f.additiveFactor
                                }
                            r.enabled = !0, r.materials = h
                        }
        },
        Ut = function(e) {
            for (var t = 0, r = e.length; r > t; t++) {
                {
                    var a = e[t];
                    a.uniforms
                }
                if (!a.particle && a.transparent) {
                    if (a.enabled = !0, !a.defines) {
                        var i = _t();
                        i.TRANSLUCENT_PASS = !0, a.defines = i
                    }
                } else a.enabled = !1
            }
        },
        Nt = function(e) {
            Vt(e, 0)
        },
        It = function(e) {
            Vt(e, 1)
        },
        Bt = function(e) {
            Vt(e, 2)
        },
        Ot = function(e) {
            Vt(e, 3)
        },
        kt = function(e) {
            Vt(e, 4)
        },
        Vt = function(e, t) {
            for (var r, a = e.__objects, i = 0, o = a.length; o > i; i++)
                if (r = a[i], r.materials)
                    if (r instanceof XG.Particles && (4 !== t || r.castShadow)) {
                        var n, s = r.properties,
                            l = s.forwardMaterials;
                        if (0 === t) n = l, Ht(n, !1);
                        else if (1 === t) {
                            if (void 0 === s.forwardMaterialsMRT) {
                                var h = At(l);
                                Ct(h, XG.CustomBlending, XG.OneFactor, XG.OneFactor, XG.ZeroFactor, XG.OneMinusSrcAlphaFactor), s.forwardMaterialsMRT = h
                            }
                            n = s.forwardMaterialsMRT, Ht(n, !1)
                        } else if (2 === t) {
                            if (void 0 === s.forwardMaterialsAccumulation) {
                                var d = At(l);
                                Ct(d, XG.CustomBlending, XG.OneFactor, XG.OneFactor, XG.ZeroFactor, XG.OneMinusSrcAlphaFactor), s.forwardMaterialsAccumulation = d
                            }
                            n = s.forwardMaterialsAccumulation, Ht(n, !0)
                        } else if (3 === t) {
                            if (void 0 === s.forwardMaterialsRevealage) {
                                var u = At(l);
                                Ct(u, XG.CustomBlending, XG.OneFactor, XG.OneFactor, XG.ZeroFactor, XG.OneMinusSrcAlphaFactor), s.forwardMaterialsRevealage = u
                            }
                            n = s.forwardMaterialsRevealage, Ht(n, !1)
                        } else if (4 === t) {
                            if (void 0 === s.forwardMaterialsTranslucency) {
                                var c = At(l);
                                Ct(c, XG.AdditiveBlending), s.forwardMaterialsTranslucency = c
                            }
                            n = s.forwardMaterialsTranslucency, zt(n)
                        }
                        if (t > 0)
                            for (var f = 0, p = l.length; p > f; f++) {
                                var m = l[f],
                                    v = n[f];
                                v.time = m.time, v.additiveFactor = m.additiveFactor
                            }
                        r.enabled = !0, r.materials = n
                    } else
                        for (var f = 0, p = r.materials.length; p > f; f++) {
                            var g = r.materials[f];
                            g.enabled = !1
                        }
        },
        Ht = function(e, r) {
            for (var a = 0, i = e.length; i > a; a++) {
                var s = e[a],
                    l = s.uniforms;
                if (s.particle && s.transparent) {
                    if (s.enabled = !0, !s.defines) {
                        var h = _t();
                        t.particlesOffscreen && (h.OFFSCREEN_PARTICLES = !0), t.fogEnabled && (h.FOG_ENABLED = !0), s.lights && (d || r) && (h.USE_LIGHTS = !0), t.particlesOit && (h.OIT_PARTICLES = !0, d ? h.OIT_MRT_PASS = !0 : r ? h.OIT_ACCUMULATION_PASS = !0 : h.OIT_REVEALAGE_PASS = !0), s.defines = h
                    }
                    s.extensions || (s.extensions = {}), t.particlesOit && d && (s.extensions.WEBGL_draw_buffers = !0), l && (l.tDepth.value = d ? f.renderTarget2.colorTexture[4] : m.renderTarget2, t.fogEnabled && (l.fogColor.value.copy(t.fogColor), l.fogStrength.value = t.fogStrength, l.fogStart.value = t.fogStart), l.viewSize.value.set(o * t.particlesOffscreenScale, n * t.particlesOffscreenScale))
                } else s.enabled = !1
            }
        },
        zt = function(e) {
            for (var t = 0, r = e.length; r > t; t++) {
                {
                    var a = e[t];
                    a.uniforms
                }
                if (a.particle && a.transparent) {
                    if (a.enabled = !0, !a.defines) {
                        var i = _t();
                        i.TRANSLUCENT_PASS = !0, a.defines = i
                    }
                } else a.enabled = !1
            }
        },
        Wt = function(e, r, a) {
            for (var i = 0, o = e.length; o > i; i++) {
                var n = e[i],
                    s = n.uniforms,
                    l = r[i].transparent;
                n.enabled = !l, a ? (n.polygonOffset = !0, n.polygonOffsetFactor = 1.5, n.polygonOffsetUnits = 10, s.depthTextureBias.value = t.shadowMapDepthTextureBias) : (s.slopeScale.value = t.shadowMapSlopeScale, s.slopeBias.value = t.shadowMapSlopeBias, s.slopeMax.value = t.shadowMapSlopeMax), n.side = t.shadowMapCullFace === XG.CullFaceFront ? XG.BackSide : t.shadowMapCullFace === XG.CullFaceBack ? XG.FrontSide : XG.DoubleSide
            }
        },
        jt = function(e, t) {
            for (var r, a = e.__objects, i = 0, o = a.length; o > i; i++)
                if (r = a[i], r.materials)
                    if (r.castShadow) {
                        var n = r.properties.depthMaterials;
                        r.materials = n, Wt(n, r.properties.forwardMaterials, t)
                    } else
                        for (var s = 0, l = r.materials.length; l > s; s++) {
                            var h = r.materials[s];
                            h.enabled = !1
                        }
        },
        qt = function(e, t) {
            e.position.copy(t.matrixWorld.getPosition()), t.target && e.lookAt(t.target.matrixWorld.getPosition()), e.updateMatrixWorld(), e.matrixWorldInverse.getInverse(e.matrixWorld)
        },
        Kt = function(e, t) {
            e.near = t.shadowCameraNear, e.far = t.shadowCameraFar, t instanceof XG.PointLight || t instanceof XG.SphereLight ? e.fov = 90 : t instanceof XG.SpotLight || t instanceof XG.AreaLight ? e.fov = t.shadowCameraFov : (t instanceof XG.DirectionalLight || t instanceof XG.DayLight || t instanceof XG.DayLightCube || t instanceof XG.AreaLight) && (e.left = t.shadowCameraLeft, e.right = t.shadowCameraRight, e.top = t.shadowCameraTop, e.bottom = t.shadowCameraBottom), e.updateProjectionMatrix()
        },
        Zt = function(e, t, r, a) {
            e.near = t.shadowCameraNear, e.far = t.shadowCameraFar;
            var i = t.shadowCascadeNearZ[r],
                o = t.shadowCascadeFarZ[r],
                n = t.properties.pointsFrustum[r];
            n[0].setZ(i), n[1].setZ(i), n[2].setZ(i), n[3].setZ(i), n[4].setZ(o), n[5].setZ(o), n[6].setZ(o), n[7].setZ(o);
            var s = t.properties.pointsWorld[r];
            Z.set(1 / 0, 1 / 0, 1 / 0), Y.set(-1 / 0, -1 / 0, -1 / 0);
            for (var l = Z.data, h = Y.data, d = 0; 8 > d; d++) {
                var u = s[d],
                    c = u.data;
                u.copy(n[d]), K.unprojectVector(u, a), e.matrixWorldInverse.multiplyVector3(u), c[0] < l[0] && (l[0] = c[0]), c[0] > h[0] && (h[0] = c[0]), c[1] < l[1] && (l[1] = c[1]), c[1] > h[1] && (h[1] = c[1]), c[2] < l[2] && (l[2] = c[2]), c[2] > h[2] && (h[2] = c[2])
            }
            e.left = l[0], e.right = h[0], e.top = h[1], e.bottom = l[1], e.updateProjectionMatrix()
        },
        Yt = function(e, r, a) {
            var i = t.renderer,
                o = r.projectionMatrix.elements,
                n = o[10];
            o[10] *= 1 + t.shadowMapProjectionBias, i.render(e, r, a, !0), o[10] = n
        },
        Qt = function(e, r) {
            var a = t.renderer;
            a.autoClearDepth = !0, a.autoClearStencil = !1, a.autoUpdateScene = !1;
            var i = t.shadowMapUseDepthTextures && a.supportsDepthTextures();
            i ? (a.autoClearColor = !1, q.colorMask(!1, !1, !1, !1)) : (nt.copy(a.getClearColor()), st = a.getClearAlpha(), a.setClearColor(J, 1)), jt(e, i);
            for (var o = e.properties.shadowCasters, n = 0, s = o.length; s > n; n++) {
                var l = o[n];
                if (l instanceof XG.SpotLight || l instanceof XG.AreaLight) {
                    var h = l.properties.shadowMap,
                        d = l.properties.shadowCamera;
                    qt(d, l), Kt(d, l), Yt(e, d, h)
                } else if (l instanceof XG.DirectionalLight || l instanceof XG.DayLight || l instanceof XG.DayLightCube) {
                    for (var u = 0; u < l.properties.cascadeCount; u++)
                        if (!(u > t.shadowMapCascadeUpdateThreshold && vt % t.shadowMapCascadeUpdateModulo !== 0)) {
                            var h = l.properties.shadowMap[u],
                                d = l.properties.shadowCamera[u];
                            qt(d, l), l.shadowCascade ? Zt(d, l, u, r) : Kt(d, l), Yt(e, d, h)
                        }
                } else if (l instanceof XG.PointLight || l instanceof XG.SphereLight)
                    for (var u = 0; 6 > u; u++) {
                        var h = l.properties.shadowMap[u],
                            d = l.properties.shadowCamera[u];
                        qt(d, l), Kt(d, l), Yt(e, d, h)
                    }
            }
            i ? (a.autoClearColor = !0, q.colorMask(!0, !0, !0, !0)) : a.setClearColor(nt, st)
        },
        Jt = function(e, t) {
            if (t.properties.gyro) var r = t.properties.nonGyroLight,
                a = t.properties.nonGyroTarget;
            else var r = t,
                a = t.target;
            e.position.copy(r.matrixWorld.getPosition()), t.target && e.lookAt(a.matrixWorld.getPosition()), e.updateMatrixWorld(), e.matrixWorldInverse.getInverse(e.matrixWorld)
        },
        $t = function(e, t) {
            e.near = t.textureCameraNear, e.far = t.textureCameraFar, t instanceof XG.PointLight || t instanceof XG.SphereLight ? e.fov = 90 : t instanceof XG.SpotLight || t instanceof XG.AreaLight ? e.fov = t.textureCameraFov : (t instanceof XG.DirectionalLight || t instanceof XG.DayLight || t instanceof XG.DayLightCube || t instanceof XG.AreaLight) && (e.left = t.textureCameraLeft, e.right = t.textureCameraRight, e.top = t.textureCameraTop, e.bottom = t.textureCameraBottom), e.updateProjectionMatrix()
        },
        er = function(e) {
            var r = t.renderer;
            r.autoClearDepth = !1, r.autoClearStencil = !1, r.autoUpdateScene = !1, nt.copy(r.getClearColor()), st = r.getClearAlpha(), r.setClearColor(Q, 0);
            var a = e.properties.shadowCasters;
            if (t.particlesShadows) {
                kt(e);
                for (var i = 0, o = a.length; o > i; i++) {
                    var n = a[i];
                    if (n.castTransparentShadow && (n instanceof XG.DirectionalLight || n instanceof XG.DayLight || n instanceof XG.DayLightCube || n instanceof XG.SpotLight)) {
                        var s = n.texture,
                            l = n.properties.textureCamera;
                        Jt(l, n), $t(l, n), r.render(e, l, s, !0)
                    }
                }
            }
            Ft(e);
            for (var i = 0, o = a.length; o > i; i++) {
                var n = a[i];
                if (n.castTransparentShadow && (n instanceof XG.DirectionalLight || n instanceof XG.DayLight || n instanceof XG.DayLightCube || n instanceof XG.SpotLight)) {
                    var s = n.texture,
                        l = n.properties.textureCamera;
                    t.particlesShadows && (Jt(l, n), $t(l, n)), r.render(e, l, s, !t.particlesShadows)
                }
            }
            r.setClearColor(nt, st)
        },
        tr = function() {
            var e = t.renderer,
                r = e.shadowMapUseDepthTextures;
            e.shadowMapEnabled = t.shadowMapEnabled, e.shadowMapAutoUpdate = !1, e.shadowMapUseDepthTextures = !0, q.depthFunc(q.LEQUAL), g.render(), e.shadowMapUseDepthTextures = r
        },
        rr = function(e, r) {
            W.enabled = !1;
            var a = e.properties.mirrors;
            if (void 0 !== a) {
                var i = a.length;
                if (0 !== i) {
                    var s = t.renderer;
                    s.autoClearDepth = !0, q.depthFunc(q.LEQUAL), Lt(e, "forwardMaterials");
                    var l = s.shadowMapUseDepthTextures;
                    s.shadowMapEnabled = t.shadowMapEnabled, s.shadowMapAutoUpdate = !1, s.shadowMapUseDepthTextures = !0;
                    for (var h = d ? f.renderTarget2.colorTexture[4] : m.renderTarget2, u = 0; i > u; u++) {
                        var c = a[u],
                            p = c.material.uniforms,
                            v = c.material.defines;
                        p.refractionSampler.value = z, p.refractionDepthSampler.value = h, p.matProjInverse.value = r.projectionMatrixInverse, p.matViewInverse.value = r.matrixWorld, p.viewSize.value.set(o, n), v.USE_MRT = d, c.render(e, r)
                    }
                    W.enabled = !0, s.autoClearDepth = !1, s.shadowMapUseDepthTextures = l
                }
            }
        },
        ar = function(e) {
            t.particlesOit ? d ? (It(e), S.render()) : (Bt(e), S.render(), Ot(e), x.render()) : (Nt(e), S.render())
        },
        ir = function() {
            var e = t.renderer;
            e.autoClearDepth = !0, q.depthFunc(q.LEQUAL), f.render()
        },
        or = function() {
            var e = t.renderer;
            e.autoClearDepth = !0, q.depthFunc(q.LEQUAL), m.render()
        },
        nr = function() {
            var e = t.renderer;
            e.autoClearDepth = !0, e.autoUpdateView = !1, p.render()
        },
        sr = function(e) {
            e.projectionMatrixInverse.getInverse(e.projectionMatrix);
            for (var t = 0, r = V.children.length; r > t; t++) {
                var a = V.children[t];
                a.update(e)
            }
            for (var t = 0, r = k.children.length; r > t; t++) {
                var a = k.children[t];
                a.update(e)
            }
        },
        lr = function(e, r) {
            var a = t.renderer;
            if (a.autoUpdateView = !0, t.shadowMapEnabled && t.shadowMapAutoUpdate && Qt(e, r), t.transparentShadows && t.shadowMapAutoUpdate && er(e, r), t.ssaoEnabled) {
                var i = r.far + r.near,
                    o = r.far - r.near,
                    n = 2 * r.near;
                E.uniforms.cameraCoef.value.set(i, o, n), U.uniforms.cameraCoef.value.set(i, o, n), N.uniforms.cameraCoef.value.set(i, o, n), M.render(), y.render()
            }
            a.autoClearDepth = !1, a.autoUpdateScene = !0, a.autoUpdateObjects = !0, sr(r), q.depthFunc(q.GEQUAL), v.render()
        },
        hr = function() {
            l && t.dofEnabled ? (L.enabled = !0, F.enabled = !0, t.dofFancy ? (F.renderToScreen = !1, P.renderToScreen = !1, L.renderToScreen = !1, R.renderToScreen = !0) : (P.renderToScreen = !1, L.renderToScreen = !1, F.renderToScreen = !0, R.renderToScreen = !1)) : l && !t.dofEnabled ? (L.enabled = !0, F.enabled = !1, F.renderToScreen = !1, P.renderToScreen = !1, L.renderToScreen = !1, R.renderToScreen = !0) : !l && t.dofEnabled ? (L.enabled = !1, F.enabled = !0, R.renderToScreen = !1, t.dofFancy ? (F.renderToScreen = !1, P.renderToScreen = !0, L.renderToScreen = !1) : (P.renderToScreen = !1, L.renderToScreen = !1, F.renderToScreen = !0)) : (L.enabled = !1, F.enabled = !1, P.renderToScreen = !0, L.renderToScreen = !1, F.renderToScreen = !1, R.renderToScreen = !1)
        },
        dr = function() {
            var e = P.material,
                t = e.defines;
            switch (t.TONEMAP_SIMPLE = !1, t.TONEMAP_LINEAR = !1, t.TONEMAP_REINHARD = !1, t.TONEMAP_FILMIC = !1, t.TONEMAP_FILMIC_2015 = !1, t.TONEMAP_UNCHARTED = !1, t.TONEMAP_REINHARD_LUMA = !1, t.TONEMAP_REINHARD_WHITE = !1, t.TONEMAP_PHOTOGRAPHIC = !1, s) {
                case XG.SimpleOperator:
                    t.TONEMAP_SIMPLE = !0;
                    break;
                case XG.LinearOperator:
                    t.TONEMAP_LINEAR = !0;
                    break;
                case XG.ReinhardOperator:
                    t.TONEMAP_REINHARD = !0;
                    break;
                case XG.FilmicOperator:
                    t.TONEMAP_FILMIC = !0;
                    break;
                case XG.Filmic2015Operator:
                    t.TONEMAP_FILMIC_2015 = !0;
                    break;
                case XG.UnchartedOperator:
                    t.TONEMAP_UNCHARTED = !0;
                    break;
                case XG.LumaReinhardOperator:
                    t.TONEMAP_REINHARD_LUMA = !0;
                    break;
                case XG.WhitePreservingReinhardOperator:
                    t.TONEMAP_REINHARD_WHITE = !0;
                    break;
                case XG.PhotographicOperator:
                    t.TONEMAP_PHOTOGRAPHIC = !0
            }
            t.TONEMAPPING = !0, e.needsUpdate = !0, O.material.needsUpdate = !0
        },
        ur = function() {
            var e = P.material,
                t = e.defines;
            t.DITHERING_ENABLED = h, e.needsUpdate = !0
        },
        cr = function(e) {
            var t = {
                hasFloatsNearest: e.supportsFloatTextures(),
                hasFloatsLinear: e.supportsFloatTexturesLinear(),
                hasHalfFloatsNearest: e.supportsHalfFloatTextures(),
                hasHalfFloatsLinear: e.supportsHalfFloatTexturesLinear(),
                hasRGBFloatRenderTarget: e.supportsRGBFloatRenderTarget(),
                hasRGBHalfFloatRenderTarget: e.supportsRGBHalfFloatRenderTarget(),
                hasRGBUbyteRenderTarget: e.supportsRGBUnsignedByteRenderTarget()
            };
            return t
        },
        fr = function() {
            var e, r = {
                    minFilter: XG.NearestFilter,
                    magFilter: XG.LinearFilter,
                    stencilBuffer: !1,
                    format: XG.RGBAFormat,
                    type: XG.FloatType
                },
                a = {
                    minFilter: XG.NearestFilter,
                    magFilter: XG.NearestFilter,
                    stencilBuffer: !1,
                    format: XG.RGBAFormat,
                    type: XG.FloatType
                },
                i = {
                    minFilter: XG.NearestFilter,
                    magFilter: XG.LinearFilter,
                    stencilBuffer: !1,
                    format: XG.RGBAFormat,
                    type: XG.HalfFloatType
                },
                l = {
                    minFilter: XG.NearestFilter,
                    magFilter: XG.NearestFilter,
                    stencilBuffer: !1,
                    format: XG.RGBAFormat,
                    type: XG.HalfFloatType
                },
                u = {
                    minFilter: XG.LinearFilter,
                    magFilter: XG.LinearFilter,
                    stencilBuffer: !1,
                    format: XG.RGBFormat,
                    type: XG.UnsignedByteType
                },
                c = cr(t.renderer);
            if (c.hasHalfFloatsLinear ? e = i : c.hasHalfFloatsNearest ? e = l : c.hasFloatsLinear ? e = r : c.hasFloatsNearest ? e = a : console.error("XG.DeferredRenderer: missing float or half float render targets support"), c.hasRGBUbyteRenderTarget || (u.format = XG.RGBAFormat), d) {
                var k = t.useDepthTexture ? 4 : 5,
                    V = {
                        minFilter: XG.NearestFilter,
                        magFilter: XG.NearestFilter,
                        type: XG.UnsignedByteType,
                        format: XG.RGBAFormat,
                        stencilBuffer: !1
                    },
                    H = new XG.RenderTargetArray(o, n, k, t.useDepthTexture, V);
                H.generateMipmaps = !1, D = new XG.RenderPass, D.clear = !0, D.clearColor = J, D.clearAlpha = 1, f = new XG.EffectComposer(t.renderer, H), f.addPass(D);
                var j = f.renderTarget2,
                    q = j.colorTexture[3],
                    K = t.useDepthTexture ? j.depthTexture : j.colorTexture[4]
            } else {
                var Z = new XG.RenderTarget(o, n, a);
                Z.generateMipmaps = !1;
                var Y = new XG.RenderTarget(o, n, a);
                Y.generateMipmaps = !1, C = new XG.RenderPass, C.clear = !0, C.clearColor = J, C.clearAlpha = 1, m = new XG.EffectComposer(t.renderer, Y), m.addPass(C), X = new XG.RenderPass, X.clear = !0, p = new XG.EffectComposer(t.renderer, Z), p.addPass(X), p.renderTarget2.shareDepthFrom = m.renderTarget2
            }
            var $ = Math.floor(o * t.ssaoScale),
                et = Math.floor(n * t.ssaoScale),
                tt = new XG.RenderTarget($, et, u),
                rt = new XG.RenderTarget(o, n, u);
            tt.generateMipmaps = !1, rt.generateMipmaps = !1, tt.depthBuffer = !1, tt.stencilBuffer = !1, rt.depthBuffer = !1, rt.stencilBuffer = !1, E = new XG.ShaderPass(XG.SSAOShader), E.clear = !1, E.uniforms.size.value.set($, et), E.uniforms.aoClamp.value = 1.5, U = new XG.ShaderPass(XG.SSAOBilateralHorizontalBlurShader), N = new XG.ShaderPass(XG.SSAOBilateralVerticalBlurShader), U.uniforms.h.value = 4 / o, N.uniforms.v.value = 2 / n, E.material.blending = XG.NoBlending, E.material.depthTest = !1, E.material.depthWrite = !1, U.material.blending = XG.NoBlending, U.material.depthTest = !1, U.material.depthWrite = !1, N.material.blending = XG.NoBlending, N.material.depthTest = !1, N.material.depthWrite = !1, d ? (E.uniforms.tDepth.value = K, U.uniforms.tDepth.value = K, N.uniforms.tDepth.value = K, U.uniforms.tNormal.value = q, N.uniforms.tNormal.value = q) : (E.uniforms.tDepth.value = m.renderTarget2, U.uniforms.tDepth.value = m.renderTarget2, N.uniforms.tDepth.value = m.renderTarget2);
            var at = _t();
            E.material.defines = at, U.material.defines = at, N.material.defines = at, M = new XG.EffectComposer(t.renderer, tt), M.addPass(E), U.textureID = "dummy", U.uniforms.tDiffuse.value = M.renderTarget1, y = new XG.EffectComposer(t.renderer, rt), y.addPass(U), y.addPass(N);
            var ot = new XG.RenderTarget(o, n, e),
                nt = new XG.RenderTarget(o, n, u);
            ot.generateMipmaps = !1, nt.generateMipmaps = !1, nt.depthBuffer = !1, nt.stencilBuffer = !1, A = new XG.RenderPass, A.clear = !0, _ = new XG.RenderPass, _.clear = !1, z = new XG.RenderTarget(o, n, u), W = new XG.SavePass(z), W.material.depthTest = !1, W.enabled = !1, v = new XG.EffectComposer(t.renderer, ot), v.addPass(A), v.addPass(_), v.addPass(W), v.renderTarget2.shareDepthFrom = d ? f.renderTarget2 : m.renderTarget2, T = new XG.RenderPass, T.clear = !1, g = new XG.EffectComposer(t.renderer, ot), g.addPass(T), g.renderTarget1 = v.renderTarget1, g.renderTarget2 = v.renderTarget2, g.renderTarget2.shareDepthFrom = d ? f.renderTarget2 : m.renderTarget2, b = new XG.RenderPass, b.clear = !0, b.clearColor = Q, b.clearAlpha = 1;
            var st = Math.floor(o * t.particlesOffscreenScale),
                ht = Math.floor(n * t.particlesOffscreenScale);
            if (t.particlesOit)
                if (d) {
                    var dt = new XG.RenderTargetArray(st, ht, 2, !1, e);
                    dt.generateMipmaps = !1, S = new XG.EffectComposer(t.renderer, dt), S.addPass(b)
                } else {
                    var ut = new XG.RenderTarget(st, ht, e),
                        ct = new XG.RenderTarget(st, ht, e);
                    ut.generateMipmaps = !1, ct.generateMipmaps = !1, S = new XG.EffectComposer(t.renderer, ut), S.addPass(b), x = new XG.EffectComposer(t.renderer, ct), x.addPass(b)
                } else {
                var ft = new XG.RenderTarget(st, ht, e);
                ft.generateMipmaps = !1, S = new XG.EffectComposer(t.renderer, ft), S.addPass(b)
            }
            var pt = Math.floor(o * t.bloomScale),
                mt = Math.floor(n * t.bloomScale),
                vt = new XG.RenderTarget(pt, mt, u);
            vt.generateMipmaps = !1, vt.depthBuffer = !1, vt.stencilBuffer = !1, I = new XG.ShaderPass(XG.BloomHorizontalBlurShader), B = new XG.ShaderPass(XG.BloomVerticalBlurShader), O = new XG.ShaderPass(XG.BloomFilterShader), O.uniforms.tSource.value = v.renderTarget2, O.uniforms.threshold.value = t.bloomThreshold, O.uniforms.brightness.value = t.brightness, O.uniforms.whitePoint.value = t.whitePoint, I.uniforms.h.value = 1 / pt, B.uniforms.v.value = 1 / mt, I.material.blending = XG.NoBlending, I.material.depthTest = !1, I.material.depthWrite = !1, B.material.blending = XG.NoBlending, B.material.depthTest = !1, B.material.depthWrite = !1, O.material.blending = XG.NoBlending, O.material.depthTest = !1, O.material.depthWrite = !1, w = new XG.EffectComposer(t.renderer, vt), w.addPass(O), w.addPass(I), w.addPass(B), P = new XG.ShaderPass(it), P.uniforms.brightness.value = t.brightness, P.uniforms.whitePoint.value = t.whitePoint, P.uniforms.samplerLight.value = v.renderTarget2, P.uniforms.samplerBloom.value = w.renderTarget1, P.uniforms.bloomStrength.value = t.bloomStrength, t.particlesOit ? d ? (P.uniforms.samplerParticles.value = S.renderTarget2.colorTexture[0], P.uniforms.samplerParticlesRevealage.value = S.renderTarget2.colorTexture[1]) : (P.uniforms.samplerParticles.value = S.renderTarget2, P.uniforms.samplerParticlesRevealage.value = x.renderTarget2) : P.uniforms.samplerParticles.value = S.renderTarget2;
            var gt = _t();
            switch (t.fogEnabled && (gt.FOG_ENABLED = !0, P.uniforms.samplerDepth.value = d ? K : m.renderTarget2, lt.push({
                material: P.material,
                depth: "samplerDepth"
            })), h && (gt.DITHERING_ENABLED = !0), P.material.blending = XG.NoBlending, P.material.depthTest = !1, P.material.depthWrite = !1, P.clear = !0, s) {
                case XG.SimpleOperator:
                    gt.TONEMAP_SIMPLE = !0;
                    break;
                case XG.LinearOperator:
                    gt.TONEMAP_LINEAR = !0;
                    break;
                case XG.ReinhardOperator:
                    gt.TONEMAP_REINHARD = !0;
                    break;
                case XG.FilmicOperator:
                    gt.TONEMAP_FILMIC = !0;
                    break;
                case XG.Filmic2015Operator:
                    gt.TONEMAP_FILMIC_2015 = !0;
                    break;
                case XG.UnchartedOperator:
                    gt.TONEMAP_UNCHARTED = !0;
                    break;
                case XG.LumaReinhardOperator:
                    gt.TONEMAP_REINHARD_LUMA = !0;
                    break;
                case XG.WhitePreservingReinhardOperator:
                    gt.TONEMAP_REINHARD_WHITE = !0;
                    break;
                case XG.PhotographicOperator:
                    gt.TONEMAP_PHOTOGRAPHIC = !0
            }
            if (gt.TONEMAPPING = !0, gt.BLOOM_ENABLED = t.bloomEnabled, gt.OFFSCREEN_PARTICLES = t.particlesOffscreen, gt.PARTICLE_OIT = t.particlesOit, gt.USE_MRT = d, gt.FANCY_DOF = t.dofFancy && t.dofEnabled, P.material.defines = gt, O.material.defines = gt, L = new XG.ShaderPass(XG.FXAAShader), L.material.blending = XG.NoBlending, L.material.depthTest = !1, L.material.depthWrite = !1, L.uniforms.resolution.value.set(1 / o, 1 / n), t.dofFancy) {
                var St = .75;
                F = new XG.FancyDepthOfFieldPass(o, n, St, c)
            } else F = new XG.DepthOfFieldPass(1024, 512);
            F.defines = _t(), t.dofDebug && (F.defines.DOF_DEBUG = 1), t.dofPhysical && (F.defines.DOF_PHYSICAL = 1), F.depthInput = d ? K : m.renderTarget2, F.colorInput = v.renderTarget2, F.autoFocus = t.dofAutofocus, F.autoFocusPoint = t.dofAutofocusPoint, F.focusDistance = t.dofFocusDistance, F.focusRampStart = t.dofFocusWidth, F.focusRampEnd = t.dofFocusWidth + t.dofFocusRampWidth, F.maxBlur = t.dofMaxBlur, t.dofFancy && t.dofPhysical && (F.lensFstop = t.dofLensFstop, F.lensFocalLength = t.dofLensFocalLength, F.lensBlurScale = t.dofLensBlurScale, t.fogEnabled && (F.defines.FOG_ENABLED = !0)), R = new XG.ShaderPass(XG.CopyShader), R.renderToScreen = !0, t.dofFancy ? (P.uniforms.samplerBlur.value = F.renderTargetBlurPass2, P.uniforms.samplerBlurAmount.value = F.renderTargetBlurAmount, G = new XG.EffectComposer(t.renderer, nt), G.addPass(F), G.addPass(P), G.addPass(L), G.addPass(R)) : (G = new XG.EffectComposer(t.renderer, nt), G.addPass(P), G.addPass(L), G.addPass(F), G.addPass(R)), hr()
        };
    this.setAntialias = function(e) {
        l = e, hr()
    }, this.getAntialias = function() {
        return l
    }, this.setDOF = function(e) {
        this.dofEnabled = e, hr();
        var r = P.material,
            a = r.defines;
        a.FANCY_DOF = t.dofFancy && t.dofEnabled, r.needsUpdate = !0
    }, this.setTonemapping = function(e) {
        s = e, j && dr()
    }, this.setDither = function(e) {
        h = e, j && ur()
    }, this.addEffect = function(e, r) {
        if (e.material && e.uniforms && (e.properties = {}, r && (r.normalDepthUniform || r.colorUniform || r.depthUniform))) {
            var a = {
                material: e.material,
                normalDepth: r.normalDepthUniform,
                color: r.colorUniform,
                depth: r.depthUniform
            };
            lt.push(a), e.properties.normalDepthUniform = r.normalDepthUniform, e.properties.colorUniform = r.colorUniform, e.properties.depthUniform = r.depthUniform, (r.normalDepthUniform || r.depthUniform) && (e.material.defines = _t())
        }
        if (G) {
            var i = t.dofFancy ? -2 : -3;
            G.insertPass(e, i)
        } else ot.push(e)
    }, this.setScale = function(e) {
        if (i = e, this.renderer.setScale(i), o = Math.floor(i * r), n = Math.floor(i * a), o = Math.floor(o * c), n = Math.floor(n * c), j) {
            var s = Math.floor(o * t.ssaoScale),
                l = Math.floor(n * t.ssaoScale),
                h = Math.floor(o * t.bloomScale),
                u = Math.floor(n * t.bloomScale),
                g = Math.floor(o * t.particlesOffscreenScale),
                D = Math.floor(n * t.particlesOffscreenScale);
            v.setSize(o, n), G.setSize(o, n), S.setSize(g, D), x && x.setSize(g, D), M.setSize(s, l), y.setSize(o, n), w.setSize(h, u), d ? f.setSize(o, n) : (m.setSize(o, n), p.setSize(o, n));
            for (var X = 0, C = lt.length; C > X; X++) {
                var A = lt[X],
                    _ = A.material,
                    T = _.uniforms;
                T.viewSize && T.viewSize.value.set(o, n), T.screenWidth && (T.screenWidth.value = o)
            }
            for (var X = 0, C = ht.length; C > X; X++) {
                var b = ht[X];
                b.resize(o, n)
            }
            L.uniforms.resolution.value.set(1 / o, 1 / n), F.resize(o, n), E.uniforms.size.value.set(s, l), U.uniforms.h.value = 4 / o, N.uniforms.v.value = 2 / n, I.uniforms.h.value = 1 / h, B.uniforms.v.value = 1 / u
        }
    }, this.setSize = function(e, t) {
        r = e, a = t, this.renderer.setSize(r, a), this.setScale(i)
    }, this.getCombinedTarget = function() {
        return f.renderTarget2
    }, this.getColorTarget = function() {
        return p.renderTarget2
    }, this.getNormalDepthTarget = function() {
        return m.renderTarget2
    }, this.getSSAOTarget = function() {
        return y.renderTarget2
    }, this.getUseMultipleRenderTargets = function() {
        return d
    }, this.prepareForwardPass = function(e) {
        e.properties.deferredInitialized && Lt(e, "forwardMaterials")
    }, this.renderCube = function(e, t, r) {
        e.properties.deferredInitialized && Tt(e, "forwardMaterials"), this.renderer.autoClear = !0, this.renderer.renderCube(e, t, r), this.renderer.autoClear = !1
    }, this.render = function(e, r) {
        if (!j) {
            fr();
            for (var a = t.dofFancy ? -2 : -3, i = 0, o = ot.length; o > i; i++) {
                var n = ot[i],
                    s = n.properties;
                if (s) {
                    var l, h, u, c = s.normalDepthUniform,
                        v = s.colorUniform,
                        g = s.depthUniform;
                    if (d) {
                        var S = f.renderTarget2;
                        u = t.useDepthTexture ? S.depthTexture : S.colorTexture[4], h = S.colorTexture[0]
                    } else l = m.renderTarget2, h = p.renderTarget2, u = m.renderTarget2;
                    c && (n.uniforms[c].value = l), v && (n.uniforms[v].value = h), g && (n.uniforms[g].value = u)
                }
                G.insertPass(n, a)
            }
            j = !0
        }
        var x = t.renderer,
            M = e.properties;
        if (M.deferredInitialized || (M.lightSceneGeometry = new XG.Scene, M.lightSceneFullscreen = new XG.Scene, M.shadowCasters = [], M.deferredInitialized = !0), V = M.lightSceneGeometry, k = M.lightSceneFullscreen, H = e, d ? (D.camera = r, D.scene = e) : (X.camera = r, X.scene = e, C.camera = r, C.scene = e), _.camera = r, _.scene = V, A.camera = XG.EffectComposer.camera, A.scene = k, T.camera = r, T.scene = e, b.camera = r, b.scene = e, x.autoUpdateObjects = !1, x.initWebGLObjects(e), x.initWebGLObjects(XG.EffectComposer.scene), Xt(e), x.autoUpdateScene = !1, e.updateMatrixWorld(), A.clear = !0, d ? (D.clear = !0, Tt(e, "combinedMaterials"), ir(e, r), lr(e, r), D.clear = !1) : (X.clear = !0, C.clear = !0, Tt(e, "normalDepthMaterials"), or(e, r), Tt(e, "colorMaterials"), nr(e, r), lr(e, r), X.clear = !1, C.clear = !1), A.clear = !1, rr(e, r), x.autoUpdateScene = !1, x.autoUpdateObjects = !1, Pt(e, "forwardMaterials"), tr(e, r), bt(e, "forwardMaterials"), tr(e, r), t.particlesOffscreen && ar(e, r), t.bloomEnabled && (O.uniforms.threshold.value = t.bloomThreshold, O.uniforms.brightness.value = t.brightness, O.uniforms.whitePoint.value = t.whitePoint, w.render()), x.autoUpdateObjects = !0, x.autoUpdateScene = !0, x.autoClearDepth = !0, q.depthFunc(q.LEQUAL), t.bloomEnabled) {
            var y = P.uniforms;
            y.bloomStrength.value = t.bloomStrength, y.brightness.value = t.brightness, y.whitePoint.value = t.whitePoint
        }
        if (t.dofEnabled && (F.cameraNear = r.near, F.cameraFar = r.far, F.autoFocus = t.dofAutofocus, F.autoFocusPoint = t.dofAutofocusPoint, F.focusDistance = t.dofFocusDistance, F.focusRampStart = t.dofFocusWidth, F.focusRampEnd = t.dofFocusWidth + t.dofFocusRampWidth, F.maxBlur = t.dofMaxBlur, t.dofFancy && t.dofPhysical && (F.lensFstop = t.dofLensFstop, F.lensFocalLength = t.dofLensFocalLength, F.lensBlurScale = t.dofLensBlurScale, F.lensMaxCoc = t.dofLensMaxCoc, F.lensApertureSides = t.dofLensApertureSides)), t.fogEnabled) {
            var L = P.uniforms;
            if (L.fogColor.value.copy(t.fogColor), L.fogStrength.value = t.fogStrength, L.fogStart.value = t.fogStart, L.cameraNearFar.value.set(r.near, r.far), t.dofFancy && t.dofPhysical) {
                var E = F.blurAmountUniforms;
                E.fogColor.value.copy(t.fogColor), E.fogStrength.value = t.fogStrength, E.fogStart.value = t.fogStart
            }
        }
        P.uniforms.brightness.value = t.brightness, P.uniforms.whitePoint.value = t.whitePoint, G.render(.1), vt += 1
    }
}, XG.ShadowMapPlugin = function() {
    function e(e, t) {
        var r = new XG.DirectionalLight;
        r.isVirtual = !0, r.onlyShadow = !0, r.castShadow = !0, r.shadowCameraNear = e.shadowCameraNear, r.shadowCameraFar = e.shadowCameraFar, r.shadowCameraLeft = e.shadowCameraLeft, r.shadowCameraRight = e.shadowCameraRight, r.shadowCameraBottom = e.shadowCameraBottom, r.shadowCameraTop = e.shadowCameraTop, r.shadowCameraVisible = e.shadowCameraVisible, r.shadowDarkness = e.shadowDarkness, r.shadowBias = e.shadowCascadeBias[t], r.shadowMapWidth = e.shadowCascadeWidth[t], r.shadowMapHeight = e.shadowCascadeHeight[t], r.properties.pointsWorld = [], r.properties.pointsFrustum = [];
        for (var a = r.properties.pointsWorld, i = r.properties.pointsFrustum, o = 0; 8 > o; o++) a[o] = new XG.Vector3, i[o] = new XG.Vector3;
        var n = e.shadowCascadeNearZ[t],
            s = e.shadowCascadeFarZ[t];
        return i[0].set(-1, -1, n), i[1].set(1, -1, n), i[2].set(-1, 1, n), i[3].set(1, 1, n), i[4].set(-1, -1, s), i[5].set(1, -1, s), i[6].set(-1, 1, s), i[7].set(1, 1, s), r
    }

    function t(e, t) {
        var r = e.shadowCascadeArray[t];
        r.position.copy(e.position), r.target.position.copy(e.target.position), r.lookAt(r.target.position), r.shadowCameraVisible = e.shadowCameraVisible, r.shadowDarkness = e.shadowDarkness, r.shadowBias = e.shadowCascadeBias[t];
        var a = e.shadowCascadeNearZ[t],
            i = e.shadowCascadeFarZ[t],
            o = r.properties.pointsFrustum;
        o[0].setZ(a), o[1].setZ(a), o[2].setZ(a), o[3].setZ(a), o[4].setZ(i), o[5].setZ(i), o[6].setZ(i), o[7].setZ(i)
    }

    function r(e, t) {
        var r = t.properties,
            a = r.shadowCamera,
            i = r.pointsFrustum,
            o = r.pointsWorld;
        f.set(1 / 0, 1 / 0, 1 / 0), p.set(-1 / 0, -1 / 0, -1 / 0);
        for (var n = f.data, s = p.data, l = XG.ShadowMapPlugin.__projector, h = 0; 8 > h; h++) {
            var d = o[h],
                u = d.data;
            d.copy(i[h]), l.unprojectVector(d, e), a.matrixWorldInverse.multiplyVector3(d), u[0] < n[0] && (n[0] = u[0]), u[0] > s[0] && (s[0] = u[0]), u[1] < n[1] && (n[1] = u[1]), u[1] > s[1] && (s[1] = u[1]), u[2] < n[2] && (n[2] = u[2]), u[2] > s[2] && (s[2] = u[2])
        }
        a.left = n[0], a.right = s[0], a.top = s[1], a.bottom = n[1], a.updateProjectionMatrix()
    }
    var a, i, o, n, s, l, h, d, u = new XG.Frustum,
        c = new XG.Matrix4,
        f = new XG.Vector3,
        p = new XG.Vector3,
        m = [new XG.Vector3(0, -1, 0), new XG.Vector3(0, -1, 0), new XG.Vector3(0, 0, 1), new XG.Vector3(0, 0, -1), new XG.Vector3(0, -1, 0), new XG.Vector3(0, -1, 0)],
        v = [new XG.Vector3(1, 0, 0), new XG.Vector3(-1, 0, 0), new XG.Vector3(0, 1, 0), new XG.Vector3(0, -1, 0), new XG.Vector3(0, 0, 1), new XG.Vector3(0, 0, -1)],
        g = {};
    this.init = function(e) {
        a = e.context, i = e;
        var t = XG.ShaderLib.depthRGBA;
        d = XG.UniformsUtils.clone(t.uniforms), d.slopeScale.value = i.shadowMapSlopeScale, d.slopeBias.value = i.shadowMapSlopeBias, d.slopeMax.value = i.shadowMapSlopeMax;
        var r = i.shadowMapSlopeDepthBias && i.supportsStandardDerivatives(),
            u = {
                SLOPE_DEPTH_BIAS: r
            },
            c = {
                SLOPE_DEPTH_BIAS: r,
                SPRITE: !0,
                SDF: !0
            },
            f = {
                OES_standard_derivatives: r
            },
            p = {
                OES_standard_derivatives: !0
            },
            m = t.fragmentShader,
            v = t.vertexShader;
        o = new XG.ShaderMaterial({
            fragmentShader: m,
            vertexShader: v,
            uniforms: d,
            defines: u,
            extensions: f
        }), n = new XG.ShaderMaterial({
            fragmentShader: m,
            vertexShader: v,
            uniforms: d,
            defines: u,
            extensions: f,
            morphTargets: !0
        }), s = new XG.ShaderMaterial({
            fragmentShader: m,
            vertexShader: v,
            uniforms: d,
            defines: u,
            extensions: f,
            skinning: !0
        }), l = new XG.ShaderMaterial({
            fragmentShader: m,
            vertexShader: v,
            uniforms: d,
            defines: u,
            extensions: f,
            morphTargets: !0,
            skinning: !0
        }), h = new XG.ShaderMaterial({
            fragmentShader: m,
            vertexShader: v,
            uniforms: d,
            defines: c,
            extensions: p
        }), o._shadowPass = !0, n._shadowPass = !0, s._shadowPass = !0, l._shadowPass = !0, h._shadowPass = !0
    }, this.render = function(e, t) {
        i.shadowMapEnabled && i.shadowMapAutoUpdate && this.update(e, t)
    }, this.update = function(f, p) {
        var S, x, G, M, y, w, D, X, C, A, _, T, b, P, L, E = [],
            F = 0,
            R = null,
            U = null,
            N = i.supportsDepthTextures() && i.shadowMapUseDepthTextures;
        a.clearColor(1, 1, 1, 1), a.disable(a.BLEND);
        var I;
        for (I = i.shadowMapCullFace === XG.CullFaceFront ? XG.BackSide : i.shadowMapCullFace === XG.CullFaceBack ? XG.FrontSide : XG.DoubleSide, i.setDepthTest(!0), N && a.colorMask(!1, !1, !1, !1), S = 0, x = f.__lights.length; x > S; S++)
            if (b = f.__lights[S], b.castShadow)
                if ((b instanceof XG.DirectionalLight || b instanceof XG.DayLight || b instanceof XG.DayLightCube) && b.shadowCascade)
                    for (y = 0; y < b.shadowCascadeCount; y++) {
                        var B;
                        if (b.shadowCascadeArray[y]) B = b.shadowCascadeArray[y];
                        else {
                            B = e(b, y), B.originalCamera = p;
                            var O = new XG.Gyroscope;
                            O.position = b.shadowCascadeOffset, O.add(B), O.add(B.target), p.add(O), b.shadowCascadeArray[y] = B, console.log("Created virtualLight", B)
                        }
                        t(b, y), E[F] = B, F++
                    } else E[F] = b, F++;
        for (i.shadowMapSlopeDepthBias && (N ? i.setPolygonOffset(!0, 1.5, 10) : (d.slopeScale.value = i.shadowMapSlopeScale, d.slopeBias.value = i.shadowMapSlopeBias, d.slopeMax.value = i.shadowMapSlopeMax)), S = 0, x = E.length; x > S; S++) {
            if (b = E[S], P = b.properties, !P.shadowMap) {
                var k = i.shadowMapType === XG.PCFShadowMap ? XG.LinearFilter : XG.NearestFilter,
                    V = N ? XG.RGBFormat : XG.RGBAFormat,
                    H = i.shadowMapDepthTextureType,
                    z = {
                        minFilter: k,
                        magFilter: k,
                        format: V,
                        stencilBuffer: !1,
                        useDepthTexture: N,
                        depthTextureType: H
                    };
                P.shadowMap = new XG.RenderTarget(b.shadowMapWidth, b.shadowMapHeight, z), P.shadowMap.generateMipmaps = !1, P.shadowMapPars = new XG.Vector4(b.shadowMapWidth, b.shadowMapHeight, b.shadowDarkness, b.shadowBias), P.shadowMatrixForward = new XG.Matrix4
            }
            if (!P.shadowCamera) {
                var W = b.shadowMapWidth / b.shadowMapHeight;
                if (b instanceof XG.SpotLight) X = new XG.PerspectiveCamera(b.shadowCameraFov, W, b.shadowCameraNear, b.shadowCameraFar);
                else if (b instanceof XG.DirectionalLight || b instanceof XG.DayLight || b instanceof XG.DayLightCube) X = new XG.OrthographicCamera(b.shadowCameraLeft, b.shadowCameraRight, b.shadowCameraTop, b.shadowCameraBottom, b.shadowCameraNear, b.shadowCameraFar);
                else if (b instanceof XG.AreaLight) X = b.shadowCameraOrtho ? new XG.OrthographicCamera(b.shadowCameraLeft, b.shadowCameraRight, b.shadowCameraTop, b.shadowCameraBottom, b.shadowCameraNear, b.shadowCameraFar) : new XG.PerspectiveCamera(b.shadowCameraFov, W, b.shadowCameraNear, b.shadowCameraFar);
                else {
                    if (!(b instanceof XG.SphereLight)) {
                        console.error("XG:ShadowMapPlugin: Unsupported light type for shadow");
                        continue
                    }
                    X = [];
                    for (var j = 0; 6 > j; j++) {
                        var q = new XG.PerspectiveCamera(90, W, b.shadowCameraNear, b.shadowCameraFar);
                        q.up.copy(m[j]), q.lookAt(v[j]), X[j] = q
                    }
                }
                P.shadowCamera = X, b instanceof XG.SphereLight || (f.add(X), i.autoUpdateScene && f.updateMatrixWorld())
            }
            if (w = P.shadowMap, X = P.shadowCamera, D = P.shadowMatrixForward, P.shadowCamera instanceof Array && void 0 !== b.forwardShadowSide) {
                var K = b.forwardShadowSide;
                X = P.shadowCamera[K], X.position.copy(b.matrixWorld.getPosition())
            } else X.position.copy(b.matrixWorld.getPosition()), X.lookAt(b.target.matrixWorld.getPosition());
            for (X.updateMatrixWorld(), X.matrixWorldInverse.getInverse(X.matrixWorld), b.isVirtual && B.originalCamera == p && r(p, b), b.cameraHelper && (b.cameraHelper.visible = b.shadowCameraVisible), b.shadowCameraVisible && b.cameraHelper.update(), D.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), D.multiplySelf(X.projectionMatrix), D.multiplySelf(X.matrixWorldInverse), c.multiply(X.projectionMatrix, X.matrixWorldInverse), u.setFromMatrix(c), i.setRenderTarget(w), i.clear(), L = f.__webglObjects, G = 0, M = L.length; M > G; G++) _ = L[G], T = _.object, C = _.geometry, _.render = !1, T.visible && T.castShadow && ((T instanceof XG.Mesh || T instanceof XG.Particles) && T.frustumCulled && !u.contains(T, C) || (T._modelViewMatrix.multiply(X.matrixWorldInverse, T.matrixWorld), _.render = !0));
            var Z, Y, Q, J;
            for (G = 0, M = L.length; M > G; G++)
                if (_ = L[G], _.render && (T = _.object, C = _.geometry, J = C instanceof XG.SpriteGeometry, Z = J || _.transparent && _.transparent.forceShadow ? _.transparent : _.opaque, Z && Z.visible)) {
                    if (Y = C.morphTargets.length > 0 && Z.morphTargets, Q = T instanceof XG.SkinnedMesh && Z.skinning, T.customDepthMaterial) A = T.customDepthMaterial;
                    else if (Q) void 0 === g[Z.id] ? (A = Y ? l : s, g[Z.id] = A.clone(), g[Z.id]._shadowPass = !0) : A = g[Z.id];
                    else if (Y) A = n;
                    else if (J) {
                        A = h;
                        var $ = A.uniforms,
                            et = Z.uniforms;
                        $.map.value = et.map.value, $.alphaTest.value = et.alphaTest.value, $.epsilon.value = et.epsilon.value
                    } else A = o;
                    A.side = J ? XG.DoubleSide : I, i.setMaterialFaces(A), i.setProgram(X, f.__lights, R, U, A, T, C), i.renderGeometry(A, C, T)
                }
            for (L = f.__webglObjectsImmediate, G = 0, M = L.length; M > G; G++) _ = L[G], T = _.object, T.visible && T.castShadow && (u.contains(T, T) || !T.frustumCulled) && (T._modelViewMatrix.multiply(X.matrixWorldInverse, T.matrixWorld), i.renderImmediateObject(X, f.__lights, R, o, T))
        }
        var tt = i.getClearColor(),
            rt = i.getClearAlpha();
        a.clearColor(tt.r, tt.g, tt.b, rt), a.enable(a.BLEND), N && a.colorMask(!0, !0, !0, !0)
    }
}, XG.ShadowMapPlugin.__projector = new XG.Projector, XG.EffectComposer = function(e, t) {
    if (e ? e instanceof XG.DeferredRenderer && console.warn("XG.EffectComposer: passed deferred renderer parameter, probably not what you intended") : console.warn("XG.EffectComposer: undefined renderer"), this.renderer = e, void 0 === t) {
        var r = window.innerWidth || 1,
            a = window.innerHeight || 1,
            i = {
                minFilter: XG.LinearFilter,
                magFilter: XG.LinearFilter,
                format: XG.RGBAFormat,
                stencilBuffer: !1
            };
        t = new XG.RenderTarget(r, a, i)
    }
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.passes = [], this.copyPass = new XG.ShaderPass(XG.CopyShader)
}, XG.EffectComposer.prototype = {
    swapBuffers: function() {
        var e = this.readBuffer;
        this.readBuffer = this.writeBuffer, this.writeBuffer = e
    },
    addPass: function(e) {
        this.passes.push(e)
    },
    insertPass: function(e, t) {
        this.passes.splice(t, 0, e)
    },
    render: function(e) {
        this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
        var t, r, a = !1,
            i = this.passes.length;
        for (r = 0; i > r; r++)
            if (t = this.passes[r], t.enabled) {
                if (t.render(this.renderer, this.writeBuffer, this.readBuffer, e, a), t.needsSwap) {
                    if (a) {
                        var o = this.renderer.context;
                        o.stencilFunc(o.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), o.stencilFunc(o.EQUAL, 1, 4294967295)
                    }
                    this.swapBuffers()
                }
                t instanceof XG.MaskPass ? a = !0 : t instanceof XG.ClearMaskPass && (a = !1)
            }
    },
    setSize: function(e, t) {
        this.renderTarget1.setSize(e, t), this.renderTarget2.setSize(e, t)
    }
}, XG.EffectComposer.camera = new XG.OrthographicCamera(-1, 1, 1, -1, 0, 1), XG.EffectComposer.quad = new XG.Mesh(new XG.TriangleGeometry([
    [-1, -3, 0],
    [3, 1, 0],
    [-1, 1, 0]
], [
    [0, -1],
    [2, 1],
    [0, 1]
]), null), XG.EffectComposer.scene = new XG.Scene, XG.EffectComposer.scene.add(XG.EffectComposer.quad), XG.TexturePass = function(e, t) {
    var r = XG.CopyShader;
    this.uniforms = XG.UniformsUtils.clone(r.uniforms), this.uniforms.opacity.value = void 0 !== t ? t : 1, this.uniforms.tDiffuse.value = e, this.material = new XG.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: r.vertexShader,
        fragmentShader: r.fragmentShader
    }), this.enabled = !0, this.needsSwap = !1
}, XG.TexturePass.prototype = {
    render: function(e, t, r) {
        XG.EffectComposer.quad.materials[0] = this.material, e.render(XG.EffectComposer.scene, XG.EffectComposer.camera, r)
    }
}, XG.ShaderPass = function(e, t) {
    this.textureID = void 0 !== t ? t : "tDiffuse", this.uniforms = XG.UniformsUtils.clone(e.uniforms), this.material = new XG.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: e.vertexShader,
        fragmentShader: e.fragmentShader,
        defines: XG.UniformsUtils.cloneDefines(e.defines)
    }), this.renderToScreen = !1, this.enabled = !0, this.needsSwap = !0, this.clear = !1
}, XG.ShaderPass.prototype = {
    render: function(e, t, r) {
        this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = r), XG.EffectComposer.quad.materials[0] = this.material, this.renderToScreen ? e.render(XG.EffectComposer.scene, XG.EffectComposer.camera) : e.render(XG.EffectComposer.scene, XG.EffectComposer.camera, t, this.clear)
    }
}, XG.SavePass = function(e) {
    var t = XG.CopyShader;
    this.textureID = "tDiffuse", this.uniforms = XG.UniformsUtils.clone(t.uniforms), this.material = new XG.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: t.vertexShader,
        fragmentShader: t.fragmentShader
    }), this.renderTarget = e, void 0 === this.renderTarget && (this.renderTargetParameters = {
        minFilter: XG.LinearFilter,
        magFilter: XG.LinearFilter,
        format: XG.RGBAFormat,
        stencilBuffer: !1
    }, this.renderTarget = new XG.RenderTarget(window.innerWidth, window.innerHeight, this.renderTargetParameters)), this.enabled = !0, this.needsSwap = !1, this.clear = !1
}, XG.SavePass.prototype = {
    render: function(e, t, r) {
        this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = r), XG.EffectComposer.quad.materials[0] = this.material, e.render(XG.EffectComposer.scene, XG.EffectComposer.camera, this.renderTarget, this.clear)
    }
}, XG.RenderPass = function(e, t, r, a) {
    this.scene = e, this.camera = t, this.clearColor = r, this.clearAlpha = void 0 !== a ? a : 1, this.oldClearColor = new XG.Color, this.oldClearAlpha = 1, this.enabled = !0, this.clear = !0, this.needsSwap = !1
}, XG.RenderPass.prototype = {
    render: function(e, t, r) {
        this.clearColor && (this.oldClearColor.copy(e.getClearColor()), this.oldClearAlpha = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)), e.render(this.scene, this.camera, r, this.clear), this.clearColor && e.setClearColor(this.oldClearColor, this.oldClearAlpha)
    }
}, XG.MaskPass = function(e, t) {
    this.scene = e, this.camera = t, this.enabled = !0, this.clear = !0, this.needsSwap = !1, this.inverse = !1
}, XG.MaskPass.prototype = {
    render: function(e, t, r) {
        var a = e.context;
        a.colorMask(!1, !1, !1, !1), a.depthMask(!1);
        var i, o;
        this.inverse ? (i = 0, o = 1) : (i = 1, o = 0), a.enable(a.STENCIL_TEST), a.stencilOp(a.REPLACE, a.REPLACE, a.REPLACE), a.stencilFunc(a.ALWAYS, i, 4294967295), a.clearStencil(o), e.render(this.scene, this.camera, r, this.clear), e.render(this.scene, this.camera, t, this.clear), a.colorMask(!0, !0, !0, !0), a.depthMask(!0), a.stencilFunc(a.EQUAL, 1, 4294967295), a.stencilOp(a.KEEP, a.KEEP, a.KEEP)
    }
}, XG.ClearMaskPass = function() {
    this.enabled = !0
}, XG.ClearMaskPass.prototype = {
    render: function(e) {
        var t = e.context;
        t.disable(t.STENCIL_TEST)
    }
}, XG.BloomPass = function(e, t, r, a) {
    e = void 0 !== e ? e : 1, t = void 0 !== t ? t : 25, r = void 0 !== r ? r : 4, a = void 0 !== a ? a : 256;
    var i = {
        minFilter: XG.LinearFilter,
        magFilter: XG.LinearFilter,
        format: XG.RGBAFormat
    };
    this.renderTargetX = new XG.RenderTarget(a, a, i), this.renderTargetY = new XG.RenderTarget(a, a, i);
    var o = XG.CopyShader;
    this.copyUniforms = XG.UniformsUtils.clone(o.uniforms), this.copyUniforms.opacity.value = e, this.materialCopy = new XG.ShaderMaterial({
        uniforms: this.copyUniforms,
        vertexShader: o.vertexShader,
        fragmentShader: o.fragmentShader,
        blending: XG.AdditiveBlending,
        transparent: !0
    });
    var n = XG.ConvolutionShader;
    this.convolutionUniforms = XG.UniformsUtils.clone(n.uniforms), this.convolutionUniforms.uImageIncrement.value = XG.BloomPass.blurx, this.convolutionUniforms.cKernel.value = XG.ConvolutionShader.buildKernel(r), this.materialConvolution = new XG.ShaderMaterial({
        uniforms: this.convolutionUniforms,
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        defines: {
            KERNEL_SIZE_FLOAT: t.toFixed(1),
            KERNEL_SIZE_INT: t.toFixed(0)
        }
    }), this.enabled = !0, this.needsSwap = !1, this.clear = !1
}, XG.BloomPass.prototype = {
    render: function(e, t, r, a, i) {
        i && e.context.disable(e.context.STENCIL_TEST), XG.EffectComposer.quad.materials[0] = this.materialConvolution, this.convolutionUniforms.tDiffuse.value = r, this.convolutionUniforms.uImageIncrement.value = XG.BloomPass.blurX, e.render(XG.EffectComposer.scene, XG.EffectComposer.camera, this.renderTargetX, !0), this.convolutionUniforms.tDiffuse.value = this.renderTargetX, this.convolutionUniforms.uImageIncrement.value = XG.BloomPass.blurY, e.render(XG.EffectComposer.scene, XG.EffectComposer.camera, this.renderTargetY, !0), XG.EffectComposer.quad.materials[0] = this.materialCopy, this.copyUniforms.tDiffuse.value = this.renderTargetY, i && e.context.enable(e.context.STENCIL_TEST), e.render(XG.EffectComposer.scene, XG.EffectComposer.camera, r, this.clear)
    }
}, XG.BloomPass.blurX = new XG.Vector2(.001953125, 0), XG.BloomPass.blurY = new XG.Vector2(0, .001953125), XG.DepthOfFieldPass = function(e, t) {
    e = void 0 !== e ? e : 1024, t = void 0 !== t ? t : 512;
    var r = {
            minFilter: XG.LinearMipMapLinearFilter,
            magFilter: XG.LinearFilter,
            format: XG.RGBAFormat
        },
        a = {
            minFilter: XG.NearestFilter,
            magFilter: XG.NearestFilter,
            format: XG.RGBAFormat,
            type: XG.FloatType
        };
    this.renderTargetBlur = new XG.RenderTarget(e, t, r), this.renderTargetBlur.generateMipmaps = !0, this.renderTargetDistance1 = new XG.RenderTarget(2, 2, a), this.renderTargetDistance1.generateMipmaps = !1, this.renderTargetDistance2 = this.renderTargetDistance1.clone(), this.renderTargetDistanceRead = this.renderTargetDistance1, this.renderTargetDistanceWrite = this.renderTargetDistance2;
    var i = XG.CopyShader;
    this.copyUniforms = XG.UniformsUtils.clone(i.uniforms), this.materialCopy = new XG.ShaderMaterial({
        uniforms: this.copyUniforms,
        vertexShader: i.vertexShader,
        fragmentShader: i.fragmentShader,
        blending: XG.NoBlending,
        depthTest: !1,
        depthWrite: !1
    });
    var o = XG.DistanceShader;
    this.distanceUniforms = XG.UniformsUtils.clone(o.uniforms), this.materialDistance = new XG.ShaderMaterial({
        uniforms: this.distanceUniforms,
        vertexShader: o.vertexShader,
        fragmentShader: o.fragmentShader,
        blending: XG.NoBlending,
        depthTest: !1,
        depthWrite: !1
    });
    var n = XG.DepthOfFieldShader;
    this.dofUniforms = XG.UniformsUtils.clone(n.uniforms), this.materialDOF = new XG.ShaderMaterial({
        uniforms: this.dofUniforms,
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        blending: XG.NoBlending,
        depthTest: !1,
        depthWrite: !1
    }), this.dofUniforms.tBlur.value = this.renderTargetBlur, this.dofUniforms.blurSize.value.set(e, t), this.depthInput = null, this.colorInput = null, this.cameraNear = null, this.cameraFar = null, this.autoFocus = null, this.autoFocusPoint = null, this.focusDistance = null, this.focusRampStart = null, this.focusRampEnd = null, this.maxBlur = null, this.defines = null, this.enabled = !0, this.needsSwap = !0, this.clear = !1
}, XG.DepthOfFieldPass.prototype = {
    resize: function() {},
    render: function(e, t, r) {
        var a = this.dofUniforms,
            i = this.copyUniforms,
            o = this.distanceUniforms,
            n = this.renderTargetDistanceRead;
        this.renderTargetDistanceRead = this.renderTargetDistanceWrite, this.renderTargetDistanceWrite = n, a.tDepth.value = this.depthInput, o.tDepth.value = this.depthInput, a.autoFocus.value = this.autoFocus, a.autoFocusPoint.value.copy(this.autoFocusPoint), a.focusDistance.value = this.focusDistance, a.focusRampStart.value = this.focusRampStart, a.focusRampEnd.value = this.focusRampEnd, a.maxBlur.value = this.maxBlur, a.cameraNearFar.value.set(this.cameraNear, this.cameraFar), o.cameraNearFar.value.set(this.cameraNear, this.cameraFar), o.samplePoint.value.copy(this.autoFocusPoint), i.tDiffuse.value = r, a.tDiffuse.value = r, a.tDistance.value = this.renderTargetDistanceRead, o.tDistance.value = this.renderTargetDistanceRead, this.materialDistance.defines = this.defines, this.materialDOF.defines = this.defines, XG.EffectComposer.quad.materials[0] = this.materialCopy, e.render(XG.EffectComposer.scene, XG.EffectComposer.camera, this.renderTargetBlur, !0), XG.EffectComposer.quad.materials[0] = this.materialDOF, this.renderToScreen ? e.render(XG.EffectComposer.scene, XG.EffectComposer.camera) : e.render(XG.EffectComposer.scene, XG.EffectComposer.camera, t, this.clear), XG.EffectComposer.quad.materials[0] = this.materialDistance, e.render(XG.EffectComposer.scene, XG.EffectComposer.camera, this.renderTargetDistanceWrite, !1)
    }
}, XG.FancyDepthOfFieldPass = function(e, t, r, a) {
    this.blurScale = void 0 !== r ? r : .75;
    var i, o, n, s = Math.floor(this.blurScale * e),
        l = Math.floor(this.blurScale * t),
        h = {
            minFilter: XG.NearestFilter,
            magFilter: XG.NearestFilter,
            stencilBuffer: !1,
            format: XG.RGBAFormat,
            type: XG.FloatType
        },
        d = {
            minFilter: XG.NearestFilter,
            magFilter: XG.NearestFilter,
            stencilBuffer: !1,
            format: XG.RGBAFormat,
            type: XG.HalfFloatType
        },
        u = {
            minFilter: XG.NearestFilter,
            magFilter: XG.LinearFilter,
            stencilBuffer: !1,
            format: XG.RGBAFormat,
            type: XG.FloatType
        },
        c = {
            minFilter: XG.NearestFilter,
            magFilter: XG.NearestFilter,
            stencilBuffer: !1,
            format: XG.RGBAFormat,
            type: XG.FloatType
        },
        f = {
            minFilter: XG.NearestFilter,
            magFilter: XG.LinearFilter,
            stencilBuffer: !1,
            format: XG.RGBAFormat,
            type: XG.HalfFloatType
        },
        p = {
            minFilter: XG.NearestFilter,
            magFilter: XG.NearestFilter,
            stencilBuffer: !1,
            format: XG.RGBAFormat,
            type: XG.HalfFloatType
        },
        m = {
            minFilter: XG.NearestFilter,
            magFilter: XG.LinearFilter,
            stencilBuffer: !1,
            format: XG.RGBAFormat,
            type: XG.UnsignedByteType
        };
    a.hasHalfFloatsLinear ? (i = f, n = d, o = f) : a.hasHalfFloatsNearest ? (i = p, n = d, o = p) : a.hasFloatsLinear ? (i = u, n = h, o = u) : a.hasFloatsNearest ? (i = c, n = h, o = c) : (i = m, n = m, o = m), this.renderTargetBlurAmount = new XG.RenderTarget(s, l, o), this.renderTargetBlurAmount.generateMipmaps = !1, this.renderTargetBlurPass1 = new XG.RenderTarget(s, l, i), this.renderTargetBlurPass1.generateMipmaps = !1, this.renderTargetBlurPass2 = new XG.RenderTarget(s, l, i), this.renderTargetBlurPass2.generateMipmaps = !1, this.renderTargetDistance1 = new XG.RenderTarget(2, 2, n), this.renderTargetDistance1.generateMipmaps = !1, this.renderTargetDistance2 = this.renderTargetDistance1.clone(), this.renderTargetDistanceRead = this.renderTargetDistance1, this.renderTargetDistanceWrite = this.renderTargetDistance2;
    var v = XG.DOFBlurAmountShader;
    this.blurAmountUniforms = XG.UniformsUtils.clone(v.uniforms), this.materialBlurAmount = new XG.ShaderMaterial({
        uniforms: this.blurAmountUniforms,
        vertexShader: v.vertexShader,
        fragmentShader: v.fragmentShader,
        blending: XG.NoBlending,
        depthTest: !1,
        depthWrite: !1
    });
    var g = XG.DistanceShader;
    this.distanceUniforms = XG.UniformsUtils.clone(g.uniforms), this.materialDistance = new XG.ShaderMaterial({
        uniforms: this.distanceUniforms,
        vertexShader: g.vertexShader,
        fragmentShader: g.fragmentShader,
        blending: XG.NoBlending,
        depthTest: !1,
        depthWrite: !1
    });
    var S = XG.DOFBlurPass1Shader;
    this.dofPass1Uniforms = XG.UniformsUtils.clone(S.uniforms), this.materialDOFPass1 = new XG.ShaderMaterial({
        uniforms: this.dofPass1Uniforms,
        vertexShader: S.vertexShader,
        fragmentShader: S.fragmentShader,
        blending: XG.NoBlending,
        depthTest: !1,
        depthWrite: !1
    });
    var x = XG.DOFBlurPass2Shader;
    this.dofPass2Uniforms = XG.UniformsUtils.clone(x.uniforms), this.materialDOFPass2 = new XG.ShaderMaterial({
        uniforms: this.dofPass2Uniforms,
        vertexShader: x.vertexShader,
        fragmentShader: x.fragmentShader,
        blending: XG.NoBlending,
        depthTest: !1,
        depthWrite: !1
    }), this.depthInput = null, this.colorInput = null, this.cameraNear = null, this.cameraFar = null, this.autoFocus = null, this.autoFocusPoint = null, this.focusDistance = null, this.focusRampStart = null, this.focusRampEnd = null, this.maxBlur = null, this.lensFstop = null, this.lensFocalLength = null, this.lensBlurScale = null, this.lensMaxCoc = null, this.lensApertureSides = null, this.defines = null, this.oldLensApertureSides = null, this.enabled = !0, this.needsSwap = !0, this.clear = !1
}, XG.FancyDepthOfFieldPass.prototype = {
    setLensApertureSides: function(e) {
        (void 0 === e || 3 > e) && (e = 3), this.dofPass1Uniforms.samplePoints1.value = XG.Math.generateConcentricCircleSamples(7, e), this.dofPass1Uniforms.samplePoints2.value = XG.Math.generateConcentricCircleSamples(3, e), this.dofPass2Uniforms.samplePoints.value = XG.Math.generateConcentricCircleSamples(3, e)
    },
    resize: function(e, t) {
        var r = Math.floor(this.blurScale * e),
            a = Math.floor(this.blurScale * t);
        this.renderTargetBlurAmount.setSize(r, a), this.renderTargetBlurPass1.setSize(r, a), this.renderTargetBlurPass2.setSize(r, a)
    },
    render: function(e) {
        var t = this.dofPass1Uniforms,
            r = this.dofPass2Uniforms,
            a = this.blurAmountUniforms,
            i = (this.blurCompositeUniforms, this.distanceUniforms),
            o = this.renderTargetDistanceRead;
        if (this.renderTargetDistanceRead = this.renderTargetDistanceWrite, this.renderTargetDistanceWrite = o, this.lensApertureSides !== this.oldLensApertureSides) {
            var n = XG.Math.generateConcentricCircleSamples(7, this.lensApertureSides),
                s = XG.Math.generateConcentricCircleSamples(3, this.lensApertureSides);
            t.samplePoints1.value = n, t.samplePoints2.value = s, r.samplePoints.value = s, this.oldLensApertureSides = this.lensApertureSides
        }
        a.tDepth.value = this.depthInput, i.tDepth.value = this.depthInput, t.tDiffuse.value = this.colorInput, t.resolution.value.set(this.colorInput.width, this.colorInput.height), a.tDiffuse.value = this.colorInput, a.resolution.value.set(this.colorInput.width, this.colorInput.height), a.cameraNearFar.value.set(this.cameraNear, this.cameraFar), a.autoFocus.value = this.autoFocus, a.autoFocusPoint.value.copy(this.autoFocusPoint), a.focusDistance.value = this.focusDistance, a.focusRampStart.value = this.focusRampStart, a.focusRampEnd.value = this.focusRampEnd, a.maxBlur.value = this.maxBlur, a.lensAperture.value = this.lensFocalLength / this.lensFstop, a.lensFocalLength.value = this.lensFocalLength, a.lensBlurScale.value = this.lensBlurScale, a.lensMaxCoc.value = this.lensMaxCoc, i.cameraNearFar.value.set(this.cameraNear, this.cameraFar), i.samplePoint.value.copy(this.autoFocusPoint), t.tBlurAmount.value = this.renderTargetBlurAmount, r.tBlurAmount.value = this.renderTargetBlurAmount, a.tDistance.value = this.renderTargetDistanceRead, i.tDistance.value = this.renderTargetDistanceRead, r.tDiffuse.value = this.renderTargetBlurPass1, r.resolution.value.set(this.colorInput.width, this.colorInput.height), this.materialBlurAmount.defines = this.defines, this.materialDistance.defines = this.defines, this.materialDOFPass1.defines = this.defines, this.materialDOFPass2.defines = this.defines, XG.EffectComposer.quad.materials[0] = this.materialBlurAmount, e.render(XG.EffectComposer.scene, XG.EffectComposer.camera, this.renderTargetBlurAmount, !0), XG.EffectComposer.quad.materials[0] = this.materialDOFPass1, e.render(XG.EffectComposer.scene, XG.EffectComposer.camera, this.renderTargetBlurPass1, !0), XG.EffectComposer.quad.materials[0] = this.materialDOFPass2, e.render(XG.EffectComposer.scene, XG.EffectComposer.camera, this.renderTargetBlurPass2, !0), XG.EffectComposer.quad.materials[0] = this.materialDistance, e.render(XG.EffectComposer.scene, XG.EffectComposer.camera, this.renderTargetDistanceWrite, !1)
    }
}, XG.PhysicsSimulation = function(e) {
    var t = this,
        r = void 0 !== e.useTransferables ? e.useTransferables : !1,
        a = void 0 !== e.workerUrl ? e.workerUrl : "js/ammo/ammo.worker.js";
    this.currentFrame = 0, this.currentFPS = 0, this.allFPS = 0, this.callbackIdle = null, this.callbackInitialized = null;
    var i, o = 6,
        n = 7,
        s = new Float32Array(0),
        l = [],
        h = [],
        d = [],
        u = [],
        c = [],
        f = function(e) {
            for (var t = 0, r = e.length; r > t; t++)
                for (var a = e[t].wheels, i = 0, o = a.length; o > i; i++) {
                    var n = a[i],
                        s = h.length;
                    h.push(n.mesh), n.mesh = s
                }
        },
        p = function(e, t) {
            for (var r = (e.length - t) / n, a = l.length, i = Math.min(r, a), o = 0; i > o; o++) {
                var s = l[o],
                    h = s.position.data,
                    d = s.quaternion.data;
                e[t] = h[0], e[t + 1] = h[1], e[t + 2] = h[2], e[t + 3] = d[0], e[t + 4] = d[1], e[t + 5] = d[2], e[t + 6] = d[3], t += n
            }
        },
        m = function(e, t, r) {
            var a = l.length,
                i = Math.min(r, a);
            r !== a && console.warn("Number of physics bodies = ", r, " while number of rendering bodies = ", a);
            for (var o = 0; i > o; o++) {
                var s = l[o],
                    h = s.position.data,
                    d = s.quaternion.data;
                h[0] = e[t], h[1] = e[t + 1], h[2] = e[t + 2], d[0] = e[t + 3], d[1] = e[t + 4], d[2] = e[t + 5], d[3] = e[t + 6], t += n
            }
            return t
        },
        v = function(e, t, r) {
            var a = h.length,
                i = Math.min(r, a);
            r !== a && console.warn("Number of physics wheels = ", r, " while number of rendering wheels = ", a);
            for (var o = 0; i > o; o++) {
                var s = h[o],
                    l = s.position.data,
                    d = s.quaternion.data;
                l[0] = e[t], l[1] = e[t + 1], l[2] = e[t + 2], d[0] = e[t + 3], d[1] = e[t + 4], d[2] = e[t + 5], d[3] = e[t + 6], t += n
            }
            return t
        },
        g = function(e, t, r) {
            var a = c.length,
                i = Math.min(r, a);
            r !== a && console.warn("Number of physics vehicles = ", r, " while number of local vehicles = ", a);
            for (var o = 0; i > o; o++) {
                var n = c[o],
                    s = e[t];
                n.speed = s, t += 1
            }
            return t
        },
        S = function(e) {
            var a, n = !1;
            r && (e instanceof Float32Array ? (a = e.buffer, 0 === e.length && a.byteLength > 0 && (e = new Float32Array(a))) : e instanceof ArrayBuffer && (a = e, e = new Float32Array(a), n = !0));
            var s = 0,
                l = e[0];
            if (l >= t.currentFrame) {
                t.currentFrame = l, t.currentFPS = e[1], t.allFPS = e[2];
                var h = e[3],
                    d = e[4],
                    u = e[5];
                s += o, s = m(e, s, h), s = v(e, s, u), s = g(e, s, d)
            } else console.warn("Physics simulation frames received out of order");
            r && (n ? i.postMessage(e, [e.buffer]) : i.postMessage(e.buffer, [e.buffer]))
        },
        x = function(e) {
            var r = e.data;
            if (r instanceof Float32Array || r instanceof ArrayBuffer && r.byteLength > 1) S(r);
            else {
                var a = r;
                "simulationIdle" === a.type ? t.callbackIdle && t.callbackIdle() : "simulationInitialized" === a.type ? t.callbackInitialized && t.callbackInitialized() : "debug" === a.type && console.log(a.content)
            }
        };
    this.loadPhysicsVehicle = function(e) {
        var t, r, a, i, o, n = e.chassisUrl,
            s = e.wheelUrl,
            l = e.scale,
            h = e.position,
            d = e.chassisOffset,
            u = e.chassisShape,
            c = e.chassisPhysicsProperties,
            f = e.vehiclePhysicsProperties,
            p = e.wheels,
            m = e.callback,
            v = e.debugPhysicsShapes,
            g = [],
            S = 0,
            x = function() {
                if (S += 1, 2 === S) {
                    var e = [t];
                    e = e.concat(g), f.wheels = [];
                    for (var n = 0, s = p.length; s > n; n++) {
                        var h = p[n],
                            d = {
                                mesh: g[n],
                                isFrontWheel: h.isFrontWheel,
                                wheelRadius: h.wheelRadius,
                                suspensionRestLength: h.suspensionRestLength,
                                connectionPoint: h.connectionPoint,
                                wheelDirection: h.wheelDirection,
                                wheelAxle: h.wheelAxle,
                                tuning: h.tuning
                            };
                        f.wheels.push(d)
                    }
                    t.properties.physics = c;
                    var v = {
                        chassisGeometries: r,
                        wheelGeometries: a,
                        chassisMaterials: i,
                        wheelMaterials: o,
                        parts: e,
                        chassisShape: u,
                        vehiclePhysicsProperties: f,
                        scale: l
                    };
                    m(v)
                }
            },
            G = new XG.UTF8Loader;
        G.load(n, function(e, a) {
            if (r = e, i = a, XG.GeometryUtils.center(e), d) {
                var o = new XG.Matrix4,
                    n = new XG.Vector3(d[0], d[1], d[2]);
                o.makeTranslation(n);
                for (var s = 0; s < e.length; s++) {
                    var c = e[s];
                    c.applyMatrix(o)
                }
            }
            if (t = new XG.Mesh(e, a), t.scale.multiplyScalar(l), t.position.set(h[0], h[1], h[2]), t.useQuaternion = !0, t.castShadow = !0, t.receiveShadow = !0, t.visible = !1, v)
                for (var f = [16711680, 16755200, 16711935, 65280, 16776960], p = new XG.Vector3(1, 1, 1).multiplyScalar(1 / l), m = new XG.Vector3, g = new XG.Matrix4, S = new XG.Matrix4, s = 0, G = u.children.length; G > s; s++) {
                    var M = new XG.EmissiveMaterial({
                            color: f[s % f.length],
                            transparent: !0,
                            opacity: .8
                        }),
                        y = u.children[s],
                        w = y.position;
                    m.set(w[0], w[1], w[2]), S.makeScale(p), g.makeTranslation(m);
                    var D = new XG.BoxGeometry(2 * y.sx, 2 * y.sy, 2 * y.sz);
                    D.applyMatrix(g), D.applyMatrix(S), D.computeBoundingSphere(), e.push(D), a.push(M)
                }
            x()
        }), G.load(s, function(e, t) {
            a = e, o = t, XG.GeometryUtils.center(e);
            for (var r = 0, i = p.length; i > r; r++) {
                var n = p[r],
                    s = new XG.Mesh(e, t);
                s.castShadow = !0, s.receiveShadow = !0, s.visible = !1;
                var d;
                n.mirrored ? (s.rotation.y = Math.PI, d = new XG.Node, d.add(s)) : d = s, d.useQuaternion = !0, d.scale.multiplyScalar(l), d.position.set(h[0], h[1], h[2]), g.push(d)
            }
            x()
        })
    }, this.applyEngineForce = function(e, t, r) {
        if (i) {
            var a = {
                type: "applyEngineForce",
                force: e,
                vehicleId: t,
                wheelId: r
            };
            i.postMessage(a)
        }
    }, this.setSteering = function(e, t, r) {
        if (i) {
            var a = {
                type: "setSteering",
                steering: e,
                vehicleId: t,
                wheelId: r
            };
            i.postMessage(a)
        }
    }, this.setBrake = function(e, t, r) {
        if (i) {
            var a = {
                type: "setBrake",
                brake: e,
                vehicleId: t,
                wheelId: r
            };
            i.postMessage(a)
        }
    }, this.setGravity = function(e, t, r) {
        if (i) {
            var a = {
                type: "setGravity",
                value: [e, t, r]
            };
            i.postMessage(a)
        }
    }, this.resetTransforms = function() {
        if (i) {
            var e = l.length,
                t = e * n;
            s.length < t && (s = new Float32Array(t)), p(s, 0);
            var r = {
                type: "resetTransforms",
                nObjects: e,
                transforms: s
            };
            i.postMessage(r)
        }
    }, this.startPhysics = function(e) {
        l = e.objects, d = e.shapes, void 0 !== e.constraints && (u = e.constraints), void 0 !== e.vehicles && (c = e.vehicles, f(e.vehicles));
        for (var t = [], r = 0, o = l.length; o > r; r++) {
            var h = l[r],
                m = h.properties.physics,
                v = r,
                g = m.shapeId,
                S = void 0 !== m.mass ? m.mass : 1,
                G = void 0 !== m.linearSleepThreshold ? m.linearSleepThreshold : .8,
                M = void 0 !== m.angularSleepThreshold ? m.angularSleepThreshold : 1,
                y = {
                    bodyId: v,
                    shapeId: g,
                    mass: S,
                    linearSleepThreshold: G,
                    angularSleepThreshold: M
                };
            t.push(y)
        }
        var w = l.length,
            D = w * n;
        s.length < D && (s = new Float32Array(D)), p(s, 0), i = new Worker(a), i.onmessage = x;
        var X = void 0 !== e.gravity ? e.gravity : [0, -9.81, 0],
            C = void 0 !== e.floorEnabled ? e.floorEnabled : !0,
            A = {
                type: "init",
                nObjects: w,
                transforms: s,
                objectsData: t,
                shapesData: d,
                constraintsData: u,
                vehiclesData: c,
                floorEnabled: C,
                floorSize: .5 * e.floorSize,
                floorHeight: e.floorHeight,
                gravity: X
            };
        i.postMessage(A)
    }
};
var Detector = {
        canvas: !!window.CanvasRenderingContext2D,
        webgl: function() {
            try {
                var e = document.createElement("canvas");
                return !(!window.WebGLRenderingContext || !e.getContext("webgl") && !e.getContext("experimental-webgl"))
            } catch (t) {
                return !1
            }
        }(),
        workers: !!window.Worker,
        fileapi: window.File && window.FileReader && window.FileList && window.Blob,
        supportsTransferables: function() {
            var e = !1;
            try {
                var t = new ArrayBuffer(1),
                    r = window.URL || window.webkitURL,
                    a = new Blob([""], {
                        type: "application/x-javascript"
                    }),
                    i = r.createObjectURL(a),
                    o = new Worker(i);
                o.postMessage(t, [t]), e = 0 === t.byteLength
            } catch (n) {
                console.error(n)
            }
            return e
        },
        deferredCapable: function() {
            function e(e, t, r) {
                var a = e.createFramebuffer(),
                    i = e.createTexture();
                e.bindTexture(e.TEXTURE_2D, i), e.texImage2D(e.TEXTURE_2D, 0, t, 2, 2, 0, t, r, null), e.bindFramebuffer(e.FRAMEBUFFER, a), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, i, 0);
                var o = e.checkFramebufferStatus(e.FRAMEBUFFER);
                return e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindTexture(e.TEXTURE_2D, null), o === e.FRAMEBUFFER_COMPLETE
            }
            try {
                var t = document.createElement("canvas"),
                    r = t.getContext("webgl") || t.getContext("experimental-webgl"),
                    a = r.getExtension("OES_texture_float"),
                    i = r.getExtension("WEBGL_draw_buffers"),
                    o = a && e(r, r.RGBA, r.FLOAT);
                return o || !!i
            } catch (n) {
                return !1
            }
        }(),
        getWebGLErrorMessage: function(e) {
            var t = window.innerHeight,
                r = (window.screen.availHeight, 50),
                a = 4,
                i = 0;
            451 > t && (a = 1, r = 75);
            var o = document.createElement("div");
            o.style.border = "solid 0px #f00", o.style.color = "#eee", o.style.width = "100%", o.style.height = t - i + "px", o.style.position = "absolute", o.style.top = "0px", o.style.left = "0px", o.style.margin = "0", o.style.padding = "0", o.style.paddingBottom = i + "px", o.style.display = "block", o.style.backgroundSize = "auto 100%", e && (o.style.background = "url('" + e + "') no-repeat center");
            var n = document.createElement("div");
            n.style.fontFamily = "Avenir, Helvetica, Arial, sans-serif", n.style.fontWeight = "bold", n.style.textAlign = "center", n.style.lineHeight = "1.5em", n.style.background = "#000", n.style.opacity = "0.75", n.style.padding = "1em", n.style.margin = "0 auto 0", n.style.marginTop = a + "em", n.style.width = r + "%", n.style.border = "solid 0px #fff";
            var s = "",
                l = ["<b>THIS DEMO REQUIRES WEBGL</b><br/><br/>", 'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" target="_top">WebGL</a>.<br/>', 'Find out how to get WebGL working <a href="http://get.webgl.org/" target="_top">here</a> or try visiting with a different browser or computer.'].join("\n"),
                h = ["<b>THIS DEMO REQUIRES WEBGL</b><br/><br/>", 'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" target="_top">WebGL</a>.<br/>', 'Find out how to get browser with WebGL support <a href="http://get.webgl.org/" target="_top">here</a>.'].join("\n"),
                d = ["<b>THIS DEMO REQUIRES ADVANCED WEBGL FEATURES</b><br/><br/>", 'Your graphics card or browser does not seem to support rendering into <a href="https://www.khronos.org/registry/webgl/extensions/WEBGL_draw_buffers/" target="_top">Multiple-Render-Targets</a>', ' or <a href="https://www.khronos.org/registry/webgl/extensions/OES_texture_float/" target="_top">Floating Point Render-Targets</a>.<br/><br/>', "Try visiting on a different browser or different computer (try desktop PC or notebook, only very few phones or tablets support required features)."].join("\n");
            return this.webgl ? this.deferredCapable || (s = d) : s = window.WebGLRenderingContext ? l : h, n.innerHTML = s, o.appendChild(n), o
        },
        addGetWebGLMessage: function(e) {
            e = e || {};
            var t = void 0 !== e.parent ? e.parent : document.body,
                r = void 0 !== e.id ? e.id : "oldie",
                a = void 0 !== e.fallbackImg ? e.fallbackImg : null,
                i = Detector.getWebGLErrorMessage(a);
            i.id = r;
            var o = 0,
                n = function() {
                    var e = (document.body, document.documentElement, window.innerHeight);
                    i.style.height = e - o + "px"
                };
            window.addEventListener("resize", n, !1), t.appendChild(i)
        }
    },
    GPUDetector = function() {
        var e = void 0,
            t = {},
            r = [
                ["Nvidia", "GeForce", "GTX Titan X SLI", 28274, !0, !0],
                ["Nvidia", "GeForce", "GTX 980 Ti SLI", 26966, !0, !0],
                ["AMD", "Radeon", "R9 295X2", 22073, !0, !0],
                ["Nvidia", "GeForce", "GTX 980M SLI", 18632, !1, !0],
                ["Nvidia", "GeForce", "GTX Titan Z", 17851, !0, !0],
                ["Nvidia", "GeForce", "GTX Titan X", 17470, !0, !1],
                ["Nvidia", "Quadro", "M6000", 16993, !0, !1],
                ["Nvidia", "GeForce", "GTX 980 Ti", 16978, !0, !1],
                ["AMD", "Radeon", "R9 Fury X", 16096, !0, !1],
                ["Nvidia", "GeForce", "GTX 970M SLI", 14873, !1, !0],
                ["AMD", "Radeon", "R9 Fury", 14580, !0, !1],
                ["AMD", "Radeon", "R9 Nano", 13888, !0, !1],
                ["Nvidia", "GeForce", "GTX 980", 13386, !0, !1],
                ["Nvidia", "GeForce", "GTX 980 notebook", 13340, !1, !1],
                ["AMD", "Radeon", "R9 390X", 12855, !0, !1],
                ["AMD", "Radeon", "R9 390", 12044, !0, !1],
                ["AMD", "Radeon", "R9 290X", 11862, !0, !1],
                ["Nvidia", "GeForce", "GTX 880M SLI", 11817, !1, !0],
                ["Nvidia", "GeForce", "GTX 690", 11713, !0, !0],
                ["Nvidia", "GeForce", "GTX Titan Black", 11494, !0, !1],
                ["Nvidia", "GeForce", "GTX 780 Ti", 11275, !0, !1],
                ["Nvidia", "GeForce", "GTX 780M SLI", 10091, !1, !0],
                ["Nvidia", "GeForce", "GTX 970", 10282, !0, !1],
                ["AMD", "Radeon", "R9 290", 10019, !0, !1],
                ["Nvidia", "GeForce", "GTX Titan", 9913, !0, !1],
                ["Nvidia", "GeForce", "GTX 980M", 9741, !1, !1],
                ["Nvidia", "Quadro", "K6000", 9717, !0, !1],
                ["Nvidia", "GeForce", "GTX 780", 9471, !0, !1],
                ["AMD", "Radeon", "R9 380X", 9250, !0, !1],
                ["Nvidia", "Quadro", "M5000M", 9103, !1, !1],
                ["AMD", "Radeon", "R9 280X", 8402, !0, !1],
                ["AMD", "Radeon", "R9 380", 8334, !0, !1],
                ["AMD", "FirePro", "W8100", 8159, !0, !1],
                ["AMD", "Radeon", "R9 285", 7951, !0, !1],
                ["AMD", "Radeon", "HD 7970", 7852, !0, !1],
                ["Nvidia", "GeForce", "GTX 770", 7707, !0, !1],
                ["Nvidia", "GeForce", "GTX 970M", 7615, !1, !1],
                ["Nvidia", "GeForce", "GTX 960", 7542, !0, !1],
                ["AMD", "Radeon", "R9 280", 7223, !0, !1],
                ["Nvidia", "GeForce", "GTX 680", 7001, !0, !1],
                ["AMD", "Radeon", "R9 M395X", 6859, !1, !1],
                ["AMD", "Radeon", "R9 M395", 6819, !1, !1],
                ["Nvidia", "GeForce", "GTX 950", 6764, !0, !1],
                ["AMD", "Radeon", "R9 M295X", 6590, !1, !1],
                ["AMD", "Radeon", "HD 7950", 6410, !0, !1],
                ["Nvidia", "GeForce", "GTX 670", 6286, !0, !1],
                ["Nvidia", "GeForce", "GTX 880M", 6101, !1, !1],
                ["Nvidia", "GeForce", "GTX 860M SLI", 5941, !1, !0],
                ["AMD", "Radeon", "R9 270X", 5954, !0, !1],
                ["Nvidia", "GeForce", "GTX 760", 5906, !0, !1],
                ["Nvidia", "GeForce", "GTX 660 Ti", 5720, !0, !1],
                ["AMD", "Radeon", "R9 270", 5716, !0, !1],
                ["Nvidia", "GeForce", "GTX 965M", 5394, !1, !1],
                ["AMD", "Radeon", "HD 7870", 5295, !0, !1],
                ["AMD", "Radeon", "R9 M290X", 5294, !1, !1],
                ["Nvidia", "GeForce", "GTX 780M", 5244, !1, !1],
                ["Nvidia", "GeForce", "GTX 580", 5045, !0, !0],
                ["AMD", "Radeon", "R9 370", 5041, !0, !1],
                ["AMD", "Radeon", "HD 8970M", 5038, !1, !1],
                ["Nvidia", "Quadro", "K5000", 5007, !0, !1],
                ["AMD", "Radeon", "R7 265", 4948, !0, !1],
                ["Nvidia", "Quadro", "K5100M", 4776, !1, !1],
                ["Nvidia", "GeForce", "GTX 680MX", 4758, !1, !1],
                ["Nvidia", "GeForce", "GTX 870M", 4694, !1, !1],
                ["AMD", "Radeon", "HD 7970M", 4694, !1, !1],
                ["Nvidia", "GeForce", "GTX 660", 4524, !0, !1],
                ["Nvidia", "GeForce", "GTX 960M", 4365, !1, !1],
                ["Nvidia", "GeForce", "GTX 570", 4336, !0, !1],
                ["AMD", "Radeon", "HD 7850", 4224, !0, !1],
                ["Nvidia", "GeForce", "GTX 750 Ti", 4211, !0, !1],
                ["Nvidia", "GeForce", "GT 755M SLI", 4106, !1, !0],
                ["Nvidia", "GeForce", "GTX 680M", 4049, !1, !1],
                ["AMD", "Radeon", "R9 260X", 4016, !0, !1],
                ["AMD", "Radeon", "HD 6970", 3995, !0, !1],
                ["Nvidia", "GeForce", "GTX 860M", 3919, !1, !1],
                ["AMD", "Radeon", "R7 260", 3885, !0, !1],
                ["AMD", "Radeon", "R9 360", 3839, !0, !1],
                ["AMD", "FirePro", "M6100", 3837, !1, !1],
                ["Nvidia", "GeForce", "GTX 750", 3810, !0, !1],
                ["AMD", "Radeon", "HD 7790", 3759, !0, !1],
                ["Nvidia", "GeForce", "GT 750M SLI", 3703, !1, !0],
                ["Nvidia", "Quadro", "K4100M", 3654, !1, !1],
                ["AMD", "Radeon", "HD 5870", 3613, !0, !1],
                ["Nvidia", "GeForce", "GTX 950M", 3568, !1, !1],
                ["AMD", "Radeon", "HD 6950", 3553, !0, !1],
                ["Nvidia", "GeForce", "GTX 480", 3480, !0, !1],
                ["AMD", "Radeon", "R9 M385X", 3352, !1, !1],
                ["AMD", "Radeon", "R9 M280X", 3349, !1, !1],
                ["Nvidia", "GeForce", "GTX 770M", 3347, !1, !1],
                ["Nvidia", "GeForce", "GTX 560 Ti", 3256, !0, !1],
                ["Nvidia", "GeForce", "GTX 650 Ti", 3329, !0, !1],
                ["Nvidia", "Quadro", "K4000", 3229, !0, !1],
                ["AMD", "Radeon", "HD 6870", 3204, !0, !1],
                ["Nvidia", "GeForce", "GTX 850M", 3118, !1, !1],
                ["AMD", "Radeon", "HD 5850", 3037, !0, !1],
                ["AMD", "Radeon", "HD 7770", 3016, !0, !1],
                ["Nvidia", "GeForce", "GTX 560", 2886, !0, !1],
                ["Nvidia", "GeForce", "945M", 2884, !1, !1],
                ["Nvidia", "GeForce", "GTX 675MX", 2831, !0, !1],
                ["Nvidia", "GeForce", "GTX 470", 2802, !0, !1],
                ["Nvidia", "Quadro", "K5000M", 2797, !1, !1],
                ["AMD", "Radeon", "HD 5830", 2778, !0, !1],
                ["Nvidia", "GeForce", "GTX 460", 2762, !0, !1],
                ["AMD", "Radeon", "HD 6850", 2707, !0, !1],
                ["Nvidia", "Quadro", "6000", 2563, !0, !1],
                ["AMD", "Radeon", "HD 6990M", 2560, !1, !1],
                ["Nvidia", "GeForce", "GTX 580M", 2509, !1, !1],
                ["Nvidia", "GeForce", "GTX 765M", 2479, !1, !1],
                ["AMD", "Radeon", "HD 7870M", 2478, !1, !1],
                ["AMD", "Radeon", "R9 M370X", 2419, !1, !1],
                ["Nvidia", "Quadro", "K620", 2381, !0, !1],
                ["Nvidia", "Quadro", "K3100M", 2381, !1, !1],
                ["Nvidia", "GeForce", "845M", 2362, !1, !1],
                ["Nvidia", "GeForce", "GTX 675M", 2331, !1, !1],
                ["Nvidia", "GeForce", "GTX 485M", 2330, !1, !1],
                ["AMD", "FirePro", "M6000", 2398, !1, !1],
                ["AMD", "FirePro", "M5100", 2327, !1, !1],
                ["Nvidia", "GeForce", "GTX 760M", 2271, !1, !1],
                ["Nvidia", "GeForce", "GTX 465", 2253, !0, !1],
                ["AMD", "Radeon", "HD 7750", 2215, !0, !1],
                ["Nvidia", "Quadro", "K4000M", 2199, !1, !1],
                ["AMD", "Radeon", "HD 6970M", 2186, !1, !1],
                ["AMD", "Radeon", "HD 8870M", 2168, !1, !1],
                ["AMD", "Radeon", "R7 250", 2147, !0, !1],
                ["Nvidia", "GeForce", "GT 755M", 2105, !1, !1],
                ["AMD", "Radeon", "HD 5770", 2072, !0, !1],
                ["Nvidia", "GeForce", "Surface Book", 2031, !1, !1],
                ["Nvidia", "GeForce", "GTX 570M", 2020, !1, !0],
                ["Nvidia", "GeForce", "GTX 650", 2002, !0, !1],
                ["AMD", "Radeon", "R9 M265X", 1997, !1, !1],
                ["AMD", "Radeon", "HD 6770", 1951, !0, !1],
                ["Nvidia", "GeForce", "GTX 670M", 1950, !1, !1],
                ["AMD", "Radeon", "R7 M275DX", 1931, !1, !0],
                ["AMD", "Radeon", "R9 M275", 1885, !1, !1],
                ["Nvidia", "GeForce", "GTX 550 Ti", 1881, !0, !1],
                ["Nvidia", "Quadro", "5000", 1873, !0, !1],
                ["AMD", "Radeon", "HD 8850M", 1845, !1, !1],
                ["Intel", "Iris Pro", "6200", 1773, !1, !1],
                ["Nvidia", "GeForce", "GTX 660M", 1751, !1, !1],
                ["Nvidia", "GeForce", "GT 640", 1735, !0, !1],
                ["Nvidia", "GeForce", "GTS 450", 1724, !0, !1],
                ["AMD", "Radeon", "R8 M365DX", 1716, !1, !0],
                ["AMD", "FirePro", "M4000", 1713, !1, !1],
                ["AMD", "Radeon", "HD 7730", 1689, !0, !1],
                ["AMD", "Radeon", "R9 M375", 1679, !1, !1],
                ["Nvidia", "GeForce", "GTX 470M", 1664, !1, !1],
                ["Nvidia", "Quadro", "K620M", 1621, !1, !1],
                ["Nvidia", "Quadro", "K2100M", 1609, !1, !1],
                ["AMD", "Radeon", "HD 6750", 1594, !0, !1],
                ["Nvidia", "GeForce", "940M", 1582, !1, !1],
                ["Nvidia", "GeForce", "GT 750M", 1574, !1, !1],
                ["Nvidia", "GeForce", "840M", 1563, !1, !1],
                ["Nvidia", "GeForce", "GT 745M", 1549, !1, !1],
                ["Nvidia", "GeForce", "GTX 480M", 1541, !1, !1],
                ["Intel", "Iris Pro", "5200", 1536, !1, !1],
                ["Nvidia", "GeForce", "GTX 560M", 1435, !1, !1],
                ["Nvidia", "GeForce", "GT 650M", 1420, !1, !1],
                ["Nvidia", "GeForce", "830M", 1403, !1, !1],
                ["AMD", "Radeon", "R7 M260X", 1396, !1, !1],
                ["Nvidia", "Quadro", "4000", 1366, !0, !1],
                ["Nvidia", "Quadro", "K2000M", 1344, !1, !1],
                ["AMD", "Radeon", "R7 M265", 1329, !1, !1],
                ["Nvidia", "Quadro", "K1100M", 1326, !1, !1],
                ["AMD", "Radeon", "HD 8750M", 1276, !1, !1],
                ["Nvidia", "Quadro", "3000M", 1269, !1, !1],
                ["AMD", "Radeon", "HD 6670", 1240, !0, !1],
                ["Nvidia", "GeForce", "GT 640M ", 1225, !1, !1],
                ["AMD", "Radeon", "R7 M340", 1212, !1, !1],
                ["AMD", "Radeon", "HD 8690M", 1210, !1, !1],
                ["Intel", "HD Graphics", "530", 1202, !1, !1],
                ["AMD", "Radeon", "R7 M270", 1184, !1, !1],
                ["Nvidia", "GeForce", "GTX 460M", 1162, !1, !1],
                ["Nvidia", "GeForce", "920M", 1161, !1, !1],
                ["AMD", "Radeon", "R7 240", 1153, !0, !1],
                ["Nvidia", "GeForce", "GT 645M", 1151, !1, !1],
                ["Nvidia", "GeForce", "GT 740M", 1151, !1, !1],
                ["AMD", "Radeon", "HD 8730M", 1150, !1, !1],
                ["Nvidia", "GeForce", "825M", 1150, !1, !1],
                ["AMD", "Radeon", "R7 M360", 1122, !1, !1],
                ["AMD", "Radeon", "R6 M255DX", 1115, !1, !0],
                ["Nvidia", "Quadro", "2000M", 1076, !1, !1],
                ["AMD", "Radeon", "R5 M255", 1064, !1, !1],
                ["Nvidia", "GeForce", "GT 730M", 1061, !1, !1],
                ["AMD", "Radeon", "R7 M260", 1057, !1, !1],
                ["AMD", "Radeon", "HD 8650M", 1050, !1, !1],
                ["Intel", "HD Graphics", "6000", 1033, !1, !1],
                ["Nvidia", "GeForce", "GT 735M", 1023, !1, !1],
                ["Intel", "Iris Graphics", "6100", 1020, !1, !1],
                ["Intel", "HD Graphics", "5600", 991, !1, !1],
                ["Nvidia", "GeForce", "GT 555M", 922, !1, !1],
                ["AMD", "Radeon", "R5 M240", 921, !1, !1],
                ["AMD", "Radeon", "HD 8650G", 905, !1, !1],
                ["Nvidia", "Quadro", "K600", 900, !0, !1],
                ["Intel", "Iris Graphics", "5100", 878, !1, !1],
                ["AMD", "Radeon", "HD 6570", 864, !0, !1],
                ["Intel", "HD Graphics", "520", 857, !1, !1],
                ["AMD", "FirePro", "M4100", 857, !1, !1],
                ["Nvidia", "Quadro", "K1000M", 857, !1, !1],
                ["Nvidia", "GeForce", "GT 635M", 851, !1, !1],
                ["AMD", "Radeon", "R7 Kaveri", 851, !1, !1],
                ["AMD", "Radeon", "R5 M330", 848, !1, !1],
                ["Nvidia", "GeForce", "820M", 829, !1, !1],
                ["AMD", "Radeon", "HD 8670M", 829, !1, !1],
                ["Nvidia", "GeForce", "GT 625M", 827, !1, !1],
                ["AMD", "Radeon", "HD 7670M", 824, !1, !1],
                ["Nvidia", "GeForce", "GT 720M", 822, !1, !1],
                ["Nvidia", "GeForce", "GT 550M", 796, !1, !1],
                ["AMD", "Radeon", "HD 8550G", 792, !1, !1],
                ["AMD", "Radeon", "HD 7560D", 791, !0, !1],
                ["AMD", "Radeon", "HD 8570M", 790, !1, !1],
                ["Nvidia", "GeForce", "GT 620", 772, !0, !1],
                ["AMD", "Radeon", "R5 M230", 771, !1, !1],
                ["AMD", "Radeon", "R6 Kaveri", 770, !1, !1],
                ["Nvidia", "GeForce", "710M", 768, !1, !1],
                ["Nvidia", "Quadro", "K610M", 755, !1, !1],
                ["Nvidia", "Quadro", "1000M", 751, !1, !1],
                ["Intel", "HD Graphics", "515", 748, !1, !1],
                ["Nvidia", "GeForce", "GT 620M", 737, !1, !1],
                ["Nvidia", "GeForce", "GT 430", 735, !0, !1],
                ["Intel", "HD Graphics", "5000", 734, !1, !1],
                ["Nvidia", "GeForce", "GT 540M", 728, !1, !1],
                ["Nvidia", "GeForce", "GT 630M", 719, !1, !1],
                ["AMD", "Radeon", "HD 7620G", 716, !1, !1],
                ["Nvidia", "Quadro", "600", 710, !0, !1],
                ["Nvidia", "NVS", "5200M", 704, !1, !1],
                ["AMD", "Radeon", "HD 8470D", 670, !0, !1],
                ["Nvidia", "GeForce", "GT 630", 665, !0, !1],
                ["Intel", "HD Graphics", "5500", 663, !1, !1],
                ["Intel", "HD Graphics", "4600", 635, !1, !1],
                ["AMD", "Radeon", "HD 7610M", 605, !1, !1],
                ["AMD", "Radeon", "R5 Kaveri", 572, !1, !1],
                ["Intel", "HD Graphics", "4400", 571, !1, !1],
                ["AMD", "Radeon", "HD 7570M", 569, !1, !1],
                ["AMD", "Radeon", "HD 7550M", 569, !1, !1],
                ["Nvidia", "GeForce", "GT 525M", 545, !1, !1],
                ["AMD", "Radeon", "R5 Beema", 524, !1, !1],
                ["AMD", "Radeon", "HD 7500G", 512, !1, !1],
                ["AMD", "Radeon", "R4 Beema", 494, !1, !1],
                ["Intel", "HD Graphics", "4000", 480, !1, !1],
                ["Intel", "HD Graphics", "5300", 478, !1, !1],
                ["AMD", "Radeon", "HD 8610G", 475, !1, !1],
                ["AMD", "Radeon", "HD 8450G", 464, !1, !1],
                ["AMD", "Radeon", "HD 6530D", 452, !0, !1],
                ["AMD", "Radeon", "HD 6450", 450, !0, !1],
                ["AMD", "Radeon", "HD 7480D", 445, !0, !1],
                ["AMD", "Radeon", "R3 Beema", 432, !1, !1],
                ["AMD", "Radeon", "HD 6480G", 416, !1, !1],
                ["Nvidia", "GeForce", "GT 520M", 413, !1, !1],
                ["Nvidia", "GeForce", "GT 610", 406, !0, !1],
                ["AMD", "Radeon", "HD 8400", 401, !0, !1],
                ["Intel", "HD Graphics", "4200", 395, !1, !1],
                ["Nvidia", "GeForce", "GT 520", 389, !0, !1],
                ["AMD", "Radeon", "HD 8350G", 388, !1, !1],
                ["AMD", "Radeon", "HD 7470M", 384, !1, !1],
                ["Intel", "HD Graphics", "Haswell", 355, !1, !1],
                ["AMD", "Radeon", "HD 8330", 352, !0, !1],
                ["AMD", "Radeon", "HD 7420G", 343, !0, !1],
                ["AMD", "Radeon", "HD 8280", 328, !0, !1],
                ["AMD", "Radeon", "HD 7400G", 328, !0, !1],
                ["Intel", "HD Graphics", "2500", 318, !1, !1],
                ["AMD", "Radeon", "HD 8240", 290, !0, !1],
                ["Intel", "HD Graphics", "Ivy Bridge", 285, !1, !1],
                ["AMD", "Radeon", "HD 8250", 253, !0, !1],
                ["Intel", "HD Graphics", "Braswell", 233, !1, !1],
                ["AMD", "Radeon", "HD 8210", 227, !0, !1],
                ["AMD", "Radeon", "HD 7340", 224, !1, !1],
                ["AMD", "Radeon", "HD 7310", 192, !1, !1],
                ["Intel", "HD Graphics", "Bay Trail", 150, !1, !1],
                ["AMD", "Radeon", "HD 8180", 145, !0, !1]
            ],
            a = function() {
                for (var e = 0, a = r.length; a > e; e++) {
                    var i = r[e],
                        s = i[0],
                        l = i[1],
                        h = i[2],
                        d = i[3],
                        u = i[4],
                        c = s + " " + l + " " + h,
                        f = h,
                        p = " (notebook)";
                    u && (p = " (desktop)"), ("Intel" === s || "NVS" === l || "FirePro" === l || "Quadro" === l) && (f = l + " " + h);
                    var m = o(c);
                    t[m] = {
                        rawScore: d,
                        formattedScore: n(d),
                        fullName: c,
                        shortName: f,
                        type: p,
                        vendor: s.toLowerCase()
                    }
                }
            },
            i = function(e) {
                var t = e.replace(/\((R|TM)\)/, "");
                return t = t.replace("ANGLE", "").replace("Corporation ", "").replace(/Direct3D\w*/, "").replace(/vs_\w*/, "").replace(/ps_\w*/, "").replace(/[\(\)]/g, ""), t = t.replace("/PCIe/SSE2", ""), t = t.replace(/OpenGL \d*\.\d* compatibility/, ""), t.trim()
            },
            o = function(e) {
                return e.toUpperCase()
            },
            n = function(e) {
                for (var t = e.toString(), r = [], a = 0, i = 0, o = t.length; o > a; a++, i++) {
                    var n = t[o - 1 - a];
                    r[i] = n, a % 3 === 2 && o - 1 > a && (i += 1, r[i] = ",")
                }
                return r.reverse().join("")
            };
        this.detectGPU = function() {
            var r = null;
            if (void 0 === e) {
                e = "";
                try {
                    if (void 0 !== window.WebGLRenderingContext) {
                        var a = document.createElement("canvas"),
                            n = a.getContext("webgl") || a.getContext("experimental-webgl");
                        if (void 0 !== n) {
                            var s = n.getExtension("WEBGL_debug_renderer_info");
                            if (void 0 !== s) {
                                var l = n.getParameter(s.UNMASKED_RENDERER_WEBGL),
                                    h = i(l);
                                !(h.toLowerCase().indexOf("geforce") >= 0 || h.toLowerCase().indexOf("quadro") >= 0) || h.toLowerCase().indexOf("nvidia") >= 0 || (h = "NVIDIA " + h), e = h
                            }
                        }
                    }
                } catch (d) {}
            }
            if ("" !== e) {
                var u = o(e);
                void 0 !== t[u] && (r = t[u])
            }
            return r
        }, a()
    };
! function() {
    for (var e = 0, t = ["ms", "moz", "webkit", "o"], r = 0; r < t.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window[t[r] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[r] + "CancelAnimationFrame"] || window[t[r] + "CancelRequestAnimationFrame"];
    void 0 === window.requestAnimationFrame && (window.requestAnimationFrame = function(t) {
        var r = Date.now(),
            a = Math.max(0, 16 - (r - e)),
            i = window.setTimeout(function() {
                t(r + a)
            }, a);
        return e = r + a, i
    }), window.cancelAnimationFrame = window.cancelAnimationFrame || function(e) {
        window.clearTimeout(e)
    }
}(), self.console = self.console || {
        info: function() {},
        log: function() {},
        debug: function() {},
        warn: function() {},
        error: function() {}
    }, self.Int32Array = self.Int32Array || Array, self.Float32Array = self.Float32Array || Array, String.prototype.startsWith = String.prototype.startsWith || function(e) {
        return this.slice(0, e.length) === e
    }, String.prototype.endsWith = String.prototype.endsWith || function(e) {
        var t = String(e),
            r = this.lastIndexOf(t);
        return (r > -1 && r) === this.length - t.length
    }, String.prototype.trim = String.prototype.trim || function() {
        return this.replace(/^\s+|\s+$/g, "")
    },
    function(e, t, r, a, i, o) {
        function n(e) {
            var t, r = e.length,
                i = this,
                o = 0,
                n = i.i = i.j = 0,
                s = i.S = [];
            for (r || (e = [r++]); a > o;) s[o] = o++;
            for (o = 0; a > o; o++) s[o] = s[n = p & n + e[o % r] + (t = s[o])], s[n] = t;
            (i.g = function(e) {
                for (var t, r = 0, o = i.i, n = i.j, s = i.S; e--;) t = s[o = p & o + 1], r = r * a + s[p & (s[o] = s[n = p & n + t]) + (s[n] = t)];
                return i.i = o, i.j = n, r
            })(a)
        }

        function s(e, t) {
            var r, a = [],
                i = (typeof e)[0];
            if (t && "o" == i)
                for (r in e) try {
                    a.push(s(e[r], t - 1))
                } catch (o) {}
            return a.length ? a : "s" == i ? e : e + "\x00"
        }

        function l(e, t) {
            for (var r, a = e + "", i = 0; i < a.length;) t[p & i] = p & (r ^= 19 * t[p & i]) + a.charCodeAt(i++);
            return d(t)
        }

        function h(r) {
            try {
                return e.crypto.getRandomValues(r = new Uint8Array(a)), d(r)
            } catch (i) {
                return [+new Date, e, e.navigator.plugins, e.screen, d(t)]
            }
        }

        function d(e) {
            return String.fromCharCode.apply(0, e)
        }
        var u = r.pow(a, i),
            c = r.pow(2, o),
            f = 2 * c,
            p = a - 1;
        r.seedrandom = function(e, o) {
            var p = [],
                m = l(s(o ? [e, d(t)] : 0 in arguments ? e : h(), 3), p),
                v = new n(p);
            return l(d(v.S), t), r.srandom = function() {
                for (var e = v.g(i), t = u, r = 0; c > e;) e = (e + r) * a, t *= a, r = v.g(1);
                for (; e >= f;) e /= 2, t /= 2, r >>>= 1;
                return (e + r) / t
            }, m
        }, l(r.random(), t)
    }(this, [], Math, 256, 6, 52);
// footer

XG.BUILD_NUMBER = 505;
XG.BUILD_DATE = '2015-12-02';

console.log('XG [version ' + XG.VERSION + " | build " + XG.BUILD_NUMBER + " | " + XG.BUILD_DATE + "]");