(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{542:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("You can use these APIs to get a component's bounding rect in the page, or scroll a list to some specific component, or add a font-face rule to the page and so on.")]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),a("p",[a("a",{attrs:{href:"http://dotwe.org/vue/56e0d256cbb26facd958dbd6424f42b2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Demo"),a("OutboundLink")],1)]),t._m(8),a("p",[t._v("You can get the bounding rect of the referenced component using this API.")]),t._m(9),t._m(10),a("p",[t._v("An example callback result should be like:")]),t._m(11),t._m(12),a("p",[a("a",{attrs:{href:"http://dotwe.org/vue/d69ec16302e06300096c7285baef538a",target:"_blank",rel:"noopener noreferrer"}},[t._v("Demo"),a("OutboundLink")],1)]),a("h2",{attrs:{id:"getlayoutdirection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getlayoutdirection","aria-hidden":"true"}},[t._v("#")]),t._v(" getLayoutDirection "),a("Badge",{attrs:{text:"0.20.0+",type:"warn",vertical:"middle"}})],1),a("p",[t._v("You can get the layout direction the referenced component using this API.")]),t._m(13),t._m(14),a("p",[t._v("An example callback result should be like:")]),t._m(15),a("p",[t._v("Demo")]),t._m(16),a("h2",{attrs:{id:"addrule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addrule","aria-hidden":"true"}},[t._v("#")]),t._v(" addRule "),a("Badge",{attrs:{text:"0.12.0+",type:"warn",vertical:"middle"}})],1),t._m(17),a("p",[t._v("Developers may use the following code snippet to load their font:")]),t._m(18),t._m(19),t._m(20),t._m(21),a("p",[a("a",{attrs:{href:"http://dotwe.org/vue/7e328ee2ac9b7205c9ee37f4e509263d",target:"_blank",rel:"noopener noreferrer"}},[t._v("Demo"),a("OutboundLink")],1),t._v(".")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom","aria-hidden":"true"}},[this._v("#")]),this._v(" dom")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("dom")]),this._v(" module is used to manipulate the components in weex pages.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("The "),e("code",[this._v("addRule")]),this._v(" method is currently used only with font-face supportability.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"scrolltoelement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scrolltoelement","aria-hidden":"true"}},[this._v("#")]),this._v(" scrollToElement")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Scroll the scrollable component to the referenced component. This API should only be used in the children components of a scrollable component, such as in a "),e("code",[this._v("<scroller>")]),this._v(" or "),e("code",[this._v("<list>")]),this._v(" component.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"scrolltoelement-ref-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scrolltoelement-ref-options","aria-hidden":"true"}},[this._v("#")]),this._v(" scrollToElement(ref, options)")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("strong",[t._v("@ref")]),t._v(", the referenced component who is meant to scroll into the view.")]),a("li",[a("strong",[t._v("@options")]),t._v(",\n"),a("ul",[a("li",[a("strong",[a("code",[t._v("offset")])]),t._v(", an space on top of the ref component, which is also scrolling down to the visual viewport. Default is "),a("code",[t._v("0")]),t._v(".")]),a("li",[a("strong",[a("code",[t._v("animated")])]),t._v(", a boolean indicates whether a scroll animation should be played. If set to false, the ref component will jump into the view without any transition animation. Default is true.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getcomponentrect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getcomponentrect","aria-hidden":"true"}},[this._v("#")]),this._v(" getComponentRect")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"getcomponentrect-ref-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getcomponentrect-ref-callback","aria-hidden":"true"}},[this._v("#")]),this._v(" getComponentRect(ref, callback)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("@ref")]),this._v(", the referenced component.")]),e("li",[e("strong",[this._v("@callback")]),this._v(", the callback function after executing this action.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("353")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("353")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("If you want to get the bounding rect of outside viewport of the weex container, you can specify the "),a("code",[t._v("ref")]),t._v(" as a literal string "),a("code",[t._v("'viewport'")]),t._v(", like "),a("code",[t._v("getComponentRect('viewport', callback)")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"getlayoutdirection-ref-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getlayoutdirection-ref-callback","aria-hidden":"true"}},[this._v("#")]),this._v(" getLayoutDirection(ref, callback)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("@ref")]),this._v(", the referenced component.")]),e("li",[e("strong",[this._v("@callback")]),this._v(", the callback function after executing this action.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rtl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kkk'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLayoutDirection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Weex provide the ability of loading custom through "),a("strong",[t._v("DOM.addRule")]),t._v(". Developers can load "),a("em",[t._v("iconfont")]),t._v(" and "),a("em",[t._v("custom font")]),t._v(" by specifying the "),a("strong",[t._v("font-family")]),t._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" domModule "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndomModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fontFace'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fontFamily'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iconfont2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"url('http://at.alicdn.com/t/font_1469606063_76593.ttf')\"")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"addrule-type-contentobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#addrule-type-contentobject","aria-hidden":"true"}},[this._v("#")]),this._v(" addRule(type, contentObject)")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("strong",[t._v("@fontFace")]),t._v(" You should not change this as this is the name of the font rule")]),a("li",[a("strong",[t._v("@fontFamily")]),t._v(" You should provide the name of your font-family there, the valid name should be a string.")]),a("li",[a("strong",[t._v("@src")]),t._v(" The src of your custom font, and url('') is reserved for protocol reason, the supported parameters are listed below:\n"),a("ul",[a("li",[a("strong",[a("code",[t._v("http")])]),t._v(". Read from http, e.g. "),a("code",[t._v("url('http://at.alicdn.com/t/font_1469606063_76593.ttf')")])]),a("li",[a("strong",[a("code",[t._v("https")])]),t._v(". Read from https, e.g. "),a("code",[t._v("url('https://at.alicdn.com/t/font_1469606063_76593.ttf')")])]),a("li",[a("strong",[a("code",[t._v("local")])]),t._v(", "),a("em",[t._v("Android ONLY")]),t._v(". Read from assets directory e.g. "),a("code",[t._v("url('local://foo.ttf')")]),t._v(", the "),a("strong",[t._v("foo.ttf")]),t._v(" is in your android assets directory.")]),a("li",[a("strong",[a("code",[t._v("file")])]),t._v(". Read from a local file, e.g. "),a("code",[t._v("url('file://storage/emulated/0/Android/data/com.alibaba.weex/cache/http:__at.alicdn.com_t_font_1469606063_76593.ttf')")])]),a("li",[a("strong",[a("code",[t._v("data")])]),t._v(". Read from a base64 data source, e.g. "),a("code",[t._v("url('data:font/truetype;charset=utf-8;base64,AAEAAAALAIAAAwAwR1NVQrD+....')")]),t._v(", the above data field is only a part of the actual data.")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),a("p",[t._v("You can name "),a("code",[t._v("fontFamily")]),t._v(" in "),a("code",[t._v("addRule")]),t._v(" as you wish in your page, any string is OK. But this is not the real font-family name of the font file. The real name or system name for the font is stored in binrary data of ttf file. You must ensure that the real font-family name of font file is unique. Or your font may not be successfully registered to device and your text may display as a '?'.")]),a("p",[t._v("Specially, if you are using http://www.iconfont.cn/ to build your iconfont. Make sure that you set a unique enough font-family name for your font in project settings.")]),a("p",[t._v("Calling "),a("code",[t._v("addRule")]),t._v(" in "),a("code",[t._v("beforeCreate")]),t._v(" is recommended.")])])}],!1,null,null,null);e.default=n.exports}}]);