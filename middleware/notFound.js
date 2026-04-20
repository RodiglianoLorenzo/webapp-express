const notFound = (req, res, next) => {
    res.status(404).json({
        message: "The requested resource was not found"
    });
};

export default notFound;