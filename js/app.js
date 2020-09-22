$(document).ready(function () {
    // $('body').fadeIn(1000); // Плавная загрузка
    // Прелоадер
    $('.loader-container').fadeOut(4000);

    // Меню бургер
    $('.header__burger').click(function () {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });

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
$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 150) {
        $('.btn-top').fadeIn(500);
    }else{
        $('.btn-top').fadeOut(500);
    }
});
$('.btn-top').click(function () {
    $('html,body').animate({scrollTop:0},500);
});

