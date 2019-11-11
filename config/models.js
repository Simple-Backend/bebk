//IMPORTS
const db = require('../data/dbConfig')

//MODELS

//CREATE
//:adds and returns new row to given table
const add_one = async (tbl, obj) =>
    (await db(tbl).insert(obj).returning('*'))[0]

//READ
//:returns a single row from the given table fitting a set of requirements
const get_one = async (tbl, obj) => {
    const user = await db(tbl).where(obj).first()
    return user
}
//:returns an array of all rows from a given table fitting a set of requirements
const get_all = async (tbl, obj) => await db(tbl).where(obj)

//UPDATE
//:updates and returns a row with given id from the given table 
const update_one = async (tbl, id, obj) => {
    await db(tbl).where({id: id}).update(obj)
    return await get_one(tbl, {id: id})
}

//DELETE
//:terminates a row with given id from the given table
const remove_one = async (tbl, id) => {
    const obj = get_one(tbl, {id: id})
    await db(tbl).where({id: id}).delete()
    return obj
}
//:terminate all rows from given table
const remove_all = async (tbl) => await db(tbl).delete()

module.exports = {
    add_one,
    get_one,
    get_all,
    update_one,
    remove_one,
    remove_all
}