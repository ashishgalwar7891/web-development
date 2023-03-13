let firstName = "James";
let lastName = "Smith";
let age = 34;
let isMarried = true;
let city = "San Jose";
let state = "California";
let postalCode = "CA";

// Provide solution code here for Validating FirstName
if(typeof(firstName) != undefined){
        console.log("Value must be defined")
    if(typeof(firstName)=="string"){
        console.log("First Name value must be of type String")
    }else{
        console.log("First Name value must not be String type")
    }
}else{
    console.log("First Name value must not be undefined")
}

// Provide solution code here for Validating LastName
if(typeof(lastName) == "string"){
    console.log("Last Name value must be of type String value")
}else{
    console.log("Last Name value must not be of type String value")
}

// Provide solution code here for Validating Age
if(typeof(age) != undefined){
    console.log("Value must be defined")
    if(typeof(age)== "Number"){
        console.log("Type should be a Number")
        if(age>=18 && age<=60){
           console.log("Age value should be between 18 and 60")
        }else{
           console.log("Age value should not be between 18 and 60")
        }
    }else{
        console.log("Type should not be a Number")
    }
}else{
    console.log("Value must be undefined")
}

// Provide solution code here for Validating isMarried
if(typeof(isMarried) == "Boolean"){
    console.log("IsMarried value must be of type Boolean")
}else{
    console.log("IsMarried value must not be of type Boolean")
}

// Provide solution code here for Validating City
if(typeof(city)== "string"){
    console.log("City value must be of type String")
}else{
    console.log("City value must not be of type String")
}

// Provide solution code here for Validating State
if(typeof(state) == "string"){
    console.log("state value must be of type String")
}else{
    console.log("state value must not be of type String")
}
 
// Provide solution code here for Validating Postal Code
if(typeof(postalCode) != undefined){
    console.log("Value must be defined")
    if(typeof(postalCode)== "string"){
        console.log("Postal Code value must be of type String")
    }else{
        console.log("Postal Code value must not be of type String")    
    }
}else{
    console.log("Postal Code value must be undefined")
}
 