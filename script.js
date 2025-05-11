 document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('loginForm');
      form.addEventListener('submit', (e) => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (!username || !password) {
          e.preventDefault();
          alert("Please fill out both fields!");
        } else {
          alert("Login Successful!");
        }
      });
    });
     document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('registerForm');
      form.addEventListener('submit', (e) => {
        const pass = document.getElementById('password').value;
        const confirm = document.getElementById('confirmPassword').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        if (pass !== confirm) {
          e.preventDefault();
          alert("Passwords do not match!");
        }
        else if (!username || !email || !pass || !confirm) {
          e.preventDefault();
          alert("Please fill in all fields.");
        } else {
          alert("Registration Successful!");
        }
      });
    });