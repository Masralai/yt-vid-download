const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// API Endpoint to download video
app.post("/download", (req, res) => {
    const videoUrl = req.body.url;
    if (!videoUrl) {
        return res.status(400).json({ error: "URL is required" });
    }

    const outputFile = `downloads/video.mp4`;

    // Execute yt-dlp command
    exec(`yt-dlp -o ${outputFile} ${videoUrl}`, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ error: "Failed to download video" });
        }
        res.json({ downloadLink: `/video.mp4` });
    });
});

// Serve the downloaded files
app.use(express.static("downloads"));

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
