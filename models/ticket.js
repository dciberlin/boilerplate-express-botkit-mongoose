//* This is our Ticket mongoose schema
//* For now, lets use mongoose-sequence to implement _id field auto increment by 1

var mongoose = require("mongoose");
// pass our mongoose instance to the mongoose-sequence instantiation
var autoIncrement = require('mongoose-sequence')(mongoose);

// come back here if we need to change or add fields to the schema
var ticketSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true
  },
  email: String,
  completed: {
    type: Boolean,
    default: false
  },
  create_date: {
    type: Date,
    default: Date.now
  }
}, { _id: false });

// plug the autoIncrement plugin into the schema
ticketSchema.plugin(autoIncrement);

// create the mongoose document
var Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = {
  Ticket: Ticket
}