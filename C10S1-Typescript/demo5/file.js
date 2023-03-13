var name1 = "niit";
var name2 = "ltd";
var noofstud = 500;
var addd = "HR";
var openoffice = false;
var morestudents = noofstud + 100;
console.log("fullname: ".concat(name1, ".").concat(name2, "\nNo of students:").concat(morestudents, "\nOffice open: ").concat(openoffice));
function squares(side) {
    return side * side;
}
var result = squares(100);
console.log(result);
////anonymous function
var names = ["niit", "ltd", "Delhi"];
names.forEach(function (a) {
    console.log(a.toUpperCase());
});
console.log("------------------------");
names.forEach(function (a) { return console.log(a.toUpperCase()); });
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var iterator = names_1[_i];
    console.log(iterator);
}
console.log("------------------------");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
    console.log(names[i].toUpperCase());
}
console.log("------------------------");
for (var temp in names) {
    console.log(temp);
    console.log(names[temp]);
    console.log(temp.toUpperCase());
}
