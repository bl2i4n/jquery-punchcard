var helloWorld = require("../test")
var punchcard = require("../src/punchcard.js")

describe('Hello world', function () {
  it('says hello', function () {
    expect(helloWorld()).toEqual('Hello world!!');
  });

  it('tests punchard', function() {
    expect(Plugin()).toBeDefined();
  });
});
