// formSubmission.test.js
const fetchMock = require('jest-fetch-mock');
fetchMock.enableMocks();

beforeEach(() => {
    fetch.resetMocks();
});

test('submits the form successfully with valid data', async () => {
    document.body.innerHTML = `
        <form id="customer-details-form">
            <input type="text" id="name" name="name" value="John Doe" required>
            <input type="email" id="email" name="email" value="john@example.com" required>
            <textarea id="message" name="message" required>Hi there!</textarea>
            <button type="submit">Submit</button>
        </form>
    `;

    const form = document.getElementById('customer-details-form');
    fetchMock.mockResponseOnce(JSON.stringify({ message: 'Success' }));

    form.dispatchEvent(new Event('submit', { bubbles: true }));

    expect(fetch).toHaveBeenCalledWith('https://your-backend-api-url.com/submit', expect.anything());
});

test('shows an error message on submission failure', async () => {
    document.body.innerHTML = `
        <form id="customer-details-form">
            <input type="text" id="name" name="name" value="John Doe" required>
            <input type="email" id="email" name="email" value="john@example.com" required>
            <textarea id="message" name="message" required>Hi there!</textarea>
            <button type="submit">Submit</button>
        </form>
    `;

    const form = document.getElementById('customer-details-form');
    fetchMock.mockRejectOnce(new Error('Failed to submit'));

    form.dispatchEvent(new Event('submit', { bubbles: true }));

    // Assuming there is some way to show error messages in the UI
    // You would check if that element is updated with the error message
});
