'use client';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [email, setEmail] = useState('');
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setEmail(user.email || '');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 shadow-md rounded w-full max-w-sm">
        <h2 className="text-xl font-semibold text-center mb-4">Profile</h2>
        {edit ? (
          <>
            <input
              type="email"
              className="w-full p-2 mb-3 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={() => {
                localStorage.setItem('user', JSON.stringify({ email }));
                setEdit(false);
              }}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <p className="mb-4 text-center">Email: {email}</p>
            <button
              onClick={() => setEdit(true)}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}
