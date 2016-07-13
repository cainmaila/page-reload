var express = require('express');
var port = process.env.PORT || 80;
var app = express();
app.use(express.static('www'));
app.listen(port, function() {
    console.log("server in " + port + " port");
});

function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' });
    } else {
        next(err);
    }
};

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
};

function status404(req, res) {
    res.status(404).send("404 error 找不到頁面");
}
