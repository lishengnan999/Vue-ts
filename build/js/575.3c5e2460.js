"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[575],{9602:function(e,l,n){n.r(l),n.d(l,{default:function(){return G}});var a=n(6252);const u={class:"main"},s={class:"page-info"};function o(e,l,n,o,t,c){const d=(0,a.up)("nav-menu"),i=(0,a.up)("el-aside"),r=(0,a.up)("nav-header"),p=(0,a.up)("el-header"),m=(0,a.up)("router-view"),w=(0,a.up)("el-main"),v=(0,a.up)("el-container");return(0,a.wg)(),(0,a.iD)("div",u,[(0,a.Wm)(v,{class:"main-content"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{width:e.isCollapse?"60px":"210px"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{collapse:e.isCollapse},null,8,["collapse"])])),_:1},8,["width"]),(0,a.Wm)(v,{class:"page"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"page-header"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{onFoldChange:e.handleFoldChange},null,8,["onFoldChange"])])),_:1}),(0,a.Wm)(w,{class:"page-content"},{default:(0,a.w5)((()=>[(0,a._)("div",s,[(0,a.Wm)(m)])])),_:1})])),_:1})])),_:1})])}var t=n(2262),c=n(3577),d=n.p+"img/logo.5ac24feb.svg";const i=e=>((0,a.dD)("data-v-c0cc5bb4"),e=e(),(0,a.Cn)(),e),r={class:"nav-menu"},p={class:"logo"},m=i((()=>(0,a._)("img",{class:"img",src:d,alt:"logo"},null,-1))),w={key:0,class:"title"};function v(e,l,n,u,s,o){const t=(0,a.up)("el-menu-item"),d=(0,a.up)("el-submenu"),i=(0,a.up)("el-menu");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",p,[m,e.collapse?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",w,"Vue3+TS"))]),(0,a.Wm)(i,{"default-active":e.defaultValue,class:"el-menu-vertical",collapse:e.collapse,"background-color":"#0c2135","text-color":"#b7bdc3","active-text-color":"#0a60bd"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.userMenus,(l=>((0,a.wg)(),(0,a.iD)(a.HY,{key:l.id},[1===l.type?((0,a.wg)(),(0,a.j4)(d,{key:0,index:l.id+""},{title:(0,a.w5)((()=>[l.icon?((0,a.wg)(),(0,a.iD)("i",{key:0,class:(0,c.C_)(l.icon)},null,2)):(0,a.kq)("",!0),(0,a._)("span",null,(0,c.zw)(l.name),1)])),default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.children,(l=>((0,a.wg)(),(0,a.j4)(t,{key:l.id,index:l.id+"",onClick:n=>e.handleMenuItemClick(l)},{default:(0,a.w5)((()=>[l.icon?((0,a.wg)(),(0,a.iD)("i",{key:0,class:(0,c.C_)(l.icon)},null,2)):(0,a.kq)("",!0),(0,a._)("span",null,(0,c.zw)(l.name),1)])),_:2},1032,["index","onClick"])))),128))])),_:2},1032,["index"])):2===l.type?((0,a.wg)(),(0,a.j4)(t,{key:1,index:l.id+""},{default:(0,a.w5)((()=>[l.icon?((0,a.wg)(),(0,a.iD)("i",{key:0,class:(0,c.C_)(l.icon)},null,2)):(0,a.kq)("",!0),(0,a._)("span",null,(0,c.zw)(l.name),1)])),_:2},1032,["index"])):(0,a.kq)("",!0)],64)))),128))])),_:1},8,["default-active","collapse"])])}var f=n(1272),g=n(2119),_=n(5339),k=(0,a.aZ)({props:{collapse:{type:Boolean,default:!1}},setup(){const e=(0,f.oR)(),l=(0,a.Fl)((()=>e.state.login.userMenus)),n=(0,g.tv)(),u=(0,g.yj)(),s=u.path,o=(0,_.Sx)(l.value,s),c=(0,t.iH)(o.id+""),d=e=>{var l;console.log("--------"),n.push({path:null!==(l=e.url)&&void 0!==l?l:"/not-found"})};return{userMenus:l,defaultValue:c,handleMenuItemClick:d}}}),b=n(3744);const h=(0,b.Z)(k,[["render",v],["__scopeId","data-v-c0cc5bb4"]]);var C=h,y=C;const W={class:"nav-header"},D={class:"content"};function x(e,l,n,u,s,o){const t=(0,a.up)("hy-breadcrumb"),d=(0,a.up)("user-info");return(0,a.wg)(),(0,a.iD)("div",W,[(0,a._)("i",{class:(0,c.C_)(["fold-menu",e.isFold?"el-icon-s-fold":"el-icon-s-unfold"]),onClick:l[0]||(l[0]=(...l)=>e.handleFoldClick&&e.handleFoldClick(...l))},null,2),(0,a._)("div",D,[(0,a.Wm)(t,{breadcrumbs:e.breadcrumbs},null,8,["breadcrumbs"]),(0,a.Wm)(d)])])}const F={class:"user-info"},Z={class:"el-dropdown-link"};function H(e,l,n,u,s,o){const t=(0,a.up)("el-avatar"),d=(0,a.up)("el-dropdown-item"),i=(0,a.up)("el-dropdown-menu"),r=(0,a.up)("el-dropdown");return(0,a.wg)(),(0,a.iD)("div",F,[(0,a.Wm)(r,null,{dropdown:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{icon:"el-icon-circle-close",onClick:e.handleExitClick},{default:(0,a.w5)((()=>[(0,a.Uk)("退出登录")])),_:1},8,["onClick"]),(0,a.Wm)(d,{divided:""},{default:(0,a.w5)((()=>[(0,a.Uk)("用户信息")])),_:1}),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Uk)("系统管理")])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a._)("span",Z,[(0,a.Wm)(t,{size:"small",src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}),(0,a._)("span",null,(0,c.zw)(e.name),1)])])),_:1})])}var I=n(1314),M=(0,a.aZ)({setup(){const e=(0,f.oR)(),l=(0,a.Fl)((()=>e.state.login.userInfo.name)),n=(0,g.tv)(),u=()=>{I.Z.deleteCache("token"),n.push("/main")};return{name:l,handleExitClick:u}}});const j=(0,b.Z)(M,[["render",H],["__scopeId","data-v-63d7a670"]]);var z=j;const q={class:"nav-breadcrumb"};function U(e,l,n,u,s,o){const t=(0,a.up)("el-breadcrumb-item"),d=(0,a.up)("el-breadcrumb");return(0,a.wg)(),(0,a.iD)("div",q,[(0,a.Wm)(d,{separator:"/"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.breadcrumbs,(e=>((0,a.wg)(),(0,a.j4)(t,{key:e.name,to:{path:e.path}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,c.zw)(e.name),1)])),_:2},1032,["to"])))),128))])),_:1})])}var Y=(0,a.aZ)({props:{breadcrumbs:{type:Array,default:()=>[]}},setup(){return{}}});const K=(0,b.Z)(Y,[["render",U]]);var R=K,V=R,B=(0,a.aZ)({components:{UserInfo:z,HyBreadcrumb:V},emits:["foldChange"],setup(e,{emit:l}){const n=(0,t.iH)(!1),u=()=>{n.value=!n.value,l("foldChange",n.value)},s=(0,f.oR)(),o=(0,a.Fl)((()=>{const e=s.state.login.userMenus,l=(0,g.yj)(),n=l.path;return(0,_.CH)(e,n)}));return{isFold:n,handleFoldClick:u,breadcrumbs:o}}});const E=(0,b.Z)(B,[["render",x],["__scopeId","data-v-0286603a"]]);var N=E,S=N,A=(0,a.aZ)({components:{NavMenu:y,NavHeader:S},setup(){const e=(0,t.iH)(!1),l=l=>{e.value=l};return{isCollapse:e,handleFoldChange:l}}});const T=(0,b.Z)(A,[["render",o],["__scopeId","data-v-399ea707"]]);var G=T}}]);
//# sourceMappingURL=575.3c5e2460.js.map