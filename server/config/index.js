const PROD  = 'production';
const STAGE = 'stage';
const DEV   = 'development';

module.exports = {
    app    : {
        siteName : 'Hydropower Climate Risk Screening Tool'
    },
    port   : process.env.PORT || 3000,
    ENV    : {
        PROD  : PROD,
        STAGE : STAGE,
        DEV   : DEV
    }
};
