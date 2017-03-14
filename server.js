'use strict';

require('dotenv').config();

const express = require('express');
const aedClient = require('./apiSupport/aedData');

const app = express();

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/', (req, res) => {
  aedClient.getAEDdata()
  .then((aedData) => {
    res.render('index', { aedData: aedData.data, googleKey: process.env.GOOGLE_WEB_API });
  }).catch((err) => {
    console.log('Error: ', err);
    res.render('index');
  });
});

app.listen(app.get('port'), () => {
  console.log('App is running on port', app.get('port'));
});

module.exports = app;
