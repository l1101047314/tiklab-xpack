(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1249:function(e,t,n){"use strict";n.r(t);n(995);var r=n(775),a=n.n(r),l=n(0),u=n.n(l),i=n(59);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.default=Object(i.inject)("systemRoleStore")(Object(i.observer)((function(e){return u.a.createElement(a.a,c({},e,{bgroup:"gittok",__source:{fileName:"/Users/limingliang/xcode-xpack/web/thoughtware-gittok-ui/src/setting/user/SystemRole.js",lineNumber:12,columnNumber:12}}))})))},193:function(e,t){function n(){return e.exports=n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},656:function(e,t,n){"use strict";var r=n(20);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BaseModal",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"BreadCrumb",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Btn",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ListAction",{enumerable:!0,get:function(){return o.ListAction}}),Object.defineProperty(t,"Page",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Profile",{enumerable:!0,get:function(){return u.default}});var a=r(n(690)),l=r(n(707)),u=r(n(709)),i=r(n(711)),c=r(n(689)),o=n(713)},689:function(e,t,n){"use strict";var r=n(20);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(50);var a=r(n(28)),l=r(n(0));n(705);t.default=function(e){var t=e.icon,n=e.type,r=e.title,u=e.onClick,i=e.isMar,c=e.children;return l.default.createElement("div",{className:"privilege-btn ".concat(n?"privilege-btn-".concat(n):""," ").concat(i?"privilege-btn-mar":""),onClick:u},l.default.createElement(a.default,null,t&&l.default.createElement("span",{className:"privilege-btn-icon"},t),c||r))}},690:function(e,t,n){"use strict";var r=n(20);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(147);var a=r(n(122)),l=r(n(193)),u=r(n(148)),i=r(n(0)),c=r(n(689));n(706);var o=["children"];t.default=function(e){var t=e.children,n=(0,u.default)(e,o),r=i.default.createElement(i.default.Fragment,null,i.default.createElement(c.default,{onClick:n.onCancel,title:"取消",isMar:!0}),i.default.createElement(c.default,{onClick:n.onOk,title:"确定",type:"primary"}));return i.default.createElement(a.default,(0,l.default)({style:{maxWidth:"calc(100vw - 120px)",maxHeight:"calc(100vh - 120px)",marginRight:"auto",marginLeft:"auto",position:"absolute",top:60,right:0,left:0,height:"100%",display:"flex",flexDirection:"column"},wrapClassName:"thoughtware_privilege_modal",closable:!1,destroyOnClose:!0,footer:r},n),t)}},695:function(e,t){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},702:function(e,t,n){"use strict";var r=n(20),a=n(45);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(68);var l=r(n(44)),u=r(n(196)),i=r(n(36)),c=r(n(194)),o=r(n(40));n(198);var d=r(n(53)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=l?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}return r.default=e,n&&n.set(e,r),r}(n(0)),s=n(7),m=n(656);function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=d.default.Group;t.default=function(e){var t=e.roleDetail,n=e.type,r=(0,f.useState)(!1),a=(0,o.default)(r,2),i=a[0],p=a[1],v=(0,f.useState)([]),h=(0,o.default)(v,2),b=h[0],E=h[1],O=(0,f.useState)({}),P=(0,o.default)(O,2),j=P[0],_=P[1],w=(0,f.useState)([]),k=(0,o.default)(w,2),N=k[0],S=k[1],x=(0,f.useState)({}),R=(0,o.default)(x,2),M=(R[0],R[1]),D=[{title:"模块",key:"label",width:"30%",render:function(e){return f.default.createElement(d.default,{disabled:!i,indeterminate:e.indeterminate,onChange:function(t){return F(t,e)},checked:e.checkAll},e.label)}},{title:"功能点",key:"name",render:function(e){return f.default.createElement("div",{className:"privilege-role-promise"},f.default.createElement(y,{disabled:!i,options:j[e.value],value:e.checkedList,onChange:function(t){return B(t,e)}}))}}];(0,f.useEffect)((function(){null!=t&&t.id&&C()}),[null==t?void 0:t.id]);var C=function(){var e;e="system"===n?{group:null==t?void 0:t.group}:{type:"2"},s.Axios.post("/function/findFunctionList",e).then((function(e){if(!e.code){var t=A(e.data);E(t.result),_(t.resultChild),I(!0,t.result,t.resultChild)}}))},A=function(e){var t=e.map((function(e){return!e.parentFunction&&{value:e.id,label:e.name}})).filter(Boolean),n=e.map((function(e){return e.parentFunction&&e.parentFunction.id&&{value:e.id,label:e.name,parent:e.parentFunction.id}})).filter(Boolean),r=[],a={};return t.forEach((function(e){var t=e.value,l=n.filter((function(e){return e.parent===t}));r.push({value:e.value,label:e.label,indeterminate:!1,checkedList:[],checkAll:!1}),a[e.value]=l})),{result:r,resultChild:a}},L=function(e){var t=e.filter((function(e){return e.function&&e.function.parentFunction})).map((function(e){return{parentID:e.function.parentFunction.id,id:e.function.id}})),n=e.filter((function(e){return!e.function.parentFunction})).map((function(e){return e.function.id})),r={};return n.forEach((function(e){var n=t.map((function(t){if(t.parentID===e)return t.id})).filter(Boolean);r[e]=[].concat((0,c.default)(n),[e])})),r},I=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l={roleId:"domain"===n?t.role.id:t.id};s.Axios.post("roleFunction/findRoleFunctionList",l).then((function(t){if(!t.code){var n=L(t.data),l=t.data.reduce((function(e,t){return e[t.function.id]=t.id,e}),{}),u=e?a:j,i=(e?r:b).map((function(e){var t=n[e.value]?n[e.value]:[],r=0===u[e.value].length,a=t.length===u[e.value].length+1&&0!==t.length,l=a?!a:!!t.length&&t.length<u[e.value].length+1;return r&&1===t.length&&(a=!0,l=!1),g(g({},e),{},{checkedList:t,indeterminate:l,checkAll:a})}));M(l),E(i),S(t.data.map((function(e){return e.function.id})))}}))},B=function(e,t){T(e,t)},T=function(e,t){var n=b.map((function(n){if(n.value===t.value){if(0===e.length)return W(t,"delete"),g(g({},n),{},{checkedList:[],checkAll:!1,indeterminate:!1});if(e.length===j[t.value].length)return W(t,"add"),g(g({},n),{},{checkedList:e,checkAll:!0,indeterminate:!1});if(e.length<j[t.value].length)return W(t,"filterAdd",e),g(g({},n),{},{checkedList:e,checkAll:!1,indeterminate:!0})}return n}));E(n)},W=function(e,t,n){var r,a=j[e.value].map((function(e){return e.value})).filter(Boolean),l=[].concat((0,c.default)(a),[e.value]);if("add"===t)r=Array.from(new Set([].concat((0,c.default)(N),(0,c.default)(l))));else if("delete"===t)r=N.filter((function(e){return!l.includes(e)}));else{var u=N.filter((function(e){return!a.includes(e)}));r=Array.from(new Set([].concat((0,c.default)(u),(0,c.default)(n),[e.value])))}S(r)},F=function(e,t){var n=N.includes(t.value),r=b.map((function(e){if(e.value===t.value){if(W(t,n?"delete":"add"),n)return g(g({},e),{},{checkedList:[],checkAll:!1,indeterminate:!1});var r=j[t.value].map((function(e){return e.value})).filter(Boolean);return g(g({},e),{},{checkedList:r,checkAll:!0,indeterminate:!1})}return e}));E(r)},z=function(){I(),p(!1)},U=function(){var e={role:{id:"domain"===n?t.role.id:t.id},functionList:N};s.Axios.post("roleFunction/updateRoleAllFunction",e).then((function(e){0===e.code&&I(),p(!1)}))};return f.default.createElement("div",{className:"thoughtware_role_promisse"},i?f.default.createElement("div",{className:"thoughtware_role_promisse_up"},f.default.createElement(m.Btn,{onClick:z,isMar:!0},"取消"),f.default.createElement(m.Btn,{type:"primary",onClick:U},"保存")):f.default.createElement("div",{className:"thoughtware_role_promisse_up"},f.default.createElement(m.Btn,{onClick:function(){return p(!0)},icon:f.default.createElement(u.default,null)},"编辑")),f.default.createElement("div",{className:"thoughtware_role_promisse_table"},f.default.createElement(l.default,{pagination:!1,columns:D,dataSource:b,rowKey:function(e){return e.value},bordered:!0})),i&&f.default.createElement("div",{className:"thoughtware_role_promisse_bottom"},f.default.createElement(m.Btn,{onClick:z,isMar:!0},"取消"),f.default.createElement(m.Btn,{type:"primary",onClick:U},"保存")))}},705:function(e,t,n){"use strict";n.r(t)},706:function(e,t,n){"use strict";n.r(t)},707:function(e,t,n){"use strict";var r=n(20);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(50);var a=r(n(28)),l=r(n(222)),u=r(n(0));n(708);t.default=function(e){var t=e.firstItem,n=e.secondItem,r=e.children,i=e.onClick;return u.default.createElement("div",{className:"privilege-breadcrumb"},u.default.createElement(a.default,null,u.default.createElement("span",{className:i?"privilege-breadcrumb-first":"",onClick:i},i&&u.default.createElement(l.default,{style:{marginRight:8}}),u.default.createElement("span",{className:n?"privilege-breadcrumb-span":""},t)),n&&u.default.createElement("span",null," /   ",n)),u.default.createElement("div",null,r))}},708:function(e,t,n){"use strict";n.r(t)},709:function(e,t,n){"use strict";var r=n(20);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(308));n(197);var l=r(n(102)),u=r(n(0)),i=n(7);n(710);t.default=function(e){var t=e.userInfo,n=void 0===t?void 0:t,r=n||(0,i.getUser)();return u.default.createElement("div",{className:"thoughtware-profile"},r.avatar&&"null"!==r.avatar?u.default.createElement(l.default,{src:r.avatar}):r.nickname&&"null"!==r.nickname?u.default.createElement(l.default,null,r.nickname.substring(0,1)):r.name&&"null"!==r.name?u.default.createElement(l.default,null,r.name.substring(0,1)):u.default.createElement(l.default,{size:32,icon:u.default.createElement(a.default,null)}))}},710:function(e,t,n){"use strict";n.r(t)},711:function(e,t,n){"use strict";var r=n(20);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(306)),l=r(n(222)),u=r(n(0));n(712);t.default=function(e){var t=e.currentPage,n=e.changPage,r=e.page,i=r.totalPage,c=void 0===i?1:i,o=r.totalRecord,d=void 0===o?1:o;return c>1&&u.default.createElement("div",{className:"privilege-page"},u.default.createElement("div",{className:"".concat(1===t?"privilege-page-ban":"privilege-page-allow"),onClick:function(){return 1===t?null:n(t-1)}},u.default.createElement(l.default,null)),u.default.createElement("div",{className:"privilege-page-current"},t),u.default.createElement("div",{className:"privilege-page-line"}," / "),u.default.createElement("div",null,c),u.default.createElement("div",{className:"".concat(t===c?"privilege-page-ban":"privilege-page-allow"),onClick:function(){return t===c?null:n(t+1)}},u.default.createElement(a.default,null)),u.default.createElement("div",{className:"privilege-page-record"},"  共",d,"条 "))}},712:function(e,t,n){"use strict";n.r(t)},713:function(e,t,n){"use strict";var r=n(20);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ListAction",{enumerable:!0,get:function(){return a.default}});var a=r(n(714))},714:function(e,t,n){"use strict";var r=n(20);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(195);var a=r(n(149)),l=r(n(123));n(147);var u=r(n(122));n(101);var i=r(n(60)),c=r(n(196)),o=r(n(0));n(715);t.default=function(e){var t=e.edit,n=e.del;return o.default.createElement("span",{className:"privilege-listAction"},t&&o.default.createElement(i.default,{title:"修改"},o.default.createElement("span",{onClick:t,className:"edit",style:{cursor:"pointer",marginRight:15}},o.default.createElement(c.default,{style:{fontSize:16}}))),n&&o.default.createElement(a.default,{overlay:o.default.createElement("div",{className:"privilege-dropdown-more"},o.default.createElement("div",{className:"dropdown-more-item",onClick:function(){u.default.confirm({title:"确定删除吗？",content:o.default.createElement("span",{style:{color:"#f81111"}},"删除后无法恢复！"),okText:"确认",cancelText:"取消",onOk:function(){n()},onCancel:function(){}})}},"删除")),trigger:["click"],placement:"bottomRight"},o.default.createElement(i.default,{title:"更多"},o.default.createElement("span",{className:"del",style:{cursor:"pointer"}},o.default.createElement(l.default,{style:{fontSize:17}})))))}},715:function(e,t,n){"use strict";n.r(t)},723:function(e,t,n){"use strict";var r=n(20),a=n(45);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(43);var l=r(n(18)),u=r(n(36));n(57);var i=r(n(15)),c=r(n(40)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=l?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}return r.default=e,n&&n.set(e,r),r}(n(0)),d=n(46),f=n(7),s=n(656);function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=(0,d.useTranslation)().t,n=e.visible,r=e.setVisible,a=e.findRole,u=e.isBase,m=e.urlType,p=void 0===m?"system":m;if(!["system","project"].includes(p))throw Error("use RoleAdd Component must have urlType props, value:'system'、 'project'");var g=i.default.useForm(),y=(0,c.default)(g,1)[0],h=function(){y.resetFields(),r(!1)};return o.default.createElement(s.BaseModal,{title:t("privilege-role.addRole"),visible:n,onCancel:h,onOk:function(){y.submit()},forceRender:!0,destroyOnClose:!0},o.default.createElement(i.default,{form:y,preserve:!1,onFinish:function(e){var t=v(v({},e),{},{group:u?"system":"custom",type:"system"===p?"1":"2"});f.Axios.post("/role/createRole",t).then((function(e){0===e.code&&(h(),a())}))},layout:"vertical"},o.default.createElement(i.default.Item,{label:t("privilege-role.roleName"),name:"name",rules:[{required:!0,message:"用户名不能包含非法字符，如&,%，&，#……等"}]},o.default.createElement(l.default,{placeholder:t("privilege-role.roleName")})),o.default.createElement(i.default.Item,{label:t("privilege-desc"),name:"desc"},o.default.createElement(l.default,{placeholder:t("privilege-desc")}))))}},724:function(e,t,n){"use strict";var r=n(20),a=n(45);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(193));n(43);var u=r(n(18)),i=r(n(36)),c=r(n(40));n(761);var o=r(n(760)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=l?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}return r.default=e,n&&n.set(e,r),r}(n(0)),f=n(656),s=r(n(702)),m=r(n(754)),p=n(7);function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(758);var h=o.default.TabPane;t.default=function(e){var t=e.roleType,n=e.roleDetailParams,r=e.setDetail,a=e.findRole,v=(0,d.useState)(null),g=(0,c.default)(v,2),b=g[0],E=g[1],O=function(e,l){if(E(null),n[l]!==e.target.value){e.target.value||"name"!==l||r(n);var u=(0,i.default)((0,i.default)((0,i.default)({type:"system"===t?"1":"2"},l,e.target.value),"id",n.id),"group",n.group);"name"===l&&(u.desc=null==n?void 0:n.desc),"desc"===l&&(u.name=null==n?void 0:n.name),p.Axios.post("/role/updateRole",u).then((function(t){0===t.code&&(r(y(y({},n),{},(0,i.default)({},l,e.target.value))),a())}))}};return d.default.createElement("div",{className:"thoughtware_system_role_detail"},d.default.createElement(f.BreadCrumb,{firstItem:n.name||"权限详情",onClick:function(){return r(null)}}),d.default.createElement("div",{className:"detail-title"},d.default.createElement("div",{className:"label_item"},d.default.createElement("div",null,"名称"),d.default.createElement("div",null,d.default.createElement(u.default,{bordered:"name"===b,defaultValue:n.name,className:"".concat("name"===b?"":"label_item_name"),onFocus:function(){return E("name")},onBlur:function(e){return O(e,"name")},onPressEnter:function(e){return e.target.blur()}}))),d.default.createElement("div",{className:"label_item"},d.default.createElement("div",null,"类型"),d.default.createElement("div",{className:"label_item_type"},"system"===n.group?"内置":"自定义"))),d.default.createElement("div",{className:"label_item label_desc"},d.default.createElement("div",null,"描述"),d.default.createElement("div",null,d.default.createElement(u.default.TextArea,{bordered:"desc"===b,defaultValue:n.desc,className:"".concat("desc"===b?"":"label_item_name"),onFocus:function(){return E("desc")},onBlur:function(e){return O(e,"desc")},autoSize:{minRows:1,maxRows:4}}))),d.default.createElement(o.default,{defaultActiveKey:"people"},d.default.createElement(h,{tab:"成员",key:"people"},d.default.createElement(m.default,(0,l.default)({},e,{roleType:t,roleDetail:n}))),d.default.createElement(h,{tab:"权限",key:"promise"},d.default.createElement(s.default,{type:t,roleDetail:n}))))}},754:function(e,t,n){"use strict";var r=n(20),a=n(45);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(68);var l=r(n(44)),u=r(n(135));n(50);var i=r(n(28));n(219);var c=r(n(95)),o=r(n(40)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=l?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}return r.default=e,n&&n.set(e,r),r}(n(0)),f=n(59),s=n(656),m=r(n(755)),p=n(136);function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}t.default=(0,f.inject)(p.SYSTEM_ROLE_STORE)((0,f.observer)((function(e){var t=e.roleType,n=e.roleDetail,r=e.systemRoleStore,a=r.findRoleUserListAction,f=r.deleteRoleUserAction,p=(0,d.useState)(!1),v=(0,o.default)(p,2),g=v[0],y=v[1],h=(0,d.useState)([]),b=(0,o.default)(h,2),E=b[0],O=b[1];(0,d.useEffect)((function(){null!=n&&n.id&&P()}),[null==n?void 0:n.id]);var P=function(){a({roleId:n.id}).then((function(e){0===e.code&&O(e.data)}))},j=[{title:"姓名",dataIndex:["user","nickname"],key:["user","nickname"],width:"25%",ellipsis:!0,render:function(e,t){var n;return d.default.createElement(i.default,null,e||"--",1===(null==t||null===(n=t.user)||void 0===n?void 0:n.type)&&d.default.createElement(c.default,null,"管理员用户"))}},{title:"用户名",dataIndex:["user","name"],key:["user","name"],width:"20%",ellipsis:!0,render:function(e){return e||"--"}},{title:"手机号",dataIndex:["user","phone"],key:["user","phone"],width:"20%",ellipsis:!0,render:function(e){return e||"--"}},{title:"邮箱",dataIndex:["user","email"],key:["user","email"],width:"25%",ellipsis:!0,render:function(e){return e||"--"}},{title:"操作",dataIndex:"action",key:"action",width:"10%",render:function(e,t){return d.default.createElement(s.ListAction,{del:function(){return function(e){f(e.id).then((function(e){e.code||P()}))}(t)}})}}];return d.default.createElement("div",{className:"thoughtware_promisse"},d.default.createElement("div",{className:"thoughtware_promisse_up"},d.default.createElement("div",{className:"thoughtware_promisse_up-title"},"用户(",E.length,")"),d.default.createElement(s.Btn,{type:"primary",icon:d.default.createElement(u.default,null),onClick:function(){return y(!0)}},"添加用户")),d.default.createElement("div",{className:"thoughtware_promisse_person"},d.default.createElement(l.default,{columns:j,dataSource:E,rowKey:function(e){return e.id},pagination:!1})),d.default.createElement(m.default,{visible:g,setVisible:y,roleType:t,roleDetail:n,getRoleUser:P}))})))},755:function(e,t,n){"use strict";var r=n(20),a=n(45);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(223));n(68);var u=r(n(44));n(309);var i=r(n(225));n(43);var c=r(n(18)),o=r(n(150)),d=r(n(194)),f=r(n(36)),s=r(n(40)),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=l?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}return r.default=e,n&&n.set(e,r),r}(n(0)),p=r(n(690)),v=n(59),g=n(656),y=r(n(756)),h=r(n(757));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,f.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=(0,v.inject)("systemRoleStore")((0,v.observer)((function(e){var t=e.getRoleUser,n=(e.roleType,e.roleDetail),r=e.visible,a=e.setVisible,f=e.systemRoleStore,v=(0,m.useState)("user"),b=(0,s.default)(v,2),E=b[0],P=b[1],j=f.getUserPageAction,_=f.findUserGroupAction,w=f.findOrgaTree,k=f.createBatchRoleUserAction,N={pageSize:10,currentPage:1},S=(0,m.useState)({pageParam:N}),x=(0,s.default)(S,2),R=x[0],M=x[1],D=(0,m.useState)({}),C=(0,s.default)(D,2),A=C[0],L=C[1],I=(0,m.useState)({}),B=(0,s.default)(I,2),T=B[0],W=B[1],F=(0,m.useState)({}),z=(0,s.default)(F,2),U=z[0],K=z[1],V=(0,m.useState)([]),J=(0,s.default)(V,2),G=J[0],H=J[1],Y=(0,m.useState)([]),q=(0,s.default)(Y,2),Z=q[0],$=q[1],Q=(0,m.useState)([]),X=(0,s.default)(Q,2),ee=X[0],te=X[1],ne=(0,m.useState)([]),re=(0,s.default)(ne,2),ae=re[0],le=re[1],ue=(0,m.useState)([]),ie=(0,s.default)(ue,2),ce=ie[0],oe=ie[1];(0,m.useEffect)((function(){r&&le(null==ce?void 0:ce.map((function(e){return e.id})))}),[ce,r,E]),(0,m.useEffect)((function(){pe(U)}),[U]),(0,m.useEffect)((function(){me()}),[T]),(0,m.useEffect)((function(){r&&"user"===E&&se()}),[r,E,R]);var de,fe,se=function(){j(R).then((function(e){var t;0===e.code&&(H(null==e||null===(t=e.data)||void 0===t||null===(t=t.dataList)||void 0===t?void 0:t.map((function(e){return{id:e.id,name:e.nickname,type:"user"}}))),L({currentPage:e.data.currentPage,totalPage:e.data.totalPage,totalRecord:e.data.totalRecord}))}))},me=function(){w(T).then((function(e){0===e.code&&($((null==e?void 0:e.data)||[]),L({}))}))},pe=function(){_(U).then((function(e){var t;0===e.code&&(te(null==e||null===(t=e.data)||void 0===t?void 0:t.map((function(e){return{id:e.id,name:e.name,type:"group"}}))),L({}))}))},ve=function(){"{}"!==JSON.stringify(T)&&W({}),"{}"!==JSON.stringify(U)&&K({})},ge=function(){M({pageParam:N}),ve(),le([]),oe([]),a(!1)},ye=function(e){var t;t=ae.indexOf(e.id)>=0?ce.filter((function(t){return t.id!==e.id})):[].concat((0,d.default)(ce),[e]),oe(t)},he={selectedRowKeys:ae,onSelect:function(e){return ye(e)}};return m.default.createElement(p.default,{visible:r,onCancel:ge,onOk:function(){var e=ce.filter((function(e){return"group"===e.type})).map((function(e){return e.id})),r=ce.filter((function(e){return"org"===e.type})).map((function(e){return"org"===e.id?"111111":e.id})),a=ce.filter((function(e){return"user"===e.type})).map((function(e){return e.id}));k({groupList:e,orgaList:r,userList:a,role:{id:n.id}}).then((function(e){0===e.code&&t(),ge()}))},width:700,title:"添加用户"},m.default.createElement("div",{className:"user-org-group-add-modal"},m.default.createElement("div",{className:"add-left"},m.default.createElement("div",{className:"add-left-tabs"},m.default.createElement("div",{className:"add-left-tab ".concat("user"===E?"add-left-tab-active":""),onClick:function(){P("user"),M({pageParam:N})}},"用户"),m.default.createElement("div",{className:"add-left-tab ".concat("org"===E?"add-left-tab-active":""),onClick:function(){ve(),P("org")}},"部门"),m.default.createElement("div",{className:"add-left-tab ".concat("group"===E?"add-left-tab-active":""),onClick:function(){ve(),P("group")}},"用户组")),m.default.createElement("div",{className:"add-left-search"},m.default.createElement(c.default,{placeholder:"搜索",prefix:m.default.createElement(o.default,null),value:"user"===E?null==R?void 0:R.accent:"org"===E?null==T?void 0:T.orgaName:null==U?void 0:U.name,onPressEnter:function(e){return function(e){"user"===E?M(O(O({},R),{},{accent:e.target.value})):"org"===E?W({orgaName:e.target.value}):K({name:e.target.value})}(e)}})),"org"===E?(null==Z?void 0:Z.length)>0?m.default.createElement("div",{className:"add-left-table"},m.default.createElement("div",null,m.default.createElement(i.default,{checkable:!0,blockNode:!0,defaultExpandParent:!0,checkedKeys:ae,defaultExpandedKeys:["org"],treeData:(de=Z,fe=[],function e(t,n){t.forEach((function(t,r){var a={key:"111111"===t.orgaId?"org":t.orgaId,id:"111111"===t.orgaId?"org":t.orgaId,title:t.orgaName,name:t.orgaName,type:"org",children:[]};n.push(a),t.children&&t.children.length>0&&e(t.children,n[r].children)}))}(de,fe),fe),onCheck:function(e,t){var n=t.checkedNodes,r=ce.filter((function(e){return"org"!==e.type})).concat(n);oe(r)}}))):null:m.default.createElement("div",{className:"add-left-table"},m.default.createElement("div",null,m.default.createElement(u.default,{columns:[{title:"全选",dataIndex:"name",key:"name",render:function(e,t){return m.default.createElement("div",{className:"add-left-data"},"user"===E&&m.default.createElement(g.Profile,{userInfo:t}),"group"===E&&m.default.createElement("img",{src:y.default,alt:"用户组",width:26,height:26}),m.default.createElement("div",{className:"add-left-data-text"},e))}}],dataSource:"user"===E?G:ee,rowSelection:he,rowKey:function(e){return e.id},pagination:!1,showHeader:!1}),m.default.createElement(g.Page,{currentPage:R.pageParam.currentPage,changPage:function(e){M(O(O({},R),{},{pageParam:{pageSize:10,currentPage:e}}))},page:A})))),m.default.createElement("div",{className:"add-right ".concat(ce.length>0?"add-right-auto":"add-right-hidden")},m.default.createElement("div",{className:"add-right-title"},"已选择"),ce&&ce.length>0?m.default.createElement("div",{className:"add-right-select"},ce.map((function(e){return m.default.createElement("div",{key:e.id,className:"select-item"},"user"===e.type&&m.default.createElement(g.Profile,{userInfo:e}),"group"===e.type&&m.default.createElement("img",{src:y.default,alt:"用户组",width:22,height:22}),"org"===e.type&&m.default.createElement("img",{src:h.default,alt:"用户组",width:22,height:22}),m.default.createElement("div",{className:"select-item-name"},e.name),m.default.createElement(l.default,{onClick:function(){return ye(e)},className:"select-item-close"}))}))):m.default.createElement("div",{className:"add-right-empty"},"暂无选择"))))})))},756:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/privilege-group.svg"},757:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/privilege-orga.svg"},758:function(e,t,n){"use strict";n.r(t)},759:function(e,t,n){"use strict";n.r(t)},763:function(e,t,n){"use strict";var r=n(695),a=n.n(r),l=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function u(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(a.a[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var u=new RegExp(l),i=null;null!==(i=u.exec(e));)if(i[0].trim())if(i[1]){var c=i[1].trim(),o=[c,""];c.indexOf("=")>-1&&(o=c.split("=")),t.attrs[o[0]]=o[1],u.lastIndex--}else i[2]&&(t.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return t}var i=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,c=/^\s*$/,o=Object.create(null);function d(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(d,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var f={parse:function(e,t){t||(t={}),t.components||(t.components=o);var n,r=[],a=[],l=-1,d=!1;if(0!==e.indexOf("<")){var f=e.indexOf("<");r.push({type:"text",content:-1===f?e:e.substring(0,f)})}return e.replace(i,(function(i,o){if(d){if(i!=="</"+n.name+">")return;d=!1}var f,s="/"!==i.charAt(1),m=i.startsWith("\x3c!--"),p=o+i.length,v=e.charAt(p);if(m){var g=u(i);return l<0?(r.push(g),r):((f=a[l]).children.push(g),r)}if(s&&(l++,"tag"===(n=u(i)).type&&t.components[n.name]&&(n.type="component",d=!0),n.voidElement||d||!v||"<"===v||n.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===l&&r.push(n),(f=a[l-1])&&f.children.push(n),a[l]=n),(!s||n.voidElement)&&(l>-1&&(n.voidElement||n.name===i.slice(2,-1))&&(l--,n=-1===l?r:a[l]),!d&&"<"!==v&&v)){f=-1===l?r:a[l].children;var y=e.indexOf("<",p),h=e.slice(p,-1===y?void 0:y);c.test(h)&&(h=" "),(y>-1&&l+f.length>=0||" "!==h)&&f.push({type:"text",content:h})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+d("",t)}),"")}};t.a=f},775:function(e,t,n){"use strict";var r=n(20);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(776));t.default=a.default},776:function(e,t,n){"use strict";var r=n(20),a=n(45);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(69);var l=r(n(41));n(74);var u=r(n(34));n(68);var i=r(n(44)),c=r(n(135)),o=r(n(36));n(101);var d=r(n(60)),f=r(n(501));n(50);var s=r(n(28));n(219);var m=r(n(95)),p=r(n(40)),v=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=P(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=l?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}return r.default=e,n&&n.set(e,r),r}(n(0)),g=n(59),y=n(46),h=r(n(723)),b=r(n(724)),E=n(136),O=n(656);function P(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(P=function(e){return e?n:t})(e)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(759);t.default=(0,g.inject)(E.SYSTEM_ROLE_STORE)((0,g.observer)((function(e){var t=e.systemRoleStore,n=e.isBase,r=void 0!==n&&n,a=(0,y.useTranslation)().t,o=t.findRolePageAction,g=t.rolePage,E=t.deleteRoleAction,P=t.privilegeSystemRole,j=t.setDefaultRoleAction,w=(0,v.useState)(!1),k=(0,p.default)(w,2),N=k[0],S=k[1],x=(0,v.useState)(null),R=(0,p.default)(x,2),M=R[0],D=R[1],C=(0,v.useState)({pageParam:{pageSize:13,currentPage:1}}),A=(0,p.default)(C,2),L=A[0],I=A[1];(0,v.useEffect)((function(){B()}),[L]);var B=function(){o(L)},T=[{title:"角色名称",dataIndex:"name",width:"40%",ellipsis:!0,render:function(e,t){var n=t.businessType,r=t.defaultRole;return 1===n&&1===r?v.default.createElement(s.default,null,v.default.createElement("div",{className:"thoughtware_system_role_name",onClick:function(){return U(t)}},e),v.default.createElement(m.default,{color:"#87d068",style:{marginLeft:8,marginRight:0}},"默认"),v.default.createElement(m.default,{style:{marginLeft:8,marginRight:0}},"管理员")):1===r?v.default.createElement(s.default,null,v.default.createElement("div",{className:"thoughtware_system_role_name",onClick:function(){return U(t)}},e),v.default.createElement(m.default,{color:"#87d068",style:{marginLeft:8,marginRight:0}},"默认")):1===n?v.default.createElement(s.default,null,v.default.createElement("div",{className:"thoughtware_system_role_name",onClick:function(){return U(t)}},e),v.default.createElement(m.default,{style:{marginLeft:8,marginRight:0}},"管理员")):v.default.createElement("div",{className:"thoughtware_system_role_name",onClick:function(){return U(t)}},e)}},{title:"成员数",dataIndex:"roleUserList",width:"25%",ellipsis:!0,render:function(e,t){var n=t.roleUserList,r=n&&n.length>0?n.length:0;return"".concat(r,"人")}},{title:"类型",dataIndex:"group",width:"26%",ellipsis:!0,render:function(e){return"system"===e?"内置":a("privilege-role.custom")}},{title:"操作",dataIndex:"action",render:function(e,t){return r?v.default.createElement(s.default,{size:"middle"},0===t.defaultRole&&v.default.createElement(d.default,{title:"设置默认"},v.default.createElement(f.default,{onClick:function(){return F(t)},style:{fontSize:"var(--thoughtware-icon-size-16)"}})),v.default.createElement(O.ListAction,{del:function(){return W(t.id)}})):v.default.createElement(s.default,{size:"middle"},0===t.defaultRole&&v.default.createElement(d.default,{title:"设置默认"},v.default.createElement(f.default,{onClick:function(){return F(t)},style:{fontSize:"var(--thoughtware-icon-size-16)"}})),0===t.businessType&&"system"!==t.group&&v.default.createElement(O.ListAction,{del:function(){return W(t.id)}}))}}],W=function(e){E(e).then((function(e){e.code||o(L)}))},F=function(e){j(e).then((function(e){e.code||o(L)}))},z=function(){S(!0)},U=function(e){D(e)};return v.default.createElement(l.default,{className:"thoughtware_system_role"},v.default.createElement(u.default,{sm:{span:"24"},md:{span:"24"},lg:{span:"24"},xl:{span:"18",offset:"3"},xxl:{span:"18",offset:"3"}},M?v.default.createElement(b.default,{roleDetailParams:M,setDetail:D,findRole:B,roleType:"system"}):v.default.createElement("div",{className:"thoughtware_system_role-content"},v.default.createElement(O.BreadCrumb,{firstItem:"权限"},r?v.default.createElement(O.Btn,{icon:v.default.createElement(c.default,null),onClick:function(){return z()},title:a("privilege-role.addSystemRole")}):v.default.createElement(O.Btn,{icon:v.default.createElement(c.default,null),type:"primary",onClick:function(){return z()},title:a("privilege-role.addRole")})),v.default.createElement(i.default,{columns:T,dataSource:P,rowKey:function(e){return e.id},pagination:!1}),v.default.createElement(O.Page,{currentPage:L.pageParam.currentPage,changPage:function(e){I(_(_({},L),{},{pageParam:{pageSize:12,currentPage:e}}))},page:g}))),v.default.createElement(h.default,{visible:N,setVisible:S,isBase:r,findRole:B,urlType:"system"}))})))},995:function(e,t,n){"use strict";n(759)}}]);