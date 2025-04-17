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
  HiOutlineLogout
} from 'react-icons/hi';

const menuItems = [
  { name: 'Overview', icon: HiOutlineHome, href: '/admin/overview' },
  { name: 'Manage Users', icon: HiOutlineUserGroup, href: '/admin/manage-users' },
  {
    name:"Projects",icon:HiOutlineClipboardList,href:"/admin/projects"
  },
  { name: 'Manage Roles', icon: HiOutlineUserCircle, href: '/admin/manage-roles' },
  { name: 'Help Desk', icon: HiOutlineQuestionMarkCircle, href: '/admin/help-desk' },
  { name: 'Master Data', icon: HiOutlineDatabase, href: '/admin/master-data' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen bg-white border-r px-6 py-8 shadow-sm flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-8 tracking-wide text-center">Drashti</h2>
        <ul className="space-y-2">
          {menuItems.map(({ name, icon: Icon, href }) => (
            <li key={name}>
              <Link href={href}>
                <span
                  className={`flex items-center gap-3 px-4 py-2 rounded-md text-base font-medium cursor-pointer transition
                  ${
                    pathname === href
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  <Icon className="text-xl" />
                  {name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 👇 Logout at the bottom */}
      <div className="mt-10">
        <button
          onClick={() => window.location.href = '/'} // redirect to homepage or login
          className="flex items-center gap-2 text-red-600 hover:text-white hover:bg-red-500 transition px-4 py-2 rounded-md w-full"
        >
          <HiOutlineLogout className="text-xl" />
          Logout
        </button>
      </div>
    </div>
  );
}

