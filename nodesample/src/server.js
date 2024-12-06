const express = require('express');
const app = express();

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ message: 'Backend is working!' });
});

// Start the server
const PORT = 3000; // Use any port you prefer
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
