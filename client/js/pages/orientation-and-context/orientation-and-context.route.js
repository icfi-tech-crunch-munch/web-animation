function introductionRoute ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('orientation-and-context', {
            url        : '/orientation-and-context',
            component  : 'orientationAndContextPage'
        })

        .state('orientation-and-context.introduction', {
            url        : '/introduction',
            component  : 'orientationAndContextIntroductionPage'
        })

        .state('orientation-and-context.mental-model', {
            url        : '/mental-model',
            component  : 'mentalModelPage'
        })

        .state('orientation-and-context.layers', {
            url        : '/layers',
            component  : 'layersPage'
        })

        .state('orientation-and-context.off-screen-objects', {
            url        : '/off-screen-objects',
            component  : 'offScreenObjectsPage'
        })

        .state('orientation-and-context.guide-tasks', {
            url        : '/guide-tasks',
            component  : 'guideTasksPage'
        })

        .state('orientation-and-context.context-changes', {
            url        : '/context-changes',
            component  : 'contextChangesPage'
        });
}

export default introductionRoute;
