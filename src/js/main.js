import './slider';
import {modal, openModal, closeModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  // значение переменной, через сколько времени на сайте откроется модальное окно

  const modalTimerId = setTimeout(() => openModal('.popup', modalTimerId), 60000);

  modal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer_close');
  modal('.popup', '.phone_link', '.popup_close');
})