import {newsSwiper} from '../modules/init-swiper';

const newsFilter = document.querySelector('.news__filter');
const newsFilterBtn = document.querySelectorAll('.news__filter-button');

export const initNewsSwiper = () => {
  if (document.querySelector('.news__swiper')) {
    document.querySelectorAll('.news__slide')[0].classList.add('news__slide--first');
    if (document.documentElement.clientWidth < 1200) {
      document.querySelectorAll('.news__slide')[0].classList.remove('news__slide--first');
    }
    return newsSwiper;
  } return '';
};

if (newsFilter) {
  newsFilter.addEventListener('click', (evt) => {
    newsFilterBtn.forEach((el) => {
      if (el.classList.contains('is-active')) {
        el.classList.remove('is-active');
      }
    });
    evt.target.classList.add('is-active');
  });
}
