// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import "babel-polyfill";

// \/ All of your javascript should go here \/
const form = document.querySelector("form");
const email = document.querySelector("#email");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const message = document.querySelector("#message");
const checkbox = document.querySelector("#checkbox");

const saveUserDetails = async (user) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const config = { method: "POST", body: JSON.stringify(user) };

  const response = await fetch(url, config);
  return response.json();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userDetails = {
    name: name.value,
    email: email.value,
    password: password.value,
    message: message.value,
    checkbox: checkbox.checked,
  };
  console.log(userDetails);
  saveUserDetails(userDetails)
    .then((json) => alert(`User Created|! \n ID: ${json.id}`))
    .catch((e) => console.log(e));
});

//   .catch((error) => console.warn(error));

// fetch(url, {
//   method: "POST",
//   body: JSON.stringify({}),
// }).then((x) => jason());

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
