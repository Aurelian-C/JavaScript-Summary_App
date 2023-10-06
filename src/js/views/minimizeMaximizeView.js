class MinimizeMaximizeView {
  _section;
  _container;
  _btnMax;
  _btnMin;
  _btnMenu = document.querySelector('.button-menu');
  _isExpanding = false;

  addHandlerToggleMenu() {
    window.addEventListener('click', this._toggleMenu);
  }

  _toggleMenu = e => {
    if (!e.target.classList.contains('card__title')) return;

    this._section = e.target.closest('.card');
    this._container = this._section.querySelector('.card__articles');
    this._container.classList.toggle('hidden');
  };

  _toggleSections = e => {
    document
      .querySelectorAll('.sub_section')
      .forEach(section => section.classList.toggle('hidden'));
  };
}

export default new MinimizeMaximizeView();
