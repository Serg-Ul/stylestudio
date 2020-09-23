$(document).ready(function () {
    // $('body').fadeIn(1000); // Плавная загрузка
    // Прелоадер
    $(window).on('load',function () {
        $('.loader-container').fadeOut(2000);
    });
    // Прелоадер

    // Меню бургер
    $('.header__burger').click(function () {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
    // Меню бургер

    // Слайдер
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease-in-out',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        pauseOnHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 10,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

