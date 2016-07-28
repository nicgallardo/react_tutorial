var mongoose = require('mongoose');

var testing = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Testing', testing);
