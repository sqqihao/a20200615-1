(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesFenxiao/fenxiao_apply/fenxiao_apply"],{"4c07":function(e,n,t){"use strict";t.r(n);var i=t("579b"),a=t("fba7");for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);t("7818");var s,u=t("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=c.exports},"4e28":function(e,n,t){"use strict";(function(e){t("d28f");i(t("66fd"));var n=i(t("4c07"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("5486")["createPage"])},"579b":function(e,n,t){"use strict";var i={auth:()=>Promise.all([t.e("common/vendor"),t.e("components/auth/auth")]).then(t.bind(null,"a32a")),bindPhone:()=>Promise.all([t.e("common/vendor"),t.e("components/bindPhone/bindPhone")]).then(t.bind(null,"9bb9")),copyright:()=>t.e("components/copyright/copyright").then(t.bind(null,"cb0f")),myfooter:()=>t.e("components/myfooter/myfooter").then(t.bind(null,"6bab"))},a=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",function(){return a}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return i})},"5ecd":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t("37b1"));function a(e){return e&&e.__esModule?e:{default:e}}var o=t("88e4"),s={data:function(){return{$imgurl:this.$imgurl,banner:"",page_signs:"/pagesFenxiao/fenxiao_apply/fenxiao_apply",indicatorDots:!1,autoplay:!1,interval:5e3,duration:1e3,check:0,xieyi_block:0,input_name:"",input_tel:"",fxs_name:"",fxs:"",item:"",needAuth:!1,needBind:!1,baseinfo:{},content:"",fx_msg:""}},onLoad:function(n){var t=this;t._baseMin(t);var i=0;n.fxsid&&(i=n.fxsid),this.fxsid=i;var a=e.getStorageSync("suid");if(a)o.bdLogin(i,function(){t.fxssq()});else{t.fxssq();var s=e.getStorageSync("baidu_userinfo");s?this.needBind=!0:this.needAuth=!0}},onPullDownRefresh:function(){this.fxssq(),e.stopPullDownRefresh()},methods:{cell:function(){this.needAuth=!1},closeAuth:function(){this.needAuth=!1,this.needBind=!0},closeBind:function(){this.needBind=!1,this.fxssq()},getSuid:function(){var n=e.getStorageSync("suid");if(n)return!0;var t="";return t=e.getStorageSync("baidu_userinfo"),t?this.needBind=!0:this.needAuth=!0,!1},fxssq:function(){var n=this,t=e.getStorageSync("suid");e.request({url:n.$baseurl+"dopagesqcwfxsbase",data:{uniacid:n.$uniacid,suid:t,source:e.getStorageSync("source")},success:function(t){console.log(t.data.data);var a=t.data.data.sq,o=t.data.data.userinfo,s=t.data.data.gz,u=s.sq_thumb;n.item=u,n.fxs_name=s.fxs_name,n.fx_msg=s.fx_msg,e.setNavigationBarTitle({title:"申请成为"+s.fxs_name+"的分销商"}),2==o.fxs&&2!=o.fxsstop?e.redirectTo({url:"/pagesFenxiao/fenxiao_center/fenxiao_center"}):(2==s.fxs_sz&&a&&1==a.flag&&e.redirectTo({url:"/pagesFenxiao/fenxiao_s/fenxiao_s?type=1"}),4==s.fxs_sz&&e.redirectTo({url:"/pagesFenxiao/fenxiao_s/fenxiao_s?type=3"})),n.input_tel=o.phone,n.fxs=t.data.data.fxs;var c=t.data.data.gz.fxs_xy.replace(/\<img/gi,'<img style="max-width:100%;height:auto" ');c=(0,i.default)(c),n.content=c,console.log(n.content)}})},subs:function(n){if(!this.getSuid())return!1;var t=this,i=t.input_name,a=t.input_tel,o=t.check,s=n.detail.formId;if(0==o)return e.showToast({title:"请先阅读协议",icon:"none"}),!1;if(""==i)return e.showToast({title:"请先输入姓名",icon:"none"}),!1;if(a.length<11)return e.showToast({title:"请输入正确手机号",icon:"none"}),!1;if(""==a)return e.showToast({title:"请先输入手机号",icon:"none"}),!1;var u=e.getStorageSync("suid"),c=e.getStorageSync("openid"),r=e.getStorageSync("source");u&&e.request({url:t.$baseurl+"dopagesqcwfxs",data:{uniacid:t.$uniacid,truename:i,truetel:a,suid:u,openid:c,source:r,formid:s},success:function(n){if(n.data.data<3){var t="";-1==n.data.data&&(t="恭喜您申请成功！"),1==n.data.data&&(t="您的申请正在审核中"),2==n.data.data&&(t="您已经是分销商了"),e.showModal({title:"提醒",content:t,showCancel:!1,success:function(){e.redirectTo({url:"/pagesFenxiao/fenxiao_center/fenxiao_center"})}})}else e.redirectTo({url:"/pagesFenxiao/fenxiao_s/fenxiao_s?type=2"})}})},xieyi_close:function(){this.xieyi_block=0},xieyi_hidden:function(){this.xieyi_block=1,this.check=1},check_change:function(){var e=this,n=e.check;e.check=0==n?1:0},change_name:function(e){this.input_name=e.detail.value},change_tel:function(e){this.input_tel=e.detail.value}}};n.default=s}).call(this,t("5486")["default"])},7818:function(e,n,t){"use strict";var i=t("f581"),a=t.n(i);a.a},f581:function(e,n,t){},fba7:function(e,n,t){"use strict";t.r(n);var i=t("5ecd"),a=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,function(){return i[e]})}(o);n["default"]=a.a}},[["4e28","common/runtime","common/vendor"]]]);