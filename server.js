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
server.get('/vacancies', function (req, res, next) {
    connection.query('select * from vacancies', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
    next();
});

//rest api to get a single vacancies data
server.get('/vacancies/:id', function (req, res) {
    connection.query('select * from vacancies where idVacancies=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//rest api to create a new record into mysql database
server.post('/vacancies', function (req, res, next) {
    var postData = req.body;
    connection.query('INSERT INTO vacancies SET ?', postData, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
    next();
});

//rest api to update record into mysql database
server.put('/vacancies', function (req, res, next) {
    connection.query('UPDATE `vacancies` SET `Vacancy`=?,`ExperienceLevel`=?,`SalaryEstimate`=?,`JobType`=?,`ReviewCandidates`=? where `idVacancies`=?',
        [req.body.Vacancy, req.body.ExperienceLevel, req.body.SalaryEstimate, req.body.JobType, req.body.ReviewCandidates, req.body.idVacancies,], function (error, results, fields) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
    next();
});

//rest api to delete record from mysql database
server.del('/vacancies/:id', function (req, res, next) {
    connection.query('DELETE FROM `vacancies` WHERE `idVacancies`=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end('Record has been deleted!');
    });
    next();
});

//rest api to get all results
server.get('/candidates', function (req, res, next) {
    connection.query('select * from candidates', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
    next();
});

//rest api to get a single candidate data
server.get('/candidates/:id', function (req, res, next) {
    connection.query('select * from candidates where idcandidates=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
    next();
});

server.listen(8070, function () {
    console.log('%s listening at %s', server.name, server.url);
});

server.get('/\/.*/', restify.plugins.serveStatic({
        directory: __dirname + "/public/",
        default: './HR_APP_Page_Mobile.html'
    })
);

