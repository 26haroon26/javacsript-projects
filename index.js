
let page = location.href.split("/");
page = page[page.length - 1];

let users = []
let loggedin = {}
function getAllUsers() {
    let userInStringForm = localStorage.getItem("users");
    let loggedinForm = localStorage.getItem("logged in");
    users = JSON.parse(userInStringForm) || [];
    loggedin = JSON.parse(loggedinForm) || {};
    console.log(users);
    console.log(loggedin);
}
getAllUsers();

function diplayDashboard() {
    if (page === "home.html") {

        let userName = document.getElementById('userName');
        let userAddress = document.getElementById('userAddress');
        let userEmail = document.getElementById('userEmail');

        userName.innerText =  loggedin.user_firstname + loggedin.user_lastname;
        userAddress.innerText =  loggedin.user_address;
        userEmail.innerText =  loggedin.user_email;
        console.log("loggedin.user_firstname: ", loggedin);
    }
}
diplayDashboard();



function logincheck() {
    let logindata = localStorage.getItem("logged in");

    if (page === "login.html" || page === "index.html") {

        if (logindata) {
            window.location.href = "./home.html";
        }

    } else {
        if (!logindata) {
            window.location.href = "./login.html";
        }
    }

    console.log(logindata);
    console.log(location.href);
}
logincheck();
function signupCheck() {
    let signupdata = localStorage.getItem("users");

    if (page === "index.html") {
            
            if (signupdata) {
                window.location.href = "./login.html";
            }
    
        } else {
            if (!signupdata) {
                window.location.href = "./signup.html";
            }
        }
}
signupCheck();
function signup() {
    // let message = document.getElementsById('Thanks');
    let firstname = document.getElementById('firstname');
    let lastname = document.getElementById('lastname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmpassword = document.getElementById('confirmpassword');
    let address = document.getElementById('address');

    if (password.value === confirmpassword.value) {
        // get details from signup inputs
        let newUser = {
            user_firstname: firstname.value,
            user_lastname: lastname.value,
            user_email: email.value,
            user_password: password.value,
            user_address: address.value,
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].user_email === email.value) {
                alert("Email already exists");
                return;
            }
        }
        users.push(newUser)

        localStorage.setItem("users", JSON.stringify(users))
        window.location.href = "./login.html";
    }
    else {
        alert("Password does not match");
    }
    // message.innerHTML = "Thanks" +" "+lastname.value + " " + "is successfully sign up";
    // console.log(message);

}

function login() {
    let login_email = document.getElementById('login_email').value;
    let login_password = document.getElementById('login_password').value;

    let isMatch = false;

    for (let i = 0; i < users.length; i++) {

        if (users[i].user_email === login_email) {

            if (users[i].user_password === login_password) {
                localStorage.setItem("logged in", JSON.stringify(users[i]))
                isMatch = true;
                window.location.href = "./home.html";
                break
            }
        }
    }

    if (!isMatch) {
        alert("your email or password is incorrect");
    }
}
function logout() {

    localStorage.removeItem("logged in");
    window.location.href = "./login.html";

}
