(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1183:function(e,t,n){},1340:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));n(698);var r=n(697),a=(n(1002),n(1e3)),i=(n(74),n(34)),o=(n(69),n(41)),l=(n(310),n(227)),c=(n(1199),n(1154)),u=(n(219),n(95)),s=(n(61),n(27)),p=n(0),f=n.n(p),m=n(644),h=n(205),g=n(7),d=(n(147),n(122)),v=["children","title","width"];function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w=function(e){var t=e.children,n=e.title,r=e.width,a=b(e,v);return f.a.createElement(d.default,y({title:n,width:r,style:{maxWidth:"calc(100vw - 120px)",maxHeight:"calc(100vh - 120px)",marginRight:"auto",marginLeft:"auto",position:"absolute",top:60,right:0,left:0,height:"100%",display:"flex",flexDirection:"column"},wrapClassName:"thoughtware_modal",closable:!1},a),t)},E=(n(50),n(28)),_=n(222),O=function(e){var t=e.firstItem,n=e.secondItem,r=e.onClick,a=e.children;return f.a.createElement("div",{className:"plugin-breadcrumb"},f.a.createElement(E.default,null,f.a.createElement("span",{className:r?"plugin-breadcrumb-first":"",onClick:r},r&&f.a.createElement(_.default,{style:{marginRight:8}}),f.a.createElement("span",{className:n?"plugin-breadcrumb-span":""},t)),n&&f.a.createElement("span",null," /   ",n)),f.a.createElement("div",null,a))},j=function(e){var t=e.icon,n=e.type,r=e.title,a=e.onClick,i=e.isMar,o=e.children;return f.a.createElement("div",{className:"plugin-btn ".concat(n?"plugin-btn-".concat(n):""," ").concat(i?"plugin-btn-mar":""),onClick:a},f.a.createElement(E.default,null,t&&f.a.createElement("span",{className:"plugin-btn-icon"},t),o||r))},N=n(306),x=function(e){var t=e.currentPage,n=e.changPage,r=e.page,a=r.totalPage,i=void 0===a?1:a,o=r.totalRecord,l=void 0===o?1:o;return i>1&&f.a.createElement("div",{className:"plugin-page"},f.a.createElement("div",{className:"".concat(1===t?"plugin-page-ban":"plugin-page-allow"),onClick:function(){return 1===t?null:n(t-1)}},f.a.createElement(_.default,null)),f.a.createElement("div",{className:"plugin-page-current"},t),f.a.createElement("div",{className:"plugin-page-line"}," / "),f.a.createElement("div",null,i),f.a.createElement("div",{className:"".concat(t===i?"plugin-page-ban":"plugin-page-allow"),onClick:function(){return t===i?null:n(t+1)}},f.a.createElement(N.default,null)),f.a.createElement("div",{className:"plugin-page-record"},"  共",l,"条 "))};function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(){return(P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */S=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var i=t&&t.prototype instanceof d?t:d,o=Object.create(i.prototype),l=new C(r||[]);return a(o,"_invoke",{value:N(e,n,l)}),o}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var f="suspendedStart",m="executing",h="completed",g={};function d(){}function v(){}function y(){}var b={};u(b,o,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(I([])));E&&E!==n&&r.call(E,o)&&(b=E);var _=y.prototype=d.prototype=Object.create(b);function O(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function n(a,i,o,l){var c=p(e[a],e,i);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==k(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,o,l)}),(function(e){n("throw",e,o,l)})):t.resolve(s).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,l)}))}l(c.arg)}var i;a(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return i=i?i.then(a,a):a()}})}function N(t,n,r){var a=f;return function(i,o){if(a===m)throw new Error("Generator is already running");if(a===h){if("throw"===i)throw o;return{value:e,done:!0}}for(r.method=i,r.arg=o;;){var l=r.delegate;if(l){var c=x(l,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===f)throw a=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=m;var u=p(t,n,r);if("normal"===u.type){if(a=r.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a=h,r.method="throw",r.arg=u.arg)}}}function x(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,x(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=p(a,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function I(t){if(t||""===t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(k(t)+" is not iterable")}return v.prototype=y,a(_,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:v,configurable:!0}),v.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},O(j.prototype),u(j.prototype,l,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new j(s(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},O(_),u(_,c,"Generator"),u(_,o,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=I,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return l.type="throw",l.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],l=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}function L(e,t,n,r,a,i,o){try{var l=e[i](o),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===k(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){return function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||F(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,l=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return l}}(e,t)||F(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D=function(e){var t=Object(h.a)().t,n=!1;try{0}catch(e){n&&(n=!1)}var d=T(Object(p.useState)("installed"),2),v=d[0],y=d[1],b=T(Object(p.useState)(!1),2),E=b[0],_=b[1],N=T(Object(p.useState)({spinning:!1,tip:"加载中"}),2),k=N[0],C=N[1],A=T(Object(p.useState)([]),2),F=A[0],G=A[1],D=T(Object(p.useState)(1),2),R=D[0],z=D[1],J=T(Object(p.useState)({pageParam:{currentPage:1,pageSize:10}}),2),U=J[0],V=J[1],W=T(Object(p.useState)([]),2),Y=W[0],$=W[1],H=T(Object(p.useState)([]),2),q=H[0],B=H[1],K=T(Object(p.useState)([]),2),Q=K[0],X=K[1];Object(p.useEffect)((function(){Z()}),[]),Object(p.useEffect)((function(){n||ee()}),[U]);var Z=function(){g.Axios.post("/pluginConfig/getPluginConfig").then((function(e){0===e.code&&($(e.data.ext),B(e.data.bundle))}))},ee=function(){g.Axios.post("/pluginManager/shoplist",U).then((function(e){0===e.code&&(G(e.data.dataList||[]),z({totalRecord:e.data.totalRecord,totalPage:e.data.totalPage}))}))},te=function(){},ne=function(e,t){e.stopPropagation(),C({tip:"卸载中",spinning:!0});var n=new FormData;n.append("fileName",t),g.Axios.post("/pluginManager/uninstall",n).then((function(e){if(0===e.code)return C({tip:"加载中",spinning:!1}),s.default.success("卸载成功")}))},re=window.location.origin,ae={name:"file",action:re+("/"===re.substring(re.length-1,re.length)?"pluginManager/upload":"/pluginManager/upload"),progress:{strokeWidth:2,showInfo:!1},onChange:function(e){var t=M(e.fileList);t=(t=t.slice(-1)).map((function(e){return e.response&&(e.url=e.response.url),e})),X(t)}},ie=function(){var e,t=(e=S().mark((function e(t,n){var r,a,i;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),r=n.artifactVersion.plugIn,(a=new FormData).append("url",r),e.next=6,g.Axios.post("/pluginManager/ansycShop",a);case 6:if((i=e.sent).code){e.next=9;break}return e.abrupt("return",s.default.success(i.data));case 9:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){L(i,r,a,o,l,"next",e)}function l(e){L(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(e,n){return t.apply(this,arguments)}}();return f.a.createElement(r.a,{tip:k.tip,spinning:k.spinning},f.a.createElement(o.default,{className:"thoughtware_plugin"},f.a.createElement(i.default,{sm:{span:"24"},md:{span:"24"},lg:{span:"24"},xl:{span:"18",offset:"3"},xxl:{span:"18",offset:"3"}},f.a.createElement(O,{firstItem:"插件"},!n&&f.a.createElement(j,{onClick:function(){return _(!0)},type:"primary",icon:f.a.createElement(m.a,null)},"上传")),f.a.createElement("div",{className:"thoughtware_plugin_tabs"},f.a.createElement("div",{className:"thoughtware_plugin_tabs_left"},f.a.createElement("div",{className:"".concat("installed"===v?"tabs-active":""),onClick:function(){return y("installed")}},"已安装"),f.a.createElement("div",{className:"".concat("pluginMarket"===v?"tabs-active":""),onClick:function(){return y("pluginMarket")}},"插件市场"))),"installed"===v?f.a.createElement(p.Fragment,null,q.map((function(e){return f.a.createElement("div",{className:"thoughtware_plugin_row",onClick:te,key:e.name},f.a.createElement("div",{className:"thoughtware_plugin_name"},e.previewImgs&&e.previewImgs.length>0&&f.a.createElement("img",{src:e.previewImgs[0]}),f.a.createElement("div",{className:"thoughtware_plugin_name_main"},f.a.createElement("div",{className:"thoughtware_plugin_name_main_title"},e.name),f.a.createElement("span",null,e.auth),f.a.createElement("div",{className:"thoughtware_plugin_name_main_tag"},f.a.createElement(u.default,null,"内置"),e.tag&&e.tag.map((function(e,t){return f.a.createElement(u.default,{key:e+t},e)}))))),f.a.createElement("div",{className:"thoughtware_plugin_desc"},e.desc))})),Y.map((function(e){return f.a.createElement("div",{className:"thoughtware_plugin_row",onClick:te,key:e.name},f.a.createElement("div",{className:"thoughtware_plugin_name"},e.previewImgs&&e.previewImgs.length>0&&f.a.createElement("img",{src:e.previewImgs[0]}),f.a.createElement("div",{className:"thoughtware_plugin_name_main"},f.a.createElement("div",{className:"thoughtware_plugin_name_main_title"},e.name),f.a.createElement("span",null,e.auth),f.a.createElement("div",{className:"thoughtware_plugin_name_main_tag"},f.a.createElement(u.default,null,"购买"),e.tag&&e.tag.map((function(e,t){return f.a.createElement(u.default,{key:e+t},e)}))))),f.a.createElement("div",{className:"thoughtware_plugin_rate"},f.a.createElement(c.a,{value:3}),f.a.createElement("div",{className:"thoughtware_plugin_rate"},"36000 下载"),f.a.createElement("span",{className:"thoughtware_plugin_rate"},"$10")),!n&&f.a.createElement("div",{className:"thoughtware_plugin_action"},f.a.createElement(j,{type:"primary",onClick:function(e){return ne(e,"2323")}},"卸载")),f.a.createElement("div",{className:"thoughtware_plugin_desc"},e.desc))})),0===[].concat(M(q),M(Y)).length&&f.a.createElement(l.default,{description:"没有安装的插件"})):f.a.createElement(p.Fragment,null,F.map((function(e){var t=Array.isArray(e.type)?e.type:[e.type];return f.a.createElement(o.default,{className:"thoughtware_plugin_row",key:e.id},f.a.createElement("div",{className:"thoughtware_plugin_col"},f.a.createElement("div",{className:"thoughtware_plugin_name"},f.a.createElement("img",{src:e.coverUrl,alt:e.name}),f.a.createElement("div",{className:"thoughtware_plugin_name_main"},f.a.createElement("div",{className:"thoughtware_plugin_name_main_title"},e.name),f.a.createElement("span",null,e.member.name),f.a.createElement("div",{className:"thoughtware_plugin_name_main_tag"},t.map((function(e,t){return f.a.createElement(u.default,{key:e+t},e)}))))),e.install?f.a.createElement("div",{className:"thoughtware_plugin_action"},f.a.createElement(j,{isMar:!0},"有新版本"),f.a.createElement(j,{onClick:function(t){return ne(t,e.artifactVersion.plugIn)}},"卸载")):f.a.createElement("div",{className:"thoughtware_plugin_action"},f.a.createElement(j,{isMar:!0,type:"primary",onClick:function(e){return function(e,t){e.stopPropagation(),C({tip:"购买中",spinning:!0}),setTimeout((function(){C({tip:"加载中",spinning:!1})}),1e3)}(e)}},"购买"),f.a.createElement(j,{isMar:!0},"免费试用"),f.a.createElement(j,{onClick:function(t){return ie(t,e)}},"安装"))),f.a.createElement("div",{className:"thoughtware_plugin_desc"},e.des))})),0===F.length&&f.a.createElement("div",null,f.a.createElement(l.default,{description:"市场插件空空的"})),f.a.createElement("div",{className:"thoughtware_plugin_rate"},f.a.createElement(x,{currentPage:U.pageParam.currentPage,page:R,changPage:function(e){V(I(I({},U),{},{pageParam:{currentPage:e,pageSize:10}}))}})))),f.a.createElement(w,{visible:E,title:"上传插件",footer:[f.a.createElement(j,{key:"back",onClick:function(){return _(!1)}},t("plugin-actions.close"))]},f.a.createElement("div",null,"上传.jar包到你服务中插件库中"),f.a.createElement(a.a,P({},ae,{fileList:Q}),f.a.createElement(j,null,"上传")))))}}}]);