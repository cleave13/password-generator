//GLOBAL VARIABLE DECLARATIONS

//Selects the document elements from the DOM
const promptWrapper = document.querySelector('.prompt-wrapper');
const prompt = document.querySelector('.prompt');
const cancelBtn = document.querySelector('.cancel');
const configureBtn = document.querySelector('#configure');
const generateBtn = document.querySelector('#generate');
const sliderLength = document.querySelector('#slider-length');
const sliderOutput = document.querySelector('#slider-value');
const errorMsg = document.querySelector('#unselected');
const passwordStyle = document.querySelector('#password');

sliderOutput.innerHTML = sliderLength.value; //Displays the default value for slider length on page load.

//FUNCTIONS

//Updates the displayed number of characters when the user adjusts the slider. 
sliderLength.oninput = function() {
  sliderOutput.innerHTML = this.value;
}

//Constructs a string based on the settings configured by the user.
function generatePassword() {
  //Declares the local variables required by the function.
  const charLength = sliderLength.value;
  const charLower = document.getElementById("char-lower").checked;
  const charUpper = document.getElementById("char-upper").checked;
  const charNumber = document.getElementById("char-number").checked;
  const charSpecial = document.getElementById("char-special").checked;
  const lettersArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const numbersArray = [0,1,2,3,4,5,6,7,8,9];
  const specialArray = ['!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','{','|','}'];
  let passwordString = '';
  let nextChar = '';
  
  //Check for password configuration and append relevant characters to string.
  if (!charLower && !charUpper && !charNumber && !charSpecial) {
    errorMsg.innerHTML = 'You must select at least one value';
  } else {
      errorMsg.innerHTML = '';
      for (let i = 0; passwordString.length < charLength; i++) {
        if(charLower) {
          passwordString += lettersArray[Math.floor(Math.random() * lettersArray.length)];
        }
        if(charUpper) {
          passwordString += lettersArray[Math.floor(Math.random() * lettersArray.length)].toUpperCase();
        }
        if(charNumber) {
          passwordString += numbersArray[Math.floor(Math.random() * numbersArray.length)];
        }
        if(charSpecial) {
          passwordString += specialArray[Math.floor(Math.random() * specialArray.length)];
        }

        //If the string is longer than the length selected by the user, trim the string.
        if(passwordString.length > charLength) {
          passwordString = passwordString.substring(0, charLength);
        }
      }
    return passwordString;
  }
}
// Write password to the #password input
function writePassword() {
  const password = generatePassword(); // Calls the generate password function.
  if (password !== undefined) {
    const passwordText = document.querySelector('#password'); // Targets the 'password' element.
    
    passwordText.value = password; // Sets the value of the password to the generated string.
  }
  return;
}
//EVENT LISTENERS

// Add event listener to generate button
generateBtn.addEventListener('click', () => {
  writePassword();
})

configureBtn.addEventListener('click', () => {
  promptWrapper.classList.toggle('active');
  configureBtn.classList.toggle('active');
})

cancelBtn.addEventListener('click', () => {
  promptWrapper.classList.toggle('active');
  configureBtn.classList.toggle('active');
  window.location.reload();
})