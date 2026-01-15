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

// Form submission handler
const form = document.getElementById('webinar-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            stage: formData.get('stage')
        };
        
        // Show success message
        const formWrapper = document.querySelector('.register-form-wrapper');
        formWrapper.innerHTML = `
            <div class="success-message">
                <div class="success-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" stroke-width="2">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#f4d03f"/>
                                <stop offset="100%" style="stop-color:#d4af37"/>
                            </linearGradient>
                        </defs>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                </div>
                <h3>You're In!</h3>
                <p>Thanks, ${data.firstName}! Check your inbox for webinar details.</p>
                <p class="success-note">See you there!</p>
            </div>
        `;
        
        // Add success styles
        const style = document.createElement('style');
        style.textContent = `
            .success-message {
                text-align: center;
                padding: 60px 20px;
            }
            .success-icon {
                margin-bottom: 24px;
            }
            .success-message h3 {
                font-family: 'Space Grotesk', sans-serif;
                font-size: 2rem;
                margin-bottom: 16px;
                background: linear-gradient(135deg, #f4d03f 0%, #d4af37 50%, #b8960f 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .success-message p {
                color: rgba(255, 255, 255, 0.7);
                font-size: 1.1rem;
                margin-bottom: 8px;
            }
            .success-note {
                color: #d4af37 !important;
                font-weight: 600;
            }
        `;
        document.head.appendChild(style);
        
        console.log('Registration submitted:', data);
    });
}

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
