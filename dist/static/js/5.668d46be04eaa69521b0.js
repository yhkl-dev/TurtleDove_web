webpackJsonp([5],{"0vTs":function(e,t,n){var o=n("BzPn");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("8bSs")("2ff90648",o,!0)},"593g":function(e,t,n){(e.exports=n("UTlt")(!1)).push([e.i,'\n.bottom[data-v-e2ac263a] {\n  margin-top: 13px;\n  line-height: 12px;\n}\n.button[data-v-e2ac263a] {\n  padding: 0;\n  float: right;\n}\n.clearfix[data-v-e2ac263a]:before,\n.clearfix[data-v-e2ac263a]:after {\n  display: table;\n  content: "";\n}\n.clearfix[data-v-e2ac263a]:after {\n  clear: both\n}\n',""])},"7+2o":function(e,t,n){(e.exports=n("UTlt")(!1)).push([e.i,'\n.item[data-v-0ee83ed0] {\n  margin-bottom: 18px;\n}\n.clearfix[data-v-0ee83ed0]:before,\n.clearfix[data-v-0ee83ed0]:after {\n  display: table;\n  content: "";\n}\n.clearfix[data-v-0ee83ed0]:after {\n  clear: both\n}\n.el-row[data-v-0ee83ed0] {\n  margin-bottom: 20px;\n&:last-child {\n    margin-bottom: 0;\n}\n}\n\n',""])},"92Fu":function(e,t,n){(e.exports=n("UTlt")(!1)).push([e.i,"\n.el-steps .el-step:last-of-type .el-step__description {\n  padding-right: 10% !important;\n}\n",""])},AJao:function(e,t,n){(e.exports=n("UTlt")(!1)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},BT9z:function(e,t,n){var o=n("92Fu");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("8bSs")("0304eae2",o,!0)},BzPn:function(e,t,n){(e.exports=n("UTlt")(!1)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},"DE+d":function(e,t,n){var o=n("x6SF");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("8bSs")("54ad8a12",o,!0)},L0l1:function(e,t,n){var o=n("AJao");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("8bSs")("5567dff8",o,!0)},Suew:function(e,t,n){var o=n("593g");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("8bSs")("6a885bee",o,!0)},mLOs:function(e,t,n){var o=n("7+2o");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n("8bSs")("1484f1b9",o,!0)},"x+gu":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("J7No"),a=n("o3g8"),l={name:"workOrderModelManager",props:["workOrderModelList","templateWorkOrderTypeList","templateWorkOrderFlowTypeList","workOrderModelListTotalNum"],data:function(){return{updateDialogVisible:!1,addDialogVisible:!1,changeModelForm:{id:"",model_create_time:"",model_name:"",mode_status:"",order_type:"",order_flow_type:""},addModelForm:{model_name:"",mode_status:1,order_type:"",order_flow_type:""},searchForm:{page:1,page_size:8}}},methods:{statusChange:function(e){var t=this;Object(o.A)(e.id,e).then(function(){t.$message({message:"操作成功",type:"success"}),t.$emit("fresh",t.searchForm)})},paginationChange:function(e){this.searchForm.page=e,this.$emit("fresh",this.searchForm)},handleEditWorkOrderModel:function(e){this.updateDialogVisible=!0,void 0!==this.$refs.changeModelForm&&this.$refs.changeModelForm.resetFields();var t=e.id,n=e.model_create_time,o=e.model_name,a=e.mode_status,l=e.order_type,r=e.order_flow_type;this.changeModelForm={id:t,model_create_time:n,model_name:o,mode_status:a,order_type:l,order_flow_type:r}},handleSubmitWorkOrderModel:function(){var e=this;this.$refs.changeModelForm.validate(function(t){t&&Object(o.A)(e.changeModelForm.id,e.changeModelForm).then(function(){e.$message({message:"操作成功",type:"success"}),e.updateDialogVisible=!1,e.$emit("fresh",e.searchForm)})})},handleAddOrderModel:function(){this.addDialogVisible=!0},handleSubmitAddWorkOrderModel:function(){var e=this;this.$refs.addModelForm.validate(function(t){t&&Object(o.b)(e.addModelForm).then(function(){e.addDialogVisible=!1,e.$message({message:"添加成功",type:"success"}),e.$emit("fresh",e.searchForm)})})}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-card",[n("div",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[n("span",[e._v("工单模板")]),e._v(" "),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{size:"mini",type:"text",icon:"el-icon-plus"},on:{click:e.handleAddOrderModel}},[e._v("添加")])],1),e._v(" "),n("el-table",{attrs:{"show-header":!1,data:e.workOrderModelList},on:{"row-dblclick":e.handleEditWorkOrderModel}},[n("el-table-column",{attrs:{label:"",width:"40px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",[n("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n            模板类型: "+e._s(t.row.order_flow_type_name)+" "),n("br"),n("br"),e._v("\n            模板流程: "+e._s(t.row.order_type_name)),n("br"),n("br"),e._v("\n            创建时间: "+e._s(t.row.model_create_time)+"\n          ")]),e._v(" "),n("i",{staticClass:"el-icon-info"})])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"工单模板",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",{attrs:{content:"双击编辑"}},[n("div",{attrs:{slot:""},slot:"default"},[e._v(e._s(t.row.model_name))])])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"状态",prop:"mode_status",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-color":"#409EFF","active-value":1,"inactive-value":0},on:{change:function(n){return e.statusChange(t.row)}},model:{value:t.row.mode_status,callback:function(n){e.$set(t.row,"mode_status",n)},expression:"scope.row.mode_status"}})]}}])})],1),e._v(" "),n("div",{staticStyle:{"text-align":"center","margin-top":"5px"}},[n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.workOrderModelListTotalNum>1,expression:"workOrderModelListTotalNum>1"}],attrs:{"pager-count":5,"page-size":e.searchForm.page_size,layout:"prev, pager, next","current-page":e.searchForm.page,total:e.workOrderModelListTotalNum},on:{"current-change":e.paginationChange,"update:currentPage":function(t){return e.$set(e.searchForm,"page",t)},"update:current-page":function(t){return e.$set(e.searchForm,"page",t)}}})],1),e._v(" "),n("el-dialog",{attrs:{title:"编辑模板",visible:e.updateDialogVisible,width:"20%",center:""},on:{"update:visible":function(t){e.updateDialogVisible=t}}},[n("el-form",{ref:"changeModelForm",attrs:{model:e.changeModelForm,"label-width":"80px"}},[n("el-form-item",{attrs:{prop:"model_create_time",label:"创建时间"}},[n("el-input",{attrs:{size:"small",disabled:!0,placeholder:"创建时间"},model:{value:e.changeModelForm.model_create_time,callback:function(t){e.$set(e.changeModelForm,"model_create_time",t)},expression:"changeModelForm.model_create_time"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"model_name",label:"模板名称"}},[n("el-input",{attrs:{size:"small",placeholder:"模板名称"},model:{value:e.changeModelForm.model_name,callback:function(t){e.$set(e.changeModelForm,"model_name",t)},expression:"changeModelForm.model_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"模板类型",prop:"order_type"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"模板类型",size:"small"},model:{value:e.changeModelForm.order_type,callback:function(t){e.$set(e.changeModelForm,"order_type",t)},expression:"changeModelForm.order_type"}},e._l(e.templateWorkOrderTypeList,function(e,t){return n("el-option",{key:t,attrs:{label:e.type_name,value:e.id}})}),1)],1),e._v(" "),n("el-form-item",{attrs:{prop:"order_flow_type",label:"模板流程"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"模板类型",size:"small"},model:{value:e.changeModelForm.order_flow_type,callback:function(t){e.$set(e.changeModelForm,"order_flow_type",t)},expression:"changeModelForm.order_flow_type"}},e._l(e.templateWorkOrderFlowTypeList,function(e,t){return n("el-option",{key:t,attrs:{label:e.flow_type_name,value:e.id}})}),1)],1),e._v(" "),n("el-form-item",{staticStyle:{"margin-top":"5px"}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleSubmitWorkOrderModel}},[e._v("确 定")]),e._v(" "),n("el-button",{attrs:{size:"small"},on:{click:function(t){e.updateDialogVisible=!1}}},[e._v("取 消")])],1)],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"创建模板",visible:e.addDialogVisible,width:"20%",center:""},on:{"update:visible":function(t){e.addDialogVisible=t}}},[n("el-form",{ref:"addModelForm",attrs:{model:e.addModelForm,"label-width":"80px"}},[n("el-form-item",{attrs:{prop:"model_name",label:"模板名称"}},[n("el-input",{attrs:{size:"small",placeholder:"模板名称"},model:{value:e.addModelForm.model_name,callback:function(t){e.$set(e.addModelForm,"model_name",t)},expression:"addModelForm.model_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"模板类型",prop:"order_type"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"模板类型",size:"small"},model:{value:e.addModelForm.order_type,callback:function(t){e.$set(e.addModelForm,"order_type",t)},expression:"addModelForm.order_type"}},e._l(e.templateWorkOrderTypeList,function(e,t){return n("el-option",{key:t,attrs:{label:e.type_name,value:e.id}})}),1)],1),e._v(" "),n("el-form-item",{attrs:{prop:"order_flow_type",label:"模板流程"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"模板类型",size:"small"},model:{value:e.addModelForm.order_flow_type,callback:function(t){e.$set(e.addModelForm,"order_flow_type",t)},expression:"addModelForm.order_flow_type"}},e._l(e.templateWorkOrderFlowTypeList,function(e,t){return n("el-option",{key:t,attrs:{label:e.flow_type_name,value:e.id}})}),1)],1),e._v(" "),n("el-form-item",{staticStyle:{"margin-top":"5px"}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleSubmitAddWorkOrderModel}},[e._v("确 定")]),e._v(" "),n("el-button",{attrs:{size:"small"},on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var i=n("/Xao")(l,r,!1,function(e){n("L0l1")},"data-v-b0668572",null).exports,s={name:"workOrderTypeManager",props:["templateWorkOrderTypeList","templateWorkOrderTypeListTotalNum"],data:function(){return{addOrderTypeVisible:!1,updateOrderTypeVisible:!1,addModelForm:{type_name:"",type_status:1,link_project:""},updateModelForm:{type_name:"",type_status:"",link_project:""},searchForm:{page:1,page_size:8}}},methods:{statusChange:function(e){var t=this;Object(o.D)(e.id,e).then(function(){t.$message({message:"操作成功",type:"success"}),t.$emit("fresh",t.searchForm)})},paginationChange:function(e){this.searchForm.page=e,this.$emit("fresh",this.searchForm)},handleAddOrderType:function(){this.addOrderTypeVisible=!0},handleEditWorkOrderModel:function(e){this.updateOrderTypeVisible=!0;var t=e.id,n=e.type_name,o=e.type_status,a=e.link_project;this.updateModelForm={id:t,type_name:n,type_status:o,link_project:a}},handleSubmitAddWorkOrderModel:function(){var e=this;this.$refs.addModelForm.validate(function(t){t&&Object(o.e)(e.addModelForm).then(function(){e.addOrderTypeVisible=!1,e.$message({message:"添加成功",type:"success"}),e.$emit("fresh",e.searchForm)})})},handleSubmitWorkOrderModel:function(){var e=this;this.$refs.updateModelForm.validate(function(t){t&&Object(o.D)(e.updateModelForm.id,e.updateModelForm).then(function(){e.updateOrderTypeVisible=!1,e.$message({message:"修改成功",type:"success"}),e.$emit("fresh",e.searchForm)})})}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-card",[n("div",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[n("span",[e._v("工单类型")]),e._v(" "),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{size:"mini",type:"text",icon:"el-icon-plus"},on:{click:e.handleAddOrderType}},[e._v("添加")])],1),e._v(" "),n("el-table",{attrs:{"show-header":!1,data:e.templateWorkOrderTypeList},on:{"row-dblclick":e.handleEditWorkOrderModel}},[n("el-table-column",{attrs:{label:"",width:"40px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",[n("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n              创建时间: "+e._s(t.row.create_time)+" "),n("br"),n("br"),e._v("\n              修改时间: "+e._s(t.row.change_time)),n("br"),n("br"),e._v("\n              关联项目: "+e._s(t.row.link_project||"暂无项目")+"\n            ")]),e._v(" "),n("i",{staticClass:"el-icon-info"})])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"工单类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",{attrs:{content:"双击编辑"}},[n("div",{attrs:{slot:""},slot:"default"},[e._v(e._s(t.row.type_name))])])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"状态",prop:"type_status",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0},on:{change:function(n){return e.statusChange(t.row)}},model:{value:t.row.type_status,callback:function(n){e.$set(t.row,"type_status",n)},expression:"scope.row.type_status"}})]}}])})],1),e._v(" "),n("div",{staticStyle:{"text-align":"center","margin-top":"5px"}},[n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.templateWorkOrderTypeListTotalNum>1,expression:"templateWorkOrderTypeListTotalNum>1"}],attrs:{"pager-count":5,"page-size":e.searchForm.page_size,layout:"prev, pager, next","current-page":e.searchForm.page,total:e.templateWorkOrderTypeListTotalNum},on:{"current-change":e.paginationChange,"update:currentPage":function(t){return e.$set(e.searchForm,"page",t)},"update:current-page":function(t){return e.$set(e.searchForm,"page",t)}}})],1),e._v(" "),n("el-dialog",{attrs:{title:"编辑类型",visible:e.updateOrderTypeVisible,width:"20%",center:""},on:{"update:visible":function(t){e.updateOrderTypeVisible=t}}},[n("el-form",{ref:"updateModelForm",attrs:{model:e.updateModelForm,"label-width":"80px"}},[n("el-form-item",{attrs:{prop:"type_name",label:"类型名称"}},[n("el-input",{attrs:{size:"small",placeholder:"类型名称"},model:{value:e.updateModelForm.type_name,callback:function(t){e.$set(e.updateModelForm,"type_name",t)},expression:"updateModelForm.type_name"}})],1),e._v(" "),n("el-form-item",{staticStyle:{"margin-top":"5px"}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleSubmitWorkOrderModel}},[e._v("确 定")]),e._v(" "),n("el-button",{attrs:{size:"small"},on:{click:function(t){e.updateOrderTypeVisible=!1}}},[e._v("取 消")])],1)],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"创建类型",visible:e.addOrderTypeVisible,width:"20%",center:""},on:{"update:visible":function(t){e.addOrderTypeVisible=t}}},[n("el-form",{ref:"addModelForm",attrs:{model:e.addModelForm,"label-width":"80px"}},[n("el-form-item",{attrs:{prop:"model_name",label:"类型名称"}},[n("el-input",{attrs:{size:"small",placeholder:"类型名称"},model:{value:e.addModelForm.type_name,callback:function(t){e.$set(e.addModelForm,"type_name",t)},expression:"addModelForm.type_name"}})],1),e._v(" "),n("el-form-item",{staticStyle:{"margin-top":"5px"}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleSubmitAddWorkOrderModel}},[e._v("确 定")]),e._v(" "),n("el-button",{attrs:{size:"small"},on:{click:function(t){e.addOrderTypeVisible=!1}}},[e._v("取 消")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var m=n("/Xao")(s,d,!1,function(e){n("0vTs")},"data-v-66e6b75d",null).exports,p={name:"workOrderFlowTypeManager",props:["templateWorkOrderFlowTypeList","templateWorkOrderFlowList","templateWorkOrderFlowListTotalNum"],data:function(){return{addFlowTypeVisible:!1,updateFlowTypeVisible:!1,changeFlowTypeForm:{flow_type_name:"",flow_type_status:"",task_exec_flow:"",task_audit_flow:""},addFlowTypeForm:{flow_type_name:"",flow_type_status:1,task_exec_flow:"",task_audit_flow:""},searchForm:{page:1,page_size:8}}},methods:{statusChange:function(e){var t=this;console.log("change status"),Object(o.z)(e.id,e).then(function(){t.$message({message:"操作成功",type:"success"}),t.$emit("fresh",t.searchForm)})},paginationChange:function(e){this.searchForm.page=e,this.$emit("fresh",this.searchForm)},handleAddFlowType:function(){this.addFlowTypeVisible=!0},handleSubmitAddFlowType:function(){var e=this;this.$refs.addFlowTypeForm.validate(function(t){t&&Object(o.a)(e.addFlowTypeForm).then(function(){e.addFlowTypeVisible=!1,e.$message({message:"添加成功",type:"success"}),e.$refs.addFlowTypeForm.resetFields(),e.$emit("fresh",e.searchForm)})})},handleEditFlowType:function(e){this.updateFlowTypeVisible=!0;var t=e.id,n=e.flow_type_name,o=e.flow_type_status,a=e.task_exec_flow,l=e.task_audit_flow;this.changeFlowTypeForm={id:t,flow_type_name:n,flow_type_status:o,task_exec_flow:a,task_audit_flow:l}},handleSubmitFlowType:function(){var e=this;this.$refs.changeFlowTypeForm.validate(function(t){t&&Object(o.z)(e.changeFlowTypeForm.id,e.changeFlowTypeForm).then(function(){e.$message({message:"操作成功",type:"success"}),e.updateFlowTypeVisible=!1,e.$emit("fresh",e.searchForm)})})}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-card",[n("div",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[n("span",[e._v("流程类型")]),e._v(" "),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{size:"mini",type:"text",icon:"el-icon-plus"},on:{click:e.handleAddFlowType}},[e._v("添加")])],1),e._v(" "),n("el-table",{attrs:{"show-header":!1,data:e.templateWorkOrderFlowTypeList},on:{"row-dblclick":e.handleEditFlowType}},[n("el-table-column",{attrs:{label:"",width:"40px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",[n("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n              执行流程: "+e._s(t.row.task_exec_flow_name)+" "),n("br"),n("br"),e._v("\n              审核流程: "+e._s(t.row.task_audit_flow_name)),n("br"),n("br"),e._v("\n              创建时间: "+e._s(t.row.create_time)),n("br"),n("br"),e._v("\n              更新时间: "+e._s(t.row.change_time)+"\n            ")]),e._v(" "),n("i",{staticClass:"el-icon-info"})])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"流程名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",{attrs:{content:"双击编辑"}},[n("div",{attrs:{slot:""},slot:"default"},[e._v(e._s(t.row.flow_type_name))])])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"状态",prop:"flow_type_status",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-color":"#409EFF","active-value":1,"inactive-value":0},on:{change:function(n){return e.statusChange(t.row)}},model:{value:t.row.flow_type_status,callback:function(n){e.$set(t.row,"flow_type_status",n)},expression:"scope.row.flow_type_status"}})]}}])})],1),e._v(" "),n("div",{staticStyle:{"text-align":"center","margin-top":"5px"}},[n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.templateWorkOrderFlowListTotalNum>0,expression:"templateWorkOrderFlowListTotalNum>0"}],attrs:{"pager-count":5,"page-size":e.searchForm.page_size,layout:"prev, pager, next","current-page":e.searchForm.page,total:e.templateWorkOrderFlowListTotalNum},on:{"current-change":e.paginationChange,"update:currentPage":function(t){return e.$set(e.searchForm,"page",t)},"update:current-page":function(t){return e.$set(e.searchForm,"page",t)}}})],1),e._v(" "),n("el-dialog",{attrs:{title:"编辑流程类型",visible:e.updateFlowTypeVisible,width:"20%",center:""},on:{"update:visible":function(t){e.updateFlowTypeVisible=t}}},[n("el-form",{ref:"changeFlowTypeForm",attrs:{model:e.changeFlowTypeForm,"label-width":"80px"}},[n("el-form-item",{attrs:{prop:"flow_type_name",label:"类型名称"}},[n("el-input",{attrs:{size:"small",placeholder:"请输入类型名称"},model:{value:e.changeFlowTypeForm.flow_type_name,callback:function(t){e.$set(e.changeFlowTypeForm,"flow_type_name",t)},expression:"changeFlowTypeForm.flow_type_name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"审核流程",prop:"task_audit_flow"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"审核流程",size:"small"},model:{value:e.changeFlowTypeForm.task_audit_flow,callback:function(t){e.$set(e.changeFlowTypeForm,"task_audit_flow",t)},expression:"changeFlowTypeForm.task_audit_flow"}},e._l(e.templateWorkOrderFlowList,function(e,t){return n("el-option",{key:t,attrs:{label:e.flow_name,value:e.id}})}),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"执行流程",prop:"task_exec_flow"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"执行流程",size:"small"},model:{value:e.changeFlowTypeForm.task_exec_flow,callback:function(t){e.$set(e.changeFlowTypeForm,"task_exec_flow",t)},expression:"changeFlowTypeForm.task_exec_flow"}},e._l(e.templateWorkOrderFlowList,function(e,t){return n("el-option",{key:t,attrs:{label:e.flow_name,value:e.id}})}),1)],1),e._v(" "),n("el-form-item",{staticStyle:{"margin-top":"5px"}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleSubmitFlowType}},[e._v("确 定")]),e._v(" "),n("el-button",{attrs:{size:"small"},on:{click:function(t){e.updateFlowTypeVisible=!1}}},[e._v("取 消")])],1)],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"创建流程类型",visible:e.addFlowTypeVisible,width:"20%",center:""},on:{"update:visible":function(t){e.addFlowTypeVisible=t}}},[n("el-form",{ref:"addFlowTypeForm",attrs:{model:e.addFlowTypeForm,"label-width":"80px"}},[n("el-form-item",{attrs:{prop:"flow_type_name",label:"模板名称"}},[n("el-input",{attrs:{size:"small",placeholder:"模板名称"},model:{value:e.addFlowTypeForm.flow_type_name,callback:function(t){e.$set(e.addFlowTypeForm,"flow_type_name",t)},expression:"addFlowTypeForm.flow_type_name"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"task_exec_flow",label:"执行流程"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"执行流程",size:"small"},model:{value:e.addFlowTypeForm.task_exec_flow,callback:function(t){e.$set(e.addFlowTypeForm,"task_exec_flow",t)},expression:"addFlowTypeForm.task_exec_flow"}},e._l(e.templateWorkOrderFlowList,function(e,t){return n("el-option",{key:t,attrs:{label:e.flow_name,value:e.id}})}),1)],1),e._v(" "),n("el-form-item",{attrs:{prop:"task_audit_flow",label:"审核流程"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"审核流程",size:"small"},model:{value:e.addFlowTypeForm.task_audit_flow,callback:function(t){e.$set(e.addFlowTypeForm,"task_audit_flow",t)},expression:"addFlowTypeForm.task_audit_flow"}},e._l(e.templateWorkOrderFlowList,function(e,t){return n("el-option",{key:t,attrs:{label:e.flow_name,value:e.id}})}),1)],1),e._v(" "),n("el-form-item",{staticStyle:{"margin-top":"5px"}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleSubmitAddFlowType}},[e._v("确 定")]),e._v(" "),n("el-button",{attrs:{size:"small"},on:{click:function(t){e.addFlowTypeVisible=!1}}},[e._v("取 消")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var u=n("/Xao")(p,c,!1,function(e){n("DE+d")},"data-v-38fc1808",null).exports,_={name:"workOrderFlowManager",props:["templateWorkOrderFlowList","userList","templateWorkOrderFlowListTotalNum"],data:function(){return{addOrderFlowVisible:!1,updateFlowItemVisible:!1,addOrderFlowItemVisible:!1,active:"",flowItems:[],flowTypeChoice:[{id:0,name:"执行"},{id:1,name:"审核"}],updateFlowItemForm:{id:"",exec_order:"",flow_item_name:"",exec_user:"",belong_flow:""},addFlowItemForm:{exec_order:"",flow_item_name:"",exec_user:""},updateTypeItemForm:{id:"",flow_name:"",flow_type:"",flow_item:[],change_time:"",create_time:""},searchForm:{page:1,page_size:8},addFlowTypeItemForm:{flow_name:"",flow_type:""},rules:{flow_item_name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}]}}},methods:{addFlowItem:function(){var e={exec_order:"",flow_item_name:"",exec_user:""};this.updateTypeItemForm.flow_item.push(e),this.editTaskFlowItem(e,this.updateTypeItemForm.flow_item.length-1)},handleAddOrderFlowItem:function(){this.addOrderFlowItemVisible=!0,void 0!==this.$ref.addFlowTypeItemForm&&this.$ref.addFlowTypeItemForm.resetFields()},paginationChange:function(e){this.searchForm.page=e,this.$emit("fresh",this.searchForm)},handleSubmitAddFlowTypeItemForm:function(){var e=this;Object(o.c)(this.addFlowTypeItemForm).then(function(){e.$message({message:"添加成功",type:"success"}),e.addOrderFlowItemVisible=!1,e.$emit("fresh")})},handleEditFlowItem:function(e){this.updateFlowItemVisible=!0;var t=e.id,n=e.flow_name,o=e.flow_type_name,a=e.flow_item,l=e.change_time,r=e.create_time;this.FlowItems=a,this.updateTypeItemForm={id:t,flow_name:n,flow_type:o,flow_item:a,change_time:l,create_time:r}},editTaskFlowItem:function(e,t){var n=e.id,o=e.exec_order,a=e.flow_item_name,l=e.exec_user,r=this.updateTypeItemForm.id;this.active=t,this.updateFlowItemForm={id:n,exec_order:o,flow_item_name:a,exec_user:l,belong_flow:r}},deleteTaskFlowItem:function(e,t){var n=this;void 0!==e.id?this.$confirm("此操作将删除 [ "+e.flow_item_name+" ] 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.h)(e.id).then(function(){n.$message({message:"删除成功",type:"success"}),n.updateTypeItemForm.flow_item.pop(t),n.$emit("fresh")})}).catch(function(){n.$message({message:"操作失败",type:"error"})}):this.updateTypeItemForm.flow_item.pop(t)},commitEditTaskFlowItem:function(e){var t=this;if("string"==typeof e.exec_user)this.active="";else if(void 0!==e.id){var n=e.id,a=e.exec_order,l=e.flow_item_name,r=e.exec_user,i=e.belong_flow;this.updateFlowItemForm={id:n,exec_order:a,flow_item_name:l,exec_user:r,belong_flow:i},Object(o.C)(e.id,e).then(function(){t.$message({message:"修改成功",type:"success"})})}else Object(o.d)(e).then(function(){t.$message({message:"添加成功",type:"success"})});this.active=""},updateFlow:function(){var e=this,t={id:this.updateTypeItemForm.id,flow_name:this.updateTypeItemForm.flow_name,flow_type:this.updateTypeItemForm.flow_type};Object(o.B)(t.id,t).then(function(){e.$message({message:"更新成功",type:"success"}),e.updateFlowItemVisible=!1,e.$emit("fresh")})}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-card",[n("div",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[n("span",[e._v("流程项")]),e._v(" "),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{size:"mini",type:"text",icon:"el-icon-plus"},on:{click:e.handleAddOrderFlowItem}},[e._v("添加\n      ")])],1),e._v(" "),n("el-table",{attrs:{"show-header":!1,data:e.templateWorkOrderFlowList},on:{"row-dblclick":e.handleEditFlowItem}},[n("el-table-column",{attrs:{label:"",width:"40px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",[n("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n              创建时间: "+e._s(t.row.create_time)+" "),n("br"),n("br"),e._v("\n              执行时间: "+e._s(t.row.change_time)+"\n            ")]),e._v(" "),n("i",{staticClass:"el-icon-info"})])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"flow_name",label:"执行流程"}}),e._v(" "),n("el-table-column",{attrs:{label:"执行流程",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.flow_type_name?n("span",[n("el-tag",{attrs:{size:"mini",type:"success"}},[e._v(e._s(t.row.flow_type))])],1):n("span",[n("el-tag",{attrs:{size:"mini",type:"danger"}},[e._v(e._s(t.row.flow_type))])],1)]}}])})],1),e._v(" "),n("div",{staticStyle:{"text-align":"center","margin-top":"5px"}},[n("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.templateWorkOrderFlowListTotalNum>0,expression:"templateWorkOrderFlowListTotalNum>0"}],attrs:{"pager-count":5,"page-size":e.searchForm.page_size,layout:"prev, pager, next","current-page":e.searchForm.page,total:e.templateWorkOrderFlowListTotalNum},on:{"current-change":e.paginationChange,"update:currentPage":function(t){return e.$set(e.searchForm,"page",t)},"update:current-page":function(t){return e.$set(e.searchForm,"page",t)}}})],1),e._v(" "),n("el-dialog",{attrs:{title:"添加流程",visible:e.addOrderFlowItemVisible,width:"30%"},on:{"update:visible":function(t){e.addOrderFlowItemVisible=t}}},[n("el-form",{ref:"addFlowTypeItemForm",attrs:{rules:e.rules,model:e.addFlowTypeItemForm,"label-width":"70px"}},[n("el-form-item",{attrs:{prop:"flow_name",label:"流程名称 ","label-width":"80px"}},[n("el-input",{attrs:{size:"mini",placeholder:"流程名称"},model:{value:e.addFlowTypeItemForm.flow_name,callback:function(t){e.$set(e.addFlowTypeItemForm,"flow_name",t)},expression:"addFlowTypeItemForm.flow_name"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"flow_type",label:"流程类型 ","label-width":"80px"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"流程类型",size:"mini"},model:{value:e.addFlowTypeItemForm.flow_type,callback:function(t){e.$set(e.addFlowTypeItemForm,"flow_type",t)},expression:"addFlowTypeItemForm.flow_type"}},e._l(e.flowTypeChoice,function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),n("el-form-item",{staticStyle:{"margin-top":"5px"}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleSubmitAddFlowTypeItemForm}},[e._v("确 定")]),e._v(" "),n("el-button",{attrs:{size:"small"},on:{click:function(t){e.addOrderFlowItemVisible=!1}}},[e._v("取 消")])],1)],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"流程详情",visible:e.updateFlowItemVisible,width:"55%"},on:{"update:visible":function(t){e.updateFlowItemVisible=t}}},[n("el-form",{ref:"updateFlowItemForm",attrs:{rules:e.rules,model:e.updateFlowItemForm,inline:!0,"lable-width":"80%"}},[n("el-steps",{staticClass:"step",attrs:{active:e.active,space:"160px",direction:"vertical"}},e._l(e.updateTypeItemForm.flow_item,function(t,o){return n("el-step",{key:o,attrs:{title:t.flow_item_name,description:t.exec_user}},[n("template",{slot:"description"},[n("el-card",[e.active===o?n("el-form-item",{attrs:{prop:"flow_item_name",label:"名称"}},[n("el-input",{attrs:{size:"mini",placeholder:"流程名称"},model:{value:e.updateFlowItemForm.flow_item_name,callback:function(t){e.$set(e.updateFlowItemForm,"flow_item_name",t)},expression:"updateFlowItemForm.flow_item_name"}})],1):n("el-form-item",{attrs:{prop:"flow_item_name",label:"名称"}},[n("el-input",{attrs:{size:"mini",disabled:"",placeholder:"流程名称"},model:{value:t.flow_item_name,callback:function(n){e.$set(t,"flow_item_name",n)},expression:"flowItem.flow_item_name"}})],1),e._v(" "),e.active===o?n("el-form-item",{attrs:{prop:"exec_user",label:"执行用户"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"执行用户",size:"mini"},model:{value:e.updateFlowItemForm.exec_user,callback:function(t){e.$set(e.updateFlowItemForm,"exec_user",t)},expression:"updateFlowItemForm.exec_user"}},e._l(e.userList,function(e,t){return n("el-option",{key:t,attrs:{label:e.username,value:e.id}})}),1)],1):n("el-form-item",{attrs:{prop:"exec_user",label:"执行用户"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"执行用户",disabled:"",size:"mini"},model:{value:t.exec_user,callback:function(n){e.$set(t,"exec_user",n)},expression:"flowItem.exec_user"}},e._l(e.userList,function(e,t){return n("el-option",{key:t,attrs:{label:e.username,value:e.id}})}),1)],1),e._v(" "),e.active===o?n("el-form-item",{attrs:{prop:"exec_order",label:"执行顺序"}},[n("el-input",{attrs:{size:"mini",placeholder:"执行顺序"},model:{value:e.updateFlowItemForm.exec_order,callback:function(t){e.$set(e.updateFlowItemForm,"exec_order",t)},expression:"updateFlowItemForm.exec_order"}})],1):n("el-form-item",{attrs:{prop:"exec_order",label:"执行顺序"}},[n("el-input",{attrs:{size:"mini",disabled:"",placeholder:"执行顺序"},model:{value:t.exec_order,callback:function(n){e.$set(t,"exec_order",n)},expression:"flowItem.exec_order"}})],1),e._v(" "),n("el-form-item",[e.active!==o?n("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(n){return e.editTaskFlowItem(t,o)}}}):e._e(),e._v(" "),e.active===o?n("el-button",{attrs:{size:"mini",type:"success",icon:"el-icon-check",circle:""},on:{click:function(t){return e.commitEditTaskFlowItem(e.updateFlowItemForm)}}}):e._e(),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(n){return e.deleteTaskFlowItem(t,o)}}})],1)],1)],1)],2)}),1),e._v(" "),n("el-form-item",[n("el-button",{staticStyle:{"margin-left":"35px"},attrs:{type:"primary",size:"mini"},on:{click:e.addFlowItem}},[e._v("添加审核人")])],1)],1),e._v(" "),n("el-form",{ref:"updateTypeItemForm",attrs:{model:e.updateTypeItemForm,"label-width":"80px"}},[n("el-form-item",{attrs:{prop:"flow_name",label:"流程名称 ","label-width":"80px"}},[n("el-input",{attrs:{size:"mini",placeholder:"流程名称"},model:{value:e.updateTypeItemForm.flow_name,callback:function(t){e.$set(e.updateTypeItemForm,"flow_name",t)},expression:"updateTypeItemForm.flow_name"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"flow_type",label:"流程类型 ","label-width":"80px"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"执行用户",size:"mini"},model:{value:e.updateTypeItemForm.flow_type,callback:function(t){e.$set(e.updateTypeItemForm,"flow_type",t)},expression:"updateTypeItemForm.flow_type"}},e._l(e.flowTypeChoice,function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),n("el-form-item",{attrs:{prop:"create_time",label:"添加时间 ","label-width":"80px"}},[n("el-input",{attrs:{size:"mini",disabled:!0,placeholder:"添加时间"},model:{value:e.updateTypeItemForm.create_time,callback:function(t){e.$set(e.updateTypeItemForm,"create_time",t)},expression:"updateTypeItemForm.create_time"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"change_time",label:"更新时间 ","label-width":"80px"}},[n("el-input",{attrs:{size:"mini",disabled:!0,placeholder:"更新时间"},model:{value:e.updateTypeItemForm.change_time,callback:function(t){e.$set(e.updateTypeItemForm,"change_time",t)},expression:"updateTypeItemForm.change_time"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.updateFlow}},[e._v("确 定")]),e._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:function(t){e.updateFlowItemVisible=!1}}},[e._v("取 消")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var w={name:"WorkOrderModelManagement",components:{workOrderModelManager:i,workOrderFlowManager:n("/Xao")(_,f,!1,function(e){n("BT9z"),n("Suew")},"data-v-e2ac263a",null).exports,workOrderTypeManager:m,workOrderFlowTypeManager:u},data:function(){return{loading:!1,workOrderModelTypeFormVisible:!1,workOrderFlowTypeFormVisible:!1,filterText:"",workOrderModelList:[],workOrderModelListTotalNum:0,templateWorkOrderTypeList:[],templateWorkOrderTypeListTotalNum:0,templateWorkOrderFlowTypeList:[],templateWorkOrderFlowTypeListTotalNum:0,templateWorkOrderFlowList:[],templateWorkOrderFlowListTotalNum:0,userList:[],workOrderModelDetail:{},workOrderModelTypeForm:{id:"",type_name:"",type_status:""},workOrderFlowTypeForm:{id:"",flow_type_name:"",flow_type_status:"",task_audit_flow:"",task_audit_flow_name:"",task_exec_flow_name:"",task_exec_flow:""},statusCode:[{id:1,name:"启用"},{id:0,name:"禁用"}],params:{}}},methods:{fetchData:function(e){var t=this;Object(a.l)(e).then(function(e){t.userList=e.results})},getWorkOrderModelListData:function(e){var t=this;this.loading=!0,Object(o.s)(e).then(function(e){t.workOrderModelList=e.results,t.workOrderModelListTotalNum=e.count,t.loading=!1})},getTemplateWorkOrderTypeData:function(e){var t=this;Object(o.p)(e).then(function(n){console.log(e),t.templateWorkOrderTypeList=n.results,t.templateWorkOrderTypeListTotalNum=n.count})},getTemplateWorkOrderTaskFlowData:function(e){var t=this;Object(o.o)(e).then(function(e){t.templateWorkOrderFlowList=e.results,t.templateWorkOrderFlowTypeListTotalNum=e.count})},getTemplateWorkOrderFlowTypeData:function(e){var t=this;Object(o.m)(e).then(function(e){t.templateWorkOrderFlowTypeList=e.results,t.templateWorkOrderFlowListTotalNum=e.count,t.loading=!1})},refreshWorkOrderFLowItem:function(e){this.getTemplateWorkOrderTaskFlowData(e)},refreshWorkOrderFlowType:function(e){this.getTemplateWorkOrderFlowTypeData(e)},refreshWorkOrderModelList:function(e){console.log("data"),this.getWorkOrderModelListData(e)},refreshTemplateWorkOrderType:function(e){console.log("refreshTemplateWorkOrderType",e),this.getTemplateWorkOrderTypeData(e)},fresh:function(){this.fetchData(),this.getTemplateWorkOrderTaskFlowData(),this.getTemplateWorkOrderFlowTypeData(),this.getTemplateWorkOrderTypeData(),this.getWorkOrderModelListData()}},created:function(){this.fetchData(),this.getTemplateWorkOrderTaskFlowData({page:1,page_size:8}),this.getTemplateWorkOrderFlowTypeData({page:1,page_size:8}),this.getTemplateWorkOrderTypeData({page:1,page_size:8}),this.getWorkOrderModelListData({page:1,page_size:8})}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-row",{attrs:{gutter:24}},[n("el-col",{attrs:{span:6}},[n("work-order-model-manager",{attrs:{workOrderModelList:e.workOrderModelList,templateWorkOrderTypeList:e.templateWorkOrderTypeList,workOrderModelListTotalNum:e.workOrderModelListTotalNum,templateWorkOrderFlowTypeList:e.templateWorkOrderFlowTypeList},on:{fresh:e.refreshWorkOrderModelList}})],1),e._v(" "),n("el-col",{attrs:{span:6}},[n("work-order-type-manager",{attrs:{templateWorkOrderTypeList:e.templateWorkOrderTypeList,templateWorkOrderTypeListTotalNum:e.templateWorkOrderTypeListTotalNum},on:{fresh:e.refreshTemplateWorkOrderType}})],1),e._v(" "),n("el-col",{attrs:{span:6}},[n("work-order-flow-type-manager",{attrs:{templateWorkOrderFlowTypeList:e.templateWorkOrderFlowTypeList,templateWorkOrderFlowList:e.templateWorkOrderFlowList,templateWorkOrderFlowListTotalNum:e.templateWorkOrderFlowListTotalNum},on:{fresh:e.refreshWorkOrderFlowType}})],1),e._v(" "),n("el-col",{attrs:{span:6}},[n("work-order-flow-manager",{attrs:{templateWorkOrderFlowList:e.templateWorkOrderFlowList,templateWorkOrderFlowListTotalNum:e.templateWorkOrderFlowTypeListTotalNum,userList:e.userList},on:{fresh:e.refreshWorkOrderFLowItem}})],1)],1)],1)},staticRenderFns:[]};var y=n("/Xao")(w,h,!1,function(e){n("mLOs")},"data-v-0ee83ed0",null);t.default=y.exports},x6SF:function(e,t,n){(e.exports=n("UTlt")(!1)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});