// public/js/components/institutionsSection.js (Now for rendering cards)

import { createElement } from '../utils.js';
import { fetchData } from '../dataService.js';

export async function renderInstitutionsCardsSection(parentSelector) {
    const parentElement = document.querySelector(parentSelector);
    if (!parentElement) {
        console.error(`institutionsSection.js: Parent element not found for selector: ${parentSelector}`);
        return;
    }

    parentElement.innerHTML = ''; // Clear existing content for this section
    const container = createElement('div', 'container');
    parentElement.appendChild(container);

    const institutions = await fetchData('institutions');

    if (institutions.length === 0) {
        container.appendChild(createElement('p', null, {}, 'No institution data available at the moment.'));
        return;
    }

    container.appendChild(createElement('h2', null, {}, 'Top Management Institutions')); // Title for cards
    container.appendChild(createElement('p', 'data-note', {}, '*All data as on 5th June 2025')); // Add a class for styling this note

    const institutionsGrid = createElement('div', 'institutions-grid'); // Use the grid for cards

    institutions.forEach(institution => {
        const institutionCard = createElement('div', ['card', 'institution-card'], {}, [
            createElement('img', null, { src: institution.image || 'assets/images/placeholder.jpg', alt: institution.name }),
            createElement('h3', null, {}, institution.name),
            createElement('p', 'city', {}, institution.city),
            createElement('p', null, {}, [createElement('strong', null, {}, 'Category: '), institution.category]),
            createElement('p', null, {}, [createElement('strong', null, {}, 'Exams: '), institution.examsAccepted.join(', ')]),
            createElement('p', null, {}, [createElement('strong', null, {}, 'Avg Salary: '), `${institution.avgSalary} Lakhs`]),
            createElement('p', null, {}, [createElement('strong', null, {}, 'Total Fees: '), `${institution.totalFees} Lakhs`]),
            createElement('a', 'btn', { href: institution.link, target: '_blank' }, 'Visit Website')
        ]);
        institutionsGrid.appendChild(institutionCard);
    });

    container.appendChild(institutionsGrid);
}
