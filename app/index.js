// importing modules
const express = require('express');
const redis = require("redis");
const dotenv = require('dotenv');
dotenv.config();

// creating base variables
const app = express();
const port = process.env.HTTP_PORT || 3000;
const redis_url = process.env.REDIS_URL || 'redis://redis:6379';


// open redis connection
let redisClient;

(async () => {
    redisClient = redis.createClient({
        url: redis_url
    });

    redisClient.on("error", (error) => console.error(`Error : ${error}`));

    await redisClient.connect();
})();


// get endpoint for getting a value
// example: /api?key=name
app.get('/api', async (req, res) => {
    console.log('[GET] ' + req.url)

    let key = req.query.key

    try {
        let value = await redisClient.get(key)

        return res.send(value)
    } catch (error) {
        return res.error(error)
    }
})

// post endpoint for setting a value
// example: /api?key=name&value=amir
app.post('/api', async (req, res) => {
    console.log('[POST] ' + req.url)

    let key = req.query.key;
    let value = req.query.value;

    try {
        await redisClient.set(key, value)

        return res.sendStatus(201)
    } catch (error) {
        return res.error(error)
    }
})


// start app
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})