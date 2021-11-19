document.addEventListener('DOMContentLoaded', function() {


  $('.slick').slick({
    arrows: true,
    dots: false,
    prevArrow: $('.slider__prev'),
    nextArrow: $('.slider__next'),
    dotsClass: 'slider__pages',
    responsive: [{
      breakpoint: 1500,
      settings: {
        arrows: false,


      }
    }]
  });
  $('.sec-slide').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    autoplay: false,
    prevArrow: $('.sec-slide__left'),
    nextArrow: $('.sec-slide__right'),
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,


      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,


      }
    }]

  });
  $('.reviews-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    autoplay: true,

    prevArrow: $('.reviews-left'),
    nextArrow: $('.reviews-right'),
    asNavFor: '.reviews-photo'
  });
  $('.reviews-photo').slick({
    asNavFor: '.reviews-slider',
    dots: false,
    slidesToShow: 1,
    autoplay: true,
    prevArrow: $('.reviews-left'),
    nextArrow: $('.reviews-right'),

  });


  const headerBurgerBtn = document.querySelector('.header__burger-btn');
  const navList = document.querySelector('.nav__list');
  headerBurgerBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
    document.body.classList.toggle('active');
  });
  /* Accordion */
  const offerTop = document.querySelectorAll('.offer__top');
  offerTop.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');

    })
  })
  const offerImage = document.querySelector('.last-block__form ');
  window.addEventListener('mousemove', (e) => {
    offerImage.style.transform = `translate(${-e.clientX /50	}px, ${-e.clientY /50}px)`
  })

})