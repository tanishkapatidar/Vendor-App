const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const vendorRoutes = require('./routes/vendorRoutes');
app.use('/api/vendors',vendorRoutes);

app.get("/", (req, res) => {
    res.send("Succesfully Connected")
});

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
});

