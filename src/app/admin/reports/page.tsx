'use client';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const reports = [
  { name: 'Success', value: 60 },
  { name: 'Failure', value: 20 },
  { name: 'Pending', value: 20 },
];

const COLORS = ['#22c55e', '#ef4444', '#fbbf24'];

export default function Reports() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Reports</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={reports}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {reports.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
