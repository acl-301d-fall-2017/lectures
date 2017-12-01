const express = require('express');
const app = express();
const PORT = 4567;

app.use( express.static('./public') );

app.get('/home', (request, response) => {
    console.log('made a request to /');
    response.sendFile('/public/index.html', {root: '.'});
});

// this route will send cats4life.html when user
// makes GET request to path /dogs
app.get('/dogs', (request, response) => {
    // console.log('REQUEST LOOKS LIKE:', request);
    response.sendFile('/public/cats4life.html', {root: '.'});
});

app.get('/humans', (request, response) => {
    response.sendFile('/public/humans.json', {root: '.'});
});

app.listen( PORT, () => {
    console.log(`Listening on port ${PORT}`);
});