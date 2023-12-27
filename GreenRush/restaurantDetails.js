//-------------------FETCH RESTAURANTS FROM JSON FILE-------------------//


//New xmlhttp object that holds all methods and properties
let http = new XMLHttpRequest();

http.open('get', 'restaurants.json', true);

//send the request
http.send()

//fetch the request
http.onload = function(){
    if (this.readyState == 4 && this.status == 200){ //If the response is successful
        //Parse the json data and convert it to a js array
        let restaurant = JSON.parse(this.responseText);
        
        //empty variable to store the incoming data
        let output = "";

        //loop through the restaurants and add an html strucutre to the page:
        for (let restaurant of restaurant){
            output += `
            
            <div id="${restaurant.name}" onclick="goTo${restaurant.name}()" class="listings-grid-element">
                <div class="image">
                    <img src="${restaurant.image}" alt="${restaurant.name}" style="height: 180px; width: 100%; object-fit: cover; border-radius: 20px; overflow: hidden; cursor: pointer;" id="subenshi" onmouseenter="hovering_effect('subenshi')" onmouseleave="reset_hovering_effect('subenshi')">
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

        document.getElementById('nearYouGrid').innerHTML = output;
        console.log(document.getElementById('nearYouGrid').innerHTML = output);
    };
};