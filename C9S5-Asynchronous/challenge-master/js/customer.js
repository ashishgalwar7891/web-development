//Write  password validation code here 

let url = " http://localhost:3050/customers";


function setPasswordConfirmValidity() {
    let password = document.getElementById("pass1").value;
    let cnfrmPassword = document.getElementById("pass2").value;
    console.log(" Password:", password,'\n',"Confirm Password:",cnfrmPassword);
    let message = document.getElementById("passwordmsg");
    let flag = false ;

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Passwords match";
            message.style.backgroundColor = "#1dcd59";
            flag =true;
        }
        else{
            message.textContent = "Password don't match";
            message.style.backgroundColor = "#ff4d4d";
        }
    }
    else{
        alert("Password can't be empty!");
        message.textContent = "";
    }
    return flag ;
}

// Write code to submit customer details 
function submitCustomerDetail(event) {
   let a =setPasswordConfirmValidity();
   if(a)
   {
    const formData = new FormData(event.target);
   // console.log(formData);
    const formProps = Object.fromEntries(formData);
    //console.log(formProps);
    const postPromise = axios.post(url,formProps);
    postPromise.then(response=>{
        event.preventDefault();
        console.log(response);
    });
}
else{
    alert("Password doesn't matches")
    return false ;
}
return true;
   
}


