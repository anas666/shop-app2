// This function is called when the sign in button is clicked.
function signIn() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Make an Ajax request to the server.
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/signin");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
      username: username,
      password: password
    }));
  
    // Handle the response from the server.
    xhr.onload = function() {
      if (xhr.status === 200) {
        // The user has been signed in successfully.
        window.location.href = "/";
      } else {
        // There was an error signing in the user.
        alert("Error signing in. Please try again.");
      }
    };
  }
  
  // This function is called when the sign up button is clicked.
  function signUp() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    // Validate the input.
    if (username === "") {
      alert("Please enter a username.");
      return;
    }
  
    if (password === "") {
      alert("Please enter a password.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("The passwords do not match.");
      return;
    }
  
    // Make an Ajax request to the server.
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/signup");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
      username: username,
      password: password
    }));
  
    // Handle the response from the server.
    xhr.onload = function() {
      if (xhr.status === 201) {
        // The user has been signed up successfully.
        window.location.href = "/";
      } else {
        // There was an error signing up the user.
        alert("Error signing up. Please try again.");
      }
    };
  }
  