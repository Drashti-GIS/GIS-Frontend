'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/login');
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-center px-4 relative"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/2685336/pexels-photo-2685336.jpeg')", // The selected background image
      }}
    >
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Welcome to Land Data Analysis System
        </h1>

        <p className="text-white mb-8">
          Your one-stop platform for land project analysis and visualisation.
        </p>

        <button
          onClick={handleRedirect}
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </main>
  );
}




