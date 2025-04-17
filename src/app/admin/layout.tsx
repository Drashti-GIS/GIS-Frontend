import Sidebar from '../../Components/Sidebar';
import '../globals.css'; // If you're using Tailwind and global styles

export const metadata = {
  title: 'Drashti',
  description: 'Admin dashboard for managing users and content',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
}
