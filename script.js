// Smooth scroll behavior and intersection observer for fade-in animations

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.about-content, .status-content');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    const buttons = document.querySelectorAll('.discord-btn, .footer-discord-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const triangles = document.querySelectorAll('.bg-triangle');
        
        triangles.forEach((triangle, index) => {
            const speed = 0.2 + (index * 0.1);
            const yPos = -(scrolled * speed);
            triangle.style.transform = `translateY(${yPos}px)`;
        });
    });
});

