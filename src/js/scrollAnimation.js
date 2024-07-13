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

document.addEventListener('DOMContentLoaded', () => {
  scrollAnimation();

  window.addEventListener('scroll', () => {
    scrollAnimation();
  });
});

export { scrollAnimation };
