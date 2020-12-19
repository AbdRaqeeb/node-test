import asyncHandler from 'express-async-handler';
import ErrorResponse from "../utils/errorResponse.js";


// @desc        Remove item
// @route       DELETE /api/v1/remove
// @access      Public
export const removeItem = asyncHandler(async (req, res, next) => {
    const {data, item} = req.body;

    let values = Object.keys(data);

    const found = values.includes(item);

    if (!found) {
        return next(
            new ErrorResponse('Attribute not found', 404)
        );
    }

    // remove item
    values = values.reduce((object, key) => {
        if (key !== item) {
            object[key] = data[key]
        }
        return object;
    }, {});

    res.status(200).json({
        success: true,
        data: values
    });

});

export default removeItem;