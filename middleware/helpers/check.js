// __   __  _______  ___      _______  _______  ______    _______         _______  __   __  _______  _______  ___   _ 
//|  | |  ||       ||   |    |       ||       ||    _ |  |       |       |       ||  | |  ||       ||       ||   | | |
//|  |_|  ||    ___||   |    |    _  ||    ___||   | ||  |  _____| ____  |       ||  |_|  ||    ___||       ||   |_| |
//|       ||   |___ |   |    |   |_| ||   |___ |   |_||_ | |_____ |____| |       ||       ||   |___ |       ||      _|
//|       ||    ___||   |___ |    ___||    ___||    __  ||_____  |       |      _||       ||    ___||      _||     |_ 
//|   _   ||   |___ |       ||   |    |   |___ |   |  | | _____| |       |     |_ |   _   ||   |___ |     |_ |    _  |
//|__| |__||_______||_______||___|    |_______||___|  |_||_______|       |_______||__| |__||_______||_______||___| |_| 

//IMPORTS
//local
const db = require('../../data/dbConfig')
const get = require('./get')

//HELPERS HELPERS
const unremarkable = async (table, body, unqiue_fields) => {
  let fields_to_check = unqiue_fields.filter(field => body.hasOwnProperty(field))
  const get = async (obj) => await Promise.resolve(db(table).where(obj).first())
  const in_use = (await Promise.all(fields_to_check.map(async item => {
    if(await get({[item]: body[item]}) !== undefined) return {[item]: body[item]}
  }))).filter(item => item)
  return in_use
}

//HELPERS
const required = async (table, body) => {
  const not_required = ['created_at', 'updated_at', 'date']
  const required_fields = (await get.required(table)).filter(field => not_required.indexOf(field) === -1)
  const missing_fields = required_fields.filter(field => !body.hasOwnProperty(field))
  return {required_fields: required_fields, missing_fields: missing_fields}
}

const unique = async (table, body) => {
  const unique_fields = await get.unique(table)
  const unremarkable_fields = (await unremarkable(table, body, unique_fields))
  return {unique_fields: unique_fields, unremarkable_fields: unremarkable_fields}
}

module.exports = {
  required,
  unique,
}