const mongoose = require("mongoose");

const repliesSchema = new mongoose.Schema({
    replies : [{
        type : String
    }],
    post_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "post",
        required : true
    }
});

const Replies = mongoose.model("reply", repliesSchema);


module.exports = Replies;