const {add_one, get_one, get_all, update_one, remove_one, remove_all} = require('../config/models')
const {send_error} = require('./helpers/errors')
const {tables} = require('./helpers/get')

module.exports = async (req, res, next) => {
    switch(req.method) {
        case 'POST': {
            try {
                let base_id = undefined
                let base_field = undefined
                for(let i=req.stack.length-1; i>=0; i--) {
                    if(base_id) req.stack[i].body[base_field] = base_id
                    req.response = await add_one(req.stack[i].table, req.stack[i].body)
                    //the first request is the parent to all subsequent requests
                    //store the base id and field name in case any children need it
                    if(req.response && i === req.stack.length-1) {
                        base_field = `${req.stack[i].table.slice(0,-1)}_id`
                        base_id = req.response.id
                    }
                }
                if(!req.response) return send_error(res, '61205', req.table)
                req.status = 201
                next()
            } catch (err) {
                console.log('err', err)
                return send_error(res, err.code, req.table)
            }
            break
        }
        case 'GET': {
            if(req.array) {
                get_all(req.table, req.query).then(record => {
                    req.response = record
                    record ? next() : send_error(res, 'P0002', req.table)
                })
            } else {
                get_one(req.table, req.query).then(records => {
                    req.response = records
                    records ? next() : send_error(res, 'P0002', req.table)
                })
            }
            break
        }
        case 'PUT': {
            update_one(req.table, req.id, req.body).then(res => {
                req.response = res
                next()
            })
            break
        }
        case 'DELETE': {
            if(req.array) {
                remove_all(req.table).then(res => {
                    req.response = `Everything has been terminated!`
                    next() 
                })
            } else {
                remove_one(req.table, req.id).then(res => {
                    req.response = res
                    next()
                })
            }
        }
    }
}