document.addEventListener('DOMContentLoaded', (event) => {
const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // FUNCTION TO SHOW ERROR ICON - WORKS 
  function addErrorBackground() {
    firstName.classList.add('error-background');
    lastName.classList.add('error-background');
    email.classList.add('error-background');
    password.classList.add('error-background');
  }
  // FUNCTION TO HIDE ERROR ICON
  function removeErrorBackground() {
    firstName.classList.remove('error-background');
    lastName.classList.remove('error-background');
    email.classList.remove('error-background');
    password.classList.remove('error-background');
  }
  // FUNCTION TO SHOW ERROR MESSAGE
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add('display-error');
    
    }
  }
  // FUNCTION TO HIDE ERROR MESSAGE
  function hideError(elementId) {
    const errorElement = document.getElementById(elementId)
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.classList.remove('display-error');
    }
  }

  // Check first name 
  if (fName === '') {
    firstName.placeholder = '';
    firstName.classList.add('error');
    addErrorBackground();
    showError("firstName-error", "First Name cannot be empty");


  } else {
    firstName.classList.remove('error');
    removeErrorBackground();
    hideError();

  }
  // Check last name 

  if (lName === '') {
    lastName.placeholder = '';
    lastName.classList.add('error');
    addErrorBackground();
    showError("lastName-error", "Last Name cannot be empty");

  } else {
    lastName.classList.remove('error');
    removeErrorBackground();
    hideError()
  }

  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.placeholder = '';
    email.classList.add('error');
    addErrorBackground();
    showError("email-error", "Email cannot be empty");

  } else {
    email.classList.remove('error');
    removeErrorBackground();
    hideError()
  }

  // Check password

  if (passwordVal === '') {
    password.placeholder = '';
    password.classList.add('error');
    addErrorBackground();
    showError("password-error", "Password cannot be empty");

  } else {
    password.classList.remove('error');
    removeErrorBackground();
    hideError()
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Clear Error on Input - works, but removes icon only
firstName.addEventListener('input', () => {
  firstName.classList.remove('error');
});
lastName.addEventListener('input', () => {
  lastName.classList.remove('error');
});

//FUNCTION FOR PASSWORD ICON
var a=0;
function pass()
{
  if (a==1)
{
  document.getElementById('password').type='password';
  document.getElementById('pass-icon').src='./images/eye-slash-solid.png';
      a=0;
}
else
{
  document.getElementById('password').type='text';
  document.getElementById('pass-icon').src='./images/eye-solid.png';
  a=1;
}
}
document.getElementById('pass-icon').addEventListener('click', pass);
});














//______________________________________________________________________//
// doesn't work
// if (firstName.value.trim() !== '') {
//   hideError();
// }

// email.addEventListener('input', () => {
//   email.classList.remove('error');
// })
// password.addEventListener('input', () => {
//   password.classList.remove('error');
// })
