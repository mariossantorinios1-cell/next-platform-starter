export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <h1 className="text-5xl font-bold mb-6">EverythingNow</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center">
        Welcome to <strong>EverythingNow</strong> — your place for the latest news,
        trends, tech, and stories from around the world. Updated live. Always fresh.
      </p>
      <a
        href="#"
        className="mt-10 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all"
      >
        Explore Now
      </a>
    </main>
  );
}
