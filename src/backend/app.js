const express = require('express');
const app = express();
const port = 3001;
const movielist = require('./movieList');

app.get('/rest/movies/:id', (req, res) => res.send(movielist()));
app.get('/hello', (req, res) => res.send('hello world'));

app.listen(port, () => console.log(`Kodflix listening on port ${port}!`));