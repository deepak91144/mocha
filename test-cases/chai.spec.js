var chai = require("chai");
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

let myList = {
  items: [{ id: 1, name: "abc" }],
  title: "userList",
  address: {
    country: "india",
    phoneno: [42354353, 543545],
  },
};
describe("aspect check", () => {
  let userName = "code improve";
  it("check string", () => {
    assert.typeOf(userName, "string");
  });
  it("check value", () => {
    assert.equal(userName, "code improvefrjfj");
  });
  it("check length", () => {
    assert.lengthOf(myList.items, 1);
  });
});

// should
describe("should check", () => {
  let userName = "code improve";
  it("check string", () => {
    userName.should.be.a("string");
  });
  it("should equal", () => {
    userName.should.equal("code improve");
  });
  it("should length", () => {
    myList.should.have.property("items").with.lengthOf(1);
  });
});
describe("should expect", () => {
  let userName = "code improve";
  it("string match", () => {
    expect(userName).to.be.a("string");
  });
  it("expect equal", () => {
    userName.should.to.equal("code improve");
  });
  it("should length", () => {
    expect(userName).to.lengthOf(12);
  });
  it("object match", () => {
    expect(myList).to.have.property("items").with.lengthOf(1);
  });
  it("api object match", () => {
    expect(myList).to.have.all.keys("items", "title", "address");
  });
  it("phone no", () => {
    expect(myList).to.have.nested.property("address.phoneno[0]");
  });
  it("check contry name", () => {
    expect(myList).to.have.nested.include({ "address.country": "india" });
  });
});
