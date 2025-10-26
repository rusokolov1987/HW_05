document.querySelector('#consoleLog').addEventListener('click', () => {
    alert('Этот метод предназначен для вывода информации в консоль браузера!');
});

document.querySelector('#alert').addEventListener('click', () => {
    alert('Этот метод предназначен для вывода информации в попап окне сгенирированный JS');
});

document.querySelector('#prompt').addEventListener('click', () => {
    prompt('Сколько вам лет?');
});