class MinimizeMaximizeView {
  _section;
  _container;
  _btnMax;
  _btnMin;

  addHandlerToggleMenu() {
    window.addEventListener('click', this._toggleMenu);
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
}

export default new MinimizeMaximizeView();
