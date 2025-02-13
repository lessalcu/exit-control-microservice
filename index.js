require('dotenv').config();
const express = require('express');
const cors = require('cors');  // Import CORS
const exitRoutes = require('./src/routes/exitRoutes');

const db = require('./src/config/db');

const app = express();

const PORT = process.env.PORT || 7001;
app.use(cors()); 

app.use(express.json());
app.use('/exit', exitRoutes);

app.listen(PORT, async () => {
    console.log(`✅ Exit Control Service running on port ${PORT}`);
});
