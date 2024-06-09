// password generator
    // when browser loads...
        // random password is generated
        // password includes UPPERCASE, lowercase, and a number
        // three corresponding radio inputs are active
        // character length is 10

// ON BROWSER LOAD

const generateBtn = document.getElementById('generateBtn');
const charLengthNum = document.getElementById('charLengthNum')
const generatedPw = document.getElementById('passwordOutput').innerHTML;
console.log(generatedPw);
const checkbox = document.querySelectorAll('.checkbox');
const checkImg = document.querySelectorAll('.check-image');
let newPassword = ''

let charLength = 0;

// function handleCheckboxClick() {
//     console.log('click!')
// }

const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(generatedPw);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

checkbox.forEach((check) => {
    
    check.addEventListener('click', () => {
        console.log(check)
        console.log(check.id)
        check.classList.toggle('active');
        console.log(check.classList);
    });
});

function handleGenerateBtnClick() {
    console.log('clicked!');
};

generateBtn.addEventListener('click', handleGenerateBtnClick);