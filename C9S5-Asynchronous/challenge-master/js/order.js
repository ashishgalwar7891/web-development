// Reuse the solution created to dynamically create order form fields developed 
// in the previous sprint challenge

//Save the order details captured from the form in json-server using Axios API

function showitems()
{

let show=document.getElementById('orderform');
 show.style.display='inline';
}

var order = []



let url ="  http://localhost:3052/order";

function category(item)
{
    var value = item.value;  
        console.log(value);

        var a1 = document.getElementById("a1");
        var a2 = document.getElementById("a2");
        var b1 = document.getElementById("b1");
        var b2 = document.getElementById("b2");
        var b3 = document.getElementById("b3");
        var c1 = document.getElementById("c1");
        var c2 = document.getElementById("c2");
        var c3 = document.getElementById("c3");

      
      
        if(value=="Beverages")
        {   
          a1.style.display="inline-block";
          a2.style.display="inline-block";
          b1.style.display="none";
          b2.style.display="none";
          b3.style.display="none";
          c1.style.display="none";
          c2.style.display="none";
          c3.style.display="none";
        }


        if(value=="Starters")
        {  
            a1.style.display="none";
            a2.style.display="none";
            b1.style.display="inline-block";
            b2.style.display="inline-block";
            b3.style.display="inline-block";
            c1.style.display="none";
            c2.style.display="none";
            c3.style.display="none";      
        }

        if(value=="Main Meal")
        {   
          
            a1.style.display="none";
            a2.style.display="none";
            b1.style.display="none";
            b2.style.display="none";
            b3.style.display="none";
            c1.style.display="flex";
            c2.style.display="flex";
            c3.style.display="flex";    
}
}


function setprice(items)
{
    var value = items.value;  
    console.log(value);
    var p = document.getElementById("Price");
    if(value=="Coke"){
    p.innerText=1.5;
    }
    else if(value=="Iced Tea")
    {
        p.innerText=1.25;
    }
    else if(value=="Garlic Bread")
    {
        p.innerText=2.8;
    }
    else if(value=="Mozzarella Sticks")
    {
        p.innerText=5.5;
    }
    else if(value=="Greek Wedge Salad")
    {
        p.innerText=4.5;
    }
    else if(value=="Medium Size Margherita Pizza")
    {
        p.innerText=11;
    }
    else if(value=="Veg Family Meal")
    {
        p.innerText=13.25;
    }
    else if(value=="Large Size Vegan Pepperoni Pizza")
    {
        p.innerText=14.5;
    }
    else{
        p.innerText=0;
    }
}

function calculateprice(items)
{
    var value = items.value;  
    console.log(value);
    var p = document.getElementById("Price");
    var pv=p.textContent;
    var t = document.getElementById("total");
    var c=value*pv;
    t.innerText=`${value*pv}`;

}


function adddata(event)
{
    let order = new Object;
    
    order = {
        "categoryname":document.getElementById("category1").value,
        "Item":document.getElementById("category2").value,
        "price":document.getElementById("Price").textContent,
        "quantity":document.getElementById("quant").value,
        "amount":document.getElementById("Price").textContent * document.getElementById("quant").value

    }
         console.log(order.amount);
         

    const postPromise = axios.post(url,order);
    postPromise.then(response=>{
        event.preventDefault();
        console.log(response);
        
    });

return true ;
}
