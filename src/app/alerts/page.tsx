"use client";

import { useState } from "react";

const alertRules = [
  { id: '1', name: 'Rank Drop', condition: 'Position falls > 3 spots', website: 'example.com', type: 'Rank', active: true },
  { id: '2', name: 'Competitor Velocity', condition: 'Publishing > 5/hour', website: 'technews.io', type: 'Velocity', active: true },
  { id: '3', name: 'Top 3 Drop-out', condition: 'Falls out of Top 3', website: 'example.com', type: 'Rank', active: true },
  { id: '4', name: 'New Topic Keyword', condition: 'Query matching "AI"', website: 'All', type: 'Keyword', active: false },
];

const initialEvents = [
  { id: '101', ruleId: '1', title: 'Rank Drop Detected', message: '"example.com" fell 4 spots for query "AI" to position #6.', time: '10 mins ago', read: false, type: 'Rank' },
  { id: '102', ruleId: '3', title: 'Dropped from Top 3', message: '"example.com" is now #4 for "Machine learning".', time: '1 hour ago', read: false, type: 'Rank' },
  { id: '103', ruleId: '2', title: 'Velocity Spike', message: '"technews.io" published 6 articles in the last hour.', time: '3 hours ago', read: true, type: 'Velocity' },
  { id: '104', ruleId: '1', title: 'Rank Drop Detected', message: '"example.com" fell 3 spots for query "Cloud computing".', time: '1 day ago', read: true, type: 'Rank' },
];

export default function AlertsPage() {
  const [events, setEvents] = useState(initialEvents);

  const toggleRead = (id: string) => {
    setEvents(events.map(e => e.id === id ? { ...e, read: !e.read } : e));
  };

  const markAllRead = () => {
    setEvents(events.map(e => ({ ...e, read: true })));
  };

  const unreadCount = events.filter(e => !e.read).length;

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
          <a className="flex items-center gap-3 px-4 py-3 text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-surface-variant font-body-strong rounded-xl group transition-all duration-200 ease-in-out" href="/competitors">
            <span className="material-symbols-outlined">compare_arrows</span>
            <span>Competitors</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary font-body-strong rounded-xl group transition-all duration-200 ease-in-out" href="/alerts">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>notifications_active</span>
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
            <a className="text-primary dark:text-inverse-primary border-b-2 border-primary dark:border-inverse-primary pb-1 font-body-strong h-full flex items-center mt-0.5" href="/alerts">Alerts</a>
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
              <h2 className="font-display text-3xl font-semibold text-on-surface">Alerts</h2>
              <p className="font-body-base text-body-base text-secondary mt-1">Configure monitoring rules and view triggered events.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Alert Rules Sidebar */}
            <div className="flex flex-col gap-4">
               <div className="flex justify-between items-center">
                  <h3 className="font-headline-md text-lg font-bold text-on-surface">Active Rules</h3>
                  <button className="text-sm font-body-strong text-primary hover:underline">Manage</button>
               </div>
               
               <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-sm overflow-hidden">
                  <ul className="divide-y divide-outline-variant/30">
                    {alertRules.map(rule => (
                       <li key={rule.id} className="p-4 hover:bg-surface-container-low transition-colors">
                          <div className="flex justify-between items-start mb-2">
                             <div className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${rule.active ? 'bg-emerald-500' : 'bg-outline-variant'}`}></span>
                                <h4 className="font-body-strong text-sm text-on-surface">{rule.name}</h4>
                             </div>
                             <button className="text-secondary hover:text-on-surface">
                                <span className="material-symbols-outlined text-sm">edit</span>
                             </button>
                          </div>
                          <p className="text-xs text-secondary mb-2">{rule.condition}</p>
                          <span className="text-[10px] uppercase font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{rule.website}</span>
                       </li>
                    ))}
                  </ul>
                  <div className="p-4 border-t border-outline-variant/30 bg-surface-container-low">
                     <button className="w-full py-2 bg-surface-container border border-outline-variant border-dashed text-secondary rounded-lg font-body-strong hover:text-primary hover:border-primary/50 transition-colors flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">add</span> Add Rule
                     </button>
                  </div>
               </div>
            </div>

            {/* Alert Events Feed */}
            <div className="lg:col-span-2 flex flex-col gap-4">
               <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <h3 className="font-headline-md text-lg font-bold text-on-surface">Recent Events</h3>
                    {unreadCount > 0 && (
                      <span className="bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{unreadCount} unread</span>
                    )}
                  </div>
                  {unreadCount > 0 && (
                    <button onClick={markAllRead} className="text-sm font-body-strong text-secondary hover:text-on-surface transition-colors">Mark all as read</button>
                  )}
               </div>

               <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-sm overflow-hidden flex flex-col h-[600px]">
                  <ul className="divide-y divide-outline-variant/30 overflow-y-auto flex-1">
                     {events.length === 0 ? (
                        <div className="p-8 text-center text-secondary">No recent events.</div>
                     ) : (
                        events.map(event => (
                           <li key={event.id} className={`p-5 transition-colors ${event.read ? 'bg-surface-container-lowest opacity-70' : 'bg-surface-container-low border-l-4 border-l-primary'}`}>
                              <div className="flex justify-between items-start mb-2">
                                 <div className="flex items-center gap-2">
                                    {event.type === 'Rank' ? (
                                      <span className={`material-symbols-outlined text-sm ${event.read ? 'text-secondary' : 'text-rose-500'}`}>trending_down</span>
                                    ) : (
                                      <span className={`material-symbols-outlined text-sm ${event.read ? 'text-secondary' : 'text-amber-500'}`}>speed</span>
                                    )}
                                    <h4 className={`font-body-strong text-base ${event.read ? 'text-secondary' : 'text-on-surface'}`}>{event.title}</h4>
                                 </div>
                                 <span className="text-xs font-mono-data text-secondary">{event.time}</span>
                              </div>
                              <p className={`text-sm mb-4 ${event.read ? 'text-secondary' : 'text-on-surface'}`}>{event.message}</p>
                              
                              <div className="flex items-center justify-between mt-2">
                                 <div className="flex gap-2">
                                    <button className="px-3 py-1.5 bg-surface-container border border-outline-variant rounded-lg text-xs font-body-strong hover:bg-surface-container-high transition-colors text-on-surface">View Data</button>
                                    <button className="px-3 py-1.5 border border-transparent rounded-lg text-xs font-body-strong hover:bg-surface-container transition-colors text-secondary">Dismiss</button>
                                 </div>
                                 <button onClick={() => toggleRead(event.id)} className="text-xs font-body-strong text-primary hover:underline">
                                    {event.read ? 'Mark Unread' : 'Mark Read'}
                                 </button>
                              </div>
                           </li>
                        ))
                     )}
                  </ul>
               </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
