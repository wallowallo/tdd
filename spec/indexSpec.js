describe("index.js", function() {
  const index = require("../index.js")
  it("passes test", function() {
    expect(true).toBe(true);
  });

  it("exports something", function() {
    expect( typeof index).toBe("function");
  });

  it("returns 2", function() {
    expect(index()).toBe(2);
  });

  it("returns 3a if it recieves a parameter that is 3", function() {
    expect(index(3)).toBe("3a");
  });

  it("return 4a if it recives a parameter that is 4", function() {
    expect(index(4)).toBe("4a");
  });

  it("returns number + b if it recieves a parameter that is > 10", function() {
    expect(index(11)).toBe("11b");
    expect(index(18)).toBe("18b");
  });
});
