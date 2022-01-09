//Slider variables
let sliderLength = document.getElementById("slider-length");
let sliderOutput = document.getElementById("slider-value");
//Sets the slider output to the length defined in the slider
sliderOutput.innerHTML = sliderLength.value;

//Sets the default value of the slider 
sliderLength.oninput = function() {
  sliderOutput.innerHTML = this.value;
}

// Assignment Code
const generateBtn = document.querySelector('#generate');
const passwordStyle = document.querySelector('#password');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', () => {
  passwordStyle.classList.toggle('active');
})

