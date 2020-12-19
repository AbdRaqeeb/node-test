export const errorHandler = (err, req, res, next) => {
    let error = {...err};

    error.message = err.message;

    // log to console for dev
    console.log(err);

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
};