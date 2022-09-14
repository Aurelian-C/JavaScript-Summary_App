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
    if (!e.target.classList.contains('btn--min-max')) return;

    this._section = e.target.closest('.card');
    this._container = this._section.querySelector('.card__articles');
    this._btnMax = this._section.querySelector('.btn--max');
    this._btnMin = this._section.querySelector('.btn--min');
    this._container.classList.toggle('hidden');

    [this._btnMin, this._btnMax].forEach(btn => {
      btn.classList.toggle('hidden');
    });
  };

  _toggleSections = e => {
    document
      .querySelectorAll('.sub_section')
      .forEach(section => section.classList.toggle('hidden'));
  };
}

export default new MinimizeMaximizeView();
