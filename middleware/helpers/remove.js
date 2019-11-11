// __   __  _______  ___      _______  _______  ______    _______         ______    _______  __   __  _______  __   __  _______ 
//|  | |  ||       ||   |    |       ||       ||    _ |  |       |       |    _ |  |       ||  |_|  ||       ||  | |  ||       |
//|  |_|  ||    ___||   |    |    _  ||    ___||   | ||  |  _____| ____  |   | ||  |    ___||       ||   _   ||  |_|  ||    ___|
//|       ||   |___ |   |    |   |_| ||   |___ |   |_||_ | |_____ |____| |   |_||_ |   |___ |       ||  | |  ||       ||   |___ 
//|       ||    ___||   |___ |    ___||    ___||    __  ||_____  |       |    __  ||    ___||       ||  |_|  ||       ||    ___|
//|   _   ||   |___ |       ||   |    |   |___ |   |  | | _____| |       |   |  | ||   |___ | ||_|| ||       | |     | |   |___ 
//|__| |__||_______||_______||___|    |_______||___|  |_||_______|       |___|  |_||_______||_|   |_||_______|  |___|  |_______| 

//IMPORTS

Object.defineProperty(Array.prototype, 'remove', {
    value: function remove(items) {
        return this.filter(item => items.indexOf(item) < 0)
    }
})

keys = (obj, ...keys) => {
    keys.forEach(key => delete obj[key])
    return obj
}

extras = (available, have) => {
    Object.keys(have).forEach(key => {
        if(available.indexOf(key) < 0) delete have[key]
    })
    return have
}

module.exports = {
    keys,
    extras,
}