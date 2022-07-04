class MinimizeMaximizeView {
  _section;
  _container;
  _btnMax;
  _btnMin;
  _btnMenu = document.querySelector('.button-menu');
  _isExpanding = false;

  addHandlerToggleMenu() {
    window.addEventListener('click', this._toggleMenu);
    this._btnMenu.addEventListener('click', this._toggleSections);
  }

  _toggleMenu = e => {
    if (!e.target.classList.contains('nav__btn-min-max')) return;

    this._section = e.target.closest('.section');
    this._container = this._section.querySelector('.info-container');
    this._btnMax = this._section.querySelector('.btn-maximize');
    this._btnMin = this._section.querySelector('.btn-minimize');
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
