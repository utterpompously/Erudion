    $(".menu").slicknav({
        delay:       1000,                            // one second delay on mouseout
        animation:   {opacity:'show', height:'show'},  // fade-in and slide-down animation
        speed:       'fast',                          // faster animation speed
        autoArrows:  false
    });

     $('.slide-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        responsiveClass: true,
        
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            600: {
                    items: 1,
                    dots: false,
                    nav: false
                },
                1000: {
                    items: 1,
                    dots: false,
                    nav: false,
                    loop: true
                }
        }
    });

     $('.testimonial-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        responsiveClass: true,
        
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            600: {
                    items: 1,
                    dots: false,
                    nav: false
                },
                1000: {
                    items: 1,
                    dots: false,
                    nav: false,
                    loop: true
                }
        }
    });

     $('.counter').counterUp({
        delay: 15,
        time: 1000
    });

     $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100){  
            $('.header').addClass("sticky");
            $('.scrollup').show();
        }
        else{
            $('.header').removeClass("sticky");
            $('.scrollup').hide();
        }
    });  

