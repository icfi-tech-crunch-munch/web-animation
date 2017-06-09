'use strict';

let express           = require('express');;

let config            = require('./config/');
let initWebpack = require('./middleware/webpack.js');

function start () {
    return new Promise((resolve, reject) => {
        let app = express();

        app.locals.pretty = true;
        app.set('views', __dirname + '/views');
        app.set('view engine', 'pug');

        app.set('port', process.env.PORT || config.port);
        app.set('host', process.env.HOST || '0.0.0.0');

        app.get('/', (req, res) => {
            res.render('index-desktop', {
                title    : config.app.siteName
            });
        });

        // init middleware
        initWebpack(app);

        app.listen(
            app.get('port'),
            app.get('host'),
            () => {
                resolve(`server started on host ${app.get('host')} on port ${app.get('port')}`);
            });
    });
}

module.exports.start = start;
