class ApplicationView {
  _container = document.querySelector('.container');

  render(data) {
    const markup = this._generateMarkup(data);
    this._container.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup(card) {
    const markupString = card
      .map(card => {
        return `
          <div class="card">
            <h2 class="card__title">${card.name}</h2>
            <div class="card__articles hidden">
            ${card.sections.map(this._generateMarkupArticles).join('')}
            </div>
          </div>
    `;
      })
      .join('');

    return markupString;
  }

  _generateMarkupArticles(article) {
    let descriptor = '';

    if (article.sectionArticles) {
      descriptor = article.sectionArticles
        .map(descriptor => {
          if (!descriptor.title) return;

          return `
            <li class="card__descriptor">
              <div class="card__descriptor-title ${
                descriptor.summary?.length && 'info__title--has-content'
              }" data-id="${descriptor.title}">${descriptor.title}</div>
            </li>`;
        })
        .join('');
    }

    return `
      <div class="card__article">
        <div class="card__article-wrapper">
          <div class="card__article-title ${
            article.summary?.length && 'info__title--has-content'
          }" data-id="${article.title}">${article.title}</div>
        </div>
        <ul class="card__descriptors">
          ${descriptor}
        </ul>
      </div>
    `;
  }
}

export default new ApplicationView();
