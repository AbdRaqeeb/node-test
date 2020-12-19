import asyncHandler from 'express-async-handler';
import ErrorResponse from "../utils/errorResponse.js";

// @desc        validate input
// @route       POST /api/v1/magic
// @access      Public
export const lowestIndex = asyncHandler(async (req, res, next) => {
    const {magic, dist} = req.body;

    if(!magic || !dist) {
        return next(
            new ErrorResponse('All fields required', 400)
        );
    }

    let lowestTripIndex = magic[0];
    const distance = magic.reduce((netDistance, v, i) => {
        const score = netDistance + v - dist[i];
        if (score < lowestTripIndex) lowestTripIndex = i;
        return score;
    }, 0);

    if (distance < 0) {
        return res.status(400).json({
            success: false,
            lowestIndex: -1
        });
    }

    res.status(200).json({
        success: true,
        lowestIndex: distance
    });
});

export default lowestIndex;