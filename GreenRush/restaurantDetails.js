console.log(document.URL);
let restaurantDetFI = "";
let restaurantDetP4Y = "";


//Fecth the selected restaurant
selectedRestaurant = JSON.parse(localStorage.getItem('selectedRestaurant'));
console.log(selectedRestaurant);

let restaurantClassName = selectedRestaurant.name.replace(/\s+/g, '-');

document.getElementById('banner').classList.add('banner' + restaurantClassName);
document.getElementById('header-restaurant-name').innerHTML = selectedRestaurant.name;
document.getElementById('restaurant-info').innerHTML = selectedRestaurant.bio;


for (let featuredItem of selectedRestaurant.featuredItems){
    console.log(featuredItem.name);
    restaurantDetFI += `
        <div id="${featuredItem.id}" class="listings-grid-element" onclick="loadProduct('${featuredItem.id}')">
            <div class="image">
                <img src="${featuredItem.image}" alt="${featuredItem.id}" style="height: 180px; width: 100%; object-fit: cover; border-radius: 20px; overflow: hidden;" id="${featuredItem.name}" onmouseenter="hovering_effect('${featuredItem.name}')" onmouseleave="reset_hovering_effect('${featuredItem.name}')">
            </div>
            <div style="padding: 1rem 0; margin-top: 1rem; display: flex; align-items: center; border-bottom: 1px solid #ddd;" class="text">
                <div class="text-title">
                    <h5>${featuredItem.name}</h5>
                    <div class="info">
                        <span style="font-size: small; color: rgb(84, 84, 84);">€${featuredItem.price}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
};

for (let p4yItem of selectedRestaurant.pickedForYou){
    console.log(p4yItem.name);
    restaurantDetP4Y += `
        <div id="${p4yItem.id}" class="listings-grid-element" onclick="loadProduct('${p4yItem.id}')">
            <div class="image">
                <img src="${p4yItem.image}" alt="${p4yItem.id}" style="height: 180px; width: 100%; object-fit: cover; border-radius: 20px; overflow: hidden;" id="${p4yItem.name}" onmouseenter="hovering_effect('${p4yItem.name}')" onmouseleave="reset_hovering_effect('${p4yItem.name}')">
            </div>
            <div style="padding: 1rem 0; margin-top: 1rem; display: flex; align-items: center; border-bottom: 1px solid #ddd;" class="text">
                <div class="text-title">
                    <h5>${p4yItem.name}</h5>
                    <div class="info">
                        <span style="font-size: small; color: rgb(84, 84, 84);">€${p4yItem.price}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

document.getElementById('FI').innerHTML += restaurantDetFI;
document.getElementById('P4Y').innerHTML += restaurantDetP4Y;
     

function loadProduct(productID) {
    console.log(productID);

    // Find the restaurant in the JSON data based on its name
    for(item of selectedRestaurant.featuredItems){
        console.log(item);

        if (item.id === productID) {
            // Redirect to "restaurantDetails.html"
            location.replace("productDetails.html");
    
            // Store the selected restaurant data in localStorage for use in the next page
            localStorage.setItem('selectedProduct', JSON.stringify(item));
        }
    }

    for(item of selectedRestaurant.pickedForYou){
        console.log(item);

        if (item.id === productID) {
            // Redirect to "restaurantDetails.html"
            location.replace("productDetails.html");
    
            // Store the selected restaurant data in localStorage for use in the next page
            localStorage.setItem('selectedProduct', JSON.stringify(item));
        }
    }

    
}