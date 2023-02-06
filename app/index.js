// importing modules
const express = require('express');
const redis = require("redis");

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
app.get('/api', (req, res) => {
    console.log('[GET] ' + req.url)

    let key = req.query.get('key')

    try {
        let value = redisClient.get(key)
        res.send(value)
    } catch (error) {
        res.error(error)
    }
})

// post endpoint for setting a value
// example: /api?key=name&value=amir
app.post('/api', (req, res) => {
    console.log('[POST] ' + req.url)

    let key = req.query.get('key');
    let value = req.query.get('value');

    try {
        redisClient.set(key, value)
        res.status(201)
    } catch (error) {
        res.error(error)
    }
})


// start app
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})