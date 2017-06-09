import angular from 'angular';

import performanceObjectiveComponent from './performance-objective/performance-objective.component';
import performanceObjectivesComponent from './performance-objectives/performance-objectives.component';

let componentModule
    = angular
        .module('webAnimation.components', [])
            .component('performanceObjective', performanceObjectiveComponent)
            .component('performanceObjectives', performanceObjectivesComponent);

export default componentModule;
