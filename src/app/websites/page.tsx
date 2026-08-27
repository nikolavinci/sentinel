"use client";

import { DataTable } from "@/components/tables/DataTable";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function WebsitesPage() {
  const router = useRouter();
  const [websitesData, setWebsitesData] = useState([]);

  useEffect(() => {
    fetch('/api/websites')
      .then(res => res.json())
      .then(data => setWebsitesData(data));
  }, []);
  
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
      

      <main className="flex-1 flex flex-col w-full">
        

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
