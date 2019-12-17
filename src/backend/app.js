const express = require('express');
const app = express();
const getMovies = require('./movies');
const port = 3001;

app.get('/rest/movies', (req, res)=> res.send(getMovies));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))