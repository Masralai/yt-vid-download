import Image from "next/image";

export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#00674f]">
    <h1 className="text-white text-3xl md:text-4xl font-semibold mb-6">
      YouTube Video Downloader
    </h1>
    <div className="flex items-center bg-white rounded-lg shadow-md p-2 w-full max-w-lg">
      <input
        id="videourl"
        type="text"
        placeholder="Paste your video link here"
        className="flex-1 outline-none px-4 py-2 text-gray-600 placeholder-gray-400"
      />
      <button  className="bg-[#fdfbd4] hover:bg-[#d9d7b6] text-black px-5 py-2 rounded-lg flex items-center">
        Download <span className="ml-2">➜</span>
      </button>
    </div>
    </div>
    
  );
}
