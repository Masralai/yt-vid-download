# YouTube Video Downloader

## 📝 Description
This is a **YouTube Video Downloader** featuring a frontend built with **React, Next.js, and TailwindCSS**. The backend functionality for video downloading is handled by a separate **Python API service built with Flask**. This Flask backend interacts with **yt-dlp** to download videos based on requests from the Next.js frontend.

## 🎮 Features
- Simple and user-friendly UI built with Next.js and TailwindCSS.
- Dedicated Python Flask backend API for handling download logic.
- Uses **yt-dlp** for powerful and reliable video downloading.
- Clear separation between frontend (Next.js) and backend (Flask) concerns.

## 🛠️ Technologies Used
### Frontend:
- **React** - Frontend library
- **Next.js** - Frontend framework (Server-side rendering, routing, etc.)
- **TailwindCSS** - Styling and responsiveness
- **TypeScript** - Type safety and maintainability

### Backend (API & Video Downloading):
- **Python** - Language for the backend API
- **Flask** - Micro web framework for the Python API
- **Flask-Cors** - Handles Cross-Origin Resource Sharing for the Flask API
- **yt-dlp (Version 2025.01.15)** - Powerful YouTube downloading library


## 📦 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/youtube-downloader.git
   ```
2. Navigate to the project folder:
   ```sh
   cd youtube-downloader
   ```

### Install Dependencies
3. Install Node.js dependencies:
   ```sh
   npm install
   ```
4. Set up a Python virtual environment:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
5. Install required Python libraries:
   ```sh
   pip install yt-dlp
   ```
6. Start the Next.js development server:
   ```sh
   npm run dev
   ```

## 🚀 How to Use
1. Open the app in a browser.
2. Paste a YouTube video URL into the input field.
3. Click the **Download** button to start downloading.
4. The Next.js API routes will process the request, call the Python script, and provide a downloadable file.


