import { renderFacultySection } from '../components/facultySection.js';
import { setupMobileNavbarToggle } from '../navbar.js'; // NEW: Import mobile navbar toggle function

document.addEventListener('DOMContentLoaded', () => {
    renderFacultySection('#faculties-page');
    setupMobileNavbarToggle(); // Setup mobile navigation toggle for all pages
});
