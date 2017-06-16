import uiRouter from '@uirouter/angularjs';

import orientationAndContextPageComponent from './orientation-and-context.component';

import orientationAndContextIntroductionPageComponent from './introduction/introduction.component';
import mentalModelPageComponent from './mental-model/mental-model.component';
import layersPageComponent from './layers/layers.component';
import offScreenObjectsPageComponent from './off-screen-objects/off-screen-objects.component';
import guideTasksPageComponent from './guide-tasks/guide-tasks.component';
import contextChangesPageComponent from './context-changes/context-changes.component';

import orientationAndContextPageRoute from './orientation-and-context.route';

let servicesModule
    = angular
        .module('webAnimation.pages.orientationAndContext', [uiRouter])
            .component('orientationAndContextPage', orientationAndContextPageComponent)
            .component('orientationAndContextIntroductionPage', orientationAndContextIntroductionPageComponent)
            .component('mentalModelPage', mentalModelPageComponent)
            .component('layersPage', layersPageComponent)
            .component('offScreenObjectsPage', offScreenObjectsPageComponent)
            .component('guideTasksPage', guideTasksPageComponent)
            .component('contextChangesPage', contextChangesPageComponent)
            .config(orientationAndContextPageRoute);

export default servicesModule;
