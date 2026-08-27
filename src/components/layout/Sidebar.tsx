"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", icon: "analytics", label: "Intelligence" },
    { href: "/websites", icon: "language", label: "Websites" },
    { href: "/google-news", icon: "travel_explore", label: "Google News" },
    { href: "/competitors", icon: "compare_arrows", label: "Competitors" },
    { href: "/alerts", icon: "notifications_active", label: "Alerts" },
    { href: "/settings", icon: "settings", label: "Settings" }
  ];

  return (
    <nav className="hidden md:flex bg-surface-container-low dark:bg-inverse-surface fixed left-0 top-0 h-full flex-col py-6 px-4 z-40 w-64 border-r border-outline-variant/30">
      <div className="mb-10 px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-on-primary font-bold">
            <span className="material-symbols-outlined text-lg">public</span>
          </div>
          <div>
            <h1 className="font-headline-md text-headline-md font-black text-on-surface dark:text-inverse-on-surface">Sentinel</h1>
            <p className="font-label-sm text-label-sm text-secondary">Publisher Intel</p>
          </div>
        </Link>
      </div>

      <div className="flex-1 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
          
          return (
            <Link 
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 font-body-strong rounded-xl group transition-all duration-200 ease-in-out ${
                isActive 
                  ? "bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary" 
                  : "text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-high dark:hover:bg-surface-variant"
              }`}
            >
              <span 
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {link.icon}
              </span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto pt-6 px-2">
        <Link href="/alerts" className="w-full py-3 bg-primary text-on-primary rounded-xl font-body-strong hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-sm">
          <span className="material-symbols-outlined text-sm">add</span>
          Create Alert
        </Link>
      </div>
    </nav>
  );
}
