const header = document.querySelector('header');
const menuWrapperToggle = document.querySelector('.nav__toggle-wrapper');
const body = document.querySelector('body');
const linkHeader = document.querySelectorAll('.nav a');

function trapFocus(element) {
  const focusableEls = document.querySelectorAll('header a[href]:not([disabled]), .nav__toggle');
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  const KEYCODE_TAB = 9;

  element.addEventListener('keydown', function (e) {
    const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

    if (!isTabPressed) {
      return;
    } else if (document.activeElement === lastFocusableEl) {
      firstFocusableEl.focus();
      e.preventDefault();
    }
  });
}

const headerOutsideClick = (evt) => {
  if ((evt.target === menuWrapperToggle) || (evt.target === header && evt.target.closest !== 'nav-header') || (evt.target === document.querySelector('header .header__container') && evt.target.closest !== 'nav-header')) {
    header.classList.remove('open-menu');
    body.style.position = 'inherit';
  }
};

if (document.querySelector('.nav') && menuWrapperToggle) {
  menuWrapperToggle.addEventListener('click', function () {
    header.classList.toggle('open-menu');

    if (header.classList.contains('open-menu')) {
      body.style.position = 'fixed';

      trapFocus(header);
      header.addEventListener('click', headerOutsideClick);

      header.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
          header.classList.remove('open-menu');
          body.style.position = 'inherit';
        }
      });

      linkHeader.forEach((el) => {
        if (el.getAttribute('href') !== '#') {
          el.addEventListener('click', () => {
            header.classList.remove('open-menu');
            body.style.position = 'inherit';
          });
        }
      });
    } else {
      body.style.position = 'inherit';
    }
  });
}

const menuLink = document.querySelectorAll('.nav-header a');

if (menuLink) {
  menuLink.forEach((el) => {
    if ((el.getAttribute('href') === '#') && (el.getAttribute('class') === 'nav__sub-menu')) {
      el.addEventListener('click', () => {
        el.classList.toggle('is-active');
        el.classList.toggle('nav__sub-menu--open');
      });
    }
  });
}
