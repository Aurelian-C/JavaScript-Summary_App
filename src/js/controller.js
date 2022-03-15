import { data } from './model/modelDataStorage.js';
import { allTitlesInformation } from './model/modelDataTransformation.js';
import ApplicationView from './views/applicationView.js';
import MinimizeMaximizeView from './views/minimizeMaximizeView.js';
import ModalView from './views/modalView.js';

const controlPrintModal = function (e) {
  const element = allTitlesInformation.find(
    item => item.title === e.target.dataset.title
  );
  const markup = ModalView.generateMarkup(element);
  ModalView.printModalInfo(markup);
};

const init = function () {
  ApplicationView.startApplication(data);
  ModalView.addHandlerPrint(controlPrintModal);
  MinimizeMaximizeView.addHandlerToggleMenu();
};
init();
