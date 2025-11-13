export default function HomePage() {
  return (
    <main className="p-6 text-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-600 drop-shadow-lg">
        EverythingNow 🌍
      </h1>
      <p className="text-lg mb-8 text-gray-700">
        The ultimate hub for News, Tech, Lifestyle, Sports & Trends — all in one place.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <a href="/news" className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-50 transition">
          🗞️ <b>Latest News</b>
        </a>
        <a href="/tech" className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-purple-50 transition">
          💻 <b>Tech</b>
        </a>
        <a href="/lifestyle" className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-pink-50 transition">
          🌈 <b>Lifestyle</b>
        </a>
        <a href="/sports" className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-green-50 transition">
          ⚽ <b>Sports</b>
        </a>
        <a href="/trending" className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-yellow-50 transition">
          🔥 <b>Trending</b>
        </a>
        <a href="/contact" className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-gray-50 transition">
          ✉️ <b>Contact</b>
        </a>
      </div>
