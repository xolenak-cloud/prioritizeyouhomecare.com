// Intersection Observer for Animate on Scroll (AOS)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });

    // Header scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '12px 0';
            nav.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            nav.style.padding = '20px 0';
            nav.style.background = 'rgba(15, 23, 42, 0.8)';
        }
    });

    // Mobile Menu logic (placeholder for future expansion)
    console.log('Premium Redesign Initialized');
});
