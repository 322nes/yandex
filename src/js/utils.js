export function checkWidthAndToggleClass() {
  const subline = document.querySelector('.games__heading-subline');
  const sublineUnder = document.querySelector('.games__heading-subline--under');

  if (window.innerWidth <= 768) {
    subline.classList.remove('show');
    sublineUnder.classList.add('show');
  } else {
    subline.classList.add('show');
    sublineUnder.classList.remove('show');
  }
}
