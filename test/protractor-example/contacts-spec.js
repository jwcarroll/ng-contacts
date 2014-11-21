/**
 * Created by Josh on 10/22/2014.
 */
describe('angularjs homepage todo list', function () {

  it('should add a todo', function () {
    browser.get('http://localhost:9000/');

    browser.waitForAngular();

    var div = element.all(
      by.repeater('contact in ctrl.contacts'))
      .first();

    expect(div.getTagName()).toEqual('div');

    var deleteButton = div.element(by.css('.close'));

    expect(deleteButton.getTagName()).toEqual('button');

    deleteButton.click();

    browser.waitForAngular();

    var contactList = element.all(by.repeater('contact in ctrl.contacts'));
    expect(contactList.count()).toEqual(6);
  });
});
