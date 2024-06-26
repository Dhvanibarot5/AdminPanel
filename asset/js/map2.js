!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).jsVectorMap = e()
}(this, (function() {
    "use strict";
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) {
        for (var e = (this.document || this.ownerDocument).querySelectorAll(t), i = e.length; --i >= 0 && e.item(i) !== this; )
            ;
        return i > -1
    }
    ),
    Object.assign || Object.defineProperty(Object, "assign", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(t) {
            if (null == t)
                throw new TypeError("Cannot convert first argument to object");
            for (var e = Object(t), i = 1; i < arguments.length; i++) {
                var s = arguments[i];
                if (null != s) {
                    s = Object(s);
                    for (var a = Object.keys(Object(s)), n = 0, r = a.length; n < r; n++) {
                        var o = a[n]
                          , h = Object.getOwnPropertyDescriptor(s, o);
                        void 0 !== h && h.enumerable && (e[o] = s[o])
                    }
                }
            }
            return e
        }
    });
    var t = function(t) {
        return function(t) {
            return !!t && "object" == typeof t
        }(t) && !function(t) {
            var i = Object.prototype.toString.call(t);
            return "[object RegExp]" === i || "[object Date]" === i || function(t) {
                return t.$$typeof === e
            }(t)
        }(t)
    };
    var e = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
    function i(t, e) {
        return !1 !== e.clone && e.isMergeableObject(t) ? o((i = t,
        Array.isArray(i) ? [] : {}), t, e) : t;
        var i
    }
    function s(t, e, s) {
        return t.concat(e).map((function(t) {
            return i(t, s)
        }
        ))
    }
    function a(t) {
        return Object.keys(t).concat(function(t) {
            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter((function(e) {
                return t.propertyIsEnumerable(e)
            }
            )) : []
        }(t))
    }
    function n(t, e) {
        try {
            return e in t
        } catch (t) {
            return !1
        }
    }
    function r(t, e, s) {
        var r = {};
        return s.isMergeableObject(t) && a(t).forEach((function(e) {
            r[e] = i(t[e], s)
        }
        )),
        a(e).forEach((function(a) {
            (function(t, e) {
                return n(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e))
            }
            )(t, a) || (n(t, a) && s.isMergeableObject(e[a]) ? r[a] = function(t, e) {
                if (!e.customMerge)
                    return o;
                var i = e.customMerge(t);
                return "function" == typeof i ? i : o
            }(a, s)(t[a], e[a], s) : r[a] = i(e[a], s))
        }
        )),
        r
    }
    var o = function(e, a, n) {
        (n = n || {}).arrayMerge = n.arrayMerge || s,
        n.isMergeableObject = n.isMergeableObject || t,
        n.cloneUnlessOtherwiseSpecified = i;
        var o = Array.isArray(a);
        return o === Array.isArray(e) ? o ? n.arrayMerge(e, a, n) : r(e, a, n) : i(a, n)
    }
      , h = function(t) {
        return "object" == typeof t && void 0 !== t.nodeType ? t : "string" == typeof t ? document.querySelector(t) : null
    }
      , l = function(t, e, i, s) {
        void 0 === s && (s = !1);
        var a = document.createElement(t);
        return i && (a[s ? "innerHTML" : "textContent"] = i),
        e && (a.className = e),
        a
    }
      , c = function(t) {
        t.parentNode.removeChild(t)
    }
      , u = function(t, e, i) {
        return void 0 === i && (i = !1),
        i ? o(t, e) : Object.assign(t, e)
    };
    function p(t, e) {
        t.prototype = Object.create(e.prototype),
        t.prototype.constructor = t,
        d(t, e)
    }
    function d(t, e) {
        return d = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        d(t, e)
    }
    var f = function() {
        function t(t, e) {
            this.node = this.createElement(t),
            e && this.set(e)
        }
        var e = t.prototype;
        return e.createElement = function(t) {
            return document.createElementNS("http://www.w3.org/2000/svg", t)
        }
        ,
        e.addClass = function(t) {
            this.node.setAttribute("class", t)
        }
        ,
        e.getBBox = function() {
            return this.node.getBBox()
        }
        ,
        e.set = function(t, e) {
            if ("object" == typeof t)
                for (var i in t)
                    this.applyAttr(i, t[i]);
            else
                this.applyAttr(t, e)
        }
        ,
        e.get = function(t) {
            return this.style.initial[t]
        }
        ,
        e.applyAttr = function(t, e) {
            this.node.setAttribute(t.replace(/[\w]([A-Z])/g, (function(t) {
                return t[0] + "-" + t[1]
            }
            )).toLowerCase(), e)
        }
        ,
        e.remove = function() {
            c(this.node)
        }
        ,
        t
    }()
      , m = function(t) {
        function e(e, i, s) {
            var a;
            return void 0 === s && (s = {}),
            (a = t.call(this, e, i) || this).isHovered = !1,
            a.isSelected = !1,
            a.style = s,
            a.style.current = {},
            a.updateStyle(),
            a
        }
        p(e, t);
        var i = e.prototype;
        return i.setStyle = function(t, e) {
            var i;
            "object" == typeof t ? u(this.style.current, t) : u(this.style.current, ((i = {})[t] = e,
            i));
            this.updateStyle()
        }
        ,
        i.updateStyle = function() {
            var t = {};
            u(t, this.style.initial),
            u(t, this.style.current),
            this.isHovered && u(t, this.style.hover),
            this.isSelected && (u(t, this.style.selected),
            this.isHovered && u(t, this.style.selectedHover)),
            this.set(t)
        }
        ,
        e
    }(f)
      , g = function(t) {
        function e(e, i) {
            return t.call(this, "text", e, i) || this
        }
        return p(e, t),
        e.prototype.applyAttr = function(e, i) {
            "text" === e ? this.node.textContent = i : t.prototype.applyAttr.call(this, e, i)
        }
        ,
        e
    }(m)
      , v = function(t) {
        function e(e, i) {
            return t.call(this, "image", e, i) || this
        }
        return p(e, t),
        e.prototype.applyAttr = function(e, i) {
            var s;
            "image" === e ? ("object" == typeof i ? (s = i.url,
            this.offset = i.offset || [0, 0]) : (s = i,
            this.offset = [0, 0]),
            this.node.setAttributeNS("http://www.w3.org/1999/xlink", "href", s),
            this.width = 23,
            this.height = 23,
            this.applyAttr("width", this.width),
            this.applyAttr("height", this.height),
            this.applyAttr("x", this.cx - this.width / 2 + this.offset[0]),
            this.applyAttr("y", this.cy - this.height / 2 + this.offset[1])) : "cx" == e ? (this.cx = i,
            this.width && this.applyAttr("x", i - this.width / 2 + this.offset[0])) : "cy" == e ? (this.cy = i,
            this.height && this.applyAttr("y", i - this.height / 2 + this.offset[1])) : t.prototype.applyAttr.apply(this, arguments)
        }
        ,
        e
    }(m)
      , y = function(t) {
        function e(e) {
            var i;
            return (i = t.call(this, "svg") || this)._container = e,
            i._defsElement = new f("defs"),
            i._rootElement = new f("g",{
                id: "jvm-regions-group"
            }),
            i.node.appendChild(i._defsElement.node),
            i.node.appendChild(i._rootElement.node),
            i._container.appendChild(i.node),
            i
        }
        p(e, t);
        var i = e.prototype;
        return i.setSize = function(t, e) {
            this.node.setAttribute("width", t),
            this.node.setAttribute("height", e)
        }
        ,
        i.applyTransformParams = function(t, e, i) {
            this._rootElement.node.setAttribute("transform", "scale(" + t + ") translate(" + e + ", " + i + ")")
        }
        ,
        i.createPath = function(t, e) {
            var i = new m("path",t,e);
            return i.node.setAttribute("fill-rule", "evenodd"),
            this.add(i)
        }
        ,
        i.createCircle = function(t, e, i) {
            var s = new m("circle",t,e);
            return this.add(s, i)
        }
        ,
        i.createLine = function(t, e, i) {
            var s = new m("line",t,e);
            return this.add(s, i)
        }
        ,
        i.createText = function(t, e, i) {
            var s = new g(t,e);
            return this.add(s, i)
        }
        ,
        i.createImage = function(t, e, i) {
            var s = new v(t,e);
            return this.add(s, i)
        }
        ,
        i.createGroup = function(t) {
            var e = new f("g");
            return this.node.appendChild(e.node),
            t && (e.node.id = t),
            e.canvas = this,
            e
        }
        ,
        i.add = function(t, e) {
            return (e = e || this._rootElement).node.appendChild(t.node),
            t
        }
        ,
        e
    }(f)
      , b = {}
      , S = 1
      , w = {
        on: function(t, e, i, s) {
            void 0 === s && (s = {});
            var a = "jvm:" + e + "::" + S++;
            b[a] = {
                selector: t,
                handler: i
            },
            i._uid = a,
            t.addEventListener(e, i, s)
        },
        delegate: function(t, e, i, s) {
            (e = e.split(" ")).forEach((function(e) {
                w.on(t, e, (function(t) {
                    var e = t.target;
                    e.matches(i) && s.call(e, t)
                }
                ))
            }
            ))
        },
        off: function(t, e, i) {
            var s = e.split(":")[1];
            t.removeEventListener(s, i),
            delete b[i._uid]
        },
        getEventRegistry: function() {
            return b
        }
    };
    function x(t, e, i) {
        var s = h(e)
          , a = -1 === s.getAttribute("class").indexOf("jvm-region") ? "marker" : "region"
          , n = "region" === a ? s.getAttribute("data-code") : s.getAttribute("data-index")
          , r = a + ":selected";
        return i && (r = a + ".tooltip:show"),
        {
            event: r,
            type: a,
            code: n,
            element: "region" === a ? t.regions[n].element : t.markers[n].element,
            tooltipText: "region" === a ? t.mapData.paths[n].name || "" : t.markers[n].config.name || ""
        }
    }
    var k = function() {
        function t() {}
        var e = t.prototype;
        return e.getLabelText = function(t, e) {
            if (e) {
                if ("function" == typeof e.render) {
                    var i = [];
                    return this.config.marker && i.push(this.config.marker),
                    i.push(t),
                    e.render.apply(this, i)
                }
                return t
            }
        }
        ,
        e.getLabelOffsets = function(t, e) {
            return "function" == typeof e.offsets ? e.offsets(t) : Array.isArray(e.offsets) ? e.offsets[t] : [0, 0]
        }
        ,
        e.setStyle = function(t, e) {
            this.shape.setStyle(t, e)
        }
        ,
        e.remove = function() {
            this.shape.remove(),
            this.label && this.label.remove()
        }
        ,
        e.hover = function(t) {
            this._setStatus("isHovered", t)
        }
        ,
        e.select = function(t) {
            this._setStatus("isSelected", t)
        }
        ,
        e._setStatus = function(t, e) {
            this.shape[t] = e,
            this.shape.updateStyle(),
            this[t] = e,
            this.label && (this.label[t] = e,
            this.label.updateStyle())
        }
        ,
        t
    }()
      , M = function(t) {
        function e(e) {
            var i, s = e.map, a = e.code, n = e.path, r = e.style, o = e.label, h = e.labelStyle, l = e.labelsGroup;
            (i = t.call(this) || this).config = arguments[0],
            i.canvas = s.canvas,
            i.map = s,
            i.shape = i.canvas.createPath({
                d: n,
                dataCode: a
            }, r),
            i.shape.addClass("jvm-region jvm-element");
            var c = i.shape.getBBox()
              , u = i.getLabelText(a, o);
            if (o && u) {
                var p = i.getLabelOffsets(a);
                i.labelX = c.x + c.width / 2 + p[0],
                i.labelY = c.y + c.height / 2 + p[1],
                i.label = i.canvas.createText({
                    text: u,
                    textAnchor: "middle",
                    alignmentBaseline: "central",
                    dataCode: a,
                    x: i.labelX,
                    y: i.labelY
                }, h, l),
                i.label.addClass("jvm-region jvm-element")
            }
            return i
        }
        return p(e, t),
        e.prototype.updateLabelPosition = function() {
            this.label && this.label.set({
                x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
                y: this.labelY * this.map.scale + this.map.transY * this.map.scale
            })
        }
        ,
        e
    }(k);
    var _ = function(t) {
        function e(e) {
            var i, s = e.index, a = e.map, n = e.style, r = e.x1, o = e.y1, h = e.x2, l = e.y2, c = e.group;
            return (i = t.call(this) || this).shape = a.canvas.createLine({
                x1: r,
                y1: o,
                x2: h,
                y2: l,
                dataIndex: s
            }, n, c),
            i.shape.addClass("jvm-line"),
            i
        }
        return p(e, t),
        e
    }(k);
    function j(t, e) {
        return t.toLowerCase() + ":to:" + e.toLowerCase()
    }
    var C = function(t) {
        function e(e) {
            var i, s = e.index, a = e.style, n = e.label, r = e.cx, o = e.cy, h = e.map, l = e.group;
            return (i = t.call(this) || this)._map = h,
            i._isImage = !!a.initial.image,
            i.config = arguments[0],
            i.shape = h.canvas[i._isImage ? "createImage" : "createCircle"]({
                dataIndex: s,
                cx: r,
                cy: o
            }, i._getStyle(), l),
            i.shape.addClass("jvm-marker jvm-element"),
            i._isImage && i.updateLabelPosition(),
            n && i._createLabel(i.config),
            i
        }
        p(e, t);
        var i = e.prototype;
        return i.updateLabelPosition = function() {
            this.label && this.label.set({
                x: this._labelX * this._map.scale + this._offsets[0] + this._map.transX * this._map.scale + 5 + (this._isImage ? (this.shape.width || 0) / 2 : this.shape.node.r.baseVal.value),
                y: this._labelY * this._map.scale + this._map.transY * this._map.scale + this._offsets[1]
            })
        }
        ,
        i._createLabel = function(t) {
            var e = t.index
              , i = t.map
              , s = t.label
              , a = t.labelsGroup
              , n = t.cx
              , r = t.cy
              , o = t.marker
              , h = t.isRecentlyCreated
              , l = this.getLabelText(e, s);
            this._labelX = n / i.scale - i.transX,
            this._labelY = r / i.scale - i.transY,
            this._offsets = h && o.offsets ? o.offsets : this.getLabelOffsets(e, s),
            this.label = i.canvas.createText({
                text: l,
                dataIndex: e,
                x: this._labelX,
                y: this._labelY,
                dy: "0.6ex"
            }, i.params.markerLabelStyle, a),
            this.label.addClass("jvm-marker jvm-element"),
            h && this.updateLabelPosition()
        }
        ,
        i._getStyle = function() {
            var t = {};
            return this._isImage ? t.initial = {
                image: this.config.style.initial.image
            } : t = this.config.style,
            t
        }
        ,
        e
    }(k);
    var X = function() {
        function t(t) {
            void 0 === t && (t = {}),
            this._options = t,
            this._map = this._options.map,
            this._series = this._options.series,
            this._body = l("div", "jvm-legend"),
            this._options.cssClass && this._body.setAttribute("class", this._options.cssClass),
            t.vertical ? this._map.legendVertical.appendChild(this._body) : this._map.legendHorizontal.appendChild(this._body),
            this.render()
        }
        return t.prototype.render = function() {
            var t, e, i, s, a = this._series.scale.getTicks(), n = l("div", "jvm-legend-inner");
            if (this._body.innderHTML = "",
            this._options.title) {
                var r = l("div", "jvm-legend-title", this._options.title);
                this._body.appendChild(r)
            }
            this._body.appendChild(n);
            for (var o = 0; o < a.length; o++) {
                switch (t = l("div", "jvm-legend-tick"),
                e = l("div", "jvm-legend-tick-sample"),
                this._series.config.attribute) {
                case "fill":
                    s = a[o].value,
                    /\.(jpg|gif|png)$/.test(s) ? e.style.background = "url(" + a[o].value + ")" : e.style.background = a[o].value;
                    break;
                case "stroke":
                    e.style.background = a[o].value;
                    break;
                case "image":
                    e.style.background = "url(" + ("object" == typeof a[o].value ? a[o].value.url : a[o].value) + ") no-repeat center center",
                    e.style.backgroundSize = "cover"
                }
                t.appendChild(e),
                i = a[o].label,
                this._options.labelRender && (i = this._options.labelRender(i));
                var h = l("div", "jvm-legend-tick-text", i);
                t.appendChild(h),
                n.appendChild(t)
            }
        }
        ,
        t
    }()
      , E = function() {
        function t(t) {
            this._scale = t
        }
        var e = t.prototype;
        return e.getValue = function(t) {
            return this._scale[t]
        }
        ,
        e.getTicks = function() {
            var t = [];
            for (var e in this._scale)
                t.push({
                    label: e,
                    value: this._scale[e]
                });
            return t
        }
        ,
        t
    }()
      , Y = function() {
        function t(t, e, i) {
            void 0 === t && (t = {}),
            this._map = i,
            this._elements = e,
            this._values = t.values || {},
            this.config = t,
            this.config.attribute = t.attribute || "fill",
            t.attributes && this.setAttributes(t.attributes),
            "object" == typeof t.scale && (this.scale = new E(t.scale)),
            this.config.legend && (this.legend = new X(u({
                map: this._map,
                series: this
            }, this.config.legend))),
            this.setValues(this._values)
        }
        var e = t.prototype;
        return e.setValues = function(t) {
            var e = {};
            for (var i in t)
                t[i] && (e[i] = this.scale.getValue(t[i]));
            this.setAttributes(e)
        }
        ,
        e.setAttributes = function(t) {
            for (var e in t)
                this._elements[e] && this._elements[e].element.setStyle(this.config.attribute, t[e])
        }
        ,
        e.clear = function() {
            var t, e = {};
            for (t in this._values)
                this._elements[t] && (e[t] = this._elements[t].element.shape.style.initial[this.config.attribute]);
            this.setAttributes(e),
            this._values = {}
        }
        ,
        t
    }();
    var O = {
        mill: function(t, e, i) {
            return {
                x: this.radius * (e - i) * this.radDeg,
                y: -this.radius * Math.log(Math.tan((45 + .4 * t) * this.radDeg)) / .8
            }
        },
        merc: function(t, e, i) {
            return {
                x: this.radius * (e - i) * this.radDeg,
                y: -this.radius * Math.log(Math.tan(Math.PI / 4 + t * Math.PI / 360))
            }
        },
        aea: function(t, e, i) {
            var s = i * this.radDeg
              , a = 29.5 * this.radDeg
              , n = 45.5 * this.radDeg
              , r = t * this.radDeg
              , o = e * this.radDeg
              , h = (Math.sin(a) + Math.sin(n)) / 2
              , l = Math.cos(a) * Math.cos(a) + 2 * h * Math.sin(a)
              , c = h * (o - s)
              , u = Math.sqrt(l - 2 * h * Math.sin(r)) / h
              , p = Math.sqrt(l - 2 * h * Math.sin(0)) / h;
            return {
                x: u * Math.sin(c) * this.radius,
                y: -(p - u * Math.cos(c)) * this.radius
            }
        },
        lcc: function(t, e, i) {
            var s = i * this.radDeg
              , a = e * this.radDeg
              , n = 33 * this.radDeg
              , r = 45 * this.radDeg
              , o = t * this.radDeg
              , h = Math.log(Math.cos(n) * (1 / Math.cos(r))) / Math.log(Math.tan(Math.PI / 4 + r / 2) * (1 / Math.tan(Math.PI / 4 + n / 2)))
              , l = Math.cos(n) * Math.pow(Math.tan(Math.PI / 4 + n / 2), h) / h
              , c = l * Math.pow(1 / Math.tan(Math.PI / 4 + o / 2), h)
              , u = l * Math.pow(1 / Math.tan(Math.PI / 4 + 0), h);
            return {
                x: c * Math.sin(h * (a - s)) * this.radius,
                y: -(u - c * Math.cos(h * (a - s))) * this.radius
            }
        }
    };
    O.degRad = 180 / Math.PI,
    O.radDeg = Math.PI / 180,
    O.radius = 6381372;
    var L = function() {
        function t(t, e) {
            var i = t.scale
              , s = t.values;
            this._scale = i,
            this._values = s,
            this._fromColor = this.hexToRgb(i[0]),
            this._toColor = this.hexToRgb(i[1]),
            this._map = e,
            this.setMinMaxValues(s),
            this.visualize()
        }
        var e = t.prototype;
        return e.setMinMaxValues = function(t) {
            for (var e in this.min = Number.MAX_VALUE,
            this.max = 0,
            t)
                (e = parseFloat(t[e])) > this.max && (this.max = e),
                e < this.min && (this.min = e)
        }
        ,
        e.visualize = function() {
            var t, e = {};
            for (var i in this._values)
                t = parseFloat(this._values[i]),
                isNaN(t) || (e[i] = this.getValue(t));
            this.setAttributes(e)
        }
        ,
        e.setAttributes = function(t) {
            for (var e in t)
                this._map.regions[e] && this._map.regions[e].element.setStyle("fill", t[e])
        }
        ,
        e.getValue = function(t) {
            for (var e, i = "#", s = 0; s < 3; s++)
                i += (1 === (e = Math.round(this._fromColor[s] + (this._toColor[s] - this._fromColor[s]) * ((t - this.min) / (this.max - this.min))).toString(16)).length ? "0" : "") + e;
            return i
        }
        ,
        e.hexToRgb = function(t) {
            var e = 0
              , i = 0
              , s = 0;
            return 4 == t.length ? (e = "0x" + t[1] + t[1],
            i = "0x" + t[2] + t[2],
            s = "0x" + t[3] + t[3]) : 7 == t.length && (e = "0x" + t[1] + t[2],
            i = "0x" + t[3] + t[4],
            s = "0x" + t[5] + t[6]),
            [parseInt(e), parseInt(i), parseInt(s)]
        }
        ,
        t
    }();
    var A = {
        handleContainerEvents: function() {
            var t, e, i = this, s = !1, a = this;
            this.params.draggable && (w.on(this.container, "mousemove", (function(n) {
                if (!s)
                    return !1;
                a.transX -= (t - n.pageX) / a.scale,
                a.transY -= (e - n.pageY) / a.scale,
                a.applyTransform(),
                t = n.pageX,
                e = n.pageY,
                i.isBeingDragged = !0
            }
            )),
            w.on(this.container, "mousedown", (function(i) {
                return s = !0,
                t = i.pageX,
                e = i.pageY,
                !1
            }
            )),
            w.on(h("body"), "mouseup", (function() {
                s = !1
            }
            ))),
            this.params.zoomOnScroll && w.on(this.container, "wheel", (function(t) {
                var e = 0;
                e = (t.deltaY || -t.wheelDelta || t.detail) >> 10 || 1,
                e *= 75;
                var s = i.container.getBoundingClientRect()
                  , n = t.pageX - s.left - window.pageXOffset
                  , r = t.pageY - s.top - window.pageYOffset
                  , o = Math.pow(1 + a.params.zoomOnScrollSpeed / 1e3, -1.5 * e);
                a.tooltip && a.tooltip.hide(),
                a.setScale(a.scale * o, n, r),
                t.preventDefault()
            }
            ))
        },
        handleElementEvents: function() {
            var t = this
              , e = this
              , i = this.container;
            w.delegate(i, "mousedown", ".jvm-element", (function() {
                t.isBeingDragged = !1
            }
            )),
            w.delegate(i, "mouseover mouseout", ".jvm-element", (function(t) {
                var i = x(e, this, !0)
                  , s = e.params.showTooltip;
                "mouseover" === t.type ? t.defaultPrevented || (i.element.hover(!0),
                s && (e.tooltip.text(i.tooltipText),
                e.tooltip.show(),
                e.emit(i.event, [e.tooltip, i.code]))) : (i.element.hover(!1),
                s && e.tooltip.hide())
            }
            )),
            w.delegate(i, "mouseup", ".jvm-element", (function(t) {
                var i = x(e, this);
                if (!e.isBeingDragged && !t.defaultPrevented && ("region" === i.type && e.params.regionsSelectable || "marker" === i.type && e.params.markersSelectable)) {
                    var s = i.element;
                    e.params[i.type + "sSelectableOne"] && e.clearSelected(i.type + "s"),
                    i.element.isSelected ? s.select(!1) : s.select(!0),
                    e.emit(i.event, [i.code, s.isSelected, e.getSelected(i.type + "s")])
                }
            }
            ))
        },
        handleZoomButtons: function() {
            var t = this
              , e = this
              , i = l("div", "jvm-zoom-btn jvm-zoomin", "&#43;", !0)
              , s = l("div", "jvm-zoom-btn jvm-zoomout", "&#x2212", !0);
            this.container.appendChild(i),
            this.container.appendChild(s),
            w.on(i, "click", (function() {
                t.setScale(e.scale * e.params.zoomStep, e.width / 2, e.height / 2, !1, e.params.zoomAnimate)
            }
            )),
            w.on(s, "click", (function() {
                t.setScale(e.scale / e.params.zoomStep, e.width / 2, e.height / 2, !1, e.params.zoomAnimate)
            }
            ))
        },
        bindContainerTouchEvents: function() {
            var t, e, i, s, a, n, r, o = this, h = function(h) {
                var l, c, u, p, d = h.touches;
                if ("touchstart" == h.type && (r = 0),
                1 == d.length)
                    1 == r && (u = o.transX,
                    p = o.transY,
                    o.transX -= (i - d[0].pageX) / o.scale,
                    o.transY -= (s - d[0].pageY) / o.scale,
                    o.tooltip.hide(),
                    o.applyTransform(),
                    u == o.transX && p == o.transY || h.preventDefault()),
                    i = d[0].pageX,
                    s = d[0].pageY;
                else if (2 == d.length)
                    if (2 == r)
                        c = Math.sqrt(Math.pow(d[0].pageX - d[1].pageX, 2) + Math.pow(d[0].pageY - d[1].pageY, 2)) / e,
                        o.setScale(t * c, a, n),
                        o.tooltip.hide(),
                        h.preventDefault();
                    else {
                        var f = o.container.selector.getBoundingClientRect();
                        l = {
                            top: f.top + window.scrollY,
                            left: f.left + window.scrollX
                        },
                        a = d[0].pageX > d[1].pageX ? d[1].pageX + (d[0].pageX - d[1].pageX) / 2 : d[0].pageX + (d[1].pageX - d[0].pageX) / 2,
                        n = d[0].pageY > d[1].pageY ? d[1].pageY + (d[0].pageY - d[1].pageY) / 2 : d[0].pageY + (d[1].pageY - d[0].pageY) / 2,
                        a -= l.left,
                        n -= l.top,
                        t = o.scale,
                        e = Math.sqrt(Math.pow(d[0].pageX - d[1].pageX, 2) + Math.pow(d[0].pageY - d[1].pageY, 2))
                    }
                r = d.length
            };
            this.container.on("touchstart", h).on("touchmove", h)
        },
        createRegions: function() {
            var t, e;
            for (t in this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.createGroup("jvm-regions-labels-group"),
            this.mapData.paths)
                e = new M({
                    map: this,
                    code: t,
                    path: this.mapData.paths[t].path,
                    style: u({}, this.params.regionStyle),
                    labelStyle: this.params.regionLabelStyle,
                    labelsGroup: this.regionLabelsGroup,
                    label: this.params.labels && this.params.labels.regions
                }),
                this.regions[t] = {
                    config: this.mapData.paths[t],
                    element: e
                }
        },
        createLines: function(t, e, i) {
            var s = this;
            void 0 === i && (i = !1);
            var a, n = !1, r = !1;
            for (var o in this.linesGroup = this.linesGroup || this.canvas.createGroup("jvm-lines-group"),
            t) {
                var h = t[o];
                for (var l in e) {
                    var c = i ? e[l].config : e[l];
                    c.name === h.from && (n = this.getMarkerPosition(c)),
                    c.name === h.to && (r = this.getMarkerPosition(c))
                }
                !1 !== n && !1 !== r && (a = new _({
                    index: o,
                    map: this,
                    style: u({
                        initial: this.params.lineStyle
                    }, {
                        initial: h.style || {}
                    }, !0),
                    x1: n.x,
                    y1: n.y,
                    x2: r.x,
                    y2: r.y,
                    group: this.linesGroup
                }),
                i && Object.keys(this.lines).forEach((function(e) {
                    e === j(t[0].from, t[0].to) && s.lines[e].element.remove()
                }
                )),
                this.lines[j(h.from, h.to)] = {
                    element: a,
                    config: h
                })
            }
        },
        createMarkers: function(t, e) {
            var i, s, a, n, r = this;
            for (var o in void 0 === t && (t = {}),
            void 0 === e && (e = !1),
            this.markersGroup = this.markersGroup || this.canvas.createGroup("jvm-markers-group"),
            this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.createGroup("jvm-markers-labels-group"),
            t) {
                if (i = t[o],
                a = this.getMarkerPosition(i),
                n = i.coords.join(":"),
                e) {
                    if (Object.keys(this.markers).filter((function(t) {
                        return r.markers[t]._uid === n
                    }
                    )).length)
                        continue;
                    o = Object.keys(this.markers).length
                }
                !1 !== a && (s = new C({
                    index: o,
                    map: this,
                    style: u(this.params.markerStyle, {
                        initial: i.style || {}
                    }, !0),
                    label: this.params.labels && this.params.labels.markers,
                    labelsGroup: this.markerLabelsGroup,
                    cx: a.x,
                    cy: a.y,
                    group: this.markersGroup,
                    marker: i,
                    isRecentlyCreated: e
                }),
                this.markers[o] && this.removeMarkers([o]),
                this.markers[o] = {
                    _uid: n,
                    config: i,
                    element: s
                })
            }
        },
        createSeries: function() {
            for (var t in this.series = {
                markers: [],
                regions: []
            },
            this.params.series)
                for (var e = 0; e < this.params.series[t].length; e++)
                    this.series[t][e] = new Y(this.params.series[t][e],this[t],this)
        },
        applyTransform: function() {
            var t, e, i, s;
            this.defaultWidth * this.scale <= this.width ? (t = (this.width - this.defaultWidth * this.scale) / (2 * this.scale),
            i = (this.width - this.defaultWidth * this.scale) / (2 * this.scale)) : (t = 0,
            i = (this.width - this.defaultWidth * this.scale) / this.scale),
            this.defaultHeight * this.scale <= this.height ? (e = (this.height - this.defaultHeight * this.scale) / (2 * this.scale),
            s = (this.height - this.defaultHeight * this.scale) / (2 * this.scale)) : (e = 0,
            s = (this.height - this.defaultHeight * this.scale) / this.scale),
            this.transY > e ? this.transY = e : this.transY < s && (this.transY = s),
            this.transX > t ? this.transX = t : this.transX < i && (this.transX = i),
            this.canvas.applyTransformParams(this.scale, this.transX, this.transY),
            this.markers && this.repositionMarkers(),
            this.lines && this.repositionLines(),
            this.repositionLabels()
        },
        setFocus: function(t) {
            var e = this;
            void 0 === t && (t = {});
            var i, s = [];
            if (t.region ? s.push(t.region) : t.regions && (s = t.regions),
            s.length)
                return s.forEach((function(t) {
                    if (e.regions[t]) {
                        var s = e.regions[t].element.shape.getBBox();
                        s && (i = void 0 === i ? s : {
                            x: Math.min(i.x, s.x),
                            y: Math.min(i.y, s.y),
                            width: Math.max(i.x + i.width, s.x + s.width) - Math.min(i.x, s.x),
                            height: Math.max(i.y + i.height, s.y + s.height) - Math.min(i.y, s.y)
                        })
                    }
                }
                )),
                this.setScale(Math.min(this.width / i.width, this.height / i.height), -(i.x + i.width / 2), -(i.y + i.height / 2), !0, t.animate);
            if (t.coords) {
                var a = this.coordsToPoint(t.coords[0], t.coords[1])
                  , n = this.transX - a.x / this.scale
                  , r = this.transY - a.y / this.scale;
                return this.setScale(t.scale * this.baseScale, n, r, !0, t.animate)
            }
        },
        resize: function() {
            var t = this.baseScale;
            this.width / this.height > this.defaultWidth / this.defaultHeight ? (this.baseScale = this.height / this.defaultHeight,
            this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale)) : (this.baseScale = this.width / this.defaultWidth,
            this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale)),
            this.scale *= this.baseScale / t,
            this.transX *= this.baseScale / t,
            this.transY *= this.baseScale / t
        },
        setScale: function(t, e, i, s, a) {
            var n, r, o, h, l, c, u, p, d, f, m = this, g = 0, v = Math.abs(Math.round(60 * (t - this.scale) / Math.max(t, this.scale)));
            t > this.params.zoomMax * this.baseScale ? t = this.params.zoomMax * this.baseScale : t < this.params.zoomMin * this.baseScale && (t = this.params.zoomMin * this.baseScale),
            void 0 !== e && void 0 !== i && (n = t / this.scale,
            s ? (d = e + this.defaultWidth * (this.width / (this.defaultWidth * t)) / 2,
            f = i + this.defaultHeight * (this.height / (this.defaultHeight * t)) / 2) : (d = this.transX - (n - 1) / t * e,
            f = this.transY - (n - 1) / t * i)),
            a && v > 0 ? (o = this.scale,
            h = (t - o) / v,
            l = this.transX * this.scale,
            u = this.transY * this.scale,
            c = (d * t - l) / v,
            p = (f * t - u) / v,
            r = setInterval((function() {
                g += 1,
                m.scale = o + h * g,
                m.transX = (l + c * g) / m.scale,
                m.transY = (u + p * g) / m.scale,
                m.applyTransform(),
                g == v && (clearInterval(r),
                m.emit("viewport:changed", [m.scale, m.transX, m.transY]))
            }
            ), 10)) : (this.transX = d,
            this.transY = f,
            this.scale = t,
            this.applyTransform(),
            this.emit("viewport:changed", [this.scale, this.transX, this.transY]))
        },
        updateSize: function() {
            this.width = this.container.offsetWidth,
            this.height = this.container.offsetHeight,
            this.resize(),
            this.canvas.setSize(this.width, this.height),
            this.applyTransform()
        },
        coordsToPoint: function(t, e) {
            var i, s, a, n = D.maps[this.params.map].projection, r = n.centralMeridian;
            return i = O[n.type](t, e, r),
            !!(s = this.getInsetForPoint(i.x, i.y)) && (a = s.bbox,
            i.x = (i.x - a[0].x) / (a[1].x - a[0].x) * s.width * this.scale,
            i.y = (i.y - a[0].y) / (a[1].y - a[0].y) * s.height * this.scale,
            {
                x: i.x + this.transX * this.scale + s.left * this.scale,
                y: i.y + this.transY * this.scale + s.top * this.scale
            })
        },
        getInsetForPoint: function(t, e) {
            var i, s, a = D.maps[this.params.map].insets;
            for (i = 0; i < a.length; i++)
                if (t > (s = a[i].bbox)[0].x && t < s[1].x && e > s[0].y && e < s[1].y)
                    return a[i]
        },
        getMarkerPosition: function(t) {
            var e = t.coords;
            return D.maps[this.params.map].projection ? this.coordsToPoint.apply(this, e) : {
                x: e[0] * this.scale + this.transX * this.scale,
                y: e[1] * this.scale + this.transY * this.scale
            }
        },
        repositionLines: function() {
            var t = !1
              , e = !1;
            for (var i in this.lines) {
                for (var s in this.markers) {
                    var a = this.markers[s];
                    a.config.name === this.lines[i].config.from && (t = this.getMarkerPosition(a.config)),
                    a.config.name === this.lines[i].config.to && (e = this.getMarkerPosition(a.config))
                }
                !1 !== t && !1 !== e && this.lines[i].element.setStyle({
                    x1: t.x,
                    y1: t.y,
                    x2: e.x,
                    y2: e.y
                })
            }
        },
        repositionMarkers: function() {
            var t;
            for (var e in this.markers)
                !1 !== (t = this.getMarkerPosition(this.markers[e].config)) && this.markers[e].element.setStyle({
                    cx: t.x,
                    cy: t.y
                })
        },
        repositionLabels: function() {
            var t = this.params.labels;
            if (t) {
                if (t.regions)
                    for (var e in this.regions)
                        this.regions[e].element.updateLabelPosition();
                if (t.markers)
                    for (var i in this.markers)
                        this.markers[i].element.updateLabelPosition()
            }
        },
        visualizeData: function(t) {
            "object" == typeof t && (this.dataVisualization = new L(t,this))
        }
    }
      , T = {
        onViewportChange: "viewport:changed",
        onRegionSelected: "region:selected",
        onMarkerSelected: "marker:selected",
        onRegionTooltipShow: "region.tooltip:show",
        onMarkerTooltipShow: "marker.tooltip:show",
        onLoaded: "map:loaded",
        onDestroyed: "map:destroyed"
    }
      , z = function() {
        function t(t) {
            var e = l("div", "jvm-tooltip");
            return this._map = t,
            this._tooltip = document.body.appendChild(e),
            this._bindEventListeners(),
            this
        }
        var e = t.prototype;
        return e._bindEventListeners = function() {
            var t = this;
            w.on(this._map.container, "mousemove", (function(e) {
                if (t._tooltip.classList.contains("active")) {
                    var i, s, a = (i = t._map.container,
                    s = "#jvm-regions-group",
                    Element.prototype.querySelector.call(i, s)).getBoundingClientRect(), n = t._tooltip.getBoundingClientRect(), r = n.height, o = n.width, h = e.clientY <= a.top + r + 5, l = e.pageY - r - 5, c = e.pageX - o - 5;
                    h && (l += r + 5,
                    c -= 10),
                    e.clientX < a.left + o + 5 && (c = e.pageX + 5 + 2,
                    h && (c += 10)),
                    t._tooltip.style.cssText = "top: " + l + "px; left: " + c + "px"
                }
            }
            ))
        }
        ,
        e.getElement = function() {
            return this._tooltip
        }
        ,
        e.show = function() {
            this._tooltip.classList.add("active")
        }
        ,
        e.hide = function() {
            this._tooltip.classList.remove("active")
        }
        ,
        e.text = function(t) {
            if (!t)
                return this._tooltip.textContent;
            this._tooltip.textContent = t
        }
        ,
        t
    }()
      , D = function() {
        function t(e) {
            if (void 0 === e && (e = {}),
            this.params = u(t.defaults, e, !0),
            !t.maps[this.params.map])
                throw new Error("Attempt to use map which was not loaded: " + e.map);
            this.mapData = t.maps[this.params.map],
            this.regions = {},
            this.markers = {},
            this.lines = {},
            this.defaultWidth = this.mapData.width,
            this.defaultHeight = this.mapData.height,
            this.height = 0,
            this.width = 0,
            this.scale = 1,
            this.baseScale = 1,
            this.transX = 0,
            this.transY = 0,
            this.baseTransX = 0,
            this.baseTransY = 0,
            this.isBeingDragged = !1,
            "loading" !== document.readyState ? this.init(e.selector) : window.addEventListener("DOMContentLoaded", this.init.bind(this, e.selector))
        }
        var e = t.prototype;
        return e.init = function(t) {
            var e = this.params;
            this.container = h(t),
            this.container.classList.add("jvm-container"),
            this.canvas = new y(this.container,this.width,this.height),
            this.setBackgroundColor(e.backgroundColor),
            this.handleContainerEvents(),
            this.createRegions(),
            this.updateSize(),
            this.createLines(e.lines || {}, e.markers || {}),
            this.createMarkers(e.markers),
            this.handleElementEvents(),
            this.repositionLabels(),
            e.showTooltip && (this.tooltip = new z(this)),
            e.zoomButtons && this.handleZoomButtons(),
            e.selectedRegions && this.setSelected("regions", e.selectedRegions),
            e.selectedMarkers && this.setSelected("markers", e.selectedMarkers),
            e.focusOn && this.setFocus(e.focusOn),
            e.visualizeData && this.visualizeData(e.visualizeData),
            e.bindTouchEvents && ("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch) && this.bindContainerTouchEvents(),
            e.series && (this.container.appendChild(this.legendHorizontal = l("div", "jvm-series-container jvm-series-h")),
            this.container.appendChild(this.legendVertical = l("div", "jvm-series-container jvm-series-v")),
            this.createSeries()),
            this.emit("map:loaded", [this])
        }
        ,
        e.emit = function(t, e) {
            for (var i in T)
                T[i] === t && "function" == typeof this.params[i] && this.params[i].apply(this, e)
        }
        ,
        e.setBackgroundColor = function(t) {
            this.container.style.backgroundColor = t
        }
        ,
        e.getSelected = function(t) {
            var e, i = [];
            for (e in this[t])
                this[t][e].element.isSelected && i.push(e);
            return i
        }
        ,
        e.clearSelected = function(t) {
            var e = this;
            this.getSelected(t).forEach((function(i) {
                e[t][i].element.select(!1)
            }
            ))
        }
        ,
        e.setSelected = function(t, e) {
            var i = this;
            e.forEach((function(e) {
                i[t][e] && i[t][e].element.select(!0)
            }
            ))
        }
        ,
        e.getSelectedRegions = function() {
            return this.getSelected("regions")
        }
        ,
        e.clearSelectedRegions = function() {
            var t = this;
            this.getSelected("regions").forEach((function(e) {
                t.regions[e].element.select(!1)
            }
            ))
        }
        ,
        e.getSelectedMarkers = function() {
            return this.getSelected("markers")
        }
        ,
        e.clearSelectedMarkers = function() {
            var t = this;
            this.getSelected("markers").forEach((function(e) {
                t.markers[e].element.select(!1)
            }
            ))
        }
        ,
        e.addMarker = function(t) {
            console.warn("`addMarker` method is depreacted, please use `addMarkers` instead."),
            this.createMarkers([t], !0)
        }
        ,
        e.addMarkers = function(t) {
            if (Array.isArray(t))
                return this.createMarkers(t, !0);
            this.createMarkers([t], !0)
        }
        ,
        e.removeMarkers = function(t) {
            var e = this;
            t || (t = Object.keys(this.markers)),
            t.forEach((function(t) {
                e.markers[t].element.remove(),
                delete e.markers[t]
            }
            ))
        }
        ,
        e.addLine = function(t, e, i) {
            void 0 === i && (i = {}),
            this.createLines([{
                from: t,
                to: e,
                style: i
            }], this.markers, !0)
        }
        ,
        e.reset = function() {
            for (var t in this.series)
                for (var e = 0; e < this.series[t].length; e++)
                    this.series[t][e].clear();
            this.legendHorizontal && (c(this.legendHorizontal),
            this.legendHorizontal = null),
            this.legendVertical && (c(this.legendVertical),
            this.legendVertical = null),
            this.scale = this.baseScale,
            this.transX = this.baseTransX,
            this.transY = this.baseTransY,
            this.applyTransform(),
            this.clearSelectedMarkers(),
            this.clearSelectedRegions(),
            this.removeMarkers()
        }
        ,
        e.destroy = function(t) {
            var e = this;
            void 0 === t && (t = !0);
            var i = w.getEventRegistry()
              , s = Object.keys;
            c(this.tooltip.getElement()),
            s(i).forEach((function(t) {
                w.off(i[t].selector, t, i[t].handler)
            }
            )),
            this.emit("map:destroyed"),
            t && s(this).forEach((function(t) {
                try {
                    delete e[t]
                } catch (t) {}
            }
            ))
        }
        ,
        e.extend = function(e, i) {
            t.prototype[e] = i
        }
        ,
        t
    }();
    return D.maps = {},
    D.defaults = {
        map: "world",
        backgroundColor: "tranparent",
        draggable: !0,
        zoomButtons: !0,
        zoomOnScroll: !0,
        zoomOnScrollSpeed: 3,
        zoomMax: 12,
        zoomMin: 1,
        zoomAnimate: !0,
        showTooltip: !0,
        zoomStep: 1.5,
        bindTouchEvents: !0,
        lineStyle: {
            stroke: "#808080",
            strokeWidth: 1,
            strokeLinecap: "round"
        },
        markersSelectable: !1,
        markersSelectableOne: !1,
        markerStyle: {
            initial: {
                r: 7,
                fill: "#374151",
                fillOpacity: 1,
                stroke: "#FFF",
                strokeWidth: 5,
                strokeOpacity: .5
            },
            hover: {
                fill: "#3cc0ff",
                cursor: "pointer"
            },
            selected: {
                fill: "blue"
            },
            selectedHover: {}
        },
        markerLabelStyle: {
            initial: {
                fontFamily: "Verdana",
                fontSize: 12,
                fontWeight: 500,
                cursor: "default",
                fill: "#374151"
            },
            hover: {
                cursor: "pointer"
            },
            selected: {},
            selectedHover: {}
        },
        regionsSelectable: !1,
        regionsSelectableOne: !1,
        regionStyle: {
            initial: {
                fill: "#dee2e8",
                fillOpacity: 1,
                stroke: "none",
                strokeWidth: 0
            },
            hover: {
                fillOpacity: .7,
                cursor: "pointer"
            },
            selected: {
                fill: "#9ca3af"
            },
            selectedHover: {}
        },
        regionLabelStyle: {
            initial: {
                fontFamily: "Verdana",
                fontSize: "12",
                fontWeight: "bold",
                cursor: "default",
                fill: "#35373e"
            },
            hover: {
                cursor: "pointer"
            }
        }
    },
    Object.assign(D.prototype, A),
    function() {
        function t(t) {
            if (void 0 === t && (t = {}),
            !t.selector)
                throw new Error("Selector is not given.");
            return new D(t)
        }
        return t.prototype.addMap = function(t, e) {
            D.maps[t] = e
        }
        ,
        t
    }()
}
));
