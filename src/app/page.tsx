'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/login');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 to-blue-200 px-4">
      <div className="bg-white bg-opacity-90 p-10 rounded-xl shadow-2xl max-w-xl w-full text-center animate-fade-in">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800 tracking-tight leading-snug">
          Land Data Analysis System
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Your one-stop platform for insightful land project analysis and visualisation.
        </p>

        <button
          onClick={handleRedirect}
          className="px-6 py-3 bg-green-600 text-white text-base font-medium rounded-md hover:bg-green-700 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </main>
  );
}





