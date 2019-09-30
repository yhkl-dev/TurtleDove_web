webpackJsonp([7],{ARoL:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("4YfN"),r=e.n(n),i=e("9rMa"),o=e("lvFc"),s=e.n(o),l=e("0xDb");e("gMpR");var c={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(){this.initChart()}}},mounted:function(){var t=this;this.$nextTick(function(){t.initChart()}),this.__resizeHandler=Object(l.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHandler),this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=s.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:this.chartData},series:[{name:"打版次数概览",type:"pie",roseType:"radius",radius:[15,95],center:["50%","38%"],data:this.chartData,animationEasing:"cubicInOut",animationDuration:2600}]})}}},d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},staticRenderFns:[]},u=e("/Xao")(c,d,!1,null,null,null).exports;e("gMpR");var p={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.initChart(),this.__resizeHanlder=Object(l.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHanlder)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHanlder),this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=s.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"pageA",type:"bar",stack:"vistors",barWidth:"60%",data:[79,52,200,334,390,330,220],animationDuration:6e3},{name:"pageB",type:"bar",stack:"vistors",barWidth:"60%",data:[80,52,200,334,390,330,220],animationDuration:6e3},{name:"pageC",type:"bar",stack:"vistors",barWidth:"60%",data:[30,52,200,334,390,330,220],animationDuration:6e3}]})}}},h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},staticRenderFns:[]},f=e("/Xao")(p,h,!1,null,null,null).exports,m=e("wmTB"),g=e.n(m),v=e("xJrl"),b={data:function(){return{projectNum:0,resourceNum:0,workOrderNum:0,productsNum:0}},components:{CountTo:g.a},created:function(){var t=this;Object(v.m)().then(function(a){t.projectNum=a.project_num,t.resourceNum=a.resource_num,t.workOrderNum=a.workorder_num,t.productsNum=a.product_num})}},y={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-icon-wrapper icon-people"},[e("svg-icon",{attrs:{"icon-class":"excel","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("项目")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{startVal:0,endVal:t.projectNum,duration:2600}})],1)])]),t._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-icon-wrapper icon-message"},[e("svg-icon",{attrs:{"icon-class":"list","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("服务器资源")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{startVal:0,endVal:t.resourceNum,duration:3e3}})],1)])]),t._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-icon-wrapper icon-money"},[e("svg-icon",{attrs:{"icon-class":"list","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("工单")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{startVal:0,endVal:t.workOrderNum,duration:3e3}})],1)])]),t._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-icon-wrapper icon-shoppingCard"},[e("svg-icon",{attrs:{"icon-class":"list","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("产品线")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{startVal:0,endVal:t.productsNum,duration:3600}})],1)])])],1)},staticRenderFns:[]};var x=e("/Xao")(b,y,!1,function(t){e("KPr6")},"data-v-a9a2f4fa",null).exports;e("gMpR");var w={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null}},mounted:function(){this.initChart(),this.autoResize,document.getElementsByClassName("sidebar-container")[0].addEventListener("transitionend",this.__resizeHanlder)},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHanlder),document.getElementsByClassName("sidebar-container")[0].removeEventListener("transitionend",this.__resizeHanlder),this.chart.dispose(),this.chart=null)},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},methods:{setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.expectedData,t.actualData;this.chart.setOption({title:{text:"工单统计(最近30天)",subtext:""},tooltip:{trigger:"axis"},legend:{data:["工单"]},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",data:this.chartData.name_data}],yAxis:[{type:"value"}],series:[{name:"工单",type:"bar",data:this.chartData.value_data,markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]}}]})},initChart:function(){this.chart=s.a.init(this.$el,"macarons"),this.setOptions(this.chartData)}}},_={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},staticRenderFns:[]},C=e("/Xao")(w,_,!1,null,null,null).exports,V=e("J7No"),S={name:"dashboard",components:{BarChart:f,PieChart:u,PaneGroup:x,LineChart:C},data:function(){return{currentRole:"adminDashboard",pieData:[],lineData:[]}},computed:r()({},Object(i.b)(["roles"])),methods:{fetchData:function(){var t=this;Object(V.r)().then(function(a){t.pieData=a,console.log(t.pieData)}),Object(V.l)().then(function(a){t.lineData=a})}},created:function(){this.fetchData()}},D={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"dashboard-editor-container"},[a("pane-group"),this._v(" "),a("el-row",{staticStyle:{background:"#fff",padding:"16px 16px 0","margin-bottom":"32px"}},[a("line-chart",{attrs:{"chart-data":this.lineData}})],1),this._v(" "),a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("pie-chart",{attrs:{height:"300px",width:"500px","chart-data":this.pieData}})],1)]),this._v(" "),a("el-col",{attrs:{xs:24,sm:24,lg:8}},[a("div",{staticClass:"chart-wrapper"},[a("bar-chart")],1)])],1)],1)},staticRenderFns:[]};var F={name:"Dashboard",components:{adminDashboard:e("/Xao")(S,D,!1,function(t){e("CVLz")},"data-v-7e58348e",null).exports},data:function(){return{currentRole:"adminDashboard"}},computed:r()({},Object(i.b)(["roles"])),created:function(){this.roles.includes("admin")||(this.currentRole="editorDashboard")}},A={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"dashboard-container"},[a(this.currentRole,{tag:"component"})],1)},staticRenderFns:[]},N=e("/Xao")(F,A,!1,null,null,null);a.default=N.exports},CVLz:function(t,a,e){var n=e("F2QD");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("8bSs")("2691ce44",n,!0)},F2QD:function(t,a,e){(t.exports=e("UTlt")(!1)).push([t.i,"\n.dashboard-editor-container[data-v-7e58348e] {\n  padding: 32px;\n  background-color: #f0f2f5;\n}\n.dashboard-editor-container .chart-wrapper[data-v-7e58348e] {\n    background: #fff;\n    padding: 16px 16px 0;\n    margin-bottom: 32px;\n}\n",""])},KPr6:function(t,a,e){var n=e("WhaJ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("8bSs")("54d8f9b0",n,!0)},WhaJ:function(t,a,e){(t.exports=e("UTlt")(!1)).push([t.i,"\n.panel-group[data-v-a9a2f4fa] {\n  margin-top: 18px;\n}\n.panel-group .card-panel-col[data-v-a9a2f4fa] {\n    margin-bottom: 32px;\n}\n.panel-group .card-panel[data-v-a9a2f4fa] {\n    height: 108px;\n    cursor: pointer;\n    font-size: 12px;\n    position: relative;\n    overflow: hidden;\n    color: #666;\n    background: #fff;\n    -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);\n            box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);\n    border-color: rgba(0, 0, 0, 0.05);\n}\n.panel-group .card-panel:hover .card-panel-icon-wrapper[data-v-a9a2f4fa] {\n      color: #fff;\n}\n.panel-group .card-panel:hover .icon-people[data-v-a9a2f4fa] {\n      background: #40c9c6;\n}\n.panel-group .card-panel:hover .icon-message[data-v-a9a2f4fa] {\n      background: #36a3f7;\n}\n.panel-group .card-panel:hover .icon-money[data-v-a9a2f4fa] {\n      background: #f4516c;\n}\n.panel-group .card-panel:hover .icon-shoppingCard[data-v-a9a2f4fa] {\n      background: #34bfa3;\n}\n.panel-group .card-panel .icon-people[data-v-a9a2f4fa] {\n      color: #40c9c6;\n}\n.panel-group .card-panel .icon-message[data-v-a9a2f4fa] {\n      color: #36a3f7;\n}\n.panel-group .card-panel .icon-money[data-v-a9a2f4fa] {\n      color: #f4516c;\n}\n.panel-group .card-panel .icon-shoppingCard[data-v-a9a2f4fa] {\n      color: #34bfa3;\n}\n.panel-group .card-panel .card-panel-icon-wrapper[data-v-a9a2f4fa] {\n      float: left;\n      margin: 10px 0 0 10px;\n      padding: 16px;\n      -webkit-transition: all 0.38s ease-out;\n      transition: all 0.38s ease-out;\n      border-radius: 6px;\n}\n.panel-group .card-panel .card-panel-icon[data-v-a9a2f4fa] {\n      float: left;\n      font-size: 48px;\n}\n.panel-group .card-panel .card-panel-description[data-v-a9a2f4fa] {\n      float: right;\n      font-weight: bold;\n      margin: 26px;\n      margin-left: 0px;\n}\n.panel-group .card-panel .card-panel-description .card-panel-text[data-v-a9a2f4fa] {\n        line-height: 18px;\n        color: rgba(0, 0, 0, 0.45);\n        font-size: 16px;\n        margin-bottom: 12px;\n}\n.panel-group .card-panel .card-panel-description .card-panel-num[data-v-a9a2f4fa] {\n        font-size: 20px;\n}\n",""])},gMpR:function(t,a,e){var n,r,i,o;o=function(t,a){var e;if(!a)return e="ECharts is not Loaded",void("undefined"!=typeof console&&console&&console.error&&console.error(e));var n=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],r={color:n,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:n[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{normal:{color:"#008acd"},emphasis:{color:"#008acd"}},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{normal:{color:"#d87a80",color0:"#2ec7c9",lineStyle:{color:"#d87a80",color0:"#2ec7c9"}}}},scatter:{symbol:"circle",symbolSize:4},map:{label:{normal:{textStyle:{color:"#d87a80"}}},itemStyle:{normal:{borderColor:"#eee",areaColor:"#ddd"},emphasis:{areaColor:"#fe994e"}}},graph:{color:n},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};a.registerTheme("macarons",r)},r=[a,e("lvFc")],void 0===(i="function"==typeof(n=o)?n.apply(a,r):n)||(t.exports=i)},wmTB:function(t,a,e){var n;n=function(){return function(t){function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}var e={};return a.m=t,a.c=e,a.i=function(t){return t},a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},a.p="/dist/",a(a.s=2)}([function(t,a,e){var n=e(4)(e(1),e(5),null,null);t.exports=n.exports},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(3);a.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,a,e,n){return e*(1-Math.pow(2,-10*t/n))*1024/1023+a}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var a=t-this.startTime;this.remaining=this.localDuration-a,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(a,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(a,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(a/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(a/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),a<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var a=(t+="").split("."),e=a[0],n=a.length>1?this.decimal+a[1]:"",r=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;r.test(e);)e=e.replace(r,"$1"+this.separator+"$2");return this.prefix+e+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(e(0));a.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",n.default)},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=0,r="webkit moz ms o".split(" "),i=void 0,o=void 0;if("undefined"==typeof window)a.requestAnimationFrame=i=function(){},a.cancelAnimationFrame=o=function(){};else{a.requestAnimationFrame=i=window.requestAnimationFrame,a.cancelAnimationFrame=o=window.cancelAnimationFrame;for(var s=void 0,l=0;l<r.length&&(!i||!o);l++)s=r[l],a.requestAnimationFrame=i=i||window[s+"RequestAnimationFrame"],a.cancelAnimationFrame=o=o||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];i&&o||(a.requestAnimationFrame=i=function(t){var a=(new Date).getTime(),e=Math.max(0,16-(a-n)),r=window.setTimeout(function(){t(a+e)},e);return n=a+e,r},a.cancelAnimationFrame=o=function(t){window.clearTimeout(t)})}a.requestAnimationFrame=i,a.cancelAnimationFrame=o},function(t,a){t.exports=function(t,a,e,n){var r,i=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,i=t.default);var s="function"==typeof i?i.options:i;if(a&&(s.render=a.render,s.staticRenderFns=a.staticRenderFns),e&&(s._scopeId=e),n){var l=Object.create(s.computed||null);Object.keys(n).forEach(function(t){var a=n[t];l[t]=function(){return a}}),s.computed=l}return{esModule:r,exports:i,options:s}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},t.exports=n()}});