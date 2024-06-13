const generateBtn = document.getElementById('generateBtn');
const generatedPw = document.getElementById('passwordOutput');
const copyText = document.getElementById('copyText');
const checkbox = document.querySelectorAll('.checkbox');
const checkImg = document.querySelectorAll('.check-image');
let newPassword = '';

const charOutput = document.getElementById('charLengthNum');
let slider = document.getElementById('charRange');
charOutput.innerText = slider.value;
slider.oninput = function() {
    charOutput.innerText = this.value;
}

let upperCaseActive = false;
let lowerCaseActive = false;
let numbersActive = false;
let symbolsActive = false;

// strength state
const strengthLevel = document.getElementById('strengthResult');
const graph = document.querySelector('.strength-result-graph');

const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(generatedPw.innerHTML);
      copyText.classList.remove('hidden');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

checkbox.forEach((check) => {
    let currToggle;
    check.addEventListener('click', () => {
        currToggle = check;
        
        check.classList.toggle('active');

        if (currToggle.classList.contains('active') === true) {
            if (currToggle.id === 'includeUppercase') {
                upperCaseActive = true;
            } else if (currToggle.id === 'includeLowercase') {
                lowerCaseActive = true;
            } else if (currToggle.id === 'includeNumbers') {
                numbersActive = true;
            } else {
                symbolsActive = true;
            }
            generatePassword();
        }

        if (currToggle.classList.contains('active') === false) {
            if (currToggle.id === 'includeUppercase') {
                upperCaseActive = false;
            } else if (currToggle.id === 'includeLowercase') {
                lowerCaseActive = false;
            } else if (currToggle.id === 'includeNumbers') {
                numbersActive = false;
            } else {
                symbolsActive = false;
            } 
        }
    });
});

const reqOptions = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '1234567890',
    symbols: '!@#$%^&*'
}

let newPw = '';
function generatePassword() {
    let chars = reqOptions.lowercase;

    // create string of all included characters
    if (upperCaseActive === true && chars.includes(reqOptions.uppercase) === false) {
        chars += reqOptions.uppercase;
    }
    if (numbersActive === true && chars.includes(reqOptions.numbers) === false) {
        chars += reqOptions.numbers;
    }
    if (symbolsActive === true && chars.includes(reqOptions.symbols) === false) {
        chars += reqOptions.symbols;
    }
    let passwordLength = slider.value;
    newPw = '';
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        newPw += chars.substring(randomNumber, randomNumber + 1);
    }
}

let reqNum = 0;

function setStrengthState(length) {
    length = slider.value;
    if (length < 6) {
        strengthLevel.innerText = 'very weak!'
        graph.firstElementChild.style.backgroundColor = 'hsl(var(--clr-red))';
        graph.firstElementChild.style.border = 'none';

        graph.firstElementChild.nextElementSibling.style.backgroundColor = 'transparent';
        graph.firstElementChild.nextElementSibling.style.border = '2px solid #FFFFFF';
        
        graph.firstElementChild.nextElementSibling.nextElementSibling.style.backgroundColor = 'transparent';
        graph.firstElementChild.nextElementSibling.nextElementSibling.style.border = '2px solid #FFFFFF';

        graph.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'transparent';
        graph.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.border = '2px solid #FFFFFF';
    } else if (length >=6 && length < 10) {
        strengthLevel.innerText = 'weak '
        graph.firstElementChild.style.backgroundColor = 'hsl(var(--clr-orange))';
        graph.firstElementChild.style.border = 'none';

        graph.firstElementChild.nextElementSibling.style.backgroundColor = 'hsl(var(--clr-orange))';
        graph.firstElementChild.nextElementSibling.style.border = 'none';

        graph.firstElementChild.nextElementSibling.nextElementSibling.style.backgroundColor = 'transparent';
        graph.firstElementChild.nextElementSibling.nextElementSibling.style.border = '2px solid #FFFFFF';
        
        graph.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'transparent';
        graph.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.border = '2px solid #FFFFFF';
    } else if (length >= 10 && length < 15) {
        strengthLevel.innerText = 'medium';
        graph.firstElementChild.style.backgroundColor = 'hsl(var(--clr-yellow))';
        graph.firstElementChild.style.border = 'none';

        graph.firstElementChild.nextElementSibling.style.backgroundColor = 'hsl(var(--clr-yellow))';
        graph.firstElementChild.nextElementSibling.style.border = 'none';

        graph.firstElementChild.nextElementSibling.nextElementSibling.style.backgroundColor = 'hsl(var(--clr-yellow))';
        graph.firstElementChild.nextElementSibling.nextElementSibling.style.border = 'none';

        graph.firstElementChild.nextElementSibling.nextElementSibling.style.backgroundColor = 'transparent';
        graph.firstElementChild.nextElementSibling.nextElementSibling.style.border = '2px solid #FFFFFF';

        graph.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'transparent';
        graph.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.border = '2px solid #FFFFFF';
    } else {
        strengthLevel.innerText = 'strong'
        graph.firstElementChild.style.backgroundColor = 'hsl(var(--clr-accent))';
        graph.firstElementChild.style.border = 'none';

        graph.firstElementChild.nextElementSibling.style.backgroundColor = 'hsl(var(--clr-accent))';
        graph.firstElementChild.nextElementSibling.style.border = 'none';

        graph.firstElementChild.nextElementSibling.nextElementSibling.style.backgroundColor = 'hsl(var(--clr-accent))';
        graph.firstElementChild.nextElementSibling.nextElementSibling.style.border = 'none';

        graph.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.backgroundColor = 'hsl(var(--clr-accent))';
        graph.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.border = 'none';
    }
}

function handleGenerateBtnClick() {
    copyText.classList.add('hidden')
    generatedPw.innerText = '';
    setStrengthState(slider.value);
    generatePassword();
    generatedPw.innerText = newPw;
    generatedPw.style.color = 'hsl(var(--clr-light))';
};

generateBtn.addEventListener('click', handleGenerateBtnClick);