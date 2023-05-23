const emailInput = document.getElementById('email');
const subscribeButton = document.getElementById('subscribe');
const MainImg = document.getElementById('MainImg');
const SmallImg = document.getElementsByClassName("small-img");
//const formContainer = document.getElementsByClassName('form-container');
const signinForm = document.getElementById('sign-in-form');
const signupForm = document.getElementById('sign-up-form');

subscribeButton.addEventListener('click', () => {
    const email = emailInput.value;
    if (!Valid(email)) {
        alert('Please enter a valid email address');
        return;
    }
    else {
        subscribe(email);
        alert('You have successfully subscribed to our newsletter!');
    }
});

function Valid(email) {
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function subscribe(email) {
    console.log('Subscribing ' + email + ' to newsletter is successful!')
}

//product gallery
for(let i=0; i<4;i++){
    SmallImg[i].onclick = function(){
        MainImg.src = SmallImg[i].src;
    }
}
//sign in form
function signIn(e) {
    e.preventDefault();
    const username = document.getElementById('usernamesignin').value;
    const password = document.getElementById('passwordsignin').value;
    // Code to validate username and password and sign the user in
  }

  // Event listener to handle sign-in form submission
signinForm.addEventListener('Login', signIn);

//sign up form
function signUp(e) {
    e.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    // Code to validate new username and password and sign the user up
  }
  
  // Event listener to handle sign-up form submission
  signupForm.addEventListener('submit', signUp);