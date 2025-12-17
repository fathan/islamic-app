"use client";

import Link from "next/link";
import { CiDark, CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import Sidebar from "./Sidebar";

const NavbarHeader: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <CiMenuBurger size={30} />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-semibold text-[#323334] dark:text-white">
              Islamic App
            </span>
          </Link>

          {/* Dark mode icon */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <CiDark size={30} />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default NavbarHeader;
