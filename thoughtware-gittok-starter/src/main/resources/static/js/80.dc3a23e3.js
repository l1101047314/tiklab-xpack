(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1344:function(e,t,r){"use strict";r.r(t);r(59);var n=r(39),i=r(0),o=r.n(i),a=r(655),c=r(670),u=(r(743),r(977)),s=r(67),l=(r(196),r(101),r(304),r(7),r(760)),f="/Users/limingliang/xcode-xpack/thoughtware-gittok-ui/src/setting/repository/components/UserList.js";t.default=Object(s.observer)((function(e){var t=u.a.findUserAndRpy,r=u.a.xcodeUserList;Object(i.useEffect)((function(){t()}),[]);var s=[{title:"用户名",dataIndex:"userName",key:"userName",width:"40%",ellipsis:!0,render:function(e,t){return o.a.createElement("div",{className:"user-list-tables-name",onClick:function(){return m(t.userId)},__source:{fileName:f,lineNumber:38,columnNumber:21}},o.a.createElement(l.a,{text:e,size:"middle",__source:{fileName:f,lineNumber:39,columnNumber:25}}),o.a.createElement("div",{className:"name-text-title",__source:{fileName:f,lineNumber:40,columnNumber:25}},e),"admin"===e&&o.a.createElement("div",{style:{paddingLeft:10},__source:{fileName:f,lineNumber:45,columnNumber:29}},o.a.createElement("div",{className:"user-tag",__source:{fileName:f,lineNumber:46,columnNumber:33}},"管理员")))}},{title:"仓库",dataIndex:"repositoryNum",key:"repositoryNum",width:"20%",ellipsis:!0,render:function(e,t){return o.a.createElement("div",{onClick:function(){return m(t.userId)},__source:{fileName:f,lineNumber:62,columnNumber:21}},e)}}],m=function(t){e.history.push("/setting/power/repository/".concat(t))};return o.a.createElement("div",{className:"user-list",__source:{fileName:f,lineNumber:74,columnNumber:9}},o.a.createElement("div",{className:"xcode-setting-with xcode",__source:{fileName:f,lineNumber:75,columnNumber:13}},o.a.createElement(a.a,{firstItem:"用户仓库",__source:{fileName:f,lineNumber:76,columnNumber:17}}),o.a.createElement("div",{className:"user-list-table",__source:{fileName:f,lineNumber:78,columnNumber:17}},o.a.createElement(n.default,{bordered:!1,columns:s,dataSource:r,rowKey:function(e){return e.id},pagination:!1,locale:{emptyText:o.a.createElement(c.a,{title:"暂无推送的仓库",__source:{fileName:f,lineNumber:85,columnNumber:45}})},__source:{fileName:f,lineNumber:79,columnNumber:21}}))))}))},743:function(e,t,r){"use strict";var n=r(0),i=r.n(n);t.a=function(e){var t=e.text,r=e.colors;return i.a.createElement("span",{className:"xcode-listname-icon ".concat(r?"xcode-icon-".concat(r):"xcode-icon-1"),__source:{fileName:"/Users/limingliang/xcode-xpack/thoughtware-gittok-ui/src/common/list/Listicon.js",lineNumber:12,columnNumber:13}},t&&t.substring(0,1).toUpperCase())}},760:function(e,t,r){"use strict";var n=r(0),i=r.n(n);t.a=function(e){var t=e.text,r=e.size;return i.a.createElement("span",{className:"xcode-user-icon xcode-icon xcode-icon-size-".concat(r),__source:{fileName:"/Users/limingliang/xcode-xpack/thoughtware-gittok-ui/src/common/list/UserIcon.js",lineNumber:12,columnNumber:13}},t&&t.substring(0,1).toUpperCase())}},977:function(e,t,r){"use strict";r(71);var n,i,o,a,c,u=r(31),s=r(8),l=r(7);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */m=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof b?t:b,a=Object.create(o.prototype),c=new P(n||[]);return i(a,"_invoke",{value:k(e,r,c)}),a}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var p="suspendedStart",d="executing",v="completed",y={};function b(){}function g(){}function w(){}var N={};s(N,a,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(S([])));_&&_!==r&&n.call(_,a)&&(N=_);var E=w.prototype=b.prototype=Object.create(N);function L(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function r(i,o,a,c){var u=h(e[i],e,o);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==f(l)&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(l).then((function(e){s.value=e,a(s)}),(function(e){return r("throw",e,a,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,i){r(e,n,t,i)}))}return o=o?o.then(i,i):i()}})}function k(t,r,n){var i=p;return function(o,a){if(i===d)throw new Error("Generator is already running");if(i===v){if("throw"===o)throw a;return{value:e,done:!0}}for(n.method=o,n.arg=a;;){var c=n.delegate;if(c){var u=U(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var s=h(t,r,n);if("normal"===s.type){if(i=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i=v,n.method="throw",n.arg=s.arg)}}}function U(t,r){var n=r.method,i=t.iterator[n];if(i===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,U(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var o=h(i,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function z(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function S(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(f(t)+" is not iterable")}return g.prototype=w,i(E,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,u,"GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},L(j.prototype),s(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new j(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(z),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),z(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;z(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function h(e,t,r,n,i,o,a){try{var c=e[o](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,i)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){h(o,n,i,a,c,"next",e)}function c(e){h(o,n,i,a,c,"throw",e)}a(void 0)}))}}function d(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function y(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function b(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===f(t)?t:String(t)}function g(e,t,r,n,i){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}var w=new(i=g((n=y((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"xcodeUserList",i,this),d(this,"findUserAndRpy",o,this),d(this,"deleteDmUser",a,this),d(this,"findDmUserList",c,this)}))).prototype,"xcodeUserList",[s.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),o=g(n.prototype,"findUserAndRpy",[s.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return p(m().mark((function t(){var r;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.Axios.post("/xcodeUser/findUserAndRpy");case 2:return 0===(r=t.sent).code&&(e.xcodeUserList=r.data&&r.data),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))}}),a=g(n.prototype,"deleteDmUser",[s.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=p(m().mark((function e(t){var r,n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("id",t),e.next=4,l.Axios.post("dmUser/deleteDmUser",r);case 4:return 0===(n=e.sent).code?u.default.success("移除成功"):u.default.success("移除失败"),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),c=g(n.prototype,"findDmUserList",[s.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=p(m().mark((function e(t){var r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Axios.post("dmUser/findDmUserList",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),n);t.a=w}}]);