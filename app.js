var express=require("express");
var bodyParser=require("body-parser");
const path = require("path");

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/form', { useNewUrlParser: true, useUnifiedTopology: true });
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
   console.log("connection succeeded");
})
var app=express()

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/'))); 
app.use(bodyParser.urlencoded({
   extended: true
}));

app.post('/sign_up', function(req,res){
     const name = req.body.name;
     const email = req.body.email;
     const phone = req.body.phone;
     const state = req.body.state;
     const city = req.body.city;
     const program = req.body.program;

   var data = {
      "name": name,
      "email":email,
      "phone":phone,
      "state":state,
      "city":city,
      "program":program
   }
   db.collection('details').insertOne(data,function(err, collection){
   if (err) throw err;
      console.log("Record inserted Successfully");
   });
   return res.redirect('success.html');
})

app.get('/',function(req,res){
   res.set({
      'Access-control-Allow-Origin': '*'
   });
   return res.redirect('contactUs.html');
}).listen(3000)

console.log("server listening at port 3000");