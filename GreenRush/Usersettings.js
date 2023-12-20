function hovering_effect(value){
    document.getElementById(value).style.transform = 'scale(1.07)';
}
function reset_hovering_effect(value){
    document.getElementById(value).style.transform = 'scale(1.0)';
}

function limitAndDisableRows(textarea, maxRows) {
    var rows = textarea.value.split('\n').length;
    
    if (rows > maxRows) {
        var truncatedText = textarea.value.split('\n').slice(0, maxRows).join('\n');
        textarea.value = truncatedText;
    }

    if (rows >= maxRows) {
        textarea.setAttribute("disabled", "disabled");
    } else {
        textarea.removeAttribute("disabled");
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");

    // Toggle the input type between "password" and "text"
    passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
}

function saveAll() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;
    var bioInput = document.getElementById("bio").value;

    // Retrieve the existing user object from local storage
    var existingUser = JSON.parse(localStorage.getItem('users')) || {};

    // Update the user object with new values
    existingUser[0].username = usernameInput;
    existingUser[0].password = passwordInput;
    existingUser[0].bio = bioInput;

    // Save the updated user object back to local storage
    localStorage.setItem('users', JSON.stringify(existingUser));

    console.log("usernameInput:", usernameInput);
    console.log("passwordInput:", passwordInput);
    console.log("bioInput:", bioInput);
}

function getAll() {
    // Retrieve the user object from local storage
    var user = JSON.parse(localStorage.getItem('users')) || {};

    // Set values in the form based on the user object
    document.getElementById('username').value = user[0].username || '';
    document.getElementById('password').value = user[0].password || '';
    document.getElementById('bio').value = user[0].bio || '';

    console.log(user.username);
    console.log(user.password);
    console.log(user.bio);
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

getAll()