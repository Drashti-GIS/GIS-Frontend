'use client';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!email) return;
    setMessage('Reset link sent to your email!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-3 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSend}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send Reset Link</button>
        {message && <p className="text-green-600 mt-4 text-sm text-center">{message}</p>}
      </div>
    </div>
  );
}
