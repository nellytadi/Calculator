(function(t){function e(e){for(var i,_,c=e[0],s=e[1],l=e[2],u=0,d=[];u<c.length;u++)_=c[u],Object.prototype.hasOwnProperty.call(o,_)&&o[_]&&d.push(o[_][0]),o[_]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);a&&a(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(i=!1)}i&&(r.splice(e--,1),t=_(_.s=n[0]))}return t}var i={},o={app:0},r=[];function _(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,_),n.l=!0,n.exports}_.m=t,_.c=i,_.d=function(t,e,n){_.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},_.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},_.t=function(t,e){if(1&e&&(t=_(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(_.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)_.d(n,i,function(e){return t[e]}.bind(null,i));return n},_.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return _.d(e,"a",e),e},_.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},_.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var a=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("calculator")],1)},r=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4 col-md-7 col-sm-9 col-xs-11 mx-auto mt-5"},[n("div",{staticClass:"calculator"},[n("div",{staticClass:"display"},[n("div",{staticClass:"toCal",domProps:{textContent:t._s(t.cal)}}),n("div",{staticClass:"result",domProps:{textContent:t._s(t.result)}})]),n("div",{staticClass:"row buttons mx-0"},[n("div",{staticClass:"col-9 numbers"},[n("div",[n("button",{on:{click:function(e){return t.doDigit(7)}}},[t._v("7")]),n("button",{on:{click:function(e){return t.doDigit(8)}}},[t._v("8")]),n("button",{on:{click:function(e){return t.doDigit(9)}}},[t._v("9")])]),n("div",[n("button",{on:{click:function(e){return t.doDigit(4)}}},[t._v("4")]),n("button",{on:{click:function(e){return t.doDigit(5)}}},[t._v("5")]),n("button",{on:{click:function(e){return t.doDigit(6)}}},[t._v("6")])]),n("div",[n("button",{on:{click:function(e){return t.doDigit(1)}}},[t._v("1")]),n("button",{on:{click:function(e){return t.doDigit(2)}}},[t._v("2")]),n("button",{on:{click:function(e){return t.doDigit(3)}}},[t._v("3")])]),n("div",[n("button",[t._v(".")]),n("button",{on:{click:function(e){return t.doDigit(0)}}},[t._v("0")]),n("button",{on:{click:t.doSolve}},[t._v("=")])])]),n("div",{staticClass:"col-3 symbols"},[n("button",{on:{click:t.doCancel}},[t._v("c")]),n("button",{on:{click:function(e){return t.doSymbol("/")}}},[t._v("÷")]),n("button",{on:{click:function(e){return t.doSymbol("*")}}},[t._v("×")]),n("button",{on:{click:function(e){return t.doSymbol("-")}}},[t._v("-")]),n("button",{on:{click:function(e){return t.doSymbol("+")}}},[t._v("+")])])])])])])])},c=[],s=n("a97d"),l=s["a"],a=n("2877"),u=Object(a["a"])(l,_,c,!1,null,null,null),d=u.exports,f={name:"App",components:{Calculator:d}},p=f,b=Object(a["a"])(p,o,r,!1,null,null,null),h=b.exports;n("dec9"),n("7d05");i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(h)}}).$mount("#app")},"7d05":function(t,e,n){},a97d:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("fb6a"),core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("1276"),core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);__webpack_exports__["a"]={name:"Calculator",data:function(){return{cal:"",result:"",digits:["0","1","2","3","4","5","6","7","8","9"],symbols:["+","-","/","*"]}},methods:{doDigit:function(t){this.cal=this.cal+t},doSymbol:function(t){if(""===this.cal&&"-"===t)return this.cal=t,this.cal;if("-"===this.cal&&"-"===t)return this.cal=t,this.cal;var e=this.cal.slice(-2),n=e.split("");return this.in_array(n[0],this.symbols)&&this.in_array(n[1],this.symbols)&&"-"===n[1]?(this.cal=this.cal.slice(0,-2)+t,this.cal):this.in_array(this.cal.slice(-1),this.symbols)&&"-"!==t?(this.cal=this.cal.slice(0,-1)+t,this.cal):this.in_array(this.cal.slice(-1),this.symbols)&&"-"===t||this.in_array(this.cal.slice(-1),this.digits)?(this.cal=this.cal+t,this.cal):void 0},in_array:function(t,e){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return!0;return!1},doCancel:function(){this.cal="",this.result=""},doSolve:function doSolve(){if(this.in_array(this.cal.slice(-1),this.digits))try{this.result=eval(this.cal)}catch(e){if(!(e instanceof SyntaxError))throw e;alert(e.message),this.doCancel()}}}}},dec9:function(t,e,n){}});
//# sourceMappingURL=app.e2ee359b.js.map