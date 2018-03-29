var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var User = mongoose.model('User');

router.get('/', function (req, res, next) {
    res.render('login', {title: '登录'});
});

router.post('/', function (req, res, next) {
    User.create(req.body, function(err, use) {
        if (err) {
            return res.json(err);
        }
        res.json(use); 
    })

})

module.exports = router;