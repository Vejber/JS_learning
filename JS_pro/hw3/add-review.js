document.getElementById('review-form').onsubmit = function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value.trim();
    const reviewText = document.getElementById('review-text').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!productName || !reviewText) {
        errorMessage.textContent = 'Both fields are required.';
        return;
    }

    errorMessage.textContent = '';

    // Load existing reviews from LocalStorage
    const reviews = JSON.parse(localStorage.getItem('reviews') || '{}');

    // Add new review
    if (!reviews[productName]) {
        reviews[productName] = [];
    }
    reviews[productName].push({ id: Date.now(), text: reviewText });

    // Save updated reviews back to LocalStorage
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Clear fields
    document.getElementById('product-name').value = '';
    document.getElementById('review-text').value = '';
};
