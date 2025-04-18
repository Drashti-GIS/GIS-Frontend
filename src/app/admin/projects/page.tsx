'use client';

import { useState } from 'react';

const projectData = [
  {
    id: 1,
    name: 'Land Acquisition - Zone A',
    status: 'In Progress',
    startDate: '2024-12-01',
    endDate: '2025-05-15',
  },
  {
    id: 2,
    name: 'Soil Quality Assessment - Zone B',
    status: 'Completed',
    startDate: '2024-09-10',
    endDate: '2024-11-20',
  },
  {
    id: 3,
    name: 'Infrastructure Planning - Zone C',
    status: 'Pending',
    startDate: '2025-01-20',
    endDate: '2025-08-30',
  },
];

export default function ProjectsPage() {
  const [projects] = useState(projectData);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Projects Overview</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-md overflow-hidden">
          <thead className="bg-gray-100 dark:bg-gray-700 text-left">
            <tr>
              <th className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200">Project Name</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200">Status</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200">Start Date</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200">End Date</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-100">{project.name}</td>
                <td>
                  <span
                    className={`px-3 py-1 text-sm rounded-full font-medium inline-block ${
                      project.status === 'Completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200'
                        : project.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-200'
                    }`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">{project.startDate}</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">{project.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
