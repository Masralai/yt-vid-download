
async function downloadVideo() {
    const url = document.getElementById("videoUrl").value;
    if (!url) return alert("Please enter a valid URL");

    const response = await fetch("http://localhost:5000/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
    });

    const data = await response.json();
    if (data.downloadLink) {
        const link = document.getElementById("downloadLink");
        link.href = "http://localhost:5000" + data.downloadLink;
        link.style.display = "block";
        link.innerText = "Click here to download!";
    } else {
        alert("Failed to download video.");
    }
}
    
