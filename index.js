const express = require('express');
const bodyParser = require('body-parser');
const api = require('./src/bookstore_api')

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/', api);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));