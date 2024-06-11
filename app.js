const generateBtn = document.getElementById('generateBtn');
const generatedPw = document.getElementById('passwordOutput').innerHTML;
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
// let charLength = 0;
// let sliderLeft = document.getElementById('sliderLeft');
// if (charLength > 0) {
//     sliderLeft.style.background = 'hsl(127 100 82)';
// }

let upperCaseActive = false;
let lowerCaseActive = false;
let numbersActive = false;
let symbolsActive = false;


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
        console.log('currToggle: ', currToggle);
        console.log('currToggle.classList.contains("active"): ' ,currToggle.classList.contains('active'))
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

    console.log(check)
    console.log(check.classList)
});

function isActive() {

}

function handleGenerateBtnClick() {
    copyText.classList.add('hidden')
    if (upperCaseActive === true) {
        console.log('uppercase letters required!');
    }
    if (lowerCaseActive === true) {
        console.log('lowercase letters required!');
    }
    if (numbersActive === true) {
        console.log('numbers required!');
    }
    if (symbolsActive === true) {
        console.log('symbols required!');
    }

};

generateBtn.addEventListener('click', handleGenerateBtnClick);