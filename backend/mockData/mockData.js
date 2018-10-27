const mongoose = require('mongoose');
mongoose.connect('mongodb://35.170.187.47:27017/survey');

const Survey = mongoose.model('survey', {
    age: Number,
    gender: String,
    outOfState: Boolean,
    activity: String,
    firstTime: Boolean,
    part: String,
    location: {
        lat: Number,
        long: Number
    },
    date: mongoose.Schema.Types.Date
});

const d3 = require("d3-random");
const randomAge = d3.randomNormal(20, 2);
const randomGender = d3.randomNormal(2, 2);
const randomActivity = d3.randomNormal(3, 10);

const activities = ['walking', 'leisure', 'sports', 'eat'];
const parts = ['north', 'south', 'east', 'west'];

const upperX = 40.796388;
const upperY = -73.950406;
const lowerX = 40.768123;
const lowerY = -73.981666;
const xDiff = (upperX - lowerX) * 1000000;
const yDiff = (upperY - lowerY) * 1000000;

for (let i = 0; i < 1000; i++) {
    let gender = Math.abs(Math.floor(randomGender())) % 2;
    gender = gender === 0 ? 'male' : 'female';

    const age = Math.abs(Math.floor(randomAge()));
    const outOfState = Math.abs(Math.floor(randomGender())) % 2 === 0;
    const activity = activities[Math.abs(Math.floor(randomActivity())) % 4];
    const firstTime = Math.abs(Math.floor(randomGender())) % 2 === 0;
    const part = parts[Math.abs(Math.floor(randomActivity())) % 4];
    const lat = lowerX + (Math.random() * xDiff / 1000000);
    const long = lowerY + (Math.random() * yDiff / 1000000);
    const randDate = new Date();
    randDate.setFullYear(randDate.getFullYear() - Math.floor(Math.random() * 5));
    randDate.setMonth(randDate.getMonth() - Math.floor(Math.random() * randDate.getMonth()));
    randDate.setDate(randDate.getDate() - Math.floor(Math.random() * randDate.getDate()));

    const survey = new Survey({
        gender,
        age,
        outOfState,
        activity,
        firstTime,
        part,
        location: {
            lat,
            long
        },
        date: randDate
    });

    survey.save().then(() => console.log(i));
}