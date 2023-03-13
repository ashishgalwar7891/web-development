
const savedata=()=>{

    let productData={
        "productname":document.getElementById("pname").value,
        "productdesc":document.getElementById("pdesc").value,
        "productprice":document.getElementById("pprice").value
    }
console.log(productData);
let xhr=new XMLHttpRequest();
xhr.open("POST","http://localhost:3000/products",true);
xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8")
xhr.send(JSON.stringify(productData));
console.log("data saved")
alert("Data saved to json successfully")
}

const fetchData= () => {
let xhr=new XMLHttpRequest();
xhr.open("GET","http://localhost:3000/products",true)
xhr.onreadystatechange=function(){
    if(this.readyState==4 && (this.status>=200&&this.status<400))
    {
        console.log(this.responseText)
    }
   
}
xhr.send();
xhr.onload=()=>{
let productsData=JSON.parse(xhr.response);
alert(productsData);
Object.values(productsData).forEach(p=>
    {
        let div=document.createElement("div");
        var container=document.getElementById("loaddata");
        container.appendChild(div).innerHTML=
        `<table border=4>
        <tr><td>${p.productname}</td>
        <td>${p.productdesc}</td>
        <td>${p.productprice}</td></tr></table>
        `;
    });

}
}

const deleteData=()=>{
let productData={
    "productid":document.getElementById('productid').value
}
let xhr=new XMLHttpRequest();
xhr.open("DELETE","http://localhost:3000/products/"+productData.productid,true);
xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");
xhr.send();
console.log("Data Deleted");
alert("Delete Message");
}

const updatedata=()=>
{


}

const fetcharecord=()=>
{
    
}