'use client';

import { useState } from 'react';

type User = {
  name: string;
  email: string;
  contact: string;
  role: string;
  status: string;
};

const initialUsers: User[] = [
  {
    name: 'L3 Admin',
    email: 'l3admin@yopmail.com',
    contact: '+971 50 123 4567',
    role: 'L3 Admin',
    status: 'Active',
  },
  {
    name: 'Support Agent',
    email: 'support@yopmail.com',
    contact: '+91 9876543210',
    role: 'Agent',
    status: 'Inactive',
  },
];

export default function ManageUsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleDelete = (index: number) => {
    const updated = [...users];
    updated.splice(index, 1);
    setUsers(updated);
  };

  const handleEdit = (user: User, index: number) => {
    setCurrentUser(user);
    setEditIndex(index);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editIndex !== null && currentUser) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = currentUser;
      setUsers(updatedUsers);
      setIsEditing(false);
      setCurrentUser(null);
      setEditIndex(null);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow-md">
          <thead className="bg-blue-50">
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Contact</th>
              <th className="py-2 px-4 border">Role</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border">{user.name}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border">{user.contact}</td>
                <td className="py-2 px-4 border">{user.role}</td>
                <td className="py-2 px-4 border">{user.status}</td>
                <td className="py-2 px-4 border space-x-2">
                  <button
                    onClick={() => handleEdit(user, index)}
                    className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {isEditing && currentUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-md w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Edit User</h3>

            <input
              type="text"
              placeholder="Name"
              value={currentUser.name}
              onChange={(e) =>
                setCurrentUser({ ...currentUser, name: e.target.value })
              }
              className="w-full mb-3 px-4 py-2 border rounded"
            />

            <input
              type="email"
              placeholder="Email"
              value={currentUser.email}
              onChange={(e) =>
                setCurrentUser({ ...currentUser, email: e.target.value })
              }
              className="w-full mb-3 px-4 py-2 border rounded"
            />

            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


  