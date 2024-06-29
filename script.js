function learnMore() {
    window.location.href = '#about';
}

// Add form validation
document.querySelector('form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields are required.');
        event.preventDefault();
    } else {
        alert('Message sent successfully!');
    }
});
