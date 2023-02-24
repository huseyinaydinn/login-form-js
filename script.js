var loginForm = document.getElementById('login');
var registerForm = document.getElementById('register');
var btn = document.getElementById('btn');
var loginBtn = document.getElementById('toggle-login-btn');
var registerBtn = document.getElementById('toggle-register-btn');

function register() {
  loginForm.style.left = '-400px';
  registerForm.style.left = '50px';
  btn.style.left = '110px';
  registerBtn.style.color = '#fff';
  loginBtn.style.color = '#000';
}

function login() {
  loginForm.style.left = '50px';
  registerForm.style.left = '450px';
  btn.style.left = '0';
  registerBtn.style.color = '#000';
  loginBtn.style.color = '#fff';
}
