const BASE_URL = 'https://m-tier-institute-full-stack-website.onrender.com/api'; // Ensure this matches your backend port when running server.js

/**
 * Fetches data from the specified API endpoint.
 * @param {string} endpoint - The API endpoint (e.g., 'programs', 'faculties').
 * @returns {Promise<Array>} A promise that resolves to an array of data.
 */
export async function fetchData(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        return []; // Return empty array on error
    }
}