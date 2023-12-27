function addUser(){
    event.preventDefault();

    var userNameInput = document.getElementById('username-created').value;
    var passwordInput = document.getElementById('password-created').value;
    var locationInput = document.getElementById('location-created').value;

    // Retrieve the existing user data from local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Add a new user to the array
    var user = {
        username: userNameInput,
        password: passwordInput,
        location: locationInput,
        bio: ''
    };
    users.push(user);

    // Save the updated user array back to local storage
    localStorage.setItem('users', JSON.stringify(users));

    console.log('user added');
    location.replace('login.html');
}

function validateForm() {
    event.preventDefault();

    var userNameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    // Retrieve the user array from local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the specified username
    var user = users.find(u => u.username === userNameInput);

    if (user === undefined) {
    } else if (userNameInput === user.username && passwordInput === user.password) {
        location.replace('index.html');
    } else {
        alert('Wrong password OR invalid username!');
    }
}

