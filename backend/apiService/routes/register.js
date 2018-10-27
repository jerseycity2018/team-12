/**
 * Created by timothy on 10/26/18.
 */


var express = require('express');
var router = express.Router();
var request = require('request');
var MongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose');
const User = mongoose.model('user', {firstName: String, lastName: String, gender: String, age:Number, location: {lat: Number, long:Number}});
mongoose.connect("mongodb://35.170.187.47:27017/register");

router.route('/').post(function(req,res,next) {


    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var gender = req.body.gender;
    var age = req.body.age;
    var location = req.body.location;
    var lat = location.lat;
    var long = location.long;


    //
    //
    // console.log(Firstname);
    // console.log(Lastname);
    // console.log(Gender);
    // console.log(Age);
    // console.log(Location);
    console.log(req.body);

    MongoClient.connect("mongodb://35.170.187.47:27017/register", function(err, db) {



        if(!err) {
            console.log("We are connected");
        }

        var data = req.body;

        const user = new User({
            firstName,
            lastName,
            gender,
            age,
            location: { lat, long}
        });

        console.log(user.firstName);

        user.save().then(function(){});
    });

    res.send();

    }
);

module.exports = router;
