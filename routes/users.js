var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');
var User = mongoose.model('User');

router.param(['id'], function (req, res, next, value) {
    next();
});
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'users', name: 'wwx'});
});

router.get('/list', function(req, res, next) {
    User.find({}, function (err, uses) {
        res.json(uses);
    });
});

router.get('/list/:id', function(req, res, next) {
  next();
});

router.get('/list/:id', function(req, res) {
    //req.params.id
    res.send(req.params.id);
});

router.post('/', function (req, res, next) {
    var name = req.body.name;
    var age = req.body.age;

    Cat.create({
        name: name,
        age: age
    }, function (err, cat) {
        if (err) {
            return res.json(err);
        }
        res.json(cat);   
    });
});

module.exports = router;
