"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//bg image go to slider
if (document.querySelector(".cabins__swiper")) {
  var handleTabletChange = function handleTabletChange(e) {
    var div = document.createElement("div");

    if (e.matches) {
      div.className = "swiper-slide _slide-remove swiper-slide-active";
      div.innerHTML = "<a class=\"cabins__slide-link\" data-fslightbox=\"galery\" href=\"./image/the-bed-features.jpg\">\n                                <img src=\"./image/the-bed-features.jpg\" class=\"swiper-lazy cabins__img\" alt=\"d\" />\n                            </a>";
      var wrapper = document.querySelector(".swiper__cabins-wrapper");
      wrapper.prepend(div);
    }
  };

  var handleDesktopChange = function handleDesktopChange(e) {
    if (e.matches) {
      var removeDiv = document.querySelector("._slide-remove");

      if (removeDiv) {
        removeDiv.remove();
      }
    }
  };

  var mediaQuery = window.matchMedia('(max-width: 768px)');
  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery); //back bg image

  var mediaQueryMin = window.matchMedia('(min-width: 769px)');
  mediaQueryMin.addListener(handleDesktopChange);
  handleDesktopChange(mediaQueryMin);
}

;
!function () {
  "use strict";

  function n(t) {
    if (void 0 === t) throw new Error('Pathformer [constructor]: "element" parameter is required');
    if (t.constructor === String && !(t = document.getElementById(t))) throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
    if (!(t instanceof window.SVGElement || t instanceof window.SVGGElement || /^svg$/i.test(t.nodeName))) throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
    this.el = t, this.scan(t);
  }

  var r, e, t, p;

  function i(t, e, n) {
    r(), this.isReady = !1, this.setElement(t, e), this.setOptions(e), this.setCallback(n), this.isReady && this.init();
  }

  n.prototype.TYPES = ["line", "ellipse", "circle", "polygon", "polyline", "rect"], n.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"], n.prototype.scan = function (t) {
    for (var e, n, r, i = t.querySelectorAll(this.TYPES.join(",")), a = 0; a < i.length; a++) {
      n = (0, this[(e = i[a]).tagName.toLowerCase() + "ToPath"])(this.parseAttr(e.attributes)), r = this.pathMaker(e, n), e.parentNode.replaceChild(r, e);
    }
  }, n.prototype.lineToPath = function (t) {
    var e = {},
        n = t.x1 || 0,
        r = t.y1 || 0,
        i = t.x2 || 0,
        a = t.y2 || 0;
    return e.d = "M" + n + "," + r + "L" + i + "," + a, e;
  }, n.prototype.rectToPath = function (t) {
    var e = {},
        n = parseFloat(t.x) || 0,
        r = parseFloat(t.y) || 0,
        i = parseFloat(t.width) || 0,
        a = parseFloat(t.height) || 0;

    if (t.rx || t.ry) {
      var o = parseInt(t.rx, 10) || -1,
          s = parseInt(t.ry, 10) || -1;
      o = Math.min(Math.max(o < 0 ? s : o, 0), i / 2), s = Math.min(Math.max(s < 0 ? o : s, 0), a / 2), e.d = "M " + (n + o) + "," + r + " L " + (n + i - o) + "," + r + " A " + o + "," + s + ",0,0,1," + (n + i) + "," + (r + s) + " L " + (n + i) + "," + (r + a - s) + " A " + o + "," + s + ",0,0,1," + (n + i - o) + "," + (r + a) + " L " + (n + o) + "," + (r + a) + " A " + o + "," + s + ",0,0,1," + n + "," + (r + a - s) + " L " + n + "," + (r + s) + " A " + o + "," + s + ",0,0,1," + (n + o) + "," + r;
    } else e.d = "M" + n + " " + r + " L" + (n + i) + " " + r + " L" + (n + i) + " " + (r + a) + " L" + n + " " + (r + a) + " Z";

    return e;
  }, n.prototype.polylineToPath = function (t) {
    var e,
        n,
        r = {},
        i = t.points.trim().split(" ");

    if (-1 === t.points.indexOf(",")) {
      var a = [];

      for (e = 0; e < i.length; e += 2) {
        a.push(i[e] + "," + i[e + 1]);
      }

      i = a;
    }

    for (n = "M" + i[0], e = 1; e < i.length; e++) {
      -1 !== i[e].indexOf(",") && (n += "L" + i[e]);
    }

    return r.d = n, r;
  }, n.prototype.polygonToPath = function (t) {
    var e = n.prototype.polylineToPath(t);
    return e.d += "Z", e;
  }, n.prototype.ellipseToPath = function (t) {
    var e = {},
        n = parseFloat(t.rx) || 0,
        r = parseFloat(t.ry) || 0,
        i = parseFloat(t.cx) || 0,
        a = parseFloat(t.cy) || 0,
        o = i - n,
        s = a,
        h = parseFloat(i) + parseFloat(n),
        l = a;
    return e.d = "M" + o + "," + s + "A" + n + "," + r + " 0,1,1 " + h + "," + l + "A" + n + "," + r + " 0,1,1 " + o + "," + l, e;
  }, n.prototype.circleToPath = function (t) {
    var e = {},
        n = parseFloat(t.r) || 0,
        r = parseFloat(t.cx) || 0,
        i = parseFloat(t.cy) || 0,
        a = r - n,
        o = i,
        s = parseFloat(r) + parseFloat(n),
        h = i;
    return e.d = "M" + a + "," + o + "A" + n + "," + n + " 0,1,1 " + s + "," + h + "A" + n + "," + n + " 0,1,1 " + a + "," + h, e;
  }, n.prototype.pathMaker = function (t, e) {
    var n,
        r,
        i = document.createElementNS("http://www.w3.org/2000/svg", "path");

    for (n = 0; n < t.attributes.length; n++) {
      r = t.attributes[n], -1 === this.ATTR_WATCH.indexOf(r.name) && i.setAttribute(r.name, r.value);
    }

    for (n in e) {
      i.setAttribute(n, e[n]);
    }

    return i;
  }, n.prototype.parseAttr = function (t) {
    for (var e, n = {}, r = 0; r < t.length; r++) {
      if (e = t[r], -1 !== this.ATTR_WATCH.indexOf(e.name) && -1 !== e.value.indexOf("%")) throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");
      n[e.name] = e.value;
    }

    return n;
  }, i.LINEAR = function (t) {
    return t;
  }, i.EASE = function (t) {
    return -Math.cos(t * Math.PI) / 2 + .5;
  }, i.EASE_OUT = function (t) {
    return 1 - Math.pow(1 - t, 3);
  }, i.EASE_IN = function (t) {
    return Math.pow(t, 3);
  }, i.EASE_OUT_BOUNCE = function (t) {
    var e = 1 - Math.cos(t * (.5 * Math.PI)),
        n = Math.pow(e, 1.5),
        r = Math.pow(1 - t, 2);
    return 1 - r + (1 - Math.abs(Math.cos(n * (2.5 * Math.PI)))) * r;
  }, i.prototype.setElement = function (e, n) {
    var t, r;
    if (void 0 === e) throw new Error('Vivus [constructor]: "element" parameter is required');
    if (e.constructor === String && !(e = document.getElementById(e))) throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');

    if (this.parentEl = e, n && n.file) {
      r = this, t = function t() {
        var t = document.createElement("div");
        t.innerHTML = this.responseText;
        var e = t.querySelector("svg");
        if (!e) throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : " + n.file);
        r.el = e, r.el.setAttribute("width", "100%"), r.el.setAttribute("height", "100%"), r.parentEl.appendChild(r.el), r.isReady = !0, r.init(), r = null;
      };
      var i = new window.XMLHttpRequest();
      return i.addEventListener("load", t), i.open("GET", n.file), void i.send();
    }

    switch (e.constructor) {
      case window.SVGSVGElement:
      case window.SVGElement:
      case window.SVGGElement:
        this.el = e, this.isReady = !0;
        break;

      case window.HTMLObjectElement:
        r = this, (t = function t(_t) {
          if (!r.isReady) {
            if (r.el = e.contentDocument && e.contentDocument.querySelector("svg"), !r.el && _t) throw new Error("Vivus [constructor]: object loaded does not contain any SVG");
            r.el && (e.getAttribute("built-by-vivus") && (r.parentEl.insertBefore(r.el, e), r.parentEl.removeChild(e), r.el.setAttribute("width", "100%"), r.el.setAttribute("height", "100%")), r.isReady = !0, r.init(), r = null);
          }
        })() || e.addEventListener("load", t);
        break;

      default:
        throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
    }
  }, i.prototype.setOptions = function (t) {
    var e = ["delayed", "sync", "async", "nsync", "oneByOne", "scenario", "scenario-sync"],
        n = ["inViewport", "manual", "autostart"];
    if (void 0 !== t && t.constructor !== Object) throw new Error('Vivus [constructor]: "options" parameter must be an object');
    if ((t = t || {}).type && -1 === e.indexOf(t.type)) throw new Error("Vivus [constructor]: " + t.type + " is not an existing animation `type`");
    if (this.type = t.type || e[0], t.start && -1 === n.indexOf(t.start)) throw new Error("Vivus [constructor]: " + t.start + " is not an existing `start` option");
    if (this.start = t.start || n[0], this.isIE = -1 !== window.navigator.userAgent.indexOf("MSIE") || -1 !== window.navigator.userAgent.indexOf("Trident/") || -1 !== window.navigator.userAgent.indexOf("Edge/"), this.duration = p(t.duration, 120), this.delay = p(t.delay, null), this.dashGap = p(t.dashGap, 1), this.forceRender = t.hasOwnProperty("forceRender") ? !!t.forceRender : this.isIE, this.reverseStack = !!t.reverseStack, this.selfDestroy = !!t.selfDestroy, this.onReady = t.onReady, this.map = [], this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null, this.ignoreInvisible = !!t.hasOwnProperty("ignoreInvisible") && !!t.ignoreInvisible, this.animTimingFunction = t.animTimingFunction || i.LINEAR, this.pathTimingFunction = t.pathTimingFunction || i.LINEAR, this.delay >= this.duration) throw new Error("Vivus [constructor]: delay must be shorter than duration");
  }, i.prototype.setCallback = function (t) {
    if (t && t.constructor !== Function) throw new Error('Vivus [constructor]: "callback" parameter must be a function');

    this.callback = t || function () {};
  }, i.prototype.mapping = function () {
    var t, e, n, r, i, a, o, s, h, l;

    for (s = a = o = 0, e = this.el.querySelectorAll("path"), l = !1, t = 0; t < e.length; t++) {
      if (n = e[t], !this.isInvisible(n)) {
        if (i = {
          el: n,
          length: 0,
          startAt: 0,
          duration: 0,
          isResizeSensitive: !1
        }, "non-scaling-stroke" === n.getAttribute("vector-effect")) {
          var c = n.getBoundingClientRect(),
              u = n.getBBox();
          h = Math.max(c.width / u.width, c.height / u.height), l = i.isResizeSensitive = !0;
        } else h = 1;

        i.length = Math.ceil(n.getTotalLength() * h), isNaN(i.length) ? window.console && console.warn && console.warn("Vivus [mapping]: cannot retrieve a path element length", n) : (this.map.push(i), n.style.strokeDasharray = i.length + " " + (i.length + 2 * this.dashGap), n.style.strokeDashoffset = i.length + this.dashGap, i.length += this.dashGap, a += i.length, this.renderPath(t));
      }
    }

    for (l && console.warn("Vivus: this SVG contains non-scaling-strokes. You should call instance.recalc() when the SVG is resized or you will encounter unwanted behaviour. See https://github.com/maxwellito/vivus#non-scaling for more info."), a = 0 === a ? 1 : a, this.delay = null === this.delay ? this.duration / 3 : this.delay, this.delayUnit = this.delay / (1 < e.length ? e.length - 1 : 1), this.reverseStack && this.map.reverse(), t = 0; t < this.map.length; t++) {
      switch (i = this.map[t], this.type) {
        case "delayed":
          i.startAt = this.delayUnit * t, i.duration = this.duration - this.delay;
          break;

        case "oneByOne":
          i.startAt = o / a * this.duration, i.duration = i.length / a * this.duration;
          break;

        case "sync":
        case "async":
        case "nsync":
          i.startAt = 0, i.duration = this.duration;
          break;

        case "scenario-sync":
          n = i.el, r = this.parseAttr(n), i.startAt = s + (p(r["data-delay"], this.delayUnit) || 0), i.duration = p(r["data-duration"], this.duration), s = void 0 !== r["data-async"] ? i.startAt : i.startAt + i.duration, this.frameLength = Math.max(this.frameLength, i.startAt + i.duration);
          break;

        case "scenario":
          n = i.el, r = this.parseAttr(n), i.startAt = p(r["data-start"], this.delayUnit) || 0, i.duration = p(r["data-duration"], this.duration), this.frameLength = Math.max(this.frameLength, i.startAt + i.duration);
      }

      o += i.length, this.frameLength = this.frameLength || this.duration;
    }
  }, i.prototype.recalc = function () {
    this.mustRecalcScale || (this.mustRecalcScale = e(function () {
      this.performLineRecalc();
    }.bind(this)));
  }, i.prototype.performLineRecalc = function () {
    for (var t, e, n, r, i, a = 0; a < this.map.length; a++) {
      (t = this.map[a]).isResizeSensitive && (n = (e = t.el).getBoundingClientRect(), r = e.getBBox(), i = Math.max(n.width / r.width, n.height / r.height), t.length = Math.ceil(e.getTotalLength() * i), e.style.strokeDasharray = t.length + " " + (t.length + 2 * this.dashGap));
    }

    this.trace(), this.mustRecalcScale = null;
  }, i.prototype.draw = function () {
    var t = this;
    if (this.currentFrame += this.speed, this.currentFrame <= 0) this.stop(), this.reset();else {
      if (!(this.currentFrame >= this.frameLength)) return this.trace(), void (this.handle = e(function () {
        t.draw();
      }));
      this.stop(), this.currentFrame = this.frameLength, this.trace(), this.selfDestroy && this.destroy();
    }
    this.callback(this), this.instanceCallback && (this.instanceCallback(this), this.instanceCallback = null);
  }, i.prototype.trace = function () {
    var t, e, n, r;

    for (r = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength, t = 0; t < this.map.length; t++) {
      e = (r - (n = this.map[t]).startAt) / n.duration, e = this.pathTimingFunction(Math.max(0, Math.min(1, e))), n.progress !== e && (n.progress = e, n.el.style.strokeDashoffset = Math.floor(n.length * (1 - e)), this.renderPath(t));
    }
  }, i.prototype.renderPath = function (t) {
    if (this.forceRender && this.map && this.map[t]) {
      var e = this.map[t],
          n = e.el.cloneNode(!0);
      e.el.parentNode.replaceChild(n, e.el), e.el = n;
    }
  }, i.prototype.init = function () {
    this.frameLength = 0, this.currentFrame = 0, this.map = [], new n(this.el), this.mapping(), this.starter(), this.onReady && this.onReady(this);
  }, i.prototype.starter = function () {
    switch (this.start) {
      case "manual":
        return;

      case "autostart":
        this.play();
        break;

      case "inViewport":
        var t = this,
            e = function e() {
          t.isInViewport(t.parentEl, 1) && (t.play(), window.removeEventListener("scroll", e));
        };

        window.addEventListener("scroll", e), e();
    }
  }, i.prototype.getStatus = function () {
    return 0 === this.currentFrame ? "start" : this.currentFrame === this.frameLength ? "end" : "progress";
  }, i.prototype.reset = function () {
    return this.setFrameProgress(0);
  }, i.prototype.finish = function () {
    return this.setFrameProgress(1);
  }, i.prototype.setFrameProgress = function (t) {
    return t = Math.min(1, Math.max(0, t)), this.currentFrame = Math.round(this.frameLength * t), this.trace(), this;
  }, i.prototype.play = function (t, e) {
    if (this.instanceCallback = null, t && "function" == typeof t) this.instanceCallback = t, t = null;else if (t && "number" != typeof t) throw new Error("Vivus [play]: invalid speed");
    return e && "function" == typeof e && !this.instanceCallback && (this.instanceCallback = e), this.speed = t || 1, this.handle || this.draw(), this;
  }, i.prototype.stop = function () {
    return this.handle && (t(this.handle), this.handle = null), this;
  }, i.prototype.destroy = function () {
    var t, e;

    for (this.stop(), t = 0; t < this.map.length; t++) {
      (e = this.map[t]).el.style.strokeDashoffset = null, e.el.style.strokeDasharray = null, this.renderPath(t);
    }
  }, i.prototype.isInvisible = function (t) {
    var e,
        n = t.getAttribute("data-ignore");
    return null !== n ? "false" !== n : !!this.ignoreInvisible && !(e = t.getBoundingClientRect()).width && !e.height;
  }, i.prototype.parseAttr = function (t) {
    var e,
        n = {};
    if (t && t.attributes) for (var r = 0; r < t.attributes.length; r++) {
      n[(e = t.attributes[r]).name] = e.value;
    }
    return n;
  }, i.prototype.isInViewport = function (t, e) {
    var n = this.scrollY(),
        r = n + this.getViewportH(),
        i = t.getBoundingClientRect(),
        a = i.height,
        o = n + i.top;
    return o + a * (e = e || 0) <= r && n <= o + a;
  }, i.prototype.getViewportH = function () {
    var t = this.docElem.clientHeight,
        e = window.innerHeight;
    return t < e ? e : t;
  }, i.prototype.scrollY = function () {
    return window.pageYOffset || this.docElem.scrollTop;
  }, r = function r() {
    i.prototype.docElem || (i.prototype.docElem = window.document.documentElement, e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
      return window.setTimeout(t, 1e3 / 60);
    }, t = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
      return window.clearTimeout(t);
    });
  }, p = function p(t, e) {
    var n = parseInt(t, 10);
    return 0 <= n ? n : e;
  }, "function" == typeof define && define.amd ? define([], function () {
    return i;
  }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = i : window.Vivus = i;
}();
;
/**
 * Swiper 6.8.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: August 16, 2021
 */

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(void 0, function () {
  "use strict";

  function e(e, t) {
    for (var a = 0; a < t.length; a++) {
      var i = t[a];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  function t() {
    return (t = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];

        for (var i in a) {
          Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
        }
      }

      return e;
    }).apply(this, arguments);
  }

  function a(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function i(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (s) {
      void 0 === e[s] ? e[s] = t[s] : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s]);
    });
  }

  var s = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function r() {
    var e = "undefined" != typeof document ? document : {};
    return i(e, s), e;
  }

  var n = {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function l() {
    var e = "undefined" != typeof window ? window : {};
    return i(e, n), e;
  }

  function o(e) {
    return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }

  function d(e, t) {
    return (d = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }

  function p() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }

  function u(e, t, a) {
    return (u = p() ? Reflect.construct : function (e, t, a) {
      var i = [null];
      i.push.apply(i, t);
      var s = new (Function.bind.apply(e, i))();
      return a && d(s, a.prototype), s;
    }).apply(null, arguments);
  }

  function c(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (c = function c(e) {
      if (null === e || (a = e, -1 === Function.toString.call(a).indexOf("[native code]"))) return e;
      var a;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, i);
      }

      function i() {
        return u(e, arguments, o(this).constructor);
      }

      return i.prototype = Object.create(e.prototype, {
        constructor: {
          value: i,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), d(i, e);
    })(e);
  }

  var h = function (e) {
    var t, a;

    function i(t) {
      var a, i, s;
      return a = e.call.apply(e, [this].concat(t)) || this, i = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(a), s = i.__proto__, Object.defineProperty(i, "__proto__", {
        get: function get() {
          return s;
        },
        set: function set(e) {
          s.__proto__ = e;
        }
      }), a;
    }

    return a = e, (t = i).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, i;
  }(c(Array));

  function v(e) {
    void 0 === e && (e = []);
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
    }), t;
  }

  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function m(e, t) {
    var a = l(),
        i = r(),
        s = [];
    if (!t && e instanceof h) return e;
    if (!e) return new h(s);

    if ("string" == typeof e) {
      var n = e.trim();

      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var o = "div";
        0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
        var d = i.createElement(o);
        d.innerHTML = n;

        for (var p = 0; p < d.childNodes.length; p += 1) {
          s.push(d.childNodes[p]);
        }
      } else s = function (e, t) {
        if ("string" != typeof e) return [e];

        for (var a = [], i = t.querySelectorAll(e), s = 0; s < i.length; s += 1) {
          a.push(i[s]);
        }

        return a;
      }(e.trim(), t || i);
    } else if (e.nodeType || e === a || e === i) s.push(e);else if (Array.isArray(e)) {
      if (e instanceof h) return e;
      s = e;
    }

    return new h(function (e) {
      for (var t = [], a = 0; a < e.length; a += 1) {
        -1 === t.indexOf(e[a]) && t.push(e[a]);
      }

      return t;
    }(s));
  }

  m.fn = h.prototype;
  var g,
      b,
      w,
      y = {
    addClass: function addClass() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = v(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).add.apply(t, i);
      }), this;
    },
    removeClass: function removeClass() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = v(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).remove.apply(t, i);
      }), this;
    },
    hasClass: function hasClass() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = v(t.map(function (e) {
        return e.split(" ");
      }));
      return f(this, function (e) {
        return i.filter(function (t) {
          return e.classList.contains(t);
        }).length > 0;
      }).length > 0;
    },
    toggleClass: function toggleClass() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = v(t.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (e) {
        i.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var a = 0; a < this.length; a += 1) {
        if (2 === arguments.length) this[a].setAttribute(e, t);else for (var i in e) {
          this[a][i] = e[i], this[a].setAttribute(i, e[i]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }

      return this;
    },
    transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
      }

      return this;
    },
    on: function on() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];

      function l(e) {
        var t = e.target;

        if (t) {
          var a = e.target.dom7EventData || [];
          if (a.indexOf(e) < 0 && a.unshift(e), m(t).is(s)) r.apply(t, a);else for (var i = m(t).parents(), n = 0; n < i.length; n += 1) {
            m(i[n]).is(s) && r.apply(i[n], a);
          }
        }
      }

      function o(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }

      "function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n || (n = !1);

      for (var d, p = i.split(" "), u = 0; u < this.length; u += 1) {
        var c = this[u];
        if (s) for (d = 0; d < p.length; d += 1) {
          var h = p[d];
          c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []), c.dom7LiveListeners[h].push({
            listener: r,
            proxyListener: l
          }), c.addEventListener(h, l, n);
        } else for (d = 0; d < p.length; d += 1) {
          var v = p[d];
          c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[v] || (c.dom7Listeners[v] = []), c.dom7Listeners[v].push({
            listener: r,
            proxyListener: o
          }), c.addEventListener(v, o, n);
        }
      }

      return this;
    },
    off: function off() {
      for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
        t[a] = arguments[a];
      }

      var i = t[0],
          s = t[1],
          r = t[2],
          n = t[3];
      "function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n || (n = !1);

      for (var l = i.split(" "), o = 0; o < l.length; o += 1) {
        for (var d = l[o], p = 0; p < this.length; p += 1) {
          var u = this[p],
              c = void 0;
          if (!s && u.dom7Listeners ? c = u.dom7Listeners[d] : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[d]), c && c.length) for (var h = c.length - 1; h >= 0; h -= 1) {
            var v = c[h];
            r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1)) : r || (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      for (var e = l(), t = arguments.length, a = new Array(t), i = 0; i < t; i++) {
        a[i] = arguments[i];
      }

      for (var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1) {
        for (var o = s[n], d = 0; d < this.length; d += 1) {
          var p = this[d];

          if (e.CustomEvent) {
            var u = new e.CustomEvent(o, {
              detail: r,
              bubbles: !0,
              cancelable: !0
            });
            p.dom7EventData = a.filter(function (e, t) {
              return t > 0;
            }), p.dispatchEvent(u), p.dom7EventData = [], delete p.dom7EventData;
          }
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = this;
      return e && t.on("transitionend", function a(i) {
        i.target === this && (e.call(this, i), t.off("transitionend", a));
      }), this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function styles() {
      var e = l();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function offset() {
      if (this.length > 0) {
        var e = l(),
            t = r(),
            a = this[0],
            i = a.getBoundingClientRect(),
            s = t.body,
            n = a.clientTop || s.clientTop || 0,
            o = a.clientLeft || s.clientLeft || 0,
            d = a === e ? e.scrollY : a.scrollTop,
            p = a === e ? e.scrollX : a.scrollLeft;
        return {
          top: i.top + d - n,
          left: i.left + p - o
        };
      }

      return null;
    },
    css: function css(e, t) {
      var a,
          i = l();

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1) {
            for (var s in e) {
              this[a].style[s] = e[s];
            }
          }

          return this;
        }

        if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) {
          this[a].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      return e ? (this.forEach(function (t, a) {
        e.apply(t, [t, a]);
      }), this) : this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t,
          a,
          i = l(),
          s = r(),
          n = this[0];
      if (!n || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (n.matches) return n.matches(e);
        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
        if (n.msMatchesSelector) return n.msMatchesSelector(e);

        for (t = m(e), a = 0; a < t.length; a += 1) {
          if (t[a] === n) return !0;
        }

        return !1;
      }

      if (e === s) return n === s;
      if (e === i) return n === i;

      if (e.nodeType || e instanceof h) {
        for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) {
          if (t[a] === n) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return m([]);

      if (e < 0) {
        var a = t + e;
        return m(a < 0 ? [] : [this[a]]);
      }

      return m([this[e]]);
    },
    append: function append() {
      for (var e, t = r(), a = 0; a < arguments.length; a += 1) {
        e = a < 0 || arguments.length <= a ? void 0 : arguments[a];

        for (var i = 0; i < this.length; i += 1) {
          if ("string" == typeof e) {
            var s = t.createElement("div");

            for (s.innerHTML = e; s.firstChild;) {
              this[i].appendChild(s.firstChild);
            }
          } else if (e instanceof h) for (var n = 0; n < e.length; n += 1) {
            this[i].appendChild(e[n]);
          } else this[i].appendChild(e);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t,
          a,
          i = r();

      for (t = 0; t < this.length; t += 1) {
        if ("string" == typeof e) {
          var s = i.createElement("div");

          for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1) {
            this[t].insertBefore(s.childNodes[a], this[t].childNodes[0]);
          }
        } else if (e instanceof h) for (a = 0; a < e.length; a += 1) {
          this[t].insertBefore(e[a], this[t].childNodes[0]);
        } else this[t].insertBefore(e, this[t].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([]);
    },
    nextAll: function nextAll(e) {
      var t = [],
          a = this[0];
      if (!a) return m([]);

      for (; a.nextElementSibling;) {
        var i = a.nextElementSibling;
        e ? m(i).is(e) && t.push(i) : t.push(i), a = i;
      }

      return m(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
      }

      return m([]);
    },
    prevAll: function prevAll(e) {
      var t = [],
          a = this[0];
      if (!a) return m([]);

      for (; a.previousElementSibling;) {
        var i = a.previousElementSibling;
        e ? m(i).is(e) && t.push(i) : t.push(i), a = i;
      }

      return m(t);
    },
    parent: function parent(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        null !== this[a].parentNode && (e ? m(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
      }

      return m(t);
    },
    parents: function parents(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (var i = this[a].parentNode; i;) {
          e ? m(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
        }
      }

      return m(t);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) {
          t.push(i[s]);
        }
      }

      return m(t);
    },
    children: function children(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (var i = this[a].children, s = 0; s < i.length; s += 1) {
          e && !m(i[s]).is(e) || t.push(i[s]);
        }
      }

      return m(t);
    },
    filter: function filter(e) {
      return m(f(this, e));
    },
    remove: function remove() {
      for (var e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }

      return this;
    }
  };

  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }

  function x() {
    return Date.now();
  }

  function T(e, t) {
    void 0 === t && (t = "x");

    var a,
        i,
        s,
        r = l(),
        n = function (e) {
      var t,
          a = l();
      return a.getComputedStyle && (t = a.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t;
    }(e);

    return r.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), s = new r.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = r.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = r.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
  }

  function C(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }

  function S(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
  }

  function M() {
    for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], a = 1; a < arguments.length; a += 1) {
      var i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
      if (null != i && !S(i)) for (var s = Object.keys(Object(i)).filter(function (e) {
        return t.indexOf(e) < 0;
      }), r = 0, n = s.length; r < n; r += 1) {
        var l = s[r],
            o = Object.getOwnPropertyDescriptor(i, l);
        void 0 !== o && o.enumerable && (C(e[l]) && C(i[l]) ? i[l].__swiper__ ? e[l] = i[l] : M(e[l], i[l]) : !C(e[l]) && C(i[l]) ? (e[l] = {}, i[l].__swiper__ ? e[l] = i[l] : M(e[l], i[l])) : e[l] = i[l]);
      }
    }

    return e;
  }

  function z(e, t) {
    Object.keys(t).forEach(function (a) {
      C(t[a]) && Object.keys(t[a]).forEach(function (i) {
        "function" == typeof t[a][i] && (t[a][i] = t[a][i].bind(e));
      }), e[a] = t[a];
    });
  }

  function P(e) {
    return void 0 === e && (e = ""), "." + e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".");
  }

  function k(e, t, a, i) {
    var s = r();
    return a && Object.keys(i).forEach(function (a) {
      if (!t[a] && !0 === t.auto) {
        var r = s.createElement("div");
        r.className = i[a], e.append(r), t[a] = r;
      }
    }), t;
  }

  function $() {
    return g || (g = function () {
      var e = l(),
          t = r();
      return {
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
        passiveListener: function () {
          var t = !1;

          try {
            var a = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });
            e.addEventListener("testPassiveListener", null, a);
          } catch (e) {}

          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), g;
  }

  function L(e) {
    return void 0 === e && (e = {}), b || (b = function (e) {
      var t = (void 0 === e ? {} : e).userAgent,
          a = $(),
          i = l(),
          s = i.navigator.platform,
          r = t || i.navigator.userAgent,
          n = {
        ios: !1,
        android: !1
      },
          o = i.screen.width,
          d = i.screen.height,
          p = r.match(/(Android);?[\s\/]+([\d.]+)?/),
          u = r.match(/(iPad).*OS\s([\d_]+)/),
          c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
          h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          v = "Win32" === s,
          f = "MacIntel" === s;
      return !u && f && a.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((u = r.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]), f = !1), p && !v && (n.os = "android", n.android = !0), (u || h || c) && (n.os = "ios", n.ios = !0), n;
    }(e)), b;
  }

  function I() {
    return w || (w = function () {
      var e,
          t = l();
      return {
        isEdge: !!t.navigator.userAgent.match(/Edge/g),
        isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
      };
    }()), w;
  }

  Object.keys(y).forEach(function (e) {
    Object.defineProperty(m.fn, e, {
      value: y[e],
      writable: !0
    });
  });
  var O = {
    name: "resize",
    create: function create() {
      var e = this;
      M(e, {
        resize: {
          observer: null,
          createObserver: function createObserver() {
            e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver(function (t) {
              var a = e.width,
                  i = e.height,
                  s = a,
                  r = i;
              t.forEach(function (t) {
                var a = t.contentBoxSize,
                    i = t.contentRect,
                    n = t.target;
                n && n !== e.el || (s = i ? i.width : (a[0] || a).inlineSize, r = i ? i.height : (a[0] || a).blockSize);
              }), s === a && r === i || e.resize.resizeHandler();
            }), e.resize.observer.observe(e.el));
          },
          removeObserver: function removeObserver() {
            e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), e.resize.observer = null);
          },
          resizeHandler: function resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          },
          orientationChangeHandler: function orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function init(e) {
        var t = l();
        e.params.resizeObserver && void 0 !== l().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler));
      },
      destroy: function destroy(e) {
        var t = l();
        e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
      }
    }
  },
      A = {
    attach: function attach(e, t) {
      void 0 === t && (t = {});
      var a = l(),
          i = this,
          s = new (a.MutationObserver || a.WebkitMutationObserver)(function (e) {
        if (1 !== e.length) {
          var t = function t() {
            i.emit("observerUpdate", e[0]);
          };

          a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0);
        } else i.emit("observerUpdate", e[0]);
      });
      s.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), i.observer.observers.push(s);
    },
    init: function init() {
      var e = this;

      if (e.support.observer && e.params.observer) {
        if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) {
          e.observer.attach(t[a]);
        }
        e.observer.attach(e.$el[0], {
          childList: e.params.observeSlideChildren
        }), e.observer.attach(e.$wrapperEl[0], {
          attributes: !1
        });
      }
    },
    destroy: function destroy() {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    }
  },
      D = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    },
    create: function create() {
      z(this, {
        observer: t({}, A, {
          observers: []
        })
      });
    },
    on: {
      init: function init(e) {
        e.observer.init();
      },
      destroy: function destroy(e) {
        e.observer.destroy();
      }
    }
  };

  function N(e) {
    var t = this,
        a = r(),
        i = l(),
        s = t.touchEventsData,
        n = t.params,
        o = t.touches;

    if (t.enabled && (!t.animating || !n.preventInteractionOnTransition)) {
      var d = e;
      d.originalEvent && (d = d.originalEvent);
      var p = m(d.target);

      if (("wrapper" !== n.touchEventsTarget || p.closest(t.wrapperEl).length) && (s.isTouchEvent = "touchstart" === d.type, (s.isTouchEvent || !("which" in d) || 3 !== d.which) && !(!s.isTouchEvent && "button" in d && d.button > 0 || s.isTouched && s.isMoved))) {
        !!n.noSwipingClass && "" !== n.noSwipingClass && d.target && d.target.shadowRoot && e.path && e.path[0] && (p = m(e.path[0]));
        var u = n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass,
            c = !(!d.target || !d.target.shadowRoot);
        if (n.noSwiping && (c ? function (e, t) {
          return void 0 === t && (t = this), function t(a) {
            return a && a !== r() && a !== l() ? (a.assignedSlot && (a = a.assignedSlot), a.closest(e) || t(a.getRootNode().host)) : null;
          }(t);
        }(u, d.target) : p.closest(u)[0])) t.allowClick = !0;else if (!n.swipeHandler || p.closest(n.swipeHandler)[0]) {
          o.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX, o.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
          var h = o.currentX,
              v = o.currentY,
              f = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
              g = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;

          if (f && (h <= g || h >= i.innerWidth - g)) {
            if ("prevent" !== f) return;
            e.preventDefault();
          }

          if (M(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), o.startX = h, o.startY = v, s.touchStartTime = x(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== d.type) {
            var b = !0;
            p.is(s.focusableElements) && (b = !1), a.activeElement && m(a.activeElement).is(s.focusableElements) && a.activeElement !== p[0] && a.activeElement.blur();
            var w = b && t.allowTouchMove && n.touchStartPreventDefault;
            !n.touchStartForcePreventDefault && !w || p[0].isContentEditable || d.preventDefault();
          }

          t.emit("touchStart", d);
        }
      }
    }
  }

  function G(e) {
    var t = r(),
        a = this,
        i = a.touchEventsData,
        s = a.params,
        n = a.touches,
        l = a.rtlTranslate;

    if (a.enabled) {
      var o = e;

      if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
        if (!i.isTouchEvent || "touchmove" === o.type) {
          var d = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
              p = "touchmove" === o.type ? d.pageX : o.pageX,
              u = "touchmove" === o.type ? d.pageY : o.pageY;
          if (o.preventedByNestedSwiper) return n.startX = p, void (n.startY = u);
          if (!a.allowTouchMove) return a.allowClick = !1, void (i.isTouched && (M(n, {
            startX: p,
            startY: u,
            currentX: p,
            currentY: u
          }), i.touchStartTime = x()));
          if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (a.isVertical()) {
            if (u < n.startY && a.translate <= a.maxTranslate() || u > n.startY && a.translate >= a.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
          } else if (p < n.startX && a.translate <= a.maxTranslate() || p > n.startX && a.translate >= a.minTranslate()) return;
          if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && m(o.target).is(i.focusableElements)) return i.isMoved = !0, void (a.allowClick = !1);

          if (i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
            n.currentX = p, n.currentY = u;
            var c = n.currentX - n.startX,
                h = n.currentY - n.startY;

            if (!(a.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(h, 2)) < a.params.threshold)) {
              var v;
              if (void 0 === i.isScrolling) a.isHorizontal() && n.currentY === n.startY || a.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : c * c + h * h >= 25 && (v = 180 * Math.atan2(Math.abs(h), Math.abs(c)) / Math.PI, i.isScrolling = a.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle);
              if (i.isScrolling && a.emit("touchMoveOpposite", o), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
                a.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), i.isMoved || (s.loop && a.loopFix(), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", o)), a.emit("sliderMove", o), i.isMoved = !0;
                var f = a.isHorizontal() ? c : h;
                n.diff = f, f *= s.touchRatio, l && (f = -f), a.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                var g = !0,
                    b = s.resistanceRatio;

                if (s.touchReleaseOnEdges && (b = 0), f > 0 && i.currentTranslate > a.minTranslate() ? (g = !1, s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + f, b))) : f < 0 && i.currentTranslate < a.maxTranslate() && (g = !1, s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - f, b))), g && (o.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.allowSlidePrev || a.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                  if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                  if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = a.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
                }

                s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                  position: n[a.isHorizontal() ? "startX" : "startY"],
                  time: i.touchStartTime
                }), i.velocities.push({
                  position: n[a.isHorizontal() ? "currentX" : "currentY"],
                  time: x()
                })), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate));
              }
            }
          }
        }
      } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", o);
    }
  }

  function B(e) {
    var t = this,
        a = t.touchEventsData,
        i = t.params,
        s = t.touches,
        r = t.rtlTranslate,
        n = t.$wrapperEl,
        l = t.slidesGrid,
        o = t.snapGrid;

    if (t.enabled) {
      var d = e;
      if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);
      i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
      var p,
          u = x(),
          c = u - a.touchStartTime;
      if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), c < 300 && u - a.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), a.lastClickTime = x(), E(function () {
        t.destroyed || (t.allowClick = !0);
      }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);
      if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, !i.cssMode) if (i.freeMode) {
        if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (p > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));

        if (i.freeModeMomentum) {
          if (a.velocities.length > 1) {
            var h = a.velocities.pop(),
                v = a.velocities.pop(),
                f = h.position - v.position,
                m = h.time - v.time;
            t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || x() - h.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;

          t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
          var g = 1e3 * i.freeModeMomentumRatio,
              b = t.velocity * g,
              w = t.translate + b;
          r && (w = -w);
          var y,
              T,
              C = !1,
              S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
          if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S), y = t.maxTranslate(), C = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (T = !0);else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > S && (w = t.minTranslate() + S), y = t.minTranslate(), C = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (T = !0);else if (i.freeModeSticky) {
            for (var M, z = 0; z < o.length; z += 1) {
              if (o[z] > -w) {
                M = z;
                break;
              }
            }

            w = -(w = Math.abs(o[M] - w) < Math.abs(o[M - 1] - w) || "next" === t.swipeDirection ? o[M] : o[M - 1]);
          }

          if (T && t.once("transitionEnd", function () {
            t.loopFix();
          }), 0 !== t.velocity) {
            if (g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity), i.freeModeSticky) {
              var P = Math.abs((r ? -w : w) - t.translate),
                  k = t.slidesSizesGrid[t.activeIndex];
              g = P < k ? i.speed : P < 2 * k ? 1.5 * i.speed : 2.5 * i.speed;
            }
          } else if (i.freeModeSticky) return void t.slideToClosest();

          i.freeModeMomentumBounce && C ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
            t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout(function () {
              t.setTranslate(y), n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd();
              });
            }, 0));
          })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
            t && !t.destroyed && t.transitionEnd();
          }))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(w)), t.updateActiveIndex(), t.updateSlidesClasses();
        } else {
          if (i.freeModeSticky) return void t.slideToClosest();
          i.freeMode && t.emit("_freeModeNoMomentumRelease");
        }

        (!i.freeModeMomentum || c >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
      } else {
        for (var $ = 0, L = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
          var O = I < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== l[I + O] ? p >= l[I] && p < l[I + O] && ($ = I, L = l[I + O] - l[I]) : p >= l[I] && ($ = I, L = l[l.length - 1] - l[l.length - 2]);
        }

        var A = (p - l[$]) / L,
            D = $ < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;

        if (c > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (A >= i.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)), "prev" === t.swipeDirection && (A > 1 - i.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo($ + D) : t.slideTo($) : ("next" === t.swipeDirection && t.slideTo($ + D), "prev" === t.swipeDirection && t.slideTo($));
        }
      }
    }
  }

  function H() {
    var e = this,
        t = e.params,
        a = e.el;

    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext,
          s = e.allowSlidePrev,
          r = e.snapGrid;
      e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }

  function R(e) {
    var t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }

  function X() {
    var e = this,
        t = e.wrapperEl,
        a = e.rtlTranslate;

    if (e.enabled) {
      e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = a ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
      var i = e.maxTranslate() - e.minTranslate();
      (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(a ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
    }
  }

  var Y = !1;

  function V() {}

  var W = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !1,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: !0,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: !1,
    freeModeMinimumVelocity: .02,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !1,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    watchSlidesVisibility: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-container-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  },
      F = {
    modular: {
      useParams: function useParams(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (a) {
          var i = t.modules[a];
          i.params && M(e, i.params);
        });
      },
      useModules: function useModules(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (a) {
          var i = t.modules[a],
              s = e[a] || {};
          i.on && t.on && Object.keys(i.on).forEach(function (e) {
            t.on(e, i.on[e]);
          }), i.create && i.create.bind(t)(s);
        });
      }
    },
    eventsEmitter: {
      on: function on(e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;
        var s = a ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
          i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
        }), i;
      },
      once: function once(e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;

        function s() {
          i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;

          for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) {
            r[n] = arguments[n];
          }

          t.apply(i, r);
        }

        return s.__emitterProxy = t, i.on(e, s, a);
      },
      onAny: function onAny(e, t) {
        var a = this;
        if ("function" != typeof e) return a;
        var i = t ? "unshift" : "push";
        return a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[i](e), a;
      },
      offAny: function offAny(e) {
        var t = this;
        if (!t.eventsAnyListeners) return t;
        var a = t.eventsAnyListeners.indexOf(e);
        return a >= 0 && t.eventsAnyListeners.splice(a, 1), t;
      },
      off: function off(e, t) {
        var a = this;
        return a.eventsListeners ? (e.split(" ").forEach(function (e) {
          void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e] && a.eventsListeners[e].forEach(function (i, s) {
            (i === t || i.__emitterProxy && i.__emitterProxy === t) && a.eventsListeners[e].splice(s, 1);
          });
        }), a) : a;
      },
      emit: function emit() {
        var e,
            t,
            a,
            i = this;
        if (!i.eventsListeners) return i;

        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) {
          r[n] = arguments[n];
        }

        "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), a = i) : (e = r[0].events, t = r[0].data, a = r[0].context || i), t.unshift(a);
        var l = Array.isArray(e) ? e : e.split(" ");
        return l.forEach(function (e) {
          i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(function (i) {
            i.apply(a, [e].concat(t));
          }), i.eventsListeners && i.eventsListeners[e] && i.eventsListeners[e].forEach(function (e) {
            e.apply(a, t);
          });
        }), i;
      }
    },
    update: {
      updateSize: function updateSize() {
        var e,
            t,
            a = this,
            i = a.$el;
        e = void 0 !== a.params.width && null !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height && null !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), M(a, {
          width: e,
          height: t,
          size: a.isHorizontal() ? e : t
        }));
      },
      updateSlides: function updateSlides() {
        var e = this;

        function t(t) {
          return e.isHorizontal() ? t : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          }[t];
        }

        function a(e, a) {
          return parseFloat(e.getPropertyValue(t(a)) || 0);
        }

        var i = e.params,
            s = e.$wrapperEl,
            r = e.size,
            n = e.rtlTranslate,
            l = e.wrongRTL,
            o = e.virtual && i.virtual.enabled,
            d = o ? e.virtual.slides.length : e.slides.length,
            p = s.children("." + e.params.slideClass),
            u = o ? e.virtual.slides.length : p.length,
            c = [],
            h = [],
            v = [],
            f = i.slidesOffsetBefore;
        "function" == typeof f && (f = i.slidesOffsetBefore.call(e));
        var m = i.slidesOffsetAfter;
        "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
        var g = e.snapGrid.length,
            b = e.slidesGrid.length,
            w = i.spaceBetween,
            y = -f,
            E = 0,
            x = 0;

        if (void 0 !== r) {
          var T, C;
          "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * r), e.virtualSize = -w, n ? p.css({
            marginLeft: "",
            marginBottom: "",
            marginTop: ""
          }) : p.css({
            marginRight: "",
            marginBottom: "",
            marginTop: ""
          }), i.slidesPerColumn > 1 && (T = Math.floor(u / i.slidesPerColumn) === u / e.params.slidesPerColumn ? u : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn, "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (T = Math.max(T, i.slidesPerView * i.slidesPerColumn)));

          for (var S, z, P, k = i.slidesPerColumn, $ = T / k, L = Math.floor(u / i.slidesPerColumn), I = 0; I < u; I += 1) {
            C = 0;
            var O = p.eq(I);

            if (i.slidesPerColumn > 1) {
              var A = void 0,
                  D = void 0,
                  N = void 0;

              if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                var G = Math.floor(I / (i.slidesPerGroup * i.slidesPerColumn)),
                    B = I - i.slidesPerColumn * i.slidesPerGroup * G,
                    H = 0 === G ? i.slidesPerGroup : Math.min(Math.ceil((u - G * k * i.slidesPerGroup) / k), i.slidesPerGroup);
                A = (D = B - (N = Math.floor(B / H)) * H + G * i.slidesPerGroup) + N * T / k, O.css({
                  "-webkit-box-ordinal-group": A,
                  "-moz-box-ordinal-group": A,
                  "-ms-flex-order": A,
                  "-webkit-order": A,
                  order: A
                });
              } else "column" === i.slidesPerColumnFill ? (N = I - (D = Math.floor(I / k)) * k, (D > L || D === L && N === k - 1) && (N += 1) >= k && (N = 0, D += 1)) : D = I - (N = Math.floor(I / $)) * $;

              O.css(t("margin-top"), 0 !== N ? i.spaceBetween && i.spaceBetween + "px" : "");
            }

            if ("none" !== O.css("display")) {
              if ("auto" === i.slidesPerView) {
                var R = getComputedStyle(O[0]),
                    X = O[0].style.transform,
                    Y = O[0].style.webkitTransform;
                if (X && (O[0].style.transform = "none"), Y && (O[0].style.webkitTransform = "none"), i.roundLengths) C = e.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);else {
                  var V = a(R, "width"),
                      W = a(R, "padding-left"),
                      F = a(R, "padding-right"),
                      _ = a(R, "margin-left"),
                      q = a(R, "margin-right"),
                      j = R.getPropertyValue("box-sizing");

                  if (j && "border-box" === j) C = V + _ + q;else {
                    var U = O[0],
                        K = U.clientWidth;
                    C = V + W + F + _ + q + (U.offsetWidth - K);
                  }
                }
                X && (O[0].style.transform = X), Y && (O[0].style.webkitTransform = Y), i.roundLengths && (C = Math.floor(C));
              } else C = (r - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (C = Math.floor(C)), p[I] && (p[I].style[t("width")] = C + "px");

              p[I] && (p[I].swiperSlideSize = C), v.push(C), i.centeredSlides ? (y = y + C / 2 + E / 2 + w, 0 === E && 0 !== I && (y = y - r / 2 - w), 0 === I && (y = y - r / 2 - w), Math.abs(y) < .001 && (y = 0), i.roundLengths && (y = Math.floor(y)), x % i.slidesPerGroup == 0 && c.push(y), h.push(y)) : (i.roundLengths && (y = Math.floor(y)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && c.push(y), h.push(y), y = y + C + w), e.virtualSize += C + w, E = C, x += 1;
            }
          }

          if (e.virtualSize = Math.max(e.virtualSize, r) + m, n && l && ("slide" === i.effect || "coverflow" === i.effect) && s.css({
            width: e.virtualSize + i.spaceBetween + "px"
          }), i.setWrapperSize) s.css(((z = {})[t("width")] = e.virtualSize + i.spaceBetween + "px", z));
          if (i.slidesPerColumn > 1) if (e.virtualSize = (C + i.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween, s.css(((P = {})[t("width")] = e.virtualSize + i.spaceBetween + "px", P)), i.centeredSlides) {
            S = [];

            for (var Z = 0; Z < c.length; Z += 1) {
              var J = c[Z];
              i.roundLengths && (J = Math.floor(J)), c[Z] < e.virtualSize + c[0] && S.push(J);
            }

            c = S;
          }

          if (!i.centeredSlides) {
            S = [];

            for (var Q = 0; Q < c.length; Q += 1) {
              var ee = c[Q];
              i.roundLengths && (ee = Math.floor(ee)), c[Q] <= e.virtualSize - r && S.push(ee);
            }

            c = S, Math.floor(e.virtualSize - r) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - r);
          }

          if (0 === c.length && (c = [0]), 0 !== i.spaceBetween) {
            var te,
                ae = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
            p.filter(function (e, t) {
              return !i.cssMode || t !== p.length - 1;
            }).css(((te = {})[ae] = w + "px", te));
          }

          if (i.centeredSlides && i.centeredSlidesBounds) {
            var ie = 0;
            v.forEach(function (e) {
              ie += e + (i.spaceBetween ? i.spaceBetween : 0);
            });
            var se = (ie -= i.spaceBetween) - r;
            c = c.map(function (e) {
              return e < 0 ? -f : e > se ? se + m : e;
            });
          }

          if (i.centerInsufficientSlides) {
            var re = 0;

            if (v.forEach(function (e) {
              re += e + (i.spaceBetween ? i.spaceBetween : 0);
            }), (re -= i.spaceBetween) < r) {
              var ne = (r - re) / 2;
              c.forEach(function (e, t) {
                c[t] = e - ne;
              }), h.forEach(function (e, t) {
                h[t] = e + ne;
              });
            }
          }

          M(e, {
            slides: p,
            snapGrid: c,
            slidesGrid: h,
            slidesSizesGrid: v
          }), u !== d && e.emit("slidesLengthChange"), c.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset();
        }
      },
      updateAutoHeight: function updateAutoHeight(e) {
        var t,
            a = this,
            i = [],
            s = a.virtual && a.params.virtual.enabled,
            r = 0;
        "number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed);

        var n = function n(e) {
          return s ? a.slides.filter(function (t) {
            return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
          })[0] : a.slides.eq(e)[0];
        };

        if ("auto" !== a.params.slidesPerView && a.params.slidesPerView > 1) {
          if (a.params.centeredSlides) a.visibleSlides.each(function (e) {
            i.push(e);
          });else for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
            var l = a.activeIndex + t;
            if (l > a.slides.length && !s) break;
            i.push(n(l));
          }
        } else i.push(n(a.activeIndex));

        for (t = 0; t < i.length; t += 1) {
          if (void 0 !== i[t]) {
            var o = i[t].offsetHeight;
            r = o > r ? o : r;
          }
        }

        r && a.$wrapperEl.css("height", r + "px");
      },
      updateSlidesOffset: function updateSlidesOffset() {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        }
      },
      updateSlidesProgress: function updateSlidesProgress(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this,
            a = t.params,
            i = t.slides,
            s = t.rtlTranslate;

        if (0 !== i.length) {
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          var r = -e;
          s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

          for (var n = 0; n < i.length; n += 1) {
            var l = i[n],
                o = (r + (a.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + a.spaceBetween);

            if (a.watchSlidesVisibility || a.centeredSlides && a.autoHeight) {
              var d = -(r - l.swiperSlideOffset),
                  p = d + t.slidesSizesGrid[n];
              (d >= 0 && d < t.size - 1 || p > 1 && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass));
            }

            l.progress = s ? -o : o;
          }

          t.visibleSlides = m(t.visibleSlides);
        }
      },
      updateProgress: function updateProgress(e) {
        var t = this;

        if (void 0 === e) {
          var a = t.rtlTranslate ? -1 : 1;
          e = t && t.translate && t.translate * a || 0;
        }

        var i = t.params,
            s = t.maxTranslate() - t.minTranslate(),
            r = t.progress,
            n = t.isBeginning,
            l = t.isEnd,
            o = n,
            d = l;
        0 === s ? (r = 0, n = !0, l = !0) : (n = (r = (e - t.minTranslate()) / s) <= 0, l = r >= 1), M(t, {
          progress: r,
          isBeginning: n,
          isEnd: l
        }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), l && !d && t.emit("reachEnd toEdge"), (o && !n || d && !l) && t.emit("fromEdge"), t.emit("progress", r);
      },
      updateSlidesClasses: function updateSlidesClasses() {
        var e,
            t = this,
            a = t.slides,
            i = t.params,
            s = t.$wrapperEl,
            r = t.activeIndex,
            n = t.realIndex,
            l = t.virtual && i.virtual.enabled;
        a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = l ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
        var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
        i.loop && 0 === o.length && (o = a.eq(0)).addClass(i.slideNextClass);
        var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
        i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), t.emitSlidesClasses();
      },
      updateActiveIndex: function updateActiveIndex(e) {
        var t,
            a = this,
            i = a.rtlTranslate ? a.translate : -a.translate,
            s = a.slidesGrid,
            r = a.snapGrid,
            n = a.params,
            l = a.activeIndex,
            o = a.realIndex,
            d = a.snapIndex,
            p = e;

        if (void 0 === p) {
          for (var u = 0; u < s.length; u += 1) {
            void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? p = u : i >= s[u] && i < s[u + 1] && (p = u + 1) : i >= s[u] && (p = u);
          }

          n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
        }

        if (r.indexOf(i) >= 0) t = r.indexOf(i);else {
          var c = Math.min(n.slidesPerGroupSkip, p);
          t = c + Math.floor((p - c) / n.slidesPerGroup);
        }

        if (t >= r.length && (t = r.length - 1), p !== l) {
          var h = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
          M(a, {
            snapIndex: t,
            realIndex: h,
            previousIndex: l,
            activeIndex: p
          }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), o !== h && a.emit("realIndexChange"), (a.initialized || a.params.runCallbacksOnInit) && a.emit("slideChange");
        } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"));
      },
      updateClickedSlide: function updateClickedSlide(e) {
        var t,
            a = this,
            i = a.params,
            s = m(e.target).closest("." + i.slideClass)[0],
            r = !1;
        if (s) for (var n = 0; n < a.slides.length; n += 1) {
          if (a.slides[n] === s) {
            r = !0, t = n;
            break;
          }
        }
        if (!s || !r) return a.clickedSlide = void 0, void (a.clickedIndex = void 0);
        a.clickedSlide = s, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(m(s).attr("data-swiper-slide-index"), 10) : a.clickedIndex = t, i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide();
      }
    },
    translate: {
      getTranslate: function getTranslate(e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this,
            a = t.params,
            i = t.rtlTranslate,
            s = t.translate,
            r = t.$wrapperEl;
        if (a.virtualTranslate) return i ? -s : s;
        if (a.cssMode) return s;
        var n = T(r[0], e);
        return i && (n = -n), n || 0;
      },
      setTranslate: function setTranslate(e, t) {
        var a = this,
            i = a.rtlTranslate,
            s = a.params,
            r = a.$wrapperEl,
            n = a.wrapperEl,
            l = a.progress,
            o = 0,
            d = 0;
        a.isHorizontal() ? o = i ? -e : e : d = e, s.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.cssMode ? n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -o : -d : s.virtualTranslate || r.transform("translate3d(" + o + "px, " + d + "px, 0px)"), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : d;
        var p = a.maxTranslate() - a.minTranslate();
        (0 === p ? 0 : (e - a.minTranslate()) / p) !== l && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
      },
      minTranslate: function minTranslate() {
        return -this.snapGrid[0];
      },
      maxTranslate: function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function translateTo(e, t, a, i, s) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), void 0 === i && (i = !0);
        var r = this,
            n = r.params,
            l = r.wrapperEl;
        if (r.animating && n.preventInteractionOnTransition) return !1;
        var o,
            d = r.minTranslate(),
            p = r.maxTranslate();

        if (o = i && e > d ? d : i && e < p ? p : e, r.updateProgress(o), n.cssMode) {
          var u,
              c = r.isHorizontal();
          if (0 === t) l[c ? "scrollLeft" : "scrollTop"] = -o;else if (l.scrollTo) l.scrollTo(((u = {})[c ? "left" : "top"] = -o, u.behavior = "smooth", u));else l[c ? "scrollLeft" : "scrollTop"] = -o;
          return !0;
        }

        return 0 === t ? (r.setTransition(0), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
          r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, a && r.emit("transitionEnd"));
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
      }
    },
    transition: {
      setTransition: function setTransition(e, t) {
        var a = this;
        a.params.cssMode || a.$wrapperEl.transition(e), a.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart(e, t) {
        void 0 === e && (e = !0);
        var a = this,
            i = a.activeIndex,
            s = a.params,
            r = a.previousIndex;

        if (!s.cssMode) {
          s.autoHeight && a.updateAutoHeight();
          var n = t;

          if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
            if ("reset" === n) return void a.emit("slideResetTransitionStart");
            a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart");
          }
        }
      },
      transitionEnd: function transitionEnd(e, t) {
        void 0 === e && (e = !0);
        var a = this,
            i = a.activeIndex,
            s = a.previousIndex,
            r = a.params;

        if (a.animating = !1, !r.cssMode) {
          a.setTransition(0);
          var n = t;

          if (n || (n = i > s ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
            if ("reset" === n) return void a.emit("slideResetTransitionEnd");
            a.emit("slideChangeTransitionEnd"), "next" === n ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd");
          }
        }
      }
    },
    slide: {
      slideTo: function slideTo(e, t, a, i, s) {
        if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + _typeof(e) + "] given.");

        if ("string" == typeof e) {
          var r = parseInt(e, 10);
          if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
          e = r;
        }

        var n = this,
            l = e;
        l < 0 && (l = 0);
        var o = n.params,
            d = n.snapGrid,
            p = n.slidesGrid,
            u = n.previousIndex,
            c = n.activeIndex,
            h = n.rtlTranslate,
            v = n.wrapperEl,
            f = n.enabled;
        if (n.animating && o.preventInteractionOnTransition || !f && !i && !s) return !1;
        var m = Math.min(n.params.slidesPerGroupSkip, l),
            g = m + Math.floor((l - m) / n.params.slidesPerGroup);
        g >= d.length && (g = d.length - 1), (c || o.initialSlide || 0) === (u || 0) && a && n.emit("beforeSlideChangeStart");
        var b,
            w = -d[g];
        if (n.updateProgress(w), o.normalizeSlideIndex) for (var y = 0; y < p.length; y += 1) {
          var E = -Math.floor(100 * w),
              x = Math.floor(100 * p[y]),
              T = Math.floor(100 * p[y + 1]);
          void 0 !== p[y + 1] ? E >= x && E < T - (T - x) / 2 ? l = y : E >= x && E < T && (l = y + 1) : E >= x && (l = y);
        }

        if (n.initialized && l !== c) {
          if (!n.allowSlideNext && w < n.translate && w < n.minTranslate()) return !1;
          if (!n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (c || 0) !== l) return !1;
        }

        if (b = l > c ? "next" : l < c ? "prev" : "reset", h && -w === n.translate || !h && w === n.translate) return n.updateActiveIndex(l), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(w), "reset" !== b && (n.transitionStart(a, b), n.transitionEnd(a, b)), !1;

        if (o.cssMode) {
          var C,
              S = n.isHorizontal(),
              M = -w;
          if (h && (M = v.scrollWidth - v.offsetWidth - M), 0 === t) v[S ? "scrollLeft" : "scrollTop"] = M;else if (v.scrollTo) v.scrollTo(((C = {})[S ? "left" : "top"] = M, C.behavior = "smooth", C));else v[S ? "scrollLeft" : "scrollTop"] = M;
          return !0;
        }

        return 0 === t ? (n.setTransition(0), n.setTranslate(w), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a, b), n.transitionEnd(a, b)) : (n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a, b), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
          n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(a, b));
        }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))), !0;
      },
      slideToLoop: function slideToLoop(e, t, a, i) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
        var s = this,
            r = e;
        return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, a, i);
      },
      slideNext: function slideNext(e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
            s = i.params,
            r = i.animating;
        if (!i.enabled) return i;
        var n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;

        if (s.loop) {
          if (r && s.loopPreventsSlide) return !1;
          i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
        }

        return i.slideTo(i.activeIndex + n, e, t, a);
      },
      slidePrev: function slidePrev(e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
            s = i.params,
            r = i.animating,
            n = i.snapGrid,
            l = i.slidesGrid,
            o = i.rtlTranslate;
        if (!i.enabled) return i;

        if (s.loop) {
          if (r && s.loopPreventsSlide) return !1;
          i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
        }

        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }

        var p,
            u = d(o ? i.translate : -i.translate),
            c = n.map(function (e) {
          return d(e);
        }),
            h = n[c.indexOf(u) - 1];
        return void 0 === h && s.cssMode && n.forEach(function (e) {
          !h && u >= e && (h = e);
        }), void 0 !== h && (p = l.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a);
      },
      slideReset: function slideReset(e, t, a) {
        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a);
      },
      slideToClosest: function slideToClosest(e, t, a, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
        var s = this,
            r = s.activeIndex,
            n = Math.min(s.params.slidesPerGroupSkip, r),
            l = n + Math.floor((r - n) / s.params.slidesPerGroup),
            o = s.rtlTranslate ? s.translate : -s.translate;

        if (o >= s.snapGrid[l]) {
          var d = s.snapGrid[l];
          o - d > (s.snapGrid[l + 1] - d) * i && (r += s.params.slidesPerGroup);
        } else {
          var p = s.snapGrid[l - 1];
          o - p <= (s.snapGrid[l] - p) * i && (r -= s.params.slidesPerGroup);
        }

        return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, e, t, a);
      },
      slideToClickedSlide: function slideToClickedSlide() {
        var e,
            t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
            r = t.clickedIndex;

        if (a.loop) {
          if (t.animating) return;
          e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(r);
          })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(r);
          })) : t.slideTo(r);
        } else t.slideTo(r);
      }
    },
    loop: {
      loopCreate: function loopCreate() {
        var e = this,
            t = r(),
            a = e.params,
            i = e.$wrapperEl;
        i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
        var s = i.children("." + a.slideClass);

        if (a.loopFillGroupWithBlank) {
          var n = a.slidesPerGroup - s.length % a.slidesPerGroup;

          if (n !== a.slidesPerGroup) {
            for (var l = 0; l < n; l += 1) {
              var o = m(t.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
              i.append(o);
            }

            s = i.children("." + a.slideClass);
          }
        }

        "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length), e.loopedSlides = Math.ceil(parseFloat(a.loopedSlides || a.slidesPerView, 10)), e.loopedSlides += a.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
        var d = [],
            p = [];
        s.each(function (t, a) {
          var i = m(t);
          a < e.loopedSlides && p.push(t), a < s.length && a >= s.length - e.loopedSlides && d.push(t), i.attr("data-swiper-slide-index", a);
        });

        for (var u = 0; u < p.length; u += 1) {
          i.append(m(p[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
        }

        for (var c = d.length - 1; c >= 0; c -= 1) {
          i.prepend(m(d[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
        }
      },
      loopFix: function loopFix() {
        var e = this;
        e.emit("beforeLoopFix");
        var t,
            a = e.activeIndex,
            i = e.slides,
            s = e.loopedSlides,
            r = e.allowSlidePrev,
            n = e.allowSlideNext,
            l = e.snapGrid,
            o = e.rtlTranslate;
        e.allowSlidePrev = !0, e.allowSlideNext = !0;
        var d = -l[a] - e.getTranslate();
        if (a < s) t = i.length - 3 * s + a, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);else if (a >= i.length - s) {
          t = -i.length + a + s, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);
        }
        e.allowSlidePrev = r, e.allowSlideNext = n, e.emit("loopFix");
      },
      loopDestroy: function loopDestroy() {
        var e = this,
            t = e.$wrapperEl,
            a = e.params,
            i = e.slides;
        t.children("." + a.slideClass + "." + a.slideDuplicateClass + ",." + a.slideClass + "." + a.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
      }
    },
    grabCursor: {
      setGrabCursor: function setGrabCursor(e) {
        var t = this;

        if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
          var a = t.el;
          a.style.cursor = "move", a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = e ? "-moz-grabbin" : "-moz-grab", a.style.cursor = e ? "grabbing" : "grab";
        }
      },
      unsetGrabCursor: function unsetGrabCursor() {
        var e = this;
        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "");
      }
    },
    manipulation: {
      appendSlide: function appendSlide(e) {
        var t = this,
            a = t.$wrapperEl,
            i = t.params;
        if (i.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) {
          e[s] && a.append(e[s]);
        } else a.append(e);
        i.loop && t.loopCreate(), i.observer && t.support.observer || t.update();
      },
      prependSlide: function prependSlide(e) {
        var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
        a.loop && t.loopDestroy();
        var r = s + 1;

        if ("object" == _typeof(e) && "length" in e) {
          for (var n = 0; n < e.length; n += 1) {
            e[n] && i.prepend(e[n]);
          }

          r = s + e.length;
        } else i.prepend(e);

        a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), t.slideTo(r, 0, !1);
      },
      addSlide: function addSlide(e, t) {
        var a = this,
            i = a.$wrapperEl,
            s = a.params,
            r = a.activeIndex;
        s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
        var n = a.slides.length;
        if (e <= 0) a.prependSlide(t);else if (e >= n) a.appendSlide(t);else {
          for (var l = r > e ? r + 1 : r, o = [], d = n - 1; d >= e; d -= 1) {
            var p = a.slides.eq(d);
            p.remove(), o.unshift(p);
          }

          if ("object" == _typeof(t) && "length" in t) {
            for (var u = 0; u < t.length; u += 1) {
              t[u] && i.append(t[u]);
            }

            l = r > e ? r + t.length : r;
          } else i.append(t);

          for (var c = 0; c < o.length; c += 1) {
            i.append(o[c]);
          }

          s.loop && a.loopCreate(), s.observer && a.support.observer || a.update(), s.loop ? a.slideTo(l + a.loopedSlides, 0, !1) : a.slideTo(l, 0, !1);
        }
      },
      removeSlide: function removeSlide(e) {
        var t = this,
            a = t.params,
            i = t.$wrapperEl,
            s = t.activeIndex;
        a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
        var r,
            n = s;

        if ("object" == _typeof(e) && "length" in e) {
          for (var l = 0; l < e.length; l += 1) {
            r = e[l], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
          }

          n = Math.max(n, 0);
        } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);

        a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
      },
      removeAllSlides: function removeAllSlides() {
        for (var e = [], t = 0; t < this.slides.length; t += 1) {
          e.push(t);
        }

        this.removeSlide(e);
      }
    },
    events: {
      attachEvents: function attachEvents() {
        var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support;
        e.onTouchStart = N.bind(e), e.onTouchMove = G.bind(e), e.onTouchEnd = B.bind(e), a.cssMode && (e.onScroll = X.bind(e)), e.onClick = R.bind(e);
        var d = !!a.nested;
        if (!o.touch && o.pointerEvents) s.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(i.move, e.onTouchMove, d), t.addEventListener(i.end, e.onTouchEnd, !1);else {
          if (o.touch) {
            var p = !("touchstart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.addEventListener(i.start, e.onTouchStart, p), s.addEventListener(i.move, e.onTouchMove, o.passiveListener ? {
              passive: !1,
              capture: d
            } : d), s.addEventListener(i.end, e.onTouchEnd, p), i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, p), Y || (t.addEventListener("touchstart", V), Y = !0);
          }

          (a.simulateTouch && !l.ios && !l.android || a.simulateTouch && !o.touch && l.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, d), t.addEventListener("mouseup", e.onTouchEnd, !1));
        }
        (a.preventClicks || a.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0), a.cssMode && n.addEventListener("scroll", e.onScroll), a.updateOnWindowResize ? e.on(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H, !0) : e.on("observerUpdate", H, !0);
      },
      detachEvents: function detachEvents() {
        var e = this,
            t = r(),
            a = e.params,
            i = e.touchEvents,
            s = e.el,
            n = e.wrapperEl,
            l = e.device,
            o = e.support,
            d = !!a.nested;
        if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, e.onTouchStart, !1), t.removeEventListener(i.move, e.onTouchMove, d), t.removeEventListener(i.end, e.onTouchEnd, !1);else {
          if (o.touch) {
            var p = !("onTouchStart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.removeEventListener(i.start, e.onTouchStart, p), s.removeEventListener(i.move, e.onTouchMove, d), s.removeEventListener(i.end, e.onTouchEnd, p), i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, p);
          }

          (a.simulateTouch && !l.ios && !l.android || a.simulateTouch && !o.touch && l.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, d), t.removeEventListener("mouseup", e.onTouchEnd, !1));
        }
        (a.preventClicks || a.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), a.cssMode && n.removeEventListener("scroll", e.onScroll), e.off(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H);
      }
    },
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this,
            t = e.activeIndex,
            a = e.initialized,
            i = e.loopedSlides,
            s = void 0 === i ? 0 : i,
            r = e.params,
            n = e.$el,
            l = r.breakpoints;

        if (l && (!l || 0 !== Object.keys(l).length)) {
          var o = e.getBreakpoint(l, e.params.breakpointsBase, e.el);

          if (o && e.currentBreakpoint !== o) {
            var d = o in l ? l[o] : void 0;
            d && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
              var t = d[e];
              void 0 !== t && (d[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
            });
            var p = d || e.originalParams,
                u = r.slidesPerColumn > 1,
                c = p.slidesPerColumn > 1,
                h = r.enabled;
            u && !c ? (n.removeClass(r.containerModifierClass + "multirow " + r.containerModifierClass + "multirow-column"), e.emitContainerClasses()) : !u && c && (n.addClass(r.containerModifierClass + "multirow"), (p.slidesPerColumnFill && "column" === p.slidesPerColumnFill || !p.slidesPerColumnFill && "column" === r.slidesPerColumnFill) && n.addClass(r.containerModifierClass + "multirow-column"), e.emitContainerClasses());
            var v = p.direction && p.direction !== r.direction,
                f = r.loop && (p.slidesPerView !== r.slidesPerView || v);
            v && a && e.changeDirection(), M(e.params, p);
            var m = e.params.enabled;
            M(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev
            }), h && !m ? e.disable() : !h && m && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", p), f && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", p);
          }
        }
      },
      getBreakpoint: function getBreakpoint(e, t, a) {
        if (void 0 === t && (t = "window"), e && ("container" !== t || a)) {
          var i = !1,
              s = l(),
              r = "window" === t ? s.innerHeight : a.clientHeight,
              n = Object.keys(e).map(function (e) {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              var t = parseFloat(e.substr(1));
              return {
                value: r * t,
                point: e
              };
            }

            return {
              value: e,
              point: e
            };
          });
          n.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });

          for (var o = 0; o < n.length; o += 1) {
            var d = n[o],
                p = d.point,
                u = d.value;
            "window" === t ? s.matchMedia("(min-width: " + u + "px)").matches && (i = p) : u <= a.clientWidth && (i = p);
          }

          return i || "max";
        }
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this,
            t = e.params,
            a = e.isLocked,
            i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
        t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), a && a !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update());
      }
    },
    classes: {
      addClasses: function addClasses() {
        var e,
            t,
            a,
            i = this,
            s = i.classNames,
            r = i.params,
            n = i.rtl,
            l = i.$el,
            o = i.device,
            d = i.support,
            p = (e = ["initialized", r.direction, {
          "pointer-events": d.pointerEvents && !d.touch
        }, {
          "free-mode": r.freeMode
        }, {
          autoheight: r.autoHeight
        }, {
          rtl: n
        }, {
          multirow: r.slidesPerColumn > 1
        }, {
          "multirow-column": r.slidesPerColumn > 1 && "column" === r.slidesPerColumnFill
        }, {
          android: o.android
        }, {
          ios: o.ios
        }, {
          "css-mode": r.cssMode
        }], t = r.containerModifierClass, a = [], e.forEach(function (e) {
          "object" == _typeof(e) ? Object.keys(e).forEach(function (i) {
            e[i] && a.push(t + i);
          }) : "string" == typeof e && a.push(t + e);
        }), a);
        s.push.apply(s, p), l.addClass([].concat(s).join(" ")), i.emitContainerClasses();
      },
      removeClasses: function removeClasses() {
        var e = this,
            t = e.$el,
            a = e.classNames;
        t.removeClass(a.join(" ")), e.emitContainerClasses();
      }
    },
    images: {
      loadImage: function loadImage(e, t, a, i, s, r) {
        var n,
            o = l();

        function d() {
          r && r();
        }

        m(e).parent("picture")[0] || e.complete && s ? d() : t ? ((n = new o.Image()).onload = d, n.onerror = d, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : d();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var a = 0; a < e.imagesToLoad.length; a += 1) {
          var i = e.imagesToLoad[a];
          e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      _ = {},
      q = function () {
    function t() {
      for (var e, a, i = arguments.length, s = new Array(i), r = 0; r < i; r++) {
        s[r] = arguments[r];
      }

      if (1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? a = s[0] : (e = s[0], a = s[1]), a || (a = {}), a = M({}, a), e && !a.el && (a.el = e), a.el && m(a.el).length > 1) {
        var n = [];
        return m(a.el).each(function (e) {
          var i = M({}, a, {
            el: e
          });
          n.push(new t(i));
        }), n;
      }

      var l = this;
      l.__swiper__ = !0, l.support = $(), l.device = L({
        userAgent: a.userAgent
      }), l.browser = I(), l.eventsListeners = {}, l.eventsAnyListeners = [], void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
        var t = l.modules[e];

        if (t.params) {
          var i = Object.keys(t.params)[0],
              s = t.params[i];
          if ("object" != _typeof(s) || null === s) return;
          if (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === a[i] && (a[i] = {
            auto: !0
          }), !(i in a) || !("enabled" in s)) return;
          !0 === a[i] && (a[i] = {
            enabled: !0
          }), "object" != _typeof(a[i]) || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
            enabled: !1
          });
        }
      });
      var o,
          d,
          p = M({}, W);
      return l.useParams(p), l.params = M({}, p, _, a), l.originalParams = M({}, l.params), l.passedParams = M({}, a), l.params && l.params.on && Object.keys(l.params.on).forEach(function (e) {
        l.on(e, l.params.on[e]);
      }), l.params && l.params.onAny && l.onAny(l.params.onAny), l.$ = m, M(l, {
        enabled: l.params.enabled,
        el: e,
        classNames: [],
        slides: m(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === l.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === l.params.direction;
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEvents: (o = ["touchstart", "touchmove", "touchend", "touchcancel"], d = ["mousedown", "mousemove", "mouseup"], l.support.pointerEvents && (d = ["pointerdown", "pointermove", "pointerup"]), l.touchEventsTouch = {
          start: o[0],
          move: o[1],
          end: o[2],
          cancel: o[3]
        }, l.touchEventsDesktop = {
          start: d[0],
          move: d[1],
          end: d[2]
        }, l.support.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: x(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), l.useModules(), l.emit("_swiper"), l.params.init && l.init(), l;
    }

    var a,
        i,
        s,
        n = t.prototype;
    return n.enable = function () {
      var e = this;
      e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }, n.disable = function () {
      var e = this;
      e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }, n.setProgress = function (e, t) {
      var a = this;
      e = Math.min(Math.max(e, 0), 1);
      var i = a.minTranslate(),
          s = (a.maxTranslate() - i) * e + i;
      a.translateTo(s, void 0 === t ? 0 : t), a.updateActiveIndex(), a.updateSlidesClasses();
    }, n.emitContainerClasses = function () {
      var e = this;

      if (e.params._emitClasses && e.el) {
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, n.getSlideClasses = function (e) {
      var t = this;
      return e.className.split(" ").filter(function (e) {
        return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
      }).join(" ");
    }, n.emitSlidesClasses = function () {
      var e = this;

      if (e.params._emitClasses && e.el) {
        var t = [];
        e.slides.each(function (a) {
          var i = e.getSlideClasses(a);
          t.push({
            slideEl: a,
            classNames: i
          }), e.emit("_slideClass", a, i);
        }), e.emit("_slideClasses", t);
      }
    }, n.slidesPerViewDynamic = function () {
      var e = this,
          t = e.params,
          a = e.slides,
          i = e.slidesGrid,
          s = e.size,
          r = e.activeIndex,
          n = 1;

      if (t.centeredSlides) {
        for (var l, o = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) {
          a[d] && !l && (n += 1, (o += a[d].swiperSlideSize) > s && (l = !0));
        }

        for (var p = r - 1; p >= 0; p -= 1) {
          a[p] && !l && (n += 1, (o += a[p].swiperSlideSize) > s && (l = !0));
        }
      } else for (var u = r + 1; u < a.length; u += 1) {
        i[u] - i[r] < s && (n += 1);
      }

      return n;
    }, n.update = function () {
      var e = this;

      if (e && !e.destroyed) {
        var t = e.snapGrid,
            a = e.params;
        a.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), a.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }

      function i() {
        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
      }
    }, n.changeDirection = function (e, t) {
      void 0 === t && (t = !0);
      var a = this,
          i = a.params.direction;
      return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (a.$el.removeClass("" + a.params.containerModifierClass + i).addClass("" + a.params.containerModifierClass + e), a.emitContainerClasses(), a.params.direction = e, a.slides.each(function (t) {
        "vertical" === e ? t.style.width = "" : t.style.height = "";
      }), a.emit("changeDirection"), t && a.update()), a;
    }, n.mount = function (e) {
      var t = this;
      if (t.mounted) return !0;
      var a = m(e || t.params.el);
      if (!(e = a[0])) return !1;
      e.swiper = t;

      var i = function i() {
        return "." + (t.params.wrapperClass || "").trim().split(" ").join(".");
      },
          s = function () {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          var t = m(e.shadowRoot.querySelector(i()));
          return t.children = function (e) {
            return a.children(e);
          }, t;
        }

        return a.children(i());
      }();

      if (0 === s.length && t.params.createElements) {
        var n = r().createElement("div");
        s = m(n), n.className = t.params.wrapperClass, a.append(n), a.children("." + t.params.slideClass).each(function (e) {
          s.append(e);
        });
      }

      return M(t, {
        $el: a,
        el: e,
        $wrapperEl: s,
        wrapperEl: s[0],
        mounted: !0,
        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction"),
        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction")),
        wrongRTL: "-webkit-box" === s.css("display")
      }), !0;
    }, n.init = function (e) {
      var t = this;
      return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
    }, n.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      var a,
          i = this,
          s = i.params,
          r = i.$el,
          n = i.$wrapperEl,
          l = i.slides;
      return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
        i.off(e);
      }), !1 !== e && (i.$el[0].swiper = null, a = i, Object.keys(a).forEach(function (e) {
        try {
          a[e] = null;
        } catch (e) {}

        try {
          delete a[e];
        } catch (e) {}
      })), i.destroyed = !0), null;
    }, t.extendDefaults = function (e) {
      M(_, e);
    }, t.installModule = function (e) {
      t.prototype.modules || (t.prototype.modules = {});
      var a = e.name || Object.keys(t.prototype.modules).length + "_" + x();
      t.prototype.modules[a] = e;
    }, t.use = function (e) {
      return Array.isArray(e) ? (e.forEach(function (e) {
        return t.installModule(e);
      }), t) : (t.installModule(e), t);
    }, a = t, s = [{
      key: "extendedDefaults",
      get: function get() {
        return _;
      }
    }, {
      key: "defaults",
      get: function get() {
        return W;
      }
    }], (i = null) && e(a.prototype, i), s && e(a, s), t;
  }();

  Object.keys(F).forEach(function (e) {
    Object.keys(F[e]).forEach(function (t) {
      q.prototype[t] = F[e][t];
    });
  }), q.use([O, D]);
  var j = {
    update: function update(e) {
      var t = this,
          a = t.params,
          i = a.slidesPerView,
          s = a.slidesPerGroup,
          r = a.centeredSlides,
          n = t.params.virtual,
          l = n.addSlidesBefore,
          o = n.addSlidesAfter,
          d = t.virtual,
          p = d.from,
          u = d.to,
          c = d.slides,
          h = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
      t.updateActiveIndex();
      var m,
          g,
          b,
          w = t.activeIndex || 0;
      m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
      var y = Math.max((w || 0) - b, 0),
          E = Math.min((w || 0) + g, c.length - 1),
          x = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

      function T() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }

      if (M(t.virtual, {
        from: y,
        to: E,
        offset: x,
        slidesGrid: t.slidesGrid
      }), p === y && u === E && !e) return t.slidesGrid !== h && x !== f && t.slides.css(m, x + "px"), void t.updateProgress();
      if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
        offset: x,
        from: y,
        to: E,
        slides: function () {
          for (var e = [], t = y; t <= E; t += 1) {
            e.push(c[t]);
          }

          return e;
        }()
      }), void (t.params.virtual.renderExternalUpdate && T());
      var C = [],
          S = [];
      if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var z = p; z <= u; z += 1) {
        (z < y || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
      }

      for (var P = 0; P < c.length; P += 1) {
        P >= y && P <= E && (void 0 === u || e ? S.push(P) : (P > u && S.push(P), P < p && C.push(P)));
      }

      S.forEach(function (e) {
        t.$wrapperEl.append(v(c[e], e));
      }), C.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(v(c[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T();
    },
    renderSlide: function renderSlide(e, t) {
      var a = this,
          i = a.params.virtual;
      if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
      var s = i.renderSlide ? m(i.renderSlide.call(a, e, t)) : m('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
      return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s;
    },
    appendSlide: function appendSlide(e) {
      var t = this;
      if ("object" == _typeof(e) && "length" in e) for (var a = 0; a < e.length; a += 1) {
        e[a] && t.virtual.slides.push(e[a]);
      } else t.virtual.slides.push(e);
      t.virtual.update(!0);
    },
    prependSlide: function prependSlide(e) {
      var t = this,
          a = t.activeIndex,
          i = a + 1,
          s = 1;

      if (Array.isArray(e)) {
        for (var r = 0; r < e.length; r += 1) {
          e[r] && t.virtual.slides.unshift(e[r]);
        }

        i = a + e.length, s = e.length;
      } else t.virtual.slides.unshift(e);

      if (t.params.virtual.cache) {
        var n = t.virtual.cache,
            l = {};
        Object.keys(n).forEach(function (e) {
          var t = n[e],
              a = t.attr("data-swiper-slide-index");
          a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1), l[parseInt(e, 10) + s] = t;
        }), t.virtual.cache = l;
      }

      t.virtual.update(!0), t.slideTo(i, 0);
    },
    removeSlide: function removeSlide(e) {
      var t = this;

      if (null != e) {
        var a = t.activeIndex;
        if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) {
          t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0);
        } else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
        t.virtual.update(!0), t.slideTo(a, 0);
      }
    },
    removeAllSlides: function removeAllSlides() {
      var e = this;
      e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
    }
  },
      U = {
    name: "virtual",
    params: {
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    },
    create: function create() {
      z(this, {
        virtual: t({}, j, {
          slides: this.params.virtual.slides,
          cache: {}
        })
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if (e.params.virtual.enabled) {
          e.classNames.push(e.params.containerModifierClass + "virtual");
          var t = {
            watchSlidesProgress: !0
          };
          M(e.params, t), M(e.originalParams, t), e.params.initialSlide || e.virtual.update();
        }
      },
      setTranslate: function setTranslate(e) {
        e.params.virtual.enabled && e.virtual.update();
      }
    }
  },
      K = {
    handle: function handle(e) {
      var t = this;

      if (t.enabled) {
        var a = l(),
            i = r(),
            s = t.rtlTranslate,
            n = e;
        n.originalEvent && (n = n.originalEvent);
        var o = n.keyCode || n.charCode,
            d = t.params.keyboard.pageUpDown,
            p = d && 33 === o,
            u = d && 34 === o,
            c = 37 === o,
            h = 39 === o,
            v = 38 === o,
            f = 40 === o;
        if (!t.allowSlideNext && (t.isHorizontal() && h || t.isVertical() && f || u)) return !1;
        if (!t.allowSlidePrev && (t.isHorizontal() && c || t.isVertical() && v || p)) return !1;

        if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
          if (t.params.keyboard.onlyInViewport && (p || u || c || h || v || f)) {
            var m = !1;
            if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
            var g = t.$el,
                b = g[0].clientWidth,
                w = g[0].clientHeight,
                y = a.innerWidth,
                E = a.innerHeight,
                x = t.$el.offset();
            s && (x.left -= t.$el[0].scrollLeft);

            for (var T = [[x.left, x.top], [x.left + b, x.top], [x.left, x.top + w], [x.left + b, x.top + w]], C = 0; C < T.length; C += 1) {
              var S = T[C];

              if (S[0] >= 0 && S[0] <= y && S[1] >= 0 && S[1] <= E) {
                if (0 === S[0] && 0 === S[1]) continue;
                m = !0;
              }
            }

            if (!m) return;
          }

          t.isHorizontal() ? ((p || u || c || h) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), ((u || h) && !s || (p || c) && s) && t.slideNext(), ((p || c) && !s || (u || h) && s) && t.slidePrev()) : ((p || u || v || f) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (u || f) && t.slideNext(), (p || v) && t.slidePrev()), t.emit("keyPress", o);
        }
      }
    },
    enable: function enable() {
      var e = this,
          t = r();
      e.keyboard.enabled || (m(t).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0);
    },
    disable: function disable() {
      var e = this,
          t = r();
      e.keyboard.enabled && (m(t).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1);
    }
  },
      Z = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    },
    create: function create() {
      z(this, {
        keyboard: t({
          enabled: !1
        }, K)
      });
    },
    on: {
      init: function init(e) {
        e.params.keyboard.enabled && e.keyboard.enable();
      },
      destroy: function destroy(e) {
        e.keyboard.enabled && e.keyboard.disable();
      }
    }
  };
  var J = {
    lastScrollTime: x(),
    lastEventBeforeSnap: void 0,
    recentWheelEvents: [],
    event: function event() {
      return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
        var e = r(),
            t = "onwheel",
            a = (t in e);

        if (!a) {
          var i = e.createElement("div");
          i.setAttribute(t, "return;"), a = "function" == typeof i.onwheel;
        }

        return !a && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (a = e.implementation.hasFeature("Events.wheel", "3.0")), a;
      }() ? "wheel" : "mousewheel";
    },
    normalize: function normalize(e) {
      var t = 0,
          a = 0,
          i = 0,
          s = 0;
      return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = s, s = 0), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
        spinX: t,
        spinY: a,
        pixelX: i,
        pixelY: s
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      this.enabled && (this.mouseEntered = !0);
    },
    handleMouseLeave: function handleMouseLeave() {
      this.enabled && (this.mouseEntered = !1);
    },
    handle: function handle(e) {
      var t = e,
          a = this;

      if (a.enabled) {
        var i = a.params.mousewheel;
        a.params.cssMode && t.preventDefault();
        var s = a.$el;
        if ("container" !== a.params.mousewheel.eventsTarget && (s = m(a.params.mousewheel.eventsTarget)), !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        var r = 0,
            n = a.rtlTranslate ? -1 : 1,
            l = J.normalize(t);
        if (i.forceToAxis) {
          if (a.isHorizontal()) {
            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
            r = -l.pixelX * n;
          } else {
            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
            r = -l.pixelY;
          }
        } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
        if (0 === r) return !0;
        i.invert && (r = -r);
        var o = a.getTranslate() + r * i.sensitivity;

        if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), (!!a.params.loop || !(o === a.minTranslate() || o === a.maxTranslate())) && a.params.nested && t.stopPropagation(), a.params.freeMode) {
          var d = {
            time: x(),
            delta: Math.abs(r),
            direction: Math.sign(r)
          },
              p = a.mousewheel.lastEventBeforeSnap,
              u = p && d.time < p.time + 500 && d.delta <= p.delta && d.direction === p.direction;

          if (!u) {
            a.mousewheel.lastEventBeforeSnap = void 0, a.params.loop && a.loopFix();
            var c = a.getTranslate() + r * i.sensitivity,
                h = a.isBeginning,
                v = a.isEnd;

            if (c >= a.minTranslate() && (c = a.minTranslate()), c <= a.maxTranslate() && (c = a.maxTranslate()), a.setTransition(0), a.setTranslate(c), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!h && a.isBeginning || !v && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky) {
              clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = void 0;
              var f = a.mousewheel.recentWheelEvents;
              f.length >= 15 && f.shift();
              var g = f.length ? f[f.length - 1] : void 0,
                  b = f[0];
              if (f.push(d), g && (d.delta > g.delta || d.direction !== g.direction)) f.splice(0);else if (f.length >= 15 && d.time - b.time < 500 && b.delta - d.delta >= 1 && d.delta <= 6) {
                var w = r > 0 ? .8 : .2;
                a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.mousewheel.timeout = E(function () {
                  a.slideToClosest(a.params.speed, !0, void 0, w);
                }, 0);
              }
              a.mousewheel.timeout || (a.mousewheel.timeout = E(function () {
                a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.slideToClosest(a.params.speed, !0, void 0, .5);
              }, 500));
            }

            if (u || a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), c === a.minTranslate() || c === a.maxTranslate()) return !0;
          }
        } else {
          var y = {
            time: x(),
            delta: Math.abs(r),
            direction: Math.sign(r),
            raw: e
          },
              T = a.mousewheel.recentWheelEvents;
          T.length >= 2 && T.shift();
          var C = T.length ? T[T.length - 1] : void 0;
          if (T.push(y), C ? (y.direction !== C.direction || y.delta > C.delta || y.time > C.time + 150) && a.mousewheel.animateSlider(y) : a.mousewheel.animateSlider(y), a.mousewheel.releaseScroll(y)) return !0;
        }

        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
      }
    },
    animateSlider: function animateSlider(e) {
      var t = this,
          a = l();
      return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && x() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = new a.Date().getTime(), !1));
    },
    releaseScroll: function releaseScroll(e) {
      var t = this,
          a = t.params.mousewheel;

      if (e.direction < 0) {
        if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
      } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges) return !0;

      return !1;
    },
    enable: function enable() {
      var e = this,
          t = J.event();
      if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
      if (!t) return !1;
      if (e.mousewheel.enabled) return !1;
      var a = e.$el;
      return "container" !== e.params.mousewheel.eventsTarget && (a = m(e.params.mousewheel.eventsTarget)), a.on("mouseenter", e.mousewheel.handleMouseEnter), a.on("mouseleave", e.mousewheel.handleMouseLeave), a.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0;
    },
    disable: function disable() {
      var e = this,
          t = J.event();
      if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
      if (!t) return !1;
      if (!e.mousewheel.enabled) return !1;
      var a = e.$el;
      return "container" !== e.params.mousewheel.eventsTarget && (a = m(e.params.mousewheel.eventsTarget)), a.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0;
    }
  },
      Q = {
    toggleEl: function toggleEl(e, t) {
      e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
    },
    update: function update() {
      var e = this,
          t = e.params.navigation,
          a = e.navigation.toggleEl;

      if (!e.params.loop) {
        var i = e.navigation,
            s = i.$nextEl,
            r = i.$prevEl;
        r && r.length > 0 && (e.isBeginning ? a(r, !0) : a(r, !1), e.params.watchOverflow && e.enabled && r[e.isLocked ? "addClass" : "removeClass"](t.lockClass)), s && s.length > 0 && (e.isEnd ? a(s, !0) : a(s, !1), e.params.watchOverflow && e.enabled && s[e.isLocked ? "addClass" : "removeClass"](t.lockClass));
      }
    },
    onPrevClick: function onPrevClick(e) {
      var t = this;
      e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var t = this;
      e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext();
    },
    init: function init() {
      var e,
          t,
          a = this,
          i = a.params.navigation;
      (a.params.navigation = k(a.$el, a.params.navigation, a.params.createElements, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = m(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", a.navigation.onNextClick), t && t.length > 0 && t.on("click", a.navigation.onPrevClick), M(a.navigation, {
        $nextEl: e,
        nextEl: e && e[0],
        $prevEl: t,
        prevEl: t && t[0]
      }), a.enabled || (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)));
    },
    destroy: function destroy() {
      var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
      a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
    }
  },
      ee = {
    update: function update() {
      var e = this,
          t = e.rtl,
          a = e.params.pagination;

      if (a.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var i,
            s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            r = e.pagination.$el,
            n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

        if (e.params.loop ? ((i = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > s - 1 - 2 * e.loopedSlides && (i -= s - 2 * e.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== e.params.paginationType && (i = n + i)) : i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === a.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
          var l,
              o,
              d,
              p = e.pagination.bullets;
          if (a.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"), a.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += i - e.previousIndex, e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = a.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = i - e.pagination.dynamicBulletIndex, d = ((o = l + (Math.min(p.length, a.dynamicMainBullets) - 1)) + l) / 2), p.removeClass(a.bulletActiveClass + " " + a.bulletActiveClass + "-next " + a.bulletActiveClass + "-next-next " + a.bulletActiveClass + "-prev " + a.bulletActiveClass + "-prev-prev " + a.bulletActiveClass + "-main"), r.length > 1) p.each(function (e) {
            var t = m(e),
                s = t.index();
            s === i && t.addClass(a.bulletActiveClass), a.dynamicBullets && (s >= l && s <= o && t.addClass(a.bulletActiveClass + "-main"), s === l && t.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), s === o && t.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"));
          });else {
            var u = p.eq(i),
                c = u.index();

            if (u.addClass(a.bulletActiveClass), a.dynamicBullets) {
              for (var h = p.eq(l), v = p.eq(o), f = l; f <= o; f += 1) {
                p.eq(f).addClass(a.bulletActiveClass + "-main");
              }

              if (e.params.loop) {
                if (c >= p.length - a.dynamicMainBullets) {
                  for (var g = a.dynamicMainBullets; g >= 0; g -= 1) {
                    p.eq(p.length - g).addClass(a.bulletActiveClass + "-main");
                  }

                  p.eq(p.length - a.dynamicMainBullets - 1).addClass(a.bulletActiveClass + "-prev");
                } else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
              } else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
            }
          }

          if (a.dynamicBullets) {
            var b = Math.min(p.length, a.dynamicMainBullets + 4),
                w = (e.pagination.bulletSize * b - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                y = t ? "right" : "left";
            p.css(e.isHorizontal() ? y : "top", w + "px");
          }
        }

        if ("fraction" === a.type && (r.find(P(a.currentClass)).text(a.formatFractionCurrent(i + 1)), r.find(P(a.totalClass)).text(a.formatFractionTotal(n))), "progressbar" === a.type) {
          var E;
          E = a.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
          var x = (i + 1) / n,
              T = 1,
              C = 1;
          "horizontal" === E ? T = x : C = x, r.find(P(a.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + C + ")").transition(e.params.speed);
        }

        "custom" === a.type && a.renderCustom ? (r.html(a.renderCustom(e, i + 1, n)), e.emit("paginationRender", r[0])) : e.emit("paginationUpdate", r[0]), e.params.watchOverflow && e.enabled && r[e.isLocked ? "addClass" : "removeClass"](a.lockClass);
      }
    },
    render: function render() {
      var e = this,
          t = e.params.pagination;

      if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            i = e.pagination.$el,
            s = "";

        if ("bullets" === t.type) {
          var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
          e.params.freeMode && !e.params.loop && r > a && (r = a);

          for (var n = 0; n < r; n += 1) {
            t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
          }

          i.html(s), e.pagination.bullets = i.find(P(t.bulletClass));
        }

        "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
      }
    },
    init: function init() {
      var e = this;
      e.params.pagination = k(e.$el, e.params.pagination, e.params.createElements, {
        el: "swiper-pagination"
      });
      var t = e.params.pagination;

      if (t.el) {
        var a = m(t.el);
        0 !== a.length && (e.params.uniqueNavElements && "string" == typeof t.el && a.length > 1 && (a = e.$el.find(t.el)), "bullets" === t.type && t.clickable && a.addClass(t.clickableClass), a.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (a.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && a.addClass(t.progressbarOppositeClass), t.clickable && a.on("click", P(t.bulletClass), function (t) {
          t.preventDefault();
          var a = m(this).index() * e.params.slidesPerGroup;
          e.params.loop && (a += e.loopedSlides), e.slideTo(a);
        }), M(e.pagination, {
          $el: a,
          el: a[0]
        }), e.enabled || a.addClass(t.lockClass));
      }
    },
    destroy: function destroy() {
      var e = this,
          t = e.params.pagination;

      if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var a = e.pagination.$el;
        a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", P(t.bulletClass));
      }
    }
  },
      te = {
    setTranslate: function setTranslate() {
      var e = this;

      if (e.params.scrollbar.el && e.scrollbar.el) {
        var t = e.scrollbar,
            a = e.rtlTranslate,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            l = t.$el,
            o = e.params.scrollbar,
            d = s,
            p = (r - s) * i;
        a ? (p = -p) > 0 ? (d = s - p, p = 0) : -p + s > r && (d = r + p) : p < 0 ? (d = s + p, p = 0) : p + s > r && (d = r - p), e.isHorizontal() ? (n.transform("translate3d(" + p + "px, 0, 0)"), n[0].style.width = d + "px") : (n.transform("translate3d(0px, " + p + "px, 0)"), n[0].style.height = d + "px"), o.hide && (clearTimeout(e.scrollbar.timeout), l[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
          l[0].style.opacity = 0, l.transition(400);
        }, 1e3));
      }
    },
    setTransition: function setTransition(e) {
      var t = this;
      t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
    },
    updateSize: function updateSize() {
      var e = this;

      if (e.params.scrollbar.el && e.scrollbar.el) {
        var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
        a[0].style.width = "", a[0].style.height = "";
        var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            l = n * (r / e.size);
        s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = n >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), M(t, {
          trackSize: r,
          divider: n,
          moveDivider: l,
          dragSize: s
        }), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
      }
    },
    getPointerPosition: function getPointerPosition(e) {
      return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
    },
    setDragPosition: function setDragPosition(e) {
      var t,
          a = this,
          i = a.scrollbar,
          s = a.rtlTranslate,
          r = i.$el,
          n = i.dragSize,
          l = i.trackSize,
          o = i.dragStartPos;
      t = (i.getPointerPosition(e) - r.offset()[a.isHorizontal() ? "left" : "top"] - (null !== o ? o : n / 2)) / (l - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
      var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
      a.updateProgress(d), a.setTranslate(d), a.updateActiveIndex(), a.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
      t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === n[0] || e.target === n ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e);
    },
    onDragMove: function onDragMove(e) {
      var t = this,
          a = t.scrollbar,
          i = t.$wrapperEl,
          s = a.$el,
          r = a.$dragEl;
      t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), i.transition(0), s.transition(0), r.transition(0), t.emit("scrollbarDragMove", e));
    },
    onDragEnd: function onDragEnd(e) {
      var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el;
      t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = E(function () {
        r.css("opacity", 0), r.transition(400);
      }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest());
    },
    enableDraggable: function enableDraggable() {
      var e = this;

      if (e.params.scrollbar.el) {
        var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            p = !(!l.passiveListener || !n.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        o && (l.touch ? (o.addEventListener(i.start, e.scrollbar.onDragStart, d), o.addEventListener(i.move, e.scrollbar.onDragMove, d), o.addEventListener(i.end, e.scrollbar.onDragEnd, p)) : (o.addEventListener(s.start, e.scrollbar.onDragStart, d), t.addEventListener(s.move, e.scrollbar.onDragMove, d), t.addEventListener(s.end, e.scrollbar.onDragEnd, p)));
      }
    },
    disableDraggable: function disableDraggable() {
      var e = this;

      if (e.params.scrollbar.el) {
        var t = r(),
            a = e.scrollbar,
            i = e.touchEventsTouch,
            s = e.touchEventsDesktop,
            n = e.params,
            l = e.support,
            o = a.$el[0],
            d = !(!l.passiveListener || !n.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            p = !(!l.passiveListener || !n.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        o && (l.touch ? (o.removeEventListener(i.start, e.scrollbar.onDragStart, d), o.removeEventListener(i.move, e.scrollbar.onDragMove, d), o.removeEventListener(i.end, e.scrollbar.onDragEnd, p)) : (o.removeEventListener(s.start, e.scrollbar.onDragStart, d), t.removeEventListener(s.move, e.scrollbar.onDragMove, d), t.removeEventListener(s.end, e.scrollbar.onDragEnd, p)));
      }
    },
    init: function init() {
      var e = this,
          t = e.scrollbar,
          a = e.$el;
      e.params.scrollbar = k(a, e.params.scrollbar, e.params.createElements, {
        el: "swiper-scrollbar"
      });
      var i = e.params.scrollbar;

      if (i.el) {
        var s = m(i.el);
        e.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === a.find(i.el).length && (s = a.find(i.el));
        var r = s.find("." + e.params.scrollbar.dragClass);
        0 === r.length && (r = m('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), M(t, {
          $el: s,
          el: s[0],
          $dragEl: r,
          dragEl: r[0]
        }), i.draggable && t.enableDraggable(), s && s[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
      }
    },
    destroy: function destroy() {
      this.scrollbar.disableDraggable();
    }
  },
      ae = {
    setTransform: function setTransform(e, t) {
      var a = this.rtl,
          i = m(e),
          s = a ? -1 : 1,
          r = i.attr("data-swiper-parallax") || "0",
          n = i.attr("data-swiper-parallax-x"),
          l = i.attr("data-swiper-parallax-y"),
          o = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");

      if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
        var p = d - (d - 1) * (1 - Math.abs(t));
        i[0].style.opacity = p;
      }

      if (null == o) i.transform("translate3d(" + n + ", " + l + ", 0px)");else {
        var u = o - (o - 1) * (1 - Math.abs(t));
        i.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + u + ")");
      }
    },
    setTranslate: function setTranslate() {
      var e = this,
          t = e.$el,
          a = e.slides,
          i = e.progress,
          s = e.snapGrid;
      t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        e.parallax.setTransform(t, i);
      }), a.each(function (t, a) {
        var r = t.progress;
        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(a / 2) - i * (s.length - 1)), r = Math.min(Math.max(r, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          e.parallax.setTransform(t, r);
        });
      });
    },
    setTransition: function setTransition(e) {
      void 0 === e && (e = this.params.speed);
      this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
        var a = m(t),
            i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
        0 === e && (i = 0), a.transition(i);
      });
    }
  },
      ie = {
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
    },
    onGestureStart: function onGestureStart(e) {
      var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;

      if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !a.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        s.fakeGestureTouched = !0, r.scaleStart = ie.getDistanceBetweenTouches(e);
      }

      r.$slideEl && r.$slideEl.length || (r.$slideEl = m(e.target).closest("." + t.params.slideClass), 0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl && r.$imageEl.transition(0), t.zoom.isScaling = !0) : r.$imageEl = void 0;
    },
    onGestureChange: function onGestureChange(e) {
      var t = this,
          a = t.support,
          i = t.params.zoom,
          s = t.zoom,
          r = s.gesture;

      if (!a.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        s.fakeGestureMoved = !0, r.scaleMove = ie.getDistanceBetweenTouches(e);
      }

      r.$imageEl && 0 !== r.$imageEl.length ? (a.gestures ? s.scale = e.scale * s.currentScale : s.scale = r.scaleMove / r.scaleStart * s.currentScale, s.scale > r.maxRatio && (s.scale = r.maxRatio - 1 + Math.pow(s.scale - r.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e);
    },
    onGestureEnd: function onGestureEnd(e) {
      var t = this,
          a = t.device,
          i = t.support,
          s = t.params.zoom,
          r = t.zoom,
          n = r.gesture;

      if (!i.gestures) {
        if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !a.android) return;
        r.fakeGestureTouched = !1, r.fakeGestureMoved = !1;
      }

      n.$imageEl && 0 !== n.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio), n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (n.$slideEl = void 0));
    },
    onTouchStart: function onTouchStart(e) {
      var t = this.device,
          a = this.zoom,
          i = a.gesture,
          s = a.image;
      i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (t.android && e.cancelable && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    },
    onTouchMove: function onTouchMove(e) {
      var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;

      if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = T(i.$imageWrapEl[0], "x") || 0, s.startY = T(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0));
        var n = s.width * a.scale,
            l = s.height * a.scale;

        if (!(n < i.slideWidth && l < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - l / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
            if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
          }

          e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;

      if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);
        a.isTouched = !1, a.isMoved = !1;
        var s = 300,
            r = 300,
            n = i.x * s,
            l = a.currentX + n,
            o = i.y * r,
            d = a.currentY + o;
        0 !== i.x && (s = Math.abs((l - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
        var p = Math.max(s, r);
        a.currentX = l, a.currentY = d;
        var u = a.width * e.scale,
            c = a.height * e.scale;
        a.minX = Math.min(t.slideWidth / 2 - u / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - c / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      var e = this,
          t = e.zoom,
          a = t.gesture;
      a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl && a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, a.$slideEl = void 0, a.$imageEl = void 0, a.$imageWrapEl = void 0);
    },
    toggle: function toggle(e) {
      var t = this.zoom;
      t.scale && 1 !== t.scale ? t.out() : t["in"](e);
    },
    "in": function _in(e) {
      var t,
          a,
          i,
          s,
          r,
          n,
          o,
          d,
          p,
          u,
          c,
          h,
          v,
          f,
          g,
          b,
          w = this,
          y = l(),
          E = w.zoom,
          x = w.params.zoom,
          T = E.gesture,
          C = E.image;
      (T.$slideEl || (e && e.target && (T.$slideEl = m(e.target).closest("." + w.params.slideClass)), T.$slideEl || (w.params.virtual && w.params.virtual.enabled && w.virtual ? T.$slideEl = w.$wrapperEl.children("." + w.params.slideActiveClass) : T.$slideEl = w.slides.eq(w.activeIndex)), T.$imageEl = T.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), T.$imageWrapEl = T.$imageEl.parent("." + x.containerClass)), T.$imageEl && 0 !== T.$imageEl.length && T.$imageWrapEl && 0 !== T.$imageWrapEl.length) && (T.$slideEl.addClass("" + x.zoomedSlideClass), void 0 === C.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = C.touchesStart.x, a = C.touchesStart.y), E.scale = T.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, E.currentScale = T.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, e ? (g = T.$slideEl[0].offsetWidth, b = T.$slideEl[0].offsetHeight, i = T.$slideEl.offset().left + y.scrollX + g / 2 - t, s = T.$slideEl.offset().top + y.scrollY + b / 2 - a, o = T.$imageEl[0].offsetWidth, d = T.$imageEl[0].offsetHeight, p = o * E.scale, u = d * E.scale, v = -(c = Math.min(g / 2 - p / 2, 0)), f = -(h = Math.min(b / 2 - u / 2, 0)), (r = i * E.scale) < c && (r = c), r > v && (r = v), (n = s * E.scale) < h && (n = h), n > f && (n = f)) : (r = 0, n = 0), T.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), T.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + E.scale + ")"));
    },
    out: function out() {
      var e = this,
          t = e.zoom,
          a = e.params.zoom,
          i = t.gesture;
      i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : i.$slideEl = e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && i.$imageWrapEl && 0 !== i.$imageWrapEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0);
    },
    toggleGestures: function toggleGestures(e) {
      var t = this,
          a = t.zoom,
          i = a.slideSelector,
          s = a.passiveListener;
      t.$wrapperEl[e]("gesturestart", i, a.onGestureStart, s), t.$wrapperEl[e]("gesturechange", i, a.onGestureChange, s), t.$wrapperEl[e]("gestureend", i, a.onGestureEnd, s);
    },
    enableGestures: function enableGestures() {
      this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
    },
    disableGestures: function disableGestures() {
      this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
    },
    enable: function enable() {
      var e = this,
          t = e.support,
          a = e.zoom;

      if (!a.enabled) {
        a.enabled = !0;
        var i = !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            s = !t.passiveListener || {
          passive: !1,
          capture: !0
        },
            r = "." + e.params.slideClass;
        e.zoom.passiveListener = i, e.zoom.slideSelector = r, t.gestures ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s), e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, a.onTouchMove, s);
      }
    },
    disable: function disable() {
      var e = this,
          t = e.zoom;

      if (t.enabled) {
        var a = e.support;
        e.zoom.enabled = !1;
        var i = !("touchstart" !== e.touchEvents.start || !a.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            s = !a.passiveListener || {
          passive: !1,
          capture: !0
        },
            r = "." + e.params.slideClass;
        a.gestures ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s), e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, s);
      }
    }
  },
      se = {
    loadInSlide: function loadInSlide(e, t) {
      void 0 === t && (t = !0);
      var a = this,
          i = a.params.lazy;

      if (void 0 !== e && 0 !== a.slides.length) {
        var s = a.virtual && a.params.virtual.enabled ? a.$wrapperEl.children("." + a.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : a.slides.eq(e),
            r = s.find("." + i.elementClass + ":not(." + i.loadedClass + "):not(." + i.loadingClass + ")");
        !s.hasClass(i.elementClass) || s.hasClass(i.loadedClass) || s.hasClass(i.loadingClass) || r.push(s[0]), 0 !== r.length && r.each(function (e) {
          var r = m(e);
          r.addClass(i.loadingClass);
          var n = r.attr("data-background"),
              l = r.attr("data-src"),
              o = r.attr("data-srcset"),
              d = r.attr("data-sizes"),
              p = r.parent("picture");
          a.loadImage(r[0], l || n, o, d, !1, function () {
            if (null != a && a && (!a || a.params) && !a.destroyed) {
              if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), p.length && p.children("source").each(function (e) {
                var t = m(e);
                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
              }), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(i.loadedClass).removeClass(i.loadingClass), s.find("." + i.preloaderClass).remove(), a.params.loop && t) {
                var e = s.attr("data-swiper-slide-index");

                if (s.hasClass(a.params.slideDuplicateClass)) {
                  var u = a.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + a.params.slideDuplicateClass + ")");
                  a.lazy.loadInSlide(u.index(), !1);
                } else {
                  var c = a.$wrapperEl.children("." + a.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                  a.lazy.loadInSlide(c.index(), !1);
                }
              }

              a.emit("lazyImageReady", s[0], r[0]), a.params.autoHeight && a.updateAutoHeight();
            }
          }), a.emit("lazyImageLoad", s[0], r[0]);
        });
      }
    },
    load: function load() {
      var e = this,
          t = e.$wrapperEl,
          a = e.params,
          i = e.slides,
          s = e.activeIndex,
          r = e.virtual && a.virtual.enabled,
          n = a.lazy,
          l = a.slidesPerView;

      function o(e) {
        if (r) {
          if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
        } else if (i[e]) return !0;

        return !1;
      }

      function d(e) {
        return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
      }

      if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (t) {
        var a = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
        e.lazy.loadInSlide(a);
      });else if (l > 1) for (var p = s; p < s + l; p += 1) {
        o(p) && e.lazy.loadInSlide(p);
      } else e.lazy.loadInSlide(s);
      if (n.loadPrevNext) if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
        for (var u = n.loadPrevNextAmount, c = l, h = Math.min(s + c + Math.max(u, c), i.length), v = Math.max(s - Math.max(c, u), 0), f = s + l; f < h; f += 1) {
          o(f) && e.lazy.loadInSlide(f);
        }

        for (var g = v; g < s; g += 1) {
          o(g) && e.lazy.loadInSlide(g);
        }
      } else {
        var b = t.children("." + a.slideNextClass);
        b.length > 0 && e.lazy.loadInSlide(d(b));
        var w = t.children("." + a.slidePrevClass);
        w.length > 0 && e.lazy.loadInSlide(d(w));
      }
    },
    checkInViewOnLoad: function checkInViewOnLoad() {
      var e = l(),
          t = this;

      if (t && !t.destroyed) {
        var a = t.params.lazy.scrollingElement ? m(t.params.lazy.scrollingElement) : m(e),
            i = a[0] === e,
            s = i ? e.innerWidth : a[0].offsetWidth,
            r = i ? e.innerHeight : a[0].offsetHeight,
            n = t.$el.offset(),
            o = !1;
        t.rtlTranslate && (n.left -= t.$el[0].scrollLeft);

        for (var d = [[n.left, n.top], [n.left + t.width, n.top], [n.left, n.top + t.height], [n.left + t.width, n.top + t.height]], p = 0; p < d.length; p += 1) {
          var u = d[p];

          if (u[0] >= 0 && u[0] <= s && u[1] >= 0 && u[1] <= r) {
            if (0 === u[0] && 0 === u[1]) continue;
            o = !0;
          }
        }

        var c = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        o ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad, c)) : t.lazy.scrollHandlerAttached || (t.lazy.scrollHandlerAttached = !0, a.on("scroll", t.lazy.checkInViewOnLoad, c));
      }
    }
  },
      re = {
    LinearSpline: function LinearSpline(e, t) {
      var a,
          i,
          s,
          r,
          n,
          l = function l(e, t) {
        for (i = -1, a = e.length; a - i > 1;) {
          e[s = a + i >> 1] <= t ? i = s : a = s;
        }

        return a;
      };

      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
      }, this;
    },
    getInterpolateFunction: function getInterpolateFunction(e) {
      var t = this;
      t.controller.spline || (t.controller.spline = t.params.loop ? new re.LinearSpline(t.slidesGrid, e.slidesGrid) : new re.LinearSpline(t.snapGrid, e.snapGrid));
    },
    setTranslate: function setTranslate(e, t) {
      var a,
          i,
          s = this,
          r = s.controller.control,
          n = s.constructor;

      function l(e) {
        var t = s.rtlTranslate ? -s.translate : s.translate;
        "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
        r[o] !== t && r[o] instanceof n && l(r[o]);
      } else r instanceof n && t !== r && l(r);
    },
    setTransition: function setTransition(e, t) {
      var a,
          i = this,
          s = i.constructor,
          r = i.controller.control;

      function n(t) {
        t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && E(function () {
          t.updateAutoHeight();
        }), t.$wrapperEl.transitionEnd(function () {
          r && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd());
        }));
      }

      if (Array.isArray(r)) for (a = 0; a < r.length; a += 1) {
        r[a] !== t && r[a] instanceof s && n(r[a]);
      } else r instanceof s && t !== r && n(r);
    }
  },
      ne = {
    getRandomNumber: function getRandomNumber(e) {
      void 0 === e && (e = 16);
      return "x".repeat(e).replace(/x/g, function () {
        return Math.round(16 * Math.random()).toString(16);
      });
    },
    makeElFocusable: function makeElFocusable(e) {
      return e.attr("tabIndex", "0"), e;
    },
    makeElNotFocusable: function makeElNotFocusable(e) {
      return e.attr("tabIndex", "-1"), e;
    },
    addElRole: function addElRole(e, t) {
      return e.attr("role", t), e;
    },
    addElRoleDescription: function addElRoleDescription(e, t) {
      return e.attr("aria-roledescription", t), e;
    },
    addElControls: function addElControls(e, t) {
      return e.attr("aria-controls", t), e;
    },
    addElLabel: function addElLabel(e, t) {
      return e.attr("aria-label", t), e;
    },
    addElId: function addElId(e, t) {
      return e.attr("id", t), e;
    },
    addElLive: function addElLive(e, t) {
      return e.attr("aria-live", t), e;
    },
    disableEl: function disableEl(e) {
      return e.attr("aria-disabled", !0), e;
    },
    enableEl: function enableEl(e) {
      return e.attr("aria-disabled", !1), e;
    },
    onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
      if (13 === e.keyCode || 32 === e.keyCode) {
        var t = this,
            a = t.params.a11y,
            i = m(e.target);
        t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is(P(t.params.pagination.bulletClass)) && i[0].click();
      }
    },
    notify: function notify(e) {
      var t = this.a11y.liveRegion;
      0 !== t.length && (t.html(""), t.html(e));
    },
    updateNavigation: function updateNavigation() {
      var e = this;

      if (!e.params.loop && e.navigation) {
        var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
        i && i.length > 0 && (e.isBeginning ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i)) : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))), a && a.length > 0 && (e.isEnd ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a)) : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)));
      }
    },
    updatePagination: function updatePagination() {
      var e = this,
          t = e.params.a11y;
      e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (a) {
        var i = m(a);
        e.a11y.makeElFocusable(i), e.params.pagination.renderBullet || (e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)));
      });
    },
    init: function init() {
      var e = this,
          t = e.params.a11y;
      e.$el.append(e.a11y.liveRegion);
      var a = e.$el;
      t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(a, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(a, t.containerMessage);
      var i = e.$wrapperEl,
          s = i.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16),
          r = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
      e.a11y.addElId(i, s), e.a11y.addElLive(i, r), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(m(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(m(e.slides), t.slideRole);
      var n,
          l,
          o = e.params.loop ? e.slides.filter(function (t) {
        return !t.classList.contains(e.params.slideDuplicateClass);
      }).length : e.slides.length;
      e.slides.each(function (a, i) {
        var s = m(a),
            r = e.params.loop ? parseInt(s.attr("data-swiper-slide-index"), 10) : i,
            n = t.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, o);
        e.a11y.addElLabel(s, n);
      }), e.navigation && e.navigation.$nextEl && (n = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (l = e.navigation.$prevEl), n && n.length && (e.a11y.makeElFocusable(n), "BUTTON" !== n[0].tagName && (e.a11y.addElRole(n, "button"), n.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(n, t.nextSlideMessage), e.a11y.addElControls(n, s)), l && l.length && (e.a11y.makeElFocusable(l), "BUTTON" !== l[0].tagName && (e.a11y.addElRole(l, "button"), l.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(l, t.prevSlideMessage), e.a11y.addElControls(l, s)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", P(e.params.pagination.bulletClass), e.a11y.onEnterOrSpaceKey);
    },
    destroy: function destroy() {
      var e,
          t,
          a = this;
      a.a11y.liveRegion && a.a11y.liveRegion.length > 0 && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterOrSpaceKey), t && t.off("keydown", a.a11y.onEnterOrSpaceKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", P(a.params.pagination.bulletClass), a.a11y.onEnterOrSpaceKey);
    }
  },
      le = {
    init: function init() {
      var e = this,
          t = l();

      if (e.params.history) {
        if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
        var a = e.history;
        a.initialized = !0, a.paths = le.getPathValues(e.params.url), (a.paths.key || a.paths.value) && (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState));
      }
    },
    destroy: function destroy() {
      var e = l();
      this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
    },
    setHistoryPopState: function setHistoryPopState() {
      var e = this;
      e.history.paths = le.getPathValues(e.params.url), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
    },
    getPathValues: function getPathValues(e) {
      var t = l(),
          a = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          i = a.length;
      return {
        key: a[i - 2],
        value: a[i - 1]
      };
    },
    setHistory: function setHistory(e, t) {
      var a = this,
          i = l();

      if (a.history.initialized && a.params.history.enabled) {
        var s;
        s = a.params.url ? new URL(a.params.url) : i.location;
        var r = a.slides.eq(t),
            n = le.slugify(r.attr("data-history"));

        if (a.params.history.root.length > 0) {
          var o = a.params.history.root;
          "/" === o[o.length - 1] && (o = o.slice(0, o.length - 1)), n = o + "/" + e + "/" + n;
        } else s.pathname.includes(e) || (n = e + "/" + n);

        var d = i.history.state;
        d && d.value === n || (a.params.history.replaceState ? i.history.replaceState({
          value: n
        }, null, n) : i.history.pushState({
          value: n
        }, null, n));
      }
    },
    slugify: function slugify(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
    scrollToSlide: function scrollToSlide(e, t, a) {
      var i = this;
      if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
        var n = i.slides.eq(s);

        if (le.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
          var l = n.index();
          i.slideTo(l, e, a);
        }
      } else i.slideTo(0, e, a);
    }
  },
      oe = {
    onHashChange: function onHashChange() {
      var e = this,
          t = r();
      e.emit("hashChange");
      var a = t.location.hash.replace("#", "");

      if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
        var i = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + a + '"]').index();
        if (void 0 === i) return;
        e.slideTo(i);
      }
    },
    setHash: function setHash() {
      var e = this,
          t = l(),
          a = r();
      if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""), e.emit("hashSet");else {
        var i = e.slides.eq(e.activeIndex),
            s = i.attr("data-hash") || i.attr("data-history");
        a.location.hash = s || "", e.emit("hashSet");
      }
    },
    init: function init() {
      var e = this,
          t = r(),
          a = l();

      if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
        e.hashNavigation.initialized = !0;
        var i = t.location.hash.replace("#", "");
        if (i) for (var s = 0, n = e.slides.length; s < n; s += 1) {
          var o = e.slides.eq(s);

          if ((o.attr("data-hash") || o.attr("data-history")) === i && !o.hasClass(e.params.slideDuplicateClass)) {
            var d = o.index();
            e.slideTo(d, 0, e.params.runCallbacksOnInit, !0);
          }
        }
        e.params.hashNavigation.watchState && m(a).on("hashchange", e.hashNavigation.onHashChange);
      }
    },
    destroy: function destroy() {
      var e = l();
      this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashChange);
    }
  },
      de = {
    run: function run() {
      var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E(function () {
        var t;
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run();
      }, a);
    },
    start: function start() {
      var e = this;
      return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
    },
    stop: function stop() {
      var e = this;
      return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
    },
    pause: function pause(e) {
      var t = this;
      t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        t.$wrapperEl[0].addEventListener(e, t.autoplay.onTransitionEnd);
      }) : (t.autoplay.paused = !1, t.autoplay.run())));
    },
    onVisibilityChange: function onVisibilityChange() {
      var e = this,
          t = r();
      "hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1);
    },
    onTransitionEnd: function onTransitionEnd(e) {
      var t = this;
      t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
        t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd);
      }), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
    },
    onMouseEnter: function onMouseEnter() {
      var e = this;
      e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause(), ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
        e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd);
      });
    },
    onMouseLeave: function onMouseLeave() {
      var e = this;
      e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, e.autoplay.run());
    },
    attachMouseEvents: function attachMouseEvents() {
      var e = this;
      e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", e.autoplay.onMouseEnter), e.$el.on("mouseleave", e.autoplay.onMouseLeave));
    },
    detachMouseEvents: function detachMouseEvents() {
      var e = this;
      e.$el.off("mouseenter", e.autoplay.onMouseEnter), e.$el.off("mouseleave", e.autoplay.onMouseLeave);
    }
  },
      pe = {
    setTranslate: function setTranslate() {
      for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
        var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
        e.params.virtualTranslate || (s -= e.translate);
        var r = 0;
        e.isHorizontal() || (r = s, s = 0);
        var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
        i.css({
          opacity: n
        }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          a = t.slides,
          i = t.$wrapperEl;

      if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
        var s = !1;
        a.transitionEnd(function () {
          if (!s && t && !t.destroyed) {
            s = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) {
              i.trigger(e[a]);
            }
          }
        });
      }
    }
  },
      ue = {
    setTranslate: function setTranslate() {
      var e,
          t = this,
          a = t.$el,
          i = t.$wrapperEl,
          s = t.slides,
          r = t.width,
          n = t.height,
          l = t.rtlTranslate,
          o = t.size,
          d = t.browser,
          p = t.params.cubeEffect,
          u = t.isHorizontal(),
          c = t.virtual && t.params.virtual.enabled,
          h = 0;
      p.shadow && (u ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
        height: r + "px"
      })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), a.append(e)));

      for (var v = 0; v < s.length; v += 1) {
        var f = s.eq(v),
            g = v;
        c && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
        var b = 90 * g,
            w = Math.floor(b / 360);
        l && (b = -b, w = Math.floor(-b / 360));
        var y = Math.max(Math.min(f[0].progress, 1), -1),
            E = 0,
            x = 0,
            T = 0;
        g % 4 == 0 ? (E = 4 * -w * o, T = 0) : (g - 1) % 4 == 0 ? (E = 0, T = 4 * -w * o) : (g - 2) % 4 == 0 ? (E = o + 4 * w * o, T = o) : (g - 3) % 4 == 0 && (E = -o, T = 3 * o + 4 * o * w), l && (E = -E), u || (x = E, E = 0);
        var C = "rotateX(" + (u ? 0 : -b) + "deg) rotateY(" + (u ? b : 0) + "deg) translate3d(" + E + "px, " + x + "px, " + T + "px)";

        if (y <= 1 && y > -1 && (h = 90 * g + 90 * y, l && (h = 90 * -g - 90 * y)), f.transform(C), p.slideShadows) {
          var S = u ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              M = u ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
          0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), f.append(S)), 0 === M.length && (M = m('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), f.append(M)), S.length && (S[0].style.opacity = Math.max(-y, 0)), M.length && (M[0].style.opacity = Math.max(y, 0));
        }
      }

      if (i.css({
        "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
        "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
        "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
        "transform-origin": "50% 50% -" + o / 2 + "px"
      }), p.shadow) if (u) e.transform("translate3d(0px, " + (r / 2 + p.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");else {
        var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
            P = 1.5 - (Math.sin(2 * z * Math.PI / 360) / 2 + Math.cos(2 * z * Math.PI / 360) / 2),
            k = p.shadowScale,
            $ = p.shadowScale / P,
            L = p.shadowOffset;
        e.transform("scale3d(" + k + ", 1, " + $ + ") translate3d(0px, " + (n / 2 + L) + "px, " + -n / 2 / $ + "px) rotateX(-90deg)");
      }
      var I = d.isSafari || d.isWebView ? -o / 2 : 0;
      i.transform("translate3d(0px,0," + I + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)");
    },
    setTransition: function setTransition(e) {
      var t = this,
          a = t.$el;
      t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e);
    }
  },
      ce = {
    setTranslate: function setTranslate() {
      for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
        var s = t.eq(i),
            r = s[0].progress;
        e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
        var n = -180 * r,
            l = 0,
            o = -s[0].swiperSlideOffset,
            d = 0;

        if (e.isHorizontal() ? a && (n = -n) : (d = o, o = 0, l = -n, n = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
          var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
              u = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
          0 === p.length && (p = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === u.length && (u = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(u)), p.length && (p[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0));
        }

        s.transform("translate3d(" + o + "px, " + d + "px, 0px) rotateX(" + l + "deg) rotateY(" + n + "deg)");
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          a = t.slides,
          i = t.activeIndex,
          s = t.$wrapperEl;

      if (a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
        var r = !1;
        a.eq(i).transitionEnd(function () {
          if (!r && t && !t.destroyed) {
            r = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) {
              s.trigger(e[a]);
            }
          }
        });
      }
    }
  },
      he = {
    setTranslate: function setTranslate() {
      for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.slidesSizesGrid, r = e.params.coverflowEffect, n = e.isHorizontal(), l = e.translate, o = n ? t / 2 - l : a / 2 - l, d = n ? r.rotate : -r.rotate, p = r.depth, u = 0, c = i.length; u < c; u += 1) {
        var h = i.eq(u),
            v = s[u],
            f = (o - h[0].swiperSlideOffset - v / 2) / v * r.modifier,
            g = n ? d * f : 0,
            b = n ? 0 : d * f,
            w = -p * Math.abs(f),
            y = r.stretch;
        "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(r.stretch) / 100 * v);
        var E = n ? 0 : y * f,
            x = n ? y * f : 0,
            T = 1 - (1 - r.scale) * Math.abs(f);
        Math.abs(x) < .001 && (x = 0), Math.abs(E) < .001 && (E = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0), Math.abs(T) < .001 && (T = 0);
        var C = "translate3d(" + x + "px," + E + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg) scale(" + T + ")";

        if (h.transform(C), h[0].style.zIndex = 1 - Math.abs(Math.round(f)), r.slideShadows) {
          var S = n ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
              M = n ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
          0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (n ? "left" : "top") + '"></div>'), h.append(S)), 0 === M.length && (M = m('<div class="swiper-slide-shadow-' + (n ? "right" : "bottom") + '"></div>'), h.append(M)), S.length && (S[0].style.opacity = f > 0 ? f : 0), M.length && (M[0].style.opacity = -f > 0 ? -f : 0);
        }
      }
    },
    setTransition: function setTransition(e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    }
  },
      ve = {
    init: function init() {
      var e = this,
          t = e.params.thumbs;
      if (e.thumbs.initialized) return !1;
      e.thumbs.initialized = !0;
      var a = e.constructor;
      return t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, M(e.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), M(e.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })) : C(t.swiper) && (e.thumbs.swiper = new a(M({}, t.swiper, {
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick), !0;
    },
    onThumbClick: function onThumbClick() {
      var e = this,
          t = e.thumbs.swiper;

      if (t) {
        var a = t.clickedIndex,
            i = t.clickedSlide;

        if (!(i && m(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
          var s;

          if (s = t.params.loop ? parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
            var r = e.activeIndex;
            e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
            var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                l = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
            s = void 0 === n ? l : void 0 === l ? n : l - r < r - n ? l : n;
          }

          e.slideTo(s);
        }
      }
    },
    update: function update(e) {
      var t = this,
          a = t.thumbs.swiper;

      if (a) {
        var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView,
            s = t.params.thumbs.autoScrollOffset,
            r = s && !a.params.loop;

        if (t.realIndex !== a.realIndex || r) {
          var n,
              l,
              o = a.activeIndex;

          if (a.params.loop) {
            a.slides.eq(o).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, o = a.activeIndex);
            var d = a.slides.eq(o).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                p = a.slides.eq(o).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
            n = void 0 === d ? p : void 0 === p ? d : p - o == o - d ? a.params.slidesPerGroup > 1 ? p : o : p - o < o - d ? p : d, l = t.activeIndex > t.previousIndex ? "next" : "prev";
          } else l = (n = t.realIndex) > t.previousIndex ? "next" : "prev";

          r && (n += "next" === l ? s : -1 * s), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(n) < 0 && (a.params.centeredSlides ? n = n > o ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : n > o && a.params.slidesPerGroup, a.slideTo(n, e ? 0 : void 0));
        }

        var u = 1,
            c = t.params.thumbs.slideThumbActiveClass;
        if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (u = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (u = 1), u = Math.floor(u), a.slides.removeClass(c), a.params.loop || a.params.virtual && a.params.virtual.enabled) for (var h = 0; h < u; h += 1) {
          a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + h) + '"]').addClass(c);
        } else for (var v = 0; v < u; v += 1) {
          a.slides.eq(t.realIndex + v).addClass(c);
        }
      }
    }
  },
      fe = [U, Z, {
    name: "mousewheel",
    params: {
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null
      }
    },
    create: function create() {
      z(this, {
        mousewheel: {
          enabled: !1,
          lastScrollTime: x(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          enable: J.enable,
          disable: J.disable,
          handle: J.handle,
          handleMouseEnter: J.handleMouseEnter,
          handleMouseLeave: J.handleMouseLeave,
          animateSlider: J.animateSlider,
          releaseScroll: J.releaseScroll
        }
      });
    },
    on: {
      init: function init(e) {
        !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
      },
      destroy: function destroy(e) {
        e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
      }
    }
  }, {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    },
    create: function create() {
      z(this, {
        navigation: t({}, Q)
      });
    },
    on: {
      init: function init(e) {
        e.navigation.init(), e.navigation.update();
      },
      toEdge: function toEdge(e) {
        e.navigation.update();
      },
      fromEdge: function fromEdge(e) {
        e.navigation.update();
      },
      destroy: function destroy(e) {
        e.navigation.destroy();
      },
      "enable disable": function enableDisable(e) {
        var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
        a && a[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
      },
      click: function click(e, t) {
        var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl,
            r = t.target;

        if (e.params.navigation.hideOnClick && !m(r).is(s) && !m(r).is(i)) {
          if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === r || e.pagination.el.contains(r))) return;
          var n;
          i ? n = i.hasClass(e.params.navigation.hiddenClass) : s && (n = s.hasClass(e.params.navigation.hiddenClass)), !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), s && s.toggleClass(e.params.navigation.hiddenClass);
        }
      }
    }
  }, {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock"
      }
    },
    create: function create() {
      z(this, {
        pagination: t({
          dynamicBulletIndex: 0
        }, ee)
      });
    },
    on: {
      init: function init(e) {
        e.pagination.init(), e.pagination.render(), e.pagination.update();
      },
      activeIndexChange: function activeIndexChange(e) {
        (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
      },
      snapIndexChange: function snapIndexChange(e) {
        e.params.loop || e.pagination.update();
      },
      slidesLengthChange: function slidesLengthChange(e) {
        e.params.loop && (e.pagination.render(), e.pagination.update());
      },
      snapGridLengthChange: function snapGridLengthChange(e) {
        e.params.loop || (e.pagination.render(), e.pagination.update());
      },
      destroy: function destroy(e) {
        e.pagination.destroy();
      },
      "enable disable": function enableDisable(e) {
        var t = e.pagination.$el;
        t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass);
      },
      click: function click(e, t) {
        var a = t.target;

        if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(a).hasClass(e.params.pagination.bulletClass)) {
          if (e.navigation && (e.navigation.nextEl && a === e.navigation.nextEl || e.navigation.prevEl && a === e.navigation.prevEl)) return;
          !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
        }
      }
    }
  }, {
    name: "scrollbar",
    params: {
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    },
    create: function create() {
      z(this, {
        scrollbar: t({
          isTouched: !1,
          timeout: null,
          dragTimeout: null
        }, te)
      });
    },
    on: {
      init: function init(e) {
        e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
      },
      update: function update(e) {
        e.scrollbar.updateSize();
      },
      resize: function resize(e) {
        e.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate(e) {
        e.scrollbar.updateSize();
      },
      setTranslate: function setTranslate(e) {
        e.scrollbar.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        e.scrollbar.setTransition(t);
      },
      "enable disable": function enableDisable(e) {
        var t = e.scrollbar.$el;
        t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
      },
      destroy: function destroy(e) {
        e.scrollbar.destroy();
      }
    }
  }, {
    name: "parallax",
    params: {
      parallax: {
        enabled: !1
      }
    },
    create: function create() {
      z(this, {
        parallax: t({}, ae)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      init: function init(e) {
        e.params.parallax.enabled && e.parallax.setTranslate();
      },
      setTranslate: function setTranslate(e) {
        e.params.parallax.enabled && e.parallax.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        e.params.parallax.enabled && e.parallax.setTransition(t);
      }
    }
  }, {
    name: "zoom",
    params: {
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    },
    create: function create() {
      var e = this;
      z(e, {
        zoom: t({
          enabled: !1,
          scale: 1,
          currentScale: 1,
          isScaling: !1,
          gesture: {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
          },
          image: {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
          },
          velocity: {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
          }
        }, ie)
      });
      var a = 1;
      Object.defineProperty(e.zoom, "scale", {
        get: function get() {
          return a;
        },
        set: function set(t) {
          if (a !== t) {
            var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                s = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
            e.emit("zoomChange", t, i, s);
          }

          a = t;
        }
      });
    },
    on: {
      init: function init(e) {
        e.params.zoom.enabled && e.zoom.enable();
      },
      destroy: function destroy(e) {
        e.zoom.disable();
      },
      touchStart: function touchStart(e, t) {
        e.zoom.enabled && e.zoom.onTouchStart(t);
      },
      touchEnd: function touchEnd(e, t) {
        e.zoom.enabled && e.zoom.onTouchEnd(t);
      },
      doubleTap: function doubleTap(e, t) {
        !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
      },
      transitionEnd: function transitionEnd(e) {
        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
      },
      slideChange: function slideChange(e) {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
      }
    }
  }, {
    name: "lazy",
    params: {
      lazy: {
        checkInView: !1,
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    },
    create: function create() {
      z(this, {
        lazy: t({
          initialImageLoaded: !1
        }, se)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
      },
      init: function init(e) {
        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load());
      },
      scroll: function scroll(e) {
        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
      },
      "scrollbarDragMove resize _freeModeNoMomentumRelease": function scrollbarDragMoveResize_freeModeNoMomentumRelease(e) {
        e.params.lazy.enabled && e.lazy.load();
      },
      transitionStart: function transitionStart(e) {
        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
      },
      transitionEnd: function transitionEnd(e) {
        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
      },
      slideChange: function slideChange(e) {
        var t = e.params,
            a = t.lazy,
            i = t.cssMode,
            s = t.watchSlidesVisibility,
            r = t.watchSlidesProgress,
            n = t.touchReleaseOnEdges,
            l = t.resistanceRatio;
        a.enabled && (i || (s || r) && (n || 0 === l)) && e.lazy.load();
      }
    }
  }, {
    name: "controller",
    params: {
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    },
    create: function create() {
      z(this, {
        controller: t({
          control: this.params.controller.control
        }, re)
      });
    },
    on: {
      update: function update(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      resize: function resize(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      observerUpdate: function observerUpdate(e) {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      setTranslate: function setTranslate(e, t, a) {
        e.controller.control && e.controller.setTranslate(t, a);
      },
      setTransition: function setTransition(e, t, a) {
        e.controller.control && e.controller.setTransition(t, a);
      }
    }
  }, {
    name: "a11y",
    params: {
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group"
      }
    },
    create: function create() {
      z(this, {
        a11y: t({}, ne, {
          liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
        })
      });
    },
    on: {
      afterInit: function afterInit(e) {
        e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
      },
      toEdge: function toEdge(e) {
        e.params.a11y.enabled && e.a11y.updateNavigation();
      },
      fromEdge: function fromEdge(e) {
        e.params.a11y.enabled && e.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate(e) {
        e.params.a11y.enabled && e.a11y.updatePagination();
      },
      destroy: function destroy(e) {
        e.params.a11y.enabled && e.a11y.destroy();
      }
    }
  }, {
    name: "history",
    params: {
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides"
      }
    },
    create: function create() {
      z(this, {
        history: t({}, le)
      });
    },
    on: {
      init: function init(e) {
        e.params.history.enabled && e.history.init();
      },
      destroy: function destroy(e) {
        e.params.history.enabled && e.history.destroy();
      },
      "transitionEnd _freeModeNoMomentumRelease": function transitionEnd_freeModeNoMomentumRelease(e) {
        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
      },
      slideChange: function slideChange(e) {
        e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
      }
    }
  }, {
    name: "hash-navigation",
    params: {
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    },
    create: function create() {
      z(this, {
        hashNavigation: t({
          initialized: !1
        }, oe)
      });
    },
    on: {
      init: function init(e) {
        e.params.hashNavigation.enabled && e.hashNavigation.init();
      },
      destroy: function destroy(e) {
        e.params.hashNavigation.enabled && e.hashNavigation.destroy();
      },
      "transitionEnd _freeModeNoMomentumRelease": function transitionEnd_freeModeNoMomentumRelease(e) {
        e.hashNavigation.initialized && e.hashNavigation.setHash();
      },
      slideChange: function slideChange(e) {
        e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
      }
    }
  }, {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    },
    create: function create() {
      z(this, {
        autoplay: t({}, de, {
          running: !1,
          paused: !1
        })
      });
    },
    on: {
      init: function init(e) {
        e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange), e.autoplay.attachMouseEvents());
      },
      beforeTransitionStart: function beforeTransitionStart(e, t, a) {
        e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
      },
      sliderFirstMove: function sliderFirstMove(e) {
        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
      },
      touchEnd: function touchEnd(e) {
        e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
      },
      destroy: function destroy(e) {
        e.autoplay.detachMouseEvents(), e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
      }
    }
  }, {
    name: "effect-fade",
    params: {
      fadeEffect: {
        crossFade: !1
      }
    },
    create: function create() {
      z(this, {
        fadeEffect: t({}, pe)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if ("fade" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "fade");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          M(e.params, t), M(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "fade" === e.params.effect && e.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "fade" === e.params.effect && e.fadeEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-cube",
    params: {
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    },
    create: function create() {
      z(this, {
        cubeEffect: t({}, ue)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if ("cube" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
          };
          M(e.params, t), M(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "cube" === e.params.effect && e.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "cube" === e.params.effect && e.cubeEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-flip",
    params: {
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0
      }
    },
    create: function create() {
      z(this, {
        flipEffect: t({}, ce)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        if ("flip" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          M(e.params, t), M(e.originalParams, t);
        }
      },
      setTranslate: function setTranslate(e) {
        "flip" === e.params.effect && e.flipEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "flip" === e.params.effect && e.flipEffect.setTransition(t);
      }
    }
  }, {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0
      }
    },
    create: function create() {
      z(this, {
        coverflowEffect: t({}, he)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
      },
      setTranslate: function setTranslate(e) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(e, t) {
        "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
      }
    }
  }, {
    name: "thumbs",
    params: {
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-container-thumbs"
      }
    },
    create: function create() {
      z(this, {
        thumbs: t({
          swiper: null,
          initialized: !1
        }, ve)
      });
    },
    on: {
      beforeInit: function beforeInit(e) {
        var t = e.params.thumbs;
        t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
      },
      slideChange: function slideChange(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      update: function update(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      resize: function resize(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      observerUpdate: function observerUpdate(e) {
        e.thumbs.swiper && e.thumbs.update();
      },
      setTransition: function setTransition(e, t) {
        var a = e.thumbs.swiper;
        a && a.setTransition(t);
      },
      beforeDestroy: function beforeDestroy(e) {
        var t = e.thumbs.swiper;
        t && e.thumbs.swiperCreated && t && t.destroy();
      }
    }
  }];
  return q.use(fe), q;
});
!function (e, t) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module))) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
    var n = t();

    for (var o in n) {
      ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports : e)[o] = n[o];
    }
  }
}(window, function () {
  return function (e) {
    var t = {};

    function n(o) {
      if (t[o]) return t[o].exports;
      var r = t[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: o
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var r in e) {
        n.d(o, r, function (t) {
          return e[t];
        }.bind(null, r));
      }
      return o;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
  }([function (e, t, n) {
    "use strict";

    n.r(t);
    var o,
        r = "fslightbox-",
        i = "".concat(r, "styles"),
        s = "".concat(r, "cursor-grabbing"),
        a = "".concat(r, "full-dimension"),
        c = "".concat(r, "flex-centered"),
        l = "".concat(r, "open"),
        u = "".concat(r, "transform-transition"),
        d = "".concat(r, "absoluted"),
        p = "".concat(r, "slide-btn"),
        f = "".concat(p, "-container"),
        h = "".concat(r, "fade-in"),
        m = "".concat(r, "fade-out"),
        g = h + "-strong",
        v = m + "-strong",
        b = "".concat(r, "opacity-"),
        x = "".concat(b, "1"),
        y = "".concat(r, "source");

    function S(e) {
      return (S = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    "object" === ("undefined" == typeof document ? "undefined" : S(document)) && ((o = document.createElement("style")).className = i, o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), document.head.appendChild(o));

    function w(e) {
      var t,
          n = e.props,
          o = 0,
          r = {};
      this.getSourceTypeFromLocalStorageByUrl = function (e) {
        return t[e] ? t[e] : i(e);
      }, this.handleReceivedSourceTypeForUrl = function (e, n) {
        !1 === r[n] && (o--, "invalid" !== e ? r[n] = e : delete r[n], 0 === o && (!function (e, t) {
          for (var n in t) {
            e[n] = t[n];
          }
        }(t, r), localStorage.setItem("fslightbox-types", JSON.stringify(t))));
      };

      var i = function i(e) {
        o++, r[e] = !1;
      };

      n.disableLocalStorage ? (this.getSourceTypeFromLocalStorageByUrl = function () {}, this.handleReceivedSourceTypeForUrl = function () {}) : (t = JSON.parse(localStorage.getItem("fslightbox-types"))) || (t = {}, this.getSourceTypeFromLocalStorageByUrl = i);
    }

    function L(e, t, n, o) {
      var r = e.data,
          i = e.elements.sources,
          s = n / o,
          a = 0;

      this.adjustSize = function () {
        if ((a = r.maxSourceWidth / s) < r.maxSourceHeight) return n < r.maxSourceWidth && (a = o), c();
        a = o > r.maxSourceHeight ? r.maxSourceHeight : o, c();
      };

      var c = function c() {
        i[t].style.width = a * s + "px", i[t].style.height = a + "px";
      };
    }

    function C(e, t) {
      var n = this,
          o = e.collections.sourceSizers,
          r = e.elements,
          i = r.sourceAnimationWrappers,
          s = r.sourceMainWrappers,
          a = r.sources,
          c = e.resolve;

      function l(e, n) {
        o[t] = c(L, [t, e, n]), o[t].adjustSize();
      }

      this.runActions = function (e, o) {
        a[t].classList.add(x), i[t].classList.add(g), s[t].removeChild(s[t].firstChild), l(e, o), n.runActions = l;
      };
    }

    function F(e, t) {
      var n,
          o = this,
          r = e.elements.sources,
          i = e.props,
          s = (0, e.resolve)(C, [t]);
      this.handleImageLoad = function (e) {
        var t = e.target,
            n = t.naturalWidth,
            o = t.naturalHeight;
        s.runActions(n, o);
      }, this.handleVideoLoad = function (e) {
        var t = e.target,
            o = t.videoWidth,
            r = t.videoHeight;
        n = !0, s.runActions(o, r);
      }, this.handleNotMetaDatedVideoLoad = function () {
        n || o.handleYoutubeLoad();
      }, this.handleYoutubeLoad = function () {
        var e = 1920,
            t = 1080;
        i.maxYoutubeDimensions && (e = i.maxYoutubeDimensions.width, t = i.maxYoutubeDimensions.height), s.runActions(e, t);
      }, this.handleCustomLoad = function () {
        setTimeout(function () {
          var e = r[t];
          s.runActions(e.offsetWidth, e.offsetHeight);
        });
      };
    }

    function A(e, t, n) {
      var o = e.elements.sources,
          r = e.props.customClasses,
          i = r[t] ? r[t] : "";
      o[t].className = n + " " + i;
    }

    function I(e, t) {
      var n = e.elements.sources,
          o = e.props.customAttributes;

      for (var r in o[t]) {
        n[t].setAttribute(r, o[t][r]);
      }
    }

    function T(e, t) {
      var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          r = o.sources,
          i = o.sourceAnimationWrappers,
          s = e.props.sources;
      r[t] = document.createElement("img"), A(e, t, y), r[t].src = s[t], r[t].onload = n[t].handleImageLoad, I(e, t), i[t].appendChild(r[t]);
    }

    function E(e, t) {
      var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          r = o.sources,
          i = o.sourceAnimationWrappers,
          s = e.props,
          a = s.sources,
          c = s.videosPosters;
      r[t] = document.createElement("video"), A(e, t, y), r[t].src = a[t], r[t].onloadedmetadata = function (e) {
        n[t].handleVideoLoad(e);
      }, r[t].controls = !0, I(e, t), c[t] && (r[t].poster = c[t]);
      var l = document.createElement("source");
      l.src = a[t], r[t].appendChild(l), setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3), i[t].appendChild(r[t]);
    }

    function N(e, t) {
      var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          i = o.sources,
          s = o.sourceAnimationWrappers,
          a = e.props.sources;
      i[t] = document.createElement("iframe"), A(e, t, "".concat(y, " ").concat(r, "youtube-iframe")), i[t].src = "https://www.youtube.com/embed/".concat(a[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?enablejsapi=1"), i[t].allowFullscreen = !0, I(e, t), s[t].appendChild(i[t]), n[t].handleYoutubeLoad();
    }

    function W(e, t) {
      var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          r = o.sources,
          i = o.sourceAnimationWrappers,
          s = e.props.sources;
      r[t] = s[t], A(e, t, "".concat(r[t].className, " ").concat(y)), i[t].appendChild(r[t]), n[t].handleCustomLoad();
    }

    function z(e, t) {
      var n = e.elements,
          o = n.sources,
          i = n.sourceAnimationWrappers,
          s = n.sourceMainWrappers;
      e.props.sources;
      o[t] = document.createElement("div"), o[t].className = "".concat(r, "invalid-file-wrapper ").concat(c), o[t].innerHTML = "Invalid source", i[t].classList.add(g), i[t].appendChild(o[t]), s[t].removeChild(s[t].firstChild);
    }

    function M(e) {
      var t = e.collections,
          n = t.sourceLoadHandlers,
          o = t.sourcesRenderFunctions,
          r = e.core.sourceDisplayFacade,
          i = e.resolve;

      this.runActionsForSourceTypeAndIndex = function (t, s) {
        var a;

        switch ("invalid" !== t && (n[s] = i(F, [s])), t) {
          case "image":
            a = T;
            break;

          case "video":
            a = E;
            break;

          case "youtube":
            a = N;
            break;

          case "custom":
            a = W;
            break;

          default:
            a = z;
        }

        o[s] = function () {
          return a(e, s);
        }, r.displaySourcesWhichShouldBeDisplayed();
      };
    }

    function P() {
      var e,
          t,
          n,
          o = {
        isUrlYoutubeOne: function isUrlYoutubeOne(e) {
          var t = document.createElement("a");
          return t.href = e, "www.youtube.com" === t.hostname;
        },
        getTypeFromResponseContentType: function getTypeFromResponseContentType(e) {
          return e.slice(0, e.indexOf("/"));
        }
      };

      function r() {
        if (4 !== n.readyState) {
          if (2 === n.readyState) {
            var e;

            switch (o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))) {
              case "image":
                e = "image";
                break;

              case "video":
                e = "video";
                break;

              default:
                e = "invalid";
            }

            n.onreadystatechange = null, n.abort(), t(e);
          }
        } else t("invalid");
      }

      this.setUrlToCheck = function (t) {
        e = t;
      }, this.getSourceType = function (i) {
        if (o.isUrlYoutubeOne(e)) return i("youtube");
        t = i, (n = new XMLHttpRequest()).onreadystatechange = r, n.open("GET", e, !0), n.send();
      };
    }

    function H(e, t, n) {
      var o = e.props,
          r = o.types,
          i = o.type,
          s = o.sources,
          a = e.resolve;
      this.getTypeSetByClientForIndex = function (e) {
        var t;
        return r && r[e] ? t = r[e] : i && (t = i), t;
      }, this.retrieveTypeWithXhrForIndex = function (e) {
        var o = a(P);
        o.setUrlToCheck(s[e]), o.getSourceType(function (o) {
          t.handleReceivedSourceTypeForUrl(o, s[e]), n.runActionsForSourceTypeAndIndex(o, e);
        });
      };
    }

    function k(e, t) {
      var n = e.componentsServices.hideSourceLoaderIfNotYetCollection,
          o = e.elements,
          r = o.sourceWrappersContainer,
          i = o.sourceMainWrappers;
      i[t] = document.createElement("div"), i[t].className = "".concat(d, " ").concat(a, " ").concat(c), i[t].innerHTML = '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>';
      var s = i[t].firstChild;
      n[t] = function () {
        i[t].contains(s) && i[t].removeChild(s);
      }, r.appendChild(i[t]), function (e, t) {
        var n = e.elements,
            o = n.sourceMainWrappers,
            r = n.sourceAnimationWrappers;
        r[t] = document.createElement("div"), o[t].appendChild(r[t]);
      }(e, t);
    }

    function O(e, t, n, o) {
      var i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      i.setAttributeNS(null, "width", t), i.setAttributeNS(null, "height", t), i.setAttributeNS(null, "viewBox", n);
      var s = document.createElementNS("http://www.w3.org/2000/svg", "path");
      return s.setAttributeNS(null, "class", "".concat(r, "svg-path")), s.setAttributeNS(null, "d", o), i.appendChild(s), e.appendChild(i), i;
    }

    function R(e, t) {
      var n = document.createElement("div");
      return n.className = "".concat(r, "toolbar-button ").concat(c), n.title = t, e.appendChild(n), n;
    }

    function D(e, t) {
      var n = document.createElement("div");
      n.className = "".concat(r, "toolbar"), t.appendChild(n), function (e, t) {
        var n = e.componentsServices,
            o = e.core.fullscreenToggler,
            r = e.data,
            i = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
            s = R(t);
        s.title = "Enter fullscreen";
        var a = O(s, "20px", "0 0 18 18", i);
        n.enterFullscreen = function () {
          r.isFullscreenOpen = !0, s.title = "Exit fullscreen", a.setAttributeNS(null, "width", "24px"), a.setAttributeNS(null, "height", "24px"), a.setAttributeNS(null, "viewBox", "0 0 950 1024"), a.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z");
        }, n.exitFullscreen = function () {
          r.isFullscreenOpen = !1, s.title = "Enter fullscreen", a.setAttributeNS(null, "width", "20px"), a.setAttributeNS(null, "height", "20px"), a.setAttributeNS(null, "viewBox", "0 0 18 18"), a.firstChild.setAttributeNS(null, "d", i);
        }, s.onclick = function () {
          r.isFullscreenOpen ? o.exitFullscreen() : o.enterFullscreen();
        };
      }(e, n), function (e, t) {
        var n = R(t, "Close");
        n.onclick = e.core.lightboxCloser.closeLightbox, O(n, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z");
      }(e, n);
    }

    function j(e) {
      var t = e.props.sources,
          n = e.elements.container,
          o = document.createElement("div");
      o.className = "".concat(r, "nav"), n.appendChild(o), D(e, o), t.length > 1 && function (e, t) {
        var n = e.componentsServices,
            o = e.props.sources,
            i = (e.stageIndexes, document.createElement("div"));
        i.className = "".concat(r, "slide-number-container");
        var s = document.createElement("div");
        s.className = c;
        var a = document.createElement("span");

        n.setSlideNumber = function (e) {
          return a.innerHTML = e;
        };

        var l = document.createElement("span");
        l.className = "".concat(r, "slash");
        var u = document.createElement("div");
        u.innerHTML = o.length, i.appendChild(s), s.appendChild(a), s.appendChild(l), s.appendChild(u), t.appendChild(i), setTimeout(function () {
          s.offsetWidth > 55 && (i.style.justifyContent = "flex-start");
        });
      }(e, o);
    }

    function X(e, t) {
      var n = this,
          o = e.elements.sourceMainWrappers,
          r = e.props,
          i = 0;
      this.byValue = function (e) {
        return i = e, n;
      }, this.negative = function () {
        s(-a());
      }, this.zero = function () {
        s(0);
      }, this.positive = function () {
        s(a());
      };

      var s = function s(e) {
        o[t].style.transform = "translateX(".concat(e + i, "px)"), i = 0;
      },
          a = function a() {
        return (1 + r.slideDistance) * innerWidth;
      };
    }

    function B(e, t, n, o) {
      var r = e.elements.container,
          i = n.charAt(0).toUpperCase() + n.slice(1),
          s = document.createElement("div");
      s.className = "".concat(f, " ").concat(f, "-").concat(n), s.title = "".concat(i, " slide"), s.onclick = t, function (e, t) {
        var n = document.createElement("div");
        n.className = "".concat(p, " ").concat(c), O(n, "20px", "0 0 20 20", t), e.appendChild(n);
      }(s, o), r.appendChild(s);
    }

    function U(e, t) {
      var n = e.classList;
      n.contains(t) && n.remove(t);
    }

    function V(e) {
      var t = this,
          n = e.core,
          o = n.eventsDispatcher,
          r = n.fullscreenToggler,
          i = n.globalEventsController,
          s = n.scrollbarRecompensor,
          a = e.data,
          c = e.elements,
          u = e.props,
          d = e.sourcePointerProps;
      this.isLightboxFadingOut = !1, this.runActions = function () {
        t.isLightboxFadingOut = !0, c.container.classList.add(v), i.removeListeners(), u.exitFullscreenOnClose && a.isFullscreenOpen && r.exitFullscreen(), setTimeout(function () {
          t.isLightboxFadingOut = !1, d.isPointering = !1, c.container.classList.remove(v), document.documentElement.classList.remove(l), s.removeRecompense(), document.body.removeChild(c.container), o.dispatch("onClose");
        }, 270);
      };
    }

    function Y(e) {
      var t,
          n,
          o,
          r = e.collections.sourceMainWrappersTransformers,
          i = e.componentsServices,
          s = e.core,
          a = s.classFacade,
          c = s.slideIndexChanger,
          l = s.sourceDisplayFacade,
          d = s.stageManager,
          p = e.elements.sourceAnimationWrappers,
          f = e.stageIndexes,
          v = (t = function t() {
        a.removeFromEachElementClassIfContains("sourceAnimationWrappers", m);
      }, n = 300, o = [], function () {
        o.push(!0), setTimeout(function () {
          o.pop(), o.length || t();
        }, n);
      });
      c.changeTo = function (e) {
        f.current = e, d.updateStageIndexes(), i.setSlideNumber(e + 1), l.displaySourcesWhichShouldBeDisplayed();
      }, c.jumpTo = function (e) {
        var t = f.current;
        c.changeTo(e), a.removeFromEachElementClassIfContains("sourceMainWrappers", u), U(p[t], g), U(p[t], h), p[t].classList.add(m), U(p[e], g), U(p[e], m), p[e].classList.add(h), v(), r[e].zero(), setTimeout(function () {
          t !== f.current && r[t].negative();
        }, 270);
      };
    }

    function _(e) {
      var t = e.core,
          n = t.lightboxCloser,
          o = t.fullscreenToggler,
          r = t.slideChangeFacade;

      this.listener = function (e) {
        switch (e.key) {
          case "Escape":
            n.closeLightbox();
            break;

          case "ArrowLeft":
            r.changeToPrevious();
            break;

          case "ArrowRight":
            r.changeToNext();
            break;

          case "F11":
            e.preventDefault(), o.enterFullscreen();
        }
      };
    }

    function q(e) {
      var t = e.collections.sourceMainWrappersTransformers,
          n = e.elements,
          o = e.sourcePointerProps,
          r = e.stageIndexes;

      function i(e, n) {
        t[e].byValue(o.swipedX)[n]();
      }

      this.runActionsForEvent = function (e) {
        var t, a, c;
        n.container.contains(n.slideSwipingHoverer) || n.container.appendChild(n.slideSwipingHoverer), t = n.container, a = s, (c = t.classList).contains(a) || c.add(a), o.swipedX = e.screenX - o.downScreenX, i(r.current, "zero"), void 0 !== r.previous && o.swipedX > 0 ? i(r.previous, "negative") : void 0 !== r.next && o.swipedX < 0 && i(r.next, "positive");
      };
    }

    function J(e) {
      var t = e.props.sources,
          n = e.resolve,
          o = e.sourcePointerProps,
          r = n(q);
      1 === t.length ? this.listener = function () {
        o.swipedX = 1;
      } : this.listener = function (e) {
        o.isPointering && r.runActionsForEvent(e);
      };
    }

    function G(e) {
      var t = e.collections.sourceMainWrappersTransformers,
          n = e.core.slideIndexChanger,
          o = e.elements.sourceMainWrappers,
          r = e.stageIndexes;
      this.runPositiveSwipedXActions = function () {
        void 0 === r.previous || (i("positive"), n.changeTo(r.previous)), i("zero");
      }, this.runNegativeSwipedXActions = function () {
        void 0 === r.next || (i("negative"), n.changeTo(r.next)), i("zero");
      };

      var i = function i(e) {
        o[r.current].classList.add(u), t[r.current][e]();
      };
    }

    function $(e, t) {
      e.contains(t) && e.removeChild(t);
    }

    function K(e) {
      var t = e.core.lightboxCloser,
          n = e.elements,
          o = e.resolve,
          r = e.sourcePointerProps,
          i = o(G);
      this.runNoSwipeActions = function () {
        $(n.container, n.slideSwipingHoverer), r.isSourceDownEventTarget || t.closeLightbox(), r.isPointering = !1;
      }, this.runActions = function () {
        r.swipedX > 0 ? i.runPositiveSwipedXActions() : i.runNegativeSwipedXActions(), $(n.container, n.slideSwipingHoverer), n.container.classList.remove(s), r.isPointering = !1;
      };
    }

    function Q(e) {
      var t = e.resolve,
          n = e.sourcePointerProps,
          o = t(K);

      this.listener = function () {
        n.isPointering && (n.swipedX ? o.runActions() : o.runNoSwipeActions());
      };
    }

    function Z(e) {
      var t, n, o;
      n = (t = e).core.classFacade, o = t.elements, n.removeFromEachElementClassIfContains = function (e, t) {
        for (var n = 0; n < o[e].length; n++) {
          U(o[e][n], t);
        }
      }, function (e) {
        var t = e.core.eventsDispatcher,
            n = e.props;

        t.dispatch = function (e) {
          n[e] && n[e]();
        };
      }(e), function (e) {
        var t = e.componentsServices,
            n = e.core.fullscreenToggler;
        n.enterFullscreen = function () {
          t.enterFullscreen();
          var e = document.documentElement;
          e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
        }, n.exitFullscreen = function () {
          t.exitFullscreen(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
        };
      }(e), function (e) {
        var t = e.core,
            n = t.globalEventsController,
            o = t.windowResizeActioner,
            r = e.resolve,
            i = r(_),
            s = r(J),
            a = r(Q);
        n.attachListeners = function () {
          document.addEventListener("pointermove", s.listener), document.addEventListener("pointerup", a.listener), addEventListener("resize", o.runActions), document.addEventListener("keydown", i.listener);
        }, n.removeListeners = function () {
          document.removeEventListener("pointermove", s.listener), document.removeEventListener("pointerup", a.listener), removeEventListener("resize", o.runActions), document.removeEventListener("keydown", i.listener);
        };
      }(e), function (e) {
        var t = e.core.lightboxCloser,
            n = (0, e.resolve)(V);

        t.closeLightbox = function () {
          n.isLightboxFadingOut || n.runActions();
        };
      }(e), ne(e), function (e) {
        var t = e.data,
            n = e.core.scrollbarRecompensor;

        function o() {
          document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px");
        }

        n.addRecompense = function () {
          "complete" === document.readyState ? o() : addEventListener("load", function () {
            o(), n.addRecompense = o;
          });
        }, n.removeRecompense = function () {
          document.body.style.removeProperty("margin-right");
        };
      }(e), function (e) {
        var t = e.core,
            n = t.slideChangeFacade,
            o = t.slideIndexChanger,
            r = t.stageManager;
        e.props.sources.length > 1 ? (n.changeToPrevious = function () {
          o.jumpTo(r.getPreviousSlideIndex());
        }, n.changeToNext = function () {
          o.jumpTo(r.getNextSlideIndex());
        }) : (n.changeToPrevious = function () {}, n.changeToNext = function () {});
      }(e), Y(e), function (e) {
        var t = e.core,
            n = t.classFacade,
            o = t.sourcesPointerDown,
            r = e.elements.sources,
            i = e.sourcePointerProps,
            s = e.stageIndexes;

        o.listener = function (e) {
          "VIDEO" !== e.target.tagName && e.preventDefault(), i.isPointering = !0, i.downScreenX = e.screenX, i.swipedX = 0;
          var t = r[s.current];
          t && t.contains(e.target) ? i.isSourceDownEventTarget = !0 : i.isSourceDownEventTarget = !1, n.removeFromEachElementClassIfContains("sourceMainWrappers", u);
        };
      }(e), function (e) {
        var t = e.collections.sourcesRenderFunctions,
            n = e.core.sourceDisplayFacade,
            o = e.props,
            r = e.stageIndexes;

        function i(e) {
          t[e] && (t[e](), delete t[e]);
        }

        n.displaySourcesWhichShouldBeDisplayed = function () {
          if (o.loadOnlyCurrentSource) i(r.current);else for (var e in r) {
            i(r[e]);
          }
        };
      }(e), function (e) {
        var t = e.stageIndexes,
            n = e.core.stageManager,
            o = e.props.sources.length - 1;
        n.getPreviousSlideIndex = function () {
          return 0 === t.current ? o : t.current - 1;
        }, n.getNextSlideIndex = function () {
          return t.current === o ? 0 : t.current + 1;
        }, n.updateStageIndexes = 0 === o ? function () {} : 1 === o ? function () {
          0 === t.current ? (t.next = 1, delete t.previous) : (t.previous = 0, delete t.next);
        } : function () {
          t.previous = n.getPreviousSlideIndex(), t.next = n.getNextSlideIndex();
        }, n.isSourceInStage = o <= 2 ? function () {
          return !0;
        } : function (e) {
          var n = t.current;
          if (0 === n && e === o || n === o && 0 === e) return !0;
          var r = n - e;
          return -1 === r || 0 === r || 1 === r;
        };
      }(e), function (e) {
        var t = e.collections,
            n = t.sourceMainWrappersTransformers,
            o = t.sourceSizers,
            r = e.core.windowResizeActioner,
            i = e.data,
            s = e.elements.sourceMainWrappers,
            a = e.props,
            c = e.stageIndexes;

        r.runActions = function () {
          innerWidth < 992 ? i.maxSourceWidth = innerWidth : i.maxSourceWidth = .9 * innerWidth, i.maxSourceHeight = .9 * innerHeight;

          for (var e = 0; e < a.sources.length; e++) {
            U(s[e], u), e !== c.current && n[e].negative(), o[e] && o[e].adjustSize();
          }
        };
      }(e);
    }

    function ee(e) {
      var t = e.props.disableLocalStorage;

      if (!t) {
        var n = localStorage.getItem("fslightbox-scrollbar-width");
        if (n) return n;
      }

      var o = function () {
        var e = document.createElement("div"),
            t = e.style;
        return t.visibility = "hidden", t.width = "100px", t.msOverflowStyle = "scrollbar", t.overflow = "scroll", e;
      }(),
          r = function () {
        var e = document.createElement("div");
        return e.style.width = "100%", e;
      }();

      document.body.appendChild(o);
      var i = o.offsetWidth;
      o.appendChild(r);
      var s = r.offsetWidth;
      document.body.removeChild(o);
      var a = i - s;
      return t || localStorage.setItem("fslightbox-scrollbar-width", a.toString()), a;
    }

    function te(e) {
      var t = e.core.eventsDispatcher,
          n = e.data,
          o = e.elements,
          i = e.props.sources;
      n.isInitialized = !0, n.scrollbarWidth = ee(e), function (e) {
        for (var t = e.collections.sourceMainWrappersTransformers, n = e.props.sources, o = e.resolve, r = 0; r < n.length; r++) {
          t[r] = o(X, [r]);
        }
      }(e), Z(e), o.container = document.createElement("div"), o.container.className = "".concat(r, "container ").concat(a, " ").concat(g), function (e) {
        var t = e.elements;
        t.slideSwipingHoverer = document.createElement("div"), t.slideSwipingHoverer.className = "".concat(r, "slide-swiping-hoverer ").concat(a, " ").concat(d);
      }(e), j(e), function (e) {
        var t = e.core.sourcesPointerDown,
            n = e.elements,
            o = e.props.sources,
            r = document.createElement("div");
        r.className = "".concat(d, " ").concat(a), n.container.appendChild(r), r.addEventListener("pointerdown", t.listener), n.sourceWrappersContainer = r;

        for (var i = 0; i < o.length; i++) {
          k(e, i);
        }
      }(e), i.length > 1 && function (e) {
        var t = e.core.slideChangeFacade;
        B(e, t.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), B(e, t.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z");
      }(e), function (e) {
        for (var t = e.props.sources, n = e.resolve, o = n(w), r = n(M), i = n(H, [o, r]), s = 0; s < t.length; s++) {
          if ("string" == typeof t[s]) {
            var a = i.getTypeSetByClientForIndex(s);
            if (a) r.runActionsForSourceTypeAndIndex(a, s);else {
              var c = o.getSourceTypeFromLocalStorageByUrl(t[s]);
              c ? r.runActionsForSourceTypeAndIndex(c, s) : i.retrieveTypeWithXhrForIndex(s);
            }
          } else r.runActionsForSourceTypeAndIndex("custom", s);
        }
      }(e), t.dispatch("onInit");
    }

    function ne(e) {
      var t = e.collections.sourceMainWrappersTransformers,
          n = e.componentsServices,
          o = e.core,
          r = o.eventsDispatcher,
          i = o.lightboxOpener,
          s = o.globalEventsController,
          a = o.scrollbarRecompensor,
          c = o.sourceDisplayFacade,
          u = o.stageManager,
          d = o.windowResizeActioner,
          p = e.data,
          f = e.elements,
          h = e.stageIndexes;

      i.open = function () {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        h.current = o, p.isInitialized ? r.dispatch("onShow") : te(e), u.updateStageIndexes(), c.displaySourcesWhichShouldBeDisplayed(), n.setSlideNumber(o + 1), document.body.appendChild(f.container), document.documentElement.classList.add(l), a.addRecompense(), s.attachListeners(), d.runActions(), t[h.current].zero(), r.dispatch("onOpen");
      };
    }

    function oe(e, t, n) {
      return (oe = re() ? Reflect.construct : function (e, t, n) {
        var o = [null];
        o.push.apply(o, t);
        var r = new (Function.bind.apply(e, o))();
        return n && ie(r, n.prototype), r;
      }).apply(null, arguments);
    }

    function re() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }

    function ie(e, t) {
      return (ie = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function se(e) {
      return function (e) {
        if (Array.isArray(e)) return ae(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return ae(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ae(e, t);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function ae(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, o = new Array(t); n < t; n++) {
        o[n] = e[n];
      }

      return o;
    }

    function ce() {
      for (var e = document.getElementsByTagName("a"), t = function t(_t2) {
        if (!e[_t2].hasAttribute("data-fslightbox")) return "continue";

        var n = e[_t2].getAttribute("data-fslightbox"),
            o = e[_t2].getAttribute("href");

        fsLightboxInstances[n] || (fsLightboxInstances[n] = new FsLightbox());
        var r = null;
        r = "#" === o.charAt(0) ? document.getElementById(o.substring(1)) : o, fsLightboxInstances[n].props.sources.push(r), fsLightboxInstances[n].elements.a.push(e[_t2]);
        var i = fsLightboxInstances[n].props.sources.length - 1;
        e[_t2].onclick = function (e) {
          e.preventDefault(), fsLightboxInstances[n].open(i);
        }, d("types", "data-type"), d("videosPosters", "data-video-poster"), d("customClasses", "data-class"), d("customClasses", "data-custom-class");

        for (var s = ["href", "data-fslightbox", "data-type", "data-video-poster", "data-class", "data-custom-class"], a = e[_t2].attributes, c = fsLightboxInstances[n].props.customAttributes, l = 0; l < a.length; l++) {
          if (-1 === s.indexOf(a[l].name) && "data-" === a[l].name.substr(0, 5)) {
            c[i] || (c[i] = {});
            var u = a[l].name.substr(5);
            c[i][u] = a[l].value;
          }
        }

        function d(o, r) {
          e[_t2].hasAttribute(r) && (fsLightboxInstances[n].props[o][i] = e[_t2].getAttribute(r));
        }
      }, n = 0; n < e.length; n++) {
        t(n);
      }

      var o = Object.keys(fsLightboxInstances);
      window.fsLightbox = fsLightboxInstances[o[o.length - 1]];
    }

    window.FsLightbox = function () {
      var e = this;
      this.props = {
        sources: [],
        customAttributes: [],
        customClasses: [],
        types: [],
        videosPosters: [],
        slideDistance: .3
      }, this.data = {
        isInitialized: !1,
        isFullscreenOpen: !1,
        maxSourceWidth: 0,
        maxSourceHeight: 0,
        scrollbarWidth: 0
      }, this.sourcePointerProps = {
        downScreenX: null,
        isPointering: !1,
        isSourceDownEventTarget: !1,
        swipedX: 0
      }, this.stageIndexes = {}, this.elements = {
        a: [],
        container: null,
        slideSwipingHoverer: null,
        sourceWrappersContainer: null,
        sources: [],
        sourceMainWrappers: [],
        sourceAnimationWrappers: []
      }, this.componentsServices = {
        enterFullscreen: null,
        exitFullscreen: null,
        hideSourceLoaderIfNotYetCollection: [],
        setSlideNumber: function setSlideNumber() {}
      }, this.resolve = function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return n.unshift(e), oe(t, se(n));
      }, this.collections = {
        sourceMainWrappersTransformers: [],
        sourceLoadHandlers: [],
        sourcesRenderFunctions: [],
        sourceSizers: []
      }, this.core = {
        classFacade: {},
        eventsDispatcher: {},
        fullscreenToggler: {},
        globalEventsController: {},
        lightboxCloser: {},
        lightboxOpener: {},
        lightboxUpdater: {},
        scrollbarRecompensor: {},
        slideChangeFacade: {},
        slideIndexChanger: {},
        sourcesPointerDown: {},
        sourceDisplayFacade: {},
        stageManager: {},
        windowResizeActioner: {}
      }, ne(this), this.open = function (t) {
        return e.core.lightboxOpener.open(t);
      }, this.close = function () {
        return e.core.lightboxCloser.closeLightbox();
      };
    }, window.fsLightboxInstances = {}, ce(), window.refreshFsLightbox = function () {
      for (var e in fsLightboxInstances) {
        var t = fsLightboxInstances[e].props;
        fsLightboxInstances[e] = new FsLightbox(), fsLightboxInstances[e].props = t, fsLightboxInstances[e].props.sources = [], fsLightboxInstances[e].elements.a = [];
      }

      ce();
    };
  }]);
});
;
var body = document.querySelector("body");
var popupLinks = document.querySelectorAll(".popup-link");
var lockPadding = document.querySelectorAll(".lock-padding");
var unlock = true;
var timeout = 300; //menu burger 

document.querySelector(".header__menu-icon").addEventListener("click", function () {
  var burgerIcon = document.querySelector(".header__menu-icon");
  var menuBurger = document.querySelector(".menu__list");
  burgerIcon.classList.toggle("_active-burger");
  menuBurger.classList.toggle("_active-nav");

  if (burgerIcon.classList.contains("_active-burger")) {
    bodyLock();
    document.documentElement.addEventListener("click", function (event) {
      if (!event.target.closest(".header__menu-icon") && !event.target.closest(".select-lang")) {
        burgerIcon.classList.remove("_active-burger");
        menuBurger.classList.remove("_active-nav");
        bodyUnLock();
      }
    });
  } else {
    bodyUnLock();
  }
}); // opacity scroll-header

window.onload = function () {
  var header = document.querySelector(".header");

  var callback = function callback(entries, observer) {
    if (entries[0].isIntersecting) {
      header.classList.remove("_scrolling");
    } else {
      header.classList.add("_scrolling");
    }
  };

  var headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(header); //header-offset fslightbox

  var html = document.querySelector("html");
  var config = {
    attributes: true
  };
  var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

  var callbackHtml = function callbackHtml(mutationsList, observer) {
    var _iterator = _createForOfIteratorHelper(mutationsList),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mutation = _step.value;

        if (mutation.type === 'attributes' && !isMobile) {
          var lockPaddingValue = window.innerWidth - document.querySelector(".content").offsetWidth + "px";

          if (document.querySelector("._wrapper-padding").style.paddingRight !== "0px") {
            document.querySelector("._wrapper-padding").style.paddingRight = "0px";
          } else {
            document.querySelector("._wrapper-padding").style.paddingRight = lockPaddingValue;
          }
        } else if (mutation.type === 'attributes' && isMobile) {
          body.style.marginRight = "0px";
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var htmlObserver = new MutationObserver(callbackHtml);
  htmlObserver.observe(html, config);
};

new Swiper('.intro', {
  loop: true,
  pagination: {
    el: '.intro .intro__pagination',
    type: "progressbar"
  },
  lazy: true,
  navigation: {
    nextEl: '.intro .intro__next',
    prevEl: '.intro .intro__prev'
  },
  effect: "fade"
});
new Swiper('.cabins__swiper', {
  preloadImages: false,
  lazy: true,
  spaceBetween: 24,
  pagination: {
    el: '.cabins-swiper__pagination',
    type: "progressbar"
  },
  navigation: {
    nextEl: '.cabins__swiper .cabins-swiper__next',
    prevEl: '.cabins__swiper .cabins-swiper__prev'
  },
  breakpoints: {
    280: {
      slidesPerView: 1.2
    },
    380: {
      slidesPerView: 1.5
    },
    450: {
      slidesPerView: 1.7
    },
    500: {
      slidesPerView: 2.2
    },
    768: {
      slidesPerView: 2.6
    },
    1000: {
      slidesPerView: 3.2
    },
    1408: {
      slidesPerView: 3.5
    },
    1500: {
      slidesPerView: 4
    },
    1750: {
      slidesPerView: 4.5
    }
  }
});
new Swiper('.contact__slider', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  effect: "fade",
  touchRatio: 0.5,
  lazy: true
});
new Swiper('.outside__slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.outside-swiper__pagination',
    type: "progressbar"
  },
  navigation: {
    nextEl: '.outside__slider .outside-swiper__next',
    prevEl: '.outside__slider .outside-swiper__prev'
  }
});
new Swiper('.inside__slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.inside-swiper__pagination',
    type: "progressbar"
  },
  navigation: {
    nextEl: '.inside__slider .inside-swiper__next',
    prevEl: '.inside__slider .inside-swiper__prev'
  }
});
new Swiper('.practicalities__slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.practicalities-swiper__pagination',
    type: "progressbar"
  },
  navigation: {
    nextEl: '.practicalities__slider .practicalities-swiper__next',
    prevEl: '.practicalities__slider .practicalities-swiper__prev'
  }
});
new Swiper('.hafnarfjrdur__slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.hafnarfjrdur-swiper__pagination',
    type: "progressbar"
  },
  navigation: {
    nextEl: '.hafnarfjrdur__slider .hafnarfjrdur-swiper__next',
    prevEl: '.hafnarfjrdur__slider .hafnarfjrdur-swiper__prev'
  }
});
new Swiper('.shopping__slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.shopping-swiper__pagination',
    type: "progressbar"
  },
  navigation: {
    nextEl: '.shopping__slider .shopping-swiper__next',
    prevEl: '.shopping__slider .shopping-swiper__prev'
  }
});
new Swiper('.nature__slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.nature-swiper__pagination',
    type: "progressbar"
  },
  navigation: {
    nextEl: '.nature__slider .nature-swiper__next',
    prevEl: '.nature__slider .nature-swiper__prev'
  }
});
new Swiper('.drive__slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.drive-swiper__pagination',
    type: "progressbar"
  },
  navigation: {
    nextEl: '.drive__slider .drive-swiper__next',
    prevEl: '.drive__slider .drive-swiper__prev'
  }
});
new Swiper('.town__slider', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.town-swiper__pagination',
    type: "progressbar"
  },
  navigation: {
    nextEl: '.town__slider .town-swiper__next',
    prevEl: '.town__slider .town-swiper__prev'
  }
});
;

if (document.getElementById("forest")) {
  var forestMap = L.map('forest', {
    center: [64.0099, -21.9677],
    zoom: 14,
    gestureHandling: true
  });
  L.tileLayer('https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(forestMap);
  var Marker = L.divIcon({
    className: 'forest-marker',
    html: "<span class=\"map-waves\"></span>\n            <span class=\"map-waves\" ></span>\n        <span class=\"map-waves\"></span>"
  });
  L.marker([64.0099, -21.9677], {
    icon: Marker
  }).addTo(forestMap);
  forestMap.addEventListener("click", function () {
    var waves = document.querySelectorAll(".map-waves");

    for (var i = 0; i < waves.length; i++) {
      waves[i].classList.toggle("_waves-hide");
    }
  });
}

if (document.getElementById("area")) {
  var areaMap = L.map('area', {
    center: [64.0099, -21.9677],
    zoom: 14,
    gestureHandling: true
  });
  L.tileLayer('https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(areaMap);

  var _Marker = L.divIcon({
    className: 'forest-marker',
    html: "<span class=\"map-waves\"></span>\n            <span class=\"map-waves\" ></span>\n        <span class=\"map-waves\"></span>"
  });

  L.marker([64.0099, -21.9677], {
    icon: _Marker
  }).addTo(areaMap);
  areaMap.addEventListener("click", function () {
    var waves = document.querySelectorAll(".map-waves");

    for (var i = 0; i < waves.length; i++) {
      waves[i].classList.toggle("_waves-hide");
    }
  });
}

; //popap

if (popupLinks.length > 0) {
  var _loop = function _loop(index) {
    var popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      var popupName = popupLink.getAttribute("href").replace("#", "");
      var curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  };

  for (var index = 0; index < popupLinks.length; index++) {
    _loop(index);
  }
}

var popupCloseIcon = document.querySelectorAll("._close-popup");

if (popupCloseIcon.length > 0) {
  var _loop2 = function _loop2(_index) {
    var el = popupCloseIcon[_index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  };

  for (var _index = 0; _index < popupCloseIcon.length; _index++) {
    _loop2(_index);
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    var popupActive = document.querySelector(".popup.open");

    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }

    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__window")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive) {
  var doUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (unlock) {
    popupActive.classList.remove("open");

    if (doUnlock) {
      bodyUnLock();

      if (popupActive.classList.contains("popup__video")) {
        frame.setAttribute("src", "");
      }
    }
  }
}

document.addEventListener("keydown", function (e) {
  if (e.which === 27) {
    var popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
}); //guests buttons

var inputGuests = document.querySelector(".book__input-guests");
var minusBtn = document.querySelector(".book__minus");
var plusBtn = document.querySelector(".book__plus");
hideMinus();
inputGuests.addEventListener("blur", function () {
  if (inputGuests.value == "" || inputGuests.value == "0") {
    inputGuests.value = "1";
    hideMinus();
    showPlus();
  } else if (Number(inputGuests.value) > 5) {
    inputGuests.value = "5";
    hidePlus();
    showMinus();
  } else {
    showMinus();
    showPlus();
  }
});
plusBtn.addEventListener("click", function () {
  showMinus();
  inputGuests.stepUp();

  if (Number(inputGuests.value) == 5) {
    hidePlus();
  }
});
minusBtn.addEventListener("click", function () {
  showPlus();
  inputGuests.stepDown();

  if (Number(inputGuests.value) == 1) {
    hideMinus();
  }
});

function hidePlus() {
  plusBtn.classList.add("_no-active-guests");
}

function showPlus() {
  plusBtn.classList.remove("_no-active-guests");
}

function hideMinus() {
  minusBtn.classList.add("_no-active-guests");
}

function showMinus() {
  minusBtn.classList.remove("_no-active-guests");
}

; //hide calendar

var Calendar = document.querySelector(".calendar__wrapper");
var close = document.querySelector(".calendar__hide");
var searchBtn = document.querySelectorAll(".book__search");
var bookDate = document.querySelectorAll(".book__date");
close.addEventListener("click", function () {
  Calendar.classList.add("_hide-calendar");
});
searchBtn.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    for (var i = 0; i < bookDate.length; i++) {
      bookDate[i].classList.remove("_active-search");
    }

    item.lastElementChild.classList.add("_active-search");

    if (Calendar.classList.contains("_hide-calendar")) {
      Calendar.classList.remove("_hide-calendar");
    }
  });
});
var nav = 0;
var calendar = document.querySelector('.days');
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load() {
  var dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  var day = dt.getDate();
  var month = dt.getMonth();
  var year = dt.getFullYear();
  var firstDayOfMonth = new Date(year, month, 1);
  var daysInMonth = new Date(year, month + 1, 0).getDate();
  var dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
  var paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
  document.querySelector('.date__month').innerText = "".concat(dt.toLocaleDateString('en-us', {
    month: 'short'
  }), " ").concat(year);
  calendar.innerHTML = '';

  for (var i = 1; i <= paddingDays + daysInMonth; i++) {
    var daySquare = document.createElement('div');
    daySquare.classList.add('day');

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;

      if (i - paddingDays === day && nav === 0) {
        daySquare.classList.add("today");
      }
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);
  }
}

function renderNextMonth() {
  nav++;
  var calendarSecond = document.querySelector('.days-d');

  function loadSecond() {
    var dt = new Date();

    if (nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }

    var day = dt.getDate();
    var month = dt.getMonth();
    var year = dt.getFullYear();
    var firstDayOfMonth = new Date(year, month, 1);
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });
    var paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    document.querySelector('.month-d').innerText = "".concat(dt.toLocaleDateString('en-us', {
      month: 'short'
    }), " ").concat(year);
    calendarSecond.innerHTML = '';

    for (var i = 1; i <= paddingDays + daysInMonth; i++) {
      var daySquare = document.createElement('div');
      daySquare.classList.add('day');

      if (i > paddingDays) {
        daySquare.innerText = i - paddingDays;

        if (i - paddingDays === day && nav === 0) {
          daySquare.classList.add("today");
        }
      } else {
        daySquare.classList.add('padding');
      }

      calendarSecond.appendChild(daySquare);
    }
  }

  loadSecond();
}

function initButtons() {
  document.querySelector(".calendar__next").addEventListener('click', function () {
    load();
    renderNextMonth();
  });
  document.querySelector(".calendar__prev").addEventListener('click', function () {
    nav--;

    function loadM() {
      nav--;
      var dt = new Date();

      if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
      }

      var day = dt.getDate();
      var month = dt.getMonth();
      var year = dt.getFullYear();
      var firstDayOfMonth = new Date(year, month, 1);
      var daysInMonth = new Date(year, month + 1, 0).getDate();
      var dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      });
      var paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
      document.querySelector('.date__month').innerText = "".concat(dt.toLocaleDateString('en-us', {
        month: 'short'
      }), " ").concat(year);
      calendar.innerHTML = '';

      for (var i = 1; i <= paddingDays + daysInMonth; i++) {
        var daySquare = document.createElement('div');
        daySquare.classList.add('day');

        if (i > paddingDays) {
          daySquare.innerText = i - paddingDays;

          if (i - paddingDays === day && nav === 0) {
            daySquare.classList.add("today");
          }
        } else {
          daySquare.classList.add('padding');
        }

        calendar.appendChild(daySquare);
      }
    }

    function renderNextMonthm() {
      nav++;
      var calendarSecond = document.querySelector('.days-d');

      function loadSecond() {
        var dt = new Date();

        if (nav !== 0) {
          dt.setMonth(new Date().getMonth() + nav);
        }

        var day = dt.getDate();
        var month = dt.getMonth();
        var year = dt.getFullYear();
        var firstDayOfMonth = new Date(year, month, 1);
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        var dateString = firstDayOfMonth.toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        });
        var paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
        document.querySelector('.month-d').innerText = "".concat(dt.toLocaleDateString('en-us', {
          month: 'short'
        }), " ").concat(year);
        calendarSecond.innerHTML = '';

        for (var i = 1; i <= paddingDays + daysInMonth; i++) {
          var daySquare = document.createElement('div');
          daySquare.classList.add('day');
          var dayString = "".concat(month + 1, "/").concat(i - paddingDays, "/").concat(year);

          if (i > paddingDays) {
            daySquare.innerText = i - paddingDays; //   const eventForDay = events.find(e => e.date === dayString);

            if (i - paddingDays === day && nav === 0) {
              daySquare.classList.add("today");
            }
          } else {
            daySquare.classList.add('padding');
          }

          calendarSecond.appendChild(daySquare);
        }
      }

      loadSecond();
    }

    loadM();
    renderNextMonthm();
  });
}

load();
renderNextMonth();
initButtons(); //buttons search

var startDate = document.querySelector(".date-ceck-in");
var lastDate = document.querySelector(".date-ceck-up"); //onload first date

var options = {
  day: 'numeric',
  month: 'numeric',
  year: "numeric"
};
var todayText = new Date().toLocaleString('en-us', options);
var dayArr = document.querySelectorAll(".day");
dayArr.forEach(function (item, index) {
  item.addEventListener("click", function () {
    if (startDate.classList.contains("_active-search")) {
      for (var i = 0; i < dayArr.length; i++) {
        dayArr[i].classList.remove("_checked");
        item.classList.add("_checked");
        startDate.textContent = "".concat(item.textContent, " ").concat(document.querySelector('.date__month').textContent);
      }

      startDate.classList.remove("_active-search");
      lastDate.classList.add("_active-search");
    } else if (lastDate.classList.contains("_active-search")) {
      if (document.querySelector("._checked")) {
        for (var x = 0; x < dayArr.length; x++) {
          dayArr[x].classList.remove("_checked-up");
        }

        item.classList.add("_checked-up");
        lastDate.textContent = "".concat(item.textContent, " ").concat(document.querySelector('.date__month').textContent);
        Calendar.classList.add("_hide-calendar");
      }
    }
  });
});
var tabBtns = document.querySelectorAll(".hut-sliders__btn");
var tabContent = document.querySelectorAll(".hut-sliders__text");
tabBtns.forEach(function (item, index) {
  item.addEventListener("click", function () {
    var arrSisters = item.parentElement.children;
    var arrContent = tabContent[index].parentElement.children;

    for (var i = 0; i < arrSisters.length; i++) {
      arrSisters[i].classList.remove("_active-tab");
      arrContent[i].classList.remove("_active-tab");
    }

    item.classList.add("_active-tab");
    tabContent[index].classList.add("_active-tab");
  });
}); //label-top

document.addEventListener("DOMContentLoaded", function () {
  var input = document.querySelectorAll(".input-form");

  var _loop3 = function _loop3(i) {
    input[i].addEventListener("focus", function (e) {
      input[i].previousElementSibling.classList.add("_focus-input");
    });
    input[i].addEventListener("blur", function (e) {
      if (input[i].value === "") {
        input[i].previousElementSibling.classList.remove("_focus-input");
      }
    });
  };

  for (var i = 0; i < input.length; i++) {
    _loop3(i);
  }
}); //валидация
// document.addEventListener("DOMContentLoaded", () => {
//     "use strict";
//     const forms = document.forms;
//     for (let n = 0; n < forms.length; n++) {
//         const form = forms[n];
//         const inputs = form.querySelectorAll("input");
//         for (let i = 0; i < inputs.length; i++) {
//             let input = inputs[i];
//             let err = document.querySelector(`#${input.id} + span.errors`);
//             const password = form.querySelector(".password");
//             const confirmPassword = form.querySelector(".passwordConfirm");
//             let helperChange = document.querySelector(`#${input.id} ~ span.helper-text`);
//             if (confirmPassword) {
//                 input.addEventListener("blur", function () {
//                     if (input == confirmPassword) {
//                         if (input.validity.valueMissing) {
//                             hideError(input, err);
//                         }
//                         else if (confirmPassword.value !== password.value) {
//                             err.textContent = `Пароли не совпадают.`;
//                             showInvalid(input, err);
//                         }
//                         else if (input.validity.valid || input.validity.valueMissing) {
//                             hideError(input, err);
//                         } else {
//                             showErrorBlur(input, err);
//                         }
//                     }
//                     else if (input.validity.valid || input.validity.valueMissing) {
//                         hideError(input, err);
//                     } else {
//                         showErrorBlur(input, err);
//                     }
//                 });
//                 input.addEventListener("input", function () {
//                     if (input == confirmPassword) {
//                         if (confirmPassword.value !== password.value) {
//                             err.textContent = `Пароли не совпадают.`;
//                             showInvalid(input, err);
//                             input.classList.remove("_valid");
//                             helperChange.textName = "helper-check";
//                             helperChange.textContent = "?";
//                         }
//                         else if (input.validity.valid) {
//                             input.classList.add("_valid");
//                             helperChange.className = "helper-check";
//                             helperChange.textContent = "+";
//                             err.textContent = "";
//                             err.className = "errors";
//                         } else {
//                             hideValid(input, err, helperChange);
//                         }
//                     }
//                     else if (input.validity.valid) {
//                         input.classList.add("_valid");
//                         err.textContent = "";
//                         if (input !== document.querySelector(".checkbox")) {
//                             helperChange.className = "helper-check";
//                             helperChange.textContent = "+";
//                         }
//                     } else {
//                         hideValid(input, err, helperChange);
//                     }
//                 });
//                 form.addEventListener("submit", formSend);
//                 async function formSend(e) {
//                     if (input == confirmPassword) {
//                         if (confirmPassword.value !== password.value) {
//                             err.textContent = `Пароли не совпадают.`;
//                             showInvalid(input, err);
//                             input.classList.remove("_valid");
//                             helperChange.textName = "helper-check";
//                             helperChange.textContent = "?";
//                             e.preventDefault();
//                         }
//                         else if (!input.validity.valid) {
//                             showErrorSubmit(input, err);
//                             e.preventDefault();
//                         }
//                     }
//                     else if (!input.validity.valid || confirmPassword.value !== password.value) {
//                         showErrorSubmit(input, err);
//                         e.preventDefault();
//                     }
//                     else if (inputs[0].validity.valid && inputs[1].validity.valid && inputs[2].validity.valid && inputs[3].validity.valid && inputs[4].validity.valid && confirmPassword.value == password.value) {
//                         e.preventDefault();
//                         form.classList.add("_sending");
//                         let response = await fetch("sendmail.php", {
//                             method: "POST"
//                         });
//                         if (response.ok) {
//                             let result = await response.json();
//                             alert(result.message);
//                             form.reset();
//                             form.classList.remove("_sending");
//                         }
//                         else {
//                             alert("Ошибка");
//                             form.classList.remove("_sending");
//                         }
//                     }
//                 }
//             }
//             else if (input !== document.querySelector(".check-m")) {
//                 input.addEventListener("blur", function () {
//                     if (input.validity.valid || input.validity.valueMissing) {
//                         hideError(input, err)
//                     } else {
//                         showErrorBlur(input, err);
//                     }
//                 });
//                 input.addEventListener("input", function () {
//                     if (input.validity.valid) {
//                         input.classList.add("_valid");
//                         err.textContent = "";
//                     } else {
//                         err.textContent = "";
//                         err.className = "errors";
//                         input.classList.remove("_valid");
//                     }
//                 });
//                 form.addEventListener("submit", formSend);
//                 async function formSend(e) {
//                     if (!input.validity.valid) {
//                         showErrorSubmit(input, err);
//                         e.preventDefault();
//                     }
//                     else if (inputs[0].validity.valid && inputs[1].validity.valid) {
//                         e.preventDefault();
//                         form.classList.add("_sending");
//                         let response = await fetch("serv/server.php", {
//                             method: "POST",
//                             body: data
//                         });
//                         if (response.ok) {
//                             let result = await response.text();
//                             let success = document.createElement("div.succses");
//                             document.querySelector(".popap-in").classList.add("_result");
//                             success.innerHTML = `<p>Авторизация успешна. ${result.message}</p> <button>Ок</button>`;
//                             form.replaceWith(success);
//                         }
//                         else {
//                             alert("Ошибка");
//                             form.classList.remove("_sending");
//                         }
//                     }
//                 }
//             }
//         }
//         function showErrorBlur(input, err) {
//             if (input.validity.tooShort) {
//                 err.textContent = `Введите минимум ${input.minLength} символов.`;
//             }
//             else if (input.validity.typeMismatch) {
//                 err.textContent = 'Не соотвествие формату поля';
//             }
//             else if (input.validity.patternMismatch) {
//                 err.textContent = 'Не соотвествие формату поля, смотрите требования в подсказке';
//             }
//             showInvalid(input, err);
//         }
//         function showErrorSubmit(input, err) {
//             if (input.validity.valueMissing) {
//                 if (input == document.querySelector(".checkbox")) {
//                     err.textContent = 'Подтвердите согласие на обработку данных';
//                 }
//                 else {
//                     err.textContent = 'Поле не должно быть пустым';
//                 }
//             }
//             else if (input.validity.patternMismatch) {
//                 err.textContent = 'Не соотвествие формату поля, смотрите требования в подсказке';
//             }
//             else if (input.validity.tooShort) {
//                 err.textContent = `Введите минимум ${input.minLength} символов.`;
//             }
//             else if (input.validity.typeMismatch) {
//                 err.textContent = 'Не соотвествие формату поля';
//             }
//             showInvalid(input, err);
//         }
//         function hideError(input, err) {
//             err.textContent = "";
//             err.className = "errors";
//             input.classList.remove("_active");
//         }
//         function hideValid(input, err, helperChange) {
//             err.textContent = "";
//             err.className = "errors";
//             input.classList.remove("_valid");
//             if (input !== document.querySelector(".checkbox")) {
//                 helperChange.className = "helper-text";
//                 helperChange.textContent = "?";
//             }
//         }
//         function showInvalid(input, err) {
//             err.className = 'errors _null';
//             input.classList.add("_active");
//         }
//     }
// });;

"use strict";

var spollersArray = document.querySelectorAll("[data-spollers]");

if (spollersArray.length > 0) {
  var initSpollers = function initSpollers(spollersArray) {
    var matchMedia = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    spollersArray.forEach(function (spollersBlock) {
      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;

      if (matchMedia.matches || !matchMedia) {
        spollersBlock.classList.add("_init");
        initSpollerBody(spollersBlock);
        spollersBlock.addEventListener("click", setSpollerAction);
      } else {
        spollersBlock.classList.remove("_init");
        initSpollerBody(spollersBlock, false);
        spollersBlock.removeEventListener("click", setSpollerAction);
      }
    });
  };

  var initSpollerBody = function initSpollerBody(spollersBlock) {
    var hideSpollerBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");

    if (spollerTitles.length > 0) {
      spollerTitles.forEach(function (spollerTitle) {
        if (hideSpollerBody) {
          spollerTitle.removeAttribute("tabindex");

          if (!spollerTitle.classList.contains("_close-spr")) {
            spollerTitle.nextElementSibling.hidden = true;
          }
        } else {
          spollerTitle.setAttribute("tabindex", "-1");
          spollerTitle.nextElementSibling.hidden = false;
        }
      });
    }
  };

  var setSpollerAction = function setSpollerAction(e) {
    var el = e.target;

    if (el.hasAttribute("data-spoller") || el.closest("[data-spoller]")) {
      var spollerTitle = el.hasAttribute("data-spoller") ? el : el.closest("[data-spoller]");
      var spollersBlock = spollerTitle.closest("[data-spollers]");
      var oneSpoller = spollersBlock.hasAttribute("data-one-spoller") ? true : false;

      if (!spollersBlock.querySelectorAll("._slide").length) {
        if (oneSpoller && !spollerTitle.classList.contains("_close-spr")) {
          hideSpollersBody(spollersBlock);
        }

        spollerTitle.classList.toggle("_close-spr");

        _slideToggle(spollerTitle.nextElementSibling, 500);
      }

      e.preventDefault();
    }
  };

  var hideSpollersBody = function hideSpollersBody(spollersBlock) {
    var spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._close-spr");

    if (spollerActiveTitle) {
      spollerActiveTitle.classList.remove("_close-spr");

      _slideUp(spollerActiveTitle.nextElementSibling, 500);
    }
  };

  var spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
    return !item.dataset.spollers.split(",")[0];
  });

  if (spollersRegular.length > 0) {
    initSpollers(spollersRegular);
  }

  var spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
    return item.dataset.spollers.split(",")[0];
  });

  if (spollersMedia.length > 0) {
    var breakpointsArray = [];
    spollersMedia.forEach(function (item) {
      var params = item.dataset.spollers;
      var breakpoint = {};
      var paramsArray = params.split(",");
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });
    var mediaQueries = breakpointsArray.map(function (item) {
      return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
    });
    mediaQueries = mediaQueries.filter(function (item, index, self) {
      return self.indexOf(item) === index;
    });
    mediaQueries.forEach(function (breakpoint) {
      var paramsArray = breakpoint.split(",");
      var mediaBreakpoint = paramsArray[1];
      var mediaType = paramsArray[2];
      var matchMedia = window.matchMedia(paramsArray[0]);
      var spollersArray = breakpointsArray.filter(function (item) {
        if (item.value === mediaBreakpoint && item.type === mediaType) {
          return true;
        }
      });
      matchMedia.addListener(function () {
        initSpollers(spollersArray, matchMedia);
      });
      initSpollers(spollersArray, matchMedia);
    });
  }
}

var _slideUp = function _slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(function () {
      target.hidden = true;
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
    }, duration);
  }
};

var _slideDown = function _slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");

    if (target.hidden) {
      target.hidden = false;
    }

    var height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(function () {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
    }, duration);
  }
};

var _slideToggle = function _slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};

; // ================= add box-shadow header, if confirm page ================

if (document.querySelector(".confirm")) {
  document.querySelector(".header__wrapper").style.boxShadow = "2px 0px 20px rgba(0, 0, 0, 0.1)";
} //================ tel mask ==============================


window.addEventListener("DOMContentLoaded", function () {
  var telInput = document.querySelector("#phone");
  [].forEach.call(document.querySelectorAll('#phone'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+44 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = new_value.indexOf("_");

      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }

      var reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 6 || keyCode > 47 && keyCode < 58) this.value = new_value;

      if (event.type == "blur" && this.value.length < 6) {
        this.value = "";
        telInput.previousElementSibling.classList.remove("_focus-input");
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
}); //=========================================================

window.addEventListener('DOMContentLoaded', function () {
  var selects = document.querySelectorAll(".select");
  var optionLists = document.querySelectorAll(".option-list");
  var selectLang = document.querySelector(".select-lang");
  var selectTel = document.querySelector(".select-code");
  var selectCountry = document.querySelector(".country");
  var card = document.querySelector(".card");
  var langOptions = document.querySelectorAll(".select-lang__option");
  var codeOptions = document.querySelectorAll(".select-code__option");
  var countryOptions = document.querySelectorAll(".country__option");
  var cardOptions = document.querySelectorAll(".card__option");
  selects.forEach(function (select, i) {
    var selectParent = select.parentElement;
    select.addEventListener("click", function () {
      optionLists[i].classList.toggle("_show-list");
      select.classList.toggle("_selected");
    });
    localChanges(selectParent, select);
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".select")) {
        for (var n = 0; n < optionLists.length; n++) {
          optionLists[n].classList.remove("_show-list");
          select.classList.remove("_selected");
        }
      }
    });
  });

  function localChanges(selectParent, select) {
    switch (selectParent) {
      case selectLang:
        langOptions.forEach(function (item) {
          item.addEventListener("click", function () {
            item.prepend(select.firstElementChild);
            select.prepend(item.lastElementChild);
            select.nextElementSibling.classList.remove("_show-list");
            select.classList.remove("_selected");
          });
        });
        break;

      case selectTel:
        codeOptions.forEach(function (item) {
          item.addEventListener("click", function () {
            select.append(item.firstElementChild);
            item.append(select.firstElementChild);
            select.nextElementSibling.classList.remove("_show-list");
            select.classList.remove("_selected");
          });
        });
        break;

      case selectCountry:
        countryOptions.forEach(function (item) {
          item.addEventListener("click", function () {
            var countryValue = document.querySelector(".country__btn");
            countryValue.value = item.firstElementChild.value;
            countryValue.focus();
          });
        });
        break;

      case card:
        cardOptions.forEach(function (item) {
          item.addEventListener("click", function () {
            var cardValue = document.querySelector(".card__btn");
            cardValue.value = item.firstElementChild.value;
            cardValue.focus();
          });
        });
        break;
    }
  }
});
;
'use strict'; // polyfill


function polyfill() {
  // aliases
  var w = window;
  var d = document; // return if scroll behavior is supported and polyfill is not forced

  if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
    return;
  } // globals


  var Element = w.HTMLElement || w.Element;
  var SCROLL_TIME = 468; // object gathering original scroll methods

  var original = {
    scroll: w.scroll || w.scrollTo,
    scrollBy: w.scrollBy,
    elementScroll: Element.prototype.scroll || scrollElement,
    scrollIntoView: Element.prototype.scrollIntoView
  }; // define timing method

  var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
  /**
   * indicates if a the current browser is made by Microsoft
   * @method isMicrosoftBrowser
   * @param {String} userAgent
   * @returns {Boolean}
   */

  function isMicrosoftBrowser(userAgent) {
    var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
    return new RegExp(userAgentPatterns.join('|')).test(userAgent);
  }
  /*
   * IE has rounding bug rounding down clientHeight and clientWidth and
   * rounding up scrollHeight and scrollWidth causing false positives
   * on hasScrollableSpace
   */


  var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
  /**
   * changes scroll position inside an element
   * @method scrollElement
   * @param {Number} x
   * @param {Number} y
   * @returns {undefined}
   */

  function scrollElement(x, y) {
    this.scrollLeft = x;
    this.scrollTop = y;
  }
  /**
   * returns result of applying ease math function to a number
   * @method ease
   * @param {Number} k
   * @returns {Number}
   */


  function ease(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  }
  /**
   * indicates if a smooth behavior should be applied
   * @method shouldBailOut
   * @param {Number|Object} firstArg
   * @returns {Boolean}
   */


  function shouldBailOut(firstArg) {
    if (firstArg === null || _typeof(firstArg) !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
      // first argument is not an object/null
      // or behavior is auto, instant or undefined
      return true;
    }

    if (_typeof(firstArg) === 'object' && firstArg.behavior === 'smooth') {
      // first argument is an object and behavior is smooth
      return false;
    } // throw error when behavior is not supported


    throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
  }
  /**
   * indicates if an element has scrollable space in the provided axis
   * @method hasScrollableSpace
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */


  function hasScrollableSpace(el, axis) {
    if (axis === 'Y') {
      return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
    }

    if (axis === 'X') {
      return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
    }
  }
  /**
   * indicates if an element has a scrollable overflow property in the axis
   * @method canOverflow
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */


  function canOverflow(el, axis) {
    var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
    return overflowValue === 'auto' || overflowValue === 'scroll';
  }
  /**
   * indicates if an element can be scrolled in either axis
   * @method isScrollable
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */


  function isScrollable(el) {
    var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
    var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
    return isScrollableY || isScrollableX;
  }
  /**
   * finds scrollable parent of an element
   * @method findScrollableParent
   * @param {Node} el
   * @returns {Node} el
   */


  function findScrollableParent(el) {
    while (el !== d.body && isScrollable(el) === false) {
      el = el.parentNode || el.host;
    }

    return el;
  }
  /**
   * self invoked function that, given a context, steps through scrolling
   * @method step
   * @param {Object} context
   * @returns {undefined}
   */


  function step(context) {
    var time = now();
    var value;
    var currentX;
    var currentY;
    var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

    elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

    value = ease(elapsed);
    currentX = context.startX + (context.x - context.startX) * value;
    currentY = context.startY + (context.y - context.startY) * value;
    context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

    if (currentX !== context.x || currentY !== context.y) {
      w.requestAnimationFrame(step.bind(w, context));
    }
  }
  /**
   * scrolls window or element with a smooth behavior
   * @method smoothScroll
   * @param {Object|Node} el
   * @param {Number} x
   * @param {Number} y
   * @returns {undefined}
   */


  function smoothScroll(el, x, y) {
    var scrollable;
    var startX;
    var startY;
    var method;
    var startTime = now(); // define scroll context

    if (el === d.body) {
      scrollable = w;
      startX = w.scrollX || w.pageXOffset;
      startY = w.scrollY || w.pageYOffset;
      method = original.scroll;
    } else {
      scrollable = el;
      startX = el.scrollLeft;
      startY = el.scrollTop;
      method = scrollElement;
    } // scroll looping over a frame


    step({
      scrollable: scrollable,
      method: method,
      startTime: startTime,
      startX: startX,
      startY: startY,
      x: x,
      y: y
    });
  } // ORIGINAL METHODS OVERRIDES
  // w.scroll and w.scrollTo


  w.scroll = w.scrollTo = function () {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    } // avoid smooth behavior if not required


    if (shouldBailOut(arguments[0]) === true) {
      original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
      arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
      return;
    } // LET THE SMOOTHNESS BEGIN!


    smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
  }; // w.scrollBy


  w.scrollBy = function () {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    } // avoid smooth behavior if not required


    if (shouldBailOut(arguments[0])) {
      original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
      return;
    } // LET THE SMOOTHNESS BEGIN!


    smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
  }; // Element.prototype.scroll and Element.prototype.scrollTo


  Element.prototype.scroll = Element.prototype.scrollTo = function () {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    } // avoid smooth behavior if not required


    if (shouldBailOut(arguments[0]) === true) {
      // if one number is passed, throw error to match Firefox implementation
      if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
        throw new SyntaxError('Value could not be converted');
      }

      original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
      arguments[0].left !== undefined ? ~~arguments[0].left : _typeof(arguments[0]) !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
      arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
      return;
    }

    var left = arguments[0].left;
    var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

    smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
  }; // Element.prototype.scrollBy


  Element.prototype.scrollBy = function () {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    } // avoid smooth behavior if not required


    if (shouldBailOut(arguments[0]) === true) {
      original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
      return;
    }

    this.scroll({
      left: ~~arguments[0].left + this.scrollLeft,
      top: ~~arguments[0].top + this.scrollTop,
      behavior: arguments[0].behavior
    });
  }; // Element.prototype.scrollIntoView


  Element.prototype.scrollIntoView = function () {
    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
      return;
    } // LET THE SMOOTHNESS BEGIN!


    var scrollableParent = findScrollableParent(this);
    var parentRects = scrollableParent.getBoundingClientRect();
    var clientRects = this.getBoundingClientRect();

    if (scrollableParent !== d.body) {
      // reveal element inside parent
      smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top); // reveal parent in viewport unless is fixed

      if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
        w.scrollBy({
          left: parentRects.left,
          top: parentRects.top,
          behavior: 'smooth'
        });
      }
    } else {
      // reveal element in viewport
      w.scrollBy({
        left: clientRects.left,
        top: clientRects.top,
        behavior: 'smooth'
      });
    }
  };
}

if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
  // commonjs
  module.exports = {
    polyfill: polyfill
  };
} else {
  // global
  polyfill();
}

;
var langBtns = document.querySelectorAll(".select-lang__option");
var alllang = ["en", "ic", "ge"];
langBtns.forEach(function (langBtn) {
  langBtn.addEventListener("click", changeUrlLang);

  function changeUrlLang() {
    var lang = langBtn.firstElementChild.dataset.lang;
    location.href = window.location.pathname + "#" + lang;
  }
});
;

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

function bodyLock() {
  var lockPaddingValue = window.innerWidth - document.querySelector(".content").offsetWidth + "px";

  if (lockPadding.length > 0) {
    for (var _index2 = 0; _index2 < lockPadding.length; _index2++) {
      var el = lockPadding[_index2];
      el.style.paddingRight = lockPaddingValue;
    }
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add("lock");
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    for (var _index3 = 0; _index3 < lockPadding.length; _index3++) {
      var el = lockPadding[_index3];
      el.style.paddingRight = "0px";
    }

    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

new Vivus('my-svg', {
  type: 'delayed',
  duration: 200
});
AOS.init({
  disable: "mobile",
  once: true,
  duration: 1500
}); //=========================link-more========================

if (document.querySelector(".link-more")) {
  var linksMore = document.querySelectorAll(".link-more");

  var _forestMap = document.querySelector(".map-block");

  linksMore.forEach(function (item, index) {
    item.addEventListener("click", function () {
      if (item.textContent === "Read More") {
        item.textContent = "Hide More";

        if (item.classList.contains("forest__link")) {
          _forestMap.classList.add("_bottom-m");
        }
      } else {
        item.textContent = "Read More";

        if (item.classList.contains("forest__link")) {
          _forestMap.classList.remove("_bottom-m");
        }
      }

      item.previousElementSibling.classList.toggle("_alltext");
    });
  });
} //==========================================================


if (document.querySelector(".contact-us__input")) {
  (function () {
    var getInputFocus = function getInputFocus() {
      var input = document.querySelector(".contact-us__input");
      input.focus();
    };

    var anchors = document.querySelectorAll('.anchor-link');

    var _iterator2 = _createForOfIteratorHelper(anchors),
        _step2;

    try {
      var _loop4 = function _loop4() {
        var anchor = _step2.value;
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          if (anchor == document.querySelector(".anchor-link")) {
            setTimeout(getInputFocus, 500);
          }

          var blockID = anchor.getAttribute('href').substr(1);
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        });
      };

      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        _loop4();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  })();
} //=================================================================


var bbbb = document.querySelectorAll("._h2-title");
console.log(bbbb);