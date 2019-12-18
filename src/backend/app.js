const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const movielist = require('./movieList');
app.use(express.static(path.join(__dirname, '../../build')));

app.get('/rest/movies/', (req, res) => res.send(movielist()));
app.get('/rest/movies/:id', (req, res) => res.send(movielist()
    .find(movie => movie.id === req.params.id)
));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Kodflix listening on port ${port}!`));
