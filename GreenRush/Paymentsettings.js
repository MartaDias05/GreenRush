function hovering_effect(value){
    document.getElementById(value).style.transform = 'scale(1.07)';
}
function reset_hovering_effect(value){
    document.getElementById(value).style.transform = 'scale(1.0)';
}


function updateButtonHref() {
    // Get the value from localStorage
    const localStorageValue = localStorage.getItem('acctype');

    // Get the button element
    const button = document.getElementById('leaveSettings');

    // Check the localStorage value and update the href accordingly
    if (localStorageValue === 'courier') {
        button.href = '';
    } else if (localStorageValue === 'restaurant') {
        button.href = '';
    } else {
        // Default href if the localStorage value is not recognized
        button.href = 'index.html';
    }
}