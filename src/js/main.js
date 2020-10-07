import './slider';
import modals from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {

  // Переменная для статуса собранных  данных от пользователя
  let modalState = {},
      // Переменная для таймера
      deadline = '2020-10-31'

  changeModalState(modalState);

  modals(); 

  tabs('.glazing_block', '.glazing_content', '.glazing_slider', 'active');
  tabs('.no_click', '.decoration_content > div > div', '.decoration_slider', 'after_click');
  tabs('.balcon_icons_img', '.big_img > img', '.balcon_icons', 'do_image_more', 'inline-block');

  timer('.timer1', deadline);

  images('.works');

  forms(modalState);
  // Что доработать в форме калькулятора
  // 1. Закрывать окно после заполнения формы
  // 2. Очищать объект после отправки
  // 3. Вбить данные по умолчанию в выборе или ввести валидацию на выбор
});