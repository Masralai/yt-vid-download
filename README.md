# YouTube Video Downloader

## 📝 Description
This is a **YouTube Video Downloader** built using **React, Next.js, and TailwindCSS** for the frontend, with **Next.js API Routes** handling the backend. The backend interacts with **yt-dlp** in Python to download videos in various formats and resolutions.

## 🎮 Features
- Download YouTube videos in different resolutions and formats
- Simple and user-friendly UI
- Uses **yt-dlp** for powerful and reliable video downloading
- Next.js for server-side rendering and API routes
- TailwindCSS for a clean and modern design
- No separate Express.js backend required

## 🛠️ Technologies Used
### Frontend & Backend:
- **React** - Frontend framework
- **Next.js** - Server-side rendering and API routes (replaces Express.js)
- **TailwindCSS** - Styling and responsiveness
- **TypeScript** - Type safety and maintainability

### Backend (API & Video Downloading):
- **Python** - Used for video downloading
- **yt-dlp** - Powerful YouTube downloading library
- **child_process (Node.js)** - Executes the Python script within Next.js API routes

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
3. Choose a format and resolution.
4. Click the **Download** button to start downloading.
5. The Next.js API routes will process the request, call the Python script, and provide a downloadable file.

