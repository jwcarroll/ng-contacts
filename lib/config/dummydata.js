'use strict';

var mongoose = require('mongoose'),
  Contact = mongoose.model('Contact');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Contact.find({}).remove(function () {
  Contact.create({
      firstName: 'Josh',
      lastName: 'Carroll',
      email: 'jwarren.carroll@gmail.com',
      phoneNumber: '8655555555',
      dob: new Date('6/22/1981')
    }, {
      firstName: 'Patty',
      lastName: 'Carroll',
      phoneNumber: '8655555555',
      dob: new Date('1/23/1981')
    }, {
      firstName: 'Scott',
      lastName: 'Hanselman',
      email: 'scott@hanselman.com',
      dob: new Date('1/22/1974')
    }, {
      firstName: 'Paul',
      lastName: 'Irish',
      dob: new Date('7/23/1982')
    }, function () {
      console.log('finished populating things');
    }
  );
});
