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
      <nav className="hidden md:flex bg-surface-container-low dark:bg-inverse-surface fixed left-0 top-0 h-full flex-col py-6 px-4 z-40 w-64 border-r border-outline-variant/30">
        <div className="mb-10 px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-on-primary font-bold">
              <span className="material-symbols-outlined text-lg">public</span>
            </div>
            <div>
              <h1 className="font-headline-md text-headline-md font-black text-on-surface dark:text-inverse-on-surface">Sentinel</h1>
              <p className="font-label-sm text-label-sm text-secondary">Publisher Intel</p>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <a className="flex items-center gap-3 px-4 py-3 text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-surface-variant font-body-strong rounded-xl group transition-all duration-200 ease-in-out" href="/">
            <span className="material-symbols-outlined">analytics</span>
            <span>Intelligence</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-surface-variant font-body-strong rounded-xl group transition-all duration-200 ease-in-out" href="/websites">
            <span className="material-symbols-outlined">language</span>
            <span>Websites</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-surface-variant font-body-strong rounded-xl group transition-all duration-200 ease-in-out" href="/google-news">
            <span className="material-symbols-outlined">travel_explore</span>
            <span>Google News</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary font-body-strong rounded-xl group transition-all duration-200 ease-in-out" href="/competitors">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>compare_arrows</span>
            <span>Competitors</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-surface-variant font-body-strong rounded-xl group transition-all duration-200 ease-in-out" href="#">
            <span className="material-symbols-outlined">notifications_active</span>
            <span>Alerts</span>
          </a>
        </div>
      </nav>

      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline flat no shadows flex justify-between items-center w-full px-8 h-16 sticky top-0 z-30">
          <div className="flex items-center gap-4 md:hidden">
            <button className="p-2 text-on-surface">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary">Sentinel</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 h-full">
            <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary transition-colors font-body-strong h-full flex items-center cursor-pointer" href="/">Dashboard</a>
            <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary transition-colors font-body-strong h-full flex items-center cursor-pointer" href="/websites">Websites</a>
            <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary transition-colors font-body-strong h-full flex items-center cursor-pointer" href="/google-news">Google News</a>
            <a className="text-primary dark:text-inverse-primary border-b-2 border-primary dark:border-inverse-primary pb-1 font-body-strong h-full flex items-center mt-0.5" href="/competitors">Competitors</a>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden ml-2 flex-shrink-0">
              <img alt="User profile" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=User&background=random"/>
            </button>
          </div>
        </header>

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
