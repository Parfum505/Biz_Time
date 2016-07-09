 $( document ).ready(function() {

    /* MOBILE MENU */

    $(".main_menu_btn").on("click", function () {
         $(this).toggleClass("active_btn");
         $(".main_menu").slideToggle();
    });

    $(".main_menu > li > a ").on("click", function () {
         $(".main_menu").slideToggle();
    });

    $(window).resize(function () {
       if ($(this).width() > 480 && $(".main_menu").is(':hidden')) {
         $(".main_menu").show();
       }
       else if($(this).width() < 460 && $(".main_menu").is(':visible')) {
         $(".main_menu").hide();
       }
    })


    /*  FIXED IN THE MIDDLE MENU
        $(window).scroll(function(){
            if ( $(window).width() > 480 && $(this).scrollTop() > 300 && $('.main_menu').hasClass('default_menu')){
            $('.main_menu').removeClass("default_menu")
            .addClass("fixed_menu")
            .animate({"top": ($(window).height()/2 - $('.main_menu').height()/2 ) + "px"}, "slow" );
        }
        else if($(this).scrollTop()
 <= 300 && $('.main_menu').hasClass('fixed_menu')) {
                $('.main_menu').removeClass("fixed_menu")
                .addClass('default_menu')
                .animate({"top": "0px"}, "slow" );
        }
        });*/

            /*  STICKY MENU */

        $(window).scroll(function(){

            var $w = $(window).width();

        if ( $w > 480 && $(this).scrollTop() > 150 ){
            $('.main_menu').stop()
            .animate({"marginTop": ($(window).scrollTop() + 50) + "px"}, "slow" );
        }
        else if( $w > 480 && $(this).scrollTop() < 150) {
                $('.main_menu').stop()
            .animate({"marginTop": ($(window).scrollTop()) + "px"}, "slow" );
        }
        if( $w > 767 && $(this).scrollTop() > 200) {
              $('.main_menu').stop()
            .animate({"marginTop": ($(window).scrollTop() + 100) + "px"}, "slow" );
        }
        else if( $w > 767 && $(this).scrollTop() < 200) {
              $('.main_menu').stop()
            .animate({"marginTop": $(window).scrollTop() + "px"}, "slow" );
        }
        else if( $w < 481 ) {
              $('.main_menu').css("marginTop", "0px");
        }

        });

    /* плавное появление шапки при скролле */
        $(window).scroll(function(){
            var $head = $(".head_main");
            var $w = $(window).width();
        if ( $(this).scrollTop() > 300 && $w > 480 && $head.hasClass('default')){
            $head.removeClass("default")
            .addClass("fixed")
            .fadeIn(700);
        }
        else if($(this).scrollTop() <= 300 && $w > 480 && $head.hasClass('fixed')) {
            $head.fadeOut(500)
            .removeClass("fixed")
            .addClass('default')
            .fadeIn(300);
        }
    });

    /* SLIDER */
    $("#slider2").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 500,
        maxwidth: 800,
        namespace: "transparent-btns"
      });

    $('h2.animated').hover(
     function() {
      $(this).addClass('shake'); // Добавляем класс bounce
     },
     function() {
      $(this).removeClass('shake'); // Убираем класс
     });
  });

 // автоматическое выделение пунктов меню
    $(window).load(function(){
      var lastId,
    topMenu = $(".main_menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
    menuItems.click(function(e){
      var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight/1.5+1;
     $('html, body').stop().animate({
      scrollTop: offsetTop
      }, 500);
    e.preventDefault();
});

// Bind to scroll
    $(window).scroll(function(){
   // Get container scroll position
     var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
     var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }
});
});