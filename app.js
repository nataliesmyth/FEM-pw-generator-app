const generateBtn = document.getElementById('generateBtn');

const checkbox = document.querySelectorAll('.checkbox');
const checkImg = document.querySelectorAll('.check-image');

function handleCheckboxClick() {
    console.log('click!')
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