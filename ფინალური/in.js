("use strict");

const formElement = document.getElementById("registration");
formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const errors = {};

  // ------------------->  username  <-------------------
  
  let usernameValue = document.getElementById("username").value;

  if (usernameValue == "") {
    errors.username = "Username field cann't be empty";
  }

  //  ------------------> password <----------------------

  let passwValue = document.getElementById("password").value;
  let passw2Value = document.getElementById("password2").value;
  if (passwValue == "") {
    errors.passw = "password field cann't be empty";
  }
  if (passwValue !== passw2Value) {
    errors.passw2 = "passwords do not match";
  }
  //------------------->  checkBox <----------------------

  let checkInput = document.getElementById("agree").checked;
  if (!checkInput) {
    errors.check = "You must agree our terms & conditions";
  }
  formElement.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = "";
  });

  //-------------> errorrs <-----------------

  for (let item in errors) {
    console.log(item);

    let errorPElement = document.getElementById("error-" + item);
    console.log(errorPElement);

    if (errorPElement) {
      errorPElement.innerText = errors[item];
    }
  }

  console.log(errors);

  if (Object.keys(errors).length == 0) {
    formElement.submit();
  }
});

//-----------> Show Hide Password <------------------

let passwShow = document.getElementById("password");
let icon = document.getElementById("showIcon");

icon.addEventListener("click", function () {
  if (passwShow.type == "password") {
    passwShow.setAttribute("type", "text");
    icon.classList.remove("bx-show-alt");
    icon.classList.add("bx-hide");
  } else {
    passwShow.setAttribute("type", "password");
    icon.classList.remove("bx-hide");
    icon.classList.add("bx-show-alt");
  }
});

// ------------> Email Validation <------------

let email = document.getElementById("email");
function ValidationEmail() {
  let emailValue = document.getElementById("email").value;
  let emailErrorText = document.getElementById("emailError");
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailValue.match(regex)) {
    emailErrorText.textContent = "Your email is valid";
    emailErrorText.style.color = "green";
  } else {
    emailErrorText.textContent = "Your email is invalid";
    emailErrorText.style.color = "red";
  }
}

email.addEventListener("keyup", ValidationEmail);