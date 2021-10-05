jQuery(window).on('scroll', function () {
    　if (600 < jQuery(this).scrollTop()) {
    　　jQuery('.header_inner').addClass('header_charge_color');
    　} else {
    　　jQuery('.header_inner').removeClass('header_charge_color');
    　}
    });

    $(function() {
        $('#vegas').vegas({
            slides: [
                { src: 'https://github.com/takayaaa/pengin-site/blob/main/img/fv-bgi_01@2x.jpg?raw=true'},
                { src: 'https://github.com/takayaaa/pengin-site/blob/main/img/fv-bgi_02@2x.jpg?raw=true'},
                { src: 'https://github.com/takayaaa/pengin-site/blob/main/img/fv-bgi_03@2x.jpg?raw=true'},
            ],
            transition: 'fade'
        });
    });

    AOS.init({
        offset: 100,
        duration: 3000,
        easing: 'ease',
        delay: 100,
        once: false,
    });

