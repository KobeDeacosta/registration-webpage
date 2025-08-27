document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const firstName = document.getElementById("firstname").value;
    const middleName = document.getElementById("middlename").value;
    const lastName = document.getElementById("lastname").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");
  
    if (password !== confirmPassword) {
      message.style.color = "red";
      message.textContent = "Passwords do not match!";
    } else {
      message.style.color = "green";
      message.textContent = `Registration Successful! Welcome, ${firstName} ${middleName} ${lastName}`;
      this.reset();
    }
  });
  