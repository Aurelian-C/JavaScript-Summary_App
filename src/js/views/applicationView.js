class ApplicationView {
  startApplication(data) {
    this._createHtmlString(data);
    document.body.insertAdjacentHTML(
      'afterbegin',
      this._createHtmlString(data)
    );
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
                      return `
                        <div class="sub_section--info">
                        <div class="sub_section--info-title">
                          <i class="fa-solid fa-angle-right arrow"></i>
                          <h3 class="sub_section--title" data-title="${
                            section.sectionTitle
                          }"><a href="${
                        section.sectionSource
                      }" class="sub_section--anchor">${
                        section.sectionTitle
                      }</a></h3>
                        </div>
                        <ul class="sub_section--articles">
                        ${section.sectionArticles
                          .map(title => {
                            if (!title.articleTitle) return '';
                            return `
                                <li class="sub_section--article" data-title="${title.articleTitle}">
                                <a href="${title.articleSource}" class="sub_section--anchor">${title.articleTitle}</a>
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
