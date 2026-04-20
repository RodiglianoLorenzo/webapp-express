const serverError = (err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        message: "An unexpected error occurred. Please try again later."
    });
};

export default serverError;