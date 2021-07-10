// variables

// username, password, button
const username = document.querySelector('#username');
const password = document.querySelector('#password');

const loginForm = document.querySelector('#login-form');
const signinForm = document.querySelector('#signin-form');
const form = document.querySelector('#form');

const loginBtn = document.querySelector('#login-btn');
// const errorMsg = document.querySelector('#error-msg');

// event handlers
loginBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signinForm.classList.remove('hidden');

});


// input validation requirements
form.addEventListener('submit', (event) => {
    event.preventDefault();

});
// add alerts to show the requirements
function validate() {

    if (username.value.trim() === '' || password.value.trim() === "") {
        alert('Do not leave blank');
        return false;
    } else if (username.value.trim().length<6) {
        alert('Username need to be greater than 6 characters');
        return false;
    } else if (password.value.trim().length<8) {
        alert('Password need to be greater than 8 characters');
        return false;
    } else {
        return true;
    }
}

