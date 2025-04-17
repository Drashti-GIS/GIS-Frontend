'use client';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const masterData = [
  { name: 'Zone A', value: 240 },
  { name: 'Zone B', value: 140 },
  { name: 'Zone C', value: 360 },
  { name: 'Zone D', value: 280 },
];

export default function MasterData() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Master Data</h1>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={masterData}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#color)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
