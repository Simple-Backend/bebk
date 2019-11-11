values = (obj, original_value, new_value) => {
    Object.keys(obj).forEach(key => {
        if(obj[key] === original_value) obj[key] = new_value
    })
    return obj
}

merge = (obj, new_obj) => {
    Object.keys(new_obj).forEach(key => {
        obj[key] = new_obj[key]
    })
    return obj
}

module.exports = {
    values,
    merge
}