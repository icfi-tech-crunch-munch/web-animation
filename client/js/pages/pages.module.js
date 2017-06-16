import introductionPageModule from './introduction/introduction.module';
import twelvePrincipalsPageModule from './twelve-principals/twelve-principals.module';
import guidelinesPageModule from './guidelines/guidelines.module';
import orientationAndContextPageModule from './orientation-and-context/orientation-and-context.module';
import focusAndAttentionPageModule from './focus-and-attention/focus-and-attention.module';
import causeAndEffectPageModule from './cause-and-effect/cause-and-effect.module';
import feedbackPageModule from './feedback/feedback.module';
import demonstrationPageModule from './demonstration/demonstration.module';

import whatsNextPageModule from './whats-next/whats-next.module';

let servicesModule
    = angular
        .module('webAnimation.pages', [
            introductionPageModule.name,
            twelvePrincipalsPageModule.name,
            guidelinesPageModule.name,
            orientationAndContextPageModule.name,
            focusAndAttentionPageModule.name,
            causeAndEffectPageModule.name,
            feedbackPageModule.name,
            demonstrationPageModule.name,
            whatsNextPageModule.name
        ]);

export default servicesModule;
