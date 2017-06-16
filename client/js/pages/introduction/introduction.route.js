function introductionRoute ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $urlRouterProvider
        .otherwise('/introduction/introduction');

    $stateProvider
        .state('introduction', {
            url        : '/introduction',
            component  : 'introductionPage'
        })

        .state('introduction.introduction', {
            url        : '/introduction',
            component  : 'introductionIntroductionPage'
        })

        .state('introduction.brain-benefits', {
            url        : '/brain-benefits',
            component  : 'brainBenefitsPage'
        })

        .state('introduction.communicates', {
            url        : '/communicates',
            component  : 'communicatesPage'
        })

        .state('introduction.connects-contexts', {
            url        : '/connects-contexts',
            component  : 'connectsContextPage'
        })

        .state('introduction.grabs-attention', {
            url        : '/grabs-attention',
            component  : 'grabsAttentionPage'
        });
}

export default introductionRoute;
