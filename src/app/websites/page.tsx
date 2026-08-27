"use client";

import { DataTable } from "@/components/tables/DataTable";

const websitesData = [
  { id: '1', domain: 'shredder.news', da: 32, dr: 28, ss: '1%', traffic: '12K', genre: 'News', articles: 45 },
  { id: '2', domain: 'theodysseyonline.com', da: 74, dr: 71, ss: '2%', traffic: '450K', genre: 'Lifestyle', articles: 120 },
  { id: '3', domain: 'nytimesmag.com', da: 92, dr: 90, ss: '1%', traffic: '1.2M', genre: 'News', articles: 350 },
  { id: '4', domain: 'dailyscanner.com', da: 45, dr: 40, ss: '5%', traffic: '55K', genre: 'News', articles: 78 },
  { id: '5', domain: 'time.com', da: 93, dr: 94, ss: '1%', traffic: '3.8M', genre: 'News', articles: 512 },
  { id: '6', domain: 'usatoday.com', da: 94, dr: 93, ss: '1%', traffic: '4.5M', genre: 'News', articles: 890 },
  { id: '7', domain: 'forbes.com.tr', da: 78, dr: 75, ss: '3%', traffic: '120K', genre: 'Business', articles: 215 },
  { id: '8', domain: 'africa.businessinsider.com', da: 82, dr: 80, ss: '1%', traffic: '200K', genre: 'Business', articles: 180 },
  { id: '9', domain: 'entrepreneur.com', da: 91, dr: 90, ss: '2%', traffic: '2.1M', genre: 'Business', articles: 410 },
  { id: '10', domain: 'slashdot.org', da: 89, dr: 88, ss: '4%', traffic: '850K', genre: 'Tech', articles: 134 },
];

import { useRouter } from "next/navigation";

export default function WebsitesPage() {
  const router = useRouter();
  
  const columns = [
    { 
      header: 'URL', 
      accessor: 'domain' as const, 
      sortable: true,
      render: (val: string) => <span className="font-bold text-primary hover:underline cursor-pointer">{val}</span>
    },
    { header: 'DA', accessor: 'da' as const, sortable: true },
    { header: 'DR', accessor: 'dr' as const, sortable: true },
    { 
      header: 'SS', 
      accessor: 'ss' as const, 
      sortable: true,
      render: (val: string) => <span className={`px-2 py-0.5 rounded text-xs font-bold ${parseInt(val) > 3 ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'}`}>{val}</span>
    },
    { header: 'Traffic', accessor: 'traffic' as const, sortable: true },
    { header: 'Articles', accessor: 'articles' as const, sortable: true },
    { header: 'Genre', accessor: 'genre' as const, sortable: true },
  ];

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
            <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary transition-colors font-body-strong h-full flex items-center cursor-pointer" href="/">Dashboard</a>
            <a className="text-primary dark:text-inverse-primary border-b-2 border-primary dark:border-inverse-primary pb-1 font-body-strong h-full flex items-center mt-0.5" href="/websites">Websites</a>
            <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary transition-colors font-body-strong h-full flex items-center cursor-pointer" href="/google-news">Google News</a>
            <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary transition-colors font-body-strong h-full flex items-center cursor-pointer" href="/settings">Settings</a>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
              <input className="pl-9 pr-4 py-1.5 bg-surface-container-low border border-outline-variant rounded-full text-body-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 transition-all" placeholder="Search publishers..." type="text"/>
            </div>
            <div className="h-6 w-px bg-outline-variant/50 mx-2"></div>
            <button className="text-primary font-body-strong text-sm hover:underline hidden sm:block">Org Switcher</button>
            <button className="px-4 py-1.5 bg-primary text-on-primary rounded-lg font-body-strong text-sm hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-sm">add</span>
              Add Website
            </button>
            <button className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden ml-2 flex-shrink-0">
              <img alt="User profile" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=User&background=random"/>
            </button>
          </div>
        </header>

        <div className="p-4 md:p-8 flex-1 flex flex-col gap-8 max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-on-surface">Websites Directory</h2>
              <p className="font-body-base text-body-base text-secondary mt-1">Manage monitored publishers and view individual performance.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="relative hidden sm:block">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
                <input className="pl-9 pr-4 py-1.5 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm focus:outline-none focus:border-primary w-48" placeholder="Filter domains..." type="text"/>
              </div>
              <select className="bg-surface-container border border-outline-variant rounded-lg text-sm font-body-strong text-on-surface px-3 py-1.5 focus:outline-none focus:border-primary">
                <option>1 Hour</option>
                <option>1 Day</option>
                <option>7 Days</option>
                <option>15 Days</option>
                <option selected>30 Days</option>
                <option>Month</option>
                <option>Year</option>
                <option>Custom</option>
              </select>
              <button className="px-3 py-1.5 bg-surface-container border border-outline-variant rounded-lg text-sm font-body-strong text-on-surface flex items-center gap-2 hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-sm">filter_list</span>
                Status
              </button>
            </div>
          </div>

          <DataTable 
             columns={columns} 
             data={websitesData} 
             pageSize={10} 
             onRowClick={(row) => router.push(`/websites/${row.domain}`)}
          />
        </div>
      </main>
    </>
  );
}
