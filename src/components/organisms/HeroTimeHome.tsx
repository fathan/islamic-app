import CardPrayScheduleHome from "@/components/molecules/CardPrayScheduleHome";
import { ICardPraySchedule } from "@/interfaces/global";

import { FaQuran } from "react-icons/fa";

interface IState {
  praySchedules: ICardPraySchedule[]
}

const HeroTimeHome: React.FC = () => {

  const state: IState = {

    praySchedules: [
      {
        title: 'Subuh',
        icon: <FaQuran size={20} />,
        time: '00:00'
      },
      {
        title: 'Dzuhur',
        icon: <FaQuran size={20} />,
        time: '00:00'
      },
      {
        title: 'Ashar',
        icon: <FaQuran size={20} />,
        time: '00:00'
      },
      {
        title: 'Maghrib',
        icon: <FaQuran size={20} />,
        time: '00:00'
      },
      {
        title: 'Isya',
        icon: <FaQuran size={20} />,
        time: '00:00'
      }
    ]
  }

  return (
    <section className="p-4">
      <div className="animated-background bg-gradient-to-r from-cyan-500 to-[#1b76ff] p-4 rounded-xl shadow-lg">
        <div className="mb-10">
          <div className="font-bold text-[#f0f6fb] text-base">
            9 Ramadhan 1444 H
          </div>

          <div className="font-light text-sm text-[#f0f6fb]">
            Sukabumi, Indonesia
          </div>
        </div>

        <div className="text-center mb-10">
          <div className="font-bold text-[#f0f6fb] text-4xl">
            10:20
          </div>

          <div className="font-light text-sm text-[#f0f6fb]">
            Dzuhur 2 Jam 15 menit lagi!
          </div>
        </div>

        <div className="flex flex-row w-full">
          { state.praySchedules.map((item, idx) => {
            return (
              <CardPrayScheduleHome
                key={idx}
                title={item.title}
                icon={item.icon}
                time={item.time}
              />
            )
          }) }
        </div>
      </div>
    </section>
  )
};

export default HeroTimeHome;
