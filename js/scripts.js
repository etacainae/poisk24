$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });
});
$(".burger-btn svg").on('click', function(){
  $('.burger-btn').toggleClass("active");
  $('header').toggleClass("active");
  $('body').toggleClass("no-scroll");
});
$(document).ready(function() {
  $('.multilang').niceSelect();
});
$(function() {
  $(".finds__wrap-item .top-nav__item").click(function() {
    $(".finds__wrap-item .top-nav__item").removeClass('active');
    $(this).addClass('active');
  });
  $(".finds__nav-item").click(function() {
    $(".finds__nav-item").removeClass('active');
    $(this).addClass('active');
    $(".finds__wrap-item").removeClass('active');
    var activeTab = $(this).attr("rel");
    $("."+activeTab).addClass('active');
    if ($(window).width() <= '992') {
      $(this).parent('.finds__nav').toggleClass('view');
    }
  });
  if ($(window).width() <= '992') {
    $(".top-nav").prepend("<li class='first'>Подкатегории</li>");
    $(".top-nav li:first-child").addClass('active');
    $(".top-nav li").click(function() {
      $(".top-nav li").removeClass('active');
      $(this).addClass('active');
      $(this).parent().toggleClass('view');
    });
  }
  $(window).on('load resize', function() {
      
      var slider = $('.finds__nav');

      var settings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        variableWidth: true,
        prevArrow: '.finds__nav__arrow-prev',
        nextArrow: '.finds__nav__arrow-next',
      }
     
     if ($(window).width() <= '992') 
     {
        
        if (slider.hasClass('slick-initialized')) {
           slider.slick('unslick');
        }
        return;
     }
     
     else if (!slider.hasClass('slick-initialized')) 
     {
        return slider.slick(settings);
     }
  });
  $('.finds__list').slick({
     infinite: false,
     slidesToShow: 6,
     slidesToScroll: 6,
     dots: false,
     rows: 2,
     arrows: true,
     prevArrow: '<div class="finds__arrow finds__arrow-prev"></div>',
     nextArrow: '<div class="finds__arrow finds__arrow-next"></div>',
     responsive: [
        {
          breakpoint: 1120,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        },
        {
          breakpoint: 930,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ],
    
    });
});
$(window).on('load resize', function() {
    
    var slider = $('.advantages-wrap');

    var settings = {
      infinite: false,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }
   
   if ($(window).width() >= '460') 
   {
      
      if (slider.hasClass('slick-initialized')) {
         slider.slick('unslick');
      }
      return;
   }
   
   else if (!slider.hasClass('slick-initialized')) 
   {
      return slider.slick(settings);
   }
});
$(".facilities-wrap__item .more-mobile").on('click', function(){
  $(this).toggleClass('active');
  $(this).parent().find('.desc').slideToggle();
});
$('#catalog-preview .catalog').slick({
 slidesToShow: 4,
 slidesToScroll: 4,
 dots: false,
 arrows: false,
 responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 461,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],

});

