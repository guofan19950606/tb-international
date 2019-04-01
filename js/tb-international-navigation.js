$(function(){
    $(".tab-nav ul li").click(function(){
        if(event.currentTarget==this){
            $(".tab-nav ul li").removeClass("active");
            $(this).addClass("active");
            var num=$(this).index();
            $('.tab-bigul').eq(num).show().siblings().hide();
        }
    })
})