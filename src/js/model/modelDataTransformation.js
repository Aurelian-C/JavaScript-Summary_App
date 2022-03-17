import { data } from './modelDataStorage.js';

const sectionsArray = data
  .map(section => section.sections)
  .flat()
  .map(obj => {
    return {
      title: obj.sectionTitle,
      links: obj.sectionLinks,
      text: obj.sectionText,
    };
  });

const articlesArray = data
  .map(section => section.sections)
  .flat()
  .map(obj => obj.sectionArticles)
  .flat()
  .map(item => {
    return {
      title: item.articleTitle,
      links: item.articleLinks,
      text: item.articleText,
    };
  });

export const allTitlesInformation = [...sectionsArray, ...articlesArray].filter(
  item => item.title !== ''
);
