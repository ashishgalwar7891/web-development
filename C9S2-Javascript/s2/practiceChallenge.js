const products = [
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 400
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 250
    }
];

const newarr=products.filter(getarray);

console.log(newarr);
function getarray(p)
{
        return p.price>300;
}