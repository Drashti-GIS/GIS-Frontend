'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    router.push('/admin/manage-users');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-gray-200 to-gray-300">
      <div className="bg-white p-8 rounded-md shadow-2xl w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Login</h2>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
}

