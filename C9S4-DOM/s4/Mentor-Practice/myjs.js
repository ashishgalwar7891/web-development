let h1=document.getElementsByTagName("h1")[0];
h1.remove();
//console.log(h1);
let h2=document.querySelectorAll(".heading")
console.log(h2);
//h2.style.backgroundColor="yellow";

let p=document.getElementsByTagName("p")[2];
p.innerHTML="Done by JS";
//console.log(h3);
let myh1=document.createElement("h1");
let node=document.createTextNode("JS Heading");
myh1.appendChild(node);
document.getElementsByTagName("body")[0].appendChild(myh1); 

let div=document.getElementById("mydiv");
let child=document.getElementById("p");

div.removeChild(child);