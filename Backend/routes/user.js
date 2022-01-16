const express = require('express')

const UserService = require('../services/user.service')

const service = new UserService();

function userApi(app) {
    const router = express.Router()
    app.use('/api/user', router)

    router.get('', async (req, res) => {
        try {
            var data = await service.getUser('lfflorian4')
            console.log(data)
            res.status(201).json(data)
        } catch (err) {
            console.log(err)
        }
    })
}

module.exports = userApi