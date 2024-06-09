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
        // check.classList.toggle('.active');
        // checkImg.classList.toggle('.hidden');
        console.log(check.style.backgroundColor)
        if (check.style.backgroundColor === 'hsl(127 100 82)' ||
            check.style.backgroundColor === 'rgb(163, 255, 174)') {
                check.style.backgroundColor = 'hsl(248 15 11)';
                check.style.borderColor = '#FFFFFF'
            } else {
                check.style.backgroundColor = 'hsl(127 100 82)';
                check.style.borderColor = 'transparent';
        }
        // checkImg.style.display = 'block';
    });
});

// window.addEventListener('load', () => {
//     charLengthNum.innerText = charLength;

//     console.log('loaded!');
//     console.log(checkbox)
//     checkbox.forEach((e) => {
//         if (e.id !== 'includeSymbols') {
//             console.log(e.id)
//             e.style.backgroundColor = 'hsl(127 100 82)';
//             e.style.borderColor = 'transparent';
//         }
//     });
// });