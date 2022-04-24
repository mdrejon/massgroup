(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        $('.we-create-slider-area').owlCarousel({
            items: 4,
            loop: false,
            dots: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 2000,
            navText: ["<img src='assets/img/nav-img-left.png'>","<img src='assets/img/nav-img-right.png'>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: true,
                }
            }
        });
        
        $('#executor-slider-area-about').owlCarousel({
            items: 4,
            dots: false,
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplaySpeed: 1500,
            loop: false,
            navText: ["<img src='assets/img/nav-img-left.png'>","<img src='assets/img/nav-img-right.png'>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: true,
                }
            }
        });
        
        $('#associate-slider-area').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            margin: 50,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 1500,
            navText: ["<img src='assets/img/nav-img-left.png'>","<img src='assets/img/nav-img-right.png'>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: true,
                }
            }
        });
        
        $('.hero-area').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 3000,
        });
        
        $('.crs-single-slider').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            animateIn: 'fadeIn',
            autoplayTimeout: 5000,
            autoplaySpeed: 2500,
        });
        
        $('.project-area-right').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            animateIn: 'fadeIn',
            autoplaySpeed: 2500,
        });
        $('.vision-right-content').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplaySpeed: 2500,
            animateIn: 'fadeIn',
            navText: ["<img src='assets/img/nav-img-left.png'>","<img src='assets/img/nav-img-right.png'>"],
        });
        
        $('.we-logo-slider-area').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplaySpeed: 1000,
            navText: ["<img src='assets/img/nav-img-left.png'>","<img src='assets/img/nav-img-right.png'>"],
        });

        $('.aritect-slide').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplaySpeed: 1500,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });

        $('.socil-icon').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplaySpeed: 1500,
            navText: ["<img src='assets/img/nav-img-left.png'>","<img src='assets/img/nav-img-right.png'>"],
        });

        $('.slider').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 2500,
            navText: ["<img src='assets/img/nav-img-left.png'>","<img src='assets/img/nav-img-right.png'>"],
        });

//        $('.status-area').owlCarousel({
//            items: 1,
//            loop: true,
//            dots: true,
//            nav: true,
//            autoplay: true,
//            autoplayTimeout: 5000,
//            autoplaySpeed: 2500,
//            navText: ["<img src='assets/img/nav-img-left.png'>","<img src='assets/img/nav-img-right.png'>"],
//        });



$(document).ready(function () {
$('.layout-menu ul li.one').click(function () {
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').removeClass("active");
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').addClass("active");
});
$('.layout-menu ul li.two').click(function () {
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').removeClass("active");
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').addClass("active");
});
$('.layout-menu ul li.three').click(function () {
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').removeClass("active");
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').addClass("active");
});
$('.layout-menu ul li.four').click(function () {
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').removeClass("active");
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').addClass("active");
});
$('.layout-menu ul li.five').click(function () {
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').removeClass("active");
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').addClass("active");
});
$('.layout-menu ul li.six').click(function () {
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').removeClass("active");
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').addClass("active");
});
$('.layout-menu ul li.seven').click(function () {
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').removeClass("active");
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').addClass("active");
});
$('.layout-menu ul li.eight').click(function () {
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').removeClass("active");
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').addClass("active");
});
$('.layout-menu ul li.nine').click(function () {
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').removeClass("active");
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').addClass("active");
});
$('.layout-menu ul li.ten').click(function () {
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').removeClass("active");
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').addClass("active");
});
$('.layout-menu ul li.eleven').click(function () {
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').removeClass("active");
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').addClass("active");
});
$('.layout-menu ul li.twile').click(function () {
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').removeClass("active");
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').addClass("active");
});
$('.layout-menu ul li.thirteen').click(function () {
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').removeClass("active");
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').addClass("active");
});
$('.layout-menu ul li.fourteen').click(function () {
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').removeClass("active");
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').addClass("active");
});
$('.layout-menu ul li.fifteen').click(function () {
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').removeClass("active");
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').addClass("active");
});
$('.layout-menu ul li.sixteen').click(function () {
    $('.layout-menu ul li.one, .table-area.one, .layout-left-area.one').removeClass("active");
    $('.layout-menu ul li.two, .table-area.two, .layout-left-area.two').removeClass("active");
    $('.layout-menu ul li.three, .table-area.three, .layout-left-area.three').removeClass("active");
    $('.layout-menu ul li.four, .table-area.four, .layout-left-area.four').removeClass("active");
    $('.layout-menu ul li.five, .table-area.five, .layout-left-area.five').removeClass("active");
    $('.layout-menu ul li.six, .table-area.six, .layout-left-area.six').removeClass("active");
    $('.layout-menu ul li.seven, .table-area.seven, .layout-left-area.seven').removeClass("active");
    $('.layout-menu ul li.eight, .table-area.eight, .layout-left-area.eight').removeClass("active");
    $('.layout-menu ul li.nine, .table-area.nine, .layout-left-area.nine').removeClass("active");
    $('.layout-menu ul li.ten, .table-area.ten, .layout-left-area.ten').removeClass("active");
    $('.layout-menu ul li.eleven, .table-area.eleven, .layout-left-area.eleven').removeClass("active");
    $('.layout-menu ul li.twile, .table-area.twile, .layout-left-area.twile').removeClass("active");
    $('.layout-menu ul li.thirteen, .table-area.thirteen, .layout-left-area.thirteen').removeClass("active");
    $('.layout-menu ul li.fourteen, .table-area.fourteen, .layout-left-area.fourteen').removeClass("active");
    $('.layout-menu ul li.fifteen, .table-area.fifteen, .layout-left-area.fifteen').removeClass("active");
    $('.layout-menu ul li.sixteen, .table-area.sixteen, .layout-left-area.sixteen').addClass("active");
});
});



    });
}(jQuery));

(function ($) {

    'use strict';

    function animate(el) {
        hideMenu_in_FirstSection();
        el.addClass('animated ' + el.data('animation')).css('animation-delay', el.data('delay'));
        el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            el.removeClass('animated ' + el.data('animation'));
        });
    }

    // initialize fullPage
    $('#fullpage').fullpage({
        navigation: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
        anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection', 'sevenSection', 'eightSection', 'nineSection', 'tenSection', 'elevenSection', 'twelveSection'],

        //navigationTooltips: ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven'],

        //    sectionsColor: ['#0F2980', '#ffd200', '#0e9020', '#0F2980', '#ffd200'],

        // autoScrolling: false,

        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            hideMenu_in_FirstSection();
            // console.log('slideIndex:' + slideIndex);
            // console.log('---');

        },


        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
            hideMenu_in_FirstSection();
        },

        afterLoad: function (anchorLink, index) {
            hideMenu_in_FirstSection();
            $('.fp-controlArrow').data('animation', 'bounce').data('duration', '.6s').addClass('is-animated nav-arrow-bounce')

        },

        onLeave: function (index, nextIndex, direction) {
            hideMenu_in_FirstSection();
            //console.log('index: ' + index + ' NextIndex: ' + nextIndex);

            $('.section' + nextIndex).find(".is-animated").each(function (index) {
                animate($(this));
            });
        }
    });
})(jQuery);

$(document).ready(function () {
    hideMenu_in_FirstSection();
    $('#fullpage').show();
});

function hideMenu_in_FirstSection() {
    var menu = $(".menu-area");
    var url = window.location.href;
    startCounter();
    addActiveClass_in_Menu(url)
    if (url.match(/firstSection/gi)) {
        menu.addClass("hidden");
    } else if (url.match(/secondSection/gi) || url.match(/thirdSection/gi) || url.match(/fourthSection/gi) ||
        url.match(/fifthSection/gi) || url.match(/sixthSection/gi) || url.match(/sevenSection/gi) ||
        url.match(/eightSection/gi) || url.match(/nineSection/gi) || url.match(/tenSection/gi) ||
        url.match(/elevenSection/gi) || url.match(/index.html#secondSection/gi)) {
        menu.removeClass("hidden");
    }
}

function addActiveClass_in_Menu(url) {
    if (url.match(/secondSection/gi)) {
        $('ul#active').find('li a.active-menu').removeClass('active-menu');
        $('ul#active li#Project a').addClass('active-menu');
    } else if (window.location.href.match(/thirdSection/gi)) {
        $('ul#active').find('li a.active-menu').removeClass('active-menu');
        $('ul#active li#Our_Story a').addClass('active-menu');
        startCounter();
    } else if (window.location.href.match(/fourthSection/gi)) {
        $('ul#active').find('li a.active-menu').removeClass('active-menu');
        $('ul#active li#Core_Values a').addClass('active-menu');
    } else if (window.location.href.match(/fifthSection/gi)) {
        $('ul#active').find('li a.active-menu').removeClass('active-menu');
        $('ul#active li#News_Events a').addClass('active-menu');
    } else if (window.location.href.match(/sixthSection/gi)) {
        $('ul#active').find('li a.active-menu').removeClass('active-menu');
        $('ul#active li#Media a').addClass('active-menu');
    } else if (window.location.href.match(/sevenSection/gi)) {
        $('ul#active').find('li a.active-menu').removeClass('active-menu');
        $('ul#active li#Gallery a').addClass('active-menu');
    } else if (window.location.href.match(/eightSection/gi)) {
        $('ul#active').find('li a.active-menu').removeClass('active-menu');
        $('ul#active li#Social_Platforms a').addClass('active-menu');
    } else if (window.location.href.match(/nineSection/gi)) {
        $('ul#active').find('li a.active-menu').removeClass('active-menu');
        $('ul#active li#Our_Architects a').addClass('active-menu');
    } else if (window.location.href.match(/tenSection/gi)) {
        $('ul#active').find('li a.active-menu').removeClass('active-menu');
        $('ul#active li#Testimony a').addClass('active-menu');
    } else if (window.location.href.match(/elevenSection/gi)) {
        $('ul#active').find('li a.active-menu').removeClass('active-menu');
        $('ul#active li#Talk_to_us a').addClass('active-menu');
    }
}

//counter-js
function startCounter() {
    (function ($) {
        $.fn.countTo = function (options) {
            options = options || {};

            return $(this).each(function () {
                // set options for current element
                var settings = $.extend({}, $.fn.countTo.defaults, {
                    from: $(this).data('from'),
                    to: $(this).data('to'),
                    speed: $(this).data('speed'),
                    refreshInterval: $(this).data('refresh-interval'),
                    decimals: $(this).data('decimals')
                }, options);

                // how many times to update the value, and how much to increment the value on each update
                var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;

                // references & variables that will change with each update
                var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};

                $self.data('countTo', data);

                // if an existing interval can be found, clear it first
                if (data.interval) {
                    clearInterval(data.interval);
                }
                data.interval = setInterval(updateTimer, settings.refreshInterval);

                // initialize the element with the starting value
                render(value);

                function updateTimer() {
                    value += increment;
                    loopCount++;

                    render(value);

                    if (typeof (settings.onUpdate) == 'function') {
                        settings.onUpdate.call(self, value);
                    }

                    if (loopCount >= loops) {
                        // remove the interval
                        $self.removeData('countTo');
                        clearInterval(data.interval);
                        value = settings.to;

                        if (typeof (settings.onComplete) == 'function') {
                            settings.onComplete.call(self, value);
                        }
                    }
                }

                function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    $self.text(formattedValue);
                }
            });
        };

        $.fn.countTo.defaults = {
            from: 0, // the number the element should start at
            to: 0, // the number the element should end at
            speed: 1000, // how long it should take to count between the target numbers
            refreshInterval: 100, // how often the element should be updated
            decimals: 0, // the number of decimal places to show
            formatter: formatter, // handler for formatting the value before rendering
            onUpdate: null, // callback method for every time the element is updated
            onComplete: null // callback method for when the element finishes updating
        };

        function formatter(value, settings) {
            return value.toFixed(settings.decimals);
        }
    }(jQuery));

    jQuery(function ($) {

        // start all the timers
        $('.counter-value').each(count);

        // restart a timer when a button is clicked
        $('.counter-value').each(count);

        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    });
}

