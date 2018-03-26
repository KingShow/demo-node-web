exports.setRequestUrl = function (app) {
    var routes = require('./routes/index');
    var users = require('./routes/users');
    var login = require('./routes/login');

    app.use('/', routes);
    app.use('/users', users);
    app.use('/login', login);
}