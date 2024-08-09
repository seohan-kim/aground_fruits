
$(function () {
  //product ticker
  $('.ticker_logo1').slick({
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: 'linear',
    rtl: true,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    }]
  });
  
  $('.ticker_img').slick({
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    }]
  });

  $('.ticker_logo2').slick({
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1500,
    cssEase: 'linear',
    rtl: true,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    }]
  });

  //company tabs
  $(".js_tabs button").bind('click',function(){
    var index = $(this).index();
    $(".js_conts article").hide().eq(index).fadeIn();
    $(this).parent().find('button').removeClass('on');
    $(this).addClass('on');
  }); 










});
