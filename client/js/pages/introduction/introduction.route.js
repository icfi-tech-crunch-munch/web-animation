function introductionRoute ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $urlRouterProvider
        .otherwise('/introduction');

    $stateProvider
        .state('introduction', {
            url        : '/introduction',
            component  : 'introductionPage'
        });
}

export default introductionRoute;
