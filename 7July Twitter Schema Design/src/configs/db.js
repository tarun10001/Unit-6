const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb+srv://tarun:tarun@cluster0.7qeko.mongodb.net/?retryWrites=true&w=majority");
};

module.exports = connect;