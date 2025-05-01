// Function to move the "No" button when hovered
function moveButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    
    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    
    // Generate random position within the container
    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    // Move the button
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Function to navigate to yes.html when "Yes" is clicked
function nextPage() {
    window.location.href = 'yes.html';
}

// Optional: Ensure buttons are positioned correctly on page load
window.addEventListener('load', () => {
    const noButton = document.getElementById('noButton');
    if (noButton) {
        noButton.style.position = 'relative';
    }
});
