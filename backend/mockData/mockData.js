const mongoose = require('mongoose');
mongoose.connect('mongodb://35.170.187.47:27017/survey');

const Survey = mongoose.model('survey', {
    age: Number,
    gender: String,
    outOfState: Boolean,
    activity: String,
    firstTime: Boolean,
    part: String
});

const d3 = require("d3-random");
const randomAge = d3.randomNormal(20, 2);
const randomGender = d3.randomNormal(2, 2);
const randomActivity = d3.randomNormal(3, 10);

const activities = ['walking', 'leisure', 'sports', 'eat'];
const parts = ['north', 'south', 'east', 'west'];

for (let i = 0; i < 1000; i++) {
    let gender = Math.abs(Math.floor(randomGender())) % 2;
    gender = gender === 0 ? 'male' : 'female';

    const age = Math.abs(Math.floor(randomAge()));
    const outOfState = Math.abs(Math.floor(randomGender())) % 2 === 0;
    const activity = activities[Math.abs(Math.floor(randomActivity())) % 4];
    const firstTime = Math.abs(Math.floor(randomGender())) % 2 === 0;
    const part = parts[Math.abs(Math.floor(randomActivity())) % 4];

    const survey = new Survey({
        gender,
        age,
        outOfState,
        activity,
        firstTime,
        part
    });

    survey.save().then(() => console.log(i));
}