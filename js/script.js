$(document).ready(function(){
    // item have slider

    $("#item_have_slider").owlCarousel({
        items:1,
        margin:50,
        mouseDrag:false,
        touchDrag:false,
        pullDrag:false,
        freeDrag:false,
    });   

    // active class in url hash slider
    $('.url_hash_slider_manu ul li a').click(function(){
        $('.url_hash_slider_manu ul li a').removeClass('active')
        $(this).addClass('active');
    })
    
    // our happy user slider
    $("#happy_user").owlCarousel({
        items:1,
    });
    $('.happ_user_slider_img_design_three a').click(function(){
        $('.happ_user_slider_img_design_three a').removeClass('active')
        $(this).addClass('active');
    })

    // our great chefs slider
    $("#our_great_chefs").owlCarousel({
        items:1,
        margin:50,
        loop:true,
        autoplay:true,
        mouseDrag:false,
        touchDrag:false,
        autoplayTimeout:3000,
    });

     // header sticky
     $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });
      AOS.init();

      // bottam to top arrow
      var btn = $('.bottam_to_top_arrow');
      btn.hide();
      $(window).scroll(function() {
          if ($(window).scrollTop() > 300) {
            btn.fadeIn();
          } else {
            btn.fadeOut();
          }
      });
          btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({ scrollTop: 0 },
          '300');
        });
});
