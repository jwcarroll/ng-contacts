'use strict';

describe('Controller: ContactListController', function () {

  // load the controller's module
  beforeEach(module('ngContactsApp'));

  var ContactListCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('/api/contacts')
      .respond([{name:'Josh', age:33, _id:123}]);

    ContactListCtrl = $controller('contactListCtrl');
  }));

  afterEach(function(){
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('Controller should initialize by getting contacts', function () {

    $httpBackend.flush();

    expect(ContactListCtrl.contacts.length).toBe(1);
  });

  it('Should delete a contact from the list', function(){
    $httpBackend.flush();

    var firstContact = ContactListCtrl.contacts[0];

    $httpBackend.expectDELETE('/api/contacts/' + firstContact._id)
      .respond(200);

    ContactListCtrl.deleteContact(firstContact);

    $httpBackend.flush();

    expect(ContactListCtrl.contacts.length).toBe(0);
  });
});
