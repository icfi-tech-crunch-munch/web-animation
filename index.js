let bunyan  = require('bunyan');
let log     = bunyan.createLogger({name : 'hyrdopower'});
let server  = require('./server');

server
    .start()
    .then((status) => {
        log.info(status);
    })
    .catch((err) => {
        log.info(err);
    });

