const form = document.getElementById('form');
const fName = document.getElementById('fName');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const DoB = document.getElementById('dob')
const mathM = document.getElementById('math');
const chemM = document.getElementById('chem');
const physM = document.getElementById('phys');
const avgM = document.getElementById('avg');
const country = document.getElementById('country');
const state = document.getElementById('state');
const city = document.getElementById('city');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Validating')

  if (checkName()&&checkMobile()&&checkEmail()&&checkDoB()&&checkCountry()&&checkState()&&checkCity()){
    alert('Submission Success');
    form.reset();
    form.submit();
  }
})


function checkName() {
  //get values from input
  const fNameValue = fName.value.trim();
  if (fNameValue === '') {
    setErrorFor(fName, '* First name required');
    fName.focus();
  } else if (fNameValue.length < 5) {
    setErrorFor(fName, 'Minimum 5 characters')
  } else {
    setSuccessFor(fName);
    return true;
  }
}

function checkMobile() {
  const mobileValue = mobile.value.trim();
  if (mobileValue === '') {
    setErrorFor(mobile, '* Phone number required');
    mobile.focus();
  } else if (mobileValue.length !== 10) {
    setErrorFor(mobile, 'Invalid Phone number');
    mobile.focus();
  } else {
    setSuccessFor(mobile);
    return true;
  }
}

function checkEmail() {
  const emailValue = email.value.trim();
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
  if (emailValue === '') {
    setErrorFor(email, '* E-mail required');
    email.focus();
  } else if (emailPattern.test(emailValue)) {
    setErrorFor(email, 'Invalid E-mail');
    email.focus();
  } else {
    setSuccessFor(email);
    return true;
  }
}

function checkDoB() {
  let d = new Date();
  const DoBValue = parseInt(DoB.value.slice(0, 4));
  let currentYear = d.getFullYear();
  if (DoBValue.toString() === '') {
    setErrorFor(DoB, '* DoB required');
    DoB.focus();
  } else if (currentYear - 18 === DoBValue || currentYear - 17 === DoBValue) {
    setSuccessFor(DoB);
    return true;
  } else {
    setErrorFor(DoB, 'Entered DoB is not acceptable');
    DoB.focus();
  }
}

function checkMark() {
  const formControl = avgM.parentElement;
  const setAvg = formControl.querySelector('input');
  const mathValue = parseInt(mathM.value.trim());
  const chemValue = parseInt(chemM.value.trim());
  const physValue = parseInt(physM.value.trim());
  const avgValue = ((mathValue + chemValue + physValue) / 3).toFixed(2);

  if (mathValue >= 0 && mathValue <= 100 &&
    chemValue >= 0 && chemValue <= 100 &&
    physValue >= 0 && physValue <= 100) {
    setAvg.value = avgValue.toString();
    if (avgValue <= 35) {
      console.log(avgValue);
      setErrorFor(avgM, 'Marks do not meet minimum criteria');
      avgM.focus();
    } else {
      setSuccessFor(avgM);
      return true;
    }
  } else {
    setErrorFor(avgM, '* Enter marks out of 100');
    avgM.focus();
  }
}

function checkState() {
  let stateValue = state.value;
  if (stateValue === 'default') {
    setErrorFor(state, '* State Required');
  } else {
    setSuccessFor(state);
    return true;
  }
}

function checkCountry() {
  let countryValue = country.value;
  if (countryValue === 'default') {
    setErrorFor(country, '* Country Required');
  } else {
    setSuccessFor(country);
    return true;
  }
}

function checkCity() {
  let cityValue = city.value.trim();
  if (cityValue === '') {
    setErrorFor(city, '* City required');
  } else {
    setSuccessFor(city);
    return true;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  input.focus();
  small.innerText = message;

  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}