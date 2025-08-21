import { renderInstitutionsSection } from '../components/institutionsSection.js';
import { setupMobileNavbarToggle } from '../navbar.js'; // NEW: Import mobile navbar toggle function

document.addEventListener('DOMContentLoaded', () => {
    renderInstitutionsSection('#institutions-page');
    setupMobileNavbarToggle(); // Setup mobile navigation toggle for all pages
});