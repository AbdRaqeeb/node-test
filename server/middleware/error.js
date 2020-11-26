module.exports = function error(e, req, res, next) {
    console.error(e);
    res.status(500).send('Internal server error');
}