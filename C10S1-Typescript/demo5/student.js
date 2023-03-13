var student = /** @class */ (function () {
    function student(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    student.prototype.getmarks = function () {
        return this.marks;
    };
    return student;
}());
var s1 = new student(11, "amit", 99);
var s2 = new student(12, "gaurav", 94);
var s3 = new student(13, "jai", 98);
console.log("student id:".concat(s1.id, ",student name:").concat(s1.name, ",Marks:").concat(s1.marks));
console.log("student id:".concat(s2.id, ",student name:").concat(s2.name, ",Marks:").concat(s2.marks));
console.log("student id:".concat(s3.id, ",student name:").concat(s3.name, ",Marks:").concat(s3.marks));
s1.name = "amit Kumar";
s2.marks = 99;
s3.id = 45;
console.log("student id:".concat(s1.id, ",student name:").concat(s1.name, ",Marks:").concat(s1.getmarks()));
console.log("student id:".concat(s2.id, ",student name:").concat(s2.name, ",Marks:").concat(s2.getmarks()));
console.log("student id:".concat(s3.id, ",student name:").concat(s3.name, ",Marks:").concat(s3.getmarks()));
