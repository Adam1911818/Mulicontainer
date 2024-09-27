const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const cloudinary = require("cloudinary");

dotenv.config();
const port = process.env.PORT || 3000; // Declare 'port' only once

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true }));

// Database connection
require("./database/conn");

// Routes
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

app.use("/api", userRoutes);
app.use("/api", blogRoutes);

app.get("/", (req, res) => {
    res.send("Express: backend");
});

app.post("/", (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    res.status(200).send(req.body);
});

// Listen on the specified port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
