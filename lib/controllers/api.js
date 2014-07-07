'use strict';

var mongoose = require('mongoose'),
  _ = require('lodash'),
  Contact = mongoose.model('Contact');

/**
 * Get awesome things
 */
exports.contacts = function (req, res) {
  return Contact.find(function (err, contacts) {
    if (!err) {
      return res.json(contacts);
    } else {
      return res.send(err);
    }
  });
};

exports.getContact = function (req, res) {
  return Contact.find({_id: req.params.id}, function (err, contacts) {
    if (!err) {
      if (contacts.length) {
        return res.json(contacts[0]);
      }

      return res.status(404).send({
        msg: 'Unable to locate contact with id: ' + req.params.id
      });
    } else {
      return res.send(err);
    }
  });
};

exports.createContact = function (req, res) {
  Contact.create(req.body, function (err, contact) {
    if (!err) {
      return res.json(contact);
    } else {
      return res.status(400).send(err);
    }
  });
};

exports.updateContact = function (req, res) {
  var contact = req.body,
      id = req.params.id;
  delete contact._id;

  Contact.findById(id, function (err, contact) {
    if (!err && !_.isNull(contact)) {

      _.assign(contact, req.body);

      contact.save(function (err, savedContact) {
        if (!err) {
          return res.json(savedContact);
        } else {
          return res.status(400).send(err);
        }
      });

    } else {
      return res.status(404).send(err || {msg:'Unable to locate contact with id: ' + id});
    }
  });
};

exports.deleteContact = function (req, res) {
  var id = req.params.id;

  return Contact.findById(id, function (err, contact) {
    if (!err && !_.isNull(contact)) {
      contact.remove(function(err, contact){

        if(!err){
          res.status(204).send();
        }else{
          res.status(400).send(err);
        }

      });
    } else {
      return res.status(404).send(err || {msg:'Unable to locate contact with id: ' + id});
    }
  });
};