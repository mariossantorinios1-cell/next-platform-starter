export default function HomePage() {
  return (
    <main className="p-6 text-center bg-gradient-to-b from-sky-50 to-white min-h-screen">
      <h1 className="text-5xl font-extrabold mb-6 text-blue-600">
        EverythingNow 🌍
      </h1>
      <p className="text-lg mb-10 text-gray-700">
        Your all-in-one hub for <b>News</b>, <b>Tech</b>, <b>Lifestyle</b>, <b>Trends</b> & more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/news" className="p-4 bg-blue-100 rounded-2xl shadow hover:bg-blue-200">
          🗞️ Latest News
        </a>
        <a href="/tech" className="p-4 bg-purple-100 rounded-2xl shadow hover:bg-purple-200">
          💻 Tech
        </a>
        <a href="/lifestyle" className="p-4 bg-pink-100 rounded-2xl shadow hover:bg-pink-200">
          🌈 Lifestyle
        </a>
        <a href="/trending" className="p-4 bg-yellow-100 rounded-2xl shadow hover:bg-yellow-200">
          🔥 Trending
        </a>
        <a href="/sports" className="p-4 bg-green-100 rounded-2xl shadow hover:bg-green-200">
          ⚽ Sports
        </a>
        <a href="/contact" className="p-4 bg-gray-100 rounded-2xl shadow hover:bg-gray-200">
          ✉️ Contact
        </a>
      </div>
    </main>
  );
}
