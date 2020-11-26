const express = require("express")
const router = express.Router()
const removeItem = require("../controllers/remove")

// @route       POST api/v1/remove
// @desc        remove item
// @access      Public
router.post('/', async (req, res, next) => {
    const {data, item} = req.body
    try {
        const result = removeItem(data, item)

        if (typeof result === 'string') return res.status(404).json({
            msg: result
        })
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
})

module.exports = router