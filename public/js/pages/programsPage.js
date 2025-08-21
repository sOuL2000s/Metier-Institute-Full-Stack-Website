import { renderProgramsSection } from '../components/prograamsSection.js';
import { setupMobileNavbarToggle } from '../navbar.js'; // NEW: Import mobile navbar toggle function

document.addEventListener('DOMContentLoaded', () => {
    renderProgramsSection('#programs-page');
    setupMobileNavbarToggle(); // Setup mobile navigation toggle for all pages
});