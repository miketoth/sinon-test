var sinon = require('sinon');
var when = require('when');
var assert = require('chai').assert;
var printArgs = require('./index');

var resMock = {
  json: sinon.stub()
};

describe('trying to replicate it', function() {
  it('res throws error', function() {
    var output = when(printArgs(resMock)).then(function() {
      assert.isTrue(resMock.json.calledWithMatch('aaa'));
    }).catch(function(error) {
      console.log('ERROR: ', error);

      // if error throw here
      // if assert fails we also end up here
      return false;
    });
    printArgs(resMock);
  });
})



