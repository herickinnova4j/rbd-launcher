(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{453:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{project:{id:null},selected:[],headers:[{text:"Campaign",value:"name"},{text:"City",value:"calories"},{text:"Region",value:"fat"},{text:"Label",value:"seeCampaigns"},{text:"Bid Strategy Type",value:"protein"},{text:"Status",value:"iron"},{text:"Settings",value:"settings",sortable:!1},{text:"Export",value:"export",sortable:!1},{text:"Delete",value:"remove",sortable:!1}],desserts:[{id:1,name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1%",campaigns:[{text:"Hotel 2 UK-en-BRND"},{text:"Hotel 3 ES-en-BRND"},{text:"Hotel 4 ROW-en-BRND"},{text:"Hotel 2 UK-en-BRND"},{text:"Hotel 3 ES-en-BRND"},{text:"Hotel 4 ROW-en-BRND"},{text:"Hotel 2 UK-en-BRND"},{text:"Hotel 3 ES-en-BRND"},{text:"Hotel 4 ROW-en-BRND"}]},{id:2,name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"2%",campaigns:[{text:"Hotel 2 UK-en-BRND"},{text:"Hotel 3 ES-en-BRND"},{text:"Hotel 4 ROW-en-BRND"}]},{id:3,name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7%",campaigns:[{text:"Hotel 2 UK-en-BRND"},{text:"Hotel 3 ES-en-BRND"},{text:"Hotel 4 ROW-en-BRND"}]}]}},watch:{route:"watchRouter"},mounted:function(){this.watchRouter(this.$route)},methods:{watchRouter:function(t){var e=t.params;console.log(e),this.project.id=e.id},remove:function(t){console.log("remove: ",t)},search:function(t){console.log("search: ",t)},download:function(t){console.log("export: ",t)}}},l=n(32),r=n(37),c=n.n(r),m=n(159),v=n(332),d=n(445),x=n(345),f=n(139),R=n(328),h=n(333),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:""}},[n("v-row",{staticClass:"mb-6 page-header",attrs:{align:"end"}},[n("v-col",{staticClass:"page-title",attrs:{cols:"12",sm:"12",md:"6"}},[n("h1",{staticClass:"primary--text"},[n("v-icon",{attrs:{size:"28",color:"primary"}},[t._v("\n          mdi-flag\n        ")]),t._v("\n        Project "+t._s(t.project.id)+"\n      ")],1),t._v(" "),n("p",[t._v("Create and configure your Campaigns")])]),t._v(" "),n("v-col",{staticClass:"text-right",attrs:{cols:"12",sm:"12",md:"6"}},[n("v-btn",{staticClass:"px-9 mb-2",attrs:{to:{name:"projects-campaign-create"},router:"",medium:"",color:"accent"}},[n("v-icon",[t._v("mdi-plus")]),t._v(" "),n("span",{staticClass:"ml-2"},[t._v("Add New Campaign")])],1)],1)],1),t._v(" "),n("v-flex",{staticClass:"text-center"},[n("v-data-table",{staticClass:"elevation-0 rbd-datatable",attrs:{headers:t.headers,items:t.desserts,"single-select":!1,align:"left","item-key":"name","show-select":"","hide-default-footer":""},scopedSlots:t._u([{key:"item.settings",fn:function(e){var o=e.item;return[n("v-btn",{attrs:{to:{name:"projects-campaign-id",params:{id:o.id}},router:"",icon:"",small:"",elevation:"0",color:"accent"}},[n("v-icon",{attrs:{small:""}},[t._v("\n            mdi-pencil-outline\n          ")])],1)]}},{key:"item.export",fn:function(e){var o=e.item;return[n("v-btn",{attrs:{icon:"",small:"",elevation:"0",color:"primary"},nativeOn:{click:function(e){return t.download(o)}}},[n("v-icon",{attrs:{small:""}},[t._v("\n            mdi-export-variant\n          ")])],1)]}},{key:"item.remove",fn:function(e){var o=e.item;return[n("v-btn",{attrs:{icon:"",small:"",elevation:"0",color:"red"},nativeOn:{click:function(e){return t.remove(o)}}},[n("v-icon",{attrs:{small:""}},[t._v("\n            mdi-trash-can-outline\n          ")])],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:m.a,VCol:v.a,VDataTable:d.a,VFlex:x.a,VIcon:f.a,VLayout:R.a,VRow:h.a})}}]);