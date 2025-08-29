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
(Updated with Category, Exams Accepted, Avg Salary, Total Fees. Example entries below, full list too long for README)
-   **FMS Delhi - MBA:** Category: A1, Exams: CAT, Avg Salary: 34.10 Lakhs, Total Fees: 4.92 Lakhs.
-   **IIM Ahmedabad - MBA:** Category: A1, Exams: CAT, Avg Salary: 34.45 Lakhs, Total Fees: 26.50 Lakhs.
-   **XLRI - PGDM + PGDMHRM:** Category: A1, Exams: XAT, Avg Salary: 31.08 Lakhs, Total Fees: 33.40 Lakhs.
-   **TISS - HRM:** Category: A2, Exams: CAT, Avg Salary: 26.31 Lakhs, Total Fees: 2.07 Lakhs.
-   ... and many more IIMs and other top B-schools with detailed information.

### Tests:
-   **CAT:** Month: Nov, Duration: 120 mins, Sections: 3, Total Questions: 68, Negative Marking: MCQ- (Y) TITA*- (N), Sectional Time Limit: Yes.
-   **MH-CET:** Month: March, Duration: 150 mins, Sections: 4, Total Questions: 200, Negative Marking: No, Sectional Time Limit: No.
-   **CMAT:** Month: Jan, Duration: 180 mins, Sections: 5, Total Questions: 100, Negative Marking: Yes, Sectional Time Limit: Yes.
-   **XAT:** Month: Jan, Duration: 180 mins, Sections: 3 Sections + GK, Total Questions: 75 + 20 (GK), Negative Marking: (No negative marking for GK), Sectional Time Limit: Yes.
-   **SNAP:** Month: Dec, Duration: 60 mins, Sections: 3, Total Questions: 60, Negative Marking: Yes, Sectional Time Limit: No.
-   **NMAT:** Month: Nov-Dec, Duration: 120 mins, Sections: 3, Total Questions: 108, Negative Marking: Score range: 12-360 (Adaptive), Sectional Time Limit: Yes.
-   **MICAT:** Month: Dec/Jan, Duration: 135 mins, Sections: 3, Total Questions: 234, Negative Marking: Yes, Sectional Time Limit: Yes.
-   **CUET PG:** Month: March, Duration: 90 mins, Sections: 4, Total Questions: 75, Negative Marking: Yes, Sectional Time Limit: Yes.
-   **MAT:** Month: Feb/May/Aug/Dec, Duration: 120 mins, Sections: 5, Total Questions: 150, Negative Marking: Yes, Sectional Time Limit: No.
-   **PGDBA:** Month: Feb, Duration: 180 mins, Sections: 4, Total Questions: 50, Negative Marking: No, Sectional Time Limit: No.
-   **IBSAT:** Month: Dec, Duration: 120 mins, Sections: 4, Total Questions: 140, Negative Marking: No, Sectional Time Limit: No.
-   **ATMA:** Month: Feb/ May/ July/ Dec, Duration: 180 mins, Sections: 6, Total Questions: 180, Negative Marking: Yes, Sectional Time Limit: Yes.
