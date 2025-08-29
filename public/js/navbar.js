// public/js/navbar.js
/**
 * Sets up the mobile navigation toggle functionality.
 * This function should be called on DOMContentLoaded for every HTML page.
 */
export function setupMobileNavbarToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const body = document.body;

    if (menuToggle && navbar && body) {
        // --- NEW/MODIFIED: Ensure menu is always closed and button in default state on page load ---
        // This is crucial for multi-page applications where state resets on navigation.
        // It ensures that when a new page loads, the mobile menu is always initially hidden.
        menuToggle.classList.remove('is-active'); // Ensures hamburger icon reverts to lines (from X)
        body.classList.remove('nav-open');       // Ensures menu is hidden and body overflow is normal

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active'); // Toggles hamburger to X and vice-versa
            body.classList.toggle('nav-open');       // Controls the navbar's visibility and body overflow
        });

        // Close menu if a nav link is clicked. This provides a smooth visual exit
        // before the browser navigates to the new page.
        navbar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Check if the menu is currently open before attempting to close it
                if (body.classList.contains('nav-open')) { // We check body.nav-open as it controls visibility
                    menuToggle.classList.remove('is-active'); // Revert hamburger to default lines
                    body.classList.remove('nav-open');       // Hide menu and allow scrolling
                }
                // The browser will then handle the navigation to the new page.
                // No need to preventDefault unless you want to handle routing client-side (SPA behavior).
            });
        });
    }
}
