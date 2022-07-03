const express = require('express');
const app = express();
const product = require("./product");
const rateLimit = require('express-rate-limit');


const limiter = rateLimit({
    max : 6,
    windowMs : 10000
})

app.get('/product', limiter, (req, res) => {
    res.send({
        status : "Success",
        product : product
    })
})

app.listen(5000, () => console.log("listening on port 5000"))