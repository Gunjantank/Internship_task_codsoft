document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS with custom settings
    AOS.init({
        duration: 1000,  // Default animation duration
        once: true       // Only animate elements once
    });

    // Function to delay adding 'visible' class to text elements
    function delayTextAnimation() {
        const textElements = document.querySelectorAll('.delay-text-animation');
        textElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, index * 500); // Adjust this delay time (in milliseconds) as needed
        });
    }

    // Call delayTextAnimation when all content is loaded
    delayTextAnimation();
});
