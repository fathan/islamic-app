"use client";

import Link from "next/link";
import { IoClose } from "react-icons/io5";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menu = [
    { label: "Home", href: "/" },
    { label: "Al-Qur'an", href: "/alquran" },
    { label: "Doa Harian", href: "/doa-harian" },
    { label: "Tasbih", href: "/tasbih" },
    { label: "Asmaul Husna", href: "/asmaul-husna" },
    { label: "Tentang Aplikasi", href: "/about" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold dark:text-white">Menu</h2>
          <button onClick={onClose}>
            <IoClose size={24} />
          </button>
        </div>

        {/* Menu */}
        <ul className="p-4 space-y-2">
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block rounded px-3 py-2 text-gray-700 dark:text-gray-200
                hover:bg-green-50 hover:text-green-600 dark:hover:bg-gray-800"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
