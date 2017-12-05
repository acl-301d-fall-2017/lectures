'use strict';

const pg = require('pg'); 
// pg is the npm module that allows us to send a query from our server to our database
const fs = require('fs'); 
// fs is the npm module that allows us to interface (do stuff) with the server's files
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// process.env.PORT will be used during production

const client = new pg.Client('postgres://postgres:1234@localhost:5432/demos');
client.connect();

app.use(express.static('./public'));

// Base route for serving up HTML
app.get('/', function(request, response) {
    response.sendFile('./public/index.html');
});

// routes for fetching data from DB 
app.get('/tasks', function(request, response) {
    /*
        SELECT content, categories.name AS category, users.name AS person 
        FROM tasks, users, categories 
        WHERE tasks.user_id = users.user_id AND tasks.category_id = categories.category_id;
    */
    client.query(`
        SELECT content, users.name AS person, categories.name AS category 
        FROM tasks 
        INNER JOIN users ON tasks.user_id = users.user_id 
        INNER JOIN categories ON tasks.category_id = categories.category_id;
    `)
        .then(function(data) {
            response.send(data.rows);
        })
        .catch(function(err) {
            console.error(err);
        });
});

app.get('/tasks/chores', function(request, response) {
    client.query(`SELECT * FROM tasks WHERE category ='chores';`)
        .then(function(data) {
            response.send(data.rows);
        })
        .catch(function(err) {
            console.error(err);
        });

});

app.get('/tasks/works', function(request, response) {
    client.query(`SELECT * FROM tasks WHERE category ='work';`)
        .then(function(data) {
            response.send(data.rows);
        })
        .catch(function(err) {
            console.error(err);
        });

});

app.get('/tasks/:category', function(request, response) {
    console.log(request.params);
    // client.query(`SELECT * FROM tasks WHERE category ='${request.params.category}';`)
    client.query(`SELECT * FROM tasks WHERE category =$1;`, [request.params.category])
        .then(function(data) {
            response.send(data.rows);
        })
        .catch(function(err) {
            console.error(`request /tasks/:category ---- ${err}`);
        });

});

app.get('/categories', function (request, response) {
    client.query('SELECT category FROM tasks;')
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

// :username is a placeholder for whatever is input in the url
// ie /users/mickey/tasks is stored in request.params like this: { username: 'mickey'}
app.get('/users/:username/tasks', function(request, response) {
    console.log(request.params.username);
    // $1 is the placeholder for the first item of the second parameter's array
    client.query('SELECT * FROM tasks WHERE person = $1;', [request.params.username])
        .then(function(data) {
            response.send(data.rows);
        })
        .catch(function(err) {
            console.error(err);
        });
});

// createTable();
loadDB();

app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`);
});


function loadUsers() {
    fs.readFile('./public/data/tasks.json', function(err, fd) {
        JSON.parse(fd.toString()).forEach(function(ele) {
            client.query(
                'INSERT INTO users(name) VALUES($1) ON CONFLICT DO NOTHING',
                [ele.person]
            );
        });
    });
}

function loadCategories() {
    fs.readFile('./public/data/tasks.json', function(err, fd) {
        JSON.parse(fd.toString()).forEach(function(ele) {
            client.query(
                'INSERT INTO categories(name) VALUES($1) ON CONFLICT DO NOTHING',
                [ele.category]
            );
        });
    });
}

function loadTasks() {
    client.query('SELECT COUNT(*) FROM articles')
        .then(result => {
            if(!parseInt(result.rows[0].count)) {
                fs.readFile('./public/data/tasks.json', function(err, fd) {
                    JSON.parse(fd.toString()).forEach(function(ele) {
                        // would query to add each task
                    });
                });
            }
        });
}

function loadDB() {
    client.query(`
        CREATE TABLE IF NOT EXISTS
        users (
        user_id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL
        );`
    )
        .then(data => {
            loadUsers(data);
        })
        .catch(err => {
            console.error(err);
        });

    client.query(`
        CREATE TABLE IF NOT EXISTS
        categories (
        category_id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL
        );`
    )
        .then(data => {
            loadCategories(data);
        })
        .catch(err => {
            console.error(err);
        });

    client.query(`
        CREATE TABLE IF NOT EXISTS tasks (
        task_id SERIAL PRIMARY KEY,
        content VARCHAR(255) NOT NULL,
        user_id INTEGER REFERENCES users(user_id) NOT NULL,
        category_id INTEGER REFERENCES categories(category_id)
    );`
    )
        .then(data => {
            // loadTasks(data);
            //  load the tasks manually!
        })
        .catch(err => {
            console.error(err);
        });}







////// Create database table helper function //////

// function loadFromJSON() {
//     // PUT YOUR RESPONSE HERE
//     client.query('SELECT COUNT(*) FROM tasks')
//         .then(result => {
//             if(!parseInt(result.rows[0].count)) {
//                 fs.readFile('./public/data/tasks.json', (err, fd) => {
//                     JSON.parse(fd.toString()).forEach(ele => {
//                         client.query(`
//                             INSERT INTO
//                             tasks(content, person, category)
//                             VALUES ($1, $2, $3);
//                             `,
//                             [ele.content, ele.person, ele.category]
//                         );
//                     });
//                 });
//             }
//         });
// }

// function createTable() {
//     client.query(`
//       CREATE TABLE IF NOT EXISTS tasks (
//       task_id SERIAL PRIMARY KEY,
//       content VARCHAR(255) NOT NULL,
//       person VARCHAR(255) NOT NULL,
//       category VARCHAR(20));`
//     )
//         .then(() => {
//             loadFromJSON();
//         })
//         .catch(err => {
//             console.error(`createTable ${err}`);
//         });
// }

