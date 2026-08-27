"use client";

import { useState, useEffect } from "react";

const SETTINGS_TABS = ["Account", "Organization", "API Keys", "Integrations"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Account");
  const [formData, setFormData] = useState({ firstName: 'John', lastName: 'Doe', email: 'john@example.com' });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch('/api/settings').then(res => res.json()).then(data => {
      if (data.firstName) setFormData(prev => ({ ...prev, ...data }));
    });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await fetch('/api/settings', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    setSaving(false);
  };

  return (
    <>
      

      <main className="flex-1 flex flex-col w-full">
        

        <div className="p-4 md:p-8 flex-1 flex flex-col gap-8 max-w-[1440px] mx-auto w-full">
          <div>
            <h2 className="font-display text-3xl font-semibold text-on-surface">Settings</h2>
            <p className="font-body-base text-body-base text-secondary mt-1">Manage your account and platform configuration.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Vertical Tabs Sidebar */}
            <div className="w-full md:w-64 flex-shrink-0">
              <nav className="flex md:flex-col gap-2 overflow-x-auto">
                {SETTINGS_TABS.map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-left px-4 py-2.5 rounded-lg font-body-strong text-sm transition-colors whitespace-nowrap ${
                      activeTab === tab 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-secondary hover:bg-surface-container-low hover:text-on-surface'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 max-w-2xl">
              
              {activeTab === "Account" && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="font-headline-md text-xl font-bold text-on-surface mb-4">Profile Information</h3>
                    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-6 shadow-sm flex flex-col gap-4">
                      
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-16 h-16 rounded-full bg-surface-variant border border-outline-variant overflow-hidden">
                           <img alt="User profile" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=User&background=random"/>
                        </div>
                        <button className="px-4 py-2 bg-surface-container border border-outline-variant rounded-lg text-sm font-body-strong hover:bg-surface-container-high transition-colors text-on-surface">
                          Change Avatar
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-sm font-body-strong text-on-surface">First Name</label>
                          <input type="text" value={formData.firstName} onChange={e => setFormData(p => ({...p, firstName: e.target.value}))} className="px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-sm font-body-strong text-on-surface">Last Name</label>
                          <input type="text" value={formData.lastName} onChange={e => setFormData(p => ({...p, lastName: e.target.value}))} className="px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5 mt-2">
                        <label className="text-sm font-body-strong text-on-surface">Email Address</label>
                        <input type="email" value={formData.email} onChange={e => setFormData(p => ({...p, email: e.target.value}))} className="px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full" />
                      </div>

                      <div className="mt-4 flex justify-end">
                        <button onClick={handleSave} disabled={saving} className="px-6 py-2 bg-primary text-on-primary rounded-lg font-body-strong text-sm hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50">
                          {saving ? 'Saving...' : 'Save Changes'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-headline-md text-xl font-bold text-rose-600 mb-4">Danger Zone</h3>
                    <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-rose-800">Delete Account</h4>
                        <p className="text-sm text-rose-700 mt-1">Permanently remove your account and all data.</p>
                      </div>
                      <button className="px-4 py-2 bg-rose-600 text-white rounded-lg font-body-strong text-sm hover:bg-rose-700 transition-colors">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Organization" && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="font-headline-md text-xl font-bold text-on-surface mb-4">Organization Settings</h3>
                    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-6 shadow-sm flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-body-strong text-on-surface">Organization Name</label>
                        <input type="text" defaultValue="Sentinel Media Group" className="px-3 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full" />
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button className="px-6 py-2 bg-primary text-on-primary rounded-lg font-body-strong text-sm hover:bg-primary/90 transition-colors shadow-sm">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "API Keys" && (
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-headline-md text-xl font-bold text-on-surface">API Credentials</h3>
                    <button className="px-4 py-1.5 bg-primary text-on-primary rounded-lg font-body-strong text-sm hover:bg-primary/90 transition-colors flex items-center gap-1 shadow-sm">
                      <span className="material-symbols-outlined text-sm">add</span> Generate New Key
                    </button>
                  </div>
                  <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl shadow-sm overflow-hidden">
                    <ul className="divide-y divide-outline-variant/30 text-sm">
                      <li className="p-4 flex justify-between items-center hover:bg-surface-container-low transition-colors">
                        <div>
                          <p className="font-body-strong text-on-surface">Production Analytics API</p>
                          <p className="font-mono-data text-xs text-secondary mt-1">sk_prod_*********************49b</p>
                        </div>
                        <button className="text-secondary hover:text-rose-600 transition-colors">
                           <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </li>
                      <li className="p-4 flex justify-between items-center hover:bg-surface-container-low transition-colors">
                        <div>
                          <p className="font-body-strong text-on-surface">Staging Environment Key</p>
                          <p className="font-mono-data text-xs text-secondary mt-1">sk_test_*********************71x</p>
                        </div>
                        <button className="text-secondary hover:text-rose-600 transition-colors">
                           <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "Integrations" && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="font-headline-md text-xl font-bold text-on-surface mb-4">Connected Services</h3>
                    <div className="grid grid-cols-1 gap-4">
                      
                      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-5 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
                             <span className="material-symbols-outlined font-bold">tag</span>
                          </div>
                          <div>
                            <h4 className="font-body-strong text-on-surface">Slack Workspace</h4>
                            <p className="text-xs text-secondary mt-0.5">Alerts are sent to #sentinel-alerts</p>
                          </div>
                        </div>
                        <button className="px-4 py-1.5 bg-surface-container border border-outline-variant rounded-lg text-sm font-body-strong text-secondary hover:text-rose-600 transition-colors">
                          Disconnect
                        </button>
                      </div>

                      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-5 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                             <span className="material-symbols-outlined font-bold">mail</span>
                          </div>
                          <div>
                            <h4 className="font-body-strong text-on-surface">Email Delivery</h4>
                            <p className="text-xs text-secondary mt-0.5">Daily digest sent at 8:00 AM</p>
                          </div>
                        </div>
                        <button className="px-4 py-1.5 bg-surface-container border border-outline-variant rounded-lg text-sm font-body-strong text-on-surface hover:bg-surface-container-high transition-colors">
                          Configure
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>
    </>
  );
}
