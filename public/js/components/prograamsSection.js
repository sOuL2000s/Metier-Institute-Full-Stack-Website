import { createElement } from '../utils.js';
import { fetchData } from '../dataService.js';

export async function renderProgramsSection(parentSelector) {
    const parentElement = document.querySelector(parentSelector);
    if (!parentElement) return;

    // Clear existing content and add title within a container
    parentElement.innerHTML = '';
    const container = createElement('div', 'container');
    parentElement.appendChild(container);

    const programs = await fetchData('programs');

    if (programs.length === 0) {
        container.appendChild(createElement('p', null, {}, 'No programs available at the moment. Please check back later.'));
        return;
    }

    const programsGrid = createElement('div', 'programs-grid');

    programs.forEach(program => {
        const programCard = createElement('div', 'card', {}, [
            createElement('h3', null, {}, program.title),
            createElement('p', null, {}, program.description)
        ]);
        programsGrid.appendChild(programCard);
    });
    
    container.appendChild(createElement('h2', null, {}, 'Our Programs'));
    container.appendChild(programsGrid);
}