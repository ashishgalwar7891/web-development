let n = 31052022;
let sum1=0;
let sum=0;
// Write solution code here to find the lucky number
do{
    rem=n%10;
    n=Math.round(n/10);
    sum1=sum1+rem;
}while(n>1);
do{
    rem=sum1%10;
    sum1=Math.round(sum1/10);
    sum=sum+rem;
}while(sum1>1);
console.log(`Your Lucky Number is ${sum}`);
