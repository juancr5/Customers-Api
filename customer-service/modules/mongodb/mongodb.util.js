//Modulo que ayuda a conectarse  a la base de datos
(function () {
    'use strict';

    module.exports = {
        init: init
    };

    var mongoose = require('mongoose');

    //traer el Json con los parametros de la conexión
    var mongodbConfig = require('../../config/mongodb/mongodb-config').mongodb;

    function init() {

        var options = {
            promiseLibrary: require('bluebird'),
            useNewUrlParser: true
        };

        var connectionString = prepareConnectionString(mongodbConfig);

        mongoose.connect(connectionString, options)
            .then(function (result) {
                console.log("MongoDB connection successful. DB: " + connectionString);
            })
            .catch(function (error) {
                console.log(error.message);
                console.log("Error Occurred While connecting to DB: : " + connectionString);
            });
    }

    function prepareConnectionString(config) {
        var connectionString = 'mongodb://';

        if (config.user) {
            connectionString += config.user + ':' + config.password + '@';
        }

        connectionString += config.server + '/' + config.database;

        return connectionString;
    }

})();