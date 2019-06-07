;(function ($) {
    $(function () {

        $('.feedback-slider').slick({
            arrows: false,
            fade: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnFocus: true,
            pauseOnHover: true,
            infinite: true

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

