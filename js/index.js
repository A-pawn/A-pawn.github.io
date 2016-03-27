/**
 * Created by Administrator on 2016/2/4.
 */
$(function(){
    jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
});
$(function(){
    jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,scroll:4,vis:4});
});

$(function(){
    $('.weixin').on('mouseover',function(){
        $(".weixingongzhonghao").show();
    }).on("mouseout",function(){
        $(".weixingongzhonghao").hide();
    })
});
$(function(){
    $('.select-language').on('mouseover',function(){
        $(".select-language ul").show();
    }).on("mouseout",function(){
        $(".select-language ul").hide();
    })
});
