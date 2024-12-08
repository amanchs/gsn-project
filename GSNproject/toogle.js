// Get the button and body elements
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

// Function to toggle night mode
toggleButton.addEventListener('click', () => {
    body.classList.toggle('night-mode');

    // Change the button text based on the current mode
    if (body.classList.contains('night-mode')) {
        toggleButton.textContent = 'Switch to Day Mode';
    } else {
        toggleButton.textContent = 'Switch to Night Mode';
    }
});
