document.getElementById('login-btn').addEventListener('click', function () {
    document.querySelector('.login-popup-container').style.display = 'flex';
});

document.getElementById('login-close').addEventListener('click', function () {
    document.querySelector('.login-popup-container').style.display = 'none';
});

document.getElementById('register-btn').addEventListener('click', function () {
    document.querySelector('.register-popup-container').style.display = 'flex';
});

document.getElementById('register-close').addEventListener('click', function () {
    document.querySelector('.register-popup-container').style.display = 'none';
});

