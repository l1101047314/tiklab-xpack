(window.webpackJsonp=window.webpackJsonp||[]).push([[78,16],{1342:function(e,t,n){"use strict";n.r(t);var r=n(0),u=n.n(r),l=n(136),a=n(655),c=n(647),o=(n(216),n(193)),i=(n(50),n(18)),m=(n(60),n(15)),s=n(221),f=n(653),d="/Users/limingliang/xcode-xpack/thoughtware-gittok-ui/src/repository/setting/accessKeys/components/AccessKeysAdd.js";function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,u,l,a,c=[],o=!0,i=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);o=!0);}catch(e){i=!0,u=e}finally{try{if(!o&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(i)throw u}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e){var t=e.addVisible,n=e.setAddVisible,l=b(m.default.useForm(),1)[0],a=b(Object(r.useState)(0),2),N=a[0],y=a[1];Object(r.useEffect)((function(){return y(Object(f.b)()),function(){window.onresize=null}}),[N]),window.onresize=function(){y(Object(f.b)())};var _=u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,{onClick:function(){return n(!1)},title:"取消",isMar:!0,__source:{fileName:d,lineNumber:31,columnNumber:13}}),u.a.createElement(c.a,{onClick:function(){l.validateFields().then((function(e){l.resetFields()}))},title:"确定",type:"primary",__source:{fileName:d,lineNumber:36,columnNumber:13}}));return u.a.createElement(o.default,{visible:t,onCancel:function(){return n(!1)},closable:!1,footer:_,style:{height:N,top:60},bodyStyle:{padding:0},className:"xcode keys-add-modal",destroyOnClose:!0,__source:{fileName:d,lineNumber:52,columnNumber:9}},u.a.createElement("div",{className:"keys-add-up",__source:{fileName:d,lineNumber:62,columnNumber:13}},u.a.createElement("div",{__source:{fileName:d,lineNumber:63,columnNumber:17}},"新建秘钥"),u.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return n(!1)},__source:{fileName:d,lineNumber:64,columnNumber:17}},u.a.createElement(s.default,{__source:{fileName:d,lineNumber:65,columnNumber:21}}))),u.a.createElement("div",{className:"keys-add-content",__source:{fileName:d,lineNumber:68,columnNumber:13}},u.a.createElement(m.default,{form:l,layout:"vertical",autoComplete:"off",initialValues:{2:2},__source:{fileName:d,lineNumber:69,columnNumber:17}},u.a.createElement(m.default.Item,{label:"标题",name:"1",rules:[{required:!0,message:"标题不能为空"}],__source:{fileName:d,lineNumber:75,columnNumber:21}},u.a.createElement(i.default,{__source:{fileName:d,lineNumber:78,columnNumber:25}})),u.a.createElement(m.default.Item,{label:"秘钥",name:"3",__source:{fileName:d,lineNumber:80,columnNumber:21}},u.a.createElement(i.default.TextArea,{__source:{fileName:d,lineNumber:81,columnNumber:25}})))))},_=n(670),p="/Users/limingliang/xcode-xpack/thoughtware-gittok-ui/src/repository/setting/accessKeys/components/AccessKeys.js";function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,u,l,a,c=[],o=!0,i=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=l.call(n)).done)&&(c.push(r.value),c.length!==t);o=!0);}catch(e){i=!0,u=e}finally{try{if(!o&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(i)throw u}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){var t=v(Object(r.useState)(!1),2),n=t[0],o=t[1];return u.a.createElement("div",{className:"keys",__source:{fileName:p,lineNumber:14,columnNumber:9}},u.a.createElement("div",{className:"keys-content xcode-repository-width-setting xcode",__source:{fileName:p,lineNumber:15,columnNumber:13}},u.a.createElement("div",{className:"keys-up",__source:{fileName:p,lineNumber:16,columnNumber:17}},u.a.createElement(a.a,{firstItem:"Access_keys",__source:{fileName:p,lineNumber:17,columnNumber:21}}),u.a.createElement(c.a,{type:"primary",title:"新建密钥",icon:u.a.createElement(l.default,{__source:{fileName:p,lineNumber:21,columnNumber:31}}),onClick:function(){return o(!0)},__source:{fileName:p,lineNumber:18,columnNumber:21}}),u.a.createElement(y,{addVisible:n,setAddVisible:o,__source:{fileName:p,lineNumber:24,columnNumber:21}})),u.a.createElement("div",{className:"keys-illustrate",__source:{fileName:p,lineNumber:29,columnNumber:17}},u.a.createElement("div",{__source:{fileName:p,lineNumber:30,columnNumber:21}},"部署公钥允许以只读的方式访问仓库，主要用于仓库在生产服务器的部署上， 免去HTTP方式每次操作都要输入密码和普通SSH方式担心不小心修改仓库代码的麻烦。"),u.a.createElement("div",{__source:{fileName:p,lineNumber:34,columnNumber:21}},"部署公钥配置后的机器，只支持clone与pull等只读操作。 如果您想要对仓库进行写操作，请添加个人公钥")),u.a.createElement("div",{className:"keys-status",__source:{fileName:p,lineNumber:39,columnNumber:17}},"已启用秘钥",u.a.createElement(_.a,{title:"暂无秘钥",__source:{fileName:p,lineNumber:41,columnNumber:21}}))))}},301:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},647:function(e,t,n){"use strict";n(45);var r=n(24),u=n(0),l=n.n(u),a=n(226),c="/Users/limingliang/xcode-xpack/thoughtware-gittok-ui/src/common/btn/Btn.js";t.a=function(e){var t=e.icon,n=e.type,u=e.title,o=e.onClick,i=e.isMar;return l.a.createElement("div",{className:"xcode-btn ".concat(n?"xcode-btn-".concat(n):""," ").concat(i?"xcode-btn-mar":""),onClick:o,__source:{fileName:c,lineNumber:16,columnNumber:13}},l.a.createElement(r.default,{__source:{fileName:c,lineNumber:20,columnNumber:17}},t&&l.a.createElement("span",{className:"xcode-btn-icon",__source:{fileName:c,lineNumber:22,columnNumber:34}},t),"加载中"!==u?u:l.a.createElement(a.a,{__source:{fileName:c,lineNumber:24,columnNumber:42}})))}},653:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return i}));n(71);var r=n(31),u=n(119),l=n.n(u),a=(l()().format("YYYY-MM-DD HH:mm:ss"),l()().format("HH:mm"),function(){var e=0;return window.innerHeight?e=window.innerHeight:document.body&&document.body.clientHeight&&(e=document.body.clientHeight),document.documentElement&&document.documentElement.clientHeight&&(e=document.documentElement.clientHeight),e-120}),c=function(e){var t=e,n=document.createElement("input");document.body.appendChild(n),n.setAttribute("value",t),n.select(),document.execCommand("Copy"),r.default.success("复制成功"),n.remove()},o=function(e,t){return t?e.split("/repository/"+t):e.split("/")},i=function(e,t){return"blank"===t?{pattern:/^[^\s]*$/,message:"".concat(e,"不能包含空格")}:"appoint"===t?{pattern:/^[a-zA-Z0-9_]([a-zA-Z0-9_\-.])*$/,message:"只能包含字母和数字、 '_'、 '.'和'-'，且只能以字母、数字或'_'开头"}:{pattern:/^[\u4e00-\u9fa5a-zA-Z0-9_-]{0,}$/,message:"".concat(e,"不能包含非法字符，如&,%，&，#……等")}}},678:function(e,t,n){var r={"./es":660,"./es-do":661,"./es-do.js":661,"./es-mx":662,"./es-mx.js":662,"./es-us":663,"./es-us.js":663,"./es.js":660,"./zh-cn":664,"./zh-cn.js":664};function u(e){var t=l(e);return n(t)}function l(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}u.keys=function(){return Object.keys(r)},u.resolve=l,e.exports=u,u.id=678}}]);