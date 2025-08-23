import { createElement } from '../utils.js';
import { fetchData } from '../dataService.js';

export async function renderInstitutionsSection(parentSelector) {
    const parentElement = document.querySelector(parentSelector);
    if (!parentElement) return;

    // Clear existing content and add title within a container
    parentElement.innerHTML = '';
    const container = createElement('div', 'container');
    parentElement.appendChild(container);

    const institutions = await fetchData('institutions');

    if (institutions.length === 0) {
        container.appendChild(createElement('p', null, {}, 'No institution data available at the moment.'));
        return;
    }

    const institutionsGrid = createElement('div', 'institutions-grid');

    institutions.forEach(institution => {
        const institutionCard = createElement('div', ['card', 'institution-card'], {}, [
            createElement('img', null, { src: institution.image || 'assets/images/placeholder.jpg', alt: institution.name }),
            createElement('h3', null, {}, institution.name),
            createElement('p', 'city', {}, institution.city),
            createElement('p', null, {}, institution.description),
            createElement('a', null, { href: institution.link, target: '_blank', rel: 'noopener noreferrer' }, 'Visit Website')
        ]);
        institutionsGrid.appendChild(institutionCard);
    });
    
    container.appendChild(createElement('h2', null, {}, 'Top Management Institutions'));
    container.appendChild(institutionsGrid);
}