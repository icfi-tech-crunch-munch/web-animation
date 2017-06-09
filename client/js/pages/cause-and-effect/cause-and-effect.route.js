function introductionRoute ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('twelve-principals', {
            url        : '/twelve-principals',
            component  : 'twelvePrincipalsPage'
        })

        .state('twelve-principals.introduction', {
            url        : '/introduction',
            component  : 'twelvePrincipalsIntroductionPage'
        })

        .state('twelve-principals.timing', {
            url        : '/timing',
            component  : 'timingPage'
        })

        .state('twelve-principals.follow-through-and-overalapping', {
            url        : '/follow-through-and-overalapping',
            component  : 'followThroughAndOverlappingPage'
        })

        .state('twelve-principals.anticipation', {
            url        : '/anticipation',
            component  : 'anticipationPage'
        })

        .state('twelve-principals.secondary-action', {
            url        : '/secondary-action',
            component  : 'secondaryActionPage'
        })

        .state('twelve-principals.arcs', {
            url        : '/arcs',
            component  : 'arcsPage'
        })

        .state('twelve-principals.squash-and-stretch', {
            url        : '/squash-and-stretch',
            component  : 'squashAndStretchPage'
        })

        .state('twelve-principals.slow-in-and-slow-out', {
            url        : '/slow-in-and-slow-out',
            component  : 'slowInAndSlowOutPage'
        })

        .state('twelve-principals.exaggeration', {
            url        : '/exaggeration',
            component  : 'exaggerationPage'
        })

        .state('twelve-principals.straight-ahead-and-pose-to-pose', {
            url        : '/straight-ahead-and-pose-to-pose',
            component  : 'straightAheadandPoseToPosePage'
        })

        .state('twelve-principals.solid-drawing', {
            url        : '/solid-drawing',
            component  : 'solidDrawingPage'
        })

        .state('twelve-principals.appeal', {
            url        : '/appeal',
            component  : 'appealPage'
        })

        .state('twelve-principals.staging', {
            url        : '/staging',
            component  : 'stagingPage'
        });
}

export default introductionRoute;
