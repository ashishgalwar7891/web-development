    document.getElementById("category").oninput=()=>{

    if(category.value=="Main Course"){
        document.getElementById("itemname").innerHTML=`
        <option value="Paneer Paratha" selected>Paneer Paratha</option>
        <option value="Special Thali">Special Thali</option>
        <option value="Pizza Paratha">Pizza Paratha</option>`;

    }
    else if(category.value=="Beverages"){
        document.getElementById("itemname").innerHTML=`
        <option value="Water" selected>Water</option>
        <option value="Coca Cola">Coca Cola</option>
        <option value="Pepsi">Pepsi</option>
        <option value="Green Tea">Green Tea</option>`;

    }
    else if(category.value=="Staters")
    {
        document.getElementById("itemname").innerHTML=`
        <option value="Fruit pizza" selected>Fruit pizza</option>
        <option value="Veg Grilled Pizza">Veg Grilled Pizza</option>
        <option value="Mushroom Pizza">Mushroom Pizza</option>
        <option value="Cheese Burst pizza">Cheese Burst pizza</option>
        <option value="Mexican Delight pizza">Mexican Delight pizza</option>`;

    }
};



document.getElementById("itemname").oninput=()=>{
    const category=document.getElementById("itemname");
    const price=document.getElementById("price");

    if(category.value=="Peppay Paneer"){
        price.value="250";
    }
    else if(category.value=="Veg Grilled Pizza"){
        price.value="200";
    }
    else if(category.value=="Mushroom Pizza"){
        price.value="350";
    }
    else if(category.value=="Paneer Paratha"){
        price.value="150";
    }
    else if(category.value=="Special Thali"){
        price.value="350";
    }
    else if(category.value=="Pizza Paratha"){
        price.value="200";
    }
    else if(category.value=="Water"){
        price.value="10";
    }
    else if(category.value=="Coca Cola"){
        price.value="60";
    }
    else if(category.value=="Pepsi"){
        price.value="56";
    }
    else if(category.value=="Green Tea"){
        price.value="50";
    }
    else if(category.value=="Fruit pizza"){
        price.value="200";
    }
    else if(category.value=="Cheese Burst pizza"){
        price.value="300";
    }
    else if(category.value=="Mexican Delight pizza"){
        price.value="350";
    }
};

document.getElementById("quantity").oninput=()=>{
    const amount=document.getElementById("amount");
    const price=document.getElementById("price");
    const quantity=document.getElementById("quantity");
    const totalamount=document.getElementById("totalamount");
    amount.value=price.value*quantity.value;
    return amount.value;
};
document.getElementsByClassName("orderbutton")[0].onclick=()=>{
    // Display value in total amount
    const amount=document.getElementById("amount");
    const price=document.getElementById("price");
    const quantity=document.getElementById("quantity");
    const totalamount=document.getElementById("totalamount");
    amount.value =price.value*quantity.value;
    return totalamount.value=amount.value;

};
document.getElementsByClassName("plusbutton")[0].onclick=()=>{
    let x=document.getElementsByClassName("details");
    for (const i of x) {
        i.style.display="inline";
    };
};
