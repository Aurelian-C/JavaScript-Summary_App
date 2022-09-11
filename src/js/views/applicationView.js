class ApplicationView {
  startApplication(data) {
    this._createHtmlString(data);
    document
      .querySelector('.container')
      .insertAdjacentHTML('afterbegin', this._createHtmlString(data));
  }

  _createHtmlString(dataArray) {
    const html = dataArray
      .map(obj => {
        return `
                <div class="section">
                  <i class="fa-solid fa-window-maximize section--icons nav__btn-min-max btn-maximize"></i>
                  <i class="fa-solid fa-window-minimize section--icons nav__btn-min-max btn-minimize hidden"></i>
                  <h2 class="section--title">${obj.title}</h2>
                  <div class="sub_section info-container hidden">
                  ${obj.sections
                    .map(section => {
                      console.log(section.sectionSource);
                      return `
                        <div class="sub_section--info">
                        <div class="sub_section--info-title">
                          <i class="fa-solid fa-angle-right arrow"></i>
                          <a class="sub_section--title" data-title="${
                            section.sectionTitle
                          }" href=${section.sectionSource}>
                          ${section.sectionTitle}
                          </a>
                        </div>
                        <ul class="sub_section--articles">
                        ${section.sectionArticles
                          .map(title => {
                            if (!title.articleTitle) return '';
                            return `
                                <li class="sub_section--article" data-title="${title.articleTitle}" data-source-link="${title.articleSource}">
                                ${title.articleTitle}
                                </li>
                          `;
                          })
                          .join('')}
                          </ul>
                        </div>
                        
                    `;
                    })
                    .join('')}
                    </div>
                </div>
            `;
      })
      .join('');
    return html;
  }
}

export default new ApplicationView();
