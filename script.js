// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form submission - let Formspree handle it natively (no JavaScript interception)
// The form action and method attributes handle submission and redirect

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Add animation classes
document.addEventListener('DOMContentLoaded', () => {
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-target {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
                        transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-target.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        .animate-target:nth-child(2) { transition-delay: 0.1s; }
        .animate-target:nth-child(3) { transition-delay: 0.2s; }
        .animate-target:nth-child(4) { transition-delay: 0.3s; }
    `;
    document.head.appendChild(style);

    // Select elements to animate
    const animatedElements = document.querySelectorAll(
        '.problem-card, .learn-card, .testimonial-card, .about-content, .register-content, .video-content'
    );
    
    animatedElements.forEach(el => {
        el.classList.add('animate-target');
        observer.observe(el);
    });
});

// Parallax effect for hero glow
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.image-glow');
    if (glow) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    }
});
