// Write the JavaScript code here to make Contact App functional

const url = "http://localhost:3050/contacts";
const dis=document.getElementById("div");

// Code to show the persisted data
const showPersistedData = ()=>{
    let getPromise=axios.get(url);
    dis.innerHTML="";
    getPromise.then((result) => {
        let arr=result.data.sort((a,b)=>a.firstName.localeCompare(b.firstName));
        for (const i of arr) {
            dis.innerHTML+=`<div class="con row gap-3">
            <div class="icon col-1 ">${icon(i.firstName,i.lastName)}</div>
            <div class="col-3 ">${i.firstName}.${i.lastName}</div>
            <div class="col-4 ">${i.email}</div>
            <div class="col-2 ">${i.contactNo}</div>
            <div class="col-2 ">${i.jobTitle}</div>
            </div>`
        }
    }).catch((err) => {alert(err);
        });
};

function icon(a,b){
    return a.charAt(0)+b.charAt(0);
}

showPersistedData();
