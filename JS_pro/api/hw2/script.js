document.addEventListener('DOMContentLoaded', () => {
    const images = ['https://img.freepik.com/free-psd/portrait-adorable-golden-retriever-puppy_53876-73976.jpg?w=900&t=st=1705497004~exp=1705497604~hmac=7ff99a74d1ff94e01bb0fcf7703bc7f348b4e2bdce50fc9d518097d6616e882b', 'https://img.freepik.com/free-psd/adorable-jack-russell-retriever-puppy-portrait_53876-74006.jpg?w=900&t=st=1705497048~exp=1705497648~hmac=cc62e196bbea317388e6bf111ebb1cd5327cfb66acb8e4855419b881cc09fe01', 'https://img.freepik.com/free-photo/little-labrador-retriever-playing-white-studio-background_155003-46342.jpg?w=1060&t=st=1705497096~exp=1705497696~hmac=c79985e0fb923bfb8da31fc280e6d5fccd2e756c3437cc9750d43b5e88cc4e2a'];
    let currentImageIndex = 0;

    const imageContainer = document.getElementById('image-container');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const dotsContainer = document.getElementById('dots-container');

    function updateSlider() {
        imageContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;

        // Update active dot
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentImageIndex);
        });
    }

    function showImage(index) {
        currentImageIndex = index;
        updateSlider();
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateSlider();
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateSlider();
    }

    function createDots() {
        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.onclick = () => showImage(index);
            dotsContainer.appendChild(dot);
        });
    }

    // Event listeners
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    // Initialize the slider
    createDots();
    updateSlider();
});
