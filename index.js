
let users = []
let loggedin = []
function getAllUsers() {
    let userInStringForm = localStorage.getItem("users");
    let loggedinForm = localStorage.getItem("loggedin");
    users = JSON.parse(userInStringForm) || [];
    loggedin = JSON.parse(loggedinForm) || [];
    console.log(users);
    console.log(loggedin);
}
getAllUsers();

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

