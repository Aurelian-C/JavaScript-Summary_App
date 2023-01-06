import { dataStorage } from './model/modelDataStorage.js';
import ApplicationView from './views/applicationView.js';
import MinimizeMaximizeView from './views/minimizeMaximizeView.js';

const init = function () {
  ApplicationView.startApplication(dataStorage);
  MinimizeMaximizeView.addHandlerToggleMenu();
};
init();
