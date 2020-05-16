const express = require('express');
var path = require ('path');

console.log('start');
var app = express();

app.set('view engine', 'ejs');
app.use('/server', express.static(__dirname));

// Home
app.get('/', function(req, res) {
  res.render('additionAndSuntractionUpTo10', {});
})

// 3 Lesson
app.get('/number10', function(req, res) {
  res.render('HTML/number10', {});
})

app.get('/loadthetruckswith10berries', function(req, res) {
  res.render('HTML/load_the_trucks_with_10_berries', {});
})

app.get('/loadthetrucks', function(req, res) {
  res.render('HTML/load_the_trucks', {});
})

app.get('/congratulation', function(req, res) {
  res.render('HTML/completed_screen', {});
})

app.listen(8080);

var googleTTS = require('google-tts-api');

googleTTS('My name is Jack', 'en', 1)   // speed normal = 1 (default), slow = 0.24
.then(function (url) {
  console.log(url); // https://translate.google.com/translate_tts?...
})
.catch(function (err) {
  console.error(err.stack);
});