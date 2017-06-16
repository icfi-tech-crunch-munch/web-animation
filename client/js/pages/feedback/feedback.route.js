function introductionRoute ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('feedback', {
            url        : '/feedback',
            component  : 'feedbackPage'
        })

        .state('feedback.introduction', {
            url        : '/introduction',
            component  : 'feedbackIntroductionPage'
        })

        .state('feedback.error-messages', {
            url        : '/error-messages',
            component  : 'errorMessagesPage'
        })

        .state('feedback.confirm-tasks', {
            url        : '/confirm-tasks',
            component  : 'confirmTasksPage'
        })

        .state('feedback.progress', {
            url        : '/progress',
            component  : 'progressPage'
        });
}

export default introductionRoute;
