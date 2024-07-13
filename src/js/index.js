import '../scss/style.scss';
import { updateSlider, nextSlide, prevSlide } from './slider-sectionPeople.js';
import './scrollAnimation.js';
import { checkWidthAndToggleClass } from './utils.js';


document.addEventListener('DOMContentLoaded', checkWidthAndToggleClass);
window.addEventListener('resize', checkWidthAndToggleClass);
