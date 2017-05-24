var app = require('./app');
var config = require('./config/config');
var init = require('./init');
var userRoutes = require('./modules/user/routes/userRoute');

var server = app.listen(config.port, function () {
    console.log('Application is running');
});
