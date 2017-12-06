'use strict';

// Add pg module
const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const client = new pg.Client('postgres://postgres:1234@localhost:5432/demos');
client.connect();

// middleware that parses data from the post request and exposes it as request.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

// Base route for serving up HTML
app.get('/', function(request, response) {
    response.sendFile('./public/index.html');
});

// DB routes for CRUD operations
app.get('/db/person', function(request, response) {
    client.query('SELECT * FROM persons;')
        .then(function(data) {
            response.send(data);
        })
        .catch(function(err) {
            console.error(err);
        });
});

app.post('/db/person', function(request, response) {
    console.log(`----------REQ.BODY--------------`);
    console.log( request.body );

    client.query(`
        INSERT INTO persons(name, age, ninja)
        VALUES($1, $2, $3);
    `,
        [
            request.body.name,
            request.body.age,
            request.body.ninja,
        ]
    )
        .then(function(data) {
            response.redirect('/');
        })
        .catch(function(err) {
            console.error(err);
        });
});

createTable();

app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`);
});


////// Create database table helper function //////
function createTable() {
    client.query(`
    CREATE TABLE IF NOT EXISTS persons(
      id SERIAL PRIMARY KEY,
      name VARCHAR(256),
      age INTEGER,
      ninja BOOLEAN
    );`
    )
        .then(function(response) {
            console.log(response);
        });
}
