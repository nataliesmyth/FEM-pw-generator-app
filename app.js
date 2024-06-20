const generateBtn = document.getElementById('generateBtn');
const generatedPw = document.getElementById('passwordOutput');
const copyText = document.getElementById('copyText');
const checkbox = document.querySelectorAll('.checkbox');
const checkImg = document.querySelectorAll('.check-image');
let newPassword = '';

const charOutput = document.getElementById('charLengthNum');
let slider = document.getElementById('charRange');
charOutput.innerText = slider.value;
// slider.oninput = function() {
//     charOutput.innerText = this.value;
// }

function updateGradient(rangeValue) {
    const percentage = (rangeValue - slider.min) / (slider.max - slider.min) * 100;
    slider.style.backgroundImage = `linear-gradient(90deg, hsl(var(--clr-accent)) ${percentage}%, hsl(var(--clr-dark)) ${percentage}%)`;
};

updateGradient(slider.value);
// Update gradient oninput
slider.addEventListener('input', (e) => {
    charOutput.innerHTML = e.target.value;
    updateGradient(e.target.value);
  });
// inputs and outputs
// inputs are things that can be tracked and responded to
// outputs are things we can control
// helps when input has a range
// we can change obj props based on an input
// our input value is the location of the slider thumb on the track
// we will use this later to connect to our output value
// fractional values make it easy to connect to future outputs
// we need the thums current position and compare it to its maximum position
// fractionValue = currThumbPosition / maxThumbPosition
// OR
// f = thumb.x / slider.width
// we want to track thumb position from left to right, where the left side of the track is 0 and the right side is 1
// if thumb.x 
console.log(slider.offsetWidth)
// slider.offsetWidth is the slider width
// the range for our thumb is from 0 to slider.offsetWidth 
const rangeInput = document.querySelector('input[type=range');
// fractional value = relativeCurrentThumbPosition / inputRange
console.log(rangeInput)

let input = {
    thumbX: {
        start: 0,
        end: slider.offsetWidth,
        current: 0,
    }
}
if (slider.value === 0) {
    rangeInput.style.backgroundColor = 'red';
}

function handleSlider() {
    console.log('event ', event);
    const sliderTrack = document.querySelector('.slider-container')
    console.log('handle slider FN!')
    console.log(sliderTrack.clientX);
    console.log(input.thumbX.range = slider.offsetWidth);
}
console.log('x coordinates', )

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
    } else if (length >= 6 && length < 10) {
        strengthLevel.innerText = 'weak ';
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
rangeInput.addEventListener('mousedown', handleSlider);