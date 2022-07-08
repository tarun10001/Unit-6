const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        tweets : {
            type : String,
            required : true
        },
        likes : {
            type : Number,
            required : false,
        },
        replies : [{
            type : String,
        }],
        post_picture : [{
            type : String
        }],
        user_id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "user",
            required : true
        }
    }
);


const Post = mongoose.model("post", postSchema)