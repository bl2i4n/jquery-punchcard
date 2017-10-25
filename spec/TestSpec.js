var helloWorld = require("../test")
var Plugin = require("../src/punchcard.js")

describe('Hello world', function () {
  it('says hello', function () {
    expect(helloWorld()).toEqual('Hello world!!');
  });

  it('tests punchard', function() {
    expect(Plugin()).toBeDefined();
  });
});
