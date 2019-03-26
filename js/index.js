var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        
$(function(){
  $(".inter-swiper").scroll(function(event){
      let temp=$(".inter-swiper").scrollLeft();
      if(Math.ceil(temp)>0){
        $(".pagination .pagination-item:first-child").css({"background-color":"rgb(216, 210, 210)"});
        $(".pagination .pagination-item:last-child").css({"background-color":"rgb(180, 52, 112)"});
      }else{
        $(".pagination .pagination-item:first-child").css({"background-color":"rgb(180, 52, 112)"});
        $(".pagination .pagination-item:last-child").css({"background-color":"rgb(216, 210, 210)"});
      }
  });
});
$(function(){
  $(".grail").scroll(function(event){
      let temp=$(".grail").scrollTop();

      if(Math.ceil(temp)>0){
          $(".tb-international-header").css({"background":"white","transition":"all 1s"});
          $(".tmgjicon i").css({"color":"#8146EC"});
          $(".tb-internation-header-right a i").css({"color":"black"," font-weight":"700"});
          $(".tb-international-header-search").css({"background":"#F7F7F7"});
      }else{
        $(".tb-international-header").css({"background":"transparent","transition":"all 1s"});
        $(".tmgjicon i").css({"color":"white"});
        $(".tb-internation-header-right a i").css({"color":"white"," font-weight":"100"});
        $(".tb-international-header-search").css({"background":"white"});
      }
  });
});
$(function(){
  $(".tb-international-footer a").click(function(){
    if (event.currentTarget==this){
      $(".tb-international-footer a").css({"color":"black"});
      $(this).css({"color":"#8146ec"});
    }
  })
})
$(function(){
  $(".grail").scroll(function(event){
      let temp=$(".grail").scrollTop();
      if(Math.ceil(temp)>490){
         $(".scroller").css({"opacity":"1","transition":"all 1s"});
      }else{
        $(".scroller").css({"opacity":"0","transition":"all 1s"});
      }
  });
});