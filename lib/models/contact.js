'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Contact Schema
 */
var ContactSchema = new Schema({
  firstName: {type: String, required: true, trim: true},
  lastName: {type: String, required: true, trim: true},
  email: {type: String, match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},
  phoneNumber: String,
  dob: Date
});

/**
 * Validations
 */
ContactSchema.path('dob').validate(function (dob) {
  return dob <= Date.now();
}, 'DOB cannot be in the future');

mongoose.model('Contact', ContactSchema);
