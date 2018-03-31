const config = require('./app/config/config'),
    restify = require('restify'),
    mysql = require('mysql'),
fs = require('fs');


// class Database {
//     constructor( config ) {
//         this.connection = mysql.createConnection( config );
//     }
//     query( sql, args ) {
//         return new Promise( ( resolve, reject ) => {
//             this.connection.query( sql, args, ( err, rows ) => {
//                 if ( err )
//                     return reject( err );
//                 resolve( rows );
//             } );
//         } );
//     }
//     close() {
//         return new Promise( ( resolve, reject ) => {
//             this.connection.end( err => {
//                 if ( err )
//                     return reject( err );
//                 resolve();
//             } );
//         } );
//     }
// }


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
    connection.query('SELECT * FROM vacancies', function (error, results, fields) {
        if (error) throw error;
        if (results.length > 0) {
            res.end(JSON.stringify(results));
        }
        else {
            res.json({success: false, message: 'No data!'});
        }

    });
    next();
});

//rest api to get a single vacancies data
server.get('/vacancies/:id', function (req, res) {
    connection.query('SELECT * FROM vacancies WHERE idVacancies=?', [req.params.id], function (error, results, fields) {
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
    connection.query('UPDATE `vacancies` SET `Vacancy`=?,`ExperienceLevel`=?,`SalaryEstimate`=?,`JobType`=? where `idVacancies`=?',
        [req.body.Vacancy, req.body.ExperienceLevel, req.body.SalaryEstimate, req.body.JobType,  req.body.idVacancies,], function (error, results, fields) {
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
    connection.query('SELECT * FROM candidates', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
    next();
});

//rest api to get a single candidate data
server.get('/candidates/:id', function (req, res, next) {
    connection.query('SELECT * FROM candidates WHERE idCandidate=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
    next();
});

server.get('/skill/:id', function (req, res, next) {
    connection.query('SELECT skills.Skill FROM skills JOIN candidates ON candidates.idCandidate = skills.idCandidate AND candidates.idCandidate=?', [req.params.id], function (error, results) {
        if (error) throw error;
        if (results.length > 0) {
            res.end(JSON.stringify(results));
        }
        else {
            res.json({success: false, message: 'No data!'});
        }
    });
    next();
});

server.post('/skill', function (req, res, next) {
    var postData = req.body;
    connection.query('INSERT INTO skills SET ?', postData, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
    next();
});

server.listen(8070, function () {
    console.log('%s listening at %s', server.name, server.url);
});

// server.get('/\/.*/', restify.plugins.serveStatic({
//         directory: __dirname + "/public/",
//         default: './HR_APP_Page_Mobile.html'
//     })
// );

server.get('/', function handler(req, res, next) {
    fs.readFile(__dirname + '/public/HR_APP_Page_Mobile.html',
        function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.write(data);
            res.end();
            next();
        });
});
server.get('/\\/.*/', restify.plugins.serveStatic({
    directory: __dirname + '/public/'
}));