const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({

    id : {
        type : Number,
        required : true
    },
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    gender : {
        type : String,
        required : false,
        default : "Male"
    },
    age : {
        type : Number,
        required : true
    },
    birth_date : {
        type : Date,
        required : true
    },
    profile_picture : [{
        type : String
    }]
});

const User = mongoose.model("user", userSchema);


module.exports = User;