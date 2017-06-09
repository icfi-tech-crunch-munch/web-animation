import uiRouter from '@uirouter/angularjs';

import twelvePrincipalsPageComponent from './twelve-principals.component';

import twelvePrincipalsIntroductionPageComponent from './introduction/introduction.component';
import timingPageComponent from './timing/timing.component';
import followThroughAndOverlappingPageComponent from './follow-through-and-overlapping/follow-through-and-overlapping.component';
import anticipationPageComponent from './anticipation/anticipation.component';
import secondaryActionPageComponent from './secondary-action/secondary-action.component';
import arcsPageComponent from './arcs/arcs.component';
import squashAndStretchPageComponent from './squash-and-stretch/squash-and-stretch.component';
import slowInAndSlowOutPageComponent from './slow-in-and-slow-out/slow-in-and-slow-out.component';
import exaggerationPageComponent from './exaggeration/exaggeration.component';
import straightAheadandPoseToPosePageComponent from './straight-ahead-and-pose-to-pose/straight-ahead-and-pose-to-pose.component';
import solidDrawingPageComponent from './solid-drawing/solid-drawing.component';
import appealPageComponent from './appeal/appeal.component';
import stagingPageComponent from './staging/staging.component';

import twelvePrincipalsPageRoute from './twelve-principals.route';

let servicesModule
    = angular
        .module('webAnimation.pages.twelvePrincipals', [uiRouter])
            .component('twelvePrincipalsPage', twelvePrincipalsPageComponent)
            .component('twelvePrincipalsIntroductionPage', twelvePrincipalsIntroductionPageComponent)
            .component('timingPage', timingPageComponent)
            .component('followThroughAndOverlappingPage', followThroughAndOverlappingPageComponent)
            .component('anticipationPage', anticipationPageComponent)
            .component('secondaryActionPage', secondaryActionPageComponent)
            .component('arcsPage', arcsPageComponent)
            .component('squashAndStretchPage', squashAndStretchPageComponent)
            .component('slowInAndSlowOutPage', slowInAndSlowOutPageComponent)
            .component('exaggerationPage', exaggerationPageComponent)
            .component('straightAheadandPoseToPosePage', straightAheadandPoseToPosePageComponent)
            .component('solidDrawingPage', solidDrawingPageComponent)
            .component('appealPage', appealPageComponent)
            .component('stagingPage', stagingPageComponent)
            .config(twelvePrincipalsPageRoute);

export default servicesModule;
