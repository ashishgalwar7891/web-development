// Task – 1: Define Function drawBox() to Draw Box
/*
    The function should accept DOM element as the parameter.
    Using DOM methods and properties, the function should create div and 
    provide it with style properties: width, height, border width and border style
    The div element should be appended to the element passed as parameter
    The function should then return the styled div element.
    */
   function drawBox(){
    var div = document.createElement("div");
    div.style.width = "95vw";
    div.style.height = "100px";
    div.style.borderWidth = "5px";
    div.style.borderStyle = "solid";
    document.body.appendChild(div);
    return div;
}
// let div=drawBox();   

// Task 2 – Define Function changeBorderColor() to Change Color of Box Border
/*
    The function should accept DOM element as the parameter whose border color 
    needs to be changed.
    Using DOM methods and properties, the function should style the element with 
    orange color to its border.
    The function should then return the styled div element.
*/

function changeBorderColor(div){
    div.style.border = "5px solid orange";
    div.style.position = "absolute";
    // document.body.appendChild(div);
    // return div;
}

// Task 3 – Define Function makeBorderRounded to Make Box Corners Rounded
/*
    The function should accept DOM element as the parameter whose border's 
    corners need to be rounded.
    Using DOM methods and properties, the function should style the element with 
    radius of its border set to 15px.
    The function should then return the styled div element.
*/

function makeBorderRounded(div){
    div.style.borderRadius = "15px";
    // document.body.appendChild(div);
    // return div;
}

// Task 4 – Define Function fillColor() to Fill the Box with a Color
/*
    The function should accept DOM element as the parameter whose background color 
    needs to be changed
    Using DOM methods and properties, the function should style the element with 
    background color cadet blue
    The function should then return the styled div element.
*/

function fillColor(div){
    div.style.backgroundColor = "cadetblue";
//     document.body.appendChild(div);
//     return div;
}

// Task 5 – Define Function displayHeading() to Enter Text in Box
/*
    The function should accept DOM element as the parameter within which text 
    needs to be entered.
    The heading text should be displayed within `h1` element.
    The text to be displayed should be AMC Entertainment.
    The color of the text should be orange and should be centrally aligned.
    The function should then return the div element with the text.
*/

function displayHeading(div){
    let h1 = document.createElement("h1");
    h1.innerText = "Welcome to the Task 5";
    h1.style.textAlign = "center";
    h1.style.color = "orange";
    div.appendChild(h1);
    return div;
}

// Task 6 - Call Functions to Animate After a Delay
/*
    Create nested structure with calls to setTimeout() method
    Each call to setTimeout() should call another setTimeout() method.
    Each callback of setTimeout() should call the animation method the return from 
    which should be passed to the next animation method.
    Observe the Callback Hell Effect.
    */
setTimeout(()=> {
let div=drawBox()
setTimeout(()=> {
changeBorderColor(div);
    setTimeout(()=> {
    makeBorderRounded(div);
        setTimeout(()=> {
        fillColor(div);
                setTimeout(()=> {
                displayHeading(div);
            },1000)
        },1000)
    },1000)
},1000)
},1000)
