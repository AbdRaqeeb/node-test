import asyncHandler from 'express-async-handler';
import ErrorResponse from "../utils/errorResponse.js";

// @desc        validate input
// @route       POST /api/v1/valid
// @access      Public
export const validate = asyncHandler(async (req, res, next) => {
    const {rules, data} = req.body;

    if (Array.isArray(rules) === false) {
        return next(
            new ErrorResponse('Rules must be an array of rules', 400)
        );
    }

    const values = Object.keys(data);

    const result = rules.filter(rule => values.includes(rule) === false);

    if (result.length > 0) {
        return res.status(400).json({
            success: false,
            msg: 'Item(s) missing',
            items: result
        })
    }

    res.status(200).json({
        success: true,
        data: 'Valid'
    })
});

export default validate;