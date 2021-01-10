const Rsvp = require('../models/login.js');
const db = require('mongoose');



const findRsvpAndUpdate = (req, callback) => {
 Rsvp.find({email: req.username}, callback);
};
module.exports = findRsvpAndUpdate;