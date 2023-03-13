let menu = [
    {
        'category': 'Beverages',
        'name': 'Coke',
        'price': 1.5
    },
    {
        'category': 'Starters',
        'name': 'Garlic Bread',
        'price': 2.8
    },
    {
        'category': 'Starters',
        'name': 'Mozzarella Sticks',
        'price': 5.5
    },
    {
        'category': 'Main Meal',
        'name': 'Medium Size Margherita Pizza',
        'price': 11
    },
    {
        'category': 'Beverages',
        'name': 'Iced Tea',
        'price': 1.25
    },
    {
        'category': 'Starters',
        'name': 'Greek Wedge Salad',
        'price': 4.5
    },
    {
        'category': 'Main Meal',
        'name': 'Veg Family Meal',
        'price': 13.25
    },
    {
        'category': 'Main Meal',
        'name': 'Large Size Vegan Pepperoni Pizza',
        'price': 14.5
    },
]
const order = {
    'items': [
        {
            'name': 'Mozzarella Sticks',
            'price': 5.5,
            'quantity': 2
        },
        {
            'name': 'Garlic Bread',
            'price': 2.8,
            'quantity': 2
        },
        {
            'name': 'Coke',
            'price': 1.5,
            'quantity': 3
        },
        {
            'name': 'Medium Size Margherita Pizza',
            'price': 11,
            'quantity': 2
        },
        {
            'name': 'Iced Tea',
            'price': 1.25,
            'quantity': 1
        },
        {
            'name': 'Veg Family Meal',
            'price': 13.25,
            'quantity': 2
        },
    ]
};

//Write function to filter menu items by Category and sort them alphabetically
let sortByAlphabetically = function (menu, catagoryName){
    let filtered = menu.filter(item => item.category == catagoryName).map(item => item.name).sort();
    return filtered;
}
console.log("Sort Beverages in Alphabetical Order")
console.log(sortByAlphabetically(menu,"Beverages"))
console.log("Sort Starters in Alphabatical Order")
console.log(sortByAlphabetically(menu,"Starters"))
console.log("Sort Main Meal in Alphabatical Order")
console.log(sortByAlphabetically(menu,"Main Meal"))
//Write function to calculate the amount of each ordered item
function calculateAmountOfOrderedItems(menu, order){
    let orderamount =order.items.map(value =>{
        let obj = new Object;
        obj.name = value.name;
        obj.quantity = value.quantity;
        obj.price = value.price;
        obj.amount =value.price*value.quantity;
        obj.category = categorties(menu, value.name);
        return obj;
    });
    return orderamount;
}
function categorties(menu,name){
    for(const a of menu){
        if(a.name ==name){
            return a.category;
        }
    }
}
let orderAmount = calculateAmountOfOrderedItems(menu,order);
console.log("Total Amount of Orders")
console.log(orderAmount)

//Write function to calculate the subtotal amount for the main meal ordered
function calculateMainMealAmount(orderAmount){

    let mainMealAmount=orderAmount.filter(items=>items.category=="Main Meal")
        .map(price=>price.amount)
        .reduce((sum,amount)=>sum+amount,0);
    return mainMealAmount;
}
let mainMealAmount = calculateMainMealAmount(orderAmount);
console.log("Total amount of Main Meal => "+mainMealAmount);

//Write function to find the totalAmount of the order based on the calculated mainMealAmount value
function findtotalAmount(orderAmount, mainMealAmount){
    let totalAmount;
    totalAmount = orderAmount.reduce((a,b)=> a+b.amount,0);
    if(mainMealAmount>40){
        return totalAmount-1.5;
    }
    else{
        return  totalAmount;
    }

}
let totalamount = findtotalAmount(orderAmount, mainMealAmount);



//Write function to calculate the final amount after discount
function calculatedFinalAmount(totalAmount, discount){
    if(totalAmount>50){
        return totalAmount-totalAmount*(discount/100);
    }
    else{
        return  totalAmount;
    }
}

let finalamount = calculatedFinalAmount(totalamount,5);

//Write function to display the total amount
function displayTotalAmount(totalAmount){
    console.log("Total Amount payable: $"+totalamount)
}



//Write function to display the final amount
function displayFinalAmount(finalAmount){
    console.log("Final Amount payable after discount: $ "+finalAmount)
}


//Invoke  functions
displayTotalAmount(totalamount);
displayFinalAmount(finalamount);

