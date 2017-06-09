import template from './performance-objective.html';
import controller from './performance-objective.controller';

let performanceObjectivesComponent = {
    bindings : {
        index             : '<',
        objective         : '=',
        onDeleteObjective : '&'
    },
    template,
    controller
};

export default performanceObjectivesComponent;
