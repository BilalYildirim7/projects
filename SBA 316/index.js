document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();

        if (validateForm(name, email)) {
            displayResult(name, email);
            form.reset();
        }
    });

    function validateForm(name, email) {
        if (!name || !email) {
            showError('Please fill in all fields.');
            return false;
        }

        // Basic email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    function showError(message) {
        resultDiv.innerHTML = `<p id="error">${message}</p>`;
    }

    function displayResult(name, email) {
        resultDiv.innerHTML = `<p>Thank you, ${name}! We have received your email: ${email}</p>`;
    }
});
