import { data } from './dataStorage.js';

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
                  <h3 class="sub_section--title">${section.sectionTitle}</h3>
                </div>
                <ul class="sub_section--articles">
                ${section.sectionArticles
                  .map(title => {
                    if (!title.title) return '';
                    return `
                        <li class="sub_section--article">
                          ${title.title}
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

window.addEventListener('click', function (e) {
  if (!e.target.classList.contains('nav__btn-min-max')) return;
  const section = e.target.closest('.section');
  const container = section.querySelector('.info-container');
  const btnMax = section.querySelector('.btn-maximize');
  const btnMin = section.querySelector('.btn-minimize');
  container.classList.toggle('hidden');
  [btnMin, btnMax].forEach(btn => {
    btn.classList.toggle('hidden');
  });
});

// document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('sub_section--title')) {
//     e.target
//       .closest('.sub_section--info')
//       .querySelector('.arrow')
//       .classList.toggle('clicked');
//     e.target
//       .closest('.sub_section--info')
//       .querySelector('.sub_section--articles')
//       .classList.toggle('hidden');
//   }
// });
