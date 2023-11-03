var lastScroll = 0;

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > lastScroll) {
        $('.header-page').addClass('menu-animation');
    } if (scroll < 1) {
        $('.header-page').removeClass('menu-animation');
    }

    lastScroll = scroll;
});

