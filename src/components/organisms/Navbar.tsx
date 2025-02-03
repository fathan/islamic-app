import Link from 'next/link';
import { CiDark, CiMenuBurger } from "react-icons/ci";

const NavbarHeader: React.FC = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <CiMenuBurger size={30} />
          </button>
        </div>

        <Link href="/" className="items-center justify-between flex w-auto">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#323334] dark:text-white">
            Islamic App
          </span>
        </Link>

        <div className="flex space-x-3 md:space-x-0">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <CiDark size={30} />
          </button>
        </div>
      </div>
    </nav>
  )
};

export default NavbarHeader;
