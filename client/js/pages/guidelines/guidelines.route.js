function introductionRoute ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('guidelines', {
            url        : '/guidelines',
            component  : 'guidelinesPage'
        })

        .state('guidelines.introduction', {
            url        : '/introduction',
            component  : 'guidelinesIntroductionPage'
        })

        .state('guidelines.have-a-purpose', {
            url        : '/have-a-purpose',
            component  : 'haveAPurposePage'
        })

        .state('guidelines.dont-create-obstacles', {
            url        : '/dont-create-obstacles',
            component  : 'dontCreateObstaclesPage'
        })

        .state('guidelines.nonblocking', {
            url        : '/nonblocking',
            component  : 'nonblockingPage'
        })

        .state('guidelines.timing', {
            url        : '/timing',
            component  : 'guidelinesTimingPage'
        })

        .state('guidelines.performance', {
            url        : '/performance',
            component  : 'performancePage'
        });
}

export default introductionRoute;
