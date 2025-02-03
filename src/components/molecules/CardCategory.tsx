import Link from 'next/link';

import { ICardCategory } from "@/interfaces/global";

const CardCategory = (props: ICardCategory) => {
  const { icon, name, path } = props;

  return (
    <>
      <Link
        href={ path }
        className="border border-[#1b76ff] rounded-lg p-4 text-center w-full cursor-pointer hover:bg-blue-100"
      >
        <div className="mb-4 table m-auto text-[#1b76ff]">
          { icon }
        </div>

        <div>
          <span className="font-light text-[#1b76ff] text-sm">
            { name }
          </span>
        </div>
      </Link>
    </>
  )
};

export default CardCategory;
