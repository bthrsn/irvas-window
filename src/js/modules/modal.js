// Алгоритм
// 1. создать функцию для вызова модального окна с двумя аргументами: какая кнопка и какое модальное окно
// обработчик события на кнопку
// функция открытия - добавить дисплей блок к модальному окну
// обработчик события на кнопку закрыть или на подложку
// функция закрытия модального окна - дисплей none
// импорт и экспорт функций 3 раза (3 разных кнопки, 2 окна)

const modals = () => {

  function closeModal(modalWindow) {
    const modal = document.querySelector(modalWindow),
          windows = document.querySelectorAll('[data-modal]');

    windows.forEach(window => window.style.display = 'none');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  };

  function bindModal(modalWindow, modalOpenSelector, modalCloseSelector, modalTimerId, closeClickOverlay = true) {
    const modal = document.querySelector(modalWindow),
          modalOpenBtn = document.querySelectorAll(modalOpenSelector),
          modalCloseBtn = document.querySelector(modalCloseSelector),
          windows = document.querySelectorAll('[data-modal]');
    
    modalOpenBtn.forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
      // Функционал, чтобы закрывать все окна при открытии друого окна
      windows.forEach(window => window.style.display = 'none');
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

    modalCloseBtn.addEventListener('click', () => {
      closeModal(modalWindow);
    });

    // Закрытие окна при клике на подложку
    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        closeModal(modalWindow);
      }
    });
  };

  function showModalByTime(selector, time) {
      setTimeout(() => {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';  
      }, time);
  }

  bindModal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer_close');
  bindModal('.popup', '.phone_link', '.popup_close');
  bindModal('.popup_calc', '.popup_calc_btn','.popup_calc_close');
  bindModal('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close', 0, false);
  bindModal('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close', 0, false);

  showModalByTime('.popup', 60000);

}
export default modals;

