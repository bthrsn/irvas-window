import './slider';
import {modal, openModal, closeModal} from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
  // значение переменной, через сколько времени на сайте откроется модальное окно
  const modalTimerId = setTimeout(() => openModal('.popup', modalTimerId), 60000);

  modal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer_close');
  modal('.popup', '.phone_link', '.popup_close');

  tabs('.glazing_block', '.glazing_content', '.glazing_slider', 'active');
  tabs('.no_click', '.decoration_content > div > div', '.decoration_slider', 'after_click');
  
  forms();
})