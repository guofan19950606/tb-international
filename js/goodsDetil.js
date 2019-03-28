var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        //type: 'fraction',
        //type : 'progressbar',
        //type : 'custom',
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
    $(".grail").scroll(function(event){
        let temp=$(".grail").scrollTop();
      console.log(temp);
        if(Math.ceil(temp)>44){
            $(".mui-flex").css({"background":"white"});
            $(".header-nav").css({"opacity":"1"});
            $(".icon-link").css({"background":"none"});
            $(".icon-link i").css({"color":"#999"});
        }else{
          $(".mui-flex").css({"background":""});
          $(".header-nav").css({"opacity":"0"});
          $(".icon-link").css({"background":"rgba(0,0,0,.4)"});
          $(".icon-link i").css({"color":"white"});
        }
    });
  });