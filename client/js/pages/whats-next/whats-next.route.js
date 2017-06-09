function whatsNextRoute ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('whats-next', {
            url        : '/whats-next',
            component  : 'whatsNextPage'
        });
}

export default whatsNextRoute;
