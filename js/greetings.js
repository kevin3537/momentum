const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginInput");
const greetings = document.querySelector("#greetings");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginInput.value = "";
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greetings.innerText = `Hello, ${username}.`;
}

if (localStorage.getItem(USERNAME_KEY) === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greetings.innerText = `Hello, ${localStorage.getItem(USERNAME_KEY)}.`;
}
