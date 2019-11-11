//SETUP
const express = require("express")
const server = express()
const router = express.Router()

//IMPORT AND USE MIDDLEWARE
server.use(require('cors')())
server.use(require('helmet')())
server.use(express.json())  //json all the things!

//APP Middleware
//:add these the order you want to use them
const warez = [
    require('../middleware/constraints'),
    require('../middleware/encrypt'),
    require('../middleware/prepare_req'),
    require('../middleware/make_req'),
    require('../middleware/prepare_res'),
]

//ALL ROUTES
server.use('/api/', router.all('*', [warez], async (req, res) => {
    res.status(req.status).json(req.response)
}))

module.exports = server