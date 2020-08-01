(function ($) {

    // Open Lightbox
    $('img').on('click', function (e) {
        e.preventDefault();
        var image = $(this).attr('src');
        $('html').addClass('no-scroll');
        $('body').append('<div class="lightbox-opened"><img src="' + image + '"></div>');
        //    $('.lightbox-opened').fadeIn();
    });

    // Close Lightbox
    $('body').on('click', '.lightbox-opened', function () {
        $('.lightbox-opened').fadeOut();
        $('html').removeClass('no-scroll');
        $('.lightbox-opened').remove();
    });

})(jQuery);
