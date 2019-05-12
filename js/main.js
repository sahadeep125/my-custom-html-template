(function ($) {
    "use strict";
    $(document).ready(function () {
        // ---------------------------------------------//
        // WOW Settings
        // ---------------------------------------------//
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    });
    $(window).on('load', function () {
        // ---------------------------------------------//
        //  Preloader
        //--------------------------------------------- //
        jQuery('.preloader').fadeOut(1000);

    });
});