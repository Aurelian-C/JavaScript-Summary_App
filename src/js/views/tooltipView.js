class TooltipView {
  _containerTooltip = document.querySelector('.tooltip');

  start(data) {
    document.body.addEventListener('click', e => {
      const cardArticle = e.target.closest('.card__article');
      const closeButton = e.target.closest('.fa-xmark');

      if (closeButton || !this._containerTooltip.contains(e.target)) {
        this._containerTooltip.classList.remove('show');
      }

      if (!cardArticle) return;

      const elementArticle = e.target.closest('.card__article-title');
      const elementDescriptor = e.target.closest('.card__descriptor-title');

      let obj = null;
      if (elementArticle) {
        const { title } = elementArticle.dataset;
        obj = data.find(el => el.sectionTitle === title);
      }

      if (elementDescriptor) {
        const { title } = elementDescriptor.dataset;
        console.log(title);
        obj = data.find(el => el.sectionTitle === title);
      }

      if (!obj.sectionSummary) return;

      const markup = obj.sectionSummary
        .map(paragraph => `<div class="tooltip_paragraph">${paragraph}</div>`)
        .join('');

      this._containerTooltip.innerHTML =
        '<i class="fa-solid fa-xmark"></i>' +
        `<h2>${obj.sectionTitle}</h2>` +
        markup +
        `<a href=${obj.sectionSource} class="paragraph__article-anchor" target="_blank">Read more about this article!</a>`;

      this._containerTooltip.classList.add('show');
    });
  }
}

export default new TooltipView();
