const express = require('express')
const cors = require('cors')
const app = express()
const { config } = require('./config/index')

const userApi = require('./routes/user')

app.use(express.json())
app.use(cors());

userApi(app)

app.listen(config.port, function () {
    console.log(`Listening on http://localhost:${config.port}`)
})