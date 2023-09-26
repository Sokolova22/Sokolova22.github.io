import Swiper from '../vendor/swiper';


export const heroSwiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  keyboard: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  focusableElements: 'a, button',

  pagination: {
    el: '.hero__swiper-pagination',
    type: 'bullets',
    bulletElement: 'div',
    bulletActiveClass: 'hero__swiper-bullet--active',
    bulletClass: 'hero__swiper-bullet',
    clickableClass: 'hero__swiper-bullet--clickable',
    currentClass: 'hero__swiper-bullet--current',
    clickable: true,
  },
});

export const programsSwiper = new Swiper('.programs__swiper', {
  navigation: {
    nextEl: '.programs__button--next',
    prevEl: '.programs__button--prev',
  },

  scrollbar: {
    el: '.programs__scrollbar',
  },

  slidesPerView: 'auto',

  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    768: {
      spaceBetween: 30,
    },
    1200: {
      spaceBetween: 32,
    },
  },
});

export const newsSwiper = new Swiper('.news__swiper', {

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 2,
      },
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 32,
    },
  },

  navigation: {
    nextEl: '.news__button--next',
    prevEl: '.news__button--prev',
  },

  pagination: {
    el: '.news__pagination',
    renderBullet(index, className) {
      return '<button class="' + className + '" type="button">' + (index + 1) + '</button>';
    },
    clickable: true,
  },
});

export const feedbackSwiper = new Swiper('.feedback__swiper', {
  navigation: {
    nextEl: '.feedback__button--next',
    prevEl: '.feedback__button--prev',
  },

  scrollbar: {
    el: '.feedback__scrollbar',
  },


  loop: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});
