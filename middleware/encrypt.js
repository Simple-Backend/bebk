const crypt = require('bcryptjs')

module.exports = (req, res, next) => {
    // if(req.body.hasOwnProperty('password'))
    //     req.body.password = crypt.hashSync(req.body.password, 1)
    next()
}