"use client";

import { useState } from "react";
import { LineChart } from "@/components/charts/LineChart";

const compareData = [
  { date: 'Aug 21', "example.com": 10, "technews.io": 5, "globalnews.uk": 12 },
  { date: 'Aug 22', "example.com": 15, "technews.io": 8, "globalnews.uk": 10 },
  { date: 'Aug 23', "example.com": 22, "technews.io": 12, "globalnews.uk": 8 },
  { date: 'Aug 24', "example.com": 18, "technews.io": 15, "globalnews.uk": 14 },
  { date: 'Aug 25', "example.com": 26, "technews.io": 20, "globalnews.uk": 16 },
  { date: 'Aug 26', "example.com": 24, "technews.io": 18, "globalnews.uk": 22 },
  { date: 'Aug 27', "example.com": 30, "technews.io": 25, "globalnews.uk": 18 },
];

const velocityData = [
  { date: 'Aug 21', "example.com": 4, "technews.io": 2, "globalnews.uk": 6 },
  { date: 'Aug 22', "example.com": 6, "technews.io": 3, "globalnews.uk": 5 },
  { date: 'Aug 23', "example.com": 8, "technews.io": 5, "globalnews.uk": 4 },
  { date: 'Aug 24', "example.com": 5, "technews.io": 7, "globalnews.uk": 8 },
  { date: 'Aug 25', "example.com": 9, "technews.io": 8, "globalnews.uk": 7 },
  { date: 'Aug 26', "example.com": 7, "technews.io": 6, "globalnews.uk": 9 },
  { date: 'Aug 27', "example.com": 12, "technews.io": 10, "globalnews.uk": 8 },
];

const lines = [
  { key: "example.com", color: "#3b82f6", name: "example.com" },
  { key: "technews.io", color: "#10b981", name: "technews.io" },
  { key: "globalnews.uk", color: "#f59e0b", name: "globalnews.uk" },
];

export default function CompetitorsPage() {
  const [selectedDomains, setSelectedDomains] = useState(["example.com", "technews.io", "globalnews.uk"]);

  const toggleDomain = (domain: string) => {
    if (selectedDomains.includes(domain)) {
      if (selectedDomains.length > 1) setSelectedDomains(selectedDomains.filter(d => d !== domain));
    } else {
      setSelectedDomains([...selectedDomains, domain]);
    }
  };

  const activeLines = lines.filter(l => selectedDomains.includes(l.key));

  return (
    <>
      

      <main className="flex-1 flex flex-col w-full">
        

        <div className="p-4 md:p-8 flex-1 flex flex-col gap-8 max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-on-surface">Competitor Analysis</h2>
              <p className="font-body-base text-body-base text-secondary mt-1">Benchmark visibility and publishing velocity.</p>
            </div>
            
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-surface-container border border-outline-variant rounded-lg text-sm font-body-strong hover:bg-surface-container-high transition-colors text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">download</span>
                Export CSV
              </button>
            </div>
          </div>

          {/* Competitor Selector */}
          <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-4 shadow-sm flex flex-wrap gap-3 items-center">
             <span className="text-sm font-body-strong text-secondary mr-2">Compare:</span>
             {lines.map(l => (
                <button 
                  key={l.key}
                  onClick={() => toggleDomain(l.key)}
                  className={`px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 transition-colors border ${selectedDomains.includes(l.key) ? 'bg-surface-container-high border-outline-variant text-on-surface' : 'bg-surface-container-lowest border-outline-variant/50 text-secondary opacity-50'}`}
                >
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: l.color }}></span>
                  {l.name}
                </button>
             ))}
             <button className="px-3 py-1.5 border border-dashed border-primary/50 text-primary rounded-full text-sm font-bold flex items-center gap-1 hover:bg-primary/5">
                <span className="material-symbols-outlined text-sm">add</span> Add Competitor
             </button>
          </div>

          {/* Matrix Table */}
          <div>
            <h3 className="font-headline-md text-lg font-bold text-on-surface mb-4">Performance Matrix (30d)</h3>
            <div className="overflow-x-auto border border-outline-variant/50 rounded-xl bg-surface-container-lowest shadow-sm">
                <table className="w-full text-sm text-left">
                <thead className="bg-surface-container-low border-b border-outline-variant/50 text-secondary font-label-sm uppercase tracking-wider">
                    <tr>
                    <th className="px-6 py-4 font-semibold">Metric</th>
                    {lines.map(l => (
                        <th key={l.key} className={`px-6 py-4 font-bold ${selectedDomains.includes(l.key) ? 'opacity-100' : 'opacity-30'}`} style={{ color: l.color }}>
                            {l.name}
                        </th>
                    ))}
                    </tr>
                </thead>
                <tbody className="font-body-base divide-y divide-outline-variant/30">
                    <tr className="hover:bg-surface-container-low transition-colors">
                        <td className="px-6 py-4 font-body-strong text-on-surface">Avg Position</td>
                        <td className="px-6 py-4 font-bold">4.2 <span className="text-xs text-emerald-600 font-normal">↑</span></td>
                        <td className="px-6 py-4">6.1</td>
                        <td className="px-6 py-4">8.5</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                        <td className="px-6 py-4 font-body-strong text-on-surface">News Apps</td>
                        <td className="px-6 py-4 font-bold">87</td>
                        <td className="px-6 py-4">52</td>
                        <td className="px-6 py-4">41</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                        <td className="px-6 py-4 font-body-strong text-on-surface">Articles Published</td>
                        <td className="px-6 py-4 font-bold">142</td>
                        <td className="px-6 py-4">98</td>
                        <td className="px-6 py-4">120</td>
                    </tr>
                    <tr className="hover:bg-surface-container-low transition-colors">
                        <td className="px-6 py-4 font-body-strong text-on-surface">Top 3 Rate</td>
                        <td className="px-6 py-4 font-bold">45%</td>
                        <td className="px-6 py-4">22%</td>
                        <td className="px-6 py-4">15%</td>
                    </tr>
                </tbody>
                </table>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-headline-md text-lg font-bold text-on-surface">Visibility Trend</h3>
                <p className="text-sm text-secondary">Total query appearances (7d)</p>
              </div>
              <LineChart data={compareData} lines={activeLines} />
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-headline-md text-lg font-bold text-on-surface">Publishing Velocity</h3>
                <p className="text-sm text-secondary">Articles published per day (7d)</p>
              </div>
              <LineChart data={velocityData} lines={activeLines} />
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
