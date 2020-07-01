const toggle = document.getElementById('toggle');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {

    if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');

    } else if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
    }
});


