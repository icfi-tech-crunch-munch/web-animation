function introductionRoute ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('focus-and-attention', {
            url        : '/focus-and-attention',
            component  : 'focusAndAttentionPage'
        })

        .state('focus-and-attention.introduction', {
            url        : '/introduction',
            component  : 'focusAndAttentionIntroductionPage'
        })

        .state('focus-and-attention.direct-attention', {
            url        : '/direct-attention',
            component  : 'directAttentionPage'
        })

        .state('focus-and-attention.eye-flow', {
            url        : '/eye-flow',
            component  : 'eyeFlowPage'
        })

        .state('focus-and-attention.visual-continuity', {
            url        : '/visual-continuity',
            component  : 'visualContinuityPage'
        })

        .state('focus-and-attention.contrast', {
            url        : '/contrast',
            component  : 'contrastPage'
        });
}

export default introductionRoute;
