const generateBtn = document.getElementById('generateBtn');
const generatedPw = document.getElementById('passwordOutput');
console.log(generatedPw);
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
console.log(slider.value)
// let charLength = 0;
// let sliderLeft = document.getElementById('sliderLeft');
// if (charLength > 0) {
//     sliderLeft.style.background = 'hsl(127 100 82)';
// }

let upperCaseActive = false;
let lowerCaseActive = false;
let numbersActive = false;
let symbolsActive = false;

// strength state
const strengthLevel = document.getElementById('strengthResult');
const graph = document.querySelector('.strength-result-graph');
console.log(graph.firstChild)

const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(generatedPw);
      console.log('copied');
      copyText.classList.remove('hidden');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

checkbox.forEach((check) => {
    let currToggle;
    check.addEventListener('click', () => {
        currToggle = check;
        
        console.log(check.id)
        check.classList.toggle('active');
        console.log(check.classList);
        // console.log('currToggle: ', currToggle);
        // console.log('currToggle.classList.contains("active"): ' ,currToggle.classList.contains('active'))
        if (currToggle.classList.contains('active') === true) {
            if (currToggle.id === 'includeUppercase') {
                upperCaseActive = true;
                console.log('currToggle.id: ', currToggle.id);
            } else if (currToggle.id === 'includeLowercase') {
                lowerCaseActive = true;
                console.log('currToggle.id: ', currToggle.id);
            } else if (currToggle.id === 'includeNumbers') {
                numbersActive = true;
                console.log('currToggle.id: ', currToggle.id);
            } else {
                symbolsActive = true;
                console.log('currToggle.id: ', currToggle.id);
            }
            generatePassword();
        }

        if (currToggle.classList.contains('active') === false) {
            if (currToggle.id === 'includeUppercase') {
                upperCaseActive = false;
                console.log('currToggle.id: ', currToggle.id);
            } else if (currToggle.id === 'includeLowercase') {
                lowerCaseActive = false;
                console.log('currToggle.id: ', currToggle.id);
            } else if (currToggle.id === 'includeNumbers') {
                numbersActive = false;
                console.log('currToggle.id: ', currToggle.id);
            } else {
                symbolsActive = false;
                console.log('currToggle.id: ', currToggle.id);
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
    console.log('upperCaseActive: ', upperCaseActive)
    console.log('lowerCaseActive: ', lowerCaseActive)
    console.log('numbersActive: ', numbersActive)
    console.log('symbolsActive: ', symbolsActive)
    console.log(chars.includes(reqOptions.uppercase));
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
    console.log(chars);
    // find required length
    // create random string of required length
    // show it on UI in white (not gray)
    console.log('character length: ', slider.value)
    let passwordLength = slider.value;
    newPw = '';
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        newPw += chars.substring(randomNumber, randomNumber + 1);
    }
    console.log(newPw);
}

console.log(generatePassword())
let reqNum = 0;

function setStrengthState(length) {
    length = slider.value;
    if (length < 6) {
        console.log('very weak!')
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
    console.log('this password needs to be ' + slider.value + ' characters long')
    reqNum = 0;
    if (upperCaseActive === true) {
        reqNum += 1;
        console.log('uppercase letters required!');
    }
    if (lowerCaseActive === true) {
        reqNum += 1;
        console.log('lowercase letters required!');
    }
    if (numbersActive === true) {
        reqNum += 1;
        console.log('numbers required!');
    }
    if (symbolsActive === true) {
        reqNum += 1;
        console.log('symbols required!');
    }
    if (slider.value >= 6 && slider.value < 15 && reqNum > 1) {
        console.log('password strength: medium')
    }
    console.log(reqNum);
    setStrengthState(slider.value);
    generatePassword();
    console.log(slider.value);
    generatedPw.innerText = newPw;
    generatedPw.style.color = 'hsl(var(--clr-light))';
};

generateBtn.addEventListener('click', handleGenerateBtnClick);