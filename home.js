const track = document.querySelector('.slider-track');
    const items = document.querySelectorAll('.slider-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let index = 0;
    let autoSlideInterval;

    function showSlide(index) {
        const width = items[0].clientWidth + 20; // including margin
        track.style.transform = `translateX(-${index * width}px)`;
    }

    function nextSlide() {
        index = (index < items.length - 1) ? index + 1 : 0;
        showSlide(index);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000); // Change slides every 3 seconds
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners for manual controls
    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        index = (index > 0) ? index - 1 : items.length - 1;
        showSlide(index);
        startAutoSlide();
    });

    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    // Start auto sliding when the page loads
    startAutoSlide();