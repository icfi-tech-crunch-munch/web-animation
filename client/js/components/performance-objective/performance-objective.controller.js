class PerformanceObjectivesController {
    constructor (ENUMERATIONS) {
        'ngInject';

        this.IMPACT_OPTIONS = ENUMERATIONS.IMPACT;
    }

    deleteObjective () {
        this.onDeleteObjective({
            index : this.index
        });
    }
}

export default PerformanceObjectivesController;
