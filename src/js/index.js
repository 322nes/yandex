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

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carusel');
  const items = document.querySelectorAll('.people__slider-item');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const currentPage = document.getElementById('currentPage');
  const totalPagesElement = document.getElementById('totalPages');
  const totalItems = items.length;
  let currentIndex = 0;

  totalPagesElement.textContent = `/ ${totalItems}`;

  const updateSlider = () => {
    const offset = (currentIndex * 100 / 3);
    carousel.style.transform = `translateX(-${offset}%)`;
    currentPage.textContent = currentIndex + 1;
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateSlider();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateSlider();
  };

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  setInterval(nextSlide, 4000); // Автоматическая смена каждые 4 секунды
});