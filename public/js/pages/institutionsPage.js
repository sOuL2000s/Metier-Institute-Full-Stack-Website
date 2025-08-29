import { renderInstitutionsCardsSection } from '../components/institutionsSection.js'; // MODIFIED IMPORT
import { setupMobileNavbarToggle } from '../navbar.js';

document.addEventListener('DOMContentLoaded', () => {
    renderInstitutionsCardsSection('#institutions-page'); // MODIFIED CALL
    setupMobileNavbarToggle();
});
