import $ from 'jquery';

class Modal {
  constructor() {
    this.modal = $('.modal');
    this.openModalBtn = $('.open-modal');
    this.closeModalBtn = $('.modal__close');
    this.events();
  }

  events() {
    // clicking open btn
    this.openModalBtn.click(this.openModal.bind(this));
    
    // clicking x close btn
    this.closeModalBtn.click(this.closeModal.bind(this));

    // hitting any keypress
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if(e.keyCode === 27) {
      this.closeModal();
      console.log('esc pressed!'); 
    }
  }

  openModal() {
    this.modal.addClass('modal--visible');
    return false;
  }

  closeModal() {
    this.modal.removeClass('modal--visible');
  }

}

export default Modal;