// Import all rendering functions from components
import { renderHeroSection } from './components/heroSection.js';
import { renderStatsSection } from './components/statsSection.js';
import { setupMobileNavbarToggle } from './navbar.js';
import { initScrollAnimations, initSmoothScroll } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    renderHeroSection('#hero');
    renderStatsSection('#stats-container');
    setupMobileNavbarToggle();
    
    // Allow content to render before triggering entrance animations
    setTimeout(() => {
        initScrollAnimations();
    }, 150);
    
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imgOptions = { threshold: 0, rootMargin: "0px 0px 300px 0px" };
    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        });
    }, imgOptions);
    images.forEach(img => imgObserver.observe(img));
});
