const config = require('./app/config/config'),
    restify = require('restify'),
    mysql = require('mysql');

var connection = config.db.get;
/**
 * Initialize Server
 */
const server = restify.createServer({
    name: config.name,
    version: config.version,
    url: config.hostname
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


server.get('/main', function (req, res, next) {
    res.send('hw');
    next();
});

//rest api to get all results
server.get('/vacancies', function (req, res) {
    connection.query('select * from vacancies', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//rest api to get a single vacancies data
server.get('/vacancies/:id', function (req, res) {
    connection.query('select * from vacancies where id=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//rest api to create a new record into mysql database
server.post('/vacancies', function (req, res) {
    var postData = req.body;
    connection.query('INSERT INTO vacancies SET ?', postData, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//rest api to update record into mysql database
server.put('/vacancies', function (req, res) {
    connection.query('UPDATE `vacancies` SET `vacancies_name`=?,`pay`=?,`skill`=?,`candidate`=? where `Id`=?',
        [req.body.vacancies_name, req.body.pay, req.body.skill, req.body.candidate, req.body.id], function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
});

//rest api to delete record from mysql database
server.del('/vacancies/:id', function (req, res) {
    connection.query('DELETE FROM `vacancies` WHERE `id`=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end('Record has been deleted!');
    });
});

server.listen(8070, function () {
    console.log('%s listening at %s', server.name, server.url);
});

server.get('/\/.*/', restify.plugins.serveStatic({
        directory: __dirname + "/public/",
        default: './HR_APP_Page_Mobile.html'

    })
);

