let currentIndex = 0;
const slides = document.querySelectorAll('.score-box');
const totalSlides = slides.length;

window.addEventListener('scroll', function() {
    currentIndex = Math.floor((window.scrollY + window.innerWidth / 2) / window.innerWidth) % totalSlides;
    const displacement = -currentIndex * 100;
    document.getElementById('widgetContent').style.transform = `translateX(${displacement}%)`;

    // Check if scrolling has reached the edge
    if (currentIndex === 0) {
        // Move to the end of the container
        const lastPosition = -totalSlides * 100;
        document.getElementById('widgetContent').style.transform = `translateX(${lastPosition}%)`;
    } else if (currentIndex === totalSlides - 1) {
        // Move to the beginning of the container
        const firstPosition = 0;
        document.getElementById('widgetContent').style.transform = `translateX(${firstPosition}%)`;
    }
});
