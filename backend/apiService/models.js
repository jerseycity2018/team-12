const mongoose = require('mongoose');
const User = mongoose.model('user', {
    firstName: String,
    lastName: String,
    gender: String,
    age: Number,
    location: {lat: Number, long: Number}
});
