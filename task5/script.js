const inputButton = document.querySelector('input');
const submitButton = document.querySelector('#submit');
const textBlock = document.querySelector('#duplicateField');


inputButton.addEventListener('keyup', function() {
    textBlock.textContent = inputButton.value;
})

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(inputButton.value);
    inputButton.value = '';
    textBlock.textContent = '';
})