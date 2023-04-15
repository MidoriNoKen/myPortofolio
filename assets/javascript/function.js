// this is JQuery but there is a react equivalent - https://react-slick.neostack.com/  
$(document).on('ready', function () {
    $('.slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '1em',
        infinite: true,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 3,
    });
});
