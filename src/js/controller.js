import { dataStorage, allSections } from './model/modelDataStorage.js';
import ApplicationView from './views/applicationView.js';
import MinimizeMaximizeView from './views/minimizeMaximizeView.js';
import TooltipView from './views/tooltipView.js';

const init = function () {
  ApplicationView.render(dataStorage);
  MinimizeMaximizeView.addHandlerToggleMenu();
  TooltipView.start(allSections);
};
init();
