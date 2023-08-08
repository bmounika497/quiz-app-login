document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const showRegisterForm = document.getElementById('showRegisterForm');
  const showLoginForm = document.getElementById('showLoginForm');

  const currentState = sessionStorage.getItem('registerState');
  if (currentState === 'register') {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
  }

  showRegisterForm.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    sessionStorage.setItem('registerState', 'register');
  });

  showLoginForm.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    sessionStorage.removeItem('registerState');
  });

  loginForm.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    login(email, password);
  });

  registerForm.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = registerForm.querySelector('input[name="name"]').value;
    const email = registerForm.querySelector('input[type="text"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;
    register(name, email, password);
  });

  function login(email, password) {
    console.log('Login with email:', email, 'and password:', password);
  }

  function register(name, email, password) {
    console.log('Register with name:', name, 'email:', email, 'and password:', password);
  }
});
