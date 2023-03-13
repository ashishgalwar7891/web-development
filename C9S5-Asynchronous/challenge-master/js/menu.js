//Write code to get menu data from the json-server using axios API
const url = " http://localhost:3051/menu";
//Write code to load menu data using window onload event: getPromise is the promise result obained from Axios call
let getPromise = axios.get(url);
let a = document.getElementById("div");
window.onload = () => getPromise.then((response) => {
    response.data.forEach(p => {
        a.innerHTML += ` ${p.id}  -${p.itemName}  - ${p.price} <br>`;
    })
});
//Write code to filter the menu item from list
const category = document.getElementById('category');
category.addEventListener('change', function (e) {

    findItems(category.value);

});
function findItems(categoryName) {
    a.innerHTML = "";
    if (categoryName == "All") {
        getPromise.then((response) => {

            response.data.forEach(p => {
                
                a.innerHTML += `${p.id} - ${p.itemName}- ${p.price} <br>`;
            })
        })
    }
    else if (categoryName == "Beverages") {

        getPromise.then((response) => {

            response.data.forEach(p => {
                if (p.category == "Beverages") {
                a.innerHTML += `${p.id} - ${p.itemName}- ${p.price} <br>`
                }
            })
        })
    }
    else if (categoryName == "Starters") {
        getPromise.then((response) => {

            response.data.forEach(p => {

                if (p.category == "Starters") {
                a.innerHTML += `${p.id} - ${p.itemName}- ${p.price} <br>`
                }
            })
        })
    }
    else if (categoryName == "Main Course") {
        getPromise.then((response) => {

            response.data.forEach(p => {
                if (p.category == "Main Course") {
                    a.innerHTML += `${p.id} - ${p.itemName}- ${p.price} <br>`
                    }
            })
        })
    }
    else if (categoryName == "Desserts") {
        getPromise.then((response) => {

            response.data.forEach(p => {
                if (p.category == "Desserts") {
                    a.innerHTML += `${p.id} - ${p.itemName}- ${p.price} <br>`
                    }
                
            })
        })
    }


}
