const mongoose = require('mongoose');
mongoose.connect("mongodb://35.170.187.47:27017/survey");

const User = mongoose.model('user', {
    firstName: String,
    lastName: String,
    gender: String,
    age: Number,
    location: {lat: Number, long: Number}
});

const Survey =  mongoose.model('survey', {
    age: Number,
    gender: String,
    outOfState: Boolean,
    activity: String,
    firstTime: Boolean,
    part: String
});