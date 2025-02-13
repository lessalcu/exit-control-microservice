require('dotenv').config();
const express = require('express');
const cors = require('cors');  // Import CORS
const exitRoutes = require('./src/routes/exitRoutes');
const db = require('./src/config/db');

const app = express();
const PORT = process.env.PORT || 7001;

// Enable CORS for all origins
app.use(cors());  // This allows all origins, no need to specify frontend origin

app.use(express.json());
app.use('/exit', exitRoutes);  // All routes under /exit will be handled by exitRoutes

app.listen(PORT, async () => {
    console.log(`✅ Exit Control Service running on port ${PORT}`);
});
