// Import all rendering functions from components
import { renderHeroSection } from './components/heroSection.js';
import { setupMobileNavbarToggle } from './navbar.js'; // NEW: Import mobile navbar toggle function

document.addEventListener('DOMContentLoaded', () => {
    // Only render the hero section on the home page
    renderHeroSection('#hero');

    // Setup mobile navigation toggle for all pages
    setupMobileNavbarToggle();
});