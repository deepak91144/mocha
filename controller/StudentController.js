class Student {
  constructor() {}
  home(type) {
    let data = this.getInfo(type, 1);
    return data + 10;
  }
  getInfo() {
    return 10;
  }
  userId() {
    return 12;
  }
}
module.exports = Student;
