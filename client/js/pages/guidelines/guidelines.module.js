import uiRouter from '@uirouter/angularjs';

import guidelinesPageComponent from './guidelines.component';

import guidelinesIntroductionPageComponent from './introduction/introduction.component';
import haveAPurposePageComponent from './have-a-purpose/have-a-purpose.component';
import dontCreateObstaclesPageComponent from './dont-create-obstacles/dont-create-obstacles.component';
import nonblockingPageComponent from './nonblocking/nonblocking.component';
import guidelinesTimingPageComponent from './timing/timing.component';
import performancePageComponent from './performance/performance.component';

import guidelinesPageRoute from './guidelines.route';

let servicesModule
    = angular
        .module('webAnimation.pages.guidelines', [uiRouter])
            .component('guidelinesPage', guidelinesPageComponent)
            .component('guidelinesIntroductionPage', guidelinesIntroductionPageComponent)
            .component('haveAPurposePage', haveAPurposePageComponent)
            .component('dontCreateObstaclesPage', dontCreateObstaclesPageComponent)
            .component('nonblockingPage', nonblockingPageComponent)
            .component('guidelinesTimingPage', guidelinesTimingPageComponent)
            .component('performancePage', performancePageComponent)
            .config(guidelinesPageRoute);

export default servicesModule;
