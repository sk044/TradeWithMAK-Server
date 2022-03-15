const express = require('express')
var cors = require('cors')
const morgan = require('morgan');
var bodyParser = require('body-parser');

const connectDB = require('./database/connection');

const app = express();

//Resolving CORS browser restriction issue for the communication between frontend and backend
app.use(cors());

// body parser for post calls
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Origin, X-Requested-With, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE");
    res.setHeader("preflightContinue", false);
    res.setHeader("optionsSuccessStatus", 204);
    res.setHeader("optionsSuccessStatus", 204);
    next();
  });

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// load routers
app.use('/', require('./routes/routes'))

app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });