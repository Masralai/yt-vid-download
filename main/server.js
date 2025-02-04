const express = require("express");
const { spawn } = require("child_process");

const app = express();
app.use(express.json());

app.post("/download-video", (req, res) => {
    const url = req.body.url;
    if (!url) return res.status(400).json({ error: "No URL provided" });

    const pythonProcess = spawn("python", ["download.py", url]);

    pythonProcess.stdout.on("data", (data) => {
        res.json({ message: "Download complete", output: data.toString() });
    });

    pythonProcess.stderr.on("data", (data) => {
        res.status(500).json({ error: data.toString() });
    });
});

app.listen(3000, () => console.log("Node.js running on port 3000"));
