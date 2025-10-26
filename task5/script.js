const labelText = document.querySelector('input');
const outerText = document.querySelector('#duplicateField');
const button = document.querySelector('button');

labelText.addEventListener('input', () => {
    outerText.textContent = labelText.value;
});

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(labelText.value);
    labelText.value = '';
    outerText.textContent = '';
});