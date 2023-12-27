//-------------------FETCH RESTAURANTS FROM JSON FILE-------------------//
let restaurantDetFI = "";
let restaurantDetP4Y = "";
let restaurants = "";
let restaurant = "";
const urlParams = new URLSearchParams(window.location.search);
const jsonFileName = urlParams.get('json');

function loadRestaurant(restaurantName, jsonFileName) {
    let realRestaurantName = restaurantName;
    // Find the restaurant in the JSON data based on its name
    let selectedRestaurant = restaurants.find(restaurant => restaurant.name === realRestaurantName);

    if (selectedRestaurant) {
        // Redirect to "restaurantDetails.html" with the specified JSON filename
        location.replace(`restaurantDetails.html?json=${jsonFileName}`);

        // Store the selected restaurant data in localStorage for use in the next page
        localStorage.setItem('selectedRestaurant', JSON.stringify(selectedRestaurant));
    }
}

function loadRestaurantData(jsonFileName, targetElementId) {
    let http = new XMLHttpRequest();

    http.open('get', jsonFileName, true);

    http.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Update the global restaurants variable
            restaurants = JSON.parse(this.responseText);
            displayRestaurants(restaurants, targetElementId);
        }
    };

    http.send();
}

//New xmlhttp object that holds all methods and properties
let http = new XMLHttpRequest();

loadRestaurantData('index.json', 'nearYouGrid');

// Load special offers
loadRestaurantData('specialOffers.json', 'specialoffergrid');
//fetch the request
function displayRestaurants(restaurants, targetElementId) {
    let output = "";

    for (let restaurant of restaurants) {


            output += `
            
            <div id="${restaurant.name}" onclick="loadRestaurant('${restaurant.name}', '${restaurant.jsonFileName}')" class="listings-grid-element">
                <div class="image">
                    <img src="${restaurant.image}" alt="${restaurant.name}" style="height: 180px; width: 100%; object-fit: cover; border-radius: 20px; overflow: hidden; cursor: pointer;" id="${restaurant.name}" onmouseenter="hovering_effect('${restaurant.name}')" onmouseleave="reset_hovering_effect('${restaurant.name}')">
                </div>
                <div style="padding: 1rem 0; margin-top: 1rem; display: flex; align-items: center; border-bottom: 1px solid #ddd;" class="text">
                    <div class="text-title">
                        <h5>${restaurant.name}</h5>
                        <div class="info">
                            <span style="font-size: small; color: rgb(84, 84, 84);">${restaurant.description}</span>
                        </div>
                    </div>
                    <div class="rating" style="font-size: 0.8rem; margin-left: auto; background-color:rgb(231, 231, 231); border-radius: 50%; width: 30px; height: 30px; justify-content:center; align-items:center; display: flex;">
                        <span>${restaurant.rating}</span>
                    </div>
                </div>
            </div>
            
            `;


        };

        document.getElementById(targetElementId).innerHTML = output;
        
        
    };

