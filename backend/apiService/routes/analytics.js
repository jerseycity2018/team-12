var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const User = mongoose.model('user');
mongoose.connect("mongodb://35.170.187.47:27017/test");

router.get('/gender', function (req, res, next) {
    User.find({}).then(function (users) {
        let males = 0;
        let females = 0;

        users.forEach((user) => {
            console.log(user.gender);
            if (user.gender === 'male') {
                males++;
            } else {
                females++;
            }
        });

        res.send({
            males,
            females
        });
    });
});
router.get('/age', function (req, res, next) {


});

module.exports = router;
