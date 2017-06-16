import uiRouter from '@uirouter/angularjs';

import focusAndAttentionPageComponent from './focus-and-attention.component';

import focusAndAttentionIntroductionPageComponent from './introduction/introduction.component';
import directAttentionPageComponent from './direct-attention/direct-attention.component';
import eyeFlowPageComponent from './eye-flow/eye-flow.component';
import visualContinuityPageComponent from './visual-continuity/visual-continuity.component';
import contrastPageComponent from './contrast/contrast.component';

import focusAndAttentionRoute from './focus-and-attention.route';

let servicesModule
    = angular
        .module('webAnimation.pages.focusAndAttention', [uiRouter])
            .component('focusAndAttentionPage', focusAndAttentionPageComponent)
            .component('focusAndAttentionIntroductionPage', focusAndAttentionIntroductionPageComponent)
            .component('directAttentionPage', directAttentionPageComponent)
            .component('eyeFlowPage', eyeFlowPageComponent)
            .component('visualContinuityPage', visualContinuityPageComponent)
            .component('contrastPage', contrastPageComponent)
            .config(focusAndAttentionRoute);

export default servicesModule;
