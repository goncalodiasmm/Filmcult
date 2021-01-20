// DOM SELECTION (FORM 2 & INPUTS)
const form2 = document.getElementById('form-2');
const card = document.getElementById('card');
const holder = document.getElementById('holder');
const expDate = document.getElementById('exp-date');
const cvv = document.getElementById('cvv');

// FORM 2 VALIDATION
form2.addEventListener('submit', (e) => {
   if (card.value === '') {
      setErrorFor(card, 'Credit card number is required.')
      e.preventDefault();
   } else if (card.value.length !== 16) {
      setErrorFor(card, 'Credit card number has 16 digits')
      e.preventDefault();
   } else {
      setSuccessFor(card)
   }

   if (holder.value === '') {
      setErrorFor(holder, 'Card holder name is required.')
      e.preventDefault();
   } else {
      setSuccessFor(holder)
   }

   if (expDate.value === '') {
      setErrorFor(expDate, 'Card expiration date is required.')
      e.preventDefault();
   } else if (!isDate(expDate.value)) {
      setErrorFor(expDate, 'Date format should be MM/YY')
      e.preventDefault();
   } else {
      setSuccessFor(expDate)
   }

   if (cvv.value === '') {
      setErrorFor(cvv, 'CVV number is required.');
      e.preventDefault();
   } else if (cvv.value.length !== 3) {
      setErrorFor(cvv, 'CVV number has 3 digits');
      e.preventDefault();
   } else {
      setSuccessFor(cvv)
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

// DATE FORMAT REGEX VALIDATION
function isDate(expDate) {
   return /^(0[1-9]|1[0-2])\/([0-9]{2})$/g.test(expDate)
}