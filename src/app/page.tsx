import { ICardCategory } from "@/interfaces/global";

import CardCategory from "@/components/molecules/CardCategory";

import { FaQuran, FaPray } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { LuBookText } from "react-icons/lu";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BsCalendar4Event } from "react-icons/bs";
import { TbPray } from "react-icons/tb";
import HeroTimeHome from "@/components/organisms/HeroTimeHome";

interface IState {
  categories: ICardCategory[]
}

export default function Home() {

  const state: IState = {
    categories: [
      {
        icon: <FaQuran size={50} />,
        name: 'Al-Quran',
        path: '/alquran'
      },
      {
        icon: <VscBook size={50} />,
        name: 'Doa Harian',
        path: '/doa-harian'
      },
      {
        icon: <RxCounterClockwiseClock size={50} />,
        name: 'Tasbih',
        path: '/tasbih'
      },
      {
        icon: <LuBookText size={50} />,
        name: 'Asmaul Husna',
        path: '/asmaul-husna'
      },
      {
        icon: <FaPray size={50} />,
        name: 'Jadwal Sholat',
        path: '/sholat'
      },
      {
        icon: <PiBookOpenTextLight size={50} />,
        name: 'Hadits',
        path: '/hadits'
      },
      {
        icon: <BsCalendar4Event size={50} />,
        name: 'Jadwal Imsak',
        path: '/jadwal-imsakiyah'
      },
      {
        icon: <TbPray size={50} />,
        name: 'Zikir',
        path: '/zikir'
      }
    ]
  }

  return (
    <>
      <HeroTimeHome />

      <section className="my-2 p-4">
        <div className="text-[#323334] font-bold text-lg mb-6 border-b pb-4">
          Semua Fitur 
        </div>

        <section className="grid grid-cols-3 gap-4">
          { state.categories.map((category, idx) => (
            <CardCategory
              key={idx}
              icon={category.icon}
              name={category.name}
              path={category.path}
            />
          )) }
        </section>
      </section>
    </>
  );
}
