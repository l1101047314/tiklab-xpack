(window.webpackJsonp=window.webpackJsonp||[]).push([[72,16],{1333:function(e,t,r){"use strict";r.r(t);r(68);var n,o,i,a,c,u,l,s=r(43),f=(r(1185),r(1154)),m=(r(60),r(27)),h=r(0),p=r.n(h),d=r(667),y=r(695),v=r(682),b=r(9),g=r(7);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */w=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:O(e,r,c)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var m="suspendedStart",h="executing",p="completed",d={};function y(){}function v(){}function b(){}var g={};l(g,a,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(C([])));E&&E!==r&&n.call(E,a)&&(g=E);var x=b.prototype=y.prototype=Object.create(g);function L(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function r(o,i,a,c){var u=f(e[o],e,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==N(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function O(t,r,n){var o=m;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===p){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=S(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var l=f(t,r,n);if("normal"===l.type){if(o=n.done?p:"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=p,n.method="throw",n.arg=l.arg)}}}function S(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(N(t)+" is not iterable")}return v.prototype=b,o(x,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:v,configurable:!0}),v.displayName=l(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,u,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},L(j.prototype),l(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(x),l(x,u,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),F(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}function _(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function E(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){_(i,n,o,a,c,"next",e)}function c(e){_(i,n,o,a,c,"throw",e)}a(void 0)}))}}function x(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,O(n.key),n)}}function j(e,t,r){return t&&L(e.prototype,t),r&&L(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function O(e){var t=function(e,t){if("object"!==N(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==N(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===N(t)?t:String(t)}function S(e,t,r,n,o){var i={};return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var k=new(o=S((n=j((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),x(this,"refresh",o,this),x(this,"findLargeFile",i,this),x(this,"findLargeFileResult",a,this),x(this,"execCleanFile",c,this),x(this,"clearLargeFile",u,this),x(this,"findClearResult",l,this)}))).prototype,"refresh",[b.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),i=S(n.prototype,"findLargeFile",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=E(w().mark((function e(t){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Axios.post("/repositoryClean/findLargeFile",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),a=S(n.prototype,"findLargeFileResult",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=E(w().mark((function e(t){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Axios.post("/repositoryClean/findLargeFileResult",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),c=S(n.prototype,"execCleanFile",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=E(w().mark((function t(r){var n,o;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("rpyId",r),t.next=4,g.Axios.post("/repositoryClean/execCleanFile",n);case 4:return 0===(o=t.sent).code&&(e.refresh=!e.refresh),t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),u=S(n.prototype,"clearLargeFile",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=E(w().mark((function e(t){var r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Axios.post("/repositoryClean/clearLargeFile",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),l=S(n.prototype,"findClearResult",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=E(w().mark((function e(t){var r,n;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("repositoryId",t),e.next=4,g.Axios.post("/repositoryClean/findClearResult",r);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),n),F=r(58),P=r(659),C=(r(499),r(498)),I=r(217);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var z="/Users/limingliang/xcode-xpack/thoughtware-gittok-ui/src/repository/setting/RepositoryClean/components/CleanOrderDrawer.js";function G(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */G=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),c=new k(n||[]);return o(a,"_invoke",{value:L(e,r,c)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var m="suspendedStart",h="executing",p="completed",d={};function y(){}function v(){}function b(){}var g={};l(g,a,(function(){return this}));var N=Object.getPrototypeOf,w=N&&N(N(F([])));w&&w!==r&&n.call(w,a)&&(g=w);var _=b.prototype=y.prototype=Object.create(g);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(o,i,a,c){var u=f(e[o],e,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==A(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function L(t,r,n){var o=m;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===p){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var l=f(t,r,n);if("normal"===l.type){if(o=n.done?p:"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=p,n.method="throw",n.arg=l.arg)}}}function j(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function F(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(A(t)+" is not iterable")}return v.prototype=b,o(_,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:v,configurable:!0}),v.displayName=l(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,u,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},E(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(_),l(_,u,"Generator"),l(_,a,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=F,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}function T(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function R(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){T(i,n,o,a,c,"next",e)}function c(e){T(i,n,o,a,c,"throw",e)}a(void 0)}))}}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var M=function(e){var t=e.visible,r=e.setVisible,n=e.repository,o=e.choiceFileList,i=e.execCleanFile,a=U(Object(h.useState)(null),2),c=a[0],u=a[1],l=U(Object(h.useState)(!1),2),s=l[0],f=l[1];Object(h.useEffect)(R(G().mark((function e(){var t;return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o&&(t=o.join(" "),u(t));case 1:case"end":return e.stop()}}),e)}))),[o]);return p.a.createElement(C.default,{title:"清理命令",placement:"right",closable:!1,width:"60%",className:"library-drawer",onClose:function(){return r(!1)},visible:t,extra:p.a.createElement(I.default,{style:{cursor:"pointer"},onClick:function(){return r(!1)},__source:{fileName:z,lineNumber:48,columnNumber:17}}),__source:{fileName:z,lineNumber:39,columnNumber:9}},p.a.createElement("div",{className:"clean-order",__source:{fileName:z,lineNumber:51,columnNumber:13}},p.a.createElement("div",{className:"clean-data-desc",__source:{fileName:z,lineNumber:52,columnNumber:17}},"仓库清理大文件会更改commit历史，重新生成objectId,需要谨慎操作"),p.a.createElement("div",{className:"clean-data-bottom",__source:{fileName:z,lineNumber:55,columnNumber:17}},p.a.createElement("div",{className:"clean-data-title",__source:{fileName:z,lineNumber:56,columnNumber:21}},"客户端操作"),p.a.createElement("div",{className:"data-nav",__source:{fileName:z,lineNumber:57,columnNumber:21}},p.a.createElement("div",{__source:{fileName:z,lineNumber:58,columnNumber:25}},"第一步：拉取需要清理的仓库"),p.a.createElement("div",{className:"clean-detail-log",__source:{fileName:z,lineNumber:61,columnNumber:25}},"git clone ",null==n?void 0:n.fullPath)),p.a.createElement("div",{className:"data-nav",__source:{fileName:z,lineNumber:65,columnNumber:21}},p.a.createElement("div",{__source:{fileName:z,lineNumber:66,columnNumber:25}},"第二步：执行删除文件命令"),p.a.createElement("div",{className:" clean-detail-log",__source:{fileName:z,lineNumber:69,columnNumber:25}},"git stash & git filter-branch --force --index-filter 'git rm -rf --cached --ignore-unmatch ".concat(c,"' --prune-empty --tag-name-filter cat -- --all"))),p.a.createElement("div",{className:"data-nav",__source:{fileName:z,lineNumber:76,columnNumber:21}},p.a.createElement("div",{__source:{fileName:z,lineNumber:77,columnNumber:25}},"第三步：回收空间"),p.a.createElement("div",{className:"clean-detail-log",__source:{fileName:z,lineNumber:80,columnNumber:25}},"git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin & rm -rf .git/refs/original & git reflog expire --expire=now --all &git gc --prune=now")),p.a.createElement("div",{className:"data-nav",__source:{fileName:z,lineNumber:84,columnNumber:21}},p.a.createElement("div",{__source:{fileName:z,lineNumber:85,columnNumber:25}},"第四步：推送清理后的仓库到服务器"),p.a.createElement("div",{className:"clean-detail-log clean-detail-last",__source:{fileName:z,lineNumber:88,columnNumber:25}},"git push origin --force --all")),p.a.createElement("div",{className:"clean-data-title",__source:{fileName:z,lineNumber:93,columnNumber:21}},"服务端操作"),p.a.createElement("div",{className:"data-nav",__source:{fileName:z,lineNumber:94,columnNumber:21}},p.a.createElement("div",{__source:{fileName:z,lineNumber:95,columnNumber:25}},"第五步：清理服务端的无效文件 (该操作删除服务端仓库的无效文件、并释放空间)"),p.a.createElement("div",{__source:{fileName:z,lineNumber:98,columnNumber:25}},s?p.a.createElement(P.a,{type:"primary",title:"加载中",__source:{fileName:z,lineNumber:101,columnNumber:37}}):p.a.createElement(P.a,{onClick:function(){f(!0),i(n.rpyId).then((function(e){f(!1),0==e.code?(r(!1),m.default.success("清理成功")):m.default.error("清理失败",e.msg)}))},type:"primary",title:"清理无效文件",__source:{fileName:z,lineNumber:102,columnNumber:37}}))))))};function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var K="/Users/limingliang/xcode-xpack/thoughtware-gittok-ui/src/repository/setting/RepositoryClean/components/RepositoryClean.js";function B(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */B=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),c=new k(n||[]);return o(a,"_invoke",{value:L(e,r,c)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var m="suspendedStart",h="executing",p="completed",d={};function y(){}function v(){}function b(){}var g={};l(g,a,(function(){return this}));var N=Object.getPrototypeOf,w=N&&N(N(F([])));w&&w!==r&&n.call(w,a)&&(g=w);var _=b.prototype=y.prototype=Object.create(g);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(o,i,a,c){var u=f(e[o],e,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==D(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function L(t,r,n){var o=m;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===p){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var l=f(t,r,n);if("normal"===l.type){if(o=n.done?p:"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=p,n.method="throw",n.arg=l.arg)}}}function j(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function F(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(D(t)+" is not iterable")}return v.prototype=b,o(_,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:v,configurable:!0}),v.displayName=l(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,u,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},E(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(_),l(_,u,"Generator"),l(_,a,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=F,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}function J(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function V(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){J(i,n,o,a,c,"next",e)}function c(e){J(i,n,o,a,c,"throw",e)}a(void 0)}))}}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=Object(F.inject)("repositoryStore")(Object(F.observer)((function(e){var t=e.repositoryStore,r=e.match,n=t.findRepositoryByAddress,o=k.findLargeFile,i=k.findLargeFileResult,a=(k.clearLargeFile,k.findClearResult,k.execCleanFile),c=k.refresh,u=$(Object(h.useState)(null),2),l=u[0],b=u[1],g=$(Object(h.useState)([]),2),N=g[0],w=g[1],_=$(Object(h.useState)(!1),2),E=_[0],x=(_[1],$(Object(h.useState)(.9),2)),L=x[0],j=x[1],O=$(Object(h.useState)(!1),2),S=O[0],F=O[1],C=$(Object(h.useState)(!1),2),I=C[0],A=C[1],z=$(Object(h.useState)(null),2),G=(z[0],z[1]),T=$(Object(h.useState)([]),2),R=T[0],U=T[1],Y="".concat(r.params.namespace,"/").concat(r.params.name);Object(h.useEffect)(V(B().mark((function e(){return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D();case 1:case"end":return e.stop()}}),e)}))),[c]);var D=function(){n(Y).then((function(e){0===e.code&&(b(e.data),J(e.data))}))},J=function(e){o({repositoryId:e.rpyId,fileSize:L}).then((function(t){0===t.code&&"OK"===t.data&&(q(e),F(!0))}))},q=function(){var e=V(B().mark((function e(t){var r;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=setInterval((function(){i({repositoryId:t.rpyId}).then((function(e){if(0===e.code){if(e.data&&e.data.length>0){var t=e.data[0];"none"===t.msg&&(w([]),m.default.success("查询数据为空",1)),"fail"===t.msg&&(w([]),m.default.error("查询失败",1)),"none"!==t.msg&&"fail"!==t.msg&&w(e.data),clearInterval(r),F(!1)}}else m.default.success("查询失败",1),F(!1),clearInterval(r)}))}),1e3);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(e){i({repositoryId:l.rpyId,sort:e}).then((function(e){0===e.code&&e.data.length>0&&w(e.data)}))};return p.a.createElement("div",{className:"xcode-setting-with xcode",__source:{fileName:K,lineNumber:209,columnNumber:9}},p.a.createElement(d.a,{firstItem:"仓库清理",__source:{fileName:K,lineNumber:210,columnNumber:13}}),p.a.createElement("div",{className:"clean",__source:{fileName:K,lineNumber:211,columnNumber:13}},p.a.createElement("div",{className:"clean-condition-style",__source:{fileName:K,lineNumber:212,columnNumber:17}},p.a.createElement("div",{className:"clean-condition-title",__source:{fileName:K,lineNumber:213,columnNumber:21}},"仓库名称:"),p.a.createElement("div",{className:"clean-condition-data",__source:{fileName:K,lineNumber:214,columnNumber:21}},null==l?void 0:l.name)),p.a.createElement("div",{className:"clean-condition-style clean-condition-height",__source:{fileName:K,lineNumber:216,columnNumber:17}},p.a.createElement("div",{className:"clean-condition-title",__source:{fileName:K,lineNumber:217,columnNumber:21}},"仓库大小:"),p.a.createElement("div",{className:"clean-condition-data",__source:{fileName:K,lineNumber:218,columnNumber:21}},null==l?void 0:l.rpySize)),p.a.createElement("div",{className:"clean-condition-style",__source:{fileName:K,lineNumber:222,columnNumber:17}},p.a.createElement("div",{className:"clean-condition-title",__source:{fileName:K,lineNumber:224,columnNumber:21}},"筛选条件:"),p.a.createElement("div",{className:"clean-condition-data",__source:{fileName:K,lineNumber:225,columnNumber:21}},p.a.createElement("span",{__source:{fileName:K,lineNumber:226,columnNumber:25}},"大于"),p.a.createElement("span",{className:"clean-condition-desc",__source:{fileName:K,lineNumber:227,columnNumber:25}},p.a.createElement(f.a,{min:.9,value:L,onChange:function(e){Number.isInteger(e)&&e>0?j(e):m.default.error("只能为整数")},__source:{fileName:K,lineNumber:228,columnNumber:31}})),p.a.createElement("span",{__source:{fileName:K,lineNumber:230,columnNumber:25}},"M")),S?p.a.createElement(P.a,{type:"primary",title:"加载中",__source:{fileName:K,lineNumber:234,columnNumber:29}}):p.a.createElement(P.a,{onClick:function(){return J(l)},type:"primary",title:"查询",__source:{fileName:K,lineNumber:235,columnNumber:29}})),R.length>0&&p.a.createElement("div",{className:"clean-style",__source:{fileName:K,lineNumber:240,columnNumber:21}},p.a.createElement("div",{className:"clean-num",__source:{fileName:K,lineNumber:241,columnNumber:25}},"清除数：",R.length),p.a.createElement("div",{onClick:function(e){G(null),A(!0)},__source:{fileName:K,lineNumber:242,columnNumber:25}},p.a.createElement(P.a,{type:"common",title:"生成清理命令",__source:{fileName:K,lineNumber:243,columnNumber:29}}))),p.a.createElement("div",{className:"".concat(R.length>0?"clean-table-5":"clean-table-20"),__source:{fileName:K,lineNumber:247,columnNumber:17}},p.a.createElement(s.default,{rowSelection:{type:"checkbox",selectedRowKeys:R,onChange:function(e){U(e)}},bordered:!1,columns:[{title:"文件名称",dataIndex:"fileName",key:"fileName",width:"80%"},{title:"文件大小",dataIndex:"size",key:"size",width:"20%",sorter:function(e,t){return e.size-t.size}}],dataSource:N,rowKey:function(e){return e.fileName},pagination:!1,onChange:function(e,t,r,n){"descend"===r.order&&H("desc"),"ascend"===r.order&&H("asc"),r.order||H()},locale:{emptyText:E?p.a.createElement(y.b,{type:"table",__source:{fileName:K,lineNumber:263,columnNumber:33}}):p.a.createElement(v.a,{title:"没有文件",__source:{fileName:K,lineNumber:263,columnNumber:62}})},__source:{fileName:K,lineNumber:248,columnNumber:21}}))),p.a.createElement(M,{visible:I,setVisible:A,repository:l,choiceFileList:R,execCleanFile:a,__source:{fileName:K,lineNumber:268,columnNumber:13}}))})))},659:function(e,t,r){"use strict";r(49);var n=r(28),o=r(0),i=r.n(o),a=r(224),c="/Users/limingliang/xcode-xpack/thoughtware-gittok-ui/src/common/btn/Btn.js";t.a=function(e){var t=e.icon,r=e.type,o=e.title,u=e.onClick,l=e.isMar;return i.a.createElement("div",{className:"xcode-btn ".concat(r?"xcode-btn-".concat(r):""," ").concat(l?"xcode-btn-mar":""),onClick:u,__source:{fileName:c,lineNumber:16,columnNumber:13}},i.a.createElement(n.default,{__source:{fileName:c,lineNumber:20,columnNumber:17}},t&&i.a.createElement("span",{className:"xcode-btn-icon",__source:{fileName:c,lineNumber:22,columnNumber:34}},t),"加载中"!==o?o:i.a.createElement(a.a,{__source:{fileName:c,lineNumber:24,columnNumber:42}})))}},695:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return u}));r(700);var n=r(698),o=r(0),i=r.n(o),a="/Users/limingliang/xcode-xpack/thoughtware-gittok-ui/src/common/loading/Loading.js",c=function(e){return i.a.createElement("div",{className:"xcode-container",__source:{fileName:a,lineNumber:13,columnNumber:9}},i.a.createElement("div",{className:"xcode-shape",__source:{fileName:a,lineNumber:14,columnNumber:13}}),i.a.createElement("div",{className:"xcode-shape",__source:{fileName:a,lineNumber:15,columnNumber:13}}),i.a.createElement("div",{className:"xcode-shape",__source:{fileName:a,lineNumber:16,columnNumber:13}}))},u=function(e){var t=e.size,r=e.type;return"list"===r?i.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:a,lineNumber:31,columnNumber:17}},i.a.createElement(n.a,{size:t||"default ",__source:{fileName:a,lineNumber:32,columnNumber:21}})):"table"===r?i.a.createElement("div",{style:{textAlign:"center",paddingTop:30},__source:{fileName:a,lineNumber:37,columnNumber:18}},i.a.createElement(n.a,{size:t||"default ",__source:{fileName:a,lineNumber:38,columnNumber:21}})):i.a.createElement("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},__source:{fileName:a,lineNumber:42,columnNumber:13}},i.a.createElement(n.a,{size:t||"default ",__source:{fileName:a,lineNumber:43,columnNumber:17}}))}}}]);