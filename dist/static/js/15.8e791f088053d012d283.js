webpackJsonp([15],{Jlcs:function(t,e,a){var o=a("q+j/");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("8bSs")("3c73a3bb",o,!0)},XTgm:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("vLgD");var i={data:function(){return{total_host:0,zabbix_total_host:0,zabbix_monitor_host:0,zabbix_not_monitor_host:0,zabbix_monitor_exception_host:0,zabbixProductData:[],loading:!1}},created:function(){this.fetchZabbixStatusData(),this.fetchZabbixProductData()},computed:{monitor_host_percent:function(){var t=this.zabbix_total_host/this.total_host;return this.verifyPercent(t)},success_monitor_percent:function(){var t=this.zabbix_monitor_host/this.zabbix_total_host;return this.verifyPercent(t)},exception_monitor_percent:function(){var t=this.zabbix_monitor_exception_host/this.zabbix_total_host;return this.verifyPercent(t)},not_monitor_percent:function(){var t=this.zabbix_not_monitor_host/this.total_host;return this.verifyPercent(t)}},methods:{fetchZabbixStatusData:function(){var t=this;Object(o.a)({url:"/zabbixStatus/",method:"get"}).then(function(e){t.total_host=e.total_host,t.zabbix_total_host=e.zabbix_total_host,t.zabbix_monitor_host=e.zabbix_monitor_host,t.zabbix_not_monitor_host=e.zabbix_not_monitor_host,t.zabbix_monitor_exception_host=e.zabbix_monitor_exception_host})},fetchZabbixProductData:function(){var t=this;this.loading=!0,Object(o.a)({url:"zabbixProduct",method:"get"}).then(function(e){t.zabbixProductData=e,t.loading=!1})},verifyPercent:function(t){var e=parseFloat((100*t).toFixed(2));return isNaN(e)?0:e}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zabbix-container"},[a("el-row",[a("el-col",{staticStyle:{width:"25%","text-align":"center",padding:"10px"}},[a("el-progress",{attrs:{type:"circle",percentage:t.monitor_host_percent,"stroke-width":15}}),t._v(" "),a("div",{staticStyle:{width:"100%","text-align":"center","line-height":"40px"}},[t._v("已监控的主机")])],1),t._v(" "),a("el-col",{staticStyle:{width:"25%","text-align":"center",padding:"10px"}},[a("el-progress",{attrs:{type:"circle",percentage:t.success_monitor_percent,"stroke-width":15}}),t._v(" "),a("div",{staticStyle:{width:"100%","text-align":"center","line-height":"40px"}},[t._v("正常监控的主机")])],1),t._v(" "),a("el-col",{staticStyle:{width:"25%","text-align":"center",padding:"10px"}},[a("el-progress",{attrs:{type:"circle",percentage:t.exception_monitor_percent,"stroke-width":15}}),t._v(" "),a("div",{staticStyle:{width:"100%","text-align":"center","line-height":"40px"}},[t._v("异常监控")])],1),t._v(" "),a("el-col",{staticStyle:{width:"25%","text-align":"center",padding:"10px"}},[a("el-progress",{attrs:{type:"circle",percentage:t.not_monitor_percent,"stroke-width":"15"}}),t._v(" "),a("div",{staticStyle:{width:"100%","text-align":"center","line-height":"40px"}},[t._v("未监控")])],1)],1),t._v(" "),a("el-row",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"table",attrs:{"element-loading-text":"拼命加载中",data:t.zabbixProductData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"业务线",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"total_host",label:"服务器数据",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"monitor_total",label:"已监控数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"not_monitor",label:"未监控数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"problem_disaster",label:"disaster",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"problem_high",label:"high",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"problem_average",label:"average",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"problem_warning",label:"warning",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"problem_information",label:"information",align:"center"}})],1)],1)],1)},staticRenderFns:[]};var r=a("/Xao")(i,n,!1,function(t){a("Jlcs")},"data-v-6b553b3f",null);e.default=r.exports},"q+j/":function(t,e,a){(t.exports=a("UTlt")(!1)).push([t.i,"",""])}});