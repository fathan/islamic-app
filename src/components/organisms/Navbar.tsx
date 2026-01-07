"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { CiDark, CiMenuBurger, CiSun } from "react-icons/ci";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const NavbarHeader: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-md bg-white dark:bg-gray-900 border-b">
        <div className="flex items-center justify-between h-14 px-6">
          <button onClick={() => setIsSidebarOpen(true)}>
            <CiMenuBurger size={22} />
          </button>

          <span className="font-semibold">Islamic App</span>

          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <CiSun /> : <CiDark />}
          </button>
        </div>
      </nav>



      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default NavbarHeader;
