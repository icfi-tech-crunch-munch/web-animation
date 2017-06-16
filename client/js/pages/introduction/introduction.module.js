import uiRouter from '@uirouter/angularjs';

import introductionPageComponent from './introduction.component';

import introductionIntroductionPageComponent from './introduction/introduction.component';
import brainBenefitsPageComponent from './brain-benefits/brain-benefits.component';
import communicatesPageComponent from './communicates/communicates.component';
import connectsContextPageComponent from './connects-contexts/connects-contexts.component';
import grabsAttentionPageComponent from './grabs-attention/grabs-attention.component';

import introductionPageRoute from './introduction.route';

let servicesModule
    = angular
        .module('webAnimation.pages.introductionPage', [uiRouter])
            .component('introductionPage', introductionPageComponent)
            .component('introductionIntroductionPage', introductionIntroductionPageComponent)
            .component('brainBenefitsPage', brainBenefitsPageComponent)
            .component('communicatesPage', communicatesPageComponent)
            .component('connectsContextPage', connectsContextPageComponent)
            .component('grabsAttentionPage', grabsAttentionPageComponent)
            .config(introductionPageRoute);

export default servicesModule;
