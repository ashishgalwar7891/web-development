//Declare global container constant to represent <div> container
const container = document.getElementById('container');

//Define Fruit Object type with required properties
class Fruit{
   
    private name:string;
    private image: string;

    private price:number;

    
    constructor(name:string, image:string,price:number){
        this.name = name;
        this.price = price;
        this.image = image;
    }
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    geturl(){
        return this.image;
    }
    setName(name:string){
        this.name = name;
    }
    seturl(image:string){
        this.image = image;
    }

    setPrice(price:number){
        this.price = price;
    }

}


//Fetch data from server using getFruits() method
function getFruits(){
    fetch('http://localhost:3000/fruits')
    .then(response => response.json())
    .then(data => {
        //Create a new Fruit object for each fruit in the data array
        data.forEach((fruit:any) => {
            let newFruit = new Fruit(fruit.name, fruit.image,fruit.price);
            //Create a new <div> element for each fruit
            let fruitDiv = document.createElement('div');
            fruitDiv.className = 'fruit1';
            
            //Add fruit name and price to the <div> element
            fruitDiv.innerHTML = ` <img src="${newFruit.geturl()}" class="card-img-top" alt="..."><h3>${newFruit.getName()}</h3><p>Price $${newFruit.getPrice()}</p>`;
            //Add the <div> element to the container
            container?.appendChild(fruitDiv);
        });
    })
}


//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 



//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container



//Call getFruits() method globally
getFruits();
