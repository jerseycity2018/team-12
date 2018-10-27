const mongoose = require('mongoose');
mongoose.connect('mongodb://35.170.187.47:27017/test');

const User = mongoose.model('user', {name: String});

const faker = require('faker');
const d3 = require("d3-random");
const randomAge = d3.randomNormal(20, 10);

const upperX = 40.796388;
const upperY = -73.950406;
const lowerX = 40.768123;
const lowerY = -73.981666;
const xDiff = (upperX - lowerX) * 1000000;
const yDiff = (upperY - lowerY) * 1000000;

for (let i = 0; i < 20000; i++) {
    let gender = Math.floor(Math.random() * 2) === 1;
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName(gender);
    const age = Math.abs(Math.floor(randomAge()));
    gender = gender === 0 ? 'male' : 'female';
    const lat = lowerX + (Math.random() * xDiff / 1000000);
    const long = lowerY + (Math.random() * yDiff / 1000000);

    const user = new User({
        firstName,
        lastName,
        age,
        gender,
        location: {
            lat, long
        }
    });
    user.save().then(() => console.log(i));
}