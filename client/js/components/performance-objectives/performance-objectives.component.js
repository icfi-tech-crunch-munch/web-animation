import template from './performance-objectives.html';
import controller from './performance-objectives.controller';

let performanceObjectivesComponent = {
    bindings : {
        objectiveLabel : '@',
        objectives     : '='
    },
    transclude : true,
    template,
    controller
};

export default performanceObjectivesComponent;
