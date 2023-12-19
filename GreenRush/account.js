var userNameInput = '';
function addUser(){
    event.preventDefault();
    
    var userNameInput = document.getElementById('username-created').value;
    var passwordInput = document.getElementById('password-created').value;
    var locationInput = document.getElementById('location-created').value;

    // Do this to add a new user to the database;
    var user = {
        username : userNameInput,
        password : passwordInput, 
        location : locationInput,  
    };

    var jsonUser = JSON.stringify(user);
    console.log(jsonUser);
    localStorage.setItem(userNameInput, jsonUser);
    console.log('user added');
    location.replace('login.html');
}


function validateForm(){
    event.preventDefault();

    userNameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;

    console.log(userNameInput);
    console.log(passwordInput);

    var user = localStorage.getItem(userNameInput);
    console.log(user);
    var data = JSON.parse(user);
    console.log(data);

    if (user == null){
        alert('That username does not exist!');
    }else if (userNameInput == data.username && passwordInput == data.password) {
        location.replace('index.html');
    }else{
        alert('Wrong password!')
    }
}



