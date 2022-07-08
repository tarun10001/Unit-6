const app = require("./index");

const connect = require('./configs/db');

app.listen(3800, async () => {
    try {
        await connect();
        console.log("Listening on port 3800");
    }
    catch (error) {
        console.log({message : error.message});
    }
})