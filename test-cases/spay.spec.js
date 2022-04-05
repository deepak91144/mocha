var sinon = require("sinon");
var chai = require("chai");
var expect = chai.expect;
var Student = require("../controller/StudentController");
var student = new Student();
describe("spay", () => {
  it("check user function", () => {
    expect(student.userId()).to.be.equal(12);
  });
  it("function count", () => {
    var spy = sinon.spy(student, "getInfo");
    student.home(5);
    expect(spy.calledOnce).to.be.true;
  });
});
