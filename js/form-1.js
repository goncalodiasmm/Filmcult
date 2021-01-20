// DOM SELECTION (FORM 1 & INPUTS)
const form1 = document.getElementById('form-1');
const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

// FORM 1 VALIDATION
form1.addEventListener('submit', (e) => {
   if (fName.value === '') {
      setErrorFor(fName, 'Name is required.')
      e.preventDefault();
   } else {
      setSuccessFor(fName)
   }

   if (lName.value === '') {
      setErrorFor(lName, 'Name is required.')
      e.preventDefault();
   } else {
      setSuccessFor(lName)
   }

   if (email.value === '') {
      setErrorFor(email, 'Email is required.')
      e.preventDefault();
   } else if (!isEmail(email.value)) {
      setErrorFor(email, 'Email is not valid')
      e.preventDefault();
   } else {
      setSuccessFor(email)
   }

   if (password.value === '') {
      setErrorFor(password, 'Password is required.')
      e.preventDefault();
   } else if (password.value.length < 8) {
      setErrorFor(password, 'Password is too short');
      e.preventDefault();
   } else {
      setSuccessFor(password)
   }
})

// ERROR AND SUCCESS CLASSES
function setErrorFor(input, message) {
   const formControl = input.parentElement;
   const small = formControl.querySelector('small');
   small.innerText = message
   formControl.className = 'form-control error'
}

function setSuccessFor(input) {
   const formControl = input.parentElement;
   formControl.className = 'form-control success'
}

// EMAIL REGEX VALIDATION
function isEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}