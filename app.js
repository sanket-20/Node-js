// const express = require('express');
// var bodyParser = require('body-parser')
// const app = express();


// app.use(bodyParser.json());

// /*
// app.get('/employee/:id', function (req, res) {
//   console.log(req.params.id);
//   res.send('Hello World get method');
// });
// */



// const { MongoClient } = require('mongodb');

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// const dbName = "employee";
// client.connect();

// const db = client.db(dbName);
// //create a collection in mongo
// const col_2 = db.collection("collection_2");


// app.get('/employees/', function (req, res) {
  
//   res.send('Hello World11111');
// });


// app.post('/employee/', function (req, res) {
  
//   // var x = req.body;
//   // db.collection("collection_2").insertOne(x);
//   var x = {
//     name: req.query.name,
//     depart: req.query.depart,
//     age: req.query.age 
//   }
//   col_2.insertOne(x);
//   // console.log(req.body);
//   res.send(x);
// });

// app.put("/employee/", function(req, res){
//   var c1 = require(__dirname + "/src/get_emp_data.js");
//   c1.main(req, res, db);
// });


// app.get("/employee/", function(req, res){
//   var c1 = require(__dirname + "/src/get_emp_data.js");
//   c1.main(req, res, db);
// });



// app.listen(9998, function(){
//     console.log("Server is established Successfully"); 
// });


const express = require('express');
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/query/', function (req, res) {
  res.send(req.query.name)
});

app.get('/employees/', function (req, res) {
  res.send(req.query.name)
});

 
app.get('/params/:id', function (req, res) {
  res.send(req.params)
});

app.get('/body/', function (req, res) {
  res.send(req.body)
});




const { MongoClient } = require('mongodb');
const res = require('express/lib/response');

// const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbName = "employee";
client.connect();

const db = client.db(dbName);


//routing
app.post('/addingdata/',function(req,res)
{
  db.collection("collection_3").insertOne({"name":"sanket"})
  var data={
    "name":"sushant",
    "std":"third",
    "rollno":"1"
  }

  var data1={
    "name":"shekhar",
    "std":"third",
    "rollno":"1"
  }
  db.collection("collection_3").insertOne(data)
  db.collection("collection_3").insertOne(data1)
  res.send("data added successfuly");
});

app.put('/update/',function(req, res){
  // db.collection("collection_3").updateMany({"name" : "sushant"} , {$set:{"name": "sanket"}});
  db.collection("collection_3").updateOne({"name" : "sushant"} , {$set:{"name": "sanket"}});

  res.send("Data Update Successfully");
});


app.get('/addingdata1/', function(req, res){
  db.collection("collection_4").insertOne(req.body);
  res.send(req.body);
});

app.put('/updatedata/', function(req, res){
  var x = req.body;
  var y = req.body._id;
  db.collection("collection_4").updateOne({"_id": y}, {$set:x});
  res.send(req.body);
});

app.get('/dataaggregate/', function (req, res) {
  var file = require(__dirname +"/src/guide/get_guide_data");
  file.main(req, res, db);
})

app.get('/dataaggregate1/', function (req, res) {
  var file = require(__dirname +"/src/guide/get_guide_data1");
  file.main(req, res, db);
})

//event Emitter
app.get('/get_event_emitters/', function (req, res) {
  var file = require(__dirname +"/src/guide/get_event_emitters");
  file.main(req, res, db);
})



//file system 
//write file (post method)
app.post('/write_file/', function (req, res) {
  var file = require(__dirname +"/src/file_system/write_file");
  file.main(req, res, db);
});

//write file (post method)
app.post('/write_file_dynamically/', function (req, res) {
  var file = require(__dirname +"/src/file_system/write_file_dynamically");
  file.main(req, res, db);
});

//read file (get method)
app.get('/read_file/', function (req, res) {
  var file = require(__dirname +"/src/file_system/read_file");
  file.main(req, res, db);
});


//append file (put method)
app.put('/append_file/', function (req, res) {
  var file = require(__dirname +"/src/file_system/append_file");
  file.main(req, res, db);
});


//async fileSystem
//write file (post method)
app.post('/write_file_async/', function (req, res) {
  var file = require(__dirname +"/src/file_system/write_file_async");
  file.main(req, res, db);
});

//read file (get method)
app.get('/read_file_async/', function (req, res) {
  var file = require(__dirname +"/src/file_system/read_file_async");
  file.main(req, res, db);
});

//append file (put method)
app.put('/append_file_async/', function (req, res) {
  var file = require(__dirname +"/src/file_system/append_file_async");
  file.main(req, res, db);
});


//Stream

//read stream
app.get('/read_file_stream/', function (req, res) {
  var file = require(__dirname +"/src/file_system/read_file_stream");
  file.main(req, res, db);
});

//write stream
app.post('/write_file_stream/', function (req, res) {
  var file = require(__dirname +"/src/file_system/write_file_stream");
  file.main(req, res, db);
});


//email

//send_mail
app.post("/api/v1/email/send_email/", function (req, res) {
  // res.send("hijoidji")
  var file = require(__dirname +"/src/email/send_mail");
  file.main(req, res,db);
});


//server
app.listen(9998, function(){
  console.log("SErver is running...");
});






