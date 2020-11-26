const removeItem = (data, item) => {
    const values = Object.keys(data)

    const found = values.includes(item)

    if (found !== true) return 'Attribute not found'

    return values.reduce((obect, key) => {
        if (key !== item) {
            obect[key] = data[key]
        }
        return obect
    }, {})
}

module.exports = removeItem