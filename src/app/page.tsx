"use client";

import { LineChart } from "@/components/charts/LineChart";

const visibilityData = [
  { date: 'Aug 01', "example.com": 42, "technews.io": 24, "globalnews.uk": 15 },
  { date: 'Aug 05', "example.com": 48, "technews.io": 29, "globalnews.uk": 12 },
  { date: 'Aug 10', "example.com": 65, "technews.io": 45, "globalnews.uk": 32 },
  { date: 'Aug 15', "example.com": 54, "technews.io": 60, "globalnews.uk": 48 },
  { date: 'Aug 20', "example.com": 78, "technews.io": 52, "globalnews.uk": 55 },
  { date: 'Aug 25', "example.com": 82, "technews.io": 48, "globalnews.uk": 62 },
  { date: 'Aug 27', "example.com": 87, "technews.io": 50, "globalnews.uk": 70 },
];

const chartLines = [
  { key: "example.com", color: "#3b82f6", name: "example.com" },
  { key: "technews.io", color: "#10b981", name: "technews.io" },
  { key: "globalnews.uk", color: "#f59e0b", name: "globalnews.uk" },
];

export default function Dashboard() {
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
          <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary font-body-strong rounded-xl group transition-all duration-200 ease-in-out" href="/">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
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
          <a className="flex items-center gap-3 px-4 py-3 text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-surface-variant font-body-strong rounded-xl group transition-all duration-200 ease-in-out" href="/competitors">
            <span className="material-symbols-outlined">compare_arrows</span>
            <span>Competitors</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-surface-variant font-body-strong rounded-xl group transition-all duration-200 ease-in-out" href="/alerts">
            <span className="material-symbols-outlined">notifications_active</span>
            <span>Alerts</span>
          </a>
        </div>

        <div className="mt-auto pt-6 px-2">
          <a href="/alerts" className="w-full py-3 bg-primary text-on-primary rounded-xl font-body-strong hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-sm">add</span>
            Create Alert
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
            <a className="text-primary dark:text-inverse-primary border-b-2 border-primary dark:border-inverse-primary pb-1 font-body-strong h-full flex items-center mt-0.5" href="/">Dashboard</a>
            <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary transition-colors font-body-strong h-full flex items-center cursor-pointer" href="/websites">Websites</a>
            <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary transition-colors font-body-strong h-full flex items-center cursor-pointer" href="/google-news">Google News</a>
            <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary transition-colors font-body-strong h-full flex items-center cursor-pointer" href="/competitors">Competitors</a>
            <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary transition-colors font-body-strong h-full flex items-center cursor-pointer" href="/alerts">Alerts</a>
            <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary transition-colors font-body-strong h-full flex items-center cursor-pointer" href="/settings">Settings</a>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
              <input className="pl-9 pr-4 py-1.5 bg-surface-container-low border border-outline-variant rounded-full text-body-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 transition-all" placeholder="Search publishers..." type="text"/>
            </div>
            <div className="h-6 w-px bg-outline-variant/50 mx-2"></div>
            <button className="text-primary font-body-strong text-sm hover:underline hidden sm:block">Org Switcher</button>
            <a href="/websites" className="px-4 py-1.5 border border-primary text-primary rounded-lg font-body-strong text-sm hover:bg-primary/5 transition-colors">Add Website</a>
            <button className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden ml-2 flex-shrink-0">
              <img alt="User profile" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=User&background=random"/>
            </button>
          </div>
        </header>

        <div className="p-4 md:p-8 flex-1 flex flex-col gap-8 max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-on-surface">Overview</h2>
              <p className="font-body-base text-body-base text-secondary mt-1">Real-time publisher intelligence for Sentinel-01.</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => alert('Date picker coming soon')} className="px-3 py-1.5 bg-surface-container border border-outline-variant rounded-lg text-sm font-body-strong text-on-surface flex items-center gap-2 hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                Last 30 Days
              </button>
              <button onClick={() => alert('Filters coming soon')} className="px-3 py-1.5 bg-surface-container border border-outline-variant rounded-lg text-sm font-body-strong text-on-surface flex items-center gap-2 hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-sm">filter_list</span>
                Filters
              </button>
            </div>
          </div>

          {/* KPI Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-5 shadow-sm flex flex-col justify-between hover:border-outline-variant transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-4xl text-primary">article</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Total Articles</p>
                <div className="flex items-baseline gap-3 mt-2">
                  <h3 className="font-headline-lg text-2xl font-bold text-on-surface">2.4k</h3>
                  <span className="font-mono-data text-mono-data text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">trending_up</span> +12%
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-5 shadow-sm flex flex-col justify-between hover:border-outline-variant transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-4xl text-primary">visibility</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">News Visibility</p>
                <div className="flex items-baseline gap-3 mt-2">
                  <h3 className="font-headline-lg text-2xl font-bold text-on-surface">84%</h3>
                  <span className="font-mono-data text-mono-data text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">trending_up</span> +2%
                  </span>
                </div>
              </div>
              <div className="w-full bg-surface-container h-1.5 rounded-full mt-4 overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: "84%" }}></div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-5 shadow-sm flex flex-col justify-between hover:border-outline-variant transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-4xl text-tertiary">leaderboard</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Top Position</p>
                <div className="flex items-baseline gap-3 mt-2">
                  <h3 className="font-headline-lg text-2xl font-bold text-on-surface">Avg 4.2</h3>
                  <span className="font-mono-data text-mono-data text-secondary bg-surface-container px-1.5 py-0.5 rounded flex items-center gap-1">
                    Stable
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-primary border border-primary-container rounded-xl p-5 shadow-sm flex flex-col justify-between relative overflow-hidden text-on-primary">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <span className="material-symbols-outlined text-4xl">warning</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-primary/80 uppercase tracking-wider">Active Alerts</p>
                <div className="flex items-baseline gap-3 mt-2">
                  <h3 className="font-headline-lg text-2xl font-bold">12</h3>
                </div>
              </div>
              <a href="/alerts" className="mt-4 text-left text-sm font-body-strong flex items-center gap-1 hover:underline">
                View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-2">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div>
                <h3 className="font-headline-md text-lg font-bold text-on-surface">Google News Visibility (30d)</h3>
                <p className="text-sm text-secondary">Total query appearances for tracked domains</p>
              </div>
              <LineChart data={visibilityData} lines={chartLines} />
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-headline-md text-lg font-bold text-on-surface">Publishing Feed</h3>
                <p className="text-sm text-secondary">Latest articles detected</p>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-sm flex flex-col h-[300px] overflow-y-auto">
                 {/* Feed Items */}
                 <div className="p-4 border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-mono-data text-secondary">07:31 AM</span>
                      <span className="text-xs font-label-sm text-primary bg-primary/10 px-2 py-0.5 rounded">example.com</span>
                    </div>
                    <p className="font-body-strong text-sm text-on-surface line-clamp-1">AI Breakthrough 2025: What you need to know</p>
                 </div>
                 <div className="p-4 border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-mono-data text-secondary">07:29 AM</span>
                      <span className="text-xs font-label-sm text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">technews.io</span>
                    </div>
                    <p className="font-body-strong text-sm text-on-surface line-clamp-1">Cloud Migration Guide for Enterprise</p>
                 </div>
                 <div className="p-4 border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-mono-data text-secondary">07:15 AM</span>
                      <span className="text-xs font-label-sm text-amber-600 bg-amber-50 px-2 py-0.5 rounded">globalnews.uk</span>
                    </div>
                    <p className="font-body-strong text-sm text-on-surface line-clamp-1">Global Market Report Q3 Analysis</p>
                 </div>
                 <div className="p-4 hover:bg-surface-container-low transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-mono-data text-secondary">06:45 AM</span>
                      <span className="text-xs font-label-sm text-primary bg-primary/10 px-2 py-0.5 rounded">example.com</span>
                    </div>
                    <p className="font-body-strong text-sm text-on-surface line-clamp-1">Startup Funding Hits Record Highs</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
