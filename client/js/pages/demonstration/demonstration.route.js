function introductionRoute ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('demonstration', {
            url        : '/demonstration',
            component  : 'demonstrationPage'
        })

        .state('demonstration.introduction', {
            url        : '/introduction',
            component  : 'demonstrationIntroductionPage'
        })

        .state('demonstration.demonstrate-functionality', {
            url        : '/demonstrate-functionality',
            component  : 'demonstrateFunctionalityPage'
        })

        .state('demonstration.onboarding', {
            url        : '/onboarding',
            component  : 'onboardingPage'
        })

        .state('demonstration.editorial', {
            url        : '/editorial',
            component  : 'editorialPage'
        })

        .state('demonstration.purpose', {
            url        : '/purpose',
            component  : 'purposePage'
        });
}

export default introductionRoute;
