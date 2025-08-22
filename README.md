# Metier Study Center Full-Stack Website

This project provides a full-stack web application for an educational institution, featuring a multi-page structure with dedicated sections for MBA test preparation programs, faculty details, institution lists (IIMs, XLRI, Symbiosis, Narsee Munjee), and test information.

## Project Structure

-   `public/`: Contains all frontend assets (HTML, CSS, JavaScript, images).
    -   `public/index.html`: The main home page.
    -   `public/programs.html`: Dedicated page for programs.
    -   `public/faculties.html`: Dedicated page for faculties.
    -   `public/institutions.html`: Dedicated page for institutions.
    -   `public/tests.html`: Dedicated page for test information.
    -   `public/contact.html`: Dedicated contact page.
    -   `public/css/`: Stylesheets.
    -   `public/js/`: General utilities and API interaction.
    -   `public/js/components/`: Reusable UI components for rendering sections.
    -   `public/js/pages/`: Page-specific entry point scripts.
-   `server/`: Contains the backend Node.js server and data.

## Features

-   **Responsive Design:** Basic responsive styling included.
-   **Multi-Page Frontend:** Each major section has its own dedicated HTML page.
-   **Modular JavaScript:** Each page loads only the necessary JavaScript components.
-   **RESTful API:** Node.js Express backend to serve dynamic content.
-   **Dynamic Content Loading:** Data fetched from the backend API.

## Setup & Running the Application

Follow these steps to get the application up and running on your local machine. You'll need two separate terminal windows for the backend and frontend.

### Prerequisites

You need to have Node.js and npm (Node Package Manager) installed on your system.
You can download them from [nodejs.org](https://nodejs.org/).

### 1. Backend Server Setup

1.  Navigate into the `server` directory:
    ```bash
    cd Metier-Institute-Full-Stack-Website/server
    ```
2.  Install the required Node.js packages:
    ```bash
    npm install
    ```
3.  Start the backend server:
    ```bash
    node server.js
    ```
    The server will typically run on `http://localhost:3000`. Keep this terminal window open as the frontend relies on this server for data.

### 2. Frontend Setup

The frontend consists of static HTML, CSS, and JavaScript files. Since API calls are made, it's crucial to serve these files via a local HTTP server to avoid CORS issues from `file://` protocol.

**Option A: Using Live Server (Recommended for Development)**

If you use VS Code, you can install the "Live Server" extension.
1.  Right-click on `public/index.html` in your editor.
2  Select "Open with Live Server".
    This will open the page in your default browser, usually on `http://127.0.0.1:5500` or `http://localhost:5500`.
    From the home page, you can then navigate to other sections.
**Option B: Using a Simple Python HTTP Server**

1.  Navigate to the `public` directory:
    ```bash
    cd Metier-Institute-Full-Stack-Website/public
    ```
2.  Run a simple Python HTTP server:
    ```bash
    python -m http.server 8000
    ```
    Then, open your browser and go to `http://localhost:8000`.

### Important Notes:

-   **Multi-page Navigation:** Once the frontend server is running (e.g., `http://localhost:5500`), you can navigate to `programs.html`, `faculties.html`, etc., directly or by using the navigation links in the header.
-   **Images:** Placeholder image URLs are used. Replace `public/assets/images/placeholder.jpg` with your actual image files and update the paths in `server/data.json` accordingly.
-   **Styling:** The `style.css` provides a basic foundation. You will need to expand upon it to achieve your desired aesthetic and responsiveness.
-   **Data Persistence:** The `server/data.json` file acts as a simple database. For a production application, you would replace this with a real database (e.g., MongoDB, PostgreSQL, MySQL) and corresponding database interaction logic in `server.js`.

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