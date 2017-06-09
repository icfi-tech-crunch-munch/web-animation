// Angular Library
import angular from 'angular';
import angularSanitize from 'angular-sanitize';
import uiRouter from '@uirouter/angularjs';

// Style Libraries
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';

// Modules
import ComponentsModule from './components/components.module';
import PagesModule from './pages/pages.module';

// Config
import DOCUMENT_NAMES from './web-animation.config';

// Enumerations
import ENUMERATIONS from './enumerations/enumerations';

// Root Component
import webAnimationComponent from './web-animation.component';

const APP_NAME  = 'webAnimation';

angular
    .module(APP_NAME, [
        ComponentsModule.name,
        PagesModule.name,
        uiRouter,
        angularSanitize
    ])
    .constant('DOCUMENT_NAMES', DOCUMENT_NAMES)
    .constant('ENUMERATIONS', ENUMERATIONS)
    .component(APP_NAME, webAnimationComponent);

angular
    .element(document)
    .ready(() => {
        angular.bootstrap(document, [APP_NAME]);
    });
