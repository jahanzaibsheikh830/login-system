var userName = [];
var userEmail = [];
var userPassword = [];
var userPhone = [];
var userGender = [];
document.getElementById('user-info').style.display = "none";
document.getElementById('login-form').style.display = "none";
function getData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    email = email.toLowerCase();
    var password = document.getElementById('password').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;

    if (userEmail.indexOf(email) === -1) {
        userName.push(name)
        userEmail.push(email)
        userPassword.push(password)
        userPhone.push(phone)
        userGender.push(gender)
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById('phone').value = "";                
        document.getElementById('success').innerHTML = `
        <p>You have successfully registered <button onclick="login()">Login</button></p>`
        console.log(userEmail)
        console.log(userPassword)
    }
    else {
        document.getElementById('fail').innerHTML = "User Already Registered";
    }
}

function loginUser(){
    var uEmail = document.getElementById('uEmail').value;
    var uPassword = document.getElementById('uPassword').value;
    uEmail = uEmail.toLowerCase();
    var i = userEmail.indexOf(uEmail);
    if(userEmail.indexOf(uEmail) === -1){
        document.getElementById('er').innerHTML = "Please Enter Valid Email";
    }
    else if (userPassword[i] != uPassword ) {
        document.getElementById('per').innerHTML = "Please Enter Valid Password";  
    }
    else{
        var currentName = userName[i];
        var currentPhone = userPhone[i];
        var currentGender = userGender[i];
        document.getElementById('uEmail').value = "";
        document.getElementById('uPassword').value = "";
        document.getElementById('forms').style.display = "none";
        document.getElementById('user-info').style.display = "block";
        document.getElementById('login-form').style.display = "none";
        document.getElementById('userN').innerHTML = "Welcome: "  + currentName;
        document.getElementById('userE').innerHTML = "Email: " + uEmail;
        document.getElementById('userP').innerHTML = "Phone No: " + currentPhone;
        document.getElementById('userG').innerHTML = "Gender: " + currentGender;        
    }
}
function login(){
    document.getElementById('login-form').style.display = "block";
    document.getElementById('forms').style.display = "none";
}
function logout(){
    document.getElementById('forms').style.display = "block";
    document.getElementById('user-info').style.display = "none";

}