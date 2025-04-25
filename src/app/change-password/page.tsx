'use client';
import { useState } from 'react';

export default function ChangePasswordPage() {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = () => {
    if (!current || !newPass) {
      setMessage('All fields are required.');
      return;
    }
    setMessage('Password updated successfully.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">Change Password</h2>
        <input
          type="password"
          placeholder="Current Password"
          className="mb-3 w-full p-2 border rounded"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          className="mb-3 w-full p-2 border rounded"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
        />
        <button onClick={handleChange}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Update Password</button>
        {message && <p className="mt-3 text-center text-sm text-green-600">{message}</p>}
      </div>
    </div>
  );
}
