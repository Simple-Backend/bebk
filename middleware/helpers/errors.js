//IMPORTS

const send_error = (res, error) => {
    switch(error.code) {
        //database errors
        case '22003': error.status = 500; error.defail = `Numeric value out of range.`; break
        case '22007': error.status = 500; error.detail = `What time is it? I don't know I'm a suptid computer.`; break
        case '23502': error.status = 500; error.detail = `Requirements not met.`; break
        case '23503': error.status = 500; error.detail = `Foreign key violation; cannot remove without first removing connected data. || foreign key doesn't exist.`; break
        case '23505': error.status = 500; error.detail = `Unremarkable fields.`; break
        case '22P02': error.status = 500; error.detail = `Invalid text representation???`; break
        case '42703': error.status = 500; error.detail = `Undefined column. ${res}`; break
        case 'P0002': error.status = 404; error.detail = `Whatever you're looking for isn't here.`; break
        //custom errors
        //POST ERRORS
        case 'C0001': error.status = 400; error.detail = `Invalid id type in field ${table}.`; break
        case 'C0002': error.status = 400; error.detail = `Required fields not provided ${fields}`; break
        case 'C0003': error.status = 400; error.detail = `Unremarkable fields ${error.unremarkable_fields}`; break
        //PUT ERRORS
        case 'P0001': error.status = 400; error.detail = `Put requests require a valid ${table === 'users' ? 'user_id' : 'id'}.`; break
        //DELETE ERRORS
        case 'D0001': error.status = 400; error.detail = `Delete requests require a valid ${table === 'users' ? 'user_id' : 'id'}.`; break
        case '61200': error.status = 406; error.detail = `No content available following the criteria given.`; break
        case '61201': error.status = 406; error.detail = `Was not given a ${fields} field.`; break
        case '61202': error.status = 404; error.detail = `${fields} could not be found.`; break
        case '61203': error.status = 404; error.detail = `Nope, Waldo's not here.`; break
        case '61204': error.status = 500; error.detail = `Opps! Database didn't return anything. Please contact your network administrator (501) 623-8880.`
        //please contact sales
        //default
        default: error.status = 612; error.detail = `Backend broked, unknown error.`
    }

    const response = {
        table: error.table,
        code: error.code,
        status: error.status,
        detail: error.detail
    }


    res.status(error.status).json(response)
}

module.exports = {
    send_error
}

/*COMMON POSTGRES ERROR CODES
23502 - requirement not met
23505 - unique contraint
*/