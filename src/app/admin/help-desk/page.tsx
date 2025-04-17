export default function HelpDesk() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Help Desk</h1>
      <p className="text-gray-700 mb-4">Support tickets overview and response metrics.</p>
      <ul className="space-y-2 text-gray-600">
        <li>🟢 Ticket #1234 - Resolved</li>
        <li>🟡 Ticket #1235 - In Progress</li>
        <li>🔴 Ticket #1236 - Unassigned</li>
      </ul>
    </div>
  );
}
