(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1355:function(e,t,r){"use strict";r.r(t);r(74);var n,i,o,a=r(34),u=r(0),l=r.n(u),c=r(9),m=r(7);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */f=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function m(e,t,r,n){var o=t&&t.prototype instanceof _?t:_,a=Object.create(o.prototype),u=new P(n||[]);return i(a,"_invoke",{value:L(e,r,u)}),a}function N(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=m;var h="suspendedStart",b="executing",v="completed",d={};function _(){}function p(){}function y(){}var g={};c(g,a,(function(){return this}));var E=Object.getPrototypeOf,w=E&&E(E(T([])));w&&w!==r&&n.call(w,a)&&(g=w);var k=y.prototype=_.prototype=Object.create(g);function x(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function r(i,o,a,u){var l=N(e[i],e,o);if("throw"!==l.type){var c=l.arg,m=c.value;return m&&"object"==s(m)&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,a,u)}),(function(e){r("throw",e,a,u)})):t.resolve(m).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,u)}))}u(l.arg)}var o;i(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,i){r(e,n,t,i)}))}return o=o?o.then(i,i):i()}})}function L(t,r,n){var i=h;return function(o,a){if(i===b)throw new Error("Generator is already running");if(i===v){if("throw"===o)throw a;return{value:e,done:!0}}for(n.method=o,n.arg=a;;){var u=n.delegate;if(u){var l=O(u,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=b;var c=N(t,r,n);if("normal"===c.type){if(i=n.done?v:"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=v,n.method="throw",n.arg=c.arg)}}}function O(t,r){var n=r.method,i=t.iterator[n];if(i===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=N(i,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(s(t)+" is not iterable")}return p.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:p,configurable:!0}),p.displayName=c(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},x(j.prototype),c(j.prototype,u,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new j(m(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(k),c(k,l,"Generator"),c(k,a,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return u.type="throw",u.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}function N(e,t,r,n,i,o,a){try{var u=e[o](a),l=u.value}catch(e){return void r(e)}u.done?t(l):Promise.resolve(l).then(n,i)}function h(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){N(o,n,i,a,u,"next",e)}function u(e){N(o,n,i,a,u,"throw",e)}a(void 0)}))}}function b(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_(n.key),n)}}function d(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}function p(e,t,r,n,i){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}var y=new(i=p((n=d((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,"systemCount",i,this),b(this,"collectCount",o,this)}))).prototype,"systemCount",[c.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),o=p(n.prototype,"collectCount",[c.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return h(f().mark((function t(){var r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.Axios.post("/systemCount/collectCount");case 2:0===(r=t.sent).code&&(e.systemCount=r.data);case 4:case"end":return t.stop()}}),t)})))}}),n),g=r(59),E="/Users/limingliang/xcode-xpack/web/thoughtware-gittok-ui/src/setting/home/components/SettingHome.js";function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,a,u=[],l=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(e){c=!0,i=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw i}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=Object(g.observer)((function(e){var t=y.collectCount,r=y.systemCount,n=w(Object(u.useState)(null),2),i=n[0],o=n[1];Object(u.useEffect)((function(){t();var e=localStorage.getItem("authConfig");o(JSON.parse(e))}),[]);debugger;var c=function(t){"orga"===t||"user"===t||"userGroup"===t||"dir"===t?i.authType?e.history.push("/setting/".concat(t)):window.open("".concat(i.authUrl,"/#/setting/").concat(t)):e.history.push("/setting/".concat(t))};return l.a.createElement("div",{className:"xcode gittok-width setting-home",__source:{fileName:E,lineNumber:41,columnNumber:9}},l.a.createElement(a.default,{sm:{span:"24"},md:{span:"24"},lg:{span:"24"},xl:{span:"20",offset:"2"},xxl:{span:"18",offset:"3"},__source:{fileName:E,lineNumber:42,columnNumber:13}},l.a.createElement("div",{className:"mf-home-limited",__source:{fileName:E,lineNumber:48,columnNumber:17}},l.a.createElement("div",{className:"setting-home-chunk",__source:{fileName:E,lineNumber:49,columnNumber:21}},l.a.createElement("div",{className:"setting-home-title",__source:{fileName:E,lineNumber:50,columnNumber:25}},"用户与权限"),l.a.createElement("div",{className:"system-home-box",__source:{fileName:E,lineNumber:51,columnNumber:25}},l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"setting-home-item",onClick:function(){return c("orga")},__source:{fileName:E,lineNumber:55,columnNumber:37}},l.a.createElement("div",{className:"home-chunk-label",__source:{fileName:E,lineNumber:56,columnNumber:41}},"部门"),l.a.createElement("div",{className:"home-chunk-info",__source:{fileName:E,lineNumber:57,columnNumber:41}},l.a.createElement("div",{className:"home-chunk-desc",__source:{fileName:E,lineNumber:58,columnNumber:45}},"部门"),l.a.createElement("div",{__source:{fileName:E,lineNumber:59,columnNumber:45}},null==r?void 0:r.orgaNum))),l.a.createElement("div",{className:"setting-home-item",onClick:function(){return c("user")},__source:{fileName:E,lineNumber:62,columnNumber:37}},l.a.createElement("div",{className:"home-chunk-label",__source:{fileName:E,lineNumber:63,columnNumber:41}},"用户"),l.a.createElement("div",{className:"home-chunk-info",__source:{fileName:E,lineNumber:64,columnNumber:41}},l.a.createElement("div",{className:"home-chunk-desc",__source:{fileName:E,lineNumber:65,columnNumber:45}},"用户"),l.a.createElement("div",{__source:{fileName:E,lineNumber:66,columnNumber:45}},null==r?void 0:r.userNum))),l.a.createElement("div",{className:"setting-home-item",onClick:function(){return c("userGroup")},__source:{fileName:E,lineNumber:69,columnNumber:37}},l.a.createElement("div",{className:"home-chunk-label",__source:{fileName:E,lineNumber:70,columnNumber:41}},"用户组"),l.a.createElement("div",{className:"home-chunk-info",__source:{fileName:E,lineNumber:71,columnNumber:41}},l.a.createElement("div",{className:"home-chunk-desc",__source:{fileName:E,lineNumber:72,columnNumber:45}},"用户组"),l.a.createElement("div",{__source:{fileName:E,lineNumber:73,columnNumber:45}},null==r?void 0:r.userGroupNum))),l.a.createElement("div",{className:"setting-home-item",onClick:function(){return c("dir")},__source:{fileName:E,lineNumber:76,columnNumber:37}},l.a.createElement("div",{className:"home-chunk-label",__source:{fileName:E,lineNumber:77,columnNumber:41}},"用户目录"),l.a.createElement("div",{className:"home-chunk-info",__source:{fileName:E,lineNumber:78,columnNumber:41}},l.a.createElement("div",{className:"home-chunk-desc",__source:{fileName:E,lineNumber:79,columnNumber:45}},"用户目录"),l.a.createElement("div",{__source:{fileName:E,lineNumber:80,columnNumber:45}},null==r?void 0:r.userDirNum)))),l.a.createElement("div",{className:"setting-home-item",onClick:function(){return c("role")},__source:{fileName:E,lineNumber:85,columnNumber:29}},l.a.createElement("div",{className:"home-chunk-label",__source:{fileName:E,lineNumber:86,columnNumber:33}},"权限"),l.a.createElement("div",{className:"home-chunk-info",__source:{fileName:E,lineNumber:87,columnNumber:33}},l.a.createElement("div",{className:"home-chunk-desc",__source:{fileName:E,lineNumber:88,columnNumber:37}},"权限"),l.a.createElement("div",{__source:{fileName:E,lineNumber:89,columnNumber:37}},null==r?void 0:r.roleNum))))),l.a.createElement("div",{className:"setting-home-chunk",__source:{fileName:E,lineNumber:94,columnNumber:21}},l.a.createElement("div",{className:"setting-home-title",__source:{fileName:E,lineNumber:95,columnNumber:25}},"消息与插件"),l.a.createElement("div",{className:"system-home-box",__source:{fileName:E,lineNumber:96,columnNumber:25}},l.a.createElement("div",{className:"setting-home-item",onClick:function(){return c("mes/notice")},__source:{fileName:E,lineNumber:97,columnNumber:29}},l.a.createElement("div",{className:"home-chunk-label",__source:{fileName:E,lineNumber:98,columnNumber:33}},"消息通知方案"),l.a.createElement("div",{className:"home-chunk-info",__source:{fileName:E,lineNumber:99,columnNumber:33}},l.a.createElement("div",{className:"home-chunk-desc",__source:{fileName:E,lineNumber:100,columnNumber:37}},"消息通知方案"),l.a.createElement("div",{__source:{fileName:E,lineNumber:101,columnNumber:37}},null==r?void 0:r.messageNoticeNum))),l.a.createElement("div",{className:"setting-home-item",onClick:function(){return c("mes/send")},__source:{fileName:E,lineNumber:104,columnNumber:29}},l.a.createElement("div",{className:"home-chunk-label",__source:{fileName:E,lineNumber:105,columnNumber:33}},"消息发送方式"),l.a.createElement("div",{className:"home-chunk-info",__source:{fileName:E,lineNumber:106,columnNumber:33}},l.a.createElement("div",{className:"home-chunk-desc",__source:{fileName:E,lineNumber:107,columnNumber:37}},"消息发送方式"),l.a.createElement("div",{__source:{fileName:E,lineNumber:108,columnNumber:37}},null==r?void 0:r.messageSendTypeNum))),l.a.createElement("div",{className:"setting-home-item",onClick:function(){return c("plugin")},__source:{fileName:E,lineNumber:111,columnNumber:29}},l.a.createElement("div",{className:"home-chunk-label",__source:{fileName:E,lineNumber:112,columnNumber:33}},"插件"),l.a.createElement("div",{className:"home-chunk-flex",__source:{fileName:E,lineNumber:113,columnNumber:33}},l.a.createElement("div",{className:"home-chunk-info",__source:{fileName:E,lineNumber:114,columnNumber:37}},l.a.createElement("div",{className:"home-chunk-desc",__source:{fileName:E,lineNumber:115,columnNumber:41}},"已安装"),l.a.createElement("div",{__source:{fileName:E,lineNumber:116,columnNumber:41}},null==r?void 0:r.installPluginNum)),l.a.createElement("div",{className:"home-chunk-info",__source:{fileName:E,lineNumber:118,columnNumber:37}},l.a.createElement("div",{className:"home-chunk-desc",__source:{fileName:E,lineNumber:119,columnNumber:41}},"已安装"),l.a.createElement("div",{__source:{fileName:E,lineNumber:120,columnNumber:41}},null==r?void 0:r.pluginNum)))))),l.a.createElement("div",{className:"setting-home-chunk",__source:{fileName:E,lineNumber:126,columnNumber:21}},l.a.createElement("div",{className:"setting-home-title",__source:{fileName:E,lineNumber:127,columnNumber:25}},"安全"),l.a.createElement("div",{className:"system-home-box",__source:{fileName:E,lineNumber:128,columnNumber:25}},l.a.createElement("div",{className:"setting-home-item",onClick:function(){return c("backupRecovery")},__source:{fileName:E,lineNumber:129,columnNumber:29}},l.a.createElement("div",{className:"home-chunk-label",__source:{fileName:E,lineNumber:130,columnNumber:33}},"备份与恢复"),l.a.createElement("div",{className:"home-chunk-info-x",__source:{fileName:E,lineNumber:131,columnNumber:33}},l.a.createElement("div",{className:"home-chunk-desc",__source:{fileName:E,lineNumber:132,columnNumber:37}},"上次备份时间"),l.a.createElement("div",{__source:{fileName:E,lineNumber:133,columnNumber:37}},null==r?void 0:r.backupsTime))),l.a.createElement("div",{className:"setting-home-item",onClick:function(){return c("myLog")},__source:{fileName:E,lineNumber:136,columnNumber:29}},l.a.createElement("div",{className:"home-chunk-item-inline",__source:{fileName:E,lineNumber:137,columnNumber:33}},"操作日志")))),l.a.createElement("div",{className:"setting-home-chunk",__source:{fileName:E,lineNumber:143,columnNumber:25}},l.a.createElement("div",{className:"setting-home-title",__source:{fileName:E,lineNumber:144,columnNumber:29}},"应用"),l.a.createElement("div",{className:"system-home-box",__source:{fileName:E,lineNumber:145,columnNumber:29}},l.a.createElement("div",{className:"setting-home-item",onClick:function(){return c("version")},__source:{fileName:E,lineNumber:146,columnNumber:33}},l.a.createElement("div",{className:"home-chunk-label",__source:{fileName:E,lineNumber:147,columnNumber:37}},"版本与许可证"),l.a.createElement("div",{className:"home-chunk-info",__source:{fileName:E,lineNumber:148,columnNumber:37}},l.a.createElement("div",{className:"home-chunk-desc",__source:{fileName:E,lineNumber:149,columnNumber:41}},"版本类型"),l.a.createElement("div",{__source:{fileName:E,lineNumber:150,columnNumber:41}},"社区版"))),l.a.createElement("div",{className:"setting-home-item",onClick:function(){return c("authContent")},__source:{fileName:E,lineNumber:158,columnNumber:33}},l.a.createElement("div",{className:"home-chunk-label",__source:{fileName:E,lineNumber:159,columnNumber:37}},"应用访问权限"),l.a.createElement("div",{className:"home-chunk-info",__source:{fileName:E,lineNumber:160,columnNumber:37}},l.a.createElement("div",{className:"home-chunk-desc",__source:{fileName:E,lineNumber:161,columnNumber:41}},"已授权"),l.a.createElement("div",{__source:{fileName:E,lineNumber:162,columnNumber:41}},null==r?void 0:r.authUserNum))))))))}))}}]);