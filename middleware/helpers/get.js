//IMPORTS
const db = require('../../data/dbConfig')
const remove = require('../helpers/remove')
const replace = require('../helpers/replace')
const uuid = require('uuid')

required = async table => {
    const not_required = ['id', table.slice(0, -1) + '_id', 'timestamp'] //move this to middleware
    const schema = await db(table).columnInfo()
    let required = []
    for(let key in schema) if(!schema[key].nullable) required.push(key)
    return required.remove(not_required)
}

schema = async table => {
    //private
    const schematics = await db(table).columnInfo()
    const table_call = await db.raw(`SELECT table_name FROM information_schema.tables WHERE table_schema='public'`)
                .then(schema => schema.rows.filter(table => !table.table_name.includes('knex_')))
    const not_required = ['id', 'created_at', 'updated_at', 'date']
    const get_unqiue = await db.raw(`select constraint_name from information_schema.table_constraints WHERE table_name='${table}' AND constraint_type='UNIQUE'`)
                .then(constraints => constraints.rows)
                
    //public
    const tables = table_call.map(table => table.table_name)
    const fields = Object.keys(schematics)
                .filter(field => field !== 'created_at' && field !== 'updated_at') //if timestamps are auto
    const id_fields = fields.filter(field => tables.includes(field.slice(0,-3)+'s'))
    const empty = fields
                .filter(val => val !== 'id')
                .reduce((obj,val) => (obj[val]=null,obj), {})
    const types = Object.assign({}, ...fields
                .map(field => {return {[field]: schematics[field].type}}))
    const required = Object.keys(schematics)
                .filter(field => !schematics[field].nullable)
                .filter(field => !not_required.includes(field))
    const unique = get_unqiue.map(row => row.constraint_name.split('_').filter(word => word !== table && word !== 'unique').join('_'))
    //public functions
    const fill = body => Object.assign({}, ...Object.keys(empty)
                .map(field => {
                    //adds a unique id to any table_id field if value isn't already given
                    if(field === table.slice(0,-1)+'_id' && !body[field]) body[field] = uuid.v4()
                    return {[field]: body[field] || null}
            })
    )
    return {
        table,
        tables,
        fields,
        id_fields,
        unique,
        empty,
        types,
        required,
        fill,
    }
}

path = path => {
    let table = path.split('/')[2].split('?')[0]
    let array = true
    if(table.substr(table.length - 1) !== 's') {
        table += 's'
        array = false
    }
    return {array, table}
}

tables = async () =>
    await db.raw(`SELECT table_name FROM information_schema.tables WHERE table_schema='public'`)
        .then(schema => schema.rows.filter(table => !table.table_name.includes('knex_'))
        .map(table => table.table_name))

unique = async table =>
    await db.raw(`select constraint_name from information_schema.table_constraints WHERE table_name='${table}' AND constraint_type='UNIQUE'`)
        .then(constraints => constraints.rows)
        .map(row => row.constraint_name.split('_').filter(word => word !== table && word !== 'unique').join('_'))

// columns = async table =>
//     Object.keys(await db(table).columnInfo())

required = async table => {
    const not_required = ['id', table.slice(0, -1) + '_id', 'timestamp'] //move this to middleware
    const schema = await db(table).columnInfo()
    let required = []
    for(let key in schema) if(!schema[key].nullable) required.push(key)
    return required.remove(not_required)
}

body = (columns, body) => remove.extras(columns, body)

params = (columns, given) => {
    replace.values(given, '!', null)
    const settings = Object.assign({}, given)
    const query = Object.assign({}, given)
    const reserved = ['limit', 'start_at'] //move this to middleware
    // remove.extras(columns, query)
    // remove.extras(reserved, settings)
    return {settings, query}
}

id_helper = async (table, field_name, id) => {
    await db(table).select('id')
}

id = async (table, body, query) => {
    let id = ''
    const field_name = table.slice(0,-1) + '_id'
    const ids = [query[field_name], query.id, body[field_name], body.id]
        .filter(id => id)
        .map(id => {return {field_name: isNaN(id) ? field_name : 'id', id: id}})
    for(let i=0; i<ids.length; i++) {
        id = await db(table).select('id').where({[ids[i].field_name]: ids[i].id}).first()
        if(id) break
    }
    if(id) return id.id
    else return false
}

//EXPORTS
module.exports = {
    path,
    required,
    body,
    params,
    id,
    unique,
    tables,
    schema,
    // schema_empty,
    // schema_columns,
    // schema_types,
    // Schema,
}