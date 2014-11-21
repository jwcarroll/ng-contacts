/**
 * Created by Josh on 11/21/2014.
 */
'use strict';

function SomeObject(){
  var _this = this;
  _this.state = false;
  _this.change = function(){
    _this.state = true;
  };
}

describe('simple jasmine tests', function(){

  it('Should be true', function(){

    var myStuff = new SomeObject();

    myStuff.change();

    expect(myStuff.state).toBe(true);

  });

});
