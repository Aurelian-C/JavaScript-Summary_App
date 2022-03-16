class ModalView {
  _overlay = document.querySelector('.overlay');
  _modal = document.querySelector('.modal');

  addHandlerPrint(handler) {
    window.addEventListener('click', e => {
      if (e.target.className === 'button' || e.target.className === 'overlay') {
        console.log(true);
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

  generateMarkup(element) {
    return `
        <div class="modal__info">
        <h3 class="modal__info--title">${element.title}</h3>
        <div class="modal__info--text">${element.explanations
          .map(text => `<p class="modal__info--text-style">${text}</p>`)
          .join('')}
        </div>
        <div class="modal__info--links"><h4 class="modal__info--links-title">Links</h4>
            <div>
            ${element.links
              .map(
                link =>
                  `<h4 class="modal__info--link-title">
                    <a href="${link.linkSource}" class="modal__info--link" target="_blank">${link.linkTitle}</a>
                    </h4>`
              )
              .join(' ')}
            </div>
        </div>
        <button class="button">X</button>
        </div>
  `;
  }
}

export default new ModalView();
