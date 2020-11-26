const express = require("express")
const router = express.Router()
const validate = require("../controllers/validation")

// @route       POST api/v1/valid
// @desc        validate input
// @access      Public
router.post('/', async(req, res, next) => {
    const {rules, data} = req.body
    try {
        if (Array.isArray(rules) === false) return res.status(400).json({
            error: true,
            msg: "rules must be an array of rules"
        })

        const value = validate(rules, data)

        if (value.length > 0) return res.status(400).json({items: value})

        res.status(200).json({
            msg: "valid"
        })
    } catch (e) {
        next(e)
    }
})
module.exports = router
