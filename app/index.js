const express = require('express')
const app = express()
const port = process.env.HTTP_PORT || 3000;

app.get('/api', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})