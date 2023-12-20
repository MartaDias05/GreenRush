function checkLogin(){
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


let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    if (shoppingCart.classList.contains('active')) {
        shoppingCart.style.right = '2rem';
    }else{
        shoppingCart.style.right = '-110%';
        
    }
}

var quantity = 1;
const quantityInput = document.getElementById('quantityInput');
var priceOfProduct = parseFloat(document.getElementById('price').innerHTML);
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
}

function updateCheckOutBtn(){
    totalProductPrice = 0;
    totalProductPrice += priceOfProduct * quantity;
    document.getElementById('checkout-btn').innerHTML = 'Add ' + quantity + ' to order · €' + totalProductPrice;
    console.log(totalProductPrice);
}
//remove item from cart by pressin the trash can
function removeItemFromCart(id){    //For some reason the id is passing the hole html element. So just remove the html element itselg by doing id.remove();
    id.remove();
    totalPrice -= totalProductPrice;
    document.getElementById('cart-total').innerHTML = 'Total: €' + totalPrice;
}

function addToCart(img, name, id){

    //Check if the element already exists in cart. If it does, delete it.
    if (document.getElementById(id) != null){
        document.getElementById(id).remove();
    }

    //--- Adiciona uma nova linha ao elemento <div id="tasks"></div>
    document.getElementById('box').innerHTML += '<div id="'+id+'" class="content" style="display: flex; align-items: center;">' + 
    '<div class="cart-img" style="background-image: url(' + img + ');"></div>' + 
    '<div style="margin-left: 1rem;">' + 
    '<h3 style="font-size: medium;">' + name + '</h3>' + 
    '<span style="font-size: small; margin-right: 10px;" class="price">Price: ' + totalProductPrice + '</span>' +
    '<span style="font-size: small;" class="quantity">Qty: ' + quantity + '</span>' +
    '</div>' + 
    '<div style="margin-left: 2rem;" onclick="removeItemFromCart('+id+');"><i class="fa-solid fa-trash"></i>' +
    '</div>' +
    '</div>';

    //Calculate the total price of the cart & display it
    totalPrice = 0;
    totalPrice += totalProductPrice;
    document.getElementById('cart-total').innerHTML = 'Total: €' + totalPrice;

}

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

