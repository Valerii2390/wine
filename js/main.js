$(function() {
    $('.header__btn').on('click',
        function() {
            $('.menu__list, .header__btn').toggleClass('active');
            $('body').toggleClass('lock')
        });
    $('.footer__top span').on('click',
        function() {
            $('.footer__list').toggleClass('active');
            $('body').toggleClass('lock')
        });
    $('.footer__bottom span').on('click',
        function() {
            $('.footer__inner-list, .footer__inner-item').toggleClass('active');
            $('body').toggleClass('lock')
        });
});