document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        localStorage.setItem('auth', 'true');
        window.location.href = 'admin.html';
    } else {
        document.getElementById('login-error').textContent = 'Usuario o contraseña incorrectos';
    }
});
