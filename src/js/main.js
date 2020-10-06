import './slider';
import {modal, openModal, closeModal} from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {

  // Переменная для статуса собранных  данных от пользователя
  let modalState = {};
  changeModalState(modalState);

  // значение переменной, через сколько времени на сайте откроется модальное окно
  const modalTimerId = setTimeout(() => openModal('.popup', modalTimerId), 60000);

  modal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer_close');
  modal('.popup', '.phone_link', '.popup_close');
  modal('.popup_calc', '.popup_calc_btn','.popup_calc_close');
  modal('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close', 0, false);
  modal('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close', 0, false);

  tabs('.glazing_block', '.glazing_content', '.glazing_slider', 'active');
  tabs('.no_click', '.decoration_content > div > div', '.decoration_slider', 'after_click');
  tabs('.balcon_icons_img', '.big_img > img', '.balcon_icons', 'do_image_more', 'inline-block');

  timer ('.timer1', '2020-10-31');

  forms(modalState);
  // Что доработать в форме калькулятора
  // 1. Закрывать окно после заполнения формы
  // 2. Очищать объект после отправки
  // 3. Вбить данные по умолчанию в выборе или ввести валидацию на выбор
})