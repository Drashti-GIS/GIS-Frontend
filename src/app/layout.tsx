import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Land Data Admin Dashboard',
  description: 'Manage land data users and roles',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

