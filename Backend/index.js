const express = require('express')
const app = express()
const { config } = require('./config/index')

const userApi = require('./routes/user')

app.use(express.json())

userApi(app)

app.listen(config.port, function () {
    console.log(`Listening on http://localhost:${config.port}`)
})