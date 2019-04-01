$(function(){
    $(".goodslistnav .goodslistnav-item").click(function(){
        if(event.currentTarget==this){
            $(".goodslistnav .goodslistnav-item").css({"color":"#999"});
            $(this).css({"color":"red"});
        }
    })
})
$(function(){
    $(".mt").toggle(
        function(){
            $(".tb-ullist").slideDown(300);
        },
        function(){
            $(".tb-ullist").slideUp(300);
        }
    )
})
$(function(){
    $(".tb-ullist li").eq(0).click(function(){
        if(event.currentTarget==this){
            $(".tb-ullist li").css({"color":"#999"});
            $(".goodslistcontent").css({"flex-direction":"row"});
            $(".goodslistcontent-left").css({"width":"50%"});
            $(".goodslistcontent-right").css({"width":"50%"});
            $(".ti_info").css({"height":""});
            $(".ti_img_wrap ").css({"float":"none"});
            $(this).css({"color":"red"});
            $(this).parents('.goodslistnav-item').find('i').eq(0).removeClass('icon-liebiao1');
            $(this).parents('.goodslistnav-item').find('i').eq(0).addClass('icon-caidan');
        }
    })
})

$(function(){
    $(".tb-ullist li").eq(1).click(function(){
        if(event.currentTarget==this){
            $(".goodslistcontent").css({"flex-direction":"column"});
            $(".goodslistcontent-left").css({"width":"100%"});
            $(".goodslistcontent-right").css({"width":"100%"});
            $(".ti_info").css({"height":"100%"});
            $(".ti_img_wrap ").css({"float":"left"});
            $(this).parents('.goodslistnav-item').find('i').eq(0).removeClass('icon-liebiao1');
            $(this).parents('.goodslistnav-item').find('i').eq(0).addClass('icon-liebiao1');
        }
    })
})
$(function(){
    $(".tb-ullist li").click(function(){
        if(event.currentTarget==this){
            $(".tb-ullist li").css({"color":"#999"});
            $(this).css({"color":"red"});
           
        }
    })
})