describe("testing fixtures", function(){
  it("tests three crucial functions", function(){
    expect(readFixtures).toBeDefined();
    expect(setFixtures).toBeDefined();
    expect(loadFixtures).toBeDefined();
  })
})

describe("testing example.html", function(){
  var fixture;
  beforeEach(function(){
    loadFixtures('example.html');
    fixture = $('#testExample');
    fixture.testExample();
  })

  it('punchcard should be defined', function(){
    expect(fixture).toBeDefined();
  })

});
