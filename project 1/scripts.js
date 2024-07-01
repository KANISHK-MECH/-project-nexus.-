// /mnt/data/scripts.js

// Toggle between login and signup forms
document.getElementById('login-toggle').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
});

document.getElementById('signup-toggle').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

// Password strength meter
document.getElementById('signup-password').addEventListener('input', function() {
    const password = document.getElementById('signup-password').value;
    const strengthMeter = document.getElementById('password-strength');
    const strength = getPasswordStrength(password);

    strengthMeter.className = 'password-strength';
    if (strength === 'weak') {
        strengthMeter.classList.add('weak');
    } else if (strength === 'medium') {
        strengthMeter.classList.add('medium');
    } else if (strength === 'strong') {
        strengthMeter.classList.add('strong');
    }
});

function getPasswordStrength(password) {
    if (password.length < 8) {
        return 'weak';
    }
    if (password.length >= 8 && /[A-Za-z]/.test(password) && /[0-9]/.test(password)) {
        return 'medium';
    }
    if (password.length >= 8 && /[A-Za-z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
        return 'strong';
    }
    return 'weak';
}

// Signup form validation
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('signup-fullname').value.trim();
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const phone = document.getElementById('signup-phone').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const confirmPassword = document.getElementById('signup-confirm-password').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Regular expressions for validating email format and phone number
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/; // Assuming a 10-digit phone number

    // Clear previous error messages
    errorMessage.textContent = '';

    // Validate non-empty fields
    if (!fullname || !username || !email || !phone || !password || !confirmPassword) {
        errorMessage.textContent = 'All fields are required!';
        return;
    }

    // Validate email format
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Invalid email format!';
        return;
    }

    // Validate phone number format
    if (!phonePattern.test(phone)) {
        errorMessage.textContent = 'Invalid phone number!';
        return;
    }

    // Validate password strength
    if (getPasswordStrength(password) === 'weak') {
        errorMessage.textContent = 'Password is too weak!';
        return;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!';
        return;
    }

    // If all validations pass
    errorMessage.textContent = '';
    alert('Signup successful');
    // Add your signup logic here
});
