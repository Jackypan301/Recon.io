const mongoose = require('mongoose');

const rsvpSchema = mongoose.Schema({
  email: String,
  password: String
});

const Login = mongoose.model('Rsvp', rsvpSchema);

module.exports = Login;