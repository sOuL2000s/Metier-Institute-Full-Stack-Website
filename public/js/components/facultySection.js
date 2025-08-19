import { createElement } from '../utils.js';
import { fetchData } from '../api.js';

export async function renderFacultySection(parentSelector) {
    const parentElement = document.querySelector(parentSelector);
    if (!parentElement) return;

    // Clear existing content and add title within a container
    parentElement.innerHTML = '';
    const container = createElement('div', 'container');
    parentElement.appendChild(container);

    const faculties = await fetchData('faculties');

    if (faculties.length === 0) {
        container.appendChild(createElement('p', null, {}, 'No faculty information available at the moment.'));
        return;
    }

    const facultyGrid = createElement('div', 'faculty-grid');

    faculties.forEach(faculty => {
        const subjectsList = createElement('ul');
        faculty.subjects.forEach(subject => {
            subjectsList.appendChild(createElement('li', null, {}, subject));
        });

        const facultyCard = createElement('div', ['card', 'faculty-card'], {}, [
            createElement('img', null, { src: faculty.image || 'assets/images/placeholder.jpg', alt: faculty.name }),
            createElement('h3', null, {}, faculty.name),
            createElement('p', 'designation', {}, faculty.designation),
            createElement('h4', null, {}, 'Expertise:'),
            subjectsList
        ]);
        facultyGrid.appendChild(facultyCard);
    });
    
    container.appendChild(createElement('h2', null, {}, 'Meet Our Expert Faculties'));
    container.appendChild(facultyGrid);
}