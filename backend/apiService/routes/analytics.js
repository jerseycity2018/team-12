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



router.get('/dateNYC', function (req, res, next) {
    Survey.find({}).then(function (users) {


        let January = 0;
        let JanuaryFirst = 0;

        let February = 0;
        let FebruaryFirst = 0;

        let March = 0;
        let MarchFirst = 0;

        let April = 0;
        let AprilFirst = 0;

        let May = 0;
        let MayFirst = 0;

        let June = 0;
        let JuneFirst = 0;

        let August = 0;
        let AugustFirst = 0;

        let September = 0;
        let SeptemberFirst = 0;

        let November = 0;
        let NovemberFirst = 0;

        let December = 0;
        let DecemberFirst = 0;


        const arrNYC= [];
        const arrNot = [];


        users.forEach((user) => {

            var tempBoolean = user.outOfState;
            var tempNum = user.date.getMonth();
            console.log(tempNum);
            console.log(user.date);

            if (tempBoolean){


                if (arrNYC[tempNum] === undefined) {
                    arrNYC[tempNum] = 0;
                }
                arrNYC[tempNum]++;

            } else {

                if (arrNot[tempNum] === undefined) {
                    arrNot[tempNum] = 0;
                }
                arrNot[tempNum]++;

            }


    });
        res.send({
            arrNYC,
            arrNot
        });
});
});

router.get('/heat', function (req, res, next) {
    Survey.find({}).then(function (users) {
        const heatArray = [];

        users.forEach((user) => {
            heatArray.push([user.location.lat, user.location.long, 0.8])
        });

        res.send(heatArray);
    });
});

module.exports = router;
