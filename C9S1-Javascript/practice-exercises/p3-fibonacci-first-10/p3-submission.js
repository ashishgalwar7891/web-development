// Write your fibonacci series solution code here

var number1=0;
var number2=1;
var number3;

console.log(number1);
for(var i=0; i<8; i++){
    number3=number1+number2;
    console.log(number3);
    number1=number2;
    number2=number3;
}