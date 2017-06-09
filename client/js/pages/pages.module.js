import introductionPageModule from './introduction/introduction.module';
import twelvePrincipalsPageModule from './twelve-principals/twelve-principals.module';
import guidelinesPageModule from './guidelines/guidelines.module';

import whatsNextPageModule from './whats-next/whats-next.module';

let servicesModule
    = angular
        .module('webAnimation.pages', [
            introductionPageModule.name,
            twelvePrincipalsPageModule.name,
            guidelinesPageModule.name,
            whatsNextPageModule.name
        ]);

export default servicesModule;
