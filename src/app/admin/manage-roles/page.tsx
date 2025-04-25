'use client';

import { useState } from 'react';

const initialRoles = [
  { id: 1, name: 'Admin', permissions: ['Create', 'Edit', 'Delete'] },
  { id: 2, name: 'Editor', permissions: ['Edit'] },
  { id: 3, name: 'Viewer', permissions: ['View'] },
];

export default function ManageRoles() {
  const [roles, setRoles] = useState(initialRoles);
  const [newRole, setNewRole] = useState('');
  const [newPermissions, setNewPermissions] = useState<string[]>([]);

  const handleAddRole = () => {
    if (!newRole) return;
    const newId = roles.length + 1;
    const role = {
      id: newId,
      name: newRole,
      permissions: newPermissions,
    };
    setRoles([...roles, role]);
    setNewRole('');
    setNewPermissions([]);
  };

  const handleCheckboxChange = (perm: string) => {
    setNewPermissions(prev =>
      prev.includes(perm)
        ? prev.filter(p => p !== perm)
        : [...prev, perm]
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Manage Roles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-white">Add New Role</h2>

          <input
            type="text"
            placeholder="Role Name"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="mb-4">
            <p className="mb-2 font-medium text-gray-600 dark:text-gray-300">Permissions:</p>
            {['Create', 'Edit', 'Delete', 'View'].map((perm) => (
              <label key={perm} className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  checked={newPermissions.includes(perm)}
                  onChange={() => handleCheckboxChange(perm)}
                />
                <span>{perm}</span>
              </label>
            ))}
          </div>

          <button
            onClick={handleAddRole}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition duration-300"
          >
            Add Role
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-white">Existing Roles</h2>
          {roles.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-300">No roles added yet.</p>
          ) : (
            <ul className="space-y-4">
              {roles.map((role) => (
                <li key={role.id} className="border-b pb-2 border-gray-200 dark:border-gray-700">
                  <p className="font-medium text-gray-800 dark:text-white">{role.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Permissions: {role.permissions.join(', ')}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

