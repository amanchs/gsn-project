// Get the button and text elements
const toggleButton = document.getElementById('color-toggle');
const textElement = document.getElementById('text');

// Function to toggle text color
toggleButton.addEventListener('click', () => {
    // Check the current color and toggle it
    if (textElement.style.color === 'yellow') {
        textElement.style.color = '#6c5ce7';
    } else {
        textElement.style.color = 'yellow';
    }
});
