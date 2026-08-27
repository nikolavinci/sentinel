"use client";

import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: any[];
  xKey: string;
  yKey: string;
  color?: string;
  height?: number;
}

export function BarChart({ data, xKey, yKey, color = "#3b82f6", height = 250 }: ChartProps) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-4 shadow-sm">
      <div className="w-full" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--outline-variant)" vertical={false} />
            <XAxis 
                dataKey={xKey} 
                stroke="#727785" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
            />
            <YAxis 
                stroke="#727785" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
            />
            <Tooltip 
              cursor={{ fill: 'var(--surface-container-high)', opacity: 0.4 }}
              contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #c2c6d6", borderRadius: "8px" }}
              labelStyle={{ color: "#191b23", fontWeight: "bold", marginBottom: "4px" }}
            />
            <Bar dataKey={yKey} fill={color} radius={[4, 4, 0, 0]} />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
