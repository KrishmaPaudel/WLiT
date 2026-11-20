// form events
const form = document.querySelector("#loginForm");
console.log("Form element:", form);

// submit event
form.addEventListener("submit", function (event) {
  event.preventDefault(); //it prints the information entered by the user in console when they submit
  console.log("Form submitted");

  const username = document.querySelector("#username");
  const password = document.querySelector("#password");

  console.log("Username:", username.value);
  console.log("Password:", password.value);
  form.reset();
});


//window Events in index2.html 