# Metier Study Center Frontend-Only Website

This project provides a static, purely front-end web application for an educational institution. It features a multi-page structure with dedicated sections for MBA test preparation programs, faculty details, institution lists (IIMs, XLRI, Symbiosis, Narsee Munjee), and test information.

## Project Structure

-   `public/`: Contains all frontend assets (HTML, CSS, JavaScript, images).
    -   `public/index.html`: The main home page.
    -   `public/programs.html`: Dedicated page for programs.
    -   `public/faculties.html`: Dedicated page for faculties.
    -   `public/institutions.html`: Dedicated page for institutions.
    -   `public/tests.html`: Dedicated page for test information.
    -   `public/contact.html`: Dedicated contact page.
    -   `public/css/`: Stylesheets.
    -   `public/js/`: General utilities, components, and now, your application data (`dataService.js`).
    -   `public/js/components/`: Reusable UI components for rendering sections.
    -   `public/js/pages/`: Page-specific entry point scripts.

## Features

-   **Responsive Design:** Basic responsive styling included.
-   **Multi-Page Frontend:** Each major section has its own dedicated HTML page.
-   **Modular JavaScript:** Each page loads only the necessary JavaScript components.
-   **Static Data:** All dynamic content is now directly embedded within the frontend JavaScript, eliminating the need for a backend server and improving load times.
-   **Instant Content Loading:** Data is available immediately without network delays.

## Setup & Running the Application (Pure Frontend)

Follow these steps to get the application up and running on your local machine. This is now a completely static site, so you just need a simple HTTP server.

### Prerequisites

You need a simple HTTP server to serve static files. If you use VS Code, the "Live Server" extension is highly recommended. Otherwise, Python provides a simple option.

### Running the Frontend

The frontend consists of static HTML, CSS, and JavaScript files. It's crucial to serve these files via a local HTTP server to avoid CORS issues from `file://` protocol and ensure JavaScript module imports work correctly.

**Option A: Using Live Server (Recommended for Development in VS Code)**

If you use VS Code, you can install the "Live Server" extension.
1.  Open your project in VS Code.
2.  Right-click on `public/index.html` in your editor.
3.  Select "Open with Live Server".
    This will open the page in your default browser, usually on `http://127.0.0.1:5500` or `http://localhost:5500`.
    From the home page, you can then navigate to other sections.

**Option B: Using a Simple Python HTTP Server**

1.  Open your terminal or command prompt.
2.  Navigate to the `public` directory:
    ```bash
    cd your-project-root/public
    ```
3.  Run a simple Python HTTP server:
    ```bash
    python -m http.server 8000
    ```
    Then, open your browser and go to `http://localhost:8000`.

### Important Notes:

-   **Instant Loading:** You should notice a significant improvement in how quickly your content loads, as there are no backend requests.
-   **Multi-page Navigation:** Once the frontend server is running (e.g., `http://localhost:5500`), you can navigate to `programs.html`, `faculties.html`, etc., directly or by using the navigation links in the header.
-   **Images:** Placeholder image URLs are used. Ensure your `public/assets/images/` directory contains the actual image files referenced in `public/js/dataService.js` (e.g., `faculty_soumyadip.jpg`, `iima.jpg`).
-   **Dynamic Updates:** For future updates to your programs, faculties, institutions, or tests, you will need to directly edit the `ALL_APP_DATA` object within `public/js/dataService.js`.

---

## Content Outline Used

The following content was extracted from your provided chat snippets and implemented:

### Programs:
-   MBA Entrance Test preparation
-   Exclusive mentoring for CAT, XAT, NMAT, SNAP etc

### Faculties:
-   Highly experienced faculties in the Test Prep industry
-   **Sabyasachi Sarkar:** Mentoring Quantitative Ability, Data Interpretation and Logical Reasoning, Verbal Ability and Reading Comprehension

### Institutions:
-   IIM Ahmedabad
-   IIM Bangalore
-   IIM Calcutta
-   XLRI Jamshedpur
-   SYMBIOSIS Pune (SIBM Pune)
-   Narsee Monjee (NMIMS Mumbai)

### Tests:
-   **CAT (Common Admission Test):** Annually (Nov/Dec). Qualification: Bachelor's degree with 50% (45% for SC/ST/PwD).
-   **XAT (Xavier Aptitude Test):** Annually (Jan). Qualification: Bachelor's degree of minimum three years duration or equivalent.
-   **NMAT by GMAC:** Testing window (Oct-Dec). Qualification: Bachelor's degree (10+2+3/4) with 50%.
-   **SNAP (Symbiosis National Aptitude Test):** Annually (Dec). Qualification: Graduate with 50% (45% for SC/ST).