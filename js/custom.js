(function ($) {
    "use strict";

    var $window = $(window);

    /*-----------------------------------------------------------------------------------*/
    /*	Elements Animation
     /*-----------------------------------------------------------------------------------*/
    new WOW().init();

    /*-----------------------------------------------------------------------------------*/
    /* Cross Browser
     /*-----------------------------------------------------------------------------------*/
    $('.sidebar .widget ul li ul li:first-child').css('border-bottom', 'none');
    $('.footer .widget_displaytweetswidget p:last-of-type, .widget.for-contact .contacts-list li:last-child').css('border-bottom', 'none');


    /*-----------------------------------------------------------------------------------*/
    /*	Tags Cloud
     /*-----------------------------------------------------------------------------------*/
    $('.tagcloud').addClass('clearfix');
    $('.tagcloud a').removeAttr('style');


    /*-----------------------------------------------------------------------------------*/
    /* Section Surf
     /*-----------------------------------------------------------------------------------*/
    var scrollTo = function (spacing, timeout) {
        var headerHeight = $('.header-wrapper').outerHeight();
        var setOffset = spacing - headerHeight;
        $("html, body").animate({
            scrollTop: setOffset
        }, {
            duration: timeout,
            easing: "easeInOutExpo"
        });
    };
    // Section Surf
    $('.section-surf').on('click', function () {
        var offsetTop = $(this).parents('.section').next('.section').offset().top;
        scrollTo(offsetTop, 1200);
    });


    // Header HTML anchors
    var clickCounts = 0;
    var header = $('.header-wrapper');
    var isVariantFour = header.hasClass('variant-four');
    if($(".main-menu").hasClass('parallax-menu')){
        $(".main-menu > ul > li > a, #logo a").on('click', function (event) {
            var attrValue = $(this).attr("href");
            var section = $(attrValue);
            var headerHeight = header.outerHeight();
            var firstSection = $('.main-menu > ul > li, #logo ').first().find('a').attr("href");

            if (section.length != 0 && section != '#') {
                clickCounts++;
                var offsetTop = section.offset().top;
                var setOffset = offsetTop - headerHeight;

                if (clickCounts === 1 && firstSection === attrValue) {
                    if ( isVariantFour != true) {
                        setOffset = offsetTop - ( headerHeight * 2 );
                        console.log('This is true condition')
                    }
                }

                $("html, body").animate({
                    scrollTop: setOffset
                }, {
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
            }
            event.preventDefault();
        });
    }


    var stickyElement = $('.sticky-header');
    var stickyMenuClass = 'sticky-menu';
    var stickyElementPosition = "relative";
    var stickyElementTopSpacing = 0;

    if (stickyElement.hasClass('variant-four')) {
        stickyElementPosition = "absolute";
        stickyElementTopSpacing = stickyElement.offset().top;
    }

    function stickyHeader() {
        var scrollTop = $window.scrollTop();
        var headerFour = $('.header-wrapper.variant-four');
        stickyElement.css("position", ( scrollTop > 0 ? "fixed" : stickyElementPosition ));



        if ($(window).width()>974) {

            stickyElementTopSpacing > scrollTop ? headerFour.removeClass(stickyMenuClass) : headerFour.addClass(stickyMenuClass);
        }
        else{
            headerFour.addClass(stickyMenuClass);
        }

    }


    /*-----------------------------------------------------------------------------------*/
    /* Main Menu Dropdown Control
     /*-----------------------------------------------------------------------------------*/
    var mainMenu = $('.main-menu ul li ');
    mainMenu.children('ul').css({ display: 'none'});
    $('.main-menu ul li ').hover(function (e) {
        $(this).children('ul').stop(true, true).slideDown(200).css({
            display: 'block'
        });
    }, function (e) {
        $(this).children('ul').stop(true, true).slideUp(200);
    });



    /*-----------------------------------------------------------------------------------*/
    /*	Responsive Nav //  Main Menu
     /*-----------------------------------------------------------------------------------*/


    $('header .main-menu').meanmenu({
        meanMenuContainer: '.main-menu-wrapper', // Choose where meanmenu will be placed within the HTML
        meanMenuCloseSize: "20px", // set font size of close button
        onePage: true, // set to true for one page sites
        meanScreenWidth: "991" // set the screen width you want meanmenu to kick in at
    });


    /*-----------------------------------------------------------------------------------*/
    /*	Parallax Effects
     /*-----------------------------------------------------------------------------------*/
    function parallax() {
        $('#testimonial').parallax("50%", 0.4);
        $('#follow').parallax("50%", 0.4);
        $('#contact-details').parallax("50%", 0.4);
        $('.home-slider').parallax("50%", 0.2);
    }

    $window.on('load', parallax);
    $window.on('resize', parallax);
    $window.on('scroll', parallax);


    /*-----------------------------------------------------------------------------------*/
    /*	Flex Slider
     /*-----------------------------------------------------------------------------------*/
    if (jQuery().flexslider) {

        $('.flexslider.variant-one, .flexslider.variant-two').flexslider({
            animation: "fade",
            slideshowSpeed: 7000,
            animationSpeed: 1500,
            controlNav: false,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            start: function () {
                var flexSlider = $('.flexslider');

                function verticalCenter(elem) {
                    var slideDescription = $(elem).find('.slide-description');
                    slideDescription.css('margin-top', "-" + ( slideDescription.height() / 2 ) + "px");
                }

                verticalCenter('.flexslider.variant-one');
                verticalCenter('.flexslider.variant-two');

                $window.on('resize', function () {
                    verticalCenter('.flexslider.variant-one');
                    verticalCenter('.flexslider.variant-two');
                });
            }
        });

        $('.flexslider.variant-three').flexslider({
            animation: "fade",
            direction: "vertical",
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            controlNav: false
        });

        $('.slider-testimonials-var3').flexslider({
            animation: "fade",
            controlNav: false,
            directionNav: false
        });

        $('.slider-follow-var3').flexslider({
            animation: "fade",
            controlNav: false,
            directionNav: false
        });


        $('.gallery-post-slider .flexslider-container, .slide-show .flexslider').flexslider({
            animation: "slide",
            slideshowSpeed: 3000,
            animationSpeed: 500,
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            controlNav: false
        });


        $('.testimonial .flexslider, .follow-us .flexslider').flexslider({
            animation: "slide",
            prevText: '<i class="fa fa-chevron-left"></i>',
            nextText: '<i class="fa fa-chevron-right"></i>',
            controlNav: false
        });

        $('.single-project .flexslider').flexslider({
            animation: "fade",
            controlNav: false,
            controlsContainer: ".sp-control-nav",
            prevText: '<i class="fa fa-angle-double-left"></i>',
            nextText: '<i class="fa fa-angle-double-right"></i>'
        });


    }

    // Remove Flex Slider Navigation for Smaller Screens Like IPhone Portrait
    $('.flexslider.variant-one, .flexslider.variant-two, .flexslider.variant-three, .flexslider.variant-four, .testimonial .flexslider, .follow-us .flexslider, .gallery-post-slider .flexslider-container').hover(function () {
        $(this).children('.flex-direction-nav').stop(true, true).fadeIn();
    }, function () {
        $(this).children('.flex-direction-nav').stop(true, true).fadeOut();
    });


    /*-----------------------------------------------------------------------------------*/
    /* Owl carousel about page
     /*-----------------------------------------------------------------------------------*/
    var owl = $(".clients .owl-carousel");
    owl.owlCarousel({
        pagination: false,
        items: 4,
        itemsDesktop: [1100, 3],
        itemsDesktopSmall: [900, 2],
        itemsMobile: [400, 1]
    });
    $(".outter-wrapper .next").click(function () {
        owl.trigger('owl.next');
    });
    $(".outter-wrapper .prev").click(function () {
        owl.trigger('owl.prev');
    });



    /*-----------------------------------------------------------------------------------*/
    /* Hover Effect for Images on About Page Carousel
     /*-----------------------------------------------------------------------------------*/
    $window.on('load', function () {
        $('.clients .owl-carousel img').adipoli({
            'startEffect': 'grayscale',
            'hoverEffect': 'normal'
        });
    });


    /*-----------------------------------------------------------------------------------*/
    /* Carousel for One Page Portfolio clients section
     /*-----------------------------------------------------------------------------------*/
    var clientCarousel = $(".client-section-carousel #owl-carousel");
    clientCarousel.owlCarousel({
        items: 5,
        itemsDesktop: [1100, 4],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [700, 2],
        itemsMobile: [479, 1]
    });

    var clientCarousel4 = $(".client-section-carousel #owl-carousel-4");
    clientCarousel4.owlCarousel({
        items: 5,
        itemsDesktop: [1100, 4],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [700, 2],
        itemsMobile: [479, 1]
    });



    /*-----------------------------------------------------------------------------------*/
    /* Carousel for Our Work - variant-two
     /*-----------------------------------------------------------------------------------*/
    $(".work-section-carousel #owl-carousel-work").owlCarousel({
        pagination: false,
        items: 6,
        itemsDesktop: [1500, 4],
        itemsDesktopSmall: [900, 2],
        itemsMobile: [479, 1]
    });


    /*-----------------------------------------------------------------------------------*/
    /*  Blog Posts carousel
     /*-----------------------------------------------------------------------------------*/
    $('.blog-post-carousel #owl-carousel').owlCarousel({
        items: 3,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [900, 2],
        itemsMobile: [479, 1]
    });


    /*-----------------------------------------------------------------------------------*/
    /* Carousel for Our Work - variant-three
     /*-----------------------------------------------------------------------------------*/
    var wsc = $('.work-section-carousel-2 #owl-carousel-3');
    wsc.owlCarousel({
        pagination: false,
        items: 5,
        rewindNav: false,
        afterAction: afterMove,
        startDragging: afterMove
    });
    $(".work-section-carousel-2 .next").click(function () {
        wsc.trigger('owl.next');
    });
    $(".work-section-carousel-2 .prev").click(function () {
        wsc.trigger('owl.prev');
    });

    function carouselStyles() {
        var workSection = $('.work-section-carousel-2'),
            $overlay = workSection.find('.overlay'),
            $prev = workSection.find('.prev'),
            $next = workSection.find('.next'),
            prevHeight = $prev.height(),
            workSectionHeight = workSection.height(),
            centerControlNav = (workSectionHeight / 2) - ( prevHeight / 2 ),
            owlItemWidth = workSection.find('.owl-item').width();

        $prev.css('margin-top', centerControlNav);
        $next.css('margin-top', centerControlNav);
        $overlay.css('width', ( owlItemWidth ));

        $window.width() > 1200 ? $overlay.fadeIn(50) : $overlay.fadeOut(50);
    }

    function afterMove() {
        carouselStyles();
        var targetItem = $('.work-section-carousel-2').find(".item .inner-contents"),
            visibleItems = this.visibleItems;
        if ($window.width() > 1200) {
            $.each(visibleItems, function (index, value) {
                targetItem.eq(value).fadeOut(50);
            });
            for (var i = 0; i < visibleItems.length; i++) {
                if (i === 0 || i === (visibleItems.length - 1 )) {
                    targetItem.eq(visibleItems[i]).fadeOut(50);
                } else {
                    targetItem.eq(visibleItems[i]).fadeIn(50);
                }
            }
        } else {
            targetItem.fadeIn(50);
        }
    }


    /*-----------------------------------------------------------------------------------*/
    /*  Carousel for Services section
     /*-----------------------------------------------------------------------------------*/
    var ssc = $('.services-section-carousel #owl-carousel');
    ssc.owlCarousel({
        pagination: false,
        items: 5,
        itemsDesktop: [1100, 4],
        itemsDesktopSmall: [800, 4],
        itemsTablet: [600, 2],
        itemsMobile: [450, 1]
    });
    $(".services-section-carousel .next").click(function () {
        ssc.trigger('owl.next');
    });
    $(".services-section-carousel .prev").click(function () {
        ssc.trigger('owl.prev');
    });


    /*-----------------------------------------------------------------------------------*/
    /*  Carousel for Single Portfolio
     /*-----------------------------------------------------------------------------------*/
    var rp = $('.related-projects-carousel #owl-carousel');
    rp.owlCarousel({
        pagination: false,
        items: 4  //10 items above 1000px browser width
    });
    //Custom Navigation Events
    $(".rp-control-nav .next").click(function () {
        rp.trigger('owl.next');
    });
    $(".rp-control-nav .prev").click(function () {
        rp.trigger('owl.prev');
    });


    /*-----------------------------------------------------------------------------------*/
    /*	FAQ Scroll Top
     /*-----------------------------------------------------------------------------------*/
    $(".scroll-top").click(function () {
        var topOffset = $(this).parents('dd').siblings('dt').offset().top;
        $("html, body").animate({
            scrollTop: topOffset + 'px'
        }, {
            duration: 1200,
            easing: "easeInOutExpo"
        });
        return false;
    });


    /*-----------------------------------------------------------------------------------*/
    /*	FAQ Filtering
     /*-----------------------------------------------------------------------------------*/
    var faqFilter = $('.faq-nav li div');
    faqFilter.click(function () {
        faqFilter.removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter'),
            itemSelector = $('.faq-category'),
            filter = $('.' + selector);
        itemSelector.hide();
        filter.stop(true, true).fadeIn(500);

    });


    if ($(window).width()<992) {
        $('.team-member').click(function(){
            $(this).find('.wrapper-member-contents').toggleClass('flipped');

        });
    }
    else{
        $('.team-member').hover(function(){
            $(this).find('.wrapper-member-contents').toggleClass('flipped');

        });
    }


    $('.faqs-wrap .faq-title').click(function () {
        if ($(this).hasClass('current')) {
            $(this).removeClass('current').next('.faq-body').stop(true, true).slideUp(500);
        }
        else {
            $(this).addClass('current').next('.faq-body').stop(true, true).slideDown(500);
        }
    });




    /*-----------------------------------------------------------------------------------*/
    /*	Isotope
     /*-----------------------------------------------------------------------------------*/
    var galleryItemContainer = $('.isotope');
    var filterLinks = $("#filter-by a");

    function isotope() {
        galleryItemContainer.isotope({
            animationEngine: 'best-available',
            layoutMode: 'fitRows'
        });
        filterLinks.click(function (e) {
            var selector = jQuery(this).attr('data-filter');
            galleryItemContainer.isotope({
                filter: '.' + selector,
                itemSelector: '.isotope-item'
            });

            filterLinks.removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });

    }

    if (jQuery().isotope) {
        $window.on('load', function () {
            isotope();
        });
        $window.on('resize', function () {
            isotope();
        });
    }

    /*-----------------------------------------------------------------------------------*/
    /*	Portfolio Hover Effect
     /*-----------------------------------------------------------------------------------*/
    if (jQuery().transition) {

        $('.related-projects .item figure, #portfolio-container .portfolio-item  figure').hover(function () {
            $(this).find('.overlay').stop(true, true).transition({
                opacity: 0.9
            }, 300);
        }, function () {
            $(this).find('.overlay').stop(true, true).transition({
                opacity: 0
            }, 300);
        });

        $('.gallery-item figure').not($('.our-work.variant-four')).hover(function () {
            $(this).find('.media-container').stop(true, true).transition({
                opacity: 0.8
            }, 300);
            $(this).find('a').stop(true, true).transition({
                opacity: 1,
                top: "50%"
            }, 300);

        }, function () {
            $(this).find('.media-container').stop(true, true).transition({
                opacity: 0
            }, 300);

            $(this).find('a').stop(true, true).transition({
                opacity: 0,
                top: "45%"
            }, 300);
        });


        $('.our-work.variant-four .gallery-item .inner-contents').hover(function () {
            $(this).find('.media-container').stop(true, true).transition({
                opacity: '1'
            }, 300);
            $(this).find('.overlay').show();
        }, function () {
            $(this).find('.media-container').stop(true, true).transition({
                opacity: '0'
            }, 300);
            $(this).find('.overlay').hide();
        });

    }

    var workSingularWrap = $('.projects-showcase');

    $('.projects-showcase .control-btns .close-btn').on('click', function (event) {
        $(this).parents('.projects-showcase').addClass('closed').slideUp(500);
        event.preventDefault();
    });



    $('.our-work .gallery-btn').on('click', function(event){
        if(workSingularWrap.hasClass('closed')){
            workSingularWrap.removeClass('closed').slideDown(500);
        }
        event.preventDefault();
    });


    /*-----------------------------------------------------------------------------------*/
    /*	Swipebox
     /*-----------------------------------------------------------------------------------*/
    $(".swipebox").swipebox();


    /*-----------------------------------------------------------------------------------*/
    /*	Notification Hide Function
     /*-----------------------------------------------------------------------------------*/
    $(".icon-remove").click(function () {
        $(this).parent().slideUp(500);
    });


    /*-----------------------------------------------------------------------------------*/
    /*	Accordion
     /*-----------------------------------------------------------------------------------*/
    $(function () {
        $('dl.accordion dt').click(function () {
            $(this).siblings('dt').removeClass('current');
            $(this).addClass('current').next('dd').stop(true, true).slideDown(500).siblings('dd').stop(true, true).slideUp(500);
        });
    });


    /*-----------------------------------------------------------------------------------*/
    /*	Toggle
     /*-----------------------------------------------------------------------------------*/
    $(function () {
        $('dl.toggle dt').click(function () {
            if ($(this).hasClass('current')) {
                $(this).removeClass('current').next('dd').stop(true, true).slideUp(500);
            }
            else {
                $(this).addClass('current').next('dd').stop(true, true).slideDown(500);
            }
        });
    });


    /*-----------------------------------------------------------------------------------*/
    /* Tabs
     /*-----------------------------------------------------------------------------------*/
    $(function () {
        var $tabsNav = $('.tabs-nav'),
            $tabsNavLis = $tabsNav.children('li');

        $tabsNav.each(function () {
            var $this = $(this);
            $this.next().children('.tab-content').stop(true, true).hide()
                .first().show();
            $this.children('li').first().addClass('active').stop(true, true).show();
        });

        $tabsNavLis.on('click', function (e) {
            var $this = $(this);
            $this.siblings().removeClass('active').end()
                .addClass('active');
            var idx = $this.parent().children().index($this);
            $this.parent().next().children('.tab-content').stop(true, true).hide().eq(idx).fadeIn();
            e.preventDefault();
        });

    });

    /*-----------------------------------------------------------------------------------*/
    /*	Tabs Widget
     /*-----------------------------------------------------------------------------------*/
    $('.footer .tabbed .tabs li:first-child, .tabbed .tabs li:first-child').addClass('current');
    $('.footer .block:first, .tabbed .block:first').addClass('current');


    $('.tabbed .tabs li').click(function () {
        var $this = $(this);
        var tabNumber = $this.index();

        /* remove current class from other tabs and assign to this one */
        $this.siblings('li').removeClass('current');
        $this.addClass('current');

        /* remove current class from current block and assign to related one */
        $this.parent('ul').siblings('.block').removeClass('current');
        $this.closest('.tabbed').children('.block:eq(' + tabNumber + ')').addClass('current');
    });


    /*----------------------------------------------------------------------------------*/
    /* Contact Form AJAX validation and submission
     /*---------------------------------------------------------------------------------- */
    if (jQuery().validate && jQuery().ajaxSubmit) {
        // Contact Form Handling


        var contact_options = {
            target: '#message-sent',
            beforeSubmit: function () {
                $('#contact-loader').fadeIn('fast');
                $('#message-sent').fadeOut('fast');
            },
            success: function () {
                $('#contact-loader').fadeOut('fast');
                $('#message-sent').fadeIn('fast');
                $('.contact-form').resetForm();
            }
        };

        $('.contact-form').validate({
            errorLabelContainer: $("div.error-container"),
            submitHandler: function (form) {
                $(form).ajaxSubmit(contact_options);
            }
        });
    }

    /*-----------------------------------------------------------------*/
    /* Message
     */
    /*-----------------------------------------------------------------*/
    function resize() {
        if ($(window).width() < 751) {
            $('.header-wrapper.variant-one #logo').css({"left": "50%", "margin-left": "-61px"});
            $('.contact-card .close').click(function (e) {
                $('.contact-card').slideUp(300);
                $('.menu-item.active').removeClass('active');
                $('.header-wrapper.variant-one #logo').css({"left": "0", "margin-left": "0"});
                $('.header-wrapper.variant-one #logo img').css({
                    "transition": "1.5s all ease-in-out"
                });
                $('.header-wrapper.variant-one .custom-arrow-nav').addClass('arrow-active');
            });

            $('.header-wrapper.variant-one .logo-wrapper i').click(function (e) {
                $('.contact-card').slideDown(300);
                $('.header-wrapper.variant-one .custom-arrow-nav').removeClass('arrow-active');
                $('.header-wrapper.variant-one #logo').css({"left": "50%", "margin-left": "-61px"});
                $('.header-wrapper.variant-one #logo img').css({
                    "transition": "1.5s all ease-in-out"
                });
            });
        }
        else {
            $('.header-wrapper.variant-one #logo').css({"left": "0", "margin-left": "0"});
        }
    }




    /* ----------------------------------------------------
     contact us icons
     ---------------------------------------------------- */
    $(".mail-info").hover(function () {
        $('.mail-info i').toggleClass('rubberBand');
    });

    $(".contact-info").hover(function () {
        $('.contact-info i').toggleClass('tada');
    });
    $(".address-info").hover(function () {
        $('.address-info i').toggleClass('bounce');
    });

    /*-----------------------------------------------------------------------------------*/
    /* twitter fetcher
     /*-----------------------------------------------------------------------------------*/
    if($('#twitter-fetcher').length){
        $(twitterFetcher.fetch('568332165872488448', 'twitter-fetcher', 2, true, false, true, "default", false));

    }


    /*-----------------------------------------------------------------------------------*/
    /* flickr widget
     /*-----------------------------------------------------------------------------------*/
    if ($('#myElement').length){
        $(jsFlickrBadge(document.getElementById('myElement'), {
            // your Flickr ID (find it here)
            flickrId: '52617155@N08',
            // feed type. user, group, contacts, etc.
            feed: 'user',
            // number of rows to display
            rows: 3,
            // number of columns to display
            columns: 2,
            // size of each thumbnail (any bigger than 75 will cause pixelization)
            size: 100,
            // animation to use.
            // one of: vscroll, random, vscroll, shuffle, zoom, scroll, flipX, flipY
            animation: 'none',
            // seconds each animation takes
            animationSpeed: 0,
            // seconds between each animation
            animationPause: 0
        }));
    }
    /* ---------------------------------------------------- */
    /*  Responsive Tables by ZURB
     /*	Foundation v2.1.4 http://foundation.zurb.com
     /* ---------------------------------------------------- */
    var switched = false;
    var updateTables = function () {
        if (($window.width() < 751) && !switched) {
            switched = true;
            $("table.responsive").each(function (i, element) {
                splitTable($(element));
            });
            return true;
        }
        else if (switched && ($window.width() > 750)) {
            switched = false;
            $("table.responsive").each(function (i, element) {
                unsplitTable($(element));
            });
        }
    };

    $window.on("redraw", function () {
        switched = false;
        updateTables();
    }); // An event to listen for
    $window.on("resize", updateTables);


    function splitTable(original) {
        original.wrap("<div class='table-wrapper' />");

        var copy = original.clone();
        copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
        copy.removeClass("responsive");

        original.closest(".table-wrapper").append(copy);
        copy.wrap("<div class='pinned' />");
        original.wrap("<div class='scrollable' />");

        setCellHeights(original, copy);
    }

    function unsplitTable(original) {
        original.closest(".table-wrapper").find(".pinned").remove();
        original.unwrap();
        original.unwrap();
    }

    function setCellHeights(original, copy) {
        var tr = original.find('tr'),
            tr_copy = copy.find('tr'),
            heights = [];

        tr.each(function (index) {
            var self = $(this),
                tx = self.find('th, td');

            tx.each(function () {
                var height = $(this).outerHeight(true);
                heights[index] = heights[index] || 0;
                if (height > heights[index]) heights[index] = height;
            });

        });

        tr_copy.each(function (index) {
            $(this).height(heights[index]);
        });
    }

    // Functions that should load on window.load event.
    $window.load(function () {

        $(".preloaderimg").fadeOut();
        jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
            jQuery(this).remove();
        });

        stickyHeader();
        carouselStyles();
        updateTables();
    });

    // Functions that should load on window.resize event.
    $window.resize(function () {
        stickyHeader();
        resize();
    });

    // Functions that should load on window.scroll event.
    $window.scroll(function () {

        // Sticky Header
        stickyHeader();

        if ($(this).scrollTop() > 0) {
            $('.margin-box').css("padding-top", "61px")
        } else {
            $('.margin-box').css("padding-top", "0");
        }


        // scroll-to header fix variation one
        if ($(document).scrollTop() >= 1) {
            $("#logo-image").addClass("smaller");
        }
        else{
            $("#logo-image").removeClass("smaller");
        }

        // scroll-to header fix variation four
        if ($(document).scrollTop() >= 61) {
            $(".variant-four #logo-image").addClass("smaller");
        }
        else{
            $(".variant-four #logo-image").removeClass("smaller");
        }
    });

    /* ----------------------------------------------------

     ---------------------------------------------------- */


})(jQuery);