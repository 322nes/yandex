const carousel = document.getElementById('carusel');
const items = document.querySelectorAll('.people__slider-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentPage = document.getElementById('currentPage');
const totalPagesElement = document.getElementById('totalPages');
const totalItems = items.length;
let currentIndex = 0;

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

document.addEventListener('DOMContentLoaded', () => {
  totalPagesElement.textContent = `/ ${totalItems}`;
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  setInterval(nextSlide, 4000);
});

export { updateSlider, nextSlide, prevSlide };
