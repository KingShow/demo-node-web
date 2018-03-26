var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function (req, res, next) {
    next();
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', name: 'king!'});
});

module.exports = router;
