document.getElementById('submitButton').addEventListener('click', function () {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    // Check if all fields are filled
    if (!fullName || !email || !password || !confirmPassword || !gender) {
        alert('Please complete all fields in the form.');
        return;
    }

    // Validate Password Strength
    if (!validatePassword(password)) {
        alert('Password is too weak. Ensure it is at least 8 characters long and includes a mix of uppercase, lowercase, numbers, and special characters.');
        return;
    }

    // Validate Password Confirmation
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please check again.');
        return;
    }

    // Successful Submission Message
    alert('Registration successful!');
});

// Function to Validate Password Strength
function validatePassword(password) {
    const strongPasswordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[\W_]).{8,}$/;
    return strongPasswordRegex.test(password);
}