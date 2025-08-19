// Import all rendering functions from components
import { renderHeroSection } from './components/heroSection.js';
import { createElement } from './utils.js'; // utils.js is still needed for heroSection.js

document.addEventListener('DOMContentLoaded', () => {
    // Only render the hero section on the home page
    renderHeroSection('#hero');

    // For multi-page setup, navigation links handle page changes directly
    // Smooth scrolling is not needed for external links, only for internal anchors if they exist.
});