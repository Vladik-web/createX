document.addEventListener('DOMContentLoaded', function() {

  $('.slick').slick({
    arrows: true,
    dots: false,
    prevArrow: $('.slider__prev'),
    nextArrow: $('.slider__next'),
    dotsClass: 'slider__pages'
  });

})