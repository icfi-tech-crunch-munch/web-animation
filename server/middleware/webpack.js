let webpackMiddleware = require('webpack-dev-middleware');
let webpack           = require('webpack');
let webpackConfig     = require('../../webpack.config');

module.exports = function initWebpack (app) {
    app.use(webpackMiddleware(webpack(webpackConfig), {
        publicPath : '/www',

        headers    : {'X-Custom-Webpack-Header' : 'yes'},

        stats      : {
            colors : true
        }
    }));
};
