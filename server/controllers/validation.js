const validate = (rules, items) => {
    const values = Object.keys(items)

    return rules.filter(rule => values.includes(rule) === false)
}

module.exports = validate