(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1334:function(e,t,r){"use strict";r.r(t);r(74);var n=r(34),i=(r(195),r(149)),o=r(0),a=r.n(o),u=r(670),c=r(904),l=r(747),s=r(659),m=r(59),f=(r(43),r(18)),b=(r(198),r(53)),h=(r(57),r(15)),p=r(696),d=(r(7),"/Users/limingliang/xcode-xpack/web/thoughtware-gittok-ui/src/merge/components/MergePop.js");function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,a,u=[],c=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw i}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=function(e){var t=y(h.default.useForm(),1)[0],r=e.visible,n=e.setVisible,i=e.mergeWay,o=e.setDeleteOrigin,u=e.starMerger,c=e.mergeData,l=e.mergeExecState,m=function(){"createNode"===i||"squash"===i?t.validateFields().then((function(e){u(e.message)})):u()},v=function(){n(!1)},g=function(e){var t=e.target.checked;o(t)},N=a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,{onClick:v,title:"取消",isMar:!0,__source:{fileName:d,lineNumber:45,columnNumber:13}}),l?a.a.createElement(s.a,{onClick:m,title:"加载中",type:"primary",__source:{fileName:d,lineNumber:48,columnNumber:21}}):a.a.createElement(s.a,{onClick:m,title:"提交",type:"primary",__source:{fileName:d,lineNumber:49,columnNumber:17}}));return a.a.createElement(p.a,{open:r,onCancel:v,closable:!1,footer:N,destroyOnClose:!0,width:500,title:"确认合并",__source:{fileName:d,lineNumber:55,columnNumber:9}},("fast"===i||"rebase"===i)&&a.a.createElement("div",{className:"merge-pop-style",__source:{fileName:d,lineNumber:66,columnNumber:14}},a.a.createElement("div",{__source:{fileName:d,lineNumber:67,columnNumber:18}},a.a.createElement("div",{__source:{fileName:d,lineNumber:68,columnNumber:22}},"合并方式"),a.a.createElement("div",{__source:{fileName:d,lineNumber:69,columnNumber:22}},"fast"===i?"Fast-forward-only 合并":"rebase"===i&&"Rebase 合并")),a.a.createElement(b.default,{onChange:g,__source:{fileName:d,lineNumber:74,columnNumber:18}},"合并后自动删除源分支"))||("createNode"===i||"squash"===i)&&a.a.createElement("div",{className:"merge-pop-style",__source:{fileName:d,lineNumber:77,columnNumber:17}},a.a.createElement("div",{__source:{fileName:d,lineNumber:78,columnNumber:21}},a.a.createElement("div",{__source:{fileName:d,lineNumber:79,columnNumber:25}},"合并方式"),a.a.createElement("div",{__source:{fileName:d,lineNumber:80,columnNumber:25}},"createNode"===i?"创建一个合并节点":"squash"===i&&"squash合并")),a.a.createElement(h.default,{form:t,layout:"vertical",autoComplete:"off",initialValues:{message:"Create merge request ".concat(null==c?void 0:c.mergeOrigin," from ").concat(null==c?void 0:c.mergeTarget)},__source:{fileName:d,lineNumber:86,columnNumber:21}},a.a.createElement(h.default.Item,{label:"提交信息",name:"message",rules:[{required:!0,message:"提交信息"}],__source:{fileName:d,lineNumber:91,columnNumber:25}},a.a.createElement(f.default.TextArea,{rows:2,placeholder:"请输入提交信息",__source:{fileName:d,lineNumber:96,columnNumber:29}}))),a.a.createElement(b.default,{onChange:g,__source:{fileName:d,lineNumber:99,columnNumber:21}},"合并后自动删除源分支")))},N="/Users/limingliang/xcode-xpack/web/thoughtware-gittok-ui/src/merge/components/MergeAddVerifyBasic.js",w=function(e){return a.a.createElement("div",{className:"verify-basic",__source:{fileName:N,lineNumber:14,columnNumber:9}},a.a.createElement("div",{className:"verify-basic-pass",__source:{fileName:N,lineNumber:15,columnNumber:13}},"已达到合并请求,可以合并"),a.a.createElement("div",{className:"verify-basic-style",__source:{fileName:N,lineNumber:18,columnNumber:13}},a.a.createElement("div",{className:"verify-basic-border",__source:{fileName:N,lineNumber:19,columnNumber:17}},a.a.createElement("div",{className:"verify-basic-tile",__source:{fileName:N,lineNumber:20,columnNumber:21}},"最新动态"))))};function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var E="/Users/limingliang/xcode-xpack/web/thoughtware-gittok-ui/src/merge/components/MergeAddVerify.js";function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===_(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */k=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),u=new M(n||[]);return i(a,"_invoke",{value:j(e,r,u)}),a}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var f="suspendedStart",b="executing",h="completed",p={};function d(){}function y(){}function v(){}var g={};l(g,a,(function(){return this}));var N=Object.getPrototypeOf,w=N&&N(N(A([])));w&&w!==r&&n.call(w,a)&&(g=w);var E=v.prototype=d.prototype=Object.create(g);function x(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(i,o,a,u){var c=m(e[i],e,o);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==_(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,u)}),(function(e){r("throw",e,a,u)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,u)}))}u(c.arg)}var o;i(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,i){r(e,n,t,i)}))}return o=o?o.then(i,i):i()}})}function j(t,r,n){var i=f;return function(o,a){if(i===b)throw new Error("Generator is already running");if(i===h){if("throw"===o)throw a;return{value:e,done:!0}}for(n.method=o,n.arg=a;;){var u=n.delegate;if(u){var c=S(u,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=b;var l=m(t,r,n);if("normal"===l.type){if(i=n.done?h:"suspendedYield",l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=h,n.method="throw",n.arg=l.arg)}}}function S(t,r){var n=r.method,i=t.iterator[n];if(i===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=m(i,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function A(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(_(t)+" is not iterable")}return y.prototype=v,i(E,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},x(O.prototype),l(O.prototype,u,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new O(s(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(E),l(E,c,"Generator"),l(E,a,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=A,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return u.type="throw",u.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}function L(e,t,r,n,i,o,a){try{var u=e[o](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,i)}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,a,u=[],c=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw i}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=Object(m.inject)("repositoryStore")(Object(m.observer)((function(e){var t=e.repositoryStore,r=e.match,m=t.repositoryInfo,f=c.a.findMergeRequest,b=c.a.execMerge,h=c.a.updateMergeRequest,p=c.a.fresh,d=P(Object(o.useState)(null),2),y=d[0],v=d[1],N=P(Object(o.useState)("basics"),2),_=N[0],O=N[1],S=P(Object(o.useState)(!1),2),M=S[0],A=S[1],q=P(Object(o.useState)(!1),2),C=q[0],R=q[1],T=P(Object(o.useState)(),2),z=T[0],I=T[1],F=P(Object(o.useState)(),2),G=F[0],D=F[1],H=P(Object(o.useState)(!1),2),U=H[0],Y=H[1],V=P(Object(o.useState)(!1),2),$=V[0],W=V[1];Object(o.useEffect)((function(){f(r.params.mergeId).then((function(e){0===e.code&&v(e.data)}))}),[p]);var Z=function(){var e,t=(e=k().mark((function e(t){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(t.id);case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){L(o,n,i,a,u,"next",e)}function u(e){L(o,n,i,a,u,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}(),B=function(e){h(j(j({},y),{},{mergeState:e})).then((function(e){Y(!1)}))},J=function(e){R(!0),A(!1),I(e)},K=a.a.createElement("div",{className:"merge-select-menu",__source:{fileName:E,lineNumber:98,columnNumber:9}},a.a.createElement("div",{className:"merge-select-nav",onClick:function(){return J("createNode")},__source:{fileName:E,lineNumber:99,columnNumber:13}},a.a.createElement("div",{__source:{fileName:E,lineNumber:100,columnNumber:17}},"创建一个合并节点"),a.a.createElement("div",{className:"merge-select-nav-desc",__source:{fileName:E,lineNumber:101,columnNumber:17}},"创建一条合并分支的提交记录")),a.a.createElement("div",{className:"merge-select-nav",onClick:function(){return J("squash")},__source:{fileName:E,lineNumber:103,columnNumber:13}},a.a.createElement("div",{__source:{fileName:E,lineNumber:104,columnNumber:17}},"Squash合并"),a.a.createElement("div",{className:"merge-select-nav-desc",__source:{fileName:E,lineNumber:105,columnNumber:17}},"合并源分支的提交压缩成一条，添加到目标分支")),a.a.createElement("div",{className:"merge-select-nav",onClick:function(){return J("rebase")},__source:{fileName:E,lineNumber:107,columnNumber:13}},a.a.createElement("div",{__source:{fileName:E,lineNumber:108,columnNumber:17}},"Rebase合并"),a.a.createElement("div",{className:"merge-select-nav-desc",__source:{fileName:E,lineNumber:109,columnNumber:17}},"源分支的1个提交将被重新定位并提交到目标分支")),a.a.createElement("div",{className:"merge-select-nav",onClick:function(){return J("fast")},__source:{fileName:E,lineNumber:111,columnNumber:13}},a.a.createElement("div",{__source:{fileName:E,lineNumber:112,columnNumber:17}},"Fast-forward-only合并"),a.a.createElement("div",{className:"merge-select-nav-desc",__source:{fileName:E,lineNumber:113,columnNumber:17}},"不创建合并分支的提交记录")));return a.a.createElement("div",{className:"xcode gittok-width merge-verify",__source:{fileName:E,lineNumber:130,columnNumber:9}},a.a.createElement(n.default,{sm:{span:"24"},md:{span:"24"},lg:{span:"24"},xl:{span:"20",offset:"2"},xxl:{span:"18",offset:"3"},__source:{fileName:E,lineNumber:131,columnNumber:13}},y&&a.a.createElement("div",{className:"merge-verify-content",__source:{fileName:E,lineNumber:140,columnNumber:21}},a.a.createElement(u.a,{firstItem:y.title,goBack:function(){e.history.go(-1)},__source:{fileName:E,lineNumber:141,columnNumber:25}}),a.a.createElement("div",{className:"merge-verify-title",__source:{fileName:E,lineNumber:142,columnNumber:25}},a.a.createElement("div",{__source:{fileName:E,lineNumber:143,columnNumber:29}},"状态：",1===y.mergeState&&a.a.createElement("div",{className:"merge-verify-border merge-verify-border-open",__source:{fileName:E,lineNumber:146,columnNumber:37}},"开启中")||2===y.mergeState&&a.a.createElement("div",{className:"merge-verify-border merge-verify-border-success",__source:{fileName:E,lineNumber:148,columnNumber:37}},"已合并")||3===y.mergeState&&a.a.createElement("div",{className:"merge-verify-border merge-verify-border-close",__source:{fileName:E,lineNumber:150,columnNumber:37}},"已关闭")),a.a.createElement("div",{className:"merge-verify-title-nav",__source:{fileName:E,lineNumber:153,columnNumber:29}},a.a.createElement("div",{className:"merge-verify-title-desc",__source:{fileName:E,lineNumber:154,columnNumber:33}},a.a.createElement("div",{__source:{fileName:E,lineNumber:155,columnNumber:37}},"发起：",y.user.name,"创建于",y.createTime),a.a.createElement("div",{className:"title-desc-merge",__source:{fileName:E,lineNumber:156,columnNumber:37}},a.a.createElement("div",{className:"title-desc-border",__source:{fileName:E,lineNumber:157,columnNumber:41}},y.mergeOrigin),"合并到",a.a.createElement("div",{className:"title-desc-border",__source:{fileName:E,lineNumber:159,columnNumber:41}}," ",y.mergeTarget))),a.a.createElement("div",{className:"merge-verify-title-bt",__source:{fileName:E,lineNumber:162,columnNumber:33}},1===y.mergeState&&a.a.createElement(o.Fragment,{__source:{fileName:E,lineNumber:165,columnNumber:41}},a.a.createElement(i.default,{overlay:K,trigger:["click"],placement:"bottomRight",visible:M,onVisibleChange:function(e){return A(e)},__source:{fileName:E,lineNumber:166,columnNumber:45}},a.a.createElement(s.a,{type:"primary",title:"合并",onClick:function(){return A(!M)},__source:{fileName:E,lineNumber:173,columnNumber:49}})),a.a.createElement(i.default,{overlay:function(){return a.a.createElement("div",{className:"merge-close-menu",__source:{fileName:E,lineNumber:120,columnNumber:9}},a.a.createElement("div",{className:"close-menu-nav",onClick:function(){return B(3)},__source:{fileName:E,lineNumber:121,columnNumber:13}},"关闭合并请求"))},trigger:["click"],placement:"bottomRight",visible:U,onVisibleChange:function(e){return Y(e)},__source:{fileName:E,lineNumber:179,columnNumber:45}},a.a.createElement(s.a,{type:"common",title:"...",onClick:function(){return Y(!U)},__source:{fileName:E,lineNumber:186,columnNumber:49}})))||3===y.mergeState&&a.a.createElement(s.a,{type:"common",title:"重新打开",onClick:function(){return B(1)},__source:{fileName:E,lineNumber:194,columnNumber:41}})))),a.a.createElement("div",{className:"merge-verify-table",__source:{fileName:E,lineNumber:204,columnNumber:25}},a.a.createElement(l.a,{type:_,tabLis:[{id:"basics",title:"基础信息"},{id:"commit",title:"提交记录"},{id:"file",title:"文件改动"}],onClick:Z,__source:{fileName:E,lineNumber:205,columnNumber:29}})),a.a.createElement("div",{className:"merge-verify-table",__source:{fileName:E,lineNumber:215,columnNumber:25}},"basics"===_&&a.a.createElement(w,x({},e,{__source:{fileName:E,lineNumber:218,columnNumber:33}}))))),a.a.createElement(g,x({},e,{visible:C,setVisible:R,mergeWay:z,setDeleteOrigin:D,starMerger:function(e){W(!0),b({mergeRequestId:r.params.mergeId,rpyId:m.rpyId,mergeOrigin:y.mergeOrigin,mergeTarget:y.mergeTarget,mergeMessage:e,mergeType:"branch",mergeWay:z,deleteOrigin:G}).then((function(e){W(!1),0===e.code&&R(!1)}))},mergeData:y,mergeExecState:$,__source:{fileName:E,lineNumber:226,columnNumber:13}})))})))},303:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},663:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return l}));r(61);var n=r(27),i=r(75),o=r.n(i),a=(o()().format("YYYY-MM-DD HH:mm:ss"),o()().format("HH:mm"),function(){var e=0;return window.innerHeight?e=window.innerHeight:document.body&&document.body.clientHeight&&(e=document.body.clientHeight),document.documentElement&&document.documentElement.clientHeight&&(e=document.documentElement.clientHeight),e-120}),u=function(e){var t=e,r=document.createElement("input");document.body.appendChild(r),r.setAttribute("value",t),r.select(),document.execCommand("Copy"),n.default.success("复制成功"),r.remove()},c=function(e,t){return t?e.split("/repository/"+t):e.split("/")},l=function(e,t){return"blank"===t?{pattern:/^[^\s]*$/,message:"".concat(e,"不能包含空格")}:"appoint"===t?{pattern:/^[a-zA-Z0-9_]([a-zA-Z0-9_\-.])*$/,message:"只能包含字母和数字、 '_'、 '.'和'-'，且只能以字母、数字或'_'开头"}:{pattern:/^[\u4e00-\u9fa5a-zA-Z0-9_-]{0,}$/,message:"".concat(e,"不能包含非法字符，如&,%，&，#……等")}}},692:function(e,t,r){var n={"./es":672,"./es-do":673,"./es-do.js":673,"./es-mx":674,"./es-mx.js":674,"./es-us":675,"./es-us.js":675,"./es.js":672,"./zh-cn":676,"./zh-cn.js":676};function i(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=692},696:function(e,t,r){"use strict";r(147);var n=r(122),i=r(0),o=r.n(i),a=r(223),u=r(663),c=r(659),l="/Users/limingliang/xcode-xpack/web/thoughtware-gittok-ui/src/common/modal/Modal.js",s=["title","children"];function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,a,u=[],c=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw i}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}t.a=function(e){var t=e.title,r=e.children,b=h(e,s),p=f(Object(i.useState)(0),2),d=p[0],y=p[1];return Object(i.useEffect)((function(){return y(Object(u.b)()),function(){window.onresize=null}}),[d]),window.onresize=function(){y(Object(u.b)())},o.a.createElement(n.default,m({style:{height:d,top:70},bodyStyle:{padding:0},className:"xcode"},b,{__source:{fileName:l,lineNumber:31,columnNumber:9}}),o.a.createElement("div",{className:"xcode-modal",__source:{fileName:l,lineNumber:37,columnNumber:13}},o.a.createElement("div",{className:"xcode-modal-up",__source:{fileName:l,lineNumber:38,columnNumber:17}},o.a.createElement("div",{__source:{fileName:l,lineNumber:39,columnNumber:21}},t),o.a.createElement(c.a,{title:o.a.createElement(a.default,{style:{fontSize:16},__source:{fileName:l,lineNumber:41,columnNumber:32}}),type:"text",onClick:b.onCancel,__source:{fileName:l,lineNumber:40,columnNumber:21}})),o.a.createElement("div",{className:"xcode-modal-content",__source:{fileName:l,lineNumber:46,columnNumber:17}},r)))}},747:function(e,t,r){"use strict";var n=r(0),i=r.n(n),o="/Users/limingliang/xcode-xpack/web/thoughtware-gittok-ui/src/common/tabs/Tabs.js";t.a=function(e){var t=e.tabLis,r=e.type,n=e.onClick;return i.a.createElement("div",{className:"xcode-tabs",__source:{fileName:o,lineNumber:15,columnNumber:9}},t.map((function(e){return i.a.createElement("div",{key:e.id,className:"xcode-tab ".concat(r===e.id?"xcode-active-tab":null),onClick:function(){return n(e)},__source:{fileName:o,lineNumber:18,columnNumber:21}},e.title)})))}},904:function(e,t,r){"use strict";r(61);var n,i,o,a,u,c,l,s,m,f=r(27),b=r(9),h=r(7);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */d=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),u=new M(n||[]);return i(a,"_invoke",{value:S(e,r,u)}),a}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var f="suspendedStart",b="executing",h="completed",y={};function v(){}function g(){}function N(){}var w={};l(w,a,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(A([])));E&&E!==r&&n.call(E,a)&&(w=E);var x=N.prototype=v.prototype=Object.create(w);function O(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function r(i,o,a,u){var c=m(e[i],e,o);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==p(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,u)}),(function(e){r("throw",e,a,u)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,u)}))}u(c.arg)}var o;i(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,i){r(e,n,t,i)}))}return o=o?o.then(i,i):i()}})}function S(t,r,n){var i=f;return function(o,a){if(i===b)throw new Error("Generator is already running");if(i===h){if("throw"===o)throw a;return{value:e,done:!0}}for(n.method=o,n.arg=a;;){var u=n.delegate;if(u){var c=k(u,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=b;var l=m(t,r,n);if("normal"===l.type){if(i=n.done?h:"suspendedYield",l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=h,n.method="throw",n.arg=l.arg)}}}function k(t,r){var n=r.method,i=t.iterator[n];if(i===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var o=m(i,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function A(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(p(t)+" is not iterable")}return g.prototype=N,i(x,"constructor",{value:N,configurable:!0}),i(N,"constructor",{value:g,configurable:!0}),g.displayName=l(N,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,N):(e.__proto__=N,l(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},O(j.prototype),l(j.prototype,u,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new j(s(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(x),l(x,c,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=A,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return u.type="throw",u.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function y(e,t,r,n,i,o,a){try{var u=e[o](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,i)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){y(o,n,i,a,u,"next",e)}function u(e){y(o,n,i,a,u,"throw",e)}a(void 0)}))}}function g(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_(n.key),n)}}function w(e,t,r){return t&&N(e.prototype,t),r&&N(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}function E(e,t,r,n,i){var o={};return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}var x=new(i=E((n=w((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,"fresh",i,this),g(this,"createMergeRequest",o,this),g(this,"findMergeRequest",a,this),g(this,"findMergeStateNum",u,this),g(this,"findMergeRequestPage",c,this),g(this,"findMergeRequestList",l,this),g(this,"updateMergeRequest",s,this),g(this,"execMerge",m,this)}))).prototype,"fresh",[b.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),o=E(n.prototype,"createMergeRequest",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=v(d().mark((function t(r){var n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.Axios.post("/mergeRequest/createMergeRequest",r);case 2:return 0===(n=t.sent).code&&(f.default.info("创建成功",.5),e.fresh=!e.fresh),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),a=E(n.prototype,"findMergeRequest",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=v(d().mark((function e(t){var r,n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("id",t),e.next=4,h.Axios.post("/mergeRequest/findMergeRequest",r);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),u=E(n.prototype,"findMergeStateNum",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=v(d().mark((function e(t){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Axios.post("/mergeRequest/findMergeStateNum",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),c=E(n.prototype,"findMergeRequestPage",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=v(d().mark((function e(t){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Axios.post("/mergeRequest/findMergeRequestPage",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),l=E(n.prototype,"findMergeRequestList",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(){var e=v(d().mark((function e(t){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Axios.post("/mergeRequest/findMergeRequestList",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),s=E(n.prototype,"updateMergeRequest",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=v(d().mark((function t(r){var n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.Axios.post("/mergeRequest/updateMergeRequest",r);case 2:return 0===(n=t.sent).code&&(e.fresh=!e.fresh),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),m=E(n.prototype,"execMerge",[b.action],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=v(d().mark((function t(r){var n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.Axios.post("/mergeRequest/execMerge",r);case 2:return 0===(n=t.sent).code?(f.default.info("合并成功",1),e.fresh=!e.fresh):f.default.error(n.msg),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),n);t.a=x}}]);