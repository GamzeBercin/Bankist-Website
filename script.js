'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
////////////////

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie"> Got it!</button>`;

header.append(message);
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
document.documentElement.style.setProperty('--color-primary', 'orangered');

// const logo = document.querySelector('.nav__logo');
// logo.alt = 'Beautiful minimalist logo';
// console.log(logo.alt);
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('company'));
// console.log(logo.dataset.versionClassNumber);
// console.log(logo.dataset.versionNumber);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
