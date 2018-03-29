const mongoose = require('mongoose');
const animalSchema = mongoose.Schema({
    name: String,
    type: String,
    tags: {type: [String], index: true}
});
animalSchema.index({name: 1, type: -1});
animalSchema.methods.findSimilarTypes = function (cb) {
    return this.model('Animal').find({type: this.type}, cb);
};
animalSchema.statics.findByName = function (name, cb) {
    return this.find({name: new RegExp(name, 'i')}, cb);
};
animalSchema.query.byName = function (name) {
    return this.find({name: new RegExp(name, 'i')});
};


var Animal = mongoose.model('Animal', animalSchema);
var dog = new Animal({type: 'dog'});

Animal.findByName('fido', function (err, animals) {
    console.log(animals);
})
Animal.find().byName('fido').exec(function (err, animals) {
    console.log(animals);
})
Animal.on('index', function (error) {
    console.log(error.message);
})
dog.findSimilarTypes(function (err, dogs) {
    console.log(dogs);
})
