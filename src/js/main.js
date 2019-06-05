;(function ($) {
    $(function () {

        $('.hero-section-slider').slick({
            arrows: false,
            fade: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnFocus: true,
            pauseOnHover: true,
            infinite: true,
            // responsive: [
            //     {
            //         breakpoint: 575,
            //         settings: {
            //             arrows: false,
            //         }
            //     }
            // ]
        });

        // $('.cake-decorating-slider').slick({
        //     arrows: true,
        //     fade: false,
        //     dots: false,
        //     slidesToShow: 2,
        //     slidesToScroll: 1,
        //     autoplay: true,
        //     autoplaySpeed: 5000,
        //     pauseOnFocus: true,
        //     pauseOnHover: true,
        //     infinite: true,
        //     responsive: [
        //         {
        //             breakpoint: 991,
        //             settings: {
        //                 slidesToShow: 1
        //             }
        //         },
        //         {
        //             breakpoint: 575,
        //             settings: {
        //                 slidesToShow: 1,
        //                 arrows: false,
        //             }
        //         }
        //     ]
        // });
        $('.review-slider').slick({
            arrows: false,
            fade: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnFocus: true,
            pauseOnHover: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: false
                    }
                }
            ]
        });
        //
        var $root = $('html');
        $('a.nav-link').on('click', function () {
            $root.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);

            return false;
        });

    });
})(jQuery);

