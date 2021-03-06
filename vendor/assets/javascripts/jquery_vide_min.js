/*
 *  Vide - v0.1.1
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
! function(a, b, c, d) { "use strict";

    function e(b, c, d) { this.element = a(b), this._defaults = g, this._name = f, c = c.replace(/\.\w*$/, ""), this.settings = a.extend({}, g, d), this.path = c, this.init() }
    var f = "vide",
        g = { volume: 1, playbackRate: 1, muted: !0, loop: !0, autoplay: !0, position: "50% 50%" },
        h = /iPad|iPhone|iPod/i.test(d.userAgent),
        i = /Android/i.test(d.userAgent);
    a[f] = { lookup: [] };
    var j = function(a) {
            var b, c, d = {};
            b = a.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ","), c = b.split(",");
            var e, f, g;
            for (e = 0, f = c.length; f > e; e++) c[e] = c[e].split(":"), g = c[e][1], g || (g = void 0), ("string" == typeof g || g instanceof String) && (g = "true" === g || ("false" === g ? !1 : g)), ("string" == typeof g || g instanceof String) && (g = isNaN(g) ? g : +g), d[c[e][0]] = g;
            return d },
        k = function(a) { a = "" + a;
            for (var b, c = a.split(/\s+/), d = "50%", e = "50%", f = 0, g = c.length; g > f; f++) b = c[f], "left" === b ? d = "0%" : "right" === b ? d = "100%" : "top" === b ? e = "0%" : "bottom" === b ? e = "100%" : "center" === b ? 0 === f ? d = "50%" : e = "50%" : 0 === f ? d = b : e = b;
            return { x: d, y: e } },
        l = function(b, c) {
            var d = function() { c(this.src) };
            a("<img src='" + b + ".gif'>").load(d), a("<img src='" + b + ".jpg'>").load(d), a("<img src='" + b + ".jpeg'>").load(d), a("<img src='" + b + ".png'>").load(d) };
    e.prototype.init = function() {
        var b = this;
        this.wrapper = a("<div>");
        var c = k(this.settings.position);
        this.wrapper.css({ position: "absolute", "z-index": -1, top: 0, left: 0, bottom: 0, right: 0, overflow: "hidden", "-webkit-background-size": "cover", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "background-repeat": "no-repeat", "background-position": c.x + " " + c.y }), l(this.path, function(a) { b.wrapper.css("background-image", "url(" + a + ")") }), "static" === this.element.css("position") && this.element.css("position", "relative"), this.element.prepend(this.wrapper), h || i || (this.video = a("<video><source src='" + this.path + ".mp4' type='video/mp4'><source src='" + this.path + ".webm' type='video/webm'><source src='" + this.path + ".ogv' type='video/ogg'></video>"), this.video.css("visibility", "hidden"), this.video.prop({ autoplay: this.settings.autoplay, loop: this.settings.loop, volume: this.settings.volume, muted: this.settings.muted, playbackRate: this.settings.playbackRate }), this.wrapper.append(this.video), this.video.css({ margin: "auto", position: "absolute", "z-index": -1, top: c.y, left: c.x, "-webkit-transform": "translate(-" + c.x + ", -" + c.y + ")", "-ms-transform": "translate(-" + c.x + ", -" + c.y + ")", transform: "translate(-" + c.x + ", -" + c.y + ")" }), this.video.bind("loadedmetadata." + f, function() { b.video.css("visibility", "visible"), b.resize() }), a(this.element).bind("resize." + f, function() { b.resize() })) }, e.prototype.getVideoObject = function() {
        return this.video ? this.video[0] : null }, e.prototype.resize = function() {
        if (this.video) {
            var a = this.video[0].videoHeight,
                b = this.video[0].videoWidth,
                c = this.wrapper.height(),
                d = this.wrapper.width();
            this.video.css(d / b > c / a ? { width: d + 2, height: "auto" } : { width: "auto", height: c + 2 }) } }, e.prototype.destroy = function() { this.element.unbind(f), this.video && this.video.unbind(f), delete a[f].lookup[this.index], this.element.removeData(f), this.wrapper.remove() }, a.fn[f] = function(b, c) {
        var d;
        return this.each(function() { d = a.data(this, f), d && d.destroy(), d = new e(this, b, c), d.index = a[f].lookup.push(d) - 1, a.data(this, f, d) }), this }, a(c).ready(function() { a(b).bind("resize." + f, function() {
            for (var b, c = a[f].lookup.length, d = 0; c > d; d++) b = a[f].lookup[d], b && b.resize() }), a(c).find("[data-" + f + "-bg]").each(function(b, c) {
            var d = a(c),
                e = d.data(f + "-options"),
                g = d.data(f + "-bg");
            e = e ? j(e) : {}, d[f](g, e) }) }) }(window.jQuery, window, document, navigator);
