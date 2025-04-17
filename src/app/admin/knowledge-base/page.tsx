export default function KnowledgeBase() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Knowledge Base</h1>
      <p className="text-gray-700">Browse and manage documentation, SOPs, and project FAQs.</p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold">Project Onboarding Guide</h3>
          <p className="text-sm text-gray-600">Updated on April 15, 2025</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold">Land Data Terminologies</h3>
          <p className="text-sm text-gray-600">Updated on March 12, 2025</p>
        </div>
      </div>
    </div>
  );
}
