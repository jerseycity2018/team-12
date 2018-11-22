/**
 * Created by timothy on 10/26/18.
 */


var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Survey = mongoose.model('survey');

router.post(function (req, res, next) {

    var data = req.body;
    console.log(data);

    res.send('OK');
    return;

    const survey = new Survey();

    user.save().then(function () {
    });

    res.send('OK');
});

module.exports = router;
