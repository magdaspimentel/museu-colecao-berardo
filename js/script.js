$(document).ready(function(){

    // NAVBAR MOBILE
    $('.toggle').click(function(){        
        $('.itens').toggleClass('mobile');
        $(this).toggleClass('active');
    });


    // NAVBAR MOBILE CLICK 
    $('header ul li a').on('click', function() {
       $('.itens').toggleClass('mobile');
       $('.toggle').toggleClass('active'); 
    }); 

 
    // NAVBAR DROP DESKTOP 
    $('.drop').on('mouseover', function() {
        if ($(window).width() > 1024) {
            $(this).find('.dropdown').show();
        }
    });

    $('.drop').on('mouseleave', function() {
        if ($(window).width() > 1024) {
            $(this).find('.dropdown').hide();
        }
    });   


    // NAVBAR DROP MOBILE
    $('.drop').on('click', function() {

        $(this).find('.dropdown').toggleClass('show');

        var closed = $(this).find('.closed');
        var open = $(this).find('.open');
        
        $(".closed").not(closed).hide();
        $(".open").not(open).show();
   
        if (closed.is(":visible")) {
            closed.hide()
        }  
        
        else {
            closed.show();
        }

        if (open.is(":visible")) {
            open.hide()
        }  
        
        else {
            open.show();
        }
    }); 
 

    // NAVBAR REMOVE FIXED ON SCROLL DESKTOP
    $(function() {
        $(window).scroll(function(event) {
            var scroll = $(window).scrollTop();

            if (scroll > 80) {
                $('header').css('background-color', '#CA0000');
                $('header .logo-red').css('display', 'none');
                $('header .logo-white').css('display', 'block');
            } else {
                $('header').css('background-color', 'transparent');
                $('header .logo-red').css('display', 'block');
                $('header .logo-white').css('display', 'none');
            }
        });
    });


    // ICON DOWN
    $('.down i').on('click', function () {
        data = $(this).attr('data');

        $('html, body').animate({
            scrollTop: $('#'+data).offset().top - $('header').outerHeight()
        }, 'slow');      
    }); 



    // BTN ANIMATION
    $('.arrow-animate').on('mouseover', function() {
        if ($(window).width() > 1024) {
            $(this).addClass('color');
            $(this).find('.right-animation').addClass('animate');
        }    
    });

    $('.arrow-animate').on('mouseleave', function() {
        if ($(window).width() > 1024) {
            $(this).removeClass('color');
            $(this).find('.right-animation').removeClass('animate');
        }      
    }); 


    // FOOTER ÍCONES ANIMATION
    $('footer .icone-white').on('mouseover', function() {
        $(this).hide();
        $(this).closest('.icone').find('.icone-black').show();
    });

    $('footer .icone-black').on('mouseleave', function() {
        $(this).hide();
        $(this).closest('.icone').find('.icone-white').show();
    });



    // HOME MAIN SLIDER
    $('#home .main-slider-content').slick({
            dots: false, 
            arrows: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 10000,
            adaptiveHeight: true,
            adaptiveWidth: true,  
            pauseOnHover: false, 
            centerPadding: '0',  
            prevArrow:'<div class="arrow"><span class="prev"><i class="fa-solid fa-arrow-left"></i></span></div>',
            nextArrow:'<div class="arrow"><span class="next"><i class="fa-solid fa-arrow-right"></i></span></div>',         

                responsive: [
                    {
                      breakpoint: 1024,
                      settings: {       
                        arrows: false,
                        slidesToShow: 5,             
                        focusOnSelect: true,
                        touchMove: true,  
                        centerMode: true,
                        centerPadding: '0',
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: false,
                        slidesToShow: 4, 
                        focusOnSelect: true,
                        touchMove: true,  
                        centerMode: true,
                        centerPadding: '0',
                      }
                    },
                    {
                      breakpoint: 375,
                      settings: {
                        arrows: false,
                        slidesToShow: 3, 
                        focusOnSelect: true,
                        touchMove: true,  
                        centerMode: true,
                        centerPadding: '0',
                      }
                    }
                ]    
        });

   

    // HOME IMAGE HOVER
    $('#home .image').on('mouseover', function() {
        $(this).find('.link').show();
    });

    $('#home .image').on('mouseleave', function() {
        $(this).find('.link').hide();
    }); 

  
    
});    