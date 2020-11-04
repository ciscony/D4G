var express = require('express');
var mysql = require('mysql');
var app = express();



var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "D4G"
});

connection.connect(function(error) {
    if (!!error)  {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});
/*
app.get('/', function(req, resp) {
    connection.query("SELECT CDR.CP, CDR.NomCom, InfoCom.Population, InfoCom.ScoreGlobalCom, InfoCom.AccesInterfaceNum, InfoCom.AccesInformation, InfoCom.CompAdministrative, InfoCom.CompNumerique, InfoCom.GlobalAcces, InfoCom.GlobalCompetences, CDR.NomDep, CDR.NomRegion, InfoCom.ScoreGlobalRegion FROM InfoCom, CDR, InfoCom_CDR WHERE InfoCom.CodeIris = InfoCom_CDR.CodeIris AND InfoCom_CDR.INSEE = CDR.INSEE AND CDR.CP = 49750;", function(error, rows, fields) {
        if (!!error)  {
            console.log('Error in the query');
        } else {
            console.log('Successfull query');
            resp.send(rows);
        }
    });
});
*/

app.get('/index.html', function(req, resp){
    resp.sendFile('/index.html')
});

app.listen(8080);
