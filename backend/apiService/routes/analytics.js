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
router.get('/part', function (req, res, next) {
    Survey.find({}).then(function (users) {
        let north = 0;
        let south = 0;
        let east = 0;
        let west = 0;

        users.forEach((user) => {
            if (user.part === 'north') {
                north++;
            } else if (user.part === 'south'){
                south++;
            } else if (user.part === 'east'){
                east++;
            } else {
                west++;
            }
        });

        res.send({
            north,
            south,
            east,
            west
        });
    });
});


router.get('/activity', function (req, res, next) {
    Survey.find({}).then(function (users) {
        let walking = 0;
        let sports = 0;
        let eat = 0;
        let leisure = 0;

        users.forEach((user) => {
            if (user.activity === 'walking') {
                walking++;
            } else if (user.activity === 'sports'){
                sports++;
            } else if (user.activity === 'eat'){
                eat++;
            } else {
                leisure++;
            }
        });

        res.send({
            walking,
            sports,
            eat,
            leisure
        });
    });
});

module.exports = router;
