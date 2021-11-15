document.addEventListener('DOMContentLoaded', function() {


  $('.slick').slick({
    arrows: true,
    dots: false,
    prevArrow: $('.slider__prev'),
    nextArrow: $('.slider__next'),
    dotsClass: 'slider__pages'
  });
  $('.sec-slide').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    autoplay: true,
    prevArrow: $('.sec-slide__left'),
    nextArrow: $('.sec-slide__right'),

  });


})