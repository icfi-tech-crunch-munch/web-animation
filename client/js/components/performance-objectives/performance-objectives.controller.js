class PerformanceObjectivesController {
    constructor ($log) {
        'ngInject';
        this.$log = $log;
    }

    onDeleteObjective (index) {
        this.objectives.splice(index, 1);
    }

    addObjective () {
        this.objectives.push({
            name   : '',
            impact : {
                recent : '',
                future : ''
            }
        });
    }
}

export default PerformanceObjectivesController;
