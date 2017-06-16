function causeAndEffectRoute ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('cause-and-effect', {
            url        : '/cause-and-effect',
            component  : 'causeAndEffectPage'
        })

        .state('cause-and-effect.introduction', {
            url        : '/introduction',
            component  : 'causeAndEffectIntroductionPage'
        })

        .state('cause-and-effect.affordances', {
            url        : '/affordances',
            component  : 'affordancesPage'
        })

        .state('cause-and-effect.preview', {
            url        : '/preview',
            component  : 'previewPage'
        })

        .state('cause-and-effect.handle-errors', {
            url        : '/handle-errors',
            component  : 'handleErrorsPage'
        })

        .state('cause-and-effect.confirm-action', {
            url        : '/confirm-action',
            component  : 'confirmActionPage'
        });
}

export default causeAndEffectRoute;
