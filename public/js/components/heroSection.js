import { createElement } from '../utils.js';

export function renderHeroSection(parentSelector) {
    const parentElement = document.querySelector(parentSelector);
    if (!parentElement) return;

    const heroContent = createElement('div', 'hero-content', {}, [
        createElement('h1', null, {}, 'Shape Your Future at Metier Study Center'),
        createElement('p', null, {}, 'Premium Mentorship for CAT, XAT, NMAT & Top Global B-Schools. Build a career, not just a profile.'),
        createElement('div', 'hero-btns', {}, [
            createElement('a', 'btn', { href: 'programs.html' }, 'View Programs'),
            createElement('a', ['btn', 'btn-outline'], { href: 'contact.html', style: 'background: transparent; border: 2px solid var(--accent-gold); margin-left: 15px;' }, 'Get Free Consultation')
        ])
    ]);
    parentElement.appendChild(heroContent);
}
