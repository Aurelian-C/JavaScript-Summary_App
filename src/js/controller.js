import { data } from './model/modelDataStorage.js';
import ApplicationView from './views/applicationView.js';
import MinimizeMaximizeView from './views/minimizeMaximizeView.js';

const init = function () {
  ApplicationView.startApplication(data);
  MinimizeMaximizeView.addHandlerToggleMenu();
};
init();
