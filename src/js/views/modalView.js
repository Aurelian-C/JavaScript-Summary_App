class ModalView {
  _overlay = document.querySelector('.overlay');
  _modal = document.querySelector('.modal');

  addHandlerPrint(handler) {
    window.addEventListener('click', e => {
      if (e.target.className === 'button' || e.target.className === 'overlay') {
        this._overlay.classList.add('hidden');
        this._modal.classList.add('hidden');
      }
      if (!e.target.dataset.title) return;
      handler(e);
    });
  }

  printModalInfo(markup) {
    this._modal.textContent = '';
    this._modal.insertAdjacentHTML('beforeend', markup);

    this._overlay.classList.remove('hidden');
    this._modal.classList.remove('hidden');
  }

  generateMarkup(htmlString) {
    return htmlString;
  }
}

export default new ModalView();
