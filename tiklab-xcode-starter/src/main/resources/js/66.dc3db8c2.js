(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1579:function(e,n,r){"use strict";r.r(n);var t=r(0),i=r.n(t),l=r(326),u=r(391),a=r(230),c=r(406),s=r(410),o=r(393),m=r(400),d=r(387),N=r(379),b=r(394),f=r(417),_=r(175),p=r(415),y=r(737),v=r(203),g=r(307),E=r(310),h=r(56),w=r(8),j="/Users/limingliang/Desktop/workProject/tiklab-xcode-ui/src/setting/navigator/SettingContent.js";function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function O(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,l,u,a=[],c=!0,s=!1;try{if(l=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;c=!1}else for(;!(c=(t=l.call(r)).done)&&(a.push(t.value),a.length!==n);c=!0);}catch(e){s=!0,i=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw i}}return a}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return S(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var C=Object(h.inject)(v.SYSTEM_ROLE_STORE)(Object(h.observer)((function(e){var n=e.route,r=(e.isDepartment,e.applicationRouters),l=e.systemRoleStore,u=l.getSystemPermissions,a=l.systemPermissions,c=Object(E.a)().t,s=e.location.pathname,o=O(Object(t.useState)(s),2),m=o[0],d=o[1],N=O(Object(t.useState)([""]),2),b=N[0],f=N[1],v=O(Object(t.useState)(["","","",""]),2);v[0],v[1];Object(t.useEffect)((function(){d(s)}),[s]),Object(t.useEffect)((function(){u(Object(w.getUser)().userId)}),[]);var h=function(e){return b.some((function(n){return n===e}))},S=function(n,r){return i.a.createElement("li",{style:{cursor:"pointer",paddingLeft:"".concat(20*r+20)},className:"system-aside-li system-aside-second ".concat(n.id===m?"system-aside-select":null),onClick:function(){return function(n){e.history.push(n.id)}(n)},key:n.id,__source:{fileName:j,lineNumber:51,columnNumber:13}},i.a.createElement("span",{className:"sys-content-icon",__source:{fileName:j,lineNumber:56,columnNumber:17}},n.icon),i.a.createElement("span",{__source:{fileName:j,lineNumber:57,columnNumber:17}},c(n.title)))},C=function(n,r){return i.a.createElement(y.PrivilegeButton,x({key:n.id,code:n.purviewCode},e,{__source:{fileName:j,lineNumber:64,columnNumber:13}}),S(n,r))},k=function(e,n){return i.a.createElement("li",{key:e.id,className:"system-aside-li",__source:{fileName:j,lineNumber:72,columnNumber:13}},i.a.createElement("div",{className:"system-aside-item system-aside-first",style:{paddingLeft:"".concat(20*n+20)},onClick:function(){return n=e.id,void(h(n)?f(b.filter((function(e){return e!==n}))):f(b.concat(n)));var n},__source:{fileName:j,lineNumber:73,columnNumber:17}},i.a.createElement("span",{__source:{fileName:j,lineNumber:77,columnNumber:21}},i.a.createElement("span",{className:"sys-content-icon",__source:{fileName:j,lineNumber:78,columnNumber:25}},e.icon),i.a.createElement("span",{className:"system-aside-title",__source:{fileName:j,lineNumber:79,columnNumber:25}},c(e.title))),i.a.createElement("div",{className:"system-aside-item-icon",__source:{fileName:j,lineNumber:81,columnNumber:21}},e.children?h(e.id)?i.a.createElement(_.a,{style:{fontSize:"10px"},__source:{fileName:j,lineNumber:85,columnNumber:41}}):i.a.createElement(p.a,{style:{fontSize:"10px"},__source:{fileName:j,lineNumber:86,columnNumber:41}}):"")),i.a.createElement("ul",{className:"system-aside-ul ".concat(h(e.id)?null:"system-aside-hidden"),__source:{fileName:j,lineNumber:91,columnNumber:17}},e.children&&e.children.map((function(e){var r=n+1;return e.children&&e.children.length?P(e,r):C(e,r)}))))},P=function(e,n){return(e.children.some((function(e){return!e.purviewCode}))||e.children.some((function(e){return a.includes(e.purviewCode)})))&&k(e,n)};return i.a.createElement(y.SystemNav,x({},e,{expandedTree:b,setExpandedTree:f,applicationRouters:r,outerPath:"/index/sys",notFoundPath:"",__source:{fileName:j,lineNumber:112,columnNumber:9}}),i.a.createElement("div",{className:"system",__source:{fileName:j,lineNumber:120,columnNumber:13}},i.a.createElement("div",{className:"system-aside",__source:{fileName:j,lineNumber:121,columnNumber:17}},i.a.createElement("ul",{className:"system-aside-top",style:{padding:0},__source:{fileName:j,lineNumber:122,columnNumber:21}},r.map((function(e){return e.children&&e.children.length>0?P(e,0):C(e,0)})))),i.a.createElement("div",{className:"system-content",__source:{fileName:j,lineNumber:131,columnNumber:17}},Object(g.a)(n.routes))))}))),k="/Users/limingliang/Desktop/workProject/tiklab-xcode-ui/src/setting/navigator/Setting.js";function P(){return(P=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}n.default=function(e){var n=[{id:"1",title:"Users And Departments",icon:i.a.createElement(l.default,{__source:{fileName:k,lineNumber:23,columnNumber:23}}),children:[{id:"/index/sys/user/org",title:"Departments",icon:i.a.createElement(u.a,{__source:{fileName:k,lineNumber:28,columnNumber:31}}),purviewCode:"orga"},{id:"/index/sys/user/list",title:"Users",icon:i.a.createElement(l.default,{__source:{fileName:k,lineNumber:34,columnNumber:31}}),purviewCode:"user"},{id:"/index/sys/user/userGroup",title:"Users Group",icon:i.a.createElement(l.default,{__source:{fileName:k,lineNumber:40,columnNumber:31}}),purviewCode:"user_group"},{id:"/index/sys/user/directory",title:"Users Directory",icon:i.a.createElement(a.a,{__source:{fileName:k,lineNumber:46,columnNumber:31}}),purviewCode:"user_dir"}]},{id:"/index/sys/role",title:"Privilege",icon:i.a.createElement(c.a,{__source:{fileName:k,lineNumber:54,columnNumber:23}}),purviewCode:"xcode_permission"},{id:"2",title:"Message",icon:i.a.createElement(s.a,{__source:{fileName:k,lineNumber:60,columnNumber:22}}),children:[{id:"/index/sys/mes/notice",title:"Message Notification Scheme",icon:i.a.createElement(s.a,{__source:{fileName:k,lineNumber:65,columnNumber:30}}),purviewCode:"message_type"},{id:"/index/sys/mes/send",title:"Message Send Type",icon:i.a.createElement(s.a,{__source:{fileName:k,lineNumber:71,columnNumber:30}}),purviewCode:"message_setting"}]},{id:"/index/sys/auth",title:"Keys",icon:i.a.createElement(o.a,{__source:{fileName:k,lineNumber:79,columnNumber:22}})},{id:"/index/sys/plugin",title:"Plugin",icon:i.a.createElement(m.a,{__source:{fileName:k,lineNumber:84,columnNumber:22}}),purviewCode:"xcode_plugin"},{id:"/index/sys/deploy/server",title:"server_deploy",icon:i.a.createElement(d.a,{__source:{fileName:k,lineNumber:95,columnNumber:22}})},{id:"/index/sys/deploy/env",title:"env_deploy",icon:i.a.createElement(N.a,{__source:{fileName:k,lineNumber:100,columnNumber:22}})},{id:"/index/sys/deploy/backups",title:"Backups",icon:i.a.createElement(N.a,{__source:{fileName:k,lineNumber:105,columnNumber:22}})},{id:"5",title:"Security",icon:i.a.createElement(b.a,{__source:{fileName:k,lineNumber:115,columnNumber:22}}),children:[{id:"/index/sys/myLog",title:"Operation Log",icon:i.a.createElement(b.a,{__source:{fileName:k,lineNumber:120,columnNumber:30}}),purviewCode:"xcode_log"}]},{id:"/index/sys/version",title:"Version And Licence",icon:i.a.createElement(f.a,{__source:{fileName:k,lineNumber:128,columnNumber:22}}),purviewCode:"xcode_version"}];return i.a.createElement(C,P({},e,{isDepartment:!0,applicationRouters:n,__source:{fileName:k,lineNumber:133,columnNumber:13}}))}}}]);