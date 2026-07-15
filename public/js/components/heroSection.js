import { createElement } from '../utils.js';

export function renderHeroSection(parentSelector) {
    const parentElement = document.querySelector(parentSelector);
    if (!parentElement) return;

    parentElement.classList.add('relative', 'overflow-hidden', 'bg-slate-900', 'flex', 'items-center');

    const heroInner = createElement('div', 'container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center relative z-10', {}, [
        createElement('div', 'w-full md:w-1/2 text-left', {}, [
            createElement('span', 'inline-block py-1 px-3 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-bold uppercase tracking-widest', {}, 'Ranchi\'s #1 MBA Prep'),
            createElement('h1', 'text-5xl lg:text-7xl font-black text-white leading-tight mb-8', {}, [
                'Shape Your ',
                createElement('span', 'text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500', {}, 'Future'),
                ' with Experts'
            ]),
            createElement('p', 'text-xl text-slate-400 mb-10 max-w-lg leading-relaxed', {}, 'Elite mentorship for CAT, XAT, and Global B-Schools. We don\'t just teach subjects; we build careers.'),
            createElement('div', 'flex flex-wrap gap-4', {}, [
                createElement('a', 'px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl transition-all shadow-lg shadow-amber-500/20', { href: 'programs.html' }, 'Explore Programs'),
                createElement('a', 'px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all', { href: 'contact.html' }, 'Book Free Demo')
            ])
        ]),
        createElement('div', 'hidden md:block w-1/2 relative', {}, [
            createElement('div', 'absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl', {}),
            createElement('div', 'absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl', {}),
            createElement('div', 'relative z-10 rounded-3xl border border-white/10 p-4 bg-white/5 backdrop-blur-sm shadow-2xl', {}, [
                createElement('img', 'rounded-2xl', { src: 'assets/images/hero_background.jpg', alt: 'Classroom' })
            ])
        ])
    ]);
    
    parentElement.innerHTML = '';
    parentElement.appendChild(heroInner);
}
