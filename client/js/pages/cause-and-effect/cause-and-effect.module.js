import uiRouter from '@uirouter/angularjs';

import causeAndEffectPageComponent from './cause-and-effect.component';

import causeAndEffectIntroductionPageComponent from './introduction/introduction.component';
import affordancesPageComponent from './affordances/affordances.component';
import previewPageComponent from './preview/preview.component';
import handleErrorsPageComponent from './handle-errors/handle-errors.component';
import confirmActionPageComponent from './confirm-action/confirm-action.component';

import causeAndEffectPageRoute from './cause-and-effect.route';

let servicesModule
    = angular
        .module('webAnimation.pages.causeAndEffect', [uiRouter])
            .component('causeAndEffectPage', causeAndEffectPageComponent)
            .component('causeAndEffectIntroductionPage', causeAndEffectIntroductionPageComponent)
            .component('affordancesPage', affordancesPageComponent)
            .component('previewPage', previewPageComponent)
            .component('handleErrorsPage', handleErrorsPageComponent)
            .component('confirmActionPage', confirmActionPageComponent)
            .config(causeAndEffectPageRoute);

export default servicesModule;
