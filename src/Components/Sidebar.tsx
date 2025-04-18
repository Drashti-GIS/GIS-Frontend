'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HiOutlineHome,
  HiOutlineClipboardList,
  HiOutlineDocumentReport,
  HiOutlineUserGroup,
  HiOutlineUserCircle,
  HiOutlineDatabase,
  HiOutlineQuestionMarkCircle,
  HiOutlineLightningBolt,
  HiOutlineBookOpen,
  HiOutlineLogout,
  HiOutlineSun,
  HiOutlineMoon,
} from 'react-icons/hi';

import { useEffect, useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode'; // ✅ Make sure this exists

const menuItems = [
  { name: 'Overview', icon: HiOutlineHome, href: '/admin/overview' },
  { name: 'Work Orders', icon: HiOutlineClipboardList, href: '/admin/work-orders' },
  { name: 'Reports', icon: HiOutlineDocumentReport, href: '/admin/reports' },
  { name: 'CX Enhancement', icon: HiOutlineLightningBolt, href: '/admin/cx-enhancement' },
  { name: 'Knowledge Base', icon: HiOutlineBookOpen, href: '/admin/knowledge-base' },
  { name: 'Help Desk', icon: HiOutlineQuestionMarkCircle, href: '/admin/help-desk' },
  { name: 'Manage Users', icon: HiOutlineUserGroup, href: '/admin/manage-users' },
  { name: 'Manage Roles', icon: HiOutlineUserCircle, href: '/admin/manage-roles' },
  { name: 'Master Data', icon: HiOutlineDatabase, href: '/admin/master-data' },
  { name: 'Projects', icon: HiOutlineClipboardList, href: '/admin/projects' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [animate, setAnimate] = useState(false);
  const { theme, toggleTheme } = useDarkMode(); // ✅ Custom hook

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`h-screen bg-white dark:bg-[#1f2937] border-r border-gray-200 dark:border-gray-700 px-6 py-8 shadow-sm flex flex-col justify-between transform transition-all duration-700 ${
        animate ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
      }`}
    >
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8 tracking-wide">
          Admin Panel
        </h2>

        <ul className="space-y-2">
          {menuItems.map(({ name, icon: Icon, href }) => {
            const isActive = pathname === href;
            return (
              <li key={name}>
                <Link href={href}>
                  <span
                    className={`flex items-center gap-3 px-4 py-2 rounded-md text-base font-medium cursor-pointer transition-all duration-300 ease-in-out
                      ${
                        isActive
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold scale-[1.02] shadow-md'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-[1.01]'
                      }`}
                  >
                    <Icon className="text-xl transition-transform duration-300" />
                    {name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* 🔁 Dark Mode Toggle */}
        <div className="mt-10 mb-4">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300 px-4 py-2 rounded-md w-full"
          >
            {theme === 'dark' ? (
              <>
                <HiOutlineSun className="text-xl" />
                Light Mode
              </>
            ) : (
              <>
                <HiOutlineMoon className="text-xl" />
                Dark Mode
              </>
            )}
          </button>
        </div>
      </div>

      {/* 🚪 Logout */}
      <div>
        <button
          onClick={() => (window.location.href = '/')}
          className="flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-white hover:bg-red-500 dark:hover:bg-red-600 transition-all duration-300 px-4 py-2 rounded-md w-full"
        >
          <HiOutlineLogout className="text-xl" />
          Logout
        </button>
      </div>
    </div>
  );
}


