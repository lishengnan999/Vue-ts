"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[715],{186:function(e,a,n){n.r(a),n.d(a,{default:function(){return v}});var t=n(6252);const l={class:"role"},o={class:"menu-tree"};function r(e,a,n,r,i,d){const c=(0,t.up)("page-search"),p=(0,t.up)("page-content"),h=(0,t.up)("el-tree"),s=(0,t.up)("page-modal");return(0,t.wg)(),(0,t.iD)("div",l,[(0,t.Wm)(c,{searchFormConfig:e.searchFormConfig},null,8,["searchFormConfig"]),(0,t.Wm)(p,{contentTableConfig:e.contentTableConfig,pageName:"role",onNewBtnClick:e.handleNewData,onEditBtnClick:e.handleEditData},null,8,["contentTableConfig","onNewBtnClick","onEditBtnClick"]),(0,t.Wm)(s,{ref:"pageModalRef",defaultInfo:e.defaultInfo,otherInfo:e.otherInfo,modalConfig:e.modalConfig,pageName:"role"},{default:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t.Wm)(h,{ref:"elTreeRef",data:e.menus,"show-checkbox":"","node-key":"id",props:{children:"children",label:"name"},onCheck:e.handleCheckChange},null,8,["data","onCheck"])])])),_:1},8,["defaultInfo","otherInfo","modalConfig"])])}var i=n(2262),d=n(1272),c=n(5339),p=n(229),h=n(1900),s=n(9255);const f={labelWidth:"120px",formItems:[{field:"name",type:"input",label:"角色名称",placeholder:"请输入角色名称"},{field:"intro",type:"input",label:"权限介绍",placeholder:"请输入权限介绍"},{field:"createTime",type:"datepicker",label:"创建时间",otherOptions:{startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"daterange"}}]},u={title:"用户列表",propList:[{prop:"name",label:"角色名",minWidth:"100"},{prop:"intro",label:"权限介绍",minWidth:"100"},{prop:"createAt",label:"创建时间",minWidth:"250",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"250",slotName:"updateAt"},{label:"操作",minWidth:"120",slotName:"handler"}],showIndexColumn:!0,showSelectColumn:!0},m={formItems:[{field:"name",type:"input",label:"角色名",placeholder:"请输入角色名"},{field:"intro",type:"input",label:"角色介绍",placeholder:"请输入角色介绍"}],colLayout:{span:24},itemStyle:{}};var C=n(4044),g=(0,t.aZ)({name:"role",components:{PageContent:h.Z,PageSearch:p.Z,PageModal:s.Z},setup(){const e=(0,i.iH)(),a=a=>{const n=(0,c.v_)(a.menuList);(0,t.Y3)((()=>{var a;console.log(e.value),null===(a=e.value)||void 0===a||a.setCheckedKeys(n,!1)}))},[n,l,o,r]=(0,C.S)(void 0,a),p=(0,d.oR)(),h=(0,t.Fl)((()=>p.state.entireMenu)),s=(0,i.iH)({}),g=(e,a)=>{const n=a.checkedKeys,t=a.halfCheckedKeys,l=[...n,...t];s.value={menuList:l}};return{searchFormConfig:f,contentTableConfig:u,modalConfig:m,pageModalRef:n,defaultInfo:l,handleNewData:o,handleEditData:r,menus:h,otherInfo:s,handleCheckChange:g,elTreeRef:e}}}),b=n(3744);const k=(0,b.Z)(g,[["render",r],["__scopeId","data-v-27794479"]]);var v=k}}]);
//# sourceMappingURL=715.935fe06f.js.map