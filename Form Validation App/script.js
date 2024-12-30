const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirm-password");

form.addEventListener('submit', (e)=>{
            e.preventDefault();
            validateInputs();
        });

        const validateInputs = () => {
            const usernameValue = username.value.trim();
            const emailValue = email.value.trim();
            const passwordValue = password.value.trim();
            const cPasswordValue = cPassword.value.trim();

            // Username validation
            if (usernameValue === '') {
                setError(username, 'Username is required');
            } else {
                setSuccess(username);
            }

            // Email validation
            if (emailValue === '') {
                setError(email, 'Email is required');
            } else if (!isValidEmail(emailValue)) {
                setError(email, 'Enter a valid email address');
            } else {
                setSuccess(email);
            }

            // Password validation
            if (passwordValue === '') {
                setError(password, 'Password is required');
            } else if (passwordValue.length < 6) {
                setError(password, 'Password must be at least 6 characters');
            } else {
                setSuccess(password);
            }

            // Confirm password validation
            if (cPasswordValue === '') {
                setError(cPassword, 'Confirm your password');
            } else if (cPasswordValue !== passwordValue) {
                setError(cPassword, 'Passwords do not match');
            } else {
                setSuccess(cPassword);
            }
        };

        const setError = (element, message) => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');

            errorDisplay.innerText = message;
            inputControl.classList.add('error');
            inputControl.classList.remove('success');
        };

        const setSuccess = (element) => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');

            errorDisplay.innerText = '';
            inputControl.classList.add('success');
            inputControl.classList.remove('error');
        };

        const isValidEmail = (email) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        };