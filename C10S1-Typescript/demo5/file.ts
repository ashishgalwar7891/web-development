let name1:string="niit";
let name2:string="ltd";
let noofstud:number=500;
let addd:string="HR";
let openoffice:boolean=false;

let morestudents:number=noofstud+100;

console.log(`fullname: ${name1}.${name2}\nNo of students:${morestudents}\nOffice open: ${openoffice}`);


function squares(side:number):number
{
return side*side;
}

let result:number=squares(100);
console.log(result)


////anonymous function
const names=["niit","ltd","Delhi"];
names.forEach(function(a)
{
    console.log(a.toUpperCase());
}
)

console.log("------------------------");

names.forEach((a)=> console.log(a.toUpperCase()))

for (const iterator of names) {
    console.log(iterator);
}

console.log("------------------------");

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    console.log(names[i].toUpperCase());
}

console.log("------------------------");

for (const temp in names) {
    console.log(temp);
    console.log(names[temp]);
    console.log(temp.toUpperCase());
}