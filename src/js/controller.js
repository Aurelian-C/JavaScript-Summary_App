import { data } from './model/modelDataStorage.js';
import { allTitlesInformation } from './model/modelDataTransformation.js';
import { AJAX } from './model/modelFetchHTML.js';
import ApplicationView from './views/applicationView.js';
import MinimizeMaximizeView from './views/minimizeMaximizeView.js';
import ModalView from './views/modalView.js';

const controlPrintModal = async function (e) {
  try {
    const element = allTitlesInformation.find(
      item => item.title === e.target.dataset.title
    );
    const htmlString = await AJAX(element.source);
    const markup = ModalView.generateMarkup(htmlString);
    ModalView.printModalInfo(markup);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  ApplicationView.startApplication(data);
  ModalView.addHandlerPrint(controlPrintModal);
  MinimizeMaximizeView.addHandlerToggleMenu();
};
init();
