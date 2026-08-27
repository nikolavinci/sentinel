"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/websites", label: "Websites" },
    { href: "/google-news", label: "Google News" },
    { href: "/competitors", label: "Competitors" },
    { href: "/alerts", label: "Alerts" },
    { href: "/settings", label: "Settings" }
  ];

  return (
    <header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline flat no shadows flex justify-between items-center w-full px-8 h-16 sticky top-0 z-30">
      <div className="flex items-center gap-4 md:hidden">
        <button className="p-2 text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <span className="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary">Sentinel</span>
      </div>

      <div className="hidden lg:flex items-center gap-8 h-full">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
          
          return (
            <Link 
              key={link.href}
              href={link.href}
              className={`font-body-strong h-full flex items-center transition-colors ${
                isActive 
                  ? "text-primary dark:text-inverse-primary border-b-2 border-primary dark:border-inverse-primary mt-[2px]" 
                  : "text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-inverse-primary cursor-pointer"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
          <input className="pl-9 pr-4 py-1.5 bg-surface-container-low border border-outline-variant rounded-full text-body-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 transition-all" placeholder="Search publishers..." type="text"/>
        </div>
        <button className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface relative cursor-pointer hover:bg-surface-variant transition-colors">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full border border-surface"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-bold text-sm cursor-pointer hover:opacity-90 transition-opacity">
          A
        </div>
      </div>
    </header>
  );
}
