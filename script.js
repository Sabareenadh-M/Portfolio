async function getVisitorCount() {
    try {
        // REPLACE THIS URL WITH YOUR ACTUAL API GATEWAY INVOKE URL
        const apiURL = "https://g07be1xec9.execute-api.ap-south-1.amazonaws.com/counter";

        const response = await fetch(apiURL);
        const data = await response.text();

        const counterElement = document.getElementById("counter");
        if (counterElement) {
            counterElement.innerText = data;
        }
    } catch (error) {
        console.error("Error fetching visitor count:", error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Intersection Observer for fade-up animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing once visible so it stays visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach(el => observer.observe(el));

    // Fetch and display visitor count
    getVisitorCount();
});
