// scripts.js
document.getElementById('customer-details-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch('https://your-backend-api-url.com/submit', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            alert('Thank you for your message!');
        } else {
            alert('There was a problem with your submission.');
        }
    });
});
