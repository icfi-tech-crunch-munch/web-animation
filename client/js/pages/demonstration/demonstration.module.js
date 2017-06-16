import uiRouter from '@uirouter/angularjs';

import demonstrationPageComponent from './demonstration.component';

import demonstrationIntroductionPageComponent from './introduction/introduction.component';
import demonstrateFunctionalityPage from './demonstrate-functionality/demonstrate-functionality.component';
import onboardingPageComponent from './onboarding/onboarding.component';
import editorialPageComponent from './editorial/editorial.component';
import purposePageComponent from './purpose/purpose.component';

import demonstrationPageRoute from './demonstration.route';

let servicesModule
    = angular
        .module('webAnimation.pages.demonstration', [uiRouter])
            .component('demonstrationPage', demonstrationPageComponent)
            .component('demonstrationIntroductionPage', demonstrationIntroductionPageComponent)
            .component('demonstrateFunctionalityPage', demonstrateFunctionalityPage)
            .component('onboardingPage', onboardingPageComponent)
            .component('editorialPage', editorialPageComponent)
            .component('purposePage', purposePageComponent)
            .config(demonstrationPageRoute);

export default servicesModule;
