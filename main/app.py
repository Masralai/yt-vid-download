import yt_dlp

url = input("Enter URL")

ydl_opts = {
    "format": "mp4",  
    "outtmpl": "%(title)s.%(ext)s",
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download([url])
