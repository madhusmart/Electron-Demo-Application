const electron = require('electron');
var mongoose = require('mongoose');
var assert = require('assert');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("connected");
  // console.log(db.Users.find({}));
  var User = mongoose.Schema({
    // first_name: String,
    // last_name: String,
    // email: String,
    // password: String,
    // password_confirmation: String
  })
  var Users = mongoose.model('Users', User)

  var values = Users.collection.find().toArray()
  console.log(values);
})
