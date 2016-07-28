// server.js
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './modules/routes'

var express = require('express')
var router = require("express").Router();
var path = require('path')
var compression = require('compression')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var Testing = require('./models/test')
var config = require('./config');

mongoose.connect(config.database);
// mongoose.connect('mongodb://localhost/myapp');
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression())

app.use('/poster/add/:id', (req, res)=>{
  var testThing = new Testing({
    name: req.params.id,
  });
  testThing.save(function(err) {
    if (err) console.error(err);;
    res.redirect('/repos');
  });
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      console.log("req :\n", req.url)
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})

