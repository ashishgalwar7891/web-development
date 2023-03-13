const products = [
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 400
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 450
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 300
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 420
    },
    {
        productName: 'Smiley T-Shirt',
        price: 350
    },
    {
        productName: 'Smiley T-Shirt',
        price: 150
    },
    {
        productName: 'Shinie Nail Paint',
        price: 100
    },
    {
        productName: 'Shinie Nail Paint',
        price: 250
    },
    {
        productName: 'Esbeda Wallet',
        price: 250
    }
];

//Find the stock of each non-premium products using function chaining
//Write code here

const count1=products.filter(nm=>(nm.productName=="Gucci Round Bucklet Belt" && nm.price<=300)).reduce((Intial,nm)=>++Intial,0);
const count2=products.filter(nm=>(nm.productName=="Smiley T-Shirt" && nm.price<300)).reduce((Intial,nm)=>++Intial,0);
const count3=products.filter(nm=>(nm.productName=="Shinie Nail Paint" && nm.price<300)).reduce((Intial,nm)=>++Intial,0);
const count4=products.filter(nm=>nm.productName=="Esbeda Wallet" && nm.price<300).reduce((Intial,nm)=>++Intial,0);

console.log("Gucci Round Bucklet Belt    "+count1)
console.log("Smiley T-Shirt              "+count2)
console.log("Shinie Nail Paint           "+count3)
console.log("Esbeda Wallet               "+count4)