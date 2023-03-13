const interval = 1000;


function timeout(interval, callback){ // defination
    callback(interval);
}

//begin from here
// timeout function is called it is accepting 2 para, 1 variable and other function

timeout(interval, (interval)=>{ // arraw function (for callback) defination
    setTimeout(()=>{
        document.body.innerHTML += "1 sec lapsed <br/>";
        timeout(interval, (interval)=>{
                setTimeout(()=>{
                    document.body.innerHTML += "2 sec lapsed <br/>";
                    timeout(interval, (interval)=>{
                        setTimeout(()=>{
                            document.body.innerHTML += "3 sec lapsed <br/>";
                        },interval)
                    })
                },interval)
            })
    },interval)
})



