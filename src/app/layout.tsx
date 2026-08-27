import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sentinel - Main Dashboard",
  description: "Publisher Intel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com" rel="preconnect"/>
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`bg-background text-on-surface font-body-base min-h-screen flex antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
