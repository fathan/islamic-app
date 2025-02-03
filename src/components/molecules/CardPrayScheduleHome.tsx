import { ICardPraySchedule } from "@/interfaces/global";

const CardPrayScheduleHome: React.FC<ICardPraySchedule> = (props) => {
  const { title, icon, time } = props;

  return (
    <div className="flex flex-col items-center text-[#f0f6fb] gap-2 w-full">
      <div>{ title }</div>
      <div>{ icon }</div>
      <div>{ time }</div>
    </div>
  )
};

export default CardPrayScheduleHome;
