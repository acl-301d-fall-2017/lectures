'use strict';

// Add pg module

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up the client connection to the DB
// 'postgres:<pw>//localhost:5432/demos'
// 'postgres://localhost:5432/kilovolt'


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

// Base route for serving up HTML
app.get('/', function(request, response) {
    response.sendFile('./public/index.html');
});

// DB routes for CRUD operations
app.get('/db/person', function(request, response) {

});

app.post('/db/person', function(request, response) {
   
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
