import { renderTestsSection } from '../components/testsSection.js';
import { setupMobileNavbarToggle } from '../navbar.js'; // NEW: Import mobile navbar toggle function

document.addEventListener('DOMContentLoaded', () => {
    renderTestsSection('#tests-page');
    setupMobileNavbarToggle(); // Setup mobile navigation toggle for all pages
});
