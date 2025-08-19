import { createElement } from '../utils.js';

export function renderHeroSection(parentSelector) {
    const parentElement = document.querySelector(parentSelector);
    if (!parentElement) return;

    const heroContent = createElement('div', 'hero-content', {}, [
        createElement('h1', null, {}, 'Unlock Your Potential with Metier Institute'),
        createElement('p', null, {}, 'Your trusted partner for MBA entrance test preparation and comprehensive career mentorship.'),
        createElement('a', 'btn', { href: 'programs.html' }, 'Explore Programs') // Link to programs.html
    ]);
    parentElement.appendChild(heroContent);
}