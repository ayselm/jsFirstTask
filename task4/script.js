const textLink = document.querySelector('#textLink');

textLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    text = window.prompt('Метод для вывода сообщений в prompt');
    textLink.textContent = text;
});

