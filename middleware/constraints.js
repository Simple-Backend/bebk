/*
What it do?
Checks to see if post requests have both required and unique fields.
Checks put and delete for id field
*/
//imports
const get = require('./helpers/get')
const check = require('./helpers/check')
const {send_error} = require('./helpers/errors')

module.exports =  async (req, res, next) => {
    switch(req.method) {
        case 'POST': {
            next()
            break
        }
        case 'PUT': {

            const {array, table} = get.path(req.originalUrl)
            if(!array) {
                req.id = await get.id(table, req.body, req.query)
                req.id ? next() : send_error(res, 'P0001', table)

            }
            else next()
            break
        }
        case 'DELETE': {
            const {array, table} = get.path(req.originalUrl)
            if(!array) {
                req.id = await get.id(table, req.body, req.query)
                req.id ? next() : send_error(res, 'D0001', table)
            }
            else next()
            break
        }
        default: next()
    }
}