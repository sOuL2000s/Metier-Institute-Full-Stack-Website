import { createElement } from '../utils.js';
import { fetchData } from '../dataService.js';

export async function renderInstitutionsSection(parentSelector) {
    console.log(`institutionsSection.js: renderInstitutionsSection called with selector: ${parentSelector}`);
    const parentElement = document.querySelector(parentSelector);
    if (!parentElement) {
        console.error(`institutionsSection.js: Parent element not found for selector: ${parentSelector}`);
        return;
    }
    console.log('institutionsSection.js: Parent element found.');

    parentElement.innerHTML = '';
    const container = createElement('div', 'container');
    parentElement.appendChild(container);
    console.log('institutionsSection.js: Container created and appended.');

    const institutions = await fetchData('institutions');
    console.log('institutionsSection.js: Data fetched. Number of institutions:', institutions.length);

    if (institutions.length === 0) {
        container.appendChild(createElement('p', null, {}, 'No institution data available at the moment.'));
        console.log('institutionsSection.js: No institutions found, displaying message.');
        return;
    }

    const institutionsGrid = createElement('div', 'institutions-grid');
    console.log('institutionsSection.js: Starting to build institution cards.');

    institutions.forEach(institution => {
        try { // Add a try-catch around card creation for more specific errors
            const institutionCard = createElement('div', ['card', 'institution-card'], {}, [
                createElement('img', null, { src: institution.image || 'assets/images/placeholder.jpg', alt: institution.name }),
                createElement('h3', null, {}, institution.name),
                createElement('p', 'city', {}, institution.city),
                institution.description ? createElement('p', null, {}, institution.description) : null,
                createElement('p', null, {}, [createElement('strong', null, {}, 'Category: '), institution.category]),
                createElement('p', null, {}, [createElement('strong', null, {}, 'Exams Accepted: '), institution.examsAccepted.join(', ')]),
                createElement('p', null, {}, [createElement('strong', null, {}, 'Avg Salary: '), institution.avgSalary, ' Lakhs']),
                createElement('p', null, {}, [createElement('strong', null, {}, 'Total Fees: '), institution.totalFees, ' Lakhs']),
                createElement('a', null, { href: institution.link, target: '_blank', rel: 'noopener noreferrer' }, 'Visit Website')
            ].filter(Boolean));
            institutionsGrid.appendChild(institutionCard);
            // console.log(`institutionsSection.js: Added card for ${institution.name}`); // Can be too verbose
        } catch (e) {
            console.error(`institutionsSection.js: Error creating card for ${institution.name}:`, e);
        }
    });
    
    container.appendChild(createElement('h2', null, {}, 'Top Management Institutions'));
    container.appendChild(institutionsGrid);
    console.log('institutionsSection.js: All institutions rendered.');
}
