const openModalButton = document.querySelector('.search__button');
const modal = document.querySelector('.modal');
const closeModalButton = modal.querySelector('.modal__close-button');

openModalButton.addEventListener('click', () => {
  modal.classList.remove('modal--hidden');
});

closeModalButton.addEventListener('click', () => {
  modal.classList.add('modal--hidden'); // закрытие
});

modal.addEventListener('click', (evt) => {
  if (evt.target === modal) { // кликнули на затемнённый фон
    modal.classList.add('modal--hidden');
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' && !modal.classList.contains('modal--hidden')) {
    modal.classList.add('modal--hidden');
  }
});
