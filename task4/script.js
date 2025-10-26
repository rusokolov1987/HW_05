const link = document.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault();
    let linkText = prompt('Введите текст');
    event.target.textContent =  linkText;
});