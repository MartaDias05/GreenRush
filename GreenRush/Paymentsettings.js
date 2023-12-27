function hovering_effect(value){
    document.getElementById(value).style.transform = 'scale(1.07)';
}
function reset_hovering_effect(value){
    document.getElementById(value).style.transform = 'scale(1.0)';
}


function updateButtonHref() {
    const localStorageValue = localStorage.getItem('acctype');
    const button = document.getElementById('leaveSettings');

    if (localStorageValue === 'courier') {
        button.onclick = function() {
            location.href = 'est_index.html';
        };
    } else if (localStorageValue === 'restaurant') {
        button.onclick = function() {
            location.href = 'restaurant.html';
        };
    } else {
        button.onclick = function() {
            location.href = 'index.html';
        };
    }
}

updateButtonHref()