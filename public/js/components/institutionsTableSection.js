// public/js/components/institutionsTableSection.js

import { createElement } from '../utils.js';
import { fetchData } from '../dataService.js';

export async function renderInstitutionsTableSection(parentSelector) {
    const parentElement = document.querySelector(parentSelector);
    if (!parentElement) {
        console.error(`institutionsTableSection.js: Parent element not found for selector: ${parentSelector}`);
        return;
    }

    // Clear existing content if this is the only thing in the parent,
    // but if it's appended, we don't want to clear the whole parent.
    // For programs page, it will be appended to a container, so no clear needed here.

    const institutions = await fetchData('institutions');

    if (institutions.length === 0) {
        parentElement.appendChild(createElement('p', null, {}, 'No institution data available at the moment.'));
        return;
    }

    // Add the title and the "All data as on 5th June 2025" note
    parentElement.appendChild(createElement('h2', null, {}, 'Know Your Dream B-Schools')); // THIS IS THE NEW TITLE
    parentElement.appendChild(createElement('p', 'data-note', {}, '*All data as on 5th June 2025')); // Add a class for styling this note

    const tableWrapper = createElement('div', 'table-responsive'); // Wrapper for responsive table
    const table = createElement('table', 'institutions-table');

    // Table Header
    const thead = createElement('thead');
    const headerRow = createElement('tr');
    headerRow.appendChild(createElement('th', null, {}, 'Institute Name'));
    headerRow.appendChild(createElement('th', null, {}, 'Category'));
    headerRow.appendChild(createElement('th', null, {}, 'Exams Accepted'));
    headerRow.appendChild(createElement('th', null, {}, 'Avg Salary (in Lakhs)'));
    headerRow.appendChild(createElement('th', null, {}, 'Total Fees (in Lakhs)'));
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Table Body
    const tbody = createElement('tbody');
    institutions.forEach(institution => {
        const row = createElement('tr');
        row.appendChild(createElement('td', null, {}, institution.name));
        row.appendChild(createElement('td', null, {}, institution.category));
        row.appendChild(createElement('td', null, {}, institution.examsAccepted.join(', ')));
        row.appendChild(createElement('td', null, {}, institution.avgSalary));
        row.appendChild(createElement('td', null, {}, institution.totalFees));
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    tableWrapper.appendChild(table);
    parentElement.appendChild(tableWrapper);
}
