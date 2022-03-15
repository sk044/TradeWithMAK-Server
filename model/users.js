const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    name : {
        type : String,
        required: true
    },
    username : {
        type : String,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    phoneno : {
        type : Number,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    dob: {
        type : String,
        required: true
    }
})

const userDb = mongoose.model('userDb', schema);

module.exports = userDb;