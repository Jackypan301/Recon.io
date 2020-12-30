const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Houses' , { useNewUrlParser: true , useUnifiedTopology: true}, );

const PropertySchema = new mongoose.Schema({
  id: {type: Number},
  name: {type:String},
  neighborhood: {
    id: {type: Number},
    name: {type:String},
    car: {type: Number},
    dog: {type: Number},
    parking:{type: Number},
    quiet: {type: Number},
    alone: {type: Number},
    sidewalks: {type: Number},
    wildlife: {type: Number},
    holiday: {type: Number},
    yards: {type: Number},
    plan: {type: Number},
    streets: {type: Number},
    restaurants: {type: Number},
    grocery: {type: Number},
    kids: {type: Number},
    friendly: {type: Number},
    community: {type: Number},
    reviews: [{
        id: {type: Number},
        topic: {type: String},
        user: {type: String},
        text: {type: String},
        likes: {type: Number},
        date: {type: String},
        resident: {type:String},
        flag: {type:Boolean},
        color: {type: String}
    }]
  },

})

var Property = mongoose.model('Property', PropertySchema);

function findAll(callback) {
  Property.find({}, callback);
}


function findOne(id, callback) {
  Property.find({id: id}, callback);
}

function insertOne(id, callback) {
  Property.create(id, callback);
}

module.exports.findOne = findOne;
module.exports.findAll = findAll;
module.exports.insertOne = insertOne;
