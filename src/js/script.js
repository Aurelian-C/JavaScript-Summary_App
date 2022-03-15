import { data } from './model/modelDataStorage.js';
import { allTitlesInformation } from './model/modelDataTransformation.js';
console.log(data);
console.log(allTitlesInformation);

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const createHtmlString = function (data) {
  const html = data
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
                  }">${section.sectionTitle}</h3>
                </div>
                <ul class="sub_section--articles">
                ${section.sectionArticles
                  .map(title => {
                    if (!title.articleTitle) return '';
                    return `
                        <li class="sub_section--article" data-title="${title.articleTitle}">
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
};

document.body.insertAdjacentHTML('afterbegin', createHtmlString(data));

const string = `
  <ul class="sub_section--explanations">
    <li class="sub_section--explanation">
      Explanation
    </li>
  </ul>
`;

const toggleMenu = function (event) {
  if (!event.target.classList.contains('nav__btn-min-max')) return;
  const section = event.target.closest('.section');
  const container = section.querySelector('.info-container');
  const btnMax = section.querySelector('.btn-maximize');
  const btnMin = section.querySelector('.btn-minimize');
  container.classList.toggle('hidden');
  [btnMin, btnMax].forEach(btn => {
    btn.classList.toggle('hidden');
  });
};

const printModalInfo = function (event) {
  if (event.target.dataset.title) {
    const element = allTitlesInformation.find(
      item => item.title === event.target.dataset.title
    );
    console.log(element);

    const markup = `
      <div class="modal__info">
        <h3 class="modal__info--title">${element.title}</h3>
        <div class="modal__info--text">
          ${element.explanations.map(text => `<p>${text}. </p>`).join('')}
        </div>
        <h4 class="modal__info--links">${element.links
          .map((textLink, idx) => `<a href=${textLink}>Link ${idx + 1}</a>`)
          .join(' ')}</h4>
        <button class="button">X</button>
      </div>
    `;
    modal.textContent = '';
    modal.insertAdjacentHTML('beforeend', markup);

    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
  }
  if (
    event.target.className === 'button' ||
    event.target.className === 'overlay'
  ) {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
  }
};

window.addEventListener('click', function (e) {
  toggleMenu(e);
  printModalInfo(e);
});

/*
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('sub_section--title')) {
    e.target
      .closest('.sub_section--info')
      .querySelector('.arrow')
      .classList.toggle('clicked');
    e.target
      .closest('.sub_section--info')
      .querySelector('.sub_section--articles')
      .classList.toggle('hidden');
  }
});
*/
