// Алгоритм
// 1. создать функцию для вызова модального окна с двумя аргументами: какая кнопка и какое модальное окно
// обработчик события на кнопку
// функция открытия - добавить дисплей блок к модальному окну
// обработчик события на кнопку закрыть или на подложку
// функция закрытия модального окна - дисплей none
// импорт и экспорт функций 3 раза (3 разных кнопки, 2 окна)

function openModal(modalWindow, modalTimerId) {
  const modal = document.querySelector(modalWindow);
  modal.style.display = 'block';
  // Чтобы страница не скролилась при открытии модального окна
  // Сделаем это через bootstrap класс 
  document.body.classList.add('modal-open');

  // Чтобы окно не открывалось, если пользователь уже открыл его
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
};

function closeModal(modalWindow) {
  const modal = document.querySelector(modalWindow),
        windows = document.querySelectorAll('[data-modal]');

  windows.forEach(window => window.style.display = 'none');
  // modal.style.display = 'none';
  document.body.classList.remove('modal-open');
};

function modal(modalWindow, modalOpenSelector, modalCloseSelector,   modalTimerId, closeClickOverlay = true) {
  const modal = document.querySelector(modalWindow),
        modalOpenBtn = document.querySelectorAll(modalOpenSelector),
        modalCloseBtn = document.querySelector(modalCloseSelector),
        windows = document.querySelectorAll('[data-modal]');
        // sendBtn = document.querySelector(modalSendDataButton);
  
  modalOpenBtn.forEach(button => {
    button.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
      }
    windows.forEach(window => window.style.display = 'none');
    openModal(modalWindow);
  });
});

  modalCloseBtn.addEventListener('click', () => {
    closeModal(modalWindow);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal && closeClickOverlay) {
      closeModal(modalWindow);
    }
  });

  // Закрываем модальное окно после отправки и после исчезновения надписи
  // sendBtn.addEventListener('submit', () => setTimeout(() => closeModal(modalWindow), 5000));
};

export {modal, closeModal, openModal};

