(function(e){function t(t){for(var n,u,a=t[0],i=t[1],f=t[2],l=0,s=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(s.length)s.shift()();return c.push.apply(c,f||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={index:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var f=0;f<a.length;f++)t(a[f]);var p=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("e4b4")},"0fd5":function(e,t,r){},"153d":function(e,t,r){"use strict";r("0fd5")},2327:function(e,t){e.exports=Vue},"379c":function(e,t,r){"use strict";var n=r("2327");t["a"]=function(){var e=Object(n["ref"])("header useHeader");return{name:e}}},c4d0:function(e,t,r){"use strict";var n=r("2327");t["a"]=function(){var e=Object(n["ref"])("footer useFooter");return{name:e}}},e4b4:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("b0c0");var n=r("2327"),o=r("7a23"),c={class:"hello"};function u(e,t,r,n,u,a){return Object(o["c"])(),Object(o["a"])("div",c,[Object(o["b"])("h1",null,Object(o["d"])(r.msg),1)])}var a={name:"HelloWorld",props:{msg:String}};r("153d");a.render=u;var i=a,f=r("379c"),p=r("c4d0");Object(n["createApp"])({compilerOptions:{delimiters:["{[","]}"],comments:!0},components:{App:i},setup:function(){var e=Object(f["a"])(),t=e.name,r=Object(p["a"])(),o=r.name,c=Object(n["ref"])("index page");return{headerName:t,footerName:o,name:c}}}).mount("#app")}});
//# sourceMappingURL=index.js.map