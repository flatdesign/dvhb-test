var email = document.querySelector(".main-form__email");
var emailInput = document.querySelector(".main-form__email input");
var password = document.querySelector(".main-form__password");
var passwordInput = document.querySelector(".main-form__password input");
var eye = document.querySelector(".main-form__password--eye");

emailInput.addEventListener("keypress", function () {
  email.classList.add("active");
});

passwordInput.addEventListener("keypress", function () {
  password.classList.add("active");
});

eye.addEventListener("click", function () {
  if (eye.classList.contains("visible")) {
    passwordInput.setAttribute("type", "text");
    eye.classList.remove("visible");
    eye.classList.add("invisible");
  } else {
    passwordInput.setAttribute("type", "password");
    eye.classList.remove("invisible");
    eye.classList.add("visible");
  }
});