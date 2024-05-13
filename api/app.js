const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const app = express();

const currentDirectory = __dirname;
const buildDirectory = path.join(currentDirectory, 'build');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

// establish database connection
require('./database/db'); 

// import routes
const register = require('./routes/register')
const auth = require('./routes/auth');
const therapist = require('./routes/therapist');
const patient = require('./routes/patient');
const blogpost = require('./routes/blogpost');
const schedule = require('./routes/schedule');
const comment = require('./routes/comment');
server = http.createServer(app); 

app.get('/', (req, res) => {
    res.send('Hello, World tehhee!');
});

// routes
app.use('/api/register', register);
app.use('/api/auth', auth);
app.use('/api/therapist', therapist);
app.use('/api/patient', patient);
app.use('/api/blogpost', blogpost);
app.use('/api/schedule', schedule);
app.use('/api/comment', comment)
app.use(express.static(buildDirectory));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
