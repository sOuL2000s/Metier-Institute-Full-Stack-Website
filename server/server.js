const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());

// Serve static files from the 'public' directory (optional, but good for local testing)
// app.use(express.static(path.join(__dirname, '../public')));

// Load data from data.json
const dataPath = path.join(__dirname, 'data.json');
let appData = {};

try {
    const data = fs.readFileSync(dataPath, 'utf8');
    appData = JSON.parse(data);
    console.log('Data loaded successfully from data.json');
} catch (error) {
    console.error('Error loading data.json:', error);
    process.exit(1); // Exit if data cannot be loaded
}

// API Routes
app.get('/api/programs', (req, res) => {
    res.json(appData.programs);
});

app.get('/api/faculties', (req, res) => {
    res.json(appData.faculties);
});

app.get('/api/institutions', (req, res) => {
    res.json(appData.institutions);
});

app.get('/api/tests', (req, res) => {
    res.json(appData.tests);
});

// Generic route to get any data type
app.get('/api/:dataType', (req, res) => {
    const dataType = req.params.dataType;
    if (appData[dataType]) {
        res.json(appData[dataType]);
    } else {
        res.status(404).json({ message: `Data type '${dataType}' not found.` });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});