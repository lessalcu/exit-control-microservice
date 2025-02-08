require('dotenv').config();
const express = require('express');
const exitRoutes = require('./src/routes/exitRoutes');
const db = require('./src/config/db');

const app = express();
const PORT = process.env.PORT || 7001;

app.use(express.json());
app.use('/exit', exitRoutes);

app.listen(PORT, async () => {
    console.log(`✅ Exit Control Service running on port ${PORT}`);
});
