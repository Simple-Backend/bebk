exports.up = (knex) =>
    knex.schema.createTable('equipments', tbl => {
        tbl.increments('id')
            .primary()
            .unique()
            .notNullable()
        tbl.text('name')
            .unique()
            .notNullable()
        tbl.text('description')
        tbl.text('date')
            .notNullable()
        tbl.timestamps(true, true)
    })

exports.down = (knex) =>
    knex.schema.dropTableIfExists('equipments')
