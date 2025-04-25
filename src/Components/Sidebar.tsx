'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
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
  HiOutlineMoon
} from 'react-icons/hi';

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
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="text-3xl text-gray-800 dark:text-white focus:outline-none"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      <div
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-white dark:bg-[#1f2937] border-r border-gray-200 dark:border-gray-700 px-6 py-8 shadow-md transform transition-transform duration-300 z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-wide">
            Admin Panel
          </h2>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-2xl text-gray-700 dark:text-gray-200"
          >
            {theme === 'dark' ? <HiOutlineSun /> : <HiOutlineMoon />}
          </button>
        </div>

        {/* Menu */}
        <ul className="space-y-2">
          {menuItems.map(({ name, icon: Icon, href }) => {
            const isActive = pathname === href;
            return (
              <li key={name}>
                <Link href={href}>
                  <span
                    className={`flex items-center gap-3 px-4 py-2 rounded-md text-base font-medium cursor-pointer transition-all duration-300 ease-in-out
                      ${isActive
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                  >
                    <Icon className="text-xl" />
                    {name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Logout */}
        <div className="mt-10">
          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 text-red-600 dark:text-red-400 hover:text-white hover:bg-red-500 dark:hover:bg-red-600 transition-all duration-300 px-4 py-2 rounded-md w-full"
          >
            <HiOutlineLogout className="text-xl" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}




