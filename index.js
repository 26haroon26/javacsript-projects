let page = location.href.split("/");
page = page[page.length - 1];

let users = [];
let loggedin = {};
let userIndex = 0;

function getAllUsers() {
  let userInStringForm = localStorage.getItem("users");
  let loggedinForm = localStorage.getItem("logged in");
  loggedin = JSON.parse(loggedinForm) || {};
  users = JSON.parse(userInStringForm) || [];
}
getAllUsers();

function diplayDashboard() {
  if (page === "home.html") {
    let userName = document.getElementById("userName");
    let userNumber = document.getElementById("userNumber");
    let userAddress = document.getElementById("userAddress");
    let userEmail = document.getElementById("userEmail");

    userName.innerText = loggedin.user_firstname;
    userNumber.innerText = loggedin.user_no;
    userAddress.innerText = loggedin.user_address;
    userEmail.innerText = loggedin.user_email;
  }
}
diplayDashboard();

function logincheck() {
  let logindata = localStorage.getItem("logged in");

  if (page === "login.html" || page === "index.html") {
    if (logindata) {
      window.location.href = "./home.html";
    }
  }
}
logincheck();

function signInCheck() {
  let logindata = localStorage.getItem("logged in");
  if (page === "home.html" && !logindata) {
    window.location.href = "./index.html";
  }
}
signInCheck();


function signup() {
  let firstname = document.getElementById("firstname");
  let no = document.getElementById("no");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmpassword = document.getElementById("confirmpassword");
  let address = document.getElementById("address");
  let alertsign = document.getElementById("alertsign");
  let mySignAlert;

  if (password.value === confirmpassword.value) {
    let newUser = {
      user_firstname: firstname.value,
      user_no: no.value,
      user_email: email.value,
      user_password: password.value,
      user_address: address.value,
    };
    for (let i = 0; i < users.length; i++) {
      if (users[i].user_email === email.value) {
        mySignAlert = setTimeout(function () {
          alertsign.innerText = "Email already exists";
        }, 500);
        alertsign.innerText = "";
        return;
      }
    }
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "./login.html";
  } else {
    mySignAlert = setTimeout(function () {
        alertsign.innerText = "Password does not match";
    }, 500);
    alertsign.innerText = "";
  }
}

function login() {
  let login_email = document.getElementById("login_email").value;
  let login_password = document.getElementById("login_password").value;
  let isMatch = false;
  let alertsign = document.getElementById("alertlogin");
  let mySignAlert;
  for (let i = 0; i < users.length; i++) {
    if (users[i].user_email === login_email) {
      if (users[i].user_password === login_password) {
        localStorage.setItem("logged in", JSON.stringify(users[i]));
        isMatch = true;
        window.location.href = "./home.html";
      }
    }
  }

  if (!isMatch) {
    mySignAlert = setTimeout(function () {
      alertsign.innerText = "Your email or password is incorrect";
    }, 500);
    alertsign.innerText = "";
  }
}
function logout() {
  localStorage.removeItem("logged in");
  window.location.href = "./login.html";
}

function eye() {
  let password = document.getElementById("password").getAttribute("type");

  if (password === "password") {
    document.getElementById("icon").classList.remove("fa-eye");
    document.getElementById("icon").classList.add("fa-eye-slash");
    document.getElementById("password").setAttribute("type", "text");
  } else {
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("icon").classList.remove("fa-eye-slash");
    document.getElementById("icon").classList.add("fa-eye");
  }
}

//w3schools

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//////

let updateName = (document.getElementById("updateName").value =
  loggedin.user_firstname);
let updateEmail = (document.getElementById("updateEmail").value =
  loggedin.user_email);
let updateNumber = (document.getElementById("updateNumber").value =
  loggedin.user_no);
let updateAddress = (document.getElementById("updateAddress").value =
  loggedin.user_address);

function edit() {
  let updateName = document.getElementById("updateName").value;
  let updateEmail = document.getElementById("updateEmail").value;
  let updateNumber = document.getElementById("updateNumber").value;
  let updateAddress = document.getElementById("updateAddress").value;
  let loggedinUpdated;
  let loggedinUpdatedData;
  for (let i = 0; i < users.length; i++) {
    if (users[i].user_email === loggedin.user_email) {
      users[i].user_firstname = updateName;
      users[i].user_no = updateNumber;
      users[i].user_email = updateEmail;
      users[i].user_address = updateAddress;
      localStorage.setItem("logged in", JSON.stringify(users[i]));
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
  loggedinUpdated = localStorage.getItem("logged in", loggedinUpdated);
  loggedinUpdatedData = JSON.parse(loggedinUpdated);

  document.getElementById("userName").innerText =
    loggedinUpdatedData.user_firstname;
  document.getElementById("userEmail").innerText =
    loggedinUpdatedData.user_email;
  document.getElementById("userNumber").innerText = loggedinUpdatedData.user_no;
  document.getElementById("userAddress").innerText =
    loggedinUpdatedData.user_address;

  modal.style.display = "none";
}
