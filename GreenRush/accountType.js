function hovering_effect(value){
    document.getElementById(value).style.transform = 'scale(1.07)';
}
function reset_hovering_effect(value) {
    const element = document.getElementById(value);

    // Check if the element exists before accessing its style
    if (element) {
        element.style.transform = 'scale(1.0)';
    }
}

function beClient(){
localStorage.setItem('acctype','client')
}
function beCourier(){
localStorage.setItem('acctype','courier')
}
function beRestaurant(){
localStorage.setItem('acctype','restaurant')
}

function updateButtonHref() {
    // Get the value from localStorage
    const localStorageValue = localStorage.getItem('acctype');

    // Get the button element
    const button = document.getElementById('leaveSettings');
    changeButtonStyle(localStorageValue)
    // Check the localStorage value and update the href accordingly
    if (localStorageValue === 'courier') {
        button.href = 'est_index.html';
    } else if (localStorageValue === 'restaurant') {
        button.href='restaurant.html';
    } else {
        // Default href if the localStorage value is not recognized
        button.href = 'index.html';
    }
}

document.getElementById('leaveSettings').addEventListener('click', function() {
    // Call the function to update the button href when the button is clicked
    updateButtonHref();
    
    // Navigate to the updated href
    window.location.href = document.getElementById('leaveSettings').href;
});

function changeButtonStyle(value) {
    // Get the button element
    const button = document.getElementById(value);

    // Remove onmouseenter and onmouseleave events
    button.removeEventListener('mouseenter', hovering_effect);
    button.removeEventListener('mouseleave', reset_hovering_effect);

    // Change border color and text color
    button.style.border = '1px solid #ba4c68'; // Change to your desired border color
    button.style.color = '#ba4c68'; // Change to your desired text color
}
function resetButtonStyle(buttonId) {
    // Get the button element
    const button = document.getElementById(buttonId);

    // Restore onmouseenter and onmouseleave events
    button.addEventListener('mouseenter', hovering_effect);
    button.addEventListener('mouseleave', reset_hovering_effect);

    // Reset border color and text color to default
    button.style.border = '1px solid black'; // Default border color
    button.style.color = 'black'; // Default text color
}

// Function to reset other buttons
function resetOtherButtons(currentButtonId) {
    // List of button IDs
    const buttonIds = ['client', 'restaurant', 'courier'];

    // Reset styles for other buttons
    buttonIds.forEach(buttonId => {
        if (buttonId !== currentButtonId) {
            resetButtonStyle(buttonId);
        }
    });
}
function typeButton(buttonId){
changeButtonStyle(buttonId)
resetOtherButtons(buttonId)
if(buttonId==='client'){
    beClient();
}
if(buttonId==='courier'){
    beCourier();
}
if(buttonId==='restaurant'){
    beRestaurant();
}
}

updateButtonHref()