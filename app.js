const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Express body parser
app.use(express.urlencoded({ extended: true }));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');



const router = require('./routes/index');

const PORT = process.env.PORT || 3000;

// Routes
app.use('/', router);
app.use('/promotions', require('./routes/promotion'));



app.listen(PORT, console.log(`Server started on the PORT ${PORT}`));
