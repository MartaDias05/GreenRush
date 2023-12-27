console.log(document.URL);
console.log(localStorage.getItem('selectedProduct'));


selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
selectedRestaurant = JSON.parse(localStorage.getItem('selectedRestaurant'));


document.getElementById('goBack').innerHTML += `
<div class="container" style="padding-top: 40px; padding-bottom: 40px; "> 

    <div id="${selectedProduct.id}" onclick="goToRestaurantDetails()" class="voltar">
        <div class="arrow"><i class="fa-solid fa-arrow-left"></i> Voltar a ${selectedRestaurant.name}
    </div>

</div>
`;

document.getElementById('product-body').innerHTML += `

<div class="container">
    <div class="row">
        <div class="col-md-5">
            <img src="${selectedProduct.image}" class="img-fluid" alt="Image" style="border-radius: 20px;">
        </div>
        <div class="col-md-4">
            <div>
                <h2 style="font-weight: bold; ">
                    ${selectedProduct.name}

                </h2>
            </div>
            <p style="color: rgb(128, 128, 128)">
                <span id="price value="${selectedProduct.price}">€${selectedProduct.price}</span>
            </p>
            <p>
                ${selectedProduct.description}
            </p>
                <div class="button-container">
                    <div class="coment" style="margin-top: 2.3rem;">
                        <button id="coment-btn" style="border: 0; border-radius: 50px; gap:10px; font-weight: bold; height: 35px; width: 110px; ">
                            <i class="fa-solid fa-thumbs-up"></i>  92% (125)
                        </button>

                    </div>
                    <div class="input-group" style="width: 110px;">
                        <button class="btn btn-success quantity-button" onclick="decreaseQuantity()">-</button>
                        <input id="quantityInput" type="text" class="form-control text-center" value="0" readonly>
                        <button class="btn btn-success quantity-button" onclick="increaseQuantity()">+</button>
                    </div>
                </div>

                <div class="btn-add" style="padding-top: 20px;">
                    <button id="checkout-btn" type="button" class="btn btn-outline-dark" onclick="addToCart('${selectedProduct.image}', '${selectedProduct.name}', '${selectedProduct.id}','${selectedProduct.price}')">Add 1 to order · €${selectedProduct.price}</button>
                </div>
        </div>
    </div>
</div>
    <hr>

`;