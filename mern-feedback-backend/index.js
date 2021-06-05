const express = require('express');

//represents a new Express application running in app object
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);