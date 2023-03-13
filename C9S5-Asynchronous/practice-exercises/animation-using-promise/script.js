// Task – 1: Define Function drawBox() to Draw Box
/*
    The function should accept DOM element as the parameter.
    Using DOM methods and properties, the function should create div and 
    provide it with style properties: width, height, border idth and border style
    The div element should be appended to the element passed as parameter
    The function should then return the styled div element.
    */
   function drawBox() {
    var div = document.createElement("div");
    // div.id = "box";
    div.style.width = "95vw";
    div.style.height = "100px";
    div.style.border = "5px solid black";
    div.style.position = "absolute";
    document.body.appendChild(div);
    return div;
}
    let div = drawBox();

// Task 2 – Define Function changeBorderColor() to Change Color of Box Border
/*
    The function should accept DOM element as the parameter whose border color 
    needs to be changed.
    Using DOM methods and properties, the function should style the element with 
    orange color to its border.
    The function should then return the styled div element.
*/

function changeBorderColor(div) {
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
    // document.body.appendChild();
    // return div;
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
function displayHeading(){
    let h1 = document.createElement("h1");
    h1.innerText = "Welcome to the Task 5";
    h1.style.textAlign = "center";
    h1.style.color = "orange";
    div.appendChild(h1);
    // return div;
}

// Task 6 - Define Function promiseAnimation() That Returns Promise
/*
    The function should take interval (for timeout), animate (callback parameter) 
    and element as its parameters.
    The function should create and return the Promise object.
    The promise in its executor function should call the setTimeout() method.
    This method should call the animate() function passed as parameter to the promiseAnimation() function.
    The animate() function should be called with element parameter to apply the animation effect on it.
    The promise should resolve with the element returned by the animate() function.
*/

function promiseAnimation(interval, animate, element) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            animate(element);
            resolve(element);
        }, interval);
    });
}


// Task 7 – Consume Promise
/*
    Use Promise Chaining.
    Begin with call to promiseAnimation() function with interval of 1000 ms, 
    drawBox (callback), body of document as parameters.
    The promise when resolved would call the handler associated using then() 
    method of Promise returned.
    The handler should make next call to promiseAnimation() function whose returned 
    promise will be chained using the next call to .then() method
    Each handler in the chained promises will call the animation methods to apply 
    the animation effect on the element being passed to the handler method.
*/

promiseAnimation(1000,changeBorderColor,div)
    .then(() => {
        promiseAnimation(1000,makeBorderRounded,div)
           .then(() => {
                promiseAnimation(1000,fillColor,div)
                   .then(() => {
                        promiseAnimation(1000,displayHeading,div)
                           .then(() => {
                           })
                    })
            })
    })
