import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const config = {
    scrollItemsSelectors: ['.header__inner-item', '.seans__images-item', '.stage__images-airplane'],
    showClass: 'show'
  };

  const scrollItems = document.querySelectorAll(config.scrollItemsSelectors.join(','));

  const scrollAnimation = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    scrollItems.forEach(el => {
      const elementTop = el.getBoundingClientRect().top + scrollTop;
      const elementBottom = elementTop + el.clientHeight;

      if (elementTop < scrollTop + windowHeight && elementBottom > scrollTop) {
        el.classList.add(config.showClass);
      } else {
        el.classList.remove(config.showClass);
      }
    });
  };

  scrollAnimation();

  window.addEventListener('scroll', () => {
    scrollAnimation();
  });
});


// document.addEventListener('DOMContentLoaded', () => {
//   const header = document.querySelector('.header');
//   const scrollItems = document.querySelectorAll('.header__inner-item');

//   const scrollAnimation = () => {
//     const windowHeight = window.innerHeight;
//     const scrollTop = window.scrollY;

//     scrollItems.forEach(el => {
//       const elementTop = el.getBoundingClientRect().top + scrollTop;
//       const elementBottom = elementTop + el.clientHeight;

//       if (elementTop < scrollTop + windowHeight && elementBottom > scrollTop) {
//         el.classList.add('show');
//       } else {
//         el.classList.remove('show');
//       }
//     });
//   };

//   const headerFixed = () => {
//     const hero = document.querySelector('.hero'); // Элемент hero для фиксирования заголовка
//     const scrollTop = window.scrollY;
//     const heroHeight = hero ? hero.offsetHeight : 0;

//     if (scrollTop >= heroHeight / 2) {
//       header.classList.add('fixed');
//       if (hero) {
//         hero.style.marginTop = `${header.offsetHeight}px`;
//       }
//     } else {
//       header.classList.remove('fixed');
//       if (hero) {
//         hero.style.marginTop = '0px';
//       }
//     }
//   };

//   headerFixed();
//   scrollAnimation();

//   window.addEventListener('scroll', () => {
//     headerFixed();
//     scrollAnimation();
//   });
// });
