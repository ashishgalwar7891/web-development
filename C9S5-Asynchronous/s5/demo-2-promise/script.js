let interval = 1000;


function timeoutPromise(interval) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res();
        }, interval)
    }
    );
}

let p = timeoutPromise(interval);
p.then(()=>{
    document.body.innerHTML += "1 sec lapsed <br/>"; //card valid check
    return timeoutPromise(interval);
}
).then(()=>{
    document.body.innerHTML += "2 sec lapsed <br/>"; // pin valid check
    return timeoutPromise(interval);
}
).then(()=>{
    document.body.innerHTML += "3 sec lapsed <br/>"; // balance check
    timeoutPromise(interval);
}
)
.catch(()=>{

})

/*
function timeoutPromise(interval) {
    return new Promise((res,rej)=>{
        // here you will do coding 
        // if everything goes normal like file operation, fetching some data from server
        // you can return first parameter i.e. res
        // res represents successful completion of promise
let s="success";
       if(s=="success")
       res();
       else
       rej();
    }
    );
}

let p = timeoutPromise(interval);

p.then(()=>{ // write code which u want to execute after successful completion of promise 
    document.body.innerHTML += "success ful completion <br/>";
}
)

p.catch(()=>{  // write the code if promise fails
    document.body.innerHTML += "sorry promise rejected ";
})
*/
