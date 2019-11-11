const {get_one, get_all} = require('../config/models')
const schema = require('../config/response_schema')

const fill_struct = async (struct, values) => {
    // console.log('s', struct)
    const res = {}
    for(const key of Object.keys(struct)) {
        const type = Array.isArray(struct[key]) ?  'array' : typeof struct[key]
        const tbl = key.split('_')[key.split('_').length-1]
        // console.log('key', key, 'tbl', tbl)
        switch(type) {
            case 'string': {
                if(struct[key]) res[key] = (await get_one(tbl, {id: values[key]}))[struct[key]]
                else res[key] = values[key]
                break
            }
            case 'object': {
                console.log('valuekey', values[key])
                const row = await get_one(tbl, {id: values[key]})
                res[key] = await fill_struct(struct[key], row)
                break
            }
            case 'array': {
                const rows = await get_all(tbl, {}) //empty object gets everything
                res[key] = []
                switch(typeof struct[key][0]) {
                    case 'string': {
                        for(const idx in rows) {
                            res[key].push((await fill_struct({[struct[key][0]]: ''}, rows[idx], tbl))[struct[key][0]])
                        }
                        break;
                    }
                    case 'object': {
                        for(const idx in rows) {
                            const that = await fill_struct(struct[key][0], rows[idx], tbl)
                            res[key].push(that)
                        }
                        break;
                    }
                }
                break
            }
        }
    }
    // console.log('res0', res)
    return res
}

module.exports = async (req, res, next) => {
    // console.log('meth', req.method)
    // console.log('arr', req.array)

    // const struct = schema[req.table]
    // let test = []
    // if(req.method === 'DELETE' && req.array) next()
    // if(req.array)
    //     for(let i=0; i<req.response.length; i++) {
    //         test.push(await fill_struct(struct, req.response[i]))
    //     }
    // else
    //     test = await fill_struct(struct, req.response)

    // req.response = test
    next()
}