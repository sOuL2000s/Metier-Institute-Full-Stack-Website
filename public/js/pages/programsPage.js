import { renderProgramsSection } from '../components/prograamsSection.js';
import { renderInstitutionsTableSection } from '../components/institutionsTableSection.js'; // NEW IMPORT
import { setupMobileNavbarToggle } from '../navbar.js';

document.addEventListener('DOMContentLoaded', () => {
    renderProgramsSection('#programs-cards-container'); // MODIFIED: Target the new container
    renderInstitutionsTableSection('#programs-institutions-table-container');
    setupMobileNavbarToggle();
});
