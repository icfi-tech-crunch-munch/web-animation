import uiRouter from '@uirouter/angularjs';

import whatsNextPageComponent from './whats-next.component';
import whatsNextRoute from './whats-next.route';

let servicesModule
    = angular
        .module('webAnimation.pages.whatsNextPage', [uiRouter])
            .component('whatsNextPage', whatsNextPageComponent)
            .config(whatsNextRoute);

export default servicesModule;
