const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});

const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username.length < 3) {
    showMessage("Username must be at least 3 characters.", "red");
    return;
  }
  if (!email.includes("@")) {
    showMessage("Invalid email format.", "red");
    return;
  }
  if (password.length < 6) {
    showMessage("Password must be at least 6 characters.", "red");
    return;
  }

  showMessage("Registration successful!", "green");
});

form.addEventListener("reset", () => {
  showMessage("", "black");
});

function showMessage(text, color) {
  message.innerText = text;
  message.style.color = color;
}

const outerDiv = document.getElementById("outerDiv");
const innerBtn = document.getElementById("innerBtn");

outerDiv.addEventListener("click", () => {
  console.log("Div Clicked (Bubbling)");
});

innerBtn.addEventListener("click", (e) => {
  console.log("Button Clicked (Bubbling)");

});

outerDiv.addEventListener("click", () => {
  console.log("Div Clicked (Capturing)");
}, { capture: true });

innerBtn.addEventListener("click", () => {
  console.log("Button Clicked (Capturing)");
}, { capture: true });
