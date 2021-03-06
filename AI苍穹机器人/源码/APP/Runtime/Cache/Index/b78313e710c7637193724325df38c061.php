<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>

<html class="pixel-ratio-3 retina android android-5 android-5-0 watch-active-state"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">

    <title>提现</title>

    <link rel="stylesheet" href="/Public/dianyun/css/framework7.ios.min.css">
    <link rel="stylesheet" href="/Public/dianyun/css/app.css">
    <link rel="stylesheet" href="/Public/dianyun/css/iconfont.css">
    <script src="/public/js/jquery-1.8.3.min.js"></script>
    <script src="/public/js/layer/layer.js"></script>

</head>
<body onload="onload()" class="framework7-root">
<div class="panel-overlay"></div>
<div class="panel panel-left panel-reveal layout-dark">
</div>

<div class="views">
    <div class="view view-main" data-page="bankmodify">
        <div class="pages">
            <link href="/Public/dianyun/css/webuploader.css" rel="stylesheet" type="text/css">
            <style type="text/css">
                .webuploader-pick {background-color: transparent;}
            </style>

            <div data-page="bankmodify" class="page navbar-fixed" isinited="true">
                <div class="navbar theme-white">
                    <div class="navbar-inner">
                        <div class="left">
                            <a href="javascript:history.go(-1);" class="external link"> <i class="icon iconfont icon-angleleft" style="transform: translate3d(0px, 0px, 0px);"></i>返回</a>
                        </div>
                        <div class="center" data-i18n="member.myinfo" style="left: -24px;">提现</div>
                        <div class="right"></div>
                    </div>
                </div>

                <div class="page-content defaultbg">
                    <form action="" method="POST" style="font-size:14px"  id="myform1">

                        <div class="list-block">
                            <ul>
                                <li>
                                    <div class="item-content">
                                        <div class="item-inner">
                                            <div class="item-title label"><span>提现金额</span>*</div>
                                            <div class="item-input">
                                                <input id="money" name="money" type="text" maxlength="10" value="">
                                            </div>
                                        </div>
                                    </div>
                                </li>


                                    <li>
                                        <div class="item-content">
                                            <div class="item-inner">
                                                <div class="item-title label">提现方式</div>
                                                <div class="item-input">
                                                    <select id="type" name="type" maxlength="50">
                                                        <option value="" selected="selected">请选择</option>
                                                        <option value="1">银行卡</option>
                                                        <option value="2">支付宝</option>
                                                        <option value="3">微信</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                <li>
                                    <div class="item-content">
                                        <div class="item-inner">
                                            <div class="item-title label">手续费</div>
                                            <div class="item-input">
                                                <input id="shouxu" name="shouxu" type="text" maxlength="50" value="<?php echo ($shouxu); ?>%" disabled/>
                                            </div>
                                        </div>
                                    </div>
                                </li>


                            </ul>
                        </div>
                        <div class="center" style="padding: 30px 15px 15px 15px;">

                            <a href="javascript:bank_modify_commit()" class="r_but" idtype="myform1">
                                <img src="/Public/dianyun/img/button-editbank.png" style="height:55px; width:auto; max-width: 100%;">
                            </a>

                        </div>
                    </form>


                </div>
            </div>


        </div>
    </div>
</div>

<script type="text/javascript">
    $(".r_but").click(function(){
        var idtype=$(this).attr("idtype");
        $.ajax({
            url:'<?php echo U("Index/Wallet/withpost");?>',
            type:'POST',
            data:$("#"+idtype).serialize(),
            dataType:'json',
            success:function(json){
                layer.msg(json.info);
                if(json.result ==1){
                    window.location.href=json.url;
                }


            },
            error:function(){

                layer.msg("网络故障");
            }



        })

    })


</script>
</body></html>