const mongoose = require('mongoose');
const catSchema = mongoose.Schema({
    name: String,
    age: Number
});

mongoose.model('Cat', catSchema);

