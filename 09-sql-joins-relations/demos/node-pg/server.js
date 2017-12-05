'use strict';

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const client = new pg.Client('postgres://postgres:1234@localhost:5432/demos');
client.connect();

app.use(express.static('./public'));

// Base route for serving up HTML
app.get('/', function(request, response) {
    response.sendFile('./public/index.html');
});

// routes for fetching data from DB 
app.get('/tasks', function(request, response) {
    client.query('SELECT * FROM tasks;')
        .then(function(data) {
            response.send(data.rows);
        })
        .catch(function(err) {
            console.error(err);
        });
});

app.get('/tasks/chores', function(request, response) {
    client.query('SELECT * FROM tasks WHERE category = "chores";')
        .then(function(data) {
            response.send(data.rows);
        })
        .catch(function(err) {
            console.error(err);
        });

});

app.get('/categories', function (request, response) {
    client.query('SELECT categories FROM tasks;')
        .then(function (data) {
            response.send(data.rows);
        })
        .catch(function (err) {
            console.error(err);
        });
});

app.get('/users', function (request, response) {
    client.query('SELECT person FROM tasks;')
        .then(function (data) {
            response.send(data.rows);
        })
        .catch(function (err) {
            console.error(err);
        });
});

app.get('/users/:username/tasks', function(request, response) {
    console.log(request.params);
    client.query('SELECT * FROM tasks WHERE person = $1;', [request.params.username])
        .then(function(data) {
            response.send(data.rows);
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

function loadFromJSON() {
    // PUT YOUR RESPONSE HERE
    client.query('SELECT COUNT(*) FROM tasks')
        .then(result => {
            if(!parseInt(result.rows[0].count)) {
                fs.readFile('./public/data/tasks.json', (err, fd) => {
                    JSON.parse(fd.toString()).forEach(ele => {
                        client.query(`
                            INSERT INTO
                            tasks(content, person, category)
                            VALUES ($1, $2, $3);
                            `,
                            [ele.content, ele.person, ele.category]
                        );
                    });
                });
            }
        });
}

function createTable() {
    client.query(`
      CREATE TABLE IF NOT EXISTS tasks (
      task_id SERIAL PRIMARY KEY,
      content VARCHAR(255) NOT NULL,
      person VARCHAR(255) NOT NULL,
      category VARCHAR(20));`
    )
        .then(() => {
            loadFromJSON();
        })
        .catch(err => {
            console.error(`createTable ${err}`);
        });
}

