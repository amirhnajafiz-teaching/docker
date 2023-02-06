const express = require('express');
const redis = require("redis");

const app = express();
const port = process.env.HTTP_PORT || 3000;
const redis_url = process.env.REDIS_URL || 'redis://redis:6379';


let redisClient;

(async () => {
    redisClient = redis.createClient({
        url: redis_url
    });

    redisClient.on("error", (error) => console.error(`Error : ${error}`));

    await redisClient.connect();
})();


app.get('/api', (req, res) => {
    let key = req.query.get('key')

    try {
        let value = redisClient.get(key)
        res.send(value)
    } catch (error) {
        res.error(error)
    }
})

app.post('/api', (req, res) => {
    let key = req.query.get('key');
    let value = req.query.get('value');

    try {
        redisClient.set(key, value)
        res.status(201)
    } catch (error) {
        res.error(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})