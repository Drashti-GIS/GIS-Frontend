'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 700 },
  { name: 'Mar', users: 500 },
  { name: 'Apr', users: 800 },
  { name: 'May', users: 600 },
];

export default function Overview() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Overview</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

  