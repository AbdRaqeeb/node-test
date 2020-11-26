const express = require("express")
const router = express.Router()
const lowestIndex = require("../controllers/magic")

// @route       POST api/v1/magic
// @desc        validate input
// @access      Public
router.post('/', async (req, res, next) => {
    const {magic, dist} = req.body
    try {
        const result = lowestIndex(magic, dist)

        if (result < 0) return res.status(400).json({
            error: true,
            lowestIndex: -1
        })

        return res.status(200).json({
            lowestIndex: result
        })
    } catch (e) {
        next(e)
    }
})

module.exports = router