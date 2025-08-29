import { createElement } from '../utils.js';
import { fetchData } from '../dataService.js';

export async function renderProgramsSection(parentSelector) {
    const parentElement = document.querySelector(parentSelector); // This should now be #programs-cards-container
    if (!parentElement) return;

    // Clear existing content if this is the only thing in the parent,
    // but if it's appended, we don't want to clear the whole parent.
    // The 'container' div is already part of the HTML structure.
    parentElement.innerHTML = ''; // Clear only the programs-cards-container

    const programs = await fetchData('programs');

    if (programs.length === 0) {
        parentElement.appendChild(createElement('p', null, {}, 'No programs available at the moment. Please check back later.'));
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
    
    parentElement.appendChild(createElement('h2', null, {}, 'Our Programs'));
    parentElement.appendChild(programsGrid);
}
