(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1586:function(e,t,r){"use strict";r.r(t);r(136);var n=r(48),o=(r(90),r(34)),a=(r(134),r(21)),i=r(0),u=r.n(i),c=r(8),l=r(56),m=r(695),s=r(744),f=r(702),d=r(698),p=(r(921),r(800));function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var N="/Users/limingliang/Desktop/workProject/tiklab-xcode-ui/src/repository/repository/components/RepositoryAdd.js";function y(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */y=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function l(e,t,r,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),u=new k(o||[]);return n(i,"_invoke",{value:E(e,r,u)}),i}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var s={};function f(){}function d(){}function p(){}var N={};c(N,a,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(L([])));v&&v!==t&&r.call(v,a)&&(N=v);var _=p.prototype=f.prototype=Object.create(N);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var o;n(this,"_invoke",{value:function(n,a){function i(){return new t((function(o,i){!function n(o,a,i,u){var c=m(e[o],e,a);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==b(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,i,u)}),(function(e){n("throw",e,i,u)})):t.resolve(s).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,u)}))}u(c.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function E(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=j(i,r);if(u){if(u===s)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=m(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),s;var o=m(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,s;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=p,n(_,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=c(p,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,u,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},g(w.prototype),c(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(_),c(_,u,"Generator"),c(_,a,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}function h(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===b(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,u=[],c=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=Object(l.inject)("repositoryStore","groupStore")(Object(l.observer)((function(e){var t=e.repositoryStore,r=e.groupStore,l=t.createRpy,b=t.isLoading,v=t.repositoryList,g=t.findRepositoryByName,E=t.createOpenRecord,j=t.findRepositoryList,x=r.findUserGroup,O=r.groupList,k=(Object(c.getUser)().name,w(a.default.useForm(),1)[0]),L=w(Object(i.useState)(1),2),P=L[0],S=L[1],I=w(Object(i.useState)("public"),2),T=I[0],C=I[1],A=w(Object(i.useState)(""),2),D=A[0],F=A[1],U=w(Object(i.useState)(null),2),H=U[0],z=U[1];Object(i.useEffect)((function(){g({}),x()}),[]);var G=function(){var e,t=(e=y().mark((function e(t){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(t.target.value);case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){h(a,n,o,i,u,"next",e)}function u(e){h(a,n,o,i,u,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}(),R=u.a.createElement(a.default,{form:k,autoComplete:"off",layout:"vertical",initialValues:{group:1},onValuesChange:function(e){e.name&&k.setFieldsValue({address:e.name})},__source:{fileName:N,lineNumber:83,columnNumber:9}},u.a.createElement(a.default.Item,{label:"仓库名称",name:"name",rules:[{required:!0,message:"请输入名称"},{max:30,message:"请输入1~31位以内的名称"},Object(f.a)("名称","appoint"),function(e){e.getFieldValue;return{validator:function(e,t){var r=[];return v&&(r=v&&v.map((function(e){return e.name}))),r.includes(t)?Promise.reject("名称已经存在"):Promise.resolve()}}}],__source:{fileName:N,lineNumber:90,columnNumber:13}},u.a.createElement(o.default,{style:{background:"#fff"},onChange:G,__source:{fileName:N,lineNumber:111,columnNumber:17}})),u.a.createElement("div",{className:"repository-add-path",__source:{fileName:N,lineNumber:113,columnNumber:13}},u.a.createElement(a.default.Item,{label:u.a.createElement("span",{style:{opacity:0},__source:{fileName:N,lineNumber:114,columnNumber:35}},"归属"),__source:{fileName:N,lineNumber:114,columnNumber:17}},u.a.createElement(o.default,{style:{background:"#fff"},disabled:!0,value:"http://xcode.tiklab.net",__source:{fileName:N,lineNumber:115,columnNumber:21}})),u.a.createElement(a.default.Item,{label:u.a.createElement("span",{style:{opacity:0},__source:{fileName:N,lineNumber:117,columnNumber:35}},"仓库组"),__source:{fileName:N,lineNumber:117,columnNumber:17}},u.a.createElement(n.default,{style:{background:"#fff",width:150,height:30,margin:"0 3px"},defaultValue:null,onChange:function(e){return function(e){j({groupId:e,name:D}),z(e)}(e)},__source:{fileName:N,lineNumber:118,columnNumber:21}},u.a.createElement(n.default.Option,{value:null,__source:{fileName:N,lineNumber:123,columnNumber:25}},"不选择分组"),O&&O.map((function(e){return u.a.createElement(n.default.Option,{value:e.groupId,key:e.groupId,__source:{fileName:N,lineNumber:126,columnNumber:33}},e.name)})))),u.a.createElement(a.default.Item,{className:"path-tips",label:"仓库路径",name:"address",rules:[{required:!0,message:"请输入路径"},{max:30,message:"请输入1~31位以内的名称"},Object(f.a)("路径","appoint"),function(e){e.getFieldValue;return{validator:function(e,t){var r=[];return v&&(r=v&&v.map((function(e){return e.address}))),r.includes(t)?Promise.reject("路径已经存在"):Promise.resolve()}}}],__source:{fileName:N,lineNumber:131,columnNumber:17}},u.a.createElement(o.default,{style:{background:"#fff"},__source:{fileName:N,lineNumber:153,columnNumber:21}}))),u.a.createElement(p.a,{powerType:T,setPowerType:C,powerTitle:"仓库",__source:{fileName:N,lineNumber:156,columnNumber:13}}),u.a.createElement(a.default.Item,{name:"remarks",label:"仓库描述",__source:{fileName:N,lineNumber:174,columnNumber:13}},u.a.createElement(o.default.TextArea,{style:{background:"#fff"},__source:{fileName:N,lineNumber:175,columnNumber:17}}))),V=function(){e.history.go(-1)};return u.a.createElement("div",{className:"xcode repository-add",__source:{fileName:N,lineNumber:188,columnNumber:9}},u.a.createElement("div",{className:"repository-add-content",__source:{fileName:N,lineNumber:189,columnNumber:13}},u.a.createElement("div",{className:"repository-add-top",__source:{fileName:N,lineNumber:190,columnNumber:17}},u.a.createElement(d.a,{firstItem:"新建仓库",goBack:V,__source:{fileName:N,lineNumber:191,columnNumber:21}}),1===P?u.a.createElement("div",{className:"repository-add-top-leadingIn",__source:{fileName:N,lineNumber:194,columnNumber:25}},u.a.createElement("span",{__source:{fileName:N,lineNumber:195,columnNumber:29}},"在其他网站已经有仓库了吗？"),u.a.createElement("span",{className:"leadingIn",__source:{fileName:N,lineNumber:196,columnNumber:29}},"点击导入")):u.a.createElement("div",{className:"repository-add-top-leadingIn",__source:{fileName:N,lineNumber:199,columnNumber:25}},u.a.createElement("span",{className:"leadingIn",onClick:function(){return S(1)},__source:{fileName:N,lineNumber:200,columnNumber:29}},"创建新存储库"))),u.a.createElement("div",{className:"repository-add-bottom",__source:{fileName:N,lineNumber:204,columnNumber:17}},1===P&&u.a.createElement("div",{className:"repository-add-new",__source:{fileName:N,lineNumber:207,columnNumber:25}},R,u.a.createElement(m.a,{onClick:V,title:"取消",isMar:!0,__source:{fileName:N,lineNumber:209,columnNumber:29}}),u.a.createElement(m.a,{onClick:function(){k.validateFields().then((function(t){l(_(_({},t),{},{group:{groupId:H},address:Object(c.getUser)().tenant?Object(c.getUser)().tenant+"/"+t.address:t.address,rules:T})).then((function(t){0===t.code&&e.history.push("/index/repository"),E(t.data)}))}))},type:"primary",title:"确认",__source:{fileName:N,lineNumber:210,columnNumber:29}})))),b&&u.a.createElement(s.a,{__source:{fileName:N,lineNumber:216,columnNumber:30}}))})))},695:function(e,t,r){"use strict";r(54);var n=r(27),o=r(0),a=r.n(o),i="/Users/limingliang/Desktop/workProject/tiklab-xcode-ui/src/common/btn/Btn.js";t.a=function(e){var t=e.icon,r=e.type,o=e.title,u=e.onClick,c=e.isMar;return a.a.createElement("div",{className:"xcode-btn ".concat(r?"xcode-btn-".concat(r):""," ").concat(c?"xcode-btn-mar":""),onClick:u,__source:{fileName:i,lineNumber:15,columnNumber:13}},a.a.createElement(n.default,{__source:{fileName:i,lineNumber:19,columnNumber:17}},t&&a.a.createElement("span",{className:"xcode-btn-icon",__source:{fileName:i,lineNumber:21,columnNumber:34}},t),o))}},698:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(310),i=r(128),u="/Users/limingliang/Desktop/workProject/tiklab-xcode-ui/src/common/breadcrumb/Breadcrumb.js";t.a=function(e){var t=e.firstItem,r=e.secondItem,n=e.goBack,c=Object(a.a)().t;return o.a.createElement("div",{className:"xcode-breadcrumb",__source:{fileName:u,lineNumber:18,columnNumber:13}},o.a.createElement("div",{className:"xcode-breadcrumb-content",__source:{fileName:u,lineNumber:19,columnNumber:17}},n&&o.a.createElement(i.default,{onClick:n,style:{color:"#0063FF",paddingRight:8},__source:{fileName:u,lineNumber:20,columnNumber:33}}),o.a.createElement("span",{className:r?"xcode-breadcrumb-span":"",__source:{fileName:u,lineNumber:21,columnNumber:21}},c(t)),r&&o.a.createElement("span",{className:"xcode-breadcrumb-secondItem",__source:{fileName:u,lineNumber:24,columnNumber:36}},"/  ",r)))}},702:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return l}));r(111);var n=r(44),o=r(159),a=r.n(o),i=(a()().format("YYYY-MM-DD HH:mm:ss"),a()().format("HH:mm"),function(){var e=0;return window.innerHeight?e=window.innerHeight:document.body&&document.body.clientHeight&&(e=document.body.clientHeight),document.documentElement&&document.documentElement.clientHeight&&(e=document.documentElement.clientHeight),e-120}),u=function(e){var t=e,r=document.createElement("input");document.body.appendChild(r),r.setAttribute("value",t),r.select(),document.execCommand("Copy"),n.default.success("复制成功"),r.remove()},c=function(e,t){return t?e.split("/index/repository/"+t):e.split("/")},l=function(e,t){return"blank"===t?{pattern:/^[^\s]*$/,message:"".concat(e,"不能包含空格")}:"appoint"===t?{pattern:/^[a-zA-Z0-9_]([a-zA-Z0-9_\-.])*$/,message:"只能包含字母和数字、 '_'、 '.'和'-'，且只能以字母、数字或'_'开头"}:{pattern:/^[\u4e00-\u9fa5a-zA-Z0-9_-]{0,}$/,message:"".concat(e,"不能包含非法字符，如&,%，&，#……等")}}},705:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a="/Users/limingliang/Desktop/workProject/tiklab-xcode-ui/src/common/emptyText/EmptyText.js";t.a=function(e){var t=e.title;return o.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:a,lineNumber:13,columnNumber:13}},o.a.createElement("svg",{className:"icon","aria-hidden":"true",style:{height:50,width:50},__source:{fileName:a,lineNumber:14,columnNumber:17}},o.a.createElement("use",{xlinkHref:"#icon-meiyouxiangguan",__source:{fileName:a,lineNumber:15,columnNumber:21}})),o.a.createElement("div",{style:{fontSize:13,color:"#999"},__source:{fileName:a,lineNumber:17,columnNumber:17}},t||"没有查询到数据"))}},723:function(e,t,r){var n={"./es":706,"./es-do":707,"./es-do.js":707,"./es-mx":708,"./es-mx.js":708,"./es-us":709,"./es-us.js":709,"./es.js":706,"./zh-cn":710,"./zh-cn.js":710};function o(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=723},744:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return c}));r(435);var n=r(303),o=r(0),a=r.n(o),i="/Users/limingliang/Desktop/workProject/tiklab-xcode-ui/src/common/loading/Loading.js",u=function(e){return a.a.createElement("div",{className:"xcode-container",__source:{fileName:i,lineNumber:13,columnNumber:9}},a.a.createElement("div",{className:"xcode-shape",__source:{fileName:i,lineNumber:14,columnNumber:13}}),a.a.createElement("div",{className:"xcode-shape",__source:{fileName:i,lineNumber:15,columnNumber:13}}),a.a.createElement("div",{className:"xcode-shape",__source:{fileName:i,lineNumber:16,columnNumber:13}}))},c=function(e){var t=e.size,r=e.type;return"list"===r?a.a.createElement("div",{style:{textAlign:"center"},__source:{fileName:i,lineNumber:31,columnNumber:17}},a.a.createElement(n.a,{size:t||"default ",__source:{fileName:i,lineNumber:32,columnNumber:21}})):"table"===r?a.a.createElement("div",{style:{textAlign:"center",paddingTop:30},__source:{fileName:i,lineNumber:37,columnNumber:18}},a.a.createElement(n.a,{size:t||"default ",__source:{fileName:i,lineNumber:38,columnNumber:21}})):a.a.createElement("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},__source:{fileName:i,lineNumber:42,columnNumber:13}},a.a.createElement(n.a,{size:t||"default ",__source:{fileName:i,lineNumber:43,columnNumber:17}}))}},800:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(414),i=r(395),u="/Users/limingliang/Desktop/workProject/tiklab-xcode-ui/src/repository/repository/components/RepositoryPower.js";t.a=function(e){var t=e.set,r=e.powerType,n=e.setPowerType,c=e.powerTitle,l=[{id:"public",title:"全局",icon:o.a.createElement(a.a,{__source:{fileName:u,lineNumber:13,columnNumber:18}}),desc:"公共项目，全部成员可见。不支持TFVC等某些功能。"},{id:"private",title:"私有",icon:o.a.createElement(i.a,{__source:{fileName:u,lineNumber:19,columnNumber:18}}),desc:"只有您授予访问权限的人才能查看此项目。"}];return o.a.createElement("div",{className:"repository-power",__source:{fileName:u,lineNumber:25,columnNumber:9}},o.a.createElement("div",{className:"repository-power-title",__source:{fileName:u,lineNumber:26,columnNumber:13}},c,"权限"),o.a.createElement("div",{className:"repository-power-content",__source:{fileName:u,lineNumber:27,columnNumber:13}},l.map((function(e){return o.a.createElement("div",{key:e.id,className:"repository-power-item ".concat(t?"repository-power-set":"repository-power-noSet"," ").concat(r===e.id?"repository-power-select":""),onClick:function(){return n(e.id)},__source:{fileName:u,lineNumber:30,columnNumber:32}},o.a.createElement("div",{className:"power-item",__source:{fileName:u,lineNumber:35,columnNumber:29}},o.a.createElement("div",{__source:{fileName:u,lineNumber:36,columnNumber:33}},o.a.createElement("div",{className:"power-title power-icon",__source:{fileName:u,lineNumber:37,columnNumber:37}},e.icon),o.a.createElement("div",{className:"power-title power-name",__source:{fileName:u,lineNumber:38,columnNumber:37}},e.title)),r===e.id&&o.a.createElement("div",{className:"power-select-show",__source:{fileName:u,lineNumber:41,columnNumber:60}})),o.a.createElement("div",{className:"power-desc",__source:{fileName:u,lineNumber:44,columnNumber:29}}," ",e.desc," "))}))))}},921:function(e,t,r){"use strict";r(97),r(52),r(305),r(170),r(123),r(40),r(136),r(48),r(54),r(27),r(0),r(204),r(302),r(695),r(705),r(90),r(34),r(138),r(702)}}]);