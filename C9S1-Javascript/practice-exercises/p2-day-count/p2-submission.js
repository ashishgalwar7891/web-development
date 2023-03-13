let year = 2000;
let month = 18;
let days;

//Write your switch case logic here to compute days in month
switch(month){
case 1:
case 3:
case 5:
case 7:
case 8:
case 12:
    days=31;
    break;
case 4:
case 6:
case 9:
case 11:
    days=30
    break;
case 2:
    if(year%4===0){
        days=29;
        break;
    }else{
        days=28;
        break;
    }
default:
   days="Invelid Entery."
}

console.log(`No. of days ${days}`);