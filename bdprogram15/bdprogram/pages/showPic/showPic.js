(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/showPic/showPic"],{"03b7":function(t,e,i){"use strict";i.r(e);var s=i("dd2d"),n=i("28b9");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("da0e");var o,c=i("f0c5"),r=Object(c["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],o);e["default"]=r.exports},"28b9":function(t,e,i){"use strict";i.r(e);var s=i("c351"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);e["default"]=n.a},"2f3e":function(t,e,i){},"3ca0":function(t,e,i){"use strict";(function(t){i("d28f");s(i("66fd"));var e=s(i("03b7"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("5486")["createPage"])},c351:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("88e4"),n=(getApp(),{data:function(){return{$imgurl:this.$imgurl,picList:[],piclist_num:0,thumb:"",shareShow:0,shareScore:0,shareNotice:0,fxsid:0,shareHome:0,datas:"",baseinfo:{},sharesuid:"",get_share_gz:2,share:0,id:0,shareimg:0,shareimg_url:"",system_w:0,system_h:0,img_w:0,img_h:0,title:""}},onLoad:function(e){var i=this;this._baseMin(this);var n=0;e.fxsid&&(n=e.fxsid),this.fxsid=n,this.id=e.id,e.userid&&(this.sharesuid=e.userid);var a=t.getStorageSync("systemInfo");this.img_w=parseInt((.65*a.windowWidth).toFixed(0)),this.img_h=parseInt((1.875*this.img_w).toFixed(0)),this.system_w=parseInt(a.windowWidth),this.system_h=parseInt(a.windowHeight),s.bdLogin(n,function(){i.getPic()})},onShareAppMessage:function(){var e=this,i=t.getStorageSync("suid"),s=e.id,n="";return n="/pages/showPic/showPic?id="+s+"&fxsid="+i+"&userid="+i,{title:e.title,path:n,success:function(t){}}},onPullDownRefresh:function(){var e=this,i=e.id;e.getShowPic(i),t.stopPullDownRefresh()},methods:{navback:function(){t.navigateBack()},getPic:function(){this.getShowPic(this.id)},redirectto:function(t){var e=t.currentTarget.dataset.link,i=t.currentTarget.dataset.linktype;this._redirectto(e,i)},getShowPic:function(e){var i=this;t.request({url:i.$baseurl+"dopageshowPic",data:{id:e,uniacid:i.$uniacid},cachetime:"30",success:function(e){i.picList=e.data.data.text,i.piclist_num=e.data.data.text.length,i.thumb=e.data.data.thumb,i.title=e.data.data.title,i.desc=e.data.data.desc,i.get_share_gz=e.data.data.get_share_gz,t.setNavigationBarTitle({title:i.title}),t.setStorageSync("isShowLoading",!1),t.hideNavigationBarLoading(),t.stopPullDownRefresh(),i.givepscore()}})},shareClo:function(){this.shareShow=0},share111:function(){var t=this;t.share=1},share_close:function(){var t=this;t.share=0},h5ShareAppMessage:function(){var e=this,i=t.getStorageSync("suid");t.showModal({title:"长按复制链接后分享",content:this.$host+"/h5/index.html?id="+this.$uniacid+"#/pages/showPic/showPic?id="+this.id+"&fxsid="+i+"&userid="+i,showCancel:!1,success:function(t){e.share=0}})},getShareImg:function(){t.showToast({title:"暂不支持生成分享海报",icon:"none"})},closeShare:function(){this.shareimg=0},saveImg:function(){var e=this;t.getImageInfo({src:e.shareimg_url,success:function(i){t.saveImageToPhotosAlbum({filePath:i.path,success:function(){t.showToast({title:"保存成功！",icon:"none"}),e.shareimg=0,e.share=0}})}})},aliSaveImg:function(){var e=this;t.getImageInfo({src:e.shareimg_url,success:function(t){my.saveImage({url:t.path,showActionSheet:!0,success:function(){my.alert({title:"保存成功"}),e.shareimg=0,e.share=0}})}})},givepscore:function(){var e=this,i=e.id,s="showPic",n=e.sharesuid,a=t.getStorageSync("suid");n!=a&&0!=n&&""!=n&&void 0!=n&&t.request({url:e.$baseurl+"doPagegiveposcore",data:{id:i,types:s,suid:a,fxsid:n,uniacid:e.$uniacid,source:t.getStorageSync("source")},success:function(t){}})},closeAuth:function(){this.needAuth=!1,this._checkBindPhone(this)},closeBind:function(){this.needBind=!1,this.getPic()}}});e.default=n}).call(this,i("5486")["default"])},da0e:function(t,e,i){"use strict";var s=i("2f3e"),n=i.n(s);n.a},dd2d:function(t,e,i){"use strict";var s={auth:()=>Promise.all([i.e("common/vendor"),i.e("components/auth/auth")]).then(i.bind(null,"a32a")),bindPhone:()=>Promise.all([i.e("common/vendor"),i.e("components/bindPhone/bindPhone")]).then(i.bind(null,"9bb9"))},n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return s})}},[["3ca0","common/runtime","common/vendor"]]]);