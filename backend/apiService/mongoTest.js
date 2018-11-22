/**
 * Created by timothy on 10/26/18.
 */


var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;



app.get('/listUsers', function (req, res) {


    res.json(["Tony","Lisa","Michael","Ginger","Food"]);

});

MongoClient.connect("mongodb://35.170.187.47:27017/test", function(err, db) {

    console.log("this works");

    console.log(err);

    if(!err) {
        console.log("We are connected");
    }
});

