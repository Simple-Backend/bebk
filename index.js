require('dotenv').config()

const server = require('./config/server.js')

const port = process.env.PORT || 4447

server.listen(port, () => {
    console.clear()
    console.log(`\n** Go ahead, make my port ${port} **\n`)
})