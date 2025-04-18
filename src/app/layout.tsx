// src/app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Land Data System',
  description: 'Platform for land project analysis',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
