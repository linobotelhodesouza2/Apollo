document.addEventListener("DOMContentLoaded", function() {
    var isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (!isAdmin) {
        alert("Acesso como usuário normal.");
    } else {
        document.getElementById('adminArea').style.display = 'block';
    }
});

function salvarDados(e) {
    // Resto do código
}

document.getElementById('togglePassword').addEventListener('click', function() {
    var passwordField = document.getElementById('password');
    var type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? '🔒' : '👁️';
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Simulate login
    if (username === 'admin' && password === '123') {
        localStorage.setItem('isAdmin', true);
        window.location.href = 'index.html';
    } else if (username === 'user' && password === '123') {
        localStorage.setItem('isAdmin', false);
        window.location.href = 'index.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
});
