"use client";

import { useState } from "react";
import { DataTable } from "@/components/tables/DataTable";

const observationsData = [
  { id: '1', query: 'AI', website: 'example.com', article: 'AI Boom 2025: What you need to know', position: 2, firstSeen: '2 hours ago' },
  { id: '2', query: 'AI', website: 'technews.io', article: 'OpenAI releases new model', position: 5, firstSeen: '1 hour ago' },
  { id: '3', query: 'OpenAI', website: 'example.com', article: 'OpenAI releases new model', position: 1, firstSeen: '3 hours ago' },
  { id: '4', query: 'Machine learning', website: 'example.com', article: 'ML Guide for Enterprise', position: 8, firstSeen: '5 hours ago' },
  { id: '5', query: 'Tech startups', website: 'startup-weekly.xyz', article: 'Funding hits record highs', position: 12, firstSeen: '12 hours ago' },
  { id: '6', query: 'Cloud computing', website: 'technews.io', article: 'AWS vs Azure in 2025', position: 3, firstSeen: '1 day ago' },
  { id: '7', query: 'AI', website: 'globalnews.uk', article: 'European Union AI Act analysis', position: 15, firstSeen: '2 days ago' },
];

export default function GoogleNewsMonitor() {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const columns = [
    { 
      header: 'Query', 
      accessor: 'query' as const, 
      sortable: true,
      render: (val: string) => <span className="font-bold text-on-surface">{val}</span>
    },
    { 
      header: 'Website', 
      accessor: 'website' as const, 
      sortable: true,
      render: (val: string) => <span className="text-secondary">{val}</span>
    },
    { 
      header: 'Article', 
      accessor: 'article' as const,
      render: (val: string) => <span className="font-body-strong text-primary hover:underline cursor-pointer">{val}</span>
    },
    { 
      header: 'Position', 
      accessor: 'position' as const, 
      sortable: true,
      render: (val: number) => {
        if (val <= 3) return <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs font-bold w-max">#{val}</span>;
        if (val <= 10) return <span className="text-amber-600 bg-amber-50 px-2 py-1 rounded-full text-xs font-bold w-max">#{val}</span>;
        return <span className="text-secondary bg-surface-container-high px-2 py-1 rounded-full text-xs font-bold w-max">#{val}</span>;
      }
    },
    { header: 'First Seen', accessor: 'firstSeen' as const, sortable: true },
  ];

  return (
    <>
      {/* Sidebar */}
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
          <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary font-body-strong rounded-xl group transition-all duration-200 ease-in-out" href="/google-news">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>travel_explore</span>
            <span>Google News</span>
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

        <div className="mt-auto pt-6 px-2">
          <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-body-strong hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-sm">add</span>
            Create Alert
          </button>
        </div>
      </nav>

      {/* Main Area */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen relative overflow-hidden">
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
            <a className="text-primary dark:text-inverse-primary border-b-2 border-primary dark:border-inverse-primary pb-1 font-body-strong h-full flex items-center mt-0.5" href="/google-news">Google News</a>
            <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary transition-colors font-body-strong h-full flex items-center cursor-pointer" href="#">Alerts</a>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
              <input className="pl-9 pr-4 py-1.5 bg-surface-container-low border border-outline-variant rounded-full text-body-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 transition-all" placeholder="Search queries..." type="text"/>
            </div>
            <div className="h-6 w-px bg-outline-variant/50 mx-2"></div>
            <button className="px-4 py-1.5 bg-primary text-on-primary rounded-lg font-body-strong text-sm hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-sm">add</span>
              Add Query
            </button>
          </div>
        </header>

        <div className="p-4 md:p-8 flex-1 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-on-surface">Google News Monitor</h2>
              <p className="font-body-base text-body-base text-secondary mt-1">Track article appearances across your monitored queries.</p>
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <select className="bg-surface-container border border-outline-variant rounded-lg text-sm font-body-strong text-on-surface px-3 py-1.5 focus:outline-none focus:border-primary">
                <option>All Websites</option>
                <option>example.com</option>
                <option>technews.io</option>
              </select>
              <select className="bg-surface-container border border-outline-variant rounded-lg text-sm font-body-strong text-on-surface px-3 py-1.5 focus:outline-none focus:border-primary">
                <option>All Queries</option>
                <option>AI</option>
                <option>OpenAI</option>
              </select>
              <select className="bg-surface-container border border-outline-variant rounded-lg text-sm font-body-strong text-on-surface px-3 py-1.5 focus:outline-none focus:border-primary">
                <option>Top 10</option>
                <option>Top 3</option>
                <option>All Positions</option>
              </select>
            </div>
          </div>

          <DataTable 
            columns={columns} 
            data={observationsData} 
            pageSize={10} 
            onRowClick={(row) => setSelectedArticle(row)}
          />
        </div>

        {/* Slide-out Sheet Mockup */}
        {selectedArticle && (
            <>
              <div 
                className="absolute inset-0 bg-on-background/20 z-40 transition-opacity" 
                onClick={() => setSelectedArticle(null)}
              ></div>
              <div className="absolute right-0 top-0 h-full w-full max-w-md bg-surface-container-lowest shadow-2xl z-50 border-l border-outline-variant/30 flex flex-col transition-transform transform translate-x-0">
                <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface">
                  <h3 className="font-headline-md text-lg text-on-surface">Visibility Timeline</h3>
                  <button onClick={() => setSelectedArticle(null)} className="p-1 hover:bg-surface-container rounded-full text-secondary">
                     <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                <div className="p-6 flex-1 overflow-y-auto">
                   <div className="mb-6">
                      <p className="text-sm font-body-strong text-secondary uppercase tracking-wider mb-1">Article</p>
                      <h4 className="text-xl font-bold text-on-surface">{selectedArticle.article}</h4>
                      <p className="text-primary mt-1 text-sm">{selectedArticle.website}</p>
                   </div>
                   
                   <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/50">
                      <p className="text-sm font-body-strong text-secondary uppercase tracking-wider mb-4">Rank History for "{selectedArticle.query}"</p>
                      <ul className="relative border-l border-outline-variant/50 ml-2 space-y-6">
                         <li className="pl-6 relative">
                            <span className="absolute -left-1.5 top-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-surface-container-lowest"></span>
                            <p className="text-sm font-body-strong text-on-surface">Position #{selectedArticle.position}</p>
                            <p className="text-xs text-secondary mt-1">{selectedArticle.firstSeen}</p>
                         </li>
                         <li className="pl-6 relative">
                            <span className="absolute -left-1.5 top-1 w-3 h-3 bg-outline-variant rounded-full border-2 border-surface-container-lowest"></span>
                            <p className="text-sm font-body-strong text-secondary">Position #4</p>
                            <p className="text-xs text-secondary mt-1">4 hours ago</p>
                         </li>
                         <li className="pl-6 relative">
                            <span className="absolute -left-1.5 top-1 w-3 h-3 bg-outline-variant rounded-full border-2 border-surface-container-lowest"></span>
                            <p className="text-sm font-body-strong text-secondary">First detected in News</p>
                            <p className="text-xs text-secondary mt-1">1 day ago</p>
                         </li>
                      </ul>
                   </div>
                </div>
              </div>
            </>
        )}
      </main>
    </>
  );
}
