const errorHandler = (err, req, res, next) => {
    console.log(err.stack.cyan);
    res.status(err.statusCode || 500).json({
        success: false,
        error: err,
    });
};

module.exports = errorHandler;