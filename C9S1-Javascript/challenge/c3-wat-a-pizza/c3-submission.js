//Declaring variables 
var customerName="Gary";
var customerEmail="gary@123.com";
var phoneNo="14123123435";
var address="20, Marble Drive, Eville";
var noOfPizzasOrdered=10;
var pizzaPrice=12.5;
var pizzaSize="M";
var noOfGarlicBreadOrdered=5;
var garlicBreadPrice=5.99;
var noOfBeveragesOrdered=10;
var beveragePrice=1.99;

// define function displayCustomerDetails() to display the details of customer passed as parameters.
function displayCustomerDetails(customerName, customerEmail, phoneNo, address){
    console.log("Customer Name: " + customerName);
    console.log("Customer Email: " + customerEmail);
    console.log("Customer Phone Number: " + phoneNo);
    console.log("Customer Address: " + address);
}

// define funciton displayMenu() to raise an alert that displays the menu with 
// category, item names and price
function displayMenu(){
    console.log("Select the items to order");
    console.log("-------------------------");
    console.log(" 1)"+" "+"Pizza");
	console.log("price of one Regular pizza :$9.99");
	console.log("price of one Medium pizza :$11.99");
	console.log("price of one Large pizza :$13.99");
	console.log(" 2)"+" "+"Garlicbreak");
	console.log("price of one Garlicbreak :$5.99");
	console.log(" 3)"+" "+"Beverage");
	console.log("price of one Beverage :$1.99");
}

// define function getPriceOfPizzaBasedOnSize() to return price of pizza for the 
// size passed as parameter.
var priceOfPizza=0;
function getPriceOfPizzaBasedOnSize(size){
switch(size){ 
    case 1: 
        priceOfPizza = 9.99;
        break;
    case 2:
        priceOfPizza = 11.99;
        break;
    case 3:
        priceOfPizza = 13.99;
        break;
    default:  
        alert('Invalid size, Enter 1,2 or 3');
        priceOfPizza = 0;
        break;
    }
    return priceOfPizza;
}

// define function getPriceOfGarlicBread() to return price of garlic bread as 5.99.
function getPriceOfGarlicBread(){
    return garlicBreadPrice;
}

// define function getPriceOfBeverage() to return price of beverage as 1.99.
function getPriceOfBeverage(){
    return beveragePrice;
}

// define function calculatePrice() to return cost of items ordered for the 
// no of items and price passed as parameters.
var totalpriceofpizza=0;
function calculatepriceofpizza(noOfPizzasOrdered,priceofpizza)
{
    totalpriceofpizza=totalpriceofpizza+noOfPizzasOrdered*priceofpizza;
    return totalpriceofpizza
}
var totalpriceofgarlicbreak=0;
function calculatepriceofgarlicbreak(noOfGarlicBreadOrdered,garlicBreadPrice)
{
    totalpriceofgarlicbreak=totalpriceofgarlicbreak+noOfGarlicBreadOrdered*garlicBreadPrice;
    return totalpriceofgarlicbreak;
}
var totalpriceofbeverage=0;
function calculatepriceofbeverage(noOfBeveragesOrdered ,beveragePrice)
{
    
    totalpriceofbeverage=totalpriceofbeverage+noOfBeveragesOrdered*beveragePrice;
    return totalpriceofbeverage;
}


// define function calculateTotalBill() to return total bill amount from the 
// total price of pizza, garlic bread and beverages ordered 
var totalbillamount=0;
function claculatetotalbillamount(totalpriceofpizza ,totalpriceofgarlicbreak ,totalpriceofbeverage)
{
    totalbillamount=totalbillamount+totalpriceofpizza+totalpriceofgarlicbreak+totalpriceofbeverage;
    return Math.round(totalbillamount);
}

// define function calculateDiscountAndReturnBillAmount() to return discounted amount 
// which will be calculated only if total bill is more than 50  
var totalbillafterdiscount=0;
function calculatediscountandreturnbillamount(totalbillamount)
{
    claculatetotalbillamount();
    if(totalbillamount>50)
    {
        console.log("Total bill amount is :"+Math.round(totalbillamount));
        totalbillafterdiscount=totalbillamount-totalbillamount*0.1;
        console.log("After Discounts :"+Math.round(totalbillafterdiscount));
    }
    else
    {
        totalbillafterdiscount=totalbillamount;
        console.log("Total bill amount is :"+Math.round(totalbillafterdiscount));
    }
    return totalbillafterdiscount;
}

// define function displayOrderDetails() to print the order details
function DisplayorderDelails(noOfPizzasOrdered,noofgarlicbreakorder,noOfBeveragesOrdered,totalbillamount,totalbillafterdiscount)
	{
		console.log("order detalis");
		console.log("-------------------");
		console.log("The number of pizza order :"+noOfPizzasOrdered);
		console.log("The number of garlicbreak order :"+noofgarlicbreakorder);
		console.log("The number of beverage order :"+noOfBeveragesOrdered);
        console.log("------------------------------------------");
        //var totalbillamount= claculatetotalbillamount();
        console.log("Total bill Amount :"+Math.round(totalbillamount));
        //var totalbillafterdiscount= calculatediscountandreturnbillamount();
        console.log("Total bill Amount After Discountn :"+Math.round(totalbillafterdiscount));
        console.log("=============================THANK YOU FOR ORDER=========================");
    }

//Main Program
   function Main(){
        var totalpriceofpizza=calculatepriceofpizza(noOfPizzasOrdered,getPriceOfPizzaBasedOnSize(1));
        console.log(`pizzaznumber is ${noOfPizzasOrdered}`);
        var totalpriceofgarlicbreak=calculatepriceofgarlicbreak(noOfGarlicBreadOrdered,getPriceOfGarlicBread());
        var totalpriceofbeverage=calculatepriceofbeverage(noOfBeveragesOrdered,getPriceOfBeverage());
        var totalbillamount=claculatetotalbillamount(totalpriceofpizza ,totalpriceofgarlicbreak ,totalpriceofbeverage);
        var totalbillafterdiscount=calculatediscountandreturnbillamount(totalbillamount);
        DisplayorderDelails(noOfPizzasOrdered,noOfGarlicBreadOrdered,noOfBeveragesOrdered,totalbillamount,totalbillafterdiscount);
   }
// call the functions to compute order amount and display order details

    displayCustomerDetails(customerName, customerEmail, phoneNo, address);
    console.log("------------------------------------------");
    displayMenu();
    console.log("------------------------------------------");
    Main();
       






