"use client";

import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: any[];
  lines: { key: string; color: string; name: string }[];
  height?: number;
}

export function LineChart({ data, lines, height = 300 }: ChartProps) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-6 shadow-sm">
      <div className="w-full" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--outline-variant)" vertical={false} />
            <XAxis 
                dataKey="date" 
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
                tickFormatter={(value) => `${value}`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #c2c6d6", borderRadius: "8px" }}
              labelStyle={{ color: "#191b23", fontWeight: "bold", marginBottom: "4px" }}
            />
            <Legend wrapperStyle={{ paddingTop: "20px" }} />
            {lines.map((line) => (
              <Line 
                key={line.key}
                type="monotone" 
                dataKey={line.key} 
                stroke={line.color} 
                name={line.name}
                dot={false}
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
