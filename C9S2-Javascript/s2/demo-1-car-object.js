
// const car = { make: "Ford", model: "Explorer", color: "white", year: 2008 };



// function displayObjectProperties(obj) {
//     console.log("Displaying car property values");
//     console.log(`make: ${obj.make}`);
//     console.log(`model: ${obj.model}`);
//     console.log(`color: ${obj.color}`);
//     console.log(`year: ${obj.year}`);

// }
// displayObjectProperties(car); // passing object

const car = { make: "Ford", model: "Explorer", color: "white", year: 2008 ,
 getName(){
    return this.make;
}
};

console.log(car.make);
console.log(car.model);
console.log(car.getName());
