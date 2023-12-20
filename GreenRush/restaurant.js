function addProduct(){

    productImg = document.getElementById('productImage').value;
    productName = document.getElementById('productName').value;
    productPrice = document.getElementById('productPrice').value;

if( productName== "" || productPrice== ''){
    alert('You need to insert a product name and a product price.');
}
else{
    document.getElementById('listings-grid').innerHTML += '<div id="menuBenshi" class="listings-grid-element" onclick="goToMenuBenshi()">' + 
    '<div class="image">' +
    '<img src="'+productImg+'" style="height: 180px; width: 100%; object-fit: cover; border-radius: 20px; overflow: hidden;">' +
    '</div>' +
    '<div style="padding: 1rem 0; margin-top: 1rem; display: flex; align-items: center; border-bottom: 1px solid #ddd;" class="text">'+
    '<div class="text-title">'+
    '<h5>'+productName+'</h5>' +
    '<div class="info">' +
    '<span style="font-size: small; color: rgb(84, 84, 84);">€ '+productPrice+'</span>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>'
}

    
}

function closeModal(value){
var myModal=value;
myModal.hide();

}