'use client';
import { useState } from 'react';

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = () => {
    if (newPassword !== confirm) {
      setMessage('Passwords do not match.');
      return;
    }
    setMessage('Password reset successfully.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-center">Reset Password</h2>
        <input
          type="password"
          placeholder="New Password"
          className="mb-3 w-full p-2 border rounded"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="mb-3 w-full p-2 border rounded"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button onClick={handleReset}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Reset Password</button>
        {message && <p className="mt-3 text-sm text-center text-blue-600">{message}</p>}
      </div>
    </div>
  );
}
