const fruits=["apple","banana","pear","pineapple","mango","pear"];

const flowers=["rose","lili","tulip","sunflower"];

const cobination=[...fruits,...flowers];
console.log(cobination)

const [one, two,...combo]=flowers;
console.log("one "+one)
console.log("two " +two)
console.log(combo)

const [a,b,...d]=fruits; // destructuring array
console.log("d = "+d);


/*

const fruitslice=fruits.slice(2,5);

console.log("fruit slice = "+fruitslice);
console.log(fruits)

fruits.splice(2,1,"lemon","kiwi");

console.log(fruits)

console.log(fruits.sort())
console.log(fruits)

console.log(fruits.sort().reverse())

console.log(fruits.lastIndexOf("pear"));

let l=fruits.unshift("watermelon","orange");

console.log(fruits);
console.log("new array length : "+l)

let p=fruits.pop();

console.log(fruits);
console.log("value deleted : "+p)

*/

// for(i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

//************

// let s="";
// for(i of fruits){
//     s=s+i;
// }
// console.log(s);

// console.log(typeof s);