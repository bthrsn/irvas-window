import './slider';
import {modal, openModal, closeModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  modal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer_close');
  modal('.popup', '.phone_link', '.popup_close');
})