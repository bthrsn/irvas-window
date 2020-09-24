// Алгоритм
// 1. создать функцию для вызова модального окна с двумя аргументами: какая кнопка и какое модальное окно
// обработчик события на кнопку
// функция открытия - добавить дисплей блок к модальному окну
// обработчик события на кнопку закрыть или на подложку
// функция закрытия модального окна - дисплей none
// импорт и экспорт функций 3 раза (3 разных кнопки, 2 окна)

function openModal(modalWindow) {
  const modal = document.querySelector(modalWindow);
  modal.style.display = 'block';
};

function closeModal(modalWindow) {
  const modal = document.querySelector(modalWindow);
  modal.style.display = 'none';
};

function modal(modalWindow, modalOpenSelector,modalCloseSelector) {
  const modal = document.querySelector(modalWindow),
        modalOpenBtn = document.querySelectorAll(modalOpenSelector),
        modalCloseBtn = document.querySelector(modalCloseSelector);
  
  modalOpenBtn.forEach(button => {
    button.addEventListener('click', () => {
    openModal(modalWindow)
  });
});

  modalCloseBtn.addEventListener('click', () => {
    closeModal(modalWindow);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modalWindow);
    }
  })
};

export {modal, closeModal, openModal};

