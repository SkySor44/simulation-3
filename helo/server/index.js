const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;
const app = express();
const massive = require('massive');
require('dotenv').config();
const ctrl = require('./controller');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());

app.post('/register', ctrl.register);
app.post('/login', ctrl.login);
// app.get('/api/posts/:userid', ctrl)






massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(port, () => console.log(`I'm listening on port ${port}`));
})
