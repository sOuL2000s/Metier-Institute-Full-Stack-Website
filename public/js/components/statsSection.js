// public/js/components/statsSection.js
import { createElement } from '../utils.js';

export function renderStatsSection(parentSelector) {
    const parentElement = document.querySelector(parentSelector);
    if (!parentElement) return;

    const stats = [
        { number: '15+', label: 'Years Experience' },
        { number: '5000+', label: 'Students Mentored' },
        { number: '99.9%', label: 'CAT Success Rate' },
        { number: '50+', label: 'Partner B-Schools' }
    ];

    parentElement.innerHTML = '';
    
    stats.forEach(stat => {
        const statItem = createElement('div', 'stat-item', {}, [
            createElement('span', 'stat-number', {}, stat.number),
            createElement('span', 'stat-label', {}, stat.label)
        ]);
        parentElement.appendChild(statItem);
    });
}