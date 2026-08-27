"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { LineChart } from "@/components/charts/LineChart";
import { BarChart } from "@/components/charts/BarChart";

const dailyVolumeData = [
  { day: 'Mon', articles: 4 },
  { day: 'Tue', articles: 12 },
  { day: 'Wed', articles: 8 },
  { day: 'Thu', articles: 5 },
  { day: 'Fri', articles: 7 },
  { day: 'Sat', articles: 2 },
  { day: 'Sun', articles: 3 },
];

const visibilityTrendData = [
  { date: 'Aug 21', appearances: 10 },
  { date: 'Aug 22', appearances: 15 },
  { date: 'Aug 23', appearances: 22 },
  { date: 'Aug 24', appearances: 18 },
  { date: 'Aug 25', appearances: 26 },
  { date: 'Aug 26', appearances: 24 },
  { date: 'Aug 27', appearances: 30 },
];

const TABS = ["Overview", "Publishing", "Google News", "Articles", "Technical", "Settings"];

export default function WebsiteDetail() {
  const params = useParams();
  const domain = params.domain as string || "example.com";
  const [activeTab, setActiveTab] = useState("Overview");

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
          <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary font-body-strong rounded-xl group transition-all duration-200 ease-in-out" href="/websites">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>language</span>
            <span>Websites</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-surface-variant font-body-strong rounded-xl group transition-all duration-200 ease-in-out" href="#">
            <span className="material-symbols-outlined">compare_arrows</span>
            <span>Competitors</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-surface-variant font-body-strong rounded-xl group transition-all duration-200 ease-in-out" href="#">
            <span className="material-symbols-outlined">notifications_active</span>
            <span>Alerts</span>
          </a>
        </div>
      </nav>

      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline flat no shadows flex items-center w-full px-8 h-16 sticky top-0 z-30">
           <div className="text-sm font-body-strong text-secondary flex items-center gap-2">
             <a href="/" className="hover:text-primary transition-colors">Dashboard</a>
             <span className="material-symbols-outlined text-[14px]">chevron_right</span>
             <a href="/websites" className="hover:text-primary transition-colors">Websites</a>
             <span className="material-symbols-outlined text-[14px]">chevron_right</span>
             <span className="text-on-surface">{domain}</span>
           </div>
        </header>

        <div className="p-4 md:p-8 flex-1 flex flex-col gap-8 max-w-[1440px] mx-auto w-full">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-outline-variant/30 pb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                 <h2 className="font-display text-3xl font-semibold text-on-surface">{domain}</h2>
                 <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span> Active
                 </span>
              </div>
              <p className="font-body-base text-sm text-secondary">Last crawled: 2 min ago</p>
            </div>
            <div className="flex gap-2 items-center">
              <select className="bg-surface-container border border-outline-variant rounded-lg text-sm font-body-strong text-on-surface px-3 py-2 focus:outline-none focus:border-primary">
                <option>1 Hour</option>
                <option>1 Day</option>
                <option>7 Days</option>
                <option>15 Days</option>
                <option selected>30 Days</option>
                <option>Month</option>
                <option>Year</option>
                <option>Custom</option>
              </select>
              <button className="px-4 py-2 bg-surface-container border border-outline-variant rounded-lg text-sm font-body-strong hover:bg-surface-container-high transition-colors text-secondary">Pause</button>
              <button className="px-4 py-2 bg-surface-container border border-outline-variant rounded-lg text-sm font-body-strong hover:bg-surface-container-high transition-colors text-secondary">Edit</button>
              <button className="px-3 py-2 bg-surface-container border border-outline-variant rounded-lg text-sm font-body-strong hover:bg-surface-container-high transition-colors text-secondary flex items-center">
                <span className="material-symbols-outlined text-sm">more_vert</span>
              </button>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-5 shadow-sm">
              <p className="text-xs text-secondary uppercase tracking-wider font-semibold mb-1">Articles Today</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-on-surface">8</span>
                <span className="text-xs font-bold text-emerald-600">↑ 2 vs 7d</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-5 shadow-sm">
              <p className="text-xs text-secondary uppercase tracking-wider font-semibold mb-1">Articles 30 Days</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-on-surface">142</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-5 shadow-sm">
              <p className="text-xs text-secondary uppercase tracking-wider font-semibold mb-1">News Apps 30 Days</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-on-surface">87</span>
                <span className="text-xs font-bold text-emerald-600">↑ 12%</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-5 shadow-sm">
              <p className="text-xs text-secondary uppercase tracking-wider font-semibold mb-1">Avg News Position</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-on-surface">4.2</span>
                <span className="text-xs font-bold text-emerald-600">↑ 0.3</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-outline-variant/50">
            <div className="flex gap-6 overflow-x-auto">
              {TABS.map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-body-strong whitespace-nowrap border-b-2 transition-colors ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-secondary hover:text-on-surface hover:border-outline-variant'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content: Overview */}
          {activeTab === "Overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Col: Publishing */}
              <div className="flex flex-col gap-4">
                 <div>
                    <h3 className="font-headline-md text-lg font-bold text-on-surface">Publishing Patterns</h3>
                 </div>
                 <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-5 shadow-sm">
                    <ul className="space-y-3 text-sm font-body-base text-on-surface">
                      <li className="flex justify-between border-b border-outline-variant/30 pb-2">
                        <span className="text-secondary">Articles/day (30d)</span>
                        <span className="font-bold">4.7</span>
                      </li>
                      <li className="flex justify-between border-b border-outline-variant/30 pb-2">
                        <span className="text-secondary">Median publish gap</span>
                        <span className="font-bold">3h 22m</span>
                      </li>
                      <li className="flex justify-between border-b border-outline-variant/30 pb-2">
                        <span className="text-secondary">Peak hour</span>
                        <span className="font-bold">8 AM (12 articles)</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-secondary">Consistency</span>
                        <span className="font-bold text-emerald-600">94% (Very High)</span>
                      </li>
                    </ul>
                 </div>
                 
                 <h4 className="font-body-strong text-sm text-secondary mt-2">Daily Volume (7 Days)</h4>
                 <BarChart data={dailyVolumeData} xKey="day" yKey="articles" color="#3b82f6" height={220} />
              </div>

              {/* Right Col: Google News */}
              <div className="flex flex-col gap-4">
                 <div>
                    <h3 className="font-headline-md text-lg font-bold text-on-surface">Google News Summary</h3>
                 </div>
                 <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-5 shadow-sm">
                    <ul className="space-y-3 text-sm font-body-base text-on-surface">
                      <li className="flex justify-between border-b border-outline-variant/30 pb-2">
                        <span className="text-secondary">Total appearances (30d)</span>
                        <span className="font-bold">87</span>
                      </li>
                      <li className="flex justify-between border-b border-outline-variant/30 pb-2">
                        <span className="text-secondary">Unique queries</span>
                        <span className="font-bold">34</span>
                      </li>
                      <li className="flex justify-between border-b border-outline-variant/30 pb-2">
                        <span className="text-secondary">Average position</span>
                        <span className="font-bold">4.2</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-secondary">Appearances/day</span>
                        <span className="font-bold">2.9</span>
                      </li>
                    </ul>
                 </div>
                 
                 <h4 className="font-body-strong text-sm text-secondary mt-2">Visibility Trend (7 Days)</h4>
                 <LineChart 
                    data={visibilityTrendData} 
                    lines={[{ key: 'appearances', color: '#10b981', name: 'Appearances' }]} 
                    height={220} 
                 />
              </div>

            </div>
          )}

          {/* Placeholder for other tabs */}
          {activeTab !== "Overview" && (
            <div className="py-20 text-center border-2 border-dashed border-outline-variant/50 rounded-xl">
              <span className="material-symbols-outlined text-4xl text-secondary mb-2">construction</span>
              <h3 className="font-headline-md text-lg text-on-surface">Tab under construction</h3>
              <p className="text-secondary">The {activeTab} view is coming in Phase 2.</p>
            </div>
          )}

        </div>
      </main>
    </>
  );
}
