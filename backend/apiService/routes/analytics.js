var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Survey = mongoose.model('survey');

router.get('/gender', function (req, res, next) {
    Survey.find({}).then(function (users) {
        let males = 0;
        let females = 0;

        users.forEach((user) => {
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
    Survey.find({}).then(function (users) {
        const ages = [];
        users.forEach((user) => {
           if (ages[user.age] === undefined) {
               ages[user.age] = 0;
           }

           ages[user.age]++;
        });

        const agesArray = [];

        for (let i = 0; i < ages.length; i++) {
            if (ages[i] !== undefined) {
                agesArray.push([i, ages[i]]);
            }
        }

        res.send(agesArray);
    });
});

module.exports = router;
