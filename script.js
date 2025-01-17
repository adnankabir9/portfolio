// Animate About Section on Scroll
const observerOptions = {
    threshold: 0.1
};

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target); // Stop observing after animation triggers
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);

document.querySelectorAll('.about-img, .info-box > *').forEach(element => {
    observer.observe(element);
});
