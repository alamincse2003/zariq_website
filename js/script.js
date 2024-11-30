// navbar dropdown hover 
$(document).ready(function () {
    function updateDropdown() {
        if ($(window).width() < 1024) { 
            $('.nav-item.dropdown').off('mouseenter mouseleave');
            $('.nav-item.dropdown > a').off('click').on('click', function (e) {
                e.preventDefault();
                window.location.href = $(this).attr('href'); 
            });
        } else { 

            $('.nav-item.dropdown').hover(
                function () {
                    $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(200);
                },
                function () {
                    $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(200);
                }
            );
            $('.nav-item.dropdown > a').off('click'); 
        }
    }

    updateDropdown();
    $(window).resize(updateDropdown);
});


$(document).ready(function () {
    $('.nav-item.dropdown').hover(
        function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(200);
        },
        function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(200);
        }
    );

    $('.nav-item.dropdown > a').click(function (e) {
        window.location.href = $(this).attr('href');
    });
});
// navbar dropdown hover

// logo slider section start 
$(document).ready(function () {
    $(".logo-slider").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        //  arrows: false,
        prevArrow:
            '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>', // Custom previous arrow
        nextArrow:
            '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>', // Custom next arrow
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
// logo slider section end

// testimonial slider section start
    $(document).ready(function () {
        $(".testimonial-slider").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: $(".slick-prev"),
            nextArrow: $(".slick-next"),
            dots: false,
            infinite: true,
            responsive: [
                {
                    breakpoint: 768, // For devices with a max width of 768px (tablets and below)
                    settings: {
                        slidesToShow: 1, // Show 1 slide at a time on smaller screens
                    },
                },
                {
                    breakpoint: 480, // For devices with a max width of 480px (smaller smartphones)
                    settings: {
                        slidesToShow: 1, // Keep showing 1 slide on even smaller screens
                        dots: true, // Enable dots navigation for better mobile experience
                    },
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                    },
                },
            ],
        });
      });
// testimonial slider section end

// why choose slider section start
    $(document).ready(function () {
        $(".why-choose-slider").slick({
            slidesToShow: 3, // Default number of slides for large screens
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000, // Slide will change every 3 seconds
            arrows: false, // Enable arrows navigation
            prevArrow:
                '<button type="button" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>',
            dots: false, // Enable dots navigation if required
            responsive: [
                {
                    breakpoint: 1200, // For devices with max width of 1200px (laptops and tablets)
                    settings: {
                        slidesToShow: 2, // Show 2 slides at a time
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true, // Enable dots for easier navigation
                    },
                },
                {
                    breakpoint: 992, // For tablets and smaller laptops
                    settings: {
                        slidesToShow: 1, // Show 2 slides on medium devices
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        arrows: true, // Keep arrows for larger mobile devices
                    },
                },
                {
                    breakpoint: 768, // For smaller tablets (portrait)
                    settings: {
                        slidesToShow: 1, // Show 1 slide at a time for small tablets
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false, // Hide arrows on smaller screens
                    },
                },
                {
                    breakpoint: 480, // For smartphones
                    settings: {
                        slidesToShow: 1, // Show 1 slide at a time
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false, // Use dots only on small screens
                    },
                },
            ],
        });
      });
// testimonial slider section end

// test talks slider section start
$(document).ready(function () {
    $(".test-talks-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow:
            '<button type="button"  class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    });
});

// test talks slider section end

