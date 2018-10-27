var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Survey = mongoose.model('survey');
mongoose.connect("mongodb://35.170.187.47:27017/survey");
router.route('/').post(function(req,res,next) {
    var gender = req.body.gender;
    var outOfState = req.body.outOfState;
    var activity = req.body.activity;
    var firstTime = req.body.firstTime;
    var part = req.body.part;
    const survey = new Survey({
        gender,
        outOfState,
        activity,
        firstTime,
        part
    });
    console.log(survey.gender);
    survey.save().then(function () {});
    res.send();
});
module.exports = router;