describe("testing fixtures", function(){
  it("tests three crucial functions", function(){
    expect(readFixtures).toBeDefined();
    expect(setFixtures).toBeDefined();
    expect(loadFixtures).toBeDefined();
  })
})

describe("testing punchcard in example.html", function(){
  var fixture;
  beforeEach(function(){
    setUpHTMLFixture();
    loadFixtures('example.html');
    fixture = $('#punchcardExample');
    fixture.punchcardExample();
  })

  it('punchcard should be defined', function(){
    expect(fixture).toBeDefined();
  })

});
