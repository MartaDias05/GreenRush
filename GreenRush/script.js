

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the cart data from localStorage
    let cartObjects = JSON.parse(localStorage.getItem('cartObjects')) || [];

    // Update the HTML structure
    updateCartHTML(cartObjects);
});

/*function checkLogin(){
    console.log("check login called")
var user = localStorage.getItem('users')
if(user != null){
    return true;
}
else{
if(user[0].username != null && user[0].password!= null){
    return true;
}
else{
    console.log("de-mos falso L")
    return false;
}
}
}

checkLogin();

if(checkLogin()===true){
    console.log("ao menos chegou aqui")
 // Get user data from localStorage
 var user = JSON.parse(localStorage.getItem('users')) || [];

 // Get the login link and icon elements
 var loginLink = document.getElementById('login');
 var login = document.getElementById('idLink')

 // Check if a user is logged in
 if (user.length !== 0) {
    console.log("devia de mudar o texto e o link estou ca dentro")
     // Set the text to the username and remove the href attribute
     loginLink.textContent = user[0].username;
     login.removeAttribute('href');
     login.setAttribute('href','Usersettings.html')
 } else {
     // Reset the text and add the href attribute
     loginLink.textContent = 'Log in';
     login.setAttribute('href', 'login.html');
 }

}
*/

function hovering_effect(value){
    document.getElementById(value).style.transform = 'scale(1.07)';
}
function reset_hovering_effect(value){
    document.getElementById(value).style.transform = 'scale(1.0)';
}

function goToSubenshi() {
    location.replace("subenshi.html")
}

function goToMain() {
    location.replace('index.html')
}

function goToRestaurantDetails() {
    location.replace('restaurantDetails.html')
}

function goToMenuBenshi() {
    location.replace('menuBenshi.html')
}

function goToMenuKaishi() {
    location.replace('menuKaishi.html')
}

function goToFonteNova() {
    location.replace('fonteNova.html')
}

function goToMoliceiro() {
    location.replace('moliceiro.html')
}

function goToFusion() {
    location.replace('fusion.html')
}

function goToSashimiSingle() {
    location.replace('sashimi.html')
}

function goToRedEyes() {
    location.replace('redEyes.html')
}

function goToGambas() {
    location.replace('gambas.html')
}


function goToRamona(){
    location.replace('ramona.html')
}

function goToBatatas(){
    location.replace('batatas.html')
}

function goToRamonaBurger(){
    location.replace('ramonaHamburguer.html')
}

function goToVeggie(){
    location.replace('veggieHamburger.html')
}

function goToMisto(){
    location.replace('misto.html')
}

function goToRamonaOvo(){
    location.replace('ovoRamonaHamburguer.html')
}

function goToClandestino(){
    location.replace('clandestino.html')
}

function goToPrego(){
    location.replace('bitoque.html')
}

function goToFrancesinha(){
    location.replace('francesinha.html')
}

function goToCalzone(){
    location.replace('calzone.html')
}

function goToPrego(){
    location.replace('prego.html')
}

//JS for the cart:

function goToCart(){
    location.replace('cart.html')
}

function goToAddProduct(){
    location.replace('addProduct.html')
}

function goToAccept(){
    location.replace('atualization_est.html');
}

//-----------------------------SHOPPING CART-----------------------------//

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    if (shoppingCart.classList.contains('active')) {
        shoppingCart.style.right = '2rem';
    }else{
        shoppingCart.style.right = '-110%';
        
    }
}

var quantity = parseInt(localStorage.getItem('quantity')) || 0;
var quantityInput = document.getElementById('quantityInput');
updateQuantity();
console.log(quantityInput);
var priceOfProduct = parseFloat(document.getElementById('price').value);
console.log(priceOfProduct);

var totalProductPrice = 0;
var totalPrice = 0;
            
function increaseQuantity() {
    quantity++;
    updateQuantity();
    updateCheckOutBtn();
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        updateQuantity();
        updateCheckOutBtn();
    }
}

function updateQuantity() {
    quantityInput.value = quantity;

    // Save the quantity in localStorage --> This ensures that the quantity value persists through all the diferent pages
    localStorage.setItem('quantity', quantity);
}



function updateCheckOutBtn(){
    totalProductPrice = 0;
    totalProductPrice += priceOfProduct * quantity;
    document.getElementById('checkout-btn').innerHTML = 'Add ' + quantity + ' to order · €' + totalProductPrice;
    console.log(totalProductPrice);
}


//remove item from cart by pressing the trash can
function removeItemFromCart(id) {
    // Fetch the existing cart data from localStorage
    let cartObjects = JSON.parse(localStorage.getItem('cartObjects')) || [];

    // Find the index of the item with the given id
    const indexToRemove = cartObjects.findIndex(item => item.id === id);

    if (indexToRemove !== -1) {
        // Remove the item from the cartObjects array
        cartObjects.splice(indexToRemove, 1);
        // Save the updated cart data back to localStorage
        localStorage.setItem('cartObjects', JSON.stringify(cartObjects));

        // Update the HTML structure
        updateCartHTML(cartObjects);
    }

    // Additional code if you want to update total price or perform other actions
    let totalPrice = 0;
    for (let product of cartObjects) {
        totalPrice += product.price * product.quantity;
    }
    document.getElementById('cart-total').innerHTML = 'Total: €' + totalPrice;
}



function addToCart(img, name, id, price) {

    console.log(quantity);

    // Fetch the existing cart data from localStorage
    let cartObjects = JSON.parse(localStorage.getItem('cartObjects')) || [];

    // Check if the name is repeated before adding to the cart
    if (isNameRepeated(cartObjects, name)) {
        console.log('Name is repeated:', name);

        // Find the repeated item and update its quantity
        for (let i = 0; i < cartObjects.length; i++) {
            if (cartObjects[i].name === name) {
                cartObjects[i].quantity = parseInt(quantityInput.value);
                updateCartHTML(cartObjects);
                return;
            }
        }

        return;
    }

    // Update the cart data
    cartObjects.push({ "name": name, "image": img, "id": id, "price": price, "quantity": quantity });

    // Save the updated cart data back to localStorage
    localStorage.setItem('cartObjects', JSON.stringify(cartObjects));
    console.log(cartObjects)

    // Update the HTML structure
    updateCartHTML(cartObjects);
}

function updateCartHTML(cartObjects) {
    let output = "";
    let totalPrice = 0;

    for (let product of cartObjects) {
        output += `
        <div id="${product.id}" class="content" style="display: flex; align-items: center;">  
            <div class="cart-img" style="background-image: url(${product.image});"></div> 
            <div style="margin-left: 1rem;">
                <h3 style="font-size: medium;">${product.name}</h3>
                <span style="font-size: small; margin-right: 10px;" class="price">Price: ${product.price * product.quantity}</span> 
                <span style="font-size: small;" class="quantity">Qty: ${product.quantity}</span>
            </div> 
            <div style="margin-left: 2rem;" onclick="removeItemFromCart('${product.id}');"><i class="fa-solid fa-trash"></i></div> 
        </div>`;

        totalPrice += product.price * product.quantity;
    }
    // Display the total price of the cart 
    document.getElementById('cart-total').innerHTML = 'Total: €' + totalPrice;

    // Build the cart 
    document.getElementById('box').innerHTML = output;
}





/*
function addToCart(img, name, id, price) {

    console.log(quantity);

    // Fetch the existing cart data from localStorage
    let cartObjects = JSON.parse(localStorage.getItem('cartObjects')) || [];

    if (isNameRepeated(cartObjects, name)) {
        console.log('Name is repeated:', name);
        return;
    }

    // Update the cart data
    cartObjects.push({ "name": name, "image": img, "id": id, "price": price});

    // Save the updated cart data back to localStorage
    localStorage.setItem('cartObjects', JSON.stringify(cartObjects));
    console.log(cartObjects)

    // Update the HTML structure
    let output = "";
    let totalPrice = 0;

    for (let product of cartObjects) {

        output += `
        <div id="${product.id}" class="content" style="display: flex; align-items: center;">  
            <div class="cart-img" style="background-image: url(${product.image});"></div> 
                <div style="margin-left: 1rem;">
                    <h3 style="font-size: medium;">${product.name}</h3>
                    <span style="font-size: small; margin-right: 10px;" class="price">Price: ${product.price * quantity}</span> 
                    <span style="font-size: small;" class="quantity">Qty: ${quantity}</span>
                </div> 
                <div style="margin-left: 2rem;" onclick="removeItemFromCart(${product.id});"><i class="fa-solid fa-trash"></i> 
            </div> 
        </div>`;

        totalPrice += product.price
    }
    //display the total price of the cart 
    document.getElementById('cart-total').innerHTML = 'Total: €' + totalPrice;

    //Build the cart 
    document.getElementById('box').innerHTML = output;
}


*/

function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let items = document.querySelectorAll('.listings-grid-element');

    for (let i = 0; i < items.length; i++) {
        let h5Element = items[i].querySelector('h5');
        let value = h5Element.innerHTML || h5Element.innerText || h5Element.textContent;

        if (value.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}


function isNameRepeated(arr, name) {
    const seenNames = new Set();
  
    for (const obj of arr) {
      if (obj.name === name) {
        // Name is repeated
        console.log('here');
        console.log(seenNames);
        return true;
      }
  
      seenNames.add(obj.name);
    }
  
    // Name is not repeated
    return false;
}