export default function ManageRoles() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Manage Roles</h1>
      <ul className="space-y-2 text-gray-700">
        <li>👤 Admin - Full access to all modules</li>
        <li>🛠️ Manager - Can manage users and projects</li>
        <li>👀 Viewer - Read-only access</li>
      </ul>
    </div>
  );
}
