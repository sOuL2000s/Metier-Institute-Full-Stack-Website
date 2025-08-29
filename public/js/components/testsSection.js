import { createElement } from '../utils.js';
import { fetchData } from '../dataService.js';

export async function renderTestsSection(parentSelector) {
    const parentElement = document.querySelector(parentSelector);
    if (!parentElement) return;

    // Clear existing content and add title within a container
    parentElement.innerHTML = '';
    const container = createElement('div', 'container');
    parentElement.appendChild(container);

    const tests = await fetchData('tests');

    if (tests.length === 0) {
        container.appendChild(createElement('p', null, {}, 'No test information available at the moment.'));
        return;
    }

    const testsList = createElement('div', 'tests-list');

    tests.forEach(test => {
        const testItem = createElement('div', 'test-item', {}, [
            createElement('h3', null, {}, test.name),
            createElement('p', null, {}, [createElement('strong', null, {}, 'Month: '), test.time]),
            createElement('p', null, {}, [createElement('strong', null, {}, 'Duration: '), test.duration]),
            createElement('p', null, {}, [createElement('strong', null, {}, 'Sections: '), test.sections]),
            createElement('p', null, {}, [createElement('strong', null, {}, 'Total Questions: '), test.totalQs]),
            createElement('p', null, {}, [createElement('strong', null, {}, 'Negative Marking: '), test.negativeMarking]),
            createElement('p', null, {}, [createElement('strong', null, {}, 'Sectional Time Limit: '), test.sectionalTimeLimit])
        ]);
        testsList.appendChild(testItem);
    });
    
    container.appendChild(createElement('h2', null, {}, 'Entrance Test Information'));
    container.appendChild(testsList);
}
