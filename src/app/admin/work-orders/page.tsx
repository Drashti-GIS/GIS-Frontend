'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const workOrders = [
  { name: 'Pending', count: 12 },
  { name: 'In Progress', count: 19 },
  { name: 'Completed', count: 32 },
];

export default function WorkOrders() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Work Orders</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={workOrders}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
