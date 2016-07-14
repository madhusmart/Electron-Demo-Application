const electron = require('electron');
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId;
var mongoose = require('mongoose');
var assert = require('assert');

function serializeToJson(serializer){
    var _string = '{';
    for(var ix in serializer)
    {
        var row = serializer[ix];
        _string += '"' + row.name + '":"' + row.value + '",';
    }
    var end =_string.length - 1;
    _string = _string.substr(0, end);
    _string += '}';
    // console.log('_string: ', _string);
    return JSON.parse(_string);
}

$(document).ready(function () {
  $('#submit').click(function () {
    var str = $( "form" ).serializeArray();
    console.log(str);
    params = serializeToJson(str);
    console.log(params);

    mongoose.connect('mongodb://localhost/Mongo');
    var db = mongoose.connection;
    // var db = mongoose.createConnection('mongodb://localhost/Mongo');
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      //we're connected!
      console.log('connection');

      var User = mongoose.Schema({})
      var Users = mongoose.model('Users', User)
      Users.collection.save(params, function(err,r) {
           assert.equal(null, err);
        })
    })
    alert("Data Inserted Successfully");
    })

})

var url = 'mongodb://localhost/Mongo';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected");
    var collection = db.collection('users');
    // Find some documents
    //Get Data threw Table
    collection.find({}).toArray(function(err, result) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(result);
      var string;
      $.each( result, function( key, value ) {
        string+="<tr>";
        // string+="<td>"+value._id+"</td>";
        string+="<td>"+value.first_name+"</td>";
        string+="<td>"+value.last_name+"</td>";
        string+="<td>"+value.email+"</td>";
        string+="<td>"+value.age+"</td>";
        string+="<td>"+value.date+"</td>";
        string+='<td><a href="#" class="edit_user" data-id='+value._id+' id="update" onclick="edit_user(\'' + value._id + '\')">Edit</a>  <a href="#" class="delete_user" data-id='+value._id+' id="delete" onclick="delete_user(\'' + value._id + '\')">  Delete</a></td>';
        string+="</tr>";
      });
      jQuery("#tabledata tbody").html(string);
       jQuery('#tabledata').DataTable();

       // Update Data Query

         // Get the documents collection

     });

    });


/*********** Edit Function ************/
function edit_user(user)
{
  var o_id = new ObjectId(user);
  // alert(o_id);
  // mongoose.connect('mongodb://localhost/Mongo');
  // var db = mongoose.connection;
  var db = mongoose.createConnection('mongodb://localhost/Mongo');
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    //we're connected!
    console.log('connection')
    var collection = db.collection('users')
    collection.find({ _id: o_id }).toArray(function(err, result) {
            assert.equal(err, null);
          console.log("Edit");
          console.log(result);
          jQuery('#myModal').modal('show');
          var string;
                $.each( result, function( key, value ) {
                  document.getElementById('first_name').value = value.first_name;
                  document.getElementById('last_name').value = value.last_name;
                  document.getElementById('email').value = value.email;
                  document.getElementById('age').value = value.age;
                  document.getElementById('date').value = value.date;
                  document.getElementById('ids').value = value._id;
                })

      })
  })
}


/******** Update *********/
function serializeToJson(serializer){
    var _string = '{';
    for(var ix in serializer)
    {
        var row = serializer[ix];
        _string += '"' + row.name + '":"' + row.value + '",';
    }
    var end =_string.length - 1;
    _string = _string.substr(0, end);
    _string += '}';
    // console.log('_string: ', _string);
    return JSON.parse(_string);
}

jQuery(document).ready(function () {
  jQuery('#save').click(function () {

    var str = jQuery( "form" ).serializeArray();
//    console.log(str);
    params = serializeToJson(str);
   console.log(params);

   var mongoose = require('mongoose');
   var db = mongoose.createConnection('mongodb://localhost/Mongo');
   db.on('error', console.error.bind(console, 'connection error:'));
   db.once('open', function() {
     console.log('connection');
     var collection = db.collection('users');
     collection.update({ '_id': ObjectId(params.id) },
               { $set: {
                 'first_name': params.first_name,
                 'last_name': params.last_name,
                 'age': params.age,
                 'email': params.email,
                 'date': params.date
               }},
              function(err, result) {
              if(err==""){
                console.log("Error can not be update");
              }
              else {
               console.log(result);
              console.log("Data Update" + result);
              }
            });
            collection.find({}).toArray(function(err, result) {
              assert.equal(err, null);
              console.log("Found the following records");
              console.log(result);
              var string;
              $.each( result, function( key, value ) {
                string+="<tr>";
                // string+="<td>"+value._id+"</td>";
                string+="<td>"+value.first_name+"</td>";
                string+="<td>"+value.last_name+"</td>";
                string+="<td>"+value.email+"</td>";
                string+="<td>"+value.age+"</td>";
                string+="<td>"+value.date+"</td>";
                string+='<td><a href="#" class="edit_user" data-id='+value._id+' id="update" onclick="edit_user(\'' + value._id + '\')">Edit</a>  <a href="#" class="delete_user" data-id='+value._id+' id="delete" onclick="delete_user(\'' + value._id + '\')">  Delete</a></td>';
                string+="</tr>";
              });
              jQuery("#tabledata tbody").html(string);
               jQuery('#tabledata').DataTable();

               // Update Data Query

                 // Get the documents collection

             });
           });
  // db.close();
})
    })


/****** Delete Funcion ******/
function delete_user(user) {
  // alert(user);
  var o_id = new ObjectId(user);
  var db = mongoose.createConnection('mongodb://localhost/Mongo');
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    //we're connected!
    console.log('connection')
    var collection = db.collection('users')
    collection.remove({ _id: o_id }, function(err, result) {
            assert.equal(err, null);
          console.log("delete");
          console.log(result);
      })
      collection.find({}).toArray(function(err, result) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(result);
        var string;
        $.each( result, function( key, value ) {
          string+="<tr>";
          // string+="<td>"+value._id+"</td>";
          string+="<td>"+value.first_name+"</td>";
          string+="<td>"+value.last_name+"</td>";
          string+="<td>"+value.email+"</td>";
          string+="<td>"+value.age+"</td>";
          string+="<td>"+value.date+"</td>";
          string+='<td><a href="#" class="edit_user" data-id='+value._id+' id="update" onclick="edit_user(\'' + value._id + '\')">Edit</a>  <a href="#" class="delete_user" data-id='+value._id+' id="delete" onclick="delete_user(\'' + value._id + '\')">  Delete</a></td>';
          string+="</tr>";
        });
        jQuery("#tabledata tbody").html(string);
         jQuery('#tabledata').DataTable();
       });
  })
}
