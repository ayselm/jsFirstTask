const  consoleLog = document.querySelector('#consoleLog');
const  alertButton = document.querySelector('#alert');
const  promptButton = document.querySelector('#prompt');

consoleLog.addEventListener('click', (event) => {
    console.log('Метод для вывода сообщений в веб-консоль');
});

alertButton.addEventListener('click', (event) => {
    window.alert('Метод для вывода сообщений в alert');
});

promptButton.addEventListener('click', (event) => {
    window.prompt('Метод для вывода сообщений в prompt');
});

