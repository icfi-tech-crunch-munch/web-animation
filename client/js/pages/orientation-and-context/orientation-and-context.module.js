import uiRouter from '@uirouter/angularjs';

import orientationAndContextPageComponent from './orienation-and-context.component';

import orientationAndContextIntroductionPageComponent from './mental-model/mental-model.component';
import timingPageComponent from './layers/layers.component';
import followThroughAndOverlappingPageComponent from './off-screen-objects/off-screen-objects.component';
import anticipationPageComponent from './context-changes/context-changes.component';
import secondaryActionPageComponent from './secondary-action/secondary-action.component';

import orientationAndContextPageRoute from './twelve-principals.route';

let servicesModule
    = angular
        .module('webAnimation.pages.orientationAndContext', [uiRouter])
            .component('orientationAndContextPage', orientationAndContextPageComponent)
            .component('orientationAndContextIntroductionPage', orientationAndContextIntroductionPageComponent)
            .component('timingPage', timingPageComponent)
            .component('followThroughAndOverlappingPage', followThroughAndOverlappingPageComponent)
            .component('anticipationPage', anticipationPageComponent)
            .config(orientationAndContextPageRoute);

export default servicesModule;
