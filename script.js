document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('signupForm').classList.remove('active');
});

document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('signupForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
});
