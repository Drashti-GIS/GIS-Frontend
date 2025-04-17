'use client';
import { useState } from 'react';

const dummyUsers = [
  {
    name: 'L3 Admin',
    email: 'l3admin@yopmail.com',
    contact: '+971 50 123 4567',
    role: 'L3 Admin',
    status: 'Active',
  },
  {
    name: 'markus mueller',
    email: 'markus.mueller.DB@yopmail.com',
    contact: '+91 70486 12207',
    role: 'Distributor',
    status: 'Active',
  },
  {
    name: 'markus mueller',
    email: 'markus.mueller@yopmail.com',
    contact: '+91 98765 43210',
    role: 'Distributor',
    status: 'Active',
  },
  {
    name: 'Quolam L1 Admin Test',
    email: 'lakshmi+L1@quolam.com',
    contact: '+91 98925 82286',
    role: 'L1 Admin',
    status: 'Active',
  },
];

export default function ManageUsers() {
  const [search, setSearch] = useState('');
  const [users] = useState(dummyUsers);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Users</h1>

          <input
            type="text"
            placeholder="🔍 Search by Name or Email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />

          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs uppercase bg-blue-50 text-blue-800">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Contact</th>
                  <th className="px-6 py-3">Role</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-blue-50 transition-all">
                      <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4">{user.email}</td>
                      <td className="px-6 py-4">{user.contact}</td>
                      <td className="px-6 py-4">{user.role}</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-blue-600 hover:text-blue-800 font-semibold mr-4">Edit</button>
                        <button className="text-red-600 hover:text-red-800 font-semibold">Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}



