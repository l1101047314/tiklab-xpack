(window.webpackJsonp=window.webpackJsonp||[]).push([[58,10,16],{1360:function(e,t,r){"use strict";r.r(t);r(42);var n=r(18),i=(r(56),r(15)),o=r(0),a=r.n(o),c=r(58),u=r(875),l=r(667),s=r(659),f=r(742),m=r(788),d="/Users/limingliang/xcode-xpack/thoughtware-gittok-ui/src/repository/file/components/Edit.js";function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,a,c=[],u=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){l=!0,i=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw i}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=Object(c.inject)("repositoryStore")(Object(c.observer)((function(e){var t=e.repositoryStore,r=e.location,c=e.match,h=t.repositoryInfo,p=m.a.readFile,v=m.a.blobFile,y="".concat(c.params.namespace,"/").concat(c.params.name),g=b(i.default.useForm(),1)[0],N=c.params.branch,w=Object(f.d)(N,h),_=Object(f.e)(r,y+"/edit/"+N),E=b(Object(o.useState)("compile"),2),x=E[0],j=E[1],O=b(Object(o.useState)(""),2),k=O[0],L=O[1],S=b(Object(o.useState)(""),2),P=S[0],A=S[1],F=b(Object(o.useState)(""),2),C=F[0],z=F[1];Object(f.b)(N)&&e.history.go(-1),Object(o.useEffect)((function(){h.name&&p({rpyId:h.rpyId,fileAddress:_[1],commitBranch:w,findCommitId:!1}).then((function(e){0===e.code&&(L(e.data&&e.data.fileMessage),A(e.data&&e.data.fileName))}))}),[h.name]);return a.a.createElement("div",{className:"xcode-edit",__source:{fileName:d,lineNumber:80,columnNumber:9}},a.a.createElement("div",{className:"edit-content xcode-repository-width xcode",__source:{fileName:d,lineNumber:81,columnNumber:13}},a.a.createElement(l.a,{firstItem:"Code",goBack:function(){return e.history.go(-1)},__source:{fileName:d,lineNumber:82,columnNumber:17}}),a.a.createElement("div",{className:"edit-content-head",__source:{fileName:d,lineNumber:83,columnNumber:17}},"编辑文件"),a.a.createElement("div",{className:"edit-content-title",__source:{fileName:d,lineNumber:84,columnNumber:17}},a.a.createElement("span",{className:"edit-title",onClick:function(){return e.history.push("/repository/".concat(y,"/tree/").concat(w))},__source:{fileName:d,lineNumber:85,columnNumber:21}},h.name),a.a.createElement("span",{className:"edit-title",__source:{fileName:d,lineNumber:88,columnNumber:21}},"/"),a.a.createElement("span",{className:"edit-title",__source:{fileName:d,lineNumber:89,columnNumber:21}},a.a.createElement(n.default,{value:P&&P,style:{width:"auto"},onChange:function(e){return A(e.target.value)},__source:{fileName:d,lineNumber:90,columnNumber:25}}))),a.a.createElement("div",{className:"edit-content-editor",__source:{fileName:d,lineNumber:97,columnNumber:17}},a.a.createElement("div",{className:"edit-editor-title",__source:{fileName:d,lineNumber:98,columnNumber:21}},a.a.createElement("span",{className:"editor-title-compile ".concat("compile"===x?"editor-title-active":""),onClick:function(){return j("compile")},__source:{fileName:d,lineNumber:99,columnNumber:25}},"编辑"),a.a.createElement("span",{className:"editor-title-preview ".concat("preview"===x?"editor-title-active":""),onClick:function(){return j("preview")},__source:{fileName:d,lineNumber:102,columnNumber:25}},"预览")),a.a.createElement("div",{className:"edit-editor-content",__source:{fileName:d,lineNumber:106,columnNumber:21}},"compile"===x?a.a.createElement(u.b,{blobFile:v,previewValue:k,setPreviewValue:L,setEditPosition:z,__source:{fileName:d,lineNumber:109,columnNumber:29}}):a.a.createElement(u.c,{newValue:k,blobFile:v,renderOverviewRuler:!0,editPosition:C,__source:{fileName:d,lineNumber:116,columnNumber:29}}))),a.a.createElement("div",{className:"edit-content-msg",__source:{fileName:d,lineNumber:125,columnNumber:17}},a.a.createElement(i.default,{form:g,autoComplete:"off",layout:"vertical",initialValues:{commitMessage:"更新",commitBranch:"master"},__source:{fileName:d,lineNumber:126,columnNumber:21}},a.a.createElement(i.default.Item,{label:"提交信息",name:"commitMessage",rules:[{required:!0,message:"提交信息不能为空"}],__source:{fileName:d,lineNumber:132,columnNumber:25}},a.a.createElement(n.default.TextArea,{__source:{fileName:d,lineNumber:134,columnNumber:26}})),a.a.createElement(i.default.Item,{label:"目标分支",name:"commitBranch",rules:[{required:!0,message:"目标分支不能为空"}],__source:{fileName:d,lineNumber:135,columnNumber:25}},a.a.createElement(n.default,{__source:{fileName:d,lineNumber:137,columnNumber:26}})))),a.a.createElement("div",{className:"edit-content-btn",__source:{fileName:d,lineNumber:140,columnNumber:17}},a.a.createElement(s.a,{title:"取消",isMar:!0,onClick:function(){return e.history.go(-1)},__source:{fileName:d,lineNumber:141,columnNumber:21}}),a.a.createElement(s.a,{title:"提交更改",type:"primary",onClick:function(){g.validateFields().then((function(e){g.resetFields()}))},__source:{fileName:d,lineNumber:146,columnNumber:21}}))))})))},299:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},659:function(e,t,r){"use strict";r(49);var n=r(28),i=r(0),o=r.n(i),a=r(224),c="/Users/limingliang/xcode-xpack/thoughtware-gittok-ui/src/common/btn/Btn.js";t.a=function(e){var t=e.icon,r=e.type,i=e.title,u=e.onClick,l=e.isMar;return o.a.createElement("div",{className:"xcode-btn ".concat(r?"xcode-btn-".concat(r):""," ").concat(l?"xcode-btn-mar":""),onClick:u,__source:{fileName:c,lineNumber:16,columnNumber:13}},o.a.createElement(n.default,{__source:{fileName:c,lineNumber:20,columnNumber:17}},t&&o.a.createElement("span",{className:"xcode-btn-icon",__source:{fileName:c,lineNumber:22,columnNumber:34}},t),"加载中"!==i?i:o.a.createElement(a.a,{__source:{fileName:c,lineNumber:24,columnNumber:42}})))}},665:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return u})),r.d(t,"a",(function(){return l}));r(60);var n=r(27),i=r(75),o=r.n(i),a=(o()().format("YYYY-MM-DD HH:mm:ss"),o()().format("HH:mm"),function(){var e=0;return window.innerHeight?e=window.innerHeight:document.body&&document.body.clientHeight&&(e=document.body.clientHeight),document.documentElement&&document.documentElement.clientHeight&&(e=document.documentElement.clientHeight),e-120}),c=function(e){var t=e,r=document.createElement("input");document.body.appendChild(r),r.setAttribute("value",t),r.select(),document.execCommand("Copy"),n.default.success("复制成功"),r.remove()},u=function(e,t){return t?e.split("/repository/"+t):e.split("/")},l=function(e,t){return"blank"===t?{pattern:/^[^\s]*$/,message:"".concat(e,"不能包含空格")}:"appoint"===t?{pattern:/^[a-zA-Z0-9_]([a-zA-Z0-9_\-.])*$/,message:"只能包含字母和数字、 '_'、 '.'和'-'，且只能以字母、数字或'_'开头"}:{pattern:/^[\u4e00-\u9fa5a-zA-Z0-9_-]{0,}$/,message:"".concat(e,"不能包含非法字符，如&,%，&，#……等")}}},667:function(e,t,r){"use strict";var n=r(0),i=r.n(n),o=r(202),a=r(216),c="/Users/limingliang/xcode-xpack/thoughtware-gittok-ui/src/common/breadcrumb/Breadcrumb.js";t.a=function(e){var t=e.firstItem,r=e.secondItem,n=e.goBack,u=e.children,l=Object(o.a)().t;return i.a.createElement("div",{className:"xcode-breadcrumb",__source:{fileName:c,lineNumber:17,columnNumber:13}},i.a.createElement("div",{className:"xcode-breadcrumb-content",__source:{fileName:c,lineNumber:18,columnNumber:17}},n&&i.a.createElement(a.default,{onClick:n,style:{color:"#0063FF",paddingRight:8},__source:{fileName:c,lineNumber:19,columnNumber:33}}),i.a.createElement("span",{className:r?"xcode-breadcrumb-span":"",__source:{fileName:c,lineNumber:20,columnNumber:21}},l(t)),r&&i.a.createElement("span",{className:"xcode-breadcrumb-secondItem",__source:{fileName:c,lineNumber:23,columnNumber:36}},"/  ",r)),i.a.createElement("div",{__source:{fileName:c,lineNumber:25,columnNumber:17}},u))}},691:function(e,t,r){var n={"./es":672,"./es-do":673,"./es-do.js":673,"./es-mx":674,"./es-mx.js":674,"./es-us":675,"./es-us.js":675,"./es.js":672,"./zh-cn":676,"./zh-cn.js":676};function i(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=691},742:function(e,t,r){"use strict";r.d(t,"e",(function(){return u})),r.d(t,"d",(function(){return c})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return a}));var n=r(665),i="commit_id",o=function(e){return e&&(e.endsWith(i)||e.endsWith("tag"))},a=function(e){var t="branch";return e&&e.endsWith("tag")&&(t="tag"),e&&e.endsWith(i)&&(t="commit"),t},c=function(e,t){var r=e||t.defaultBranch,n=r.endsWith("tag")?r.substring(0,r.length-"tag".length):r;return n.endsWith(i)?n.substring(0,n.length-i.length):n},u=function(e,t){return Object(n.d)(e.pathname,t)}},788:function(e,t,r){"use strict";r(60);var n,i,o,a,c,u,l,s,f,m,d=r(27),b=r(9),h=r(7);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */v=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),c=new A(n||[]);return i(a,"_invoke",{value:k(e,r,c)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var m="suspendedStart",d="executing",b="completed",h={};function y(){}function g(){}function N(){}var w={};l(w,a,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(F([])));E&&E!==r&&n.call(E,a)&&(w=E);var x=N.prototype=y.prototype=Object.create(w);function j(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(i,o,a,c){var u=f(e[i],e,o);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==p(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,i){r(e,n,t,i)}))}return o=o?o.then(i,i):i()}})}function k(t,r,n){var i=m;return function(o,a){if(i===d)throw new Error("Generator is already running");if(i===b){if("throw"===o)throw a;return{value:e,done:!0}}for(n.method=o,n.arg=a;;){var c=n.delegate;if(c){var u=L(c,n);if(u){if(u===h)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===m)throw i=b,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var l=f(t,r,n);if("normal"===l.type){if(i=n.done?b:"suspendedYield",l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=b,n.method="throw",n.arg=l.arg)}}}function L(t,r){var n=r.method,i=t.iterator[n];if(i===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=f(i,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function F(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(p(t)+" is not iterable")}return g.prototype=N,i(x,"constructor",{value:N,configurable:!0}),i(N,"constructor",{value:g,configurable:!0}),g.displayName=l(N,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,N):(e.__proto__=N,l(e,u,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},j(O.prototype),l(O.prototype,c,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new O(s(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},j(x),l(x,u,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=F,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}function y(e,t,r,n,i,o,a){try{var c=e[o](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,i)}function g(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){y(o,n,i,a,c,"next",e)}function c(e){y(o,n,i,a,c,"throw",e)}a(void 0)}))}}function N(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,E(n.key),n)}}function _(e,t,r){return t&&w(e.prototype,t),r&&w(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function E(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}function x(e,t,r,n,i){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}var j=new(i=x((n=_((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),N(this,"codeTreeData",i,this),N(this,"blobFile",o,this),N(this,"cloneAddress",a,this),N(this,"latelyBranchCommit",c,this),N(this,"findFileTree",u,this),N(this,"readFile",l,this),N(this,"writeFile",s,this),N(this,"findCloneAddress",f,this),N(this,"findLatelyBranchCommit",m,this)}))).prototype,"codeTreeData",[b.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),o=x(n.prototype,"blobFile",[b.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),a=x(n.prototype,"cloneAddress",[b.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),c=x(n.prototype,"latelyBranchCommit",[b.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),u=x(n.prototype,"findFileTree",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=g(v().mark((function t(r){var n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.Axios.post("/rpy/findFileTree",r);case 2:return 0===(n=t.sent).code?e.codeTreeData=n.data:e.codeTreeData=[],50001===n.code&&d.default.info(n.msg,.5),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),l=x(n.prototype,"readFile",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=g(v().mark((function t(r){var n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.Axios.post("/file/readFile",r);case 2:return 0===(n=t.sent).code?e.blobFile=n.data&&n.data:e.blobFile="",t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),s=x(n.prototype,"writeFile",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=g(v().mark((function e(t){var r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Axios.post("/file/writeFile",t);case 2:return 0===(r=e.sent).code&&d.default.info("修改成功",.5),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),f=x(n.prototype,"findCloneAddress",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=g(v().mark((function t(r){var n,i;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("rpyId",r),t.next=4,h.Axios.post("/rpy/findCloneAddress",n);case 4:return 0===(i=t.sent).code?e.cloneAddress=i.data&&i.data:e.cloneAddress="",t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),m=x(n.prototype,"findLatelyBranchCommit",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=g(v().mark((function t(r){var n;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.Axios.post("/commit/findLatelyBranchCommit",r);case 2:return 0===(n=t.sent).code&&(e.latelyBranchCommit=n.data&&n.data),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),n);t.a=j},875:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return m}));var n=r(0),i=r.n(n),o=r(817),a=(r(997),"/Users/limingliang/xcode-xpack/thoughtware-gittok-ui/src/common/editor/Monaco.js");function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,a,c=[],u=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){l=!0,i=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw i}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=function(e){if(e)switch(e.fileType){case"md":return"markdown";case"sh":return"shell";case"ts":case"tsx":return"typescript";case"js":return"javascript";default:return e.fileType}},s=function(e){var t=e.blobFile,r=Object(n.useRef)(),c=Object(n.useRef)();Object(n.useEffect)((function(){return u(),function(){r.current.dispose(),r.current=void 0}}),[r.current]);var u=function(){try{r.current=o.editor.create(c.current,{value:t&&t.fileMessage,language:l(t),minimap:{enabled:!1},automaticLayout:!0,codeLens:!0,colorDecorators:!0,roundedSelection:!1,contextmenu:!1,quickSuggestions:!1,readOnly:!0,formatOnPaste:!1,overviewRulerBorder:!1,scrollBeyondLastLine:!1,theme:"vs"})}catch(e){}};return i.a.createElement("div",{ref:c,style:{height:"calc(100% - 20px)"},__source:{fileName:a,lineNumber:67,columnNumber:9}})},f=function(e){var t=e.setEditPosition,r=e.blobFile,u=e.previewValue,s=e.setPreviewValue,f=Object(n.useRef)(),m=Object(n.useRef)(),d=c(Object(n.useState)(""),2),b=d[0],h=d[1];Object(n.useEffect)((function(){return p(),h(u&&u),function(){f.current.dispose(),f.current=void 0}}),[f.current]);var p=function(){try{f.current=o.editor.create(m.current,{value:b&&b,language:l(r),minimap:{enabled:!1},automaticLayout:!0,codeLens:!0,colorDecorators:!0,contextmenu:!1,quickSuggestions:!1,readOnly:!1,formatOnPaste:!0,overviewRulerBorder:!1,scrollBeyondLastLine:!1,theme:"vs"}),f.current.onDidChangeModelContent((function(e){try{var r=f.current.getValue(),n=f.current.getPosition();s(r),t(n)}catch(e){}}))}catch(e){}};return i.a.createElement("div",{ref:m,style:{height:400},__source:{fileName:a,lineNumber:126,columnNumber:9}})},m=function(e){var t=e.newValue,r=e.blobFile,c=e.renderOverviewRuler,u=e.editPosition,s=Object(n.useRef)(),f=Object(n.useRef)();Object(n.useEffect)((function(){return m(),function(){s.current.dispose(),s.current=void 0}}),[]);var m=function(){try{s.current=o.editor.createDiffEditor(f.current,{value:"",originalModel:"",modified:"",minimap:{enabled:!1},readOnly:!0,automaticLayout:!0,quickSuggestions:!1,overviewRulerBorder:!1,scrollBeyondLastLine:!1,theme:"vs",lightbulb:{enabled:!1},renderSideBySide:!1,enableSplitViewResizing:!1,renderOverviewRuler:c}),s.current.setModel({original:o.editor.createModel(r&&r.fileMessage,l(r)),modified:o.editor.createModel(t&&t,l(r))}),s.current.revealLineInCenter(u&&u.lineNumber)}catch(e){}};return i.a.createElement("div",{ref:f,style:{height:400},__source:{fileName:a,lineNumber:179,columnNumber:9}})}},976:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},979:function(e,t){(function(t){e.exports=t}).call(this,{})}}]);