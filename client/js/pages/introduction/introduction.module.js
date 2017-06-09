import uiRouter from '@uirouter/angularjs';

import introductionPageComponent from './introduction.component';
import introductionPageRoute from './introduction.route';

let servicesModule
    = angular
        .module('webAnimation.pages.introductionPage', [uiRouter])
            .component('introductionPage', introductionPageComponent)
            .config(introductionPageRoute);

export default servicesModule;
