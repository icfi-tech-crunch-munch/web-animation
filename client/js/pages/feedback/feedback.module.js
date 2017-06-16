import uiRouter from '@uirouter/angularjs';

import feedbackPageComponent from './feedback.component';

import feedbackIntroductionPageComponent from './introduction/introduction.component';
import errorMessagesPageComponent from './error-messages/error-messages.component';
import confirmTasksPageComponent from './confirm-tasks/confirm-tasks.component';
import progressPageComponent from './progress/progress.component';

import feedbackPageRoute from './feedback.route';

let servicesModule
    = angular
        .module('webAnimation.pages.feedback', [uiRouter])
            .component('feedbackPage', feedbackPageComponent)
            .component('feedbackIntroductionPage', feedbackIntroductionPageComponent)
            .component('errorMessagesPage', errorMessagesPageComponent)
            .component('confirmTasksPage', confirmTasksPageComponent)
            .component('progressPage', progressPageComponent)
            .config(feedbackPageRoute);

export default servicesModule;
